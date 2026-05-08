import{jsxs as e,Fragment as r,jsx as t}from"react/jsx-runtime";import*as n from"react";import o,{version as i,useRef as a,useState as s,isValidElement as l,createRef as d,cloneElement as c,PureComponent as u,useEffect as g,useLayoutEffect as m,useCallback as h,createContext as b,useContext as f,useMemo as p,createElement as y,forwardRef as v,useImperativeHandle as x}from"react";import w,{css as F,ThemeContext as $,keyframes as C}from"styled-components";import{useFloatingTree as E,useFloating as S,autoUpdate as D,offset as k,flip as B,shift as T,limitShift as A,size as z,useTransitionStyles as I,useClick as O,useDismiss as M,useInteractions as H,FloatingPortal as L,FloatingFocusManager as R}from"@floating-ui/react";import j,{findDOMNode as _}from"react-dom";import{ArrowRightIcon as W,ChevronDownIcon as P}from"@lifesg/react-icons";import{ChevronDownIcon as N}from"@lifesg/react-icons/chevron-down";import{ChevronUpIcon as Y}from"@lifesg/react-icons/chevron-up";import{ArrowRightIcon as V}from"@lifesg/react-icons/arrow-right";import{ExclamationCircleFillIcon as U}from"@lifesg/react-icons/exclamation-circle-fill";import{ExclamationTriangleFillIcon as Z}from"@lifesg/react-icons/exclamation-triangle-fill";import{ICircleFillIcon as G}from"@lifesg/react-icons/i-circle-fill";import{TickCircleFillIcon as q}from"@lifesg/react-icons/tick-circle-fill";import{ExternalIcon as X}from"@lifesg/react-icons/external";import{CircleIcon as K}from"@lifesg/react-icons/circle";import{CircleDotIcon as J}from"@lifesg/react-icons/circle-dot";import{CrossIcon as Q}from"@lifesg/react-icons/cross";import{SquareIcon as ee}from"@lifesg/react-icons/square";import{SquareTickFillIcon as re}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as te}from"@lifesg/react-icons/tick";import{SquareFillIcon as ne}from"@lifesg/react-icons/square-fill";import{MagnifierIcon as oe}from"@lifesg/react-icons/magnifier";import"@lifesg/react-icons/caret-right";import{MinusSquareFillIcon as ie}from"@lifesg/react-icons/minus-square-fill";function ae(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)r.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(t[n[o]]=e[n[o]])}return t}"function"==typeof SuppressedError&&SuppressedError;var se="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function le(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var de={exports:{}};de.exports=function(){var e=1e3,r=6e4,t=36e5,n="millisecond",o="second",i="minute",a="hour",s="day",l="week",d="month",c="quarter",u="year",g="date",m="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,b=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var r=["th","st","nd","rd"],t=e%100;return"["+e+(r[(t-20)%10]||r[t]||r[0])+"]"}},p=function(e,r,t){var n=String(e);return!n||n.length>=r?e:""+Array(r+1-n.length).join(t)+e},y={s:p,z:function(e){var r=-e.utcOffset(),t=Math.abs(r),n=Math.floor(t/60),o=t%60;return(r<=0?"+":"-")+p(n,2,"0")+":"+p(o,2,"0")},m:function e(r,t){if(r.date()<t.date())return-e(t,r);var n=12*(t.year()-r.year())+(t.month()-r.month()),o=r.clone().add(n,d),i=t-o<0,a=r.clone().add(n+(i?-1:1),d);return+(-(n+(t-o)/(i?o-a:a-o))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:s,D:g,h:a,m:i,s:o,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",x={};x[v]=f;var w="$isDayjsObject",F=function(e){return e instanceof S||!(!e||!e[w])},$=function e(r,t,n){var o;if(!r)return v;if("string"==typeof r){var i=r.toLowerCase();x[i]&&(o=i),t&&(x[i]=t,o=i);var a=r.split("-");if(!o&&a.length>1)return e(a[0])}else{var s=r.name;x[s]=r,o=s}return!n&&o&&(v=o),o||!n&&v},C=function(e,r){if(F(e))return e.clone();var t="object"==typeof r?r:{};return t.date=e,t.args=arguments,new S(t)},E=y;E.l=$,E.i=F,E.w=function(e,r){return C(e,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var S=function(){function f(e){this.$L=$(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var p=f.prototype;return p.parse=function(e){this.$d=function(e){var r=e.date,t=e.utc;if(null===r)return new Date(NaN);if(E.u(r))return new Date;if(r instanceof Date)return new Date(r);if("string"==typeof r&&!/Z$/i.test(r)){var n=r.match(h);if(n){var o=n[2]-1||0,i=(n[7]||"0").substring(0,3);return t?new Date(Date.UTC(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(r)}(e),this.init()},p.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},p.$utils=function(){return E},p.isValid=function(){return!(this.$d.toString()===m)},p.isSame=function(e,r){var t=C(e);return this.startOf(r)<=t&&t<=this.endOf(r)},p.isAfter=function(e,r){return C(e)<this.startOf(r)},p.isBefore=function(e,r){return this.endOf(r)<C(e)},p.$g=function(e,r,t){return E.u(e)?this[r]:this.set(t,e)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(e,r){var t=this,n=!!E.u(r)||r,c=E.p(e),m=function(e,r){var o=E.w(t.$u?Date.UTC(t.$y,r,e):new Date(t.$y,r,e),t);return n?o:o.endOf(s)},h=function(e,r){return E.w(t.toDate()[e].apply(t.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(r)),t)},b=this.$W,f=this.$M,p=this.$D,y="set"+(this.$u?"UTC":"");switch(c){case u:return n?m(1,0):m(31,11);case d:return n?m(1,f):m(0,f+1);case l:var v=this.$locale().weekStart||0,x=(b<v?b+7:b)-v;return m(n?p-x:p+(6-x),f);case s:case g:return h(y+"Hours",0);case a:return h(y+"Minutes",1);case i:return h(y+"Seconds",2);case o:return h(y+"Milliseconds",3);default:return this.clone()}},p.endOf=function(e){return this.startOf(e,!1)},p.$set=function(e,r){var t,l=E.p(e),c="set"+(this.$u?"UTC":""),m=(t={},t[s]=c+"Date",t[g]=c+"Date",t[d]=c+"Month",t[u]=c+"FullYear",t[a]=c+"Hours",t[i]=c+"Minutes",t[o]=c+"Seconds",t[n]=c+"Milliseconds",t)[l],h=l===s?this.$D+(r-this.$W):r;if(l===d||l===u){var b=this.clone().set(g,1);b.$d[m](h),b.init(),this.$d=b.set(g,Math.min(this.$D,b.daysInMonth())).$d}else m&&this.$d[m](h);return this.init(),this},p.set=function(e,r){return this.clone().$set(e,r)},p.get=function(e){return this[E.p(e)]()},p.add=function(n,c){var g,m=this;n=Number(n);var h=E.p(c),b=function(e){var r=C(m);return E.w(r.date(r.date()+Math.round(e*n)),m)};if(h===d)return this.set(d,this.$M+n);if(h===u)return this.set(u,this.$y+n);if(h===s)return b(1);if(h===l)return b(7);var f=(g={},g[i]=r,g[a]=t,g[o]=e,g)[h]||1,p=this.$d.getTime()+n*f;return E.w(p,this)},p.subtract=function(e,r){return this.add(-1*e,r)},p.format=function(e){var r=this,t=this.$locale();if(!this.isValid())return t.invalidDate||m;var n=e||"YYYY-MM-DDTHH:mm:ssZ",o=E.z(this),i=this.$H,a=this.$m,s=this.$M,l=t.weekdays,d=t.months,c=t.meridiem,u=function(e,t,o,i){return e&&(e[t]||e(r,n))||o[t].slice(0,i)},g=function(e){return E.s(i%12||12,e,"0")},h=c||function(e,r,t){var n=e<12?"AM":"PM";return t?n.toLowerCase():n};return n.replace(b,(function(e,n){return n||function(e){switch(e){case"YY":return String(r.$y).slice(-2);case"YYYY":return E.s(r.$y,4,"0");case"M":return s+1;case"MM":return E.s(s+1,2,"0");case"MMM":return u(t.monthsShort,s,d,3);case"MMMM":return u(d,s);case"D":return r.$D;case"DD":return E.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return u(t.weekdaysMin,r.$W,l,2);case"ddd":return u(t.weekdaysShort,r.$W,l,3);case"dddd":return l[r.$W];case"H":return String(i);case"HH":return E.s(i,2,"0");case"h":return g(1);case"hh":return g(2);case"a":return h(i,a,!0);case"A":return h(i,a,!1);case"m":return String(a);case"mm":return E.s(a,2,"0");case"s":return String(r.$s);case"ss":return E.s(r.$s,2,"0");case"SSS":return E.s(r.$ms,3,"0");case"Z":return o}return null}(e)||o.replace(":","")}))},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(n,g,m){var h,b=this,f=E.p(g),p=C(n),y=(p.utcOffset()-this.utcOffset())*r,v=this-p,x=function(){return E.m(b,p)};switch(f){case u:h=x()/12;break;case d:h=x();break;case c:h=x()/3;break;case l:h=(v-y)/6048e5;break;case s:h=(v-y)/864e5;break;case a:h=v/t;break;case i:h=v/r;break;case o:h=v/e;break;default:h=v}return m?h:E.a(h)},p.daysInMonth=function(){return this.endOf(d).$D},p.$locale=function(){return x[this.$L]},p.locale=function(e,r){if(!e)return this.$L;var t=this.clone(),n=$(e,r,!0);return n&&(t.$L=n),t},p.clone=function(){return E.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},f}(),D=S.prototype;return C.prototype=D,[["$ms",n],["$s",o],["$m",i],["$H",a],["$W",s],["$M",d],["$y",u],["$D",g]].forEach((function(e){D[e[1]]=function(r){return this.$g(r,e[0],e[1])}})),C.extend=function(e,r){return e.$i||(e(r,S,C),e.$i=!0),C},C.locale=$,C.isDayjs=F,C.unix=function(e){return C(1e3*e)},C.en=x[v],C.Ls=x,C.p={},C}();var ce=le(de.exports),ue={exports:{}};ue.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,t=/\d\d/,n=/\d\d?/,o=/\d*[^-_:/,()\s\d]+/,i={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(r){this[e]=+r}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var r=e.match(/([+-]|\d\d)/g),t=60*r[1]+(+r[2]||0);return 0===t?0:"+"===r[0]?-t:t}(e)}],d=function(e){var r=i[e];return r&&(r.indexOf?r:r.s.concat(r.f))},c=function(e,r){var t,n=i.meridiem;if(n){for(var o=1;o<=24;o+=1)if(e.indexOf(n(o,0,r))>-1){t=o>12;break}}else t=e===(r?"pm":"PM");return t},u={A:[o,function(e){this.afternoon=c(e,!1)}],a:[o,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[t,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[t,s("day")],Do:[o,function(e){var r=i.ordinal,t=e.match(/\d+/);if(this.day=t[0],r)for(var n=1;n<=31;n+=1)r(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[t,s("month")],MMM:[o,function(e){var r=d("months"),t=(d("monthsShort")||r.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],MMMM:[o,function(e){var r=d("months").indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],Y:[/[+-]?\d+/,s("year")],YY:[t,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function g(t){var n,o;n=t,o=i&&i.formats;for(var a=(t=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(r,t,n){var i=n&&n.toUpperCase();return t||o[n]||e[n]||o[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,r,t){return r||t.slice(1)}))}))).match(r),s=a.length,l=0;l<s;l+=1){var d=a[l],c=u[d],g=c&&c[0],m=c&&c[1];a[l]=m?{regex:g,parser:m}:d.replace(/^\[|\]$/g,"")}return function(e){for(var r={},t=0,n=0;t<s;t+=1){var o=a[t];if("string"==typeof o)n+=o.length;else{var i=o.regex,l=o.parser,d=e.slice(n),c=i.exec(d)[0];l.call(r,c),e=e.replace(c,"")}}return function(e){var r=e.afternoon;if(void 0!==r){var t=e.hours;r?t<12&&(e.hours+=12):12===t&&(e.hours=0),delete e.afternoon}}(r),r}}return function(e,r,t){t.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var n=r.prototype,o=n.parse;n.parse=function(e){var r=e.date,n=e.utc,a=e.args;this.$u=n;var s=a[1];if("string"==typeof s){var l=!0===a[2],d=!0===a[3],c=l||d,u=a[2];d&&(u=a[2]),i=this.$locale(),!l&&u&&(i=t.Ls[u]),this.$d=function(e,r,t){try{if(["x","X"].indexOf(r)>-1)return new Date(("X"===r?1e3:1)*e);var n=g(r)(e),o=n.year,i=n.month,a=n.day,s=n.hours,l=n.minutes,d=n.seconds,c=n.milliseconds,u=n.zone,m=new Date,h=a||(o||i?1:m.getDate()),b=o||m.getFullYear(),f=0;o&&!i||(f=i>0?i-1:m.getMonth());var p=s||0,y=l||0,v=d||0,x=c||0;return u?new Date(Date.UTC(b,f,h,p,y,v,x+60*u.offset*1e3)):t?new Date(Date.UTC(b,f,h,p,y,v,x)):new Date(b,f,h,p,y,v,x)}catch(e){return new Date("")}}(r,s,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&r!=this.format(s)&&(this.$d=new Date("")),i={}}else if(s instanceof Array)for(var m=s.length,h=1;h<=m;h+=1){a[1]=s[h-1];var b=t.apply(this,a);if(b.isValid()){this.$d=b.$d,this.$L=b.$L,this.init();break}h===m&&(this.$d=new Date(""))}else o.call(this,e)}}}();var ge=le(ue.exports),me={exports:{}};me.exports=function(e,r,t){r.prototype.isBetween=function(e,r,n,o){var i=t(e),a=t(r),s="("===(o=o||"()")[0],l=")"===o[1];return(s?this.isAfter(i,n):!this.isBefore(i,n))&&(l?this.isBefore(a,n):!this.isAfter(a,n))||(s?this.isBefore(i,n):!this.isAfter(i,n))&&(l?this.isAfter(a,n):!this.isBefore(a,n))}};var he=le(me.exports),be={exports:{}};be.exports=function(e,r){r.prototype.isSameOrAfter=function(e,r){return this.isSame(e,r)||this.isAfter(e,r)}};var fe=le(be.exports),pe={exports:{}};pe.exports=function(e,r){r.prototype.isSameOrBefore=function(e,r){return this.isSame(e,r)||this.isBefore(e,r)}};var ye,ve,xe,we=le(pe.exports),Fe={exports:{}},$e=le(Fe.exports=(ye={year:0,month:1,day:2,hour:3,minute:4,second:5},ve={},function(e,r,t){var n,o=function(e,r,t){void 0===t&&(t={});var n=new Date(e),o=function(e,r){void 0===r&&(r={});var t=r.timeZoneName||"short",n=e+"|"+t,o=ve[n];return o||(o=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:t}),ve[n]=o),o}(r,t);return o.formatToParts(n)},i=function(e,r){for(var n=o(e,r),i=[],a=0;a<n.length;a+=1){var s=n[a],l=s.type,d=s.value,c=ye[l];c>=0&&(i[c]=parseInt(d,10))}var u=i[3],g=24===u?0:u,m=i[0]+"-"+i[1]+"-"+i[2]+" "+g+":"+i[4]+":"+i[5]+":000",h=+e;return(t.utc(m).valueOf()-(h-=h%1e3))/6e4},a=r.prototype;a.tz=function(e,r){void 0===e&&(e=n);var o=this.utcOffset(),i=this.toDate(),a=i.toLocaleString("en-US",{timeZone:e}),s=Math.round((i-new Date(a))/1e3/60),l=t(a,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-s,!0);if(r){var d=l.utcOffset();l=l.add(o-d,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var r=this.$x.$timezone||t.tz.guess(),n=o(this.valueOf(),r,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=a.startOf;a.startOf=function(e,r){if(!this.$x||!this.$x.$timezone)return s.call(this,e,r);var n=t(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,e,r).tz(this.$x.$timezone,!0)},t.tz=function(e,r,o){var a=o&&r,s=o||r||n,l=i(+t(),s);if("string"!=typeof e)return t(e).tz(s);var d=function(e,r,t){var n=e-60*r*1e3,o=i(n,t);if(r===o)return[n,r];var a=i(n-=60*(o-r)*1e3,t);return o===a?[n,o]:[e-60*Math.min(o,a)*1e3,Math.max(o,a)]}(t.utc(e,a).valueOf(),l,s),c=d[0],u=d[1],g=t(c).utcOffset(u);return g.$x.$timezone=s,g},t.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},t.tz.setDefault=function(e){n=e}}));ce.extend(he),ce.extend(we),ce.extend(fe),ce.extend(ge),ce.extend($e),function(e){e.generateDays=e=>{const r=e.startOf("month"),t=ce(r).startOf("week");return Ce(t).map((e=>Ee(e)))},e.generateDaysForCurrentWeek=e=>{const r=e.startOf("week");return Ee(r)},e.generateMonths=e=>{const r=[];for(let t=0;t<12;t++){const n=e.month(t);r.push(ce(n))}return r},e.generateDecadeOfYears=e=>{const r=e.year(),t=10*Math.floor(r/10),n=e.year(t),o=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)o.push(n.add(e,"year"));return o},e.getStartEndDecade=e=>{const r=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:r,endDecade:+ce(`${r+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const r=ce(e,"HH:mm");return r.isValid()?r.format("h:mm a"):""},e.isWithinRange=(e,r,t,n="day")=>!r&&!t||(r&&t?e.isBetween(r,t,n,"[]"):r?e.isSameOrAfter(r,n):e.isSameOrBefore(t,n)),e.isPreviousMonthWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"month"),t,void 0,"month"),e.isPreviousYearWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"year"),t,void 0,"year"),e.isPreviousDecadeWithinRange=(r,t)=>{const{beginDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).subtract(1,"year"),t,void 0,"year")},e.isNextMonthWithinRange=(r,t)=>e.isWithinRange(r.add(1,"month"),void 0,t,"month"),e.isNextYearWithinRange=(r,t)=>e.isWithinRange(r.add(1,"year"),void 0,t,"year"),e.isNextDecadeWithinRange=(r,t)=>{const{endDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).add(1,"year"),void 0,t,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,r)=>({start:e.format("YYYY-MM-DD"),end:e.add(r-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(r,t,n,o)=>{const i=e.isWithinRange(r,n?ce(n):void 0,o?ce(o):void 0),a=t&&t.includes(r.format("YYYY-MM-DD"));return!i||!!a}}(xe||(xe={}));const Ce=e=>{const r=[e];for(let t=1;t<6;t++){const n=e.add(t,"week");r.push(n)}return r},Ee=e=>{const r=[];for(let t=0;t<7;t++){const n=e.add(t,"day");r.push(n)}return r},Se=[1,3,5,7,8,10,12],De=[4,6,9,11];var ke,Be;!function(e){e.clampDay=(r,t,n)=>{const o=parseInt(r),i=parseInt(t),a=parseInt(n);return 0==o?"1":Se.includes(i)?Math.min(o,31).toString():De.includes(i)?Math.min(o,30).toString():2===i?e.isLeapYear(a)?Math.min(o,29).toString():Math.min(o,28).toString():r},e.clampMonth=e=>{const r=parseInt(e);return 0==r?"1":r>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,r,t="HH:mm")=>{const n=ce(e,t);return ce(r,t).diff(n,"minute")},e.toDayjs=e=>e?ce(e):ce(),e.addMinutesToTime=(e,r,t="HH:mm")=>ce(e,t).add(r,"minutes").format(t),e.isSame=(e,r,t="day")=>ce(e).isSame(ce(r),t)}(ke||(ke={})),function(e){e.isDateDisabled=(e,r)=>{const{disabledDates:t,minDate:n,maxDate:o}=r;return!!(e&&t&&t.length&&t.includes(e))||(!(!n||!ce(e).isBefore(n,"day"))||!(!o||!ce(e).isAfter(o,"day")))},e.sanitizeInput=e=>{if(e){const t=r(e);if(ce(t,"YYYY-MM-DD",!0).isValid())return t}return""};const r=e=>{const r=e.match(/^(\d{1,4})-(\d{1,2})-(\d{1,2})$/);if(!r)return"";const[,t,n,o]=r;if(t.length<=2||parseInt(t,10)<100)return"";return`${t.padStart(4,"0")}-${n.padStart(2,"0")}-${o.padStart(2,"0")}`}}(Be||(Be={}));const Te=()=>{const e=i.split(".");return parseInt(e[0],10)>=19},Ae=(...e)=>r=>{const t=[];for(const n of e)if("function"==typeof n){const e=n(r),o="function"==typeof e;t.push(o?e:()=>n(null))}else n.current=r,t.push((()=>{n.current=null}));if(Te())return()=>{for(const e of t)e()}};var ze,Ie;!function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Ie||(Ie={}));const Oe=null!==(ze=o.useId)&&void 0!==ze?ze:()=>{const[e]=o.useState((()=>Ie.generate()));return e};var Me;!function(e){e.transformWithSpaces=(e,r)=>{const t="(.{"+r+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(t,"g"),"$1 ").trim()},e.padValue=(e,r)=>{if("0"===e)return r?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,r)=>{const t=Math.floor(r/9);return e.length>=2*t||1===e.split(" ").length&&e.length>t},e.truncateOneLine=(e,r,t,n,o=8)=>{let i=0;r>t&&(i=Math.floor((r-t)/o));const a=n+i;if(a<e.length){const r=Math.floor(a/2);return e.substring(0,r)+" ... "+e.substring(e.length-r,e.length)}return e},e.truncateTwoLines=(e,r,t,n=1.2)=>{const o=Math.floor(2*r/(.6*t))*(2/n);if(e.length<=o)return e;const i=Math.floor(.6*o),a=Math.floor(.2*o);return`${e.substring(0,i)}...${e.substring(e.length-a)}`},e.getTextWidth=(r,t)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=t;return n.measureText(r).width},e.maskValue=(e,t)=>{if(!e)return e;const{maskRange:n,unmaskRange:o,maskChar:i="•",maskRegex:a,maskTransformer:s}=t;if(s)return s(e);if(a)return e.replace(a,i);if(n){const{startIndex:t,endIndex:o}=r(n[0],n[1]);return e.substring(0,t)+i.repeat(e.substring(t,o+1).length)+e.substring(o+1)}if(o){const{startIndex:t,endIndex:n}=r(o[0],o[1]);return i.repeat(e.substring(0,t).length)+e.substring(t,n+1)+i.repeat(e.substring(n+1).length)}return e};const r=(e,r)=>e<r?{startIndex:e,endIndex:r}:{startIndex:r,endIndex:e},t=new Intl.PluralRules("en",{type:"ordinal"}),n=new Map([["one","st"],["two","nd"],["few","rd"],["other","th"]]);e.formatOrdinal=e=>{const r=t.select(e);return`${e}${n.get(r)}`},e.getMaskedDescription=(e,r,t)=>{if(!e||"masked"!==r||!t)return"";const[n,o]=t,i=n>0,a=o<e.length-1,s=i?e.substring(0,n):"",l=a?e.substring(o+1):"";return i&&a?`Starting with ${s} and ending with ${l}`:i?`Starting with ${s}`:a?`Ending with ${l}`:""},e.joinNonEmptyStrings=(e,r=", ")=>e.filter(Boolean).join(r)}(Me||(Me={}));var He=function(e,r){return He=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])},He(e,r)};var Le=function(){return Le=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e},Le.apply(this,arguments)};var Re="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var je=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},_e="object"==typeof Re&&Re&&Re.Object===Object&&Re,We="object"==typeof self&&self&&self.Object===Object&&self,Pe=_e||We||Function("return this")(),Ne=Pe,Ye=function(){return Ne.Date.now()},Ve=/\s/;var Ue=function(e){for(var r=e.length;r--&&Ve.test(e.charAt(r)););return r},Ze=/^\s+/;var Ge=function(e){return e?e.slice(0,Ue(e)+1).replace(Ze,""):e},qe=Pe.Symbol,Xe=qe,Ke=Object.prototype,Je=Ke.hasOwnProperty,Qe=Ke.toString,er=Xe?Xe.toStringTag:void 0;var rr=function(e){var r=Je.call(e,er),t=e[er];try{e[er]=void 0;var n=!0}catch(e){}var o=Qe.call(e);return n&&(r?e[er]=t:delete e[er]),o},tr=Object.prototype.toString;var nr=rr,or=function(e){return tr.call(e)},ir=qe?qe.toStringTag:void 0;var ar=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":ir&&ir in Object(e)?nr(e):or(e)},sr=function(e){return null!=e&&"object"==typeof e};var lr=Ge,dr=je,cr=function(e){return"symbol"==typeof e||sr(e)&&"[object Symbol]"==ar(e)},ur=/^[-+]0x[0-9a-f]+$/i,gr=/^0b[01]+$/i,mr=/^0o[0-7]+$/i,hr=parseInt;var br=je,fr=Ye,pr=function(e){if("number"==typeof e)return e;if(cr(e))return NaN;if(dr(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=dr(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=lr(e);var t=gr.test(e);return t||mr.test(e)?hr(e.slice(2),t?2:8):ur.test(e)?NaN:+e},yr=Math.max,vr=Math.min;var xr=function(e,r,t){var n,o,i,a,s,l,d=0,c=!1,u=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function m(r){var t=n,i=o;return n=o=void 0,d=r,a=e.apply(i,t)}function h(e){var t=e-l;return void 0===l||t>=r||t<0||u&&e-d>=i}function b(){var e=fr();if(h(e))return f(e);s=setTimeout(b,function(e){var t=r-(e-l);return u?vr(t,i-(e-d)):t}(e))}function f(e){return s=void 0,g&&n?m(e):(n=o=void 0,a)}function p(){var e=fr(),t=h(e);if(n=arguments,o=this,l=e,t){if(void 0===s)return function(e){return d=e,s=setTimeout(b,r),c?m(e):a}(l);if(u)return clearTimeout(s),s=setTimeout(b,r),m(l)}return void 0===s&&(s=setTimeout(b,r)),a}return r=pr(r)||0,br(t)&&(c=!!t.leading,i=(u="maxWait"in t)?yr(pr(t.maxWait)||0,r):i,g="trailing"in t?!!t.trailing:g),p.cancel=function(){void 0!==s&&clearTimeout(s),d=0,n=l=o=s=void 0},p.flush=function(){return void 0===s?a:f(fr())},p},wr=xr,Fr=je;var $r=function(e,r,t){var n=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Fr(t)&&(n="leading"in t?!!t.leading:n,o="trailing"in t?!!t.trailing:o),wr(e,r,{leading:n,maxWait:r,trailing:o})},Cr=function(e,r,t,n){switch(r){case"debounce":return xr(e,t,n);case"throttle":return $r(e,t,n);default:return e}},Er=function(e){return"function"==typeof e},Sr=function(){return"undefined"==typeof window},Dr=function(e){return e instanceof Element||e instanceof HTMLDocument},kr=function(e,r,t,n){return function(o){var i=o.width,a=o.height;r((function(r){return r.width===i&&r.height===a||r.width===i&&!n||r.height===a&&!t?r:(e&&Er(e)&&e(i,a),{width:i,height:a})}))}};!function(e){function r(r){var t=e.call(this,r)||this;t.cancelHandler=function(){t.resizeHandler&&t.resizeHandler.cancel&&(t.resizeHandler.cancel(),t.resizeHandler=null)},t.attachObserver=function(){var e=t.props,r=e.targetRef,n=e.observerOptions;if(!Sr()){r&&r.current&&(t.targetRef.current=r.current);var o=t.getElement();o&&(t.observableElement&&t.observableElement===o||(t.observableElement=o,t.resizeObserver.observe(o,n)))}},t.getElement=function(){var e=t.props,r=e.querySelector,n=e.targetDomEl;if(Sr())return null;if(r)return document.querySelector(r);if(n&&Dr(n))return n;if(t.targetRef&&Dr(t.targetRef.current))return t.targetRef.current;var o=_(t);if(!o)return null;switch(t.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return o;default:return o.parentElement}},t.createResizeHandler=function(e){var r=t.props,n=r.handleWidth,o=void 0===n||n,i=r.handleHeight,a=void 0===i||i,s=r.onResize;if(o||a){var l=kr(s,t.setState.bind(t),o,a);e.forEach((function(e){var r=e&&e.contentRect||{},n=r.width,o=r.height;!t.skipOnMount&&!Sr()&&l({width:n,height:o}),t.skipOnMount=!1}))}},t.getRenderType=function(){var e=t.props,r=e.render,n=e.children;return Er(r)?"renderProp":Er(n)?"childFunction":l(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=r.skipOnMount,o=r.refreshMode,i=r.refreshRate,a=void 0===i?1e3:i,s=r.refreshOptions;return t.state={width:void 0,height:void 0},t.skipOnMount=n,t.targetRef=d(),t.observableElement=null,Sr()||(t.resizeHandler=Cr(t.createResizeHandler,o,a,s),t.resizeObserver=new window.ResizeObserver(t.resizeHandler)),t}(function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function t(){this.constructor=e}He(e,r),e.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)})(r,e),r.prototype.componentDidMount=function(){this.attachObserver()},r.prototype.componentDidUpdate=function(){this.attachObserver()},r.prototype.componentWillUnmount=function(){Sr()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},r.prototype.render=function(){var e,r=this.props,t=r.render,o=r.children,i=r.nodeType,a=void 0===i?"div":i,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return t&&t(l);case"childFunction":return(e=o)(l);case"child":if((e=o).type&&"string"==typeof e.type){var d=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)r.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(t[n[o]]=e[n[o]])}return t}(l,["targetRef"]);return c(e,d)}return c(e,l);case"childArray":return(e=o).map((function(e){return!!e&&c(e,l)}));default:return n.createElement(a,null)}}}(u);var Br=Sr()?g:m;function Tr(e){void 0===e&&(e={});var r=e.skipOnMount,t=void 0!==r&&r,n=e.refreshMode,o=e.refreshRate,i=void 0===o?1e3:o,l=e.refreshOptions,d=e.handleWidth,c=void 0===d||d,u=e.handleHeight,g=void 0===u||u,m=e.targetRef,h=e.observerOptions,b=e.onResize,f=a(t),p=a(null),y=null!=m?m:p,v=a(),x=s({width:void 0,height:void 0}),w=x[0],F=x[1];return Br((function(){if(!Sr()){var e=kr(b,F,c,g);v.current=Cr((function(r){(c||g)&&r.forEach((function(r){var t=r&&r.contentRect||{},n=t.width,o=t.height;!f.current&&!Sr()&&e({width:n,height:o}),f.current=!1}))}),n,i,l);var r=new window.ResizeObserver(v.current);return y.current&&r.observe(y.current,h),function(){r.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[n,i,l,c,g,b,h,y.current]),Le({ref:y},w)}function Ar(e){const r=a(null);m((()=>{r.current=e}),[e]);const t=h(((...e)=>{var t;return null===(t=r.current)||void 0===t?void 0:t.call(r,...e)}),[]);return t}const zr=e=>{const r=(e=>{const r=a(e),t=a();return g((()=>{t.current=r.current,r.current=e}),[e]),t.current})(e);return r!==e},Ir=w.span`
    clip-path: inset(50%);
    height: 1px;
    width: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
`,Or=e=>Te()?e:e?"true":void 0,Mr=(...e)=>e.filter((e=>!!e)).join(" ");var Hr;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(Hr||(Hr={}));var Lr=Array.isArray,Rr="object"==typeof se&&se&&se.Object===Object&&se,jr=Rr,_r="object"==typeof self&&self&&self.Object===Object&&self,Wr=jr||_r||Function("return this")(),Pr=Wr.Symbol,Nr=Pr,Yr=Object.prototype,Vr=Yr.hasOwnProperty,Ur=Yr.toString,Zr=Nr?Nr.toStringTag:void 0;var Gr=function(e){var r=Vr.call(e,Zr),t=e[Zr];try{e[Zr]=void 0;var n=!0}catch(e){}var o=Ur.call(e);return n&&(r?e[Zr]=t:delete e[Zr]),o},qr=Object.prototype.toString;var Xr=Gr,Kr=function(e){return qr.call(e)},Jr=Pr?Pr.toStringTag:void 0;var Qr=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Jr&&Jr in Object(e)?Xr(e):Kr(e)};var et=function(e){return null!=e&&"object"==typeof e},rt=Qr,tt=et;var nt=function(e){return"symbol"==typeof e||tt(e)&&"[object Symbol]"==rt(e)},ot=Lr,it=nt,at=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,st=/^\w*$/;var lt=function(e,r){if(ot(e))return!1;var t=typeof e;return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=e&&!it(e))||(st.test(e)||!at.test(e)||null!=r&&e in Object(r))};var dt=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},ct=Qr,ut=dt;var gt,mt=function(e){if(!ut(e))return!1;var r=ct(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},ht=Wr["__core-js_shared__"],bt=(gt=/[^.]+$/.exec(ht&&ht.keys&&ht.keys.IE_PROTO||""))?"Symbol(src)_1."+gt:"";var ft=function(e){return!!bt&&bt in e},pt=Function.prototype.toString;var yt=function(e){if(null!=e){try{return pt.call(e)}catch(e){}try{return e+""}catch(e){}}return""},vt=mt,xt=ft,wt=dt,Ft=yt,$t=/^\[object .+?Constructor\]$/,Ct=Function.prototype,Et=Object.prototype,St=Ct.toString,Dt=Et.hasOwnProperty,kt=RegExp("^"+St.call(Dt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Bt=function(e,r){return null==e?void 0:e[r]},Tt=function(e){return!(!wt(e)||xt(e))&&(vt(e)?kt:$t).test(Ft(e))},At=Bt;var zt=function(e,r){var t=At(e,r);return Tt(t)?t:void 0},It=zt(Object,"create"),Ot=It;var Mt=function(){this.__data__=Ot?Ot(null):{},this.size=0};var Ht=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},Lt=It,Rt=Object.prototype.hasOwnProperty;var jt=function(e){var r=this.__data__;if(Lt){var t=r[e];return"__lodash_hash_undefined__"===t?void 0:t}return Rt.call(r,e)?r[e]:void 0},_t=It,Wt=Object.prototype.hasOwnProperty;var Pt=function(e){var r=this.__data__;return _t?void 0!==r[e]:Wt.call(r,e)},Nt=It;var Yt=function(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=Nt&&void 0===r?"__lodash_hash_undefined__":r,this},Vt=Mt,Ut=Ht,Zt=jt,Gt=Pt,qt=Yt;function Xt(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Xt.prototype.clear=Vt,Xt.prototype.delete=Ut,Xt.prototype.get=Zt,Xt.prototype.has=Gt,Xt.prototype.set=qt;var Kt=Xt;var Jt=function(){this.__data__=[],this.size=0};var Qt=function(e,r){return e===r||e!=e&&r!=r},en=Qt;var rn=function(e,r){for(var t=e.length;t--;)if(en(e[t][0],r))return t;return-1},tn=rn,nn=Array.prototype.splice;var on=function(e){var r=this.__data__,t=tn(r,e);return!(t<0)&&(t==r.length-1?r.pop():nn.call(r,t,1),--this.size,!0)},an=rn;var sn=function(e){var r=this.__data__,t=an(r,e);return t<0?void 0:r[t][1]},ln=rn;var dn=function(e){return ln(this.__data__,e)>-1},cn=rn;var un=function(e,r){var t=this.__data__,n=cn(t,e);return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this},gn=Jt,mn=on,hn=sn,bn=dn,fn=un;function pn(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}pn.prototype.clear=gn,pn.prototype.delete=mn,pn.prototype.get=hn,pn.prototype.has=bn,pn.prototype.set=fn;var yn=pn,vn=zt(Wr,"Map"),xn=Kt,wn=yn,Fn=vn;var $n=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var Cn=function(e,r){var t=e.__data__;return $n(r)?t["string"==typeof r?"string":"hash"]:t.map},En=Cn;var Sn=function(e){var r=En(this,e).delete(e);return this.size-=r?1:0,r},Dn=Cn;var kn=function(e){return Dn(this,e).get(e)},Bn=Cn;var Tn=function(e){return Bn(this,e).has(e)},An=Cn;var zn=function(e,r){var t=An(this,e),n=t.size;return t.set(e,r),this.size+=t.size==n?0:1,this},In=function(){this.size=0,this.__data__={hash:new xn,map:new(Fn||wn),string:new xn}},On=Sn,Mn=kn,Hn=Tn,Ln=zn;function Rn(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Rn.prototype.clear=In,Rn.prototype.delete=On,Rn.prototype.get=Mn,Rn.prototype.has=Hn,Rn.prototype.set=Ln;var jn=Rn,_n=jn;function Wn(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var t=function(){var n=arguments,o=r?r.apply(this,n):n[0],i=t.cache;if(i.has(o))return i.get(o);var a=e.apply(this,n);return t.cache=i.set(o,a)||i,a};return t.cache=new(Wn.Cache||_n),t}Wn.Cache=_n;var Pn=Wn;var Nn=function(e){var r=Pn(e,(function(e){return 500===t.size&&t.clear(),e})),t=r.cache;return r},Yn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Vn=/\\(\\)?/g,Un=Nn((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(Yn,(function(e,t,n,o){r.push(n?o.replace(Vn,"$1"):t||e)})),r}));var Zn=function(e,r){for(var t=-1,n=null==e?0:e.length,o=Array(n);++t<n;)o[t]=r(e[t],t,e);return o},Gn=Lr,qn=nt,Xn=Pr?Pr.prototype:void 0,Kn=Xn?Xn.toString:void 0;var Jn=function e(r){if("string"==typeof r)return r;if(Gn(r))return Zn(r,e)+"";if(qn(r))return Kn?Kn.call(r):"";var t=r+"";return"0"==t&&1/r==-1/0?"-0":t},Qn=Jn;var eo=Lr,ro=lt,to=Un,no=function(e){return null==e?"":Qn(e)};var oo=function(e,r){return eo(e)?e:ro(e,r)?[e]:to(no(e))},io=nt;var ao=function(e){if("string"==typeof e||io(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r},so=oo,lo=ao;var co=function(e,r){for(var t=0,n=(r=so(r,e)).length;null!=e&&t<n;)e=e[lo(r[t++])];return t&&t==n?e:void 0},uo=co;var go=function(e,r,t){var n=null==e?void 0:uo(e,r);return void 0===n?t:n},mo=le(go);const ho=(e,r,t)=>mo(t,r)||mo(e,r),bo=(e,r)=>{const t=r||e.defaultValue;return mo(e.collections,t)},fo={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},po=e=>r=>{var t;const n=r.theme,o=bo(fo,null==n?void 0:n.borderScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.border)?`${ho(o,e,n.overrides.border)}px`:`${o[e]}px`},yo={"width-005":po("width-005"),"width-010":po("width-010"),"width-020":po("width-020"),"width-040":po("width-040"),solid:(vo="solid",e=>{var r;const t=e.theme,n=bo(fo,null==t?void 0:t.borderScheme),o=(null===(r=null==t?void 0:t.overrides)||void 0===r?void 0:r.border)?ho(n,vo,t.overrides.border):n[vo];return"function"==typeof o?o(e):o})};var vo;const xo={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},wo={"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFF8FC","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Fo={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},$o={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Co={"brand-10":"#001A19","brand-20":"#002D2B","brand-30":"#00413D","brand-40":"#005954","brand-50":"#00756F","brand-60":"#03A098","brand-70":"#55BFBA","brand-80":"#92D6D2","brand-90":"#BFE7E5","brand-95":"#DDF2F1","brand-100":"#F4FBFA","primary-10":"#09191D","primary-20":"#102B34","primary-30":"#173D49","primary-40":"#205666","primary-50":"#2A7086","primary-60":"#5D97A9","primary-70":"#8CB6C2","primary-80":"#B2CED6","primary-90":"#D1E2E7","primary-95":"#E8F0F3","primary-100":"#F7FAFB","secondary-10":"#001731","secondary-20":"#002752","secondary-30":"#003874","secondary-40":"#004D9F","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Eo={"brand-10":"#881317","brand-20":"#B5191E","brand-30":"#B5040A","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},So={"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Do={"brand-10":"#170F39","brand-20":"#281C62","brand-30":"#38268B","brand-40":"#4D34BF","brand-50":"#5735DF","brand-60":"#9986F9","brand-70":"#B2A5F8","brand-80":"#CDC2FA","brand-90":"#E2DCFC","brand-95":"#EFEDFE","brand-100":"#FAF8FD","primary-10":"#170F39","primary-20":"#281C62","primary-30":"#38268B","primary-40":"#4D34BF","primary-50":"#5735DF","primary-60":"#9986F9","primary-70":"#B2A5F8","primary-80":"#CDC2FA","primary-90":"#E2DCFC","primary-95":"#EFEDFE","primary-100":"#FAF8FD","secondary-10":"#251204","secondary-20":"#401F08","secondary-30":"#5B2C0B","secondary-40":"#7E3D0F","secondary-50":"#B04900","secondary-60":"#E26E1C","secondary-70":"#FF9445","secondary-80":"#FFBB8E","secondary-90":"#FFD9BF","secondary-95":"#FFECDF","secondary-100":"#FFF8F3","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#031B15","success-20":"#082D24","success-30":"#094134","success-40":"#0D5947","success-50":"#10755E","success-60":"#16A181","success-70":"#1EC59D","success-80":"#6FDDC2","success-90":"#AFECDE","success-95":"#D5F5ED","success-100":"#F1FCF9","warning-10":"#1F1500","warning-20":"#362500","warning-30":"#4D3501","warning-40":"#6A4801","warning-50":"#8B6001","warning-60":"#BF8301","warning-70":"#EAA102","warning-80":"#FFBF34","warning-90":"#FFDC8F","warning-95":"#FFEDC7","warning-100":"#FFF8EA","error-10":"#270F10","error-20":"#441B1B","error-30":"#612627","error-40":"#853535","error-50":"#AF4546","error-60":"#EC6162","error-70":"#F29696","error-80":"#F7BBBC","error-90":"#FAD8D8","error-95":"#FCEAEA","error-100":"#FEF7F7","info-10":"#0F1627","info-20":"#1B2745","info-30":"#273763","info-40":"#354D88","info-50":"#4665B3","info-60":"#618AF6","info-70":"#8DADFF","info-80":"#B4C9FF","info-90":"#D3DFFF","info-95":"#E9EFFF","info-100":"#F5F8FF",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ko={"brand-10":"#0E113C","brand-20":"#191E67","brand-30":"#232A92","brand-40":"#233FC2","brand-50":"#135CEA","brand-60":"#378FFB","brand-70":"#71B3FD","brand-80":"#9DCFFE","brand-90":"#C1E5FF","brand-95":"#DCF1FF","brand-100":"#F3FAFF","primary-10":"#0E113C","primary-20":"#191E67","primary-30":"#232A92","primary-40":"#233FC2","primary-50":"#135CEA","primary-60":"#378FFB","primary-70":"#71B3FD","primary-80":"#9DCFFE","primary-90":"#C1E5FF","primary-95":"#DCF1FF","primary-100":"#F3FAFF","secondary-10":"#34001F","secondary-20":"#540033","secondary-30":"#730045","secondary-40":"#9D0054","secondary-50":"#C61C64","secondary-60":"#DE6792","secondary-70":"#EB96B6","secondary-80":"#F5BAD2","secondary-90":"#FCD5E3","secondary-95":"#FDEBF1","secondary-100":"#FDF6F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Bo={"brand-10":"#370009","brand-20":"#4E000D","brand-30":"#640011","brand-40":"#850017","brand-50":"#9B001A","brand-60":"#EF2D4E","brand-70":"#F692A3","brand-80":"#FAB9C4","brand-90":"#FCD7DD","brand-95":"#FDEAED","brand-100":"#FEF8F9","primary-10":"#1F102A","primary-20":"#2F193F","primary-30":"#3E2053","primary-40":"#562D71","primary-50":"#663587","primary-60":"#9370AA","primary-70":"#BCA7CB","primary-80":"#D3C5DC","primary-90":"#E5DDEB","primary-95":"#F2EEF5","primary-100":"#FAF9FB","secondary-10":"#201316","secondary-20":"#311D22","secondary-30":"#3F272C","secondary-40":"#58363D","secondary-50":"#684049","secondary-60":"#AF6A7A","secondary-70":"#F393A8","secondary-80":"#FFB6C6","secondary-90":"#FFD6DF","secondary-95":"#FFE9EE","secondary-100":"#FFF7F9","neutral-10":"#161616","neutral-20":"#222222","neutral-30":"#2D2D2D","neutral-40":"#3F3F3F","neutral-50":"#4B4B4B","neutral-60":"#7E7E7E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081917","success-20":"#0D2724","success-30":"#11332E","success-40":"#174740","success-50":"#1B554C","success-60":"#2D8C7E","success-70":"#46C2AF","success-80":"#89D8CC","success-90":"#BCE9E2","success-95":"#DAF3EF","success-100":"#F0FAF9","warning-10":"#241200","warning-20":"#371C00","warning-30":"#482500","warning-40":"#633300","warning-50":"#763C00","warning-60":"#C36400","warning-70":"#FF9524","warning-80":"#FFBD77","warning-90":"#FFD9B2","warning-95":"#FFEBD6","warning-100":"#FFF7F0","error-10":"#330505","error-20":"#4B0707","error-30":"#600909","error-40":"#810D0D","error-50":"#98110F","error-60":"#D7504C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032537","info-30":"#043148","info-40":"#054462","info-50":"#065175","info-60":"#3985AF","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},To={"brand-10":"#00143A","brand-20":"#00205B","brand-30":"#153368","brand-40":"#18417C","brand-50":"#00558C","brand-60":"#009CDE","brand-70":"#5AB9E7","brand-80":"#9ED0ED","brand-90":"#CAE3F4","brand-95":"#E2F0F9","brand-100":"#F4FAFD","primary-10":"#00143A","primary-20":"#00205B","primary-30":"#153368","primary-40":"#18417C","primary-50":"#00558C","primary-60":"#009CDE","primary-70":"#5AB9E7","primary-80":"#9ED0ED","primary-90":"#CAE3F4","primary-95":"#E2F0F9","primary-100":"#F4FAFD","secondary-10":"#10171F","secondary-20":"#1E252C","secondary-30":"#2F353B","secondary-40":"#3D4247","secondary-50":"#4E5255","secondary-60":"#8F9396","secondary-70":"#A9B0B3","secondary-80":"#C7CBCC","secondary-90":"#DDDFE0","secondary-95":"#ECEDEE","secondary-100":"#F8F8F9","neutral-10":"#10171F","neutral-20":"#1E252C","neutral-30":"#2F353B","neutral-40":"#3D4247","neutral-50":"#4E5255","neutral-60":"#8F9396","neutral-70":"#A9B0B3","neutral-80":"#C7CBCC","neutral-90":"#DDDFE0","neutral-95":"#ECEDEE","neutral-100":"#F8F8F9","success-10":"#001B0E","success-20":"#012A16","success-30":"#013D20","success-40":"#014D28","success-50":"#005F30","success-60":"#48A377","success-70":"#77BD9B","success-80":"#A3D5BD","success-90":"#C4E7D6","success-95":"#DBF4E7","success-100":"#ECFDF5","warning-10":"#1F1500","warning-20":"#312100","warning-30":"#473000","warning-40":"#593C00","warning-50":"#6E4B00","warning-60":"#B78C31","warning-70":"#DDA633","warning-80":"#E0C792","warning-90":"#E9DEC5","warning-95":"#F4EEE0","warning-100":"#FAF8F3","error-10":"#360109","error-20":"#50010E","error-30":"#6F0213","error-40":"#88051A","error-50":"#A60A24","error-60":"#E07083","error-70":"#EA98A6","error-80":"#F3BBC4","error-90":"#FAD5DC","error-95":"#FEE9ED","error-100":"#FFF6F8","info-10":"#00143A","info-20":"#00205B","info-30":"#153368","info-40":"#18417C","info-50":"#00558C","info-60":"#009CDE","info-70":"#5AB9E7","info-80":"#9ED0ED","info-90":"#CAE3F4","info-95":"#E2F0F9","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FFCB6A"},Ao={"brand-10":"#0B181F","brand-20":"#132B35","brand-30":"#1B3D4C","brand-40":"#25546A","brand-50":"#306F8B","brand-60":"#459EC6","brand-70":"#70B5D3","brand-80":"#93C7DE","brand-90":"#CBE4EF","brand-95":"#EBF4F9","brand-100":"#F3F9FB","primary-10":"#0B181F","primary-20":"#132B35","primary-30":"#1B3D4C","primary-40":"#25546A","primary-50":"#306F8B","primary-60":"#459EC6","primary-70":"#70B5D3","primary-80":"#93C7DE","primary-90":"#CBE4EF","primary-95":"#EBF4F9","primary-100":"#F3F9FB","secondary-10":"#1E1500","secondary-20":"#352500","secondary-30":"#4B3500","secondary-40":"#674A00","secondary-50":"#896100","secondary-60":"#C28A00","secondary-70":"#E1A100","secondary-80":"#FAB200","secondary-90":"#FDDD8E","secondary-95":"#FEF2D5","secondary-100":"#FFF9EA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#969492","neutral-70":"#AFACA7","neutral-80":"#C2BFBB","neutral-90":"#E4DFD9","neutral-95":"#F4F1EF","neutral-100":"#F9F8F7","success-10":"#071913","success-20":"#0D2D22","success-30":"#134031","success-40":"#1A5944","success-50":"#237559","success-60":"#31A77E","success-70":"#39C293","success-80":"#67D2AD","success-90":"#B8EAD9","success-95":"#E3F7F0","success-100":"#F1FBF8","warning-10":"#211403","warning-20":"#3B2205","warning-30":"#543108","warning-40":"#73440B","warning-50":"#98590E","warning-60":"#D38221","warning-70":"#DEA057","warning-80":"#E5B77F","warning-90":"#F3DDC3","warning-95":"#FAF2E8","warning-100":"#FDF9F4","error-10":"#2E0A0C","error-20":"#4F1114","error-30":"#70171C","error-40":"#972026","error-50":"#C62932","error-60":"#F7636B","error-70":"#F98D93","error-80":"#FAAAAE","error-90":"#FDD7D9","error-95":"#FEF0F1","error-100":"#FFF6F6","info-10":"#0F1627","info-20":"#1B2745","info-30":"#273763","info-40":"#354D88","info-50":"#4665B3","info-60":"#6A90F6","info-70":"#8DAAF8","info-80":"#A7BEFA","info-90":"#D4DFFD","info-95":"#EEF3FE","info-100":"#F5F8FE",white:"#FFFFFF",black:"#000000","primary-inverse":"#FAB200"},zo={collections:{lifesg:Fo,bookingsg:xo,rbs:So,mylegacy:$o,ccube:wo,oneservice:Co,pa:Eo,a11yplayground:Do,supportgowhere:ko,sgwdigitallobby:ko,imda:Bo,spf:To,smgs:Ao},defaultValue:"lifesg"},Io={collections:{lifesg:Fo,bookingsg:xo,rbs:So,mylegacy:$o,ccube:wo,oneservice:Co,pa:Eo,a11yplayground:Do,supportgowhere:ko,sgwdigitallobby:ko,imda:Bo,spf:To,smgs:Ao},defaultValue:"lifesg"},Oo=e=>r=>{var t;const n=r.theme,o="dark"===(null==n?void 0:n.colourMode),i=bo(o?Io:zo,null==n?void 0:n.colourScheme),a=o?"primitiveColourDark":"primitiveColour",s=null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t[a];return s?ho(i,e,s):i[e]},Mo={"brand-10":Oo("brand-10"),"brand-20":Oo("brand-20"),"brand-30":Oo("brand-30"),"brand-40":Oo("brand-40"),"brand-50":Oo("brand-50"),"brand-60":Oo("brand-60"),"brand-70":Oo("brand-70"),"brand-80":Oo("brand-80"),"brand-90":Oo("brand-90"),"brand-95":Oo("brand-95"),"brand-100":Oo("brand-100"),"primary-10":Oo("primary-10"),"primary-20":Oo("primary-20"),"primary-30":Oo("primary-30"),"primary-40":Oo("primary-40"),"primary-50":Oo("primary-50"),"primary-60":Oo("primary-60"),"primary-70":Oo("primary-70"),"primary-80":Oo("primary-80"),"primary-90":Oo("primary-90"),"primary-95":Oo("primary-95"),"primary-100":Oo("primary-100"),"secondary-10":Oo("secondary-10"),"secondary-20":Oo("secondary-20"),"secondary-30":Oo("secondary-30"),"secondary-40":Oo("secondary-40"),"secondary-50":Oo("secondary-50"),"secondary-60":Oo("secondary-60"),"secondary-70":Oo("secondary-70"),"secondary-80":Oo("secondary-80"),"secondary-90":Oo("secondary-90"),"secondary-95":Oo("secondary-95"),"secondary-100":Oo("secondary-100"),"neutral-10":Oo("neutral-10"),"neutral-20":Oo("neutral-20"),"neutral-30":Oo("neutral-30"),"neutral-40":Oo("neutral-40"),"neutral-50":Oo("neutral-50"),"neutral-60":Oo("neutral-60"),"neutral-70":Oo("neutral-70"),"neutral-80":Oo("neutral-80"),"neutral-90":Oo("neutral-90"),"neutral-95":Oo("neutral-95"),"neutral-100":Oo("neutral-100"),"success-10":Oo("success-10"),"success-20":Oo("success-20"),"success-30":Oo("success-30"),"success-40":Oo("success-40"),"success-50":Oo("success-50"),"success-60":Oo("success-60"),"success-70":Oo("success-70"),"success-80":Oo("success-80"),"success-90":Oo("success-90"),"success-95":Oo("success-95"),"success-100":Oo("success-100"),"warning-10":Oo("warning-10"),"warning-20":Oo("warning-20"),"warning-30":Oo("warning-30"),"warning-40":Oo("warning-40"),"warning-50":Oo("warning-50"),"warning-60":Oo("warning-60"),"warning-70":Oo("warning-70"),"warning-80":Oo("warning-80"),"warning-90":Oo("warning-90"),"warning-95":Oo("warning-95"),"warning-100":Oo("warning-100"),"error-10":Oo("error-10"),"error-20":Oo("error-20"),"error-30":Oo("error-30"),"error-40":Oo("error-40"),"error-50":Oo("error-50"),"error-60":Oo("error-60"),"error-70":Oo("error-70"),"error-80":Oo("error-80"),"error-90":Oo("error-90"),"error-95":Oo("error-95"),"error-100":Oo("error-100"),"info-10":Oo("info-10"),"info-20":Oo("info-20"),"info-30":Oo("info-30"),"info-40":Oo("info-40"),"info-50":Oo("info-50"),"info-60":Oo("info-60"),"info-70":Oo("info-70"),"info-80":Oo("info-80"),"info-90":Oo("info-90"),"info-95":Oo("info-95"),"info-100":Oo("info-100"),white:Oo("white"),black:Oo("black"),"primary-inverse":Oo("primary-inverse")},Ho={text:Oo("neutral-20"),"text-subtle":Oo("neutral-30"),"text-subtler":Oo("neutral-50"),"text-subtlest":Oo("neutral-60"),"text-primary":Oo("primary-50"),"text-primary-strongest":Oo("primary-20"),"text-hover":Oo("primary-40"),"text-selected":Oo("primary-50"),"text-selected-hover":Oo("primary-40"),"text-disabled":Oo("neutral-50"),"text-disabled-subtle":Oo("neutral-60"),"text-disabled-subtlest":Oo("neutral-80"),"text-selected-disabled":Oo("neutral-20"),"text-success":Oo("success-40"),"text-warning":Oo("warning-40"),"text-error":Oo("error-40"),"text-info":Oo("info-40"),"text-inverse":Oo("white"),icon:Oo("neutral-50"),"icon-subtle":Oo("neutral-60"),"icon-strongest":Oo("neutral-20"),"icon-primary":Oo("primary-50"),"icon-primary-subtle":Oo("primary-60"),"icon-primary-subtlest":Oo("primary-70"),"icon-hover":Oo("primary-40"),"icon-selected":Oo("primary-50"),"icon-selected-hover":Oo("primary-40"),"icon-disabled":Oo("neutral-50"),"icon-disabled-subtle":Oo("neutral-60"),"icon-selected-disabled":Oo("neutral-60"),"icon-success":Oo("success-50"),"icon-warning":Oo("warning-60"),"icon-error":Oo("error-50"),"icon-error-strong":Oo("error-40"),"icon-info":Oo("info-50"),"icon-inverse":Oo("white"),"icon-primary-inverse":Oo("primary-inverse"),border:Oo("neutral-90"),"border-strong":Oo("neutral-70"),"border-stronger":Oo("neutral-50"),"border-primary":Oo("primary-50"),"border-primary-subtle":Oo("primary-60"),"border-hover":Oo("primary-90"),"border-hover-strong":Oo("primary-60"),"border-selected":Oo("primary-50"),"border-selected-subtle":Oo("primary-70"),"border-selected-subtlest":Oo("primary-90"),"border-selected-hover":Oo("primary-40"),"border-focus":Oo("primary-60"),"border-focus-strong":Oo("primary-50"),"border-disabled":Oo("neutral-90"),"border-selected-disabled":Oo("neutral-70"),"border-success":Oo("success-60"),"border-warning":Oo("warning-60"),"border-error":Oo("error-60"),"border-error-focus":Oo("error-60"),"border-error-focus-strong":Oo("error-40"),"border-error-strong":Oo("error-40"),"border-info":Oo("info-60"),bg:Oo("white"),"bg-strong":Oo("neutral-100"),"bg-stronger":Oo("neutral-95"),"bg-strongest":Oo("neutral-90"),"bg-hover":Oo("primary-95"),"bg-hover-strong":Oo("primary-90"),"bg-hover-subtle":Oo("primary-100"),"bg-hover-neutral":Oo("neutral-100"),"bg-hover-neutral-strong":Oo("neutral-90"),"bg-selected":Oo("primary-95"),"bg-selected-hover":Oo("primary-90"),"bg-selected-strong":Oo("primary-90"),"bg-selected-stronger":Oo("primary-70"),"bg-selected-strongest":Oo("primary-50"),"bg-selected-strongest-hover":Oo("primary-40"),"bg-disabled":Oo("neutral-95"),"bg-selected-disabled":Oo("neutral-95"),"bg-selected-stronger-disabled":Oo("neutral-70"),"bg-success":Oo("success-100"),"bg-success-hover":Oo("success-95"),"bg-success-strong":Oo("success-50"),"bg-success-strong-hover":Oo("success-40"),"bg-warning":Oo("warning-100"),"bg-warning-hover":Oo("warning-95"),"bg-warning-strong":Oo("warning-50"),"bg-warning-strong-hover":Oo("warning-40"),"bg-info":Oo("info-100"),"bg-info-hover":Oo("info-95"),"bg-info-strong":Oo("info-50"),"bg-info-strong-hover":Oo("info-40"),"bg-error":Oo("error-100"),"bg-error-hover":Oo("error-95"),"bg-error-strong":Oo("error-50"),"bg-error-strong-hover":Oo("error-40"),"bg-inverse":Oo("neutral-20"),"bg-inverse-subtle":Oo("neutral-30"),"bg-inverse-subtler":Oo("neutral-50"),"bg-inverse-subtlest":Oo("neutral-60"),"bg-inverse-hover":Oo("neutral-40"),"bg-primary":Oo("primary-50"),"bg-primary-subtle":Oo("primary-60"),"bg-primary-subtler":Oo("primary-95"),"bg-primary-subtlest":Oo("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":Oo("primary-40"),"bg-primary-subtlest-hover":Oo("primary-90"),"bg-primary-subtlest-selected":Oo("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:Oo("primary-50"),"hyperlink-hover":Oo("primary-40"),"hyperlink-visited":Oo("primary-40"),"hyperlink-inverse":Oo("primary-inverse"),"focus-ring":Oo("primary-50"),"focus-ring-inverse":Oo("white")},Lo={text:Oo("neutral-100"),"text-subtle":Oo("neutral-80"),"text-subtler":Oo("neutral-60"),"text-subtlest":Oo("neutral-50"),"text-primary":Oo("primary-60"),"text-primary-strongest":Oo("primary-90"),"text-hover":Oo("primary-70"),"text-selected":Oo("primary-60"),"text-selected-hover":Oo("primary-70"),"text-disabled":Oo("neutral-60"),"text-disabled-subtle":Oo("neutral-50"),"text-disabled-subtlest":Oo("neutral-30"),"text-selected-disabled":Oo("neutral-90"),"text-success":Oo("success-70"),"text-warning":Oo("warning-70"),"text-error":Oo("error-70"),"text-info":Oo("info-70"),"text-inverse":Oo("black"),icon:Oo("neutral-60"),"icon-subtle":Oo("neutral-50"),"icon-strongest":Oo("neutral-90"),"icon-primary":Oo("primary-60"),"icon-primary-subtle":Oo("primary-50"),"icon-primary-subtlest":Oo("primary-40"),"icon-hover":Oo("primary-70"),"icon-selected":Oo("primary-60"),"icon-selected-hover":Oo("primary-70"),"icon-disabled":Oo("neutral-60"),"icon-disabled-subtle":Oo("neutral-50"),"icon-selected-disabled":Oo("neutral-50"),"icon-success":Oo("success-60"),"icon-warning":Oo("warning-50"),"icon-error":Oo("error-60"),"icon-error-strong":Oo("error-70"),"icon-info":Oo("info-60"),"icon-inverse":Oo("black"),"icon-primary-inverse":Oo("primary-inverse"),border:Oo("neutral-20"),"border-strong":Oo("neutral-40"),"border-stronger":Oo("neutral-60"),"border-primary":Oo("primary-60"),"border-primary-subtle":Oo("primary-50"),"border-hover":Oo("primary-20"),"border-hover-strong":Oo("primary-50"),"border-selected":Oo("primary-60"),"border-selected-subtle":Oo("primary-40"),"border-selected-subtlest":Oo("primary-20"),"border-selected-hover":Oo("primary-70"),"border-focus":Oo("primary-50"),"border-focus-strong":Oo("primary-60"),"border-disabled":Oo("neutral-20"),"border-selected-disabled":Oo("neutral-40"),"border-success":Oo("success-50"),"border-warning":Oo("warning-50"),"border-error":Oo("error-50"),"border-error-focus":Oo("error-50"),"border-error-focus-strong":Oo("error-70"),"border-error-strong":Oo("error-70"),"border-info":Oo("info-50"),bg:Oo("black"),"bg-strong":Oo("neutral-10"),"bg-stronger":Oo("neutral-20"),"bg-strongest":Oo("neutral-20"),"bg-hover":Oo("primary-20"),"bg-hover-strong":Oo("primary-20"),"bg-hover-subtle":Oo("primary-10"),"bg-hover-neutral":Oo("neutral-10"),"bg-hover-neutral-strong":Oo("neutral-20"),"bg-selected":Oo("primary-20"),"bg-selected-hover":Oo("primary-20"),"bg-selected-strong":Oo("primary-20"),"bg-selected-stronger":Oo("primary-40"),"bg-selected-strongest":Oo("primary-60"),"bg-selected-strongest-hover":Oo("primary-70"),"bg-disabled":Oo("neutral-20"),"bg-selected-disabled":Oo("neutral-20"),"bg-selected-stronger-disabled":Oo("neutral-40"),"bg-success":Oo("success-10"),"bg-success-hover":Oo("success-20"),"bg-success-strong":Oo("success-60"),"bg-success-strong-hover":Oo("success-70"),"bg-warning":Oo("warning-10"),"bg-warning-hover":Oo("warning-20"),"bg-warning-strong":Oo("warning-60"),"bg-warning-strong-hover":Oo("warning-70"),"bg-info":Oo("info-10"),"bg-info-hover":Oo("info-20"),"bg-info-strong":Oo("info-60"),"bg-info-strong-hover":Oo("info-70"),"bg-error":Oo("error-10"),"bg-error-hover":Oo("error-20"),"bg-error-strong":Oo("error-60"),"bg-error-strong-hover":Oo("error-70"),"bg-inverse":Oo("neutral-90"),"bg-inverse-subtle":Oo("neutral-80"),"bg-inverse-subtler":Oo("neutral-60"),"bg-inverse-subtlest":Oo("neutral-50"),"bg-inverse-hover":Oo("neutral-70"),"bg-primary":Oo("primary-60"),"bg-primary-subtle":Oo("primary-50"),"bg-primary-subtler":Oo("primary-20"),"bg-primary-subtlest":Oo("primary-10"),"bg-available":"#185339","bg-primary-hover":Oo("primary-70"),"bg-primary-subtlest-hover":Oo("primary-20"),"bg-primary-subtlest-selected":Oo("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:Oo("primary-60"),"hyperlink-hover":Oo("primary-70"),"hyperlink-visited":Oo("primary-70"),"hyperlink-inverse":Oo("primary-inverse"),"focus-ring":Oo("primary-60"),"focus-ring-inverse":Oo("black")},Ro={text:Oo("neutral-30"),"text-subtle":Oo("neutral-40"),"text-subtler":Oo("neutral-50"),"text-subtlest":Oo("neutral-70"),"text-primary":Oo("neutral-10"),"text-primary-strongest":Oo("neutral-10"),"text-hover":Oo("neutral-70"),"text-selected":Oo("neutral-20"),"text-selected-hover":Oo("neutral-10"),"text-disabled":Oo("neutral-50"),"text-disabled-subtle":Oo("neutral-70"),"text-disabled-subtlest":Oo("neutral-80"),"text-selected-disabled":Oo("neutral-40"),"text-success":Oo("success-40"),"text-warning":Oo("warning-40"),"text-error":Oo("brand-30"),"text-info":Oo("neutral-40"),"text-inverse":Oo("neutral-100"),icon:Oo("neutral-40"),"icon-subtle":Oo("neutral-50"),"icon-strongest":Oo("neutral-10"),"icon-primary":Oo("neutral-10"),"icon-primary-subtle":Oo("neutral-30"),"icon-primary-subtlest":Oo("neutral-60"),"icon-hover":Oo("neutral-70"),"icon-selected":Oo("brand-20"),"icon-selected-hover":Oo("brand-10"),"icon-disabled":Oo("neutral-50"),"icon-disabled-subtle":Oo("neutral-70"),"icon-selected-disabled":Oo("neutral-40"),"icon-success":Oo("success-40"),"icon-warning":Oo("warning-60"),"icon-error":Oo("brand-30"),"icon-error-strong":Oo("brand-10"),"icon-info":Oo("neutral-40"),"icon-inverse":Oo("neutral-100"),"icon-primary-inverse":"#F9B371",border:Oo("neutral-90"),"border-strong":Oo("neutral-30"),"border-stronger":Oo("neutral-20"),"border-primary":Oo("neutral-40"),"border-primary-subtle":Oo("neutral-60"),"border-hover":Oo("neutral-80"),"border-hover-strong":Oo("neutral-10"),"border-selected":Oo("brand-20"),"border-selected-subtle":Oo("neutral-40"),"border-selected-subtlest":Oo("neutral-70"),"border-selected-hover":Oo("neutral-10"),"border-focus":Oo("neutral-20"),"border-focus-strong":Oo("neutral-10"),"border-disabled":Oo("neutral-90"),"border-selected-disabled":Oo("neutral-80"),"border-success":Oo("success-40"),"border-warning":Oo("warning-60"),"border-error":Oo("brand-30"),"border-error-focus":Oo("brand-20"),"border-error-focus-strong":Oo("brand-10"),"border-error-strong":Oo("brand-20"),"border-info":Oo("neutral-40"),bg:Oo("neutral-100"),"bg-strong":Oo("neutral-95"),"bg-stronger":Oo("neutral-90"),"bg-strongest":Oo("neutral-80"),"bg-hover":Oo("brand-90"),"bg-hover-strong":Oo("brand-80"),"bg-hover-subtle":Oo("neutral-90"),"bg-hover-neutral":Oo("neutral-90"),"bg-hover-neutral-strong":Oo("neutral-90"),"bg-selected":Oo("brand-100"),"bg-selected-hover":Oo("brand-30"),"bg-selected-strong":Oo("brand-50"),"bg-selected-stronger":Oo("brand-40"),"bg-selected-strongest":Oo("brand-20"),"bg-selected-strongest-hover":Oo("brand-10"),"bg-disabled":Oo("neutral-90"),"bg-selected-disabled":Oo("neutral-90"),"bg-selected-stronger-disabled":Oo("neutral-80"),"bg-success":Oo("success-100"),"bg-success-hover":Oo("success-95"),"bg-success-strong":Oo("success-50"),"bg-success-strong-hover":Oo("success-40"),"bg-warning":Oo("warning-100"),"bg-warning-hover":Oo("warning-95"),"bg-warning-strong":Oo("warning-50"),"bg-warning-strong-hover":Oo("warning-40"),"bg-info":Oo("neutral-95"),"bg-info-hover":Oo("info-95"),"bg-info-strong":Oo("info-50"),"bg-info-strong-hover":Oo("info-40"),"bg-error":Oo("brand-100"),"bg-error-hover":Oo("error-95"),"bg-error-strong":Oo("error-50"),"bg-error-strong-hover":Oo("error-40"),"bg-inverse":Oo("neutral-40"),"bg-inverse-subtle":Oo("neutral-60"),"bg-inverse-subtler":Oo("neutral-70"),"bg-inverse-subtlest":Oo("neutral-80"),"bg-inverse-hover":Oo("neutral-30"),"bg-primary":Oo("brand-20"),"bg-primary-subtle":Oo("brand-60"),"bg-primary-subtler":Oo("brand-80"),"bg-primary-subtlest":Oo("brand-100"),"bg-available":Oo("success-60"),"bg-primary-hover":Oo("brand-10"),"bg-primary-subtlest-hover":Oo("brand-80"),"bg-primary-subtlest-selected":Oo("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:Oo("neutral-10"),"hyperlink-hover":Oo("neutral-40"),"hyperlink-visited":Oo("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":Oo("primary-50"),"focus-ring-inverse":Oo("white")},jo={text:Oo("neutral-20"),"text-subtle":Oo("neutral-30"),"text-subtler":Oo("neutral-50"),"text-subtlest":Oo("neutral-60"),"text-primary":Oo("primary-50"),"text-primary-strongest":Oo("primary-20"),"text-hover":Oo("primary-40"),"text-selected":Oo("primary-50"),"text-selected-hover":Oo("primary-40"),"text-disabled":Oo("neutral-50"),"text-disabled-subtle":Oo("neutral-60"),"text-disabled-subtlest":Oo("neutral-80"),"text-selected-disabled":Oo("neutral-20"),"text-success":Oo("success-40"),"text-warning":Oo("warning-40"),"text-error":Oo("error-40"),"text-info":Oo("info-40"),"text-inverse":Oo("white"),icon:Oo("neutral-50"),"icon-subtle":Oo("neutral-60"),"icon-strongest":Oo("neutral-20"),"icon-primary":Oo("primary-50"),"icon-primary-subtle":Oo("primary-60"),"icon-primary-subtlest":Oo("primary-70"),"icon-hover":Oo("primary-40"),"icon-selected":Oo("primary-50"),"icon-selected-hover":Oo("primary-40"),"icon-disabled":Oo("neutral-50"),"icon-disabled-subtle":Oo("neutral-60"),"icon-selected-disabled":Oo("neutral-60"),"icon-success":Oo("success-50"),"icon-warning":Oo("warning-60"),"icon-error":Oo("error-50"),"icon-error-strong":Oo("error-40"),"icon-info":Oo("info-50"),"icon-inverse":Oo("white"),"icon-primary-inverse":Oo("primary-inverse"),border:Oo("neutral-90"),"border-strong":Oo("neutral-70"),"border-stronger":Oo("neutral-50"),"border-primary":Oo("primary-50"),"border-primary-subtle":Oo("primary-60"),"border-hover":Oo("primary-90"),"border-hover-strong":Oo("primary-60"),"border-selected":Oo("primary-50"),"border-selected-subtle":Oo("primary-70"),"border-selected-subtlest":Oo("primary-90"),"border-selected-hover":Oo("primary-40"),"border-focus":Oo("primary-60"),"border-focus-strong":Oo("primary-50"),"border-disabled":Oo("neutral-90"),"border-selected-disabled":Oo("neutral-70"),"border-success":Oo("success-60"),"border-warning":Oo("warning-60"),"border-error":Oo("error-60"),"border-error-focus":Oo("error-60"),"border-error-focus-strong":Oo("error-40"),"border-error-strong":Oo("error-40"),"border-info":Oo("info-60"),bg:Oo("white"),"bg-strong":Oo("neutral-100"),"bg-stronger":Oo("neutral-95"),"bg-strongest":Oo("neutral-90"),"bg-hover":Oo("primary-95"),"bg-hover-strong":Oo("primary-90"),"bg-hover-subtle":Oo("primary-100"),"bg-hover-neutral":Oo("neutral-100"),"bg-hover-neutral-strong":Oo("neutral-90"),"bg-selected":Oo("primary-95"),"bg-selected-hover":Oo("primary-90"),"bg-selected-strong":Oo("primary-90"),"bg-selected-stronger":Oo("primary-70"),"bg-selected-strongest":Oo("primary-50"),"bg-selected-strongest-hover":Oo("primary-40"),"bg-disabled":Oo("neutral-95"),"bg-selected-disabled":Oo("neutral-95"),"bg-selected-stronger-disabled":Oo("neutral-70"),"bg-success":Oo("success-100"),"bg-success-hover":Oo("success-95"),"bg-success-strong":Oo("success-50"),"bg-success-strong-hover":Oo("success-40"),"bg-warning":Oo("warning-100"),"bg-warning-hover":Oo("warning-95"),"bg-warning-strong":Oo("warning-50"),"bg-warning-strong-hover":Oo("warning-40"),"bg-info":Oo("info-100"),"bg-info-hover":Oo("info-95"),"bg-info-strong":Oo("info-50"),"bg-info-strong-hover":Oo("info-40"),"bg-error":Oo("error-100"),"bg-error-hover":Oo("error-95"),"bg-error-strong":Oo("error-50"),"bg-error-strong-hover":Oo("error-40"),"bg-inverse":Oo("neutral-20"),"bg-inverse-subtle":Oo("neutral-30"),"bg-inverse-subtler":Oo("neutral-50"),"bg-inverse-subtlest":Oo("neutral-60"),"bg-inverse-hover":Oo("neutral-40"),"bg-primary":Oo("primary-50"),"bg-primary-subtle":Oo("primary-60"),"bg-primary-subtler":Oo("primary-95"),"bg-primary-subtlest":Oo("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":Oo("primary-40"),"bg-primary-subtlest-hover":Oo("primary-90"),"bg-primary-subtlest-selected":Oo("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:Oo("primary-50"),"hyperlink-hover":Oo("primary-40"),"hyperlink-visited":Oo("primary-40"),"hyperlink-inverse":Oo("primary-inverse"),"focus-ring":Oo("primary-50"),"focus-ring-inverse":Oo("white")},_o={text:Oo("neutral-100"),"text-subtle":Oo("neutral-80"),"text-subtler":Oo("neutral-60"),"text-subtlest":Oo("neutral-50"),"text-primary":Oo("primary-60"),"text-primary-strongest":Oo("primary-90"),"text-hover":Oo("primary-70"),"text-selected":Oo("primary-60"),"text-selected-hover":Oo("primary-70"),"text-disabled":Oo("neutral-60"),"text-disabled-subtle":Oo("neutral-50"),"text-disabled-subtlest":Oo("neutral-30"),"text-selected-disabled":Oo("neutral-90"),"text-success":Oo("success-70"),"text-warning":Oo("warning-70"),"text-error":Oo("error-70"),"text-info":Oo("info-70"),"text-inverse":Oo("black"),icon:Oo("neutral-60"),"icon-subtle":Oo("neutral-50"),"icon-strongest":Oo("neutral-90"),"icon-primary":Oo("primary-60"),"icon-primary-subtle":Oo("primary-50"),"icon-primary-subtlest":Oo("primary-40"),"icon-hover":Oo("primary-70"),"icon-selected":Oo("primary-60"),"icon-selected-hover":Oo("primary-70"),"icon-disabled":Oo("neutral-60"),"icon-disabled-subtle":Oo("neutral-50"),"icon-selected-disabled":Oo("neutral-50"),"icon-success":Oo("success-60"),"icon-warning":Oo("warning-50"),"icon-error":Oo("error-60"),"icon-error-strong":Oo("error-70"),"icon-info":Oo("info-60"),"icon-inverse":Oo("black"),"icon-primary-inverse":Oo("primary-inverse"),border:Oo("neutral-20"),"border-strong":Oo("neutral-40"),"border-stronger":Oo("neutral-60"),"border-primary":Oo("primary-60"),"border-primary-subtle":Oo("primary-50"),"border-hover":Oo("primary-20"),"border-hover-strong":Oo("primary-50"),"border-selected":Oo("primary-60"),"border-selected-subtle":Oo("primary-40"),"border-selected-subtlest":Oo("primary-20"),"border-selected-hover":Oo("primary-70"),"border-focus":Oo("primary-50"),"border-focus-strong":Oo("primary-60"),"border-disabled":Oo("neutral-20"),"border-selected-disabled":Oo("neutral-40"),"border-success":Oo("success-50"),"border-warning":Oo("warning-50"),"border-error":Oo("error-50"),"border-error-focus":Oo("error-50"),"border-error-focus-strong":Oo("error-70"),"border-error-strong":Oo("error-70"),"border-info":Oo("info-50"),bg:Oo("black"),"bg-strong":Oo("neutral-10"),"bg-stronger":Oo("neutral-20"),"bg-strongest":Oo("neutral-20"),"bg-hover":Oo("primary-20"),"bg-hover-strong":Oo("primary-20"),"bg-hover-subtle":Oo("primary-10"),"bg-hover-neutral":Oo("neutral-10"),"bg-hover-neutral-strong":Oo("neutral-20"),"bg-selected":Oo("primary-20"),"bg-selected-hover":Oo("primary-20"),"bg-selected-strong":Oo("primary-20"),"bg-selected-stronger":Oo("primary-40"),"bg-selected-strongest":Oo("primary-60"),"bg-selected-strongest-hover":Oo("primary-70"),"bg-disabled":Oo("neutral-20"),"bg-selected-disabled":Oo("neutral-20"),"bg-selected-stronger-disabled":Oo("neutral-40"),"bg-success":Oo("success-10"),"bg-success-hover":Oo("success-20"),"bg-success-strong":Oo("success-60"),"bg-success-strong-hover":Oo("success-70"),"bg-warning":Oo("warning-10"),"bg-warning-hover":Oo("warning-20"),"bg-warning-strong":Oo("warning-60"),"bg-warning-strong-hover":Oo("warning-70"),"bg-info":Oo("info-10"),"bg-info-hover":Oo("info-20"),"bg-info-strong":Oo("info-60"),"bg-info-strong-hover":Oo("info-70"),"bg-error":Oo("error-10"),"bg-error-hover":Oo("error-20"),"bg-error-strong":Oo("error-60"),"bg-error-strong-hover":Oo("error-70"),"bg-inverse":Oo("neutral-90"),"bg-inverse-subtle":Oo("neutral-80"),"bg-inverse-subtler":Oo("neutral-60"),"bg-inverse-subtlest":Oo("neutral-50"),"bg-inverse-hover":Oo("neutral-70"),"bg-primary":Oo("primary-60"),"bg-primary-subtle":Oo("primary-50"),"bg-primary-subtler":Oo("primary-20"),"bg-primary-subtlest":Oo("primary-10"),"bg-available":"#185339","bg-primary-hover":Oo("primary-70"),"bg-primary-subtlest-hover":Oo("primary-20"),"bg-primary-subtlest-selected":Oo("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:Oo("primary-60"),"hyperlink-hover":Oo("primary-70"),"hyperlink-visited":Oo("primary-70"),"hyperlink-inverse":Oo("primary-inverse"),"focus-ring":Oo("primary-60"),"focus-ring-inverse":Oo("black")},Wo={text:Oo("neutral-20"),"text-subtle":Oo("neutral-30"),"text-subtler":Oo("neutral-50"),"text-subtlest":Oo("neutral-60"),"text-primary":Oo("primary-50"),"text-primary-strongest":Oo("primary-20"),"text-hover":Oo("primary-40"),"text-selected":Oo("primary-50"),"text-selected-hover":Oo("primary-40"),"text-disabled":Oo("neutral-50"),"text-disabled-subtle":Oo("neutral-60"),"text-disabled-subtlest":Oo("neutral-80"),"text-selected-disabled":Oo("neutral-20"),"text-success":Oo("success-40"),"text-warning":Oo("warning-40"),"text-error":Oo("error-40"),"text-info":Oo("info-40"),"text-inverse":Oo("white"),icon:Oo("neutral-50"),"icon-subtle":Oo("neutral-60"),"icon-strongest":Oo("neutral-20"),"icon-primary":Oo("primary-50"),"icon-primary-subtle":Oo("primary-60"),"icon-primary-subtlest":Oo("primary-70"),"icon-hover":Oo("primary-40"),"icon-selected":Oo("primary-50"),"icon-selected-hover":Oo("primary-40"),"icon-disabled":Oo("neutral-50"),"icon-disabled-subtle":Oo("neutral-60"),"icon-selected-disabled":Oo("neutral-60"),"icon-success":Oo("success-50"),"icon-warning":Oo("warning-60"),"icon-error":Oo("error-50"),"icon-error-strong":Oo("error-40"),"icon-info":Oo("info-50"),"icon-inverse":Oo("white"),"icon-primary-inverse":Oo("primary-inverse"),border:Oo("neutral-50"),"border-strong":Oo("neutral-70"),"border-stronger":Oo("neutral-50"),"border-primary":Oo("primary-50"),"border-primary-subtle":Oo("primary-60"),"border-hover":Oo("primary-90"),"border-hover-strong":Oo("primary-60"),"border-selected":Oo("primary-50"),"border-selected-subtle":Oo("primary-70"),"border-selected-subtlest":Oo("primary-90"),"border-selected-hover":Oo("primary-40"),"border-focus":Oo("primary-60"),"border-focus-strong":Oo("primary-50"),"border-disabled":Oo("neutral-90"),"border-selected-disabled":Oo("neutral-70"),"border-success":Oo("success-60"),"border-warning":Oo("warning-60"),"border-error":Oo("error-60"),"border-error-focus":Oo("error-60"),"border-error-focus-strong":Oo("error-40"),"border-error-strong":Oo("error-40"),"border-info":Oo("info-60"),bg:Oo("white"),"bg-strong":Oo("neutral-100"),"bg-stronger":Oo("neutral-95"),"bg-strongest":Oo("neutral-90"),"bg-hover":Oo("primary-95"),"bg-hover-strong":Oo("primary-90"),"bg-hover-subtle":Oo("primary-100"),"bg-hover-neutral":Oo("neutral-100"),"bg-hover-neutral-strong":Oo("neutral-90"),"bg-selected":Oo("primary-95"),"bg-selected-hover":Oo("primary-90"),"bg-selected-strong":Oo("primary-90"),"bg-selected-stronger":Oo("primary-70"),"bg-selected-strongest":Oo("primary-50"),"bg-selected-strongest-hover":Oo("primary-40"),"bg-disabled":Oo("neutral-95"),"bg-selected-disabled":Oo("neutral-95"),"bg-selected-stronger-disabled":Oo("neutral-70"),"bg-success":Oo("success-100"),"bg-success-hover":Oo("success-95"),"bg-success-strong":Oo("success-50"),"bg-success-strong-hover":Oo("success-40"),"bg-warning":Oo("warning-100"),"bg-warning-hover":Oo("warning-95"),"bg-warning-strong":Oo("warning-50"),"bg-warning-strong-hover":Oo("warning-40"),"bg-info":Oo("info-100"),"bg-info-hover":Oo("info-95"),"bg-info-strong":Oo("info-50"),"bg-info-strong-hover":Oo("info-40"),"bg-error":Oo("error-100"),"bg-error-hover":Oo("error-95"),"bg-error-strong":Oo("error-50"),"bg-error-strong-hover":Oo("error-40"),"bg-inverse":Oo("neutral-20"),"bg-inverse-subtle":Oo("neutral-30"),"bg-inverse-subtler":Oo("neutral-50"),"bg-inverse-subtlest":Oo("neutral-60"),"bg-inverse-hover":Oo("neutral-40"),"bg-primary":Oo("primary-50"),"bg-primary-subtle":Oo("primary-60"),"bg-primary-subtler":Oo("primary-95"),"bg-primary-subtlest":Oo("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":Oo("primary-40"),"bg-primary-subtlest-hover":Oo("primary-90"),"bg-primary-subtlest-selected":Oo("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:Oo("primary-50"),"hyperlink-hover":Oo("primary-40"),"hyperlink-visited":Oo("primary-40"),"hyperlink-inverse":Oo("primary-inverse"),"focus-ring":Oo("primary-50"),"focus-ring-inverse":Oo("white")},Po={text:Oo("neutral-100"),"text-subtle":Oo("neutral-80"),"text-subtler":Oo("neutral-60"),"text-subtlest":Oo("neutral-50"),"text-primary":Oo("primary-60"),"text-primary-strongest":Oo("primary-90"),"text-hover":Oo("primary-70"),"text-selected":Oo("primary-60"),"text-selected-hover":Oo("primary-70"),"text-disabled":Oo("neutral-60"),"text-disabled-subtle":Oo("neutral-50"),"text-disabled-subtlest":Oo("neutral-30"),"text-selected-disabled":Oo("neutral-90"),"text-success":Oo("success-70"),"text-warning":Oo("warning-70"),"text-error":Oo("error-70"),"text-info":Oo("info-70"),"text-inverse":Oo("black"),icon:Oo("neutral-60"),"icon-subtle":Oo("neutral-50"),"icon-strongest":Oo("neutral-90"),"icon-primary":Oo("primary-60"),"icon-primary-subtle":Oo("primary-50"),"icon-primary-subtlest":Oo("primary-40"),"icon-hover":Oo("primary-70"),"icon-selected":Oo("primary-60"),"icon-selected-hover":Oo("primary-70"),"icon-disabled":Oo("neutral-60"),"icon-disabled-subtle":Oo("neutral-50"),"icon-selected-disabled":Oo("neutral-50"),"icon-success":Oo("success-60"),"icon-warning":Oo("warning-50"),"icon-error":Oo("error-60"),"icon-error-strong":Oo("error-70"),"icon-info":Oo("info-60"),"icon-inverse":Oo("black"),"icon-primary-inverse":Oo("primary-inverse"),border:Oo("neutral-50"),"border-strong":Oo("neutral-40"),"border-stronger":Oo("neutral-60"),"border-primary":Oo("primary-60"),"border-primary-subtle":Oo("primary-50"),"border-hover":Oo("primary-20"),"border-hover-strong":Oo("primary-50"),"border-selected":Oo("primary-60"),"border-selected-subtle":Oo("primary-40"),"border-selected-subtlest":Oo("primary-20"),"border-selected-hover":Oo("primary-70"),"border-focus":Oo("primary-50"),"border-focus-strong":Oo("primary-60"),"border-disabled":Oo("neutral-20"),"border-selected-disabled":Oo("neutral-40"),"border-success":Oo("success-50"),"border-warning":Oo("warning-50"),"border-error":Oo("error-50"),"border-error-focus":Oo("error-50"),"border-error-focus-strong":Oo("error-70"),"border-error-strong":Oo("error-70"),"border-info":Oo("info-50"),bg:Oo("black"),"bg-strong":Oo("neutral-10"),"bg-stronger":Oo("neutral-20"),"bg-strongest":Oo("neutral-20"),"bg-hover":Oo("primary-20"),"bg-hover-strong":Oo("primary-20"),"bg-hover-subtle":Oo("primary-10"),"bg-hover-neutral":Oo("neutral-10"),"bg-hover-neutral-strong":Oo("neutral-20"),"bg-selected":Oo("primary-20"),"bg-selected-hover":Oo("primary-20"),"bg-selected-strong":Oo("primary-20"),"bg-selected-stronger":Oo("primary-40"),"bg-selected-strongest":Oo("primary-60"),"bg-selected-strongest-hover":Oo("primary-70"),"bg-disabled":Oo("neutral-20"),"bg-selected-disabled":Oo("neutral-20"),"bg-selected-stronger-disabled":Oo("neutral-40"),"bg-success":Oo("success-10"),"bg-success-hover":Oo("success-20"),"bg-success-strong":Oo("success-60"),"bg-success-strong-hover":Oo("success-70"),"bg-warning":Oo("warning-10"),"bg-warning-hover":Oo("warning-20"),"bg-warning-strong":Oo("warning-60"),"bg-warning-strong-hover":Oo("warning-70"),"bg-info":Oo("info-10"),"bg-info-hover":Oo("info-20"),"bg-info-strong":Oo("info-60"),"bg-info-strong-hover":Oo("info-70"),"bg-error":Oo("error-10"),"bg-error-hover":Oo("error-20"),"bg-error-strong":Oo("error-60"),"bg-error-strong-hover":Oo("error-70"),"bg-inverse":Oo("neutral-90"),"bg-inverse-subtle":Oo("neutral-80"),"bg-inverse-subtler":Oo("neutral-60"),"bg-inverse-subtlest":Oo("neutral-50"),"bg-inverse-hover":Oo("neutral-70"),"bg-primary":Oo("primary-60"),"bg-primary-subtle":Oo("primary-50"),"bg-primary-subtler":Oo("primary-20"),"bg-primary-subtlest":Oo("primary-10"),"bg-available":"#185339","bg-primary-hover":Oo("primary-70"),"bg-primary-subtlest-hover":Oo("primary-20"),"bg-primary-subtlest-selected":Oo("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:Oo("primary-60"),"hyperlink-hover":Oo("primary-70"),"hyperlink-visited":Oo("primary-70"),"hyperlink-inverse":Oo("primary-inverse"),"focus-ring":Oo("primary-60"),"focus-ring-inverse":Oo("black")},No={collections:{lifesg:Ho,bookingsg:Ho,rbs:Ho,mylegacy:Ho,ccube:Ho,oneservice:Ho,pa:Ro,a11yplayground:jo,supportgowhere:Ho,sgwdigitallobby:Wo,imda:Ho,spf:Ho,smgs:Ho},defaultValue:"lifesg"},Yo={collections:{lifesg:Lo,bookingsg:Lo,rbs:Lo,mylegacy:Lo,ccube:Lo,oneservice:Lo,pa:Lo,a11yplayground:_o,supportgowhere:Lo,sgwdigitallobby:Po,imda:Lo,spf:Lo,smgs:Lo},defaultValue:"lifesg"},Vo=e=>r=>{var t;const n=r.theme,o="dark"===(null==n?void 0:n.colourMode),i=bo(o?Yo:No,null==n?void 0:n.colourScheme),a=o?"semanticColourDark":"semanticColour",s=null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t[a],l=s?ho(i,e,s):i[e];return"function"==typeof l?l(r):l},Uo={text:Vo("text"),"text-subtle":Vo("text-subtle"),"text-subtler":Vo("text-subtler"),"text-subtlest":Vo("text-subtlest"),"text-primary":Vo("text-primary"),"text-primary-strongest":Vo("text-primary-strongest"),"text-hover":Vo("text-hover"),"text-selected":Vo("text-selected"),"text-selected-hover":Vo("text-selected-hover"),"text-disabled":Vo("text-disabled"),"text-disabled-subtle":Vo("text-disabled-subtle"),"text-disabled-subtlest":Vo("text-disabled-subtlest"),"text-selected-disabled":Vo("text-selected-disabled"),"text-success":Vo("text-success"),"text-warning":Vo("text-warning"),"text-error":Vo("text-error"),"text-info":Vo("text-info"),"text-inverse":Vo("text-inverse"),icon:Vo("icon"),"icon-subtle":Vo("icon-subtle"),"icon-strongest":Vo("icon-strongest"),"icon-primary":Vo("icon-primary"),"icon-primary-subtle":Vo("icon-primary-subtle"),"icon-primary-subtlest":Vo("icon-primary-subtlest"),"icon-hover":Vo("icon-hover"),"icon-selected":Vo("icon-selected"),"icon-selected-hover":Vo("icon-selected-hover"),"icon-disabled":Vo("icon-disabled"),"icon-disabled-subtle":Vo("icon-disabled-subtle"),"icon-selected-disabled":Vo("icon-selected-disabled"),"icon-success":Vo("icon-success"),"icon-warning":Vo("icon-warning"),"icon-error":Vo("icon-error"),"icon-error-strong":Vo("icon-error-strong"),"icon-info":Vo("icon-info"),"icon-inverse":Vo("icon-inverse"),"icon-primary-inverse":Vo("icon-primary-inverse"),border:Vo("border"),"border-strong":Vo("border-strong"),"border-stronger":Vo("border-stronger"),"border-primary":Vo("border-primary"),"border-primary-subtle":Vo("border-primary-subtle"),"border-hover":Vo("border-hover"),"border-hover-strong":Vo("border-hover-strong"),"border-selected":Vo("border-selected"),"border-selected-subtle":Vo("border-selected-subtle"),"border-selected-subtlest":Vo("border-selected-subtlest"),"border-selected-hover":Vo("border-selected-hover"),"border-focus":Vo("border-focus"),"border-focus-strong":Vo("border-focus-strong"),"border-disabled":Vo("border-disabled"),"border-selected-disabled":Vo("border-selected-disabled"),"border-success":Vo("border-success"),"border-warning":Vo("border-warning"),"border-error":Vo("border-error"),"border-error-focus":Vo("border-error-focus"),"border-error-focus-strong":Vo("border-error-focus-strong"),"border-error-strong":Vo("border-error-strong"),"border-info":Vo("border-info"),bg:Vo("bg"),"bg-strong":Vo("bg-strong"),"bg-stronger":Vo("bg-stronger"),"bg-strongest":Vo("bg-strongest"),"bg-hover":Vo("bg-hover"),"bg-hover-strong":Vo("bg-hover-strong"),"bg-hover-subtle":Vo("bg-hover-subtle"),"bg-hover-neutral":Vo("bg-hover-neutral"),"bg-hover-neutral-strong":Vo("bg-hover-neutral-strong"),"bg-selected":Vo("bg-selected"),"bg-selected-hover":Vo("bg-selected-hover"),"bg-selected-strong":Vo("bg-selected-strong"),"bg-selected-stronger":Vo("bg-selected-stronger"),"bg-selected-strongest":Vo("bg-selected-strongest"),"bg-selected-strongest-hover":Vo("bg-selected-strongest-hover"),"bg-disabled":Vo("bg-disabled"),"bg-selected-disabled":Vo("bg-selected-disabled"),"bg-selected-stronger-disabled":Vo("bg-selected-stronger-disabled"),"bg-success":Vo("bg-success"),"bg-success-hover":Vo("bg-success-hover"),"bg-success-strong":Vo("bg-success-strong"),"bg-success-strong-hover":Vo("bg-success-strong-hover"),"bg-warning":Vo("bg-warning"),"bg-warning-hover":Vo("bg-warning-hover"),"bg-warning-strong":Vo("bg-warning-strong"),"bg-warning-strong-hover":Vo("bg-warning-strong-hover"),"bg-info":Vo("bg-info"),"bg-info-hover":Vo("bg-info-hover"),"bg-info-strong":Vo("bg-info-strong"),"bg-info-strong-hover":Vo("bg-info-strong-hover"),"bg-error":Vo("bg-error"),"bg-error-hover":Vo("bg-error-hover"),"bg-error-strong":Vo("bg-error-strong"),"bg-error-strong-hover":Vo("bg-error-strong-hover"),"bg-inverse":Vo("bg-inverse"),"bg-inverse-subtle":Vo("bg-inverse-subtle"),"bg-inverse-subtler":Vo("bg-inverse-subtler"),"bg-inverse-subtlest":Vo("bg-inverse-subtlest"),"bg-inverse-hover":Vo("bg-inverse-hover"),"bg-primary":Vo("bg-primary"),"bg-primary-subtle":Vo("bg-primary-subtle"),"bg-primary-subtler":Vo("bg-primary-subtler"),"bg-primary-subtlest":Vo("bg-primary-subtlest"),"bg-available":Vo("bg-available"),"bg-primary-hover":Vo("bg-primary-hover"),"bg-primary-subtlest-hover":Vo("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":Vo("bg-primary-subtlest-selected"),"overlay-strong":Vo("overlay-strong"),"overlay-subtle":Vo("overlay-subtle"),hyperlink:Vo("hyperlink"),"hyperlink-hover":Vo("hyperlink-hover"),"hyperlink-visited":Vo("hyperlink-visited"),"hyperlink-inverse":Vo("hyperlink-inverse"),"focus-ring":Vo("focus-ring"),"focus-ring-inverse":Vo("focus-ring-inverse")},Zo={solid:e=>r=>{var t,n,o;const{thickness:i,radius:a,colour:s}=e||{},l=null!==(t="function"==typeof i?i(r):i+"px")&&void 0!==t?t:yo["width-010"](r),d=null!==(n="function"==typeof a?a(r):a+"px")&&void 0!==n?n:0,c=null!==(o="function"==typeof s?s(r):s)&&void 0!==o?o:Uo.border(r),u=yo.solid;return F`
            border: ${l} ${u} ${c};
            border-radius: ${d};
        `},"dashed-default":e=>r=>{var t,n,o;const{thickness:i,radius:a,colour:s}=e||{},l=null!==(t="function"==typeof i?i(r):i)&&void 0!==t?t:yo["width-010"](r),d=null!==(n="function"==typeof a?a(r):a)&&void 0!==n?n:0,c=null!==(o="function"==typeof s?s(r):s)&&void 0!==o?o:Uo.border(r),u=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${d}' ry='${d}' stroke='${c}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return F`
            background-image: url("data:image/svg+xml,${u}");
            border-radius: ${d};
        `}},Go={collections:{default:Zo},defaultValue:"default"},qo=e=>1===e.length&&"theme"in e[0],Xo=e=>(...r)=>t=>{const n=qo(r)?[]:r,o=qo(r)?r[0]:t,i=o.theme;return(0,bo(Go,null==i?void 0:i.borderScheme)[e])(...n)(o)},Ko={solid:Xo("solid"),"dashed-default":Xo("dashed-default")},Jo={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":480,"md-min":481,"md-max":768,"lg-min":769,"lg-max":1200,"xl-min":1201,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},Qo=e=>r=>{var t;const n=r.theme,o=bo(Jo,null==n?void 0:n.breakpointScheme);let i;return i=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.breakpoint)?ho(o,e,n.overrides.breakpoint):o[e],i},ei={"xxs-min":Qo("xxs-min"),"xxs-max":Qo("xxs-max"),"xs-min":Qo("xs-min"),"xs-max":Qo("xs-max"),"sm-min":Qo("sm-min"),"sm-max":Qo("sm-max"),"md-min":Qo("md-min"),"md-max":Qo("md-max"),"lg-min":Qo("lg-min"),"lg-max":Qo("lg-max"),"xl-min":Qo("xl-min"),"xl-max":Qo("xl-max"),"xxl-min":Qo("xxl-min"),"xxs-column":Qo("xxs-column"),"xs-column":Qo("xs-column"),"sm-column":Qo("sm-column"),"md-column":Qo("md-column"),"lg-column":Qo("lg-column"),"xl-column":Qo("xl-column"),"xxl-column":Qo("xxl-column"),"xxs-gutter":Qo("xxs-gutter"),"xs-gutter":Qo("xs-gutter"),"sm-gutter":Qo("sm-gutter"),"md-gutter":Qo("md-gutter"),"lg-gutter":Qo("lg-gutter"),"xl-gutter":Qo("xl-gutter"),"xxl-gutter":Qo("xxl-gutter"),"xxs-margin":Qo("xxs-margin"),"xs-margin":Qo("xs-margin"),"sm-margin":Qo("sm-margin"),"md-margin":Qo("md-margin"),"lg-margin":Qo("lg-margin"),"xl-margin":Qo("xl-margin"),"xxl-margin":Qo("xxl-margin")},ri=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,t)=>(r[t]=((e,r)=>{const t=ei["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const n=t(r);return`@media screen and (${e}: ${n}px)`}})(e,t),r)),{}),ti={MaxWidth:ri("max-width"),MinWidth:ri("min-width")},ni={collections:{default:{none:0,xs:2,sm:4,md:8,lg:12,full:9999},spf:{none:0,xs:2,sm:8,md:8,lg:12,full:9999}},defaultValue:"default"},oi=e=>r=>{var t;const n=r.theme,o=bo(ni,null==n?void 0:n.radiusScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.radius)?`${ho(o,e,n.overrides.radius)}px`:`${o[e]}px`},ii={none:oi("none"),xs:oi("xs"),sm:oi("sm"),md:oi("md"),lg:oi("lg"),full:oi("full")},ai={Button:{"button-radius":ii.md,"button-default-colour-bg":Uo["bg-primary"],"button-default-colour-bg-hover":Uo["bg-primary-hover"],"button-default-colour-text":Uo["text-inverse"],"button-secondary-colour-border":Uo["border-primary"],"button-secondary-colour-text":Uo["text-primary"],"button-light-colour-text":Uo["text-primary"],"button-link-colour-text":Uo["text-primary"]},Animation:{"loading-dots-spinner-colour":Uo["icon-primary"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"2rem","navbar-compressed-height":"4rem","navbar-compressed-logo-height":"1.5rem","navbar-mobile-height":"3.5rem","navbar-mobile-logo-height":"1.5rem","navbar-colour-bg":Uo.bg,"navbar-colour-icon":Uo.icon,"navbar-link-colour-text":Uo.text,"navbar-link-colour-text-hover":Uo["text-hover"],"navbar-link-colour-text-selected-hover":Uo["text-selected-hover"]},Footer:{"footer-colour-bg":Uo["bg-strong"],"footer-colour-text":Uo.text,"footer-link-colour-text":Uo.text,"footer-link-colour-text-hover":Uo["text-hover"],"footer-disclaimer-link-colour-text":Uo.text,"footer-disclaimer-link-colour-text-hover":Uo["text-subtler"]}},si={Button:{"button-radius":ii.sm,"button-default-colour-bg":Uo["bg-primary"],"button-default-colour-bg-hover":Uo["bg-primary-hover"],"button-default-colour-text":Uo["text-inverse"],"button-secondary-colour-border":Uo["border-primary"],"button-secondary-colour-text":Uo["text-primary"],"button-light-colour-text":Uo["text-primary"],"button-link-colour-text":Uo["text-primary"]},Animation:{"loading-dots-spinner-colour":Uo["icon-primary"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"2rem","navbar-compressed-height":"4rem","navbar-compressed-logo-height":"1.5rem","navbar-mobile-height":"3.5rem","navbar-mobile-logo-height":"1.5rem","navbar-colour-bg":Uo.bg,"navbar-colour-icon":Uo.icon,"navbar-link-colour-text":Uo.text,"navbar-link-colour-text-hover":Uo["text-hover"],"navbar-link-colour-text-selected-hover":Uo["text-selected-hover"]},Footer:{"footer-colour-bg":Uo["bg-strong"],"footer-colour-text":Uo.text,"footer-link-colour-text":Uo.text,"footer-link-colour-text-hover":Uo["text-hover"],"footer-disclaimer-link-colour-text":Uo.text,"footer-disclaimer-link-colour-text-hover":Uo["text-subtler"]}},li={Button:{"button-radius":ii.sm,"button-default-colour-bg":Uo["bg-primary"],"button-default-colour-bg-hover":Uo["bg-primary-hover"],"button-default-colour-text":Uo["text-inverse"],"button-secondary-colour-border":Uo["border-primary"],"button-secondary-colour-text":Uo["text-primary"],"button-light-colour-text":Uo["text-primary"],"button-link-colour-text":Uo["text-primary"]},Animation:{"loading-dots-spinner-colour":Mo["brand-50"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"2rem","navbar-compressed-height":"4rem","navbar-compressed-logo-height":"1.5rem","navbar-mobile-height":"3.5rem","navbar-mobile-logo-height":"1.5rem","navbar-colour-bg":Uo.bg,"navbar-colour-icon":Uo.icon,"navbar-link-colour-text":Uo.text,"navbar-link-colour-text-hover":Uo["text-hover"],"navbar-link-colour-text-selected-hover":Uo["text-selected-hover"]},Footer:{"footer-colour-bg":Uo["bg-strong"],"footer-colour-text":Uo.text,"footer-link-colour-text":Uo.text,"footer-link-colour-text-hover":Uo["text-hover"],"footer-disclaimer-link-colour-text":Uo.text,"footer-disclaimer-link-colour-text-hover":Uo["text-subtler"]}},di={collections:{default:si,pa:{Button:{"button-radius":ii.full,"button-default-colour-bg":Uo["bg-primary"],"button-default-colour-bg-hover":Uo["bg-primary-hover"],"button-default-colour-text":Uo["text-inverse"],"button-secondary-colour-border":Uo["border-primary"],"button-secondary-colour-text":Uo["text-primary"],"button-light-colour-text":Uo["text-primary"],"button-link-colour-text":Uo["text-primary"]},Animation:{"loading-dots-spinner-colour":Uo["icon-primary"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"2rem","navbar-compressed-height":"4rem","navbar-compressed-logo-height":"1.5rem","navbar-mobile-height":"3.5rem","navbar-mobile-logo-height":"1.5rem","navbar-colour-bg":Uo.bg,"navbar-colour-icon":Uo.icon,"navbar-link-colour-text":Uo.text,"navbar-link-colour-text-hover":Uo["text-hover"],"navbar-link-colour-text-selected-hover":Uo["text-selected-hover"]},Footer:{"footer-colour-bg":Uo["bg-strong"],"footer-colour-text":Uo.text,"footer-link-colour-text":Uo.text,"footer-link-colour-text-hover":Uo["text-hover"],"footer-disclaimer-link-colour-text":Uo.text,"footer-disclaimer-link-colour-text-hover":Uo["text-subtler"]}},a11yplayground:ai,lifesg:li,spf:{Button:{"button-radius":ii.md,"button-default-colour-bg":Uo["bg-primary"],"button-default-colour-bg-hover":Uo["bg-primary-hover"],"button-default-colour-text":Uo["text-inverse"],"button-secondary-colour-border":Uo["border-primary"],"button-secondary-colour-text":Uo["text-primary"],"button-light-colour-text":Uo["text-primary"],"button-link-colour-text":Uo["text-primary"]},Animation:{"loading-dots-spinner-colour":Uo["icon-primary"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"3rem","navbar-compressed-height":"5rem","navbar-compressed-logo-height":"2rem","navbar-mobile-height":"4rem","navbar-mobile-logo-height":"2rem","navbar-colour-bg":Uo.bg,"navbar-colour-icon":Uo.icon,"navbar-link-colour-text":Uo["text-primary-strongest"],"navbar-link-colour-text-hover":Uo["text-subtler"],"navbar-link-colour-text-selected-hover":Uo["text-subtler"]},Footer:{"footer-colour-bg":Uo["bg-inverse"],"footer-colour-text":Uo["text-inverse"],"footer-link-colour-text":Uo["text-inverse"],"footer-link-colour-text-hover":Uo["text-inverse"],"footer-disclaimer-link-colour-text":Uo["text-inverse"],"footer-disclaimer-link-colour-text-hover":Uo["text-inverse"]}},smgs:{Button:{"button-radius":ii.md,"button-default-colour-bg":Uo["bg-primary"],"button-default-colour-bg-hover":Uo["bg-primary-hover"],"button-default-colour-text":Uo["text-inverse"],"button-secondary-colour-border":Uo["border-primary"],"button-secondary-colour-text":Uo["text-primary"],"button-light-colour-text":Uo["text-primary"],"button-link-colour-text":Uo["text-primary"]},Animation:{"loading-dots-spinner-colour":Uo["icon-primary"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"2rem","navbar-compressed-height":"4rem","navbar-compressed-logo-height":"1.5rem","navbar-mobile-height":"3.5rem","navbar-mobile-logo-height":"1.5rem","navbar-colour-bg":Uo.bg,"navbar-colour-icon":Uo.icon,"navbar-link-colour-text":Uo.text,"navbar-link-colour-text-hover":Uo["text-hover"],"navbar-link-colour-text-selected-hover":Uo["text-selected-hover"]},Footer:{"footer-colour-bg":Uo["bg-strong"],"footer-colour-text":Uo.text,"footer-link-colour-text":Uo.text,"footer-link-colour-text-hover":Uo["text-hover"],"footer-disclaimer-link-colour-text":Uo.text,"footer-disclaimer-link-colour-text-hover":Uo["text-subtler"]}}},defaultValue:"default"},ci=(e,r)=>t=>{var n,o;const i=t.theme,a=bo(di,null==i?void 0:i.componentScheme);return ui((null===(o=null===(n=null==i?void 0:i.componentOverrides)||void 0===n?void 0:n[e])||void 0===o?void 0:o[r])||a[e][r],t)},ui=(e,r)=>{switch(typeof e){case"function":return e(r);case"number":return e+"px";case"string":return e}},gi=ci("Button","button-radius"),mi=ci("Button","button-default-colour-bg"),hi=ci("Button","button-default-colour-bg-hover"),bi=ci("Button","button-default-colour-text"),fi=ci("Button","button-secondary-colour-border"),pi=ci("Button","button-secondary-colour-text"),yi=ci("Button","button-light-colour-text"),vi=ci("Button","button-link-colour-text"),xi={collections:{default:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","heading-font-family":"Open Sans","body-font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},bookingsg:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","heading-font-family":"Plus Jakarta Sans","body-font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},mylegacy:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","heading-font-family":"Open Sans","body-font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0.009rem"},pa:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.5rem","heading-size-sm":"1.25rem","heading-size-xs":"1rem","heading-lh-xxl":"3rem","heading-lh-xl":"2.5rem","heading-lh-lg":"2.25rem","heading-lh-md":"2rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.032rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","heading-font-family":"Lato","body-font-family":"Lato","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.625rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.25rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},a11yplayground:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Atkinson Hyperlegible Next","heading-font-family":"Atkinson Hyperlegible Next","body-font-family":"Atkinson Hyperlegible Next","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0.009rem"},supportgowhere:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Libre Franklin","heading-font-family":"Libre Franklin","body-font-family":"Libre Franklin","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},sgwdigitallobby:{"heading-size-xxl":"3.75rem","heading-size-xl":"3rem","heading-size-lg":"2.5rem","heading-size-md":"2rem","heading-size-sm":"1.625rem","heading-size-xs":"1.375rem","heading-lh-xxl":"4.5rem","heading-lh-xl":"3.5rem","heading-lh-lg":"3rem","heading-lh-md":"2.5rem","heading-lh-sm":"2.25rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.035em","heading-ls-lg":"-0.02rem","heading-ls-md":"-0.02rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Libre Franklin","heading-font-family":"Libre Franklin","body-font-family":"Libre Franklin","body-size-baseline":"1.375rem","body-size-md":"1.2rem","body-size-sm":"1.125rem","body-size-xs":"1rem","body-lh-baseline":"1.75rem","body-lh-md":"1.625rem","body-lh-sm":"1.625rem","body-lh-xs":"1.5rem","body-ls-baseline":"0rem","body-ls-md":"0rem","body-ls-sm":"0rem","body-ls-xs":"0.009rem","form-label-size":"1.25rem","form-description-size":"1.125rem","form-label-lh":"1.625rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0rem"},imda:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Montserrat","heading-font-family":"Montserrat","body-font-family":"Montserrat","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},spf:{"heading-size-xxl":"3.75rem","heading-size-xl":"3rem","heading-size-lg":"2.5rem","heading-size-md":"2rem","heading-size-sm":"1.75rem","heading-size-xs":"1.5rem","heading-lh-xxl":"4.5rem","heading-lh-xl":"3.5rem","heading-lh-lg":"3rem","heading-lh-md":"2.25rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Public Sans","heading-font-family":"Public Sans","body-font-family":"Public Sans","body-size-baseline":"1.2rem","body-size-md":"1.125rem","body-size-sm":"1rem","body-size-xs":"0.875rem","body-lh-baseline":"1.5rem","body-lh-md":"1.5rem","body-lh-sm":"1.5rem","body-lh-xs":"1.125rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},oneservice:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.375rem","heading-size-sm":"1.125rem","heading-size-xs":"1rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.625rem","heading-lh-md":"2rem","heading-lh-sm":"1.625rem","heading-lh-xs":"1.5rem","heading-ls-xxl":"0rem","heading-ls-xl":"0rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","heading-font-family":"Open Sans","body-font-family":"Open Sans","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.75rem","body-lh-baseline":"1.5rem","body-lh-md":"1.313rem","body-lh-sm":"1.125rem","body-lh-xs":"1.125rem","body-ls-baseline":"0rem","body-ls-md":"0rem","body-ls-sm":"0rem","body-ls-xs":"0rem","form-label-size":"0.875rem","form-description-size":"0.875rem","form-label-lh":"1.313rem","form-description-lh":"1.313rem","form-label-ls":"0rem","form-description-ls":"0rem"},smgs:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Poppins, Inter","heading-font-family":"Poppins","body-font-family":"Inter","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0.009rem"}},defaultValue:"default"},wi=e=>r=>{var t;const n=r.theme,o=bo(xi,null==n?void 0:n.fontScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.fontSpec)?ho(o,e,n.overrides.fontSpec):o[e]},Fi={"heading-size-xxl":wi("heading-size-xxl"),"heading-size-xl":wi("heading-size-xl"),"heading-size-lg":wi("heading-size-lg"),"heading-size-md":wi("heading-size-md"),"heading-size-sm":wi("heading-size-sm"),"heading-size-xs":wi("heading-size-xs"),"heading-lh-xxl":wi("heading-lh-xxl"),"heading-lh-xl":wi("heading-lh-xl"),"heading-lh-lg":wi("heading-lh-lg"),"heading-lh-md":wi("heading-lh-md"),"heading-lh-sm":wi("heading-lh-sm"),"heading-lh-xs":wi("heading-lh-xs"),"heading-ls-xxl":wi("heading-ls-xxl"),"heading-ls-xl":wi("heading-ls-xl"),"heading-ls-lg":wi("heading-ls-lg"),"heading-ls-md":wi("heading-ls-md"),"heading-ls-sm":wi("heading-ls-sm"),"heading-ls-xs":wi("heading-ls-xs"),"weight-light":wi("weight-light"),"weight-regular":wi("weight-regular"),"weight-semibold":wi("weight-semibold"),"weight-bold":wi("weight-bold"),"font-family":wi("font-family"),"heading-font-family":wi("heading-font-family"),"body-font-family":wi("body-font-family"),"body-size-baseline":wi("body-size-baseline"),"body-size-md":wi("body-size-md"),"body-size-sm":wi("body-size-sm"),"body-size-xs":wi("body-size-xs"),"body-lh-baseline":wi("body-lh-baseline"),"body-lh-md":wi("body-lh-md"),"body-lh-sm":wi("body-lh-sm"),"body-lh-xs":wi("body-lh-xs"),"body-ls-baseline":wi("body-ls-baseline"),"body-ls-md":wi("body-ls-md"),"body-ls-sm":wi("body-ls-sm"),"body-ls-xs":wi("body-ls-xs"),"form-label-size":wi("form-label-size"),"form-description-size":wi("form-description-size"),"form-label-lh":wi("form-label-lh"),"form-description-lh":wi("form-description-lh"),"form-label-ls":wi("form-label-ls"),"form-description-ls":wi("form-description-ls")},$i=(e,r,t,n,o,i)=>{const{disableLigatures:a}=i||{};return F`
        font-family: ${wi(e)};
        font-size: ${wi(r)};
        font-weight: ${wi(t)};
        line-height: ${wi(n)};
        letter-spacing: ${wi(o)};

        font-variant: ${a?"no-common-ligatures":"normal"};
    `},Ci=(e={})=>({"heading-xxl-light":$i("heading-font-family","heading-size-xxl","weight-light","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-regular":$i("heading-font-family","heading-size-xxl","weight-regular","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-semibold":$i("heading-font-family","heading-size-xxl","weight-semibold","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-bold":$i("heading-font-family","heading-size-xxl","weight-bold","heading-lh-xxl","heading-ls-xxl",e),"heading-xl-light":$i("heading-font-family","heading-size-xl","weight-light","heading-lh-xl","heading-ls-xl",e),"heading-xl-regular":$i("heading-font-family","heading-size-xl","weight-regular","heading-lh-xl","heading-ls-xl",e),"heading-xl-semibold":$i("heading-font-family","heading-size-xl","weight-semibold","heading-lh-xl","heading-ls-xl",e),"heading-xl-bold":$i("heading-font-family","heading-size-xl","weight-bold","heading-lh-xl","heading-ls-xl",e),"heading-lg-light":$i("heading-font-family","heading-size-lg","weight-light","heading-lh-lg","heading-ls-lg",e),"heading-lg-regular":$i("heading-font-family","heading-size-lg","weight-regular","heading-lh-lg","heading-ls-lg",e),"heading-lg-semibold":$i("heading-font-family","heading-size-lg","weight-semibold","heading-lh-lg","heading-ls-lg",e),"heading-lg-bold":$i("heading-font-family","heading-size-lg","weight-bold","heading-lh-lg","heading-ls-lg",e),"heading-md-light":$i("heading-font-family","heading-size-md","weight-light","heading-lh-md","heading-ls-md",e),"heading-md-regular":$i("heading-font-family","heading-size-md","weight-regular","heading-lh-md","heading-ls-md",e),"heading-md-semibold":$i("heading-font-family","heading-size-md","weight-semibold","heading-lh-md","heading-ls-md",e),"heading-md-bold":$i("heading-font-family","heading-size-md","weight-bold","heading-lh-md","heading-ls-md",e),"heading-sm-light":$i("heading-font-family","heading-size-sm","weight-light","heading-lh-sm","heading-ls-sm",e),"heading-sm-regular":$i("heading-font-family","heading-size-sm","weight-regular","heading-lh-sm","heading-ls-sm",e),"heading-sm-semibold":$i("heading-font-family","heading-size-sm","weight-semibold","heading-lh-sm","heading-ls-sm",e),"heading-sm-bold":$i("heading-font-family","heading-size-sm","weight-bold","heading-lh-sm","heading-ls-sm",e),"heading-xs-light":$i("heading-font-family","heading-size-xs","weight-light","heading-lh-xs","heading-ls-xs",e),"heading-xs-regular":$i("heading-font-family","heading-size-xs","weight-regular","heading-lh-xs","heading-ls-xs",e),"heading-xs-semibold":$i("heading-font-family","heading-size-xs","weight-semibold","heading-lh-xs","heading-ls-xs",e),"heading-xs-bold":$i("heading-font-family","heading-size-xs","weight-bold","heading-lh-xs","heading-ls-xs",e),"body-baseline-light":$i("body-font-family","body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline",e),"body-baseline-regular":$i("body-font-family","body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline",e),"body-baseline-semibold":$i("body-font-family","body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline",e),"body-baseline-bold":$i("body-font-family","body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline",e),"body-md-light":$i("body-font-family","body-size-md","weight-light","body-lh-md","body-ls-md",e),"body-md-regular":$i("body-font-family","body-size-md","weight-regular","body-lh-md","body-ls-md",e),"body-md-semibold":$i("body-font-family","body-size-md","weight-semibold","body-lh-md","body-ls-md",e),"body-md-bold":$i("body-font-family","body-size-md","weight-bold","body-lh-md","body-ls-md",e),"body-sm-light":$i("body-font-family","body-size-sm","weight-light","body-lh-sm","body-ls-sm",e),"body-sm-regular":$i("body-font-family","body-size-sm","weight-regular","body-lh-sm","body-ls-sm",e),"body-sm-semibold":$i("body-font-family","body-size-sm","weight-semibold","body-lh-sm","body-ls-sm",e),"body-sm-bold":$i("body-font-family","body-size-sm","weight-bold","body-lh-sm","body-ls-sm",e),"body-xs-light":$i("body-font-family","body-size-xs","weight-light","body-lh-xs","body-ls-xs",e),"body-xs-regular":$i("body-font-family","body-size-xs","weight-regular","body-lh-xs","body-ls-xs",e),"body-xs-semibold":$i("body-font-family","body-size-xs","weight-semibold","body-lh-xs","body-ls-xs",e),"body-xs-bold":$i("body-font-family","body-size-xs","weight-bold","body-lh-xs","body-ls-xs",e),"form-label":$i("body-font-family","form-label-size","weight-semibold","form-label-lh","form-label-ls",e),"form-description":$i("body-font-family","form-description-size","weight-regular","form-description-lh","form-description-ls",e)}),Ei=Ci({disableLigatures:!0}),Si=Ci(),Di=Ci({disableLigatures:!0}),ki=Ci({disableLigatures:!0}),Bi=Ci({disableLigatures:!0}),Ti={collections:{default:Si,bookingsg:Ei,mylegacy:Si,pa:Di,a11yplayground:ki,supportgowhere:Bi,sgwdigitallobby:Bi,imda:Ci({disableLigatures:!0}),spf:Ci({disableLigatures:!0}),oneservice:Ci(),smgs:Ci({disableLigatures:!0})},defaultValue:"default"},Ai=e=>r=>{var t;const n=r.theme,o=bo(Ti,null==n?void 0:n.fontScheme),i=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.font)?ho(o,e,n.overrides.font):o[e];return"function"==typeof i?i(r):i},zi={"heading-xxl-light":Ai("heading-xxl-light"),"heading-xxl-regular":Ai("heading-xxl-regular"),"heading-xxl-semibold":Ai("heading-xxl-semibold"),"heading-xxl-bold":Ai("heading-xxl-bold"),"heading-xl-light":Ai("heading-xl-light"),"heading-xl-regular":Ai("heading-xl-regular"),"heading-xl-semibold":Ai("heading-xl-semibold"),"heading-xl-bold":Ai("heading-xl-bold"),"heading-lg-light":Ai("heading-lg-light"),"heading-lg-regular":Ai("heading-lg-regular"),"heading-lg-semibold":Ai("heading-lg-semibold"),"heading-lg-bold":Ai("heading-lg-bold"),"heading-md-light":Ai("heading-md-light"),"heading-md-regular":Ai("heading-md-regular"),"heading-md-semibold":Ai("heading-md-semibold"),"heading-md-bold":Ai("heading-md-bold"),"heading-sm-light":Ai("heading-sm-light"),"heading-sm-regular":Ai("heading-sm-regular"),"heading-sm-semibold":Ai("heading-sm-semibold"),"heading-sm-bold":Ai("heading-sm-bold"),"heading-xs-light":Ai("heading-xs-light"),"heading-xs-regular":Ai("heading-xs-regular"),"heading-xs-semibold":Ai("heading-xs-semibold"),"heading-xs-bold":Ai("heading-xs-bold"),"body-baseline-light":Ai("body-baseline-light"),"body-baseline-regular":Ai("body-baseline-regular"),"body-baseline-semibold":Ai("body-baseline-semibold"),"body-baseline-bold":Ai("body-baseline-bold"),"body-md-light":Ai("body-md-light"),"body-md-regular":Ai("body-md-regular"),"body-md-semibold":Ai("body-md-semibold"),"body-md-bold":Ai("body-md-bold"),"body-sm-light":Ai("body-sm-light"),"body-sm-regular":Ai("body-sm-regular"),"body-sm-semibold":Ai("body-sm-semibold"),"body-sm-bold":Ai("body-sm-bold"),"body-xs-light":Ai("body-xs-light"),"body-xs-regular":Ai("body-xs-regular"),"body-xs-semibold":Ai("body-xs-semibold"),"body-xs-bold":Ai("body-xs-bold"),"form-label":Ai("form-label"),"form-description":Ai("form-description")},Ii={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},Oi=e=>r=>{var t;const n=r.theme,o=bo(Ii,null==n?void 0:n.motionScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.motion)?ho(o,e,n.overrides.motion):o[e]},Mi={"duration-150":Oi("duration-150"),"duration-250":Oi("duration-250"),"duration-350":Oi("duration-350"),"duration-500":Oi("duration-500"),"duration-800":Oi("duration-800"),"duration-1000":Oi("duration-1000"),"ease-default":Oi("ease-default"),"ease-standard":Oi("ease-standard"),"ease-entrance":Oi("ease-entrance"),"ease-exit":Oi("ease-exit")},Hi={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},Li=e=>r=>{var t;const n=r.theme,o=bo(Hi,null==n?void 0:n.spacingScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.spacing)?`${ho(o,e,n.overrides.spacing)}px`:`${o[e]}px`},Ri={"spacing-0":Li("spacing-0"),"spacing-4":Li("spacing-4"),"spacing-8":Li("spacing-8"),"spacing-12":Li("spacing-12"),"spacing-16":Li("spacing-16"),"spacing-20":Li("spacing-20"),"spacing-24":Li("spacing-24"),"spacing-32":Li("spacing-32"),"spacing-40":Li("spacing-40"),"spacing-48":Li("spacing-48"),"spacing-64":Li("spacing-64"),"spacing-72":Li("spacing-72"),"layout-xs":Li("layout-xs"),"layout-sm":Li("layout-sm"),"layout-md":Li("layout-md"),"layout-lg":Li("layout-lg"),"layout-xl":Li("layout-xl"),"layout-xxl":Li("layout-xxl"),"layout-xxxl":Li("layout-xxxl")},ji=(e,r)=>Object.assign(Object.assign({},e),{colourMode:r}),_i=Object.assign(Object.assign({},Uo),{Primitive:Mo}),Wi=Object.assign(Object.assign({},zi),{Spec:Fi}),Pi=Mi,Ni=Object.assign(Object.assign({},yo),{Util:Ko}),Yi=Ri,Vi=ii,Ui=ei,Zi=ti,Gi={colourScheme:"lifesg",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"lifesg",componentScheme:"lifesg",_v2:{colorScheme:"base",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"base"}},qi={colourScheme:"bookingsg",fontScheme:"bookingsg",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"bookingsg",_v2:{colorScheme:"bookingsg",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"bookingsg"}},Xi={colourScheme:"ccube",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"ccube",_v2:{colorScheme:"ccube",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"ccube"}},Ki={colourScheme:"mylegacy",fontScheme:"mylegacy",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"mylegacy",_v2:{colorScheme:"mylegacy",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"mylegacy"}},Ji={colourScheme:"rbs",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"rbs",_v2:{colorScheme:"rbs",textStyleScheme:"base",designTokenScheme:"rbs",resourceScheme:"rbs"}},Qi={colourScheme:"oneservice",fontScheme:"oneservice",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"oneservice"},ea={colourScheme:"pa",fontScheme:"pa",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"pa",componentScheme:"pa"},ra={colourScheme:"a11yplayground",fontScheme:"a11yplayground",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"a11yplayground",componentScheme:"a11yplayground"},ta={colourScheme:"supportgowhere",fontScheme:"supportgowhere",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"supportgowhere",componentScheme:"default"},na={colourScheme:"sgwdigitallobby",fontScheme:"sgwdigitallobby",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"supportgowhere",componentScheme:"default"},oa={colourScheme:"imda",fontScheme:"imda",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"imda",componentScheme:"default"},ia={colourScheme:"spf",fontScheme:"spf",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"spf",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"spf",componentScheme:"spf"},aa={colourScheme:"smgs",fontScheme:"smgs",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"smgs",componentScheme:"smgs"};Object.assign(Object.assign({},Gi),{light:ji(Gi,"light"),dark:ji(Gi,"dark")}),Object.assign(Object.assign({},qi),{light:ji(qi,"light"),dark:ji(qi,"dark")}),Object.assign(Object.assign({},Xi),{light:ji(Xi,"light"),dark:ji(Xi,"dark")}),Object.assign(Object.assign({},Ki),{light:ji(Ki,"light"),dark:ji(Ki,"dark")}),Object.assign(Object.assign({},Ji),{light:ji(Ji,"light"),dark:ji(Ji,"dark")}),Object.assign(Object.assign({},Qi),{light:ji(Qi,"light"),dark:ji(Qi,"dark")}),Object.assign(Object.assign({},ea),{light:ji(ea,"light"),dark:ji(ea,"dark")}),Object.assign(Object.assign({},ra),{light:ji(ra,"light"),dark:ji(ra,"dark")}),Object.assign(Object.assign({},ta),{light:ji(ta,"light"),dark:ji(ta,"dark")}),Object.assign(Object.assign({},na),{light:ji(na,"light"),dark:ji(na,"dark")}),Object.assign(Object.assign({},oa),{light:ji(oa,"light"),dark:ji(oa,"dark")}),Object.assign(Object.assign({},ia),{light:ji(ia,"light"),dark:ji(ia,"dark")}),Object.assign(Object.assign({},aa),{light:ji(aa,"light"),dark:ji(aa,"dark")});const sa=e=>"right"===e?"bottom-end":"bottom-start",la=b({elementWidth:0,styles:{},setFloatingRef:()=>{},getFloatingProps:()=>({})}),da=({enabled:n,isOpen:o,onOpen:i,onClose:l,onDismiss:d,renderElement:c,renderDropdown:u,customZIndex:m,clickToToggle:h=!1,offset:b=0,alignment:p="left",fitAvailableHeight:y,rootNode:v,positionRef:x})=>{var w;const F=f($),C=Ui["sm-max"]({theme:F}),j=a(null),{width:_=0}=Tr({targetRef:null!=x?x:j,handleHeight:!1}),W={name:"center",fn:({x:e,rects:r})=>{const t=0===e||e+r.floating.width===window.innerWidth,n=window.innerWidth<C;return{x:t&&n?(window.innerWidth-r.floating.width)/2:e}}},{refs:P,floatingStyles:N,context:Y}=S({open:o,onOpenChange:(e,r,t)=>{"escape-key"===t?null==d||d():e&&!o?null==i||i():!e&&o&&(null==l||l(t))},whileElementsMounted:D,placement:sa(p),middleware:[k(b),B(),T({limiter:A()}),z({apply({availableHeight:e,elements:r}){!y||e>=r.floating.scrollHeight?r.floating.style.setProperty("--available-height",""):r.floating.style.setProperty("--available-height",`${Math.max(0,e)}px`)}}),W]}),V=(()=>{const[e,r]=s(void 0),t=E();return g((()=>{if(!t)return void r(void 0);const e=e=>{r(e.zIndex)};return t.events.on(Hr.Change,e),t.events.emit(Hr.Ready),()=>t.events.off(Hr.Change,e)}),[t]),e})(),{isMounted:U,styles:Z}=I(Y,{initial:{opacity:0},open:{opacity:1},duration:300}),G=O(Y,{enabled:n,toggle:h,keyboardHandlers:h}),q=M(Y,{enabled:n}),{getReferenceProps:X,getFloatingProps:K}=H([G,q]),J={elementWidth:_,styles:Object.assign(Object.assign(Object.assign({},Z),N),{zIndex:null!==(w=null!=m?m:V)&&void 0!==w?w:50}),setFloatingRef:P.setFloating,getFloatingProps:K};return e(r,{children:[t("div",Object.assign({ref:e=>{j.current=e,P.setReference(e)}},X(),{children:c()})),U&&t(L,{root:v,children:t(R,{context:Y,modal:!1,initialFocus:-1,returnFocus:!1,children:t(la.Provider,{value:J,children:u(J)})})})]})},ca=w.div`
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
                        100% - ${Wi.Spec["body-size-baseline"]} -
                            ${Yi["spacing-16"]}
                    );
                    flex: unset;
                }

                [data-id="range-container-elem2-container"] {
                    margin-top: ${Yi["spacing-8"]};
                }
            `}}
`,ua=w.div`
    width: 100%; // Force next flex item to break to next line
`,ga=w.div`
    display: flex;
    flex: 1;
    align-items: center;
`,ma=w(W)`
    color: ${_i.icon};
    width: ${Wi.Spec["body-size-baseline"]};
    height: ${Wi.Spec["body-size-baseline"]};
    flex-shrink: 0;
    margin: 0 ${Yi["spacing-8"]};
    align-self: center;
`,ha=w.div`
    position: absolute;
    background: ${e=>e.$error?_i["border-error-focus-strong"]:_i["border-focus-strong"]};
    height: 2px;
    // half - half padding - half icon width
    width: calc(
        50% - ${Yi["spacing-8"]} - (${Wi.Spec["body-size-baseline"]} / 2)
    );
    transition: left ${Pi["duration-350"]} ${Pi["ease-standard"]},
        opacity ${Pi["duration-350"]} ${Pi["ease-standard"]};
    left: 0;
    bottom: 0;

    ${e=>{switch(e.$position){case"start":return F`
                    opacity: 1;
                `;case"end":return F`
                    left: calc(50% + ${Yi["spacing-16"]});
                    opacity: 1;
                `;case"none":return F`
                    opacity: 0;
                `}}}

    ${e=>{if(e.$wrap)return F`
                display: none;
            `}}
`,ba=({children:r,currentActive:n,error:o,className:i,wrap:a})=>{const[s,l]=r;return e(ca,{className:i,$wrap:a,children:[t(ga,{"data-id":"range-container-elem1-container",children:s}),t(ma,{"aria-hidden":"true"}),a&&t(ua,{}),t(ga,{"data-id":"range-container-elem2-container",children:l}),t(ha,{"data-id":"range-container-indicator",$position:n,$error:o,$wrap:a})]})};var fa,pa;!function(e){e.AM="AM",e.PM="PM"}(fa||(fa={})),function(e){e.roundToNearestInterval=(e,r,t)=>{const[n,o]=e.split(":"),i=parseInt(n,10),a=parseInt(o,10);if(isNaN(i)||isNaN(a)||a<0||a>=60)throw new Error("Invalid time format");const s=60*i+a,l=s%r,d=0===l?s:t?s+(r-l):s-l,c=d%60;return`${Math.floor(d/60).toString().padStart(2,"0")}:${c.toString().padStart(2,"0")}`},e.generateHourlyIntervals=(e,r,t="ha")=>{const n="HH:mm";let o=ce(e,n),i=ce(r,n);o.isSame(i)&&(i=i.add(1,"day"));const a=[];for(;o.isBefore(i);)a.push(o.format(t)),o=o.add(1,"hour");return a},e.getTimeValues=(e,r)=>{const t={hour:"",minute:"",period:fa.AM};if(!r)return t;try{if("24hr"===e){const n=wa(r,e);t.minute=Me.padValue(n.minute);const o=parseInt(n.hour);0===Math.floor(o/12)?(t.period=fa.AM,t.hour=0===o?"12":Me.padValue(o.toString())):(t.period=fa.PM,t.hour=12===o?o.toString():Me.padValue((o-12).toString()))}else{const{hour:n,minute:o,period:i=""}=wa(r,e);t.hour=Me.padValue(n),t.minute=Me.padValue(o),t.period="am"===i.toLowerCase()?fa.AM:fa.PM}return t}catch(e){return t}},e.updateMinutes=(e,r)=>{const t=parseInt(e);if(isNaN(t))return"add"===r?Me.padValue("0"):"55";const n=Math.floor(t/5),o=(("add"===r?n+1:t%5==0?n-1:n)%12+12)%12;return Me.padValue((5*o).toString())},e.updateHours=(e,r)=>{const t=parseInt(e);if(isNaN(t))return"add"===r?Me.padValue("1"):"12";const n="add"===r?t+1:t-1;return n<=12&&n>0?Me.padValue(n.toString()):13===n?Me.padValue("1"):"12"},e.convertTo24HourFormat=e=>{const r=parseInt(e.hour);let t;return t=e.period===fa.PM?12===r?r.toString():(r+12).toString():12===r?"00":e.hour,`${t}:${e.minute}`},e.convertHourTo12HourFormat=e=>{const r=parseInt(e),t=r%12==0?12..toString():(r%12).toString();return Me.padValue(t)},e.formatTimeRange=(e,r)=>`${ce(e,"HH:mm").format("h:mmA")} to ${ce(r,"HH:mm").format("h:mmA")}`,e.isSameTime=(e,r)=>ce(e,"H:mm").isSame(ce(r,"H:mm"),"minute"),e.formatDisplayValue=(e,r)=>{try{const{hour:t,minute:n,period:o=""}=wa(e,r),i=Me.padValue(t);let a=`${i}:${Me.padValue(n)}`;return"12hr"===r?(a+=o.toLowerCase(),a):a}catch(e){return""}},e.toMinutesSeconds=e=>({minutes:Math.floor(e/60),seconds:e%60}),e.to24Hour=e=>{if((null==e?void 0:e.includes("am"))||(null==e?void 0:e.includes("pm"))){const[r,t]=e.split(/(am|pm)/i),[n,o]=r.split(":").map(Number);let i=n;return"pm"===t&&i<12&&(i+=12),"am"===t&&12===i&&(i=0),Fa(i,o)}return e},e.generateTimings=(r,t="12hr",n,o)=>{const i=[];let a=0,s=1440-r;for(n&&(a=e.timeToMinutes(n)),o&&(s=e.timeToMinutes(o));a<=s;){let e=Math.floor(a/60);const n=a%60;if("12hr"===t){const r=e>=12?"pm":"am";e%=12,e=e||12;const t=Fa(e,n,r);i.push(t)}else{const r=Fa(e,n);i.push(r)}a+=r}return i},e.parseInput=(e,r="12hr")=>{if(""===e||void 0===e)return e;const t=e.trim().toLowerCase(),n=/^(?:(\d{1,2})([:.])?(\d{2})?)?(a|p|am|pm)?$/.exec(t);if(!n)return;let o=parseInt(n[1]||"0",10);const i=parseInt(n[3]||"0",10);let a=n[4];if(void 0===n[1]||o>24||i>59)return;if("a"===a?a="am":"p"===a&&(a="pm"),"24hr"===r)return"pm"===a&&o<12?o+=12:("am"===a&&12===o||24===o)&&(o=0),Fa(o,i);a?0===o||24===o?(a="am",o=12):o>12&&(a="pm",o-=12):(a=0===o||24===o||o>6&&o<12?"am":"pm",o=o%12||12);return Fa(o,i,a)},e.findClosestFlooredTime=(r,t)=>{if(!r)return r;const n=e.timeToMinutes(r);let o="",i=1/0;for(const r of t){const t=e.timeToMinutes(r)-n;if(t<=0&&Math.abs(t)<i)i=Math.abs(t),o=r;else if(t>0)break}return o},e.timeToMinutes=e=>{const[r,t]=e.toLowerCase().split(/(am|pm)/),[n,o]=r.split(":").map(Number);let i=n;return"pm"===t&&12!==i&&(i+=12),"am"===t&&12===i&&(i=0),60*i+o},e.calculateDuration=(r,t)=>{const n=e.timeToMinutes(r);return e.timeToMinutes(t)-n},e.calculateScrollPosition=r=>{const{scrollTime:t,minTime:n,maxTime:o,interval:i,intervalWidth:a,options:s}=r;try{if(!/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(t))return console.warn(`Invalid scrollTime format: "${t}". Expected format: HH:mm.`),null;const r=(null==s?void 0:s.roundToInterval)?e.roundToNearestInterval(t,i):t,[l,d]=ya(r);if(isNaN(l)||isNaN(d))return console.warn(`Invalid scrollTime: "${t}".`),null;const c=60*l+d,[u,g]=ya(n),m=60*u+g,[h,b]=ya(o);(c<m||c>60*h+b)&&console.warn(`scrollTime "${t}" is outside the range (${n} - ${o}).`);return(c-m)/i*a}catch(e){return console.warn(`Error processing scrollTime: "${t}".`,e),null}}}(pa||(pa={}));const ya=e=>e.split(":").map(Number),va=(e,r)=>{const t=parseInt(e);return"24hr"===r?t>=0&&t<=23:t>=1&&t<=12},xa=e=>{const r=parseInt(e);return r>=0&&r<=59},wa=(e,r)=>{const t=e?e.split(":"):[],n=new Error("Invalid format");if("12hr"===r){if(2!==t.length||4!==t[1].length)throw n;const e=t[1].substring(0,2),i=t[1].substring(2);if(!va(t[0],r)||!xa(e)||"am"!==(o=i).toLowerCase()&&"pm"!==o.toLowerCase())throw n;return{hour:t[0],minute:e,period:t[1].substring(2)}}if(2!==t.length)throw n;if(!va(t[0],r)||!xa(t[1]))throw n;return{hour:t[0],minute:t[1]};var o},Fa=(e,r,t)=>t?`${e}:${r.toString().padStart(2,"0")}${t}`:`${e.toString().padStart(2,"0")}:${r.toString().padStart(2,"0")}`,$a=w.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,Ca=C`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Ea=w.div`
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
    animation: ${Ca} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Sa=w(Ea)`
    animation-delay: -0.45s;
`,Da=w(Ea)`
    animation-delay: -0.3s;
`,ka=w(Ea)`
    animation-delay: -0.15s;
`,Ba=({color:r,className:n,size:o})=>e($a,{className:n,$size:o,$color:r,"data-testid":"component-loading-spinner",children:[t(Ea,{id:"inner1"}),t(Sa,{id:"inner2"}),t(Da,{id:"inner3"}),t(ka,{id:"inner4"})]}),Ta=w.button`
    padding: ${Yi["spacing-8"]} ${Yi["spacing-16"]};
    min-width: 4rem;
    border: ${Ni["width-010"]} ${Ni.solid} transparent;
    transition: all ${Pi["duration-250"]} ${Pi["ease-default"]};
    border-radius: ${gi};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return F`
                    background-color: ${_i.bg};
                    border-color: ${e.$buttonIsDanger?_i["border-error-strong"]:fi};

                    color: ${e.$buttonIsDanger?_i["text-error"]:pi};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${_i["bg-hover-neutral"]};
                        }
                    }
                `;case"light":return F`
                    background-color: ${_i.bg};
                    border-color: ${_i.border};

                    color: ${e.$buttonIsDanger?_i["text-error"]:yi};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${_i["bg-hover-neutral"]};
                        }
                    }
                `;case"link":return F`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?_i["text-error"]:vi};
                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${_i["bg-hover-neutral"]};
                        }
                    }
                `;case"disabled":return F`
                    background-color: ${_i["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${_i["text-disabled"]};
                `;default:return F`
                    background-color: ${e.$buttonIsDanger?_i["bg-error-strong"]:mi};

                    ${Zi.MaxWidth.sm} {
                        width: 100%;
                    }

                    color: ${bi};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${e.$buttonIsDanger?_i["bg-error-strong-hover"]:hi};
                        }
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return F`
                    height: 2.5rem;
                    ${Wi["body-md-semibold"]}

                    ${Zi.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return F`
                    height: 4rem;
                    ${Wi["heading-md-semibold"]}

                    ${Zi.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return F`
                    height: 3rem;
                    ${Wi["heading-xs-semibold"]}

                    ${Zi.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,Aa=w(Ba)`
    margin-right: ${e=>e.$hasChildren?"0.5rem":"0"};
`,za=e=>o.Children.toArray(e).some((e=>"string"==typeof e?""!==e.trim():null!=e)),Ia=(r,n)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:s="default",danger:l=!1,focusableWhenDisabled:d=!1,onClick:c}=r,u=ae(r,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),g={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return e(Ta,Object.assign({ref:n,"data-testid":u["data-testid"]||"button",disabled:i&&!d,"aria-disabled":i,"aria-busy":a,onClick:i?void 0:c},g,u,{children:[a&&t(Aa,{$hasChildren:za(o)}),t("span",{children:o})]}))};Ia.displayName="Button.Default";const Oa=(r,n)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:s="default",danger:l=!1,focusableWhenDisabled:d=!1,onClick:c}=r,u=ae(r,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),g={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return e(Ta,Object.assign({ref:n,"data-testid":u["data-testid"]||"button",disabled:i&&!d,"aria-disabled":i,"aria-busy":a,onClick:i?void 0:c},g,u,{children:[a&&t(Aa,{$hasChildren:za(o)}),t("span",{children:o})]}))};Oa.displayName="Button.Small";const Ma=(r,n)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:s="default",danger:l=!1,focusableWhenDisabled:d=!1,onClick:c}=r,u=ae(r,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),g={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"large",$buttonIsDanger:l};return e(Ta,Object.assign({ref:n,"data-testid":u["data-testid"]||"button",disabled:i&&!d,"aria-disabled":i,"aria-busy":a,onClick:i?void 0:c},g,u,{children:[a&&t(Aa,{$hasChildren:za(o)}),t("span",{children:o})]}))};Ma.displayName="Button.Large";const Ha={Default:o.forwardRef(Ia),Small:o.forwardRef(Oa),Large:o.forwardRef(Ma)},La=e=>{const{textSize:r}=e||{};return F`
        // Text styling
        ${r&&Wi[`${r}-regular`]}

        strong {
            font-weight: ${Wi.Spec["weight-semibold"]};
            ${r&&Wi[`${r}-semibold`]};
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-weight: ${Wi.Spec["weight-semibold"]};
            ${r&&Wi[`${r}-semibold`]}
            color: ${_i.hyperlink};
            text-decoration: underline;

            svg {
                color: ${_i["icon-primary"]};
                height: 1lh;
                width: 1em;
                margin-left: 0.4rem;
                vertical-align: middle;
            }

            &:hover,
            &:active,
            &:visited,
            &:focus {
                color: ${_i["hyperlink-hover"]};

                svg {
                    color: ${_i["icon-hover"]};
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
    `},Ra=e=>F`
    display: -webkit-box;
    -webkit-line-clamp: ${e};
    -webkit-box-orient: vertical;
    overflow: hidden;
`,ja=(e,r,t=!1)=>F`
        ${Wi[`${e}-${r}`]}
        ${t?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `,_a=e=>{if(e)return F`
            ${Ra(e)}
        `},Wa=(e,r,t,n,o)=>F`
    ${ja(e,r||"regular",n)}
    ${((e=!1,r=!1,t)=>r?F`
            display: block;
            ${_a(t)}
        `:e?F`
            display: inline;
        `:F`
            display: block;
            ${_a(t)}
        `)(t,n,o)}
    color: ${_i.text};
`,Pa=w.div`
    ${e=>Wa(e.$textStyle,e.$weight,e.$inline,e.$paragraph,e.$maxLines)}
`,Na=w.a`
    ${e=>{var r;return F`
        ${ja(e.$textStyle,e.$weight||"regular")}
        color: ${_i.hyperlink};
        text-decoration: ${null!==(r=e.$underlineStyle)&&void 0!==r?r:"underline"};

        &:hover,
        &:active,
        &:focus {
            color: ${_i["text-hover"]};
        }
    `}}
`,Ya=w(X)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`;var Va;!function(r){const n=(e,r,n)=>{const i=(n,o)=>{var{weight:i,inline:a,paragraph:s,maxLines:l}=n,d=ae(n,["weight","inline","paragraph","maxLines"]);return t(Pa,Object.assign({ref:o,as:a?"span":e,$textStyle:r,$weight:i,$inline:a,$paragraph:s,$maxLines:l},d))};return i.displayName=`Typography.${n}`,o.forwardRef(i)};r.HeadingXXL=n("h1","heading-xxl","HeadingXXL"),r.HeadingXL=n("h2","heading-xl","HeadingXL"),r.HeadingLG=n("h3","heading-lg","HeadingLG"),r.HeadingMD=n("h4","heading-md","HeadingMD"),r.HeadingSM=n("h5","heading-sm","HeadingSM"),r.HeadingXS=n("h6","heading-xs","HeadingXS");const i=(e,r)=>{const n=(r,n)=>{var{weight:o,inline:i,paragraph:a,maxLines:s}=r,l=ae(r,["weight","inline","paragraph","maxLines"]);return t(Pa,Object.assign({ref:n,as:i?"span":"p",$textStyle:e,$weight:o,$inline:i,$paragraph:a,$maxLines:s},l))};return n.displayName=`Typography.${r}`,o.forwardRef(n)};r.BodyBL=i("body-baseline","BodyBL"),r.BodyMD=i("body-md","BodyMD"),r.BodySM=i("body-sm","BodySM"),r.BodyXS=i("body-xs","BodyXS");const a=(r,n)=>{const i=(n,o)=>{var{weight:i,children:a,external:s,underlineStyle:l="underline"}=n,d=ae(n,["weight","children","external","underlineStyle"]);return e(Na,Object.assign({ref:o,$textStyle:r,$weight:i,$underlineStyle:l},d,{children:[a,s&&t(Ya,{})]}))};return i.displayName=`Typography.${n}`,o.forwardRef(i)};r.LinkBL=a("body-baseline","LinkBL"),r.LinkMD=a("body-md","LinkMD"),r.LinkSM=a("body-sm","LinkSM"),r.LinkXS=a("body-xs","LinkXS")}(Va||(Va={}));const Ua=w.div`
    padding: ${Yi["spacing-8"]} ${Yi["spacing-16"]};
    display: flex;

    ${e=>{let r,t;switch(e.$type){case"error":r=_i["bg-error"](e),t=_i["border-error"](e);break;case"success":r=_i["bg-success"](e),t=_i["border-success"](e);break;case"warning":default:r=_i["bg-warning"](e),t=_i["border-warning"](e);break;case"info":r=_i["bg-info"](e),t=_i["border-info"](e);break;case"description":r=_i["bg-strong"](e),t=_i["border-strong"](e)}return F`
            background: ${r};
            border-left: ${Ni["width-020"]} ${Ni.solid}
                ${t};
        `}}
`,Za=w.div`
    display: flex;
    align-items: center;
    height: 1lh;
    margin-right: ${Yi["spacing-8"]};

    ${e=>{let r;const t="small"===e.$sizeType?"1.25rem":"1.5rem";switch(e.$type){case"error":r=_i["icon-error"](e);break;case"success":r=_i["icon-success"](e);break;case"warning":default:r=_i["icon-warning"](e);break;case"info":r=_i["icon-info"](e);break;case"description":r=_i["icon-subtle"](e)}return F`
            svg {
                color: ${r};
                width: ${t};
                height: ${t};
            }
        `}}
`,Ga=w(Va.LinkSM)`
    ${e=>"small"===e.$sizeType?F`
                ${Wi["body-sm-semibold"]}
                margin-top: ${Yi["spacing-4"]};
            `:F`
                ${Wi["body-md-semibold"]}
                margin-top: ${Yi["spacing-8"]};
            `}
    display: flex;
    align-items: center;
    align-self: flex-start;

    svg {
        height: 1rem;
        width: 1rem;
        margin-left: ${Yi["spacing-4"]};
    }
`,qa=w.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-wrap: anywhere;
`,Xa=w.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    order: 1;
    ${e=>{if(e.$showMore&&e.$hasActionLink)return F`
                margin-bottom: ${Yi["spacing-8"]};
            `}}
    ${e=>{const r="linear-gradient(to bottom, black 50%, transparent 100%)";if(!e.$showMore&&e.$maxCollapsedHeight)return`\n                max-height: ${e.$maxCollapsedHeight}px;\n\t\t\t\toverflow: hidden;\n                -webkit-mask-image: ${r};\n                mask-image: ${r};\n\t\t\t`}}
`,Ka=w.div`
    color: ${_i.text};

    ${e=>"small"===e.$sizeType?La({textSize:"body-sm"}):La({textSize:"body-md"})}
`,Ja=w.button`
    ${e=>"small"===e.$sizeType?F`
                ${Wi["body-sm-semibold"]}
            `:F`
                ${Wi["body-md-semibold"]}
            `}

    display: flex;
    align-items: center;
    align-self: flex-start;
    gap: ${Yi["spacing-4"]};
    margin-top: ${Yi["spacing-8"]};
    order: 2;

    cursor: pointer;
    user-select: none;
    border: none;
    background: transparent;

    color: ${_i["text-primary"]};
`,Qa=w(P)`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${Pi["duration-350"]} ${Pi["ease-standard"]};
`,es=w.div`
    height: 1.625rem;
    width: 1.625rem;
    margin-right: 0.5rem;
    flex-shrink: 0;

    svg {
        height: 100%;
        width: 100%;
    }

    ${e=>e.$disabled?e.$active?F`
                    color: ${_i["icon-selected-disabled"]};
                `:F`
                    color: ${_i["icon-disabled-subtle"]};
                `:e.$active?F`
                color: ${_i["icon-selected"]};
            `:F`
            color: ${_i["icon-subtle"]};
        `};
`,rs=F`
    margin-bottom: ${e=>e.$bottomMargin||0}rem;

    // Counter matters
    counter-reset: list;

    ${e=>e.$size&&Wi[`${e.$size}-regular`]}
    font-weight: ${Wi.Spec["weight-regular"]};
    color: ${_i.text};

    // nested lists styling
    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`,ts=w.ol`
    ${rs}

    margin-left: 3em;

    ${Zi.MaxWidth.lg} {
        margin-left: 2.5em;
    }

    li {
        position: relative;
    }

    ${e=>{const{reversed:r}=e,t=e.$counterType||"decimal",n=e.$counterSeparator||")";return F`
            li:before {
                content: counter(list, ${t}) "${n}";
                counter-increment: ${r?"list -1":"list"};
                position: absolute;
                left: -2em;
            }
        `}}

    ${e=>{const{reversed:r,start:t}=e;if(t){return F`
                counter-reset: list ${r?t+1:t-1};
            `}}}

    list-style-position: outside;
    list-style-type: none;

    ul > li:before {
        content: "";
    }
`,ns=w.ul`
    ${rs}

    margin-left: ${e=>e.$hasCustomIcon?0:"2.5em"};
    list-style-type: ${e=>e.$hasCustomIcon?"none":e.$bulletType||"disc"};

    ${e=>e.$hasCustomIcon&&F`
            & > li {
                display: flex;
                align-items: flex-start;
                gap: 0.5em;
            }
        `}
`,os=n=>{var{size:i,bulletType:a,bottomMargin:s,children:l}=n,d=ae(n,["size","bulletType","bottomMargin","children"]);const c=void 0!==a&&"string"!=typeof a;return t(ns,Object.assign({$size:i,$bulletType:c?void 0:a,$bottomMargin:s,$hasCustomIcon:c},d,{children:c?o.Children.map(l,(n=>o.isValidElement(n)?o.cloneElement(n,{children:e(r,{children:[t("div",{"aria-hidden":!0,children:a}),t("div",{children:n.props.children})]})}):n)):l}))};os.displayName="TextList.Ul";const is=e=>{var{size:r,counterType:n,counterSeparator:o,bottomMargin:i,children:a}=e,s=ae(e,["size","counterType","counterSeparator","bottomMargin","children"]);return t(ts,Object.assign({$size:r,$counterType:n,$counterSeparator:o,$bottomMargin:i},s,{children:a}))};is.displayName="TextList.Ol";const as=os,ss=w.div`
    position: relative;
    display: inline-flex;
    min-width: 10.375rem;
    border-radius: ${Vi.sm};
    border-width: 1px;
    border-style: solid;
    overflow: hidden;
    flex-direction: column;
    height: fit-content;
    background: ${_i.bg};

    &:has(input:focus-visible) {
        outline: 2px solid ${_i["focus-ring"]};
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
                            border-color: ${_i["border-error"]};
                        `:F`
                            border-color: ${_i["border-error"]};

                            &:has(${ms}:hover) {
                                @media (pointer: fine) {
                                    background: ${_i["bg-hover-subtle"]};
                                }
                            }
                        `:e.$disabled?e.$selected?F`
                            border: none;
                            background: ${_i["bg-selected-disabled"]};
                        `:F`
                            border: none;
                        `:e.$selected?F`
                        border: none;
                        background: ${_i["bg-selected"]};

                        &:has(${ms}:hover) {
                            @media (pointer: fine) {
                                background: ${_i["bg-selected-hover"]};

                                & ${cs} {
                                    color: ${_i["text-selected-hover"]};
                                }

                                & ${Fs} {
                                    color: ${_i["icon-selected-hover"]};
                                }
                            }
                        }
                    `:F`
                    border: none;

                    &:has(${ms}:hover) {
                        @media (pointer: fine) {
                            background: ${_i["bg-hover-subtle"]};
                        }
                    }
                `:e.$error?e.$disabled?F`
                            border-color: ${_i["border-error"]};
                        `:F`
                            border-color: ${_i["border-error"]};

                            &:has(${ms}:hover) {
                                @media (pointer: fine) {
                                    background: ${_i["bg-hover-subtle"]};
                                }
                            }
                        `:e.$disabled?e.$selected?F`
                            border-color: ${_i["border-selected-disabled"]};
                            background: ${_i["bg-selected-disabled"]};
                        `:F`
                            border-color: ${_i["border-disabled"]};
                            background: ${_i["bg-disabled"]};
                        `:e.$selected?F`
                        border-color: ${_i["border-selected"]};
                        background: ${_i["bg-selected"]};

                        &:has(${ms}:hover) {
                            @media (pointer: fine) {
                                background: ${_i["bg-selected-hover"]};

                                & ${cs} {
                                    color: ${_i["text-selected-hover"]};
                                }

                                & ${Fs} {
                                    color: ${_i["icon-selected-hover"]};
                                }
                            }
                        }
                    `:F`
                    border-color: ${_i.border};

                    &:has(${ms}:hover) {
                        @media (pointer: fine) {
                            background: ${_i["bg-hover-subtle"]};
                        }
                    }
                `}
`,ls=w.input`
    position: absolute;
    height: 100%;
    width: 100%;
    cursor: ${e=>e.$disabledVisual?"not-allowed":"pointer"};
    top: 0;
    left: 0;
    opacity: 0;

    /* Hide appearance but keep it focusable using keyboard interactions */
    appearance: none;
    background: transparent;
    border: none;
`,ds=w.div`
    display: flex;
`,cs=w.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
    width: 100%;
    overflow: hidden;

    // apply header container text color
    ${e=>e.$disabled?e.$selected?F`
                    color: ${_i["text-selected-disabled"]};
                `:F`
                    color: ${_i["text-disabled"]};
                `:e.$selected?F`
                color: ${_i["text-selected"]};
            `:F`
            color: ${_i.text};
        `}
`,us=w.label`
    ${e=>e.$selected?Wi["body-baseline-semibold"]:Wi["body-baseline-regular"]};
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
    -webkit-line-clamp: ${e=>{var r,t;return null!==(t=null===(r=e.$maxLines)||void 0===r?void 0:r.desktop)&&void 0!==t?t:"none"}};
    ${Zi.MaxWidth.lg} {
        -webkit-line-clamp: ${e=>{var r,t;return null!==(t=null===(r=e.$maxLines)||void 0===r?void 0:r.tablet)&&void 0!==t?t:"none"}};
    }
    ${Zi.MaxWidth.sm} {
        -webkit-line-clamp: ${e=>{var r,t;return null!==(t=null===(r=e.$maxLines)||void 0===r?void 0:r.mobile)&&void 0!==t?t:"none"}};
    }
`,gs=w.div`
    ${Wi["body-md-regular"]}
    margin-top: 0.5rem;

    z-index: 1; // forces sublabel to render above the input
    pointer-events: none; // to allow click events to be passed to the input

    strong,
    b {
        ${Wi["body-md-semibold"]}
    }
`,ms=w.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`,hs=w.div`
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
    padding: ${e=>e.$addPadding?"0.6875rem 0rem 0.6875rem 1rem":"0.6875rem 1rem"};
`,bs=w.button`
    color: ${e=>e.$disabled?_i["text-disabled"]:_i["text-error"]};
    white-space: nowrap;
    ${Wi["body-md-semibold"]}
    height: fit-content;
    padding: 0.6875rem 1rem 0.6875rem 0.5rem;
    border: none;
    background: none;

    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
`,fs=w.button`
    color: ${e=>e.disabled?_i["text-disabled"]:_i["text-primary"]};
    ${Wi["body-baseline-semibold"]}
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border: none;
    background-color: ${_i.bg};
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    padding: 0 1rem 0.6875rem 1rem;
    padding-top: ${e=>e.$paddingTopRequired?"0.6875rem":"0rem"};
    width: 100%;

    svg {
        width: 1em;
        height: 1em;
        margin-left: 0.5rem;
    }
`,ps=w.div`
    width: 100%;
    color: ${e=>e.$disabled?_i["text-disabled"]:_i["text-error"]};
    border: none;
    background: ${_i.bg};
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem 0.5rem 1rem;
`,ys=w((r=>{var{type:n,className:o,children:i,actionLink:a,actionLinkIcon:l,sizeType:d="default",showIcon:c=!1,customIcon:u,maxCollapsedHeight:m,role:b}=r,f=ae(r,["type","className","children","actionLink","actionLinkIcon","sizeType","showIcon","customIcon","maxCollapsedHeight","role"]);const[p,y]=s(!1),[v,x]=s(!1),{height:w,ref:F}=Tr(),$=Oe(),C=h((()=>{y(!m),x(E())}),[m,w]),E=()=>!(!w||!m)&&w>m;g((()=>{C()}),[m,w,C]);return e(Ua,{className:o,$type:n,$sizeType:d,"aria-label":`${(()=>{switch(n){case"success":return"Success";case"warning":return"Warning";case"error":return"Error";case"info":return"Information";case"description":return"Description";default:return"Alert"}})()}`,"data-testid":f["data-testid"],role:b,children:[c&&t(Za,{$sizeType:d,$type:n,children:(()=>{if(n&&u)return u;switch(n){case"success":return t(q,{"aria-hidden":!0});case"warning":return t(Z,{"aria-hidden":!0});case"error":return t(U,{"aria-hidden":!0});case"info":case"description":return t(G,{"aria-hidden":!0});default:return null}})()}),e(qa,{children:[v&&e(Ja,{$sizeType:d,$type:n,type:"button","aria-expanded":p,"aria-controls":$,onClick:()=>y(!p),children:["Show ",p?"less":"more",t(Qa,{$expanded:p})]}),e(Xa,{id:$,$maxCollapsedHeight:E()?m:void 0,$showMore:p,$hasActionLink:!!a,inert:Or(!!m&&!p),children:[t(Ka,{ref:F,$type:n,$sizeType:d,children:i}),a?e(Ga,Object.assign({"data-testid":"action-link",$type:n,$sizeType:d,underlineStyle:"none"},a,{children:[a.children,l||t(V,{})]})):null]})]})]})}))`
    width: 100%;
    user-select: none;
`,vs=w.div`
    padding: 0 1rem;
    padding-top: 0.6875rem;
    padding-bottom: ${e=>e.$isFinalItem?"0.6875rem":"0.5rem"};
    background-color: ${_i.bg};
    ${La({textSize:"body-md"})}

    ${e=>e.$disabled?F`
                color: ${_i["text-disabled"]};
            `:e.$selected?F`
                color: ${_i["text-selected"]};
            `:F`
                color: ${_i.text};
            `}
`,xs=w(Va.BodyMD)`
    color: ${e=>e.$disabled?_i["text-disabled"]:_i["text-error"]};
`,ws=w(as)`
    color: ${e=>e.$disabled?_i["text-disabled"]:_i["text-error"]};
`,Fs=w((({type:e,active:r=!1,disabled:n,className:o})=>{let i;switch(e){case"checkbox":i=t(r?re:ee,{});break;case"radio":i=t(r?J:K,{});break;case"tick":i=t(te,{});break;case"cross":i=t(Q,{});break;default:i=null}return t(es,{className:o,$active:r,$disabled:n,"aria-hidden":!0,children:i})}))`
    ${e=>e.$disabled?e.$selected?F`
                    color: ${_i["icon-selected-disabled"]};
                `:F`
                    color: ${_i["icon-disabled-subtle"]};
                `:e.$selected?F`
                color: ${_i["icon-selected"]};
            `:F`
            color: ${_i["icon-subtle"]};
        `};
`,$s=w.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${Yi["spacing-24"]};
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
                background-color: ${_i["bg-hover-neutral"]};
            `}
    }
`,Cs=o.forwardRef(((e,r)=>{var{children:n,focusHighlight:o=!0,focusOutline:i="none",type:a="button"}=e,s=ae(e,["children","focusHighlight","focusOutline","type"]);return t($s,Object.assign({ref:r,$outline:i,$highlight:o,type:a},s,{children:n}))})),Es=F`
    outline-offset: -1px;
    outline: ${Ni["width-020"]} ${Ni.solid} ${_i["border-focus"]};
`,Ss=F`
    outline-color: ${_i["border-focus"]};
`,Ds=F`
    outline-color: ${_i["border-disabled"]};
`,ks=F`
    outline-color: ${_i["border-error-focus"]};
`,Bs=F`
    outline: none;
`,Ts=w.div`
    border: ${Ni["width-010"]} ${Ni.solid} ${_i.border};
    border-radius: ${Vi.sm};
    background: ${_i.bg};

    &:focus-within {
        ${Es}
    }
    ${e=>e.$focused&&!e.$noBorder&&Es}

    ${e=>e.$readOnly?F`
                border-color: transparent;
                padding: 0;
                background: transparent !important;

                &:focus-within {
                    ${Ss}
                }
                ${e.$focused&&Ss}
            `:e.$disabled?F`
                background: ${_i["bg-disabled"]};
                cursor: not-allowed;

                &:focus-within {
                    ${Ds}
                }
                ${e.$focused&&Ds}
            `:e.$error?F`
                border-color: ${_i["border-error"]};

                &:focus-within {
                    ${ks}
                }
                ${e.$focused&&ks}
            `:void 0}
    ${e=>{if(e.$noBorder)return F`
                border-color: transparent;
                background: transparent;
                &:focus-within {
                    ${Bs}
                }
            `}}
`,As=w(Ts)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 ${Yi["spacing-16"]} 0
        ${e=>e.$readOnly?"0":Yi["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,zs=w.input`
    ${e=>"small"===e.$variant?Wi["body-md-regular"]:Wi["body-baseline-regular"]}
    color: ${_i.text};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    &:disabled {
        color: ${_i["text-subtler"]};

        &:hover {
            cursor: not-allowed;
        }
    }

    &::placeholder,
    &::-webkit-input-placeholder {
        color: ${_i["text-subtler"]};
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
`,Is=w.button`
    background: transparent;
    border: none;
    outline: none;

    &:focus,
    &:active {
        outline: none;
    }

    &:focus-visible {
        outline: ${Ni["width-010"]} ${Ni.solid}
            ${_i["border-focus"]};
        border-radius: ${Vi.sm};
    }
`,Os=w.div`
    overflow: hidden;

    ${Zi.MaxWidth.xxs} {
        max-width: 100%;
    }
`,Ms=w.div`
    position: relative;
    width: 100%;
    padding: ${Yi["spacing-8"]} ${Yi["spacing-20"]}
        ${Yi["spacing-24"]} ${Yi["spacing-20"]};
    display: flex;
    flex-direction: column;
    background: ${_i.bg};
    border: ${Ni["width-010"]} ${Ni.solid} ${_i.border};
    border-radius: ${Vi.sm};
`,Hs=w.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${Zi.MaxWidth.xxs} {
        flex-direction: column;
        width: 100%;
    }
`,Ls=w.div`
    display: flex;
    justify-content: flex-end;
    margin-top: ${Yi["spacing-16"]};
    gap: ${Yi["spacing-8"]};

    ${Zi.MaxWidth.xxs} {
        flex-direction: column-reverse; // FIXME: this breaks tab focus
        margin-top: ${Yi["spacing-32"]};
    }
`,Rs=w.div`
    display: flex;
    align-items: center;
    margin-right: ${Yi["spacing-32"]};

    ${Zi.MaxWidth.xxs} {
        margin-right: 0;
        width: 100%;
    }
`,js=w.div`
    display: flex;
    gap: ${Yi["spacing-8"]};

    ${Zi.MaxWidth.lg} {
        flex-direction: column;
    }

    ${Zi.MaxWidth.xxs} {
        flex-direction: row;
        width: 100%;
    }
`,_s=w.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${Zi.MaxWidth.xxs} {
        width: 6rem;
    }
`,Ws=w(Cs)`
    width: 5rem;
    padding: ${Yi["spacing-16"]} 0;
    color: ${_i.icon};

    svg {
        height: 1rem;
        width: 1rem;
    }

    &:hover {
        color: ${_i["icon-hover"]};
    }
`,Ps=w(Va.BodyBL)`
    flex-shrink: 0;
    width: 1.5rem;
    text-align: center;
`,Ns=w(Ts)`
    height: calc(3rem - 2px);
    width: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    ${Zi.MaxWidth.xxs} {
        width: 100%;
    }
`,Ys=w(zs)`
    text-align: center;
    width: 100%;

    &:focus::placeholder {
        color: transparent;
    }
`,Vs=w((n=>{var{type:o="checkbox",indicator:i,checked:l,styleType:d="default",children:c,childrenMaxLines:u,subLabel:m,disabled:h,error:b,name:f,id:y,className:v,compositeSection:x,removable:w,focusableWhenDisabled:F,useContentWidth:$,onRemove:C,onChange:E,"data-testid":S,"aria-describedby":D}=n,k=ae(n,["type","indicator","checked","styleType","children","childrenMaxLines","subLabel","disabled","error","name","id","className","compositeSection","removable","focusableWhenDisabled","useContentWidth","onRemove","onChange","data-testid","aria-describedby"]);const{collapsible:B=!0,errors:T,children:A,initialExpanded:z}=x||{},[I,O]=s(l),[M,H]=s(!!z),L=p((()=>{const e=Array.isArray(T)&&(null==T?void 0:T.length)>0,r=!Array.isArray(T)&&!!T;return e||r}),[T]),R=Oe(),j=y?`${y}`:`tg-${R}`,_=a(null),W=!!h&&!!F,P=!!h&&!F,V=!!h;g((()=>{O(l)}),[l]),g((()=>{I&&H(null==z||z)}),[I]);const U=e=>{if(V)e.preventDefault();else if(E)E(e);else switch(o){case"checkbox":O((e=>!e));break;case"radio":case"yes":case"no":I||O(!0)}},Z=()=>{h||H(!M)},G=()=>{h||!C||C()},q=()=>{var e;null===(e=null==_?void 0:_.current)||void 0===e||e.click()},X=e=>{e.stopPropagation()},K=()=>{let e;switch(o){case"yes":e="tick";break;case"no":e="cross";break;case"checkbox":case"radio":e=o}return t(Fs,{type:e,active:I,disabled:h,$selected:I,$disabled:h})},J=()=>{if(!m)return null;let e;return e="function"==typeof m?m():m,t(gs,{"data-id":"toggle-sublabel",id:`${j}-sublabel`,"aria-hidden":!0,children:e})},Q=n=>e(r,{children:[t(xs,{weight:"semibold",$disabled:h,children:"Error"}),t(ws,{$disabled:h,children:null==n?void 0:n.map(((e,r)=>t("li",{id:`${j}-error-list-item-${r}`,children:t(xs,{weight:"semibold",$disabled:h,children:e})},r)))})]});return e(ss,{$selected:I,$disabled:h,className:v,$styleType:d,$error:b,$indicator:i,$useContentWidth:$,id:y,"data-testid":S,children:[(()=>{const r=["string"==typeof m?`${j}-sublabel`:null,D].filter(Boolean).join(" ")||void 0;return e(ms,{id:`${j}-header-container`,$disabled:h,$error:b,$selected:I,$indicator:i,$styleType:d,children:[t(hs,{$addPadding:w,children:e(ds,{id:`${j}-input-container`,onClick:q,children:[t(ls,Object.assign({ref:_,name:f,id:`${j}-input`,type:"checkbox"===o?"checkbox":"radio","data-testid":"toggle-input",disabled:P,"aria-disabled":W,$disabledVisual:h,onChange:U,onClick:X,checked:I,tabIndex:W?0:void 0,"aria-describedby":r},k)),i&&K(),e(cs,{$selected:I,$disabled:h,children:[t(us,{htmlFor:`${j}-input`,"data-testid":"toggle-label",id:`${j}-label`,$maxLines:u,$selected:I,children:c}),m&&J()]})]})}),w&&t(bs,{type:"button",$disabled:h,onClick:G,id:`${j}-remove-button`,children:"Remove"})]})})(),A&&e("div",{children:[(!B||M)&&t(vs,{"data-id":"toggle-composite-children",$isFinalItem:!B,$disabled:h,children:A}),B&&!M&&L&&t(ps,{$disabled:h,onClick:Z,id:`${j}-error-alert`,children:t(ys,{type:h?"description":"error",className:v,showIcon:!0,children:Array.isArray(T)?Q(T):T})}),B&&e(fs,{$paddingTopRequired:!M&&!L,disabled:h,onClick:Z,"data-testid":M?"collapse-button":"expand-button",children:[M?"Show less":"Show more",t(M?Y:N,{"aria-hidden":!0})]})]})]})}))`
    min-width: 5rem;
    flex: 1;
`,Us=w(Ha.Small)`
    width: 7rem;

    ${Zi.MaxWidth.sm} {
        flex: 1;
    }

    ${Zi.MaxWidth.xxs} {
        width: 100%;
    }
`;var Zs,Gs,qs;!function(e){e.HOUR_UP="hour-up",e.HOUR_DOWN="hour-down",e.MINUTE_UP="minute-up",e.MINUTE_DOWN="minute-down"}(Zs||(Zs={})),function(e){e.HOUR="hour",e.MINUTE="minute"}(Gs||(Gs={})),function(e){e.AM="am",e.PM="pm"}(qs||(qs={}));const Xs=({id:r,value:n,show:o,format:i,onChange:l,onCancel:d})=>{const c=pa.getTimeValues(i,n),[u,m]=s(c.hour),[b,f]=s(c.minute),[p,y]=s(c.period),v=a(null),x=a(null);g((()=>{if(o&&v.current&&v.current.focus({preventScroll:!0}),o){const{hour:e,minute:r,period:t}=pa.getTimeValues(i,n);m(e),f(r),y(t)}}),[o,n,i]),g((()=>{const e=v.current,r=x.current;return e&&e.addEventListener("keydown",w),r&&r.addEventListener("keydown",w),()=>{e&&e.removeEventListener("keydown",w),r&&r.removeEventListener("keydown",w)}}),[]);const w=e=>{["Digit0","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Tab","Backspace","Delete","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)||["Backspace","0","1","2","3","4","5","6","7","8","9"].includes(e.key)||e.preventDefault()},F=h((e=>{switch(e.currentTarget.name){case Zs.MINUTE_UP:f(pa.updateMinutes(b,"add"));break;case Zs.MINUTE_DOWN:f(pa.updateMinutes(b,"minus"));break;case Zs.HOUR_UP:m(pa.updateHours(u,"add"));break;case Zs.HOUR_DOWN:m(pa.updateHours(u,"minus"))}}),[u,b]),$=e=>{e.target.select()},C=e=>{const r=e.target.value;switch(e.target.name){case Gs.HOUR:r.length<=2&&m(r);break;case Gs.MINUTE:r.length<=2&&f(r)}},E=e=>{const r=parseInt(e.target.value);if(!isNaN(r))switch(e.target.name){case Gs.HOUR:{const t=r>23||r<0?c.hour:pa.convertHourTo12HourFormat(e.target.value);m(t);break}case Gs.MINUTE:{const t=r>59||r<0?c.minute:e.target.value;f(Me.padValue(t));break}}},S=e=>{switch(e.target.name){case qs.AM:y(fa.AM);break;case qs.PM:y(fa.PM)}},D=e=>r?`${r}-${e}`:e;return t(Os,{children:e(Ms,{"data-testid":D("timepicker-dropdown"),inert:Or(!o),children:[e(Hs,{children:[e(Rs,{children:[e(_s,{children:[t(Ws,{"aria-label":"increase hour",name:Zs.HOUR_UP,tabIndex:-1,onClick:F,"data-testid":D("hour-increment-button"),children:t(Y,{})}),t(Ns,{children:t(Ys,{"aria-label":"hour",type:"number",name:Gs.HOUR,id:"hour",maxLength:2,pattern:"[0-9]{2}",ref:v,value:u,onFocus:$,onChange:C,onBlur:E,min:1,max:12,placeholder:"HH","data-testid":D("hour-input")})}),t(Ws,{"aria-label":"decrease hour",name:Zs.HOUR_DOWN,tabIndex:-1,onClick:F,"data-testid":D("hour-decrement-button"),children:t(N,{})})]}),t(Ps,{children:":"}),e(_s,{children:[t(Ws,{"aria-label":"increase minute",name:Zs.MINUTE_UP,tabIndex:-1,onClick:F,"data-testid":D("minute-increment-button"),children:t(Y,{})}),t(Ns,{children:t(Ys,{"aria-label":"minute",type:"number",name:Gs.MINUTE,id:"minute",maxLength:2,pattern:"[0-9]{2}",ref:x,value:b,onChange:C,onBlur:E,onFocus:$,min:0,max:59,placeholder:"MM","data-testid":D("minute-input")})}),t(Ws,{"aria-label":"decrease minute",name:Zs.MINUTE_DOWN,tabIndex:-1,onClick:F,"data-testid":D("minute-decrement-button"),children:t(N,{})})]})]}),e(js,{children:[t(Vs,{checked:p===fa.AM,name:qs.AM,type:"radio",onChange:S,"data-testid":D("am-toggle"),"aria-label":"AM",children:"AM"}),t(Vs,{checked:p===fa.PM,name:qs.PM,type:"radio",onChange:S,"data-testid":D("pm-toggle"),"aria-label":"PM",children:"PM"})]})]}),e(Ls,{children:[t(Us,{type:"button",styleType:"secondary",onClick:d,"data-testid":D("cancel-button"),children:"Cancel"}),t(Us,{type:"button",onClick:()=>{let e;e="24hr"===i?pa.convertTo24HourFormat({hour:u,minute:b,period:p}):`${u}:${b}${p}`,l(e)},disabled:""===u||""===b,"data-testid":D("confirm-button"),children:"Done"})]})]})})},Ks=w.div`
    position: relative;
`,Js=w(As)`
    height: 3rem;
    gap: ${Yi["spacing-8"]};
`,Qs=w(zs)`
    display: block;
    width: 100%;
    flex: 1;
`,el=r=>{var{id:n,disabled:o=!1,error:i,value:l,format:d="24hr",readOnly:c,onChange:u,onFocus:m,onBlur:h,alignment:b="left",dropdownZIndex:f,dropdownRootNode:p,"aria-labelledby":y,"aria-describedby":v,"aria-invalid":x}=r,w=ae(r,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur","alignment","dropdownZIndex","dropdownRootNode","aria-labelledby","aria-describedby","aria-invalid"]);const[F,$]=s(!1),[C,E]=s("none"),[S,D]=s(""),[k,B]=s(""),[T,A]=s(!1),z=!c&&!o,I=a(null),O=Oe(),M=`${O}-start-label`,H=`${O}-end-label`,L=e=>Mr(y,"start"===e?M:H),R=()=>Mr(v);g((()=>{l&&(D(l.start),B(l.end))}),[l]);const j=e=>{z&&(T||F||null==m||m(),A(!0),E(e),$(!0))},_=e=>{var r,t;const n=!!(null==e?void 0:e.keepFocus),o=null!==(r=null==e?void 0:e.triggerBlur)&&void 0!==r?r:!n;$(!1),E("none"),A(n),o&&(null==h||h()),n&&(null===(t=I.current)||void 0===t||t.focus())},W=e=>{var r,t,n;if(!T||F)return;const o=e.relatedTarget,i=(null===(r=null==o?void 0:o.matches)||void 0===r?void 0:r.call(o,"[data-floating-ui-focusable]"))||(null===(t=null==o?void 0:o.matches)||void 0===t?void 0:t.call(o,"[data-floating-ui-focus-guard]"));!(!o||!(null===(n=I.current)||void 0===n?void 0:n.contains(o)))||i||(A(!1),null==h||h())},P=e=>{D(e),null==u||u({start:e,end:k}),E("end"),$(!0),A(!0)},N=e=>{B(e),null==u||u({start:S,end:e}),""===S?(E("start"),$(!0),A(!0)):_({keepFocus:!0})};return t(Ks,Object.assign({id:n},w,{children:t(da,{enabled:z,isOpen:F,renderElement:()=>t(Js,{ref:I,tabIndex:-1,onBlur:W,"data-testid":"timepicker-container",role:"group",$disabled:o,$error:i,$readOnly:c,$focused:T,children:e(ba,{error:i,currentActive:C,children:[t(Qs,{onFocus:()=>j("start"),onClick:()=>j("start"),readOnly:!0,placeholder:"From",value:pa.formatDisplayValue(S,d),"data-testid":w["data-testid"]?`${w["data-testid"]}-timepicker-selector-from`:"timepicker-selector-from",role:"combobox","aria-expanded":!o&&!c&&F,"aria-invalid":i||x,"aria-disabled":o,"aria-readonly":c,"aria-labelledby":L("start"),"aria-describedby":R()}),t(Qs,{onClick:()=>j("end"),readOnly:!0,placeholder:"To",value:pa.formatDisplayValue(k,d),"data-testid":w["data-testid"]?`${w["data-testid"]}-timepicker-selector-to`:"timepicker-selector-to",role:"combobox","aria-expanded":!o&&!c&&F,"aria-invalid":i||x||void 0,"aria-disabled":o||void 0,"aria-readonly":c||void 0,"aria-labelledby":L("end"),"aria-describedby":R()})]})}),renderDropdown:({styles:r,setFloatingRef:o,getFloatingProps:i})=>F?e("div",Object.assign({ref:o,style:r,role:"dialog","aria-label":"start"===C?"Selecting for: Start time":"end"===C?"Selecting for: End time":void 0},i(),{children:["start"===C&&t(Xs,{id:n?`${n}-start`:void 0,show:!0,value:S,format:d,onCancel:()=>_({keepFocus:!0}),onChange:P}),"end"===C&&t(Xs,{id:n?`${n}-end`:void 0,show:!0,value:k,format:d,onCancel:()=>_({keepFocus:!1}),onChange:N})]}),C):null,onClose:()=>_({keepFocus:!1}),onDismiss:()=>_({keepFocus:!0}),clickToToggle:!1,offset:8,alignment:b,customZIndex:f,rootNode:p})}))};w.div`
    margin-bottom: ${Yi["spacing-8"]};
`,w.label`
    color: ${_i["text-subtle"]};
    display: inline-block;

    ${Wi["form-label"]}
    ${La()}
    font-weight: ${Wi.Spec["weight-semibold"]};
`;const rl=w(U)`
    height: 1lh;
    width: 1em;
    flex-shrink: 0;
    color: ${_i["icon-error-strong"]};
`,tl=w.div`
    ${Wi["body-sm-semibold"]}
    display: flex;
    gap: ${Yi["spacing-4"]};
    margin-top: ${Yi["spacing-8"]};
`,nl=w.p`
    color: ${_i["text-error"]};
    margin-bottom: 0;
    outline: none;
`;w.span`
    ${Wi["form-description"]}
    color: ${_i["text-subtler"]};
    display: block;
`,w(zs)`
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders

    ${e=>"no-border"!==e.$styleType&&F`
            padding-left: ${e.$visuallyReadOnly?0:Yi["spacing-16"]};
            padding-right: ${e.$visuallyReadOnly||e.$showClear?0:Yi["spacing-16"]};
        `}
`;const ol=w(Is)`
    height: auto;
    padding: ${Yi["spacing-12"]} ${Yi["spacing-16"]};

    cursor: pointer;
    color: ${_i.icon};

    ${e=>"no-border"===e.$styleType&&F`
            margin-right: -${Yi["spacing-12"]};
        `}
`,il=w(Q)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`;w.div`
    display: flex;
    width: 100%;
`,w(Ts)`
    display: flex;
    align-items: center;
    width: 100%;
`;const al=w(ol)`
    position: absolute;
    right: 0;
    padding-left: ${Yi["spacing-8"]};
    margin-right: 0;
`;w(As)`
    height: 3rem;
`,w.button`
    appearance: none;
    border: 0;
    background: transparent;
    display: flex;
    flex: 1;
    color: ${_i.text};

    &:focus,
    &:active {
        outline: none;
    }

    &:focus-visible {
        outline: 2px solid ${_i["border-focus"]};
        border-radius: 4px;
    }

    &:disabled {
        cursor: not-allowed;
    }
`;const sl=w.div`
    font-weight: ${e=>e.$bold?Wi.Spec["weight-semibold"]:Wi.Spec["weight-regular"]};

    ${e=>e.$disabled?F`
                color: ${_i["text-disabled"]};
            `:e.$selected?F`
                color: ${_i["text-selected"]};
            `:F`
                color: ${_i.text};
            `}
    width: 100%;

    ${e=>"end"===e.$truncateType&&Ra(e.$maxLines||2)}
    overflow-wrap: break-word;
`,ll=w.div`
    color: ${_i["text-subtlest"]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Ra(e.$maxLines||2)}
    overflow-wrap: break-word;

    ${e=>"next-line"===e.$labelDisplayType?F`
                    ${Wi["body-md-semibold"]}
                `:F`
                    ${Wi["body-baseline-regular"]}
                `}
`,dl=w.span`
    font-weight: ${Wi.Spec["weight-semibold"]};
`,cl=w.div`
    text-align: left;
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;

    ${e=>"small"===e.$variant?Wi["body-md-regular"]:Wi["body-baseline-regular"]}

    ${e=>{switch(e.$labelDisplayType){case"next-line":return F`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return F`
                    ${sl} {
                        display: inline;
                    }

                    ${ll} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,ul=w.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    word-break: break-all;
    overflow: hidden;
`,gl=w.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,ml=({bold:n,displayType:o="inline",label:i,searchTerm:a,maxLines:s=2,selected:l,disabled:d,sublabel:c,truncationType:u="middle",variant:g="default"})=>{const m=f($),b="small"===g?Wi.Spec["body-size-md"]({theme:m}):Wi.Spec["body-size-baseline"]({theme:m}),y=Wi.Spec["font-family"]({theme:m}),{ref:v,width:x}=Tr(),w=h((e=>{if("inline"!==o||!x)return!1;return Me.getTextWidth(e,`${b} '${y}'`)>x*s-50}),[x,o,b,y,s]),F=p((()=>w(i)),[w,i]),C=p((()=>c&&w(c)),[w,c]),E=n=>{if(!a)return n;const o=a.toLowerCase().trim(),s=n.toLowerCase().indexOf(o),l=s+a.length;return-1===s?n:e(r,{children:[i.slice(0,s),t(dl,{$variant:g,children:i.slice(s,l)}),i.slice(l)]})},S=n=>e(r,{children:[t(ul,{$maxLines:s,"aria-hidden":!0,children:E(n)}),t(gl,{$maxLines:s,"aria-hidden":!0,children:E(n)})]});return e(cl,{ref:v,$labelDisplayType:F||C?"next-line":o,$variant:g,children:[t(sl,{"aria-label":i,$bold:n,$maxLines:s,$selected:l,$disabled:d,$truncateType:u,children:"middle"===u&&F?S(i):E(i)}),c&&t(ll,{"aria-label":c,$maxLines:s,$truncateType:u,$labelDisplayType:o,children:"middle"===u&&C?S(c):c})]})};var hl=yn;var bl=function(e){var r=this.__data__,t=r.delete(e);return this.size=r.size,t};var fl=function(e){return this.__data__.get(e)};var pl=function(e){return this.__data__.has(e)},yl=yn,vl=vn,xl=jn;var wl=function(e,r){var t=this.__data__;if(t instanceof yl){var n=t.__data__;if(!vl||n.length<199)return n.push([e,r]),this.size=++t.size,this;t=this.__data__=new xl(n)}return t.set(e,r),this.size=t.size,this},Fl=yn,$l=function(){this.__data__=new hl,this.size=0},Cl=bl,El=fl,Sl=pl,Dl=wl;function kl(e){var r=this.__data__=new Fl(e);this.size=r.size}kl.prototype.clear=$l,kl.prototype.delete=Cl,kl.prototype.get=El,kl.prototype.has=Sl,kl.prototype.set=Dl;var Bl=kl;var Tl=jn,Al=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},zl=function(e){return this.__data__.has(e)};function Il(e){var r=-1,t=null==e?0:e.length;for(this.__data__=new Tl;++r<t;)this.add(e[r])}Il.prototype.add=Il.prototype.push=Al,Il.prototype.has=zl;var Ol=function(e,r){return e.has(r)},Ml=Il,Hl=function(e,r){for(var t=-1,n=null==e?0:e.length;++t<n;)if(r(e[t],t,e))return!0;return!1},Ll=Ol;var Rl=function(e,r,t,n,o,i){var a=1&t,s=e.length,l=r.length;if(s!=l&&!(a&&l>s))return!1;var d=i.get(e),c=i.get(r);if(d&&c)return d==r&&c==e;var u=-1,g=!0,m=2&t?new Ml:void 0;for(i.set(e,r),i.set(r,e);++u<s;){var h=e[u],b=r[u];if(n)var f=a?n(b,h,u,r,e,i):n(h,b,u,e,r,i);if(void 0!==f){if(f)continue;g=!1;break}if(m){if(!Hl(r,(function(e,r){if(!Ll(m,r)&&(h===e||o(h,e,t,n,i)))return m.push(r)}))){g=!1;break}}else if(h!==b&&!o(h,b,t,n,i)){g=!1;break}}return i.delete(e),i.delete(r),g};var jl=function(e){var r=-1,t=Array(e.size);return e.forEach((function(e,n){t[++r]=[n,e]})),t};var _l=Wr.Uint8Array,Wl=Qt,Pl=Rl,Nl=jl,Yl=function(e){var r=-1,t=Array(e.size);return e.forEach((function(e){t[++r]=e})),t},Vl=Pr?Pr.prototype:void 0,Ul=Vl?Vl.valueOf:void 0;var Zl=function(e,r,t,n,o,i,a){switch(t){case"[object DataView]":if(e.byteLength!=r.byteLength||e.byteOffset!=r.byteOffset)return!1;e=e.buffer,r=r.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=r.byteLength||!i(new _l(e),new _l(r)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Wl(+e,+r);case"[object Error]":return e.name==r.name&&e.message==r.message;case"[object RegExp]":case"[object String]":return e==r+"";case"[object Map]":var s=Nl;case"[object Set]":var l=1&n;if(s||(s=Yl),e.size!=r.size&&!l)return!1;var d=a.get(e);if(d)return d==r;n|=2,a.set(e,r);var c=Pl(s(e),s(r),n,o,i,a);return a.delete(e),c;case"[object Symbol]":if(Ul)return Ul.call(e)==Ul.call(r)}return!1};var Gl=function(e,r){for(var t=-1,n=r.length,o=e.length;++t<n;)e[o+t]=r[t];return e},ql=Gl,Xl=Lr;var Kl=function(e,r,t){var n=r(e);return Xl(e)?n:ql(n,t(e))};var Jl=function(e,r){for(var t=-1,n=null==e?0:e.length,o=0,i=[];++t<n;){var a=e[t];r(a,t,e)&&(i[o++]=a)}return i},Ql=function(){return[]},ed=Object.prototype.propertyIsEnumerable,rd=Object.getOwnPropertySymbols,td=rd?function(e){return null==e?[]:(e=Object(e),Jl(rd(e),(function(r){return ed.call(e,r)})))}:Ql;var nd=function(e,r){for(var t=-1,n=Array(e);++t<e;)n[t]=r(t);return n},od=Qr,id=et;var ad=function(e){return id(e)&&"[object Arguments]"==od(e)},sd=et,ld=Object.prototype,dd=ld.hasOwnProperty,cd=ld.propertyIsEnumerable,ud=ad(function(){return arguments}())?ad:function(e){return sd(e)&&dd.call(e,"callee")&&!cd.call(e,"callee")},gd={exports:{}};var md=function(){return!1};!function(e,r){var t=Wr,n=md,o=r&&!r.nodeType&&r,i=o&&e&&!e.nodeType&&e,a=i&&i.exports===o?t.Buffer:void 0,s=(a?a.isBuffer:void 0)||n;e.exports=s}(gd,gd.exports);var hd=gd.exports,bd=/^(?:0|[1-9]\d*)$/;var fd=function(e,r){var t=typeof e;return!!(r=null==r?9007199254740991:r)&&("number"==t||"symbol"!=t&&bd.test(e))&&e>-1&&e%1==0&&e<r};var pd=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},yd=Qr,vd=pd,xd=et,wd={};wd["[object Float32Array]"]=wd["[object Float64Array]"]=wd["[object Int8Array]"]=wd["[object Int16Array]"]=wd["[object Int32Array]"]=wd["[object Uint8Array]"]=wd["[object Uint8ClampedArray]"]=wd["[object Uint16Array]"]=wd["[object Uint32Array]"]=!0,wd["[object Arguments]"]=wd["[object Array]"]=wd["[object ArrayBuffer]"]=wd["[object Boolean]"]=wd["[object DataView]"]=wd["[object Date]"]=wd["[object Error]"]=wd["[object Function]"]=wd["[object Map]"]=wd["[object Number]"]=wd["[object Object]"]=wd["[object RegExp]"]=wd["[object Set]"]=wd["[object String]"]=wd["[object WeakMap]"]=!1;var Fd=function(e){return xd(e)&&vd(e.length)&&!!wd[yd(e)]};var $d=function(e){return function(r){return e(r)}},Cd={exports:{}};!function(e,r){var t=Rr,n=r&&!r.nodeType&&r,o=n&&e&&!e.nodeType&&e,i=o&&o.exports===n&&t.process,a=function(){try{var e=o&&o.require&&o.require("util").types;return e||i&&i.binding&&i.binding("util")}catch(e){}}();e.exports=a}(Cd,Cd.exports);var Ed=Cd.exports,Sd=Fd,Dd=$d,kd=Ed&&Ed.isTypedArray,Bd=kd?Dd(kd):Sd,Td=nd,Ad=ud,zd=Lr,Id=hd,Od=fd,Md=Bd,Hd=Object.prototype.hasOwnProperty;var Ld=function(e,r){var t=zd(e),n=!t&&Ad(e),o=!t&&!n&&Id(e),i=!t&&!n&&!o&&Md(e),a=t||n||o||i,s=a?Td(e.length,String):[],l=s.length;for(var d in e)!r&&!Hd.call(e,d)||a&&("length"==d||o&&("offset"==d||"parent"==d)||i&&("buffer"==d||"byteLength"==d||"byteOffset"==d)||Od(d,l))||s.push(d);return s},Rd=Object.prototype;var jd=function(e){var r=e&&e.constructor;return e===("function"==typeof r&&r.prototype||Rd)};var _d=function(e,r){return function(t){return e(r(t))}}(Object.keys,Object),Wd=jd,Pd=_d,Nd=Object.prototype.hasOwnProperty;var Yd=function(e){if(!Wd(e))return Pd(e);var r=[];for(var t in Object(e))Nd.call(e,t)&&"constructor"!=t&&r.push(t);return r},Vd=mt,Ud=pd;var Zd=function(e){return null!=e&&Ud(e.length)&&!Vd(e)},Gd=Ld,qd=Yd,Xd=Zd;var Kd=function(e){return Xd(e)?Gd(e):qd(e)},Jd=Kl,Qd=td,ec=Kd;var rc=function(e){return Jd(e,ec,Qd)},tc=Object.prototype.hasOwnProperty;var nc=function(e,r,t,n,o,i){var a=1&t,s=rc(e),l=s.length;if(l!=rc(r).length&&!a)return!1;for(var d=l;d--;){var c=s[d];if(!(a?c in r:tc.call(r,c)))return!1}var u=i.get(e),g=i.get(r);if(u&&g)return u==r&&g==e;var m=!0;i.set(e,r),i.set(r,e);for(var h=a;++d<l;){var b=e[c=s[d]],f=r[c];if(n)var p=a?n(f,b,c,r,e,i):n(b,f,c,e,r,i);if(!(void 0===p?b===f||o(b,f,t,n,i):p)){m=!1;break}h||(h="constructor"==c)}if(m&&!h){var y=e.constructor,v=r.constructor;y==v||!("constructor"in e)||!("constructor"in r)||"function"==typeof y&&y instanceof y&&"function"==typeof v&&v instanceof v||(m=!1)}return i.delete(e),i.delete(r),m},oc=zt(Wr,"DataView"),ic=vn,ac=zt(Wr,"Promise"),sc=zt(Wr,"Set"),lc=zt(Wr,"WeakMap"),dc=Qr,cc=yt,uc="[object Map]",gc="[object Promise]",mc="[object Set]",hc="[object WeakMap]",bc="[object DataView]",fc=cc(oc),pc=cc(ic),yc=cc(ac),vc=cc(sc),xc=cc(lc),wc=dc;(oc&&wc(new oc(new ArrayBuffer(1)))!=bc||ic&&wc(new ic)!=uc||ac&&wc(ac.resolve())!=gc||sc&&wc(new sc)!=mc||lc&&wc(new lc)!=hc)&&(wc=function(e){var r=dc(e),t="[object Object]"==r?e.constructor:void 0,n=t?cc(t):"";if(n)switch(n){case fc:return bc;case pc:return uc;case yc:return gc;case vc:return mc;case xc:return hc}return r});var Fc=Bl,$c=Rl,Cc=Zl,Ec=nc,Sc=wc,Dc=Lr,kc=hd,Bc=Bd,Tc="[object Arguments]",Ac="[object Array]",zc="[object Object]",Ic=Object.prototype.hasOwnProperty;var Oc=function(e,r,t,n,o,i){var a=Dc(e),s=Dc(r),l=a?Ac:Sc(e),d=s?Ac:Sc(r),c=(l=l==Tc?zc:l)==zc,u=(d=d==Tc?zc:d)==zc,g=l==d;if(g&&kc(e)){if(!kc(r))return!1;a=!0,c=!1}if(g&&!c)return i||(i=new Fc),a||Bc(e)?$c(e,r,t,n,o,i):Cc(e,r,l,t,n,o,i);if(!(1&t)){var m=c&&Ic.call(e,"__wrapped__"),h=u&&Ic.call(r,"__wrapped__");if(m||h){var b=m?e.value():e,f=h?r.value():r;return i||(i=new Fc),o(b,f,t,n,i)}}return!!g&&(i||(i=new Fc),Ec(e,r,t,n,o,i))},Mc=et;var Hc=function e(r,t,n,o,i){return r===t||(null==r||null==t||!Mc(r)&&!Mc(t)?r!=r&&t!=t:Oc(r,t,n,o,e,i))},Lc=Bl,Rc=Hc;var jc=function(e,r,t,n){var o=t.length,i=o,a=!n;if(null==e)return!i;for(e=Object(e);o--;){var s=t[o];if(a&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++o<i;){var l=(s=t[o])[0],d=e[l],c=s[1];if(a&&s[2]){if(void 0===d&&!(l in e))return!1}else{var u=new Lc;if(n)var g=n(d,c,l,e,r,u);if(!(void 0===g?Rc(c,d,3,n,u):g))return!1}}return!0},_c=dt;var Wc=function(e){return e==e&&!_c(e)},Pc=Wc,Nc=Kd;var Yc=function(e){for(var r=Nc(e),t=r.length;t--;){var n=r[t],o=e[n];r[t]=[n,o,Pc(o)]}return r};var Vc=function(e,r){return function(t){return null!=t&&(t[e]===r&&(void 0!==r||e in Object(t)))}},Uc=jc,Zc=Yc,Gc=Vc;var qc=function(e,r){return null!=e&&r in Object(e)},Xc=oo,Kc=ud,Jc=Lr,Qc=fd,eu=pd,ru=ao;var tu=function(e,r,t){for(var n=-1,o=(r=Xc(r,e)).length,i=!1;++n<o;){var a=ru(r[n]);if(!(i=null!=e&&t(e,a)))break;e=e[a]}return i||++n!=o?i:!!(o=null==e?0:e.length)&&eu(o)&&Qc(a,o)&&(Jc(e)||Kc(e))},nu=qc,ou=tu;var iu=Hc,au=go,su=function(e,r){return null!=e&&ou(e,r,nu)},lu=lt,du=Wc,cu=Vc,uu=ao;var gu=function(e){return function(r){return null==r?void 0:r[e]}},mu=co;var hu=gu,bu=function(e){return function(r){return mu(r,e)}},fu=lt,pu=ao;var yu=function(e){var r=Zc(e);return 1==r.length&&r[0][2]?Gc(r[0][0],r[0][1]):function(t){return t===e||Uc(t,e,r)}},vu=function(e,r){return lu(e)&&du(r)?cu(uu(e),r):function(t){var n=au(t,e);return void 0===n&&n===r?su(t,e):iu(r,n,3)}},xu=function(e){return e},wu=Lr,Fu=function(e){return fu(e)?hu(pu(e)):bu(e)};var $u=function(e){return"function"==typeof e?e:null==e?xu:"object"==typeof e?wu(e)?vu(e[0],e[1]):yu(e):Fu(e)},Cu=$u,Eu=Zd,Su=Kd;var Du=function(e){return function(r,t,n){var o=Object(r);if(!Eu(r)){var i=Cu(t);r=Su(r),t=function(e){return i(o[e],e,o)}}var a=e(r,t,n);return a>-1?o[i?r[a]:a]:void 0}};var ku=/\s/;var Bu=function(e){for(var r=e.length;r--&&ku.test(e.charAt(r)););return r},Tu=/^\s+/;var Au=function(e){return e?e.slice(0,Bu(e)+1).replace(Tu,""):e},zu=dt,Iu=nt,Ou=/^[-+]0x[0-9a-f]+$/i,Mu=/^0b[01]+$/i,Hu=/^0o[0-7]+$/i,Lu=parseInt;var Ru=function(e){if("number"==typeof e)return e;if(Iu(e))return NaN;if(zu(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=zu(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=Au(e);var t=Mu.test(e);return t||Hu.test(e)?Lu(e.slice(2),t?2:8):Ou.test(e)?NaN:+e},ju=1/0;var _u=function(e){return e?(e=Ru(e))===ju||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var Wu=function(e,r,t,n){for(var o=e.length,i=t+(n?1:-1);n?i--:++i<o;)if(r(e[i],i,e))return i;return-1},Pu=$u,Nu=function(e){var r=_u(e),t=r%1;return r==r?t?r-t:r:0},Yu=Math.max;var Vu=le(Du((function(e,r,t){var n=null==e?0:e.length;if(!n)return-1;var o=null==t?0:Nu(t);return o<0&&(o=Yu(n+o,0)),Wu(e,Pu(r),o)}))),Uu=Hc;var Zu=le((function(e,r){return Uu(e,r)}));function Gu(e){return()=>e}function qu(e){e()}function Xu(e,r){return t=>e(r(t))}function Ku(e,r){return()=>e(r)}function Ju(e,r){return t=>e(r,t)}function Qu(e){return void 0!==e}function eg(){}function rg(e,r){return r(e),e}function tg(e,r){return r(e)}function ng(...e){return e}function og(e,r){return e(1,r)}function ig(e,r){e(0,r)}function ag(e){e(2)}function sg(e){return e(4)}function lg(e,r){return og(e,Ju(r,0))}function dg(e,r){const t=e(1,(e=>{t(),r(e)}));return t}function cg(e){let r,t;return n=>o=>{r=o,t&&clearTimeout(t),t=setTimeout((()=>{n(r)}),e)}}function ug(e,r){return e===r}function gg(e=ug){let r;return t=>n=>{e(r,n)||(r=n,t(n))}}function mg(e){return r=>t=>{e(t)&&r(t)}}function hg(e){return r=>Xu(r,e)}function bg(e){return r=>()=>{r(e)}}function fg(e,...r){const t=function(...e){return r=>e.reduceRight(tg,r)}(...r);return(r,n)=>{switch(r){case 2:return void ag(e);case 1:return og(e,t(n))}}}function pg(e,r){return t=>n=>{t(r=e(r,n))}}function yg(e){return r=>t=>{e>0?e--:r(t)}}function vg(e){let r,t=null;return n=>o=>{t=o,!r&&(r=setTimeout((()=>{r=void 0,n(t)}),e))}}function xg(...e){const r=new Array(e.length);let t=0,n=null;const o=Math.pow(2,e.length)-1;return e.forEach(((e,i)=>{const a=Math.pow(2,i);og(e,(e=>{const s=t;t|=a,r[i]=e,s!==o&&t===o&&n&&(n(),n=null)}))})),e=>i=>{const a=()=>{e([i].concat(r))};t===o?a():n=a}}function wg(e){let r=e;const t=$g();return(e,n)=>{switch(e){case 0:r=n;break;case 1:n(r);break;case 4:return r}return t(e,n)}}function Fg(e,r){return rg(wg(r),(r=>lg(e,r)))}function $g(){const e=[];return(r,t)=>{switch(r){case 0:return void e.slice().forEach((e=>{e(t)}));case 2:return void e.splice(0,e.length);case 1:return e.push(t),()=>{const r=e.indexOf(t);r>-1&&e.splice(r,1)}}}}function Cg(e){return rg($g(),(r=>lg(e,r)))}function Eg(e,r=[],{singleton:t}={singleton:!0}){return{constructor:e,dependencies:r,id:Sg(),singleton:t}}const Sg=()=>Symbol();function Dg(...e){const r=$g(),t=new Array(e.length);let n=0;const o=Math.pow(2,e.length)-1;return e.forEach(((e,i)=>{const a=Math.pow(2,i);og(e,(e=>{t[i]=e,n|=a,n===o&&ig(r,t)}))})),function(e,i){switch(e){case 2:return void ag(r);case 1:return n===o&&i(t),og(r,i)}}}function kg(e,r=ug){return fg(e,gg(r))}function Bg(...e){return function(r,t){switch(r){case 2:return;case 1:return function(...e){return()=>{e.map(qu)}}(...e.map((e=>og(e,t))))}}}var Tg=(e=>(e[e.DEBUG=0]="DEBUG",e[e.INFO=1]="INFO",e[e.WARN=2]="WARN",e[e.ERROR=3]="ERROR",e))(Tg||{});const Ag={0:"debug",3:"error",1:"log",2:"warn"},zg=Eg((()=>{const e=wg(3);return{log:wg(((r,t,n=1)=>{var o;n>=(null!=(o=(typeof globalThis>"u"?window:globalThis).VIRTUOSO_LOG_LEVEL)?o:sg(e))&&console[Ag[n]]("%creact-virtuoso: %c%s %o","color: #0253b3; font-weight: bold","color: initial",r,t)})),logLevel:e}}),[],{singleton:!0});function Ig(e,r,t){return Og(e,r,t).callbackRef}function Og(e,r,t){const n=o.useRef(null);let i=e=>{};if(typeof ResizeObserver<"u"){const a=o.useMemo((()=>new ResizeObserver((r=>{const n=()=>{const t=r[0].target;null!==t.offsetParent&&e(t)};t?n():requestAnimationFrame(n)}))),[e]);i=e=>{e&&r?(a.observe(e),n.current=e):(n.current&&a.unobserve(n.current),n.current=null)}}return{callbackRef:i,ref:n}}function Mg(e,r,t,n,i,a,s,l,d){const c=o.useCallback((t=>{const o=function(e,r,t,n){const o=e.length;if(0===o)return null;const i=[];for(let a=0;a<o;a++){const o=e.item(a);if(void 0===o.dataset.index)continue;const s=parseInt(o.dataset.index),l=parseFloat(o.dataset.knownSize),d=r(o,t);if(0===d&&n("Zero-sized element, this should not happen",{child:o},Tg.ERROR),d===l)continue;const c=i[i.length-1];0===i.length||c.size!==d||c.endIndex!==s-1?i.push({endIndex:s,size:d,startIndex:s}):i[i.length-1].endIndex++}return i}(t.children,r,l?"offsetWidth":"offsetHeight",i);let d=t.parentElement;for(;!d.dataset.virtuosoScroller;)d=d.parentElement;const c="window"===d.lastElementChild.dataset.viewportType,u=s?l?s.scrollLeft:s.scrollTop:c?l?window.pageXOffset||document.documentElement.scrollLeft:window.pageYOffset||document.documentElement.scrollTop:l?d.scrollLeft:d.scrollTop,g=s?l?s.scrollWidth:s.scrollHeight:c?l?document.documentElement.scrollWidth:document.documentElement.scrollHeight:l?d.scrollWidth:d.scrollHeight,m=s?l?s.offsetWidth:s.offsetHeight:c?l?window.innerWidth:window.innerHeight:l?d.offsetWidth:d.offsetHeight;n({scrollHeight:g,scrollTop:Math.max(u,0),viewportHeight:m}),null==a||a(l?Hg("column-gap",getComputedStyle(t).columnGap,i):Hg("row-gap",getComputedStyle(t).rowGap,i)),null!==o&&e(o)}),[e,r,i,a,s,n]);return Og(c,t,d)}function Hg(e,r,t){return"normal"!==r&&!(null!=r&&r.endsWith("px"))&&t(`${e} was not resolved to pixel value correctly`,r,Tg.WARN),"normal"===r?0:parseInt(null!=r?r:"0",10)}function Lg(e,r,t){const n=o.useRef(null),i=o.useCallback((t=>{if(null==t||!t.offsetParent)return;const o=t.getBoundingClientRect(),i=o.width;let a,s;if(r){const e=r.getBoundingClientRect(),t=o.top-e.top;s=e.height-Math.max(0,t),a=t+r.scrollTop}else s=window.innerHeight-Math.max(0,o.top),a=o.top+window.pageYOffset;n.current={offsetTop:a,visibleHeight:s,visibleWidth:i},e(n.current)}),[e,r]),{callbackRef:a,ref:s}=Og(i,!0,t),l=o.useCallback((()=>{i(s.current)}),[i,s]);return o.useEffect((()=>{if(r){r.addEventListener("scroll",l);const e=new ResizeObserver((()=>{requestAnimationFrame(l)}));return e.observe(r),()=>{r.removeEventListener("scroll",l),e.unobserve(r)}}return window.addEventListener("scroll",l),window.addEventListener("resize",l),()=>{window.removeEventListener("scroll",l),window.removeEventListener("resize",l)}}),[l,r]),a}const Rg=Eg((()=>{const e=$g(),r=$g(),t=wg(0),n=$g(),o=wg(0),i=$g(),a=$g(),s=wg(0),l=wg(0),d=wg(0),c=wg(0),u=$g(),g=$g(),m=wg(!1),h=wg(!1),b=wg(!1);return lg(fg(e,hg((({scrollTop:e})=>e))),r),lg(fg(e,hg((({scrollHeight:e})=>e))),a),lg(r,o),{deviation:t,fixedFooterHeight:d,fixedHeaderHeight:l,footerHeight:c,headerHeight:s,horizontalDirection:h,scrollBy:g,scrollContainerState:e,scrollHeight:a,scrollingInProgress:m,scrollTo:u,scrollTop:r,skipAnimationFrameInResizeObserver:b,smoothScrollTargetReached:n,statefulScrollTop:o,viewportHeight:i}}),[],{singleton:!0}),jg={lvl:0};function _g(e,r){const t=e.length;if(0===t)return[];let{index:n,value:o}=r(e[0]);const i=[];for(let a=1;a<t;a++){const{index:t,value:s}=r(e[a]);i.push({end:t-1,start:n,value:o}),n=t,o=s}return i.push({end:1/0,start:n,value:o}),i}function Wg(e){return e===jg}function Pg(e,r){if(!Wg(e))return r===e.k?e.v:r<e.k?Pg(e.l,r):Pg(e.r,r)}function Ng(e,r,t="k"){if(Wg(e))return[-1/0,void 0];if(Number(e[t])===r)return[e.k,e.v];if(Number(e[t])<r){const n=Ng(e.r,r,t);return n[0]===-1/0?[e.k,e.v]:n}return Ng(e.l,r,t)}function Yg(e,r,t){return Wg(e)?rm(r,t,1):r===e.k?Kg(e,{k:r,v:t}):r<e.k?tm(Kg(e,{l:Yg(e.l,r,t)})):tm(Kg(e,{r:Yg(e.r,r,t)}))}function Vg(){return jg}function Ug(e,r,t){if(Wg(e))return[];return function(e){return _g(e,(({k:e,v:r})=>({index:e,value:r})))}(qg(e,Ng(e,r)[0],t))}function Zg(e,r){if(Wg(e))return jg;const{k:t,l:n,r:o}=e;if(r===t){if(Wg(n))return o;if(Wg(o))return n;{const[r,t]=em(n);return Xg(Kg(e,{k:r,l:Jg(n),v:t}))}}return Xg(Kg(e,r<t?{l:Zg(n,r)}:{r:Zg(o,r)}))}function Gg(e){return Wg(e)?[]:[...Gg(e.l),{k:e.k,v:e.v},...Gg(e.r)]}function qg(e,r,t){if(Wg(e))return[];const{k:n,l:o,r:i,v:a}=e;let s=[];return n>r&&(s=s.concat(qg(o,r,t))),n>=r&&n<=t&&s.push({k:n,v:a}),n<=t&&(s=s.concat(qg(i,r,t))),s}function Xg(e){const{l:r,lvl:t,r:n}=e;if(n.lvl>=t-1&&r.lvl>=t-1)return e;if(t>n.lvl+1){if(Qg(r))return nm(Kg(e,{lvl:t-1}));if(!Wg(r)&&!Wg(r.r))return Kg(r.r,{l:Kg(r,{r:r.r.l}),lvl:t,r:Kg(e,{l:r.r.r,lvl:t-1})});throw new Error("Unexpected empty nodes")}if(Qg(e))return om(Kg(e,{lvl:t-1}));if(Wg(n)||Wg(n.l))throw new Error("Unexpected empty nodes");{const r=n.l,o=Qg(r)?n.lvl-1:n.lvl;return Kg(r,{l:Kg(e,{lvl:t-1,r:r.l}),lvl:r.lvl+1,r:om(Kg(n,{l:r.r,lvl:o}))})}}function Kg(e,r){return rm(void 0!==r.k?r.k:e.k,void 0!==r.v?r.v:e.v,void 0!==r.lvl?r.lvl:e.lvl,void 0!==r.l?r.l:e.l,void 0!==r.r?r.r:e.r)}function Jg(e){return Wg(e.r)?e.l:Xg(Kg(e,{r:Jg(e.r)}))}function Qg(e){return Wg(e)||e.lvl>e.r.lvl}function em(e){return Wg(e.r)?[e.k,e.v]:em(e.r)}function rm(e,r,t,n=jg,o=jg){return{k:e,l:n,lvl:t,r:o,v:r}}function tm(e){return om(nm(e))}function nm(e){const{l:r}=e;return Wg(r)||r.lvl!==e.lvl?e:Kg(r,{r:Kg(e,{l:r.r})})}function om(e){const{lvl:r,r:t}=e;return Wg(t)||Wg(t.r)||t.lvl!==r||t.r.lvl!==r?e:Kg(t,{l:Kg(e,{r:t.l}),lvl:r+1})}function im(e,r){return!(!e||e.startIndex!==r.startIndex||e.endIndex!==r.endIndex)}function am(e,r){return!(!e||e[0]!==r[0]||e[1]!==r[1])}const sm=Eg((()=>({recalcInProgress:wg(!1)})),[],{singleton:!0});function lm(e,r,t){return e[dm(e,r,t)]}function dm(e,r,t,n=0){let o=e.length-1;for(;n<=o;){const i=Math.floor((n+o)/2),a=t(e[i],r);if(0===a)return i;if(-1===a){if(o-n<2)return i-1;o=i-1}else{if(o===n)return i;n=i+1}}throw new Error(`Failed binary finding record in array - ${e.join(",")}, searched for ${r}`)}function cm(e,r){return Math.round(e.getBoundingClientRect()[r])}function um(e){return!Wg(e.groupOffsetTree)}function gm({index:e},r){return r===e?0:r<e?-1:1}function mm({offset:e},r){return r===e?0:r<e?-1:1}function hm(e,r,t){if(0===r.length)return 0;const{index:n,offset:o,size:i}=lm(r,e,gm),a=e-n,s=i*a+(a-1)*t+o;return s>0?s+t:s}function bm(e,r){if(!um(r))return e;let t=0;for(;r.groupIndices[t]<=e+t;)t++;return e+t}function fm(e,r,t){if(function(e){return typeof e.groupIndex<"u"}(e))return r.groupIndices[e.groupIndex]+1;{let n=bm("LAST"===e.index?t:e.index,r);return n=Math.max(0,n,Math.min(t,n)),n}}function pm(e,r,t,n=0){return n>0&&(r=Math.max(r,lm(e,n,gm).offset)),_g(function(e,r,t,n){const o=dm(e,r,n),i=dm(e,t,n,o);return e.slice(o,i+1)}(e,r,t,mm),wm)}function ym(e,[r,t,n,o]){r.length>0&&n("received item sizes",r,Tg.DEBUG);const i=e.sizeTree;let a=i,s=0;if(t.length>0&&Wg(i)&&2===r.length){const e=r[0].size,n=r[1].size;a=t.reduce(((r,t)=>Yg(Yg(r,t,e),t+1,n)),a)}else[a,s]=function(e,r){let t=Wg(e)?0:1/0;for(const n of r){const{endIndex:r,size:o,startIndex:i}=n;if(t=Math.min(t,i),Wg(e)){e=Yg(e,0,o);continue}const a=Ug(e,i-1,r+1);if(a.some(Fm(n)))continue;let s=!1,l=!1;for(const{end:t,start:n,value:i}of a)s?(r>=n||o===i)&&(e=Zg(e,n)):(l=i!==o,s=!0),t>r&&r>=n&&i!==o&&(e=Yg(e,r+1,i));l&&(e=Yg(e,i,o))}return[e,t]}(a,r);if(a===i)return e;const{lastIndex:l,lastOffset:d,lastSize:c,offsetTree:u}=xm(e.offsetTree,s,a,o);return{groupIndices:t,groupOffsetTree:t.reduce(((e,r)=>Yg(e,r,hm(r,u,o))),Vg()),lastIndex:l,lastOffset:d,lastSize:c,offsetTree:u,sizeTree:a}}function vm(e,r){let t=0,n=0;for(;t<e;)t+=r[n+1]-r[n]-1,n++;return n-(t===e?0:1)}function xm(e,r,t,n){let o=e,i=0,a=0,s=0,l=0;if(0!==r){l=dm(o,r-1,gm),s=o[l].offset;const e=Ng(t,r-1);i=e[0],a=e[1],o.length&&o[l].size===Ng(t,r)[1]&&(l-=1),o=o.slice(0,l+1)}else o=[];for(const{start:e,value:l}of Ug(t,r,1/0)){const r=e-i,t=r*a+s+r*n;o.push({index:e,offset:t,size:l}),i=e,s=t,a=l}return{lastIndex:i,lastOffset:s,lastSize:a,offsetTree:o}}function wm(e){return{index:e.index,value:e}}function Fm(e){const{endIndex:r,size:t,startIndex:n}=e;return e=>e.start===n&&(e.end===r||e.end===1/0)&&e.value===t}const $m={offsetHeight:"height",offsetWidth:"width"},Cm=Eg((([{log:e},{recalcInProgress:r}])=>{const t=$g(),n=$g(),o=Fg(n,0),i=$g(),a=$g(),s=wg(0),l=wg([]),d=wg(void 0),c=wg(void 0),u=wg(((e,r)=>cm(e,$m[r]))),g=wg(void 0),m=wg(0),h={groupIndices:[],groupOffsetTree:Vg(),lastIndex:0,lastOffset:0,lastSize:0,offsetTree:[],sizeTree:Vg()},b=Fg(fg(t,xg(l,e,m),pg(ym,h),gg()),h),f=Fg(fg(l,gg(),pg(((e,r)=>({current:r,prev:e.current})),{current:[],prev:[]}),hg((({prev:e})=>e))),[]);lg(fg(l,mg((e=>e.length>0)),xg(b,m),hg((([e,r,t])=>{const n=e.reduce(((e,n,o)=>Yg(e,n,hm(n,r.offsetTree,t)||o)),Vg());return{...r,groupIndices:e,groupOffsetTree:n}}))),b),lg(fg(n,xg(b),mg((([e,{lastIndex:r}])=>e<r)),hg((([e,{lastIndex:r,lastSize:t}])=>[{endIndex:r,size:t,startIndex:e}]))),t),lg(d,c);const p=Fg(fg(d,hg((e=>void 0===e))),!0);lg(fg(c,mg((e=>void 0!==e&&Wg(sg(b).sizeTree))),hg((e=>[{endIndex:0,size:e,startIndex:0}]))),t);const y=Cg(fg(t,xg(b),pg((({sizes:e},[r,t])=>({changed:t!==e,sizes:t})),{changed:!1,sizes:h}),hg((e=>e.changed))));og(fg(s,pg(((e,r)=>({diff:e.prev-r,prev:r})),{diff:0,prev:0}),hg((e=>e.diff))),(e=>{const{groupIndices:t}=sg(b);if(e>0)ig(r,!0),ig(i,e+vm(e,t));else if(e<0){const r=sg(f);r.length>0&&(e-=vm(-e,r)),ig(a,e)}})),og(fg(s,xg(e)),(([e,r])=>{e<0&&r("`firstItemIndex` prop should not be set to less than zero. If you don't know the total count, just use a very high value",{firstItemIndex:s},Tg.ERROR)}));const v=Cg(i);lg(fg(i,xg(b),hg((([e,r])=>{const t=r.groupIndices.length>0,n=[],o=r.lastSize;if(t){const t=Pg(r.sizeTree,0);let i=0,a=0;for(;i<e;){const e=r.groupIndices[a],s=r.groupIndices.length===a+1?1/0:r.groupIndices[a+1]-e-1;n.push({endIndex:e,size:t,startIndex:e}),n.push({endIndex:e+1+s-1,size:o,startIndex:e+1}),a++,i+=s+1}const s=Gg(r.sizeTree);return i!==e&&s.shift(),s.reduce(((r,{k:t,v:n})=>{let o=r.ranges;return 0!==r.prevSize&&(o=[...r.ranges,{endIndex:t+e-1,size:r.prevSize,startIndex:r.prevIndex}]),{prevIndex:t+e,prevSize:n,ranges:o}}),{prevIndex:e,prevSize:0,ranges:n}).ranges}return Gg(r.sizeTree).reduce(((r,{k:t,v:n})=>({prevIndex:t+e,prevSize:n,ranges:[...r.ranges,{endIndex:t+e-1,size:r.prevSize,startIndex:r.prevIndex}]})),{prevIndex:0,prevSize:o,ranges:[]}).ranges}))),t);const x=Cg(fg(a,xg(b,m),hg((([e,{offsetTree:r},t])=>hm(-e,r,t)))));return lg(fg(a,xg(b,m),hg((([e,r,t])=>{if(r.groupIndices.length>0){if(Wg(r.sizeTree))return r;let n=Vg();const o=sg(f);let i=0,a=0,s=0;for(;i<-e;){s=o[a];const e=o[a+1]-s-1;a++,i+=e+1}if(n=Gg(r.sizeTree).reduce(((r,{k:t,v:n})=>Yg(r,Math.max(0,t+e),n)),n),i!==-e){n=Yg(n,0,Pg(r.sizeTree,s));n=Yg(n,1,Ng(r.sizeTree,1-e)[1])}return{...r,sizeTree:n,...xm(r.offsetTree,0,n,t)}}{const n=Gg(r.sizeTree).reduce(((r,{k:t,v:n})=>Yg(r,Math.max(0,t+e),n)),Vg());return{...r,sizeTree:n,...xm(r.offsetTree,0,n,t)}}}))),b),{beforeUnshiftWith:v,data:g,defaultItemSize:c,firstItemIndex:s,fixedItemSize:d,gap:m,groupIndices:l,itemSize:u,listRefresh:y,shiftWith:a,shiftWithOffset:x,sizeRanges:t,sizes:b,statefulTotalCount:o,totalCount:n,trackItemSizes:p,unshiftWith:i}}),ng(zg,sm),{singleton:!0});function Em(e){return e.reduce(((e,r)=>(e.groupIndices.push(e.totalCount),e.totalCount+=r+1,e)),{groupIndices:[],totalCount:0})}const Sm=Eg((([{groupIndices:e,sizes:r,totalCount:t},{headerHeight:n,scrollTop:o}])=>{const i=$g(),a=$g(),s=Cg(fg(i,hg(Em)));return lg(fg(s,hg((e=>e.totalCount))),t),lg(fg(s,hg((e=>e.groupIndices))),e),lg(fg(Dg(o,r,n),mg((([e,r])=>um(r))),hg((([e,r,t])=>Ng(r.groupOffsetTree,Math.max(e-t,0),"v")[0])),gg(),hg((e=>[e]))),a),{groupCounts:i,topItemsIndexes:a}}),ng(Cm,Rg)),Dm=Eg((([{log:e}])=>{const r=wg(!1),t=Cg(fg(r,mg((e=>e)),gg()));return og(r,(r=>{r&&sg(e)("props updated",{},Tg.DEBUG)})),{didMount:t,propsReady:r}}),ng(zg),{singleton:!0}),km=typeof document<"u"&&"scrollBehavior"in document.documentElement.style;function Bm(e){const r="number"==typeof e?{index:e}:e;return r.align||(r.align="start"),(!r.behavior||!km)&&(r.behavior="auto"),r.offset||(r.offset=0),r}const Tm=Eg((([{gap:e,listRefresh:r,sizes:t,totalCount:n},{fixedFooterHeight:o,fixedHeaderHeight:i,footerHeight:a,headerHeight:s,scrollingInProgress:l,scrollTo:d,smoothScrollTargetReached:c,viewportHeight:u},{log:g}])=>{const m=$g(),h=$g(),b=wg(0);let f=null,p=null,y=null;function v(){f&&(f(),f=null),y&&(y(),y=null),p&&(clearTimeout(p),p=null),ig(l,!1)}return lg(fg(m,xg(t,u,n,b,s,a,g),xg(e,i,o),hg((([[e,t,n,o,i,a,s,d],u,g,b])=>{const x=Bm(e),{align:w,behavior:F,offset:$}=x,C=o-1,E=fm(x,t,C);let S=hm(E,t.offsetTree,u)+a;"end"===w?(S+=g+Ng(t.sizeTree,E)[1]-n+b,E===C&&(S+=s)):"center"===w?S+=(g+Ng(t.sizeTree,E)[1]-n+b)/2:S-=i,$&&(S+=$);const D=r=>{v(),r?(d("retrying to scroll to",{location:e},Tg.DEBUG),ig(m,e)):(ig(h,!0),d("list did not change, scroll successful",{},Tg.DEBUG))};if(v(),"smooth"===F){let e=!1;y=og(r,(r=>{e=e||r})),f=dg(c,(()=>{D(e)}))}else f=dg(fg(r,function(e){return r=>{const t=setTimeout((()=>{r(!1)}),e);return e=>{e&&(r(!0),clearTimeout(t))}}}(150)),D);return p=setTimeout((()=>{v()}),1200),ig(l,!0),d("scrolling from index to",{behavior:F,index:E,top:S},Tg.DEBUG),{behavior:F,top:S}}))),d),{scrollTargetReached:h,scrollToIndex:m,topListHeight:b}}),ng(Cm,Rg,zg),{singleton:!0});function Am(e,r){0==e?r():requestAnimationFrame((()=>{Am(e-1,r)}))}function zm(e,r){const t=r-1;return"number"==typeof e?e:"LAST"===e.index?t:e.index}const Im=Eg((([{defaultItemSize:e,listRefresh:r,sizes:t},{scrollTop:n},{scrollTargetReached:o,scrollToIndex:i},{didMount:a}])=>{const s=wg(!0),l=wg(0),d=wg(!0);return lg(fg(a,xg(l),mg((([e,r])=>!!r)),bg(!1)),s),lg(fg(a,xg(l),mg((([e,r])=>!!r)),bg(!1)),d),og(fg(Dg(r,a),xg(s,t,e,d),mg((([[,e],r,{sizeTree:t},n,o])=>e&&(!Wg(t)||Qu(n))&&!r&&!o)),xg(l)),(([,e])=>{dg(o,(()=>{ig(d,!0)})),Am(4,(()=>{dg(n,(()=>{ig(s,!0)})),ig(i,e)}))})),{initialItemFinalLocationReached:d,initialTopMostItemIndex:l,scrolledToInitialItem:s}}),ng(Cm,Rg,Tm,Dm),{singleton:!0});function Om(e,r){return Math.abs(e-r)<1.01}const Mm="up",Hm="down",Lm={atBottom:!1,notAtBottomBecause:"NOT_SHOWING_LAST_ITEM",state:{offsetBottom:0,scrollHeight:0,scrollTop:0,viewportHeight:0}},Rm=Eg((([{footerHeight:e,headerHeight:r,scrollBy:t,scrollContainerState:n,scrollTop:o,viewportHeight:i}])=>{const a=wg(!1),s=wg(!0),l=$g(),d=$g(),c=wg(4),u=wg(0),g=Fg(fg(Bg(fg(kg(o),yg(1),bg(!0)),fg(kg(o),yg(1),bg(!1),cg(100))),gg()),!1),m=Fg(fg(Bg(fg(t,bg(!0)),fg(t,bg(!1),cg(200))),gg()),!1);lg(fg(Dg(kg(o),kg(u)),hg((([e,r])=>e<=r)),gg()),s),lg(fg(s,vg(50)),d);const h=Cg(fg(Dg(n,kg(i),kg(r),kg(e),kg(c)),pg(((e,[{scrollHeight:r,scrollTop:t},n,o,i,a])=>{const s={scrollHeight:r,scrollTop:t,viewportHeight:n};if(t+n-r>-a){let r,n;return t>e.state.scrollTop?(r="SCROLLED_DOWN",n=e.state.scrollTop-t):(r="SIZE_DECREASED",n=e.state.scrollTop-t||e.scrollTopDelta),{atBottom:!0,atBottomBecause:r,scrollTopDelta:n,state:s}}let l;return l=s.scrollHeight>e.state.scrollHeight?"SIZE_INCREASED":n<e.state.viewportHeight?"VIEWPORT_HEIGHT_DECREASING":t<e.state.scrollTop?"SCROLLING_UPWARDS":"NOT_FULLY_SCROLLED_TO_LAST_ITEM_BOTTOM",{atBottom:!1,notAtBottomBecause:l,state:s}}),Lm),gg(((e,r)=>e&&e.atBottom===r.atBottom)))),b=Fg(fg(n,pg(((e,{scrollHeight:r,scrollTop:t,viewportHeight:n})=>{if(Om(e.scrollHeight,r))return{changed:!1,jump:0,scrollHeight:r,scrollTop:t};{const o=r-(t+n)<1;return e.scrollTop!==t&&o?{changed:!0,jump:e.scrollTop-t,scrollHeight:r,scrollTop:t}:{changed:!0,jump:0,scrollHeight:r,scrollTop:t}}}),{changed:!1,jump:0,scrollHeight:0,scrollTop:0}),mg((e=>e.changed)),hg((e=>e.jump))),0);lg(fg(h,hg((e=>e.atBottom))),a),lg(fg(a,vg(50)),l);const f=wg(Hm);lg(fg(n,hg((({scrollTop:e})=>e)),gg(),pg(((e,r)=>sg(m)?{direction:e.direction,prevScrollTop:r}:{direction:r<e.prevScrollTop?Mm:Hm,prevScrollTop:r}),{direction:Hm,prevScrollTop:0}),hg((e=>e.direction))),f),lg(fg(n,vg(50),bg("none")),f);const p=wg(0);return lg(fg(g,mg((e=>!e)),bg(0)),p),lg(fg(o,vg(100),xg(g),mg((([e,r])=>!!r)),pg((([e,r],[t])=>[r,t]),[0,0]),hg((([e,r])=>r-e))),p),{atBottomState:h,atBottomStateChange:l,atBottomThreshold:c,atTopStateChange:d,atTopThreshold:u,isAtBottom:a,isAtTop:s,isScrolling:g,lastJumpDueToItemResize:b,scrollDirection:f,scrollVelocity:p}}),ng(Rg)),jm="top",_m="bottom",Wm="none";function Pm(e,r,t){return"number"==typeof e?t===Mm&&r===jm||t===Hm&&r===_m?e:0:t===Mm?r===jm?e.main:e.reverse:r===_m?e.main:e.reverse}function Nm(e,r){var t;return"number"==typeof e?e:null!=(t=e[r])?t:0}const Ym=Eg((([{deviation:e,fixedHeaderHeight:r,headerHeight:t,scrollTop:n,viewportHeight:o}])=>{const i=$g(),a=wg(0),s=wg(0),l=wg(0);return{increaseViewportBy:s,listBoundary:i,overscan:l,topListHeight:a,visibleRange:Fg(fg(Dg(kg(n),kg(o),kg(t),kg(i,am),kg(l),kg(a),kg(r),kg(e),kg(s)),hg((([e,r,t,[n,o],i,a,s,l,d])=>{const c=e-l,u=a+s,g=Math.max(t-c,0);let m=Wm;const h=Nm(d,jm),b=Nm(d,_m);return n-=l,o+=t+s,(n+=t+s)>e+u-h&&(m=Mm),(o-=l)<e-g+r+b&&(m=Hm),m!==Wm?[Math.max(c-t-Pm(i,jm,m)-h,0),c-g-s+r+Pm(i,_m,m)+b]:null})),mg((e=>null!=e)),gg(am)),[0,0])}}),ng(Rg),{singleton:!0});const Vm={bottom:0,firstItemIndex:0,items:[],offsetBottom:0,offsetTop:0,top:0,topItems:[],topListHeight:0,totalCount:0};function Um(e,r,t,n,o,i){const{lastIndex:a,lastOffset:s,lastSize:l}=o;let d=0,c=0;if(e.length>0){d=e[0].offset;const r=e[e.length-1];c=r.offset+r.size}const u=t-a,g=d,m=s+u*l+(u-1)*n-c;return{bottom:c,firstItemIndex:i,items:Gm(e,o,i),offsetBottom:m,offsetTop:d,top:g,topItems:Gm(r,o,i),topListHeight:r.reduce(((e,r)=>r.size+e),0),totalCount:t}}function Zm(e,r,t,n,o,i){let a=0;if(t.groupIndices.length>0)for(const r of t.groupIndices){if(r-a>=e)break;a++}const s=e+a,l=zm(r,s);return Um(Array.from({length:s}).map(((e,r)=>({data:i[r+l],index:r+l,offset:0,size:0}))),[],s,o,t,n)}function Gm(e,r,t){if(0===e.length)return[];if(!um(r))return e.map((e=>({...e,index:e.index+t,originalIndex:e.index})));const n=e[0].index,o=e[e.length-1].index,i=[],a=Ug(r.groupOffsetTree,n,o);let s,l=0;for(const n of e){let e;(!s||s.end<n.index)&&(s=a.shift(),l=r.groupIndices.indexOf(s.start)),e=n.index===s.start?{index:l,type:"group"}:{groupIndex:l,index:n.index-(l+1)+t},i.push({...e,data:n.data,offset:n.offset,originalIndex:n.index,size:n.size})}return i}const qm=Eg((([{data:e,firstItemIndex:r,gap:t,sizes:n,totalCount:o},i,{listBoundary:a,topListHeight:s,visibleRange:l},{initialTopMostItemIndex:d,scrolledToInitialItem:c},{topListHeight:u},g,{didMount:m},{recalcInProgress:h}])=>{const b=wg([]),f=wg(0),p=$g();lg(i.topItemsIndexes,b);const y=Fg(fg(Dg(m,h,kg(l,am),kg(o),kg(n),kg(d),c,kg(b),kg(r),kg(t),e),mg((([e,r,,t,,,,,,,n])=>{const o=n&&n.length!==t;return e&&!r&&!o})),hg((([,,[e,r],t,n,o,i,a,s,l,d])=>{const c=n,{offsetTree:u,sizeTree:g}=c,m=sg(f);if(0===t)return{...Vm,totalCount:t};if(0===e&&0===r)return 0===m?{...Vm,totalCount:t}:Zm(m,o,n,s,l,d||[]);if(Wg(g))return m>0?null:Um(function(e,r,t){if(um(r)){const n=bm(e,r);return[{index:Ng(r.groupOffsetTree,n)[0],offset:0,size:0},{data:null==t?void 0:t[0],index:n,offset:0,size:0}]}return[{data:null==t?void 0:t[0],index:e,offset:0,size:0}]}(zm(o,t),c,d),[],t,l,c,s);const h=[];if(a.length>0){const e=a[0],r=a[a.length-1];let t=0;for(const n of Ug(g,e,r)){const o=n.value,i=Math.max(n.start,e),a=Math.min(n.end,r);for(let e=i;e<=a;e++)h.push({data:null==d?void 0:d[e],index:e,offset:t,size:o}),t+=o}}if(!i)return Um([],h,t,l,c,s);const b=a.length>0?a[a.length-1]+1:0,p=pm(u,e,r,b);if(0===p.length)return null;const y=t-1;return Um(rg([],(t=>{for(const n of p){const o=n.value;let i=o.offset,a=n.start;const s=o.size;if(o.offset<e){a+=Math.floor((e-o.offset+l)/(s+l));const r=a-n.start;i+=r*s+r*l}a<b&&(i+=(b-a)*s,a=b);const c=Math.min(n.end,y);for(let e=a;e<=c&&!(i>=r);e++)t.push({data:null==d?void 0:d[e],index:e,offset:i,size:s}),i+=s+l}})),h,t,l,c,s)})),mg((e=>null!==e)),gg()),Vm);lg(fg(e,mg(Qu),hg((e=>null==e?void 0:e.length))),o),lg(fg(y,hg((e=>e.topListHeight))),u),lg(u,s),lg(fg(y,hg((e=>[e.top,e.bottom]))),a),lg(fg(y,hg((e=>e.items))),p);const v=Cg(fg(y,mg((({items:e})=>e.length>0)),xg(o,e),mg((([{items:e},r])=>e[e.length-1].originalIndex===r-1)),hg((([,e,r])=>[e-1,r])),gg(am),hg((([e])=>e)))),x=Cg(fg(y,vg(200),mg((({items:e,topItems:r})=>e.length>0&&e[0].originalIndex===r.length)),hg((({items:e})=>e[0].index)),gg())),w=Cg(fg(y,mg((({items:e})=>e.length>0)),hg((({items:e})=>{let r=0,t=e.length-1;for(;"group"===e[r].type&&r<t;)r++;for(;"group"===e[t].type&&t>r;)t--;return{endIndex:e[t].index,startIndex:e[r].index}})),gg(im)));return{endReached:v,initialItemCount:f,itemsRendered:p,listState:y,rangeChanged:w,startReached:x,topItemsIndexes:b,...g}}),ng(Cm,Sm,Ym,Im,Tm,Rm,Dm,sm),{singleton:!0}),Xm=Eg((([{fixedFooterHeight:e,fixedHeaderHeight:r,footerHeight:t,headerHeight:n},{listState:o}])=>{const i=$g(),a=Fg(fg(Dg(t,e,n,r,o),hg((([e,r,t,n,o])=>e+r+t+n+o.offsetBottom+o.bottom))),0);return lg(kg(a),i),{totalListHeight:a,totalListHeightChanged:i}}),ng(Rg,qm),{singleton:!0}),Km=Eg((([{viewportHeight:e},{totalListHeight:r}])=>{const t=wg(!1);return{alignToBottom:t,paddingTopAddition:Fg(fg(Dg(t,e,r),mg((([e])=>e)),hg((([,e,r])=>Math.max(0,e-r))),vg(0),gg()),0)}}),ng(Rg,Xm),{singleton:!0});function Jm(e){return!!e&&("smooth"===e?"smooth":"auto")}const Qm=Eg((([{listRefresh:e,totalCount:r},{atBottomState:t,isAtBottom:n},{scrollToIndex:o},{scrolledToInitialItem:i},{didMount:a,propsReady:s},{log:l},{scrollingInProgress:d}])=>{const c=wg(!1),u=$g();let g=null;function m(e){ig(o,{align:"end",behavior:e,index:"LAST"})}function h(e){const r=dg(t,(r=>{e&&!r.atBottom&&"SIZE_INCREASED"===r.notAtBottomBecause&&!g&&(sg(l)("scrolling to bottom due to increased size",{},Tg.DEBUG),m("auto"))}));setTimeout(r,100)}return og(fg(Dg(fg(kg(r),yg(1)),a),xg(kg(c),n,i,d),hg((([[e,r],t,n,o,i])=>{let a=r&&o,s="auto";return a&&(s=((e,r)=>"function"==typeof e?Jm(e(r)):r&&Jm(e))(t,n||i),a=a&&!!s),{followOutputBehavior:s,shouldFollow:a,totalCount:e}})),mg((({shouldFollow:e})=>e))),(({followOutputBehavior:r,totalCount:t})=>{g&&(g(),g=null),g=dg(e,(()=>{sg(l)("following output to ",{totalCount:t},Tg.DEBUG),m(r),g=null}))})),og(fg(Dg(kg(c),r,s),mg((([e,,r])=>e&&r)),pg((({value:e},[,r])=>({refreshed:e===r,value:r})),{refreshed:!1,value:0}),mg((({refreshed:e})=>e)),xg(c,r)),(([,e])=>{sg(i)&&h(!1!==e)})),og(u,(()=>{h(!1!==sg(c))})),og(Dg(kg(c),t),(([e,r])=>{e&&!r.atBottom&&"VIEWPORT_HEIGHT_DECREASING"===r.notAtBottomBecause&&m("auto")})),{autoscrollToBottom:u,followOutput:c}}),ng(Cm,Rm,Tm,Im,Dm,zg,Rg)),eh=Eg((([{data:e,firstItemIndex:r,gap:t,sizes:n},{initialTopMostItemIndex:o},{initialItemCount:i,listState:a},{didMount:s}])=>(lg(fg(s,xg(i),mg((([,e])=>0!==e)),xg(o,n,r,t,e),hg((([[,e],r,t,n,o,i=[]])=>Zm(e,r,t,n,o,i)))),a),{})),ng(Cm,Im,qm,Dm),{singleton:!0}),rh=Eg((([{didMount:e},{scrollTo:r},{listState:t}])=>{const n=wg(0);return og(fg(e,xg(n),mg((([,e])=>0!==e)),hg((([,e])=>({top:e})))),(e=>{dg(fg(t,yg(1),mg((e=>e.items.length>1))),(()=>{requestAnimationFrame((()=>{ig(r,e)}))}))})),{initialScrollTop:n}}),ng(Dm,Rg,qm),{singleton:!0}),th=({itemBottom:e,itemTop:r,locationParams:{align:t,behavior:n,...o},viewportBottom:i,viewportTop:a})=>r<a?{...o,align:null!=t?t:"start",behavior:n}:e>i?{...o,align:null!=t?t:"end",behavior:n}:null,nh=Eg((([{gap:e,sizes:r,totalCount:t},{fixedFooterHeight:n,fixedHeaderHeight:o,headerHeight:i,scrollingInProgress:a,scrollTop:s,viewportHeight:l},{scrollToIndex:d}])=>{const c=$g();return lg(fg(c,xg(r,l,t,i,o,n,s),xg(e),hg((([[e,r,t,n,o,i,s,l],d])=>{const{align:c,behavior:u,calculateViewLocation:g=th,done:m,...h}=e,b=fm(e,r,n-1),f=hm(b,r.offsetTree,d)+o+i,p=g({itemBottom:f+Ng(r.sizeTree,b)[1],itemTop:f,locationParams:{align:c,behavior:u,...h},viewportBottom:l+t-s,viewportTop:l+i});return p?m&&dg(fg(a,mg((e=>!e)),yg(sg(a)?1:2)),m):m&&m(),p})),mg((e=>null!==e))),d),{scrollIntoView:c}}),ng(Cm,Rg,Tm,qm,zg),{singleton:!0}),oh=Eg((([{scrollVelocity:e}])=>{const r=wg(!1),t=$g(),n=wg(!1);return lg(fg(e,xg(n,r,t),mg((([e,r])=>!!r)),hg((([e,r,t,n])=>{const{enter:o,exit:i}=r;if(t){if(i(e,n))return!1}else if(o(e,n))return!0;return t})),gg()),r),og(fg(Dg(r,e,t),xg(n)),(([[e,r,t],n])=>{e&&n&&n.change&&n.change(r,t)})),{isSeeking:r,scrollSeekConfiguration:n,scrollSeekRangeChanged:t,scrollVelocity:e}}),ng(Rm),{singleton:!0}),ih=Eg((([{scrollContainerState:e,scrollTo:r}])=>{const t=$g(),n=$g(),o=$g(),i=wg(!1),a=wg(void 0);return lg(fg(Dg(t,n),hg((([{scrollHeight:e,scrollTop:r,viewportHeight:t},{offsetTop:n}])=>({scrollHeight:e,scrollTop:Math.max(0,r-n),viewportHeight:t})))),e),lg(fg(r,xg(n),hg((([e,{offsetTop:r}])=>({...e,top:e.top+r})))),o),{customScrollParent:a,useWindowScroll:i,windowScrollContainerState:t,windowScrollTo:o,windowViewportRect:n}}),ng(Rg)),ah=Eg((([{sizeRanges:e,sizes:r},{headerHeight:t,scrollTop:n},{initialTopMostItemIndex:o},{didMount:i},{useWindowScroll:a,windowScrollContainerState:s,windowViewportRect:l}])=>{const d=$g(),c=wg(void 0),u=wg(null),g=wg(null);return lg(s,u),lg(l,g),og(fg(d,xg(r,n,a,u,g,t)),(([e,r,t,n,o,i,a])=>{const s=function(e){return Gg(e).map((({k:e,v:r},t,n)=>{const o=n[t+1];return{endIndex:o?o.k-1:1/0,size:r,startIndex:e}}))}(r.sizeTree);n&&null!==o&&null!==i&&(t=o.scrollTop-i.offsetTop),e({ranges:s,scrollTop:t-=a})})),lg(fg(c,mg(Qu),hg(sh)),o),lg(fg(i,xg(c),mg((([,e])=>void 0!==e)),gg(),hg((([,e])=>e.ranges))),e),{getState:d,restoreStateFrom:c}}),ng(Cm,Rg,Im,Dm,ih));function sh(e){return{align:"start",index:0,offset:e.scrollTop}}const lh=Eg((([{topItemsIndexes:e}])=>{const r=wg(0);return lg(fg(r,mg((e=>e>=0)),hg((e=>Array.from({length:e}).map(((e,r)=>r))))),e),{topItemCount:r}}),ng(qm));function dh(e){let r,t=!1;return()=>(t||(t=!0,r=e()),r)}const ch=dh((()=>/iP(ad|od|hone)/i.test(navigator.userAgent)&&/WebKit/i.test(navigator.userAgent))),uh=Eg((([{deviation:e,scrollBy:r,scrollingInProgress:t,scrollTop:n},{isAtBottom:o,isScrolling:i,lastJumpDueToItemResize:a,scrollDirection:s},{listState:l},{beforeUnshiftWith:d,gap:c,shiftWithOffset:u,sizes:g},{log:m},{recalcInProgress:h}])=>{const b=Cg(fg(l,xg(a),pg((([,e,r,t],[{bottom:n,items:o,offsetBottom:i,totalCount:a},s])=>{const l=n+i;let d=0;return r===a&&e.length>0&&o.length>0&&(0===o[0].originalIndex&&0===e[0].originalIndex||(d=l-t,0!==d&&(d+=s))),[d,o,a,l]}),[0,[],0,0]),mg((([e])=>0!==e)),xg(n,s,t,o,m,h),mg((([,e,r,t,,,n])=>!n&&!t&&0!==e&&r===Mm)),hg((([[e],,,,,r])=>(r("Upward scrolling compensation",{amount:e},Tg.DEBUG),e)))));function f(t){t>0?(ig(r,{behavior:"auto",top:-t}),ig(e,0)):(ig(e,0),ig(r,{behavior:"auto",top:-t}))}return og(fg(b,xg(e,i)),(([r,t,n])=>{n&&ch()?ig(e,t-r):f(-r)})),og(fg(Dg(Fg(i,!1),e,h),mg((([e,r,t])=>!e&&!t&&0!==r)),hg((([e,r])=>r)),vg(1)),f),lg(fg(u,hg((e=>({top:-e})))),r),og(fg(d,xg(g,c),hg((([e,{groupIndices:r,lastSize:t,sizeTree:n},o])=>{function i(e){return e*(t+o)}if(0===r.length)return i(e);{let t=0;const o=Pg(n,0);let a=0,s=0;for(;a<e;){a++,t+=o;let n=r.length===s+1?1/0:r[s+1]-r[s]-1;a+n>e&&(t-=o,n=e-a+1),a+=n,t+=i(n),s++}return t}}))),(t=>{ig(e,t),requestAnimationFrame((()=>{ig(r,{top:t}),requestAnimationFrame((()=>{ig(e,0),ig(h,!1)}))}))})),{deviation:e}}),ng(Rg,Rm,qm,Cm,zg,sm)),gh=Eg((([e,r,t,n,o,i,a,s,l,d])=>({...e,...r,...t,...n,...o,...i,...a,...s,...l,...d})),ng(Ym,eh,Dm,oh,Xm,rh,Km,ih,nh,zg)),mh=Eg((([{data:e,defaultItemSize:r,firstItemIndex:t,fixedItemSize:n,gap:o,groupIndices:i,itemSize:a,sizeRanges:s,sizes:l,statefulTotalCount:d,totalCount:c,trackItemSizes:u},{initialItemFinalLocationReached:g,initialTopMostItemIndex:m,scrolledToInitialItem:h},b,f,p,{listState:y,topItemsIndexes:v,...x},{scrollToIndex:w},F,{topItemCount:$},{groupCounts:C},E])=>(lg(x.rangeChanged,E.scrollSeekRangeChanged),lg(fg(E.windowViewportRect,hg((e=>e.visibleHeight))),b.viewportHeight),{data:e,defaultItemHeight:r,firstItemIndex:t,fixedItemHeight:n,gap:o,groupCounts:C,initialItemFinalLocationReached:g,initialTopMostItemIndex:m,scrolledToInitialItem:h,sizeRanges:s,topItemCount:$,topItemsIndexes:v,totalCount:c,...p,groupIndices:i,itemSize:a,listState:y,scrollToIndex:w,statefulTotalCount:d,trackItemSizes:u,...x,...E,...b,sizes:l,...f})),ng(Cm,Im,Rg,ah,Qm,qm,Tm,uh,lh,Sm,gh));function hh(e,r){const t={},n={};let o=0;const i=e.length;for(;o<i;)n[e[o]]=1,o+=1;for(const e in r)Object.hasOwn(n,e)||(t[e]=r[e]);return t}const bh=typeof document<"u"?o.useLayoutEffect:o.useEffect;function fh(e,r,n){const i=Object.keys(r.required||{}),a=Object.keys(r.optional||{}),s=Object.keys(r.methods||{}),l=Object.keys(r.events||{}),d=o.createContext({});function c(e,t){e.propsReady&&ig(e.propsReady,!1);for(const n of i){ig(e[r.required[n]],t[n])}for(const n of a)if(n in t){ig(e[r.optional[n]],t[n])}e.propsReady&&ig(e.propsReady,!0)}function u(e){return l.reduce(((t,n)=>(t[n]=function(e){let r,t;const n=()=>null==r?void 0:r();return function(o,i){switch(o){case 1:return i?t===i?void 0:(n(),t=i,r=og(e,i),r):(n(),eg);case 2:return n(),void(t=null)}}}(e[r.events[n]]),t)),{})}const g=o.forwardRef(((g,m)=>{const{children:h,...b}=g,[f]=o.useState((()=>rg(function(e){const r=new Map,t=({constructor:e,dependencies:n,id:o,singleton:i})=>{if(i&&r.has(o))return r.get(o);const a=e(n.map((e=>t(e))));return i&&r.set(o,a),a};return t(e)}(e),(e=>{c(e,b)})))),[p]=o.useState(Ku(u,f));bh((()=>{for(const e of l)e in b&&og(p[e],b[e]);return()=>{Object.values(p).map(ag)}}),[b,p,f]),bh((()=>{c(f,b)})),o.useImperativeHandle(m,Gu(function(e){return s.reduce(((t,n)=>(t[n]=t=>{ig(e[r.methods[n]],t)},t)),{})}(f)));const y=n;return t(d.Provider,{value:f,children:n?t(y,{...hh([...i,...a,...l],b),children:h}):h})}));return{Component:g,useEmitter:(e,r)=>{const t=o.useContext(d)[e];bh((()=>og(t,r)),[r,t])},useEmitterValue:o.version.startsWith("18")?e=>{const r=o.useContext(d)[e],t=o.useCallback((e=>og(r,e)),[r]);return o.useSyncExternalStore(t,(()=>sg(r)),(()=>sg(r)))}:e=>{const r=o.useContext(d)[e],[t,n]=o.useState(Ku(sg,r));return bh((()=>og(r,(e=>{e!==t&&n(Gu(e))}))),[r,t]),t},usePublisher:e=>o.useCallback(Ju(ig,o.useContext(d)[e]),[e])}}const ph=o.createContext(void 0),yh=o.createContext(void 0),vh=typeof document<"u"?o.useLayoutEffect:o.useEffect;function xh(e,r,t,n=eg,i,a){const s=o.useRef(null),l=o.useRef(null),d=o.useRef(null),c=o.useCallback((t=>{const n=t.target,o=n===window||n===document,i=a?o?window.pageXOffset||document.documentElement.scrollLeft:n.scrollLeft:o?window.pageYOffset||document.documentElement.scrollTop:n.scrollTop,s=a?o?document.documentElement.scrollWidth:n.scrollWidth:o?document.documentElement.scrollHeight:n.scrollHeight,c=a?o?window.innerWidth:n.offsetWidth:o?window.innerHeight:n.offsetHeight,u=()=>{e({scrollHeight:s,scrollTop:Math.max(i,0),viewportHeight:c})};t.suppressFlushSync?u():j.flushSync(u),null!==l.current&&(i===l.current||i<=0||i===s-c)&&(l.current=null,r(!0),d.current&&(clearTimeout(d.current),d.current=null))}),[e,r]);return o.useEffect((()=>{const e=i||s.current;return n(i||s.current),c({suppressFlushSync:!0,target:e}),e.addEventListener("scroll",c,{passive:!0}),()=>{n(null),e.removeEventListener("scroll",c)}}),[s,c,t,n,i]),{scrollByCallback:function(e){a&&(e={behavior:e.behavior,left:e.top}),s.current.scrollBy(e)},scrollerRef:s,scrollToCallback:function(t){const n=s.current;if(!n||(a?"offsetWidth"in n&&0===n.offsetWidth:"offsetHeight"in n&&0===n.offsetHeight))return;const o="smooth"===t.behavior;let i,c,u;n===window?(c=Math.max(cm(document.documentElement,a?"width":"height"),a?document.documentElement.scrollWidth:document.documentElement.scrollHeight),i=a?window.innerWidth:window.innerHeight,u=a?document.documentElement.scrollLeft:document.documentElement.scrollTop):(c=n[a?"scrollWidth":"scrollHeight"],i=cm(n,a?"width":"height"),u=n[a?"scrollLeft":"scrollTop"]);const g=c-i;if(t.top=Math.ceil(Math.max(Math.min(g,t.top),0)),Om(i,c)||t.top===u)return e({scrollHeight:c,scrollTop:u,viewportHeight:i}),void(o&&r(!0));o?(l.current=t.top,d.current&&clearTimeout(d.current),d.current=setTimeout((()=>{d.current=null,l.current=null,r(!0)}),1e3)):l.current=null,a&&(t={behavior:t.behavior,left:t.top}),n.scrollTo(t)}}}const wh="-webkit-sticky",Fh="sticky",$h=dh((()=>{if(typeof document>"u")return Fh;const e=document.createElement("div");return e.style.position=wh,e.style.position===wh?wh:Fh}));function Ch(e){return e}const Eh=Eg((()=>{const e=wg((e=>`Item ${e}`)),r=wg(null),t=wg((e=>`Group ${e}`)),n=wg({}),o=wg(Ch),i=wg("div"),a=wg(eg),s=(e,r=null)=>Fg(fg(n,hg((r=>r[e])),gg()),r);return{components:n,computeItemKey:o,context:r,EmptyPlaceholder:s("EmptyPlaceholder"),FooterComponent:s("Footer"),GroupComponent:s("Group","div"),groupContent:t,HeaderComponent:s("Header"),HeaderFooterTag:i,ItemComponent:s("Item","div"),itemContent:e,ListComponent:s("List","div"),ScrollerComponent:s("Scroller","div"),scrollerRef:a,ScrollSeekPlaceholder:s("ScrollSeekPlaceholder"),TopItemListComponent:s("TopItemList")}})),Sh=Eg((([e,r])=>({...e,...r})),ng(mh,Eh)),Dh=({height:e})=>t("div",{style:{height:e}}),kh={overflowAnchor:"none",position:$h(),zIndex:1},Bh={overflowAnchor:"none"},Th={...Bh,display:"inline-block",height:"100%"},Ah=o.memo((function({showTopList:e=!1}){const r=Gh("listState"),n=qh("sizeRanges"),i=Gh("useWindowScroll"),a=Gh("customScrollParent"),s=qh("windowScrollContainerState"),l=qh("scrollContainerState"),d=a||i?s:l,c=Gh("itemContent"),u=Gh("context"),g=Gh("groupContent"),m=Gh("trackItemSizes"),h=Gh("itemSize"),b=Gh("log"),f=qh("gap"),p=Gh("horizontalDirection"),{callbackRef:v}=Mg(n,h,m,e?eg:d,b,f,a,p,Gh("skipAnimationFrameInResizeObserver")),[x,w]=o.useState(0);Zh("deviation",(e=>{x!==e&&w(e)}));const F=Gh("EmptyPlaceholder"),$=Gh("ScrollSeekPlaceholder")||Dh,C=Gh("ListComponent"),E=Gh("ItemComponent"),S=Gh("GroupComponent"),D=Gh("computeItemKey"),k=Gh("isSeeking"),B=Gh("groupIndices").length>0,T=Gh("alignToBottom"),A=Gh("initialItemFinalLocationReached"),z=e?{}:{boxSizing:"border-box",...p?{display:"inline-block",height:"100%",marginLeft:0!==x?x:T?"auto":0,paddingLeft:r.offsetTop,paddingRight:r.offsetBottom,whiteSpace:"nowrap"}:{marginTop:0!==x?x:T?"auto":0,paddingBottom:r.offsetBottom,paddingTop:r.offsetTop},...A?{}:{visibility:"hidden"}};return!e&&0===r.totalCount&&F?t(F,{...Hh(F,u)}):t(C,{...Hh(C,u),"data-testid":e?"virtuoso-top-item-list":"virtuoso-item-list",ref:v,style:z,children:(e?r.topItems:r.items).map((e=>{const t=e.originalIndex,n=D(t+r.firstItemIndex,e.data,u);return k?y($,{...Hh($,u),height:e.size,index:e.index,key:n,type:e.type||"item",..."group"===e.type?{}:{groupIndex:e.groupIndex}}):"group"===e.type?y(S,{...Hh(S,u),"data-index":t,"data-item-index":e.index,"data-known-size":e.size,key:n,style:kh},g(e.index,u)):y(E,{...Hh(E,u),...Lh(E,e.data),"data-index":t,"data-item-group-index":e.groupIndex,"data-item-index":e.index,"data-known-size":e.size,key:n,style:p?Th:Bh},B?c(e.index,e.groupIndex,e.data,u):c(e.index,e.data,u))}))})})),zh={height:"100%",outline:"none",overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},Ih={outline:"none",overflowX:"auto",position:"relative"},Oh=e=>({height:"100%",position:"absolute",top:0,width:"100%",...e?{display:"flex",flexDirection:"column"}:{}}),Mh={position:$h(),top:0,width:"100%",zIndex:1};function Hh(e,r){if("string"!=typeof e)return{context:r}}function Lh(e,r){return{item:"string"==typeof e?void 0:r}}const Rh=o.memo((function(){const e=Gh("HeaderComponent"),r=qh("headerHeight"),n=Gh("HeaderFooterTag"),i=Ig(o.useMemo((()=>e=>{r(cm(e,"height"))}),[r]),!0,Gh("skipAnimationFrameInResizeObserver")),a=Gh("context");return e?t(n,{ref:i,children:t(e,{...Hh(e,a)})}):null})),jh=o.memo((function(){const e=Gh("FooterComponent"),r=qh("footerHeight"),n=Gh("HeaderFooterTag"),i=Ig(o.useMemo((()=>e=>{r(cm(e,"height"))}),[r]),!0,Gh("skipAnimationFrameInResizeObserver")),a=Gh("context");return e?t(n,{ref:i,children:t(e,{...Hh(e,a)})}):null}));function _h({useEmitter:e,useEmitterValue:r,usePublisher:n}){return o.memo((function({children:o,style:i,...a}){const s=n("scrollContainerState"),l=r("ScrollerComponent"),d=n("smoothScrollTargetReached"),c=r("scrollerRef"),u=r("context"),g=r("horizontalDirection")||!1,{scrollByCallback:m,scrollerRef:h,scrollToCallback:b}=xh(s,d,l,c,void 0,g);return e("scrollTo",b),e("scrollBy",m),t(l,{"data-testid":"virtuoso-scroller","data-virtuoso-scroller":!0,ref:h,style:{...g?Ih:zh,...i},tabIndex:0,...a,...Hh(l,u),children:o})}))}function Wh({useEmitter:e,useEmitterValue:r,usePublisher:n}){return o.memo((function({children:o,style:i,...a}){const s=n("windowScrollContainerState"),l=r("ScrollerComponent"),d=n("smoothScrollTargetReached"),c=r("totalListHeight"),u=r("deviation"),g=r("customScrollParent"),m=r("context"),{scrollByCallback:h,scrollerRef:b,scrollToCallback:f}=xh(s,d,l,eg,g);return vh((()=>(b.current=g||window,()=>{b.current=null})),[b,g]),e("windowScrollTo",f),e("scrollBy",h),t(l,{"data-virtuoso-scroller":!0,style:{position:"relative",...i,...0!==c?{height:c+u}:{}},...a,...Hh(l,m),children:o})}))}const Ph=({children:e})=>{const r=o.useContext(ph),n=qh("viewportHeight"),i=qh("fixedItemHeight"),a=Gh("alignToBottom"),s=Gh("horizontalDirection"),l=Ig(o.useMemo((()=>Xu(n,(e=>cm(e,s?"width":"height")))),[n,s]),!0,Gh("skipAnimationFrameInResizeObserver"));return o.useEffect((()=>{r&&(n(r.viewportHeight),i(r.itemHeight))}),[r,n,i]),t("div",{"data-viewport-type":"element",ref:l,style:Oh(a),children:e})},Nh=({children:e})=>{const r=o.useContext(ph),n=qh("windowViewportRect"),i=qh("fixedItemHeight"),a=Gh("customScrollParent"),s=Lg(n,a,Gh("skipAnimationFrameInResizeObserver")),l=Gh("alignToBottom");return o.useEffect((()=>{r&&(i(r.itemHeight),n({offsetTop:0,visibleHeight:r.viewportHeight,visibleWidth:100}))}),[r,n,i]),t("div",{"data-viewport-type":"window",ref:s,style:Oh(l),children:e})},Yh=({children:e})=>{const r=Gh("TopItemListComponent")||"div",n=Gh("headerHeight"),o={...Mh,marginTop:`${n}px`},i=Gh("context");return t(r,{style:o,...Hh(r,i),children:e})},Vh=o.memo((function(r){const n=Gh("useWindowScroll"),o=Gh("topItemsIndexes").length>0,i=Gh("customScrollParent"),a=Gh("context"),s=i||n?Kh:Xh,l=i||n?Nh:Ph;return e(s,{...r,...Hh(s,a),children:[o&&t(Yh,{children:t(Ah,{showTopList:!0})}),e(l,{children:[t(Rh,{}),t(Ah,{}),t(jh,{})]})]})})),{Component:Uh,useEmitter:Zh,useEmitterValue:Gh,usePublisher:qh}=fh(Sh,{events:{atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",endReached:"endReached",groupIndices:"groupIndices",isScrolling:"isScrolling",itemsRendered:"itemsRendered",rangeChanged:"rangeChanged",startReached:"startReached",totalListHeightChanged:"totalListHeightChanged"},methods:{autoscrollToBottom:"autoscrollToBottom",getState:"getState",scrollBy:"scrollBy",scrollIntoView:"scrollIntoView",scrollTo:"scrollTo",scrollToIndex:"scrollToIndex"},optional:{alignToBottom:"alignToBottom",atBottomThreshold:"atBottomThreshold",atTopThreshold:"atTopThreshold",components:"components",computeItemKey:"computeItemKey",context:"context",customScrollParent:"customScrollParent",data:"data",defaultItemHeight:"defaultItemHeight",firstItemIndex:"firstItemIndex",fixedItemHeight:"fixedItemHeight",followOutput:"followOutput",groupContent:"groupContent",groupCounts:"groupCounts",headerFooterTag:"HeaderFooterTag",horizontalDirection:"horizontalDirection",increaseViewportBy:"increaseViewportBy",initialItemCount:"initialItemCount",initialScrollTop:"initialScrollTop",initialTopMostItemIndex:"initialTopMostItemIndex",itemContent:"itemContent",itemSize:"itemSize",logLevel:"logLevel",overscan:"overscan",restoreStateFrom:"restoreStateFrom",scrollerRef:"scrollerRef",scrollSeekConfiguration:"scrollSeekConfiguration",skipAnimationFrameInResizeObserver:"skipAnimationFrameInResizeObserver",topItemCount:"topItemCount",totalCount:"totalCount",useWindowScroll:"useWindowScroll"},required:{}},Vh),Xh=_h({useEmitter:Zh,useEmitterValue:Gh,usePublisher:qh}),Kh=Wh({useEmitter:Zh,useEmitterValue:Gh,usePublisher:qh}),Jh=Uh,Qh={bottom:0,itemHeight:0,items:[],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},eb={bottom:0,itemHeight:0,items:[{index:0}],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},{ceil:rb,floor:tb,max:nb,min:ob,round:ib}=Math;function ab(e,r,t){return Array.from({length:r-e+1}).map(((r,n)=>({data:null===t?null:t[n+e],index:n+e})))}function sb(e,r){return e&&e.width===r.width&&e.height===r.height}function lb(e,r){return e&&e.column===r.column&&e.row===r.row}const db=Eg((([{increaseViewportBy:e,listBoundary:r,overscan:t,visibleRange:n},{footerHeight:o,headerHeight:i,scrollBy:a,scrollContainerState:s,scrollTo:l,scrollTop:d,smoothScrollTargetReached:c,viewportHeight:u},g,m,{didMount:h,propsReady:b},{customScrollParent:f,useWindowScroll:p,windowScrollContainerState:y,windowScrollTo:v,windowViewportRect:x},w])=>{const F=wg(0),$=wg(0),C=wg(Qh),E=wg({height:0,width:0}),S=wg({height:0,width:0}),D=$g(),k=$g(),B=wg(0),T=wg(null),A=wg({column:0,row:0}),z=$g(),I=$g(),O=wg(!1),M=wg(0),H=wg(!0),L=wg(!1),R=wg(!1);og(fg(h,xg(M),mg((([e,r])=>!!r))),(()=>{ig(H,!1)})),og(fg(Dg(h,H,S,E,M,L),mg((([e,r,t,n,,o])=>e&&!r&&0!==t.height&&0!==n.height&&!o))),(([,,,,e])=>{ig(L,!0),Am(1,(()=>{ig(D,e)})),dg(fg(d),(()=>{ig(r,[0,0]),ig(H,!0)}))})),lg(fg(I,mg((e=>null!=e&&e.scrollTop>0)),bg(0)),$),og(fg(h,xg(I),mg((([,e])=>null!=e))),(([,e])=>{e&&(ig(E,e.viewport),ig(S,e.item),ig(A,e.gap),e.scrollTop>0&&(ig(O,!0),dg(fg(d,yg(1)),(e=>{ig(O,!1)})),ig(l,{top:e.scrollTop})))})),lg(fg(E,hg((({height:e})=>e))),u),lg(fg(Dg(kg(E,sb),kg(S,sb),kg(A,((e,r)=>e&&e.column===r.column&&e.row===r.row)),kg(d)),hg((([e,r,t,n])=>({gap:t,item:r,scrollTop:n,viewport:e})))),z),lg(fg(Dg(kg(F),n,kg(A,lb),kg(S,sb),kg(E,sb),kg(T),kg($),kg(O),kg(H),kg(M)),mg((([,,,,,,,e])=>!e)),hg((([e,[r,t],n,o,i,a,s,,l,d])=>{const{column:c,row:u}=n,{height:g,width:m}=o,{width:h}=i;if(0===s&&(0===e||0===h))return Qh;if(0===m){const r=zm(d,e);return function(e){return{...eb,items:e}}(ab(r,r+Math.max(s-1,0),a))}const b=cb(h,m,c);let f,p;l?0===r&&0===t&&s>0?(f=0,p=s-1):(f=b*tb((r+u)/(g+u)),p=b*rb((t+u)/(g+u))-1,p=ob(e-1,nb(p,b-1)),f=ob(p,nb(0,f))):(f=0,p=-1);const y=ab(f,p,a),{bottom:v,top:x}=ub(i,n,o,y),w=rb(e/b);return{bottom:v,itemHeight:g,items:y,itemWidth:m,offsetBottom:w*g+(w-1)*u-v,offsetTop:x,top:x}}))),C),lg(fg(T,mg((e=>null!==e)),hg((e=>e.length))),F),lg(fg(Dg(E,S,C,A),mg((([e,r,{items:t}])=>t.length>0&&0!==r.height&&0!==e.height)),hg((([e,r,{items:t},n])=>{const{bottom:o,top:i}=ub(e,n,r,t);return[i,o]})),gg(am)),r);const j=wg(!1);lg(fg(d,xg(j),hg((([e,r])=>r||0!==e))),j);const _=Cg(fg(Dg(C,F),mg((([{items:e}])=>e.length>0)),xg(j),mg((([[e,r],t])=>{const n=e.items[e.items.length-1].index===r-1;return(t||e.bottom>0&&e.itemHeight>0&&0===e.offsetBottom&&e.items.length===r)&&n})),hg((([[,e]])=>e-1)),gg())),W=Cg(fg(kg(C),mg((({items:e})=>e.length>0&&0===e[0].index)),bg(0),gg())),P=Cg(fg(kg(C),xg(O),mg((([{items:e},r])=>e.length>0&&!r)),hg((([{items:e}])=>({endIndex:e[e.length-1].index,startIndex:e[0].index}))),gg(im),vg(0)));lg(P,m.scrollSeekRangeChanged),lg(fg(D,xg(E,S,F,A),hg((([e,r,t,n,o])=>{const i=Bm(e),{align:a,behavior:s,offset:l}=i;let d=i.index;"LAST"===d&&(d=n-1),d=nb(0,d,ob(n-1,d));let c=gb(r,o,t,d);return"end"===a?c=ib(c-r.height+t.height):"center"===a&&(c=ib(c-r.height/2+t.height/2)),l&&(c+=l),{behavior:s,top:c}}))),l);const N=Fg(fg(C,hg((e=>e.offsetBottom+e.bottom))),0);return lg(fg(x,hg((e=>({height:e.visibleHeight,width:e.visibleWidth})))),E),{customScrollParent:f,data:T,deviation:B,footerHeight:o,gap:A,headerHeight:i,increaseViewportBy:e,initialItemCount:$,itemDimensions:S,overscan:t,restoreStateFrom:I,scrollBy:a,scrollContainerState:s,scrollHeight:k,scrollTo:l,scrollToIndex:D,scrollTop:d,smoothScrollTargetReached:c,totalCount:F,useWindowScroll:p,viewportDimensions:E,windowScrollContainerState:y,windowScrollTo:v,windowViewportRect:x,...m,gridState:C,horizontalDirection:R,initialTopMostItemIndex:M,totalListHeight:N,...g,endReached:_,propsReady:b,rangeChanged:P,startReached:W,stateChanged:z,stateRestoreInProgress:O,...w}}),ng(Ym,Rg,Rm,oh,Dm,ih,zg));function cb(e,r,t){return nb(1,tb((e+t)/(tb(r)+t)))}function ub(e,r,t,n){const{height:o}=t;if(void 0===o||0===n.length)return{bottom:0,top:0};const i=gb(e,r,t,n[0].index);return{bottom:gb(e,r,t,n[n.length-1].index)+o,top:i}}function gb(e,r,t,n){const o=cb(e.width,t.width,r.column),i=tb(n/o),a=i*t.height+nb(0,i-1)*r.row;return a>0?a+r.row:a}const mb=Eg((()=>{const e=wg((e=>`Item ${e}`)),r=wg({}),t=wg(null),n=wg("virtuoso-grid-item"),o=wg("virtuoso-grid-list"),i=wg(Ch),a=wg("div"),s=wg(eg),l=(e,t=null)=>Fg(fg(r,hg((r=>r[e])),gg()),t),d=wg(!1),c=wg(!1);return lg(kg(c),d),{components:r,computeItemKey:i,context:t,FooterComponent:l("Footer"),HeaderComponent:l("Header"),headerFooterTag:a,itemClassName:n,ItemComponent:l("Item","div"),itemContent:e,listClassName:o,ListComponent:l("List","div"),readyStateChanged:d,reportReadyState:c,ScrollerComponent:l("Scroller","div"),scrollerRef:s,ScrollSeekPlaceholder:l("ScrollSeekPlaceholder","div")}})),hb=Eg((([e,r])=>({...e,...r})),ng(db,mb)),bb=o.memo((function(){const e=$b("gridState"),r=$b("listClassName"),n=$b("itemClassName"),i=$b("itemContent"),a=$b("computeItemKey"),s=$b("isSeeking"),l=Cb("scrollHeight"),d=$b("ItemComponent"),c=$b("ListComponent"),u=$b("ScrollSeekPlaceholder"),g=$b("context"),m=Cb("itemDimensions"),h=Cb("gap"),b=$b("log"),f=$b("stateRestoreInProgress"),p=Cb("reportReadyState"),v=Ig(o.useMemo((()=>e=>{const r=e.parentElement.parentElement.scrollHeight;l(r);const t=e.firstChild;if(t){const{height:e,width:r}=t.getBoundingClientRect();m({height:e,width:r})}h({column:Db("column-gap",getComputedStyle(e).columnGap,b),row:Db("row-gap",getComputedStyle(e).rowGap,b)})}),[l,m,h,b]),!0,!1);return vh((()=>{e.itemHeight>0&&e.itemWidth>0&&p(!0)}),[e]),f?null:t(c,{className:r,ref:v,...Hh(c,g),"data-testid":"virtuoso-item-list",style:{paddingBottom:e.offsetBottom,paddingTop:e.offsetTop},children:e.items.map((r=>{const o=a(r.index,r.data,g);return s?t(u,{...Hh(u,g),height:e.itemHeight,index:r.index,width:e.itemWidth},o):y(d,{...Hh(d,g),className:n,"data-index":r.index,key:o},i(r.index,r.data,g))}))})})),fb=o.memo((function(){const e=$b("HeaderComponent"),r=Cb("headerHeight"),n=$b("headerFooterTag"),i=Ig(o.useMemo((()=>e=>{r(cm(e,"height"))}),[r]),!0,!1),a=$b("context");return e?t(n,{ref:i,children:t(e,{...Hh(e,a)})}):null})),pb=o.memo((function(){const e=$b("FooterComponent"),r=Cb("footerHeight"),n=$b("headerFooterTag"),i=Ig(o.useMemo((()=>e=>{r(cm(e,"height"))}),[r]),!0,!1),a=$b("context");return e?t(n,{ref:i,children:t(e,{...Hh(e,a)})}):null})),yb=({children:e})=>{const r=o.useContext(yh),n=Cb("itemDimensions"),i=Cb("viewportDimensions"),a=Ig(o.useMemo((()=>e=>{i(e.getBoundingClientRect())}),[i]),!0,!1);return o.useEffect((()=>{r&&(i({height:r.viewportHeight,width:r.viewportWidth}),n({height:r.itemHeight,width:r.itemWidth}))}),[r,i,n]),t("div",{ref:a,style:Oh(!1),children:e})},vb=({children:e})=>{const r=o.useContext(yh),n=Cb("windowViewportRect"),i=Cb("itemDimensions"),a=$b("customScrollParent"),s=Lg(n,a,!1);return o.useEffect((()=>{r&&(i({height:r.itemHeight,width:r.itemWidth}),n({offsetTop:0,visibleHeight:r.viewportHeight,visibleWidth:r.viewportWidth}))}),[r,n,i]),t("div",{ref:s,style:Oh(!1),children:e})},xb=o.memo((function({...r}){const n=$b("useWindowScroll"),o=$b("customScrollParent"),i=o||n?Sb:Eb,a=o||n?vb:yb,s=$b("context");return t(i,{...r,...Hh(i,s),children:e(a,{children:[t(fb,{}),t(bb,{}),t(pb,{})]})})})),{Component:wb,useEmitter:Fb,useEmitterValue:$b,usePublisher:Cb}=fh(hb,{events:{atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",endReached:"endReached",isScrolling:"isScrolling",rangeChanged:"rangeChanged",readyStateChanged:"readyStateChanged",startReached:"startReached",stateChanged:"stateChanged"},methods:{scrollBy:"scrollBy",scrollTo:"scrollTo",scrollToIndex:"scrollToIndex"},optional:{components:"components",computeItemKey:"computeItemKey",context:"context",customScrollParent:"customScrollParent",data:"data",headerFooterTag:"headerFooterTag",increaseViewportBy:"increaseViewportBy",initialItemCount:"initialItemCount",initialTopMostItemIndex:"initialTopMostItemIndex",itemClassName:"itemClassName",itemContent:"itemContent",listClassName:"listClassName",logLevel:"logLevel",overscan:"overscan",restoreStateFrom:"restoreStateFrom",scrollerRef:"scrollerRef",scrollSeekConfiguration:"scrollSeekConfiguration",totalCount:"totalCount",useWindowScroll:"useWindowScroll"}},xb),Eb=_h({useEmitter:Fb,useEmitterValue:$b,usePublisher:Cb}),Sb=Wh({useEmitter:Fb,useEmitterValue:$b,usePublisher:Cb});function Db(e,r,t){return"normal"!==r&&!(null!=r&&r.endsWith("px"))&&t(`${e} was not resolved to pixel value correctly`,r,Tg.WARN),"normal"===r?0:parseInt(null!=r?r:"0",10)}const kb=o.createContext({focusedIndex:-1,setFocusedIndex:()=>{}}),Bb=({children:e})=>{const[r,n]=s(-1);return t(kb.Provider,{value:{focusedIndex:r,setFocusedIndex:n},children:e})},Tb=w.div`
    border: ${Ni["width-010"]} ${Ni.solid} ${_i.border};
    border-radius: ${Vi.sm};
    background: ${_i.bg};

    --x-spacing: 0px;
    --available-width: calc(100vw - var(--x-spacing) * 2);

    ${Zi.MaxWidth.sm} {
        --x-spacing: ${Ui["sm-margin"]}px;
        max-height: 15rem;
    }

    ${Zi.MaxWidth.xs} {
        --x-spacing: ${Ui["xs-margin"]}px;
    }

    ${Zi.MaxWidth.xxs} {
        --x-spacing: ${Ui["xxs-margin"]}px;
    }

    max-width: var(--available-width);

    ${e=>e.$customWidth?`width: ${e.$customWidth};`:e.$width?`width: ${e.$width}px; min-width: min(23rem, var(--available-width));`:"min-width: min(23rem, var(--available-width));"}

    max-height: min(27rem, var(--available-height, infinity * 1px));
    overflow: hidden;
    overflow-y: auto;
    ${e=>"small"===e.$variant?Wi["body-md-regular"]:Wi["body-baseline-regular"]}

    &::-webkit-scrollbar {
        width: 14px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: ${_i["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: ${Vi.full};
        background-clip: padding-box;
    }
`,Ab=w.div`
    background: transparent;
    padding: ${Yi["spacing-8"]};
`,zb=w.li`
    display: flex;
    align-items: flex-start;
    gap: ${Yi["spacing-8"]};
    padding: ${Yi["spacing-12"]} ${Yi["spacing-8"]};
    cursor: pointer;
    border: none;
    border-radius: ${Vi.none};
    outline: none;

    ${e=>e.$disabled?F`
                cursor: not-allowed;
            `:e.$active&&e.$selected?F`
                background: ${_i["bg-hover"]};
            `:e.$active?F`
                background: ${_i["bg-hover-subtle"]};
            `:void 0}
`,Ib=w(te)`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
    color: ${_i["icon-selected"]};
`,Ob=w.div`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
`,Mb=w(re)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${_i["icon-selected"]};
`,Hb=w(ee)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${_i["icon-primary-subtlest"]};
`,Lb=w(ne)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${_i["icon-disabled-subtle"]};
`,Rb=w.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`,jb=w(Is)`
    cursor: pointer;
    overflow: hidden;
    color: ${_i["text-primary"]};
    font-size: inherit;
`,_b=w(jb)`
    ${Wi["body-baseline-semibold"]}
`,Wb=w(jb)`
    ${Wi["body-md-semibold"]}
    padding: ${Yi["spacing-8"]} ${Yi["spacing-8"]};
`,Pb=w.div`
    width: 100%;
    display: flex;
    padding: ${Yi["spacing-12"]} ${Yi["spacing-16"]};
    align-items: center;
`,Nb=w(U)`
    margin-right: ${Yi["spacing-4"]};
    color: ${_i["icon-error"]};
    height: 1em;
    width: 1em;
`,Yb=w(Ba)`
    margin-right: ${Yi["spacing-8"]};
    color: ${_i.icon};
`,Vb=w.div`
    ${La()}
    color: ${_i["text-subtle"]};
    padding: 0 ${Yi["spacing-16"]} ${Yi["spacing-12"]}
        ${Yi["spacing-16"]};
`,Ub=w.div`
    background: ${_i["bg-strong"]};
    border-radius: ${Vi.sm};
    display: flex;
    align-items: center;

    ${e=>"small"===e.$variant?Wi["body-md-regular"]:Wi["body-baseline-regular"]}
`,Zb=w.label`
    flex: 1;
    display: flex;
    align-items: center;
    gap: ${Yi["spacing-8"]};
    padding: ${e=>"small"===e.$variant?F`
                  ${Yi["spacing-8"]} ${Yi["spacing-16"]}
              `:F`10px ${Yi["spacing-8"]}`};
`,Gb=w(zs)`
    flex: 1;
`,qb=w(oe)`
    color: ${_i.icon};
    flex-shrink: 0;
    height: 1em;
    width: 1em;
`,Xb=w(Cs)`
    flex-shrink: 0;
    align-self: stretch;
    box-sizing: content-box;
    padding: ${Yi["spacing-8"]};
    margin-left: -${Yi["spacing-8"]};
    color: ${_i.icon};
    cursor: pointer;
    font-size: inherit;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`,Kb=v(((r,n)=>{var{value:o,variant:i,onClear:a}=r,s=ae(r,["value","variant","onClear"]);return e(Ub,{$variant:i,children:[e(Zb,{$variant:i,children:[t(qb,{"aria-hidden":!0}),t(Gb,Object.assign({ref:n,value:o,$variant:i},s))]}),o&&t(Xb,{"aria-label":"Clear search",focusOutline:"browser",onClick:a,children:t(Q,{"aria-hidden":!0})})]})})),Jb=v(((e,r)=>{const{context:n}=e,o=ae(e,["context"]);return t("div",Object.assign({ref:r},null==n?void 0:n.listProps,o))})),Qb=v(((e,r)=>{const{context:n,item:o}=e,i=ae(e,["context","item"]);return t("div",Object.assign({ref:r},null==n?void 0:n.listItemProps,i))})),ef=v((({listItems:n,multiSelect:o,maxSelectable:i,selectedItems:l,disableItemFocus:d,itemsLoadState:c="success",itemTruncationType:u="end",itemMaxLines:m=2,labelDisplayType:b="inline",variant:p="default",listboxId:y,ariaLabel:v,matchElementWidth:w=!1,width:F,topScrollItem:$,onSelectItem:C,onSelectAll:E,onDismiss:S,onRetry:D,valueExtractor:k,listExtractor:B,renderListItem:T,renderCustomCallToAction:A,enableSearch:z,hideNoResultsDisplay:I,noResultsDescription:O,customLabels:M,searchPlaceholder:H,searchFunction:L,onSearch:R},j)=>{const{noResultsLabel:_="No results found.",selectAllButtonLabel:W="Select all",clearAllButtonLabel:P="Clear all"}=M||{},N=(null==M?void 0:M.searchPlaceholder)||H||"Search",Y=(null==M?void 0:M.noResultsDescription)||O,{focusedIndex:V,setFocusedIndex:U}=f(kb),{elementWidth:Z,setFloatingRef:G,getFloatingProps:q,styles:X}=f(la),[K,J]=s(""),[Q,ee]=s(null!=n?n:[]),re=zr(c),te=(()=>{const[e,r]=s(!1);return g((()=>{r(!0)}),[]),e})(),ne=a(null),oe=a([]),ie=a(null),ae=a(null),se=!!i&&!!l&&(null==l?void 0:l.length)===i,le=e=>{const r=B?B(e):null==e?void 0:e.toString();return"object"==typeof r?{title:r.title,secondaryLabel:r.secondaryLabel}:{title:null!=r?r:""}},de=h((e=>!!Vu(l,(r=>Zu(r,e)))),[l]),ce=Ar((()=>null==L?void 0:L(K))),ue=Ar((()=>null==n?void 0:n.filter((e=>{const{title:r,secondaryLabel:t}=le(e),n=K.trim().toLowerCase();return r.toLowerCase().includes(n)||t&&t.toLowerCase().includes(n)})))),ge=h((e=>{var r,t;if(d)return;if(ie.current)return U(-1),void setTimeout((()=>{var e;return null===(e=ie.current)||void 0===e?void 0:e.focus()}),0);const n=null!=Q?Q:[];if(0===n.length)return;if(void 0!==(null==e?void 0:e.index)){const t=Math.max(0,Math.min(e.index,n.length-1));return null===(r=ae.current)||void 0===r||r.scrollToIndex({index:t,align:"center"}),U(t),void setTimeout((()=>{var e;return null===(e=oe.current[t])||void 0===e?void 0:e.focus()}),0)}const o=(null==e?void 0:e.preferSelected)?n.findIndex((e=>de(e))):-1,i=-1!==o?o:V>=0&&V<n.length?V:0;null===(t=ae.current)||void 0===t||t.scrollToIndex({index:i,align:"center"}),U(i),setTimeout((()=>{var e;return null===(e=oe.current[i])||void 0===e?void 0:e.focus()}),0)}),[de,d,Q,V,U]),me=(e,r)=>{se&&!de(e)||(U(r),null==C||C(e,(e=>k?k(e):e)(e)))},he=e=>{const r=e.target.value;J(r),null==R||R()},be=()=>{var e;J(""),null===(e=ie.current)||void 0===e||e.focus(),null==R||R()},fe=()=>null==D?void 0:D();((e,r,t="window",n)=>{const o=a();g((()=>{o.current=r}),[r]),g((()=>{let r;switch(t){case"window":r=window;break;case"document":r=document;break;default:r=t}if(!r||!r.addEventListener)return;const i=e=>{var r;return null===(r=o.current)||void 0===r?void 0:r.call(o,e)};return r.addEventListener(e,i,n),()=>{null==r||r.removeEventListener(e,i,n)}}),[e,t])})("keydown",(e=>{var r,t;switch(e.code){case"ArrowDown":if(e.preventDefault(),V<Q.length-1){const e=V+1;null===(r=oe.current[e])||void 0===r||r.focus(),U(e)}break;case"ArrowUp":if(e.preventDefault(),V>0){const e=V-1;null===(t=oe.current[e])||void 0===t||t.focus(),U(e)}else 0===V&&ie.current&&(ie.current.focus(),U(-1));break;case"Space":case"Enter":document.activeElement===oe.current[V]&&(e.preventDefault(),Q[V]&&me(Q[V],V))}})),x(j,(()=>({refocus:ge})),[ge]),g((()=>{var e;if(!$)return void(null===(e=ae.current)||void 0===e||e.scrollTo({top:0}));const r=setTimeout((()=>{if(!n)return;const e=n.indexOf($);ae.current&&-1!==e&&(ae.current.scrollToIndex({index:e}),U(e))}),0);return()=>clearTimeout(r)}),[oe,n,U,$]),g((()=>{d||te&&re&&"success"===c&&ie.current&&(U(-1),ie.current.focus())}),[te,re,c,U,d]),g((()=>{var e;ee(null!==(e=""===K?n:L?ce():ue())&&void 0!==e?e:[])}),[ce,ue,n,L,K]),g((()=>{var e,r,t;if(te)return;if(d||!n)return;const o=n.findIndex((e=>de(e)));ie.current?(U(-1),setTimeout((()=>{var e;return null===(e=ie.current)||void 0===e?void 0:e.focus()}),200)):V>0?(null===(e=ae.current)||void 0===e||e.scrollToIndex({index:V,align:"center"}),setTimeout((()=>{var e;return null===(e=oe.current[V])||void 0===e?void 0:e.focus()}),200)):-1!==o?(null===(r=ae.current)||void 0===r||r.scrollToIndex({index:o,align:"center"}),U(o),setTimeout((()=>{var e;return null===(e=oe.current[o])||void 0===e?void 0:e.focus()}),200)):(null===(t=ae.current)||void 0===t||t.scrollToIndex({index:0}),U(0),setTimeout((()=>{var e;return null===(e=oe.current[0])||void 0===e?void 0:e.focus()}),200))}),[de,d,V,n,te,U]);const pe=e=>o?t(se&&!e?Lb:e?Mb:Hb,{"aria-hidden":!0}):e?t(Ib,{"aria-hidden":!0}):t(Ob,{}),ye=(e,r)=>{const{title:n,secondaryLabel:o}=le(e);return t(ml,{displayType:b,label:n,maxLines:m,selected:r,disabled:!r&&se,sublabel:o,truncationType:u,variant:p})},ve=(n,o)=>{if(!D||"success"===c){const i=de(n),a=o===V;return t(zb,{"aria-selected":i,"aria-disabled":!i&&se,"aria-posinset":o+1,"aria-setsize":null==Q?void 0:Q.length,"data-testid":"list-item",onClick:()=>me(n,o),onMouseEnter:()=>(e=>U(e))(o),ref:e=>{oe.current[o]=e},role:"option",tabIndex:a?0:-1,$active:a,$selected:i,$disabled:!i&&se,children:T?T(n,{selected:i}):e(r,{children:[pe(i),ye(n,i)]})},((e,r)=>`item_${r}__${k?k(e):e}`)(n,o))}},xe=()=>{if((z||L)&&"success"===c)return t(Kb,{ref:ie,onChange:he,value:K,placeholder:N,"data-testid":"search-input","aria-label":"Enter text to search",onClear:be,variant:p})},we=()=>{if(l&&o&&Q.length>0&&!K&&"success"===c)return t(Rb,{children:t(Wb,{onClick:E,type:"button",$variant:p,children:i||0!==l.length?P:W})})},Fe=()=>{if(!I&&(K||!z)&&0===Q.length&&"success"===c)return e(r,{children:[e(Pb,{"data-testid":"list-no-results",children:[t(Nb,{"data-testid":"no-result-icon"}),_]}),Y&&t(Vb,{"data-testid":"no-result-desc",children:Y})]})},$e=()=>{if(D&&"loading"===c)return e(Pb,{"data-testid":"list-loading",children:[t(Yb,{}),"Loading..."]})},Ce=()=>{if(D&&"fail"===c)return e(Pb,{"data-testid":"list-fail",children:[t(Nb,{"data-testid":"load-error-icon"}),"Failed to load. ",t(_b,{onClick:fe,type:"button",$variant:p,children:"Try again."})]})},Ee=()=>{var e;const r="test"===process.env.NODE_ENV;return t(Jh,Object.assign({ref:ae,style:{height:"100%"},data:Q,customScrollParent:null!==(e=ne.current)&&void 0!==e?e:void 0,itemContent:(e,r)=>ve(r,e),components:{List:Jb,Item:Qb},context:{listProps:{id:y,role:"listbox","aria-multiselectable":o},listItemProps:{role:"none"}}},r?{initialItemCount:Q.length}:{}),r?Q.length:void 0)};return e(Tb,Object.assign({"data-testid":"dropdown-container",ref:Ae(ne,G),style:X},q(),{$width:w?Z:void 0,$customWidth:F,$variant:p,children:[t(Ir,{role:"status",children:v}),e(Ab,{"data-testid":"dropdown-list",role:"group","aria-label":v,children:[xe(),we(),Fe(),$e(),Ce(),Ee()]}),(()=>{if(A)return t("div",{"data-testid":"custom-cta",children:A(S,Q)})})()]}))})),rf=w(Is)`
    display: flex;
    align-items: center;
    gap: ${Yi["spacing-8"]};
    width: 100%;
    padding: ${e=>e.$readOnly?`0 ${Yi["spacing-16"]}`:Yi["spacing-16"]};

    ${e=>"small"===e.$variant?F`
                  ${Wi["body-md-regular"]}
                  height: calc(2.5rem - 2px); // exclude top and bottom borders
              `:F`
                  ${Wi["body-baseline-regular"]}
                  height: calc(3rem - 2px);
              `}

    &:disabled {
        cursor: not-allowed;
    }

    &:focus-visible {
        outline: 2px solid ${_i["focus-ring"]};
        outline-offset: -2px;
    }
`,tf=w.div`
    display: flex;
    align-items: center;
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${Pi["duration-250"]} ${Pi["ease-default"]};

    svg {
        color: ${_i.icon};
        height: 1em;
        width: 1em;
    }
`;v(((r,n)=>{var{children:o,disabled:i,expanded:a,listboxId:s,popupRole:l,readOnly:d,variant:c}=r,u=ae(r,["children","disabled","expanded","listboxId","popupRole","readOnly","variant"]);return e(rf,Object.assign({ref:n,type:"button",role:"combobox","aria-expanded":a,"aria-haspopup":l,"aria-controls":a?s:void 0,"data-testid":"selector","aria-disabled":i,"aria-readonly":d,$variant:c,$readOnly:d},u,{children:[o,!d&&t(tf,{$expanded:a,$variant:c,children:t(N,{"aria-hidden":!0})})]}))})),w.li`
    display: ${e=>e.$visible?"flex":"none"};
`,w.div`
    flex: 1;
    display: flex;
    align-items: flex-start;
    gap: ${Yi["spacing-8"]};
    padding: ${Yi["spacing-12"]} ${Yi["spacing-8"]};
    cursor: ${e=>e.$toggleable?"default":"pointer"};
    overflow: hidden; // required for label to truncate properly
    border-radius: ${Vi.none};
    outline: none;

    ${e=>e.$active&&F`
            background: ${_i["bg-hover"]};
        `}
`,w.div`
    height: 1px;
    width: calc((1lh + ${Yi["spacing-8"]}) * ${e=>e.$level});
`,w.div`
    width: 1lh;
    height: 1lh;
    color: ${_i["icon-primary"]};
    cursor: pointer;

    svg {
        width: 1lh;
        height: 1lh;
        transition: transform ${Pi["duration-350"]}
            ${Pi["ease-standard"]};

        ${e=>{if(e.$expanded)return F`
                    transform: rotate(90deg);
                `}}
    }
`,w.div`
    width: 1lh;
    height: 1lh;
    margin-right: ${Yi["spacing-8"]};
`,w.div`
    flex-shrink: 0;
    height: 1lh;
    width: ${e=>e.$hasNestedSiblings?"1lh":Yi["spacing-16"]};

    display: flex;
    justify-content: center;
`,w(ie)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${_i["icon-selected"]};
`;const nf=w(As)`
    height: 3rem;
    gap: ${Yi["spacing-8"]};
    // space for clear icon
    padding-right: calc(1.25rem + ${Yi["spacing-20"]});
`,of=r=>{var{id:n,disabled:o=!1,error:i,value:l,format:d="12hr",readOnly:c,onChange:u,onFocus:m,onBlur:b,alignment:f="left",dropdownZIndex:y,startLimit:v,endLimit:x,initialScrollStartTime:w,initialScrollEndTime:F,interval:$=15,dropdownRootNode:C,"aria-labelledby":E,"aria-describedby":S,"aria-invalid":D}=r,k=ae(r,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur","alignment","dropdownZIndex","startLimit","endLimit","initialScrollStartTime","initialScrollEndTime","interval","dropdownRootNode","aria-labelledby","aria-describedby","aria-invalid"]);const B=Oe(),[T,A]=s(null),[z,I]=s(!1),[O,M]=s(""),[H,L]=s(""),[R,j]=s(""),[_,W]=s(""),[P,N]=s(""),Y=a(null),V=a(null),U=a(null),Z=`${B}-listbox`,G=`${B}-start-label`,q=`${B}-end-label`,X=`${B}-error-message`,K=p((()=>pa.generateTimings($,d,v,x)),[$,d,v,x]),J=p((()=>{if(""===_)return K;const e=pa.findClosestFlooredTime(_,K);return e?K.slice(K.indexOf(e)):[]}),[K,_]),Q=h((e=>pa.parseInput(e,d)),[d]),ee=p((()=>{var e;return null!==(e=Q(w))&&void 0!==e?e:""}),[w,Q]),re=p((()=>{var e;return null!==(e=Q(F))&&void 0!==e?e:""}),[F,Q]);g((()=>{var e,r;if(l){const t=null!==(e=Q(l.start))&&void 0!==e?e:"",n=null!==(r=Q(l.end))&&void 0!==r?r:"";L(t),j(n),W(t),N(n)}}),[l,Q]),g((()=>{if(i)return void I(!1);const e=Q(H),r=Q(R);if(void 0===e)M("Invalid start time");else if(void 0===r)M("Invalid end time");else{if(!(""!==e&&""!==r&&pa.to24Hour(r)<pa.to24Hour(e)))return M(""),void(document.activeElement!==V.current&&document.activeElement!==U.current||I(!0));M("End time must be after start time")}I(!1)}),[H,R,Q,i]);const te=()=>"start"===T?"Selecting for: Start time":"end"===T?"Selecting for: End time":void 0,ne=e=>Mr(E,"start"===e?G:q),oe=()=>Mr(S,!i&&O?X:void 0),ie=e=>{o||c||(T||z||null==m||m(),A(e),I(!0))},se=e=>{var r;o||c||(A(e),I(!0),null===(r=("start"===e?V:U).current)||void 0===r||r.select())};function le(e){var r;switch(e.code){case"Enter":"start"===T?de(H):"end"===T&&(z&&ce(R),null===(r=U.current)||void 0===r||r.blur());break;case"Tab":ue(H,R,{})}}const de=e=>{ue(e,R,{goToNextInput:!0})},ce=e=>{ue(H,e,{triggerOnBlur:!0})},ue=(e,r,{goToNextInput:t,triggerOnBlur:n})=>{var o,i,a;const s=null!==(o=Q(e))&&void 0!==o?o:_,l=null!==(i=Q(r))&&void 0!==i?i:P;L(s),j(l);s===_&&l===P||null==u||u({start:s,end:l}),t&&void 0!==Q(e)&&(A("end"),null===(a=U.current)||void 0===a||a.select()),n&&(A(null),I(!1),null==b||b()),W(s),N(l)},ge=e=>{e.stopPropagation(),L(""),j(""),W(""),N("");null==u||u({start:"",end:""}),A(null),I(!1)},me=e=>{var r,t;const n=e.relatedTarget,o=(null===(r=null==n?void 0:n.matches)||void 0===r?void 0:r.call(n,"[data-floating-ui-focusable]"))||(null===(t=null==n?void 0:n.matches)||void 0===t?void 0:t.call(n,"[data-floating-ui-focus-guard]")),i=Y.current&&Y.current.contains(n);T&&!z&&!i&&!o&&ue(H,R,{triggerOnBlur:!0})},he=()=>{if(!c&&!o&&((null==H?void 0:H.length)>0||(null==R?void 0:R.length)>0))return t(al,{onClick:ge,type:"button","aria-label":"Clear",children:t(il,{"aria-hidden":!0})})};return e(Ks,Object.assign({id:n},k,{children:[t(Bb,{children:t(da,{enabled:!c&&!o,isOpen:z,renderElement:()=>e(nf,{ref:Y,$disabled:o,$error:i||!!O,$readOnly:c,onBlur:me,role:"group",children:[t(Ir,{id:G,children:"Start time"}),t(Ir,{id:q,children:"End time"}),e(ba,{error:i||!!O,currentActive:null===T?"none":T,children:[t(Qs,{ref:V,onFocus:()=>ie("start"),placeholder:"start"===T?"hh:mm":"From",onChange:e=>L(e.target.value),value:H,readOnly:c,"data-testid":k["data-testid"]?`${k["data-testid"]}-timepicker-selector-start`:"timepicker-selector-start",onClick:()=>se("start"),onKeyDown:le,autoComplete:"off",type:"text",role:"combobox","aria-labelledby":ne("start"),"aria-describedby":oe(),"aria-expanded":z&&"start"===T,"aria-controls":Z,"aria-autocomplete":"list","aria-invalid":i||D||!!O,"aria-disabled":o,"aria-readonly":c}),t(Qs,{ref:U,onFocus:()=>ie("end"),placeholder:"end"===T?"hh:mm":"To",onChange:e=>j(e.target.value),value:R,readOnly:c,"data-testid":k["data-testid"]?`${k["data-testid"]}-timepicker-selector-end`:"timepicker-selector-end",onClick:()=>se("end"),onKeyDown:le,autoComplete:"off",type:"text",role:"combobox","aria-labelledby":ne("end"),"aria-describedby":oe(),"aria-expanded":z&&"end"===T,"aria-controls":Z,"aria-autocomplete":"list","aria-invalid":i||D||!!O||void 0,"aria-disabled":o||void 0,"aria-readonly":c||void 0})]}),he()]}),renderDropdown:()=>{if("start"===T){const e=Q(H)||ee;return t(ef,{listItems:K,onSelectItem:de,selectedItems:[H],topScrollItem:pa.findClosestFlooredTime(e,K),listboxId:Z,ariaLabel:te(),disableItemFocus:!0,matchElementWidth:!0})}{const e=Q(R)||re;return t(ef,{listItems:J,onSelectItem:ce,selectedItems:[R],topScrollItem:pa.findClosestFlooredTime(e,J),listboxId:Z,ariaLabel:te(),disableItemFocus:!0,matchElementWidth:!0})}},onClose:e=>{"outside-press"===e?(A(null),I(!1),null==b||b()):ue(H,R,{triggerOnBlur:!0})},onDismiss:()=>{var e;null===(e=("start"===T?V:U).current)||void 0===e||e.focus(),I(!1)},offset:8,alignment:f,fitAvailableHeight:!0,customZIndex:y,rootNode:C})}),!i&&O&&e(tl,{children:[t(rl,{"aria-hidden":!0}),t(nl,{id:X,tabIndex:0,"data-testid":n?`${n}-error-message`:"error-message",children:O})]})]}))},af=e=>{var{variant:r="dial"}=e,n=ae(e,["variant"]);return t("combobox"===r?of:el,Object.assign({},n))};export{af as TimeRangePicker};
//# sourceMappingURL=index.js.map
