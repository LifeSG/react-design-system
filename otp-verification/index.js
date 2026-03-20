import{jsx as e,jsxs as r,Fragment as t}from"react/jsx-runtime";import*as n from"react";import o,{version as i,useRef as a,useState as s,isValidElement as l,createRef as d,cloneElement as c,PureComponent as u,useEffect as g,useLayoutEffect as h,useCallback as m,createContext as f,useContext as b,useMemo as p,createElement as y,forwardRef as v,useImperativeHandle as x}from"react";import{TickCircleFillIcon as w}from"@lifesg/react-icons";import"@lifesg/react-icons/i-circle-fill";import $,{css as F,isStyledComponent as C,keyframes as E,ThemeContext as S}from"styled-components";import{ExternalIcon as D}from"@lifesg/react-icons/external";import{CrossIcon as B}from"@lifesg/react-icons/cross";import{useFloatingTree as k,FloatingTree as O,useFloatingNodeId as T,FloatingNode as z,useFloating as A,useTransitionStatus as I,useDismiss as M,useInteractions as j,FloatingFocusManager as L,autoUpdate as _,offset as R,flip as H,shift as P,limitShift as W,size as N,useTransitionStyles as V,useClick as Y,FloatingPortal as U}from"@floating-ui/react";import q,{findDOMNode as G}from"react-dom";import{ExclamationCircleFillIcon as Z}from"@lifesg/react-icons/exclamation-circle-fill";import{ChevronDownIcon as K}from"@lifesg/react-icons/chevron-down";import{SquareIcon as X}from"@lifesg/react-icons/square";import{SquareFillIcon as Q}from"@lifesg/react-icons/square-fill";import{SquareTickFillIcon as J}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as ee}from"@lifesg/react-icons/tick";import{MagnifierIcon as re}from"@lifesg/react-icons/magnifier";import"@lifesg/react-icons/caret-right";import{MinusSquareFillIcon as te}from"@lifesg/react-icons/minus-square-fill";function ne(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)r.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(t[n[o]]=e[n[o]])}return t}function oe(e,r,t,n){return new(t||(t=Promise))((function(o,i){function a(e){try{l(n.next(e))}catch(e){i(e)}}function s(e){try{l(n.throw(e))}catch(e){i(e)}}function l(e){var r;e.done?o(e.value):(r=e.value,r instanceof t?r:new t((function(e){e(r)}))).then(a,s)}l((n=n.apply(e,r||[])).next())}))}"function"==typeof SuppressedError&&SuppressedError;var ie="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function ae(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var se={exports:{}};se.exports=function(){var e=1e3,r=6e4,t=36e5,n="millisecond",o="second",i="minute",a="hour",s="day",l="week",d="month",c="quarter",u="year",g="date",h="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,b={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var r=["th","st","nd","rd"],t=e%100;return"["+e+(r[(t-20)%10]||r[t]||r[0])+"]"}},p=function(e,r,t){var n=String(e);return!n||n.length>=r?e:""+Array(r+1-n.length).join(t)+e},y={s:p,z:function(e){var r=-e.utcOffset(),t=Math.abs(r),n=Math.floor(t/60),o=t%60;return(r<=0?"+":"-")+p(n,2,"0")+":"+p(o,2,"0")},m:function e(r,t){if(r.date()<t.date())return-e(t,r);var n=12*(t.year()-r.year())+(t.month()-r.month()),o=r.clone().add(n,d),i=t-o<0,a=r.clone().add(n+(i?-1:1),d);return+(-(n+(t-o)/(i?o-a:a-o))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:s,D:g,h:a,m:i,s:o,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",x={};x[v]=b;var w="$isDayjsObject",$=function(e){return e instanceof S||!(!e||!e[w])},F=function e(r,t,n){var o;if(!r)return v;if("string"==typeof r){var i=r.toLowerCase();x[i]&&(o=i),t&&(x[i]=t,o=i);var a=r.split("-");if(!o&&a.length>1)return e(a[0])}else{var s=r.name;x[s]=r,o=s}return!n&&o&&(v=o),o||!n&&v},C=function(e,r){if($(e))return e.clone();var t="object"==typeof r?r:{};return t.date=e,t.args=arguments,new S(t)},E=y;E.l=F,E.i=$,E.w=function(e,r){return C(e,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var S=function(){function b(e){this.$L=F(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var p=b.prototype;return p.parse=function(e){this.$d=function(e){var r=e.date,t=e.utc;if(null===r)return new Date(NaN);if(E.u(r))return new Date;if(r instanceof Date)return new Date(r);if("string"==typeof r&&!/Z$/i.test(r)){var n=r.match(m);if(n){var o=n[2]-1||0,i=(n[7]||"0").substring(0,3);return t?new Date(Date.UTC(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(r)}(e),this.init()},p.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},p.$utils=function(){return E},p.isValid=function(){return!(this.$d.toString()===h)},p.isSame=function(e,r){var t=C(e);return this.startOf(r)<=t&&t<=this.endOf(r)},p.isAfter=function(e,r){return C(e)<this.startOf(r)},p.isBefore=function(e,r){return this.endOf(r)<C(e)},p.$g=function(e,r,t){return E.u(e)?this[r]:this.set(t,e)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(e,r){var t=this,n=!!E.u(r)||r,c=E.p(e),h=function(e,r){var o=E.w(t.$u?Date.UTC(t.$y,r,e):new Date(t.$y,r,e),t);return n?o:o.endOf(s)},m=function(e,r){return E.w(t.toDate()[e].apply(t.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(r)),t)},f=this.$W,b=this.$M,p=this.$D,y="set"+(this.$u?"UTC":"");switch(c){case u:return n?h(1,0):h(31,11);case d:return n?h(1,b):h(0,b+1);case l:var v=this.$locale().weekStart||0,x=(f<v?f+7:f)-v;return h(n?p-x:p+(6-x),b);case s:case g:return m(y+"Hours",0);case a:return m(y+"Minutes",1);case i:return m(y+"Seconds",2);case o:return m(y+"Milliseconds",3);default:return this.clone()}},p.endOf=function(e){return this.startOf(e,!1)},p.$set=function(e,r){var t,l=E.p(e),c="set"+(this.$u?"UTC":""),h=(t={},t[s]=c+"Date",t[g]=c+"Date",t[d]=c+"Month",t[u]=c+"FullYear",t[a]=c+"Hours",t[i]=c+"Minutes",t[o]=c+"Seconds",t[n]=c+"Milliseconds",t)[l],m=l===s?this.$D+(r-this.$W):r;if(l===d||l===u){var f=this.clone().set(g,1);f.$d[h](m),f.init(),this.$d=f.set(g,Math.min(this.$D,f.daysInMonth())).$d}else h&&this.$d[h](m);return this.init(),this},p.set=function(e,r){return this.clone().$set(e,r)},p.get=function(e){return this[E.p(e)]()},p.add=function(n,c){var g,h=this;n=Number(n);var m=E.p(c),f=function(e){var r=C(h);return E.w(r.date(r.date()+Math.round(e*n)),h)};if(m===d)return this.set(d,this.$M+n);if(m===u)return this.set(u,this.$y+n);if(m===s)return f(1);if(m===l)return f(7);var b=(g={},g[i]=r,g[a]=t,g[o]=e,g)[m]||1,p=this.$d.getTime()+n*b;return E.w(p,this)},p.subtract=function(e,r){return this.add(-1*e,r)},p.format=function(e){var r=this,t=this.$locale();if(!this.isValid())return t.invalidDate||h;var n=e||"YYYY-MM-DDTHH:mm:ssZ",o=E.z(this),i=this.$H,a=this.$m,s=this.$M,l=t.weekdays,d=t.months,c=t.meridiem,u=function(e,t,o,i){return e&&(e[t]||e(r,n))||o[t].slice(0,i)},g=function(e){return E.s(i%12||12,e,"0")},m=c||function(e,r,t){var n=e<12?"AM":"PM";return t?n.toLowerCase():n};return n.replace(f,(function(e,n){return n||function(e){switch(e){case"YY":return String(r.$y).slice(-2);case"YYYY":return E.s(r.$y,4,"0");case"M":return s+1;case"MM":return E.s(s+1,2,"0");case"MMM":return u(t.monthsShort,s,d,3);case"MMMM":return u(d,s);case"D":return r.$D;case"DD":return E.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return u(t.weekdaysMin,r.$W,l,2);case"ddd":return u(t.weekdaysShort,r.$W,l,3);case"dddd":return l[r.$W];case"H":return String(i);case"HH":return E.s(i,2,"0");case"h":return g(1);case"hh":return g(2);case"a":return m(i,a,!0);case"A":return m(i,a,!1);case"m":return String(a);case"mm":return E.s(a,2,"0");case"s":return String(r.$s);case"ss":return E.s(r.$s,2,"0");case"SSS":return E.s(r.$ms,3,"0");case"Z":return o}return null}(e)||o.replace(":","")}))},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(n,g,h){var m,f=this,b=E.p(g),p=C(n),y=(p.utcOffset()-this.utcOffset())*r,v=this-p,x=function(){return E.m(f,p)};switch(b){case u:m=x()/12;break;case d:m=x();break;case c:m=x()/3;break;case l:m=(v-y)/6048e5;break;case s:m=(v-y)/864e5;break;case a:m=v/t;break;case i:m=v/r;break;case o:m=v/e;break;default:m=v}return h?m:E.a(m)},p.daysInMonth=function(){return this.endOf(d).$D},p.$locale=function(){return x[this.$L]},p.locale=function(e,r){if(!e)return this.$L;var t=this.clone(),n=F(e,r,!0);return n&&(t.$L=n),t},p.clone=function(){return E.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},b}(),D=S.prototype;return C.prototype=D,[["$ms",n],["$s",o],["$m",i],["$H",a],["$W",s],["$M",d],["$y",u],["$D",g]].forEach((function(e){D[e[1]]=function(r){return this.$g(r,e[0],e[1])}})),C.extend=function(e,r){return e.$i||(e(r,S,C),e.$i=!0),C},C.locale=F,C.isDayjs=$,C.unix=function(e){return C(1e3*e)},C.en=x[v],C.Ls=x,C.p={},C}();var le=ae(se.exports),de={exports:{}};de.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,t=/\d\d/,n=/\d\d?/,o=/\d*[^-_:/,()\s\d]+/,i={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(r){this[e]=+r}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var r=e.match(/([+-]|\d\d)/g),t=60*r[1]+(+r[2]||0);return 0===t?0:"+"===r[0]?-t:t}(e)}],d=function(e){var r=i[e];return r&&(r.indexOf?r:r.s.concat(r.f))},c=function(e,r){var t,n=i.meridiem;if(n){for(var o=1;o<=24;o+=1)if(e.indexOf(n(o,0,r))>-1){t=o>12;break}}else t=e===(r?"pm":"PM");return t},u={A:[o,function(e){this.afternoon=c(e,!1)}],a:[o,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[t,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[t,s("day")],Do:[o,function(e){var r=i.ordinal,t=e.match(/\d+/);if(this.day=t[0],r)for(var n=1;n<=31;n+=1)r(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[t,s("month")],MMM:[o,function(e){var r=d("months"),t=(d("monthsShort")||r.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],MMMM:[o,function(e){var r=d("months").indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],Y:[/[+-]?\d+/,s("year")],YY:[t,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function g(t){var n,o;n=t,o=i&&i.formats;for(var a=(t=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(r,t,n){var i=n&&n.toUpperCase();return t||o[n]||e[n]||o[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,r,t){return r||t.slice(1)}))}))).match(r),s=a.length,l=0;l<s;l+=1){var d=a[l],c=u[d],g=c&&c[0],h=c&&c[1];a[l]=h?{regex:g,parser:h}:d.replace(/^\[|\]$/g,"")}return function(e){for(var r={},t=0,n=0;t<s;t+=1){var o=a[t];if("string"==typeof o)n+=o.length;else{var i=o.regex,l=o.parser,d=e.slice(n),c=i.exec(d)[0];l.call(r,c),e=e.replace(c,"")}}return function(e){var r=e.afternoon;if(void 0!==r){var t=e.hours;r?t<12&&(e.hours+=12):12===t&&(e.hours=0),delete e.afternoon}}(r),r}}return function(e,r,t){t.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var n=r.prototype,o=n.parse;n.parse=function(e){var r=e.date,n=e.utc,a=e.args;this.$u=n;var s=a[1];if("string"==typeof s){var l=!0===a[2],d=!0===a[3],c=l||d,u=a[2];d&&(u=a[2]),i=this.$locale(),!l&&u&&(i=t.Ls[u]),this.$d=function(e,r,t){try{if(["x","X"].indexOf(r)>-1)return new Date(("X"===r?1e3:1)*e);var n=g(r)(e),o=n.year,i=n.month,a=n.day,s=n.hours,l=n.minutes,d=n.seconds,c=n.milliseconds,u=n.zone,h=new Date,m=a||(o||i?1:h.getDate()),f=o||h.getFullYear(),b=0;o&&!i||(b=i>0?i-1:h.getMonth());var p=s||0,y=l||0,v=d||0,x=c||0;return u?new Date(Date.UTC(f,b,m,p,y,v,x+60*u.offset*1e3)):t?new Date(Date.UTC(f,b,m,p,y,v,x)):new Date(f,b,m,p,y,v,x)}catch(e){return new Date("")}}(r,s,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&r!=this.format(s)&&(this.$d=new Date("")),i={}}else if(s instanceof Array)for(var h=s.length,m=1;m<=h;m+=1){a[1]=s[m-1];var f=t.apply(this,a);if(f.isValid()){this.$d=f.$d,this.$L=f.$L,this.init();break}m===h&&(this.$d=new Date(""))}else o.call(this,e)}}}();var ce=ae(de.exports),ue={exports:{}};ue.exports=function(e,r,t){r.prototype.isBetween=function(e,r,n,o){var i=t(e),a=t(r),s="("===(o=o||"()")[0],l=")"===o[1];return(s?this.isAfter(i,n):!this.isBefore(i,n))&&(l?this.isBefore(a,n):!this.isAfter(a,n))||(s?this.isBefore(i,n):!this.isAfter(i,n))&&(l?this.isAfter(a,n):!this.isBefore(a,n))}};var ge=ae(ue.exports),he={exports:{}};he.exports=function(e,r){r.prototype.isSameOrAfter=function(e,r){return this.isSame(e,r)||this.isAfter(e,r)}};var me=ae(he.exports),fe={exports:{}};fe.exports=function(e,r){r.prototype.isSameOrBefore=function(e,r){return this.isSame(e,r)||this.isBefore(e,r)}};var be,pe,ye,ve=ae(fe.exports),xe={exports:{}},we=ae(xe.exports=(be={year:0,month:1,day:2,hour:3,minute:4,second:5},pe={},function(e,r,t){var n,o=function(e,r,t){void 0===t&&(t={});var n=new Date(e),o=function(e,r){void 0===r&&(r={});var t=r.timeZoneName||"short",n=e+"|"+t,o=pe[n];return o||(o=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:t}),pe[n]=o),o}(r,t);return o.formatToParts(n)},i=function(e,r){for(var n=o(e,r),i=[],a=0;a<n.length;a+=1){var s=n[a],l=s.type,d=s.value,c=be[l];c>=0&&(i[c]=parseInt(d,10))}var u=i[3],g=24===u?0:u,h=i[0]+"-"+i[1]+"-"+i[2]+" "+g+":"+i[4]+":"+i[5]+":000",m=+e;return(t.utc(h).valueOf()-(m-=m%1e3))/6e4},a=r.prototype;a.tz=function(e,r){void 0===e&&(e=n);var o=this.utcOffset(),i=this.toDate(),a=i.toLocaleString("en-US",{timeZone:e}),s=Math.round((i-new Date(a))/1e3/60),l=t(a,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-s,!0);if(r){var d=l.utcOffset();l=l.add(o-d,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var r=this.$x.$timezone||t.tz.guess(),n=o(this.valueOf(),r,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=a.startOf;a.startOf=function(e,r){if(!this.$x||!this.$x.$timezone)return s.call(this,e,r);var n=t(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,e,r).tz(this.$x.$timezone,!0)},t.tz=function(e,r,o){var a=o&&r,s=o||r||n,l=i(+t(),s);if("string"!=typeof e)return t(e).tz(s);var d=function(e,r,t){var n=e-60*r*1e3,o=i(n,t);if(r===o)return[n,r];var a=i(n-=60*(o-r)*1e3,t);return o===a?[n,o]:[e-60*Math.min(o,a)*1e3,Math.max(o,a)]}(t.utc(e,a).valueOf(),l,s),c=d[0],u=d[1],g=t(c).utcOffset(u);return g.$x.$timezone=s,g},t.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},t.tz.setDefault=function(e){n=e}}));le.extend(ge),le.extend(ve),le.extend(me),le.extend(ce),le.extend(we),function(e){e.generateDays=e=>{const r=e.startOf("month"),t=le(r).startOf("week");return $e(t).map((e=>Fe(e)))},e.generateDaysForCurrentWeek=e=>{const r=e.startOf("week");return Fe(r)},e.generateMonths=e=>{const r=[];for(let t=0;t<12;t++){const n=e.month(t);r.push(le(n))}return r},e.generateDecadeOfYears=e=>{const r=e.year(),t=10*Math.floor(r/10),n=e.year(t),o=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)o.push(n.add(e,"year"));return o},e.getStartEndDecade=e=>{const r=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:r,endDecade:+le(`${r+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const r=le(e,"HH:mm");return r.isValid()?r.format("h:mm a"):""},e.isWithinRange=(e,r,t,n="day")=>!r&&!t||(r&&t?e.isBetween(r,t,n,"[]"):r?e.isSameOrAfter(r,n):e.isSameOrBefore(t,n)),e.isPreviousMonthWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"month"),t,void 0,"month"),e.isPreviousYearWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"year"),t,void 0,"year"),e.isPreviousDecadeWithinRange=(r,t)=>{const{beginDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).subtract(1,"year"),t,void 0,"year")},e.isNextMonthWithinRange=(r,t)=>e.isWithinRange(r.add(1,"month"),void 0,t,"month"),e.isNextYearWithinRange=(r,t)=>e.isWithinRange(r.add(1,"year"),void 0,t,"year"),e.isNextDecadeWithinRange=(r,t)=>{const{endDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).add(1,"year"),void 0,t,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,r)=>({start:e.format("YYYY-MM-DD"),end:e.add(r-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(r,t,n,o)=>{const i=e.isWithinRange(r,n?le(n):void 0,o?le(o):void 0),a=t&&t.includes(r.format("YYYY-MM-DD"));return!i||!!a}}(ye||(ye={}));const $e=e=>{const r=[e];for(let t=1;t<6;t++){const n=e.add(t,"week");r.push(n)}return r},Fe=e=>{const r=[];for(let t=0;t<7;t++){const n=e.add(t,"day");r.push(n)}return r},Ce=[1,3,5,7,8,10,12],Ee=[4,6,9,11];var Se,De;!function(e){e.clampDay=(r,t,n)=>{const o=parseInt(r),i=parseInt(t),a=parseInt(n);return 0==o?"1":Ce.includes(i)?Math.min(o,31).toString():Ee.includes(i)?Math.min(o,30).toString():2===i?e.isLeapYear(a)?Math.min(o,29).toString():Math.min(o,28).toString():r},e.clampMonth=e=>{const r=parseInt(e);return 0==r?"1":r>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,r,t="HH:mm")=>{const n=le(e,t);return le(r,t).diff(n,"minute")},e.toDayjs=e=>e?le(e):le(),e.addMinutesToTime=(e,r,t="HH:mm")=>le(e,t).add(r,"minutes").format(t),e.isSame=(e,r,t="day")=>le(e).isSame(le(r),t)}(Se||(Se={})),function(e){e.isDateDisabled=(e,r)=>{const{disabledDates:t,minDate:n,maxDate:o}=r;return!!(e&&t&&t.length&&t.includes(e))||(!(!n||!le(e).isBefore(n,"day"))||!(!o||!le(e).isAfter(o,"day")))},e.sanitizeInput=e=>{if(e){const t=r(e);if(le(t,"YYYY-MM-DD",!0).isValid())return t}return""};const r=e=>{const r=e.match(/^(\d{1,4})-(\d{1,2})-(\d{1,2})$/);if(!r)return"";const[,t,n,o]=r;if(t.length<=2||parseInt(t,10)<100)return"";return`${t.padStart(4,"0")}-${n.padStart(2,"0")}-${o.padStart(2,"0")}`}}(De||(De={}));const Be=(...e)=>r=>{const t=[];for(const n of e)if("function"==typeof n){const e=n(r),o="function"==typeof e;t.push(o?e:()=>n(null))}else n.current=r,t.push((()=>{n.current=null}));if((()=>{const e=i.split(".");return parseInt(e[0],10)>=19})())return()=>{for(const e of t)e()}};var ke,Oe;!function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(ke||(ke={})),function(e){e.transformWithSpaces=(e,r)=>{const t="(.{"+r+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(t,"g"),"$1 ").trim()},e.padValue=(e,r)=>{if("0"===e)return r?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,r)=>{const t=Math.floor(r/9);return e.length>=2*t||1===e.split(" ").length&&e.length>t},e.truncateOneLine=(e,r,t,n,o=8)=>{let i=0;r>t&&(i=Math.floor((r-t)/o));const a=n+i;if(a<e.length){const r=Math.floor(a/2);return e.substring(0,r)+" ... "+e.substring(e.length-r,e.length)}return e},e.truncateTwoLines=(e,r,t,n=1.2)=>{const o=Math.floor(2*r/(.6*t))*(2/n);if(e.length<=o)return e;const i=Math.floor(.6*o),a=Math.floor(.2*o);return`${e.substring(0,i)}...${e.substring(e.length-a)}`},e.getTextWidth=(r,t)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=t;return n.measureText(r).width},e.maskValue=(e,t)=>{if(!e)return e;const{maskRange:n,unmaskRange:o,maskChar:i="•",maskRegex:a,maskTransformer:s}=t;if(s)return s(e);if(a)return e.replace(a,i);if(n){const{startIndex:t,endIndex:o}=r(n[0],n[1]);return e.substring(0,t)+i.repeat(e.substring(t,o+1).length)+e.substring(o+1)}if(o){const{startIndex:t,endIndex:n}=r(o[0],o[1]);return i.repeat(e.substring(0,t).length)+e.substring(t,n+1)+i.repeat(e.substring(n+1).length)}return e};const r=(e,r)=>e<r?{startIndex:e,endIndex:r}:{startIndex:r,endIndex:e},t=new Intl.PluralRules("en",{type:"ordinal"}),n=new Map([["one","st"],["two","nd"],["few","rd"],["other","th"]]);e.formatOrdinal=e=>{const r=t.select(e);return`${e}${n.get(r)}`},e.getMaskedDescription=(e,r,t)=>{if(!e||"masked"!==r||!t)return"";const[n,o]=t,i=n>0,a=o<e.length-1,s=i?e.substring(0,n):"",l=a?e.substring(o+1):"";return i&&a?`Starting with ${s} and ending with ${l}`:i?`Starting with ${s}`:a?`Ending with ${l}`:""}}(Oe||(Oe={}));var Te=function(e,r){return Te=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])},Te(e,r)};var ze=function(){return ze=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e},ze.apply(this,arguments)};var Ae="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var Ie=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},Me="object"==typeof Ae&&Ae&&Ae.Object===Object&&Ae,je="object"==typeof self&&self&&self.Object===Object&&self,Le=Me||je||Function("return this")(),_e=Le,Re=function(){return _e.Date.now()},He=/\s/;var Pe=function(e){for(var r=e.length;r--&&He.test(e.charAt(r)););return r},We=/^\s+/;var Ne=function(e){return e?e.slice(0,Pe(e)+1).replace(We,""):e},Ve=Le.Symbol,Ye=Ve,Ue=Object.prototype,qe=Ue.hasOwnProperty,Ge=Ue.toString,Ze=Ye?Ye.toStringTag:void 0;var Ke=function(e){var r=qe.call(e,Ze),t=e[Ze];try{e[Ze]=void 0;var n=!0}catch(e){}var o=Ge.call(e);return n&&(r?e[Ze]=t:delete e[Ze]),o},Xe=Object.prototype.toString;var Qe=Ke,Je=function(e){return Xe.call(e)},er=Ve?Ve.toStringTag:void 0;var rr=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":er&&er in Object(e)?Qe(e):Je(e)},tr=function(e){return null!=e&&"object"==typeof e};var nr=Ne,or=Ie,ir=function(e){return"symbol"==typeof e||tr(e)&&"[object Symbol]"==rr(e)},ar=/^[-+]0x[0-9a-f]+$/i,sr=/^0b[01]+$/i,lr=/^0o[0-7]+$/i,dr=parseInt;var cr=Ie,ur=Re,gr=function(e){if("number"==typeof e)return e;if(ir(e))return NaN;if(or(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=or(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=nr(e);var t=sr.test(e);return t||lr.test(e)?dr(e.slice(2),t?2:8):ar.test(e)?NaN:+e},hr=Math.max,mr=Math.min;var fr=function(e,r,t){var n,o,i,a,s,l,d=0,c=!1,u=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(r){var t=n,i=o;return n=o=void 0,d=r,a=e.apply(i,t)}function m(e){var t=e-l;return void 0===l||t>=r||t<0||u&&e-d>=i}function f(){var e=ur();if(m(e))return b(e);s=setTimeout(f,function(e){var t=r-(e-l);return u?mr(t,i-(e-d)):t}(e))}function b(e){return s=void 0,g&&n?h(e):(n=o=void 0,a)}function p(){var e=ur(),t=m(e);if(n=arguments,o=this,l=e,t){if(void 0===s)return function(e){return d=e,s=setTimeout(f,r),c?h(e):a}(l);if(u)return clearTimeout(s),s=setTimeout(f,r),h(l)}return void 0===s&&(s=setTimeout(f,r)),a}return r=gr(r)||0,cr(t)&&(c=!!t.leading,i=(u="maxWait"in t)?hr(gr(t.maxWait)||0,r):i,g="trailing"in t?!!t.trailing:g),p.cancel=function(){void 0!==s&&clearTimeout(s),d=0,n=l=o=s=void 0},p.flush=function(){return void 0===s?a:b(ur())},p},br=fr,pr=Ie;var yr=function(e,r,t){var n=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return pr(t)&&(n="leading"in t?!!t.leading:n,o="trailing"in t?!!t.trailing:o),br(e,r,{leading:n,maxWait:r,trailing:o})},vr=function(e,r,t,n){switch(r){case"debounce":return fr(e,t,n);case"throttle":return yr(e,t,n);default:return e}},xr=function(e){return"function"==typeof e},wr=function(){return"undefined"==typeof window},$r=function(e){return e instanceof Element||e instanceof HTMLDocument},Fr=function(e,r,t,n){return function(o){var i=o.width,a=o.height;r((function(r){return r.width===i&&r.height===a||r.width===i&&!n||r.height===a&&!t?r:(e&&xr(e)&&e(i,a),{width:i,height:a})}))}};!function(e){function r(r){var t=e.call(this,r)||this;t.cancelHandler=function(){t.resizeHandler&&t.resizeHandler.cancel&&(t.resizeHandler.cancel(),t.resizeHandler=null)},t.attachObserver=function(){var e=t.props,r=e.targetRef,n=e.observerOptions;if(!wr()){r&&r.current&&(t.targetRef.current=r.current);var o=t.getElement();o&&(t.observableElement&&t.observableElement===o||(t.observableElement=o,t.resizeObserver.observe(o,n)))}},t.getElement=function(){var e=t.props,r=e.querySelector,n=e.targetDomEl;if(wr())return null;if(r)return document.querySelector(r);if(n&&$r(n))return n;if(t.targetRef&&$r(t.targetRef.current))return t.targetRef.current;var o=G(t);if(!o)return null;switch(t.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return o;default:return o.parentElement}},t.createResizeHandler=function(e){var r=t.props,n=r.handleWidth,o=void 0===n||n,i=r.handleHeight,a=void 0===i||i,s=r.onResize;if(o||a){var l=Fr(s,t.setState.bind(t),o,a);e.forEach((function(e){var r=e&&e.contentRect||{},n=r.width,o=r.height;!t.skipOnMount&&!wr()&&l({width:n,height:o}),t.skipOnMount=!1}))}},t.getRenderType=function(){var e=t.props,r=e.render,n=e.children;return xr(r)?"renderProp":xr(n)?"childFunction":l(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=r.skipOnMount,o=r.refreshMode,i=r.refreshRate,a=void 0===i?1e3:i,s=r.refreshOptions;return t.state={width:void 0,height:void 0},t.skipOnMount=n,t.targetRef=d(),t.observableElement=null,wr()||(t.resizeHandler=vr(t.createResizeHandler,o,a,s),t.resizeObserver=new window.ResizeObserver(t.resizeHandler)),t}(function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function t(){this.constructor=e}Te(e,r),e.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)})(r,e),r.prototype.componentDidMount=function(){this.attachObserver()},r.prototype.componentDidUpdate=function(){this.attachObserver()},r.prototype.componentWillUnmount=function(){wr()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},r.prototype.render=function(){var e,r=this.props,t=r.render,o=r.children,i=r.nodeType,a=void 0===i?"div":i,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return t&&t(l);case"childFunction":return(e=o)(l);case"child":if((e=o).type&&"string"==typeof e.type){var d=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)r.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(t[n[o]]=e[n[o]])}return t}(l,["targetRef"]);return c(e,d)}return c(e,l);case"childArray":return(e=o).map((function(e){return!!e&&c(e,l)}));default:return n.createElement(a,null)}}}(u);var Cr=wr()?g:h;function Er(e){void 0===e&&(e={});var r=e.skipOnMount,t=void 0!==r&&r,n=e.refreshMode,o=e.refreshRate,i=void 0===o?1e3:o,l=e.refreshOptions,d=e.handleWidth,c=void 0===d||d,u=e.handleHeight,g=void 0===u||u,h=e.targetRef,m=e.observerOptions,f=e.onResize,b=a(t),p=a(null),y=null!=h?h:p,v=a(),x=s({width:void 0,height:void 0}),w=x[0],$=x[1];return Cr((function(){if(!wr()){var e=Fr(f,$,c,g);v.current=vr((function(r){(c||g)&&r.forEach((function(r){var t=r&&r.contentRect||{},n=t.width,o=t.height;!b.current&&!wr()&&e({width:n,height:o}),b.current=!1}))}),n,i,l);var r=new window.ResizeObserver(v.current);return y.current&&r.observe(y.current,m),function(){r.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[n,i,l,c,g,f,m,y.current]),ze({ref:y},w)}function Sr(e){const r=a(null);h((()=>{r.current=e}),[e]);return m(((...e)=>{var t;return null===(t=r.current)||void 0===t?void 0:t.call(r,...e)}),[])}function Dr({ref:e,formatter:r}){return()=>{var t;const n=e.current;if(!n)return;const o=n.value,i=r(o),a=null!==(t=n.selectionEnd)&&void 0!==t?t:0,s=o.substring(0,a),l=r(s),d=s.length-l.length,c=Math.max(0,a-d);return{nextValue:i,updateCaretPosition:()=>{n.value=i,n.setSelectionRange(c,c)}}}}const Br=e=>{const r=(e=>{const r=a(e),t=a();return g((()=>{t.current=r.current,r.current=e}),[e]),t.current})(e);return r!==e};var kr,Or={exports:{}};kr=e=>(()=>{var r={"./node_modules/css-mediaquery/index.js":
/*!**********************************************!*\
	  !*** ./node_modules/css-mediaquery/index.js ***!
	  \**********************************************/(e,r)=>{r.match=function(e,r){return s(e).some((function(e){var t=e.inverse,n="all"===e.type||r.type===e.type;if(n&&t||!n&&!t)return!1;var o=e.expressions.every((function(e){var t=e.feature,n=e.modifier,o=e.value,i=r[t];if(!i)return!1;switch(t){case"orientation":case"scan":return i.toLowerCase()===o.toLowerCase();case"width":case"height":case"device-width":case"device-height":o=c(o),i=c(i);break;case"resolution":o=d(o),i=d(i);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":o=l(o),i=l(i);break;case"grid":case"color":case"color-index":case"monochrome":o=parseInt(o,10)||1,i=parseInt(i,10)||0}switch(n){case"min":return i>=o;case"max":return i<=o;default:return i===o}}));return o&&!t||!o&&t}))},r.parse=s;var t=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,n=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,o=/^(?:(min|max)-)?(.+)/,i=/(em|rem|px|cm|mm|in|pt|pc)?$/,a=/(dpi|dpcm|dppx)?$/;function s(e){return e.split(",").map((function(e){var r=(e=e.trim()).match(t),i=r[1],a=r[2],s=r[3]||"",l={};return l.inverse=!!i&&"not"===i.toLowerCase(),l.type=a?a.toLowerCase():"all",s=s.match(/\([^\)]+\)/g)||[],l.expressions=s.map((function(e){var r=e.match(n),t=r[1].toLowerCase().match(o);return{modifier:t[1],feature:t[2],value:r[2]}})),l}))}function l(e){var r,t=Number(e);return t||(t=(r=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/r[2]),t}function d(e){var r=parseFloat(e);switch(String(e).match(a)[1]){case"dpcm":return r/2.54;case"dppx":return 96*r;default:return r}}function c(e){var r=parseFloat(e);switch(String(e).match(i)[1]){case"em":case"rem":return 16*r;case"cm":return 96*r/2.54;case"mm":return 96*r/2.54/10;case"in":return 96*r;case"pt":return 72*r;case"pc":return 72*r/12;default:return r}}},"./node_modules/hyphenate-style-name/index.js":
/*!****************************************************!*\
	  !*** ./node_modules/hyphenate-style-name/index.js ***!
	  \****************************************************/(e,r,t)=>{t.r(r),t.d(r,{default:()=>s});var n=/[A-Z]/g,o=/^ms-/,i={};function a(e){return"-"+e.toLowerCase()}const s=function(e){if(i.hasOwnProperty(e))return i[e];var r=e.replace(n,a);return i[e]=o.test(r)?"-"+r:r}},"./node_modules/matchmediaquery/index.js":
/*!***********************************************!*\
	  !*** ./node_modules/matchmediaquery/index.js ***!
	  \***********************************************/(e,r,t)=>{var n=t(/*! css-mediaquery */"./node_modules/css-mediaquery/index.js").match,o="undefined"!=typeof window?window.matchMedia:null;function i(e,r,t){var i=this;if(o&&!t){var a=o.call(window,e);this.matches=a.matches,this.media=a.media,a.addListener(s)}else this.matches=n(e,r),this.media=e;function s(e){i.matches=e.matches,i.media=e.media}this.addListener=function(e){a&&a.addListener(e)},this.removeListener=function(e){a&&a.removeListener(e)},this.dispose=function(){a&&a.removeListener(s)}}e.exports=function(e,r,t){return new i(e,r,t)}},"./node_modules/object-assign/index.js":
/*!*********************************************!*\
	  !*** ./node_modules/object-assign/index.js ***!
	  \*********************************************/e=>{
/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,o){for(var i,a,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var d in i=Object(arguments[l]))t.call(i,d)&&(s[d]=i[d]);if(r){a=r(i);for(var c=0;c<a.length;c++)n.call(i,a[c])&&(s[a[c]]=i[a[c]])}}return s}},"./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
	  !*** ./node_modules/prop-types/checkPropTypes.js ***!
	  \***************************************************/(e,r,t)=>{var n,o=t(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),i={},a=t(/*! ./lib/has */"./node_modules/prop-types/lib/has.js");function s(e,r,t,s,l){for(var d in e)if(a(e,d)){var c;try{if("function"!=typeof e[d]){var u=Error((s||"React class")+": "+t+" type `"+d+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[d]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw u.name="Invariant Violation",u}c=e[d](r,d,s,t,null,o)}catch(e){c=e}if(!c||c instanceof Error||n((s||"React class")+": type specification of "+t+" `"+d+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof c+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),c instanceof Error&&!(c.message in i)){i[c.message]=!0;var g=l?l():"";n("Failed "+t+" type: "+c.message+(null!=g?g:""))}}}n=function(e){var r="Warning: "+e;"undefined"!=typeof console&&console.error(r);try{throw new Error(r)}catch(e){}},s.resetWarningCache=function(){i={}},e.exports=s},"./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
	  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
	  \************************************************************/(e,r,t)=>{var n,o=t(/*! react-is */"./node_modules/react-is/index.js"),i=t(/*! object-assign */"./node_modules/object-assign/index.js"),a=t(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),s=t(/*! ./lib/has */"./node_modules/prop-types/lib/has.js"),l=t(/*! ./checkPropTypes */"./node_modules/prop-types/checkPropTypes.js");function d(){return null}n=function(e){var r="Warning: "+e;"undefined"!=typeof console&&console.error(r);try{throw new Error(r)}catch(e){}},e.exports=function(e,r){var t="function"==typeof Symbol&&Symbol.iterator,c="<<anonymous>>",u={array:f("array"),bigint:f("bigint"),bool:f("boolean"),func:f("function"),number:f("number"),object:f("object"),string:f("string"),symbol:f("symbol"),any:m(d),arrayOf:function(e){return m((function(r,t,n,o,i){if("function"!=typeof e)return new h("Property `"+i+"` of component `"+n+"` has invalid PropType notation inside arrayOf.");var s=r[t];if(!Array.isArray(s))return new h("Invalid "+o+" `"+i+"` of type `"+y(s)+"` supplied to `"+n+"`, expected an array.");for(var l=0;l<s.length;l++){var d=e(s,l,n,o,i+"["+l+"]",a);if(d instanceof Error)return d}return null}))},element:m((function(r,t,n,o,i){var a=r[t];return e(a)?null:new h("Invalid "+o+" `"+i+"` of type `"+y(a)+"` supplied to `"+n+"`, expected a single ReactElement.")})),elementType:m((function(e,r,t,n,i){var a=e[r];return o.isValidElementType(a)?null:new h("Invalid "+n+" `"+i+"` of type `"+y(a)+"` supplied to `"+t+"`, expected a single ReactElement type.")})),instanceOf:function(e){return m((function(r,t,n,o,i){if(!(r[t]instanceof e)){var a=e.name||c;return new h("Invalid "+o+" `"+i+"` of type `"+((s=r[t]).constructor&&s.constructor.name?s.constructor.name:c)+"` supplied to `"+n+"`, expected instance of `"+a+"`.")}var s;return null}))},node:m((function(e,r,t,n,o){return p(e[r])?null:new h("Invalid "+n+" `"+o+"` supplied to `"+t+"`, expected a ReactNode.")})),objectOf:function(e){return m((function(r,t,n,o,i){if("function"!=typeof e)return new h("Property `"+i+"` of component `"+n+"` has invalid PropType notation inside objectOf.");var l=r[t],d=y(l);if("object"!==d)return new h("Invalid "+o+" `"+i+"` of type `"+d+"` supplied to `"+n+"`, expected an object.");for(var c in l)if(s(l,c)){var u=e(l,c,n,o,i+"."+c,a);if(u instanceof Error)return u}return null}))},oneOf:function(e){return Array.isArray(e)?m((function(r,t,n,o,i){for(var a=r[t],s=0;s<e.length;s++)if(g(a,e[s]))return null;var l=JSON.stringify(e,(function(e,r){return"symbol"===v(r)?String(r):r}));return new h("Invalid "+o+" `"+i+"` of value `"+String(a)+"` supplied to `"+n+"`, expected one of "+l+".")})):(n(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),d)},oneOfType:function(e){if(!Array.isArray(e))return n("Invalid argument supplied to oneOfType, expected an instance of array."),d;for(var r=0;r<e.length;r++){var t=e[r];if("function"!=typeof t)return n("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+x(t)+" at index "+r+"."),d}return m((function(r,t,n,o,i){for(var l=[],d=0;d<e.length;d++){var c=(0,e[d])(r,t,n,o,i,a);if(null==c)return null;c.data&&s(c.data,"expectedType")&&l.push(c.data.expectedType)}return new h("Invalid "+o+" `"+i+"` supplied to `"+n+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return m((function(r,t,n,o,i){var s=r[t],l=y(s);if("object"!==l)return new h("Invalid "+o+" `"+i+"` of type `"+l+"` supplied to `"+n+"`, expected `object`.");for(var d in e){var c=e[d];if("function"!=typeof c)return b(n,o,i,d,v(c));var u=c(s,d,n,o,i+"."+d,a);if(u)return u}return null}))},exact:function(e){return m((function(r,t,n,o,l){var d=r[t],c=y(d);if("object"!==c)return new h("Invalid "+o+" `"+l+"` of type `"+c+"` supplied to `"+n+"`, expected `object`.");var u=i({},r[t],e);for(var g in u){var m=e[g];if(s(e,g)&&"function"!=typeof m)return b(n,o,l,g,v(m));if(!m)return new h("Invalid "+o+" `"+l+"` key `"+g+"` supplied to `"+n+"`.\nBad object: "+JSON.stringify(r[t],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var f=m(d,g,n,o,l+"."+g,a);if(f)return f}return null}))}};function g(e,r){return e===r?0!==e||1/e==1/r:e!=e&&r!=r}function h(e,r){this.message=e,this.data=r&&"object"==typeof r?r:{},this.stack=""}function m(e){var t={},o=0;function i(i,s,l,d,u,g,m){if(d=d||c,g=g||l,m!==a){if(r){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}if("undefined"!=typeof console){var b=d+":"+l;!t[b]&&o<3&&(n("You are manually calling a React.PropTypes validation function for the `"+g+"` prop on `"+d+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),t[b]=!0,o++)}}return null==s[l]?i?null===s[l]?new h("The "+u+" `"+g+"` is marked as required in `"+d+"`, but its value is `null`."):new h("The "+u+" `"+g+"` is marked as required in `"+d+"`, but its value is `undefined`."):null:e(s,l,d,u,g)}var s=i.bind(null,!1);return s.isRequired=i.bind(null,!0),s}function f(e){return m((function(r,t,n,o,i,a){var s=r[t];return y(s)!==e?new h("Invalid "+o+" `"+i+"` of type `"+v(s)+"` supplied to `"+n+"`, expected `"+e+"`.",{expectedType:e}):null}))}function b(e,r,t,n,o){return new h((e||"React class")+": "+r+" type `"+t+"."+n+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+o+"`.")}function p(r){switch(typeof r){case"number":case"string":case"undefined":return!0;case"boolean":return!r;case"object":if(Array.isArray(r))return r.every(p);if(null===r||e(r))return!0;var n=function(e){var r=e&&(t&&e[t]||e["@@iterator"]);if("function"==typeof r)return r}(r);if(!n)return!1;var o,i=n.call(r);if(n!==r.entries){for(;!(o=i.next()).done;)if(!p(o.value))return!1}else for(;!(o=i.next()).done;){var a=o.value;if(a&&!p(a[1]))return!1}return!0;default:return!1}}function y(e){var r=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,r){return"symbol"===e||!!r&&("Symbol"===r["@@toStringTag"]||"function"==typeof Symbol&&r instanceof Symbol)}(r,e)?"symbol":r}function v(e){if(null==e)return""+e;var r=y(e);if("object"===r){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return r}function x(e){var r=v(e);switch(r){case"array":case"object":return"an "+r;case"boolean":case"date":case"regexp":return"a "+r;default:return r}}return h.prototype=Error.prototype,u.checkPropTypes=l,u.resetWarningCache=l.resetWarningCache,u.PropTypes=u,u}},"./node_modules/prop-types/index.js":
/*!******************************************!*\
	  !*** ./node_modules/prop-types/index.js ***!
	  \******************************************/(e,r,t)=>{var n=t(/*! react-is */"./node_modules/react-is/index.js");e.exports=t(/*! ./factoryWithTypeCheckers */"./node_modules/prop-types/factoryWithTypeCheckers.js")(n.isElement,!0)},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
	  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
	  \*************************************************************/e=>{e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"./node_modules/prop-types/lib/has.js":
/*!********************************************!*\
	  !*** ./node_modules/prop-types/lib/has.js ***!
	  \********************************************/e=>{e.exports=Function.call.bind(Object.prototype.hasOwnProperty)},"./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
	  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
	  \***********************************************************/(e,r)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,d=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,g=e?Symbol.for("react.suspense"):60113,h=e?Symbol.for("react.suspense_list"):60120,m=e?Symbol.for("react.memo"):60115,f=e?Symbol.for("react.lazy"):60116,b=e?Symbol.for("react.block"):60121,p=e?Symbol.for("react.fundamental"):60117,y=e?Symbol.for("react.responder"):60118,v=e?Symbol.for("react.scope"):60119;function x(e){if("object"==typeof e&&null!==e){var r=e.$$typeof;switch(r){case t:var h=e.type;switch(h){case d:case c:case o:case a:case i:case g:return h;default:var b=h&&h.$$typeof;switch(b){case l:case u:case f:case m:case s:return b;default:return r}}case n:return r}}}var w=d,$=c,F=l,C=s,E=t,S=u,D=o,B=f,k=m,O=n,T=a,z=i,A=g,I=!1;function M(e){return x(e)===c}r.AsyncMode=w,r.ConcurrentMode=$,r.ContextConsumer=F,r.ContextProvider=C,r.Element=E,r.ForwardRef=S,r.Fragment=D,r.Lazy=B,r.Memo=k,r.Portal=O,r.Profiler=T,r.StrictMode=z,r.Suspense=A,r.isAsyncMode=function(e){return I||(I=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),M(e)||x(e)===d},r.isConcurrentMode=M,r.isContextConsumer=function(e){return x(e)===l},r.isContextProvider=function(e){return x(e)===s},r.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},r.isForwardRef=function(e){return x(e)===u},r.isFragment=function(e){return x(e)===o},r.isLazy=function(e){return x(e)===f},r.isMemo=function(e){return x(e)===m},r.isPortal=function(e){return x(e)===n},r.isProfiler=function(e){return x(e)===a},r.isStrictMode=function(e){return x(e)===i},r.isSuspense=function(e){return x(e)===g},r.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===c||e===a||e===i||e===g||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===f||e.$$typeof===m||e.$$typeof===s||e.$$typeof===l||e.$$typeof===u||e.$$typeof===p||e.$$typeof===y||e.$$typeof===v||e.$$typeof===b)},r.typeOf=x}()},"./node_modules/react-is/index.js":
/*!****************************************!*\
	  !*** ./node_modules/react-is/index.js ***!
	  \****************************************/(e,r,t)=>{e.exports=t(/*! ./cjs/react-is.development.js */"./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":
/*!******************************************************!*\
	  !*** ./node_modules/shallow-equal/dist/index.esm.js ***!
	  \******************************************************/(e,r,t)=>{function n(e,r){if(e===r)return!0;if(!e||!r)return!1;var t=Object.keys(e),n=Object.keys(r),o=t.length;if(n.length!==o)return!1;for(var i=0;i<o;i++){var a=t[i];if(e[a]!==r[a]||!Object.prototype.hasOwnProperty.call(r,a))return!1}return!0}function o(e,r){if(e===r)return!0;if(!e||!r)return!1;var t=e.length;if(r.length!==t)return!1;for(var n=0;n<t;n++)if(e[n]!==r[n])return!1;return!0}t.r(r),t.d(r,{shallowEqualArrays:()=>o,shallowEqualObjects:()=>n})},"./src/Component.ts":
/*!**************************!*\
	  !*** ./src/Component.ts ***!
	  \**************************/function(e,r,t){var n=this&&this.__rest||function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)r.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(t[n[o]]=e[n[o]])}return t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});var i=o(t(/*! ./useMediaQuery */"./src/useMediaQuery.ts"));r.default=function(e){var r=e.children,t=e.device,o=e.onChange,a=n(e,["children","device","onChange"]),s=(0,i.default)(a,t,o);return"function"==typeof r?r(s):s?r:null}},"./src/Context.ts":
/*!************************!*\
	  !*** ./src/Context.ts ***!
	  \************************/(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0});var n=(0,t(/*! react */"react").createContext)(void 0);r.default=n},"./src/index.ts":
/*!**********************!*\
	  !*** ./src/index.ts ***!
	  \**********************/function(e,r,t){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0}),r.Context=r.toQuery=r.useMediaQuery=r.default=void 0;var o=n(t(/*! ./useMediaQuery */"./src/useMediaQuery.ts"));r.useMediaQuery=o.default;var i=n(t(/*! ./Component */"./src/Component.ts"));r.default=i.default;var a=n(t(/*! ./toQuery */"./src/toQuery.ts"));r.toQuery=a.default;var s=n(t(/*! ./Context */"./src/Context.ts"));r.Context=s.default},"./src/mediaQuery.ts":
/*!***************************!*\
	  !*** ./src/mediaQuery.ts ***!
	  \***************************/function(e,r,t){var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e},n.apply(this,arguments)},o=this&&this.__rest||function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)r.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(t[n[o]]=e[n[o]])}return t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});var a=i(t(/*! prop-types */"./node_modules/prop-types/index.js")),s=a.default.oneOfType([a.default.string,a.default.number]),l={all:a.default.bool,grid:a.default.bool,aural:a.default.bool,braille:a.default.bool,handheld:a.default.bool,print:a.default.bool,projection:a.default.bool,screen:a.default.bool,tty:a.default.bool,tv:a.default.bool,embossed:a.default.bool},d={orientation:a.default.oneOf(["portrait","landscape"]),scan:a.default.oneOf(["progressive","interlace"]),aspectRatio:a.default.string,deviceAspectRatio:a.default.string,height:s,deviceHeight:s,width:s,deviceWidth:s,color:a.default.bool,colorIndex:a.default.bool,monochrome:a.default.bool,resolution:s,type:Object.keys(l)},c=o(d,["type"]),u=n({minAspectRatio:a.default.string,maxAspectRatio:a.default.string,minDeviceAspectRatio:a.default.string,maxDeviceAspectRatio:a.default.string,minHeight:s,maxHeight:s,minDeviceHeight:s,maxDeviceHeight:s,minWidth:s,maxWidth:s,minDeviceWidth:s,maxDeviceWidth:s,minColor:a.default.number,maxColor:a.default.number,minColorIndex:a.default.number,maxColorIndex:a.default.number,minMonochrome:a.default.number,maxMonochrome:a.default.number,minResolution:s,maxResolution:s},c),g=n(n({},l),u);r.default={all:g,types:l,matchers:d,features:u}},"./src/toQuery.ts":
/*!************************!*\
	  !*** ./src/toQuery.ts ***!
	  \************************/function(e,r,t){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});var o=n(t(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),i=n(t(/*! ./mediaQuery */"./src/mediaQuery.ts"));r.default=function(e){var r=[];return Object.keys(i.default.all).forEach((function(t){var n=e[t];null!=n&&r.push(function(e,r){var t=(0,o.default)(e);return"number"==typeof r&&(r="".concat(r,"px")),!0===r?t:!1===r?"not ".concat(t):"(".concat(t,": ").concat(r,")")}(t,n))})),r.join(" and ")}},"./src/useMediaQuery.ts":
/*!******************************!*\
	  !*** ./src/useMediaQuery.ts ***!
	  \******************************/function(e,r,t){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});var o=t(/*! react */"react"),i=n(t(/*! matchmediaquery */"./node_modules/matchmediaquery/index.js")),a=n(t(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),s=t(/*! shallow-equal */"./node_modules/shallow-equal/dist/index.esm.js"),l=n(t(/*! ./toQuery */"./src/toQuery.ts")),d=n(t(/*! ./Context */"./src/Context.ts")),c=function(e){if(e)return Object.keys(e).reduce((function(r,t){return r[(0,a.default)(t)]=e[t],r}),{})},u=function(){var e=(0,o.useRef)(!1);return(0,o.useEffect)((function(){e.current=!0}),[]),e.current},g=function(e){var r=function(){return function(e){return e.query||(0,l.default)(e)}(e)},t=(0,o.useState)(r),n=t[0],i=t[1];return(0,o.useEffect)((function(){var e=r();n!==e&&i(e)}),[e]),n};r.default=function(e,r,t){var n=function(e){var r=(0,o.useContext)(d.default),t=function(){return c(e)||c(r)},n=(0,o.useState)(t),i=n[0],a=n[1];return(0,o.useEffect)((function(){var e=t();(0,s.shallowEqualObjects)(i,e)||a(e)}),[e,r]),i}(r),a=g(e);if(!a)throw new Error("Invalid or missing MediaQuery!");var l=function(e,r){var t=function(){return(0,i.default)(e,r||{},!!r)},n=(0,o.useState)(t),a=n[0],s=n[1],l=u();return(0,o.useEffect)((function(){if(l){var e=t();return s(e),function(){e&&e.dispose()}}}),[e,r]),a}(a,n),h=function(e){var r=(0,o.useState)(e.matches),t=r[0],n=r[1];return(0,o.useEffect)((function(){var r=function(e){n(e.matches)};return e.addListener(r),n(e.matches),function(){e.removeListener(r)}}),[e]),t}(l),m=u();return(0,o.useEffect)((function(){m&&t&&t(h)}),[h]),(0,o.useEffect)((function(){return function(){l&&l.dispose()}}),[]),h}},react:
/*!**************************************************************************************!*\
	  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
	  \**************************************************************************************/r=>{r.exports=e}},t={};function n(e){var o=t[e];if(void 0!==o)return o.exports;var i=t[e]={exports:{}};return r[e].call(i.exports,i,i.exports,n),i.exports}return n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n("./src/index.ts")})();var Tr=Or.exports=kr(o),zr=Array.isArray,Ar="object"==typeof ie&&ie&&ie.Object===Object&&ie,Ir=Ar,Mr="object"==typeof self&&self&&self.Object===Object&&self,jr=Ir||Mr||Function("return this")(),Lr=jr.Symbol,_r=Lr,Rr=Object.prototype,Hr=Rr.hasOwnProperty,Pr=Rr.toString,Wr=_r?_r.toStringTag:void 0;var Nr=function(e){var r=Hr.call(e,Wr),t=e[Wr];try{e[Wr]=void 0;var n=!0}catch(e){}var o=Pr.call(e);return n&&(r?e[Wr]=t:delete e[Wr]),o},Vr=Object.prototype.toString;var Yr=Nr,Ur=function(e){return Vr.call(e)},qr=Lr?Lr.toStringTag:void 0;var Gr=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":qr&&qr in Object(e)?Yr(e):Ur(e)};var Zr=function(e){return null!=e&&"object"==typeof e},Kr=Gr,Xr=Zr;var Qr=function(e){return"symbol"==typeof e||Xr(e)&&"[object Symbol]"==Kr(e)},Jr=zr,et=Qr,rt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,tt=/^\w*$/;var nt=function(e,r){if(Jr(e))return!1;var t=typeof e;return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=e&&!et(e))||(tt.test(e)||!rt.test(e)||null!=r&&e in Object(r))};var ot=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},it=Gr,at=ot;var st,lt=function(e){if(!at(e))return!1;var r=it(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},dt=jr["__core-js_shared__"],ct=(st=/[^.]+$/.exec(dt&&dt.keys&&dt.keys.IE_PROTO||""))?"Symbol(src)_1."+st:"";var ut=function(e){return!!ct&&ct in e},gt=Function.prototype.toString;var ht=function(e){if(null!=e){try{return gt.call(e)}catch(e){}try{return e+""}catch(e){}}return""},mt=lt,ft=ut,bt=ot,pt=ht,yt=/^\[object .+?Constructor\]$/,vt=Function.prototype,xt=Object.prototype,wt=vt.toString,$t=xt.hasOwnProperty,Ft=RegExp("^"+wt.call($t).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Ct=function(e,r){return null==e?void 0:e[r]},Et=function(e){return!(!bt(e)||ft(e))&&(mt(e)?Ft:yt).test(pt(e))},St=Ct;var Dt=function(e,r){var t=St(e,r);return Et(t)?t:void 0},Bt=Dt(Object,"create"),kt=Bt;var Ot=function(){this.__data__=kt?kt(null):{},this.size=0};var Tt=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},zt=Bt,At=Object.prototype.hasOwnProperty;var It=function(e){var r=this.__data__;if(zt){var t=r[e];return"__lodash_hash_undefined__"===t?void 0:t}return At.call(r,e)?r[e]:void 0},Mt=Bt,jt=Object.prototype.hasOwnProperty;var Lt=function(e){var r=this.__data__;return Mt?void 0!==r[e]:jt.call(r,e)},_t=Bt;var Rt=function(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=_t&&void 0===r?"__lodash_hash_undefined__":r,this},Ht=Ot,Pt=Tt,Wt=It,Nt=Lt,Vt=Rt;function Yt(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Yt.prototype.clear=Ht,Yt.prototype.delete=Pt,Yt.prototype.get=Wt,Yt.prototype.has=Nt,Yt.prototype.set=Vt;var Ut=Yt;var qt=function(){this.__data__=[],this.size=0};var Gt=function(e,r){return e===r||e!=e&&r!=r},Zt=Gt;var Kt=function(e,r){for(var t=e.length;t--;)if(Zt(e[t][0],r))return t;return-1},Xt=Kt,Qt=Array.prototype.splice;var Jt=function(e){var r=this.__data__,t=Xt(r,e);return!(t<0)&&(t==r.length-1?r.pop():Qt.call(r,t,1),--this.size,!0)},en=Kt;var rn=function(e){var r=this.__data__,t=en(r,e);return t<0?void 0:r[t][1]},tn=Kt;var nn=function(e){return tn(this.__data__,e)>-1},on=Kt;var an=function(e,r){var t=this.__data__,n=on(t,e);return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this},sn=qt,ln=Jt,dn=rn,cn=nn,un=an;function gn(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}gn.prototype.clear=sn,gn.prototype.delete=ln,gn.prototype.get=dn,gn.prototype.has=cn,gn.prototype.set=un;var hn=gn,mn=Dt(jr,"Map"),fn=Ut,bn=hn,pn=mn;var yn=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var vn=function(e,r){var t=e.__data__;return yn(r)?t["string"==typeof r?"string":"hash"]:t.map},xn=vn;var wn=function(e){var r=xn(this,e).delete(e);return this.size-=r?1:0,r},$n=vn;var Fn=function(e){return $n(this,e).get(e)},Cn=vn;var En=function(e){return Cn(this,e).has(e)},Sn=vn;var Dn=function(e,r){var t=Sn(this,e),n=t.size;return t.set(e,r),this.size+=t.size==n?0:1,this},Bn=function(){this.size=0,this.__data__={hash:new fn,map:new(pn||bn),string:new fn}},kn=wn,On=Fn,Tn=En,zn=Dn;function An(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}An.prototype.clear=Bn,An.prototype.delete=kn,An.prototype.get=On,An.prototype.has=Tn,An.prototype.set=zn;var In=An,Mn=In;function jn(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var t=function(){var n=arguments,o=r?r.apply(this,n):n[0],i=t.cache;if(i.has(o))return i.get(o);var a=e.apply(this,n);return t.cache=i.set(o,a)||i,a};return t.cache=new(jn.Cache||Mn),t}jn.Cache=Mn;var Ln=jn;var _n=function(e){var r=Ln(e,(function(e){return 500===t.size&&t.clear(),e})),t=r.cache;return r},Rn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Hn=/\\(\\)?/g,Pn=_n((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(Rn,(function(e,t,n,o){r.push(n?o.replace(Hn,"$1"):t||e)})),r}));var Wn=function(e,r){for(var t=-1,n=null==e?0:e.length,o=Array(n);++t<n;)o[t]=r(e[t],t,e);return o},Nn=zr,Vn=Qr,Yn=Lr?Lr.prototype:void 0,Un=Yn?Yn.toString:void 0;var qn=function e(r){if("string"==typeof r)return r;if(Nn(r))return Wn(r,e)+"";if(Vn(r))return Un?Un.call(r):"";var t=r+"";return"0"==t&&1/r==-1/0?"-0":t},Gn=qn;var Zn=zr,Kn=nt,Xn=Pn,Qn=function(e){return null==e?"":Gn(e)};var Jn=function(e,r){return Zn(e)?e:Kn(e,r)?[e]:Xn(Qn(e))},eo=Qr;var ro=function(e){if("string"==typeof e||eo(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r},to=Jn,no=ro;var oo=function(e,r){for(var t=0,n=(r=to(r,e)).length;null!=e&&t<n;)e=e[no(r[t++])];return t&&t==n?e:void 0},io=oo;var ao=function(e,r,t){var n=null==e?void 0:io(e,r);return void 0===n?t:n},so=ae(ao);const lo=(e,r,t)=>so(t,r)||so(e,r),co=(e,r)=>{const t=r||e.defaultValue;return so(e.collections,t)},uo={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},go=e=>r=>{var t;const n=r.theme,o=co(uo,null==n?void 0:n.borderScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.border)?`${lo(o,e,n.overrides.border)}px`:`${o[e]}px`},ho={"width-005":go("width-005"),"width-010":go("width-010"),"width-020":go("width-020"),"width-040":go("width-040"),solid:(mo="solid",e=>{var r;const t=e.theme,n=co(uo,null==t?void 0:t.borderScheme),o=(null===(r=null==t?void 0:t.overrides)||void 0===r?void 0:r.border)?lo(n,mo,t.overrides.border):n[mo];return"function"==typeof o?o(e):o})};var mo;const fo={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},bo={"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFF8FC","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},po={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},yo={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},vo={"brand-10":"#001A19","brand-20":"#002D2B","brand-30":"#00413D","brand-40":"#005954","brand-50":"#00756F","brand-60":"#03A098","brand-70":"#55BFBA","brand-80":"#92D6D2","brand-90":"#BFE7E5","brand-95":"#DDF2F1","brand-100":"#F4FBFA","primary-10":"#09191D","primary-20":"#102B34","primary-30":"#173D49","primary-40":"#205666","primary-50":"#2A7086","primary-60":"#5D97A9","primary-70":"#8CB6C2","primary-80":"#B2CED6","primary-90":"#D1E2E7","primary-95":"#E8F0F3","primary-100":"#F7FAFB","secondary-10":"#001731","secondary-20":"#002752","secondary-30":"#003874","secondary-40":"#004D9F","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},xo={"brand-10":"#881317","brand-20":"#B5191E","brand-30":"#B5040A","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},wo={"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},$o={"brand-10":"#170F39","brand-20":"#281C62","brand-30":"#38268B","brand-40":"#4D34BF","brand-50":"#5735DF","brand-60":"#9986F9","brand-70":"#B2A5F8","brand-80":"#CDC2FA","brand-90":"#E2DCFC","brand-95":"#EFEDFE","brand-100":"#FAF8FD","primary-10":"#170F39","primary-20":"#281C62","primary-30":"#38268B","primary-40":"#4D34BF","primary-50":"#5735DF","primary-60":"#9986F9","primary-70":"#B2A5F8","primary-80":"#CDC2FA","primary-90":"#E2DCFC","primary-95":"#EFEDFE","primary-100":"#FAF8FD","secondary-10":"#251204","secondary-20":"#401F08","secondary-30":"#5B2C0B","secondary-40":"#7E3D0F","secondary-50":"#B04900","secondary-60":"#E26E1C","secondary-70":"#FF9445","secondary-80":"#FFBB8E","secondary-90":"#FFD9BF","secondary-95":"#FFECDF","secondary-100":"#FFF8F3","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#031B15","success-20":"#082D24","success-30":"#094134","success-40":"#0D5947","success-50":"#10755E","success-60":"#16A181","success-70":"#1EC59D","success-80":"#6FDDC2","success-90":"#AFECDE","success-95":"#D5F5ED","success-100":"#F1FCF9","warning-10":"#1F1500","warning-20":"#362500","warning-30":"#4D3501","warning-40":"#6A4801","warning-50":"#8B6001","warning-60":"#BF8301","warning-70":"#EAA102","warning-80":"#FFBF34","warning-90":"#FFDC8F","warning-95":"#FFEDC7","warning-100":"#FFF8EA","error-10":"#270F10","error-20":"#441B1B","error-30":"#612627","error-40":"#853535","error-50":"#AF4546","error-60":"#EC6162","error-70":"#F29696","error-80":"#F7BBBC","error-90":"#FAD8D8","error-95":"#FCEAEA","error-100":"#FEF7F7","info-10":"#0F1627","info-20":"#1B2745","info-30":"#273763","info-40":"#354D88","info-50":"#4665B3","info-60":"#618AF6","info-70":"#8DADFF","info-80":"#B4C9FF","info-90":"#D3DFFF","info-95":"#E9EFFF","info-100":"#F5F8FF",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Fo={"brand-10":"#0E113C","brand-20":"#191E67","brand-30":"#232A92","brand-40":"#233FC2","brand-50":"#135CEA","brand-60":"#378FFB","brand-70":"#71B3FD","brand-80":"#9DCFFE","brand-90":"#C1E5FF","brand-95":"#DCF1FF","brand-100":"#F3FAFF","primary-10":"#0E113C","primary-20":"#191E67","primary-30":"#232A92","primary-40":"#233FC2","primary-50":"#135CEA","primary-60":"#378FFB","primary-70":"#71B3FD","primary-80":"#9DCFFE","primary-90":"#C1E5FF","primary-95":"#DCF1FF","primary-100":"#F3FAFF","secondary-10":"#34001F","secondary-20":"#540033","secondary-30":"#730045","secondary-40":"#9D0054","secondary-50":"#C61C64","secondary-60":"#DE6792","secondary-70":"#EB96B6","secondary-80":"#F5BAD2","secondary-90":"#FCD5E3","secondary-95":"#FDEBF1","secondary-100":"#FDF6F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Co={"brand-10":"#370009","brand-20":"#4E000D","brand-30":"#640011","brand-40":"#850017","brand-50":"#9B001A","brand-60":"#EF2D4E","brand-70":"#F692A3","brand-80":"#FAB9C4","brand-90":"#FCD7DD","brand-95":"#FDEAED","brand-100":"#FEF8F9","primary-10":"#1F102A","primary-20":"#2F193F","primary-30":"#3E2053","primary-40":"#562D71","primary-50":"#663587","primary-60":"#9370AA","primary-70":"#BCA7CB","primary-80":"#D3C5DC","primary-90":"#E5DDEB","primary-95":"#F2EEF5","primary-100":"#FAF9FB","secondary-10":"#201316","secondary-20":"#311D22","secondary-30":"#3F272C","secondary-40":"#58363D","secondary-50":"#684049","secondary-60":"#AF6A7A","secondary-70":"#F393A8","secondary-80":"#FFB6C6","secondary-90":"#FFD6DF","secondary-95":"#FFE9EE","secondary-100":"#FFF7F9","neutral-10":"#161616","neutral-20":"#222222","neutral-30":"#2D2D2D","neutral-40":"#3F3F3F","neutral-50":"#4B4B4B","neutral-60":"#7E7E7E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081917","success-20":"#0D2724","success-30":"#11332E","success-40":"#174740","success-50":"#1B554C","success-60":"#2D8C7E","success-70":"#46C2AF","success-80":"#89D8CC","success-90":"#BCE9E2","success-95":"#DAF3EF","success-100":"#F0FAF9","warning-10":"#241200","warning-20":"#371C00","warning-30":"#482500","warning-40":"#633300","warning-50":"#763C00","warning-60":"#C36400","warning-70":"#FF9524","warning-80":"#FFBD77","warning-90":"#FFD9B2","warning-95":"#FFEBD6","warning-100":"#FFF7F0","error-10":"#330505","error-20":"#4B0707","error-30":"#600909","error-40":"#810D0D","error-50":"#98110F","error-60":"#D7504C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032537","info-30":"#043148","info-40":"#054462","info-50":"#065175","info-60":"#3985AF","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Eo={"brand-10":"#00143A","brand-20":"#00205B","brand-30":"#153368","brand-40":"#18417C","brand-50":"#00558C","brand-60":"#009CDE","brand-70":"#5AB9E7","brand-80":"#9ED0ED","brand-90":"#CAE3F4","brand-95":"#E2F0F9","brand-100":"#F4FAFD","primary-10":"#00143A","primary-20":"#00205B","primary-30":"#153368","primary-40":"#18417C","primary-50":"#00558C","primary-60":"#009CDE","primary-70":"#5AB9E7","primary-80":"#9ED0ED","primary-90":"#CAE3F4","primary-95":"#E2F0F9","primary-100":"#F4FAFD","secondary-10":"#10171F","secondary-20":"#1E252C","secondary-30":"#2F353B","secondary-40":"#3D4247","secondary-50":"#4E5255","secondary-60":"#8F9396","secondary-70":"#A9B0B3","secondary-80":"#C7CBCC","secondary-90":"#DDDFE0","secondary-95":"#ECEDEE","secondary-100":"#F8F8F9","neutral-10":"#10171F","neutral-20":"#1E252C","neutral-30":"#2F353B","neutral-40":"#3D4247","neutral-50":"#4E5255","neutral-60":"#8F9396","neutral-70":"#A9B0B3","neutral-80":"#C7CBCC","neutral-90":"#DDDFE0","neutral-95":"#ECEDEE","neutral-100":"#F8F8F9","success-10":"#001B0E","success-20":"#012A16","success-30":"#013D20","success-40":"#014D28","success-50":"#005F30","success-60":"#48A377","success-70":"#77BD9B","success-80":"#A3D5BD","success-90":"#C4E7D6","success-95":"#DBF4E7","success-100":"#ECFDF5","warning-10":"#1F1500","warning-20":"#312100","warning-30":"#473000","warning-40":"#593C00","warning-50":"#6E4B00","warning-60":"#B78C31","warning-70":"#DDA633","warning-80":"#E0C792","warning-90":"#E9DEC5","warning-95":"#F4EEE0","warning-100":"#FAF8F3","error-10":"#360109","error-20":"#50010E","error-30":"#6F0213","error-40":"#88051A","error-50":"#A60A24","error-60":"#E07083","error-70":"#EA98A6","error-80":"#F3BBC4","error-90":"#FAD5DC","error-95":"#FEE9ED","error-100":"#FFF6F8","info-10":"#00143A","info-20":"#00205B","info-30":"#153368","info-40":"#18417C","info-50":"#00558C","info-60":"#009CDE","info-70":"#5AB9E7","info-80":"#9ED0ED","info-90":"#CAE3F4","info-95":"#E2F0F9","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FFCB6A"},So={collections:{lifesg:po,bookingsg:fo,rbs:wo,mylegacy:yo,ccube:bo,oneservice:vo,pa:xo,a11yplayground:$o,supportgowhere:Fo,imda:Co,spf:Eo},defaultValue:"lifesg"},Do={collections:{lifesg:po,bookingsg:fo,rbs:wo,mylegacy:yo,ccube:bo,oneservice:vo,pa:xo,a11yplayground:$o,supportgowhere:Fo,imda:Co,spf:Eo},defaultValue:"lifesg"},Bo=e=>r=>{var t;const n=r.theme,o="dark"===(null==n?void 0:n.colourMode),i=co(o?Do:So,null==n?void 0:n.colourScheme),a=o?"primitiveColourDark":"primitiveColour",s=null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t[a];return s?lo(i,e,s):i[e]},ko={"brand-10":Bo("brand-10"),"brand-20":Bo("brand-20"),"brand-30":Bo("brand-30"),"brand-40":Bo("brand-40"),"brand-50":Bo("brand-50"),"brand-60":Bo("brand-60"),"brand-70":Bo("brand-70"),"brand-80":Bo("brand-80"),"brand-90":Bo("brand-90"),"brand-95":Bo("brand-95"),"brand-100":Bo("brand-100"),"primary-10":Bo("primary-10"),"primary-20":Bo("primary-20"),"primary-30":Bo("primary-30"),"primary-40":Bo("primary-40"),"primary-50":Bo("primary-50"),"primary-60":Bo("primary-60"),"primary-70":Bo("primary-70"),"primary-80":Bo("primary-80"),"primary-90":Bo("primary-90"),"primary-95":Bo("primary-95"),"primary-100":Bo("primary-100"),"secondary-10":Bo("secondary-10"),"secondary-20":Bo("secondary-20"),"secondary-30":Bo("secondary-30"),"secondary-40":Bo("secondary-40"),"secondary-50":Bo("secondary-50"),"secondary-60":Bo("secondary-60"),"secondary-70":Bo("secondary-70"),"secondary-80":Bo("secondary-80"),"secondary-90":Bo("secondary-90"),"secondary-95":Bo("secondary-95"),"secondary-100":Bo("secondary-100"),"neutral-10":Bo("neutral-10"),"neutral-20":Bo("neutral-20"),"neutral-30":Bo("neutral-30"),"neutral-40":Bo("neutral-40"),"neutral-50":Bo("neutral-50"),"neutral-60":Bo("neutral-60"),"neutral-70":Bo("neutral-70"),"neutral-80":Bo("neutral-80"),"neutral-90":Bo("neutral-90"),"neutral-95":Bo("neutral-95"),"neutral-100":Bo("neutral-100"),"success-10":Bo("success-10"),"success-20":Bo("success-20"),"success-30":Bo("success-30"),"success-40":Bo("success-40"),"success-50":Bo("success-50"),"success-60":Bo("success-60"),"success-70":Bo("success-70"),"success-80":Bo("success-80"),"success-90":Bo("success-90"),"success-95":Bo("success-95"),"success-100":Bo("success-100"),"warning-10":Bo("warning-10"),"warning-20":Bo("warning-20"),"warning-30":Bo("warning-30"),"warning-40":Bo("warning-40"),"warning-50":Bo("warning-50"),"warning-60":Bo("warning-60"),"warning-70":Bo("warning-70"),"warning-80":Bo("warning-80"),"warning-90":Bo("warning-90"),"warning-95":Bo("warning-95"),"warning-100":Bo("warning-100"),"error-10":Bo("error-10"),"error-20":Bo("error-20"),"error-30":Bo("error-30"),"error-40":Bo("error-40"),"error-50":Bo("error-50"),"error-60":Bo("error-60"),"error-70":Bo("error-70"),"error-80":Bo("error-80"),"error-90":Bo("error-90"),"error-95":Bo("error-95"),"error-100":Bo("error-100"),"info-10":Bo("info-10"),"info-20":Bo("info-20"),"info-30":Bo("info-30"),"info-40":Bo("info-40"),"info-50":Bo("info-50"),"info-60":Bo("info-60"),"info-70":Bo("info-70"),"info-80":Bo("info-80"),"info-90":Bo("info-90"),"info-95":Bo("info-95"),"info-100":Bo("info-100"),white:Bo("white"),black:Bo("black"),"primary-inverse":Bo("primary-inverse")},Oo={text:Bo("neutral-20"),"text-subtle":Bo("neutral-30"),"text-subtler":Bo("neutral-50"),"text-subtlest":Bo("neutral-60"),"text-primary":Bo("primary-50"),"text-primary-strongest":Bo("primary-20"),"text-hover":Bo("primary-40"),"text-selected":Bo("primary-50"),"text-selected-hover":Bo("primary-40"),"text-disabled":Bo("neutral-50"),"text-disabled-subtle":Bo("neutral-60"),"text-disabled-subtlest":Bo("neutral-80"),"text-selected-disabled":Bo("neutral-20"),"text-success":Bo("success-40"),"text-warning":Bo("warning-40"),"text-error":Bo("error-40"),"text-info":Bo("info-40"),"text-inverse":Bo("white"),icon:Bo("neutral-50"),"icon-subtle":Bo("neutral-60"),"icon-strongest":Bo("neutral-20"),"icon-primary":Bo("primary-50"),"icon-primary-subtle":Bo("primary-60"),"icon-primary-subtlest":Bo("primary-70"),"icon-hover":Bo("primary-40"),"icon-selected":Bo("primary-50"),"icon-selected-hover":Bo("primary-40"),"icon-disabled":Bo("neutral-50"),"icon-disabled-subtle":Bo("neutral-60"),"icon-selected-disabled":Bo("neutral-60"),"icon-success":Bo("success-50"),"icon-warning":Bo("warning-60"),"icon-error":Bo("error-50"),"icon-error-strong":Bo("error-40"),"icon-info":Bo("info-50"),"icon-inverse":Bo("white"),"icon-primary-inverse":Bo("primary-inverse"),border:Bo("neutral-90"),"border-strong":Bo("neutral-70"),"border-stronger":Bo("neutral-50"),"border-primary":Bo("primary-50"),"border-primary-subtle":Bo("primary-60"),"border-hover":Bo("primary-90"),"border-hover-strong":Bo("primary-60"),"border-selected":Bo("primary-50"),"border-selected-subtle":Bo("primary-70"),"border-selected-subtlest":Bo("primary-90"),"border-selected-hover":Bo("primary-40"),"border-focus":Bo("primary-60"),"border-focus-strong":Bo("primary-50"),"border-disabled":Bo("neutral-90"),"border-selected-disabled":Bo("neutral-70"),"border-success":Bo("success-60"),"border-warning":Bo("warning-60"),"border-error":Bo("error-60"),"border-error-focus":Bo("error-60"),"border-error-focus-strong":Bo("error-40"),"border-error-strong":Bo("error-40"),"border-info":Bo("info-60"),bg:Bo("white"),"bg-strong":Bo("neutral-100"),"bg-stronger":Bo("neutral-95"),"bg-strongest":Bo("neutral-90"),"bg-hover":Bo("primary-95"),"bg-hover-strong":Bo("primary-90"),"bg-hover-subtle":Bo("primary-100"),"bg-hover-neutral":Bo("neutral-100"),"bg-hover-neutral-strong":Bo("neutral-90"),"bg-selected":Bo("primary-95"),"bg-selected-hover":Bo("primary-90"),"bg-selected-strong":Bo("primary-90"),"bg-selected-stronger":Bo("primary-70"),"bg-selected-strongest":Bo("primary-50"),"bg-selected-strongest-hover":Bo("primary-40"),"bg-disabled":Bo("neutral-95"),"bg-selected-disabled":Bo("neutral-95"),"bg-selected-stronger-disabled":Bo("neutral-70"),"bg-success":Bo("success-100"),"bg-success-hover":Bo("success-95"),"bg-success-strong":Bo("success-50"),"bg-success-strong-hover":Bo("success-40"),"bg-warning":Bo("warning-100"),"bg-warning-hover":Bo("warning-95"),"bg-warning-strong":Bo("warning-50"),"bg-warning-strong-hover":Bo("warning-40"),"bg-info":Bo("info-100"),"bg-info-hover":Bo("info-95"),"bg-info-strong":Bo("info-50"),"bg-info-strong-hover":Bo("info-40"),"bg-error":Bo("error-100"),"bg-error-hover":Bo("error-95"),"bg-error-strong":Bo("error-50"),"bg-error-strong-hover":Bo("error-40"),"bg-inverse":Bo("neutral-20"),"bg-inverse-subtle":Bo("neutral-30"),"bg-inverse-subtler":Bo("neutral-50"),"bg-inverse-subtlest":Bo("neutral-60"),"bg-inverse-hover":Bo("neutral-40"),"bg-primary":Bo("primary-50"),"bg-primary-subtle":Bo("primary-60"),"bg-primary-subtler":Bo("primary-95"),"bg-primary-subtlest":Bo("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":Bo("primary-40"),"bg-primary-subtlest-hover":Bo("primary-90"),"bg-primary-subtlest-selected":Bo("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:Bo("primary-50"),"hyperlink-hover":Bo("primary-40"),"hyperlink-visited":Bo("primary-40"),"hyperlink-inverse":Bo("primary-inverse"),"focus-ring":Bo("primary-50"),"focus-ring-inverse":Bo("white")},To={text:Bo("neutral-100"),"text-subtle":Bo("neutral-80"),"text-subtler":Bo("neutral-60"),"text-subtlest":Bo("neutral-50"),"text-primary":Bo("primary-60"),"text-primary-strongest":Bo("primary-90"),"text-hover":Bo("primary-70"),"text-selected":Bo("primary-60"),"text-selected-hover":Bo("primary-70"),"text-disabled":Bo("neutral-60"),"text-disabled-subtle":Bo("neutral-50"),"text-disabled-subtlest":Bo("neutral-30"),"text-selected-disabled":Bo("neutral-90"),"text-success":Bo("success-70"),"text-warning":Bo("warning-70"),"text-error":Bo("error-70"),"text-info":Bo("info-70"),"text-inverse":Bo("black"),icon:Bo("neutral-60"),"icon-subtle":Bo("neutral-50"),"icon-strongest":Bo("neutral-90"),"icon-primary":Bo("primary-60"),"icon-primary-subtle":Bo("primary-50"),"icon-primary-subtlest":Bo("primary-40"),"icon-hover":Bo("primary-70"),"icon-selected":Bo("primary-60"),"icon-selected-hover":Bo("primary-70"),"icon-disabled":Bo("neutral-60"),"icon-disabled-subtle":Bo("neutral-50"),"icon-selected-disabled":Bo("neutral-50"),"icon-success":Bo("success-60"),"icon-warning":Bo("warning-50"),"icon-error":Bo("error-60"),"icon-error-strong":Bo("error-70"),"icon-info":Bo("info-60"),"icon-inverse":Bo("black"),"icon-primary-inverse":Bo("primary-inverse"),border:Bo("neutral-20"),"border-strong":Bo("neutral-40"),"border-stronger":Bo("neutral-60"),"border-primary":Bo("primary-60"),"border-primary-subtle":Bo("primary-50"),"border-hover":Bo("primary-20"),"border-hover-strong":Bo("primary-50"),"border-selected":Bo("primary-60"),"border-selected-subtle":Bo("primary-40"),"border-selected-subtlest":Bo("primary-20"),"border-selected-hover":Bo("primary-70"),"border-focus":Bo("primary-50"),"border-focus-strong":Bo("primary-60"),"border-disabled":Bo("neutral-20"),"border-selected-disabled":Bo("neutral-40"),"border-success":Bo("success-50"),"border-warning":Bo("warning-50"),"border-error":Bo("error-50"),"border-error-focus":Bo("error-50"),"border-error-focus-strong":Bo("error-70"),"border-error-strong":Bo("error-70"),"border-info":Bo("info-50"),bg:Bo("black"),"bg-strong":Bo("neutral-10"),"bg-stronger":Bo("neutral-20"),"bg-strongest":Bo("neutral-20"),"bg-hover":Bo("primary-20"),"bg-hover-strong":Bo("primary-20"),"bg-hover-subtle":Bo("primary-10"),"bg-hover-neutral":Bo("neutral-10"),"bg-hover-neutral-strong":Bo("neutral-20"),"bg-selected":Bo("primary-20"),"bg-selected-hover":Bo("primary-20"),"bg-selected-strong":Bo("primary-20"),"bg-selected-stronger":Bo("primary-40"),"bg-selected-strongest":Bo("primary-60"),"bg-selected-strongest-hover":Bo("primary-70"),"bg-disabled":Bo("neutral-20"),"bg-selected-disabled":Bo("neutral-20"),"bg-selected-stronger-disabled":Bo("neutral-40"),"bg-success":Bo("success-10"),"bg-success-hover":Bo("success-20"),"bg-success-strong":Bo("success-60"),"bg-success-strong-hover":Bo("success-70"),"bg-warning":Bo("warning-10"),"bg-warning-hover":Bo("warning-20"),"bg-warning-strong":Bo("warning-60"),"bg-warning-strong-hover":Bo("warning-70"),"bg-info":Bo("info-10"),"bg-info-hover":Bo("info-20"),"bg-info-strong":Bo("info-60"),"bg-info-strong-hover":Bo("info-70"),"bg-error":Bo("error-10"),"bg-error-hover":Bo("error-20"),"bg-error-strong":Bo("error-60"),"bg-error-strong-hover":Bo("error-70"),"bg-inverse":Bo("neutral-90"),"bg-inverse-subtle":Bo("neutral-80"),"bg-inverse-subtler":Bo("neutral-60"),"bg-inverse-subtlest":Bo("neutral-50"),"bg-inverse-hover":Bo("neutral-70"),"bg-primary":Bo("primary-60"),"bg-primary-subtle":Bo("primary-50"),"bg-primary-subtler":Bo("primary-20"),"bg-primary-subtlest":Bo("primary-10"),"bg-available":"#185339","bg-primary-hover":Bo("primary-70"),"bg-primary-subtlest-hover":Bo("primary-20"),"bg-primary-subtlest-selected":Bo("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:Bo("primary-60"),"hyperlink-hover":Bo("primary-70"),"hyperlink-visited":Bo("primary-70"),"hyperlink-inverse":Bo("primary-inverse"),"focus-ring":Bo("primary-60"),"focus-ring-inverse":Bo("black")},zo={text:Bo("neutral-30"),"text-subtle":Bo("neutral-40"),"text-subtler":Bo("neutral-50"),"text-subtlest":Bo("neutral-70"),"text-primary":Bo("neutral-10"),"text-primary-strongest":Bo("neutral-10"),"text-hover":Bo("neutral-70"),"text-selected":Bo("neutral-20"),"text-selected-hover":Bo("neutral-10"),"text-disabled":Bo("neutral-50"),"text-disabled-subtle":Bo("neutral-70"),"text-disabled-subtlest":Bo("neutral-80"),"text-selected-disabled":Bo("neutral-40"),"text-success":Bo("success-40"),"text-warning":Bo("warning-40"),"text-error":Bo("brand-30"),"text-info":Bo("neutral-40"),"text-inverse":Bo("neutral-100"),icon:Bo("neutral-40"),"icon-subtle":Bo("neutral-50"),"icon-strongest":Bo("neutral-10"),"icon-primary":Bo("neutral-10"),"icon-primary-subtle":Bo("neutral-30"),"icon-primary-subtlest":Bo("neutral-60"),"icon-hover":Bo("neutral-70"),"icon-selected":Bo("brand-20"),"icon-selected-hover":Bo("brand-10"),"icon-disabled":Bo("neutral-50"),"icon-disabled-subtle":Bo("neutral-70"),"icon-selected-disabled":Bo("neutral-40"),"icon-success":Bo("success-40"),"icon-warning":Bo("warning-60"),"icon-error":Bo("brand-30"),"icon-error-strong":Bo("brand-10"),"icon-info":Bo("neutral-40"),"icon-inverse":Bo("neutral-100"),"icon-primary-inverse":"#F9B371",border:Bo("neutral-90"),"border-strong":Bo("neutral-30"),"border-stronger":Bo("neutral-20"),"border-primary":Bo("neutral-40"),"border-primary-subtle":Bo("neutral-60"),"border-hover":Bo("neutral-80"),"border-hover-strong":Bo("neutral-10"),"border-selected":Bo("brand-20"),"border-selected-subtle":Bo("neutral-40"),"border-selected-subtlest":Bo("neutral-70"),"border-selected-hover":Bo("neutral-10"),"border-focus":Bo("neutral-20"),"border-focus-strong":Bo("neutral-10"),"border-disabled":Bo("neutral-90"),"border-selected-disabled":Bo("neutral-80"),"border-success":Bo("success-40"),"border-warning":Bo("warning-60"),"border-error":Bo("brand-30"),"border-error-focus":Bo("brand-20"),"border-error-focus-strong":Bo("brand-10"),"border-error-strong":Bo("brand-20"),"border-info":Bo("neutral-40"),bg:Bo("neutral-100"),"bg-strong":Bo("neutral-95"),"bg-stronger":Bo("neutral-90"),"bg-strongest":Bo("neutral-80"),"bg-hover":Bo("brand-90"),"bg-hover-strong":Bo("brand-80"),"bg-hover-subtle":Bo("neutral-90"),"bg-hover-neutral":Bo("neutral-90"),"bg-hover-neutral-strong":Bo("neutral-90"),"bg-selected":Bo("brand-100"),"bg-selected-hover":Bo("brand-30"),"bg-selected-strong":Bo("brand-50"),"bg-selected-stronger":Bo("brand-40"),"bg-selected-strongest":Bo("brand-20"),"bg-selected-strongest-hover":Bo("brand-10"),"bg-disabled":Bo("neutral-90"),"bg-selected-disabled":Bo("neutral-90"),"bg-selected-stronger-disabled":Bo("neutral-80"),"bg-success":Bo("success-100"),"bg-success-hover":Bo("success-95"),"bg-success-strong":Bo("success-50"),"bg-success-strong-hover":Bo("success-40"),"bg-warning":Bo("warning-100"),"bg-warning-hover":Bo("warning-95"),"bg-warning-strong":Bo("warning-50"),"bg-warning-strong-hover":Bo("warning-40"),"bg-info":Bo("neutral-95"),"bg-info-hover":Bo("info-95"),"bg-info-strong":Bo("info-50"),"bg-info-strong-hover":Bo("info-40"),"bg-error":Bo("brand-100"),"bg-error-hover":Bo("error-95"),"bg-error-strong":Bo("error-50"),"bg-error-strong-hover":Bo("error-40"),"bg-inverse":Bo("neutral-40"),"bg-inverse-subtle":Bo("neutral-60"),"bg-inverse-subtler":Bo("neutral-70"),"bg-inverse-subtlest":Bo("neutral-80"),"bg-inverse-hover":Bo("neutral-30"),"bg-primary":Bo("brand-20"),"bg-primary-subtle":Bo("brand-60"),"bg-primary-subtler":Bo("brand-80"),"bg-primary-subtlest":Bo("brand-100"),"bg-available":Bo("success-60"),"bg-primary-hover":Bo("brand-10"),"bg-primary-subtlest-hover":Bo("brand-80"),"bg-primary-subtlest-selected":Bo("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:Bo("neutral-10"),"hyperlink-hover":Bo("neutral-40"),"hyperlink-visited":Bo("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":Bo("primary-50"),"focus-ring-inverse":Bo("white")},Ao={text:Bo("neutral-20"),"text-subtle":Bo("neutral-30"),"text-subtler":Bo("neutral-50"),"text-subtlest":Bo("neutral-60"),"text-primary":Bo("primary-50"),"text-primary-strongest":Bo("primary-20"),"text-hover":Bo("primary-40"),"text-selected":Bo("primary-50"),"text-selected-hover":Bo("primary-40"),"text-disabled":Bo("neutral-50"),"text-disabled-subtle":Bo("neutral-60"),"text-disabled-subtlest":Bo("neutral-80"),"text-selected-disabled":Bo("neutral-20"),"text-success":Bo("success-40"),"text-warning":Bo("warning-40"),"text-error":Bo("error-40"),"text-info":Bo("info-40"),"text-inverse":Bo("white"),icon:Bo("neutral-50"),"icon-subtle":Bo("neutral-60"),"icon-strongest":Bo("neutral-20"),"icon-primary":Bo("primary-50"),"icon-primary-subtle":Bo("primary-60"),"icon-primary-subtlest":Bo("primary-70"),"icon-hover":Bo("primary-40"),"icon-selected":Bo("primary-50"),"icon-selected-hover":Bo("primary-40"),"icon-disabled":Bo("neutral-50"),"icon-disabled-subtle":Bo("neutral-60"),"icon-selected-disabled":Bo("neutral-60"),"icon-success":Bo("success-50"),"icon-warning":Bo("warning-60"),"icon-error":Bo("error-50"),"icon-error-strong":Bo("error-40"),"icon-info":Bo("info-50"),"icon-inverse":Bo("white"),"icon-primary-inverse":Bo("primary-inverse"),border:Bo("neutral-90"),"border-strong":Bo("neutral-70"),"border-stronger":Bo("neutral-50"),"border-primary":Bo("primary-50"),"border-primary-subtle":Bo("primary-60"),"border-hover":Bo("primary-90"),"border-hover-strong":Bo("primary-60"),"border-selected":Bo("primary-50"),"border-selected-subtle":Bo("primary-70"),"border-selected-subtlest":Bo("primary-90"),"border-selected-hover":Bo("primary-40"),"border-focus":Bo("primary-60"),"border-focus-strong":Bo("primary-50"),"border-disabled":Bo("neutral-90"),"border-selected-disabled":Bo("neutral-70"),"border-success":Bo("success-60"),"border-warning":Bo("warning-60"),"border-error":Bo("error-60"),"border-error-focus":Bo("error-60"),"border-error-focus-strong":Bo("error-40"),"border-error-strong":Bo("error-40"),"border-info":Bo("info-60"),bg:Bo("white"),"bg-strong":Bo("neutral-100"),"bg-stronger":Bo("neutral-95"),"bg-strongest":Bo("neutral-90"),"bg-hover":Bo("primary-95"),"bg-hover-strong":Bo("primary-90"),"bg-hover-subtle":Bo("primary-100"),"bg-hover-neutral":Bo("neutral-100"),"bg-hover-neutral-strong":Bo("neutral-90"),"bg-selected":Bo("primary-95"),"bg-selected-hover":Bo("primary-90"),"bg-selected-strong":Bo("primary-90"),"bg-selected-stronger":Bo("primary-70"),"bg-selected-strongest":Bo("primary-50"),"bg-selected-strongest-hover":Bo("primary-40"),"bg-disabled":Bo("neutral-95"),"bg-selected-disabled":Bo("neutral-95"),"bg-selected-stronger-disabled":Bo("neutral-70"),"bg-success":Bo("success-100"),"bg-success-hover":Bo("success-95"),"bg-success-strong":Bo("success-50"),"bg-success-strong-hover":Bo("success-40"),"bg-warning":Bo("warning-100"),"bg-warning-hover":Bo("warning-95"),"bg-warning-strong":Bo("warning-50"),"bg-warning-strong-hover":Bo("warning-40"),"bg-info":Bo("info-100"),"bg-info-hover":Bo("info-95"),"bg-info-strong":Bo("info-50"),"bg-info-strong-hover":Bo("info-40"),"bg-error":Bo("error-100"),"bg-error-hover":Bo("error-95"),"bg-error-strong":Bo("error-50"),"bg-error-strong-hover":Bo("error-40"),"bg-inverse":Bo("neutral-20"),"bg-inverse-subtle":Bo("neutral-30"),"bg-inverse-subtler":Bo("neutral-50"),"bg-inverse-subtlest":Bo("neutral-60"),"bg-inverse-hover":Bo("neutral-40"),"bg-primary":Bo("primary-50"),"bg-primary-subtle":Bo("primary-60"),"bg-primary-subtler":Bo("primary-95"),"bg-primary-subtlest":Bo("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":Bo("primary-40"),"bg-primary-subtlest-hover":Bo("primary-90"),"bg-primary-subtlest-selected":Bo("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:Bo("primary-50"),"hyperlink-hover":Bo("primary-40"),"hyperlink-visited":Bo("primary-40"),"hyperlink-inverse":Bo("primary-inverse"),"focus-ring":Bo("primary-50"),"focus-ring-inverse":Bo("white")},Io={text:Bo("neutral-100"),"text-subtle":Bo("neutral-80"),"text-subtler":Bo("neutral-60"),"text-subtlest":Bo("neutral-50"),"text-primary":Bo("primary-60"),"text-primary-strongest":Bo("primary-90"),"text-hover":Bo("primary-70"),"text-selected":Bo("primary-60"),"text-selected-hover":Bo("primary-70"),"text-disabled":Bo("neutral-60"),"text-disabled-subtle":Bo("neutral-50"),"text-disabled-subtlest":Bo("neutral-30"),"text-selected-disabled":Bo("neutral-90"),"text-success":Bo("success-70"),"text-warning":Bo("warning-70"),"text-error":Bo("error-70"),"text-info":Bo("info-70"),"text-inverse":Bo("black"),icon:Bo("neutral-60"),"icon-subtle":Bo("neutral-50"),"icon-strongest":Bo("neutral-90"),"icon-primary":Bo("primary-60"),"icon-primary-subtle":Bo("primary-50"),"icon-primary-subtlest":Bo("primary-40"),"icon-hover":Bo("primary-70"),"icon-selected":Bo("primary-60"),"icon-selected-hover":Bo("primary-70"),"icon-disabled":Bo("neutral-60"),"icon-disabled-subtle":Bo("neutral-50"),"icon-selected-disabled":Bo("neutral-50"),"icon-success":Bo("success-60"),"icon-warning":Bo("warning-50"),"icon-error":Bo("error-60"),"icon-error-strong":Bo("error-70"),"icon-info":Bo("info-60"),"icon-inverse":Bo("black"),"icon-primary-inverse":Bo("primary-inverse"),border:Bo("neutral-20"),"border-strong":Bo("neutral-40"),"border-stronger":Bo("neutral-60"),"border-primary":Bo("primary-60"),"border-primary-subtle":Bo("primary-50"),"border-hover":Bo("primary-20"),"border-hover-strong":Bo("primary-50"),"border-selected":Bo("primary-60"),"border-selected-subtle":Bo("primary-40"),"border-selected-subtlest":Bo("primary-20"),"border-selected-hover":Bo("primary-70"),"border-focus":Bo("primary-50"),"border-focus-strong":Bo("primary-60"),"border-disabled":Bo("neutral-20"),"border-selected-disabled":Bo("neutral-40"),"border-success":Bo("success-50"),"border-warning":Bo("warning-50"),"border-error":Bo("error-50"),"border-error-focus":Bo("error-50"),"border-error-focus-strong":Bo("error-70"),"border-error-strong":Bo("error-70"),"border-info":Bo("info-50"),bg:Bo("black"),"bg-strong":Bo("neutral-10"),"bg-stronger":Bo("neutral-20"),"bg-strongest":Bo("neutral-20"),"bg-hover":Bo("primary-20"),"bg-hover-strong":Bo("primary-20"),"bg-hover-subtle":Bo("primary-10"),"bg-hover-neutral":Bo("neutral-10"),"bg-hover-neutral-strong":Bo("neutral-20"),"bg-selected":Bo("primary-20"),"bg-selected-hover":Bo("primary-20"),"bg-selected-strong":Bo("primary-20"),"bg-selected-stronger":Bo("primary-40"),"bg-selected-strongest":Bo("primary-60"),"bg-selected-strongest-hover":Bo("primary-70"),"bg-disabled":Bo("neutral-20"),"bg-selected-disabled":Bo("neutral-20"),"bg-selected-stronger-disabled":Bo("neutral-40"),"bg-success":Bo("success-10"),"bg-success-hover":Bo("success-20"),"bg-success-strong":Bo("success-60"),"bg-success-strong-hover":Bo("success-70"),"bg-warning":Bo("warning-10"),"bg-warning-hover":Bo("warning-20"),"bg-warning-strong":Bo("warning-60"),"bg-warning-strong-hover":Bo("warning-70"),"bg-info":Bo("info-10"),"bg-info-hover":Bo("info-20"),"bg-info-strong":Bo("info-60"),"bg-info-strong-hover":Bo("info-70"),"bg-error":Bo("error-10"),"bg-error-hover":Bo("error-20"),"bg-error-strong":Bo("error-60"),"bg-error-strong-hover":Bo("error-70"),"bg-inverse":Bo("neutral-90"),"bg-inverse-subtle":Bo("neutral-80"),"bg-inverse-subtler":Bo("neutral-60"),"bg-inverse-subtlest":Bo("neutral-50"),"bg-inverse-hover":Bo("neutral-70"),"bg-primary":Bo("primary-60"),"bg-primary-subtle":Bo("primary-50"),"bg-primary-subtler":Bo("primary-20"),"bg-primary-subtlest":Bo("primary-10"),"bg-available":"#185339","bg-primary-hover":Bo("primary-70"),"bg-primary-subtlest-hover":Bo("primary-20"),"bg-primary-subtlest-selected":Bo("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:Bo("primary-60"),"hyperlink-hover":Bo("primary-70"),"hyperlink-visited":Bo("primary-70"),"hyperlink-inverse":Bo("primary-inverse"),"focus-ring":Bo("primary-60"),"focus-ring-inverse":Bo("black")},Mo={collections:{lifesg:Oo,bookingsg:Oo,rbs:Oo,mylegacy:Oo,ccube:Oo,oneservice:Oo,pa:zo,a11yplayground:Ao,supportgowhere:Oo,imda:Oo,spf:Oo},defaultValue:"lifesg"},jo={collections:{lifesg:To,bookingsg:To,rbs:To,mylegacy:To,ccube:To,oneservice:To,pa:To,a11yplayground:Io,supportgowhere:To,imda:To,spf:To},defaultValue:"lifesg"},Lo=e=>r=>{var t;const n=r.theme,o="dark"===(null==n?void 0:n.colourMode),i=co(o?jo:Mo,null==n?void 0:n.colourScheme),a=o?"semanticColourDark":"semanticColour",s=null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t[a],l=s?lo(i,e,s):i[e];return"function"==typeof l?l(r):l},_o={text:Lo("text"),"text-subtle":Lo("text-subtle"),"text-subtler":Lo("text-subtler"),"text-subtlest":Lo("text-subtlest"),"text-primary":Lo("text-primary"),"text-primary-strongest":Lo("text-primary-strongest"),"text-hover":Lo("text-hover"),"text-selected":Lo("text-selected"),"text-selected-hover":Lo("text-selected-hover"),"text-disabled":Lo("text-disabled"),"text-disabled-subtle":Lo("text-disabled-subtle"),"text-disabled-subtlest":Lo("text-disabled-subtlest"),"text-selected-disabled":Lo("text-selected-disabled"),"text-success":Lo("text-success"),"text-warning":Lo("text-warning"),"text-error":Lo("text-error"),"text-info":Lo("text-info"),"text-inverse":Lo("text-inverse"),icon:Lo("icon"),"icon-subtle":Lo("icon-subtle"),"icon-strongest":Lo("icon-strongest"),"icon-primary":Lo("icon-primary"),"icon-primary-subtle":Lo("icon-primary-subtle"),"icon-primary-subtlest":Lo("icon-primary-subtlest"),"icon-hover":Lo("icon-hover"),"icon-selected":Lo("icon-selected"),"icon-selected-hover":Lo("icon-selected-hover"),"icon-disabled":Lo("icon-disabled"),"icon-disabled-subtle":Lo("icon-disabled-subtle"),"icon-selected-disabled":Lo("icon-selected-disabled"),"icon-success":Lo("icon-success"),"icon-warning":Lo("icon-warning"),"icon-error":Lo("icon-error"),"icon-error-strong":Lo("icon-error-strong"),"icon-info":Lo("icon-info"),"icon-inverse":Lo("icon-inverse"),"icon-primary-inverse":Lo("icon-primary-inverse"),border:Lo("border"),"border-strong":Lo("border-strong"),"border-stronger":Lo("border-stronger"),"border-primary":Lo("border-primary"),"border-primary-subtle":Lo("border-primary-subtle"),"border-hover":Lo("border-hover"),"border-hover-strong":Lo("border-hover-strong"),"border-selected":Lo("border-selected"),"border-selected-subtle":Lo("border-selected-subtle"),"border-selected-subtlest":Lo("border-selected-subtlest"),"border-selected-hover":Lo("border-selected-hover"),"border-focus":Lo("border-focus"),"border-focus-strong":Lo("border-focus-strong"),"border-disabled":Lo("border-disabled"),"border-selected-disabled":Lo("border-selected-disabled"),"border-success":Lo("border-success"),"border-warning":Lo("border-warning"),"border-error":Lo("border-error"),"border-error-focus":Lo("border-error-focus"),"border-error-focus-strong":Lo("border-error-focus-strong"),"border-error-strong":Lo("border-error-strong"),"border-info":Lo("border-info"),bg:Lo("bg"),"bg-strong":Lo("bg-strong"),"bg-stronger":Lo("bg-stronger"),"bg-strongest":Lo("bg-strongest"),"bg-hover":Lo("bg-hover"),"bg-hover-strong":Lo("bg-hover-strong"),"bg-hover-subtle":Lo("bg-hover-subtle"),"bg-hover-neutral":Lo("bg-hover-neutral"),"bg-hover-neutral-strong":Lo("bg-hover-neutral-strong"),"bg-selected":Lo("bg-selected"),"bg-selected-hover":Lo("bg-selected-hover"),"bg-selected-strong":Lo("bg-selected-strong"),"bg-selected-stronger":Lo("bg-selected-stronger"),"bg-selected-strongest":Lo("bg-selected-strongest"),"bg-selected-strongest-hover":Lo("bg-selected-strongest-hover"),"bg-disabled":Lo("bg-disabled"),"bg-selected-disabled":Lo("bg-selected-disabled"),"bg-selected-stronger-disabled":Lo("bg-selected-stronger-disabled"),"bg-success":Lo("bg-success"),"bg-success-hover":Lo("bg-success-hover"),"bg-success-strong":Lo("bg-success-strong"),"bg-success-strong-hover":Lo("bg-success-strong-hover"),"bg-warning":Lo("bg-warning"),"bg-warning-hover":Lo("bg-warning-hover"),"bg-warning-strong":Lo("bg-warning-strong"),"bg-warning-strong-hover":Lo("bg-warning-strong-hover"),"bg-info":Lo("bg-info"),"bg-info-hover":Lo("bg-info-hover"),"bg-info-strong":Lo("bg-info-strong"),"bg-info-strong-hover":Lo("bg-info-strong-hover"),"bg-error":Lo("bg-error"),"bg-error-hover":Lo("bg-error-hover"),"bg-error-strong":Lo("bg-error-strong"),"bg-error-strong-hover":Lo("bg-error-strong-hover"),"bg-inverse":Lo("bg-inverse"),"bg-inverse-subtle":Lo("bg-inverse-subtle"),"bg-inverse-subtler":Lo("bg-inverse-subtler"),"bg-inverse-subtlest":Lo("bg-inverse-subtlest"),"bg-inverse-hover":Lo("bg-inverse-hover"),"bg-primary":Lo("bg-primary"),"bg-primary-subtle":Lo("bg-primary-subtle"),"bg-primary-subtler":Lo("bg-primary-subtler"),"bg-primary-subtlest":Lo("bg-primary-subtlest"),"bg-available":Lo("bg-available"),"bg-primary-hover":Lo("bg-primary-hover"),"bg-primary-subtlest-hover":Lo("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":Lo("bg-primary-subtlest-selected"),"overlay-strong":Lo("overlay-strong"),"overlay-subtle":Lo("overlay-subtle"),hyperlink:Lo("hyperlink"),"hyperlink-hover":Lo("hyperlink-hover"),"hyperlink-visited":Lo("hyperlink-visited"),"hyperlink-inverse":Lo("hyperlink-inverse"),"focus-ring":Lo("focus-ring"),"focus-ring-inverse":Lo("focus-ring-inverse")},Ro={collections:{default:{solid:e=>r=>{var t,n,o;const{thickness:i,radius:a,colour:s}=e||{},l=null!==(t="function"==typeof i?i(r):i+"px")&&void 0!==t?t:ho["width-010"](r),d=null!==(n="function"==typeof a?a(r):a+"px")&&void 0!==n?n:0,c=null!==(o="function"==typeof s?s(r):s)&&void 0!==o?o:_o.border(r),u=ho.solid;return F`
            border: ${l} ${u} ${c};
            border-radius: ${d};
        `},"dashed-default":e=>r=>{var t,n,o;const{thickness:i,radius:a,colour:s}=e||{},l=null!==(t="function"==typeof i?i(r):i)&&void 0!==t?t:ho["width-010"](r),d=null!==(n="function"==typeof a?a(r):a)&&void 0!==n?n:0,c=null!==(o="function"==typeof s?s(r):s)&&void 0!==o?o:_o.border(r),u=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${d}' ry='${d}' stroke='${c}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return F`
            background-image: url("data:image/svg+xml,${u}");
            border-radius: ${d};
        `}}},defaultValue:"default"},Ho=e=>1===e.length&&"theme"in e[0],Po=e=>(...r)=>t=>{const n=Ho(r)?[]:r,o=Ho(r)?r[0]:t,i=o.theme;return(0,co(Ro,null==i?void 0:i.borderScheme)[e])(...n)(o)},Wo={solid:Po("solid"),"dashed-default":Po("dashed-default")},No={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":480,"md-min":481,"md-max":768,"lg-min":769,"lg-max":1200,"xl-min":1201,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},Vo=e=>r=>{var t;const n=r.theme,o=co(No,null==n?void 0:n.breakpointScheme);let i;return i=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.breakpoint)?lo(o,e,n.overrides.breakpoint):o[e],i},Yo={"xxs-min":Vo("xxs-min"),"xxs-max":Vo("xxs-max"),"xs-min":Vo("xs-min"),"xs-max":Vo("xs-max"),"sm-min":Vo("sm-min"),"sm-max":Vo("sm-max"),"md-min":Vo("md-min"),"md-max":Vo("md-max"),"lg-min":Vo("lg-min"),"lg-max":Vo("lg-max"),"xl-min":Vo("xl-min"),"xl-max":Vo("xl-max"),"xxl-min":Vo("xxl-min"),"xxs-column":Vo("xxs-column"),"xs-column":Vo("xs-column"),"sm-column":Vo("sm-column"),"md-column":Vo("md-column"),"lg-column":Vo("lg-column"),"xl-column":Vo("xl-column"),"xxl-column":Vo("xxl-column"),"xxs-gutter":Vo("xxs-gutter"),"xs-gutter":Vo("xs-gutter"),"sm-gutter":Vo("sm-gutter"),"md-gutter":Vo("md-gutter"),"lg-gutter":Vo("lg-gutter"),"xl-gutter":Vo("xl-gutter"),"xxl-gutter":Vo("xxl-gutter"),"xxs-margin":Vo("xxs-margin"),"xs-margin":Vo("xs-margin"),"sm-margin":Vo("sm-margin"),"md-margin":Vo("md-margin"),"lg-margin":Vo("lg-margin"),"xl-margin":Vo("xl-margin"),"xxl-margin":Vo("xxl-margin")},Uo=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,t)=>(r[t]=((e,r)=>{const t=Yo["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const n=t(r);return`@media screen and (${e}: ${n}px)`}})(e,t),r)),{}),qo={MaxWidth:Uo("max-width"),MinWidth:Uo("min-width")},Go={collections:{default:{none:0,xs:2,sm:4,md:8,lg:12,full:9999},spf:{none:0,xs:2,sm:8,md:8,lg:12,full:9999}},defaultValue:"default"},Zo=e=>r=>{var t;const n=r.theme,o=co(Go,null==n?void 0:n.radiusScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.radius)?`${lo(o,e,n.overrides.radius)}px`:`${o[e]}px`},Ko={none:Zo("none"),xs:Zo("xs"),sm:Zo("sm"),md:Zo("md"),lg:Zo("lg"),full:Zo("full")},Xo={Button:{"button-radius":Ko.md,"button-default-colour-bg":_o["bg-primary"],"button-default-colour-bg-hover":_o["bg-primary-hover"],"button-default-colour-text":_o["text-inverse"],"button-secondary-colour-border":_o["border-primary"],"button-secondary-colour-text":_o["text-primary"],"button-light-colour-text":_o["text-primary"],"button-link-colour-text":_o["text-primary"]},Animation:{"loading-dots-spinner-colour":_o["icon-primary"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"2rem","navbar-compressed-height":"4rem","navbar-compressed-logo-height":"1.5rem","navbar-mobile-height":"3.5rem","navbar-mobile-logo-height":"1.5rem","navbar-colour-bg":_o.bg,"navbar-colour-icon":_o.icon,"navbar-link-colour-text":_o.text,"navbar-link-colour-text-hover":_o["text-hover"],"navbar-link-colour-text-selected-hover":_o["text-selected-hover"]},Footer:{"footer-colour-bg":_o["bg-strong"],"footer-colour-text":_o.text,"footer-link-colour-text":_o.text,"footer-link-colour-text-hover":_o["text-hover"],"footer-disclaimer-link-colour-text":_o.text,"footer-disclaimer-link-colour-text-hover":_o["text-subtler"]}},Qo={Button:{"button-radius":Ko.sm,"button-default-colour-bg":_o["bg-primary"],"button-default-colour-bg-hover":_o["bg-primary-hover"],"button-default-colour-text":_o["text-inverse"],"button-secondary-colour-border":_o["border-primary"],"button-secondary-colour-text":_o["text-primary"],"button-light-colour-text":_o["text-primary"],"button-link-colour-text":_o["text-primary"]},Animation:{"loading-dots-spinner-colour":_o["icon-primary"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"2rem","navbar-compressed-height":"4rem","navbar-compressed-logo-height":"1.5rem","navbar-mobile-height":"3.5rem","navbar-mobile-logo-height":"1.5rem","navbar-colour-bg":_o.bg,"navbar-colour-icon":_o.icon,"navbar-link-colour-text":_o.text,"navbar-link-colour-text-hover":_o["text-hover"],"navbar-link-colour-text-selected-hover":_o["text-selected-hover"]},Footer:{"footer-colour-bg":_o["bg-strong"],"footer-colour-text":_o.text,"footer-link-colour-text":_o.text,"footer-link-colour-text-hover":_o["text-hover"],"footer-disclaimer-link-colour-text":_o.text,"footer-disclaimer-link-colour-text-hover":_o["text-subtler"]}},Jo={Button:{"button-radius":Ko.sm,"button-default-colour-bg":_o["bg-primary"],"button-default-colour-bg-hover":_o["bg-primary-hover"],"button-default-colour-text":_o["text-inverse"],"button-secondary-colour-border":_o["border-primary"],"button-secondary-colour-text":_o["text-primary"],"button-light-colour-text":_o["text-primary"],"button-link-colour-text":_o["text-primary"]},Animation:{"loading-dots-spinner-colour":ko["brand-50"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"2rem","navbar-compressed-height":"4rem","navbar-compressed-logo-height":"1.5rem","navbar-mobile-height":"3.5rem","navbar-mobile-logo-height":"1.5rem","navbar-colour-bg":_o.bg,"navbar-colour-icon":_o.icon,"navbar-link-colour-text":_o.text,"navbar-link-colour-text-hover":_o["text-hover"],"navbar-link-colour-text-selected-hover":_o["text-selected-hover"]},Footer:{"footer-colour-bg":_o["bg-strong"],"footer-colour-text":_o.text,"footer-link-colour-text":_o.text,"footer-link-colour-text-hover":_o["text-hover"],"footer-disclaimer-link-colour-text":_o.text,"footer-disclaimer-link-colour-text-hover":_o["text-subtler"]}},ei={collections:{default:Qo,pa:{Button:{"button-radius":Ko.full,"button-default-colour-bg":_o["bg-primary"],"button-default-colour-bg-hover":_o["bg-primary-hover"],"button-default-colour-text":_o["text-inverse"],"button-secondary-colour-border":_o["border-primary"],"button-secondary-colour-text":_o["text-primary"],"button-light-colour-text":_o["text-primary"],"button-link-colour-text":_o["text-primary"]},Animation:{"loading-dots-spinner-colour":_o["icon-primary"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"2rem","navbar-compressed-height":"4rem","navbar-compressed-logo-height":"1.5rem","navbar-mobile-height":"3.5rem","navbar-mobile-logo-height":"1.5rem","navbar-colour-bg":_o.bg,"navbar-colour-icon":_o.icon,"navbar-link-colour-text":_o.text,"navbar-link-colour-text-hover":_o["text-hover"],"navbar-link-colour-text-selected-hover":_o["text-selected-hover"]},Footer:{"footer-colour-bg":_o["bg-strong"],"footer-colour-text":_o.text,"footer-link-colour-text":_o.text,"footer-link-colour-text-hover":_o["text-hover"],"footer-disclaimer-link-colour-text":_o.text,"footer-disclaimer-link-colour-text-hover":_o["text-subtler"]}},a11yplayground:Xo,lifesg:Jo,spf:{Button:{"button-radius":Ko.md,"button-default-colour-bg":_o["bg-primary"],"button-default-colour-bg-hover":_o["bg-primary-hover"],"button-default-colour-text":_o["text-inverse"],"button-secondary-colour-border":_o["border-primary"],"button-secondary-colour-text":_o["text-primary"],"button-light-colour-text":_o["text-primary"],"button-link-colour-text":_o["text-primary"]},Animation:{"loading-dots-spinner-colour":_o["icon-primary"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"3rem","navbar-compressed-height":"5rem","navbar-compressed-logo-height":"2rem","navbar-mobile-height":"4rem","navbar-mobile-logo-height":"2rem","navbar-colour-bg":_o.bg,"navbar-colour-icon":_o.icon,"navbar-link-colour-text":_o["text-primary-strongest"],"navbar-link-colour-text-hover":_o["text-subtler"],"navbar-link-colour-text-selected-hover":_o["text-subtler"]},Footer:{"footer-colour-bg":_o["bg-inverse"],"footer-colour-text":_o["text-inverse"],"footer-link-colour-text":_o["text-inverse"],"footer-link-colour-text-hover":_o["text-inverse"],"footer-disclaimer-link-colour-text":_o["text-inverse"],"footer-disclaimer-link-colour-text-hover":_o["text-inverse"]}}},defaultValue:"default"},ri=(e,r)=>t=>{var n,o;const i=t.theme,a=co(ei,null==i?void 0:i.componentScheme);return ti((null===(o=null===(n=null==i?void 0:i.componentOverrides)||void 0===n?void 0:n[e])||void 0===o?void 0:o[r])||a[e][r],t)},ti=(e,r)=>{switch(typeof e){case"function":return e(r);case"number":return e+"px";case"string":return e}},ni=ri("Button","button-radius"),oi=ri("Button","button-default-colour-bg"),ii=ri("Button","button-default-colour-bg-hover"),ai=ri("Button","button-default-colour-text"),si=ri("Button","button-secondary-colour-border"),li=ri("Button","button-secondary-colour-text"),di=ri("Button","button-light-colour-text"),ci=ri("Button","button-link-colour-text"),ui={collections:{default:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},bookingsg:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},mylegacy:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0.009rem"},pa:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.5rem","heading-size-sm":"1.25rem","heading-size-xs":"1rem","heading-lh-xxl":"3rem","heading-lh-xl":"2.5rem","heading-lh-lg":"2.25rem","heading-lh-md":"2rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.032rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.625rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.25rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},a11yplayground:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Atkinson Hyperlegible Next","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0.009rem"},supportgowhere:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Libre Franklin","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},sgwdigitallobby:{"heading-size-xxl":"3.75rem","heading-size-xl":"3rem","heading-size-lg":"2.5rem","heading-size-md":"2rem","heading-size-sm":"1.625rem","heading-size-xs":"1.375rem","heading-lh-xxl":"4.5rem","heading-lh-xl":"3.5rem","heading-lh-lg":"3rem","heading-lh-md":"2.5rem","heading-lh-sm":"2.25rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.035em","heading-ls-lg":"-0.02rem","heading-ls-md":"-0.02rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Libre Franklin","body-size-baseline":"1.375rem","body-size-md":"1.2rem","body-size-sm":"1.125rem","body-size-xs":"1rem","body-lh-baseline":"1.75rem","body-lh-md":"1.625rem","body-lh-sm":"1.625rem","body-lh-xs":"1.5rem","body-ls-baseline":"0rem","body-ls-md":"0rem","body-ls-sm":"0rem","body-ls-xs":"0.009rem","form-label-size":"1.25rem","form-description-size":"1.125rem","form-label-lh":"1.625rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0rem"},imda:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Montserrat","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},spf:{"heading-size-xxl":"3.75rem","heading-size-xl":"3rem","heading-size-lg":"2.5rem","heading-size-md":"2rem","heading-size-sm":"1.75rem","heading-size-xs":"1.5rem","heading-lh-xxl":"4.5rem","heading-lh-xl":"3.5rem","heading-lh-lg":"3rem","heading-lh-md":"2.25rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Public Sans","body-size-baseline":"1.2rem","body-size-md":"1.125rem","body-size-sm":"1rem","body-size-xs":"0.875rem","body-lh-baseline":"1.5rem","body-lh-md":"1.5rem","body-lh-sm":"1.5rem","body-lh-xs":"1.125rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},oneservice:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.375rem","heading-size-sm":"1.125rem","heading-size-xs":"1rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.625rem","heading-lh-md":"2rem","heading-lh-sm":"1.625rem","heading-lh-xs":"1.5rem","heading-ls-xxl":"0rem","heading-ls-xl":"0rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.75rem","body-lh-baseline":"1.5rem","body-lh-md":"1.313rem","body-lh-sm":"1.125rem","body-lh-xs":"1.125rem","body-ls-baseline":"0rem","body-ls-md":"0rem","body-ls-sm":"0rem","body-ls-xs":"0rem","form-label-size":"0.875rem","form-description-size":"0.875rem","form-label-lh":"1.313rem","form-description-lh":"1.313rem","form-label-ls":"0rem","form-description-ls":"0rem"}},defaultValue:"default"},gi=e=>r=>{var t;const n=r.theme,o=co(ui,null==n?void 0:n.fontScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.fontSpec)?lo(o,e,n.overrides.fontSpec):o[e]},hi={"heading-size-xxl":gi("heading-size-xxl"),"heading-size-xl":gi("heading-size-xl"),"heading-size-lg":gi("heading-size-lg"),"heading-size-md":gi("heading-size-md"),"heading-size-sm":gi("heading-size-sm"),"heading-size-xs":gi("heading-size-xs"),"heading-lh-xxl":gi("heading-lh-xxl"),"heading-lh-xl":gi("heading-lh-xl"),"heading-lh-lg":gi("heading-lh-lg"),"heading-lh-md":gi("heading-lh-md"),"heading-lh-sm":gi("heading-lh-sm"),"heading-lh-xs":gi("heading-lh-xs"),"heading-ls-xxl":gi("heading-ls-xxl"),"heading-ls-xl":gi("heading-ls-xl"),"heading-ls-lg":gi("heading-ls-lg"),"heading-ls-md":gi("heading-ls-md"),"heading-ls-sm":gi("heading-ls-sm"),"heading-ls-xs":gi("heading-ls-xs"),"weight-light":gi("weight-light"),"weight-regular":gi("weight-regular"),"weight-semibold":gi("weight-semibold"),"weight-bold":gi("weight-bold"),"font-family":gi("font-family"),"body-size-baseline":gi("body-size-baseline"),"body-size-md":gi("body-size-md"),"body-size-sm":gi("body-size-sm"),"body-size-xs":gi("body-size-xs"),"body-lh-baseline":gi("body-lh-baseline"),"body-lh-md":gi("body-lh-md"),"body-lh-sm":gi("body-lh-sm"),"body-lh-xs":gi("body-lh-xs"),"body-ls-baseline":gi("body-ls-baseline"),"body-ls-md":gi("body-ls-md"),"body-ls-sm":gi("body-ls-sm"),"body-ls-xs":gi("body-ls-xs"),"form-label-size":gi("form-label-size"),"form-description-size":gi("form-description-size"),"form-label-lh":gi("form-label-lh"),"form-description-lh":gi("form-description-lh"),"form-label-ls":gi("form-label-ls"),"form-description-ls":gi("form-description-ls")},mi=(e,r,t,n,o)=>{const{disableLigatures:i}=o||{};return F`
        font-family: ${gi("font-family")};
        font-size: ${gi(e)};
        font-weight: ${gi(r)};
        line-height: ${gi(t)};
        letter-spacing: ${gi(n)};

        font-variant: ${i?"no-common-ligatures":"normal"};
    `},fi=(e={})=>({"heading-xxl-light":mi("heading-size-xxl","weight-light","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-regular":mi("heading-size-xxl","weight-regular","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-semibold":mi("heading-size-xxl","weight-semibold","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-bold":mi("heading-size-xxl","weight-bold","heading-lh-xxl","heading-ls-xxl",e),"heading-xl-light":mi("heading-size-xl","weight-light","heading-lh-xl","heading-ls-xl",e),"heading-xl-regular":mi("heading-size-xl","weight-regular","heading-lh-xl","heading-ls-xl",e),"heading-xl-semibold":mi("heading-size-xl","weight-semibold","heading-lh-xl","heading-ls-xl",e),"heading-xl-bold":mi("heading-size-xl","weight-bold","heading-lh-xl","heading-ls-xl",e),"heading-lg-light":mi("heading-size-lg","weight-light","heading-lh-lg","heading-ls-lg",e),"heading-lg-regular":mi("heading-size-lg","weight-regular","heading-lh-lg","heading-ls-lg",e),"heading-lg-semibold":mi("heading-size-lg","weight-semibold","heading-lh-lg","heading-ls-lg",e),"heading-lg-bold":mi("heading-size-lg","weight-bold","heading-lh-lg","heading-ls-lg",e),"heading-md-light":mi("heading-size-md","weight-light","heading-lh-md","heading-ls-md",e),"heading-md-regular":mi("heading-size-md","weight-regular","heading-lh-md","heading-ls-md",e),"heading-md-semibold":mi("heading-size-md","weight-semibold","heading-lh-md","heading-ls-md",e),"heading-md-bold":mi("heading-size-md","weight-bold","heading-lh-md","heading-ls-md",e),"heading-sm-light":mi("heading-size-sm","weight-light","heading-lh-sm","heading-ls-sm",e),"heading-sm-regular":mi("heading-size-sm","weight-regular","heading-lh-sm","heading-ls-sm",e),"heading-sm-semibold":mi("heading-size-sm","weight-semibold","heading-lh-sm","heading-ls-sm",e),"heading-sm-bold":mi("heading-size-sm","weight-bold","heading-lh-sm","heading-ls-sm",e),"heading-xs-light":mi("heading-size-xs","weight-light","heading-lh-xs","heading-ls-xs",e),"heading-xs-regular":mi("heading-size-xs","weight-regular","heading-lh-xs","heading-ls-xs",e),"heading-xs-semibold":mi("heading-size-xs","weight-semibold","heading-lh-xs","heading-ls-xs",e),"heading-xs-bold":mi("heading-size-xs","weight-bold","heading-lh-xs","heading-ls-xs",e),"body-baseline-light":mi("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline",e),"body-baseline-regular":mi("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline",e),"body-baseline-semibold":mi("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline",e),"body-baseline-bold":mi("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline",e),"body-md-light":mi("body-size-md","weight-light","body-lh-md","body-ls-md",e),"body-md-regular":mi("body-size-md","weight-regular","body-lh-md","body-ls-md",e),"body-md-semibold":mi("body-size-md","weight-semibold","body-lh-md","body-ls-md",e),"body-md-bold":mi("body-size-md","weight-bold","body-lh-md","body-ls-md",e),"body-sm-light":mi("body-size-sm","weight-light","body-lh-sm","body-ls-sm",e),"body-sm-regular":mi("body-size-sm","weight-regular","body-lh-sm","body-ls-sm",e),"body-sm-semibold":mi("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm",e),"body-sm-bold":mi("body-size-sm","weight-bold","body-lh-sm","body-ls-sm",e),"body-xs-light":mi("body-size-xs","weight-light","body-lh-xs","body-ls-xs",e),"body-xs-regular":mi("body-size-xs","weight-regular","body-lh-xs","body-ls-xs",e),"body-xs-semibold":mi("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs",e),"body-xs-bold":mi("body-size-xs","weight-bold","body-lh-xs","body-ls-xs",e),"form-label":mi("form-label-size","weight-semibold","form-label-lh","form-label-ls",e),"form-description":mi("form-description-size","weight-regular","form-description-lh","form-description-ls",e)}),bi=fi({disableLigatures:!0}),pi=fi(),yi=fi({disableLigatures:!0}),vi=fi({disableLigatures:!0}),xi=fi({disableLigatures:!0}),wi={collections:{default:pi,bookingsg:bi,mylegacy:pi,pa:yi,a11yplayground:vi,supportgowhere:xi,sgwdigitallobby:xi,imda:fi({disableLigatures:!0}),spf:fi({disableLigatures:!0}),oneservice:fi()},defaultValue:"default"},$i=e=>r=>{var t;const n=r.theme,o=co(wi,null==n?void 0:n.fontScheme),i=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.font)?lo(o,e,n.overrides.font):o[e];return"function"==typeof i?i(r):i},Fi={"heading-xxl-light":$i("heading-xxl-light"),"heading-xxl-regular":$i("heading-xxl-regular"),"heading-xxl-semibold":$i("heading-xxl-semibold"),"heading-xxl-bold":$i("heading-xxl-bold"),"heading-xl-light":$i("heading-xl-light"),"heading-xl-regular":$i("heading-xl-regular"),"heading-xl-semibold":$i("heading-xl-semibold"),"heading-xl-bold":$i("heading-xl-bold"),"heading-lg-light":$i("heading-lg-light"),"heading-lg-regular":$i("heading-lg-regular"),"heading-lg-semibold":$i("heading-lg-semibold"),"heading-lg-bold":$i("heading-lg-bold"),"heading-md-light":$i("heading-md-light"),"heading-md-regular":$i("heading-md-regular"),"heading-md-semibold":$i("heading-md-semibold"),"heading-md-bold":$i("heading-md-bold"),"heading-sm-light":$i("heading-sm-light"),"heading-sm-regular":$i("heading-sm-regular"),"heading-sm-semibold":$i("heading-sm-semibold"),"heading-sm-bold":$i("heading-sm-bold"),"heading-xs-light":$i("heading-xs-light"),"heading-xs-regular":$i("heading-xs-regular"),"heading-xs-semibold":$i("heading-xs-semibold"),"heading-xs-bold":$i("heading-xs-bold"),"body-baseline-light":$i("body-baseline-light"),"body-baseline-regular":$i("body-baseline-regular"),"body-baseline-semibold":$i("body-baseline-semibold"),"body-baseline-bold":$i("body-baseline-bold"),"body-md-light":$i("body-md-light"),"body-md-regular":$i("body-md-regular"),"body-md-semibold":$i("body-md-semibold"),"body-md-bold":$i("body-md-bold"),"body-sm-light":$i("body-sm-light"),"body-sm-regular":$i("body-sm-regular"),"body-sm-semibold":$i("body-sm-semibold"),"body-sm-bold":$i("body-sm-bold"),"body-xs-light":$i("body-xs-light"),"body-xs-regular":$i("body-xs-regular"),"body-xs-semibold":$i("body-xs-semibold"),"body-xs-bold":$i("body-xs-bold"),"form-label":$i("form-label"),"form-description":$i("form-description")},Ci={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},Ei=e=>r=>{var t;const n=r.theme,o=co(Ci,null==n?void 0:n.motionScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.motion)?lo(o,e,n.overrides.motion):o[e]},Si={"duration-150":Ei("duration-150"),"duration-250":Ei("duration-250"),"duration-350":Ei("duration-350"),"duration-500":Ei("duration-500"),"duration-800":Ei("duration-800"),"duration-1000":Ei("duration-1000"),"ease-default":Ei("ease-default"),"ease-standard":Ei("ease-standard"),"ease-entrance":Ei("ease-entrance"),"ease-exit":Ei("ease-exit")},Di=(e,r,t)=>n=>{const o=Lo(r)(n)||Bo(r)(n);return`${e} rgba(from ${o} r g b / ${100*t}%)`},Bi={collections:{default:{"xs-subtle":Di("0 0 4px 1px","neutral-50",.24),"xs-strong":Di("0 0 4px 1px","neutral-50",.5),"xs-focus-strong":Di("0 0 4px 1px","border-focus",.5),"xs-error-strong":Di("0 0 4px 1px","border-error",.5),"sm-subtle":Di("0 2px 4px 0","neutral-50",.24),"sm-strong":Di("0 2px 4px 0","neutral-50",.5),"md-subtle":Di("0 2px 8px 0","neutral-50",.24),"md-strong":Di("0 2px 8px 0","neutral-50",.5),"lg-subtle":Di("0 2px 12px 1px","neutral-50",.24),"lg-strong":Di("0 2px 12px 1px","neutral-50",.5)}},defaultValue:"default"},ki=e=>r=>{var t;const n=r.theme,o=co(Bi,null==n?void 0:n.shadowScheme),i=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.shadow)?lo(o,e,n.overrides.shadow):o[e];return"function"==typeof i?i(r):i},Oi={"xs-subtle":ki("xs-subtle"),"xs-strong":ki("xs-strong"),"xs-focus-strong":ki("xs-focus-strong"),"xs-error-strong":ki("xs-error-strong"),"sm-subtle":ki("sm-subtle"),"sm-strong":ki("sm-strong"),"md-subtle":ki("md-subtle"),"md-strong":ki("md-strong"),"lg-subtle":ki("lg-subtle"),"lg-strong":ki("lg-strong")},Ti={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},zi=e=>r=>{var t;const n=r.theme,o=co(Ti,null==n?void 0:n.spacingScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.spacing)?`${lo(o,e,n.overrides.spacing)}px`:`${o[e]}px`},Ai={"spacing-0":zi("spacing-0"),"spacing-4":zi("spacing-4"),"spacing-8":zi("spacing-8"),"spacing-12":zi("spacing-12"),"spacing-16":zi("spacing-16"),"spacing-20":zi("spacing-20"),"spacing-24":zi("spacing-24"),"spacing-32":zi("spacing-32"),"spacing-40":zi("spacing-40"),"spacing-48":zi("spacing-48"),"spacing-64":zi("spacing-64"),"spacing-72":zi("spacing-72"),"layout-xs":zi("layout-xs"),"layout-sm":zi("layout-sm"),"layout-md":zi("layout-md"),"layout-lg":zi("layout-lg"),"layout-xl":zi("layout-xl"),"layout-xxl":zi("layout-xxl"),"layout-xxxl":zi("layout-xxxl")},Ii=(e,r)=>Object.assign(Object.assign({},e),{colourMode:r}),Mi=Object.assign(Object.assign({},_o),{Primitive:ko}),ji=Object.assign(Object.assign({},Fi),{Spec:hi}),Li=Si,_i=Object.assign(Object.assign({},ho),{Util:Wo}),Ri=Ai,Hi=Ko,Pi=Oi,Wi=Yo,Ni=qo,Vi={colourScheme:"lifesg",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"lifesg",componentScheme:"lifesg",_v2:{colorScheme:"base",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"base"}},Yi={colourScheme:"bookingsg",fontScheme:"bookingsg",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"bookingsg",_v2:{colorScheme:"bookingsg",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"bookingsg"}},Ui={colourScheme:"ccube",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"ccube",_v2:{colorScheme:"ccube",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"ccube"}},qi={colourScheme:"mylegacy",fontScheme:"mylegacy",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"mylegacy",_v2:{colorScheme:"mylegacy",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"mylegacy"}},Gi={colourScheme:"rbs",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"rbs",_v2:{colorScheme:"rbs",textStyleScheme:"base",designTokenScheme:"rbs",resourceScheme:"rbs"}},Zi={colourScheme:"oneservice",fontScheme:"oneservice",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"oneservice"},Ki={colourScheme:"pa",fontScheme:"pa",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"pa",componentScheme:"pa"},Xi={colourScheme:"a11yplayground",fontScheme:"a11yplayground",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"a11yplayground",componentScheme:"a11yplayground"},Qi={colourScheme:"supportgowhere",fontScheme:"supportgowhere",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"supportgowhere",componentScheme:"default"},Ji={colourScheme:"supportgowhere",fontScheme:"sgwdigitallobby",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"supportgowhere",componentScheme:"default"},ea={colourScheme:"imda",fontScheme:"imda",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"imda",componentScheme:"default"},ra={colourScheme:"spf",fontScheme:"spf",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"spf",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"spf",componentScheme:"spf"};Object.assign(Object.assign({},Vi),{light:Ii(Vi,"light"),dark:Ii(Vi,"dark")}),Object.assign(Object.assign({},Yi),{light:Ii(Yi,"light"),dark:Ii(Yi,"dark")}),Object.assign(Object.assign({},Ui),{light:Ii(Ui,"light"),dark:Ii(Ui,"dark")}),Object.assign(Object.assign({},qi),{light:Ii(qi,"light"),dark:Ii(qi,"dark")}),Object.assign(Object.assign({},Gi),{light:Ii(Gi,"light"),dark:Ii(Gi,"dark")}),Object.assign(Object.assign({},Zi),{light:Ii(Zi,"light"),dark:Ii(Zi,"dark")}),Object.assign(Object.assign({},Ki),{light:Ii(Ki,"light"),dark:Ii(Ki,"dark")}),Object.assign(Object.assign({},Xi),{light:Ii(Xi,"light"),dark:Ii(Xi,"dark")}),Object.assign(Object.assign({},Qi),{light:Ii(Qi,"light"),dark:Ii(Qi,"dark")}),Object.assign(Object.assign({},Ji),{light:Ii(Ji,"light"),dark:Ii(Ji,"dark")}),Object.assign(Object.assign({},ea),{light:Ii(ea,"light"),dark:Ii(ea,"dark")}),Object.assign(Object.assign({},ra),{light:Ii(ra,"light"),dark:Ii(ra,"dark")});const ta=e=>F`
    display: -webkit-box;
    -webkit-line-clamp: ${e};
    -webkit-box-orient: vertical;
    overflow: hidden;
`,na=(e,r,t=!1)=>F`
        ${ji[`${e}-${r}`]}
        ${t?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `,oa=e=>{if(e)return F`
            ${ta(e)}
        `},ia=(e,r,t,n,o)=>F`
    ${na(e,r||"regular",n)}
    ${((e=!1,r=!1,t)=>r?F`
            display: block;
            ${oa(t)}
        `:e?F`
            display: inline;
        `:F`
            display: block;
            ${oa(t)}
        `)(t,n,o)}
    color: ${Mi.text};
`,aa=$.div`
    ${e=>ia(e.$textStyle,e.$weight,e.$inline,e.$paragraph,e.$maxLines)}
`,sa=$.a`
    ${e=>{var r;return F`
        ${na(e.$textStyle,e.$weight||"regular")}
        color: ${Mi.hyperlink};
        text-decoration: ${null!==(r=e.$underlineStyle)&&void 0!==r?r:"underline"};

        &:hover,
        &:active,
        &:focus {
            color: ${Mi["text-hover"]};
        }
    `}}
`,la=$(D)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`;var da;!function(t){const n=(r,t,n)=>{const i=(n,o)=>{var{weight:i,inline:a,paragraph:s,maxLines:l}=n,d=ne(n,["weight","inline","paragraph","maxLines"]);return e(aa,Object.assign({ref:o,as:a?"span":r,$textStyle:t,$weight:i,$inline:a,$paragraph:s,$maxLines:l},d))};return i.displayName=`Typography.${n}`,o.forwardRef(i)};t.HeadingXXL=n("h1","heading-xxl","HeadingXXL"),t.HeadingXL=n("h2","heading-xl","HeadingXL"),t.HeadingLG=n("h3","heading-lg","HeadingLG"),t.HeadingMD=n("h4","heading-md","HeadingMD"),t.HeadingSM=n("h5","heading-sm","HeadingSM"),t.HeadingXS=n("h6","heading-xs","HeadingXS");const i=(r,t)=>{const n=(t,n)=>{var{weight:o,inline:i,paragraph:a,maxLines:s}=t,l=ne(t,["weight","inline","paragraph","maxLines"]);return e(aa,Object.assign({ref:n,as:i?"span":"p",$textStyle:r,$weight:o,$inline:i,$paragraph:a,$maxLines:s},l))};return n.displayName=`Typography.${t}`,o.forwardRef(n)};t.BodyBL=i("body-baseline","BodyBL"),t.BodyMD=i("body-md","BodyMD"),t.BodySM=i("body-sm","BodySM"),t.BodyXS=i("body-xs","BodyXS");const a=(t,n)=>{const i=(n,o)=>{var{weight:i,children:a,external:s,underlineStyle:l="underline"}=n,d=ne(n,["weight","children","external","underlineStyle"]);return r(sa,Object.assign({ref:o,$textStyle:t,$weight:i,$underlineStyle:l},d,{children:[a,s&&e(la,{})]}))};return i.displayName=`Typography.${n}`,o.forwardRef(i)};t.LinkBL=a("body-baseline","LinkBL"),t.LinkMD=a("body-md","LinkMD"),t.LinkSM=a("body-sm","LinkSM"),t.LinkXS=a("body-xs","LinkXS")}(da||(da={}));const ca=$.div`
    border-radius: ${Hi.md};
    background: ${Mi.bg};
    padding: ${Ri["spacing-16"]} ${Ri["spacing-32"]};
    ${e=>{var r;return"dark"===(null===(r=e.theme)||void 0===r?void 0:r.colourMode)?F`
                  border: ${_i["width-010"]} ${_i.solid}
                      ${Mi.border};
              `:F`
                  box-shadow: ${Pi["md-subtle"]};
              `}}
`,ua=$.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${Ri["spacing-24"]};
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
                background-color: ${Mi["bg-hover-neutral"]};
            `}
    }
`,ga=o.forwardRef(((r,t)=>{var{children:n,focusHighlight:o=!0,focusOutline:i="none",type:a="button"}=r,s=ne(r,["children","focusHighlight","focusOutline","type"]);return e(ua,Object.assign({ref:t,$outline:i,$highlight:o,type:a},s,{children:n}))})),ha=$.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${Mi.bg};
    box-shadow: ${Pi["lg-strong"]};
    border-radius: ${Hi.lg};
    overflow: hidden;

    ${Ni.MaxWidth.md} {
        width: 90%;
        max-height: 70%;
    }
`,ma=$(ga)`
    position: absolute;
    top: var(--close-button-top-inset, ${Ri["spacing-16"]});
    right: var(--close-button-right-inset, ${Ri["spacing-16"]});
    padding: 0;
    color: ${Mi.icon};

    svg {
        height: 2rem;
        width: 2rem;
    }

    ${Ni.MaxWidth.sm} {
        right: var(--close-button-right-inset, ${Ri["spacing-20"]});
    }
`,fa=e=>{const{textSize:r}=e||{};return F`
        // Text styling
        ${r&&ji[`${r}-regular`]}

        strong {
            font-weight: ${ji.Spec["weight-semibold"]};
            ${r&&ji[`${r}-semibold`]};
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-weight: ${ji.Spec["weight-semibold"]};
            ${r&&ji[`${r}-semibold`]}
            color: ${Mi.hyperlink};
            text-decoration: underline;

            svg {
                color: ${Mi["icon-primary"]};
                height: 1lh;
                width: 1em;
                margin-left: 0.4rem;
                vertical-align: middle;
            }

            &:hover,
            &:active,
            &:visited,
            &:focus {
                color: ${Mi["hyperlink-hover"]};

                svg {
                    color: ${Mi["icon-hover"]};
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
    `};$.div`
    max-width: 30rem;
    padding: 0 1rem;
    pointer-events: auto;
    outline: none;
`,$((r=>{var{children:t}=r,n=ne(r,["children"]);const o=n["data-testid"]||"card";return e(ca,Object.assign({},n,{"data-testid":o,children:"string"==typeof t?e(da.BodyBL,{children:t}):t}))}))`
    color: ${Mi.text};
    ${fa({textSize:"body-md"})}

    ${Ni.MaxWidth.sm} {
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
        background: ${Mi["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: ${Hi.full};
        background-clip: padding-box;
    }
`,$((t=>{var{id:n="modal-box",children:o,onClose:i,showCloseButton:a=!0}=t,s=ne(t,["id","children","onClose","showCloseButton"]);return r(ha,Object.assign({"data-testid":n},s,{onClick:e=>{e.stopPropagation()},children:[a&&e(ma,{onClick:i,"data-testid":"close-button",focusHighlight:!1,focusOutline:"browser",children:e(B,{})}),o]}))}))`
    padding: 3.5rem 1.25rem 2.5rem;
`,$.div`
    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    color: ${Mi.text};
    ${fa({textSize:"body-md"})}
`;const ba=$.div`
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
`,pa=$.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${e=>e.$stacked?Mi["overlay-subtle"]:Mi["overlay-strong"]};
    backdrop-filter: ${e=>(e=>{let r="";return e&&(r+="blur(10px)"),r.length>0?r:"none"})(e.$backgroundBlur)};
    transition: opacity 200ms ease;

    ${e=>{let r="";return e.$show?r+=F`
                visibility: visible;
                opacity: 1;
                pointer-events: auto;
                height: 100%;
                width: 100vw;
            `:r+=F`
                visibility: hidden;
                opacity: 0;
                transition-delay: ${e.$disableTransition?"0ms":"400ms"};
                pointer-events: none;
                height: 0;
                width: 0;
            `,e.$disableTransition&&(r+=F`
                transition: none;
            `),r}};
`;var ya;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(ya||(ya={}));const va=({show:r=!1,rootId:t,onOverlayClick:n,children:i,backgroundOpacity:l,backgroundBlur:d=!0,disableTransition:c=!1,enableOverlayClick:u=!1,zIndex:h,id:m})=>{const[f,b]=s(null),[p,y]=s(),[v]=s((()=>ke.generate())),x=T(),w=a(),$=a(null),F=i&&o.cloneElement(i,{ref:$}),C=m?`lifesg-ds-overlay-root-${m}`:"lifesg-ds-overlay-root",E=null!=h?h:p?99999:99998;(e=>{const r=k();g((()=>{if(!r)return;const t={zIndex:e};r.events.emit(ya.Change,t)}),[r,e]),g((()=>{if(!r)return;const t=()=>{const t={zIndex:e};r.events.emit(ya.Change,t)};return null==r||r.events.on(ya.Ready,t),()=>null==r?void 0:r.events.off(ya.Ready,t)}),[r,e])})(E),g((()=>(A(),b(B()),()=>{L(),M().length<1&&(D()&&(_("remove"),H()),I("remove"))})),[]),g((()=>{if(r){const e=O();S(e),j(),D()&&1===M().length&&(R(),_("add"));const r=setTimeout((()=>{I("add")}),200);return()=>clearTimeout(r)}{L(),D()&&M().length<1&&(_("remove"),H());const e=setTimeout((()=>{M().length<1&&I("remove")}),200);return()=>clearTimeout(e)}}),[r]);const S=e=>{w.current=e,y(e)},D=()=>/(iPad|iPhone|iPod)/g.test(navigator.userAgent),B=()=>document&&t?document.getElementById(t):document?document.body:null,O=()=>M().length>0,A=()=>{if(!document.getElementById(wa)){const e=document.createElement("style");e.id=wa;const r=document.documentElement.clientWidth,t=window.innerWidth-r;e.innerHTML=`\n\t\t\t\t.${$a} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${t}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${$a}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\n\t\t\t\t.${Fa} {\n\t\t\t\t\tposition: fixed;\n\t\t\t\t\ttop: var(${Ca}, 0);\n\t\t\t\t\tbottom: 0;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},I=e=>{const r=document.body.classList.contains($a);"add"!==e||r?"remove"===e&&r&&document.body.classList.remove($a):document.body.classList.add($a)},M=()=>{const e=document.body.dataset.lifesgDsOverlayOrder;return e?e.split(","):[]},j=()=>{const e=M();document.body.dataset.lifesgDsOverlayOrder=[...e,v].join(",")},L=()=>{const e=M();document.body.dataset.lifesgDsOverlayOrder=e.filter((e=>e!==v)).join(",")},_=e=>{if(!D())return;const r=document.body.classList.contains(Fa);"add"!==e||r?"remove"===e&&r&&document.body.classList.remove(Fa):document.body.classList.add(Fa)},R=()=>{const e=document.body.style,r=e.top?e.top:window.scrollY+"px";document.body.style.setProperty(Ca,r)},H=()=>{if(!D())return;const e=document.body.style.getPropertyValue(Ca);requestAnimationFrame((()=>{window.scrollTo({top:parseFloat(e)})}))},P=e=>{var r;const t=null===(r=$.current)||void 0===r?void 0:r.firstChild;t&&t.contains(e.target)||n&&u&&(e.preventDefault(),n())};return f?q.createPortal(e(ba,{id:C,"data-testid":C,$show:r,$zIndex:E,children:i&&e(z,{id:x,children:e(pa,{"data-testid":"overlay-wrapper",$show:r,$stacked:p,$backgroundBlur:d,$disableTransition:c,onClick:P,children:F})})}),f):null},xa=r=>e(O,{children:e(va,Object.assign({},r))}),wa="lifesg-ds-overlay-stylesheet",$a="lifesg-ds-overlay-open",Fa="lifesg-ds-overlay-scroll-lock",Ca="--lifesg-ds-overlay-scroll-y",Ea=f({onClose:()=>{}}),Sa=$.div`
    position: relative;
    width: 100%;
    height: 100%;

    overflow: auto;

    ${Ni.MaxWidth.sm} {
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
            transition: all ${Li["duration-250"]} ${Li["ease-entrance"]};
            transition-delay: ${Li["duration-150"]};
        }

        &[data-status="close"] {
            opacity: 0;
            ${e.$animationFrom}: -3%;
            transition: all ${Li["duration-250"]} ${Li["ease-exit"]};
        }
    `}
`,Da=$.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100%;
    pointer-events: none;
`,Ba=$.div`
    pointer-events: auto;
    width: 100%;
    outline: none;
`,ka=$.div`
    width: 40rem;
    margin: ${Ri["spacing-64"]} auto;
    background: ${Mi.bg};
    box-shadow: ${Pi["xs-strong"]};
    border-radius: ${Hi.lg};

    display: flex;
    flex-direction: column-reverse;

    max-width: calc(100% - ${Wi["xxl-margin"]}px * 2);

    ${Ni.MaxWidth.xl} {
        max-width: calc(100% - ${Wi["xl-margin"]}px * 2);
    }

    ${Ni.MaxWidth.lg} {
        max-width: calc(100% - ${Wi["lg-margin"]}px * 2);
    }

    ${Ni.MaxWidth.md} {
        max-width: calc(100% - ${Wi["md-margin"]}px * 2);
    }

    ${Ni.MaxWidth.sm} {
        max-width: calc(100% - ${Wi["sm-margin"]}px * 2);
    }

    ${Ni.MaxWidth.xs} {
        max-width: calc(100% - ${Wi["xs-margin"]}px * 2);
    }

    ${Ni.MaxWidth.xxs} {
        max-width: calc(100% - ${Wi["xxs-margin"]}px * 2);
    }
`,Oa=$.div`
    margin-right: ${Ri["spacing-16"]};
    margin-left: auto;
    margin-top: ${Ri["spacing-16"]};
    margin-bottom: ${Ri["spacing-16"]};
`,Ta=$(ga)`
    padding: 0;
    color: ${Mi.icon};

    svg {
        height: 2rem;
        width: 2rem;
    }
`,za=$.div`
    margin-right: ${Ri["spacing-64"]};
    margin-left: ${Ri["spacing-64"]};

    ${Ni.MaxWidth.sm} {
        margin-right: ${Ri["spacing-20"]};
        margin-left: ${Ri["spacing-20"]};
    }
`,Aa=$.div`
    margin-right: ${Ri["spacing-64"]};
    margin-left: ${Ri["spacing-64"]};

    ${Ni.MaxWidth.sm} {
        margin-right: ${Ri["spacing-20"]};
        margin-left: ${Ri["spacing-20"]};
    }

    display: flex;
    flex-direction: row-reverse; /* primary button on right */
    column-gap: ${Ri["spacing-32"]};
    row-gap: ${Ri["spacing-16"]};

    & > button {
        flex: 1;
    }

    ${Ni.MaxWidth.md} {
        flex-direction: column;
    }
`,Ia=$.div`
    :where(& > ${za}:last-child) {
        margin-bottom: ${Ri["spacing-64"]};
    }

    :where(& > ${Aa}:not(:first-child)) {
        margin-top: ${Ri["spacing-32"]};
    }

    :where(& > ${Aa}:last-child) {
        margin-bottom: ${Ri["spacing-64"]};
    }

    ${e=>e.$hasCloseButton?F`
                  :where(& > ${za}:first-child),
                  :where(& > ${Aa}:first-child) {
                      margin-top: 0;
                  }
              `:F`
                  :where(& > ${za}:first-child),
                  :where(& > ${Aa}:first-child) {
                      margin-top: ${Ri["spacing-64"]};
                  }
              `}
`,Ma=r=>{var{"data-testid":t="modal-close-button"}=r,n=ne(r,["data-testid"]);const{onClose:o}=b(Ea);return e(Oa,Object.assign({"data-testid":t},n,{children:e(Ta,{onClick:o,"data-testid":"close-button",focusHighlight:!1,focusOutline:"browser","aria-label":"Close button",children:e(B,{"aria-hidden":!0})})}))};Ma.displayName="ModalV2.CloseButton";const ja=r=>{var{"data-testid":t="modal-content",children:n}=r,o=ne(r,["data-testid","children"]);return e(za,Object.assign({"data-testid":t},o,{children:n}))};ja.displayName="ModalV2.Content";const La=e=>{var{"data-testid":t="modal-footer",primaryButton:n,secondaryButton:o}=e,i=ne(e,["data-testid","primaryButton","secondaryButton"]);return r(Aa,Object.assign({"data-testid":t},i,{children:[n,o]}))};La.displayName="ModalV2.Footer";const _a=e=>{var{id:t,"data-testid":n="modal-card",children:i}=e,a=ne(e,["id","data-testid","children"]);const s=e=>o.Children.toArray(i).find((r=>((e,r)=>C(e.type)?e.type.target===r:e.type===r)(r,e))),l=s(Ma),d=s(ja),c=s(La),u=!!l;return r(ka,Object.assign({id:t,"data-testid":n},a,{onClick:e=>{e.stopPropagation()},children:[r(Ia,{$hasCloseButton:u,children:[d,c]}),u&&l]}))};_a.displayName="ModalV2.Card",Object.assign((r=>{var{id:t,show:n,onClose:o,animationFrom:i="bottom",children:a,enableOverlayClick:l=!0,rootComponentId:d,zIndex:c,onOverlayClick:u,dismissKeyboardOnShow:h=!0,"data-testid":f="modal","aria-label":b,"aria-labelledby":p,"aria-describedby":y,disableInitialFocus:v=!1}=r,x=ne(r,["id","show","onClose","animationFrom","children","enableOverlayClick","rootComponentId","zIndex","onOverlayClick","dismissKeyboardOnShow","data-testid","aria-label","aria-labelledby","aria-describedby","disableInitialFocus"]);const{verticalHeight:w,offsetTop:$}=(()=>{const[e,r]=s(),[t,n]=s(),o=m((()=>{const e=.01*window.innerHeight;r(e)}),[]),i=m((()=>{if(window.visualViewport){const e=.01*window.visualViewport.height;r(e),n(window.visualViewport.offsetTop)}}),[]);return g((()=>window.visualViewport?(i(),window.visualViewport.addEventListener("resize",i),()=>{var e;null===(e=window.visualViewport)||void 0===e||e.removeEventListener("resize",i)}):(o(),window.addEventListener("resize",o),()=>{window.removeEventListener("resize",o)})),[]),{verticalHeight:e,offsetTop:t}})(),{refs:F,context:C}=A({open:n,onOpenChange:e=>{e||null==o||o()}}),{isMounted:E,status:S}=I(C,{duration:300}),D=M(C,{outsidePress:!1,enabled:!!o}),{getFloatingProps:B}=j([D]);return g((()=>{var e,r;n&&h&&(null===(r=null===(e=document.activeElement)||void 0===e?void 0:e.blur)||void 0===r||r.call(e))}),[h,n]),e(xa,{"data-testid":`${f}-overlay`,show:E,enableOverlayClick:l,onOverlayClick:u,id:t,rootId:d,zIndex:c,children:e(Sa,Object.assign({$show:E,$animationFrom:i,"data-testid":f,$verticalHeight:w,$offsetTop:$,"data-status":S},x,{children:e(Ea.Provider,{value:{onClose:o},children:E&&e(L,{context:C,initialFocus:v?-1:F.floating,children:e(Da,{children:e(Ba,Object.assign({ref:F.setFloating},B(),{role:"dialog","aria-label":b,"aria-labelledby":p,"aria-describedby":y,children:a}))})})})}))})}),{Card:_a,CloseButton:Ma,Content:ja,Footer:La}),$.div`
    display: inline;
    width: fit-content;
    cursor: pointer;
    position: relative;
`;const Ra=e=>{switch(e){case"underline":return"text-decoration: underline 1px;";case"underline-dashed":return"text-decoration: underline dashed 1px;"}};$.span`
    color: ${Mi["text-primary"]};
    font-weight: 600;
    text-underline-position: under;

    ${({$defaultStyle:e})=>Ra(e)}

    &:hover,
    &:focus-visible {
        color: ${Mi["text-hover"]};
        ${({$hoverStyle:e})=>Ra(e)}
    }

    svg {
        height: 1lh; // align vertically
        width: 1em; // scale icon with font size
        vertical-align: top;
    }
`,$.span`
    ${e=>!e.$standalone&&"margin-left: 0.25rem;"}
`,$.div`
    padding-left: ${Ri["spacing-4"]};
    display: inline;
`,$.div`
    margin-bottom: ${Ri["spacing-8"]};
`,$.label`
    color: ${Mi["text-subtle"]};
    display: inline-block;

    ${ji["form-label"]}
    ${fa()}
    font-weight: ${ji.Spec["weight-semibold"]};
`;const Ha=$(Z)`
    height: 1lh;
    width: 1em;
    flex-shrink: 0;
    color: ${Mi["icon-error-strong"]};
`,Pa=$.div`
    ${ji["body-sm-semibold"]}
    display: flex;
    gap: ${Ri["spacing-4"]};
    margin-top: ${Ri["spacing-8"]};
`,Wa=$.p`
    color: ${Mi["text-error"]};
    margin-bottom: 0;
    outline: none;
`;$.span`
    ${ji["form-description"]}
    color: ${Mi["text-subtler"]};
    display: block;
`;const Na=t=>r(Pa,{children:[e(Ha,{"aria-hidden":!0}),e(Wa,Object.assign({},t))]}),Va=$.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,Ya=E`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Ua=$.div`
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
    animation: ${Ya} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,qa=$(Ua)`
    animation-delay: -0.45s;
`,Ga=$(Ua)`
    animation-delay: -0.3s;
`,Za=$(Ua)`
    animation-delay: -0.15s;
`,Ka=({color:t,className:n,size:o})=>r(Va,{className:n,$size:o,$color:t,"data-testid":"component-loading-spinner",children:[e(Ua,{id:"inner1"}),e(qa,{id:"inner2"}),e(Ga,{id:"inner3"}),e(Za,{id:"inner4"})]}),Xa=$.button`
    padding: ${Ri["spacing-8"]} ${Ri["spacing-16"]};
    min-width: 4rem;
    border: ${_i["width-010"]} ${_i.solid} transparent;
    transition: all ${Li["duration-250"]} ${Li["ease-default"]};
    border-radius: ${ni};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return F`
                    background-color: ${Mi.bg};
                    border-color: ${e.$buttonIsDanger?Mi["border-error-strong"]:si};

                    color: ${e.$buttonIsDanger?Mi["text-error"]:li};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${Mi["bg-hover-neutral"]};
                        }
                    }
                `;case"light":return F`
                    background-color: ${Mi.bg};
                    border-color: ${Mi.border};

                    color: ${e.$buttonIsDanger?Mi["text-error"]:di};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${Mi["bg-hover-neutral"]};
                        }
                    }
                `;case"link":return F`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?Mi["text-error"]:ci};
                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${Mi["bg-hover-neutral"]};
                        }
                    }
                `;case"disabled":return F`
                    background-color: ${Mi["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Mi["text-disabled"]};
                `;default:return F`
                    background-color: ${e.$buttonIsDanger?Mi["bg-error-strong"]:oi};

                    ${Ni.MaxWidth.sm} {
                        width: 100%;
                    }

                    color: ${ai};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${e.$buttonIsDanger?Mi["bg-error-strong-hover"]:ii};
                        }
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return F`
                    height: 2.5rem;
                    ${ji["body-md-semibold"]}

                    ${Ni.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return F`
                    height: 4rem;
                    ${ji["heading-md-semibold"]}

                    ${Ni.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return F`
                    height: 3rem;
                    ${ji["heading-xs-semibold"]}

                    ${Ni.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,Qa=$(Ka)`
    margin-right: ${e=>e.$hasChildren?"0.5rem":"0"};
`,Ja=e=>o.Children.toArray(e).some((e=>"string"==typeof e?""!==e.trim():null!=e)),es=(t,n)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:s="default",danger:l=!1,focusableWhenDisabled:d=!1,onClick:c}=t,u=ne(t,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),g={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return r(Xa,Object.assign({ref:n,"data-testid":u["data-testid"]||"button",disabled:i&&!d,"aria-disabled":i,"aria-busy":a,onClick:i?void 0:c},g,u,{children:[a&&e(Qa,{$hasChildren:Ja(o)}),e("span",{children:o})]}))};es.displayName="Button.Default";const rs=(t,n)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:s="default",danger:l=!1,focusableWhenDisabled:d=!1,onClick:c}=t,u=ne(t,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),g={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return r(Xa,Object.assign({ref:n,"data-testid":u["data-testid"]||"button",disabled:i&&!d,"aria-disabled":i,"aria-busy":a,onClick:i?void 0:c},g,u,{children:[a&&e(Qa,{$hasChildren:Ja(o)}),e("span",{children:o})]}))};rs.displayName="Button.Small";const ts=(t,n)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:s="default",danger:l=!1,focusableWhenDisabled:d=!1,onClick:c}=t,u=ne(t,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),g={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"large",$buttonIsDanger:l};return r(Xa,Object.assign({ref:n,"data-testid":u["data-testid"]||"button",disabled:i&&!d,"aria-disabled":i,"aria-busy":a,onClick:i?void 0:c},g,u,{children:[a&&e(Qa,{$hasChildren:Ja(o)}),e("span",{children:o})]}))};ts.displayName="Button.Large";const ns={Default:o.forwardRef(es),Small:o.forwardRef(rs),Large:o.forwardRef(ts)},os=$.span`
    clip-path: inset(50%);
    height: 1px;
    width: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
`,is=(...e)=>e.filter((e=>!!e)).join(" "),as=$.div`
    font-weight: ${e=>e.$bold?ji.Spec["weight-semibold"]:ji.Spec["weight-regular"]};

    ${e=>e.$disabled?F`
                color: ${Mi["text-disabled"]};
            `:e.$selected?F`
                color: ${Mi["text-selected"]};
            `:F`
                color: ${Mi.text};
            `}
    width: 100%;

    ${e=>"end"===e.$truncateType&&ta(e.$maxLines||2)}
    overflow-wrap: break-word;
`,ss=$.div`
    color: ${Mi["text-subtlest"]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&ta(e.$maxLines||2)}
    overflow-wrap: break-word;

    ${e=>"next-line"===e.$labelDisplayType?F`
                    ${ji["body-md-semibold"]}
                `:F`
                    ${ji["body-baseline-regular"]}
                `}
`,ls=$.span`
    font-weight: ${ji.Spec["weight-semibold"]};
`,ds=$.div`
    text-align: left;
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;

    ${e=>"small"===e.$variant?ji["body-md-regular"]:ji["body-baseline-regular"]}

    ${e=>{switch(e.$labelDisplayType){case"next-line":return F`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return F`
                    ${as} {
                        display: inline;
                    }

                    ${ss} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,cs=$.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    word-break: break-all;
    overflow: hidden;
`,us=$.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,gs=({bold:n,displayType:o="inline",label:i,searchTerm:a,maxLines:s=2,selected:l,disabled:d,sublabel:c,truncationType:u="middle",variant:g="default"})=>{const h=b(S),f="small"===g?ji.Spec["body-size-md"]({theme:h}):ji.Spec["body-size-baseline"]({theme:h}),y=ji.Spec["font-family"]({theme:h}),{ref:v,width:x}=Er(),w=m((e=>{if("inline"!==o||!x)return!1;return Oe.getTextWidth(e,`${f} '${y}'`)>x*s-50}),[x,o,f,y,s]),$=p((()=>w(i)),[w,i]),F=p((()=>c&&w(c)),[w,c]),C=n=>{if(!a)return n;const o=a.toLowerCase().trim(),s=n.toLowerCase().indexOf(o),l=s+a.length;return-1===s?n:r(t,{children:[i.slice(0,s),e(ls,{$variant:g,children:i.slice(s,l)}),i.slice(l)]})},E=n=>r(t,{children:[e(cs,{$maxLines:s,"aria-hidden":!0,children:C(n)}),e(us,{$maxLines:s,"aria-hidden":!0,children:C(n)})]});return r(ds,{ref:v,$labelDisplayType:$||F?"next-line":o,$variant:g,children:[e(as,{"aria-label":i,$bold:n,$maxLines:s,$selected:l,$disabled:d,$truncateType:u,children:"middle"===u&&$?E(i):C(i)}),c&&e(ss,{"aria-label":c,$maxLines:s,$truncateType:u,$labelDisplayType:o,children:"middle"===u&&F?E(c):c})]})};var hs=hn;var ms=function(e){var r=this.__data__,t=r.delete(e);return this.size=r.size,t};var fs=function(e){return this.__data__.get(e)};var bs=function(e){return this.__data__.has(e)},ps=hn,ys=mn,vs=In;var xs=function(e,r){var t=this.__data__;if(t instanceof ps){var n=t.__data__;if(!ys||n.length<199)return n.push([e,r]),this.size=++t.size,this;t=this.__data__=new vs(n)}return t.set(e,r),this.size=t.size,this},ws=hn,$s=function(){this.__data__=new hs,this.size=0},Fs=ms,Cs=fs,Es=bs,Ss=xs;function Ds(e){var r=this.__data__=new ws(e);this.size=r.size}Ds.prototype.clear=$s,Ds.prototype.delete=Fs,Ds.prototype.get=Cs,Ds.prototype.has=Es,Ds.prototype.set=Ss;var Bs=Ds;var ks=In,Os=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},Ts=function(e){return this.__data__.has(e)};function zs(e){var r=-1,t=null==e?0:e.length;for(this.__data__=new ks;++r<t;)this.add(e[r])}zs.prototype.add=zs.prototype.push=Os,zs.prototype.has=Ts;var As=function(e,r){return e.has(r)},Is=zs,Ms=function(e,r){for(var t=-1,n=null==e?0:e.length;++t<n;)if(r(e[t],t,e))return!0;return!1},js=As;var Ls=function(e,r,t,n,o,i){var a=1&t,s=e.length,l=r.length;if(s!=l&&!(a&&l>s))return!1;var d=i.get(e),c=i.get(r);if(d&&c)return d==r&&c==e;var u=-1,g=!0,h=2&t?new Is:void 0;for(i.set(e,r),i.set(r,e);++u<s;){var m=e[u],f=r[u];if(n)var b=a?n(f,m,u,r,e,i):n(m,f,u,e,r,i);if(void 0!==b){if(b)continue;g=!1;break}if(h){if(!Ms(r,(function(e,r){if(!js(h,r)&&(m===e||o(m,e,t,n,i)))return h.push(r)}))){g=!1;break}}else if(m!==f&&!o(m,f,t,n,i)){g=!1;break}}return i.delete(e),i.delete(r),g};var _s=function(e){var r=-1,t=Array(e.size);return e.forEach((function(e,n){t[++r]=[n,e]})),t};var Rs=jr.Uint8Array,Hs=Gt,Ps=Ls,Ws=_s,Ns=function(e){var r=-1,t=Array(e.size);return e.forEach((function(e){t[++r]=e})),t},Vs=Lr?Lr.prototype:void 0,Ys=Vs?Vs.valueOf:void 0;var Us=function(e,r,t,n,o,i,a){switch(t){case"[object DataView]":if(e.byteLength!=r.byteLength||e.byteOffset!=r.byteOffset)return!1;e=e.buffer,r=r.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=r.byteLength||!i(new Rs(e),new Rs(r)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Hs(+e,+r);case"[object Error]":return e.name==r.name&&e.message==r.message;case"[object RegExp]":case"[object String]":return e==r+"";case"[object Map]":var s=Ws;case"[object Set]":var l=1&n;if(s||(s=Ns),e.size!=r.size&&!l)return!1;var d=a.get(e);if(d)return d==r;n|=2,a.set(e,r);var c=Ps(s(e),s(r),n,o,i,a);return a.delete(e),c;case"[object Symbol]":if(Ys)return Ys.call(e)==Ys.call(r)}return!1};var qs=function(e,r){for(var t=-1,n=r.length,o=e.length;++t<n;)e[o+t]=r[t];return e},Gs=qs,Zs=zr;var Ks=function(e,r,t){var n=r(e);return Zs(e)?n:Gs(n,t(e))};var Xs=function(e,r){for(var t=-1,n=null==e?0:e.length,o=0,i=[];++t<n;){var a=e[t];r(a,t,e)&&(i[o++]=a)}return i},Qs=function(){return[]},Js=Object.prototype.propertyIsEnumerable,el=Object.getOwnPropertySymbols,rl=el?function(e){return null==e?[]:(e=Object(e),Xs(el(e),(function(r){return Js.call(e,r)})))}:Qs;var tl=function(e,r){for(var t=-1,n=Array(e);++t<e;)n[t]=r(t);return n},nl=Gr,ol=Zr;var il=function(e){return ol(e)&&"[object Arguments]"==nl(e)},al=Zr,sl=Object.prototype,ll=sl.hasOwnProperty,dl=sl.propertyIsEnumerable,cl=il(function(){return arguments}())?il:function(e){return al(e)&&ll.call(e,"callee")&&!dl.call(e,"callee")},ul={exports:{}};var gl=function(){return!1};!function(e,r){var t=jr,n=gl,o=r&&!r.nodeType&&r,i=o&&e&&!e.nodeType&&e,a=i&&i.exports===o?t.Buffer:void 0,s=(a?a.isBuffer:void 0)||n;e.exports=s}(ul,ul.exports);var hl=ul.exports,ml=/^(?:0|[1-9]\d*)$/;var fl=function(e,r){var t=typeof e;return!!(r=null==r?9007199254740991:r)&&("number"==t||"symbol"!=t&&ml.test(e))&&e>-1&&e%1==0&&e<r};var bl=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},pl=Gr,yl=bl,vl=Zr,xl={};xl["[object Float32Array]"]=xl["[object Float64Array]"]=xl["[object Int8Array]"]=xl["[object Int16Array]"]=xl["[object Int32Array]"]=xl["[object Uint8Array]"]=xl["[object Uint8ClampedArray]"]=xl["[object Uint16Array]"]=xl["[object Uint32Array]"]=!0,xl["[object Arguments]"]=xl["[object Array]"]=xl["[object ArrayBuffer]"]=xl["[object Boolean]"]=xl["[object DataView]"]=xl["[object Date]"]=xl["[object Error]"]=xl["[object Function]"]=xl["[object Map]"]=xl["[object Number]"]=xl["[object Object]"]=xl["[object RegExp]"]=xl["[object Set]"]=xl["[object String]"]=xl["[object WeakMap]"]=!1;var wl=function(e){return vl(e)&&yl(e.length)&&!!xl[pl(e)]};var $l=function(e){return function(r){return e(r)}},Fl={exports:{}};!function(e,r){var t=Ar,n=r&&!r.nodeType&&r,o=n&&e&&!e.nodeType&&e,i=o&&o.exports===n&&t.process,a=function(){try{var e=o&&o.require&&o.require("util").types;return e||i&&i.binding&&i.binding("util")}catch(e){}}();e.exports=a}(Fl,Fl.exports);var Cl=Fl.exports,El=wl,Sl=$l,Dl=Cl&&Cl.isTypedArray,Bl=Dl?Sl(Dl):El,kl=tl,Ol=cl,Tl=zr,zl=hl,Al=fl,Il=Bl,Ml=Object.prototype.hasOwnProperty;var jl=function(e,r){var t=Tl(e),n=!t&&Ol(e),o=!t&&!n&&zl(e),i=!t&&!n&&!o&&Il(e),a=t||n||o||i,s=a?kl(e.length,String):[],l=s.length;for(var d in e)!r&&!Ml.call(e,d)||a&&("length"==d||o&&("offset"==d||"parent"==d)||i&&("buffer"==d||"byteLength"==d||"byteOffset"==d)||Al(d,l))||s.push(d);return s},Ll=Object.prototype;var _l=function(e){var r=e&&e.constructor;return e===("function"==typeof r&&r.prototype||Ll)};var Rl=function(e,r){return function(t){return e(r(t))}}(Object.keys,Object),Hl=_l,Pl=Rl,Wl=Object.prototype.hasOwnProperty;var Nl=function(e){if(!Hl(e))return Pl(e);var r=[];for(var t in Object(e))Wl.call(e,t)&&"constructor"!=t&&r.push(t);return r},Vl=lt,Yl=bl;var Ul=function(e){return null!=e&&Yl(e.length)&&!Vl(e)},ql=jl,Gl=Nl,Zl=Ul;var Kl=function(e){return Zl(e)?ql(e):Gl(e)},Xl=Ks,Ql=rl,Jl=Kl;var ed=function(e){return Xl(e,Jl,Ql)},rd=Object.prototype.hasOwnProperty;var td=function(e,r,t,n,o,i){var a=1&t,s=ed(e),l=s.length;if(l!=ed(r).length&&!a)return!1;for(var d=l;d--;){var c=s[d];if(!(a?c in r:rd.call(r,c)))return!1}var u=i.get(e),g=i.get(r);if(u&&g)return u==r&&g==e;var h=!0;i.set(e,r),i.set(r,e);for(var m=a;++d<l;){var f=e[c=s[d]],b=r[c];if(n)var p=a?n(b,f,c,r,e,i):n(f,b,c,e,r,i);if(!(void 0===p?f===b||o(f,b,t,n,i):p)){h=!1;break}m||(m="constructor"==c)}if(h&&!m){var y=e.constructor,v=r.constructor;y==v||!("constructor"in e)||!("constructor"in r)||"function"==typeof y&&y instanceof y&&"function"==typeof v&&v instanceof v||(h=!1)}return i.delete(e),i.delete(r),h},nd=Dt(jr,"DataView"),od=mn,id=Dt(jr,"Promise"),ad=Dt(jr,"Set"),sd=Dt(jr,"WeakMap"),ld=Gr,dd=ht,cd="[object Map]",ud="[object Promise]",gd="[object Set]",hd="[object WeakMap]",md="[object DataView]",fd=dd(nd),bd=dd(od),pd=dd(id),yd=dd(ad),vd=dd(sd),xd=ld;(nd&&xd(new nd(new ArrayBuffer(1)))!=md||od&&xd(new od)!=cd||id&&xd(id.resolve())!=ud||ad&&xd(new ad)!=gd||sd&&xd(new sd)!=hd)&&(xd=function(e){var r=ld(e),t="[object Object]"==r?e.constructor:void 0,n=t?dd(t):"";if(n)switch(n){case fd:return md;case bd:return cd;case pd:return ud;case yd:return gd;case vd:return hd}return r});var wd=Bs,$d=Ls,Fd=Us,Cd=td,Ed=xd,Sd=zr,Dd=hl,Bd=Bl,kd="[object Arguments]",Od="[object Array]",Td="[object Object]",zd=Object.prototype.hasOwnProperty;var Ad=function(e,r,t,n,o,i){var a=Sd(e),s=Sd(r),l=a?Od:Ed(e),d=s?Od:Ed(r),c=(l=l==kd?Td:l)==Td,u=(d=d==kd?Td:d)==Td,g=l==d;if(g&&Dd(e)){if(!Dd(r))return!1;a=!0,c=!1}if(g&&!c)return i||(i=new wd),a||Bd(e)?$d(e,r,t,n,o,i):Fd(e,r,l,t,n,o,i);if(!(1&t)){var h=c&&zd.call(e,"__wrapped__"),m=u&&zd.call(r,"__wrapped__");if(h||m){var f=h?e.value():e,b=m?r.value():r;return i||(i=new wd),o(f,b,t,n,i)}}return!!g&&(i||(i=new wd),Cd(e,r,t,n,o,i))},Id=Zr;var Md=function e(r,t,n,o,i){return r===t||(null==r||null==t||!Id(r)&&!Id(t)?r!=r&&t!=t:Ad(r,t,n,o,e,i))},jd=Bs,Ld=Md;var _d=function(e,r,t,n){var o=t.length,i=o,a=!n;if(null==e)return!i;for(e=Object(e);o--;){var s=t[o];if(a&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++o<i;){var l=(s=t[o])[0],d=e[l],c=s[1];if(a&&s[2]){if(void 0===d&&!(l in e))return!1}else{var u=new jd;if(n)var g=n(d,c,l,e,r,u);if(!(void 0===g?Ld(c,d,3,n,u):g))return!1}}return!0},Rd=ot;var Hd=function(e){return e==e&&!Rd(e)},Pd=Hd,Wd=Kl;var Nd=function(e){for(var r=Wd(e),t=r.length;t--;){var n=r[t],o=e[n];r[t]=[n,o,Pd(o)]}return r};var Vd=function(e,r){return function(t){return null!=t&&(t[e]===r&&(void 0!==r||e in Object(t)))}},Yd=_d,Ud=Nd,qd=Vd;var Gd=function(e,r){return null!=e&&r in Object(e)},Zd=Jn,Kd=cl,Xd=zr,Qd=fl,Jd=bl,ec=ro;var rc=function(e,r,t){for(var n=-1,o=(r=Zd(r,e)).length,i=!1;++n<o;){var a=ec(r[n]);if(!(i=null!=e&&t(e,a)))break;e=e[a]}return i||++n!=o?i:!!(o=null==e?0:e.length)&&Jd(o)&&Qd(a,o)&&(Xd(e)||Kd(e))},tc=Gd,nc=rc;var oc=Md,ic=ao,ac=function(e,r){return null!=e&&nc(e,r,tc)},sc=nt,lc=Hd,dc=Vd,cc=ro;var uc=function(e){return function(r){return null==r?void 0:r[e]}},gc=oo;var hc=uc,mc=function(e){return function(r){return gc(r,e)}},fc=nt,bc=ro;var pc=function(e){var r=Ud(e);return 1==r.length&&r[0][2]?qd(r[0][0],r[0][1]):function(t){return t===e||Yd(t,e,r)}},yc=function(e,r){return sc(e)&&lc(r)?dc(cc(e),r):function(t){var n=ic(t,e);return void 0===n&&n===r?ac(t,e):oc(r,n,3)}},vc=function(e){return e},xc=zr,wc=function(e){return fc(e)?hc(bc(e)):mc(e)};var $c=function(e){return"function"==typeof e?e:null==e?vc:"object"==typeof e?xc(e)?yc(e[0],e[1]):pc(e):wc(e)},Fc=$c,Cc=Ul,Ec=Kl;var Sc=function(e){return function(r,t,n){var o=Object(r);if(!Cc(r)){var i=Fc(t);r=Ec(r),t=function(e){return i(o[e],e,o)}}var a=e(r,t,n);return a>-1?o[i?r[a]:a]:void 0}};var Dc=/\s/;var Bc=function(e){for(var r=e.length;r--&&Dc.test(e.charAt(r)););return r},kc=/^\s+/;var Oc=function(e){return e?e.slice(0,Bc(e)+1).replace(kc,""):e},Tc=ot,zc=Qr,Ac=/^[-+]0x[0-9a-f]+$/i,Ic=/^0b[01]+$/i,Mc=/^0o[0-7]+$/i,jc=parseInt;var Lc=function(e){if("number"==typeof e)return e;if(zc(e))return NaN;if(Tc(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=Tc(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=Oc(e);var t=Ic.test(e);return t||Mc.test(e)?jc(e.slice(2),t?2:8):Ac.test(e)?NaN:+e},_c=1/0;var Rc=function(e){return e?(e=Lc(e))===_c||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var Hc=function(e,r,t,n){for(var o=e.length,i=t+(n?1:-1);n?i--:++i<o;)if(r(e[i],i,e))return i;return-1},Pc=$c,Wc=function(e){var r=Rc(e),t=r%1;return r==r?t?r-t:r:0},Nc=Math.max;var Vc=ae(Sc((function(e,r,t){var n=null==e?0:e.length;if(!n)return-1;var o=null==t?0:Wc(t);return o<0&&(o=Nc(n+o,0)),Hc(e,Pc(r),o)}))),Yc=Md;var Uc=ae((function(e,r){return Yc(e,r)}));function qc(e){return()=>e}function Gc(e){e()}function Zc(e,r){return t=>e(r(t))}function Kc(e,r){return()=>e(r)}function Xc(e,r){return t=>e(r,t)}function Qc(e){return void 0!==e}function Jc(){}function eu(e,r){return r(e),e}function ru(e,r){return r(e)}function tu(...e){return e}function nu(e,r){return e(1,r)}function ou(e,r){e(0,r)}function iu(e){e(2)}function au(e){return e(4)}function su(e,r){return nu(e,Xc(r,0))}function lu(e,r){const t=e(1,(e=>{t(),r(e)}));return t}function du(e){let r,t;return n=>o=>{r=o,t&&clearTimeout(t),t=setTimeout((()=>{n(r)}),e)}}function cu(e,r){return e===r}function uu(e=cu){let r;return t=>n=>{e(r,n)||(r=n,t(n))}}function gu(e){return r=>t=>{e(t)&&r(t)}}function hu(e){return r=>Zc(r,e)}function mu(e){return r=>()=>{r(e)}}function fu(e,...r){const t=function(...e){return r=>e.reduceRight(ru,r)}(...r);return(r,n)=>{switch(r){case 2:return void iu(e);case 1:return nu(e,t(n))}}}function bu(e,r){return t=>n=>{t(r=e(r,n))}}function pu(e){return r=>t=>{e>0?e--:r(t)}}function yu(e){let r,t=null;return n=>o=>{t=o,!r&&(r=setTimeout((()=>{r=void 0,n(t)}),e))}}function vu(...e){const r=new Array(e.length);let t=0,n=null;const o=Math.pow(2,e.length)-1;return e.forEach(((e,i)=>{const a=Math.pow(2,i);nu(e,(e=>{const s=t;t|=a,r[i]=e,s!==o&&t===o&&n&&(n(),n=null)}))})),e=>i=>{const a=()=>{e([i].concat(r))};t===o?a():n=a}}function xu(e){let r=e;const t=$u();return(e,n)=>{switch(e){case 0:r=n;break;case 1:n(r);break;case 4:return r}return t(e,n)}}function wu(e,r){return eu(xu(r),(r=>su(e,r)))}function $u(){const e=[];return(r,t)=>{switch(r){case 0:return void e.slice().forEach((e=>{e(t)}));case 2:return void e.splice(0,e.length);case 1:return e.push(t),()=>{const r=e.indexOf(t);r>-1&&e.splice(r,1)}}}}function Fu(e){return eu($u(),(r=>su(e,r)))}function Cu(e,r=[],{singleton:t}={singleton:!0}){return{constructor:e,dependencies:r,id:Eu(),singleton:t}}const Eu=()=>Symbol();function Su(...e){const r=$u(),t=new Array(e.length);let n=0;const o=Math.pow(2,e.length)-1;return e.forEach(((e,i)=>{const a=Math.pow(2,i);nu(e,(e=>{t[i]=e,n|=a,n===o&&ou(r,t)}))})),function(e,i){switch(e){case 2:return void iu(r);case 1:return n===o&&i(t),nu(r,i)}}}function Du(e,r=cu){return fu(e,uu(r))}function Bu(...e){return function(r,t){switch(r){case 2:return;case 1:return function(...e){return()=>{e.map(Gc)}}(...e.map((e=>nu(e,t))))}}}var ku=(e=>(e[e.DEBUG=0]="DEBUG",e[e.INFO=1]="INFO",e[e.WARN=2]="WARN",e[e.ERROR=3]="ERROR",e))(ku||{});const Ou={0:"debug",3:"error",1:"log",2:"warn"},Tu=Cu((()=>{const e=xu(3);return{log:xu(((r,t,n=1)=>{var o;n>=(null!=(o=(typeof globalThis>"u"?window:globalThis).VIRTUOSO_LOG_LEVEL)?o:au(e))&&console[Ou[n]]("%creact-virtuoso: %c%s %o","color: #0253b3; font-weight: bold","color: initial",r,t)})),logLevel:e}}),[],{singleton:!0});function zu(e,r,t){return Au(e,r,t).callbackRef}function Au(e,r,t){const n=o.useRef(null);let i=e=>{};if(typeof ResizeObserver<"u"){const a=o.useMemo((()=>new ResizeObserver((r=>{const n=()=>{const t=r[0].target;null!==t.offsetParent&&e(t)};t?n():requestAnimationFrame(n)}))),[e]);i=e=>{e&&r?(a.observe(e),n.current=e):(n.current&&a.unobserve(n.current),n.current=null)}}return{callbackRef:i,ref:n}}function Iu(e,r,t,n,i,a,s,l,d){const c=o.useCallback((t=>{const o=function(e,r,t,n){const o=e.length;if(0===o)return null;const i=[];for(let a=0;a<o;a++){const o=e.item(a);if(void 0===o.dataset.index)continue;const s=parseInt(o.dataset.index),l=parseFloat(o.dataset.knownSize),d=r(o,t);if(0===d&&n("Zero-sized element, this should not happen",{child:o},ku.ERROR),d===l)continue;const c=i[i.length-1];0===i.length||c.size!==d||c.endIndex!==s-1?i.push({endIndex:s,size:d,startIndex:s}):i[i.length-1].endIndex++}return i}(t.children,r,l?"offsetWidth":"offsetHeight",i);let d=t.parentElement;for(;!d.dataset.virtuosoScroller;)d=d.parentElement;const c="window"===d.lastElementChild.dataset.viewportType,u=s?l?s.scrollLeft:s.scrollTop:c?l?window.pageXOffset||document.documentElement.scrollLeft:window.pageYOffset||document.documentElement.scrollTop:l?d.scrollLeft:d.scrollTop,g=s?l?s.scrollWidth:s.scrollHeight:c?l?document.documentElement.scrollWidth:document.documentElement.scrollHeight:l?d.scrollWidth:d.scrollHeight,h=s?l?s.offsetWidth:s.offsetHeight:c?l?window.innerWidth:window.innerHeight:l?d.offsetWidth:d.offsetHeight;n({scrollHeight:g,scrollTop:Math.max(u,0),viewportHeight:h}),null==a||a(l?Mu("column-gap",getComputedStyle(t).columnGap,i):Mu("row-gap",getComputedStyle(t).rowGap,i)),null!==o&&e(o)}),[e,r,i,a,s,n]);return Au(c,t,d)}function Mu(e,r,t){return"normal"!==r&&!(null!=r&&r.endsWith("px"))&&t(`${e} was not resolved to pixel value correctly`,r,ku.WARN),"normal"===r?0:parseInt(null!=r?r:"0",10)}function ju(e,r,t){const n=o.useRef(null),i=o.useCallback((t=>{if(null==t||!t.offsetParent)return;const o=t.getBoundingClientRect(),i=o.width;let a,s;if(r){const e=r.getBoundingClientRect(),t=o.top-e.top;s=e.height-Math.max(0,t),a=t+r.scrollTop}else s=window.innerHeight-Math.max(0,o.top),a=o.top+window.pageYOffset;n.current={offsetTop:a,visibleHeight:s,visibleWidth:i},e(n.current)}),[e,r]),{callbackRef:a,ref:s}=Au(i,!0,t),l=o.useCallback((()=>{i(s.current)}),[i,s]);return o.useEffect((()=>{if(r){r.addEventListener("scroll",l);const e=new ResizeObserver((()=>{requestAnimationFrame(l)}));return e.observe(r),()=>{r.removeEventListener("scroll",l),e.unobserve(r)}}return window.addEventListener("scroll",l),window.addEventListener("resize",l),()=>{window.removeEventListener("scroll",l),window.removeEventListener("resize",l)}}),[l,r]),a}const Lu=Cu((()=>{const e=$u(),r=$u(),t=xu(0),n=$u(),o=xu(0),i=$u(),a=$u(),s=xu(0),l=xu(0),d=xu(0),c=xu(0),u=$u(),g=$u(),h=xu(!1),m=xu(!1),f=xu(!1);return su(fu(e,hu((({scrollTop:e})=>e))),r),su(fu(e,hu((({scrollHeight:e})=>e))),a),su(r,o),{deviation:t,fixedFooterHeight:d,fixedHeaderHeight:l,footerHeight:c,headerHeight:s,horizontalDirection:m,scrollBy:g,scrollContainerState:e,scrollHeight:a,scrollingInProgress:h,scrollTo:u,scrollTop:r,skipAnimationFrameInResizeObserver:f,smoothScrollTargetReached:n,statefulScrollTop:o,viewportHeight:i}}),[],{singleton:!0}),_u={lvl:0};function Ru(e,r){const t=e.length;if(0===t)return[];let{index:n,value:o}=r(e[0]);const i=[];for(let a=1;a<t;a++){const{index:t,value:s}=r(e[a]);i.push({end:t-1,start:n,value:o}),n=t,o=s}return i.push({end:1/0,start:n,value:o}),i}function Hu(e){return e===_u}function Pu(e,r){if(!Hu(e))return r===e.k?e.v:r<e.k?Pu(e.l,r):Pu(e.r,r)}function Wu(e,r,t="k"){if(Hu(e))return[-1/0,void 0];if(Number(e[t])===r)return[e.k,e.v];if(Number(e[t])<r){const n=Wu(e.r,r,t);return n[0]===-1/0?[e.k,e.v]:n}return Wu(e.l,r,t)}function Nu(e,r,t){return Hu(e)?eg(r,t,1):r===e.k?Ku(e,{k:r,v:t}):r<e.k?rg(Ku(e,{l:Nu(e.l,r,t)})):rg(Ku(e,{r:Nu(e.r,r,t)}))}function Vu(){return _u}function Yu(e,r,t){if(Hu(e))return[];return function(e){return Ru(e,(({k:e,v:r})=>({index:e,value:r})))}(Gu(e,Wu(e,r)[0],t))}function Uu(e,r){if(Hu(e))return _u;const{k:t,l:n,r:o}=e;if(r===t){if(Hu(n))return o;if(Hu(o))return n;{const[r,t]=Ju(n);return Zu(Ku(e,{k:r,l:Xu(n),v:t}))}}return Zu(Ku(e,r<t?{l:Uu(n,r)}:{r:Uu(o,r)}))}function qu(e){return Hu(e)?[]:[...qu(e.l),{k:e.k,v:e.v},...qu(e.r)]}function Gu(e,r,t){if(Hu(e))return[];const{k:n,l:o,r:i,v:a}=e;let s=[];return n>r&&(s=s.concat(Gu(o,r,t))),n>=r&&n<=t&&s.push({k:n,v:a}),n<=t&&(s=s.concat(Gu(i,r,t))),s}function Zu(e){const{l:r,lvl:t,r:n}=e;if(n.lvl>=t-1&&r.lvl>=t-1)return e;if(t>n.lvl+1){if(Qu(r))return tg(Ku(e,{lvl:t-1}));if(!Hu(r)&&!Hu(r.r))return Ku(r.r,{l:Ku(r,{r:r.r.l}),lvl:t,r:Ku(e,{l:r.r.r,lvl:t-1})});throw new Error("Unexpected empty nodes")}if(Qu(e))return ng(Ku(e,{lvl:t-1}));if(Hu(n)||Hu(n.l))throw new Error("Unexpected empty nodes");{const r=n.l,o=Qu(r)?n.lvl-1:n.lvl;return Ku(r,{l:Ku(e,{lvl:t-1,r:r.l}),lvl:r.lvl+1,r:ng(Ku(n,{l:r.r,lvl:o}))})}}function Ku(e,r){return eg(void 0!==r.k?r.k:e.k,void 0!==r.v?r.v:e.v,void 0!==r.lvl?r.lvl:e.lvl,void 0!==r.l?r.l:e.l,void 0!==r.r?r.r:e.r)}function Xu(e){return Hu(e.r)?e.l:Zu(Ku(e,{r:Xu(e.r)}))}function Qu(e){return Hu(e)||e.lvl>e.r.lvl}function Ju(e){return Hu(e.r)?[e.k,e.v]:Ju(e.r)}function eg(e,r,t,n=_u,o=_u){return{k:e,l:n,lvl:t,r:o,v:r}}function rg(e){return ng(tg(e))}function tg(e){const{l:r}=e;return Hu(r)||r.lvl!==e.lvl?e:Ku(r,{r:Ku(e,{l:r.r})})}function ng(e){const{lvl:r,r:t}=e;return Hu(t)||Hu(t.r)||t.lvl!==r||t.r.lvl!==r?e:Ku(t,{l:Ku(e,{r:t.l}),lvl:r+1})}function og(e,r){return!(!e||e.startIndex!==r.startIndex||e.endIndex!==r.endIndex)}function ig(e,r){return!(!e||e[0]!==r[0]||e[1]!==r[1])}const ag=Cu((()=>({recalcInProgress:xu(!1)})),[],{singleton:!0});function sg(e,r,t){return e[lg(e,r,t)]}function lg(e,r,t,n=0){let o=e.length-1;for(;n<=o;){const i=Math.floor((n+o)/2),a=t(e[i],r);if(0===a)return i;if(-1===a){if(o-n<2)return i-1;o=i-1}else{if(o===n)return i;n=i+1}}throw new Error(`Failed binary finding record in array - ${e.join(",")}, searched for ${r}`)}function dg(e,r){return Math.round(e.getBoundingClientRect()[r])}function cg(e){return!Hu(e.groupOffsetTree)}function ug({index:e},r){return r===e?0:r<e?-1:1}function gg({offset:e},r){return r===e?0:r<e?-1:1}function hg(e,r,t){if(0===r.length)return 0;const{index:n,offset:o,size:i}=sg(r,e,ug),a=e-n,s=i*a+(a-1)*t+o;return s>0?s+t:s}function mg(e,r){if(!cg(r))return e;let t=0;for(;r.groupIndices[t]<=e+t;)t++;return e+t}function fg(e,r,t){if(function(e){return typeof e.groupIndex<"u"}(e))return r.groupIndices[e.groupIndex]+1;{let n=mg("LAST"===e.index?t:e.index,r);return n=Math.max(0,n,Math.min(t,n)),n}}function bg(e,r,t,n=0){return n>0&&(r=Math.max(r,sg(e,n,ug).offset)),Ru(function(e,r,t,n){const o=lg(e,r,n),i=lg(e,t,n,o);return e.slice(o,i+1)}(e,r,t,gg),xg)}function pg(e,[r,t,n,o]){r.length>0&&n("received item sizes",r,ku.DEBUG);const i=e.sizeTree;let a=i,s=0;if(t.length>0&&Hu(i)&&2===r.length){const e=r[0].size,n=r[1].size;a=t.reduce(((r,t)=>Nu(Nu(r,t,e),t+1,n)),a)}else[a,s]=function(e,r){let t=Hu(e)?0:1/0;for(const n of r){const{endIndex:r,size:o,startIndex:i}=n;if(t=Math.min(t,i),Hu(e)){e=Nu(e,0,o);continue}const a=Yu(e,i-1,r+1);if(a.some(wg(n)))continue;let s=!1,l=!1;for(const{end:t,start:n,value:i}of a)s?(r>=n||o===i)&&(e=Uu(e,n)):(l=i!==o,s=!0),t>r&&r>=n&&i!==o&&(e=Nu(e,r+1,i));l&&(e=Nu(e,i,o))}return[e,t]}(a,r);if(a===i)return e;const{lastIndex:l,lastOffset:d,lastSize:c,offsetTree:u}=vg(e.offsetTree,s,a,o);return{groupIndices:t,groupOffsetTree:t.reduce(((e,r)=>Nu(e,r,hg(r,u,o))),Vu()),lastIndex:l,lastOffset:d,lastSize:c,offsetTree:u,sizeTree:a}}function yg(e,r){let t=0,n=0;for(;t<e;)t+=r[n+1]-r[n]-1,n++;return n-(t===e?0:1)}function vg(e,r,t,n){let o=e,i=0,a=0,s=0,l=0;if(0!==r){l=lg(o,r-1,ug),s=o[l].offset;const e=Wu(t,r-1);i=e[0],a=e[1],o.length&&o[l].size===Wu(t,r)[1]&&(l-=1),o=o.slice(0,l+1)}else o=[];for(const{start:e,value:l}of Yu(t,r,1/0)){const r=e-i,t=r*a+s+r*n;o.push({index:e,offset:t,size:l}),i=e,s=t,a=l}return{lastIndex:i,lastOffset:s,lastSize:a,offsetTree:o}}function xg(e){return{index:e.index,value:e}}function wg(e){const{endIndex:r,size:t,startIndex:n}=e;return e=>e.start===n&&(e.end===r||e.end===1/0)&&e.value===t}const $g={offsetHeight:"height",offsetWidth:"width"},Fg=Cu((([{log:e},{recalcInProgress:r}])=>{const t=$u(),n=$u(),o=wu(n,0),i=$u(),a=$u(),s=xu(0),l=xu([]),d=xu(void 0),c=xu(void 0),u=xu(((e,r)=>dg(e,$g[r]))),g=xu(void 0),h=xu(0),m={groupIndices:[],groupOffsetTree:Vu(),lastIndex:0,lastOffset:0,lastSize:0,offsetTree:[],sizeTree:Vu()},f=wu(fu(t,vu(l,e,h),bu(pg,m),uu()),m),b=wu(fu(l,uu(),bu(((e,r)=>({current:r,prev:e.current})),{current:[],prev:[]}),hu((({prev:e})=>e))),[]);su(fu(l,gu((e=>e.length>0)),vu(f,h),hu((([e,r,t])=>{const n=e.reduce(((e,n,o)=>Nu(e,n,hg(n,r.offsetTree,t)||o)),Vu());return{...r,groupIndices:e,groupOffsetTree:n}}))),f),su(fu(n,vu(f),gu((([e,{lastIndex:r}])=>e<r)),hu((([e,{lastIndex:r,lastSize:t}])=>[{endIndex:r,size:t,startIndex:e}]))),t),su(d,c);const p=wu(fu(d,hu((e=>void 0===e))),!0);su(fu(c,gu((e=>void 0!==e&&Hu(au(f).sizeTree))),hu((e=>[{endIndex:0,size:e,startIndex:0}]))),t);const y=Fu(fu(t,vu(f),bu((({sizes:e},[r,t])=>({changed:t!==e,sizes:t})),{changed:!1,sizes:m}),hu((e=>e.changed))));nu(fu(s,bu(((e,r)=>({diff:e.prev-r,prev:r})),{diff:0,prev:0}),hu((e=>e.diff))),(e=>{const{groupIndices:t}=au(f);if(e>0)ou(r,!0),ou(i,e+yg(e,t));else if(e<0){const r=au(b);r.length>0&&(e-=yg(-e,r)),ou(a,e)}})),nu(fu(s,vu(e)),(([e,r])=>{e<0&&r("`firstItemIndex` prop should not be set to less than zero. If you don't know the total count, just use a very high value",{firstItemIndex:s},ku.ERROR)}));const v=Fu(i);su(fu(i,vu(f),hu((([e,r])=>{const t=r.groupIndices.length>0,n=[],o=r.lastSize;if(t){const t=Pu(r.sizeTree,0);let i=0,a=0;for(;i<e;){const e=r.groupIndices[a],s=r.groupIndices.length===a+1?1/0:r.groupIndices[a+1]-e-1;n.push({endIndex:e,size:t,startIndex:e}),n.push({endIndex:e+1+s-1,size:o,startIndex:e+1}),a++,i+=s+1}const s=qu(r.sizeTree);return i!==e&&s.shift(),s.reduce(((r,{k:t,v:n})=>{let o=r.ranges;return 0!==r.prevSize&&(o=[...r.ranges,{endIndex:t+e-1,size:r.prevSize,startIndex:r.prevIndex}]),{prevIndex:t+e,prevSize:n,ranges:o}}),{prevIndex:e,prevSize:0,ranges:n}).ranges}return qu(r.sizeTree).reduce(((r,{k:t,v:n})=>({prevIndex:t+e,prevSize:n,ranges:[...r.ranges,{endIndex:t+e-1,size:r.prevSize,startIndex:r.prevIndex}]})),{prevIndex:0,prevSize:o,ranges:[]}).ranges}))),t);const x=Fu(fu(a,vu(f,h),hu((([e,{offsetTree:r},t])=>hg(-e,r,t)))));return su(fu(a,vu(f,h),hu((([e,r,t])=>{if(r.groupIndices.length>0){if(Hu(r.sizeTree))return r;let n=Vu();const o=au(b);let i=0,a=0,s=0;for(;i<-e;){s=o[a];const e=o[a+1]-s-1;a++,i+=e+1}if(n=qu(r.sizeTree).reduce(((r,{k:t,v:n})=>Nu(r,Math.max(0,t+e),n)),n),i!==-e){n=Nu(n,0,Pu(r.sizeTree,s));n=Nu(n,1,Wu(r.sizeTree,1-e)[1])}return{...r,sizeTree:n,...vg(r.offsetTree,0,n,t)}}{const n=qu(r.sizeTree).reduce(((r,{k:t,v:n})=>Nu(r,Math.max(0,t+e),n)),Vu());return{...r,sizeTree:n,...vg(r.offsetTree,0,n,t)}}}))),f),{beforeUnshiftWith:v,data:g,defaultItemSize:c,firstItemIndex:s,fixedItemSize:d,gap:h,groupIndices:l,itemSize:u,listRefresh:y,shiftWith:a,shiftWithOffset:x,sizeRanges:t,sizes:f,statefulTotalCount:o,totalCount:n,trackItemSizes:p,unshiftWith:i}}),tu(Tu,ag),{singleton:!0});function Cg(e){return e.reduce(((e,r)=>(e.groupIndices.push(e.totalCount),e.totalCount+=r+1,e)),{groupIndices:[],totalCount:0})}const Eg=Cu((([{groupIndices:e,sizes:r,totalCount:t},{headerHeight:n,scrollTop:o}])=>{const i=$u(),a=$u(),s=Fu(fu(i,hu(Cg)));return su(fu(s,hu((e=>e.totalCount))),t),su(fu(s,hu((e=>e.groupIndices))),e),su(fu(Su(o,r,n),gu((([e,r])=>cg(r))),hu((([e,r,t])=>Wu(r.groupOffsetTree,Math.max(e-t,0),"v")[0])),uu(),hu((e=>[e]))),a),{groupCounts:i,topItemsIndexes:a}}),tu(Fg,Lu)),Sg=Cu((([{log:e}])=>{const r=xu(!1),t=Fu(fu(r,gu((e=>e)),uu()));return nu(r,(r=>{r&&au(e)("props updated",{},ku.DEBUG)})),{didMount:t,propsReady:r}}),tu(Tu),{singleton:!0}),Dg=typeof document<"u"&&"scrollBehavior"in document.documentElement.style;function Bg(e){const r="number"==typeof e?{index:e}:e;return r.align||(r.align="start"),(!r.behavior||!Dg)&&(r.behavior="auto"),r.offset||(r.offset=0),r}const kg=Cu((([{gap:e,listRefresh:r,sizes:t,totalCount:n},{fixedFooterHeight:o,fixedHeaderHeight:i,footerHeight:a,headerHeight:s,scrollingInProgress:l,scrollTo:d,smoothScrollTargetReached:c,viewportHeight:u},{log:g}])=>{const h=$u(),m=$u(),f=xu(0);let b=null,p=null,y=null;function v(){b&&(b(),b=null),y&&(y(),y=null),p&&(clearTimeout(p),p=null),ou(l,!1)}return su(fu(h,vu(t,u,n,f,s,a,g),vu(e,i,o),hu((([[e,t,n,o,i,a,s,d],u,g,f])=>{const x=Bg(e),{align:w,behavior:$,offset:F}=x,C=o-1,E=fg(x,t,C);let S=hg(E,t.offsetTree,u)+a;"end"===w?(S+=g+Wu(t.sizeTree,E)[1]-n+f,E===C&&(S+=s)):"center"===w?S+=(g+Wu(t.sizeTree,E)[1]-n+f)/2:S-=i,F&&(S+=F);const D=r=>{v(),r?(d("retrying to scroll to",{location:e},ku.DEBUG),ou(h,e)):(ou(m,!0),d("list did not change, scroll successful",{},ku.DEBUG))};if(v(),"smooth"===$){let e=!1;y=nu(r,(r=>{e=e||r})),b=lu(c,(()=>{D(e)}))}else b=lu(fu(r,function(e){return r=>{const t=setTimeout((()=>{r(!1)}),e);return e=>{e&&(r(!0),clearTimeout(t))}}}(150)),D);return p=setTimeout((()=>{v()}),1200),ou(l,!0),d("scrolling from index to",{behavior:$,index:E,top:S},ku.DEBUG),{behavior:$,top:S}}))),d),{scrollTargetReached:m,scrollToIndex:h,topListHeight:f}}),tu(Fg,Lu,Tu),{singleton:!0});function Og(e,r){0==e?r():requestAnimationFrame((()=>{Og(e-1,r)}))}function Tg(e,r){const t=r-1;return"number"==typeof e?e:"LAST"===e.index?t:e.index}const zg=Cu((([{defaultItemSize:e,listRefresh:r,sizes:t},{scrollTop:n},{scrollTargetReached:o,scrollToIndex:i},{didMount:a}])=>{const s=xu(!0),l=xu(0),d=xu(!0);return su(fu(a,vu(l),gu((([e,r])=>!!r)),mu(!1)),s),su(fu(a,vu(l),gu((([e,r])=>!!r)),mu(!1)),d),nu(fu(Su(r,a),vu(s,t,e,d),gu((([[,e],r,{sizeTree:t},n,o])=>e&&(!Hu(t)||Qc(n))&&!r&&!o)),vu(l)),(([,e])=>{lu(o,(()=>{ou(d,!0)})),Og(4,(()=>{lu(n,(()=>{ou(s,!0)})),ou(i,e)}))})),{initialItemFinalLocationReached:d,initialTopMostItemIndex:l,scrolledToInitialItem:s}}),tu(Fg,Lu,kg,Sg),{singleton:!0});function Ag(e,r){return Math.abs(e-r)<1.01}const Ig="up",Mg="down",jg={atBottom:!1,notAtBottomBecause:"NOT_SHOWING_LAST_ITEM",state:{offsetBottom:0,scrollHeight:0,scrollTop:0,viewportHeight:0}},Lg=Cu((([{footerHeight:e,headerHeight:r,scrollBy:t,scrollContainerState:n,scrollTop:o,viewportHeight:i}])=>{const a=xu(!1),s=xu(!0),l=$u(),d=$u(),c=xu(4),u=xu(0),g=wu(fu(Bu(fu(Du(o),pu(1),mu(!0)),fu(Du(o),pu(1),mu(!1),du(100))),uu()),!1),h=wu(fu(Bu(fu(t,mu(!0)),fu(t,mu(!1),du(200))),uu()),!1);su(fu(Su(Du(o),Du(u)),hu((([e,r])=>e<=r)),uu()),s),su(fu(s,yu(50)),d);const m=Fu(fu(Su(n,Du(i),Du(r),Du(e),Du(c)),bu(((e,[{scrollHeight:r,scrollTop:t},n,o,i,a])=>{const s={scrollHeight:r,scrollTop:t,viewportHeight:n};if(t+n-r>-a){let r,n;return t>e.state.scrollTop?(r="SCROLLED_DOWN",n=e.state.scrollTop-t):(r="SIZE_DECREASED",n=e.state.scrollTop-t||e.scrollTopDelta),{atBottom:!0,atBottomBecause:r,scrollTopDelta:n,state:s}}let l;return l=s.scrollHeight>e.state.scrollHeight?"SIZE_INCREASED":n<e.state.viewportHeight?"VIEWPORT_HEIGHT_DECREASING":t<e.state.scrollTop?"SCROLLING_UPWARDS":"NOT_FULLY_SCROLLED_TO_LAST_ITEM_BOTTOM",{atBottom:!1,notAtBottomBecause:l,state:s}}),jg),uu(((e,r)=>e&&e.atBottom===r.atBottom)))),f=wu(fu(n,bu(((e,{scrollHeight:r,scrollTop:t,viewportHeight:n})=>{if(Ag(e.scrollHeight,r))return{changed:!1,jump:0,scrollHeight:r,scrollTop:t};{const o=r-(t+n)<1;return e.scrollTop!==t&&o?{changed:!0,jump:e.scrollTop-t,scrollHeight:r,scrollTop:t}:{changed:!0,jump:0,scrollHeight:r,scrollTop:t}}}),{changed:!1,jump:0,scrollHeight:0,scrollTop:0}),gu((e=>e.changed)),hu((e=>e.jump))),0);su(fu(m,hu((e=>e.atBottom))),a),su(fu(a,yu(50)),l);const b=xu(Mg);su(fu(n,hu((({scrollTop:e})=>e)),uu(),bu(((e,r)=>au(h)?{direction:e.direction,prevScrollTop:r}:{direction:r<e.prevScrollTop?Ig:Mg,prevScrollTop:r}),{direction:Mg,prevScrollTop:0}),hu((e=>e.direction))),b),su(fu(n,yu(50),mu("none")),b);const p=xu(0);return su(fu(g,gu((e=>!e)),mu(0)),p),su(fu(o,yu(100),vu(g),gu((([e,r])=>!!r)),bu((([e,r],[t])=>[r,t]),[0,0]),hu((([e,r])=>r-e))),p),{atBottomState:m,atBottomStateChange:l,atBottomThreshold:c,atTopStateChange:d,atTopThreshold:u,isAtBottom:a,isAtTop:s,isScrolling:g,lastJumpDueToItemResize:f,scrollDirection:b,scrollVelocity:p}}),tu(Lu)),_g="top",Rg="bottom",Hg="none";function Pg(e,r,t){return"number"==typeof e?t===Ig&&r===_g||t===Mg&&r===Rg?e:0:t===Ig?r===_g?e.main:e.reverse:r===Rg?e.main:e.reverse}function Wg(e,r){var t;return"number"==typeof e?e:null!=(t=e[r])?t:0}const Ng=Cu((([{deviation:e,fixedHeaderHeight:r,headerHeight:t,scrollTop:n,viewportHeight:o}])=>{const i=$u(),a=xu(0),s=xu(0),l=xu(0);return{increaseViewportBy:s,listBoundary:i,overscan:l,topListHeight:a,visibleRange:wu(fu(Su(Du(n),Du(o),Du(t),Du(i,ig),Du(l),Du(a),Du(r),Du(e),Du(s)),hu((([e,r,t,[n,o],i,a,s,l,d])=>{const c=e-l,u=a+s,g=Math.max(t-c,0);let h=Hg;const m=Wg(d,_g),f=Wg(d,Rg);return n-=l,o+=t+s,(n+=t+s)>e+u-m&&(h=Ig),(o-=l)<e-g+r+f&&(h=Mg),h!==Hg?[Math.max(c-t-Pg(i,_g,h)-m,0),c-g-s+r+Pg(i,Rg,h)+f]:null})),gu((e=>null!=e)),uu(ig)),[0,0])}}),tu(Lu),{singleton:!0});const Vg={bottom:0,firstItemIndex:0,items:[],offsetBottom:0,offsetTop:0,top:0,topItems:[],topListHeight:0,totalCount:0};function Yg(e,r,t,n,o,i){const{lastIndex:a,lastOffset:s,lastSize:l}=o;let d=0,c=0;if(e.length>0){d=e[0].offset;const r=e[e.length-1];c=r.offset+r.size}const u=t-a,g=d,h=s+u*l+(u-1)*n-c;return{bottom:c,firstItemIndex:i,items:qg(e,o,i),offsetBottom:h,offsetTop:d,top:g,topItems:qg(r,o,i),topListHeight:r.reduce(((e,r)=>r.size+e),0),totalCount:t}}function Ug(e,r,t,n,o,i){let a=0;if(t.groupIndices.length>0)for(const r of t.groupIndices){if(r-a>=e)break;a++}const s=e+a,l=Tg(r,s);return Yg(Array.from({length:s}).map(((e,r)=>({data:i[r+l],index:r+l,offset:0,size:0}))),[],s,o,t,n)}function qg(e,r,t){if(0===e.length)return[];if(!cg(r))return e.map((e=>({...e,index:e.index+t,originalIndex:e.index})));const n=e[0].index,o=e[e.length-1].index,i=[],a=Yu(r.groupOffsetTree,n,o);let s,l=0;for(const n of e){let e;(!s||s.end<n.index)&&(s=a.shift(),l=r.groupIndices.indexOf(s.start)),e=n.index===s.start?{index:l,type:"group"}:{groupIndex:l,index:n.index-(l+1)+t},i.push({...e,data:n.data,offset:n.offset,originalIndex:n.index,size:n.size})}return i}const Gg=Cu((([{data:e,firstItemIndex:r,gap:t,sizes:n,totalCount:o},i,{listBoundary:a,topListHeight:s,visibleRange:l},{initialTopMostItemIndex:d,scrolledToInitialItem:c},{topListHeight:u},g,{didMount:h},{recalcInProgress:m}])=>{const f=xu([]),b=xu(0),p=$u();su(i.topItemsIndexes,f);const y=wu(fu(Su(h,m,Du(l,ig),Du(o),Du(n),Du(d),c,Du(f),Du(r),Du(t),e),gu((([e,r,,t,,,,,,,n])=>{const o=n&&n.length!==t;return e&&!r&&!o})),hu((([,,[e,r],t,n,o,i,a,s,l,d])=>{const c=n,{offsetTree:u,sizeTree:g}=c,h=au(b);if(0===t)return{...Vg,totalCount:t};if(0===e&&0===r)return 0===h?{...Vg,totalCount:t}:Ug(h,o,n,s,l,d||[]);if(Hu(g))return h>0?null:Yg(function(e,r,t){if(cg(r)){const n=mg(e,r);return[{index:Wu(r.groupOffsetTree,n)[0],offset:0,size:0},{data:null==t?void 0:t[0],index:n,offset:0,size:0}]}return[{data:null==t?void 0:t[0],index:e,offset:0,size:0}]}(Tg(o,t),c,d),[],t,l,c,s);const m=[];if(a.length>0){const e=a[0],r=a[a.length-1];let t=0;for(const n of Yu(g,e,r)){const o=n.value,i=Math.max(n.start,e),a=Math.min(n.end,r);for(let e=i;e<=a;e++)m.push({data:null==d?void 0:d[e],index:e,offset:t,size:o}),t+=o}}if(!i)return Yg([],m,t,l,c,s);const f=a.length>0?a[a.length-1]+1:0,p=bg(u,e,r,f);if(0===p.length)return null;const y=t-1;return Yg(eu([],(t=>{for(const n of p){const o=n.value;let i=o.offset,a=n.start;const s=o.size;if(o.offset<e){a+=Math.floor((e-o.offset+l)/(s+l));const r=a-n.start;i+=r*s+r*l}a<f&&(i+=(f-a)*s,a=f);const c=Math.min(n.end,y);for(let e=a;e<=c&&!(i>=r);e++)t.push({data:null==d?void 0:d[e],index:e,offset:i,size:s}),i+=s+l}})),m,t,l,c,s)})),gu((e=>null!==e)),uu()),Vg);su(fu(e,gu(Qc),hu((e=>null==e?void 0:e.length))),o),su(fu(y,hu((e=>e.topListHeight))),u),su(u,s),su(fu(y,hu((e=>[e.top,e.bottom]))),a),su(fu(y,hu((e=>e.items))),p);const v=Fu(fu(y,gu((({items:e})=>e.length>0)),vu(o,e),gu((([{items:e},r])=>e[e.length-1].originalIndex===r-1)),hu((([,e,r])=>[e-1,r])),uu(ig),hu((([e])=>e)))),x=Fu(fu(y,yu(200),gu((({items:e,topItems:r})=>e.length>0&&e[0].originalIndex===r.length)),hu((({items:e})=>e[0].index)),uu())),w=Fu(fu(y,gu((({items:e})=>e.length>0)),hu((({items:e})=>{let r=0,t=e.length-1;for(;"group"===e[r].type&&r<t;)r++;for(;"group"===e[t].type&&t>r;)t--;return{endIndex:e[t].index,startIndex:e[r].index}})),uu(og)));return{endReached:v,initialItemCount:b,itemsRendered:p,listState:y,rangeChanged:w,startReached:x,topItemsIndexes:f,...g}}),tu(Fg,Eg,Ng,zg,kg,Lg,Sg,ag),{singleton:!0}),Zg=Cu((([{fixedFooterHeight:e,fixedHeaderHeight:r,footerHeight:t,headerHeight:n},{listState:o}])=>{const i=$u(),a=wu(fu(Su(t,e,n,r,o),hu((([e,r,t,n,o])=>e+r+t+n+o.offsetBottom+o.bottom))),0);return su(Du(a),i),{totalListHeight:a,totalListHeightChanged:i}}),tu(Lu,Gg),{singleton:!0}),Kg=Cu((([{viewportHeight:e},{totalListHeight:r}])=>{const t=xu(!1);return{alignToBottom:t,paddingTopAddition:wu(fu(Su(t,e,r),gu((([e])=>e)),hu((([,e,r])=>Math.max(0,e-r))),yu(0),uu()),0)}}),tu(Lu,Zg),{singleton:!0});function Xg(e){return!!e&&("smooth"===e?"smooth":"auto")}const Qg=Cu((([{listRefresh:e,totalCount:r},{atBottomState:t,isAtBottom:n},{scrollToIndex:o},{scrolledToInitialItem:i},{didMount:a,propsReady:s},{log:l},{scrollingInProgress:d}])=>{const c=xu(!1),u=$u();let g=null;function h(e){ou(o,{align:"end",behavior:e,index:"LAST"})}function m(e){const r=lu(t,(r=>{e&&!r.atBottom&&"SIZE_INCREASED"===r.notAtBottomBecause&&!g&&(au(l)("scrolling to bottom due to increased size",{},ku.DEBUG),h("auto"))}));setTimeout(r,100)}return nu(fu(Su(fu(Du(r),pu(1)),a),vu(Du(c),n,i,d),hu((([[e,r],t,n,o,i])=>{let a=r&&o,s="auto";return a&&(s=((e,r)=>"function"==typeof e?Xg(e(r)):r&&Xg(e))(t,n||i),a=a&&!!s),{followOutputBehavior:s,shouldFollow:a,totalCount:e}})),gu((({shouldFollow:e})=>e))),(({followOutputBehavior:r,totalCount:t})=>{g&&(g(),g=null),g=lu(e,(()=>{au(l)("following output to ",{totalCount:t},ku.DEBUG),h(r),g=null}))})),nu(fu(Su(Du(c),r,s),gu((([e,,r])=>e&&r)),bu((({value:e},[,r])=>({refreshed:e===r,value:r})),{refreshed:!1,value:0}),gu((({refreshed:e})=>e)),vu(c,r)),(([,e])=>{au(i)&&m(!1!==e)})),nu(u,(()=>{m(!1!==au(c))})),nu(Su(Du(c),t),(([e,r])=>{e&&!r.atBottom&&"VIEWPORT_HEIGHT_DECREASING"===r.notAtBottomBecause&&h("auto")})),{autoscrollToBottom:u,followOutput:c}}),tu(Fg,Lg,kg,zg,Sg,Tu,Lu)),Jg=Cu((([{data:e,firstItemIndex:r,gap:t,sizes:n},{initialTopMostItemIndex:o},{initialItemCount:i,listState:a},{didMount:s}])=>(su(fu(s,vu(i),gu((([,e])=>0!==e)),vu(o,n,r,t,e),hu((([[,e],r,t,n,o,i=[]])=>Ug(e,r,t,n,o,i)))),a),{})),tu(Fg,zg,Gg,Sg),{singleton:!0}),eh=Cu((([{didMount:e},{scrollTo:r},{listState:t}])=>{const n=xu(0);return nu(fu(e,vu(n),gu((([,e])=>0!==e)),hu((([,e])=>({top:e})))),(e=>{lu(fu(t,pu(1),gu((e=>e.items.length>1))),(()=>{requestAnimationFrame((()=>{ou(r,e)}))}))})),{initialScrollTop:n}}),tu(Sg,Lu,Gg),{singleton:!0}),rh=({itemBottom:e,itemTop:r,locationParams:{align:t,behavior:n,...o},viewportBottom:i,viewportTop:a})=>r<a?{...o,align:null!=t?t:"start",behavior:n}:e>i?{...o,align:null!=t?t:"end",behavior:n}:null,th=Cu((([{gap:e,sizes:r,totalCount:t},{fixedFooterHeight:n,fixedHeaderHeight:o,headerHeight:i,scrollingInProgress:a,scrollTop:s,viewportHeight:l},{scrollToIndex:d}])=>{const c=$u();return su(fu(c,vu(r,l,t,i,o,n,s),vu(e),hu((([[e,r,t,n,o,i,s,l],d])=>{const{align:c,behavior:u,calculateViewLocation:g=rh,done:h,...m}=e,f=fg(e,r,n-1),b=hg(f,r.offsetTree,d)+o+i,p=g({itemBottom:b+Wu(r.sizeTree,f)[1],itemTop:b,locationParams:{align:c,behavior:u,...m},viewportBottom:l+t-s,viewportTop:l+i});return p?h&&lu(fu(a,gu((e=>!e)),pu(au(a)?1:2)),h):h&&h(),p})),gu((e=>null!==e))),d),{scrollIntoView:c}}),tu(Fg,Lu,kg,Gg,Tu),{singleton:!0}),nh=Cu((([{scrollVelocity:e}])=>{const r=xu(!1),t=$u(),n=xu(!1);return su(fu(e,vu(n,r,t),gu((([e,r])=>!!r)),hu((([e,r,t,n])=>{const{enter:o,exit:i}=r;if(t){if(i(e,n))return!1}else if(o(e,n))return!0;return t})),uu()),r),nu(fu(Su(r,e,t),vu(n)),(([[e,r,t],n])=>{e&&n&&n.change&&n.change(r,t)})),{isSeeking:r,scrollSeekConfiguration:n,scrollSeekRangeChanged:t,scrollVelocity:e}}),tu(Lg),{singleton:!0}),oh=Cu((([{scrollContainerState:e,scrollTo:r}])=>{const t=$u(),n=$u(),o=$u(),i=xu(!1),a=xu(void 0);return su(fu(Su(t,n),hu((([{scrollHeight:e,scrollTop:r,viewportHeight:t},{offsetTop:n}])=>({scrollHeight:e,scrollTop:Math.max(0,r-n),viewportHeight:t})))),e),su(fu(r,vu(n),hu((([e,{offsetTop:r}])=>({...e,top:e.top+r})))),o),{customScrollParent:a,useWindowScroll:i,windowScrollContainerState:t,windowScrollTo:o,windowViewportRect:n}}),tu(Lu)),ih=Cu((([{sizeRanges:e,sizes:r},{headerHeight:t,scrollTop:n},{initialTopMostItemIndex:o},{didMount:i},{useWindowScroll:a,windowScrollContainerState:s,windowViewportRect:l}])=>{const d=$u(),c=xu(void 0),u=xu(null),g=xu(null);return su(s,u),su(l,g),nu(fu(d,vu(r,n,a,u,g,t)),(([e,r,t,n,o,i,a])=>{const s=function(e){return qu(e).map((({k:e,v:r},t,n)=>{const o=n[t+1];return{endIndex:o?o.k-1:1/0,size:r,startIndex:e}}))}(r.sizeTree);n&&null!==o&&null!==i&&(t=o.scrollTop-i.offsetTop),e({ranges:s,scrollTop:t-=a})})),su(fu(c,gu(Qc),hu(ah)),o),su(fu(i,vu(c),gu((([,e])=>void 0!==e)),uu(),hu((([,e])=>e.ranges))),e),{getState:d,restoreStateFrom:c}}),tu(Fg,Lu,zg,Sg,oh));function ah(e){return{align:"start",index:0,offset:e.scrollTop}}const sh=Cu((([{topItemsIndexes:e}])=>{const r=xu(0);return su(fu(r,gu((e=>e>=0)),hu((e=>Array.from({length:e}).map(((e,r)=>r))))),e),{topItemCount:r}}),tu(Gg));function lh(e){let r,t=!1;return()=>(t||(t=!0,r=e()),r)}const dh=lh((()=>/iP(ad|od|hone)/i.test(navigator.userAgent)&&/WebKit/i.test(navigator.userAgent))),ch=Cu((([{deviation:e,scrollBy:r,scrollingInProgress:t,scrollTop:n},{isAtBottom:o,isScrolling:i,lastJumpDueToItemResize:a,scrollDirection:s},{listState:l},{beforeUnshiftWith:d,gap:c,shiftWithOffset:u,sizes:g},{log:h},{recalcInProgress:m}])=>{const f=Fu(fu(l,vu(a),bu((([,e,r,t],[{bottom:n,items:o,offsetBottom:i,totalCount:a},s])=>{const l=n+i;let d=0;return r===a&&e.length>0&&o.length>0&&(0===o[0].originalIndex&&0===e[0].originalIndex||(d=l-t,0!==d&&(d+=s))),[d,o,a,l]}),[0,[],0,0]),gu((([e])=>0!==e)),vu(n,s,t,o,h,m),gu((([,e,r,t,,,n])=>!n&&!t&&0!==e&&r===Ig)),hu((([[e],,,,,r])=>(r("Upward scrolling compensation",{amount:e},ku.DEBUG),e)))));function b(t){t>0?(ou(r,{behavior:"auto",top:-t}),ou(e,0)):(ou(e,0),ou(r,{behavior:"auto",top:-t}))}return nu(fu(f,vu(e,i)),(([r,t,n])=>{n&&dh()?ou(e,t-r):b(-r)})),nu(fu(Su(wu(i,!1),e,m),gu((([e,r,t])=>!e&&!t&&0!==r)),hu((([e,r])=>r)),yu(1)),b),su(fu(u,hu((e=>({top:-e})))),r),nu(fu(d,vu(g,c),hu((([e,{groupIndices:r,lastSize:t,sizeTree:n},o])=>{function i(e){return e*(t+o)}if(0===r.length)return i(e);{let t=0;const o=Pu(n,0);let a=0,s=0;for(;a<e;){a++,t+=o;let n=r.length===s+1?1/0:r[s+1]-r[s]-1;a+n>e&&(t-=o,n=e-a+1),a+=n,t+=i(n),s++}return t}}))),(t=>{ou(e,t),requestAnimationFrame((()=>{ou(r,{top:t}),requestAnimationFrame((()=>{ou(e,0),ou(m,!1)}))}))})),{deviation:e}}),tu(Lu,Lg,Gg,Fg,Tu,ag)),uh=Cu((([e,r,t,n,o,i,a,s,l,d])=>({...e,...r,...t,...n,...o,...i,...a,...s,...l,...d})),tu(Ng,Jg,Sg,nh,Zg,eh,Kg,oh,th,Tu)),gh=Cu((([{data:e,defaultItemSize:r,firstItemIndex:t,fixedItemSize:n,gap:o,groupIndices:i,itemSize:a,sizeRanges:s,sizes:l,statefulTotalCount:d,totalCount:c,trackItemSizes:u},{initialItemFinalLocationReached:g,initialTopMostItemIndex:h,scrolledToInitialItem:m},f,b,p,{listState:y,topItemsIndexes:v,...x},{scrollToIndex:w},$,{topItemCount:F},{groupCounts:C},E])=>(su(x.rangeChanged,E.scrollSeekRangeChanged),su(fu(E.windowViewportRect,hu((e=>e.visibleHeight))),f.viewportHeight),{data:e,defaultItemHeight:r,firstItemIndex:t,fixedItemHeight:n,gap:o,groupCounts:C,initialItemFinalLocationReached:g,initialTopMostItemIndex:h,scrolledToInitialItem:m,sizeRanges:s,topItemCount:F,topItemsIndexes:v,totalCount:c,...p,groupIndices:i,itemSize:a,listState:y,scrollToIndex:w,statefulTotalCount:d,trackItemSizes:u,...x,...E,...f,sizes:l,...b})),tu(Fg,zg,Lu,ih,Qg,Gg,kg,ch,sh,Eg,uh));function hh(e,r){const t={},n={};let o=0;const i=e.length;for(;o<i;)n[e[o]]=1,o+=1;for(const e in r)Object.hasOwn(n,e)||(t[e]=r[e]);return t}const mh=typeof document<"u"?o.useLayoutEffect:o.useEffect;function fh(r,t,n){const i=Object.keys(t.required||{}),a=Object.keys(t.optional||{}),s=Object.keys(t.methods||{}),l=Object.keys(t.events||{}),d=o.createContext({});function c(e,r){e.propsReady&&ou(e.propsReady,!1);for(const n of i){ou(e[t.required[n]],r[n])}for(const n of a)if(n in r){ou(e[t.optional[n]],r[n])}e.propsReady&&ou(e.propsReady,!0)}function u(e){return l.reduce(((r,n)=>(r[n]=function(e){let r,t;const n=()=>null==r?void 0:r();return function(o,i){switch(o){case 1:return i?t===i?void 0:(n(),t=i,r=nu(e,i),r):(n(),Jc);case 2:return n(),void(t=null)}}}(e[t.events[n]]),r)),{})}const g=o.forwardRef(((g,h)=>{const{children:m,...f}=g,[b]=o.useState((()=>eu(function(e){const r=new Map,t=({constructor:e,dependencies:n,id:o,singleton:i})=>{if(i&&r.has(o))return r.get(o);const a=e(n.map((e=>t(e))));return i&&r.set(o,a),a};return t(e)}(r),(e=>{c(e,f)})))),[p]=o.useState(Kc(u,b));mh((()=>{for(const e of l)e in f&&nu(p[e],f[e]);return()=>{Object.values(p).map(iu)}}),[f,p,b]),mh((()=>{c(b,f)})),o.useImperativeHandle(h,qc(function(e){return s.reduce(((r,n)=>(r[n]=r=>{ou(e[t.methods[n]],r)},r)),{})}(b)));const y=n;return e(d.Provider,{value:b,children:n?e(y,{...hh([...i,...a,...l],f),children:m}):m})}));return{Component:g,useEmitter:(e,r)=>{const t=o.useContext(d)[e];mh((()=>nu(t,r)),[r,t])},useEmitterValue:o.version.startsWith("18")?e=>{const r=o.useContext(d)[e],t=o.useCallback((e=>nu(r,e)),[r]);return o.useSyncExternalStore(t,(()=>au(r)),(()=>au(r)))}:e=>{const r=o.useContext(d)[e],[t,n]=o.useState(Kc(au,r));return mh((()=>nu(r,(e=>{e!==t&&n(qc(e))}))),[r,t]),t},usePublisher:e=>o.useCallback(Xc(ou,o.useContext(d)[e]),[e])}}const bh=o.createContext(void 0),ph=o.createContext(void 0),yh=typeof document<"u"?o.useLayoutEffect:o.useEffect;function vh(e,r,t,n=Jc,i,a){const s=o.useRef(null),l=o.useRef(null),d=o.useRef(null),c=o.useCallback((t=>{const n=t.target,o=n===window||n===document,i=a?o?window.pageXOffset||document.documentElement.scrollLeft:n.scrollLeft:o?window.pageYOffset||document.documentElement.scrollTop:n.scrollTop,s=a?o?document.documentElement.scrollWidth:n.scrollWidth:o?document.documentElement.scrollHeight:n.scrollHeight,c=a?o?window.innerWidth:n.offsetWidth:o?window.innerHeight:n.offsetHeight,u=()=>{e({scrollHeight:s,scrollTop:Math.max(i,0),viewportHeight:c})};t.suppressFlushSync?u():q.flushSync(u),null!==l.current&&(i===l.current||i<=0||i===s-c)&&(l.current=null,r(!0),d.current&&(clearTimeout(d.current),d.current=null))}),[e,r]);return o.useEffect((()=>{const e=i||s.current;return n(i||s.current),c({suppressFlushSync:!0,target:e}),e.addEventListener("scroll",c,{passive:!0}),()=>{n(null),e.removeEventListener("scroll",c)}}),[s,c,t,n,i]),{scrollByCallback:function(e){a&&(e={behavior:e.behavior,left:e.top}),s.current.scrollBy(e)},scrollerRef:s,scrollToCallback:function(t){const n=s.current;if(!n||(a?"offsetWidth"in n&&0===n.offsetWidth:"offsetHeight"in n&&0===n.offsetHeight))return;const o="smooth"===t.behavior;let i,c,u;n===window?(c=Math.max(dg(document.documentElement,a?"width":"height"),a?document.documentElement.scrollWidth:document.documentElement.scrollHeight),i=a?window.innerWidth:window.innerHeight,u=a?document.documentElement.scrollLeft:document.documentElement.scrollTop):(c=n[a?"scrollWidth":"scrollHeight"],i=dg(n,a?"width":"height"),u=n[a?"scrollLeft":"scrollTop"]);const g=c-i;if(t.top=Math.ceil(Math.max(Math.min(g,t.top),0)),Ag(i,c)||t.top===u)return e({scrollHeight:c,scrollTop:u,viewportHeight:i}),void(o&&r(!0));o?(l.current=t.top,d.current&&clearTimeout(d.current),d.current=setTimeout((()=>{d.current=null,l.current=null,r(!0)}),1e3)):l.current=null,a&&(t={behavior:t.behavior,left:t.top}),n.scrollTo(t)}}}const xh="-webkit-sticky",wh="sticky",$h=lh((()=>{if(typeof document>"u")return wh;const e=document.createElement("div");return e.style.position=xh,e.style.position===xh?xh:wh}));function Fh(e){return e}const Ch=Cu((()=>{const e=xu((e=>`Item ${e}`)),r=xu(null),t=xu((e=>`Group ${e}`)),n=xu({}),o=xu(Fh),i=xu("div"),a=xu(Jc),s=(e,r=null)=>wu(fu(n,hu((r=>r[e])),uu()),r);return{components:n,computeItemKey:o,context:r,EmptyPlaceholder:s("EmptyPlaceholder"),FooterComponent:s("Footer"),GroupComponent:s("Group","div"),groupContent:t,HeaderComponent:s("Header"),HeaderFooterTag:i,ItemComponent:s("Item","div"),itemContent:e,ListComponent:s("List","div"),ScrollerComponent:s("Scroller","div"),scrollerRef:a,ScrollSeekPlaceholder:s("ScrollSeekPlaceholder"),TopItemListComponent:s("TopItemList")}})),Eh=Cu((([e,r])=>({...e,...r})),tu(gh,Ch)),Sh=({height:r})=>e("div",{style:{height:r}}),Dh={overflowAnchor:"none",position:$h(),zIndex:1},Bh={overflowAnchor:"none"},kh={...Bh,display:"inline-block",height:"100%"},Oh=o.memo((function({showTopList:r=!1}){const t=qh("listState"),n=Gh("sizeRanges"),i=qh("useWindowScroll"),a=qh("customScrollParent"),s=Gh("windowScrollContainerState"),l=Gh("scrollContainerState"),d=a||i?s:l,c=qh("itemContent"),u=qh("context"),g=qh("groupContent"),h=qh("trackItemSizes"),m=qh("itemSize"),f=qh("log"),b=Gh("gap"),p=qh("horizontalDirection"),{callbackRef:v}=Iu(n,m,h,r?Jc:d,f,b,a,p,qh("skipAnimationFrameInResizeObserver")),[x,w]=o.useState(0);Uh("deviation",(e=>{x!==e&&w(e)}));const $=qh("EmptyPlaceholder"),F=qh("ScrollSeekPlaceholder")||Sh,C=qh("ListComponent"),E=qh("ItemComponent"),S=qh("GroupComponent"),D=qh("computeItemKey"),B=qh("isSeeking"),k=qh("groupIndices").length>0,O=qh("alignToBottom"),T=qh("initialItemFinalLocationReached"),z=r?{}:{boxSizing:"border-box",...p?{display:"inline-block",height:"100%",marginLeft:0!==x?x:O?"auto":0,paddingLeft:t.offsetTop,paddingRight:t.offsetBottom,whiteSpace:"nowrap"}:{marginTop:0!==x?x:O?"auto":0,paddingBottom:t.offsetBottom,paddingTop:t.offsetTop},...T?{}:{visibility:"hidden"}};return!r&&0===t.totalCount&&$?e($,{...Mh($,u)}):e(C,{...Mh(C,u),"data-testid":r?"virtuoso-top-item-list":"virtuoso-item-list",ref:v,style:z,children:(r?t.topItems:t.items).map((e=>{const r=e.originalIndex,n=D(r+t.firstItemIndex,e.data,u);return B?y(F,{...Mh(F,u),height:e.size,index:e.index,key:n,type:e.type||"item",..."group"===e.type?{}:{groupIndex:e.groupIndex}}):"group"===e.type?y(S,{...Mh(S,u),"data-index":r,"data-item-index":e.index,"data-known-size":e.size,key:n,style:Dh},g(e.index,u)):y(E,{...Mh(E,u),...jh(E,e.data),"data-index":r,"data-item-group-index":e.groupIndex,"data-item-index":e.index,"data-known-size":e.size,key:n,style:p?kh:Bh},k?c(e.index,e.groupIndex,e.data,u):c(e.index,e.data,u))}))})})),Th={height:"100%",outline:"none",overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},zh={outline:"none",overflowX:"auto",position:"relative"},Ah=e=>({height:"100%",position:"absolute",top:0,width:"100%",...e?{display:"flex",flexDirection:"column"}:{}}),Ih={position:$h(),top:0,width:"100%",zIndex:1};function Mh(e,r){if("string"!=typeof e)return{context:r}}function jh(e,r){return{item:"string"==typeof e?void 0:r}}const Lh=o.memo((function(){const r=qh("HeaderComponent"),t=Gh("headerHeight"),n=qh("HeaderFooterTag"),i=zu(o.useMemo((()=>e=>{t(dg(e,"height"))}),[t]),!0,qh("skipAnimationFrameInResizeObserver")),a=qh("context");return r?e(n,{ref:i,children:e(r,{...Mh(r,a)})}):null})),_h=o.memo((function(){const r=qh("FooterComponent"),t=Gh("footerHeight"),n=qh("HeaderFooterTag"),i=zu(o.useMemo((()=>e=>{t(dg(e,"height"))}),[t]),!0,qh("skipAnimationFrameInResizeObserver")),a=qh("context");return r?e(n,{ref:i,children:e(r,{...Mh(r,a)})}):null}));function Rh({useEmitter:r,useEmitterValue:t,usePublisher:n}){return o.memo((function({children:o,style:i,...a}){const s=n("scrollContainerState"),l=t("ScrollerComponent"),d=n("smoothScrollTargetReached"),c=t("scrollerRef"),u=t("context"),g=t("horizontalDirection")||!1,{scrollByCallback:h,scrollerRef:m,scrollToCallback:f}=vh(s,d,l,c,void 0,g);return r("scrollTo",f),r("scrollBy",h),e(l,{"data-testid":"virtuoso-scroller","data-virtuoso-scroller":!0,ref:m,style:{...g?zh:Th,...i},tabIndex:0,...a,...Mh(l,u),children:o})}))}function Hh({useEmitter:r,useEmitterValue:t,usePublisher:n}){return o.memo((function({children:o,style:i,...a}){const s=n("windowScrollContainerState"),l=t("ScrollerComponent"),d=n("smoothScrollTargetReached"),c=t("totalListHeight"),u=t("deviation"),g=t("customScrollParent"),h=t("context"),{scrollByCallback:m,scrollerRef:f,scrollToCallback:b}=vh(s,d,l,Jc,g);return yh((()=>(f.current=g||window,()=>{f.current=null})),[f,g]),r("windowScrollTo",b),r("scrollBy",m),e(l,{"data-virtuoso-scroller":!0,style:{position:"relative",...i,...0!==c?{height:c+u}:{}},...a,...Mh(l,h),children:o})}))}const Ph=({children:r})=>{const t=o.useContext(bh),n=Gh("viewportHeight"),i=Gh("fixedItemHeight"),a=qh("alignToBottom"),s=qh("horizontalDirection"),l=zu(o.useMemo((()=>Zc(n,(e=>dg(e,s?"width":"height")))),[n,s]),!0,qh("skipAnimationFrameInResizeObserver"));return o.useEffect((()=>{t&&(n(t.viewportHeight),i(t.itemHeight))}),[t,n,i]),e("div",{"data-viewport-type":"element",ref:l,style:Ah(a),children:r})},Wh=({children:r})=>{const t=o.useContext(bh),n=Gh("windowViewportRect"),i=Gh("fixedItemHeight"),a=qh("customScrollParent"),s=ju(n,a,qh("skipAnimationFrameInResizeObserver")),l=qh("alignToBottom");return o.useEffect((()=>{t&&(i(t.itemHeight),n({offsetTop:0,visibleHeight:t.viewportHeight,visibleWidth:100}))}),[t,n,i]),e("div",{"data-viewport-type":"window",ref:s,style:Ah(l),children:r})},Nh=({children:r})=>{const t=qh("TopItemListComponent")||"div",n=qh("headerHeight"),o={...Ih,marginTop:`${n}px`},i=qh("context");return e(t,{style:o,...Mh(t,i),children:r})},Vh=o.memo((function(t){const n=qh("useWindowScroll"),o=qh("topItemsIndexes").length>0,i=qh("customScrollParent"),a=qh("context"),s=i||n?Kh:Zh,l=i||n?Wh:Ph;return r(s,{...t,...Mh(s,a),children:[o&&e(Nh,{children:e(Oh,{showTopList:!0})}),r(l,{children:[e(Lh,{}),e(Oh,{}),e(_h,{})]})]})})),{Component:Yh,useEmitter:Uh,useEmitterValue:qh,usePublisher:Gh}=fh(Eh,{events:{atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",endReached:"endReached",groupIndices:"groupIndices",isScrolling:"isScrolling",itemsRendered:"itemsRendered",rangeChanged:"rangeChanged",startReached:"startReached",totalListHeightChanged:"totalListHeightChanged"},methods:{autoscrollToBottom:"autoscrollToBottom",getState:"getState",scrollBy:"scrollBy",scrollIntoView:"scrollIntoView",scrollTo:"scrollTo",scrollToIndex:"scrollToIndex"},optional:{alignToBottom:"alignToBottom",atBottomThreshold:"atBottomThreshold",atTopThreshold:"atTopThreshold",components:"components",computeItemKey:"computeItemKey",context:"context",customScrollParent:"customScrollParent",data:"data",defaultItemHeight:"defaultItemHeight",firstItemIndex:"firstItemIndex",fixedItemHeight:"fixedItemHeight",followOutput:"followOutput",groupContent:"groupContent",groupCounts:"groupCounts",headerFooterTag:"HeaderFooterTag",horizontalDirection:"horizontalDirection",increaseViewportBy:"increaseViewportBy",initialItemCount:"initialItemCount",initialScrollTop:"initialScrollTop",initialTopMostItemIndex:"initialTopMostItemIndex",itemContent:"itemContent",itemSize:"itemSize",logLevel:"logLevel",overscan:"overscan",restoreStateFrom:"restoreStateFrom",scrollerRef:"scrollerRef",scrollSeekConfiguration:"scrollSeekConfiguration",skipAnimationFrameInResizeObserver:"skipAnimationFrameInResizeObserver",topItemCount:"topItemCount",totalCount:"totalCount",useWindowScroll:"useWindowScroll"},required:{}},Vh),Zh=Rh({useEmitter:Uh,useEmitterValue:qh,usePublisher:Gh}),Kh=Hh({useEmitter:Uh,useEmitterValue:qh,usePublisher:Gh}),Xh=Yh,Qh={bottom:0,itemHeight:0,items:[],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},Jh={bottom:0,itemHeight:0,items:[{index:0}],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},{ceil:em,floor:rm,max:tm,min:nm,round:om}=Math;function im(e,r,t){return Array.from({length:r-e+1}).map(((r,n)=>({data:null===t?null:t[n+e],index:n+e})))}function am(e,r){return e&&e.width===r.width&&e.height===r.height}function sm(e,r){return e&&e.column===r.column&&e.row===r.row}const lm=Cu((([{increaseViewportBy:e,listBoundary:r,overscan:t,visibleRange:n},{footerHeight:o,headerHeight:i,scrollBy:a,scrollContainerState:s,scrollTo:l,scrollTop:d,smoothScrollTargetReached:c,viewportHeight:u},g,h,{didMount:m,propsReady:f},{customScrollParent:b,useWindowScroll:p,windowScrollContainerState:y,windowScrollTo:v,windowViewportRect:x},w])=>{const $=xu(0),F=xu(0),C=xu(Qh),E=xu({height:0,width:0}),S=xu({height:0,width:0}),D=$u(),B=$u(),k=xu(0),O=xu(null),T=xu({column:0,row:0}),z=$u(),A=$u(),I=xu(!1),M=xu(0),j=xu(!0),L=xu(!1),_=xu(!1);nu(fu(m,vu(M),gu((([e,r])=>!!r))),(()=>{ou(j,!1)})),nu(fu(Su(m,j,S,E,M,L),gu((([e,r,t,n,,o])=>e&&!r&&0!==t.height&&0!==n.height&&!o))),(([,,,,e])=>{ou(L,!0),Og(1,(()=>{ou(D,e)})),lu(fu(d),(()=>{ou(r,[0,0]),ou(j,!0)}))})),su(fu(A,gu((e=>null!=e&&e.scrollTop>0)),mu(0)),F),nu(fu(m,vu(A),gu((([,e])=>null!=e))),(([,e])=>{e&&(ou(E,e.viewport),ou(S,e.item),ou(T,e.gap),e.scrollTop>0&&(ou(I,!0),lu(fu(d,pu(1)),(e=>{ou(I,!1)})),ou(l,{top:e.scrollTop})))})),su(fu(E,hu((({height:e})=>e))),u),su(fu(Su(Du(E,am),Du(S,am),Du(T,((e,r)=>e&&e.column===r.column&&e.row===r.row)),Du(d)),hu((([e,r,t,n])=>({gap:t,item:r,scrollTop:n,viewport:e})))),z),su(fu(Su(Du($),n,Du(T,sm),Du(S,am),Du(E,am),Du(O),Du(F),Du(I),Du(j),Du(M)),gu((([,,,,,,,e])=>!e)),hu((([e,[r,t],n,o,i,a,s,,l,d])=>{const{column:c,row:u}=n,{height:g,width:h}=o,{width:m}=i;if(0===s&&(0===e||0===m))return Qh;if(0===h){const r=Tg(d,e);return function(e){return{...Jh,items:e}}(im(r,r+Math.max(s-1,0),a))}const f=dm(m,h,c);let b,p;l?0===r&&0===t&&s>0?(b=0,p=s-1):(b=f*rm((r+u)/(g+u)),p=f*em((t+u)/(g+u))-1,p=nm(e-1,tm(p,f-1)),b=nm(p,tm(0,b))):(b=0,p=-1);const y=im(b,p,a),{bottom:v,top:x}=cm(i,n,o,y),w=em(e/f);return{bottom:v,itemHeight:g,items:y,itemWidth:h,offsetBottom:w*g+(w-1)*u-v,offsetTop:x,top:x}}))),C),su(fu(O,gu((e=>null!==e)),hu((e=>e.length))),$),su(fu(Su(E,S,C,T),gu((([e,r,{items:t}])=>t.length>0&&0!==r.height&&0!==e.height)),hu((([e,r,{items:t},n])=>{const{bottom:o,top:i}=cm(e,n,r,t);return[i,o]})),uu(ig)),r);const R=xu(!1);su(fu(d,vu(R),hu((([e,r])=>r||0!==e))),R);const H=Fu(fu(Su(C,$),gu((([{items:e}])=>e.length>0)),vu(R),gu((([[e,r],t])=>{const n=e.items[e.items.length-1].index===r-1;return(t||e.bottom>0&&e.itemHeight>0&&0===e.offsetBottom&&e.items.length===r)&&n})),hu((([[,e]])=>e-1)),uu())),P=Fu(fu(Du(C),gu((({items:e})=>e.length>0&&0===e[0].index)),mu(0),uu())),W=Fu(fu(Du(C),vu(I),gu((([{items:e},r])=>e.length>0&&!r)),hu((([{items:e}])=>({endIndex:e[e.length-1].index,startIndex:e[0].index}))),uu(og),yu(0)));su(W,h.scrollSeekRangeChanged),su(fu(D,vu(E,S,$,T),hu((([e,r,t,n,o])=>{const i=Bg(e),{align:a,behavior:s,offset:l}=i;let d=i.index;"LAST"===d&&(d=n-1),d=tm(0,d,nm(n-1,d));let c=um(r,o,t,d);return"end"===a?c=om(c-r.height+t.height):"center"===a&&(c=om(c-r.height/2+t.height/2)),l&&(c+=l),{behavior:s,top:c}}))),l);const N=wu(fu(C,hu((e=>e.offsetBottom+e.bottom))),0);return su(fu(x,hu((e=>({height:e.visibleHeight,width:e.visibleWidth})))),E),{customScrollParent:b,data:O,deviation:k,footerHeight:o,gap:T,headerHeight:i,increaseViewportBy:e,initialItemCount:F,itemDimensions:S,overscan:t,restoreStateFrom:A,scrollBy:a,scrollContainerState:s,scrollHeight:B,scrollTo:l,scrollToIndex:D,scrollTop:d,smoothScrollTargetReached:c,totalCount:$,useWindowScroll:p,viewportDimensions:E,windowScrollContainerState:y,windowScrollTo:v,windowViewportRect:x,...h,gridState:C,horizontalDirection:_,initialTopMostItemIndex:M,totalListHeight:N,...g,endReached:H,propsReady:f,rangeChanged:W,startReached:P,stateChanged:z,stateRestoreInProgress:I,...w}}),tu(Ng,Lu,Lg,nh,Sg,oh,Tu));function dm(e,r,t){return tm(1,rm((e+t)/(rm(r)+t)))}function cm(e,r,t,n){const{height:o}=t;if(void 0===o||0===n.length)return{bottom:0,top:0};const i=um(e,r,t,n[0].index);return{bottom:um(e,r,t,n[n.length-1].index)+o,top:i}}function um(e,r,t,n){const o=dm(e.width,t.width,r.column),i=rm(n/o),a=i*t.height+tm(0,i-1)*r.row;return a>0?a+r.row:a}const gm=Cu((()=>{const e=xu((e=>`Item ${e}`)),r=xu({}),t=xu(null),n=xu("virtuoso-grid-item"),o=xu("virtuoso-grid-list"),i=xu(Fh),a=xu("div"),s=xu(Jc),l=(e,t=null)=>wu(fu(r,hu((r=>r[e])),uu()),t),d=xu(!1),c=xu(!1);return su(Du(c),d),{components:r,computeItemKey:i,context:t,FooterComponent:l("Footer"),HeaderComponent:l("Header"),headerFooterTag:a,itemClassName:n,ItemComponent:l("Item","div"),itemContent:e,listClassName:o,ListComponent:l("List","div"),readyStateChanged:d,reportReadyState:c,ScrollerComponent:l("Scroller","div"),scrollerRef:s,ScrollSeekPlaceholder:l("ScrollSeekPlaceholder","div")}})),hm=Cu((([e,r])=>({...e,...r})),tu(lm,gm)),mm=o.memo((function(){const r=$m("gridState"),t=$m("listClassName"),n=$m("itemClassName"),i=$m("itemContent"),a=$m("computeItemKey"),s=$m("isSeeking"),l=Fm("scrollHeight"),d=$m("ItemComponent"),c=$m("ListComponent"),u=$m("ScrollSeekPlaceholder"),g=$m("context"),h=Fm("itemDimensions"),m=Fm("gap"),f=$m("log"),b=$m("stateRestoreInProgress"),p=Fm("reportReadyState"),v=zu(o.useMemo((()=>e=>{const r=e.parentElement.parentElement.scrollHeight;l(r);const t=e.firstChild;if(t){const{height:e,width:r}=t.getBoundingClientRect();h({height:e,width:r})}m({column:Sm("column-gap",getComputedStyle(e).columnGap,f),row:Sm("row-gap",getComputedStyle(e).rowGap,f)})}),[l,h,m,f]),!0,!1);return yh((()=>{r.itemHeight>0&&r.itemWidth>0&&p(!0)}),[r]),b?null:e(c,{className:t,ref:v,...Mh(c,g),"data-testid":"virtuoso-item-list",style:{paddingBottom:r.offsetBottom,paddingTop:r.offsetTop},children:r.items.map((t=>{const o=a(t.index,t.data,g);return s?e(u,{...Mh(u,g),height:r.itemHeight,index:t.index,width:r.itemWidth},o):y(d,{...Mh(d,g),className:n,"data-index":t.index,key:o},i(t.index,t.data,g))}))})})),fm=o.memo((function(){const r=$m("HeaderComponent"),t=Fm("headerHeight"),n=$m("headerFooterTag"),i=zu(o.useMemo((()=>e=>{t(dg(e,"height"))}),[t]),!0,!1),a=$m("context");return r?e(n,{ref:i,children:e(r,{...Mh(r,a)})}):null})),bm=o.memo((function(){const r=$m("FooterComponent"),t=Fm("footerHeight"),n=$m("headerFooterTag"),i=zu(o.useMemo((()=>e=>{t(dg(e,"height"))}),[t]),!0,!1),a=$m("context");return r?e(n,{ref:i,children:e(r,{...Mh(r,a)})}):null})),pm=({children:r})=>{const t=o.useContext(ph),n=Fm("itemDimensions"),i=Fm("viewportDimensions"),a=zu(o.useMemo((()=>e=>{i(e.getBoundingClientRect())}),[i]),!0,!1);return o.useEffect((()=>{t&&(i({height:t.viewportHeight,width:t.viewportWidth}),n({height:t.itemHeight,width:t.itemWidth}))}),[t,i,n]),e("div",{ref:a,style:Ah(!1),children:r})},ym=({children:r})=>{const t=o.useContext(ph),n=Fm("windowViewportRect"),i=Fm("itemDimensions"),a=$m("customScrollParent"),s=ju(n,a,!1);return o.useEffect((()=>{t&&(i({height:t.itemHeight,width:t.itemWidth}),n({offsetTop:0,visibleHeight:t.viewportHeight,visibleWidth:t.viewportWidth}))}),[t,n,i]),e("div",{ref:s,style:Ah(!1),children:r})},vm=o.memo((function({...t}){const n=$m("useWindowScroll"),o=$m("customScrollParent"),i=o||n?Em:Cm,a=o||n?ym:pm,s=$m("context");return e(i,{...t,...Mh(i,s),children:r(a,{children:[e(fm,{}),e(mm,{}),e(bm,{})]})})})),{Component:xm,useEmitter:wm,useEmitterValue:$m,usePublisher:Fm}=fh(hm,{events:{atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",endReached:"endReached",isScrolling:"isScrolling",rangeChanged:"rangeChanged",readyStateChanged:"readyStateChanged",startReached:"startReached",stateChanged:"stateChanged"},methods:{scrollBy:"scrollBy",scrollTo:"scrollTo",scrollToIndex:"scrollToIndex"},optional:{components:"components",computeItemKey:"computeItemKey",context:"context",customScrollParent:"customScrollParent",data:"data",headerFooterTag:"headerFooterTag",increaseViewportBy:"increaseViewportBy",initialItemCount:"initialItemCount",initialTopMostItemIndex:"initialTopMostItemIndex",itemClassName:"itemClassName",itemContent:"itemContent",listClassName:"listClassName",logLevel:"logLevel",overscan:"overscan",restoreStateFrom:"restoreStateFrom",scrollerRef:"scrollerRef",scrollSeekConfiguration:"scrollSeekConfiguration",totalCount:"totalCount",useWindowScroll:"useWindowScroll"}},vm),Cm=Rh({useEmitter:wm,useEmitterValue:$m,usePublisher:Fm}),Em=Hh({useEmitter:wm,useEmitterValue:$m,usePublisher:Fm});function Sm(e,r,t){return"normal"!==r&&!(null!=r&&r.endsWith("px"))&&t(`${e} was not resolved to pixel value correctly`,r,ku.WARN),"normal"===r?0:parseInt(null!=r?r:"0",10)}const Dm=e=>"small"===e?2.5:3;$.div`
    position: relative;
    width: 100%;
    ${e=>{const r=Dm(e.$variant);return F`
            min-height: ${r}rem;
            height: ${r}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`;const Bm=F`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${Ri["spacing-16"]};
    // exclude top and bottom borders
    height: calc(${e=>Dm(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${Hi.sm};
    border: none;
    background: transparent;

    &:focus,
    &:active {
        outline: none;
    }

    &:focus-visible {
        outline: 2px solid ${Mi["border-focus"]};
    }
`,km=$.button`
    ${Bm}
    cursor: pointer;
`;$.div`
    ${Bm}
`;const Om=E`
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
`;$.div`
    position: relative;
    border: ${_i["width-010"]} ${_i.solid} ${Mi.border};
    border-radius: ${Hi.sm};
    background: ${Mi.bg};
    overflow: hidden;

    &:focus-within {
        border-color: ${Mi["border-focus"]};
        box-shadow: 0px 0px 4px 0px
            rgb(from ${Mi["border-focus"]} r g b / 50%) inset; // TODO: confirm shadow
    }

    ${e=>e.$expanded?F`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:F`
                animation: ${Om} 0.5s ease-in-out;
            `}

    ${e=>e.$disabled?F`
                background: ${Mi["bg-disabled"]};

                ${km} {
                    cursor: not-allowed;
                }

                &:focus-within {
                    border-color: ${Mi.border};
                    box-shadow: none;
                }
            `:e.$readOnly?F`
                border: none;
                background: transparent !important;

                ${km} {
                    padding: 0;
                }

                &:focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.$error?F`
                border-color: ${Mi["border-error"]};

                &:focus-within {
                    border-color: ${Mi["border-error"]};
                    box-shadow: 0px 0px 4px 0px
                        rgb(from ${Mi["border-error"]} r g b / 50%) inset; // TODO: confirm shadow
                }
            `:void 0}
`,$.div`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${Li["duration-250"]} ${Li["ease-default"]};
    margin-left: ${Ri["spacing-16"]};
`,$(K)`
    color: ${Mi.icon};
`,$.div`
    height: 1px;
    background: ${Mi.border};
    margin: 0 ${Ri["spacing-8"]};
`;const Tm=$.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return F`
                color: ${Mi["text-disabled"]};
            `}}
`,zm=$.div`
    ${e=>"small"===e.$variant?ji["body-md-regular"]:ji["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.$truncateType)return F`
                    ${ta(1)}
                `}}
    overflow: hidden;
`,Am=$(zm)`
    color: ${Mi["text-subtler"]};
`,Im=e=>"right"===e?"bottom-end":"bottom-start",Mm=f({elementWidth:0,styles:{},setFloatingRef:()=>{},getFloatingProps:()=>({})}),jm=({enabled:n,isOpen:o,onOpen:i,onClose:l,onDismiss:d,renderElement:c,renderDropdown:u,customZIndex:h,clickToToggle:m=!1,offset:f=0,alignment:p="left",fitAvailableHeight:y,rootNode:v,positionRef:x})=>{var w;const $=b(S),F=Wi["sm-max"]({theme:$}),C=a(null),{width:E=0}=Er({targetRef:null!=x?x:C,handleHeight:!1}),D={name:"center",fn:({x:e,rects:r})=>{const t=0===e||e+r.floating.width===window.innerWidth,n=window.innerWidth<F;return{x:t&&n?(window.innerWidth-r.floating.width)/2:e}}},{refs:B,floatingStyles:O,context:T}=A({open:o,onOpenChange:(e,r,t)=>{"escape-key"===t?null==d||d():e&&!o?null==i||i():!e&&o&&(null==l||l(t))},whileElementsMounted:_,placement:Im(p),middleware:[R(f),H(),P({limiter:W()}),N({apply({availableHeight:e,elements:r}){!y||e>=r.floating.scrollHeight?r.floating.style.setProperty("--available-height",""):r.floating.style.setProperty("--available-height",`${Math.max(0,e)}px`)}}),D]}),z=(()=>{const[e,r]=s(void 0),t=k();return g((()=>{if(!t)return void r(void 0);const e=e=>{r(e.zIndex)};return t.events.on(ya.Change,e),t.events.emit(ya.Ready),()=>t.events.off(ya.Change,e)}),[t]),e})(),{isMounted:I,styles:q}=V(T,{initial:{opacity:0},open:{opacity:1},duration:300}),G=Y(T,{enabled:n,toggle:m,keyboardHandlers:m}),Z=M(T,{enabled:n}),{getReferenceProps:K,getFloatingProps:X}=j([G,Z]),Q={elementWidth:E,styles:Object.assign(Object.assign(Object.assign({},q),O),{zIndex:null!==(w=null!=h?h:z)&&void 0!==w?w:50}),setFloatingRef:B.setFloating,getFloatingProps:X};return r(t,{children:[e("div",Object.assign({ref:e=>{C.current=e,B.setReference(e)}},K(),{children:c()})),I&&e(U,{root:v,children:e(L,{context:T,modal:!1,initialFocus:-1,returnFocus:!1,children:e(Mm.Provider,{value:Q,children:u(Q)})})})]})},Lm=o.createContext({focusedIndex:-1,setFocusedIndex:()=>{}}),_m=({children:r})=>{const[t,n]=s(-1);return e(Lm.Provider,{value:{focusedIndex:t,setFocusedIndex:n},children:r})},Rm=F`
    outline-offset: -1px;
    outline: ${_i["width-020"]} ${_i.solid} ${Mi["border-focus"]};
`,Hm=F`
    outline-color: ${Mi["border-focus"]};
`,Pm=F`
    outline-color: ${Mi["border-disabled"]};
`,Wm=F`
    outline-color: ${Mi["border-error-focus"]};
`,Nm=F`
    outline: none;
`,Vm=$.div`
    border: ${_i["width-010"]} ${_i.solid} ${Mi.border};
    border-radius: ${Hi.sm};
    background: ${Mi.bg};

    &:focus-within {
        ${Rm}
    }
    ${e=>e.$focused&&!e.$noBorder&&Rm}

    ${e=>e.$readOnly?F`
                border-color: transparent;
                padding: 0;
                background: transparent !important;

                &:focus-within {
                    ${Hm}
                }
                ${e.$focused&&Hm}
            `:e.$disabled?F`
                background: ${Mi["bg-disabled"]};
                cursor: not-allowed;

                &:focus-within {
                    ${Pm}
                }
                ${e.$focused&&Pm}
            `:e.$error?F`
                border-color: ${Mi["border-error"]};

                &:focus-within {
                    ${Wm}
                }
                ${e.$focused&&Wm}
            `:void 0}
    ${e=>{if(e.$noBorder)return F`
                border-color: transparent;
                background: transparent;
                &:focus-within {
                    ${Nm}
                }
            `}}
`;$(Vm)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 ${Ri["spacing-16"]} 0
        ${e=>e.$readOnly?"0":Ri["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`;const Ym=$.input`
    ${e=>"small"===e.$variant?ji["body-md-regular"]:ji["body-baseline-regular"]}
    color: ${Mi.text};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    &:disabled {
        color: ${Mi["text-subtler"]};

        &:hover {
            cursor: not-allowed;
        }
    }

    &::placeholder,
    &::-webkit-input-placeholder {
        color: ${Mi["text-subtler"]};
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
`,Um=$.button`
    background: transparent;
    border: none;
    outline: none;

    &:focus,
    &:active {
        outline: none;
    }

    &:focus-visible {
        outline: ${_i["width-010"]} ${_i.solid}
            ${Mi["border-focus"]};
        border-radius: ${Hi.sm};
    }
`,qm=$.div`
    border: ${_i["width-010"]} ${_i.solid} ${Mi.border};
    border-radius: ${Hi.sm};
    background: ${Mi.bg};

    --x-spacing: 0px;
    --available-width: calc(100vw - var(--x-spacing) * 2);

    ${Ni.MaxWidth.sm} {
        --x-spacing: ${Wi["sm-margin"]}px;
        max-height: 15rem;
    }

    ${Ni.MaxWidth.xs} {
        --x-spacing: ${Wi["xs-margin"]}px;
    }

    ${Ni.MaxWidth.xxs} {
        --x-spacing: ${Wi["xxs-margin"]}px;
    }

    max-width: var(--available-width);

    ${e=>e.$customWidth?`width: ${e.$customWidth};`:e.$width?`width: ${e.$width}px; min-width: min(23rem, var(--available-width));`:"min-width: min(23rem, var(--available-width));"}

    max-height: min(27rem, var(--available-height, infinity * 1px));
    overflow: hidden;
    overflow-y: auto;
    ${e=>"small"===e.$variant?ji["body-md-regular"]:ji["body-baseline-regular"]}

    &::-webkit-scrollbar {
        width: 14px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: ${Mi["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: ${Hi.full};
        background-clip: padding-box;
    }
`,Gm=$.div`
    background: transparent;
    padding: ${Ri["spacing-8"]};
`,Zm=$.ul`
    list-style-type: none;
`,Km=$.li`
    display: flex;
    align-items: flex-start;
    gap: ${Ri["spacing-8"]};
    padding: ${Ri["spacing-12"]} ${Ri["spacing-8"]};
    cursor: pointer;
    border: none;
    border-radius: ${Hi.none};
    outline: none;

    ${e=>e.$disabled?F`
                cursor: not-allowed;
            `:e.$active&&e.$selected?F`
                background: ${Mi["bg-hover"]};
            `:e.$active?F`
                background: ${Mi["bg-hover-subtle"]};
            `:void 0}
`,Xm=$(ee)`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
    color: ${Mi["icon-selected"]};
`,Qm=$.div`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
`,Jm=$(J)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Mi["icon-selected"]};
`,ef=$(X)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Mi["icon-primary-subtlest"]};
`,rf=$(Q)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Mi["icon-disabled-subtle"]};
`,tf=$.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`,nf=$(Um)`
    cursor: pointer;
    overflow: hidden;
    color: ${Mi["text-primary"]};
    font-size: inherit;
`,of=$(nf)`
    ${ji["body-baseline-semibold"]}
`,af=$(nf)`
    ${ji["body-md-semibold"]}
    padding: ${Ri["spacing-8"]} ${Ri["spacing-8"]};
`,sf=$.div`
    width: 100%;
    display: flex;
    padding: ${Ri["spacing-12"]} ${Ri["spacing-16"]};
    align-items: center;
`,lf=$(Z)`
    margin-right: ${Ri["spacing-4"]};
    color: ${Mi["icon-error"]};
    height: 1em;
    width: 1em;
`,df=$(Ka)`
    margin-right: ${Ri["spacing-8"]};
    color: ${Mi.icon};
`,cf=$.div`
    ${fa()}
    color: ${Mi["text-subtle"]};
    padding: 0 ${Ri["spacing-16"]} ${Ri["spacing-12"]}
        ${Ri["spacing-16"]};
`,uf=$.div`
    background: ${Mi["bg-strong"]};
    border-radius: ${Hi.sm};
    display: flex;
    align-items: center;

    ${e=>"small"===e.$variant?ji["body-md-regular"]:ji["body-baseline-regular"]}
`,gf=$.label`
    flex: 1;
    display: flex;
    align-items: center;
    gap: ${Ri["spacing-8"]};
    padding: ${e=>"small"===e.$variant?F`
                  ${Ri["spacing-8"]} ${Ri["spacing-16"]}
              `:F`10px ${Ri["spacing-8"]}`};
`,hf=$(Ym)`
    flex: 1;
`,mf=$(re)`
    color: ${Mi.icon};
    flex-shrink: 0;
    height: 1em;
    width: 1em;
`,ff=$(ga)`
    flex-shrink: 0;
    align-self: stretch;
    box-sizing: content-box;
    padding: ${Ri["spacing-8"]};
    margin-left: -${Ri["spacing-8"]};
    color: ${Mi.icon};
    cursor: pointer;
    font-size: inherit;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`,bf=v(((t,n)=>{var{value:o,variant:i,onClear:a}=t,s=ne(t,["value","variant","onClear"]);return r(uf,{$variant:i,children:[r(gf,{$variant:i,children:[e(mf,{"aria-hidden":!0}),e(hf,Object.assign({ref:n,value:o,$variant:i},s))]}),o&&e(ff,{"aria-label":"Clear search",focusOutline:"browser",onClick:a,children:e(B,{"aria-hidden":!0})})]})})),pf=v((({listItems:n,multiSelect:o,maxSelectable:i,selectedItems:l,disableItemFocus:d,itemsLoadState:c="success",itemTruncationType:u="end",itemMaxLines:h=2,labelDisplayType:f="inline",variant:p="default",listboxId:y,ariaLabel:v,matchElementWidth:w=!1,width:$,topScrollItem:F,onSelectItem:C,onSelectAll:E,onDismiss:S,onRetry:D,valueExtractor:B,listExtractor:k,renderListItem:O,renderCustomCallToAction:T,enableSearch:z,hideNoResultsDisplay:A,noResultsDescription:I,customLabels:M,searchPlaceholder:j,searchFunction:L,onSearch:_},R)=>{const{noResultsLabel:H="No results found.",selectAllButtonLabel:P="Select all",clearAllButtonLabel:W="Clear all"}=M||{},N=(null==M?void 0:M.searchPlaceholder)||j||"Search",V=(null==M?void 0:M.noResultsDescription)||I,{focusedIndex:Y,setFocusedIndex:U}=b(Lm),{elementWidth:q,setFloatingRef:G,getFloatingProps:Z,styles:K}=b(Mm),[X,Q]=s(""),[J,ee]=s(null!=n?n:[]),re=Br(c),te=(()=>{const[e,r]=s(!1);return g((()=>{r(!0)}),[]),e})(),ne=a(null),oe=a(null),ie=a([]),ae=a(null),se=a(null),le=!!i&&!!l&&(null==l?void 0:l.length)===i,de=e=>{const r=k?k(e):null==e?void 0:e.toString();return"object"==typeof r?{title:r.title,secondaryLabel:r.secondaryLabel}:{title:null!=r?r:""}},ce=m((e=>!!Vc(l,(r=>Uc(r,e)))),[l]),ue=Sr((()=>null==L?void 0:L(X))),ge=Sr((()=>null==n?void 0:n.filter((e=>{const{title:r,secondaryLabel:t}=de(e),n=X.trim().toLowerCase();return r.toLowerCase().includes(n)||t&&t.toLowerCase().includes(n)})))),he=m((e=>{var r,t;if(d)return;if(ae.current)return U(-1),void setTimeout((()=>{var e;return null===(e=ae.current)||void 0===e?void 0:e.focus()}),0);const n=null!=J?J:[];if(0===n.length)return;if(void 0!==(null==e?void 0:e.index)){const t=Math.max(0,Math.min(e.index,n.length-1));return null===(r=se.current)||void 0===r||r.scrollToIndex({index:t,align:"center"}),U(t),void setTimeout((()=>{var e;return null===(e=ie.current[t])||void 0===e?void 0:e.focus()}),0)}const o=(null==e?void 0:e.preferSelected)?n.findIndex((e=>ce(e))):-1,i=-1!==o?o:Y>=0&&Y<n.length?Y:0;null===(t=se.current)||void 0===t||t.scrollToIndex({index:i,align:"center"}),U(i),setTimeout((()=>{var e;return null===(e=ie.current[i])||void 0===e?void 0:e.focus()}),0)}),[ce,d,J,Y,U]),me=(e,r)=>{le&&!ce(e)||(U(r),null==C||C(e,(e=>B?B(e):e)(e)))},fe=e=>{const r=e.target.value;Q(r),null==_||_()},be=()=>{var e;Q(""),null===(e=ae.current)||void 0===e||e.focus(),null==_||_()},pe=()=>null==D?void 0:D();((e,r,t="window",n)=>{const o=a();g((()=>{o.current=r}),[r]),g((()=>{let r;switch(t){case"window":r=window;break;case"document":r=document;break;default:r=t}if(!r||!r.addEventListener)return;const i=e=>{var r;return null===(r=o.current)||void 0===r?void 0:r.call(o,e)};return r.addEventListener(e,i,n),()=>{null==r||r.removeEventListener(e,i,n)}}),[e,t])})("keydown",(e=>{var r,t;switch(e.code){case"ArrowDown":if(e.preventDefault(),Y<J.length-1){const e=Y+1;null===(r=ie.current[e])||void 0===r||r.focus(),U(e)}break;case"ArrowUp":if(e.preventDefault(),Y>0){const e=Y-1;null===(t=ie.current[e])||void 0===t||t.focus(),U(e)}else 0===Y&&ae.current&&(ae.current.focus(),U(-1));break;case"Space":case"Enter":document.activeElement===ie.current[Y]&&(e.preventDefault(),J[Y]&&me(J[Y],Y))}})),x(R,(()=>({refocus:he})),[he]),g((()=>{var e;if(!F)return void(null===(e=se.current)||void 0===e||e.scrollTo({top:0}));const r=setTimeout((()=>{if(!n)return;const e=n.indexOf(F);se.current&&-1!==e&&(se.current.scrollToIndex({index:e}),U(e))}),0);return()=>clearTimeout(r)}),[ie,n,U,F]),g((()=>{d||te&&re&&"success"===c&&ae.current&&(U(-1),ae.current.focus())}),[te,re,c,U,d]),g((()=>{var e;ee(null!==(e=""===X?n:L?ue():ge())&&void 0!==e?e:[])}),[ue,ge,n,L,X]),g((()=>{var e,r,t;if(te)return;if(d||!n)return;const o=n.findIndex((e=>ce(e)));ae.current?(U(-1),setTimeout((()=>{var e;return null===(e=ae.current)||void 0===e?void 0:e.focus()}),200)):Y>0?(null===(e=se.current)||void 0===e||e.scrollToIndex({index:Y,align:"center"}),setTimeout((()=>{var e;return null===(e=ie.current[Y])||void 0===e?void 0:e.focus()}),200)):-1!==o?(null===(r=se.current)||void 0===r||r.scrollToIndex({index:o,align:"center"}),U(o),setTimeout((()=>{var e;return null===(e=ie.current[o])||void 0===e?void 0:e.focus()}),200)):(null===(t=se.current)||void 0===t||t.scrollToIndex({index:0}),U(0),setTimeout((()=>{var e;return null===(e=ie.current[0])||void 0===e?void 0:e.focus()}),200))}),[ce,d,Y,n,te,U]);const ye=r=>o?e(le&&!r?rf:r?Jm:ef,{"aria-hidden":!0}):r?e(Xm,{"aria-hidden":!0}):e(Qm,{}),ve=(r,t)=>{const{title:n,secondaryLabel:o}=de(r);return e(gs,{displayType:f,label:n,maxLines:h,selected:t,disabled:!t&&le,sublabel:o,truncationType:u,variant:p})},xe=(n,i)=>{if(!D||"success"===c){const a=ce(n),s=i===Y;return e(Km,{"aria-selected":a,"aria-multiselectable":o,"aria-disabled":!a&&le,"aria-posinset":i+1,"aria-setsize":null==J?void 0:J.length,"data-testid":"list-item",onClick:()=>me(n,i),onMouseEnter:()=>(e=>U(e))(i),ref:e=>{ie.current[i]=e},role:"option",tabIndex:s?0:-1,$active:s,$selected:a,$disabled:!a&&le,children:O?O(n,{selected:a}):r(t,{children:[ye(a),ve(n,a)]})},((e,r)=>`item_${r}__${B?B(e):e}`)(n,i))}},we=()=>{if((z||L)&&"success"===c)return e(bf,{ref:ae,onChange:fe,value:X,placeholder:N,"data-testid":"search-input","aria-label":"Enter text to search",onClear:be,variant:p})},$e=()=>{if(l&&o&&J.length>0&&!X&&"success"===c)return e(tf,{children:e(af,{onClick:E,type:"button",$variant:p,children:i||0!==l.length?W:P})})},Fe=()=>{if(!A&&(X||!z)&&0===J.length&&"success"===c)return r(t,{children:[r(sf,{"data-testid":"list-no-results",children:[e(lf,{"data-testid":"no-result-icon"}),H]}),V&&e(cf,{"data-testid":"no-result-desc",children:V})]})},Ce=()=>{if(D&&"loading"===c)return r(sf,{"data-testid":"list-loading",children:[e(df,{}),"Loading..."]})},Ee=()=>{if(D&&"fail"===c)return r(sf,{"data-testid":"list-fail",children:[e(lf,{"data-testid":"load-error-icon"}),"Failed to load. ",e(of,{onClick:pe,type:"button",$variant:p,children:"Try again."})]})},Se=()=>{var r;const t="test"===process.env.NODE_ENV;return e(Zm,{role:"listbox",id:y,children:e(Xh,Object.assign({ref:se,style:{height:"100%"},data:J,customScrollParent:null!==(r=ne.current)&&void 0!==r?r:void 0,itemContent:(e,r)=>xe(r,e)},t?{initialItemCount:J.length}:{}),t?J.length:void 0)})};return r(qm,Object.assign({"data-testid":"dropdown-container",ref:Be(ne,G),style:K},Z(),{$width:w?q:void 0,$customWidth:$,$variant:p,children:[e(os,{role:"status",children:v}),r(Gm,{ref:oe,"data-testid":"dropdown-list",role:"group","aria-label":v,children:[we(),$e(),Fe(),Ce(),Ee(),Se()]}),(()=>{if(T)return e("div",{"data-testid":"custom-cta",children:T(S,J)})})()]}))})),yf=$(Um)`
    display: flex;
    align-items: center;
    gap: ${Ri["spacing-8"]};
    width: 100%;
    padding: ${e=>e.$readOnly?`0 ${Ri["spacing-16"]}`:Ri["spacing-16"]};

    ${e=>"small"===e.$variant?F`
                  ${ji["body-md-regular"]}
                  height: calc(2.5rem - 2px); // exclude top and bottom borders
              `:F`
                  ${ji["body-baseline-regular"]}
                  height: calc(3rem - 2px);
              `}

    &:disabled {
        cursor: not-allowed;
    }

    &:focus-visible {
        outline: 2px solid ${Mi["focus-ring"]};
        outline-offset: -2px;
    }
`,vf=$.div`
    display: flex;
    align-items: center;
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${Li["duration-250"]} ${Li["ease-default"]};

    svg {
        color: ${Mi.icon};
        height: 1em;
        width: 1em;
    }
`,xf=v(((t,n)=>{var{children:o,disabled:i,expanded:a,listboxId:s,popupRole:l,readOnly:d,variant:c}=t,u=ne(t,["children","disabled","expanded","listboxId","popupRole","readOnly","variant"]);return r(yf,Object.assign({ref:n,type:"button",role:"combobox","aria-expanded":a,"aria-haspopup":l,"aria-controls":a?s:void 0,"data-testid":"selector","aria-disabled":i,"aria-readonly":d,$variant:c,$readOnly:d},u,{children:[o,!d&&e(vf,{$expanded:a,$variant:c,children:e(K,{"aria-hidden":!0})})]}))}));$.li`
    display: ${e=>e.$visible?"flex":"none"};
`,$.div`
    flex: 1;
    display: flex;
    align-items: flex-start;
    gap: ${Ri["spacing-8"]};
    padding: ${Ri["spacing-12"]} ${Ri["spacing-8"]};
    cursor: ${e=>e.$toggleable?"default":"pointer"};
    overflow: hidden; // required for label to truncate properly
    border-radius: ${Hi.none};
    outline: none;

    ${e=>e.$active&&F`
            background: ${Mi["bg-hover"]};
        `}
`,$.div`
    height: 1px;
    width: calc((1lh + ${Ri["spacing-8"]}) * ${e=>e.$level});
`,$.div`
    width: 1lh;
    height: 1lh;
    color: ${Mi["icon-primary"]};
    cursor: pointer;

    svg {
        width: 1lh;
        height: 1lh;
        transition: transform ${Li["duration-350"]}
            ${Li["ease-standard"]};

        ${e=>{if(e.$expanded)return F`
                    transform: rotate(90deg);
                `}}
    }
`,$.div`
    width: 1lh;
    height: 1lh;
    margin-right: ${Ri["spacing-8"]};
`,$.div`
    flex-shrink: 0;
    height: 1lh;
    width: ${e=>e.$hasNestedSiblings?"1lh":Ri["spacing-16"]};

    display: flex;
    justify-content: center;
`,$(te)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Mi["icon-selected"]};
`;const wf=$(Ym)`
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders

    ${e=>"no-border"!==e.$styleType&&F`
            padding-left: ${e.$visuallyReadOnly?0:Ri["spacing-16"]};
            padding-right: ${e.$visuallyReadOnly||e.$showClear?0:Ri["spacing-16"]};
        `}
`,$f=$(Um)`
    height: auto;
    padding: ${Ri["spacing-12"]} ${Ri["spacing-16"]};

    cursor: pointer;
    color: ${Mi.icon};

    ${e=>"no-border"===e.$styleType&&F`
            margin-right: -${Ri["spacing-12"]};
        `}
`,Ff=$(B)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`,Cf=$.div`
    display: flex;
    width: 100%;
`,Ef=$(Vm)`
    display: flex;
    align-items: center;
    width: 100%;
`,Sf=o.forwardRef(((n,o)=>{var{value:i,spacing:s,type:l,error:d,disabled:c,readOnly:u,onChange:g,onClear:h,allowClear:m=!1,className:f,styleType:b="bordered"}=n,p=ne(n,["value","spacing","type","error","disabled","readOnly","onChange","onClear","allowClear","className","styleType"]);const y=((e,r)=>"tel"===e&&!!r)(l,s),v=a(null);x(o,(()=>v.current),[]);const w=Dr({ref:v,formatter:e=>y?Oe.transformWithSpaces(e,s):e}),$=e=>{g&&(y?C(e):g(e))},F=()=>{h&&h(),v&&v.current&&v.current.focus()},C=e=>{const r=w();if(!r)return;const{nextValue:t,updateCaretPosition:n}=r,o=t.replace(/\s/g,"");e.target.value=o,null==g||g(e),n()},E=i?(e=>e?y?Oe.transformWithSpaces(e,s):e:"")(i):i,S=m&&!c&&!u&&!!i,D=()=>r(t,{children:[e(wf,Object.assign({"data-testid":"input",ref:v,"aria-disabled":c,value:E,onChange:$,type:l,readOnly:u||c,$showClear:S,$styleType:b,$visuallyReadOnly:u},p)),S&&e($f,{onClick:F,type:"button","aria-label":"Clear input",$styleType:b,children:e(Ff,{"aria-hidden":!0})})]});return e(t,{children:"no-border"===b?e(Cf,{className:f,children:D()}):e(Ef,{$disabled:c,$error:d,$readOnly:u,className:f,children:D()})})})),Df=$(Vm)`
    display: flex;
    align-items: center;

    ${e=>"right"===e.$position?F`
                    flex-direction: row-reverse;
                `:F`
                    flex-direction: row;
                `}
`,Bf=$(xf)`
    ${e=>{if(e.$noBorder)return"right"===e.$position?F`
                        padding-right: 0;
                    `:F`
                        padding-left: 0;
                    `}}
`,kf=$.div`
    flex: 0 0 auto;
`,Of=$(Sf)`
    ${e=>e.readOnly?F`
                padding: 0;
            `:e.$noBorder?"right"===e.$position?F`
                        padding-left: 0;
                    `:F`
                        padding-right: 0;
                    `:"right"===e.$position?F`
                    padding-left: ${Ri["spacing-16"]};
                `:F`
                    padding-right: ${Ri["spacing-16"]};
                `}
`,Tf=$.div`
    padding: 10px 0; // TODO: confirm vertical spacing
    display: flex;
    align-items: center;
    padding: 0;
    background: transparent;
    margin-right: ${Ri["spacing-12"]};
    color: ${Mi.text};
`,zf=$.div`
    width: 1px;
    background: ${Mi.border};
    flex-shrink: 0;
    height: 1.25rem;

    ${e=>{if(e.$readOnly)return F`
                display: none;
            `}}

    ${e=>"right"===e.$position?F`
                    margin-left: ${Ri["spacing-12"]};
                `:F`
                    margin-right: ${Ri["spacing-12"]};
                `}
`,Af=o.forwardRef(((t,n)=>{var{addon:o,error:i,onChange:l,readOnly:d,disabled:c,className:u,onBlur:h,noBorder:m,"data-testid":f,"aria-labelledby":b,"aria-describedby":p,"aria-invalid":y,"aria-label":v}=t,x=ne(t,["addon","error","onChange","readOnly","disabled","className","onBlur","noBorder","data-testid","aria-labelledby","aria-describedby","aria-invalid","aria-label"]);const{valueExtractor:w,listExtractor:$,enableSearch:F,hideNoResultsDisplay:C,noResultsDescription:E,searchPlaceholder:S,searchFunction:D,onSearch:B,placeholder:k="Select",displayValueExtractor:O,"data-selector-testid":T,options:z,selectedOption:A,onSelectOption:I,optionsLoadState:M,optionTruncationType:j,onRetry:L,onHideOptions:_,onShowOptions:R,dropdownZIndex:H,dropdownRootNode:P,"aria-label":W}=o.attributes,{position:N}=o,[V,Y]=s(A),[U,q]=s(!1),[G,Z]=s(!1),[K]=s((()=>ke.generate())),X=`${K}-listbox`,Q=`${K}-instruction`,J=`${K}-combobox-label`,ee=`${K}-textbox-label`,re=a(null),te=a(null);g((()=>{Y(A)}),[A]);const oe=()=>{if(V)return O?O(V):w?w(V):V.toString()},ie=e=>{e?null==R||R():null==_||_()},ae=(e,r)=>{var t;null===(t=te.current)||void 0===t||t.focus(),Y(e),q(!1),ie(!1),null==I||I(e,r)},se=()=>{U&&(q(!1),ie(!1))},le=()=>{q(!0),ie(!0),Z(!0)},de=e=>{q(!1),ie(!1),"click"!==e&&(Z(!1),null==h||h())},ce=()=>{var e;null===(e=te.current)||void 0===e||e.focus(),q(!1),ie(!1)},ue=()=>r("div",{children:[e(Bf,{ref:te,disabled:c,expanded:U,listboxId:X,popupRole:"listbox",readOnly:d,"aria-labelledby":is(b,J),"aria-describedby":is(p,Q),"aria-invalid":y,$noBorder:m,$position:N,children:e(Tm,{$disabled:c,children:V?e(zm,{children:oe()}):e(Am,{children:k})})}),e(os,{id:Q,children:"Press space to open options"})]}),ge=()=>e(pf,{listboxId:X,listItems:z,onSelectItem:ae,onDismiss:se,valueExtractor:w,listExtractor:$,enableSearch:F,hideNoResultsDisplay:C,noResultsDescription:E,searchPlaceholder:S,searchFunction:D,onSearch:B,selectedItems:V?[V]:[],itemsLoadState:M,itemTruncationType:j,onRetry:L,matchElementWidth:!0});return e(_m,{children:r(Df,{$focused:G,$disabled:c,$readOnly:d,$error:i,$position:N,ref:re,className:u,"data-testid":f,$noBorder:m,tabIndex:-1,onFocus:()=>{G||U||Z(!0)},onBlur:e=>{G&&!U&&re.current&&!re.current.contains(e.relatedTarget)&&(Z(!1),null==h||h())},children:[e(os,{"aria-hidden":!0,id:J,children:W}),e(kf,{"data-testid":T,children:d?V?e(Tf,{"data-testid":"selector-label",tabIndex:0,role:"combobox","aria-haspopup":"listbox","aria-readonly":!0,"aria-expanded":!1,"aria-labelledby":b,"aria-describedby":p,"aria-invalid":y,children:e(zm,{children:oe()})}):null:e(jm,{enabled:!d&&!c,isOpen:U,renderElement:ue,renderDropdown:ge,onOpen:le,onClose:de,onDismiss:ce,clickToToggle:!0,offset:8,alignment:"right"===N?"right":"left",fitAvailableHeight:!0,customZIndex:H,rootNode:P,positionRef:re})}),e(zf,{$readOnly:d,$position:N}),e(os,{"aria-hidden":!0,id:ee,children:v}),e(Of,Object.assign({ref:n},x,{$position:N,$noBorder:m,readOnly:d,disabled:c,error:i,onChange:e=>{l&&l(e)},"data-testid":"input",styleType:"no-border","aria-labelledby":is(b,ee),"aria-describedby":p,"aria-invalid":y}))]})})})),If=$(Vm)`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0
        ${e=>e.$readOnly||e.$noBorder?"0":Ri["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,Mf=$(Vm)`
    display: flex;
    position: relative;
    width: 100%;
    padding: 0
        ${e=>e.$readOnly||e.$noBorder?"0":Ri["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,jf=$(Sf)``,Lf=$.div`
    position: relative;
    display: flex;
    align-items: center;

    ${ji["body-baseline-regular"]}
    color: ${Mi.text};

    /* SVG Icon */
    svg {
        height: 1em;
        width: 1em;
    }

    ${e=>{if(e.$disabled)return F`
                color: ${Mi["text-subtler"]};
            `}}

    ${e=>"right"===e.$position?F`
                    margin-left: ${e.$readOnly?Ri["spacing-4"]:Ri["spacing-12"]};
                `:F`
                    margin-right: ${e.$readOnly?Ri["spacing-4"]:Ri["spacing-12"]};
                `};
`,_f=o.forwardRef(((t,n)=>{var{addon:o,error:i,className:a}=t,s=ne(t,["addon","error","className"]);const l=()=>e(Mf,{$disabled:s.disabled,$error:i,$readOnly:s.readOnly,"data-testid":s["data-testid"],className:a,$noBorder:s.noBorder,children:e(jf,Object.assign({ref:n},s,{"data-testid":"input",styleType:"no-border"}))});if(!o)return l();{const{type:t="label",position:d="left"}=o,{allowClear:c}=s;switch(t){case"list":{const r=o.attributes;return r.options&&r.options.length>0?e(Af,Object.assign({ref:n,addon:o,error:i,className:a,noBorder:s.noBorder},s)):l()}case"custom":{const t=o.attributes;return t.children?r(If,{$error:i,$disabled:s.disabled,$readOnly:s.readOnly,"data-testid":s["data-testid"],$position:d,className:a,$noBorder:s.noBorder,children:[e(Lf,{"data-testid":"addon",$disabled:s.disabled,$readOnly:s.readOnly,$position:d,children:t.children}),e(jf,Object.assign({ref:n},s,{allowClear:c&&"right"!==d,error:i,"data-testid":"input",styleType:"no-border"}))]}):l()}default:{const t=o.attributes;return t.value?r(If,{$disabled:s.disabled,$error:i,$readOnly:s.readOnly,"data-testid":s["data-testid"],$position:d,className:a,$noBorder:s.noBorder,children:[e(Lf,{"data-testid":"addon",$disabled:s.disabled,$readOnly:s.readOnly,$position:d,children:t.value}),e(jf,Object.assign({ref:n},s,{allowClear:c&&"right"!==d,error:i,"data-testid":"input",styleType:"no-border"}))]}):l()}}}}));var Rf=function(e,r,t,n){var o=-1,i=null==e?0:e.length;for(n&&i&&(t=e[++o]);++o<i;)t=r(t,e[o],o,e);return t};var Hf=function(e){return function(r,t,n){for(var o=-1,i=Object(r),a=n(r),s=a.length;s--;){var l=a[e?s:++o];if(!1===t(i[l],l,i))break}return r}},Pf=Hf(),Wf=Kl;var Nf=Ul;var Vf=function(e,r){return function(t,n){if(null==t)return t;if(!Nf(t))return e(t,n);for(var o=t.length,i=r?o:-1,a=Object(t);(r?i--:++i<o)&&!1!==n(a[i],i,a););return t}}((function(e,r){return e&&Pf(e,r,Wf)}));var Yf=Rf,Uf=Vf,qf=$c,Gf=function(e,r,t,n,o){return o(e,(function(e,o,i){t=n?(n=!1,e):r(t,e,o,i)})),t},Zf=zr;var Kf=ae((function(e,r,t){var n=Zf(e)?Yf:Gf,o=arguments.length<3;return n(e,qf(r),t,o,Uf)}));const Xf=[["Afghanistan",["asia"],"af","93"],["Albania",["europe"],"al","355"],["Algeria",["africa","north-africa"],"dz","213"],["Andorra",["europe"],"ad","376"],["Angola",["africa"],"ao","244"],["Antigua and Barbuda",["america","carribean"],"ag","1268"],["Argentina",["america","south-america"],"ar","54","(..) ........"],["Armenia",["asia","ex-ussr"],"am","374",".. ......"],["Aruba",["america","carribean"],"aw","297"],["Australia",["oceania"],"au","61","(..) .... ...."],["Austria",["europe","eu-union"],"at","43"],["Azerbaijan",["asia","ex-ussr"],"az","994","(..) ... .. .."],["Bahamas",["america","carribean"],"bs","1242"],["Bahrain",["middle-east"],"bh","973"],["Bangladesh",["asia"],"bd","880"],["Barbados",["america","carribean"],"bb","1246"],["Belarus",["europe","ex-ussr"],"by","375","(..) ... .. .."],["Belgium",["europe","eu-union"],"be","32","... .. .. .."],["Belize",["america","central-america"],"bz","501"],["Benin",["africa"],"bj","229"],["Bhutan",["asia"],"bt","975"],["Bolivia",["america","south-america"],"bo","591"],["Bosnia and Herzegovina",["europe","ex-yugos"],"ba","387"],["Botswana",["africa"],"bw","267"],["Brazil",["america","south-america"],"br","55","(..) ........."],["British Indian Ocean Territory",["asia"],"io","246"],["Brunei",["asia"],"bn","673"],["Bulgaria",["europe","eu-union"],"bg","359"],["Burkina Faso",["africa"],"bf","226"],["Burundi",["africa"],"bi","257"],["Cambodia",["asia"],"kh","855"],["Cameroon",["africa"],"cm","237"],["Canada",["america","north-america"],"ca","1","(...) ... ...."],["Cape Verde",["africa"],"cv","238"],["Caribbean Netherlands",["america","carribean"],"bq","599",""],["Central African Republic",["africa"],"cf","236"],["Chad",["africa"],"td","235"],["Chile",["america","south-america"],"cl","56"],["China",["asia"],"cn","86",".. ........."],["Colombia",["america","south-america"],"co","57","... ... ...."],["Comoros",["africa"],"km","269"],["Congo",["africa"],"cd","243"],["Congo",["africa"],"cg","242"],["Costa Rica",["america","central-america"],"cr","506",".... ...."],["Côte d’Ivoire",["africa"],"ci","225",".. .. .. .."],["Croatia",["europe","eu-union","ex-yugos"],"hr","385"],["Cuba",["america","carribean"],"cu","53"],["Curaçao",["america","carribean"],"cw","599",""],["Cyprus",["europe","eu-union"],"cy","357",".. ......"],["Czech Republic",["europe","eu-union"],"cz","420","... ... ..."],["Denmark",["europe","eu-union","baltic"],"dk","45",".. .. .. .."],["Djibouti",["africa"],"dj","253"],["Dominica",["america","carribean"],"dm","1767"],["Dominican Republic",["america","carribean"],"do","1",""],["Ecuador",["america","south-america"],"ec","593"],["Egypt",["africa","north-africa"],"eg","20"],["El Salvador",["america","central-america"],"sv","503",".... ...."],["Equatorial Guinea",["africa"],"gq","240"],["Eritrea",["africa"],"er","291"],["Estonia",["europe","eu-union","ex-ussr","baltic"],"ee","372",".... ......"],["Ethiopia",["africa"],"et","251"],["Fiji",["oceania"],"fj","679"],["Finland",["europe","eu-union","baltic"],"fi","358",".. ... .. .."],["France",["europe","eu-union"],"fr","33",". .. .. .. .."],["French Guiana",["america","south-america"],"gf","594"],["French Polynesia",["oceania"],"pf","689"],["Gabon",["africa"],"ga","241"],["Gambia",["africa"],"gm","220"],["Georgia",["asia","ex-ussr"],"ge","995"],["Germany",["europe","eu-union","baltic"],"de","49",".... ........"],["Ghana",["africa"],"gh","233"],["Greece",["europe","eu-union"],"gr","30"],["Grenada",["america","carribean"],"gd","1473"],["Guadeloupe",["america","carribean"],"gp","590","",0],["Guam",["oceania"],"gu","1671"],["Guatemala",["america","central-america"],"gt","502",".... ...."],["Guinea",["africa"],"gn","224"],["Guinea-Bissau",["africa"],"gw","245"],["Guyana",["america","south-america"],"gy","592"],["Haiti",["america","carribean"],"ht","509",".... ...."],["Honduras",["america","central-america"],"hn","504"],["Hong Kong",["asia"],"hk","852",".... ...."],["Hungary",["europe","eu-union"],"hu","36"],["Iceland",["europe"],"is","354","... ...."],["India",["asia"],"in","91","..... ....."],["Indonesia",["asia"],"id","62"],["Iran",["middle-east"],"ir","98","... ... ...."],["Iraq",["middle-east"],"iq","964"],["Ireland",["europe","eu-union"],"ie","353",".. ......."],["Israel",["middle-east"],"il","972","... ... ...."],["Italy",["europe","eu-union"],"it","39","... ......."],["Jamaica",["america","carribean"],"jm","1876"],["Japan",["asia"],"jp","81",".. .... ...."],["Jordan",["middle-east"],"jo","962"],["Kazakhstan",["asia","ex-ussr"],"kz","7","... ... .. .."],["Kenya",["africa"],"ke","254"],["Kiribati",["oceania"],"ki","686"],["Kosovo",["europe","ex-yugos"],"xk","383"],["Kuwait",["middle-east"],"kw","965"],["Kyrgyzstan",["asia","ex-ussr"],"kg","996","... ... ..."],["Laos",["asia"],"la","856"],["Latvia",["europe","eu-union","ex-ussr","baltic"],"lv","371",".. ... ..."],["Lebanon",["middle-east"],"lb","961"],["Lesotho",["africa"],"ls","266"],["Liberia",["africa"],"lr","231"],["Libya",["africa","north-africa"],"ly","218"],["Liechtenstein",["europe"],"li","423"],["Lithuania",["europe","eu-union","ex-ussr","baltic"],"lt","370"],["Luxembourg",["europe","eu-union"],"lu","352"],["Macau",["asia"],"mo","853"],["Macedonia",["europe","ex-yugos"],"mk","389"],["Madagascar",["africa"],"mg","261"],["Malawi",["africa"],"mw","265"],["Malaysia",["asia"],"my","60",".. .... ...."],["Maldives",["asia"],"mv","960"],["Mali",["africa"],"ml","223"],["Malta",["europe","eu-union"],"mt","356"],["Marshall Islands",["oceania"],"mh","692"],["Martinique",["america","carribean"],"mq","596"],["Mauritania",["africa"],"mr","222"],["Mauritius",["africa"],"mu","230"],["Mexico",["america","central-america"],"mx","52","... ... ...."],["Micronesia",["oceania"],"fm","691"],["Moldova",["europe"],"md","373","(..) .. .. .."],["Monaco",["europe"],"mc","377"],["Mongolia",["asia"],"mn","976"],["Montenegro",["europe","ex-yugos"],"me","382"],["Morocco",["africa","north-africa"],"ma","212"],["Mozambique",["africa"],"mz","258"],["Myanmar",["asia"],"mm","95"],["Namibia",["africa"],"na","264"],["Nauru",["africa"],"nr","674"],["Nepal",["asia"],"np","977"],["Netherlands",["europe","eu-union"],"nl","31",".. ........"],["New Caledonia",["oceania"],"nc","687"],["New Zealand",["oceania"],"nz","64","... ... ...."],["Nicaragua",["america","central-america"],"ni","505"],["Niger",["africa"],"ne","227"],["Nigeria",["africa"],"ng","234"],["North Korea",["asia"],"kp","850"],["Norway",["europe","baltic"],"no","47","... .. ..."],["Oman",["middle-east"],"om","968"],["Pakistan",["asia"],"pk","92","... ......."],["Palau",["oceania"],"pw","680"],["Palestine",["middle-east"],"ps","970"],["Panama",["america","central-america"],"pa","507"],["Papua New Guinea",["oceania"],"pg","675"],["Paraguay",["america","south-america"],"py","595"],["Peru",["america","south-america"],"pe","51"],["Philippines",["asia"],"ph","63",".... ......."],["Poland",["europe","eu-union","baltic"],"pl","48","... ... ..."],["Portugal",["europe","eu-union"],"pt","351"],["Puerto Rico",["america","carribean"],"pr","1",""],["Qatar",["middle-east"],"qa","974"],["Réunion",["africa"],"re","262"],["Romania",["europe","eu-union"],"ro","40"],["Russia",["europe","asia","ex-ussr","baltic"],"ru","7","(...) ... .. .."],["Rwanda",["africa"],"rw","250"],["Saint Kitts and Nevis",["america","carribean"],"kn","1869"],["Saint Lucia",["america","carribean"],"lc","1758"],["Saint Vincent and the Grenadines",["america","carribean"],"vc","1784"],["Samoa",["oceania"],"ws","685"],["San Marino",["europe"],"sm","378"],["São Tomé and Príncipe",["africa"],"st","239"],["Saudi Arabia",["middle-east"],"sa","966"],["Senegal",["africa"],"sn","221"],["Serbia",["europe","ex-yugos"],"rs","381"],["Seychelles",["africa"],"sc","248"],["Sierra Leone",["africa"],"sl","232"],["Singapore",["asia"],"sg","65",".... ...."],["Slovakia",["europe","eu-union"],"sk","421"],["Slovenia",["europe","eu-union","ex-yugos"],"si","386"],["Solomon Islands",["oceania"],"sb","677"],["Somalia",["africa"],"so","252"],["South Africa",["africa"],"za","27"],["South Korea",["asia"],"kr","82","... .... ...."],["South Sudan",["africa","north-africa"],"ss","211"],["Spain",["europe","eu-union"],"es","34","... ... ..."],["Sri Lanka",["asia"],"lk","94"],["Sudan",["africa"],"sd","249"],["Suriname",["america","south-america"],"sr","597"],["Swaziland",["africa"],"sz","268"],["Sweden",["europe","eu-union","baltic"],"se","46","(...) ... ..."],["Switzerland",["europe"],"ch","41",".. ... .. .."],["Syria",["middle-east"],"sy","963"],["Taiwan",["asia"],"tw","886"],["Tajikistan",["asia","ex-ussr"],"tj","992"],["Tanzania",["africa"],"tz","255"],["Thailand",["asia"],"th","66"],["Timor-Leste",["asia"],"tl","670"],["Togo",["africa"],"tg","228"],["Tonga",["oceania"],"to","676"],["Trinidad and Tobago",["america","carribean"],"tt","1868"],["Tunisia",["africa","north-africa"],"tn","216"],["Turkey",["europe"],"tr","90","... ... .. .."],["Turkmenistan",["asia","ex-ussr"],"tm","993"],["Tuvalu",["asia"],"tv","688"],["Uganda",["africa"],"ug","256"],["Ukraine",["europe","ex-ussr"],"ua","380","(..) ... .. .."],["United Arab Emirates",["middle-east"],"ae","971"],["United Kingdom",["europe","eu-union"],"gb","44",".... ......"],["United States",["america","north-america"],"us","1","(...) ... ...."],["Uruguay",["america","south-america"],"uy","598"],["Uzbekistan",["asia","ex-ussr"],"uz","998",".. ... .. .."],["Vanuatu",["oceania"],"vu","678"],["Vatican City",["europe"],"va","39",".. .... ...."],["Venezuela",["america","south-america"],"ve","58"],["Vietnam",["asia"],"vn","84"],["Yemen",["middle-east"],"ye","967"],["Zambia",["africa"],"zm","260"],["Zimbabwe",["africa"],"zw","263"]],Qf=(e,r,t,n)=>t?e+"".padEnd(r.length,".")+" "+t:e+"".padEnd(r.length,".")+" "+n;var Jf;!function(e){e.getCountries=()=>[].concat(...Xf.map((e=>({name:e[0],regions:e[1],iso2:e[2],countryCode:e[3],format:Qf("+",e[3],e[4],"... ... ... ... ..")})))),e.formatNumber=(e="",r)=>{if(!r)return e;const t=e.replace(/[\s()]+/g,""),{format:n}=r,o=n.split(" ");o.shift();const i=o.join(" ");return Kf(i,((e,r)=>{if(0===e.remainingText.length)return e;if("."!==r)return{formattedText:e.formattedText+r,remainingText:e.remainingText};const t=e.remainingText.slice(0,1),n=e.remainingText.slice(1);return{formattedText:e.formattedText+t,remainingText:n}}),{formattedText:"",remainingText:t}).formattedText}}(Jf||(Jf={}));const eb=e=>e?e.replace("+",""):"",rb=e=>e?e.includes("+")?e:`+${e}`:"",tb=$.div`
    display: flex;
    flex-direction: column;
`,nb=$.div`
    display: flex;
`,ob=$.div`
    display: flex;
    align-items: center;
    width: ${e=>e.$isMaxWidth?"100%":"auto"};
    border-radius: ${Hi.sm} 0 0 ${Hi.sm};
    box-shadow: inset 1px 0 0 ${Mi.border},
        inset 0 1px 0 ${Mi.border}, inset 0 -1px 0 ${Mi.border};

    &:focus-within {
        box-shadow: inset 2px 0 0 ${Mi["border-focus"]},
            inset 0 2px 0 ${Mi["border-focus"]},
            inset 0 -2px 0 ${Mi["border-focus"]};
    }

    ${e=>e.$error?F`
                box-shadow: inset 1px 0 0 ${Mi["border-error"]},
                    inset 0 1px 0 ${Mi["border-error"]},
                    inset 0 -1px 0 ${Mi["border-error"]};

                &:focus-within {
                    box-shadow: inset 2px 0 0 ${Mi["border-error-focus"]},
                        inset 0 2px 0 ${Mi["border-error-focus"]},
                        inset 0 -2px 0 ${Mi["border-error-focus"]};
                }
            `:e.$disabled?F`
                box-shadow: inset 0 0 0 1px ${Mi.border};
                border-radius: ${Hi.sm};
                background: ${Mi["bg-disabled"]};
                color: ${Mi["text-disabled"]};
                &:focus-within {
                    box-shadow: inset 0 0 0 2px ${Mi.border};
                }

                /* Spacer to maintain width when disabled */
                ${!e.$isMaxWidth&&F`
                    &::after {
                        content: "";
                        min-width: 120px;
                        flex-shrink: 0;
                    }

                    /* Hide spacer on mobile to prevent text coverage */
                    ${Ni.MaxWidth.sm} {
                        &::after {
                            display: none;
                        }
                    }
                `}
            `:e.$readonly?F`
                box-shadow: none;
                border-radius: ${Hi.sm};
                &:focus-within {
                    box-shadow: inset 0 0 0 2px ${Mi["border-focus"]};
                }
            `:void 0}
`,ib=$.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 ${Ri["spacing-12"]};
    color: ${Mi["icon-success"]};
    flex-shrink: 0;

    svg {
        width: 1.25rem;
        height: 1.25rem;
    }
`,ab=$(ns.Default)`
    min-width: 120px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    flex-shrink: 0;
    ${Ni.MaxWidth.sm} {
        width: fit-content;
    }
`,sb=$(_f)`
    padding: 0 ${Ri["spacing-16"]};
    width: 100%;
    background: transparent;

    ${e=>e.disabled&&F`
            input {
                color: ${Mi["text-disabled"]};
            }
        `}

    ${e=>e.readOnly&&F`
            padding: 0;
        `}
`,lb=$((r=>{var{onChange:t,value:n,allowClear:o,onClear:i,onBlur:l,error:d,fixedCountry:c=!1,optionPlaceholder:u="Select",optionSearchPlaceholder:h,enableSearch:m,onHideOptions:f,onShowOptions:b,placeholder:p,autoComplete:y,noBorder:v=!1}=r,x=ne(r,["onChange","value","allowClear","onClear","onBlur","error","fixedCountry","optionPlaceholder","optionSearchPlaceholder","enableSearch","onHideOptions","onShowOptions","placeholder","autoComplete","noBorder"]);const[w]=s(Jf.getCountries()),[$,F]=s(void 0),[C,E]=s(""),S=a(null),D=Dr({ref:S,formatter:e=>Jf.formatNumber(e.replace(/[^0-9]/g,""),$)});g((()=>{const e=w.filter((e=>e.countryCode===eb(null==n?void 0:n.countryCode)))[0];F(e),E(Jf.formatNumber(null==n?void 0:n.number,e))}),[n]);const B=e=>{O(C,e),t&&k(C,e)},k=(e,r)=>{const n=Jf.formatNumber(e,r);null==t||t({number:n.replace(/[\s()]+/g,""),countryCode:r&&rb(r.countryCode)})},O=(e,r)=>{E(Jf.formatNumber(e,r)),F(r)};return e(_f,Object.assign({ref:S,value:C,onChange:()=>{const e=D();if(!e)return;const{nextValue:r,updateCaretPosition:n}=e;n(),O(r,$),t&&k(r,$)},allowClear:o&&!!C,onClear:()=>{i?i():E("")},onBlur:l,error:d,placeholder:p,addon:c?{type:"label",attributes:{value:rb(null==$?void 0:$.countryCode)}}:{type:"list",attributes:{"aria-label":"Country code",placeholder:u,options:w,selectedOption:$,enableSearch:m,searchPlaceholder:h,valueExtractor:e=>`+${e.countryCode}`,listExtractor:e=>({title:e.name,secondaryLabel:rb(e.countryCode)}),onSelectOption:B,onHideOptions:f,onShowOptions:b}},inputMode:"numeric",autoComplete:y,"aria-label":"Enter phone number",noBorder:v},x))}))`
    padding: 0 ${Ri["spacing-16"]};
    background: transparent;

    ${e=>e.disabled&&F`
            input {
                color: ${Mi["text-disabled"]};
            }
        `}

    ${e=>e.readOnly&&F`
            padding: 0;
            input {
                margin-left: ${Ri["spacing-12"]};
            }
        `}
`,db=({id:t,"data-testid":n,disabled:o,readOnly:i,inputId:a,type:s,sendOtpPlaceholder:l,emailValue:d,onEmailChange:c,phoneNumberValue:u,onPhoneNumberChange:g,fixedCountry:h,isLoading:m,isVerified:f,countdown:b,onSendOtp:p,onStateReset:y,sendOtpError:v})=>{const x=e=>{y(),"email"===s&&c&&c(e.target.value)},$=e=>{y(),"phone-number"===s&&g&&g(e)};return r(tb,{id:t,"data-testid":n,children:[r(nb,{children:[r(ob,{$isMaxWidth:"email"===s,$error:!!v,$disabled:o,$readonly:i,children:["email"===s?e(sb,{id:a,"data-testid":n?`${n}-contact-input`:void 0,placeholder:l||"Enter email",value:d,onChange:x,type:"email",noBorder:!0,"aria-invalid":!!v,"aria-required":!0,disabled:o,readOnly:i}):e(lb,{id:a,"data-testid":n?`${n}-contact-input`:void 0,placeholder:l||"Enter mobile number",value:u,onChange:$,noBorder:!0,fixedCountry:h,"aria-invalid":!!v,"aria-required":!0,disabled:o,readOnly:i}),f&&e(ib,{"aria-label":"Verified",role:"img",children:e(w,{})})]}),!o&&!i&&e(ab,{id:t?`${t}-contact-button`:void 0,type:"button","data-testid":n?`${n}-contact-button`:void 0,onClick:p,disabled:b.isRunning||f,loading:m,children:f?"Verified":m?"":b.isRunning?"Sent OTP":"Send OTP"})]}),v&&e(Na,{id:t?`${t}-contact-error`:void 0,"data-testid":n?`${n}-contact-error`:void 0,role:"alert",children:v})]})},cb=$.div`
    display: flex;
    flex-direction: column;
    gap: ${Ri["spacing-16"]};
`,ub=$.svg`
    .background-circle {
        fill: ${Mi["bg-stronger"]};
    }

    .primary-path {
        fill: ${Mi["icon-primary"]};
    }

    .validation-icon {
        fill: ${Mi["bg-available"]};
    }

    .accent-light-3 {
        fill: ${Mi["icon-primary-subtle"]};
    }

    .accent-light-4 {
        fill: ${Mi["icon-primary-subtlest"]};
    }
`,gb=({width:t=120,height:n=120,className:o})=>r(ub,{width:t,height:n,viewBox:"0 0 120 120",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:o,children:[r("g",{clipPath:"url(#clip0_email_icon)",children:[e("circle",{cx:"60",cy:"60",r:"60",className:"background-circle"}),e("path",{d:"M22.9744 60.2636L62.1602 72.5619C62.6183 72.7414 63.1075 72.7591 63.5596 72.638C64.0116 72.5169 64.4265 72.2569 64.7334 71.8724L92.5201 41.6289L52.1928 25.0006C51.2645 24.6309 50.2039 24.9151 49.5848 25.6994L22.9744 60.2636Z",className:"primary-path"}),e("path",{d:"M72.6935 18.8097L29.2275 30.4564C26.8325 31.0982 25.4042 33.5744 26.0465 35.9714L38.8689 83.8253C39.1907 85.026 40.4254 85.7396 41.6251 85.4182L89.4378 72.6068C90.6374 72.2854 91.3499 71.05 91.0282 69.8493L78.2058 21.9954C77.5635 19.5984 75.0929 18.1668 72.6935 18.8097Z",fill:"white"}),e("path",{d:"M64.7456 71.7935C64.4385 72.1773 64.0235 72.4369 63.5715 72.5581C63.1194 72.6792 62.6303 72.6618 62.1724 72.483L23 60.2346L33.4375 99.188C34.0777 101.577 36.5445 102.994 38.9439 102.352L99.7963 86.0462C102.196 85.4033 103.623 82.9425 102.983 80.5533L92.5457 41.5999L64.7456 71.7935Z",className:"accent-light-3"}),e("path",{d:"M99.8349 86.0769L38.9824 102.382C36.544 103.036 34.127 101.648 33.4768 99.2216C33.2926 98.5339 33.4491 97.7966 33.8965 97.2409L60.7012 66.8793C61.0084 66.4957 61.4233 66.2361 61.8754 66.115C62.3274 65.9939 62.8166 66.0112 63.2744 66.1898L101.669 79.0814C102.334 79.3389 102.838 79.8992 103.023 80.5869C103.673 83.0134 102.273 85.4235 99.8349 86.0769Z",className:"accent-light-4"}),e("path",{d:"M56.1874 49.1387L52.6167 47.0772C52.2767 46.8809 51.9109 46.8352 51.5193 46.9401C51.1288 47.0447 50.8354 47.2671 50.6391 47.6071C50.4263 47.9757 50.3723 48.3558 50.4772 48.7474C50.5819 49.1379 50.8155 49.4283 51.1781 49.6186L55.9386 52.3685C56.2844 52.5863 56.6531 52.6427 57.0447 52.5378C57.4352 52.4332 57.737 52.1971 57.9501 51.8295L63.423 42.35C63.6193 42.01 63.6666 41.65 63.5649 41.2703C63.4628 40.8894 63.2418 40.6009 62.9017 40.4045C62.5617 40.2082 62.1958 40.1625 61.8043 40.2674C61.4138 40.372 61.1204 40.5944 60.924 40.9344L56.1874 49.1387ZM61.0069 59.8842C59.152 60.3812 57.3145 60.4964 55.4942 60.2299C53.674 59.9633 51.9987 59.3883 50.4684 58.5048C48.9382 57.6213 47.6026 56.458 46.4616 55.0148C45.3206 53.5717 44.5017 51.9227 44.0046 50.0678C43.5076 48.2129 43.3924 46.3754 43.6589 44.5551C43.9255 42.7348 44.5005 41.0595 45.384 39.5293C46.2674 37.999 47.4308 36.6634 48.8739 35.5224C50.317 34.3814 51.966 33.5625 53.8208 33.0655C55.6757 32.5685 57.5132 32.4532 59.3335 32.7198C61.1537 32.9863 62.829 33.5613 64.3593 34.4448C65.8895 35.3283 67.2251 36.4917 68.3661 37.9348C69.5071 39.378 70.326 41.027 70.8231 42.8818C71.3201 44.7367 71.4353 46.5743 71.1688 48.3945C70.9023 50.2148 70.3272 51.8901 69.4438 53.4204C68.5603 54.9506 67.3969 56.2863 65.9538 57.4272C64.5107 58.5682 62.8617 59.3872 61.0069 59.8842Z",className:"validation-icon"})]}),e("defs",{children:e("clipPath",{id:"clip0_email_icon",children:e("rect",{width:"120",height:"120",fill:"white"})})})]}),hb=$.svg`
    .background-circle {
        fill: ${Mi["bg-stronger"]};
    }

    .primary-path {
        fill: ${Mi["icon-primary"]};
    }

    .validation-icon {
        fill: ${Mi["bg-available"]};
    }

    .accent-light {
        fill: ${Mi["bg-selected-stronger"]};
    }
`,mb=({width:t=120,height:n=120,className:o})=>r(hb,{width:t,height:n,viewBox:"0 0 120 120",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:o,children:[r("g",{clipPath:"url(#clip0_phone_icon)",children:[e("circle",{cx:"60",cy:"60.5",r:"60",className:"background-circle"}),e("path",{d:"M85.7091 99.047L56.9789 106.705C51.6167 108.134 46.0606 104.916 44.6318 99.5553L27.1393 33.9319C25.9969 29.6444 27.8244 25.2332 31.3437 22.9073C32.2263 22.3231 33.2151 21.8712 34.2899 21.5845L34.4374 21.5449L40.7667 19.8586L56.4455 15.6787L56.4545 15.6763L63.02 13.9267C68.3822 12.497 73.9383 15.715 75.3671 21.0761L92.8596 86.6995C94.2888 92.0619 91.0712 97.6172 85.7091 99.047Z",className:"primary-path"}),e("path",{d:"M90.0893 85.5165L72.9593 22.8765C72.8393 22.4365 72.6893 22.0165 72.5093 21.6165C72.0993 20.6965 71.5393 19.8765 70.8693 19.1765C70.2493 18.5365 69.5393 17.9865 68.7593 17.5665C66.8993 16.5465 64.6593 16.2165 62.4593 16.8065L58.8593 17.8765C58.8593 17.8765 58.8693 17.9065 58.8793 17.9265C59.2793 19.4065 58.8293 20.8265 57.8893 21.0665L42.2093 25.2365C41.3193 25.4765 40.3093 24.5765 39.8593 23.2265L36.0693 24.2365C31.5193 25.4465 28.7793 30.1665 29.9993 34.7265L30.3093 35.8765L32.1393 42.7565L35.8493 56.6765L36.8693 60.5165L38.1493 65.3165L47.0793 97.5165C48.2893 102.067 53.0093 104.807 57.5693 103.587L83.9993 95.9965C88.5493 94.7865 91.2893 90.0665 90.0693 85.5065L90.0893 85.5165ZM38.6893 26.3265L34.8993 27.3365C34.5793 27.4265 34.2493 27.2265 34.1593 26.9065C34.0693 26.5865 34.2693 26.2565 34.5893 26.1665L38.3793 25.1565C38.6993 25.0665 39.0293 25.2665 39.1193 25.5865C39.2093 25.9065 39.0093 26.2365 38.6893 26.3265ZM65.6893 19.3265L61.8993 20.3365C61.5793 20.4265 61.2493 20.2265 61.1593 19.9065C61.0693 19.5865 61.2693 19.2565 61.5893 19.1665L65.3793 18.1565C65.6993 18.0665 66.0293 18.2665 66.1193 18.5865C66.2093 18.9065 66.0093 19.2365 65.6893 19.3265Z",fill:"white"}),e("path",{d:"M55.1766 48.5674L51.606 46.5059C51.2659 46.3096 50.9001 46.2639 50.5086 46.3688C50.1181 46.4734 49.8247 46.6958 49.6283 47.0358C49.4155 47.4045 49.3616 47.7846 49.4665 48.1761C49.5711 48.5666 49.8047 48.857 50.1673 49.0473L54.9279 51.7972C55.2737 52.015 55.6424 52.0715 56.0339 51.9665C56.4244 51.8619 56.7262 51.6258 56.9393 51.2583L62.4123 41.7787C62.6086 41.4387 62.6559 41.0788 62.5541 40.699C62.4521 40.3181 62.231 40.0296 61.891 39.8332C61.5509 39.6369 61.1851 39.5912 60.7935 39.6961C60.403 39.8007 60.1096 40.0231 59.9133 40.3631L55.1766 48.5674ZM59.9961 59.3129C58.1413 59.8099 56.3037 59.9251 54.4835 59.6586C52.6632 59.392 50.988 58.817 49.4577 57.9335C47.9274 57.05 46.5918 55.8867 45.4509 54.4435C44.3099 53.0004 43.4909 51.3514 42.9939 49.4965C42.4969 47.6417 42.3817 45.8041 42.6482 43.9838C42.9147 42.1635 43.4897 40.4882 44.3732 38.958C45.2567 37.4277 46.42 36.0921 47.8631 34.9511C49.3063 33.8102 50.9552 32.9912 52.8101 32.4942C54.6649 31.9972 56.5025 31.8819 58.3227 32.1485C60.143 32.415 61.8183 32.99 63.3485 33.8736C64.8788 34.7571 66.2144 35.9204 67.3554 37.3635C68.4963 38.8067 69.3153 40.4557 69.8123 42.3105C70.3093 44.1654 70.4246 46.003 70.158 47.8233C69.8915 49.6435 69.3165 51.3188 68.433 52.8491C67.5495 54.3794 66.3862 55.715 64.9431 56.8559C63.5 57.9969 61.851 58.8159 59.9961 59.3129Z",className:"validation-icon"}),e("path",{d:"M76.5801 68.8601C77.3501 68.6501 77.8201 67.8501 77.6101 67.0801C77.4001 66.3101 76.6001 65.8401 75.8301 66.0501L49.0801 73.1601C48.3101 73.3701 47.8401 74.1701 48.0501 74.9401C48.2601 75.7101 49.0601 76.1801 49.8301 75.9701L76.5801 68.8601Z",className:"accent-light"}),e("path",{d:"M78.5098 76.1402C79.2798 75.9302 79.7498 75.1302 79.5398 74.3602C79.3298 73.5902 78.5298 73.1202 77.7598 73.3302L51.0098 80.4402C50.2398 80.6502 49.7698 81.4502 49.9798 82.2202C50.1898 82.9902 50.9898 83.4602 51.7598 83.2502L78.5098 76.1402Z",className:"accent-light"}),e("path",{d:"M81.6702 82.3401C81.4602 81.5701 80.6602 81.1001 79.8902 81.3101L53.1402 88.4201C52.3702 88.6301 51.9002 89.4301 52.1102 90.2001C52.3202 90.9701 53.1202 91.4401 53.8902 91.2301L80.6402 84.1201C81.4102 83.9101 81.8802 83.1101 81.6702 82.3401Z",className:"accent-light"})]}),e("defs",{children:e("clipPath",{id:"clip0_phone_icon",children:e("rect",{width:"120",height:"120",fill:"white"})})})]}),fb=$.div`
    display: flex;
    align-items: center;
    background-color: ${Mi["bg-strong"]};
    padding: ${Ri["spacing-16"]} ${Ri["spacing-32"]};
    gap: ${Ri["spacing-32"]};
    ${Ni.MaxWidth.sm} {
        flex-direction: column;
        align-items: start;
        gap: ${Ri["spacing-16"]};
        padding: ${Ri["spacing-16"]};
    }
`,bb=$.div`
    display: flex;
    flex-direction: column;
    gap: ${Ri["spacing-16"]};
`,pb=$(da.BodyMD)`
    color: ${Mi["text-subtlest"]};
`,yb=$.div`
    display: flex;
    gap: ${Ri["spacing-8"]};
    max-width: 472px;
`,vb=$(ns.Default)`
    flex-shrink: 0;
    width: 83px;
`,xb=({id:t,"data-testid":n,type:o,showVerifyOtpThumbnail:i=!1,verifyOtpTitle:a,verifyOtpMessage:s,otpCode:l,setOtpCode:d,isVerifyLoading:c,countdown:u,onVerifyOtp:g,verifyOtpError:h,otpPrefix:m,otpSeparator:f})=>{const p=b(S),y=Tr.useMediaQuery({maxWidth:Wi["sm-max"]({theme:p})})?64:120;return r(fb,{id:t,"data-testid":n,role:"group","aria-labelledby":t?`${t}-title`:void 0,children:[(()=>{if(!i)return null;return e("div",{"aria-label":"email"===o?"Email verification":"Phone verification",role:"img",children:e("email"===o?gb:mb,{width:y,height:y})})})(),r(bb,{children:[r("div",{children:[e(da.BodyMD,{weight:"semibold",id:t?`${t}-title`:void 0,"data-testid":n?`${n}-title`:void 0,children:a}),e(da.BodyMD,{weight:"regular",id:t?`${t}-message`:void 0,"data-testid":n?`${n}-message`:void 0,children:s})]}),r("div",{children:[r(yb,{children:[e(_f,{id:t?`${t}-verify-input`:void 0,"data-testid":n?`${n}-verify-input`:void 0,value:l,onChange:e=>null==d?void 0:d(e.target.value),placeholder:"Enter OTP",addon:{type:"label",attributes:{value:`${null!=m?m:""}${null!=f?f:""}`}},type:"number",error:!!h,"aria-label":"Enter OTP code","aria-invalid":!!h,"aria-required":!0}),e(vb,{id:t?`${t}-verify-button`:void 0,type:"button","data-testid":n?`${n}-verify-button`:void 0,onClick:g,loading:c,styleType:"light",disabled:!l||0===l.length,children:!c&&"Verify"})]}),h&&e(Na,{id:t?`${t}-verify-error`:void 0,"data-testid":n?`${n}-verify-error`:void 0,role:"alert",children:h})]}),u.isRunning&&r(pb,{id:t?`${t}-countdown`:void 0,"data-testid":n?`${n}-countdown`:void 0,children:["Resend OTP in ",u.formatTime()]})]})]})},wb=t=>{const{id:n,"data-testid":o,className:i,inputId:l,onSendOtp:d,onVerifyOtp:c,verifyOtpCountdownTimer:u=60,sendOtpError:h,verifyOtpError:m,otpValue:f,onOtpChange:b,otpState:p,onOtpStateChange:y}=t,[v,x]=s(!1),[w,$]=s(!1),F=(({duration:e,onComplete:r})=>{const[t,n]=s(e),[o,i]=s(!1),l=a(null),d=a(null),c=()=>{i(!1),l.current&&(clearInterval(l.current),l.current=null)};return g((()=>{o||n(e)}),[e,o]),{timeLeft:t,isRunning:o,start:()=>{o||(d.current=Date.now(),i(!0),l.current=setInterval((()=>{const t=Math.floor((Date.now()-d.current)/1e3),o=Math.max(0,e-t);n(o),o<=0&&(i(!1),l.current&&(clearInterval(l.current),l.current=null),null==r||r())}),1e3))},stop:c,reset:()=>{c(),n(e),d.current=null},formatTime:e=>{const r=null!=e?e:t;return`${r} second${1===r?"":"s"}`}}})({duration:u});return r(cb,{id:n,"data-testid":o,className:i,children:[e(db,Object.assign({},t,{inputId:l,"data-testid":o?`${o}-contact`:void 0,isLoading:v,isVerified:"verified"===p,countdown:F,onSendOtp:()=>oe(void 0,void 0,void 0,(function*(){if(d)try{x(!0),yield d(),y("sent"),F.reset(),F.start()}catch(e){}finally{x(!1)}})),onStateReset:()=>{"verified"===p&&y("default")},sendOtpError:h,fixedCountry:"phone-number"!==t.type||t.fixedCountry})),"sent"===p&&e(xb,Object.assign({},t,{"data-testid":o?`${o}-verification`:void 0,otpCode:null==f?void 0:f.value,otpPrefix:null==f?void 0:f.prefix,otpSeparator:null==f?void 0:f.separator,setOtpCode:b,isVerifyLoading:w,countdown:F,onVerifyOtp:()=>oe(void 0,void 0,void 0,(function*(){if(c&&(null==f?void 0:f.value))try{$(!0),yield c(f.value),y("verified"),F.reset(),null==b||b("")}catch(e){}finally{$(!1)}})),verifyOtpError:m}))]})};export{wb as OtpVerification};
//# sourceMappingURL=index.js.map
