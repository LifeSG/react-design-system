import{jsx as e,jsxs as t,Fragment as r}from"react/jsx-runtime";import*as n from"react";import o,{version as i,useRef as a,useState as s,isValidElement as l,createRef as d,cloneElement as c,PureComponent as u,useEffect as h,useLayoutEffect as f,useCallback as p,createContext as g,useContext as m,Children as b,useMemo as v,useImperativeHandle as y,useReducer as x,lazy as w,Suspense as $,createElement as C,forwardRef as S}from"react";import{ICircleFillIcon as D}from"@lifesg/react-icons/i-circle-fill";import k,{css as F,isStyledComponent as _,ThemeContext as E,keyframes as O,useTheme as T}from"styled-components";import{ExternalIcon as I}from"@lifesg/react-icons/external";import{CrossIcon as M}from"@lifesg/react-icons/cross";import{useFloatingTree as A,FloatingTree as B,useFloatingNodeId as z,FloatingNode as j,useFloating as R,useTransitionStatus as L,useDismiss as P,useInteractions as N,FloatingFocusManager as H,autoUpdate as W,offset as Y,flip as V,shift as U,limitShift as K,size as q,useClick as Z,useHover as G,useFocus as Q,FloatingPortal as X,useTransitionStyles as J}from"@floating-ui/react";import ee,{findDOMNode as te,unstable_batchedUpdates as re}from"react-dom";import{ExclamationCircleFillIcon as ne}from"@lifesg/react-icons/exclamation-circle-fill";import{ChevronDownIcon as oe}from"@lifesg/react-icons/chevron-down";import{ChevronLeftIcon as ie}from"@lifesg/react-icons/chevron-left";import{ChevronRightIcon as ae}from"@lifesg/react-icons/chevron-right";import{ArrowRightIcon as se,PencilIcon as le,EraserIcon as de,TickCircleFillIcon as ce,ChevronDownIcon as ue}from"@lifesg/react-icons";import{SquareIcon as he}from"@lifesg/react-icons/square";import{SquareFillIcon as fe}from"@lifesg/react-icons/square-fill";import{SquareTickFillIcon as pe}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as ge}from"@lifesg/react-icons/tick";import{MagnifierIcon as me}from"@lifesg/react-icons/magnifier";import{CaretRightIcon as be}from"@lifesg/react-icons/caret-right";import{MinusSquareFillIcon as ve}from"@lifesg/react-icons/minus-square-fill";import{EyeIcon as ye}from"@lifesg/react-icons/eye";import{EyeSlashIcon as xe}from"@lifesg/react-icons/eye-slash";import{ExclamationTriangleIcon as we}from"@lifesg/react-icons/exclamation-triangle";import{ChevronUpIcon as $e}from"@lifesg/react-icons/chevron-up";import{ArrowRightIcon as Ce}from"@lifesg/react-icons/arrow-right";import{ExclamationTriangleFillIcon as Se}from"@lifesg/react-icons/exclamation-triangle-fill";import{TickCircleFillIcon as De}from"@lifesg/react-icons/tick-circle-fill";import{CircleIcon as ke}from"@lifesg/react-icons/circle";import{CircleDotIcon as Fe}from"@lifesg/react-icons/circle-dot";function _e(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}function Ee(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{l(n.next(e))}catch(e){i(e)}}function s(e){try{l(n.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}l((n=n.apply(e,t||[])).next())}))}"function"==typeof SuppressedError&&SuppressedError;var Oe="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function Te(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ie={exports:{}};Ie.exports=function(){var e=1e3,t=6e4,r=36e5,n="millisecond",o="second",i="minute",a="hour",s="day",l="week",d="month",c="quarter",u="year",h="date",f="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}},b=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},v={s:b,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),o=r%60;return(t<=0?"+":"-")+b(n,2,"0")+":"+b(o,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),o=t.clone().add(n,d),i=r-o<0,a=t.clone().add(n+(i?-1:1),d);return+(-(n+(r-o)/(i?o-a:a-o))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:s,D:h,h:a,m:i,s:o,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},y="en",x={};x[y]=m;var w="$isDayjsObject",$=function(e){return e instanceof k||!(!e||!e[w])},C=function e(t,r,n){var o;if(!t)return y;if("string"==typeof t){var i=t.toLowerCase();x[i]&&(o=i),r&&(x[i]=r,o=i);var a=t.split("-");if(!o&&a.length>1)return e(a[0])}else{var s=t.name;x[s]=t,o=s}return!n&&o&&(y=o),o||!n&&y},S=function(e,t){if($(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new k(r)},D=v;D.l=C,D.i=$,D.w=function(e,t){return S(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var k=function(){function m(e){this.$L=C(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var b=m.prototype;return b.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(D.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(p);if(n){var o=n[2]-1||0,i=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(t)}(e),this.init()},b.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},b.$utils=function(){return D},b.isValid=function(){return!(this.$d.toString()===f)},b.isSame=function(e,t){var r=S(e);return this.startOf(t)<=r&&r<=this.endOf(t)},b.isAfter=function(e,t){return S(e)<this.startOf(t)},b.isBefore=function(e,t){return this.endOf(t)<S(e)},b.$g=function(e,t,r){return D.u(e)?this[t]:this.set(r,e)},b.unix=function(){return Math.floor(this.valueOf()/1e3)},b.valueOf=function(){return this.$d.getTime()},b.startOf=function(e,t){var r=this,n=!!D.u(t)||t,c=D.p(e),f=function(e,t){var o=D.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?o:o.endOf(s)},p=function(e,t){return D.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},g=this.$W,m=this.$M,b=this.$D,v="set"+(this.$u?"UTC":"");switch(c){case u:return n?f(1,0):f(31,11);case d:return n?f(1,m):f(0,m+1);case l:var y=this.$locale().weekStart||0,x=(g<y?g+7:g)-y;return f(n?b-x:b+(6-x),m);case s:case h:return p(v+"Hours",0);case a:return p(v+"Minutes",1);case i:return p(v+"Seconds",2);case o:return p(v+"Milliseconds",3);default:return this.clone()}},b.endOf=function(e){return this.startOf(e,!1)},b.$set=function(e,t){var r,l=D.p(e),c="set"+(this.$u?"UTC":""),f=(r={},r[s]=c+"Date",r[h]=c+"Date",r[d]=c+"Month",r[u]=c+"FullYear",r[a]=c+"Hours",r[i]=c+"Minutes",r[o]=c+"Seconds",r[n]=c+"Milliseconds",r)[l],p=l===s?this.$D+(t-this.$W):t;if(l===d||l===u){var g=this.clone().set(h,1);g.$d[f](p),g.init(),this.$d=g.set(h,Math.min(this.$D,g.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},b.set=function(e,t){return this.clone().$set(e,t)},b.get=function(e){return this[D.p(e)]()},b.add=function(n,c){var h,f=this;n=Number(n);var p=D.p(c),g=function(e){var t=S(f);return D.w(t.date(t.date()+Math.round(e*n)),f)};if(p===d)return this.set(d,this.$M+n);if(p===u)return this.set(u,this.$y+n);if(p===s)return g(1);if(p===l)return g(7);var m=(h={},h[i]=t,h[a]=r,h[o]=e,h)[p]||1,b=this.$d.getTime()+n*m;return D.w(b,this)},b.subtract=function(e,t){return this.add(-1*e,t)},b.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||f;var n=e||"YYYY-MM-DDTHH:mm:ssZ",o=D.z(this),i=this.$H,a=this.$m,s=this.$M,l=r.weekdays,d=r.months,c=r.meridiem,u=function(e,r,o,i){return e&&(e[r]||e(t,n))||o[r].slice(0,i)},h=function(e){return D.s(i%12||12,e,"0")},p=c||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(g,(function(e,n){return n||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return D.s(t.$y,4,"0");case"M":return s+1;case"MM":return D.s(s+1,2,"0");case"MMM":return u(r.monthsShort,s,d,3);case"MMMM":return u(d,s);case"D":return t.$D;case"DD":return D.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return u(r.weekdaysMin,t.$W,l,2);case"ddd":return u(r.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(i);case"HH":return D.s(i,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return p(i,a,!0);case"A":return p(i,a,!1);case"m":return String(a);case"mm":return D.s(a,2,"0");case"s":return String(t.$s);case"ss":return D.s(t.$s,2,"0");case"SSS":return D.s(t.$ms,3,"0");case"Z":return o}return null}(e)||o.replace(":","")}))},b.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},b.diff=function(n,h,f){var p,g=this,m=D.p(h),b=S(n),v=(b.utcOffset()-this.utcOffset())*t,y=this-b,x=function(){return D.m(g,b)};switch(m){case u:p=x()/12;break;case d:p=x();break;case c:p=x()/3;break;case l:p=(y-v)/6048e5;break;case s:p=(y-v)/864e5;break;case a:p=y/r;break;case i:p=y/t;break;case o:p=y/e;break;default:p=y}return f?p:D.a(p)},b.daysInMonth=function(){return this.endOf(d).$D},b.$locale=function(){return x[this.$L]},b.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=C(e,t,!0);return n&&(r.$L=n),r},b.clone=function(){return D.w(this.$d,this)},b.toDate=function(){return new Date(this.valueOf())},b.toJSON=function(){return this.isValid()?this.toISOString():null},b.toISOString=function(){return this.$d.toISOString()},b.toString=function(){return this.$d.toUTCString()},m}(),F=k.prototype;return S.prototype=F,[["$ms",n],["$s",o],["$m",i],["$H",a],["$W",s],["$M",d],["$y",u],["$D",h]].forEach((function(e){F[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),S.extend=function(e,t){return e.$i||(e(t,k,S),e.$i=!0),S},S.locale=C,S.isDayjs=$,S.unix=function(e){return S(1e3*e)},S.en=x[y],S.Ls=x,S.p={},S}();var Me=Te(Ie.exports),Ae={exports:{}};Ae.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,n=/\d\d?/,o=/\d*[^-_:/,()\s\d]+/,i={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),r=60*t[1]+(+t[2]||0);return 0===r?0:"+"===t[0]?-r:r}(e)}],d=function(e){var t=i[e];return t&&(t.indexOf?t:t.s.concat(t.f))},c=function(e,t){var r,n=i.meridiem;if(n){for(var o=1;o<=24;o+=1)if(e.indexOf(n(o,0,t))>-1){r=o>12;break}}else r=e===(t?"pm":"PM");return r},u={A:[o,function(e){this.afternoon=c(e,!1)}],a:[o,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[r,s("day")],Do:[o,function(e){var t=i.ordinal,r=e.match(/\d+/);if(this.day=r[0],t)for(var n=1;n<=31;n+=1)t(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[r,s("month")],MMM:[o,function(e){var t=d("months"),r=(d("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],MMMM:[o,function(e){var t=d("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[r,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(r){var n,o;n=r,o=i&&i.formats;for(var a=(r=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,r,n){var i=n&&n.toUpperCase();return r||o[n]||e[n]||o[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,r){return t||r.slice(1)}))}))).match(t),s=a.length,l=0;l<s;l+=1){var d=a[l],c=u[d],h=c&&c[0],f=c&&c[1];a[l]=f?{regex:h,parser:f}:d.replace(/^\[|\]$/g,"")}return function(e){for(var t={},r=0,n=0;r<s;r+=1){var o=a[r];if("string"==typeof o)n+=o.length;else{var i=o.regex,l=o.parser,d=e.slice(n),c=i.exec(d)[0];l.call(t,c),e=e.replace(c,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var r=e.hours;t?r<12&&(e.hours+=12):12===r&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,r){r.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var n=t.prototype,o=n.parse;n.parse=function(e){var t=e.date,n=e.utc,a=e.args;this.$u=n;var s=a[1];if("string"==typeof s){var l=!0===a[2],d=!0===a[3],c=l||d,u=a[2];d&&(u=a[2]),i=this.$locale(),!l&&u&&(i=r.Ls[u]),this.$d=function(e,t,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var n=h(t)(e),o=n.year,i=n.month,a=n.day,s=n.hours,l=n.minutes,d=n.seconds,c=n.milliseconds,u=n.zone,f=new Date,p=a||(o||i?1:f.getDate()),g=o||f.getFullYear(),m=0;o&&!i||(m=i>0?i-1:f.getMonth());var b=s||0,v=l||0,y=d||0,x=c||0;return u?new Date(Date.UTC(g,m,p,b,v,y,x+60*u.offset*1e3)):r?new Date(Date.UTC(g,m,p,b,v,y,x)):new Date(g,m,p,b,v,y,x)}catch(e){return new Date("")}}(t,s,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&t!=this.format(s)&&(this.$d=new Date("")),i={}}else if(s instanceof Array)for(var f=s.length,p=1;p<=f;p+=1){a[1]=s[p-1];var g=r.apply(this,a);if(g.isValid()){this.$d=g.$d,this.$L=g.$L,this.init();break}p===f&&(this.$d=new Date(""))}else o.call(this,e)}}}();var Be=Te(Ae.exports),ze={exports:{}};ze.exports=function(e,t,r){t.prototype.isBetween=function(e,t,n,o){var i=r(e),a=r(t),s="("===(o=o||"()")[0],l=")"===o[1];return(s?this.isAfter(i,n):!this.isBefore(i,n))&&(l?this.isBefore(a,n):!this.isAfter(a,n))||(s?this.isBefore(i,n):!this.isAfter(i,n))&&(l?this.isAfter(a,n):!this.isBefore(a,n))}};var je=Te(ze.exports),Re={exports:{}};Re.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var Le=Te(Re.exports),Pe={exports:{}};Pe.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var Ne,He,We=Te(Pe.exports),Ye={exports:{}};Ye.exports=(Ne={year:0,month:1,day:2,hour:3,minute:4,second:5},He={},function(e,t,r){var n,o=function(e,t,r){void 0===r&&(r={});var n=new Date(e),o=function(e,t){void 0===t&&(t={});var r=t.timeZoneName||"short",n=e+"|"+r,o=He[n];return o||(o=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:r}),He[n]=o),o}(t,r);return o.formatToParts(n)},i=function(e,t){for(var n=o(e,t),i=[],a=0;a<n.length;a+=1){var s=n[a],l=s.type,d=s.value,c=Ne[l];c>=0&&(i[c]=parseInt(d,10))}var u=i[3],h=24===u?0:u,f=i[0]+"-"+i[1]+"-"+i[2]+" "+h+":"+i[4]+":"+i[5]+":000",p=+e;return(r.utc(f).valueOf()-(p-=p%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=n);var o=this.utcOffset(),i=this.toDate(),a=i.toLocaleString("en-US",{timeZone:e}),s=Math.round((i-new Date(a))/1e3/60),l=r(a,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-s,!0);if(t){var d=l.utcOffset();l=l.add(o-d,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var t=this.$x.$timezone||r.tz.guess(),n=o(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var n=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,e,t).tz(this.$x.$timezone,!0)},r.tz=function(e,t,o){var a=o&&t,s=o||t||n,l=i(+r(),s);if("string"!=typeof e)return r(e).tz(s);var d=function(e,t,r){var n=e-60*t*1e3,o=i(n,r);if(t===o)return[n,t];var a=i(n-=60*(o-t)*1e3,r);return o===a?[n,o]:[e-60*Math.min(o,a)*1e3,Math.max(o,a)]}(r.utc(e,a).valueOf(),l,s),c=d[0],u=d[1],h=r(c).utcOffset(u);return h.$x.$timezone=s,h},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function(e){n=e}});var Ve,Ue=Te(Ye.exports);Me.extend(je),Me.extend(We),Me.extend(Le),Me.extend(Be),Me.extend(Ue),function(e){e.generateDays=e=>{const t=e.startOf("month"),r=Me(t).startOf("week");return Ke(r).map((e=>qe(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return qe(t)},e.generateMonths=e=>{const t=[];for(let r=0;r<12;r++){const n=e.month(r);t.push(Me(n))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),r=10*Math.floor(t/10),n=e.year(r),o=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)o.push(n.add(e,"year"));return o},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+Me(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=Me(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,r,n="day")=>!t&&!r||(t&&r?e.isBetween(t,r,n,"[]"):t?e.isSameOrAfter(t,n):e.isSameOrBefore(r,n)),e.isPreviousMonthWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"month"),r,void 0,"month"),e.isPreviousYearWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"year"),r,void 0,"year"),e.isPreviousDecadeWithinRange=(t,r)=>{const{beginDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).subtract(1,"year"),r,void 0,"year")},e.isNextMonthWithinRange=(t,r)=>e.isWithinRange(t.add(1,"month"),void 0,r,"month"),e.isNextYearWithinRange=(t,r)=>e.isWithinRange(t.add(1,"year"),void 0,r,"year"),e.isNextDecadeWithinRange=(t,r)=>{const{endDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).add(1,"year"),void 0,r,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,r,n,o)=>{const i=e.isWithinRange(t,n?Me(n):void 0,o?Me(o):void 0),a=r&&r.includes(t.format("YYYY-MM-DD"));return!i||!!a}}(Ve||(Ve={}));const Ke=e=>{const t=[e];for(let r=1;r<6;r++){const n=e.add(r,"week");t.push(n)}return t},qe=e=>{const t=[];for(let r=0;r<7;r++){const n=e.add(r,"day");t.push(n)}return t},Ze=[1,3,5,7,8,10,12],Ge=[4,6,9,11];var Qe,Xe;!function(e){e.clampDay=(t,r,n)=>{const o=parseInt(t),i=parseInt(r),a=parseInt(n);return 0==o?"1":Ze.includes(i)?Math.min(o,31).toString():Ge.includes(i)?Math.min(o,30).toString():2===i?e.isLeapYear(a)?Math.min(o,29).toString():Math.min(o,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,r="HH:mm")=>{const n=Me(e,r);return Me(t,r).diff(n,"minute")},e.toDayjs=e=>e?Me(e):Me(),e.addMinutesToTime=(e,t,r="HH:mm")=>Me(e,r).add(t,"minutes").format(r),e.isSame=(e,t,r="day")=>Me(e).isSame(Me(t),r)}(Qe||(Qe={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:r,minDate:n,maxDate:o}=t;return!!(e&&r&&r.length&&r.includes(e))||(!(!n||!Me(e).isBefore(n,"day"))||!(!o||!Me(e).isAfter(o,"day")))},e.sanitizeInput=e=>{if(e){const r=t(e);if(Me(r,"YYYY-MM-DD",!0).isValid())return r}return""};const t=e=>{const t=e.match(/^(\d{1,4})-(\d{1,2})-(\d{1,2})$/);if(!t)return"";const[,r,n,o]=t;if(r.length<=2||parseInt(r,10)<100)return"";return`${r.padStart(4,"0")}-${n.padStart(2,"0")}-${o.padStart(2,"0")}`}}(Xe||(Xe={}));const Je=()=>{const e=i.split(".");return parseInt(e[0],10)>=19},et=(...e)=>t=>{const r=[];for(const n of e)if("function"==typeof n){const e=n(t),o="function"==typeof e;r.push(o?e:()=>n(null))}else n.current=t,r.push((()=>{n.current=null}));if(Je())return()=>{for(const e of r)e()}};var tt,rt;!function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(tt||(tt={})),function(e){e.transformWithSpaces=(e,t)=>{const r="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const r=Math.floor(t/9);return e.length>=2*r||1===e.split(" ").length&&e.length>r},e.truncateOneLine=(e,t,r,n,o=8)=>{let i=0;t>r&&(i=Math.floor((t-r)/o));const a=n+i;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,r,n=1.2)=>{const o=Math.floor(2*t/(.6*r))*(2/n);if(e.length<=o)return e;const i=Math.floor(.6*o),a=Math.floor(.2*o);return`${e.substring(0,i)}...${e.substring(e.length-a)}`},e.getTextWidth=(t,r)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=r;return n.measureText(t).width},e.maskValue=(e,r)=>{if(!e)return e;const{maskRange:n,unmaskRange:o,maskChar:i="•",maskRegex:a,maskTransformer:s}=r;if(s)return s(e);if(a)return e.replace(a,i);if(n){const{startIndex:r,endIndex:o}=t(n[0],n[1]);return e.substring(0,r)+i.repeat(e.substring(r,o+1).length)+e.substring(o+1)}if(o){const{startIndex:r,endIndex:n}=t(o[0],o[1]);return i.repeat(e.substring(0,r).length)+e.substring(r,n+1)+i.repeat(e.substring(n+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e},r=new Intl.PluralRules("en",{type:"ordinal"}),n=new Map([["one","st"],["two","nd"],["few","rd"],["other","th"]]);e.formatOrdinal=e=>{const t=r.select(e);return`${e}${n.get(t)}`},e.getMaskedDescription=(e,t,r)=>{if(!e||"masked"!==t||!r)return"";const[n,o]=r,i=n>0,a=o<e.length-1,s=i?e.substring(0,n):"",l=a?e.substring(o+1):"";return i&&a?`Starting with ${s} and ending with ${l}`:i?`Starting with ${s}`:a?`Ending with ${l}`:""}}(rt||(rt={}));var nt=function(e,t){return nt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},nt(e,t)};var ot=function(){return ot=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},ot.apply(this,arguments)};var it="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var at=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},st="object"==typeof it&&it&&it.Object===Object&&it,lt="object"==typeof self&&self&&self.Object===Object&&self,dt=st||lt||Function("return this")(),ct=dt,ut=function(){return ct.Date.now()},ht=/\s/;var ft=function(e){for(var t=e.length;t--&&ht.test(e.charAt(t)););return t},pt=/^\s+/;var gt=function(e){return e?e.slice(0,ft(e)+1).replace(pt,""):e},mt=dt.Symbol,bt=mt,vt=Object.prototype,yt=vt.hasOwnProperty,xt=vt.toString,wt=bt?bt.toStringTag:void 0;var $t=function(e){var t=yt.call(e,wt),r=e[wt];try{e[wt]=void 0;var n=!0}catch(e){}var o=xt.call(e);return n&&(t?e[wt]=r:delete e[wt]),o},Ct=Object.prototype.toString;var St=$t,Dt=function(e){return Ct.call(e)},kt=mt?mt.toStringTag:void 0;var Ft=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":kt&&kt in Object(e)?St(e):Dt(e)},_t=function(e){return null!=e&&"object"==typeof e};var Et=gt,Ot=at,Tt=function(e){return"symbol"==typeof e||_t(e)&&"[object Symbol]"==Ft(e)},It=/^[-+]0x[0-9a-f]+$/i,Mt=/^0b[01]+$/i,At=/^0o[0-7]+$/i,Bt=parseInt;var zt=at,jt=ut,Rt=function(e){if("number"==typeof e)return e;if(Tt(e))return NaN;if(Ot(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Ot(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Et(e);var r=Mt.test(e);return r||At.test(e)?Bt(e.slice(2),r?2:8):It.test(e)?NaN:+e},Lt=Math.max,Pt=Math.min;var Nt=function(e,t,r){var n,o,i,a,s,l,d=0,c=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var r=n,i=o;return n=o=void 0,d=t,a=e.apply(i,r)}function p(e){var r=e-l;return void 0===l||r>=t||r<0||u&&e-d>=i}function g(){var e=jt();if(p(e))return m(e);s=setTimeout(g,function(e){var r=t-(e-l);return u?Pt(r,i-(e-d)):r}(e))}function m(e){return s=void 0,h&&n?f(e):(n=o=void 0,a)}function b(){var e=jt(),r=p(e);if(n=arguments,o=this,l=e,r){if(void 0===s)return function(e){return d=e,s=setTimeout(g,t),c?f(e):a}(l);if(u)return clearTimeout(s),s=setTimeout(g,t),f(l)}return void 0===s&&(s=setTimeout(g,t)),a}return t=Rt(t)||0,zt(r)&&(c=!!r.leading,i=(u="maxWait"in r)?Lt(Rt(r.maxWait)||0,t):i,h="trailing"in r?!!r.trailing:h),b.cancel=function(){void 0!==s&&clearTimeout(s),d=0,n=l=o=s=void 0},b.flush=function(){return void 0===s?a:m(jt())},b},Ht=Nt,Wt=at;var Yt=function(e,t,r){var n=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Wt(r)&&(n="leading"in r?!!r.leading:n,o="trailing"in r?!!r.trailing:o),Ht(e,t,{leading:n,maxWait:t,trailing:o})},Vt=function(e,t,r,n){switch(t){case"debounce":return Nt(e,r,n);case"throttle":return Yt(e,r,n);default:return e}},Ut=function(e){return"function"==typeof e},Kt=function(){return"undefined"==typeof window},qt=function(e){return e instanceof Element||e instanceof HTMLDocument},Zt=function(e,t,r,n){return function(o){var i=o.width,a=o.height;t((function(t){return t.width===i&&t.height===a||t.width===i&&!n||t.height===a&&!r?t:(e&&Ut(e)&&e(i,a),{width:i,height:a})}))}};!function(e){function t(t){var r=e.call(this,t)||this;r.cancelHandler=function(){r.resizeHandler&&r.resizeHandler.cancel&&(r.resizeHandler.cancel(),r.resizeHandler=null)},r.attachObserver=function(){var e=r.props,t=e.targetRef,n=e.observerOptions;if(!Kt()){t&&t.current&&(r.targetRef.current=t.current);var o=r.getElement();o&&(r.observableElement&&r.observableElement===o||(r.observableElement=o,r.resizeObserver.observe(o,n)))}},r.getElement=function(){var e=r.props,t=e.querySelector,n=e.targetDomEl;if(Kt())return null;if(t)return document.querySelector(t);if(n&&qt(n))return n;if(r.targetRef&&qt(r.targetRef.current))return r.targetRef.current;var o=te(r);if(!o)return null;switch(r.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return o;default:return o.parentElement}},r.createResizeHandler=function(e){var t=r.props,n=t.handleWidth,o=void 0===n||n,i=t.handleHeight,a=void 0===i||i,s=t.onResize;if(o||a){var l=Zt(s,r.setState.bind(r),o,a);e.forEach((function(e){var t=e&&e.contentRect||{},n=t.width,o=t.height;!r.skipOnMount&&!Kt()&&l({width:n,height:o}),r.skipOnMount=!1}))}},r.getRenderType=function(){var e=r.props,t=e.render,n=e.children;return Ut(t)?"renderProp":Ut(n)?"childFunction":l(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=t.skipOnMount,o=t.refreshMode,i=t.refreshRate,a=void 0===i?1e3:i,s=t.refreshOptions;return r.state={width:void 0,height:void 0},r.skipOnMount=n,r.targetRef=d(),r.observableElement=null,Kt()||(r.resizeHandler=Vt(r.createResizeHandler,o,a,s),r.resizeObserver=new window.ResizeObserver(r.resizeHandler)),r}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}nt(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){Kt()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,r=t.render,o=t.children,i=t.nodeType,a=void 0===i?"div":i,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return r&&r(l);case"childFunction":return(e=o)(l);case"child":if((e=o).type&&"string"==typeof e.type){var d=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}(l,["targetRef"]);return c(e,d)}return c(e,l);case"childArray":return(e=o).map((function(e){return!!e&&c(e,l)}));default:return n.createElement(a,null)}}}(u);var Gt=Kt()?h:f;function Qt(e){void 0===e&&(e={});var t=e.skipOnMount,r=void 0!==t&&t,n=e.refreshMode,o=e.refreshRate,i=void 0===o?1e3:o,l=e.refreshOptions,d=e.handleWidth,c=void 0===d||d,u=e.handleHeight,h=void 0===u||u,f=e.targetRef,p=e.observerOptions,g=e.onResize,m=a(r),b=a(null),v=null!=f?f:b,y=a(),x=s({width:void 0,height:void 0}),w=x[0],$=x[1];return Gt((function(){if(!Kt()){var e=Zt(g,$,c,h);y.current=Vt((function(t){(c||h)&&t.forEach((function(t){var r=t&&t.contentRect||{},n=r.width,o=r.height;!m.current&&!Kt()&&e({width:n,height:o}),m.current=!1}))}),n,i,l);var t=new window.ResizeObserver(y.current);return v.current&&t.observe(v.current,p),function(){t.disconnect();var e=y.current;e&&e.cancel&&e.cancel()}}}),[n,i,l,c,h,g,p,v.current]),ot({ref:v},w)}function Xt(e){const t=a(null);f((()=>{t.current=e}),[e]);return p(((...e)=>{var r;return null===(r=t.current)||void 0===r?void 0:r.call(t,...e)}),[])}const Jt=(e,t,r="window",n)=>{const o=a();h((()=>{o.current=t}),[t]),h((()=>{let t;switch(r){case"window":t=window;break;case"document":t=document;break;default:t=r}if(!t||!t.addEventListener)return;const i=e=>{var t;return null===(t=o.current)||void 0===t?void 0:t.call(o,e)};return t.addEventListener(e,i,n),()=>{null==t||t.removeEventListener(e,i,n)}}),[e,r])},er=()=>{const[e,t]=s(!1);return h((()=>{t(!0)}),[]),e};function tr({ref:e,formatter:t}){return()=>{var r;const n=e.current;if(!n)return;const o=n.value,i=t(o),a=null!==(r=n.selectionEnd)&&void 0!==r?r:0,s=o.substring(0,a),l=t(s),d=s.length-l.length,c=Math.max(0,a-d);return{nextValue:i,updateCaretPosition:()=>{n.value=i,n.setSelectionRange(c,c)}}}}const rr=e=>{const t=(e=>{const t=a(e),r=a();return h((()=>{r.current=t.current,t.current=e}),[e]),r.current})(e);return t!==e},nr=e=>{const[t,r]=s(e),n=a(e);return[t,p((e=>{n.current=e,r(e)}),[]),n]};var or,ir={exports:{}};or=e=>(()=>{var t={"./node_modules/css-mediaquery/index.js":
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
	  \***********************************************************/(e,t)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,r=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,d=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,f=e?Symbol.for("react.suspense_list"):60120,p=e?Symbol.for("react.memo"):60115,g=e?Symbol.for("react.lazy"):60116,m=e?Symbol.for("react.block"):60121,b=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,y=e?Symbol.for("react.scope"):60119;function x(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:var f=e.type;switch(f){case d:case c:case o:case a:case i:case h:return f;default:var m=f&&f.$$typeof;switch(m){case l:case u:case g:case p:case s:return m;default:return t}}case n:return t}}}var w=d,$=c,C=l,S=s,D=r,k=u,F=o,_=g,E=p,O=n,T=a,I=i,M=h,A=!1;function B(e){return x(e)===c}t.AsyncMode=w,t.ConcurrentMode=$,t.ContextConsumer=C,t.ContextProvider=S,t.Element=D,t.ForwardRef=k,t.Fragment=F,t.Lazy=_,t.Memo=E,t.Portal=O,t.Profiler=T,t.StrictMode=I,t.Suspense=M,t.isAsyncMode=function(e){return A||(A=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),B(e)||x(e)===d},t.isConcurrentMode=B,t.isContextConsumer=function(e){return x(e)===l},t.isContextProvider=function(e){return x(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return x(e)===u},t.isFragment=function(e){return x(e)===o},t.isLazy=function(e){return x(e)===g},t.isMemo=function(e){return x(e)===p},t.isPortal=function(e){return x(e)===n},t.isProfiler=function(e){return x(e)===a},t.isStrictMode=function(e){return x(e)===i},t.isSuspense=function(e){return x(e)===h},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===c||e===a||e===i||e===h||e===f||"object"==typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===p||e.$$typeof===s||e.$$typeof===l||e.$$typeof===u||e.$$typeof===b||e.$$typeof===v||e.$$typeof===y||e.$$typeof===m)},t.typeOf=x}()},"./node_modules/react-is/index.js":
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
	  \**************************************************************************************/t=>{t.exports=e}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}};return t[e].call(i.exports,i,i.exports,n),i.exports}return n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n("./src/index.ts")})();var ar=ir.exports=or(o),sr=Array.isArray,lr="object"==typeof Oe&&Oe&&Oe.Object===Object&&Oe,dr=lr,cr="object"==typeof self&&self&&self.Object===Object&&self,ur=dr||cr||Function("return this")(),hr=ur.Symbol,fr=hr,pr=Object.prototype,gr=pr.hasOwnProperty,mr=pr.toString,br=fr?fr.toStringTag:void 0;var vr=function(e){var t=gr.call(e,br),r=e[br];try{e[br]=void 0;var n=!0}catch(e){}var o=mr.call(e);return n&&(t?e[br]=r:delete e[br]),o},yr=Object.prototype.toString;var xr=vr,wr=function(e){return yr.call(e)},$r=hr?hr.toStringTag:void 0;var Cr=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":$r&&$r in Object(e)?xr(e):wr(e)};var Sr=function(e){return null!=e&&"object"==typeof e},Dr=Cr,kr=Sr;var Fr=function(e){return"symbol"==typeof e||kr(e)&&"[object Symbol]"==Dr(e)},_r=sr,Er=Fr,Or=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Tr=/^\w*$/;var Ir=function(e,t){if(_r(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!Er(e))||(Tr.test(e)||!Or.test(e)||null!=t&&e in Object(t))};var Mr=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Ar=Cr,Br=Mr;var zr,jr=function(e){if(!Br(e))return!1;var t=Ar(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},Rr=ur["__core-js_shared__"],Lr=(zr=/[^.]+$/.exec(Rr&&Rr.keys&&Rr.keys.IE_PROTO||""))?"Symbol(src)_1."+zr:"";var Pr=function(e){return!!Lr&&Lr in e},Nr=Function.prototype.toString;var Hr=function(e){if(null!=e){try{return Nr.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Wr=jr,Yr=Pr,Vr=Mr,Ur=Hr,Kr=/^\[object .+?Constructor\]$/,qr=Function.prototype,Zr=Object.prototype,Gr=qr.toString,Qr=Zr.hasOwnProperty,Xr=RegExp("^"+Gr.call(Qr).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Jr=function(e,t){return null==e?void 0:e[t]},en=function(e){return!(!Vr(e)||Yr(e))&&(Wr(e)?Xr:Kr).test(Ur(e))},tn=Jr;var rn=function(e,t){var r=tn(e,t);return en(r)?r:void 0},nn=rn(Object,"create"),on=nn;var an=function(){this.__data__=on?on(null):{},this.size=0};var sn=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ln=nn,dn=Object.prototype.hasOwnProperty;var cn=function(e){var t=this.__data__;if(ln){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return dn.call(t,e)?t[e]:void 0},un=nn,hn=Object.prototype.hasOwnProperty;var fn=function(e){var t=this.__data__;return un?void 0!==t[e]:hn.call(t,e)},pn=nn;var gn=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=pn&&void 0===t?"__lodash_hash_undefined__":t,this},mn=an,bn=sn,vn=cn,yn=fn,xn=gn;function wn(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}wn.prototype.clear=mn,wn.prototype.delete=bn,wn.prototype.get=vn,wn.prototype.has=yn,wn.prototype.set=xn;var $n=wn;var Cn=function(){this.__data__=[],this.size=0};var Sn=function(e,t){return e===t||e!=e&&t!=t},Dn=Sn;var kn=function(e,t){for(var r=e.length;r--;)if(Dn(e[r][0],t))return r;return-1},Fn=kn,_n=Array.prototype.splice;var En=function(e){var t=this.__data__,r=Fn(t,e);return!(r<0)&&(r==t.length-1?t.pop():_n.call(t,r,1),--this.size,!0)},On=kn;var Tn=function(e){var t=this.__data__,r=On(t,e);return r<0?void 0:t[r][1]},In=kn;var Mn=function(e){return In(this.__data__,e)>-1},An=kn;var Bn=function(e,t){var r=this.__data__,n=An(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},zn=Cn,jn=En,Rn=Tn,Ln=Mn,Pn=Bn;function Nn(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Nn.prototype.clear=zn,Nn.prototype.delete=jn,Nn.prototype.get=Rn,Nn.prototype.has=Ln,Nn.prototype.set=Pn;var Hn=Nn,Wn=rn(ur,"Map"),Yn=$n,Vn=Hn,Un=Wn;var Kn=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var qn=function(e,t){var r=e.__data__;return Kn(t)?r["string"==typeof t?"string":"hash"]:r.map},Zn=qn;var Gn=function(e){var t=Zn(this,e).delete(e);return this.size-=t?1:0,t},Qn=qn;var Xn=function(e){return Qn(this,e).get(e)},Jn=qn;var eo=function(e){return Jn(this,e).has(e)},to=qn;var ro=function(e,t){var r=to(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},no=function(){this.size=0,this.__data__={hash:new Yn,map:new(Un||Vn),string:new Yn}},oo=Gn,io=Xn,ao=eo,so=ro;function lo(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}lo.prototype.clear=no,lo.prototype.delete=oo,lo.prototype.get=io,lo.prototype.has=ao,lo.prototype.set=so;var co=lo,uo=co;function ho(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,o=t?t.apply(this,n):n[0],i=r.cache;if(i.has(o))return i.get(o);var a=e.apply(this,n);return r.cache=i.set(o,a)||i,a};return r.cache=new(ho.Cache||uo),r}ho.Cache=uo;var fo=ho;var po=function(e){var t=fo(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t},go=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,mo=/\\(\\)?/g,bo=po((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(go,(function(e,r,n,o){t.push(n?o.replace(mo,"$1"):r||e)})),t}));var vo=function(e,t){for(var r=-1,n=null==e?0:e.length,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o},yo=sr,xo=Fr,wo=hr?hr.prototype:void 0,$o=wo?wo.toString:void 0;var Co=function e(t){if("string"==typeof t)return t;if(yo(t))return vo(t,e)+"";if(xo(t))return $o?$o.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},So=Co;var Do=sr,ko=Ir,Fo=bo,_o=function(e){return null==e?"":So(e)};var Eo=function(e,t){return Do(e)?e:ko(e,t)?[e]:Fo(_o(e))},Oo=Fr;var To=function(e){if("string"==typeof e||Oo(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},Io=Eo,Mo=To;var Ao=function(e,t){for(var r=0,n=(t=Io(t,e)).length;null!=e&&r<n;)e=e[Mo(t[r++])];return r&&r==n?e:void 0},Bo=Ao;var zo=function(e,t,r){var n=null==e?void 0:Bo(e,t);return void 0===n?r:n},jo=Te(zo);const Ro=(e,t,r)=>jo(r,t)||jo(e,t),Lo=(e,t)=>{const r=t||e.defaultValue;return jo(e.collections,r)},Po={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},No=e=>t=>{var r;const n=t.theme,o=Lo(Po,null==n?void 0:n.borderScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.border)?`${Ro(o,e,n.overrides.border)}px`:`${o[e]}px`},Ho={"width-005":No("width-005"),"width-010":No("width-010"),"width-020":No("width-020"),"width-040":No("width-040"),solid:(Wo="solid",e=>{var t;const r=e.theme,n=Lo(Po,null==r?void 0:r.borderScheme),o=(null===(t=null==r?void 0:r.overrides)||void 0===t?void 0:t.border)?Ro(n,Wo,r.overrides.border):n[Wo];return"function"==typeof o?o(e):o})};var Wo;const Yo={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Vo={"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFF8FC","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Uo={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Ko={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},qo={"brand-10":"#001A19","brand-20":"#002D2B","brand-30":"#00413D","brand-40":"#005954","brand-50":"#00756F","brand-60":"#03A098","brand-70":"#55BFBA","brand-80":"#92D6D2","brand-90":"#BFE7E5","brand-95":"#DDF2F1","brand-100":"#F4FBFA","primary-10":"#09191D","primary-20":"#102B34","primary-30":"#173D49","primary-40":"#205666","primary-50":"#2A7086","primary-60":"#5D97A9","primary-70":"#8CB6C2","primary-80":"#B2CED6","primary-90":"#D1E2E7","primary-95":"#E8F0F3","primary-100":"#F7FAFB","secondary-10":"#001731","secondary-20":"#002752","secondary-30":"#003874","secondary-40":"#004D9F","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Zo={"brand-10":"#881317","brand-20":"#B5191E","brand-30":"#B5040A","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Go={"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Qo={"brand-10":"#170F39","brand-20":"#281C62","brand-30":"#38268B","brand-40":"#4D34BF","brand-50":"#5735DF","brand-60":"#9986F9","brand-70":"#B2A5F8","brand-80":"#CDC2FA","brand-90":"#E2DCFC","brand-95":"#EFEDFE","brand-100":"#FAF8FD","primary-10":"#170F39","primary-20":"#281C62","primary-30":"#38268B","primary-40":"#4D34BF","primary-50":"#5735DF","primary-60":"#9986F9","primary-70":"#B2A5F8","primary-80":"#CDC2FA","primary-90":"#E2DCFC","primary-95":"#EFEDFE","primary-100":"#FAF8FD","secondary-10":"#251204","secondary-20":"#401F08","secondary-30":"#5B2C0B","secondary-40":"#7E3D0F","secondary-50":"#B04900","secondary-60":"#E26E1C","secondary-70":"#FF9445","secondary-80":"#FFBB8E","secondary-90":"#FFD9BF","secondary-95":"#FFECDF","secondary-100":"#FFF8F3","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#031B15","success-20":"#082D24","success-30":"#094134","success-40":"#0D5947","success-50":"#10755E","success-60":"#16A181","success-70":"#1EC59D","success-80":"#6FDDC2","success-90":"#AFECDE","success-95":"#D5F5ED","success-100":"#F1FCF9","warning-10":"#1F1500","warning-20":"#362500","warning-30":"#4D3501","warning-40":"#6A4801","warning-50":"#8B6001","warning-60":"#BF8301","warning-70":"#EAA102","warning-80":"#FFBF34","warning-90":"#FFDC8F","warning-95":"#FFEDC7","warning-100":"#FFF8EA","error-10":"#270F10","error-20":"#441B1B","error-30":"#612627","error-40":"#853535","error-50":"#AF4546","error-60":"#EC6162","error-70":"#F29696","error-80":"#F7BBBC","error-90":"#FAD8D8","error-95":"#FCEAEA","error-100":"#FEF7F7","info-10":"#0F1627","info-20":"#1B2745","info-30":"#273763","info-40":"#354D88","info-50":"#4665B3","info-60":"#618AF6","info-70":"#8DADFF","info-80":"#B4C9FF","info-90":"#D3DFFF","info-95":"#E9EFFF","info-100":"#F5F8FF",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Xo={"brand-10":"#0E113C","brand-20":"#191E67","brand-30":"#232A92","brand-40":"#233FC2","brand-50":"#135CEA","brand-60":"#378FFB","brand-70":"#71B3FD","brand-80":"#9DCFFE","brand-90":"#C1E5FF","brand-95":"#DCF1FF","brand-100":"#F3FAFF","primary-10":"#0E113C","primary-20":"#191E67","primary-30":"#232A92","primary-40":"#233FC2","primary-50":"#135CEA","primary-60":"#378FFB","primary-70":"#71B3FD","primary-80":"#9DCFFE","primary-90":"#C1E5FF","primary-95":"#DCF1FF","primary-100":"#F3FAFF","secondary-10":"#34001F","secondary-20":"#540033","secondary-30":"#730045","secondary-40":"#9D0054","secondary-50":"#C61C64","secondary-60":"#DE6792","secondary-70":"#EB96B6","secondary-80":"#F5BAD2","secondary-90":"#FCD5E3","secondary-95":"#FDEBF1","secondary-100":"#FDF6F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Jo={"brand-10":"#370009","brand-20":"#4E000D","brand-30":"#640011","brand-40":"#850017","brand-50":"#9B001A","brand-60":"#EF2D4E","brand-70":"#F692A3","brand-80":"#FAB9C4","brand-90":"#FCD7DD","brand-95":"#FDEAED","brand-100":"#FEF8F9","primary-10":"#1F102A","primary-20":"#2F193F","primary-30":"#3E2053","primary-40":"#562D71","primary-50":"#663587","primary-60":"#9370AA","primary-70":"#BCA7CB","primary-80":"#D3C5DC","primary-90":"#E5DDEB","primary-95":"#F2EEF5","primary-100":"#FAF9FB","secondary-10":"#201316","secondary-20":"#311D22","secondary-30":"#3F272C","secondary-40":"#58363D","secondary-50":"#684049","secondary-60":"#AF6A7A","secondary-70":"#F393A8","secondary-80":"#FFB6C6","secondary-90":"#FFD6DF","secondary-95":"#FFE9EE","secondary-100":"#FFF7F9","neutral-10":"#161616","neutral-20":"#222222","neutral-30":"#2D2D2D","neutral-40":"#3F3F3F","neutral-50":"#4B4B4B","neutral-60":"#7E7E7E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081917","success-20":"#0D2724","success-30":"#11332E","success-40":"#174740","success-50":"#1B554C","success-60":"#2D8C7E","success-70":"#46C2AF","success-80":"#89D8CC","success-90":"#BCE9E2","success-95":"#DAF3EF","success-100":"#F0FAF9","warning-10":"#241200","warning-20":"#371C00","warning-30":"#482500","warning-40":"#633300","warning-50":"#763C00","warning-60":"#C36400","warning-70":"#FF9524","warning-80":"#FFBD77","warning-90":"#FFD9B2","warning-95":"#FFEBD6","warning-100":"#FFF7F0","error-10":"#330505","error-20":"#4B0707","error-30":"#600909","error-40":"#810D0D","error-50":"#98110F","error-60":"#D7504C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032537","info-30":"#043148","info-40":"#054462","info-50":"#065175","info-60":"#3985AF","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ei={"brand-10":"#00143A","brand-20":"#00205B","brand-30":"#153368","brand-40":"#18417C","brand-50":"#00558C","brand-60":"#009CDE","brand-70":"#5AB9E7","brand-80":"#9ED0ED","brand-90":"#CAE3F4","brand-95":"#E2F0F9","brand-100":"#F4FAFD","primary-10":"#00143A","primary-20":"#00205B","primary-30":"#153368","primary-40":"#18417C","primary-50":"#00558C","primary-60":"#009CDE","primary-70":"#5AB9E7","primary-80":"#9ED0ED","primary-90":"#CAE3F4","primary-95":"#E2F0F9","primary-100":"#F4FAFD","secondary-10":"#10171F","secondary-20":"#1E252C","secondary-30":"#2F353B","secondary-40":"#3D4247","secondary-50":"#4E5255","secondary-60":"#8F9396","secondary-70":"#A9B0B3","secondary-80":"#C7CBCC","secondary-90":"#DDDFE0","secondary-95":"#ECEDEE","secondary-100":"#F8F8F9","neutral-10":"#10171F","neutral-20":"#1E252C","neutral-30":"#2F353B","neutral-40":"#3D4247","neutral-50":"#4E5255","neutral-60":"#8F9396","neutral-70":"#A9B0B3","neutral-80":"#C7CBCC","neutral-90":"#DDDFE0","neutral-95":"#ECEDEE","neutral-100":"#F8F8F9","success-10":"#001B0E","success-20":"#012A16","success-30":"#013D20","success-40":"#014D28","success-50":"#005F30","success-60":"#48A377","success-70":"#77BD9B","success-80":"#A3D5BD","success-90":"#C4E7D6","success-95":"#DBF4E7","success-100":"#ECFDF5","warning-10":"#1F1500","warning-20":"#312100","warning-30":"#473000","warning-40":"#593C00","warning-50":"#6E4B00","warning-60":"#B78C31","warning-70":"#DDA633","warning-80":"#E0C792","warning-90":"#E9DEC5","warning-95":"#F4EEE0","warning-100":"#FAF8F3","error-10":"#360109","error-20":"#50010E","error-30":"#6F0213","error-40":"#88051A","error-50":"#A60A24","error-60":"#E07083","error-70":"#EA98A6","error-80":"#F3BBC4","error-90":"#FAD5DC","error-95":"#FEE9ED","error-100":"#FFF6F8","info-10":"#00143A","info-20":"#00205B","info-30":"#153368","info-40":"#18417C","info-50":"#00558C","info-60":"#009CDE","info-70":"#5AB9E7","info-80":"#9ED0ED","info-90":"#CAE3F4","info-95":"#E2F0F9","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FFCB6A"},ti={collections:{lifesg:Uo,bookingsg:Yo,rbs:Go,mylegacy:Ko,ccube:Vo,oneservice:qo,pa:Zo,a11yplayground:Qo,supportgowhere:Xo,imda:Jo,spf:ei},defaultValue:"lifesg"},ri={collections:{lifesg:Uo,bookingsg:Yo,rbs:Go,mylegacy:Ko,ccube:Vo,oneservice:qo,pa:Zo,a11yplayground:Qo,supportgowhere:Xo,imda:Jo,spf:ei},defaultValue:"lifesg"},ni=e=>t=>{var r;const n=t.theme,o="dark"===(null==n?void 0:n.colourMode),i=Lo(o?ri:ti,null==n?void 0:n.colourScheme),a=o?"primitiveColourDark":"primitiveColour",s=null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r[a];return s?Ro(i,e,s):i[e]},oi={"brand-10":ni("brand-10"),"brand-20":ni("brand-20"),"brand-30":ni("brand-30"),"brand-40":ni("brand-40"),"brand-50":ni("brand-50"),"brand-60":ni("brand-60"),"brand-70":ni("brand-70"),"brand-80":ni("brand-80"),"brand-90":ni("brand-90"),"brand-95":ni("brand-95"),"brand-100":ni("brand-100"),"primary-10":ni("primary-10"),"primary-20":ni("primary-20"),"primary-30":ni("primary-30"),"primary-40":ni("primary-40"),"primary-50":ni("primary-50"),"primary-60":ni("primary-60"),"primary-70":ni("primary-70"),"primary-80":ni("primary-80"),"primary-90":ni("primary-90"),"primary-95":ni("primary-95"),"primary-100":ni("primary-100"),"secondary-10":ni("secondary-10"),"secondary-20":ni("secondary-20"),"secondary-30":ni("secondary-30"),"secondary-40":ni("secondary-40"),"secondary-50":ni("secondary-50"),"secondary-60":ni("secondary-60"),"secondary-70":ni("secondary-70"),"secondary-80":ni("secondary-80"),"secondary-90":ni("secondary-90"),"secondary-95":ni("secondary-95"),"secondary-100":ni("secondary-100"),"neutral-10":ni("neutral-10"),"neutral-20":ni("neutral-20"),"neutral-30":ni("neutral-30"),"neutral-40":ni("neutral-40"),"neutral-50":ni("neutral-50"),"neutral-60":ni("neutral-60"),"neutral-70":ni("neutral-70"),"neutral-80":ni("neutral-80"),"neutral-90":ni("neutral-90"),"neutral-95":ni("neutral-95"),"neutral-100":ni("neutral-100"),"success-10":ni("success-10"),"success-20":ni("success-20"),"success-30":ni("success-30"),"success-40":ni("success-40"),"success-50":ni("success-50"),"success-60":ni("success-60"),"success-70":ni("success-70"),"success-80":ni("success-80"),"success-90":ni("success-90"),"success-95":ni("success-95"),"success-100":ni("success-100"),"warning-10":ni("warning-10"),"warning-20":ni("warning-20"),"warning-30":ni("warning-30"),"warning-40":ni("warning-40"),"warning-50":ni("warning-50"),"warning-60":ni("warning-60"),"warning-70":ni("warning-70"),"warning-80":ni("warning-80"),"warning-90":ni("warning-90"),"warning-95":ni("warning-95"),"warning-100":ni("warning-100"),"error-10":ni("error-10"),"error-20":ni("error-20"),"error-30":ni("error-30"),"error-40":ni("error-40"),"error-50":ni("error-50"),"error-60":ni("error-60"),"error-70":ni("error-70"),"error-80":ni("error-80"),"error-90":ni("error-90"),"error-95":ni("error-95"),"error-100":ni("error-100"),"info-10":ni("info-10"),"info-20":ni("info-20"),"info-30":ni("info-30"),"info-40":ni("info-40"),"info-50":ni("info-50"),"info-60":ni("info-60"),"info-70":ni("info-70"),"info-80":ni("info-80"),"info-90":ni("info-90"),"info-95":ni("info-95"),"info-100":ni("info-100"),white:ni("white"),black:ni("black"),"primary-inverse":ni("primary-inverse")},ii={text:ni("neutral-20"),"text-subtle":ni("neutral-30"),"text-subtler":ni("neutral-50"),"text-subtlest":ni("neutral-60"),"text-primary":ni("primary-50"),"text-primary-strongest":ni("primary-20"),"text-hover":ni("primary-40"),"text-selected":ni("primary-50"),"text-selected-hover":ni("primary-40"),"text-disabled":ni("neutral-50"),"text-disabled-subtle":ni("neutral-60"),"text-disabled-subtlest":ni("neutral-80"),"text-selected-disabled":ni("neutral-20"),"text-success":ni("success-40"),"text-warning":ni("warning-40"),"text-error":ni("error-40"),"text-info":ni("info-40"),"text-inverse":ni("white"),icon:ni("neutral-50"),"icon-subtle":ni("neutral-60"),"icon-strongest":ni("neutral-20"),"icon-primary":ni("primary-50"),"icon-primary-subtle":ni("primary-60"),"icon-primary-subtlest":ni("primary-70"),"icon-hover":ni("primary-40"),"icon-selected":ni("primary-50"),"icon-selected-hover":ni("primary-40"),"icon-disabled":ni("neutral-50"),"icon-disabled-subtle":ni("neutral-60"),"icon-selected-disabled":ni("neutral-60"),"icon-success":ni("success-50"),"icon-warning":ni("warning-60"),"icon-error":ni("error-50"),"icon-error-strong":ni("error-40"),"icon-info":ni("info-50"),"icon-inverse":ni("white"),"icon-primary-inverse":ni("primary-inverse"),border:ni("neutral-90"),"border-strong":ni("neutral-70"),"border-stronger":ni("neutral-50"),"border-primary":ni("primary-50"),"border-primary-subtle":ni("primary-60"),"border-hover":ni("primary-90"),"border-hover-strong":ni("primary-60"),"border-selected":ni("primary-50"),"border-selected-subtle":ni("primary-70"),"border-selected-subtlest":ni("primary-90"),"border-selected-hover":ni("primary-40"),"border-focus":ni("primary-60"),"border-focus-strong":ni("primary-50"),"border-disabled":ni("neutral-90"),"border-selected-disabled":ni("neutral-70"),"border-success":ni("success-60"),"border-warning":ni("warning-60"),"border-error":ni("error-60"),"border-error-focus":ni("error-60"),"border-error-focus-strong":ni("error-40"),"border-error-strong":ni("error-40"),"border-info":ni("info-60"),bg:ni("white"),"bg-strong":ni("neutral-100"),"bg-stronger":ni("neutral-95"),"bg-strongest":ni("neutral-90"),"bg-hover":ni("primary-95"),"bg-hover-strong":ni("primary-90"),"bg-hover-subtle":ni("primary-100"),"bg-hover-neutral":ni("neutral-100"),"bg-hover-neutral-strong":ni("neutral-90"),"bg-selected":ni("primary-95"),"bg-selected-hover":ni("primary-90"),"bg-selected-strong":ni("primary-90"),"bg-selected-stronger":ni("primary-70"),"bg-selected-strongest":ni("primary-50"),"bg-selected-strongest-hover":ni("primary-40"),"bg-disabled":ni("neutral-95"),"bg-selected-disabled":ni("neutral-95"),"bg-selected-stronger-disabled":ni("neutral-70"),"bg-success":ni("success-100"),"bg-success-hover":ni("success-95"),"bg-success-strong":ni("success-50"),"bg-success-strong-hover":ni("success-40"),"bg-warning":ni("warning-100"),"bg-warning-hover":ni("warning-95"),"bg-warning-strong":ni("warning-50"),"bg-warning-strong-hover":ni("warning-40"),"bg-info":ni("info-100"),"bg-info-hover":ni("info-95"),"bg-info-strong":ni("info-50"),"bg-info-strong-hover":ni("info-40"),"bg-error":ni("error-100"),"bg-error-hover":ni("error-95"),"bg-error-strong":ni("error-50"),"bg-error-strong-hover":ni("error-40"),"bg-inverse":ni("neutral-20"),"bg-inverse-subtle":ni("neutral-30"),"bg-inverse-subtler":ni("neutral-50"),"bg-inverse-subtlest":ni("neutral-60"),"bg-inverse-hover":ni("neutral-40"),"bg-primary":ni("primary-50"),"bg-primary-subtle":ni("primary-60"),"bg-primary-subtler":ni("primary-95"),"bg-primary-subtlest":ni("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":ni("primary-40"),"bg-primary-subtlest-hover":ni("primary-90"),"bg-primary-subtlest-selected":ni("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:ni("primary-50"),"hyperlink-hover":ni("primary-40"),"hyperlink-visited":ni("primary-40"),"hyperlink-inverse":ni("primary-inverse"),"focus-ring":ni("primary-50"),"focus-ring-inverse":ni("white")},ai={text:ni("neutral-100"),"text-subtle":ni("neutral-80"),"text-subtler":ni("neutral-60"),"text-subtlest":ni("neutral-50"),"text-primary":ni("primary-60"),"text-primary-strongest":ni("primary-90"),"text-hover":ni("primary-70"),"text-selected":ni("primary-60"),"text-selected-hover":ni("primary-70"),"text-disabled":ni("neutral-60"),"text-disabled-subtle":ni("neutral-50"),"text-disabled-subtlest":ni("neutral-30"),"text-selected-disabled":ni("neutral-90"),"text-success":ni("success-70"),"text-warning":ni("warning-70"),"text-error":ni("error-70"),"text-info":ni("info-70"),"text-inverse":ni("black"),icon:ni("neutral-60"),"icon-subtle":ni("neutral-50"),"icon-strongest":ni("neutral-90"),"icon-primary":ni("primary-60"),"icon-primary-subtle":ni("primary-50"),"icon-primary-subtlest":ni("primary-40"),"icon-hover":ni("primary-70"),"icon-selected":ni("primary-60"),"icon-selected-hover":ni("primary-70"),"icon-disabled":ni("neutral-60"),"icon-disabled-subtle":ni("neutral-50"),"icon-selected-disabled":ni("neutral-50"),"icon-success":ni("success-60"),"icon-warning":ni("warning-50"),"icon-error":ni("error-60"),"icon-error-strong":ni("error-70"),"icon-info":ni("info-60"),"icon-inverse":ni("black"),"icon-primary-inverse":ni("primary-inverse"),border:ni("neutral-20"),"border-strong":ni("neutral-40"),"border-stronger":ni("neutral-60"),"border-primary":ni("primary-60"),"border-primary-subtle":ni("primary-50"),"border-hover":ni("primary-20"),"border-hover-strong":ni("primary-50"),"border-selected":ni("primary-60"),"border-selected-subtle":ni("primary-40"),"border-selected-subtlest":ni("primary-20"),"border-selected-hover":ni("primary-70"),"border-focus":ni("primary-50"),"border-focus-strong":ni("primary-60"),"border-disabled":ni("neutral-20"),"border-selected-disabled":ni("neutral-40"),"border-success":ni("success-50"),"border-warning":ni("warning-50"),"border-error":ni("error-50"),"border-error-focus":ni("error-50"),"border-error-focus-strong":ni("error-70"),"border-error-strong":ni("error-70"),"border-info":ni("info-50"),bg:ni("black"),"bg-strong":ni("neutral-10"),"bg-stronger":ni("neutral-20"),"bg-strongest":ni("neutral-20"),"bg-hover":ni("primary-20"),"bg-hover-strong":ni("primary-20"),"bg-hover-subtle":ni("primary-10"),"bg-hover-neutral":ni("neutral-10"),"bg-hover-neutral-strong":ni("neutral-20"),"bg-selected":ni("primary-20"),"bg-selected-hover":ni("primary-20"),"bg-selected-strong":ni("primary-20"),"bg-selected-stronger":ni("primary-40"),"bg-selected-strongest":ni("primary-60"),"bg-selected-strongest-hover":ni("primary-70"),"bg-disabled":ni("neutral-20"),"bg-selected-disabled":ni("neutral-20"),"bg-selected-stronger-disabled":ni("neutral-40"),"bg-success":ni("success-10"),"bg-success-hover":ni("success-20"),"bg-success-strong":ni("success-60"),"bg-success-strong-hover":ni("success-70"),"bg-warning":ni("warning-10"),"bg-warning-hover":ni("warning-20"),"bg-warning-strong":ni("warning-60"),"bg-warning-strong-hover":ni("warning-70"),"bg-info":ni("info-10"),"bg-info-hover":ni("info-20"),"bg-info-strong":ni("info-60"),"bg-info-strong-hover":ni("info-70"),"bg-error":ni("error-10"),"bg-error-hover":ni("error-20"),"bg-error-strong":ni("error-60"),"bg-error-strong-hover":ni("error-70"),"bg-inverse":ni("neutral-90"),"bg-inverse-subtle":ni("neutral-80"),"bg-inverse-subtler":ni("neutral-60"),"bg-inverse-subtlest":ni("neutral-50"),"bg-inverse-hover":ni("neutral-70"),"bg-primary":ni("primary-60"),"bg-primary-subtle":ni("primary-50"),"bg-primary-subtler":ni("primary-20"),"bg-primary-subtlest":ni("primary-10"),"bg-available":"#185339","bg-primary-hover":ni("primary-70"),"bg-primary-subtlest-hover":ni("primary-20"),"bg-primary-subtlest-selected":ni("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:ni("primary-60"),"hyperlink-hover":ni("primary-70"),"hyperlink-visited":ni("primary-70"),"hyperlink-inverse":ni("primary-inverse"),"focus-ring":ni("primary-60"),"focus-ring-inverse":ni("black")},si={text:ni("neutral-30"),"text-subtle":ni("neutral-40"),"text-subtler":ni("neutral-50"),"text-subtlest":ni("neutral-70"),"text-primary":ni("neutral-10"),"text-primary-strongest":ni("neutral-10"),"text-hover":ni("neutral-70"),"text-selected":ni("neutral-20"),"text-selected-hover":ni("neutral-10"),"text-disabled":ni("neutral-50"),"text-disabled-subtle":ni("neutral-70"),"text-disabled-subtlest":ni("neutral-80"),"text-selected-disabled":ni("neutral-40"),"text-success":ni("success-40"),"text-warning":ni("warning-40"),"text-error":ni("brand-30"),"text-info":ni("neutral-40"),"text-inverse":ni("neutral-100"),icon:ni("neutral-40"),"icon-subtle":ni("neutral-50"),"icon-strongest":ni("neutral-10"),"icon-primary":ni("neutral-10"),"icon-primary-subtle":ni("neutral-30"),"icon-primary-subtlest":ni("neutral-60"),"icon-hover":ni("neutral-70"),"icon-selected":ni("brand-20"),"icon-selected-hover":ni("brand-10"),"icon-disabled":ni("neutral-50"),"icon-disabled-subtle":ni("neutral-70"),"icon-selected-disabled":ni("neutral-40"),"icon-success":ni("success-40"),"icon-warning":ni("warning-60"),"icon-error":ni("brand-30"),"icon-error-strong":ni("brand-10"),"icon-info":ni("neutral-40"),"icon-inverse":ni("neutral-100"),"icon-primary-inverse":"#F9B371",border:ni("neutral-90"),"border-strong":ni("neutral-30"),"border-stronger":ni("neutral-20"),"border-primary":ni("neutral-40"),"border-primary-subtle":ni("neutral-60"),"border-hover":ni("neutral-80"),"border-hover-strong":ni("neutral-10"),"border-selected":ni("brand-20"),"border-selected-subtle":ni("neutral-40"),"border-selected-subtlest":ni("neutral-70"),"border-selected-hover":ni("neutral-10"),"border-focus":ni("neutral-20"),"border-focus-strong":ni("neutral-10"),"border-disabled":ni("neutral-90"),"border-selected-disabled":ni("neutral-80"),"border-success":ni("success-40"),"border-warning":ni("warning-60"),"border-error":ni("brand-30"),"border-error-focus":ni("brand-20"),"border-error-focus-strong":ni("brand-10"),"border-error-strong":ni("brand-20"),"border-info":ni("neutral-40"),bg:ni("neutral-100"),"bg-strong":ni("neutral-95"),"bg-stronger":ni("neutral-90"),"bg-strongest":ni("neutral-80"),"bg-hover":ni("brand-90"),"bg-hover-strong":ni("brand-80"),"bg-hover-subtle":ni("neutral-90"),"bg-hover-neutral":ni("neutral-90"),"bg-hover-neutral-strong":ni("neutral-90"),"bg-selected":ni("brand-100"),"bg-selected-hover":ni("brand-30"),"bg-selected-strong":ni("brand-50"),"bg-selected-stronger":ni("brand-40"),"bg-selected-strongest":ni("brand-20"),"bg-selected-strongest-hover":ni("brand-10"),"bg-disabled":ni("neutral-90"),"bg-selected-disabled":ni("neutral-90"),"bg-selected-stronger-disabled":ni("neutral-80"),"bg-success":ni("success-100"),"bg-success-hover":ni("success-95"),"bg-success-strong":ni("success-50"),"bg-success-strong-hover":ni("success-40"),"bg-warning":ni("warning-100"),"bg-warning-hover":ni("warning-95"),"bg-warning-strong":ni("warning-50"),"bg-warning-strong-hover":ni("warning-40"),"bg-info":ni("neutral-95"),"bg-info-hover":ni("info-95"),"bg-info-strong":ni("info-50"),"bg-info-strong-hover":ni("info-40"),"bg-error":ni("brand-100"),"bg-error-hover":ni("error-95"),"bg-error-strong":ni("error-50"),"bg-error-strong-hover":ni("error-40"),"bg-inverse":ni("neutral-40"),"bg-inverse-subtle":ni("neutral-60"),"bg-inverse-subtler":ni("neutral-70"),"bg-inverse-subtlest":ni("neutral-80"),"bg-inverse-hover":ni("neutral-30"),"bg-primary":ni("brand-20"),"bg-primary-subtle":ni("brand-60"),"bg-primary-subtler":ni("brand-80"),"bg-primary-subtlest":ni("brand-100"),"bg-available":ni("success-60"),"bg-primary-hover":ni("brand-10"),"bg-primary-subtlest-hover":ni("brand-80"),"bg-primary-subtlest-selected":ni("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:ni("neutral-10"),"hyperlink-hover":ni("neutral-40"),"hyperlink-visited":ni("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":ni("primary-50"),"focus-ring-inverse":ni("white")},li={text:ni("neutral-20"),"text-subtle":ni("neutral-30"),"text-subtler":ni("neutral-50"),"text-subtlest":ni("neutral-60"),"text-primary":ni("primary-50"),"text-primary-strongest":ni("primary-20"),"text-hover":ni("primary-40"),"text-selected":ni("primary-50"),"text-selected-hover":ni("primary-40"),"text-disabled":ni("neutral-50"),"text-disabled-subtle":ni("neutral-60"),"text-disabled-subtlest":ni("neutral-80"),"text-selected-disabled":ni("neutral-20"),"text-success":ni("success-40"),"text-warning":ni("warning-40"),"text-error":ni("error-40"),"text-info":ni("info-40"),"text-inverse":ni("white"),icon:ni("neutral-50"),"icon-subtle":ni("neutral-60"),"icon-strongest":ni("neutral-20"),"icon-primary":ni("primary-50"),"icon-primary-subtle":ni("primary-60"),"icon-primary-subtlest":ni("primary-70"),"icon-hover":ni("primary-40"),"icon-selected":ni("primary-50"),"icon-selected-hover":ni("primary-40"),"icon-disabled":ni("neutral-50"),"icon-disabled-subtle":ni("neutral-60"),"icon-selected-disabled":ni("neutral-60"),"icon-success":ni("success-50"),"icon-warning":ni("warning-60"),"icon-error":ni("error-50"),"icon-error-strong":ni("error-40"),"icon-info":ni("info-50"),"icon-inverse":ni("white"),"icon-primary-inverse":ni("primary-inverse"),border:ni("neutral-90"),"border-strong":ni("neutral-70"),"border-stronger":ni("neutral-50"),"border-primary":ni("primary-50"),"border-primary-subtle":ni("primary-60"),"border-hover":ni("primary-90"),"border-hover-strong":ni("primary-60"),"border-selected":ni("primary-50"),"border-selected-subtle":ni("primary-70"),"border-selected-subtlest":ni("primary-90"),"border-selected-hover":ni("primary-40"),"border-focus":ni("primary-60"),"border-focus-strong":ni("primary-50"),"border-disabled":ni("neutral-90"),"border-selected-disabled":ni("neutral-70"),"border-success":ni("success-60"),"border-warning":ni("warning-60"),"border-error":ni("error-60"),"border-error-focus":ni("error-60"),"border-error-focus-strong":ni("error-40"),"border-error-strong":ni("error-40"),"border-info":ni("info-60"),bg:ni("white"),"bg-strong":ni("neutral-100"),"bg-stronger":ni("neutral-95"),"bg-strongest":ni("neutral-90"),"bg-hover":ni("primary-95"),"bg-hover-strong":ni("primary-90"),"bg-hover-subtle":ni("primary-100"),"bg-hover-neutral":ni("neutral-100"),"bg-hover-neutral-strong":ni("neutral-90"),"bg-selected":ni("primary-95"),"bg-selected-hover":ni("primary-90"),"bg-selected-strong":ni("primary-90"),"bg-selected-stronger":ni("primary-70"),"bg-selected-strongest":ni("primary-50"),"bg-selected-strongest-hover":ni("primary-40"),"bg-disabled":ni("neutral-95"),"bg-selected-disabled":ni("neutral-95"),"bg-selected-stronger-disabled":ni("neutral-70"),"bg-success":ni("success-100"),"bg-success-hover":ni("success-95"),"bg-success-strong":ni("success-50"),"bg-success-strong-hover":ni("success-40"),"bg-warning":ni("warning-100"),"bg-warning-hover":ni("warning-95"),"bg-warning-strong":ni("warning-50"),"bg-warning-strong-hover":ni("warning-40"),"bg-info":ni("info-100"),"bg-info-hover":ni("info-95"),"bg-info-strong":ni("info-50"),"bg-info-strong-hover":ni("info-40"),"bg-error":ni("error-100"),"bg-error-hover":ni("error-95"),"bg-error-strong":ni("error-50"),"bg-error-strong-hover":ni("error-40"),"bg-inverse":ni("neutral-20"),"bg-inverse-subtle":ni("neutral-30"),"bg-inverse-subtler":ni("neutral-50"),"bg-inverse-subtlest":ni("neutral-60"),"bg-inverse-hover":ni("neutral-40"),"bg-primary":ni("primary-50"),"bg-primary-subtle":ni("primary-60"),"bg-primary-subtler":ni("primary-95"),"bg-primary-subtlest":ni("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":ni("primary-40"),"bg-primary-subtlest-hover":ni("primary-90"),"bg-primary-subtlest-selected":ni("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:ni("primary-50"),"hyperlink-hover":ni("primary-40"),"hyperlink-visited":ni("primary-40"),"hyperlink-inverse":ni("primary-inverse"),"focus-ring":ni("primary-50"),"focus-ring-inverse":ni("white")},di={text:ni("neutral-100"),"text-subtle":ni("neutral-80"),"text-subtler":ni("neutral-60"),"text-subtlest":ni("neutral-50"),"text-primary":ni("primary-60"),"text-primary-strongest":ni("primary-90"),"text-hover":ni("primary-70"),"text-selected":ni("primary-60"),"text-selected-hover":ni("primary-70"),"text-disabled":ni("neutral-60"),"text-disabled-subtle":ni("neutral-50"),"text-disabled-subtlest":ni("neutral-30"),"text-selected-disabled":ni("neutral-90"),"text-success":ni("success-70"),"text-warning":ni("warning-70"),"text-error":ni("error-70"),"text-info":ni("info-70"),"text-inverse":ni("black"),icon:ni("neutral-60"),"icon-subtle":ni("neutral-50"),"icon-strongest":ni("neutral-90"),"icon-primary":ni("primary-60"),"icon-primary-subtle":ni("primary-50"),"icon-primary-subtlest":ni("primary-40"),"icon-hover":ni("primary-70"),"icon-selected":ni("primary-60"),"icon-selected-hover":ni("primary-70"),"icon-disabled":ni("neutral-60"),"icon-disabled-subtle":ni("neutral-50"),"icon-selected-disabled":ni("neutral-50"),"icon-success":ni("success-60"),"icon-warning":ni("warning-50"),"icon-error":ni("error-60"),"icon-error-strong":ni("error-70"),"icon-info":ni("info-60"),"icon-inverse":ni("black"),"icon-primary-inverse":ni("primary-inverse"),border:ni("neutral-20"),"border-strong":ni("neutral-40"),"border-stronger":ni("neutral-60"),"border-primary":ni("primary-60"),"border-primary-subtle":ni("primary-50"),"border-hover":ni("primary-20"),"border-hover-strong":ni("primary-50"),"border-selected":ni("primary-60"),"border-selected-subtle":ni("primary-40"),"border-selected-subtlest":ni("primary-20"),"border-selected-hover":ni("primary-70"),"border-focus":ni("primary-50"),"border-focus-strong":ni("primary-60"),"border-disabled":ni("neutral-20"),"border-selected-disabled":ni("neutral-40"),"border-success":ni("success-50"),"border-warning":ni("warning-50"),"border-error":ni("error-50"),"border-error-focus":ni("error-50"),"border-error-focus-strong":ni("error-70"),"border-error-strong":ni("error-70"),"border-info":ni("info-50"),bg:ni("black"),"bg-strong":ni("neutral-10"),"bg-stronger":ni("neutral-20"),"bg-strongest":ni("neutral-20"),"bg-hover":ni("primary-20"),"bg-hover-strong":ni("primary-20"),"bg-hover-subtle":ni("primary-10"),"bg-hover-neutral":ni("neutral-10"),"bg-hover-neutral-strong":ni("neutral-20"),"bg-selected":ni("primary-20"),"bg-selected-hover":ni("primary-20"),"bg-selected-strong":ni("primary-20"),"bg-selected-stronger":ni("primary-40"),"bg-selected-strongest":ni("primary-60"),"bg-selected-strongest-hover":ni("primary-70"),"bg-disabled":ni("neutral-20"),"bg-selected-disabled":ni("neutral-20"),"bg-selected-stronger-disabled":ni("neutral-40"),"bg-success":ni("success-10"),"bg-success-hover":ni("success-20"),"bg-success-strong":ni("success-60"),"bg-success-strong-hover":ni("success-70"),"bg-warning":ni("warning-10"),"bg-warning-hover":ni("warning-20"),"bg-warning-strong":ni("warning-60"),"bg-warning-strong-hover":ni("warning-70"),"bg-info":ni("info-10"),"bg-info-hover":ni("info-20"),"bg-info-strong":ni("info-60"),"bg-info-strong-hover":ni("info-70"),"bg-error":ni("error-10"),"bg-error-hover":ni("error-20"),"bg-error-strong":ni("error-60"),"bg-error-strong-hover":ni("error-70"),"bg-inverse":ni("neutral-90"),"bg-inverse-subtle":ni("neutral-80"),"bg-inverse-subtler":ni("neutral-60"),"bg-inverse-subtlest":ni("neutral-50"),"bg-inverse-hover":ni("neutral-70"),"bg-primary":ni("primary-60"),"bg-primary-subtle":ni("primary-50"),"bg-primary-subtler":ni("primary-20"),"bg-primary-subtlest":ni("primary-10"),"bg-available":"#185339","bg-primary-hover":ni("primary-70"),"bg-primary-subtlest-hover":ni("primary-20"),"bg-primary-subtlest-selected":ni("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:ni("primary-60"),"hyperlink-hover":ni("primary-70"),"hyperlink-visited":ni("primary-70"),"hyperlink-inverse":ni("primary-inverse"),"focus-ring":ni("primary-60"),"focus-ring-inverse":ni("black")},ci={collections:{lifesg:ii,bookingsg:ii,rbs:ii,mylegacy:ii,ccube:ii,oneservice:ii,pa:si,a11yplayground:li,supportgowhere:ii,imda:ii,spf:ii},defaultValue:"lifesg"},ui={collections:{lifesg:ai,bookingsg:ai,rbs:ai,mylegacy:ai,ccube:ai,oneservice:ai,pa:ai,a11yplayground:di,supportgowhere:ai,imda:ai,spf:ai},defaultValue:"lifesg"},hi=e=>t=>{var r;const n=t.theme,o="dark"===(null==n?void 0:n.colourMode),i=Lo(o?ui:ci,null==n?void 0:n.colourScheme),a=o?"semanticColourDark":"semanticColour",s=null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r[a],l=s?Ro(i,e,s):i[e];return"function"==typeof l?l(t):l},fi={text:hi("text"),"text-subtle":hi("text-subtle"),"text-subtler":hi("text-subtler"),"text-subtlest":hi("text-subtlest"),"text-primary":hi("text-primary"),"text-primary-strongest":hi("text-primary-strongest"),"text-hover":hi("text-hover"),"text-selected":hi("text-selected"),"text-selected-hover":hi("text-selected-hover"),"text-disabled":hi("text-disabled"),"text-disabled-subtle":hi("text-disabled-subtle"),"text-disabled-subtlest":hi("text-disabled-subtlest"),"text-selected-disabled":hi("text-selected-disabled"),"text-success":hi("text-success"),"text-warning":hi("text-warning"),"text-error":hi("text-error"),"text-info":hi("text-info"),"text-inverse":hi("text-inverse"),icon:hi("icon"),"icon-subtle":hi("icon-subtle"),"icon-strongest":hi("icon-strongest"),"icon-primary":hi("icon-primary"),"icon-primary-subtle":hi("icon-primary-subtle"),"icon-primary-subtlest":hi("icon-primary-subtlest"),"icon-hover":hi("icon-hover"),"icon-selected":hi("icon-selected"),"icon-selected-hover":hi("icon-selected-hover"),"icon-disabled":hi("icon-disabled"),"icon-disabled-subtle":hi("icon-disabled-subtle"),"icon-selected-disabled":hi("icon-selected-disabled"),"icon-success":hi("icon-success"),"icon-warning":hi("icon-warning"),"icon-error":hi("icon-error"),"icon-error-strong":hi("icon-error-strong"),"icon-info":hi("icon-info"),"icon-inverse":hi("icon-inverse"),"icon-primary-inverse":hi("icon-primary-inverse"),border:hi("border"),"border-strong":hi("border-strong"),"border-stronger":hi("border-stronger"),"border-primary":hi("border-primary"),"border-primary-subtle":hi("border-primary-subtle"),"border-hover":hi("border-hover"),"border-hover-strong":hi("border-hover-strong"),"border-selected":hi("border-selected"),"border-selected-subtle":hi("border-selected-subtle"),"border-selected-subtlest":hi("border-selected-subtlest"),"border-selected-hover":hi("border-selected-hover"),"border-focus":hi("border-focus"),"border-focus-strong":hi("border-focus-strong"),"border-disabled":hi("border-disabled"),"border-selected-disabled":hi("border-selected-disabled"),"border-success":hi("border-success"),"border-warning":hi("border-warning"),"border-error":hi("border-error"),"border-error-focus":hi("border-error-focus"),"border-error-focus-strong":hi("border-error-focus-strong"),"border-error-strong":hi("border-error-strong"),"border-info":hi("border-info"),bg:hi("bg"),"bg-strong":hi("bg-strong"),"bg-stronger":hi("bg-stronger"),"bg-strongest":hi("bg-strongest"),"bg-hover":hi("bg-hover"),"bg-hover-strong":hi("bg-hover-strong"),"bg-hover-subtle":hi("bg-hover-subtle"),"bg-hover-neutral":hi("bg-hover-neutral"),"bg-hover-neutral-strong":hi("bg-hover-neutral-strong"),"bg-selected":hi("bg-selected"),"bg-selected-hover":hi("bg-selected-hover"),"bg-selected-strong":hi("bg-selected-strong"),"bg-selected-stronger":hi("bg-selected-stronger"),"bg-selected-strongest":hi("bg-selected-strongest"),"bg-selected-strongest-hover":hi("bg-selected-strongest-hover"),"bg-disabled":hi("bg-disabled"),"bg-selected-disabled":hi("bg-selected-disabled"),"bg-selected-stronger-disabled":hi("bg-selected-stronger-disabled"),"bg-success":hi("bg-success"),"bg-success-hover":hi("bg-success-hover"),"bg-success-strong":hi("bg-success-strong"),"bg-success-strong-hover":hi("bg-success-strong-hover"),"bg-warning":hi("bg-warning"),"bg-warning-hover":hi("bg-warning-hover"),"bg-warning-strong":hi("bg-warning-strong"),"bg-warning-strong-hover":hi("bg-warning-strong-hover"),"bg-info":hi("bg-info"),"bg-info-hover":hi("bg-info-hover"),"bg-info-strong":hi("bg-info-strong"),"bg-info-strong-hover":hi("bg-info-strong-hover"),"bg-error":hi("bg-error"),"bg-error-hover":hi("bg-error-hover"),"bg-error-strong":hi("bg-error-strong"),"bg-error-strong-hover":hi("bg-error-strong-hover"),"bg-inverse":hi("bg-inverse"),"bg-inverse-subtle":hi("bg-inverse-subtle"),"bg-inverse-subtler":hi("bg-inverse-subtler"),"bg-inverse-subtlest":hi("bg-inverse-subtlest"),"bg-inverse-hover":hi("bg-inverse-hover"),"bg-primary":hi("bg-primary"),"bg-primary-subtle":hi("bg-primary-subtle"),"bg-primary-subtler":hi("bg-primary-subtler"),"bg-primary-subtlest":hi("bg-primary-subtlest"),"bg-available":hi("bg-available"),"bg-primary-hover":hi("bg-primary-hover"),"bg-primary-subtlest-hover":hi("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":hi("bg-primary-subtlest-selected"),"overlay-strong":hi("overlay-strong"),"overlay-subtle":hi("overlay-subtle"),hyperlink:hi("hyperlink"),"hyperlink-hover":hi("hyperlink-hover"),"hyperlink-visited":hi("hyperlink-visited"),"hyperlink-inverse":hi("hyperlink-inverse"),"focus-ring":hi("focus-ring"),"focus-ring-inverse":hi("focus-ring-inverse")},pi={collections:{default:{solid:e=>t=>{var r,n,o;const{thickness:i,radius:a,colour:s}=e||{},l=null!==(r="function"==typeof i?i(t):i+"px")&&void 0!==r?r:Ho["width-010"](t),d=null!==(n="function"==typeof a?a(t):a+"px")&&void 0!==n?n:0,c=null!==(o="function"==typeof s?s(t):s)&&void 0!==o?o:fi.border(t),u=Ho.solid;return F`
            border: ${l} ${u} ${c};
            border-radius: ${d};
        `},"dashed-default":e=>t=>{var r,n,o;const{thickness:i,radius:a,colour:s}=e||{},l=null!==(r="function"==typeof i?i(t):i)&&void 0!==r?r:Ho["width-010"](t),d=null!==(n="function"==typeof a?a(t):a)&&void 0!==n?n:0,c=null!==(o="function"==typeof s?s(t):s)&&void 0!==o?o:fi.border(t),u=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${d}' ry='${d}' stroke='${c}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return F`
            background-image: url("data:image/svg+xml,${u}");
            border-radius: ${d};
        `}}},defaultValue:"default"},gi=e=>1===e.length&&"theme"in e[0],mi=e=>(...t)=>r=>{const n=gi(t)?[]:t,o=gi(t)?t[0]:r,i=o.theme;return(0,Lo(pi,null==i?void 0:i.borderScheme)[e])(...n)(o)},bi={solid:mi("solid"),"dashed-default":mi("dashed-default")},vi={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":480,"md-min":481,"md-max":768,"lg-min":769,"lg-max":1200,"xl-min":1201,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},yi=e=>t=>{var r;const n=t.theme,o=Lo(vi,null==n?void 0:n.breakpointScheme);let i;return i=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.breakpoint)?Ro(o,e,n.overrides.breakpoint):o[e],i},xi={"xxs-min":yi("xxs-min"),"xxs-max":yi("xxs-max"),"xs-min":yi("xs-min"),"xs-max":yi("xs-max"),"sm-min":yi("sm-min"),"sm-max":yi("sm-max"),"md-min":yi("md-min"),"md-max":yi("md-max"),"lg-min":yi("lg-min"),"lg-max":yi("lg-max"),"xl-min":yi("xl-min"),"xl-max":yi("xl-max"),"xxl-min":yi("xxl-min"),"xxs-column":yi("xxs-column"),"xs-column":yi("xs-column"),"sm-column":yi("sm-column"),"md-column":yi("md-column"),"lg-column":yi("lg-column"),"xl-column":yi("xl-column"),"xxl-column":yi("xxl-column"),"xxs-gutter":yi("xxs-gutter"),"xs-gutter":yi("xs-gutter"),"sm-gutter":yi("sm-gutter"),"md-gutter":yi("md-gutter"),"lg-gutter":yi("lg-gutter"),"xl-gutter":yi("xl-gutter"),"xxl-gutter":yi("xxl-gutter"),"xxs-margin":yi("xxs-margin"),"xs-margin":yi("xs-margin"),"sm-margin":yi("sm-margin"),"md-margin":yi("md-margin"),"lg-margin":yi("lg-margin"),"xl-margin":yi("xl-margin"),"xxl-margin":yi("xxl-margin")},wi=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((t,r)=>(t[r]=((e,t)=>{const r=xi["max-width"===e?`${t}-max`:`${t}-min`];return t=>{const n=r(t);return`@media screen and (${e}: ${n}px)`}})(e,r),t)),{}),$i={MaxWidth:wi("max-width"),MinWidth:wi("min-width")},Ci={collections:{default:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},bookingsg:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},mylegacy:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0.009rem"},pa:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.5rem","heading-size-sm":"1.25rem","heading-size-xs":"1rem","heading-lh-xxl":"3rem","heading-lh-xl":"2.5rem","heading-lh-lg":"2.25rem","heading-lh-md":"2rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.032rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.625rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.25rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},a11yplayground:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Atkinson Hyperlegible Next","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0.009rem"},supportgowhere:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Libre Franklin","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},sgwdigitallobby:{"heading-size-xxl":"3.75rem","heading-size-xl":"3rem","heading-size-lg":"2.5rem","heading-size-md":"2rem","heading-size-sm":"1.625rem","heading-size-xs":"1.375rem","heading-lh-xxl":"4.5rem","heading-lh-xl":"3.5rem","heading-lh-lg":"3rem","heading-lh-md":"2.5rem","heading-lh-sm":"2.25rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.035em","heading-ls-lg":"-0.02rem","heading-ls-md":"-0.02rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Libre Franklin","body-size-baseline":"1.375rem","body-size-md":"1.2rem","body-size-sm":"1.125rem","body-size-xs":"1rem","body-lh-baseline":"1.75rem","body-lh-md":"1.625rem","body-lh-sm":"1.625rem","body-lh-xs":"1.5rem","body-ls-baseline":"0rem","body-ls-md":"0rem","body-ls-sm":"0rem","body-ls-xs":"0.009rem","form-label-size":"1.25rem","form-description-size":"1.125rem","form-label-lh":"1.625rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0rem"},imda:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Montserrat","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},spf:{"heading-size-xxl":"3.75rem","heading-size-xl":"3rem","heading-size-lg":"2.5rem","heading-size-md":"2rem","heading-size-sm":"1.75rem","heading-size-xs":"1.5rem","heading-lh-xxl":"4.5rem","heading-lh-xl":"3.5rem","heading-lh-lg":"3rem","heading-lh-md":"2.25rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Public Sans","body-size-baseline":"1.2rem","body-size-md":"1.125rem","body-size-sm":"1rem","body-size-xs":"0.875rem","body-lh-baseline":"1.5rem","body-lh-md":"1.5rem","body-lh-sm":"1.5rem","body-lh-xs":"1.125rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},oneservice:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.375rem","heading-size-sm":"1.125rem","heading-size-xs":"1rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.625rem","heading-lh-md":"2rem","heading-lh-sm":"1.625rem","heading-lh-xs":"1.5rem","heading-ls-xxl":"0rem","heading-ls-xl":"0rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.75rem","body-lh-baseline":"1.5rem","body-lh-md":"1.313rem","body-lh-sm":"1.125rem","body-lh-xs":"1.125rem","body-ls-baseline":"0rem","body-ls-md":"0rem","body-ls-sm":"0rem","body-ls-xs":"0rem","form-label-size":"0.875rem","form-description-size":"0.875rem","form-label-lh":"1.313rem","form-description-lh":"1.313rem","form-label-ls":"0rem","form-description-ls":"0rem"}},defaultValue:"default"},Si=e=>t=>{var r;const n=t.theme,o=Lo(Ci,null==n?void 0:n.fontScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.fontSpec)?Ro(o,e,n.overrides.fontSpec):o[e]},Di={"heading-size-xxl":Si("heading-size-xxl"),"heading-size-xl":Si("heading-size-xl"),"heading-size-lg":Si("heading-size-lg"),"heading-size-md":Si("heading-size-md"),"heading-size-sm":Si("heading-size-sm"),"heading-size-xs":Si("heading-size-xs"),"heading-lh-xxl":Si("heading-lh-xxl"),"heading-lh-xl":Si("heading-lh-xl"),"heading-lh-lg":Si("heading-lh-lg"),"heading-lh-md":Si("heading-lh-md"),"heading-lh-sm":Si("heading-lh-sm"),"heading-lh-xs":Si("heading-lh-xs"),"heading-ls-xxl":Si("heading-ls-xxl"),"heading-ls-xl":Si("heading-ls-xl"),"heading-ls-lg":Si("heading-ls-lg"),"heading-ls-md":Si("heading-ls-md"),"heading-ls-sm":Si("heading-ls-sm"),"heading-ls-xs":Si("heading-ls-xs"),"weight-light":Si("weight-light"),"weight-regular":Si("weight-regular"),"weight-semibold":Si("weight-semibold"),"weight-bold":Si("weight-bold"),"font-family":Si("font-family"),"body-size-baseline":Si("body-size-baseline"),"body-size-md":Si("body-size-md"),"body-size-sm":Si("body-size-sm"),"body-size-xs":Si("body-size-xs"),"body-lh-baseline":Si("body-lh-baseline"),"body-lh-md":Si("body-lh-md"),"body-lh-sm":Si("body-lh-sm"),"body-lh-xs":Si("body-lh-xs"),"body-ls-baseline":Si("body-ls-baseline"),"body-ls-md":Si("body-ls-md"),"body-ls-sm":Si("body-ls-sm"),"body-ls-xs":Si("body-ls-xs"),"form-label-size":Si("form-label-size"),"form-description-size":Si("form-description-size"),"form-label-lh":Si("form-label-lh"),"form-description-lh":Si("form-description-lh"),"form-label-ls":Si("form-label-ls"),"form-description-ls":Si("form-description-ls")},ki=(e,t,r,n,o)=>{const{disableLigatures:i}=o||{};return F`
        font-family: ${Si("font-family")};
        font-size: ${Si(e)};
        font-weight: ${Si(t)};
        line-height: ${Si(r)};
        letter-spacing: ${Si(n)};

        font-variant: ${i?"no-common-ligatures":"normal"};
    `},Fi=(e={})=>({"heading-xxl-light":ki("heading-size-xxl","weight-light","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-regular":ki("heading-size-xxl","weight-regular","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-semibold":ki("heading-size-xxl","weight-semibold","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-bold":ki("heading-size-xxl","weight-bold","heading-lh-xxl","heading-ls-xxl",e),"heading-xl-light":ki("heading-size-xl","weight-light","heading-lh-xl","heading-ls-xl",e),"heading-xl-regular":ki("heading-size-xl","weight-regular","heading-lh-xl","heading-ls-xl",e),"heading-xl-semibold":ki("heading-size-xl","weight-semibold","heading-lh-xl","heading-ls-xl",e),"heading-xl-bold":ki("heading-size-xl","weight-bold","heading-lh-xl","heading-ls-xl",e),"heading-lg-light":ki("heading-size-lg","weight-light","heading-lh-lg","heading-ls-lg",e),"heading-lg-regular":ki("heading-size-lg","weight-regular","heading-lh-lg","heading-ls-lg",e),"heading-lg-semibold":ki("heading-size-lg","weight-semibold","heading-lh-lg","heading-ls-lg",e),"heading-lg-bold":ki("heading-size-lg","weight-bold","heading-lh-lg","heading-ls-lg",e),"heading-md-light":ki("heading-size-md","weight-light","heading-lh-md","heading-ls-md",e),"heading-md-regular":ki("heading-size-md","weight-regular","heading-lh-md","heading-ls-md",e),"heading-md-semibold":ki("heading-size-md","weight-semibold","heading-lh-md","heading-ls-md",e),"heading-md-bold":ki("heading-size-md","weight-bold","heading-lh-md","heading-ls-md",e),"heading-sm-light":ki("heading-size-sm","weight-light","heading-lh-sm","heading-ls-sm",e),"heading-sm-regular":ki("heading-size-sm","weight-regular","heading-lh-sm","heading-ls-sm",e),"heading-sm-semibold":ki("heading-size-sm","weight-semibold","heading-lh-sm","heading-ls-sm",e),"heading-sm-bold":ki("heading-size-sm","weight-bold","heading-lh-sm","heading-ls-sm",e),"heading-xs-light":ki("heading-size-xs","weight-light","heading-lh-xs","heading-ls-xs",e),"heading-xs-regular":ki("heading-size-xs","weight-regular","heading-lh-xs","heading-ls-xs",e),"heading-xs-semibold":ki("heading-size-xs","weight-semibold","heading-lh-xs","heading-ls-xs",e),"heading-xs-bold":ki("heading-size-xs","weight-bold","heading-lh-xs","heading-ls-xs",e),"body-baseline-light":ki("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline",e),"body-baseline-regular":ki("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline",e),"body-baseline-semibold":ki("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline",e),"body-baseline-bold":ki("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline",e),"body-md-light":ki("body-size-md","weight-light","body-lh-md","body-ls-md",e),"body-md-regular":ki("body-size-md","weight-regular","body-lh-md","body-ls-md",e),"body-md-semibold":ki("body-size-md","weight-semibold","body-lh-md","body-ls-md",e),"body-md-bold":ki("body-size-md","weight-bold","body-lh-md","body-ls-md",e),"body-sm-light":ki("body-size-sm","weight-light","body-lh-sm","body-ls-sm",e),"body-sm-regular":ki("body-size-sm","weight-regular","body-lh-sm","body-ls-sm",e),"body-sm-semibold":ki("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm",e),"body-sm-bold":ki("body-size-sm","weight-bold","body-lh-sm","body-ls-sm",e),"body-xs-light":ki("body-size-xs","weight-light","body-lh-xs","body-ls-xs",e),"body-xs-regular":ki("body-size-xs","weight-regular","body-lh-xs","body-ls-xs",e),"body-xs-semibold":ki("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs",e),"body-xs-bold":ki("body-size-xs","weight-bold","body-lh-xs","body-ls-xs",e),"form-label":ki("form-label-size","weight-semibold","form-label-lh","form-label-ls",e),"form-description":ki("form-description-size","weight-regular","form-description-lh","form-description-ls",e)}),_i=Fi({disableLigatures:!0}),Ei=Fi(),Oi=Fi({disableLigatures:!0}),Ti=Fi({disableLigatures:!0}),Ii=Fi({disableLigatures:!0}),Mi={collections:{default:Ei,bookingsg:_i,mylegacy:Ei,pa:Oi,a11yplayground:Ti,supportgowhere:Ii,sgwdigitallobby:Ii,imda:Fi({disableLigatures:!0}),spf:Fi({disableLigatures:!0}),oneservice:Fi()},defaultValue:"default"},Ai=e=>t=>{var r;const n=t.theme,o=Lo(Mi,null==n?void 0:n.fontScheme),i=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.font)?Ro(o,e,n.overrides.font):o[e];return"function"==typeof i?i(t):i},Bi={"heading-xxl-light":Ai("heading-xxl-light"),"heading-xxl-regular":Ai("heading-xxl-regular"),"heading-xxl-semibold":Ai("heading-xxl-semibold"),"heading-xxl-bold":Ai("heading-xxl-bold"),"heading-xl-light":Ai("heading-xl-light"),"heading-xl-regular":Ai("heading-xl-regular"),"heading-xl-semibold":Ai("heading-xl-semibold"),"heading-xl-bold":Ai("heading-xl-bold"),"heading-lg-light":Ai("heading-lg-light"),"heading-lg-regular":Ai("heading-lg-regular"),"heading-lg-semibold":Ai("heading-lg-semibold"),"heading-lg-bold":Ai("heading-lg-bold"),"heading-md-light":Ai("heading-md-light"),"heading-md-regular":Ai("heading-md-regular"),"heading-md-semibold":Ai("heading-md-semibold"),"heading-md-bold":Ai("heading-md-bold"),"heading-sm-light":Ai("heading-sm-light"),"heading-sm-regular":Ai("heading-sm-regular"),"heading-sm-semibold":Ai("heading-sm-semibold"),"heading-sm-bold":Ai("heading-sm-bold"),"heading-xs-light":Ai("heading-xs-light"),"heading-xs-regular":Ai("heading-xs-regular"),"heading-xs-semibold":Ai("heading-xs-semibold"),"heading-xs-bold":Ai("heading-xs-bold"),"body-baseline-light":Ai("body-baseline-light"),"body-baseline-regular":Ai("body-baseline-regular"),"body-baseline-semibold":Ai("body-baseline-semibold"),"body-baseline-bold":Ai("body-baseline-bold"),"body-md-light":Ai("body-md-light"),"body-md-regular":Ai("body-md-regular"),"body-md-semibold":Ai("body-md-semibold"),"body-md-bold":Ai("body-md-bold"),"body-sm-light":Ai("body-sm-light"),"body-sm-regular":Ai("body-sm-regular"),"body-sm-semibold":Ai("body-sm-semibold"),"body-sm-bold":Ai("body-sm-bold"),"body-xs-light":Ai("body-xs-light"),"body-xs-regular":Ai("body-xs-regular"),"body-xs-semibold":Ai("body-xs-semibold"),"body-xs-bold":Ai("body-xs-bold"),"form-label":Ai("form-label"),"form-description":Ai("form-description")},zi={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},ji=e=>t=>{var r;const n=t.theme,o=Lo(zi,null==n?void 0:n.motionScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.motion)?Ro(o,e,n.overrides.motion):o[e]},Ri={"duration-150":ji("duration-150"),"duration-250":ji("duration-250"),"duration-350":ji("duration-350"),"duration-500":ji("duration-500"),"duration-800":ji("duration-800"),"duration-1000":ji("duration-1000"),"ease-default":ji("ease-default"),"ease-standard":ji("ease-standard"),"ease-entrance":ji("ease-entrance"),"ease-exit":ji("ease-exit")},Li={collections:{default:{none:0,xs:2,sm:4,md:8,lg:12,full:9999},spf:{none:0,xs:2,sm:8,md:8,lg:12,full:9999}},defaultValue:"default"},Pi=e=>t=>{var r;const n=t.theme,o=Lo(Li,null==n?void 0:n.radiusScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.radius)?`${Ro(o,e,n.overrides.radius)}px`:`${o[e]}px`},Ni={none:Pi("none"),xs:Pi("xs"),sm:Pi("sm"),md:Pi("md"),lg:Pi("lg"),full:Pi("full")},Hi=(e,t,r)=>n=>{const o=hi(t)(n)||ni(t)(n);return`${e} rgba(from ${o} r g b / ${100*r}%)`},Wi={collections:{default:{"xs-subtle":Hi("0 0 4px 1px","neutral-50",.24),"xs-strong":Hi("0 0 4px 1px","neutral-50",.5),"xs-focus-strong":Hi("0 0 4px 1px","border-focus",.5),"xs-error-strong":Hi("0 0 4px 1px","border-error",.5),"sm-subtle":Hi("0 2px 4px 0","neutral-50",.24),"sm-strong":Hi("0 2px 4px 0","neutral-50",.5),"md-subtle":Hi("0 2px 8px 0","neutral-50",.24),"md-strong":Hi("0 2px 8px 0","neutral-50",.5),"lg-subtle":Hi("0 2px 12px 1px","neutral-50",.24),"lg-strong":Hi("0 2px 12px 1px","neutral-50",.5)}},defaultValue:"default"},Yi=e=>t=>{var r;const n=t.theme,o=Lo(Wi,null==n?void 0:n.shadowScheme),i=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.shadow)?Ro(o,e,n.overrides.shadow):o[e];return"function"==typeof i?i(t):i},Vi={"xs-subtle":Yi("xs-subtle"),"xs-strong":Yi("xs-strong"),"xs-focus-strong":Yi("xs-focus-strong"),"xs-error-strong":Yi("xs-error-strong"),"sm-subtle":Yi("sm-subtle"),"sm-strong":Yi("sm-strong"),"md-subtle":Yi("md-subtle"),"md-strong":Yi("md-strong"),"lg-subtle":Yi("lg-subtle"),"lg-strong":Yi("lg-strong")},Ui={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},Ki=e=>t=>{var r;const n=t.theme,o=Lo(Ui,null==n?void 0:n.spacingScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.spacing)?`${Ro(o,e,n.overrides.spacing)}px`:`${o[e]}px`},qi={"spacing-0":Ki("spacing-0"),"spacing-4":Ki("spacing-4"),"spacing-8":Ki("spacing-8"),"spacing-12":Ki("spacing-12"),"spacing-16":Ki("spacing-16"),"spacing-20":Ki("spacing-20"),"spacing-24":Ki("spacing-24"),"spacing-32":Ki("spacing-32"),"spacing-40":Ki("spacing-40"),"spacing-48":Ki("spacing-48"),"spacing-64":Ki("spacing-64"),"spacing-72":Ki("spacing-72"),"layout-xs":Ki("layout-xs"),"layout-sm":Ki("layout-sm"),"layout-md":Ki("layout-md"),"layout-lg":Ki("layout-lg"),"layout-xl":Ki("layout-xl"),"layout-xxl":Ki("layout-xxl"),"layout-xxxl":Ki("layout-xxxl")},Zi=(e,t)=>Object.assign(Object.assign({},e),{colourMode:t}),Gi=Object.assign(Object.assign({},fi),{Primitive:oi}),Qi=Object.assign(Object.assign({},Bi),{Spec:Di}),Xi=Ri,Ji=Object.assign(Object.assign({},Ho),{Util:bi}),ea=qi,ta=Ni,ra=Vi,na=xi,oa=$i,ia={colourScheme:"lifesg",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"lifesg",componentScheme:"lifesg",_v2:{colorScheme:"base",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"base"}},aa={colourScheme:"bookingsg",fontScheme:"bookingsg",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"bookingsg",_v2:{colorScheme:"bookingsg",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"bookingsg"}},sa={colourScheme:"ccube",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"ccube",_v2:{colorScheme:"ccube",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"ccube"}},la={colourScheme:"mylegacy",fontScheme:"mylegacy",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"mylegacy",_v2:{colorScheme:"mylegacy",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"mylegacy"}},da={colourScheme:"rbs",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"rbs",_v2:{colorScheme:"rbs",textStyleScheme:"base",designTokenScheme:"rbs",resourceScheme:"rbs"}},ca={colourScheme:"oneservice",fontScheme:"oneservice",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"oneservice"},ua={colourScheme:"pa",fontScheme:"pa",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"pa",componentScheme:"pa"},ha={colourScheme:"a11yplayground",fontScheme:"a11yplayground",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"a11yplayground",componentScheme:"a11yplayground"},fa={colourScheme:"supportgowhere",fontScheme:"supportgowhere",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"supportgowhere",componentScheme:"default"},pa={colourScheme:"supportgowhere",fontScheme:"sgwdigitallobby",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"supportgowhere",componentScheme:"default"},ga={colourScheme:"imda",fontScheme:"imda",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"imda",componentScheme:"default"},ma={colourScheme:"spf",fontScheme:"spf",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"spf",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"spf",componentScheme:"spf"};Object.assign(Object.assign({},ia),{light:Zi(ia,"light"),dark:Zi(ia,"dark")}),Object.assign(Object.assign({},aa),{light:Zi(aa,"light"),dark:Zi(aa,"dark")}),Object.assign(Object.assign({},sa),{light:Zi(sa,"light"),dark:Zi(sa,"dark")}),Object.assign(Object.assign({},la),{light:Zi(la,"light"),dark:Zi(la,"dark")}),Object.assign(Object.assign({},da),{light:Zi(da,"light"),dark:Zi(da,"dark")}),Object.assign(Object.assign({},ca),{light:Zi(ca,"light"),dark:Zi(ca,"dark")}),Object.assign(Object.assign({},ua),{light:Zi(ua,"light"),dark:Zi(ua,"dark")}),Object.assign(Object.assign({},ha),{light:Zi(ha,"light"),dark:Zi(ha,"dark")}),Object.assign(Object.assign({},fa),{light:Zi(fa,"light"),dark:Zi(fa,"dark")}),Object.assign(Object.assign({},pa),{light:Zi(pa,"light"),dark:Zi(pa,"dark")}),Object.assign(Object.assign({},ga),{light:Zi(ga,"light"),dark:Zi(ga,"dark")}),Object.assign(Object.assign({},ma),{light:Zi(ma,"light"),dark:Zi(ma,"dark")});const ba=e=>F`
    display: -webkit-box;
    -webkit-line-clamp: ${e};
    -webkit-box-orient: vertical;
    overflow: hidden;
`,va=(e,t,r=!1)=>F`
        ${Qi[`${e}-${t}`]}
        ${r?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `,ya=e=>{if(e)return F`
            ${ba(e)}
        `},xa=(e,t,r,n,o)=>F`
    ${va(e,t||"regular",n)}
    ${((e=!1,t=!1,r)=>t?F`
            display: block;
            ${ya(r)}
        `:e?F`
            display: inline;
        `:F`
            display: block;
            ${ya(r)}
        `)(r,n,o)}
    color: ${Gi.text};
`,wa=k.div`
    ${e=>xa(e.$textStyle,e.$weight,e.$inline,e.$paragraph,e.$maxLines)}
`,$a=k.a`
    ${e=>{var t;return F`
        ${va(e.$textStyle,e.$weight||"regular")}
        color: ${Gi.hyperlink};
        text-decoration: ${null!==(t=e.$underlineStyle)&&void 0!==t?t:"underline"};

        &:hover,
        &:active,
        &:focus {
            color: ${Gi["text-hover"]};
        }
    `}}
`,Ca=k(I)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`;var Sa;!function(r){const n=(t,r,n)=>{const i=(n,o)=>{var{weight:i,inline:a,paragraph:s,maxLines:l}=n,d=_e(n,["weight","inline","paragraph","maxLines"]);return e(wa,Object.assign({ref:o,as:a?"span":t,$textStyle:r,$weight:i,$inline:a,$paragraph:s,$maxLines:l},d))};return i.displayName=`Typography.${n}`,o.forwardRef(i)};r.HeadingXXL=n("h1","heading-xxl","HeadingXXL"),r.HeadingXL=n("h2","heading-xl","HeadingXL"),r.HeadingLG=n("h3","heading-lg","HeadingLG"),r.HeadingMD=n("h4","heading-md","HeadingMD"),r.HeadingSM=n("h5","heading-sm","HeadingSM"),r.HeadingXS=n("h6","heading-xs","HeadingXS");const i=(t,r)=>{const n=(r,n)=>{var{weight:o,inline:i,paragraph:a,maxLines:s}=r,l=_e(r,["weight","inline","paragraph","maxLines"]);return e(wa,Object.assign({ref:n,as:i?"span":"p",$textStyle:t,$weight:o,$inline:i,$paragraph:a,$maxLines:s},l))};return n.displayName=`Typography.${r}`,o.forwardRef(n)};r.BodyBL=i("body-baseline","BodyBL"),r.BodyMD=i("body-md","BodyMD"),r.BodySM=i("body-sm","BodySM"),r.BodyXS=i("body-xs","BodyXS");const a=(r,n)=>{const i=(n,o)=>{var{weight:i,children:a,external:s,underlineStyle:l="underline"}=n,d=_e(n,["weight","children","external","underlineStyle"]);return t($a,Object.assign({ref:o,$textStyle:r,$weight:i,$underlineStyle:l},d,{children:[a,s&&e(Ca,{})]}))};return i.displayName=`Typography.${n}`,o.forwardRef(i)};r.LinkBL=a("body-baseline","LinkBL"),r.LinkMD=a("body-md","LinkMD"),r.LinkSM=a("body-sm","LinkSM"),r.LinkXS=a("body-xs","LinkXS")}(Sa||(Sa={}));const Da=k.div`
    border-radius: ${ta.md};
    background: ${Gi.bg};
    padding: ${ea["spacing-16"]} ${ea["spacing-32"]};
    ${e=>{var t;return"dark"===(null===(t=e.theme)||void 0===t?void 0:t.colourMode)?F`
                  border: ${Ji["width-010"]} ${Ji.solid}
                      ${Gi.border};
              `:F`
                  box-shadow: ${ra["md-subtle"]};
              `}}
`,ka=k.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${ea["spacing-24"]};
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
                background-color: ${Gi["bg-hover-neutral"]};
            `}
    }
`,Fa=o.forwardRef(((t,r)=>{var{children:n,focusHighlight:o=!0,focusOutline:i="none",type:a="button"}=t,s=_e(t,["children","focusHighlight","focusOutline","type"]);return e(ka,Object.assign({ref:r,$outline:i,$highlight:o,type:a},s,{children:n}))})),_a=k.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${Gi.bg};
    box-shadow: ${ra["lg-strong"]};
    border-radius: ${ta.lg};
    overflow: hidden;

    ${oa.MaxWidth.md} {
        width: 90%;
        max-height: 70%;
    }
`,Ea=k(Fa)`
    position: absolute;
    top: var(--close-button-top-inset, ${ea["spacing-16"]});
    right: var(--close-button-right-inset, ${ea["spacing-16"]});
    padding: 0;
    color: ${Gi.icon};

    svg {
        height: 2rem;
        width: 2rem;
    }

    ${oa.MaxWidth.sm} {
        right: var(--close-button-right-inset, ${ea["spacing-20"]});
    }
`,Oa=r=>{var{id:n="modal-box",children:o,onClose:i,showCloseButton:a=!0}=r,s=_e(r,["id","children","onClose","showCloseButton"]);return t(_a,Object.assign({"data-testid":n},s,{onClick:e=>{e.stopPropagation()},children:[a&&e(Ea,{onClick:i,"data-testid":"close-button",focusHighlight:!1,focusOutline:"browser",children:e(M,{})}),o]}))},Ta=e=>{const{textSize:t}=e||{};return F`
        // Text styling
        ${t&&Qi[`${t}-regular`]}

        strong {
            font-weight: ${Qi.Spec["weight-semibold"]};
            ${t&&Qi[`${t}-semibold`]};
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-weight: ${Qi.Spec["weight-semibold"]};
            ${t&&Qi[`${t}-semibold`]}
            color: ${Gi.hyperlink};
            text-decoration: underline;

            svg {
                color: ${Gi["icon-primary"]};
                height: 1lh;
                width: 1em;
                margin-left: 0.4rem;
                vertical-align: middle;
            }

            &:hover,
            &:active,
            &:visited,
            &:focus {
                color: ${Gi["hyperlink-hover"]};

                svg {
                    color: ${Gi["icon-hover"]};
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
    `},Ia=k.div`
    max-width: 30rem;
    padding: 0 1rem;
    pointer-events: auto;
    outline: none;
`,Ma=k((t=>{var{children:r}=t,n=_e(t,["children"]);const o=n["data-testid"]||"card";return e(Da,Object.assign({},n,{"data-testid":o,children:"string"==typeof r?e(Sa.BodyBL,{children:r}):r}))}))`
    color: ${Gi.text};
    ${Ta({textSize:"body-md"})}

    ${oa.MaxWidth.sm} {
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
        background: ${Gi["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: ${ta.full};
        background-clip: padding-box;
    }
`;k(Oa)`
    padding: 3.5rem 1.25rem 2.5rem;
`,k.div`
    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    color: ${Gi.text};
    ${Ta({textSize:"body-md"})}
`;const Aa=k.div`
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
    background-color: ${e=>e.$stacked?Gi["overlay-subtle"]:Gi["overlay-strong"]};
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
`;var za;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(za||(za={}));const ja=()=>{const[e,t]=s(void 0),r=A();return h((()=>{if(!r)return void t(void 0);const e=e=>{t(e.zIndex)};return r.events.on(za.Change,e),r.events.emit(za.Ready),()=>r.events.off(za.Change,e)}),[r]),e},Ra=({show:t=!1,rootId:r,onOverlayClick:n,children:i,backgroundOpacity:l,backgroundBlur:d=!0,disableTransition:c=!1,enableOverlayClick:u=!1,zIndex:f,id:p})=>{const[g,m]=s(null),[b,v]=s(),[y]=s((()=>tt.generate())),x=z(),w=a(),$=a(null),C=i&&o.cloneElement(i,{ref:$}),S=p?`lifesg-ds-overlay-root-${p}`:"lifesg-ds-overlay-root",D=null!=f?f:b?99999:99998;(e=>{const t=A();h((()=>{if(!t)return;const r={zIndex:e};t.events.emit(za.Change,r)}),[t,e]),h((()=>{if(!t)return;const r=()=>{const r={zIndex:e};t.events.emit(za.Change,r)};return null==t||t.events.on(za.Ready,r),()=>null==t?void 0:t.events.off(za.Ready,r)}),[t,e])})(D),h((()=>(O(),m(_()),()=>{B(),I().length<1&&(R("remove"),P(),T("remove"))})),[]),h((()=>{if(t){const e=E();k(e),M(),F()&&1===I().length&&(L(),R("add"));const t=setTimeout((()=>{T("add")}),200);return()=>clearTimeout(t)}{B(),F()&&I().length<1&&(R("remove"),P());const e=setTimeout((()=>{I().length<1&&T("remove")}),200);return()=>clearTimeout(e)}}),[t]);const k=e=>{w.current=e,v(e)},F=()=>/(iPad|iPhone|iPod)/g.test(navigator.userAgent),_=()=>document&&r?document.getElementById(r):document?document.body:null,E=()=>I().length>0,O=()=>{if(!document.getElementById(Pa)){const e=document.createElement("style");e.id=Pa;const t=document.documentElement.clientWidth,r=window.innerWidth-t;e.innerHTML=`\n\t\t\t\t.${Na} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${r}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${Na}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\n\t\t\t\t.${Ha} {\n\t\t\t\t\tposition: fixed;\n\t\t\t\t\ttop: var(${Wa}, 0);\n\t\t\t\t\tbottom: 0;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},T=e=>{const t=document.body.classList.contains(Na);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove(Na):document.body.classList.add(Na)},I=()=>{const e=document.body.dataset.lifesgDsOverlayOrder;return e?e.split(","):[]},M=()=>{const e=I();document.body.dataset.lifesgDsOverlayOrder=[...e,y].join(",")},B=()=>{const e=I();document.body.dataset.lifesgDsOverlayOrder=e.filter((e=>e!==y)).join(",")},R=e=>{if(!F())return;const t=document.body.classList.contains(Ha);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove(Ha):document.body.classList.add(Ha)},L=()=>{const e=document.body.style,t=e.top?e.top:window.scrollY+"px";document.body.style.setProperty(Wa,t)},P=()=>{const e=document.body.style.getPropertyValue(Wa);requestAnimationFrame((()=>{window.scrollTo({top:parseFloat(e)})}))},N=e=>{var t;const r=null===(t=$.current)||void 0===t?void 0:t.firstChild;r&&r.contains(e.target)||n&&u&&(e.preventDefault(),n())};return g?ee.createPortal(e(Aa,{id:S,"data-testid":S,$show:t,$zIndex:D,children:i&&e(j,{id:x,children:e(Ba,{"data-testid":"overlay-wrapper",$show:t,$stacked:b,$backgroundBlur:d,$disableTransition:c,onClick:N,children:C})})}),g):null},La=t=>e(B,{children:e(Ra,Object.assign({},t))}),Pa="lifesg-ds-overlay-stylesheet",Na="lifesg-ds-overlay-open",Ha="lifesg-ds-overlay-scroll-lock",Wa="--lifesg-ds-overlay-scroll-y",Ya=()=>{const[e,t]=s(),[r,n]=s(),o=p((()=>{const e=.01*window.innerHeight;t(e)}),[]),i=p((()=>{if(window.visualViewport){const e=.01*window.visualViewport.height;t(e),n(window.visualViewport.offsetTop)}}),[]);return h((()=>window.visualViewport?(i(),window.visualViewport.addEventListener("resize",i),()=>{var e;null===(e=window.visualViewport)||void 0===e||e.removeEventListener("resize",i)}):(o(),window.addEventListener("resize",o),()=>{window.removeEventListener("resize",o)})),[]),{verticalHeight:e,offsetTop:r}},Va=g({onClose:()=>{}}),Ua=k.div`
    position: relative;
    width: 100%;
    height: 100%;

    overflow: auto;

    ${oa.MaxWidth.sm} {
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
`,Ka=k.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100%;
    pointer-events: none;
`,qa=k.div`
    pointer-events: auto;
    width: 100%;
    outline: none;
`,Za=k.div`
    width: 40rem;
    margin: ${ea["spacing-64"]} auto;
    background: ${Gi.bg};
    box-shadow: ${ra["xs-strong"]};
    border-radius: ${ta.lg};

    display: flex;
    flex-direction: column-reverse;

    max-width: calc(100% - ${na["xxl-margin"]}px * 2);

    ${oa.MaxWidth.xl} {
        max-width: calc(100% - ${na["xl-margin"]}px * 2);
    }

    ${oa.MaxWidth.lg} {
        max-width: calc(100% - ${na["lg-margin"]}px * 2);
    }

    ${oa.MaxWidth.md} {
        max-width: calc(100% - ${na["md-margin"]}px * 2);
    }

    ${oa.MaxWidth.sm} {
        max-width: calc(100% - ${na["sm-margin"]}px * 2);
    }

    ${oa.MaxWidth.xs} {
        max-width: calc(100% - ${na["xs-margin"]}px * 2);
    }

    ${oa.MaxWidth.xxs} {
        max-width: calc(100% - ${na["xxs-margin"]}px * 2);
    }
`,Ga=k.div`
    margin-right: ${ea["spacing-16"]};
    margin-left: auto;
    margin-top: ${ea["spacing-16"]};
    margin-bottom: ${ea["spacing-16"]};
`,Qa=k(Fa)`
    padding: 0;
    color: ${Gi.icon};

    svg {
        height: 2rem;
        width: 2rem;
    }
`,Xa=k.div`
    margin-right: ${ea["spacing-64"]};
    margin-left: ${ea["spacing-64"]};

    ${oa.MaxWidth.sm} {
        margin-right: ${ea["spacing-20"]};
        margin-left: ${ea["spacing-20"]};
    }
`,Ja=k.div`
    margin-right: ${ea["spacing-64"]};
    margin-left: ${ea["spacing-64"]};

    ${oa.MaxWidth.sm} {
        margin-right: ${ea["spacing-20"]};
        margin-left: ${ea["spacing-20"]};
    }

    display: flex;
    flex-direction: row-reverse; /* primary button on right */
    column-gap: ${ea["spacing-32"]};
    row-gap: ${ea["spacing-16"]};

    & > button {
        flex: 1;
    }

    ${oa.MaxWidth.md} {
        flex-direction: column;
    }
`,es=k.div`
    :where(& > ${Xa}:last-child) {
        margin-bottom: ${ea["spacing-64"]};
    }

    :where(& > ${Ja}:not(:first-child)) {
        margin-top: ${ea["spacing-32"]};
    }

    :where(& > ${Ja}:last-child) {
        margin-bottom: ${ea["spacing-64"]};
    }

    ${e=>e.$hasCloseButton?F`
                  :where(& > ${Xa}:first-child),
                  :where(& > ${Ja}:first-child) {
                      margin-top: 0;
                  }
              `:F`
                  :where(& > ${Xa}:first-child),
                  :where(& > ${Ja}:first-child) {
                      margin-top: ${ea["spacing-64"]};
                  }
              `}
`,ts=t=>{var{"data-testid":r="modal-close-button"}=t,n=_e(t,["data-testid"]);const{onClose:o}=m(Va);return e(Ga,Object.assign({"data-testid":r},n,{children:e(Qa,{onClick:o,"data-testid":"close-button",focusHighlight:!1,focusOutline:"browser","aria-label":"Close button",children:e(M,{"aria-hidden":!0})})}))};ts.displayName="ModalV2.CloseButton";const rs=t=>{var{"data-testid":r="modal-content",children:n}=t,o=_e(t,["data-testid","children"]);return e(Xa,Object.assign({"data-testid":r},o,{children:n}))};rs.displayName="ModalV2.Content";const ns=e=>{var{"data-testid":r="modal-footer",primaryButton:n,secondaryButton:o}=e,i=_e(e,["data-testid","primaryButton","secondaryButton"]);return t(Ja,Object.assign({"data-testid":r},i,{children:[n,o]}))};ns.displayName="ModalV2.Footer";const os=e=>{var{id:r,"data-testid":n="modal-card",children:i}=e,a=_e(e,["id","data-testid","children"]);const s=e=>o.Children.toArray(i).find((t=>((e,t)=>_(e.type)?e.type.target===t:e.type===t)(t,e))),l=s(ts),d=s(rs),c=s(ns),u=!!l;return t(Za,Object.assign({id:r,"data-testid":n},a,{onClick:e=>{e.stopPropagation()},children:[t(es,{$hasCloseButton:u,children:[d,c]}),u&&l]}))};os.displayName="ModalV2.Card";const is=Object.assign((t=>{var{id:r,show:n,onClose:o,animationFrom:i="bottom",children:a,enableOverlayClick:s=!0,rootComponentId:l,zIndex:d,onOverlayClick:c,dismissKeyboardOnShow:u=!0,"data-testid":f="modal"}=t,p=_e(t,["id","show","onClose","animationFrom","children","enableOverlayClick","rootComponentId","zIndex","onOverlayClick","dismissKeyboardOnShow","data-testid"]);const{verticalHeight:g,offsetTop:m}=Ya(),{refs:b,context:v}=R({open:n,onOpenChange:e=>{e||null==o||o()}}),{isMounted:y,status:x}=L(v,{duration:300}),w=P(v,{outsidePress:!1,enabled:!!o}),{getFloatingProps:$}=N([w]);return h((()=>{var e,t;n&&u&&(null===(t=null===(e=document.activeElement)||void 0===e?void 0:e.blur)||void 0===t||t.call(e))}),[u,n]),e(La,{"data-testid":`${f}-overlay`,show:y,enableOverlayClick:s,onOverlayClick:c,id:r,rootId:l,zIndex:d,children:e(Ua,Object.assign({$show:y,$animationFrom:i,"data-testid":f,$verticalHeight:g,$offsetTop:m},p,{"data-status":x,children:e(Va.Provider,{value:{onClose:o},children:y&&e(H,{context:v,initialFocus:b.floating,children:e(Ka,{children:e(qa,Object.assign({ref:b.setFloating},$(),{"aria-modal":!0,role:"dialog",children:a}))})})})}))})}),{Card:os,CloseButton:ts,Content:rs,Footer:ns}),as=n=>{var{children:o,visible:i,onMobileClose:a,maxHeight:s,overflow:l,ariaLabel:d,id:c}=n,u=_e(n,["children","visible","onMobileClose","maxHeight","overflow","ariaLabel","id"]);const h=u["data-testid"]||"popover",f=m(E),p=na["sm-max"]({theme:f}),g=ar.useMediaQuery({maxWidth:p}),b=()=>{a&&a()},v=()=>"string"==typeof o?e(Sa.BodyMD,{children:o}):o;return t(r,{children:[i&&e(Ia,Object.assign({tabIndex:0,"data-testid":h},u,{id:c,role:"dialog","aria-label":null!=d?d:"More information",children:e(Ma,{$maxHeight:s,$overflow:l,children:v()})})),g&&e(is,{show:null!=i&&i,onOverlayClick:b,onClose:b,id:c,role:"dialog","aria-label":null!=d?d:"More information",children:t(is.Card,{children:[e(is.Content,{children:v()}),e(is.CloseButton,{})]})})]})},ss=k.div`
    display: inline;
    width: fit-content;
    cursor: pointer;
    position: relative;
`,ls=n=>{var o,i,{children:l,popoverContent:d,trigger:c="click",position:u="top",zIndex:h,rootNode:f,customOffset:p,delay:g,onPopoverAppear:b,onPopoverDismiss:v,popoverAriaLabel:y,enableFlip:x=!0,enableResize:w=!1,overflow:$="auto",triggerOnFocus:C=!1,isModal:S=!0}=n,D=_e(n,["children","popoverContent","trigger","position","zIndex","rootNode","customOffset","delay","onPopoverAppear","onPopoverDismiss","popoverAriaLabel","enableFlip","enableResize","overflow","triggerOnFocus","isModal"]);const[k,F]=s(!1),_=a(null),O=a(null),T=m(E),I=na["sm-max"]({theme:T}),M=ar.useMediaQuery({maxWidth:I}),[A,B]=s(0),z=`${a(tt.generate()).current}-popover`,{refs:j,floatingStyles:L,context:J}=R({open:k,placement:u,whileElementsMounted:W,middleware:[Y(null!=p?p:16),x&&V(),U({limiter:K()}),w&&q({apply({availableHeight:e}){B(e)}})],onOpenChange:e=>{F(e),k!==e&&de(e)}}),ee=ja(),te="hover"===(M?"click":c),re=Z(J,{ignoreMouse:te}),ne=P(J),oe=G(J,{enabled:te,delay:{open:null!==(o=null==g?void 0:g.open)&&void 0!==o?o:0,close:null!==(i=null==g?void 0:g.close)&&void 0!==i?i:500}}),ie=Q(J,{enabled:C}),{getReferenceProps:ae,getFloatingProps:se}=N([re,ne,oe,ie]),le=()=>{F(!1),de(!1)},de=e=>{e&&b&&b(),!e&&v&&v()};return t(r,{children:[e(ss,Object.assign({ref:e=>{_.current=e,j.setReference(e)}},ae({onClick:e=>{e.stopPropagation(),e.preventDefault()}}),D,{children:l})),k&&e(X,{root:f,children:e(H,Object.assign({context:J},!S&&{initialFocus:-1,returnFocus:!1,modal:!1},{children:e("div",Object.assign({ref:e=>{O.current=e,j.setFloating(e)},onBlur:e=>{var t;const r=null!==(t=e.relatedTarget)&&void 0!==t?t:document.activeElement;r&&(e=>{if(!e)return!1;if(e instanceof HTMLElement&&e.hasAttribute("data-floating-ui-focus-guard"))return!0;const t=_.current,r=O.current;return!!t&&t.contains(e)||!!r&&r.contains(e)})(r)||(F(!1),de(!1))},style:Object.assign(Object.assign({},L),{outline:"none",zIndex:null!=h?h:ee})},se(),{children:"function"==typeof d?d(w?{maxHeight:A,overflow:$}:{}):e(as,{visible:!0,onMobileClose:le,maxHeight:w?A:void 0,overflow:w?$:void 0,ariaLabel:y,id:z,children:d})}))}))})]})},ds=e=>{switch(e){case"underline":return"text-decoration: underline 1px;";case"underline-dashed":return"text-decoration: underline dashed 1px;"}},cs=k.span`
    color: ${Gi["text-primary"]};
    font-weight: 600;
    text-underline-position: under;

    ${({$defaultStyle:e})=>ds(e)}

    &:hover,
    &:focus-visible {
        color: ${Gi["text-hover"]};
        ${({$hoverStyle:e})=>ds(e)}
    }

    svg {
        height: 1lh; // align vertically
        width: 1em; // scale icon with font size
        vertical-align: top;
    }
`,us=k.span`
    ${e=>!e.$standalone&&"margin-left: 0.25rem;"}
`,hs=r=>{var{ariaLabel:n,content:o,icon:i,underlineStyle:a="default",underlineHoverStyle:s="default"}=r,l=_e(r,["ariaLabel","content","icon","underlineStyle","underlineHoverStyle"]);const d=!!o;return e(ls,Object.assign({},l,{children:t(cs,{"aria-label":null!=n?n:d?void 0:"More info",role:"button","aria-haspopup":"dialog",tabIndex:0,$defaultStyle:a,$hoverStyle:s,children:[o,i&&e(us,{$standalone:!d,children:i})]})}))},fs=k.div`
    padding-left: ${ea["spacing-4"]};
    display: inline;
`,ps=({addon:t,rootNode:r})=>{const{content:n,type:o,icon:i,id:a,zIndex:s,"data-testid":l}=t;return e(fs,{children:e(hs,{trigger:"click",id:a,"data-testid":l,popoverContent:n,rootNode:r,zIndex:s,icon:null!=i?i:e(D,{"data-testid":`${o}-icon`}),ariaLabel:"More info"})})},gs=k.div`
    margin-bottom: ${ea["spacing-8"]};
`,ms=k.label`
    color: ${Gi["text-subtle"]};
    display: inline-block;

    ${Qi["form-label"]}
    ${Ta()}
    font-weight: ${Qi.Spec["weight-semibold"]};
`,bs=k(ne)`
    height: 1lh;
    width: 1em;
    flex-shrink: 0;
    color: ${Gi["icon-error-strong"]};
`,vs=k.div`
    ${Qi["body-sm-semibold"]}
    display: flex;
    gap: ${ea["spacing-4"]};
    margin-top: ${ea["spacing-8"]};
`,ys=k.p`
    color: ${Gi["text-error"]};
    margin-bottom: 0;
    outline: none;
`,xs=k.span`
    ${Qi["form-description"]}
    color: ${Gi["text-subtler"]};
    display: block;
`,ws=r=>{var{id:n,children:o,addon:i,subtitle:a,"data-testid":s,className:l,style:d}=r,c=_e(r,["id","children","addon","subtitle","data-testid","className","style"]);return t(gs,{className:l,style:d,"data-testid":s,children:[t(ms,Object.assign({id:n},c,{children:[o,i&&i.type&&("popover"===(null==i?void 0:i.type)?e(ps,{addon:i}):null)]})),"string"==typeof a?e(xs,{id:n?`${n}-subtitle`:void 0,"data-testid":s?`${s}-subtitle`:"subtitle",children:a}):a]})},$s=r=>t(vs,{children:[e(bs,{"aria-hidden":!0}),e(ys,Object.assign({},r))]}),Cs=k.div`
    position: relative;

    ${e=>{const{$xxlStart:t,$xxlSpan:r,$xlStart:n,$xlSpan:o,$lgStart:i,$lgSpan:a,$mdStart:s,$mdSpan:l,$smStart:d,$smSpan:c,$xsStart:u,$xsSpan:h,$xxsStart:f,$xxsSpan:p}=e;return F`
            grid-column: ${t||"auto"} / span ${r||1};

            ${$i.MaxWidth.xl} {
                grid-column: ${n||"auto"} / span ${o||1};
            }

            ${$i.MaxWidth.lg} {
                grid-column: ${i||"auto"} / span ${a||1};
            }

            ${$i.MaxWidth.md} {
                grid-column: ${s||"auto"} / span ${l||1};
            }

            ${$i.MaxWidth.sm} {
                grid-column: ${d||"auto"} / span ${c||1};
            }

            ${$i.MaxWidth.xs} {
                grid-column: ${u||"auto"} / span ${h||1};
            }

            ${$i.MaxWidth.xxs} {
                grid-column: ${f||"auto"} / span ${p||1};
            }
        `}}
`,Ss=o.forwardRef(((t,r)=>{const n=m(E),{xxlCols:o,xlCols:i,lgCols:a,mdCols:s,smCols:l,xsCols:d,xxsCols:c}=t,u=_e(t,["xxlCols","xlCols","lgCols","mdCols","smCols","xsCols","xxsCols"]),h=(e,t,r)=>{if(!e)return{start:void 0,span:void 0};if("development"===process.env.NODE_ENV&&("number"==typeof e&&e>t?console.warn(`Warning: ${r}Cols exceeds maximum (${t}): ${e}`):Array.isArray(e)&&(e[0]>t+1||e[1]>t+1)&&console.warn(`Warning: ${r}Cols array exceeds maximum (${t}): [${e[0]}, ${e[1]}]`)),Array.isArray(e)){const[r,n]=e;if(-1===n)return{start:r,span:t-r+1};return{start:r,span:Math.min(n-r,t)}}return{start:void 0,span:Math.min(e,t)}};return e(Cs,Object.assign({ref:r},(()=>{const e=xi["xxl-column"]({theme:n}),t=xi["xl-column"]({theme:n}),r=xi["lg-column"]({theme:n}),u=xi["md-column"]({theme:n}),f=xi["sm-column"]({theme:n}),p=xi["xs-column"]({theme:n}),g=xi["xxs-column"]({theme:n}),m=h(o||i||a||s||l||d||c,e,"xxl"),b=h(i||a||s||l||d||c,t,"xl"),v=h(a||s||l||d||c,r,"lg"),y=h(s||l||d||c,u,"md"),x=h(l||d||c,f,"sm"),w=h(d||c,p,"xs"),$=h(c,g,"xxs");return{$xxlStart:m.start,$xxlSpan:m.span,$xlStart:b.start,$xlSpan:b.span,$lgStart:v.start,$lgSpan:v.span,$mdStart:y.start,$mdSpan:y.span,$smStart:x.start,$smSpan:x.span,$xsStart:w.start,$xsSpan:w.span,$xxsStart:$.start,$xxsSpan:$.span}})(),u))})),Ds={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},ks=e=>Object.keys(Ds).reduce(((t,r)=>{const n=Ds[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),Fs=ks("max-width"),_s=(ks("min-width"),k.div`
    position: relative;
    ${e=>{const{$desktopStart:t,$desktopSpan:r,$tabletStart:n,$tabletSpan:o,$mobileStart:i,$mobileSpan:a}=e;return F`
            grid-column: ${t||"auto"} / span ${r||1};

            ${Fs.tablet} {
                grid-column: ${n||"auto"} / span
                    ${o||1};
            }

            ${Fs.mobileL} {
                grid-column: ${i||"auto"} / span
                    ${a||1};
            }
        `}}
`),Es=o.forwardRef(((t,r)=>{const{mobileCols:n,tabletCols:o,desktopCols:i}=t,a=_e(t,["mobileCols","tabletCols","desktopCols"]);return e(_s,Object.assign({ref:r},(()=>{const e=o||n,t=n,r=Os(i||o||n),a=Os(e),s=Os(t);return{$desktopSpan:r.span,$desktopStart:r.start,$mobileSpan:s.span,$mobileStart:s.start,$tabletSpan:a.span,$tabletStart:a.start}})(),a))})),Os=e=>{if(Array.isArray(e)&&e.length>1){const[t,r]=e,n=t<=r?t:r,o=t<=r?r:t;let i;return i=o===n?1:o-n,{start:n,span:i}}return"number"==typeof e?{start:void 0,span:e}:{start:void 0,span:void 0}},Ts=F`
    display: flex;
    flex-direction: column;

    &:not(:last-child) {
        margin-bottom: ${ea["spacing-32"]};
    }
`,Is=k.div`
    ${Ts}
`,Ms=k(Ss)`
    ${Ts}
`,As=k(Es)`
    ${Ts}
`,Bs=({label:r,errorMessage:n,id:o,disabled:i,children:a,layoutType:l,mobileCols:d,tabletCols:u,desktopCols:h,xxsCols:f,xsCols:p,smCols:g,mdCols:m,lgCols:v,xlCols:y,xxlCols:x,"data-testid":w,"data-error-testid":$})=>{const C=!l&&(d||u||h)?"v2-grid":!l&&(f||p||g||m||v||y||x)?"grid":l||"flex",S="string"==typeof n?n.trim():n,[D]=s((()=>tt.generate())),k=`${null!=o?o:D}-label`,F=`${null!=o?o:D}-label-subtitle`,_=`${null!=o?o:D}-error-message`;const E=(e=>{switch(e){case"v2-grid":return As;case"grid":return Ms;case"flex":return Is}})(C);return t(E,Object.assign({"data-testid":w},(e=>{switch(e){case"v2-grid":return{mobileCols:d,tabletCols:u,desktopCols:h};case"grid":return{xxsCols:f,xsCols:p,smCols:g,mdCols:m,lgCols:v,xlCols:y,xxlCols:x};case"flex":return}})(C),{children:[r&&e(ws,"string"==typeof r?{htmlFor:`${o}-base`,"data-testid":o?`${o}-label`:"form-label",id:k,disabled:i,children:r}:Object.assign({htmlFor:`${o}-base`,"data-testid":o?`${o}-label`:"form-label",id:k,disabled:i},r)),(()=>{const e={"aria-invalid":!!n,"aria-describedby":[S?_:void 0,"object"==typeof r&&(null==r?void 0:r.subtitle)?F:void 0].filter(Boolean).join(" ")||void 0,"aria-labelledby":r?k:void 0};return b.map(a,(t=>c(t,e)))})(),S&&t(vs,{children:[e(bs,{"aria-hidden":!0}),e(ys,{id:_,tabIndex:0,"data-testid":null!=$?$:o?`${o}-error-message`:"error-message",children:S})]})]}))},zs=e=>"small"===e?2.5:3,js=k.div`
    position: relative;
    width: 100%;
    ${e=>{const t=zs(e.$variant);return F`
            min-height: ${t}rem;
            height: ${t}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`,Rs=F`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${ea["spacing-16"]};
    // exclude top and bottom borders
    height: calc(${e=>zs(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${ta.sm};
    border: none;
    background: transparent;

    &:focus,
    &:active {
        outline: none;
    }

    &:focus-visible {
        outline: 2px solid ${Gi["border-focus"]};
    }
`,Ls=k.button`
    ${Rs}
    cursor: pointer;
`;k.div`
    ${Rs}
`;const Ps=O`
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
    border: ${Ji["width-010"]} ${Ji.solid} ${Gi.border};
    border-radius: ${ta.sm};
    background: ${Gi.bg};
    overflow: hidden;

    &:focus-within {
        border-color: ${Gi["border-focus"]};
        box-shadow: 0px 0px 4px 0px
            rgb(from ${Gi["border-focus"]} r g b / 50%) inset; // TODO: confirm shadow
    }

    ${e=>e.$expanded?F`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:F`
                animation: ${Ps} 0.5s ease-in-out;
            `}

    ${e=>e.$disabled?F`
                background: ${Gi["bg-disabled"]};

                ${Ls} {
                    cursor: not-allowed;
                }

                &:focus-within {
                    border-color: ${Gi.border};
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
                border-color: ${Gi["border-error"]};

                &:focus-within {
                    border-color: ${Gi["border-error"]};
                    box-shadow: 0px 0px 4px 0px
                        rgb(from ${Gi["border-error"]} r g b / 50%) inset; // TODO: confirm shadow
                }
            `:void 0}
`,k.div`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${Xi["duration-250"]} ${Xi["ease-default"]};
    margin-left: ${ea["spacing-16"]};
`,k(oe)`
    color: ${Gi.icon};
`,k.div`
    height: 1px;
    background: ${Gi.border};
    margin: 0 ${ea["spacing-8"]};
`;const Ns=k.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return F`
                color: ${Gi["text-disabled"]};
            `}}
`,Hs=k.div`
    ${e=>"small"===e.$variant?Qi["body-md-regular"]:Qi["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.$truncateType)return F`
                    ${ba(1)}
                `}}
    overflow: hidden;
`,Ws=k(Hs)`
    color: ${Gi["text-subtler"]};
`,Ys=e=>"right"===e?"bottom-end":"bottom-start",Vs=g({elementWidth:0,styles:{},setFloatingRef:()=>{},getFloatingProps:()=>({})}),Us=()=>m(Vs),Ks=({enabled:n,isOpen:o,onOpen:i,onClose:s,onDismiss:l,renderElement:d,renderDropdown:c,customZIndex:u,clickToToggle:h=!1,offset:f=0,alignment:p="left",fitAvailableHeight:g,rootNode:b,positionRef:v})=>{var y;const x=m(E),w=na["sm-max"]({theme:x}),$=a(null),{width:C=0}=Qt({targetRef:null!=v?v:$,handleHeight:!1}),S={name:"center",fn:({x:e,rects:t})=>{const r=0===e||e+t.floating.width===window.innerWidth,n=window.innerWidth<w;return{x:r&&n?(window.innerWidth-t.floating.width)/2:e}}},{refs:D,floatingStyles:k,context:F}=R({open:o,onOpenChange:(e,t,r)=>{"escape-key"===r?null==l||l():e&&!o?null==i||i():!e&&o&&(null==s||s(r))},whileElementsMounted:W,placement:Ys(p),middleware:[Y(f),V(),U({limiter:K()}),q({apply({availableHeight:e,elements:t}){!g||e>=t.floating.scrollHeight?t.floating.style.setProperty("--available-height",""):t.floating.style.setProperty("--available-height",`${Math.max(0,e)}px`)}}),S]}),_=ja(),{isMounted:O,styles:T}=J(F,{initial:{opacity:0},open:{opacity:1},duration:300}),I=Z(F,{enabled:n,toggle:h,keyboardHandlers:h}),M=P(F,{enabled:n}),{getReferenceProps:A,getFloatingProps:B}=N([I,M]),z={elementWidth:C,styles:Object.assign(Object.assign(Object.assign({},T),k),{zIndex:null!==(y=null!=u?u:_)&&void 0!==y?y:50}),setFloatingRef:D.setFloating,getFloatingProps:B};return t(r,{children:[e("div",Object.assign({ref:e=>{$.current=e,D.setReference(e)}},A(),{children:d()})),O&&e(X,{root:b,children:e(H,{context:F,modal:!1,initialFocus:-1,returnFocus:!1,children:e(Vs.Provider,{value:z,children:c(z)})})})]})},qs=k.div`
    --vertical-inset: ${ea["spacing-24"]};
    --horizontal-inset: ${ea["spacing-20"]};
    --header-bottom-spacing: ${ea["spacing-4"]};

    border: ${Ji["width-010"]} ${Ji.solid} ${Gi.border};
    border-radius: ${ta.sm};
    overflow: hidden;

    width: ${e=>e.$width}px;
    max-width: 41rem;
    min-width: 21rem;

    ${oa.MaxWidth.sm} {
        min-width: 17.5rem;
    }
`,Zs=k.span`
    clip-path: inset(50%);
    height: 1px;
    width: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
`,Gs=e=>Je()?e:e?"true":void 0,Qs=(...e)=>e.filter((e=>!!e)).join(" "),Xs=k.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,Js=O`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,el=k.div`
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
    animation: ${Js} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,tl=k(el)`
    animation-delay: -0.45s;
`,rl=k(el)`
    animation-delay: -0.3s;
`,nl=k(el)`
    animation-delay: -0.15s;
`,ol=({color:r,className:n,size:o})=>t(Xs,{className:n,$size:o,$color:r,"data-testid":"component-loading-spinner",children:[e(el,{id:"inner1"}),e(tl,{id:"inner2"}),e(rl,{id:"inner3"}),e(nl,{id:"inner4"})]}),il={Button:{"button-radius":Ni.md,"button-default-colour-bg":fi["bg-primary"],"button-default-colour-bg-hover":fi["bg-primary-hover"],"button-default-colour-text":fi["text-inverse"],"button-secondary-colour-border":fi["border-primary"],"button-secondary-colour-text":fi["text-primary"],"button-light-colour-text":fi["text-primary"],"button-link-colour-text":fi["text-primary"]},Animation:{"loading-dots-spinner-colour":fi["icon-primary"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"2rem","navbar-compressed-height":"4rem","navbar-compressed-logo-height":"1.5rem","navbar-mobile-height":"3.5rem","navbar-mobile-logo-height":"1.5rem","navbar-colour-bg":fi.bg,"navbar-colour-icon":fi.icon,"navbar-link-colour-text":fi.text,"navbar-link-colour-text-hover":fi["text-hover"],"navbar-link-colour-text-selected-hover":fi["text-selected-hover"]},Footer:{"footer-colour-bg":fi["bg-strong"],"footer-colour-text":fi.text,"footer-link-colour-text":fi.text,"footer-link-colour-text-hover":fi["text-hover"],"footer-disclaimer-link-colour-text":fi.text,"footer-disclaimer-link-colour-text-hover":fi["text-subtler"]}},al={Button:{"button-radius":Ni.sm,"button-default-colour-bg":fi["bg-primary"],"button-default-colour-bg-hover":fi["bg-primary-hover"],"button-default-colour-text":fi["text-inverse"],"button-secondary-colour-border":fi["border-primary"],"button-secondary-colour-text":fi["text-primary"],"button-light-colour-text":fi["text-primary"],"button-link-colour-text":fi["text-primary"]},Animation:{"loading-dots-spinner-colour":fi["icon-primary"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"2rem","navbar-compressed-height":"4rem","navbar-compressed-logo-height":"1.5rem","navbar-mobile-height":"3.5rem","navbar-mobile-logo-height":"1.5rem","navbar-colour-bg":fi.bg,"navbar-colour-icon":fi.icon,"navbar-link-colour-text":fi.text,"navbar-link-colour-text-hover":fi["text-hover"],"navbar-link-colour-text-selected-hover":fi["text-selected-hover"]},Footer:{"footer-colour-bg":fi["bg-strong"],"footer-colour-text":fi.text,"footer-link-colour-text":fi.text,"footer-link-colour-text-hover":fi["text-hover"],"footer-disclaimer-link-colour-text":fi.text,"footer-disclaimer-link-colour-text-hover":fi["text-subtler"]}},sl={Button:{"button-radius":Ni.sm,"button-default-colour-bg":fi["bg-primary"],"button-default-colour-bg-hover":fi["bg-primary-hover"],"button-default-colour-text":fi["text-inverse"],"button-secondary-colour-border":fi["border-primary"],"button-secondary-colour-text":fi["text-primary"],"button-light-colour-text":fi["text-primary"],"button-link-colour-text":fi["text-primary"]},Animation:{"loading-dots-spinner-colour":Gi.Primitive["brand-50"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"2rem","navbar-compressed-height":"4rem","navbar-compressed-logo-height":"1.5rem","navbar-mobile-height":"3.5rem","navbar-mobile-logo-height":"1.5rem","navbar-colour-bg":fi.bg,"navbar-colour-icon":fi.icon,"navbar-link-colour-text":fi.text,"navbar-link-colour-text-hover":fi["text-hover"],"navbar-link-colour-text-selected-hover":fi["text-selected-hover"]},Footer:{"footer-colour-bg":fi["bg-strong"],"footer-colour-text":fi.text,"footer-link-colour-text":fi.text,"footer-link-colour-text-hover":fi["text-hover"],"footer-disclaimer-link-colour-text":fi.text,"footer-disclaimer-link-colour-text-hover":fi["text-subtler"]}},ll={collections:{default:al,pa:{Button:{"button-radius":Ni.full,"button-default-colour-bg":fi["bg-primary"],"button-default-colour-bg-hover":fi["bg-primary-hover"],"button-default-colour-text":fi["text-inverse"],"button-secondary-colour-border":fi["border-primary"],"button-secondary-colour-text":fi["text-primary"],"button-light-colour-text":fi["text-primary"],"button-link-colour-text":fi["text-primary"]},Animation:{"loading-dots-spinner-colour":fi["icon-primary"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"2rem","navbar-compressed-height":"4rem","navbar-compressed-logo-height":"1.5rem","navbar-mobile-height":"3.5rem","navbar-mobile-logo-height":"1.5rem","navbar-colour-bg":fi.bg,"navbar-colour-icon":fi.icon,"navbar-link-colour-text":fi.text,"navbar-link-colour-text-hover":fi["text-hover"],"navbar-link-colour-text-selected-hover":fi["text-selected-hover"]},Footer:{"footer-colour-bg":fi["bg-strong"],"footer-colour-text":fi.text,"footer-link-colour-text":fi.text,"footer-link-colour-text-hover":fi["text-hover"],"footer-disclaimer-link-colour-text":fi.text,"footer-disclaimer-link-colour-text-hover":fi["text-subtler"]}},a11yplayground:il,lifesg:sl,spf:{Button:{"button-radius":Ni.md,"button-default-colour-bg":fi["bg-primary"],"button-default-colour-bg-hover":fi["bg-primary-hover"],"button-default-colour-text":fi["text-inverse"],"button-secondary-colour-border":fi["border-primary"],"button-secondary-colour-text":fi["text-primary"],"button-light-colour-text":fi["text-primary"],"button-link-colour-text":fi["text-primary"]},Animation:{"loading-dots-spinner-colour":fi["icon-primary"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"3rem","navbar-compressed-height":"5rem","navbar-compressed-logo-height":"2rem","navbar-mobile-height":"4rem","navbar-mobile-logo-height":"2rem","navbar-colour-bg":fi.bg,"navbar-colour-icon":fi.icon,"navbar-link-colour-text":fi["text-primary-strongest"],"navbar-link-colour-text-hover":fi["text-subtler"],"navbar-link-colour-text-selected-hover":fi["text-subtler"]},Footer:{"footer-colour-bg":fi["bg-inverse"],"footer-colour-text":fi["text-inverse"],"footer-link-colour-text":fi["text-inverse"],"footer-link-colour-text-hover":fi["text-inverse"],"footer-disclaimer-link-colour-text":fi["text-inverse"],"footer-disclaimer-link-colour-text-hover":fi["text-inverse"]}}},defaultValue:"default"},dl=(e,t)=>r=>{var n,o;const i=r.theme,a=Lo(ll,null==i?void 0:i.componentScheme);return cl((null===(o=null===(n=null==i?void 0:i.componentOverrides)||void 0===n?void 0:n[e])||void 0===o?void 0:o[t])||a[e][t],r)},cl=(e,t)=>{switch(typeof e){case"function":return e(t);case"number":return e+"px";case"string":return e}},ul=dl("Button","button-radius"),hl=dl("Button","button-default-colour-bg"),fl=dl("Button","button-default-colour-bg-hover"),pl=dl("Button","button-default-colour-text"),gl=dl("Button","button-secondary-colour-border"),ml=dl("Button","button-secondary-colour-text"),bl=dl("Button","button-light-colour-text"),vl=dl("Button","button-link-colour-text"),yl=k.button`
    padding: ${ea["spacing-8"]} ${ea["spacing-16"]};
    min-width: 4rem;
    border: ${Ji["width-010"]} ${Ji.solid} transparent;
    transition: all ${Xi["duration-250"]} ${Xi["ease-default"]};
    border-radius: ${ul};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return F`
                    background-color: ${Gi.bg};
                    border-color: ${e.$buttonIsDanger?Gi["border-error-strong"]:gl};

                    color: ${e.$buttonIsDanger?Gi["text-error"]:ml};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${Gi["bg-hover-neutral"]};
                        }
                    }
                `;case"light":return F`
                    background-color: ${Gi.bg};
                    border-color: ${Gi.border};

                    color: ${e.$buttonIsDanger?Gi["text-error"]:bl};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${Gi["bg-hover-neutral"]};
                        }
                    }
                `;case"link":return F`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?Gi["text-error"]:vl};
                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${Gi["bg-hover-neutral"]};
                        }
                    }
                `;case"disabled":return F`
                    background-color: ${Gi["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Gi["text-disabled"]};
                `;default:return F`
                    background-color: ${e.$buttonIsDanger?Gi["bg-error-strong"]:hl};

                    ${oa.MaxWidth.sm} {
                        width: 100%;
                    }

                    color: ${pl};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${e.$buttonIsDanger?Gi["bg-error-strong-hover"]:fl};
                        }
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return F`
                    height: 2.5rem;
                    ${Qi["body-md-semibold"]}

                    ${oa.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return F`
                    height: 4rem;
                    ${Qi["heading-md-semibold"]}

                    ${oa.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return F`
                    height: 3rem;
                    ${Qi["heading-xs-semibold"]}

                    ${oa.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,xl=k(ol)`
    margin-right: ${e=>e.$hasChildren?"0.5rem":"0"};
`,wl=e=>o.Children.toArray(e).some((e=>"string"==typeof e?""!==e.trim():null!=e)),$l=(r,n)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:s="default",danger:l=!1,focusableWhenDisabled:d=!1,onClick:c}=r,u=_e(r,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),h={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return t(yl,Object.assign({ref:n,"data-testid":u["data-testid"]||"button",disabled:i&&!d,"aria-disabled":i,"aria-busy":a,onClick:i?void 0:c},h,u,{children:[a&&e(xl,{$hasChildren:wl(o)}),e("span",{children:o})]}))};$l.displayName="Button.Default";const Cl=(r,n)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:s="default",danger:l=!1,focusableWhenDisabled:d=!1,onClick:c}=r,u=_e(r,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),h={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return t(yl,Object.assign({ref:n,"data-testid":u["data-testid"]||"button",disabled:i&&!d,"aria-disabled":i,"aria-busy":a,onClick:i?void 0:c},h,u,{children:[a&&e(xl,{$hasChildren:wl(o)}),e("span",{children:o})]}))};Cl.displayName="Button.Small";const Sl=(r,n)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:s="default",danger:l=!1,focusableWhenDisabled:d=!1,onClick:c}=r,u=_e(r,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),h={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"large",$buttonIsDanger:l};return t(yl,Object.assign({ref:n,"data-testid":u["data-testid"]||"button",disabled:i&&!d,"aria-disabled":i,"aria-busy":a,onClick:i?void 0:c},h,u,{children:[a&&e(xl,{$hasChildren:wl(o)}),e("span",{children:o})]}))};Sl.displayName="Button.Large";const Dl={Default:o.forwardRef($l),Small:o.forwardRef(Cl),Large:o.forwardRef(Sl)},kl=F`
    color: ${Gi.icon};
    height: 1rem;
    width: 1rem;
`,Fl=k(ie)`
    ${kl}
`,_l=k(ae)`
    ${kl}
`,El=k(oe)`
    ${kl}
    transition: transform 250ms ease-in-out;
    margin-left: 0.5rem;
`,Ol=k.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    padding-top: var(--vertical-inset);
    padding-bottom: var(--vertical-inset);
`,Tl=k.div`
    display: flex;
    flex: 1;
    position: relative;
`,Il=k.div`
    isolation: isolate;
    width: 100%;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,Ml=k.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${Gi.bg};

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);

    ${e=>{if(!e.$visible)return F`
                display: none;
            `}}
`,Al=k.div`
    display: flex;
    justify-content: space-between;

    padding-left: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-right: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-bottom: var(--header-bottom-spacing);
`,Bl=k.div`
    display: flex;
`,zl=k.button`
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
`,jl=k.span`
    ${Qi["body-md-regular"]}
    color: ${Gi.text};
`,Rl=k.div`
    display: flex;
`,Ll=k(Fa)`
    margin: auto 0;
    padding: 0.75rem;

    &:disabled {
        cursor: not-allowed;
    }
`,Pl=k.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,Nl=k(Dl.Small)`
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
`,Wl=k.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${ta.md};
    margin: 0 0.5rem;
    transition: ${Xi["duration-150"]} ${Xi["ease-default"]};

    // default styles
    ${Qi["body-md-regular"]}
    border-radius: ${ta.md};
    border: ${Ji["width-010"]} ${Ji.solid} transparent;
    background-clip: border-box;
    color: ${Gi.text};
    cursor: default;

    // cursor style
    ${e=>e.$interactive?F`
                cursor: pointer;
            `:e.$disabledDisplay?F`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:e,$interactive:t,$disabledDisplay:r})=>"selected-month"===e?F`
                background: ${Gi["bg-selected"]};
                border-color: ${Gi["border-selected"]};
                color: ${Gi["text-selected"]};
                font-weight: ${Qi.Spec["weight-semibold"]};

                ${t&&F`
                    &:hover {
                        background: ${Gi["bg-selected-hover"]};
                        border-color: ${Gi["border-selected-hover"]};
                        color: ${Gi["text-selected-hover"]};
                    }
                `}
            `:"current-month"===e?F`
                color: ${Gi["text-primary"]};
                font-weight: ${Qi.Spec["weight-semibold"]};
            `:r?F`
                color: ${Gi["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:t})=>{if(t)return"selected-month"===e?F`
                &:hover {
                    background: ${Gi["bg-selected-hover"]};
                    border-color: ${Gi["border-selected-hover"]};
                    color: ${Gi["text-selected-hover"]};
                    font-weight: ${Qi.Spec["weight-semibold"]};
                }
            `:F`
            &:hover {
                background: ${Gi["bg-hover"]};
                color: ${Gi["text-hover"]};
                font-weight: ${Qi.Spec["weight-semibold"]};
            }
        `}}
`,Yl=({calendarDate:t,currentFocus:r,selectedStartDate:n,selectedEndDate:o,viewCalendarDate:i,isNewSelection:l,minDate:d,maxDate:c,allowDisabledSelection:u,onMonthSelect:f})=>{const p=v((()=>Ve.generateMonths(Me(t))),[t]),g=a(new Array(p.length).fill(null)),[m,b]=s(p.findIndex((e=>e.isSame(i,"month"))));h((()=>{var e;null!==m&&(null===(e=g.current[m])||void 0===e||e.focus())}),[m,p]);const y=(e,t)=>{t||f(e)},x=e=>{const t="start"===r&&o&&e.isAfter(o,"month")&&l,i="end"===r&&n&&e.isBefore(n,"month")&&l;return!(!t&&!i)},w=e=>{const t=e.format("MMMM"),r=(n=e,!Ve.isWithinRange(n,d?Me(d):void 0,c?Me(c):void 0,"month"));var n;const o=i.isSame(e,"month"),a=o?"selected-month":Me().isSame(e,"month")?"current-month":"default",s=i.isSame(e,"year")?o?0:-1:0===e.month()?0:-1;return{disabledDisplay:r||x(e),interactive:!r||u,month:t,variant:a,tabIndex:s}};return p.length?e(Hl,{onBlur:()=>{b(null)},children:p.map(((t,r)=>{const{disabledDisplay:n,interactive:o,variant:i,month:a,tabIndex:s}=w(t);return e(Wl,{ref:e=>g.current[r]=e,tabIndex:s,role:"button","aria-disabled":!o,"aria-selected":"selected-month"===i,$variant:i,$disabledDisplay:n,$interactive:o,onClick:()=>y(t,!o),onKeyDown:e=>{((e,t,r)=>{const n=e.key;let o;const i=p.indexOf(t);switch(n){case"Enter":case" ":e.preventDefault(),y(t,r);break;case"ArrowLeft":o=i-1;break;case"ArrowRight":o=i+1;break;case"ArrowUp":o=i-2;break;case"ArrowDown":o=i+2}void 0!==o&&o>=0&&o<p.length&&(e.preventDefault(),b(o))})(e,t,!o)},children:a},a)}))}):null},Vl=k.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-content: center;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
`,Ul=k.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0.5rem;
    transition: ${Xi["duration-150"]} ${Xi["ease-default"]};
    padding: 0.5rem;

    // default styles
    ${Qi["body-md-regular"]}
    border-radius: ${ta.md};
    border: ${Ji["width-010"]} ${Ji.solid} transparent;
    background-clip: border-box;
    color: ${Gi.text};
    cursor: default;

    // cursor style
    ${({$interactive:e,$disabledDisplay:t})=>e?F`
                cursor: pointer;
            `:t?F`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:e,$interactive:t,$disabledDisplay:r})=>"selected-year"===e?F`
                background: ${Gi["bg-selected"]};
                border-color: ${Gi["border-selected"]};
                color: ${Gi["text-selected"]};
                font-weight: ${Qi.Spec["weight-semibold"]};

                ${t&&F`
                    &:hover {
                        background: ${Gi["bg-selected-hover"]};
                        border-color: ${Gi["border-selected-hover"]};
                        color: ${Gi["text-selected-hover"]};
                    }
                `}
            `:"current-year"===e?F`
                color: ${Gi["text-primary"]};
                font-weight: ${Qi.Spec["weight-semibold"]};
            `:"other-decade"===e||r?F`
                color: ${Gi["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:t})=>{if(t)return"selected-year"===e?F`
                &:hover {
                    background: ${Gi["bg-selected-hover"]};
                    border-color: ${Gi["border-selected-hover"]};
                    color: ${Gi["text-selected-hover"]};
                    font-weight: ${Qi.Spec["weight-semibold"]};
                }
            `:F`
            &:hover {
                background: ${Gi["bg-hover"]};
                color: ${Gi["text-hover"]};
                font-weight: ${Qi.Spec["weight-semibold"]};
            }
        `}}
`,Kl=({calendarDate:t,currentFocus:r,selectedStartDate:n,selectedEndDate:o,viewCalendarDate:i,isNewSelection:l,minDate:d,maxDate:c,allowDisabledSelection:u,onYearSelect:f,setCalendarDate:p})=>{const g=v((()=>Ve.generateDecadeOfYears(Me(t))),[t]),m=a(new Array(g.length).fill(null)),[b,y]=s(t);h((()=>{var e;if(null===b)return;const t=g.findIndex((e=>e.isSame(b,"year")));t>=0&&(null===(e=m.current[t])||void 0===e||e.focus())}),[b,g]);const x=(e,t)=>{t||f(e)},w=e=>{const t="start"===r&&o&&e.isAfter(o,"year")&&l,i="end"===r&&n&&e.isBefore(n,"year")&&l;return!(!t&&!i)},$=e=>{const t=g.indexOf(e),r=[0,11].includes(t),n=e.year(),o=(a=e,!Ve.isWithinRange(a,d?Me(d):void 0,c?Me(c):void 0,"year"));var a;const s=r?"other-decade":i.isSame(e,"year")?"selected-year":Me().isSame(e,"year")?"current-year":"default",l=i.year()>=g[0].year()&&i.year()<=g[g.length-1].year()?"selected-year"===s?0:-1:1===t?0:-1;return{disabledDisplay:o||w(e),interactive:!o||u,year:n,variant:s,tabIndex:l}};return g.length?e(Vl,{onBlur:()=>{y(null)},children:g.map(((t,r)=>{const{disabledDisplay:n,interactive:o,variant:i,year:a,tabIndex:s}=$(t);return e(Ul,{ref:e=>{m.current[r]=e},tabIndex:s,role:"button","aria-label":`${a}`,"aria-disabled":!o,"aria-selected":"selected-year"===i,$variant:i,$disabledDisplay:n,$interactive:!!o,onClick:()=>x(t,!o),onKeyDown:e=>{((e,t,r)=>{let n;switch(e.key){case"Enter":case" ":e.preventDefault(),x(t,r);break;case"ArrowLeft":n=t.subtract(1,"year");break;case"ArrowRight":n=t.add(1,"year");break;case"ArrowUp":n=t.subtract(3,"year");break;case"ArrowDown":n=t.add(3,"year")}void 0!==n&&(e.preventDefault(),p(n),y(n))})(e,t,!o)},children:a},a)}))}):null},ql=o.forwardRef(((n,o)=>{var{children:i,initialCalendarDate:l,minDate:d,maxDate:c,currentFocus:u,selectedStartDate:f,selectedEndDate:p,selectWithinRange:g,dynamicHeight:m=!1,allowDisabledSelection:b,onCalendarDateChange:v,withButton:x,doneButtonDisabled:w,onDismiss:$,showNavigationHeader:C=!0,getLeftArrowDate:S,getRightArrowDate:D,isLeftArrowDisabled:k,isRightArrowDisabled:F,getMonthHeaderLabel:_,getYearHeaderLabel:E,isFocusable:O=!1}=n,T=_e(n,["children","initialCalendarDate","minDate","maxDate","currentFocus","selectedStartDate","selectedEndDate","selectWithinRange","dynamicHeight","allowDisabledSelection","onCalendarDateChange","withButton","doneButtonDisabled","onDismiss","showNavigationHeader","getLeftArrowDate","getRightArrowDate","isLeftArrowDisabled","isRightArrowDisabled","getMonthHeaderLabel","getYearHeaderLabel","isFocusable"]);const[I,M]=s(Qe.toDayjs(l)),[A,B]=s(Qe.toDayjs(l)),[z,j]=s("default"),R=a(null),L=a(null),P=a(null),N=a(null);y(o,(()=>({defaultView(){j("default")},resetView(){const e=Qe.toDayjs(l);M(e),B(e),j("default")},setCalendarDate(e){const t=Qe.toDayjs(e);M(t),B(t)}}))),h((()=>{const e=Qe.toDayjs(l);M(e),B(e)}),[l]),h((()=>{G(A)}),[A]);const H=()=>{var e;"month-options"!==z?(j("month-options"),null===(e=P.current)||void 0===e||e.focus()):(j("default"),M(A))},W=e=>{var t;if("Enter"!==e.key&&" "!==e.key||(e.preventDefault(),H(),null===(t=N.current)||void 0===t||t.focus()),"ArrowUp"===e.key||"ArrowDown"===e.key){e.preventDefault();const t="ArrowUp"===e.key?I.subtract(1,"month"):I.add(1,"month");if(!Ve.isWithinRange(t,d?Me(d):void 0,c?Me(c):void 0,"month"))return;M(t),"default"===z&&B(t)}},Y=()=>{"default"!==z?(j("default"),M(A)):j("year-options")},V=e=>{if("Enter"!==e.key&&" "!==e.key||(e.preventDefault(),Y()),"ArrowUp"===e.key||"ArrowDown"===e.key){e.preventDefault();let t;if(t="year-options"===z?"ArrowUp"===e.key?I.subtract(10,"year"):I.add(10,"year"):"ArrowUp"===e.key?I.subtract(1,"year"):I.add(1,"year"),!Ve.isWithinRange(t,d?Me(d):void 0,c?Me(c):void 0,"year"))return;M(t),"default"===z&&B(t)}},U=()=>{var e;null===(e=P.current)||void 0===e||e.focus();const t=S?S(I):I.subtract(1,"month");switch(z){case"default":B(t),M(t);break;case"month-options":M((e=>e.subtract(1,"year")));break;case"year-options":M((e=>e.subtract(10,"year")))}},K=()=>{var e;null===(e=P.current)||void 0===e||e.focus();const t=D?D(I):I.add(1,"month");switch(z){case"default":B(t),M(t);break;case"month-options":M((e=>e.add(1,"year")));break;case"year-options":M((e=>e.add(10,"year")))}},q=e=>{M(e),B(e),x||j("default")},Z=()=>{const e=Qe.toDayjs(l);M(e),B(e),"default"===z?Q("reset"):j("default")},G=e=>{v&&v(e)},Q=e=>{$&&$(e)},X=()=>{if(!d||b)return!1;const e=Me(d);return"month-options"===z?!Ve.isPreviousYearWithinRange(I,e):"year-options"===z?!Ve.isPreviousDecadeWithinRange(I,e):k?k(I):!Ve.isPreviousMonthWithinRange(I,e)},J=()=>{if(!c||b)return!1;const e=Me(c);return"month-options"===z?!Ve.isNextYearWithinRange(I,e):"year-options"===z?!Ve.isNextDecadeWithinRange(I,e):F?F(I):!Ve.isNextMonthWithinRange(I,e)},ee=()=>{const n=_?_(I):I.format("MMM"),o=Me(n,"MMM").format("MMMM"),i=(()=>{if("year-options"===z){const{beginDecade:e,endDecade:t}=Ve.getStartEndDecade(I);return`${e} to ${t}`}return E?E(I):I.format("YYYY")})(),a={"month-options":`${i}, Close month selection`,"year-options":`${i}, Close year selection`,default:`${i}, Select year`};return t(r,{children:[t(zl,{"aria-label":`${o}, Select month`,type:"button",$expanded:"month-options"===z,$visible:"default"===z,id:"month-dropdown",onClick:H,onKeyDown:W,tabIndex:O?0:-1,children:[e(jl,{children:n}),e(El,{})]}),t(zl,{ref:N,"aria-label":a[z],type:"button",$expanded:"default"!==z,id:"year-dropdown",onClick:Y,onKeyDown:V,tabIndex:O?0:-1,children:[e(jl,{children:i}),e(El,{})]})]})},te=()=>{switch(z){case"month-options":return e(Yl,{calendarDate:I,currentFocus:u,minDate:d,maxDate:c,selectedStartDate:f,selectedEndDate:p,viewCalendarDate:A,isNewSelection:!!g,onMonthSelect:q,allowDisabledSelection:b});case"year-options":return e(Kl,{setCalendarDate:M,calendarDate:I,currentFocus:u,minDate:d,maxDate:c,selectedStartDate:f,selectedEndDate:p,viewCalendarDate:A,isNewSelection:!!g,onYearSelect:q,allowDisabledSelection:b});default:return null}};return t(Ol,Object.assign({ref:P,"data-id":"calendar-container","data-testid":"calendar-container","aria-label":A.format("MMMM, YYYY"),role:"group"},T,{children:[C&&(()=>{const r={"month-options":"year","year-options":"decade",default:"month"}[z];return t(Al,{"data-id":"calendar-header","data-testid":"calendar-header",children:[e(Bl,{children:ee()}),t(Rl,{children:[e(Ll,{"aria-label":`Previous ${r}`,"data-testid":"left-arrow-btn",disabled:X(),focusHighlight:!1,focusOutline:"browser",onClick:U,tabIndex:O?0:-1,children:e(Fl,{})}),e(Ll,{"aria-label":`Next ${r}`,"data-testid":"right-arrow-btn",disabled:J(),focusHighlight:!1,focusOutline:"browser",onClick:K,tabIndex:O?0:-1,children:e(_l,{})})]})]})})(),e(Tl,{children:(()=>{const n="function"==typeof i?i({calendarDate:A,currentView:z}):i;if(m)return t(r,{children:["default"===z&&n,te()]});{const o="default"===z;return t(r,{children:[e(Il,{inert:Gs(!o),children:n}),e(Ml,{$visible:!o,children:te()})]})}})()}),(()=>{if(!x)return;const r=!!("default"===z)&&w;return t(Pl,{children:[e(Nl,{ref:L,"data-testid":"cancel-button",styleType:"light",type:"button",onClick:Z,children:"Cancel"}),e(Nl,{"data-testid":"done-button",ref:R,type:"button",onClick:()=>{r||(M(A),"default"===z?Q("confirmed"):j("default"))},disabled:r,children:"Done"})]})})()]}))})),Zl=k.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 0.25rem;
`,Gl=k.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    pointer-events: none;
    user-select: none;

    ${Qi["body-sm-semibold"]};
    color: ${Gi.text};
`,Ql=k.div`
    grid-column: 1 / -1;
    display: flex;
`,Xl=e=>{let t=Gi.bg,r="transparent";switch(e.$type){case"hover-subtle":t=Gi["bg-hover"],r=Gi["bg-hover"];break;case"hover":t=Gi["bg-hover-strong"],r=Gi["bg-hover-strong"];break;case"hover-outline":t=Gi["bg-hover-subtle"],r=Gi["border-hover"];break;case"selected-outline":t=Gi["bg-selected"],r=Gi["border-selected"];break;case"selected-outline-subtle":t=Gi["bg-selected"],r=Gi["border-selected-subtle"];break;case"selected-hover":t=Gi["bg-selected-hover"];break;case"selected-hover-outline":t=Gi["bg-selected-hover"],r=Gi["border-selected-hover"]}return{color:t,borderColor:r}},Jl=k.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 2.5rem;
`,ed=k.div`
    position: absolute;
    height: 2.5rem;
    width: 50%;
    transition: ${Xi["duration-150"]} ${Xi["ease-default"]};
    border: ${Ji["width-010"]} ${Ji.solid} transparent;
    border-left: none;
    border-right: none;

    ${e=>{if(!e.$type)return;const{color:t,borderColor:r}=Xl(e);return F`
            background-color: ${t};
            background-clip: border-box;
            border-top-color: ${r};
            border-bottom-color: ${r};
        `}}
`,td=k(ed)`
    left: 0;
`,rd=k(ed)`
    right: 0;
`,nd=k.div`
    position: absolute;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    transition: ${Xi["duration-150"]} ${Xi["ease-default"]};

    border: ${Ji["width-010"]} ${Ji.solid} transparent;
    border-radius: ${ta.md};

    ${e=>{if(e.$type){const{color:t,borderColor:r}=Xl(e);return F`
                background-color: ${t};
                background-clip: content-box;
                border-color: ${r};
            `}}}
`,od=k(nd)`
    right: calc(50% - 1.25rem);
    clip-path: inset(-3px 1.25rem -3px -3px);
`,id=k(nd)`
    left: calc(50% - 1.25rem);
    clip-path: inset(-3px -3px -3px 1.25rem);
`,ad=k.span`
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 2;
    cursor: ${e=>e.$interactive?"pointer":null===e.$interactive?"default":"not-allowed"};
`,sd=k.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    ${Qi["body-md-regular"]}
    transition: ${Xi["duration-150"]} ${Xi["ease-default"]};

    pointer-events: ${e=>e.$interactive||null===e.$interactive?"auto":"none"};

    ${e=>{const{$disabled:t,$type:r}=e;if(t)return"hidden"===r?F`
                    visibility: hidden;
                `:F`
                color: ${Gi["text-disabled-subtlest"]};
            `;switch(r){case"selected":return F`
                    font-weight: ${Qi.Spec["weight-semibold"]};
                    color: ${Gi["text-selected"]};
                `;case"selected-hover":return F`
                    font-weight: ${Qi.Spec["weight-semibold"]};
                    color: ${Gi["text-selected-hover"]};
                `;case"current":return F`
                    font-weight: ${Qi.Spec["weight-semibold"]};
                    color: ${Gi["text-primary"]};
                `;case"hover":return F`
                    font-weight: ${Qi.Spec["weight-semibold"]};
                    color: ${Gi["text-hover"]};
                `;case"unavailable":return F`
                    color: ${Gi["text-disabled-subtlest"]};
                `;case"hidden":return F`
                    visibility: hidden;
                `;default:return F`
                    color: ${Gi.text};
                `}}}

    &:focus {
        outline: none;
    }
`,ld=k.div`
    position: absolute;
    width: 4px;
    height: 4px;
    background-color: currentColor;
    border-radius: 100%;
    bottom: 4px;
`,dd=({bgLeft:r,bgRight:n,circleLeft:o,circleRight:i,labelType:s,disabled:l,interactive:d,currentDateIndicator:c,date:u,onSelect:f,onHover:p,onFocus:g,onHoverEnd:m,onKeyDown:b,focusDate:v,label:y,ariaHidden:x,tabIndex:w=-1,role:$="button"})=>{const C=Me().isSame(u,"day"),S=!!v&&v.isSame(u,"day"),D=`${u.format("D MMMM YYYY dddd")}, ${l?"Unavailable":"Available"}`,k=a(null);h((()=>{var e;S&&k.current&&(null===(e=k.current)||void 0===e||e.focus())}),[S]);return t(Jl,{"aria-hidden":x,children:[e(td,{$type:r}),e(od,{$type:o}),e(rd,{$type:n}),e(id,{$type:i}),e(ad,{$interactive:d,children:t(sd,{ref:k,tabIndex:w,role:$,"aria-label":y||D,"aria-disabled":!d,"aria-selected":"selected"===s||"selected-hover"===s,$type:s,$disabled:l,$interactive:d,onClick:()=>{null==f||f(u)},onKeyDown:e=>{null==b||b(e)},onMouseEnter:()=>{null==p||p(u)},onMouseLeave:()=>{null==m||m(u)},onFocus:()=>{null==g||g(u)},children:[u.date(),c&&C&&e(ld,{$disabled:l})]})})]})},cd=({date:t,calendarDate:r,startDate:n,endDate:o,currentFocus:i,hoverDate:a,focusDate:s,minDate:l,maxDate:d,disabledDates:c,allowDisabledSelection:u,isNewSelection:h,showActiveMonthDaysOnly:f,onSelect:p,onHover:g,onFocus:m,setFocusCell:b,tabIndex:v})=>{const y=Ve.isDisabledDay(t,c,l,d),x=!y||u,w=()=>{p(t,!x)},$=()=>{const e=Me(a),t=e.isBefore(o,"day"),r=e.isAfter(n,"day");let s,l,d,c;return"start"===i&&o&&t&&(n&&r?(d=a,c=o):(s=a,l=n||o)),"end"===i&&n&&r&&(o&&t?(d=n,c=a):(s=o||n,l=a)),{hoverStart:s,hoverEnd:l,overlapStart:d,overlapEnd:c}},C={date:t,calendarDate:r,disabled:y,interactive:x,currentDateIndicator:!0,onSelect:w,onHover:()=>{g(t.format("YYYY-MM-DD"),!x)},onFocus:()=>{m(t.format("YYYY-MM-DD"))},onKeyDown:e=>{const r=e.key;if("Enter"===r||" "===r)return e.preventDefault(),void(x&&w());(e=>{let r;const n={ArrowLeft:()=>t.subtract(1,"day"),ArrowRight:()=>t.add(1,"day"),ArrowUp:()=>t.subtract(7,"day"),ArrowDown:()=>t.add(7,"day"),Home:()=>t.startOf("week"),End:()=>t.endOf("week"),PageUp:()=>e.shiftKey?t.subtract(1,"year"):t.subtract(1,"month"),PageDown:()=>e.shiftKey?t.add(1,"year"):t.add(1,"month")}[e.key];n&&(e.preventDefault(),r=n(),b(r.format("YYYY-MM-DD")))})(e)},role:"gridcell",focusDate:Me(s),tabIndex:v};return e(dd,Object.assign({},C,(()=>{const e={};if(r.month()!==t.month())e.labelType=f?"hidden":"unavailable";else if(Me().isSame(t,"day")&&!y)e.labelType="current";else if(h){const r="end"===i&&n&&t.isBefore(n),a="start"===i&&o&&t.isAfter(o);(r||a)&&(e.labelType="unavailable")}return e})(),(()=>{const e={},i=t.isSame(n,"day"),a=t.isSame(o,"day");return f&&r.month()!==t.month()?(e.labelType="hidden",e):((n&&i||o&&a)&&(e.labelType="selected",e.circleLeft="selected-outline",e.circleRight="selected-outline"),n&&o&&t.isBetween(n,o,"day","[]")&&(e.labelType="selected",i||(e.bgLeft="selected-outline-subtle"),a||(e.bgRight="selected-outline-subtle")),e)})(),(()=>{if(!a)return{};const e={},r=t.isSame(a,"day"),{hoverStart:i,hoverEnd:s,overlapStart:l,overlapEnd:d}=$();if(r){const r=t.isSame(n,"day"),i=t.isSame(o,"day");r||i?(e.labelType="selected-hover",e.circleLeft="selected-hover-outline",e.circleRight="selected-hover-outline"):(e.labelType="hover",e.circleLeft="hover",e.circleRight="hover")}if(i&&s){if(t.isBetween(i,s,"day","[]")){const r=t.isSame(i,"day"),n=t.isSame(s,"day");r||(e.labelType="hover",e.bgLeft="hover-outline"),n||(e.labelType="hover",e.bgRight="hover-outline")}return e}return l&&d?(t.isBetween(l,d,"day","[]")&&r&&(e.labelType="selected-hover",e.circleLeft="selected-hover",e.circleRight="selected-hover"),e):e})()))};Me.extend(je);const ud=({calendarDate:r,currentFocus:n,disabledDates:o,selectedStartDate:i,selectedEndDate:l,onSelect:d,onHover:c,isNewSelection:u,minDate:f,maxDate:g,allowDisabledSelection:m,showActiveMonthDaysOnly:b,setCalendarDate:y})=>{const x=a(null);h((()=>{if(x.current){const e=x.current;x.current=null,k(e)}}),[r]);const w=p((()=>i&&Me(i).isSame(r,"month")?Me(i):l&&Me(l).isSame(r,"month")?Me(l):Me().isSame(r,"month")?Me():f&&r.isSame(Me(f),"month")?Me(f):Me(r).startOf("month")),[i,r,l,f]),$=e=>{const t=Me(e);if(Ve.isWithinRange(t,f?Me(f):void 0,g?Me(g):void 0)){if(!t.isSame(r,"month"))return null==y||y(e),void(x.current=e);k(e)}},C=v((()=>Ve.generateDays(r)),[r]),S=v((()=>w()),[w]),[D,k]=s(""),[F,_]=s(""),E=(e,t)=>{t&&!m||d(e)},O=(e,t)=>{t&&!m||(_(e),c(e))},T=e=>{_(e),c(e)},I=()=>{_(""),c("")};return t(Zl,{role:"grid","aria-label":"Date grid","data-testid":"calendar-content",onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||(k(""),_(""),c(""))},children:[C[0].map(((t,r)=>e(Gl,{"aria-hidden":!0,children:Me(t).format("ddd")},`week-day-${r}`))),C.map(((t,a)=>e(Ql,{role:"row","aria-label":`Week ${a+1}`,onMouseLeave:I,children:t.map(((t,a)=>e(cd,{date:t,calendarDate:r,startDate:i,endDate:l,hoverDate:F,focusDate:D,currentFocus:n,minDate:f,maxDate:g,disabledDates:o,allowDisabledSelection:m,isNewSelection:u,showActiveMonthDaysOnly:b,onSelect:E,onHover:O,onFocus:T,setFocusCell:$,tabIndex:t.isSame(S,"day")?0:-1},`day-${a}`)))},a)))]})},hd=({date:t,calendarDate:r,selectedDate:n,hoverDate:o,focusDate:i,minDate:a,maxDate:s,disabledDates:l,allowDisabledSelection:d,numberOfDays:c=1,onSelect:u,onHover:h,onFocus:f,setFocusCell:p,tabIndex:g})=>{const m=Ve.isDisabledDay(t,l,a,s),b=!m||d,{start:v,end:y}=n?Ve.getFixedRangeStartEnd(Qe.toDayjs(n),c):{start:void 0,end:void 0},{start:x,end:w}=o?Ve.getFixedRangeStartEnd(Qe.toDayjs(o),c):{start:void 0,end:void 0},$=!!n&&t.isBetween(v,y,"day","[]"),C=!!o&&t.isBetween(x,w,"day","[]"),S=$&&t.isSame(v,"day")||C&&t.isSame(x,"day"),D=$&&t.isSame(y,"day")||C&&t.isSame(w,"day"),k=`From ${Me(x).format("D MMMM")} to ${Me(w).format("D MMMM")}, ${m?"Unavailable":"Available"}`,F=()=>{u(t,!b)},_=(e,t,r,n)=>{r?e.circleLeft=t:e.bgLeft=t,n?e.circleRight=t:e.bgRight=t},E={date:t,calendarDate:r,disabled:m,interactive:b,currentDateIndicator:!0,onSelect:F,onHover:()=>{h(t.format("YYYY-MM-DD"),!b)},onFocus:()=>{f(t.format("YYYY-MM-DD"))},onKeyDown:e=>{const r=e.key;if("Enter"===r||" "===r)return e.preventDefault(),void(b&&F());(e=>{let r;const n={ArrowLeft:()=>t.subtract(1,"day"),ArrowRight:()=>t.add(1,"day"),ArrowUp:()=>t.subtract(7,"day"),ArrowDown:()=>t.add(7,"day"),Home:()=>t.startOf("week"),End:()=>t.endOf("week"),PageUp:()=>e.shiftKey?t.subtract(1,"year"):t.subtract(1,"month"),PageDown:()=>e.shiftKey?t.add(1,"year"):t.add(1,"month")}[e.key];n&&(e.preventDefault(),r=n(),p(r.format("YYYY-MM-DD")))})(e)},focusDate:Me(i),role:"gridcell",tabIndex:g,label:k};return e(dd,Object.assign({},E,(()=>{const e={};return $||C?e.labelType="selected":r.month()!==t.month()?e.labelType="unavailable":Me().isSame(t,"day")&&!m&&(e.labelType="current"),e})(),(()=>{const e={},r=t.format("YYYY-MM-DD");return C&&_(e,"hover",r===x,r===w),$&&_(e,"selected-outline",r===v,r===y),$&&C&&(_(e,"selected-hover-outline",S,D),r===x&&r!==v&&(e.circleLeft="selected-hover")),e})()))},fd=({calendarDate:r,disabledDates:n,selectedStartDate:o,onSelect:i,onHover:l,minDate:d,maxDate:c,allowDisabledSelection:u,numberOfDays:f,setCalendarDate:g})=>{const m=a(null);h((()=>{if(m.current){const e=m.current;m.current=null,C(e)}}),[r]);const b=p((()=>o&&Me(o).isSame(r,"month")?Me(o):Me().isSame(r,"month")?Me():d&&r.isSame(Me(d),"month")?Me(d):Me(r).startOf("month")),[o,r,d]),y=e=>{const t=Me(e);if(Ve.isWithinRange(t,d?Me(d):void 0,c?Me(c):void 0)){if(!t.isSame(r,"month"))return null==g||g(e),void(m.current=e);C(e)}},x=v((()=>Ve.generateDays(r)),[r]),w=v((()=>b()),[b]),[$,C]=s(""),[S,D]=s(""),k=(e,t)=>{t&&!u||(i(e),e&&!Me(e).isSame(e,"month")&&D(""))},F=(e,t)=>{t&&!u||(D(e),l(e))},_=e=>{D(e),l(e)},E=()=>{D(""),l("")};return t(Zl,{role:"grid",onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||(C(""),D(""),l(""))},"data-testid":"calendar-content","aria-label":"Date grid",children:[x[0].map(((t,r)=>e(Gl,{"aria-hidden":!0,children:Me(t).format("ddd")},`week-day-${r}`))),x.map(((t,i)=>e(Ql,{role:"row",onMouseLeave:E,children:t.map(((t,i)=>e(hd,{date:t,calendarDate:r,selectedDate:o,hoverDate:S,focusDate:$,minDate:d,maxDate:c,disabledDates:n,allowDisabledSelection:u,onSelect:k,onHover:F,numberOfDays:f,onFocus:_,setFocusCell:y,tabIndex:Me(t).isSame(w,"day")?0:-1},`day-${i}`)))},i)))]})},pd=k.div`
    width: 100%;
    background: ${Gi.bg};
`,gd=({date:t,calendarDate:r,selectedDate:n,hoverDate:o,focusDate:i,minDate:a,maxDate:s,disabledDates:l,allowDisabledSelection:d,showActiveMonthDaysOnly:c,onSelect:u,onHover:h,onFocus:f,setFocusCell:p,tabIndex:g})=>{const m=Ve.isDisabledDay(t,l,a,s),b=!m||d,v=()=>{u(t,!b)},y={date:t,calendarDate:r,disabled:m,interactive:b,currentDateIndicator:!0,onSelect:v,onHover:()=>{h(t.format("YYYY-MM-DD"),!b)},onFocus:()=>{f(t.format("YYYY-MM-DD"))},onKeyDown:e=>{const r=e.key;if("Enter"===r||" "===r)return e.preventDefault(),void(b&&v());(e=>{let r;const n={ArrowLeft:()=>t.subtract(1,"day"),ArrowRight:()=>t.add(1,"day"),ArrowUp:()=>t.subtract(7,"day"),ArrowDown:()=>t.add(7,"day"),Home:()=>t.startOf("week"),End:()=>t.endOf("week"),PageUp:()=>e.shiftKey?t.subtract(1,"year"):t.subtract(1,"month"),PageDown:()=>e.shiftKey?t.add(1,"year"):t.add(1,"month")}[e.key];n&&(e.preventDefault(),r=n(),p(r.format("YYYY-MM-DD")))})(e)},role:"gridcell",focusDate:Me(i),tabIndex:g};return e(dd,Object.assign({},y,(()=>{const e={};r.month()!==t.month()?e.labelType=c?"hidden":"unavailable":Me().isSame(t,"day")&&!m&&(e.labelType="current");const i=t.isSame(n,"day"),a=t.isSame(o,"day");return i&&a?(e.labelType="selected-hover",e.circleLeft="selected-hover-outline",e.circleRight="selected-hover-outline"):i?(e.labelType="selected",e.circleLeft="selected-outline",e.circleRight="selected-outline"):a&&(e.labelType="hover",e.circleLeft="hover-subtle",e.circleRight="hover-subtle"),e})()))};Me.extend(je);const md=({calendarDate:r,disabledDates:n,selectedDate:o,onSelect:i,onHover:l,minDate:d,maxDate:c,allowDisabledSelection:u,showActiveMonthDaysOnly:f,setCalendarDate:g})=>{const m=a(null);h((()=>{if(m.current){const e=m.current;m.current=null,C(e)}}),[r]);const b=p((()=>o&&Me(o).isSame(r,"month")?Me(o):Me().isSame(r,"month")?Me():d&&r.isSame(Me(d),"month")?Me(d):Me(r).startOf("month")),[o,r,d]),y=e=>{const t=Me(e);if(Ve.isWithinRange(t,d?Me(d):void 0,c?Me(c):void 0)){if(!t.isSame(r,"month"))return null==g||g(e),void(m.current=e);C(e)}},x=v((()=>Ve.generateDays(r)),[r]),w=v((()=>b()),[b]),[$,C]=s(""),[S,D]=s(""),k=(e,t)=>{t&&!u||i(e)},F=(e,t)=>{t&&!u||(D(e),l(e))},_=e=>{D(e),l(e)},E=()=>{D(""),l("")};return t(Zl,{role:"grid",onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||(C(""),D(""),l(""))},"data-testid":"calendar-content","aria-label":"Date grid",children:[x[0].map(((t,r)=>e(Gl,{"aria-hidden":!0,children:Me(t).format("ddd")},`week-day-${r}`))),x.map(((t,i)=>e(Ql,{role:"row","aria-label":`Week ${i+1}`,onMouseLeave:E,children:t.map(((t,i)=>e(gd,{date:t,calendarDate:r,selectedDate:o,hoverDate:S,focusDate:$,minDate:d,maxDate:c,disabledDates:n,allowDisabledSelection:u,showActiveMonthDaysOnly:f,onSelect:k,onHover:F,onFocus:_,setFocusCell:y,tabIndex:Me(t).isSame(w,"day")?0:-1},`day-${i}`)))},i)))]})},bd=({date:t,calendarDate:r,selectedDate:n,hoverDate:o,focusDate:i,minDate:a,maxDate:s,disabledDates:l,allowDisabledSelection:d,onSelect:c,onHover:u,onFocus:h,setFocusCell:f,tabIndex:p})=>{const g=Ve.isDisabledDay(t,l,a,s),m=!g||d,{start:b,end:v}=Ve.getWeekStartEnd(Qe.toDayjs(n)),{start:y,end:x}=Ve.getWeekStartEnd(Qe.toDayjs(o)),{start:w,end:$}=Ve.getWeekStartEnd(t),C=t.isSame(w,"day"),S=n&&t.isBetween(b,v,"day","[]"),D=o&&t.isBetween(y,x,"day","[]"),k=S&&t.isSame(b)||D&&t.isSame(y),F=S&&t.isSame(v)||D&&t.isSame(x),_=`From ${Me(w).format("D MMMM")} to ${Me($).format("D MMMM")}, ${g?"Unavailable":"Available"}`,E=()=>{c(t,!m)},O={date:t,calendarDate:r,disabled:g,interactive:m,currentDateIndicator:!0,onSelect:E,onHover:()=>{u(t.format("YYYY-MM-DD"),!m)},onFocus:()=>{h(t.format("YYYY-MM-DD"))},onKeyDown:e=>{const r=e.key;if("Enter"===r||" "===r)return e.preventDefault(),void(m&&E());(e=>{let r;const n={ArrowUp:()=>t.subtract(7,"day"),ArrowDown:()=>t.add(7,"day"),Home:()=>t.startOf("week"),End:()=>t.endOf("week"),PageUp:()=>e.shiftKey?t.subtract(1,"year"):t.subtract(1,"month"),PageDown:()=>e.shiftKey?t.add(1,"year"):t.add(1,"month")}[e.key];n&&(e.preventDefault(),r=n(),f(r.format("YYYY-MM-DD")))})(e)},focusDate:Me(i),tabIndex:p,label:_,ariaHidden:!C||void 0,role:C?"button":"none"};return e(dd,Object.assign({},O,(()=>{const e={};return r.month()!==t.month()?e.labelType="unavailable":Me().isSame(t,"day")&&!g&&(e.labelType="current"),e})(),(()=>{const e={};let t,r;return S&&D?(t="selected-hover-outline",r="selected-hover"):S?(t="selected-outline",r="selected"):D&&(t="hover",r="hover"),t&&(e.labelType=r,k?e.circleLeft=t:e.bgLeft=t,F?e.circleRight=t:e.bgRight=t),e})()))},vd=({calendarDate:r,disabledDates:n,selectedStartDate:o,onSelect:i,onHover:l,minDate:d,maxDate:c,allowDisabledSelection:u,setCalendarDate:f})=>{const g=a(null);h((()=>{if(g.current){const e=g.current;g.current=null,$(e)}}),[r]);const m=p((()=>o&&Me(o).isSame(r,"month")?Me(o):Me().isSame(r,"month")?Me().startOf("week"):d&&r.isSame(Me(d),"month")?Me(d):Me(r).startOf("month")),[o,r,d]),b=e=>{const t=Me(e);if(Ve.isWithinRange(t,d?Me(d):void 0,c?Me(c):void 0)){if(!t.isSame(r,"month"))return null==f||f(e),void(g.current=e);$(e)}},y=v((()=>Ve.generateDays(r)),[r]),x=v((()=>m()),[m]),[w,$]=s(""),[C,S]=s(""),D=(e,t)=>{if(t&&!u)return;const r=e.startOf("week");i(r),e&&!Me(e).isSame(r,"month")&&S("")},k=(e,t)=>{t&&!u||(S(e),l(e))},F=e=>{S(e),l(e)},_=()=>{S(""),l("")};return t(Zl,{"data-testid":"calendar-content",onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||($(""),S(""),l(""))},"aria-label":"Week selection",children:[y[0].map(((t,r)=>e(Gl,{"aria-hidden":!0,children:Me(t).format("ddd")},`week-day-${r}`))),y.map(((t,i)=>e(Ql,{onMouseLeave:_,role:"group",children:t.map(((t,i)=>e(bd,{date:t,calendarDate:r,selectedDate:o,hoverDate:C,focusDate:w,minDate:d,maxDate:c,disabledDates:n,allowDisabledSelection:u,onSelect:D,onHover:k,onFocus:F,setFocusCell:b,tabIndex:Me(t).isSame(x,"day")?0:-1},`day-${i}`)))},i)))]})},yd=o.forwardRef((({disabledDates:t,onYearMonthDisplayChange:r,onSelect:n,onHover:o,onDismiss:i,value:s,endValue:l,currentFocus:d,withButton:c,variant:u,minDate:h,maxDate:f,allowDisabledSelection:p,selectWithinRange:g=!0,initialCalendarDate:m,numberOfDays:b,showActiveMonthDaysOnly:v=!1,isFocusable:x=!1},w)=>{const $=a(null),C=a(void 0),S=a(null);y(w,(()=>({reset(){var e;null===(e=$.current)||void 0===e||e.resetView()},setCalendarDate(e){var t;null===(t=$.current)||void 0===t||t.setCalendarDate(e)},contains(e){var t;return(null===(t=S.current)||void 0===t?void 0:t.contains(e))||!1}})));const D=e=>{var t;const r=e.format("YYYY-MM-DD");null===(t=$.current)||void 0===t||t.setCalendarDate(r),F(r)},k=e=>{_(e)},F=e=>{n&&n(e)},_=e=>{o&&o(e)},E=e=>{if(r){const t={month:e.month()+1,year:e.year()};r(t)}};return e(pd,{ref:S,children:e(ql,{ref:$,withButton:c,doneButtonDisabled:(()=>{if(!c)return;let e=!0;switch(u){case"single":e=!1;break;case"range":case"fixed-range":e=!!s!=!!l;break;case"week":e=!s&&!l}return e})(),onDismiss:i,minDate:h,maxDate:f,selectWithinRange:g,currentFocus:d,selectedStartDate:s,selectedEndDate:l,allowDisabledSelection:p,onCalendarDateChange:e=>{var t;C.current&&C.current.isSame(e,"month")||(null===(t=$.current)||void 0===t||t.setCalendarDate(e.format("YYYY-MM-DD")),E(e)),C.current=e},initialCalendarDate:m,isFocusable:x,children:({calendarDate:r})=>(r=>{var n;const o=null===(n=$.current)||void 0===n?void 0:n.setCalendarDate;switch(u){case"week":return e(vd,{calendarDate:r,disabledDates:t,selectedStartDate:s,minDate:h,maxDate:f,allowDisabledSelection:p,onSelect:D,onHover:k,setCalendarDate:o});case"fixed-range":return e(fd,{calendarDate:r,disabledDates:t,selectedStartDate:s,minDate:h,maxDate:f,allowDisabledSelection:p,onSelect:D,onHover:k,numberOfDays:b,setCalendarDate:o});case"single":return e(md,{calendarDate:r,disabledDates:t,selectedDate:s,minDate:h,maxDate:f,allowDisabledSelection:p,showActiveMonthDaysOnly:v,onSelect:D,onHover:k,setCalendarDate:o});default:return e(ud,{calendarDate:r,currentFocus:d,disabledDates:t,selectedStartDate:s,selectedEndDate:l,minDate:h,maxDate:f,isNewSelection:g,allowDisabledSelection:p,showActiveMonthDaysOnly:v,onSelect:D,onHover:k,setCalendarDate:o})}})(r)})})})),xd=o.forwardRef(((t,r)=>{const{elementWidth:n,setFloatingRef:o,getFloatingProps:i,styles:a}=Us();return e(qs,Object.assign({$width:n,"data-testid":"calendar-dropdown",ref:o,style:a},i(),{children:e(yd,Object.assign({ref:r},t))}))})),wd=F`
    outline-offset: -1px;
    outline: ${Ji["width-020"]} ${Ji.solid} ${Gi["border-focus"]};
`,$d=F`
    outline-color: ${Gi["border-focus"]};
`,Cd=F`
    outline-color: ${Gi["border-disabled"]};
`,Sd=F`
    outline-color: ${Gi["border-error-focus"]};
`,Dd=F`
    outline: none;
`,kd=k.div`
    border: ${Ji["width-010"]} ${Ji.solid} ${Gi.border};
    border-radius: ${ta.sm};
    background: ${Gi.bg};

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
                background: ${Gi["bg-disabled"]};
                cursor: not-allowed;

                &:focus-within {
                    ${Cd}
                }
                ${e.$focused&&Cd}
            `:e.$error?F`
                border-color: ${Gi["border-error"]};

                &:focus-within {
                    ${Sd}
                }
                ${e.$focused&&Sd}
            `:void 0}
    ${e=>{if(e.$noBorder)return F`
                border-color: transparent;
                background: transparent;
                &:focus-within {
                    ${Dd}
                }
            `}}
`,Fd=k(kd)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 ${ea["spacing-16"]} 0
        ${e=>e.$readOnly?"0":ea["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,_d=k.input`
    ${e=>"small"===e.$variant?Qi["body-md-regular"]:Qi["body-baseline-regular"]}
    color: ${Gi.text};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    &:disabled {
        color: ${Gi["text-subtler"]};

        &:hover {
            cursor: not-allowed;
        }
    }

    &::placeholder,
    &::-webkit-input-placeholder {
        color: ${Gi["text-subtler"]};
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
        outline: ${Ji["width-010"]} ${Ji.solid}
            ${Gi["border-focus"]};
        border-radius: ${ta.sm};
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
                ${Id}, ${zd} {
                    color: ${Gi["text-subtler"]};
                }
            `}}
`,Id=k(_d)`
    background: transparent;
    text-align: center;
`,Md=k(Id)`
    width: 2rem;
    margin-right: ${ea["spacing-4"]};
`,Ad=k(Id)`
    width: 2.5rem;
`,Bd=k(Id)`
    width: 3rem;
    margin-left: ${ea["spacing-4"]};
`,zd=k.span`
    ${Qi["body-baseline-regular"]}
    ${e=>{if(e.$inactive)return F`
                color: ${Gi.text};
            `}}
`,jd=k.div`
    ${Qi["body-baseline-regular"]}
    background-color: ${Gi.bg};
    color: ${Gi["text-subtler"]};
    position: absolute;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    ${e=>e.$disabled?F`
                background-color: ${Gi["bg-disabled"]};
                cursor: not-allowed;
            `:e.$hide?F`
                display: none;
            `:void 0}
`;Me.extend(Be);const Rd=o.forwardRef((({disabled:r,readOnly:n,names:o,value:i,focused:l,hoverValue:d,placeholder:c,label:u,onChange:f,onFocus:p,onBlur:g,hideInputKeyboard:m,inputLabels:b=["Date","Month","Year"]},v)=>{const x=m?"none":"numeric",[w,$,C]=nr(""),[S,D,k]=nr(""),[F,_,E]=nr(""),[O,T]=s("none"),[I,M]=s(!1),A=a(null),B=a(null),z=a(null),j=a(null),[R,L,P]=U(d);h((()=>{var e;const[t="",r="",n=""]=U(i);$(t),D(r),_(n),t||r||n||!A.current||!A.current.contains(document.activeElement)||null===(e=B.current)||void 0===e||e.focus()}),[i]),h((()=>{var e;l||T("none"),l&&(M(!0),A.current&&!A.current.contains(document.activeElement)&&(null===(e=B.current)||void 0===e||e.focus()))}),[l]),y(v,(()=>({ref:A,resetPlaceholder(){M(!1)},resetInput(){const[e="",t="",r=""]=U(i);$(e),D(t),_(r)},focusYearRef(){var e;null===(e=j.current)||void 0===e||e.focus()}})),[$,D,_,i]);const N=e=>{var t;e.preventDefault(),null===(t=B.current)||void 0===t||t.focus()},H=e=>{e.target.select();const t=e.target.name;T(t)},W=e=>{const[t,r,n]=o,i={[t]:C.current,[r]:k.current,[n]:E.current},a=e.target.name,s=i[a],l=a!==n?rt.padValue(s,!0):s;switch(a){case t:i[t]=l,$(l);break;case r:i[r]=l,D(l)}const d=`${i[n]}-${i[r]}-${i[t]}`,c=Me(d,"YYYY-MM-DD",!0).isValid(),u=!i[t]&&!i[r]&&!i[n];c&&s!==l&&f(d),A.current&&!A.current.contains(e.relatedTarget)&&(T("none"),null==g||g(u||c))},Y=e=>{var t,r;if(d)return;const n=e.target.name,i=e.target.value.replace(/[^0-9]/g,""),a={day:w,month:S,year:F};switch(n){case o[0]:a.day=i,$(i),2===i.length&&(null===(t=z.current)||void 0===t||t.focus());break;case o[1]:a.month=i,D(i),2===i.length&&(null===(r=j.current)||void 0===r||r.focus());break;case o[2]:a.year=i,_(i)}if(!a.day&&!a.month&&!a.year)return void f("");const s=`${a.year}-${a.month}-${a.day}`;Me(s,"YYYY-MM-DD",!0).isValid()&&f(s)},V=e=>{var t,r;"Backspace"!==e.code&&"Backspace"!==e.key||(O===o[1]&&0===S.length&&(null===(t=B.current)||void 0===t||t.focus()),O===o[2]&&0===F.length&&(null===(r=z.current)||void 0===r||r.focus()))};function U(e){if(e){const t=Xe.sanitizeInput(e);if(!t)return[void 0,void 0,void 0];const r=Me(t,"YYYY-MM-DD",!0);return[rt.padValue(r.date().toString()),rt.padValue((r.month()+1).toString()),r.year().toString()]}return[void 0,void 0,void 0]}return t(Od,{role:"group","aria-label":u,onClick:()=>{var e;r||n||(M(!0),A.current&&!A.current.contains(document.activeElement)&&(null===(e=B.current)||void 0===e||e.focus()))},onFocus:e=>{r||(M(!0),l||null==p||p(e))},children:[t(Td,{ref:A,$hover:!!d,children:[e(Md,{ref:B,name:o[0],maxLength:2,value:null!=R?R:w,onFocus:H,onBlur:W,onChange:Y,type:"text",inputMode:x,pattern:"[0-9]{2}","data-testid":`${o[0]}-input`,"aria-label":b[0],disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:O!==o[0]||n?"DD":""}),e(zd,{$inactive:0===w.length,children:"/"}),e(Ad,{ref:z,name:o[1],maxLength:2,value:null!=L?L:S,onFocus:H,onBlur:W,onChange:Y,onKeyDown:V,type:"text",inputMode:x,pattern:"[0-9]{2}","data-testid":`${o[1]}-input`,"aria-label":b[1],disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:O!==o[1]||n?"MM":""}),e(zd,{$inactive:0===S.length,children:"/"}),e(Bd,{ref:j,name:o[2],maxLength:4,value:null!=P?P:F,onFocus:H,onBlur:W,onChange:Y,onKeyDown:V,type:"text",inputMode:x,pattern:"[0-9]{4}","data-testid":`${o[2]}-input`,"aria-label":b[2],disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:O!==o[2]||n?"YYYY":""})]}),(()=>{if(!i&&!n&&c)return e(jd,{$hide:I,$disabled:r,onMouseDown:N,children:c})})()]})})),Ld=k(Fd)`
    height: 3rem;
`,Pd=t=>{var{minDate:r,maxDate:n,disabled:o,disabledDates:i,error:l,hideInputKeyboard:d,value:c,onChange:u,onFocus:f,onBlur:p,onYearMonthDisplayChange:g,withButton:m=!0,readOnly:b,id:v,allowDisabledSelection:y,zIndex:x,dropdownRootNode:w}=t,$=_e(t,["minDate","maxDate","disabled","disabledDates","error","hideInputKeyboard","value","onChange","onFocus","onBlur","onYearMonthDisplayChange","withButton","readOnly","id","allowDisabledSelection","zIndex","dropdownRootNode"]);const[C,S]=s(Xe.sanitizeInput(c)),[D,k]=s(Xe.sanitizeInput(c)),[F,_]=s(void 0),[E,O]=s(!1),[T,I]=s(!1),M=a(null),A=a(null),B=a(null);h((()=>{const e=Xe.sanitizeInput(c);S(e),k(e)}),[c]);const z=e=>{!y&&Xe.isDateDisabled(e,{disabledDates:i,minDate:r,maxDate:n})||(k(e),m||(H(e),S(e),e&&O(!1)))},j=e=>{var t;k(e),m||(H(e),S(e),e&&(null===(t=A.current)||void 0===t||t.focusYearRef(),O(!1)),_(void 0))},R=()=>{b||o||(O(!0),T||(I(!0),f&&f()))},L=e=>{var t,r,n;const o=e.relatedTarget,i=B.current&&B.current.contains(o),a=M.current&&M.current.contains(o),s=(null===(t=null==o?void 0:o.matches)||void 0===t?void 0:t.call(o,"[data-floating-ui-focusable]"))||(null===(r=null==o?void 0:o.matches)||void 0===r?void 0:r.call(o,"[data-floating-ui-focus-guard]"));(T&&!E&&!a&&!s||E&&!a&&!i&&!s)&&(null===(n=A.current)||void 0===n||n.resetInput(),k(C),I(!1),O(!1),W())},P=e=>{_(e)},N=e=>{var t,r;switch(e){case"reset":k(C);break;case"confirmed":S(D),H(D)}Me(D,"YYYY-MM-DD",!0).isValid()?null===(t=A.current)||void 0===t||t.focusYearRef():null===(r=M.current)||void 0===r||r.focus(),O(!1)},H=e=>{u&&u(e)},W=()=>{p&&p()};return e(Ks,{enabled:!b&&!o,isOpen:E,renderElement:()=>e(Ld,Object.assign({role:"group",tabIndex:0,ref:M,onBlur:L,onFocus:R,$disabled:o,$readOnly:b,$focused:T,$error:l,id:v,"data-testid":$["data-testid"],"aria-disabled":o},$,{children:e(Rd,{ref:A,disabled:o,onChange:z,readOnly:b,focused:E,names:["start-day","start-month","start-year"],value:D,hoverValue:F,hideInputKeyboard:d})})),renderDropdown:({elementWidth:t})=>e(xd,{variant:"single",ref:B,initialCalendarDate:D,withButton:m,value:D,disabledDates:i,minDate:r,maxDate:n,allowDisabledSelection:y,onHover:P,onSelect:j,onDismiss:N,onYearMonthDisplayChange:g,width:t,isFocusable:!b&&!o}),onClose:()=>{var e;null===(e=A.current)||void 0===e||e.resetInput(),k(C),O(!1),I(!1),W(),_(void 0)},onDismiss:()=>{var e,t;null===(e=A.current)||void 0===e||e.resetInput(),null===(t=M.current)||void 0===t||t.focus(),k(C),O(!1)},customZIndex:x,offset:16,rootNode:w})},Nd=k.div`
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
                        100% - ${Qi.Spec["body-size-baseline"]} -
                            ${ea["spacing-16"]}
                    );
                    flex: unset;
                }

                [data-id="range-container-elem2-container"] {
                    margin-top: ${ea["spacing-8"]};
                }
            `}}
`,Hd=k.div`
    width: 100%; // Force next flex item to break to next line
`,Wd=k.div`
    display: flex;
    flex: 1;
    align-items: center;
`,Yd=k(se)`
    color: ${Gi.icon};
    width: ${Qi.Spec["body-size-baseline"]};
    height: ${Qi.Spec["body-size-baseline"]};
    flex-shrink: 0;
    margin: 0 ${ea["spacing-8"]};
    align-self: center;
`,Vd=k.div`
    position: absolute;
    background: ${e=>e.$error?Gi["border-error-focus-strong"]:Gi["border-focus-strong"]};
    height: 2px;
    // half - half padding - half icon width
    width: calc(
        50% - ${ea["spacing-8"]} - (${Qi.Spec["body-size-baseline"]} / 2)
    );
    transition: left ${Xi["duration-350"]} ${Xi["ease-standard"]},
        opacity ${Xi["duration-350"]} ${Xi["ease-standard"]};
    left: 0;
    bottom: 0;

    ${e=>{switch(e.$position){case"start":return F`
                    opacity: 1;
                `;case"end":return F`
                    left: calc(50% + ${ea["spacing-16"]});
                    opacity: 1;
                `;case"none":return F`
                    opacity: 0;
                `}}}

    ${e=>{if(e.$wrap)return F`
                display: none;
            `}}
`,Ud=({children:r,currentActive:n,error:o,className:i,wrap:a})=>{const[s,l]=r;return t(Nd,{className:i,$wrap:a,children:[e(Wd,{"data-id":"range-container-elem1-container",children:s}),e(Yd,{}),a&&e(Hd,{}),e(Wd,{"data-id":"range-container-elem2-container",children:l}),e(Vd,{"data-id":"range-container-indicator",$position:n,$error:o,$wrap:a})]})},Kd=(e,t,r)=>{const n=[];e&&n.push(`[${e}]`),n.push(t,r),console.log(...n)},qd=k(Fd)`
    ${e=>{if(e.$wrap)return!0===e.$readOnly?F`
                    padding: ${ea["spacing-12"]} 0;
                `:F`
                padding: ${ea["spacing-12"]} ${ea["spacing-16"]};
            `}}
`,Zd=k.div`
    display: flex;
    align-items: center;
    height: calc(3rem - 2px); // exclude top and bottom borders
    width: 100%;

    ${e=>e.$wrap&&F`
            height: fit-content;
        `}
`,Gd={initialStart:"",initialEnd:"",selectedStart:"",selectedEnd:"",currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1,focused:!1},Qd=r=>{var{minDate:n,maxDate:o,disabled:i,disabledDates:l,error:d,hideInputKeyboard:c,value:u,valueEnd:f,onChange:g,onFocus:m,onBlur:b,onYearMonthDisplayChange:v,withButton:y=!0,variant:w="range",numberOfDays:$=7,readOnly:C,id:S,allowDisabledSelection:D,zIndex:k,dropdownRootNode:F}=r,_=_e(r,["minDate","maxDate","disabled","disabledDates","error","hideInputKeyboard","value","valueEnd","onChange","onFocus","onBlur","onYearMonthDisplayChange","withButton","variant","numberOfDays","readOnly","id","allowDisabledSelection","zIndex","dropdownRootNode"]);const[E,O]=s(),[T,I]=s(void 0),M="week"===w,A="fixed-range"===w,[B,z]=s(!1),[j,R]=s(!1),[{selectedStart:L,selectedEnd:P,currentFocus:N,calendarOpen:H,isStartDirty:W,isEndDirty:Y,focused:V},U]=(({initialState:e,reducers:t,name:r,debug:n})=>{const[o,i]=x(((e,r)=>t[r.type]?t[r.type](e,r.payload):e),e);return[o,Object.fromEntries(Object.keys(t).map((e=>[e,t=>{n&&Kd(r,e,t),i({type:e,payload:t})}])))]})({name:"date-range-input",initialState:Gd,reducers:{blur:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1,focused:!1}),dismiss:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),changeStart:(e,t)=>Object.assign(Object.assign({},e),{selectedStart:t,isStartDirty:!0}),changeEnd:(e,t)=>Object.assign(Object.assign({},e),{selectedEnd:t,isEndDirty:!0}),reselectStart:e=>Object.assign(Object.assign({},e),{selectedStart:"",currentFocus:"start"}),reselectEnd:e=>Object.assign(Object.assign({},e),{selectedEnd:"",currentFocus:"end"}),focus:(e,t)=>Object.assign(Object.assign({},e),{currentFocus:M?"none":A?"start":t,calendarOpen:!C,focused:!0}),cancel:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1}),done:(e,t)=>Object.assign(Object.assign({},e),{selectedStart:t.start,selectedEnd:t.end,initialStart:t.start,initialEnd:t.end,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),resetStart:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart}),resetEnd:e=>Object.assign(Object.assign({},e),{selectedEnd:e.initialEnd}),resetRange:(e,t)=>Object.assign(Object.assign({},e),{initialStart:t.start,selectedStart:t.start,initialEnd:t.end,selectedEnd:t.end})}}),K=a(!1),q=a(null),Z=a(null),G=a(null),Q=a(null),X=(({maxWidth:e,targetRef:t})=>{const[r,n]=s(!1);return Qt({targetRef:t,refreshMode:"throttle",refreshRate:300,handleHeight:!1,onResize:p((t=>{n(t<=e)}),[e])}),r})({maxWidth:320,targetRef:q});h((()=>{U.resetRange({start:Xe.sanitizeInput(u),end:Xe.sanitizeInput(f)})}),[u,f]),h((()=>{"start"===N?O(L):"end"===N&&P&&O(P)}),[N]);const J=e=>{var t,r,n;"Enter"!==e.code||y||(L&&P?(U.done({start:L,end:P}),null==g||g(L,P)):(U.dismiss(),null===(t=q.current)||void 0===t||t.focus(),null===(r=G.current)||void 0===r||r.resetPlaceholder(),null===(n=Q.current)||void 0===n||n.resetPlaceholder()))},ee=e=>{var t;if(pe(e))return void(K.current=!0);if(U.changeStart(e),e&&(null===(t=Z.current)||void 0===t||t.setCalendarDate(e)),K.current=!1,!e)return void(y||P||!Y||(U.resetRange({start:"",end:""}),null==g||g("","")));if(!P)return void U.focus("end");if(Me(e).isAfter(P,"day"))U.reselectEnd();else{if(Y)return y?void 0:(U.done({start:e,end:P}),void(null==g||g(e,P)));U.focus("end")}},te=e=>{var t,r,n;if(pe(e))return void(K.current=!0);if(Me(e).isBefore(L,"day"))return U.changeStart(e),null===(t=Z.current)||void 0===t||t.setCalendarDate(e),void U.reselectEnd();if(U.changeEnd(e),e&&(null===(r=Z.current)||void 0===r||r.setCalendarDate(e)),e){if(L)return y?void 0:(null===(n=Q.current)||void 0===n||n.focusYearRef(),U.done({start:L,end:e}),void(null==g||g(L,e)));U.focus("start")}else y||L||!W||(U.resetRange({start:"",end:""}),null==g||g("",""))},re=e=>{var t,r;if(pe(e))return void(K.current=!0);if(U.changeStart(e),null===(t=Z.current)||void 0===t||t.setCalendarDate(e),K.current=!1,!e)return void(y?U.changeEnd(""):(U.resetRange({start:"",end:""}),null==g||g("","")));const n=Me(e).format("YYYY-MM-DD"),o=Me(n).add($-1,"day").format("YYYY-MM-DD");return U.changeStart(n),U.changeEnd(o),K.current=!1,y?void 0:(U.done({start:n,end:o}),null===(r=G.current)||void 0===r||r.focusYearRef(),void(null==g||g(n,o)))},ne=()=>{(M||A)&&R(!0),M&&z(!0),C||i||V||(U.focus("start"),null==m||m())},oe=e=>{var t,r,n,o;const i=e.relatedTarget,a=Z.current&&Z.current.contains(i),s=q.current&&q.current.contains(i),l=(null===(t=null==i?void 0:i.matches)||void 0===t?void 0:t.call(i,"[data-floating-ui-focusable]"))||(null===(r=null==i?void 0:i.matches)||void 0===r?void 0:r.call(i,"[data-floating-ui-focus-guard]"));(V&&!H&&!s&&!l||H&&!s&&!a&&!l)&&(U.blur(),R(!1),z(!1),null===(n=G.current)||void 0===n||n.resetPlaceholder(),null===(o=Q.current)||void 0===o||o.resetPlaceholder(),fe())},ie=e=>t=>{t.stopPropagation(),C||(U.focus(e),ae(),se(),V||null==m||m())},ae=()=>{if(M){const e=Qe.toDayjs(L).startOf("week").format("YYYY-MM-DD");z(!0),R(!0),O(e)}},se=()=>{A&&(R(!0),O(L))},le=e=>{var t;e&&!K.current||(U.resetStart(),null===(t=G.current)||void 0===t||t.resetInput())},de=e=>{var t;e&&!K.current||(U.resetEnd(),null===(t=Q.current)||void 0===t||t.resetInput())},ce=e=>{switch(w){case"week":(e=>{var t;const r=Me(e).startOf("week").format("YYYY-MM-DD"),n=Me(e).endOf("week").format("YYYY-MM-DD");if(U.changeStart(r),U.changeEnd(n),K.current=!1,!y)null===(t=Q.current)||void 0===t||t.focusYearRef(),U.done({start:r,end:n}),null==g||g(r,n)})(e);break;case"fixed-range":re(e);break;default:"start"===N?ee(e):"end"===N&&te(e)}},ue=e=>{var t,r,n;switch(null===(t=q.current)||void 0===t||t.focus(),e){case"reset":U.cancel();break;case"confirmed":if(U.done({start:L,end:P}),null==g||g(L,P),M)break;ge(L,P)&&("range"===w?null===(r=Q.current)||void 0===r||r.focusYearRef():null===(n=G.current)||void 0===n||n.focusYearRef())}},he=e=>{I(e)},fe=()=>{b&&b()},pe=e=>!D&&e&&Xe.isDateDisabled(e,{disabledDates:l,minDate:n,maxDate:o}),ge=(e,t)=>!(!e||!t)&&Me(e).isBefore(t,"day"),me=e=>{let t={start:void 0,end:void 0};switch(w){case"range":t={start:"start"===N?T:void 0,end:"end"===N?T:void 0};break;case"week":if(!T)return;t={start:Me(T).startOf("week").format("YYYY-MM-DD"),end:Me(T).endOf("week").format("YYYY-MM-DD")};break;case"fixed-range":if(!T)return;t={start:Me(T).format("YYYY-MM-DD"),end:Me(T).add($-1,"day").format("YYYY-MM-DD")}}return t[e]};return e(Ks,{enabled:!C&&!i,isOpen:H,onClose:()=>{var e,t;U.blur(),z(!1),R(!1),null===(e=G.current)||void 0===e||e.resetPlaceholder(),null===(t=Q.current)||void 0===t||t.resetPlaceholder(),fe()},onDismiss:()=>{var e,t,r;U.dismiss(),null===(e=q.current)||void 0===e||e.focus(),null===(t=G.current)||void 0===t||t.resetPlaceholder(),null===(r=Q.current)||void 0===r||r.resetPlaceholder()},renderElement:()=>e(qd,Object.assign({role:"group",ref:q,tabIndex:0,onFocus:ne,onBlur:oe,$focused:V,$disabled:i,$readOnly:C,$error:d,$wrap:X,id:S,"data-testid":_["data-testid"],"aria-disabled":i,onKeyDown:J},_,{children:t(Ud,{currentActive:N,wrap:X,error:d,children:[e(Zd,{$wrap:X,children:e(Rd,{ref:G,placeholder:"From",names:["start-day","start-month","start-year"],inputLabels:["Start Date","Start Month","Start Year"],value:L,disabled:i,readOnly:B||C,focused:"start"===N,hoverValue:me("start"),onChange:A?re:ee,onFocus:ie("start"),onBlur:le,hideInputKeyboard:c})}),e(Zd,{$wrap:X,children:e(Rd,{ref:Q,placeholder:"To",names:["end-day","end-month","end-year"],inputLabels:["End Date","End Month","End Year"],value:P,disabled:i,readOnly:j||C,focused:"end"===N,hoverValue:me("end"),onChange:te,onFocus:ie("end"),onBlur:de,hideInputKeyboard:c})})]})})),renderDropdown:({elementWidth:t})=>e(xd,{ref:Z,variant:w,initialCalendarDate:E,withButton:y,value:L,endValue:P,selectWithinRange:W||Y,currentFocus:N,disabledDates:l,minDate:n,maxDate:o,allowDisabledSelection:D,onSelect:ce,onDismiss:ue,onHover:he,onYearMonthDisplayChange:v,numberOfDays:$,width:t,isFocusable:!C&&!i}),customZIndex:k,offset:16,rootNode:F})},Xd=k(yl)`
    flex-direction: ${e=>"right"===e.$buttonIconPosition?"row-reverse":"row"};
    gap: 0.5rem;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`,Jd=(r,n)=>{const{children:i,disabled:a=!1,styleType:s="default",danger:l=!1,icon:d,iconPosition:c="left",loading:u=!1,focusableWhenDisabled:h=!1,onClick:f}=r,p=_e(r,["children","disabled","styleType","danger","icon","iconPosition","loading","focusableWhenDisabled","onClick"]),g={$buttonIconPosition:c,$buttonStyle:a?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return t(Xd,Object.assign({ref:n,"data-testid":p["data-testid"]||"button-with-icon",disabled:a&&!h,"aria-disabled":a,"aria-busy":u,onClick:a?void 0:f},g,p,{children:[u?e(ol,{}):d?o.cloneElement(d,{"aria-hidden":!0}):null,e("span",{children:i})]}))};Jd.displayName="ButtonWithIcon.Default";const ec=(r,n)=>{const{children:i,disabled:a=!1,styleType:s="default",danger:l=!1,icon:d,iconPosition:c="left",loading:u=!1,focusableWhenDisabled:h=!1,onClick:f}=r,p=_e(r,["children","disabled","styleType","danger","icon","iconPosition","loading","focusableWhenDisabled","onClick"]),g={$buttonIconPosition:c,$buttonStyle:a?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return t(Xd,Object.assign({ref:n,"data-testid":p["data-testid"]||"button-with-icon",disabled:a&&!h,"aria-disabled":a,"aria-busy":u,onClick:a?void 0:f},g,p,{children:[u?e(ol,{}):d?o.cloneElement(d,{"aria-hidden":!0}):null,e("span",{children:i})]}))};ec.displayName="ButtonWithIcon.Small";const tc={Default:o.forwardRef(Jd),Small:o.forwardRef(ec)},rc=({className:t,progress:r,color:n,"data-testid":o})=>e(nc,{className:t,$innerWidth:r,$color:n,"data-testid":o,children:e("progress",{value:100*r,max:100})}),nc=k.div`
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

    ${e=>{const{$color:t}=e;let r;return r=t&&"string"==typeof t?t:t?t(e):Gi["icon-primary-subtle"](e),F`
            border: ${Ji["width-010"]} ${Ji.solid} ${r};
            border-radius: ${ta.sm};

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
    border-radius: ${ta.sm};
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
                    background-color: ${Gi.bg};
                    border: ${Ji["width-010"]} ${Ji.solid}
                        ${Gi["border-primary"]};
                    color: ${Gi["text-primary"]};

                    &:hover {
                        background-color: ${Gi["bg-hover-neutral"]};
                    }
                `;case"light":return F`
                    background-color: ${Gi.bg};
                    border: ${Ji["width-010"]} ${Ji.solid}
                        ${Gi.border};
                    color: ${Gi["text-primary"]};

                    &:hover {
                        background-color: ${Gi["bg-hover-neutral"]};
                    }
                `;case"disabled":return F`
                    background-color: ${Gi["bg-disabled"]};
                    border: ${Ji["width-010"]} ${Ji.solid}
                        ${Gi["border-disabled"]};
                    color: ${Gi["text-disabled"]};
                    cursor: not-allowed;
                `;default:return F`
                    background-color: ${Gi["bg-primary"]};
                    border: none;
                    color: ${Gi["text-inverse"]};

                    &:hover {
                        background-color: ${Gi["bg-primary-hover"]};
                    }
                `}}}
`,ic=o.forwardRef(((t,r)=>{var{"data-testid":n,styleType:o="primary",children:i,sizeType:a="default",type:s="button",disabled:l=!1,focusableWhenDisabled:d=!1,onClick:c}=t,u=_e(t,["data-testid","styleType","children","sizeType","type","disabled","focusableWhenDisabled","onClick"]);return e(oc,Object.assign({"data-testid":n||"iconButton",ref:r,type:s,$styleType:l?"disabled":o,$sizeType:a,"aria-disabled":l,disabled:l&&!d,onClick:l?void 0:c},u,{children:i}))})),ac=k.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${e=>{return t=e.$show,r=e.$animationFrom||"bottom",t?`\n\t\t\t${r}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${r}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var t,r}}

    ${oa.MaxWidth.sm} {
        height: calc(
            ${e=>e.$verticalHeight?`${e.$verticalHeight}px`:"1vh"} * 100
        );

        top: ${e=>e.$offsetTop||0}px;
    }
`,sc=Object.assign((t=>{var{id:r="modal",show:n,animationFrom:o="bottom",children:i,enableOverlayClick:a=!0,rootComponentId:s,zIndex:l,onOverlayClick:d,dismissKeyboardOnShow:c=!0}=t,u=_e(t,["id","show","animationFrom","children","enableOverlayClick","rootComponentId","zIndex","onOverlayClick","dismissKeyboardOnShow"]);const{verticalHeight:f,offsetTop:p}=Ya();return h((()=>{var e,t;n&&c&&(null===(t=null===(e=document.activeElement)||void 0===e?void 0:e.blur)||void 0===t||t.call(e))}),[n]),e(La,{"data-testid":`${r}-overlay`,show:n,enableOverlayClick:a,onOverlayClick:d,id:r,rootId:s,zIndex:l,children:e(ac,Object.assign({$show:n,$animationFrom:o,"data-testid":r,$verticalHeight:f,$offsetTop:p},u,{children:i}))})}),{Box:Oa}),lc=F`
    ${e=>`\n        ${oa.MaxWidth.sm(e)},\n        (orientation: landscape) and (max-height: ${na["sm-max"](e)}px)\n    `}
`,dc=F`
    ${e=>`\n        @media (orientation: landscape) and (max-height: ${na["sm-max"](e)}px)\n    `}
`,cc=k.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    ${e=>F`
            ${Ji.Util["dashed-default"]({radius:ta.sm,thickness:Ji["width-040"],colour:e.$disabled?Gi["border-disabled"]:Gi.border})}

            background-color: ${e.$disabled?Gi["bg-disabled"]:Gi.bg};
        `}
    height: 14.125rem;
`,uc=k(Dl.Default)`
    width: fit-content;
    margin: 0 ${ea["spacing-20"]};

    &:disabled {
        border-color: ${Gi["border-strong"]};
    }
`,hc=k(ic)`
    position: absolute;
    top: ${ea["spacing-16"]};
    right: ${ea["spacing-16"]};

    &:disabled {
        border-color: ${Gi["border-strong"]};
    }
`,fc=k.img`
    display: block;
    object-fit: contain;
    object-position: center;
    width: calc(100% - (3rem + ${ea["spacing-16"]}) * 2);
    height: 100%;
`,pc=k.div`
    background: ${Gi["bg-primary-subtlest"]};
    border: ${Ji["width-010"]} ${Ji.solid} ${Gi.border};
    border-radius: ${ta.sm};
    margin: 0 ${ea["spacing-20"]};
    padding: ${ea["spacing-16"]};
    display: flex;
    gap: ${ea["spacing-16"]};
    flex: 1;
    flex-direction: column;
    align-items: center;
`,gc=k(Sa.BodySM)`
    margin-top: ${ea["spacing-16"]};
`,mc=k(sc)`
    /* increase specificity as the styles are overwritten */
    && {
        height: 100%;
        overflow-y: auto;
    }
`,bc=k.div`
    width: 100%;
    margin: auto;
    padding: ${ea["layout-xxl"]} ${ea["layout-sm"]};

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
    padding: ${ea["spacing-16"]};

    ${lc} {
        display: flex;
        flex-direction: column;
        max-width: none;
        height: 100%;
        border-radius: 0;
        padding: 0;

        --close-button-top-inset: ${ea["spacing-8"]};
        --close-button-right-inset: ${ea["spacing-20"]};
    }
`,yc=k.h2`
    ${Qi["body-baseline-semibold"]}
    color: ${Gi.text};
    margin-bottom: ${ea["spacing-16"]};
    text-align: center;

    ${lc} {
        ${Qi["body-md-semibold"]}
        margin: ${ea["spacing-12"]} 0;
    }
`,xc=k.div`
    width: 100%;
    height: 20rem;
    border-radius: ${ta.lg};
    overflow: hidden;

    ${lc} {
        border-radius: 0;
        flex: 1;
    }

    ${dc} {
        background: ${Gi["bg-strong"]};
    }
`,wc=k.div`
    position: relative;
    width: 100%;
    height: 100%;
    background: ${Gi["bg-stronger"]};
    margin: auto;

    ${lc} {
        aspect-ratio: 4/3;
    }
    ${oa.MaxWidth.sm} {
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
    background-color: ${Gi["border-strong"]};
    pointer-events: none;

    ${lc} {
        width: calc(100% - ${ea["spacing-40"]});
        max-width: 300px;
        left: 50%;
    }
`,Cc=k.div`
    display: flex;
    justify-content: space-between;
    margin-top: ${ea["spacing-16"]};

    ${oa.MaxWidth.sm} {
        flex-direction: column-reverse;
        margin: ${ea["spacing-16"]} ${ea["spacing-24"]}
            ${ea["spacing-48"]};
        gap: ${ea["spacing-16"]};
    }

    ${dc} {
        flex-direction: row;
        margin: ${ea["spacing-16"]} ${ea["spacing-20"]};
    }
`,Sc=k(Dl.Default)`
    width: 8.5rem;
    ${oa.MaxWidth.sm} {
        width: 100%;
    }
    ${dc} {
        height: 2.5rem;
    }
`,Dc=k.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`,kc=k.canvas`
    cursor: crosshair;
`,Fc=w((()=>Ee(void 0,void 0,void 0,(function*(){return{default:(yield import("./e-signature-canvas.6c06722f.js")).ESignatureCanvas}})))),_c=n=>{const{description:o,id:i,loadingProgress:l,loadingLabel:d="Uploading...",onChange:c,value:u,disabled:f}=n,p=_e(n,["description","id","loadingProgress","loadingLabel","onChange","value","disabled"]),[g,b]=s(!1),v=a(null),[y,x]=s(u),w=m(E),C=na["sm-max"]({theme:w}),S=ar.useMediaQuery({maxWidth:C}),D=ar.useMediaQuery({maxHeight:C,orientation:"landscape"}),k=()=>{var e;null===(e=v.current)||void 0===e||e.clear()},F=()=>{if(v.current){const e=v.current.export();x(e),b(!1),null==c||c(e)}};h((()=>{x(u)}),[u]);return t("div",Object.assign({},p,{children:[e(cc,{$disabled:f,children:"number"==typeof l?t(pc,{children:[d&&e(Sa.BodyMD,{children:d}),e(rc,{progress:null!=l?l:0,"data-testid":`${i||"e-signature"}-progress-bar`})]}):y?t(r,{children:[e(fc,{src:y,alt:"Signature preview"}),e(hc,{styleType:"light",onClick:()=>b(!0),id:i,"aria-label":"Edit signature",disabled:f,children:e(le,{})})]}):e(uc,{type:"button",styleType:"secondary","aria-label":"Add signature",id:i,onClick:()=>b(!0),disabled:f,children:"Add signature"})}),e(mc,{"data-testid":"signature-modal",show:g,children:e(bc,{children:t(vc,{onClose:()=>b(!1),children:[e(yc,{children:"Signature"}),e(xc,{children:t(wc,{children:[e($c,{}),e($,{fallback:null,children:g&&e(Fc,{ref:v,baseImageDataURL:y})})]})}),t(Cc,{children:[e(Sc,{as:D?tc.Small:tc.Default,type:"button",styleType:S&&!D?"light":"link",icon:e(de,{}),onClick:k,children:"Clear"}),e(Sc,{as:D?Dl.Small:Dl.Default,type:"button",onClick:F,children:"Save"})]})]})})}),o?e(gc,{children:o}):null]}))};function Ec(e,t){return Ec=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},Ec(e,t)}function Oc(e){return e&&e.stopPropagation&&e.stopPropagation(),e&&e.preventDefault&&e.preventDefault(),!1}function Tc(e){return null==e?[]:Array.isArray(e)?e.slice():[e]}function Ic(e){return null!==e&&1===e.length?e[0]:e.slice()}function Mc(e){Object.keys(e).forEach((t=>{"undefined"!=typeof document&&document.addEventListener(t,e[t],!1)}))}function Ac(e,t){return Bc(function(e,t){let r=e;return r<=t.min&&(r=t.min),r>=t.max&&(r=t.max),r}(e,t),t)}function Bc(e,t){const r=(e-t.min)%t.step;let n=e-r;return 2*Math.abs(r)>=t.step&&(n+=r>0?t.step:-t.step),parseFloat(n.toFixed(5))}let zc=function(e){function t(t){var r;(r=e.call(this,t)||this).onKeyUp=()=>{r.onEnd()},r.onMouseUp=()=>{r.onEnd(r.getMouseEventMap())},r.onTouchEnd=e=>{e.preventDefault(),r.onEnd(r.getTouchEventMap())},r.onBlur=()=>{r.setState({index:-1},r.onEnd(r.getKeyDownEventMap()))},r.onMouseMove=e=>{r.setState({pending:!0});const t=r.getMousePosition(e),n=r.getDiffPosition(t[0]),o=r.getValueFromPosition(n);r.move(o)},r.onTouchMove=e=>{if(e.touches.length>1)return;r.setState({pending:!0});const t=r.getTouchPosition(e);if(void 0===r.isScrolling){const e=t[0]-r.startPosition[0],n=t[1]-r.startPosition[1];r.isScrolling=Math.abs(n)>Math.abs(e)}if(r.isScrolling)return void r.setState({index:-1});const n=r.getDiffPosition(t[0]),o=r.getValueFromPosition(n);r.move(o)},r.onKeyDown=e=>{if(!(e.ctrlKey||e.shiftKey||e.altKey||e.metaKey))switch(r.setState({pending:!0}),e.key){case"ArrowLeft":case"ArrowDown":case"Left":case"Down":e.preventDefault(),r.moveDownByStep();break;case"ArrowRight":case"ArrowUp":case"Right":case"Up":e.preventDefault(),r.moveUpByStep();break;case"Home":e.preventDefault(),r.move(r.props.min);break;case"End":e.preventDefault(),r.move(r.props.max);break;case"PageDown":e.preventDefault(),r.moveDownByStep(r.props.pageFn(r.props.step));break;case"PageUp":e.preventDefault(),r.moveUpByStep(r.props.pageFn(r.props.step))}},r.onSliderMouseDown=e=>{if(!r.props.disabled&&2!==e.button){if(r.setState({pending:!0}),!r.props.snapDragDisabled){const t=r.getMousePosition(e);r.forceValueFromPosition(t[0],(e=>{r.start(e,t[0]),Mc(r.getMouseEventMap())}))}Oc(e)}},r.onSliderClick=e=>{if(!r.props.disabled&&r.props.onSliderClick&&!r.hasMoved){const t=r.getMousePosition(e),n=Ac(r.calcValue(r.calcOffsetFromPosition(t[0])),r.props);r.props.onSliderClick(n)}},r.createOnKeyDown=e=>t=>{r.props.disabled||(r.start(e),Mc(r.getKeyDownEventMap()),Oc(t))},r.createOnMouseDown=e=>t=>{if(r.props.disabled||2===t.button)return;r.setState({pending:!0});const n=r.getMousePosition(t);r.start(e,n[0]),Mc(r.getMouseEventMap()),Oc(t)},r.createOnTouchStart=e=>t=>{if(r.props.disabled||t.touches.length>1)return;r.setState({pending:!0});const n=r.getTouchPosition(t);r.startPosition=n,r.isScrolling=void 0,r.start(e,n[0]),Mc(r.getTouchEventMap()),function(e){e.stopPropagation&&e.stopPropagation()}(t)},r.handleResize=()=>{const e=window.setTimeout((()=>{r.pendingResizeTimeouts.shift(),r.resize()}),0);r.pendingResizeTimeouts.push(e)},r.renderThumb=(e,t)=>{const n=r.props.thumbClassName+" "+r.props.thumbClassName+"-"+t+" "+(r.state.index===t?r.props.thumbActiveClassName:""),o={ref:e=>{r["thumb"+t]=e},key:r.props.thumbClassName+"-"+t,className:n,style:e,onMouseDown:r.createOnMouseDown(t),onTouchStart:r.createOnTouchStart(t),onFocus:r.createOnKeyDown(t),tabIndex:0,role:"slider","aria-orientation":r.props.orientation,"aria-valuenow":r.state.value[t],"aria-valuemin":r.props.min,"aria-valuemax":r.props.max,"aria-label":Array.isArray(r.props.ariaLabel)?r.props.ariaLabel[t]:r.props.ariaLabel,"aria-labelledby":Array.isArray(r.props.ariaLabelledby)?r.props.ariaLabelledby[t]:r.props.ariaLabelledby,"aria-disabled":r.props.disabled},i={index:t,value:Ic(r.state.value),valueNow:r.state.value[t]};return r.props.ariaValuetext&&(o["aria-valuetext"]="string"==typeof r.props.ariaValuetext?r.props.ariaValuetext:r.props.ariaValuetext(i)),r.props.renderThumb(o,i)},r.renderTrack=(e,t,n)=>{const o={key:r.props.trackClassName+"-"+e,className:r.props.trackClassName+" "+r.props.trackClassName+"-"+e,style:r.buildTrackStyle(t,r.state.upperBound-n)},i={index:e,value:Ic(r.state.value)};return r.props.renderTrack(o,i)};let n=Tc(t.value);n.length||(n=Tc(t.defaultValue)),r.pendingResizeTimeouts=[];const i=[];for(let e=0;e<n.length;e+=1)n[e]=Ac(n[e],t),i.push(e);return r.resizeObserver=null,r.resizeElementRef=o.createRef(),r.state={index:-1,upperBound:0,sliderLength:0,value:n,zIndices:i},r}!function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Ec(e,t)}(t,e);var r=t.prototype;return r.componentDidMount=function(){"undefined"!=typeof window&&(this.resizeObserver=new ResizeObserver(this.handleResize),this.resizeObserver.observe(this.resizeElementRef.current),this.resize())},t.getDerivedStateFromProps=function(e,t){const r=Tc(e.value);return r.length?t.pending?null:{value:r.map((t=>Ac(t,e)))}:null},r.componentDidUpdate=function(){0===this.state.upperBound&&this.resize()},r.componentWillUnmount=function(){this.clearPendingResizeTimeouts(),this.resizeObserver&&this.resizeObserver.disconnect()},r.onEnd=function(e){e&&function(e){Object.keys(e).forEach((t=>{"undefined"!=typeof document&&document.removeEventListener(t,e[t],!1)}))}(e),this.hasMoved&&this.fireChangeEvent("onAfterChange"),this.setState({pending:!1}),this.hasMoved=!1},r.getValue=function(){return Ic(this.state.value)},r.getClosestIndex=function(e){let t=Number.MAX_VALUE,r=-1;const{value:n}=this.state,o=n.length;for(let i=0;i<o;i+=1){const o=this.calcOffset(n[i]),a=Math.abs(e-o);a<t&&(t=a,r=i)}return r},r.getMousePosition=function(e){return[e["page"+this.axisKey()],e["page"+this.orthogonalAxisKey()]]},r.getTouchPosition=function(e){const t=e.touches[0];return[t["page"+this.axisKey()],t["page"+this.orthogonalAxisKey()]]},r.getKeyDownEventMap=function(){return{keydown:this.onKeyDown,keyup:this.onKeyUp,focusout:this.onBlur}},r.getMouseEventMap=function(){return{mousemove:this.onMouseMove,mouseup:this.onMouseUp}},r.getTouchEventMap=function(){return{touchmove:this.onTouchMove,touchend:this.onTouchEnd}},r.getValueFromPosition=function(e){const t=e/(this.state.sliderLength-this.state.thumbSize)*(this.props.max-this.props.min);return Ac(this.state.startValue+t,this.props)},r.getDiffPosition=function(e){let t=e-this.state.startPosition;return this.props.invert&&(t*=-1),t},r.resize=function(){const{slider:e,thumb0:t}=this;if(!e||!t)return;const r=this.sizeKey(),n=e.getBoundingClientRect(),o=e[r],i=n[this.posMaxKey()],a=n[this.posMinKey()],s=t.getBoundingClientRect()[r.replace("client","").toLowerCase()],l=o-s,d=Math.abs(i-a);this.state.upperBound===l&&this.state.sliderLength===d&&this.state.thumbSize===s||this.setState({upperBound:l,sliderLength:d,thumbSize:s})},r.calcOffset=function(e){const t=this.props.max-this.props.min;return 0===t?0:(e-this.props.min)/t*this.state.upperBound},r.calcValue=function(e){return e/this.state.upperBound*(this.props.max-this.props.min)+this.props.min},r.calcOffsetFromPosition=function(e){const{slider:t}=this,r=t.getBoundingClientRect(),n=r[this.posMaxKey()],o=r[this.posMinKey()];let i=e-(window["page"+this.axisKey()+"Offset"]+(this.props.invert?n:o));return this.props.invert&&(i=this.state.sliderLength-i),i-=this.state.thumbSize/2,i},r.forceValueFromPosition=function(e,t){const r=this.calcOffsetFromPosition(e),n=this.getClosestIndex(r),o=Ac(this.calcValue(r),this.props),i=this.state.value.slice();i[n]=o;for(let e=0;e<i.length-1;e+=1)if(i[e+1]-i[e]<this.props.minDistance)return;this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0,this.setState({value:i},(()=>{t(n),this.fireChangeEvent("onChange")}))},r.clearPendingResizeTimeouts=function(){do{const e=this.pendingResizeTimeouts.shift();clearTimeout(e)}while(this.pendingResizeTimeouts.length)},r.start=function(e,t){const r=this["thumb"+e];r&&r.focus();const{zIndices:n}=this.state;n.splice(n.indexOf(e),1),n.push(e),this.setState((r=>({startValue:r.value[e],startPosition:void 0!==t?t:r.startPosition,index:e,zIndices:n})))},r.moveUpByStep=function(e){void 0===e&&(e=this.props.step);const t=this.state.value[this.state.index],r=Ac(this.props.invert&&"horizontal"===this.props.orientation?t-e:t+e,this.props);this.move(Math.min(r,this.props.max))},r.moveDownByStep=function(e){void 0===e&&(e=this.props.step);const t=this.state.value[this.state.index],r=Ac(this.props.invert&&"horizontal"===this.props.orientation?t+e:t-e,this.props);this.move(Math.max(r,this.props.min))},r.move=function(e){const t=this.state.value.slice(),{index:r}=this.state,{length:n}=t,o=t[r];if(e===o)return;this.hasMoved||this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0;const{pearling:i,max:a,min:s,minDistance:l}=this.props;if(!i){if(r>0){const n=t[r-1];e<n+l&&(e=n+l)}if(r<n-1){const n=t[r+1];e>n-l&&(e=n-l)}}t[r]=e,i&&n>1&&(e>o?(this.pushSucceeding(t,l,r),function(e,t,r,n){for(let o=0;o<e;o+=1){const i=n-o*r;t[e-1-o]>i&&(t[e-1-o]=i)}}(n,t,l,a)):e<o&&(this.pushPreceding(t,l,r),function(e,t,r,n){for(let o=0;o<e;o+=1){const e=n+o*r;t[o]<e&&(t[o]=e)}}(n,t,l,s))),this.setState({value:t},this.fireChangeEvent.bind(this,"onChange"))},r.pushSucceeding=function(e,t,r){let n,o;for(n=r,o=e[n]+t;null!==e[n+1]&&o>e[n+1];n+=1,o=e[n]+t)e[n+1]=Bc(o,this.props)},r.pushPreceding=function(e,t,r){for(let n=r,o=e[n]-t;null!==e[n-1]&&o<e[n-1];n-=1,o=e[n]-t)e[n-1]=Bc(o,this.props)},r.axisKey=function(){return"vertical"===this.props.orientation?"Y":"X"},r.orthogonalAxisKey=function(){return"vertical"===this.props.orientation?"X":"Y"},r.posMinKey=function(){return"vertical"===this.props.orientation?this.props.invert?"bottom":"top":this.props.invert?"right":"left"},r.posMaxKey=function(){return"vertical"===this.props.orientation?this.props.invert?"top":"bottom":this.props.invert?"left":"right"},r.sizeKey=function(){return"vertical"===this.props.orientation?"clientHeight":"clientWidth"},r.fireChangeEvent=function(e){this.props[e]&&this.props[e](Ic(this.state.value),this.state.index)},r.buildThumbStyle=function(e,t){const r={position:"absolute",touchAction:"none",willChange:this.state.index>=0?this.posMinKey():void 0,zIndex:this.state.zIndices.indexOf(t)+1};return r[this.posMinKey()]=e+"px",r},r.buildTrackStyle=function(e,t){const r={position:"absolute",willChange:this.state.index>=0?this.posMinKey()+","+this.posMaxKey():void 0};return r[this.posMinKey()]=e,r[this.posMaxKey()]=t,r},r.buildMarkStyle=function(e){var t;return(t={position:"absolute"})[this.posMinKey()]=e,t},r.renderThumbs=function(e){const{length:t}=e,r=[];for(let n=0;n<t;n+=1)r[n]=this.buildThumbStyle(e[n],n);const n=[];for(let e=0;e<t;e+=1)n[e]=this.renderThumb(r[e],e);return n},r.renderTracks=function(e){const t=[],r=e.length-1;t.push(this.renderTrack(0,0,e[0]));for(let n=0;n<r;n+=1)t.push(this.renderTrack(n+1,e[n],e[n+1]));return t.push(this.renderTrack(r+1,e[r],this.state.upperBound)),t},r.renderMarks=function(){let{marks:e}=this.props;const t=this.props.max-this.props.min+1;return"boolean"==typeof e?e=Array.from({length:t}).map(((e,t)=>t)):"number"==typeof e&&(e=Array.from({length:t}).map(((e,t)=>t)).filter((t=>t%e==0))),e.map(parseFloat).sort(((e,t)=>e-t)).map((e=>{const t=this.calcOffset(e),r={key:e,className:this.props.markClassName,style:this.buildMarkStyle(t)};return this.props.renderMark(r)}))},r.render=function(){const e=[],{value:t}=this.state,r=t.length;for(let n=0;n<r;n+=1)e[n]=this.calcOffset(t[n],n);const n=this.props.withTracks?this.renderTracks(e):null,i=this.renderThumbs(e),a=this.props.marks?this.renderMarks():null;return o.createElement("div",{ref:e=>{this.slider=e,this.resizeElementRef.current=e},style:{position:"relative"},className:this.props.className+(this.props.disabled?" disabled":""),onMouseDown:this.onSliderMouseDown,onClick:this.onSliderClick},n,i,a)},t}(o.Component);zc.displayName="ReactSlider",zc.defaultProps={min:0,max:100,step:1,pageFn:e=>10*e,minDistance:0,defaultValue:0,orientation:"horizontal",className:"slider",thumbClassName:"thumb",thumbActiveClassName:"active",trackClassName:"track",markClassName:"mark",withTracks:!0,pearling:!1,disabled:!1,snapDragDisabled:!1,invert:!1,marks:[],renderThumb:e=>o.createElement("div",e),renderTrack:e=>o.createElement("div",e),renderMark:e=>o.createElement("span",e)};var jc=zc;const Rc=k.div`
    isolation: isolate;
`,Lc=k.div`
    margin-top: ${ea["spacing-8"]};
    display: flex;
    justify-content: space-between;
    gap: ${ea["spacing-8"]};
`,Pc=k.div`
    margin-bottom: ${ea["spacing-8"]};
`,Nc=k(Sa.BodyBL)`
    overflow-wrap: anywhere;
`,Hc=k(jc)`
    height: 0.875rem;
`,Wc=k.div`
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

        background-color: ${Gi.bg};
        box-shadow: ${ra["sm-subtle"]};
        border: ${Ji["width-010"]} ${Ji.solid}
            ${e=>e.$disabled?Gi["border-selected-disabled"]:Gi["border-strong"]};
        border-radius: ${ta.full};
    }
`,Yc=k.div`
    height: 0.875rem;
    width: 0.875rem;
    position: relative;
    outline: none;

    &:focus ${Wc}:after {
        outline-offset: -1px;
        outline: ${Ji["width-040"]} ${Ji.solid}
            ${Gi["border-selected"]};
    }
`,Vc=k.div`
    height: 0.25rem;
    top: 50%;
    transform: translateY(-50%);
    border-radius: ${ta.full};

    background: ${e=>e.$color&&"function"==typeof e.$color?e.$color(e):e.$color||Gi["border-strong"](e)};
`,Uc=r=>{var{value:n,min:o=0,max:i=100,step:a=1,minRange:l,numOfThumbs:d=2,colors:c,disabled:u,readOnly:f,ariaLabels:p,showSliderLabels:g,sliderLabelPrefix:m,sliderLabelSuffix:b,showIndicatorLabel:v,indicatorLabelPrefix:y,indicatorLabelSuffix:x,renderSliderLabel:w,onChange:$,onChangeEnd:C}=r,S=_e(r,["value","min","max","step","minRange","numOfThumbs","colors","disabled","readOnly","ariaLabels","showSliderLabels","sliderLabelPrefix","sliderLabelSuffix","showIndicatorLabel","indicatorLabelPrefix","indicatorLabelSuffix","renderSliderLabel","onChange","onChangeEnd"]);const[D,k]=s(_()),F=function(){const e=function(){const e=u||f?Gi["border-disabled"]:Gi["border-strong"],t=u||f?Gi["border-selected-disabled"]:Gi["border-selected"];if(1===d)return[t,e];const r=[];r.push(e);for(let e=0;e<d-1;e++)r.push(t);return r.push(e),r}();return new Array(d+1).fill(0).map(((t,r)=>(null==c?void 0:c[r])||e[r]))}();h((()=>{n!==D&&k(_())}),[n]);function _(){if(n&&n.length===d)return n;const e=[];for(let t=0;t<d;t++)e.push(o+a*t);return e}const E=e=>w?w(e):t(Nc,{children:[m,e,b]});return t(Rc,Object.assign({},S,{children:[v&&e(Pc,{children:(()=>{let e="";if(1===D.length)e=`${D[0]}`;else if(2===D.length)e=`${D[0]} - ${D[1]}`;else if(D.length>2){e=`${Math.min(...D)} - ${Math.max(...D)}`}return t(Nc,{children:[y,e,x]})})()}),e(Hc,{step:a,min:o,max:i,value:D,disabled:u||f,onChange:(e,t)=>{if("number"==typeof e){const t=[e];k(t),null==$||$(t)}else{if(t>-1&&D[t]===e[t])return;const r=[...e];k(r),null==$||$(r)}},onAfterChange:e=>{if("number"==typeof e){const t=[e];k(t),null==C||C(t)}else{const t=[...e];k(t),null==C||C(t)}},minDistance:l,ariaLabel:p,renderThumb:(t,r)=>e(Yc,Object.assign({"data-testid":`slider-thumb-${r.index}`},t,{tabIndex:u?void 0:t.tabIndex,children:e(Wc,{$disabled:u,$readOnly:f})})),renderTrack:(t,r)=>e(Vc,Object.assign({"data-testid":`slider-track-${r.index}`},t,{$color:F[r.index]}))}),g&&t(Lc,{children:[e("div",{children:E(o)}),e("div",{children:E(i)})]})]}))},Kc=k.div`
    display: flex;
    margin-bottom: ${ea["spacing-16"]};
    align-items: baseline;
`,qc=k.div`
    margin: 0 0.5rem;
`,Zc=k.div`
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: flex-end;
    padding: 0 0.4375rem;
`,Gc=k.div`
    flex: 1;
    border-radius: ${ta.sm} ${ta.sm} 0 0;
    border: 0.5px solid transparent; // space between bars
    background-clip: content-box;

    ${e=>{let t=Gi["bg-strongest"];return e.$disabled&&e.$selected?t=Gi["bg-selected-stronger-disabled"]:e.$disabled?t=Gi["bg-disabled"]:e.$selected&&(t=Gi["bg-selected-stronger"]),F`
            background-color: ${t};
        `}}
`,Qc=k(Uc)`
    margin-top: -0.3125rem;
`,Xc=n=>{var{bins:o=[],interval:i,disabled:a,readOnly:l,value:d,showRangeLabels:c,rangeLabelPrefix:u,rangeLabelSuffix:f,ariaLabels:p,onChange:g,onChangeEnd:m,renderEmptyView:b,renderRangeLabel:y}=n,x=_e(n,["bins","interval","disabled","readOnly","value","showRangeLabels","rangeLabelPrefix","rangeLabelSuffix","ariaLabels","onChange","onChangeEnd","renderEmptyView","renderRangeLabel"]);const w=o.map((e=>e.count)),$=Math.max(...w),C=o.map((e=>e.minValue)),S=Math.max(...C),D=Math.min(...C),[k,F]=s(T()),_=v((()=>{const e=[...o].sort(((e,t)=>e.minValue-t.minValue)),t=(S-D)/i+1,r=[];for(let n=0;n<t;n++){const t=e.find((e=>e.minValue===D+i*n));t?r.push(t):r.push({count:0,minValue:D+i*n})}return r}),[o,i]);h((()=>{d!==k&&F(T())}),[d]);const E=e=>{const[t,r]=e,n=[t,r];F(n),null==g||g(n)},O=e=>{const[t,r]=e,n=[t,r];F(n),null==m||m(n)};function T(){return null!=d?d:[D,D+i]}const I=e=>y?y(e):t(Sa.BodyBL,{children:[u,e,f]});return t("div",Object.assign({},x,{children:[c&&t(Kc,{children:[I(k[0]),e(qc,{children:"-"}),I(k[1])]}),_.every((e=>0===e.count))&&b?b():t(r,{children:[e(Zc,{children:_.map(((t,r)=>{const n=t.count/$;return e(Gc,{style:{height:n?`calc(calc(100% - 0.25rem) * ${n} + 0.25rem)`:0},$selected:t.minValue>=k[0]&&t.minValue<k[1],$disabled:a||l},r)}))}),e(Qc,{min:D,max:S+i,step:i,minRange:i,numOfThumbs:2,value:k,disabled:a,readOnly:l,ariaLabels:p,onChange:E,onChangeEnd:O})]})]}))},Jc=k(_d)`
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders

    ${e=>"no-border"!==e.$styleType&&F`
            padding-left: ${e.$visuallyReadOnly?0:ea["spacing-16"]};
            padding-right: ${e.$visuallyReadOnly||e.$showClear?0:ea["spacing-16"]};
        `}
`,eu=k(Ed)`
    height: auto;
    padding: ${ea["spacing-12"]} ${ea["spacing-16"]};

    cursor: pointer;
    color: ${Gi.icon};

    ${e=>"no-border"===e.$styleType&&F`
            margin-right: -${ea["spacing-12"]};
        `}
`,tu=k(M)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`,ru=k.div`
    display: flex;
    width: 100%;
`,nu=k(kd)`
    display: flex;
    align-items: center;
    width: 100%;
`,ou=o.forwardRef(((n,o)=>{var{value:i,spacing:s,type:l,error:d,disabled:c,readOnly:u,onChange:h,onClear:f,allowClear:p=!1,className:g,styleType:m="bordered"}=n,b=_e(n,["value","spacing","type","error","disabled","readOnly","onChange","onClear","allowClear","className","styleType"]);const v=((e,t)=>"tel"===e&&!!t)(l,s),x=a(null);y(o,(()=>x.current),[]);const w=tr({ref:x,formatter:e=>v?rt.transformWithSpaces(e,s):e}),$=e=>{h&&(v?S(e):h(e))},C=()=>{f&&f(),x&&x.current&&x.current.focus()},S=e=>{const t=w();if(!t)return;const{nextValue:r,updateCaretPosition:n}=t,o=r.replace(/\s/g,"");e.target.value=o,null==h||h(e),n()},D=i?(e=>e?v?rt.transformWithSpaces(e,s):e:"")(i):i,k=p&&!c&&!u&&!!i,F=()=>t(r,{children:[e(Jc,Object.assign({"data-testid":"input",ref:x,"aria-disabled":c,value:D,onChange:$,type:l,readOnly:u||c,$showClear:k,$styleType:m,$visuallyReadOnly:u},b)),k&&e(eu,{onClick:C,type:"button","aria-label":"Clear input",$styleType:m,children:e(tu,{"aria-hidden":!0})})]});return e(r,{children:"no-border"===m?e(ru,{className:g,children:F()}):e(nu,{$disabled:c,$error:d,$readOnly:u,className:g,children:F()})})})),iu=o.forwardRef(((t,r)=>{const{label:n,errorMessage:o,id:i,"data-error-testid":a,"data-testid":l,layoutType:d,mobileCols:c,tabletCols:u,desktopCols:h,xxsCols:f,xsCols:p,smCols:g,mdCols:m,lgCols:b,xlCols:v,xxlCols:y}=t,x=_e(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]),[w]=s((()=>`form-field-${tt.generate()}`)),$=null!=i?i:w;return e(Bs,{id:$,"data-testid":l,label:n,errorMessage:o,disabled:x.disabled,"data-error-testid":a,layoutType:d,mobileCols:c,tabletCols:u,desktopCols:h,xxsCols:f,xsCols:p,smCols:g,mdCols:m,lgCols:b,xlCols:v,xxlCols:y,children:e(ou,Object.assign({id:`${$}-base`,"data-testid":l?`${l}-base`:void 0,ref:r,error:!!o},x))})})),au=k.div`
    font-weight: ${e=>e.$bold?Qi.Spec["weight-semibold"]:Qi.Spec["weight-regular"]};

    ${e=>e.$disabled?F`
                color: ${Gi["text-disabled"]};
            `:e.$selected?F`
                color: ${Gi["text-selected"]};
            `:F`
                color: ${Gi.text};
            `}
    width: 100%;

    ${e=>"end"===e.$truncateType&&ba(e.$maxLines||2)}
    overflow-wrap: break-word;
`,su=k.div`
    color: ${Gi["text-subtlest"]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&ba(e.$maxLines||2)}
    overflow-wrap: break-word;

    ${e=>"next-line"===e.$labelDisplayType?F`
                    ${Qi["body-md-semibold"]}
                `:F`
                    ${Qi["body-baseline-regular"]}
                `}
`,lu=k.span`
    font-weight: ${Qi.Spec["weight-semibold"]};
`,du=k.div`
    text-align: left;
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;

    ${e=>"small"===e.$variant?Qi["body-md-regular"]:Qi["body-baseline-regular"]}

    ${e=>{switch(e.$labelDisplayType){case"next-line":return F`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return F`
                    ${au} {
                        display: inline;
                    }

                    ${su} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,cu=k.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    word-break: break-all;
    overflow: hidden;
`,uu=k.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,hu=({bold:n,displayType:o="inline",label:i,searchTerm:a,maxLines:s=2,selected:l,disabled:d,sublabel:c,truncationType:u="middle",variant:h="default"})=>{const f=m(E),g="small"===h?Qi.Spec["body-size-md"]({theme:f}):Qi.Spec["body-size-baseline"]({theme:f}),b=Qi.Spec["font-family"]({theme:f}),{ref:y,width:x}=Qt(),w=p((e=>{if("inline"!==o||!x)return!1;return rt.getTextWidth(e,`${g} '${b}'`)>x*s-50}),[x,o,g,b,s]),$=v((()=>w(i)),[w,i]),C=v((()=>c&&w(c)),[w,c]),S=n=>{if(!a)return n;const o=a.toLowerCase().trim(),s=n.toLowerCase().indexOf(o),l=s+a.length;return-1===s?n:t(r,{children:[i.slice(0,s),e(lu,{$variant:h,children:i.slice(s,l)}),i.slice(l)]})},D=n=>t(r,{children:[e(cu,{$maxLines:s,"aria-hidden":!0,children:S(n)}),e(uu,{$maxLines:s,"aria-hidden":!0,children:S(n)})]});return t(du,{ref:y,$labelDisplayType:$||C?"next-line":o,$variant:h,children:[e(au,{"aria-label":i,$bold:n,$maxLines:s,$selected:l,$disabled:d,$truncateType:u,children:"middle"===u&&$?D(i):S(i)}),c&&e(su,{"aria-label":c,$maxLines:s,$truncateType:u,$labelDisplayType:o,children:"middle"===u&&C?D(c):c})]})};var fu=Hn;var pu=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r};var gu=function(e){return this.__data__.get(e)};var mu=function(e){return this.__data__.has(e)},bu=Hn,vu=Wn,yu=co;var xu=function(e,t){var r=this.__data__;if(r instanceof bu){var n=r.__data__;if(!vu||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new yu(n)}return r.set(e,t),this.size=r.size,this},wu=Hn,$u=function(){this.__data__=new fu,this.size=0},Cu=pu,Su=gu,Du=mu,ku=xu;function Fu(e){var t=this.__data__=new wu(e);this.size=t.size}Fu.prototype.clear=$u,Fu.prototype.delete=Cu,Fu.prototype.get=Su,Fu.prototype.has=Du,Fu.prototype.set=ku;var _u=Fu;var Eu=co,Ou=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},Tu=function(e){return this.__data__.has(e)};function Iu(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new Eu;++t<r;)this.add(e[t])}Iu.prototype.add=Iu.prototype.push=Ou,Iu.prototype.has=Tu;var Mu=function(e,t){return e.has(t)},Au=Iu,Bu=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1},zu=Mu;var ju=function(e,t,r,n,o,i){var a=1&r,s=e.length,l=t.length;if(s!=l&&!(a&&l>s))return!1;var d=i.get(e),c=i.get(t);if(d&&c)return d==t&&c==e;var u=-1,h=!0,f=2&r?new Au:void 0;for(i.set(e,t),i.set(t,e);++u<s;){var p=e[u],g=t[u];if(n)var m=a?n(g,p,u,t,e,i):n(p,g,u,e,t,i);if(void 0!==m){if(m)continue;h=!1;break}if(f){if(!Bu(t,(function(e,t){if(!zu(f,t)&&(p===e||o(p,e,r,n,i)))return f.push(t)}))){h=!1;break}}else if(p!==g&&!o(p,g,r,n,i)){h=!1;break}}return i.delete(e),i.delete(t),h};var Ru=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r};var Lu=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r},Pu=ur.Uint8Array,Nu=Sn,Hu=ju,Wu=Ru,Yu=Lu,Vu=hr?hr.prototype:void 0,Uu=Vu?Vu.valueOf:void 0;var Ku=function(e,t,r,n,o,i,a){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!i(new Pu(e),new Pu(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Nu(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var s=Wu;case"[object Set]":var l=1&n;if(s||(s=Yu),e.size!=t.size&&!l)return!1;var d=a.get(e);if(d)return d==t;n|=2,a.set(e,t);var c=Hu(s(e),s(t),n,o,i,a);return a.delete(e),c;case"[object Symbol]":if(Uu)return Uu.call(e)==Uu.call(t)}return!1};var qu=function(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];return e},Zu=qu,Gu=sr;var Qu=function(e,t,r){var n=t(e);return Gu(e)?n:Zu(n,r(e))};var Xu=function(e,t){for(var r=-1,n=null==e?0:e.length,o=0,i=[];++r<n;){var a=e[r];t(a,r,e)&&(i[o++]=a)}return i},Ju=function(){return[]},eh=Object.prototype.propertyIsEnumerable,th=Object.getOwnPropertySymbols,rh=th?function(e){return null==e?[]:(e=Object(e),Xu(th(e),(function(t){return eh.call(e,t)})))}:Ju;var nh=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n},oh=Cr,ih=Sr;var ah=function(e){return ih(e)&&"[object Arguments]"==oh(e)},sh=Sr,lh=Object.prototype,dh=lh.hasOwnProperty,ch=lh.propertyIsEnumerable,uh=ah(function(){return arguments}())?ah:function(e){return sh(e)&&dh.call(e,"callee")&&!ch.call(e,"callee")},hh={exports:{}};var fh=function(){return!1};!function(e,t){var r=ur,n=fh,o=t&&!t.nodeType&&t,i=o&&e&&!e.nodeType&&e,a=i&&i.exports===o?r.Buffer:void 0,s=(a?a.isBuffer:void 0)||n;e.exports=s}(hh,hh.exports);var ph=hh.exports,gh=/^(?:0|[1-9]\d*)$/;var mh=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&gh.test(e))&&e>-1&&e%1==0&&e<t};var bh=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},vh=Cr,yh=bh,xh=Sr,wh={};wh["[object Float32Array]"]=wh["[object Float64Array]"]=wh["[object Int8Array]"]=wh["[object Int16Array]"]=wh["[object Int32Array]"]=wh["[object Uint8Array]"]=wh["[object Uint8ClampedArray]"]=wh["[object Uint16Array]"]=wh["[object Uint32Array]"]=!0,wh["[object Arguments]"]=wh["[object Array]"]=wh["[object ArrayBuffer]"]=wh["[object Boolean]"]=wh["[object DataView]"]=wh["[object Date]"]=wh["[object Error]"]=wh["[object Function]"]=wh["[object Map]"]=wh["[object Number]"]=wh["[object Object]"]=wh["[object RegExp]"]=wh["[object Set]"]=wh["[object String]"]=wh["[object WeakMap]"]=!1;var $h=function(e){return xh(e)&&yh(e.length)&&!!wh[vh(e)]};var Ch=function(e){return function(t){return e(t)}},Sh={exports:{}};!function(e,t){var r=lr,n=t&&!t.nodeType&&t,o=n&&e&&!e.nodeType&&e,i=o&&o.exports===n&&r.process,a=function(){try{var e=o&&o.require&&o.require("util").types;return e||i&&i.binding&&i.binding("util")}catch(e){}}();e.exports=a}(Sh,Sh.exports);var Dh=Sh.exports,kh=$h,Fh=Ch,_h=Dh&&Dh.isTypedArray,Eh=_h?Fh(_h):kh,Oh=nh,Th=uh,Ih=sr,Mh=ph,Ah=mh,Bh=Eh,zh=Object.prototype.hasOwnProperty;var jh=function(e,t){var r=Ih(e),n=!r&&Th(e),o=!r&&!n&&Mh(e),i=!r&&!n&&!o&&Bh(e),a=r||n||o||i,s=a?Oh(e.length,String):[],l=s.length;for(var d in e)!t&&!zh.call(e,d)||a&&("length"==d||o&&("offset"==d||"parent"==d)||i&&("buffer"==d||"byteLength"==d||"byteOffset"==d)||Ah(d,l))||s.push(d);return s},Rh=Object.prototype;var Lh=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Rh)};var Ph=function(e,t){return function(r){return e(t(r))}}(Object.keys,Object),Nh=Lh,Hh=Ph,Wh=Object.prototype.hasOwnProperty;var Yh=function(e){if(!Nh(e))return Hh(e);var t=[];for(var r in Object(e))Wh.call(e,r)&&"constructor"!=r&&t.push(r);return t},Vh=jr,Uh=bh;var Kh=function(e){return null!=e&&Uh(e.length)&&!Vh(e)},qh=jh,Zh=Yh,Gh=Kh;var Qh=function(e){return Gh(e)?qh(e):Zh(e)},Xh=Qu,Jh=rh,ef=Qh;var tf=function(e){return Xh(e,ef,Jh)},rf=Object.prototype.hasOwnProperty;var nf=function(e,t,r,n,o,i){var a=1&r,s=tf(e),l=s.length;if(l!=tf(t).length&&!a)return!1;for(var d=l;d--;){var c=s[d];if(!(a?c in t:rf.call(t,c)))return!1}var u=i.get(e),h=i.get(t);if(u&&h)return u==t&&h==e;var f=!0;i.set(e,t),i.set(t,e);for(var p=a;++d<l;){var g=e[c=s[d]],m=t[c];if(n)var b=a?n(m,g,c,t,e,i):n(g,m,c,e,t,i);if(!(void 0===b?g===m||o(g,m,r,n,i):b)){f=!1;break}p||(p="constructor"==c)}if(f&&!p){var v=e.constructor,y=t.constructor;v==y||!("constructor"in e)||!("constructor"in t)||"function"==typeof v&&v instanceof v&&"function"==typeof y&&y instanceof y||(f=!1)}return i.delete(e),i.delete(t),f},of=rn(ur,"DataView"),af=Wn,sf=rn(ur,"Promise"),lf=rn(ur,"Set"),df=rn(ur,"WeakMap"),cf=Cr,uf=Hr,hf="[object Map]",ff="[object Promise]",pf="[object Set]",gf="[object WeakMap]",mf="[object DataView]",bf=uf(of),vf=uf(af),yf=uf(sf),xf=uf(lf),wf=uf(df),$f=cf;(of&&$f(new of(new ArrayBuffer(1)))!=mf||af&&$f(new af)!=hf||sf&&$f(sf.resolve())!=ff||lf&&$f(new lf)!=pf||df&&$f(new df)!=gf)&&($f=function(e){var t=cf(e),r="[object Object]"==t?e.constructor:void 0,n=r?uf(r):"";if(n)switch(n){case bf:return mf;case vf:return hf;case yf:return ff;case xf:return pf;case wf:return gf}return t});var Cf=$f,Sf=_u,Df=ju,kf=Ku,Ff=nf,_f=Cf,Ef=sr,Of=ph,Tf=Eh,If="[object Arguments]",Mf="[object Array]",Af="[object Object]",Bf=Object.prototype.hasOwnProperty;var zf=function(e,t,r,n,o,i){var a=Ef(e),s=Ef(t),l=a?Mf:_f(e),d=s?Mf:_f(t),c=(l=l==If?Af:l)==Af,u=(d=d==If?Af:d)==Af,h=l==d;if(h&&Of(e)){if(!Of(t))return!1;a=!0,c=!1}if(h&&!c)return i||(i=new Sf),a||Tf(e)?Df(e,t,r,n,o,i):kf(e,t,l,r,n,o,i);if(!(1&r)){var f=c&&Bf.call(e,"__wrapped__"),p=u&&Bf.call(t,"__wrapped__");if(f||p){var g=f?e.value():e,m=p?t.value():t;return i||(i=new Sf),o(g,m,r,n,i)}}return!!h&&(i||(i=new Sf),Ff(e,t,r,n,o,i))},jf=Sr;var Rf=function e(t,r,n,o,i){return t===r||(null==t||null==r||!jf(t)&&!jf(r)?t!=t&&r!=r:zf(t,r,n,o,e,i))},Lf=_u,Pf=Rf;var Nf=function(e,t,r,n){var o=r.length,i=o,a=!n;if(null==e)return!i;for(e=Object(e);o--;){var s=r[o];if(a&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++o<i;){var l=(s=r[o])[0],d=e[l],c=s[1];if(a&&s[2]){if(void 0===d&&!(l in e))return!1}else{var u=new Lf;if(n)var h=n(d,c,l,e,t,u);if(!(void 0===h?Pf(c,d,3,n,u):h))return!1}}return!0},Hf=Mr;var Wf=function(e){return e==e&&!Hf(e)},Yf=Wf,Vf=Qh;var Uf=function(e){for(var t=Vf(e),r=t.length;r--;){var n=t[r],o=e[n];t[r]=[n,o,Yf(o)]}return t};var Kf=function(e,t){return function(r){return null!=r&&(r[e]===t&&(void 0!==t||e in Object(r)))}},qf=Nf,Zf=Uf,Gf=Kf;var Qf=function(e,t){return null!=e&&t in Object(e)},Xf=Eo,Jf=uh,ep=sr,tp=mh,rp=bh,np=To;var op=function(e,t,r){for(var n=-1,o=(t=Xf(t,e)).length,i=!1;++n<o;){var a=np(t[n]);if(!(i=null!=e&&r(e,a)))break;e=e[a]}return i||++n!=o?i:!!(o=null==e?0:e.length)&&rp(o)&&tp(a,o)&&(ep(e)||Jf(e))},ip=Qf,ap=op;var sp=Rf,lp=zo,dp=function(e,t){return null!=e&&ap(e,t,ip)},cp=Ir,up=Wf,hp=Kf,fp=To;var pp=function(e){return function(t){return null==t?void 0:t[e]}},gp=Ao;var mp=pp,bp=function(e){return function(t){return gp(t,e)}},vp=Ir,yp=To;var xp=function(e){var t=Zf(e);return 1==t.length&&t[0][2]?Gf(t[0][0],t[0][1]):function(r){return r===e||qf(r,e,t)}},wp=function(e,t){return cp(e)&&up(t)?hp(fp(e),t):function(r){var n=lp(r,e);return void 0===n&&n===t?dp(r,e):sp(t,n,3)}},$p=function(e){return e},Cp=sr,Sp=function(e){return vp(e)?mp(yp(e)):bp(e)};var Dp=function(e){return"function"==typeof e?e:null==e?$p:"object"==typeof e?Cp(e)?wp(e[0],e[1]):xp(e):Sp(e)},kp=Dp,Fp=Kh,_p=Qh;var Ep=function(e){return function(t,r,n){var o=Object(t);if(!Fp(t)){var i=kp(r);t=_p(t),r=function(e){return i(o[e],e,o)}}var a=e(t,r,n);return a>-1?o[i?t[a]:a]:void 0}};var Op=/\s/;var Tp=function(e){for(var t=e.length;t--&&Op.test(e.charAt(t)););return t},Ip=/^\s+/;var Mp=function(e){return e?e.slice(0,Tp(e)+1).replace(Ip,""):e},Ap=Mr,Bp=Fr,zp=/^[-+]0x[0-9a-f]+$/i,jp=/^0b[01]+$/i,Rp=/^0o[0-7]+$/i,Lp=parseInt;var Pp=function(e){if("number"==typeof e)return e;if(Bp(e))return NaN;if(Ap(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Ap(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Mp(e);var r=jp.test(e);return r||Rp.test(e)?Lp(e.slice(2),r?2:8):zp.test(e)?NaN:+e},Np=Pp,Hp=1/0;var Wp=function(e){return e?(e=Np(e))===Hp||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var Yp=function(e,t,r,n){for(var o=e.length,i=r+(n?1:-1);n?i--:++i<o;)if(t(e[i],i,e))return i;return-1},Vp=Dp,Up=function(e){var t=Wp(e),r=t%1;return t==t?r?t-r:t:0},Kp=Math.max;var qp=function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var o=null==r?0:Up(r);return o<0&&(o=Kp(n+o,0)),Yp(e,Vp(t),o)},Zp=Te(qp),Gp=Te(Ep(qp)),Qp=Rf;var Xp=Te((function(e,t){return Qp(e,t)}));function Jp(e){return()=>e}function eg(e){e()}function tg(e,t){return r=>e(t(r))}function rg(e,t){return()=>e(t)}function ng(e,t){return r=>e(t,r)}function og(e){return void 0!==e}function ig(){}function ag(e,t){return t(e),e}function sg(e,t){return t(e)}function lg(...e){return e}function dg(e,t){return e(1,t)}function cg(e,t){e(0,t)}function ug(e){e(2)}function hg(e){return e(4)}function fg(e,t){return dg(e,ng(t,0))}function pg(e,t){const r=e(1,(e=>{r(),t(e)}));return r}function gg(e){let t,r;return n=>o=>{t=o,r&&clearTimeout(r),r=setTimeout((()=>{n(t)}),e)}}function mg(e,t){return e===t}function bg(e=mg){let t;return r=>n=>{e(t,n)||(t=n,r(n))}}function vg(e){return t=>r=>{e(r)&&t(r)}}function yg(e){return t=>tg(t,e)}function xg(e){return t=>()=>{t(e)}}function wg(e,...t){const r=function(...e){return t=>e.reduceRight(sg,t)}(...t);return(t,n)=>{switch(t){case 2:return void ug(e);case 1:return dg(e,r(n))}}}function $g(e,t){return r=>n=>{r(t=e(t,n))}}function Cg(e){return t=>r=>{e>0?e--:t(r)}}function Sg(e){let t,r=null;return n=>o=>{r=o,!t&&(t=setTimeout((()=>{t=void 0,n(r)}),e))}}function Dg(...e){const t=new Array(e.length);let r=0,n=null;const o=Math.pow(2,e.length)-1;return e.forEach(((e,i)=>{const a=Math.pow(2,i);dg(e,(e=>{const s=r;r|=a,t[i]=e,s!==o&&r===o&&n&&(n(),n=null)}))})),e=>i=>{const a=()=>{e([i].concat(t))};r===o?a():n=a}}function kg(e){let t=e;const r=_g();return(e,n)=>{switch(e){case 0:t=n;break;case 1:n(t);break;case 4:return t}return r(e,n)}}function Fg(e,t){return ag(kg(t),(t=>fg(e,t)))}function _g(){const e=[];return(t,r)=>{switch(t){case 0:return void e.slice().forEach((e=>{e(r)}));case 2:return void e.splice(0,e.length);case 1:return e.push(r),()=>{const t=e.indexOf(r);t>-1&&e.splice(t,1)}}}}function Eg(e){return ag(_g(),(t=>fg(e,t)))}function Og(e,t=[],{singleton:r}={singleton:!0}){return{constructor:e,dependencies:t,id:Tg(),singleton:r}}const Tg=()=>Symbol();function Ig(...e){const t=_g(),r=new Array(e.length);let n=0;const o=Math.pow(2,e.length)-1;return e.forEach(((e,i)=>{const a=Math.pow(2,i);dg(e,(e=>{r[i]=e,n|=a,n===o&&cg(t,r)}))})),function(e,i){switch(e){case 2:return void ug(t);case 1:return n===o&&i(r),dg(t,i)}}}function Mg(e,t=mg){return wg(e,bg(t))}function Ag(...e){return function(t,r){switch(t){case 2:return;case 1:return function(...e){return()=>{e.map(eg)}}(...e.map((e=>dg(e,r))))}}}var Bg=(e=>(e[e.DEBUG=0]="DEBUG",e[e.INFO=1]="INFO",e[e.WARN=2]="WARN",e[e.ERROR=3]="ERROR",e))(Bg||{});const zg={0:"debug",3:"error",1:"log",2:"warn"},jg=Og((()=>{const e=kg(3);return{log:kg(((t,r,n=1)=>{var o;n>=(null!=(o=(typeof globalThis>"u"?window:globalThis).VIRTUOSO_LOG_LEVEL)?o:hg(e))&&console[zg[n]]("%creact-virtuoso: %c%s %o","color: #0253b3; font-weight: bold","color: initial",t,r)})),logLevel:e}}),[],{singleton:!0});function Rg(e,t,r){return Lg(e,t,r).callbackRef}function Lg(e,t,r){const n=o.useRef(null);let i=e=>{};if(typeof ResizeObserver<"u"){const a=o.useMemo((()=>new ResizeObserver((t=>{const n=()=>{const r=t[0].target;null!==r.offsetParent&&e(r)};r?n():requestAnimationFrame(n)}))),[e]);i=e=>{e&&t?(a.observe(e),n.current=e):(n.current&&a.unobserve(n.current),n.current=null)}}return{callbackRef:i,ref:n}}function Pg(e,t,r,n,i,a,s,l,d){const c=o.useCallback((r=>{const o=function(e,t,r,n){const o=e.length;if(0===o)return null;const i=[];for(let a=0;a<o;a++){const o=e.item(a);if(void 0===o.dataset.index)continue;const s=parseInt(o.dataset.index),l=parseFloat(o.dataset.knownSize),d=t(o,r);if(0===d&&n("Zero-sized element, this should not happen",{child:o},Bg.ERROR),d===l)continue;const c=i[i.length-1];0===i.length||c.size!==d||c.endIndex!==s-1?i.push({endIndex:s,size:d,startIndex:s}):i[i.length-1].endIndex++}return i}(r.children,t,l?"offsetWidth":"offsetHeight",i);let d=r.parentElement;for(;!d.dataset.virtuosoScroller;)d=d.parentElement;const c="window"===d.lastElementChild.dataset.viewportType,u=s?l?s.scrollLeft:s.scrollTop:c?l?window.pageXOffset||document.documentElement.scrollLeft:window.pageYOffset||document.documentElement.scrollTop:l?d.scrollLeft:d.scrollTop,h=s?l?s.scrollWidth:s.scrollHeight:c?l?document.documentElement.scrollWidth:document.documentElement.scrollHeight:l?d.scrollWidth:d.scrollHeight,f=s?l?s.offsetWidth:s.offsetHeight:c?l?window.innerWidth:window.innerHeight:l?d.offsetWidth:d.offsetHeight;n({scrollHeight:h,scrollTop:Math.max(u,0),viewportHeight:f}),null==a||a(l?Ng("column-gap",getComputedStyle(r).columnGap,i):Ng("row-gap",getComputedStyle(r).rowGap,i)),null!==o&&e(o)}),[e,t,i,a,s,n]);return Lg(c,r,d)}function Ng(e,t,r){return"normal"!==t&&!(null!=t&&t.endsWith("px"))&&r(`${e} was not resolved to pixel value correctly`,t,Bg.WARN),"normal"===t?0:parseInt(null!=t?t:"0",10)}function Hg(e,t,r){const n=o.useRef(null),i=o.useCallback((r=>{if(null==r||!r.offsetParent)return;const o=r.getBoundingClientRect(),i=o.width;let a,s;if(t){const e=t.getBoundingClientRect(),r=o.top-e.top;s=e.height-Math.max(0,r),a=r+t.scrollTop}else s=window.innerHeight-Math.max(0,o.top),a=o.top+window.pageYOffset;n.current={offsetTop:a,visibleHeight:s,visibleWidth:i},e(n.current)}),[e,t]),{callbackRef:a,ref:s}=Lg(i,!0,r),l=o.useCallback((()=>{i(s.current)}),[i,s]);return o.useEffect((()=>{if(t){t.addEventListener("scroll",l);const e=new ResizeObserver((()=>{requestAnimationFrame(l)}));return e.observe(t),()=>{t.removeEventListener("scroll",l),e.unobserve(t)}}return window.addEventListener("scroll",l),window.addEventListener("resize",l),()=>{window.removeEventListener("scroll",l),window.removeEventListener("resize",l)}}),[l,t]),a}const Wg=Og((()=>{const e=_g(),t=_g(),r=kg(0),n=_g(),o=kg(0),i=_g(),a=_g(),s=kg(0),l=kg(0),d=kg(0),c=kg(0),u=_g(),h=_g(),f=kg(!1),p=kg(!1),g=kg(!1);return fg(wg(e,yg((({scrollTop:e})=>e))),t),fg(wg(e,yg((({scrollHeight:e})=>e))),a),fg(t,o),{deviation:r,fixedFooterHeight:d,fixedHeaderHeight:l,footerHeight:c,headerHeight:s,horizontalDirection:p,scrollBy:h,scrollContainerState:e,scrollHeight:a,scrollingInProgress:f,scrollTo:u,scrollTop:t,skipAnimationFrameInResizeObserver:g,smoothScrollTargetReached:n,statefulScrollTop:o,viewportHeight:i}}),[],{singleton:!0}),Yg={lvl:0};function Vg(e,t){const r=e.length;if(0===r)return[];let{index:n,value:o}=t(e[0]);const i=[];for(let a=1;a<r;a++){const{index:r,value:s}=t(e[a]);i.push({end:r-1,start:n,value:o}),n=r,o=s}return i.push({end:1/0,start:n,value:o}),i}function Ug(e){return e===Yg}function Kg(e,t){if(!Ug(e))return t===e.k?e.v:t<e.k?Kg(e.l,t):Kg(e.r,t)}function qg(e,t,r="k"){if(Ug(e))return[-1/0,void 0];if(Number(e[r])===t)return[e.k,e.v];if(Number(e[r])<t){const n=qg(e.r,t,r);return n[0]===-1/0?[e.k,e.v]:n}return qg(e.l,t,r)}function Zg(e,t,r){return Ug(e)?am(t,r,1):t===e.k?rm(e,{k:t,v:r}):t<e.k?sm(rm(e,{l:Zg(e.l,t,r)})):sm(rm(e,{r:Zg(e.r,t,r)}))}function Gg(){return Yg}function Qg(e,t,r){if(Ug(e))return[];return function(e){return Vg(e,(({k:e,v:t})=>({index:e,value:t})))}(em(e,qg(e,t)[0],r))}function Xg(e,t){if(Ug(e))return Yg;const{k:r,l:n,r:o}=e;if(t===r){if(Ug(n))return o;if(Ug(o))return n;{const[t,r]=im(n);return tm(rm(e,{k:t,l:nm(n),v:r}))}}return tm(rm(e,t<r?{l:Xg(n,t)}:{r:Xg(o,t)}))}function Jg(e){return Ug(e)?[]:[...Jg(e.l),{k:e.k,v:e.v},...Jg(e.r)]}function em(e,t,r){if(Ug(e))return[];const{k:n,l:o,r:i,v:a}=e;let s=[];return n>t&&(s=s.concat(em(o,t,r))),n>=t&&n<=r&&s.push({k:n,v:a}),n<=r&&(s=s.concat(em(i,t,r))),s}function tm(e){const{l:t,lvl:r,r:n}=e;if(n.lvl>=r-1&&t.lvl>=r-1)return e;if(r>n.lvl+1){if(om(t))return lm(rm(e,{lvl:r-1}));if(!Ug(t)&&!Ug(t.r))return rm(t.r,{l:rm(t,{r:t.r.l}),lvl:r,r:rm(e,{l:t.r.r,lvl:r-1})});throw new Error("Unexpected empty nodes")}if(om(e))return dm(rm(e,{lvl:r-1}));if(Ug(n)||Ug(n.l))throw new Error("Unexpected empty nodes");{const t=n.l,o=om(t)?n.lvl-1:n.lvl;return rm(t,{l:rm(e,{lvl:r-1,r:t.l}),lvl:t.lvl+1,r:dm(rm(n,{l:t.r,lvl:o}))})}}function rm(e,t){return am(void 0!==t.k?t.k:e.k,void 0!==t.v?t.v:e.v,void 0!==t.lvl?t.lvl:e.lvl,void 0!==t.l?t.l:e.l,void 0!==t.r?t.r:e.r)}function nm(e){return Ug(e.r)?e.l:tm(rm(e,{r:nm(e.r)}))}function om(e){return Ug(e)||e.lvl>e.r.lvl}function im(e){return Ug(e.r)?[e.k,e.v]:im(e.r)}function am(e,t,r,n=Yg,o=Yg){return{k:e,l:n,lvl:r,r:o,v:t}}function sm(e){return dm(lm(e))}function lm(e){const{l:t}=e;return Ug(t)||t.lvl!==e.lvl?e:rm(t,{r:rm(e,{l:t.r})})}function dm(e){const{lvl:t,r:r}=e;return Ug(r)||Ug(r.r)||r.lvl!==t||r.r.lvl!==t?e:rm(r,{l:rm(e,{r:r.l}),lvl:t+1})}function cm(e,t){return!(!e||e.startIndex!==t.startIndex||e.endIndex!==t.endIndex)}function um(e,t){return!(!e||e[0]!==t[0]||e[1]!==t[1])}const hm=Og((()=>({recalcInProgress:kg(!1)})),[],{singleton:!0});function fm(e,t,r){return e[pm(e,t,r)]}function pm(e,t,r,n=0){let o=e.length-1;for(;n<=o;){const i=Math.floor((n+o)/2),a=r(e[i],t);if(0===a)return i;if(-1===a){if(o-n<2)return i-1;o=i-1}else{if(o===n)return i;n=i+1}}throw new Error(`Failed binary finding record in array - ${e.join(",")}, searched for ${t}`)}function gm(e,t){return Math.round(e.getBoundingClientRect()[t])}function mm(e){return!Ug(e.groupOffsetTree)}function bm({index:e},t){return t===e?0:t<e?-1:1}function vm({offset:e},t){return t===e?0:t<e?-1:1}function ym(e,t,r){if(0===t.length)return 0;const{index:n,offset:o,size:i}=fm(t,e,bm),a=e-n,s=i*a+(a-1)*r+o;return s>0?s+r:s}function xm(e,t){if(!mm(t))return e;let r=0;for(;t.groupIndices[r]<=e+r;)r++;return e+r}function wm(e,t,r){if(function(e){return typeof e.groupIndex<"u"}(e))return t.groupIndices[e.groupIndex]+1;{let n=xm("LAST"===e.index?r:e.index,t);return n=Math.max(0,n,Math.min(r,n)),n}}function $m(e,t,r,n=0){return n>0&&(t=Math.max(t,fm(e,n,bm).offset)),Vg(function(e,t,r,n){const o=pm(e,t,n),i=pm(e,r,n,o);return e.slice(o,i+1)}(e,t,r,vm),km)}function Cm(e,[t,r,n,o]){t.length>0&&n("received item sizes",t,Bg.DEBUG);const i=e.sizeTree;let a=i,s=0;if(r.length>0&&Ug(i)&&2===t.length){const e=t[0].size,n=t[1].size;a=r.reduce(((t,r)=>Zg(Zg(t,r,e),r+1,n)),a)}else[a,s]=function(e,t){let r=Ug(e)?0:1/0;for(const n of t){const{endIndex:t,size:o,startIndex:i}=n;if(r=Math.min(r,i),Ug(e)){e=Zg(e,0,o);continue}const a=Qg(e,i-1,t+1);if(a.some(Fm(n)))continue;let s=!1,l=!1;for(const{end:r,start:n,value:i}of a)s?(t>=n||o===i)&&(e=Xg(e,n)):(l=i!==o,s=!0),r>t&&t>=n&&i!==o&&(e=Zg(e,t+1,i));l&&(e=Zg(e,i,o))}return[e,r]}(a,t);if(a===i)return e;const{lastIndex:l,lastOffset:d,lastSize:c,offsetTree:u}=Dm(e.offsetTree,s,a,o);return{groupIndices:r,groupOffsetTree:r.reduce(((e,t)=>Zg(e,t,ym(t,u,o))),Gg()),lastIndex:l,lastOffset:d,lastSize:c,offsetTree:u,sizeTree:a}}function Sm(e,t){let r=0,n=0;for(;r<e;)r+=t[n+1]-t[n]-1,n++;return n-(r===e?0:1)}function Dm(e,t,r,n){let o=e,i=0,a=0,s=0,l=0;if(0!==t){l=pm(o,t-1,bm),s=o[l].offset;const e=qg(r,t-1);i=e[0],a=e[1],o.length&&o[l].size===qg(r,t)[1]&&(l-=1),o=o.slice(0,l+1)}else o=[];for(const{start:e,value:l}of Qg(r,t,1/0)){const t=e-i,r=t*a+s+t*n;o.push({index:e,offset:r,size:l}),i=e,s=r,a=l}return{lastIndex:i,lastOffset:s,lastSize:a,offsetTree:o}}function km(e){return{index:e.index,value:e}}function Fm(e){const{endIndex:t,size:r,startIndex:n}=e;return e=>e.start===n&&(e.end===t||e.end===1/0)&&e.value===r}const _m={offsetHeight:"height",offsetWidth:"width"},Em=Og((([{log:e},{recalcInProgress:t}])=>{const r=_g(),n=_g(),o=Fg(n,0),i=_g(),a=_g(),s=kg(0),l=kg([]),d=kg(void 0),c=kg(void 0),u=kg(((e,t)=>gm(e,_m[t]))),h=kg(void 0),f=kg(0),p={groupIndices:[],groupOffsetTree:Gg(),lastIndex:0,lastOffset:0,lastSize:0,offsetTree:[],sizeTree:Gg()},g=Fg(wg(r,Dg(l,e,f),$g(Cm,p),bg()),p),m=Fg(wg(l,bg(),$g(((e,t)=>({current:t,prev:e.current})),{current:[],prev:[]}),yg((({prev:e})=>e))),[]);fg(wg(l,vg((e=>e.length>0)),Dg(g,f),yg((([e,t,r])=>{const n=e.reduce(((e,n,o)=>Zg(e,n,ym(n,t.offsetTree,r)||o)),Gg());return{...t,groupIndices:e,groupOffsetTree:n}}))),g),fg(wg(n,Dg(g),vg((([e,{lastIndex:t}])=>e<t)),yg((([e,{lastIndex:t,lastSize:r}])=>[{endIndex:t,size:r,startIndex:e}]))),r),fg(d,c);const b=Fg(wg(d,yg((e=>void 0===e))),!0);fg(wg(c,vg((e=>void 0!==e&&Ug(hg(g).sizeTree))),yg((e=>[{endIndex:0,size:e,startIndex:0}]))),r);const v=Eg(wg(r,Dg(g),$g((({sizes:e},[t,r])=>({changed:r!==e,sizes:r})),{changed:!1,sizes:p}),yg((e=>e.changed))));dg(wg(s,$g(((e,t)=>({diff:e.prev-t,prev:t})),{diff:0,prev:0}),yg((e=>e.diff))),(e=>{const{groupIndices:r}=hg(g);if(e>0)cg(t,!0),cg(i,e+Sm(e,r));else if(e<0){const t=hg(m);t.length>0&&(e-=Sm(-e,t)),cg(a,e)}})),dg(wg(s,Dg(e)),(([e,t])=>{e<0&&t("`firstItemIndex` prop should not be set to less than zero. If you don't know the total count, just use a very high value",{firstItemIndex:s},Bg.ERROR)}));const y=Eg(i);fg(wg(i,Dg(g),yg((([e,t])=>{const r=t.groupIndices.length>0,n=[],o=t.lastSize;if(r){const r=Kg(t.sizeTree,0);let i=0,a=0;for(;i<e;){const e=t.groupIndices[a],s=t.groupIndices.length===a+1?1/0:t.groupIndices[a+1]-e-1;n.push({endIndex:e,size:r,startIndex:e}),n.push({endIndex:e+1+s-1,size:o,startIndex:e+1}),a++,i+=s+1}const s=Jg(t.sizeTree);return i!==e&&s.shift(),s.reduce(((t,{k:r,v:n})=>{let o=t.ranges;return 0!==t.prevSize&&(o=[...t.ranges,{endIndex:r+e-1,size:t.prevSize,startIndex:t.prevIndex}]),{prevIndex:r+e,prevSize:n,ranges:o}}),{prevIndex:e,prevSize:0,ranges:n}).ranges}return Jg(t.sizeTree).reduce(((t,{k:r,v:n})=>({prevIndex:r+e,prevSize:n,ranges:[...t.ranges,{endIndex:r+e-1,size:t.prevSize,startIndex:t.prevIndex}]})),{prevIndex:0,prevSize:o,ranges:[]}).ranges}))),r);const x=Eg(wg(a,Dg(g,f),yg((([e,{offsetTree:t},r])=>ym(-e,t,r)))));return fg(wg(a,Dg(g,f),yg((([e,t,r])=>{if(t.groupIndices.length>0){if(Ug(t.sizeTree))return t;let n=Gg();const o=hg(m);let i=0,a=0,s=0;for(;i<-e;){s=o[a];const e=o[a+1]-s-1;a++,i+=e+1}if(n=Jg(t.sizeTree).reduce(((t,{k:r,v:n})=>Zg(t,Math.max(0,r+e),n)),n),i!==-e){n=Zg(n,0,Kg(t.sizeTree,s));n=Zg(n,1,qg(t.sizeTree,1-e)[1])}return{...t,sizeTree:n,...Dm(t.offsetTree,0,n,r)}}{const n=Jg(t.sizeTree).reduce(((t,{k:r,v:n})=>Zg(t,Math.max(0,r+e),n)),Gg());return{...t,sizeTree:n,...Dm(t.offsetTree,0,n,r)}}}))),g),{beforeUnshiftWith:y,data:h,defaultItemSize:c,firstItemIndex:s,fixedItemSize:d,gap:f,groupIndices:l,itemSize:u,listRefresh:v,shiftWith:a,shiftWithOffset:x,sizeRanges:r,sizes:g,statefulTotalCount:o,totalCount:n,trackItemSizes:b,unshiftWith:i}}),lg(jg,hm),{singleton:!0});function Om(e){return e.reduce(((e,t)=>(e.groupIndices.push(e.totalCount),e.totalCount+=t+1,e)),{groupIndices:[],totalCount:0})}const Tm=Og((([{groupIndices:e,sizes:t,totalCount:r},{headerHeight:n,scrollTop:o}])=>{const i=_g(),a=_g(),s=Eg(wg(i,yg(Om)));return fg(wg(s,yg((e=>e.totalCount))),r),fg(wg(s,yg((e=>e.groupIndices))),e),fg(wg(Ig(o,t,n),vg((([e,t])=>mm(t))),yg((([e,t,r])=>qg(t.groupOffsetTree,Math.max(e-r,0),"v")[0])),bg(),yg((e=>[e]))),a),{groupCounts:i,topItemsIndexes:a}}),lg(Em,Wg)),Im=Og((([{log:e}])=>{const t=kg(!1),r=Eg(wg(t,vg((e=>e)),bg()));return dg(t,(t=>{t&&hg(e)("props updated",{},Bg.DEBUG)})),{didMount:r,propsReady:t}}),lg(jg),{singleton:!0}),Mm=typeof document<"u"&&"scrollBehavior"in document.documentElement.style;function Am(e){const t="number"==typeof e?{index:e}:e;return t.align||(t.align="start"),(!t.behavior||!Mm)&&(t.behavior="auto"),t.offset||(t.offset=0),t}const Bm=Og((([{gap:e,listRefresh:t,sizes:r,totalCount:n},{fixedFooterHeight:o,fixedHeaderHeight:i,footerHeight:a,headerHeight:s,scrollingInProgress:l,scrollTo:d,smoothScrollTargetReached:c,viewportHeight:u},{log:h}])=>{const f=_g(),p=_g(),g=kg(0);let m=null,b=null,v=null;function y(){m&&(m(),m=null),v&&(v(),v=null),b&&(clearTimeout(b),b=null),cg(l,!1)}return fg(wg(f,Dg(r,u,n,g,s,a,h),Dg(e,i,o),yg((([[e,r,n,o,i,a,s,d],u,h,g])=>{const x=Am(e),{align:w,behavior:$,offset:C}=x,S=o-1,D=wm(x,r,S);let k=ym(D,r.offsetTree,u)+a;"end"===w?(k+=h+qg(r.sizeTree,D)[1]-n+g,D===S&&(k+=s)):"center"===w?k+=(h+qg(r.sizeTree,D)[1]-n+g)/2:k-=i,C&&(k+=C);const F=t=>{y(),t?(d("retrying to scroll to",{location:e},Bg.DEBUG),cg(f,e)):(cg(p,!0),d("list did not change, scroll successful",{},Bg.DEBUG))};if(y(),"smooth"===$){let e=!1;v=dg(t,(t=>{e=e||t})),m=pg(c,(()=>{F(e)}))}else m=pg(wg(t,function(e){return t=>{const r=setTimeout((()=>{t(!1)}),e);return e=>{e&&(t(!0),clearTimeout(r))}}}(150)),F);return b=setTimeout((()=>{y()}),1200),cg(l,!0),d("scrolling from index to",{behavior:$,index:D,top:k},Bg.DEBUG),{behavior:$,top:k}}))),d),{scrollTargetReached:p,scrollToIndex:f,topListHeight:g}}),lg(Em,Wg,jg),{singleton:!0});function zm(e,t){0==e?t():requestAnimationFrame((()=>{zm(e-1,t)}))}function jm(e,t){const r=t-1;return"number"==typeof e?e:"LAST"===e.index?r:e.index}const Rm=Og((([{defaultItemSize:e,listRefresh:t,sizes:r},{scrollTop:n},{scrollTargetReached:o,scrollToIndex:i},{didMount:a}])=>{const s=kg(!0),l=kg(0),d=kg(!0);return fg(wg(a,Dg(l),vg((([e,t])=>!!t)),xg(!1)),s),fg(wg(a,Dg(l),vg((([e,t])=>!!t)),xg(!1)),d),dg(wg(Ig(t,a),Dg(s,r,e,d),vg((([[,e],t,{sizeTree:r},n,o])=>e&&(!Ug(r)||og(n))&&!t&&!o)),Dg(l)),(([,e])=>{pg(o,(()=>{cg(d,!0)})),zm(4,(()=>{pg(n,(()=>{cg(s,!0)})),cg(i,e)}))})),{initialItemFinalLocationReached:d,initialTopMostItemIndex:l,scrolledToInitialItem:s}}),lg(Em,Wg,Bm,Im),{singleton:!0});function Lm(e,t){return Math.abs(e-t)<1.01}const Pm="up",Nm="down",Hm={atBottom:!1,notAtBottomBecause:"NOT_SHOWING_LAST_ITEM",state:{offsetBottom:0,scrollHeight:0,scrollTop:0,viewportHeight:0}},Wm=Og((([{footerHeight:e,headerHeight:t,scrollBy:r,scrollContainerState:n,scrollTop:o,viewportHeight:i}])=>{const a=kg(!1),s=kg(!0),l=_g(),d=_g(),c=kg(4),u=kg(0),h=Fg(wg(Ag(wg(Mg(o),Cg(1),xg(!0)),wg(Mg(o),Cg(1),xg(!1),gg(100))),bg()),!1),f=Fg(wg(Ag(wg(r,xg(!0)),wg(r,xg(!1),gg(200))),bg()),!1);fg(wg(Ig(Mg(o),Mg(u)),yg((([e,t])=>e<=t)),bg()),s),fg(wg(s,Sg(50)),d);const p=Eg(wg(Ig(n,Mg(i),Mg(t),Mg(e),Mg(c)),$g(((e,[{scrollHeight:t,scrollTop:r},n,o,i,a])=>{const s={scrollHeight:t,scrollTop:r,viewportHeight:n};if(r+n-t>-a){let t,n;return r>e.state.scrollTop?(t="SCROLLED_DOWN",n=e.state.scrollTop-r):(t="SIZE_DECREASED",n=e.state.scrollTop-r||e.scrollTopDelta),{atBottom:!0,atBottomBecause:t,scrollTopDelta:n,state:s}}let l;return l=s.scrollHeight>e.state.scrollHeight?"SIZE_INCREASED":n<e.state.viewportHeight?"VIEWPORT_HEIGHT_DECREASING":r<e.state.scrollTop?"SCROLLING_UPWARDS":"NOT_FULLY_SCROLLED_TO_LAST_ITEM_BOTTOM",{atBottom:!1,notAtBottomBecause:l,state:s}}),Hm),bg(((e,t)=>e&&e.atBottom===t.atBottom)))),g=Fg(wg(n,$g(((e,{scrollHeight:t,scrollTop:r,viewportHeight:n})=>{if(Lm(e.scrollHeight,t))return{changed:!1,jump:0,scrollHeight:t,scrollTop:r};{const o=t-(r+n)<1;return e.scrollTop!==r&&o?{changed:!0,jump:e.scrollTop-r,scrollHeight:t,scrollTop:r}:{changed:!0,jump:0,scrollHeight:t,scrollTop:r}}}),{changed:!1,jump:0,scrollHeight:0,scrollTop:0}),vg((e=>e.changed)),yg((e=>e.jump))),0);fg(wg(p,yg((e=>e.atBottom))),a),fg(wg(a,Sg(50)),l);const m=kg(Nm);fg(wg(n,yg((({scrollTop:e})=>e)),bg(),$g(((e,t)=>hg(f)?{direction:e.direction,prevScrollTop:t}:{direction:t<e.prevScrollTop?Pm:Nm,prevScrollTop:t}),{direction:Nm,prevScrollTop:0}),yg((e=>e.direction))),m),fg(wg(n,Sg(50),xg("none")),m);const b=kg(0);return fg(wg(h,vg((e=>!e)),xg(0)),b),fg(wg(o,Sg(100),Dg(h),vg((([e,t])=>!!t)),$g((([e,t],[r])=>[t,r]),[0,0]),yg((([e,t])=>t-e))),b),{atBottomState:p,atBottomStateChange:l,atBottomThreshold:c,atTopStateChange:d,atTopThreshold:u,isAtBottom:a,isAtTop:s,isScrolling:h,lastJumpDueToItemResize:g,scrollDirection:m,scrollVelocity:b}}),lg(Wg)),Ym="top",Vm="bottom",Um="none";function Km(e,t,r){return"number"==typeof e?r===Pm&&t===Ym||r===Nm&&t===Vm?e:0:r===Pm?t===Ym?e.main:e.reverse:t===Vm?e.main:e.reverse}function qm(e,t){var r;return"number"==typeof e?e:null!=(r=e[t])?r:0}const Zm=Og((([{deviation:e,fixedHeaderHeight:t,headerHeight:r,scrollTop:n,viewportHeight:o}])=>{const i=_g(),a=kg(0),s=kg(0),l=kg(0),d=Fg(wg(Ig(Mg(n),Mg(o),Mg(r),Mg(i,um),Mg(l),Mg(a),Mg(t),Mg(e),Mg(s)),yg((([e,t,r,[n,o],i,a,s,l,d])=>{const c=e-l,u=a+s,h=Math.max(r-c,0);let f=Um;const p=qm(d,Ym),g=qm(d,Vm);return n-=l,o+=r+s,(n+=r+s)>e+u-p&&(f=Pm),(o-=l)<e-h+t+g&&(f=Nm),f!==Um?[Math.max(c-r-Km(i,Ym,f)-p,0),c-h-s+t+Km(i,Vm,f)+g]:null})),vg((e=>null!=e)),bg(um)),[0,0]);return{increaseViewportBy:s,listBoundary:i,overscan:l,topListHeight:a,visibleRange:d}}),lg(Wg),{singleton:!0});const Gm={bottom:0,firstItemIndex:0,items:[],offsetBottom:0,offsetTop:0,top:0,topItems:[],topListHeight:0,totalCount:0};function Qm(e,t,r,n,o,i){const{lastIndex:a,lastOffset:s,lastSize:l}=o;let d=0,c=0;if(e.length>0){d=e[0].offset;const t=e[e.length-1];c=t.offset+t.size}const u=r-a,h=d,f=s+u*l+(u-1)*n-c;return{bottom:c,firstItemIndex:i,items:Jm(e,o,i),offsetBottom:f,offsetTop:d,top:h,topItems:Jm(t,o,i),topListHeight:t.reduce(((e,t)=>t.size+e),0),totalCount:r}}function Xm(e,t,r,n,o,i){let a=0;if(r.groupIndices.length>0)for(const t of r.groupIndices){if(t-a>=e)break;a++}const s=e+a,l=jm(t,s);return Qm(Array.from({length:s}).map(((e,t)=>({data:i[t+l],index:t+l,offset:0,size:0}))),[],s,o,r,n)}function Jm(e,t,r){if(0===e.length)return[];if(!mm(t))return e.map((e=>({...e,index:e.index+r,originalIndex:e.index})));const n=e[0].index,o=e[e.length-1].index,i=[],a=Qg(t.groupOffsetTree,n,o);let s,l=0;for(const n of e){let e;(!s||s.end<n.index)&&(s=a.shift(),l=t.groupIndices.indexOf(s.start)),e=n.index===s.start?{index:l,type:"group"}:{groupIndex:l,index:n.index-(l+1)+r},i.push({...e,data:n.data,offset:n.offset,originalIndex:n.index,size:n.size})}return i}const eb=Og((([{data:e,firstItemIndex:t,gap:r,sizes:n,totalCount:o},i,{listBoundary:a,topListHeight:s,visibleRange:l},{initialTopMostItemIndex:d,scrolledToInitialItem:c},{topListHeight:u},h,{didMount:f},{recalcInProgress:p}])=>{const g=kg([]),m=kg(0),b=_g();fg(i.topItemsIndexes,g);const v=Fg(wg(Ig(f,p,Mg(l,um),Mg(o),Mg(n),Mg(d),c,Mg(g),Mg(t),Mg(r),e),vg((([e,t,,r,,,,,,,n])=>{const o=n&&n.length!==r;return e&&!t&&!o})),yg((([,,[e,t],r,n,o,i,a,s,l,d])=>{const c=n,{offsetTree:u,sizeTree:h}=c,f=hg(m);if(0===r)return{...Gm,totalCount:r};if(0===e&&0===t)return 0===f?{...Gm,totalCount:r}:Xm(f,o,n,s,l,d||[]);if(Ug(h))return f>0?null:Qm(function(e,t,r){if(mm(t)){const n=xm(e,t);return[{index:qg(t.groupOffsetTree,n)[0],offset:0,size:0},{data:null==r?void 0:r[0],index:n,offset:0,size:0}]}return[{data:null==r?void 0:r[0],index:e,offset:0,size:0}]}(jm(o,r),c,d),[],r,l,c,s);const p=[];if(a.length>0){const e=a[0],t=a[a.length-1];let r=0;for(const n of Qg(h,e,t)){const o=n.value,i=Math.max(n.start,e),a=Math.min(n.end,t);for(let e=i;e<=a;e++)p.push({data:null==d?void 0:d[e],index:e,offset:r,size:o}),r+=o}}if(!i)return Qm([],p,r,l,c,s);const g=a.length>0?a[a.length-1]+1:0,b=$m(u,e,t,g);if(0===b.length)return null;const v=r-1;return Qm(ag([],(r=>{for(const n of b){const o=n.value;let i=o.offset,a=n.start;const s=o.size;if(o.offset<e){a+=Math.floor((e-o.offset+l)/(s+l));const t=a-n.start;i+=t*s+t*l}a<g&&(i+=(g-a)*s,a=g);const c=Math.min(n.end,v);for(let e=a;e<=c&&!(i>=t);e++)r.push({data:null==d?void 0:d[e],index:e,offset:i,size:s}),i+=s+l}})),p,r,l,c,s)})),vg((e=>null!==e)),bg()),Gm);fg(wg(e,vg(og),yg((e=>null==e?void 0:e.length))),o),fg(wg(v,yg((e=>e.topListHeight))),u),fg(u,s),fg(wg(v,yg((e=>[e.top,e.bottom]))),a),fg(wg(v,yg((e=>e.items))),b);const y=Eg(wg(v,vg((({items:e})=>e.length>0)),Dg(o,e),vg((([{items:e},t])=>e[e.length-1].originalIndex===t-1)),yg((([,e,t])=>[e-1,t])),bg(um),yg((([e])=>e)))),x=Eg(wg(v,Sg(200),vg((({items:e,topItems:t})=>e.length>0&&e[0].originalIndex===t.length)),yg((({items:e})=>e[0].index)),bg())),w=Eg(wg(v,vg((({items:e})=>e.length>0)),yg((({items:e})=>{let t=0,r=e.length-1;for(;"group"===e[t].type&&t<r;)t++;for(;"group"===e[r].type&&r>t;)r--;return{endIndex:e[r].index,startIndex:e[t].index}})),bg(cm)));return{endReached:y,initialItemCount:m,itemsRendered:b,listState:v,rangeChanged:w,startReached:x,topItemsIndexes:g,...h}}),lg(Em,Tm,Zm,Rm,Bm,Wm,Im,hm),{singleton:!0}),tb=Og((([{fixedFooterHeight:e,fixedHeaderHeight:t,footerHeight:r,headerHeight:n},{listState:o}])=>{const i=_g(),a=Fg(wg(Ig(r,e,n,t,o),yg((([e,t,r,n,o])=>e+t+r+n+o.offsetBottom+o.bottom))),0);return fg(Mg(a),i),{totalListHeight:a,totalListHeightChanged:i}}),lg(Wg,eb),{singleton:!0}),rb=Og((([{viewportHeight:e},{totalListHeight:t}])=>{const r=kg(!1),n=Fg(wg(Ig(r,e,t),vg((([e])=>e)),yg((([,e,t])=>Math.max(0,e-t))),Sg(0),bg()),0);return{alignToBottom:r,paddingTopAddition:n}}),lg(Wg,tb),{singleton:!0});function nb(e){return!!e&&("smooth"===e?"smooth":"auto")}const ob=Og((([{listRefresh:e,totalCount:t},{atBottomState:r,isAtBottom:n},{scrollToIndex:o},{scrolledToInitialItem:i},{didMount:a,propsReady:s},{log:l},{scrollingInProgress:d}])=>{const c=kg(!1),u=_g();let h=null;function f(e){cg(o,{align:"end",behavior:e,index:"LAST"})}function p(e){const t=pg(r,(t=>{e&&!t.atBottom&&"SIZE_INCREASED"===t.notAtBottomBecause&&!h&&(hg(l)("scrolling to bottom due to increased size",{},Bg.DEBUG),f("auto"))}));setTimeout(t,100)}return dg(wg(Ig(wg(Mg(t),Cg(1)),a),Dg(Mg(c),n,i,d),yg((([[e,t],r,n,o,i])=>{let a=t&&o,s="auto";return a&&(s=((e,t)=>"function"==typeof e?nb(e(t)):t&&nb(e))(r,n||i),a=a&&!!s),{followOutputBehavior:s,shouldFollow:a,totalCount:e}})),vg((({shouldFollow:e})=>e))),(({followOutputBehavior:t,totalCount:r})=>{h&&(h(),h=null),h=pg(e,(()=>{hg(l)("following output to ",{totalCount:r},Bg.DEBUG),f(t),h=null}))})),dg(wg(Ig(Mg(c),t,s),vg((([e,,t])=>e&&t)),$g((({value:e},[,t])=>({refreshed:e===t,value:t})),{refreshed:!1,value:0}),vg((({refreshed:e})=>e)),Dg(c,t)),(([,e])=>{hg(i)&&p(!1!==e)})),dg(u,(()=>{p(!1!==hg(c))})),dg(Ig(Mg(c),r),(([e,t])=>{e&&!t.atBottom&&"VIEWPORT_HEIGHT_DECREASING"===t.notAtBottomBecause&&f("auto")})),{autoscrollToBottom:u,followOutput:c}}),lg(Em,Wm,Bm,Rm,Im,jg,Wg)),ib=Og((([{data:e,firstItemIndex:t,gap:r,sizes:n},{initialTopMostItemIndex:o},{initialItemCount:i,listState:a},{didMount:s}])=>(fg(wg(s,Dg(i),vg((([,e])=>0!==e)),Dg(o,n,t,r,e),yg((([[,e],t,r,n,o,i=[]])=>Xm(e,t,r,n,o,i)))),a),{})),lg(Em,Rm,eb,Im),{singleton:!0}),ab=Og((([{didMount:e},{scrollTo:t},{listState:r}])=>{const n=kg(0);return dg(wg(e,Dg(n),vg((([,e])=>0!==e)),yg((([,e])=>({top:e})))),(e=>{pg(wg(r,Cg(1),vg((e=>e.items.length>1))),(()=>{requestAnimationFrame((()=>{cg(t,e)}))}))})),{initialScrollTop:n}}),lg(Im,Wg,eb),{singleton:!0}),sb=({itemBottom:e,itemTop:t,locationParams:{align:r,behavior:n,...o},viewportBottom:i,viewportTop:a})=>t<a?{...o,align:null!=r?r:"start",behavior:n}:e>i?{...o,align:null!=r?r:"end",behavior:n}:null,lb=Og((([{gap:e,sizes:t,totalCount:r},{fixedFooterHeight:n,fixedHeaderHeight:o,headerHeight:i,scrollingInProgress:a,scrollTop:s,viewportHeight:l},{scrollToIndex:d}])=>{const c=_g();return fg(wg(c,Dg(t,l,r,i,o,n,s),Dg(e),yg((([[e,t,r,n,o,i,s,l],d])=>{const{align:c,behavior:u,calculateViewLocation:h=sb,done:f,...p}=e,g=wm(e,t,n-1),m=ym(g,t.offsetTree,d)+o+i,b=h({itemBottom:m+qg(t.sizeTree,g)[1],itemTop:m,locationParams:{align:c,behavior:u,...p},viewportBottom:l+r-s,viewportTop:l+i});return b?f&&pg(wg(a,vg((e=>!e)),Cg(hg(a)?1:2)),f):f&&f(),b})),vg((e=>null!==e))),d),{scrollIntoView:c}}),lg(Em,Wg,Bm,eb,jg),{singleton:!0}),db=Og((([{scrollVelocity:e}])=>{const t=kg(!1),r=_g(),n=kg(!1);return fg(wg(e,Dg(n,t,r),vg((([e,t])=>!!t)),yg((([e,t,r,n])=>{const{enter:o,exit:i}=t;if(r){if(i(e,n))return!1}else if(o(e,n))return!0;return r})),bg()),t),dg(wg(Ig(t,e,r),Dg(n)),(([[e,t,r],n])=>{e&&n&&n.change&&n.change(t,r)})),{isSeeking:t,scrollSeekConfiguration:n,scrollSeekRangeChanged:r,scrollVelocity:e}}),lg(Wm),{singleton:!0}),cb=Og((([{scrollContainerState:e,scrollTo:t}])=>{const r=_g(),n=_g(),o=_g(),i=kg(!1),a=kg(void 0);return fg(wg(Ig(r,n),yg((([{scrollHeight:e,scrollTop:t,viewportHeight:r},{offsetTop:n}])=>({scrollHeight:e,scrollTop:Math.max(0,t-n),viewportHeight:r})))),e),fg(wg(t,Dg(n),yg((([e,{offsetTop:t}])=>({...e,top:e.top+t})))),o),{customScrollParent:a,useWindowScroll:i,windowScrollContainerState:r,windowScrollTo:o,windowViewportRect:n}}),lg(Wg)),ub=Og((([{sizeRanges:e,sizes:t},{headerHeight:r,scrollTop:n},{initialTopMostItemIndex:o},{didMount:i},{useWindowScroll:a,windowScrollContainerState:s,windowViewportRect:l}])=>{const d=_g(),c=kg(void 0),u=kg(null),h=kg(null);return fg(s,u),fg(l,h),dg(wg(d,Dg(t,n,a,u,h,r)),(([e,t,r,n,o,i,a])=>{const s=function(e){return Jg(e).map((({k:e,v:t},r,n)=>{const o=n[r+1];return{endIndex:o?o.k-1:1/0,size:t,startIndex:e}}))}(t.sizeTree);n&&null!==o&&null!==i&&(r=o.scrollTop-i.offsetTop),e({ranges:s,scrollTop:r-=a})})),fg(wg(c,vg(og),yg(hb)),o),fg(wg(i,Dg(c),vg((([,e])=>void 0!==e)),bg(),yg((([,e])=>e.ranges))),e),{getState:d,restoreStateFrom:c}}),lg(Em,Wg,Rm,Im,cb));function hb(e){return{align:"start",index:0,offset:e.scrollTop}}const fb=Og((([{topItemsIndexes:e}])=>{const t=kg(0);return fg(wg(t,vg((e=>e>=0)),yg((e=>Array.from({length:e}).map(((e,t)=>t))))),e),{topItemCount:t}}),lg(eb));function pb(e){let t,r=!1;return()=>(r||(r=!0,t=e()),t)}const gb=pb((()=>/iP(ad|od|hone)/i.test(navigator.userAgent)&&/WebKit/i.test(navigator.userAgent))),mb=Og((([{deviation:e,scrollBy:t,scrollingInProgress:r,scrollTop:n},{isAtBottom:o,isScrolling:i,lastJumpDueToItemResize:a,scrollDirection:s},{listState:l},{beforeUnshiftWith:d,gap:c,shiftWithOffset:u,sizes:h},{log:f},{recalcInProgress:p}])=>{const g=Eg(wg(l,Dg(a),$g((([,e,t,r],[{bottom:n,items:o,offsetBottom:i,totalCount:a},s])=>{const l=n+i;let d=0;return t===a&&e.length>0&&o.length>0&&(0===o[0].originalIndex&&0===e[0].originalIndex||(d=l-r,0!==d&&(d+=s))),[d,o,a,l]}),[0,[],0,0]),vg((([e])=>0!==e)),Dg(n,s,r,o,f,p),vg((([,e,t,r,,,n])=>!n&&!r&&0!==e&&t===Pm)),yg((([[e],,,,,t])=>(t("Upward scrolling compensation",{amount:e},Bg.DEBUG),e)))));function m(r){r>0?(cg(t,{behavior:"auto",top:-r}),cg(e,0)):(cg(e,0),cg(t,{behavior:"auto",top:-r}))}return dg(wg(g,Dg(e,i)),(([t,r,n])=>{n&&gb()?cg(e,r-t):m(-t)})),dg(wg(Ig(Fg(i,!1),e,p),vg((([e,t,r])=>!e&&!r&&0!==t)),yg((([e,t])=>t)),Sg(1)),m),fg(wg(u,yg((e=>({top:-e})))),t),dg(wg(d,Dg(h,c),yg((([e,{groupIndices:t,lastSize:r,sizeTree:n},o])=>{function i(e){return e*(r+o)}if(0===t.length)return i(e);{let r=0;const o=Kg(n,0);let a=0,s=0;for(;a<e;){a++,r+=o;let n=t.length===s+1?1/0:t[s+1]-t[s]-1;a+n>e&&(r-=o,n=e-a+1),a+=n,r+=i(n),s++}return r}}))),(r=>{cg(e,r),requestAnimationFrame((()=>{cg(t,{top:r}),requestAnimationFrame((()=>{cg(e,0),cg(p,!1)}))}))})),{deviation:e}}),lg(Wg,Wm,eb,Em,jg,hm)),bb=Og((([e,t,r,n,o,i,a,s,l,d])=>({...e,...t,...r,...n,...o,...i,...a,...s,...l,...d})),lg(Zm,ib,Im,db,tb,ab,rb,cb,lb,jg)),vb=Og((([{data:e,defaultItemSize:t,firstItemIndex:r,fixedItemSize:n,gap:o,groupIndices:i,itemSize:a,sizeRanges:s,sizes:l,statefulTotalCount:d,totalCount:c,trackItemSizes:u},{initialItemFinalLocationReached:h,initialTopMostItemIndex:f,scrolledToInitialItem:p},g,m,b,{listState:v,topItemsIndexes:y,...x},{scrollToIndex:w},$,{topItemCount:C},{groupCounts:S},D])=>(fg(x.rangeChanged,D.scrollSeekRangeChanged),fg(wg(D.windowViewportRect,yg((e=>e.visibleHeight))),g.viewportHeight),{data:e,defaultItemHeight:t,firstItemIndex:r,fixedItemHeight:n,gap:o,groupCounts:S,initialItemFinalLocationReached:h,initialTopMostItemIndex:f,scrolledToInitialItem:p,sizeRanges:s,topItemCount:C,topItemsIndexes:y,totalCount:c,...b,groupIndices:i,itemSize:a,listState:v,scrollToIndex:w,statefulTotalCount:d,trackItemSizes:u,...x,...D,...g,sizes:l,...m})),lg(Em,Rm,Wg,ub,ob,eb,Bm,mb,fb,Tm,bb));function yb(e,t){const r={},n={};let o=0;const i=e.length;for(;o<i;)n[e[o]]=1,o+=1;for(const e in t)Object.hasOwn(n,e)||(r[e]=t[e]);return r}const xb=typeof document<"u"?o.useLayoutEffect:o.useEffect;function wb(t,r,n){const i=Object.keys(r.required||{}),a=Object.keys(r.optional||{}),s=Object.keys(r.methods||{}),l=Object.keys(r.events||{}),d=o.createContext({});function c(e,t){e.propsReady&&cg(e.propsReady,!1);for(const n of i){cg(e[r.required[n]],t[n])}for(const n of a)if(n in t){cg(e[r.optional[n]],t[n])}e.propsReady&&cg(e.propsReady,!0)}function u(e){return l.reduce(((t,n)=>(t[n]=function(e){let t,r;const n=()=>null==t?void 0:t();return function(o,i){switch(o){case 1:return i?r===i?void 0:(n(),r=i,t=dg(e,i),t):(n(),ig);case 2:return n(),void(r=null)}}}(e[r.events[n]]),t)),{})}const h=o.forwardRef(((h,f)=>{const{children:p,...g}=h,[m]=o.useState((()=>ag(function(e){const t=new Map,r=({constructor:e,dependencies:n,id:o,singleton:i})=>{if(i&&t.has(o))return t.get(o);const a=e(n.map((e=>r(e))));return i&&t.set(o,a),a};return r(e)}(t),(e=>{c(e,g)})))),[b]=o.useState(rg(u,m));xb((()=>{for(const e of l)e in g&&dg(b[e],g[e]);return()=>{Object.values(b).map(ug)}}),[g,b,m]),xb((()=>{c(m,g)})),o.useImperativeHandle(f,Jp(function(e){return s.reduce(((t,n)=>(t[n]=t=>{cg(e[r.methods[n]],t)},t)),{})}(m)));const v=n;return e(d.Provider,{value:m,children:n?e(v,{...yb([...i,...a,...l],g),children:p}):p})})),f=o.version.startsWith("18")?e=>{const t=o.useContext(d)[e],r=o.useCallback((e=>dg(t,e)),[t]);return o.useSyncExternalStore(r,(()=>hg(t)),(()=>hg(t)))}:e=>{const t=o.useContext(d)[e],[r,n]=o.useState(rg(hg,t));return xb((()=>dg(t,(e=>{e!==r&&n(Jp(e))}))),[t,r]),r};return{Component:h,useEmitter:(e,t)=>{const r=o.useContext(d)[e];xb((()=>dg(r,t)),[t,r])},useEmitterValue:f,usePublisher:e=>o.useCallback(ng(cg,o.useContext(d)[e]),[e])}}const $b=o.createContext(void 0),Cb=o.createContext(void 0),Sb=typeof document<"u"?o.useLayoutEffect:o.useEffect;function Db(e,t,r,n=ig,i,a){const s=o.useRef(null),l=o.useRef(null),d=o.useRef(null),c=o.useCallback((r=>{const n=r.target,o=n===window||n===document,i=a?o?window.pageXOffset||document.documentElement.scrollLeft:n.scrollLeft:o?window.pageYOffset||document.documentElement.scrollTop:n.scrollTop,s=a?o?document.documentElement.scrollWidth:n.scrollWidth:o?document.documentElement.scrollHeight:n.scrollHeight,c=a?o?window.innerWidth:n.offsetWidth:o?window.innerHeight:n.offsetHeight,u=()=>{e({scrollHeight:s,scrollTop:Math.max(i,0),viewportHeight:c})};r.suppressFlushSync?u():ee.flushSync(u),null!==l.current&&(i===l.current||i<=0||i===s-c)&&(l.current=null,t(!0),d.current&&(clearTimeout(d.current),d.current=null))}),[e,t]);return o.useEffect((()=>{const e=i||s.current;return n(i||s.current),c({suppressFlushSync:!0,target:e}),e.addEventListener("scroll",c,{passive:!0}),()=>{n(null),e.removeEventListener("scroll",c)}}),[s,c,r,n,i]),{scrollByCallback:function(e){a&&(e={behavior:e.behavior,left:e.top}),s.current.scrollBy(e)},scrollerRef:s,scrollToCallback:function(r){const n=s.current;if(!n||(a?"offsetWidth"in n&&0===n.offsetWidth:"offsetHeight"in n&&0===n.offsetHeight))return;const o="smooth"===r.behavior;let i,c,u;n===window?(c=Math.max(gm(document.documentElement,a?"width":"height"),a?document.documentElement.scrollWidth:document.documentElement.scrollHeight),i=a?window.innerWidth:window.innerHeight,u=a?document.documentElement.scrollLeft:document.documentElement.scrollTop):(c=n[a?"scrollWidth":"scrollHeight"],i=gm(n,a?"width":"height"),u=n[a?"scrollLeft":"scrollTop"]);const h=c-i;if(r.top=Math.ceil(Math.max(Math.min(h,r.top),0)),Lm(i,c)||r.top===u)return e({scrollHeight:c,scrollTop:u,viewportHeight:i}),void(o&&t(!0));o?(l.current=r.top,d.current&&clearTimeout(d.current),d.current=setTimeout((()=>{d.current=null,l.current=null,t(!0)}),1e3)):l.current=null,a&&(r={behavior:r.behavior,left:r.top}),n.scrollTo(r)}}}const kb="-webkit-sticky",Fb="sticky",_b=pb((()=>{if(typeof document>"u")return Fb;const e=document.createElement("div");return e.style.position=kb,e.style.position===kb?kb:Fb}));function Eb(e){return e}const Ob=Og((()=>{const e=kg((e=>`Item ${e}`)),t=kg(null),r=kg((e=>`Group ${e}`)),n=kg({}),o=kg(Eb),i=kg("div"),a=kg(ig),s=(e,t=null)=>Fg(wg(n,yg((t=>t[e])),bg()),t);return{components:n,computeItemKey:o,context:t,EmptyPlaceholder:s("EmptyPlaceholder"),FooterComponent:s("Footer"),GroupComponent:s("Group","div"),groupContent:r,HeaderComponent:s("Header"),HeaderFooterTag:i,ItemComponent:s("Item","div"),itemContent:e,ListComponent:s("List","div"),ScrollerComponent:s("Scroller","div"),scrollerRef:a,ScrollSeekPlaceholder:s("ScrollSeekPlaceholder"),TopItemListComponent:s("TopItemList")}})),Tb=Og((([e,t])=>({...e,...t})),lg(vb,Ob)),Ib=({height:t})=>e("div",{style:{height:t}}),Mb={overflowAnchor:"none",position:_b(),zIndex:1},Ab={overflowAnchor:"none"},Bb={...Ab,display:"inline-block",height:"100%"},zb=o.memo((function({showTopList:t=!1}){const r=Jb("listState"),n=ev("sizeRanges"),i=Jb("useWindowScroll"),a=Jb("customScrollParent"),s=ev("windowScrollContainerState"),l=ev("scrollContainerState"),d=a||i?s:l,c=Jb("itemContent"),u=Jb("context"),h=Jb("groupContent"),f=Jb("trackItemSizes"),p=Jb("itemSize"),g=Jb("log"),m=ev("gap"),b=Jb("horizontalDirection"),{callbackRef:v}=Pg(n,p,f,t?ig:d,g,m,a,b,Jb("skipAnimationFrameInResizeObserver")),[y,x]=o.useState(0);Xb("deviation",(e=>{y!==e&&x(e)}));const w=Jb("EmptyPlaceholder"),$=Jb("ScrollSeekPlaceholder")||Ib,S=Jb("ListComponent"),D=Jb("ItemComponent"),k=Jb("GroupComponent"),F=Jb("computeItemKey"),_=Jb("isSeeking"),E=Jb("groupIndices").length>0,O=Jb("alignToBottom"),T=Jb("initialItemFinalLocationReached"),I=t?{}:{boxSizing:"border-box",...b?{display:"inline-block",height:"100%",marginLeft:0!==y?y:O?"auto":0,paddingLeft:r.offsetTop,paddingRight:r.offsetBottom,whiteSpace:"nowrap"}:{marginTop:0!==y?y:O?"auto":0,paddingBottom:r.offsetBottom,paddingTop:r.offsetTop},...T?{}:{visibility:"hidden"}};return!t&&0===r.totalCount&&w?e(w,{...Nb(w,u)}):e(S,{...Nb(S,u),"data-testid":t?"virtuoso-top-item-list":"virtuoso-item-list",ref:v,style:I,children:(t?r.topItems:r.items).map((e=>{const t=e.originalIndex,n=F(t+r.firstItemIndex,e.data,u);return _?C($,{...Nb($,u),height:e.size,index:e.index,key:n,type:e.type||"item",..."group"===e.type?{}:{groupIndex:e.groupIndex}}):"group"===e.type?C(k,{...Nb(k,u),"data-index":t,"data-item-index":e.index,"data-known-size":e.size,key:n,style:Mb},h(e.index,u)):C(D,{...Nb(D,u),...Hb(D,e.data),"data-index":t,"data-item-group-index":e.groupIndex,"data-item-index":e.index,"data-known-size":e.size,key:n,style:b?Bb:Ab},E?c(e.index,e.groupIndex,e.data,u):c(e.index,e.data,u))}))})})),jb={height:"100%",outline:"none",overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},Rb={outline:"none",overflowX:"auto",position:"relative"},Lb=e=>({height:"100%",position:"absolute",top:0,width:"100%",...e?{display:"flex",flexDirection:"column"}:{}}),Pb={position:_b(),top:0,width:"100%",zIndex:1};function Nb(e,t){if("string"!=typeof e)return{context:t}}function Hb(e,t){return{item:"string"==typeof e?void 0:t}}const Wb=o.memo((function(){const t=Jb("HeaderComponent"),r=ev("headerHeight"),n=Jb("HeaderFooterTag"),i=Rg(o.useMemo((()=>e=>{r(gm(e,"height"))}),[r]),!0,Jb("skipAnimationFrameInResizeObserver")),a=Jb("context");return t?e(n,{ref:i,children:e(t,{...Nb(t,a)})}):null})),Yb=o.memo((function(){const t=Jb("FooterComponent"),r=ev("footerHeight"),n=Jb("HeaderFooterTag"),i=Rg(o.useMemo((()=>e=>{r(gm(e,"height"))}),[r]),!0,Jb("skipAnimationFrameInResizeObserver")),a=Jb("context");return t?e(n,{ref:i,children:e(t,{...Nb(t,a)})}):null}));function Vb({useEmitter:t,useEmitterValue:r,usePublisher:n}){return o.memo((function({children:o,style:i,...a}){const s=n("scrollContainerState"),l=r("ScrollerComponent"),d=n("smoothScrollTargetReached"),c=r("scrollerRef"),u=r("context"),h=r("horizontalDirection")||!1,{scrollByCallback:f,scrollerRef:p,scrollToCallback:g}=Db(s,d,l,c,void 0,h);return t("scrollTo",g),t("scrollBy",f),e(l,{"data-testid":"virtuoso-scroller","data-virtuoso-scroller":!0,ref:p,style:{...h?Rb:jb,...i},tabIndex:0,...a,...Nb(l,u),children:o})}))}function Ub({useEmitter:t,useEmitterValue:r,usePublisher:n}){return o.memo((function({children:o,style:i,...a}){const s=n("windowScrollContainerState"),l=r("ScrollerComponent"),d=n("smoothScrollTargetReached"),c=r("totalListHeight"),u=r("deviation"),h=r("customScrollParent"),f=r("context"),{scrollByCallback:p,scrollerRef:g,scrollToCallback:m}=Db(s,d,l,ig,h);return Sb((()=>(g.current=h||window,()=>{g.current=null})),[g,h]),t("windowScrollTo",m),t("scrollBy",p),e(l,{"data-virtuoso-scroller":!0,style:{position:"relative",...i,...0!==c?{height:c+u}:{}},...a,...Nb(l,f),children:o})}))}const Kb=({children:t})=>{const r=o.useContext($b),n=ev("viewportHeight"),i=ev("fixedItemHeight"),a=Jb("alignToBottom"),s=Jb("horizontalDirection"),l=Rg(o.useMemo((()=>tg(n,(e=>gm(e,s?"width":"height")))),[n,s]),!0,Jb("skipAnimationFrameInResizeObserver"));return o.useEffect((()=>{r&&(n(r.viewportHeight),i(r.itemHeight))}),[r,n,i]),e("div",{"data-viewport-type":"element",ref:l,style:Lb(a),children:t})},qb=({children:t})=>{const r=o.useContext($b),n=ev("windowViewportRect"),i=ev("fixedItemHeight"),a=Jb("customScrollParent"),s=Hg(n,a,Jb("skipAnimationFrameInResizeObserver")),l=Jb("alignToBottom");return o.useEffect((()=>{r&&(i(r.itemHeight),n({offsetTop:0,visibleHeight:r.viewportHeight,visibleWidth:100}))}),[r,n,i]),e("div",{"data-viewport-type":"window",ref:s,style:Lb(l),children:t})},Zb=({children:t})=>{const r=Jb("TopItemListComponent")||"div",n=Jb("headerHeight"),o={...Pb,marginTop:`${n}px`},i=Jb("context");return e(r,{style:o,...Nb(r,i),children:t})},Gb=o.memo((function(r){const n=Jb("useWindowScroll"),o=Jb("topItemsIndexes").length>0,i=Jb("customScrollParent"),a=Jb("context"),s=i||n?rv:tv,l=i||n?qb:Kb;return t(s,{...r,...Nb(s,a),children:[o&&e(Zb,{children:e(zb,{showTopList:!0})}),t(l,{children:[e(Wb,{}),e(zb,{}),e(Yb,{})]})]})})),{Component:Qb,useEmitter:Xb,useEmitterValue:Jb,usePublisher:ev}=wb(Tb,{events:{atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",endReached:"endReached",groupIndices:"groupIndices",isScrolling:"isScrolling",itemsRendered:"itemsRendered",rangeChanged:"rangeChanged",startReached:"startReached",totalListHeightChanged:"totalListHeightChanged"},methods:{autoscrollToBottom:"autoscrollToBottom",getState:"getState",scrollBy:"scrollBy",scrollIntoView:"scrollIntoView",scrollTo:"scrollTo",scrollToIndex:"scrollToIndex"},optional:{alignToBottom:"alignToBottom",atBottomThreshold:"atBottomThreshold",atTopThreshold:"atTopThreshold",components:"components",computeItemKey:"computeItemKey",context:"context",customScrollParent:"customScrollParent",data:"data",defaultItemHeight:"defaultItemHeight",firstItemIndex:"firstItemIndex",fixedItemHeight:"fixedItemHeight",followOutput:"followOutput",groupContent:"groupContent",groupCounts:"groupCounts",headerFooterTag:"HeaderFooterTag",horizontalDirection:"horizontalDirection",increaseViewportBy:"increaseViewportBy",initialItemCount:"initialItemCount",initialScrollTop:"initialScrollTop",initialTopMostItemIndex:"initialTopMostItemIndex",itemContent:"itemContent",itemSize:"itemSize",logLevel:"logLevel",overscan:"overscan",restoreStateFrom:"restoreStateFrom",scrollerRef:"scrollerRef",scrollSeekConfiguration:"scrollSeekConfiguration",skipAnimationFrameInResizeObserver:"skipAnimationFrameInResizeObserver",topItemCount:"topItemCount",totalCount:"totalCount",useWindowScroll:"useWindowScroll"},required:{}},Gb),tv=Vb({useEmitter:Xb,useEmitterValue:Jb,usePublisher:ev}),rv=Ub({useEmitter:Xb,useEmitterValue:Jb,usePublisher:ev}),nv=Qb,ov={bottom:0,itemHeight:0,items:[],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},iv={bottom:0,itemHeight:0,items:[{index:0}],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},{ceil:av,floor:sv,max:lv,min:dv,round:cv}=Math;function uv(e,t,r){return Array.from({length:t-e+1}).map(((t,n)=>({data:null===r?null:r[n+e],index:n+e})))}function hv(e,t){return e&&e.width===t.width&&e.height===t.height}function fv(e,t){return e&&e.column===t.column&&e.row===t.row}const pv=Og((([{increaseViewportBy:e,listBoundary:t,overscan:r,visibleRange:n},{footerHeight:o,headerHeight:i,scrollBy:a,scrollContainerState:s,scrollTo:l,scrollTop:d,smoothScrollTargetReached:c,viewportHeight:u},h,f,{didMount:p,propsReady:g},{customScrollParent:m,useWindowScroll:b,windowScrollContainerState:v,windowScrollTo:y,windowViewportRect:x},w])=>{const $=kg(0),C=kg(0),S=kg(ov),D=kg({height:0,width:0}),k=kg({height:0,width:0}),F=_g(),_=_g(),E=kg(0),O=kg(null),T=kg({column:0,row:0}),I=_g(),M=_g(),A=kg(!1),B=kg(0),z=kg(!0),j=kg(!1),R=kg(!1);dg(wg(p,Dg(B),vg((([e,t])=>!!t))),(()=>{cg(z,!1)})),dg(wg(Ig(p,z,k,D,B,j),vg((([e,t,r,n,,o])=>e&&!t&&0!==r.height&&0!==n.height&&!o))),(([,,,,e])=>{cg(j,!0),zm(1,(()=>{cg(F,e)})),pg(wg(d),(()=>{cg(t,[0,0]),cg(z,!0)}))})),fg(wg(M,vg((e=>null!=e&&e.scrollTop>0)),xg(0)),C),dg(wg(p,Dg(M),vg((([,e])=>null!=e))),(([,e])=>{e&&(cg(D,e.viewport),cg(k,e.item),cg(T,e.gap),e.scrollTop>0&&(cg(A,!0),pg(wg(d,Cg(1)),(e=>{cg(A,!1)})),cg(l,{top:e.scrollTop})))})),fg(wg(D,yg((({height:e})=>e))),u),fg(wg(Ig(Mg(D,hv),Mg(k,hv),Mg(T,((e,t)=>e&&e.column===t.column&&e.row===t.row)),Mg(d)),yg((([e,t,r,n])=>({gap:r,item:t,scrollTop:n,viewport:e})))),I),fg(wg(Ig(Mg($),n,Mg(T,fv),Mg(k,hv),Mg(D,hv),Mg(O),Mg(C),Mg(A),Mg(z),Mg(B)),vg((([,,,,,,,e])=>!e)),yg((([e,[t,r],n,o,i,a,s,,l,d])=>{const{column:c,row:u}=n,{height:h,width:f}=o,{width:p}=i;if(0===s&&(0===e||0===p))return ov;if(0===f){const t=jm(d,e);return function(e){return{...iv,items:e}}(uv(t,t+Math.max(s-1,0),a))}const g=gv(p,f,c);let m,b;l?0===t&&0===r&&s>0?(m=0,b=s-1):(m=g*sv((t+u)/(h+u)),b=g*av((r+u)/(h+u))-1,b=dv(e-1,lv(b,g-1)),m=dv(b,lv(0,m))):(m=0,b=-1);const v=uv(m,b,a),{bottom:y,top:x}=mv(i,n,o,v),w=av(e/g);return{bottom:y,itemHeight:h,items:v,itemWidth:f,offsetBottom:w*h+(w-1)*u-y,offsetTop:x,top:x}}))),S),fg(wg(O,vg((e=>null!==e)),yg((e=>e.length))),$),fg(wg(Ig(D,k,S,T),vg((([e,t,{items:r}])=>r.length>0&&0!==t.height&&0!==e.height)),yg((([e,t,{items:r},n])=>{const{bottom:o,top:i}=mv(e,n,t,r);return[i,o]})),bg(um)),t);const L=kg(!1);fg(wg(d,Dg(L),yg((([e,t])=>t||0!==e))),L);const P=Eg(wg(Ig(S,$),vg((([{items:e}])=>e.length>0)),Dg(L),vg((([[e,t],r])=>{const n=e.items[e.items.length-1].index===t-1;return(r||e.bottom>0&&e.itemHeight>0&&0===e.offsetBottom&&e.items.length===t)&&n})),yg((([[,e]])=>e-1)),bg())),N=Eg(wg(Mg(S),vg((({items:e})=>e.length>0&&0===e[0].index)),xg(0),bg())),H=Eg(wg(Mg(S),Dg(A),vg((([{items:e},t])=>e.length>0&&!t)),yg((([{items:e}])=>({endIndex:e[e.length-1].index,startIndex:e[0].index}))),bg(cm),Sg(0)));fg(H,f.scrollSeekRangeChanged),fg(wg(F,Dg(D,k,$,T),yg((([e,t,r,n,o])=>{const i=Am(e),{align:a,behavior:s,offset:l}=i;let d=i.index;"LAST"===d&&(d=n-1),d=lv(0,d,dv(n-1,d));let c=bv(t,o,r,d);return"end"===a?c=cv(c-t.height+r.height):"center"===a&&(c=cv(c-t.height/2+r.height/2)),l&&(c+=l),{behavior:s,top:c}}))),l);const W=Fg(wg(S,yg((e=>e.offsetBottom+e.bottom))),0);return fg(wg(x,yg((e=>({height:e.visibleHeight,width:e.visibleWidth})))),D),{customScrollParent:m,data:O,deviation:E,footerHeight:o,gap:T,headerHeight:i,increaseViewportBy:e,initialItemCount:C,itemDimensions:k,overscan:r,restoreStateFrom:M,scrollBy:a,scrollContainerState:s,scrollHeight:_,scrollTo:l,scrollToIndex:F,scrollTop:d,smoothScrollTargetReached:c,totalCount:$,useWindowScroll:b,viewportDimensions:D,windowScrollContainerState:v,windowScrollTo:y,windowViewportRect:x,...f,gridState:S,horizontalDirection:R,initialTopMostItemIndex:B,totalListHeight:W,...h,endReached:P,propsReady:g,rangeChanged:H,startReached:N,stateChanged:I,stateRestoreInProgress:A,...w}}),lg(Zm,Wg,Wm,db,Im,cb,jg));function gv(e,t,r){return lv(1,sv((e+r)/(sv(t)+r)))}function mv(e,t,r,n){const{height:o}=r;if(void 0===o||0===n.length)return{bottom:0,top:0};const i=bv(e,t,r,n[0].index);return{bottom:bv(e,t,r,n[n.length-1].index)+o,top:i}}function bv(e,t,r,n){const o=gv(e.width,r.width,t.column),i=sv(n/o),a=i*r.height+lv(0,i-1)*t.row;return a>0?a+t.row:a}const vv=Og((()=>{const e=kg((e=>`Item ${e}`)),t=kg({}),r=kg(null),n=kg("virtuoso-grid-item"),o=kg("virtuoso-grid-list"),i=kg(Eb),a=kg("div"),s=kg(ig),l=(e,r=null)=>Fg(wg(t,yg((t=>t[e])),bg()),r),d=kg(!1),c=kg(!1);return fg(Mg(c),d),{components:t,computeItemKey:i,context:r,FooterComponent:l("Footer"),HeaderComponent:l("Header"),headerFooterTag:a,itemClassName:n,ItemComponent:l("Item","div"),itemContent:e,listClassName:o,ListComponent:l("List","div"),readyStateChanged:d,reportReadyState:c,ScrollerComponent:l("Scroller","div"),scrollerRef:s,ScrollSeekPlaceholder:l("ScrollSeekPlaceholder","div")}})),yv=Og((([e,t])=>({...e,...t})),lg(pv,vv)),xv=o.memo((function(){const t=_v("gridState"),r=_v("listClassName"),n=_v("itemClassName"),i=_v("itemContent"),a=_v("computeItemKey"),s=_v("isSeeking"),l=Ev("scrollHeight"),d=_v("ItemComponent"),c=_v("ListComponent"),u=_v("ScrollSeekPlaceholder"),h=_v("context"),f=Ev("itemDimensions"),p=Ev("gap"),g=_v("log"),m=_v("stateRestoreInProgress"),b=Ev("reportReadyState"),v=Rg(o.useMemo((()=>e=>{const t=e.parentElement.parentElement.scrollHeight;l(t);const r=e.firstChild;if(r){const{height:e,width:t}=r.getBoundingClientRect();f({height:e,width:t})}p({column:Iv("column-gap",getComputedStyle(e).columnGap,g),row:Iv("row-gap",getComputedStyle(e).rowGap,g)})}),[l,f,p,g]),!0,!1);return Sb((()=>{t.itemHeight>0&&t.itemWidth>0&&b(!0)}),[t]),m?null:e(c,{className:r,ref:v,...Nb(c,h),"data-testid":"virtuoso-item-list",style:{paddingBottom:t.offsetBottom,paddingTop:t.offsetTop},children:t.items.map((r=>{const o=a(r.index,r.data,h);return s?e(u,{...Nb(u,h),height:t.itemHeight,index:r.index,width:t.itemWidth},o):C(d,{...Nb(d,h),className:n,"data-index":r.index,key:o},i(r.index,r.data,h))}))})})),wv=o.memo((function(){const t=_v("HeaderComponent"),r=Ev("headerHeight"),n=_v("headerFooterTag"),i=Rg(o.useMemo((()=>e=>{r(gm(e,"height"))}),[r]),!0,!1),a=_v("context");return t?e(n,{ref:i,children:e(t,{...Nb(t,a)})}):null})),$v=o.memo((function(){const t=_v("FooterComponent"),r=Ev("footerHeight"),n=_v("headerFooterTag"),i=Rg(o.useMemo((()=>e=>{r(gm(e,"height"))}),[r]),!0,!1),a=_v("context");return t?e(n,{ref:i,children:e(t,{...Nb(t,a)})}):null})),Cv=({children:t})=>{const r=o.useContext(Cb),n=Ev("itemDimensions"),i=Ev("viewportDimensions"),a=Rg(o.useMemo((()=>e=>{i(e.getBoundingClientRect())}),[i]),!0,!1);return o.useEffect((()=>{r&&(i({height:r.viewportHeight,width:r.viewportWidth}),n({height:r.itemHeight,width:r.itemWidth}))}),[r,i,n]),e("div",{ref:a,style:Lb(!1),children:t})},Sv=({children:t})=>{const r=o.useContext(Cb),n=Ev("windowViewportRect"),i=Ev("itemDimensions"),a=_v("customScrollParent"),s=Hg(n,a,!1);return o.useEffect((()=>{r&&(i({height:r.itemHeight,width:r.itemWidth}),n({offsetTop:0,visibleHeight:r.viewportHeight,visibleWidth:r.viewportWidth}))}),[r,n,i]),e("div",{ref:s,style:Lb(!1),children:t})},Dv=o.memo((function({...r}){const n=_v("useWindowScroll"),o=_v("customScrollParent"),i=o||n?Tv:Ov,a=o||n?Sv:Cv,s=_v("context");return e(i,{...r,...Nb(i,s),children:t(a,{children:[e(wv,{}),e(xv,{}),e($v,{})]})})})),{Component:kv,useEmitter:Fv,useEmitterValue:_v,usePublisher:Ev}=wb(yv,{events:{atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",endReached:"endReached",isScrolling:"isScrolling",rangeChanged:"rangeChanged",readyStateChanged:"readyStateChanged",startReached:"startReached",stateChanged:"stateChanged"},methods:{scrollBy:"scrollBy",scrollTo:"scrollTo",scrollToIndex:"scrollToIndex"},optional:{components:"components",computeItemKey:"computeItemKey",context:"context",customScrollParent:"customScrollParent",data:"data",headerFooterTag:"headerFooterTag",increaseViewportBy:"increaseViewportBy",initialItemCount:"initialItemCount",initialTopMostItemIndex:"initialTopMostItemIndex",itemClassName:"itemClassName",itemContent:"itemContent",listClassName:"listClassName",logLevel:"logLevel",overscan:"overscan",restoreStateFrom:"restoreStateFrom",scrollerRef:"scrollerRef",scrollSeekConfiguration:"scrollSeekConfiguration",totalCount:"totalCount",useWindowScroll:"useWindowScroll"}},Dv),Ov=Vb({useEmitter:Fv,useEmitterValue:_v,usePublisher:Ev}),Tv=Ub({useEmitter:Fv,useEmitterValue:_v,usePublisher:Ev});function Iv(e,t,r){return"normal"!==t&&!(null!=t&&t.endsWith("px"))&&r(`${e} was not resolved to pixel value correctly`,t,Bg.WARN),"normal"===t?0:parseInt(null!=t?t:"0",10)}const Mv=o.createContext({focusedIndex:-1,setFocusedIndex:()=>{}}),Av=({children:t})=>{const[r,n]=s(-1);return e(Mv.Provider,{value:{focusedIndex:r,setFocusedIndex:n},children:t})},Bv=k.div`
    border: ${Ji["width-010"]} ${Ji.solid} ${Gi.border};
    border-radius: ${ta.sm};
    background: ${Gi.bg};

    --x-spacing: 0px;
    --available-width: calc(100vw - var(--x-spacing) * 2);

    ${oa.MaxWidth.sm} {
        --x-spacing: ${na["sm-margin"]}px;
        max-height: 15rem;
    }

    ${oa.MaxWidth.xs} {
        --x-spacing: ${na["xs-margin"]}px;
    }

    ${oa.MaxWidth.xxs} {
        --x-spacing: ${na["xxs-margin"]}px;
    }

    max-width: var(--available-width);

    ${e=>e.$customWidth?`width: ${e.$customWidth};`:e.$width?`width: ${e.$width}px; min-width: min(23rem, var(--available-width));`:"min-width: min(23rem, var(--available-width));"}

    max-height: min(27rem, var(--available-height, infinity * 1px));
    overflow: hidden;
    overflow-y: auto;
    ${e=>"small"===e.$variant?Qi["body-md-regular"]:Qi["body-baseline-regular"]}

    &::-webkit-scrollbar {
        width: 14px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: ${Gi["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: ${ta.full};
        background-clip: padding-box;
    }
`,zv=k.div`
    background: transparent;
    padding: ${ea["spacing-8"]};
`,jv=k.ul`
    list-style-type: none;
`,Rv=k.li`
    display: flex;
    align-items: flex-start;
    gap: ${ea["spacing-8"]};
    padding: ${ea["spacing-12"]} ${ea["spacing-8"]};
    cursor: pointer;
    border: none;
    border-radius: ${ta.none};
    outline: none;

    ${e=>e.$disabled?F`
                cursor: not-allowed;
            `:e.$active&&e.$selected?F`
                background: ${Gi["bg-hover"]};
            `:e.$active?F`
                background: ${Gi["bg-hover-subtle"]};
            `:void 0}
`,Lv=k(ge)`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
    color: ${Gi["icon-selected"]};
`,Pv=k.div`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
`,Nv=k(pe)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Gi["icon-selected"]};
`,Hv=k(he)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Gi["icon-primary-subtlest"]};
`,Wv=k(fe)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Gi["icon-disabled-subtle"]};
`,Yv=k.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`,Vv=k(Ed)`
    cursor: pointer;
    overflow: hidden;
    color: ${Gi["text-primary"]};
    font-size: inherit;
`,Uv=k(Vv)`
    ${Qi["body-baseline-semibold"]}
`,Kv=k(Vv)`
    ${Qi["body-md-semibold"]}
    padding: ${ea["spacing-8"]} ${ea["spacing-8"]};
`,qv=k.div`
    width: 100%;
    display: flex;
    padding: ${ea["spacing-12"]} ${ea["spacing-16"]};
    align-items: center;
`,Zv=k(ne)`
    margin-right: ${ea["spacing-4"]};
    color: ${Gi["icon-error"]};
    height: 1em;
    width: 1em;
`,Gv=k(ol)`
    margin-right: ${ea["spacing-8"]};
    color: ${Gi.icon};
`,Qv=k.div`
    ${Ta()}
    color: ${Gi["text-subtle"]};
    padding: 0 ${ea["spacing-16"]} ${ea["spacing-12"]}
        ${ea["spacing-16"]};
`,Xv=k.div`
    background: ${Gi["bg-strong"]};
    border-radius: ${ta.sm};
    display: flex;
    align-items: center;

    ${e=>"small"===e.$variant?Qi["body-md-regular"]:Qi["body-baseline-regular"]}
`,Jv=k.label`
    flex: 1;
    display: flex;
    align-items: center;
    gap: ${ea["spacing-8"]};
    padding: ${e=>"small"===e.$variant?F`
                  ${ea["spacing-8"]} ${ea["spacing-16"]}
              `:F`10px ${ea["spacing-8"]}`};
`,ey=k(_d)`
    flex: 1;
`,ty=k(me)`
    color: ${Gi.icon};
    flex-shrink: 0;
    height: 1em;
    width: 1em;
`,ry=k(Fa)`
    flex-shrink: 0;
    align-self: stretch;
    box-sizing: content-box;
    padding: ${ea["spacing-8"]};
    margin-left: -${ea["spacing-8"]};
    color: ${Gi.icon};
    cursor: pointer;
    font-size: inherit;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`,ny=S(((r,n)=>{var{value:o,variant:i,onClear:a}=r,s=_e(r,["value","variant","onClear"]);return t(Xv,{$variant:i,children:[t(Jv,{$variant:i,children:[e(ty,{"aria-hidden":!0}),e(ey,Object.assign({ref:n,value:o,$variant:i},s))]}),o&&e(ry,{"aria-label":"Clear search",focusOutline:"browser",onClick:a,children:e(M,{"aria-hidden":!0})})]})})),oy=S((({listItems:n,multiSelect:o,maxSelectable:i,selectedItems:l,disableItemFocus:d,itemsLoadState:c="success",itemTruncationType:u="end",itemMaxLines:f=2,labelDisplayType:g="inline",variant:b="default",listboxId:v,matchElementWidth:x=!1,width:w,topScrollItem:$,onSelectItem:C,onSelectAll:S,onDismiss:D,onRetry:k,valueExtractor:F,listExtractor:_,renderListItem:E,renderCustomCallToAction:O,enableSearch:T,hideNoResultsDisplay:I,noResultsDescription:M,customLabels:A,searchPlaceholder:B,searchFunction:z,onSearch:j},R)=>{const{noResultsLabel:L="No results found.",selectAllButtonLabel:P="Select all",clearAllButtonLabel:N="Clear all"}=A||{},H=(null==A?void 0:A.searchPlaceholder)||B||"Search",W=(null==A?void 0:A.noResultsDescription)||M,{focusedIndex:Y,setFocusedIndex:V}=m(Mv),{elementWidth:U,setFloatingRef:K,getFloatingProps:q,styles:Z}=Us(),[G,Q]=s(""),[X,J]=s(null!=n?n:[]),ee=rr(c),te=er(),re=a(null),ne=a(null),oe=a([]),ie=a(null),ae=a(null),se=!!i&&!!l&&(null==l?void 0:l.length)===i,le=e=>{const t=_?_(e):null==e?void 0:e.toString();return"object"==typeof t?{title:t.title,secondaryLabel:t.secondaryLabel}:{title:null!=t?t:""}},de=p((e=>!!Gp(l,(t=>Xp(t,e)))),[l]),ce=Xt((()=>null==z?void 0:z(G))),ue=Xt((()=>null==n?void 0:n.filter((e=>{const{title:t,secondaryLabel:r}=le(e),n=G.trim().toLowerCase();return t.toLowerCase().includes(n)||r&&r.toLowerCase().includes(n)})))),he=p((e=>{var t,r;if(d)return;if(ie.current)return V(-1),void setTimeout((()=>{var e;return null===(e=ie.current)||void 0===e?void 0:e.focus()}),0);const n=null!=X?X:[];if(0===n.length)return;if(void 0!==(null==e?void 0:e.index)){const r=Math.max(0,Math.min(e.index,n.length-1));return null===(t=ae.current)||void 0===t||t.scrollToIndex({index:r,align:"center"}),V(r),void setTimeout((()=>{var e;return null===(e=oe.current[r])||void 0===e?void 0:e.focus()}),0)}const o=(null==e?void 0:e.preferSelected)?n.findIndex((e=>de(e))):-1,i=-1!==o?o:Y>=0&&Y<n.length?Y:0;null===(r=ae.current)||void 0===r||r.scrollToIndex({index:i,align:"center"}),V(i),setTimeout((()=>{var e;return null===(e=oe.current[i])||void 0===e?void 0:e.focus()}),0)}),[de,d,X,Y,V]),fe=(e,t)=>{se&&!de(e)||(V(t),null==C||C(e,(e=>F?F(e):e)(e)))},pe=e=>{const t=e.target.value;Q(t),null==j||j()},ge=()=>{var e;Q(""),null===(e=ie.current)||void 0===e||e.focus(),null==j||j()},me=()=>null==k?void 0:k();Jt("keydown",(e=>{var t,r;switch(e.code){case"ArrowDown":if(e.preventDefault(),Y<X.length-1){const e=Y+1;null===(t=oe.current[e])||void 0===t||t.focus(),V(e)}break;case"ArrowUp":if(e.preventDefault(),Y>0){const e=Y-1;null===(r=oe.current[e])||void 0===r||r.focus(),V(e)}else 0===Y&&ie.current&&(ie.current.focus(),V(-1));break;case"Space":case"Enter":document.activeElement===oe.current[Y]&&(e.preventDefault(),X[Y]&&fe(X[Y],Y))}})),y(R,(()=>({refocus:he})),[he]),h((()=>{var e;if(!$)return void(null===(e=ae.current)||void 0===e||e.scrollTo({top:0}));const t=setTimeout((()=>{if(!n)return;const e=n.indexOf($);ae.current&&-1!==e&&(ae.current.scrollToIndex({index:e}),V(e))}),0);return()=>clearTimeout(t)}),[oe,n,V,$]),h((()=>{d||te&&ee&&"success"===c&&ie.current&&(V(-1),ie.current.focus())}),[te,ee,c,V,d]),h((()=>{var e;J(null!==(e=""===G?n:z?ce():ue())&&void 0!==e?e:[])}),[ce,ue,n,z,G]),h((()=>{var e,t,r;if(te)return;if(d||!n)return;const o=n.findIndex((e=>de(e)));ie.current?(V(-1),setTimeout((()=>{var e;return null===(e=ie.current)||void 0===e?void 0:e.focus()}),200)):Y>0?(null===(e=ae.current)||void 0===e||e.scrollToIndex({index:Y,align:"center"}),setTimeout((()=>{var e;return null===(e=oe.current[Y])||void 0===e?void 0:e.focus()}),200)):-1!==o?(null===(t=ae.current)||void 0===t||t.scrollToIndex({index:o,align:"center"}),V(o),setTimeout((()=>{var e;return null===(e=oe.current[o])||void 0===e?void 0:e.focus()}),200)):(null===(r=ae.current)||void 0===r||r.scrollToIndex({index:0}),V(0),setTimeout((()=>{var e;return null===(e=oe.current[0])||void 0===e?void 0:e.focus()}),200))}),[de,d,Y,n,te,V]);const be=t=>o?e(se&&!t?Wv:t?Nv:Hv,{"aria-hidden":!0}):t?e(Lv,{"aria-hidden":!0}):e(Pv,{}),ve=(t,r)=>{const{title:n,secondaryLabel:o}=le(t);return e(hu,{displayType:g,label:n,maxLines:f,selected:r,disabled:!r&&se,sublabel:o,truncationType:u,variant:b})},ye=(n,i)=>{if(!k||"success"===c){const a=de(n),s=i===Y;return e(Rv,{"aria-selected":a,"aria-multiselectable":o,"aria-disabled":!a&&se,"aria-posinset":i+1,"aria-setsize":null==X?void 0:X.length,"data-testid":"list-item",onClick:()=>fe(n,i),onMouseEnter:()=>(e=>V(e))(i),ref:e=>{oe.current[i]=e},role:"option",tabIndex:s?0:-1,$active:s,$selected:a,$disabled:!a&&se,children:E?E(n,{selected:a}):t(r,{children:[be(a),ve(n,a)]})},((e,t)=>`item_${t}__${F?F(e):e}`)(n,i))}},xe=()=>{if((T||z)&&"success"===c)return e(ny,{ref:ie,onChange:pe,value:G,placeholder:H,"data-testid":"search-input","aria-label":"Enter text to search",onClear:ge,variant:b})},we=()=>{if(l&&o&&X.length>0&&!G&&"success"===c)return e(Yv,{children:e(Kv,{onClick:S,type:"button",$variant:b,children:i||0!==l.length?N:P})})},$e=()=>{if(!I&&(G||!T)&&0===X.length&&"success"===c)return t(r,{children:[t(qv,{"data-testid":"list-no-results",children:[e(Zv,{"data-testid":"no-result-icon"}),L]}),W&&e(Qv,{"data-testid":"no-result-desc",children:W})]})},Ce=()=>{if(k&&"loading"===c)return t(qv,{"data-testid":"list-loading",children:[e(Gv,{}),"Loading..."]})},Se=()=>{if(k&&"fail"===c)return t(qv,{"data-testid":"list-fail",children:[e(Zv,{"data-testid":"load-error-icon"}),"Failed to load. ",e(Uv,{onClick:me,type:"button",$variant:b,children:"Try again."})]})},De=()=>{var t;const r="test"===process.env.NODE_ENV;return e(jv,{role:"listbox",id:v,children:e(nv,Object.assign({ref:ae,style:{height:"100%"},data:X,customScrollParent:null!==(t=re.current)&&void 0!==t?t:void 0,itemContent:(e,t)=>ye(t,e)},r?{initialItemCount:X.length}:{}),r?X.length:void 0)})};return t(Bv,Object.assign({"data-testid":"dropdown-container",ref:et(re,K),style:Z},q(),{$width:x?U:void 0,$customWidth:w,$variant:b,children:[t(zv,{ref:ne,"data-testid":"dropdown-list",children:[xe(),we(),$e(),Ce(),Se(),De()]}),(()=>{if(O)return e("div",{"data-testid":"custom-cta",children:O(D,X)})})()]}))})),iy=k(Ed)`
    display: flex;
    align-items: center;
    gap: ${ea["spacing-8"]};
    width: 100%;
    padding: ${e=>e.$readOnly?`0 ${ea["spacing-16"]}`:ea["spacing-16"]};

    ${e=>"small"===e.$variant?F`
                  ${Qi["body-md-regular"]}
                  height: calc(2.5rem - 2px); // exclude top and bottom borders
              `:F`
                  ${Qi["body-baseline-regular"]}
                  height: calc(3rem - 2px);
              `}

    &:disabled {
        cursor: not-allowed;
    }

    &:focus-visible {
        outline: 2px solid ${Gi["focus-ring"]};
        outline-offset: -2px;
    }
`,ay=k.div`
    display: flex;
    align-items: center;
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${Xi["duration-250"]} ${Xi["ease-default"]};

    svg {
        color: ${Gi.icon};
        height: 1em;
        width: 1em;
    }
`,sy=S(((r,n)=>{var{children:o,disabled:i,expanded:a,listboxId:s,popupRole:l,readOnly:d,variant:c}=r,u=_e(r,["children","disabled","expanded","listboxId","popupRole","readOnly","variant"]);return t(iy,Object.assign({ref:n,type:"button",role:"combobox","aria-expanded":a,"aria-haspopup":l,"aria-controls":a?s:void 0,"data-testid":"selector","aria-disabled":i,"aria-readonly":d,$variant:c,$readOnly:d},u,{children:[o,!d&&e(ay,{$expanded:a,$variant:c,children:e(oe,{"aria-hidden":!0})})]}))}));var ly=Symbol.for("immer-nothing"),dy=Symbol.for("immer-draftable"),cy=Symbol.for("immer-state"),uy="production"!==process.env.NODE_ENV?[function(e){return`The plugin for '${e}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e}()\` when initializing your application.`},function(e){return`produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e}'`},"This object has been frozen and should not be mutated",function(e){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+e},"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.","Immer forbids circular references","The first or second argument to `produce` must be a function","The third argument to `produce` must be a function or undefined","First argument to `createDraft` must be a plain object, an array, or an immerable object","First argument to `finishDraft` must be a draft returned by `createDraft`",function(e){return`'current' expects a draft, got: ${e}`},"Object.defineProperty() cannot be used on an Immer draft","Object.setPrototypeOf() cannot be used on an Immer draft","Immer only supports deleting array indices","Immer only supports setting array indices and the 'length' property",function(e){return`'original' expects a draft, got: ${e}`}]:[];function hy(e,...t){if("production"!==process.env.NODE_ENV){const r=uy[e],n="function"==typeof r?r.apply(null,t):r;throw new Error(`[Immer] ${n}`)}throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var fy=Object.getPrototypeOf;function py(e){return!!e&&!!e[cy]}function gy(e){return!!e&&(by(e)||Array.isArray(e)||!!e[dy]||!!e.constructor?.[dy]||$y(e)||Cy(e))}var my=Object.prototype.constructor.toString();function by(e){if(!e||"object"!=typeof e)return!1;const t=fy(e);if(null===t)return!0;const r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object||"function"==typeof r&&Function.toString.call(r)===my}function vy(e,t){0===yy(e)?Reflect.ownKeys(e).forEach((r=>{t(r,e[r],e)})):e.forEach(((r,n)=>t(n,r,e)))}function yy(e){const t=e[cy];return t?t.type_:Array.isArray(e)?1:$y(e)?2:Cy(e)?3:0}function xy(e,t){return 2===yy(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function wy(e,t,r){const n=yy(e);2===n?e.set(t,r):3===n?e.add(r):e[t]=r}function $y(e){return e instanceof Map}function Cy(e){return e instanceof Set}function Sy(e){return e.copy_||e.base_}function Dy(e,t){if($y(e))return new Map(e);if(Cy(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const r=by(e);if(!0===t||"class_only"===t&&!r){const t=Object.getOwnPropertyDescriptors(e);delete t[cy];let r=Reflect.ownKeys(t);for(let n=0;n<r.length;n++){const o=r[n],i=t[o];!1===i.writable&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(t[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:e[o]})}return Object.create(fy(e),t)}{const t=fy(e);if(null!==t&&r)return{...e};const n=Object.create(t);return Object.assign(n,e)}}function ky(e,t=!1){return _y(e)||py(e)||!gy(e)||(yy(e)>1&&(e.set=e.add=e.clear=e.delete=Fy),Object.freeze(e),t&&Object.entries(e).forEach((([e,t])=>ky(t,!0)))),e}function Fy(){hy(2)}function _y(e){return Object.isFrozen(e)}var Ey,Oy={};function Ty(e){const t=Oy[e];return t||hy(0,e),t}function Iy(){return Ey}function My(e,t){t&&(Ty("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function Ay(e){By(e),e.drafts_.forEach(jy),e.drafts_=null}function By(e){e===Ey&&(Ey=e.parent_)}function zy(e){return Ey={drafts_:[],parent_:Ey,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function jy(e){const t=e[cy];0===t.type_||1===t.type_?t.revoke_():t.revoked_=!0}function Ry(e,t){t.unfinalizedDrafts_=t.drafts_.length;const r=t.drafts_[0];return void 0!==e&&e!==r?(r[cy].modified_&&(Ay(t),hy(4)),gy(e)&&(e=Ly(t,e),t.parent_||Ny(t,e)),t.patches_&&Ty("Patches").generateReplacementPatches_(r[cy].base_,e,t.patches_,t.inversePatches_)):e=Ly(t,r,[]),Ay(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==ly?e:void 0}function Ly(e,t,r){if(_y(t))return t;const n=t[cy];if(!n)return vy(t,((o,i)=>Py(e,n,t,o,i,r))),t;if(n.scope_!==e)return t;if(!n.modified_)return Ny(e,n.base_,!0),n.base_;if(!n.finalized_){n.finalized_=!0,n.scope_.unfinalizedDrafts_--;const t=n.copy_;let o=t,i=!1;3===n.type_&&(o=new Set(t),t.clear(),i=!0),vy(o,((o,a)=>Py(e,n,t,o,a,r,i))),Ny(e,t,!1),r&&e.patches_&&Ty("Patches").generatePatches_(n,r,e.patches_,e.inversePatches_)}return n.copy_}function Py(e,t,r,n,o,i,a){if("production"!==process.env.NODE_ENV&&o===r&&hy(5),py(o)){const a=Ly(e,o,i&&t&&3!==t.type_&&!xy(t.assigned_,n)?i.concat(n):void 0);if(wy(r,n,a),!py(a))return;e.canAutoFreeze_=!1}else a&&r.add(o);if(gy(o)&&!_y(o)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;Ly(e,o),t&&t.scope_.parent_||"symbol"==typeof n||!Object.prototype.propertyIsEnumerable.call(r,n)||Ny(e,o)}}function Ny(e,t,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&ky(t,r)}var Hy={get(e,t){if(t===cy)return e;const r=Sy(e);if(!xy(r,t))return function(e,t,r){const n=Vy(t,r);return n?"value"in n?n.value:n.get?.call(e.draft_):void 0}(e,r,t);const n=r[t];return e.finalized_||!gy(n)?n:n===Yy(e.base_,t)?(Ky(e),e.copy_[t]=qy(n,e)):n},has:(e,t)=>t in Sy(e),ownKeys:e=>Reflect.ownKeys(Sy(e)),set(e,t,r){const n=Vy(Sy(e),t);if(n?.set)return n.set.call(e.draft_,r),!0;if(!e.modified_){const n=Yy(Sy(e),t),o=n?.[cy];if(o&&o.base_===r)return e.copy_[t]=r,e.assigned_[t]=!1,!0;if(function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}(r,n)&&(void 0!==r||xy(e.base_,t)))return!0;Ky(e),Uy(e)}return e.copy_[t]===r&&(void 0!==r||t in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=r,e.assigned_[t]=!0),!0},deleteProperty:(e,t)=>(void 0!==Yy(e.base_,t)||t in e.base_?(e.assigned_[t]=!1,Ky(e),Uy(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0),getOwnPropertyDescriptor(e,t){const r=Sy(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n?{writable:!0,configurable:1!==e.type_||"length"!==t,enumerable:n.enumerable,value:r[t]}:n},defineProperty(){hy(11)},getPrototypeOf:e=>fy(e.base_),setPrototypeOf(){hy(12)}},Wy={};function Yy(e,t){const r=e[cy];return(r?Sy(r):e)[t]}function Vy(e,t){if(!(t in e))return;let r=fy(e);for(;r;){const e=Object.getOwnPropertyDescriptor(r,t);if(e)return e;r=fy(r)}}function Uy(e){e.modified_||(e.modified_=!0,e.parent_&&Uy(e.parent_))}function Ky(e){e.copy_||(e.copy_=Dy(e.base_,e.scope_.immer_.useStrictShallowCopy_))}vy(Hy,((e,t)=>{Wy[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),Wy.deleteProperty=function(e,t){return"production"!==process.env.NODE_ENV&&isNaN(parseInt(t))&&hy(13),Wy.set.call(this,e,t,void 0)},Wy.set=function(e,t,r){return"production"!==process.env.NODE_ENV&&"length"!==t&&isNaN(parseInt(t))&&hy(14),Hy.set.call(this,e[0],t,r,e[0])};function qy(e,t){const r=$y(e)?Ty("MapSet").proxyMap_(e,t):Cy(e)?Ty("MapSet").proxySet_(e,t):function(e,t){const r=Array.isArray(e),n={type_:r?1:0,scope_:t?t.scope_:Iy(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let o=n,i=Hy;r&&(o=[n],i=Wy);const{revoke:a,proxy:s}=Proxy.revocable(o,i);return n.draft_=s,n.revoke_=a,s}(e,t);return(t?t.scope_:Iy()).drafts_.push(r),r}function Zy(e){if(!gy(e)||_y(e))return e;const t=e[cy];let r;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,r=Dy(e,t.scope_.immer_.useStrictShallowCopy_)}else r=Dy(e,!0);return vy(r,((e,t)=>{wy(r,e,Zy(t))})),t&&(t.finalized_=!1),r}var Gy=new class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,t,r)=>{if("function"==typeof e&&"function"!=typeof t){const r=t;t=e;const n=this;return function(e=r,...o){return n.produce(e,(e=>t.call(this,e,...o)))}}let n;if("function"!=typeof t&&hy(6),void 0!==r&&"function"!=typeof r&&hy(7),gy(e)){const o=zy(this),i=qy(e,void 0);let a=!0;try{n=t(i),a=!1}finally{a?Ay(o):By(o)}return My(o,r),Ry(n,o)}if(!e||"object"!=typeof e){if(n=t(e),void 0===n&&(n=e),n===ly&&(n=void 0),this.autoFreeze_&&ky(n,!0),r){const t=[],o=[];Ty("Patches").generateReplacementPatches_(e,n,t,o),r(t,o)}return n}hy(1,e)},this.produceWithPatches=(e,t)=>{if("function"==typeof e)return(t,...r)=>this.produceWithPatches(t,(t=>e(t,...r)));let r,n;const o=this.produce(e,t,((e,t)=>{r=e,n=t}));return[o,r,n]},"boolean"==typeof e?.autoFreeze&&this.setAutoFreeze(e.autoFreeze),"boolean"==typeof e?.useStrictShallowCopy&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){gy(e)||hy(8),py(e)&&(e=function(e){py(e)||hy(10,e);return Zy(e)}(e));const t=zy(this),r=qy(e,void 0);return r[cy].isManual_=!0,By(t),r}finishDraft(e,t){const r=e&&e[cy];r&&r.isManual_||hy(9);const{scope_:n}=r;return My(n,t),Ry(void 0,n)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){const n=t[r];if(0===n.path.length&&"replace"===n.op){e=n.value;break}}r>-1&&(t=t.slice(r+1));const n=Ty("Patches").applyPatches_;return py(e)?n(e,t):this.produce(e,(e=>n(e,t)))}},Qy=Gy.produce;Gy.produceWithPatches.bind(Gy),Gy.setAutoFreeze.bind(Gy),Gy.setUseStrictShallowCopy.bind(Gy),Gy.applyPatches.bind(Gy),Gy.createDraft.bind(Gy),Gy.finishDraft.bind(Gy);var Xy=Yh,Jy=Cf,ex=uh,tx=sr,rx=Kh,nx=ph,ox=Lh,ix=Eh,ax=Object.prototype.hasOwnProperty;var sx=function(e){if(null==e)return!0;if(rx(e)&&(tx(e)||"string"==typeof e||"function"==typeof e.splice||nx(e)||ix(e)||ex(e)))return!e.length;var t=Jy(e);if("[object Map]"==t||"[object Set]"==t)return!e.size;if(ox(e))return!Xy(e).length;for(var r in e)if(ax.call(e,r))return!1;return!0},lx=Te(sx);const dx=(e,t,r)=>{const n=Qy(e,(e=>{for(let n=e.length-1;n>=0;n--){const o=e[n],i=ux(o.keyPath);if(o.checked=t.has(i),o.hasSubItems&&r&&!0!==o.checked){const t=o.subItemIndexes.map((t=>e[t])),r=t.every((e=>!0===e.checked)),n=t.some((e=>!1!==e.checked));r?o.checked=!0:n&&(o.checked="mixed")}}}));return n},cx=(e,t)=>{const[r,...n]=t;if(lx(e)||lx(r))return;const o=e.find((e=>e.key===r));return o&&n.length?cx(o.subItems,n):o},ux=e=>e.join(","),hx=e=>new Set(e.map((e=>e.join(",")))),fx=k.li`
    display: ${e=>e.$visible?"flex":"none"};
`,px=k.div`
    flex: 1;
    display: flex;
    align-items: flex-start;
    gap: ${ea["spacing-8"]};
    padding: ${ea["spacing-12"]} ${ea["spacing-8"]};
    cursor: ${e=>e.$toggleable?"default":"pointer"};
    overflow: hidden; // required for label to truncate properly
    border-radius: ${ta.none};
    outline: none;

    ${e=>e.$active&&F`
            background: ${Gi["bg-hover"]};
        `}
`,gx=k.div`
    height: 1px;
    width: calc((1lh + ${ea["spacing-8"]}) * ${e=>e.$level});
`,mx=k.div`
    width: 1lh;
    height: 1lh;
    color: ${Gi["icon-primary"]};
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
`,bx=k.div`
    width: 1lh;
    height: 1lh;
    margin-right: ${ea["spacing-8"]};
`,vx=k.div`
    flex-shrink: 0;
    height: 1lh;
    width: ${e=>e.$hasNestedSiblings?"1lh":ea["spacing-16"]};

    display: flex;
    justify-content: center;
`,yx=k(ve)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Gi["icon-selected"]};
`,xx=({listItems:n,multiSelect:o=!1,selectedKeyPaths:i,itemsLoadState:l="success",itemTruncationType:d="end",itemMaxLines:c=2,variant:u="default",listboxId:f,matchElementWidth:p=!1,width:g,mode:m="default",selectableCategory:b,onSelectItem:y,onSelectAll:x,onRetry:w,enableSearch:$,hideNoResultsDisplay:C,noResultsDescription:S,customLabels:D,searchPlaceholder:k,onSearch:F})=>{const{noResultsLabel:_="No results found.",selectAllButtonLabel:E="Select all",clearAllButtonLabel:O="Clear all"}=D||{},T=(null==D?void 0:D.searchPlaceholder)||k||"Search",I=(null==D?void 0:D.noResultsDescription)||S,M=o||b,{elementWidth:A,setFloatingRef:B,getFloatingProps:z,styles:j}=Us(),[R,L]=s(""),P=R.toLowerCase().trim(),[N,H]=s(!1),W=a(null),Y=a(null),V=a([]),U=a(null),K=er(),[q,Z]=s([]),[G,Q]=s([]),X=N?G:q,J=v((()=>{let e=0;for(const t of q)t.level>e&&(e=t.level);return e}),[q]),[ee,te]=s(0),[re,ne]=s([]),[oe,ie]=s(0),ae=e=>{const t=e.target.value;L(t),""===t?H(!1):t.trim().length>=3&&H(!0),null==F||F()},se=()=>{var e;L(""),H(!1),null===(e=U.current)||void 0===e||e.focus(),null==F||F()},le=()=>{null==w||w()},de=()=>{if(0===i.size){const e=[],t=[];q.forEach((r=>{r.hasSubItems||(e.push(r.keyPath),t.push(r))})),null==x||x(e,t)}else null==x||x([],[])},ce=Xt(((e,t)=>((e,t,r,n,o)=>{const i=[],a=(e,s)=>{const l=[],d=e.some((e=>{var t;return null===(t=e.subItems)||void 0===t?void 0:t.length}));return e.forEach(((c,u)=>{var h,f;const p=s?s.level+1:0,g=s?[...s.keyPath,c.key]:[c.key],m=ux(g),b={item:c,index:i.length,indexInParent:u,parentSetSize:e.length,keyPath:g,parentIndex:s?s.index:-1,parentKeyPath:s?s.keyPath:[],level:p,visible:0===p||o||(null==s?void 0:s.expanded)||!1,expanded:o,checked:t.has(m),hasSubItems:!!(null===(h=c.subItems)||void 0===h?void 0:h.length),subItemIndexes:[],hasNestedSiblings:d,matched:!!n&&-1!==c.label.toLowerCase().indexOf(n),hasMatchedSubItems:!1};if(l.push(b),i.push(b),null===(f=c.subItems)||void 0===f?void 0:f.length){const e=a(c.subItems,b);if(r&&!0!==b.checked){const t=e.every((e=>!0===e.checked)),r=e.some((e=>!1!==e.checked));t?b.checked=!0:r&&(b.checked="mixed")}b.hasMatchedSubItems=e.some((e=>e.matched||e.hasMatchedSubItems)),b.subItemIndexes=e.map((e=>e.index))}})),l};return a(e,void 0),i})(e,i,o,P,t))),ue=Xt((e=>{return i.size?(t=ce(e,!1),Qy(t,(e=>{const t=e.filter((e=>!0===e.checked));for(const r of t){let t=r.parentIndex;for(;t>=0;){const r=e[t];r.visible=!0,r.expanded=!0;for(const t of r.subItemIndexes)e[t].visible=!0;t=r.parentIndex}}}))):(e=>Qy(e,(e=>{const t=e.findIndex((e=>e.hasSubItems));if(t<0)return;let r=t,n=0;for(let t=r;t<e.length;t++){const o=e[t].keyPath.length;if(o>n)n=o;else if(o<n)break;r=t,e[t].visible=!0,e[t].expanded=!0}for(let t=0;t<e.length;t++){const n=e[t],o=n.keyPath.slice(0,-1),i=e[r].keyPath.slice(0,o.length);Xp(o,i)&&(n.visible=!0)}return e})))(ce(e,!1));var t})),he=Xt((e=>{const t=e=>{const r=[];for(const n of e){if(-1!==n.label.toLowerCase().indexOf(P))r.push(n);else if(n.subItems){const e=t(n.subItems);if(e.length>0){r.push(Object.assign(Object.assign({},n),{subItems:e}));continue}}}return r};return t(e)})),fe=Xt((()=>{Z((e=>dx(e,i,o))),N&&Q((e=>dx(e,i,o)))})),pe=(e,t,r)=>{const n=((e,t,r)=>Qy(e,(e=>{e[t].expanded=r;const n=e[t].keyPath;for(let o=t+1;o<e.length;o++){const t=e[o],i=e[t.parentIndex],a=t.keyPath.slice(0,n.length);if(!Xp(n,a))break;t.visible=r&&i.expanded&&i.visible}})))(X,e,t);te(e),ie(r),N?Q(n):Z(n)};Jt("keydown",(e=>{var t,r;switch(e.code){case"ArrowDown":{e.preventDefault();const r=((e,t,r)=>{for(let n=r;n<e.length;n++)if(t(e[n]))return e[n]})(X,(e=>e.visible),ee+1);r&&(ie((e=>e+1)),te(r.index),null===(t=V.current[r.index])||void 0===t||t.focus());break}case"ArrowUp":{e.preventDefault();const t=((e,t,r)=>{for(let n=r;n>=0;n--)if(t(e[n]))return e[n]})(X,(e=>e.visible),ee-1);t?(ie((e=>e-1)),te(t.index),null===(r=V.current[t.index])||void 0===r||r.focus()):0===oe&&U.current&&(U.current.focus(),ie(-1),te(-1));break}case"ArrowRight":e.preventDefault(),pe(ee,!0,oe);break;case"ArrowLeft":e.preventDefault(),pe(ee,!1,oe);break;case"Space":if(document.activeElement===V.current[ee]){e.preventDefault();const t=X[ee];if(t.hasSubItems&&!M)return;null==y||y(t)}}})),h((()=>{let e=[];"default"===m?e=ue(n):"expand"===m?e=ce(n,!0):"collapse"===m&&(e=ce(n,!1)),Z(e)}),[ce,ue,n,m]),h((()=>{ne(X.filter((e=>e.visible)))}),[N,X]),h((()=>{fe()}),[o,i,fe]),h((()=>{if(N&&R.trim().length>=3){const e=he(n),t=(e=>Qy(e,(e=>{for(const t of e)if(t.matched&&(t.visible=!0),t.hasMatchedSubItems){t.visible=!0,t.expanded=!0;for(const r of t.subItemIndexes)e[r].visible=!0}})))(ce(e,!1));Q(t)}}),[he,ce,n,N,R]),h((()=>{K||(U.current?(te(-1),ie(-1),setTimeout((()=>{var e;return null===(e=U.current)||void 0===e?void 0:e.focus()}),200)):V.current[ee]?setTimeout((()=>{var e;return null===(e=V.current[ee])||void 0===e?void 0:e.focus()}),200):(te(0),ie(0),setTimeout((()=>{var e;return null===(e=V.current[0])||void 0===e?void 0:e.focus()}),200)))}),[ee,oe,K]);const ge=()=>{if($&&"success"===l)return e(ny,{ref:U,onChange:ae,value:R,placeholder:T,"data-testid":"search-input","aria-label":"Enter text to search",onClear:se,variant:u})},me=()=>{if(o&&!N&&q.length>0&&"success"===l)return e(Yv,{children:e(Kv,{onClick:de,type:"button",$variant:u,children:0===i.size?E:O})})},ve=()=>{if(!C&&N&&0===G.length&&"success"===l)return t(r,{children:[t(qv,{"data-testid":"list-no-results",children:[e(Zv,{"data-testid":"no-result-icon"}),_]}),I&&e(Qv,{"data-testid":"no-result-desc",children:I})]})},ye=()=>{if(w&&"loading"===l)return t(qv,{"data-testid":"list-loading",children:[e(xl,{$hasChildren:!0}),"Loading..."]})},xe=()=>{if(w&&"fail"===l)return t(qv,{"data-testid":"list-fail",children:[e(Zv,{"data-testid":"load-error-icon"}),"Failed to load. ",e(Uv,{onClick:le,type:"button",$variant:u,children:"Try again."})]})},we=t=>{if(o)switch(t.checked){case"mixed":return e(yx,{"aria-hidden":!0});case!0:return e(Nv,{"aria-hidden":!0});default:return e(Hv,{"aria-hidden":!0})}if(!t.hasSubItems)return e(vx,{$hasNestedSiblings:t.hasNestedSiblings||0===t.level,children:t.checked&&e(Lv,{"aria-hidden":!0})})},$e=(r,n)=>{const{level:i,visible:a,expanded:s,keyPath:l,checked:u,hasSubItems:h,indexInParent:f,parentSetSize:p}=r,g=r.index,m=oe===n,b=h&&!M;return t(fx,{$visible:a,children:[J>0&&e(gx,{$level:i}),J>0&&!h&&o&&e(bx,{}),t(px,{"aria-checked":u,"aria-selected":!!u,"aria-expanded":h?s:void 0,"aria-level":i+1,"aria-posinset":f+1,"aria-setsize":p,"data-testid":"list-item",onClick:e=>{e.stopPropagation(),b?pe(g,!s,n):((e,t)=>{ie(t),te(e),null==y||y(X[e])})(g,n)},onMouseEnter:()=>((e,t)=>{te(t.index),ie(e)})(n,r),ref:e=>V.current[r.index]=e,role:"treeitem",tabIndex:m?0:-1,$active:m,$toggleable:b,children:[h&&e(mx,{"data-testid":"toggle-category-button",onClick:e=>{e.stopPropagation(),pe(g,!s,n)},$expanded:s,children:e(be,{})}),we(r),e(hu,{bold:h,searchTerm:N?P:void 0,label:r.item.label,selected:!!u,truncationType:d,maxLines:c})]})]},`[${l.join("---")}]`)},Ce=()=>{var t;const r="test"===process.env.NODE_ENV;return e("div",{"aria-multiselectable":o,id:f,ref:Y,role:"tree",children:e(nv,Object.assign({style:{height:"100%"},customScrollParent:null!==(t=W.current)&&void 0!==t?t:void 0,data:re,itemContent:(e,t)=>$e(t,e)},r?{initialItemCount:re.length}:{}),r?re.length:void 0)})};return e(Bv,Object.assign({"data-testid":"dropdown-container",ref:et(W,B),style:j},z(),{$width:p?A:void 0,$variant:u,$customWidth:g,children:t(zv,{"data-testid":"nested-dropdown-list",children:[ge(),me(),ve(),ye(),xe(),Ce()]})}))},wx=k(kd)`
    display: flex;
    align-items: center;

    ${e=>"right"===e.$position?F`
                    flex-direction: row-reverse;
                `:F`
                    flex-direction: row;
                `}
`,$x=k(sy)`
    ${e=>{if(e.$noBorder)return"right"===e.$position?F`
                        padding-right: 0;
                    `:F`
                        padding-left: 0;
                    `}}
`,Cx=k.div`
    flex: 0 0 auto;
`,Sx=k(ou)`
    ${e=>e.readOnly?F`
                padding: 0;
            `:e.$noBorder?"right"===e.$position?F`
                        padding-left: 0;
                    `:F`
                        padding-right: 0;
                    `:"right"===e.$position?F`
                    padding-left: ${ea["spacing-16"]};
                `:F`
                    padding-right: ${ea["spacing-16"]};
                `}
`,Dx=k.div`
    padding: 10px 0; // TODO: confirm vertical spacing
    display: flex;
    align-items: center;
    padding: 0;
    background: transparent;
    margin-right: ${ea["spacing-12"]};
    color: ${Gi.text};
`,kx=k.div`
    width: 1px;
    background: ${Gi.border};
    flex-shrink: 0;
    height: 1.25rem;

    ${e=>{if(e.$readOnly)return F`
                display: none;
            `}}

    ${e=>"right"===e.$position?F`
                    margin-left: ${ea["spacing-12"]};
                `:F`
                    margin-right: ${ea["spacing-12"]};
                `}
`,Fx=o.forwardRef(((r,n)=>{var{addon:o,error:i,onChange:l,readOnly:d,disabled:c,className:u,onBlur:f,noBorder:p,"data-testid":g,"aria-labelledby":m,"aria-describedby":b,"aria-invalid":v,"aria-label":y}=r,x=_e(r,["addon","error","onChange","readOnly","disabled","className","onBlur","noBorder","data-testid","aria-labelledby","aria-describedby","aria-invalid","aria-label"]);const{valueExtractor:w,listExtractor:$,enableSearch:C,hideNoResultsDisplay:S,noResultsDescription:D,searchPlaceholder:k,searchFunction:F,onSearch:_,placeholder:E="Select",displayValueExtractor:O,"data-selector-testid":T,options:I,selectedOption:M,onSelectOption:A,optionsLoadState:B,optionTruncationType:z,onRetry:j,onHideOptions:R,onShowOptions:L,dropdownZIndex:P,dropdownRootNode:N,"aria-label":H}=o.attributes,{position:W}=o,[Y,V]=s(M),[U,K]=s(!1),[q,Z]=s(!1),[G]=s((()=>tt.generate())),Q=`${G}-listbox`,X=`${G}-instruction`,J=`${G}-combobox-label`,ee=`${G}-textbox-label`,te=a(null),re=a(null);h((()=>{V(M)}),[M]);const ne=()=>{if(Y)return O?O(Y):w?w(Y):Y.toString()},oe=e=>{e?null==L||L():null==R||R()},ie=(e,t)=>{var r;null===(r=re.current)||void 0===r||r.focus(),V(e),K(!1),oe(!1),null==A||A(e,t)},ae=()=>{U&&(K(!1),oe(!1))},se=()=>{K(!0),oe(!0),Z(!0)},le=e=>{K(!1),oe(!1),"click"!==e&&(Z(!1),null==f||f())},de=()=>{var e;null===(e=re.current)||void 0===e||e.focus(),K(!1),oe(!1)},ce=()=>t("div",{children:[e($x,{ref:re,disabled:c,expanded:U,listboxId:Q,popupRole:"listbox",readOnly:d,"aria-labelledby":Qs(m,J),"aria-describedby":Qs(b,X),"aria-invalid":v,$noBorder:p,$position:W,children:e(Ns,{$disabled:c,children:Y?e(Hs,{children:ne()}):e(Ws,{children:E})})}),e(Zs,{id:X,children:"Press space to open options"})]}),ue=()=>e(oy,{listboxId:Q,listItems:I,onSelectItem:ie,onDismiss:ae,valueExtractor:w,listExtractor:$,enableSearch:C,hideNoResultsDisplay:S,noResultsDescription:D,searchPlaceholder:k,searchFunction:F,onSearch:_,selectedItems:Y?[Y]:[],itemsLoadState:B,itemTruncationType:z,onRetry:j,matchElementWidth:!0});return e(Av,{children:t(wx,{$focused:q,$disabled:c,$readOnly:d,$error:i,$position:W,ref:te,className:u,"data-testid":g,$noBorder:p,tabIndex:-1,onFocus:()=>{q||U||Z(!0)},onBlur:e=>{q&&!U&&te.current&&!te.current.contains(e.relatedTarget)&&(Z(!1),null==f||f())},children:[e(Zs,{"aria-hidden":!0,id:J,children:H}),e(Cx,{"data-testid":T,children:d?Y?e(Dx,{"data-testid":"selector-label",tabIndex:0,role:"combobox","aria-haspopup":"listbox","aria-readonly":!0,"aria-expanded":!1,"aria-labelledby":m,"aria-describedby":b,"aria-invalid":v,children:e(Hs,{children:ne()})}):null:e(Ks,{enabled:!d&&!c,isOpen:U,renderElement:ce,renderDropdown:ue,onOpen:se,onClose:le,onDismiss:de,clickToToggle:!0,offset:8,alignment:"right"===W?"right":"left",fitAvailableHeight:!0,customZIndex:P,rootNode:N,positionRef:te})}),e(kx,{$readOnly:d,$position:W}),e(Zs,{"aria-hidden":!0,id:ee,children:y}),e(Sx,Object.assign({ref:n},x,{$position:W,$noBorder:p,readOnly:d,disabled:c,error:i,onChange:e=>{l&&l(e)},"data-testid":"input",styleType:"no-border","aria-labelledby":Qs(m,ee),"aria-describedby":b,"aria-invalid":v}))]})})})),_x=k(kd)`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0
        ${e=>e.$readOnly||e.$noBorder?"0":ea["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,Ex=k(kd)`
    display: flex;
    position: relative;
    width: 100%;
    padding: 0
        ${e=>e.$readOnly||e.$noBorder?"0":ea["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,Ox=k(ou)``,Tx=k.div`
    position: relative;
    display: flex;
    align-items: center;

    ${Qi["body-baseline-regular"]}
    color: ${Gi.text};

    /* SVG Icon */
    svg {
        height: 1em;
        width: 1em;
    }

    ${e=>{if(e.$disabled)return F`
                color: ${Gi["text-subtler"]};
            `}}

    ${e=>"right"===e.$position?F`
                    margin-left: ${e.$readOnly?ea["spacing-4"]:ea["spacing-12"]};
                `:F`
                    margin-right: ${e.$readOnly?ea["spacing-4"]:ea["spacing-12"]};
                `};
`,Ix=o.forwardRef(((r,n)=>{var{addon:o,error:i,className:a}=r,s=_e(r,["addon","error","className"]);const l=()=>e(Ex,{$disabled:s.disabled,$error:i,$readOnly:s.readOnly,"data-testid":s["data-testid"],className:a,$noBorder:s.noBorder,children:e(Ox,Object.assign({ref:n},s,{"data-testid":"input",styleType:"no-border"}))});if(!o)return l();{const{type:r="label",position:d="left"}=o,{allowClear:c}=s;switch(r){case"list":{const t=o.attributes;return t.options&&t.options.length>0?e(Fx,Object.assign({ref:n,addon:o,error:i,className:a,noBorder:s.noBorder},s)):l()}case"custom":{const r=o.attributes;return r.children?t(_x,{$error:i,$disabled:s.disabled,$readOnly:s.readOnly,"data-testid":s["data-testid"],$position:d,className:a,$noBorder:s.noBorder,children:[e(Tx,{"data-testid":"addon",$disabled:s.disabled,$readOnly:s.readOnly,$position:d,children:r.children}),e(Ox,Object.assign({ref:n},s,{allowClear:c&&"right"!==d,error:i,"data-testid":"input",styleType:"no-border"}))]}):l()}default:{const r=o.attributes;return r.value?t(_x,{$disabled:s.disabled,$error:i,$readOnly:s.readOnly,"data-testid":s["data-testid"],$position:d,className:a,$noBorder:s.noBorder,children:[e(Tx,{"data-testid":"addon",$disabled:s.disabled,$readOnly:s.readOnly,$position:d,children:r.value}),e(Ox,Object.assign({ref:n},s,{allowClear:c&&"right"!==d,error:i,"data-testid":"input",styleType:"no-border"}))]}):l()}}}})),Mx=o.forwardRef(((t,r)=>{const{label:n,errorMessage:o,id:i,"data-error-testid":a,"data-testid":l,layoutType:d,mobileCols:c,tabletCols:u,desktopCols:h,xxsCols:f,xsCols:p,smCols:g,mdCols:m,lgCols:b,xlCols:v,xxlCols:y}=t,x=_e(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]),[w]=s((()=>`form-field-${tt.generate()}`)),$=null!=i?i:w;return e(Bs,{id:$,"data-testid":l,label:n,errorMessage:o,"data-error-testid":a,disabled:x.disabled,layoutType:d,mobileCols:c,tabletCols:u,desktopCols:h,xxsCols:f,xsCols:p,smCols:g,mdCols:m,lgCols:b,xlCols:v,xxlCols:y,children:e(Ix,Object.assign({ref:r,id:`${$}-base`,"data-testid":l?`${l}-base`:void 0,"aria-labelledby":`${$}-label`,error:!!o},x))})})),Ax=k(Ix)`
    padding: 0 0 0 ${({readOnly:e})=>e?"0":ea["spacing-16"]};
    input {
        cursor: ${({readOnly:e,$isDisabled:t})=>e&&!t?"pointer":"initial"};
    }
`,Bx=k.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: ${({$isDisabled:e})=>e?"initial":"pointer"};
    color: ${({$isDisabled:e,$inactiveColor:t=Gi.icon,$activeColor:r=Gi["icon-primary"]})=>e?t:r};
    padding: ${ea["spacing-12"]} ${ea["spacing-16"]};

    svg {
        height: 1em;
        width: 1em;
    }
`,zx=k.div`
    display: flex;
    align-items: center;
    height: 3rem;
`,jx=k(Sa.BodyBL)`
    color: ${Gi["text-subtler"]};
`,Rx=k(ol)`
    margin-right: ${ea["spacing-8"]};
    color: ${Gi.icon};
`,Lx=k.span`
    color: ${Gi["text-primary"]};
    text-decoration: underline;
    font-weight: ${Qi.Spec["weight-semibold"]};
`,Px=k.span`
    display: flex;
    align-items: center;
    margin-right: ${ea["spacing-8"]};
`,Nx=k(we)`
    color: ${Gi["icon-warning"]};
    margin-right: ${ea["spacing-8"]};
    height: 1em;
    width: 1em;
`,Hx=k.span`
    color: ${Gi["text-warning"]};
`,Wx=k(Ed)`
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: none;
    background: transparent;
    cursor: pointer;

    ${Qi["body-baseline-regular"]}

    &:hover, &:active, &:focus {
        ${Lx} {
            color: ${Gi["text-hover"]};
        }
    }
`;var Yx,Vx,Ux={exports:{}};
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */Yx=Ux,Vx=Ux.exports,function(){var e,t="Expected a function",r="__lodash_hash_undefined__",n="__lodash_placeholder__",o=16,i=32,a=64,s=128,l=256,d=1/0,c=9007199254740991,u=NaN,h=4294967295,f=[["ary",s],["bind",1],["bindKey",2],["curry",8],["curryRight",o],["flip",512],["partial",i],["partialRight",a],["rearg",l]],p="[object Arguments]",g="[object Array]",m="[object Boolean]",b="[object Date]",v="[object Error]",y="[object Function]",x="[object GeneratorFunction]",w="[object Map]",$="[object Number]",C="[object Object]",S="[object Promise]",D="[object RegExp]",k="[object Set]",F="[object String]",_="[object Symbol]",E="[object WeakMap]",O="[object ArrayBuffer]",T="[object DataView]",I="[object Float32Array]",M="[object Float64Array]",A="[object Int8Array]",B="[object Int16Array]",z="[object Int32Array]",j="[object Uint8Array]",R="[object Uint8ClampedArray]",L="[object Uint16Array]",P="[object Uint32Array]",N=/\b__p \+= '';/g,H=/\b(__p \+=) '' \+/g,W=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Y=/&(?:amp|lt|gt|quot|#39);/g,V=/[&<>"']/g,U=RegExp(Y.source),K=RegExp(V.source),q=/<%-([\s\S]+?)%>/g,Z=/<%([\s\S]+?)%>/g,G=/<%=([\s\S]+?)%>/g,Q=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,X=/^\w*$/,J=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ee=/[\\^$.*+?()[\]{}|]/g,te=RegExp(ee.source),re=/^\s+/,ne=/\s/,oe=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,ie=/\{\n\/\* \[wrapped with (.+)\] \*/,ae=/,? & /,se=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,le=/[()=,{}\[\]\/\s]/,de=/\\(\\)?/g,ce=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,ue=/\w*$/,he=/^[-+]0x[0-9a-f]+$/i,fe=/^0b[01]+$/i,pe=/^\[object .+?Constructor\]$/,ge=/^0o[0-7]+$/i,me=/^(?:0|[1-9]\d*)$/,be=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ve=/($^)/,ye=/['\n\r\u2028\u2029\\]/g,xe="\\ud800-\\udfff",we="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",$e="\\u2700-\\u27bf",Ce="a-z\\xdf-\\xf6\\xf8-\\xff",Se="A-Z\\xc0-\\xd6\\xd8-\\xde",De="\\ufe0e\\ufe0f",ke="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Fe="['’]",_e="["+xe+"]",Ee="["+ke+"]",Te="["+we+"]",Ie="\\d+",Me="["+$e+"]",Ae="["+Ce+"]",Be="[^"+xe+ke+Ie+$e+Ce+Se+"]",ze="\\ud83c[\\udffb-\\udfff]",je="[^"+xe+"]",Re="(?:\\ud83c[\\udde6-\\uddff]){2}",Le="[\\ud800-\\udbff][\\udc00-\\udfff]",Pe="["+Se+"]",Ne="\\u200d",He="(?:"+Ae+"|"+Be+")",We="(?:"+Pe+"|"+Be+")",Ye="(?:['’](?:d|ll|m|re|s|t|ve))?",Ve="(?:['’](?:D|LL|M|RE|S|T|VE))?",Ue="(?:"+Te+"|"+ze+")?",Ke="["+De+"]?",qe=Ke+Ue+"(?:"+Ne+"(?:"+[je,Re,Le].join("|")+")"+Ke+Ue+")*",Ze="(?:"+[Me,Re,Le].join("|")+")"+qe,Ge="(?:"+[je+Te+"?",Te,Re,Le,_e].join("|")+")",Qe=RegExp(Fe,"g"),Xe=RegExp(Te,"g"),Je=RegExp(ze+"(?="+ze+")|"+Ge+qe,"g"),et=RegExp([Pe+"?"+Ae+"+"+Ye+"(?="+[Ee,Pe,"$"].join("|")+")",We+"+"+Ve+"(?="+[Ee,Pe+He,"$"].join("|")+")",Pe+"?"+He+"+"+Ye,Pe+"+"+Ve,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Ie,Ze].join("|"),"g"),tt=RegExp("["+Ne+xe+we+De+"]"),rt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,nt=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],ot=-1,it={};it[I]=it[M]=it[A]=it[B]=it[z]=it[j]=it[R]=it[L]=it[P]=!0,it[p]=it[g]=it[O]=it[m]=it[T]=it[b]=it[v]=it[y]=it[w]=it[$]=it[C]=it[D]=it[k]=it[F]=it[E]=!1;var at={};at[p]=at[g]=at[O]=at[T]=at[m]=at[b]=at[I]=at[M]=at[A]=at[B]=at[z]=at[w]=at[$]=at[C]=at[D]=at[k]=at[F]=at[_]=at[j]=at[R]=at[L]=at[P]=!0,at[v]=at[y]=at[E]=!1;var st={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},lt=parseFloat,dt=parseInt,ct="object"==typeof Oe&&Oe&&Oe.Object===Object&&Oe,ut="object"==typeof self&&self&&self.Object===Object&&self,ht=ct||ut||Function("return this")(),ft=Vx&&!Vx.nodeType&&Vx,pt=ft&&Yx&&!Yx.nodeType&&Yx,gt=pt&&pt.exports===ft,mt=gt&&ct.process,bt=function(){try{var e=pt&&pt.require&&pt.require("util").types;return e||mt&&mt.binding&&mt.binding("util")}catch(e){}}(),vt=bt&&bt.isArrayBuffer,yt=bt&&bt.isDate,xt=bt&&bt.isMap,wt=bt&&bt.isRegExp,$t=bt&&bt.isSet,Ct=bt&&bt.isTypedArray;function St(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}function Dt(e,t,r,n){for(var o=-1,i=null==e?0:e.length;++o<i;){var a=e[o];t(n,a,r(a),e)}return n}function kt(e,t){for(var r=-1,n=null==e?0:e.length;++r<n&&!1!==t(e[r],r,e););return e}function Ft(e,t){for(var r=null==e?0:e.length;r--&&!1!==t(e[r],r,e););return e}function _t(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(!t(e[r],r,e))return!1;return!0}function Et(e,t){for(var r=-1,n=null==e?0:e.length,o=0,i=[];++r<n;){var a=e[r];t(a,r,e)&&(i[o++]=a)}return i}function Ot(e,t){return!(null==e||!e.length)&&Pt(e,t,0)>-1}function Tt(e,t,r){for(var n=-1,o=null==e?0:e.length;++n<o;)if(r(t,e[n]))return!0;return!1}function It(e,t){for(var r=-1,n=null==e?0:e.length,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o}function Mt(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];return e}function At(e,t,r,n){var o=-1,i=null==e?0:e.length;for(n&&i&&(r=e[++o]);++o<i;)r=t(r,e[o],o,e);return r}function Bt(e,t,r,n){var o=null==e?0:e.length;for(n&&o&&(r=e[--o]);o--;)r=t(r,e[o],o,e);return r}function zt(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1}var jt=Yt("length");function Rt(e,t,r){var n;return r(e,(function(e,r,o){if(t(e,r,o))return n=r,!1})),n}function Lt(e,t,r,n){for(var o=e.length,i=r+(n?1:-1);n?i--:++i<o;)if(t(e[i],i,e))return i;return-1}function Pt(e,t,r){return t==t?function(e,t,r){for(var n=r-1,o=e.length;++n<o;)if(e[n]===t)return n;return-1}(e,t,r):Lt(e,Ht,r)}function Nt(e,t,r,n){for(var o=r-1,i=e.length;++o<i;)if(n(e[o],t))return o;return-1}function Ht(e){return e!=e}function Wt(e,t){var r=null==e?0:e.length;return r?Kt(e,t)/r:u}function Yt(t){return function(r){return null==r?e:r[t]}}function Vt(t){return function(r){return null==t?e:t[r]}}function Ut(e,t,r,n,o){return o(e,(function(e,o,i){r=n?(n=!1,e):t(r,e,o,i)})),r}function Kt(t,r){for(var n,o=-1,i=t.length;++o<i;){var a=r(t[o]);a!==e&&(n=n===e?a:n+a)}return n}function qt(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}function Zt(e){return e?e.slice(0,hr(e)+1).replace(re,""):e}function Gt(e){return function(t){return e(t)}}function Qt(e,t){return It(t,(function(t){return e[t]}))}function Xt(e,t){return e.has(t)}function Jt(e,t){for(var r=-1,n=e.length;++r<n&&Pt(t,e[r],0)>-1;);return r}function er(e,t){for(var r=e.length;r--&&Pt(t,e[r],0)>-1;);return r}var tr=Vt({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),rr=Vt({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});function nr(e){return"\\"+st[e]}function or(e){return tt.test(e)}function ir(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r}function ar(e,t){return function(r){return e(t(r))}}function sr(e,t){for(var r=-1,o=e.length,i=0,a=[];++r<o;){var s=e[r];s!==t&&s!==n||(e[r]=n,a[i++]=r)}return a}function lr(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r}function dr(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=[e,e]})),r}function cr(e){return or(e)?function(e){for(var t=Je.lastIndex=0;Je.test(e);)++t;return t}(e):jt(e)}function ur(e){return or(e)?function(e){return e.match(Je)||[]}(e):function(e){return e.split("")}(e)}function hr(e){for(var t=e.length;t--&&ne.test(e.charAt(t)););return t}var fr=Vt({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"}),pr=function ne(xe){var we=(xe=null==xe?ht:pr.defaults(ht.Object(),xe,pr.pick(ht,nt))).Array,$e=xe.Date,Ce=xe.Error,Se=xe.Function,De=xe.Math,ke=xe.Object,Fe=xe.RegExp,_e=xe.String,Ee=xe.TypeError,Oe=we.prototype,Te=Se.prototype,Ie=ke.prototype,Me=xe["__core-js_shared__"],Ae=Te.toString,Be=Ie.hasOwnProperty,ze=0,je=function(){var e=/[^.]+$/.exec(Me&&Me.keys&&Me.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),Re=Ie.toString,Le=Ae.call(ke),Pe=ht._,Ne=Fe("^"+Ae.call(Be).replace(ee,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),He=gt?xe.Buffer:e,We=xe.Symbol,Ye=xe.Uint8Array,Ve=He?He.allocUnsafe:e,Ue=ar(ke.getPrototypeOf,ke),Ke=ke.create,qe=Ie.propertyIsEnumerable,Ze=Oe.splice,Ge=We?We.isConcatSpreadable:e,Je=We?We.iterator:e,tt=We?We.toStringTag:e,st=function(){try{var e=hi(ke,"defineProperty");return e({},"",{}),e}catch(e){}}(),ct=xe.clearTimeout!==ht.clearTimeout&&xe.clearTimeout,ut=$e&&$e.now!==ht.Date.now&&$e.now,ft=xe.setTimeout!==ht.setTimeout&&xe.setTimeout,pt=De.ceil,mt=De.floor,bt=ke.getOwnPropertySymbols,jt=He?He.isBuffer:e,Vt=xe.isFinite,gr=Oe.join,mr=ar(ke.keys,ke),br=De.max,vr=De.min,yr=$e.now,xr=xe.parseInt,wr=De.random,$r=Oe.reverse,Cr=hi(xe,"DataView"),Sr=hi(xe,"Map"),Dr=hi(xe,"Promise"),kr=hi(xe,"Set"),Fr=hi(xe,"WeakMap"),_r=hi(ke,"create"),Er=Fr&&new Fr,Or={},Tr=Ri(Cr),Ir=Ri(Sr),Mr=Ri(Dr),Ar=Ri(kr),Br=Ri(Fr),zr=We?We.prototype:e,jr=zr?zr.valueOf:e,Rr=zr?zr.toString:e;function Lr(e){if(ts(e)&&!Ya(e)&&!(e instanceof Wr)){if(e instanceof Hr)return e;if(Be.call(e,"__wrapped__"))return Li(e)}return new Hr(e)}var Pr=function(){function t(){}return function(r){if(!es(r))return{};if(Ke)return Ke(r);t.prototype=r;var n=new t;return t.prototype=e,n}}();function Nr(){}function Hr(t,r){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!r,this.__index__=0,this.__values__=e}function Wr(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=h,this.__views__=[]}function Yr(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Vr(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Ur(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Kr(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new Ur;++t<r;)this.add(e[t])}function qr(e){var t=this.__data__=new Vr(e);this.size=t.size}function Zr(e,t){var r=Ya(e),n=!r&&Wa(e),o=!r&&!n&&qa(e),i=!r&&!n&&!o&&ds(e),a=r||n||o||i,s=a?qt(e.length,_e):[],l=s.length;for(var d in e)!t&&!Be.call(e,d)||a&&("length"==d||o&&("offset"==d||"parent"==d)||i&&("buffer"==d||"byteLength"==d||"byteOffset"==d)||yi(d,l))||s.push(d);return s}function Gr(t){var r=t.length;return r?t[qn(0,r-1)]:e}function Qr(e,t){return Bi(Oo(e),sn(t,0,e.length))}function Xr(e){return Bi(Oo(e))}function Jr(t,r,n){(n!==e&&!Pa(t[r],n)||n===e&&!(r in t))&&on(t,r,n)}function en(t,r,n){var o=t[r];Be.call(t,r)&&Pa(o,n)&&(n!==e||r in t)||on(t,r,n)}function tn(e,t){for(var r=e.length;r--;)if(Pa(e[r][0],t))return r;return-1}function rn(e,t,r,n){return hn(e,(function(e,o,i){t(n,e,r(e),i)})),n}function nn(e,t){return e&&To(t,Ts(t),e)}function on(e,t,r){"__proto__"==t&&st?st(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}function an(t,r){for(var n=-1,o=r.length,i=we(o),a=null==t;++n<o;)i[n]=a?e:ks(t,r[n]);return i}function sn(t,r,n){return t==t&&(n!==e&&(t=t<=n?t:n),r!==e&&(t=t>=r?t:r)),t}function ln(t,r,n,o,i,a){var s,l=1&r,d=2&r,c=4&r;if(n&&(s=i?n(t,o,i,a):n(t)),s!==e)return s;if(!es(t))return t;var u=Ya(t);if(u){if(s=function(e){var t=e.length,r=new e.constructor(t);return t&&"string"==typeof e[0]&&Be.call(e,"index")&&(r.index=e.index,r.input=e.input),r}(t),!l)return Oo(t,s)}else{var h=gi(t),f=h==y||h==x;if(qa(t))return So(t,l);if(h==C||h==p||f&&!i){if(s=d||f?{}:bi(t),!l)return d?function(e,t){return To(e,pi(e),t)}(t,function(e,t){return e&&To(t,Is(t),e)}(s,t)):function(e,t){return To(e,fi(e),t)}(t,nn(s,t))}else{if(!at[h])return i?t:{};s=function(e,t,r){var n,o=e.constructor;switch(t){case O:return Do(e);case m:case b:return new o(+e);case T:return function(e,t){var r=t?Do(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}(e,r);case I:case M:case A:case B:case z:case j:case R:case L:case P:return ko(e,r);case w:return new o;case $:case F:return new o(e);case D:return function(e){var t=new e.constructor(e.source,ue.exec(e));return t.lastIndex=e.lastIndex,t}(e);case k:return new o;case _:return n=e,jr?ke(jr.call(n)):{}}}(t,h,l)}}a||(a=new qr);var g=a.get(t);if(g)return g;a.set(t,s),as(t)?t.forEach((function(e){s.add(ln(e,r,n,e,t,a))})):rs(t)&&t.forEach((function(e,o){s.set(o,ln(e,r,n,o,t,a))}));var v=u?e:(c?d?ii:oi:d?Is:Ts)(t);return kt(v||t,(function(e,o){v&&(e=t[o=e]),en(s,o,ln(e,r,n,o,t,a))})),s}function dn(t,r,n){var o=n.length;if(null==t)return!o;for(t=ke(t);o--;){var i=n[o],a=r[i],s=t[i];if(s===e&&!(i in t)||!a(s))return!1}return!0}function cn(r,n,o){if("function"!=typeof r)throw new Ee(t);return Ti((function(){r.apply(e,o)}),n)}function un(e,t,r,n){var o=-1,i=Ot,a=!0,s=e.length,l=[],d=t.length;if(!s)return l;r&&(t=It(t,Gt(r))),n?(i=Tt,a=!1):t.length>=200&&(i=Xt,a=!1,t=new Kr(t));e:for(;++o<s;){var c=e[o],u=null==r?c:r(c);if(c=n||0!==c?c:0,a&&u==u){for(var h=d;h--;)if(t[h]===u)continue e;l.push(c)}else i(t,u,n)||l.push(c)}return l}Lr.templateSettings={escape:q,evaluate:Z,interpolate:G,variable:"",imports:{_:Lr}},Lr.prototype=Nr.prototype,Lr.prototype.constructor=Lr,Hr.prototype=Pr(Nr.prototype),Hr.prototype.constructor=Hr,Wr.prototype=Pr(Nr.prototype),Wr.prototype.constructor=Wr,Yr.prototype.clear=function(){this.__data__=_r?_r(null):{},this.size=0},Yr.prototype.delete=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Yr.prototype.get=function(t){var n=this.__data__;if(_r){var o=n[t];return o===r?e:o}return Be.call(n,t)?n[t]:e},Yr.prototype.has=function(t){var r=this.__data__;return _r?r[t]!==e:Be.call(r,t)},Yr.prototype.set=function(t,n){var o=this.__data__;return this.size+=this.has(t)?0:1,o[t]=_r&&n===e?r:n,this},Vr.prototype.clear=function(){this.__data__=[],this.size=0},Vr.prototype.delete=function(e){var t=this.__data__,r=tn(t,e);return!(r<0||(r==t.length-1?t.pop():Ze.call(t,r,1),--this.size,0))},Vr.prototype.get=function(t){var r=this.__data__,n=tn(r,t);return n<0?e:r[n][1]},Vr.prototype.has=function(e){return tn(this.__data__,e)>-1},Vr.prototype.set=function(e,t){var r=this.__data__,n=tn(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},Ur.prototype.clear=function(){this.size=0,this.__data__={hash:new Yr,map:new(Sr||Vr),string:new Yr}},Ur.prototype.delete=function(e){var t=ci(this,e).delete(e);return this.size-=t?1:0,t},Ur.prototype.get=function(e){return ci(this,e).get(e)},Ur.prototype.has=function(e){return ci(this,e).has(e)},Ur.prototype.set=function(e,t){var r=ci(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},Kr.prototype.add=Kr.prototype.push=function(e){return this.__data__.set(e,r),this},Kr.prototype.has=function(e){return this.__data__.has(e)},qr.prototype.clear=function(){this.__data__=new Vr,this.size=0},qr.prototype.delete=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r},qr.prototype.get=function(e){return this.__data__.get(e)},qr.prototype.has=function(e){return this.__data__.has(e)},qr.prototype.set=function(e,t){var r=this.__data__;if(r instanceof Vr){var n=r.__data__;if(!Sr||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new Ur(n)}return r.set(e,t),this.size=r.size,this};var hn=Ao(xn),fn=Ao(wn,!0);function pn(e,t){var r=!0;return hn(e,(function(e,n,o){return r=!!t(e,n,o)})),r}function gn(t,r,n){for(var o=-1,i=t.length;++o<i;){var a=t[o],s=r(a);if(null!=s&&(l===e?s==s&&!ls(s):n(s,l)))var l=s,d=a}return d}function mn(e,t){var r=[];return hn(e,(function(e,n,o){t(e,n,o)&&r.push(e)})),r}function bn(e,t,r,n,o){var i=-1,a=e.length;for(r||(r=vi),o||(o=[]);++i<a;){var s=e[i];t>0&&r(s)?t>1?bn(s,t-1,r,n,o):Mt(o,s):n||(o[o.length]=s)}return o}var vn=Bo(),yn=Bo(!0);function xn(e,t){return e&&vn(e,t,Ts)}function wn(e,t){return e&&yn(e,t,Ts)}function $n(e,t){return Et(t,(function(t){return Qa(e[t])}))}function Cn(t,r){for(var n=0,o=(r=xo(r,t)).length;null!=t&&n<o;)t=t[ji(r[n++])];return n&&n==o?t:e}function Sn(e,t,r){var n=t(e);return Ya(e)?n:Mt(n,r(e))}function Dn(t){return null==t?t===e?"[object Undefined]":"[object Null]":tt&&tt in ke(t)?function(t){var r=Be.call(t,tt),n=t[tt];try{t[tt]=e;var o=!0}catch(e){}var i=Re.call(t);return o&&(r?t[tt]=n:delete t[tt]),i}(t):function(e){return Re.call(e)}(t)}function kn(e,t){return e>t}function Fn(e,t){return null!=e&&Be.call(e,t)}function _n(e,t){return null!=e&&t in ke(e)}function En(t,r,n){for(var o=n?Tt:Ot,i=t[0].length,a=t.length,s=a,l=we(a),d=1/0,c=[];s--;){var u=t[s];s&&r&&(u=It(u,Gt(r))),d=vr(u.length,d),l[s]=!n&&(r||i>=120&&u.length>=120)?new Kr(s&&u):e}u=t[0];var h=-1,f=l[0];e:for(;++h<i&&c.length<d;){var p=u[h],g=r?r(p):p;if(p=n||0!==p?p:0,!(f?Xt(f,g):o(c,g,n))){for(s=a;--s;){var m=l[s];if(!(m?Xt(m,g):o(t[s],g,n)))continue e}f&&f.push(g),c.push(p)}}return c}function On(t,r,n){var o=null==(t=_i(t,r=xo(r,t)))?t:t[ji(Gi(r))];return null==o?e:St(o,t,n)}function Tn(e){return ts(e)&&Dn(e)==p}function In(t,r,n,o,i){return t===r||(null==t||null==r||!ts(t)&&!ts(r)?t!=t&&r!=r:function(t,r,n,o,i,a){var s=Ya(t),l=Ya(r),d=s?g:gi(t),c=l?g:gi(r),u=(d=d==p?C:d)==C,h=(c=c==p?C:c)==C,f=d==c;if(f&&qa(t)){if(!qa(r))return!1;s=!0,u=!1}if(f&&!u)return a||(a=new qr),s||ds(t)?ri(t,r,n,o,i,a):function(e,t,r,n,o,i,a){switch(r){case T:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case O:return!(e.byteLength!=t.byteLength||!i(new Ye(e),new Ye(t)));case m:case b:case $:return Pa(+e,+t);case v:return e.name==t.name&&e.message==t.message;case D:case F:return e==t+"";case w:var s=ir;case k:var l=1&n;if(s||(s=lr),e.size!=t.size&&!l)return!1;var d=a.get(e);if(d)return d==t;n|=2,a.set(e,t);var c=ri(s(e),s(t),n,o,i,a);return a.delete(e),c;case _:if(jr)return jr.call(e)==jr.call(t)}return!1}(t,r,d,n,o,i,a);if(!(1&n)){var y=u&&Be.call(t,"__wrapped__"),x=h&&Be.call(r,"__wrapped__");if(y||x){var S=y?t.value():t,E=x?r.value():r;return a||(a=new qr),i(S,E,n,o,a)}}return!!f&&(a||(a=new qr),function(t,r,n,o,i,a){var s=1&n,l=oi(t),d=l.length,c=oi(r),u=c.length;if(d!=u&&!s)return!1;for(var h=d;h--;){var f=l[h];if(!(s?f in r:Be.call(r,f)))return!1}var p=a.get(t),g=a.get(r);if(p&&g)return p==r&&g==t;var m=!0;a.set(t,r),a.set(r,t);for(var b=s;++h<d;){var v=t[f=l[h]],y=r[f];if(o)var x=s?o(y,v,f,r,t,a):o(v,y,f,t,r,a);if(!(x===e?v===y||i(v,y,n,o,a):x)){m=!1;break}b||(b="constructor"==f)}if(m&&!b){var w=t.constructor,$=r.constructor;w==$||!("constructor"in t)||!("constructor"in r)||"function"==typeof w&&w instanceof w&&"function"==typeof $&&$ instanceof $||(m=!1)}return a.delete(t),a.delete(r),m}(t,r,n,o,i,a))}(t,r,n,o,In,i))}function Mn(t,r,n,o){var i=n.length,a=i,s=!o;if(null==t)return!a;for(t=ke(t);i--;){var l=n[i];if(s&&l[2]?l[1]!==t[l[0]]:!(l[0]in t))return!1}for(;++i<a;){var d=(l=n[i])[0],c=t[d],u=l[1];if(s&&l[2]){if(c===e&&!(d in t))return!1}else{var h=new qr;if(o)var f=o(c,u,d,t,r,h);if(!(f===e?In(u,c,3,o,h):f))return!1}}return!0}function An(e){return!(!es(e)||(t=e,je&&je in t))&&(Qa(e)?Ne:pe).test(Ri(e));var t}function Bn(e){return"function"==typeof e?e:null==e?nl:"object"==typeof e?Ya(e)?Nn(e[0],e[1]):Pn(e):hl(e)}function zn(e){if(!Si(e))return mr(e);var t=[];for(var r in ke(e))Be.call(e,r)&&"constructor"!=r&&t.push(r);return t}function jn(e){if(!es(e))return function(e){var t=[];if(null!=e)for(var r in ke(e))t.push(r);return t}(e);var t=Si(e),r=[];for(var n in e)("constructor"!=n||!t&&Be.call(e,n))&&r.push(n);return r}function Rn(e,t){return e<t}function Ln(e,t){var r=-1,n=Ua(e)?we(e.length):[];return hn(e,(function(e,o,i){n[++r]=t(e,o,i)})),n}function Pn(e){var t=ui(e);return 1==t.length&&t[0][2]?ki(t[0][0],t[0][1]):function(r){return r===e||Mn(r,e,t)}}function Nn(t,r){return wi(t)&&Di(r)?ki(ji(t),r):function(n){var o=ks(n,t);return o===e&&o===r?Fs(n,t):In(r,o,3)}}function Hn(t,r,n,o,i){t!==r&&vn(r,(function(a,s){if(i||(i=new qr),es(a))!function(t,r,n,o,i,a,s){var l=Ei(t,n),d=Ei(r,n),c=s.get(d);if(c)Jr(t,n,c);else{var u=a?a(l,d,n+"",t,r,s):e,h=u===e;if(h){var f=Ya(d),p=!f&&qa(d),g=!f&&!p&&ds(d);u=d,f||p||g?Ya(l)?u=l:Ka(l)?u=Oo(l):p?(h=!1,u=So(d,!0)):g?(h=!1,u=ko(d,!0)):u=[]:os(d)||Wa(d)?(u=l,Wa(l)?u=bs(l):es(l)&&!Qa(l)||(u=bi(d))):h=!1}h&&(s.set(d,u),i(u,d,o,a,s),s.delete(d)),Jr(t,n,u)}}(t,r,s,n,Hn,o,i);else{var l=o?o(Ei(t,s),a,s+"",t,r,i):e;l===e&&(l=a),Jr(t,s,l)}}),Is)}function Wn(t,r){var n=t.length;if(n)return yi(r+=r<0?n:0,n)?t[r]:e}function Yn(e,t,r){t=t.length?It(t,(function(e){return Ya(e)?function(t){return Cn(t,1===e.length?e[0]:e)}:e})):[nl];var n=-1;t=It(t,Gt(di()));var o=Ln(e,(function(e,r,o){var i=It(t,(function(t){return t(e)}));return{criteria:i,index:++n,value:e}}));return function(e,t){var r=e.length;for(e.sort(t);r--;)e[r]=e[r].value;return e}(o,(function(e,t){return function(e,t,r){for(var n=-1,o=e.criteria,i=t.criteria,a=o.length,s=r.length;++n<a;){var l=Fo(o[n],i[n]);if(l)return n>=s?l:l*("desc"==r[n]?-1:1)}return e.index-t.index}(e,t,r)}))}function Vn(e,t,r){for(var n=-1,o=t.length,i={};++n<o;){var a=t[n],s=Cn(e,a);r(s,a)&&Jn(i,xo(a,e),s)}return i}function Un(e,t,r,n){var o=n?Nt:Pt,i=-1,a=t.length,s=e;for(e===t&&(t=Oo(t)),r&&(s=It(e,Gt(r)));++i<a;)for(var l=0,d=t[i],c=r?r(d):d;(l=o(s,c,l,n))>-1;)s!==e&&Ze.call(s,l,1),Ze.call(e,l,1);return e}function Kn(e,t){for(var r=e?t.length:0,n=r-1;r--;){var o=t[r];if(r==n||o!==i){var i=o;yi(o)?Ze.call(e,o,1):ho(e,o)}}return e}function qn(e,t){return e+mt(wr()*(t-e+1))}function Zn(e,t){var r="";if(!e||t<1||t>c)return r;do{t%2&&(r+=e),(t=mt(t/2))&&(e+=e)}while(t);return r}function Gn(e,t){return Ii(Fi(e,t,nl),e+"")}function Qn(e){return Gr(Ps(e))}function Xn(e,t){var r=Ps(e);return Bi(r,sn(t,0,r.length))}function Jn(t,r,n,o){if(!es(t))return t;for(var i=-1,a=(r=xo(r,t)).length,s=a-1,l=t;null!=l&&++i<a;){var d=ji(r[i]),c=n;if("__proto__"===d||"constructor"===d||"prototype"===d)return t;if(i!=s){var u=l[d];(c=o?o(u,d,l):e)===e&&(c=es(u)?u:yi(r[i+1])?[]:{})}en(l,d,c),l=l[d]}return t}var eo=Er?function(e,t){return Er.set(e,t),e}:nl,to=st?function(e,t){return st(e,"toString",{configurable:!0,enumerable:!1,value:el(t),writable:!0})}:nl;function ro(e){return Bi(Ps(e))}function no(e,t,r){var n=-1,o=e.length;t<0&&(t=-t>o?0:o+t),(r=r>o?o:r)<0&&(r+=o),o=t>r?0:r-t>>>0,t>>>=0;for(var i=we(o);++n<o;)i[n]=e[n+t];return i}function oo(e,t){var r;return hn(e,(function(e,n,o){return!(r=t(e,n,o))})),!!r}function io(e,t,r){var n=0,o=null==e?n:e.length;if("number"==typeof t&&t==t&&o<=2147483647){for(;n<o;){var i=n+o>>>1,a=e[i];null!==a&&!ls(a)&&(r?a<=t:a<t)?n=i+1:o=i}return o}return ao(e,t,nl,r)}function ao(t,r,n,o){var i=0,a=null==t?0:t.length;if(0===a)return 0;for(var s=(r=n(r))!=r,l=null===r,d=ls(r),c=r===e;i<a;){var u=mt((i+a)/2),h=n(t[u]),f=h!==e,p=null===h,g=h==h,m=ls(h);if(s)var b=o||g;else b=c?g&&(o||f):l?g&&f&&(o||!p):d?g&&f&&!p&&(o||!m):!p&&!m&&(o?h<=r:h<r);b?i=u+1:a=u}return vr(a,4294967294)}function so(e,t){for(var r=-1,n=e.length,o=0,i=[];++r<n;){var a=e[r],s=t?t(a):a;if(!r||!Pa(s,l)){var l=s;i[o++]=0===a?0:a}}return i}function lo(e){return"number"==typeof e?e:ls(e)?u:+e}function co(e){if("string"==typeof e)return e;if(Ya(e))return It(e,co)+"";if(ls(e))return Rr?Rr.call(e):"";var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function uo(e,t,r){var n=-1,o=Ot,i=e.length,a=!0,s=[],l=s;if(r)a=!1,o=Tt;else if(i>=200){var d=t?null:Go(e);if(d)return lr(d);a=!1,o=Xt,l=new Kr}else l=t?[]:s;e:for(;++n<i;){var c=e[n],u=t?t(c):c;if(c=r||0!==c?c:0,a&&u==u){for(var h=l.length;h--;)if(l[h]===u)continue e;t&&l.push(u),s.push(c)}else o(l,u,r)||(l!==s&&l.push(u),s.push(c))}return s}function ho(e,t){var r=-1,n=(t=xo(t,e)).length;if(!n)return!0;for(var o=null==e||"object"!=typeof e&&"function"!=typeof e;++r<n;){var i=t[r];if("string"==typeof i){if("__proto__"===i&&!Be.call(e,"__proto__"))return!1;if("constructor"===i&&r+1<n&&"string"==typeof t[r+1]&&"prototype"===t[r+1]){if(o&&0===r)continue;return!1}}}var a=_i(e,t);return null==a||delete a[ji(Gi(t))]}function fo(e,t,r,n){return Jn(e,t,r(Cn(e,t)),n)}function po(e,t,r,n){for(var o=e.length,i=n?o:-1;(n?i--:++i<o)&&t(e[i],i,e););return r?no(e,n?0:i,n?i+1:o):no(e,n?i+1:0,n?o:i)}function go(e,t){var r=e;return r instanceof Wr&&(r=r.value()),At(t,(function(e,t){return t.func.apply(t.thisArg,Mt([e],t.args))}),r)}function mo(e,t,r){var n=e.length;if(n<2)return n?uo(e[0]):[];for(var o=-1,i=we(n);++o<n;)for(var a=e[o],s=-1;++s<n;)s!=o&&(i[o]=un(i[o]||a,e[s],t,r));return uo(bn(i,1),t,r)}function bo(t,r,n){for(var o=-1,i=t.length,a=r.length,s={};++o<i;){var l=o<a?r[o]:e;n(s,t[o],l)}return s}function vo(e){return Ka(e)?e:[]}function yo(e){return"function"==typeof e?e:nl}function xo(e,t){return Ya(e)?e:wi(e,t)?[e]:zi(vs(e))}var wo=Gn;function $o(t,r,n){var o=t.length;return n=n===e?o:n,!r&&n>=o?t:no(t,r,n)}var Co=ct||function(e){return ht.clearTimeout(e)};function So(e,t){if(t)return e.slice();var r=e.length,n=Ve?Ve(r):new e.constructor(r);return e.copy(n),n}function Do(e){var t=new e.constructor(e.byteLength);return new Ye(t).set(new Ye(e)),t}function ko(e,t){var r=t?Do(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}function Fo(t,r){if(t!==r){var n=t!==e,o=null===t,i=t==t,a=ls(t),s=r!==e,l=null===r,d=r==r,c=ls(r);if(!l&&!c&&!a&&t>r||a&&s&&d&&!l&&!c||o&&s&&d||!n&&d||!i)return 1;if(!o&&!a&&!c&&t<r||c&&n&&i&&!o&&!a||l&&n&&i||!s&&i||!d)return-1}return 0}function _o(e,t,r,n){for(var o=-1,i=e.length,a=r.length,s=-1,l=t.length,d=br(i-a,0),c=we(l+d),u=!n;++s<l;)c[s]=t[s];for(;++o<a;)(u||o<i)&&(c[r[o]]=e[o]);for(;d--;)c[s++]=e[o++];return c}function Eo(e,t,r,n){for(var o=-1,i=e.length,a=-1,s=r.length,l=-1,d=t.length,c=br(i-s,0),u=we(c+d),h=!n;++o<c;)u[o]=e[o];for(var f=o;++l<d;)u[f+l]=t[l];for(;++a<s;)(h||o<i)&&(u[f+r[a]]=e[o++]);return u}function Oo(e,t){var r=-1,n=e.length;for(t||(t=we(n));++r<n;)t[r]=e[r];return t}function To(t,r,n,o){var i=!n;n||(n={});for(var a=-1,s=r.length;++a<s;){var l=r[a],d=o?o(n[l],t[l],l,n,t):e;d===e&&(d=t[l]),i?on(n,l,d):en(n,l,d)}return n}function Io(e,t){return function(r,n){var o=Ya(r)?Dt:rn,i=t?t():{};return o(r,e,di(n,2),i)}}function Mo(t){return Gn((function(r,n){var o=-1,i=n.length,a=i>1?n[i-1]:e,s=i>2?n[2]:e;for(a=t.length>3&&"function"==typeof a?(i--,a):e,s&&xi(n[0],n[1],s)&&(a=i<3?e:a,i=1),r=ke(r);++o<i;){var l=n[o];l&&t(r,l,o,a)}return r}))}function Ao(e,t){return function(r,n){if(null==r)return r;if(!Ua(r))return e(r,n);for(var o=r.length,i=t?o:-1,a=ke(r);(t?i--:++i<o)&&!1!==n(a[i],i,a););return r}}function Bo(e){return function(t,r,n){for(var o=-1,i=ke(t),a=n(t),s=a.length;s--;){var l=a[e?s:++o];if(!1===r(i[l],l,i))break}return t}}function zo(t){return function(r){var n=or(r=vs(r))?ur(r):e,o=n?n[0]:r.charAt(0),i=n?$o(n,1).join(""):r.slice(1);return o[t]()+i}}function jo(e){return function(t){return At(Qs(Ws(t).replace(Qe,"")),e,"")}}function Ro(e){return function(){var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r=Pr(e.prototype),n=e.apply(r,t);return es(n)?n:r}}function Lo(t){return function(r,n,o){var i=ke(r);if(!Ua(r)){var a=di(n,3);r=Ts(r),n=function(e){return a(i[e],e,i)}}var s=t(r,n,o);return s>-1?i[a?r[s]:s]:e}}function Po(r){return ni((function(n){var o=n.length,i=o,a=Hr.prototype.thru;for(r&&n.reverse();i--;){var s=n[i];if("function"!=typeof s)throw new Ee(t);if(a&&!l&&"wrapper"==si(s))var l=new Hr([],!0)}for(i=l?i:o;++i<o;){var d=si(s=n[i]),c="wrapper"==d?ai(s):e;l=c&&$i(c[0])&&424==c[1]&&!c[4].length&&1==c[9]?l[si(c[0])].apply(l,c[3]):1==s.length&&$i(s)?l[d]():l.thru(s)}return function(){var e=arguments,t=e[0];if(l&&1==e.length&&Ya(t))return l.plant(t).value();for(var r=0,i=o?n[r].apply(this,e):t;++r<o;)i=n[r].call(this,i);return i}}))}function No(t,r,n,o,i,a,l,d,c,u){var h=r&s,f=1&r,p=2&r,g=24&r,m=512&r,b=p?e:Ro(t);return function s(){for(var v=arguments.length,y=we(v),x=v;x--;)y[x]=arguments[x];if(g)var w=li(s),$=function(e,t){for(var r=e.length,n=0;r--;)e[r]===t&&++n;return n}(y,w);if(o&&(y=_o(y,o,i,g)),a&&(y=Eo(y,a,l,g)),v-=$,g&&v<u){var C=sr(y,w);return qo(t,r,No,s.placeholder,n,y,C,d,c,u-v)}var S=f?n:this,D=p?S[t]:t;return v=y.length,d?y=function(t,r){for(var n=t.length,o=vr(r.length,n),i=Oo(t);o--;){var a=r[o];t[o]=yi(a,n)?i[a]:e}return t}(y,d):m&&v>1&&y.reverse(),h&&c<v&&(y.length=c),this&&this!==ht&&this instanceof s&&(D=b||Ro(D)),D.apply(S,y)}}function Ho(e,t){return function(r,n){return function(e,t,r,n){return xn(e,(function(e,o,i){t(n,r(e),o,i)})),n}(r,e,t(n),{})}}function Wo(t,r){return function(n,o){var i;if(n===e&&o===e)return r;if(n!==e&&(i=n),o!==e){if(i===e)return o;"string"==typeof n||"string"==typeof o?(n=co(n),o=co(o)):(n=lo(n),o=lo(o)),i=t(n,o)}return i}}function Yo(e){return ni((function(t){return t=It(t,Gt(di())),Gn((function(r){var n=this;return e(t,(function(e){return St(e,n,r)}))}))}))}function Vo(t,r){var n=(r=r===e?" ":co(r)).length;if(n<2)return n?Zn(r,t):r;var o=Zn(r,pt(t/cr(r)));return or(r)?$o(ur(o),0,t).join(""):o.slice(0,t)}function Uo(t){return function(r,n,o){return o&&"number"!=typeof o&&xi(r,n,o)&&(n=o=e),r=fs(r),n===e?(n=r,r=0):n=fs(n),function(e,t,r,n){for(var o=-1,i=br(pt((t-e)/(r||1)),0),a=we(i);i--;)a[n?i:++o]=e,e+=r;return a}(r,n,o=o===e?r<n?1:-1:fs(o),t)}}function Ko(e){return function(t,r){return"string"==typeof t&&"string"==typeof r||(t=ms(t),r=ms(r)),e(t,r)}}function qo(t,r,n,o,s,l,d,c,u,h){var f=8&r;r|=f?i:a,4&(r&=~(f?a:i))||(r&=-4);var p=[t,r,s,f?l:e,f?d:e,f?e:l,f?e:d,c,u,h],g=n.apply(e,p);return $i(t)&&Oi(g,p),g.placeholder=o,Mi(g,t,r)}function Zo(e){var t=De[e];return function(e,r){if(e=ms(e),(r=null==r?0:vr(ps(r),292))&&Vt(e)){var n=(vs(e)+"e").split("e");return+((n=(vs(t(n[0]+"e"+(+n[1]+r)))+"e").split("e"))[0]+"e"+(+n[1]-r))}return t(e)}}var Go=kr&&1/lr(new kr([,-0]))[1]==d?function(e){return new kr(e)}:ll;function Qo(e){return function(t){var r=gi(t);return r==w?ir(t):r==k?dr(t):function(e,t){return It(t,(function(t){return[t,e[t]]}))}(t,e(t))}}function Xo(r,d,c,u,h,f,p,g){var m=2&d;if(!m&&"function"!=typeof r)throw new Ee(t);var b=u?u.length:0;if(b||(d&=-97,u=h=e),p=p===e?p:br(ps(p),0),g=g===e?g:ps(g),b-=h?h.length:0,d&a){var v=u,y=h;u=h=e}var x=m?e:ai(r),w=[r,d,c,u,h,v,y,f,p,g];if(x&&function(e,t){var r=e[1],o=t[1],i=r|o,a=i<131,d=o==s&&8==r||o==s&&r==l&&e[7].length<=t[8]||384==o&&t[7].length<=t[8]&&8==r;if(!a&&!d)return e;1&o&&(e[2]=t[2],i|=1&r?0:4);var c=t[3];if(c){var u=e[3];e[3]=u?_o(u,c,t[4]):c,e[4]=u?sr(e[3],n):t[4]}(c=t[5])&&(u=e[5],e[5]=u?Eo(u,c,t[6]):c,e[6]=u?sr(e[5],n):t[6]),(c=t[7])&&(e[7]=c),o&s&&(e[8]=null==e[8]?t[8]:vr(e[8],t[8])),null==e[9]&&(e[9]=t[9]),e[0]=t[0],e[1]=i}(w,x),r=w[0],d=w[1],c=w[2],u=w[3],h=w[4],!(g=w[9]=w[9]===e?m?0:r.length:br(w[9]-b,0))&&24&d&&(d&=-25),d&&1!=d)$=8==d||d==o?function(t,r,n){var o=Ro(t);return function i(){for(var a=arguments.length,s=we(a),l=a,d=li(i);l--;)s[l]=arguments[l];var c=a<3&&s[0]!==d&&s[a-1]!==d?[]:sr(s,d);return(a-=c.length)<n?qo(t,r,No,i.placeholder,e,s,c,e,e,n-a):St(this&&this!==ht&&this instanceof i?o:t,this,s)}}(r,d,g):d!=i&&33!=d||h.length?No.apply(e,w):function(e,t,r,n){var o=1&t,i=Ro(e);return function t(){for(var a=-1,s=arguments.length,l=-1,d=n.length,c=we(d+s),u=this&&this!==ht&&this instanceof t?i:e;++l<d;)c[l]=n[l];for(;s--;)c[l++]=arguments[++a];return St(u,o?r:this,c)}}(r,d,c,u);else var $=function(e,t,r){var n=1&t,o=Ro(e);return function t(){return(this&&this!==ht&&this instanceof t?o:e).apply(n?r:this,arguments)}}(r,d,c);return Mi((x?eo:Oi)($,w),r,d)}function Jo(t,r,n,o){return t===e||Pa(t,Ie[n])&&!Be.call(o,n)?r:t}function ei(t,r,n,o,i,a){return es(t)&&es(r)&&(a.set(r,t),Hn(t,r,e,ei,a),a.delete(r)),t}function ti(t){return os(t)?e:t}function ri(t,r,n,o,i,a){var s=1&n,l=t.length,d=r.length;if(l!=d&&!(s&&d>l))return!1;var c=a.get(t),u=a.get(r);if(c&&u)return c==r&&u==t;var h=-1,f=!0,p=2&n?new Kr:e;for(a.set(t,r),a.set(r,t);++h<l;){var g=t[h],m=r[h];if(o)var b=s?o(m,g,h,r,t,a):o(g,m,h,t,r,a);if(b!==e){if(b)continue;f=!1;break}if(p){if(!zt(r,(function(e,t){if(!Xt(p,t)&&(g===e||i(g,e,n,o,a)))return p.push(t)}))){f=!1;break}}else if(g!==m&&!i(g,m,n,o,a)){f=!1;break}}return a.delete(t),a.delete(r),f}function ni(t){return Ii(Fi(t,e,Vi),t+"")}function oi(e){return Sn(e,Ts,fi)}function ii(e){return Sn(e,Is,pi)}var ai=Er?function(e){return Er.get(e)}:ll;function si(e){for(var t=e.name+"",r=Or[t],n=Be.call(Or,t)?r.length:0;n--;){var o=r[n],i=o.func;if(null==i||i==e)return o.name}return t}function li(e){return(Be.call(Lr,"placeholder")?Lr:e).placeholder}function di(){var e=Lr.iteratee||ol;return e=e===ol?Bn:e,arguments.length?e(arguments[0],arguments[1]):e}function ci(e,t){var r,n,o=e.__data__;return("string"==(n=typeof(r=t))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof t?"string":"hash"]:o.map}function ui(e){for(var t=Ts(e),r=t.length;r--;){var n=t[r],o=e[n];t[r]=[n,o,Di(o)]}return t}function hi(t,r){var n=function(t,r){return null==t?e:t[r]}(t,r);return An(n)?n:e}var fi=bt?function(e){return null==e?[]:(e=ke(e),Et(bt(e),(function(t){return qe.call(e,t)})))}:gl,pi=bt?function(e){for(var t=[];e;)Mt(t,fi(e)),e=Ue(e);return t}:gl,gi=Dn;function mi(e,t,r){for(var n=-1,o=(t=xo(t,e)).length,i=!1;++n<o;){var a=ji(t[n]);if(!(i=null!=e&&r(e,a)))break;e=e[a]}return i||++n!=o?i:!!(o=null==e?0:e.length)&&Ja(o)&&yi(a,o)&&(Ya(e)||Wa(e))}function bi(e){return"function"!=typeof e.constructor||Si(e)?{}:Pr(Ue(e))}function vi(e){return Ya(e)||Wa(e)||!!(Ge&&e&&e[Ge])}function yi(e,t){var r=typeof e;return!!(t=null==t?c:t)&&("number"==r||"symbol"!=r&&me.test(e))&&e>-1&&e%1==0&&e<t}function xi(e,t,r){if(!es(r))return!1;var n=typeof t;return!!("number"==n?Ua(r)&&yi(t,r.length):"string"==n&&t in r)&&Pa(r[t],e)}function wi(e,t){if(Ya(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!ls(e))||X.test(e)||!Q.test(e)||null!=t&&e in ke(t)}function $i(e){var t=si(e),r=Lr[t];if("function"!=typeof r||!(t in Wr.prototype))return!1;if(e===r)return!0;var n=ai(r);return!!n&&e===n[0]}(Cr&&gi(new Cr(new ArrayBuffer(1)))!=T||Sr&&gi(new Sr)!=w||Dr&&gi(Dr.resolve())!=S||kr&&gi(new kr)!=k||Fr&&gi(new Fr)!=E)&&(gi=function(t){var r=Dn(t),n=r==C?t.constructor:e,o=n?Ri(n):"";if(o)switch(o){case Tr:return T;case Ir:return w;case Mr:return S;case Ar:return k;case Br:return E}return r});var Ci=Me?Qa:ml;function Si(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Ie)}function Di(e){return e==e&&!es(e)}function ki(t,r){return function(n){return null!=n&&n[t]===r&&(r!==e||t in ke(n))}}function Fi(t,r,n){return r=br(r===e?t.length-1:r,0),function(){for(var e=arguments,o=-1,i=br(e.length-r,0),a=we(i);++o<i;)a[o]=e[r+o];o=-1;for(var s=we(r+1);++o<r;)s[o]=e[o];return s[r]=n(a),St(t,this,s)}}function _i(e,t){return t.length<2?e:Cn(e,no(t,0,-1))}function Ei(e,t){if(("constructor"!==t||"function"!=typeof e[t])&&"__proto__"!=t)return e[t]}var Oi=Ai(eo),Ti=ft||function(e,t){return ht.setTimeout(e,t)},Ii=Ai(to);function Mi(e,t,r){var n=t+"";return Ii(e,function(e,t){var r=t.length;if(!r)return e;var n=r-1;return t[n]=(r>1?"& ":"")+t[n],t=t.join(r>2?", ":" "),e.replace(oe,"{\n/* [wrapped with "+t+"] */\n")}(n,function(e,t){return kt(f,(function(r){var n="_."+r[0];t&r[1]&&!Ot(e,n)&&e.push(n)})),e.sort()}(function(e){var t=e.match(ie);return t?t[1].split(ae):[]}(n),r)))}function Ai(t){var r=0,n=0;return function(){var o=yr(),i=16-(o-n);if(n=o,i>0){if(++r>=800)return arguments[0]}else r=0;return t.apply(e,arguments)}}function Bi(t,r){var n=-1,o=t.length,i=o-1;for(r=r===e?o:r;++n<r;){var a=qn(n,i),s=t[a];t[a]=t[n],t[n]=s}return t.length=r,t}var zi=function(e){var t=Aa(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(J,(function(e,r,n,o){t.push(n?o.replace(de,"$1"):r||e)})),t}));function ji(e){if("string"==typeof e||ls(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function Ri(e){if(null!=e){try{return Ae.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function Li(e){if(e instanceof Wr)return e.clone();var t=new Hr(e.__wrapped__,e.__chain__);return t.__actions__=Oo(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}var Pi=Gn((function(e,t){return Ka(e)?un(e,bn(t,1,Ka,!0)):[]})),Ni=Gn((function(t,r){var n=Gi(r);return Ka(n)&&(n=e),Ka(t)?un(t,bn(r,1,Ka,!0),di(n,2)):[]})),Hi=Gn((function(t,r){var n=Gi(r);return Ka(n)&&(n=e),Ka(t)?un(t,bn(r,1,Ka,!0),e,n):[]}));function Wi(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var o=null==r?0:ps(r);return o<0&&(o=br(n+o,0)),Lt(e,di(t,3),o)}function Yi(t,r,n){var o=null==t?0:t.length;if(!o)return-1;var i=o-1;return n!==e&&(i=ps(n),i=n<0?br(o+i,0):vr(i,o-1)),Lt(t,di(r,3),i,!0)}function Vi(e){return null!=e&&e.length?bn(e,1):[]}function Ui(t){return t&&t.length?t[0]:e}var Ki=Gn((function(e){var t=It(e,vo);return t.length&&t[0]===e[0]?En(t):[]})),qi=Gn((function(t){var r=Gi(t),n=It(t,vo);return r===Gi(n)?r=e:n.pop(),n.length&&n[0]===t[0]?En(n,di(r,2)):[]})),Zi=Gn((function(t){var r=Gi(t),n=It(t,vo);return(r="function"==typeof r?r:e)&&n.pop(),n.length&&n[0]===t[0]?En(n,e,r):[]}));function Gi(t){var r=null==t?0:t.length;return r?t[r-1]:e}var Qi=Gn(Xi);function Xi(e,t){return e&&e.length&&t&&t.length?Un(e,t):e}var Ji=ni((function(e,t){var r=null==e?0:e.length,n=an(e,t);return Kn(e,It(t,(function(e){return yi(e,r)?+e:e})).sort(Fo)),n}));function ea(e){return null==e?e:$r.call(e)}var ta=Gn((function(e){return uo(bn(e,1,Ka,!0))})),ra=Gn((function(t){var r=Gi(t);return Ka(r)&&(r=e),uo(bn(t,1,Ka,!0),di(r,2))})),na=Gn((function(t){var r=Gi(t);return r="function"==typeof r?r:e,uo(bn(t,1,Ka,!0),e,r)}));function oa(e){if(!e||!e.length)return[];var t=0;return e=Et(e,(function(e){if(Ka(e))return t=br(e.length,t),!0})),qt(t,(function(t){return It(e,Yt(t))}))}function ia(t,r){if(!t||!t.length)return[];var n=oa(t);return null==r?n:It(n,(function(t){return St(r,e,t)}))}var aa=Gn((function(e,t){return Ka(e)?un(e,t):[]})),sa=Gn((function(e){return mo(Et(e,Ka))})),la=Gn((function(t){var r=Gi(t);return Ka(r)&&(r=e),mo(Et(t,Ka),di(r,2))})),da=Gn((function(t){var r=Gi(t);return r="function"==typeof r?r:e,mo(Et(t,Ka),e,r)})),ca=Gn(oa),ua=Gn((function(t){var r=t.length,n=r>1?t[r-1]:e;return n="function"==typeof n?(t.pop(),n):e,ia(t,n)}));function ha(e){var t=Lr(e);return t.__chain__=!0,t}function fa(e,t){return t(e)}var pa=ni((function(t){var r=t.length,n=r?t[0]:0,o=this.__wrapped__,i=function(e){return an(e,t)};return!(r>1||this.__actions__.length)&&o instanceof Wr&&yi(n)?((o=o.slice(n,+n+(r?1:0))).__actions__.push({func:fa,args:[i],thisArg:e}),new Hr(o,this.__chain__).thru((function(t){return r&&!t.length&&t.push(e),t}))):this.thru(i)})),ga=Io((function(e,t,r){Be.call(e,r)?++e[r]:on(e,r,1)})),ma=Lo(Wi),ba=Lo(Yi);function va(e,t){return(Ya(e)?kt:hn)(e,di(t,3))}function ya(e,t){return(Ya(e)?Ft:fn)(e,di(t,3))}var xa=Io((function(e,t,r){Be.call(e,r)?e[r].push(t):on(e,r,[t])})),wa=Gn((function(e,t,r){var n=-1,o="function"==typeof t,i=Ua(e)?we(e.length):[];return hn(e,(function(e){i[++n]=o?St(t,e,r):On(e,t,r)})),i})),$a=Io((function(e,t,r){on(e,r,t)}));function Ca(e,t){return(Ya(e)?It:Ln)(e,di(t,3))}var Sa=Io((function(e,t,r){e[r?0:1].push(t)}),(function(){return[[],[]]})),Da=Gn((function(e,t){if(null==e)return[];var r=t.length;return r>1&&xi(e,t[0],t[1])?t=[]:r>2&&xi(t[0],t[1],t[2])&&(t=[t[0]]),Yn(e,bn(t,1),[])})),ka=ut||function(){return ht.Date.now()};function Fa(t,r,n){return r=n?e:r,r=t&&null==r?t.length:r,Xo(t,s,e,e,e,e,r)}function _a(r,n){var o;if("function"!=typeof n)throw new Ee(t);return r=ps(r),function(){return--r>0&&(o=n.apply(this,arguments)),r<=1&&(n=e),o}}var Ea=Gn((function(e,t,r){var n=1;if(r.length){var o=sr(r,li(Ea));n|=i}return Xo(e,n,t,r,o)})),Oa=Gn((function(e,t,r){var n=3;if(r.length){var o=sr(r,li(Oa));n|=i}return Xo(t,n,e,r,o)}));function Ta(r,n,o){var i,a,s,l,d,c,u=0,h=!1,f=!1,p=!0;if("function"!=typeof r)throw new Ee(t);function g(t){var n=i,o=a;return i=a=e,u=t,l=r.apply(o,n)}function m(t){var r=t-c;return c===e||r>=n||r<0||f&&t-u>=s}function b(){var e=ka();if(m(e))return v(e);d=Ti(b,function(e){var t=n-(e-c);return f?vr(t,s-(e-u)):t}(e))}function v(t){return d=e,p&&i?g(t):(i=a=e,l)}function y(){var t=ka(),r=m(t);if(i=arguments,a=this,c=t,r){if(d===e)return function(e){return u=e,d=Ti(b,n),h?g(e):l}(c);if(f)return Co(d),d=Ti(b,n),g(c)}return d===e&&(d=Ti(b,n)),l}return n=ms(n)||0,es(o)&&(h=!!o.leading,s=(f="maxWait"in o)?br(ms(o.maxWait)||0,n):s,p="trailing"in o?!!o.trailing:p),y.cancel=function(){d!==e&&Co(d),u=0,i=c=a=d=e},y.flush=function(){return d===e?l:v(ka())},y}var Ia=Gn((function(e,t){return cn(e,1,t)})),Ma=Gn((function(e,t,r){return cn(e,ms(t)||0,r)}));function Aa(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new Ee(t);var n=function(){var t=arguments,o=r?r.apply(this,t):t[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,t);return n.cache=i.set(o,a)||i,a};return n.cache=new(Aa.Cache||Ur),n}function Ba(e){if("function"!=typeof e)throw new Ee(t);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}Aa.Cache=Ur;var za=wo((function(e,t){var r=(t=1==t.length&&Ya(t[0])?It(t[0],Gt(di())):It(bn(t,1),Gt(di()))).length;return Gn((function(n){for(var o=-1,i=vr(n.length,r);++o<i;)n[o]=t[o].call(this,n[o]);return St(e,this,n)}))})),ja=Gn((function(t,r){var n=sr(r,li(ja));return Xo(t,i,e,r,n)})),Ra=Gn((function(t,r){var n=sr(r,li(Ra));return Xo(t,a,e,r,n)})),La=ni((function(t,r){return Xo(t,l,e,e,e,r)}));function Pa(e,t){return e===t||e!=e&&t!=t}var Na=Ko(kn),Ha=Ko((function(e,t){return e>=t})),Wa=Tn(function(){return arguments}())?Tn:function(e){return ts(e)&&Be.call(e,"callee")&&!qe.call(e,"callee")},Ya=we.isArray,Va=vt?Gt(vt):function(e){return ts(e)&&Dn(e)==O};function Ua(e){return null!=e&&Ja(e.length)&&!Qa(e)}function Ka(e){return ts(e)&&Ua(e)}var qa=jt||ml,Za=yt?Gt(yt):function(e){return ts(e)&&Dn(e)==b};function Ga(e){if(!ts(e))return!1;var t=Dn(e);return t==v||"[object DOMException]"==t||"string"==typeof e.message&&"string"==typeof e.name&&!os(e)}function Qa(e){if(!es(e))return!1;var t=Dn(e);return t==y||t==x||"[object AsyncFunction]"==t||"[object Proxy]"==t}function Xa(e){return"number"==typeof e&&e==ps(e)}function Ja(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=c}function es(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}function ts(e){return null!=e&&"object"==typeof e}var rs=xt?Gt(xt):function(e){return ts(e)&&gi(e)==w};function ns(e){return"number"==typeof e||ts(e)&&Dn(e)==$}function os(e){if(!ts(e)||Dn(e)!=C)return!1;var t=Ue(e);if(null===t)return!0;var r=Be.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&Ae.call(r)==Le}var is=wt?Gt(wt):function(e){return ts(e)&&Dn(e)==D},as=$t?Gt($t):function(e){return ts(e)&&gi(e)==k};function ss(e){return"string"==typeof e||!Ya(e)&&ts(e)&&Dn(e)==F}function ls(e){return"symbol"==typeof e||ts(e)&&Dn(e)==_}var ds=Ct?Gt(Ct):function(e){return ts(e)&&Ja(e.length)&&!!it[Dn(e)]},cs=Ko(Rn),us=Ko((function(e,t){return e<=t}));function hs(e){if(!e)return[];if(Ua(e))return ss(e)?ur(e):Oo(e);if(Je&&e[Je])return function(e){for(var t,r=[];!(t=e.next()).done;)r.push(t.value);return r}(e[Je]());var t=gi(e);return(t==w?ir:t==k?lr:Ps)(e)}function fs(e){return e?(e=ms(e))===d||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}function ps(e){var t=fs(e),r=t%1;return t==t?r?t-r:t:0}function gs(e){return e?sn(ps(e),0,h):0}function ms(e){if("number"==typeof e)return e;if(ls(e))return u;if(es(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=es(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Zt(e);var r=fe.test(e);return r||ge.test(e)?dt(e.slice(2),r?2:8):he.test(e)?u:+e}function bs(e){return To(e,Is(e))}function vs(e){return null==e?"":co(e)}var ys=Mo((function(e,t){if(Si(t)||Ua(t))To(t,Ts(t),e);else for(var r in t)Be.call(t,r)&&en(e,r,t[r])})),xs=Mo((function(e,t){To(t,Is(t),e)})),ws=Mo((function(e,t,r,n){To(t,Is(t),e,n)})),$s=Mo((function(e,t,r,n){To(t,Ts(t),e,n)})),Cs=ni(an),Ss=Gn((function(t,r){t=ke(t);var n=-1,o=r.length,i=o>2?r[2]:e;for(i&&xi(r[0],r[1],i)&&(o=1);++n<o;)for(var a=r[n],s=Is(a),l=-1,d=s.length;++l<d;){var c=s[l],u=t[c];(u===e||Pa(u,Ie[c])&&!Be.call(t,c))&&(t[c]=a[c])}return t})),Ds=Gn((function(t){return t.push(e,ei),St(As,e,t)}));function ks(t,r,n){var o=null==t?e:Cn(t,r);return o===e?n:o}function Fs(e,t){return null!=e&&mi(e,t,_n)}var _s=Ho((function(e,t,r){null!=t&&"function"!=typeof t.toString&&(t=Re.call(t)),e[t]=r}),el(nl)),Es=Ho((function(e,t,r){null!=t&&"function"!=typeof t.toString&&(t=Re.call(t)),Be.call(e,t)?e[t].push(r):e[t]=[r]}),di),Os=Gn(On);function Ts(e){return Ua(e)?Zr(e):zn(e)}function Is(e){return Ua(e)?Zr(e,!0):jn(e)}var Ms=Mo((function(e,t,r){Hn(e,t,r)})),As=Mo((function(e,t,r,n){Hn(e,t,r,n)})),Bs=ni((function(e,t){var r={};if(null==e)return r;var n=!1;t=It(t,(function(t){return t=xo(t,e),n||(n=t.length>1),t})),To(e,ii(e),r),n&&(r=ln(r,7,ti));for(var o=t.length;o--;)ho(r,t[o]);return r})),zs=ni((function(e,t){return null==e?{}:function(e,t){return Vn(e,t,(function(t,r){return Fs(e,r)}))}(e,t)}));function js(e,t){if(null==e)return{};var r=It(ii(e),(function(e){return[e]}));return t=di(t),Vn(e,r,(function(e,r){return t(e,r[0])}))}var Rs=Qo(Ts),Ls=Qo(Is);function Ps(e){return null==e?[]:Qt(e,Ts(e))}var Ns=jo((function(e,t,r){return t=t.toLowerCase(),e+(r?Hs(t):t)}));function Hs(e){return Gs(vs(e).toLowerCase())}function Ws(e){return(e=vs(e))&&e.replace(be,tr).replace(Xe,"")}var Ys=jo((function(e,t,r){return e+(r?"-":"")+t.toLowerCase()})),Vs=jo((function(e,t,r){return e+(r?" ":"")+t.toLowerCase()})),Us=zo("toLowerCase"),Ks=jo((function(e,t,r){return e+(r?"_":"")+t.toLowerCase()})),qs=jo((function(e,t,r){return e+(r?" ":"")+Gs(t)})),Zs=jo((function(e,t,r){return e+(r?" ":"")+t.toUpperCase()})),Gs=zo("toUpperCase");function Qs(t,r,n){return t=vs(t),(r=n?e:r)===e?function(e){return rt.test(e)}(t)?function(e){return e.match(et)||[]}(t):function(e){return e.match(se)||[]}(t):t.match(r)||[]}var Xs=Gn((function(t,r){try{return St(t,e,r)}catch(e){return Ga(e)?e:new Ce(e)}})),Js=ni((function(e,t){return kt(t,(function(t){t=ji(t),on(e,t,Ea(e[t],e))})),e}));function el(e){return function(){return e}}var tl=Po(),rl=Po(!0);function nl(e){return e}function ol(e){return Bn("function"==typeof e?e:ln(e,1))}var il=Gn((function(e,t){return function(r){return On(r,e,t)}})),al=Gn((function(e,t){return function(r){return On(e,r,t)}}));function sl(e,t,r){var n=Ts(t),o=$n(t,n);null!=r||es(t)&&(o.length||!n.length)||(r=t,t=e,e=this,o=$n(t,Ts(t)));var i=!(es(r)&&"chain"in r&&!r.chain),a=Qa(e);return kt(o,(function(r){var n=t[r];e[r]=n,a&&(e.prototype[r]=function(){var t=this.__chain__;if(i||t){var r=e(this.__wrapped__);return(r.__actions__=Oo(this.__actions__)).push({func:n,args:arguments,thisArg:e}),r.__chain__=t,r}return n.apply(e,Mt([this.value()],arguments))})})),e}function ll(){}var dl=Yo(It),cl=Yo(_t),ul=Yo(zt);function hl(e){return wi(e)?Yt(ji(e)):function(e){return function(t){return Cn(t,e)}}(e)}var fl=Uo(),pl=Uo(!0);function gl(){return[]}function ml(){return!1}var bl,vl=Wo((function(e,t){return e+t}),0),yl=Zo("ceil"),xl=Wo((function(e,t){return e/t}),1),wl=Zo("floor"),$l=Wo((function(e,t){return e*t}),1),Cl=Zo("round"),Sl=Wo((function(e,t){return e-t}),0);return Lr.after=function(e,r){if("function"!=typeof r)throw new Ee(t);return e=ps(e),function(){if(--e<1)return r.apply(this,arguments)}},Lr.ary=Fa,Lr.assign=ys,Lr.assignIn=xs,Lr.assignInWith=ws,Lr.assignWith=$s,Lr.at=Cs,Lr.before=_a,Lr.bind=Ea,Lr.bindAll=Js,Lr.bindKey=Oa,Lr.castArray=function(){if(!arguments.length)return[];var e=arguments[0];return Ya(e)?e:[e]},Lr.chain=ha,Lr.chunk=function(t,r,n){r=(n?xi(t,r,n):r===e)?1:br(ps(r),0);var o=null==t?0:t.length;if(!o||r<1)return[];for(var i=0,a=0,s=we(pt(o/r));i<o;)s[a++]=no(t,i,i+=r);return s},Lr.compact=function(e){for(var t=-1,r=null==e?0:e.length,n=0,o=[];++t<r;){var i=e[t];i&&(o[n++]=i)}return o},Lr.concat=function(){var e=arguments.length;if(!e)return[];for(var t=we(e-1),r=arguments[0],n=e;n--;)t[n-1]=arguments[n];return Mt(Ya(r)?Oo(r):[r],bn(t,1))},Lr.cond=function(e){var r=null==e?0:e.length,n=di();return e=r?It(e,(function(e){if("function"!=typeof e[1])throw new Ee(t);return[n(e[0]),e[1]]})):[],Gn((function(t){for(var n=-1;++n<r;){var o=e[n];if(St(o[0],this,t))return St(o[1],this,t)}}))},Lr.conforms=function(e){return function(e){var t=Ts(e);return function(r){return dn(r,e,t)}}(ln(e,1))},Lr.constant=el,Lr.countBy=ga,Lr.create=function(e,t){var r=Pr(e);return null==t?r:nn(r,t)},Lr.curry=function t(r,n,o){var i=Xo(r,8,e,e,e,e,e,n=o?e:n);return i.placeholder=t.placeholder,i},Lr.curryRight=function t(r,n,i){var a=Xo(r,o,e,e,e,e,e,n=i?e:n);return a.placeholder=t.placeholder,a},Lr.debounce=Ta,Lr.defaults=Ss,Lr.defaultsDeep=Ds,Lr.defer=Ia,Lr.delay=Ma,Lr.difference=Pi,Lr.differenceBy=Ni,Lr.differenceWith=Hi,Lr.drop=function(t,r,n){var o=null==t?0:t.length;return o?no(t,(r=n||r===e?1:ps(r))<0?0:r,o):[]},Lr.dropRight=function(t,r,n){var o=null==t?0:t.length;return o?no(t,0,(r=o-(r=n||r===e?1:ps(r)))<0?0:r):[]},Lr.dropRightWhile=function(e,t){return e&&e.length?po(e,di(t,3),!0,!0):[]},Lr.dropWhile=function(e,t){return e&&e.length?po(e,di(t,3),!0):[]},Lr.fill=function(t,r,n,o){var i=null==t?0:t.length;return i?(n&&"number"!=typeof n&&xi(t,r,n)&&(n=0,o=i),function(t,r,n,o){var i=t.length;for((n=ps(n))<0&&(n=-n>i?0:i+n),(o=o===e||o>i?i:ps(o))<0&&(o+=i),o=n>o?0:gs(o);n<o;)t[n++]=r;return t}(t,r,n,o)):[]},Lr.filter=function(e,t){return(Ya(e)?Et:mn)(e,di(t,3))},Lr.flatMap=function(e,t){return bn(Ca(e,t),1)},Lr.flatMapDeep=function(e,t){return bn(Ca(e,t),d)},Lr.flatMapDepth=function(t,r,n){return n=n===e?1:ps(n),bn(Ca(t,r),n)},Lr.flatten=Vi,Lr.flattenDeep=function(e){return null!=e&&e.length?bn(e,d):[]},Lr.flattenDepth=function(t,r){return null!=t&&t.length?bn(t,r=r===e?1:ps(r)):[]},Lr.flip=function(e){return Xo(e,512)},Lr.flow=tl,Lr.flowRight=rl,Lr.fromPairs=function(e){for(var t=-1,r=null==e?0:e.length,n={};++t<r;){var o=e[t];n[o[0]]=o[1]}return n},Lr.functions=function(e){return null==e?[]:$n(e,Ts(e))},Lr.functionsIn=function(e){return null==e?[]:$n(e,Is(e))},Lr.groupBy=xa,Lr.initial=function(e){return null!=e&&e.length?no(e,0,-1):[]},Lr.intersection=Ki,Lr.intersectionBy=qi,Lr.intersectionWith=Zi,Lr.invert=_s,Lr.invertBy=Es,Lr.invokeMap=wa,Lr.iteratee=ol,Lr.keyBy=$a,Lr.keys=Ts,Lr.keysIn=Is,Lr.map=Ca,Lr.mapKeys=function(e,t){var r={};return t=di(t,3),xn(e,(function(e,n,o){on(r,t(e,n,o),e)})),r},Lr.mapValues=function(e,t){var r={};return t=di(t,3),xn(e,(function(e,n,o){on(r,n,t(e,n,o))})),r},Lr.matches=function(e){return Pn(ln(e,1))},Lr.matchesProperty=function(e,t){return Nn(e,ln(t,1))},Lr.memoize=Aa,Lr.merge=Ms,Lr.mergeWith=As,Lr.method=il,Lr.methodOf=al,Lr.mixin=sl,Lr.negate=Ba,Lr.nthArg=function(e){return e=ps(e),Gn((function(t){return Wn(t,e)}))},Lr.omit=Bs,Lr.omitBy=function(e,t){return js(e,Ba(di(t)))},Lr.once=function(e){return _a(2,e)},Lr.orderBy=function(t,r,n,o){return null==t?[]:(Ya(r)||(r=null==r?[]:[r]),Ya(n=o?e:n)||(n=null==n?[]:[n]),Yn(t,r,n))},Lr.over=dl,Lr.overArgs=za,Lr.overEvery=cl,Lr.overSome=ul,Lr.partial=ja,Lr.partialRight=Ra,Lr.partition=Sa,Lr.pick=zs,Lr.pickBy=js,Lr.property=hl,Lr.propertyOf=function(t){return function(r){return null==t?e:Cn(t,r)}},Lr.pull=Qi,Lr.pullAll=Xi,Lr.pullAllBy=function(e,t,r){return e&&e.length&&t&&t.length?Un(e,t,di(r,2)):e},Lr.pullAllWith=function(t,r,n){return t&&t.length&&r&&r.length?Un(t,r,e,n):t},Lr.pullAt=Ji,Lr.range=fl,Lr.rangeRight=pl,Lr.rearg=La,Lr.reject=function(e,t){return(Ya(e)?Et:mn)(e,Ba(di(t,3)))},Lr.remove=function(e,t){var r=[];if(!e||!e.length)return r;var n=-1,o=[],i=e.length;for(t=di(t,3);++n<i;){var a=e[n];t(a,n,e)&&(r.push(a),o.push(n))}return Kn(e,o),r},Lr.rest=function(r,n){if("function"!=typeof r)throw new Ee(t);return Gn(r,n=n===e?n:ps(n))},Lr.reverse=ea,Lr.sampleSize=function(t,r,n){return r=(n?xi(t,r,n):r===e)?1:ps(r),(Ya(t)?Qr:Xn)(t,r)},Lr.set=function(e,t,r){return null==e?e:Jn(e,t,r)},Lr.setWith=function(t,r,n,o){return o="function"==typeof o?o:e,null==t?t:Jn(t,r,n,o)},Lr.shuffle=function(e){return(Ya(e)?Xr:ro)(e)},Lr.slice=function(t,r,n){var o=null==t?0:t.length;return o?(n&&"number"!=typeof n&&xi(t,r,n)?(r=0,n=o):(r=null==r?0:ps(r),n=n===e?o:ps(n)),no(t,r,n)):[]},Lr.sortBy=Da,Lr.sortedUniq=function(e){return e&&e.length?so(e):[]},Lr.sortedUniqBy=function(e,t){return e&&e.length?so(e,di(t,2)):[]},Lr.split=function(t,r,n){return n&&"number"!=typeof n&&xi(t,r,n)&&(r=n=e),(n=n===e?h:n>>>0)?(t=vs(t))&&("string"==typeof r||null!=r&&!is(r))&&!(r=co(r))&&or(t)?$o(ur(t),0,n):t.split(r,n):[]},Lr.spread=function(e,r){if("function"!=typeof e)throw new Ee(t);return r=null==r?0:br(ps(r),0),Gn((function(t){var n=t[r],o=$o(t,0,r);return n&&Mt(o,n),St(e,this,o)}))},Lr.tail=function(e){var t=null==e?0:e.length;return t?no(e,1,t):[]},Lr.take=function(t,r,n){return t&&t.length?no(t,0,(r=n||r===e?1:ps(r))<0?0:r):[]},Lr.takeRight=function(t,r,n){var o=null==t?0:t.length;return o?no(t,(r=o-(r=n||r===e?1:ps(r)))<0?0:r,o):[]},Lr.takeRightWhile=function(e,t){return e&&e.length?po(e,di(t,3),!1,!0):[]},Lr.takeWhile=function(e,t){return e&&e.length?po(e,di(t,3)):[]},Lr.tap=function(e,t){return t(e),e},Lr.throttle=function(e,r,n){var o=!0,i=!0;if("function"!=typeof e)throw new Ee(t);return es(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),Ta(e,r,{leading:o,maxWait:r,trailing:i})},Lr.thru=fa,Lr.toArray=hs,Lr.toPairs=Rs,Lr.toPairsIn=Ls,Lr.toPath=function(e){return Ya(e)?It(e,ji):ls(e)?[e]:Oo(zi(vs(e)))},Lr.toPlainObject=bs,Lr.transform=function(e,t,r){var n=Ya(e),o=n||qa(e)||ds(e);if(t=di(t,4),null==r){var i=e&&e.constructor;r=o?n?new i:[]:es(e)&&Qa(i)?Pr(Ue(e)):{}}return(o?kt:xn)(e,(function(e,n,o){return t(r,e,n,o)})),r},Lr.unary=function(e){return Fa(e,1)},Lr.union=ta,Lr.unionBy=ra,Lr.unionWith=na,Lr.uniq=function(e){return e&&e.length?uo(e):[]},Lr.uniqBy=function(e,t){return e&&e.length?uo(e,di(t,2)):[]},Lr.uniqWith=function(t,r){return r="function"==typeof r?r:e,t&&t.length?uo(t,e,r):[]},Lr.unset=function(e,t){return null==e||ho(e,t)},Lr.unzip=oa,Lr.unzipWith=ia,Lr.update=function(e,t,r){return null==e?e:fo(e,t,yo(r))},Lr.updateWith=function(t,r,n,o){return o="function"==typeof o?o:e,null==t?t:fo(t,r,yo(n),o)},Lr.values=Ps,Lr.valuesIn=function(e){return null==e?[]:Qt(e,Is(e))},Lr.without=aa,Lr.words=Qs,Lr.wrap=function(e,t){return ja(yo(t),e)},Lr.xor=sa,Lr.xorBy=la,Lr.xorWith=da,Lr.zip=ca,Lr.zipObject=function(e,t){return bo(e||[],t||[],en)},Lr.zipObjectDeep=function(e,t){return bo(e||[],t||[],Jn)},Lr.zipWith=ua,Lr.entries=Rs,Lr.entriesIn=Ls,Lr.extend=xs,Lr.extendWith=ws,sl(Lr,Lr),Lr.add=vl,Lr.attempt=Xs,Lr.camelCase=Ns,Lr.capitalize=Hs,Lr.ceil=yl,Lr.clamp=function(t,r,n){return n===e&&(n=r,r=e),n!==e&&(n=(n=ms(n))==n?n:0),r!==e&&(r=(r=ms(r))==r?r:0),sn(ms(t),r,n)},Lr.clone=function(e){return ln(e,4)},Lr.cloneDeep=function(e){return ln(e,5)},Lr.cloneDeepWith=function(t,r){return ln(t,5,r="function"==typeof r?r:e)},Lr.cloneWith=function(t,r){return ln(t,4,r="function"==typeof r?r:e)},Lr.conformsTo=function(e,t){return null==t||dn(e,t,Ts(t))},Lr.deburr=Ws,Lr.defaultTo=function(e,t){return null==e||e!=e?t:e},Lr.divide=xl,Lr.endsWith=function(t,r,n){t=vs(t),r=co(r);var o=t.length,i=n=n===e?o:sn(ps(n),0,o);return(n-=r.length)>=0&&t.slice(n,i)==r},Lr.eq=Pa,Lr.escape=function(e){return(e=vs(e))&&K.test(e)?e.replace(V,rr):e},Lr.escapeRegExp=function(e){return(e=vs(e))&&te.test(e)?e.replace(ee,"\\$&"):e},Lr.every=function(t,r,n){var o=Ya(t)?_t:pn;return n&&xi(t,r,n)&&(r=e),o(t,di(r,3))},Lr.find=ma,Lr.findIndex=Wi,Lr.findKey=function(e,t){return Rt(e,di(t,3),xn)},Lr.findLast=ba,Lr.findLastIndex=Yi,Lr.findLastKey=function(e,t){return Rt(e,di(t,3),wn)},Lr.floor=wl,Lr.forEach=va,Lr.forEachRight=ya,Lr.forIn=function(e,t){return null==e?e:vn(e,di(t,3),Is)},Lr.forInRight=function(e,t){return null==e?e:yn(e,di(t,3),Is)},Lr.forOwn=function(e,t){return e&&xn(e,di(t,3))},Lr.forOwnRight=function(e,t){return e&&wn(e,di(t,3))},Lr.get=ks,Lr.gt=Na,Lr.gte=Ha,Lr.has=function(e,t){return null!=e&&mi(e,t,Fn)},Lr.hasIn=Fs,Lr.head=Ui,Lr.identity=nl,Lr.includes=function(e,t,r,n){e=Ua(e)?e:Ps(e),r=r&&!n?ps(r):0;var o=e.length;return r<0&&(r=br(o+r,0)),ss(e)?r<=o&&e.indexOf(t,r)>-1:!!o&&Pt(e,t,r)>-1},Lr.indexOf=function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var o=null==r?0:ps(r);return o<0&&(o=br(n+o,0)),Pt(e,t,o)},Lr.inRange=function(t,r,n){return r=fs(r),n===e?(n=r,r=0):n=fs(n),function(e,t,r){return e>=vr(t,r)&&e<br(t,r)}(t=ms(t),r,n)},Lr.invoke=Os,Lr.isArguments=Wa,Lr.isArray=Ya,Lr.isArrayBuffer=Va,Lr.isArrayLike=Ua,Lr.isArrayLikeObject=Ka,Lr.isBoolean=function(e){return!0===e||!1===e||ts(e)&&Dn(e)==m},Lr.isBuffer=qa,Lr.isDate=Za,Lr.isElement=function(e){return ts(e)&&1===e.nodeType&&!os(e)},Lr.isEmpty=function(e){if(null==e)return!0;if(Ua(e)&&(Ya(e)||"string"==typeof e||"function"==typeof e.splice||qa(e)||ds(e)||Wa(e)))return!e.length;var t=gi(e);if(t==w||t==k)return!e.size;if(Si(e))return!zn(e).length;for(var r in e)if(Be.call(e,r))return!1;return!0},Lr.isEqual=function(e,t){return In(e,t)},Lr.isEqualWith=function(t,r,n){var o=(n="function"==typeof n?n:e)?n(t,r):e;return o===e?In(t,r,e,n):!!o},Lr.isError=Ga,Lr.isFinite=function(e){return"number"==typeof e&&Vt(e)},Lr.isFunction=Qa,Lr.isInteger=Xa,Lr.isLength=Ja,Lr.isMap=rs,Lr.isMatch=function(e,t){return e===t||Mn(e,t,ui(t))},Lr.isMatchWith=function(t,r,n){return n="function"==typeof n?n:e,Mn(t,r,ui(r),n)},Lr.isNaN=function(e){return ns(e)&&e!=+e},Lr.isNative=function(e){if(Ci(e))throw new Ce("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");return An(e)},Lr.isNil=function(e){return null==e},Lr.isNull=function(e){return null===e},Lr.isNumber=ns,Lr.isObject=es,Lr.isObjectLike=ts,Lr.isPlainObject=os,Lr.isRegExp=is,Lr.isSafeInteger=function(e){return Xa(e)&&e>=-9007199254740991&&e<=c},Lr.isSet=as,Lr.isString=ss,Lr.isSymbol=ls,Lr.isTypedArray=ds,Lr.isUndefined=function(t){return t===e},Lr.isWeakMap=function(e){return ts(e)&&gi(e)==E},Lr.isWeakSet=function(e){return ts(e)&&"[object WeakSet]"==Dn(e)},Lr.join=function(e,t){return null==e?"":gr.call(e,t)},Lr.kebabCase=Ys,Lr.last=Gi,Lr.lastIndexOf=function(t,r,n){var o=null==t?0:t.length;if(!o)return-1;var i=o;return n!==e&&(i=(i=ps(n))<0?br(o+i,0):vr(i,o-1)),r==r?function(e,t,r){for(var n=r+1;n--;)if(e[n]===t)return n;return n}(t,r,i):Lt(t,Ht,i,!0)},Lr.lowerCase=Vs,Lr.lowerFirst=Us,Lr.lt=cs,Lr.lte=us,Lr.max=function(t){return t&&t.length?gn(t,nl,kn):e},Lr.maxBy=function(t,r){return t&&t.length?gn(t,di(r,2),kn):e},Lr.mean=function(e){return Wt(e,nl)},Lr.meanBy=function(e,t){return Wt(e,di(t,2))},Lr.min=function(t){return t&&t.length?gn(t,nl,Rn):e},Lr.minBy=function(t,r){return t&&t.length?gn(t,di(r,2),Rn):e},Lr.stubArray=gl,Lr.stubFalse=ml,Lr.stubObject=function(){return{}},Lr.stubString=function(){return""},Lr.stubTrue=function(){return!0},Lr.multiply=$l,Lr.nth=function(t,r){return t&&t.length?Wn(t,ps(r)):e},Lr.noConflict=function(){return ht._===this&&(ht._=Pe),this},Lr.noop=ll,Lr.now=ka,Lr.pad=function(e,t,r){e=vs(e);var n=(t=ps(t))?cr(e):0;if(!t||n>=t)return e;var o=(t-n)/2;return Vo(mt(o),r)+e+Vo(pt(o),r)},Lr.padEnd=function(e,t,r){e=vs(e);var n=(t=ps(t))?cr(e):0;return t&&n<t?e+Vo(t-n,r):e},Lr.padStart=function(e,t,r){e=vs(e);var n=(t=ps(t))?cr(e):0;return t&&n<t?Vo(t-n,r)+e:e},Lr.parseInt=function(e,t,r){return r||null==t?t=0:t&&(t=+t),xr(vs(e).replace(re,""),t||0)},Lr.random=function(t,r,n){if(n&&"boolean"!=typeof n&&xi(t,r,n)&&(r=n=e),n===e&&("boolean"==typeof r?(n=r,r=e):"boolean"==typeof t&&(n=t,t=e)),t===e&&r===e?(t=0,r=1):(t=fs(t),r===e?(r=t,t=0):r=fs(r)),t>r){var o=t;t=r,r=o}if(n||t%1||r%1){var i=wr();return vr(t+i*(r-t+lt("1e-"+((i+"").length-1))),r)}return qn(t,r)},Lr.reduce=function(e,t,r){var n=Ya(e)?At:Ut,o=arguments.length<3;return n(e,di(t,4),r,o,hn)},Lr.reduceRight=function(e,t,r){var n=Ya(e)?Bt:Ut,o=arguments.length<3;return n(e,di(t,4),r,o,fn)},Lr.repeat=function(t,r,n){return r=(n?xi(t,r,n):r===e)?1:ps(r),Zn(vs(t),r)},Lr.replace=function(){var e=arguments,t=vs(e[0]);return e.length<3?t:t.replace(e[1],e[2])},Lr.result=function(t,r,n){var o=-1,i=(r=xo(r,t)).length;for(i||(i=1,t=e);++o<i;){var a=null==t?e:t[ji(r[o])];a===e&&(o=i,a=n),t=Qa(a)?a.call(t):a}return t},Lr.round=Cl,Lr.runInContext=ne,Lr.sample=function(e){return(Ya(e)?Gr:Qn)(e)},Lr.size=function(e){if(null==e)return 0;if(Ua(e))return ss(e)?cr(e):e.length;var t=gi(e);return t==w||t==k?e.size:zn(e).length},Lr.snakeCase=Ks,Lr.some=function(t,r,n){var o=Ya(t)?zt:oo;return n&&xi(t,r,n)&&(r=e),o(t,di(r,3))},Lr.sortedIndex=function(e,t){return io(e,t)},Lr.sortedIndexBy=function(e,t,r){return ao(e,t,di(r,2))},Lr.sortedIndexOf=function(e,t){var r=null==e?0:e.length;if(r){var n=io(e,t);if(n<r&&Pa(e[n],t))return n}return-1},Lr.sortedLastIndex=function(e,t){return io(e,t,!0)},Lr.sortedLastIndexBy=function(e,t,r){return ao(e,t,di(r,2),!0)},Lr.sortedLastIndexOf=function(e,t){if(null!=e&&e.length){var r=io(e,t,!0)-1;if(Pa(e[r],t))return r}return-1},Lr.startCase=qs,Lr.startsWith=function(e,t,r){return e=vs(e),r=null==r?0:sn(ps(r),0,e.length),t=co(t),e.slice(r,r+t.length)==t},Lr.subtract=Sl,Lr.sum=function(e){return e&&e.length?Kt(e,nl):0},Lr.sumBy=function(e,t){return e&&e.length?Kt(e,di(t,2)):0},Lr.template=function(t,r,n){var o=Lr.templateSettings;n&&xi(t,r,n)&&(r=e),t=vs(t),r=ws({},r,o,Jo);var i,a,s=ws({},r.imports,o.imports,Jo),l=Ts(s),d=Qt(s,l),c=0,u=r.interpolate||ve,h="__p += '",f=Fe((r.escape||ve).source+"|"+u.source+"|"+(u===G?ce:ve).source+"|"+(r.evaluate||ve).source+"|$","g"),p="//# sourceURL="+(Be.call(r,"sourceURL")?(r.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++ot+"]")+"\n";t.replace(f,(function(e,r,n,o,s,l){return n||(n=o),h+=t.slice(c,l).replace(ye,nr),r&&(i=!0,h+="' +\n__e("+r+") +\n'"),s&&(a=!0,h+="';\n"+s+";\n__p += '"),n&&(h+="' +\n((__t = ("+n+")) == null ? '' : __t) +\n'"),c=l+e.length,e})),h+="';\n";var g=Be.call(r,"variable")&&r.variable;if(g){if(le.test(g))throw new Ce("Invalid `variable` option passed into `_.template`")}else h="with (obj) {\n"+h+"\n}\n";h=(a?h.replace(N,""):h).replace(H,"$1").replace(W,"$1;"),h="function("+(g||"obj")+") {\n"+(g?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(i?", __e = _.escape":"")+(a?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+h+"return __p\n}";var m=Xs((function(){return Se(l,p+"return "+h).apply(e,d)}));if(m.source=h,Ga(m))throw m;return m},Lr.times=function(e,t){if((e=ps(e))<1||e>c)return[];var r=h,n=vr(e,h);t=di(t),e-=h;for(var o=qt(n,t);++r<e;)t(r);return o},Lr.toFinite=fs,Lr.toInteger=ps,Lr.toLength=gs,Lr.toLower=function(e){return vs(e).toLowerCase()},Lr.toNumber=ms,Lr.toSafeInteger=function(e){return e?sn(ps(e),-9007199254740991,c):0===e?e:0},Lr.toString=vs,Lr.toUpper=function(e){return vs(e).toUpperCase()},Lr.trim=function(t,r,n){if((t=vs(t))&&(n||r===e))return Zt(t);if(!t||!(r=co(r)))return t;var o=ur(t),i=ur(r);return $o(o,Jt(o,i),er(o,i)+1).join("")},Lr.trimEnd=function(t,r,n){if((t=vs(t))&&(n||r===e))return t.slice(0,hr(t)+1);if(!t||!(r=co(r)))return t;var o=ur(t);return $o(o,0,er(o,ur(r))+1).join("")},Lr.trimStart=function(t,r,n){if((t=vs(t))&&(n||r===e))return t.replace(re,"");if(!t||!(r=co(r)))return t;var o=ur(t);return $o(o,Jt(o,ur(r))).join("")},Lr.truncate=function(t,r){var n=30,o="...";if(es(r)){var i="separator"in r?r.separator:i;n="length"in r?ps(r.length):n,o="omission"in r?co(r.omission):o}var a=(t=vs(t)).length;if(or(t)){var s=ur(t);a=s.length}if(n>=a)return t;var l=n-cr(o);if(l<1)return o;var d=s?$o(s,0,l).join(""):t.slice(0,l);if(i===e)return d+o;if(s&&(l+=d.length-l),is(i)){if(t.slice(l).search(i)){var c,u=d;for(i.global||(i=Fe(i.source,vs(ue.exec(i))+"g")),i.lastIndex=0;c=i.exec(u);)var h=c.index;d=d.slice(0,h===e?l:h)}}else if(t.indexOf(co(i),l)!=l){var f=d.lastIndexOf(i);f>-1&&(d=d.slice(0,f))}return d+o},Lr.unescape=function(e){return(e=vs(e))&&U.test(e)?e.replace(Y,fr):e},Lr.uniqueId=function(e){var t=++ze;return vs(e)+t},Lr.upperCase=Zs,Lr.upperFirst=Gs,Lr.each=va,Lr.eachRight=ya,Lr.first=Ui,sl(Lr,(bl={},xn(Lr,(function(e,t){Be.call(Lr.prototype,t)||(bl[t]=e)})),bl),{chain:!1}),Lr.VERSION="4.17.23",kt(["bind","bindKey","curry","curryRight","partial","partialRight"],(function(e){Lr[e].placeholder=Lr})),kt(["drop","take"],(function(t,r){Wr.prototype[t]=function(n){n=n===e?1:br(ps(n),0);var o=this.__filtered__&&!r?new Wr(this):this.clone();return o.__filtered__?o.__takeCount__=vr(n,o.__takeCount__):o.__views__.push({size:vr(n,h),type:t+(o.__dir__<0?"Right":"")}),o},Wr.prototype[t+"Right"]=function(e){return this.reverse()[t](e).reverse()}})),kt(["filter","map","takeWhile"],(function(e,t){var r=t+1,n=1==r||3==r;Wr.prototype[e]=function(e){var t=this.clone();return t.__iteratees__.push({iteratee:di(e,3),type:r}),t.__filtered__=t.__filtered__||n,t}})),kt(["head","last"],(function(e,t){var r="take"+(t?"Right":"");Wr.prototype[e]=function(){return this[r](1).value()[0]}})),kt(["initial","tail"],(function(e,t){var r="drop"+(t?"":"Right");Wr.prototype[e]=function(){return this.__filtered__?new Wr(this):this[r](1)}})),Wr.prototype.compact=function(){return this.filter(nl)},Wr.prototype.find=function(e){return this.filter(e).head()},Wr.prototype.findLast=function(e){return this.reverse().find(e)},Wr.prototype.invokeMap=Gn((function(e,t){return"function"==typeof e?new Wr(this):this.map((function(r){return On(r,e,t)}))})),Wr.prototype.reject=function(e){return this.filter(Ba(di(e)))},Wr.prototype.slice=function(t,r){t=ps(t);var n=this;return n.__filtered__&&(t>0||r<0)?new Wr(n):(t<0?n=n.takeRight(-t):t&&(n=n.drop(t)),r!==e&&(n=(r=ps(r))<0?n.dropRight(-r):n.take(r-t)),n)},Wr.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},Wr.prototype.toArray=function(){return this.take(h)},xn(Wr.prototype,(function(t,r){var n=/^(?:filter|find|map|reject)|While$/.test(r),o=/^(?:head|last)$/.test(r),i=Lr[o?"take"+("last"==r?"Right":""):r],a=o||/^find/.test(r);i&&(Lr.prototype[r]=function(){var r=this.__wrapped__,s=o?[1]:arguments,l=r instanceof Wr,d=s[0],c=l||Ya(r),u=function(e){var t=i.apply(Lr,Mt([e],s));return o&&h?t[0]:t};c&&n&&"function"==typeof d&&1!=d.length&&(l=c=!1);var h=this.__chain__,f=!!this.__actions__.length,p=a&&!h,g=l&&!f;if(!a&&c){r=g?r:new Wr(this);var m=t.apply(r,s);return m.__actions__.push({func:fa,args:[u],thisArg:e}),new Hr(m,h)}return p&&g?t.apply(this,s):(m=this.thru(u),p?o?m.value()[0]:m.value():m)})})),kt(["pop","push","shift","sort","splice","unshift"],(function(e){var t=Oe[e],r=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",n=/^(?:pop|shift)$/.test(e);Lr.prototype[e]=function(){var e=arguments;if(n&&!this.__chain__){var o=this.value();return t.apply(Ya(o)?o:[],e)}return this[r]((function(r){return t.apply(Ya(r)?r:[],e)}))}})),xn(Wr.prototype,(function(e,t){var r=Lr[t];if(r){var n=r.name+"";Be.call(Or,n)||(Or[n]=[]),Or[n].push({name:t,func:r})}})),Or[No(e,2).name]=[{name:"wrapper",func:e}],Wr.prototype.clone=function(){var e=new Wr(this.__wrapped__);return e.__actions__=Oo(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=Oo(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=Oo(this.__views__),e},Wr.prototype.reverse=function(){if(this.__filtered__){var e=new Wr(this);e.__dir__=-1,e.__filtered__=!0}else(e=this.clone()).__dir__*=-1;return e},Wr.prototype.value=function(){var e=this.__wrapped__.value(),t=this.__dir__,r=Ya(e),n=t<0,o=r?e.length:0,i=function(e,t,r){for(var n=-1,o=r.length;++n<o;){var i=r[n],a=i.size;switch(i.type){case"drop":e+=a;break;case"dropRight":t-=a;break;case"take":t=vr(t,e+a);break;case"takeRight":e=br(e,t-a)}}return{start:e,end:t}}(0,o,this.__views__),a=i.start,s=i.end,l=s-a,d=n?s:a-1,c=this.__iteratees__,u=c.length,h=0,f=vr(l,this.__takeCount__);if(!r||!n&&o==l&&f==l)return go(e,this.__actions__);var p=[];e:for(;l--&&h<f;){for(var g=-1,m=e[d+=t];++g<u;){var b=c[g],v=b.iteratee,y=b.type,x=v(m);if(2==y)m=x;else if(!x){if(1==y)continue e;break e}}p[h++]=m}return p},Lr.prototype.at=pa,Lr.prototype.chain=function(){return ha(this)},Lr.prototype.commit=function(){return new Hr(this.value(),this.__chain__)},Lr.prototype.next=function(){this.__values__===e&&(this.__values__=hs(this.value()));var t=this.__index__>=this.__values__.length;return{done:t,value:t?e:this.__values__[this.__index__++]}},Lr.prototype.plant=function(t){for(var r,n=this;n instanceof Nr;){var o=Li(n);o.__index__=0,o.__values__=e,r?i.__wrapped__=o:r=o;var i=o;n=n.__wrapped__}return i.__wrapped__=t,r},Lr.prototype.reverse=function(){var t=this.__wrapped__;if(t instanceof Wr){var r=t;return this.__actions__.length&&(r=new Wr(this)),(r=r.reverse()).__actions__.push({func:fa,args:[ea],thisArg:e}),new Hr(r,this.__chain__)}return this.thru(ea)},Lr.prototype.toJSON=Lr.prototype.valueOf=Lr.prototype.value=function(){return go(this.__wrapped__,this.__actions__)},Lr.prototype.first=Lr.prototype.head,Je&&(Lr.prototype[Je]=function(){return this}),Lr}();pt?((pt.exports=pr)._=pr,ft._=pr):ht._=pr}.call(Oe);var Kx=Ux.exports;const qx=o.forwardRef(((n,o)=>{var{value:i,readOnly:a,"data-testid":l,maskRange:d,unmaskRange:c,maskRegex:u,maskTransformer:f,iconMask:p=e(xe,{}),iconUnmask:g=e(ye,{}),iconActiveColor:m,iconInactiveColor:b,maskChar:v="•",error:y,disableMask:x,transformInput:w,loadState:$,onMask:C,onUnmask:S,onChange:D,onFocus:k,onBlur:F,onTryAgain:_}=n,E=_e(n,["value","readOnly","data-testid","maskRange","unmaskRange","maskRegex","maskTransformer","iconMask","iconUnmask","iconActiveColor","iconInactiveColor","maskChar","error","disableMask","transformInput","loadState","onMask","onUnmask","onChange","onFocus","onBlur","onTryAgain"]);const O=a&&Kx.isEmpty(i),[T,I]=s(!x),[M,A]=s(i||"");h((()=>{A(i||"")}),[i]);const B=e=>{P(!1),null==k||k(e)},z=e=>{P(!0),null==F||F(e)},j=e=>{let t=e.target.value;switch(w){case"uppercase":t=t.toUpperCase();break;case"lowercase":t=t.toLowerCase()}A(t),e.target.value=t,null==D||D(e)},R=()=>{a&&(null==_||_())},L=()=>{P(!T)},P=e=>{I(e),e?null==C||C():null==S||S()},N=()=>!(null==M?void 0:M.toString().length)||x,H=()=>{if(O)return e(r,{});const t=N();return e(Bx,{"data-testid":"icon-"+(T?"masked":"unmasked"),onClick:t?void 0:L,$isDisabled:t,$inactiveColor:b,$activeColor:m,children:T?g:p})};return e("div",{"aria-busy":"loading"===$,"aria-live":"polite",children:(()=>{if(a)switch($){case"fail":return t(Wx,{onClick:R,"data-testid":"try-again-button",children:[t(Px,{children:[e(Nx,{}),e(Hx,{children:"Error"})]}),e(Lx,{children:"Try again?"})]});case"loading":return t(zx,{children:[e(Rx,{}),e(jx,{children:"Retrieving..."})]})}return e(Ax,Object.assign({ref:o,"data-testid":`${l||"masked-input"}${T?"-masked":"-unmasked"}`,addon:{type:"custom",attributes:{children:H()},position:"right"},onFocus:a?void 0:B,onBlur:a?void 0:z,onClick:a?L:void 0,onChange:j,value:O?"-":T&&!x?rt.maskValue(M,{maskChar:v,maskRange:d,unmaskRange:c,maskRegex:u,maskTransformer:f}):M,readOnly:a,error:y,$isDisabled:N()},E))})()})})),Zx=o.forwardRef(((t,r)=>{const{label:n,errorMessage:o,id:i="form-field-masked-input","data-error-testid":a,"data-testid":s,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u}=t,h=_e(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e(Bs,{id:i,label:n,errorMessage:o,disabled:h.disabled,"data-error-testid":a,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,children:e(qx,Object.assign({ref:r,id:`${i}-base`,"data-testid":s||i,error:!!o},h))})})),Gx=({selectedOptions:t,placeholder:r="Select",options:n,disabled:o,error:i,className:l,"data-testid":d,id:c,"aria-labelledby":u,"aria-describedby":f,"aria-invalid":p,enableSearch:g=!1,searchFunction:m,searchPlaceholder:b,valueExtractor:v,listExtractor:y,onSelectOptions:x,onShowOptions:w,onHideOptions:$,onRetry:C,optionsLoadState:S="success",optionTruncationType:D="end",renderListItem:k,hideNoResultsDisplay:F,noResultsDescription:_,customLabels:E,renderCustomCallToAction:O,onBlur:T,variant:I="default",readOnly:M,alignment:A,dropdownZIndex:B,maxSelectable:z,dropdownRootNode:j,dropdownWidth:R})=>{const{allSelectedLabel:L,multiSelectedLabel:P}=E||{},[N,H]=s(t||[]),[W,Y]=s(!1),[V,U]=s(!1),[K]=s((()=>tt.generate())),q=a(null),Z=a(null);h((()=>{H(t||[])}),[t]);const G=()=>{N&&N.length>0||z?(H([]),re([])):(H(n),re(n))},Q=(e,t)=>{const r=[...N],n=Zp(N,(e=>(v?v(e):e)===t));n>-1?r.splice(n,1):r.push(e),H(r),re(r)},X=()=>{W&&(Y(!1),te(!1))},J=()=>{V||W||U(!0)},ee=e=>{V&&!W&&q.current&&!q.current.contains(e.relatedTarget)&&(U(!1),null==T||T())},te=e=>{!e&&$&&$(),e&&w&&w()},re=e=>{x&&x(e)};return e(Av,{children:e(Ks,{enabled:!M&&!o,isOpen:W,renderElement:()=>e(kd,{className:l,"data-testid":d,id:c,ref:q,tabIndex:-1,onFocus:J,onBlur:ee,$focused:V,$disabled:o,$readOnly:M,$error:i,children:e(sy,{ref:Z,disabled:o,expanded:W,listboxId:K,popupRole:"listbox",readOnly:M,variant:I,"aria-labelledby":u,"aria-describedby":f,"aria-invalid":p,children:e(Ns,{$disabled:o,children:N&&0!==N.length?e(Hs,{$variant:I,children:n&&N.length===n.length?L||"All selected":P||`${N.length} selected`}):e(Ws,{$truncateType:D,$variant:I,children:r})})})}),renderDropdown:()=>e(oy,{listboxId:K,listItems:n,onSelectItem:Q,onDismiss:X,valueExtractor:v,listExtractor:y,enableSearch:g,searchFunction:m,searchPlaceholder:b,multiSelect:!0,maxSelectable:z,selectedItems:N,onSelectAll:G,onRetry:C,itemsLoadState:S,itemTruncationType:D,renderListItem:k,hideNoResultsDisplay:F,noResultsDescription:_,customLabels:E,renderCustomCallToAction:O,variant:I,width:R,matchElementWidth:!0}),onOpen:()=>{Y(!0),te(!0),U(!0)},onClose:e=>{Y(!1),te(!1),"click"!==e&&(U(!1),null==T||T())},onDismiss:()=>{var e;null===(e=Z.current)||void 0===e||e.focus(),Y(!1),te(!1)},clickToToggle:!0,offset:8,alignment:A,fitAvailableHeight:!0,customZIndex:B,rootNode:j})})},Qx=(e,t)=>{const[r,...n]=t;if(lx(e)||!r)return;const o=e.find((e=>e.key===r));return o?n.length?Qx(o.subItems,n):o:void 0},Xx=(e,t)=>{const r=[];for(const n of e)n.subItems?r.push(...Xx(n.subItems,[...t,n.key])):r.push({value:n.value,label:n.label,keyPath:[...t,n.key]});return r},Jx=({placeholder:t="Select",options:r,disabled:n,error:o,className:i,"data-testid":l,id:d,"aria-labelledby":c,"aria-describedby":u,"aria-invalid":f,selectedKeyPaths:p,mode:g,valueToStringFunction:m,enableSearch:b,searchPlaceholder:v,hideNoResultsDisplay:y,noResultsDescription:x,customLabels:w,readOnly:$,onSearch:C,onSelectOptions:S,onShowOptions:D,onHideOptions:k,onRetry:F,onBlur:_,optionsLoadState:E="success",optionTruncationType:O="end",variant:T="default",alignment:I,dropdownZIndex:M,dropdownWidth:A,dropdownRootNode:B})=>{const{multiSelectedLabel:z}=w||{},j=r,[R,L]=s(p?hx(p):new Set),[P,N]=s([]),[H,W]=s(!1),[Y,V]=s(!1),[U]=s((()=>tt.generate())),K=a(null),q=a(null),Z=a(null);h((()=>{const e=p||[],t=((e,t)=>{const r=[];for(let n=0;n<t.length;n++){const o=t[n],i=Qx(e,o);i&&r.push({value:i.value,label:i.label,keyPath:o})}return r})(j,e);L(hx(e)),N(t)}),[p,j]);const G=(e,t)=>{const r=t.map((e=>({keyPath:e.keyPath,label:e.item.label,value:e.item.value})));L(hx(e)),N(r),ne(e,r)},Q=e=>{const t=oe(e),r=t.map((e=>e.keyPath));N(t),L(hx(r)),ne(r,t)},X=()=>{Y||H||V(!0)},J=e=>{Y&&!H&&K.current&&!K.current.contains(e.relatedTarget)&&(V(!1),null==_||_())},ee=()=>{if(P.length>1)return z||`${P.length} selected`;const{label:e,value:t}=P[0];return m?m(t):e},te=e=>{if("middle"===O){let t=0;return Z&&Z.current&&(t=Z.current.getBoundingClientRect().width),rt.truncateOneLine(e,t,120,6)}return e},re=e=>{!e&&k&&k(),e&&D&&D()},ne=(e,t)=>{if(S){const r=t.map((e=>e.value));S(e,r)}},oe=e=>{if(!0===e.checked)return P.filter((t=>{const r=t.keyPath.slice(0,e.keyPath.length);return!Xp(e.keyPath,r)}));{const t=[...P],r=e.hasSubItems?((e,t)=>{const r=Qx(e,t);return r&&r.subItems?Xx(r.subItems,t):[]})(j,e.keyPath):[{value:e.item.value,label:e.item.label,keyPath:e.keyPath}];return r.forEach((e=>{P.find((t=>Xp(t.keyPath,e.keyPath)))||t.push(e)})),t}};return e(Ks,{enabled:!$&&!n,isOpen:H,renderElement:()=>e(kd,{className:i,"data-testid":l,id:d,ref:K,tabIndex:-1,onFocus:X,onBlur:J,$focused:Y,$disabled:n,$readOnly:$,$error:o,children:e(sy,{ref:q,disabled:n,expanded:H,listboxId:U,popupRole:"tree",readOnly:$,variant:T,"aria-labelledby":c,"aria-describedby":u,"aria-invalid":f,children:e(Ns,{ref:Z,$disabled:n,children:lx(P)?e(Ws,{$truncateType:O,children:t}):e(Hs,{$truncateType:O,children:te(ee())})})})}),renderDropdown:()=>e(xx,{listboxId:U,listItems:j,multiSelect:!0,selectedKeyPaths:R,itemsLoadState:E,itemTruncationType:O,enableSearch:b,searchPlaceholder:v,hideNoResultsDisplay:y,noResultsDescription:x,customLabels:w,onSelectItem:Q,onSelectAll:G,onRetry:F,onSearch:C,variant:T,mode:g,width:A,matchElementWidth:!0}),onOpen:()=>{W(!0),re(!0),V(!0)},onClose:e=>{W(!1),re(!1),"click"!==e&&(V(!1),null==_||_())},onDismiss:()=>{var e;null===(e=q.current)||void 0===e||e.focus(),W(!1),re(!1)},clickToToggle:!0,offset:8,alignment:I,fitAvailableHeight:!0,customZIndex:M,rootNode:B})},ew=({placeholder:t="Select",options:r,disabled:n,error:o,className:i,"data-testid":l,id:d,"aria-labelledby":c,"aria-describedby":u,"aria-invalid":f,selectedKeyPath:p,mode:g,valueToStringFunction:m,enableSearch:b,searchPlaceholder:v,selectableCategory:y,hideNoResultsDisplay:x,noResultsDescription:w,customLabels:$,readOnly:C,onBlur:S,onSearch:D,onSelectOption:k,onShowOptions:F,onHideOptions:_,onRetry:E,optionsLoadState:O="success",optionTruncationType:T="end",variant:I="default",alignment:M,dropdownZIndex:A,dropdownWidth:B,dropdownRootNode:z})=>{const j=r,[R,L]=s(p?hx([p]):new Set),[P,N]=s(),[H,W]=s(!1),[Y,V]=s(!1),[U]=s((()=>tt.generate())),K=a(null),q=a(null),Z=a(null);h((()=>{L(p?hx([p]):new Set);const e=cx(j,p||[]);N(null!=e?e:void 0)}),[p,j]);const G=e=>{var t;const{keyPath:r,item:{label:n,value:o}}=e;L(hx([r])),N({label:n,value:o}),W(!1),te(!1),null===(t=q.current)||void 0===t||t.focus(),null==k||k(r,o)},Q=()=>{Y||H||V(!0)},X=e=>{Y&&!H&&K.current&&!K.current.contains(e.relatedTarget)&&(V(!1),null==S||S())},J=()=>{if(!P)return"";const{label:e,value:t}=P;return m?m(t):e},ee=e=>{if("middle"===T){let t=0;return Z&&Z.current&&(t=Z.current.getBoundingClientRect().width),rt.truncateOneLine(e,t,120,6)}return e},te=e=>{!e&&_&&_(),e&&F&&F()};return e(Ks,{enabled:!C&&!n,isOpen:H,renderElement:()=>e(kd,{className:i,"data-testid":l,id:d,ref:K,tabIndex:-1,onFocus:Q,onBlur:X,$focused:Y,$disabled:n,$readOnly:C,$error:o,children:e(sy,{ref:q,disabled:n,expanded:H,listboxId:U,popupRole:"tree",readOnly:C,variant:I,"aria-labelledby":c,"aria-describedby":u,"aria-invalid":f,children:e(Ns,{ref:Z,$disabled:n,children:lx(P)?e(Ws,{$truncateType:T,children:t}):e(Hs,{$truncateType:T,children:ee(J())})})})}),renderDropdown:()=>e(xx,{listboxId:U,listItems:j,selectedKeyPaths:R,selectableCategory:y,itemsLoadState:O,itemTruncationType:T,enableSearch:b,searchPlaceholder:v,hideNoResultsDisplay:x,noResultsDescription:w,customLabels:$,onSelectItem:G,onRetry:E,onSearch:D,variant:I,mode:g,width:B,matchElementWidth:!0}),onOpen:()=>{W(!0),te(!0),V(!0)},onClose:e=>{W(!1),te(!1),"click"!==e&&(V(!1),null==S||S())},onDismiss:()=>{var e;null===(e=q.current)||void 0===e||e.focus(),W(!1),te(!1)},clickToToggle:!0,offset:8,alignment:M,fitAvailableHeight:!0,customZIndex:A,rootNode:z})};var tw=function(e,t,r,n){var o=-1,i=null==e?0:e.length;for(n&&i&&(r=e[++o]);++o<i;)r=t(r,e[o],o,e);return r};var rw=function(e){return function(t,r,n){for(var o=-1,i=Object(t),a=n(t),s=a.length;s--;){var l=a[e?s:++o];if(!1===r(i[l],l,i))break}return t}},nw=rw(),ow=Qh;var iw=Kh;var aw=function(e,t){return function(r,n){if(null==r)return r;if(!iw(r))return e(r,n);for(var o=r.length,i=t?o:-1,a=Object(r);(t?i--:++i<o)&&!1!==n(a[i],i,a););return r}}((function(e,t){return e&&nw(e,t,ow)}));var sw=tw,lw=aw,dw=Dp,cw=function(e,t,r,n,o){return o(e,(function(e,o,i){r=n?(n=!1,e):t(r,e,o,i)})),r},uw=sr;var hw=Te((function(e,t,r){var n=uw(e)?sw:cw,o=arguments.length<3;return n(e,dw(t),r,o,lw)}));const fw=[["Afghanistan",["asia"],"af","93"],["Albania",["europe"],"al","355"],["Algeria",["africa","north-africa"],"dz","213"],["Andorra",["europe"],"ad","376"],["Angola",["africa"],"ao","244"],["Antigua and Barbuda",["america","carribean"],"ag","1268"],["Argentina",["america","south-america"],"ar","54","(..) ........"],["Armenia",["asia","ex-ussr"],"am","374",".. ......"],["Aruba",["america","carribean"],"aw","297"],["Australia",["oceania"],"au","61","(..) .... ...."],["Austria",["europe","eu-union"],"at","43"],["Azerbaijan",["asia","ex-ussr"],"az","994","(..) ... .. .."],["Bahamas",["america","carribean"],"bs","1242"],["Bahrain",["middle-east"],"bh","973"],["Bangladesh",["asia"],"bd","880"],["Barbados",["america","carribean"],"bb","1246"],["Belarus",["europe","ex-ussr"],"by","375","(..) ... .. .."],["Belgium",["europe","eu-union"],"be","32","... .. .. .."],["Belize",["america","central-america"],"bz","501"],["Benin",["africa"],"bj","229"],["Bhutan",["asia"],"bt","975"],["Bolivia",["america","south-america"],"bo","591"],["Bosnia and Herzegovina",["europe","ex-yugos"],"ba","387"],["Botswana",["africa"],"bw","267"],["Brazil",["america","south-america"],"br","55","(..) ........."],["British Indian Ocean Territory",["asia"],"io","246"],["Brunei",["asia"],"bn","673"],["Bulgaria",["europe","eu-union"],"bg","359"],["Burkina Faso",["africa"],"bf","226"],["Burundi",["africa"],"bi","257"],["Cambodia",["asia"],"kh","855"],["Cameroon",["africa"],"cm","237"],["Canada",["america","north-america"],"ca","1","(...) ... ...."],["Cape Verde",["africa"],"cv","238"],["Caribbean Netherlands",["america","carribean"],"bq","599",""],["Central African Republic",["africa"],"cf","236"],["Chad",["africa"],"td","235"],["Chile",["america","south-america"],"cl","56"],["China",["asia"],"cn","86",".. ........."],["Colombia",["america","south-america"],"co","57","... ... ...."],["Comoros",["africa"],"km","269"],["Congo",["africa"],"cd","243"],["Congo",["africa"],"cg","242"],["Costa Rica",["america","central-america"],"cr","506",".... ...."],["Côte d’Ivoire",["africa"],"ci","225",".. .. .. .."],["Croatia",["europe","eu-union","ex-yugos"],"hr","385"],["Cuba",["america","carribean"],"cu","53"],["Curaçao",["america","carribean"],"cw","599",""],["Cyprus",["europe","eu-union"],"cy","357",".. ......"],["Czech Republic",["europe","eu-union"],"cz","420","... ... ..."],["Denmark",["europe","eu-union","baltic"],"dk","45",".. .. .. .."],["Djibouti",["africa"],"dj","253"],["Dominica",["america","carribean"],"dm","1767"],["Dominican Republic",["america","carribean"],"do","1",""],["Ecuador",["america","south-america"],"ec","593"],["Egypt",["africa","north-africa"],"eg","20"],["El Salvador",["america","central-america"],"sv","503",".... ...."],["Equatorial Guinea",["africa"],"gq","240"],["Eritrea",["africa"],"er","291"],["Estonia",["europe","eu-union","ex-ussr","baltic"],"ee","372",".... ......"],["Ethiopia",["africa"],"et","251"],["Fiji",["oceania"],"fj","679"],["Finland",["europe","eu-union","baltic"],"fi","358",".. ... .. .."],["France",["europe","eu-union"],"fr","33",". .. .. .. .."],["French Guiana",["america","south-america"],"gf","594"],["French Polynesia",["oceania"],"pf","689"],["Gabon",["africa"],"ga","241"],["Gambia",["africa"],"gm","220"],["Georgia",["asia","ex-ussr"],"ge","995"],["Germany",["europe","eu-union","baltic"],"de","49",".... ........"],["Ghana",["africa"],"gh","233"],["Greece",["europe","eu-union"],"gr","30"],["Grenada",["america","carribean"],"gd","1473"],["Guadeloupe",["america","carribean"],"gp","590","",0],["Guam",["oceania"],"gu","1671"],["Guatemala",["america","central-america"],"gt","502",".... ...."],["Guinea",["africa"],"gn","224"],["Guinea-Bissau",["africa"],"gw","245"],["Guyana",["america","south-america"],"gy","592"],["Haiti",["america","carribean"],"ht","509",".... ...."],["Honduras",["america","central-america"],"hn","504"],["Hong Kong",["asia"],"hk","852",".... ...."],["Hungary",["europe","eu-union"],"hu","36"],["Iceland",["europe"],"is","354","... ...."],["India",["asia"],"in","91","..... ....."],["Indonesia",["asia"],"id","62"],["Iran",["middle-east"],"ir","98","... ... ...."],["Iraq",["middle-east"],"iq","964"],["Ireland",["europe","eu-union"],"ie","353",".. ......."],["Israel",["middle-east"],"il","972","... ... ...."],["Italy",["europe","eu-union"],"it","39","... ......."],["Jamaica",["america","carribean"],"jm","1876"],["Japan",["asia"],"jp","81",".. .... ...."],["Jordan",["middle-east"],"jo","962"],["Kazakhstan",["asia","ex-ussr"],"kz","7","... ... .. .."],["Kenya",["africa"],"ke","254"],["Kiribati",["oceania"],"ki","686"],["Kosovo",["europe","ex-yugos"],"xk","383"],["Kuwait",["middle-east"],"kw","965"],["Kyrgyzstan",["asia","ex-ussr"],"kg","996","... ... ..."],["Laos",["asia"],"la","856"],["Latvia",["europe","eu-union","ex-ussr","baltic"],"lv","371",".. ... ..."],["Lebanon",["middle-east"],"lb","961"],["Lesotho",["africa"],"ls","266"],["Liberia",["africa"],"lr","231"],["Libya",["africa","north-africa"],"ly","218"],["Liechtenstein",["europe"],"li","423"],["Lithuania",["europe","eu-union","ex-ussr","baltic"],"lt","370"],["Luxembourg",["europe","eu-union"],"lu","352"],["Macau",["asia"],"mo","853"],["Macedonia",["europe","ex-yugos"],"mk","389"],["Madagascar",["africa"],"mg","261"],["Malawi",["africa"],"mw","265"],["Malaysia",["asia"],"my","60",".. .... ...."],["Maldives",["asia"],"mv","960"],["Mali",["africa"],"ml","223"],["Malta",["europe","eu-union"],"mt","356"],["Marshall Islands",["oceania"],"mh","692"],["Martinique",["america","carribean"],"mq","596"],["Mauritania",["africa"],"mr","222"],["Mauritius",["africa"],"mu","230"],["Mexico",["america","central-america"],"mx","52","... ... ...."],["Micronesia",["oceania"],"fm","691"],["Moldova",["europe"],"md","373","(..) .. .. .."],["Monaco",["europe"],"mc","377"],["Mongolia",["asia"],"mn","976"],["Montenegro",["europe","ex-yugos"],"me","382"],["Morocco",["africa","north-africa"],"ma","212"],["Mozambique",["africa"],"mz","258"],["Myanmar",["asia"],"mm","95"],["Namibia",["africa"],"na","264"],["Nauru",["africa"],"nr","674"],["Nepal",["asia"],"np","977"],["Netherlands",["europe","eu-union"],"nl","31",".. ........"],["New Caledonia",["oceania"],"nc","687"],["New Zealand",["oceania"],"nz","64","... ... ...."],["Nicaragua",["america","central-america"],"ni","505"],["Niger",["africa"],"ne","227"],["Nigeria",["africa"],"ng","234"],["North Korea",["asia"],"kp","850"],["Norway",["europe","baltic"],"no","47","... .. ..."],["Oman",["middle-east"],"om","968"],["Pakistan",["asia"],"pk","92","... ......."],["Palau",["oceania"],"pw","680"],["Palestine",["middle-east"],"ps","970"],["Panama",["america","central-america"],"pa","507"],["Papua New Guinea",["oceania"],"pg","675"],["Paraguay",["america","south-america"],"py","595"],["Peru",["america","south-america"],"pe","51"],["Philippines",["asia"],"ph","63",".... ......."],["Poland",["europe","eu-union","baltic"],"pl","48","... ... ..."],["Portugal",["europe","eu-union"],"pt","351"],["Puerto Rico",["america","carribean"],"pr","1",""],["Qatar",["middle-east"],"qa","974"],["Réunion",["africa"],"re","262"],["Romania",["europe","eu-union"],"ro","40"],["Russia",["europe","asia","ex-ussr","baltic"],"ru","7","(...) ... .. .."],["Rwanda",["africa"],"rw","250"],["Saint Kitts and Nevis",["america","carribean"],"kn","1869"],["Saint Lucia",["america","carribean"],"lc","1758"],["Saint Vincent and the Grenadines",["america","carribean"],"vc","1784"],["Samoa",["oceania"],"ws","685"],["San Marino",["europe"],"sm","378"],["São Tomé and Príncipe",["africa"],"st","239"],["Saudi Arabia",["middle-east"],"sa","966"],["Senegal",["africa"],"sn","221"],["Serbia",["europe","ex-yugos"],"rs","381"],["Seychelles",["africa"],"sc","248"],["Sierra Leone",["africa"],"sl","232"],["Singapore",["asia"],"sg","65",".... ...."],["Slovakia",["europe","eu-union"],"sk","421"],["Slovenia",["europe","eu-union","ex-yugos"],"si","386"],["Solomon Islands",["oceania"],"sb","677"],["Somalia",["africa"],"so","252"],["South Africa",["africa"],"za","27"],["South Korea",["asia"],"kr","82","... .... ...."],["South Sudan",["africa","north-africa"],"ss","211"],["Spain",["europe","eu-union"],"es","34","... ... ..."],["Sri Lanka",["asia"],"lk","94"],["Sudan",["africa"],"sd","249"],["Suriname",["america","south-america"],"sr","597"],["Swaziland",["africa"],"sz","268"],["Sweden",["europe","eu-union","baltic"],"se","46","(...) ... ..."],["Switzerland",["europe"],"ch","41",".. ... .. .."],["Syria",["middle-east"],"sy","963"],["Taiwan",["asia"],"tw","886"],["Tajikistan",["asia","ex-ussr"],"tj","992"],["Tanzania",["africa"],"tz","255"],["Thailand",["asia"],"th","66"],["Timor-Leste",["asia"],"tl","670"],["Togo",["africa"],"tg","228"],["Tonga",["oceania"],"to","676"],["Trinidad and Tobago",["america","carribean"],"tt","1868"],["Tunisia",["africa","north-africa"],"tn","216"],["Turkey",["europe"],"tr","90","... ... .. .."],["Turkmenistan",["asia","ex-ussr"],"tm","993"],["Tuvalu",["asia"],"tv","688"],["Uganda",["africa"],"ug","256"],["Ukraine",["europe","ex-ussr"],"ua","380","(..) ... .. .."],["United Arab Emirates",["middle-east"],"ae","971"],["United Kingdom",["europe","eu-union"],"gb","44",".... ......"],["United States",["america","north-america"],"us","1","(...) ... ...."],["Uruguay",["america","south-america"],"uy","598"],["Uzbekistan",["asia","ex-ussr"],"uz","998",".. ... .. .."],["Vanuatu",["oceania"],"vu","678"],["Vatican City",["europe"],"va","39",".. .... ...."],["Venezuela",["america","south-america"],"ve","58"],["Vietnam",["asia"],"vn","84"],["Yemen",["middle-east"],"ye","967"],["Zambia",["africa"],"zm","260"],["Zimbabwe",["africa"],"zw","263"]],pw=(e,t,r,n)=>r?e+"".padEnd(t.length,".")+" "+r:e+"".padEnd(t.length,".")+" "+n;var gw;!function(e){e.getCountries=()=>[].concat(...fw.map((e=>({name:e[0],regions:e[1],iso2:e[2],countryCode:e[3],format:pw("+",e[3],e[4],"... ... ... ... ..")})))),e.formatNumber=(e="",t)=>{if(!t)return e;const r=e.replace(/[\s()]+/g,""),{format:n}=t,o=n.split(" ");o.shift();const i=o.join(" ");return hw(i,((e,t)=>{if(0===e.remainingText.length)return e;if("."!==t)return{formattedText:e.formattedText+t,remainingText:e.remainingText};const r=e.remainingText.slice(0,1),n=e.remainingText.slice(1);return{formattedText:e.formattedText+r,remainingText:n}}),{formattedText:"",remainingText:r}).formattedText}}(gw||(gw={}));const mw=t=>{var{onChange:r,value:n,allowClear:o,onClear:i,onBlur:l,error:d,fixedCountry:c=!1,optionPlaceholder:u="Select",optionSearchPlaceholder:f,enableSearch:p,onHideOptions:g,onShowOptions:m,placeholder:b,autoComplete:v,noBorder:y=!1}=t,x=_e(t,["onChange","value","allowClear","onClear","onBlur","error","fixedCountry","optionPlaceholder","optionSearchPlaceholder","enableSearch","onHideOptions","onShowOptions","placeholder","autoComplete","noBorder"]);const[w]=s(gw.getCountries()),[$,C]=s(void 0),[S,D]=s(""),k=a(null),F=tr({ref:k,formatter:e=>gw.formatNumber(e.replace(/[^0-9]/g,""),$)});h((()=>{const e=w.filter((e=>e.countryCode===bw(null==n?void 0:n.countryCode)))[0];C(e),D(gw.formatNumber(null==n?void 0:n.number,e))}),[n]);const _=e=>{O(S,e),r&&E(S,e)},E=(e,t)=>{const n=gw.formatNumber(e,t);null==r||r({number:n.replace(/[\s()]+/g,""),countryCode:t&&vw(t.countryCode)})},O=(e,t)=>{D(gw.formatNumber(e,t)),C(t)};return e(Ix,Object.assign({ref:k,value:S,onChange:()=>{const e=F();if(!e)return;const{nextValue:t,updateCaretPosition:n}=e;n(),O(t,$),r&&E(t,$)},allowClear:o&&!!S,onClear:()=>{i?i():D("")},onBlur:l,error:d,placeholder:b,addon:c?{type:"label",attributes:{value:vw(null==$?void 0:$.countryCode)}}:{type:"list",attributes:{"aria-label":"Country code",placeholder:u,options:w,selectedOption:$,enableSearch:p,searchPlaceholder:f,valueExtractor:e=>`+${e.countryCode}`,listExtractor:e=>({title:e.name,secondaryLabel:vw(e.countryCode)}),onSelectOption:_,onHideOptions:g,onShowOptions:m}},inputMode:"numeric",autoComplete:v,"aria-label":"Enter phone number",noBorder:y},x))},bw=e=>e?e.replace("+",""):"",vw=e=>e?e.includes("+")?e:`+${e}`:"",yw=k.div`
    display: flex;
    flex-direction: column;
`,xw=k.div`
    display: flex;
`,ww=k.div`
    display: flex;
    align-items: center;
    width: ${e=>e.$isMaxWidth?"100%":"auto"};
    border-radius: ${ta.sm} 0 0 ${ta.sm};
    box-shadow: inset 1px 0 0 ${Gi.border},
        inset 0 1px 0 ${Gi.border}, inset 0 -1px 0 ${Gi.border};

    &:focus-within {
        box-shadow: inset 2px 0 0 ${Gi["border-focus"]},
            inset 0 2px 0 ${Gi["border-focus"]},
            inset 0 -2px 0 ${Gi["border-focus"]};
    }

    ${e=>e.$error?F`
                box-shadow: inset 1px 0 0 ${Gi["border-error"]},
                    inset 0 1px 0 ${Gi["border-error"]},
                    inset 0 -1px 0 ${Gi["border-error"]};

                &:focus-within {
                    box-shadow: inset 2px 0 0 ${Gi["border-error-focus"]},
                        inset 0 2px 0 ${Gi["border-error-focus"]},
                        inset 0 -2px 0 ${Gi["border-error-focus"]};
                }
            `:e.$disabled?F`
                box-shadow: inset 0 0 0 1px ${Gi.border};
                border-radius: ${ta.sm};
                background: ${Gi["bg-disabled"]};
                color: ${Gi["text-disabled"]};
                &:focus-within {
                    box-shadow: inset 0 0 0 2px ${Gi.border};
                }

                /* Spacer to maintain width when disabled */
                ${!e.$isMaxWidth&&F`
                    &::after {
                        content: "";
                        min-width: 120px;
                        flex-shrink: 0;
                    }

                    /* Hide spacer on mobile to prevent text coverage */
                    ${oa.MaxWidth.sm} {
                        &::after {
                            display: none;
                        }
                    }
                `}
            `:e.$readonly?F`
                box-shadow: none;
                border-radius: ${ta.sm};
                &:focus-within {
                    box-shadow: inset 0 0 0 2px ${Gi["border-focus"]};
                }
            `:void 0}
`,$w=k.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 ${ea["spacing-12"]};
    color: ${Gi["icon-success"]};
    flex-shrink: 0;

    svg {
        width: 1.25rem;
        height: 1.25rem;
    }
`,Cw=k(Dl.Default)`
    min-width: 120px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    flex-shrink: 0;
    ${oa.MaxWidth.sm} {
        width: fit-content;
    }
`,Sw=k(Ix)`
    padding: 0 ${ea["spacing-16"]};
    width: 100%;
    background: transparent;

    ${e=>e.disabled&&F`
            input {
                color: ${Gi["text-disabled"]};
            }
        `}

    ${e=>e.readOnly&&F`
            padding: 0;
        `}
`,Dw=k(mw)`
    padding: 0 ${ea["spacing-16"]};
    background: transparent;

    ${e=>e.disabled&&F`
            input {
                color: ${Gi["text-disabled"]};
            }
        `}

    ${e=>e.readOnly&&F`
            padding: 0;
            input {
                margin-left: ${ea["spacing-12"]};
            }
        `}
`,kw=({id:r,"data-testid":n,disabled:o,readOnly:i,inputId:a,type:s,sendOtpPlaceholder:l,emailValue:d,onEmailChange:c,phoneNumberValue:u,onPhoneNumberChange:h,fixedCountry:f,isLoading:p,isVerified:g,countdown:m,onSendOtp:b,onStateReset:v,sendOtpError:y})=>{const x=e=>{v(),"email"===s&&c&&c(e.target.value)},w=e=>{v(),"phone-number"===s&&h&&h(e)};return t(yw,{id:r,"data-testid":n,children:[t(xw,{children:[t(ww,{$isMaxWidth:"email"===s,$error:!!y,$disabled:o,$readonly:i,children:["email"===s?e(Sw,{id:a,"data-testid":n?`${n}-contact-input`:void 0,placeholder:l||"Enter email",value:d,onChange:x,type:"email",noBorder:!0,"aria-invalid":!!y,"aria-required":!0,disabled:o,readOnly:i}):e(Dw,{id:a,"data-testid":n?`${n}-contact-input`:void 0,placeholder:l||"Enter mobile number",value:u,onChange:w,noBorder:!0,fixedCountry:f,"aria-invalid":!!y,"aria-required":!0,disabled:o,readOnly:i}),g&&e($w,{"aria-label":"Verified",role:"img",children:e(ce,{})})]}),!o&&!i&&e(Cw,{id:r?`${r}-contact-button`:void 0,"data-testid":n?`${n}-contact-button`:void 0,onClick:b,disabled:m.isRunning||g,loading:p,children:g?"Verified":p?"":m.isRunning?"Sent OTP":"Send OTP"})]}),y&&e($s,{id:r?`${r}-contact-error`:void 0,"data-testid":n?`${n}-contact-error`:void 0,role:"alert",children:y})]})},Fw=k.div`
    display: flex;
    flex-direction: column;
    gap: ${ea["spacing-16"]};
`,_w=k.svg`
    .background-circle {
        fill: ${Gi["bg-stronger"]};
    }

    .primary-path {
        fill: ${Gi["icon-primary"]};
    }

    .validation-icon {
        fill: ${Gi["bg-available"]};
    }

    .accent-light-3 {
        fill: ${Gi["icon-primary-subtle"]};
    }

    .accent-light-4 {
        fill: ${Gi["icon-primary-subtlest"]};
    }
`,Ew=({width:r=120,height:n=120,className:o})=>t(_w,{width:r,height:n,viewBox:"0 0 120 120",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:o,children:[t("g",{clipPath:"url(#clip0_email_icon)",children:[e("circle",{cx:"60",cy:"60",r:"60",className:"background-circle"}),e("path",{d:"M22.9744 60.2636L62.1602 72.5619C62.6183 72.7414 63.1075 72.7591 63.5596 72.638C64.0116 72.5169 64.4265 72.2569 64.7334 71.8724L92.5201 41.6289L52.1928 25.0006C51.2645 24.6309 50.2039 24.9151 49.5848 25.6994L22.9744 60.2636Z",className:"primary-path"}),e("path",{d:"M72.6935 18.8097L29.2275 30.4564C26.8325 31.0982 25.4042 33.5744 26.0465 35.9714L38.8689 83.8253C39.1907 85.026 40.4254 85.7396 41.6251 85.4182L89.4378 72.6068C90.6374 72.2854 91.3499 71.05 91.0282 69.8493L78.2058 21.9954C77.5635 19.5984 75.0929 18.1668 72.6935 18.8097Z",fill:"white"}),e("path",{d:"M64.7456 71.7935C64.4385 72.1773 64.0235 72.4369 63.5715 72.5581C63.1194 72.6792 62.6303 72.6618 62.1724 72.483L23 60.2346L33.4375 99.188C34.0777 101.577 36.5445 102.994 38.9439 102.352L99.7963 86.0462C102.196 85.4033 103.623 82.9425 102.983 80.5533L92.5457 41.5999L64.7456 71.7935Z",className:"accent-light-3"}),e("path",{d:"M99.8349 86.0769L38.9824 102.382C36.544 103.036 34.127 101.648 33.4768 99.2216C33.2926 98.5339 33.4491 97.7966 33.8965 97.2409L60.7012 66.8793C61.0084 66.4957 61.4233 66.2361 61.8754 66.115C62.3274 65.9939 62.8166 66.0112 63.2744 66.1898L101.669 79.0814C102.334 79.3389 102.838 79.8992 103.023 80.5869C103.673 83.0134 102.273 85.4235 99.8349 86.0769Z",className:"accent-light-4"}),e("path",{d:"M56.1874 49.1387L52.6167 47.0772C52.2767 46.8809 51.9109 46.8352 51.5193 46.9401C51.1288 47.0447 50.8354 47.2671 50.6391 47.6071C50.4263 47.9757 50.3723 48.3558 50.4772 48.7474C50.5819 49.1379 50.8155 49.4283 51.1781 49.6186L55.9386 52.3685C56.2844 52.5863 56.6531 52.6427 57.0447 52.5378C57.4352 52.4332 57.737 52.1971 57.9501 51.8295L63.423 42.35C63.6193 42.01 63.6666 41.65 63.5649 41.2703C63.4628 40.8894 63.2418 40.6009 62.9017 40.4045C62.5617 40.2082 62.1958 40.1625 61.8043 40.2674C61.4138 40.372 61.1204 40.5944 60.924 40.9344L56.1874 49.1387ZM61.0069 59.8842C59.152 60.3812 57.3145 60.4964 55.4942 60.2299C53.674 59.9633 51.9987 59.3883 50.4684 58.5048C48.9382 57.6213 47.6026 56.458 46.4616 55.0148C45.3206 53.5717 44.5017 51.9227 44.0046 50.0678C43.5076 48.2129 43.3924 46.3754 43.6589 44.5551C43.9255 42.7348 44.5005 41.0595 45.384 39.5293C46.2674 37.999 47.4308 36.6634 48.8739 35.5224C50.317 34.3814 51.966 33.5625 53.8208 33.0655C55.6757 32.5685 57.5132 32.4532 59.3335 32.7198C61.1537 32.9863 62.829 33.5613 64.3593 34.4448C65.8895 35.3283 67.2251 36.4917 68.3661 37.9348C69.5071 39.378 70.326 41.027 70.8231 42.8818C71.3201 44.7367 71.4353 46.5743 71.1688 48.3945C70.9023 50.2148 70.3272 51.8901 69.4438 53.4204C68.5603 54.9506 67.3969 56.2863 65.9538 57.4272C64.5107 58.5682 62.8617 59.3872 61.0069 59.8842Z",className:"validation-icon"})]}),e("defs",{children:e("clipPath",{id:"clip0_email_icon",children:e("rect",{width:"120",height:"120",fill:"white"})})})]}),Ow=k.svg`
    .background-circle {
        fill: ${Gi["bg-stronger"]};
    }

    .primary-path {
        fill: ${Gi["icon-primary"]};
    }

    .validation-icon {
        fill: ${Gi["bg-available"]};
    }

    .accent-light {
        fill: ${Gi["bg-selected-stronger"]};
    }
`,Tw=({width:r=120,height:n=120,className:o})=>t(Ow,{width:r,height:n,viewBox:"0 0 120 120",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:o,children:[t("g",{clipPath:"url(#clip0_phone_icon)",children:[e("circle",{cx:"60",cy:"60.5",r:"60",className:"background-circle"}),e("path",{d:"M85.7091 99.047L56.9789 106.705C51.6167 108.134 46.0606 104.916 44.6318 99.5553L27.1393 33.9319C25.9969 29.6444 27.8244 25.2332 31.3437 22.9073C32.2263 22.3231 33.2151 21.8712 34.2899 21.5845L34.4374 21.5449L40.7667 19.8586L56.4455 15.6787L56.4545 15.6763L63.02 13.9267C68.3822 12.497 73.9383 15.715 75.3671 21.0761L92.8596 86.6995C94.2888 92.0619 91.0712 97.6172 85.7091 99.047Z",className:"primary-path"}),e("path",{d:"M90.0893 85.5165L72.9593 22.8765C72.8393 22.4365 72.6893 22.0165 72.5093 21.6165C72.0993 20.6965 71.5393 19.8765 70.8693 19.1765C70.2493 18.5365 69.5393 17.9865 68.7593 17.5665C66.8993 16.5465 64.6593 16.2165 62.4593 16.8065L58.8593 17.8765C58.8593 17.8765 58.8693 17.9065 58.8793 17.9265C59.2793 19.4065 58.8293 20.8265 57.8893 21.0665L42.2093 25.2365C41.3193 25.4765 40.3093 24.5765 39.8593 23.2265L36.0693 24.2365C31.5193 25.4465 28.7793 30.1665 29.9993 34.7265L30.3093 35.8765L32.1393 42.7565L35.8493 56.6765L36.8693 60.5165L38.1493 65.3165L47.0793 97.5165C48.2893 102.067 53.0093 104.807 57.5693 103.587L83.9993 95.9965C88.5493 94.7865 91.2893 90.0665 90.0693 85.5065L90.0893 85.5165ZM38.6893 26.3265L34.8993 27.3365C34.5793 27.4265 34.2493 27.2265 34.1593 26.9065C34.0693 26.5865 34.2693 26.2565 34.5893 26.1665L38.3793 25.1565C38.6993 25.0665 39.0293 25.2665 39.1193 25.5865C39.2093 25.9065 39.0093 26.2365 38.6893 26.3265ZM65.6893 19.3265L61.8993 20.3365C61.5793 20.4265 61.2493 20.2265 61.1593 19.9065C61.0693 19.5865 61.2693 19.2565 61.5893 19.1665L65.3793 18.1565C65.6993 18.0665 66.0293 18.2665 66.1193 18.5865C66.2093 18.9065 66.0093 19.2365 65.6893 19.3265Z",fill:"white"}),e("path",{d:"M55.1766 48.5674L51.606 46.5059C51.2659 46.3096 50.9001 46.2639 50.5086 46.3688C50.1181 46.4734 49.8247 46.6958 49.6283 47.0358C49.4155 47.4045 49.3616 47.7846 49.4665 48.1761C49.5711 48.5666 49.8047 48.857 50.1673 49.0473L54.9279 51.7972C55.2737 52.015 55.6424 52.0715 56.0339 51.9665C56.4244 51.8619 56.7262 51.6258 56.9393 51.2583L62.4123 41.7787C62.6086 41.4387 62.6559 41.0788 62.5541 40.699C62.4521 40.3181 62.231 40.0296 61.891 39.8332C61.5509 39.6369 61.1851 39.5912 60.7935 39.6961C60.403 39.8007 60.1096 40.0231 59.9133 40.3631L55.1766 48.5674ZM59.9961 59.3129C58.1413 59.8099 56.3037 59.9251 54.4835 59.6586C52.6632 59.392 50.988 58.817 49.4577 57.9335C47.9274 57.05 46.5918 55.8867 45.4509 54.4435C44.3099 53.0004 43.4909 51.3514 42.9939 49.4965C42.4969 47.6417 42.3817 45.8041 42.6482 43.9838C42.9147 42.1635 43.4897 40.4882 44.3732 38.958C45.2567 37.4277 46.42 36.0921 47.8631 34.9511C49.3063 33.8102 50.9552 32.9912 52.8101 32.4942C54.6649 31.9972 56.5025 31.8819 58.3227 32.1485C60.143 32.415 61.8183 32.99 63.3485 33.8736C64.8788 34.7571 66.2144 35.9204 67.3554 37.3635C68.4963 38.8067 69.3153 40.4557 69.8123 42.3105C70.3093 44.1654 70.4246 46.003 70.158 47.8233C69.8915 49.6435 69.3165 51.3188 68.433 52.8491C67.5495 54.3794 66.3862 55.715 64.9431 56.8559C63.5 57.9969 61.851 58.8159 59.9961 59.3129Z",className:"validation-icon"}),e("path",{d:"M76.5801 68.8601C77.3501 68.6501 77.8201 67.8501 77.6101 67.0801C77.4001 66.3101 76.6001 65.8401 75.8301 66.0501L49.0801 73.1601C48.3101 73.3701 47.8401 74.1701 48.0501 74.9401C48.2601 75.7101 49.0601 76.1801 49.8301 75.9701L76.5801 68.8601Z",className:"accent-light"}),e("path",{d:"M78.5098 76.1402C79.2798 75.9302 79.7498 75.1302 79.5398 74.3602C79.3298 73.5902 78.5298 73.1202 77.7598 73.3302L51.0098 80.4402C50.2398 80.6502 49.7698 81.4502 49.9798 82.2202C50.1898 82.9902 50.9898 83.4602 51.7598 83.2502L78.5098 76.1402Z",className:"accent-light"}),e("path",{d:"M81.6702 82.3401C81.4602 81.5701 80.6602 81.1001 79.8902 81.3101L53.1402 88.4201C52.3702 88.6301 51.9002 89.4301 52.1102 90.2001C52.3202 90.9701 53.1202 91.4401 53.8902 91.2301L80.6402 84.1201C81.4102 83.9101 81.8802 83.1101 81.6702 82.3401Z",className:"accent-light"})]}),e("defs",{children:e("clipPath",{id:"clip0_phone_icon",children:e("rect",{width:"120",height:"120",fill:"white"})})})]}),Iw=k.div`
    display: flex;
    align-items: center;
    background-color: ${Gi["bg-strong"]};
    padding: ${ea["spacing-16"]} ${ea["spacing-32"]};
    gap: ${ea["spacing-32"]};
    ${oa.MaxWidth.sm} {
        flex-direction: column;
        align-items: start;
        gap: ${ea["spacing-16"]};
        padding: ${ea["spacing-16"]};
    }
`,Mw=k.div`
    display: flex;
    flex-direction: column;
    gap: ${ea["spacing-16"]};
`,Aw=k(Sa.BodyMD)`
    color: ${Gi["text-subtlest"]};
`,Bw=k.div`
    display: flex;
    gap: ${ea["spacing-8"]};
    max-width: 472px;
`,zw=k(Dl.Default)`
    flex-shrink: 0;
    width: 83px;
`,jw=({id:r,"data-testid":n,type:o,showVerifyOtpThumbnail:i=!1,verifyOtpTitle:a,verifyOtpMessage:s,otpCode:l,setOtpCode:d,isVerifyLoading:c,countdown:u,onVerifyOtp:h,verifyOtpError:f,otpPrefix:p,otpSeparator:g})=>{const m=T(),b=ar.useMediaQuery({maxWidth:na["sm-max"]({theme:m})})?64:120;return t(Iw,{id:r,"data-testid":n,role:"group","aria-labelledby":r?`${r}-title`:void 0,children:[(()=>{if(!i)return null;return e("div",{"aria-label":"email"===o?"Email verification":"Phone verification",role:"img",children:e("email"===o?Ew:Tw,{width:b,height:b})})})(),t(Mw,{children:[t("div",{children:[e(Sa.BodyMD,{weight:"semibold",id:r?`${r}-title`:void 0,"data-testid":n?`${n}-title`:void 0,children:a}),e(Sa.BodyMD,{weight:"regular",id:r?`${r}-message`:void 0,"data-testid":n?`${n}-message`:void 0,children:s})]}),t("div",{children:[t(Bw,{children:[e(Ix,{id:r?`${r}-verify-input`:void 0,"data-testid":n?`${n}-verify-input`:void 0,value:l,onChange:e=>null==d?void 0:d(e.target.value),placeholder:"Enter OTP",addon:{type:"label",attributes:{value:`${null!=p?p:""}${null!=g?g:""}`}},type:"number",error:!!f,"aria-label":"Enter OTP code","aria-invalid":!!f,"aria-required":!0}),e(zw,{id:r?`${r}-verify-button`:void 0,"data-testid":n?`${n}-verify-button`:void 0,onClick:h,loading:c,styleType:"light",disabled:!l||0===l.length,children:!c&&"Verify"})]}),f&&e($s,{id:r?`${r}-verify-error`:void 0,"data-testid":n?`${n}-verify-error`:void 0,role:"alert",children:f})]}),u.isRunning&&t(Aw,{id:r?`${r}-countdown`:void 0,"data-testid":n?`${n}-countdown`:void 0,children:["Resend OTP in ",u.formatTime()]})]})]})},Rw=r=>{const{id:n,"data-testid":o,className:i,inputId:l,onSendOtp:d,onVerifyOtp:c,verifyOtpCountdownTimer:u=60,sendOtpError:f,verifyOtpError:p,otpValue:g,onOtpChange:m,otpState:b,onOtpStateChange:v}=r,[y,x]=s(!1),[w,$]=s(!1),C=(({duration:e,onComplete:t})=>{const[r,n]=s(e),[o,i]=s(!1),l=a(null),d=a(null),c=()=>{i(!1),l.current&&(clearInterval(l.current),l.current=null)};return h((()=>{o||n(e)}),[e,o]),{timeLeft:r,isRunning:o,start:()=>{o||(d.current=Date.now(),i(!0),l.current=setInterval((()=>{const r=Math.floor((Date.now()-d.current)/1e3),o=Math.max(0,e-r);n(o),o<=0&&(i(!1),l.current&&(clearInterval(l.current),l.current=null),null==t||t())}),1e3))},stop:c,reset:()=>{c(),n(e),d.current=null},formatTime:e=>{const t=null!=e?e:r;return`${t} second${1===t?"":"s"}`}}})({duration:u});return t(Fw,{id:n,"data-testid":o,className:i,children:[e(kw,Object.assign({},r,{inputId:l,"data-testid":o?`${o}-contact`:void 0,isLoading:y,isVerified:"verified"===b,countdown:C,onSendOtp:()=>Ee(void 0,void 0,void 0,(function*(){if(d)try{x(!0),yield d(),v("sent"),C.reset(),C.start()}catch(e){}finally{x(!1)}})),onStateReset:()=>{"verified"===b&&v("default")},sendOtpError:f,fixedCountry:"phone-number"!==r.type||r.fixedCountry})),"sent"===b&&e(jw,Object.assign({},r,{"data-testid":o?`${o}-verification`:void 0,otpCode:null==g?void 0:g.value,otpPrefix:null==g?void 0:g.prefix,otpSeparator:null==g?void 0:g.separator,setOtpCode:m,isVerifyLoading:w,countdown:C,onVerifyOtp:()=>Ee(void 0,void 0,void 0,(function*(){if(c&&(null==g?void 0:g.value))try{$(!0),yield c(g.value),v("verified"),C.reset(),null==m||m("")}catch(e){}finally{$(!1)}})),verifyOtpError:p}))]})};var Lw=ur,Pw=Mr,Nw=function(){return Lw.Date.now()},Hw=Pp,Ww=Math.max,Yw=Math.min;var Vw=Te((function(e,t,r){var n,o,i,a,s,l,d=0,c=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var r=n,i=o;return n=o=void 0,d=t,a=e.apply(i,r)}function p(e){var r=e-l;return void 0===l||r>=t||r<0||u&&e-d>=i}function g(){var e=Nw();if(p(e))return m(e);s=setTimeout(g,function(e){var r=t-(e-l);return u?Yw(r,i-(e-d)):r}(e))}function m(e){return s=void 0,h&&n?f(e):(n=o=void 0,a)}function b(){var e=Nw(),r=p(e);if(n=arguments,o=this,l=e,r){if(void 0===s)return function(e){return d=e,s=setTimeout(g,t),c?f(e):a}(l);if(u)return clearTimeout(s),s=setTimeout(g,t),f(l)}return void 0===s&&(s=setTimeout(g,t)),a}return t=Hw(t)||0,Pw(r)&&(c=!!r.leading,i=(u="maxWait"in r)?Ww(Hw(r.maxWait)||0,t):i,h="trailing"in r?!!r.trailing:h),b.cancel=function(){void 0!==s&&clearTimeout(s),d=0,n=l=o=s=void 0},b.flush=function(){return void 0===s?a:m(Nw())},b}));const Uw=n=>{var{className:o,"data-testid":i,selectedOption:l,minimumCharacters:d=3,fetchOptions:c,placeholder:u="Enter here...",readOnly:f=!1,disabled:g=!1,error:m,valueExtractor:b,listExtractor:v,displayValueExtractor:y,onSelectOption:x,alignment:w,dropdownZIndex:$,dropdownRootNode:C,dropdownWidth:S,"aria-describedby":D}=n,k=_e(n,["className","data-testid","selectedOption","minimumCharacters","fetchOptions","placeholder","readOnly","disabled","error","valueExtractor","listExtractor","displayValueExtractor","onSelectOption","alignment","dropdownZIndex","dropdownRootNode","dropdownWidth","aria-describedby"]);const F=e=>e?y?y(e):e.toString():"",[_,E]=s((()=>l?F(l):"")),[O,T]=s((()=>l?F(l):"")),[I,M]=s([]),[A,B]=s(!0),[z,j]=s(!1),[R,L]=s(!!l),[P,N]=s(l),[H,W]=s(!1),[Y,V]=s(!1),[U]=s((()=>tt.generate())),[K,q]=s(null),Z=`${U}-instruction`,G=a(null),Q=a(null),X=a(c),J=p((e=>Ee(void 0,void 0,void 0,(function*(){if(X.current){j(!1),B(!0);try{const t=yield X.current(e);T(e),M(null!=t?t:[]),B(!1)}catch(e){j(!0),B(!1)}}}))),[]),ee=p(Vw((e=>{J(e)}),500),[J]);h((()=>{X.current=c}),[c]),h((()=>{_&&_.length>=d?R?_!==O&&ee(_):(W(!0),ee(_)):ee.cancel(),""===_&&P&&(null==x||x(void 0,void 0),le(),N(void 0)),l&&_!==F(l)&&L(!1)}),[_,l]),h((()=>{E(l?F(l):""),T(l?F(l):""),N(l),M([]),L(!!l)}),[l]),h((()=>{var e;const t=de(),r=null!==(e=null==I?void 0:I.length)&&void 0!==e?e:0;"loading"===t&&_.length>=d?q("Loading suggested results"):"fail"!==t?!H||A||z||q(0===r?_?"No results found.":null:`${r} result${r>1?"s":""} found. Press down arrow to scroll through the list.`):q("Suggestions failed to load. Try again.")}),[I,_,z,A]),h((()=>()=>{ee.cancel()}),[ee]);const te=(e,t)=>{var r;null===(r=Q.current)||void 0===r||r.focus(),E(F(e)),T(e?F(e):""),L(!0),N(e),W(!1),null==x||x(e,t)},re=()=>{V(!0)},ne=e=>{H||!G.current||G.current.contains(e.relatedTarget)||(V(!1),ae())},oe=()=>{W(!1),V(!1)},ie=()=>{E(""),M([]),L(!1),W(!1),null==x||x(void 0,void 0)},ae=()=>{if(!R)if(P){const e=F(P);E(e),W(!1)}else ie()},se=e=>{E(e.target.value),L(!1)},le=e=>{T(e?F(e):""),L(!!e),M([]),B(!0)},de=()=>z?"fail":A?"loading":"success";return e(Av,{children:e(Ks,{enabled:!f&&!g,isOpen:H,renderElement:()=>t(Fd,{className:o,"data-testid":i,ref:G,tabIndex:-1,onFocus:re,onBlur:ne,$focused:Y,$disabled:g,$readOnly:f,$error:m,children:[t(Zs,{id:Z,"aria-hidden":!0,children:["Type in ",d," or more characters for suggested results."]}),K&&e(Zs,{"aria-live":"polite",children:K}),e(ou,Object.assign({role:"combobox",ref:Q,id:U,type:"text",value:_,onChange:se,placeholder:u,readOnly:f,disabled:g,allowClear:!0,onClear:ie,"aria-expanded":H,"aria-controls":U,"aria-autocomplete":"list","aria-haspopup":"listbox",onBlur:_.length<d?ae:void 0,styleType:"no-border","aria-describedby":Qs(D,Z)},k))]}),renderDropdown:()=>e(r,{children:e(oy,{listboxId:U,listItems:I,onSelectItem:te,onDismiss:oe,valueExtractor:b,listExtractor:v,itemsLoadState:de(),itemTruncationType:"end",itemMaxLines:1,labelDisplayType:"next-line",disableItemFocus:!0,onRetry:()=>J(_),width:S,matchElementWidth:!0})}),onOpen:()=>{!R&&_.length>=d&&V(!0)},onClose:()=>{W(!1),V(!1),ae()},onDismiss:()=>{var e;W(!1),V(!1),ae(),null===(e=Q.current)||void 0===e||e.focus()},clickToToggle:!1,offset:8,alignment:w,fitAvailableHeight:!0,customZIndex:$,rootNode:C})})},Kw=k(eu)`
    position: absolute;
    right: 0;
    padding-left: ${ea["spacing-8"]};
    margin-right: 0;
`,qw=k(Fd)`
    height: 3rem;
`,Zw=r=>{var{selectedOptions:n,placeholders:o={from:"Select",to:"Select"},options:i,disabled:l,className:d,readOnly:c,error:u,"data-testid":f,id:p,enableSearch:g=!1,searchFunction:m,searchPlaceholder:b,valueExtractor:y,valueToStringFunction:x,listExtractor:w,displayValueExtractor:$,onSelectOption:C,onShowOptions:S,onHideOptions:D,onRetry:k,optionsLoadState:F={from:"success",to:"success"},optionTruncationType:_="middle",renderCustomSelectedOption:E,renderListItem:O,renderCustomCallToAction:T,alignment:I,dropdownZIndex:M,dropdownRootNode:A,dropdownWidth:B}=r,z=_e(r,["selectedOptions","placeholders","options","disabled","className","readOnly","error","data-testid","id","enableSearch","searchFunction","searchPlaceholder","valueExtractor","valueToStringFunction","listExtractor","displayValueExtractor","onSelectOption","onShowOptions","onHideOptions","onRetry","optionsLoadState","optionTruncationType","renderCustomSelectedOption","renderListItem","renderCustomCallToAction","alignment","dropdownZIndex","dropdownRootNode","dropdownWidth"]);const[j,R]=s(),[L,P]=s(),[N,H]=s("none"),W="none"!==N,[Y,V]=s(!1),U=a(null),K={from:a(null),to:a(null)},q=a(null),[Z]=s((()=>null!=p?p:tt.generate())),G=`${Z}-range-listbox`;h((()=>{R(null==n?void 0:n.from),P(null==n?void 0:n.to)}),[n]),h((()=>{var e;W&&"to"===N&&(null===(e=q.current)||void 0===e||e.refocus({index:0}))}),[W,N]);const Q=e=>{e||null==D||D(),e&&(null==S||S())},X=e=>{var t,r;const n="from"===e?j:L;if(!n)return"";if($)return $(n);if(y){const e=y(n);return x?x(e):null!==(r=null===(t=null==e?void 0:e.toString)||void 0===t?void 0:t.call(e))&&void 0!==r?r:""}return n.toString()},J=(e,t)=>{var r;if("middle"===_){let n=0;return(null===(r=K[e])||void 0===r?void 0:r.current)&&(n=K[e].current.getBoundingClientRect().width),rt.truncateOneLine(t,n,120,8)}return t},ee=()=>{switch(N){case"from":return"start";case"to":return"end";case"none":return N}},te=v((()=>{var e;return"none"===N?[]:null!==(e=null==i?void 0:i[N])&&void 0!==e?e:[]}),[N,i]),re=v((()=>{if("none"===N)return[];const e="from"===N?j:L;return e?[e]:[]}),[N,j,L]),ne=e=>t=>{t.stopPropagation(),t.preventDefault(),l||c||(H("to"===e&&j?"to":"from"),Q(!0))},oe=(e,t)=>{var r;if("none"!==N){if("from"===N)return R(e),null==C||C({from:e},t),P(void 0),H("to"),void Q(!0);P(e),null==C||C({to:e},t),H("none"),Q(!1),null===(r=U.current)||void 0===r||r.focus(),V(!0)}},ie=()=>{var e;H("none"),Q(!1),null===(e=U.current)||void 0===e||e.focus(),V(!0),j&&L||(R(void 0),P(void 0))},ae=e=>{var t;e.stopPropagation(),e.preventDefault(),R(void 0),P(void 0),null==C||C({from:void 0,to:void 0},void 0),null===(t=U.current)||void 0===t||t.focus(),V(!0)},se=()=>V(!0),le=e=>{Y&&!W&&U.current&&!U.current.contains(e.relatedTarget)&&V(!1)},de=e=>{if(!l&&!c&&!W&&e.currentTarget===e.target)switch(e.key){case"Enter":case" ":case"ArrowDown":e.preventDefault(),H("from"),Q(!0)}},ce=t=>{const r="from"===t?j:L;return r?E?E(r):e(Hs,{$truncateType:_,children:J(t,X(t))}):e(Ws,{$truncateType:_,children:J(t,(null==o?void 0:o[t])||"")})},ue=t=>e(Ns,{onClick:ne(t),ref:K[t],$disabled:l,children:ce(t)});return e(js,Object.assign({id:p},z,{children:e(Av,{children:e(Ks,{enabled:!c&&!l,isOpen:W,renderElement:()=>t(qw,{className:d,"data-testid":f,ref:U,tabIndex:0,onFocus:se,onBlur:le,$focused:Y||W,$disabled:l,$readOnly:c,$error:u,onKeyDown:de,children:[t(Ud,{currentActive:ee(),error:u,children:[ue("from"),ue("to")]}),!W&&j&&L&&!c&&!l&&e(Kw,{onClick:ae,type:"button","aria-label":"Clear",children:e(tu,{"aria-hidden":!0})})]}),renderDropdown:()=>e(oy,{ref:q,"data-testid":`${f}-dropdown`,listboxId:G,listItems:te,onSelectItem:oe,onDismiss:ie,valueExtractor:y,listExtractor:w,selectedItems:re,itemsLoadState:F[N],itemTruncationType:_,onRetry:k,width:B,matchElementWidth:!B,enableSearch:g,searchFunction:m,searchPlaceholder:b,renderListItem:O,renderCustomCallToAction:T}),onOpen:()=>{l||c||"none"===N&&(H("from"),Q(!0))},onClose:()=>{H("none"),Q(!1),j&&L||(R(void 0),P(void 0)),V(!1)},onDismiss:ie,clickToToggle:!1,offset:8,alignment:I,fitAvailableHeight:!0,customZIndex:M,rootNode:A})})}))},Gw=({selectedOption:t,placeholder:r="Select",options:n,disabled:o,error:i,className:l,"data-testid":d,id:c,"aria-labelledby":u,"aria-describedby":f,"aria-invalid":p,enableSearch:g=!1,searchFunction:m,searchPlaceholder:b,valueExtractor:v,valueToStringFunction:y,listExtractor:x,displayValueExtractor:w,onSelectOption:$,onShowOptions:C,onHideOptions:S,onRetry:D,optionsLoadState:k="success",optionTruncationType:F="end",renderCustomSelectedOption:_,renderListItem:E,hideNoResultsDisplay:O,noResultsDescription:T,customLabels:I,renderCustomCallToAction:M,onBlur:A,variant:B="default",readOnly:z,alignment:j,dropdownZIndex:R,dropdownRootNode:L,dropdownWidth:P})=>{const[N,H]=s(t),[W,Y]=s(!1),[V,U]=s(!1),[K]=s((()=>tt.generate())),q=a(null),Z=a(null),G=a(null);h((()=>{H(t)}),[t]);const Q=(e,t)=>{var r;null===(r=Z.current)||void 0===r||r.focus(),H(e),Y(!1),ne(!1),null==$||$(e,t)},X=()=>{W&&(Y(!1),ne(!1))},J=()=>{V||W||U(!0)},ee=e=>{V&&!W&&q.current&&!q.current.contains(e.relatedTarget)&&(U(!1),null==A||A())},te=()=>{var e;if(!N)return"";if(w)return w(N);if(v){const t=v(N);return y?y(t):null!==(e=null==t?void 0:t.toString())&&void 0!==e?e:""}return N.toString()},re=e=>{if("middle"===F){let t=0;return G&&G.current&&(t=G.current.getBoundingClientRect().width),rt.truncateOneLine(e,t,120,8)}return e},ne=e=>{e?null==C||C():null==S||S()};return e(Av,{children:e(Ks,{enabled:!z&&!o,isOpen:W,renderElement:()=>e(kd,{className:l,"data-testid":d,id:c,ref:q,tabIndex:-1,onFocus:J,onBlur:ee,$focused:V,$disabled:o,$readOnly:z,$error:i,children:e(sy,{ref:Z,disabled:o,expanded:W,listboxId:K,popupRole:"listbox",readOnly:z,variant:B,"aria-labelledby":u,"aria-describedby":f,"aria-invalid":p,children:e(Ns,{ref:G,$disabled:o,children:N?_?_(N):e(Hs,{$truncateType:F,$variant:B,children:re(te())}):e(Ws,{$truncateType:F,$variant:B,children:r})})})}),renderDropdown:()=>e(oy,{listboxId:K,listItems:n,onSelectItem:Q,onDismiss:X,valueExtractor:v,listExtractor:x,enableSearch:g,searchPlaceholder:b,searchFunction:m,selectedItems:N?[N]:[],onRetry:D,itemsLoadState:k,itemTruncationType:F,renderListItem:E,hideNoResultsDisplay:O,noResultsDescription:T,customLabels:I,renderCustomCallToAction:M,variant:B,width:P,matchElementWidth:!0}),onOpen:()=>{Y(!0),ne(!0),U(!0)},onClose:e=>{Y(!1),ne(!1),"click"!==e&&(U(!1),null==A||A())},onDismiss:()=>{var e;null===(e=Z.current)||void 0===e||e.focus(),Y(!1),ne(!1)},clickToToggle:!0,offset:8,alignment:j,fitAvailableHeight:!0,customZIndex:R,rootNode:L})})},Qw=k.div`
    overflow: hidden;
    border: ${Ji["width-010"]} ${Ji.solid} ${Gi.border};
    border-radius: ${ta.sm};
    background: ${Gi.bg};
    padding: ${ea["spacing-16"]};
    min-width: 23rem;

    ${oa.MaxWidth.sm} {
        min-width: unset;
        width: calc(100vw - ${na["sm-margin"]}px * 2);
    }

    ${oa.MaxWidth.xs} {
        width: calc(100vw - ${na["xs-margin"]}px * 2);
    }

    ${oa.MaxWidth.xxs} {
        width: calc(100vw - ${na["xxs-margin"]}px * 2);
    }
`,Xw=k.div`
    display: flex;
    align-items: baseline;
`,Jw=k.div`
    margin: 0 0.5rem;
    color: ${Gi.text};
`,e$=k(k.div`
    ${e=>"small"===e.$variant?Qi["body-md-regular"]:Qi["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.$truncateType)return F`
                    ${ba(1)}
                `}}
    overflow: hidden;
`)`
    color: ${Gi["text-subtler"]};
`,t$=r=>{var{alignment:n="left",className:o,disabled:i,dropdownZIndex:l,error:d,histogramSlider:c,id:u,"aria-labelledby":f,"aria-describedby":p,"aria-invalid":g,onBlur:m,onChange:b,onChangeEnd:v,optionTruncationType:y="end",placeholder:x="Select",rangeLabelPrefix:w,rangeLabelSuffix:$,readOnly:C,renderRangeLabel:S,value:D,dropdownRootNode:k}=r,F=_e(r,["alignment","className","disabled","dropdownZIndex","error","histogramSlider","id","aria-labelledby","aria-describedby","aria-invalid","onBlur","onChange","onChangeEnd","optionTruncationType","placeholder","rangeLabelPrefix","rangeLabelSuffix","readOnly","renderRangeLabel","value","dropdownRootNode"]);const{interval:_,bins:E=[],renderEmptyView:O,ariaLabels:T}=c,I=E.map((e=>e.minValue)),M=Math.min(...I),[A,B]=s(Z()),[z,j]=s(!1),[R,L]=s(!1),[P]=s((()=>tt.generate())),N=a(null),H=a(null),W=a(null),Y=F["data-testid"]||"select-histogram";h((()=>{D!==A&&B(Z())}),[D]);const V=e=>{B(e),null==b||b(e)},U=e=>{B(e),null==v||v(e)},K=()=>{R||z||L(!0)},q=e=>{R&&!z&&N.current&&!N.current.contains(e.relatedTarget)&&(L(!1),null==m||m())};function Z(){return null!=D?D:[M,M+_]}const G=e=>S?S(e):t(Sa.BodyBL,{children:[w,e,$]});return e(Av,{children:e(Ks,{enabled:!C&&!i,isOpen:z,renderElement:()=>e(kd,{className:o,"data-testid":Y,id:u,ref:N,tabIndex:-1,onFocus:K,onBlur:q,$focused:R,$disabled:i,$readOnly:C,$error:d,children:e(sy,{ref:H,disabled:i,expanded:z,listboxId:P,popupRole:"dialog",readOnly:C,variant:"default","aria-labelledby":f,"aria-describedby":p,"aria-invalid":g,children:e(Ns,{ref:W,$disabled:i,children:I&&0!==I.length?t(Xw,{children:[G(A[0]),e(Jw,{children:"-"}),G(A[1])]}):e(e$,{$truncateType:y,$variant:"default",children:x})})})}),renderDropdown:({elementWidth:t,styles:r,setFloatingRef:n,getFloatingProps:o})=>e(Qw,Object.assign({style:Object.assign(Object.assign({},r),{width:t}),ref:n},o(),{children:e(Xc,{interval:_,value:A,bins:E,onChange:V,onChangeEnd:U,showRangeLabels:!1,renderEmptyView:O,ariaLabels:T})})),onOpen:()=>{j(!0)},onClose:()=>{j(!1)},onDismiss:()=>{var e;null===(e=H.current)||void 0===e||e.focus(),j(!1)},clickToToggle:!0,offset:8,alignment:n,fitAvailableHeight:!0,customZIndex:l,rootNode:k})})},r$=t=>{var{value:r,ariaLabel:n,onChange:o,onChangeEnd:i}=t,a=_e(t,["value","ariaLabel","onChange","onChangeEnd"]);const[l,d]=s(c());h((()=>{r!==l[0]&&d(c())}),[r]);function c(){return null!=r?[r]:[0]}return e(Uc,Object.assign({},a,{value:l,numOfThumbs:1,onChange:e=>{const[t]=e;d([t]),null==o||o(t)},onChangeEnd:e=>{const[t]=e;d([t]),null==i||i(t)},ariaLabels:n?[n]:void 0}))},n$=k.p`
    text-align: right;
    ${Qi["body-sm-semibold"]}
    color: ${Gi["text-subtler"]};
`,o$=({value:t,maxLength:n,renderCustomCounter:i})=>{const[a,l]=s("");h((()=>{l(d(`${t||""}`))}),[t,n]);const d=e=>{if(i)return i(n,e.toString().length);{const t=n-e.toString().length;return 1===t?`${t} character left`:`${t.toLocaleString()} characters left`}};return e(r,{children:o.isValidElement(a)?a:e(n$,{"data-testid":"counter-label",children:a})})},i$=k.div`
    display: flex;
    flex-direction: column;
`,a$=k.textarea`
    border: ${Ji["width-010"]} ${Ji.solid} ${Gi.border};
    border-radius: ${ta.sm};
    background: ${Gi.bg};
    outline: none;
    overflow: auto;

    display: block;
    padding: ${ea["spacing-12"]} ${ea["spacing-16"]};
    width: 100%;

    ${Qi["body-baseline-regular"]}
    color: ${Gi.text};

    &:focus,
    &:active {
        outline-offset: -1px;
        outline: ${Ji["width-020"]} ${Ji.solid}
            ${Gi["border-focus"]};
    }

    &::placeholder,
    &::-webkit-input-placeholder {
        color: ${Gi["text-subtler"]};
    }

    &::-webkit-scrollbar {
        width: 14px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: ${Gi["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: ${ta.full};
        background-clip: padding-box;
    }

    ${e=>e.readOnly?F`
                border-color: transparent;
                background: transparent !important;
                padding: ${ea["spacing-12"]} 0;

                &:focus,
                &:active {
                    outline-color: ${Gi["border-focus"]};
                }
            `:e.disabled?F`
                background: ${Gi["bg-disabled"]};
                cursor: not-allowed;

                &:focus,
                &:active {
                    outline-color: ${Gi["border-disabled"]};
                }
            `:e.$error?F`
                border-color: ${Gi["border-error"]};

                &:focus,
                &:active {
                    outline-color: ${Gi["border-error-focus"]};
                }
            `:void 0}
`,s$=o.forwardRef(((t,r)=>{var{value:n,disabled:o,error:i,rows:a=5,prefix:l,transformValue:d,onChange:c,maxLength:u}=t,f=_e(t,["value","disabled","error","rows","prefix","transformValue","onChange","maxLength"]);const[p,g]=s(n);h((()=>{g(n)}),[n]);return e(a$,Object.assign({ref:r,disabled:o,value:l?l+(null!=p?p:""):p,onChange:e=>{let t=e.target.value;if(l){t.startsWith(l)||(t=l+t.trimStart()),t.length<l.length&&(t=l);if((e.target.selectionStart||0)<l.length)return void e.preventDefault();const r=t.slice(l.length),n=d?d(r):r;if(g(n),e.target.value=l+n,c){const t=Object.assign(Object.assign({},e),{target:Object.assign(Object.assign({},e.target),{value:n})});c(t)}}else{const r=d?d(null!=t?t:""):t;g(r),e.target.value=r,c&&c(e)}},onKeyDown:e=>{if(!l)return;const{selectionStart:t}=e.currentTarget;"Backspace"===e.key&&t<=l.length&&e.preventDefault(),"ArrowLeft"===e.key&&t<=l.length&&e.preventDefault(),"Home"===e.key&&(e.preventDefault(),requestAnimationFrame((()=>{e.currentTarget.setSelectionRange(l.length,l.length)})))},$error:i,rows:a,maxLength:l&&u?l.length+u:u},f))}));o.forwardRef(((r,n)=>{var{value:o,disabled:i,rows:a=5,onChange:l,transformValue:d,prefix:c,maxLength:u,renderCustomCounter:f}=r,p=_e(r,["value","disabled","rows","onChange","transformValue","prefix","maxLength","renderCustomCounter"]);const[g,m]=s(o);h((()=>{m(o)}),[o]);return t(i$,{children:[e(s$,Object.assign({ref:n,disabled:i,value:g,rows:a||5,onChange:e=>{const t=e.target.value;m(t),l&&l(e)},prefix:c,transformValue:d,maxLength:u},p)),u&&e(o$,{value:g,maxLength:u,renderCustomCounter:f})]})}));const l$=k.div`
    display: flex;
    justify-content: flex-end;
    margin-top: ${ea["spacing-4"]};
`,d$=k.div`
    display: flex;
    flex: 1;
    margin-right: ${ea["spacing-12"]};
    gap: ${ea["spacing-4"]};
`,c$=k(ys)`
    margin-top: 0;
`,u$=o.forwardRef(((n,o)=>{const{label:i,value:a,errorMessage:l,id:d="form-textarea","data-error-testid":c,"data-testid":u,onChange:f,layoutType:p,mobileCols:g,tabletCols:m,desktopCols:b,xxsCols:v,xsCols:y,smCols:x,mdCols:w,lgCols:$,xlCols:C,xxlCols:S,transformValue:D,prefix:k=""}=n,F=_e(n,["label","value","errorMessage","id","data-error-testid","data-testid","onChange","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","transformValue","prefix"]),[_,E]=s(a);h((()=>{E(a)}),[a]);return t(Bs,{id:d,label:i,disabled:F.disabled,layoutType:p,mobileCols:g,tabletCols:m,desktopCols:b,xxsCols:v,xsCols:y,smCols:x,mdCols:w,lgCols:$,xlCols:C,xxlCols:S,children:[e(s$,Object.assign({id:`${d}-base`,"data-testid":u||d,value:_,error:!!l,onChange:e=>{const t=e.target.value;E(t),f&&f(e)},ref:o,prefix:k,transformValue:D},F)),l||F.maxLength?t(l$,{children:[l&&t(d$,{children:[e(bs,{"aria-hidden":!0}),e(c$,{"data-testid":c||(d?`${d}-error-message`:"error-message"),children:l})]}),F.maxLength&&e(o$,{value:_,maxLength:F.maxLength,renderCustomCounter:F.renderCustomCounter})]}):e(r,{})]})})),h$=k.div`
    position: relative;
`,f$=k(Fd)`
    height: 3rem;
    gap: ${ea["spacing-8"]};
`,p$=k(_d)`
    display: block;
    width: 100%;
    flex: 1;
`;var g$,m$;!function(e){e.AM="AM",e.PM="PM"}(g$||(g$={})),function(e){e.roundToNearestInterval=(e,t,r)=>{const[n,o]=e.split(":"),i=parseInt(n,10),a=parseInt(o,10);if(isNaN(i)||isNaN(a)||a<0||a>=60)throw new Error("Invalid time format");const s=60*i+a,l=s%t,d=0===l?s:r?s+(t-l):s-l,c=d%60;return`${Math.floor(d/60).toString().padStart(2,"0")}:${c.toString().padStart(2,"0")}`},e.generateHourlyIntervals=(e,t,r="ha")=>{const n="HH:mm";let o=Me(e,n),i=Me(t,n);o.isSame(i)&&(i=i.add(1,"day"));const a=[];for(;o.isBefore(i);)a.push(o.format(r)),o=o.add(1,"hour");return a},e.getTimeValues=(e,t)=>{const r={hour:"",minute:"",period:g$.AM};if(!t)return r;try{if("24hr"===e){const n=x$(t,e);r.minute=rt.padValue(n.minute);const o=parseInt(n.hour);0===Math.floor(o/12)?(r.period=g$.AM,r.hour=0===o?"12":rt.padValue(o.toString())):(r.period=g$.PM,r.hour=12===o?o.toString():rt.padValue((o-12).toString()))}else{const{hour:n,minute:o,period:i=""}=x$(t,e);r.hour=rt.padValue(n),r.minute=rt.padValue(o),r.period="am"===i.toLowerCase()?g$.AM:g$.PM}return r}catch(e){return r}},e.updateMinutes=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?rt.padValue("0"):"55";const n=Math.floor(r/5),o=(("add"===t?n+1:r%5==0?n-1:n)%12+12)%12;return rt.padValue((5*o).toString())},e.updateHours=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?rt.padValue("1"):"12";const n="add"===t?r+1:r-1;return n<=12&&n>0?rt.padValue(n.toString()):13===n?rt.padValue("1"):"12"},e.convertTo24HourFormat=e=>{const t=parseInt(e.hour);let r;return r=e.period===g$.PM?12===t?t.toString():(t+12).toString():12===t?"00":e.hour,`${r}:${e.minute}`},e.convertHourTo12HourFormat=e=>{const t=parseInt(e),r=t%12==0?12..toString():(t%12).toString();return rt.padValue(r)},e.formatDisplayValue=(e,t)=>{try{const{hour:r,minute:n,period:o=""}=x$(e,t),i=rt.padValue(r);let a=`${i}:${rt.padValue(n)}`;return"12hr"===t?(a+=o.toLowerCase(),a):a}catch(e){return""}},e.toMinutesSeconds=e=>({minutes:Math.floor(e/60),seconds:e%60}),e.to24Hour=e=>{if((null==e?void 0:e.includes("am"))||(null==e?void 0:e.includes("pm"))){const[t,r]=e.split(/(am|pm)/i),[n,o]=t.split(":").map(Number);let i=n;return"pm"===r&&i<12&&(i+=12),"am"===r&&12===i&&(i=0),w$(i,o)}return e},e.generateTimings=(t,r="12hr",n,o)=>{const i=[];let a=0,s=1440-t;for(n&&(a=e.timeToMinutes(n)),o&&(s=e.timeToMinutes(o));a<=s;){let e=Math.floor(a/60);const n=a%60;if("12hr"===r){const t=e>=12?"pm":"am";e%=12,e=e||12;const r=w$(e,n,t);i.push(r)}else{const t=w$(e,n);i.push(t)}a+=t}return i},e.parseInput=(e,t="12hr")=>{if(""===e||void 0===e)return e;const r=e.trim().toLowerCase(),n=/^(?:(\d{1,2})([:.])?(\d{2})?)?(a|p|am|pm)?$/.exec(r);if(!n)return;let o=parseInt(n[1]||"0",10);const i=parseInt(n[3]||"0",10);let a=n[4];if(void 0===n[1]||o>24||i>59)return;if("a"===a?a="am":"p"===a&&(a="pm"),"24hr"===t)return"pm"===a&&o<12?o+=12:("am"===a&&12===o||24===o)&&(o=0),w$(o,i);a?0===o||24===o?(a="am",o=12):o>12&&(a="pm",o-=12):(a=0===o||24===o||o>6&&o<12?"am":"pm",o=o%12||12);return w$(o,i,a)},e.findClosestFlooredTime=(t,r)=>{if(!t)return t;const n=e.timeToMinutes(t);let o="",i=1/0;for(const t of r){const r=e.timeToMinutes(t)-n;if(r<=0&&Math.abs(r)<i)i=Math.abs(r),o=t;else if(r>0)break}return o},e.timeToMinutes=e=>{const[t,r]=e.toLowerCase().split(/(am|pm)/),[n,o]=t.split(":").map(Number);let i=n;return"pm"===r&&12!==i&&(i+=12),"am"===r&&12===i&&(i=0),60*i+o},e.calculateDuration=(t,r)=>{const n=e.timeToMinutes(t);return e.timeToMinutes(r)-n},e.calculateScrollPosition=t=>{const{scrollTime:r,minTime:n,maxTime:o,interval:i,intervalWidth:a,options:s}=t;try{if(!/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(r))return console.warn(`Invalid scrollTime format: "${r}". Expected format: HH:mm.`),null;const t=(null==s?void 0:s.roundToInterval)?e.roundToNearestInterval(r,i):r,[l,d]=b$(t);if(isNaN(l)||isNaN(d))return console.warn(`Invalid scrollTime: "${r}".`),null;const c=60*l+d,[u,h]=b$(n),f=60*u+h,[p,g]=b$(o);(c<f||c>60*p+g)&&console.warn(`scrollTime "${r}" is outside the range (${n} - ${o}).`);return(c-f)/i*a}catch(e){return console.warn(`Error processing scrollTime: "${r}".`,e),null}}}(m$||(m$={}));const b$=e=>e.split(":").map(Number),v$=(e,t)=>{const r=parseInt(e);return"24hr"===t?r>=0&&r<=23:r>=1&&r<=12},y$=e=>{const t=parseInt(e);return t>=0&&t<=59},x$=(e,t)=>{const r=e?e.split(":"):[],n=new Error("Invalid format");if("12hr"===t){if(2!==r.length||4!==r[1].length)throw n;const e=r[1].substring(0,2),i=r[1].substring(2);if(!v$(r[0],t)||!y$(e)||"am"!==(o=i).toLowerCase()&&"pm"!==o.toLowerCase())throw n;return{hour:r[0],minute:e,period:r[1].substring(2)}}if(2!==r.length)throw n;if(!v$(r[0],t)||!y$(r[1]))throw n;return{hour:r[0],minute:r[1]};var o},w$=(e,t,r)=>r?`${e}:${t.toString().padStart(2,"0")}${r}`:`${e.toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}`;var $$=R$(),C$=e=>A$(e,$$),S$=R$();C$.write=e=>A$(e,S$);var D$=R$();C$.onStart=e=>A$(e,D$);var k$=R$();C$.onFrame=e=>A$(e,k$);var F$=R$();C$.onFinish=e=>A$(e,F$);var _$=[];C$.setTimeout=(e,t)=>{const r=C$.now()+t,n=()=>{const e=_$.findIndex((e=>e.cancel==n));~e&&_$.splice(e,1),I$-=~e?1:0},o={time:r,handler:e,cancel:n};return _$.splice(E$(r),0,o),I$+=1,B$(),o};var E$=e=>~(~_$.findIndex((t=>t.time>e))||~_$.length);C$.cancel=e=>{D$.delete(e),k$.delete(e),F$.delete(e),$$.delete(e),S$.delete(e)},C$.sync=e=>{M$=!0,C$.batchedUpdates(e),M$=!1},C$.throttle=e=>{let t;function r(){try{e(...t)}finally{t=null}}function n(...e){t=e,C$.onStart(r)}return n.handler=e,n.cancel=()=>{D$.delete(r),t=null},n};var O$="undefined"!=typeof window?window.requestAnimationFrame:()=>{};C$.use=e=>O$=e,C$.now="undefined"!=typeof performance?()=>performance.now():Date.now,C$.batchedUpdates=e=>e(),C$.catch=console.error,C$.frameLoop="always",C$.advance=()=>{"demand"!==C$.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):j$()};var T$=-1,I$=0,M$=!1;function A$(e,t){M$?(t.delete(e),e(0)):(t.add(e),B$())}function B$(){T$<0&&(T$=0,"demand"!==C$.frameLoop&&O$(z$))}function z$(){~T$&&(O$(z$),C$.batchedUpdates(j$))}function j$(){const e=T$;T$=C$.now();const t=E$(T$);t&&(L$(_$.splice(0,t),(e=>e.handler())),I$-=t),I$?(D$.flush(),$$.flush(e?Math.min(64,T$-e):16.667),k$.flush(),S$.flush(),F$.flush()):T$=-1}function R$(){let e=new Set,t=e;return{add(r){I$+=t!=e||e.has(r)?0:1,e.add(r)},delete:r=>(I$-=t==e&&e.has(r)?1:0,e.delete(r)),flush(r){t.size&&(e=new Set,I$-=t.size,L$(t,(t=>t(r)&&e.add(t))),I$+=e.size,t=e)}}}function L$(e,t){e.forEach((e=>{try{t(e)}catch(e){C$.catch(e)}}))}var P$=Object.defineProperty,N$={};function H$(){}((e,t)=>{for(var r in t)P$(e,r,{get:t[r],enumerable:!0})})(N$,{assign:()=>rC,colors:()=>J$,createStringInterpolator:()=>Z$,skipAnimation:()=>eC,to:()=>G$,willAdvance:()=>tC});var W$={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function Y$(e,t){if(W$.arr(e)){if(!W$.arr(t)||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}return e===t}var V$=(e,t)=>e.forEach(t);function U$(e,t,r){if(W$.arr(e))for(let n=0;n<e.length;n++)t.call(r,e[n],`${n}`);else for(const n in e)e.hasOwnProperty(n)&&t.call(r,e[n],n)}var K$=e=>W$.und(e)?[]:W$.arr(e)?e:[e];function q$(e,t){if(e.size){const r=Array.from(e);e.clear(),V$(r,t)}}var Z$,G$,Q$=(e,...t)=>q$(e,(e=>e(...t))),X$=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),J$=null,eC=!1,tC=H$,rC=e=>{e.to&&(G$=e.to),e.now&&(C$.now=e.now),void 0!==e.colors&&(J$=e.colors),null!=e.skipAnimation&&(eC=e.skipAnimation),e.createStringInterpolator&&(Z$=e.createStringInterpolator),e.requestAnimationFrame&&C$.use(e.requestAnimationFrame),e.batchedUpdates&&(C$.batchedUpdates=e.batchedUpdates),e.willAdvance&&(tC=e.willAdvance),e.frameLoop&&(C$.frameLoop=e.frameLoop)},nC=new Set,oC=[],iC=[],aC=0,sC={get idle(){return!nC.size&&!oC.length},start(e){aC>e.priority?(nC.add(e),C$.onStart(lC)):(dC(e),C$(uC))},advance:uC,sort(e){if(aC)C$.onFrame((()=>sC.sort(e)));else{const t=oC.indexOf(e);~t&&(oC.splice(t,1),cC(e))}},clear(){oC=[],nC.clear()}};function lC(){nC.forEach(dC),nC.clear(),C$(uC)}function dC(e){oC.includes(e)||cC(e)}function cC(e){oC.splice(function(e,t){const r=e.findIndex(t);return r<0?e.length:r}(oC,(t=>t.priority>e.priority)),0,e)}function uC(e){const t=iC;for(let r=0;r<oC.length;r++){const n=oC[r];aC=n.priority,n.idle||(tC(n),n.advance(e),n.idle||t.push(n))}return aC=0,(iC=oC).length=0,(oC=t).length>0}var hC="[-+]?\\d*\\.?\\d+",fC=hC+"%";function pC(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var gC=new RegExp("rgb"+pC(hC,hC,hC)),mC=new RegExp("rgba"+pC(hC,hC,hC,hC)),bC=new RegExp("hsl"+pC(hC,fC,fC)),vC=new RegExp("hsla"+pC(hC,fC,fC,hC)),yC=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,xC=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,wC=/^#([0-9a-fA-F]{6})$/,$C=/^#([0-9a-fA-F]{8})$/;function CC(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function SC(e,t,r){const n=r<.5?r*(1+t):r+t-r*t,o=2*r-n,i=CC(o,n,e+1/3),a=CC(o,n,e),s=CC(o,n,e-1/3);return Math.round(255*i)<<24|Math.round(255*a)<<16|Math.round(255*s)<<8}function DC(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function kC(e){return(parseFloat(e)%360+360)%360/360}function FC(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function _C(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function EC(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=wC.exec(e))?parseInt(t[1]+"ff",16)>>>0:J$&&void 0!==J$[e]?J$[e]:(t=gC.exec(e))?(DC(t[1])<<24|DC(t[2])<<16|DC(t[3])<<8|255)>>>0:(t=mC.exec(e))?(DC(t[1])<<24|DC(t[2])<<16|DC(t[3])<<8|FC(t[4]))>>>0:(t=yC.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=$C.exec(e))?parseInt(t[1],16)>>>0:(t=xC.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=bC.exec(e))?(255|SC(kC(t[1]),_C(t[2]),_C(t[3])))>>>0:(t=vC.exec(e))?(SC(kC(t[1]),_C(t[2]),_C(t[3]))|FC(t[4]))>>>0:null}(e);if(null===t)return e;t=t||0;return`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`}var OC=(e,t,r)=>{if(W$.fun(e))return e;if(W$.arr(e))return OC({range:e,output:t,extrapolate:r});if(W$.str(e.output[0]))return Z$(e);const n=e,o=n.output,i=n.range||[0,1],a=n.extrapolateLeft||n.extrapolate||"extend",s=n.extrapolateRight||n.extrapolate||"extend",l=n.easing||(e=>e);return e=>{const t=function(e,t){for(var r=1;r<t.length-1&&!(t[r]>=e);++r);return r-1}(e,i);return function(e,t,r,n,o,i,a,s,l){let d=l?l(e):e;if(d<t){if("identity"===a)return d;"clamp"===a&&(d=t)}if(d>r){if("identity"===s)return d;"clamp"===s&&(d=r)}if(n===o)return n;if(t===r)return e<=t?n:o;t===-1/0?d=-d:r===1/0?d-=t:d=(d-t)/(r-t);d=i(d),n===-1/0?d=-d:o===1/0?d+=n:d=d*(o-n)+n;return d}(e,i[t],i[t+1],o[t],o[t+1],l,a,s,n.map)}};var TC=1.70158,IC=1.525*TC,MC=TC+1,AC=2*Math.PI/3,BC=2*Math.PI/4.5,zC=e=>{const t=7.5625,r=2.75;return e<1/r?t*e*e:e<2/r?t*(e-=1.5/r)*e+.75:e<2.5/r?t*(e-=2.25/r)*e+.9375:t*(e-=2.625/r)*e+.984375},jC={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>MC*e*e*e-TC*e*e,easeOutBack:e=>1+MC*Math.pow(e-1,3)+TC*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-IC)/2:(Math.pow(2*e-2,2)*((IC+1)*(2*e-2)+IC)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*AC),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*AC)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*BC)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*BC)/2+1,easeInBounce:e=>1-zC(1-e),easeOutBounce:zC,easeInOutBounce:e=>e<.5?(1-zC(1-2*e))/2:(1+zC(2*e-1))/2,steps:(e,t="end")=>r=>{const n=(r="end"===t?Math.min(r,.999):Math.max(r,.001))*e,o="end"===t?Math.floor(n):Math.ceil(n);return i=0,a=1,s=o/e,Math.min(Math.max(s,i),a);var i,a,s}},RC=Symbol.for("FluidValue.get"),LC=Symbol.for("FluidValue.observers"),PC=e=>Boolean(e&&e[RC]),NC=e=>e&&e[RC]?e[RC]():e,HC=e=>e[LC]||null;function WC(e,t){const r=e[LC];r&&r.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}var YC=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");VC(this,e)}},VC=(e,t)=>ZC(e,RC,t);function UC(e,t){if(e[RC]){let r=e[LC];r||ZC(e,LC,r=new Set),r.has(t)||(r.add(t),e.observerAdded&&e.observerAdded(r.size,t))}return t}function KC(e,t){const r=e[LC];if(r&&r.has(t)){const n=r.size-1;n?r.delete(t):e[LC]=null,e.observerRemoved&&e.observerRemoved(n,t)}}var qC,ZC=(e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}),GC=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,QC=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,XC=new RegExp(`(${GC.source})(%|[a-z]+)`,"i"),JC=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,eS=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,tS=e=>{const[t,r]=rS(e);if(!t||X$())return e;const n=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(n)return n.trim();if(r&&r.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(r);return t||e}return r&&eS.test(r)?tS(r):r||e},rS=e=>{const t=eS.exec(e);if(!t)return[,];const[,r,n]=t;return[r,n]},nS=(e,t,r,n,o)=>`rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${o})`,oS=e=>{qC||(qC=J$?new RegExp(`(${Object.keys(J$).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>NC(e).replace(eS,tS).replace(QC,EC).replace(qC,EC))),r=t.map((e=>e.match(GC).map(Number))),n=r[0].map(((e,t)=>r.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))),o=n.map((t=>OC({...e,output:t})));return e=>{const r=!XC.test(t[0])&&t.find((e=>XC.test(e)))?.replace(GC,"");let n=0;return t[0].replace(GC,(()=>`${o[n++](e)}${r||""}`)).replace(JC,nS)}},iS="react-spring: ",aS=e=>{const t=e;let r=!1;if("function"!=typeof t)throw new TypeError(`${iS}once requires a function parameter`);return(...e)=>{r||(t(...e),r=!0)}},sS=aS(console.warn);var lS=aS(console.warn);function dS(e){return W$.str(e)&&("#"==e[0]||/\d/.test(e)||!X$()&&eS.test(e)||e in(J$||{}))}var cS=X$()?h:f;function uS(){const e=s()[1],t=(()=>{const e=a(!1);return cS((()=>(e.current=!0,()=>{e.current=!1})),[]),e})();return()=>{t.current&&e(Math.random())}}var hS=e=>h(e,fS),fS=[];function pS(e){const t=a(void 0);return h((()=>{t.current=e})),t.current}var gS=Symbol.for("Animated:node"),mS=e=>e&&e[gS],bS=(e,t)=>((e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}))(e,gS,t),vS=e=>e&&e[gS]&&e[gS].getPayload(),yS=class{constructor(){bS(this,this)}getPayload(){return this.payload||[]}},xS=class e extends yS{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,W$.num(this._value)&&(this.lastPosition=this._value)}static create(t){return new e(t)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return W$.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,W$.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},wS=class e extends xS{constructor(e){super(0),this._string=null,this._toString=OC({output:[e,e]})}static create(t){return new e(t)}getValue(){const e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(W$.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=OC({output:[this.getValue(),e]})),this._value=0,super.reset()}},$S={dependencies:null},CS=class extends yS{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return U$(this.source,((r,n)=>{var o;(o=r)&&o[gS]===o?t[n]=r.getValue(e):PC(r)?t[n]=NC(r):e||(t[n]=r)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&V$(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return U$(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){$S.dependencies&&PC(e)&&$S.dependencies.add(e);const t=vS(e);t&&V$(t,(e=>this.add(e)))}},SS=class e extends CS{constructor(e){super(e)}static create(t){return new e(t)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,r)=>t.setValue(e[r]))).some(Boolean):(super.setValue(e.map(DS)),!0)}};function DS(e){return(dS(e)?wS:xS).create(e)}function kS(e){const t=mS(e);return t?t.constructor:W$.arr(e)?SS:dS(e)?wS:xS}var FS=(e,t)=>{const r=!W$.fun(e)||e.prototype&&e.prototype.isReactComponent;return S(((o,i)=>{const s=a(null),l=r&&p((e=>{s.current=function(e,t){e&&(W$.fun(e)?e(t):e.current=t);return t}(i,e)}),[i]),[d,c]=function(e,t){const r=new Set;$S.dependencies=r,e.style&&(e={...e,style:t.createAnimatedStyle(e.style)});return e=new CS(e),$S.dependencies=null,[e,r]}(o,t),u=uS(),f=()=>{const e=s.current;if(r&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,d.getValue(!0)))&&u()},g=new _S(f,c),m=a(void 0);cS((()=>(m.current=g,V$(c,(e=>UC(e,g))),()=>{m.current&&(V$(m.current.deps,(e=>KC(e,m.current))),C$.cancel(m.current.update))}))),h(f,[]),hS((()=>()=>{const e=m.current;V$(e.deps,(t=>KC(t,e)))}));const b=t.getComponentProps(d.getValue());return n.createElement(e,{...b,ref:l})}))},_S=class{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&C$.write(this.update)}};var ES=Symbol.for("AnimatedComponent"),OS=e=>W$.str(e)?e:e&&W$.str(e.displayName)?e.displayName:W$.fun(e)&&e.name||null;function TS(e,...t){return W$.fun(e)?e(...t):e}var IS=(e,t)=>!0===e||!!(t&&e&&(W$.fun(e)?e(t):K$(e).includes(t))),MS=(e,t)=>W$.obj(e)?t&&e[t]:e,AS=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,BS=e=>e,zS=(e,t=BS)=>{let r=jS;e.default&&!0!==e.default&&(e=e.default,r=Object.keys(e));const n={};for(const o of r){const r=t(e[o],o);W$.und(r)||(n[o]=r)}return n},jS=["config","onProps","onStart","onChange","onPause","onResume","onRest"],RS={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function LS(e){const t=function(e){const t={};let r=0;if(U$(e,((e,n)=>{RS[n]||(t[n]=e,r++)})),r)return t}(e);if(t){const r={to:t};return U$(e,((e,n)=>n in t||(r[n]=e))),r}return{...e}}function PS(e){return e=NC(e),W$.arr(e)?e.map(PS):dS(e)?N$.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function NS(e){return W$.fun(e)||W$.arr(e)&&W$.obj(e[0])}var HS={tension:170,friction:26,mass:1,damping:1,easing:jC.linear,clamp:!1},WS=class{constructor(){this.velocity=0,Object.assign(this,HS)}};function YS(e,t){if(W$.und(t.decay)){const r=!W$.und(t.tension)||!W$.und(t.friction);!r&&W$.und(t.frequency)&&W$.und(t.damping)&&W$.und(t.mass)||(e.duration=void 0,e.decay=void 0),r&&(e.frequency=void 0)}else e.duration=void 0}var VS=[],US=class{constructor(){this.changed=!1,this.values=VS,this.toValues=null,this.fromValues=VS,this.config=new WS,this.immediate=!1}};function KS(e,{key:t,props:r,defaultProps:n,state:o,actions:i}){return new Promise(((a,s)=>{let l,d,c=IS(r.cancel??n?.cancel,t);if(c)f();else{W$.und(r.pause)||(o.paused=IS(r.pause,t));let e=n?.pause;!0!==e&&(e=o.paused||IS(e,t)),l=TS(r.delay||0,t),e?(o.resumeQueue.add(h),i.pause()):(i.resume(),h())}function u(){o.resumeQueue.add(h),o.timeouts.delete(d),d.cancel(),l=d.time-C$.now()}function h(){l>0&&!N$.skipAnimation?(o.delayed=!0,d=C$.setTimeout(f,l),o.pauseQueue.add(u),o.timeouts.add(d)):f()}function f(){o.delayed&&(o.delayed=!1),o.pauseQueue.delete(u),o.timeouts.delete(d),e<=(o.cancelId||0)&&(c=!0);try{i.start({...r,callId:e,cancel:c},a)}catch(e){s(e)}}}))}var qS=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?QS(e.get()):t.every((e=>e.noop))?ZS(e.get()):GS(e.get(),t.every((e=>e.finished))),ZS=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),GS=(e,t,r=!1)=>({value:e,finished:t,cancelled:r}),QS=e=>({value:e,cancelled:!0,finished:!1});function XS(e,t,r,n){const{callId:o,parentId:i,onRest:a}=t,{asyncTo:s,promise:l}=r;return i||e!==s||t.reset?r.promise=(async()=>{r.asyncId=o,r.asyncTo=e;const d=zS(t,((e,t)=>"onRest"===t?void 0:e));let c,u;const h=new Promise(((e,t)=>(c=e,u=t))),f=e=>{const t=o<=(r.cancelId||0)&&QS(n)||o!==r.asyncId&&GS(n,!1);if(t)throw e.result=t,u(e),e},p=(e,t)=>{const i=new eD,a=new tD;return(async()=>{if(N$.skipAnimation)throw JS(r),a.result=GS(n,!1),u(a),a;f(i);const s=W$.obj(e)?{...e}:{...t,to:e};s.parentId=o,U$(d,((e,t)=>{W$.und(s[t])&&(s[t]=e)}));const l=await n.start(s);return f(i),r.paused&&await new Promise((e=>{r.resumeQueue.add(e)})),l})()};let g;if(N$.skipAnimation)return JS(r),GS(n,!1);try{let t;t=W$.arr(e)?(async e=>{for(const t of e)await p(t)})(e):Promise.resolve(e(p,n.stop.bind(n))),await Promise.all([t.then(c),h]),g=GS(n.get(),!0,!1)}catch(e){if(e instanceof eD)g=e.result;else{if(!(e instanceof tD))throw e;g=e.result}}finally{o==r.asyncId&&(r.asyncId=i,r.asyncTo=i?s:void 0,r.promise=i?l:void 0)}return W$.fun(a)&&C$.batchedUpdates((()=>{a(g,n,n.item)})),g})():l}function JS(e,t){q$(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}var eD=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},tD=class extends Error{constructor(){super("SkipAnimationSignal")}},rD=e=>e instanceof oD,nD=1,oD=class extends YC{constructor(){super(...arguments),this.id=nD++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=mS(this);return e&&e.getValue()}to(...e){return N$.to(this,e)}interpolate(...e){return sS(`${iS}The "interpolate" function is deprecated in v9 (use "to" instead)`),N$.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){WC(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||sC.sort(this),WC(this,{type:"priority",parent:this,priority:e})}},iD=Symbol.for("SpringPhase"),aD=e=>(1&e[iD])>0,sD=e=>(2&e[iD])>0,lD=e=>(4&e[iD])>0,dD=(e,t)=>t?e[iD]|=3:e[iD]&=-3,cD=(e,t)=>t?e[iD]|=4:e[iD]&=-5,uD=class extends oD{constructor(e,t){if(super(),this.animation=new US,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!W$.und(e)||!W$.und(t)){const r=W$.obj(e)?{...e}:{...t,from:e};W$.und(r.default)&&(r.default=!0),this.start(r)}}get idle(){return!(sD(this)||this._state.asyncTo)||lD(this)}get goal(){return NC(this.animation.to)}get velocity(){const e=mS(this);return e instanceof xS?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return aD(this)}get isAnimating(){return sD(this)}get isPaused(){return lD(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,r=!1;const n=this.animation;let{toValues:o}=n;const{config:i}=n,a=vS(n.to);!a&&PC(n.to)&&(o=K$(NC(n.to))),n.values.forEach(((s,l)=>{if(s.done)return;const d=s.constructor==wS?1:a?a[l].lastPosition:o[l];let c=n.immediate,u=d;if(!c){if(u=s.lastPosition,i.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const r=n.fromValues[l],o=null!=s.v0?s.v0:s.v0=W$.arr(i.velocity)?i.velocity[l]:i.velocity;let a;const h=i.precision||(r==d?.005:Math.min(1,.001*Math.abs(d-r)));if(W$.und(i.duration))if(i.decay){const e=!0===i.decay?.998:i.decay,n=Math.exp(-(1-e)*t);u=r+o/(1-e)*(1-n),c=Math.abs(s.lastPosition-u)<=h,a=o*n}else{a=null==s.lastVelocity?o:s.lastVelocity;const t=i.restVelocity||h/10,n=i.clamp?0:i.bounce,l=!W$.und(n),f=r==d?s.v0>0:r<d;let p,g=!1;const m=1,b=Math.ceil(e/m);for(let e=0;e<b&&(p=Math.abs(a)>t,p||(c=Math.abs(d-u)<=h,!c));++e){l&&(g=u==d||u>d==f,g&&(a=-a*n,u=d));a+=(1e-6*-i.tension*(u-d)+.001*-i.friction*a)/i.mass*m,u+=a*m}}else{let n=1;i.duration>0&&(this._memoizedDuration!==i.duration&&(this._memoizedDuration=i.duration,s.durationProgress>0&&(s.elapsedTime=i.duration*s.durationProgress,t=s.elapsedTime+=e)),n=(i.progress||0)+t/this._memoizedDuration,n=n>1?1:n<0?0:n,s.durationProgress=n),u=r+i.easing(n)*(d-r),a=(u-s.lastPosition)/e,c=1==n}s.lastVelocity=a,Number.isNaN(u)&&(console.warn("Got NaN while animating:",this),c=!0)}a&&!a[l].done&&(c=!1),c?s.done=!0:t=!1,s.setValue(u,i.round)&&(r=!0)}));const s=mS(this),l=s.getValue();if(t){const e=NC(n.to);l===e&&!r||i.decay?r&&i.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else r&&this._onChange(l)}set(e){return C$.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(sD(this)){const{to:e,config:t}=this.animation;C$.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let r;return W$.und(e)?(r=this.queue||[],this.queue=[]):r=[W$.obj(e)?e:{...t,to:e}],Promise.all(r.map((e=>this._update(e)))).then((e=>qS(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),JS(this._state,e&&this._lastCallId),C$.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:r,from:n}=e;r=W$.obj(r)?r[t]:r,(null==r||NS(r))&&(r=void 0),n=W$.obj(n)?n[t]:n,null==n&&(n=void 0);const o={to:r,from:n};return aD(this)||(e.reverse&&([r,n]=[n,r]),n=NC(n),W$.und(n)?mS(this)||this._set(r):this._set(n)),o}_update({...e},t){const{key:r,defaultProps:n}=this;e.default&&Object.assign(n,zS(e,((e,t)=>/^on/.test(t)?MS(e,r):e))),vD(this,e,"onProps"),yD(this,"onProps",e,this);const o=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const i=this._state;return KS(++this._lastCallId,{key:r,props:e,defaultProps:n,state:i,actions:{pause:()=>{lD(this)||(cD(this,!0),Q$(i.pauseQueue),yD(this,"onPause",GS(this,hD(this,this.animation.to)),this))},resume:()=>{lD(this)&&(cD(this,!1),sD(this)&&this._resume(),Q$(i.resumeQueue),yD(this,"onResume",GS(this,hD(this,this.animation.to)),this))},start:this._merge.bind(this,o)}}).then((r=>{if(e.loop&&r.finished&&(!t||!r.noop)){const t=fD(e);if(t)return this._update(t,!0)}return r}))}_merge(e,t,r){if(t.cancel)return this.stop(!0),r(QS(this));const n=!W$.und(e.to),o=!W$.und(e.from);if(n||o){if(!(t.callId>this._lastToId))return r(QS(this));this._lastToId=t.callId}const{key:i,defaultProps:a,animation:s}=this,{to:l,from:d}=s;let{to:c=l,from:u=d}=e;!o||n||t.default&&!W$.und(c)||(c=u),t.reverse&&([c,u]=[u,c]);const h=!Y$(u,d);h&&(s.from=u),u=NC(u);const f=!Y$(c,l);f&&this._focus(c);const p=NS(t.to),{config:g}=s,{decay:m,velocity:b}=g;(n||o)&&(g.velocity=0),t.config&&!p&&function(e,t,r){r&&(YS(r={...r},t),t={...r,...t}),YS(e,t),Object.assign(e,t);for(const t in HS)null==e[t]&&(e[t]=HS[t]);let{frequency:n,damping:o}=e;const{mass:i}=e;W$.und(n)||(n<.01&&(n=.01),o<0&&(o=0),e.tension=Math.pow(2*Math.PI/n,2)*i,e.friction=4*Math.PI*o*i/n)}(g,TS(t.config,i),t.config!==a.config?TS(a.config,i):void 0);let v=mS(this);if(!v||W$.und(c))return r(GS(this,!0));const y=W$.und(t.reset)?o&&!t.default:!W$.und(u)&&IS(t.reset,i),x=y?u:this.get(),w=PS(c),$=W$.num(w)||W$.arr(w)||dS(w),C=!p&&(!$||IS(a.immediate||t.immediate,i));if(f){const e=kS(c);if(e!==v.constructor){if(!C)throw Error(`Cannot animate between ${v.constructor.name} and ${e.name}, as the "to" prop suggests`);v=this._set(w)}}const S=v.constructor;let D=PC(c),k=!1;if(!D){const e=y||!aD(this)&&h;(f||e)&&(k=Y$(PS(x),w),D=!k),(Y$(s.immediate,C)||C)&&Y$(g.decay,m)&&Y$(g.velocity,b)||(D=!0)}if(k&&sD(this)&&(s.changed&&!y?D=!0:D||this._stop(l)),!p&&((D||PC(l))&&(s.values=v.getPayload(),s.toValues=PC(c)?null:S==wS?[1]:K$(w)),s.immediate!=C&&(s.immediate=C,C||y||this._set(l)),D)){const{onRest:e}=s;V$(bD,(e=>vD(this,t,e)));const n=GS(this,hD(this,l));Q$(this._pendingCalls,n),this._pendingCalls.add(r),s.changed&&C$.batchedUpdates((()=>{s.changed=!y,e?.(n,this),y?TS(a.onRest,n):s.onStart?.(n,this)}))}y&&this._set(x),p?r(XS(t.to,t,this._state,this)):D?this._start():sD(this)&&!f?this._pendingCalls.add(r):r(ZS(x))}_focus(e){const t=this.animation;e!==t.to&&(HC(this)&&this._detach(),t.to=e,HC(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;PC(t)&&(UC(t,this),rD(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;PC(e)&&KC(e,this)}_set(e,t=!0){const r=NC(e);if(!W$.und(r)){const e=mS(this);if(!e||!Y$(r,e.getValue())){const n=kS(r);e&&e.constructor==n?e.setValue(r):bS(this,n.create(r)),e&&C$.batchedUpdates((()=>{this._onChange(r,t)}))}}return mS(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,yD(this,"onStart",GS(this,hD(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),TS(this.animation.onChange,e,this)),TS(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;mS(this).reset(NC(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),sD(this)||(dD(this,!0),lD(this)||this._resume())}_resume(){N$.skipAnimation?this.finish():sC.start(this)}_stop(e,t){if(sD(this)){dD(this,!1);const r=this.animation;V$(r.values,(e=>{e.done=!0})),r.toValues&&(r.onChange=r.onPause=r.onResume=void 0),WC(this,{type:"idle",parent:this});const n=t?QS(this.get()):GS(this.get(),hD(this,e??r.to));Q$(this._pendingCalls,n),r.changed&&(r.changed=!1,yD(this,"onRest",n,this))}}};function hD(e,t){const r=PS(t);return Y$(PS(e.get()),r)}function fD(e,t=e.loop,r=e.to){const n=TS(t);if(n){const o=!0!==n&&LS(n),i=(o||e).reverse,a=!o||o.reset;return pD({...e,loop:t,default:!1,pause:void 0,to:!i||NS(r)?r:void 0,from:a?e.from:void 0,reset:a,...o})}}function pD(e){const{to:t,from:r}=e=LS(e),n=new Set;return W$.obj(t)&&mD(t,n),W$.obj(r)&&mD(r,n),e.keys=n.size?Array.from(n):null,e}function gD(e){const t=pD(e);return W$.und(t.default)&&(t.default=zS(t)),t}function mD(e,t){U$(e,((e,r)=>null!=e&&t.add(r)))}var bD=["onStart","onRest","onChange","onPause","onResume"];function vD(e,t,r){e.animation[r]=t[r]!==AS(t,r)?MS(t[r],e.key):void 0}function yD(e,t,...r){e.animation[t]?.(...r),e.defaultProps[t]?.(...r)}var xD=["onStart","onChange","onRest"],wD=1,$D=class{constructor(e,t){this.id=wD++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,r)=>e[r]=t.get())),e}set(e){for(const t in e){const r=e[t];W$.und(r)||this.springs[t].set(r)}}update(e){return e&&this.queue.push(pD(e)),this}start(e){let{queue:t}=this;return e?t=K$(e).map(pD):this.queue=[],this._flush?this._flush(this,t):(ED(this,t),CD(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const r=this.springs;V$(K$(t),(t=>r[t].stop(!!e)))}else JS(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(W$.und(e))this.start({pause:!0});else{const t=this.springs;V$(K$(e),(e=>t[e].pause()))}return this}resume(e){if(W$.und(e))this.start({pause:!1});else{const t=this.springs;V$(K$(e),(e=>t[e].resume()))}return this}each(e){U$(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:r}=this._events,n=this._active.size>0,o=this._changed.size>0;(n&&!this._started||o&&!this._started)&&(this._started=!0,q$(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const i=!n&&this._started,a=o||i&&r.size?this.get():null;o&&t.size&&q$(t,(([e,t])=>{t.value=a,e(t,this,this._item)})),i&&(this._started=!1,q$(r,(([e,t])=>{t.value=a,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}C$.onFrame(this._onFrame)}};function CD(e,t){return Promise.all(t.map((t=>SD(e,t)))).then((t=>qS(e,t)))}async function SD(e,t,r){const{keys:n,to:o,from:i,loop:a,onRest:s,onResolve:l}=t,d=W$.obj(t.default)&&t.default;a&&(t.loop=!1),!1===o&&(t.to=null),!1===i&&(t.from=null);const c=W$.arr(o)||W$.fun(o)?o:void 0;c?(t.to=void 0,t.onRest=void 0,d&&(d.onRest=void 0)):V$(xD,(r=>{const n=t[r];if(W$.fun(n)){const o=e._events[r];t[r]=({finished:e,cancelled:t})=>{const r=o.get(n);r?(e||(r.finished=!1),t&&(r.cancelled=!0)):o.set(n,{value:null,finished:e||!1,cancelled:t||!1})},d&&(d[r]=t[r])}}));const u=e._state;t.pause===!u.paused?(u.paused=t.pause,Q$(t.pause?u.pauseQueue:u.resumeQueue)):u.paused&&(t.pause=!0);const h=(n||Object.keys(e.springs)).map((r=>e.springs[r].start(t))),f=!0===t.cancel||!0===AS(t,"cancel");(c||f&&u.asyncId)&&h.push(KS(++e._lastAsyncId,{props:t,state:u,actions:{pause:H$,resume:H$,start(t,r){f?(JS(u,e._lastAsyncId),r(QS(e))):(t.onRest=s,r(XS(c,t,u,e)))}}})),u.paused&&await new Promise((e=>{u.resumeQueue.add(e)}));const p=qS(e,await Promise.all(h));if(a&&p.finished&&(!r||!p.noop)){const r=fD(t,a,o);if(r)return ED(e,[r]),SD(e,r,!0)}return l&&C$.batchedUpdates((()=>l(p,e,e.item))),p}function DD(e,t){const r={...e.springs};return t&&V$(K$(t),(e=>{W$.und(e.keys)&&(e=pD(e)),W$.obj(e.to)||(e={...e,to:void 0}),_D(r,e,(e=>FD(e)))})),kD(e,r),r}function kD(e,t){U$(t,((t,r)=>{e.springs[r]||(e.springs[r]=t,UC(t,e))}))}function FD(e,t){const r=new uD;return r.key=e,t&&UC(r,t),r}function _D(e,t,r){t.keys&&V$(t.keys,(n=>{(e[n]||(e[n]=r(n)))._prepareNode(t)}))}function ED(e,t){V$(t,(t=>{_D(e.springs,t,(t=>FD(t,e)))}))}var OD=n.createContext({pause:!1,immediate:!1}),TD=()=>{const e=[],t=function(t){lS(`${iS}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const n=[];return V$(e,((e,o)=>{if(W$.und(t))n.push(e.start());else{const i=r(t,e,o);i&&n.push(e.start(i))}})),n};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const r=e.indexOf(t);~r&&e.splice(r,1)},t.pause=function(){return V$(e,(e=>e.pause(...arguments))),this},t.resume=function(){return V$(e,(e=>e.resume(...arguments))),this},t.set=function(t){V$(e,((e,r)=>{const n=W$.fun(t)?t(r,e):t;n&&e.set(n)}))},t.start=function(t){const r=[];return V$(e,((e,n)=>{if(W$.und(t))r.push(e.start());else{const o=this._getProps(t,e,n);o&&r.push(e.start(o))}})),r},t.stop=function(){return V$(e,(e=>e.stop(...arguments))),this},t.update=function(t){return V$(e,((e,r)=>e.update(this._getProps(t,e,r)))),this};const r=function(e,t,r){return W$.fun(e)?e(r,t):e};return t._getProps=r,t};function ID(e,t){const r=W$.fun(e),[[n],o]=function(e,t,r){const n=W$.fun(t)&&t;n&&!r&&(r=[]);const o=v((()=>n||3==arguments.length?TD():void 0),[]),i=a(0),s=uS(),l=v((()=>({ctrls:[],queue:[],flush(e,t){const r=DD(e,t),n=i.current>0&&!l.queue.length&&!Object.keys(r).some((t=>!e.springs[t]));return n?CD(e,t):new Promise((n=>{kD(e,r),l.queue.push((()=>{n(CD(e,t))})),s()}))}})),[]),d=a([...l.ctrls]),c=a([]),u=pS(e)||0;function h(e,r){for(let o=e;o<r;o++){const e=d.current[o]||(d.current[o]=new $D(null,l.flush)),r=n?n(o,e):t[o];r&&(c.current[o]=gD(r))}}v((()=>{V$(d.current.slice(e,u),(e=>{!function(e,t){e.ref?.delete(e),t?.delete(e)}(e,o),e.stop(!0)})),d.current.length=e,h(u,e)}),[e]),v((()=>{h(0,Math.min(u,e))}),r);const f=d.current.map(((e,t)=>DD(e,c.current[t]))),p=m(OD),g=pS(p),b=p!==g&&function(e){for(const t in e)return!0;return!1}(p);cS((()=>{i.current++,l.ctrls=d.current;const{queue:e}=l;e.length&&(l.queue=[],V$(e,(e=>e()))),V$(d.current,((e,t)=>{o?.add(e),b&&e.start({default:p});const r=c.current[t];r&&(function(e,t){t&&e.ref!==t&&(e.ref?.delete(e),t.add(e),e.ref=t)}(e,r.ref),e.ref?e.queue.push(r):e.start(r))}))})),hS((()=>()=>{V$(l.ctrls,(e=>e.stop(!0)))}));const y=f.map((e=>({...e})));return o?[y,o]:y}(1,r?e:[e],r?t||[]:t);return r||2==arguments.length?[n,o]:n}var MD=class extends oD{constructor(e,t){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=OC(...t);const r=this._get(),n=kS(r);bS(this,n.create(r))}advance(e){const t=this._get();Y$(t,this.get())||(mS(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&BD(this._active)&&zD(this)}_get(){const e=W$.arr(this.source)?this.source.map(NC):K$(NC(this.source));return this.calc(...e)}_start(){this.idle&&!BD(this._active)&&(this.idle=!1,V$(vS(this),(e=>{e.done=!1})),N$.skipAnimation?(C$.batchedUpdates((()=>this.advance())),zD(this)):sC.start(this))}_attach(){let e=1;V$(K$(this.source),(t=>{PC(t)&&UC(t,this),rD(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){V$(K$(this.source),(e=>{PC(e)&&KC(e,this)})),this._active.clear(),zD(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=K$(this.source).reduce(((e,t)=>Math.max(e,(rD(t)?t.priority:0)+1)),0))}};function AD(e){return!1!==e.idle}function BD(e){return!e.size||Array.from(e).every(AD)}function zD(e){e.idle||(e.idle=!0,V$(vS(e),(e=>{e.done=!0})),WC(e,{type:"idle",parent:e}))}N$.assign({createStringInterpolator:oS,to:(e,t)=>new MD(e,t)});var jD=/^--/;function RD(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||jD.test(e)||PD.hasOwnProperty(e)&&PD[e]?(""+t).trim():t+"px"}var LD={};var PD={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ND=["Webkit","Ms","Moz","O"];PD=Object.keys(PD).reduce(((e,t)=>(ND.forEach((r=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(r,t)]=e[t])),e)),PD);var HD=/^(matrix|translate|scale|rotate|skew)/,WD=/^(translate)/,YD=/^(rotate|skew)/,VD=(e,t)=>W$.num(e)&&0!==e?e+t:e,UD=(e,t)=>W$.arr(e)?e.every((e=>UD(e,t))):W$.num(e)?e===t:parseFloat(e)===t,KD=class extends CS{constructor({x:e,y:t,z:r,...n}){const o=[],i=[];(e||t||r)&&(o.push([e||0,t||0,r||0]),i.push((e=>[`translate3d(${e.map((e=>VD(e,"px"))).join(",")})`,UD(e,0)]))),U$(n,((e,t)=>{if("transform"===t)o.push([e||""]),i.push((e=>[e,""===e]));else if(HD.test(t)){if(delete n[t],W$.und(e))return;const r=WD.test(t)?"px":YD.test(t)?"deg":"";o.push(K$(e)),i.push("rotate3d"===t?([e,t,n,o])=>[`rotate3d(${e},${t},${n},${VD(o,r)})`,UD(o,0)]:e=>[`${t}(${e.map((e=>VD(e,r))).join(",")})`,UD(e,t.startsWith("scale")?1:0)])}})),o.length&&(n.transform=new qD(o,i)),super(n)}},qD=class extends YC{constructor(e,t){super(),this.inputs=e,this.transforms=t,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return V$(this.inputs,((r,n)=>{const o=NC(r[0]),[i,a]=this.transforms[n](W$.arr(o)?o:r.map(NC));e+=" "+i,t=t&&a})),t?"none":e}observerAdded(e){1==e&&V$(this.inputs,(e=>V$(e,(e=>PC(e)&&UC(e,this)))))}observerRemoved(e){0==e&&V$(this.inputs,(e=>V$(e,(e=>PC(e)&&KC(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),WC(this,e)}};N$.assign({batchedUpdates:re,createStringInterpolator:oS,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});var ZD=((e,{applyAnimatedValues:t=()=>!1,createAnimatedStyle:r=e=>new CS(e),getComponentProps:n=e=>e}={})=>{const o={applyAnimatedValues:t,createAnimatedStyle:r,getComponentProps:n},i=e=>{const t=OS(e)||"Anonymous";return(e=W$.str(e)?i[e]||(i[e]=FS(e,o)):e[ES]||(e[ES]=FS(e,o))).displayName=`Animated(${t})`,e};return U$(e,((t,r)=>{W$.arr(e)&&(r=OS(t)),i[r]=i(t)})),{animated:i}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const r="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,{className:n,style:o,children:i,scrollTop:a,scrollLeft:s,viewBox:l,...d}=t,c=Object.values(d),u=Object.keys(d).map((t=>r||e.hasAttribute(t)?t:LD[t]||(LD[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==i&&(e.textContent=i);for(const t in o)if(o.hasOwnProperty(t)){const r=RD(t,o[t]);jD.test(t)?e.style.setProperty(t,r):e.style[t]=r}u.forEach(((t,r)=>{e.setAttribute(t,c[r])})),void 0!==n&&(e.className=n),void 0!==a&&(e.scrollTop=a),void 0!==s&&(e.scrollLeft=s),void 0!==l&&e.setAttribute("viewBox",l)},createAnimatedStyle:e=>new KD(e),getComponentProps:({scrollTop:e,scrollLeft:t,...r})=>r}),GD=ZD.animated;const QD=k.div`
    padding: ${ea["spacing-8"]} ${ea["spacing-16"]};
    display: flex;

    ${e=>{let t,r;switch(e.$type){case"error":t=Gi["bg-error"](e),r=Gi["border-error"](e);break;case"success":t=Gi["bg-success"](e),r=Gi["border-success"](e);break;case"warning":default:t=Gi["bg-warning"](e),r=Gi["border-warning"](e);break;case"info":t=Gi["bg-info"](e),r=Gi["border-info"](e);break;case"description":t=Gi["bg-strong"](e),r=Gi["border-strong"](e)}return F`
            background: ${t};
            border-left: ${Ji["width-020"]} ${Ji.solid}
                ${r};
        `}}
`,XD=k.div`
    display: flex;
    align-items: center;
    height: 1lh;
    margin-right: ${ea["spacing-8"]};

    ${e=>{let t;const r="small"===e.$sizeType?"1.25rem":"1.5rem";switch(e.$type){case"error":t=Gi["icon-error"](e);break;case"success":t=Gi["icon-success"](e);break;case"warning":default:t=Gi["icon-warning"](e);break;case"info":t=Gi["icon-info"](e);break;case"description":t=Gi["icon-subtle"](e)}return F`
            svg {
                color: ${t};
                width: ${r};
                height: ${r};
            }
        `}}
`,JD=k(Sa.LinkSM)`
    ${e=>"small"===e.$sizeType?F`
                ${Qi["body-sm-semibold"]}
                margin-top: ${ea["spacing-4"]};
            `:F`
                ${Qi["body-md-semibold"]}
                margin-top: ${ea["spacing-8"]};
            `}
    display: flex;
    align-items: center;
    align-self: flex-start;

    svg {
        height: 1rem;
        width: 1rem;
        margin-left: ${ea["spacing-4"]};
    }
`,ek=k.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-wrap: anywhere;
`,tk=k.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    order: 1;
    ${e=>{if(e.$showMore&&e.$hasActionLink)return F`
                margin-bottom: ${ea["spacing-8"]};
            `}}
    ${e=>{const t="linear-gradient(to bottom, black 50%, transparent 100%)";if(!e.$showMore&&e.$maxCollapsedHeight)return`\n                max-height: ${e.$maxCollapsedHeight}px;\n\t\t\t\toverflow: hidden;\n                -webkit-mask-image: ${t};\n                mask-image: ${t};\n\t\t\t`}}
`,rk=k.div`
    color: ${Gi.text};

    ${e=>"small"===e.$sizeType?Ta({textSize:"body-sm"}):Ta({textSize:"body-md"})}
`,nk=k.button`
    ${e=>"small"===e.$sizeType?F`
                ${Qi["body-sm-semibold"]}
            `:F`
                ${Qi["body-md-semibold"]}
            `}

    display: flex;
    align-items: center;
    align-self: flex-start;
    gap: ${ea["spacing-4"]};
    margin-top: ${ea["spacing-8"]};
    order: 2;

    cursor: pointer;
    user-select: none;
    border: none;
    background: transparent;

    color: ${Gi["text-primary"]};
`,ok=k(ue)`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${Xi["duration-350"]} ${Xi["ease-standard"]};
`,ik=k.div`
    height: 1.625rem;
    width: 1.625rem;
    margin-right: 0.5rem;
    flex-shrink: 0;

    svg {
        height: 100%;
        width: 100%;
    }

    ${e=>e.$disabled?e.$active?F`
                    color: ${Gi["icon-selected-disabled"]};
                `:F`
                    color: ${Gi["icon-disabled-subtle"]};
                `:e.$active?F`
                color: ${Gi["icon-selected"]};
            `:F`
            color: ${Gi["icon-subtle"]};
        `};
`,ak=F`
    margin-bottom: ${e=>e.$bottomMargin||0}rem;

    // Counter matters
    counter-reset: list;

    ${e=>e.$size&&Qi[`${e.$size}-regular`]}
    font-weight: ${Qi.Spec["weight-regular"]};
    color: ${Gi.text};

    // nested lists styling
    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`,sk=k.ol`
    ${ak}

    margin-left: 3em;

    ${oa.MaxWidth.lg} {
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
`,lk=k.ul`
    ${ak}

    margin-left: ${e=>e.$hasCustomIcon?0:"2.5em"};
    list-style-type: ${e=>e.$hasCustomIcon?"none":e.$bulletType||"disc"};

    ${e=>e.$hasCustomIcon&&F`
            & > li {
                display: flex;
                align-items: flex-start;
                gap: 0.5em;
            }
        `}
`,dk=n=>{var{size:i,bulletType:a,bottomMargin:s,children:l}=n,d=_e(n,["size","bulletType","bottomMargin","children"]);const c=void 0!==a&&"string"!=typeof a;return e(lk,Object.assign({$size:i,$bulletType:c?void 0:a,$bottomMargin:s,$hasCustomIcon:c},d,{children:c?o.Children.map(l,(n=>o.isValidElement(n)?o.cloneElement(n,{children:t(r,{children:[e("div",{"aria-hidden":!0,children:a}),e("div",{children:n.props.children})]})}):n)):l}))};dk.displayName="TextList.Ul";const ck=t=>{var{size:r,counterType:n,counterSeparator:o,bottomMargin:i,children:a}=t,s=_e(t,["size","counterType","counterSeparator","bottomMargin","children"]);return e(sk,Object.assign({$size:r,$counterType:n,$counterSeparator:o,$bottomMargin:i},s,{children:a}))};ck.displayName="TextList.Ol";const uk=dk,hk=k.div`
    position: relative;
    display: inline-flex;
    min-width: 10.375rem;
    border-radius: ${ta.sm};
    border-width: 1px;
    border-style: solid;
    overflow: hidden;
    flex-direction: column;
    height: fit-content;
    background: ${Gi.bg};

    &:has(input:focus-visible) {
        outline: 2px solid ${Gi["focus-ring"]};
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
                            border-color: ${Gi["border-error"]};
                        `:F`
                            border-color: ${Gi["border-error"]};

                            &:has(${vk}:hover) {
                                @media (pointer: fine) {
                                    background: ${Gi["bg-hover-subtle"]};
                                }
                            }
                        `:e.$disabled?e.$selected?F`
                            border: none;
                            background: ${Gi["bg-selected-disabled"]};
                        `:F`
                            border: none;
                        `:e.$selected?F`
                        border: none;
                        background: ${Gi["bg-selected"]};

                        &:has(${vk}:hover) {
                            @media (pointer: fine) {
                                background: ${Gi["bg-selected-hover"]};

                                & ${gk} {
                                    color: ${Gi["text-selected-hover"]};
                                }

                                & ${Fk} {
                                    color: ${Gi["icon-selected-hover"]};
                                }
                            }
                        }
                    `:F`
                    border: none;

                    &:has(${vk}:hover) {
                        @media (pointer: fine) {
                            background: ${Gi["bg-hover-subtle"]};
                        }
                    }
                `:e.$error?e.$disabled?F`
                            border-color: ${Gi["border-error"]};
                        `:F`
                            border-color: ${Gi["border-error"]};

                            &:has(${vk}:hover) {
                                @media (pointer: fine) {
                                    background: ${Gi["bg-hover-subtle"]};
                                }
                            }
                        `:e.$disabled?e.$selected?F`
                            border-color: ${Gi["border-selected-disabled"]};
                            background: ${Gi["bg-selected-disabled"]};
                        `:F`
                            border-color: ${Gi["border-disabled"]};
                            background: ${Gi["bg-disabled"]};
                        `:e.$selected?F`
                        border-color: ${Gi["border-selected"]};
                        background: ${Gi["bg-selected"]};

                        &:has(${vk}:hover) {
                            @media (pointer: fine) {
                                background: ${Gi["bg-selected-hover"]};

                                & ${gk} {
                                    color: ${Gi["text-selected-hover"]};
                                }

                                & ${Fk} {
                                    color: ${Gi["icon-selected-hover"]};
                                }
                            }
                        }
                    `:F`
                    border-color: ${Gi.border};

                    &:has(${vk}:hover) {
                        @media (pointer: fine) {
                            background: ${Gi["bg-hover-subtle"]};
                        }
                    }
                `}
`,fk=k.input`
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
`,pk=k.div`
    display: flex;
`,gk=k.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
    width: 100%;
    overflow: hidden;

    // apply header container text color
    ${e=>e.$disabled?e.$selected?F`
                    color: ${Gi["text-selected-disabled"]};
                `:F`
                    color: ${Gi["text-disabled"]};
                `:e.$selected?F`
                color: ${Gi["text-selected"]};
            `:F`
            color: ${Gi.text};
        `}
`,mk=k.label`
    ${Qi["body-baseline-regular"]}
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
    -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.desktop)&&void 0!==r?r:"none"}};
    ${oa.MaxWidth.lg} {
        -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.tablet)&&void 0!==r?r:"none"}};
    }
    ${oa.MaxWidth.sm} {
        -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.mobile)&&void 0!==r?r:"none"}};
    }
`,bk=k.div`
    ${Qi["body-md-regular"]}
    margin-top: 0.5rem;

    z-index: 1; // forces sublabel to render above the input
    pointer-events: none; // to allow click events to be passed to the input

    strong,
    b {
        ${Qi["body-md-semibold"]}
    }
`,vk=k.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`,yk=k.div`
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
    padding: ${e=>e.$addPadding?"0.6875rem 0rem 0.6875rem 1rem":"0.6875rem 1rem"};
`,xk=k.button`
    color: ${e=>e.$disabled?Gi["text-disabled"]:Gi["text-error"]};
    white-space: nowrap;
    ${Qi["body-md-semibold"]}
    height: fit-content;
    padding: 0.6875rem 1rem 0.6875rem 0.5rem;
    border: none;
    background: none;

    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
`,wk=k.button`
    color: ${e=>e.disabled?Gi["text-disabled"]:Gi["text-primary"]};
    ${Qi["body-baseline-semibold"]}
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border: none;
    background-color: ${Gi.bg};
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    padding: 0 1rem 0.6875rem 1rem;
    padding-top: ${e=>e.$paddingTopRequired?"0.6875rem":"0rem"};
    width: 100%;

    svg {
        width: 1em;
        height: 1em;
        margin-left: 0.5rem;
    }
`,$k=k.div`
    width: 100%;
    color: ${e=>e.$disabled?Gi["text-disabled"]:Gi["text-error"]};
    border: none;
    background: ${Gi.bg};
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem 0.5rem 1rem;
`,Ck=k((r=>{var{type:n,className:o,children:i,actionLink:a,actionLinkIcon:l,sizeType:d="default",showIcon:c=!1,customIcon:u,maxCollapsedHeight:f,role:g}=r,m=_e(r,["type","className","children","actionLink","actionLinkIcon","sizeType","showIcon","customIcon","maxCollapsedHeight","role"]);const[b,v]=s(!1),[y,x]=s(!1),{height:w,ref:$}=Qt(),[C]=s((()=>tt.generate())),S=p((()=>{v(!f),x(k())}),[f,w]),k=()=>!(!w||!f)&&w>f;h((()=>{S()}),[f,w,S]);return t(QD,{className:o,$type:n,$sizeType:d,"aria-label":`${(()=>{switch(n){case"success":return"Success";case"warning":return"Warning";case"error":return"Error";case"info":return"Information";case"description":return"Description";default:return"Alert"}})()}`,"data-testid":m["data-testid"],role:g,children:[c&&e(XD,{$sizeType:d,$type:n,children:(()=>{if(n&&u)return u;switch(n){case"success":return e(De,{"aria-hidden":!0});case"warning":return e(Se,{"aria-hidden":!0});case"error":return e(ne,{"aria-hidden":!0});case"info":case"description":return e(D,{"aria-hidden":!0});default:return null}})()}),t(ek,{children:[y&&t(nk,{$sizeType:d,$type:n,type:"button","aria-expanded":b,"aria-controls":C,onClick:()=>v(!b),children:["Show ",b?"less":"more",e(ok,{$expanded:b})]}),t(tk,{id:C,$maxCollapsedHeight:k()?f:void 0,$showMore:b,$hasActionLink:!!a,inert:Gs(!!f&&!b),children:[e(rk,{ref:$,$type:n,$sizeType:d,children:i}),a?t(JD,Object.assign({"data-testid":"action-link",$type:n,$sizeType:d,underlineStyle:"none"},a,{children:[a.children,l||e(Ce,{})]})):null]})]})]})}))`
    width: 100%;
    user-select: none;
`,Sk=k.div`
    padding: 0 1rem;
    padding-top: 0.6875rem;
    padding-bottom: ${e=>e.$isFinalItem?"0.6875rem":"0.5rem"};
    background-color: ${Gi.bg};
    ${Ta({textSize:"body-md"})}

    ${e=>e.$disabled?F`
                color: ${Gi["text-disabled"]};
            `:e.$selected?F`
                color: ${Gi["text-selected"]};
            `:F`
                color: ${Gi.text};
            `}
`,Dk=k(Sa.BodyMD)`
    color: ${e=>e.$disabled?Gi["text-disabled"]:Gi["text-error"]};
`,kk=k(uk)`
    color: ${e=>e.$disabled?Gi["text-disabled"]:Gi["text-error"]};
`,Fk=k((({type:t,active:r=!1,disabled:n,className:o})=>{let i;switch(t){case"checkbox":i=e(r?pe:he,{});break;case"radio":i=e(r?Fe:ke,{});break;case"tick":i=e(ge,{});break;case"cross":i=e(M,{});break;default:i=null}return e(ik,{className:o,$active:r,$disabled:n,"aria-hidden":!0,children:i})}))`
    ${e=>e.$disabled?e.$selected?F`
                    color: ${Gi["icon-selected-disabled"]};
                `:F`
                    color: ${Gi["icon-disabled-subtle"]};
                `:e.$selected?F`
                color: ${Gi["icon-selected"]};
            `:F`
            color: ${Gi["icon-subtle"]};
        `};
`,_k=GD(k.div`
    position: absolute;
    top: calc(3rem + ${ea["spacing-8"]});
    left: 0;
    overflow: hidden;
    z-index: 1;

    ${oa.MaxWidth.xxs} {
        max-width: 100%;
    }
`),Ek=k.div`
    position: relative;
    width: 100%;
    padding: ${ea["spacing-8"]} ${ea["spacing-20"]}
        ${ea["spacing-24"]} ${ea["spacing-20"]};
    display: flex;
    flex-direction: column;
    background: ${Gi.bg};
    border: ${Ji["width-010"]} ${Ji.solid} ${Gi.border};
    border-radius: ${ta.sm};
`,Ok=k.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${oa.MaxWidth.xxs} {
        flex-direction: column;
        width: 100%;
    }
`,Tk=k.div`
    display: flex;
    justify-content: flex-end;
    margin-top: ${ea["spacing-16"]};
    gap: ${ea["spacing-8"]} ${ea["spacing-16"]};

    ${oa.MaxWidth.xxs} {
        flex-direction: column-reverse; // FIXME: this breaks tab focus
        margin-top: ${ea["spacing-32"]};
    }
`,Ik=k.div`
    display: flex;
    align-items: center;
    margin-right: ${ea["spacing-32"]};

    ${oa.MaxWidth.xxs} {
        margin-right: 0;
        width: 100%;
    }
`,Mk=k.div`
    display: flex;
    gap: ${ea["spacing-8"]};

    ${oa.MaxWidth.lg} {
        flex-direction: column;
    }

    ${oa.MaxWidth.xxs} {
        flex-direction: row;
        width: 100%;
    }
`,Ak=k.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${oa.MaxWidth.xxs} {
        width: 6rem;
    }
`,Bk=k(Fa)`
    width: 5rem;
    padding: ${ea["spacing-16"]} 0;
    color: ${Gi.icon};

    svg {
        height: 1rem;
        width: 1rem;
    }

    &:hover {
        color: ${Gi["icon-hover"]};
    }
`,zk=k(Sa.BodyBL)`
    flex-shrink: 0;
    width: 1.5rem;
    text-align: center;
`,jk=k(kd)`
    height: calc(3rem - 2px);
    width: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    ${oa.MaxWidth.xxs} {
        width: 100%;
    }
`,Rk=k(_d)`
    text-align: center;
    width: 100%;

    &:focus::placeholder {
        color: transparent;
    }
`,Lk=k((n=>{var{type:o="checkbox",indicator:i,checked:l,styleType:d="default",children:c,childrenMaxLines:u,subLabel:f,disabled:p,error:g,name:m,id:b,className:y,compositeSection:x,removable:w,onRemove:$,"data-testid":C,onChange:S,useContentWidth:D,"aria-describedby":k}=n,F=_e(n,["type","indicator","checked","styleType","children","childrenMaxLines","subLabel","disabled","error","name","id","className","compositeSection","removable","onRemove","data-testid","onChange","useContentWidth","aria-describedby"]);const{collapsible:_=!0,errors:E,children:O,initialExpanded:T}=x||{},[I,M]=s(l),[A,B]=s(!!T),z=v((()=>{const e=Array.isArray(E)&&(null==E?void 0:E.length)>0,t=!Array.isArray(E)&&!!E;return e||t}),[E]),[j]=s(tt.generate()),R=b?`${b}`:`tg-${j}`,L=a(null);h((()=>{M(l)}),[l]),h((()=>{I&&B(null==T||T)}),[I]);const P=e=>{if(!p){if(S)return void S(e);switch(o){case"checkbox":M((e=>!e));break;case"radio":case"yes":case"no":I||M(!0)}}},N=()=>{p||B(!A)},H=()=>{p||!$||$()},W=()=>{var e;null===(e=null==L?void 0:L.current)||void 0===e||e.click()},Y=e=>{e.stopPropagation()},V=()=>{let t;switch(o){case"yes":t="tick";break;case"no":t="cross";break;case"checkbox":case"radio":t=o}return e(Fk,{type:t,active:I,disabled:p,$selected:I,$disabled:p})},U=()=>{if(!f)return null;let t;return t="function"==typeof f?f():f,e(bk,{"data-id":"toggle-sublabel",id:`${R}-sublabel`,"aria-hidden":!0,children:t})},K=n=>t(r,{children:[e(Dk,{weight:"semibold",$disabled:p,children:"Error"}),e(kk,{$disabled:p,children:null==n?void 0:n.map(((t,r)=>e("li",{id:`${R}-error-list-item-${r}`,children:e(Dk,{weight:"semibold",$disabled:p,children:t})},r)))})]});return t(hk,{$selected:I,$disabled:p,className:y,$styleType:d,$error:g,$indicator:i,$useContentWidth:D,id:b,"data-testid":C,children:[(()=>{const r=["string"==typeof f?`${R}-sublabel`:null,k].filter(Boolean).join(" ")||void 0;return t(vk,{id:`${R}-header-container`,$disabled:p,$error:g,$selected:I,$indicator:i,$styleType:d,children:[e(yk,{$addPadding:w,children:t(pk,{id:`${R}-input-container`,onClick:W,children:[e(fk,Object.assign({ref:L,name:m,id:`${R}-input`,type:"checkbox"===o?"checkbox":"radio","data-testid":"toggle-input",disabled:p,onChange:P,onClick:Y,checked:I,"aria-describedby":r},F)),i&&V(),t(gk,{$selected:I,$disabled:p,children:[e(mk,{htmlFor:`${R}-input`,"data-testid":"toggle-label",id:`${R}-label`,$maxLines:u,children:c}),f&&U()]})]})}),w&&e(xk,{type:"button",$disabled:p,onClick:H,id:`${R}-remove-button`,children:"Remove"})]})})(),O&&t("div",{children:[(!_||A)&&e(Sk,{"data-id":"toggle-composite-children",$isFinalItem:!_,$disabled:p,children:O}),_&&!A&&z&&e($k,{$disabled:p,onClick:N,id:`${R}-error-alert`,children:e(Ck,{type:p?"description":"error",className:y,showIcon:!0,children:Array.isArray(E)?K(E):E})}),_&&t(wk,{$paddingTopRequired:!A&&!z,disabled:p,onClick:N,"data-testid":A?"collapse-button":"expand-button",children:[A?"Show less":"Show more",e(A?$e:oe,{"aria-hidden":!0})]})]})]})}))`
    min-width: 5rem;
    flex: 1;
`,Pk=k(Dl.Small)`
    width: 7rem;

    ${oa.MaxWidth.sm} {
        flex: 1;
    }

    ${oa.MaxWidth.xxs} {
        width: 100%;
    }
`;var Nk,Hk,Wk;!function(e){e.HOUR_UP="hour-up",e.HOUR_DOWN="hour-down",e.MINUTE_UP="minute-up",e.MINUTE_DOWN="minute-down"}(Nk||(Nk={})),function(e){e.HOUR="hour",e.MINUTE="minute"}(Hk||(Hk={})),function(e){e.AM="am",e.PM="pm"}(Wk||(Wk={}));const Yk=({id:r,value:n,show:o,format:i,onChange:l,onCancel:d})=>{var c;const u=m$.getTimeValues(i,n),[f,g]=s(u.hour),[m,b]=s(u.minute),[v,y]=s(u.period),x=a(null),w=a(null),$=Qt();h((()=>{if(o&&x.current&&x.current.focus(),o){const{hour:e,minute:t,period:r}=m$.getTimeValues(i,n);g(e),b(t),y(r)}}),[o,n,i]),h((()=>{const e=x.current,t=w.current;return e&&e.addEventListener("keydown",C),t&&t.addEventListener("keydown",C),()=>{e&&e.removeEventListener("keydown",C),t&&t.removeEventListener("keydown",C)}}),[]);const C=e=>{["Digit0","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Tab","Backspace","Delete","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)||["Backspace","0","1","2","3","4","5","6","7","8","9"].includes(e.key)||e.preventDefault()},S=p((e=>{switch(e.currentTarget.name){case Nk.MINUTE_UP:b(m$.updateMinutes(m,"add"));break;case Nk.MINUTE_DOWN:b(m$.updateMinutes(m,"minus"));break;case Nk.HOUR_UP:g(m$.updateHours(f,"add"));break;case Nk.HOUR_DOWN:g(m$.updateHours(f,"minus"))}}),[f,m]),D=e=>{e.target.select()},k=e=>{const t=e.target.value;switch(e.target.name){case Hk.HOUR:t.length<=2&&g(t);break;case Hk.MINUTE:t.length<=2&&b(t)}},F=e=>{const t=parseInt(e.target.value);if(!isNaN(t))switch(e.target.name){case Hk.HOUR:{const r=t>23||t<0?u.hour:m$.convertHourTo12HourFormat(e.target.value);g(r);break}case Hk.MINUTE:{const r=t>59||t<0?u.minute:e.target.value;b(rt.padValue(r));break}}},_=e=>{switch(e.target.name){case Wk.AM:y(g$.AM);break;case Wk.PM:y(g$.PM)}},E=e=>r?`${r}-${e}`:e,O=ID({opacity:o?1:0,height:o?(null!==(c=$.height)&&void 0!==c?c:0)+32+2:0});return e(_k,{"data-testid":"animated-dropdown-wrapper",style:O,children:t(Ek,{ref:$.ref,"data-testid":E("timepicker-dropdown"),inert:Gs(!o),children:[t(Ok,{children:[t(Ik,{children:[t(Ak,{children:[e(Bk,{"aria-label":"increase hour",name:Nk.HOUR_UP,tabIndex:-1,onClick:S,"data-testid":E("hour-increment-button"),children:e($e,{})}),e(jk,{children:e(Rk,{"aria-label":"hour",type:"number",name:Hk.HOUR,id:"hour",maxLength:2,pattern:"[0-9]{2}",ref:x,value:f,onFocus:D,onChange:k,onBlur:F,min:1,max:12,placeholder:"HH","data-testid":E("hour-input")})}),e(Bk,{"aria-label":"decrease hour",name:Nk.HOUR_DOWN,tabIndex:-1,onClick:S,"data-testid":E("hour-decrement-button"),children:e(oe,{})})]}),e(zk,{children:":"}),t(Ak,{children:[e(Bk,{"aria-label":"increase minute",name:Nk.MINUTE_UP,tabIndex:-1,onClick:S,"data-testid":E("minute-increment-button"),children:e($e,{})}),e(jk,{children:e(Rk,{"aria-label":"minute",type:"number",name:Hk.MINUTE,id:"minute",maxLength:2,pattern:"[0-9]{2}",ref:w,value:m,onChange:k,onBlur:F,onFocus:D,min:0,max:59,placeholder:"MM","data-testid":E("minute-input")})}),e(Bk,{"aria-label":"decrease minute",name:Nk.MINUTE_DOWN,tabIndex:-1,onClick:S,"data-testid":E("minute-decrement-button"),children:e(oe,{})})]})]}),t(Mk,{children:[e(Lk,{checked:v===g$.AM,name:Wk.AM,type:"radio",onChange:_,"data-testid":E("am-toggle"),"aria-label":"AM",children:"AM"}),e(Lk,{checked:v===g$.PM,name:Wk.PM,type:"radio",onChange:_,"data-testid":E("pm-toggle"),"aria-label":"PM",children:"PM"})]})]}),t(Tk,{children:[e(Pk,{"aria-label":"close selector",type:"button",styleType:"secondary",onClick:d,"data-testid":E("cancel-button"),children:"Cancel"}),e(Pk,{"aria-label":"confirm selection",type:"button",onClick:()=>{let e;e="24hr"===i?m$.convertTo24HourFormat({hour:f,minute:m,period:v}):`${f}:${m}${v}`,l(e)},disabled:""===f||""===m,"data-testid":E("confirm-button"),children:"Done"})]})]})})},Vk=r=>{var{id:n,disabled:o=!1,error:i,value:l,format:d="24hr",readOnly:c,onChange:u,onFocus:f,onBlur:p}=r,g=_e(r,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur"]);const[m,b]=s(!1),[v,y]=s(!1),[x,w]=s(""),[$,C]=s(""),S=a(null);h((()=>{l&&(w(l.start),C(l.end))}),[l]),Jt("mousedown",(function(e){o||_(e)}),"document"),Jt("keyup",(function(e){if("Tab"===e.code)_(e)}),"document");const D=()=>{F()},k=()=>{m||v||null==f||f()},F=()=>{b(!1),y(!1),null==p||p()},_=e=>{S.current&&!S.current.contains(e.target)&&(v||m)&&F()};return e(h$,Object.assign({ref:S,id:n},g,{children:t(f$,{$disabled:o,$error:i,$readOnly:c,children:[t(Ud,{error:i,currentActive:m?"start":v?"end":"none",children:[e(p$,{onFocus:()=>{o||c||m||(y(!1),b(!0),k())},readOnly:!0,placeholder:"From",value:m$.formatDisplayValue(x,d),disabled:o,"data-testid":g["data-testid"]?`${g["data-testid"]}-timepicker-selector`:"timepicker-selector"}),e(p$,{onFocus:()=>{o||c||v||(b(!1),y(!0),k())},readOnly:!0,placeholder:"To",value:m$.formatDisplayValue($,d),disabled:o,"data-testid":g["data-testid"]?`${g["data-testid"]}-timepicker-selector`:"timepicker-selector"})]}),e(Yk,{id:n,show:m,value:x,format:d,onCancel:D,onChange:e=>{b(!1),y(!0),w(e);null==u||u({start:e,end:$})}}),e(Yk,{id:n,show:v,value:$,format:d,onCancel:D,onChange:e=>{y(!1),C(e);null==u||u({start:x,end:e}),""==x?b(!0):null==p||p()}})]})}))},Uk=k(Fd)`
    height: 3rem;
    gap: ${ea["spacing-8"]};
    // space for clear icon
    padding-right: calc(1.25rem + ${ea["spacing-20"]});
`,Kk=r=>{var{id:n,disabled:o=!1,error:i,value:l,format:d="12hr",readOnly:c,onChange:u,onFocus:f,onBlur:g,alignment:m="left",dropdownZIndex:b,startLimit:y,endLimit:x,interval:w=15}=r,$=_e(r,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur","alignment","dropdownZIndex","startLimit","endLimit","interval"]);const[C]=s((()=>tt.generate())),[S,D]=s(null),[k,F]=s(!1),[_,E]=s(""),[O,T]=s(""),[I,M]=s(""),[A,B]=s(""),[z,j]=s(""),R=a(null),L=a(null),P=a(null),N=v((()=>m$.generateTimings(w,d,y,x)),[w,d,y,x]),H=v((()=>{if(""===A)return N;const e=m$.findClosestFlooredTime(A,N);return e?N.slice(N.indexOf(e)):[]}),[N,A]),W=p((e=>m$.parseInput(e,d)),[d]);h((()=>{var e,t;if(l){const r=null!==(e=W(l.start))&&void 0!==e?e:"",n=null!==(t=W(l.end))&&void 0!==t?t:"";T(r),M(n),B(r),j(n)}}),[l,W]),h((()=>{if(i)return void F(!1);const e=W(O),t=W(I);if(void 0===e)E("Invalid start time");else if(void 0===t)E("Invalid end time");else{if(!(""!==e&&""!==t&&m$.to24Hour(t)<m$.to24Hour(e)))return E(""),void(document.activeElement!==L.current&&document.activeElement!==P.current||F(!0));E("End time must be after start time")}F(!1)}),[O,I,W,i]);const Y=e=>{o||c||(S||k||null==f||f(),D(e),F(!0))},V=e=>{var t;o||c||(D(e),F(!0),null===(t=("start"===e?L:P).current)||void 0===t||t.select())};function U(e){var t;switch(e.code){case"Enter":"start"===S?K(O):"end"===S&&(k&&q(I),null===(t=P.current)||void 0===t||t.blur());break;case"Tab":Z(O,I,{})}}const K=e=>{Z(e,I,{goToNextInput:!0})},q=e=>{Z(O,e,{triggerOnBlur:!0})},Z=(e,t,{goToNextInput:r,triggerOnBlur:n})=>{var o,i,a;const s=null!==(o=W(e))&&void 0!==o?o:A,l=null!==(i=W(t))&&void 0!==i?i:z;T(s),M(l);s===A&&l===z||null==u||u({start:s,end:l}),r&&void 0!==W(e)&&(D("end"),null===(a=P.current)||void 0===a||a.select()),n&&(D(null),F(!1),null==g||g()),B(s),j(l)},G=e=>{e.stopPropagation(),T(""),M(""),B(""),j("");null==u||u({start:"",end:""}),D(null),F(!1)},Q=e=>{var t,r;const n=e.relatedTarget,o=(null===(t=null==n?void 0:n.matches)||void 0===t?void 0:t.call(n,"[data-floating-ui-focusable]"))||(null===(r=null==n?void 0:n.matches)||void 0===r?void 0:r.call(n,"[data-floating-ui-focus-guard]")),i=R.current&&R.current.contains(n);S&&!k&&!i&&!o&&Z(O,I,{triggerOnBlur:!0})},X=()=>{if(!c&&!o&&((null==O?void 0:O.length)>0||(null==I?void 0:I.length)>0))return e(Kw,{onClick:G,type:"button","aria-label":"Clear",children:e(tu,{"aria-hidden":!0})})};return t(h$,Object.assign({id:n},$,{children:[e(Av,{children:e(Ks,{enabled:!c&&!o,isOpen:k,renderElement:()=>t(Uk,{ref:R,$disabled:o,$error:i||!!_,$readOnly:c,onBlur:Q,children:[t(Ud,{error:i||!!_,currentActive:null===S?"none":S,children:[e(p$,{ref:L,onFocus:()=>Y("start"),placeholder:"start"===S?"hh:mm":"From",onChange:e=>T(e.target.value),value:O,disabled:o,readOnly:c,"data-testid":$["data-testid"]?`${$["data-testid"]}-timepicker-selector`:"timepicker-selector",onClick:()=>V("start"),onKeyDown:U,autoComplete:"off","aria-label":"Start time input",type:"text",role:"combobox","aria-expanded":k,"aria-controls":C,"aria-autocomplete":"list"}),e(p$,{ref:P,onFocus:()=>Y("end"),placeholder:"end"===S?"hh:mm":"To",onChange:e=>M(e.target.value),value:I,disabled:o,readOnly:c,"data-testid":$["data-testid"]?`${$["data-testid"]}-timepicker-selector`:"timepicker-selector",onClick:()=>V("end"),onKeyDown:U,autoComplete:"off","aria-label":"End time input",type:"text",role:"combobox","aria-expanded":k,"aria-controls":C,"aria-autocomplete":"list"})]}),X()]}),renderDropdown:()=>e(oy,"start"===S?{listItems:N,onSelectItem:K,selectedItems:[O],topScrollItem:m$.findClosestFlooredTime(W(O),N),listboxId:C,disableItemFocus:!0,matchElementWidth:!0}:{listItems:H,onSelectItem:q,selectedItems:[I],topScrollItem:m$.findClosestFlooredTime(W(I),H),listboxId:C,disableItemFocus:!0,matchElementWidth:!0}),onClose:e=>{"outside-press"===e?(D(null),F(!1),null==g||g()):Z(O,I,{triggerOnBlur:!0})},onDismiss:()=>{var e;null===(e=("start"===S?L:P).current)||void 0===e||e.focus(),F(!1)},offset:8,alignment:m,fitAvailableHeight:!0,customZIndex:b})}),!i&&_&&t(vs,{children:[e(bs,{"aria-hidden":!0}),e(ys,{id:n?`${n}-error-message`:"error-message",tabIndex:0,"data-testid":n?`${n}-error-message`:"error-message",children:_})]})]}))},qk=t=>{var{variant:r="dial"}=t,n=_e(t,["variant"]);return e("combobox"===r?Kk:Vk,Object.assign({},n))};k.div`
    position: relative;
`;const Zk=k(_d)`
    height: calc(3rem - 2px); // exclude top and bottom borders
`,Gk=r=>{var{id:n,disabled:o=!1,readOnly:i=!1,error:l,value:d,placeholder:c,format:u="24hr",onChange:h,onFocus:f,onBlur:g}=r,m=_e(r,["id","disabled","readOnly","error","value","placeholder","format","onChange","onFocus","onBlur"]);const[b,v]=s(!1),y=a(null);Jt("mousedown",(function(e){o||i||$(e)}),"document"),Jt("keyup",(function(e){if("Tab"===e.code)$(e)}),"document");const x=()=>{o||i||b||(v(!0),null==f||f())};const w=()=>{v(!1),null==g||g()},$=e=>{y.current&&!y.current.contains(e.target)&&b&&w()},C=p((()=>"12hr"===u?"HH:MMam":"HH:MM"),[u,c]);return t(Fd,Object.assign({ref:y,id:n,$readOnly:i,$disabled:o,$error:l},m,{children:[e(Zk,{onFocus:x,readOnly:!0,placeholder:c||C(),value:m$.formatDisplayValue(d,u),disabled:o,"data-testid":n?`${n}-timepicker-selector`:"timepicker-selector"}),e(Yk,{id:n,show:b,value:d,format:u,onCancel:()=>{w()},onChange:e=>{null==h||h(e),w()}})]}))},Qk=k(Tx)`
    margin-right: 0.5rem;
`,Xk=k(ou)`
    width: 2.5rem;

    input {
        text-align: center;
    }
`,Jk=k(Xk)`
    // Cheat to balance the placeholder look while ensuring enough width
    margin-left: 0.5rem;
    width: 6rem;

    input {
        text-align: left;
    }
`,eF=k(Sa.BodyBL)`
    margin: 0 0.25rem;
    ${e=>{if(e.$inactive)return F`
                color: ${Gi["text-disabled"]};
            `}}
`,tF=k.div`
    display: flex;
    align-items: center;
    height: calc(3rem - 2px); // exclude top and bottom borders
`,rF=k(Sa.BodyBL)``,nF=n=>{var{disabled:o,error:i,value:l,onChange:d,onBlur:c,onChangeRaw:u,onBlurRaw:f,readOnly:p,placeholder:g="00-8888",autoComplete:m,"aria-labelledby":b,"aria-describedby":y,"aria-invalid":x}=n,w=_e(n,["disabled","error","value","onChange","onBlur","onChangeRaw","onBlurRaw","readOnly","placeholder","autoComplete","aria-labelledby","aria-describedby","aria-invalid"]);const[$,C]=s(""),[S,D]=s(""),[k,F]=s("none"),[_]=s((()=>tt.generate())),E=`${_}-floor-label`,O=`${_}-unit-label`,T=`${_}-live-message`,I=a(null),M=a(null),A=a(null),B=a($),z=a(S),j=a(k),R=e=>e.toLocaleUpperCase().replace(/[^0-9A-Za-z]/g,""),L=tr({ref:M,formatter:R}),P=tr({ref:A,formatter:R}),N=v((()=>{let e="";const t=te("Hash",$),r=te("Dash",S);switch(k){case"floor":e=t;break;case"unit":e=$?[t,r].join(" "):r;break;default:e=""}return e}),[k,$,S]),H=e=>{B.current=e,C(e)},W=e=>{z.current=e,D(e)},Y=e=>{j.current=e,F(e)};h((()=>{"floor"===k&&3===$.length&&A.current&&A.current.focus()}),[$]),h((()=>{G(l)}),[l]);const V=e=>{Y(e.target.name),e.target.select()},U=e=>{const t=e.target.name,r=e.target.value,n=Z(r);"floor"===t?(H(n),n!==$&&Q(n,t)):"unit"===t&&(W(n),n!==S&&Q(n,t))},K=e=>{const t=e.target.name;if("floor"===t){const e=L();if(!e)return;const{nextValue:r,updateCaretPosition:n}=e;n(),H(r),Q(r,t)}else if("unit"===t){const e=P();if(!e)return;const{nextValue:r,updateCaretPosition:n}=e;n(),W(r),Q(r,t)}},q=e=>{var t;"Backspace"!==e.code&&"Backspace"!==e.key||"unit"===k&&0===S.length&&(null===(t=M.current)||void 0===t||t.focus())},Z=e=>/^[0-9]$/.test(e)?rt.padValue(e,!0):e.toLocaleUpperCase(),G=e=>{if(e!==oF)if(void 0===e||0===e.length)H(""),W("");else{const t=e.split("-");if(2===t.length){const e=t[0],r=t[1];H("floor"===k?e:Z(e)),W("unit"===k?r:Z(r))}}},Q=(e,t)=>{if(!d&&!u)return;const r={floor:B.current,unit:z.current};if(r[t]=e,d){const e=J(r);d(e)}u&&u([r.floor,r.unit])},X=()=>{if(!c&&!f)return;const e={floor:Z(B.current),unit:Z(z.current)};if(c){const t=J(e);c(t)}f&&f([e.floor,e.unit])},J=e=>{const t=[e.floor,e.unit];return e.floor.length>0&&e.unit.length>0?t.join("-"):t.every((e=>""===e))?"":oF},ee=e=>e.split("-");function te(e,t){return t?`${e} ${Array.from(t).join(" ")}`:""}return t(Fd,Object.assign({},w,{ref:I,onClick:()=>{"none"===k&&M.current&&M.current.focus()},$disabled:o,$error:i,$readOnly:p,tabIndex:-1,onBlur:e=>{I.current&&I.current.contains(e.relatedTarget)||"none"!==j.current&&(Y("none"),X())},children:[e(Qk,{"data-testid":"addon",$disabled:o,$readOnly:p,children:"#"}),p&&l?(r=>{const n=r.split("-"),o=[te("Hash",n[0]),te("Dash",n[1])].join(" ");return t(tF,{"data-testid":"readonly-display",tabIndex:0,role:"textbox","aria-readonly":!0,"aria-labelledby":b,"aria-describedby":y,"aria-invalid":x,children:[e(rF,{children:n[0]}),e(eF,{children:"-"}),e(rF,{children:n[1]}),e(Zs,{children:o})]})})(l):t(r,{children:[e(Xk,{name:"floor",maxLength:3,value:$,ref:M,onFocus:V,onBlur:U,onChange:K,disabled:o,readOnly:p,type:"text",pattern:"[0-9A-Z]{2,3}","data-testid":"floor-input","aria-labelledby":Qs(b,E),"aria-describedby":Qs(y,T),"aria-invalid":x,placeholder:"floor"!==k||p||o?ee(g)[0]:"",autoComplete:m,styleType:"no-border"}),e(Zs,{"aria-hidden":!0,id:E,children:"Enter floor number"}),e(eF,{$inactive:0===$.length,children:"-"}),e(Jk,{name:"unit",maxLength:5,value:S,ref:A,onFocus:V,onBlur:U,onChange:K,onKeyDown:q,disabled:o,readOnly:p,type:"text",pattern:"[0-9A-Z]{2,5}","data-testid":"unit-input","aria-labelledby":Qs(b,O),"aria-describedby":Qs(y,T),"aria-invalid":x,placeholder:"unit"!==k||p||o?ee(g)[1]:"",autoComplete:m,styleType:"no-border"}),e(Zs,{"aria-hidden":!0,id:O,children:"Enter unit number"}),e(Zs,{id:T,"aria-live":"polite",children:N})]})]}))},oF="Invalid unit number",iF={DateInput:t=>{var{label:r,errorMessage:n,id:o,"data-error-testid":i,"data-testid":a,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:h,xsCols:f,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v}=t,y=_e(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);const[x]=s((()=>`form-date-input-${tt.generate()}`)),w=null!=o?o:x;return e(Bs,{id:w,label:r,errorMessage:n,"data-error-testid":i,disabled:y.disabled,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:h,xsCols:f,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v,children:e(Pd,Object.assign({id:`${w}-base`,"data-testid":a||o,"aria-labelledby":`${w}-label`,error:!!n},y))})},DateRangeInput:t=>{var{label:r,errorMessage:n,id:o,"data-error-testid":i,"data-testid":a,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:h,xsCols:f,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v}=t,y=_e(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);const[x]=s((()=>`form-date-range-input-${tt.generate()}`)),w=null!=o?o:x;return e(Bs,{id:w,label:r,errorMessage:n,"data-error-testid":i,disabled:y.disabled,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:h,xsCols:f,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v,children:e(Qd,Object.assign({id:`${o}-base`,"data-testid":a?`${a}-base`:void 0,"aria-labelledby":`${w}-label`,error:!!n},y))})},ESignature:t=>{const{label:r,errorMessage:n,id:o="form-field","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=_e(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Bs,{id:o,label:r,errorMessage:n,"data-error-testid":i,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e(_c,Object.assign({id:`${o}-base`,"data-testid":a||o},v))})},HistogramSlider:t=>{var{label:r,errorMessage:n,id:o="form-histogram-slider","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=_e(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Bs,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e(Xc,Object.assign({id:`${o}-base`,"data-testid":a||o},v))})},Input:iu,InputGroup:Mx,MaskedInput:Zx,Label:ws,MultiSelect:t=>{var{label:r,errorMessage:n,id:o,"data-error-testid":i,"data-testid":a,enableSearch:l=!1,layoutType:d,mobileCols:c,tabletCols:u,desktopCols:h,xxsCols:f,xsCols:p,smCols:g,mdCols:m,lgCols:b,xlCols:v,xxlCols:y,variant:x}=t,w=_e(t,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","variant"]);const[$]=s((()=>`form-field-${tt.generate()}`)),C=null!=o?o:$;return e(Bs,{id:C,"data-testid":a,label:r,errorMessage:n,"data-error-testid":i,disabled:w.disabled,layoutType:d,mobileCols:c,tabletCols:u,desktopCols:h,xxsCols:f,xsCols:p,smCols:g,mdCols:m,lgCols:b,xlCols:v,xxlCols:y,children:e(Gx,Object.assign({id:`${C}-base`,"data-testid":a?`${a}-base`:void 0,error:!!n,enableSearch:l,variant:x},w))})},NestedSelect:t=>{var{label:r,errorMessage:n,id:o,"data-error-testid":i,"data-testid":a,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:h,xsCols:f,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v}=t,y=_e(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);const[x]=s((()=>`form-field-${tt.generate()}`)),w=null!=o?o:x;return e(Bs,{id:w,"data-testid":a,label:r,errorMessage:n,"data-error-testid":i,disabled:y.disabled,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:h,xsCols:f,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v,children:e(ew,Object.assign({id:`${w}-base`,"data-testid":a?`${a}-base`:void 0,error:!!n},y))})},NestedMultiSelect:t=>{var{label:r,errorMessage:n,id:o,"data-error-testid":i,"data-testid":a,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:h,xsCols:f,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v}=t,y=_e(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);const[x]=s((()=>`form-field-${tt.generate()}`)),w=null!=o?o:x;return e(Bs,{id:w,"data-testid":a,label:r,errorMessage:n,"data-error-testid":i,disabled:y.disabled,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:h,xsCols:f,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v,children:e(Jx,Object.assign({id:`${w}-base`,"data-testid":a?`${a}-base`:void 0,error:!!n},y))})},Select:t=>{var{label:r,errorMessage:n,id:o,"data-error-testid":i,"data-testid":a,enableSearch:l=!1,layoutType:d,mobileCols:c,tabletCols:u,desktopCols:h,xxsCols:f,xsCols:p,smCols:g,mdCols:m,lgCols:b,xlCols:v,xxlCols:y,variant:x}=t,w=_e(t,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","variant"]);const[$]=s((()=>`form-field-${tt.generate()}`)),C=null!=o?o:$;return e(Bs,{id:C,"data-testid":a,label:r,errorMessage:n,"data-error-testid":i,disabled:w.disabled,layoutType:d,mobileCols:c,tabletCols:u,desktopCols:h,xxsCols:f,xsCols:p,smCols:g,mdCols:m,lgCols:b,xlCols:v,xxlCols:y,children:e(Gw,Object.assign({id:`${C}-base`,"data-testid":a?`${a}-base`:void 0,error:!!n,enableSearch:l,variant:x},w))})},SelectHistogram:t=>{var{label:r,errorMessage:n,id:o,"data-error-testid":i,"data-testid":a,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:h,xsCols:f,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v,histogramSlider:y}=t,x=_e(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","histogramSlider"]);const[w]=s((()=>`form-field-${tt.generate()}`)),$=null!=o?o:w;return e(Bs,{id:$,"data-testid":a,label:r,errorMessage:n,"data-error-testid":i,disabled:x.disabled,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:h,xsCols:f,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v,children:e(t$,Object.assign({histogramSlider:y,error:!!n,"data-testid":a?`${a}-base`:void 0,id:`${$}-base`},x))})},Slider:t=>{var{label:r,errorMessage:n,id:o="form-slider","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=_e(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Bs,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e(r$,Object.assign({id:`${o}-base`,"data-testid":a||o},v))})},RangeSlider:t=>{var{label:r,errorMessage:n,id:o="form-range-slider","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=_e(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Bs,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e(Uc,Object.assign({id:`${o}-base`,"data-testid":a||o},v))})},RangeSelect:t=>{var{label:r,errorMessage:n,id:o="form-select","data-error-testid":i,"data-testid":a,enableSearch:s=!1,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:h,xsCols:f,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v}=t,y=_e(t,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Bs,{id:o,label:r,errorMessage:n,"data-error-testid":i,disabled:y.disabled,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:h,xsCols:f,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v,children:e(Zw,Object.assign({id:`${o}-base`,"data-testid":a||o,error:!!n,enableSearch:s},y))})},Textarea:u$,Timepicker:t=>{var{label:r,errorMessage:n,id:o="form-timepicker","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=_e(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Bs,{id:o,label:r,errorMessage:n,disabled:v.disabled,"data-error-testid":i,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e(Gk,Object.assign({id:`${o}-base`,"data-testid":a||o,error:!!n},v))})},TimeRangePicker:t=>{var{label:r,errorMessage:n,id:o="form-timepicker","data-error-testid":i,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=_e(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e(Bs,{id:o,label:r,errorMessage:n,disabled:v.disabled,"data-error-testid":i,layoutType:s,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e(qk,Object.assign({id:`${o}-base`,"data-testid":a||o,error:!!n},v))})},CustomField:t=>{var{id:r="form-custom-field","data-error-testid":n,children:o}=t,i=_e(t,["id","data-error-testid","children"]);return e(Bs,Object.assign({id:r,"data-error-testid":n},i,{children:o}))},UnitNumberInput:t=>{var{label:r,errorMessage:n,id:o,"data-error-testid":i,"data-testid":a,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:h,xsCols:f,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v}=t,y=_e(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);const[x]=s((()=>`form-unit-number-input-${tt.generate()}`)),w=null!=o?o:x;return e(Bs,{id:w,"data-testid":a,label:r,errorMessage:n,"data-error-testid":i,disabled:y.disabled,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:h,xsCols:f,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v,children:e(nF,Object.assign({id:`${w}-base`,"data-testid":a?`${a}-base`:void 0,"aria-labelledby":`${w}-label`,error:!!n},y))})},PhoneNumberInput:t=>{var{label:r,errorMessage:n,id:o,"data-error-testid":i,"data-testid":a,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:h,xsCols:f,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v}=t,y=_e(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);const[x]=s((()=>`form-phone-number-input-${tt.generate()}`)),w=null!=o?o:x;return e(Bs,{id:w,"data-testid":a,label:r,errorMessage:n,"data-error-testid":i,disabled:y.disabled,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:h,xsCols:f,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v,children:e(mw,Object.assign({id:`${w}-base`,"data-testid":a?`${a}-base`:void 0,"aria-labelledby":`${w}-label`,error:!!n},y))})},PredictiveTextInput:t=>{var{label:r,errorMessage:n,id:o,"data-error-testid":i,"data-testid":a,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:h,xsCols:f,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v}=t,y=_e(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);const[x]=s((()=>`form-field-${tt.generate()}`)),w=null!=o?o:x;return e(Bs,{id:w,"data-testid":a,label:r,errorMessage:n,"data-error-testid":i,disabled:y.disabled,layoutType:l,mobileCols:d,tabletCols:c,desktopCols:u,xxsCols:h,xsCols:f,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v,children:e(Uw,Object.assign({id:`${w}-base`,"data-testid":a?`${a}-base`:void 0,"aria-labelledby":`${w}-label`,error:!!n},y))})},OtpVerification:t=>{var{label:r,id:n,"data-error-testid":o,"data-testid":i,layoutType:a,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=_e(t,["label","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);const[y]=s((()=>`form-otp-verification-${tt.generate()}`)),x=null!=n?n:y;return e(Bs,{id:x,"data-testid":i,label:r,"data-error-testid":o,layoutType:a,mobileCols:l,tabletCols:d,desktopCols:c,xxsCols:u,xsCols:h,smCols:f,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e(Rw,Object.assign({id:`${x}-base-field`,inputId:`${x}-base`,"data-testid":i?`${i}-base`:void 0},v))})}};export{Gi as C,iF as F,Dc as S,Ee as _,kc as a};
//# sourceMappingURL=index.f27e0912.js.map
