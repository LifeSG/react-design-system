import{jsx as e,jsxs as t,Fragment as r}from"react/jsx-runtime";import*as n from"react";import o,{version as i,useRef as a,useState as s,isValidElement as l,createRef as d,cloneElement as c,PureComponent as u,useEffect as h,useLayoutEffect as f,useCallback as g,createContext as m,useContext as p,Children as b,useMemo as v,useImperativeHandle as y,useReducer as x,lazy as w,Suspense as $,createElement as C,forwardRef as S}from"react";import{ICircleFillIcon as D}from"@lifesg/react-icons/i-circle-fill";import k,{css as F,isStyledComponent as E,ThemeContext as _,keyframes as O,useTheme as T}from"styled-components";import{ExternalIcon as I}from"@lifesg/react-icons/external";import{CrossIcon as M}from"@lifesg/react-icons/cross";import{useFloatingTree as B,FloatingTree as A,useFloatingNodeId as z,FloatingNode as j,useFloating as L,useTransitionStatus as R,useDismiss as P,useInteractions as H,FloatingFocusManager as N,autoUpdate as W,offset as Y,flip as V,shift as U,limitShift as K,size as Z,useClick as q,useHover as G,useFocus as X,FloatingPortal as Q,useTransitionStyles as J}from"@floating-ui/react";import ee,{findDOMNode as te}from"react-dom";import{ExclamationCircleFillIcon as re}from"@lifesg/react-icons/exclamation-circle-fill";import{ChevronDownIcon as ne}from"@lifesg/react-icons/chevron-down";import{ChevronLeftIcon as oe}from"@lifesg/react-icons/chevron-left";import{ChevronRightIcon as ie}from"@lifesg/react-icons/chevron-right";import{ArrowRightIcon as ae,PencilIcon as se,EraserIcon as le,TickCircleFillIcon as de,ChevronDownIcon as ce}from"@lifesg/react-icons";import{SquareIcon as ue}from"@lifesg/react-icons/square";import{SquareFillIcon as he}from"@lifesg/react-icons/square-fill";import{SquareTickFillIcon as fe}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as ge}from"@lifesg/react-icons/tick";import{MagnifierIcon as me}from"@lifesg/react-icons/magnifier";import{CaretRightIcon as pe}from"@lifesg/react-icons/caret-right";import{MinusSquareFillIcon as be}from"@lifesg/react-icons/minus-square-fill";import{EyeIcon as ve}from"@lifesg/react-icons/eye";import{EyeSlashIcon as ye}from"@lifesg/react-icons/eye-slash";import{ExclamationTriangleIcon as xe}from"@lifesg/react-icons/exclamation-triangle";import{ChevronUpIcon as we}from"@lifesg/react-icons/chevron-up";import{ArrowRightIcon as $e}from"@lifesg/react-icons/arrow-right";import{ExclamationTriangleFillIcon as Ce}from"@lifesg/react-icons/exclamation-triangle-fill";import{TickCircleFillIcon as Se}from"@lifesg/react-icons/tick-circle-fill";import{CircleIcon as De}from"@lifesg/react-icons/circle";import{CircleDotIcon as ke}from"@lifesg/react-icons/circle-dot";function Fe(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}function Ee(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{l(n.next(e))}catch(e){i(e)}}function s(e){try{l(n.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}l((n=n.apply(e,t||[])).next())}))}"function"==typeof SuppressedError&&SuppressedError;var _e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function Oe(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Te={exports:{}};Te.exports=function(){var e=1e3,t=6e4,r=36e5,n="millisecond",o="second",i="minute",a="hour",s="day",l="week",d="month",c="quarter",u="year",h="date",f="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}},b=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},v={s:b,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),o=r%60;return(t<=0?"+":"-")+b(n,2,"0")+":"+b(o,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),o=t.clone().add(n,d),i=r-o<0,a=t.clone().add(n+(i?-1:1),d);return+(-(n+(r-o)/(i?o-a:a-o))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:s,D:h,h:a,m:i,s:o,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},y="en",x={};x[y]=p;var w="$isDayjsObject",$=function(e){return e instanceof k||!(!e||!e[w])},C=function e(t,r,n){var o;if(!t)return y;if("string"==typeof t){var i=t.toLowerCase();x[i]&&(o=i),r&&(x[i]=r,o=i);var a=t.split("-");if(!o&&a.length>1)return e(a[0])}else{var s=t.name;x[s]=t,o=s}return!n&&o&&(y=o),o||!n&&y},S=function(e,t){if($(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new k(r)},D=v;D.l=C,D.i=$,D.w=function(e,t){return S(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var k=function(){function p(e){this.$L=C(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var b=p.prototype;return b.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(D.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(g);if(n){var o=n[2]-1||0,i=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(t)}(e),this.init()},b.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},b.$utils=function(){return D},b.isValid=function(){return!(this.$d.toString()===f)},b.isSame=function(e,t){var r=S(e);return this.startOf(t)<=r&&r<=this.endOf(t)},b.isAfter=function(e,t){return S(e)<this.startOf(t)},b.isBefore=function(e,t){return this.endOf(t)<S(e)},b.$g=function(e,t,r){return D.u(e)?this[t]:this.set(r,e)},b.unix=function(){return Math.floor(this.valueOf()/1e3)},b.valueOf=function(){return this.$d.getTime()},b.startOf=function(e,t){var r=this,n=!!D.u(t)||t,c=D.p(e),f=function(e,t){var o=D.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?o:o.endOf(s)},g=function(e,t){return D.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},m=this.$W,p=this.$M,b=this.$D,v="set"+(this.$u?"UTC":"");switch(c){case u:return n?f(1,0):f(31,11);case d:return n?f(1,p):f(0,p+1);case l:var y=this.$locale().weekStart||0,x=(m<y?m+7:m)-y;return f(n?b-x:b+(6-x),p);case s:case h:return g(v+"Hours",0);case a:return g(v+"Minutes",1);case i:return g(v+"Seconds",2);case o:return g(v+"Milliseconds",3);default:return this.clone()}},b.endOf=function(e){return this.startOf(e,!1)},b.$set=function(e,t){var r,l=D.p(e),c="set"+(this.$u?"UTC":""),f=(r={},r[s]=c+"Date",r[h]=c+"Date",r[d]=c+"Month",r[u]=c+"FullYear",r[a]=c+"Hours",r[i]=c+"Minutes",r[o]=c+"Seconds",r[n]=c+"Milliseconds",r)[l],g=l===s?this.$D+(t-this.$W):t;if(l===d||l===u){var m=this.clone().set(h,1);m.$d[f](g),m.init(),this.$d=m.set(h,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f](g);return this.init(),this},b.set=function(e,t){return this.clone().$set(e,t)},b.get=function(e){return this[D.p(e)]()},b.add=function(n,c){var h,f=this;n=Number(n);var g=D.p(c),m=function(e){var t=S(f);return D.w(t.date(t.date()+Math.round(e*n)),f)};if(g===d)return this.set(d,this.$M+n);if(g===u)return this.set(u,this.$y+n);if(g===s)return m(1);if(g===l)return m(7);var p=(h={},h[i]=t,h[a]=r,h[o]=e,h)[g]||1,b=this.$d.getTime()+n*p;return D.w(b,this)},b.subtract=function(e,t){return this.add(-1*e,t)},b.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||f;var n=e||"YYYY-MM-DDTHH:mm:ssZ",o=D.z(this),i=this.$H,a=this.$m,s=this.$M,l=r.weekdays,d=r.months,c=r.meridiem,u=function(e,r,o,i){return e&&(e[r]||e(t,n))||o[r].slice(0,i)},h=function(e){return D.s(i%12||12,e,"0")},g=c||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(m,(function(e,n){return n||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return D.s(t.$y,4,"0");case"M":return s+1;case"MM":return D.s(s+1,2,"0");case"MMM":return u(r.monthsShort,s,d,3);case"MMMM":return u(d,s);case"D":return t.$D;case"DD":return D.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return u(r.weekdaysMin,t.$W,l,2);case"ddd":return u(r.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(i);case"HH":return D.s(i,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return g(i,a,!0);case"A":return g(i,a,!1);case"m":return String(a);case"mm":return D.s(a,2,"0");case"s":return String(t.$s);case"ss":return D.s(t.$s,2,"0");case"SSS":return D.s(t.$ms,3,"0");case"Z":return o}return null}(e)||o.replace(":","")}))},b.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},b.diff=function(n,h,f){var g,m=this,p=D.p(h),b=S(n),v=(b.utcOffset()-this.utcOffset())*t,y=this-b,x=function(){return D.m(m,b)};switch(p){case u:g=x()/12;break;case d:g=x();break;case c:g=x()/3;break;case l:g=(y-v)/6048e5;break;case s:g=(y-v)/864e5;break;case a:g=y/r;break;case i:g=y/t;break;case o:g=y/e;break;default:g=y}return f?g:D.a(g)},b.daysInMonth=function(){return this.endOf(d).$D},b.$locale=function(){return x[this.$L]},b.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=C(e,t,!0);return n&&(r.$L=n),r},b.clone=function(){return D.w(this.$d,this)},b.toDate=function(){return new Date(this.valueOf())},b.toJSON=function(){return this.isValid()?this.toISOString():null},b.toISOString=function(){return this.$d.toISOString()},b.toString=function(){return this.$d.toUTCString()},p}(),F=k.prototype;return S.prototype=F,[["$ms",n],["$s",o],["$m",i],["$H",a],["$W",s],["$M",d],["$y",u],["$D",h]].forEach((function(e){F[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),S.extend=function(e,t){return e.$i||(e(t,k,S),e.$i=!0),S},S.locale=C,S.isDayjs=$,S.unix=function(e){return S(1e3*e)},S.en=x[y],S.Ls=x,S.p={},S}();var Ie=Oe(Te.exports),Me={exports:{}};Me.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,n=/\d\d?/,o=/\d*[^-_:/,()\s\d]+/,i={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),r=60*t[1]+(+t[2]||0);return 0===r?0:"+"===t[0]?-r:r}(e)}],d=function(e){var t=i[e];return t&&(t.indexOf?t:t.s.concat(t.f))},c=function(e,t){var r,n=i.meridiem;if(n){for(var o=1;o<=24;o+=1)if(e.indexOf(n(o,0,t))>-1){r=o>12;break}}else r=e===(t?"pm":"PM");return r},u={A:[o,function(e){this.afternoon=c(e,!1)}],a:[o,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[r,s("day")],Do:[o,function(e){var t=i.ordinal,r=e.match(/\d+/);if(this.day=r[0],t)for(var n=1;n<=31;n+=1)t(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[r,s("month")],MMM:[o,function(e){var t=d("months"),r=(d("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],MMMM:[o,function(e){var t=d("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[r,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(r){var n,o;n=r,o=i&&i.formats;for(var a=(r=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,r,n){var i=n&&n.toUpperCase();return r||o[n]||e[n]||o[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,r){return t||r.slice(1)}))}))).match(t),s=a.length,l=0;l<s;l+=1){var d=a[l],c=u[d],h=c&&c[0],f=c&&c[1];a[l]=f?{regex:h,parser:f}:d.replace(/^\[|\]$/g,"")}return function(e){for(var t={},r=0,n=0;r<s;r+=1){var o=a[r];if("string"==typeof o)n+=o.length;else{var i=o.regex,l=o.parser,d=e.slice(n),c=i.exec(d)[0];l.call(t,c),e=e.replace(c,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var r=e.hours;t?r<12&&(e.hours+=12):12===r&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,r){r.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var n=t.prototype,o=n.parse;n.parse=function(e){var t=e.date,n=e.utc,a=e.args;this.$u=n;var s=a[1];if("string"==typeof s){var l=!0===a[2],d=!0===a[3],c=l||d,u=a[2];d&&(u=a[2]),i=this.$locale(),!l&&u&&(i=r.Ls[u]),this.$d=function(e,t,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var n=h(t)(e),o=n.year,i=n.month,a=n.day,s=n.hours,l=n.minutes,d=n.seconds,c=n.milliseconds,u=n.zone,f=new Date,g=a||(o||i?1:f.getDate()),m=o||f.getFullYear(),p=0;o&&!i||(p=i>0?i-1:f.getMonth());var b=s||0,v=l||0,y=d||0,x=c||0;return u?new Date(Date.UTC(m,p,g,b,v,y,x+60*u.offset*1e3)):r?new Date(Date.UTC(m,p,g,b,v,y,x)):new Date(m,p,g,b,v,y,x)}catch(e){return new Date("")}}(t,s,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&t!=this.format(s)&&(this.$d=new Date("")),i={}}else if(s instanceof Array)for(var f=s.length,g=1;g<=f;g+=1){a[1]=s[g-1];var m=r.apply(this,a);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}g===f&&(this.$d=new Date(""))}else o.call(this,e)}}}();var Be=Oe(Me.exports),Ae={exports:{}};Ae.exports=function(e,t,r){t.prototype.isBetween=function(e,t,n,o){var i=r(e),a=r(t),s="("===(o=o||"()")[0],l=")"===o[1];return(s?this.isAfter(i,n):!this.isBefore(i,n))&&(l?this.isBefore(a,n):!this.isAfter(a,n))||(s?this.isBefore(i,n):!this.isAfter(i,n))&&(l?this.isAfter(a,n):!this.isBefore(a,n))}};var ze=Oe(Ae.exports),je={exports:{}};je.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var Le=Oe(je.exports),Re={exports:{}};Re.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var Pe,He,Ne=Oe(Re.exports),We={exports:{}};We.exports=(Pe={year:0,month:1,day:2,hour:3,minute:4,second:5},He={},function(e,t,r){var n,o=function(e,t,r){void 0===r&&(r={});var n=new Date(e),o=function(e,t){void 0===t&&(t={});var r=t.timeZoneName||"short",n=e+"|"+r,o=He[n];return o||(o=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:r}),He[n]=o),o}(t,r);return o.formatToParts(n)},i=function(e,t){for(var n=o(e,t),i=[],a=0;a<n.length;a+=1){var s=n[a],l=s.type,d=s.value,c=Pe[l];c>=0&&(i[c]=parseInt(d,10))}var u=i[3],h=24===u?0:u,f=i[0]+"-"+i[1]+"-"+i[2]+" "+h+":"+i[4]+":"+i[5]+":000",g=+e;return(r.utc(f).valueOf()-(g-=g%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=n);var o=this.utcOffset(),i=this.toDate(),a=i.toLocaleString("en-US",{timeZone:e}),s=Math.round((i-new Date(a))/1e3/60),l=r(a,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-s,!0);if(t){var d=l.utcOffset();l=l.add(o-d,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var t=this.$x.$timezone||r.tz.guess(),n=o(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var n=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,e,t).tz(this.$x.$timezone,!0)},r.tz=function(e,t,o){var a=o&&t,s=o||t||n,l=i(+r(),s);if("string"!=typeof e)return r(e).tz(s);var d=function(e,t,r){var n=e-60*t*1e3,o=i(n,r);if(t===o)return[n,t];var a=i(n-=60*(o-t)*1e3,r);return o===a?[n,o]:[e-60*Math.min(o,a)*1e3,Math.max(o,a)]}(r.utc(e,a).valueOf(),l,s),c=d[0],u=d[1],h=r(c).utcOffset(u);return h.$x.$timezone=s,h},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function(e){n=e}});var Ye,Ve=Oe(We.exports);Ie.extend(ze),Ie.extend(Ne),Ie.extend(Le),Ie.extend(Be),Ie.extend(Ve),function(e){e.generateDays=e=>{const t=e.startOf("month"),r=Ie(t).startOf("week");return Ue(r).map((e=>Ke(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Ke(t)},e.generateMonths=e=>{const t=[];for(let r=0;r<12;r++){const n=e.month(r);t.push(Ie(n))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),r=10*Math.floor(t/10),n=e.year(r),o=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)o.push(n.add(e,"year"));return o},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+Ie(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=Ie(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,r,n="day")=>!t&&!r||(t&&r?e.isBetween(t,r,n,"[]"):t?e.isSameOrAfter(t,n):e.isSameOrBefore(r,n)),e.isPreviousMonthWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"month"),r,void 0,"month"),e.isPreviousYearWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"year"),r,void 0,"year"),e.isPreviousDecadeWithinRange=(t,r)=>{const{beginDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).subtract(1,"year"),r,void 0,"year")},e.isNextMonthWithinRange=(t,r)=>e.isWithinRange(t.add(1,"month"),void 0,r,"month"),e.isNextYearWithinRange=(t,r)=>e.isWithinRange(t.add(1,"year"),void 0,r,"year"),e.isNextDecadeWithinRange=(t,r)=>{const{endDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).add(1,"year"),void 0,r,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,r,n,o)=>{const i=e.isWithinRange(t,n?Ie(n):void 0,o?Ie(o):void 0),a=r&&r.includes(t.format("YYYY-MM-DD"));return!i||!!a}}(Ye||(Ye={}));const Ue=e=>{const t=[e];for(let r=1;r<6;r++){const n=e.add(r,"week");t.push(n)}return t},Ke=e=>{const t=[];for(let r=0;r<7;r++){const n=e.add(r,"day");t.push(n)}return t},Ze=[1,3,5,7,8,10,12],qe=[4,6,9,11];var Ge,Xe;!function(e){e.clampDay=(t,r,n)=>{const o=parseInt(t),i=parseInt(r),a=parseInt(n);return 0==o?"1":Ze.includes(i)?Math.min(o,31).toString():qe.includes(i)?Math.min(o,30).toString():2===i?e.isLeapYear(a)?Math.min(o,29).toString():Math.min(o,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,r="HH:mm")=>{const n=Ie(e,r);return Ie(t,r).diff(n,"minute")},e.toDayjs=e=>e?Ie(e):Ie(),e.addMinutesToTime=(e,t,r="HH:mm")=>Ie(e,r).add(t,"minutes").format(r),e.isSame=(e,t,r="day")=>Ie(e).isSame(Ie(t),r)}(Ge||(Ge={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:r,minDate:n,maxDate:o}=t;return!!(e&&r&&r.length&&r.includes(e))||(!(!n||!Ie(e).isBefore(n,"day"))||!(!o||!Ie(e).isAfter(o,"day")))},e.sanitizeInput=e=>{if(e){const r=t(e);if(Ie(r,"YYYY-MM-DD",!0).isValid())return r}return""};const t=e=>{const t=e.match(/^(\d{1,4})-(\d{1,2})-(\d{1,2})$/);if(!t)return"";const[,r,n,o]=t;if(r.length<=2||parseInt(r,10)<100)return"";return`${r.padStart(4,"0")}-${n.padStart(2,"0")}-${o.padStart(2,"0")}`}}(Xe||(Xe={}));const Qe=()=>{const e=i.split(".");return parseInt(e[0],10)>=19},Je=(...e)=>t=>{const r=[];for(const n of e)if("function"==typeof n){const e=n(t),o="function"==typeof e;r.push(o?e:()=>n(null))}else n.current=t,r.push((()=>{n.current=null}));if(Qe())return()=>{for(const e of r)e()}};var et,tt;!function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(et||(et={})),function(e){e.transformWithSpaces=(e,t)=>{const r="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const r=Math.floor(t/9);return e.length>=2*r||1===e.split(" ").length&&e.length>r},e.truncateOneLine=(e,t,r,n,o=8)=>{let i=0;t>r&&(i=Math.floor((t-r)/o));const a=n+i;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,r,n=1.2)=>{const o=Math.floor(2*t/(.6*r))*(2/n);if(e.length<=o)return e;const i=Math.floor(.6*o),a=Math.floor(.2*o);return`${e.substring(0,i)}...${e.substring(e.length-a)}`},e.getTextWidth=(t,r)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=r;return n.measureText(t).width},e.maskValue=(e,r)=>{if(!e)return e;const{maskRange:n,unmaskRange:o,maskChar:i="•",maskRegex:a,maskTransformer:s}=r;if(s)return s(e);if(a)return e.replace(a,i);if(n){const{startIndex:r,endIndex:o}=t(n[0],n[1]);return e.substring(0,r)+i.repeat(e.substring(r,o+1).length)+e.substring(o+1)}if(o){const{startIndex:r,endIndex:n}=t(o[0],o[1]);return i.repeat(e.substring(0,r).length)+e.substring(r,n+1)+i.repeat(e.substring(n+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e},r=new Intl.PluralRules("en",{type:"ordinal"}),n=new Map([["one","st"],["two","nd"],["few","rd"],["other","th"]]);e.formatOrdinal=e=>{const t=r.select(e);return`${e}${n.get(t)}`},e.getMaskedDescription=(e,t,r)=>{if(!e||"masked"!==t||!r)return"";const[n,o]=r,i=n>0,a=o<e.length-1,s=i?e.substring(0,n):"",l=a?e.substring(o+1):"";return i&&a?`Starting with ${s} and ending with ${l}`:i?`Starting with ${s}`:a?`Ending with ${l}`:""}}(tt||(tt={}));var rt=function(e,t){return rt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},rt(e,t)};var nt=function(){return nt=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},nt.apply(this,arguments)};var ot="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var it=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},at="object"==typeof ot&&ot&&ot.Object===Object&&ot,st="object"==typeof self&&self&&self.Object===Object&&self,lt=at||st||Function("return this")(),dt=lt,ct=function(){return dt.Date.now()},ut=/\s/;var ht=function(e){for(var t=e.length;t--&&ut.test(e.charAt(t)););return t},ft=/^\s+/;var gt=function(e){return e?e.slice(0,ht(e)+1).replace(ft,""):e},mt=lt.Symbol,pt=mt,bt=Object.prototype,vt=bt.hasOwnProperty,yt=bt.toString,xt=pt?pt.toStringTag:void 0;var wt=function(e){var t=vt.call(e,xt),r=e[xt];try{e[xt]=void 0;var n=!0}catch(e){}var o=yt.call(e);return n&&(t?e[xt]=r:delete e[xt]),o},$t=Object.prototype.toString;var Ct=wt,St=function(e){return $t.call(e)},Dt=mt?mt.toStringTag:void 0;var kt=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Dt&&Dt in Object(e)?Ct(e):St(e)},Ft=function(e){return null!=e&&"object"==typeof e};var Et=gt,_t=it,Ot=function(e){return"symbol"==typeof e||Ft(e)&&"[object Symbol]"==kt(e)},Tt=/^[-+]0x[0-9a-f]+$/i,It=/^0b[01]+$/i,Mt=/^0o[0-7]+$/i,Bt=parseInt;var At=it,zt=ct,jt=function(e){if("number"==typeof e)return e;if(Ot(e))return NaN;if(_t(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=_t(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Et(e);var r=It.test(e);return r||Mt.test(e)?Bt(e.slice(2),r?2:8):Tt.test(e)?NaN:+e},Lt=Math.max,Rt=Math.min;var Pt=function(e,t,r){var n,o,i,a,s,l,d=0,c=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var r=n,i=o;return n=o=void 0,d=t,a=e.apply(i,r)}function g(e){var r=e-l;return void 0===l||r>=t||r<0||u&&e-d>=i}function m(){var e=zt();if(g(e))return p(e);s=setTimeout(m,function(e){var r=t-(e-l);return u?Rt(r,i-(e-d)):r}(e))}function p(e){return s=void 0,h&&n?f(e):(n=o=void 0,a)}function b(){var e=zt(),r=g(e);if(n=arguments,o=this,l=e,r){if(void 0===s)return function(e){return d=e,s=setTimeout(m,t),c?f(e):a}(l);if(u)return clearTimeout(s),s=setTimeout(m,t),f(l)}return void 0===s&&(s=setTimeout(m,t)),a}return t=jt(t)||0,At(r)&&(c=!!r.leading,i=(u="maxWait"in r)?Lt(jt(r.maxWait)||0,t):i,h="trailing"in r?!!r.trailing:h),b.cancel=function(){void 0!==s&&clearTimeout(s),d=0,n=l=o=s=void 0},b.flush=function(){return void 0===s?a:p(zt())},b},Ht=Pt,Nt=it;var Wt=function(e,t,r){var n=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Nt(r)&&(n="leading"in r?!!r.leading:n,o="trailing"in r?!!r.trailing:o),Ht(e,t,{leading:n,maxWait:t,trailing:o})},Yt=function(e,t,r,n){switch(t){case"debounce":return Pt(e,r,n);case"throttle":return Wt(e,r,n);default:return e}},Vt=function(e){return"function"==typeof e},Ut=function(){return"undefined"==typeof window},Kt=function(e){return e instanceof Element||e instanceof HTMLDocument},Zt=function(e,t,r,n){return function(o){var i=o.width,a=o.height;t((function(t){return t.width===i&&t.height===a||t.width===i&&!n||t.height===a&&!r?t:(e&&Vt(e)&&e(i,a),{width:i,height:a})}))}};!function(e){function t(t){var r=e.call(this,t)||this;r.cancelHandler=function(){r.resizeHandler&&r.resizeHandler.cancel&&(r.resizeHandler.cancel(),r.resizeHandler=null)},r.attachObserver=function(){var e=r.props,t=e.targetRef,n=e.observerOptions;if(!Ut()){t&&t.current&&(r.targetRef.current=t.current);var o=r.getElement();o&&(r.observableElement&&r.observableElement===o||(r.observableElement=o,r.resizeObserver.observe(o,n)))}},r.getElement=function(){var e=r.props,t=e.querySelector,n=e.targetDomEl;if(Ut())return null;if(t)return document.querySelector(t);if(n&&Kt(n))return n;if(r.targetRef&&Kt(r.targetRef.current))return r.targetRef.current;var o=te(r);if(!o)return null;switch(r.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return o;default:return o.parentElement}},r.createResizeHandler=function(e){var t=r.props,n=t.handleWidth,o=void 0===n||n,i=t.handleHeight,a=void 0===i||i,s=t.onResize;if(o||a){var l=Zt(s,r.setState.bind(r),o,a);e.forEach((function(e){var t=e&&e.contentRect||{},n=t.width,o=t.height;!r.skipOnMount&&!Ut()&&l({width:n,height:o}),r.skipOnMount=!1}))}},r.getRenderType=function(){var e=r.props,t=e.render,n=e.children;return Vt(t)?"renderProp":Vt(n)?"childFunction":l(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=t.skipOnMount,o=t.refreshMode,i=t.refreshRate,a=void 0===i?1e3:i,s=t.refreshOptions;return r.state={width:void 0,height:void 0},r.skipOnMount=n,r.targetRef=d(),r.observableElement=null,Ut()||(r.resizeHandler=Yt(r.createResizeHandler,o,a,s),r.resizeObserver=new window.ResizeObserver(r.resizeHandler)),r}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}rt(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){Ut()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,r=t.render,o=t.children,i=t.nodeType,a=void 0===i?"div":i,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return r&&r(l);case"childFunction":return(e=o)(l);case"child":if((e=o).type&&"string"==typeof e.type){var d=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}(l,["targetRef"]);return c(e,d)}return c(e,l);case"childArray":return(e=o).map((function(e){return!!e&&c(e,l)}));default:return n.createElement(a,null)}}}(u);var qt=Ut()?h:f;function Gt(e){void 0===e&&(e={});var t=e.skipOnMount,r=void 0!==t&&t,n=e.refreshMode,o=e.refreshRate,i=void 0===o?1e3:o,l=e.refreshOptions,d=e.handleWidth,c=void 0===d||d,u=e.handleHeight,h=void 0===u||u,f=e.targetRef,g=e.observerOptions,m=e.onResize,p=a(r),b=a(null),v=null!=f?f:b,y=a(),x=s({width:void 0,height:void 0}),w=x[0],$=x[1];return qt((function(){if(!Ut()){var e=Zt(m,$,c,h);y.current=Yt((function(t){(c||h)&&t.forEach((function(t){var r=t&&t.contentRect||{},n=r.width,o=r.height;!p.current&&!Ut()&&e({width:n,height:o}),p.current=!1}))}),n,i,l);var t=new window.ResizeObserver(y.current);return v.current&&t.observe(v.current,g),function(){t.disconnect();var e=y.current;e&&e.cancel&&e.cancel()}}}),[n,i,l,c,h,m,g,v.current]),nt({ref:v},w)}function Xt(e){const t=a(null);f((()=>{t.current=e}),[e]);return g(((...e)=>{var r;return null===(r=t.current)||void 0===r?void 0:r.call(t,...e)}),[])}const Qt=(e,t,r="window",n)=>{const o=a();h((()=>{o.current=t}),[t]),h((()=>{let t;switch(r){case"window":t=window;break;case"document":t=document;break;default:t=r}if(!t||!t.addEventListener)return;const i=e=>{var t;return null===(t=o.current)||void 0===t?void 0:t.call(o,e)};return t.addEventListener(e,i,n),()=>{null==t||t.removeEventListener(e,i,n)}}),[e,r])},Jt=()=>{const[e,t]=s(!1);return h((()=>{t(!0)}),[]),e};function er({ref:e,formatter:t}){return()=>{var r;const n=e.current;if(!n)return;const o=n.value,i=t(o),a=null!==(r=n.selectionEnd)&&void 0!==r?r:0,s=o.substring(0,a),l=t(s),d=s.length-l.length,c=Math.max(0,a-d);return{nextValue:i,updateCaretPosition:()=>{n.value=i,n.setSelectionRange(c,c)}}}}const tr=e=>{const t=(e=>{const t=a(e),r=a();return h((()=>{r.current=t.current,t.current=e}),[e]),r.current})(e);return t!==e},rr=e=>{const[t,r]=s(e),n=a(e);return[t,g((e=>{n.current=e,r(e)}),[]),n]};var nr,or={exports:{}};nr=e=>(()=>{var t={"./node_modules/css-mediaquery/index.js":
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
	  \***********************************************************/(e,t)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,r=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,d=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,f=e?Symbol.for("react.suspense_list"):60120,g=e?Symbol.for("react.memo"):60115,m=e?Symbol.for("react.lazy"):60116,p=e?Symbol.for("react.block"):60121,b=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,y=e?Symbol.for("react.scope"):60119;function x(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:var f=e.type;switch(f){case d:case c:case o:case a:case i:case h:return f;default:var p=f&&f.$$typeof;switch(p){case l:case u:case m:case g:case s:return p;default:return t}}case n:return t}}}var w=d,$=c,C=l,S=s,D=r,k=u,F=o,E=m,_=g,O=n,T=a,I=i,M=h,B=!1;function A(e){return x(e)===c}t.AsyncMode=w,t.ConcurrentMode=$,t.ContextConsumer=C,t.ContextProvider=S,t.Element=D,t.ForwardRef=k,t.Fragment=F,t.Lazy=E,t.Memo=_,t.Portal=O,t.Profiler=T,t.StrictMode=I,t.Suspense=M,t.isAsyncMode=function(e){return B||(B=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),A(e)||x(e)===d},t.isConcurrentMode=A,t.isContextConsumer=function(e){return x(e)===l},t.isContextProvider=function(e){return x(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return x(e)===u},t.isFragment=function(e){return x(e)===o},t.isLazy=function(e){return x(e)===m},t.isMemo=function(e){return x(e)===g},t.isPortal=function(e){return x(e)===n},t.isProfiler=function(e){return x(e)===a},t.isStrictMode=function(e){return x(e)===i},t.isSuspense=function(e){return x(e)===h},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===c||e===a||e===i||e===h||e===f||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===g||e.$$typeof===s||e.$$typeof===l||e.$$typeof===u||e.$$typeof===b||e.$$typeof===v||e.$$typeof===y||e.$$typeof===p)},t.typeOf=x}()},"./node_modules/react-is/index.js":
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
	  \**************************************************************************************/t=>{t.exports=e}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}};return t[e].call(i.exports,i,i.exports,n),i.exports}return n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n("./src/index.ts")})();var ir=or.exports=nr(o),ar=Array.isArray,sr="object"==typeof _e&&_e&&_e.Object===Object&&_e,lr=sr,dr="object"==typeof self&&self&&self.Object===Object&&self,cr=lr||dr||Function("return this")(),ur=cr.Symbol,hr=ur,fr=Object.prototype,gr=fr.hasOwnProperty,mr=fr.toString,pr=hr?hr.toStringTag:void 0;var br=function(e){var t=gr.call(e,pr),r=e[pr];try{e[pr]=void 0;var n=!0}catch(e){}var o=mr.call(e);return n&&(t?e[pr]=r:delete e[pr]),o},vr=Object.prototype.toString;var yr=br,xr=function(e){return vr.call(e)},wr=ur?ur.toStringTag:void 0;var $r=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":wr&&wr in Object(e)?yr(e):xr(e)};var Cr=function(e){return null!=e&&"object"==typeof e},Sr=$r,Dr=Cr;var kr=function(e){return"symbol"==typeof e||Dr(e)&&"[object Symbol]"==Sr(e)},Fr=ar,Er=kr,_r=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Or=/^\w*$/;var Tr=function(e,t){if(Fr(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!Er(e))||(Or.test(e)||!_r.test(e)||null!=t&&e in Object(t))};var Ir=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Mr=$r,Br=Ir;var Ar,zr=function(e){if(!Br(e))return!1;var t=Mr(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},jr=cr["__core-js_shared__"],Lr=(Ar=/[^.]+$/.exec(jr&&jr.keys&&jr.keys.IE_PROTO||""))?"Symbol(src)_1."+Ar:"";var Rr=function(e){return!!Lr&&Lr in e},Pr=Function.prototype.toString;var Hr=function(e){if(null!=e){try{return Pr.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Nr=zr,Wr=Rr,Yr=Ir,Vr=Hr,Ur=/^\[object .+?Constructor\]$/,Kr=Function.prototype,Zr=Object.prototype,qr=Kr.toString,Gr=Zr.hasOwnProperty,Xr=RegExp("^"+qr.call(Gr).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Qr=function(e,t){return null==e?void 0:e[t]},Jr=function(e){return!(!Yr(e)||Wr(e))&&(Nr(e)?Xr:Ur).test(Vr(e))},en=Qr;var tn=function(e,t){var r=en(e,t);return Jr(r)?r:void 0},rn=tn(Object,"create"),nn=rn;var on=function(){this.__data__=nn?nn(null):{},this.size=0};var an=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},sn=rn,ln=Object.prototype.hasOwnProperty;var dn=function(e){var t=this.__data__;if(sn){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return ln.call(t,e)?t[e]:void 0},cn=rn,un=Object.prototype.hasOwnProperty;var hn=function(e){var t=this.__data__;return cn?void 0!==t[e]:un.call(t,e)},fn=rn;var gn=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=fn&&void 0===t?"__lodash_hash_undefined__":t,this},mn=on,pn=an,bn=dn,vn=hn,yn=gn;function xn(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}xn.prototype.clear=mn,xn.prototype.delete=pn,xn.prototype.get=bn,xn.prototype.has=vn,xn.prototype.set=yn;var wn=xn;var $n=function(){this.__data__=[],this.size=0};var Cn=function(e,t){return e===t||e!=e&&t!=t},Sn=Cn;var Dn=function(e,t){for(var r=e.length;r--;)if(Sn(e[r][0],t))return r;return-1},kn=Dn,Fn=Array.prototype.splice;var En=function(e){var t=this.__data__,r=kn(t,e);return!(r<0)&&(r==t.length-1?t.pop():Fn.call(t,r,1),--this.size,!0)},_n=Dn;var On=function(e){var t=this.__data__,r=_n(t,e);return r<0?void 0:t[r][1]},Tn=Dn;var In=function(e){return Tn(this.__data__,e)>-1},Mn=Dn;var Bn=function(e,t){var r=this.__data__,n=Mn(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},An=$n,zn=En,jn=On,Ln=In,Rn=Bn;function Pn(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Pn.prototype.clear=An,Pn.prototype.delete=zn,Pn.prototype.get=jn,Pn.prototype.has=Ln,Pn.prototype.set=Rn;var Hn=Pn,Nn=tn(cr,"Map"),Wn=wn,Yn=Hn,Vn=Nn;var Un=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Kn=function(e,t){var r=e.__data__;return Un(t)?r["string"==typeof t?"string":"hash"]:r.map},Zn=Kn;var qn=function(e){var t=Zn(this,e).delete(e);return this.size-=t?1:0,t},Gn=Kn;var Xn=function(e){return Gn(this,e).get(e)},Qn=Kn;var Jn=function(e){return Qn(this,e).has(e)},eo=Kn;var to=function(e,t){var r=eo(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},ro=function(){this.size=0,this.__data__={hash:new Wn,map:new(Vn||Yn),string:new Wn}},no=qn,oo=Xn,io=Jn,ao=to;function so(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}so.prototype.clear=ro,so.prototype.delete=no,so.prototype.get=oo,so.prototype.has=io,so.prototype.set=ao;var lo=so,co=lo;function uo(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,o=t?t.apply(this,n):n[0],i=r.cache;if(i.has(o))return i.get(o);var a=e.apply(this,n);return r.cache=i.set(o,a)||i,a};return r.cache=new(uo.Cache||co),r}uo.Cache=co;var ho=uo;var fo=function(e){var t=ho(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t},go=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,mo=/\\(\\)?/g,po=fo((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(go,(function(e,r,n,o){t.push(n?o.replace(mo,"$1"):r||e)})),t}));var bo=function(e,t){for(var r=-1,n=null==e?0:e.length,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o},vo=ar,yo=kr,xo=ur?ur.prototype:void 0,wo=xo?xo.toString:void 0;var $o=function e(t){if("string"==typeof t)return t;if(vo(t))return bo(t,e)+"";if(yo(t))return wo?wo.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},Co=$o;var So=ar,Do=Tr,ko=po,Fo=function(e){return null==e?"":Co(e)};var Eo=function(e,t){return So(e)?e:Do(e,t)?[e]:ko(Fo(e))},_o=kr;var Oo=function(e){if("string"==typeof e||_o(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},To=Eo,Io=Oo;var Mo=function(e,t){for(var r=0,n=(t=To(t,e)).length;null!=e&&r<n;)e=e[Io(t[r++])];return r&&r==n?e:void 0},Bo=Mo;var Ao=function(e,t,r){var n=null==e?void 0:Bo(e,t);return void 0===n?r:n},zo=Oe(Ao);const jo=(e,t,r)=>zo(r,t)||zo(e,t),Lo=(e,t)=>{const r=t||e.defaultValue;return zo(e.collections,r)},Ro={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},Po=e=>t=>{var r;const n=t.theme,o=Lo(Ro,null==n?void 0:n.borderScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.border)?`${jo(o,e,n.overrides.border)}px`:`${o[e]}px`},Ho={"width-005":Po("width-005"),"width-010":Po("width-010"),"width-020":Po("width-020"),"width-040":Po("width-040"),solid:(No="solid",e=>{var t;const r=e.theme,n=Lo(Ro,null==r?void 0:r.borderScheme),o=(null===(t=null==r?void 0:r.overrides)||void 0===t?void 0:t.border)?jo(n,No,r.overrides.border):n[No];return"function"==typeof o?o(e):o})};var No;const Wo={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Yo={"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFF8FC","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Vo={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Uo={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Ko={"brand-10":"#001A19","brand-20":"#002D2B","brand-30":"#00413D","brand-40":"#005954","brand-50":"#00756F","brand-60":"#03A098","brand-70":"#55BFBA","brand-80":"#92D6D2","brand-90":"#BFE7E5","brand-95":"#DDF2F1","brand-100":"#F4FBFA","primary-10":"#09191D","primary-20":"#102B34","primary-30":"#173D49","primary-40":"#205666","primary-50":"#2A7086","primary-60":"#5D97A9","primary-70":"#8CB6C2","primary-80":"#B2CED6","primary-90":"#D1E2E7","primary-95":"#E8F0F3","primary-100":"#F7FAFB","secondary-10":"#001731","secondary-20":"#002752","secondary-30":"#003874","secondary-40":"#004D9F","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Zo={"brand-10":"#881317","brand-20":"#B5191E","brand-30":"#B5040A","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},qo={"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Go={"brand-10":"#170F39","brand-20":"#281C62","brand-30":"#38268B","brand-40":"#4D34BF","brand-50":"#5735DF","brand-60":"#9986F9","brand-70":"#B2A5F8","brand-80":"#CDC2FA","brand-90":"#E2DCFC","brand-95":"#EFEDFE","brand-100":"#FAF8FD","primary-10":"#170F39","primary-20":"#281C62","primary-30":"#38268B","primary-40":"#4D34BF","primary-50":"#5735DF","primary-60":"#9986F9","primary-70":"#B2A5F8","primary-80":"#CDC2FA","primary-90":"#E2DCFC","primary-95":"#EFEDFE","primary-100":"#FAF8FD","secondary-10":"#251204","secondary-20":"#401F08","secondary-30":"#5B2C0B","secondary-40":"#7E3D0F","secondary-50":"#B04900","secondary-60":"#E26E1C","secondary-70":"#FF9445","secondary-80":"#FFBB8E","secondary-90":"#FFD9BF","secondary-95":"#FFECDF","secondary-100":"#FFF8F3","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#031B15","success-20":"#082D24","success-30":"#094134","success-40":"#0D5947","success-50":"#10755E","success-60":"#16A181","success-70":"#1EC59D","success-80":"#6FDDC2","success-90":"#AFECDE","success-95":"#D5F5ED","success-100":"#F1FCF9","warning-10":"#1F1500","warning-20":"#362500","warning-30":"#4D3501","warning-40":"#6A4801","warning-50":"#8B6001","warning-60":"#BF8301","warning-70":"#EAA102","warning-80":"#FFBF34","warning-90":"#FFDC8F","warning-95":"#FFEDC7","warning-100":"#FFF8EA","error-10":"#270F10","error-20":"#441B1B","error-30":"#612627","error-40":"#853535","error-50":"#AF4546","error-60":"#EC6162","error-70":"#F29696","error-80":"#F7BBBC","error-90":"#FAD8D8","error-95":"#FCEAEA","error-100":"#FEF7F7","info-10":"#0F1627","info-20":"#1B2745","info-30":"#273763","info-40":"#354D88","info-50":"#4665B3","info-60":"#618AF6","info-70":"#8DADFF","info-80":"#B4C9FF","info-90":"#D3DFFF","info-95":"#E9EFFF","info-100":"#F5F8FF",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Xo={"brand-10":"#0E113C","brand-20":"#191E67","brand-30":"#232A92","brand-40":"#233FC2","brand-50":"#135CEA","brand-60":"#378FFB","brand-70":"#71B3FD","brand-80":"#9DCFFE","brand-90":"#C1E5FF","brand-95":"#DCF1FF","brand-100":"#F3FAFF","primary-10":"#0E113C","primary-20":"#191E67","primary-30":"#232A92","primary-40":"#233FC2","primary-50":"#135CEA","primary-60":"#378FFB","primary-70":"#71B3FD","primary-80":"#9DCFFE","primary-90":"#C1E5FF","primary-95":"#DCF1FF","primary-100":"#F3FAFF","secondary-10":"#34001F","secondary-20":"#540033","secondary-30":"#730045","secondary-40":"#9D0054","secondary-50":"#C61C64","secondary-60":"#DE6792","secondary-70":"#EB96B6","secondary-80":"#F5BAD2","secondary-90":"#FCD5E3","secondary-95":"#FDEBF1","secondary-100":"#FDF6F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Qo={"brand-10":"#370009","brand-20":"#4E000D","brand-30":"#640011","brand-40":"#850017","brand-50":"#9B001A","brand-60":"#EF2D4E","brand-70":"#F692A3","brand-80":"#FAB9C4","brand-90":"#FCD7DD","brand-95":"#FDEAED","brand-100":"#FEF8F9","primary-10":"#1F102A","primary-20":"#2F193F","primary-30":"#3E2053","primary-40":"#562D71","primary-50":"#663587","primary-60":"#9370AA","primary-70":"#BCA7CB","primary-80":"#D3C5DC","primary-90":"#E5DDEB","primary-95":"#F2EEF5","primary-100":"#FAF9FB","secondary-10":"#201316","secondary-20":"#311D22","secondary-30":"#3F272C","secondary-40":"#58363D","secondary-50":"#684049","secondary-60":"#AF6A7A","secondary-70":"#F393A8","secondary-80":"#FFB6C6","secondary-90":"#FFD6DF","secondary-95":"#FFE9EE","secondary-100":"#FFF7F9","neutral-10":"#161616","neutral-20":"#222222","neutral-30":"#2D2D2D","neutral-40":"#3F3F3F","neutral-50":"#4B4B4B","neutral-60":"#7E7E7E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081917","success-20":"#0D2724","success-30":"#11332E","success-40":"#174740","success-50":"#1B554C","success-60":"#2D8C7E","success-70":"#46C2AF","success-80":"#89D8CC","success-90":"#BCE9E2","success-95":"#DAF3EF","success-100":"#F0FAF9","warning-10":"#241200","warning-20":"#371C00","warning-30":"#482500","warning-40":"#633300","warning-50":"#763C00","warning-60":"#C36400","warning-70":"#FF9524","warning-80":"#FFBD77","warning-90":"#FFD9B2","warning-95":"#FFEBD6","warning-100":"#FFF7F0","error-10":"#330505","error-20":"#4B0707","error-30":"#600909","error-40":"#810D0D","error-50":"#98110F","error-60":"#D7504C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032537","info-30":"#043148","info-40":"#054462","info-50":"#065175","info-60":"#3985AF","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Jo={"brand-10":"#00143A","brand-20":"#00205B","brand-30":"#153368","brand-40":"#18417C","brand-50":"#00558C","brand-60":"#009CDE","brand-70":"#5AB9E7","brand-80":"#9ED0ED","brand-90":"#CAE3F4","brand-95":"#E2F0F9","brand-100":"#F4FAFD","primary-10":"#00143A","primary-20":"#00205B","primary-30":"#153368","primary-40":"#18417C","primary-50":"#00558C","primary-60":"#009CDE","primary-70":"#5AB9E7","primary-80":"#9ED0ED","primary-90":"#CAE3F4","primary-95":"#E2F0F9","primary-100":"#F4FAFD","secondary-10":"#10171F","secondary-20":"#1E252C","secondary-30":"#2F353B","secondary-40":"#3D4247","secondary-50":"#4E5255","secondary-60":"#8F9396","secondary-70":"#A9B0B3","secondary-80":"#C7CBCC","secondary-90":"#DDDFE0","secondary-95":"#ECEDEE","secondary-100":"#F8F8F9","neutral-10":"#10171F","neutral-20":"#1E252C","neutral-30":"#2F353B","neutral-40":"#3D4247","neutral-50":"#4E5255","neutral-60":"#8F9396","neutral-70":"#A9B0B3","neutral-80":"#C7CBCC","neutral-90":"#DDDFE0","neutral-95":"#ECEDEE","neutral-100":"#F8F8F9","success-10":"#001B0E","success-20":"#012A16","success-30":"#013D20","success-40":"#014D28","success-50":"#005F30","success-60":"#48A377","success-70":"#77BD9B","success-80":"#A3D5BD","success-90":"#C4E7D6","success-95":"#DBF4E7","success-100":"#ECFDF5","warning-10":"#1F1500","warning-20":"#312100","warning-30":"#473000","warning-40":"#593C00","warning-50":"#6E4B00","warning-60":"#B78C31","warning-70":"#DDA633","warning-80":"#E0C792","warning-90":"#E9DEC5","warning-95":"#F4EEE0","warning-100":"#FAF8F3","error-10":"#360109","error-20":"#50010E","error-30":"#6F0213","error-40":"#88051A","error-50":"#A60A24","error-60":"#E07083","error-70":"#EA98A6","error-80":"#F3BBC4","error-90":"#FAD5DC","error-95":"#FEE9ED","error-100":"#FFF6F8","info-10":"#00143A","info-20":"#00205B","info-30":"#153368","info-40":"#18417C","info-50":"#00558C","info-60":"#009CDE","info-70":"#5AB9E7","info-80":"#9ED0ED","info-90":"#CAE3F4","info-95":"#E2F0F9","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FFCB6A"},ei={collections:{lifesg:Vo,bookingsg:Wo,rbs:qo,mylegacy:Uo,ccube:Yo,oneservice:Ko,pa:Zo,a11yplayground:Go,supportgowhere:Xo,imda:Qo,spf:Jo},defaultValue:"lifesg"},ti={collections:{lifesg:Vo,bookingsg:Wo,rbs:qo,mylegacy:Uo,ccube:Yo,oneservice:Ko,pa:Zo,a11yplayground:Go,supportgowhere:Xo,imda:Qo,spf:Jo},defaultValue:"lifesg"},ri=e=>t=>{var r;const n=t.theme,o="dark"===(null==n?void 0:n.colourMode),i=Lo(o?ti:ei,null==n?void 0:n.colourScheme),a=o?"primitiveColourDark":"primitiveColour",s=null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r[a];return s?jo(i,e,s):i[e]},ni={"brand-10":ri("brand-10"),"brand-20":ri("brand-20"),"brand-30":ri("brand-30"),"brand-40":ri("brand-40"),"brand-50":ri("brand-50"),"brand-60":ri("brand-60"),"brand-70":ri("brand-70"),"brand-80":ri("brand-80"),"brand-90":ri("brand-90"),"brand-95":ri("brand-95"),"brand-100":ri("brand-100"),"primary-10":ri("primary-10"),"primary-20":ri("primary-20"),"primary-30":ri("primary-30"),"primary-40":ri("primary-40"),"primary-50":ri("primary-50"),"primary-60":ri("primary-60"),"primary-70":ri("primary-70"),"primary-80":ri("primary-80"),"primary-90":ri("primary-90"),"primary-95":ri("primary-95"),"primary-100":ri("primary-100"),"secondary-10":ri("secondary-10"),"secondary-20":ri("secondary-20"),"secondary-30":ri("secondary-30"),"secondary-40":ri("secondary-40"),"secondary-50":ri("secondary-50"),"secondary-60":ri("secondary-60"),"secondary-70":ri("secondary-70"),"secondary-80":ri("secondary-80"),"secondary-90":ri("secondary-90"),"secondary-95":ri("secondary-95"),"secondary-100":ri("secondary-100"),"neutral-10":ri("neutral-10"),"neutral-20":ri("neutral-20"),"neutral-30":ri("neutral-30"),"neutral-40":ri("neutral-40"),"neutral-50":ri("neutral-50"),"neutral-60":ri("neutral-60"),"neutral-70":ri("neutral-70"),"neutral-80":ri("neutral-80"),"neutral-90":ri("neutral-90"),"neutral-95":ri("neutral-95"),"neutral-100":ri("neutral-100"),"success-10":ri("success-10"),"success-20":ri("success-20"),"success-30":ri("success-30"),"success-40":ri("success-40"),"success-50":ri("success-50"),"success-60":ri("success-60"),"success-70":ri("success-70"),"success-80":ri("success-80"),"success-90":ri("success-90"),"success-95":ri("success-95"),"success-100":ri("success-100"),"warning-10":ri("warning-10"),"warning-20":ri("warning-20"),"warning-30":ri("warning-30"),"warning-40":ri("warning-40"),"warning-50":ri("warning-50"),"warning-60":ri("warning-60"),"warning-70":ri("warning-70"),"warning-80":ri("warning-80"),"warning-90":ri("warning-90"),"warning-95":ri("warning-95"),"warning-100":ri("warning-100"),"error-10":ri("error-10"),"error-20":ri("error-20"),"error-30":ri("error-30"),"error-40":ri("error-40"),"error-50":ri("error-50"),"error-60":ri("error-60"),"error-70":ri("error-70"),"error-80":ri("error-80"),"error-90":ri("error-90"),"error-95":ri("error-95"),"error-100":ri("error-100"),"info-10":ri("info-10"),"info-20":ri("info-20"),"info-30":ri("info-30"),"info-40":ri("info-40"),"info-50":ri("info-50"),"info-60":ri("info-60"),"info-70":ri("info-70"),"info-80":ri("info-80"),"info-90":ri("info-90"),"info-95":ri("info-95"),"info-100":ri("info-100"),white:ri("white"),black:ri("black"),"primary-inverse":ri("primary-inverse")},oi={text:ri("neutral-20"),"text-subtle":ri("neutral-30"),"text-subtler":ri("neutral-50"),"text-subtlest":ri("neutral-60"),"text-primary":ri("primary-50"),"text-primary-strongest":ri("primary-20"),"text-hover":ri("primary-40"),"text-selected":ri("primary-50"),"text-selected-hover":ri("primary-40"),"text-disabled":ri("neutral-50"),"text-disabled-subtle":ri("neutral-60"),"text-disabled-subtlest":ri("neutral-80"),"text-selected-disabled":ri("neutral-20"),"text-success":ri("success-40"),"text-warning":ri("warning-40"),"text-error":ri("error-40"),"text-info":ri("info-40"),"text-inverse":ri("white"),icon:ri("neutral-50"),"icon-subtle":ri("neutral-60"),"icon-strongest":ri("neutral-20"),"icon-primary":ri("primary-50"),"icon-primary-subtle":ri("primary-60"),"icon-primary-subtlest":ri("primary-70"),"icon-hover":ri("primary-40"),"icon-selected":ri("primary-50"),"icon-selected-hover":ri("primary-40"),"icon-disabled":ri("neutral-50"),"icon-disabled-subtle":ri("neutral-60"),"icon-selected-disabled":ri("neutral-60"),"icon-success":ri("success-50"),"icon-warning":ri("warning-60"),"icon-error":ri("error-50"),"icon-error-strong":ri("error-40"),"icon-info":ri("info-50"),"icon-inverse":ri("white"),"icon-primary-inverse":ri("primary-inverse"),border:ri("neutral-90"),"border-strong":ri("neutral-70"),"border-stronger":ri("neutral-50"),"border-primary":ri("primary-50"),"border-primary-subtle":ri("primary-60"),"border-hover":ri("primary-90"),"border-hover-strong":ri("primary-60"),"border-selected":ri("primary-50"),"border-selected-subtle":ri("primary-70"),"border-selected-subtlest":ri("primary-90"),"border-selected-hover":ri("primary-40"),"border-focus":ri("primary-60"),"border-focus-strong":ri("primary-50"),"border-disabled":ri("neutral-90"),"border-selected-disabled":ri("neutral-70"),"border-success":ri("success-60"),"border-warning":ri("warning-60"),"border-error":ri("error-60"),"border-error-focus":ri("error-60"),"border-error-focus-strong":ri("error-40"),"border-error-strong":ri("error-40"),"border-info":ri("info-60"),bg:ri("white"),"bg-strong":ri("neutral-100"),"bg-stronger":ri("neutral-95"),"bg-strongest":ri("neutral-90"),"bg-hover":ri("primary-95"),"bg-hover-strong":ri("primary-90"),"bg-hover-subtle":ri("primary-100"),"bg-hover-neutral":ri("neutral-100"),"bg-hover-neutral-strong":ri("neutral-90"),"bg-selected":ri("primary-95"),"bg-selected-hover":ri("primary-90"),"bg-selected-strong":ri("primary-90"),"bg-selected-stronger":ri("primary-70"),"bg-selected-strongest":ri("primary-50"),"bg-selected-strongest-hover":ri("primary-40"),"bg-disabled":ri("neutral-95"),"bg-selected-disabled":ri("neutral-95"),"bg-selected-stronger-disabled":ri("neutral-70"),"bg-success":ri("success-100"),"bg-success-hover":ri("success-95"),"bg-success-strong":ri("success-50"),"bg-success-strong-hover":ri("success-40"),"bg-warning":ri("warning-100"),"bg-warning-hover":ri("warning-95"),"bg-warning-strong":ri("warning-50"),"bg-warning-strong-hover":ri("warning-40"),"bg-info":ri("info-100"),"bg-info-hover":ri("info-95"),"bg-info-strong":ri("info-50"),"bg-info-strong-hover":ri("info-40"),"bg-error":ri("error-100"),"bg-error-hover":ri("error-95"),"bg-error-strong":ri("error-50"),"bg-error-strong-hover":ri("error-40"),"bg-inverse":ri("neutral-20"),"bg-inverse-subtle":ri("neutral-30"),"bg-inverse-subtler":ri("neutral-50"),"bg-inverse-subtlest":ri("neutral-60"),"bg-inverse-hover":ri("neutral-40"),"bg-primary":ri("primary-50"),"bg-primary-subtle":ri("primary-60"),"bg-primary-subtler":ri("primary-95"),"bg-primary-subtlest":ri("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":ri("primary-40"),"bg-primary-subtlest-hover":ri("primary-90"),"bg-primary-subtlest-selected":ri("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:ri("primary-50"),"hyperlink-hover":ri("primary-40"),"hyperlink-visited":ri("primary-40"),"hyperlink-inverse":ri("primary-inverse"),"focus-ring":ri("primary-50"),"focus-ring-inverse":ri("white")},ii={text:ri("neutral-100"),"text-subtle":ri("neutral-80"),"text-subtler":ri("neutral-60"),"text-subtlest":ri("neutral-50"),"text-primary":ri("primary-60"),"text-primary-strongest":ri("primary-90"),"text-hover":ri("primary-70"),"text-selected":ri("primary-60"),"text-selected-hover":ri("primary-70"),"text-disabled":ri("neutral-60"),"text-disabled-subtle":ri("neutral-50"),"text-disabled-subtlest":ri("neutral-30"),"text-selected-disabled":ri("neutral-90"),"text-success":ri("success-70"),"text-warning":ri("warning-70"),"text-error":ri("error-70"),"text-info":ri("info-70"),"text-inverse":ri("black"),icon:ri("neutral-60"),"icon-subtle":ri("neutral-50"),"icon-strongest":ri("neutral-90"),"icon-primary":ri("primary-60"),"icon-primary-subtle":ri("primary-50"),"icon-primary-subtlest":ri("primary-40"),"icon-hover":ri("primary-70"),"icon-selected":ri("primary-60"),"icon-selected-hover":ri("primary-70"),"icon-disabled":ri("neutral-60"),"icon-disabled-subtle":ri("neutral-50"),"icon-selected-disabled":ri("neutral-50"),"icon-success":ri("success-60"),"icon-warning":ri("warning-50"),"icon-error":ri("error-60"),"icon-error-strong":ri("error-70"),"icon-info":ri("info-60"),"icon-inverse":ri("black"),"icon-primary-inverse":ri("primary-inverse"),border:ri("neutral-20"),"border-strong":ri("neutral-40"),"border-stronger":ri("neutral-60"),"border-primary":ri("primary-60"),"border-primary-subtle":ri("primary-50"),"border-hover":ri("primary-20"),"border-hover-strong":ri("primary-50"),"border-selected":ri("primary-60"),"border-selected-subtle":ri("primary-40"),"border-selected-subtlest":ri("primary-20"),"border-selected-hover":ri("primary-70"),"border-focus":ri("primary-50"),"border-focus-strong":ri("primary-60"),"border-disabled":ri("neutral-20"),"border-selected-disabled":ri("neutral-40"),"border-success":ri("success-50"),"border-warning":ri("warning-50"),"border-error":ri("error-50"),"border-error-focus":ri("error-50"),"border-error-focus-strong":ri("error-70"),"border-error-strong":ri("error-70"),"border-info":ri("info-50"),bg:ri("black"),"bg-strong":ri("neutral-10"),"bg-stronger":ri("neutral-20"),"bg-strongest":ri("neutral-20"),"bg-hover":ri("primary-20"),"bg-hover-strong":ri("primary-20"),"bg-hover-subtle":ri("primary-10"),"bg-hover-neutral":ri("neutral-10"),"bg-hover-neutral-strong":ri("neutral-20"),"bg-selected":ri("primary-20"),"bg-selected-hover":ri("primary-20"),"bg-selected-strong":ri("primary-20"),"bg-selected-stronger":ri("primary-40"),"bg-selected-strongest":ri("primary-60"),"bg-selected-strongest-hover":ri("primary-70"),"bg-disabled":ri("neutral-20"),"bg-selected-disabled":ri("neutral-20"),"bg-selected-stronger-disabled":ri("neutral-40"),"bg-success":ri("success-10"),"bg-success-hover":ri("success-20"),"bg-success-strong":ri("success-60"),"bg-success-strong-hover":ri("success-70"),"bg-warning":ri("warning-10"),"bg-warning-hover":ri("warning-20"),"bg-warning-strong":ri("warning-60"),"bg-warning-strong-hover":ri("warning-70"),"bg-info":ri("info-10"),"bg-info-hover":ri("info-20"),"bg-info-strong":ri("info-60"),"bg-info-strong-hover":ri("info-70"),"bg-error":ri("error-10"),"bg-error-hover":ri("error-20"),"bg-error-strong":ri("error-60"),"bg-error-strong-hover":ri("error-70"),"bg-inverse":ri("neutral-90"),"bg-inverse-subtle":ri("neutral-80"),"bg-inverse-subtler":ri("neutral-60"),"bg-inverse-subtlest":ri("neutral-50"),"bg-inverse-hover":ri("neutral-70"),"bg-primary":ri("primary-60"),"bg-primary-subtle":ri("primary-50"),"bg-primary-subtler":ri("primary-20"),"bg-primary-subtlest":ri("primary-10"),"bg-available":"#185339","bg-primary-hover":ri("primary-70"),"bg-primary-subtlest-hover":ri("primary-20"),"bg-primary-subtlest-selected":ri("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:ri("primary-60"),"hyperlink-hover":ri("primary-70"),"hyperlink-visited":ri("primary-70"),"hyperlink-inverse":ri("primary-inverse"),"focus-ring":ri("primary-60"),"focus-ring-inverse":ri("black")},ai={text:ri("neutral-30"),"text-subtle":ri("neutral-40"),"text-subtler":ri("neutral-50"),"text-subtlest":ri("neutral-70"),"text-primary":ri("neutral-10"),"text-primary-strongest":ri("neutral-10"),"text-hover":ri("neutral-70"),"text-selected":ri("neutral-20"),"text-selected-hover":ri("neutral-10"),"text-disabled":ri("neutral-50"),"text-disabled-subtle":ri("neutral-70"),"text-disabled-subtlest":ri("neutral-80"),"text-selected-disabled":ri("neutral-40"),"text-success":ri("success-40"),"text-warning":ri("warning-40"),"text-error":ri("brand-30"),"text-info":ri("neutral-40"),"text-inverse":ri("neutral-100"),icon:ri("neutral-40"),"icon-subtle":ri("neutral-50"),"icon-strongest":ri("neutral-10"),"icon-primary":ri("neutral-10"),"icon-primary-subtle":ri("neutral-30"),"icon-primary-subtlest":ri("neutral-60"),"icon-hover":ri("neutral-70"),"icon-selected":ri("brand-20"),"icon-selected-hover":ri("brand-10"),"icon-disabled":ri("neutral-50"),"icon-disabled-subtle":ri("neutral-70"),"icon-selected-disabled":ri("neutral-40"),"icon-success":ri("success-40"),"icon-warning":ri("warning-60"),"icon-error":ri("brand-30"),"icon-error-strong":ri("brand-10"),"icon-info":ri("neutral-40"),"icon-inverse":ri("neutral-100"),"icon-primary-inverse":"#F9B371",border:ri("neutral-90"),"border-strong":ri("neutral-30"),"border-stronger":ri("neutral-20"),"border-primary":ri("neutral-40"),"border-primary-subtle":ri("neutral-60"),"border-hover":ri("neutral-80"),"border-hover-strong":ri("neutral-10"),"border-selected":ri("brand-20"),"border-selected-subtle":ri("neutral-40"),"border-selected-subtlest":ri("neutral-70"),"border-selected-hover":ri("neutral-10"),"border-focus":ri("neutral-20"),"border-focus-strong":ri("neutral-10"),"border-disabled":ri("neutral-90"),"border-selected-disabled":ri("neutral-80"),"border-success":ri("success-40"),"border-warning":ri("warning-60"),"border-error":ri("brand-30"),"border-error-focus":ri("brand-20"),"border-error-focus-strong":ri("brand-10"),"border-error-strong":ri("brand-20"),"border-info":ri("neutral-40"),bg:ri("neutral-100"),"bg-strong":ri("neutral-95"),"bg-stronger":ri("neutral-90"),"bg-strongest":ri("neutral-80"),"bg-hover":ri("brand-90"),"bg-hover-strong":ri("brand-80"),"bg-hover-subtle":ri("neutral-90"),"bg-hover-neutral":ri("neutral-90"),"bg-hover-neutral-strong":ri("neutral-90"),"bg-selected":ri("brand-100"),"bg-selected-hover":ri("brand-30"),"bg-selected-strong":ri("brand-50"),"bg-selected-stronger":ri("brand-40"),"bg-selected-strongest":ri("brand-20"),"bg-selected-strongest-hover":ri("brand-10"),"bg-disabled":ri("neutral-90"),"bg-selected-disabled":ri("neutral-90"),"bg-selected-stronger-disabled":ri("neutral-80"),"bg-success":ri("success-100"),"bg-success-hover":ri("success-95"),"bg-success-strong":ri("success-50"),"bg-success-strong-hover":ri("success-40"),"bg-warning":ri("warning-100"),"bg-warning-hover":ri("warning-95"),"bg-warning-strong":ri("warning-50"),"bg-warning-strong-hover":ri("warning-40"),"bg-info":ri("neutral-95"),"bg-info-hover":ri("info-95"),"bg-info-strong":ri("info-50"),"bg-info-strong-hover":ri("info-40"),"bg-error":ri("brand-100"),"bg-error-hover":ri("error-95"),"bg-error-strong":ri("error-50"),"bg-error-strong-hover":ri("error-40"),"bg-inverse":ri("neutral-40"),"bg-inverse-subtle":ri("neutral-60"),"bg-inverse-subtler":ri("neutral-70"),"bg-inverse-subtlest":ri("neutral-80"),"bg-inverse-hover":ri("neutral-30"),"bg-primary":ri("brand-20"),"bg-primary-subtle":ri("brand-60"),"bg-primary-subtler":ri("brand-80"),"bg-primary-subtlest":ri("brand-100"),"bg-available":ri("success-60"),"bg-primary-hover":ri("brand-10"),"bg-primary-subtlest-hover":ri("brand-80"),"bg-primary-subtlest-selected":ri("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:ri("neutral-10"),"hyperlink-hover":ri("neutral-40"),"hyperlink-visited":ri("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":ri("primary-50"),"focus-ring-inverse":ri("white")},si={text:ri("neutral-20"),"text-subtle":ri("neutral-30"),"text-subtler":ri("neutral-50"),"text-subtlest":ri("neutral-60"),"text-primary":ri("primary-50"),"text-primary-strongest":ri("primary-20"),"text-hover":ri("primary-40"),"text-selected":ri("primary-50"),"text-selected-hover":ri("primary-40"),"text-disabled":ri("neutral-50"),"text-disabled-subtle":ri("neutral-60"),"text-disabled-subtlest":ri("neutral-80"),"text-selected-disabled":ri("neutral-20"),"text-success":ri("success-40"),"text-warning":ri("warning-40"),"text-error":ri("error-40"),"text-info":ri("info-40"),"text-inverse":ri("white"),icon:ri("neutral-50"),"icon-subtle":ri("neutral-60"),"icon-strongest":ri("neutral-20"),"icon-primary":ri("primary-50"),"icon-primary-subtle":ri("primary-60"),"icon-primary-subtlest":ri("primary-70"),"icon-hover":ri("primary-40"),"icon-selected":ri("primary-50"),"icon-selected-hover":ri("primary-40"),"icon-disabled":ri("neutral-50"),"icon-disabled-subtle":ri("neutral-60"),"icon-selected-disabled":ri("neutral-60"),"icon-success":ri("success-50"),"icon-warning":ri("warning-60"),"icon-error":ri("error-50"),"icon-error-strong":ri("error-40"),"icon-info":ri("info-50"),"icon-inverse":ri("white"),"icon-primary-inverse":ri("primary-inverse"),border:ri("neutral-90"),"border-strong":ri("neutral-70"),"border-stronger":ri("neutral-50"),"border-primary":ri("primary-50"),"border-primary-subtle":ri("primary-60"),"border-hover":ri("primary-90"),"border-hover-strong":ri("primary-60"),"border-selected":ri("primary-50"),"border-selected-subtle":ri("primary-70"),"border-selected-subtlest":ri("primary-90"),"border-selected-hover":ri("primary-40"),"border-focus":ri("primary-60"),"border-focus-strong":ri("primary-50"),"border-disabled":ri("neutral-90"),"border-selected-disabled":ri("neutral-70"),"border-success":ri("success-60"),"border-warning":ri("warning-60"),"border-error":ri("error-60"),"border-error-focus":ri("error-60"),"border-error-focus-strong":ri("error-40"),"border-error-strong":ri("error-40"),"border-info":ri("info-60"),bg:ri("white"),"bg-strong":ri("neutral-100"),"bg-stronger":ri("neutral-95"),"bg-strongest":ri("neutral-90"),"bg-hover":ri("primary-95"),"bg-hover-strong":ri("primary-90"),"bg-hover-subtle":ri("primary-100"),"bg-hover-neutral":ri("neutral-100"),"bg-hover-neutral-strong":ri("neutral-90"),"bg-selected":ri("primary-95"),"bg-selected-hover":ri("primary-90"),"bg-selected-strong":ri("primary-90"),"bg-selected-stronger":ri("primary-70"),"bg-selected-strongest":ri("primary-50"),"bg-selected-strongest-hover":ri("primary-40"),"bg-disabled":ri("neutral-95"),"bg-selected-disabled":ri("neutral-95"),"bg-selected-stronger-disabled":ri("neutral-70"),"bg-success":ri("success-100"),"bg-success-hover":ri("success-95"),"bg-success-strong":ri("success-50"),"bg-success-strong-hover":ri("success-40"),"bg-warning":ri("warning-100"),"bg-warning-hover":ri("warning-95"),"bg-warning-strong":ri("warning-50"),"bg-warning-strong-hover":ri("warning-40"),"bg-info":ri("info-100"),"bg-info-hover":ri("info-95"),"bg-info-strong":ri("info-50"),"bg-info-strong-hover":ri("info-40"),"bg-error":ri("error-100"),"bg-error-hover":ri("error-95"),"bg-error-strong":ri("error-50"),"bg-error-strong-hover":ri("error-40"),"bg-inverse":ri("neutral-20"),"bg-inverse-subtle":ri("neutral-30"),"bg-inverse-subtler":ri("neutral-50"),"bg-inverse-subtlest":ri("neutral-60"),"bg-inverse-hover":ri("neutral-40"),"bg-primary":ri("primary-50"),"bg-primary-subtle":ri("primary-60"),"bg-primary-subtler":ri("primary-95"),"bg-primary-subtlest":ri("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":ri("primary-40"),"bg-primary-subtlest-hover":ri("primary-90"),"bg-primary-subtlest-selected":ri("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:ri("primary-50"),"hyperlink-hover":ri("primary-40"),"hyperlink-visited":ri("primary-40"),"hyperlink-inverse":ri("primary-inverse"),"focus-ring":ri("primary-50"),"focus-ring-inverse":ri("white")},li={text:ri("neutral-100"),"text-subtle":ri("neutral-80"),"text-subtler":ri("neutral-60"),"text-subtlest":ri("neutral-50"),"text-primary":ri("primary-60"),"text-primary-strongest":ri("primary-90"),"text-hover":ri("primary-70"),"text-selected":ri("primary-60"),"text-selected-hover":ri("primary-70"),"text-disabled":ri("neutral-60"),"text-disabled-subtle":ri("neutral-50"),"text-disabled-subtlest":ri("neutral-30"),"text-selected-disabled":ri("neutral-90"),"text-success":ri("success-70"),"text-warning":ri("warning-70"),"text-error":ri("error-70"),"text-info":ri("info-70"),"text-inverse":ri("black"),icon:ri("neutral-60"),"icon-subtle":ri("neutral-50"),"icon-strongest":ri("neutral-90"),"icon-primary":ri("primary-60"),"icon-primary-subtle":ri("primary-50"),"icon-primary-subtlest":ri("primary-40"),"icon-hover":ri("primary-70"),"icon-selected":ri("primary-60"),"icon-selected-hover":ri("primary-70"),"icon-disabled":ri("neutral-60"),"icon-disabled-subtle":ri("neutral-50"),"icon-selected-disabled":ri("neutral-50"),"icon-success":ri("success-60"),"icon-warning":ri("warning-50"),"icon-error":ri("error-60"),"icon-error-strong":ri("error-70"),"icon-info":ri("info-60"),"icon-inverse":ri("black"),"icon-primary-inverse":ri("primary-inverse"),border:ri("neutral-20"),"border-strong":ri("neutral-40"),"border-stronger":ri("neutral-60"),"border-primary":ri("primary-60"),"border-primary-subtle":ri("primary-50"),"border-hover":ri("primary-20"),"border-hover-strong":ri("primary-50"),"border-selected":ri("primary-60"),"border-selected-subtle":ri("primary-40"),"border-selected-subtlest":ri("primary-20"),"border-selected-hover":ri("primary-70"),"border-focus":ri("primary-50"),"border-focus-strong":ri("primary-60"),"border-disabled":ri("neutral-20"),"border-selected-disabled":ri("neutral-40"),"border-success":ri("success-50"),"border-warning":ri("warning-50"),"border-error":ri("error-50"),"border-error-focus":ri("error-50"),"border-error-focus-strong":ri("error-70"),"border-error-strong":ri("error-70"),"border-info":ri("info-50"),bg:ri("black"),"bg-strong":ri("neutral-10"),"bg-stronger":ri("neutral-20"),"bg-strongest":ri("neutral-20"),"bg-hover":ri("primary-20"),"bg-hover-strong":ri("primary-20"),"bg-hover-subtle":ri("primary-10"),"bg-hover-neutral":ri("neutral-10"),"bg-hover-neutral-strong":ri("neutral-20"),"bg-selected":ri("primary-20"),"bg-selected-hover":ri("primary-20"),"bg-selected-strong":ri("primary-20"),"bg-selected-stronger":ri("primary-40"),"bg-selected-strongest":ri("primary-60"),"bg-selected-strongest-hover":ri("primary-70"),"bg-disabled":ri("neutral-20"),"bg-selected-disabled":ri("neutral-20"),"bg-selected-stronger-disabled":ri("neutral-40"),"bg-success":ri("success-10"),"bg-success-hover":ri("success-20"),"bg-success-strong":ri("success-60"),"bg-success-strong-hover":ri("success-70"),"bg-warning":ri("warning-10"),"bg-warning-hover":ri("warning-20"),"bg-warning-strong":ri("warning-60"),"bg-warning-strong-hover":ri("warning-70"),"bg-info":ri("info-10"),"bg-info-hover":ri("info-20"),"bg-info-strong":ri("info-60"),"bg-info-strong-hover":ri("info-70"),"bg-error":ri("error-10"),"bg-error-hover":ri("error-20"),"bg-error-strong":ri("error-60"),"bg-error-strong-hover":ri("error-70"),"bg-inverse":ri("neutral-90"),"bg-inverse-subtle":ri("neutral-80"),"bg-inverse-subtler":ri("neutral-60"),"bg-inverse-subtlest":ri("neutral-50"),"bg-inverse-hover":ri("neutral-70"),"bg-primary":ri("primary-60"),"bg-primary-subtle":ri("primary-50"),"bg-primary-subtler":ri("primary-20"),"bg-primary-subtlest":ri("primary-10"),"bg-available":"#185339","bg-primary-hover":ri("primary-70"),"bg-primary-subtlest-hover":ri("primary-20"),"bg-primary-subtlest-selected":ri("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:ri("primary-60"),"hyperlink-hover":ri("primary-70"),"hyperlink-visited":ri("primary-70"),"hyperlink-inverse":ri("primary-inverse"),"focus-ring":ri("primary-60"),"focus-ring-inverse":ri("black")},di={collections:{lifesg:oi,bookingsg:oi,rbs:oi,mylegacy:oi,ccube:oi,oneservice:oi,pa:ai,a11yplayground:si,supportgowhere:oi,imda:oi,spf:oi},defaultValue:"lifesg"},ci={collections:{lifesg:ii,bookingsg:ii,rbs:ii,mylegacy:ii,ccube:ii,oneservice:ii,pa:ii,a11yplayground:li,supportgowhere:ii,imda:ii,spf:ii},defaultValue:"lifesg"},ui=e=>t=>{var r;const n=t.theme,o="dark"===(null==n?void 0:n.colourMode),i=Lo(o?ci:di,null==n?void 0:n.colourScheme),a=o?"semanticColourDark":"semanticColour",s=null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r[a],l=s?jo(i,e,s):i[e];return"function"==typeof l?l(t):l},hi={text:ui("text"),"text-subtle":ui("text-subtle"),"text-subtler":ui("text-subtler"),"text-subtlest":ui("text-subtlest"),"text-primary":ui("text-primary"),"text-primary-strongest":ui("text-primary-strongest"),"text-hover":ui("text-hover"),"text-selected":ui("text-selected"),"text-selected-hover":ui("text-selected-hover"),"text-disabled":ui("text-disabled"),"text-disabled-subtle":ui("text-disabled-subtle"),"text-disabled-subtlest":ui("text-disabled-subtlest"),"text-selected-disabled":ui("text-selected-disabled"),"text-success":ui("text-success"),"text-warning":ui("text-warning"),"text-error":ui("text-error"),"text-info":ui("text-info"),"text-inverse":ui("text-inverse"),icon:ui("icon"),"icon-subtle":ui("icon-subtle"),"icon-strongest":ui("icon-strongest"),"icon-primary":ui("icon-primary"),"icon-primary-subtle":ui("icon-primary-subtle"),"icon-primary-subtlest":ui("icon-primary-subtlest"),"icon-hover":ui("icon-hover"),"icon-selected":ui("icon-selected"),"icon-selected-hover":ui("icon-selected-hover"),"icon-disabled":ui("icon-disabled"),"icon-disabled-subtle":ui("icon-disabled-subtle"),"icon-selected-disabled":ui("icon-selected-disabled"),"icon-success":ui("icon-success"),"icon-warning":ui("icon-warning"),"icon-error":ui("icon-error"),"icon-error-strong":ui("icon-error-strong"),"icon-info":ui("icon-info"),"icon-inverse":ui("icon-inverse"),"icon-primary-inverse":ui("icon-primary-inverse"),border:ui("border"),"border-strong":ui("border-strong"),"border-stronger":ui("border-stronger"),"border-primary":ui("border-primary"),"border-primary-subtle":ui("border-primary-subtle"),"border-hover":ui("border-hover"),"border-hover-strong":ui("border-hover-strong"),"border-selected":ui("border-selected"),"border-selected-subtle":ui("border-selected-subtle"),"border-selected-subtlest":ui("border-selected-subtlest"),"border-selected-hover":ui("border-selected-hover"),"border-focus":ui("border-focus"),"border-focus-strong":ui("border-focus-strong"),"border-disabled":ui("border-disabled"),"border-selected-disabled":ui("border-selected-disabled"),"border-success":ui("border-success"),"border-warning":ui("border-warning"),"border-error":ui("border-error"),"border-error-focus":ui("border-error-focus"),"border-error-focus-strong":ui("border-error-focus-strong"),"border-error-strong":ui("border-error-strong"),"border-info":ui("border-info"),bg:ui("bg"),"bg-strong":ui("bg-strong"),"bg-stronger":ui("bg-stronger"),"bg-strongest":ui("bg-strongest"),"bg-hover":ui("bg-hover"),"bg-hover-strong":ui("bg-hover-strong"),"bg-hover-subtle":ui("bg-hover-subtle"),"bg-hover-neutral":ui("bg-hover-neutral"),"bg-hover-neutral-strong":ui("bg-hover-neutral-strong"),"bg-selected":ui("bg-selected"),"bg-selected-hover":ui("bg-selected-hover"),"bg-selected-strong":ui("bg-selected-strong"),"bg-selected-stronger":ui("bg-selected-stronger"),"bg-selected-strongest":ui("bg-selected-strongest"),"bg-selected-strongest-hover":ui("bg-selected-strongest-hover"),"bg-disabled":ui("bg-disabled"),"bg-selected-disabled":ui("bg-selected-disabled"),"bg-selected-stronger-disabled":ui("bg-selected-stronger-disabled"),"bg-success":ui("bg-success"),"bg-success-hover":ui("bg-success-hover"),"bg-success-strong":ui("bg-success-strong"),"bg-success-strong-hover":ui("bg-success-strong-hover"),"bg-warning":ui("bg-warning"),"bg-warning-hover":ui("bg-warning-hover"),"bg-warning-strong":ui("bg-warning-strong"),"bg-warning-strong-hover":ui("bg-warning-strong-hover"),"bg-info":ui("bg-info"),"bg-info-hover":ui("bg-info-hover"),"bg-info-strong":ui("bg-info-strong"),"bg-info-strong-hover":ui("bg-info-strong-hover"),"bg-error":ui("bg-error"),"bg-error-hover":ui("bg-error-hover"),"bg-error-strong":ui("bg-error-strong"),"bg-error-strong-hover":ui("bg-error-strong-hover"),"bg-inverse":ui("bg-inverse"),"bg-inverse-subtle":ui("bg-inverse-subtle"),"bg-inverse-subtler":ui("bg-inverse-subtler"),"bg-inverse-subtlest":ui("bg-inverse-subtlest"),"bg-inverse-hover":ui("bg-inverse-hover"),"bg-primary":ui("bg-primary"),"bg-primary-subtle":ui("bg-primary-subtle"),"bg-primary-subtler":ui("bg-primary-subtler"),"bg-primary-subtlest":ui("bg-primary-subtlest"),"bg-available":ui("bg-available"),"bg-primary-hover":ui("bg-primary-hover"),"bg-primary-subtlest-hover":ui("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":ui("bg-primary-subtlest-selected"),"overlay-strong":ui("overlay-strong"),"overlay-subtle":ui("overlay-subtle"),hyperlink:ui("hyperlink"),"hyperlink-hover":ui("hyperlink-hover"),"hyperlink-visited":ui("hyperlink-visited"),"hyperlink-inverse":ui("hyperlink-inverse"),"focus-ring":ui("focus-ring"),"focus-ring-inverse":ui("focus-ring-inverse")},fi={collections:{default:{solid:e=>t=>{var r,n,o;const{thickness:i,radius:a,colour:s}=e||{},l=null!==(r="function"==typeof i?i(t):i+"px")&&void 0!==r?r:Ho["width-010"](t),d=null!==(n="function"==typeof a?a(t):a+"px")&&void 0!==n?n:0,c=null!==(o="function"==typeof s?s(t):s)&&void 0!==o?o:hi.border(t),u=Ho.solid;return F`
            border: ${l} ${u} ${c};
            border-radius: ${d};
        `},"dashed-default":e=>t=>{var r,n,o;const{thickness:i,radius:a,colour:s}=e||{},l=null!==(r="function"==typeof i?i(t):i)&&void 0!==r?r:Ho["width-010"](t),d=null!==(n="function"==typeof a?a(t):a)&&void 0!==n?n:0,c=null!==(o="function"==typeof s?s(t):s)&&void 0!==o?o:hi.border(t),u=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${d}' ry='${d}' stroke='${c}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return F`
            background-image: url("data:image/svg+xml,${u}");
            border-radius: ${d};
        `}}},defaultValue:"default"},gi=e=>1===e.length&&"theme"in e[0],mi=e=>(...t)=>r=>{const n=gi(t)?[]:t,o=gi(t)?t[0]:r,i=o.theme;return(0,Lo(fi,null==i?void 0:i.borderScheme)[e])(...n)(o)},pi={solid:mi("solid"),"dashed-default":mi("dashed-default")},bi={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":480,"md-min":481,"md-max":768,"lg-min":769,"lg-max":1200,"xl-min":1201,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},vi=e=>t=>{var r;const n=t.theme,o=Lo(bi,null==n?void 0:n.breakpointScheme);let i;return i=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.breakpoint)?jo(o,e,n.overrides.breakpoint):o[e],i},yi={"xxs-min":vi("xxs-min"),"xxs-max":vi("xxs-max"),"xs-min":vi("xs-min"),"xs-max":vi("xs-max"),"sm-min":vi("sm-min"),"sm-max":vi("sm-max"),"md-min":vi("md-min"),"md-max":vi("md-max"),"lg-min":vi("lg-min"),"lg-max":vi("lg-max"),"xl-min":vi("xl-min"),"xl-max":vi("xl-max"),"xxl-min":vi("xxl-min"),"xxs-column":vi("xxs-column"),"xs-column":vi("xs-column"),"sm-column":vi("sm-column"),"md-column":vi("md-column"),"lg-column":vi("lg-column"),"xl-column":vi("xl-column"),"xxl-column":vi("xxl-column"),"xxs-gutter":vi("xxs-gutter"),"xs-gutter":vi("xs-gutter"),"sm-gutter":vi("sm-gutter"),"md-gutter":vi("md-gutter"),"lg-gutter":vi("lg-gutter"),"xl-gutter":vi("xl-gutter"),"xxl-gutter":vi("xxl-gutter"),"xxs-margin":vi("xxs-margin"),"xs-margin":vi("xs-margin"),"sm-margin":vi("sm-margin"),"md-margin":vi("md-margin"),"lg-margin":vi("lg-margin"),"xl-margin":vi("xl-margin"),"xxl-margin":vi("xxl-margin")},xi=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((t,r)=>(t[r]=((e,t)=>{const r=yi["max-width"===e?`${t}-max`:`${t}-min`];return t=>{const n=r(t);return`@media screen and (${e}: ${n}px)`}})(e,r),t)),{}),wi={MaxWidth:xi("max-width"),MinWidth:xi("min-width")},$i={collections:{default:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},bookingsg:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},mylegacy:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0.009rem"},pa:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.5rem","heading-size-sm":"1.25rem","heading-size-xs":"1rem","heading-lh-xxl":"3rem","heading-lh-xl":"2.5rem","heading-lh-lg":"2.25rem","heading-lh-md":"2rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.032rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.625rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.25rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},a11yplayground:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Atkinson Hyperlegible Next","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0.009rem"},supportgowhere:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Libre Franklin","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},sgwdigitallobby:{"heading-size-xxl":"3.75rem","heading-size-xl":"3rem","heading-size-lg":"2.5rem","heading-size-md":"2rem","heading-size-sm":"1.625rem","heading-size-xs":"1.375rem","heading-lh-xxl":"4.5rem","heading-lh-xl":"3.5rem","heading-lh-lg":"3rem","heading-lh-md":"2.5rem","heading-lh-sm":"2.25rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.035em","heading-ls-lg":"-0.02rem","heading-ls-md":"-0.02rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Libre Franklin","body-size-baseline":"1.375rem","body-size-md":"1.2rem","body-size-sm":"1.125rem","body-size-xs":"1rem","body-lh-baseline":"1.75rem","body-lh-md":"1.625rem","body-lh-sm":"1.625rem","body-lh-xs":"1.5rem","body-ls-baseline":"0rem","body-ls-md":"0rem","body-ls-sm":"0rem","body-ls-xs":"0.009rem","form-label-size":"1.25rem","form-description-size":"1.125rem","form-label-lh":"1.625rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0rem"},imda:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Montserrat","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},spf:{"heading-size-xxl":"3.75rem","heading-size-xl":"3rem","heading-size-lg":"2.5rem","heading-size-md":"2rem","heading-size-sm":"1.75rem","heading-size-xs":"1.5rem","heading-lh-xxl":"4.5rem","heading-lh-xl":"3.5rem","heading-lh-lg":"3rem","heading-lh-md":"2.25rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Public Sans","body-size-baseline":"1.2rem","body-size-md":"1.125rem","body-size-sm":"1rem","body-size-xs":"0.875rem","body-lh-baseline":"1.5rem","body-lh-md":"1.5rem","body-lh-sm":"1.5rem","body-lh-xs":"1.125rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},oneservice:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.375rem","heading-size-sm":"1.125rem","heading-size-xs":"1rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.625rem","heading-lh-md":"2rem","heading-lh-sm":"1.625rem","heading-lh-xs":"1.5rem","heading-ls-xxl":"0rem","heading-ls-xl":"0rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.75rem","body-lh-baseline":"1.5rem","body-lh-md":"1.313rem","body-lh-sm":"1.125rem","body-lh-xs":"1.125rem","body-ls-baseline":"0rem","body-ls-md":"0rem","body-ls-sm":"0rem","body-ls-xs":"0rem","form-label-size":"0.875rem","form-description-size":"0.875rem","form-label-lh":"1.313rem","form-description-lh":"1.313rem","form-label-ls":"0rem","form-description-ls":"0rem"}},defaultValue:"default"},Ci=e=>t=>{var r;const n=t.theme,o=Lo($i,null==n?void 0:n.fontScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.fontSpec)?jo(o,e,n.overrides.fontSpec):o[e]},Si={"heading-size-xxl":Ci("heading-size-xxl"),"heading-size-xl":Ci("heading-size-xl"),"heading-size-lg":Ci("heading-size-lg"),"heading-size-md":Ci("heading-size-md"),"heading-size-sm":Ci("heading-size-sm"),"heading-size-xs":Ci("heading-size-xs"),"heading-lh-xxl":Ci("heading-lh-xxl"),"heading-lh-xl":Ci("heading-lh-xl"),"heading-lh-lg":Ci("heading-lh-lg"),"heading-lh-md":Ci("heading-lh-md"),"heading-lh-sm":Ci("heading-lh-sm"),"heading-lh-xs":Ci("heading-lh-xs"),"heading-ls-xxl":Ci("heading-ls-xxl"),"heading-ls-xl":Ci("heading-ls-xl"),"heading-ls-lg":Ci("heading-ls-lg"),"heading-ls-md":Ci("heading-ls-md"),"heading-ls-sm":Ci("heading-ls-sm"),"heading-ls-xs":Ci("heading-ls-xs"),"weight-light":Ci("weight-light"),"weight-regular":Ci("weight-regular"),"weight-semibold":Ci("weight-semibold"),"weight-bold":Ci("weight-bold"),"font-family":Ci("font-family"),"body-size-baseline":Ci("body-size-baseline"),"body-size-md":Ci("body-size-md"),"body-size-sm":Ci("body-size-sm"),"body-size-xs":Ci("body-size-xs"),"body-lh-baseline":Ci("body-lh-baseline"),"body-lh-md":Ci("body-lh-md"),"body-lh-sm":Ci("body-lh-sm"),"body-lh-xs":Ci("body-lh-xs"),"body-ls-baseline":Ci("body-ls-baseline"),"body-ls-md":Ci("body-ls-md"),"body-ls-sm":Ci("body-ls-sm"),"body-ls-xs":Ci("body-ls-xs"),"form-label-size":Ci("form-label-size"),"form-description-size":Ci("form-description-size"),"form-label-lh":Ci("form-label-lh"),"form-description-lh":Ci("form-description-lh"),"form-label-ls":Ci("form-label-ls"),"form-description-ls":Ci("form-description-ls")},Di=(e,t,r,n,o)=>{const{disableLigatures:i}=o||{};return F`
        font-family: ${Ci("font-family")};
        font-size: ${Ci(e)};
        font-weight: ${Ci(t)};
        line-height: ${Ci(r)};
        letter-spacing: ${Ci(n)};

        font-variant: ${i?"no-common-ligatures":"normal"};
    `},ki=(e={})=>({"heading-xxl-light":Di("heading-size-xxl","weight-light","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-regular":Di("heading-size-xxl","weight-regular","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-semibold":Di("heading-size-xxl","weight-semibold","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-bold":Di("heading-size-xxl","weight-bold","heading-lh-xxl","heading-ls-xxl",e),"heading-xl-light":Di("heading-size-xl","weight-light","heading-lh-xl","heading-ls-xl",e),"heading-xl-regular":Di("heading-size-xl","weight-regular","heading-lh-xl","heading-ls-xl",e),"heading-xl-semibold":Di("heading-size-xl","weight-semibold","heading-lh-xl","heading-ls-xl",e),"heading-xl-bold":Di("heading-size-xl","weight-bold","heading-lh-xl","heading-ls-xl",e),"heading-lg-light":Di("heading-size-lg","weight-light","heading-lh-lg","heading-ls-lg",e),"heading-lg-regular":Di("heading-size-lg","weight-regular","heading-lh-lg","heading-ls-lg",e),"heading-lg-semibold":Di("heading-size-lg","weight-semibold","heading-lh-lg","heading-ls-lg",e),"heading-lg-bold":Di("heading-size-lg","weight-bold","heading-lh-lg","heading-ls-lg",e),"heading-md-light":Di("heading-size-md","weight-light","heading-lh-md","heading-ls-md",e),"heading-md-regular":Di("heading-size-md","weight-regular","heading-lh-md","heading-ls-md",e),"heading-md-semibold":Di("heading-size-md","weight-semibold","heading-lh-md","heading-ls-md",e),"heading-md-bold":Di("heading-size-md","weight-bold","heading-lh-md","heading-ls-md",e),"heading-sm-light":Di("heading-size-sm","weight-light","heading-lh-sm","heading-ls-sm",e),"heading-sm-regular":Di("heading-size-sm","weight-regular","heading-lh-sm","heading-ls-sm",e),"heading-sm-semibold":Di("heading-size-sm","weight-semibold","heading-lh-sm","heading-ls-sm",e),"heading-sm-bold":Di("heading-size-sm","weight-bold","heading-lh-sm","heading-ls-sm",e),"heading-xs-light":Di("heading-size-xs","weight-light","heading-lh-xs","heading-ls-xs",e),"heading-xs-regular":Di("heading-size-xs","weight-regular","heading-lh-xs","heading-ls-xs",e),"heading-xs-semibold":Di("heading-size-xs","weight-semibold","heading-lh-xs","heading-ls-xs",e),"heading-xs-bold":Di("heading-size-xs","weight-bold","heading-lh-xs","heading-ls-xs",e),"body-baseline-light":Di("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline",e),"body-baseline-regular":Di("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline",e),"body-baseline-semibold":Di("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline",e),"body-baseline-bold":Di("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline",e),"body-md-light":Di("body-size-md","weight-light","body-lh-md","body-ls-md",e),"body-md-regular":Di("body-size-md","weight-regular","body-lh-md","body-ls-md",e),"body-md-semibold":Di("body-size-md","weight-semibold","body-lh-md","body-ls-md",e),"body-md-bold":Di("body-size-md","weight-bold","body-lh-md","body-ls-md",e),"body-sm-light":Di("body-size-sm","weight-light","body-lh-sm","body-ls-sm",e),"body-sm-regular":Di("body-size-sm","weight-regular","body-lh-sm","body-ls-sm",e),"body-sm-semibold":Di("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm",e),"body-sm-bold":Di("body-size-sm","weight-bold","body-lh-sm","body-ls-sm",e),"body-xs-light":Di("body-size-xs","weight-light","body-lh-xs","body-ls-xs",e),"body-xs-regular":Di("body-size-xs","weight-regular","body-lh-xs","body-ls-xs",e),"body-xs-semibold":Di("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs",e),"body-xs-bold":Di("body-size-xs","weight-bold","body-lh-xs","body-ls-xs",e),"form-label":Di("form-label-size","weight-semibold","form-label-lh","form-label-ls",e),"form-description":Di("form-description-size","weight-regular","form-description-lh","form-description-ls",e)}),Fi=ki({disableLigatures:!0}),Ei=ki(),_i=ki({disableLigatures:!0}),Oi=ki({disableLigatures:!0}),Ti=ki({disableLigatures:!0}),Ii={collections:{default:Ei,bookingsg:Fi,mylegacy:Ei,pa:_i,a11yplayground:Oi,supportgowhere:Ti,sgwdigitallobby:Ti,imda:ki({disableLigatures:!0}),spf:ki({disableLigatures:!0}),oneservice:ki()},defaultValue:"default"},Mi=e=>t=>{var r;const n=t.theme,o=Lo(Ii,null==n?void 0:n.fontScheme),i=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.font)?jo(o,e,n.overrides.font):o[e];return"function"==typeof i?i(t):i},Bi={"heading-xxl-light":Mi("heading-xxl-light"),"heading-xxl-regular":Mi("heading-xxl-regular"),"heading-xxl-semibold":Mi("heading-xxl-semibold"),"heading-xxl-bold":Mi("heading-xxl-bold"),"heading-xl-light":Mi("heading-xl-light"),"heading-xl-regular":Mi("heading-xl-regular"),"heading-xl-semibold":Mi("heading-xl-semibold"),"heading-xl-bold":Mi("heading-xl-bold"),"heading-lg-light":Mi("heading-lg-light"),"heading-lg-regular":Mi("heading-lg-regular"),"heading-lg-semibold":Mi("heading-lg-semibold"),"heading-lg-bold":Mi("heading-lg-bold"),"heading-md-light":Mi("heading-md-light"),"heading-md-regular":Mi("heading-md-regular"),"heading-md-semibold":Mi("heading-md-semibold"),"heading-md-bold":Mi("heading-md-bold"),"heading-sm-light":Mi("heading-sm-light"),"heading-sm-regular":Mi("heading-sm-regular"),"heading-sm-semibold":Mi("heading-sm-semibold"),"heading-sm-bold":Mi("heading-sm-bold"),"heading-xs-light":Mi("heading-xs-light"),"heading-xs-regular":Mi("heading-xs-regular"),"heading-xs-semibold":Mi("heading-xs-semibold"),"heading-xs-bold":Mi("heading-xs-bold"),"body-baseline-light":Mi("body-baseline-light"),"body-baseline-regular":Mi("body-baseline-regular"),"body-baseline-semibold":Mi("body-baseline-semibold"),"body-baseline-bold":Mi("body-baseline-bold"),"body-md-light":Mi("body-md-light"),"body-md-regular":Mi("body-md-regular"),"body-md-semibold":Mi("body-md-semibold"),"body-md-bold":Mi("body-md-bold"),"body-sm-light":Mi("body-sm-light"),"body-sm-regular":Mi("body-sm-regular"),"body-sm-semibold":Mi("body-sm-semibold"),"body-sm-bold":Mi("body-sm-bold"),"body-xs-light":Mi("body-xs-light"),"body-xs-regular":Mi("body-xs-regular"),"body-xs-semibold":Mi("body-xs-semibold"),"body-xs-bold":Mi("body-xs-bold"),"form-label":Mi("form-label"),"form-description":Mi("form-description")},Ai={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},zi=e=>t=>{var r;const n=t.theme,o=Lo(Ai,null==n?void 0:n.motionScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.motion)?jo(o,e,n.overrides.motion):o[e]},ji={"duration-150":zi("duration-150"),"duration-250":zi("duration-250"),"duration-350":zi("duration-350"),"duration-500":zi("duration-500"),"duration-800":zi("duration-800"),"duration-1000":zi("duration-1000"),"ease-default":zi("ease-default"),"ease-standard":zi("ease-standard"),"ease-entrance":zi("ease-entrance"),"ease-exit":zi("ease-exit")},Li={collections:{default:{none:0,xs:2,sm:4,md:8,lg:12,full:9999},spf:{none:0,xs:2,sm:8,md:8,lg:12,full:9999}},defaultValue:"default"},Ri=e=>t=>{var r;const n=t.theme,o=Lo(Li,null==n?void 0:n.radiusScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.radius)?`${jo(o,e,n.overrides.radius)}px`:`${o[e]}px`},Pi={none:Ri("none"),xs:Ri("xs"),sm:Ri("sm"),md:Ri("md"),lg:Ri("lg"),full:Ri("full")},Hi=(e,t,r)=>n=>{const o=ui(t)(n)||ri(t)(n);return`${e} rgba(from ${o} r g b / ${100*r}%)`},Ni={collections:{default:{"xs-subtle":Hi("0 0 4px 1px","neutral-50",.24),"xs-strong":Hi("0 0 4px 1px","neutral-50",.5),"xs-focus-strong":Hi("0 0 4px 1px","border-focus",.5),"xs-error-strong":Hi("0 0 4px 1px","border-error",.5),"sm-subtle":Hi("0 2px 4px 0","neutral-50",.24),"sm-strong":Hi("0 2px 4px 0","neutral-50",.5),"md-subtle":Hi("0 2px 8px 0","neutral-50",.24),"md-strong":Hi("0 2px 8px 0","neutral-50",.5),"lg-subtle":Hi("0 2px 12px 1px","neutral-50",.24),"lg-strong":Hi("0 2px 12px 1px","neutral-50",.5)}},defaultValue:"default"},Wi=e=>t=>{var r;const n=t.theme,o=Lo(Ni,null==n?void 0:n.shadowScheme),i=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.shadow)?jo(o,e,n.overrides.shadow):o[e];return"function"==typeof i?i(t):i},Yi={"xs-subtle":Wi("xs-subtle"),"xs-strong":Wi("xs-strong"),"xs-focus-strong":Wi("xs-focus-strong"),"xs-error-strong":Wi("xs-error-strong"),"sm-subtle":Wi("sm-subtle"),"sm-strong":Wi("sm-strong"),"md-subtle":Wi("md-subtle"),"md-strong":Wi("md-strong"),"lg-subtle":Wi("lg-subtle"),"lg-strong":Wi("lg-strong")},Vi={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},Ui=e=>t=>{var r;const n=t.theme,o=Lo(Vi,null==n?void 0:n.spacingScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.spacing)?`${jo(o,e,n.overrides.spacing)}px`:`${o[e]}px`},Ki={"spacing-0":Ui("spacing-0"),"spacing-4":Ui("spacing-4"),"spacing-8":Ui("spacing-8"),"spacing-12":Ui("spacing-12"),"spacing-16":Ui("spacing-16"),"spacing-20":Ui("spacing-20"),"spacing-24":Ui("spacing-24"),"spacing-32":Ui("spacing-32"),"spacing-40":Ui("spacing-40"),"spacing-48":Ui("spacing-48"),"spacing-64":Ui("spacing-64"),"spacing-72":Ui("spacing-72"),"layout-xs":Ui("layout-xs"),"layout-sm":Ui("layout-sm"),"layout-md":Ui("layout-md"),"layout-lg":Ui("layout-lg"),"layout-xl":Ui("layout-xl"),"layout-xxl":Ui("layout-xxl"),"layout-xxxl":Ui("layout-xxxl")},Zi=(e,t)=>Object.assign(Object.assign({},e),{colourMode:t}),qi=Object.assign(Object.assign({},hi),{Primitive:ni}),Gi=Object.assign(Object.assign({},Bi),{Spec:Si}),Xi=ji,Qi=Object.assign(Object.assign({},Ho),{Util:pi}),Ji=Ki,ea=Pi,ta=Yi,ra=yi,na=wi,oa={colourScheme:"lifesg",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"lifesg",componentScheme:"lifesg",_v2:{colorScheme:"base",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"base"}},ia={colourScheme:"bookingsg",fontScheme:"bookingsg",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"bookingsg",_v2:{colorScheme:"bookingsg",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"bookingsg"}},aa={colourScheme:"ccube",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"ccube",_v2:{colorScheme:"ccube",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"ccube"}},sa={colourScheme:"mylegacy",fontScheme:"mylegacy",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"mylegacy",_v2:{colorScheme:"mylegacy",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"mylegacy"}},la={colourScheme:"rbs",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"rbs",_v2:{colorScheme:"rbs",textStyleScheme:"base",designTokenScheme:"rbs",resourceScheme:"rbs"}},da={colourScheme:"oneservice",fontScheme:"oneservice",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"oneservice"},ca={colourScheme:"pa",fontScheme:"pa",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"pa",componentScheme:"pa"},ua={colourScheme:"a11yplayground",fontScheme:"a11yplayground",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"a11yplayground",componentScheme:"a11yplayground"},ha={colourScheme:"supportgowhere",fontScheme:"supportgowhere",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"supportgowhere",componentScheme:"default"},fa={colourScheme:"supportgowhere",fontScheme:"sgwdigitallobby",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"supportgowhere",componentScheme:"default"},ga={colourScheme:"imda",fontScheme:"imda",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"imda",componentScheme:"default"},ma={colourScheme:"spf",fontScheme:"spf",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"spf",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"spf",componentScheme:"spf"};Object.assign(Object.assign({},oa),{light:Zi(oa,"light"),dark:Zi(oa,"dark")}),Object.assign(Object.assign({},ia),{light:Zi(ia,"light"),dark:Zi(ia,"dark")}),Object.assign(Object.assign({},aa),{light:Zi(aa,"light"),dark:Zi(aa,"dark")}),Object.assign(Object.assign({},sa),{light:Zi(sa,"light"),dark:Zi(sa,"dark")}),Object.assign(Object.assign({},la),{light:Zi(la,"light"),dark:Zi(la,"dark")}),Object.assign(Object.assign({},da),{light:Zi(da,"light"),dark:Zi(da,"dark")}),Object.assign(Object.assign({},ca),{light:Zi(ca,"light"),dark:Zi(ca,"dark")}),Object.assign(Object.assign({},ua),{light:Zi(ua,"light"),dark:Zi(ua,"dark")}),Object.assign(Object.assign({},ha),{light:Zi(ha,"light"),dark:Zi(ha,"dark")}),Object.assign(Object.assign({},fa),{light:Zi(fa,"light"),dark:Zi(fa,"dark")}),Object.assign(Object.assign({},ga),{light:Zi(ga,"light"),dark:Zi(ga,"dark")}),Object.assign(Object.assign({},ma),{light:Zi(ma,"light"),dark:Zi(ma,"dark")});const pa=e=>F`
    display: -webkit-box;
    -webkit-line-clamp: ${e};
    -webkit-box-orient: vertical;
    overflow: hidden;
`,ba=(e,t,r=!1)=>F`
        ${Gi[`${e}-${t}`]}
        ${r?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `,va=e=>{if(e)return F`
            ${pa(e)}
        `},ya=(e,t,r,n,o)=>F`
    ${ba(e,t||"regular",n)}
    ${((e=!1,t=!1,r)=>t?F`
            display: block;
            ${va(r)}
        `:e?F`
            display: inline;
        `:F`
            display: block;
            ${va(r)}
        `)(r,n,o)}
    color: ${qi.text};
`,xa=k.div`
    ${e=>ya(e.$textStyle,e.$weight,e.$inline,e.$paragraph,e.$maxLines)}
`,wa=k.a`
    ${e=>{var t;return F`
        ${ba(e.$textStyle,e.$weight||"regular")}
        color: ${qi.hyperlink};
        text-decoration: ${null!==(t=e.$underlineStyle)&&void 0!==t?t:"underline"};

        &:hover,
        &:active,
        &:focus {
            color: ${qi["text-hover"]};
        }
    `}}
`,$a=k(I)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`;var Ca;!function(r){const n=(t,r,n)=>{const i=(n,o)=>{var{weight:i,inline:a,paragraph:s,maxLines:l}=n,d=Fe(n,["weight","inline","paragraph","maxLines"]);return e(xa,Object.assign({ref:o,as:a?"span":t,$textStyle:r,$weight:i,$inline:a,$paragraph:s,$maxLines:l},d))};return i.displayName=`Typography.${n}`,o.forwardRef(i)};r.HeadingXXL=n("h1","heading-xxl","HeadingXXL"),r.HeadingXL=n("h2","heading-xl","HeadingXL"),r.HeadingLG=n("h3","heading-lg","HeadingLG"),r.HeadingMD=n("h4","heading-md","HeadingMD"),r.HeadingSM=n("h5","heading-sm","HeadingSM"),r.HeadingXS=n("h6","heading-xs","HeadingXS");const i=(t,r)=>{const n=(r,n)=>{var{weight:o,inline:i,paragraph:a,maxLines:s}=r,l=Fe(r,["weight","inline","paragraph","maxLines"]);return e(xa,Object.assign({ref:n,as:i?"span":"p",$textStyle:t,$weight:o,$inline:i,$paragraph:a,$maxLines:s},l))};return n.displayName=`Typography.${r}`,o.forwardRef(n)};r.BodyBL=i("body-baseline","BodyBL"),r.BodyMD=i("body-md","BodyMD"),r.BodySM=i("body-sm","BodySM"),r.BodyXS=i("body-xs","BodyXS");const a=(r,n)=>{const i=(n,o)=>{var{weight:i,children:a,external:s,underlineStyle:l="underline"}=n,d=Fe(n,["weight","children","external","underlineStyle"]);return t(wa,Object.assign({ref:o,$textStyle:r,$weight:i,$underlineStyle:l},d,{children:[a,s&&e($a,{})]}))};return i.displayName=`Typography.${n}`,o.forwardRef(i)};r.LinkBL=a("body-baseline","LinkBL"),r.LinkMD=a("body-md","LinkMD"),r.LinkSM=a("body-sm","LinkSM"),r.LinkXS=a("body-xs","LinkXS")}(Ca||(Ca={}));const Sa=k.div`
    border-radius: ${ea.md};
    background: ${qi.bg};
    padding: ${Ji["spacing-16"]} ${Ji["spacing-32"]};
    ${e=>{var t;return"dark"===(null===(t=e.theme)||void 0===t?void 0:t.colourMode)?F`
                  border: ${Qi["width-010"]} ${Qi.solid}
                      ${qi.border};
              `:F`
                  box-shadow: ${ta["md-subtle"]};
              `}}
`,Da=k.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${Ji["spacing-24"]};
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
                background-color: ${qi["bg-hover-neutral"]};
            `}
    }
`,ka=o.forwardRef(((t,r)=>{var{children:n,focusHighlight:o=!0,focusOutline:i="none",type:a="button"}=t,s=Fe(t,["children","focusHighlight","focusOutline","type"]);return e(Da,Object.assign({ref:r,$outline:i,$highlight:o,type:a},s,{children:n}))})),Fa=k.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${qi.bg};
    box-shadow: ${ta["lg-strong"]};
    border-radius: ${ea.lg};
    overflow: hidden;

    ${na.MaxWidth.md} {
        width: 90%;
        max-height: 70%;
    }
`,Ea=k(ka)`
    position: absolute;
    top: var(--close-button-top-inset, ${Ji["spacing-16"]});
    right: var(--close-button-right-inset, ${Ji["spacing-16"]});
    padding: 0;
    color: ${qi.icon};

    svg {
        height: 2rem;
        width: 2rem;
    }

    ${na.MaxWidth.sm} {
        right: var(--close-button-right-inset, ${Ji["spacing-20"]});
    }
`,_a=r=>{var{id:n="modal-box",children:o,onClose:i,showCloseButton:a=!0}=r,s=Fe(r,["id","children","onClose","showCloseButton"]);return t(Fa,Object.assign({"data-testid":n},s,{onClick:e=>{e.stopPropagation()},children:[a&&e(Ea,{onClick:i,"data-testid":"close-button",focusHighlight:!1,focusOutline:"browser",children:e(M,{})}),o]}))},Oa=e=>{const{textSize:t}=e||{};return F`
        // Text styling
        ${t&&Gi[`${t}-regular`]}

        strong {
            font-weight: ${Gi.Spec["weight-semibold"]};
            ${t&&Gi[`${t}-semibold`]};
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-weight: ${Gi.Spec["weight-semibold"]};
            ${t&&Gi[`${t}-semibold`]}
            color: ${qi.hyperlink};
            text-decoration: underline;

            svg {
                color: ${qi["icon-primary"]};
                height: 1lh;
                width: 1em;
                margin-left: 0.4rem;
                vertical-align: middle;
            }

            &:hover,
            &:active,
            &:visited,
            &:focus {
                color: ${qi["hyperlink-hover"]};

                svg {
                    color: ${qi["icon-hover"]};
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
    `},Ta=k.div`
    max-width: 30rem;
    padding: 0 1rem;
    pointer-events: auto;
    outline: none;
`,Ia=k((t=>{var{children:r}=t,n=Fe(t,["children"]);const o=n["data-testid"]||"card";return e(Sa,Object.assign({},n,{"data-testid":o,children:"string"==typeof r?e(Ca.BodyBL,{children:r}):r}))}))`
    color: ${qi.text};
    ${Oa({textSize:"body-md"})}

    ${na.MaxWidth.sm} {
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
        background: ${qi["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: ${ea.full};
        background-clip: padding-box;
    }
`;k(_a)`
    padding: 3.5rem 1.25rem 2.5rem;
`,k.div`
    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    color: ${qi.text};
    ${Oa({textSize:"body-md"})}
`;const Ma=k.div`
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
`,Ba=k.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${e=>e.$stacked?qi["overlay-subtle"]:qi["overlay-strong"]};
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
`;var Aa;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(Aa||(Aa={}));const za=()=>{const[e,t]=s(void 0),r=B();return h((()=>{if(!r)return void t(void 0);const e=e=>{t(e.zIndex)};return r.events.on(Aa.Change,e),r.events.emit(Aa.Ready),()=>r.events.off(Aa.Change,e)}),[r]),e},ja=({show:t=!1,rootId:r,onOverlayClick:n,children:i,backgroundOpacity:l,backgroundBlur:d=!0,disableTransition:c=!1,enableOverlayClick:u=!1,zIndex:f,id:g})=>{const[m,p]=s(null),[b,v]=s(),[y]=s((()=>et.generate())),x=z(),w=a(),$=a(null),C=i&&o.cloneElement(i,{ref:$}),S=g?`lifesg-ds-overlay-root-${g}`:"lifesg-ds-overlay-root",D=null!=f?f:b?99999:99998;(e=>{const t=B();h((()=>{if(!t)return;const r={zIndex:e};t.events.emit(Aa.Change,r)}),[t,e]),h((()=>{if(!t)return;const r=()=>{const r={zIndex:e};t.events.emit(Aa.Change,r)};return null==t||t.events.on(Aa.Ready,r),()=>null==t?void 0:t.events.off(Aa.Ready,r)}),[t,e])})(D),h((()=>(O(),p(E()),()=>{A(),I().length<1&&(L("remove"),P(),T("remove"))})),[]),h((()=>{if(t){const e=_();k(e),M(),F()&&1===I().length&&(R(),L("add"));const t=setTimeout((()=>{T("add")}),200);return()=>clearTimeout(t)}{A(),F()&&I().length<1&&(L("remove"),P());const e=setTimeout((()=>{I().length<1&&T("remove")}),200);return()=>clearTimeout(e)}}),[t]);const k=e=>{w.current=e,v(e)},F=()=>/(iPad|iPhone|iPod)/g.test(navigator.userAgent),E=()=>document&&r?document.getElementById(r):document?document.body:null,_=()=>I().length>0,O=()=>{if(!document.getElementById(Ra)){const e=document.createElement("style");e.id=Ra;const t=document.documentElement.clientWidth,r=window.innerWidth-t;e.innerHTML=`\n\t\t\t\t.${Pa} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${r}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${Pa}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\n\t\t\t\t.${Ha} {\n\t\t\t\t\tposition: fixed;\n\t\t\t\t\ttop: var(${Na}, 0);\n\t\t\t\t\tbottom: 0;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},T=e=>{const t=document.body.classList.contains(Pa);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove(Pa):document.body.classList.add(Pa)},I=()=>{const e=document.body.dataset.lifesgDsOverlayOrder;return e?e.split(","):[]},M=()=>{const e=I();document.body.dataset.lifesgDsOverlayOrder=[...e,y].join(",")},A=()=>{const e=I();document.body.dataset.lifesgDsOverlayOrder=e.filter((e=>e!==y)).join(",")},L=e=>{if(!F())return;const t=document.body.classList.contains(Ha);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove(Ha):document.body.classList.add(Ha)},R=()=>{const e=document.body.style,t=e.top?e.top:window.scrollY+"px";document.body.style.setProperty(Na,t)},P=()=>{const e=document.body.style.getPropertyValue(Na);requestAnimationFrame((()=>{window.scrollTo({top:parseFloat(e)})}))},H=e=>{var t;const r=null===(t=$.current)||void 0===t?void 0:t.firstChild;r&&r.contains(e.target)||n&&u&&(e.preventDefault(),n())};return m?ee.createPortal(e(Ma,{id:S,"data-testid":S,$show:t,$zIndex:D,children:i&&e(j,{id:x,children:e(Ba,{"data-testid":"overlay-wrapper",$show:t,$stacked:b,$backgroundBlur:d,$disableTransition:c,onClick:H,children:C})})}),m):null},La=t=>e(A,{children:e(ja,Object.assign({},t))}),Ra="lifesg-ds-overlay-stylesheet",Pa="lifesg-ds-overlay-open",Ha="lifesg-ds-overlay-scroll-lock",Na="--lifesg-ds-overlay-scroll-y",Wa=()=>{const[e,t]=s(),[r,n]=s(),o=g((()=>{const e=.01*window.innerHeight;t(e)}),[]),i=g((()=>{if(window.visualViewport){const e=.01*window.visualViewport.height;t(e),n(window.visualViewport.offsetTop)}}),[]);return h((()=>window.visualViewport?(i(),window.visualViewport.addEventListener("resize",i),()=>{var e;null===(e=window.visualViewport)||void 0===e||e.removeEventListener("resize",i)}):(o(),window.addEventListener("resize",o),()=>{window.removeEventListener("resize",o)})),[]),{verticalHeight:e,offsetTop:r}},Ya=m({onClose:()=>{}}),Va=k.div`
    position: relative;
    width: 100%;
    height: 100%;

    overflow: auto;

    ${na.MaxWidth.sm} {
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
            transition: all ${Xi["duration-250"]}
                ${Xi["ease-entrance"]}
            transition-delay: ${Xi["duration-150"]};
        }

        &[data-status="close"] {
            opacity: 0;
            ${e.$animationFrom}: -3%;
            transition: all ${Xi["duration-250"]}
                ${Xi["ease-exit"]};
        }
    `}
`,Ua=k.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100%;
    pointer-events: none;
`,Ka=k.div`
    pointer-events: auto;
    width: 100%;
    outline: none;
`,Za=k.div`
    width: 40rem;
    margin: ${Ji["spacing-64"]} auto;
    background: ${qi.bg};
    box-shadow: ${ta["xs-strong"]};
    border-radius: ${ea.lg};

    display: flex;
    flex-direction: column-reverse;

    max-width: calc(100% - ${ra["xxl-margin"]}px * 2);

    ${na.MaxWidth.xl} {
        max-width: calc(100% - ${ra["xl-margin"]}px * 2);
    }

    ${na.MaxWidth.lg} {
        max-width: calc(100% - ${ra["lg-margin"]}px * 2);
    }

    ${na.MaxWidth.md} {
        max-width: calc(100% - ${ra["md-margin"]}px * 2);
    }

    ${na.MaxWidth.sm} {
        max-width: calc(100% - ${ra["sm-margin"]}px * 2);
    }

    ${na.MaxWidth.xs} {
        max-width: calc(100% - ${ra["xs-margin"]}px * 2);
    }

    ${na.MaxWidth.xxs} {
        max-width: calc(100% - ${ra["xxs-margin"]}px * 2);
    }
`,qa=k.div`
    margin-right: ${Ji["spacing-16"]};
    margin-left: auto;
    margin-top: ${Ji["spacing-16"]};
    margin-bottom: ${Ji["spacing-16"]};
`,Ga=k(ka)`
    padding: 0;
    color: ${qi.icon};

    svg {
        height: 2rem;
        width: 2rem;
    }
`,Xa=k.div`
    margin-right: ${Ji["spacing-64"]};
    margin-left: ${Ji["spacing-64"]};

    ${na.MaxWidth.sm} {
        margin-right: ${Ji["spacing-20"]};
        margin-left: ${Ji["spacing-20"]};
    }
`,Qa=k.div`
    margin-right: ${Ji["spacing-64"]};
    margin-left: ${Ji["spacing-64"]};

    ${na.MaxWidth.sm} {
        margin-right: ${Ji["spacing-20"]};
        margin-left: ${Ji["spacing-20"]};
    }

    display: flex;
    flex-direction: row-reverse; /* primary button on right */
    column-gap: ${Ji["spacing-32"]};
    row-gap: ${Ji["spacing-16"]};

    & > button {
        flex: 1;
    }

    ${na.MaxWidth.md} {
        flex-direction: column;
    }
`,Ja=k.div`
    :where(& > ${Xa}:last-child) {
        margin-bottom: ${Ji["spacing-64"]};
    }

    :where(& > ${Qa}:not(:first-child)) {
        margin-top: ${Ji["spacing-32"]};
    }

    :where(& > ${Qa}:last-child) {
        margin-bottom: ${Ji["spacing-64"]};
    }

    ${e=>e.$hasCloseButton?F`
                  :where(& > ${Xa}:first-child),
                  :where(& > ${Qa}:first-child) {
                      margin-top: 0;
                  }
              `:F`
                  :where(& > ${Xa}:first-child),
                  :where(& > ${Qa}:first-child) {
                      margin-top: ${Ji["spacing-64"]};
                  }
              `}
`,es=t=>{var{"data-testid":r="modal-close-button"}=t,n=Fe(t,["data-testid"]);const{onClose:o}=p(Ya);return e(qa,Object.assign({"data-testid":r},n,{children:e(Ga,{onClick:o,"data-testid":"close-button",focusHighlight:!1,focusOutline:"browser","aria-label":"Close button",children:e(M,{"aria-hidden":!0})})}))};es.displayName="ModalV2.CloseButton";const ts=t=>{var{"data-testid":r="modal-content",children:n}=t,o=Fe(t,["data-testid","children"]);return e(Xa,Object.assign({"data-testid":r},o,{children:n}))};ts.displayName="ModalV2.Content";const rs=e=>{var{"data-testid":r="modal-footer",primaryButton:n,secondaryButton:o}=e,i=Fe(e,["data-testid","primaryButton","secondaryButton"]);return t(Qa,Object.assign({"data-testid":r},i,{children:[n,o]}))};rs.displayName="ModalV2.Footer";const ns=e=>{var{id:r,"data-testid":n="modal-card",children:i}=e,a=Fe(e,["id","data-testid","children"]);const s=e=>o.Children.toArray(i).find((t=>((e,t)=>E(e.type)?e.type.target===t:e.type===t)(t,e))),l=s(es),d=s(ts),c=s(rs),u=!!l;return t(Za,Object.assign({id:r,"data-testid":n},a,{onClick:e=>{e.stopPropagation()},children:[t(Ja,{$hasCloseButton:u,children:[d,c]}),u&&l]}))};ns.displayName="ModalV2.Card";const os=Object.assign((t=>{var{id:r,show:n,onClose:o,animationFrom:i="bottom",children:a,enableOverlayClick:s=!0,rootComponentId:l,zIndex:d,onOverlayClick:c,dismissKeyboardOnShow:u=!0,"data-testid":f="modal"}=t,g=Fe(t,["id","show","onClose","animationFrom","children","enableOverlayClick","rootComponentId","zIndex","onOverlayClick","dismissKeyboardOnShow","data-testid"]);const{verticalHeight:m,offsetTop:p}=Wa(),{refs:b,context:v}=L({open:n,onOpenChange:e=>{e||null==o||o()}}),{isMounted:y,status:x}=R(v,{duration:300}),w=P(v,{outsidePress:!1,enabled:!!o}),{getFloatingProps:$}=H([w]);return h((()=>{var e,t;n&&u&&(null===(t=null===(e=document.activeElement)||void 0===e?void 0:e.blur)||void 0===t||t.call(e))}),[u,n]),e(La,{"data-testid":`${f}-overlay`,show:y,enableOverlayClick:s,onOverlayClick:c,id:r,rootId:l,zIndex:d,children:e(Va,Object.assign({$show:y,$animationFrom:i,"data-testid":f,$verticalHeight:m,$offsetTop:p},g,{"data-status":x,children:e(Ya.Provider,{value:{onClose:o},children:y&&e(N,{context:v,initialFocus:b.floating,children:e(Ua,{children:e(Ka,Object.assign({ref:b.setFloating},$(),{"aria-modal":!0,role:"dialog",children:a}))})})})}))})}),{Card:ns,CloseButton:es,Content:ts,Footer:rs}),is=n=>{var{children:o,visible:i,onMobileClose:a,maxHeight:s,overflow:l,ariaLabel:d,id:c}=n,u=Fe(n,["children","visible","onMobileClose","maxHeight","overflow","ariaLabel","id"]);const h=u["data-testid"]||"popover",f=p(_),g=ra["sm-max"]({theme:f}),m=ir.useMediaQuery({maxWidth:g}),b=()=>{a&&a()},v=()=>"string"==typeof o?e(Ca.BodyMD,{children:o}):o;return t(r,{children:[i&&e(Ta,Object.assign({tabIndex:0,"data-testid":h},u,{id:c,role:"dialog","aria-label":null!=d?d:"More information",children:e(Ia,{$maxHeight:s,$overflow:l,children:v()})})),m&&e(os,{show:null!=i&&i,onOverlayClick:b,onClose:b,id:c,role:"dialog","aria-label":null!=d?d:"More information",children:t(os.Card,{children:[e(os.Content,{children:v()}),e(os.CloseButton,{})]})})]})},as=k.div`
    display: inline;
    width: fit-content;
    cursor: pointer;
    position: relative;
`,ss=n=>{var o,i,{children:l,popoverContent:d,trigger:c="click",position:u="top",zIndex:h,rootNode:f,customOffset:g,delay:m,onPopoverAppear:b,onPopoverDismiss:v,popoverAriaLabel:y,enableFlip:x=!0,enableResize:w=!1,overflow:$="auto",triggerOnFocus:C=!1,isModal:S=!0}=n,D=Fe(n,["children","popoverContent","trigger","position","zIndex","rootNode","customOffset","delay","onPopoverAppear","onPopoverDismiss","popoverAriaLabel","enableFlip","enableResize","overflow","triggerOnFocus","isModal"]);const[k,F]=s(!1),E=a(null),O=a(null),T=p(_),I=ra["sm-max"]({theme:T}),M=ir.useMediaQuery({maxWidth:I}),[B,A]=s(0),z=`${a(et.generate()).current}-popover`,{refs:j,floatingStyles:R,context:J}=L({open:k,placement:u,whileElementsMounted:W,middleware:[Y(null!=g?g:16),x&&V(),U({limiter:K()}),w&&Z({apply({availableHeight:e}){A(e)}})],onOpenChange:e=>{F(e),k!==e&&de(e)}}),ee=za(),te="hover"===(M?"click":c),re=q(J,{ignoreMouse:te}),ne=P(J),oe=G(J,{enabled:te,delay:{open:null!==(o=null==m?void 0:m.open)&&void 0!==o?o:0,close:null!==(i=null==m?void 0:m.close)&&void 0!==i?i:500}}),ie=X(J,{enabled:C}),{getReferenceProps:ae,getFloatingProps:se}=H([re,ne,oe,ie]),le=()=>{F(!1),de(!1)},de=e=>{e&&b&&b(),!e&&v&&v()};return t(r,{children:[e(as,Object.assign({ref:e=>{E.current=e,j.setReference(e)}},ae({onClick:e=>{e.stopPropagation(),e.preventDefault()}}),D,{children:l})),k&&e(Q,{root:f,children:e(N,Object.assign({context:J},!S&&{initialFocus:-1,returnFocus:!1,modal:!1},{children:e("div",Object.assign({ref:e=>{O.current=e,j.setFloating(e)},onBlur:e=>{var t;const r=null!==(t=e.relatedTarget)&&void 0!==t?t:document.activeElement;r&&(e=>{var t;if(!e)return!1;if(e instanceof HTMLElement&&e.hasAttribute("data-floating-ui-focus-guard"))return!0;const r=E.current,n=null===(t=O.current)||void 0===t?void 0:t.parentElement;return!!r&&r.contains(e)||!!n&&n.contains(e)})(r)||(F(!1),de(!1))},style:Object.assign(Object.assign({},R),{outline:"none",zIndex:null!=h?h:ee})},se(),{children:"function"==typeof d?d(w?{maxHeight:B,overflow:$}:{}):e(is,{visible:!0,onMobileClose:le,maxHeight:w?B:void 0,overflow:w?$:void 0,ariaLabel:y,id:z,children:d})}))}))})]})},ls=e=>{switch(e){case"underline":return"text-decoration: underline 1px;";case"underline-dashed":return"text-decoration: underline dashed 1px;"}},ds=k.span`
    color: ${qi["text-primary"]};
    font-weight: 600;
    text-underline-position: under;

    ${({$defaultStyle:e})=>ls(e)}

    &:hover,
    &:focus-visible {
        color: ${qi["text-hover"]};
        ${({$hoverStyle:e})=>ls(e)}
    }

    svg {
        height: 1lh; // align vertically
        width: 1em; // scale icon with font size
        vertical-align: top;
    }
`,cs=k.span`
    ${e=>!e.$standalone&&"margin-left: 0.25rem;"}
`,us=r=>{var{ariaLabel:n,content:o,icon:i,underlineStyle:a="default",underlineHoverStyle:s="default"}=r,l=Fe(r,["ariaLabel","content","icon","underlineStyle","underlineHoverStyle"]);const d=!!o;return e(ss,Object.assign({},l,{children:t(ds,{"aria-label":null!=n?n:d?void 0:"More info",role:"button","aria-haspopup":"dialog",tabIndex:0,$defaultStyle:a,$hoverStyle:s,children:[o,i&&e(cs,{$standalone:!d,children:i})]})}))},hs=k.div`
    padding-left: ${Ji["spacing-4"]};
    display: inline;
`,fs=({addon:t,rootNode:r})=>{const{content:n,type:o,icon:i,id:a,zIndex:s,"data-testid":l}=t;return e(hs,{children:e(us,{trigger:"click",id:a,"data-testid":l,popoverContent:n,rootNode:r,zIndex:s,icon:null!=i?i:e(D,{"data-testid":`${o}-icon`}),ariaLabel:"More info"})})},gs=k.div`
    margin-bottom: ${Ji["spacing-8"]};
`,ms=k.label`
    color: ${qi["text-subtle"]};
    display: inline-block;

    ${Gi["form-label"]}
    ${Oa()}
    font-weight: ${Gi.Spec["weight-semibold"]};
`,ps=k(re)`
    height: 1lh;
    width: 1em;
    flex-shrink: 0;
    color: ${qi["icon-error-strong"]};
`,bs=k.div`
    ${Gi["body-sm-semibold"]}
    display: flex;
    gap: ${Ji["spacing-4"]};
    margin-top: ${Ji["spacing-8"]};
`,vs=k.p`
    color: ${qi["text-error"]};
    margin-bottom: 0;
    outline: none;
`,ys=k.span`
    ${Gi["form-description"]}
    color: ${qi["text-subtler"]};
    display: block;
`,xs=r=>{var{id:n,children:o,addon:i,subtitle:a,"data-testid":s,className:l,style:d}=r,c=Fe(r,["id","children","addon","subtitle","data-testid","className","style"]);return t(gs,{className:l,style:d,"data-testid":s,children:[t(ms,Object.assign({id:n},c,{children:[o,i&&i.type&&("popover"===(null==i?void 0:i.type)?e(fs,{addon:i}):null)]})),"string"==typeof a?e(ys,{id:n?`${n}-subtitle`:void 0,"data-testid":s?`${s}-subtitle`:"subtitle",children:a}):a]})},ws=r=>t(bs,{children:[e(ps,{"aria-hidden":!0}),e(vs,Object.assign({},r))]}),$s=k.div`
    position: relative;

    ${e=>{const{$xxlStart:t,$xxlSpan:r,$xlStart:n,$xlSpan:o,$lgStart:i,$lgSpan:a,$mdStart:s,$mdSpan:l,$smStart:d,$smSpan:c,$xsStart:u,$xsSpan:h,$xxsStart:f,$xxsSpan:g}=e;return F`
            grid-column: ${t||"auto"} / span ${r||1};

            ${wi.MaxWidth.xl} {
                grid-column: ${n||"auto"} / span ${o||1};
            }

            ${wi.MaxWidth.lg} {
                grid-column: ${i||"auto"} / span ${a||1};
            }

            ${wi.MaxWidth.md} {
                grid-column: ${s||"auto"} / span ${l||1};
            }

            ${wi.MaxWidth.sm} {
                grid-column: ${d||"auto"} / span ${c||1};
            }

            ${wi.MaxWidth.xs} {
                grid-column: ${u||"auto"} / span ${h||1};
            }

            ${wi.MaxWidth.xxs} {
                grid-column: ${f||"auto"} / span ${g||1};
            }
        `}}
`,Cs=o.forwardRef(((t,r)=>{const n=p(_),{xxlCols:o,xlCols:i,lgCols:a,mdCols:s,smCols:l,xsCols:d,xxsCols:c}=t,u=Fe(t,["xxlCols","xlCols","lgCols","mdCols","smCols","xsCols","xxsCols"]),h=(e,t,r)=>{if(!e)return{start:void 0,span:void 0};if("development"===process.env.NODE_ENV&&("number"==typeof e&&e>t?console.warn(`Warning: ${r}Cols exceeds maximum (${t}): ${e}`):Array.isArray(e)&&(e[0]>t+1||e[1]>t+1)&&console.warn(`Warning: ${r}Cols array exceeds maximum (${t}): [${e[0]}, ${e[1]}]`)),Array.isArray(e)){const[r,n]=e;if(-1===n)return{start:r,span:t-r+1};return{start:r,span:Math.min(n-r,t)}}return{start:void 0,span:Math.min(e,t)}};return e($s,Object.assign({ref:r},(()=>{const e=yi["xxl-column"]({theme:n}),t=yi["xl-column"]({theme:n}),r=yi["lg-column"]({theme:n}),u=yi["md-column"]({theme:n}),f=yi["sm-column"]({theme:n}),g=yi["xs-column"]({theme:n}),m=yi["xxs-column"]({theme:n}),p=h(o||i||a||s||l||d||c,e,"xxl"),b=h(i||a||s||l||d||c,t,"xl"),v=h(a||s||l||d||c,r,"lg"),y=h(s||l||d||c,u,"md"),x=h(l||d||c,f,"sm"),w=h(d||c,g,"xs"),$=h(c,m,"xxs");return{$xxlStart:p.start,$xxlSpan:p.span,$xlStart:b.start,$xlSpan:b.span,$lgStart:v.start,$lgSpan:v.span,$mdStart:y.start,$mdSpan:y.span,$smStart:x.start,$smSpan:x.span,$xsStart:w.start,$xsSpan:w.span,$xxsStart:$.start,$xxsSpan:$.span}})(),u))})),Ss={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Ds=e=>Object.keys(Ss).reduce(((t,r)=>{const n=Ss[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),ks=Ds("max-width"),Fs=(Ds("min-width"),k.div`
    position: relative;
    ${e=>{const{$desktopStart:t,$desktopSpan:r,$tabletStart:n,$tabletSpan:o,$mobileStart:i,$mobileSpan:a}=e;return F`
            grid-column: ${t||"auto"} / span ${r||1};

            ${ks.tablet} {
                grid-column: ${n||"auto"} / span
                    ${o||1};
            }

            ${ks.mobileL} {
                grid-column: ${i||"auto"} / span
                    ${a||1};
            }
        `}}
`),Es=o.forwardRef(((t,r)=>{const{mobileCols:n,tabletCols:o,desktopCols:i}=t,a=Fe(t,["mobileCols","tabletCols","desktopCols"]);return e(Fs,Object.assign({ref:r},(()=>{const e=o||n,t=n,r=_s(i||o||n),a=_s(e),s=_s(t);return{$desktopSpan:r.span,$desktopStart:r.start,$mobileSpan:s.span,$mobileStart:s.start,$tabletSpan:a.span,$tabletStart:a.start}})(),a))})),_s=e=>{if(Array.isArray(e)&&e.length>1){const[t,r]=e,n=t<=r?t:r,o=t<=r?r:t;let i;return i=o===n?1:o-n,{start:n,span:i}}return"number"==typeof e?{start:void 0,span:e}:{start:void 0,span:void 0}},Os=F`
    display: flex;
    flex-direction: column;

    &:not(:last-child) {
        margin-bottom: ${Ji["spacing-32"]};
    }
`,Ts=k.div`
    ${Os}
`,Is=k(Cs)`
    ${Os}
`,Ms=k(Es)`
    ${Os}
`,Bs=({label:r,errorMessage:n,id:o,disabled:i,children:a,layoutType:l,mobileCols:d,tabletCols:u,desktopCols:h,xxsCols:f,xsCols:g,smCols:m,mdCols:p,lgCols:v,xlCols:y,xxlCols:x,"data-testid":w,"data-error-testid":$})=>{const C=!l&&(d||u||h)?"v2-grid":!l&&(f||g||m||p||v||y||x)?"grid":l||"flex",S="string"==typeof n?n.trim():n,[D]=s((()=>et.generate())),k=`${null!=o?o:D}-label`,F=`${null!=o?o:D}-label-subtitle`,E=`${null!=o?o:D}-error-message`;const _=(e=>{switch(e){case"v2-grid":return Ms;case"grid":return Is;case"flex":return Ts}})(C);return t(_,Object.assign({"data-testid":w},(e=>{switch(e){case"v2-grid":return{mobileCols:d,tabletCols:u,desktopCols:h};case"grid":return{xxsCols:f,xsCols:g,smCols:m,mdCols:p,lgCols:v,xlCols:y,xxlCols:x};case"flex":return}})(C),{children:[r&&e(xs,"string"==typeof r?{htmlFor:`${o}-base`,"data-testid":o?`${o}-label`:"form-label",id:k,disabled:i,children:r}:Object.assign({htmlFor:`${o}-base`,"data-testid":o?`${o}-label`:"form-label",id:k,disabled:i},r)),(()=>{const e={"aria-invalid":!!n,"aria-describedby":[S?E:void 0,"object"==typeof r&&(null==r?void 0:r.subtitle)?F:void 0].filter(Boolean).join(" ")||void 0,"aria-labelledby":r?k:void 0};return b.map(a,(t=>c(t,e)))})(),S&&t(bs,{children:[e(ps,{"aria-hidden":!0}),e(vs,{id:E,tabIndex:0,"data-testid":null!=$?$:o?`${o}-error-message`:"error-message",children:S})]})]}))},As=e=>"small"===e?2.5:3,zs=k.div`
    position: relative;
    width: 100%;
    ${e=>{const t=As(e.$variant);return F`
            min-height: ${t}rem;
            height: ${t}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`,js=F`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${Ji["spacing-16"]};
    // exclude top and bottom borders
    height: calc(${e=>As(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${ea.sm};
    border: none;
    background: transparent;

    &:focus,
    &:active {
        outline: none;
    }

    &:focus-visible {
        outline: 2px solid ${qi["border-focus"]};
    }
`,Ls=k.button`
    ${js}
    cursor: pointer;
`;k.div`
    ${js}
`;const Rs=O`
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
    border: ${Qi["width-010"]} ${Qi.solid} ${qi.border};
    border-radius: ${ea.sm};
    background: ${qi.bg};
    overflow: hidden;

    &:focus-within {
        border-color: ${qi["border-focus"]};
        box-shadow: 0px 0px 4px 0px
            rgb(from ${qi["border-focus"]} r g b / 50%) inset; // TODO: confirm shadow
    }

    ${e=>e.$expanded?F`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:F`
                animation: ${Rs} 0.5s ease-in-out;
            `}

    ${e=>e.$disabled?F`
                background: ${qi["bg-disabled"]};

                ${Ls} {
                    cursor: not-allowed;
                }

                &:focus-within {
                    border-color: ${qi.border};
                    box-shadow: none;
                }
            `:e.$readOnly?F`
                border: none;
                background: transparent !important;

                ${Ls} {
                    padding: 0;
                }

                &:focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.$error?F`
                border-color: ${qi["border-error"]};

                &:focus-within {
                    border-color: ${qi["border-error"]};
                    box-shadow: 0px 0px 4px 0px
                        rgb(from ${qi["border-error"]} r g b / 50%) inset; // TODO: confirm shadow
                }
            `:void 0}
`,k.div`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${Xi["duration-250"]} ${Xi["ease-default"]};
    margin-left: ${Ji["spacing-16"]};
`,k(ne)`
    color: ${qi.icon};
`,k.div`
    height: 1px;
    background: ${qi.border};
    margin: 0 ${Ji["spacing-8"]};
`;const Ps=k.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return F`
                color: ${qi["text-disabled"]};
            `}}
`,Hs=k.div`
    ${e=>"small"===e.$variant?Gi["body-md-regular"]:Gi["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.$truncateType)return F`
                    ${pa(1)}
                `}}
    overflow: hidden;
`,Ns=k(Hs)`
    color: ${qi["text-subtler"]};
`,Ws=e=>"right"===e?"bottom-end":"bottom-start",Ys=m({elementWidth:0,styles:{},setFloatingRef:()=>{},getFloatingProps:()=>({})}),Vs=()=>p(Ys),Us=({enabled:n,isOpen:o,onOpen:i,onClose:s,onDismiss:l,renderElement:d,renderDropdown:c,customZIndex:u,clickToToggle:h=!1,offset:f=0,alignment:g="left",fitAvailableHeight:m,rootNode:b,positionRef:v})=>{var y;const x=p(_),w=ra["sm-max"]({theme:x}),$=a(null),{width:C=0}=Gt({targetRef:null!=v?v:$,handleHeight:!1}),S={name:"center",fn:({x:e,rects:t})=>{const r=0===e||e+t.floating.width===window.innerWidth,n=window.innerWidth<w;return{x:r&&n?(window.innerWidth-t.floating.width)/2:e}}},{refs:D,floatingStyles:k,context:F}=L({open:o,onOpenChange:(e,t,r)=>{"escape-key"===r?null==l||l():e&&!o?null==i||i():!e&&o&&(null==s||s(r))},whileElementsMounted:W,placement:Ws(g),middleware:[Y(f),V(),U({limiter:K()}),Z({apply({availableHeight:e,elements:t}){!m||e>=t.floating.scrollHeight?t.floating.style.setProperty("--available-height",""):t.floating.style.setProperty("--available-height",`${Math.max(0,e)}px`)}}),S]}),E=za(),{isMounted:O,styles:T}=J(F,{initial:{opacity:0},open:{opacity:1},duration:300}),I=q(F,{enabled:n,toggle:h,keyboardHandlers:h}),M=P(F,{enabled:n}),{getReferenceProps:B,getFloatingProps:A}=H([I,M]),z={elementWidth:C,styles:Object.assign(Object.assign(Object.assign({},T),k),{zIndex:null!==(y=null!=u?u:E)&&void 0!==y?y:50}),setFloatingRef:D.setFloating,getFloatingProps:A};return t(r,{children:[e("div",Object.assign({ref:e=>{$.current=e,D.setReference(e)}},B(),{children:d()})),O&&e(Q,{root:b,children:e(N,{context:F,modal:!1,initialFocus:-1,returnFocus:!1,children:e(Ys.Provider,{value:z,children:c(z)})})})]})},Ks=k.div`
    --vertical-inset: ${Ji["spacing-24"]};
    --horizontal-inset: ${Ji["spacing-20"]};
    --header-bottom-spacing: ${Ji["spacing-4"]};

    border: ${Qi["width-010"]} ${Qi.solid} ${qi.border};
    border-radius: ${ea.sm};
    overflow: hidden;

    width: ${e=>e.$width}px;
    max-width: 41rem;
    min-width: 21rem;

    ${na.MaxWidth.sm} {
        min-width: 17.5rem;
    }
`,Zs=k.span`
    clip-path: inset(50%);
    height: 1px;
    width: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
`,qs=e=>Qe()?e:e?"true":void 0,Gs=(...e)=>e.filter((e=>!!e)).join(" "),Xs=k.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,Qs=O`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Js=k.div`
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
    animation: ${Qs} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,el=k(Js)`
    animation-delay: -0.45s;
`,tl=k(Js)`
    animation-delay: -0.3s;
`,rl=k(Js)`
    animation-delay: -0.15s;
`,nl=({color:r,className:n,size:o})=>t(Xs,{className:n,$size:o,$color:r,"data-testid":"component-loading-spinner",children:[e(Js,{id:"inner1"}),e(el,{id:"inner2"}),e(tl,{id:"inner3"}),e(rl,{id:"inner4"})]}),ol={Button:{"button-radius":Pi.md,"button-default-colour-bg":hi["bg-primary"],"button-default-colour-bg-hover":hi["bg-primary-hover"],"button-default-colour-text":hi["text-inverse"],"button-secondary-colour-border":hi["border-primary"],"button-secondary-colour-text":hi["text-primary"],"button-light-colour-text":hi["text-primary"],"button-link-colour-text":hi["text-primary"]},Animation:{"loading-dots-spinner-colour":hi["icon-primary"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"2rem","navbar-compressed-height":"4rem","navbar-compressed-logo-height":"1.5rem","navbar-mobile-height":"3.5rem","navbar-mobile-logo-height":"1.5rem","navbar-colour-bg":hi.bg,"navbar-colour-icon":hi.icon,"navbar-link-colour-text":hi.text,"navbar-link-colour-text-hover":hi["text-hover"],"navbar-link-colour-text-selected-hover":hi["text-selected-hover"]},Footer:{"footer-colour-bg":hi["bg-strong"],"footer-colour-text":hi.text,"footer-link-colour-text":hi.text,"footer-link-colour-text-hover":hi["text-hover"],"footer-disclaimer-link-colour-text":hi.text,"footer-disclaimer-link-colour-text-hover":hi["text-subtler"]}},il={Button:{"button-radius":Pi.sm,"button-default-colour-bg":hi["bg-primary"],"button-default-colour-bg-hover":hi["bg-primary-hover"],"button-default-colour-text":hi["text-inverse"],"button-secondary-colour-border":hi["border-primary"],"button-secondary-colour-text":hi["text-primary"],"button-light-colour-text":hi["text-primary"],"button-link-colour-text":hi["text-primary"]},Animation:{"loading-dots-spinner-colour":hi["icon-primary"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"2rem","navbar-compressed-height":"4rem","navbar-compressed-logo-height":"1.5rem","navbar-mobile-height":"3.5rem","navbar-mobile-logo-height":"1.5rem","navbar-colour-bg":hi.bg,"navbar-colour-icon":hi.icon,"navbar-link-colour-text":hi.text,"navbar-link-colour-text-hover":hi["text-hover"],"navbar-link-colour-text-selected-hover":hi["text-selected-hover"]},Footer:{"footer-colour-bg":hi["bg-strong"],"footer-colour-text":hi.text,"footer-link-colour-text":hi.text,"footer-link-colour-text-hover":hi["text-hover"],"footer-disclaimer-link-colour-text":hi.text,"footer-disclaimer-link-colour-text-hover":hi["text-subtler"]}},al={Button:{"button-radius":Pi.sm,"button-default-colour-bg":hi["bg-primary"],"button-default-colour-bg-hover":hi["bg-primary-hover"],"button-default-colour-text":hi["text-inverse"],"button-secondary-colour-border":hi["border-primary"],"button-secondary-colour-text":hi["text-primary"],"button-light-colour-text":hi["text-primary"],"button-link-colour-text":hi["text-primary"]},Animation:{"loading-dots-spinner-colour":qi.Primitive["brand-50"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"2rem","navbar-compressed-height":"4rem","navbar-compressed-logo-height":"1.5rem","navbar-mobile-height":"3.5rem","navbar-mobile-logo-height":"1.5rem","navbar-colour-bg":hi.bg,"navbar-colour-icon":hi.icon,"navbar-link-colour-text":hi.text,"navbar-link-colour-text-hover":hi["text-hover"],"navbar-link-colour-text-selected-hover":hi["text-selected-hover"]},Footer:{"footer-colour-bg":hi["bg-strong"],"footer-colour-text":hi.text,"footer-link-colour-text":hi.text,"footer-link-colour-text-hover":hi["text-hover"],"footer-disclaimer-link-colour-text":hi.text,"footer-disclaimer-link-colour-text-hover":hi["text-subtler"]}},sl={collections:{default:il,pa:{Button:{"button-radius":Pi.full,"button-default-colour-bg":hi["bg-primary"],"button-default-colour-bg-hover":hi["bg-primary-hover"],"button-default-colour-text":hi["text-inverse"],"button-secondary-colour-border":hi["border-primary"],"button-secondary-colour-text":hi["text-primary"],"button-light-colour-text":hi["text-primary"],"button-link-colour-text":hi["text-primary"]},Animation:{"loading-dots-spinner-colour":hi["icon-primary"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"2rem","navbar-compressed-height":"4rem","navbar-compressed-logo-height":"1.5rem","navbar-mobile-height":"3.5rem","navbar-mobile-logo-height":"1.5rem","navbar-colour-bg":hi.bg,"navbar-colour-icon":hi.icon,"navbar-link-colour-text":hi.text,"navbar-link-colour-text-hover":hi["text-hover"],"navbar-link-colour-text-selected-hover":hi["text-selected-hover"]},Footer:{"footer-colour-bg":hi["bg-strong"],"footer-colour-text":hi.text,"footer-link-colour-text":hi.text,"footer-link-colour-text-hover":hi["text-hover"],"footer-disclaimer-link-colour-text":hi.text,"footer-disclaimer-link-colour-text-hover":hi["text-subtler"]}},a11yplayground:ol,lifesg:al,spf:{Button:{"button-radius":Pi.md,"button-default-colour-bg":hi["bg-primary"],"button-default-colour-bg-hover":hi["bg-primary-hover"],"button-default-colour-text":hi["text-inverse"],"button-secondary-colour-border":hi["border-primary"],"button-secondary-colour-text":hi["text-primary"],"button-light-colour-text":hi["text-primary"],"button-link-colour-text":hi["text-primary"]},Animation:{"loading-dots-spinner-colour":hi["icon-primary"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"3rem","navbar-compressed-height":"5rem","navbar-compressed-logo-height":"2rem","navbar-mobile-height":"4rem","navbar-mobile-logo-height":"2rem","navbar-colour-bg":hi.bg,"navbar-colour-icon":hi.icon,"navbar-link-colour-text":hi["text-primary-strongest"],"navbar-link-colour-text-hover":hi["text-subtler"],"navbar-link-colour-text-selected-hover":hi["text-subtler"]},Footer:{"footer-colour-bg":hi["bg-inverse"],"footer-colour-text":hi["text-inverse"],"footer-link-colour-text":hi["text-inverse"],"footer-link-colour-text-hover":hi["text-inverse"],"footer-disclaimer-link-colour-text":hi["text-inverse"],"footer-disclaimer-link-colour-text-hover":hi["text-inverse"]}}},defaultValue:"default"},ll=(e,t)=>r=>{var n,o;const i=r.theme,a=Lo(sl,null==i?void 0:i.componentScheme);return dl((null===(o=null===(n=null==i?void 0:i.componentOverrides)||void 0===n?void 0:n[e])||void 0===o?void 0:o[t])||a[e][t],r)},dl=(e,t)=>{switch(typeof e){case"function":return e(t);case"number":return e+"px";case"string":return e}},cl=ll("Button","button-radius"),ul=ll("Button","button-default-colour-bg"),hl=ll("Button","button-default-colour-bg-hover"),fl=ll("Button","button-default-colour-text"),gl=ll("Button","button-secondary-colour-border"),ml=ll("Button","button-secondary-colour-text"),pl=ll("Button","button-light-colour-text"),bl=ll("Button","button-link-colour-text"),vl=k.button`
    padding: ${Ji["spacing-8"]} ${Ji["spacing-16"]};
    min-width: 4rem;
    border: ${Qi["width-010"]} ${Qi.solid} transparent;
    transition: all ${Xi["duration-250"]} ${Xi["ease-default"]};
    border-radius: ${cl};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return F`
                    background-color: ${qi.bg};
                    border-color: ${e.$buttonIsDanger?qi["border-error-strong"]:gl};

                    color: ${e.$buttonIsDanger?qi["text-error"]:ml};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${qi["bg-hover-neutral"]};
                        }
                    }
                `;case"light":return F`
                    background-color: ${qi.bg};
                    border-color: ${qi.border};

                    color: ${e.$buttonIsDanger?qi["text-error"]:pl};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${qi["bg-hover-neutral"]};
                        }
                    }
                `;case"link":return F`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?qi["text-error"]:bl};
                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${qi["bg-hover-neutral"]};
                        }
                    }
                `;case"disabled":return F`
                    background-color: ${qi["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${qi["text-disabled"]};
                `;default:return F`
                    background-color: ${e.$buttonIsDanger?qi["bg-error-strong"]:ul};

                    ${na.MaxWidth.sm} {
                        width: 100%;
                    }

                    color: ${fl};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${e.$buttonIsDanger?qi["bg-error-strong-hover"]:hl};
                        }
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return F`
                    height: 2.5rem;
                    ${Gi["body-md-semibold"]}

                    ${na.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return F`
                    height: 4rem;
                    ${Gi["heading-md-semibold"]}

                    ${na.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return F`
                    height: 3rem;
                    ${Gi["heading-xs-semibold"]}

                    ${na.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,yl=k(nl)`
    margin-right: ${e=>e.$hasChildren?"0.5rem":"0"};
`,xl=e=>o.Children.toArray(e).some((e=>"string"==typeof e?""!==e.trim():null!=e)),wl=(r,n)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:s="default",danger:l=!1,focusableWhenDisabled:d=!1,onClick:c}=r,u=Fe(r,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),h={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return t(vl,Object.assign({ref:n,"data-testid":u["data-testid"]||"button",disabled:i&&!d,"aria-disabled":i,"aria-busy":a,onClick:i?void 0:c},h,u,{children:[a&&e(yl,{$hasChildren:xl(o)}),e("span",{children:o})]}))};wl.displayName="Button.Default";const $l=(r,n)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:s="default",danger:l=!1,focusableWhenDisabled:d=!1,onClick:c}=r,u=Fe(r,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),h={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return t(vl,Object.assign({ref:n,"data-testid":u["data-testid"]||"button",disabled:i&&!d,"aria-disabled":i,"aria-busy":a,onClick:i?void 0:c},h,u,{children:[a&&e(yl,{$hasChildren:xl(o)}),e("span",{children:o})]}))};$l.displayName="Button.Small";const Cl=(r,n)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:s="default",danger:l=!1,focusableWhenDisabled:d=!1,onClick:c}=r,u=Fe(r,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),h={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"large",$buttonIsDanger:l};return t(vl,Object.assign({ref:n,"data-testid":u["data-testid"]||"button",disabled:i&&!d,"aria-disabled":i,"aria-busy":a,onClick:i?void 0:c},h,u,{children:[a&&e(yl,{$hasChildren:xl(o)}),e("span",{children:o})]}))};Cl.displayName="Button.Large";const Sl={Default:o.forwardRef(wl),Small:o.forwardRef($l),Large:o.forwardRef(Cl)},Dl=F`
    color: ${qi.icon};
    height: 1rem;
    width: 1rem;
`,kl=k(oe)`
    ${Dl}
`,Fl=k(ie)`
    ${Dl}
`,El=k(ne)`
    ${Dl}
    transition: transform 250ms ease-in-out;
    margin-left: 0.5rem;
`,_l=k.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    padding-top: var(--vertical-inset);
    padding-bottom: var(--vertical-inset);
`,Ol=k.div`
    display: flex;
    flex: 1;
    position: relative;
`,Tl=k.div`
    isolation: isolate;
    width: 100%;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,Il=k.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${qi.bg};

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
`,Bl=k.div`
    display: flex;
`,Al=k.button`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;

    ${e=>!1===e.$visible?F`
                display: none;
            `:e.$expanded?F`
                ${El} {
                    transform: rotate(180deg);
                }
            `:void 0};
`,zl=k.span`
    ${Gi["body-md-regular"]}
    color: ${qi.text};
`,jl=k.div`
    display: flex;
`,Ll=k(ka)`
    margin: auto 0;
    padding: 0.75rem;

    &:disabled {
        cursor: not-allowed;
    }
`,Rl=k.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,Pl=k(Sl.Small)`
    flex: 1;
`,Hl=k.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 2.5rem);
    align-content: center;
    justify-content: center;

    gap: 0.5rem 0;
`,Nl=k.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${ea.md};
    margin: 0 0.5rem;
    transition: ${Xi["duration-150"]} ${Xi["ease-default"]};

    // default styles
    ${Gi["body-md-regular"]}
    border-radius: ${ea.md};
    border: ${Qi["width-010"]} ${Qi.solid} transparent;
    background-clip: border-box;
    color: ${qi.text};
    cursor: default;

    // cursor style
    ${e=>e.$interactive?F`
                cursor: pointer;
            `:e.$disabledDisplay?F`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:e,$interactive:t,$disabledDisplay:r})=>"selected-month"===e?F`
                background: ${qi["bg-selected"]};
                border-color: ${qi["border-selected"]};
                color: ${qi["text-selected"]};
                font-weight: ${Gi.Spec["weight-semibold"]};

                ${t&&F`
                    &:hover {
                        background: ${qi["bg-selected-hover"]};
                        border-color: ${qi["border-selected-hover"]};
                        color: ${qi["text-selected-hover"]};
                    }
                `}
            `:"current-month"===e?F`
                color: ${qi["text-primary"]};
                font-weight: ${Gi.Spec["weight-semibold"]};
            `:r?F`
                color: ${qi["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:t})=>{if(t)return"selected-month"===e?F`
                &:hover {
                    background: ${qi["bg-selected-hover"]};
                    border-color: ${qi["border-selected-hover"]};
                    color: ${qi["text-selected-hover"]};
                    font-weight: ${Gi.Spec["weight-semibold"]};
                }
            `:F`
            &:hover {
                background: ${qi["bg-hover"]};
                color: ${qi["text-hover"]};
                font-weight: ${Gi.Spec["weight-semibold"]};
            }
        `}}
`,Wl=({calendarDate:t,currentFocus:r,selectedStartDate:n,selectedEndDate:o,viewCalendarDate:i,isNewSelection:l,minDate:d,maxDate:c,allowDisabledSelection:u,onMonthSelect:f})=>{const g=v((()=>Ye.generateMonths(Ie(t))),[t]),m=a(new Array(g.length).fill(null)),[p,b]=s(g.findIndex((e=>e.isSame(i,"month"))));h((()=>{var e;null!==p&&(null===(e=m.current[p])||void 0===e||e.focus())}),[p,g]);const y=(e,t)=>{t||f(e)},x=e=>{const t="start"===r&&o&&e.isAfter(o,"month")&&l,i="end"===r&&n&&e.isBefore(n,"month")&&l;return!(!t&&!i)},w=e=>{const t=e.format("MMMM"),r=(n=e,!Ye.isWithinRange(n,d?Ie(d):void 0,c?Ie(c):void 0,"month"));var n;const o=i.isSame(e,"month"),a=o?"selected-month":Ie().isSame(e,"month")?"current-month":"default",s=i.isSame(e,"year")?o?0:-1:0===e.month()?0:-1;return{disabledDisplay:r||x(e),interactive:!r||u,month:t,variant:a,tabIndex:s}};return g.length?e(Hl,{onBlur:()=>{b(null)},children:g.map(((t,r)=>{const{disabledDisplay:n,interactive:o,variant:i,month:a,tabIndex:s}=w(t);return e(Nl,{ref:e=>m.current[r]=e,tabIndex:s,role:"button","aria-disabled":!o,"aria-selected":"selected-month"===i,$variant:i,$disabledDisplay:n,$interactive:o,onClick:()=>y(t,!o),onKeyDown:e=>{((e,t,r)=>{const n=e.key;let o;const i=g.indexOf(t);switch(n){case"Enter":case" ":e.preventDefault(),y(t,r);break;case"ArrowLeft":o=i-1;break;case"ArrowRight":o=i+1;break;case"ArrowUp":o=i-2;break;case"ArrowDown":o=i+2}void 0!==o&&o>=0&&o<g.length&&(e.preventDefault(),b(o))})(e,t,!o)},children:a},a)}))}):null},Yl=k.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-content: center;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
`,Vl=k.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0.5rem;
    transition: ${Xi["duration-150"]} ${Xi["ease-default"]};
    padding: 0.5rem;

    // default styles
    ${Gi["body-md-regular"]}
    border-radius: ${ea.md};
    border: ${Qi["width-010"]} ${Qi.solid} transparent;
    background-clip: border-box;
    color: ${qi.text};
    cursor: default;

    // cursor style
    ${({$interactive:e,$disabledDisplay:t})=>e?F`
                cursor: pointer;
            `:t?F`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:e,$interactive:t,$disabledDisplay:r})=>"selected-year"===e?F`
                background: ${qi["bg-selected"]};
                border-color: ${qi["border-selected"]};
                color: ${qi["text-selected"]};
                font-weight: ${Gi.Spec["weight-semibold"]};

                ${t&&F`
                    &:hover {
                        background: ${qi["bg-selected-hover"]};
                        border-color: ${qi["border-selected-hover"]};
                        color: ${qi["text-selected-hover"]};
                    }
                `}
            `:"current-year"===e?F`
                color: ${qi["text-primary"]};
                font-weight: ${Gi.Spec["weight-semibold"]};
            `:"other-decade"===e||r?F`
                color: ${qi["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:t})=>{if(t)return"selected-year"===e?F`
                &:hover {
                    background: ${qi["bg-selected-hover"]};
                    border-color: ${qi["border-selected-hover"]};
                    color: ${qi["text-selected-hover"]};
                    font-weight: ${Gi.Spec["weight-semibold"]};
                }
            `:F`
            &:hover {
                background: ${qi["bg-hover"]};
                color: ${qi["text-hover"]};
                font-weight: ${Gi.Spec["weight-semibold"]};
            }
        `}}
`,Ul=({calendarDate:t,currentFocus:r,selectedStartDate:n,selectedEndDate:o,viewCalendarDate:i,isNewSelection:l,minDate:d,maxDate:c,allowDisabledSelection:u,onYearSelect:f,setCalendarDate:g})=>{const m=v((()=>Ye.generateDecadeOfYears(Ie(t))),[t]),p=a(new Array(m.length).fill(null)),[b,y]=s(t);h((()=>{var e;if(null===b)return;const t=m.findIndex((e=>e.isSame(b,"year")));t>=0&&(null===(e=p.current[t])||void 0===e||e.focus())}),[b,m]);const x=(e,t)=>{t||f(e)},w=e=>{const t="start"===r&&o&&e.isAfter(o,"year")&&l,i="end"===r&&n&&e.isBefore(n,"year")&&l;return!(!t&&!i)},$=e=>{const t=m.indexOf(e),r=[0,11].includes(t),n=e.year(),o=(a=e,!Ye.isWithinRange(a,d?Ie(d):void 0,c?Ie(c):void 0,"year"));var a;const s=r?"other-decade":i.isSame(e,"year")?"selected-year":Ie().isSame(e,"year")?"current-year":"default",l=i.year()>=m[0].year()&&i.year()<=m[m.length-1].year()?"selected-year"===s?0:-1:1===t?0:-1;return{disabledDisplay:o||w(e),interactive:!o||u,year:n,variant:s,tabIndex:l}};return m.length?e(Yl,{onBlur:()=>{y(null)},children:m.map(((t,r)=>{const{disabledDisplay:n,interactive:o,variant:i,year:a,tabIndex:s}=$(t);return e(Vl,{ref:e=>{p.current[r]=e},tabIndex:s,role:"button","aria-label":`${a}`,"aria-disabled":!o,"aria-selected":"selected-year"===i,$variant:i,$disabledDisplay:n,$interactive:!!o,onClick:()=>x(t,!o),onKeyDown:e=>{((e,t,r)=>{let n;switch(e.key){case"Enter":case" ":e.preventDefault(),x(t,r);break;case"ArrowLeft":n=t.subtract(1,"year");break;case"ArrowRight":n=t.add(1,"year");break;case"ArrowUp":n=t.subtract(3,"year");break;case"ArrowDown":n=t.add(3,"year")}void 0!==n&&(e.preventDefault(),g(n),y(n))})(e,t,!o)},children:a},a)}))}):null},Kl=o.forwardRef(((n,o)=>{var{children:i,initialCalendarDate:l,minDate:d,maxDate:c,currentFocus:u,selectedStartDate:f,selectedEndDate:g,selectWithinRange:m,dynamicHeight:p=!1,allowDisabledSelection:b,onCalendarDateChange:v,withButton:x,doneButtonDisabled:w,onDismiss:$,showNavigationHeader:C=!0,getLeftArrowDate:S,getRightArrowDate:D,isLeftArrowDisabled:k,isRightArrowDisabled:F,getMonthHeaderLabel:E,getYearHeaderLabel:_,isFocusable:O=!1}=n,T=Fe(n,["children","initialCalendarDate","minDate","maxDate","currentFocus","selectedStartDate","selectedEndDate","selectWithinRange","dynamicHeight","allowDisabledSelection","onCalendarDateChange","withButton","doneButtonDisabled","onDismiss","showNavigationHeader","getLeftArrowDate","getRightArrowDate","isLeftArrowDisabled","isRightArrowDisabled","getMonthHeaderLabel","getYearHeaderLabel","isFocusable"]);const[I,M]=s(Ge.toDayjs(l)),[B,A]=s(Ge.toDayjs(l)),[z,j]=s("default"),L=a(null),R=a(null),P=a(null),H=a(null);y(o,(()=>({defaultView(){j("default")},resetView(){const e=Ge.toDayjs(l);M(e),A(e),j("default")},setCalendarDate(e){const t=Ge.toDayjs(e);M(t),A(t)}}))),h((()=>{const e=Ge.toDayjs(l);M(e),A(e)}),[l]),h((()=>{G(B)}),[B]);const N=()=>{var e;"month-options"!==z?(j("month-options"),null===(e=P.current)||void 0===e||e.focus()):(j("default"),M(B))},W=e=>{var t;if("Enter"!==e.key&&" "!==e.key||(e.preventDefault(),N(),null===(t=H.current)||void 0===t||t.focus()),"ArrowUp"===e.key||"ArrowDown"===e.key){e.preventDefault();const t="ArrowUp"===e.key?I.subtract(1,"month"):I.add(1,"month");if(!Ye.isWithinRange(t,d?Ie(d):void 0,c?Ie(c):void 0,"month"))return;M(t),"default"===z&&A(t)}},Y=()=>{"default"!==z?(j("default"),M(B)):j("year-options")},V=e=>{if("Enter"!==e.key&&" "!==e.key||(e.preventDefault(),Y()),"ArrowUp"===e.key||"ArrowDown"===e.key){e.preventDefault();let t;if(t="year-options"===z?"ArrowUp"===e.key?I.subtract(10,"year"):I.add(10,"year"):"ArrowUp"===e.key?I.subtract(1,"year"):I.add(1,"year"),!Ye.isWithinRange(t,d?Ie(d):void 0,c?Ie(c):void 0,"year"))return;M(t),"default"===z&&A(t)}},U=()=>{var e;null===(e=P.current)||void 0===e||e.focus();const t=S?S(I):I.subtract(1,"month");switch(z){case"default":A(t),M(t);break;case"month-options":M((e=>e.subtract(1,"year")));break;case"year-options":M((e=>e.subtract(10,"year")))}},K=()=>{var e;null===(e=P.current)||void 0===e||e.focus();const t=D?D(I):I.add(1,"month");switch(z){case"default":A(t),M(t);break;case"month-options":M((e=>e.add(1,"year")));break;case"year-options":M((e=>e.add(10,"year")))}},Z=e=>{M(e),A(e),x||j("default")},q=()=>{const e=Ge.toDayjs(l);M(e),A(e),"default"===z?X("reset"):j("default")},G=e=>{v&&v(e)},X=e=>{$&&$(e)},Q=()=>{if(!d||b)return!1;const e=Ie(d);return"month-options"===z?!Ye.isPreviousYearWithinRange(I,e):"year-options"===z?!Ye.isPreviousDecadeWithinRange(I,e):k?k(I):!Ye.isPreviousMonthWithinRange(I,e)},J=()=>{if(!c||b)return!1;const e=Ie(c);return"month-options"===z?!Ye.isNextYearWithinRange(I,e):"year-options"===z?!Ye.isNextDecadeWithinRange(I,e):F?F(I):!Ye.isNextMonthWithinRange(I,e)},ee=()=>{const n=E?E(I):I.format("MMM"),o=Ie(n,"MMM").format("MMMM"),i=(()=>{if("year-options"===z){const{beginDecade:e,endDecade:t}=Ye.getStartEndDecade(I);return`${e} to ${t}`}return _?_(I):I.format("YYYY")})(),a={"month-options":`${i}, Close month selection`,"year-options":`${i}, Close year selection`,default:`${i}, Select year`};return t(r,{children:[t(Al,{"aria-label":`${o}, Select month`,type:"button",$expanded:"month-options"===z,$visible:"default"===z,id:"month-dropdown",onClick:N,onKeyDown:W,tabIndex:O?0:-1,children:[e(zl,{children:n}),e(El,{})]}),t(Al,{ref:H,"aria-label":a[z],type:"button",$expanded:"default"!==z,id:"year-dropdown",onClick:Y,onKeyDown:V,tabIndex:O?0:-1,children:[e(zl,{children:i}),e(El,{})]})]})},te=()=>{switch(z){case"month-options":return e(Wl,{calendarDate:I,currentFocus:u,minDate:d,maxDate:c,selectedStartDate:f,selectedEndDate:g,viewCalendarDate:B,isNewSelection:!!m,onMonthSelect:Z,allowDisabledSelection:b});case"year-options":return e(Ul,{setCalendarDate:M,calendarDate:I,currentFocus:u,minDate:d,maxDate:c,selectedStartDate:f,selectedEndDate:g,viewCalendarDate:B,isNewSelection:!!m,onYearSelect:Z,allowDisabledSelection:b});default:return null}};return t(_l,Object.assign({ref:P,"data-id":"calendar-container","data-testid":"calendar-container","aria-label":B.format("MMMM, YYYY"),role:"group"},T,{children:[C&&(()=>{const r={"month-options":"year","year-options":"decade",default:"month"}[z];return t(Ml,{"data-id":"calendar-header","data-testid":"calendar-header",children:[e(Bl,{children:ee()}),t(jl,{children:[e(Ll,{"aria-label":`Previous ${r}`,"data-testid":"left-arrow-btn",disabled:Q(),focusHighlight:!1,focusOutline:"browser",onClick:U,tabIndex:O?0:-1,children:e(kl,{})}),e(Ll,{"aria-label":`Next ${r}`,"data-testid":"right-arrow-btn",disabled:J(),focusHighlight:!1,focusOutline:"browser",onClick:K,tabIndex:O?0:-1,children:e(Fl,{})})]})]})})(),e(Ol,{children:(()=>{const n="function"==typeof i?i({calendarDate:B,currentView:z}):i;if(p)return t(r,{children:["default"===z&&n,te()]});{const o="default"===z;return t(r,{children:[e(Tl,{inert:qs(!o),children:n}),e(Il,{$visible:!o,children:te()})]})}})()}),(()=>{if(!x)return;const r=!!("default"===z)&&w;return t(Rl,{children:[e(Pl,{ref:R,"data-testid":"cancel-button",styleType:"light",type:"button",onClick:q,children:"Cancel"}),e(Pl,{"data-testid":"done-button",ref:L,type:"button",onClick:()=>{r||(M(B),"default"===z?X("confirmed"):j("default"))},disabled:r,children:"Done"})]})})()]}))})),Zl=k.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 0.25rem;
`,ql=k.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    pointer-events: none;
    user-select: none;

    ${Gi["body-sm-semibold"]};
    color: ${qi.text};
`,Gl=k.div`
    grid-column: 1 / -1;
    display: flex;
`,Xl=e=>{let t=qi.bg,r="transparent";switch(e.$type){case"hover-subtle":t=qi["bg-hover"],r=qi["bg-hover"];break;case"hover":t=qi["bg-hover-strong"],r=qi["bg-hover-strong"];break;case"hover-outline":t=qi["bg-hover-subtle"],r=qi["border-hover"];break;case"selected-outline":t=qi["bg-selected"],r=qi["border-selected"];break;case"selected-outline-subtle":t=qi["bg-selected"],r=qi["border-selected-subtle"];break;case"selected-hover":t=qi["bg-selected-hover"];break;case"selected-hover-outline":t=qi["bg-selected-hover"],r=qi["border-selected-hover"]}return{color:t,borderColor:r}},Ql=k.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 2.5rem;
`,Jl=k.div`
    position: absolute;
    height: 2.5rem;
    width: 50%;
    transition: ${Xi["duration-150"]} ${Xi["ease-default"]};
    border: ${Qi["width-010"]} ${Qi.solid} transparent;
    border-left: none;
    border-right: none;

    ${e=>{if(!e.$type)return;const{color:t,borderColor:r}=Xl(e);return F`
            background-color: ${t};
            background-clip: border-box;
            border-top-color: ${r};
            border-bottom-color: ${r};
        `}}
`,ed=k(Jl)`
    left: 0;
`,td=k(Jl)`
    right: 0;
`,rd=k.div`
    position: absolute;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    transition: ${Xi["duration-150"]} ${Xi["ease-default"]};

    border: ${Qi["width-010"]} ${Qi.solid} transparent;
    border-radius: ${ea.md};

    ${e=>{if(e.$type){const{color:t,borderColor:r}=Xl(e);return F`
                background-color: ${t};
                background-clip: content-box;
                border-color: ${r};
            `}}}
`,nd=k(rd)`
    right: calc(50% - 1.25rem);
    clip-path: inset(-3px 1.25rem -3px -3px);
`,od=k(rd)`
    left: calc(50% - 1.25rem);
    clip-path: inset(-3px -3px -3px 1.25rem);
`,id=k.span`
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 2;
    cursor: ${e=>e.$interactive?"pointer":null===e.$interactive?"default":"not-allowed"};
`,ad=k.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    ${Gi["body-md-regular"]}
    transition: ${Xi["duration-150"]} ${Xi["ease-default"]};

    pointer-events: ${e=>e.$interactive||null===e.$interactive?"auto":"none"};

    ${e=>{const{$disabled:t,$type:r}=e;if(t)return"hidden"===r?F`
                    visibility: hidden;
                `:F`
                color: ${qi["text-disabled-subtlest"]};
            `;switch(r){case"selected":return F`
                    font-weight: ${Gi.Spec["weight-semibold"]};
                    color: ${qi["text-selected"]};
                `;case"selected-hover":return F`
                    font-weight: ${Gi.Spec["weight-semibold"]};
                    color: ${qi["text-selected-hover"]};
                `;case"current":return F`
                    font-weight: ${Gi.Spec["weight-semibold"]};
                    color: ${qi["text-primary"]};
                `;case"hover":return F`
                    font-weight: ${Gi.Spec["weight-semibold"]};
                    color: ${qi["text-hover"]};
                `;case"unavailable":return F`
                    color: ${qi["text-disabled-subtlest"]};
                `;case"hidden":return F`
                    visibility: hidden;
                `;default:return F`
                    color: ${qi.text};
                `}}}

    &:focus {
        outline: none;
    }
`,sd=k.div`
    position: absolute;
    width: 4px;
    height: 4px;
    background-color: currentColor;
    border-radius: 100%;
    bottom: 4px;
`,ld=({bgLeft:r,bgRight:n,circleLeft:o,circleRight:i,labelType:s,disabled:l,interactive:d,currentDateIndicator:c,date:u,onSelect:f,onHover:g,onFocus:m,onHoverEnd:p,onKeyDown:b,focusDate:v,label:y,ariaHidden:x,tabIndex:w=-1,role:$="button"})=>{const C=Ie().isSame(u,"day"),S=!!v&&v.isSame(u,"day"),D=`${u.format("D MMMM YYYY dddd")}, ${l?"Unavailable":"Available"}`,k=a(null);h((()=>{var e;S&&k.current&&(null===(e=k.current)||void 0===e||e.focus())}),[S]);return t(Ql,{"aria-hidden":x,children:[e(ed,{$type:r}),e(nd,{$type:o}),e(td,{$type:n}),e(od,{$type:i}),e(id,{$interactive:d,children:t(ad,{ref:k,tabIndex:w,role:$,"aria-label":y||D,"aria-disabled":!d,"aria-selected":"selected"===s||"selected-hover"===s,$type:s,$disabled:l,$interactive:d,onClick:()=>{null==f||f(u)},onKeyDown:e=>{null==b||b(e)},onMouseEnter:()=>{null==g||g(u)},onMouseLeave:()=>{null==p||p(u)},onFocus:()=>{null==m||m(u)},children:[u.date(),c&&C&&e(sd,{$disabled:l})]})})]})},dd=({date:t,calendarDate:r,startDate:n,endDate:o,currentFocus:i,hoverDate:a,focusDate:s,minDate:l,maxDate:d,disabledDates:c,allowDisabledSelection:u,isNewSelection:h,showActiveMonthDaysOnly:f,onSelect:g,onHover:m,onFocus:p,setFocusCell:b,tabIndex:v})=>{const y=Ye.isDisabledDay(t,c,l,d),x=!y||u,w=()=>{g(t,!x)},$=()=>{const e=Ie(a),t=e.isBefore(o,"day"),r=e.isAfter(n,"day");let s,l,d,c;return"start"===i&&o&&t&&(n&&r?(d=a,c=o):(s=a,l=n||o)),"end"===i&&n&&r&&(o&&t?(d=n,c=a):(s=o||n,l=a)),{hoverStart:s,hoverEnd:l,overlapStart:d,overlapEnd:c}},C={date:t,calendarDate:r,disabled:y,interactive:x,currentDateIndicator:!0,onSelect:w,onHover:()=>{m(t.format("YYYY-MM-DD"),!x)},onFocus:()=>{p(t.format("YYYY-MM-DD"))},onKeyDown:e=>{const r=e.key;if("Enter"===r||" "===r)return e.preventDefault(),void(x&&w());(e=>{let r;const n={ArrowLeft:()=>t.subtract(1,"day"),ArrowRight:()=>t.add(1,"day"),ArrowUp:()=>t.subtract(7,"day"),ArrowDown:()=>t.add(7,"day"),Home:()=>t.startOf("week"),End:()=>t.endOf("week"),PageUp:()=>e.shiftKey?t.subtract(1,"year"):t.subtract(1,"month"),PageDown:()=>e.shiftKey?t.add(1,"year"):t.add(1,"month")}[e.key];n&&(e.preventDefault(),r=n(),b(r.format("YYYY-MM-DD")))})(e)},role:"gridcell",focusDate:Ie(s),tabIndex:v};return e(ld,Object.assign({},C,(()=>{const e={};if(r.month()!==t.month())e.labelType=f?"hidden":"unavailable";else if(Ie().isSame(t,"day")&&!y)e.labelType="current";else if(h){const r="end"===i&&n&&t.isBefore(n),a="start"===i&&o&&t.isAfter(o);(r||a)&&(e.labelType="unavailable")}return e})(),(()=>{const e={},i=t.isSame(n,"day"),a=t.isSame(o,"day");return f&&r.month()!==t.month()?(e.labelType="hidden",e):((n&&i||o&&a)&&(e.labelType="selected",e.circleLeft="selected-outline",e.circleRight="selected-outline"),n&&o&&t.isBetween(n,o,"day","[]")&&(e.labelType="selected",i||(e.bgLeft="selected-outline-subtle"),a||(e.bgRight="selected-outline-subtle")),e)})(),(()=>{if(!a)return{};const e={},r=t.isSame(a,"day"),{hoverStart:i,hoverEnd:s,overlapStart:l,overlapEnd:d}=$();if(r){const r=t.isSame(n,"day"),i=t.isSame(o,"day");r||i?(e.labelType="selected-hover",e.circleLeft="selected-hover-outline",e.circleRight="selected-hover-outline"):(e.labelType="hover",e.circleLeft="hover",e.circleRight="hover")}if(i&&s){if(t.isBetween(i,s,"day","[]")){const r=t.isSame(i,"day"),n=t.isSame(s,"day");r||(e.labelType="hover",e.bgLeft="hover-outline"),n||(e.labelType="hover",e.bgRight="hover-outline")}return e}return l&&d?(t.isBetween(l,d,"day","[]")&&r&&(e.labelType="selected-hover",e.circleLeft="selected-hover",e.circleRight="selected-hover"),e):e})()))};Ie.extend(ze);const cd=({calendarDate:r,currentFocus:n,disabledDates:o,selectedStartDate:i,selectedEndDate:l,onSelect:d,onHover:c,isNewSelection:u,minDate:f,maxDate:m,allowDisabledSelection:p,showActiveMonthDaysOnly:b,setCalendarDate:y})=>{const x=a(null);h((()=>{if(x.current){const e=x.current;x.current=null,k(e)}}),[r]);const w=g((()=>i&&Ie(i).isSame(r,"month")?Ie(i):l&&Ie(l).isSame(r,"month")?Ie(l):Ie().isSame(r,"month")?Ie():f&&r.isSame(Ie(f),"month")?Ie(f):Ie(r).startOf("month")),[i,r,l,f]),$=e=>{const t=Ie(e);if(Ye.isWithinRange(t,f?Ie(f):void 0,m?Ie(m):void 0)){if(!t.isSame(r,"month"))return null==y||y(e),void(x.current=e);k(e)}},C=v((()=>Ye.generateDays(r)),[r]),S=v((()=>w()),[w]),[D,k]=s(""),[F,E]=s(""),_=(e,t)=>{t&&!p||d(e)},O=(e,t)=>{t&&!p||(E(e),c(e))},T=e=>{E(e),c(e)},I=()=>{E(""),c("")};return t(Zl,{role:"grid","aria-label":"Date grid","data-testid":"calendar-content",onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||(k(""),E(""),c(""))},children:[C[0].map(((t,r)=>e(ql,{"aria-hidden":!0,children:Ie(t).format("ddd")},`week-day-${r}`))),C.map(((t,a)=>e(Gl,{role:"row","aria-label":`Week ${a+1}`,onMouseLeave:I,children:t.map(((t,a)=>e(dd,{date:t,calendarDate:r,startDate:i,endDate:l,hoverDate:F,focusDate:D,currentFocus:n,minDate:f,maxDate:m,disabledDates:o,allowDisabledSelection:p,isNewSelection:u,showActiveMonthDaysOnly:b,onSelect:_,onHover:O,onFocus:T,setFocusCell:$,tabIndex:t.isSame(S,"day")?0:-1},`day-${a}`)))},a)))]})},ud=({date:t,calendarDate:r,selectedDate:n,hoverDate:o,focusDate:i,minDate:a,maxDate:s,disabledDates:l,allowDisabledSelection:d,numberOfDays:c=1,onSelect:u,onHover:h,onFocus:f,setFocusCell:g,tabIndex:m})=>{const p=Ye.isDisabledDay(t,l,a,s),b=!p||d,{start:v,end:y}=n?Ye.getFixedRangeStartEnd(Ge.toDayjs(n),c):{start:void 0,end:void 0},{start:x,end:w}=o?Ye.getFixedRangeStartEnd(Ge.toDayjs(o),c):{start:void 0,end:void 0},$=!!n&&t.isBetween(v,y,"day","[]"),C=!!o&&t.isBetween(x,w,"day","[]"),S=$&&t.isSame(v,"day")||C&&t.isSame(x,"day"),D=$&&t.isSame(y,"day")||C&&t.isSame(w,"day"),k=`From ${Ie(x).format("D MMMM")} to ${Ie(w).format("D MMMM")}, ${p?"Unavailable":"Available"}`,F=()=>{u(t,!b)},E=(e,t,r,n)=>{r?e.circleLeft=t:e.bgLeft=t,n?e.circleRight=t:e.bgRight=t},_={date:t,calendarDate:r,disabled:p,interactive:b,currentDateIndicator:!0,onSelect:F,onHover:()=>{h(t.format("YYYY-MM-DD"),!b)},onFocus:()=>{f(t.format("YYYY-MM-DD"))},onKeyDown:e=>{const r=e.key;if("Enter"===r||" "===r)return e.preventDefault(),void(b&&F());(e=>{let r;const n={ArrowLeft:()=>t.subtract(1,"day"),ArrowRight:()=>t.add(1,"day"),ArrowUp:()=>t.subtract(7,"day"),ArrowDown:()=>t.add(7,"day"),Home:()=>t.startOf("week"),End:()=>t.endOf("week"),PageUp:()=>e.shiftKey?t.subtract(1,"year"):t.subtract(1,"month"),PageDown:()=>e.shiftKey?t.add(1,"year"):t.add(1,"month")}[e.key];n&&(e.preventDefault(),r=n(),g(r.format("YYYY-MM-DD")))})(e)},focusDate:Ie(i),role:"gridcell",tabIndex:m,label:k};return e(ld,Object.assign({},_,(()=>{const e={};return $||C?e.labelType="selected":r.month()!==t.month()?e.labelType="unavailable":Ie().isSame(t,"day")&&!p&&(e.labelType="current"),e})(),(()=>{const e={},r=t.format("YYYY-MM-DD");return C&&E(e,"hover",r===x,r===w),$&&E(e,"selected-outline",r===v,r===y),$&&C&&(E(e,"selected-hover-outline",S,D),r===x&&r!==v&&(e.circleLeft="selected-hover")),e})()))},hd=({calendarDate:r,disabledDates:n,selectedStartDate:o,onSelect:i,onHover:l,minDate:d,maxDate:c,allowDisabledSelection:u,numberOfDays:f,setCalendarDate:m})=>{const p=a(null);h((()=>{if(p.current){const e=p.current;p.current=null,C(e)}}),[r]);const b=g((()=>o&&Ie(o).isSame(r,"month")?Ie(o):Ie().isSame(r,"month")?Ie():d&&r.isSame(Ie(d),"month")?Ie(d):Ie(r).startOf("month")),[o,r,d]),y=e=>{const t=Ie(e);if(Ye.isWithinRange(t,d?Ie(d):void 0,c?Ie(c):void 0)){if(!t.isSame(r,"month"))return null==m||m(e),void(p.current=e);C(e)}},x=v((()=>Ye.generateDays(r)),[r]),w=v((()=>b()),[b]),[$,C]=s(""),[S,D]=s(""),k=(e,t)=>{t&&!u||(i(e),e&&!Ie(e).isSame(e,"month")&&D(""))},F=(e,t)=>{t&&!u||(D(e),l(e))},E=e=>{D(e),l(e)},_=()=>{D(""),l("")};return t(Zl,{role:"grid",onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||(C(""),D(""),l(""))},"data-testid":"calendar-content","aria-label":"Date grid",children:[x[0].map(((t,r)=>e(ql,{"aria-hidden":!0,children:Ie(t).format("ddd")},`week-day-${r}`))),x.map(((t,i)=>e(Gl,{role:"row",onMouseLeave:_,children:t.map(((t,i)=>e(ud,{date:t,calendarDate:r,selectedDate:o,hoverDate:S,focusDate:$,minDate:d,maxDate:c,disabledDates:n,allowDisabledSelection:u,onSelect:k,onHover:F,numberOfDays:f,onFocus:E,setFocusCell:y,tabIndex:Ie(t).isSame(w,"day")?0:-1},`day-${i}`)))},i)))]})},fd=k.div`
    width: 100%;
    background: ${qi.bg};
`,gd=({date:t,calendarDate:r,selectedDate:n,hoverDate:o,focusDate:i,minDate:a,maxDate:s,disabledDates:l,allowDisabledSelection:d,showActiveMonthDaysOnly:c,onSelect:u,onHover:h,onFocus:f,setFocusCell:g,tabIndex:m})=>{const p=Ye.isDisabledDay(t,l,a,s),b=!p||d,v=()=>{u(t,!b)},y={date:t,calendarDate:r,disabled:p,interactive:b,currentDateIndicator:!0,onSelect:v,onHover:()=>{h(t.format("YYYY-MM-DD"),!b)},onFocus:()=>{f(t.format("YYYY-MM-DD"))},onKeyDown:e=>{const r=e.key;if("Enter"===r||" "===r)return e.preventDefault(),void(b&&v());(e=>{let r;const n={ArrowLeft:()=>t.subtract(1,"day"),ArrowRight:()=>t.add(1,"day"),ArrowUp:()=>t.subtract(7,"day"),ArrowDown:()=>t.add(7,"day"),Home:()=>t.startOf("week"),End:()=>t.endOf("week"),PageUp:()=>e.shiftKey?t.subtract(1,"year"):t.subtract(1,"month"),PageDown:()=>e.shiftKey?t.add(1,"year"):t.add(1,"month")}[e.key];n&&(e.preventDefault(),r=n(),g(r.format("YYYY-MM-DD")))})(e)},role:"gridcell",focusDate:Ie(i),tabIndex:m};return e(ld,Object.assign({},y,(()=>{const e={};r.month()!==t.month()?e.labelType=c?"hidden":"unavailable":Ie().isSame(t,"day")&&!p&&(e.labelType="current");const i=t.isSame(n,"day"),a=t.isSame(o,"day");return i&&a?(e.labelType="selected-hover",e.circleLeft="selected-hover-outline",e.circleRight="selected-hover-outline"):i?(e.labelType="selected",e.circleLeft="selected-outline",e.circleRight="selected-outline"):a&&(e.labelType="hover",e.circleLeft="hover-subtle",e.circleRight="hover-subtle"),e})()))};Ie.extend(ze);const md=({calendarDate:r,disabledDates:n,selectedDate:o,onSelect:i,onHover:l,minDate:d,maxDate:c,allowDisabledSelection:u,showActiveMonthDaysOnly:f,setCalendarDate:m})=>{const p=a(null);h((()=>{if(p.current){const e=p.current;p.current=null,C(e)}}),[r]);const b=g((()=>o&&Ie(o).isSame(r,"month")?Ie(o):Ie().isSame(r,"month")?Ie():d&&r.isSame(Ie(d),"month")?Ie(d):Ie(r).startOf("month")),[o,r,d]),y=e=>{const t=Ie(e);if(Ye.isWithinRange(t,d?Ie(d):void 0,c?Ie(c):void 0)){if(!t.isSame(r,"month"))return null==m||m(e),void(p.current=e);C(e)}},x=v((()=>Ye.generateDays(r)),[r]),w=v((()=>b()),[b]),[$,C]=s(""),[S,D]=s(""),k=(e,t)=>{t&&!u||i(e)},F=(e,t)=>{t&&!u||(D(e),l(e))},E=e=>{D(e),l(e)},_=()=>{D(""),l("")};return t(Zl,{role:"grid",onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||(C(""),D(""),l(""))},"data-testid":"calendar-content","aria-label":"Date grid",children:[x[0].map(((t,r)=>e(ql,{"aria-hidden":!0,children:Ie(t).format("ddd")},`week-day-${r}`))),x.map(((t,i)=>e(Gl,{role:"row","aria-label":`Week ${i+1}`,onMouseLeave:_,children:t.map(((t,i)=>e(gd,{date:t,calendarDate:r,selectedDate:o,hoverDate:S,focusDate:$,minDate:d,maxDate:c,disabledDates:n,allowDisabledSelection:u,showActiveMonthDaysOnly:f,onSelect:k,onHover:F,onFocus:E,setFocusCell:y,tabIndex:Ie(t).isSame(w,"day")?0:-1},`day-${i}`)))},i)))]})},pd=({date:t,calendarDate:r,selectedDate:n,hoverDate:o,focusDate:i,minDate:a,maxDate:s,disabledDates:l,allowDisabledSelection:d,onSelect:c,onHover:u,onFocus:h,setFocusCell:f,tabIndex:g})=>{const m=Ye.isDisabledDay(t,l,a,s),p=!m||d,{start:b,end:v}=Ye.getWeekStartEnd(Ge.toDayjs(n)),{start:y,end:x}=Ye.getWeekStartEnd(Ge.toDayjs(o)),{start:w,end:$}=Ye.getWeekStartEnd(t),C=t.isSame(w,"day"),S=n&&t.isBetween(b,v,"day","[]"),D=o&&t.isBetween(y,x,"day","[]"),k=S&&t.isSame(b)||D&&t.isSame(y),F=S&&t.isSame(v)||D&&t.isSame(x),E=`From ${Ie(w).format("D MMMM")} to ${Ie($).format("D MMMM")}, ${m?"Unavailable":"Available"}`,_=()=>{c(t,!p)},O={date:t,calendarDate:r,disabled:m,interactive:p,currentDateIndicator:!0,onSelect:_,onHover:()=>{u(t.format("YYYY-MM-DD"),!p)},onFocus:()=>{h(t.format("YYYY-MM-DD"))},onKeyDown:e=>{const r=e.key;if("Enter"===r||" "===r)return e.preventDefault(),void(p&&_());(e=>{let r;const n={ArrowUp:()=>t.subtract(7,"day"),ArrowDown:()=>t.add(7,"day"),Home:()=>t.startOf("week"),End:()=>t.endOf("week"),PageUp:()=>e.shiftKey?t.subtract(1,"year"):t.subtract(1,"month"),PageDown:()=>e.shiftKey?t.add(1,"year"):t.add(1,"month")}[e.key];n&&(e.preventDefault(),r=n(),f(r.format("YYYY-MM-DD")))})(e)},focusDate:Ie(i),tabIndex:g,label:E,ariaHidden:!C||void 0,role:C?"button":"none"};return e(ld,Object.assign({},O,(()=>{const e={};return r.month()!==t.month()?e.labelType="unavailable":Ie().isSame(t,"day")&&!m&&(e.labelType="current"),e})(),(()=>{const e={};let t,r;return S&&D?(t="selected-hover-outline",r="selected-hover"):S?(t="selected-outline",r="selected"):D&&(t="hover",r="hover"),t&&(e.labelType=r,k?e.circleLeft=t:e.bgLeft=t,F?e.circleRight=t:e.bgRight=t),e})()))},bd=({calendarDate:r,disabledDates:n,selectedStartDate:o,onSelect:i,onHover:l,minDate:d,maxDate:c,allowDisabledSelection:u,setCalendarDate:f})=>{const m=a(null);h((()=>{if(m.current){const e=m.current;m.current=null,$(e)}}),[r]);const p=g((()=>o&&Ie(o).isSame(r,"month")?Ie(o):Ie().isSame(r,"month")?Ie().startOf("week"):d&&r.isSame(Ie(d),"month")?Ie(d):Ie(r).startOf("month")),[o,r,d]),b=e=>{const t=Ie(e);if(Ye.isWithinRange(t,d?Ie(d):void 0,c?Ie(c):void 0)){if(!t.isSame(r,"month"))return null==f||f(e),void(m.current=e);$(e)}},y=v((()=>Ye.generateDays(r)),[r]),x=v((()=>p()),[p]),[w,$]=s(""),[C,S]=s(""),D=(e,t)=>{if(t&&!u)return;const r=e.startOf("week");i(r),e&&!Ie(e).isSame(r,"month")&&S("")},k=(e,t)=>{t&&!u||(S(e),l(e))},F=e=>{S(e),l(e)},E=()=>{S(""),l("")};return t(Zl,{"data-testid":"calendar-content",onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||($(""),S(""),l(""))},"aria-label":"Week selection",children:[y[0].map(((t,r)=>e(ql,{"aria-hidden":!0,children:Ie(t).format("ddd")},`week-day-${r}`))),y.map(((t,i)=>e(Gl,{onMouseLeave:E,role:"group",children:t.map(((t,i)=>e(pd,{date:t,calendarDate:r,selectedDate:o,hoverDate:C,focusDate:w,minDate:d,maxDate:c,disabledDates:n,allowDisabledSelection:u,onSelect:D,onHover:k,onFocus:F,setFocusCell:b,tabIndex:Ie(t).isSame(x,"day")?0:-1},`day-${i}`)))},i)))]})},vd=o.forwardRef((({disabledDates:t,onYearMonthDisplayChange:r,onSelect:n,onHover:o,onDismiss:i,value:s,endValue:l,currentFocus:d,withButton:c,variant:u,minDate:h,maxDate:f,allowDisabledSelection:g,selectWithinRange:m=!0,initialCalendarDate:p,numberOfDays:b,showActiveMonthDaysOnly:v=!1,isFocusable:x=!1},w)=>{const $=a(null),C=a(void 0),S=a(null);y(w,(()=>({reset(){var e;null===(e=$.current)||void 0===e||e.resetView()},setCalendarDate(e){var t;null===(t=$.current)||void 0===t||t.setCalendarDate(e)},contains(e){var t;return(null===(t=S.current)||void 0===t?void 0:t.contains(e))||!1}})));const D=e=>{var t;const r=e.format("YYYY-MM-DD");null===(t=$.current)||void 0===t||t.setCalendarDate(r),F(r)},k=e=>{E(e)},F=e=>{n&&n(e)},E=e=>{o&&o(e)},_=e=>{if(r){const t={month:e.month()+1,year:e.year()};r(t)}};return e(fd,{ref:S,children:e(Kl,{ref:$,withButton:c,doneButtonDisabled:(()=>{if(!c)return;let e=!0;switch(u){case"single":e=!1;break;case"range":case"fixed-range":e=!!s!=!!l;break;case"week":e=!s&&!l}return e})(),onDismiss:i,minDate:h,maxDate:f,selectWithinRange:m,currentFocus:d,selectedStartDate:s,selectedEndDate:l,allowDisabledSelection:g,onCalendarDateChange:e=>{var t;C.current&&C.current.isSame(e,"month")||(null===(t=$.current)||void 0===t||t.setCalendarDate(e.format("YYYY-MM-DD")),_(e)),C.current=e},initialCalendarDate:p,isFocusable:x,children:({calendarDate:r})=>(r=>{var n;const o=null===(n=$.current)||void 0===n?void 0:n.setCalendarDate;switch(u){case"week":return e(bd,{calendarDate:r,disabledDates:t,selectedStartDate:s,minDate:h,maxDate:f,allowDisabledSelection:g,onSelect:D,onHover:k,setCalendarDate:o});case"fixed-range":return e(hd,{calendarDate:r,disabledDates:t,selectedStartDate:s,minDate:h,maxDate:f,allowDisabledSelection:g,onSelect:D,onHover:k,numberOfDays:b,setCalendarDate:o});case"single":return e(md,{calendarDate:r,disabledDates:t,selectedDate:s,minDate:h,maxDate:f,allowDisabledSelection:g,showActiveMonthDaysOnly:v,onSelect:D,onHover:k,setCalendarDate:o});default:return e(cd,{calendarDate:r,currentFocus:d,disabledDates:t,selectedStartDate:s,selectedEndDate:l,minDate:h,maxDate:f,isNewSelection:m,allowDisabledSelection:g,showActiveMonthDaysOnly:v,onSelect:D,onHover:k,setCalendarDate:o})}})(r)})})})),yd=o.forwardRef(((t,r)=>{const{elementWidth:n,setFloatingRef:o,getFloatingProps:i,styles:a}=Vs();return e(Ks,Object.assign({$width:n,"data-testid":"calendar-dropdown",ref:o,style:a},i(),{children:e(vd,Object.assign({ref:r},t))}))})),xd=F`
    outline-offset: -1px;
    outline: ${Qi["width-020"]} ${Qi.solid} ${qi["border-focus"]};
`,wd=F`
    outline-color: ${qi["border-focus"]};
`,$d=F`
    outline-color: ${qi["border-disabled"]};
`,Cd=F`
    outline-color: ${qi["border-error-focus"]};
`,Sd=F`
    outline: none;
`,Dd=k.div`
    border: ${Qi["width-010"]} ${Qi.solid} ${qi.border};
    border-radius: ${ea.sm};
    background: ${qi.bg};

    &:focus-within {
        ${xd}
    }
    ${e=>e.$focused&&!e.$noBorder&&xd}

    ${e=>e.$readOnly?F`
                border-color: transparent;
                padding: 0;
                background: transparent !important;

                &:focus-within {
                    ${wd}
                }
                ${e.$focused&&wd}
            `:e.$disabled?F`
                background: ${qi["bg-disabled"]};
                cursor: not-allowed;

                &:focus-within {
                    ${$d}
                }
                ${e.$focused&&$d}
            `:e.$error?F`
                border-color: ${qi["border-error"]};

                &:focus-within {
                    ${Cd}
                }
                ${e.$focused&&Cd}
            `:void 0}
    ${e=>{if(e.$noBorder)return F`
                border-color: transparent;
                background: transparent;
                &:focus-within {
                    ${Sd}
                }
            `}}
`,kd=k(Dd)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 ${Ji["spacing-16"]} 0
        ${e=>e.$readOnly?"0":Ji["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,Fd=k.input`
    ${e=>"small"===e.$variant?Gi["body-md-regular"]:Gi["body-baseline-regular"]}
    color: ${qi.text};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    &:disabled {
        color: ${qi["text-subtler"]};

        &:hover {
            cursor: not-allowed;
        }
    }

    &::placeholder,
    &::-webkit-input-placeholder {
        color: ${qi["text-subtler"]};
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
`,Ed=k.button`
    background: transparent;
    border: none;
    outline: none;

    &:focus,
    &:active {
        outline: none;
    }

    &:focus-visible {
        outline: ${Qi["width-010"]} ${Qi.solid}
            ${qi["border-focus"]};
        border-radius: ${ea.sm};
    }
`,_d=k.div`
    display: flex;
    align-items: center;
    position: relative;

    flex: 1;
`,Od=k.div`
    display: flex;
    align-items: center;

    ${e=>{if(e.$hover)return F`
                ${Td}, ${Ad} {
                    color: ${qi["text-subtler"]};
                }
            `}}
`,Td=k(Fd)`
    background: transparent;
    text-align: center;
`,Id=k(Td)`
    width: 2rem;
    margin-right: ${Ji["spacing-4"]};
`,Md=k(Td)`
    width: 2.5rem;
`,Bd=k(Td)`
    width: 3rem;
    margin-left: ${Ji["spacing-4"]};
`,Ad=k.span`
    ${Gi["body-baseline-regular"]}
    ${e=>{if(e.$inactive)return F`
                color: ${qi.text};
            `}}
`,zd=k.div`
    ${Gi["body-baseline-regular"]}
    background-color: ${qi.bg};
    color: ${qi["text-subtler"]};
    position: absolute;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    ${e=>e.$disabled?F`
                background-color: ${qi["bg-disabled"]};
                cursor: not-allowed;
            `:e.$hide?F`
                display: none;
            `:void 0}
`;Ie.extend(Be);const jd=o.forwardRef((({disabled:r,readOnly:n,names:o,value:i,focused:l,hoverValue:d,placeholder:c,label:u,onChange:f,onFocus:g,onBlur:m,hideInputKeyboard:p,inputLabels:b=["Date","Month","Year"]},v)=>{const x=p?"none":"numeric",[w,$,C]=rr(""),[S,D,k]=rr(""),[F,E,_]=rr(""),[O,T]=s("none"),[I,M]=s(!1),B=a(null),A=a(null),z=a(null),j=a(null),[L,R,P]=U(d);h((()=>{var e;const[t="",r="",n=""]=U(i);$(t),D(r),E(n),t||r||n||!B.current||!B.current.contains(document.activeElement)||null===(e=A.current)||void 0===e||e.focus()}),[i]),h((()=>{var e;l||T("none"),l&&(M(!0),B.current&&!B.current.contains(document.activeElement)&&(null===(e=A.current)||void 0===e||e.focus()))}),[l]),y(v,(()=>({ref:B,resetPlaceholder(){M(!1)},resetInput(){const[e="",t="",r=""]=U(i);$(e),D(t),E(r)},focusYearRef(){var e;null===(e=j.current)||void 0===e||e.focus()}})),[$,D,E,i]);const H=e=>{var t;e.preventDefault(),null===(t=A.current)||void 0===t||t.focus()},N=e=>{e.target.select();const t=e.target.name;T(t)},W=e=>{const[t,r,n]=o,i={[t]:C.current,[r]:k.current,[n]:_.current},a=e.target.name,s=i[a],l=a!==n?tt.padValue(s,!0):s;switch(a){case t:i[t]=l,$(l);break;case r:i[r]=l,D(l)}const d=`${i[n]}-${i[r]}-${i[t]}`,c=Ie(d,"YYYY-MM-DD",!0).isValid(),u=!i[t]&&!i[r]&&!i[n];c&&s!==l&&f(d),B.current&&!B.current.contains(e.relatedTarget)&&(T("none"),null==m||m(u||c))},Y=e=>{var t,r;if(d)return;const n=e.target.name,i=e.target.value.replace(/[^0-9]/g,""),a={day:w,month:S,year:F};switch(n){case o[0]:a.day=i,$(i),2===i.length&&(null===(t=z.current)||void 0===t||t.focus());break;case o[1]:a.month=i,D(i),2===i.length&&(null===(r=j.current)||void 0===r||r.focus());break;case o[2]:a.year=i,E(i)}if(!a.day&&!a.month&&!a.year)return void f("");const s=`${a.year}-${a.month}-${a.day}`;Ie(s,"YYYY-MM-DD",!0).isValid()&&f(s)},V=e=>{var t,r;"Backspace"!==e.code&&"Backspace"!==e.key||(O===o[1]&&0===S.length&&(null===(t=A.current)||void 0===t||t.focus()),O===o[2]&&0===F.length&&(null===(r=z.current)||void 0===r||r.focus()))};function U(e){if(e){const t=Xe.sanitizeInput(e);if(!t)return[void 0,void 0,void 0];const r=Ie(t,"YYYY-MM-DD",!0);return[tt.padValue(r.date().toString()),tt.padValue((r.month()+1).toString()),r.year().toString()]}return[void 0,void 0,void 0]}return t(_d,{role:"group","aria-label":u,onClick:()=>{var e;r||n||(M(!0),B.current&&!B.current.contains(document.activeElement)&&(null===(e=A.current)||void 0===e||e.focus()))},onFocus:e=>{r||(M(!0),l||null==g||g(e))},children:[t(Od,{ref:B,$hover:!!d,children:[e(Id,{ref:A,name:o[0],maxLength:2,value:null!=L?L:w,onFocus:N,onBlur:W,onChange:Y,type:"text",inputMode:x,pattern:"[0-9]{2}","data-testid":`${o[0]}-input`,"aria-label":b[0],disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:O!==o[0]||n?"DD":""}),e(Ad,{$inactive:0===w.length,children:"/"}),e(Md,{ref:z,name:o[1],maxLength:2,value:null!=R?R:S,onFocus:N,onBlur:W,onChange:Y,onKeyDown:V,type:"text",inputMode:x,pattern:"[0-9]{2}","data-testid":`${o[1]}-input`,"aria-label":b[1],disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:O!==o[1]||n?"MM":""}),e(Ad,{$inactive:0===S.length,children:"/"}),e(Bd,{ref:j,name:o[2],maxLength:4,value:null!=P?P:F,onFocus:N,onBlur:W,onChange:Y,onKeyDown:V,type:"text",inputMode:x,pattern:"[0-9]{4}","data-testid":`${o[2]}-input`,"aria-label":b[2],disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:O!==o[2]||n?"YYYY":""})]}),(()=>{if(!i&&!n&&c)return e(zd,{$hide:I,$disabled:r,onMouseDown:H,children:c})})()]})})),Ld=k(kd)`
    height: 3rem;
`,Rd=t=>{var{minDate:r,maxDate:n,disabled:o,disabledDates:i,error:l,hideInputKeyboard:d,value:c,onChange:u,onFocus:f,onBlur:g,onYearMonthDisplayChange:m,withButton:p=!0,readOnly:b,id:v,allowDisabledSelection:y,zIndex:x,dropdownRootNode:w}=t,$=Fe(t,["minDate","maxDate","disabled","disabledDates","error","hideInputKeyboard","value","onChange","onFocus","onBlur","onYearMonthDisplayChange","withButton","readOnly","id","allowDisabledSelection","zIndex","dropdownRootNode"]);const[C,S]=s(Xe.sanitizeInput(c)),[D,k]=s(Xe.sanitizeInput(c)),[F,E]=s(void 0),[_,O]=s(!1),[T,I]=s(!1),M=a(null),B=a(null),A=a(null);h((()=>{const e=Xe.sanitizeInput(c);S(e),k(e)}),[c]);const z=e=>{!y&&Xe.isDateDisabled(e,{disabledDates:i,minDate:r,maxDate:n})||(k(e),p||(N(e),S(e),e&&O(!1)))},j=e=>{var t;k(e),p||(N(e),S(e),e&&(null===(t=B.current)||void 0===t||t.focusYearRef(),O(!1)),E(void 0))},L=()=>{b||o||(O(!0),T||(I(!0),f&&f()))},R=e=>{var t,r,n;const o=e.relatedTarget,i=A.current&&A.current.contains(o),a=M.current&&M.current.contains(o),s=(null===(t=null==o?void 0:o.matches)||void 0===t?void 0:t.call(o,"[data-floating-ui-focusable]"))||(null===(r=null==o?void 0:o.matches)||void 0===r?void 0:r.call(o,"[data-floating-ui-focus-guard]"));(T&&!_&&!a&&!s||_&&!a&&!i&&!s)&&(null===(n=B.current)||void 0===n||n.resetInput(),k(C),I(!1),O(!1),W())},P=e=>{E(e)},H=e=>{var t,r;switch(e){case"reset":k(C);break;case"confirmed":S(D),N(D)}Ie(D,"YYYY-MM-DD",!0).isValid()?null===(t=B.current)||void 0===t||t.focusYearRef():null===(r=M.current)||void 0===r||r.focus(),O(!1)},N=e=>{u&&u(e)},W=()=>{g&&g()};return e(Us,{enabled:!b&&!o,isOpen:_,renderElement:()=>e(Ld,Object.assign({role:"group",tabIndex:0,ref:M,onBlur:R,onFocus:L,$disabled:o,$readOnly:b,$focused:T,$error:l,id:v,"data-testid":$["data-testid"],"aria-disabled":o},$,{children:e(jd,{ref:B,disabled:o,onChange:z,readOnly:b,focused:_,names:["start-day","start-month","start-year"],value:D,hoverValue:F,hideInputKeyboard:d})})),renderDropdown:({elementWidth:t})=>e(yd,{variant:"single",ref:A,initialCalendarDate:D,withButton:p,value:D,disabledDates:i,minDate:r,maxDate:n,allowDisabledSelection:y,onHover:P,onSelect:j,onDismiss:H,onYearMonthDisplayChange:m,width:t,isFocusable:!b&&!o}),onClose:()=>{var e;null===(e=B.current)||void 0===e||e.resetInput(),k(C),O(!1),I(!1),W(),E(void 0)},onDismiss:()=>{var e,t;null===(e=B.current)||void 0===e||e.resetInput(),null===(t=M.current)||void 0===t||t.focus(),k(C),O(!1)},customZIndex:x,offset:16,rootNode:w})},Pd=k.div`
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
                        100% - ${Gi.Spec["body-size-baseline"]} -
                            ${Ji["spacing-16"]}
                    );
                    flex: unset;
                }

                [data-id="range-container-elem2-container"] {
                    margin-top: ${Ji["spacing-8"]};
                }
            `}}
`,Hd=k.div`
    width: 100%; // Force next flex item to break to next line
`,Nd=k.div`
    display: flex;
    flex: 1;
    align-items: center;
`,Wd=k(ae)`
    color: ${qi.icon};
    width: ${Gi.Spec["body-size-baseline"]};
    height: ${Gi.Spec["body-size-baseline"]};
    flex-shrink: 0;
    margin: 0 ${Ji["spacing-8"]};
    align-self: center;
`,Yd=k.div`
    position: absolute;
    background: ${e=>e.$error?qi["border-error-focus-strong"]:qi["border-focus-strong"]};
    height: 2px;
    // half - half padding - half icon width
    width: calc(
        50% - ${Ji["spacing-8"]} - (${Gi.Spec["body-size-baseline"]} / 2)
    );
    transition: left ${Xi["duration-350"]} ${Xi["ease-standard"]},
        opacity ${Xi["duration-350"]} ${Xi["ease-standard"]};
    left: 0;
    bottom: 0;

    ${e=>{switch(e.$position){case"start":return F`
                    opacity: 1;
                `;case"end":return F`
                    left: calc(50% + ${Ji["spacing-16"]});
                    opacity: 1;
                `;case"none":return F`
                    opacity: 0;
                `}}}

    ${e=>{if(e.$wrap)return F`
                display: none;
            `}}
`,Vd=({children:r,currentActive:n,error:o,className:i,wrap:a})=>{const[s,l]=r;return t(Pd,{className:i,$wrap:a,children:[e(Nd,{"data-id":"range-container-elem1-container",children:s}),e(Wd,{}),a&&e(Hd,{}),e(Nd,{"data-id":"range-container-elem2-container",children:l}),e(Yd,{"data-id":"range-container-indicator",$position:n,$error:o,$wrap:a})]})},Ud=(e,t,r)=>{const n=[];e&&n.push(`[${e}]`),n.push(t,r),console.log(...n)},Kd=k(kd)`
    ${e=>{if(e.$wrap)return!0===e.$readOnly?F`
                    padding: ${Ji["spacing-12"]} 0;
                `:F`
                padding: ${Ji["spacing-12"]} ${Ji["spacing-16"]};
            `}}
`,Zd=k.div`
    display: flex;
    align-items: center;
    height: calc(3rem - 2px); // exclude top and bottom borders
    width: 100%;

    ${e=>e.$wrap&&F`
            height: fit-content;
        `}
`,qd={initialStart:"",initialEnd:"",selectedStart:"",selectedEnd:"",currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1,focused:!1},Gd=r=>{var{minDate:n,maxDate:o,disabled:i,disabledDates:l,error:d,hideInputKeyboard:c,value:u,valueEnd:f,onChange:m,onFocus:p,onBlur:b,onYearMonthDisplayChange:v,withButton:y=!0,variant:w="range",numberOfDays:$=7,readOnly:C,id:S,allowDisabledSelection:D,zIndex:k,dropdownRootNode:F}=r,E=Fe(r,["minDate","maxDate","disabled","disabledDates","error","hideInputKeyboard","value","valueEnd","onChange","onFocus","onBlur","onYearMonthDisplayChange","withButton","variant","numberOfDays","readOnly","id","allowDisabledSelection","zIndex","dropdownRootNode"]);const[_,O]=s(),[T,I]=s(void 0),M="week"===w,B="fixed-range"===w,[A,z]=s(!1),[j,L]=s(!1),[{selectedStart:R,selectedEnd:P,currentFocus:H,calendarOpen:N,isStartDirty:W,isEndDirty:Y,focused:V},U]=(({initialState:e,reducers:t,name:r,debug:n})=>{const[o,i]=x(((e,r)=>t[r.type]?t[r.type](e,r.payload):e),e);return[o,Object.fromEntries(Object.keys(t).map((e=>[e,t=>{n&&Ud(r,e,t),i({type:e,payload:t})}])))]})({name:"date-range-input",initialState:qd,reducers:{blur:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1,focused:!1}),dismiss:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),changeStart:(e,t)=>Object.assign(Object.assign({},e),{selectedStart:t,isStartDirty:!0}),changeEnd:(e,t)=>Object.assign(Object.assign({},e),{selectedEnd:t,isEndDirty:!0}),reselectStart:e=>Object.assign(Object.assign({},e),{selectedStart:"",currentFocus:"start"}),reselectEnd:e=>Object.assign(Object.assign({},e),{selectedEnd:"",currentFocus:"end"}),focus:(e,t)=>Object.assign(Object.assign({},e),{currentFocus:M?"none":B?"start":t,calendarOpen:!C,focused:!0}),cancel:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1}),done:(e,t)=>Object.assign(Object.assign({},e),{selectedStart:t.start,selectedEnd:t.end,initialStart:t.start,initialEnd:t.end,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),resetStart:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart}),resetEnd:e=>Object.assign(Object.assign({},e),{selectedEnd:e.initialEnd}),resetRange:(e,t)=>Object.assign(Object.assign({},e),{initialStart:t.start,selectedStart:t.start,initialEnd:t.end,selectedEnd:t.end})}}),K=a(!1),Z=a(null),q=a(null),G=a(null),X=a(null),Q=(({maxWidth:e,targetRef:t})=>{const[r,n]=s(!1);return Gt({targetRef:t,refreshMode:"throttle",refreshRate:300,handleHeight:!1,onResize:g((t=>{n(t<=e)}),[e])}),r})({maxWidth:320,targetRef:Z});h((()=>{U.resetRange({start:Xe.sanitizeInput(u),end:Xe.sanitizeInput(f)})}),[u,f]),h((()=>{"start"===H?O(R):"end"===H&&P&&O(P)}),[H]);const J=e=>{var t,r,n;"Enter"!==e.code||y||(R&&P?(U.done({start:R,end:P}),null==m||m(R,P)):(U.dismiss(),null===(t=Z.current)||void 0===t||t.focus(),null===(r=G.current)||void 0===r||r.resetPlaceholder(),null===(n=X.current)||void 0===n||n.resetPlaceholder()))},ee=e=>{var t;if(ge(e))return void(K.current=!0);if(U.changeStart(e),e&&(null===(t=q.current)||void 0===t||t.setCalendarDate(e)),K.current=!1,!e)return void(y||P||!Y||(U.resetRange({start:"",end:""}),null==m||m("","")));if(!P)return void U.focus("end");if(Ie(e).isAfter(P,"day"))U.reselectEnd();else{if(Y)return y?void 0:(U.done({start:e,end:P}),void(null==m||m(e,P)));U.focus("end")}},te=e=>{var t,r,n;if(ge(e))return void(K.current=!0);if(Ie(e).isBefore(R,"day"))return U.changeStart(e),null===(t=q.current)||void 0===t||t.setCalendarDate(e),void U.reselectEnd();if(U.changeEnd(e),e&&(null===(r=q.current)||void 0===r||r.setCalendarDate(e)),e){if(R)return y?void 0:(null===(n=X.current)||void 0===n||n.focusYearRef(),U.done({start:R,end:e}),void(null==m||m(R,e)));U.focus("start")}else y||R||!W||(U.resetRange({start:"",end:""}),null==m||m("",""))},re=e=>{var t,r;if(ge(e))return void(K.current=!0);if(U.changeStart(e),null===(t=q.current)||void 0===t||t.setCalendarDate(e),K.current=!1,!e)return void(y?U.changeEnd(""):(U.resetRange({start:"",end:""}),null==m||m("","")));const n=Ie(e).format("YYYY-MM-DD"),o=Ie(n).add($-1,"day").format("YYYY-MM-DD");return U.changeStart(n),U.changeEnd(o),K.current=!1,y?void 0:(U.done({start:n,end:o}),null===(r=G.current)||void 0===r||r.focusYearRef(),void(null==m||m(n,o)))},ne=()=>{(M||B)&&L(!0),M&&z(!0),C||i||V||(U.focus("start"),null==p||p())},oe=e=>{var t,r,n,o;const i=e.relatedTarget,a=q.current&&q.current.contains(i),s=Z.current&&Z.current.contains(i),l=(null===(t=null==i?void 0:i.matches)||void 0===t?void 0:t.call(i,"[data-floating-ui-focusable]"))||(null===(r=null==i?void 0:i.matches)||void 0===r?void 0:r.call(i,"[data-floating-ui-focus-guard]"));(V&&!N&&!s&&!l||N&&!s&&!a&&!l)&&(U.blur(),L(!1),z(!1),null===(n=G.current)||void 0===n||n.resetPlaceholder(),null===(o=X.current)||void 0===o||o.resetPlaceholder(),fe())},ie=e=>t=>{t.stopPropagation(),C||(U.focus(e),ae(),se(),V||null==p||p())},ae=()=>{if(M){const e=Ge.toDayjs(R).startOf("week").format("YYYY-MM-DD");z(!0),L(!0),O(e)}},se=()=>{B&&(L(!0),O(R))},le=e=>{var t;e&&!K.current||(U.resetStart(),null===(t=G.current)||void 0===t||t.resetInput())},de=e=>{var t;e&&!K.current||(U.resetEnd(),null===(t=X.current)||void 0===t||t.resetInput())},ce=e=>{switch(w){case"week":(e=>{var t;const r=Ie(e).startOf("week").format("YYYY-MM-DD"),n=Ie(e).endOf("week").format("YYYY-MM-DD");if(U.changeStart(r),U.changeEnd(n),K.current=!1,!y)null===(t=X.current)||void 0===t||t.focusYearRef(),U.done({start:r,end:n}),null==m||m(r,n)})(e);break;case"fixed-range":re(e);break;default:"start"===H?ee(e):"end"===H&&te(e)}},ue=e=>{var t,r,n;switch(null===(t=Z.current)||void 0===t||t.focus(),e){case"reset":U.cancel();break;case"confirmed":if(U.done({start:R,end:P}),null==m||m(R,P),M)break;me(R,P)&&("range"===w?null===(r=X.current)||void 0===r||r.focusYearRef():null===(n=G.current)||void 0===n||n.focusYearRef())}},he=e=>{I(e)},fe=()=>{b&&b()},ge=e=>!D&&e&&Xe.isDateDisabled(e,{disabledDates:l,minDate:n,maxDate:o}),me=(e,t)=>!(!e||!t)&&Ie(e).isBefore(t,"day"),pe=e=>{let t={start:void 0,end:void 0};switch(w){case"range":t={start:"start"===H?T:void 0,end:"end"===H?T:void 0};break;case"week":if(!T)return;t={start:Ie(T).startOf("week").format("YYYY-MM-DD"),end:Ie(T).endOf("week").format("YYYY-MM-DD")};break;case"fixed-range":if(!T)return;t={start:Ie(T).format("YYYY-MM-DD"),end:Ie(T).add($-1,"day").format("YYYY-MM-DD")}}return t[e]};return e(Us,{enabled:!C&&!i,isOpen:N,onClose:()=>{var e,t;U.blur(),z(!1),L(!1),null===(e=G.current)||void 0===e||e.resetPlaceholder(),null===(t=X.current)||void 0===t||t.resetPlaceholder(),fe()},onDismiss:()=>{var e,t,r;U.dismiss(),null===(e=Z.current)||void 0===e||e.focus(),null===(t=G.current)||void 0===t||t.resetPlaceholder(),null===(r=X.current)||void 0===r||r.resetPlaceholder()},renderElement:()=>e(Kd,Object.assign({role:"group",ref:Z,tabIndex:0,onFocus:ne,onBlur:oe,$focused:V,$disabled:i,$readOnly:C,$error:d,$wrap:Q,id:S,"data-testid":E["data-testid"],"aria-disabled":i,onKeyDown:J},E,{children:t(Vd,{currentActive:H,wrap:Q,error:d,children:[e(Zd,{$wrap:Q,children:e(jd,{ref:G,placeholder:"From",names:["start-day","start-month","start-year"],inputLabels:["Start Date","Start Month","Start Year"],value:R,disabled:i,readOnly:A||C,focused:"start"===H,hoverValue:pe("start"),onChange:B?re:ee,onFocus:ie("start"),onBlur:le,hideInputKeyboard:c})}),e(Zd,{$wrap:Q,children:e(jd,{ref:X,placeholder:"To",names:["end-day","end-month","end-year"],inputLabels:["End Date","End Month","End Year"],value:P,disabled:i,readOnly:j||C,focused:"end"===H,hoverValue:pe("end"),onChange:te,onFocus:ie("end"),onBlur:de,hideInputKeyboard:c})})]})})),renderDropdown:({elementWidth:t})=>e(yd,{ref:q,variant:w,initialCalendarDate:_,withButton:y,value:R,endValue:P,selectWithinRange:W||Y,currentFocus:H,disabledDates:l,minDate:n,maxDate:o,allowDisabledSelection:D,onSelect:ce,onDismiss:ue,onHover:he,onYearMonthDisplayChange:v,numberOfDays:$,width:t,isFocusable:!C&&!i}),customZIndex:k,offset:16,rootNode:F})},Xd=k(vl)`
    flex-direction: ${e=>"right"===e.$buttonIconPosition?"row-reverse":"row"};
    gap: 0.5rem;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`,Qd=(r,n)=>{const{children:i,disabled:a=!1,styleType:s="default",danger:l=!1,icon:d,iconPosition:c="left",loading:u=!1,focusableWhenDisabled:h=!1,onClick:f}=r,g=Fe(r,["children","disabled","styleType","danger","icon","iconPosition","loading","focusableWhenDisabled","onClick"]),m={$buttonIconPosition:c,$buttonStyle:a?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return t(Xd,Object.assign({ref:n,"data-testid":g["data-testid"]||"button-with-icon",disabled:a&&!h,"aria-disabled":a,"aria-busy":u,onClick:a?void 0:f},m,g,{children:[u?e(nl,{}):d?o.cloneElement(d,{"aria-hidden":!0}):null,e("span",{children:i})]}))};Qd.displayName="ButtonWithIcon.Default";const Jd=(r,n)=>{const{children:i,disabled:a=!1,styleType:s="default",danger:l=!1,icon:d,iconPosition:c="left",loading:u=!1,focusableWhenDisabled:h=!1,onClick:f}=r,g=Fe(r,["children","disabled","styleType","danger","icon","iconPosition","loading","focusableWhenDisabled","onClick"]),m={$buttonIconPosition:c,$buttonStyle:a?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return t(Xd,Object.assign({ref:n,"data-testid":g["data-testid"]||"button-with-icon",disabled:a&&!h,"aria-disabled":a,"aria-busy":u,onClick:a?void 0:f},m,g,{children:[u?e(nl,{}):d?o.cloneElement(d,{"aria-hidden":!0}):null,e("span",{children:i})]}))};Jd.displayName="ButtonWithIcon.Small";const ec={Default:o.forwardRef(Qd),Small:o.forwardRef(Jd)},tc=({className:t,progress:r,color:n,"data-testid":o})=>e(rc,{className:t,$innerWidth:r,$color:n,"data-testid":o,children:e("progress",{value:100*r,max:100})}),rc=k.div`
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

    ${e=>{const{$color:t}=e;let r;return r=t&&"string"==typeof t?t:t?t(e):qi["icon-primary-subtle"](e),F`
            border: ${Qi["width-010"]} ${Qi.solid} ${r};
            border-radius: ${ea.sm};

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
`,nc=k.button`
    align-items: center;
    border-radius: ${ea.sm};
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
                    background-color: ${qi.bg};
                    border: ${Qi["width-010"]} ${Qi.solid}
                        ${qi["border-primary"]};
                    color: ${qi["text-primary"]};

                    &:hover {
                        background-color: ${qi["bg-hover-neutral"]};
                    }
                `;case"light":return F`
                    background-color: ${qi.bg};
                    border: ${Qi["width-010"]} ${Qi.solid}
                        ${qi.border};
                    color: ${qi["text-primary"]};

                    &:hover {
                        background-color: ${qi["bg-hover-neutral"]};
                    }
                `;case"disabled":return F`
                    background-color: ${qi["bg-disabled"]};
                    border: ${Qi["width-010"]} ${Qi.solid}
                        ${qi["border-disabled"]};
                    color: ${qi["text-disabled"]};
                    cursor: not-allowed;
                `;default:return F`
                    background-color: ${qi["bg-primary"]};
                    border: none;
                    color: ${qi["text-inverse"]};

                    &:hover {
                        background-color: ${qi["bg-primary-hover"]};
                    }
                `}}}
`,oc=o.forwardRef(((t,r)=>{var{"data-testid":n,styleType:o="primary",children:i,sizeType:a="default",type:s="button",disabled:l=!1,focusableWhenDisabled:d=!1,onClick:c}=t,u=Fe(t,["data-testid","styleType","children","sizeType","type","disabled","focusableWhenDisabled","onClick"]);return e(nc,Object.assign({"data-testid":n||"iconButton",ref:r,type:s,$styleType:l?"disabled":o,$sizeType:a,"aria-disabled":l,disabled:l&&!d,onClick:l?void 0:c},u,{children:i}))})),ic=k.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${e=>{return t=e.$show,r=e.$animationFrom||"bottom",t?`\n\t\t\t${r}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${r}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var t,r}}

    ${na.MaxWidth.sm} {
        height: calc(
            ${e=>e.$verticalHeight?`${e.$verticalHeight}px`:"1vh"} * 100
        );

        top: ${e=>e.$offsetTop||0}px;
    }
`,ac=Object.assign((t=>{var{id:r="modal",show:n,animationFrom:o="bottom",children:i,enableOverlayClick:a=!0,rootComponentId:s,zIndex:l,onOverlayClick:d,dismissKeyboardOnShow:c=!0}=t,u=Fe(t,["id","show","animationFrom","children","enableOverlayClick","rootComponentId","zIndex","onOverlayClick","dismissKeyboardOnShow"]);const{verticalHeight:f,offsetTop:g}=Wa();return h((()=>{var e,t;n&&c&&(null===(t=null===(e=document.activeElement)||void 0===e?void 0:e.blur)||void 0===t||t.call(e))}),[n]),e(La,{"data-testid":`${r}-overlay`,show:n,enableOverlayClick:a,onOverlayClick:d,id:r,rootId:s,zIndex:l,children:e(ic,Object.assign({$show:n,$animationFrom:o,"data-testid":r,$verticalHeight:f,$offsetTop:g},u,{children:i}))})}),{Box:_a}),sc=F`
    ${e=>`\n        ${na.MaxWidth.sm(e)},\n        (orientation: landscape) and (max-height: ${ra["sm-max"](e)}px)\n    `}
`,lc=F`
    ${e=>`\n        @media (orientation: landscape) and (max-height: ${ra["sm-max"](e)}px)\n    `}
`,dc=k.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    ${e=>F`
            ${Qi.Util["dashed-default"]({radius:ea.sm,thickness:Qi["width-040"],colour:e.$disabled?qi["border-disabled"]:qi.border})}

            background-color: ${e.$disabled?qi["bg-disabled"]:qi.bg};
        `}
    height: 14.125rem;
`,cc=k(Sl.Default)`
    width: fit-content;
    margin: 0 ${Ji["spacing-20"]};

    &:disabled {
        border-color: ${qi["border-strong"]};
    }
`,uc=k(oc)`
    position: absolute;
    top: ${Ji["spacing-16"]};
    right: ${Ji["spacing-16"]};

    &:disabled {
        border-color: ${qi["border-strong"]};
    }
`,hc=k.img`
    display: block;
    object-fit: contain;
    object-position: center;
    width: calc(100% - (3rem + ${Ji["spacing-16"]}) * 2);
    height: 100%;
`,fc=k.div`
    background: ${qi["bg-primary-subtlest"]};
    border: ${Qi["width-010"]} ${Qi.solid} ${qi.border};
    border-radius: ${ea.sm};
    margin: 0 ${Ji["spacing-20"]};
    padding: ${Ji["spacing-16"]};
    display: flex;
    gap: ${Ji["spacing-16"]};
    flex: 1;
    flex-direction: column;
    align-items: center;
`,gc=k(Ca.BodySM)`
    margin-top: ${Ji["spacing-16"]};
`,mc=k(ac)`
    /* increase specificity as the styles are overwritten */
    && {
        height: 100%;
        overflow-y: auto;
    }
`,pc=k.div`
    width: 100%;
    margin: auto;
    padding: ${Ji["layout-xxl"]} ${Ji["layout-sm"]};

    ${sc} {
        padding: 0;
        width: 100%;
        height: 100%;
    }
`,bc=k(ac.Box)`
    width: 100%;
    height: 29rem;
    max-width: 672px;
    max-height: none;
    margin: 0 auto;
    padding: ${Ji["spacing-16"]};

    ${sc} {
        display: flex;
        flex-direction: column;
        max-width: none;
        height: 100%;
        border-radius: 0;
        padding: 0;

        --close-button-top-inset: ${Ji["spacing-8"]};
        --close-button-right-inset: ${Ji["spacing-20"]};
    }
`,vc=k.h2`
    ${Gi["body-baseline-semibold"]}
    color: ${qi.text};
    margin-bottom: ${Ji["spacing-16"]};
    text-align: center;

    ${sc} {
        ${Gi["body-md-semibold"]}
        margin: ${Ji["spacing-12"]} 0;
    }
`,yc=k.div`
    width: 100%;
    height: 20rem;
    border-radius: ${ea.lg};
    overflow: hidden;

    ${sc} {
        border-radius: 0;
        flex: 1;
    }

    ${lc} {
        background: ${qi["bg-strong"]};
    }
`,xc=k.div`
    position: relative;
    width: 100%;
    height: 100%;
    background: ${qi["bg-stronger"]};
    margin: auto;

    ${sc} {
        aspect-ratio: 4/3;
    }
    ${na.MaxWidth.sm} {
        width: 100%;
        height: auto;
    }
    ${lc} {
        width: auto;
        height: 100%;
    }
`,wc=k.div`
    position: absolute;
    left: 50%;
    top: calc(75% - 1px);
    width: 300px;
    height: 2px;
    transform: translateX(-50%);
    background-color: ${qi["border-strong"]};
    pointer-events: none;

    ${sc} {
        width: calc(100% - ${Ji["spacing-40"]});
        max-width: 300px;
        left: 50%;
    }
`,$c=k.div`
    display: flex;
    justify-content: space-between;
    margin-top: ${Ji["spacing-16"]};

    ${na.MaxWidth.sm} {
        flex-direction: column-reverse;
        margin: ${Ji["spacing-16"]} ${Ji["spacing-24"]}
            ${Ji["spacing-48"]};
        gap: ${Ji["spacing-16"]};
    }

    ${lc} {
        flex-direction: row;
        margin: ${Ji["spacing-16"]} ${Ji["spacing-20"]};
    }
`,Cc=k(Sl.Default)`
    width: 8.5rem;
    ${na.MaxWidth.sm} {
        width: 100%;
    }
    ${lc} {
        height: 2.5rem;
    }
`,Sc=k.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`,Dc=k.canvas`
    cursor: crosshair;
`,kc=w((()=>Ee(void 0,void 0,void 0,(function*(){return{default:(yield import("./e-signature-canvas.6ad89709.js")).ESignatureCanvas}})))),Fc=n=>{const{description:o,id:i,loadingProgress:l,loadingLabel:d="Uploading...",onChange:c,value:u,disabled:f}=n,g=Fe(n,["description","id","loadingProgress","loadingLabel","onChange","value","disabled"]),[m,b]=s(!1),v=a(null),[y,x]=s(u),w=p(_),C=ra["sm-max"]({theme:w}),S=ir.useMediaQuery({maxWidth:C}),D=ir.useMediaQuery({maxHeight:C,orientation:"landscape"}),k=()=>{var e;null===(e=v.current)||void 0===e||e.clear()},F=()=>{if(v.current){const e=v.current.export();x(e),b(!1),null==c||c(e)}};h((()=>{x(u)}),[u]);return t("div",Object.assign({},g,{children:[e(dc,{$disabled:f,children:"number"==typeof l?t(fc,{children:[d&&e(Ca.BodyMD,{children:d}),e(tc,{progress:null!=l?l:0,"data-testid":`${i||"e-signature"}-progress-bar`})]}):y?t(r,{children:[e(hc,{src:y,alt:"Signature preview"}),e(uc,{styleType:"light",onClick:()=>b(!0),id:i,"aria-label":"Edit signature",disabled:f,children:e(se,{})})]}):e(cc,{type:"button",styleType:"secondary","aria-label":"Add signature",id:i,onClick:()=>b(!0),disabled:f,children:"Add signature"})}),e(mc,{"data-testid":"signature-modal",show:m,children:e(pc,{children:t(bc,{onClose:()=>b(!1),children:[e(vc,{children:"Signature"}),e(yc,{children:t(xc,{children:[e(wc,{}),e($,{fallback:null,children:m&&e(kc,{ref:v,baseImageDataURL:y})})]})}),t($c,{children:[e(Cc,{as:D?ec.Small:ec.Default,type:"button",styleType:S&&!D?"light":"link",icon:e(le,{}),onClick:k,children:"Clear"}),e(Cc,{as:D?Sl.Small:Sl.Default,type:"button",onClick:F,children:"Save"})]})]})})}),o?e(gc,{children:o}):null]}))};function Ec(e,t){return Ec=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},Ec(e,t)}function _c(e){return e&&e.stopPropagation&&e.stopPropagation(),e&&e.preventDefault&&e.preventDefault(),!1}function Oc(e){return null==e?[]:Array.isArray(e)?e.slice():[e]}function Tc(e){return null!==e&&1===e.length?e[0]:e.slice()}function Ic(e){Object.keys(e).forEach((t=>{"undefined"!=typeof document&&document.addEventListener(t,e[t],!1)}))}function Mc(e,t){return Bc(function(e,t){let r=e;return r<=t.min&&(r=t.min),r>=t.max&&(r=t.max),r}(e,t),t)}function Bc(e,t){const r=(e-t.min)%t.step;let n=e-r;return 2*Math.abs(r)>=t.step&&(n+=r>0?t.step:-t.step),parseFloat(n.toFixed(5))}let Ac=function(e){function t(t){var r;(r=e.call(this,t)||this).onKeyUp=()=>{r.onEnd()},r.onMouseUp=()=>{r.onEnd(r.getMouseEventMap())},r.onTouchEnd=e=>{e.preventDefault(),r.onEnd(r.getTouchEventMap())},r.onBlur=()=>{r.setState({index:-1},r.onEnd(r.getKeyDownEventMap()))},r.onMouseMove=e=>{r.setState({pending:!0});const t=r.getMousePosition(e),n=r.getDiffPosition(t[0]),o=r.getValueFromPosition(n);r.move(o)},r.onTouchMove=e=>{if(e.touches.length>1)return;r.setState({pending:!0});const t=r.getTouchPosition(e);if(void 0===r.isScrolling){const e=t[0]-r.startPosition[0],n=t[1]-r.startPosition[1];r.isScrolling=Math.abs(n)>Math.abs(e)}if(r.isScrolling)return void r.setState({index:-1});const n=r.getDiffPosition(t[0]),o=r.getValueFromPosition(n);r.move(o)},r.onKeyDown=e=>{if(!(e.ctrlKey||e.shiftKey||e.altKey||e.metaKey))switch(r.setState({pending:!0}),e.key){case"ArrowLeft":case"ArrowDown":case"Left":case"Down":e.preventDefault(),r.moveDownByStep();break;case"ArrowRight":case"ArrowUp":case"Right":case"Up":e.preventDefault(),r.moveUpByStep();break;case"Home":e.preventDefault(),r.move(r.props.min);break;case"End":e.preventDefault(),r.move(r.props.max);break;case"PageDown":e.preventDefault(),r.moveDownByStep(r.props.pageFn(r.props.step));break;case"PageUp":e.preventDefault(),r.moveUpByStep(r.props.pageFn(r.props.step))}},r.onSliderMouseDown=e=>{if(!r.props.disabled&&2!==e.button){if(r.setState({pending:!0}),!r.props.snapDragDisabled){const t=r.getMousePosition(e);r.forceValueFromPosition(t[0],(e=>{r.start(e,t[0]),Ic(r.getMouseEventMap())}))}_c(e)}},r.onSliderClick=e=>{if(!r.props.disabled&&r.props.onSliderClick&&!r.hasMoved){const t=r.getMousePosition(e),n=Mc(r.calcValue(r.calcOffsetFromPosition(t[0])),r.props);r.props.onSliderClick(n)}},r.createOnKeyDown=e=>t=>{r.props.disabled||(r.start(e),Ic(r.getKeyDownEventMap()),_c(t))},r.createOnMouseDown=e=>t=>{if(r.props.disabled||2===t.button)return;r.setState({pending:!0});const n=r.getMousePosition(t);r.start(e,n[0]),Ic(r.getMouseEventMap()),_c(t)},r.createOnTouchStart=e=>t=>{if(r.props.disabled||t.touches.length>1)return;r.setState({pending:!0});const n=r.getTouchPosition(t);r.startPosition=n,r.isScrolling=void 0,r.start(e,n[0]),Ic(r.getTouchEventMap()),function(e){e.stopPropagation&&e.stopPropagation()}(t)},r.handleResize=()=>{const e=window.setTimeout((()=>{r.pendingResizeTimeouts.shift(),r.resize()}),0);r.pendingResizeTimeouts.push(e)},r.renderThumb=(e,t)=>{const n=r.props.thumbClassName+" "+r.props.thumbClassName+"-"+t+" "+(r.state.index===t?r.props.thumbActiveClassName:""),o={ref:e=>{r["thumb"+t]=e},key:r.props.thumbClassName+"-"+t,className:n,style:e,onMouseDown:r.createOnMouseDown(t),onTouchStart:r.createOnTouchStart(t),onFocus:r.createOnKeyDown(t),tabIndex:0,role:"slider","aria-orientation":r.props.orientation,"aria-valuenow":r.state.value[t],"aria-valuemin":r.props.min,"aria-valuemax":r.props.max,"aria-label":Array.isArray(r.props.ariaLabel)?r.props.ariaLabel[t]:r.props.ariaLabel,"aria-labelledby":Array.isArray(r.props.ariaLabelledby)?r.props.ariaLabelledby[t]:r.props.ariaLabelledby,"aria-disabled":r.props.disabled},i={index:t,value:Tc(r.state.value),valueNow:r.state.value[t]};return r.props.ariaValuetext&&(o["aria-valuetext"]="string"==typeof r.props.ariaValuetext?r.props.ariaValuetext:r.props.ariaValuetext(i)),r.props.renderThumb(o,i)},r.renderTrack=(e,t,n)=>{const o={key:r.props.trackClassName+"-"+e,className:r.props.trackClassName+" "+r.props.trackClassName+"-"+e,style:r.buildTrackStyle(t,r.state.upperBound-n)},i={index:e,value:Tc(r.state.value)};return r.props.renderTrack(o,i)};let n=Oc(t.value);n.length||(n=Oc(t.defaultValue)),r.pendingResizeTimeouts=[];const i=[];for(let e=0;e<n.length;e+=1)n[e]=Mc(n[e],t),i.push(e);return r.resizeObserver=null,r.resizeElementRef=o.createRef(),r.state={index:-1,upperBound:0,sliderLength:0,value:n,zIndices:i},r}!function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Ec(e,t)}(t,e);var r=t.prototype;return r.componentDidMount=function(){"undefined"!=typeof window&&(this.resizeObserver=new ResizeObserver(this.handleResize),this.resizeObserver.observe(this.resizeElementRef.current),this.resize())},t.getDerivedStateFromProps=function(e,t){const r=Oc(e.value);return r.length?t.pending?null:{value:r.map((t=>Mc(t,e)))}:null},r.componentDidUpdate=function(){0===this.state.upperBound&&this.resize()},r.componentWillUnmount=function(){this.clearPendingResizeTimeouts(),this.resizeObserver&&this.resizeObserver.disconnect()},r.onEnd=function(e){e&&function(e){Object.keys(e).forEach((t=>{"undefined"!=typeof document&&document.removeEventListener(t,e[t],!1)}))}(e),this.hasMoved&&this.fireChangeEvent("onAfterChange"),this.setState({pending:!1}),this.hasMoved=!1},r.getValue=function(){return Tc(this.state.value)},r.getClosestIndex=function(e){let t=Number.MAX_VALUE,r=-1;const{value:n}=this.state,o=n.length;for(let i=0;i<o;i+=1){const o=this.calcOffset(n[i]),a=Math.abs(e-o);a<t&&(t=a,r=i)}return r},r.getMousePosition=function(e){return[e["page"+this.axisKey()],e["page"+this.orthogonalAxisKey()]]},r.getTouchPosition=function(e){const t=e.touches[0];return[t["page"+this.axisKey()],t["page"+this.orthogonalAxisKey()]]},r.getKeyDownEventMap=function(){return{keydown:this.onKeyDown,keyup:this.onKeyUp,focusout:this.onBlur}},r.getMouseEventMap=function(){return{mousemove:this.onMouseMove,mouseup:this.onMouseUp}},r.getTouchEventMap=function(){return{touchmove:this.onTouchMove,touchend:this.onTouchEnd}},r.getValueFromPosition=function(e){const t=e/(this.state.sliderLength-this.state.thumbSize)*(this.props.max-this.props.min);return Mc(this.state.startValue+t,this.props)},r.getDiffPosition=function(e){let t=e-this.state.startPosition;return this.props.invert&&(t*=-1),t},r.resize=function(){const{slider:e,thumb0:t}=this;if(!e||!t)return;const r=this.sizeKey(),n=e.getBoundingClientRect(),o=e[r],i=n[this.posMaxKey()],a=n[this.posMinKey()],s=t.getBoundingClientRect()[r.replace("client","").toLowerCase()],l=o-s,d=Math.abs(i-a);this.state.upperBound===l&&this.state.sliderLength===d&&this.state.thumbSize===s||this.setState({upperBound:l,sliderLength:d,thumbSize:s})},r.calcOffset=function(e){const t=this.props.max-this.props.min;return 0===t?0:(e-this.props.min)/t*this.state.upperBound},r.calcValue=function(e){return e/this.state.upperBound*(this.props.max-this.props.min)+this.props.min},r.calcOffsetFromPosition=function(e){const{slider:t}=this,r=t.getBoundingClientRect(),n=r[this.posMaxKey()],o=r[this.posMinKey()];let i=e-(window["page"+this.axisKey()+"Offset"]+(this.props.invert?n:o));return this.props.invert&&(i=this.state.sliderLength-i),i-=this.state.thumbSize/2,i},r.forceValueFromPosition=function(e,t){const r=this.calcOffsetFromPosition(e),n=this.getClosestIndex(r),o=Mc(this.calcValue(r),this.props),i=this.state.value.slice();i[n]=o;for(let e=0;e<i.length-1;e+=1)if(i[e+1]-i[e]<this.props.minDistance)return;this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0,this.setState({value:i},(()=>{t(n),this.fireChangeEvent("onChange")}))},r.clearPendingResizeTimeouts=function(){do{const e=this.pendingResizeTimeouts.shift();clearTimeout(e)}while(this.pendingResizeTimeouts.length)},r.start=function(e,t){const r=this["thumb"+e];r&&r.focus();const{zIndices:n}=this.state;n.splice(n.indexOf(e),1),n.push(e),this.setState((r=>({startValue:r.value[e],startPosition:void 0!==t?t:r.startPosition,index:e,zIndices:n})))},r.moveUpByStep=function(e){void 0===e&&(e=this.props.step);const t=this.state.value[this.state.index],r=Mc(this.props.invert&&"horizontal"===this.props.orientation?t-e:t+e,this.props);this.move(Math.min(r,this.props.max))},r.moveDownByStep=function(e){void 0===e&&(e=this.props.step);const t=this.state.value[this.state.index],r=Mc(this.props.invert&&"horizontal"===this.props.orientation?t+e:t-e,this.props);this.move(Math.max(r,this.props.min))},r.move=function(e){const t=this.state.value.slice(),{index:r}=this.state,{length:n}=t,o=t[r];if(e===o)return;this.hasMoved||this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0;const{pearling:i,max:a,min:s,minDistance:l}=this.props;if(!i){if(r>0){const n=t[r-1];e<n+l&&(e=n+l)}if(r<n-1){const n=t[r+1];e>n-l&&(e=n-l)}}t[r]=e,i&&n>1&&(e>o?(this.pushSucceeding(t,l,r),function(e,t,r,n){for(let o=0;o<e;o+=1){const i=n-o*r;t[e-1-o]>i&&(t[e-1-o]=i)}}(n,t,l,a)):e<o&&(this.pushPreceding(t,l,r),function(e,t,r,n){for(let o=0;o<e;o+=1){const e=n+o*r;t[o]<e&&(t[o]=e)}}(n,t,l,s))),this.setState({value:t},this.fireChangeEvent.bind(this,"onChange"))},r.pushSucceeding=function(e,t,r){let n,o;for(n=r,o=e[n]+t;null!==e[n+1]&&o>e[n+1];n+=1,o=e[n]+t)e[n+1]=Bc(o,this.props)},r.pushPreceding=function(e,t,r){for(let n=r,o=e[n]-t;null!==e[n-1]&&o<e[n-1];n-=1,o=e[n]-t)e[n-1]=Bc(o,this.props)},r.axisKey=function(){return"vertical"===this.props.orientation?"Y":"X"},r.orthogonalAxisKey=function(){return"vertical"===this.props.orientation?"X":"Y"},r.posMinKey=function(){return"vertical"===this.props.orientation?this.props.invert?"bottom":"top":this.props.invert?"right":"left"},r.posMaxKey=function(){return"vertical"===this.props.orientation?this.props.invert?"top":"bottom":this.props.invert?"left":"right"},r.sizeKey=function(){return"vertical"===this.props.orientation?"clientHeight":"clientWidth"},r.fireChangeEvent=function(e){this.props[e]&&this.props[e](Tc(this.state.value),this.state.index)},r.buildThumbStyle=function(e,t){const r={position:"absolute",touchAction:"none",willChange:this.state.index>=0?this.posMinKey():void 0,zIndex:this.state.zIndices.indexOf(t)+1};return r[this.posMinKey()]=e+"px",r},r.buildTrackStyle=function(e,t){const r={position:"absolute",willChange:this.state.index>=0?this.posMinKey()+","+this.posMaxKey():void 0};return r[this.posMinKey()]=e,r[this.posMaxKey()]=t,r},r.buildMarkStyle=function(e){var t;return(t={position:"absolute"})[this.posMinKey()]=e,t},r.renderThumbs=function(e){const{length:t}=e,r=[];for(let n=0;n<t;n+=1)r[n]=this.buildThumbStyle(e[n],n);const n=[];for(let e=0;e<t;e+=1)n[e]=this.renderThumb(r[e],e);return n},r.renderTracks=function(e){const t=[],r=e.length-1;t.push(this.renderTrack(0,0,e[0]));for(let n=0;n<r;n+=1)t.push(this.renderTrack(n+1,e[n],e[n+1]));return t.push(this.renderTrack(r+1,e[r],this.state.upperBound)),t},r.renderMarks=function(){let{marks:e}=this.props;const t=this.props.max-this.props.min+1;return"boolean"==typeof e?e=Array.from({length:t}).map(((e,t)=>t)):"number"==typeof e&&(e=Array.from({length:t}).map(((e,t)=>t)).filter((t=>t%e==0))),e.map(parseFloat).sort(((e,t)=>e-t)).map((e=>{const t=this.calcOffset(e),r={key:e,className:this.props.markClassName,style:this.buildMarkStyle(t)};return this.props.renderMark(r)}))},r.render=function(){const e=[],{value:t}=this.state,r=t.length;for(let n=0;n<r;n+=1)e[n]=this.calcOffset(t[n],n);const n=this.props.withTracks?this.renderTracks(e):null,i=this.renderThumbs(e),a=this.props.marks?this.renderMarks():null;return o.createElement("div",{ref:e=>{this.slider=e,this.resizeElementRef.current=e},style:{position:"relative"},className:this.props.className+(this.props.disabled?" disabled":""),onMouseDown:this.onSliderMouseDown,onClick:this.onSliderClick},n,i,a)},t}(o.Component);Ac.displayName="ReactSlider",Ac.defaultProps={min:0,max:100,step:1,pageFn:e=>10*e,minDistance:0,defaultValue:0,orientation:"horizontal",className:"slider",thumbClassName:"thumb",thumbActiveClassName:"active",trackClassName:"track",markClassName:"mark",withTracks:!0,pearling:!1,disabled:!1,snapDragDisabled:!1,invert:!1,marks:[],renderThumb:e=>o.createElement("div",e),renderTrack:e=>o.createElement("div",e),renderMark:e=>o.createElement("span",e)};var zc=Ac;const jc=k.div`
    isolation: isolate;
`,Lc=k.div`
    margin-top: ${Ji["spacing-8"]};
    display: flex;
    justify-content: space-between;
    gap: ${Ji["spacing-8"]};
`,Rc=k.div`
    margin-bottom: ${Ji["spacing-8"]};
`,Pc=k(Ca.BodyBL)`
    overflow-wrap: anywhere;
`,Hc=k(zc)`
    height: 0.875rem;
`,Nc=k.div`
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

        background-color: ${qi.bg};
        box-shadow: ${ta["sm-subtle"]};
        border: ${Qi["width-010"]} ${Qi.solid}
            ${e=>e.$disabled?qi["border-selected-disabled"]:qi["border-strong"]};
        border-radius: ${ea.full};
    }
`,Wc=k.div`
    height: 0.875rem;
    width: 0.875rem;
    position: relative;
    outline: none;

    &:focus ${Nc}:after {
        outline-offset: -1px;
        outline: ${Qi["width-040"]} ${Qi.solid}
            ${qi["border-selected"]};
    }
`,Yc=k.div`
    height: 0.25rem;
    top: 50%;
    transform: translateY(-50%);
    border-radius: ${ea.full};

    background: ${e=>e.$color&&"function"==typeof e.$color?e.$color(e):e.$color||qi["border-strong"](e)};
`,Vc=r=>{var{value:n,min:o=0,max:i=100,step:a=1,minRange:l,numOfThumbs:d=2,colors:c,disabled:u,readOnly:f,ariaLabels:g,showSliderLabels:m,sliderLabelPrefix:p,sliderLabelSuffix:b,showIndicatorLabel:v,indicatorLabelPrefix:y,indicatorLabelSuffix:x,renderSliderLabel:w,onChange:$,onChangeEnd:C}=r,S=Fe(r,["value","min","max","step","minRange","numOfThumbs","colors","disabled","readOnly","ariaLabels","showSliderLabels","sliderLabelPrefix","sliderLabelSuffix","showIndicatorLabel","indicatorLabelPrefix","indicatorLabelSuffix","renderSliderLabel","onChange","onChangeEnd"]);const[D,k]=s(E()),F=function(){const e=function(){const e=u||f?qi["border-disabled"]:qi["border-strong"],t=u||f?qi["border-selected-disabled"]:qi["border-selected"];if(1===d)return[t,e];const r=[];r.push(e);for(let e=0;e<d-1;e++)r.push(t);return r.push(e),r}();return new Array(d+1).fill(0).map(((t,r)=>(null==c?void 0:c[r])||e[r]))}();h((()=>{n!==D&&k(E())}),[n]);function E(){if(n&&n.length===d)return n;const e=[];for(let t=0;t<d;t++)e.push(o+a*t);return e}const _=e=>w?w(e):t(Pc,{children:[p,e,b]});return t(jc,Object.assign({},S,{children:[v&&e(Rc,{children:(()=>{let e="";if(1===D.length)e=`${D[0]}`;else if(2===D.length)e=`${D[0]} - ${D[1]}`;else if(D.length>2){e=`${Math.min(...D)} - ${Math.max(...D)}`}return t(Pc,{children:[y,e,x]})})()}),e(Hc,{step:a,min:o,max:i,value:D,disabled:u||f,onChange:(e,t)=>{if("number"==typeof e){const t=[e];k(t),null==$||$(t)}else{if(t>-1&&D[t]===e[t])return;const r=[...e];k(r),null==$||$(r)}},onAfterChange:e=>{if("number"==typeof e){const t=[e];k(t),null==C||C(t)}else{const t=[...e];k(t),null==C||C(t)}},minDistance:l,ariaLabel:g,renderThumb:(t,r)=>e(Wc,Object.assign({"data-testid":`slider-thumb-${r.index}`},t,{tabIndex:u?void 0:t.tabIndex,children:e(Nc,{$disabled:u,$readOnly:f})})),renderTrack:(t,r)=>e(Yc,Object.assign({"data-testid":`slider-track-${r.index}`},t,{$color:F[r.index]}))}),m&&t(Lc,{children:[e("div",{children:_(o)}),e("div",{children:_(i)})]})]}))},Uc=k.div`
    display: flex;
    margin-bottom: ${Ji["spacing-16"]};
    align-items: baseline;
`,Kc=k.div`
    margin: 0 0.5rem;
`,Zc=k.div`
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: flex-end;
    padding: 0 0.4375rem;
`,qc=k.div`
    flex: 1;
    border-radius: ${ea.sm} ${ea.sm} 0 0;
    border: 0.5px solid transparent; // space between bars
    background-clip: content-box;

    ${e=>{let t=qi["bg-strongest"];return e.$disabled&&e.$selected?t=qi["bg-selected-stronger-disabled"]:e.$disabled?t=qi["bg-disabled"]:e.$selected&&(t=qi["bg-selected-stronger"]),F`
            background-color: ${t};
        `}}
`,Gc=k(Vc)`
    margin-top: -0.3125rem;
`,Xc=n=>{var{bins:o=[],interval:i,disabled:a,readOnly:l,value:d,showRangeLabels:c,rangeLabelPrefix:u,rangeLabelSuffix:f,ariaLabels:g,onChange:m,onChangeEnd:p,renderEmptyView:b,renderRangeLabel:y}=n,x=Fe(n,["bins","interval","disabled","readOnly","value","showRangeLabels","rangeLabelPrefix","rangeLabelSuffix","ariaLabels","onChange","onChangeEnd","renderEmptyView","renderRangeLabel"]);const w=o.map((e=>e.count)),$=Math.max(...w),C=o.map((e=>e.minValue)),S=Math.max(...C),D=Math.min(...C),[k,F]=s(T()),E=v((()=>{const e=[...o].sort(((e,t)=>e.minValue-t.minValue)),t=(S-D)/i+1,r=[];for(let n=0;n<t;n++){const t=e.find((e=>e.minValue===D+i*n));t?r.push(t):r.push({count:0,minValue:D+i*n})}return r}),[o,i]);h((()=>{d!==k&&F(T())}),[d]);const _=e=>{const[t,r]=e,n=[t,r];F(n),null==m||m(n)},O=e=>{const[t,r]=e,n=[t,r];F(n),null==p||p(n)};function T(){return null!=d?d:[D,D+i]}const I=e=>y?y(e):t(Ca.BodyBL,{children:[u,e,f]});return t("div",Object.assign({},x,{children:[c&&t(Uc,{children:[I(k[0]),e(Kc,{children:"-"}),I(k[1])]}),E.every((e=>0===e.count))&&b?b():t(r,{children:[e(Zc,{children:E.map(((t,r)=>{const n=t.count/$;return e(qc,{style:{height:n?`calc(calc(100% - 0.25rem) * ${n} + 0.25rem)`:0},$selected:t.minValue>=k[0]&&t.minValue<k[1],$disabled:a||l},r)}))}),e(Gc,{min:D,max:S+i,step:i,minRange:i,numOfThumbs:2,value:k,disabled:a,readOnly:l,ariaLabels:g,onChange:_,onChangeEnd:O})]})]}))},Qc=k(Fd)`
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders

    ${e=>"no-border"!==e.$styleType&&F`
            padding-left: ${e.$visuallyReadOnly?0:Ji["spacing-16"]};
            padding-right: ${e.$visuallyReadOnly||e.$showClear?0:Ji["spacing-16"]};
        `}
`,Jc=k(Ed)`
    height: auto;
    padding: ${Ji["spacing-12"]} ${Ji["spacing-16"]};

    cursor: pointer;
    color: ${qi.icon};

    ${e=>"no-border"===e.$styleType&&F`
            margin-right: -${Ji["spacing-12"]};
        `}
`,eu=k(M)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`,tu=k.div`
    display: flex;
    width: 100%;
`,ru=k(Dd)`
    display: flex;
    align-items: center;
    width: 100%;
`,nu=o.forwardRef(((n,o)=>{var{value:i,spacing:s,type:l,error:d,disabled:c,readOnly:u,onChange:h,onClear:f,allowClear:g=!1,className:m,styleType:p="bordered"}=n,b=Fe(n,["value","spacing","type","error","disabled","readOnly","onChange","onClear","allowClear","className","styleType"]);const v=((e,t)=>"tel"===e&&!!t)(l,s),x=a(null);y(o,(()=>x.current),[]);const w=er({ref:x,formatter:e=>v?tt.transformWithSpaces(e,s):e}),$=e=>{h&&(v?S(e):h(e))},C=()=>{f&&f(),x&&x.current&&x.current.focus()},S=e=>{const t=w();if(!t)return;const{nextValue:r,updateCaretPosition:n}=t,o=r.replace(/\s/g,"");e.target.value=o,null==h||h(e),n()},D=i?(e=>e?v?tt.transformWithSpaces(e,s):e:"")(i):i,k=g&&!c&&!u&&!!i,F=()=>t(r,{children:[e(Qc,Object.assign({"data-testid":"input",ref:x,"aria-disabled":c,value:D,onChange:$,type:l,readOnly:u||c,$showClear:k,$styleType:p,$visuallyReadOnly:u},b)),k&&e(Jc,{onClick:C,type:"button","aria-label":"Clear input",$styleType:p,children:e(eu,{"aria-hidden":!0})})]});return e(r,{children:"no-border"===p?e(tu,{className:m,children:F()}):e(ru,{$disabled:c,$error:d,$readOnly:u,className:m,children:F()})})})),ou=o.forwardRef(((t,r)=>{const{label:n,errorMessage:o,id:i,"data-error-testid":a,"data-testid":l,layoutType:d,mobileCols:c,tabletCols:u,desktopCols:h,xxsCols:f,xsCols:g,smCols:m,mdCols:p,lgCols:b,xlCols:v,xxlCols:y}=t,x=Fe(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]),[w]=s((()=>`form-field-${et.generate()}`)),$=null!=i?i:w;return e(Bs,{id:$,"data-testid":l,label:n,errorMessage:o,disabled:x.disabled,"data-error-testid":a,layoutType:d,mobileCols:c,tabletCols:u,desktopCols:h,xxsCols:f,xsCols:g,smCols:m,mdCols:p,lgCols:b,xlCols:v,xxlCols:y,children:e(nu,Object.assign({id:`${$}-base`,"data-testid":l?`${l}-base`:void 0,ref:r,error:!!o},x))})})),iu=k.div`
    font-weight: ${e=>e.$bold?Gi.Spec["weight-semibold"]:Gi.Spec["weight-regular"]};

    ${e=>e.$disabled?F`
                color: ${qi["text-disabled"]};
            `:e.$selected?F`
                color: ${qi["text-selected"]};
            `:F`
                color: ${qi.text};
            `}
    width: 100%;

    ${e=>"end"===e.$truncateType&&pa(e.$maxLines||2)}
    overflow-wrap: break-word;
`,au=k.div`
    color: ${qi["text-subtlest"]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&pa(e.$maxLines||2)}
    overflow-wrap: break-word;

    ${e=>"next-line"===e.$labelDisplayType?F`
                    ${Gi["body-md-semibold"]}
                `:F`
                    ${Gi["body-baseline-regular"]}
                `}
`,su=k.span`
    font-weight: ${Gi.Spec["weight-semibold"]};
`,lu=k.div`
    text-align: left;
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;

    ${e=>"small"===e.$variant?Gi["body-md-regular"]:Gi["body-baseline-regular"]}

    ${e=>{switch(e.$labelDisplayType){case"next-line":return F`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return F`
                    ${iu} {
                        display: inline;
                    }

                    ${au} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,du=k.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    word-break: break-all;
    overflow: hidden;
`,cu=k.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,uu=({bold:n,displayType:o="inline",label:i,searchTerm:a,maxLines:s=2,selected:l,disabled:d,sublabel:c,truncationType:u="middle",variant:h="default"})=>{const f=p(_),m="small"===h?Gi.Spec["body-size-md"]({theme:f}):Gi.Spec["body-size-baseline"]({theme:f}),b=Gi.Spec["font-family"]({theme:f}),{ref:y,width:x}=Gt(),w=g((e=>{if("inline"!==o||!x)return!1;return tt.getTextWidth(e,`${m} '${b}'`)>x*s-50}),[x,o,m,b,s]),$=v((()=>w(i)),[w,i]),C=v((()=>c&&w(c)),[w,c]),S=n=>{if(!a)return n;const o=a.toLowerCase().trim(),s=n.toLowerCase().indexOf(o),l=s+a.length;return-1===s?n:t(r,{children:[i.slice(0,s),e(su,{$variant:h,children:i.slice(s,l)}),i.slice(l)]})},D=n=>t(r,{children:[e(du,{$maxLines:s,"aria-hidden":!0,children:S(n)}),e(cu,{$maxLines:s,"aria-hidden":!0,children:S(n)})]});return t(lu,{ref:y,$labelDisplayType:$||C?"next-line":o,$variant:h,children:[e(iu,{"aria-label":i,$bold:n,$maxLines:s,$selected:l,$disabled:d,$truncateType:u,children:"middle"===u&&$?D(i):S(i)}),c&&e(au,{"aria-label":c,$maxLines:s,$truncateType:u,$labelDisplayType:o,children:"middle"===u&&C?D(c):c})]})};var hu=Hn;var fu=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r};var gu=function(e){return this.__data__.get(e)};var mu=function(e){return this.__data__.has(e)},pu=Hn,bu=Nn,vu=lo;var yu=function(e,t){var r=this.__data__;if(r instanceof pu){var n=r.__data__;if(!bu||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new vu(n)}return r.set(e,t),this.size=r.size,this},xu=Hn,wu=function(){this.__data__=new hu,this.size=0},$u=fu,Cu=gu,Su=mu,Du=yu;function ku(e){var t=this.__data__=new xu(e);this.size=t.size}ku.prototype.clear=wu,ku.prototype.delete=$u,ku.prototype.get=Cu,ku.prototype.has=Su,ku.prototype.set=Du;var Fu=ku;var Eu=lo,_u=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},Ou=function(e){return this.__data__.has(e)};function Tu(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new Eu;++t<r;)this.add(e[t])}Tu.prototype.add=Tu.prototype.push=_u,Tu.prototype.has=Ou;var Iu=function(e,t){return e.has(t)},Mu=Tu,Bu=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1},Au=Iu;var zu=function(e,t,r,n,o,i){var a=1&r,s=e.length,l=t.length;if(s!=l&&!(a&&l>s))return!1;var d=i.get(e),c=i.get(t);if(d&&c)return d==t&&c==e;var u=-1,h=!0,f=2&r?new Mu:void 0;for(i.set(e,t),i.set(t,e);++u<s;){var g=e[u],m=t[u];if(n)var p=a?n(m,g,u,t,e,i):n(g,m,u,e,t,i);if(void 0!==p){if(p)continue;h=!1;break}if(f){if(!Bu(t,(function(e,t){if(!Au(f,t)&&(g===e||o(g,e,r,n,i)))return f.push(t)}))){h=!1;break}}else if(g!==m&&!o(g,m,r,n,i)){h=!1;break}}return i.delete(e),i.delete(t),h};var ju=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r};var Lu=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r},Ru=cr.Uint8Array,Pu=Cn,Hu=zu,Nu=ju,Wu=Lu,Yu=ur?ur.prototype:void 0,Vu=Yu?Yu.valueOf:void 0;var Uu=function(e,t,r,n,o,i,a){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!i(new Ru(e),new Ru(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Pu(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var s=Nu;case"[object Set]":var l=1&n;if(s||(s=Wu),e.size!=t.size&&!l)return!1;var d=a.get(e);if(d)return d==t;n|=2,a.set(e,t);var c=Hu(s(e),s(t),n,o,i,a);return a.delete(e),c;case"[object Symbol]":if(Vu)return Vu.call(e)==Vu.call(t)}return!1};var Ku=function(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];return e},Zu=Ku,qu=ar;var Gu=function(e,t,r){var n=t(e);return qu(e)?n:Zu(n,r(e))};var Xu=function(e,t){for(var r=-1,n=null==e?0:e.length,o=0,i=[];++r<n;){var a=e[r];t(a,r,e)&&(i[o++]=a)}return i},Qu=function(){return[]},Ju=Object.prototype.propertyIsEnumerable,eh=Object.getOwnPropertySymbols,th=eh?function(e){return null==e?[]:(e=Object(e),Xu(eh(e),(function(t){return Ju.call(e,t)})))}:Qu;var rh=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n},nh=$r,oh=Cr;var ih=function(e){return oh(e)&&"[object Arguments]"==nh(e)},ah=Cr,sh=Object.prototype,lh=sh.hasOwnProperty,dh=sh.propertyIsEnumerable,ch=ih(function(){return arguments}())?ih:function(e){return ah(e)&&lh.call(e,"callee")&&!dh.call(e,"callee")},uh={exports:{}};var hh=function(){return!1};!function(e,t){var r=cr,n=hh,o=t&&!t.nodeType&&t,i=o&&e&&!e.nodeType&&e,a=i&&i.exports===o?r.Buffer:void 0,s=(a?a.isBuffer:void 0)||n;e.exports=s}(uh,uh.exports);var fh=uh.exports,gh=/^(?:0|[1-9]\d*)$/;var mh=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&gh.test(e))&&e>-1&&e%1==0&&e<t};var ph=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},bh=$r,vh=ph,yh=Cr,xh={};xh["[object Float32Array]"]=xh["[object Float64Array]"]=xh["[object Int8Array]"]=xh["[object Int16Array]"]=xh["[object Int32Array]"]=xh["[object Uint8Array]"]=xh["[object Uint8ClampedArray]"]=xh["[object Uint16Array]"]=xh["[object Uint32Array]"]=!0,xh["[object Arguments]"]=xh["[object Array]"]=xh["[object ArrayBuffer]"]=xh["[object Boolean]"]=xh["[object DataView]"]=xh["[object Date]"]=xh["[object Error]"]=xh["[object Function]"]=xh["[object Map]"]=xh["[object Number]"]=xh["[object Object]"]=xh["[object RegExp]"]=xh["[object Set]"]=xh["[object String]"]=xh["[object WeakMap]"]=!1;var wh=function(e){return yh(e)&&vh(e.length)&&!!xh[bh(e)]};var $h=function(e){return function(t){return e(t)}},Ch={exports:{}};!function(e,t){var r=sr,n=t&&!t.nodeType&&t,o=n&&e&&!e.nodeType&&e,i=o&&o.exports===n&&r.process,a=function(){try{var e=o&&o.require&&o.require("util").types;return e||i&&i.binding&&i.binding("util")}catch(e){}}();e.exports=a}(Ch,Ch.exports);var Sh=Ch.exports,Dh=wh,kh=$h,Fh=Sh&&Sh.isTypedArray,Eh=Fh?kh(Fh):Dh,_h=rh,Oh=ch,Th=ar,Ih=fh,Mh=mh,Bh=Eh,Ah=Object.prototype.hasOwnProperty;var zh=function(e,t){var r=Th(e),n=!r&&Oh(e),o=!r&&!n&&Ih(e),i=!r&&!n&&!o&&Bh(e),a=r||n||o||i,s=a?_h(e.length,String):[],l=s.length;for(var d in e)!t&&!Ah.call(e,d)||a&&("length"==d||o&&("offset"==d||"parent"==d)||i&&("buffer"==d||"byteLength"==d||"byteOffset"==d)||Mh(d,l))||s.push(d);return s},jh=Object.prototype;var Lh=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||jh)};var Rh=function(e,t){return function(r){return e(t(r))}}(Object.keys,Object),Ph=Lh,Hh=Rh,Nh=Object.prototype.hasOwnProperty;var Wh=function(e){if(!Ph(e))return Hh(e);var t=[];for(var r in Object(e))Nh.call(e,r)&&"constructor"!=r&&t.push(r);return t},Yh=zr,Vh=ph;var Uh=function(e){return null!=e&&Vh(e.length)&&!Yh(e)},Kh=zh,Zh=Wh,qh=Uh;var Gh=function(e){return qh(e)?Kh(e):Zh(e)},Xh=Gu,Qh=th,Jh=Gh;var ef=function(e){return Xh(e,Jh,Qh)},tf=Object.prototype.hasOwnProperty;var rf=function(e,t,r,n,o,i){var a=1&r,s=ef(e),l=s.length;if(l!=ef(t).length&&!a)return!1;for(var d=l;d--;){var c=s[d];if(!(a?c in t:tf.call(t,c)))return!1}var u=i.get(e),h=i.get(t);if(u&&h)return u==t&&h==e;var f=!0;i.set(e,t),i.set(t,e);for(var g=a;++d<l;){var m=e[c=s[d]],p=t[c];if(n)var b=a?n(p,m,c,t,e,i):n(m,p,c,e,t,i);if(!(void 0===b?m===p||o(m,p,r,n,i):b)){f=!1;break}g||(g="constructor"==c)}if(f&&!g){var v=e.constructor,y=t.constructor;v==y||!("constructor"in e)||!("constructor"in t)||"function"==typeof v&&v instanceof v&&"function"==typeof y&&y instanceof y||(f=!1)}return i.delete(e),i.delete(t),f},nf=tn(cr,"DataView"),of=Nn,af=tn(cr,"Promise"),sf=tn(cr,"Set"),lf=tn(cr,"WeakMap"),df=$r,cf=Hr,uf="[object Map]",hf="[object Promise]",ff="[object Set]",gf="[object WeakMap]",mf="[object DataView]",pf=cf(nf),bf=cf(of),vf=cf(af),yf=cf(sf),xf=cf(lf),wf=df;(nf&&wf(new nf(new ArrayBuffer(1)))!=mf||of&&wf(new of)!=uf||af&&wf(af.resolve())!=hf||sf&&wf(new sf)!=ff||lf&&wf(new lf)!=gf)&&(wf=function(e){var t=df(e),r="[object Object]"==t?e.constructor:void 0,n=r?cf(r):"";if(n)switch(n){case pf:return mf;case bf:return uf;case vf:return hf;case yf:return ff;case xf:return gf}return t});var $f=wf,Cf=Fu,Sf=zu,Df=Uu,kf=rf,Ff=$f,Ef=ar,_f=fh,Of=Eh,Tf="[object Arguments]",If="[object Array]",Mf="[object Object]",Bf=Object.prototype.hasOwnProperty;var Af=function(e,t,r,n,o,i){var a=Ef(e),s=Ef(t),l=a?If:Ff(e),d=s?If:Ff(t),c=(l=l==Tf?Mf:l)==Mf,u=(d=d==Tf?Mf:d)==Mf,h=l==d;if(h&&_f(e)){if(!_f(t))return!1;a=!0,c=!1}if(h&&!c)return i||(i=new Cf),a||Of(e)?Sf(e,t,r,n,o,i):Df(e,t,l,r,n,o,i);if(!(1&r)){var f=c&&Bf.call(e,"__wrapped__"),g=u&&Bf.call(t,"__wrapped__");if(f||g){var m=f?e.value():e,p=g?t.value():t;return i||(i=new Cf),o(m,p,r,n,i)}}return!!h&&(i||(i=new Cf),kf(e,t,r,n,o,i))},zf=Cr;var jf=function e(t,r,n,o,i){return t===r||(null==t||null==r||!zf(t)&&!zf(r)?t!=t&&r!=r:Af(t,r,n,o,e,i))},Lf=Fu,Rf=jf;var Pf=function(e,t,r,n){var o=r.length,i=o,a=!n;if(null==e)return!i;for(e=Object(e);o--;){var s=r[o];if(a&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++o<i;){var l=(s=r[o])[0],d=e[l],c=s[1];if(a&&s[2]){if(void 0===d&&!(l in e))return!1}else{var u=new Lf;if(n)var h=n(d,c,l,e,t,u);if(!(void 0===h?Rf(c,d,3,n,u):h))return!1}}return!0},Hf=Ir;var Nf=function(e){return e==e&&!Hf(e)},Wf=Nf,Yf=Gh;var Vf=function(e){for(var t=Yf(e),r=t.length;r--;){var n=t[r],o=e[n];t[r]=[n,o,Wf(o)]}return t};var Uf=function(e,t){return function(r){return null!=r&&(r[e]===t&&(void 0!==t||e in Object(r)))}},Kf=Pf,Zf=Vf,qf=Uf;var Gf=function(e,t){return null!=e&&t in Object(e)},Xf=Eo,Qf=ch,Jf=ar,eg=mh,tg=ph,rg=Oo;var ng=function(e,t,r){for(var n=-1,o=(t=Xf(t,e)).length,i=!1;++n<o;){var a=rg(t[n]);if(!(i=null!=e&&r(e,a)))break;e=e[a]}return i||++n!=o?i:!!(o=null==e?0:e.length)&&tg(o)&&eg(a,o)&&(Jf(e)||Qf(e))},og=Gf,ig=ng;var ag=jf,sg=Ao,lg=function(e,t){return null!=e&&ig(e,t,og)},dg=Tr,cg=Nf,ug=Uf,hg=Oo;var fg=function(e){return function(t){return null==t?void 0:t[e]}},gg=Mo;var mg=fg,pg=function(e){return function(t){return gg(t,e)}},bg=Tr,vg=Oo;var yg=function(e){var t=Zf(e);return 1==t.length&&t[0][2]?qf(t[0][0],t[0][1]):function(r){return r===e||Kf(r,e,t)}},xg=function(e,t){return dg(e)&&cg(t)?ug(hg(e),t):function(r){var n=sg(r,e);return void 0===n&&n===t?lg(r,e):ag(t,n,3)}},wg=function(e){return e},$g=ar,Cg=function(e){return bg(e)?mg(vg(e)):pg(e)};var Sg=function(e){return"function"==typeof e?e:null==e?wg:"object"==typeof e?$g(e)?xg(e[0],e[1]):yg(e):Cg(e)},Dg=Sg,kg=Uh,Fg=Gh;var Eg=function(e){return function(t,r,n){var o=Object(t);if(!kg(t)){var i=Dg(r);t=Fg(t),r=function(e){return i(o[e],e,o)}}var a=e(t,r,n);return a>-1?o[i?t[a]:a]:void 0}};var _g=/\s/;var Og=function(e){for(var t=e.length;t--&&_g.test(e.charAt(t)););return t},Tg=/^\s+/;var Ig=function(e){return e?e.slice(0,Og(e)+1).replace(Tg,""):e},Mg=Ir,Bg=kr,Ag=/^[-+]0x[0-9a-f]+$/i,zg=/^0b[01]+$/i,jg=/^0o[0-7]+$/i,Lg=parseInt;var Rg=function(e){if("number"==typeof e)return e;if(Bg(e))return NaN;if(Mg(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Mg(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Ig(e);var r=zg.test(e);return r||jg.test(e)?Lg(e.slice(2),r?2:8):Ag.test(e)?NaN:+e},Pg=Rg,Hg=1/0;var Ng=function(e){return e?(e=Pg(e))===Hg||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var Wg=function(e,t,r,n){for(var o=e.length,i=r+(n?1:-1);n?i--:++i<o;)if(t(e[i],i,e))return i;return-1},Yg=Sg,Vg=function(e){var t=Ng(e),r=t%1;return t==t?r?t-r:t:0},Ug=Math.max;var Kg=function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var o=null==r?0:Vg(r);return o<0&&(o=Ug(n+o,0)),Wg(e,Yg(t),o)},Zg=Oe(Kg),qg=Oe(Eg(Kg)),Gg=jf;var Xg=Oe((function(e,t){return Gg(e,t)}));function Qg(e){return()=>e}function Jg(e){e()}function em(e,t){return r=>e(t(r))}function tm(e,t){return()=>e(t)}function rm(e,t){return r=>e(t,r)}function nm(e){return void 0!==e}function om(){}function im(e,t){return t(e),e}function am(e,t){return t(e)}function sm(...e){return e}function lm(e,t){return e(1,t)}function dm(e,t){e(0,t)}function cm(e){e(2)}function um(e){return e(4)}function hm(e,t){return lm(e,rm(t,0))}function fm(e,t){const r=e(1,(e=>{r(),t(e)}));return r}function gm(e){let t,r;return n=>o=>{t=o,r&&clearTimeout(r),r=setTimeout((()=>{n(t)}),e)}}function mm(e,t){return e===t}function pm(e=mm){let t;return r=>n=>{e(t,n)||(t=n,r(n))}}function bm(e){return t=>r=>{e(r)&&t(r)}}function vm(e){return t=>em(t,e)}function ym(e){return t=>()=>{t(e)}}function xm(e,...t){const r=function(...e){return t=>e.reduceRight(am,t)}(...t);return(t,n)=>{switch(t){case 2:return void cm(e);case 1:return lm(e,r(n))}}}function wm(e,t){return r=>n=>{r(t=e(t,n))}}function $m(e){return t=>r=>{e>0?e--:t(r)}}function Cm(e){let t,r=null;return n=>o=>{r=o,!t&&(t=setTimeout((()=>{t=void 0,n(r)}),e))}}function Sm(...e){const t=new Array(e.length);let r=0,n=null;const o=Math.pow(2,e.length)-1;return e.forEach(((e,i)=>{const a=Math.pow(2,i);lm(e,(e=>{const s=r;r|=a,t[i]=e,s!==o&&r===o&&n&&(n(),n=null)}))})),e=>i=>{const a=()=>{e([i].concat(t))};r===o?a():n=a}}function Dm(e){let t=e;const r=Fm();return(e,n)=>{switch(e){case 0:t=n;break;case 1:n(t);break;case 4:return t}return r(e,n)}}function km(e,t){return im(Dm(t),(t=>hm(e,t)))}function Fm(){const e=[];return(t,r)=>{switch(t){case 0:return void e.slice().forEach((e=>{e(r)}));case 2:return void e.splice(0,e.length);case 1:return e.push(r),()=>{const t=e.indexOf(r);t>-1&&e.splice(t,1)}}}}function Em(e){return im(Fm(),(t=>hm(e,t)))}function _m(e,t=[],{singleton:r}={singleton:!0}){return{constructor:e,dependencies:t,id:Om(),singleton:r}}const Om=()=>Symbol();function Tm(...e){const t=Fm(),r=new Array(e.length);let n=0;const o=Math.pow(2,e.length)-1;return e.forEach(((e,i)=>{const a=Math.pow(2,i);lm(e,(e=>{r[i]=e,n|=a,n===o&&dm(t,r)}))})),function(e,i){switch(e){case 2:return void cm(t);case 1:return n===o&&i(r),lm(t,i)}}}function Im(e,t=mm){return xm(e,pm(t))}function Mm(...e){return function(t,r){switch(t){case 2:return;case 1:return function(...e){return()=>{e.map(Jg)}}(...e.map((e=>lm(e,r))))}}}var Bm=(e=>(e[e.DEBUG=0]="DEBUG",e[e.INFO=1]="INFO",e[e.WARN=2]="WARN",e[e.ERROR=3]="ERROR",e))(Bm||{});const Am={0:"debug",3:"error",1:"log",2:"warn"},zm=_m((()=>{const e=Dm(3);return{log:Dm(((t,r,n=1)=>{var o;n>=(null!=(o=(typeof globalThis>"u"?window:globalThis).VIRTUOSO_LOG_LEVEL)?o:um(e))&&console[Am[n]]("%creact-virtuoso: %c%s %o","color: #0253b3; font-weight: bold","color: initial",t,r)})),logLevel:e}}),[],{singleton:!0});function jm(e,t,r){return Lm(e,t,r).callbackRef}function Lm(e,t,r){const n=o.useRef(null);let i=e=>{};if(typeof ResizeObserver<"u"){const a=o.useMemo((()=>new ResizeObserver((t=>{const n=()=>{const r=t[0].target;null!==r.offsetParent&&e(r)};r?n():requestAnimationFrame(n)}))),[e]);i=e=>{e&&t?(a.observe(e),n.current=e):(n.current&&a.unobserve(n.current),n.current=null)}}return{callbackRef:i,ref:n}}function Rm(e,t,r,n,i,a,s,l,d){const c=o.useCallback((r=>{const o=function(e,t,r,n){const o=e.length;if(0===o)return null;const i=[];for(let a=0;a<o;a++){const o=e.item(a);if(void 0===o.dataset.index)continue;const s=parseInt(o.dataset.index),l=parseFloat(o.dataset.knownSize),d=t(o,r);if(0===d&&n("Zero-sized element, this should not happen",{child:o},Bm.ERROR),d===l)continue;const c=i[i.length-1];0===i.length||c.size!==d||c.endIndex!==s-1?i.push({endIndex:s,size:d,startIndex:s}):i[i.length-1].endIndex++}return i}(r.children,t,l?"offsetWidth":"offsetHeight",i);let d=r.parentElement;for(;!d.dataset.virtuosoScroller;)d=d.parentElement;const c="window"===d.lastElementChild.dataset.viewportType,u=s?l?s.scrollLeft:s.scrollTop:c?l?window.pageXOffset||document.documentElement.scrollLeft:window.pageYOffset||document.documentElement.scrollTop:l?d.scrollLeft:d.scrollTop,h=s?l?s.scrollWidth:s.scrollHeight:c?l?document.documentElement.scrollWidth:document.documentElement.scrollHeight:l?d.scrollWidth:d.scrollHeight,f=s?l?s.offsetWidth:s.offsetHeight:c?l?window.innerWidth:window.innerHeight:l?d.offsetWidth:d.offsetHeight;n({scrollHeight:h,scrollTop:Math.max(u,0),viewportHeight:f}),null==a||a(l?Pm("column-gap",getComputedStyle(r).columnGap,i):Pm("row-gap",getComputedStyle(r).rowGap,i)),null!==o&&e(o)}),[e,t,i,a,s,n]);return Lm(c,r,d)}function Pm(e,t,r){return"normal"!==t&&!(null!=t&&t.endsWith("px"))&&r(`${e} was not resolved to pixel value correctly`,t,Bm.WARN),"normal"===t?0:parseInt(null!=t?t:"0",10)}function Hm(e,t,r){const n=o.useRef(null),i=o.useCallback((r=>{if(null==r||!r.offsetParent)return;const o=r.getBoundingClientRect(),i=o.width;let a,s;if(t){const e=t.getBoundingClientRect(),r=o.top-e.top;s=e.height-Math.max(0,r),a=r+t.scrollTop}else s=window.innerHeight-Math.max(0,o.top),a=o.top+window.pageYOffset;n.current={offsetTop:a,visibleHeight:s,visibleWidth:i},e(n.current)}),[e,t]),{callbackRef:a,ref:s}=Lm(i,!0,r),l=o.useCallback((()=>{i(s.current)}),[i,s]);return o.useEffect((()=>{if(t){t.addEventListener("scroll",l);const e=new ResizeObserver((()=>{requestAnimationFrame(l)}));return e.observe(t),()=>{t.removeEventListener("scroll",l),e.unobserve(t)}}return window.addEventListener("scroll",l),window.addEventListener("resize",l),()=>{window.removeEventListener("scroll",l),window.removeEventListener("resize",l)}}),[l,t]),a}const Nm=_m((()=>{const e=Fm(),t=Fm(),r=Dm(0),n=Fm(),o=Dm(0),i=Fm(),a=Fm(),s=Dm(0),l=Dm(0),d=Dm(0),c=Dm(0),u=Fm(),h=Fm(),f=Dm(!1),g=Dm(!1),m=Dm(!1);return hm(xm(e,vm((({scrollTop:e})=>e))),t),hm(xm(e,vm((({scrollHeight:e})=>e))),a),hm(t,o),{deviation:r,fixedFooterHeight:d,fixedHeaderHeight:l,footerHeight:c,headerHeight:s,horizontalDirection:g,scrollBy:h,scrollContainerState:e,scrollHeight:a,scrollingInProgress:f,scrollTo:u,scrollTop:t,skipAnimationFrameInResizeObserver:m,smoothScrollTargetReached:n,statefulScrollTop:o,viewportHeight:i}}),[],{singleton:!0}),Wm={lvl:0};function Ym(e,t){const r=e.length;if(0===r)return[];let{index:n,value:o}=t(e[0]);const i=[];for(let a=1;a<r;a++){const{index:r,value:s}=t(e[a]);i.push({end:r-1,start:n,value:o}),n=r,o=s}return i.push({end:1/0,start:n,value:o}),i}function Vm(e){return e===Wm}function Um(e,t){if(!Vm(e))return t===e.k?e.v:t<e.k?Um(e.l,t):Um(e.r,t)}function Km(e,t,r="k"){if(Vm(e))return[-1/0,void 0];if(Number(e[r])===t)return[e.k,e.v];if(Number(e[r])<t){const n=Km(e.r,t,r);return n[0]===-1/0?[e.k,e.v]:n}return Km(e.l,t,r)}function Zm(e,t,r){return Vm(e)?ip(t,r,1):t===e.k?tp(e,{k:t,v:r}):t<e.k?ap(tp(e,{l:Zm(e.l,t,r)})):ap(tp(e,{r:Zm(e.r,t,r)}))}function qm(){return Wm}function Gm(e,t,r){if(Vm(e))return[];return function(e){return Ym(e,(({k:e,v:t})=>({index:e,value:t})))}(Jm(e,Km(e,t)[0],r))}function Xm(e,t){if(Vm(e))return Wm;const{k:r,l:n,r:o}=e;if(t===r){if(Vm(n))return o;if(Vm(o))return n;{const[t,r]=op(n);return ep(tp(e,{k:t,l:rp(n),v:r}))}}return ep(tp(e,t<r?{l:Xm(n,t)}:{r:Xm(o,t)}))}function Qm(e){return Vm(e)?[]:[...Qm(e.l),{k:e.k,v:e.v},...Qm(e.r)]}function Jm(e,t,r){if(Vm(e))return[];const{k:n,l:o,r:i,v:a}=e;let s=[];return n>t&&(s=s.concat(Jm(o,t,r))),n>=t&&n<=r&&s.push({k:n,v:a}),n<=r&&(s=s.concat(Jm(i,t,r))),s}function ep(e){const{l:t,lvl:r,r:n}=e;if(n.lvl>=r-1&&t.lvl>=r-1)return e;if(r>n.lvl+1){if(np(t))return sp(tp(e,{lvl:r-1}));if(!Vm(t)&&!Vm(t.r))return tp(t.r,{l:tp(t,{r:t.r.l}),lvl:r,r:tp(e,{l:t.r.r,lvl:r-1})});throw new Error("Unexpected empty nodes")}if(np(e))return lp(tp(e,{lvl:r-1}));if(Vm(n)||Vm(n.l))throw new Error("Unexpected empty nodes");{const t=n.l,o=np(t)?n.lvl-1:n.lvl;return tp(t,{l:tp(e,{lvl:r-1,r:t.l}),lvl:t.lvl+1,r:lp(tp(n,{l:t.r,lvl:o}))})}}function tp(e,t){return ip(void 0!==t.k?t.k:e.k,void 0!==t.v?t.v:e.v,void 0!==t.lvl?t.lvl:e.lvl,void 0!==t.l?t.l:e.l,void 0!==t.r?t.r:e.r)}function rp(e){return Vm(e.r)?e.l:ep(tp(e,{r:rp(e.r)}))}function np(e){return Vm(e)||e.lvl>e.r.lvl}function op(e){return Vm(e.r)?[e.k,e.v]:op(e.r)}function ip(e,t,r,n=Wm,o=Wm){return{k:e,l:n,lvl:r,r:o,v:t}}function ap(e){return lp(sp(e))}function sp(e){const{l:t}=e;return Vm(t)||t.lvl!==e.lvl?e:tp(t,{r:tp(e,{l:t.r})})}function lp(e){const{lvl:t,r:r}=e;return Vm(r)||Vm(r.r)||r.lvl!==t||r.r.lvl!==t?e:tp(r,{l:tp(e,{r:r.l}),lvl:t+1})}function dp(e,t){return!(!e||e.startIndex!==t.startIndex||e.endIndex!==t.endIndex)}function cp(e,t){return!(!e||e[0]!==t[0]||e[1]!==t[1])}const up=_m((()=>({recalcInProgress:Dm(!1)})),[],{singleton:!0});function hp(e,t,r){return e[fp(e,t,r)]}function fp(e,t,r,n=0){let o=e.length-1;for(;n<=o;){const i=Math.floor((n+o)/2),a=r(e[i],t);if(0===a)return i;if(-1===a){if(o-n<2)return i-1;o=i-1}else{if(o===n)return i;n=i+1}}throw new Error(`Failed binary finding record in array - ${e.join(",")}, searched for ${t}`)}function gp(e,t){return Math.round(e.getBoundingClientRect()[t])}function mp(e){return!Vm(e.groupOffsetTree)}function pp({index:e},t){return t===e?0:t<e?-1:1}function bp({offset:e},t){return t===e?0:t<e?-1:1}function vp(e,t,r){if(0===t.length)return 0;const{index:n,offset:o,size:i}=hp(t,e,pp),a=e-n,s=i*a+(a-1)*r+o;return s>0?s+r:s}function yp(e,t){if(!mp(t))return e;let r=0;for(;t.groupIndices[r]<=e+r;)r++;return e+r}function xp(e,t,r){if(function(e){return typeof e.groupIndex<"u"}(e))return t.groupIndices[e.groupIndex]+1;{let n=yp("LAST"===e.index?r:e.index,t);return n=Math.max(0,n,Math.min(r,n)),n}}function wp(e,t,r,n=0){return n>0&&(t=Math.max(t,hp(e,n,pp).offset)),Ym(function(e,t,r,n){const o=fp(e,t,n),i=fp(e,r,n,o);return e.slice(o,i+1)}(e,t,r,bp),Dp)}function $p(e,[t,r,n,o]){t.length>0&&n("received item sizes",t,Bm.DEBUG);const i=e.sizeTree;let a=i,s=0;if(r.length>0&&Vm(i)&&2===t.length){const e=t[0].size,n=t[1].size;a=r.reduce(((t,r)=>Zm(Zm(t,r,e),r+1,n)),a)}else[a,s]=function(e,t){let r=Vm(e)?0:1/0;for(const n of t){const{endIndex:t,size:o,startIndex:i}=n;if(r=Math.min(r,i),Vm(e)){e=Zm(e,0,o);continue}const a=Gm(e,i-1,t+1);if(a.some(kp(n)))continue;let s=!1,l=!1;for(const{end:r,start:n,value:i}of a)s?(t>=n||o===i)&&(e=Xm(e,n)):(l=i!==o,s=!0),r>t&&t>=n&&i!==o&&(e=Zm(e,t+1,i));l&&(e=Zm(e,i,o))}return[e,r]}(a,t);if(a===i)return e;const{lastIndex:l,lastOffset:d,lastSize:c,offsetTree:u}=Sp(e.offsetTree,s,a,o);return{groupIndices:r,groupOffsetTree:r.reduce(((e,t)=>Zm(e,t,vp(t,u,o))),qm()),lastIndex:l,lastOffset:d,lastSize:c,offsetTree:u,sizeTree:a}}function Cp(e,t){let r=0,n=0;for(;r<e;)r+=t[n+1]-t[n]-1,n++;return n-(r===e?0:1)}function Sp(e,t,r,n){let o=e,i=0,a=0,s=0,l=0;if(0!==t){l=fp(o,t-1,pp),s=o[l].offset;const e=Km(r,t-1);i=e[0],a=e[1],o.length&&o[l].size===Km(r,t)[1]&&(l-=1),o=o.slice(0,l+1)}else o=[];for(const{start:e,value:l}of Gm(r,t,1/0)){const t=e-i,r=t*a+s+t*n;o.push({index:e,offset:r,size:l}),i=e,s=r,a=l}return{lastIndex:i,lastOffset:s,lastSize:a,offsetTree:o}}function Dp(e){return{index:e.index,value:e}}function kp(e){const{endIndex:t,size:r,startIndex:n}=e;return e=>e.start===n&&(e.end===t||e.end===1/0)&&e.value===r}const Fp={offsetHeight:"height",offsetWidth:"width"},Ep=_m((([{log:e},{recalcInProgress:t}])=>{const r=Fm(),n=Fm(),o=km(n,0),i=Fm(),a=Fm(),s=Dm(0),l=Dm([]),d=Dm(void 0),c=Dm(void 0),u=Dm(((e,t)=>gp(e,Fp[t]))),h=Dm(void 0),f=Dm(0),g={groupIndices:[],groupOffsetTree:qm(),lastIndex:0,lastOffset:0,lastSize:0,offsetTree:[],sizeTree:qm()},m=km(xm(r,Sm(l,e,f),wm($p,g),pm()),g),p=km(xm(l,pm(),wm(((e,t)=>({current:t,prev:e.current})),{current:[],prev:[]}),vm((({prev:e})=>e))),[]);hm(xm(l,bm((e=>e.length>0)),Sm(m,f),vm((([e,t,r])=>{const n=e.reduce(((e,n,o)=>Zm(e,n,vp(n,t.offsetTree,r)||o)),qm());return{...t,groupIndices:e,groupOffsetTree:n}}))),m),hm(xm(n,Sm(m),bm((([e,{lastIndex:t}])=>e<t)),vm((([e,{lastIndex:t,lastSize:r}])=>[{endIndex:t,size:r,startIndex:e}]))),r),hm(d,c);const b=km(xm(d,vm((e=>void 0===e))),!0);hm(xm(c,bm((e=>void 0!==e&&Vm(um(m).sizeTree))),vm((e=>[{endIndex:0,size:e,startIndex:0}]))),r);const v=Em(xm(r,Sm(m),wm((({sizes:e},[t,r])=>({changed:r!==e,sizes:r})),{changed:!1,sizes:g}),vm((e=>e.changed))));lm(xm(s,wm(((e,t)=>({diff:e.prev-t,prev:t})),{diff:0,prev:0}),vm((e=>e.diff))),(e=>{const{groupIndices:r}=um(m);if(e>0)dm(t,!0),dm(i,e+Cp(e,r));else if(e<0){const t=um(p);t.length>0&&(e-=Cp(-e,t)),dm(a,e)}})),lm(xm(s,Sm(e)),(([e,t])=>{e<0&&t("`firstItemIndex` prop should not be set to less than zero. If you don't know the total count, just use a very high value",{firstItemIndex:s},Bm.ERROR)}));const y=Em(i);hm(xm(i,Sm(m),vm((([e,t])=>{const r=t.groupIndices.length>0,n=[],o=t.lastSize;if(r){const r=Um(t.sizeTree,0);let i=0,a=0;for(;i<e;){const e=t.groupIndices[a],s=t.groupIndices.length===a+1?1/0:t.groupIndices[a+1]-e-1;n.push({endIndex:e,size:r,startIndex:e}),n.push({endIndex:e+1+s-1,size:o,startIndex:e+1}),a++,i+=s+1}const s=Qm(t.sizeTree);return i!==e&&s.shift(),s.reduce(((t,{k:r,v:n})=>{let o=t.ranges;return 0!==t.prevSize&&(o=[...t.ranges,{endIndex:r+e-1,size:t.prevSize,startIndex:t.prevIndex}]),{prevIndex:r+e,prevSize:n,ranges:o}}),{prevIndex:e,prevSize:0,ranges:n}).ranges}return Qm(t.sizeTree).reduce(((t,{k:r,v:n})=>({prevIndex:r+e,prevSize:n,ranges:[...t.ranges,{endIndex:r+e-1,size:t.prevSize,startIndex:t.prevIndex}]})),{prevIndex:0,prevSize:o,ranges:[]}).ranges}))),r);const x=Em(xm(a,Sm(m,f),vm((([e,{offsetTree:t},r])=>vp(-e,t,r)))));return hm(xm(a,Sm(m,f),vm((([e,t,r])=>{if(t.groupIndices.length>0){if(Vm(t.sizeTree))return t;let n=qm();const o=um(p);let i=0,a=0,s=0;for(;i<-e;){s=o[a];const e=o[a+1]-s-1;a++,i+=e+1}if(n=Qm(t.sizeTree).reduce(((t,{k:r,v:n})=>Zm(t,Math.max(0,r+e),n)),n),i!==-e){n=Zm(n,0,Um(t.sizeTree,s));n=Zm(n,1,Km(t.sizeTree,1-e)[1])}return{...t,sizeTree:n,...Sp(t.offsetTree,0,n,r)}}{const n=Qm(t.sizeTree).reduce(((t,{k:r,v:n})=>Zm(t,Math.max(0,r+e),n)),qm());return{...t,sizeTree:n,...Sp(t.offsetTree,0,n,r)}}}))),m),{beforeUnshiftWith:y,data:h,defaultItemSize:c,firstItemIndex:s,fixedItemSize:d,gap:f,groupIndices:l,itemSize:u,listRefresh:v,shiftWith:a,shiftWithOffset:x,sizeRanges:r,sizes:m,statefulTotalCount:o,totalCount:n,trackItemSizes:b,unshiftWith:i}}),sm(zm,up),{singleton:!0});function _p(e){return e.reduce(((e,t)=>(e.groupIndices.push(e.totalCount),e.totalCount+=t+1,e)),{groupIndices:[],totalCount:0})}const Op=_m((([{groupIndices:e,sizes:t,totalCount:r},{headerHeight:n,scrollTop:o}])=>{const i=Fm(),a=Fm(),s=Em(xm(i,vm(_p)));return hm(xm(s,vm((e=>e.totalCount))),r),hm(xm(s,vm((e=>e.groupIndices))),e),hm(xm(Tm(o,t,n),bm((([e,t])=>mp(t))),vm((([e,t,r])=>Km(t.groupOffsetTree,Math.max(e-r,0),"v")[0])),pm(),vm((e=>[e]))),a),{groupCounts:i,topItemsIndexes:a}}),sm(Ep,Nm)),Tp=_m((([{log:e}])=>{const t=Dm(!1),r=Em(xm(t,bm((e=>e)),pm()));return lm(t,(t=>{t&&um(e)("props updated",{},Bm.DEBUG)})),{didMount:r,propsReady:t}}),sm(zm),{singleton:!0}),Ip=typeof document<"u"&&"scrollBehavior"in document.documentElement.style;function Mp(e){const t="number"==typeof e?{index:e}:e;return t.align||(t.align="start"),(!t.behavior||!Ip)&&(t.behavior="auto"),t.offset||(t.offset=0),t}const Bp=_m((([{gap:e,listRefresh:t,sizes:r,totalCount:n},{fixedFooterHeight:o,fixedHeaderHeight:i,footerHeight:a,headerHeight:s,scrollingInProgress:l,scrollTo:d,smoothScrollTargetReached:c,viewportHeight:u},{log:h}])=>{const f=Fm(),g=Fm(),m=Dm(0);let p=null,b=null,v=null;function y(){p&&(p(),p=null),v&&(v(),v=null),b&&(clearTimeout(b),b=null),dm(l,!1)}return hm(xm(f,Sm(r,u,n,m,s,a,h),Sm(e,i,o),vm((([[e,r,n,o,i,a,s,d],u,h,m])=>{const x=Mp(e),{align:w,behavior:$,offset:C}=x,S=o-1,D=xp(x,r,S);let k=vp(D,r.offsetTree,u)+a;"end"===w?(k+=h+Km(r.sizeTree,D)[1]-n+m,D===S&&(k+=s)):"center"===w?k+=(h+Km(r.sizeTree,D)[1]-n+m)/2:k-=i,C&&(k+=C);const F=t=>{y(),t?(d("retrying to scroll to",{location:e},Bm.DEBUG),dm(f,e)):(dm(g,!0),d("list did not change, scroll successful",{},Bm.DEBUG))};if(y(),"smooth"===$){let e=!1;v=lm(t,(t=>{e=e||t})),p=fm(c,(()=>{F(e)}))}else p=fm(xm(t,function(e){return t=>{const r=setTimeout((()=>{t(!1)}),e);return e=>{e&&(t(!0),clearTimeout(r))}}}(150)),F);return b=setTimeout((()=>{y()}),1200),dm(l,!0),d("scrolling from index to",{behavior:$,index:D,top:k},Bm.DEBUG),{behavior:$,top:k}}))),d),{scrollTargetReached:g,scrollToIndex:f,topListHeight:m}}),sm(Ep,Nm,zm),{singleton:!0});function Ap(e,t){0==e?t():requestAnimationFrame((()=>{Ap(e-1,t)}))}function zp(e,t){const r=t-1;return"number"==typeof e?e:"LAST"===e.index?r:e.index}const jp=_m((([{defaultItemSize:e,listRefresh:t,sizes:r},{scrollTop:n},{scrollTargetReached:o,scrollToIndex:i},{didMount:a}])=>{const s=Dm(!0),l=Dm(0),d=Dm(!0);return hm(xm(a,Sm(l),bm((([e,t])=>!!t)),ym(!1)),s),hm(xm(a,Sm(l),bm((([e,t])=>!!t)),ym(!1)),d),lm(xm(Tm(t,a),Sm(s,r,e,d),bm((([[,e],t,{sizeTree:r},n,o])=>e&&(!Vm(r)||nm(n))&&!t&&!o)),Sm(l)),(([,e])=>{fm(o,(()=>{dm(d,!0)})),Ap(4,(()=>{fm(n,(()=>{dm(s,!0)})),dm(i,e)}))})),{initialItemFinalLocationReached:d,initialTopMostItemIndex:l,scrolledToInitialItem:s}}),sm(Ep,Nm,Bp,Tp),{singleton:!0});function Lp(e,t){return Math.abs(e-t)<1.01}const Rp="up",Pp="down",Hp={atBottom:!1,notAtBottomBecause:"NOT_SHOWING_LAST_ITEM",state:{offsetBottom:0,scrollHeight:0,scrollTop:0,viewportHeight:0}},Np=_m((([{footerHeight:e,headerHeight:t,scrollBy:r,scrollContainerState:n,scrollTop:o,viewportHeight:i}])=>{const a=Dm(!1),s=Dm(!0),l=Fm(),d=Fm(),c=Dm(4),u=Dm(0),h=km(xm(Mm(xm(Im(o),$m(1),ym(!0)),xm(Im(o),$m(1),ym(!1),gm(100))),pm()),!1),f=km(xm(Mm(xm(r,ym(!0)),xm(r,ym(!1),gm(200))),pm()),!1);hm(xm(Tm(Im(o),Im(u)),vm((([e,t])=>e<=t)),pm()),s),hm(xm(s,Cm(50)),d);const g=Em(xm(Tm(n,Im(i),Im(t),Im(e),Im(c)),wm(((e,[{scrollHeight:t,scrollTop:r},n,o,i,a])=>{const s={scrollHeight:t,scrollTop:r,viewportHeight:n};if(r+n-t>-a){let t,n;return r>e.state.scrollTop?(t="SCROLLED_DOWN",n=e.state.scrollTop-r):(t="SIZE_DECREASED",n=e.state.scrollTop-r||e.scrollTopDelta),{atBottom:!0,atBottomBecause:t,scrollTopDelta:n,state:s}}let l;return l=s.scrollHeight>e.state.scrollHeight?"SIZE_INCREASED":n<e.state.viewportHeight?"VIEWPORT_HEIGHT_DECREASING":r<e.state.scrollTop?"SCROLLING_UPWARDS":"NOT_FULLY_SCROLLED_TO_LAST_ITEM_BOTTOM",{atBottom:!1,notAtBottomBecause:l,state:s}}),Hp),pm(((e,t)=>e&&e.atBottom===t.atBottom)))),m=km(xm(n,wm(((e,{scrollHeight:t,scrollTop:r,viewportHeight:n})=>{if(Lp(e.scrollHeight,t))return{changed:!1,jump:0,scrollHeight:t,scrollTop:r};{const o=t-(r+n)<1;return e.scrollTop!==r&&o?{changed:!0,jump:e.scrollTop-r,scrollHeight:t,scrollTop:r}:{changed:!0,jump:0,scrollHeight:t,scrollTop:r}}}),{changed:!1,jump:0,scrollHeight:0,scrollTop:0}),bm((e=>e.changed)),vm((e=>e.jump))),0);hm(xm(g,vm((e=>e.atBottom))),a),hm(xm(a,Cm(50)),l);const p=Dm(Pp);hm(xm(n,vm((({scrollTop:e})=>e)),pm(),wm(((e,t)=>um(f)?{direction:e.direction,prevScrollTop:t}:{direction:t<e.prevScrollTop?Rp:Pp,prevScrollTop:t}),{direction:Pp,prevScrollTop:0}),vm((e=>e.direction))),p),hm(xm(n,Cm(50),ym("none")),p);const b=Dm(0);return hm(xm(h,bm((e=>!e)),ym(0)),b),hm(xm(o,Cm(100),Sm(h),bm((([e,t])=>!!t)),wm((([e,t],[r])=>[t,r]),[0,0]),vm((([e,t])=>t-e))),b),{atBottomState:g,atBottomStateChange:l,atBottomThreshold:c,atTopStateChange:d,atTopThreshold:u,isAtBottom:a,isAtTop:s,isScrolling:h,lastJumpDueToItemResize:m,scrollDirection:p,scrollVelocity:b}}),sm(Nm)),Wp="top",Yp="bottom",Vp="none";function Up(e,t,r){return"number"==typeof e?r===Rp&&t===Wp||r===Pp&&t===Yp?e:0:r===Rp?t===Wp?e.main:e.reverse:t===Yp?e.main:e.reverse}function Kp(e,t){var r;return"number"==typeof e?e:null!=(r=e[t])?r:0}const Zp=_m((([{deviation:e,fixedHeaderHeight:t,headerHeight:r,scrollTop:n,viewportHeight:o}])=>{const i=Fm(),a=Dm(0),s=Dm(0),l=Dm(0),d=km(xm(Tm(Im(n),Im(o),Im(r),Im(i,cp),Im(l),Im(a),Im(t),Im(e),Im(s)),vm((([e,t,r,[n,o],i,a,s,l,d])=>{const c=e-l,u=a+s,h=Math.max(r-c,0);let f=Vp;const g=Kp(d,Wp),m=Kp(d,Yp);return n-=l,o+=r+s,(n+=r+s)>e+u-g&&(f=Rp),(o-=l)<e-h+t+m&&(f=Pp),f!==Vp?[Math.max(c-r-Up(i,Wp,f)-g,0),c-h-s+t+Up(i,Yp,f)+m]:null})),bm((e=>null!=e)),pm(cp)),[0,0]);return{increaseViewportBy:s,listBoundary:i,overscan:l,topListHeight:a,visibleRange:d}}),sm(Nm),{singleton:!0});const qp={bottom:0,firstItemIndex:0,items:[],offsetBottom:0,offsetTop:0,top:0,topItems:[],topListHeight:0,totalCount:0};function Gp(e,t,r,n,o,i){const{lastIndex:a,lastOffset:s,lastSize:l}=o;let d=0,c=0;if(e.length>0){d=e[0].offset;const t=e[e.length-1];c=t.offset+t.size}const u=r-a,h=d,f=s+u*l+(u-1)*n-c;return{bottom:c,firstItemIndex:i,items:Qp(e,o,i),offsetBottom:f,offsetTop:d,top:h,topItems:Qp(t,o,i),topListHeight:t.reduce(((e,t)=>t.size+e),0),totalCount:r}}function Xp(e,t,r,n,o,i){let a=0;if(r.groupIndices.length>0)for(const t of r.groupIndices){if(t-a>=e)break;a++}const s=e+a,l=zp(t,s);return Gp(Array.from({length:s}).map(((e,t)=>({data:i[t+l],index:t+l,offset:0,size:0}))),[],s,o,r,n)}function Qp(e,t,r){if(0===e.length)return[];if(!mp(t))return e.map((e=>({...e,index:e.index+r,originalIndex:e.index})));const n=e[0].index,o=e[e.length-1].index,i=[],a=Gm(t.groupOffsetTree,n,o);let s,l=0;for(const n of e){let e;(!s||s.end<n.index)&&(s=a.shift(),l=t.groupIndices.indexOf(s.start)),e=n.index===s.start?{index:l,type:"group"}:{groupIndex:l,index:n.index-(l+1)+r},i.push({...e,data:n.data,offset:n.offset,originalIndex:n.index,size:n.size})}return i}const Jp=_m((([{data:e,firstItemIndex:t,gap:r,sizes:n,totalCount:o},i,{listBoundary:a,topListHeight:s,visibleRange:l},{initialTopMostItemIndex:d,scrolledToInitialItem:c},{topListHeight:u},h,{didMount:f},{recalcInProgress:g}])=>{const m=Dm([]),p=Dm(0),b=Fm();hm(i.topItemsIndexes,m);const v=km(xm(Tm(f,g,Im(l,cp),Im(o),Im(n),Im(d),c,Im(m),Im(t),Im(r),e),bm((([e,t,,r,,,,,,,n])=>{const o=n&&n.length!==r;return e&&!t&&!o})),vm((([,,[e,t],r,n,o,i,a,s,l,d])=>{const c=n,{offsetTree:u,sizeTree:h}=c,f=um(p);if(0===r)return{...qp,totalCount:r};if(0===e&&0===t)return 0===f?{...qp,totalCount:r}:Xp(f,o,n,s,l,d||[]);if(Vm(h))return f>0?null:Gp(function(e,t,r){if(mp(t)){const n=yp(e,t);return[{index:Km(t.groupOffsetTree,n)[0],offset:0,size:0},{data:null==r?void 0:r[0],index:n,offset:0,size:0}]}return[{data:null==r?void 0:r[0],index:e,offset:0,size:0}]}(zp(o,r),c,d),[],r,l,c,s);const g=[];if(a.length>0){const e=a[0],t=a[a.length-1];let r=0;for(const n of Gm(h,e,t)){const o=n.value,i=Math.max(n.start,e),a=Math.min(n.end,t);for(let e=i;e<=a;e++)g.push({data:null==d?void 0:d[e],index:e,offset:r,size:o}),r+=o}}if(!i)return Gp([],g,r,l,c,s);const m=a.length>0?a[a.length-1]+1:0,b=wp(u,e,t,m);if(0===b.length)return null;const v=r-1;return Gp(im([],(r=>{for(const n of b){const o=n.value;let i=o.offset,a=n.start;const s=o.size;if(o.offset<e){a+=Math.floor((e-o.offset+l)/(s+l));const t=a-n.start;i+=t*s+t*l}a<m&&(i+=(m-a)*s,a=m);const c=Math.min(n.end,v);for(let e=a;e<=c&&!(i>=t);e++)r.push({data:null==d?void 0:d[e],index:e,offset:i,size:s}),i+=s+l}})),g,r,l,c,s)})),bm((e=>null!==e)),pm()),qp);hm(xm(e,bm(nm),vm((e=>null==e?void 0:e.length))),o),hm(xm(v,vm((e=>e.topListHeight))),u),hm(u,s),hm(xm(v,vm((e=>[e.top,e.bottom]))),a),hm(xm(v,vm((e=>e.items))),b);const y=Em(xm(v,bm((({items:e})=>e.length>0)),Sm(o,e),bm((([{items:e},t])=>e[e.length-1].originalIndex===t-1)),vm((([,e,t])=>[e-1,t])),pm(cp),vm((([e])=>e)))),x=Em(xm(v,Cm(200),bm((({items:e,topItems:t})=>e.length>0&&e[0].originalIndex===t.length)),vm((({items:e})=>e[0].index)),pm())),w=Em(xm(v,bm((({items:e})=>e.length>0)),vm((({items:e})=>{let t=0,r=e.length-1;for(;"group"===e[t].type&&t<r;)t++;for(;"group"===e[r].type&&r>t;)r--;return{endIndex:e[r].index,startIndex:e[t].index}})),pm(dp)));return{endReached:y,initialItemCount:p,itemsRendered:b,listState:v,rangeChanged:w,startReached:x,topItemsIndexes:m,...h}}),sm(Ep,Op,Zp,jp,Bp,Np,Tp,up),{singleton:!0}),eb=_m((([{fixedFooterHeight:e,fixedHeaderHeight:t,footerHeight:r,headerHeight:n},{listState:o}])=>{const i=Fm(),a=km(xm(Tm(r,e,n,t,o),vm((([e,t,r,n,o])=>e+t+r+n+o.offsetBottom+o.bottom))),0);return hm(Im(a),i),{totalListHeight:a,totalListHeightChanged:i}}),sm(Nm,Jp),{singleton:!0}),tb=_m((([{viewportHeight:e},{totalListHeight:t}])=>{const r=Dm(!1),n=km(xm(Tm(r,e,t),bm((([e])=>e)),vm((([,e,t])=>Math.max(0,e-t))),Cm(0),pm()),0);return{alignToBottom:r,paddingTopAddition:n}}),sm(Nm,eb),{singleton:!0});function rb(e){return!!e&&("smooth"===e?"smooth":"auto")}const nb=_m((([{listRefresh:e,totalCount:t},{atBottomState:r,isAtBottom:n},{scrollToIndex:o},{scrolledToInitialItem:i},{didMount:a,propsReady:s},{log:l},{scrollingInProgress:d}])=>{const c=Dm(!1),u=Fm();let h=null;function f(e){dm(o,{align:"end",behavior:e,index:"LAST"})}function g(e){const t=fm(r,(t=>{e&&!t.atBottom&&"SIZE_INCREASED"===t.notAtBottomBecause&&!h&&(um(l)("scrolling to bottom due to increased size",{},Bm.DEBUG),f("auto"))}));setTimeout(t,100)}return lm(xm(Tm(xm(Im(t),$m(1)),a),Sm(Im(c),n,i,d),vm((([[e,t],r,n,o,i])=>{let a=t&&o,s="auto";return a&&(s=((e,t)=>"function"==typeof e?rb(e(t)):t&&rb(e))(r,n||i),a=a&&!!s),{followOutputBehavior:s,shouldFollow:a,totalCount:e}})),bm((({shouldFollow:e})=>e))),(({followOutputBehavior:t,totalCount:r})=>{h&&(h(),h=null),h=fm(e,(()=>{um(l)("following output to ",{totalCount:r},Bm.DEBUG),f(t),h=null}))})),lm(xm(Tm(Im(c),t,s),bm((([e,,t])=>e&&t)),wm((({value:e},[,t])=>({refreshed:e===t,value:t})),{refreshed:!1,value:0}),bm((({refreshed:e})=>e)),Sm(c,t)),(([,e])=>{um(i)&&g(!1!==e)})),lm(u,(()=>{g(!1!==um(c))})),lm(Tm(Im(c),r),(([e,t])=>{e&&!t.atBottom&&"VIEWPORT_HEIGHT_DECREASING"===t.notAtBottomBecause&&f("auto")})),{autoscrollToBottom:u,followOutput:c}}),sm(Ep,Np,Bp,jp,Tp,zm,Nm)),ob=_m((([{data:e,firstItemIndex:t,gap:r,sizes:n},{initialTopMostItemIndex:o},{initialItemCount:i,listState:a},{didMount:s}])=>(hm(xm(s,Sm(i),bm((([,e])=>0!==e)),Sm(o,n,t,r,e),vm((([[,e],t,r,n,o,i=[]])=>Xp(e,t,r,n,o,i)))),a),{})),sm(Ep,jp,Jp,Tp),{singleton:!0}),ib=_m((([{didMount:e},{scrollTo:t},{listState:r}])=>{const n=Dm(0);return lm(xm(e,Sm(n),bm((([,e])=>0!==e)),vm((([,e])=>({top:e})))),(e=>{fm(xm(r,$m(1),bm((e=>e.items.length>1))),(()=>{requestAnimationFrame((()=>{dm(t,e)}))}))})),{initialScrollTop:n}}),sm(Tp,Nm,Jp),{singleton:!0}),ab=({itemBottom:e,itemTop:t,locationParams:{align:r,behavior:n,...o},viewportBottom:i,viewportTop:a})=>t<a?{...o,align:null!=r?r:"start",behavior:n}:e>i?{...o,align:null!=r?r:"end",behavior:n}:null,sb=_m((([{gap:e,sizes:t,totalCount:r},{fixedFooterHeight:n,fixedHeaderHeight:o,headerHeight:i,scrollingInProgress:a,scrollTop:s,viewportHeight:l},{scrollToIndex:d}])=>{const c=Fm();return hm(xm(c,Sm(t,l,r,i,o,n,s),Sm(e),vm((([[e,t,r,n,o,i,s,l],d])=>{const{align:c,behavior:u,calculateViewLocation:h=ab,done:f,...g}=e,m=xp(e,t,n-1),p=vp(m,t.offsetTree,d)+o+i,b=h({itemBottom:p+Km(t.sizeTree,m)[1],itemTop:p,locationParams:{align:c,behavior:u,...g},viewportBottom:l+r-s,viewportTop:l+i});return b?f&&fm(xm(a,bm((e=>!e)),$m(um(a)?1:2)),f):f&&f(),b})),bm((e=>null!==e))),d),{scrollIntoView:c}}),sm(Ep,Nm,Bp,Jp,zm),{singleton:!0}),lb=_m((([{scrollVelocity:e}])=>{const t=Dm(!1),r=Fm(),n=Dm(!1);return hm(xm(e,Sm(n,t,r),bm((([e,t])=>!!t)),vm((([e,t,r,n])=>{const{enter:o,exit:i}=t;if(r){if(i(e,n))return!1}else if(o(e,n))return!0;return r})),pm()),t),lm(xm(Tm(t,e,r),Sm(n)),(([[e,t,r],n])=>{e&&n&&n.change&&n.change(t,r)})),{isSeeking:t,scrollSeekConfiguration:n,scrollSeekRangeChanged:r,scrollVelocity:e}}),sm(Np),{singleton:!0}),db=_m((([{scrollContainerState:e,scrollTo:t}])=>{const r=Fm(),n=Fm(),o=Fm(),i=Dm(!1),a=Dm(void 0);return hm(xm(Tm(r,n),vm((([{scrollHeight:e,scrollTop:t,viewportHeight:r},{offsetTop:n}])=>({scrollHeight:e,scrollTop:Math.max(0,t-n),viewportHeight:r})))),e),hm(xm(t,Sm(n),vm((([e,{offsetTop:t}])=>({...e,top:e.top+t})))),o),{customScrollParent:a,useWindowScroll:i,windowScrollContainerState:r,windowScrollTo:o,windowViewportRect:n}}),sm(Nm)),cb=_m((([{sizeRanges:e,sizes:t},{headerHeight:r,scrollTop:n},{initialTopMostItemIndex:o},{didMount:i},{useWindowScroll:a,windowScrollContainerState:s,windowViewportRect:l}])=>{const d=Fm(),c=Dm(void 0),u=Dm(null),h=Dm(null);return hm(s,u),hm(l,h),lm(xm(d,Sm(t,n,a,u,h,r)),(([e,t,r,n,o,i,a])=>{const s=function(e){return Qm(e).map((({k:e,v:t},r,n)=>{const o=n[r+1];return{endIndex:o?o.k-1:1/0,size:t,startIndex:e}}))}(t.sizeTree);n&&null!==o&&null!==i&&(r=o.scrollTop-i.offsetTop),e({ranges:s,scrollTop:r-=a})})),hm(xm(c,bm(nm),vm(ub)),o),hm(xm(i,Sm(c),bm((([,e])=>void 0!==e)),pm(),vm((([,e])=>e.ranges))),e),{getState:d,restoreStateFrom:c}}),sm(Ep,Nm,jp,Tp,db));function ub(e){return{align:"start",index:0,offset:e.scrollTop}}const hb=_m((([{topItemsIndexes:e}])=>{const t=Dm(0);return hm(xm(t,bm((e=>e>=0)),vm((e=>Array.from({length:e}).map(((e,t)=>t))))),e),{topItemCount:t}}),sm(Jp));function fb(e){let t,r=!1;return()=>(r||(r=!0,t=e()),t)}const gb=fb((()=>/iP(ad|od|hone)/i.test(navigator.userAgent)&&/WebKit/i.test(navigator.userAgent))),mb=_m((([{deviation:e,scrollBy:t,scrollingInProgress:r,scrollTop:n},{isAtBottom:o,isScrolling:i,lastJumpDueToItemResize:a,scrollDirection:s},{listState:l},{beforeUnshiftWith:d,gap:c,shiftWithOffset:u,sizes:h},{log:f},{recalcInProgress:g}])=>{const m=Em(xm(l,Sm(a),wm((([,e,t,r],[{bottom:n,items:o,offsetBottom:i,totalCount:a},s])=>{const l=n+i;let d=0;return t===a&&e.length>0&&o.length>0&&(0===o[0].originalIndex&&0===e[0].originalIndex||(d=l-r,0!==d&&(d+=s))),[d,o,a,l]}),[0,[],0,0]),bm((([e])=>0!==e)),Sm(n,s,r,o,f,g),bm((([,e,t,r,,,n])=>!n&&!r&&0!==e&&t===Rp)),vm((([[e],,,,,t])=>(t("Upward scrolling compensation",{amount:e},Bm.DEBUG),e)))));function p(r){r>0?(dm(t,{behavior:"auto",top:-r}),dm(e,0)):(dm(e,0),dm(t,{behavior:"auto",top:-r}))}return lm(xm(m,Sm(e,i)),(([t,r,n])=>{n&&gb()?dm(e,r-t):p(-t)})),lm(xm(Tm(km(i,!1),e,g),bm((([e,t,r])=>!e&&!r&&0!==t)),vm((([e,t])=>t)),Cm(1)),p),hm(xm(u,vm((e=>({top:-e})))),t),lm(xm(d,Sm(h,c),vm((([e,{groupIndices:t,lastSize:r,sizeTree:n},o])=>{function i(e){return e*(r+o)}if(0===t.length)return i(e);{let r=0;const o=Um(n,0);let a=0,s=0;for(;a<e;){a++,r+=o;let n=t.length===s+1?1/0:t[s+1]-t[s]-1;a+n>e&&(r-=o,n=e-a+1),a+=n,r+=i(n),s++}return r}}))),(r=>{dm(e,r),requestAnimationFrame((()=>{dm(t,{top:r}),requestAnimationFrame((()=>{dm(e,0),dm(g,!1)}))}))})),{deviation:e}}),sm(Nm,Np,Jp,Ep,zm,up)),pb=_m((([e,t,r,n,o,i,a,s,l,d])=>({...e,...t,...r,...n,...o,...i,...a,...s,...l,...d})),sm(Zp,ob,Tp,lb,eb,ib,tb,db,sb,zm)),bb=_m((([{data:e,defaultItemSize:t,firstItemIndex:r,fixedItemSize:n,gap:o,groupIndices:i,itemSize:a,sizeRanges:s,sizes:l,statefulTotalCount:d,totalCount:c,trackItemSizes:u},{initialItemFinalLocationReached:h,initialTopMostItemIndex:f,scrolledToInitialItem:g},m,p,b,{listState:v,topItemsIndexes:y,...x},{scrollToIndex:w},$,{topItemCount:C},{groupCounts:S},D])=>(hm(x.rangeChanged,D.scrollSeekRangeChanged),hm(xm(D.windowViewportRect,vm((e=>e.visibleHeight))),m.viewportHeight),{data:e,defaultItemHeight:t,firstItemIndex:r,fixedItemHeight:n,gap:o,groupCounts:S,initialItemFinalLocationReached:h,initialTopMostItemIndex:f,scrolledToInitialItem:g,sizeRanges:s,topItemCount:C,topItemsIndexes:y,totalCount:c,...b,groupIndices:i,itemSize:a,listState:v,scrollToIndex:w,statefulTotalCount:d,trackItemSizes:u,...x,...D,...m,sizes:l,...p})),sm(Ep,jp,Nm,cb,nb,Jp,Bp,mb,hb,Op,pb));function vb(e,t){const r={},n={};let o=0;const i=e.length;for(;o<i;)n[e[o]]=1,o+=1;for(const e in t)Object.hasOwn(n,e)||(r[e]=t[e]);return r}const yb=typeof document<"u"?o.useLayoutEffect:o.useEffect;function xb(t,r,n){const i=Object.keys(r.required||{}),a=Object.keys(r.optional||{}),s=Object.keys(r.methods||{}),l=Object.keys(r.events||{}),d=o.createContext({});function c(e,t){e.propsReady&&dm(e.propsReady,!1);for(const n of i){dm(e[r.required[n]],t[n])}for(const n of a)if(n in t){dm(e[r.optional[n]],t[n])}e.propsReady&&dm(e.propsReady,!0)}function u(e){return l.reduce(((t,n)=>(t[n]=function(e){let t,r;const n=()=>null==t?void 0:t();return function(o,i){switch(o){case 1:return i?r===i?void 0:(n(),r=i,t=lm(e,i),t):(n(),om);case 2:return n(),void(r=null)}}}(e[r.events[n]]),t)),{})}const h=o.forwardRef(((h,f)=>{const{children:g,...m}=h,[p]=o.useState((()=>im(function(e){const t=new Map,r=({constructor:e,dependencies:n,id:o,singleton:i})=>{if(i&&t.has(o))return t.get(o);const a=e(n.map((e=>r(e))));return i&&t.set(o,a),a};return r(e)}(t),(e=>{c(e,m)})))),[b]=o.useState(tm(u,p));yb((()=>{for(const e of l)e in m&&lm(b[e],m[e]);return()=>{Object.values(b).map(cm)}}),[m,b,p]),yb((()=>{c(p,m)})),o.useImperativeHandle(f,Qg(function(e){return s.reduce(((t,n)=>(t[n]=t=>{dm(e[r.methods[n]],t)},t)),{})}(p)));const v=n;return e(d.Provider,{value:p,children:n?e(v,{...vb([...i,...a,...l],m),children:g}):g})})),f=o.version.startsWith("18")?e=>{const t=o.useContext(d)[e],r=o.useCallback((e=>lm(t,e)),[t]);return o.useSyncExternalStore(r,(()=>um(t)),(()=>um(t)))}:e=>{const t=o.useContext(d)[e],[r,n]=o.useState(tm(um,t));return yb((()=>lm(t,(e=>{e!==r&&n(Qg(e))}))),[t,r]),r};return{Component:h,useEmitter:(e,t)=>{const r=o.useContext(d)[e];yb((()=>lm(r,t)),[t,r])},useEmitterValue:f,usePublisher:e=>o.useCallback(rm(dm,o.useContext(d)[e]),[e])}}const wb=o.createContext(void 0),$b=o.createContext(void 0),Cb=typeof document<"u"?o.useLayoutEffect:o.useEffect;function Sb(e,t,r,n=om,i,a){const s=o.useRef(null),l=o.useRef(null),d=o.useRef(null),c=o.useCallback((r=>{const n=r.target,o=n===window||n===document,i=a?o?window.pageXOffset||document.documentElement.scrollLeft:n.scrollLeft:o?window.pageYOffset||document.documentElement.scrollTop:n.scrollTop,s=a?o?document.documentElement.scrollWidth:n.scrollWidth:o?document.documentElement.scrollHeight:n.scrollHeight,c=a?o?window.innerWidth:n.offsetWidth:o?window.innerHeight:n.offsetHeight,u=()=>{e({scrollHeight:s,scrollTop:Math.max(i,0),viewportHeight:c})};r.suppressFlushSync?u():ee.flushSync(u),null!==l.current&&(i===l.current||i<=0||i===s-c)&&(l.current=null,t(!0),d.current&&(clearTimeout(d.current),d.current=null))}),[e,t]);return o.useEffect((()=>{const e=i||s.current;return n(i||s.current),c({suppressFlushSync:!0,target:e}),e.addEventListener("scroll",c,{passive:!0}),()=>{n(null),e.removeEventListener("scroll",c)}}),[s,c,r,n,i]),{scrollByCallback:function(e){a&&(e={behavior:e.behavior,left:e.top}),s.current.scrollBy(e)},scrollerRef:s,scrollToCallback:function(r){const n=s.current;if(!n||(a?"offsetWidth"in n&&0===n.offsetWidth:"offsetHeight"in n&&0===n.offsetHeight))return;const o="smooth"===r.behavior;let i,c,u;n===window?(c=Math.max(gp(document.documentElement,a?"width":"height"),a?document.documentElement.scrollWidth:document.documentElement.scrollHeight),i=a?window.innerWidth:window.innerHeight,u=a?document.documentElement.scrollLeft:document.documentElement.scrollTop):(c=n[a?"scrollWidth":"scrollHeight"],i=gp(n,a?"width":"height"),u=n[a?"scrollLeft":"scrollTop"]);const h=c-i;if(r.top=Math.ceil(Math.max(Math.min(h,r.top),0)),Lp(i,c)||r.top===u)return e({scrollHeight:c,scrollTop:u,viewportHeight:i}),void(o&&t(!0));o?(l.current=r.top,d.current&&clearTimeout(d.current),d.current=setTimeout((()=>{d.current=null,l.current=null,t(!0)}),1e3)):l.current=null,a&&(r={behavior:r.behavior,left:r.top}),n.scrollTo(r)}}}const Db="-webkit-sticky",kb="sticky",Fb=fb((()=>{if(typeof document>"u")return kb;const e=document.createElement("div");return e.style.position=Db,e.style.position===Db?Db:kb}));function Eb(e){return e}const _b=_m((()=>{const e=Dm((e=>`Item ${e}`)),t=Dm(null),r=Dm((e=>`Group ${e}`)),n=Dm({}),o=Dm(Eb),i=Dm("div"),a=Dm(om),s=(e,t=null)=>km(xm(n,vm((t=>t[e])),pm()),t);return{components:n,computeItemKey:o,context:t,EmptyPlaceholder:s("EmptyPlaceholder"),FooterComponent:s("Footer"),GroupComponent:s("Group","div"),groupContent:r,HeaderComponent:s("Header"),HeaderFooterTag:i,ItemComponent:s("Item","div"),itemContent:e,ListComponent:s("List","div"),ScrollerComponent:s("Scroller","div"),scrollerRef:a,ScrollSeekPlaceholder:s("ScrollSeekPlaceholder"),TopItemListComponent:s("TopItemList")}})),Ob=_m((([e,t])=>({...e,...t})),sm(bb,_b)),Tb=({height:t})=>e("div",{style:{height:t}}),Ib={overflowAnchor:"none",position:Fb(),zIndex:1},Mb={overflowAnchor:"none"},Bb={...Mb,display:"inline-block",height:"100%"},Ab=o.memo((function({showTopList:t=!1}){const r=Qb("listState"),n=Jb("sizeRanges"),i=Qb("useWindowScroll"),a=Qb("customScrollParent"),s=Jb("windowScrollContainerState"),l=Jb("scrollContainerState"),d=a||i?s:l,c=Qb("itemContent"),u=Qb("context"),h=Qb("groupContent"),f=Qb("trackItemSizes"),g=Qb("itemSize"),m=Qb("log"),p=Jb("gap"),b=Qb("horizontalDirection"),{callbackRef:v}=Rm(n,g,f,t?om:d,m,p,a,b,Qb("skipAnimationFrameInResizeObserver")),[y,x]=o.useState(0);Xb("deviation",(e=>{y!==e&&x(e)}));const w=Qb("EmptyPlaceholder"),$=Qb("ScrollSeekPlaceholder")||Tb,S=Qb("ListComponent"),D=Qb("ItemComponent"),k=Qb("GroupComponent"),F=Qb("computeItemKey"),E=Qb("isSeeking"),_=Qb("groupIndices").length>0,O=Qb("alignToBottom"),T=Qb("initialItemFinalLocationReached"),I=t?{}:{boxSizing:"border-box",...b?{display:"inline-block",height:"100%",marginLeft:0!==y?y:O?"auto":0,paddingLeft:r.offsetTop,paddingRight:r.offsetBottom,whiteSpace:"nowrap"}:{marginTop:0!==y?y:O?"auto":0,paddingBottom:r.offsetBottom,paddingTop:r.offsetTop},...T?{}:{visibility:"hidden"}};return!t&&0===r.totalCount&&w?e(w,{...Pb(w,u)}):e(S,{...Pb(S,u),"data-testid":t?"virtuoso-top-item-list":"virtuoso-item-list",ref:v,style:I,children:(t?r.topItems:r.items).map((e=>{const t=e.originalIndex,n=F(t+r.firstItemIndex,e.data,u);return E?C($,{...Pb($,u),height:e.size,index:e.index,key:n,type:e.type||"item",..."group"===e.type?{}:{groupIndex:e.groupIndex}}):"group"===e.type?C(k,{...Pb(k,u),"data-index":t,"data-item-index":e.index,"data-known-size":e.size,key:n,style:Ib},h(e.index,u)):C(D,{...Pb(D,u),...Hb(D,e.data),"data-index":t,"data-item-group-index":e.groupIndex,"data-item-index":e.index,"data-known-size":e.size,key:n,style:b?Bb:Mb},_?c(e.index,e.groupIndex,e.data,u):c(e.index,e.data,u))}))})})),zb={height:"100%",outline:"none",overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},jb={outline:"none",overflowX:"auto",position:"relative"},Lb=e=>({height:"100%",position:"absolute",top:0,width:"100%",...e?{display:"flex",flexDirection:"column"}:{}}),Rb={position:Fb(),top:0,width:"100%",zIndex:1};function Pb(e,t){if("string"!=typeof e)return{context:t}}function Hb(e,t){return{item:"string"==typeof e?void 0:t}}const Nb=o.memo((function(){const t=Qb("HeaderComponent"),r=Jb("headerHeight"),n=Qb("HeaderFooterTag"),i=jm(o.useMemo((()=>e=>{r(gp(e,"height"))}),[r]),!0,Qb("skipAnimationFrameInResizeObserver")),a=Qb("context");return t?e(n,{ref:i,children:e(t,{...Pb(t,a)})}):null})),Wb=o.memo((function(){const t=Qb("FooterComponent"),r=Jb("footerHeight"),n=Qb("HeaderFooterTag"),i=jm(o.useMemo((()=>e=>{r(gp(e,"height"))}),[r]),!0,Qb("skipAnimationFrameInResizeObserver")),a=Qb("context");return t?e(n,{ref:i,children:e(t,{...Pb(t,a)})}):null}));function Yb({useEmitter:t,useEmitterValue:r,usePublisher:n}){return o.memo((function({children:o,style:i,...a}){const s=n("scrollContainerState"),l=r("ScrollerComponent"),d=n("smoothScrollTargetReached"),c=r("scrollerRef"),u=r("context"),h=r("horizontalDirection")||!1,{scrollByCallback:f,scrollerRef:g,scrollToCallback:m}=Sb(s,d,l,c,void 0,h);return t("scrollTo",m),t("scrollBy",f),e(l,{"data-testid":"virtuoso-scroller","data-virtuoso-scroller":!0,ref:g,style:{...h?jb:zb,...i},tabIndex:0,...a,...Pb(l,u),children:o})}))}function Vb({useEmitter:t,useEmitterValue:r,usePublisher:n}){return o.memo((function({children:o,style:i,...a}){const s=n("windowScrollContainerState"),l=r("ScrollerComponent"),d=n("smoothScrollTargetReached"),c=r("totalListHeight"),u=r("deviation"),h=r("customScrollParent"),f=r("context"),{scrollByCallback:g,scrollerRef:m,scrollToCallback:p}=Sb(s,d,l,om,h);return Cb((()=>(m.current=h||window,()=>{m.current=null})),[m,h]),t("windowScrollTo",p),t("scrollBy",g),e(l,{"data-virtuoso-scroller":!0,style:{position:"relative",...i,...0!==c?{height:c+u}:{}},...a,...Pb(l,f),children:o})}))}const Ub=({children:t})=>{const r=o.useContext(wb),n=Jb("viewportHeight"),i=Jb("fixedItemHeight"),a=Qb("alignToBottom"),s=Qb("horizontalDirection"),l=jm(o.useMemo((()=>em(n,(e=>gp(e,s?"width":"height")))),[n,s]),!0,Qb("skipAnimationFrameInResizeObserver"));return o.useEffect((()=>{r&&(n(r.viewportHeight),i(r.itemHeight))}),[r,n,i]),e("div",{"data-viewport-type":"element",ref:l,style:Lb(a),children:t})},Kb=({children:t})=>{const r=o.useContext(wb),n=Jb("windowViewportRect"),i=Jb("fixedItemHeight"),a=Qb("customScrollParent"),s=Hm(n,a,Qb("skipAnimationFrameInResizeObserver")),l=Qb("alignToBottom");return o.useEffect((()=>{r&&(i(r.itemHeight),n({offsetTop:0,visibleHeight:r.viewportHeight,visibleWidth:100}))}),[r,n,i]),e("div",{"data-viewport-type":"window",ref:s,style:Lb(l),children:t})},Zb=({children:t})=>{const r=Qb("TopItemListComponent")||"div",n=Qb("headerHeight"),o={...Rb,marginTop:`${n}px`},i=Qb("context");return e(r,{style:o,...Pb(r,i),children:t})},qb=o.memo((function(r){const n=Qb("useWindowScroll"),o=Qb("topItemsIndexes").length>0,i=Qb("customScrollParent"),a=Qb("context"),s=i||n?tv:ev,l=i||n?Kb:Ub;return t(s,{...r,...Pb(s,a),children:[o&&e(Zb,{children:e(Ab,{showTopList:!0})}),t(l,{children:[e(Nb,{}),e(Ab,{}),e(Wb,{})]})]})})),{Component:Gb,useEmitter:Xb,useEmitterValue:Qb,usePublisher:Jb}=xb(Ob,{events:{atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",endReached:"endReached",groupIndices:"groupIndices",isScrolling:"isScrolling",itemsRendered:"itemsRendered",rangeChanged:"rangeChanged",startReached:"startReached",totalListHeightChanged:"totalListHeightChanged"},methods:{autoscrollToBottom:"autoscrollToBottom",getState:"getState",scrollBy:"scrollBy",scrollIntoView:"scrollIntoView",scrollTo:"scrollTo",scrollToIndex:"scrollToIndex"},optional:{alignToBottom:"alignToBottom",atBottomThreshold:"atBottomThreshold",atTopThreshold:"atTopThreshold",components:"components",computeItemKey:"computeItemKey",context:"context",customScrollParent:"customScrollParent",data:"data",defaultItemHeight:"defaultItemHeight",firstItemIndex:"firstItemIndex",fixedItemHeight:"fixedItemHeight",followOutput:"followOutput",groupContent:"groupContent",groupCounts:"groupCounts",headerFooterTag:"HeaderFooterTag",horizontalDirection:"horizontalDirection",increaseViewportBy:"increaseViewportBy",initialItemCount:"initialItemCount",initialScrollTop:"initialScrollTop",initialTopMostItemIndex:"initialTopMostItemIndex",itemContent:"itemContent",itemSize:"itemSize",logLevel:"logLevel",overscan:"overscan",restoreStateFrom:"restoreStateFrom",scrollerRef:"scrollerRef",scrollSeekConfiguration:"scrollSeekConfiguration",skipAnimationFrameInResizeObserver:"skipAnimationFrameInResizeObserver",topItemCount:"topItemCount",totalCount:"totalCount",useWindowScroll:"useWindowScroll"},required:{}},qb),ev=Yb({useEmitter:Xb,useEmitterValue:Qb,usePublisher:Jb}),tv=Vb({useEmitter:Xb,useEmitterValue:Qb,usePublisher:Jb}),rv=Gb,nv={bottom:0,itemHeight:0,items:[],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},ov={bottom:0,itemHeight:0,items:[{index:0}],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},{ceil:iv,floor:av,max:sv,min:lv,round:dv}=Math;function cv(e,t,r){return Array.from({length:t-e+1}).map(((t,n)=>({data:null===r?null:r[n+e],index:n+e})))}function uv(e,t){return e&&e.width===t.width&&e.height===t.height}function hv(e,t){return e&&e.column===t.column&&e.row===t.row}const fv=_m((([{increaseViewportBy:e,listBoundary:t,overscan:r,visibleRange:n},{footerHeight:o,headerHeight:i,scrollBy:a,scrollContainerState:s,scrollTo:l,scrollTop:d,smoothScrollTargetReached:c,viewportHeight:u},h,f,{didMount:g,propsReady:m},{customScrollParent:p,useWindowScroll:b,windowScrollContainerState:v,windowScrollTo:y,windowViewportRect:x},w])=>{const $=Dm(0),C=Dm(0),S=Dm(nv),D=Dm({height:0,width:0}),k=Dm({height:0,width:0}),F=Fm(),E=Fm(),_=Dm(0),O=Dm(null),T=Dm({column:0,row:0}),I=Fm(),M=Fm(),B=Dm(!1),A=Dm(0),z=Dm(!0),j=Dm(!1),L=Dm(!1);lm(xm(g,Sm(A),bm((([e,t])=>!!t))),(()=>{dm(z,!1)})),lm(xm(Tm(g,z,k,D,A,j),bm((([e,t,r,n,,o])=>e&&!t&&0!==r.height&&0!==n.height&&!o))),(([,,,,e])=>{dm(j,!0),Ap(1,(()=>{dm(F,e)})),fm(xm(d),(()=>{dm(t,[0,0]),dm(z,!0)}))})),hm(xm(M,bm((e=>null!=e&&e.scrollTop>0)),ym(0)),C),lm(xm(g,Sm(M),bm((([,e])=>null!=e))),(([,e])=>{e&&(dm(D,e.viewport),dm(k,e.item),dm(T,e.gap),e.scrollTop>0&&(dm(B,!0),fm(xm(d,$m(1)),(e=>{dm(B,!1)})),dm(l,{top:e.scrollTop})))})),hm(xm(D,vm((({height:e})=>e))),u),hm(xm(Tm(Im(D,uv),Im(k,uv),Im(T,((e,t)=>e&&e.column===t.column&&e.row===t.row)),Im(d)),vm((([e,t,r,n])=>({gap:r,item:t,scrollTop:n,viewport:e})))),I),hm(xm(Tm(Im($),n,Im(T,hv),Im(k,uv),Im(D,uv),Im(O),Im(C),Im(B),Im(z),Im(A)),bm((([,,,,,,,e])=>!e)),vm((([e,[t,r],n,o,i,a,s,,l,d])=>{const{column:c,row:u}=n,{height:h,width:f}=o,{width:g}=i;if(0===s&&(0===e||0===g))return nv;if(0===f){const t=zp(d,e);return function(e){return{...ov,items:e}}(cv(t,t+Math.max(s-1,0),a))}const m=gv(g,f,c);let p,b;l?0===t&&0===r&&s>0?(p=0,b=s-1):(p=m*av((t+u)/(h+u)),b=m*iv((r+u)/(h+u))-1,b=lv(e-1,sv(b,m-1)),p=lv(b,sv(0,p))):(p=0,b=-1);const v=cv(p,b,a),{bottom:y,top:x}=mv(i,n,o,v),w=iv(e/m);return{bottom:y,itemHeight:h,items:v,itemWidth:f,offsetBottom:w*h+(w-1)*u-y,offsetTop:x,top:x}}))),S),hm(xm(O,bm((e=>null!==e)),vm((e=>e.length))),$),hm(xm(Tm(D,k,S,T),bm((([e,t,{items:r}])=>r.length>0&&0!==t.height&&0!==e.height)),vm((([e,t,{items:r},n])=>{const{bottom:o,top:i}=mv(e,n,t,r);return[i,o]})),pm(cp)),t);const R=Dm(!1);hm(xm(d,Sm(R),vm((([e,t])=>t||0!==e))),R);const P=Em(xm(Tm(S,$),bm((([{items:e}])=>e.length>0)),Sm(R),bm((([[e,t],r])=>{const n=e.items[e.items.length-1].index===t-1;return(r||e.bottom>0&&e.itemHeight>0&&0===e.offsetBottom&&e.items.length===t)&&n})),vm((([[,e]])=>e-1)),pm())),H=Em(xm(Im(S),bm((({items:e})=>e.length>0&&0===e[0].index)),ym(0),pm())),N=Em(xm(Im(S),Sm(B),bm((([{items:e},t])=>e.length>0&&!t)),vm((([{items:e}])=>({endIndex:e[e.length-1].index,startIndex:e[0].index}))),pm(dp),Cm(0)));hm(N,f.scrollSeekRangeChanged),hm(xm(F,Sm(D,k,$,T),vm((([e,t,r,n,o])=>{const i=Mp(e),{align:a,behavior:s,offset:l}=i;let d=i.index;"LAST"===d&&(d=n-1),d=sv(0,d,lv(n-1,d));let c=pv(t,o,r,d);return"end"===a?c=dv(c-t.height+r.height):"center"===a&&(c=dv(c-t.height/2+r.height/2)),l&&(c+=l),{behavior:s,top:c}}))),l);const W=km(xm(S,vm((e=>e.offsetBottom+e.bottom))),0);return hm(xm(x,vm((e=>({height:e.visibleHeight,width:e.visibleWidth})))),D),{customScrollParent:p,data:O,deviation:_,footerHeight:o,gap:T,headerHeight:i,increaseViewportBy:e,initialItemCount:C,itemDimensions:k,overscan:r,restoreStateFrom:M,scrollBy:a,scrollContainerState:s,scrollHeight:E,scrollTo:l,scrollToIndex:F,scrollTop:d,smoothScrollTargetReached:c,totalCount:$,useWindowScroll:b,viewportDimensions:D,windowScrollContainerState:v,windowScrollTo:y,windowViewportRect:x,...f,gridState:S,horizontalDirection:L,initialTopMostItemIndex:A,totalListHeight:W,...h,endReached:P,propsReady:m,rangeChanged:N,startReached:H,stateChanged:I,stateRestoreInProgress:B,...w}}),sm(Zp,Nm,Np,lb,Tp,db,zm));function gv(e,t,r){return sv(1,av((e+r)/(av(t)+r)))}function mv(e,t,r,n){const{height:o}=r;if(void 0===o||0===n.length)return{bottom:0,top:0};const i=pv(e,t,r,n[0].index);return{bottom:pv(e,t,r,n[n.length-1].index)+o,top:i}}function pv(e,t,r,n){const o=gv(e.width,r.width,t.column),i=av(n/o),a=i*r.height+sv(0,i-1)*t.row;return a>0?a+t.row:a}const bv=_m((()=>{const e=Dm((e=>`Item ${e}`)),t=Dm({}),r=Dm(null),n=Dm("virtuoso-grid-item"),o=Dm("virtuoso-grid-list"),i=Dm(Eb),a=Dm("div"),s=Dm(om),l=(e,r=null)=>km(xm(t,vm((t=>t[e])),pm()),r),d=Dm(!1),c=Dm(!1);return hm(Im(c),d),{components:t,computeItemKey:i,context:r,FooterComponent:l("Footer"),HeaderComponent:l("Header"),headerFooterTag:a,itemClassName:n,ItemComponent:l("Item","div"),itemContent:e,listClassName:o,ListComponent:l("List","div"),readyStateChanged:d,reportReadyState:c,ScrollerComponent:l("Scroller","div"),scrollerRef:s,ScrollSeekPlaceholder:l("ScrollSeekPlaceholder","div")}})),vv=_m((([e,t])=>({...e,...t})),sm(fv,bv)),yv=o.memo((function(){const t=Fv("gridState"),r=Fv("listClassName"),n=Fv("itemClassName"),i=Fv("itemContent"),a=Fv("computeItemKey"),s=Fv("isSeeking"),l=Ev("scrollHeight"),d=Fv("ItemComponent"),c=Fv("ListComponent"),u=Fv("ScrollSeekPlaceholder"),h=Fv("context"),f=Ev("itemDimensions"),g=Ev("gap"),m=Fv("log"),p=Fv("stateRestoreInProgress"),b=Ev("reportReadyState"),v=jm(o.useMemo((()=>e=>{const t=e.parentElement.parentElement.scrollHeight;l(t);const r=e.firstChild;if(r){const{height:e,width:t}=r.getBoundingClientRect();f({height:e,width:t})}g({column:Tv("column-gap",getComputedStyle(e).columnGap,m),row:Tv("row-gap",getComputedStyle(e).rowGap,m)})}),[l,f,g,m]),!0,!1);return Cb((()=>{t.itemHeight>0&&t.itemWidth>0&&b(!0)}),[t]),p?null:e(c,{className:r,ref:v,...Pb(c,h),"data-testid":"virtuoso-item-list",style:{paddingBottom:t.offsetBottom,paddingTop:t.offsetTop},children:t.items.map((r=>{const o=a(r.index,r.data,h);return s?e(u,{...Pb(u,h),height:t.itemHeight,index:r.index,width:t.itemWidth},o):C(d,{...Pb(d,h),className:n,"data-index":r.index,key:o},i(r.index,r.data,h))}))})})),xv=o.memo((function(){const t=Fv("HeaderComponent"),r=Ev("headerHeight"),n=Fv("headerFooterTag"),i=jm(o.useMemo((()=>e=>{r(gp(e,"height"))}),[r]),!0,!1),a=Fv("context");return t?e(n,{ref:i,children:e(t,{...Pb(t,a)})}):null})),wv=o.memo((function(){const t=Fv("FooterComponent"),r=Ev("footerHeight"),n=Fv("headerFooterTag"),i=jm(o.useMemo((()=>e=>{r(gp(e,"height"))}),[r]),!0,!1),a=Fv("context");return t?e(n,{ref:i,children:e(t,{...Pb(t,a)})}):null})),$v=({children:t})=>{const r=o.useContext($b),n=Ev("itemDimensions"),i=Ev("viewportDimensions"),a=jm(o.useMemo((()=>e=>{i(e.getBoundingClientRect())}),[i]),!0,!1);return o.useEffect((()=>{r&&(i({height:r.viewportHeight,width:r.viewportWidth}),n({height:r.itemHeight,width:r.itemWidth}))}),[r,i,n]),e("div",{ref:a,style:Lb(!1),children:t})},Cv=({children:t})=>{const r=o.useContext($b),n=Ev("windowViewportRect"),i=Ev("itemDimensions"),a=Fv("customScrollParent"),s=Hm(n,a,!1);return o.useEffect((()=>{r&&(i({height:r.itemHeight,width:r.itemWidth}),n({offsetTop:0,visibleHeight:r.viewportHeight,visibleWidth:r.viewportWidth}))}),[r,n,i]),e("div",{ref:s,style:Lb(!1),children:t})},Sv=o.memo((function({...r}){const n=Fv("useWindowScroll"),o=Fv("customScrollParent"),i=o||n?Ov:_v,a=o||n?Cv:$v,s=Fv("context");return e(i,{...r,...Pb(i,s),children:t(a,{children:[e(xv,{}),e(yv,{}),e(wv,{})]})})})),{Component:Dv,useEmitter:kv,useEmitterValue:Fv,usePublisher:Ev}=xb(vv,{events:{atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",endReached:"endReached",isScrolling:"isScrolling",rangeChanged:"rangeChanged",readyStateChanged:"readyStateChanged",startReached:"startReached",stateChanged:"stateChanged"},methods:{scrollBy:"scrollBy",scrollTo:"scrollTo",scrollToIndex:"scrollToIndex"},optional:{components:"components",computeItemKey:"computeItemKey",context:"context",customScrollParent:"customScrollParent",data:"data",headerFooterTag:"headerFooterTag",increaseViewportBy:"increaseViewportBy",initialItemCount:"initialItemCount",initialTopMostItemIndex:"initialTopMostItemIndex",itemClassName:"itemClassName",itemContent:"itemContent",listClassName:"listClassName",logLevel:"logLevel",overscan:"overscan",restoreStateFrom:"restoreStateFrom",scrollerRef:"scrollerRef",scrollSeekConfiguration:"scrollSeekConfiguration",totalCount:"totalCount",useWindowScroll:"useWindowScroll"}},Sv),_v=Yb({useEmitter:kv,useEmitterValue:Fv,usePublisher:Ev}),Ov=Vb({useEmitter:kv,useEmitterValue:Fv,usePublisher:Ev});function Tv(e,t,r){return"normal"!==t&&!(null!=t&&t.endsWith("px"))&&r(`${e} was not resolved to pixel value correctly`,t,Bm.WARN),"normal"===t?0:parseInt(null!=t?t:"0",10)}const Iv=o.createContext({focusedIndex:-1,setFocusedIndex:()=>{}}),Mv=({children:t})=>{const[r,n]=s(-1);return e(Iv.Provider,{value:{focusedIndex:r,setFocusedIndex:n},children:t})},Bv=k.div`
    border: ${Qi["width-010"]} ${Qi.solid} ${qi.border};
    border-radius: ${ea.sm};
    background: ${qi.bg};

    --x-spacing: 0px;
    --available-width: calc(100vw - var(--x-spacing) * 2);

    ${na.MaxWidth.sm} {
        --x-spacing: ${ra["sm-margin"]}px;
        max-height: 15rem;
    }

    ${na.MaxWidth.xs} {
        --x-spacing: ${ra["xs-margin"]}px;
    }

    ${na.MaxWidth.xxs} {
        --x-spacing: ${ra["xxs-margin"]}px;
    }

    max-width: var(--available-width);

    ${e=>e.$customWidth?`width: ${e.$customWidth};`:e.$width?`width: ${e.$width}px; min-width: min(23rem, var(--available-width));`:"min-width: min(23rem, var(--available-width));"}

    max-height: min(27rem, var(--available-height, infinity * 1px));
    overflow: hidden;
    overflow-y: auto;
    ${e=>"small"===e.$variant?Gi["body-md-regular"]:Gi["body-baseline-regular"]}

    &::-webkit-scrollbar {
        width: 14px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: ${qi["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: ${ea.full};
        background-clip: padding-box;
    }
`,Av=k.div`
    background: transparent;
    padding: ${Ji["spacing-8"]};
`,zv=k.ul`
    list-style-type: none;
`,jv=k.li`
    display: flex;
    align-items: flex-start;
    gap: ${Ji["spacing-8"]};
    padding: ${Ji["spacing-12"]} ${Ji["spacing-8"]};
    cursor: pointer;
    border: none;
    border-radius: ${ea.none};
    outline: none;

    ${e=>e.$disabled?F`
                cursor: not-allowed;
            `:e.$active&&e.$selected?F`
                background: ${qi["bg-hover"]};
            `:e.$active?F`
                background: ${qi["bg-hover-subtle"]};
            `:void 0}
`,Lv=k(ge)`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
    color: ${qi["icon-selected"]};
`,Rv=k.div`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
`,Pv=k(fe)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${qi["icon-selected"]};
`,Hv=k(ue)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${qi["icon-primary-subtlest"]};
`,Nv=k(he)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${qi["icon-disabled-subtle"]};
`,Wv=k.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`,Yv=k(Ed)`
    cursor: pointer;
    overflow: hidden;
    color: ${qi["text-primary"]};
    font-size: inherit;
`,Vv=k(Yv)`
    ${Gi["body-baseline-semibold"]}
`,Uv=k(Yv)`
    ${Gi["body-md-semibold"]}
    padding: ${Ji["spacing-8"]} ${Ji["spacing-8"]};
`,Kv=k.div`
    width: 100%;
    display: flex;
    padding: ${Ji["spacing-12"]} ${Ji["spacing-16"]};
    align-items: center;
`,Zv=k(re)`
    margin-right: ${Ji["spacing-4"]};
    color: ${qi["icon-error"]};
    height: 1em;
    width: 1em;
`,qv=k(nl)`
    margin-right: ${Ji["spacing-8"]};
    color: ${qi.icon};
`,Gv=k.div`
    ${Oa()}
    color: ${qi["text-subtle"]};
    padding: 0 ${Ji["spacing-16"]} ${Ji["spacing-12"]}
        ${Ji["spacing-16"]};
`,Xv=k.div`
    background: ${qi["bg-strong"]};
    border-radius: ${ea.sm};
    display: flex;
    align-items: center;

    ${e=>"small"===e.$variant?Gi["body-md-regular"]:Gi["body-baseline-regular"]}
`,Qv=k.label`
    flex: 1;
    display: flex;
    align-items: center;
    gap: ${Ji["spacing-8"]};
    padding: ${e=>"small"===e.$variant?F`
                  ${Ji["spacing-8"]} ${Ji["spacing-16"]}
              `:F`10px ${Ji["spacing-8"]}`};
`,Jv=k(Fd)`
    flex: 1;
`,ey=k(me)`
    color: ${qi.icon};
    flex-shrink: 0;
    height: 1em;
    width: 1em;
`,ty=k(ka)`
    flex-shrink: 0;
    align-self: stretch;
    box-sizing: content-box;
    padding: ${Ji["spacing-8"]};
    margin-left: -${Ji["spacing-8"]};
    color: ${qi.icon};
    cursor: pointer;
    font-size: inherit;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`,ry=S(((r,n)=>{var{value:o,variant:i,onClear:a}=r,s=Fe(r,["value","variant","onClear"]);return t(Xv,{$variant:i,children:[t(Qv,{$variant:i,children:[e(ey,{"aria-hidden":!0}),e(Jv,Object.assign({ref:n,value:o,$variant:i},s))]}),o&&e(ty,{"aria-label":"Clear search",focusOutline:"browser",onClick:a,children:e(M,{"aria-hidden":!0})})]})})),ny=S((({listItems:n,multiSelect:o,maxSelectable:i,selectedItems:l,disableItemFocus:d,itemsLoadState:c="success",itemTruncationType:u="end",itemMaxLines:f=2,labelDisplayType:m="inline",variant:b="default",listboxId:v,matchElementWidth:x=!1,width:w,topScrollItem:$,onSelectItem:C,onSelectAll:S,onDismiss:D,onRetry:k,valueExtractor:F,listExtractor:E,renderListItem:_,renderCustomCallToAction:O,enableSearch:T,hideNoResultsDisplay:I,noResultsDescription:M,customLabels:B,searchPlaceholder:A,searchFunction:z,onSearch:j},L)=>{const{noResultsLabel:R="No results found.",selectAllButtonLabel:P="Select all",clearAllButtonLabel:H="Clear all"}=B||{},N=(null==B?void 0:B.searchPlaceholder)||A||"Search",W=(null==B?void 0:B.noResultsDescription)||M,{focusedIndex:Y,setFocusedIndex:V}=p(Iv),{elementWidth:U,setFloatingRef:K,getFloatingProps:Z,styles:q}=Vs(),[G,X]=s(""),[Q,J]=s(null!=n?n:[]),ee=tr(c),te=Jt(),re=a(null),ne=a(null),oe=a([]),ie=a(null),ae=a(null),se=!!i&&!!l&&(null==l?void 0:l.length)===i,le=e=>{const t=E?E(e):null==e?void 0:e.toString();return"object"==typeof t?{title:t.title,secondaryLabel:t.secondaryLabel}:{title:null!=t?t:""}},de=g((e=>!!qg(l,(t=>Xg(t,e)))),[l]),ce=Xt((()=>null==z?void 0:z(G))),ue=Xt((()=>null==n?void 0:n.filter((e=>{const{title:t,secondaryLabel:r}=le(e),n=G.trim().toLowerCase();return t.toLowerCase().includes(n)||r&&r.toLowerCase().includes(n)})))),he=g((e=>{var t,r;if(d)return;if(ie.current)return V(-1),void setTimeout((()=>{var e;return null===(e=ie.current)||void 0===e?void 0:e.focus()}),0);const n=null!=Q?Q:[];if(0===n.length)return;if(void 0!==(null==e?void 0:e.index)){const r=Math.max(0,Math.min(e.index,n.length-1));return null===(t=ae.current)||void 0===t||t.scrollToIndex({index:r,align:"center"}),V(r),void setTimeout((()=>{var e;return null===(e=oe.current[r])||void 0===e?void 0:e.focus()}),0)}const o=(null==e?void 0:e.preferSelected)?n.findIndex((e=>de(e))):-1,i=-1!==o?o:Y>=0&&Y<n.length?Y:0;null===(r=ae.current)||void 0===r||r.scrollToIndex({index:i,align:"center"}),V(i),setTimeout((()=>{var e;return null===(e=oe.current[i])||void 0===e?void 0:e.focus()}),0)}),[de,d,Q,Y,V]),fe=(e,t)=>{se&&!de(e)||(V(t),null==C||C(e,(e=>F?F(e):e)(e)))},ge=e=>{const t=e.target.value;X(t),null==j||j()},me=()=>{var e;X(""),null===(e=ie.current)||void 0===e||e.focus(),null==j||j()},pe=()=>null==k?void 0:k();Qt("keydown",(e=>{var t,r;switch(e.code){case"ArrowDown":if(e.preventDefault(),Y<Q.length-1){const e=Y+1;null===(t=oe.current[e])||void 0===t||t.focus(),V(e)}break;case"ArrowUp":if(e.preventDefault(),Y>0){const e=Y-1;null===(r=oe.current[e])||void 0===r||r.focus(),V(e)}else 0===Y&&ie.current&&(ie.current.focus(),V(-1));break;case"Space":case"Enter":document.activeElement===oe.current[Y]&&(e.preventDefault(),Q[Y]&&fe(Q[Y],Y))}})),y(L,(()=>({refocus:he})),[he]),h((()=>{var e;if(!$)return void(null===(e=ae.current)||void 0===e||e.scrollTo({top:0}));const t=setTimeout((()=>{if(!n)return;const e=n.indexOf($);ae.current&&-1!==e&&(ae.current.scrollToIndex({index:e}),V(e))}),0);return()=>clearTimeout(t)}),[oe,n,V,$]),h((()=>{d||te&&ee&&"success"===c&&ie.current&&(V(-1),ie.current.focus())}),[te,ee,c,V,d]),h((()=>{var e;J(null!==(e=""===G?n:z?ce():ue())&&void 0!==e?e:[])}),[ce,ue,n,z,G]),h((()=>{var e,t,r;if(te)return;if(d||!n)return;const o=n.findIndex((e=>de(e)));ie.current?(V(-1),setTimeout((()=>{var e;return null===(e=ie.current)||void 0===e?void 0:e.focus()}),200)):Y>0?(null===(e=ae.current)||void 0===e||e.scrollToIndex({index:Y,align:"center"}),setTimeout((()=>{var e;return null===(e=oe.current[Y])||void 0===e?void 0:e.focus()}),200)):-1!==o?(null===(t=ae.current)||void 0===t||t.scrollToIndex({index:o,align:"center"}),V(o),setTimeout((()=>{var e;return null===(e=oe.current[o])||void 0===e?void 0:e.focus()}),200)):(null===(r=ae.current)||void 0===r||r.scrollToIndex({index:0}),V(0),setTimeout((()=>{var e;return null===(e=oe.current[0])||void 0===e?void 0:e.focus()}),200))}),[de,d,Y,n,te,V]);const be=t=>o?e(se&&!t?Nv:t?Pv:Hv,{"aria-hidden":!0}):t?e(Lv,{"aria-hidden":!0}):e(Rv,{}),ve=(t,r)=>{const{title:n,secondaryLabel:o}=le(t);return e(uu,{displayType:m,label:n,maxLines:f,selected:r,disabled:!r&&se,sublabel:o,truncationType:u,variant:b})},ye=(n,i)=>{if(!k||"success"===c){const a=de(n),s=i===Y;return e(jv,{"aria-selected":a,"aria-multiselectable":o,"aria-disabled":!a&&se,"aria-posinset":i+1,"aria-setsize":null==Q?void 0:Q.length,"data-testid":"list-item",onClick:()=>fe(n,i),onMouseEnter:()=>(e=>V(e))(i),ref:e=>{oe.current[i]=e},role:"option",tabIndex:s?0:-1,$active:s,$selected:a,$disabled:!a&&se,children:_?_(n,{selected:a}):t(r,{children:[be(a),ve(n,a)]})},((e,t)=>`item_${t}__${F?F(e):e}`)(n,i))}},xe=()=>{if((T||z)&&"success"===c)return e(ry,{ref:ie,onChange:ge,value:G,placeholder:N,"data-testid":"search-input","aria-label":"Enter text to search",onClear:me,variant:b})},we=()=>{if(l&&o&&Q.length>0&&!G&&"success"===c)return e(Wv,{children:e(Uv,{onClick:S,type:"button",$variant:b,children:i||0!==l.length?H:P})})},$e=()=>{if(!I&&(G||!T)&&0===Q.length&&"success"===c)return t(r,{children:[t(Kv,{"data-testid":"list-no-results",children:[e(Zv,{"data-testid":"no-result-icon"}),R]}),W&&e(Gv,{"data-testid":"no-result-desc",children:W})]})},Ce=()=>{if(k&&"loading"===c)return t(Kv,{"data-testid":"list-loading",children:[e(qv,{}),"Loading..."]})},Se=()=>{if(k&&"fail"===c)return t(Kv,{"data-testid":"list-fail",children:[e(Zv,{"data-testid":"load-error-icon"}),"Failed to load. ",e(Vv,{onClick:pe,type:"button",$variant:b,children:"Try again."})]})},De=()=>{var t;const r="test"===process.env.NODE_ENV;return e(zv,{role:"listbox",id:v,children:e(rv,Object.assign({ref:ae,style:{height:"100%"},data:Q,customScrollParent:null!==(t=re.current)&&void 0!==t?t:void 0,itemContent:(e,t)=>ye(t,e)},r?{initialItemCount:Q.length}:{}),r?Q.length:void 0)})};return t(Bv,Object.assign({"data-testid":"dropdown-container",ref:Je(re,K),style:q},Z(),{$width:x?U:void 0,$customWidth:w,$variant:b,children:[t(Av,{ref:ne,"data-testid":"dropdown-list",children:[xe(),we(),$e(),Ce(),Se(),De()]}),(()=>{if(O)return e("div",{"data-testid":"custom-cta",children:O(D,Q)})})()]}))})),oy=k(Ed)`
    display: flex;
    align-items: center;
    gap: ${Ji["spacing-8"]};
    width: 100%;
    padding: ${e=>e.$readOnly?`0 ${Ji["spacing-16"]}`:Ji["spacing-16"]};

    ${e=>"small"===e.$variant?F`
                  ${Gi["body-md-regular"]}
                  height: calc(2.5rem - 2px); // exclude top and bottom borders
              `:F`
                  ${Gi["body-baseline-regular"]}
                  height: calc(3rem - 2px);
              `}

    &:disabled {
        cursor: not-allowed;
    }

    &:focus-visible {
        outline: 2px solid ${qi["focus-ring"]};
        outline-offset: -2px;
    }
`,iy=k.div`
    display: flex;
    align-items: center;
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${Xi["duration-250"]} ${Xi["ease-default"]};

    svg {
        color: ${qi.icon};
        height: 1em;
        width: 1em;
    }
`,ay=S(((r,n)=>{var{children:o,disabled:i,expanded:a,listboxId:s,popupRole:l,readOnly:d,variant:c}=r,u=Fe(r,["children","disabled","expanded","listboxId","popupRole","readOnly","variant"]);return t(oy,Object.assign({ref:n,type:"button",role:"combobox","aria-expanded":a,"aria-haspopup":l,"aria-controls":a?s:void 0,"data-testid":"selector","aria-disabled":i,"aria-readonly":d,$variant:c,$readOnly:d},u,{children:[o,!d&&e(iy,{$expanded:a,$variant:c,children:e(ne,{"aria-hidden":!0})})]}))}));var sy=Symbol.for("immer-nothing"),ly=Symbol.for("immer-draftable"),dy=Symbol.for("immer-state"),cy="production"!==process.env.NODE_ENV?[function(e){return`The plugin for '${e}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e}()\` when initializing your application.`},function(e){return`produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e}'`},"This object has been frozen and should not be mutated",function(e){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+e},"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.","Immer forbids circular references","The first or second argument to `produce` must be a function","The third argument to `produce` must be a function or undefined","First argument to `createDraft` must be a plain object, an array, or an immerable object","First argument to `finishDraft` must be a draft returned by `createDraft`",function(e){return`'current' expects a draft, got: ${e}`},"Object.defineProperty() cannot be used on an Immer draft","Object.setPrototypeOf() cannot be used on an Immer draft","Immer only supports deleting array indices","Immer only supports setting array indices and the 'length' property",function(e){return`'original' expects a draft, got: ${e}`}]:[];function uy(e,...t){if("production"!==process.env.NODE_ENV){const r=cy[e],n="function"==typeof r?r.apply(null,t):r;throw new Error(`[Immer] ${n}`)}throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var hy=Object.getPrototypeOf;function fy(e){return!!e&&!!e[dy]}function gy(e){return!!e&&(py(e)||Array.isArray(e)||!!e[ly]||!!e.constructor?.[ly]||wy(e)||$y(e))}var my=Object.prototype.constructor.toString();function py(e){if(!e||"object"!=typeof e)return!1;const t=hy(e);if(null===t)return!0;const r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object||"function"==typeof r&&Function.toString.call(r)===my}function by(e,t){0===vy(e)?Reflect.ownKeys(e).forEach((r=>{t(r,e[r],e)})):e.forEach(((r,n)=>t(n,r,e)))}function vy(e){const t=e[dy];return t?t.type_:Array.isArray(e)?1:wy(e)?2:$y(e)?3:0}function yy(e,t){return 2===vy(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function xy(e,t,r){const n=vy(e);2===n?e.set(t,r):3===n?e.add(r):e[t]=r}function wy(e){return e instanceof Map}function $y(e){return e instanceof Set}function Cy(e){return e.copy_||e.base_}function Sy(e,t){if(wy(e))return new Map(e);if($y(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const r=py(e);if(!0===t||"class_only"===t&&!r){const t=Object.getOwnPropertyDescriptors(e);delete t[dy];let r=Reflect.ownKeys(t);for(let n=0;n<r.length;n++){const o=r[n],i=t[o];!1===i.writable&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(t[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:e[o]})}return Object.create(hy(e),t)}{const t=hy(e);if(null!==t&&r)return{...e};const n=Object.create(t);return Object.assign(n,e)}}function Dy(e,t=!1){return Fy(e)||fy(e)||!gy(e)||(vy(e)>1&&(e.set=e.add=e.clear=e.delete=ky),Object.freeze(e),t&&Object.entries(e).forEach((([e,t])=>Dy(t,!0)))),e}function ky(){uy(2)}function Fy(e){return Object.isFrozen(e)}var Ey,_y={};function Oy(e){const t=_y[e];return t||uy(0,e),t}function Ty(){return Ey}function Iy(e,t){t&&(Oy("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function My(e){By(e),e.drafts_.forEach(zy),e.drafts_=null}function By(e){e===Ey&&(Ey=e.parent_)}function Ay(e){return Ey={drafts_:[],parent_:Ey,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function zy(e){const t=e[dy];0===t.type_||1===t.type_?t.revoke_():t.revoked_=!0}function jy(e,t){t.unfinalizedDrafts_=t.drafts_.length;const r=t.drafts_[0];return void 0!==e&&e!==r?(r[dy].modified_&&(My(t),uy(4)),gy(e)&&(e=Ly(t,e),t.parent_||Py(t,e)),t.patches_&&Oy("Patches").generateReplacementPatches_(r[dy].base_,e,t.patches_,t.inversePatches_)):e=Ly(t,r,[]),My(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==sy?e:void 0}function Ly(e,t,r){if(Fy(t))return t;const n=t[dy];if(!n)return by(t,((o,i)=>Ry(e,n,t,o,i,r))),t;if(n.scope_!==e)return t;if(!n.modified_)return Py(e,n.base_,!0),n.base_;if(!n.finalized_){n.finalized_=!0,n.scope_.unfinalizedDrafts_--;const t=n.copy_;let o=t,i=!1;3===n.type_&&(o=new Set(t),t.clear(),i=!0),by(o,((o,a)=>Ry(e,n,t,o,a,r,i))),Py(e,t,!1),r&&e.patches_&&Oy("Patches").generatePatches_(n,r,e.patches_,e.inversePatches_)}return n.copy_}function Ry(e,t,r,n,o,i,a){if("production"!==process.env.NODE_ENV&&o===r&&uy(5),fy(o)){const a=Ly(e,o,i&&t&&3!==t.type_&&!yy(t.assigned_,n)?i.concat(n):void 0);if(xy(r,n,a),!fy(a))return;e.canAutoFreeze_=!1}else a&&r.add(o);if(gy(o)&&!Fy(o)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;Ly(e,o),t&&t.scope_.parent_||"symbol"==typeof n||!Object.prototype.propertyIsEnumerable.call(r,n)||Py(e,o)}}function Py(e,t,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&Dy(t,r)}var Hy={get(e,t){if(t===dy)return e;const r=Cy(e);if(!yy(r,t))return function(e,t,r){const n=Yy(t,r);return n?"value"in n?n.value:n.get?.call(e.draft_):void 0}(e,r,t);const n=r[t];return e.finalized_||!gy(n)?n:n===Wy(e.base_,t)?(Uy(e),e.copy_[t]=Ky(n,e)):n},has:(e,t)=>t in Cy(e),ownKeys:e=>Reflect.ownKeys(Cy(e)),set(e,t,r){const n=Yy(Cy(e),t);if(n?.set)return n.set.call(e.draft_,r),!0;if(!e.modified_){const n=Wy(Cy(e),t),o=n?.[dy];if(o&&o.base_===r)return e.copy_[t]=r,e.assigned_[t]=!1,!0;if(function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}(r,n)&&(void 0!==r||yy(e.base_,t)))return!0;Uy(e),Vy(e)}return e.copy_[t]===r&&(void 0!==r||t in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=r,e.assigned_[t]=!0),!0},deleteProperty:(e,t)=>(void 0!==Wy(e.base_,t)||t in e.base_?(e.assigned_[t]=!1,Uy(e),Vy(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0),getOwnPropertyDescriptor(e,t){const r=Cy(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n?{writable:!0,configurable:1!==e.type_||"length"!==t,enumerable:n.enumerable,value:r[t]}:n},defineProperty(){uy(11)},getPrototypeOf:e=>hy(e.base_),setPrototypeOf(){uy(12)}},Ny={};function Wy(e,t){const r=e[dy];return(r?Cy(r):e)[t]}function Yy(e,t){if(!(t in e))return;let r=hy(e);for(;r;){const e=Object.getOwnPropertyDescriptor(r,t);if(e)return e;r=hy(r)}}function Vy(e){e.modified_||(e.modified_=!0,e.parent_&&Vy(e.parent_))}function Uy(e){e.copy_||(e.copy_=Sy(e.base_,e.scope_.immer_.useStrictShallowCopy_))}by(Hy,((e,t)=>{Ny[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),Ny.deleteProperty=function(e,t){return"production"!==process.env.NODE_ENV&&isNaN(parseInt(t))&&uy(13),Ny.set.call(this,e,t,void 0)},Ny.set=function(e,t,r){return"production"!==process.env.NODE_ENV&&"length"!==t&&isNaN(parseInt(t))&&uy(14),Hy.set.call(this,e[0],t,r,e[0])};function Ky(e,t){const r=wy(e)?Oy("MapSet").proxyMap_(e,t):$y(e)?Oy("MapSet").proxySet_(e,t):function(e,t){const r=Array.isArray(e),n={type_:r?1:0,scope_:t?t.scope_:Ty(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let o=n,i=Hy;r&&(o=[n],i=Ny);const{revoke:a,proxy:s}=Proxy.revocable(o,i);return n.draft_=s,n.revoke_=a,s}(e,t);return(t?t.scope_:Ty()).drafts_.push(r),r}function Zy(e){if(!gy(e)||Fy(e))return e;const t=e[dy];let r;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,r=Sy(e,t.scope_.immer_.useStrictShallowCopy_)}else r=Sy(e,!0);return by(r,((e,t)=>{xy(r,e,Zy(t))})),t&&(t.finalized_=!1),r}var qy=new class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,t,r)=>{if("function"==typeof e&&"function"!=typeof t){const r=t;t=e;const n=this;return function(e=r,...o){return n.produce(e,(e=>t.call(this,e,...o)))}}let n;if("function"!=typeof t&&uy(6),void 0!==r&&"function"!=typeof r&&uy(7),gy(e)){const o=Ay(this),i=Ky(e,void 0);let a=!0;try{n=t(i),a=!1}finally{a?My(o):By(o)}return Iy(o,r),jy(n,o)}if(!e||"object"!=typeof e){if(n=t(e),void 0===n&&(n=e),n===sy&&(n=void 0),this.autoFreeze_&&Dy(n,!0),r){const t=[],o=[];Oy("Patches").generateReplacementPatches_(e,n,t,o),r(t,o)}return n}uy(1,e)},this.produceWithPatches=(e,t)=>{if("function"==typeof e)return(t,...r)=>this.produceWithPatches(t,(t=>e(t,...r)));let r,n;const o=this.produce(e,t,((e,t)=>{r=e,n=t}));return[o,r,n]},"boolean"==typeof e?.autoFreeze&&this.setAutoFreeze(e.autoFreeze),"boolean"==typeof e?.useStrictShallowCopy&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){gy(e)||uy(8),fy(e)&&(e=function(e){fy(e)||uy(10,e);return Zy(e)}(e));const t=Ay(this),r=Ky(e,void 0);return r[dy].isManual_=!0,By(t),r}finishDraft(e,t){const r=e&&e[dy];r&&r.isManual_||uy(9);const{scope_:n}=r;return Iy(n,t),jy(void 0,n)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){const n=t[r];if(0===n.path.length&&"replace"===n.op){e=n.value;break}}r>-1&&(t=t.slice(r+1));const n=Oy("Patches").applyPatches_;return fy(e)?n(e,t):this.produce(e,(e=>n(e,t)))}},Gy=qy.produce;qy.produceWithPatches.bind(qy),qy.setAutoFreeze.bind(qy),qy.setUseStrictShallowCopy.bind(qy),qy.applyPatches.bind(qy),qy.createDraft.bind(qy),qy.finishDraft.bind(qy);var Xy=Wh,Qy=$f,Jy=ch,ex=ar,tx=Uh,rx=fh,nx=Lh,ox=Eh,ix=Object.prototype.hasOwnProperty;var ax=function(e){if(null==e)return!0;if(tx(e)&&(ex(e)||"string"==typeof e||"function"==typeof e.splice||rx(e)||ox(e)||Jy(e)))return!e.length;var t=Qy(e);if("[object Map]"==t||"[object Set]"==t)return!e.size;if(nx(e))return!Xy(e).length;for(var r in e)if(ix.call(e,r))return!1;return!0},sx=Oe(ax);const lx=(e,t,r)=>{const n=Gy(e,(e=>{for(let n=e.length-1;n>=0;n--){const o=e[n],i=cx(o.keyPath);if(o.checked=t.has(i),o.hasSubItems&&r&&!0!==o.checked){const t=o.subItemIndexes.map((t=>e[t])),r=t.every((e=>!0===e.checked)),n=t.some((e=>!1!==e.checked));r?o.checked=!0:n&&(o.checked="mixed")}}}));return n},dx=(e,t)=>{const[r,...n]=t;if(sx(e)||sx(r))return;const o=e.find((e=>e.key===r));return o&&n.length?dx(o.subItems,n):o},cx=e=>e.join(","),ux=e=>new Set(e.map((e=>e.join(",")))),hx=k.li`
    display: ${e=>e.$visible?"flex":"none"};
`,fx=k.div`
    flex: 1;
    display: flex;
    align-items: flex-start;
    gap: ${Ji["spacing-8"]};
    padding: ${Ji["spacing-12"]} ${Ji["spacing-8"]};
    cursor: ${e=>e.$toggleable?"default":"pointer"};
    overflow: hidden; // required for label to truncate properly
    border-radius: ${ea.none};
    outline: none;

    ${e=>e.$active&&F`
            background: ${qi["bg-hover"]};
        `}
`,gx=k.div`
    height: 1px;
    width: calc((1lh + ${Ji["spacing-8"]}) * ${e=>e.$level});
`,mx=k.div`
    width: 1lh;
    height: 1lh;
    color: ${qi["icon-primary"]};
    cursor: pointer;

    svg {
        width: 1lh;
        height: 1lh;
        transition: transform ${Xi["duration-350"]}
            ${Xi["ease-standard"]};

        ${e=>{if(e.$expanded)return F`
                    transform: rotate(90deg);
                `}}
    }
`,px=k.div`
    width: 1lh;
    height: 1lh;
    margin-right: ${Ji["spacing-8"]};
`,bx=k.div`
    flex-shrink: 0;
    height: 1lh;
    width: ${e=>e.$hasNestedSiblings?"1lh":Ji["spacing-16"]};

    display: flex;
    justify-content: center;
`,vx=k(be)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${qi["icon-selected"]};
`,yx=({listItems:n,multiSelect:o=!1,selectedKeyPaths:i,itemsLoadState:l="success",itemTruncationType:d="end",itemMaxLines:c=2,variant:u="default",listboxId:f,matchElementWidth:g=!1,width:m,mode:p="default",selectableCategory:b,onSelectItem:y,onSelectAll:x,onRetry:w,enableSearch:$,hideNoResultsDisplay:C,noResultsDescription:S,customLabels:D,searchPlaceholder:k,onSearch:F})=>{const{noResultsLabel:E="No results found.",selectAllButtonLabel:_="Select all",clearAllButtonLabel:O="Clear all"}=D||{},T=(null==D?void 0:D.searchPlaceholder)||k||"Search",I=(null==D?void 0:D.noResultsDescription)||S,M=o||b,{elementWidth:B,setFloatingRef:A,getFloatingProps:z,styles:j}=Vs(),[L,R]=s(""),P=L.toLowerCase().trim(),[H,N]=s(!1),W=a(null),Y=a(null),V=a([]),U=a(null),K=Jt(),[Z,q]=s([]),[G,X]=s([]),Q=H?G:Z,J=v((()=>{let e=0;for(const t of Z)t.level>e&&(e=t.level);return e}),[Z]),[ee,te]=s(0),[re,ne]=s([]),[oe,ie]=s(0),ae=e=>{const t=e.target.value;R(t),""===t?N(!1):t.trim().length>=3&&N(!0),null==F||F()},se=()=>{var e;R(""),N(!1),null===(e=U.current)||void 0===e||e.focus(),null==F||F()},le=()=>{null==w||w()},de=()=>{if(0===i.size){const e=[],t=[];Z.forEach((r=>{r.hasSubItems||(e.push(r.keyPath),t.push(r))})),null==x||x(e,t)}else null==x||x([],[])},ce=Xt(((e,t)=>((e,t,r,n,o)=>{const i=[],a=(e,s)=>{const l=[],d=e.some((e=>{var t;return null===(t=e.subItems)||void 0===t?void 0:t.length}));return e.forEach(((c,u)=>{var h,f;const g=s?s.level+1:0,m=s?[...s.keyPath,c.key]:[c.key],p=cx(m),b={item:c,index:i.length,indexInParent:u,parentSetSize:e.length,keyPath:m,parentIndex:s?s.index:-1,parentKeyPath:s?s.keyPath:[],level:g,visible:0===g||o||(null==s?void 0:s.expanded)||!1,expanded:o,checked:t.has(p),hasSubItems:!!(null===(h=c.subItems)||void 0===h?void 0:h.length),subItemIndexes:[],hasNestedSiblings:d,matched:!!n&&-1!==c.label.toLowerCase().indexOf(n),hasMatchedSubItems:!1};if(l.push(b),i.push(b),null===(f=c.subItems)||void 0===f?void 0:f.length){const e=a(c.subItems,b);if(r&&!0!==b.checked){const t=e.every((e=>!0===e.checked)),r=e.some((e=>!1!==e.checked));t?b.checked=!0:r&&(b.checked="mixed")}b.hasMatchedSubItems=e.some((e=>e.matched||e.hasMatchedSubItems)),b.subItemIndexes=e.map((e=>e.index))}})),l};return a(e,void 0),i})(e,i,o,P,t))),ue=Xt((e=>{return i.size?(t=ce(e,!1),Gy(t,(e=>{const t=e.filter((e=>!0===e.checked));for(const r of t){let t=r.parentIndex;for(;t>=0;){const r=e[t];r.visible=!0,r.expanded=!0;for(const t of r.subItemIndexes)e[t].visible=!0;t=r.parentIndex}}}))):(e=>Gy(e,(e=>{const t=e.findIndex((e=>e.hasSubItems));if(t<0)return;let r=t,n=0;for(let t=r;t<e.length;t++){const o=e[t].keyPath.length;if(o>n)n=o;else if(o<n)break;r=t,e[t].visible=!0,e[t].expanded=!0}for(let t=0;t<e.length;t++){const n=e[t],o=n.keyPath.slice(0,-1),i=e[r].keyPath.slice(0,o.length);Xg(o,i)&&(n.visible=!0)}return e})))(ce(e,!1));var t})),he=Xt((e=>{const t=e=>{const r=[];for(const n of e){if(-1!==n.label.toLowerCase().indexOf(P))r.push(n);else if(n.subItems){const e=t(n.subItems);if(e.length>0){r.push(Object.assign(Object.assign({},n),{subItems:e}));continue}}}return r};return t(e)})),fe=Xt((()=>{q((e=>lx(e,i,o))),H&&X((e=>lx(e,i,o)))})),ge=(e,t,r)=>{const n=((e,t,r)=>Gy(e,(e=>{e[t].expanded=r;const n=e[t].keyPath;for(let o=t+1;o<e.length;o++){const t=e[o],i=e[t.parentIndex],a=t.keyPath.slice(0,n.length);if(!Xg(n,a))break;t.visible=r&&i.expanded&&i.visible}})))(Q,e,t);te(e),ie(r),H?X(n):q(n)};Qt("keydown",(e=>{var t,r;switch(e.code){case"ArrowDown":{e.preventDefault();const r=((e,t,r)=>{for(let n=r;n<e.length;n++)if(t(e[n]))return e[n]})(Q,(e=>e.visible),ee+1);r&&(ie((e=>e+1)),te(r.index),null===(t=V.current[r.index])||void 0===t||t.focus());break}case"ArrowUp":{e.preventDefault();const t=((e,t,r)=>{for(let n=r;n>=0;n--)if(t(e[n]))return e[n]})(Q,(e=>e.visible),ee-1);t?(ie((e=>e-1)),te(t.index),null===(r=V.current[t.index])||void 0===r||r.focus()):0===oe&&U.current&&(U.current.focus(),ie(-1),te(-1));break}case"ArrowRight":e.preventDefault(),ge(ee,!0,oe);break;case"ArrowLeft":e.preventDefault(),ge(ee,!1,oe);break;case"Space":if(document.activeElement===V.current[ee]){e.preventDefault();const t=Q[ee];if(t.hasSubItems&&!M)return;null==y||y(t)}}})),h((()=>{let e=[];"default"===p?e=ue(n):"expand"===p?e=ce(n,!0):"collapse"===p&&(e=ce(n,!1)),q(e)}),[ce,ue,n,p]),h((()=>{ne(Q.filter((e=>e.visible)))}),[H,Q]),h((()=>{fe()}),[o,i,fe]),h((()=>{if(H&&L.trim().length>=3){const e=he(n),t=(e=>Gy(e,(e=>{for(const t of e)if(t.matched&&(t.visible=!0),t.hasMatchedSubItems){t.visible=!0,t.expanded=!0;for(const r of t.subItemIndexes)e[r].visible=!0}})))(ce(e,!1));X(t)}}),[he,ce,n,H,L]),h((()=>{K||(U.current?(te(-1),ie(-1),setTimeout((()=>{var e;return null===(e=U.current)||void 0===e?void 0:e.focus()}),200)):V.current[ee]?setTimeout((()=>{var e;return null===(e=V.current[ee])||void 0===e?void 0:e.focus()}),200):(te(0),ie(0),setTimeout((()=>{var e;return null===(e=V.current[0])||void 0===e?void 0:e.focus()}),200)))}),[ee,oe,K]);const me=()=>{if($&&"success"===l)return e(ry,{ref:U,onChange:ae,value:L,placeholder:T,"data-testid":"search-input","aria-label":"Enter text to search",onClear:se,variant:u})},be=()=>{if(o&&!H&&Z.length>0&&"success"===l)return e(Wv,{children:e(Uv,{onClick:de,type:"button",$variant:u,children:0===i.size?_:O})})},ve=()=>{if(!C&&H&&0===G.length&&"success"===l)return t(r,{children:[t(Kv,{"data-testid":"list-no-results",children:[e(Zv,{"data-testid":"no-result-icon"}),E]}),I&&e(Gv,{"data-testid":"no-result-desc",children:I})]})},ye=()=>{if(w&&"loading"===l)return t(Kv,{"data-testid":"list-loading",children:[e(yl,{$hasChildren:!0}),"Loading..."]})},xe=()=>{if(w&&"fail"===l)return t(Kv,{"data-testid":"list-fail",children:[e(Zv,{"data-testid":"load-error-icon"}),"Failed to load. ",e(Vv,{onClick:le,type:"button",$variant:u,children:"Try again."})]})},we=t=>{if(o)switch(t.checked){case"mixed":return e(vx,{"aria-hidden":!0});case!0:return e(Pv,{"aria-hidden":!0});default:return e(Hv,{"aria-hidden":!0})}if(!t.hasSubItems)return e(bx,{$hasNestedSiblings:t.hasNestedSiblings||0===t.level,children:t.checked&&e(Lv,{"aria-hidden":!0})})},$e=(r,n)=>{const{level:i,visible:a,expanded:s,keyPath:l,checked:u,hasSubItems:h,indexInParent:f,parentSetSize:g}=r,m=r.index,p=oe===n,b=h&&!M;return t(hx,{$visible:a,children:[J>0&&e(gx,{$level:i}),J>0&&!h&&o&&e(px,{}),t(fx,{"aria-checked":u,"aria-selected":!!u,"aria-expanded":h?s:void 0,"aria-level":i+1,"aria-posinset":f+1,"aria-setsize":g,"data-testid":"list-item",onClick:e=>{e.stopPropagation(),b?ge(m,!s,n):((e,t)=>{ie(t),te(e),null==y||y(Q[e])})(m,n)},onMouseEnter:()=>((e,t)=>{te(t.index),ie(e)})(n,r),ref:e=>V.current[r.index]=e,role:"treeitem",tabIndex:p?0:-1,$active:p,$toggleable:b,children:[h&&e(mx,{"data-testid":"toggle-category-button",onClick:e=>{e.stopPropagation(),ge(m,!s,n)},$expanded:s,children:e(pe,{})}),we(r),e(uu,{bold:h,searchTerm:H?P:void 0,label:r.item.label,selected:!!u,truncationType:d,maxLines:c})]})]},`[${l.join("---")}]`)},Ce=()=>{var t;const r="test"===process.env.NODE_ENV;return e("div",{"aria-multiselectable":o,id:f,ref:Y,role:"tree",children:e(rv,Object.assign({style:{height:"100%"},customScrollParent:null!==(t=W.current)&&void 0!==t?t:void 0,data:re,itemContent:(e,t)=>$e(t,e)},r?{initialItemCount:re.length}:{}),r?re.length:void 0)})};return e(Bv,Object.assign({"data-testid":"dropdown-container",ref:Je(W,A),style:j},z(),{$width:g?B:void 0,$variant:u,$customWidth:m,children:t(Av,{"data-testid":"nested-dropdown-list",children:[me(),be(),ve(),ye(),xe(),Ce()]})}))},xx=k(Dd)`
    display: flex;
    align-items: center;

    ${e=>"right"===e.$position?F`
                    flex-direction: row-reverse;
                `:F`
                    flex-direction: row;
                `}
`,wx=k(ay)`
    ${e=>{if(e.$noBorder)return"right"===e.$position?F`
                        padding-right: 0;
                    `:F`
                        padding-left: 0;
                    `}}
`,$x=k.div`
    flex: 0 0 auto;
`,Cx=k(nu)`
    ${e=>e.readOnly?F`
                padding: 0;
            `:e.$noBorder?"right"===e.$position?F`
                        padding-left: 0;
                    `:F`
                        padding-right: 0;
                    `:"right"===e.$position?F`
                    padding-left: ${Ji["spacing-16"]};
                `:F`
                    padding-right: ${Ji["spacing-16"]};
                `}
`,Sx=k.div`
    padding: 10px 0; // TODO: confirm vertical spacing
    display: flex;
    align-items: center;
    padding: 0;
    background: transparent;
    margin-right: ${Ji["spacing-12"]};
    color: ${qi.text};
`,Dx=k.div`
    width: 1px;
    background: ${qi.border};
    flex-shrink: 0;
    height: 1.25rem;

    ${e=>{if(e.$readOnly)return F`
                display: none;
            `}}

    ${e=>"right"===e.$position?F`
                    margin-left: ${Ji["spacing-12"]};
                `:F`
                    margin-right: ${Ji["spacing-12"]};
                `}
`,kx=o.forwardRef(((r,n)=>{var{addon:o,error:i,onChange:l,readOnly:d,disabled:c,className:u,onBlur:f,noBorder:g,"data-testid":m,"aria-labelledby":p,"aria-describedby":b,"aria-invalid":v,"aria-label":y}=r,x=Fe(r,["addon","error","onChange","readOnly","disabled","className","onBlur","noBorder","data-testid","aria-labelledby","aria-describedby","aria-invalid","aria-label"]);const{valueExtractor:w,listExtractor:$,enableSearch:C,hideNoResultsDisplay:S,noResultsDescription:D,searchPlaceholder:k,searchFunction:F,onSearch:E,placeholder:_="Select",displayValueExtractor:O,"data-selector-testid":T,options:I,selectedOption:M,onSelectOption:B,optionsLoadState:A,optionTruncationType:z,onRetry:j,onHideOptions:L,onShowOptions:R,dropdownZIndex:P,dropdownRootNode:H,"aria-label":N}=o.attributes,{position:W}=o,[Y,V]=s(M),[U,K]=s(!1),[Z,q]=s(!1),[G]=s((()=>et.generate())),X=`${G}-listbox`,Q=`${G}-instruction`,J=`${G}-combobox-label`,ee=`${G}-textbox-label`,te=a(null),re=a(null);h((()=>{V(M)}),[M]);const ne=()=>{if(Y)return O?O(Y):w?w(Y):Y.toString()},oe=e=>{e?null==R||R():null==L||L()},ie=(e,t)=>{var r;null===(r=re.current)||void 0===r||r.focus(),V(e),K(!1),oe(!1),null==B||B(e,t)},ae=()=>{U&&(K(!1),oe(!1))},se=()=>{K(!0),oe(!0),q(!0)},le=e=>{K(!1),oe(!1),"click"!==e&&(q(!1),null==f||f())},de=()=>{var e;null===(e=re.current)||void 0===e||e.focus(),K(!1),oe(!1)},ce=()=>t("div",{children:[e(wx,{ref:re,disabled:c,expanded:U,listboxId:X,popupRole:"listbox",readOnly:d,"aria-labelledby":Gs(p,J),"aria-describedby":Gs(b,Q),"aria-invalid":v,$noBorder:g,$position:W,children:e(Ps,{$disabled:c,children:Y?e(Hs,{children:ne()}):e(Ns,{children:_})})}),e(Zs,{id:Q,children:"Press space to open options"})]}),ue=()=>e(ny,{listboxId:X,listItems:I,onSelectItem:ie,onDismiss:ae,valueExtractor:w,listExtractor:$,enableSearch:C,hideNoResultsDisplay:S,noResultsDescription:D,searchPlaceholder:k,searchFunction:F,onSearch:E,selectedItems:Y?[Y]:[],itemsLoadState:A,itemTruncationType:z,onRetry:j,matchElementWidth:!0});return e(Mv,{children:t(xx,{$focused:Z,$disabled:c,$readOnly:d,$error:i,$position:W,ref:te,className:u,"data-testid":m,$noBorder:g,tabIndex:-1,onFocus:()=>{Z||U||q(!0)},onBlur:e=>{Z&&!U&&te.current&&!te.current.contains(e.relatedTarget)&&(q(!1),null==f||f())},children:[e(Zs,{"aria-hidden":!0,id:J,children:N}),e($x,{"data-testid":T,children:d?Y?e(Sx,{"data-testid":"selector-label",tabIndex:0,role:"combobox","aria-haspopup":"listbox","aria-readonly":!0,"aria-expanded":!1,"aria-labelledby":p,"aria-describedby":b,"aria-invalid":v,children:e(Hs,{children:ne()})}):null:e(Us,{enabled:!d&&!c,isOpen:U,renderElement:ce,renderDropdown:ue,onOpen:se,onClose:le,onDismiss:de,clickToToggle:!0,offset:8,alignment:"right"===W?"right":"left",fitAvailableHeight:!0,customZIndex:P,rootNode:H,positionRef:te})}),e(Dx,{$readOnly:d,$position:W}),e(Zs,{"aria-hidden":!0,id:ee,children:y}),e(Cx,Object.assign({ref:n},x,{$position:W,$noBorder:g,readOnly:d,disabled:c,error:i,onChange:e=>{l&&l(e)},"data-testid":"input",styleType:"no-border","aria-labelledby":Gs(p,ee),"aria-describedby":b,"aria-invalid":v}))]})})})),Fx=k(Dd)`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0
        ${e=>e.$readOnly||e.$noBorder?"0":Ji["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,Ex=k(Dd)`
    display: flex;
    position: relative;
    width: 100%;
    padding: 0
        ${e=>e.$readOnly||e.$noBorder?"0":Ji["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,_x=k(nu)``,Ox=k.div`
    position: relative;
    display: flex;
    align-items: center;

    ${Gi["body-baseline-regular"]}
    color: ${qi.text};

    /* SVG Icon */
    svg {
        height: 1em;
        width: 1em;
    }

    ${e=>{if(e.$disabled)return F`
                color: ${qi["text-subtler"]};
            `}}

    ${e=>"right"===e.$position?F`
                    margin-left: ${e.$readOnly?Ji["spacing-4"]:Ji["spacing-12"]};
                `:F`
                    margin-right: ${e.$readOnly?Ji["spacing-4"]:Ji["spacing-12"]};
                `};
`,Tx=o.forwardRef(((r,n)=>{var{addon:o,error:i,className:a}=r,s=Fe(r,["addon","error","className"]);const l=()=>e(Ex,{$disabled:s.disabled,$error:i,$readOnly:s.readOnly,"data-testid":s["data-testid"],className:a,$noBorder:s.noBorder,children:e(_x,Object.assign({ref:n},s,{"data-testid":"input",styleType:"no-border"}))});if(!o)return l();{const{type:r="label",position:d="left"}=o,{allowClear:c}=s;switch(r){case"list":{const t=o.attributes;return t.options&&t.options.length>0?e(kx,Object.assign({ref:n,addon:o,error:i,className:a,noBorder:s.noBorder},s)):l()}case"custom":{const r=o.attributes;return r.children?t(Fx,{$error:i,$disabled:s.disabled,$readOnly:s.readOnly,"data-testid":s["data-testid"],$position:d,className:a,$noBorder:s.noBorder,children:[e(Ox,{"data-testid":"addon",$disabled:s.disabled,$readOnly:s.readOnly,$position:d,children:r.children}),e(_x,Object.assign({ref:n},s,{allowClear:c&&"right"!==d,error:i,"data-testid":"input",styleType:"no-border"}))]}):l()}default:{const r=o.attributes;return r.value?t(Fx,{$disabled:s.disabled,$error:i,$readOnly:s.readOnly,"data-testid":s["data-testid"],$position:d,className:a,$noBorder:s.noBorder,children:[e(Ox,{"data-testid":"addon",$disabled:s.disabled,$readOnly:s.readOnly,$position:d,children:r.value}),e(_x,Object.assign({ref:n},s,{allowClear:c&&"right"!==d,error:i,"data-testid":"input",styleType:"no-border"}))]}):l()}}}})),Ix=o.forwardRef(((t,r)=>{const{label:n,errorMessage:o,id:i,"data-error-testid":a,"data-testid":l,layoutType:d,mobileCols:c,tabletCols:u,desktopCols:h,xxsCols:f,xsCols:g,smCols:m,mdCols:p,lgCols:b,xlCols:v,xxlCols:y}=t,x=Fe(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]),[w]=s((()=>`form-field-${et.generate()}`)),$=null!=i?i:w;return e(Bs,{id:$,"data-testid":l,label:n,errorMessage:o,"data-error-testid":a,disabled:x.disabled,layoutType:d,mobileCols:c,tabletCols:u,desktopCols:h,xxsCols:f,xsCols:g,smCols:m,mdCols:p,lgCols:b,xlCols:v,xxlCols:y,children:e(Tx,Object.assign({ref:r,id:`${$}-base`,"data-testid":l?`${l}-base`:void 0,"aria-labelledby":`${$}-label`,error:!!o},x))})})),Mx=k(Tx)`
    padding: 0 0 0 ${({readOnly:e})=>e?"0":Ji["spacing-16"]};
    input {
        cursor: ${({readOnly:e,$isDisabled:t})=>e&&!t?"pointer":"initial"};
    }
`,Bx=k.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: ${({$isDisabled:e})=>e?"initial":"pointer"};
    color: ${({$isDisabled:e,$inactiveColor:t=qi.icon,$activeColor:r=qi["icon-primary"]})=>e?t:r};
    padding: ${Ji["spacing-12"]} ${Ji["spacing-16"]};

    svg {
        height: 1em;
        width: 1em;
    }
`,Ax=k.div`
    display: flex;
    align-items: center;
    height: 3rem;
`,zx=k(Ca.BodyBL)`
    color: ${qi["text-subtler"]};
`,jx=k(nl)`
    margin-right: ${Ji["spacing-8"]};
    color: ${qi.icon};
`,Lx=k.span`
    color: ${qi["text-primary"]};
    font-weight: ${Gi.Spec["weight-semibold"]};
`,Rx=k.span`
    display: flex;
    align-items: center;
    margin-right: ${Ji["spacing-8"]};
`,Px=k(xe)`
    color: ${qi["icon-warning"]};
    margin-right: ${Ji["spacing-8"]};
    height: 1em;
    width: 1em;
`,Hx=k.span`
    color: ${qi["text-warning"]};
`,Nx=k(Ed)`
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: none;
    background: transparent;
    cursor: pointer;

    ${Gi["body-baseline-regular"]}

    &:hover, &:active, &:focus {
        ${Lx} {
            color: ${qi["text-hover"]};
        }
    }
`,Wx=k.button`
    ${Gi["body-baseline-regular"]}
    color: ${qi.text};
    border: none;
    background: transparent;
    display: flex;
    align-items: center;
    cursor: pointer;
    text-align: left;
    width: 100%;
    justify-content: space-between;
    min-height: 3rem;
`,Yx=k.span`
    overflow-wrap: anywhere;
`,Vx=k.span`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${qi["icon-primary"]};
    padding: 0 1rem;
    flex-shrink: 0;

    svg {
        width: ${Gi.Spec["body-size-baseline"]};
        height: ${Gi.Spec["body-size-baseline"]};
    }
`;var Ux,Kx,Zx={exports:{}};
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */Ux=Zx,Kx=Zx.exports,function(){var e,t="Expected a function",r="__lodash_hash_undefined__",n="__lodash_placeholder__",o=16,i=32,a=64,s=128,l=256,d=1/0,c=9007199254740991,u=NaN,h=4294967295,f=[["ary",s],["bind",1],["bindKey",2],["curry",8],["curryRight",o],["flip",512],["partial",i],["partialRight",a],["rearg",l]],g="[object Arguments]",m="[object Array]",p="[object Boolean]",b="[object Date]",v="[object Error]",y="[object Function]",x="[object GeneratorFunction]",w="[object Map]",$="[object Number]",C="[object Object]",S="[object Promise]",D="[object RegExp]",k="[object Set]",F="[object String]",E="[object Symbol]",_="[object WeakMap]",O="[object ArrayBuffer]",T="[object DataView]",I="[object Float32Array]",M="[object Float64Array]",B="[object Int8Array]",A="[object Int16Array]",z="[object Int32Array]",j="[object Uint8Array]",L="[object Uint8ClampedArray]",R="[object Uint16Array]",P="[object Uint32Array]",H=/\b__p \+= '';/g,N=/\b(__p \+=) '' \+/g,W=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Y=/&(?:amp|lt|gt|quot|#39);/g,V=/[&<>"']/g,U=RegExp(Y.source),K=RegExp(V.source),Z=/<%-([\s\S]+?)%>/g,q=/<%([\s\S]+?)%>/g,G=/<%=([\s\S]+?)%>/g,X=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Q=/^\w*$/,J=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ee=/[\\^$.*+?()[\]{}|]/g,te=RegExp(ee.source),re=/^\s+/,ne=/\s/,oe=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,ie=/\{\n\/\* \[wrapped with (.+)\] \*/,ae=/,? & /,se=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,le=/[()=,{}\[\]\/\s]/,de=/\\(\\)?/g,ce=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,ue=/\w*$/,he=/^[-+]0x[0-9a-f]+$/i,fe=/^0b[01]+$/i,ge=/^\[object .+?Constructor\]$/,me=/^0o[0-7]+$/i,pe=/^(?:0|[1-9]\d*)$/,be=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ve=/($^)/,ye=/['\n\r\u2028\u2029\\]/g,xe="\\ud800-\\udfff",we="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",$e="\\u2700-\\u27bf",Ce="a-z\\xdf-\\xf6\\xf8-\\xff",Se="A-Z\\xc0-\\xd6\\xd8-\\xde",De="\\ufe0e\\ufe0f",ke="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Fe="['’]",Ee="["+xe+"]",Oe="["+ke+"]",Te="["+we+"]",Ie="\\d+",Me="["+$e+"]",Be="["+Ce+"]",Ae="[^"+xe+ke+Ie+$e+Ce+Se+"]",ze="\\ud83c[\\udffb-\\udfff]",je="[^"+xe+"]",Le="(?:\\ud83c[\\udde6-\\uddff]){2}",Re="[\\ud800-\\udbff][\\udc00-\\udfff]",Pe="["+Se+"]",He="\\u200d",Ne="(?:"+Be+"|"+Ae+")",We="(?:"+Pe+"|"+Ae+")",Ye="(?:['’](?:d|ll|m|re|s|t|ve))?",Ve="(?:['’](?:D|LL|M|RE|S|T|VE))?",Ue="(?:"+Te+"|"+ze+")?",Ke="["+De+"]?",Ze=Ke+Ue+"(?:"+He+"(?:"+[je,Le,Re].join("|")+")"+Ke+Ue+")*",qe="(?:"+[Me,Le,Re].join("|")+")"+Ze,Ge="(?:"+[je+Te+"?",Te,Le,Re,Ee].join("|")+")",Xe=RegExp(Fe,"g"),Qe=RegExp(Te,"g"),Je=RegExp(ze+"(?="+ze+")|"+Ge+Ze,"g"),et=RegExp([Pe+"?"+Be+"+"+Ye+"(?="+[Oe,Pe,"$"].join("|")+")",We+"+"+Ve+"(?="+[Oe,Pe+Ne,"$"].join("|")+")",Pe+"?"+Ne+"+"+Ye,Pe+"+"+Ve,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Ie,qe].join("|"),"g"),tt=RegExp("["+He+xe+we+De+"]"),rt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,nt=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],ot=-1,it={};it[I]=it[M]=it[B]=it[A]=it[z]=it[j]=it[L]=it[R]=it[P]=!0,it[g]=it[m]=it[O]=it[p]=it[T]=it[b]=it[v]=it[y]=it[w]=it[$]=it[C]=it[D]=it[k]=it[F]=it[_]=!1;var at={};at[g]=at[m]=at[O]=at[T]=at[p]=at[b]=at[I]=at[M]=at[B]=at[A]=at[z]=at[w]=at[$]=at[C]=at[D]=at[k]=at[F]=at[E]=at[j]=at[L]=at[R]=at[P]=!0,at[v]=at[y]=at[_]=!1;var st={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},lt=parseFloat,dt=parseInt,ct="object"==typeof _e&&_e&&_e.Object===Object&&_e,ut="object"==typeof self&&self&&self.Object===Object&&self,ht=ct||ut||Function("return this")(),ft=Kx&&!Kx.nodeType&&Kx,gt=ft&&Ux&&!Ux.nodeType&&Ux,mt=gt&&gt.exports===ft,pt=mt&&ct.process,bt=function(){try{var e=gt&&gt.require&&gt.require("util").types;return e||pt&&pt.binding&&pt.binding("util")}catch(e){}}(),vt=bt&&bt.isArrayBuffer,yt=bt&&bt.isDate,xt=bt&&bt.isMap,wt=bt&&bt.isRegExp,$t=bt&&bt.isSet,Ct=bt&&bt.isTypedArray;function St(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}function Dt(e,t,r,n){for(var o=-1,i=null==e?0:e.length;++o<i;){var a=e[o];t(n,a,r(a),e)}return n}function kt(e,t){for(var r=-1,n=null==e?0:e.length;++r<n&&!1!==t(e[r],r,e););return e}function Ft(e,t){for(var r=null==e?0:e.length;r--&&!1!==t(e[r],r,e););return e}function Et(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(!t(e[r],r,e))return!1;return!0}function _t(e,t){for(var r=-1,n=null==e?0:e.length,o=0,i=[];++r<n;){var a=e[r];t(a,r,e)&&(i[o++]=a)}return i}function Ot(e,t){return!(null==e||!e.length)&&Pt(e,t,0)>-1}function Tt(e,t,r){for(var n=-1,o=null==e?0:e.length;++n<o;)if(r(t,e[n]))return!0;return!1}function It(e,t){for(var r=-1,n=null==e?0:e.length,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o}function Mt(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];return e}function Bt(e,t,r,n){var o=-1,i=null==e?0:e.length;for(n&&i&&(r=e[++o]);++o<i;)r=t(r,e[o],o,e);return r}function At(e,t,r,n){var o=null==e?0:e.length;for(n&&o&&(r=e[--o]);o--;)r=t(r,e[o],o,e);return r}function zt(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1}var jt=Yt("length");function Lt(e,t,r){var n;return r(e,(function(e,r,o){if(t(e,r,o))return n=r,!1})),n}function Rt(e,t,r,n){for(var o=e.length,i=r+(n?1:-1);n?i--:++i<o;)if(t(e[i],i,e))return i;return-1}function Pt(e,t,r){return t==t?function(e,t,r){for(var n=r-1,o=e.length;++n<o;)if(e[n]===t)return n;return-1}(e,t,r):Rt(e,Nt,r)}function Ht(e,t,r,n){for(var o=r-1,i=e.length;++o<i;)if(n(e[o],t))return o;return-1}function Nt(e){return e!=e}function Wt(e,t){var r=null==e?0:e.length;return r?Kt(e,t)/r:u}function Yt(t){return function(r){return null==r?e:r[t]}}function Vt(t){return function(r){return null==t?e:t[r]}}function Ut(e,t,r,n,o){return o(e,(function(e,o,i){r=n?(n=!1,e):t(r,e,o,i)})),r}function Kt(t,r){for(var n,o=-1,i=t.length;++o<i;){var a=r(t[o]);a!==e&&(n=n===e?a:n+a)}return n}function Zt(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}function qt(e){return e?e.slice(0,hr(e)+1).replace(re,""):e}function Gt(e){return function(t){return e(t)}}function Xt(e,t){return It(t,(function(t){return e[t]}))}function Qt(e,t){return e.has(t)}function Jt(e,t){for(var r=-1,n=e.length;++r<n&&Pt(t,e[r],0)>-1;);return r}function er(e,t){for(var r=e.length;r--&&Pt(t,e[r],0)>-1;);return r}var tr=Vt({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),rr=Vt({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});function nr(e){return"\\"+st[e]}function or(e){return tt.test(e)}function ir(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r}function ar(e,t){return function(r){return e(t(r))}}function sr(e,t){for(var r=-1,o=e.length,i=0,a=[];++r<o;){var s=e[r];s!==t&&s!==n||(e[r]=n,a[i++]=r)}return a}function lr(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r}function dr(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=[e,e]})),r}function cr(e){return or(e)?function(e){for(var t=Je.lastIndex=0;Je.test(e);)++t;return t}(e):jt(e)}function ur(e){return or(e)?function(e){return e.match(Je)||[]}(e):function(e){return e.split("")}(e)}function hr(e){for(var t=e.length;t--&&ne.test(e.charAt(t)););return t}var fr=Vt({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"}),gr=function ne(xe){var we=(xe=null==xe?ht:gr.defaults(ht.Object(),xe,gr.pick(ht,nt))).Array,$e=xe.Date,Ce=xe.Error,Se=xe.Function,De=xe.Math,ke=xe.Object,Fe=xe.RegExp,Ee=xe.String,_e=xe.TypeError,Oe=we.prototype,Te=Se.prototype,Ie=ke.prototype,Me=xe["__core-js_shared__"],Be=Te.toString,Ae=Ie.hasOwnProperty,ze=0,je=function(){var e=/[^.]+$/.exec(Me&&Me.keys&&Me.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),Le=Ie.toString,Re=Be.call(ke),Pe=ht._,He=Fe("^"+Be.call(Ae).replace(ee,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ne=mt?xe.Buffer:e,We=xe.Symbol,Ye=xe.Uint8Array,Ve=Ne?Ne.allocUnsafe:e,Ue=ar(ke.getPrototypeOf,ke),Ke=ke.create,Ze=Ie.propertyIsEnumerable,qe=Oe.splice,Ge=We?We.isConcatSpreadable:e,Je=We?We.iterator:e,tt=We?We.toStringTag:e,st=function(){try{var e=hi(ke,"defineProperty");return e({},"",{}),e}catch(e){}}(),ct=xe.clearTimeout!==ht.clearTimeout&&xe.clearTimeout,ut=$e&&$e.now!==ht.Date.now&&$e.now,ft=xe.setTimeout!==ht.setTimeout&&xe.setTimeout,gt=De.ceil,pt=De.floor,bt=ke.getOwnPropertySymbols,jt=Ne?Ne.isBuffer:e,Vt=xe.isFinite,mr=Oe.join,pr=ar(ke.keys,ke),br=De.max,vr=De.min,yr=$e.now,xr=xe.parseInt,wr=De.random,$r=Oe.reverse,Cr=hi(xe,"DataView"),Sr=hi(xe,"Map"),Dr=hi(xe,"Promise"),kr=hi(xe,"Set"),Fr=hi(xe,"WeakMap"),Er=hi(ke,"create"),_r=Fr&&new Fr,Or={},Tr=Li(Cr),Ir=Li(Sr),Mr=Li(Dr),Br=Li(kr),Ar=Li(Fr),zr=We?We.prototype:e,jr=zr?zr.valueOf:e,Lr=zr?zr.toString:e;function Rr(e){if(ts(e)&&!Ya(e)&&!(e instanceof Wr)){if(e instanceof Nr)return e;if(Ae.call(e,"__wrapped__"))return Ri(e)}return new Nr(e)}var Pr=function(){function t(){}return function(r){if(!es(r))return{};if(Ke)return Ke(r);t.prototype=r;var n=new t;return t.prototype=e,n}}();function Hr(){}function Nr(t,r){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!r,this.__index__=0,this.__values__=e}function Wr(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=h,this.__views__=[]}function Yr(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Vr(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Ur(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Kr(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new Ur;++t<r;)this.add(e[t])}function Zr(e){var t=this.__data__=new Vr(e);this.size=t.size}function qr(e,t){var r=Ya(e),n=!r&&Wa(e),o=!r&&!n&&Za(e),i=!r&&!n&&!o&&ds(e),a=r||n||o||i,s=a?Zt(e.length,Ee):[],l=s.length;for(var d in e)!t&&!Ae.call(e,d)||a&&("length"==d||o&&("offset"==d||"parent"==d)||i&&("buffer"==d||"byteLength"==d||"byteOffset"==d)||yi(d,l))||s.push(d);return s}function Gr(t){var r=t.length;return r?t[Zn(0,r-1)]:e}function Xr(e,t){return Ai(Oo(e),sn(t,0,e.length))}function Qr(e){return Ai(Oo(e))}function Jr(t,r,n){(n!==e&&!Pa(t[r],n)||n===e&&!(r in t))&&on(t,r,n)}function en(t,r,n){var o=t[r];Ae.call(t,r)&&Pa(o,n)&&(n!==e||r in t)||on(t,r,n)}function tn(e,t){for(var r=e.length;r--;)if(Pa(e[r][0],t))return r;return-1}function rn(e,t,r,n){return hn(e,(function(e,o,i){t(n,e,r(e),i)})),n}function nn(e,t){return e&&To(t,Ts(t),e)}function on(e,t,r){"__proto__"==t&&st?st(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}function an(t,r){for(var n=-1,o=r.length,i=we(o),a=null==t;++n<o;)i[n]=a?e:ks(t,r[n]);return i}function sn(t,r,n){return t==t&&(n!==e&&(t=t<=n?t:n),r!==e&&(t=t>=r?t:r)),t}function ln(t,r,n,o,i,a){var s,l=1&r,d=2&r,c=4&r;if(n&&(s=i?n(t,o,i,a):n(t)),s!==e)return s;if(!es(t))return t;var u=Ya(t);if(u){if(s=function(e){var t=e.length,r=new e.constructor(t);return t&&"string"==typeof e[0]&&Ae.call(e,"index")&&(r.index=e.index,r.input=e.input),r}(t),!l)return Oo(t,s)}else{var h=mi(t),f=h==y||h==x;if(Za(t))return So(t,l);if(h==C||h==g||f&&!i){if(s=d||f?{}:bi(t),!l)return d?function(e,t){return To(e,gi(e),t)}(t,function(e,t){return e&&To(t,Is(t),e)}(s,t)):function(e,t){return To(e,fi(e),t)}(t,nn(s,t))}else{if(!at[h])return i?t:{};s=function(e,t,r){var n,o=e.constructor;switch(t){case O:return Do(e);case p:case b:return new o(+e);case T:return function(e,t){var r=t?Do(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}(e,r);case I:case M:case B:case A:case z:case j:case L:case R:case P:return ko(e,r);case w:return new o;case $:case F:return new o(e);case D:return function(e){var t=new e.constructor(e.source,ue.exec(e));return t.lastIndex=e.lastIndex,t}(e);case k:return new o;case E:return n=e,jr?ke(jr.call(n)):{}}}(t,h,l)}}a||(a=new Zr);var m=a.get(t);if(m)return m;a.set(t,s),as(t)?t.forEach((function(e){s.add(ln(e,r,n,e,t,a))})):rs(t)&&t.forEach((function(e,o){s.set(o,ln(e,r,n,o,t,a))}));var v=u?e:(c?d?ii:oi:d?Is:Ts)(t);return kt(v||t,(function(e,o){v&&(e=t[o=e]),en(s,o,ln(e,r,n,o,t,a))})),s}function dn(t,r,n){var o=n.length;if(null==t)return!o;for(t=ke(t);o--;){var i=n[o],a=r[i],s=t[i];if(s===e&&!(i in t)||!a(s))return!1}return!0}function cn(r,n,o){if("function"!=typeof r)throw new _e(t);return Ti((function(){r.apply(e,o)}),n)}function un(e,t,r,n){var o=-1,i=Ot,a=!0,s=e.length,l=[],d=t.length;if(!s)return l;r&&(t=It(t,Gt(r))),n?(i=Tt,a=!1):t.length>=200&&(i=Qt,a=!1,t=new Kr(t));e:for(;++o<s;){var c=e[o],u=null==r?c:r(c);if(c=n||0!==c?c:0,a&&u==u){for(var h=d;h--;)if(t[h]===u)continue e;l.push(c)}else i(t,u,n)||l.push(c)}return l}Rr.templateSettings={escape:Z,evaluate:q,interpolate:G,variable:"",imports:{_:Rr}},Rr.prototype=Hr.prototype,Rr.prototype.constructor=Rr,Nr.prototype=Pr(Hr.prototype),Nr.prototype.constructor=Nr,Wr.prototype=Pr(Hr.prototype),Wr.prototype.constructor=Wr,Yr.prototype.clear=function(){this.__data__=Er?Er(null):{},this.size=0},Yr.prototype.delete=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Yr.prototype.get=function(t){var n=this.__data__;if(Er){var o=n[t];return o===r?e:o}return Ae.call(n,t)?n[t]:e},Yr.prototype.has=function(t){var r=this.__data__;return Er?r[t]!==e:Ae.call(r,t)},Yr.prototype.set=function(t,n){var o=this.__data__;return this.size+=this.has(t)?0:1,o[t]=Er&&n===e?r:n,this},Vr.prototype.clear=function(){this.__data__=[],this.size=0},Vr.prototype.delete=function(e){var t=this.__data__,r=tn(t,e);return!(r<0||(r==t.length-1?t.pop():qe.call(t,r,1),--this.size,0))},Vr.prototype.get=function(t){var r=this.__data__,n=tn(r,t);return n<0?e:r[n][1]},Vr.prototype.has=function(e){return tn(this.__data__,e)>-1},Vr.prototype.set=function(e,t){var r=this.__data__,n=tn(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},Ur.prototype.clear=function(){this.size=0,this.__data__={hash:new Yr,map:new(Sr||Vr),string:new Yr}},Ur.prototype.delete=function(e){var t=ci(this,e).delete(e);return this.size-=t?1:0,t},Ur.prototype.get=function(e){return ci(this,e).get(e)},Ur.prototype.has=function(e){return ci(this,e).has(e)},Ur.prototype.set=function(e,t){var r=ci(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},Kr.prototype.add=Kr.prototype.push=function(e){return this.__data__.set(e,r),this},Kr.prototype.has=function(e){return this.__data__.has(e)},Zr.prototype.clear=function(){this.__data__=new Vr,this.size=0},Zr.prototype.delete=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r},Zr.prototype.get=function(e){return this.__data__.get(e)},Zr.prototype.has=function(e){return this.__data__.has(e)},Zr.prototype.set=function(e,t){var r=this.__data__;if(r instanceof Vr){var n=r.__data__;if(!Sr||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new Ur(n)}return r.set(e,t),this.size=r.size,this};var hn=Bo(xn),fn=Bo(wn,!0);function gn(e,t){var r=!0;return hn(e,(function(e,n,o){return r=!!t(e,n,o)})),r}function mn(t,r,n){for(var o=-1,i=t.length;++o<i;){var a=t[o],s=r(a);if(null!=s&&(l===e?s==s&&!ls(s):n(s,l)))var l=s,d=a}return d}function pn(e,t){var r=[];return hn(e,(function(e,n,o){t(e,n,o)&&r.push(e)})),r}function bn(e,t,r,n,o){var i=-1,a=e.length;for(r||(r=vi),o||(o=[]);++i<a;){var s=e[i];t>0&&r(s)?t>1?bn(s,t-1,r,n,o):Mt(o,s):n||(o[o.length]=s)}return o}var vn=Ao(),yn=Ao(!0);function xn(e,t){return e&&vn(e,t,Ts)}function wn(e,t){return e&&yn(e,t,Ts)}function $n(e,t){return _t(t,(function(t){return Xa(e[t])}))}function Cn(t,r){for(var n=0,o=(r=xo(r,t)).length;null!=t&&n<o;)t=t[ji(r[n++])];return n&&n==o?t:e}function Sn(e,t,r){var n=t(e);return Ya(e)?n:Mt(n,r(e))}function Dn(t){return null==t?t===e?"[object Undefined]":"[object Null]":tt&&tt in ke(t)?function(t){var r=Ae.call(t,tt),n=t[tt];try{t[tt]=e;var o=!0}catch(e){}var i=Le.call(t);return o&&(r?t[tt]=n:delete t[tt]),i}(t):function(e){return Le.call(e)}(t)}function kn(e,t){return e>t}function Fn(e,t){return null!=e&&Ae.call(e,t)}function En(e,t){return null!=e&&t in ke(e)}function _n(t,r,n){for(var o=n?Tt:Ot,i=t[0].length,a=t.length,s=a,l=we(a),d=1/0,c=[];s--;){var u=t[s];s&&r&&(u=It(u,Gt(r))),d=vr(u.length,d),l[s]=!n&&(r||i>=120&&u.length>=120)?new Kr(s&&u):e}u=t[0];var h=-1,f=l[0];e:for(;++h<i&&c.length<d;){var g=u[h],m=r?r(g):g;if(g=n||0!==g?g:0,!(f?Qt(f,m):o(c,m,n))){for(s=a;--s;){var p=l[s];if(!(p?Qt(p,m):o(t[s],m,n)))continue e}f&&f.push(m),c.push(g)}}return c}function On(t,r,n){var o=null==(t=Ei(t,r=xo(r,t)))?t:t[ji(Gi(r))];return null==o?e:St(o,t,n)}function Tn(e){return ts(e)&&Dn(e)==g}function In(t,r,n,o,i){return t===r||(null==t||null==r||!ts(t)&&!ts(r)?t!=t&&r!=r:function(t,r,n,o,i,a){var s=Ya(t),l=Ya(r),d=s?m:mi(t),c=l?m:mi(r),u=(d=d==g?C:d)==C,h=(c=c==g?C:c)==C,f=d==c;if(f&&Za(t)){if(!Za(r))return!1;s=!0,u=!1}if(f&&!u)return a||(a=new Zr),s||ds(t)?ri(t,r,n,o,i,a):function(e,t,r,n,o,i,a){switch(r){case T:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case O:return!(e.byteLength!=t.byteLength||!i(new Ye(e),new Ye(t)));case p:case b:case $:return Pa(+e,+t);case v:return e.name==t.name&&e.message==t.message;case D:case F:return e==t+"";case w:var s=ir;case k:var l=1&n;if(s||(s=lr),e.size!=t.size&&!l)return!1;var d=a.get(e);if(d)return d==t;n|=2,a.set(e,t);var c=ri(s(e),s(t),n,o,i,a);return a.delete(e),c;case E:if(jr)return jr.call(e)==jr.call(t)}return!1}(t,r,d,n,o,i,a);if(!(1&n)){var y=u&&Ae.call(t,"__wrapped__"),x=h&&Ae.call(r,"__wrapped__");if(y||x){var S=y?t.value():t,_=x?r.value():r;return a||(a=new Zr),i(S,_,n,o,a)}}return!!f&&(a||(a=new Zr),function(t,r,n,o,i,a){var s=1&n,l=oi(t),d=l.length,c=oi(r),u=c.length;if(d!=u&&!s)return!1;for(var h=d;h--;){var f=l[h];if(!(s?f in r:Ae.call(r,f)))return!1}var g=a.get(t),m=a.get(r);if(g&&m)return g==r&&m==t;var p=!0;a.set(t,r),a.set(r,t);for(var b=s;++h<d;){var v=t[f=l[h]],y=r[f];if(o)var x=s?o(y,v,f,r,t,a):o(v,y,f,t,r,a);if(!(x===e?v===y||i(v,y,n,o,a):x)){p=!1;break}b||(b="constructor"==f)}if(p&&!b){var w=t.constructor,$=r.constructor;w==$||!("constructor"in t)||!("constructor"in r)||"function"==typeof w&&w instanceof w&&"function"==typeof $&&$ instanceof $||(p=!1)}return a.delete(t),a.delete(r),p}(t,r,n,o,i,a))}(t,r,n,o,In,i))}function Mn(t,r,n,o){var i=n.length,a=i,s=!o;if(null==t)return!a;for(t=ke(t);i--;){var l=n[i];if(s&&l[2]?l[1]!==t[l[0]]:!(l[0]in t))return!1}for(;++i<a;){var d=(l=n[i])[0],c=t[d],u=l[1];if(s&&l[2]){if(c===e&&!(d in t))return!1}else{var h=new Zr;if(o)var f=o(c,u,d,t,r,h);if(!(f===e?In(u,c,3,o,h):f))return!1}}return!0}function Bn(e){return!(!es(e)||(t=e,je&&je in t))&&(Xa(e)?He:ge).test(Li(e));var t}function An(e){return"function"==typeof e?e:null==e?nl:"object"==typeof e?Ya(e)?Hn(e[0],e[1]):Pn(e):hl(e)}function zn(e){if(!Si(e))return pr(e);var t=[];for(var r in ke(e))Ae.call(e,r)&&"constructor"!=r&&t.push(r);return t}function jn(e){if(!es(e))return function(e){var t=[];if(null!=e)for(var r in ke(e))t.push(r);return t}(e);var t=Si(e),r=[];for(var n in e)("constructor"!=n||!t&&Ae.call(e,n))&&r.push(n);return r}function Ln(e,t){return e<t}function Rn(e,t){var r=-1,n=Ua(e)?we(e.length):[];return hn(e,(function(e,o,i){n[++r]=t(e,o,i)})),n}function Pn(e){var t=ui(e);return 1==t.length&&t[0][2]?ki(t[0][0],t[0][1]):function(r){return r===e||Mn(r,e,t)}}function Hn(t,r){return wi(t)&&Di(r)?ki(ji(t),r):function(n){var o=ks(n,t);return o===e&&o===r?Fs(n,t):In(r,o,3)}}function Nn(t,r,n,o,i){t!==r&&vn(r,(function(a,s){if(i||(i=new Zr),es(a))!function(t,r,n,o,i,a,s){var l=_i(t,n),d=_i(r,n),c=s.get(d);if(c)Jr(t,n,c);else{var u=a?a(l,d,n+"",t,r,s):e,h=u===e;if(h){var f=Ya(d),g=!f&&Za(d),m=!f&&!g&&ds(d);u=d,f||g||m?Ya(l)?u=l:Ka(l)?u=Oo(l):g?(h=!1,u=So(d,!0)):m?(h=!1,u=ko(d,!0)):u=[]:os(d)||Wa(d)?(u=l,Wa(l)?u=bs(l):es(l)&&!Xa(l)||(u=bi(d))):h=!1}h&&(s.set(d,u),i(u,d,o,a,s),s.delete(d)),Jr(t,n,u)}}(t,r,s,n,Nn,o,i);else{var l=o?o(_i(t,s),a,s+"",t,r,i):e;l===e&&(l=a),Jr(t,s,l)}}),Is)}function Wn(t,r){var n=t.length;if(n)return yi(r+=r<0?n:0,n)?t[r]:e}function Yn(e,t,r){t=t.length?It(t,(function(e){return Ya(e)?function(t){return Cn(t,1===e.length?e[0]:e)}:e})):[nl];var n=-1;t=It(t,Gt(di()));var o=Rn(e,(function(e,r,o){var i=It(t,(function(t){return t(e)}));return{criteria:i,index:++n,value:e}}));return function(e,t){var r=e.length;for(e.sort(t);r--;)e[r]=e[r].value;return e}(o,(function(e,t){return function(e,t,r){for(var n=-1,o=e.criteria,i=t.criteria,a=o.length,s=r.length;++n<a;){var l=Fo(o[n],i[n]);if(l)return n>=s?l:l*("desc"==r[n]?-1:1)}return e.index-t.index}(e,t,r)}))}function Vn(e,t,r){for(var n=-1,o=t.length,i={};++n<o;){var a=t[n],s=Cn(e,a);r(s,a)&&Jn(i,xo(a,e),s)}return i}function Un(e,t,r,n){var o=n?Ht:Pt,i=-1,a=t.length,s=e;for(e===t&&(t=Oo(t)),r&&(s=It(e,Gt(r)));++i<a;)for(var l=0,d=t[i],c=r?r(d):d;(l=o(s,c,l,n))>-1;)s!==e&&qe.call(s,l,1),qe.call(e,l,1);return e}function Kn(e,t){for(var r=e?t.length:0,n=r-1;r--;){var o=t[r];if(r==n||o!==i){var i=o;yi(o)?qe.call(e,o,1):ho(e,o)}}return e}function Zn(e,t){return e+pt(wr()*(t-e+1))}function qn(e,t){var r="";if(!e||t<1||t>c)return r;do{t%2&&(r+=e),(t=pt(t/2))&&(e+=e)}while(t);return r}function Gn(e,t){return Ii(Fi(e,t,nl),e+"")}function Xn(e){return Gr(Ps(e))}function Qn(e,t){var r=Ps(e);return Ai(r,sn(t,0,r.length))}function Jn(t,r,n,o){if(!es(t))return t;for(var i=-1,a=(r=xo(r,t)).length,s=a-1,l=t;null!=l&&++i<a;){var d=ji(r[i]),c=n;if("__proto__"===d||"constructor"===d||"prototype"===d)return t;if(i!=s){var u=l[d];(c=o?o(u,d,l):e)===e&&(c=es(u)?u:yi(r[i+1])?[]:{})}en(l,d,c),l=l[d]}return t}var eo=_r?function(e,t){return _r.set(e,t),e}:nl,to=st?function(e,t){return st(e,"toString",{configurable:!0,enumerable:!1,value:el(t),writable:!0})}:nl;function ro(e){return Ai(Ps(e))}function no(e,t,r){var n=-1,o=e.length;t<0&&(t=-t>o?0:o+t),(r=r>o?o:r)<0&&(r+=o),o=t>r?0:r-t>>>0,t>>>=0;for(var i=we(o);++n<o;)i[n]=e[n+t];return i}function oo(e,t){var r;return hn(e,(function(e,n,o){return!(r=t(e,n,o))})),!!r}function io(e,t,r){var n=0,o=null==e?n:e.length;if("number"==typeof t&&t==t&&o<=2147483647){for(;n<o;){var i=n+o>>>1,a=e[i];null!==a&&!ls(a)&&(r?a<=t:a<t)?n=i+1:o=i}return o}return ao(e,t,nl,r)}function ao(t,r,n,o){var i=0,a=null==t?0:t.length;if(0===a)return 0;for(var s=(r=n(r))!=r,l=null===r,d=ls(r),c=r===e;i<a;){var u=pt((i+a)/2),h=n(t[u]),f=h!==e,g=null===h,m=h==h,p=ls(h);if(s)var b=o||m;else b=c?m&&(o||f):l?m&&f&&(o||!g):d?m&&f&&!g&&(o||!p):!g&&!p&&(o?h<=r:h<r);b?i=u+1:a=u}return vr(a,4294967294)}function so(e,t){for(var r=-1,n=e.length,o=0,i=[];++r<n;){var a=e[r],s=t?t(a):a;if(!r||!Pa(s,l)){var l=s;i[o++]=0===a?0:a}}return i}function lo(e){return"number"==typeof e?e:ls(e)?u:+e}function co(e){if("string"==typeof e)return e;if(Ya(e))return It(e,co)+"";if(ls(e))return Lr?Lr.call(e):"";var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function uo(e,t,r){var n=-1,o=Ot,i=e.length,a=!0,s=[],l=s;if(r)a=!1,o=Tt;else if(i>=200){var d=t?null:Go(e);if(d)return lr(d);a=!1,o=Qt,l=new Kr}else l=t?[]:s;e:for(;++n<i;){var c=e[n],u=t?t(c):c;if(c=r||0!==c?c:0,a&&u==u){for(var h=l.length;h--;)if(l[h]===u)continue e;t&&l.push(u),s.push(c)}else o(l,u,r)||(l!==s&&l.push(u),s.push(c))}return s}function ho(e,t){var r=-1,n=(t=xo(t,e)).length;if(!n)return!0;for(var o=null==e||"object"!=typeof e&&"function"!=typeof e;++r<n;){var i=t[r];if("string"==typeof i){if("__proto__"===i&&!Ae.call(e,"__proto__"))return!1;if("constructor"===i&&r+1<n&&"string"==typeof t[r+1]&&"prototype"===t[r+1]){if(o&&0===r)continue;return!1}}}var a=Ei(e,t);return null==a||delete a[ji(Gi(t))]}function fo(e,t,r,n){return Jn(e,t,r(Cn(e,t)),n)}function go(e,t,r,n){for(var o=e.length,i=n?o:-1;(n?i--:++i<o)&&t(e[i],i,e););return r?no(e,n?0:i,n?i+1:o):no(e,n?i+1:0,n?o:i)}function mo(e,t){var r=e;return r instanceof Wr&&(r=r.value()),Bt(t,(function(e,t){return t.func.apply(t.thisArg,Mt([e],t.args))}),r)}function po(e,t,r){var n=e.length;if(n<2)return n?uo(e[0]):[];for(var o=-1,i=we(n);++o<n;)for(var a=e[o],s=-1;++s<n;)s!=o&&(i[o]=un(i[o]||a,e[s],t,r));return uo(bn(i,1),t,r)}function bo(t,r,n){for(var o=-1,i=t.length,a=r.length,s={};++o<i;){var l=o<a?r[o]:e;n(s,t[o],l)}return s}function vo(e){return Ka(e)?e:[]}function yo(e){return"function"==typeof e?e:nl}function xo(e,t){return Ya(e)?e:wi(e,t)?[e]:zi(vs(e))}var wo=Gn;function $o(t,r,n){var o=t.length;return n=n===e?o:n,!r&&n>=o?t:no(t,r,n)}var Co=ct||function(e){return ht.clearTimeout(e)};function So(e,t){if(t)return e.slice();var r=e.length,n=Ve?Ve(r):new e.constructor(r);return e.copy(n),n}function Do(e){var t=new e.constructor(e.byteLength);return new Ye(t).set(new Ye(e)),t}function ko(e,t){var r=t?Do(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}function Fo(t,r){if(t!==r){var n=t!==e,o=null===t,i=t==t,a=ls(t),s=r!==e,l=null===r,d=r==r,c=ls(r);if(!l&&!c&&!a&&t>r||a&&s&&d&&!l&&!c||o&&s&&d||!n&&d||!i)return 1;if(!o&&!a&&!c&&t<r||c&&n&&i&&!o&&!a||l&&n&&i||!s&&i||!d)return-1}return 0}function Eo(e,t,r,n){for(var o=-1,i=e.length,a=r.length,s=-1,l=t.length,d=br(i-a,0),c=we(l+d),u=!n;++s<l;)c[s]=t[s];for(;++o<a;)(u||o<i)&&(c[r[o]]=e[o]);for(;d--;)c[s++]=e[o++];return c}function _o(e,t,r,n){for(var o=-1,i=e.length,a=-1,s=r.length,l=-1,d=t.length,c=br(i-s,0),u=we(c+d),h=!n;++o<c;)u[o]=e[o];for(var f=o;++l<d;)u[f+l]=t[l];for(;++a<s;)(h||o<i)&&(u[f+r[a]]=e[o++]);return u}function Oo(e,t){var r=-1,n=e.length;for(t||(t=we(n));++r<n;)t[r]=e[r];return t}function To(t,r,n,o){var i=!n;n||(n={});for(var a=-1,s=r.length;++a<s;){var l=r[a],d=o?o(n[l],t[l],l,n,t):e;d===e&&(d=t[l]),i?on(n,l,d):en(n,l,d)}return n}function Io(e,t){return function(r,n){var o=Ya(r)?Dt:rn,i=t?t():{};return o(r,e,di(n,2),i)}}function Mo(t){return Gn((function(r,n){var o=-1,i=n.length,a=i>1?n[i-1]:e,s=i>2?n[2]:e;for(a=t.length>3&&"function"==typeof a?(i--,a):e,s&&xi(n[0],n[1],s)&&(a=i<3?e:a,i=1),r=ke(r);++o<i;){var l=n[o];l&&t(r,l,o,a)}return r}))}function Bo(e,t){return function(r,n){if(null==r)return r;if(!Ua(r))return e(r,n);for(var o=r.length,i=t?o:-1,a=ke(r);(t?i--:++i<o)&&!1!==n(a[i],i,a););return r}}function Ao(e){return function(t,r,n){for(var o=-1,i=ke(t),a=n(t),s=a.length;s--;){var l=a[e?s:++o];if(!1===r(i[l],l,i))break}return t}}function zo(t){return function(r){var n=or(r=vs(r))?ur(r):e,o=n?n[0]:r.charAt(0),i=n?$o(n,1).join(""):r.slice(1);return o[t]()+i}}function jo(e){return function(t){return Bt(Xs(Ws(t).replace(Xe,"")),e,"")}}function Lo(e){return function(){var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r=Pr(e.prototype),n=e.apply(r,t);return es(n)?n:r}}function Ro(t){return function(r,n,o){var i=ke(r);if(!Ua(r)){var a=di(n,3);r=Ts(r),n=function(e){return a(i[e],e,i)}}var s=t(r,n,o);return s>-1?i[a?r[s]:s]:e}}function Po(r){return ni((function(n){var o=n.length,i=o,a=Nr.prototype.thru;for(r&&n.reverse();i--;){var s=n[i];if("function"!=typeof s)throw new _e(t);if(a&&!l&&"wrapper"==si(s))var l=new Nr([],!0)}for(i=l?i:o;++i<o;){var d=si(s=n[i]),c="wrapper"==d?ai(s):e;l=c&&$i(c[0])&&424==c[1]&&!c[4].length&&1==c[9]?l[si(c[0])].apply(l,c[3]):1==s.length&&$i(s)?l[d]():l.thru(s)}return function(){var e=arguments,t=e[0];if(l&&1==e.length&&Ya(t))return l.plant(t).value();for(var r=0,i=o?n[r].apply(this,e):t;++r<o;)i=n[r].call(this,i);return i}}))}function Ho(t,r,n,o,i,a,l,d,c,u){var h=r&s,f=1&r,g=2&r,m=24&r,p=512&r,b=g?e:Lo(t);return function s(){for(var v=arguments.length,y=we(v),x=v;x--;)y[x]=arguments[x];if(m)var w=li(s),$=function(e,t){for(var r=e.length,n=0;r--;)e[r]===t&&++n;return n}(y,w);if(o&&(y=Eo(y,o,i,m)),a&&(y=_o(y,a,l,m)),v-=$,m&&v<u){var C=sr(y,w);return Zo(t,r,Ho,s.placeholder,n,y,C,d,c,u-v)}var S=f?n:this,D=g?S[t]:t;return v=y.length,d?y=function(t,r){for(var n=t.length,o=vr(r.length,n),i=Oo(t);o--;){var a=r[o];t[o]=yi(a,n)?i[a]:e}return t}(y,d):p&&v>1&&y.reverse(),h&&c<v&&(y.length=c),this&&this!==ht&&this instanceof s&&(D=b||Lo(D)),D.apply(S,y)}}function No(e,t){return function(r,n){return function(e,t,r,n){return xn(e,(function(e,o,i){t(n,r(e),o,i)})),n}(r,e,t(n),{})}}function Wo(t,r){return function(n,o){var i;if(n===e&&o===e)return r;if(n!==e&&(i=n),o!==e){if(i===e)return o;"string"==typeof n||"string"==typeof o?(n=co(n),o=co(o)):(n=lo(n),o=lo(o)),i=t(n,o)}return i}}function Yo(e){return ni((function(t){return t=It(t,Gt(di())),Gn((function(r){var n=this;return e(t,(function(e){return St(e,n,r)}))}))}))}function Vo(t,r){var n=(r=r===e?" ":co(r)).length;if(n<2)return n?qn(r,t):r;var o=qn(r,gt(t/cr(r)));return or(r)?$o(ur(o),0,t).join(""):o.slice(0,t)}function Uo(t){return function(r,n,o){return o&&"number"!=typeof o&&xi(r,n,o)&&(n=o=e),r=fs(r),n===e?(n=r,r=0):n=fs(n),function(e,t,r,n){for(var o=-1,i=br(gt((t-e)/(r||1)),0),a=we(i);i--;)a[n?i:++o]=e,e+=r;return a}(r,n,o=o===e?r<n?1:-1:fs(o),t)}}function Ko(e){return function(t,r){return"string"==typeof t&&"string"==typeof r||(t=ps(t),r=ps(r)),e(t,r)}}function Zo(t,r,n,o,s,l,d,c,u,h){var f=8&r;r|=f?i:a,4&(r&=~(f?a:i))||(r&=-4);var g=[t,r,s,f?l:e,f?d:e,f?e:l,f?e:d,c,u,h],m=n.apply(e,g);return $i(t)&&Oi(m,g),m.placeholder=o,Mi(m,t,r)}function qo(e){var t=De[e];return function(e,r){if(e=ps(e),(r=null==r?0:vr(gs(r),292))&&Vt(e)){var n=(vs(e)+"e").split("e");return+((n=(vs(t(n[0]+"e"+(+n[1]+r)))+"e").split("e"))[0]+"e"+(+n[1]-r))}return t(e)}}var Go=kr&&1/lr(new kr([,-0]))[1]==d?function(e){return new kr(e)}:ll;function Xo(e){return function(t){var r=mi(t);return r==w?ir(t):r==k?dr(t):function(e,t){return It(t,(function(t){return[t,e[t]]}))}(t,e(t))}}function Qo(r,d,c,u,h,f,g,m){var p=2&d;if(!p&&"function"!=typeof r)throw new _e(t);var b=u?u.length:0;if(b||(d&=-97,u=h=e),g=g===e?g:br(gs(g),0),m=m===e?m:gs(m),b-=h?h.length:0,d&a){var v=u,y=h;u=h=e}var x=p?e:ai(r),w=[r,d,c,u,h,v,y,f,g,m];if(x&&function(e,t){var r=e[1],o=t[1],i=r|o,a=i<131,d=o==s&&8==r||o==s&&r==l&&e[7].length<=t[8]||384==o&&t[7].length<=t[8]&&8==r;if(!a&&!d)return e;1&o&&(e[2]=t[2],i|=1&r?0:4);var c=t[3];if(c){var u=e[3];e[3]=u?Eo(u,c,t[4]):c,e[4]=u?sr(e[3],n):t[4]}(c=t[5])&&(u=e[5],e[5]=u?_o(u,c,t[6]):c,e[6]=u?sr(e[5],n):t[6]),(c=t[7])&&(e[7]=c),o&s&&(e[8]=null==e[8]?t[8]:vr(e[8],t[8])),null==e[9]&&(e[9]=t[9]),e[0]=t[0],e[1]=i}(w,x),r=w[0],d=w[1],c=w[2],u=w[3],h=w[4],!(m=w[9]=w[9]===e?p?0:r.length:br(w[9]-b,0))&&24&d&&(d&=-25),d&&1!=d)$=8==d||d==o?function(t,r,n){var o=Lo(t);return function i(){for(var a=arguments.length,s=we(a),l=a,d=li(i);l--;)s[l]=arguments[l];var c=a<3&&s[0]!==d&&s[a-1]!==d?[]:sr(s,d);return(a-=c.length)<n?Zo(t,r,Ho,i.placeholder,e,s,c,e,e,n-a):St(this&&this!==ht&&this instanceof i?o:t,this,s)}}(r,d,m):d!=i&&33!=d||h.length?Ho.apply(e,w):function(e,t,r,n){var o=1&t,i=Lo(e);return function t(){for(var a=-1,s=arguments.length,l=-1,d=n.length,c=we(d+s),u=this&&this!==ht&&this instanceof t?i:e;++l<d;)c[l]=n[l];for(;s--;)c[l++]=arguments[++a];return St(u,o?r:this,c)}}(r,d,c,u);else var $=function(e,t,r){var n=1&t,o=Lo(e);return function t(){return(this&&this!==ht&&this instanceof t?o:e).apply(n?r:this,arguments)}}(r,d,c);return Mi((x?eo:Oi)($,w),r,d)}function Jo(t,r,n,o){return t===e||Pa(t,Ie[n])&&!Ae.call(o,n)?r:t}function ei(t,r,n,o,i,a){return es(t)&&es(r)&&(a.set(r,t),Nn(t,r,e,ei,a),a.delete(r)),t}function ti(t){return os(t)?e:t}function ri(t,r,n,o,i,a){var s=1&n,l=t.length,d=r.length;if(l!=d&&!(s&&d>l))return!1;var c=a.get(t),u=a.get(r);if(c&&u)return c==r&&u==t;var h=-1,f=!0,g=2&n?new Kr:e;for(a.set(t,r),a.set(r,t);++h<l;){var m=t[h],p=r[h];if(o)var b=s?o(p,m,h,r,t,a):o(m,p,h,t,r,a);if(b!==e){if(b)continue;f=!1;break}if(g){if(!zt(r,(function(e,t){if(!Qt(g,t)&&(m===e||i(m,e,n,o,a)))return g.push(t)}))){f=!1;break}}else if(m!==p&&!i(m,p,n,o,a)){f=!1;break}}return a.delete(t),a.delete(r),f}function ni(t){return Ii(Fi(t,e,Vi),t+"")}function oi(e){return Sn(e,Ts,fi)}function ii(e){return Sn(e,Is,gi)}var ai=_r?function(e){return _r.get(e)}:ll;function si(e){for(var t=e.name+"",r=Or[t],n=Ae.call(Or,t)?r.length:0;n--;){var o=r[n],i=o.func;if(null==i||i==e)return o.name}return t}function li(e){return(Ae.call(Rr,"placeholder")?Rr:e).placeholder}function di(){var e=Rr.iteratee||ol;return e=e===ol?An:e,arguments.length?e(arguments[0],arguments[1]):e}function ci(e,t){var r,n,o=e.__data__;return("string"==(n=typeof(r=t))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof t?"string":"hash"]:o.map}function ui(e){for(var t=Ts(e),r=t.length;r--;){var n=t[r],o=e[n];t[r]=[n,o,Di(o)]}return t}function hi(t,r){var n=function(t,r){return null==t?e:t[r]}(t,r);return Bn(n)?n:e}var fi=bt?function(e){return null==e?[]:(e=ke(e),_t(bt(e),(function(t){return Ze.call(e,t)})))}:ml,gi=bt?function(e){for(var t=[];e;)Mt(t,fi(e)),e=Ue(e);return t}:ml,mi=Dn;function pi(e,t,r){for(var n=-1,o=(t=xo(t,e)).length,i=!1;++n<o;){var a=ji(t[n]);if(!(i=null!=e&&r(e,a)))break;e=e[a]}return i||++n!=o?i:!!(o=null==e?0:e.length)&&Ja(o)&&yi(a,o)&&(Ya(e)||Wa(e))}function bi(e){return"function"!=typeof e.constructor||Si(e)?{}:Pr(Ue(e))}function vi(e){return Ya(e)||Wa(e)||!!(Ge&&e&&e[Ge])}function yi(e,t){var r=typeof e;return!!(t=null==t?c:t)&&("number"==r||"symbol"!=r&&pe.test(e))&&e>-1&&e%1==0&&e<t}function xi(e,t,r){if(!es(r))return!1;var n=typeof t;return!!("number"==n?Ua(r)&&yi(t,r.length):"string"==n&&t in r)&&Pa(r[t],e)}function wi(e,t){if(Ya(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!ls(e))||Q.test(e)||!X.test(e)||null!=t&&e in ke(t)}function $i(e){var t=si(e),r=Rr[t];if("function"!=typeof r||!(t in Wr.prototype))return!1;if(e===r)return!0;var n=ai(r);return!!n&&e===n[0]}(Cr&&mi(new Cr(new ArrayBuffer(1)))!=T||Sr&&mi(new Sr)!=w||Dr&&mi(Dr.resolve())!=S||kr&&mi(new kr)!=k||Fr&&mi(new Fr)!=_)&&(mi=function(t){var r=Dn(t),n=r==C?t.constructor:e,o=n?Li(n):"";if(o)switch(o){case Tr:return T;case Ir:return w;case Mr:return S;case Br:return k;case Ar:return _}return r});var Ci=Me?Xa:pl;function Si(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Ie)}function Di(e){return e==e&&!es(e)}function ki(t,r){return function(n){return null!=n&&n[t]===r&&(r!==e||t in ke(n))}}function Fi(t,r,n){return r=br(r===e?t.length-1:r,0),function(){for(var e=arguments,o=-1,i=br(e.length-r,0),a=we(i);++o<i;)a[o]=e[r+o];o=-1;for(var s=we(r+1);++o<r;)s[o]=e[o];return s[r]=n(a),St(t,this,s)}}function Ei(e,t){return t.length<2?e:Cn(e,no(t,0,-1))}function _i(e,t){if(("constructor"!==t||"function"!=typeof e[t])&&"__proto__"!=t)return e[t]}var Oi=Bi(eo),Ti=ft||function(e,t){return ht.setTimeout(e,t)},Ii=Bi(to);function Mi(e,t,r){var n=t+"";return Ii(e,function(e,t){var r=t.length;if(!r)return e;var n=r-1;return t[n]=(r>1?"& ":"")+t[n],t=t.join(r>2?", ":" "),e.replace(oe,"{\n/* [wrapped with "+t+"] */\n")}(n,function(e,t){return kt(f,(function(r){var n="_."+r[0];t&r[1]&&!Ot(e,n)&&e.push(n)})),e.sort()}(function(e){var t=e.match(ie);return t?t[1].split(ae):[]}(n),r)))}function Bi(t){var r=0,n=0;return function(){var o=yr(),i=16-(o-n);if(n=o,i>0){if(++r>=800)return arguments[0]}else r=0;return t.apply(e,arguments)}}function Ai(t,r){var n=-1,o=t.length,i=o-1;for(r=r===e?o:r;++n<r;){var a=Zn(n,i),s=t[a];t[a]=t[n],t[n]=s}return t.length=r,t}var zi=function(e){var t=Ba(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(J,(function(e,r,n,o){t.push(n?o.replace(de,"$1"):r||e)})),t}));function ji(e){if("string"==typeof e||ls(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function Li(e){if(null!=e){try{return Be.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function Ri(e){if(e instanceof Wr)return e.clone();var t=new Nr(e.__wrapped__,e.__chain__);return t.__actions__=Oo(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}var Pi=Gn((function(e,t){return Ka(e)?un(e,bn(t,1,Ka,!0)):[]})),Hi=Gn((function(t,r){var n=Gi(r);return Ka(n)&&(n=e),Ka(t)?un(t,bn(r,1,Ka,!0),di(n,2)):[]})),Ni=Gn((function(t,r){var n=Gi(r);return Ka(n)&&(n=e),Ka(t)?un(t,bn(r,1,Ka,!0),e,n):[]}));function Wi(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var o=null==r?0:gs(r);return o<0&&(o=br(n+o,0)),Rt(e,di(t,3),o)}function Yi(t,r,n){var o=null==t?0:t.length;if(!o)return-1;var i=o-1;return n!==e&&(i=gs(n),i=n<0?br(o+i,0):vr(i,o-1)),Rt(t,di(r,3),i,!0)}function Vi(e){return null!=e&&e.length?bn(e,1):[]}function Ui(t){return t&&t.length?t[0]:e}var Ki=Gn((function(e){var t=It(e,vo);return t.length&&t[0]===e[0]?_n(t):[]})),Zi=Gn((function(t){var r=Gi(t),n=It(t,vo);return r===Gi(n)?r=e:n.pop(),n.length&&n[0]===t[0]?_n(n,di(r,2)):[]})),qi=Gn((function(t){var r=Gi(t),n=It(t,vo);return(r="function"==typeof r?r:e)&&n.pop(),n.length&&n[0]===t[0]?_n(n,e,r):[]}));function Gi(t){var r=null==t?0:t.length;return r?t[r-1]:e}var Xi=Gn(Qi);function Qi(e,t){return e&&e.length&&t&&t.length?Un(e,t):e}var Ji=ni((function(e,t){var r=null==e?0:e.length,n=an(e,t);return Kn(e,It(t,(function(e){return yi(e,r)?+e:e})).sort(Fo)),n}));function ea(e){return null==e?e:$r.call(e)}var ta=Gn((function(e){return uo(bn(e,1,Ka,!0))})),ra=Gn((function(t){var r=Gi(t);return Ka(r)&&(r=e),uo(bn(t,1,Ka,!0),di(r,2))})),na=Gn((function(t){var r=Gi(t);return r="function"==typeof r?r:e,uo(bn(t,1,Ka,!0),e,r)}));function oa(e){if(!e||!e.length)return[];var t=0;return e=_t(e,(function(e){if(Ka(e))return t=br(e.length,t),!0})),Zt(t,(function(t){return It(e,Yt(t))}))}function ia(t,r){if(!t||!t.length)return[];var n=oa(t);return null==r?n:It(n,(function(t){return St(r,e,t)}))}var aa=Gn((function(e,t){return Ka(e)?un(e,t):[]})),sa=Gn((function(e){return po(_t(e,Ka))})),la=Gn((function(t){var r=Gi(t);return Ka(r)&&(r=e),po(_t(t,Ka),di(r,2))})),da=Gn((function(t){var r=Gi(t);return r="function"==typeof r?r:e,po(_t(t,Ka),e,r)})),ca=Gn(oa),ua=Gn((function(t){var r=t.length,n=r>1?t[r-1]:e;return n="function"==typeof n?(t.pop(),n):e,ia(t,n)}));function ha(e){var t=Rr(e);return t.__chain__=!0,t}function fa(e,t){return t(e)}var ga=ni((function(t){var r=t.length,n=r?t[0]:0,o=this.__wrapped__,i=function(e){return an(e,t)};return!(r>1||this.__actions__.length)&&o instanceof Wr&&yi(n)?((o=o.slice(n,+n+(r?1:0))).__actions__.push({func:fa,args:[i],thisArg:e}),new Nr(o,this.__chain__).thru((function(t){return r&&!t.length&&t.push(e),t}))):this.thru(i)})),ma=Io((function(e,t,r){Ae.call(e,r)?++e[r]:on(e,r,1)})),pa=Ro(Wi),ba=Ro(Yi);function va(e,t){return(Ya(e)?kt:hn)(e,di(t,3))}function ya(e,t){return(Ya(e)?Ft:fn)(e,di(t,3))}var xa=Io((function(e,t,r){Ae.call(e,r)?e[r].push(t):on(e,r,[t])})),wa=Gn((function(e,t,r){var n=-1,o="function"==typeof t,i=Ua(e)?we(e.length):[];return hn(e,(function(e){i[++n]=o?St(t,e,r):On(e,t,r)})),i})),$a=Io((function(e,t,r){on(e,r,t)}));function Ca(e,t){return(Ya(e)?It:Rn)(e,di(t,3))}var Sa=Io((function(e,t,r){e[r?0:1].push(t)}),(function(){return[[],[]]})),Da=Gn((function(e,t){if(null==e)return[];var r=t.length;return r>1&&xi(e,t[0],t[1])?t=[]:r>2&&xi(t[0],t[1],t[2])&&(t=[t[0]]),Yn(e,bn(t,1),[])})),ka=ut||function(){return ht.Date.now()};function Fa(t,r,n){return r=n?e:r,r=t&&null==r?t.length:r,Qo(t,s,e,e,e,e,r)}function Ea(r,n){var o;if("function"!=typeof n)throw new _e(t);return r=gs(r),function(){return--r>0&&(o=n.apply(this,arguments)),r<=1&&(n=e),o}}var _a=Gn((function(e,t,r){var n=1;if(r.length){var o=sr(r,li(_a));n|=i}return Qo(e,n,t,r,o)})),Oa=Gn((function(e,t,r){var n=3;if(r.length){var o=sr(r,li(Oa));n|=i}return Qo(t,n,e,r,o)}));function Ta(r,n,o){var i,a,s,l,d,c,u=0,h=!1,f=!1,g=!0;if("function"!=typeof r)throw new _e(t);function m(t){var n=i,o=a;return i=a=e,u=t,l=r.apply(o,n)}function p(t){var r=t-c;return c===e||r>=n||r<0||f&&t-u>=s}function b(){var e=ka();if(p(e))return v(e);d=Ti(b,function(e){var t=n-(e-c);return f?vr(t,s-(e-u)):t}(e))}function v(t){return d=e,g&&i?m(t):(i=a=e,l)}function y(){var t=ka(),r=p(t);if(i=arguments,a=this,c=t,r){if(d===e)return function(e){return u=e,d=Ti(b,n),h?m(e):l}(c);if(f)return Co(d),d=Ti(b,n),m(c)}return d===e&&(d=Ti(b,n)),l}return n=ps(n)||0,es(o)&&(h=!!o.leading,s=(f="maxWait"in o)?br(ps(o.maxWait)||0,n):s,g="trailing"in o?!!o.trailing:g),y.cancel=function(){d!==e&&Co(d),u=0,i=c=a=d=e},y.flush=function(){return d===e?l:v(ka())},y}var Ia=Gn((function(e,t){return cn(e,1,t)})),Ma=Gn((function(e,t,r){return cn(e,ps(t)||0,r)}));function Ba(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new _e(t);var n=function(){var t=arguments,o=r?r.apply(this,t):t[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,t);return n.cache=i.set(o,a)||i,a};return n.cache=new(Ba.Cache||Ur),n}function Aa(e){if("function"!=typeof e)throw new _e(t);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}Ba.Cache=Ur;var za=wo((function(e,t){var r=(t=1==t.length&&Ya(t[0])?It(t[0],Gt(di())):It(bn(t,1),Gt(di()))).length;return Gn((function(n){for(var o=-1,i=vr(n.length,r);++o<i;)n[o]=t[o].call(this,n[o]);return St(e,this,n)}))})),ja=Gn((function(t,r){var n=sr(r,li(ja));return Qo(t,i,e,r,n)})),La=Gn((function(t,r){var n=sr(r,li(La));return Qo(t,a,e,r,n)})),Ra=ni((function(t,r){return Qo(t,l,e,e,e,r)}));function Pa(e,t){return e===t||e!=e&&t!=t}var Ha=Ko(kn),Na=Ko((function(e,t){return e>=t})),Wa=Tn(function(){return arguments}())?Tn:function(e){return ts(e)&&Ae.call(e,"callee")&&!Ze.call(e,"callee")},Ya=we.isArray,Va=vt?Gt(vt):function(e){return ts(e)&&Dn(e)==O};function Ua(e){return null!=e&&Ja(e.length)&&!Xa(e)}function Ka(e){return ts(e)&&Ua(e)}var Za=jt||pl,qa=yt?Gt(yt):function(e){return ts(e)&&Dn(e)==b};function Ga(e){if(!ts(e))return!1;var t=Dn(e);return t==v||"[object DOMException]"==t||"string"==typeof e.message&&"string"==typeof e.name&&!os(e)}function Xa(e){if(!es(e))return!1;var t=Dn(e);return t==y||t==x||"[object AsyncFunction]"==t||"[object Proxy]"==t}function Qa(e){return"number"==typeof e&&e==gs(e)}function Ja(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=c}function es(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}function ts(e){return null!=e&&"object"==typeof e}var rs=xt?Gt(xt):function(e){return ts(e)&&mi(e)==w};function ns(e){return"number"==typeof e||ts(e)&&Dn(e)==$}function os(e){if(!ts(e)||Dn(e)!=C)return!1;var t=Ue(e);if(null===t)return!0;var r=Ae.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&Be.call(r)==Re}var is=wt?Gt(wt):function(e){return ts(e)&&Dn(e)==D},as=$t?Gt($t):function(e){return ts(e)&&mi(e)==k};function ss(e){return"string"==typeof e||!Ya(e)&&ts(e)&&Dn(e)==F}function ls(e){return"symbol"==typeof e||ts(e)&&Dn(e)==E}var ds=Ct?Gt(Ct):function(e){return ts(e)&&Ja(e.length)&&!!it[Dn(e)]},cs=Ko(Ln),us=Ko((function(e,t){return e<=t}));function hs(e){if(!e)return[];if(Ua(e))return ss(e)?ur(e):Oo(e);if(Je&&e[Je])return function(e){for(var t,r=[];!(t=e.next()).done;)r.push(t.value);return r}(e[Je]());var t=mi(e);return(t==w?ir:t==k?lr:Ps)(e)}function fs(e){return e?(e=ps(e))===d||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}function gs(e){var t=fs(e),r=t%1;return t==t?r?t-r:t:0}function ms(e){return e?sn(gs(e),0,h):0}function ps(e){if("number"==typeof e)return e;if(ls(e))return u;if(es(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=es(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=qt(e);var r=fe.test(e);return r||me.test(e)?dt(e.slice(2),r?2:8):he.test(e)?u:+e}function bs(e){return To(e,Is(e))}function vs(e){return null==e?"":co(e)}var ys=Mo((function(e,t){if(Si(t)||Ua(t))To(t,Ts(t),e);else for(var r in t)Ae.call(t,r)&&en(e,r,t[r])})),xs=Mo((function(e,t){To(t,Is(t),e)})),ws=Mo((function(e,t,r,n){To(t,Is(t),e,n)})),$s=Mo((function(e,t,r,n){To(t,Ts(t),e,n)})),Cs=ni(an),Ss=Gn((function(t,r){t=ke(t);var n=-1,o=r.length,i=o>2?r[2]:e;for(i&&xi(r[0],r[1],i)&&(o=1);++n<o;)for(var a=r[n],s=Is(a),l=-1,d=s.length;++l<d;){var c=s[l],u=t[c];(u===e||Pa(u,Ie[c])&&!Ae.call(t,c))&&(t[c]=a[c])}return t})),Ds=Gn((function(t){return t.push(e,ei),St(Bs,e,t)}));function ks(t,r,n){var o=null==t?e:Cn(t,r);return o===e?n:o}function Fs(e,t){return null!=e&&pi(e,t,En)}var Es=No((function(e,t,r){null!=t&&"function"!=typeof t.toString&&(t=Le.call(t)),e[t]=r}),el(nl)),_s=No((function(e,t,r){null!=t&&"function"!=typeof t.toString&&(t=Le.call(t)),Ae.call(e,t)?e[t].push(r):e[t]=[r]}),di),Os=Gn(On);function Ts(e){return Ua(e)?qr(e):zn(e)}function Is(e){return Ua(e)?qr(e,!0):jn(e)}var Ms=Mo((function(e,t,r){Nn(e,t,r)})),Bs=Mo((function(e,t,r,n){Nn(e,t,r,n)})),As=ni((function(e,t){var r={};if(null==e)return r;var n=!1;t=It(t,(function(t){return t=xo(t,e),n||(n=t.length>1),t})),To(e,ii(e),r),n&&(r=ln(r,7,ti));for(var o=t.length;o--;)ho(r,t[o]);return r})),zs=ni((function(e,t){return null==e?{}:function(e,t){return Vn(e,t,(function(t,r){return Fs(e,r)}))}(e,t)}));function js(e,t){if(null==e)return{};var r=It(ii(e),(function(e){return[e]}));return t=di(t),Vn(e,r,(function(e,r){return t(e,r[0])}))}var Ls=Xo(Ts),Rs=Xo(Is);function Ps(e){return null==e?[]:Xt(e,Ts(e))}var Hs=jo((function(e,t,r){return t=t.toLowerCase(),e+(r?Ns(t):t)}));function Ns(e){return Gs(vs(e).toLowerCase())}function Ws(e){return(e=vs(e))&&e.replace(be,tr).replace(Qe,"")}var Ys=jo((function(e,t,r){return e+(r?"-":"")+t.toLowerCase()})),Vs=jo((function(e,t,r){return e+(r?" ":"")+t.toLowerCase()})),Us=zo("toLowerCase"),Ks=jo((function(e,t,r){return e+(r?"_":"")+t.toLowerCase()})),Zs=jo((function(e,t,r){return e+(r?" ":"")+Gs(t)})),qs=jo((function(e,t,r){return e+(r?" ":"")+t.toUpperCase()})),Gs=zo("toUpperCase");function Xs(t,r,n){return t=vs(t),(r=n?e:r)===e?function(e){return rt.test(e)}(t)?function(e){return e.match(et)||[]}(t):function(e){return e.match(se)||[]}(t):t.match(r)||[]}var Qs=Gn((function(t,r){try{return St(t,e,r)}catch(e){return Ga(e)?e:new Ce(e)}})),Js=ni((function(e,t){return kt(t,(function(t){t=ji(t),on(e,t,_a(e[t],e))})),e}));function el(e){return function(){return e}}var tl=Po(),rl=Po(!0);function nl(e){return e}function ol(e){return An("function"==typeof e?e:ln(e,1))}var il=Gn((function(e,t){return function(r){return On(r,e,t)}})),al=Gn((function(e,t){return function(r){return On(e,r,t)}}));function sl(e,t,r){var n=Ts(t),o=$n(t,n);null!=r||es(t)&&(o.length||!n.length)||(r=t,t=e,e=this,o=$n(t,Ts(t)));var i=!(es(r)&&"chain"in r&&!r.chain),a=Xa(e);return kt(o,(function(r){var n=t[r];e[r]=n,a&&(e.prototype[r]=function(){var t=this.__chain__;if(i||t){var r=e(this.__wrapped__);return(r.__actions__=Oo(this.__actions__)).push({func:n,args:arguments,thisArg:e}),r.__chain__=t,r}return n.apply(e,Mt([this.value()],arguments))})})),e}function ll(){}var dl=Yo(It),cl=Yo(Et),ul=Yo(zt);function hl(e){return wi(e)?Yt(ji(e)):function(e){return function(t){return Cn(t,e)}}(e)}var fl=Uo(),gl=Uo(!0);function ml(){return[]}function pl(){return!1}var bl,vl=Wo((function(e,t){return e+t}),0),yl=qo("ceil"),xl=Wo((function(e,t){return e/t}),1),wl=qo("floor"),$l=Wo((function(e,t){return e*t}),1),Cl=qo("round"),Sl=Wo((function(e,t){return e-t}),0);return Rr.after=function(e,r){if("function"!=typeof r)throw new _e(t);return e=gs(e),function(){if(--e<1)return r.apply(this,arguments)}},Rr.ary=Fa,Rr.assign=ys,Rr.assignIn=xs,Rr.assignInWith=ws,Rr.assignWith=$s,Rr.at=Cs,Rr.before=Ea,Rr.bind=_a,Rr.bindAll=Js,Rr.bindKey=Oa,Rr.castArray=function(){if(!arguments.length)return[];var e=arguments[0];return Ya(e)?e:[e]},Rr.chain=ha,Rr.chunk=function(t,r,n){r=(n?xi(t,r,n):r===e)?1:br(gs(r),0);var o=null==t?0:t.length;if(!o||r<1)return[];for(var i=0,a=0,s=we(gt(o/r));i<o;)s[a++]=no(t,i,i+=r);return s},Rr.compact=function(e){for(var t=-1,r=null==e?0:e.length,n=0,o=[];++t<r;){var i=e[t];i&&(o[n++]=i)}return o},Rr.concat=function(){var e=arguments.length;if(!e)return[];for(var t=we(e-1),r=arguments[0],n=e;n--;)t[n-1]=arguments[n];return Mt(Ya(r)?Oo(r):[r],bn(t,1))},Rr.cond=function(e){var r=null==e?0:e.length,n=di();return e=r?It(e,(function(e){if("function"!=typeof e[1])throw new _e(t);return[n(e[0]),e[1]]})):[],Gn((function(t){for(var n=-1;++n<r;){var o=e[n];if(St(o[0],this,t))return St(o[1],this,t)}}))},Rr.conforms=function(e){return function(e){var t=Ts(e);return function(r){return dn(r,e,t)}}(ln(e,1))},Rr.constant=el,Rr.countBy=ma,Rr.create=function(e,t){var r=Pr(e);return null==t?r:nn(r,t)},Rr.curry=function t(r,n,o){var i=Qo(r,8,e,e,e,e,e,n=o?e:n);return i.placeholder=t.placeholder,i},Rr.curryRight=function t(r,n,i){var a=Qo(r,o,e,e,e,e,e,n=i?e:n);return a.placeholder=t.placeholder,a},Rr.debounce=Ta,Rr.defaults=Ss,Rr.defaultsDeep=Ds,Rr.defer=Ia,Rr.delay=Ma,Rr.difference=Pi,Rr.differenceBy=Hi,Rr.differenceWith=Ni,Rr.drop=function(t,r,n){var o=null==t?0:t.length;return o?no(t,(r=n||r===e?1:gs(r))<0?0:r,o):[]},Rr.dropRight=function(t,r,n){var o=null==t?0:t.length;return o?no(t,0,(r=o-(r=n||r===e?1:gs(r)))<0?0:r):[]},Rr.dropRightWhile=function(e,t){return e&&e.length?go(e,di(t,3),!0,!0):[]},Rr.dropWhile=function(e,t){return e&&e.length?go(e,di(t,3),!0):[]},Rr.fill=function(t,r,n,o){var i=null==t?0:t.length;return i?(n&&"number"!=typeof n&&xi(t,r,n)&&(n=0,o=i),function(t,r,n,o){var i=t.length;for((n=gs(n))<0&&(n=-n>i?0:i+n),(o=o===e||o>i?i:gs(o))<0&&(o+=i),o=n>o?0:ms(o);n<o;)t[n++]=r;return t}(t,r,n,o)):[]},Rr.filter=function(e,t){return(Ya(e)?_t:pn)(e,di(t,3))},Rr.flatMap=function(e,t){return bn(Ca(e,t),1)},Rr.flatMapDeep=function(e,t){return bn(Ca(e,t),d)},Rr.flatMapDepth=function(t,r,n){return n=n===e?1:gs(n),bn(Ca(t,r),n)},Rr.flatten=Vi,Rr.flattenDeep=function(e){return null!=e&&e.length?bn(e,d):[]},Rr.flattenDepth=function(t,r){return null!=t&&t.length?bn(t,r=r===e?1:gs(r)):[]},Rr.flip=function(e){return Qo(e,512)},Rr.flow=tl,Rr.flowRight=rl,Rr.fromPairs=function(e){for(var t=-1,r=null==e?0:e.length,n={};++t<r;){var o=e[t];n[o[0]]=o[1]}return n},Rr.functions=function(e){return null==e?[]:$n(e,Ts(e))},Rr.functionsIn=function(e){return null==e?[]:$n(e,Is(e))},Rr.groupBy=xa,Rr.initial=function(e){return null!=e&&e.length?no(e,0,-1):[]},Rr.intersection=Ki,Rr.intersectionBy=Zi,Rr.intersectionWith=qi,Rr.invert=Es,Rr.invertBy=_s,Rr.invokeMap=wa,Rr.iteratee=ol,Rr.keyBy=$a,Rr.keys=Ts,Rr.keysIn=Is,Rr.map=Ca,Rr.mapKeys=function(e,t){var r={};return t=di(t,3),xn(e,(function(e,n,o){on(r,t(e,n,o),e)})),r},Rr.mapValues=function(e,t){var r={};return t=di(t,3),xn(e,(function(e,n,o){on(r,n,t(e,n,o))})),r},Rr.matches=function(e){return Pn(ln(e,1))},Rr.matchesProperty=function(e,t){return Hn(e,ln(t,1))},Rr.memoize=Ba,Rr.merge=Ms,Rr.mergeWith=Bs,Rr.method=il,Rr.methodOf=al,Rr.mixin=sl,Rr.negate=Aa,Rr.nthArg=function(e){return e=gs(e),Gn((function(t){return Wn(t,e)}))},Rr.omit=As,Rr.omitBy=function(e,t){return js(e,Aa(di(t)))},Rr.once=function(e){return Ea(2,e)},Rr.orderBy=function(t,r,n,o){return null==t?[]:(Ya(r)||(r=null==r?[]:[r]),Ya(n=o?e:n)||(n=null==n?[]:[n]),Yn(t,r,n))},Rr.over=dl,Rr.overArgs=za,Rr.overEvery=cl,Rr.overSome=ul,Rr.partial=ja,Rr.partialRight=La,Rr.partition=Sa,Rr.pick=zs,Rr.pickBy=js,Rr.property=hl,Rr.propertyOf=function(t){return function(r){return null==t?e:Cn(t,r)}},Rr.pull=Xi,Rr.pullAll=Qi,Rr.pullAllBy=function(e,t,r){return e&&e.length&&t&&t.length?Un(e,t,di(r,2)):e},Rr.pullAllWith=function(t,r,n){return t&&t.length&&r&&r.length?Un(t,r,e,n):t},Rr.pullAt=Ji,Rr.range=fl,Rr.rangeRight=gl,Rr.rearg=Ra,Rr.reject=function(e,t){return(Ya(e)?_t:pn)(e,Aa(di(t,3)))},Rr.remove=function(e,t){var r=[];if(!e||!e.length)return r;var n=-1,o=[],i=e.length;for(t=di(t,3);++n<i;){var a=e[n];t(a,n,e)&&(r.push(a),o.push(n))}return Kn(e,o),r},Rr.rest=function(r,n){if("function"!=typeof r)throw new _e(t);return Gn(r,n=n===e?n:gs(n))},Rr.reverse=ea,Rr.sampleSize=function(t,r,n){return r=(n?xi(t,r,n):r===e)?1:gs(r),(Ya(t)?Xr:Qn)(t,r)},Rr.set=function(e,t,r){return null==e?e:Jn(e,t,r)},Rr.setWith=function(t,r,n,o){return o="function"==typeof o?o:e,null==t?t:Jn(t,r,n,o)},Rr.shuffle=function(e){return(Ya(e)?Qr:ro)(e)},Rr.slice=function(t,r,n){var o=null==t?0:t.length;return o?(n&&"number"!=typeof n&&xi(t,r,n)?(r=0,n=o):(r=null==r?0:gs(r),n=n===e?o:gs(n)),no(t,r,n)):[]},Rr.sortBy=Da,Rr.sortedUniq=function(e){return e&&e.length?so(e):[]},Rr.sortedUniqBy=function(e,t){return e&&e.length?so(e,di(t,2)):[]},Rr.split=function(t,r,n){return n&&"number"!=typeof n&&xi(t,r,n)&&(r=n=e),(n=n===e?h:n>>>0)?(t=vs(t))&&("string"==typeof r||null!=r&&!is(r))&&!(r=co(r))&&or(t)?$o(ur(t),0,n):t.split(r,n):[]},Rr.spread=function(e,r){if("function"!=typeof e)throw new _e(t);return r=null==r?0:br(gs(r),0),Gn((function(t){var n=t[r],o=$o(t,0,r);return n&&Mt(o,n),St(e,this,o)}))},Rr.tail=function(e){var t=null==e?0:e.length;return t?no(e,1,t):[]},Rr.take=function(t,r,n){return t&&t.length?no(t,0,(r=n||r===e?1:gs(r))<0?0:r):[]},Rr.takeRight=function(t,r,n){var o=null==t?0:t.length;return o?no(t,(r=o-(r=n||r===e?1:gs(r)))<0?0:r,o):[]},Rr.takeRightWhile=function(e,t){return e&&e.length?go(e,di(t,3),!1,!0):[]},Rr.takeWhile=function(e,t){return e&&e.length?go(e,di(t,3)):[]},Rr.tap=function(e,t){return t(e),e},Rr.throttle=function(e,r,n){var o=!0,i=!0;if("function"!=typeof e)throw new _e(t);return es(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),Ta(e,r,{leading:o,maxWait:r,trailing:i})},Rr.thru=fa,Rr.toArray=hs,Rr.toPairs=Ls,Rr.toPairsIn=Rs,Rr.toPath=function(e){return Ya(e)?It(e,ji):ls(e)?[e]:Oo(zi(vs(e)))},Rr.toPlainObject=bs,Rr.transform=function(e,t,r){var n=Ya(e),o=n||Za(e)||ds(e);if(t=di(t,4),null==r){var i=e&&e.constructor;r=o?n?new i:[]:es(e)&&Xa(i)?Pr(Ue(e)):{}}return(o?kt:xn)(e,(function(e,n,o){return t(r,e,n,o)})),r},Rr.unary=function(e){return Fa(e,1)},Rr.union=ta,Rr.unionBy=ra,Rr.unionWith=na,Rr.uniq=function(e){return e&&e.length?uo(e):[]},Rr.uniqBy=function(e,t){return e&&e.length?uo(e,di(t,2)):[]},Rr.uniqWith=function(t,r){return r="function"==typeof r?r:e,t&&t.length?uo(t,e,r):[]},Rr.unset=function(e,t){return null==e||ho(e,t)},Rr.unzip=oa,Rr.unzipWith=ia,Rr.update=function(e,t,r){return null==e?e:fo(e,t,yo(r))},Rr.updateWith=function(t,r,n,o){return o="function"==typeof o?o:e,null==t?t:fo(t,r,yo(n),o)},Rr.values=Ps,Rr.valuesIn=function(e){return null==e?[]:Xt(e,Is(e))},Rr.without=aa,Rr.words=Xs,Rr.wrap=function(e,t){return ja(yo(t),e)},Rr.xor=sa,Rr.xorBy=la,Rr.xorWith=da,Rr.zip=ca,Rr.zipObject=function(e,t){return bo(e||[],t||[],en)},Rr.zipObjectDeep=function(e,t){return bo(e||[],t||[],Jn)},Rr.zipWith=ua,Rr.entries=Ls,Rr.entriesIn=Rs,Rr.extend=xs,Rr.extendWith=ws,sl(Rr,Rr),Rr.add=vl,Rr.attempt=Qs,Rr.camelCase=Hs,Rr.capitalize=Ns,Rr.ceil=yl,Rr.clamp=function(t,r,n){return n===e&&(n=r,r=e),n!==e&&(n=(n=ps(n))==n?n:0),r!==e&&(r=(r=ps(r))==r?r:0),sn(ps(t),r,n)},Rr.clone=function(e){return ln(e,4)},Rr.cloneDeep=function(e){return ln(e,5)},Rr.cloneDeepWith=function(t,r){return ln(t,5,r="function"==typeof r?r:e)},Rr.cloneWith=function(t,r){return ln(t,4,r="function"==typeof r?r:e)},Rr.conformsTo=function(e,t){return null==t||dn(e,t,Ts(t))},Rr.deburr=Ws,Rr.defaultTo=function(e,t){return null==e||e!=e?t:e},Rr.divide=xl,Rr.endsWith=function(t,r,n){t=vs(t),r=co(r);var o=t.length,i=n=n===e?o:sn(gs(n),0,o);return(n-=r.length)>=0&&t.slice(n,i)==r},Rr.eq=Pa,Rr.escape=function(e){return(e=vs(e))&&K.test(e)?e.replace(V,rr):e},Rr.escapeRegExp=function(e){return(e=vs(e))&&te.test(e)?e.replace(ee,"\\$&"):e},Rr.every=function(t,r,n){var o=Ya(t)?Et:gn;return n&&xi(t,r,n)&&(r=e),o(t,di(r,3))},Rr.find=pa,Rr.findIndex=Wi,Rr.findKey=function(e,t){return Lt(e,di(t,3),xn)},Rr.findLast=ba,Rr.findLastIndex=Yi,Rr.findLastKey=function(e,t){return Lt(e,di(t,3),wn)},Rr.floor=wl,Rr.forEach=va,Rr.forEachRight=ya,Rr.forIn=function(e,t){return null==e?e:vn(e,di(t,3),Is)},Rr.forInRight=function(e,t){return null==e?e:yn(e,di(t,3),Is)},Rr.forOwn=function(e,t){return e&&xn(e,di(t,3))},Rr.forOwnRight=function(e,t){return e&&wn(e,di(t,3))},Rr.get=ks,Rr.gt=Ha,Rr.gte=Na,Rr.has=function(e,t){return null!=e&&pi(e,t,Fn)},Rr.hasIn=Fs,Rr.head=Ui,Rr.identity=nl,Rr.includes=function(e,t,r,n){e=Ua(e)?e:Ps(e),r=r&&!n?gs(r):0;var o=e.length;return r<0&&(r=br(o+r,0)),ss(e)?r<=o&&e.indexOf(t,r)>-1:!!o&&Pt(e,t,r)>-1},Rr.indexOf=function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var o=null==r?0:gs(r);return o<0&&(o=br(n+o,0)),Pt(e,t,o)},Rr.inRange=function(t,r,n){return r=fs(r),n===e?(n=r,r=0):n=fs(n),function(e,t,r){return e>=vr(t,r)&&e<br(t,r)}(t=ps(t),r,n)},Rr.invoke=Os,Rr.isArguments=Wa,Rr.isArray=Ya,Rr.isArrayBuffer=Va,Rr.isArrayLike=Ua,Rr.isArrayLikeObject=Ka,Rr.isBoolean=function(e){return!0===e||!1===e||ts(e)&&Dn(e)==p},Rr.isBuffer=Za,Rr.isDate=qa,Rr.isElement=function(e){return ts(e)&&1===e.nodeType&&!os(e)},Rr.isEmpty=function(e){if(null==e)return!0;if(Ua(e)&&(Ya(e)||"string"==typeof e||"function"==typeof e.splice||Za(e)||ds(e)||Wa(e)))return!e.length;var t=mi(e);if(t==w||t==k)return!e.size;if(Si(e))return!zn(e).length;for(var r in e)if(Ae.call(e,r))return!1;return!0},Rr.isEqual=function(e,t){return In(e,t)},Rr.isEqualWith=function(t,r,n){var o=(n="function"==typeof n?n:e)?n(t,r):e;return o===e?In(t,r,e,n):!!o},Rr.isError=Ga,Rr.isFinite=function(e){return"number"==typeof e&&Vt(e)},Rr.isFunction=Xa,Rr.isInteger=Qa,Rr.isLength=Ja,Rr.isMap=rs,Rr.isMatch=function(e,t){return e===t||Mn(e,t,ui(t))},Rr.isMatchWith=function(t,r,n){return n="function"==typeof n?n:e,Mn(t,r,ui(r),n)},Rr.isNaN=function(e){return ns(e)&&e!=+e},Rr.isNative=function(e){if(Ci(e))throw new Ce("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");return Bn(e)},Rr.isNil=function(e){return null==e},Rr.isNull=function(e){return null===e},Rr.isNumber=ns,Rr.isObject=es,Rr.isObjectLike=ts,Rr.isPlainObject=os,Rr.isRegExp=is,Rr.isSafeInteger=function(e){return Qa(e)&&e>=-9007199254740991&&e<=c},Rr.isSet=as,Rr.isString=ss,Rr.isSymbol=ls,Rr.isTypedArray=ds,Rr.isUndefined=function(t){return t===e},Rr.isWeakMap=function(e){return ts(e)&&mi(e)==_},Rr.isWeakSet=function(e){return ts(e)&&"[object WeakSet]"==Dn(e)},Rr.join=function(e,t){return null==e?"":mr.call(e,t)},Rr.kebabCase=Ys,Rr.last=Gi,Rr.lastIndexOf=function(t,r,n){var o=null==t?0:t.length;if(!o)return-1;var i=o;return n!==e&&(i=(i=gs(n))<0?br(o+i,0):vr(i,o-1)),r==r?function(e,t,r){for(var n=r+1;n--;)if(e[n]===t)return n;return n}(t,r,i):Rt(t,Nt,i,!0)},Rr.lowerCase=Vs,Rr.lowerFirst=Us,Rr.lt=cs,Rr.lte=us,Rr.max=function(t){return t&&t.length?mn(t,nl,kn):e},Rr.maxBy=function(t,r){return t&&t.length?mn(t,di(r,2),kn):e},Rr.mean=function(e){return Wt(e,nl)},Rr.meanBy=function(e,t){return Wt(e,di(t,2))},Rr.min=function(t){return t&&t.length?mn(t,nl,Ln):e},Rr.minBy=function(t,r){return t&&t.length?mn(t,di(r,2),Ln):e},Rr.stubArray=ml,Rr.stubFalse=pl,Rr.stubObject=function(){return{}},Rr.stubString=function(){return""},Rr.stubTrue=function(){return!0},Rr.multiply=$l,Rr.nth=function(t,r){return t&&t.length?Wn(t,gs(r)):e},Rr.noConflict=function(){return ht._===this&&(ht._=Pe),this},Rr.noop=ll,Rr.now=ka,Rr.pad=function(e,t,r){e=vs(e);var n=(t=gs(t))?cr(e):0;if(!t||n>=t)return e;var o=(t-n)/2;return Vo(pt(o),r)+e+Vo(gt(o),r)},Rr.padEnd=function(e,t,r){e=vs(e);var n=(t=gs(t))?cr(e):0;return t&&n<t?e+Vo(t-n,r):e},Rr.padStart=function(e,t,r){e=vs(e);var n=(t=gs(t))?cr(e):0;return t&&n<t?Vo(t-n,r)+e:e},Rr.parseInt=function(e,t,r){return r||null==t?t=0:t&&(t=+t),xr(vs(e).replace(re,""),t||0)},Rr.random=function(t,r,n){if(n&&"boolean"!=typeof n&&xi(t,r,n)&&(r=n=e),n===e&&("boolean"==typeof r?(n=r,r=e):"boolean"==typeof t&&(n=t,t=e)),t===e&&r===e?(t=0,r=1):(t=fs(t),r===e?(r=t,t=0):r=fs(r)),t>r){var o=t;t=r,r=o}if(n||t%1||r%1){var i=wr();return vr(t+i*(r-t+lt("1e-"+((i+"").length-1))),r)}return Zn(t,r)},Rr.reduce=function(e,t,r){var n=Ya(e)?Bt:Ut,o=arguments.length<3;return n(e,di(t,4),r,o,hn)},Rr.reduceRight=function(e,t,r){var n=Ya(e)?At:Ut,o=arguments.length<3;return n(e,di(t,4),r,o,fn)},Rr.repeat=function(t,r,n){return r=(n?xi(t,r,n):r===e)?1:gs(r),qn(vs(t),r)},Rr.replace=function(){var e=arguments,t=vs(e[0]);return e.length<3?t:t.replace(e[1],e[2])},Rr.result=function(t,r,n){var o=-1,i=(r=xo(r,t)).length;for(i||(i=1,t=e);++o<i;){var a=null==t?e:t[ji(r[o])];a===e&&(o=i,a=n),t=Xa(a)?a.call(t):a}return t},Rr.round=Cl,Rr.runInContext=ne,Rr.sample=function(e){return(Ya(e)?Gr:Xn)(e)},Rr.size=function(e){if(null==e)return 0;if(Ua(e))return ss(e)?cr(e):e.length;var t=mi(e);return t==w||t==k?e.size:zn(e).length},Rr.snakeCase=Ks,Rr.some=function(t,r,n){var o=Ya(t)?zt:oo;return n&&xi(t,r,n)&&(r=e),o(t,di(r,3))},Rr.sortedIndex=function(e,t){return io(e,t)},Rr.sortedIndexBy=function(e,t,r){return ao(e,t,di(r,2))},Rr.sortedIndexOf=function(e,t){var r=null==e?0:e.length;if(r){var n=io(e,t);if(n<r&&Pa(e[n],t))return n}return-1},Rr.sortedLastIndex=function(e,t){return io(e,t,!0)},Rr.sortedLastIndexBy=function(e,t,r){return ao(e,t,di(r,2),!0)},Rr.sortedLastIndexOf=function(e,t){if(null!=e&&e.length){var r=io(e,t,!0)-1;if(Pa(e[r],t))return r}return-1},Rr.startCase=Zs,Rr.startsWith=function(e,t,r){return e=vs(e),r=null==r?0:sn(gs(r),0,e.length),t=co(t),e.slice(r,r+t.length)==t},Rr.subtract=Sl,Rr.sum=function(e){return e&&e.length?Kt(e,nl):0},Rr.sumBy=function(e,t){return e&&e.length?Kt(e,di(t,2)):0},Rr.template=function(t,r,n){var o=Rr.templateSettings;n&&xi(t,r,n)&&(r=e),t=vs(t),r=ws({},r,o,Jo);var i,a,s=ws({},r.imports,o.imports,Jo),l=Ts(s),d=Xt(s,l),c=0,u=r.interpolate||ve,h="__p += '",f=Fe((r.escape||ve).source+"|"+u.source+"|"+(u===G?ce:ve).source+"|"+(r.evaluate||ve).source+"|$","g"),g="//# sourceURL="+(Ae.call(r,"sourceURL")?(r.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++ot+"]")+"\n";t.replace(f,(function(e,r,n,o,s,l){return n||(n=o),h+=t.slice(c,l).replace(ye,nr),r&&(i=!0,h+="' +\n__e("+r+") +\n'"),s&&(a=!0,h+="';\n"+s+";\n__p += '"),n&&(h+="' +\n((__t = ("+n+")) == null ? '' : __t) +\n'"),c=l+e.length,e})),h+="';\n";var m=Ae.call(r,"variable")&&r.variable;if(m){if(le.test(m))throw new Ce("Invalid `variable` option passed into `_.template`")}else h="with (obj) {\n"+h+"\n}\n";h=(a?h.replace(H,""):h).replace(N,"$1").replace(W,"$1;"),h="function("+(m||"obj")+") {\n"+(m?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(i?", __e = _.escape":"")+(a?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+h+"return __p\n}";var p=Qs((function(){return Se(l,g+"return "+h).apply(e,d)}));if(p.source=h,Ga(p))throw p;return p},Rr.times=function(e,t){if((e=gs(e))<1||e>c)return[];var r=h,n=vr(e,h);t=di(t),e-=h;for(var o=Zt(n,t);++r<e;)t(r);return o},Rr.toFinite=fs,Rr.toInteger=gs,Rr.toLength=ms,Rr.toLower=function(e){return vs(e).toLowerCase()},Rr.toNumber=ps,Rr.toSafeInteger=function(e){return e?sn(gs(e),-9007199254740991,c):0===e?e:0},Rr.toString=vs,Rr.toUpper=function(e){return vs(e).toUpperCase()},Rr.trim=function(t,r,n){if((t=vs(t))&&(n||r===e))return qt(t);if(!t||!(r=co(r)))return t;var o=ur(t),i=ur(r);return $o(o,Jt(o,i),er(o,i)+1).join("")},Rr.trimEnd=function(t,r,n){if((t=vs(t))&&(n||r===e))return t.slice(0,hr(t)+1);if(!t||!(r=co(r)))return t;var o=ur(t);return $o(o,0,er(o,ur(r))+1).join("")},Rr.trimStart=function(t,r,n){if((t=vs(t))&&(n||r===e))return t.replace(re,"");if(!t||!(r=co(r)))return t;var o=ur(t);return $o(o,Jt(o,ur(r))).join("")},Rr.truncate=function(t,r){var n=30,o="...";if(es(r)){var i="separator"in r?r.separator:i;n="length"in r?gs(r.length):n,o="omission"in r?co(r.omission):o}var a=(t=vs(t)).length;if(or(t)){var s=ur(t);a=s.length}if(n>=a)return t;var l=n-cr(o);if(l<1)return o;var d=s?$o(s,0,l).join(""):t.slice(0,l);if(i===e)return d+o;if(s&&(l+=d.length-l),is(i)){if(t.slice(l).search(i)){var c,u=d;for(i.global||(i=Fe(i.source,vs(ue.exec(i))+"g")),i.lastIndex=0;c=i.exec(u);)var h=c.index;d=d.slice(0,h===e?l:h)}}else if(t.indexOf(co(i),l)!=l){var f=d.lastIndexOf(i);f>-1&&(d=d.slice(0,f))}return d+o},Rr.unescape=function(e){return(e=vs(e))&&U.test(e)?e.replace(Y,fr):e},Rr.uniqueId=function(e){var t=++ze;return vs(e)+t},Rr.upperCase=qs,Rr.upperFirst=Gs,Rr.each=va,Rr.eachRight=ya,Rr.first=Ui,sl(Rr,(bl={},xn(Rr,(function(e,t){Ae.call(Rr.prototype,t)||(bl[t]=e)})),bl),{chain:!1}),Rr.VERSION="4.17.23",kt(["bind","bindKey","curry","curryRight","partial","partialRight"],(function(e){Rr[e].placeholder=Rr})),kt(["drop","take"],(function(t,r){Wr.prototype[t]=function(n){n=n===e?1:br(gs(n),0);var o=this.__filtered__&&!r?new Wr(this):this.clone();return o.__filtered__?o.__takeCount__=vr(n,o.__takeCount__):o.__views__.push({size:vr(n,h),type:t+(o.__dir__<0?"Right":"")}),o},Wr.prototype[t+"Right"]=function(e){return this.reverse()[t](e).reverse()}})),kt(["filter","map","takeWhile"],(function(e,t){var r=t+1,n=1==r||3==r;Wr.prototype[e]=function(e){var t=this.clone();return t.__iteratees__.push({iteratee:di(e,3),type:r}),t.__filtered__=t.__filtered__||n,t}})),kt(["head","last"],(function(e,t){var r="take"+(t?"Right":"");Wr.prototype[e]=function(){return this[r](1).value()[0]}})),kt(["initial","tail"],(function(e,t){var r="drop"+(t?"":"Right");Wr.prototype[e]=function(){return this.__filtered__?new Wr(this):this[r](1)}})),Wr.prototype.compact=function(){return this.filter(nl)},Wr.prototype.find=function(e){return this.filter(e).head()},Wr.prototype.findLast=function(e){return this.reverse().find(e)},Wr.prototype.invokeMap=Gn((function(e,t){return"function"==typeof e?new Wr(this):this.map((function(r){return On(r,e,t)}))})),Wr.prototype.reject=function(e){return this.filter(Aa(di(e)))},Wr.prototype.slice=function(t,r){t=gs(t);var n=this;return n.__filtered__&&(t>0||r<0)?new Wr(n):(t<0?n=n.takeRight(-t):t&&(n=n.drop(t)),r!==e&&(n=(r=gs(r))<0?n.dropRight(-r):n.take(r-t)),n)},Wr.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},Wr.prototype.toArray=function(){return this.take(h)},xn(Wr.prototype,(function(t,r){var n=/^(?:filter|find|map|reject)|While$/.test(r),o=/^(?:head|last)$/.test(r),i=Rr[o?"take"+("last"==r?"Right":""):r],a=o||/^find/.test(r);i&&(Rr.prototype[r]=function(){var r=this.__wrapped__,s=o?[1]:arguments,l=r instanceof Wr,d=s[0],c=l||Ya(r),u=function(e){var t=i.apply(Rr,Mt([e],s));return o&&h?t[0]:t};c&&n&&"function"==typeof d&&1!=d.length&&(l=c=!1);var h=this.__chain__,f=!!this.__actions__.length,g=a&&!h,m=l&&!f;if(!a&&c){r=m?r:new Wr(this);var p=t.apply(r,s);return p.__actions__.push({func:fa,args:[u],thisArg:e}),new Nr(p,h)}return g&&m?t.apply(this,s):(p=this.thru(u),g?o?p.value()[0]:p.value():p)})})),kt(["pop","push","shift","sort","splice","unshift"],(function(e){var t=Oe[e],r=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",n=/^(?:pop|shift)$/.test(e);Rr.prototype[e]=function(){var e=arguments;if(n&&!this.__chain__){var o=this.value();return t.apply(Ya(o)?o:[],e)}return this[r]((function(r){return t.apply(Ya(r)?r:[],e)}))}})),xn(Wr.prototype,(function(e,t){var r=Rr[t];if(r){var n=r.name+"";Ae.call(Or,n)||(Or[n]=[]),Or[n].push({name:t,func:r})}})),Or[Ho(e,2).name]=[{name:"wrapper",func:e}],Wr.prototype.clone=function(){var e=new Wr(this.__wrapped__);return e.__actions__=Oo(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=Oo(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=Oo(this.__views__),e},Wr.prototype.reverse=function(){if(this.__filtered__){var e=new Wr(this);e.__dir__=-1,e.__filtered__=!0}else(e=this.clone()).__dir__*=-1;return e},Wr.prototype.value=function(){var e=this.__wrapped__.value(),t=this.__dir__,r=Ya(e),n=t<0,o=r?e.length:0,i=function(e,t,r){for(var n=-1,o=r.length;++n<o;){var i=r[n],a=i.size;switch(i.type){case"drop":e+=a;break;case"dropRight":t-=a;break;case"take":t=vr(t,e+a);break;case"takeRight":e=br(e,t-a)}}return{start:e,end:t}}(0,o,this.__views__),a=i.start,s=i.end,l=s-a,d=n?s:a-1,c=this.__iteratees__,u=c.length,h=0,f=vr(l,this.__takeCount__);if(!r||!n&&o==l&&f==l)return mo(e,this.__actions__);var g=[];e:for(;l--&&h<f;){for(var m=-1,p=e[d+=t];++m<u;){var b=c[m],v=b.iteratee,y=b.type,x=v(p);if(2==y)p=x;else if(!x){if(1==y)continue e;break e}}g[h++]=p}return g},Rr.prototype.at=ga,Rr.prototype.chain=function(){return ha(this)},Rr.prototype.commit=function(){return new Nr(this.value(),this.__chain__)},Rr.prototype.next=function(){this.__values__===e&&(this.__values__=hs(this.value()));var t=this.__index__>=this.__values__.length;return{done:t,value:t?e:this.__values__[this.__index__++]}},Rr.prototype.plant=function(t){for(var r,n=this;n instanceof Hr;){var o=Ri(n);o.__index__=0,o.__values__=e,r?i.__wrapped__=o:r=o;var i=o;n=n.__wrapped__}return i.__wrapped__=t,r},Rr.prototype.reverse=function(){var t=this.__wrapped__;if(t instanceof Wr){var r=t;return this.__actions__.length&&(r=new Wr(this)),(r=r.reverse()).__actions__.push({func:fa,args:[ea],thisArg:e}),new Nr(r,this.__chain__)}return this.thru(ea)},Rr.prototype.toJSON=Rr.prototype.valueOf=Rr.prototype.value=function(){return mo(this.__wrapped__,this.__actions__)},Rr.prototype.first=Rr.prototype.head,Je&&(Rr.prototype[Je]=function(){return this}),Rr}();gt?((gt.exports=gr)._=gr,ft._=gr):ht._=gr}.call(_e);var qx=Zx.exports;const Gx=o.forwardRef((n=>{var o,{value:i,readOnly:l,"data-testid":d,maskRange:c,unmaskRange:u,maskRegex:f,maskTransformer:g,iconMask:m=e(ye,{}),iconUnmask:p=e(ve,{}),iconActiveColor:b,iconInactiveColor:v,maskChar:y="•",error:x,disableMask:w,transformInput:$,loadState:C,onMask:S,onUnmask:D,onChange:k,onFocus:F,onBlur:E,onTryAgain:_}=n,O=Fe(n,["value","readOnly","data-testid","maskRange","unmaskRange","maskRegex","maskTransformer","iconMask","iconUnmask","iconActiveColor","iconInactiveColor","maskChar","error","disableMask","transformInput","loadState","onMask","onUnmask","onChange","onFocus","onBlur","onTryAgain"]);const T=l&&qx.isEmpty(i),[I,M]=s(!w),[B,A]=s(i||""),[z]=s((()=>et.generate())),j=`${null!==(o=O.id)&&void 0!==o?o:z}-value`,L=a(null),R=a(null),P=a(null),H=a(!w),N=O["aria-labelledby"];h((()=>{A(i||"")}),[i]),h((()=>{var e,t;l&&("fail"===C&&(null===(e=R.current)||void 0===e||e.focus()),"success"===C&&(null===(t=P.current)||void 0===t||t.focus()))}),[l,C]);const W=e=>{q(!1),null==F||F(e)},Y=e=>{q(!0),null==E||E(e)},V=e=>{let t=e.target.value;switch($){case"uppercase":t=t.toUpperCase();break;case"lowercase":t=t.toLowerCase()}A(t),e.target.value=t,null==k||k(e)},U=()=>{l&&(null==_||_())},K=e=>{e.preventDefault()},Z=()=>{var e;const t=!I;q(t),t||null===(e=L.current)||void 0===e||e.focus()},q=e=>{H.current!==e&&(H.current=e,M(e),e?null==S||S():null==D||D())},G=()=>T?"-":I&&!w?tt.maskValue(B,{maskChar:y,maskRange:c,unmaskRange:u,maskRegex:f,maskTransformer:g}):B,X=()=>!(null==B?void 0:B.toString().length)||w,Q=()=>{if(T)return"-";if(I&&!w){return tt.getMaskedDescription(B,"masked",c)||"Masked value"}return B},J=()=>{if(T)return e(r,{});const t=X();return e(Bx,{"data-testid":"icon-"+(I?"masked":"unmasked"),onMouseDown:t?void 0:K,onClick:t?void 0:Z,$isDisabled:t,$inactiveColor:v,$activeColor:b,"aria-hidden":"true",children:I?p:m})};return e("div",{"aria-busy":"loading"===C,children:(()=>{if(l)switch(C){case"fail":return t(Nx,{ref:R,onClick:U,"data-testid":"try-again-button",type:"button",children:[t(Rx,{children:[e(Px,{}),e(Hx,{children:"Error"})]}),e(Lx,{children:"Try again?"})]});case"loading":return t(Ax,{children:[e(jx,{}),e(zx,{children:"Retrieving..."})]});default:return(()=>{const n=X()||T;return t(r,{children:[e(Zs,{id:j,children:Q()}),t(Wx,{ref:P,"data-testid":"masked-input-readonly-button",onClick:n?void 0:Z,type:"button","aria-labelledby":Gs(j,N),"aria-disabled":n,children:[e(Yx,{children:G()}),!n&&e(Vx,{children:I?e(ve,{"data-testid":"masked-icon"}):e(ye,{"data-testid":"unmasked-icon"})})]})]})})()}return e(Mx,Object.assign({ref:L,"data-testid":`${d||"masked-input"}${I?"-masked":"-unmasked"}`,addon:{type:"custom",attributes:{children:J()},position:"right"},onFocus:l?void 0:W,onBlur:l?void 0:Y,onClick:l?Z:void 0,onChange:V,value:G(),readOnly:l,error:x,$isDisabled:X()},O))})()})})),Xx=o.forwardRef(((t,r)=>{const{label:n,errorMessage:o,id:i,"data-error-testid":a,"data-testid":l,layoutType:d,mobileCols:c,tabletCols:u,desktopCols:h}=t,f=Fe(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]),[g]=s((()=>et.generate())),m=null!=i?i:`form-field-masked-input-${g}`;return e(Bs,{id:m,label:n,errorMessage:o,disabled:f.disabled,"data-error-testid":a,layoutType:d,mobileCols:c,tabletCols:u,desktopCols:h,children:e(Gx,Object.assign({ref:r,id:`${m}-base`,"data-testid":l?`${l}-base`:void 0,error:!!o},f))})})),Qx=({selectedOptions:t,placeholder:r="Select",options:n,disabled:o,error:i,className:l,"data-testid":d,id:c,"aria-labelledby":u,"aria-describedby":f,"aria-invalid":g,enableSearch:m=!1,searchFunction:p,searchPlaceholder:b,valueExtractor:v,listExtractor:y,onSelectOptions:x,onShowOptions:w,onHideOptions:$,onRetry:C,optionsLoadState:S="success",optionTruncationType:D="end",renderListItem:k,hideNoResultsDisplay:F,noResultsDescription:E,customLabels:_,renderCustomCallToAction:O,onBlur:T,variant:I="default",readOnly:M,alignment:B,dropdownZIndex:A,maxSelectable:z,dropdownRootNode:j,dropdownWidth:L})=>{const{allSelectedLabel:R,multiSelectedLabel:P}=_||{},[H,N]=s(t||[]),[W,Y]=s(!1),[V,U]=s(!1),[K]=s((()=>et.generate())),Z=a(null),q=a(null);h((()=>{N(t||[])}),[t]);const G=()=>{H&&H.length>0||z?(N([]),re([])):(N(n),re(n))},X=(e,t)=>{const r=[...H],n=Zg(H,(e=>(v?v(e):e)===t));n>-1?r.splice(n,1):r.push(e),N(r),re(r)},Q=()=>{W&&(Y(!1),te(!1))},J=()=>{V||W||U(!0)},ee=e=>{V&&!W&&Z.current&&!Z.current.contains(e.relatedTarget)&&(U(!1),null==T||T())},te=e=>{!e&&$&&$(),e&&w&&w()},re=e=>{x&&x(e)};return e(Mv,{children:e(Us,{enabled:!M&&!o,isOpen:W,renderElement:()=>e(Dd,{className:l,"data-testid":d,id:c,ref:Z,tabIndex:-1,onFocus:J,onBlur:ee,$focused:V,$disabled:o,$readOnly:M,$error:i,children:e(ay,{ref:q,disabled:o,expanded:W,listboxId:K,popupRole:"listbox",readOnly:M,variant:I,"aria-labelledby":u,"aria-describedby":f,"aria-invalid":g,children:e(Ps,{$disabled:o,children:H&&0!==H.length?e(Hs,{$variant:I,children:n&&H.length===n.length?R||"All selected":P||`${H.length} selected`}):e(Ns,{$truncateType:D,$variant:I,children:r})})})}),renderDropdown:()=>e(ny,{listboxId:K,listItems:n,onSelectItem:X,onDismiss:Q,valueExtractor:v,listExtractor:y,enableSearch:m,searchFunction:p,searchPlaceholder:b,multiSelect:!0,maxSelectable:z,selectedItems:H,onSelectAll:G,onRetry:C,itemsLoadState:S,itemTruncationType:D,renderListItem:k,hideNoResultsDisplay:F,noResultsDescription:E,customLabels:_,renderCustomCallToAction:O,variant:I,width:L,matchElementWidth:!0}),onOpen:()=>{Y(!0),te(!0),U(!0)},onClose:e=>{Y(!1),te(!1),"click"!==e&&(U(!1),null==T||T())},onDismiss:()=>{var e;null===(e=q.current)||void 0===e||e.focus(),Y(!1),te(!1)},clickToToggle:!0,offset:8,alignment:B,fitAvailableHeight:!0,customZIndex:A,rootNode:j})})},Jx=(e,t)=>{const[r,...n]=t;if(sx(e)||!r)return;const o=e.find((e=>e.key===r));return o?n.length?Jx(o.subItems,n):o:void 0},ew=(e,t)=>{const r=[];for(const n of e)n.subItems?r.push(...ew(n.subItems,[...t,n.key])):r.push({value:n.value,label:n.label,keyPath:[...t,n.key]});return r},tw=({placeholder:t="Select",options:r,disabled:n,error:o,className:i,"data-testid":l,id:d,"aria-labelledby":c,"aria-describedby":u,"aria-invalid":f,selectedKeyPaths:g,mode:m,valueToStringFunction:p,enableSearch:b,searchPlaceholder:v,hideNoResultsDisplay:y,noResultsDescription:x,customLabels:w,readOnly:$,onSearch:C,onSelectOptions:S,onShowOptions:D,onHideOptions:k,onRetry:F,onBlur:E,optionsLoadState:_="success",optionTruncationType:O="end",variant:T="default",alignment:I,dropdownZIndex:M,dropdownWidth:B,dropdownRootNode:A})=>{const{multiSelectedLabel:z}=w||{},j=r,[L,R]=s(g?ux(g):new Set),[P,H]=s([]),[N,W]=s(!1),[Y,V]=s(!1),[U]=s((()=>et.generate())),K=a(null),Z=a(null),q=a(null);h((()=>{const e=g||[],t=((e,t)=>{const r=[];for(let n=0;n<t.length;n++){const o=t[n],i=Jx(e,o);i&&r.push({value:i.value,label:i.label,keyPath:o})}return r})(j,e);R(ux(e)),H(t)}),[g,j]);const G=(e,t)=>{const r=t.map((e=>({keyPath:e.keyPath,label:e.item.label,value:e.item.value})));R(ux(e)),H(r),ne(e,r)},X=e=>{const t=oe(e),r=t.map((e=>e.keyPath));H(t),R(ux(r)),ne(r,t)},Q=()=>{Y||N||V(!0)},J=e=>{Y&&!N&&K.current&&!K.current.contains(e.relatedTarget)&&(V(!1),null==E||E())},ee=()=>{if(P.length>1)return z||`${P.length} selected`;const{label:e,value:t}=P[0];return p?p(t):e},te=e=>{if("middle"===O){let t=0;return q&&q.current&&(t=q.current.getBoundingClientRect().width),tt.truncateOneLine(e,t,120,6)}return e},re=e=>{!e&&k&&k(),e&&D&&D()},ne=(e,t)=>{if(S){const r=t.map((e=>e.value));S(e,r)}},oe=e=>{if(!0===e.checked)return P.filter((t=>{const r=t.keyPath.slice(0,e.keyPath.length);return!Xg(e.keyPath,r)}));{const t=[...P],r=e.hasSubItems?((e,t)=>{const r=Jx(e,t);return r&&r.subItems?ew(r.subItems,t):[]})(j,e.keyPath):[{value:e.item.value,label:e.item.label,keyPath:e.keyPath}];return r.forEach((e=>{P.find((t=>Xg(t.keyPath,e.keyPath)))||t.push(e)})),t}};return e(Us,{enabled:!$&&!n,isOpen:N,renderElement:()=>e(Dd,{className:i,"data-testid":l,id:d,ref:K,tabIndex:-1,onFocus:Q,onBlur:J,$focused:Y,$disabled:n,$readOnly:$,$error:o,children:e(ay,{ref:Z,disabled:n,expanded:N,listboxId:U,popupRole:"tree",readOnly:$,variant:T,"aria-labelledby":c,"aria-describedby":u,"aria-invalid":f,children:e(Ps,{ref:q,$disabled:n,children:sx(P)?e(Ns,{$truncateType:O,children:t}):e(Hs,{$truncateType:O,children:te(ee())})})})}),renderDropdown:()=>e(yx,{listboxId:U,listItems:j,multiSelect:!0,selectedKeyPaths:L,itemsLoadState:_,itemTruncationType:O,enableSearch:b,searchPlaceholder:v,hideNoResultsDisplay:y,noResultsDescription:x,customLabels:w,onSelectItem:X,onSelectAll:G,onRetry:F,onSearch:C,variant:T,mode:m,width:B,matchElementWidth:!0}),onOpen:()=>{W(!0),re(!0),V(!0)},onClose:e=>{W(!1),re(!1),"click"!==e&&(V(!1),null==E||E())},onDismiss:()=>{var e;null===(e=Z.current)||void 0===e||e.focus(),W(!1),re(!1)},clickToToggle:!0,offset:8,alignment:I,fitAvailableHeight:!0,customZIndex:M,rootNode:A})},rw=({placeholder:t="Select",options:r,disabled:n,error:o,className:i,"data-testid":l,id:d,"aria-labelledby":c,"aria-describedby":u,"aria-invalid":f,selectedKeyPath:g,mode:m,valueToStringFunction:p,enableSearch:b,searchPlaceholder:v,selectableCategory:y,hideNoResultsDisplay:x,noResultsDescription:w,customLabels:$,readOnly:C,onBlur:S,onSearch:D,onSelectOption:k,onShowOptions:F,onHideOptions:E,onRetry:_,optionsLoadState:O="success",optionTruncationType:T="end",variant:I="default",alignment:M,dropdownZIndex:B,dropdownWidth:A,dropdownRootNode:z})=>{const j=r,[L,R]=s(g?ux([g]):new Set),[P,H]=s(),[N,W]=s(!1),[Y,V]=s(!1),[U]=s((()=>et.generate())),K=a(null),Z=a(null),q=a(null);h((()=>{R(g?ux([g]):new Set);const e=dx(j,g||[]);H(null!=e?e:void 0)}),[g,j]);const G=e=>{var t;const{keyPath:r,item:{label:n,value:o}}=e;R(ux([r])),H({label:n,value:o}),W(!1),te(!1),null===(t=Z.current)||void 0===t||t.focus(),null==k||k(r,o)},X=()=>{Y||N||V(!0)},Q=e=>{Y&&!N&&K.current&&!K.current.contains(e.relatedTarget)&&(V(!1),null==S||S())},J=()=>{if(!P)return"";const{label:e,value:t}=P;return p?p(t):e},ee=e=>{if("middle"===T){let t=0;return q&&q.current&&(t=q.current.getBoundingClientRect().width),tt.truncateOneLine(e,t,120,6)}return e},te=e=>{!e&&E&&E(),e&&F&&F()};return e(Us,{enabled:!C&&!n,isOpen:N,renderElement:()=>e(Dd,{className:i,"data-testid":l,id:d,ref:K,tabIndex:-1,onFocus:X,onBlur:Q,$focused:Y,$disabled:n,$readOnly:C,$error:o,children:e(ay,{ref:Z,disabled:n,expanded:N,listboxId:U,popupRole:"tree",readOnly:C,variant:I,"aria-labelledby":c,"aria-describedby":u,"aria-invalid":f,children:e(Ps,{ref:q,$disabled:n,children:sx(P)?e(Ns,{$truncateType:T,children:t}):e(Hs,{$truncateType:T,children:ee(J())})})})}),renderDropdown:()=>e(yx,{listboxId:U,listItems:j,selectedKeyPaths:L,selectableCategory:y,itemsLoadState:O,itemTruncationType:T,enableSearch:b,searchPlaceholder:v,hideNoResultsDisplay:x,noResultsDescription:w,customLabels:$,onSelectItem:G,onRetry:_,onSearch:D,variant:I,mode:m,width:A,matchElementWidth:!0}),onOpen:()=>{W(!0),te(!0),V(!0)},onClose:e=>{W(!1),te(!1),"click"!==e&&(V(!1),null==S||S())},onDismiss:()=>{var e;null===(e=Z.current)||void 0===e||e.focus(),W(!1),te(!1)},clickToToggle:!0,offset:8,alignment:M,fitAvailableHeight:!0,customZIndex:B,rootNode:z})};var nw=function(e,t,r,n){var o=-1,i=null==e?0:e.length;for(n&&i&&(r=e[++o]);++o<i;)r=t(r,e[o],o,e);return r};var ow=function(e){return function(t,r,n){for(var o=-1,i=Object(t),a=n(t),s=a.length;s--;){var l=a[e?s:++o];if(!1===r(i[l],l,i))break}return t}},iw=ow(),aw=Gh;var sw=Uh;var lw=function(e,t){return function(r,n){if(null==r)return r;if(!sw(r))return e(r,n);for(var o=r.length,i=t?o:-1,a=Object(r);(t?i--:++i<o)&&!1!==n(a[i],i,a););return r}}((function(e,t){return e&&iw(e,t,aw)}));var dw=nw,cw=lw,uw=Sg,hw=function(e,t,r,n,o){return o(e,(function(e,o,i){r=n?(n=!1,e):t(r,e,o,i)})),r},fw=ar;var gw=Oe((function(e,t,r){var n=fw(e)?dw:hw,o=arguments.length<3;return n(e,uw(t),r,o,cw)}));const mw=[["Afghanistan",["asia"],"af","93"],["Albania",["europe"],"al","355"],["Algeria",["africa","north-africa"],"dz","213"],["Andorra",["europe"],"ad","376"],["Angola",["africa"],"ao","244"],["Antigua and Barbuda",["america","carribean"],"ag","1268"],["Argentina",["america","south-america"],"ar","54","(..) ........"],["Armenia",["asia","ex-ussr"],"am","374",".. ......"],["Aruba",["america","carribean"],"aw","297"],["Australia",["oceania"],"au","61","(..) .... ...."],["Austria",["europe","eu-union"],"at","43"],["Azerbaijan",["asia","ex-ussr"],"az","994","(..) ... .. .."],["Bahamas",["america","carribean"],"bs","1242"],["Bahrain",["middle-east"],"bh","973"],["Bangladesh",["asia"],"bd","880"],["Barbados",["america","carribean"],"bb","1246"],["Belarus",["europe","ex-ussr"],"by","375","(..) ... .. .."],["Belgium",["europe","eu-union"],"be","32","... .. .. .."],["Belize",["america","central-america"],"bz","501"],["Benin",["africa"],"bj","229"],["Bhutan",["asia"],"bt","975"],["Bolivia",["america","south-america"],"bo","591"],["Bosnia and Herzegovina",["europe","ex-yugos"],"ba","387"],["Botswana",["africa"],"bw","267"],["Brazil",["america","south-america"],"br","55","(..) ........."],["British Indian Ocean Territory",["asia"],"io","246"],["Brunei",["asia"],"bn","673"],["Bulgaria",["europe","eu-union"],"bg","359"],["Burkina Faso",["africa"],"bf","226"],["Burundi",["africa"],"bi","257"],["Cambodia",["asia"],"kh","855"],["Cameroon",["africa"],"cm","237"],["Canada",["america","north-america"],"ca","1","(...) ... ...."],["Cape Verde",["africa"],"cv","238"],["Caribbean Netherlands",["america","carribean"],"bq","599",""],["Central African Republic",["africa"],"cf","236"],["Chad",["africa"],"td","235"],["Chile",["america","south-america"],"cl","56"],["China",["asia"],"cn","86",".. ........."],["Colombia",["america","south-america"],"co","57","... ... ...."],["Comoros",["africa"],"km","269"],["Congo",["africa"],"cd","243"],["Congo",["africa"],"cg","242"],["Costa Rica",["america","central-america"],"cr","506",".... ...."],["Côte d’Ivoire",["africa"],"ci","225",".. .. .. .."],["Croatia",["europe","eu-union","ex-yugos"],"hr","385"],["Cuba",["america","carribean"],"cu","53"],["Curaçao",["america","carribean"],"cw","599",""],["Cyprus",["europe","eu-union"],"cy","357",".. ......"],["Czech Republic",["europe","eu-union"],"cz","420","... ... ..."],["Denmark",["europe","eu-union","baltic"],"dk","45",".. .. .. .."],["Djibouti",["africa"],"dj","253"],["Dominica",["america","carribean"],"dm","1767"],["Dominican Republic",["america","carribean"],"do","1",""],["Ecuador",["america","south-america"],"ec","593"],["Egypt",["africa","north-africa"],"eg","20"],["El Salvador",["america","central-america"],"sv","503",".... ...."],["Equatorial Guinea",["africa"],"gq","240"],["Eritrea",["africa"],"er","291"],["Estonia",["europe","eu-union","ex-ussr","baltic"],"ee","372",".... ......"],["Ethiopia",["africa"],"et","251"],["Fiji",["oceania"],"fj","679"],["Finland",["europe","eu-union","baltic"],"fi","358",".. ... .. .."],["France",["europe","eu-union"],"fr","33",". .. .. .. .."],["French Guiana",["america","south-america"],"gf","594"],["French Polynesia",["oceania"],"pf","689"],["Gabon",["africa"],"ga","241"],["Gambia",["africa"],"gm","220"],["Georgia",["asia","ex-ussr"],"ge","995"],["Germany",["europe","eu-union","baltic"],"de","49",".... ........"],["Ghana",["africa"],"gh","233"],["Greece",["europe","eu-union"],"gr","30"],["Grenada",["america","carribean"],"gd","1473"],["Guadeloupe",["america","carribean"],"gp","590","",0],["Guam",["oceania"],"gu","1671"],["Guatemala",["america","central-america"],"gt","502",".... ...."],["Guinea",["africa"],"gn","224"],["Guinea-Bissau",["africa"],"gw","245"],["Guyana",["america","south-america"],"gy","592"],["Haiti",["america","carribean"],"ht","509",".... ...."],["Honduras",["america","central-america"],"hn","504"],["Hong Kong",["asia"],"hk","852",".... ...."],["Hungary",["europe","eu-union"],"hu","36"],["Iceland",["europe"],"is","354","... ...."],["India",["asia"],"in","91","..... ....."],["Indonesia",["asia"],"id","62"],["Iran",["middle-east"],"ir","98","... ... ...."],["Iraq",["middle-east"],"iq","964"],["Ireland",["europe","eu-union"],"ie","353",".. ......."],["Israel",["middle-east"],"il","972","... ... ...."],["Italy",["europe","eu-union"],"it","39","... ......."],["Jamaica",["america","carribean"],"jm","1876"],["Japan",["asia"],"jp","81",".. .... ...."],["Jordan",["middle-east"],"jo","962"],["Kazakhstan",["asia","ex-ussr"],"kz","7","... ... .. .."],["Kenya",["africa"],"ke","254"],["Kiribati",["oceania"],"ki","686"],["Kosovo",["europe","ex-yugos"],"xk","383"],["Kuwait",["middle-east"],"kw","965"],["Kyrgyzstan",["asia","ex-ussr"],"kg","996","... ... ..."],["Laos",["asia"],"la","856"],["Latvia",["europe","eu-union","ex-ussr","baltic"],"lv","371",".. ... ..."],["Lebanon",["middle-east"],"lb","961"],["Lesotho",["africa"],"ls","266"],["Liberia",["africa"],"lr","231"],["Libya",["africa","north-africa"],"ly","218"],["Liechtenstein",["europe"],"li","423"],["Lithuania",["europe","eu-union","ex-ussr","baltic"],"lt","370"],["Luxembourg",["europe","eu-union"],"lu","352"],["Macau",["asia"],"mo","853"],["Macedonia",["europe","ex-yugos"],"mk","389"],["Madagascar",["africa"],"mg","261"],["Malawi",["africa"],"mw","265"],["Malaysia",["asia"],"my","60",".. .... ...."],["Maldives",["asia"],"mv","960"],["Mali",["africa"],"ml","223"],["Malta",["europe","eu-union"],"mt","356"],["Marshall Islands",["oceania"],"mh","692"],["Martinique",["america","carribean"],"mq","596"],["Mauritania",["africa"],"mr","222"],["Mauritius",["africa"],"mu","230"],["Mexico",["america","central-america"],"mx","52","... ... ...."],["Micronesia",["oceania"],"fm","691"],["Moldova",["europe"],"md","373","(..) .. .. .."],["Monaco",["europe"],"mc","377"],["Mongolia",["asia"],"mn","976"],["Montenegro",["europe","ex-yugos"],"me","382"],["Morocco",["africa","north-africa"],"ma","212"],["Mozambique",["africa"],"mz","258"],["Myanmar",["asia"],"mm","95"],["Namibia",["africa"],"na","264"],["Nauru",["africa"],"nr","674"],["Nepal",["asia"],"np","977"],["Netherlands",["europe","eu-union"],"nl","31",".. ........"],["New Caledonia",["oceania"],"nc","687"],["New Zealand",["oceania"],"nz","64","... ... ...."],["Nicaragua",["america","central-america"],"ni","505"],["Niger",["africa"],"ne","227"],["Nigeria",["africa"],"ng","234"],["North Korea",["asia"],"kp","850"],["Norway",["europe","baltic"],"no","47","... .. ..."],["Oman",["middle-east"],"om","968"],["Pakistan",["asia"],"pk","92","... ......."],["Palau",["oceania"],"pw","680"],["Palestine",["middle-east"],"ps","970"],["Panama",["america","central-america"],"pa","507"],["Papua New Guinea",["oceania"],"pg","675"],["Paraguay",["america","south-america"],"py","595"],["Peru",["america","south-america"],"pe","51"],["Philippines",["asia"],"ph","63",".... ......."],["Poland",["europe","eu-union","baltic"],"pl","48","... ... ..."],["Portugal",["europe","eu-union"],"pt","351"],["Puerto Rico",["america","carribean"],"pr","1",""],["Qatar",["middle-east"],"qa","974"],["Réunion",["africa"],"re","262"],["Romania",["europe","eu-union"],"ro","40"],["Russia",["europe","asia","ex-ussr","baltic"],"ru","7","(...) ... .. .."],["Rwanda",["africa"],"rw","250"],["Saint Kitts and Nevis",["america","carribean"],"kn","1869"],["Saint Lucia",["america","carribean"],"lc","1758"],["Saint Vincent and the Grenadines",["america","carribean"],"vc","1784"],["Samoa",["oceania"],"ws","685"],["San Marino",["europe"],"sm","378"],["São Tomé and Príncipe",["africa"],"st","239"],["Saudi Arabia",["middle-east"],"sa","966"],["Senegal",["africa"],"sn","221"],["Serbia",["europe","ex-yugos"],"rs","381"],["Seychelles",["africa"],"sc","248"],["Sierra Leone",["africa"],"sl","232"],["Singapore",["asia"],"sg","65",".... ...."],["Slovakia",["europe","eu-union"],"sk","421"],["Slovenia",["europe","eu-union","ex-yugos"],"si","386"],["Solomon Islands",["oceania"],"sb","677"],["Somalia",["africa"],"so","252"],["South Africa",["africa"],"za","27"],["South Korea",["asia"],"kr","82","... .... ...."],["South Sudan",["africa","north-africa"],"ss","211"],["Spain",["europe","eu-union"],"es","34","... ... ..."],["Sri Lanka",["asia"],"lk","94"],["Sudan",["africa"],"sd","249"],["Suriname",["america","south-america"],"sr","597"],["Swaziland",["africa"],"sz","268"],["Sweden",["europe","eu-union","baltic"],"se","46","(...) ... ..."],["Switzerland",["europe"],"ch","41",".. ... .. .."],["Syria",["middle-east"],"sy","963"],["Taiwan",["asia"],"tw","886"],["Tajikistan",["asia","ex-ussr"],"tj","992"],["Tanzania",["africa"],"tz","255"],["Thailand",["asia"],"th","66"],["Timor-Leste",["asia"],"tl","670"],["Togo",["africa"],"tg","228"],["Tonga",["oceania"],"to","676"],["Trinidad and Tobago",["america","carribean"],"tt","1868"],["Tunisia",["africa","north-africa"],"tn","216"],["Turkey",["europe"],"tr","90","... ... .. .."],["Turkmenistan",["asia","ex-ussr"],"tm","993"],["Tuvalu",["asia"],"tv","688"],["Uganda",["africa"],"ug","256"],["Ukraine",["europe","ex-ussr"],"ua","380","(..) ... .. .."],["United Arab Emirates",["middle-east"],"ae","971"],["United Kingdom",["europe","eu-union"],"gb","44",".... ......"],["United States",["america","north-america"],"us","1","(...) ... ...."],["Uruguay",["america","south-america"],"uy","598"],["Uzbekistan",["asia","ex-ussr"],"uz","998",".. ... .. .."],["Vanuatu",["oceania"],"vu","678"],["Vatican City",["europe"],"va","39",".. .... ...."],["Venezuela",["america","south-america"],"ve","58"],["Vietnam",["asia"],"vn","84"],["Yemen",["middle-east"],"ye","967"],["Zambia",["africa"],"zm","260"],["Zimbabwe",["africa"],"zw","263"]],pw=(e,t,r,n)=>r?e+"".padEnd(t.length,".")+" "+r:e+"".padEnd(t.length,".")+" "+n;var bw;!function(e){e.getCountries=()=>[].concat(...mw.map((e=>({name:e[0],regions:e[1],iso2:e[2],countryCode:e[3],format:pw("+",e[3],e[4],"... ... ... ... ..")})))),e.formatNumber=(e="",t)=>{if(!t)return e;const r=e.replace(/[\s()]+/g,""),{format:n}=t,o=n.split(" ");o.shift();const i=o.join(" ");return gw(i,((e,t)=>{if(0===e.remainingText.length)return e;if("."!==t)return{formattedText:e.formattedText+t,remainingText:e.remainingText};const r=e.remainingText.slice(0,1),n=e.remainingText.slice(1);return{formattedText:e.formattedText+r,remainingText:n}}),{formattedText:"",remainingText:r}).formattedText}}(bw||(bw={}));const vw=t=>{var{onChange:r,value:n,allowClear:o,onClear:i,onBlur:l,error:d,fixedCountry:c=!1,optionPlaceholder:u="Select",optionSearchPlaceholder:f,enableSearch:g,onHideOptions:m,onShowOptions:p,placeholder:b,autoComplete:v,noBorder:y=!1}=t,x=Fe(t,["onChange","value","allowClear","onClear","onBlur","error","fixedCountry","optionPlaceholder","optionSearchPlaceholder","enableSearch","onHideOptions","onShowOptions","placeholder","autoComplete","noBorder"]);const[w]=s(bw.getCountries()),[$,C]=s(void 0),[S,D]=s(""),k=a(null),F=er({ref:k,formatter:e=>bw.formatNumber(e.replace(/[^0-9]/g,""),$)});h((()=>{const e=w.filter((e=>e.countryCode===yw(null==n?void 0:n.countryCode)))[0];C(e),D(bw.formatNumber(null==n?void 0:n.number,e))}),[n]);const E=e=>{O(S,e),r&&_(S,e)},_=(e,t)=>{const n=bw.formatNumber(e,t);null==r||r({number:n.replace(/[\s()]+/g,""),countryCode:t&&xw(t.countryCode)})},O=(e,t)=>{D(bw.formatNumber(e,t)),C(t)};return e(Tx,Object.assign({ref:k,value:S,onChange:()=>{const e=F();if(!e)return;const{nextValue:t,updateCaretPosition:n}=e;n(),O(t,$),r&&_(t,$)},allowClear:o&&!!S,onClear:()=>{i?i():D("")},onBlur:l,error:d,placeholder:b,addon:c?{type:"label",attributes:{value:xw(null==$?void 0:$.countryCode)}}:{type:"list",attributes:{"aria-label":"Country code",placeholder:u,options:w,selectedOption:$,enableSearch:g,searchPlaceholder:f,valueExtractor:e=>`+${e.countryCode}`,listExtractor:e=>({title:e.name,secondaryLabel:xw(e.countryCode)}),onSelectOption:E,onHideOptions:m,onShowOptions:p}},inputMode:"numeric",autoComplete:v,"aria-label":"Enter phone number",noBorder:y},x))},yw=e=>e?e.replace("+",""):"",xw=e=>e?e.includes("+")?e:`+${e}`:"",ww=k.div`
    display: flex;
    flex-direction: column;
`,$w=k.div`
    display: flex;
`,Cw=k.div`
    display: flex;
    align-items: center;
    width: ${e=>e.$isMaxWidth?"100%":"auto"};
    border-radius: ${ea.sm} 0 0 ${ea.sm};
    box-shadow: inset 1px 0 0 ${qi.border},
        inset 0 1px 0 ${qi.border}, inset 0 -1px 0 ${qi.border};

    &:focus-within {
        box-shadow: inset 2px 0 0 ${qi["border-focus"]},
            inset 0 2px 0 ${qi["border-focus"]},
            inset 0 -2px 0 ${qi["border-focus"]};
    }

    ${e=>e.$error?F`
                box-shadow: inset 1px 0 0 ${qi["border-error"]},
                    inset 0 1px 0 ${qi["border-error"]},
                    inset 0 -1px 0 ${qi["border-error"]};

                &:focus-within {
                    box-shadow: inset 2px 0 0 ${qi["border-error-focus"]},
                        inset 0 2px 0 ${qi["border-error-focus"]},
                        inset 0 -2px 0 ${qi["border-error-focus"]};
                }
            `:e.$disabled?F`
                box-shadow: inset 0 0 0 1px ${qi.border};
                border-radius: ${ea.sm};
                background: ${qi["bg-disabled"]};
                color: ${qi["text-disabled"]};
                &:focus-within {
                    box-shadow: inset 0 0 0 2px ${qi.border};
                }

                /* Spacer to maintain width when disabled */
                ${!e.$isMaxWidth&&F`
                    &::after {
                        content: "";
                        min-width: 120px;
                        flex-shrink: 0;
                    }

                    /* Hide spacer on mobile to prevent text coverage */
                    ${na.MaxWidth.sm} {
                        &::after {
                            display: none;
                        }
                    }
                `}
            `:e.$readonly?F`
                box-shadow: none;
                border-radius: ${ea.sm};
                &:focus-within {
                    box-shadow: inset 0 0 0 2px ${qi["border-focus"]};
                }
            `:void 0}
`,Sw=k.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 ${Ji["spacing-12"]};
    color: ${qi["icon-success"]};
    flex-shrink: 0;

    svg {
        width: 1.25rem;
        height: 1.25rem;
    }
`,Dw=k(Sl.Default)`
    min-width: 120px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    flex-shrink: 0;
    ${na.MaxWidth.sm} {
        width: fit-content;
    }
`,kw=k(Tx)`
    padding: 0 ${Ji["spacing-16"]};
    width: 100%;
    background: transparent;

    ${e=>e.disabled&&F`
            input {
                color: ${qi["text-disabled"]};
            }
        `}

    ${e=>e.readOnly&&F`
            padding: 0;
        `}
`,Fw=k(vw)`
    padding: 0 ${Ji["spacing-16"]};
    background: transparent;

    ${e=>e.disabled&&F`
            input {
                color: ${qi["text-disabled"]};
            }
        `}

    ${e=>e.readOnly&&F`
            padding: 0;
            input {
                margin-left: ${Ji["spacing-12"]};
            }
        `}
`,Ew=({id:r,"data-testid":n,disabled:o,readOnly:i,inputId:a,type:s,sendOtpPlaceholder:l,emailValue:d,onEmailChange:c,phoneNumberValue:u,onPhoneNumberChange:h,fixedCountry:f,isLoading:g,isVerified:m,countdown:p,onSendOtp:b,onStateReset:v,sendOtpError:y})=>{const x=e=>{v(),"email"===s&&c&&c(e.target.value)},w=e=>{v(),"phone-number"===s&&h&&h(e)};return t(ww,{id:r,"data-testid":n,children:[t($w,{children:[t(Cw,{$isMaxWidth:"email"===s,$error:!!y,$disabled:o,$readonly:i,children:["email"===s?e(kw,{id:a,"data-testid":n?`${n}-contact-input`:void 0,placeholder:l||"Enter email",value:d,onChange:x,type:"email",noBorder:!0,"aria-invalid":!!y,"aria-required":!0,disabled:o,readOnly:i}):e(Fw,{id:a,"data-testid":n?`${n}-contact-input`:void 0,placeholder:l||"Enter mobile number",value:u,onChange:w,noBorder:!0,fixedCountry:f,"aria-invalid":!!y,"aria-required":!0,disabled:o,readOnly:i}),m&&e(Sw,{"aria-label":"Verified",role:"img",children:e(de,{})})]}),!o&&!i&&e(Dw,{id:r?`${r}-contact-button`:void 0,"data-testid":n?`${n}-contact-button`:void 0,onClick:b,disabled:p.isRunning||m,loading:g,children:m?"Verified":g?"":p.isRunning?"Sent OTP":"Send OTP"})]}),y&&e(ws,{id:r?`${r}-contact-error`:void 0,"data-testid":n?`${n}-contact-error`:void 0,role:"alert",children:y})]})},_w=k.div`
    display: flex;
    flex-direction: column;
    gap: ${Ji["spacing-16"]};
`,Ow=k.svg`
    .background-circle {
        fill: ${qi["bg-stronger"]};
    }

    .primary-path {
        fill: ${qi["icon-primary"]};
    }

    .validation-icon {
        fill: ${qi["bg-available"]};
    }

    .accent-light-3 {
        fill: ${qi["icon-primary-subtle"]};
    }

    .accent-light-4 {
        fill: ${qi["icon-primary-subtlest"]};
    }
`,Tw=({width:r=120,height:n=120,className:o})=>t(Ow,{width:r,height:n,viewBox:"0 0 120 120",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:o,children:[t("g",{clipPath:"url(#clip0_email_icon)",children:[e("circle",{cx:"60",cy:"60",r:"60",className:"background-circle"}),e("path",{d:"M22.9744 60.2636L62.1602 72.5619C62.6183 72.7414 63.1075 72.7591 63.5596 72.638C64.0116 72.5169 64.4265 72.2569 64.7334 71.8724L92.5201 41.6289L52.1928 25.0006C51.2645 24.6309 50.2039 24.9151 49.5848 25.6994L22.9744 60.2636Z",className:"primary-path"}),e("path",{d:"M72.6935 18.8097L29.2275 30.4564C26.8325 31.0982 25.4042 33.5744 26.0465 35.9714L38.8689 83.8253C39.1907 85.026 40.4254 85.7396 41.6251 85.4182L89.4378 72.6068C90.6374 72.2854 91.3499 71.05 91.0282 69.8493L78.2058 21.9954C77.5635 19.5984 75.0929 18.1668 72.6935 18.8097Z",fill:"white"}),e("path",{d:"M64.7456 71.7935C64.4385 72.1773 64.0235 72.4369 63.5715 72.5581C63.1194 72.6792 62.6303 72.6618 62.1724 72.483L23 60.2346L33.4375 99.188C34.0777 101.577 36.5445 102.994 38.9439 102.352L99.7963 86.0462C102.196 85.4033 103.623 82.9425 102.983 80.5533L92.5457 41.5999L64.7456 71.7935Z",className:"accent-light-3"}),e("path",{d:"M99.8349 86.0769L38.9824 102.382C36.544 103.036 34.127 101.648 33.4768 99.2216C33.2926 98.5339 33.4491 97.7966 33.8965 97.2409L60.7012 66.8793C61.0084 66.4957 61.4233 66.2361 61.8754 66.115C62.3274 65.9939 62.8166 66.0112 63.2744 66.1898L101.669 79.0814C102.334 79.3389 102.838 79.8992 103.023 80.5869C103.673 83.0134 102.273 85.4235 99.8349 86.0769Z",className:"accent-light-4"}),e("path",{d:"M56.1874 49.1387L52.6167 47.0772C52.2767 46.8809 51.9109 46.8352 51.5193 46.9401C51.1288 47.0447 50.8354 47.2671 50.6391 47.6071C50.4263 47.9757 50.3723 48.3558 50.4772 48.7474C50.5819 49.1379 50.8155 49.4283 51.1781 49.6186L55.9386 52.3685C56.2844 52.5863 56.6531 52.6427 57.0447 52.5378C57.4352 52.4332 57.737 52.1971 57.9501 51.8295L63.423 42.35C63.6193 42.01 63.6666 41.65 63.5649 41.2703C63.4628 40.8894 63.2418 40.6009 62.9017 40.4045C62.5617 40.2082 62.1958 40.1625 61.8043 40.2674C61.4138 40.372 61.1204 40.5944 60.924 40.9344L56.1874 49.1387ZM61.0069 59.8842C59.152 60.3812 57.3145 60.4964 55.4942 60.2299C53.674 59.9633 51.9987 59.3883 50.4684 58.5048C48.9382 57.6213 47.6026 56.458 46.4616 55.0148C45.3206 53.5717 44.5017 51.9227 44.0046 50.0678C43.5076 48.2129 43.3924 46.3754 43.6589 44.5551C43.9255 42.7348 44.5005 41.0595 45.384 39.5293C46.2674 37.999 47.4308 36.6634 48.8739 35.5224C50.317 34.3814 51.966 33.5625 53.8208 33.0655C55.6757 32.5685 57.5132 32.4532 59.3335 32.7198C61.1537 32.9863 62.829 33.5613 64.3593 34.4448C65.8895 35.3283 67.2251 36.4917 68.3661 37.9348C69.5071 39.378 70.326 41.027 70.8231 42.8818C71.3201 44.7367 71.4353 46.5743 71.1688 48.3945C70.9023 50.2148 70.3272 51.8901 69.4438 53.4204C68.5603 54.9506 67.3969 56.2863 65.9538 57.4272C64.5107 58.5682 62.8617 59.3872 61.0069 59.8842Z",className:"validation-icon"})]}),e("defs",{children:e("clipPath",{id:"clip0_email_icon",children:e("rect",{width:"120",height:"120",fill:"white"})})})]}),Iw=k.svg`
    .background-circle {
        fill: ${qi["bg-stronger"]};
    }

    .primary-path {
        fill: ${qi["icon-primary"]};
    }

    .validation-icon {
        fill: ${qi["bg-available"]};
    }

    .accent-light {
        fill: ${qi["bg-selected-stronger"]};
    }
`,Mw=({width:r=120,height:n=120,className:o})=>t(Iw,{width:r,height:n,viewBox:"0 0 120 120",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:o,children:[t("g",{clipPath:"url(#clip0_phone_icon)",children:[e("circle",{cx:"60",cy:"60.5",r:"60",className:"background-circle"}),e("path",{d:"M85.7091 99.047L56.9789 106.705C51.6167 108.134 46.0606 104.916 44.6318 99.5553L27.1393 33.9319C25.9969 29.6444 27.8244 25.2332 31.3437 22.9073C32.2263 22.3231 33.2151 21.8712 34.2899 21.5845L34.4374 21.5449L40.7667 19.8586L56.4455 15.6787L56.4545 15.6763L63.02 13.9267C68.3822 12.497 73.9383 15.715 75.3671 21.0761L92.8596 86.6995C94.2888 92.0619 91.0712 97.6172 85.7091 99.047Z",className:"primary-path"}),e("path",{d:"M90.0893 85.5165L72.9593 22.8765C72.8393 22.4365 72.6893 22.0165 72.5093 21.6165C72.0993 20.6965 71.5393 19.8765 70.8693 19.1765C70.2493 18.5365 69.5393 17.9865 68.7593 17.5665C66.8993 16.5465 64.6593 16.2165 62.4593 16.8065L58.8593 17.8765C58.8593 17.8765 58.8693 17.9065 58.8793 17.9265C59.2793 19.4065 58.8293 20.8265 57.8893 21.0665L42.2093 25.2365C41.3193 25.4765 40.3093 24.5765 39.8593 23.2265L36.0693 24.2365C31.5193 25.4465 28.7793 30.1665 29.9993 34.7265L30.3093 35.8765L32.1393 42.7565L35.8493 56.6765L36.8693 60.5165L38.1493 65.3165L47.0793 97.5165C48.2893 102.067 53.0093 104.807 57.5693 103.587L83.9993 95.9965C88.5493 94.7865 91.2893 90.0665 90.0693 85.5065L90.0893 85.5165ZM38.6893 26.3265L34.8993 27.3365C34.5793 27.4265 34.2493 27.2265 34.1593 26.9065C34.0693 26.5865 34.2693 26.2565 34.5893 26.1665L38.3793 25.1565C38.6993 25.0665 39.0293 25.2665 39.1193 25.5865C39.2093 25.9065 39.0093 26.2365 38.6893 26.3265ZM65.6893 19.3265L61.8993 20.3365C61.5793 20.4265 61.2493 20.2265 61.1593 19.9065C61.0693 19.5865 61.2693 19.2565 61.5893 19.1665L65.3793 18.1565C65.6993 18.0665 66.0293 18.2665 66.1193 18.5865C66.2093 18.9065 66.0093 19.2365 65.6893 19.3265Z",fill:"white"}),e("path",{d:"M55.1766 48.5674L51.606 46.5059C51.2659 46.3096 50.9001 46.2639 50.5086 46.3688C50.1181 46.4734 49.8247 46.6958 49.6283 47.0358C49.4155 47.4045 49.3616 47.7846 49.4665 48.1761C49.5711 48.5666 49.8047 48.857 50.1673 49.0473L54.9279 51.7972C55.2737 52.015 55.6424 52.0715 56.0339 51.9665C56.4244 51.8619 56.7262 51.6258 56.9393 51.2583L62.4123 41.7787C62.6086 41.4387 62.6559 41.0788 62.5541 40.699C62.4521 40.3181 62.231 40.0296 61.891 39.8332C61.5509 39.6369 61.1851 39.5912 60.7935 39.6961C60.403 39.8007 60.1096 40.0231 59.9133 40.3631L55.1766 48.5674ZM59.9961 59.3129C58.1413 59.8099 56.3037 59.9251 54.4835 59.6586C52.6632 59.392 50.988 58.817 49.4577 57.9335C47.9274 57.05 46.5918 55.8867 45.4509 54.4435C44.3099 53.0004 43.4909 51.3514 42.9939 49.4965C42.4969 47.6417 42.3817 45.8041 42.6482 43.9838C42.9147 42.1635 43.4897 40.4882 44.3732 38.958C45.2567 37.4277 46.42 36.0921 47.8631 34.9511C49.3063 33.8102 50.9552 32.9912 52.8101 32.4942C54.6649 31.9972 56.5025 31.8819 58.3227 32.1485C60.143 32.415 61.8183 32.99 63.3485 33.8736C64.8788 34.7571 66.2144 35.9204 67.3554 37.3635C68.4963 38.8067 69.3153 40.4557 69.8123 42.3105C70.3093 44.1654 70.4246 46.003 70.158 47.8233C69.8915 49.6435 69.3165 51.3188 68.433 52.8491C67.5495 54.3794 66.3862 55.715 64.9431 56.8559C63.5 57.9969 61.851 58.8159 59.9961 59.3129Z",className:"validation-icon"}),e("path",{d:"M76.5801 68.8601C77.3501 68.6501 77.8201 67.8501 77.6101 67.0801C77.4001 66.3101 76.6001 65.8401 75.8301 66.0501L49.0801 73.1601C48.3101 73.3701 47.8401 74.1701 48.0501 74.9401C48.2601 75.7101 49.0601 76.1801 49.8301 75.9701L76.5801 68.8601Z",className:"accent-light"}),e("path",{d:"M78.5098 76.1402C79.2798 75.9302 79.7498 75.1302 79.5398 74.3602C79.3298 73.5902 78.5298 73.1202 77.7598 73.3302L51.0098 80.4402C50.2398 80.6502 49.7698 81.4502 49.9798 82.2202C50.1898 82.9902 50.9898 83.4602 51.7598 83.2502L78.5098 76.1402Z",className:"accent-light"}),e("path",{d:"M81.6702 82.3401C81.4602 81.5701 80.6602 81.1001 79.8902 81.3101L53.1402 88.4201C52.3702 88.6301 51.9002 89.4301 52.1102 90.2001C52.3202 90.9701 53.1202 91.4401 53.8902 91.2301L80.6402 84.1201C81.4102 83.9101 81.8802 83.1101 81.6702 82.3401Z",className:"accent-light"})]}),e("defs",{children:e("clipPath",{id:"clip0_phone_icon",children:e("rect",{width:"120",height:"120",fill:"white"})})})]}),Bw=k.div`
    display: flex;
    align-items: center;
    background-color: ${qi["bg-strong"]};
    padding: ${Ji["spacing-16"]} ${Ji["spacing-32"]};
    gap: ${Ji["spacing-32"]};
    ${na.MaxWidth.sm} {
        flex-direction: column;
        align-items: start;
        gap: ${Ji["spacing-16"]};
        padding: ${Ji["spacing-16"]};
    }
`,Aw=k.div`
    display: flex;
    flex-direction: column;
    gap: ${Ji["spacing-16"]};
`,zw=k(Ca.BodyMD)`
    color: ${qi["text-subtlest"]};
`,jw=k.div`
    display: flex;
    gap: ${Ji["spacing-8"]};
    max-width: 472px;
`,Lw=k(Sl.Default)`
    flex-shrink: 0;
    width: 83px;
`,Rw=({id:r,"data-testid":n,type:o,showVerifyOtpThumbnail:i=!1,verifyOtpTitle:a,verifyOtpMessage:s,otpCode:l,setOtpCode:d,isVerifyLoading:c,countdown:u,onVerifyOtp:h,verifyOtpError:f,otpPrefix:g,otpSeparator:m})=>{const p=T(),b=ir.useMediaQuery({maxWidth:ra["sm-max"]({theme:p})})?64:120;return t(Bw,{id:r,"data-testid":n,role:"group","aria-labelledby":r?`${r}-title`:void 0,children:[(()=>{if(!i)return null;return e("div",{"aria-label":"email"===o?"Email verification":"Phone verification",role:"img",children:e("email"===o?Tw:Mw,{width:b,height:b})})})(),t(Aw,{children:[t("div",{children:[e(Ca.BodyMD,{weight:"semibold",id:r?`${r}-title`:void 0,"data-testid":n?`${n}-title`:void 0,children:a}),e(Ca.BodyMD,{weight:"regular",id:r?`${r}-message`:void 0,"data-testid":n?`${n}-message`:void 0,children:s})]}),t("div",{children:[t(jw,{children:[e(Tx,{id:r?`${r}-verify-input`:void 0,"data-testid":n?`${n}-verify-input`:void 0,value:l,onChange:e=>null==d?void 0:d(e.target.value),placeholder:"Enter OTP",addon:{type:"label",attributes:{value:`${null!=g?g:""}${null!=m?m:""}`}},type:"number",error:!!f,"aria-label":"Enter OTP code","aria-invalid":!!f,"aria-required":!0}),e(Lw,{id:r?`${r}-verify-button`:void 0,"data-testid":n?`${n}-verify-button`:void 0,onClick:h,loading:c,styleType:"light",disabled:!l||0===l.length,children:!c&&"Verify"})]}),f&&e(ws,{id:r?`${r}-verify-error`:void 0,"data-testid":n?`${n}-verify-error`:void 0,role:"alert",children:f})]}),u.isRunning&&t(zw,{id:r?`${r}-countdown`:void 0,"data-testid":n?`${n}-countdown`:void 0,children:["Resend OTP in ",u.formatTime()]})]})]})},Pw=r=>{const{id:n,"data-testid":o,className:i,inputId:l,onSendOtp:d,onVerifyOtp:c,verifyOtpCountdownTimer:u=60,sendOtpError:f,verifyOtpError:g,otpValue:m,onOtpChange:p,otpState:b,onOtpStateChange:v}=r,[y,x]=s(!1),[w,$]=s(!1),C=(({duration:e,onComplete:t})=>{const[r,n]=s(e),[o,i]=s(!1),l=a(null),d=a(null),c=()=>{i(!1),l.current&&(clearInterval(l.current),l.current=null)};return h((()=>{o||n(e)}),[e,o]),{timeLeft:r,isRunning:o,start:()=>{o||(d.current=Date.now(),i(!0),l.current=setInterval((()=>{const r=Math.floor((Date.now()-d.current)/1e3),o=Math.max(0,e-r);n(o),o<=0&&(i(!1),l.current&&(clearInterval(l.current),l.current=null),null==t||t())}),1e3))},stop:c,reset:()=>{c(),n(e),d.current=null},formatTime:e=>{const t=null!=e?e:r;return`${t} second${1===t?"":"s"}`}}})({duration:u});return t(_w,{id:n,"data-testid":o,className:i,children:[e(Ew,Object.assign({},r,{inputId:l,"data-testid":o?`${o}-contact`:void 0,isLoading:y,isVerified:"verified"===b,countdown:C,onSendOtp:()=>Ee(void 0,void 0,void 0,(function*(){if(d)try{x(!0),yield d(),v("sent"),C.reset(),C.start()}catch(e){}finally{x(!1)}})),onStateReset:()=>{"verified"===b&&v("default")},sendOtpError:f,fixedCountry:"phone-number"!==r.type||r.fixedCountry})),"sent"===b&&e(Rw,Object.assign({},r,{"data-testid":o?`${o}-verification`:void 0,otpCode:null==m?void 0:m.value,otpPrefix:null==m?void 0:m.prefix,otpSeparator:null==m?void 0:m.separator,setOtpCode:p,isVerifyLoading:w,countdown:C,onVerifyOtp:()=>Ee(void 0,void 0,void 0,(function*(){if(c&&(null==m?void 0:m.value))try{$(!0),yield c(m.value),v("verified"),C.reset(),null==p||p("")}catch(e){}finally{$(!1)}})),verifyOtpError:g}))]})};var Hw=cr,Nw=Ir,Ww=function(){return Hw.Date.now()},Yw=Rg,Vw=Math.max,Uw=Math.min;var Kw=Oe((function(e,t,r){var n,o,i,a,s,l,d=0,c=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var r=n,i=o;return n=o=void 0,d=t,a=e.apply(i,r)}function g(e){var r=e-l;return void 0===l||r>=t||r<0||u&&e-d>=i}function m(){var e=Ww();if(g(e))return p(e);s=setTimeout(m,function(e){var r=t-(e-l);return u?Uw(r,i-(e-d)):r}(e))}function p(e){return s=void 0,h&&n?f(e):(n=o=void 0,a)}function b(){var e=Ww(),r=g(e);if(n=arguments,o=this,l=e,r){if(void 0===s)return function(e){return d=e,s=setTimeout(m,t),c?f(e):a}(l);if(u)return clearTimeout(s),s=setTimeout(m,t),f(l)}return void 0===s&&(s=setTimeout(m,t)),a}return t=Yw(t)||0,Nw(r)&&(c=!!r.leading,i=(u="maxWait"in r)?Vw(Yw(r.maxWait)||0,t):i,h="trailing"in r?!!r.trailing:h),b.cancel=function(){void 0!==s&&clearTimeout(s),d=0,n=l=o=s=void 0},b.flush=function(){return void 0===s?a:p(Ww())},b}));const Zw=n=>{var{className:o,"data-testid":i,selectedOption:l,minimumCharacters:d=3,fetchOptions:c,placeholder:u="Enter here...",readOnly:f=!1,disabled:m=!1,error:p,valueExtractor:b,listExtractor:v,displayValueExtractor:y,onSelectOption:x,alignment:w,dropdownZIndex:$,dropdownRootNode:C,dropdownWidth:S,"aria-describedby":D}=n,k=Fe(n,["className","data-testid","selectedOption","minimumCharacters","fetchOptions","placeholder","readOnly","disabled","error","valueExtractor","listExtractor","displayValueExtractor","onSelectOption","alignment","dropdownZIndex","dropdownRootNode","dropdownWidth","aria-describedby"]);const F=e=>e?y?y(e):e.toString():"",[E,_]=s((()=>l?F(l):"")),[O,T]=s((()=>l?F(l):"")),[I,M]=s([]),[B,A]=s(!0),[z,j]=s(!1),[L,R]=s(!!l),[P,H]=s(l),[N,W]=s(!1),[Y,V]=s(!1),[U]=s((()=>et.generate())),[K,Z]=s(null),q=`${U}-instruction`,G=a(null),X=a(null),Q=a(c),J=g((e=>Ee(void 0,void 0,void 0,(function*(){if(Q.current){j(!1),A(!0);try{const t=yield Q.current(e);T(e),M(null!=t?t:[]),A(!1)}catch(e){j(!0),A(!1)}}}))),[]),ee=g(Kw((e=>{J(e)}),500),[J]);h((()=>{Q.current=c}),[c]),h((()=>{E&&E.length>=d?L?E!==O&&ee(E):(W(!0),ee(E)):ee.cancel(),""===E&&P&&(null==x||x(void 0,void 0),le(),H(void 0)),l&&E!==F(l)&&R(!1)}),[E,l]),h((()=>{_(l?F(l):""),T(l?F(l):""),H(l),M([]),R(!!l)}),[l]),h((()=>{var e;const t=de(),r=null!==(e=null==I?void 0:I.length)&&void 0!==e?e:0;"loading"===t&&E.length>=d?Z("Loading suggested results"):"fail"!==t?!N||B||z||Z(0===r?E?"No results found.":null:`${r} result${r>1?"s":""} found. Press down arrow to scroll through the list.`):Z("Suggestions failed to load. Try again.")}),[I,E,z,B]),h((()=>()=>{ee.cancel()}),[ee]);const te=(e,t)=>{var r;null===(r=X.current)||void 0===r||r.focus(),_(F(e)),T(e?F(e):""),R(!0),H(e),W(!1),null==x||x(e,t)},re=()=>{V(!0)},ne=e=>{N||!G.current||G.current.contains(e.relatedTarget)||(V(!1),ae())},oe=()=>{W(!1),V(!1)},ie=()=>{_(""),M([]),R(!1),W(!1),null==x||x(void 0,void 0)},ae=()=>{if(!L)if(P){const e=F(P);_(e),W(!1)}else ie()},se=e=>{_(e.target.value),R(!1)},le=e=>{T(e?F(e):""),R(!!e),M([]),A(!0)},de=()=>z?"fail":B?"loading":"success";return e(Mv,{children:e(Us,{enabled:!f&&!m,isOpen:N,renderElement:()=>t(kd,{className:o,"data-testid":i,ref:G,tabIndex:-1,onFocus:re,onBlur:ne,$focused:Y,$disabled:m,$readOnly:f,$error:p,children:[t(Zs,{id:q,"aria-hidden":!0,children:["Type in ",d," or more characters for suggested results."]}),K&&e(Zs,{"aria-live":"polite",children:K}),e(nu,Object.assign({role:"combobox",ref:X,id:U,type:"text",value:E,onChange:se,placeholder:u,readOnly:f,disabled:m,allowClear:!0,onClear:ie,"aria-expanded":N,"aria-controls":U,"aria-autocomplete":"list","aria-haspopup":"listbox",onBlur:E.length<d?ae:void 0,styleType:"no-border","aria-describedby":Gs(D,q)},k))]}),renderDropdown:()=>e(r,{children:e(ny,{listboxId:U,listItems:I,onSelectItem:te,onDismiss:oe,valueExtractor:b,listExtractor:v,itemsLoadState:de(),itemTruncationType:"end",itemMaxLines:1,labelDisplayType:"next-line",disableItemFocus:!0,onRetry:()=>J(E),width:S,matchElementWidth:!0})}),onOpen:()=>{!L&&E.length>=d&&V(!0)},onClose:()=>{W(!1),V(!1),ae()},onDismiss:()=>{var e;W(!1),V(!1),ae(),null===(e=X.current)||void 0===e||e.focus()},clickToToggle:!1,offset:8,alignment:w,fitAvailableHeight:!0,customZIndex:$,rootNode:C})})},qw=k(Jc)`
    position: absolute;
    right: 0;
    padding-left: ${Ji["spacing-8"]};
    margin-right: 0;
`,Gw=k(kd)`
    height: 3rem;
`,Xw=r=>{var{selectedOptions:n,placeholders:o={from:"Select",to:"Select"},options:i,disabled:l,className:d,readOnly:c,error:u,"data-testid":f,id:g,enableSearch:m=!1,searchFunction:p,searchPlaceholder:b,valueExtractor:y,valueToStringFunction:x,listExtractor:w,displayValueExtractor:$,onSelectOption:C,onShowOptions:S,onHideOptions:D,onRetry:k,optionsLoadState:F={from:"success",to:"success"},optionTruncationType:E="middle",renderCustomSelectedOption:_,renderListItem:O,renderCustomCallToAction:T,alignment:I,dropdownZIndex:M,dropdownRootNode:B,dropdownWidth:A}=r,z=Fe(r,["selectedOptions","placeholders","options","disabled","className","readOnly","error","data-testid","id","enableSearch","searchFunction","searchPlaceholder","valueExtractor","valueToStringFunction","listExtractor","displayValueExtractor","onSelectOption","onShowOptions","onHideOptions","onRetry","optionsLoadState","optionTruncationType","renderCustomSelectedOption","renderListItem","renderCustomCallToAction","alignment","dropdownZIndex","dropdownRootNode","dropdownWidth"]);const[j,L]=s(),[R,P]=s(),[H,N]=s("none"),W="none"!==H,[Y,V]=s(!1),U=a(null),K={from:a(null),to:a(null)},Z=a(null),[q]=s((()=>null!=g?g:et.generate())),G=`${q}-range-listbox`;h((()=>{L(null==n?void 0:n.from),P(null==n?void 0:n.to)}),[n]),h((()=>{var e;W&&"to"===H&&(null===(e=Z.current)||void 0===e||e.refocus({index:0}))}),[W,H]);const X=e=>{e||null==D||D(),e&&(null==S||S())},Q=e=>{var t,r;const n="from"===e?j:R;if(!n)return"";if($)return $(n);if(y){const e=y(n);return x?x(e):null!==(r=null===(t=null==e?void 0:e.toString)||void 0===t?void 0:t.call(e))&&void 0!==r?r:""}return n.toString()},J=(e,t)=>{var r;if("middle"===E){let n=0;return(null===(r=K[e])||void 0===r?void 0:r.current)&&(n=K[e].current.getBoundingClientRect().width),tt.truncateOneLine(t,n,120,8)}return t},ee=()=>{switch(H){case"from":return"start";case"to":return"end";case"none":return H}},te=v((()=>{var e;return"none"===H?[]:null!==(e=null==i?void 0:i[H])&&void 0!==e?e:[]}),[H,i]),re=v((()=>{if("none"===H)return[];const e="from"===H?j:R;return e?[e]:[]}),[H,j,R]),ne=e=>t=>{t.stopPropagation(),t.preventDefault(),l||c||(N("to"===e&&j?"to":"from"),X(!0))},oe=(e,t)=>{var r;if("none"!==H){if("from"===H)return L(e),null==C||C({from:e},t),P(void 0),N("to"),void X(!0);P(e),null==C||C({to:e},t),N("none"),X(!1),null===(r=U.current)||void 0===r||r.focus(),V(!0)}},ie=()=>{var e;N("none"),X(!1),null===(e=U.current)||void 0===e||e.focus(),V(!0),j&&R||(L(void 0),P(void 0))},ae=e=>{var t;e.stopPropagation(),e.preventDefault(),L(void 0),P(void 0),null==C||C({from:void 0,to:void 0},void 0),null===(t=U.current)||void 0===t||t.focus(),V(!0)},se=()=>V(!0),le=e=>{Y&&!W&&U.current&&!U.current.contains(e.relatedTarget)&&V(!1)},de=e=>{if(!l&&!c&&!W&&e.currentTarget===e.target)switch(e.key){case"Enter":case" ":case"ArrowDown":e.preventDefault(),N("from"),X(!0)}},ce=t=>{const r="from"===t?j:R;return r?_?_(r):e(Hs,{$truncateType:E,children:J(t,Q(t))}):e(Ns,{$truncateType:E,children:J(t,(null==o?void 0:o[t])||"")})},ue=t=>e(Ps,{onClick:ne(t),ref:K[t],$disabled:l,children:ce(t)});return e(zs,Object.assign({id:g},z,{children:e(Mv,{children:e(Us,{enabled:!c&&!l,isOpen:W,renderElement:()=>t(Gw,{className:d,"data-testid":f,ref:U,tabIndex:0,onFocus:se,onBlur:le,$focused:Y||W,$disabled:l,$readOnly:c,$error:u,onKeyDown:de,children:[t(Vd,{currentActive:ee(),error:u,children:[ue("from"),ue("to")]}),!W&&j&&R&&!c&&!l&&e(qw,{onClick:ae,type:"button","aria-label":"Clear",children:e(eu,{"aria-hidden":!0})})]}),renderDropdown:()=>e(ny,{ref:Z,"data-testid":`${f}-dropdown`,listboxId:G,listItems:te,onSelectItem:oe,onDismiss:ie,valueExtractor:y,listExtractor:w,selectedItems:re,itemsLoadState:F[H],itemTruncationType:E,onRetry:k,width:A,matchElementWidth:!A,enableSearch:m,searchFunction:p,searchPlaceholder:b,renderListItem:O,renderCustomCallToAction:T}),onOpen:()=>{l||c||"none"===H&&(N("from"),X(!0))},onClose:()=>{N("none"),X(!1),j&&R||(L(void 0),P(void 0)),V(!1)},onDismiss:ie,clickToToggle:!1,offset:8,alignment:I,fitAvailableHeight:!0,customZIndex:M,rootNode:B})})}))},Qw=({selectedOption:t,placeholder:r="Select",options:n,disabled:o,error:i,className:l,"data-testid":d,id:c,"aria-labelledby":u,"aria-describedby":f,"aria-invalid":g,enableSearch:m=!1,searchFunction:p,searchPlaceholder:b,valueExtractor:v,valueToStringFunction:y,listExtractor:x,displayValueExtractor:w,onSelectOption:$,onShowOptions:C,onHideOptions:S,onRetry:D,optionsLoadState:k="success",optionTruncationType:F="end",renderCustomSelectedOption:E,renderListItem:_,hideNoResultsDisplay:O,noResultsDescription:T,customLabels:I,renderCustomCallToAction:M,onBlur:B,variant:A="default",readOnly:z,alignment:j,dropdownZIndex:L,dropdownRootNode:R,dropdownWidth:P})=>{const[H,N]=s(t),[W,Y]=s(!1),[V,U]=s(!1),[K]=s((()=>et.generate())),Z=a(null),q=a(null),G=a(null);h((()=>{N(t)}),[t]);const X=(e,t)=>{var r;null===(r=q.current)||void 0===r||r.focus(),N(e),Y(!1),ne(!1),null==$||$(e,t)},Q=()=>{W&&(Y(!1),ne(!1))},J=()=>{V||W||U(!0)},ee=e=>{V&&!W&&Z.current&&!Z.current.contains(e.relatedTarget)&&(U(!1),null==B||B())},te=()=>{var e;if(!H)return"";if(w)return w(H);if(v){const t=v(H);return y?y(t):null!==(e=null==t?void 0:t.toString())&&void 0!==e?e:""}return H.toString()},re=e=>{if("middle"===F){let t=0;return G&&G.current&&(t=G.current.getBoundingClientRect().width),tt.truncateOneLine(e,t,120,8)}return e},ne=e=>{e?null==C||C():null==S||S()};return e(Mv,{children:e(Us,{enabled:!z&&!o,isOpen:W,renderElement:()=>e(Dd,{className:l,"data-testid":d,id:c,ref:Z,tabIndex:-1,onFocus:J,onBlur:ee,$focused:V,$disabled:o,$readOnly:z,$error:i,children:e(ay,{ref:q,disabled:o,expanded:W,listboxId:K,popupRole:"listbox",readOnly:z,variant:A,"aria-labelledby":u,"aria-describedby":f,"aria-invalid":g,children:e(Ps,{ref:G,$disabled:o,children:H?E?E(H):e(Hs,{$truncateType:F,$variant:A,children:re(te())}):e(Ns,{$truncateType:F,$variant:A,children:r})})})}),renderDropdown:()=>e(ny,{listboxId:K,listItems:n,onSelectItem:X,onDismiss:Q,valueExtractor:v,listExtractor:x,enableSearch:m,searchPlaceholder:b,searchFunction:p,selectedItems:H?[H]:[],onRetry:D,itemsLoadState:k,itemTruncationType:F,renderListItem:_,hideNoResultsDisplay:O,noResultsDescription:T,customLabels:I,renderCustomCallToAction:M,variant:A,width:P,matchElementWidth:!0}),onOpen:()=>{Y(!0),ne(!0),U(!0)},onClose:e=>{Y(!1),ne(!1),"click"!==e&&(U(!1),null==B||B())},onDismiss:()=>{var e;null===(e=q.current)||void 0===e||e.focus(),Y(!1),ne(!1)},clickToToggle:!0,offset:8,alignment:j,fitAvailableHeight:!0,customZIndex:L,rootNode:R})})},Jw=k.div`
    overflow: hidden;
    border: ${Qi["width-010"]} ${Qi.solid} ${qi.border};
    border-radius: ${ea.sm};
    background: ${qi.bg};
    padding: ${Ji["spacing-16"]};
    min-width: 23rem;

    ${na.MaxWidth.sm} {
        min-width: unset;
        width: calc(100vw - ${ra["sm-margin"]}px * 2);
    }

    ${na.MaxWidth.xs} {
        width: calc(100vw - ${ra["xs-margin"]}px * 2);
    }

    ${na.MaxWidth.xxs} {
        width: calc(100vw - ${ra["xxs-margin"]}px * 2);
    }
`,e$=k.div`
    display: flex;
    align-items: baseline;
`,t$=k.div`
    margin: 0 0.5rem;
    color: ${qi.text};
`,r$=k(k.div`
    ${e=>"small"===e.$variant?Gi["body-md-regular"]:Gi["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.$truncateType)return F`
                    ${pa(1)}
                `}}
    overflow: hidden;
`)`
    color: ${qi["text-subtler"]};
`,n$=r=>{var{alignment:n="left",className:o,disabled:i,dropdownZIndex:l,error:d,histogramSlider:c,id:u,"aria-labelledby":f,"aria-describedby":g,"aria-invalid":m,onBlur:p,onChange:b,onChangeEnd:v,optionTruncationType:y="end",placeholder:x="Select",rangeLabelPrefix:w,rangeLabelSuffix:$,readOnly:C,renderRangeLabel:S,value:D,dropdownRootNode:k}=r,F=Fe(r,["alignment","className","disabled","dropdownZIndex","error","histogramSlider","id","aria-labelledby","aria-describedby","aria-invalid","onBlur","onChange","onChangeEnd","optionTruncationType","placeholder","rangeLabelPrefix","rangeLabelSuffix","readOnly","renderRangeLabel","value","dropdownRootNode"]);const{interval:E,bins:_=[],renderEmptyView:O,ariaLabels:T}=c,I=_.map((e=>e.minValue)),M=Math.min(...I),[B,A]=s(q()),[z,j]=s(!1),[L,R]=s(!1),[P]=s((()=>et.generate())),H=a(null),N=a(null),W=a(null),Y=F["data-testid"]||"select-histogram";h((()=>{D!==B&&A(q())}),[D]);const V=e=>{A(e),null==b||b(e)},U=e=>{A(e),null==v||v(e)},K=()=>{L||z||R(!0)},Z=e=>{L&&!z&&H.current&&!H.current.contains(e.relatedTarget)&&(R(!1),null==p||p())};function q(){return null!=D?D:[M,M+E]}const G=e=>S?S(e):t(Ca.BodyBL,{children:[w,e,$]});return e(Mv,{children:e(Us,{enabled:!C&&!i,isOpen:z,renderElement:()=>e(Dd,{className:o,"data-testid":Y,id:u,ref:H,tabIndex:-1,onFocus:K,onBlur:Z,$focused:L,$disabled:i,$readOnly:C,$error:d,children:e(ay,{ref:N,disabled:i,expanded:z,listboxId:P,popupRole:"dialog",readOnly:C,variant:"default","aria-labelledby":f,"aria-describedby":g,"aria-invalid":m,children:e(Ps,{ref:W,$disabled:i,children:I&&0!==I.length?t(e$,{children:[G(B[0]),e(t$,{children:"-"}),G(B[1])]}):e(r$,{$truncateType:y,$variant:"default",children:x})})})}),renderDropdown:({elementWidth:t,styles:r,setFloatingRef:n,getFloatingProps:o})=>e(Jw,Object.assign({style:Object.assign(Object.assign({},r),{width:t}),ref:n},o(),{children:e(Xc,{interval:E,value:B,bins:_,onChange:V,onChangeEnd:U,showRangeLabels:!1,renderEmptyView:O,ariaLabels:T})})),onOpen:()=>{j(!0)},onClose:()=>{j(!1)},onDismiss:()=>{var e;null===(e=N.current)||void 0===e||e.focus(),j(!1)},clickToToggle:!0,offset:8,alignment:n,fitAvailableHeight:!0,customZIndex:l,rootNode:k})})},o$=t=>{var{value:r,ariaLabel:n,onChange:o,onChangeEnd:i}=t,a=Fe(t,["value","ariaLabel","onChange","onChangeEnd"]);const[l,d]=s(c());h((()=>{r!==l[0]&&d(c())}),[r]);function c(){return null!=r?[r]:[0]}return e(Vc,Object.assign({},a,{value:l,numOfThumbs:1,onChange:e=>{const[t]=e;d([t]),null==o||o(t)},onChangeEnd:e=>{const[t]=e;d([t]),null==i||i(t)},ariaLabels:n?[n]:void 0}))},i$=k.p`
    text-align: right;
    ${Gi["body-sm-semibold"]}
    color: ${qi["text-subtler"]};
`,a$=({value:t,maxLength:n,renderCustomCounter:i})=>{const[a,l]=s("");h((()=>{l(d(`${t||""}`))}),[t,n]);const d=e=>{if(i)return i(n,e.toString().length);{const t=n-e.toString().length;return 1===t?`${t} character left`:`${t.toLocaleString()} characters left`}};return e(r,{children:o.isValidElement(a)?a:e(i$,{"data-testid":"counter-label",children:a})})},s$=k.div`
    display: flex;
    flex-direction: column;
`,l$=k.textarea`
    border: ${Qi["width-010"]} ${Qi.solid} ${qi.border};
    border-radius: ${ea.sm};
    background: ${qi.bg};
    outline: none;
    overflow: auto;

    display: block;
    padding: ${Ji["spacing-12"]} ${Ji["spacing-16"]};
    width: 100%;

    ${Gi["body-baseline-regular"]}
    color: ${qi.text};

    &:focus,
    &:active {
        outline-offset: -1px;
        outline: ${Qi["width-020"]} ${Qi.solid}
            ${qi["border-focus"]};
    }

    &::placeholder,
    &::-webkit-input-placeholder {
        color: ${qi["text-subtler"]};
    }

    &::-webkit-scrollbar {
        width: 14px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: ${qi["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: ${ea.full};
        background-clip: padding-box;
    }

    ${e=>e.readOnly?F`
                border-color: transparent;
                background: transparent !important;
                padding: ${Ji["spacing-12"]} 0;

                &:focus,
                &:active {
                    outline-color: ${qi["border-focus"]};
                }
            `:e.disabled?F`
                background: ${qi["bg-disabled"]};
                cursor: not-allowed;

                &:focus,
                &:active {
                    outline-color: ${qi["border-disabled"]};
                }
            `:e.$error?F`
                border-color: ${qi["border-error"]};

                &:focus,
                &:active {
                    outline-color: ${qi["border-error-focus"]};
                }
            `:void 0}
`,d$=o.forwardRef(((t,r)=>{var{value:n,disabled:o,error:i,rows:a=5,prefix:l,transformValue:d,onChange:c,maxLength:u}=t,f=Fe(t,["value","disabled","error","rows","prefix","transformValue","onChange","maxLength"]);const[g,m]=s(n);h((()=>{m(n)}),[n]);return e(l$,Object.assign({ref:r,disabled:o,value:l?l+(null!=g?g:""):g,onChange:e=>{let t=e.target.value;if(l){t.startsWith(l)||(t=l+t.trimStart()),t.length<l.length&&(t=l);if((e.target.selectionStart||0)<l.length)return void e.preventDefault();const r=t.slice(l.length),n=d?d(r):r;if(m(n),e.target.value=l+n,c){const t=Object.assign(Object.assign({},e),{target:Object.assign(Object.assign({},e.target),{value:n})});c(t)}}else{const r=d?d(null!=t?t:""):t;m(r),e.target.value=r,c&&c(e)}},onKeyDown:e=>{if(!l)return;const{selectionStart:t}=e.currentTarget;"Backspace"===e.key&&t<=l.length&&e.preventDefault(),"ArrowLeft"===e.key&&t<=l.length&&e.preventDefault(),"Home"===e.key&&(e.preventDefault(),requestAnimationFrame((()=>{e.currentTarget.setSelectionRange(l.length,l.length)})))},$error:i,rows:a,maxLength:l&&u?l.length+u:u},f))}));o.forwardRef(((r,n)=>{var{value:o,disabled:i,rows:a=5,onChange:l,transformValue:d,prefix:c,maxLength:u,renderCustomCounter:f}=r,g=Fe(r,["value","disabled","rows","onChange","transformValue","prefix","maxLength","renderCustomCounter"]);const[m,p]=s(o);h((()=>{p(o)}),[o]);return t(s$,{children:[e(d$,Object.assign({ref:n,disabled:i,value:m,rows:a||5,onChange:e=>{const t=e.target.value;p(t),l&&l(e)},prefix:c,transformValue:d,maxLength:u},g)),u&&e(a$,{value:m,maxLength:u,renderCustomCounter:f})]})}));const c$=k.div`
    display: flex;
    justify-content: flex-end;
    margin-top: ${Ji["spacing-4"]};
`,u$=k.div`
    display: flex;
    flex: 1;
    margin-right: ${Ji["spacing-12"]};
    gap: ${Ji["spacing-4"]};
`,h$=k(vs)`
    margin-top: 0;
`,f$=o.forwardRef(((n,o)=>{const{label:i,value:a,errorMessage:l,id:d="form-textarea","data-error-testid":c,"data-testid":u,onChange:f,layoutType:g,mobileCols:m,tabletCols:p,desktopCols:b,xxsCols:v,xsCols:y,smCols:x,mdCols:w,lgCols:$,xlCols:C,xxlCols:S,transformValue:D,prefix:k=""}=n,F=Fe(n,["label","value","errorMessage","id","data-error-testid","data-testid","onChange","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","transformValue","prefix"]),[E,_]=s(a);h((()=>{_(a)}),[a]);return t(Bs,{id:d,label:i,disabled:F.disabled,layoutType:g,mobileCols:m,tabletCols:p,desktopCols:b,xxsCols:v,xsCols:y,smCols:x,mdCols:w,lgCols:$,xlCols:C,xxlCols:S,children:[e(d$,Object.assign({id:`${d}-base`,"data-testid":u||d,value:E,error:!!l,onChange:e=>{const t=e.target.value;_(t),f&&f(e)},ref:o,prefix:k,transformValue:D},F)),l||F.maxLength?t(c$,{children:[l&&t(u$,{children:[e(ps,{"aria-hidden":!0}),e(h$,{"data-testid":c||(d?`${d}-error-message`:"error-message"),children:l})]}),F.maxLength&&e(a$,{value:E,maxLength:F.maxLength,renderCustomCounter:F.renderCustomCounter})]}):e(r,{})]})})),g$=k.div`
    position: relative;
`,m$=k(kd)`
    height: 3rem;
    gap: ${Ji["spacing-8"]};
`,p$=k(Fd)`
    display: block;
    width: 100%;
    flex: 1;
`;var b$,v$;!function(e){e.AM="AM",e.PM="PM"}(b$||(b$={})),function(e){e.roundToNearestInterval=(e,t,r)=>{const[n,o]=e.split(":"),i=parseInt(n,10),a=parseInt(o,10);if(isNaN(i)||isNaN(a)||a<0||a>=60)throw new Error("Invalid time format");const s=60*i+a,l=s%t,d=0===l?s:r?s+(t-l):s-l,c=d%60;return`${Math.floor(d/60).toString().padStart(2,"0")}:${c.toString().padStart(2,"0")}`},e.generateHourlyIntervals=(e,t,r="ha")=>{const n="HH:mm";let o=Ie(e,n),i=Ie(t,n);o.isSame(i)&&(i=i.add(1,"day"));const a=[];for(;o.isBefore(i);)a.push(o.format(r)),o=o.add(1,"hour");return a},e.getTimeValues=(e,t)=>{const r={hour:"",minute:"",period:b$.AM};if(!t)return r;try{if("24hr"===e){const n=$$(t,e);r.minute=tt.padValue(n.minute);const o=parseInt(n.hour);0===Math.floor(o/12)?(r.period=b$.AM,r.hour=0===o?"12":tt.padValue(o.toString())):(r.period=b$.PM,r.hour=12===o?o.toString():tt.padValue((o-12).toString()))}else{const{hour:n,minute:o,period:i=""}=$$(t,e);r.hour=tt.padValue(n),r.minute=tt.padValue(o),r.period="am"===i.toLowerCase()?b$.AM:b$.PM}return r}catch(e){return r}},e.updateMinutes=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?tt.padValue("0"):"55";const n=Math.floor(r/5),o=(("add"===t?n+1:r%5==0?n-1:n)%12+12)%12;return tt.padValue((5*o).toString())},e.updateHours=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?tt.padValue("1"):"12";const n="add"===t?r+1:r-1;return n<=12&&n>0?tt.padValue(n.toString()):13===n?tt.padValue("1"):"12"},e.convertTo24HourFormat=e=>{const t=parseInt(e.hour);let r;return r=e.period===b$.PM?12===t?t.toString():(t+12).toString():12===t?"00":e.hour,`${r}:${e.minute}`},e.convertHourTo12HourFormat=e=>{const t=parseInt(e),r=t%12==0?12..toString():(t%12).toString();return tt.padValue(r)},e.formatDisplayValue=(e,t)=>{try{const{hour:r,minute:n,period:o=""}=$$(e,t),i=tt.padValue(r);let a=`${i}:${tt.padValue(n)}`;return"12hr"===t?(a+=o.toLowerCase(),a):a}catch(e){return""}},e.toMinutesSeconds=e=>({minutes:Math.floor(e/60),seconds:e%60}),e.to24Hour=e=>{if((null==e?void 0:e.includes("am"))||(null==e?void 0:e.includes("pm"))){const[t,r]=e.split(/(am|pm)/i),[n,o]=t.split(":").map(Number);let i=n;return"pm"===r&&i<12&&(i+=12),"am"===r&&12===i&&(i=0),C$(i,o)}return e},e.generateTimings=(t,r="12hr",n,o)=>{const i=[];let a=0,s=1440-t;for(n&&(a=e.timeToMinutes(n)),o&&(s=e.timeToMinutes(o));a<=s;){let e=Math.floor(a/60);const n=a%60;if("12hr"===r){const t=e>=12?"pm":"am";e%=12,e=e||12;const r=C$(e,n,t);i.push(r)}else{const t=C$(e,n);i.push(t)}a+=t}return i},e.parseInput=(e,t="12hr")=>{if(""===e||void 0===e)return e;const r=e.trim().toLowerCase(),n=/^(?:(\d{1,2})([:.])?(\d{2})?)?(a|p|am|pm)?$/.exec(r);if(!n)return;let o=parseInt(n[1]||"0",10);const i=parseInt(n[3]||"0",10);let a=n[4];if(void 0===n[1]||o>24||i>59)return;if("a"===a?a="am":"p"===a&&(a="pm"),"24hr"===t)return"pm"===a&&o<12?o+=12:("am"===a&&12===o||24===o)&&(o=0),C$(o,i);a?0===o||24===o?(a="am",o=12):o>12&&(a="pm",o-=12):(a=0===o||24===o||o>6&&o<12?"am":"pm",o=o%12||12);return C$(o,i,a)},e.findClosestFlooredTime=(t,r)=>{if(!t)return t;const n=e.timeToMinutes(t);let o="",i=1/0;for(const t of r){const r=e.timeToMinutes(t)-n;if(r<=0&&Math.abs(r)<i)i=Math.abs(r),o=t;else if(r>0)break}return o},e.timeToMinutes=e=>{const[t,r]=e.toLowerCase().split(/(am|pm)/),[n,o]=t.split(":").map(Number);let i=n;return"pm"===r&&12!==i&&(i+=12),"am"===r&&12===i&&(i=0),60*i+o},e.calculateDuration=(t,r)=>{const n=e.timeToMinutes(t);return e.timeToMinutes(r)-n},e.calculateScrollPosition=t=>{const{scrollTime:r,minTime:n,maxTime:o,interval:i,intervalWidth:a,options:s}=t;try{if(!/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(r))return console.warn(`Invalid scrollTime format: "${r}". Expected format: HH:mm.`),null;const t=(null==s?void 0:s.roundToInterval)?e.roundToNearestInterval(r,i):r,[l,d]=y$(t);if(isNaN(l)||isNaN(d))return console.warn(`Invalid scrollTime: "${r}".`),null;const c=60*l+d,[u,h]=y$(n),f=60*u+h,[g,m]=y$(o);(c<f||c>60*g+m)&&console.warn(`scrollTime "${r}" is outside the range (${n} - ${o}).`);return(c-f)/i*a}catch(e){return console.warn(`Error processing scrollTime: "${r}".`,e),null}}}(v$||(v$={}));const y$=e=>e.split(":").map(Number),x$=(e,t)=>{const r=parseInt(e);return"24hr"===t?r>=0&&r<=23:r>=1&&r<=12},w$=e=>{const t=parseInt(e);return t>=0&&t<=59},$$=(e,t)=>{const r=e?e.split(":"):[],n=new Error("Invalid format");if("12hr"===t){if(2!==r.length||4!==r[1].length)throw n;const e=r[1].substring(0,2),i=r[1].substring(2);if(!x$(r[0],t)||!w$(e)||"am"!==(o=i).toLowerCase()&&"pm"!==o.toLowerCase())throw n;return{hour:r[0],minute:e,period:r[1].substring(2)}}if(2!==r.length)throw n;if(!x$(r[0],t)||!w$(r[1]))throw n;return{hour:r[0],minute:r[1]};var o},C$=(e,t,r)=>r?`${e}:${t.toString().padStart(2,"0")}${r}`:`${e.toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}`,S$=k.div`
    padding: ${Ji["spacing-8"]} ${Ji["spacing-16"]};
    display: flex;

    ${e=>{let t,r;switch(e.$type){case"error":t=qi["bg-error"](e),r=qi["border-error"](e);break;case"success":t=qi["bg-success"](e),r=qi["border-success"](e);break;case"warning":default:t=qi["bg-warning"](e),r=qi["border-warning"](e);break;case"info":t=qi["bg-info"](e),r=qi["border-info"](e);break;case"description":t=qi["bg-strong"](e),r=qi["border-strong"](e)}return F`
            background: ${t};
            border-left: ${Qi["width-020"]} ${Qi.solid}
                ${r};
        `}}
`,D$=k.div`
    display: flex;
    align-items: center;
    height: 1lh;
    margin-right: ${Ji["spacing-8"]};

    ${e=>{let t;const r="small"===e.$sizeType?"1.25rem":"1.5rem";switch(e.$type){case"error":t=qi["icon-error"](e);break;case"success":t=qi["icon-success"](e);break;case"warning":default:t=qi["icon-warning"](e);break;case"info":t=qi["icon-info"](e);break;case"description":t=qi["icon-subtle"](e)}return F`
            svg {
                color: ${t};
                width: ${r};
                height: ${r};
            }
        `}}
`,k$=k(Ca.LinkSM)`
    ${e=>"small"===e.$sizeType?F`
                ${Gi["body-sm-semibold"]}
                margin-top: ${Ji["spacing-4"]};
            `:F`
                ${Gi["body-md-semibold"]}
                margin-top: ${Ji["spacing-8"]};
            `}
    display: flex;
    align-items: center;
    align-self: flex-start;

    svg {
        height: 1rem;
        width: 1rem;
        margin-left: ${Ji["spacing-4"]};
    }
`,F$=k.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-wrap: anywhere;
`,E$=k.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    order: 1;
    ${e=>{if(e.$showMore&&e.$hasActionLink)return F`
                margin-bottom: ${Ji["spacing-8"]};
            `}}
    ${e=>{const t="linear-gradient(to bottom, black 50%, transparent 100%)";if(!e.$showMore&&e.$maxCollapsedHeight)return`\n                max-height: ${e.$maxCollapsedHeight}px;\n\t\t\t\toverflow: hidden;\n                -webkit-mask-image: ${t};\n                mask-image: ${t};\n\t\t\t`}}
`,_$=k.div`
    color: ${qi.text};

    ${e=>"small"===e.$sizeType?Oa({textSize:"body-sm"}):Oa({textSize:"body-md"})}
`,O$=k.button`
    ${e=>"small"===e.$sizeType?F`
                ${Gi["body-sm-semibold"]}
            `:F`
                ${Gi["body-md-semibold"]}
            `}

    display: flex;
    align-items: center;
    align-self: flex-start;
    gap: ${Ji["spacing-4"]};
    margin-top: ${Ji["spacing-8"]};
    order: 2;

    cursor: pointer;
    user-select: none;
    border: none;
    background: transparent;

    color: ${qi["text-primary"]};
`,T$=k(ce)`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${Xi["duration-350"]} ${Xi["ease-standard"]};
`,I$=k.div`
    height: 1.625rem;
    width: 1.625rem;
    margin-right: 0.5rem;
    flex-shrink: 0;

    svg {
        height: 100%;
        width: 100%;
    }

    ${e=>e.$disabled?e.$active?F`
                    color: ${qi["icon-selected-disabled"]};
                `:F`
                    color: ${qi["icon-disabled-subtle"]};
                `:e.$active?F`
                color: ${qi["icon-selected"]};
            `:F`
            color: ${qi["icon-subtle"]};
        `};
`,M$=F`
    margin-bottom: ${e=>e.$bottomMargin||0}rem;

    // Counter matters
    counter-reset: list;

    ${e=>e.$size&&Gi[`${e.$size}-regular`]}
    font-weight: ${Gi.Spec["weight-regular"]};
    color: ${qi.text};

    // nested lists styling
    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`,B$=k.ol`
    ${M$}

    margin-left: 3em;

    ${na.MaxWidth.lg} {
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
`,A$=k.ul`
    ${M$}

    margin-left: ${e=>e.$hasCustomIcon?0:"2.5em"};
    list-style-type: ${e=>e.$hasCustomIcon?"none":e.$bulletType||"disc"};

    ${e=>e.$hasCustomIcon&&F`
            & > li {
                display: flex;
                align-items: flex-start;
                gap: 0.5em;
            }
        `}
`,z$=n=>{var{size:i,bulletType:a,bottomMargin:s,children:l}=n,d=Fe(n,["size","bulletType","bottomMargin","children"]);const c=void 0!==a&&"string"!=typeof a;return e(A$,Object.assign({$size:i,$bulletType:c?void 0:a,$bottomMargin:s,$hasCustomIcon:c},d,{children:c?o.Children.map(l,(n=>o.isValidElement(n)?o.cloneElement(n,{children:t(r,{children:[e("div",{"aria-hidden":!0,children:a}),e("div",{children:n.props.children})]})}):n)):l}))};z$.displayName="TextList.Ul";const j$=t=>{var{size:r,counterType:n,counterSeparator:o,bottomMargin:i,children:a}=t,s=Fe(t,["size","counterType","counterSeparator","bottomMargin","children"]);return e(B$,Object.assign({$size:r,$counterType:n,$counterSeparator:o,$bottomMargin:i},s,{children:a}))};j$.displayName="TextList.Ol";const L$=z$,R$=k.div`
    position: relative;
    display: inline-flex;
    min-width: 10.375rem;
    border-radius: ${ea.sm};
    border-width: 1px;
    border-style: solid;
    overflow: hidden;
    flex-direction: column;
    height: fit-content;
    background: ${qi.bg};

    &:has(input:focus-visible) {
        outline: 2px solid ${qi["focus-ring"]};
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
                            border-color: ${qi["border-error"]};
                        `:F`
                            border-color: ${qi["border-error"]};

                            &:has(${V$}:hover) {
                                @media (pointer: fine) {
                                    background: ${qi["bg-hover-subtle"]};
                                }
                            }
                        `:e.$disabled?e.$selected?F`
                            border: none;
                            background: ${qi["bg-selected-disabled"]};
                        `:F`
                            border: none;
                        `:e.$selected?F`
                        border: none;
                        background: ${qi["bg-selected"]};

                        &:has(${V$}:hover) {
                            @media (pointer: fine) {
                                background: ${qi["bg-selected-hover"]};

                                & ${N$} {
                                    color: ${qi["text-selected-hover"]};
                                }

                                & ${eC} {
                                    color: ${qi["icon-selected-hover"]};
                                }
                            }
                        }
                    `:F`
                    border: none;

                    &:has(${V$}:hover) {
                        @media (pointer: fine) {
                            background: ${qi["bg-hover-subtle"]};
                        }
                    }
                `:e.$error?e.$disabled?F`
                            border-color: ${qi["border-error"]};
                        `:F`
                            border-color: ${qi["border-error"]};

                            &:has(${V$}:hover) {
                                @media (pointer: fine) {
                                    background: ${qi["bg-hover-subtle"]};
                                }
                            }
                        `:e.$disabled?e.$selected?F`
                            border-color: ${qi["border-selected-disabled"]};
                            background: ${qi["bg-selected-disabled"]};
                        `:F`
                            border-color: ${qi["border-disabled"]};
                            background: ${qi["bg-disabled"]};
                        `:e.$selected?F`
                        border-color: ${qi["border-selected"]};
                        background: ${qi["bg-selected"]};

                        &:has(${V$}:hover) {
                            @media (pointer: fine) {
                                background: ${qi["bg-selected-hover"]};

                                & ${N$} {
                                    color: ${qi["text-selected-hover"]};
                                }

                                & ${eC} {
                                    color: ${qi["icon-selected-hover"]};
                                }
                            }
                        }
                    `:F`
                    border-color: ${qi.border};

                    &:has(${V$}:hover) {
                        @media (pointer: fine) {
                            background: ${qi["bg-hover-subtle"]};
                        }
                    }
                `}
`,P$=k.input`
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
`,H$=k.div`
    display: flex;
`,N$=k.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
    width: 100%;
    overflow: hidden;

    // apply header container text color
    ${e=>e.$disabled?e.$selected?F`
                    color: ${qi["text-selected-disabled"]};
                `:F`
                    color: ${qi["text-disabled"]};
                `:e.$selected?F`
                color: ${qi["text-selected"]};
            `:F`
            color: ${qi.text};
        `}
`,W$=k.label`
    ${e=>e.$selected?Gi["body-baseline-semibold"]:Gi["body-baseline-regular"]};
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
    -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.desktop)&&void 0!==r?r:"none"}};
    ${na.MaxWidth.lg} {
        -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.tablet)&&void 0!==r?r:"none"}};
    }
    ${na.MaxWidth.sm} {
        -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.mobile)&&void 0!==r?r:"none"}};
    }
`,Y$=k.div`
    ${Gi["body-md-regular"]}
    margin-top: 0.5rem;

    z-index: 1; // forces sublabel to render above the input
    pointer-events: none; // to allow click events to be passed to the input

    strong,
    b {
        ${Gi["body-md-semibold"]}
    }
`,V$=k.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`,U$=k.div`
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
    padding: ${e=>e.$addPadding?"0.6875rem 0rem 0.6875rem 1rem":"0.6875rem 1rem"};
`,K$=k.button`
    color: ${e=>e.$disabled?qi["text-disabled"]:qi["text-error"]};
    white-space: nowrap;
    ${Gi["body-md-semibold"]}
    height: fit-content;
    padding: 0.6875rem 1rem 0.6875rem 0.5rem;
    border: none;
    background: none;

    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
`,Z$=k.button`
    color: ${e=>e.disabled?qi["text-disabled"]:qi["text-primary"]};
    ${Gi["body-baseline-semibold"]}
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border: none;
    background-color: ${qi.bg};
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    padding: 0 1rem 0.6875rem 1rem;
    padding-top: ${e=>e.$paddingTopRequired?"0.6875rem":"0rem"};
    width: 100%;

    svg {
        width: 1em;
        height: 1em;
        margin-left: 0.5rem;
    }
`,q$=k.div`
    width: 100%;
    color: ${e=>e.$disabled?qi["text-disabled"]:qi["text-error"]};
    border: none;
    background: ${qi.bg};
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem 0.5rem 1rem;
`,G$=k((r=>{var{type:n,className:o,children:i,actionLink:a,actionLinkIcon:l,sizeType:d="default",showIcon:c=!1,customIcon:u,maxCollapsedHeight:f,role:m}=r,p=Fe(r,["type","className","children","actionLink","actionLinkIcon","sizeType","showIcon","customIcon","maxCollapsedHeight","role"]);const[b,v]=s(!1),[y,x]=s(!1),{height:w,ref:$}=Gt(),[C]=s((()=>et.generate())),S=g((()=>{v(!f),x(k())}),[f,w]),k=()=>!(!w||!f)&&w>f;h((()=>{S()}),[f,w,S]);return t(S$,{className:o,$type:n,$sizeType:d,"aria-label":`${(()=>{switch(n){case"success":return"Success";case"warning":return"Warning";case"error":return"Error";case"info":return"Information";case"description":return"Description";default:return"Alert"}})()}`,"data-testid":p["data-testid"],role:m,children:[c&&e(D$,{$sizeType:d,$type:n,children:(()=>{if(n&&u)return u;switch(n){case"success":return e(Se,{"aria-hidden":!0});case"warning":return e(Ce,{"aria-hidden":!0});case"error":return e(re,{"aria-hidden":!0});case"info":case"description":return e(D,{"aria-hidden":!0});default:return null}})()}),t(F$,{children:[y&&t(O$,{$sizeType:d,$type:n,type:"button","aria-expanded":b,"aria-controls":C,onClick:()=>v(!b),children:["Show ",b?"less":"more",e(T$,{$expanded:b})]}),t(E$,{id:C,$maxCollapsedHeight:k()?f:void 0,$showMore:b,$hasActionLink:!!a,inert:qs(!!f&&!b),children:[e(_$,{ref:$,$type:n,$sizeType:d,children:i}),a?t(k$,Object.assign({"data-testid":"action-link",$type:n,$sizeType:d,underlineStyle:"none"},a,{children:[a.children,l||e($e,{})]})):null]})]})]})}))`
    width: 100%;
    user-select: none;
`,X$=k.div`
    padding: 0 1rem;
    padding-top: 0.6875rem;
    padding-bottom: ${e=>e.$isFinalItem?"0.6875rem":"0.5rem"};
    background-color: ${qi.bg};
    ${Oa({textSize:"body-md"})}

    ${e=>e.$disabled?F`
                color: ${qi["text-disabled"]};
            `:e.$selected?F`
                color: ${qi["text-selected"]};
            `:F`
                color: ${qi.text};
            `}
`,Q$=k(Ca.BodyMD)`
    color: ${e=>e.$disabled?qi["text-disabled"]:qi["text-error"]};
`,J$=k(L$)`
    color: ${e=>e.$disabled?qi["text-disabled"]:qi["text-error"]};
`,eC=k((({type:t,active:r=!1,disabled:n,className:o})=>{let i;switch(t){case"checkbox":i=e(r?fe:ue,{});break;case"radio":i=e(r?ke:De,{});break;case"tick":i=e(ge,{});break;case"cross":i=e(M,{});break;default:i=null}return e(I$,{className:o,$active:r,$disabled:n,"aria-hidden":!0,children:i})}))`
    ${e=>e.$disabled?e.$selected?F`
                    color: ${qi["icon-selected-disabled"]};
                `:F`
                    color: ${qi["icon-disabled-subtle"]};
                `:e.$selected?F`
                color: ${qi["icon-selected"]};
            `:F`
            color: ${qi["icon-subtle"]};
        `};
`,tC=k.div`
    overflow: hidden;

    ${na.MaxWidth.xxs} {
        max-width: 100%;
    }
`,rC=k.div`
    position: relative;
    width: 100%;
    padding: ${Ji["spacing-8"]} ${Ji["spacing-20"]}
        ${Ji["spacing-24"]} ${Ji["spacing-20"]};
    display: flex;
    flex-direction: column;
    background: ${qi.bg};
    border: ${Qi["width-010"]} ${Qi.solid} ${qi.border};
    border-radius: ${ea.sm};
`,nC=k.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${na.MaxWidth.xxs} {
        flex-direction: column;
        width: 100%;
    }
`,oC=k.div`
    display: flex;
    justify-content: flex-end;
    margin-top: ${Ji["spacing-16"]};
    gap: ${Ji["spacing-8"]};

    ${na.MaxWidth.xxs} {
        flex-direction: column-reverse; // FIXME: this breaks tab focus
        margin-top: ${Ji["spacing-32"]};
    }
`,iC=k.div`
    display: flex;
    align-items: center;
    margin-right: ${Ji["spacing-32"]};

    ${na.MaxWidth.xxs} {
        margin-right: 0;
        width: 100%;
    }
`,aC=k.div`
    display: flex;
    gap: ${Ji["spacing-8"]};

    ${na.MaxWidth.lg} {
        flex-direction: column;
    }

    ${na.MaxWidth.xxs} {
        flex-direction: row;
        width: 100%;
    }
`,sC=k.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${na.MaxWidth.xxs} {
        width: 6rem;
    }
`,lC=k(ka)`
    width: 5rem;
    padding: ${Ji["spacing-16"]} 0;
    color: ${qi.icon};

    svg {
        height: 1rem;
        width: 1rem;
    }

    &:hover {
        color: ${qi["icon-hover"]};
    }
`,dC=k(Ca.BodyBL)`
    flex-shrink: 0;
    width: 1.5rem;
    text-align: center;
`,cC=k(Dd)`
    height: calc(3rem - 2px);
    width: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    ${na.MaxWidth.xxs} {
        width: 100%;
    }
`,uC=k(Fd)`
    text-align: center;
    width: 100%;

    &:focus::placeholder {
        color: transparent;
    }
`,hC=k((n=>{var{type:o="checkbox",indicator:i,checked:l,styleType:d="default",children:c,childrenMaxLines:u,subLabel:f,disabled:g,error:m,name:p,id:b,className:y,compositeSection:x,removable:w,onRemove:$,"data-testid":C,onChange:S,useContentWidth:D,"aria-describedby":k}=n,F=Fe(n,["type","indicator","checked","styleType","children","childrenMaxLines","subLabel","disabled","error","name","id","className","compositeSection","removable","onRemove","data-testid","onChange","useContentWidth","aria-describedby"]);const{collapsible:E=!0,errors:_,children:O,initialExpanded:T}=x||{},[I,M]=s(l),[B,A]=s(!!T),z=v((()=>{const e=Array.isArray(_)&&(null==_?void 0:_.length)>0,t=!Array.isArray(_)&&!!_;return e||t}),[_]),[j]=s(et.generate()),L=b?`${b}`:`tg-${j}`,R=a(null);h((()=>{M(l)}),[l]),h((()=>{I&&A(null==T||T)}),[I]);const P=e=>{if(!g){if(S)return void S(e);switch(o){case"checkbox":M((e=>!e));break;case"radio":case"yes":case"no":I||M(!0)}}},H=()=>{g||A(!B)},N=()=>{g||!$||$()},W=()=>{var e;null===(e=null==R?void 0:R.current)||void 0===e||e.click()},Y=e=>{e.stopPropagation()},V=()=>{let t;switch(o){case"yes":t="tick";break;case"no":t="cross";break;case"checkbox":case"radio":t=o}return e(eC,{type:t,active:I,disabled:g,$selected:I,$disabled:g})},U=()=>{if(!f)return null;let t;return t="function"==typeof f?f():f,e(Y$,{"data-id":"toggle-sublabel",id:`${L}-sublabel`,"aria-hidden":!0,children:t})},K=n=>t(r,{children:[e(Q$,{weight:"semibold",$disabled:g,children:"Error"}),e(J$,{$disabled:g,children:null==n?void 0:n.map(((t,r)=>e("li",{id:`${L}-error-list-item-${r}`,children:e(Q$,{weight:"semibold",$disabled:g,children:t})},r)))})]});return t(R$,{$selected:I,$disabled:g,className:y,$styleType:d,$error:m,$indicator:i,$useContentWidth:D,id:b,"data-testid":C,children:[(()=>{const r=["string"==typeof f?`${L}-sublabel`:null,k].filter(Boolean).join(" ")||void 0;return t(V$,{id:`${L}-header-container`,$disabled:g,$error:m,$selected:I,$indicator:i,$styleType:d,children:[e(U$,{$addPadding:w,children:t(H$,{id:`${L}-input-container`,onClick:W,children:[e(P$,Object.assign({ref:R,name:p,id:`${L}-input`,type:"checkbox"===o?"checkbox":"radio","data-testid":"toggle-input",disabled:g,onChange:P,onClick:Y,checked:I,"aria-describedby":r},F)),i&&V(),t(N$,{$selected:I,$disabled:g,children:[e(W$,{htmlFor:`${L}-input`,"data-testid":"toggle-label",id:`${L}-label`,$maxLines:u,$selected:I,children:c}),f&&U()]})]})}),w&&e(K$,{type:"button",$disabled:g,onClick:N,id:`${L}-remove-button`,children:"Remove"})]})})(),O&&t("div",{children:[(!E||B)&&e(X$,{"data-id":"toggle-composite-children",$isFinalItem:!E,$disabled:g,children:O}),E&&!B&&z&&e(q$,{$disabled:g,onClick:H,id:`${L}-error-alert`,children:e(G$,{type:g?"description":"error",className:y,showIcon:!0,children:Array.isArray(_)?K(_):_})}),E&&t(Z$,{$paddingTopRequired:!B&&!z,disabled:g,onClick:H,"data-testid":B?"collapse-button":"expand-button",children:[B?"Show less":"Show more",e(B?we:ne,{"aria-hidden":!0})]})]})]})}))`
    min-width: 5rem;
    flex: 1;
`,fC=k(Sl.Small)`
    width: 7rem;

    ${na.MaxWidth.sm} {
        flex: 1;
    }

    ${na.MaxWidth.xxs} {
        width: 100%;
    }
`;var gC,mC,pC;!function(e){e.HOUR_UP="hour-up",e.HOUR_DOWN="hour-down",e.MINUTE_UP="minute-up",e.MINUTE_DOWN="minute-down"}(gC||(gC={})),function(e){e.HOUR="hour",e.MINUTE="minute"}(mC||(mC={})),function(e){e.AM="am",e.PM="pm"}(pC||(pC={}));const bC=({id:r,value:n,show:o,format:i,onChange:l,onCancel:d})=>{const c=v$.getTimeValues(i,n),[u,f]=s(c.hour),[m,p]=s(c.minute),[b,v]=s(c.period),y=a(null),x=a(null);h((()=>{if(o&&y.current&&y.current.focus({preventScroll:!0}),o){const{hour:e,minute:t,period:r}=v$.getTimeValues(i,n);f(e),p(t),v(r)}}),[o,n,i]),h((()=>{const e=y.current,t=x.current;return e&&e.addEventListener("keydown",w),t&&t.addEventListener("keydown",w),()=>{e&&e.removeEventListener("keydown",w),t&&t.removeEventListener("keydown",w)}}),[]);const w=e=>{["Digit0","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Tab","Backspace","Delete","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)||["Backspace","0","1","2","3","4","5","6","7","8","9"].includes(e.key)||e.preventDefault()},$=g((e=>{switch(e.currentTarget.name){case gC.MINUTE_UP:p(v$.updateMinutes(m,"add"));break;case gC.MINUTE_DOWN:p(v$.updateMinutes(m,"minus"));break;case gC.HOUR_UP:f(v$.updateHours(u,"add"));break;case gC.HOUR_DOWN:f(v$.updateHours(u,"minus"))}}),[u,m]),C=e=>{e.target.select()},S=e=>{const t=e.target.value;switch(e.target.name){case mC.HOUR:t.length<=2&&f(t);break;case mC.MINUTE:t.length<=2&&p(t)}},D=e=>{const t=parseInt(e.target.value);if(!isNaN(t))switch(e.target.name){case mC.HOUR:{const r=t>23||t<0?c.hour:v$.convertHourTo12HourFormat(e.target.value);f(r);break}case mC.MINUTE:{const r=t>59||t<0?c.minute:e.target.value;p(tt.padValue(r));break}}},k=e=>{switch(e.target.name){case pC.AM:v(b$.AM);break;case pC.PM:v(b$.PM)}},F=e=>r?`${r}-${e}`:e;return e(tC,{children:t(rC,{"data-testid":F("timepicker-dropdown"),inert:qs(!o),children:[t(nC,{children:[t(iC,{children:[t(sC,{children:[e(lC,{"aria-label":"increase hour",name:gC.HOUR_UP,tabIndex:-1,onClick:$,"data-testid":F("hour-increment-button"),children:e(we,{})}),e(cC,{children:e(uC,{"aria-label":"hour",type:"number",name:mC.HOUR,id:"hour",maxLength:2,pattern:"[0-9]{2}",ref:y,value:u,onFocus:C,onChange:S,onBlur:D,min:1,max:12,placeholder:"HH","data-testid":F("hour-input")})}),e(lC,{"aria-label":"decrease hour",name:gC.HOUR_DOWN,tabIndex:-1,onClick:$,"data-testid":F("hour-decrement-button"),children:e(ne,{})})]}),e(dC,{children:":"}),t(sC,{children:[e(lC,{"aria-label":"increase minute",name:gC.MINUTE_UP,tabIndex:-1,onClick:$,"data-testid":F("minute-increment-button"),children:e(we,{})}),e(cC,{children:e(uC,{"aria-label":"minute",type:"number",name:mC.MINUTE,id:"minute",maxLength:2,pattern:"[0-9]{2}",ref:x,value:m,onChange:S,onBlur:D,onFocus:C,min:0,max:59,placeholder:"MM","data-testid":F("minute-input")})}),e(lC,{"aria-label":"decrease minute",name:gC.MINUTE_DOWN,tabIndex:-1,onClick:$,"data-testid":F("minute-decrement-button"),children:e(ne,{})})]})]}),t(aC,{children:[e(hC,{checked:b===b$.AM,name:pC.AM,type:"radio",onChange:k,"data-testid":F("am-toggle"),"aria-label":"AM",children:"AM"}),e(hC,{checked:b===b$.PM,name:pC.PM,type:"radio",onChange:k,"data-testid":F("pm-toggle"),"aria-label":"PM",children:"PM"})]})]}),t(oC,{children:[e(fC,{"aria-label":"close selector",type:"button",styleType:"secondary",onClick:d,"data-testid":F("cancel-button"),children:"Cancel"}),e(fC,{"aria-label":"confirm selection",type:"button",onClick:()=>{let e;e="24hr"===i?v$.convertTo24HourFormat({hour:u,minute:m,period:b}):`${u}:${m}${b}`,l(e)},disabled:""===u||""===m,"data-testid":F("confirm-button"),children:"Done"})]})]})})},vC=r=>{var{id:n,disabled:o=!1,error:i,value:l,format:d="24hr",readOnly:c,onChange:u,onFocus:f,onBlur:g,alignment:m="left",dropdownZIndex:p,dropdownRootNode:b}=r,v=Fe(r,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur","alignment","dropdownZIndex","dropdownRootNode"]);const[y,x]=s(!1),[w,$]=s("none"),[C,S]=s(""),[D,k]=s(""),[F,E]=s(!1),_=!c&&!o,O=a(null);h((()=>{l&&(S(l.start),k(l.end))}),[l]);const T=e=>{_&&(F||y||null==f||f(),E(!0),$(e),x(!0))},I=e=>{var t,r;const n=!!(null==e?void 0:e.keepFocus),o=null!==(t=null==e?void 0:e.triggerBlur)&&void 0!==t?t:!n;x(!1),$("none"),E(n),o&&(null==g||g()),n&&(null===(r=O.current)||void 0===r||r.focus())},M=e=>{var t,r,n;if(!F||y)return;const o=e.relatedTarget,i=(null===(t=null==o?void 0:o.matches)||void 0===t?void 0:t.call(o,"[data-floating-ui-focusable]"))||(null===(r=null==o?void 0:o.matches)||void 0===r?void 0:r.call(o,"[data-floating-ui-focus-guard]"));!(!o||!(null===(n=O.current)||void 0===n?void 0:n.contains(o)))||i||(E(!1),null==g||g())},B=e=>{S(e),null==u||u({start:e,end:D}),$("end"),x(!0),E(!0)},A=e=>{k(e),null==u||u({start:C,end:e}),""===C?($("start"),x(!0),E(!0)):I({keepFocus:!0})};return e(g$,Object.assign({id:n},v,{children:e(Us,{enabled:_,isOpen:y,renderElement:()=>e(g$,Object.assign({ref:O,id:n,tabIndex:-1,onBlur:M,"data-testid":"timepicker-container"},v,{children:e(m$,{$disabled:o,$error:i,$readOnly:c,$focused:F,children:t(Vd,{error:i,currentActive:w,children:[e(p$,{onFocus:()=>T("start"),onClick:()=>T("start"),readOnly:!0,placeholder:"From",value:v$.formatDisplayValue(C,d),disabled:o,"data-testid":v["data-testid"]?`${v["data-testid"]}-timepicker-selector-from`:"timepicker-selector-from"}),e(p$,{onClick:()=>T("end"),readOnly:!0,placeholder:"To",value:v$.formatDisplayValue(D,d),disabled:o,"data-testid":v["data-testid"]?`${v["data-testid"]}-timepicker-selector-to`:"timepicker-selector-to"})]})})})),renderDropdown:({styles:r,setFloatingRef:o,getFloatingProps:i})=>y?t("div",Object.assign({ref:o,style:r},i(),{children:["start"===w&&e(bC,{id:n,show:!0,value:C,format:d,onCancel:()=>I({keepFocus:!0}),onChange:B}),"end"===w&&e(bC,{id:n,show:!0,value:D,format:d,onCancel:()=>I({keepFocus:!1}),onChange:A})]})):null,onClose:()=>I({keepFocus:!1}),onDismiss:()=>I({keepFocus:!0}),clickToToggle:!1,offset:8,alignment:m,customZIndex:p,rootNode:b})}))},yC=k(kd)`
    height: 3rem;
    gap: ${Ji["spacing-8"]};
    // space for clear icon
    padding-right: calc(1.25rem + ${Ji["spacing-20"]});
`,xC=r=>{var{id:n,disabled:o=!1,error:i,value:l,format:d="12hr",readOnly:c,onChange:u,onFocus:f,onBlur:m,alignment:p="left",dropdownZIndex:b,startLimit:y,endLimit:x,interval:w=15,dropdownRootNode:$}=r,C=Fe(r,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur","alignment","dropdownZIndex","startLimit","endLimit","interval","dropdownRootNode"]);const[S]=s((()=>et.generate())),[D,k]=s(null),[F,E]=s(!1),[_,O]=s(""),[T,I]=s(""),[M,B]=s(""),[A,z]=s(""),[j,L]=s(""),R=a(null),P=a(null),H=a(null),N=v((()=>v$.generateTimings(w,d,y,x)),[w,d,y,x]),W=v((()=>{if(""===A)return N;const e=v$.findClosestFlooredTime(A,N);return e?N.slice(N.indexOf(e)):[]}),[N,A]),Y=g((e=>v$.parseInput(e,d)),[d]);h((()=>{var e,t;if(l){const r=null!==(e=Y(l.start))&&void 0!==e?e:"",n=null!==(t=Y(l.end))&&void 0!==t?t:"";I(r),B(n),z(r),L(n)}}),[l,Y]),h((()=>{if(i)return void E(!1);const e=Y(T),t=Y(M);if(void 0===e)O("Invalid start time");else if(void 0===t)O("Invalid end time");else{if(!(""!==e&&""!==t&&v$.to24Hour(t)<v$.to24Hour(e)))return O(""),void(document.activeElement!==P.current&&document.activeElement!==H.current||E(!0));O("End time must be after start time")}E(!1)}),[T,M,Y,i]);const V=e=>{o||c||(D||F||null==f||f(),k(e),E(!0))},U=e=>{var t;o||c||(k(e),E(!0),null===(t=("start"===e?P:H).current)||void 0===t||t.select())};function K(e){var t;switch(e.code){case"Enter":"start"===D?Z(T):"end"===D&&(F&&q(M),null===(t=H.current)||void 0===t||t.blur());break;case"Tab":G(T,M,{})}}const Z=e=>{G(e,M,{goToNextInput:!0})},q=e=>{G(T,e,{triggerOnBlur:!0})},G=(e,t,{goToNextInput:r,triggerOnBlur:n})=>{var o,i,a;const s=null!==(o=Y(e))&&void 0!==o?o:A,l=null!==(i=Y(t))&&void 0!==i?i:j;I(s),B(l);s===A&&l===j||null==u||u({start:s,end:l}),r&&void 0!==Y(e)&&(k("end"),null===(a=H.current)||void 0===a||a.select()),n&&(k(null),E(!1),null==m||m()),z(s),L(l)},X=e=>{e.stopPropagation(),I(""),B(""),z(""),L("");null==u||u({start:"",end:""}),k(null),E(!1)},Q=e=>{var t,r;const n=e.relatedTarget,o=(null===(t=null==n?void 0:n.matches)||void 0===t?void 0:t.call(n,"[data-floating-ui-focusable]"))||(null===(r=null==n?void 0:n.matches)||void 0===r?void 0:r.call(n,"[data-floating-ui-focus-guard]")),i=R.current&&R.current.contains(n);D&&!F&&!i&&!o&&G(T,M,{triggerOnBlur:!0})},J=()=>{if(!c&&!o&&((null==T?void 0:T.length)>0||(null==M?void 0:M.length)>0))return e(qw,{onClick:X,type:"button","aria-label":"Clear",children:e(eu,{"aria-hidden":!0})})};return t(g$,Object.assign({id:n},C,{children:[e(Mv,{children:e(Us,{enabled:!c&&!o,isOpen:F,renderElement:()=>t(yC,{ref:R,$disabled:o,$error:i||!!_,$readOnly:c,onBlur:Q,children:[t(Vd,{error:i||!!_,currentActive:null===D?"none":D,children:[e(p$,{ref:P,onFocus:()=>V("start"),placeholder:"start"===D?"hh:mm":"From",onChange:e=>I(e.target.value),value:T,disabled:o,readOnly:c,"data-testid":C["data-testid"]?`${C["data-testid"]}-timepicker-selector`:"timepicker-selector",onClick:()=>U("start"),onKeyDown:K,autoComplete:"off","aria-label":"Start time input",type:"text",role:"combobox","aria-expanded":F,"aria-controls":S,"aria-autocomplete":"list"}),e(p$,{ref:H,onFocus:()=>V("end"),placeholder:"end"===D?"hh:mm":"To",onChange:e=>B(e.target.value),value:M,disabled:o,readOnly:c,"data-testid":C["data-testid"]?`${C["data-testid"]}-timepicker-selector`:"timepicker-selector",onClick:()=>U("end"),onKeyDown:K,autoComplete:"off","aria-label":"End time input",type:"text",role:"combobox","aria-expanded":F,"aria-controls":S,"aria-autocomplete":"list"})]}),J()]}),renderDropdown:()=>e(ny,"start"===D?{listItems:N,onSelectItem:Z,selectedItems:[T],topScrollItem:v$.findClosestFlooredTime(Y(T),N),listboxId:S,disableItemFocus:!0,matchElementWidth:!0}:{listItems:W,onSelectItem:q,selectedItems:[M],topScrollItem:v$.findClosestFlooredTime(Y(M),W),listboxId:S,disableItemFocus:!0,matchElementWidth:!0}),onClose:e=>{"outside-press"===e?(k(null),E(!1),null==m||m()):G(T,M,{triggerOnBlur:!0})},onDismiss:()=>{var e;null===(e=("start"===D?P:H).current)||void 0===e||e.focus(),E(!1)},offset:8,alignment:p,fitAvailableHeight:!0,customZIndex:b,rootNode:$})}),!i&&_&&t(bs,{children:[e(ps,{"aria-hidden":!0}),e(vs,{id:n?`${n}-error-message`:"error-message",tabIndex:0,"data-testid":n?`${n}-error-message`:"error-message",children:_})]})]}))},wC=t=>{var{variant:r="dial"}=t,n=Fe(t,["variant"]);return e("combobox"===r?xC:vC,Object.assign({},n))};k.div`
    position: relative;
`;const $C=k(Fd)`
    height: calc(3rem - 2px); // exclude top and bottom borders
`,CC=t=>{var{id:r,disabled:n=!1,readOnly:o=!1,error:i,value:l,placeholder:d,format:c="24hr",onChange:u,onFocus:h,onBlur:f,alignment:m,dropdownZIndex:p,dropdownRootNode:b}=t,v=Fe(t,["id","disabled","readOnly","error","value","placeholder","format","onChange","onFocus","onBlur","alignment","dropdownZIndex","dropdownRootNode"]);const[y,x]=s(!1),w=a(null),$=a(null),C=g((()=>"12hr"===c?"HH:MMam":"HH:MM"),[c]),S=()=>{var e;null===(e=$.current)||void 0===e||e.focus({preventScroll:!0})},D=()=>{n||o||x(!0)},k=()=>{x(!1),S()},F=e=>{null==u||u(e),x(!1),S()},E=()=>{null==h||h()},_=e=>{var t;if(y)return;const r=e.relatedTarget;r&&(null===(t=w.current)||void 0===t?void 0:t.contains(r))||null==f||f()},O=e=>{n||o||"Enter"!==e.key&&" "!==e.key&&"ArrowDown"!==e.key||(e.preventDefault(),D())};return e(Us,{enabled:!o&&!n,isOpen:y,renderElement:()=>e(kd,Object.assign({ref:w,id:r,$readOnly:o,$disabled:n,$focused:y,$error:i},v,{children:e($C,{ref:$,readOnly:!0,placeholder:d||C(),value:v$.formatDisplayValue(l,c),disabled:n,"data-testid":r?`${r}-timepicker-selector`:"timepicker-selector",onFocus:E,onClick:D,onKeyDown:O,onBlur:_})})),renderDropdown:({styles:t,setFloatingRef:n,getFloatingProps:o})=>e("div",Object.assign({ref:n,style:t},o(),{children:e(bC,{id:r,show:y,value:l,format:c,onCancel:k,onChange:F})})),onOpen:D,onClose:()=>{x(!1),null==f||f()},onDismiss:k,offset:8,alignment:m,fitAvailableHeight:!0,customZIndex:p,rootNode:b})},SC=k(Ox)`
    margin-right: 0.5rem;
`,DC=k(nu)`
    width: 2.5rem;

    input {
        text-align: center;
    }
`,kC=k(DC)`
    // Cheat to balance the placeholder look while ensuring enough width
    margin-left: 0.5rem;
    width: 6rem;

    input {
        text-align: left;
    }
`,FC=k(Ca.BodyBL)`
    margin: 0 0.25rem;
    ${e=>{if(e.$inactive)return F`
                color: ${qi["text-disabled"]};
            `}}
`,EC=k.div`
    display: flex;
    align-items: center;
    height: calc(3rem - 2px); // exclude top and bottom borders
`,_C=k(Ca.BodyBL)``,OC=n=>{var{disabled:o,error:i,value:l,onChange:d,onBlur:c,onChangeRaw:u,onBlurRaw:f,readOnly:g,placeholder:m="00-8888",autoComplete:p,"aria-labelledby":b,"aria-describedby":y,"aria-invalid":x}=n,w=Fe(n,["disabled","error","value","onChange","onBlur","onChangeRaw","onBlurRaw","readOnly","placeholder","autoComplete","aria-labelledby","aria-describedby","aria-invalid"]);const[$,C]=s(""),[S,D]=s(""),[k,F]=s("none"),[E]=s((()=>et.generate())),_=`${E}-floor-label`,O=`${E}-unit-label`,T=`${E}-live-message`,I=a(null),M=a(null),B=a(null),A=a($),z=a(S),j=a(k),L=e=>e.toLocaleUpperCase().replace(/[^0-9A-Za-z]/g,""),R=er({ref:M,formatter:L}),P=er({ref:B,formatter:L}),H=v((()=>{let e="";const t=te("Hash",$),r=te("Dash",S);switch(k){case"floor":e=t;break;case"unit":e=$?[t,r].join(" "):r;break;default:e=""}return e}),[k,$,S]),N=e=>{A.current=e,C(e)},W=e=>{z.current=e,D(e)},Y=e=>{j.current=e,F(e)};h((()=>{"floor"===k&&3===$.length&&B.current&&B.current.focus()}),[$]),h((()=>{G(l)}),[l]);const V=e=>{Y(e.target.name),e.target.select()},U=e=>{const t=e.target.name,r=e.target.value,n=q(r);"floor"===t?(N(n),n!==$&&X(n,t)):"unit"===t&&(W(n),n!==S&&X(n,t))},K=e=>{const t=e.target.name;if("floor"===t){const e=R();if(!e)return;const{nextValue:r,updateCaretPosition:n}=e;n(),N(r),X(r,t)}else if("unit"===t){const e=P();if(!e)return;const{nextValue:r,updateCaretPosition:n}=e;n(),W(r),X(r,t)}},Z=e=>{var t;"Backspace"!==e.code&&"Backspace"!==e.key||"unit"===k&&0===S.length&&(null===(t=M.current)||void 0===t||t.focus())},q=e=>/^[0-9]$/.test(e)?tt.padValue(e,!0):e.toLocaleUpperCase(),G=e=>{if(e!==TC)if(void 0===e||0===e.length)N(""),W("");else{const t=e.split("-");if(2===t.length){const e=t[0],r=t[1];N("floor"===k?e:q(e)),W("unit"===k?r:q(r))}}},X=(e,t)=>{if(!d&&!u)return;const r={floor:A.current,unit:z.current};if(r[t]=e,d){const e=J(r);d(e)}u&&u([r.floor,r.unit])},Q=()=>{if(!c&&!f)return;const e={floor:q(A.current),unit:q(z.current)};if(c){const t=J(e);c(t)}f&&f([e.floor,e.unit])},J=e=>{const t=[e.floor,e.unit];return e.floor.length>0&&e.unit.length>0?t.join("-"):t.every((e=>""===e))?"":TC},ee=e=>e.split("-");function te(e,t){return t?`${e} ${Array.from(t).join(" ")}`:""}return t(kd,Object.assign({},w,{ref:I,onClick:()=>{"none"===k&&M.current&&M.current.focus()},$disabled:o,$error:i,$readOnly:g,tabIndex:-1,onBlur:e=>{I.current&&I.current.contains(e.relatedTarget)||"none"!==j.current&&(Y("none"),Q())},children:[e(SC,{"data-testid":"addon",$disabled:o,$readOnly:g,children:"#"}),g&&l?(r=>{const n=r.split("-"),o=[te("Hash",n[0]),te("Dash",n[1])].join(" ");return t(EC,{"data-testid":"readonly-display",tabIndex:0,role:"textbox","aria-readonly":!0,"aria-labelledby":b,"aria-describedby":y,"aria-invalid":x,children:[e(_C,{children:n[0]}),e(FC,{children:"-"}),e(_C,{children:n[1]}),e(Zs,{children:o})]})})(l):t(r,{children:[e(DC,{name:"floor",maxLength:3,value:$,ref:M,onFocus:V,onBlur:U,onChange:K,disabled:o,readOnly:g,type:"text",pattern:"[0-9A-Z]{2,3}","data-testid":"floor-input","aria-labelledby":Gs(b,_),"aria-describedby":Gs(y,T),"aria-invalid":x,placeholder:"floor"!==k||g||o?ee(m)[0]:"",autoComplete:p,styleType:"no-border"}),e(Zs,{"aria-hidden":!0,id:_,children:"Enter floor number"}),e(FC,{$inactive:0===$.length,children:"-"}),e(kC,{name:"unit",maxLength:5,value:S,ref:B,onFocus:V,onBlur:U,onChange:K,onKeyDown:Z,disabled:o,readOnly:g,type:"text",pattern:"[0-9A-Z]{2,5}","data-testid":"unit-input","aria-labelledby":Gs(b,O),"aria-describedby":Gs(y,T),"aria-invalid":x,placeholder:"unit"!==k||g||o?ee(m)[1]:"",autoComplete:p,styleType:"no-border"}),e(Zs,{"aria-hidden":!0,id:O,children:"Enter unit number"}),e(Zs,{id:T,"aria-live":"polite",children:H})]})]}))},TC="Invalid unit number",IC={DateInput:t=>{var{label:r,errorMessage:n,id:o,"data-error-testid":i,"data-testid":a,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:h,xsCols:f,smCols:g,mdCols:m,lgCols:p,xlCols:b,xxlCols:v}=t,y=Fe(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);const[x]=s((()=>`form-date-input-${et.generate()}`)),w=null!=o?o:x;return e(Bs,{id:w,label:r,errorMessage:n,"data-error-testid":i,disabled:y.disabled,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:h,xsCols:f,smCols:g,mdCols:m,lgCols:p,xlCols:b,xxlCols:v,children:e(Rd,Object.assign({id:`${w}-base`,"data-testid":a||o,"aria-labelledby":`${w}-label`,error:!!n},y))})},DateRangeInput:t=>{var{label:r,errorMessage:n,id:o,"data-error-testid":i,"data-testid":a,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:h,xsCols:f,smCols:g,mdCols:m,lgCols:p,xlCols:b,xxlCols:v}=t,y=Fe(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);const[x]=s((()=>`form-date-range-input-${et.generate()}`)),w=null!=o?o:x;return e(Bs,{id:w,label:r,errorMessage:n,"data-error-testid":i,disabled:y.disabled,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:h,xsCols:f,smCols:g,mdCols:m,lgCols:p,xlCols:b,xxlCols:v,children:e(Gd,Object.assign({id:`${o}-base`,"data-testid":a?`${a}-base`:void 0,"aria-labelledby":`${w}-label`,error:!!n},y))})},ESignature:t=>{const{label:r,errorMessage:n,id:o="form-field","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:h,smCols:f,mdCols:g,lgCols:m,xlCols:p,xxlCols:b}=t,v=Fe(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Bs,{id:o,label:r,errorMessage:n,"data-error-testid":i,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:h,smCols:f,mdCols:g,lgCols:m,xlCols:p,xxlCols:b,children:e(Fc,Object.assign({id:`${o}-base`,"data-testid":a||o},v))})},HistogramSlider:t=>{var{label:r,errorMessage:n,id:o="form-histogram-slider","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:h,smCols:f,mdCols:g,lgCols:m,xlCols:p,xxlCols:b}=t,v=Fe(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Bs,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:h,smCols:f,mdCols:g,lgCols:m,xlCols:p,xxlCols:b,children:e(Xc,Object.assign({id:`${o}-base`,"data-testid":a||o},v))})},Input:ou,InputGroup:Ix,MaskedInput:Xx,Label:xs,MultiSelect:t=>{var{label:r,errorMessage:n,id:o,"data-error-testid":i,"data-testid":a,enableSearch:l=!1,layoutType:d,mobileCols:c,tabletCols:u,desktopCols:h,xxsCols:f,xsCols:g,smCols:m,mdCols:p,lgCols:b,xlCols:v,xxlCols:y,variant:x}=t,w=Fe(t,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","variant"]);const[$]=s((()=>`form-field-${et.generate()}`)),C=null!=o?o:$;return e(Bs,{id:C,"data-testid":a,label:r,errorMessage:n,"data-error-testid":i,disabled:w.disabled,layoutType:d,mobileCols:c,tabletCols:u,desktopCols:h,xxsCols:f,xsCols:g,smCols:m,mdCols:p,lgCols:b,xlCols:v,xxlCols:y,children:e(Qx,Object.assign({id:`${C}-base`,"data-testid":a?`${a}-base`:void 0,error:!!n,enableSearch:l,variant:x},w))})},NestedSelect:t=>{var{label:r,errorMessage:n,id:o,"data-error-testid":i,"data-testid":a,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:h,xsCols:f,smCols:g,mdCols:m,lgCols:p,xlCols:b,xxlCols:v}=t,y=Fe(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);const[x]=s((()=>`form-field-${et.generate()}`)),w=null!=o?o:x;return e(Bs,{id:w,"data-testid":a,label:r,errorMessage:n,"data-error-testid":i,disabled:y.disabled,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:h,xsCols:f,smCols:g,mdCols:m,lgCols:p,xlCols:b,xxlCols:v,children:e(rw,Object.assign({id:`${w}-base`,"data-testid":a?`${a}-base`:void 0,error:!!n},y))})},NestedMultiSelect:t=>{var{label:r,errorMessage:n,id:o,"data-error-testid":i,"data-testid":a,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:h,xsCols:f,smCols:g,mdCols:m,lgCols:p,xlCols:b,xxlCols:v}=t,y=Fe(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);const[x]=s((()=>`form-field-${et.generate()}`)),w=null!=o?o:x;return e(Bs,{id:w,"data-testid":a,label:r,errorMessage:n,"data-error-testid":i,disabled:y.disabled,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:h,xsCols:f,smCols:g,mdCols:m,lgCols:p,xlCols:b,xxlCols:v,children:e(tw,Object.assign({id:`${w}-base`,"data-testid":a?`${a}-base`:void 0,error:!!n},y))})},Select:t=>{var{label:r,errorMessage:n,id:o,"data-error-testid":i,"data-testid":a,enableSearch:l=!1,layoutType:d,mobileCols:c,tabletCols:u,desktopCols:h,xxsCols:f,xsCols:g,smCols:m,mdCols:p,lgCols:b,xlCols:v,xxlCols:y,variant:x}=t,w=Fe(t,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","variant"]);const[$]=s((()=>`form-field-${et.generate()}`)),C=null!=o?o:$;return e(Bs,{id:C,"data-testid":a,label:r,errorMessage:n,"data-error-testid":i,disabled:w.disabled,layoutType:d,mobileCols:c,tabletCols:u,desktopCols:h,xxsCols:f,xsCols:g,smCols:m,mdCols:p,lgCols:b,xlCols:v,xxlCols:y,children:e(Qw,Object.assign({id:`${C}-base`,"data-testid":a?`${a}-base`:void 0,error:!!n,enableSearch:l,variant:x},w))})},SelectHistogram:t=>{var{label:r,errorMessage:n,id:o,"data-error-testid":i,"data-testid":a,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:h,xsCols:f,smCols:g,mdCols:m,lgCols:p,xlCols:b,xxlCols:v,histogramSlider:y}=t,x=Fe(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","histogramSlider"]);const[w]=s((()=>`form-field-${et.generate()}`)),$=null!=o?o:w;return e(Bs,{id:$,"data-testid":a,label:r,errorMessage:n,"data-error-testid":i,disabled:x.disabled,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:h,xsCols:f,smCols:g,mdCols:m,lgCols:p,xlCols:b,xxlCols:v,children:e(n$,Object.assign({histogramSlider:y,error:!!n,"data-testid":a?`${a}-base`:void 0,id:`${$}-base`},x))})},Slider:t=>{var{label:r,errorMessage:n,id:o="form-slider","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:h,smCols:f,mdCols:g,lgCols:m,xlCols:p,xxlCols:b}=t,v=Fe(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Bs,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:h,smCols:f,mdCols:g,lgCols:m,xlCols:p,xxlCols:b,children:e(o$,Object.assign({id:`${o}-base`,"data-testid":a||o},v))})},RangeSlider:t=>{var{label:r,errorMessage:n,id:o="form-range-slider","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:h,smCols:f,mdCols:g,lgCols:m,xlCols:p,xxlCols:b}=t,v=Fe(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Bs,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:h,smCols:f,mdCols:g,lgCols:m,xlCols:p,xxlCols:b,children:e(Vc,Object.assign({id:`${o}-base`,"data-testid":a||o},v))})},RangeSelect:t=>{var{label:r,errorMessage:n,id:o="form-select","data-error-testid":i,"data-testid":a,enableSearch:s=!1,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:h,xsCols:f,smCols:g,mdCols:m,lgCols:p,xlCols:b,xxlCols:v}=t,y=Fe(t,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Bs,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:y.disabled,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:h,xsCols:f,smCols:g,mdCols:m,lgCols:p,xlCols:b,xxlCols:v,children:e(Xw,Object.assign({id:`${o}-base`,"data-testid":a||o,error:!!n,enableSearch:s},y))})},Textarea:f$,Timepicker:t=>{var{label:r,errorMessage:n,id:o="form-timepicker","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:h,smCols:f,mdCols:g,lgCols:m,xlCols:p,xxlCols:b}=t,v=Fe(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Bs,{id:o,label:r,errorMessage:n,disabled:v.disabled,"data-error-testid":i,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:h,smCols:f,mdCols:g,lgCols:m,xlCols:p,xxlCols:b,children:e(CC,Object.assign({id:`${o}-base`,"data-testid":a||o,error:!!n},v))})},TimeRangePicker:t=>{var{label:r,errorMessage:n,id:o="form-timepicker","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:h,smCols:f,mdCols:g,lgCols:m,xlCols:p,xxlCols:b}=t,v=Fe(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Bs,{id:o,label:r,errorMessage:n,disabled:v.disabled,"data-error-testid":i,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:h,smCols:f,mdCols:g,lgCols:m,xlCols:p,xxlCols:b,children:e(wC,Object.assign({id:`${o}-base`,"data-testid":a||o,error:!!n},v))})},CustomField:t=>{var{id:r="form-custom-field","data-error-testid":n,children:o}=t,i=Fe(t,["id","data-error-testid","children"]);return e(Bs,Object.assign({id:r,"data-error-testid":n},i,{children:o}))},UnitNumberInput:t=>{var{label:r,errorMessage:n,id:o,"data-error-testid":i,"data-testid":a,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:h,xsCols:f,smCols:g,mdCols:m,lgCols:p,xlCols:b,xxlCols:v}=t,y=Fe(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);const[x]=s((()=>`form-unit-number-input-${et.generate()}`)),w=null!=o?o:x;return e(Bs,{id:w,"data-testid":a,label:r,errorMessage:n,"data-error-testid":i,disabled:y.disabled,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:h,xsCols:f,smCols:g,mdCols:m,lgCols:p,xlCols:b,xxlCols:v,children:e(OC,Object.assign({id:`${w}-base`,"data-testid":a?`${a}-base`:void 0,"aria-labelledby":`${w}-label`,error:!!n},y))})},PhoneNumberInput:t=>{var{label:r,errorMessage:n,id:o,"data-error-testid":i,"data-testid":a,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:h,xsCols:f,smCols:g,mdCols:m,lgCols:p,xlCols:b,xxlCols:v}=t,y=Fe(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);const[x]=s((()=>`form-phone-number-input-${et.generate()}`)),w=null!=o?o:x;return e(Bs,{id:w,"data-testid":a,label:r,errorMessage:n,"data-error-testid":i,disabled:y.disabled,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:h,xsCols:f,smCols:g,mdCols:m,lgCols:p,xlCols:b,xxlCols:v,children:e(vw,Object.assign({id:`${w}-base`,"data-testid":a?`${a}-base`:void 0,"aria-labelledby":`${w}-label`,error:!!n},y))})},PredictiveTextInput:t=>{var{label:r,errorMessage:n,id:o,"data-error-testid":i,"data-testid":a,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:h,xsCols:f,smCols:g,mdCols:m,lgCols:p,xlCols:b,xxlCols:v}=t,y=Fe(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);const[x]=s((()=>`form-field-${et.generate()}`)),w=null!=o?o:x;return e(Bs,{id:w,"data-testid":a,label:r,errorMessage:n,"data-error-testid":i,disabled:y.disabled,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:h,xsCols:f,smCols:g,mdCols:m,lgCols:p,xlCols:b,xxlCols:v,children:e(Zw,Object.assign({id:`${w}-base`,"data-testid":a?`${a}-base`:void 0,"aria-labelledby":`${w}-label`,error:!!n},y))})},OtpVerification:t=>{var{label:r,id:n,"data-error-testid":o,"data-testid":i,layoutType:a,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:h,smCols:f,mdCols:g,lgCols:m,xlCols:p,xxlCols:b}=t,v=Fe(t,["label","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);const[y]=s((()=>`form-otp-verification-${et.generate()}`)),x=null!=n?n:y;return e(Bs,{id:x,"data-testid":i,label:r,"data-error-testid":o,layoutType:a,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:h,smCols:f,mdCols:g,lgCols:m,xlCols:p,xxlCols:b,children:e(Pw,Object.assign({id:`${x}-base-field`,inputId:`${x}-base`,"data-testid":i?`${i}-base`:void 0},v))})}};export{qi as C,IC as F,Sc as S,Ee as _,Dc as a};
//# sourceMappingURL=index.e7be65fa.js.map
