import{jsx as e,jsxs as r,Fragment as t}from"react/jsx-runtime";import*as n from"react";import o,{version as i,useRef as a,useState as s,isValidElement as l,createRef as d,cloneElement as c,PureComponent as u,useEffect as g,useLayoutEffect as h,useCallback as m,createContext as f,useContext as b,useMemo as p,createElement as y,forwardRef as v,useImperativeHandle as x}from"react";import{TickCircleFillIcon as w}from"@lifesg/react-icons";import"@lifesg/react-icons/i-circle-fill";import $,{css as F,isStyledComponent as C,keyframes as E,ThemeContext as S,useTheme as D}from"styled-components";import{ExternalIcon as B}from"@lifesg/react-icons/external";import{CrossIcon as k}from"@lifesg/react-icons/cross";import{useFloatingTree as O,FloatingTree as T,useFloatingNodeId as z,FloatingNode as A,useFloating as I,useTransitionStatus as M,useDismiss as j,useInteractions as L,FloatingFocusManager as _,autoUpdate as R,offset as H,flip as P,shift as W,limitShift as N,size as V,useTransitionStyles as Y,useClick as U,FloatingPortal as q}from"@floating-ui/react";import G,{findDOMNode as Z}from"react-dom";import{ExclamationCircleFillIcon as K}from"@lifesg/react-icons/exclamation-circle-fill";import{ChevronDownIcon as X}from"@lifesg/react-icons/chevron-down";import{SquareIcon as Q}from"@lifesg/react-icons/square";import{SquareFillIcon as J}from"@lifesg/react-icons/square-fill";import{SquareTickFillIcon as ee}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as re}from"@lifesg/react-icons/tick";import{MagnifierIcon as te}from"@lifesg/react-icons/magnifier";import"@lifesg/react-icons/caret-right";import{MinusSquareFillIcon as ne}from"@lifesg/react-icons/minus-square-fill";function oe(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)r.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(t[n[o]]=e[n[o]])}return t}function ie(e,r,t,n){return new(t||(t=Promise))((function(o,i){function a(e){try{l(n.next(e))}catch(e){i(e)}}function s(e){try{l(n.throw(e))}catch(e){i(e)}}function l(e){var r;e.done?o(e.value):(r=e.value,r instanceof t?r:new t((function(e){e(r)}))).then(a,s)}l((n=n.apply(e,r||[])).next())}))}"function"==typeof SuppressedError&&SuppressedError;var ae="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function se(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var le={exports:{}};le.exports=function(){var e=1e3,r=6e4,t=36e5,n="millisecond",o="second",i="minute",a="hour",s="day",l="week",d="month",c="quarter",u="year",g="date",h="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,b={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var r=["th","st","nd","rd"],t=e%100;return"["+e+(r[(t-20)%10]||r[t]||r[0])+"]"}},p=function(e,r,t){var n=String(e);return!n||n.length>=r?e:""+Array(r+1-n.length).join(t)+e},y={s:p,z:function(e){var r=-e.utcOffset(),t=Math.abs(r),n=Math.floor(t/60),o=t%60;return(r<=0?"+":"-")+p(n,2,"0")+":"+p(o,2,"0")},m:function e(r,t){if(r.date()<t.date())return-e(t,r);var n=12*(t.year()-r.year())+(t.month()-r.month()),o=r.clone().add(n,d),i=t-o<0,a=r.clone().add(n+(i?-1:1),d);return+(-(n+(t-o)/(i?o-a:a-o))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:s,D:g,h:a,m:i,s:o,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",x={};x[v]=b;var w="$isDayjsObject",$=function(e){return e instanceof S||!(!e||!e[w])},F=function e(r,t,n){var o;if(!r)return v;if("string"==typeof r){var i=r.toLowerCase();x[i]&&(o=i),t&&(x[i]=t,o=i);var a=r.split("-");if(!o&&a.length>1)return e(a[0])}else{var s=r.name;x[s]=r,o=s}return!n&&o&&(v=o),o||!n&&v},C=function(e,r){if($(e))return e.clone();var t="object"==typeof r?r:{};return t.date=e,t.args=arguments,new S(t)},E=y;E.l=F,E.i=$,E.w=function(e,r){return C(e,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var S=function(){function b(e){this.$L=F(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var p=b.prototype;return p.parse=function(e){this.$d=function(e){var r=e.date,t=e.utc;if(null===r)return new Date(NaN);if(E.u(r))return new Date;if(r instanceof Date)return new Date(r);if("string"==typeof r&&!/Z$/i.test(r)){var n=r.match(m);if(n){var o=n[2]-1||0,i=(n[7]||"0").substring(0,3);return t?new Date(Date.UTC(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(r)}(e),this.init()},p.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},p.$utils=function(){return E},p.isValid=function(){return!(this.$d.toString()===h)},p.isSame=function(e,r){var t=C(e);return this.startOf(r)<=t&&t<=this.endOf(r)},p.isAfter=function(e,r){return C(e)<this.startOf(r)},p.isBefore=function(e,r){return this.endOf(r)<C(e)},p.$g=function(e,r,t){return E.u(e)?this[r]:this.set(t,e)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(e,r){var t=this,n=!!E.u(r)||r,c=E.p(e),h=function(e,r){var o=E.w(t.$u?Date.UTC(t.$y,r,e):new Date(t.$y,r,e),t);return n?o:o.endOf(s)},m=function(e,r){return E.w(t.toDate()[e].apply(t.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(r)),t)},f=this.$W,b=this.$M,p=this.$D,y="set"+(this.$u?"UTC":"");switch(c){case u:return n?h(1,0):h(31,11);case d:return n?h(1,b):h(0,b+1);case l:var v=this.$locale().weekStart||0,x=(f<v?f+7:f)-v;return h(n?p-x:p+(6-x),b);case s:case g:return m(y+"Hours",0);case a:return m(y+"Minutes",1);case i:return m(y+"Seconds",2);case o:return m(y+"Milliseconds",3);default:return this.clone()}},p.endOf=function(e){return this.startOf(e,!1)},p.$set=function(e,r){var t,l=E.p(e),c="set"+(this.$u?"UTC":""),h=(t={},t[s]=c+"Date",t[g]=c+"Date",t[d]=c+"Month",t[u]=c+"FullYear",t[a]=c+"Hours",t[i]=c+"Minutes",t[o]=c+"Seconds",t[n]=c+"Milliseconds",t)[l],m=l===s?this.$D+(r-this.$W):r;if(l===d||l===u){var f=this.clone().set(g,1);f.$d[h](m),f.init(),this.$d=f.set(g,Math.min(this.$D,f.daysInMonth())).$d}else h&&this.$d[h](m);return this.init(),this},p.set=function(e,r){return this.clone().$set(e,r)},p.get=function(e){return this[E.p(e)]()},p.add=function(n,c){var g,h=this;n=Number(n);var m=E.p(c),f=function(e){var r=C(h);return E.w(r.date(r.date()+Math.round(e*n)),h)};if(m===d)return this.set(d,this.$M+n);if(m===u)return this.set(u,this.$y+n);if(m===s)return f(1);if(m===l)return f(7);var b=(g={},g[i]=r,g[a]=t,g[o]=e,g)[m]||1,p=this.$d.getTime()+n*b;return E.w(p,this)},p.subtract=function(e,r){return this.add(-1*e,r)},p.format=function(e){var r=this,t=this.$locale();if(!this.isValid())return t.invalidDate||h;var n=e||"YYYY-MM-DDTHH:mm:ssZ",o=E.z(this),i=this.$H,a=this.$m,s=this.$M,l=t.weekdays,d=t.months,c=t.meridiem,u=function(e,t,o,i){return e&&(e[t]||e(r,n))||o[t].slice(0,i)},g=function(e){return E.s(i%12||12,e,"0")},m=c||function(e,r,t){var n=e<12?"AM":"PM";return t?n.toLowerCase():n};return n.replace(f,(function(e,n){return n||function(e){switch(e){case"YY":return String(r.$y).slice(-2);case"YYYY":return E.s(r.$y,4,"0");case"M":return s+1;case"MM":return E.s(s+1,2,"0");case"MMM":return u(t.monthsShort,s,d,3);case"MMMM":return u(d,s);case"D":return r.$D;case"DD":return E.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return u(t.weekdaysMin,r.$W,l,2);case"ddd":return u(t.weekdaysShort,r.$W,l,3);case"dddd":return l[r.$W];case"H":return String(i);case"HH":return E.s(i,2,"0");case"h":return g(1);case"hh":return g(2);case"a":return m(i,a,!0);case"A":return m(i,a,!1);case"m":return String(a);case"mm":return E.s(a,2,"0");case"s":return String(r.$s);case"ss":return E.s(r.$s,2,"0");case"SSS":return E.s(r.$ms,3,"0");case"Z":return o}return null}(e)||o.replace(":","")}))},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(n,g,h){var m,f=this,b=E.p(g),p=C(n),y=(p.utcOffset()-this.utcOffset())*r,v=this-p,x=function(){return E.m(f,p)};switch(b){case u:m=x()/12;break;case d:m=x();break;case c:m=x()/3;break;case l:m=(v-y)/6048e5;break;case s:m=(v-y)/864e5;break;case a:m=v/t;break;case i:m=v/r;break;case o:m=v/e;break;default:m=v}return h?m:E.a(m)},p.daysInMonth=function(){return this.endOf(d).$D},p.$locale=function(){return x[this.$L]},p.locale=function(e,r){if(!e)return this.$L;var t=this.clone(),n=F(e,r,!0);return n&&(t.$L=n),t},p.clone=function(){return E.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},b}(),D=S.prototype;return C.prototype=D,[["$ms",n],["$s",o],["$m",i],["$H",a],["$W",s],["$M",d],["$y",u],["$D",g]].forEach((function(e){D[e[1]]=function(r){return this.$g(r,e[0],e[1])}})),C.extend=function(e,r){return e.$i||(e(r,S,C),e.$i=!0),C},C.locale=F,C.isDayjs=$,C.unix=function(e){return C(1e3*e)},C.en=x[v],C.Ls=x,C.p={},C}();var de=se(le.exports),ce={exports:{}};ce.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,t=/\d\d/,n=/\d\d?/,o=/\d*[^-_:/,()\s\d]+/,i={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(r){this[e]=+r}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var r=e.match(/([+-]|\d\d)/g),t=60*r[1]+(+r[2]||0);return 0===t?0:"+"===r[0]?-t:t}(e)}],d=function(e){var r=i[e];return r&&(r.indexOf?r:r.s.concat(r.f))},c=function(e,r){var t,n=i.meridiem;if(n){for(var o=1;o<=24;o+=1)if(e.indexOf(n(o,0,r))>-1){t=o>12;break}}else t=e===(r?"pm":"PM");return t},u={A:[o,function(e){this.afternoon=c(e,!1)}],a:[o,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[t,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[t,s("day")],Do:[o,function(e){var r=i.ordinal,t=e.match(/\d+/);if(this.day=t[0],r)for(var n=1;n<=31;n+=1)r(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[t,s("month")],MMM:[o,function(e){var r=d("months"),t=(d("monthsShort")||r.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],MMMM:[o,function(e){var r=d("months").indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],Y:[/[+-]?\d+/,s("year")],YY:[t,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function g(t){var n,o;n=t,o=i&&i.formats;for(var a=(t=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(r,t,n){var i=n&&n.toUpperCase();return t||o[n]||e[n]||o[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,r,t){return r||t.slice(1)}))}))).match(r),s=a.length,l=0;l<s;l+=1){var d=a[l],c=u[d],g=c&&c[0],h=c&&c[1];a[l]=h?{regex:g,parser:h}:d.replace(/^\[|\]$/g,"")}return function(e){for(var r={},t=0,n=0;t<s;t+=1){var o=a[t];if("string"==typeof o)n+=o.length;else{var i=o.regex,l=o.parser,d=e.slice(n),c=i.exec(d)[0];l.call(r,c),e=e.replace(c,"")}}return function(e){var r=e.afternoon;if(void 0!==r){var t=e.hours;r?t<12&&(e.hours+=12):12===t&&(e.hours=0),delete e.afternoon}}(r),r}}return function(e,r,t){t.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var n=r.prototype,o=n.parse;n.parse=function(e){var r=e.date,n=e.utc,a=e.args;this.$u=n;var s=a[1];if("string"==typeof s){var l=!0===a[2],d=!0===a[3],c=l||d,u=a[2];d&&(u=a[2]),i=this.$locale(),!l&&u&&(i=t.Ls[u]),this.$d=function(e,r,t){try{if(["x","X"].indexOf(r)>-1)return new Date(("X"===r?1e3:1)*e);var n=g(r)(e),o=n.year,i=n.month,a=n.day,s=n.hours,l=n.minutes,d=n.seconds,c=n.milliseconds,u=n.zone,h=new Date,m=a||(o||i?1:h.getDate()),f=o||h.getFullYear(),b=0;o&&!i||(b=i>0?i-1:h.getMonth());var p=s||0,y=l||0,v=d||0,x=c||0;return u?new Date(Date.UTC(f,b,m,p,y,v,x+60*u.offset*1e3)):t?new Date(Date.UTC(f,b,m,p,y,v,x)):new Date(f,b,m,p,y,v,x)}catch(e){return new Date("")}}(r,s,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&r!=this.format(s)&&(this.$d=new Date("")),i={}}else if(s instanceof Array)for(var h=s.length,m=1;m<=h;m+=1){a[1]=s[m-1];var f=t.apply(this,a);if(f.isValid()){this.$d=f.$d,this.$L=f.$L,this.init();break}m===h&&(this.$d=new Date(""))}else o.call(this,e)}}}();var ue=se(ce.exports),ge={exports:{}};ge.exports=function(e,r,t){r.prototype.isBetween=function(e,r,n,o){var i=t(e),a=t(r),s="("===(o=o||"()")[0],l=")"===o[1];return(s?this.isAfter(i,n):!this.isBefore(i,n))&&(l?this.isBefore(a,n):!this.isAfter(a,n))||(s?this.isBefore(i,n):!this.isAfter(i,n))&&(l?this.isAfter(a,n):!this.isBefore(a,n))}};var he=se(ge.exports),me={exports:{}};me.exports=function(e,r){r.prototype.isSameOrAfter=function(e,r){return this.isSame(e,r)||this.isAfter(e,r)}};var fe=se(me.exports),be={exports:{}};be.exports=function(e,r){r.prototype.isSameOrBefore=function(e,r){return this.isSame(e,r)||this.isBefore(e,r)}};var pe,ye,ve,xe=se(be.exports),we={exports:{}},$e=se(we.exports=(pe={year:0,month:1,day:2,hour:3,minute:4,second:5},ye={},function(e,r,t){var n,o=function(e,r,t){void 0===t&&(t={});var n=new Date(e),o=function(e,r){void 0===r&&(r={});var t=r.timeZoneName||"short",n=e+"|"+t,o=ye[n];return o||(o=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:t}),ye[n]=o),o}(r,t);return o.formatToParts(n)},i=function(e,r){for(var n=o(e,r),i=[],a=0;a<n.length;a+=1){var s=n[a],l=s.type,d=s.value,c=pe[l];c>=0&&(i[c]=parseInt(d,10))}var u=i[3],g=24===u?0:u,h=i[0]+"-"+i[1]+"-"+i[2]+" "+g+":"+i[4]+":"+i[5]+":000",m=+e;return(t.utc(h).valueOf()-(m-=m%1e3))/6e4},a=r.prototype;a.tz=function(e,r){void 0===e&&(e=n);var o=this.utcOffset(),i=this.toDate(),a=i.toLocaleString("en-US",{timeZone:e}),s=Math.round((i-new Date(a))/1e3/60),l=t(a,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-s,!0);if(r){var d=l.utcOffset();l=l.add(o-d,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var r=this.$x.$timezone||t.tz.guess(),n=o(this.valueOf(),r,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=a.startOf;a.startOf=function(e,r){if(!this.$x||!this.$x.$timezone)return s.call(this,e,r);var n=t(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,e,r).tz(this.$x.$timezone,!0)},t.tz=function(e,r,o){var a=o&&r,s=o||r||n,l=i(+t(),s);if("string"!=typeof e)return t(e).tz(s);var d=function(e,r,t){var n=e-60*r*1e3,o=i(n,t);if(r===o)return[n,r];var a=i(n-=60*(o-r)*1e3,t);return o===a?[n,o]:[e-60*Math.min(o,a)*1e3,Math.max(o,a)]}(t.utc(e,a).valueOf(),l,s),c=d[0],u=d[1],g=t(c).utcOffset(u);return g.$x.$timezone=s,g},t.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},t.tz.setDefault=function(e){n=e}}));de.extend(he),de.extend(xe),de.extend(fe),de.extend(ue),de.extend($e),function(e){e.generateDays=e=>{const r=e.startOf("month"),t=de(r).startOf("week");return Fe(t).map((e=>Ce(e)))},e.generateDaysForCurrentWeek=e=>{const r=e.startOf("week");return Ce(r)},e.generateMonths=e=>{const r=[];for(let t=0;t<12;t++){const n=e.month(t);r.push(de(n))}return r},e.generateDecadeOfYears=e=>{const r=e.year(),t=10*Math.floor(r/10),n=e.year(t),o=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)o.push(n.add(e,"year"));return o},e.getStartEndDecade=e=>{const r=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:r,endDecade:+de(`${r+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const r=de(e,"HH:mm");return r.isValid()?r.format("h:mm a"):""},e.isWithinRange=(e,r,t,n="day")=>!r&&!t||(r&&t?e.isBetween(r,t,n,"[]"):r?e.isSameOrAfter(r,n):e.isSameOrBefore(t,n)),e.isPreviousMonthWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"month"),t,void 0,"month"),e.isPreviousYearWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"year"),t,void 0,"year"),e.isPreviousDecadeWithinRange=(r,t)=>{const{beginDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).subtract(1,"year"),t,void 0,"year")},e.isNextMonthWithinRange=(r,t)=>e.isWithinRange(r.add(1,"month"),void 0,t,"month"),e.isNextYearWithinRange=(r,t)=>e.isWithinRange(r.add(1,"year"),void 0,t,"year"),e.isNextDecadeWithinRange=(r,t)=>{const{endDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).add(1,"year"),void 0,t,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,r)=>({start:e.format("YYYY-MM-DD"),end:e.add(r-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(r,t,n,o)=>{const i=e.isWithinRange(r,n?de(n):void 0,o?de(o):void 0),a=t&&t.includes(r.format("YYYY-MM-DD"));return!i||!!a}}(ve||(ve={}));const Fe=e=>{const r=[e];for(let t=1;t<6;t++){const n=e.add(t,"week");r.push(n)}return r},Ce=e=>{const r=[];for(let t=0;t<7;t++){const n=e.add(t,"day");r.push(n)}return r},Ee=[1,3,5,7,8,10,12],Se=[4,6,9,11];var De,Be;!function(e){e.clampDay=(r,t,n)=>{const o=parseInt(r),i=parseInt(t),a=parseInt(n);return 0==o?"1":Ee.includes(i)?Math.min(o,31).toString():Se.includes(i)?Math.min(o,30).toString():2===i?e.isLeapYear(a)?Math.min(o,29).toString():Math.min(o,28).toString():r},e.clampMonth=e=>{const r=parseInt(e);return 0==r?"1":r>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,r,t="HH:mm")=>{const n=de(e,t);return de(r,t).diff(n,"minute")},e.toDayjs=e=>e?de(e):de(),e.addMinutesToTime=(e,r,t="HH:mm")=>de(e,t).add(r,"minutes").format(t),e.isSame=(e,r,t="day")=>de(e).isSame(de(r),t)}(De||(De={})),function(e){e.isDateDisabled=(e,r)=>{const{disabledDates:t,minDate:n,maxDate:o}=r;return!!(e&&t&&t.length&&t.includes(e))||(!(!n||!de(e).isBefore(n,"day"))||!(!o||!de(e).isAfter(o,"day")))},e.sanitizeInput=e=>{if(e){const t=r(e);if(de(t,"YYYY-MM-DD",!0).isValid())return t}return""};const r=e=>{const r=e.match(/^(\d{1,4})-(\d{1,2})-(\d{1,2})$/);if(!r)return"";const[,t,n,o]=r;if(t.length<=2||parseInt(t,10)<100)return"";return`${t.padStart(4,"0")}-${n.padStart(2,"0")}-${o.padStart(2,"0")}`}}(Be||(Be={}));const ke=(...e)=>r=>{const t=[];for(const n of e)if("function"==typeof n){const e=n(r),o="function"==typeof e;t.push(o?e:()=>n(null))}else n.current=r,t.push((()=>{n.current=null}));if((()=>{const e=i.split(".");return parseInt(e[0],10)>=19})())return()=>{for(const e of t)e()}};var Oe,Te;!function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Oe||(Oe={})),function(e){e.transformWithSpaces=(e,r)=>{const t="(.{"+r+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(t,"g"),"$1 ").trim()},e.padValue=(e,r)=>{if("0"===e)return r?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,r)=>{const t=Math.floor(r/9);return e.length>=2*t||1===e.split(" ").length&&e.length>t},e.truncateOneLine=(e,r,t,n,o=8)=>{let i=0;r>t&&(i=Math.floor((r-t)/o));const a=n+i;if(a<e.length){const r=Math.floor(a/2);return e.substring(0,r)+" ... "+e.substring(e.length-r,e.length)}return e},e.truncateTwoLines=(e,r,t,n=1.2)=>{const o=Math.floor(2*r/(.6*t))*(2/n);if(e.length<=o)return e;const i=Math.floor(.6*o),a=Math.floor(.2*o);return`${e.substring(0,i)}...${e.substring(e.length-a)}`},e.getTextWidth=(r,t)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=t;return n.measureText(r).width},e.maskValue=(e,t)=>{if(!e)return e;const{maskRange:n,unmaskRange:o,maskChar:i="•",maskRegex:a,maskTransformer:s}=t;if(s)return s(e);if(a)return e.replace(a,i);if(n){const{startIndex:t,endIndex:o}=r(n[0],n[1]);return e.substring(0,t)+i.repeat(e.substring(t,o+1).length)+e.substring(o+1)}if(o){const{startIndex:t,endIndex:n}=r(o[0],o[1]);return i.repeat(e.substring(0,t).length)+e.substring(t,n+1)+i.repeat(e.substring(n+1).length)}return e};const r=(e,r)=>e<r?{startIndex:e,endIndex:r}:{startIndex:r,endIndex:e},t=new Intl.PluralRules("en",{type:"ordinal"}),n=new Map([["one","st"],["two","nd"],["few","rd"],["other","th"]]);e.formatOrdinal=e=>{const r=t.select(e);return`${e}${n.get(r)}`},e.getMaskedDescription=(e,r,t)=>{if(!e||"masked"!==r||!t)return"";const[n,o]=t,i=n>0,a=o<e.length-1,s=i?e.substring(0,n):"",l=a?e.substring(o+1):"";return i&&a?`Starting with ${s} and ending with ${l}`:i?`Starting with ${s}`:a?`Ending with ${l}`:""}}(Te||(Te={}));var ze=function(e,r){return ze=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])},ze(e,r)};var Ae=function(){return Ae=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e},Ae.apply(this,arguments)};var Ie="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var Me=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},je="object"==typeof Ie&&Ie&&Ie.Object===Object&&Ie,Le="object"==typeof self&&self&&self.Object===Object&&self,_e=je||Le||Function("return this")(),Re=_e,He=function(){return Re.Date.now()},Pe=/\s/;var We=function(e){for(var r=e.length;r--&&Pe.test(e.charAt(r)););return r},Ne=/^\s+/;var Ve=function(e){return e?e.slice(0,We(e)+1).replace(Ne,""):e},Ye=_e.Symbol,Ue=Ye,qe=Object.prototype,Ge=qe.hasOwnProperty,Ze=qe.toString,Ke=Ue?Ue.toStringTag:void 0;var Xe=function(e){var r=Ge.call(e,Ke),t=e[Ke];try{e[Ke]=void 0;var n=!0}catch(e){}var o=Ze.call(e);return n&&(r?e[Ke]=t:delete e[Ke]),o},Qe=Object.prototype.toString;var Je=Xe,er=function(e){return Qe.call(e)},rr=Ye?Ye.toStringTag:void 0;var tr=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":rr&&rr in Object(e)?Je(e):er(e)},nr=function(e){return null!=e&&"object"==typeof e};var or=Ve,ir=Me,ar=function(e){return"symbol"==typeof e||nr(e)&&"[object Symbol]"==tr(e)},sr=/^[-+]0x[0-9a-f]+$/i,lr=/^0b[01]+$/i,dr=/^0o[0-7]+$/i,cr=parseInt;var ur=Me,gr=He,hr=function(e){if("number"==typeof e)return e;if(ar(e))return NaN;if(ir(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=ir(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=or(e);var t=lr.test(e);return t||dr.test(e)?cr(e.slice(2),t?2:8):sr.test(e)?NaN:+e},mr=Math.max,fr=Math.min;var br=function(e,r,t){var n,o,i,a,s,l,d=0,c=!1,u=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(r){var t=n,i=o;return n=o=void 0,d=r,a=e.apply(i,t)}function m(e){var t=e-l;return void 0===l||t>=r||t<0||u&&e-d>=i}function f(){var e=gr();if(m(e))return b(e);s=setTimeout(f,function(e){var t=r-(e-l);return u?fr(t,i-(e-d)):t}(e))}function b(e){return s=void 0,g&&n?h(e):(n=o=void 0,a)}function p(){var e=gr(),t=m(e);if(n=arguments,o=this,l=e,t){if(void 0===s)return function(e){return d=e,s=setTimeout(f,r),c?h(e):a}(l);if(u)return clearTimeout(s),s=setTimeout(f,r),h(l)}return void 0===s&&(s=setTimeout(f,r)),a}return r=hr(r)||0,ur(t)&&(c=!!t.leading,i=(u="maxWait"in t)?mr(hr(t.maxWait)||0,r):i,g="trailing"in t?!!t.trailing:g),p.cancel=function(){void 0!==s&&clearTimeout(s),d=0,n=l=o=s=void 0},p.flush=function(){return void 0===s?a:b(gr())},p},pr=br,yr=Me;var vr=function(e,r,t){var n=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return yr(t)&&(n="leading"in t?!!t.leading:n,o="trailing"in t?!!t.trailing:o),pr(e,r,{leading:n,maxWait:r,trailing:o})},xr=function(e,r,t,n){switch(r){case"debounce":return br(e,t,n);case"throttle":return vr(e,t,n);default:return e}},wr=function(e){return"function"==typeof e},$r=function(){return"undefined"==typeof window},Fr=function(e){return e instanceof Element||e instanceof HTMLDocument},Cr=function(e,r,t,n){return function(o){var i=o.width,a=o.height;r((function(r){return r.width===i&&r.height===a||r.width===i&&!n||r.height===a&&!t?r:(e&&wr(e)&&e(i,a),{width:i,height:a})}))}};!function(e){function r(r){var t=e.call(this,r)||this;t.cancelHandler=function(){t.resizeHandler&&t.resizeHandler.cancel&&(t.resizeHandler.cancel(),t.resizeHandler=null)},t.attachObserver=function(){var e=t.props,r=e.targetRef,n=e.observerOptions;if(!$r()){r&&r.current&&(t.targetRef.current=r.current);var o=t.getElement();o&&(t.observableElement&&t.observableElement===o||(t.observableElement=o,t.resizeObserver.observe(o,n)))}},t.getElement=function(){var e=t.props,r=e.querySelector,n=e.targetDomEl;if($r())return null;if(r)return document.querySelector(r);if(n&&Fr(n))return n;if(t.targetRef&&Fr(t.targetRef.current))return t.targetRef.current;var o=Z(t);if(!o)return null;switch(t.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return o;default:return o.parentElement}},t.createResizeHandler=function(e){var r=t.props,n=r.handleWidth,o=void 0===n||n,i=r.handleHeight,a=void 0===i||i,s=r.onResize;if(o||a){var l=Cr(s,t.setState.bind(t),o,a);e.forEach((function(e){var r=e&&e.contentRect||{},n=r.width,o=r.height;!t.skipOnMount&&!$r()&&l({width:n,height:o}),t.skipOnMount=!1}))}},t.getRenderType=function(){var e=t.props,r=e.render,n=e.children;return wr(r)?"renderProp":wr(n)?"childFunction":l(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=r.skipOnMount,o=r.refreshMode,i=r.refreshRate,a=void 0===i?1e3:i,s=r.refreshOptions;return t.state={width:void 0,height:void 0},t.skipOnMount=n,t.targetRef=d(),t.observableElement=null,$r()||(t.resizeHandler=xr(t.createResizeHandler,o,a,s),t.resizeObserver=new window.ResizeObserver(t.resizeHandler)),t}(function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function t(){this.constructor=e}ze(e,r),e.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)})(r,e),r.prototype.componentDidMount=function(){this.attachObserver()},r.prototype.componentDidUpdate=function(){this.attachObserver()},r.prototype.componentWillUnmount=function(){$r()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},r.prototype.render=function(){var e,r=this.props,t=r.render,o=r.children,i=r.nodeType,a=void 0===i?"div":i,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return t&&t(l);case"childFunction":return(e=o)(l);case"child":if((e=o).type&&"string"==typeof e.type){var d=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)r.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(t[n[o]]=e[n[o]])}return t}(l,["targetRef"]);return c(e,d)}return c(e,l);case"childArray":return(e=o).map((function(e){return!!e&&c(e,l)}));default:return n.createElement(a,null)}}}(u);var Er=$r()?g:h;function Sr(e){void 0===e&&(e={});var r=e.skipOnMount,t=void 0!==r&&r,n=e.refreshMode,o=e.refreshRate,i=void 0===o?1e3:o,l=e.refreshOptions,d=e.handleWidth,c=void 0===d||d,u=e.handleHeight,g=void 0===u||u,h=e.targetRef,m=e.observerOptions,f=e.onResize,b=a(t),p=a(null),y=null!=h?h:p,v=a(),x=s({width:void 0,height:void 0}),w=x[0],$=x[1];return Er((function(){if(!$r()){var e=Cr(f,$,c,g);v.current=xr((function(r){(c||g)&&r.forEach((function(r){var t=r&&r.contentRect||{},n=t.width,o=t.height;!b.current&&!$r()&&e({width:n,height:o}),b.current=!1}))}),n,i,l);var r=new window.ResizeObserver(v.current);return y.current&&r.observe(y.current,m),function(){r.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[n,i,l,c,g,f,m,y.current]),Ae({ref:y},w)}function Dr(e){const r=a(null);h((()=>{r.current=e}),[e]);return m(((...e)=>{var t;return null===(t=r.current)||void 0===t?void 0:t.call(r,...e)}),[])}function Br({ref:e,formatter:r}){return()=>{var t;const n=e.current;if(!n)return;const o=n.value,i=r(o),a=null!==(t=n.selectionEnd)&&void 0!==t?t:0,s=o.substring(0,a),l=r(s),d=s.length-l.length,c=Math.max(0,a-d);return{nextValue:i,updateCaretPosition:()=>{n.value=i,n.setSelectionRange(c,c)}}}}const kr=e=>{const r=(e=>{const r=a(e),t=a();return g((()=>{t.current=r.current,r.current=e}),[e]),t.current})(e);return r!==e};var Or,Tr={exports:{}};Or=e=>(()=>{var r={"./node_modules/css-mediaquery/index.js":
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
	  \**************************************************************************************/r=>{r.exports=e}},t={};function n(e){var o=t[e];if(void 0!==o)return o.exports;var i=t[e]={exports:{}};return r[e].call(i.exports,i,i.exports,n),i.exports}return n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n("./src/index.ts")})();var zr=Tr.exports=Or(o),Ar=Array.isArray,Ir="object"==typeof ae&&ae&&ae.Object===Object&&ae,Mr=Ir,jr="object"==typeof self&&self&&self.Object===Object&&self,Lr=Mr||jr||Function("return this")(),_r=Lr.Symbol,Rr=_r,Hr=Object.prototype,Pr=Hr.hasOwnProperty,Wr=Hr.toString,Nr=Rr?Rr.toStringTag:void 0;var Vr=function(e){var r=Pr.call(e,Nr),t=e[Nr];try{e[Nr]=void 0;var n=!0}catch(e){}var o=Wr.call(e);return n&&(r?e[Nr]=t:delete e[Nr]),o},Yr=Object.prototype.toString;var Ur=Vr,qr=function(e){return Yr.call(e)},Gr=_r?_r.toStringTag:void 0;var Zr=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Gr&&Gr in Object(e)?Ur(e):qr(e)};var Kr=function(e){return null!=e&&"object"==typeof e},Xr=Zr,Qr=Kr;var Jr=function(e){return"symbol"==typeof e||Qr(e)&&"[object Symbol]"==Xr(e)},et=Ar,rt=Jr,tt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,nt=/^\w*$/;var ot=function(e,r){if(et(e))return!1;var t=typeof e;return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=e&&!rt(e))||(nt.test(e)||!tt.test(e)||null!=r&&e in Object(r))};var it=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},at=Zr,st=it;var lt,dt=function(e){if(!st(e))return!1;var r=at(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},ct=Lr["__core-js_shared__"],ut=(lt=/[^.]+$/.exec(ct&&ct.keys&&ct.keys.IE_PROTO||""))?"Symbol(src)_1."+lt:"";var gt=function(e){return!!ut&&ut in e},ht=Function.prototype.toString;var mt=function(e){if(null!=e){try{return ht.call(e)}catch(e){}try{return e+""}catch(e){}}return""},ft=dt,bt=gt,pt=it,yt=mt,vt=/^\[object .+?Constructor\]$/,xt=Function.prototype,wt=Object.prototype,$t=xt.toString,Ft=wt.hasOwnProperty,Ct=RegExp("^"+$t.call(Ft).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Et=function(e,r){return null==e?void 0:e[r]},St=function(e){return!(!pt(e)||bt(e))&&(ft(e)?Ct:vt).test(yt(e))},Dt=Et;var Bt=function(e,r){var t=Dt(e,r);return St(t)?t:void 0},kt=Bt(Object,"create"),Ot=kt;var Tt=function(){this.__data__=Ot?Ot(null):{},this.size=0};var zt=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},At=kt,It=Object.prototype.hasOwnProperty;var Mt=function(e){var r=this.__data__;if(At){var t=r[e];return"__lodash_hash_undefined__"===t?void 0:t}return It.call(r,e)?r[e]:void 0},jt=kt,Lt=Object.prototype.hasOwnProperty;var _t=function(e){var r=this.__data__;return jt?void 0!==r[e]:Lt.call(r,e)},Rt=kt;var Ht=function(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=Rt&&void 0===r?"__lodash_hash_undefined__":r,this},Pt=Tt,Wt=zt,Nt=Mt,Vt=_t,Yt=Ht;function Ut(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Ut.prototype.clear=Pt,Ut.prototype.delete=Wt,Ut.prototype.get=Nt,Ut.prototype.has=Vt,Ut.prototype.set=Yt;var qt=Ut;var Gt=function(){this.__data__=[],this.size=0};var Zt=function(e,r){return e===r||e!=e&&r!=r},Kt=Zt;var Xt=function(e,r){for(var t=e.length;t--;)if(Kt(e[t][0],r))return t;return-1},Qt=Xt,Jt=Array.prototype.splice;var en=function(e){var r=this.__data__,t=Qt(r,e);return!(t<0)&&(t==r.length-1?r.pop():Jt.call(r,t,1),--this.size,!0)},rn=Xt;var tn=function(e){var r=this.__data__,t=rn(r,e);return t<0?void 0:r[t][1]},nn=Xt;var on=function(e){return nn(this.__data__,e)>-1},an=Xt;var sn=function(e,r){var t=this.__data__,n=an(t,e);return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this},ln=Gt,dn=en,cn=tn,un=on,gn=sn;function hn(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}hn.prototype.clear=ln,hn.prototype.delete=dn,hn.prototype.get=cn,hn.prototype.has=un,hn.prototype.set=gn;var mn=hn,fn=Bt(Lr,"Map"),bn=qt,pn=mn,yn=fn;var vn=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var xn=function(e,r){var t=e.__data__;return vn(r)?t["string"==typeof r?"string":"hash"]:t.map},wn=xn;var $n=function(e){var r=wn(this,e).delete(e);return this.size-=r?1:0,r},Fn=xn;var Cn=function(e){return Fn(this,e).get(e)},En=xn;var Sn=function(e){return En(this,e).has(e)},Dn=xn;var Bn=function(e,r){var t=Dn(this,e),n=t.size;return t.set(e,r),this.size+=t.size==n?0:1,this},kn=function(){this.size=0,this.__data__={hash:new bn,map:new(yn||pn),string:new bn}},On=$n,Tn=Cn,zn=Sn,An=Bn;function In(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}In.prototype.clear=kn,In.prototype.delete=On,In.prototype.get=Tn,In.prototype.has=zn,In.prototype.set=An;var Mn=In,jn=Mn;function Ln(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var t=function(){var n=arguments,o=r?r.apply(this,n):n[0],i=t.cache;if(i.has(o))return i.get(o);var a=e.apply(this,n);return t.cache=i.set(o,a)||i,a};return t.cache=new(Ln.Cache||jn),t}Ln.Cache=jn;var _n=Ln;var Rn=function(e){var r=_n(e,(function(e){return 500===t.size&&t.clear(),e})),t=r.cache;return r},Hn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Pn=/\\(\\)?/g,Wn=Rn((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(Hn,(function(e,t,n,o){r.push(n?o.replace(Pn,"$1"):t||e)})),r}));var Nn=function(e,r){for(var t=-1,n=null==e?0:e.length,o=Array(n);++t<n;)o[t]=r(e[t],t,e);return o},Vn=Ar,Yn=Jr,Un=_r?_r.prototype:void 0,qn=Un?Un.toString:void 0;var Gn=function e(r){if("string"==typeof r)return r;if(Vn(r))return Nn(r,e)+"";if(Yn(r))return qn?qn.call(r):"";var t=r+"";return"0"==t&&1/r==-1/0?"-0":t},Zn=Gn;var Kn=Ar,Xn=ot,Qn=Wn,Jn=function(e){return null==e?"":Zn(e)};var eo=function(e,r){return Kn(e)?e:Xn(e,r)?[e]:Qn(Jn(e))},ro=Jr;var to=function(e){if("string"==typeof e||ro(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r},no=eo,oo=to;var io=function(e,r){for(var t=0,n=(r=no(r,e)).length;null!=e&&t<n;)e=e[oo(r[t++])];return t&&t==n?e:void 0},ao=io;var so=function(e,r,t){var n=null==e?void 0:ao(e,r);return void 0===n?t:n},lo=se(so);const co=(e,r,t)=>lo(t,r)||lo(e,r),uo=(e,r)=>{const t=r||e.defaultValue;return lo(e.collections,t)},go={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},ho=e=>r=>{var t;const n=r.theme,o=uo(go,null==n?void 0:n.borderScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.border)?`${co(o,e,n.overrides.border)}px`:`${o[e]}px`},mo={"width-005":ho("width-005"),"width-010":ho("width-010"),"width-020":ho("width-020"),"width-040":ho("width-040"),solid:(fo="solid",e=>{var r;const t=e.theme,n=uo(go,null==t?void 0:t.borderScheme),o=(null===(r=null==t?void 0:t.overrides)||void 0===r?void 0:r.border)?co(n,fo,t.overrides.border):n[fo];return"function"==typeof o?o(e):o})};var fo;const bo={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},po={"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFF8FC","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},yo={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},vo={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},xo={"brand-10":"#001A19","brand-20":"#002D2B","brand-30":"#00413D","brand-40":"#005954","brand-50":"#00756F","brand-60":"#03A098","brand-70":"#55BFBA","brand-80":"#92D6D2","brand-90":"#BFE7E5","brand-95":"#DDF2F1","brand-100":"#F4FBFA","primary-10":"#09191D","primary-20":"#102B34","primary-30":"#173D49","primary-40":"#205666","primary-50":"#2A7086","primary-60":"#5D97A9","primary-70":"#8CB6C2","primary-80":"#B2CED6","primary-90":"#D1E2E7","primary-95":"#E8F0F3","primary-100":"#F7FAFB","secondary-10":"#001731","secondary-20":"#002752","secondary-30":"#003874","secondary-40":"#004D9F","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},wo={"brand-10":"#881317","brand-20":"#B5191E","brand-30":"#B5040A","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},$o={"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Fo={"brand-10":"#170F39","brand-20":"#281C62","brand-30":"#38268B","brand-40":"#4D34BF","brand-50":"#5735DF","brand-60":"#9986F9","brand-70":"#B2A5F8","brand-80":"#CDC2FA","brand-90":"#E2DCFC","brand-95":"#EFEDFE","brand-100":"#FAF8FD","primary-10":"#170F39","primary-20":"#281C62","primary-30":"#38268B","primary-40":"#4D34BF","primary-50":"#5735DF","primary-60":"#9986F9","primary-70":"#B2A5F8","primary-80":"#CDC2FA","primary-90":"#E2DCFC","primary-95":"#EFEDFE","primary-100":"#FAF8FD","secondary-10":"#251204","secondary-20":"#401F08","secondary-30":"#5B2C0B","secondary-40":"#7E3D0F","secondary-50":"#B04900","secondary-60":"#E26E1C","secondary-70":"#FF9445","secondary-80":"#FFBB8E","secondary-90":"#FFD9BF","secondary-95":"#FFECDF","secondary-100":"#FFF8F3","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#031B15","success-20":"#082D24","success-30":"#094134","success-40":"#0D5947","success-50":"#10755E","success-60":"#16A181","success-70":"#1EC59D","success-80":"#6FDDC2","success-90":"#AFECDE","success-95":"#D5F5ED","success-100":"#F1FCF9","warning-10":"#1F1500","warning-20":"#362500","warning-30":"#4D3501","warning-40":"#6A4801","warning-50":"#8B6001","warning-60":"#BF8301","warning-70":"#EAA102","warning-80":"#FFBF34","warning-90":"#FFDC8F","warning-95":"#FFEDC7","warning-100":"#FFF8EA","error-10":"#270F10","error-20":"#441B1B","error-30":"#612627","error-40":"#853535","error-50":"#AF4546","error-60":"#EC6162","error-70":"#F29696","error-80":"#F7BBBC","error-90":"#FAD8D8","error-95":"#FCEAEA","error-100":"#FEF7F7","info-10":"#0F1627","info-20":"#1B2745","info-30":"#273763","info-40":"#354D88","info-50":"#4665B3","info-60":"#618AF6","info-70":"#8DADFF","info-80":"#B4C9FF","info-90":"#D3DFFF","info-95":"#E9EFFF","info-100":"#F5F8FF",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Co={"brand-10":"#0E113C","brand-20":"#191E67","brand-30":"#232A92","brand-40":"#233FC2","brand-50":"#135CEA","brand-60":"#378FFB","brand-70":"#71B3FD","brand-80":"#9DCFFE","brand-90":"#C1E5FF","brand-95":"#DCF1FF","brand-100":"#F3FAFF","primary-10":"#0E113C","primary-20":"#191E67","primary-30":"#232A92","primary-40":"#233FC2","primary-50":"#135CEA","primary-60":"#378FFB","primary-70":"#71B3FD","primary-80":"#9DCFFE","primary-90":"#C1E5FF","primary-95":"#DCF1FF","primary-100":"#F3FAFF","secondary-10":"#34001F","secondary-20":"#540033","secondary-30":"#730045","secondary-40":"#9D0054","secondary-50":"#C61C64","secondary-60":"#DE6792","secondary-70":"#EB96B6","secondary-80":"#F5BAD2","secondary-90":"#FCD5E3","secondary-95":"#FDEBF1","secondary-100":"#FDF6F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Eo={"brand-10":"#370009","brand-20":"#4E000D","brand-30":"#640011","brand-40":"#850017","brand-50":"#9B001A","brand-60":"#EF2D4E","brand-70":"#F692A3","brand-80":"#FAB9C4","brand-90":"#FCD7DD","brand-95":"#FDEAED","brand-100":"#FEF8F9","primary-10":"#1F102A","primary-20":"#2F193F","primary-30":"#3E2053","primary-40":"#562D71","primary-50":"#663587","primary-60":"#9370AA","primary-70":"#BCA7CB","primary-80":"#D3C5DC","primary-90":"#E5DDEB","primary-95":"#F2EEF5","primary-100":"#FAF9FB","secondary-10":"#201316","secondary-20":"#311D22","secondary-30":"#3F272C","secondary-40":"#58363D","secondary-50":"#684049","secondary-60":"#AF6A7A","secondary-70":"#F393A8","secondary-80":"#FFB6C6","secondary-90":"#FFD6DF","secondary-95":"#FFE9EE","secondary-100":"#FFF7F9","neutral-10":"#161616","neutral-20":"#222222","neutral-30":"#2D2D2D","neutral-40":"#3F3F3F","neutral-50":"#4B4B4B","neutral-60":"#7E7E7E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081917","success-20":"#0D2724","success-30":"#11332E","success-40":"#174740","success-50":"#1B554C","success-60":"#2D8C7E","success-70":"#46C2AF","success-80":"#89D8CC","success-90":"#BCE9E2","success-95":"#DAF3EF","success-100":"#F0FAF9","warning-10":"#241200","warning-20":"#371C00","warning-30":"#482500","warning-40":"#633300","warning-50":"#763C00","warning-60":"#C36400","warning-70":"#FF9524","warning-80":"#FFBD77","warning-90":"#FFD9B2","warning-95":"#FFEBD6","warning-100":"#FFF7F0","error-10":"#330505","error-20":"#4B0707","error-30":"#600909","error-40":"#810D0D","error-50":"#98110F","error-60":"#D7504C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032537","info-30":"#043148","info-40":"#054462","info-50":"#065175","info-60":"#3985AF","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},So={"brand-10":"#00143A","brand-20":"#00205B","brand-30":"#153368","brand-40":"#18417C","brand-50":"#00558C","brand-60":"#009CDE","brand-70":"#5AB9E7","brand-80":"#9ED0ED","brand-90":"#CAE3F4","brand-95":"#E2F0F9","brand-100":"#F4FAFD","primary-10":"#00143A","primary-20":"#00205B","primary-30":"#153368","primary-40":"#18417C","primary-50":"#00558C","primary-60":"#009CDE","primary-70":"#5AB9E7","primary-80":"#9ED0ED","primary-90":"#CAE3F4","primary-95":"#E2F0F9","primary-100":"#F4FAFD","secondary-10":"#10171F","secondary-20":"#1E252C","secondary-30":"#2F353B","secondary-40":"#3D4247","secondary-50":"#4E5255","secondary-60":"#8F9396","secondary-70":"#A9B0B3","secondary-80":"#C7CBCC","secondary-90":"#DDDFE0","secondary-95":"#ECEDEE","secondary-100":"#F8F8F9","neutral-10":"#10171F","neutral-20":"#1E252C","neutral-30":"#2F353B","neutral-40":"#3D4247","neutral-50":"#4E5255","neutral-60":"#8F9396","neutral-70":"#A9B0B3","neutral-80":"#C7CBCC","neutral-90":"#DDDFE0","neutral-95":"#ECEDEE","neutral-100":"#F8F8F9","success-10":"#001B0E","success-20":"#012A16","success-30":"#013D20","success-40":"#014D28","success-50":"#005F30","success-60":"#48A377","success-70":"#77BD9B","success-80":"#A3D5BD","success-90":"#C4E7D6","success-95":"#DBF4E7","success-100":"#ECFDF5","warning-10":"#1F1500","warning-20":"#312100","warning-30":"#473000","warning-40":"#593C00","warning-50":"#6E4B00","warning-60":"#B78C31","warning-70":"#DDA633","warning-80":"#E0C792","warning-90":"#E9DEC5","warning-95":"#F4EEE0","warning-100":"#FAF8F3","error-10":"#360109","error-20":"#50010E","error-30":"#6F0213","error-40":"#88051A","error-50":"#A60A24","error-60":"#E07083","error-70":"#EA98A6","error-80":"#F3BBC4","error-90":"#FAD5DC","error-95":"#FEE9ED","error-100":"#FFF6F8","info-10":"#00143A","info-20":"#00205B","info-30":"#153368","info-40":"#18417C","info-50":"#00558C","info-60":"#009CDE","info-70":"#5AB9E7","info-80":"#9ED0ED","info-90":"#CAE3F4","info-95":"#E2F0F9","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FFCB6A"},Do={collections:{lifesg:yo,bookingsg:bo,rbs:$o,mylegacy:vo,ccube:po,oneservice:xo,pa:wo,a11yplayground:Fo,supportgowhere:Co,imda:Eo,spf:So},defaultValue:"lifesg"},Bo={collections:{lifesg:yo,bookingsg:bo,rbs:$o,mylegacy:vo,ccube:po,oneservice:xo,pa:wo,a11yplayground:Fo,supportgowhere:Co,imda:Eo,spf:So},defaultValue:"lifesg"},ko=e=>r=>{var t;const n=r.theme,o="dark"===(null==n?void 0:n.colourMode),i=uo(o?Bo:Do,null==n?void 0:n.colourScheme),a=o?"primitiveColourDark":"primitiveColour",s=null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t[a];return s?co(i,e,s):i[e]},Oo={"brand-10":ko("brand-10"),"brand-20":ko("brand-20"),"brand-30":ko("brand-30"),"brand-40":ko("brand-40"),"brand-50":ko("brand-50"),"brand-60":ko("brand-60"),"brand-70":ko("brand-70"),"brand-80":ko("brand-80"),"brand-90":ko("brand-90"),"brand-95":ko("brand-95"),"brand-100":ko("brand-100"),"primary-10":ko("primary-10"),"primary-20":ko("primary-20"),"primary-30":ko("primary-30"),"primary-40":ko("primary-40"),"primary-50":ko("primary-50"),"primary-60":ko("primary-60"),"primary-70":ko("primary-70"),"primary-80":ko("primary-80"),"primary-90":ko("primary-90"),"primary-95":ko("primary-95"),"primary-100":ko("primary-100"),"secondary-10":ko("secondary-10"),"secondary-20":ko("secondary-20"),"secondary-30":ko("secondary-30"),"secondary-40":ko("secondary-40"),"secondary-50":ko("secondary-50"),"secondary-60":ko("secondary-60"),"secondary-70":ko("secondary-70"),"secondary-80":ko("secondary-80"),"secondary-90":ko("secondary-90"),"secondary-95":ko("secondary-95"),"secondary-100":ko("secondary-100"),"neutral-10":ko("neutral-10"),"neutral-20":ko("neutral-20"),"neutral-30":ko("neutral-30"),"neutral-40":ko("neutral-40"),"neutral-50":ko("neutral-50"),"neutral-60":ko("neutral-60"),"neutral-70":ko("neutral-70"),"neutral-80":ko("neutral-80"),"neutral-90":ko("neutral-90"),"neutral-95":ko("neutral-95"),"neutral-100":ko("neutral-100"),"success-10":ko("success-10"),"success-20":ko("success-20"),"success-30":ko("success-30"),"success-40":ko("success-40"),"success-50":ko("success-50"),"success-60":ko("success-60"),"success-70":ko("success-70"),"success-80":ko("success-80"),"success-90":ko("success-90"),"success-95":ko("success-95"),"success-100":ko("success-100"),"warning-10":ko("warning-10"),"warning-20":ko("warning-20"),"warning-30":ko("warning-30"),"warning-40":ko("warning-40"),"warning-50":ko("warning-50"),"warning-60":ko("warning-60"),"warning-70":ko("warning-70"),"warning-80":ko("warning-80"),"warning-90":ko("warning-90"),"warning-95":ko("warning-95"),"warning-100":ko("warning-100"),"error-10":ko("error-10"),"error-20":ko("error-20"),"error-30":ko("error-30"),"error-40":ko("error-40"),"error-50":ko("error-50"),"error-60":ko("error-60"),"error-70":ko("error-70"),"error-80":ko("error-80"),"error-90":ko("error-90"),"error-95":ko("error-95"),"error-100":ko("error-100"),"info-10":ko("info-10"),"info-20":ko("info-20"),"info-30":ko("info-30"),"info-40":ko("info-40"),"info-50":ko("info-50"),"info-60":ko("info-60"),"info-70":ko("info-70"),"info-80":ko("info-80"),"info-90":ko("info-90"),"info-95":ko("info-95"),"info-100":ko("info-100"),white:ko("white"),black:ko("black"),"primary-inverse":ko("primary-inverse")},To={text:ko("neutral-20"),"text-subtle":ko("neutral-30"),"text-subtler":ko("neutral-50"),"text-subtlest":ko("neutral-60"),"text-primary":ko("primary-50"),"text-primary-strongest":ko("primary-20"),"text-hover":ko("primary-40"),"text-selected":ko("primary-50"),"text-selected-hover":ko("primary-40"),"text-disabled":ko("neutral-50"),"text-disabled-subtle":ko("neutral-60"),"text-disabled-subtlest":ko("neutral-80"),"text-selected-disabled":ko("neutral-20"),"text-success":ko("success-40"),"text-warning":ko("warning-40"),"text-error":ko("error-40"),"text-info":ko("info-40"),"text-inverse":ko("white"),icon:ko("neutral-50"),"icon-subtle":ko("neutral-60"),"icon-strongest":ko("neutral-20"),"icon-primary":ko("primary-50"),"icon-primary-subtle":ko("primary-60"),"icon-primary-subtlest":ko("primary-70"),"icon-hover":ko("primary-40"),"icon-selected":ko("primary-50"),"icon-selected-hover":ko("primary-40"),"icon-disabled":ko("neutral-50"),"icon-disabled-subtle":ko("neutral-60"),"icon-selected-disabled":ko("neutral-60"),"icon-success":ko("success-50"),"icon-warning":ko("warning-60"),"icon-error":ko("error-50"),"icon-error-strong":ko("error-40"),"icon-info":ko("info-50"),"icon-inverse":ko("white"),"icon-primary-inverse":ko("primary-inverse"),border:ko("neutral-90"),"border-strong":ko("neutral-70"),"border-stronger":ko("neutral-50"),"border-primary":ko("primary-50"),"border-primary-subtle":ko("primary-60"),"border-hover":ko("primary-90"),"border-hover-strong":ko("primary-60"),"border-selected":ko("primary-50"),"border-selected-subtle":ko("primary-70"),"border-selected-subtlest":ko("primary-90"),"border-selected-hover":ko("primary-40"),"border-focus":ko("primary-60"),"border-focus-strong":ko("primary-50"),"border-disabled":ko("neutral-90"),"border-selected-disabled":ko("neutral-70"),"border-success":ko("success-60"),"border-warning":ko("warning-60"),"border-error":ko("error-60"),"border-error-focus":ko("error-60"),"border-error-focus-strong":ko("error-40"),"border-error-strong":ko("error-40"),"border-info":ko("info-60"),bg:ko("white"),"bg-strong":ko("neutral-100"),"bg-stronger":ko("neutral-95"),"bg-strongest":ko("neutral-90"),"bg-hover":ko("primary-95"),"bg-hover-strong":ko("primary-90"),"bg-hover-subtle":ko("primary-100"),"bg-hover-neutral":ko("neutral-100"),"bg-hover-neutral-strong":ko("neutral-90"),"bg-selected":ko("primary-95"),"bg-selected-hover":ko("primary-90"),"bg-selected-strong":ko("primary-90"),"bg-selected-stronger":ko("primary-70"),"bg-selected-strongest":ko("primary-50"),"bg-selected-strongest-hover":ko("primary-40"),"bg-disabled":ko("neutral-95"),"bg-selected-disabled":ko("neutral-95"),"bg-selected-stronger-disabled":ko("neutral-70"),"bg-success":ko("success-100"),"bg-success-hover":ko("success-95"),"bg-success-strong":ko("success-50"),"bg-success-strong-hover":ko("success-40"),"bg-warning":ko("warning-100"),"bg-warning-hover":ko("warning-95"),"bg-warning-strong":ko("warning-50"),"bg-warning-strong-hover":ko("warning-40"),"bg-info":ko("info-100"),"bg-info-hover":ko("info-95"),"bg-info-strong":ko("info-50"),"bg-info-strong-hover":ko("info-40"),"bg-error":ko("error-100"),"bg-error-hover":ko("error-95"),"bg-error-strong":ko("error-50"),"bg-error-strong-hover":ko("error-40"),"bg-inverse":ko("neutral-20"),"bg-inverse-subtle":ko("neutral-30"),"bg-inverse-subtler":ko("neutral-50"),"bg-inverse-subtlest":ko("neutral-60"),"bg-inverse-hover":ko("neutral-40"),"bg-primary":ko("primary-50"),"bg-primary-subtle":ko("primary-60"),"bg-primary-subtler":ko("primary-95"),"bg-primary-subtlest":ko("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":ko("primary-40"),"bg-primary-subtlest-hover":ko("primary-90"),"bg-primary-subtlest-selected":ko("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:ko("primary-50"),"hyperlink-hover":ko("primary-40"),"hyperlink-visited":ko("primary-40"),"hyperlink-inverse":ko("primary-inverse"),"focus-ring":ko("primary-50"),"focus-ring-inverse":ko("white")},zo={text:ko("neutral-100"),"text-subtle":ko("neutral-80"),"text-subtler":ko("neutral-60"),"text-subtlest":ko("neutral-50"),"text-primary":ko("primary-60"),"text-primary-strongest":ko("primary-90"),"text-hover":ko("primary-70"),"text-selected":ko("primary-60"),"text-selected-hover":ko("primary-70"),"text-disabled":ko("neutral-60"),"text-disabled-subtle":ko("neutral-50"),"text-disabled-subtlest":ko("neutral-30"),"text-selected-disabled":ko("neutral-90"),"text-success":ko("success-70"),"text-warning":ko("warning-70"),"text-error":ko("error-70"),"text-info":ko("info-70"),"text-inverse":ko("black"),icon:ko("neutral-60"),"icon-subtle":ko("neutral-50"),"icon-strongest":ko("neutral-90"),"icon-primary":ko("primary-60"),"icon-primary-subtle":ko("primary-50"),"icon-primary-subtlest":ko("primary-40"),"icon-hover":ko("primary-70"),"icon-selected":ko("primary-60"),"icon-selected-hover":ko("primary-70"),"icon-disabled":ko("neutral-60"),"icon-disabled-subtle":ko("neutral-50"),"icon-selected-disabled":ko("neutral-50"),"icon-success":ko("success-60"),"icon-warning":ko("warning-50"),"icon-error":ko("error-60"),"icon-error-strong":ko("error-70"),"icon-info":ko("info-60"),"icon-inverse":ko("black"),"icon-primary-inverse":ko("primary-inverse"),border:ko("neutral-20"),"border-strong":ko("neutral-40"),"border-stronger":ko("neutral-60"),"border-primary":ko("primary-60"),"border-primary-subtle":ko("primary-50"),"border-hover":ko("primary-20"),"border-hover-strong":ko("primary-50"),"border-selected":ko("primary-60"),"border-selected-subtle":ko("primary-40"),"border-selected-subtlest":ko("primary-20"),"border-selected-hover":ko("primary-70"),"border-focus":ko("primary-50"),"border-focus-strong":ko("primary-60"),"border-disabled":ko("neutral-20"),"border-selected-disabled":ko("neutral-40"),"border-success":ko("success-50"),"border-warning":ko("warning-50"),"border-error":ko("error-50"),"border-error-focus":ko("error-50"),"border-error-focus-strong":ko("error-70"),"border-error-strong":ko("error-70"),"border-info":ko("info-50"),bg:ko("black"),"bg-strong":ko("neutral-10"),"bg-stronger":ko("neutral-20"),"bg-strongest":ko("neutral-20"),"bg-hover":ko("primary-20"),"bg-hover-strong":ko("primary-20"),"bg-hover-subtle":ko("primary-10"),"bg-hover-neutral":ko("neutral-10"),"bg-hover-neutral-strong":ko("neutral-20"),"bg-selected":ko("primary-20"),"bg-selected-hover":ko("primary-20"),"bg-selected-strong":ko("primary-20"),"bg-selected-stronger":ko("primary-40"),"bg-selected-strongest":ko("primary-60"),"bg-selected-strongest-hover":ko("primary-70"),"bg-disabled":ko("neutral-20"),"bg-selected-disabled":ko("neutral-20"),"bg-selected-stronger-disabled":ko("neutral-40"),"bg-success":ko("success-10"),"bg-success-hover":ko("success-20"),"bg-success-strong":ko("success-60"),"bg-success-strong-hover":ko("success-70"),"bg-warning":ko("warning-10"),"bg-warning-hover":ko("warning-20"),"bg-warning-strong":ko("warning-60"),"bg-warning-strong-hover":ko("warning-70"),"bg-info":ko("info-10"),"bg-info-hover":ko("info-20"),"bg-info-strong":ko("info-60"),"bg-info-strong-hover":ko("info-70"),"bg-error":ko("error-10"),"bg-error-hover":ko("error-20"),"bg-error-strong":ko("error-60"),"bg-error-strong-hover":ko("error-70"),"bg-inverse":ko("neutral-90"),"bg-inverse-subtle":ko("neutral-80"),"bg-inverse-subtler":ko("neutral-60"),"bg-inverse-subtlest":ko("neutral-50"),"bg-inverse-hover":ko("neutral-70"),"bg-primary":ko("primary-60"),"bg-primary-subtle":ko("primary-50"),"bg-primary-subtler":ko("primary-20"),"bg-primary-subtlest":ko("primary-10"),"bg-available":"#185339","bg-primary-hover":ko("primary-70"),"bg-primary-subtlest-hover":ko("primary-20"),"bg-primary-subtlest-selected":ko("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:ko("primary-60"),"hyperlink-hover":ko("primary-70"),"hyperlink-visited":ko("primary-70"),"hyperlink-inverse":ko("primary-inverse"),"focus-ring":ko("primary-60"),"focus-ring-inverse":ko("black")},Ao={text:ko("neutral-30"),"text-subtle":ko("neutral-40"),"text-subtler":ko("neutral-50"),"text-subtlest":ko("neutral-70"),"text-primary":ko("neutral-10"),"text-primary-strongest":ko("neutral-10"),"text-hover":ko("neutral-70"),"text-selected":ko("neutral-20"),"text-selected-hover":ko("neutral-10"),"text-disabled":ko("neutral-50"),"text-disabled-subtle":ko("neutral-70"),"text-disabled-subtlest":ko("neutral-80"),"text-selected-disabled":ko("neutral-40"),"text-success":ko("success-40"),"text-warning":ko("warning-40"),"text-error":ko("brand-30"),"text-info":ko("neutral-40"),"text-inverse":ko("neutral-100"),icon:ko("neutral-40"),"icon-subtle":ko("neutral-50"),"icon-strongest":ko("neutral-10"),"icon-primary":ko("neutral-10"),"icon-primary-subtle":ko("neutral-30"),"icon-primary-subtlest":ko("neutral-60"),"icon-hover":ko("neutral-70"),"icon-selected":ko("brand-20"),"icon-selected-hover":ko("brand-10"),"icon-disabled":ko("neutral-50"),"icon-disabled-subtle":ko("neutral-70"),"icon-selected-disabled":ko("neutral-40"),"icon-success":ko("success-40"),"icon-warning":ko("warning-60"),"icon-error":ko("brand-30"),"icon-error-strong":ko("brand-10"),"icon-info":ko("neutral-40"),"icon-inverse":ko("neutral-100"),"icon-primary-inverse":"#F9B371",border:ko("neutral-90"),"border-strong":ko("neutral-30"),"border-stronger":ko("neutral-20"),"border-primary":ko("neutral-40"),"border-primary-subtle":ko("neutral-60"),"border-hover":ko("neutral-80"),"border-hover-strong":ko("neutral-10"),"border-selected":ko("brand-20"),"border-selected-subtle":ko("neutral-40"),"border-selected-subtlest":ko("neutral-70"),"border-selected-hover":ko("neutral-10"),"border-focus":ko("neutral-20"),"border-focus-strong":ko("neutral-10"),"border-disabled":ko("neutral-90"),"border-selected-disabled":ko("neutral-80"),"border-success":ko("success-40"),"border-warning":ko("warning-60"),"border-error":ko("brand-30"),"border-error-focus":ko("brand-20"),"border-error-focus-strong":ko("brand-10"),"border-error-strong":ko("brand-20"),"border-info":ko("neutral-40"),bg:ko("neutral-100"),"bg-strong":ko("neutral-95"),"bg-stronger":ko("neutral-90"),"bg-strongest":ko("neutral-80"),"bg-hover":ko("brand-90"),"bg-hover-strong":ko("brand-80"),"bg-hover-subtle":ko("neutral-90"),"bg-hover-neutral":ko("neutral-90"),"bg-hover-neutral-strong":ko("neutral-90"),"bg-selected":ko("brand-100"),"bg-selected-hover":ko("brand-30"),"bg-selected-strong":ko("brand-50"),"bg-selected-stronger":ko("brand-40"),"bg-selected-strongest":ko("brand-20"),"bg-selected-strongest-hover":ko("brand-10"),"bg-disabled":ko("neutral-90"),"bg-selected-disabled":ko("neutral-90"),"bg-selected-stronger-disabled":ko("neutral-80"),"bg-success":ko("success-100"),"bg-success-hover":ko("success-95"),"bg-success-strong":ko("success-50"),"bg-success-strong-hover":ko("success-40"),"bg-warning":ko("warning-100"),"bg-warning-hover":ko("warning-95"),"bg-warning-strong":ko("warning-50"),"bg-warning-strong-hover":ko("warning-40"),"bg-info":ko("neutral-95"),"bg-info-hover":ko("info-95"),"bg-info-strong":ko("info-50"),"bg-info-strong-hover":ko("info-40"),"bg-error":ko("brand-100"),"bg-error-hover":ko("error-95"),"bg-error-strong":ko("error-50"),"bg-error-strong-hover":ko("error-40"),"bg-inverse":ko("neutral-40"),"bg-inverse-subtle":ko("neutral-60"),"bg-inverse-subtler":ko("neutral-70"),"bg-inverse-subtlest":ko("neutral-80"),"bg-inverse-hover":ko("neutral-30"),"bg-primary":ko("brand-20"),"bg-primary-subtle":ko("brand-60"),"bg-primary-subtler":ko("brand-80"),"bg-primary-subtlest":ko("brand-100"),"bg-available":ko("success-60"),"bg-primary-hover":ko("brand-10"),"bg-primary-subtlest-hover":ko("brand-80"),"bg-primary-subtlest-selected":ko("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:ko("neutral-10"),"hyperlink-hover":ko("neutral-40"),"hyperlink-visited":ko("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":ko("primary-50"),"focus-ring-inverse":ko("white")},Io={text:ko("neutral-20"),"text-subtle":ko("neutral-30"),"text-subtler":ko("neutral-50"),"text-subtlest":ko("neutral-60"),"text-primary":ko("primary-50"),"text-primary-strongest":ko("primary-20"),"text-hover":ko("primary-40"),"text-selected":ko("primary-50"),"text-selected-hover":ko("primary-40"),"text-disabled":ko("neutral-50"),"text-disabled-subtle":ko("neutral-60"),"text-disabled-subtlest":ko("neutral-80"),"text-selected-disabled":ko("neutral-20"),"text-success":ko("success-40"),"text-warning":ko("warning-40"),"text-error":ko("error-40"),"text-info":ko("info-40"),"text-inverse":ko("white"),icon:ko("neutral-50"),"icon-subtle":ko("neutral-60"),"icon-strongest":ko("neutral-20"),"icon-primary":ko("primary-50"),"icon-primary-subtle":ko("primary-60"),"icon-primary-subtlest":ko("primary-70"),"icon-hover":ko("primary-40"),"icon-selected":ko("primary-50"),"icon-selected-hover":ko("primary-40"),"icon-disabled":ko("neutral-50"),"icon-disabled-subtle":ko("neutral-60"),"icon-selected-disabled":ko("neutral-60"),"icon-success":ko("success-50"),"icon-warning":ko("warning-60"),"icon-error":ko("error-50"),"icon-error-strong":ko("error-40"),"icon-info":ko("info-50"),"icon-inverse":ko("white"),"icon-primary-inverse":ko("primary-inverse"),border:ko("neutral-90"),"border-strong":ko("neutral-70"),"border-stronger":ko("neutral-50"),"border-primary":ko("primary-50"),"border-primary-subtle":ko("primary-60"),"border-hover":ko("primary-90"),"border-hover-strong":ko("primary-60"),"border-selected":ko("primary-50"),"border-selected-subtle":ko("primary-70"),"border-selected-subtlest":ko("primary-90"),"border-selected-hover":ko("primary-40"),"border-focus":ko("primary-60"),"border-focus-strong":ko("primary-50"),"border-disabled":ko("neutral-90"),"border-selected-disabled":ko("neutral-70"),"border-success":ko("success-60"),"border-warning":ko("warning-60"),"border-error":ko("error-60"),"border-error-focus":ko("error-60"),"border-error-focus-strong":ko("error-40"),"border-error-strong":ko("error-40"),"border-info":ko("info-60"),bg:ko("white"),"bg-strong":ko("neutral-100"),"bg-stronger":ko("neutral-95"),"bg-strongest":ko("neutral-90"),"bg-hover":ko("primary-95"),"bg-hover-strong":ko("primary-90"),"bg-hover-subtle":ko("primary-100"),"bg-hover-neutral":ko("neutral-100"),"bg-hover-neutral-strong":ko("neutral-90"),"bg-selected":ko("primary-95"),"bg-selected-hover":ko("primary-90"),"bg-selected-strong":ko("primary-90"),"bg-selected-stronger":ko("primary-70"),"bg-selected-strongest":ko("primary-50"),"bg-selected-strongest-hover":ko("primary-40"),"bg-disabled":ko("neutral-95"),"bg-selected-disabled":ko("neutral-95"),"bg-selected-stronger-disabled":ko("neutral-70"),"bg-success":ko("success-100"),"bg-success-hover":ko("success-95"),"bg-success-strong":ko("success-50"),"bg-success-strong-hover":ko("success-40"),"bg-warning":ko("warning-100"),"bg-warning-hover":ko("warning-95"),"bg-warning-strong":ko("warning-50"),"bg-warning-strong-hover":ko("warning-40"),"bg-info":ko("info-100"),"bg-info-hover":ko("info-95"),"bg-info-strong":ko("info-50"),"bg-info-strong-hover":ko("info-40"),"bg-error":ko("error-100"),"bg-error-hover":ko("error-95"),"bg-error-strong":ko("error-50"),"bg-error-strong-hover":ko("error-40"),"bg-inverse":ko("neutral-20"),"bg-inverse-subtle":ko("neutral-30"),"bg-inverse-subtler":ko("neutral-50"),"bg-inverse-subtlest":ko("neutral-60"),"bg-inverse-hover":ko("neutral-40"),"bg-primary":ko("primary-50"),"bg-primary-subtle":ko("primary-60"),"bg-primary-subtler":ko("primary-95"),"bg-primary-subtlest":ko("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":ko("primary-40"),"bg-primary-subtlest-hover":ko("primary-90"),"bg-primary-subtlest-selected":ko("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:ko("primary-50"),"hyperlink-hover":ko("primary-40"),"hyperlink-visited":ko("primary-40"),"hyperlink-inverse":ko("primary-inverse"),"focus-ring":ko("primary-50"),"focus-ring-inverse":ko("white")},Mo={text:ko("neutral-100"),"text-subtle":ko("neutral-80"),"text-subtler":ko("neutral-60"),"text-subtlest":ko("neutral-50"),"text-primary":ko("primary-60"),"text-primary-strongest":ko("primary-90"),"text-hover":ko("primary-70"),"text-selected":ko("primary-60"),"text-selected-hover":ko("primary-70"),"text-disabled":ko("neutral-60"),"text-disabled-subtle":ko("neutral-50"),"text-disabled-subtlest":ko("neutral-30"),"text-selected-disabled":ko("neutral-90"),"text-success":ko("success-70"),"text-warning":ko("warning-70"),"text-error":ko("error-70"),"text-info":ko("info-70"),"text-inverse":ko("black"),icon:ko("neutral-60"),"icon-subtle":ko("neutral-50"),"icon-strongest":ko("neutral-90"),"icon-primary":ko("primary-60"),"icon-primary-subtle":ko("primary-50"),"icon-primary-subtlest":ko("primary-40"),"icon-hover":ko("primary-70"),"icon-selected":ko("primary-60"),"icon-selected-hover":ko("primary-70"),"icon-disabled":ko("neutral-60"),"icon-disabled-subtle":ko("neutral-50"),"icon-selected-disabled":ko("neutral-50"),"icon-success":ko("success-60"),"icon-warning":ko("warning-50"),"icon-error":ko("error-60"),"icon-error-strong":ko("error-70"),"icon-info":ko("info-60"),"icon-inverse":ko("black"),"icon-primary-inverse":ko("primary-inverse"),border:ko("neutral-20"),"border-strong":ko("neutral-40"),"border-stronger":ko("neutral-60"),"border-primary":ko("primary-60"),"border-primary-subtle":ko("primary-50"),"border-hover":ko("primary-20"),"border-hover-strong":ko("primary-50"),"border-selected":ko("primary-60"),"border-selected-subtle":ko("primary-40"),"border-selected-subtlest":ko("primary-20"),"border-selected-hover":ko("primary-70"),"border-focus":ko("primary-50"),"border-focus-strong":ko("primary-60"),"border-disabled":ko("neutral-20"),"border-selected-disabled":ko("neutral-40"),"border-success":ko("success-50"),"border-warning":ko("warning-50"),"border-error":ko("error-50"),"border-error-focus":ko("error-50"),"border-error-focus-strong":ko("error-70"),"border-error-strong":ko("error-70"),"border-info":ko("info-50"),bg:ko("black"),"bg-strong":ko("neutral-10"),"bg-stronger":ko("neutral-20"),"bg-strongest":ko("neutral-20"),"bg-hover":ko("primary-20"),"bg-hover-strong":ko("primary-20"),"bg-hover-subtle":ko("primary-10"),"bg-hover-neutral":ko("neutral-10"),"bg-hover-neutral-strong":ko("neutral-20"),"bg-selected":ko("primary-20"),"bg-selected-hover":ko("primary-20"),"bg-selected-strong":ko("primary-20"),"bg-selected-stronger":ko("primary-40"),"bg-selected-strongest":ko("primary-60"),"bg-selected-strongest-hover":ko("primary-70"),"bg-disabled":ko("neutral-20"),"bg-selected-disabled":ko("neutral-20"),"bg-selected-stronger-disabled":ko("neutral-40"),"bg-success":ko("success-10"),"bg-success-hover":ko("success-20"),"bg-success-strong":ko("success-60"),"bg-success-strong-hover":ko("success-70"),"bg-warning":ko("warning-10"),"bg-warning-hover":ko("warning-20"),"bg-warning-strong":ko("warning-60"),"bg-warning-strong-hover":ko("warning-70"),"bg-info":ko("info-10"),"bg-info-hover":ko("info-20"),"bg-info-strong":ko("info-60"),"bg-info-strong-hover":ko("info-70"),"bg-error":ko("error-10"),"bg-error-hover":ko("error-20"),"bg-error-strong":ko("error-60"),"bg-error-strong-hover":ko("error-70"),"bg-inverse":ko("neutral-90"),"bg-inverse-subtle":ko("neutral-80"),"bg-inverse-subtler":ko("neutral-60"),"bg-inverse-subtlest":ko("neutral-50"),"bg-inverse-hover":ko("neutral-70"),"bg-primary":ko("primary-60"),"bg-primary-subtle":ko("primary-50"),"bg-primary-subtler":ko("primary-20"),"bg-primary-subtlest":ko("primary-10"),"bg-available":"#185339","bg-primary-hover":ko("primary-70"),"bg-primary-subtlest-hover":ko("primary-20"),"bg-primary-subtlest-selected":ko("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:ko("primary-60"),"hyperlink-hover":ko("primary-70"),"hyperlink-visited":ko("primary-70"),"hyperlink-inverse":ko("primary-inverse"),"focus-ring":ko("primary-60"),"focus-ring-inverse":ko("black")},jo={collections:{lifesg:To,bookingsg:To,rbs:To,mylegacy:To,ccube:To,oneservice:To,pa:Ao,a11yplayground:Io,supportgowhere:To,imda:To,spf:To},defaultValue:"lifesg"},Lo={collections:{lifesg:zo,bookingsg:zo,rbs:zo,mylegacy:zo,ccube:zo,oneservice:zo,pa:zo,a11yplayground:Mo,supportgowhere:zo,imda:zo,spf:zo},defaultValue:"lifesg"},_o=e=>r=>{var t;const n=r.theme,o="dark"===(null==n?void 0:n.colourMode),i=uo(o?Lo:jo,null==n?void 0:n.colourScheme),a=o?"semanticColourDark":"semanticColour",s=null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t[a],l=s?co(i,e,s):i[e];return"function"==typeof l?l(r):l},Ro={text:_o("text"),"text-subtle":_o("text-subtle"),"text-subtler":_o("text-subtler"),"text-subtlest":_o("text-subtlest"),"text-primary":_o("text-primary"),"text-primary-strongest":_o("text-primary-strongest"),"text-hover":_o("text-hover"),"text-selected":_o("text-selected"),"text-selected-hover":_o("text-selected-hover"),"text-disabled":_o("text-disabled"),"text-disabled-subtle":_o("text-disabled-subtle"),"text-disabled-subtlest":_o("text-disabled-subtlest"),"text-selected-disabled":_o("text-selected-disabled"),"text-success":_o("text-success"),"text-warning":_o("text-warning"),"text-error":_o("text-error"),"text-info":_o("text-info"),"text-inverse":_o("text-inverse"),icon:_o("icon"),"icon-subtle":_o("icon-subtle"),"icon-strongest":_o("icon-strongest"),"icon-primary":_o("icon-primary"),"icon-primary-subtle":_o("icon-primary-subtle"),"icon-primary-subtlest":_o("icon-primary-subtlest"),"icon-hover":_o("icon-hover"),"icon-selected":_o("icon-selected"),"icon-selected-hover":_o("icon-selected-hover"),"icon-disabled":_o("icon-disabled"),"icon-disabled-subtle":_o("icon-disabled-subtle"),"icon-selected-disabled":_o("icon-selected-disabled"),"icon-success":_o("icon-success"),"icon-warning":_o("icon-warning"),"icon-error":_o("icon-error"),"icon-error-strong":_o("icon-error-strong"),"icon-info":_o("icon-info"),"icon-inverse":_o("icon-inverse"),"icon-primary-inverse":_o("icon-primary-inverse"),border:_o("border"),"border-strong":_o("border-strong"),"border-stronger":_o("border-stronger"),"border-primary":_o("border-primary"),"border-primary-subtle":_o("border-primary-subtle"),"border-hover":_o("border-hover"),"border-hover-strong":_o("border-hover-strong"),"border-selected":_o("border-selected"),"border-selected-subtle":_o("border-selected-subtle"),"border-selected-subtlest":_o("border-selected-subtlest"),"border-selected-hover":_o("border-selected-hover"),"border-focus":_o("border-focus"),"border-focus-strong":_o("border-focus-strong"),"border-disabled":_o("border-disabled"),"border-selected-disabled":_o("border-selected-disabled"),"border-success":_o("border-success"),"border-warning":_o("border-warning"),"border-error":_o("border-error"),"border-error-focus":_o("border-error-focus"),"border-error-focus-strong":_o("border-error-focus-strong"),"border-error-strong":_o("border-error-strong"),"border-info":_o("border-info"),bg:_o("bg"),"bg-strong":_o("bg-strong"),"bg-stronger":_o("bg-stronger"),"bg-strongest":_o("bg-strongest"),"bg-hover":_o("bg-hover"),"bg-hover-strong":_o("bg-hover-strong"),"bg-hover-subtle":_o("bg-hover-subtle"),"bg-hover-neutral":_o("bg-hover-neutral"),"bg-hover-neutral-strong":_o("bg-hover-neutral-strong"),"bg-selected":_o("bg-selected"),"bg-selected-hover":_o("bg-selected-hover"),"bg-selected-strong":_o("bg-selected-strong"),"bg-selected-stronger":_o("bg-selected-stronger"),"bg-selected-strongest":_o("bg-selected-strongest"),"bg-selected-strongest-hover":_o("bg-selected-strongest-hover"),"bg-disabled":_o("bg-disabled"),"bg-selected-disabled":_o("bg-selected-disabled"),"bg-selected-stronger-disabled":_o("bg-selected-stronger-disabled"),"bg-success":_o("bg-success"),"bg-success-hover":_o("bg-success-hover"),"bg-success-strong":_o("bg-success-strong"),"bg-success-strong-hover":_o("bg-success-strong-hover"),"bg-warning":_o("bg-warning"),"bg-warning-hover":_o("bg-warning-hover"),"bg-warning-strong":_o("bg-warning-strong"),"bg-warning-strong-hover":_o("bg-warning-strong-hover"),"bg-info":_o("bg-info"),"bg-info-hover":_o("bg-info-hover"),"bg-info-strong":_o("bg-info-strong"),"bg-info-strong-hover":_o("bg-info-strong-hover"),"bg-error":_o("bg-error"),"bg-error-hover":_o("bg-error-hover"),"bg-error-strong":_o("bg-error-strong"),"bg-error-strong-hover":_o("bg-error-strong-hover"),"bg-inverse":_o("bg-inverse"),"bg-inverse-subtle":_o("bg-inverse-subtle"),"bg-inverse-subtler":_o("bg-inverse-subtler"),"bg-inverse-subtlest":_o("bg-inverse-subtlest"),"bg-inverse-hover":_o("bg-inverse-hover"),"bg-primary":_o("bg-primary"),"bg-primary-subtle":_o("bg-primary-subtle"),"bg-primary-subtler":_o("bg-primary-subtler"),"bg-primary-subtlest":_o("bg-primary-subtlest"),"bg-available":_o("bg-available"),"bg-primary-hover":_o("bg-primary-hover"),"bg-primary-subtlest-hover":_o("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":_o("bg-primary-subtlest-selected"),"overlay-strong":_o("overlay-strong"),"overlay-subtle":_o("overlay-subtle"),hyperlink:_o("hyperlink"),"hyperlink-hover":_o("hyperlink-hover"),"hyperlink-visited":_o("hyperlink-visited"),"hyperlink-inverse":_o("hyperlink-inverse"),"focus-ring":_o("focus-ring"),"focus-ring-inverse":_o("focus-ring-inverse")},Ho={collections:{default:{solid:e=>r=>{var t,n,o;const{thickness:i,radius:a,colour:s}=e||{},l=null!==(t="function"==typeof i?i(r):i+"px")&&void 0!==t?t:mo["width-010"](r),d=null!==(n="function"==typeof a?a(r):a+"px")&&void 0!==n?n:0,c=null!==(o="function"==typeof s?s(r):s)&&void 0!==o?o:Ro.border(r),u=mo.solid;return F`
            border: ${l} ${u} ${c};
            border-radius: ${d};
        `},"dashed-default":e=>r=>{var t,n,o;const{thickness:i,radius:a,colour:s}=e||{},l=null!==(t="function"==typeof i?i(r):i)&&void 0!==t?t:mo["width-010"](r),d=null!==(n="function"==typeof a?a(r):a)&&void 0!==n?n:0,c=null!==(o="function"==typeof s?s(r):s)&&void 0!==o?o:Ro.border(r),u=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${d}' ry='${d}' stroke='${c}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return F`
            background-image: url("data:image/svg+xml,${u}");
            border-radius: ${d};
        `}}},defaultValue:"default"},Po=e=>1===e.length&&"theme"in e[0],Wo=e=>(...r)=>t=>{const n=Po(r)?[]:r,o=Po(r)?r[0]:t,i=o.theme;return(0,uo(Ho,null==i?void 0:i.borderScheme)[e])(...n)(o)},No={solid:Wo("solid"),"dashed-default":Wo("dashed-default")},Vo={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":480,"md-min":481,"md-max":768,"lg-min":769,"lg-max":1200,"xl-min":1201,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},Yo=e=>r=>{var t;const n=r.theme,o=uo(Vo,null==n?void 0:n.breakpointScheme);let i;return i=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.breakpoint)?co(o,e,n.overrides.breakpoint):o[e],i},Uo={"xxs-min":Yo("xxs-min"),"xxs-max":Yo("xxs-max"),"xs-min":Yo("xs-min"),"xs-max":Yo("xs-max"),"sm-min":Yo("sm-min"),"sm-max":Yo("sm-max"),"md-min":Yo("md-min"),"md-max":Yo("md-max"),"lg-min":Yo("lg-min"),"lg-max":Yo("lg-max"),"xl-min":Yo("xl-min"),"xl-max":Yo("xl-max"),"xxl-min":Yo("xxl-min"),"xxs-column":Yo("xxs-column"),"xs-column":Yo("xs-column"),"sm-column":Yo("sm-column"),"md-column":Yo("md-column"),"lg-column":Yo("lg-column"),"xl-column":Yo("xl-column"),"xxl-column":Yo("xxl-column"),"xxs-gutter":Yo("xxs-gutter"),"xs-gutter":Yo("xs-gutter"),"sm-gutter":Yo("sm-gutter"),"md-gutter":Yo("md-gutter"),"lg-gutter":Yo("lg-gutter"),"xl-gutter":Yo("xl-gutter"),"xxl-gutter":Yo("xxl-gutter"),"xxs-margin":Yo("xxs-margin"),"xs-margin":Yo("xs-margin"),"sm-margin":Yo("sm-margin"),"md-margin":Yo("md-margin"),"lg-margin":Yo("lg-margin"),"xl-margin":Yo("xl-margin"),"xxl-margin":Yo("xxl-margin")},qo=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,t)=>(r[t]=((e,r)=>{const t=Uo["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const n=t(r);return`@media screen and (${e}: ${n}px)`}})(e,t),r)),{}),Go={MaxWidth:qo("max-width"),MinWidth:qo("min-width")},Zo={collections:{default:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},bookingsg:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},mylegacy:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0.009rem"},pa:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.5rem","heading-size-sm":"1.25rem","heading-size-xs":"1rem","heading-lh-xxl":"3rem","heading-lh-xl":"2.5rem","heading-lh-lg":"2.25rem","heading-lh-md":"2rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.032rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.625rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.25rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},a11yplayground:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Atkinson Hyperlegible Next","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0.009rem"},supportgowhere:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Libre Franklin","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},sgwdigitallobby:{"heading-size-xxl":"3.75rem","heading-size-xl":"3rem","heading-size-lg":"2.5rem","heading-size-md":"2rem","heading-size-sm":"1.625rem","heading-size-xs":"1.375rem","heading-lh-xxl":"4.5rem","heading-lh-xl":"3.5rem","heading-lh-lg":"3rem","heading-lh-md":"2.5rem","heading-lh-sm":"2.25rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.035em","heading-ls-lg":"-0.02rem","heading-ls-md":"-0.02rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Libre Franklin","body-size-baseline":"1.375rem","body-size-md":"1.2rem","body-size-sm":"1.125rem","body-size-xs":"1rem","body-lh-baseline":"1.75rem","body-lh-md":"1.625rem","body-lh-sm":"1.625rem","body-lh-xs":"1.5rem","body-ls-baseline":"0rem","body-ls-md":"0rem","body-ls-sm":"0rem","body-ls-xs":"0.009rem","form-label-size":"1.25rem","form-description-size":"1.125rem","form-label-lh":"1.625rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0rem"},imda:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Montserrat","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},spf:{"heading-size-xxl":"3.75rem","heading-size-xl":"3rem","heading-size-lg":"2.5rem","heading-size-md":"2rem","heading-size-sm":"1.75rem","heading-size-xs":"1.5rem","heading-lh-xxl":"4.5rem","heading-lh-xl":"3.5rem","heading-lh-lg":"3rem","heading-lh-md":"2.25rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Public Sans","body-size-baseline":"1.2rem","body-size-md":"1.125rem","body-size-sm":"1rem","body-size-xs":"0.875rem","body-lh-baseline":"1.5rem","body-lh-md":"1.5rem","body-lh-sm":"1.5rem","body-lh-xs":"1.125rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},oneservice:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.375rem","heading-size-sm":"1.125rem","heading-size-xs":"1rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.625rem","heading-lh-md":"2rem","heading-lh-sm":"1.625rem","heading-lh-xs":"1.5rem","heading-ls-xxl":"0rem","heading-ls-xl":"0rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.75rem","body-lh-baseline":"1.5rem","body-lh-md":"1.313rem","body-lh-sm":"1.125rem","body-lh-xs":"1.125rem","body-ls-baseline":"0rem","body-ls-md":"0rem","body-ls-sm":"0rem","body-ls-xs":"0rem","form-label-size":"0.875rem","form-description-size":"0.875rem","form-label-lh":"1.313rem","form-description-lh":"1.313rem","form-label-ls":"0rem","form-description-ls":"0rem"}},defaultValue:"default"},Ko=e=>r=>{var t;const n=r.theme,o=uo(Zo,null==n?void 0:n.fontScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.fontSpec)?co(o,e,n.overrides.fontSpec):o[e]},Xo={"heading-size-xxl":Ko("heading-size-xxl"),"heading-size-xl":Ko("heading-size-xl"),"heading-size-lg":Ko("heading-size-lg"),"heading-size-md":Ko("heading-size-md"),"heading-size-sm":Ko("heading-size-sm"),"heading-size-xs":Ko("heading-size-xs"),"heading-lh-xxl":Ko("heading-lh-xxl"),"heading-lh-xl":Ko("heading-lh-xl"),"heading-lh-lg":Ko("heading-lh-lg"),"heading-lh-md":Ko("heading-lh-md"),"heading-lh-sm":Ko("heading-lh-sm"),"heading-lh-xs":Ko("heading-lh-xs"),"heading-ls-xxl":Ko("heading-ls-xxl"),"heading-ls-xl":Ko("heading-ls-xl"),"heading-ls-lg":Ko("heading-ls-lg"),"heading-ls-md":Ko("heading-ls-md"),"heading-ls-sm":Ko("heading-ls-sm"),"heading-ls-xs":Ko("heading-ls-xs"),"weight-light":Ko("weight-light"),"weight-regular":Ko("weight-regular"),"weight-semibold":Ko("weight-semibold"),"weight-bold":Ko("weight-bold"),"font-family":Ko("font-family"),"body-size-baseline":Ko("body-size-baseline"),"body-size-md":Ko("body-size-md"),"body-size-sm":Ko("body-size-sm"),"body-size-xs":Ko("body-size-xs"),"body-lh-baseline":Ko("body-lh-baseline"),"body-lh-md":Ko("body-lh-md"),"body-lh-sm":Ko("body-lh-sm"),"body-lh-xs":Ko("body-lh-xs"),"body-ls-baseline":Ko("body-ls-baseline"),"body-ls-md":Ko("body-ls-md"),"body-ls-sm":Ko("body-ls-sm"),"body-ls-xs":Ko("body-ls-xs"),"form-label-size":Ko("form-label-size"),"form-description-size":Ko("form-description-size"),"form-label-lh":Ko("form-label-lh"),"form-description-lh":Ko("form-description-lh"),"form-label-ls":Ko("form-label-ls"),"form-description-ls":Ko("form-description-ls")},Qo=(e,r,t,n,o)=>{const{disableLigatures:i}=o||{};return F`
        font-family: ${Ko("font-family")};
        font-size: ${Ko(e)};
        font-weight: ${Ko(r)};
        line-height: ${Ko(t)};
        letter-spacing: ${Ko(n)};

        font-variant: ${i?"no-common-ligatures":"normal"};
    `},Jo=(e={})=>({"heading-xxl-light":Qo("heading-size-xxl","weight-light","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-regular":Qo("heading-size-xxl","weight-regular","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-semibold":Qo("heading-size-xxl","weight-semibold","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-bold":Qo("heading-size-xxl","weight-bold","heading-lh-xxl","heading-ls-xxl",e),"heading-xl-light":Qo("heading-size-xl","weight-light","heading-lh-xl","heading-ls-xl",e),"heading-xl-regular":Qo("heading-size-xl","weight-regular","heading-lh-xl","heading-ls-xl",e),"heading-xl-semibold":Qo("heading-size-xl","weight-semibold","heading-lh-xl","heading-ls-xl",e),"heading-xl-bold":Qo("heading-size-xl","weight-bold","heading-lh-xl","heading-ls-xl",e),"heading-lg-light":Qo("heading-size-lg","weight-light","heading-lh-lg","heading-ls-lg",e),"heading-lg-regular":Qo("heading-size-lg","weight-regular","heading-lh-lg","heading-ls-lg",e),"heading-lg-semibold":Qo("heading-size-lg","weight-semibold","heading-lh-lg","heading-ls-lg",e),"heading-lg-bold":Qo("heading-size-lg","weight-bold","heading-lh-lg","heading-ls-lg",e),"heading-md-light":Qo("heading-size-md","weight-light","heading-lh-md","heading-ls-md",e),"heading-md-regular":Qo("heading-size-md","weight-regular","heading-lh-md","heading-ls-md",e),"heading-md-semibold":Qo("heading-size-md","weight-semibold","heading-lh-md","heading-ls-md",e),"heading-md-bold":Qo("heading-size-md","weight-bold","heading-lh-md","heading-ls-md",e),"heading-sm-light":Qo("heading-size-sm","weight-light","heading-lh-sm","heading-ls-sm",e),"heading-sm-regular":Qo("heading-size-sm","weight-regular","heading-lh-sm","heading-ls-sm",e),"heading-sm-semibold":Qo("heading-size-sm","weight-semibold","heading-lh-sm","heading-ls-sm",e),"heading-sm-bold":Qo("heading-size-sm","weight-bold","heading-lh-sm","heading-ls-sm",e),"heading-xs-light":Qo("heading-size-xs","weight-light","heading-lh-xs","heading-ls-xs",e),"heading-xs-regular":Qo("heading-size-xs","weight-regular","heading-lh-xs","heading-ls-xs",e),"heading-xs-semibold":Qo("heading-size-xs","weight-semibold","heading-lh-xs","heading-ls-xs",e),"heading-xs-bold":Qo("heading-size-xs","weight-bold","heading-lh-xs","heading-ls-xs",e),"body-baseline-light":Qo("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline",e),"body-baseline-regular":Qo("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline",e),"body-baseline-semibold":Qo("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline",e),"body-baseline-bold":Qo("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline",e),"body-md-light":Qo("body-size-md","weight-light","body-lh-md","body-ls-md",e),"body-md-regular":Qo("body-size-md","weight-regular","body-lh-md","body-ls-md",e),"body-md-semibold":Qo("body-size-md","weight-semibold","body-lh-md","body-ls-md",e),"body-md-bold":Qo("body-size-md","weight-bold","body-lh-md","body-ls-md",e),"body-sm-light":Qo("body-size-sm","weight-light","body-lh-sm","body-ls-sm",e),"body-sm-regular":Qo("body-size-sm","weight-regular","body-lh-sm","body-ls-sm",e),"body-sm-semibold":Qo("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm",e),"body-sm-bold":Qo("body-size-sm","weight-bold","body-lh-sm","body-ls-sm",e),"body-xs-light":Qo("body-size-xs","weight-light","body-lh-xs","body-ls-xs",e),"body-xs-regular":Qo("body-size-xs","weight-regular","body-lh-xs","body-ls-xs",e),"body-xs-semibold":Qo("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs",e),"body-xs-bold":Qo("body-size-xs","weight-bold","body-lh-xs","body-ls-xs",e),"form-label":Qo("form-label-size","weight-semibold","form-label-lh","form-label-ls",e),"form-description":Qo("form-description-size","weight-regular","form-description-lh","form-description-ls",e)}),ei=Jo({disableLigatures:!0}),ri=Jo(),ti=Jo({disableLigatures:!0}),ni=Jo({disableLigatures:!0}),oi=Jo({disableLigatures:!0}),ii={collections:{default:ri,bookingsg:ei,mylegacy:ri,pa:ti,a11yplayground:ni,supportgowhere:oi,sgwdigitallobby:oi,imda:Jo({disableLigatures:!0}),spf:Jo({disableLigatures:!0}),oneservice:Jo()},defaultValue:"default"},ai=e=>r=>{var t;const n=r.theme,o=uo(ii,null==n?void 0:n.fontScheme),i=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.font)?co(o,e,n.overrides.font):o[e];return"function"==typeof i?i(r):i},si={"heading-xxl-light":ai("heading-xxl-light"),"heading-xxl-regular":ai("heading-xxl-regular"),"heading-xxl-semibold":ai("heading-xxl-semibold"),"heading-xxl-bold":ai("heading-xxl-bold"),"heading-xl-light":ai("heading-xl-light"),"heading-xl-regular":ai("heading-xl-regular"),"heading-xl-semibold":ai("heading-xl-semibold"),"heading-xl-bold":ai("heading-xl-bold"),"heading-lg-light":ai("heading-lg-light"),"heading-lg-regular":ai("heading-lg-regular"),"heading-lg-semibold":ai("heading-lg-semibold"),"heading-lg-bold":ai("heading-lg-bold"),"heading-md-light":ai("heading-md-light"),"heading-md-regular":ai("heading-md-regular"),"heading-md-semibold":ai("heading-md-semibold"),"heading-md-bold":ai("heading-md-bold"),"heading-sm-light":ai("heading-sm-light"),"heading-sm-regular":ai("heading-sm-regular"),"heading-sm-semibold":ai("heading-sm-semibold"),"heading-sm-bold":ai("heading-sm-bold"),"heading-xs-light":ai("heading-xs-light"),"heading-xs-regular":ai("heading-xs-regular"),"heading-xs-semibold":ai("heading-xs-semibold"),"heading-xs-bold":ai("heading-xs-bold"),"body-baseline-light":ai("body-baseline-light"),"body-baseline-regular":ai("body-baseline-regular"),"body-baseline-semibold":ai("body-baseline-semibold"),"body-baseline-bold":ai("body-baseline-bold"),"body-md-light":ai("body-md-light"),"body-md-regular":ai("body-md-regular"),"body-md-semibold":ai("body-md-semibold"),"body-md-bold":ai("body-md-bold"),"body-sm-light":ai("body-sm-light"),"body-sm-regular":ai("body-sm-regular"),"body-sm-semibold":ai("body-sm-semibold"),"body-sm-bold":ai("body-sm-bold"),"body-xs-light":ai("body-xs-light"),"body-xs-regular":ai("body-xs-regular"),"body-xs-semibold":ai("body-xs-semibold"),"body-xs-bold":ai("body-xs-bold"),"form-label":ai("form-label"),"form-description":ai("form-description")},li={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},di=e=>r=>{var t;const n=r.theme,o=uo(li,null==n?void 0:n.motionScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.motion)?co(o,e,n.overrides.motion):o[e]},ci={"duration-150":di("duration-150"),"duration-250":di("duration-250"),"duration-350":di("duration-350"),"duration-500":di("duration-500"),"duration-800":di("duration-800"),"duration-1000":di("duration-1000"),"ease-default":di("ease-default"),"ease-standard":di("ease-standard"),"ease-entrance":di("ease-entrance"),"ease-exit":di("ease-exit")},ui={collections:{default:{none:0,xs:2,sm:4,md:8,lg:12,full:9999},spf:{none:0,xs:2,sm:8,md:8,lg:12,full:9999}},defaultValue:"default"},gi=e=>r=>{var t;const n=r.theme,o=uo(ui,null==n?void 0:n.radiusScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.radius)?`${co(o,e,n.overrides.radius)}px`:`${o[e]}px`},hi={none:gi("none"),xs:gi("xs"),sm:gi("sm"),md:gi("md"),lg:gi("lg"),full:gi("full")},mi=(e,r,t)=>n=>{const o=_o(r)(n)||ko(r)(n);return`${e} rgba(from ${o} r g b / ${100*t}%)`},fi={collections:{default:{"xs-subtle":mi("0 0 4px 1px","neutral-50",.24),"xs-strong":mi("0 0 4px 1px","neutral-50",.5),"xs-focus-strong":mi("0 0 4px 1px","border-focus",.5),"xs-error-strong":mi("0 0 4px 1px","border-error",.5),"sm-subtle":mi("0 2px 4px 0","neutral-50",.24),"sm-strong":mi("0 2px 4px 0","neutral-50",.5),"md-subtle":mi("0 2px 8px 0","neutral-50",.24),"md-strong":mi("0 2px 8px 0","neutral-50",.5),"lg-subtle":mi("0 2px 12px 1px","neutral-50",.24),"lg-strong":mi("0 2px 12px 1px","neutral-50",.5)}},defaultValue:"default"},bi=e=>r=>{var t;const n=r.theme,o=uo(fi,null==n?void 0:n.shadowScheme),i=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.shadow)?co(o,e,n.overrides.shadow):o[e];return"function"==typeof i?i(r):i},pi={"xs-subtle":bi("xs-subtle"),"xs-strong":bi("xs-strong"),"xs-focus-strong":bi("xs-focus-strong"),"xs-error-strong":bi("xs-error-strong"),"sm-subtle":bi("sm-subtle"),"sm-strong":bi("sm-strong"),"md-subtle":bi("md-subtle"),"md-strong":bi("md-strong"),"lg-subtle":bi("lg-subtle"),"lg-strong":bi("lg-strong")},yi={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},vi=e=>r=>{var t;const n=r.theme,o=uo(yi,null==n?void 0:n.spacingScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.spacing)?`${co(o,e,n.overrides.spacing)}px`:`${o[e]}px`},xi={"spacing-0":vi("spacing-0"),"spacing-4":vi("spacing-4"),"spacing-8":vi("spacing-8"),"spacing-12":vi("spacing-12"),"spacing-16":vi("spacing-16"),"spacing-20":vi("spacing-20"),"spacing-24":vi("spacing-24"),"spacing-32":vi("spacing-32"),"spacing-40":vi("spacing-40"),"spacing-48":vi("spacing-48"),"spacing-64":vi("spacing-64"),"spacing-72":vi("spacing-72"),"layout-xs":vi("layout-xs"),"layout-sm":vi("layout-sm"),"layout-md":vi("layout-md"),"layout-lg":vi("layout-lg"),"layout-xl":vi("layout-xl"),"layout-xxl":vi("layout-xxl"),"layout-xxxl":vi("layout-xxxl")},wi=(e,r)=>Object.assign(Object.assign({},e),{colourMode:r}),$i=Object.assign(Object.assign({},Ro),{Primitive:Oo}),Fi=Object.assign(Object.assign({},si),{Spec:Xo}),Ci=ci,Ei=Object.assign(Object.assign({},mo),{Util:No}),Si=xi,Di=hi,Bi=pi,ki=Uo,Oi=Go,Ti={colourScheme:"lifesg",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"lifesg",componentScheme:"lifesg",_v2:{colorScheme:"base",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"base"}},zi={colourScheme:"bookingsg",fontScheme:"bookingsg",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"bookingsg",_v2:{colorScheme:"bookingsg",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"bookingsg"}},Ai={colourScheme:"ccube",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"ccube",_v2:{colorScheme:"ccube",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"ccube"}},Ii={colourScheme:"mylegacy",fontScheme:"mylegacy",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"mylegacy",_v2:{colorScheme:"mylegacy",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"mylegacy"}},Mi={colourScheme:"rbs",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"rbs",_v2:{colorScheme:"rbs",textStyleScheme:"base",designTokenScheme:"rbs",resourceScheme:"rbs"}},ji={colourScheme:"oneservice",fontScheme:"oneservice",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"oneservice"},Li={colourScheme:"pa",fontScheme:"pa",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"pa",componentScheme:"pa"},_i={colourScheme:"a11yplayground",fontScheme:"a11yplayground",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"a11yplayground",componentScheme:"a11yplayground"},Ri={colourScheme:"supportgowhere",fontScheme:"supportgowhere",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"supportgowhere",componentScheme:"default"},Hi={colourScheme:"supportgowhere",fontScheme:"sgwdigitallobby",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"supportgowhere",componentScheme:"default"},Pi={colourScheme:"imda",fontScheme:"imda",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"imda",componentScheme:"default"},Wi={colourScheme:"spf",fontScheme:"spf",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"spf",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"spf",componentScheme:"spf"};Object.assign(Object.assign({},Ti),{light:wi(Ti,"light"),dark:wi(Ti,"dark")}),Object.assign(Object.assign({},zi),{light:wi(zi,"light"),dark:wi(zi,"dark")}),Object.assign(Object.assign({},Ai),{light:wi(Ai,"light"),dark:wi(Ai,"dark")}),Object.assign(Object.assign({},Ii),{light:wi(Ii,"light"),dark:wi(Ii,"dark")}),Object.assign(Object.assign({},Mi),{light:wi(Mi,"light"),dark:wi(Mi,"dark")}),Object.assign(Object.assign({},ji),{light:wi(ji,"light"),dark:wi(ji,"dark")}),Object.assign(Object.assign({},Li),{light:wi(Li,"light"),dark:wi(Li,"dark")}),Object.assign(Object.assign({},_i),{light:wi(_i,"light"),dark:wi(_i,"dark")}),Object.assign(Object.assign({},Ri),{light:wi(Ri,"light"),dark:wi(Ri,"dark")}),Object.assign(Object.assign({},Hi),{light:wi(Hi,"light"),dark:wi(Hi,"dark")}),Object.assign(Object.assign({},Pi),{light:wi(Pi,"light"),dark:wi(Pi,"dark")}),Object.assign(Object.assign({},Wi),{light:wi(Wi,"light"),dark:wi(Wi,"dark")});const Ni=e=>F`
    display: -webkit-box;
    -webkit-line-clamp: ${e};
    -webkit-box-orient: vertical;
    overflow: hidden;
`,Vi=(e,r,t=!1)=>F`
        ${Fi[`${e}-${r}`]}
        ${t?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `,Yi=e=>{if(e)return F`
            ${Ni(e)}
        `},Ui=(e,r,t,n,o)=>F`
    ${Vi(e,r||"regular",n)}
    ${((e=!1,r=!1,t)=>r?F`
            display: block;
            ${Yi(t)}
        `:e?F`
            display: inline;
        `:F`
            display: block;
            ${Yi(t)}
        `)(t,n,o)}
    color: ${$i.text};
`,qi=$.div`
    ${e=>Ui(e.$textStyle,e.$weight,e.$inline,e.$paragraph,e.$maxLines)}
`,Gi=$.a`
    ${e=>{var r;return F`
        ${Vi(e.$textStyle,e.$weight||"regular")}
        color: ${$i.hyperlink};
        text-decoration: ${null!==(r=e.$underlineStyle)&&void 0!==r?r:"underline"};

        &:hover,
        &:active,
        &:focus {
            color: ${$i["text-hover"]};
        }
    `}}
`,Zi=$(B)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`;var Ki;!function(t){const n=(r,t,n)=>{const i=(n,o)=>{var{weight:i,inline:a,paragraph:s,maxLines:l}=n,d=oe(n,["weight","inline","paragraph","maxLines"]);return e(qi,Object.assign({ref:o,as:a?"span":r,$textStyle:t,$weight:i,$inline:a,$paragraph:s,$maxLines:l},d))};return i.displayName=`Typography.${n}`,o.forwardRef(i)};t.HeadingXXL=n("h1","heading-xxl","HeadingXXL"),t.HeadingXL=n("h2","heading-xl","HeadingXL"),t.HeadingLG=n("h3","heading-lg","HeadingLG"),t.HeadingMD=n("h4","heading-md","HeadingMD"),t.HeadingSM=n("h5","heading-sm","HeadingSM"),t.HeadingXS=n("h6","heading-xs","HeadingXS");const i=(r,t)=>{const n=(t,n)=>{var{weight:o,inline:i,paragraph:a,maxLines:s}=t,l=oe(t,["weight","inline","paragraph","maxLines"]);return e(qi,Object.assign({ref:n,as:i?"span":"p",$textStyle:r,$weight:o,$inline:i,$paragraph:a,$maxLines:s},l))};return n.displayName=`Typography.${t}`,o.forwardRef(n)};t.BodyBL=i("body-baseline","BodyBL"),t.BodyMD=i("body-md","BodyMD"),t.BodySM=i("body-sm","BodySM"),t.BodyXS=i("body-xs","BodyXS");const a=(t,n)=>{const i=(n,o)=>{var{weight:i,children:a,external:s,underlineStyle:l="underline"}=n,d=oe(n,["weight","children","external","underlineStyle"]);return r(Gi,Object.assign({ref:o,$textStyle:t,$weight:i,$underlineStyle:l},d,{children:[a,s&&e(Zi,{})]}))};return i.displayName=`Typography.${n}`,o.forwardRef(i)};t.LinkBL=a("body-baseline","LinkBL"),t.LinkMD=a("body-md","LinkMD"),t.LinkSM=a("body-sm","LinkSM"),t.LinkXS=a("body-xs","LinkXS")}(Ki||(Ki={}));const Xi=$.div`
    border-radius: ${Di.md};
    background: ${$i.bg};
    padding: ${Si["spacing-16"]} ${Si["spacing-32"]};
    ${e=>{var r;return"dark"===(null===(r=e.theme)||void 0===r?void 0:r.colourMode)?F`
                  border: ${Ei["width-010"]} ${Ei.solid}
                      ${$i.border};
              `:F`
                  box-shadow: ${Bi["md-subtle"]};
              `}}
`,Qi=$.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${Si["spacing-24"]};
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
                background-color: ${$i["bg-hover-neutral"]};
            `}
    }
`,Ji=o.forwardRef(((r,t)=>{var{children:n,focusHighlight:o=!0,focusOutline:i="none",type:a="button"}=r,s=oe(r,["children","focusHighlight","focusOutline","type"]);return e(Qi,Object.assign({ref:t,$outline:i,$highlight:o,type:a},s,{children:n}))})),ea=$.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${$i.bg};
    box-shadow: ${Bi["lg-strong"]};
    border-radius: ${Di.lg};
    overflow: hidden;

    ${Oi.MaxWidth.md} {
        width: 90%;
        max-height: 70%;
    }
`,ra=$(Ji)`
    position: absolute;
    top: var(--close-button-top-inset, ${Si["spacing-16"]});
    right: var(--close-button-right-inset, ${Si["spacing-16"]});
    padding: 0;
    color: ${$i.icon};

    svg {
        height: 2rem;
        width: 2rem;
    }

    ${Oi.MaxWidth.sm} {
        right: var(--close-button-right-inset, ${Si["spacing-20"]});
    }
`,ta=e=>{const{textSize:r}=e||{};return F`
        // Text styling
        ${r&&Fi[`${r}-regular`]}

        strong {
            font-weight: ${Fi.Spec["weight-semibold"]};
            ${r&&Fi[`${r}-semibold`]};
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-weight: ${Fi.Spec["weight-semibold"]};
            ${r&&Fi[`${r}-semibold`]}
            color: ${$i.hyperlink};
            text-decoration: underline;

            svg {
                color: ${$i["icon-primary"]};
                height: 1lh;
                width: 1em;
                margin-left: 0.4rem;
                vertical-align: middle;
            }

            &:hover,
            &:active,
            &:visited,
            &:focus {
                color: ${$i["hyperlink-hover"]};

                svg {
                    color: ${$i["icon-hover"]};
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
`,$((r=>{var{children:t}=r,n=oe(r,["children"]);const o=n["data-testid"]||"card";return e(Xi,Object.assign({},n,{"data-testid":o,children:"string"==typeof t?e(Ki.BodyBL,{children:t}):t}))}))`
    color: ${$i.text};
    ${ta({textSize:"body-md"})}

    ${Oi.MaxWidth.sm} {
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
        background: ${$i["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: ${Di.full};
        background-clip: padding-box;
    }
`,$((t=>{var{id:n="modal-box",children:o,onClose:i,showCloseButton:a=!0}=t,s=oe(t,["id","children","onClose","showCloseButton"]);return r(ea,Object.assign({"data-testid":n},s,{onClick:e=>{e.stopPropagation()},children:[a&&e(ra,{onClick:i,"data-testid":"close-button",focusHighlight:!1,focusOutline:"browser",children:e(k,{})}),o]}))}))`
    padding: 3.5rem 1.25rem 2.5rem;
`,$.div`
    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    color: ${$i.text};
    ${ta({textSize:"body-md"})}
`;const na=$.div`
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
`,oa=$.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${e=>e.$stacked?$i["overlay-subtle"]:$i["overlay-strong"]};
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
`;var ia;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(ia||(ia={}));const aa=({show:r=!1,rootId:t,onOverlayClick:n,children:i,backgroundOpacity:l,backgroundBlur:d=!0,disableTransition:c=!1,enableOverlayClick:u=!1,zIndex:h,id:m})=>{const[f,b]=s(null),[p,y]=s(),[v]=s((()=>Oe.generate())),x=z(),w=a(),$=a(null),F=i&&o.cloneElement(i,{ref:$}),C=m?`lifesg-ds-overlay-root-${m}`:"lifesg-ds-overlay-root",E=null!=h?h:p?99999:99998;(e=>{const r=O();g((()=>{if(!r)return;const t={zIndex:e};r.events.emit(ia.Change,t)}),[r,e]),g((()=>{if(!r)return;const t=()=>{const t={zIndex:e};r.events.emit(ia.Change,t)};return null==r||r.events.on(ia.Ready,t),()=>null==r?void 0:r.events.off(ia.Ready,t)}),[r,e])})(E),g((()=>(T(),b(B()),()=>{L(),M().length<1&&(_("remove"),H(),I("remove"))})),[]),g((()=>{if(r){const e=k();S(e),j(),D()&&1===M().length&&(R(),_("add"));const r=setTimeout((()=>{I("add")}),200);return()=>clearTimeout(r)}{L(),D()&&M().length<1&&(_("remove"),H());const e=setTimeout((()=>{M().length<1&&I("remove")}),200);return()=>clearTimeout(e)}}),[r]);const S=e=>{w.current=e,y(e)},D=()=>/(iPad|iPhone|iPod)/g.test(navigator.userAgent),B=()=>document&&t?document.getElementById(t):document?document.body:null,k=()=>M().length>0,T=()=>{if(!document.getElementById(la)){const e=document.createElement("style");e.id=la;const r=document.documentElement.clientWidth,t=window.innerWidth-r;e.innerHTML=`\n\t\t\t\t.${da} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${t}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${da}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\n\t\t\t\t.${ca} {\n\t\t\t\t\tposition: fixed;\n\t\t\t\t\ttop: var(${ua}, 0);\n\t\t\t\t\tbottom: 0;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},I=e=>{const r=document.body.classList.contains(da);"add"!==e||r?"remove"===e&&r&&document.body.classList.remove(da):document.body.classList.add(da)},M=()=>{const e=document.body.dataset.lifesgDsOverlayOrder;return e?e.split(","):[]},j=()=>{const e=M();document.body.dataset.lifesgDsOverlayOrder=[...e,v].join(",")},L=()=>{const e=M();document.body.dataset.lifesgDsOverlayOrder=e.filter((e=>e!==v)).join(",")},_=e=>{if(!D())return;const r=document.body.classList.contains(ca);"add"!==e||r?"remove"===e&&r&&document.body.classList.remove(ca):document.body.classList.add(ca)},R=()=>{const e=document.body.style,r=e.top?e.top:window.scrollY+"px";document.body.style.setProperty(ua,r)},H=()=>{const e=document.body.style.getPropertyValue(ua);requestAnimationFrame((()=>{window.scrollTo({top:parseFloat(e)})}))},P=e=>{var r;const t=null===(r=$.current)||void 0===r?void 0:r.firstChild;t&&t.contains(e.target)||n&&u&&(e.preventDefault(),n())};return f?G.createPortal(e(na,{id:C,"data-testid":C,$show:r,$zIndex:E,children:i&&e(A,{id:x,children:e(oa,{"data-testid":"overlay-wrapper",$show:r,$stacked:p,$backgroundBlur:d,$disableTransition:c,onClick:P,children:F})})}),f):null},sa=r=>e(T,{children:e(aa,Object.assign({},r))}),la="lifesg-ds-overlay-stylesheet",da="lifesg-ds-overlay-open",ca="lifesg-ds-overlay-scroll-lock",ua="--lifesg-ds-overlay-scroll-y",ga=f({onClose:()=>{}}),ha=$.div`
    position: relative;
    width: 100%;
    height: 100%;

    overflow: auto;

    ${Oi.MaxWidth.sm} {
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
            transition: all ${Ci["duration-250"]}
                ${Ci["ease-entrance"]}
            transition-delay: ${Ci["duration-150"]};
        }

        &[data-status="close"] {
            opacity: 0;
            ${e.$animationFrom}: -3%;
            transition: all ${Ci["duration-250"]}
                ${Ci["ease-exit"]};
        }
    `}
`,ma=$.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100%;
    pointer-events: none;
`,fa=$.div`
    pointer-events: auto;
    width: 100%;
    outline: none;
`,ba=$.div`
    width: 40rem;
    margin: ${Si["spacing-64"]} auto;
    background: ${$i.bg};
    box-shadow: ${Bi["xs-strong"]};
    border-radius: ${Di.lg};

    display: flex;
    flex-direction: column-reverse;

    max-width: calc(100% - ${ki["xxl-margin"]}px * 2);

    ${Oi.MaxWidth.xl} {
        max-width: calc(100% - ${ki["xl-margin"]}px * 2);
    }

    ${Oi.MaxWidth.lg} {
        max-width: calc(100% - ${ki["lg-margin"]}px * 2);
    }

    ${Oi.MaxWidth.md} {
        max-width: calc(100% - ${ki["md-margin"]}px * 2);
    }

    ${Oi.MaxWidth.sm} {
        max-width: calc(100% - ${ki["sm-margin"]}px * 2);
    }

    ${Oi.MaxWidth.xs} {
        max-width: calc(100% - ${ki["xs-margin"]}px * 2);
    }

    ${Oi.MaxWidth.xxs} {
        max-width: calc(100% - ${ki["xxs-margin"]}px * 2);
    }
`,pa=$.div`
    margin-right: ${Si["spacing-16"]};
    margin-left: auto;
    margin-top: ${Si["spacing-16"]};
    margin-bottom: ${Si["spacing-16"]};
`,ya=$(Ji)`
    padding: 0;
    color: ${$i.icon};

    svg {
        height: 2rem;
        width: 2rem;
    }
`,va=$.div`
    margin-right: ${Si["spacing-64"]};
    margin-left: ${Si["spacing-64"]};

    ${Oi.MaxWidth.sm} {
        margin-right: ${Si["spacing-20"]};
        margin-left: ${Si["spacing-20"]};
    }
`,xa=$.div`
    margin-right: ${Si["spacing-64"]};
    margin-left: ${Si["spacing-64"]};

    ${Oi.MaxWidth.sm} {
        margin-right: ${Si["spacing-20"]};
        margin-left: ${Si["spacing-20"]};
    }

    display: flex;
    flex-direction: row-reverse; /* primary button on right */
    column-gap: ${Si["spacing-32"]};
    row-gap: ${Si["spacing-16"]};

    & > button {
        flex: 1;
    }

    ${Oi.MaxWidth.md} {
        flex-direction: column;
    }
`,wa=$.div`
    :where(& > ${va}:last-child) {
        margin-bottom: ${Si["spacing-64"]};
    }

    :where(& > ${xa}:not(:first-child)) {
        margin-top: ${Si["spacing-32"]};
    }

    :where(& > ${xa}:last-child) {
        margin-bottom: ${Si["spacing-64"]};
    }

    ${e=>e.$hasCloseButton?F`
                  :where(& > ${va}:first-child),
                  :where(& > ${xa}:first-child) {
                      margin-top: 0;
                  }
              `:F`
                  :where(& > ${va}:first-child),
                  :where(& > ${xa}:first-child) {
                      margin-top: ${Si["spacing-64"]};
                  }
              `}
`,$a=r=>{var{"data-testid":t="modal-close-button"}=r,n=oe(r,["data-testid"]);const{onClose:o}=b(ga);return e(pa,Object.assign({"data-testid":t},n,{children:e(ya,{onClick:o,"data-testid":"close-button",focusHighlight:!1,focusOutline:"browser","aria-label":"Close button",children:e(k,{"aria-hidden":!0})})}))};$a.displayName="ModalV2.CloseButton";const Fa=r=>{var{"data-testid":t="modal-content",children:n}=r,o=oe(r,["data-testid","children"]);return e(va,Object.assign({"data-testid":t},o,{children:n}))};Fa.displayName="ModalV2.Content";const Ca=e=>{var{"data-testid":t="modal-footer",primaryButton:n,secondaryButton:o}=e,i=oe(e,["data-testid","primaryButton","secondaryButton"]);return r(xa,Object.assign({"data-testid":t},i,{children:[n,o]}))};Ca.displayName="ModalV2.Footer";const Ea=e=>{var{id:t,"data-testid":n="modal-card",children:i}=e,a=oe(e,["id","data-testid","children"]);const s=e=>o.Children.toArray(i).find((r=>((e,r)=>C(e.type)?e.type.target===r:e.type===r)(r,e))),l=s($a),d=s(Fa),c=s(Ca),u=!!l;return r(ba,Object.assign({id:t,"data-testid":n},a,{onClick:e=>{e.stopPropagation()},children:[r(wa,{$hasCloseButton:u,children:[d,c]}),u&&l]}))};Ea.displayName="ModalV2.Card",Object.assign((r=>{var{id:t,show:n,onClose:o,animationFrom:i="bottom",children:a,enableOverlayClick:l=!0,rootComponentId:d,zIndex:c,onOverlayClick:u,dismissKeyboardOnShow:h=!0,"data-testid":f="modal"}=r,b=oe(r,["id","show","onClose","animationFrom","children","enableOverlayClick","rootComponentId","zIndex","onOverlayClick","dismissKeyboardOnShow","data-testid"]);const{verticalHeight:p,offsetTop:y}=(()=>{const[e,r]=s(),[t,n]=s(),o=m((()=>{const e=.01*window.innerHeight;r(e)}),[]),i=m((()=>{if(window.visualViewport){const e=.01*window.visualViewport.height;r(e),n(window.visualViewport.offsetTop)}}),[]);return g((()=>window.visualViewport?(i(),window.visualViewport.addEventListener("resize",i),()=>{var e;null===(e=window.visualViewport)||void 0===e||e.removeEventListener("resize",i)}):(o(),window.addEventListener("resize",o),()=>{window.removeEventListener("resize",o)})),[]),{verticalHeight:e,offsetTop:t}})(),{refs:v,context:x}=I({open:n,onOpenChange:e=>{e||null==o||o()}}),{isMounted:w,status:$}=M(x,{duration:300}),F=j(x,{outsidePress:!1,enabled:!!o}),{getFloatingProps:C}=L([F]);return g((()=>{var e,r;n&&h&&(null===(r=null===(e=document.activeElement)||void 0===e?void 0:e.blur)||void 0===r||r.call(e))}),[h,n]),e(sa,{"data-testid":`${f}-overlay`,show:w,enableOverlayClick:l,onOverlayClick:u,id:t,rootId:d,zIndex:c,children:e(ha,Object.assign({$show:w,$animationFrom:i,"data-testid":f,$verticalHeight:p,$offsetTop:y},b,{"data-status":$,children:e(ga.Provider,{value:{onClose:o},children:w&&e(_,{context:x,initialFocus:v.floating,children:e(ma,{children:e(fa,Object.assign({ref:v.setFloating},C(),{"aria-modal":!0,role:"dialog",children:a}))})})})}))})}),{Card:Ea,CloseButton:$a,Content:Fa,Footer:Ca}),$.div`
    display: inline;
    width: fit-content;
    cursor: pointer;
    position: relative;
`;const Sa=e=>{switch(e){case"underline":return"text-decoration: underline 1px;";case"underline-dashed":return"text-decoration: underline dashed 1px;"}};$.span`
    color: ${$i["text-primary"]};
    font-weight: 600;
    text-underline-position: under;

    ${({$defaultStyle:e})=>Sa(e)}

    &:hover,
    &:focus-visible {
        color: ${$i["text-hover"]};
        ${({$hoverStyle:e})=>Sa(e)}
    }

    svg {
        height: 1lh; // align vertically
        width: 1em; // scale icon with font size
        vertical-align: top;
    }
`,$.span`
    ${e=>!e.$standalone&&"margin-left: 0.25rem;"}
`,$.div`
    padding-left: ${Si["spacing-4"]};
    display: inline;
`,$.div`
    margin-bottom: ${Si["spacing-8"]};
`,$.label`
    color: ${$i["text-subtle"]};
    display: inline-block;

    ${Fi["form-label"]}
    ${ta()}
    font-weight: ${Fi.Spec["weight-semibold"]};
`;const Da=$(K)`
    height: 1lh;
    width: 1em;
    flex-shrink: 0;
    color: ${$i["icon-error-strong"]};
`,Ba=$.div`
    ${Fi["body-sm-semibold"]}
    display: flex;
    gap: ${Si["spacing-4"]};
    margin-top: ${Si["spacing-8"]};
`,ka=$.p`
    color: ${$i["text-error"]};
    margin-bottom: 0;
    outline: none;
`;$.span`
    ${Fi["form-description"]}
    color: ${$i["text-subtler"]};
    display: block;
`;const Oa=t=>r(Ba,{children:[e(Da,{"aria-hidden":!0}),e(ka,Object.assign({},t))]}),Ta=$.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,za=E`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Aa=$.div`
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
    animation: ${za} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Ia=$(Aa)`
    animation-delay: -0.45s;
`,Ma=$(Aa)`
    animation-delay: -0.3s;
`,ja=$(Aa)`
    animation-delay: -0.15s;
`,La=({color:t,className:n,size:o})=>r(Ta,{className:n,$size:o,$color:t,"data-testid":"component-loading-spinner",children:[e(Aa,{id:"inner1"}),e(Ia,{id:"inner2"}),e(Ma,{id:"inner3"}),e(ja,{id:"inner4"})]}),_a={Button:{"button-radius":hi.md,"button-default-colour-bg":Ro["bg-primary"],"button-default-colour-bg-hover":Ro["bg-primary-hover"],"button-default-colour-text":Ro["text-inverse"],"button-secondary-colour-border":Ro["border-primary"],"button-secondary-colour-text":Ro["text-primary"],"button-light-colour-text":Ro["text-primary"],"button-link-colour-text":Ro["text-primary"]},Animation:{"loading-dots-spinner-colour":Ro["icon-primary"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"2rem","navbar-compressed-height":"4rem","navbar-compressed-logo-height":"1.5rem","navbar-mobile-height":"3.5rem","navbar-mobile-logo-height":"1.5rem","navbar-colour-bg":Ro.bg,"navbar-colour-icon":Ro.icon,"navbar-link-colour-text":Ro.text,"navbar-link-colour-text-hover":Ro["text-hover"],"navbar-link-colour-text-selected-hover":Ro["text-selected-hover"]},Footer:{"footer-colour-bg":Ro["bg-strong"],"footer-colour-text":Ro.text,"footer-link-colour-text":Ro.text,"footer-link-colour-text-hover":Ro["text-hover"],"footer-disclaimer-link-colour-text":Ro.text,"footer-disclaimer-link-colour-text-hover":Ro["text-subtler"]}},Ra={Button:{"button-radius":hi.sm,"button-default-colour-bg":Ro["bg-primary"],"button-default-colour-bg-hover":Ro["bg-primary-hover"],"button-default-colour-text":Ro["text-inverse"],"button-secondary-colour-border":Ro["border-primary"],"button-secondary-colour-text":Ro["text-primary"],"button-light-colour-text":Ro["text-primary"],"button-link-colour-text":Ro["text-primary"]},Animation:{"loading-dots-spinner-colour":Ro["icon-primary"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"2rem","navbar-compressed-height":"4rem","navbar-compressed-logo-height":"1.5rem","navbar-mobile-height":"3.5rem","navbar-mobile-logo-height":"1.5rem","navbar-colour-bg":Ro.bg,"navbar-colour-icon":Ro.icon,"navbar-link-colour-text":Ro.text,"navbar-link-colour-text-hover":Ro["text-hover"],"navbar-link-colour-text-selected-hover":Ro["text-selected-hover"]},Footer:{"footer-colour-bg":Ro["bg-strong"],"footer-colour-text":Ro.text,"footer-link-colour-text":Ro.text,"footer-link-colour-text-hover":Ro["text-hover"],"footer-disclaimer-link-colour-text":Ro.text,"footer-disclaimer-link-colour-text-hover":Ro["text-subtler"]}},Ha={Button:{"button-radius":hi.sm,"button-default-colour-bg":Ro["bg-primary"],"button-default-colour-bg-hover":Ro["bg-primary-hover"],"button-default-colour-text":Ro["text-inverse"],"button-secondary-colour-border":Ro["border-primary"],"button-secondary-colour-text":Ro["text-primary"],"button-light-colour-text":Ro["text-primary"],"button-link-colour-text":Ro["text-primary"]},Animation:{"loading-dots-spinner-colour":$i.Primitive["brand-50"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"2rem","navbar-compressed-height":"4rem","navbar-compressed-logo-height":"1.5rem","navbar-mobile-height":"3.5rem","navbar-mobile-logo-height":"1.5rem","navbar-colour-bg":Ro.bg,"navbar-colour-icon":Ro.icon,"navbar-link-colour-text":Ro.text,"navbar-link-colour-text-hover":Ro["text-hover"],"navbar-link-colour-text-selected-hover":Ro["text-selected-hover"]},Footer:{"footer-colour-bg":Ro["bg-strong"],"footer-colour-text":Ro.text,"footer-link-colour-text":Ro.text,"footer-link-colour-text-hover":Ro["text-hover"],"footer-disclaimer-link-colour-text":Ro.text,"footer-disclaimer-link-colour-text-hover":Ro["text-subtler"]}},Pa={collections:{default:Ra,pa:{Button:{"button-radius":hi.full,"button-default-colour-bg":Ro["bg-primary"],"button-default-colour-bg-hover":Ro["bg-primary-hover"],"button-default-colour-text":Ro["text-inverse"],"button-secondary-colour-border":Ro["border-primary"],"button-secondary-colour-text":Ro["text-primary"],"button-light-colour-text":Ro["text-primary"],"button-link-colour-text":Ro["text-primary"]},Animation:{"loading-dots-spinner-colour":Ro["icon-primary"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"2rem","navbar-compressed-height":"4rem","navbar-compressed-logo-height":"1.5rem","navbar-mobile-height":"3.5rem","navbar-mobile-logo-height":"1.5rem","navbar-colour-bg":Ro.bg,"navbar-colour-icon":Ro.icon,"navbar-link-colour-text":Ro.text,"navbar-link-colour-text-hover":Ro["text-hover"],"navbar-link-colour-text-selected-hover":Ro["text-selected-hover"]},Footer:{"footer-colour-bg":Ro["bg-strong"],"footer-colour-text":Ro.text,"footer-link-colour-text":Ro.text,"footer-link-colour-text-hover":Ro["text-hover"],"footer-disclaimer-link-colour-text":Ro.text,"footer-disclaimer-link-colour-text-hover":Ro["text-subtler"]}},a11yplayground:_a,lifesg:Ha,spf:{Button:{"button-radius":hi.md,"button-default-colour-bg":Ro["bg-primary"],"button-default-colour-bg-hover":Ro["bg-primary-hover"],"button-default-colour-text":Ro["text-inverse"],"button-secondary-colour-border":Ro["border-primary"],"button-secondary-colour-text":Ro["text-primary"],"button-light-colour-text":Ro["text-primary"],"button-link-colour-text":Ro["text-primary"]},Animation:{"loading-dots-spinner-colour":Ro["icon-primary"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"3rem","navbar-compressed-height":"5rem","navbar-compressed-logo-height":"2rem","navbar-mobile-height":"4rem","navbar-mobile-logo-height":"2rem","navbar-colour-bg":Ro.bg,"navbar-colour-icon":Ro.icon,"navbar-link-colour-text":Ro["text-primary-strongest"],"navbar-link-colour-text-hover":Ro["text-subtler"],"navbar-link-colour-text-selected-hover":Ro["text-subtler"]},Footer:{"footer-colour-bg":Ro["bg-inverse"],"footer-colour-text":Ro["text-inverse"],"footer-link-colour-text":Ro["text-inverse"],"footer-link-colour-text-hover":Ro["text-inverse"],"footer-disclaimer-link-colour-text":Ro["text-inverse"],"footer-disclaimer-link-colour-text-hover":Ro["text-inverse"]}}},defaultValue:"default"},Wa=(e,r)=>t=>{var n,o;const i=t.theme,a=uo(Pa,null==i?void 0:i.componentScheme);return Na((null===(o=null===(n=null==i?void 0:i.componentOverrides)||void 0===n?void 0:n[e])||void 0===o?void 0:o[r])||a[e][r],t)},Na=(e,r)=>{switch(typeof e){case"function":return e(r);case"number":return e+"px";case"string":return e}},Va=Wa("Button","button-radius"),Ya=Wa("Button","button-default-colour-bg"),Ua=Wa("Button","button-default-colour-bg-hover"),qa=Wa("Button","button-default-colour-text"),Ga=Wa("Button","button-secondary-colour-border"),Za=Wa("Button","button-secondary-colour-text"),Ka=Wa("Button","button-light-colour-text"),Xa=Wa("Button","button-link-colour-text"),Qa=$.button`
    padding: ${Si["spacing-8"]} ${Si["spacing-16"]};
    min-width: 4rem;
    border: ${Ei["width-010"]} ${Ei.solid} transparent;
    transition: all ${Ci["duration-250"]} ${Ci["ease-default"]};
    border-radius: ${Va};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return F`
                    background-color: ${$i.bg};
                    border-color: ${e.$buttonIsDanger?$i["border-error-strong"]:Ga};

                    color: ${e.$buttonIsDanger?$i["text-error"]:Za};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${$i["bg-hover-neutral"]};
                        }
                    }
                `;case"light":return F`
                    background-color: ${$i.bg};
                    border-color: ${$i.border};

                    color: ${e.$buttonIsDanger?$i["text-error"]:Ka};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${$i["bg-hover-neutral"]};
                        }
                    }
                `;case"link":return F`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?$i["text-error"]:Xa};
                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${$i["bg-hover-neutral"]};
                        }
                    }
                `;case"disabled":return F`
                    background-color: ${$i["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${$i["text-disabled"]};
                `;default:return F`
                    background-color: ${e.$buttonIsDanger?$i["bg-error-strong"]:Ya};

                    ${Oi.MaxWidth.sm} {
                        width: 100%;
                    }

                    color: ${qa};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${e.$buttonIsDanger?$i["bg-error-strong-hover"]:Ua};
                        }
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return F`
                    height: 2.5rem;
                    ${Fi["body-md-semibold"]}

                    ${Oi.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return F`
                    height: 4rem;
                    ${Fi["heading-md-semibold"]}

                    ${Oi.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return F`
                    height: 3rem;
                    ${Fi["heading-xs-semibold"]}

                    ${Oi.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,Ja=$(La)`
    margin-right: ${e=>e.$hasChildren?"0.5rem":"0"};
`,es=e=>o.Children.toArray(e).some((e=>"string"==typeof e?""!==e.trim():null!=e)),rs=(t,n)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:s="default",danger:l=!1,focusableWhenDisabled:d=!1,onClick:c}=t,u=oe(t,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),g={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return r(Qa,Object.assign({ref:n,"data-testid":u["data-testid"]||"button",disabled:i&&!d,"aria-disabled":i,"aria-busy":a,onClick:i?void 0:c},g,u,{children:[a&&e(Ja,{$hasChildren:es(o)}),e("span",{children:o})]}))};rs.displayName="Button.Default";const ts=(t,n)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:s="default",danger:l=!1,focusableWhenDisabled:d=!1,onClick:c}=t,u=oe(t,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),g={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return r(Qa,Object.assign({ref:n,"data-testid":u["data-testid"]||"button",disabled:i&&!d,"aria-disabled":i,"aria-busy":a,onClick:i?void 0:c},g,u,{children:[a&&e(Ja,{$hasChildren:es(o)}),e("span",{children:o})]}))};ts.displayName="Button.Small";const ns=(t,n)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:s="default",danger:l=!1,focusableWhenDisabled:d=!1,onClick:c}=t,u=oe(t,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),g={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"large",$buttonIsDanger:l};return r(Qa,Object.assign({ref:n,"data-testid":u["data-testid"]||"button",disabled:i&&!d,"aria-disabled":i,"aria-busy":a,onClick:i?void 0:c},g,u,{children:[a&&e(Ja,{$hasChildren:es(o)}),e("span",{children:o})]}))};ns.displayName="Button.Large";const os={Default:o.forwardRef(rs),Small:o.forwardRef(ts),Large:o.forwardRef(ns)},is=$.span`
    clip-path: inset(50%);
    height: 1px;
    width: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
`,as=(...e)=>e.filter((e=>!!e)).join(" "),ss=$.div`
    font-weight: ${e=>e.$bold?Fi.Spec["weight-semibold"]:Fi.Spec["weight-regular"]};

    ${e=>e.$disabled?F`
                color: ${$i["text-disabled"]};
            `:e.$selected?F`
                color: ${$i["text-selected"]};
            `:F`
                color: ${$i.text};
            `}
    width: 100%;

    ${e=>"end"===e.$truncateType&&Ni(e.$maxLines||2)}
    overflow-wrap: break-word;
`,ls=$.div`
    color: ${$i["text-subtlest"]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Ni(e.$maxLines||2)}
    overflow-wrap: break-word;

    ${e=>"next-line"===e.$labelDisplayType?F`
                    ${Fi["body-md-semibold"]}
                `:F`
                    ${Fi["body-baseline-regular"]}
                `}
`,ds=$.span`
    font-weight: ${Fi.Spec["weight-semibold"]};
`,cs=$.div`
    text-align: left;
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;

    ${e=>"small"===e.$variant?Fi["body-md-regular"]:Fi["body-baseline-regular"]}

    ${e=>{switch(e.$labelDisplayType){case"next-line":return F`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return F`
                    ${ss} {
                        display: inline;
                    }

                    ${ls} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,us=$.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    word-break: break-all;
    overflow: hidden;
`,gs=$.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,hs=({bold:n,displayType:o="inline",label:i,searchTerm:a,maxLines:s=2,selected:l,disabled:d,sublabel:c,truncationType:u="middle",variant:g="default"})=>{const h=b(S),f="small"===g?Fi.Spec["body-size-md"]({theme:h}):Fi.Spec["body-size-baseline"]({theme:h}),y=Fi.Spec["font-family"]({theme:h}),{ref:v,width:x}=Sr(),w=m((e=>{if("inline"!==o||!x)return!1;return Te.getTextWidth(e,`${f} '${y}'`)>x*s-50}),[x,o,f,y,s]),$=p((()=>w(i)),[w,i]),F=p((()=>c&&w(c)),[w,c]),C=n=>{if(!a)return n;const o=a.toLowerCase().trim(),s=n.toLowerCase().indexOf(o),l=s+a.length;return-1===s?n:r(t,{children:[i.slice(0,s),e(ds,{$variant:g,children:i.slice(s,l)}),i.slice(l)]})},E=n=>r(t,{children:[e(us,{$maxLines:s,"aria-hidden":!0,children:C(n)}),e(gs,{$maxLines:s,"aria-hidden":!0,children:C(n)})]});return r(cs,{ref:v,$labelDisplayType:$||F?"next-line":o,$variant:g,children:[e(ss,{"aria-label":i,$bold:n,$maxLines:s,$selected:l,$disabled:d,$truncateType:u,children:"middle"===u&&$?E(i):C(i)}),c&&e(ls,{"aria-label":c,$maxLines:s,$truncateType:u,$labelDisplayType:o,children:"middle"===u&&F?E(c):c})]})};var ms=mn;var fs=function(e){var r=this.__data__,t=r.delete(e);return this.size=r.size,t};var bs=function(e){return this.__data__.get(e)};var ps=function(e){return this.__data__.has(e)},ys=mn,vs=fn,xs=Mn;var ws=function(e,r){var t=this.__data__;if(t instanceof ys){var n=t.__data__;if(!vs||n.length<199)return n.push([e,r]),this.size=++t.size,this;t=this.__data__=new xs(n)}return t.set(e,r),this.size=t.size,this},$s=mn,Fs=function(){this.__data__=new ms,this.size=0},Cs=fs,Es=bs,Ss=ps,Ds=ws;function Bs(e){var r=this.__data__=new $s(e);this.size=r.size}Bs.prototype.clear=Fs,Bs.prototype.delete=Cs,Bs.prototype.get=Es,Bs.prototype.has=Ss,Bs.prototype.set=Ds;var ks=Bs;var Os=Mn,Ts=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},zs=function(e){return this.__data__.has(e)};function As(e){var r=-1,t=null==e?0:e.length;for(this.__data__=new Os;++r<t;)this.add(e[r])}As.prototype.add=As.prototype.push=Ts,As.prototype.has=zs;var Is=function(e,r){return e.has(r)},Ms=As,js=function(e,r){for(var t=-1,n=null==e?0:e.length;++t<n;)if(r(e[t],t,e))return!0;return!1},Ls=Is;var _s=function(e,r,t,n,o,i){var a=1&t,s=e.length,l=r.length;if(s!=l&&!(a&&l>s))return!1;var d=i.get(e),c=i.get(r);if(d&&c)return d==r&&c==e;var u=-1,g=!0,h=2&t?new Ms:void 0;for(i.set(e,r),i.set(r,e);++u<s;){var m=e[u],f=r[u];if(n)var b=a?n(f,m,u,r,e,i):n(m,f,u,e,r,i);if(void 0!==b){if(b)continue;g=!1;break}if(h){if(!js(r,(function(e,r){if(!Ls(h,r)&&(m===e||o(m,e,t,n,i)))return h.push(r)}))){g=!1;break}}else if(m!==f&&!o(m,f,t,n,i)){g=!1;break}}return i.delete(e),i.delete(r),g};var Rs=function(e){var r=-1,t=Array(e.size);return e.forEach((function(e,n){t[++r]=[n,e]})),t};var Hs=Lr.Uint8Array,Ps=Zt,Ws=_s,Ns=Rs,Vs=function(e){var r=-1,t=Array(e.size);return e.forEach((function(e){t[++r]=e})),t},Ys=_r?_r.prototype:void 0,Us=Ys?Ys.valueOf:void 0;var qs=function(e,r,t,n,o,i,a){switch(t){case"[object DataView]":if(e.byteLength!=r.byteLength||e.byteOffset!=r.byteOffset)return!1;e=e.buffer,r=r.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=r.byteLength||!i(new Hs(e),new Hs(r)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Ps(+e,+r);case"[object Error]":return e.name==r.name&&e.message==r.message;case"[object RegExp]":case"[object String]":return e==r+"";case"[object Map]":var s=Ns;case"[object Set]":var l=1&n;if(s||(s=Vs),e.size!=r.size&&!l)return!1;var d=a.get(e);if(d)return d==r;n|=2,a.set(e,r);var c=Ws(s(e),s(r),n,o,i,a);return a.delete(e),c;case"[object Symbol]":if(Us)return Us.call(e)==Us.call(r)}return!1};var Gs=function(e,r){for(var t=-1,n=r.length,o=e.length;++t<n;)e[o+t]=r[t];return e},Zs=Gs,Ks=Ar;var Xs=function(e,r,t){var n=r(e);return Ks(e)?n:Zs(n,t(e))};var Qs=function(e,r){for(var t=-1,n=null==e?0:e.length,o=0,i=[];++t<n;){var a=e[t];r(a,t,e)&&(i[o++]=a)}return i},Js=function(){return[]},el=Object.prototype.propertyIsEnumerable,rl=Object.getOwnPropertySymbols,tl=rl?function(e){return null==e?[]:(e=Object(e),Qs(rl(e),(function(r){return el.call(e,r)})))}:Js;var nl=function(e,r){for(var t=-1,n=Array(e);++t<e;)n[t]=r(t);return n},ol=Zr,il=Kr;var al=function(e){return il(e)&&"[object Arguments]"==ol(e)},sl=Kr,ll=Object.prototype,dl=ll.hasOwnProperty,cl=ll.propertyIsEnumerable,ul=al(function(){return arguments}())?al:function(e){return sl(e)&&dl.call(e,"callee")&&!cl.call(e,"callee")},gl={exports:{}};var hl=function(){return!1};!function(e,r){var t=Lr,n=hl,o=r&&!r.nodeType&&r,i=o&&e&&!e.nodeType&&e,a=i&&i.exports===o?t.Buffer:void 0,s=(a?a.isBuffer:void 0)||n;e.exports=s}(gl,gl.exports);var ml=gl.exports,fl=/^(?:0|[1-9]\d*)$/;var bl=function(e,r){var t=typeof e;return!!(r=null==r?9007199254740991:r)&&("number"==t||"symbol"!=t&&fl.test(e))&&e>-1&&e%1==0&&e<r};var pl=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},yl=Zr,vl=pl,xl=Kr,wl={};wl["[object Float32Array]"]=wl["[object Float64Array]"]=wl["[object Int8Array]"]=wl["[object Int16Array]"]=wl["[object Int32Array]"]=wl["[object Uint8Array]"]=wl["[object Uint8ClampedArray]"]=wl["[object Uint16Array]"]=wl["[object Uint32Array]"]=!0,wl["[object Arguments]"]=wl["[object Array]"]=wl["[object ArrayBuffer]"]=wl["[object Boolean]"]=wl["[object DataView]"]=wl["[object Date]"]=wl["[object Error]"]=wl["[object Function]"]=wl["[object Map]"]=wl["[object Number]"]=wl["[object Object]"]=wl["[object RegExp]"]=wl["[object Set]"]=wl["[object String]"]=wl["[object WeakMap]"]=!1;var $l=function(e){return xl(e)&&vl(e.length)&&!!wl[yl(e)]};var Fl=function(e){return function(r){return e(r)}},Cl={exports:{}};!function(e,r){var t=Ir,n=r&&!r.nodeType&&r,o=n&&e&&!e.nodeType&&e,i=o&&o.exports===n&&t.process,a=function(){try{var e=o&&o.require&&o.require("util").types;return e||i&&i.binding&&i.binding("util")}catch(e){}}();e.exports=a}(Cl,Cl.exports);var El=Cl.exports,Sl=$l,Dl=Fl,Bl=El&&El.isTypedArray,kl=Bl?Dl(Bl):Sl,Ol=nl,Tl=ul,zl=Ar,Al=ml,Il=bl,Ml=kl,jl=Object.prototype.hasOwnProperty;var Ll=function(e,r){var t=zl(e),n=!t&&Tl(e),o=!t&&!n&&Al(e),i=!t&&!n&&!o&&Ml(e),a=t||n||o||i,s=a?Ol(e.length,String):[],l=s.length;for(var d in e)!r&&!jl.call(e,d)||a&&("length"==d||o&&("offset"==d||"parent"==d)||i&&("buffer"==d||"byteLength"==d||"byteOffset"==d)||Il(d,l))||s.push(d);return s},_l=Object.prototype;var Rl=function(e){var r=e&&e.constructor;return e===("function"==typeof r&&r.prototype||_l)};var Hl=function(e,r){return function(t){return e(r(t))}}(Object.keys,Object),Pl=Rl,Wl=Hl,Nl=Object.prototype.hasOwnProperty;var Vl=function(e){if(!Pl(e))return Wl(e);var r=[];for(var t in Object(e))Nl.call(e,t)&&"constructor"!=t&&r.push(t);return r},Yl=dt,Ul=pl;var ql=function(e){return null!=e&&Ul(e.length)&&!Yl(e)},Gl=Ll,Zl=Vl,Kl=ql;var Xl=function(e){return Kl(e)?Gl(e):Zl(e)},Ql=Xs,Jl=tl,ed=Xl;var rd=function(e){return Ql(e,ed,Jl)},td=Object.prototype.hasOwnProperty;var nd=function(e,r,t,n,o,i){var a=1&t,s=rd(e),l=s.length;if(l!=rd(r).length&&!a)return!1;for(var d=l;d--;){var c=s[d];if(!(a?c in r:td.call(r,c)))return!1}var u=i.get(e),g=i.get(r);if(u&&g)return u==r&&g==e;var h=!0;i.set(e,r),i.set(r,e);for(var m=a;++d<l;){var f=e[c=s[d]],b=r[c];if(n)var p=a?n(b,f,c,r,e,i):n(f,b,c,e,r,i);if(!(void 0===p?f===b||o(f,b,t,n,i):p)){h=!1;break}m||(m="constructor"==c)}if(h&&!m){var y=e.constructor,v=r.constructor;y==v||!("constructor"in e)||!("constructor"in r)||"function"==typeof y&&y instanceof y&&"function"==typeof v&&v instanceof v||(h=!1)}return i.delete(e),i.delete(r),h},od=Bt(Lr,"DataView"),id=fn,ad=Bt(Lr,"Promise"),sd=Bt(Lr,"Set"),ld=Bt(Lr,"WeakMap"),dd=Zr,cd=mt,ud="[object Map]",gd="[object Promise]",hd="[object Set]",md="[object WeakMap]",fd="[object DataView]",bd=cd(od),pd=cd(id),yd=cd(ad),vd=cd(sd),xd=cd(ld),wd=dd;(od&&wd(new od(new ArrayBuffer(1)))!=fd||id&&wd(new id)!=ud||ad&&wd(ad.resolve())!=gd||sd&&wd(new sd)!=hd||ld&&wd(new ld)!=md)&&(wd=function(e){var r=dd(e),t="[object Object]"==r?e.constructor:void 0,n=t?cd(t):"";if(n)switch(n){case bd:return fd;case pd:return ud;case yd:return gd;case vd:return hd;case xd:return md}return r});var $d=ks,Fd=_s,Cd=qs,Ed=nd,Sd=wd,Dd=Ar,Bd=ml,kd=kl,Od="[object Arguments]",Td="[object Array]",zd="[object Object]",Ad=Object.prototype.hasOwnProperty;var Id=function(e,r,t,n,o,i){var a=Dd(e),s=Dd(r),l=a?Td:Sd(e),d=s?Td:Sd(r),c=(l=l==Od?zd:l)==zd,u=(d=d==Od?zd:d)==zd,g=l==d;if(g&&Bd(e)){if(!Bd(r))return!1;a=!0,c=!1}if(g&&!c)return i||(i=new $d),a||kd(e)?Fd(e,r,t,n,o,i):Cd(e,r,l,t,n,o,i);if(!(1&t)){var h=c&&Ad.call(e,"__wrapped__"),m=u&&Ad.call(r,"__wrapped__");if(h||m){var f=h?e.value():e,b=m?r.value():r;return i||(i=new $d),o(f,b,t,n,i)}}return!!g&&(i||(i=new $d),Ed(e,r,t,n,o,i))},Md=Kr;var jd=function e(r,t,n,o,i){return r===t||(null==r||null==t||!Md(r)&&!Md(t)?r!=r&&t!=t:Id(r,t,n,o,e,i))},Ld=ks,_d=jd;var Rd=function(e,r,t,n){var o=t.length,i=o,a=!n;if(null==e)return!i;for(e=Object(e);o--;){var s=t[o];if(a&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++o<i;){var l=(s=t[o])[0],d=e[l],c=s[1];if(a&&s[2]){if(void 0===d&&!(l in e))return!1}else{var u=new Ld;if(n)var g=n(d,c,l,e,r,u);if(!(void 0===g?_d(c,d,3,n,u):g))return!1}}return!0},Hd=it;var Pd=function(e){return e==e&&!Hd(e)},Wd=Pd,Nd=Xl;var Vd=function(e){for(var r=Nd(e),t=r.length;t--;){var n=r[t],o=e[n];r[t]=[n,o,Wd(o)]}return r};var Yd=function(e,r){return function(t){return null!=t&&(t[e]===r&&(void 0!==r||e in Object(t)))}},Ud=Rd,qd=Vd,Gd=Yd;var Zd=function(e,r){return null!=e&&r in Object(e)},Kd=eo,Xd=ul,Qd=Ar,Jd=bl,ec=pl,rc=to;var tc=function(e,r,t){for(var n=-1,o=(r=Kd(r,e)).length,i=!1;++n<o;){var a=rc(r[n]);if(!(i=null!=e&&t(e,a)))break;e=e[a]}return i||++n!=o?i:!!(o=null==e?0:e.length)&&ec(o)&&Jd(a,o)&&(Qd(e)||Xd(e))},nc=Zd,oc=tc;var ic=jd,ac=so,sc=function(e,r){return null!=e&&oc(e,r,nc)},lc=ot,dc=Pd,cc=Yd,uc=to;var gc=function(e){return function(r){return null==r?void 0:r[e]}},hc=io;var mc=gc,fc=function(e){return function(r){return hc(r,e)}},bc=ot,pc=to;var yc=function(e){var r=qd(e);return 1==r.length&&r[0][2]?Gd(r[0][0],r[0][1]):function(t){return t===e||Ud(t,e,r)}},vc=function(e,r){return lc(e)&&dc(r)?cc(uc(e),r):function(t){var n=ac(t,e);return void 0===n&&n===r?sc(t,e):ic(r,n,3)}},xc=function(e){return e},wc=Ar,$c=function(e){return bc(e)?mc(pc(e)):fc(e)};var Fc=function(e){return"function"==typeof e?e:null==e?xc:"object"==typeof e?wc(e)?vc(e[0],e[1]):yc(e):$c(e)},Cc=Fc,Ec=ql,Sc=Xl;var Dc=function(e){return function(r,t,n){var o=Object(r);if(!Ec(r)){var i=Cc(t);r=Sc(r),t=function(e){return i(o[e],e,o)}}var a=e(r,t,n);return a>-1?o[i?r[a]:a]:void 0}};var Bc=/\s/;var kc=function(e){for(var r=e.length;r--&&Bc.test(e.charAt(r)););return r},Oc=/^\s+/;var Tc=function(e){return e?e.slice(0,kc(e)+1).replace(Oc,""):e},zc=it,Ac=Jr,Ic=/^[-+]0x[0-9a-f]+$/i,Mc=/^0b[01]+$/i,jc=/^0o[0-7]+$/i,Lc=parseInt;var _c=function(e){if("number"==typeof e)return e;if(Ac(e))return NaN;if(zc(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=zc(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=Tc(e);var t=Mc.test(e);return t||jc.test(e)?Lc(e.slice(2),t?2:8):Ic.test(e)?NaN:+e},Rc=1/0;var Hc=function(e){return e?(e=_c(e))===Rc||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var Pc=function(e,r,t,n){for(var o=e.length,i=t+(n?1:-1);n?i--:++i<o;)if(r(e[i],i,e))return i;return-1},Wc=Fc,Nc=function(e){var r=Hc(e),t=r%1;return r==r?t?r-t:r:0},Vc=Math.max;var Yc=se(Dc((function(e,r,t){var n=null==e?0:e.length;if(!n)return-1;var o=null==t?0:Nc(t);return o<0&&(o=Vc(n+o,0)),Pc(e,Wc(r),o)}))),Uc=jd;var qc=se((function(e,r){return Uc(e,r)}));function Gc(e){return()=>e}function Zc(e){e()}function Kc(e,r){return t=>e(r(t))}function Xc(e,r){return()=>e(r)}function Qc(e,r){return t=>e(r,t)}function Jc(e){return void 0!==e}function eu(){}function ru(e,r){return r(e),e}function tu(e,r){return r(e)}function nu(...e){return e}function ou(e,r){return e(1,r)}function iu(e,r){e(0,r)}function au(e){e(2)}function su(e){return e(4)}function lu(e,r){return ou(e,Qc(r,0))}function du(e,r){const t=e(1,(e=>{t(),r(e)}));return t}function cu(e){let r,t;return n=>o=>{r=o,t&&clearTimeout(t),t=setTimeout((()=>{n(r)}),e)}}function uu(e,r){return e===r}function gu(e=uu){let r;return t=>n=>{e(r,n)||(r=n,t(n))}}function hu(e){return r=>t=>{e(t)&&r(t)}}function mu(e){return r=>Kc(r,e)}function fu(e){return r=>()=>{r(e)}}function bu(e,...r){const t=function(...e){return r=>e.reduceRight(tu,r)}(...r);return(r,n)=>{switch(r){case 2:return void au(e);case 1:return ou(e,t(n))}}}function pu(e,r){return t=>n=>{t(r=e(r,n))}}function yu(e){return r=>t=>{e>0?e--:r(t)}}function vu(e){let r,t=null;return n=>o=>{t=o,!r&&(r=setTimeout((()=>{r=void 0,n(t)}),e))}}function xu(...e){const r=new Array(e.length);let t=0,n=null;const o=Math.pow(2,e.length)-1;return e.forEach(((e,i)=>{const a=Math.pow(2,i);ou(e,(e=>{const s=t;t|=a,r[i]=e,s!==o&&t===o&&n&&(n(),n=null)}))})),e=>i=>{const a=()=>{e([i].concat(r))};t===o?a():n=a}}function wu(e){let r=e;const t=Fu();return(e,n)=>{switch(e){case 0:r=n;break;case 1:n(r);break;case 4:return r}return t(e,n)}}function $u(e,r){return ru(wu(r),(r=>lu(e,r)))}function Fu(){const e=[];return(r,t)=>{switch(r){case 0:return void e.slice().forEach((e=>{e(t)}));case 2:return void e.splice(0,e.length);case 1:return e.push(t),()=>{const r=e.indexOf(t);r>-1&&e.splice(r,1)}}}}function Cu(e){return ru(Fu(),(r=>lu(e,r)))}function Eu(e,r=[],{singleton:t}={singleton:!0}){return{constructor:e,dependencies:r,id:Su(),singleton:t}}const Su=()=>Symbol();function Du(...e){const r=Fu(),t=new Array(e.length);let n=0;const o=Math.pow(2,e.length)-1;return e.forEach(((e,i)=>{const a=Math.pow(2,i);ou(e,(e=>{t[i]=e,n|=a,n===o&&iu(r,t)}))})),function(e,i){switch(e){case 2:return void au(r);case 1:return n===o&&i(t),ou(r,i)}}}function Bu(e,r=uu){return bu(e,gu(r))}function ku(...e){return function(r,t){switch(r){case 2:return;case 1:return function(...e){return()=>{e.map(Zc)}}(...e.map((e=>ou(e,t))))}}}var Ou=(e=>(e[e.DEBUG=0]="DEBUG",e[e.INFO=1]="INFO",e[e.WARN=2]="WARN",e[e.ERROR=3]="ERROR",e))(Ou||{});const Tu={0:"debug",3:"error",1:"log",2:"warn"},zu=Eu((()=>{const e=wu(3);return{log:wu(((r,t,n=1)=>{var o;n>=(null!=(o=(typeof globalThis>"u"?window:globalThis).VIRTUOSO_LOG_LEVEL)?o:su(e))&&console[Tu[n]]("%creact-virtuoso: %c%s %o","color: #0253b3; font-weight: bold","color: initial",r,t)})),logLevel:e}}),[],{singleton:!0});function Au(e,r,t){return Iu(e,r,t).callbackRef}function Iu(e,r,t){const n=o.useRef(null);let i=e=>{};if(typeof ResizeObserver<"u"){const a=o.useMemo((()=>new ResizeObserver((r=>{const n=()=>{const t=r[0].target;null!==t.offsetParent&&e(t)};t?n():requestAnimationFrame(n)}))),[e]);i=e=>{e&&r?(a.observe(e),n.current=e):(n.current&&a.unobserve(n.current),n.current=null)}}return{callbackRef:i,ref:n}}function Mu(e,r,t,n,i,a,s,l,d){const c=o.useCallback((t=>{const o=function(e,r,t,n){const o=e.length;if(0===o)return null;const i=[];for(let a=0;a<o;a++){const o=e.item(a);if(void 0===o.dataset.index)continue;const s=parseInt(o.dataset.index),l=parseFloat(o.dataset.knownSize),d=r(o,t);if(0===d&&n("Zero-sized element, this should not happen",{child:o},Ou.ERROR),d===l)continue;const c=i[i.length-1];0===i.length||c.size!==d||c.endIndex!==s-1?i.push({endIndex:s,size:d,startIndex:s}):i[i.length-1].endIndex++}return i}(t.children,r,l?"offsetWidth":"offsetHeight",i);let d=t.parentElement;for(;!d.dataset.virtuosoScroller;)d=d.parentElement;const c="window"===d.lastElementChild.dataset.viewportType,u=s?l?s.scrollLeft:s.scrollTop:c?l?window.pageXOffset||document.documentElement.scrollLeft:window.pageYOffset||document.documentElement.scrollTop:l?d.scrollLeft:d.scrollTop,g=s?l?s.scrollWidth:s.scrollHeight:c?l?document.documentElement.scrollWidth:document.documentElement.scrollHeight:l?d.scrollWidth:d.scrollHeight,h=s?l?s.offsetWidth:s.offsetHeight:c?l?window.innerWidth:window.innerHeight:l?d.offsetWidth:d.offsetHeight;n({scrollHeight:g,scrollTop:Math.max(u,0),viewportHeight:h}),null==a||a(l?ju("column-gap",getComputedStyle(t).columnGap,i):ju("row-gap",getComputedStyle(t).rowGap,i)),null!==o&&e(o)}),[e,r,i,a,s,n]);return Iu(c,t,d)}function ju(e,r,t){return"normal"!==r&&!(null!=r&&r.endsWith("px"))&&t(`${e} was not resolved to pixel value correctly`,r,Ou.WARN),"normal"===r?0:parseInt(null!=r?r:"0",10)}function Lu(e,r,t){const n=o.useRef(null),i=o.useCallback((t=>{if(null==t||!t.offsetParent)return;const o=t.getBoundingClientRect(),i=o.width;let a,s;if(r){const e=r.getBoundingClientRect(),t=o.top-e.top;s=e.height-Math.max(0,t),a=t+r.scrollTop}else s=window.innerHeight-Math.max(0,o.top),a=o.top+window.pageYOffset;n.current={offsetTop:a,visibleHeight:s,visibleWidth:i},e(n.current)}),[e,r]),{callbackRef:a,ref:s}=Iu(i,!0,t),l=o.useCallback((()=>{i(s.current)}),[i,s]);return o.useEffect((()=>{if(r){r.addEventListener("scroll",l);const e=new ResizeObserver((()=>{requestAnimationFrame(l)}));return e.observe(r),()=>{r.removeEventListener("scroll",l),e.unobserve(r)}}return window.addEventListener("scroll",l),window.addEventListener("resize",l),()=>{window.removeEventListener("scroll",l),window.removeEventListener("resize",l)}}),[l,r]),a}const _u=Eu((()=>{const e=Fu(),r=Fu(),t=wu(0),n=Fu(),o=wu(0),i=Fu(),a=Fu(),s=wu(0),l=wu(0),d=wu(0),c=wu(0),u=Fu(),g=Fu(),h=wu(!1),m=wu(!1),f=wu(!1);return lu(bu(e,mu((({scrollTop:e})=>e))),r),lu(bu(e,mu((({scrollHeight:e})=>e))),a),lu(r,o),{deviation:t,fixedFooterHeight:d,fixedHeaderHeight:l,footerHeight:c,headerHeight:s,horizontalDirection:m,scrollBy:g,scrollContainerState:e,scrollHeight:a,scrollingInProgress:h,scrollTo:u,scrollTop:r,skipAnimationFrameInResizeObserver:f,smoothScrollTargetReached:n,statefulScrollTop:o,viewportHeight:i}}),[],{singleton:!0}),Ru={lvl:0};function Hu(e,r){const t=e.length;if(0===t)return[];let{index:n,value:o}=r(e[0]);const i=[];for(let a=1;a<t;a++){const{index:t,value:s}=r(e[a]);i.push({end:t-1,start:n,value:o}),n=t,o=s}return i.push({end:1/0,start:n,value:o}),i}function Pu(e){return e===Ru}function Wu(e,r){if(!Pu(e))return r===e.k?e.v:r<e.k?Wu(e.l,r):Wu(e.r,r)}function Nu(e,r,t="k"){if(Pu(e))return[-1/0,void 0];if(Number(e[t])===r)return[e.k,e.v];if(Number(e[t])<r){const n=Nu(e.r,r,t);return n[0]===-1/0?[e.k,e.v]:n}return Nu(e.l,r,t)}function Vu(e,r,t){return Pu(e)?rg(r,t,1):r===e.k?Xu(e,{k:r,v:t}):r<e.k?tg(Xu(e,{l:Vu(e.l,r,t)})):tg(Xu(e,{r:Vu(e.r,r,t)}))}function Yu(){return Ru}function Uu(e,r,t){if(Pu(e))return[];return function(e){return Hu(e,(({k:e,v:r})=>({index:e,value:r})))}(Zu(e,Nu(e,r)[0],t))}function qu(e,r){if(Pu(e))return Ru;const{k:t,l:n,r:o}=e;if(r===t){if(Pu(n))return o;if(Pu(o))return n;{const[r,t]=eg(n);return Ku(Xu(e,{k:r,l:Qu(n),v:t}))}}return Ku(Xu(e,r<t?{l:qu(n,r)}:{r:qu(o,r)}))}function Gu(e){return Pu(e)?[]:[...Gu(e.l),{k:e.k,v:e.v},...Gu(e.r)]}function Zu(e,r,t){if(Pu(e))return[];const{k:n,l:o,r:i,v:a}=e;let s=[];return n>r&&(s=s.concat(Zu(o,r,t))),n>=r&&n<=t&&s.push({k:n,v:a}),n<=t&&(s=s.concat(Zu(i,r,t))),s}function Ku(e){const{l:r,lvl:t,r:n}=e;if(n.lvl>=t-1&&r.lvl>=t-1)return e;if(t>n.lvl+1){if(Ju(r))return ng(Xu(e,{lvl:t-1}));if(!Pu(r)&&!Pu(r.r))return Xu(r.r,{l:Xu(r,{r:r.r.l}),lvl:t,r:Xu(e,{l:r.r.r,lvl:t-1})});throw new Error("Unexpected empty nodes")}if(Ju(e))return og(Xu(e,{lvl:t-1}));if(Pu(n)||Pu(n.l))throw new Error("Unexpected empty nodes");{const r=n.l,o=Ju(r)?n.lvl-1:n.lvl;return Xu(r,{l:Xu(e,{lvl:t-1,r:r.l}),lvl:r.lvl+1,r:og(Xu(n,{l:r.r,lvl:o}))})}}function Xu(e,r){return rg(void 0!==r.k?r.k:e.k,void 0!==r.v?r.v:e.v,void 0!==r.lvl?r.lvl:e.lvl,void 0!==r.l?r.l:e.l,void 0!==r.r?r.r:e.r)}function Qu(e){return Pu(e.r)?e.l:Ku(Xu(e,{r:Qu(e.r)}))}function Ju(e){return Pu(e)||e.lvl>e.r.lvl}function eg(e){return Pu(e.r)?[e.k,e.v]:eg(e.r)}function rg(e,r,t,n=Ru,o=Ru){return{k:e,l:n,lvl:t,r:o,v:r}}function tg(e){return og(ng(e))}function ng(e){const{l:r}=e;return Pu(r)||r.lvl!==e.lvl?e:Xu(r,{r:Xu(e,{l:r.r})})}function og(e){const{lvl:r,r:t}=e;return Pu(t)||Pu(t.r)||t.lvl!==r||t.r.lvl!==r?e:Xu(t,{l:Xu(e,{r:t.l}),lvl:r+1})}function ig(e,r){return!(!e||e.startIndex!==r.startIndex||e.endIndex!==r.endIndex)}function ag(e,r){return!(!e||e[0]!==r[0]||e[1]!==r[1])}const sg=Eu((()=>({recalcInProgress:wu(!1)})),[],{singleton:!0});function lg(e,r,t){return e[dg(e,r,t)]}function dg(e,r,t,n=0){let o=e.length-1;for(;n<=o;){const i=Math.floor((n+o)/2),a=t(e[i],r);if(0===a)return i;if(-1===a){if(o-n<2)return i-1;o=i-1}else{if(o===n)return i;n=i+1}}throw new Error(`Failed binary finding record in array - ${e.join(",")}, searched for ${r}`)}function cg(e,r){return Math.round(e.getBoundingClientRect()[r])}function ug(e){return!Pu(e.groupOffsetTree)}function gg({index:e},r){return r===e?0:r<e?-1:1}function hg({offset:e},r){return r===e?0:r<e?-1:1}function mg(e,r,t){if(0===r.length)return 0;const{index:n,offset:o,size:i}=lg(r,e,gg),a=e-n,s=i*a+(a-1)*t+o;return s>0?s+t:s}function fg(e,r){if(!ug(r))return e;let t=0;for(;r.groupIndices[t]<=e+t;)t++;return e+t}function bg(e,r,t){if(function(e){return typeof e.groupIndex<"u"}(e))return r.groupIndices[e.groupIndex]+1;{let n=fg("LAST"===e.index?t:e.index,r);return n=Math.max(0,n,Math.min(t,n)),n}}function pg(e,r,t,n=0){return n>0&&(r=Math.max(r,lg(e,n,gg).offset)),Hu(function(e,r,t,n){const o=dg(e,r,n),i=dg(e,t,n,o);return e.slice(o,i+1)}(e,r,t,hg),wg)}function yg(e,[r,t,n,o]){r.length>0&&n("received item sizes",r,Ou.DEBUG);const i=e.sizeTree;let a=i,s=0;if(t.length>0&&Pu(i)&&2===r.length){const e=r[0].size,n=r[1].size;a=t.reduce(((r,t)=>Vu(Vu(r,t,e),t+1,n)),a)}else[a,s]=function(e,r){let t=Pu(e)?0:1/0;for(const n of r){const{endIndex:r,size:o,startIndex:i}=n;if(t=Math.min(t,i),Pu(e)){e=Vu(e,0,o);continue}const a=Uu(e,i-1,r+1);if(a.some($g(n)))continue;let s=!1,l=!1;for(const{end:t,start:n,value:i}of a)s?(r>=n||o===i)&&(e=qu(e,n)):(l=i!==o,s=!0),t>r&&r>=n&&i!==o&&(e=Vu(e,r+1,i));l&&(e=Vu(e,i,o))}return[e,t]}(a,r);if(a===i)return e;const{lastIndex:l,lastOffset:d,lastSize:c,offsetTree:u}=xg(e.offsetTree,s,a,o);return{groupIndices:t,groupOffsetTree:t.reduce(((e,r)=>Vu(e,r,mg(r,u,o))),Yu()),lastIndex:l,lastOffset:d,lastSize:c,offsetTree:u,sizeTree:a}}function vg(e,r){let t=0,n=0;for(;t<e;)t+=r[n+1]-r[n]-1,n++;return n-(t===e?0:1)}function xg(e,r,t,n){let o=e,i=0,a=0,s=0,l=0;if(0!==r){l=dg(o,r-1,gg),s=o[l].offset;const e=Nu(t,r-1);i=e[0],a=e[1],o.length&&o[l].size===Nu(t,r)[1]&&(l-=1),o=o.slice(0,l+1)}else o=[];for(const{start:e,value:l}of Uu(t,r,1/0)){const r=e-i,t=r*a+s+r*n;o.push({index:e,offset:t,size:l}),i=e,s=t,a=l}return{lastIndex:i,lastOffset:s,lastSize:a,offsetTree:o}}function wg(e){return{index:e.index,value:e}}function $g(e){const{endIndex:r,size:t,startIndex:n}=e;return e=>e.start===n&&(e.end===r||e.end===1/0)&&e.value===t}const Fg={offsetHeight:"height",offsetWidth:"width"},Cg=Eu((([{log:e},{recalcInProgress:r}])=>{const t=Fu(),n=Fu(),o=$u(n,0),i=Fu(),a=Fu(),s=wu(0),l=wu([]),d=wu(void 0),c=wu(void 0),u=wu(((e,r)=>cg(e,Fg[r]))),g=wu(void 0),h=wu(0),m={groupIndices:[],groupOffsetTree:Yu(),lastIndex:0,lastOffset:0,lastSize:0,offsetTree:[],sizeTree:Yu()},f=$u(bu(t,xu(l,e,h),pu(yg,m),gu()),m),b=$u(bu(l,gu(),pu(((e,r)=>({current:r,prev:e.current})),{current:[],prev:[]}),mu((({prev:e})=>e))),[]);lu(bu(l,hu((e=>e.length>0)),xu(f,h),mu((([e,r,t])=>{const n=e.reduce(((e,n,o)=>Vu(e,n,mg(n,r.offsetTree,t)||o)),Yu());return{...r,groupIndices:e,groupOffsetTree:n}}))),f),lu(bu(n,xu(f),hu((([e,{lastIndex:r}])=>e<r)),mu((([e,{lastIndex:r,lastSize:t}])=>[{endIndex:r,size:t,startIndex:e}]))),t),lu(d,c);const p=$u(bu(d,mu((e=>void 0===e))),!0);lu(bu(c,hu((e=>void 0!==e&&Pu(su(f).sizeTree))),mu((e=>[{endIndex:0,size:e,startIndex:0}]))),t);const y=Cu(bu(t,xu(f),pu((({sizes:e},[r,t])=>({changed:t!==e,sizes:t})),{changed:!1,sizes:m}),mu((e=>e.changed))));ou(bu(s,pu(((e,r)=>({diff:e.prev-r,prev:r})),{diff:0,prev:0}),mu((e=>e.diff))),(e=>{const{groupIndices:t}=su(f);if(e>0)iu(r,!0),iu(i,e+vg(e,t));else if(e<0){const r=su(b);r.length>0&&(e-=vg(-e,r)),iu(a,e)}})),ou(bu(s,xu(e)),(([e,r])=>{e<0&&r("`firstItemIndex` prop should not be set to less than zero. If you don't know the total count, just use a very high value",{firstItemIndex:s},Ou.ERROR)}));const v=Cu(i);lu(bu(i,xu(f),mu((([e,r])=>{const t=r.groupIndices.length>0,n=[],o=r.lastSize;if(t){const t=Wu(r.sizeTree,0);let i=0,a=0;for(;i<e;){const e=r.groupIndices[a],s=r.groupIndices.length===a+1?1/0:r.groupIndices[a+1]-e-1;n.push({endIndex:e,size:t,startIndex:e}),n.push({endIndex:e+1+s-1,size:o,startIndex:e+1}),a++,i+=s+1}const s=Gu(r.sizeTree);return i!==e&&s.shift(),s.reduce(((r,{k:t,v:n})=>{let o=r.ranges;return 0!==r.prevSize&&(o=[...r.ranges,{endIndex:t+e-1,size:r.prevSize,startIndex:r.prevIndex}]),{prevIndex:t+e,prevSize:n,ranges:o}}),{prevIndex:e,prevSize:0,ranges:n}).ranges}return Gu(r.sizeTree).reduce(((r,{k:t,v:n})=>({prevIndex:t+e,prevSize:n,ranges:[...r.ranges,{endIndex:t+e-1,size:r.prevSize,startIndex:r.prevIndex}]})),{prevIndex:0,prevSize:o,ranges:[]}).ranges}))),t);const x=Cu(bu(a,xu(f,h),mu((([e,{offsetTree:r},t])=>mg(-e,r,t)))));return lu(bu(a,xu(f,h),mu((([e,r,t])=>{if(r.groupIndices.length>0){if(Pu(r.sizeTree))return r;let n=Yu();const o=su(b);let i=0,a=0,s=0;for(;i<-e;){s=o[a];const e=o[a+1]-s-1;a++,i+=e+1}if(n=Gu(r.sizeTree).reduce(((r,{k:t,v:n})=>Vu(r,Math.max(0,t+e),n)),n),i!==-e){n=Vu(n,0,Wu(r.sizeTree,s));n=Vu(n,1,Nu(r.sizeTree,1-e)[1])}return{...r,sizeTree:n,...xg(r.offsetTree,0,n,t)}}{const n=Gu(r.sizeTree).reduce(((r,{k:t,v:n})=>Vu(r,Math.max(0,t+e),n)),Yu());return{...r,sizeTree:n,...xg(r.offsetTree,0,n,t)}}}))),f),{beforeUnshiftWith:v,data:g,defaultItemSize:c,firstItemIndex:s,fixedItemSize:d,gap:h,groupIndices:l,itemSize:u,listRefresh:y,shiftWith:a,shiftWithOffset:x,sizeRanges:t,sizes:f,statefulTotalCount:o,totalCount:n,trackItemSizes:p,unshiftWith:i}}),nu(zu,sg),{singleton:!0});function Eg(e){return e.reduce(((e,r)=>(e.groupIndices.push(e.totalCount),e.totalCount+=r+1,e)),{groupIndices:[],totalCount:0})}const Sg=Eu((([{groupIndices:e,sizes:r,totalCount:t},{headerHeight:n,scrollTop:o}])=>{const i=Fu(),a=Fu(),s=Cu(bu(i,mu(Eg)));return lu(bu(s,mu((e=>e.totalCount))),t),lu(bu(s,mu((e=>e.groupIndices))),e),lu(bu(Du(o,r,n),hu((([e,r])=>ug(r))),mu((([e,r,t])=>Nu(r.groupOffsetTree,Math.max(e-t,0),"v")[0])),gu(),mu((e=>[e]))),a),{groupCounts:i,topItemsIndexes:a}}),nu(Cg,_u)),Dg=Eu((([{log:e}])=>{const r=wu(!1),t=Cu(bu(r,hu((e=>e)),gu()));return ou(r,(r=>{r&&su(e)("props updated",{},Ou.DEBUG)})),{didMount:t,propsReady:r}}),nu(zu),{singleton:!0}),Bg=typeof document<"u"&&"scrollBehavior"in document.documentElement.style;function kg(e){const r="number"==typeof e?{index:e}:e;return r.align||(r.align="start"),(!r.behavior||!Bg)&&(r.behavior="auto"),r.offset||(r.offset=0),r}const Og=Eu((([{gap:e,listRefresh:r,sizes:t,totalCount:n},{fixedFooterHeight:o,fixedHeaderHeight:i,footerHeight:a,headerHeight:s,scrollingInProgress:l,scrollTo:d,smoothScrollTargetReached:c,viewportHeight:u},{log:g}])=>{const h=Fu(),m=Fu(),f=wu(0);let b=null,p=null,y=null;function v(){b&&(b(),b=null),y&&(y(),y=null),p&&(clearTimeout(p),p=null),iu(l,!1)}return lu(bu(h,xu(t,u,n,f,s,a,g),xu(e,i,o),mu((([[e,t,n,o,i,a,s,d],u,g,f])=>{const x=kg(e),{align:w,behavior:$,offset:F}=x,C=o-1,E=bg(x,t,C);let S=mg(E,t.offsetTree,u)+a;"end"===w?(S+=g+Nu(t.sizeTree,E)[1]-n+f,E===C&&(S+=s)):"center"===w?S+=(g+Nu(t.sizeTree,E)[1]-n+f)/2:S-=i,F&&(S+=F);const D=r=>{v(),r?(d("retrying to scroll to",{location:e},Ou.DEBUG),iu(h,e)):(iu(m,!0),d("list did not change, scroll successful",{},Ou.DEBUG))};if(v(),"smooth"===$){let e=!1;y=ou(r,(r=>{e=e||r})),b=du(c,(()=>{D(e)}))}else b=du(bu(r,function(e){return r=>{const t=setTimeout((()=>{r(!1)}),e);return e=>{e&&(r(!0),clearTimeout(t))}}}(150)),D);return p=setTimeout((()=>{v()}),1200),iu(l,!0),d("scrolling from index to",{behavior:$,index:E,top:S},Ou.DEBUG),{behavior:$,top:S}}))),d),{scrollTargetReached:m,scrollToIndex:h,topListHeight:f}}),nu(Cg,_u,zu),{singleton:!0});function Tg(e,r){0==e?r():requestAnimationFrame((()=>{Tg(e-1,r)}))}function zg(e,r){const t=r-1;return"number"==typeof e?e:"LAST"===e.index?t:e.index}const Ag=Eu((([{defaultItemSize:e,listRefresh:r,sizes:t},{scrollTop:n},{scrollTargetReached:o,scrollToIndex:i},{didMount:a}])=>{const s=wu(!0),l=wu(0),d=wu(!0);return lu(bu(a,xu(l),hu((([e,r])=>!!r)),fu(!1)),s),lu(bu(a,xu(l),hu((([e,r])=>!!r)),fu(!1)),d),ou(bu(Du(r,a),xu(s,t,e,d),hu((([[,e],r,{sizeTree:t},n,o])=>e&&(!Pu(t)||Jc(n))&&!r&&!o)),xu(l)),(([,e])=>{du(o,(()=>{iu(d,!0)})),Tg(4,(()=>{du(n,(()=>{iu(s,!0)})),iu(i,e)}))})),{initialItemFinalLocationReached:d,initialTopMostItemIndex:l,scrolledToInitialItem:s}}),nu(Cg,_u,Og,Dg),{singleton:!0});function Ig(e,r){return Math.abs(e-r)<1.01}const Mg="up",jg="down",Lg={atBottom:!1,notAtBottomBecause:"NOT_SHOWING_LAST_ITEM",state:{offsetBottom:0,scrollHeight:0,scrollTop:0,viewportHeight:0}},_g=Eu((([{footerHeight:e,headerHeight:r,scrollBy:t,scrollContainerState:n,scrollTop:o,viewportHeight:i}])=>{const a=wu(!1),s=wu(!0),l=Fu(),d=Fu(),c=wu(4),u=wu(0),g=$u(bu(ku(bu(Bu(o),yu(1),fu(!0)),bu(Bu(o),yu(1),fu(!1),cu(100))),gu()),!1),h=$u(bu(ku(bu(t,fu(!0)),bu(t,fu(!1),cu(200))),gu()),!1);lu(bu(Du(Bu(o),Bu(u)),mu((([e,r])=>e<=r)),gu()),s),lu(bu(s,vu(50)),d);const m=Cu(bu(Du(n,Bu(i),Bu(r),Bu(e),Bu(c)),pu(((e,[{scrollHeight:r,scrollTop:t},n,o,i,a])=>{const s={scrollHeight:r,scrollTop:t,viewportHeight:n};if(t+n-r>-a){let r,n;return t>e.state.scrollTop?(r="SCROLLED_DOWN",n=e.state.scrollTop-t):(r="SIZE_DECREASED",n=e.state.scrollTop-t||e.scrollTopDelta),{atBottom:!0,atBottomBecause:r,scrollTopDelta:n,state:s}}let l;return l=s.scrollHeight>e.state.scrollHeight?"SIZE_INCREASED":n<e.state.viewportHeight?"VIEWPORT_HEIGHT_DECREASING":t<e.state.scrollTop?"SCROLLING_UPWARDS":"NOT_FULLY_SCROLLED_TO_LAST_ITEM_BOTTOM",{atBottom:!1,notAtBottomBecause:l,state:s}}),Lg),gu(((e,r)=>e&&e.atBottom===r.atBottom)))),f=$u(bu(n,pu(((e,{scrollHeight:r,scrollTop:t,viewportHeight:n})=>{if(Ig(e.scrollHeight,r))return{changed:!1,jump:0,scrollHeight:r,scrollTop:t};{const o=r-(t+n)<1;return e.scrollTop!==t&&o?{changed:!0,jump:e.scrollTop-t,scrollHeight:r,scrollTop:t}:{changed:!0,jump:0,scrollHeight:r,scrollTop:t}}}),{changed:!1,jump:0,scrollHeight:0,scrollTop:0}),hu((e=>e.changed)),mu((e=>e.jump))),0);lu(bu(m,mu((e=>e.atBottom))),a),lu(bu(a,vu(50)),l);const b=wu(jg);lu(bu(n,mu((({scrollTop:e})=>e)),gu(),pu(((e,r)=>su(h)?{direction:e.direction,prevScrollTop:r}:{direction:r<e.prevScrollTop?Mg:jg,prevScrollTop:r}),{direction:jg,prevScrollTop:0}),mu((e=>e.direction))),b),lu(bu(n,vu(50),fu("none")),b);const p=wu(0);return lu(bu(g,hu((e=>!e)),fu(0)),p),lu(bu(o,vu(100),xu(g),hu((([e,r])=>!!r)),pu((([e,r],[t])=>[r,t]),[0,0]),mu((([e,r])=>r-e))),p),{atBottomState:m,atBottomStateChange:l,atBottomThreshold:c,atTopStateChange:d,atTopThreshold:u,isAtBottom:a,isAtTop:s,isScrolling:g,lastJumpDueToItemResize:f,scrollDirection:b,scrollVelocity:p}}),nu(_u)),Rg="top",Hg="bottom",Pg="none";function Wg(e,r,t){return"number"==typeof e?t===Mg&&r===Rg||t===jg&&r===Hg?e:0:t===Mg?r===Rg?e.main:e.reverse:r===Hg?e.main:e.reverse}function Ng(e,r){var t;return"number"==typeof e?e:null!=(t=e[r])?t:0}const Vg=Eu((([{deviation:e,fixedHeaderHeight:r,headerHeight:t,scrollTop:n,viewportHeight:o}])=>{const i=Fu(),a=wu(0),s=wu(0),l=wu(0);return{increaseViewportBy:s,listBoundary:i,overscan:l,topListHeight:a,visibleRange:$u(bu(Du(Bu(n),Bu(o),Bu(t),Bu(i,ag),Bu(l),Bu(a),Bu(r),Bu(e),Bu(s)),mu((([e,r,t,[n,o],i,a,s,l,d])=>{const c=e-l,u=a+s,g=Math.max(t-c,0);let h=Pg;const m=Ng(d,Rg),f=Ng(d,Hg);return n-=l,o+=t+s,(n+=t+s)>e+u-m&&(h=Mg),(o-=l)<e-g+r+f&&(h=jg),h!==Pg?[Math.max(c-t-Wg(i,Rg,h)-m,0),c-g-s+r+Wg(i,Hg,h)+f]:null})),hu((e=>null!=e)),gu(ag)),[0,0])}}),nu(_u),{singleton:!0});const Yg={bottom:0,firstItemIndex:0,items:[],offsetBottom:0,offsetTop:0,top:0,topItems:[],topListHeight:0,totalCount:0};function Ug(e,r,t,n,o,i){const{lastIndex:a,lastOffset:s,lastSize:l}=o;let d=0,c=0;if(e.length>0){d=e[0].offset;const r=e[e.length-1];c=r.offset+r.size}const u=t-a,g=d,h=s+u*l+(u-1)*n-c;return{bottom:c,firstItemIndex:i,items:Gg(e,o,i),offsetBottom:h,offsetTop:d,top:g,topItems:Gg(r,o,i),topListHeight:r.reduce(((e,r)=>r.size+e),0),totalCount:t}}function qg(e,r,t,n,o,i){let a=0;if(t.groupIndices.length>0)for(const r of t.groupIndices){if(r-a>=e)break;a++}const s=e+a,l=zg(r,s);return Ug(Array.from({length:s}).map(((e,r)=>({data:i[r+l],index:r+l,offset:0,size:0}))),[],s,o,t,n)}function Gg(e,r,t){if(0===e.length)return[];if(!ug(r))return e.map((e=>({...e,index:e.index+t,originalIndex:e.index})));const n=e[0].index,o=e[e.length-1].index,i=[],a=Uu(r.groupOffsetTree,n,o);let s,l=0;for(const n of e){let e;(!s||s.end<n.index)&&(s=a.shift(),l=r.groupIndices.indexOf(s.start)),e=n.index===s.start?{index:l,type:"group"}:{groupIndex:l,index:n.index-(l+1)+t},i.push({...e,data:n.data,offset:n.offset,originalIndex:n.index,size:n.size})}return i}const Zg=Eu((([{data:e,firstItemIndex:r,gap:t,sizes:n,totalCount:o},i,{listBoundary:a,topListHeight:s,visibleRange:l},{initialTopMostItemIndex:d,scrolledToInitialItem:c},{topListHeight:u},g,{didMount:h},{recalcInProgress:m}])=>{const f=wu([]),b=wu(0),p=Fu();lu(i.topItemsIndexes,f);const y=$u(bu(Du(h,m,Bu(l,ag),Bu(o),Bu(n),Bu(d),c,Bu(f),Bu(r),Bu(t),e),hu((([e,r,,t,,,,,,,n])=>{const o=n&&n.length!==t;return e&&!r&&!o})),mu((([,,[e,r],t,n,o,i,a,s,l,d])=>{const c=n,{offsetTree:u,sizeTree:g}=c,h=su(b);if(0===t)return{...Yg,totalCount:t};if(0===e&&0===r)return 0===h?{...Yg,totalCount:t}:qg(h,o,n,s,l,d||[]);if(Pu(g))return h>0?null:Ug(function(e,r,t){if(ug(r)){const n=fg(e,r);return[{index:Nu(r.groupOffsetTree,n)[0],offset:0,size:0},{data:null==t?void 0:t[0],index:n,offset:0,size:0}]}return[{data:null==t?void 0:t[0],index:e,offset:0,size:0}]}(zg(o,t),c,d),[],t,l,c,s);const m=[];if(a.length>0){const e=a[0],r=a[a.length-1];let t=0;for(const n of Uu(g,e,r)){const o=n.value,i=Math.max(n.start,e),a=Math.min(n.end,r);for(let e=i;e<=a;e++)m.push({data:null==d?void 0:d[e],index:e,offset:t,size:o}),t+=o}}if(!i)return Ug([],m,t,l,c,s);const f=a.length>0?a[a.length-1]+1:0,p=pg(u,e,r,f);if(0===p.length)return null;const y=t-1;return Ug(ru([],(t=>{for(const n of p){const o=n.value;let i=o.offset,a=n.start;const s=o.size;if(o.offset<e){a+=Math.floor((e-o.offset+l)/(s+l));const r=a-n.start;i+=r*s+r*l}a<f&&(i+=(f-a)*s,a=f);const c=Math.min(n.end,y);for(let e=a;e<=c&&!(i>=r);e++)t.push({data:null==d?void 0:d[e],index:e,offset:i,size:s}),i+=s+l}})),m,t,l,c,s)})),hu((e=>null!==e)),gu()),Yg);lu(bu(e,hu(Jc),mu((e=>null==e?void 0:e.length))),o),lu(bu(y,mu((e=>e.topListHeight))),u),lu(u,s),lu(bu(y,mu((e=>[e.top,e.bottom]))),a),lu(bu(y,mu((e=>e.items))),p);const v=Cu(bu(y,hu((({items:e})=>e.length>0)),xu(o,e),hu((([{items:e},r])=>e[e.length-1].originalIndex===r-1)),mu((([,e,r])=>[e-1,r])),gu(ag),mu((([e])=>e)))),x=Cu(bu(y,vu(200),hu((({items:e,topItems:r})=>e.length>0&&e[0].originalIndex===r.length)),mu((({items:e})=>e[0].index)),gu())),w=Cu(bu(y,hu((({items:e})=>e.length>0)),mu((({items:e})=>{let r=0,t=e.length-1;for(;"group"===e[r].type&&r<t;)r++;for(;"group"===e[t].type&&t>r;)t--;return{endIndex:e[t].index,startIndex:e[r].index}})),gu(ig)));return{endReached:v,initialItemCount:b,itemsRendered:p,listState:y,rangeChanged:w,startReached:x,topItemsIndexes:f,...g}}),nu(Cg,Sg,Vg,Ag,Og,_g,Dg,sg),{singleton:!0}),Kg=Eu((([{fixedFooterHeight:e,fixedHeaderHeight:r,footerHeight:t,headerHeight:n},{listState:o}])=>{const i=Fu(),a=$u(bu(Du(t,e,n,r,o),mu((([e,r,t,n,o])=>e+r+t+n+o.offsetBottom+o.bottom))),0);return lu(Bu(a),i),{totalListHeight:a,totalListHeightChanged:i}}),nu(_u,Zg),{singleton:!0}),Xg=Eu((([{viewportHeight:e},{totalListHeight:r}])=>{const t=wu(!1);return{alignToBottom:t,paddingTopAddition:$u(bu(Du(t,e,r),hu((([e])=>e)),mu((([,e,r])=>Math.max(0,e-r))),vu(0),gu()),0)}}),nu(_u,Kg),{singleton:!0});function Qg(e){return!!e&&("smooth"===e?"smooth":"auto")}const Jg=Eu((([{listRefresh:e,totalCount:r},{atBottomState:t,isAtBottom:n},{scrollToIndex:o},{scrolledToInitialItem:i},{didMount:a,propsReady:s},{log:l},{scrollingInProgress:d}])=>{const c=wu(!1),u=Fu();let g=null;function h(e){iu(o,{align:"end",behavior:e,index:"LAST"})}function m(e){const r=du(t,(r=>{e&&!r.atBottom&&"SIZE_INCREASED"===r.notAtBottomBecause&&!g&&(su(l)("scrolling to bottom due to increased size",{},Ou.DEBUG),h("auto"))}));setTimeout(r,100)}return ou(bu(Du(bu(Bu(r),yu(1)),a),xu(Bu(c),n,i,d),mu((([[e,r],t,n,o,i])=>{let a=r&&o,s="auto";return a&&(s=((e,r)=>"function"==typeof e?Qg(e(r)):r&&Qg(e))(t,n||i),a=a&&!!s),{followOutputBehavior:s,shouldFollow:a,totalCount:e}})),hu((({shouldFollow:e})=>e))),(({followOutputBehavior:r,totalCount:t})=>{g&&(g(),g=null),g=du(e,(()=>{su(l)("following output to ",{totalCount:t},Ou.DEBUG),h(r),g=null}))})),ou(bu(Du(Bu(c),r,s),hu((([e,,r])=>e&&r)),pu((({value:e},[,r])=>({refreshed:e===r,value:r})),{refreshed:!1,value:0}),hu((({refreshed:e})=>e)),xu(c,r)),(([,e])=>{su(i)&&m(!1!==e)})),ou(u,(()=>{m(!1!==su(c))})),ou(Du(Bu(c),t),(([e,r])=>{e&&!r.atBottom&&"VIEWPORT_HEIGHT_DECREASING"===r.notAtBottomBecause&&h("auto")})),{autoscrollToBottom:u,followOutput:c}}),nu(Cg,_g,Og,Ag,Dg,zu,_u)),eh=Eu((([{data:e,firstItemIndex:r,gap:t,sizes:n},{initialTopMostItemIndex:o},{initialItemCount:i,listState:a},{didMount:s}])=>(lu(bu(s,xu(i),hu((([,e])=>0!==e)),xu(o,n,r,t,e),mu((([[,e],r,t,n,o,i=[]])=>qg(e,r,t,n,o,i)))),a),{})),nu(Cg,Ag,Zg,Dg),{singleton:!0}),rh=Eu((([{didMount:e},{scrollTo:r},{listState:t}])=>{const n=wu(0);return ou(bu(e,xu(n),hu((([,e])=>0!==e)),mu((([,e])=>({top:e})))),(e=>{du(bu(t,yu(1),hu((e=>e.items.length>1))),(()=>{requestAnimationFrame((()=>{iu(r,e)}))}))})),{initialScrollTop:n}}),nu(Dg,_u,Zg),{singleton:!0}),th=({itemBottom:e,itemTop:r,locationParams:{align:t,behavior:n,...o},viewportBottom:i,viewportTop:a})=>r<a?{...o,align:null!=t?t:"start",behavior:n}:e>i?{...o,align:null!=t?t:"end",behavior:n}:null,nh=Eu((([{gap:e,sizes:r,totalCount:t},{fixedFooterHeight:n,fixedHeaderHeight:o,headerHeight:i,scrollingInProgress:a,scrollTop:s,viewportHeight:l},{scrollToIndex:d}])=>{const c=Fu();return lu(bu(c,xu(r,l,t,i,o,n,s),xu(e),mu((([[e,r,t,n,o,i,s,l],d])=>{const{align:c,behavior:u,calculateViewLocation:g=th,done:h,...m}=e,f=bg(e,r,n-1),b=mg(f,r.offsetTree,d)+o+i,p=g({itemBottom:b+Nu(r.sizeTree,f)[1],itemTop:b,locationParams:{align:c,behavior:u,...m},viewportBottom:l+t-s,viewportTop:l+i});return p?h&&du(bu(a,hu((e=>!e)),yu(su(a)?1:2)),h):h&&h(),p})),hu((e=>null!==e))),d),{scrollIntoView:c}}),nu(Cg,_u,Og,Zg,zu),{singleton:!0}),oh=Eu((([{scrollVelocity:e}])=>{const r=wu(!1),t=Fu(),n=wu(!1);return lu(bu(e,xu(n,r,t),hu((([e,r])=>!!r)),mu((([e,r,t,n])=>{const{enter:o,exit:i}=r;if(t){if(i(e,n))return!1}else if(o(e,n))return!0;return t})),gu()),r),ou(bu(Du(r,e,t),xu(n)),(([[e,r,t],n])=>{e&&n&&n.change&&n.change(r,t)})),{isSeeking:r,scrollSeekConfiguration:n,scrollSeekRangeChanged:t,scrollVelocity:e}}),nu(_g),{singleton:!0}),ih=Eu((([{scrollContainerState:e,scrollTo:r}])=>{const t=Fu(),n=Fu(),o=Fu(),i=wu(!1),a=wu(void 0);return lu(bu(Du(t,n),mu((([{scrollHeight:e,scrollTop:r,viewportHeight:t},{offsetTop:n}])=>({scrollHeight:e,scrollTop:Math.max(0,r-n),viewportHeight:t})))),e),lu(bu(r,xu(n),mu((([e,{offsetTop:r}])=>({...e,top:e.top+r})))),o),{customScrollParent:a,useWindowScroll:i,windowScrollContainerState:t,windowScrollTo:o,windowViewportRect:n}}),nu(_u)),ah=Eu((([{sizeRanges:e,sizes:r},{headerHeight:t,scrollTop:n},{initialTopMostItemIndex:o},{didMount:i},{useWindowScroll:a,windowScrollContainerState:s,windowViewportRect:l}])=>{const d=Fu(),c=wu(void 0),u=wu(null),g=wu(null);return lu(s,u),lu(l,g),ou(bu(d,xu(r,n,a,u,g,t)),(([e,r,t,n,o,i,a])=>{const s=function(e){return Gu(e).map((({k:e,v:r},t,n)=>{const o=n[t+1];return{endIndex:o?o.k-1:1/0,size:r,startIndex:e}}))}(r.sizeTree);n&&null!==o&&null!==i&&(t=o.scrollTop-i.offsetTop),e({ranges:s,scrollTop:t-=a})})),lu(bu(c,hu(Jc),mu(sh)),o),lu(bu(i,xu(c),hu((([,e])=>void 0!==e)),gu(),mu((([,e])=>e.ranges))),e),{getState:d,restoreStateFrom:c}}),nu(Cg,_u,Ag,Dg,ih));function sh(e){return{align:"start",index:0,offset:e.scrollTop}}const lh=Eu((([{topItemsIndexes:e}])=>{const r=wu(0);return lu(bu(r,hu((e=>e>=0)),mu((e=>Array.from({length:e}).map(((e,r)=>r))))),e),{topItemCount:r}}),nu(Zg));function dh(e){let r,t=!1;return()=>(t||(t=!0,r=e()),r)}const ch=dh((()=>/iP(ad|od|hone)/i.test(navigator.userAgent)&&/WebKit/i.test(navigator.userAgent))),uh=Eu((([{deviation:e,scrollBy:r,scrollingInProgress:t,scrollTop:n},{isAtBottom:o,isScrolling:i,lastJumpDueToItemResize:a,scrollDirection:s},{listState:l},{beforeUnshiftWith:d,gap:c,shiftWithOffset:u,sizes:g},{log:h},{recalcInProgress:m}])=>{const f=Cu(bu(l,xu(a),pu((([,e,r,t],[{bottom:n,items:o,offsetBottom:i,totalCount:a},s])=>{const l=n+i;let d=0;return r===a&&e.length>0&&o.length>0&&(0===o[0].originalIndex&&0===e[0].originalIndex||(d=l-t,0!==d&&(d+=s))),[d,o,a,l]}),[0,[],0,0]),hu((([e])=>0!==e)),xu(n,s,t,o,h,m),hu((([,e,r,t,,,n])=>!n&&!t&&0!==e&&r===Mg)),mu((([[e],,,,,r])=>(r("Upward scrolling compensation",{amount:e},Ou.DEBUG),e)))));function b(t){t>0?(iu(r,{behavior:"auto",top:-t}),iu(e,0)):(iu(e,0),iu(r,{behavior:"auto",top:-t}))}return ou(bu(f,xu(e,i)),(([r,t,n])=>{n&&ch()?iu(e,t-r):b(-r)})),ou(bu(Du($u(i,!1),e,m),hu((([e,r,t])=>!e&&!t&&0!==r)),mu((([e,r])=>r)),vu(1)),b),lu(bu(u,mu((e=>({top:-e})))),r),ou(bu(d,xu(g,c),mu((([e,{groupIndices:r,lastSize:t,sizeTree:n},o])=>{function i(e){return e*(t+o)}if(0===r.length)return i(e);{let t=0;const o=Wu(n,0);let a=0,s=0;for(;a<e;){a++,t+=o;let n=r.length===s+1?1/0:r[s+1]-r[s]-1;a+n>e&&(t-=o,n=e-a+1),a+=n,t+=i(n),s++}return t}}))),(t=>{iu(e,t),requestAnimationFrame((()=>{iu(r,{top:t}),requestAnimationFrame((()=>{iu(e,0),iu(m,!1)}))}))})),{deviation:e}}),nu(_u,_g,Zg,Cg,zu,sg)),gh=Eu((([e,r,t,n,o,i,a,s,l,d])=>({...e,...r,...t,...n,...o,...i,...a,...s,...l,...d})),nu(Vg,eh,Dg,oh,Kg,rh,Xg,ih,nh,zu)),hh=Eu((([{data:e,defaultItemSize:r,firstItemIndex:t,fixedItemSize:n,gap:o,groupIndices:i,itemSize:a,sizeRanges:s,sizes:l,statefulTotalCount:d,totalCount:c,trackItemSizes:u},{initialItemFinalLocationReached:g,initialTopMostItemIndex:h,scrolledToInitialItem:m},f,b,p,{listState:y,topItemsIndexes:v,...x},{scrollToIndex:w},$,{topItemCount:F},{groupCounts:C},E])=>(lu(x.rangeChanged,E.scrollSeekRangeChanged),lu(bu(E.windowViewportRect,mu((e=>e.visibleHeight))),f.viewportHeight),{data:e,defaultItemHeight:r,firstItemIndex:t,fixedItemHeight:n,gap:o,groupCounts:C,initialItemFinalLocationReached:g,initialTopMostItemIndex:h,scrolledToInitialItem:m,sizeRanges:s,topItemCount:F,topItemsIndexes:v,totalCount:c,...p,groupIndices:i,itemSize:a,listState:y,scrollToIndex:w,statefulTotalCount:d,trackItemSizes:u,...x,...E,...f,sizes:l,...b})),nu(Cg,Ag,_u,ah,Jg,Zg,Og,uh,lh,Sg,gh));function mh(e,r){const t={},n={};let o=0;const i=e.length;for(;o<i;)n[e[o]]=1,o+=1;for(const e in r)Object.hasOwn(n,e)||(t[e]=r[e]);return t}const fh=typeof document<"u"?o.useLayoutEffect:o.useEffect;function bh(r,t,n){const i=Object.keys(t.required||{}),a=Object.keys(t.optional||{}),s=Object.keys(t.methods||{}),l=Object.keys(t.events||{}),d=o.createContext({});function c(e,r){e.propsReady&&iu(e.propsReady,!1);for(const n of i){iu(e[t.required[n]],r[n])}for(const n of a)if(n in r){iu(e[t.optional[n]],r[n])}e.propsReady&&iu(e.propsReady,!0)}function u(e){return l.reduce(((r,n)=>(r[n]=function(e){let r,t;const n=()=>null==r?void 0:r();return function(o,i){switch(o){case 1:return i?t===i?void 0:(n(),t=i,r=ou(e,i),r):(n(),eu);case 2:return n(),void(t=null)}}}(e[t.events[n]]),r)),{})}const g=o.forwardRef(((g,h)=>{const{children:m,...f}=g,[b]=o.useState((()=>ru(function(e){const r=new Map,t=({constructor:e,dependencies:n,id:o,singleton:i})=>{if(i&&r.has(o))return r.get(o);const a=e(n.map((e=>t(e))));return i&&r.set(o,a),a};return t(e)}(r),(e=>{c(e,f)})))),[p]=o.useState(Xc(u,b));fh((()=>{for(const e of l)e in f&&ou(p[e],f[e]);return()=>{Object.values(p).map(au)}}),[f,p,b]),fh((()=>{c(b,f)})),o.useImperativeHandle(h,Gc(function(e){return s.reduce(((r,n)=>(r[n]=r=>{iu(e[t.methods[n]],r)},r)),{})}(b)));const y=n;return e(d.Provider,{value:b,children:n?e(y,{...mh([...i,...a,...l],f),children:m}):m})}));return{Component:g,useEmitter:(e,r)=>{const t=o.useContext(d)[e];fh((()=>ou(t,r)),[r,t])},useEmitterValue:o.version.startsWith("18")?e=>{const r=o.useContext(d)[e],t=o.useCallback((e=>ou(r,e)),[r]);return o.useSyncExternalStore(t,(()=>su(r)),(()=>su(r)))}:e=>{const r=o.useContext(d)[e],[t,n]=o.useState(Xc(su,r));return fh((()=>ou(r,(e=>{e!==t&&n(Gc(e))}))),[r,t]),t},usePublisher:e=>o.useCallback(Qc(iu,o.useContext(d)[e]),[e])}}const ph=o.createContext(void 0),yh=o.createContext(void 0),vh=typeof document<"u"?o.useLayoutEffect:o.useEffect;function xh(e,r,t,n=eu,i,a){const s=o.useRef(null),l=o.useRef(null),d=o.useRef(null),c=o.useCallback((t=>{const n=t.target,o=n===window||n===document,i=a?o?window.pageXOffset||document.documentElement.scrollLeft:n.scrollLeft:o?window.pageYOffset||document.documentElement.scrollTop:n.scrollTop,s=a?o?document.documentElement.scrollWidth:n.scrollWidth:o?document.documentElement.scrollHeight:n.scrollHeight,c=a?o?window.innerWidth:n.offsetWidth:o?window.innerHeight:n.offsetHeight,u=()=>{e({scrollHeight:s,scrollTop:Math.max(i,0),viewportHeight:c})};t.suppressFlushSync?u():G.flushSync(u),null!==l.current&&(i===l.current||i<=0||i===s-c)&&(l.current=null,r(!0),d.current&&(clearTimeout(d.current),d.current=null))}),[e,r]);return o.useEffect((()=>{const e=i||s.current;return n(i||s.current),c({suppressFlushSync:!0,target:e}),e.addEventListener("scroll",c,{passive:!0}),()=>{n(null),e.removeEventListener("scroll",c)}}),[s,c,t,n,i]),{scrollByCallback:function(e){a&&(e={behavior:e.behavior,left:e.top}),s.current.scrollBy(e)},scrollerRef:s,scrollToCallback:function(t){const n=s.current;if(!n||(a?"offsetWidth"in n&&0===n.offsetWidth:"offsetHeight"in n&&0===n.offsetHeight))return;const o="smooth"===t.behavior;let i,c,u;n===window?(c=Math.max(cg(document.documentElement,a?"width":"height"),a?document.documentElement.scrollWidth:document.documentElement.scrollHeight),i=a?window.innerWidth:window.innerHeight,u=a?document.documentElement.scrollLeft:document.documentElement.scrollTop):(c=n[a?"scrollWidth":"scrollHeight"],i=cg(n,a?"width":"height"),u=n[a?"scrollLeft":"scrollTop"]);const g=c-i;if(t.top=Math.ceil(Math.max(Math.min(g,t.top),0)),Ig(i,c)||t.top===u)return e({scrollHeight:c,scrollTop:u,viewportHeight:i}),void(o&&r(!0));o?(l.current=t.top,d.current&&clearTimeout(d.current),d.current=setTimeout((()=>{d.current=null,l.current=null,r(!0)}),1e3)):l.current=null,a&&(t={behavior:t.behavior,left:t.top}),n.scrollTo(t)}}}const wh="-webkit-sticky",$h="sticky",Fh=dh((()=>{if(typeof document>"u")return $h;const e=document.createElement("div");return e.style.position=wh,e.style.position===wh?wh:$h}));function Ch(e){return e}const Eh=Eu((()=>{const e=wu((e=>`Item ${e}`)),r=wu(null),t=wu((e=>`Group ${e}`)),n=wu({}),o=wu(Ch),i=wu("div"),a=wu(eu),s=(e,r=null)=>$u(bu(n,mu((r=>r[e])),gu()),r);return{components:n,computeItemKey:o,context:r,EmptyPlaceholder:s("EmptyPlaceholder"),FooterComponent:s("Footer"),GroupComponent:s("Group","div"),groupContent:t,HeaderComponent:s("Header"),HeaderFooterTag:i,ItemComponent:s("Item","div"),itemContent:e,ListComponent:s("List","div"),ScrollerComponent:s("Scroller","div"),scrollerRef:a,ScrollSeekPlaceholder:s("ScrollSeekPlaceholder"),TopItemListComponent:s("TopItemList")}})),Sh=Eu((([e,r])=>({...e,...r})),nu(hh,Eh)),Dh=({height:r})=>e("div",{style:{height:r}}),Bh={overflowAnchor:"none",position:Fh(),zIndex:1},kh={overflowAnchor:"none"},Oh={...kh,display:"inline-block",height:"100%"},Th=o.memo((function({showTopList:r=!1}){const t=Gh("listState"),n=Zh("sizeRanges"),i=Gh("useWindowScroll"),a=Gh("customScrollParent"),s=Zh("windowScrollContainerState"),l=Zh("scrollContainerState"),d=a||i?s:l,c=Gh("itemContent"),u=Gh("context"),g=Gh("groupContent"),h=Gh("trackItemSizes"),m=Gh("itemSize"),f=Gh("log"),b=Zh("gap"),p=Gh("horizontalDirection"),{callbackRef:v}=Mu(n,m,h,r?eu:d,f,b,a,p,Gh("skipAnimationFrameInResizeObserver")),[x,w]=o.useState(0);qh("deviation",(e=>{x!==e&&w(e)}));const $=Gh("EmptyPlaceholder"),F=Gh("ScrollSeekPlaceholder")||Dh,C=Gh("ListComponent"),E=Gh("ItemComponent"),S=Gh("GroupComponent"),D=Gh("computeItemKey"),B=Gh("isSeeking"),k=Gh("groupIndices").length>0,O=Gh("alignToBottom"),T=Gh("initialItemFinalLocationReached"),z=r?{}:{boxSizing:"border-box",...p?{display:"inline-block",height:"100%",marginLeft:0!==x?x:O?"auto":0,paddingLeft:t.offsetTop,paddingRight:t.offsetBottom,whiteSpace:"nowrap"}:{marginTop:0!==x?x:O?"auto":0,paddingBottom:t.offsetBottom,paddingTop:t.offsetTop},...T?{}:{visibility:"hidden"}};return!r&&0===t.totalCount&&$?e($,{...jh($,u)}):e(C,{...jh(C,u),"data-testid":r?"virtuoso-top-item-list":"virtuoso-item-list",ref:v,style:z,children:(r?t.topItems:t.items).map((e=>{const r=e.originalIndex,n=D(r+t.firstItemIndex,e.data,u);return B?y(F,{...jh(F,u),height:e.size,index:e.index,key:n,type:e.type||"item",..."group"===e.type?{}:{groupIndex:e.groupIndex}}):"group"===e.type?y(S,{...jh(S,u),"data-index":r,"data-item-index":e.index,"data-known-size":e.size,key:n,style:Bh},g(e.index,u)):y(E,{...jh(E,u),...Lh(E,e.data),"data-index":r,"data-item-group-index":e.groupIndex,"data-item-index":e.index,"data-known-size":e.size,key:n,style:p?Oh:kh},k?c(e.index,e.groupIndex,e.data,u):c(e.index,e.data,u))}))})})),zh={height:"100%",outline:"none",overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},Ah={outline:"none",overflowX:"auto",position:"relative"},Ih=e=>({height:"100%",position:"absolute",top:0,width:"100%",...e?{display:"flex",flexDirection:"column"}:{}}),Mh={position:Fh(),top:0,width:"100%",zIndex:1};function jh(e,r){if("string"!=typeof e)return{context:r}}function Lh(e,r){return{item:"string"==typeof e?void 0:r}}const _h=o.memo((function(){const r=Gh("HeaderComponent"),t=Zh("headerHeight"),n=Gh("HeaderFooterTag"),i=Au(o.useMemo((()=>e=>{t(cg(e,"height"))}),[t]),!0,Gh("skipAnimationFrameInResizeObserver")),a=Gh("context");return r?e(n,{ref:i,children:e(r,{...jh(r,a)})}):null})),Rh=o.memo((function(){const r=Gh("FooterComponent"),t=Zh("footerHeight"),n=Gh("HeaderFooterTag"),i=Au(o.useMemo((()=>e=>{t(cg(e,"height"))}),[t]),!0,Gh("skipAnimationFrameInResizeObserver")),a=Gh("context");return r?e(n,{ref:i,children:e(r,{...jh(r,a)})}):null}));function Hh({useEmitter:r,useEmitterValue:t,usePublisher:n}){return o.memo((function({children:o,style:i,...a}){const s=n("scrollContainerState"),l=t("ScrollerComponent"),d=n("smoothScrollTargetReached"),c=t("scrollerRef"),u=t("context"),g=t("horizontalDirection")||!1,{scrollByCallback:h,scrollerRef:m,scrollToCallback:f}=xh(s,d,l,c,void 0,g);return r("scrollTo",f),r("scrollBy",h),e(l,{"data-testid":"virtuoso-scroller","data-virtuoso-scroller":!0,ref:m,style:{...g?Ah:zh,...i},tabIndex:0,...a,...jh(l,u),children:o})}))}function Ph({useEmitter:r,useEmitterValue:t,usePublisher:n}){return o.memo((function({children:o,style:i,...a}){const s=n("windowScrollContainerState"),l=t("ScrollerComponent"),d=n("smoothScrollTargetReached"),c=t("totalListHeight"),u=t("deviation"),g=t("customScrollParent"),h=t("context"),{scrollByCallback:m,scrollerRef:f,scrollToCallback:b}=xh(s,d,l,eu,g);return vh((()=>(f.current=g||window,()=>{f.current=null})),[f,g]),r("windowScrollTo",b),r("scrollBy",m),e(l,{"data-virtuoso-scroller":!0,style:{position:"relative",...i,...0!==c?{height:c+u}:{}},...a,...jh(l,h),children:o})}))}const Wh=({children:r})=>{const t=o.useContext(ph),n=Zh("viewportHeight"),i=Zh("fixedItemHeight"),a=Gh("alignToBottom"),s=Gh("horizontalDirection"),l=Au(o.useMemo((()=>Kc(n,(e=>cg(e,s?"width":"height")))),[n,s]),!0,Gh("skipAnimationFrameInResizeObserver"));return o.useEffect((()=>{t&&(n(t.viewportHeight),i(t.itemHeight))}),[t,n,i]),e("div",{"data-viewport-type":"element",ref:l,style:Ih(a),children:r})},Nh=({children:r})=>{const t=o.useContext(ph),n=Zh("windowViewportRect"),i=Zh("fixedItemHeight"),a=Gh("customScrollParent"),s=Lu(n,a,Gh("skipAnimationFrameInResizeObserver")),l=Gh("alignToBottom");return o.useEffect((()=>{t&&(i(t.itemHeight),n({offsetTop:0,visibleHeight:t.viewportHeight,visibleWidth:100}))}),[t,n,i]),e("div",{"data-viewport-type":"window",ref:s,style:Ih(l),children:r})},Vh=({children:r})=>{const t=Gh("TopItemListComponent")||"div",n=Gh("headerHeight"),o={...Mh,marginTop:`${n}px`},i=Gh("context");return e(t,{style:o,...jh(t,i),children:r})},Yh=o.memo((function(t){const n=Gh("useWindowScroll"),o=Gh("topItemsIndexes").length>0,i=Gh("customScrollParent"),a=Gh("context"),s=i||n?Xh:Kh,l=i||n?Nh:Wh;return r(s,{...t,...jh(s,a),children:[o&&e(Vh,{children:e(Th,{showTopList:!0})}),r(l,{children:[e(_h,{}),e(Th,{}),e(Rh,{})]})]})})),{Component:Uh,useEmitter:qh,useEmitterValue:Gh,usePublisher:Zh}=bh(Sh,{events:{atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",endReached:"endReached",groupIndices:"groupIndices",isScrolling:"isScrolling",itemsRendered:"itemsRendered",rangeChanged:"rangeChanged",startReached:"startReached",totalListHeightChanged:"totalListHeightChanged"},methods:{autoscrollToBottom:"autoscrollToBottom",getState:"getState",scrollBy:"scrollBy",scrollIntoView:"scrollIntoView",scrollTo:"scrollTo",scrollToIndex:"scrollToIndex"},optional:{alignToBottom:"alignToBottom",atBottomThreshold:"atBottomThreshold",atTopThreshold:"atTopThreshold",components:"components",computeItemKey:"computeItemKey",context:"context",customScrollParent:"customScrollParent",data:"data",defaultItemHeight:"defaultItemHeight",firstItemIndex:"firstItemIndex",fixedItemHeight:"fixedItemHeight",followOutput:"followOutput",groupContent:"groupContent",groupCounts:"groupCounts",headerFooterTag:"HeaderFooterTag",horizontalDirection:"horizontalDirection",increaseViewportBy:"increaseViewportBy",initialItemCount:"initialItemCount",initialScrollTop:"initialScrollTop",initialTopMostItemIndex:"initialTopMostItemIndex",itemContent:"itemContent",itemSize:"itemSize",logLevel:"logLevel",overscan:"overscan",restoreStateFrom:"restoreStateFrom",scrollerRef:"scrollerRef",scrollSeekConfiguration:"scrollSeekConfiguration",skipAnimationFrameInResizeObserver:"skipAnimationFrameInResizeObserver",topItemCount:"topItemCount",totalCount:"totalCount",useWindowScroll:"useWindowScroll"},required:{}},Yh),Kh=Hh({useEmitter:qh,useEmitterValue:Gh,usePublisher:Zh}),Xh=Ph({useEmitter:qh,useEmitterValue:Gh,usePublisher:Zh}),Qh=Uh,Jh={bottom:0,itemHeight:0,items:[],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},em={bottom:0,itemHeight:0,items:[{index:0}],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},{ceil:rm,floor:tm,max:nm,min:om,round:im}=Math;function am(e,r,t){return Array.from({length:r-e+1}).map(((r,n)=>({data:null===t?null:t[n+e],index:n+e})))}function sm(e,r){return e&&e.width===r.width&&e.height===r.height}function lm(e,r){return e&&e.column===r.column&&e.row===r.row}const dm=Eu((([{increaseViewportBy:e,listBoundary:r,overscan:t,visibleRange:n},{footerHeight:o,headerHeight:i,scrollBy:a,scrollContainerState:s,scrollTo:l,scrollTop:d,smoothScrollTargetReached:c,viewportHeight:u},g,h,{didMount:m,propsReady:f},{customScrollParent:b,useWindowScroll:p,windowScrollContainerState:y,windowScrollTo:v,windowViewportRect:x},w])=>{const $=wu(0),F=wu(0),C=wu(Jh),E=wu({height:0,width:0}),S=wu({height:0,width:0}),D=Fu(),B=Fu(),k=wu(0),O=wu(null),T=wu({column:0,row:0}),z=Fu(),A=Fu(),I=wu(!1),M=wu(0),j=wu(!0),L=wu(!1),_=wu(!1);ou(bu(m,xu(M),hu((([e,r])=>!!r))),(()=>{iu(j,!1)})),ou(bu(Du(m,j,S,E,M,L),hu((([e,r,t,n,,o])=>e&&!r&&0!==t.height&&0!==n.height&&!o))),(([,,,,e])=>{iu(L,!0),Tg(1,(()=>{iu(D,e)})),du(bu(d),(()=>{iu(r,[0,0]),iu(j,!0)}))})),lu(bu(A,hu((e=>null!=e&&e.scrollTop>0)),fu(0)),F),ou(bu(m,xu(A),hu((([,e])=>null!=e))),(([,e])=>{e&&(iu(E,e.viewport),iu(S,e.item),iu(T,e.gap),e.scrollTop>0&&(iu(I,!0),du(bu(d,yu(1)),(e=>{iu(I,!1)})),iu(l,{top:e.scrollTop})))})),lu(bu(E,mu((({height:e})=>e))),u),lu(bu(Du(Bu(E,sm),Bu(S,sm),Bu(T,((e,r)=>e&&e.column===r.column&&e.row===r.row)),Bu(d)),mu((([e,r,t,n])=>({gap:t,item:r,scrollTop:n,viewport:e})))),z),lu(bu(Du(Bu($),n,Bu(T,lm),Bu(S,sm),Bu(E,sm),Bu(O),Bu(F),Bu(I),Bu(j),Bu(M)),hu((([,,,,,,,e])=>!e)),mu((([e,[r,t],n,o,i,a,s,,l,d])=>{const{column:c,row:u}=n,{height:g,width:h}=o,{width:m}=i;if(0===s&&(0===e||0===m))return Jh;if(0===h){const r=zg(d,e);return function(e){return{...em,items:e}}(am(r,r+Math.max(s-1,0),a))}const f=cm(m,h,c);let b,p;l?0===r&&0===t&&s>0?(b=0,p=s-1):(b=f*tm((r+u)/(g+u)),p=f*rm((t+u)/(g+u))-1,p=om(e-1,nm(p,f-1)),b=om(p,nm(0,b))):(b=0,p=-1);const y=am(b,p,a),{bottom:v,top:x}=um(i,n,o,y),w=rm(e/f);return{bottom:v,itemHeight:g,items:y,itemWidth:h,offsetBottom:w*g+(w-1)*u-v,offsetTop:x,top:x}}))),C),lu(bu(O,hu((e=>null!==e)),mu((e=>e.length))),$),lu(bu(Du(E,S,C,T),hu((([e,r,{items:t}])=>t.length>0&&0!==r.height&&0!==e.height)),mu((([e,r,{items:t},n])=>{const{bottom:o,top:i}=um(e,n,r,t);return[i,o]})),gu(ag)),r);const R=wu(!1);lu(bu(d,xu(R),mu((([e,r])=>r||0!==e))),R);const H=Cu(bu(Du(C,$),hu((([{items:e}])=>e.length>0)),xu(R),hu((([[e,r],t])=>{const n=e.items[e.items.length-1].index===r-1;return(t||e.bottom>0&&e.itemHeight>0&&0===e.offsetBottom&&e.items.length===r)&&n})),mu((([[,e]])=>e-1)),gu())),P=Cu(bu(Bu(C),hu((({items:e})=>e.length>0&&0===e[0].index)),fu(0),gu())),W=Cu(bu(Bu(C),xu(I),hu((([{items:e},r])=>e.length>0&&!r)),mu((([{items:e}])=>({endIndex:e[e.length-1].index,startIndex:e[0].index}))),gu(ig),vu(0)));lu(W,h.scrollSeekRangeChanged),lu(bu(D,xu(E,S,$,T),mu((([e,r,t,n,o])=>{const i=kg(e),{align:a,behavior:s,offset:l}=i;let d=i.index;"LAST"===d&&(d=n-1),d=nm(0,d,om(n-1,d));let c=gm(r,o,t,d);return"end"===a?c=im(c-r.height+t.height):"center"===a&&(c=im(c-r.height/2+t.height/2)),l&&(c+=l),{behavior:s,top:c}}))),l);const N=$u(bu(C,mu((e=>e.offsetBottom+e.bottom))),0);return lu(bu(x,mu((e=>({height:e.visibleHeight,width:e.visibleWidth})))),E),{customScrollParent:b,data:O,deviation:k,footerHeight:o,gap:T,headerHeight:i,increaseViewportBy:e,initialItemCount:F,itemDimensions:S,overscan:t,restoreStateFrom:A,scrollBy:a,scrollContainerState:s,scrollHeight:B,scrollTo:l,scrollToIndex:D,scrollTop:d,smoothScrollTargetReached:c,totalCount:$,useWindowScroll:p,viewportDimensions:E,windowScrollContainerState:y,windowScrollTo:v,windowViewportRect:x,...h,gridState:C,horizontalDirection:_,initialTopMostItemIndex:M,totalListHeight:N,...g,endReached:H,propsReady:f,rangeChanged:W,startReached:P,stateChanged:z,stateRestoreInProgress:I,...w}}),nu(Vg,_u,_g,oh,Dg,ih,zu));function cm(e,r,t){return nm(1,tm((e+t)/(tm(r)+t)))}function um(e,r,t,n){const{height:o}=t;if(void 0===o||0===n.length)return{bottom:0,top:0};const i=gm(e,r,t,n[0].index);return{bottom:gm(e,r,t,n[n.length-1].index)+o,top:i}}function gm(e,r,t,n){const o=cm(e.width,t.width,r.column),i=tm(n/o),a=i*t.height+nm(0,i-1)*r.row;return a>0?a+r.row:a}const hm=Eu((()=>{const e=wu((e=>`Item ${e}`)),r=wu({}),t=wu(null),n=wu("virtuoso-grid-item"),o=wu("virtuoso-grid-list"),i=wu(Ch),a=wu("div"),s=wu(eu),l=(e,t=null)=>$u(bu(r,mu((r=>r[e])),gu()),t),d=wu(!1),c=wu(!1);return lu(Bu(c),d),{components:r,computeItemKey:i,context:t,FooterComponent:l("Footer"),HeaderComponent:l("Header"),headerFooterTag:a,itemClassName:n,ItemComponent:l("Item","div"),itemContent:e,listClassName:o,ListComponent:l("List","div"),readyStateChanged:d,reportReadyState:c,ScrollerComponent:l("Scroller","div"),scrollerRef:s,ScrollSeekPlaceholder:l("ScrollSeekPlaceholder","div")}})),mm=Eu((([e,r])=>({...e,...r})),nu(dm,hm)),fm=o.memo((function(){const r=Fm("gridState"),t=Fm("listClassName"),n=Fm("itemClassName"),i=Fm("itemContent"),a=Fm("computeItemKey"),s=Fm("isSeeking"),l=Cm("scrollHeight"),d=Fm("ItemComponent"),c=Fm("ListComponent"),u=Fm("ScrollSeekPlaceholder"),g=Fm("context"),h=Cm("itemDimensions"),m=Cm("gap"),f=Fm("log"),b=Fm("stateRestoreInProgress"),p=Cm("reportReadyState"),v=Au(o.useMemo((()=>e=>{const r=e.parentElement.parentElement.scrollHeight;l(r);const t=e.firstChild;if(t){const{height:e,width:r}=t.getBoundingClientRect();h({height:e,width:r})}m({column:Dm("column-gap",getComputedStyle(e).columnGap,f),row:Dm("row-gap",getComputedStyle(e).rowGap,f)})}),[l,h,m,f]),!0,!1);return vh((()=>{r.itemHeight>0&&r.itemWidth>0&&p(!0)}),[r]),b?null:e(c,{className:t,ref:v,...jh(c,g),"data-testid":"virtuoso-item-list",style:{paddingBottom:r.offsetBottom,paddingTop:r.offsetTop},children:r.items.map((t=>{const o=a(t.index,t.data,g);return s?e(u,{...jh(u,g),height:r.itemHeight,index:t.index,width:r.itemWidth},o):y(d,{...jh(d,g),className:n,"data-index":t.index,key:o},i(t.index,t.data,g))}))})})),bm=o.memo((function(){const r=Fm("HeaderComponent"),t=Cm("headerHeight"),n=Fm("headerFooterTag"),i=Au(o.useMemo((()=>e=>{t(cg(e,"height"))}),[t]),!0,!1),a=Fm("context");return r?e(n,{ref:i,children:e(r,{...jh(r,a)})}):null})),pm=o.memo((function(){const r=Fm("FooterComponent"),t=Cm("footerHeight"),n=Fm("headerFooterTag"),i=Au(o.useMemo((()=>e=>{t(cg(e,"height"))}),[t]),!0,!1),a=Fm("context");return r?e(n,{ref:i,children:e(r,{...jh(r,a)})}):null})),ym=({children:r})=>{const t=o.useContext(yh),n=Cm("itemDimensions"),i=Cm("viewportDimensions"),a=Au(o.useMemo((()=>e=>{i(e.getBoundingClientRect())}),[i]),!0,!1);return o.useEffect((()=>{t&&(i({height:t.viewportHeight,width:t.viewportWidth}),n({height:t.itemHeight,width:t.itemWidth}))}),[t,i,n]),e("div",{ref:a,style:Ih(!1),children:r})},vm=({children:r})=>{const t=o.useContext(yh),n=Cm("windowViewportRect"),i=Cm("itemDimensions"),a=Fm("customScrollParent"),s=Lu(n,a,!1);return o.useEffect((()=>{t&&(i({height:t.itemHeight,width:t.itemWidth}),n({offsetTop:0,visibleHeight:t.viewportHeight,visibleWidth:t.viewportWidth}))}),[t,n,i]),e("div",{ref:s,style:Ih(!1),children:r})},xm=o.memo((function({...t}){const n=Fm("useWindowScroll"),o=Fm("customScrollParent"),i=o||n?Sm:Em,a=o||n?vm:ym,s=Fm("context");return e(i,{...t,...jh(i,s),children:r(a,{children:[e(bm,{}),e(fm,{}),e(pm,{})]})})})),{Component:wm,useEmitter:$m,useEmitterValue:Fm,usePublisher:Cm}=bh(mm,{events:{atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",endReached:"endReached",isScrolling:"isScrolling",rangeChanged:"rangeChanged",readyStateChanged:"readyStateChanged",startReached:"startReached",stateChanged:"stateChanged"},methods:{scrollBy:"scrollBy",scrollTo:"scrollTo",scrollToIndex:"scrollToIndex"},optional:{components:"components",computeItemKey:"computeItemKey",context:"context",customScrollParent:"customScrollParent",data:"data",headerFooterTag:"headerFooterTag",increaseViewportBy:"increaseViewportBy",initialItemCount:"initialItemCount",initialTopMostItemIndex:"initialTopMostItemIndex",itemClassName:"itemClassName",itemContent:"itemContent",listClassName:"listClassName",logLevel:"logLevel",overscan:"overscan",restoreStateFrom:"restoreStateFrom",scrollerRef:"scrollerRef",scrollSeekConfiguration:"scrollSeekConfiguration",totalCount:"totalCount",useWindowScroll:"useWindowScroll"}},xm),Em=Hh({useEmitter:$m,useEmitterValue:Fm,usePublisher:Cm}),Sm=Ph({useEmitter:$m,useEmitterValue:Fm,usePublisher:Cm});function Dm(e,r,t){return"normal"!==r&&!(null!=r&&r.endsWith("px"))&&t(`${e} was not resolved to pixel value correctly`,r,Ou.WARN),"normal"===r?0:parseInt(null!=r?r:"0",10)}const Bm=e=>"small"===e?2.5:3;$.div`
    position: relative;
    width: 100%;
    ${e=>{const r=Bm(e.$variant);return F`
            min-height: ${r}rem;
            height: ${r}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`;const km=F`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${Si["spacing-16"]};
    // exclude top and bottom borders
    height: calc(${e=>Bm(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${Di.sm};
    border: none;
    background: transparent;

    &:focus,
    &:active {
        outline: none;
    }

    &:focus-visible {
        outline: 2px solid ${$i["border-focus"]};
    }
`,Om=$.button`
    ${km}
    cursor: pointer;
`;$.div`
    ${km}
`;const Tm=E`
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
    border: ${Ei["width-010"]} ${Ei.solid} ${$i.border};
    border-radius: ${Di.sm};
    background: ${$i.bg};
    overflow: hidden;

    &:focus-within {
        border-color: ${$i["border-focus"]};
        box-shadow: 0px 0px 4px 0px
            rgb(from ${$i["border-focus"]} r g b / 50%) inset; // TODO: confirm shadow
    }

    ${e=>e.$expanded?F`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:F`
                animation: ${Tm} 0.5s ease-in-out;
            `}

    ${e=>e.$disabled?F`
                background: ${$i["bg-disabled"]};

                ${Om} {
                    cursor: not-allowed;
                }

                &:focus-within {
                    border-color: ${$i.border};
                    box-shadow: none;
                }
            `:e.$readOnly?F`
                border: none;
                background: transparent !important;

                ${Om} {
                    padding: 0;
                }

                &:focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.$error?F`
                border-color: ${$i["border-error"]};

                &:focus-within {
                    border-color: ${$i["border-error"]};
                    box-shadow: 0px 0px 4px 0px
                        rgb(from ${$i["border-error"]} r g b / 50%) inset; // TODO: confirm shadow
                }
            `:void 0}
`,$.div`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${Ci["duration-250"]} ${Ci["ease-default"]};
    margin-left: ${Si["spacing-16"]};
`,$(X)`
    color: ${$i.icon};
`,$.div`
    height: 1px;
    background: ${$i.border};
    margin: 0 ${Si["spacing-8"]};
`;const zm=$.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return F`
                color: ${$i["text-disabled"]};
            `}}
`,Am=$.div`
    ${e=>"small"===e.$variant?Fi["body-md-regular"]:Fi["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.$truncateType)return F`
                    ${Ni(1)}
                `}}
    overflow: hidden;
`,Im=$(Am)`
    color: ${$i["text-subtler"]};
`,Mm=e=>"right"===e?"bottom-end":"bottom-start",jm=f({elementWidth:0,styles:{},setFloatingRef:()=>{},getFloatingProps:()=>({})}),Lm=({enabled:n,isOpen:o,onOpen:i,onClose:l,onDismiss:d,renderElement:c,renderDropdown:u,customZIndex:h,clickToToggle:m=!1,offset:f=0,alignment:p="left",fitAvailableHeight:y,rootNode:v,positionRef:x})=>{var w;const $=b(S),F=ki["sm-max"]({theme:$}),C=a(null),{width:E=0}=Sr({targetRef:null!=x?x:C,handleHeight:!1}),D={name:"center",fn:({x:e,rects:r})=>{const t=0===e||e+r.floating.width===window.innerWidth,n=window.innerWidth<F;return{x:t&&n?(window.innerWidth-r.floating.width)/2:e}}},{refs:B,floatingStyles:k,context:T}=I({open:o,onOpenChange:(e,r,t)=>{"escape-key"===t?null==d||d():e&&!o?null==i||i():!e&&o&&(null==l||l(t))},whileElementsMounted:R,placement:Mm(p),middleware:[H(f),P(),W({limiter:N()}),V({apply({availableHeight:e,elements:r}){!y||e>=r.floating.scrollHeight?r.floating.style.setProperty("--available-height",""):r.floating.style.setProperty("--available-height",`${Math.max(0,e)}px`)}}),D]}),z=(()=>{const[e,r]=s(void 0),t=O();return g((()=>{if(!t)return void r(void 0);const e=e=>{r(e.zIndex)};return t.events.on(ia.Change,e),t.events.emit(ia.Ready),()=>t.events.off(ia.Change,e)}),[t]),e})(),{isMounted:A,styles:M}=Y(T,{initial:{opacity:0},open:{opacity:1},duration:300}),G=U(T,{enabled:n,toggle:m,keyboardHandlers:m}),Z=j(T,{enabled:n}),{getReferenceProps:K,getFloatingProps:X}=L([G,Z]),Q={elementWidth:E,styles:Object.assign(Object.assign(Object.assign({},M),k),{zIndex:null!==(w=null!=h?h:z)&&void 0!==w?w:50}),setFloatingRef:B.setFloating,getFloatingProps:X};return r(t,{children:[e("div",Object.assign({ref:e=>{C.current=e,B.setReference(e)}},K(),{children:c()})),A&&e(q,{root:v,children:e(_,{context:T,modal:!1,initialFocus:-1,returnFocus:!1,children:e(jm.Provider,{value:Q,children:u(Q)})})})]})},_m=o.createContext({focusedIndex:-1,setFocusedIndex:()=>{}}),Rm=({children:r})=>{const[t,n]=s(-1);return e(_m.Provider,{value:{focusedIndex:t,setFocusedIndex:n},children:r})},Hm=F`
    outline-offset: -1px;
    outline: ${Ei["width-020"]} ${Ei.solid} ${$i["border-focus"]};
`,Pm=F`
    outline-color: ${$i["border-focus"]};
`,Wm=F`
    outline-color: ${$i["border-disabled"]};
`,Nm=F`
    outline-color: ${$i["border-error-focus"]};
`,Vm=F`
    outline: none;
`,Ym=$.div`
    border: ${Ei["width-010"]} ${Ei.solid} ${$i.border};
    border-radius: ${Di.sm};
    background: ${$i.bg};

    &:focus-within {
        ${Hm}
    }
    ${e=>e.$focused&&!e.$noBorder&&Hm}

    ${e=>e.$readOnly?F`
                border-color: transparent;
                padding: 0;
                background: transparent !important;

                &:focus-within {
                    ${Pm}
                }
                ${e.$focused&&Pm}
            `:e.$disabled?F`
                background: ${$i["bg-disabled"]};
                cursor: not-allowed;

                &:focus-within {
                    ${Wm}
                }
                ${e.$focused&&Wm}
            `:e.$error?F`
                border-color: ${$i["border-error"]};

                &:focus-within {
                    ${Nm}
                }
                ${e.$focused&&Nm}
            `:void 0}
    ${e=>{if(e.$noBorder)return F`
                border-color: transparent;
                background: transparent;
                &:focus-within {
                    ${Vm}
                }
            `}}
`;$(Ym)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 ${Si["spacing-16"]} 0
        ${e=>e.$readOnly?"0":Si["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`;const Um=$.input`
    ${e=>"small"===e.$variant?Fi["body-md-regular"]:Fi["body-baseline-regular"]}
    color: ${$i.text};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    &:disabled {
        color: ${$i["text-subtler"]};

        &:hover {
            cursor: not-allowed;
        }
    }

    &::placeholder,
    &::-webkit-input-placeholder {
        color: ${$i["text-subtler"]};
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
`,qm=$.button`
    background: transparent;
    border: none;
    outline: none;

    &:focus,
    &:active {
        outline: none;
    }

    &:focus-visible {
        outline: ${Ei["width-010"]} ${Ei.solid}
            ${$i["border-focus"]};
        border-radius: ${Di.sm};
    }
`,Gm=$.div`
    border: ${Ei["width-010"]} ${Ei.solid} ${$i.border};
    border-radius: ${Di.sm};
    background: ${$i.bg};

    --x-spacing: 0px;
    --available-width: calc(100vw - var(--x-spacing) * 2);

    ${Oi.MaxWidth.sm} {
        --x-spacing: ${ki["sm-margin"]}px;
        max-height: 15rem;
    }

    ${Oi.MaxWidth.xs} {
        --x-spacing: ${ki["xs-margin"]}px;
    }

    ${Oi.MaxWidth.xxs} {
        --x-spacing: ${ki["xxs-margin"]}px;
    }

    max-width: var(--available-width);

    ${e=>e.$customWidth?`width: ${e.$customWidth};`:e.$width?`width: ${e.$width}px; min-width: min(23rem, var(--available-width));`:"min-width: min(23rem, var(--available-width));"}

    max-height: min(27rem, var(--available-height, infinity * 1px));
    overflow: hidden;
    overflow-y: auto;
    ${e=>"small"===e.$variant?Fi["body-md-regular"]:Fi["body-baseline-regular"]}

    &::-webkit-scrollbar {
        width: 14px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: ${$i["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: ${Di.full};
        background-clip: padding-box;
    }
`,Zm=$.div`
    background: transparent;
    padding: ${Si["spacing-8"]};
`,Km=$.ul`
    list-style-type: none;
`,Xm=$.li`
    display: flex;
    align-items: flex-start;
    gap: ${Si["spacing-8"]};
    padding: ${Si["spacing-12"]} ${Si["spacing-8"]};
    cursor: pointer;
    border: none;
    border-radius: ${Di.none};
    outline: none;

    ${e=>e.$disabled?F`
                cursor: not-allowed;
            `:e.$active&&e.$selected?F`
                background: ${$i["bg-hover"]};
            `:e.$active?F`
                background: ${$i["bg-hover-subtle"]};
            `:void 0}
`,Qm=$(re)`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
    color: ${$i["icon-selected"]};
`,Jm=$.div`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
`,ef=$(ee)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${$i["icon-selected"]};
`,rf=$(Q)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${$i["icon-primary-subtlest"]};
`,tf=$(J)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${$i["icon-disabled-subtle"]};
`,nf=$.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`,of=$(qm)`
    cursor: pointer;
    overflow: hidden;
    color: ${$i["text-primary"]};
    font-size: inherit;
`,af=$(of)`
    ${Fi["body-baseline-semibold"]}
`,sf=$(of)`
    ${Fi["body-md-semibold"]}
    padding: ${Si["spacing-8"]} ${Si["spacing-8"]};
`,lf=$.div`
    width: 100%;
    display: flex;
    padding: ${Si["spacing-12"]} ${Si["spacing-16"]};
    align-items: center;
`,df=$(K)`
    margin-right: ${Si["spacing-4"]};
    color: ${$i["icon-error"]};
    height: 1em;
    width: 1em;
`,cf=$(La)`
    margin-right: ${Si["spacing-8"]};
    color: ${$i.icon};
`,uf=$.div`
    ${ta()}
    color: ${$i["text-subtle"]};
    padding: 0 ${Si["spacing-16"]} ${Si["spacing-12"]}
        ${Si["spacing-16"]};
`,gf=$.div`
    background: ${$i["bg-strong"]};
    border-radius: ${Di.sm};
    display: flex;
    align-items: center;

    ${e=>"small"===e.$variant?Fi["body-md-regular"]:Fi["body-baseline-regular"]}
`,hf=$.label`
    flex: 1;
    display: flex;
    align-items: center;
    gap: ${Si["spacing-8"]};
    padding: ${e=>"small"===e.$variant?F`
                  ${Si["spacing-8"]} ${Si["spacing-16"]}
              `:F`10px ${Si["spacing-8"]}`};
`,mf=$(Um)`
    flex: 1;
`,ff=$(te)`
    color: ${$i.icon};
    flex-shrink: 0;
    height: 1em;
    width: 1em;
`,bf=$(Ji)`
    flex-shrink: 0;
    align-self: stretch;
    box-sizing: content-box;
    padding: ${Si["spacing-8"]};
    margin-left: -${Si["spacing-8"]};
    color: ${$i.icon};
    cursor: pointer;
    font-size: inherit;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`,pf=v(((t,n)=>{var{value:o,variant:i,onClear:a}=t,s=oe(t,["value","variant","onClear"]);return r(gf,{$variant:i,children:[r(hf,{$variant:i,children:[e(ff,{"aria-hidden":!0}),e(mf,Object.assign({ref:n,value:o,$variant:i},s))]}),o&&e(bf,{"aria-label":"Clear search",focusOutline:"browser",onClick:a,children:e(k,{"aria-hidden":!0})})]})})),yf=v((({listItems:n,multiSelect:o,maxSelectable:i,selectedItems:l,disableItemFocus:d,itemsLoadState:c="success",itemTruncationType:u="end",itemMaxLines:h=2,labelDisplayType:f="inline",variant:p="default",listboxId:y,matchElementWidth:v=!1,width:w,topScrollItem:$,onSelectItem:F,onSelectAll:C,onDismiss:E,onRetry:S,valueExtractor:D,listExtractor:B,renderListItem:k,renderCustomCallToAction:O,enableSearch:T,hideNoResultsDisplay:z,noResultsDescription:A,customLabels:I,searchPlaceholder:M,searchFunction:j,onSearch:L},_)=>{const{noResultsLabel:R="No results found.",selectAllButtonLabel:H="Select all",clearAllButtonLabel:P="Clear all"}=I||{},W=(null==I?void 0:I.searchPlaceholder)||M||"Search",N=(null==I?void 0:I.noResultsDescription)||A,{focusedIndex:V,setFocusedIndex:Y}=b(_m),{elementWidth:U,setFloatingRef:q,getFloatingProps:G,styles:Z}=b(jm),[K,X]=s(""),[Q,J]=s(null!=n?n:[]),ee=kr(c),re=(()=>{const[e,r]=s(!1);return g((()=>{r(!0)}),[]),e})(),te=a(null),ne=a(null),oe=a([]),ie=a(null),ae=a(null),se=!!i&&!!l&&(null==l?void 0:l.length)===i,le=e=>{const r=B?B(e):null==e?void 0:e.toString();return"object"==typeof r?{title:r.title,secondaryLabel:r.secondaryLabel}:{title:null!=r?r:""}},de=m((e=>!!Yc(l,(r=>qc(r,e)))),[l]),ce=Dr((()=>null==j?void 0:j(K))),ue=Dr((()=>null==n?void 0:n.filter((e=>{const{title:r,secondaryLabel:t}=le(e),n=K.trim().toLowerCase();return r.toLowerCase().includes(n)||t&&t.toLowerCase().includes(n)})))),ge=m((e=>{var r,t;if(d)return;if(ie.current)return Y(-1),void setTimeout((()=>{var e;return null===(e=ie.current)||void 0===e?void 0:e.focus()}),0);const n=null!=Q?Q:[];if(0===n.length)return;if(void 0!==(null==e?void 0:e.index)){const t=Math.max(0,Math.min(e.index,n.length-1));return null===(r=ae.current)||void 0===r||r.scrollToIndex({index:t,align:"center"}),Y(t),void setTimeout((()=>{var e;return null===(e=oe.current[t])||void 0===e?void 0:e.focus()}),0)}const o=(null==e?void 0:e.preferSelected)?n.findIndex((e=>de(e))):-1,i=-1!==o?o:V>=0&&V<n.length?V:0;null===(t=ae.current)||void 0===t||t.scrollToIndex({index:i,align:"center"}),Y(i),setTimeout((()=>{var e;return null===(e=oe.current[i])||void 0===e?void 0:e.focus()}),0)}),[de,d,Q,V,Y]),he=(e,r)=>{se&&!de(e)||(Y(r),null==F||F(e,(e=>D?D(e):e)(e)))},me=e=>{const r=e.target.value;X(r),null==L||L()},fe=()=>{var e;X(""),null===(e=ie.current)||void 0===e||e.focus(),null==L||L()},be=()=>null==S?void 0:S();((e,r,t="window",n)=>{const o=a();g((()=>{o.current=r}),[r]),g((()=>{let r;switch(t){case"window":r=window;break;case"document":r=document;break;default:r=t}if(!r||!r.addEventListener)return;const i=e=>{var r;return null===(r=o.current)||void 0===r?void 0:r.call(o,e)};return r.addEventListener(e,i,n),()=>{null==r||r.removeEventListener(e,i,n)}}),[e,t])})("keydown",(e=>{var r,t;switch(e.code){case"ArrowDown":if(e.preventDefault(),V<Q.length-1){const e=V+1;null===(r=oe.current[e])||void 0===r||r.focus(),Y(e)}break;case"ArrowUp":if(e.preventDefault(),V>0){const e=V-1;null===(t=oe.current[e])||void 0===t||t.focus(),Y(e)}else 0===V&&ie.current&&(ie.current.focus(),Y(-1));break;case"Space":case"Enter":document.activeElement===oe.current[V]&&(e.preventDefault(),Q[V]&&he(Q[V],V))}})),x(_,(()=>({refocus:ge})),[ge]),g((()=>{var e;if(!$)return void(null===(e=ae.current)||void 0===e||e.scrollTo({top:0}));const r=setTimeout((()=>{if(!n)return;const e=n.indexOf($);ae.current&&-1!==e&&(ae.current.scrollToIndex({index:e}),Y(e))}),0);return()=>clearTimeout(r)}),[oe,n,Y,$]),g((()=>{d||re&&ee&&"success"===c&&ie.current&&(Y(-1),ie.current.focus())}),[re,ee,c,Y,d]),g((()=>{var e;J(null!==(e=""===K?n:j?ce():ue())&&void 0!==e?e:[])}),[ce,ue,n,j,K]),g((()=>{var e,r,t;if(re)return;if(d||!n)return;const o=n.findIndex((e=>de(e)));ie.current?(Y(-1),setTimeout((()=>{var e;return null===(e=ie.current)||void 0===e?void 0:e.focus()}),200)):V>0?(null===(e=ae.current)||void 0===e||e.scrollToIndex({index:V,align:"center"}),setTimeout((()=>{var e;return null===(e=oe.current[V])||void 0===e?void 0:e.focus()}),200)):-1!==o?(null===(r=ae.current)||void 0===r||r.scrollToIndex({index:o,align:"center"}),Y(o),setTimeout((()=>{var e;return null===(e=oe.current[o])||void 0===e?void 0:e.focus()}),200)):(null===(t=ae.current)||void 0===t||t.scrollToIndex({index:0}),Y(0),setTimeout((()=>{var e;return null===(e=oe.current[0])||void 0===e?void 0:e.focus()}),200))}),[de,d,V,n,re,Y]);const pe=r=>o?e(se&&!r?tf:r?ef:rf,{"aria-hidden":!0}):r?e(Qm,{"aria-hidden":!0}):e(Jm,{}),ye=(r,t)=>{const{title:n,secondaryLabel:o}=le(r);return e(hs,{displayType:f,label:n,maxLines:h,selected:t,disabled:!t&&se,sublabel:o,truncationType:u,variant:p})},ve=(n,i)=>{if(!S||"success"===c){const a=de(n),s=i===V;return e(Xm,{"aria-selected":a,"aria-multiselectable":o,"aria-disabled":!a&&se,"aria-posinset":i+1,"aria-setsize":null==Q?void 0:Q.length,"data-testid":"list-item",onClick:()=>he(n,i),onMouseEnter:()=>(e=>Y(e))(i),ref:e=>{oe.current[i]=e},role:"option",tabIndex:s?0:-1,$active:s,$selected:a,$disabled:!a&&se,children:k?k(n,{selected:a}):r(t,{children:[pe(a),ye(n,a)]})},((e,r)=>`item_${r}__${D?D(e):e}`)(n,i))}},xe=()=>{if((T||j)&&"success"===c)return e(pf,{ref:ie,onChange:me,value:K,placeholder:W,"data-testid":"search-input","aria-label":"Enter text to search",onClear:fe,variant:p})},we=()=>{if(l&&o&&Q.length>0&&!K&&"success"===c)return e(nf,{children:e(sf,{onClick:C,type:"button",$variant:p,children:i||0!==l.length?P:H})})},$e=()=>{if(!z&&(K||!T)&&0===Q.length&&"success"===c)return r(t,{children:[r(lf,{"data-testid":"list-no-results",children:[e(df,{"data-testid":"no-result-icon"}),R]}),N&&e(uf,{"data-testid":"no-result-desc",children:N})]})},Fe=()=>{if(S&&"loading"===c)return r(lf,{"data-testid":"list-loading",children:[e(cf,{}),"Loading..."]})},Ce=()=>{if(S&&"fail"===c)return r(lf,{"data-testid":"list-fail",children:[e(df,{"data-testid":"load-error-icon"}),"Failed to load. ",e(af,{onClick:be,type:"button",$variant:p,children:"Try again."})]})},Ee=()=>{var r;const t="test"===process.env.NODE_ENV;return e(Km,{role:"listbox",id:y,children:e(Qh,Object.assign({ref:ae,style:{height:"100%"},data:Q,customScrollParent:null!==(r=te.current)&&void 0!==r?r:void 0,itemContent:(e,r)=>ve(r,e)},t?{initialItemCount:Q.length}:{}),t?Q.length:void 0)})};return r(Gm,Object.assign({"data-testid":"dropdown-container",ref:ke(te,q),style:Z},G(),{$width:v?U:void 0,$customWidth:w,$variant:p,children:[r(Zm,{ref:ne,"data-testid":"dropdown-list",children:[xe(),we(),$e(),Fe(),Ce(),Ee()]}),(()=>{if(O)return e("div",{"data-testid":"custom-cta",children:O(E,Q)})})()]}))})),vf=$(qm)`
    display: flex;
    align-items: center;
    gap: ${Si["spacing-8"]};
    width: 100%;
    padding: ${e=>e.$readOnly?`0 ${Si["spacing-16"]}`:Si["spacing-16"]};

    ${e=>"small"===e.$variant?F`
                  ${Fi["body-md-regular"]}
                  height: calc(2.5rem - 2px); // exclude top and bottom borders
              `:F`
                  ${Fi["body-baseline-regular"]}
                  height: calc(3rem - 2px);
              `}

    &:disabled {
        cursor: not-allowed;
    }

    &:focus-visible {
        outline: 2px solid ${$i["focus-ring"]};
        outline-offset: -2px;
    }
`,xf=$.div`
    display: flex;
    align-items: center;
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${Ci["duration-250"]} ${Ci["ease-default"]};

    svg {
        color: ${$i.icon};
        height: 1em;
        width: 1em;
    }
`,wf=v(((t,n)=>{var{children:o,disabled:i,expanded:a,listboxId:s,popupRole:l,readOnly:d,variant:c}=t,u=oe(t,["children","disabled","expanded","listboxId","popupRole","readOnly","variant"]);return r(vf,Object.assign({ref:n,type:"button",role:"combobox","aria-expanded":a,"aria-haspopup":l,"aria-controls":a?s:void 0,"data-testid":"selector","aria-disabled":i,"aria-readonly":d,$variant:c,$readOnly:d},u,{children:[o,!d&&e(xf,{$expanded:a,$variant:c,children:e(X,{"aria-hidden":!0})})]}))}));$.li`
    display: ${e=>e.$visible?"flex":"none"};
`,$.div`
    flex: 1;
    display: flex;
    align-items: flex-start;
    gap: ${Si["spacing-8"]};
    padding: ${Si["spacing-12"]} ${Si["spacing-8"]};
    cursor: ${e=>e.$toggleable?"default":"pointer"};
    overflow: hidden; // required for label to truncate properly
    border-radius: ${Di.none};
    outline: none;

    ${e=>e.$active&&F`
            background: ${$i["bg-hover"]};
        `}
`,$.div`
    height: 1px;
    width: calc((1lh + ${Si["spacing-8"]}) * ${e=>e.$level});
`,$.div`
    width: 1lh;
    height: 1lh;
    color: ${$i["icon-primary"]};
    cursor: pointer;

    svg {
        width: 1lh;
        height: 1lh;
        transition: transform ${Ci["duration-350"]}
            ${Ci["ease-standard"]};

        ${e=>{if(e.$expanded)return F`
                    transform: rotate(90deg);
                `}}
    }
`,$.div`
    width: 1lh;
    height: 1lh;
    margin-right: ${Si["spacing-8"]};
`,$.div`
    flex-shrink: 0;
    height: 1lh;
    width: ${e=>e.$hasNestedSiblings?"1lh":Si["spacing-16"]};

    display: flex;
    justify-content: center;
`,$(ne)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${$i["icon-selected"]};
`;const $f=$(Um)`
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders

    ${e=>"no-border"!==e.$styleType&&F`
            padding-left: ${e.$visuallyReadOnly?0:Si["spacing-16"]};
            padding-right: ${e.$visuallyReadOnly||e.$showClear?0:Si["spacing-16"]};
        `}
`,Ff=$(qm)`
    height: auto;
    padding: ${Si["spacing-12"]} ${Si["spacing-16"]};

    cursor: pointer;
    color: ${$i.icon};

    ${e=>"no-border"===e.$styleType&&F`
            margin-right: -${Si["spacing-12"]};
        `}
`,Cf=$(k)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`,Ef=$.div`
    display: flex;
    width: 100%;
`,Sf=$(Ym)`
    display: flex;
    align-items: center;
    width: 100%;
`,Df=o.forwardRef(((n,o)=>{var{value:i,spacing:s,type:l,error:d,disabled:c,readOnly:u,onChange:g,onClear:h,allowClear:m=!1,className:f,styleType:b="bordered"}=n,p=oe(n,["value","spacing","type","error","disabled","readOnly","onChange","onClear","allowClear","className","styleType"]);const y=((e,r)=>"tel"===e&&!!r)(l,s),v=a(null);x(o,(()=>v.current),[]);const w=Br({ref:v,formatter:e=>y?Te.transformWithSpaces(e,s):e}),$=e=>{g&&(y?C(e):g(e))},F=()=>{h&&h(),v&&v.current&&v.current.focus()},C=e=>{const r=w();if(!r)return;const{nextValue:t,updateCaretPosition:n}=r,o=t.replace(/\s/g,"");e.target.value=o,null==g||g(e),n()},E=i?(e=>e?y?Te.transformWithSpaces(e,s):e:"")(i):i,S=m&&!c&&!u&&!!i,D=()=>r(t,{children:[e($f,Object.assign({"data-testid":"input",ref:v,"aria-disabled":c,value:E,onChange:$,type:l,readOnly:u||c,$showClear:S,$styleType:b,$visuallyReadOnly:u},p)),S&&e(Ff,{onClick:F,type:"button","aria-label":"Clear input",$styleType:b,children:e(Cf,{"aria-hidden":!0})})]});return e(t,{children:"no-border"===b?e(Ef,{className:f,children:D()}):e(Sf,{$disabled:c,$error:d,$readOnly:u,className:f,children:D()})})})),Bf=$(Ym)`
    display: flex;
    align-items: center;

    ${e=>"right"===e.$position?F`
                    flex-direction: row-reverse;
                `:F`
                    flex-direction: row;
                `}
`,kf=$(wf)`
    ${e=>{if(e.$noBorder)return"right"===e.$position?F`
                        padding-right: 0;
                    `:F`
                        padding-left: 0;
                    `}}
`,Of=$.div`
    flex: 0 0 auto;
`,Tf=$(Df)`
    ${e=>e.readOnly?F`
                padding: 0;
            `:e.$noBorder?"right"===e.$position?F`
                        padding-left: 0;
                    `:F`
                        padding-right: 0;
                    `:"right"===e.$position?F`
                    padding-left: ${Si["spacing-16"]};
                `:F`
                    padding-right: ${Si["spacing-16"]};
                `}
`,zf=$.div`
    padding: 10px 0; // TODO: confirm vertical spacing
    display: flex;
    align-items: center;
    padding: 0;
    background: transparent;
    margin-right: ${Si["spacing-12"]};
    color: ${$i.text};
`,Af=$.div`
    width: 1px;
    background: ${$i.border};
    flex-shrink: 0;
    height: 1.25rem;

    ${e=>{if(e.$readOnly)return F`
                display: none;
            `}}

    ${e=>"right"===e.$position?F`
                    margin-left: ${Si["spacing-12"]};
                `:F`
                    margin-right: ${Si["spacing-12"]};
                `}
`,If=o.forwardRef(((t,n)=>{var{addon:o,error:i,onChange:l,readOnly:d,disabled:c,className:u,onBlur:h,noBorder:m,"data-testid":f,"aria-labelledby":b,"aria-describedby":p,"aria-invalid":y,"aria-label":v}=t,x=oe(t,["addon","error","onChange","readOnly","disabled","className","onBlur","noBorder","data-testid","aria-labelledby","aria-describedby","aria-invalid","aria-label"]);const{valueExtractor:w,listExtractor:$,enableSearch:F,hideNoResultsDisplay:C,noResultsDescription:E,searchPlaceholder:S,searchFunction:D,onSearch:B,placeholder:k="Select",displayValueExtractor:O,"data-selector-testid":T,options:z,selectedOption:A,onSelectOption:I,optionsLoadState:M,optionTruncationType:j,onRetry:L,onHideOptions:_,onShowOptions:R,dropdownZIndex:H,dropdownRootNode:P,"aria-label":W}=o.attributes,{position:N}=o,[V,Y]=s(A),[U,q]=s(!1),[G,Z]=s(!1),[K]=s((()=>Oe.generate())),X=`${K}-listbox`,Q=`${K}-instruction`,J=`${K}-combobox-label`,ee=`${K}-textbox-label`,re=a(null),te=a(null);g((()=>{Y(A)}),[A]);const ne=()=>{if(V)return O?O(V):w?w(V):V.toString()},ie=e=>{e?null==R||R():null==_||_()},ae=(e,r)=>{var t;null===(t=te.current)||void 0===t||t.focus(),Y(e),q(!1),ie(!1),null==I||I(e,r)},se=()=>{U&&(q(!1),ie(!1))},le=()=>{q(!0),ie(!0),Z(!0)},de=e=>{q(!1),ie(!1),"click"!==e&&(Z(!1),null==h||h())},ce=()=>{var e;null===(e=te.current)||void 0===e||e.focus(),q(!1),ie(!1)},ue=()=>r("div",{children:[e(kf,{ref:te,disabled:c,expanded:U,listboxId:X,popupRole:"listbox",readOnly:d,"aria-labelledby":as(b,J),"aria-describedby":as(p,Q),"aria-invalid":y,$noBorder:m,$position:N,children:e(zm,{$disabled:c,children:V?e(Am,{children:ne()}):e(Im,{children:k})})}),e(is,{id:Q,children:"Press space to open options"})]}),ge=()=>e(yf,{listboxId:X,listItems:z,onSelectItem:ae,onDismiss:se,valueExtractor:w,listExtractor:$,enableSearch:F,hideNoResultsDisplay:C,noResultsDescription:E,searchPlaceholder:S,searchFunction:D,onSearch:B,selectedItems:V?[V]:[],itemsLoadState:M,itemTruncationType:j,onRetry:L,matchElementWidth:!0});return e(Rm,{children:r(Bf,{$focused:G,$disabled:c,$readOnly:d,$error:i,$position:N,ref:re,className:u,"data-testid":f,$noBorder:m,tabIndex:-1,onFocus:()=>{G||U||Z(!0)},onBlur:e=>{G&&!U&&re.current&&!re.current.contains(e.relatedTarget)&&(Z(!1),null==h||h())},children:[e(is,{"aria-hidden":!0,id:J,children:W}),e(Of,{"data-testid":T,children:d?V?e(zf,{"data-testid":"selector-label",tabIndex:0,role:"combobox","aria-haspopup":"listbox","aria-readonly":!0,"aria-expanded":!1,"aria-labelledby":b,"aria-describedby":p,"aria-invalid":y,children:e(Am,{children:ne()})}):null:e(Lm,{enabled:!d&&!c,isOpen:U,renderElement:ue,renderDropdown:ge,onOpen:le,onClose:de,onDismiss:ce,clickToToggle:!0,offset:8,alignment:"right"===N?"right":"left",fitAvailableHeight:!0,customZIndex:H,rootNode:P,positionRef:re})}),e(Af,{$readOnly:d,$position:N}),e(is,{"aria-hidden":!0,id:ee,children:v}),e(Tf,Object.assign({ref:n},x,{$position:N,$noBorder:m,readOnly:d,disabled:c,error:i,onChange:e=>{l&&l(e)},"data-testid":"input",styleType:"no-border","aria-labelledby":as(b,ee),"aria-describedby":p,"aria-invalid":y}))]})})})),Mf=$(Ym)`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0
        ${e=>e.$readOnly||e.$noBorder?"0":Si["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,jf=$(Ym)`
    display: flex;
    position: relative;
    width: 100%;
    padding: 0
        ${e=>e.$readOnly||e.$noBorder?"0":Si["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,Lf=$(Df)``,_f=$.div`
    position: relative;
    display: flex;
    align-items: center;

    ${Fi["body-baseline-regular"]}
    color: ${$i.text};

    /* SVG Icon */
    svg {
        height: 1em;
        width: 1em;
    }

    ${e=>{if(e.$disabled)return F`
                color: ${$i["text-subtler"]};
            `}}

    ${e=>"right"===e.$position?F`
                    margin-left: ${e.$readOnly?Si["spacing-4"]:Si["spacing-12"]};
                `:F`
                    margin-right: ${e.$readOnly?Si["spacing-4"]:Si["spacing-12"]};
                `};
`,Rf=o.forwardRef(((t,n)=>{var{addon:o,error:i,className:a}=t,s=oe(t,["addon","error","className"]);const l=()=>e(jf,{$disabled:s.disabled,$error:i,$readOnly:s.readOnly,"data-testid":s["data-testid"],className:a,$noBorder:s.noBorder,children:e(Lf,Object.assign({ref:n},s,{"data-testid":"input",styleType:"no-border"}))});if(!o)return l();{const{type:t="label",position:d="left"}=o,{allowClear:c}=s;switch(t){case"list":{const r=o.attributes;return r.options&&r.options.length>0?e(If,Object.assign({ref:n,addon:o,error:i,className:a,noBorder:s.noBorder},s)):l()}case"custom":{const t=o.attributes;return t.children?r(Mf,{$error:i,$disabled:s.disabled,$readOnly:s.readOnly,"data-testid":s["data-testid"],$position:d,className:a,$noBorder:s.noBorder,children:[e(_f,{"data-testid":"addon",$disabled:s.disabled,$readOnly:s.readOnly,$position:d,children:t.children}),e(Lf,Object.assign({ref:n},s,{allowClear:c&&"right"!==d,error:i,"data-testid":"input",styleType:"no-border"}))]}):l()}default:{const t=o.attributes;return t.value?r(Mf,{$disabled:s.disabled,$error:i,$readOnly:s.readOnly,"data-testid":s["data-testid"],$position:d,className:a,$noBorder:s.noBorder,children:[e(_f,{"data-testid":"addon",$disabled:s.disabled,$readOnly:s.readOnly,$position:d,children:t.value}),e(Lf,Object.assign({ref:n},s,{allowClear:c&&"right"!==d,error:i,"data-testid":"input",styleType:"no-border"}))]}):l()}}}}));var Hf=function(e,r,t,n){var o=-1,i=null==e?0:e.length;for(n&&i&&(t=e[++o]);++o<i;)t=r(t,e[o],o,e);return t};var Pf=function(e){return function(r,t,n){for(var o=-1,i=Object(r),a=n(r),s=a.length;s--;){var l=a[e?s:++o];if(!1===t(i[l],l,i))break}return r}},Wf=Pf(),Nf=Xl;var Vf=ql;var Yf=function(e,r){return function(t,n){if(null==t)return t;if(!Vf(t))return e(t,n);for(var o=t.length,i=r?o:-1,a=Object(t);(r?i--:++i<o)&&!1!==n(a[i],i,a););return t}}((function(e,r){return e&&Wf(e,r,Nf)}));var Uf=Hf,qf=Yf,Gf=Fc,Zf=function(e,r,t,n,o){return o(e,(function(e,o,i){t=n?(n=!1,e):r(t,e,o,i)})),t},Kf=Ar;var Xf=se((function(e,r,t){var n=Kf(e)?Uf:Zf,o=arguments.length<3;return n(e,Gf(r),t,o,qf)}));const Qf=[["Afghanistan",["asia"],"af","93"],["Albania",["europe"],"al","355"],["Algeria",["africa","north-africa"],"dz","213"],["Andorra",["europe"],"ad","376"],["Angola",["africa"],"ao","244"],["Antigua and Barbuda",["america","carribean"],"ag","1268"],["Argentina",["america","south-america"],"ar","54","(..) ........"],["Armenia",["asia","ex-ussr"],"am","374",".. ......"],["Aruba",["america","carribean"],"aw","297"],["Australia",["oceania"],"au","61","(..) .... ...."],["Austria",["europe","eu-union"],"at","43"],["Azerbaijan",["asia","ex-ussr"],"az","994","(..) ... .. .."],["Bahamas",["america","carribean"],"bs","1242"],["Bahrain",["middle-east"],"bh","973"],["Bangladesh",["asia"],"bd","880"],["Barbados",["america","carribean"],"bb","1246"],["Belarus",["europe","ex-ussr"],"by","375","(..) ... .. .."],["Belgium",["europe","eu-union"],"be","32","... .. .. .."],["Belize",["america","central-america"],"bz","501"],["Benin",["africa"],"bj","229"],["Bhutan",["asia"],"bt","975"],["Bolivia",["america","south-america"],"bo","591"],["Bosnia and Herzegovina",["europe","ex-yugos"],"ba","387"],["Botswana",["africa"],"bw","267"],["Brazil",["america","south-america"],"br","55","(..) ........."],["British Indian Ocean Territory",["asia"],"io","246"],["Brunei",["asia"],"bn","673"],["Bulgaria",["europe","eu-union"],"bg","359"],["Burkina Faso",["africa"],"bf","226"],["Burundi",["africa"],"bi","257"],["Cambodia",["asia"],"kh","855"],["Cameroon",["africa"],"cm","237"],["Canada",["america","north-america"],"ca","1","(...) ... ...."],["Cape Verde",["africa"],"cv","238"],["Caribbean Netherlands",["america","carribean"],"bq","599",""],["Central African Republic",["africa"],"cf","236"],["Chad",["africa"],"td","235"],["Chile",["america","south-america"],"cl","56"],["China",["asia"],"cn","86",".. ........."],["Colombia",["america","south-america"],"co","57","... ... ...."],["Comoros",["africa"],"km","269"],["Congo",["africa"],"cd","243"],["Congo",["africa"],"cg","242"],["Costa Rica",["america","central-america"],"cr","506",".... ...."],["Côte d’Ivoire",["africa"],"ci","225",".. .. .. .."],["Croatia",["europe","eu-union","ex-yugos"],"hr","385"],["Cuba",["america","carribean"],"cu","53"],["Curaçao",["america","carribean"],"cw","599",""],["Cyprus",["europe","eu-union"],"cy","357",".. ......"],["Czech Republic",["europe","eu-union"],"cz","420","... ... ..."],["Denmark",["europe","eu-union","baltic"],"dk","45",".. .. .. .."],["Djibouti",["africa"],"dj","253"],["Dominica",["america","carribean"],"dm","1767"],["Dominican Republic",["america","carribean"],"do","1",""],["Ecuador",["america","south-america"],"ec","593"],["Egypt",["africa","north-africa"],"eg","20"],["El Salvador",["america","central-america"],"sv","503",".... ...."],["Equatorial Guinea",["africa"],"gq","240"],["Eritrea",["africa"],"er","291"],["Estonia",["europe","eu-union","ex-ussr","baltic"],"ee","372",".... ......"],["Ethiopia",["africa"],"et","251"],["Fiji",["oceania"],"fj","679"],["Finland",["europe","eu-union","baltic"],"fi","358",".. ... .. .."],["France",["europe","eu-union"],"fr","33",". .. .. .. .."],["French Guiana",["america","south-america"],"gf","594"],["French Polynesia",["oceania"],"pf","689"],["Gabon",["africa"],"ga","241"],["Gambia",["africa"],"gm","220"],["Georgia",["asia","ex-ussr"],"ge","995"],["Germany",["europe","eu-union","baltic"],"de","49",".... ........"],["Ghana",["africa"],"gh","233"],["Greece",["europe","eu-union"],"gr","30"],["Grenada",["america","carribean"],"gd","1473"],["Guadeloupe",["america","carribean"],"gp","590","",0],["Guam",["oceania"],"gu","1671"],["Guatemala",["america","central-america"],"gt","502",".... ...."],["Guinea",["africa"],"gn","224"],["Guinea-Bissau",["africa"],"gw","245"],["Guyana",["america","south-america"],"gy","592"],["Haiti",["america","carribean"],"ht","509",".... ...."],["Honduras",["america","central-america"],"hn","504"],["Hong Kong",["asia"],"hk","852",".... ...."],["Hungary",["europe","eu-union"],"hu","36"],["Iceland",["europe"],"is","354","... ...."],["India",["asia"],"in","91","..... ....."],["Indonesia",["asia"],"id","62"],["Iran",["middle-east"],"ir","98","... ... ...."],["Iraq",["middle-east"],"iq","964"],["Ireland",["europe","eu-union"],"ie","353",".. ......."],["Israel",["middle-east"],"il","972","... ... ...."],["Italy",["europe","eu-union"],"it","39","... ......."],["Jamaica",["america","carribean"],"jm","1876"],["Japan",["asia"],"jp","81",".. .... ...."],["Jordan",["middle-east"],"jo","962"],["Kazakhstan",["asia","ex-ussr"],"kz","7","... ... .. .."],["Kenya",["africa"],"ke","254"],["Kiribati",["oceania"],"ki","686"],["Kosovo",["europe","ex-yugos"],"xk","383"],["Kuwait",["middle-east"],"kw","965"],["Kyrgyzstan",["asia","ex-ussr"],"kg","996","... ... ..."],["Laos",["asia"],"la","856"],["Latvia",["europe","eu-union","ex-ussr","baltic"],"lv","371",".. ... ..."],["Lebanon",["middle-east"],"lb","961"],["Lesotho",["africa"],"ls","266"],["Liberia",["africa"],"lr","231"],["Libya",["africa","north-africa"],"ly","218"],["Liechtenstein",["europe"],"li","423"],["Lithuania",["europe","eu-union","ex-ussr","baltic"],"lt","370"],["Luxembourg",["europe","eu-union"],"lu","352"],["Macau",["asia"],"mo","853"],["Macedonia",["europe","ex-yugos"],"mk","389"],["Madagascar",["africa"],"mg","261"],["Malawi",["africa"],"mw","265"],["Malaysia",["asia"],"my","60",".. .... ...."],["Maldives",["asia"],"mv","960"],["Mali",["africa"],"ml","223"],["Malta",["europe","eu-union"],"mt","356"],["Marshall Islands",["oceania"],"mh","692"],["Martinique",["america","carribean"],"mq","596"],["Mauritania",["africa"],"mr","222"],["Mauritius",["africa"],"mu","230"],["Mexico",["america","central-america"],"mx","52","... ... ...."],["Micronesia",["oceania"],"fm","691"],["Moldova",["europe"],"md","373","(..) .. .. .."],["Monaco",["europe"],"mc","377"],["Mongolia",["asia"],"mn","976"],["Montenegro",["europe","ex-yugos"],"me","382"],["Morocco",["africa","north-africa"],"ma","212"],["Mozambique",["africa"],"mz","258"],["Myanmar",["asia"],"mm","95"],["Namibia",["africa"],"na","264"],["Nauru",["africa"],"nr","674"],["Nepal",["asia"],"np","977"],["Netherlands",["europe","eu-union"],"nl","31",".. ........"],["New Caledonia",["oceania"],"nc","687"],["New Zealand",["oceania"],"nz","64","... ... ...."],["Nicaragua",["america","central-america"],"ni","505"],["Niger",["africa"],"ne","227"],["Nigeria",["africa"],"ng","234"],["North Korea",["asia"],"kp","850"],["Norway",["europe","baltic"],"no","47","... .. ..."],["Oman",["middle-east"],"om","968"],["Pakistan",["asia"],"pk","92","... ......."],["Palau",["oceania"],"pw","680"],["Palestine",["middle-east"],"ps","970"],["Panama",["america","central-america"],"pa","507"],["Papua New Guinea",["oceania"],"pg","675"],["Paraguay",["america","south-america"],"py","595"],["Peru",["america","south-america"],"pe","51"],["Philippines",["asia"],"ph","63",".... ......."],["Poland",["europe","eu-union","baltic"],"pl","48","... ... ..."],["Portugal",["europe","eu-union"],"pt","351"],["Puerto Rico",["america","carribean"],"pr","1",""],["Qatar",["middle-east"],"qa","974"],["Réunion",["africa"],"re","262"],["Romania",["europe","eu-union"],"ro","40"],["Russia",["europe","asia","ex-ussr","baltic"],"ru","7","(...) ... .. .."],["Rwanda",["africa"],"rw","250"],["Saint Kitts and Nevis",["america","carribean"],"kn","1869"],["Saint Lucia",["america","carribean"],"lc","1758"],["Saint Vincent and the Grenadines",["america","carribean"],"vc","1784"],["Samoa",["oceania"],"ws","685"],["San Marino",["europe"],"sm","378"],["São Tomé and Príncipe",["africa"],"st","239"],["Saudi Arabia",["middle-east"],"sa","966"],["Senegal",["africa"],"sn","221"],["Serbia",["europe","ex-yugos"],"rs","381"],["Seychelles",["africa"],"sc","248"],["Sierra Leone",["africa"],"sl","232"],["Singapore",["asia"],"sg","65",".... ...."],["Slovakia",["europe","eu-union"],"sk","421"],["Slovenia",["europe","eu-union","ex-yugos"],"si","386"],["Solomon Islands",["oceania"],"sb","677"],["Somalia",["africa"],"so","252"],["South Africa",["africa"],"za","27"],["South Korea",["asia"],"kr","82","... .... ...."],["South Sudan",["africa","north-africa"],"ss","211"],["Spain",["europe","eu-union"],"es","34","... ... ..."],["Sri Lanka",["asia"],"lk","94"],["Sudan",["africa"],"sd","249"],["Suriname",["america","south-america"],"sr","597"],["Swaziland",["africa"],"sz","268"],["Sweden",["europe","eu-union","baltic"],"se","46","(...) ... ..."],["Switzerland",["europe"],"ch","41",".. ... .. .."],["Syria",["middle-east"],"sy","963"],["Taiwan",["asia"],"tw","886"],["Tajikistan",["asia","ex-ussr"],"tj","992"],["Tanzania",["africa"],"tz","255"],["Thailand",["asia"],"th","66"],["Timor-Leste",["asia"],"tl","670"],["Togo",["africa"],"tg","228"],["Tonga",["oceania"],"to","676"],["Trinidad and Tobago",["america","carribean"],"tt","1868"],["Tunisia",["africa","north-africa"],"tn","216"],["Turkey",["europe"],"tr","90","... ... .. .."],["Turkmenistan",["asia","ex-ussr"],"tm","993"],["Tuvalu",["asia"],"tv","688"],["Uganda",["africa"],"ug","256"],["Ukraine",["europe","ex-ussr"],"ua","380","(..) ... .. .."],["United Arab Emirates",["middle-east"],"ae","971"],["United Kingdom",["europe","eu-union"],"gb","44",".... ......"],["United States",["america","north-america"],"us","1","(...) ... ...."],["Uruguay",["america","south-america"],"uy","598"],["Uzbekistan",["asia","ex-ussr"],"uz","998",".. ... .. .."],["Vanuatu",["oceania"],"vu","678"],["Vatican City",["europe"],"va","39",".. .... ...."],["Venezuela",["america","south-america"],"ve","58"],["Vietnam",["asia"],"vn","84"],["Yemen",["middle-east"],"ye","967"],["Zambia",["africa"],"zm","260"],["Zimbabwe",["africa"],"zw","263"]],Jf=(e,r,t,n)=>t?e+"".padEnd(r.length,".")+" "+t:e+"".padEnd(r.length,".")+" "+n;var eb;!function(e){e.getCountries=()=>[].concat(...Qf.map((e=>({name:e[0],regions:e[1],iso2:e[2],countryCode:e[3],format:Jf("+",e[3],e[4],"... ... ... ... ..")})))),e.formatNumber=(e="",r)=>{if(!r)return e;const t=e.replace(/[\s()]+/g,""),{format:n}=r,o=n.split(" ");o.shift();const i=o.join(" ");return Xf(i,((e,r)=>{if(0===e.remainingText.length)return e;if("."!==r)return{formattedText:e.formattedText+r,remainingText:e.remainingText};const t=e.remainingText.slice(0,1),n=e.remainingText.slice(1);return{formattedText:e.formattedText+t,remainingText:n}}),{formattedText:"",remainingText:t}).formattedText}}(eb||(eb={}));const rb=e=>e?e.replace("+",""):"",tb=e=>e?e.includes("+")?e:`+${e}`:"",nb=$.div`
    display: flex;
    flex-direction: column;
`,ob=$.div`
    display: flex;
`,ib=$.div`
    display: flex;
    align-items: center;
    width: ${e=>e.$isMaxWidth?"100%":"auto"};
    border-radius: ${Di.sm} 0 0 ${Di.sm};
    box-shadow: inset 1px 0 0 ${$i.border},
        inset 0 1px 0 ${$i.border}, inset 0 -1px 0 ${$i.border};

    &:focus-within {
        box-shadow: inset 2px 0 0 ${$i["border-focus"]},
            inset 0 2px 0 ${$i["border-focus"]},
            inset 0 -2px 0 ${$i["border-focus"]};
    }

    ${e=>e.$error?F`
                box-shadow: inset 1px 0 0 ${$i["border-error"]},
                    inset 0 1px 0 ${$i["border-error"]},
                    inset 0 -1px 0 ${$i["border-error"]};

                &:focus-within {
                    box-shadow: inset 2px 0 0 ${$i["border-error-focus"]},
                        inset 0 2px 0 ${$i["border-error-focus"]},
                        inset 0 -2px 0 ${$i["border-error-focus"]};
                }
            `:e.$disabled?F`
                box-shadow: inset 0 0 0 1px ${$i.border};
                border-radius: ${Di.sm};
                background: ${$i["bg-disabled"]};
                color: ${$i["text-disabled"]};
                &:focus-within {
                    box-shadow: inset 0 0 0 2px ${$i.border};
                }

                /* Spacer to maintain width when disabled */
                ${!e.$isMaxWidth&&F`
                    &::after {
                        content: "";
                        min-width: 120px;
                        flex-shrink: 0;
                    }

                    /* Hide spacer on mobile to prevent text coverage */
                    ${Oi.MaxWidth.sm} {
                        &::after {
                            display: none;
                        }
                    }
                `}
            `:e.$readonly?F`
                box-shadow: none;
                border-radius: ${Di.sm};
                &:focus-within {
                    box-shadow: inset 0 0 0 2px ${$i["border-focus"]};
                }
            `:void 0}
`,ab=$.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 ${Si["spacing-12"]};
    color: ${$i["icon-success"]};
    flex-shrink: 0;

    svg {
        width: 1.25rem;
        height: 1.25rem;
    }
`,sb=$(os.Default)`
    min-width: 120px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    flex-shrink: 0;
    ${Oi.MaxWidth.sm} {
        width: fit-content;
    }
`,lb=$(Rf)`
    padding: 0 ${Si["spacing-16"]};
    width: 100%;
    background: transparent;

    ${e=>e.disabled&&F`
            input {
                color: ${$i["text-disabled"]};
            }
        `}

    ${e=>e.readOnly&&F`
            padding: 0;
        `}
`,db=$((r=>{var{onChange:t,value:n,allowClear:o,onClear:i,onBlur:l,error:d,fixedCountry:c=!1,optionPlaceholder:u="Select",optionSearchPlaceholder:h,enableSearch:m,onHideOptions:f,onShowOptions:b,placeholder:p,autoComplete:y,noBorder:v=!1}=r,x=oe(r,["onChange","value","allowClear","onClear","onBlur","error","fixedCountry","optionPlaceholder","optionSearchPlaceholder","enableSearch","onHideOptions","onShowOptions","placeholder","autoComplete","noBorder"]);const[w]=s(eb.getCountries()),[$,F]=s(void 0),[C,E]=s(""),S=a(null),D=Br({ref:S,formatter:e=>eb.formatNumber(e.replace(/[^0-9]/g,""),$)});g((()=>{const e=w.filter((e=>e.countryCode===rb(null==n?void 0:n.countryCode)))[0];F(e),E(eb.formatNumber(null==n?void 0:n.number,e))}),[n]);const B=e=>{O(C,e),t&&k(C,e)},k=(e,r)=>{const n=eb.formatNumber(e,r);null==t||t({number:n.replace(/[\s()]+/g,""),countryCode:r&&tb(r.countryCode)})},O=(e,r)=>{E(eb.formatNumber(e,r)),F(r)};return e(Rf,Object.assign({ref:S,value:C,onChange:()=>{const e=D();if(!e)return;const{nextValue:r,updateCaretPosition:n}=e;n(),O(r,$),t&&k(r,$)},allowClear:o&&!!C,onClear:()=>{i?i():E("")},onBlur:l,error:d,placeholder:p,addon:c?{type:"label",attributes:{value:tb(null==$?void 0:$.countryCode)}}:{type:"list",attributes:{"aria-label":"Country code",placeholder:u,options:w,selectedOption:$,enableSearch:m,searchPlaceholder:h,valueExtractor:e=>`+${e.countryCode}`,listExtractor:e=>({title:e.name,secondaryLabel:tb(e.countryCode)}),onSelectOption:B,onHideOptions:f,onShowOptions:b}},inputMode:"numeric",autoComplete:y,"aria-label":"Enter phone number",noBorder:v},x))}))`
    padding: 0 ${Si["spacing-16"]};
    background: transparent;

    ${e=>e.disabled&&F`
            input {
                color: ${$i["text-disabled"]};
            }
        `}

    ${e=>e.readOnly&&F`
            padding: 0;
            input {
                margin-left: ${Si["spacing-12"]};
            }
        `}
`,cb=({id:t,"data-testid":n,disabled:o,readOnly:i,inputId:a,type:s,sendOtpPlaceholder:l,emailValue:d,onEmailChange:c,phoneNumberValue:u,onPhoneNumberChange:g,fixedCountry:h,isLoading:m,isVerified:f,countdown:b,onSendOtp:p,onStateReset:y,sendOtpError:v})=>{const x=e=>{y(),"email"===s&&c&&c(e.target.value)},$=e=>{y(),"phone-number"===s&&g&&g(e)};return r(nb,{id:t,"data-testid":n,children:[r(ob,{children:[r(ib,{$isMaxWidth:"email"===s,$error:!!v,$disabled:o,$readonly:i,children:["email"===s?e(lb,{id:a,"data-testid":n?`${n}-contact-input`:void 0,placeholder:l||"Enter email",value:d,onChange:x,type:"email",noBorder:!0,"aria-invalid":!!v,"aria-required":!0,disabled:o,readOnly:i}):e(db,{id:a,"data-testid":n?`${n}-contact-input`:void 0,placeholder:l||"Enter mobile number",value:u,onChange:$,noBorder:!0,fixedCountry:h,"aria-invalid":!!v,"aria-required":!0,disabled:o,readOnly:i}),f&&e(ab,{"aria-label":"Verified",role:"img",children:e(w,{})})]}),!o&&!i&&e(sb,{id:t?`${t}-contact-button`:void 0,"data-testid":n?`${n}-contact-button`:void 0,onClick:p,disabled:b.isRunning||f,loading:m,children:f?"Verified":m?"":b.isRunning?"Sent OTP":"Send OTP"})]}),v&&e(Oa,{id:t?`${t}-contact-error`:void 0,"data-testid":n?`${n}-contact-error`:void 0,role:"alert",children:v})]})},ub=$.div`
    display: flex;
    flex-direction: column;
    gap: ${Si["spacing-16"]};
`,gb=$.svg`
    .background-circle {
        fill: ${$i["bg-stronger"]};
    }

    .primary-path {
        fill: ${$i["icon-primary"]};
    }

    .validation-icon {
        fill: ${$i["bg-available"]};
    }

    .accent-light-3 {
        fill: ${$i["icon-primary-subtle"]};
    }

    .accent-light-4 {
        fill: ${$i["icon-primary-subtlest"]};
    }
`,hb=({width:t=120,height:n=120,className:o})=>r(gb,{width:t,height:n,viewBox:"0 0 120 120",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:o,children:[r("g",{clipPath:"url(#clip0_email_icon)",children:[e("circle",{cx:"60",cy:"60",r:"60",className:"background-circle"}),e("path",{d:"M22.9744 60.2636L62.1602 72.5619C62.6183 72.7414 63.1075 72.7591 63.5596 72.638C64.0116 72.5169 64.4265 72.2569 64.7334 71.8724L92.5201 41.6289L52.1928 25.0006C51.2645 24.6309 50.2039 24.9151 49.5848 25.6994L22.9744 60.2636Z",className:"primary-path"}),e("path",{d:"M72.6935 18.8097L29.2275 30.4564C26.8325 31.0982 25.4042 33.5744 26.0465 35.9714L38.8689 83.8253C39.1907 85.026 40.4254 85.7396 41.6251 85.4182L89.4378 72.6068C90.6374 72.2854 91.3499 71.05 91.0282 69.8493L78.2058 21.9954C77.5635 19.5984 75.0929 18.1668 72.6935 18.8097Z",fill:"white"}),e("path",{d:"M64.7456 71.7935C64.4385 72.1773 64.0235 72.4369 63.5715 72.5581C63.1194 72.6792 62.6303 72.6618 62.1724 72.483L23 60.2346L33.4375 99.188C34.0777 101.577 36.5445 102.994 38.9439 102.352L99.7963 86.0462C102.196 85.4033 103.623 82.9425 102.983 80.5533L92.5457 41.5999L64.7456 71.7935Z",className:"accent-light-3"}),e("path",{d:"M99.8349 86.0769L38.9824 102.382C36.544 103.036 34.127 101.648 33.4768 99.2216C33.2926 98.5339 33.4491 97.7966 33.8965 97.2409L60.7012 66.8793C61.0084 66.4957 61.4233 66.2361 61.8754 66.115C62.3274 65.9939 62.8166 66.0112 63.2744 66.1898L101.669 79.0814C102.334 79.3389 102.838 79.8992 103.023 80.5869C103.673 83.0134 102.273 85.4235 99.8349 86.0769Z",className:"accent-light-4"}),e("path",{d:"M56.1874 49.1387L52.6167 47.0772C52.2767 46.8809 51.9109 46.8352 51.5193 46.9401C51.1288 47.0447 50.8354 47.2671 50.6391 47.6071C50.4263 47.9757 50.3723 48.3558 50.4772 48.7474C50.5819 49.1379 50.8155 49.4283 51.1781 49.6186L55.9386 52.3685C56.2844 52.5863 56.6531 52.6427 57.0447 52.5378C57.4352 52.4332 57.737 52.1971 57.9501 51.8295L63.423 42.35C63.6193 42.01 63.6666 41.65 63.5649 41.2703C63.4628 40.8894 63.2418 40.6009 62.9017 40.4045C62.5617 40.2082 62.1958 40.1625 61.8043 40.2674C61.4138 40.372 61.1204 40.5944 60.924 40.9344L56.1874 49.1387ZM61.0069 59.8842C59.152 60.3812 57.3145 60.4964 55.4942 60.2299C53.674 59.9633 51.9987 59.3883 50.4684 58.5048C48.9382 57.6213 47.6026 56.458 46.4616 55.0148C45.3206 53.5717 44.5017 51.9227 44.0046 50.0678C43.5076 48.2129 43.3924 46.3754 43.6589 44.5551C43.9255 42.7348 44.5005 41.0595 45.384 39.5293C46.2674 37.999 47.4308 36.6634 48.8739 35.5224C50.317 34.3814 51.966 33.5625 53.8208 33.0655C55.6757 32.5685 57.5132 32.4532 59.3335 32.7198C61.1537 32.9863 62.829 33.5613 64.3593 34.4448C65.8895 35.3283 67.2251 36.4917 68.3661 37.9348C69.5071 39.378 70.326 41.027 70.8231 42.8818C71.3201 44.7367 71.4353 46.5743 71.1688 48.3945C70.9023 50.2148 70.3272 51.8901 69.4438 53.4204C68.5603 54.9506 67.3969 56.2863 65.9538 57.4272C64.5107 58.5682 62.8617 59.3872 61.0069 59.8842Z",className:"validation-icon"})]}),e("defs",{children:e("clipPath",{id:"clip0_email_icon",children:e("rect",{width:"120",height:"120",fill:"white"})})})]}),mb=$.svg`
    .background-circle {
        fill: ${$i["bg-stronger"]};
    }

    .primary-path {
        fill: ${$i["icon-primary"]};
    }

    .validation-icon {
        fill: ${$i["bg-available"]};
    }

    .accent-light {
        fill: ${$i["bg-selected-stronger"]};
    }
`,fb=({width:t=120,height:n=120,className:o})=>r(mb,{width:t,height:n,viewBox:"0 0 120 120",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:o,children:[r("g",{clipPath:"url(#clip0_phone_icon)",children:[e("circle",{cx:"60",cy:"60.5",r:"60",className:"background-circle"}),e("path",{d:"M85.7091 99.047L56.9789 106.705C51.6167 108.134 46.0606 104.916 44.6318 99.5553L27.1393 33.9319C25.9969 29.6444 27.8244 25.2332 31.3437 22.9073C32.2263 22.3231 33.2151 21.8712 34.2899 21.5845L34.4374 21.5449L40.7667 19.8586L56.4455 15.6787L56.4545 15.6763L63.02 13.9267C68.3822 12.497 73.9383 15.715 75.3671 21.0761L92.8596 86.6995C94.2888 92.0619 91.0712 97.6172 85.7091 99.047Z",className:"primary-path"}),e("path",{d:"M90.0893 85.5165L72.9593 22.8765C72.8393 22.4365 72.6893 22.0165 72.5093 21.6165C72.0993 20.6965 71.5393 19.8765 70.8693 19.1765C70.2493 18.5365 69.5393 17.9865 68.7593 17.5665C66.8993 16.5465 64.6593 16.2165 62.4593 16.8065L58.8593 17.8765C58.8593 17.8765 58.8693 17.9065 58.8793 17.9265C59.2793 19.4065 58.8293 20.8265 57.8893 21.0665L42.2093 25.2365C41.3193 25.4765 40.3093 24.5765 39.8593 23.2265L36.0693 24.2365C31.5193 25.4465 28.7793 30.1665 29.9993 34.7265L30.3093 35.8765L32.1393 42.7565L35.8493 56.6765L36.8693 60.5165L38.1493 65.3165L47.0793 97.5165C48.2893 102.067 53.0093 104.807 57.5693 103.587L83.9993 95.9965C88.5493 94.7865 91.2893 90.0665 90.0693 85.5065L90.0893 85.5165ZM38.6893 26.3265L34.8993 27.3365C34.5793 27.4265 34.2493 27.2265 34.1593 26.9065C34.0693 26.5865 34.2693 26.2565 34.5893 26.1665L38.3793 25.1565C38.6993 25.0665 39.0293 25.2665 39.1193 25.5865C39.2093 25.9065 39.0093 26.2365 38.6893 26.3265ZM65.6893 19.3265L61.8993 20.3365C61.5793 20.4265 61.2493 20.2265 61.1593 19.9065C61.0693 19.5865 61.2693 19.2565 61.5893 19.1665L65.3793 18.1565C65.6993 18.0665 66.0293 18.2665 66.1193 18.5865C66.2093 18.9065 66.0093 19.2365 65.6893 19.3265Z",fill:"white"}),e("path",{d:"M55.1766 48.5674L51.606 46.5059C51.2659 46.3096 50.9001 46.2639 50.5086 46.3688C50.1181 46.4734 49.8247 46.6958 49.6283 47.0358C49.4155 47.4045 49.3616 47.7846 49.4665 48.1761C49.5711 48.5666 49.8047 48.857 50.1673 49.0473L54.9279 51.7972C55.2737 52.015 55.6424 52.0715 56.0339 51.9665C56.4244 51.8619 56.7262 51.6258 56.9393 51.2583L62.4123 41.7787C62.6086 41.4387 62.6559 41.0788 62.5541 40.699C62.4521 40.3181 62.231 40.0296 61.891 39.8332C61.5509 39.6369 61.1851 39.5912 60.7935 39.6961C60.403 39.8007 60.1096 40.0231 59.9133 40.3631L55.1766 48.5674ZM59.9961 59.3129C58.1413 59.8099 56.3037 59.9251 54.4835 59.6586C52.6632 59.392 50.988 58.817 49.4577 57.9335C47.9274 57.05 46.5918 55.8867 45.4509 54.4435C44.3099 53.0004 43.4909 51.3514 42.9939 49.4965C42.4969 47.6417 42.3817 45.8041 42.6482 43.9838C42.9147 42.1635 43.4897 40.4882 44.3732 38.958C45.2567 37.4277 46.42 36.0921 47.8631 34.9511C49.3063 33.8102 50.9552 32.9912 52.8101 32.4942C54.6649 31.9972 56.5025 31.8819 58.3227 32.1485C60.143 32.415 61.8183 32.99 63.3485 33.8736C64.8788 34.7571 66.2144 35.9204 67.3554 37.3635C68.4963 38.8067 69.3153 40.4557 69.8123 42.3105C70.3093 44.1654 70.4246 46.003 70.158 47.8233C69.8915 49.6435 69.3165 51.3188 68.433 52.8491C67.5495 54.3794 66.3862 55.715 64.9431 56.8559C63.5 57.9969 61.851 58.8159 59.9961 59.3129Z",className:"validation-icon"}),e("path",{d:"M76.5801 68.8601C77.3501 68.6501 77.8201 67.8501 77.6101 67.0801C77.4001 66.3101 76.6001 65.8401 75.8301 66.0501L49.0801 73.1601C48.3101 73.3701 47.8401 74.1701 48.0501 74.9401C48.2601 75.7101 49.0601 76.1801 49.8301 75.9701L76.5801 68.8601Z",className:"accent-light"}),e("path",{d:"M78.5098 76.1402C79.2798 75.9302 79.7498 75.1302 79.5398 74.3602C79.3298 73.5902 78.5298 73.1202 77.7598 73.3302L51.0098 80.4402C50.2398 80.6502 49.7698 81.4502 49.9798 82.2202C50.1898 82.9902 50.9898 83.4602 51.7598 83.2502L78.5098 76.1402Z",className:"accent-light"}),e("path",{d:"M81.6702 82.3401C81.4602 81.5701 80.6602 81.1001 79.8902 81.3101L53.1402 88.4201C52.3702 88.6301 51.9002 89.4301 52.1102 90.2001C52.3202 90.9701 53.1202 91.4401 53.8902 91.2301L80.6402 84.1201C81.4102 83.9101 81.8802 83.1101 81.6702 82.3401Z",className:"accent-light"})]}),e("defs",{children:e("clipPath",{id:"clip0_phone_icon",children:e("rect",{width:"120",height:"120",fill:"white"})})})]}),bb=$.div`
    display: flex;
    align-items: center;
    background-color: ${$i["bg-strong"]};
    padding: ${Si["spacing-16"]} ${Si["spacing-32"]};
    gap: ${Si["spacing-32"]};
    ${Oi.MaxWidth.sm} {
        flex-direction: column;
        align-items: start;
        gap: ${Si["spacing-16"]};
        padding: ${Si["spacing-16"]};
    }
`,pb=$.div`
    display: flex;
    flex-direction: column;
    gap: ${Si["spacing-16"]};
`,yb=$(Ki.BodyMD)`
    color: ${$i["text-subtlest"]};
`,vb=$.div`
    display: flex;
    gap: ${Si["spacing-8"]};
    max-width: 472px;
`,xb=$(os.Default)`
    flex-shrink: 0;
    width: 83px;
`,wb=({id:t,"data-testid":n,type:o,showVerifyOtpThumbnail:i=!1,verifyOtpTitle:a,verifyOtpMessage:s,otpCode:l,setOtpCode:d,isVerifyLoading:c,countdown:u,onVerifyOtp:g,verifyOtpError:h,otpPrefix:m,otpSeparator:f})=>{const b=D(),p=zr.useMediaQuery({maxWidth:ki["sm-max"]({theme:b})})?64:120;return r(bb,{id:t,"data-testid":n,role:"group","aria-labelledby":t?`${t}-title`:void 0,children:[(()=>{if(!i)return null;return e("div",{"aria-label":"email"===o?"Email verification":"Phone verification",role:"img",children:e("email"===o?hb:fb,{width:p,height:p})})})(),r(pb,{children:[r("div",{children:[e(Ki.BodyMD,{weight:"semibold",id:t?`${t}-title`:void 0,"data-testid":n?`${n}-title`:void 0,children:a}),e(Ki.BodyMD,{weight:"regular",id:t?`${t}-message`:void 0,"data-testid":n?`${n}-message`:void 0,children:s})]}),r("div",{children:[r(vb,{children:[e(Rf,{id:t?`${t}-verify-input`:void 0,"data-testid":n?`${n}-verify-input`:void 0,value:l,onChange:e=>null==d?void 0:d(e.target.value),placeholder:"Enter OTP",addon:{type:"label",attributes:{value:`${null!=m?m:""}${null!=f?f:""}`}},type:"number",error:!!h,"aria-label":"Enter OTP code","aria-invalid":!!h,"aria-required":!0}),e(xb,{id:t?`${t}-verify-button`:void 0,"data-testid":n?`${n}-verify-button`:void 0,onClick:g,loading:c,styleType:"light",disabled:!l||0===l.length,children:!c&&"Verify"})]}),h&&e(Oa,{id:t?`${t}-verify-error`:void 0,"data-testid":n?`${n}-verify-error`:void 0,role:"alert",children:h})]}),u.isRunning&&r(yb,{id:t?`${t}-countdown`:void 0,"data-testid":n?`${n}-countdown`:void 0,children:["Resend OTP in ",u.formatTime()]})]})]})},$b=t=>{const{id:n,"data-testid":o,className:i,inputId:l,onSendOtp:d,onVerifyOtp:c,verifyOtpCountdownTimer:u=60,sendOtpError:h,verifyOtpError:m,otpValue:f,onOtpChange:b,otpState:p,onOtpStateChange:y}=t,[v,x]=s(!1),[w,$]=s(!1),F=(({duration:e,onComplete:r})=>{const[t,n]=s(e),[o,i]=s(!1),l=a(null),d=a(null),c=()=>{i(!1),l.current&&(clearInterval(l.current),l.current=null)};return g((()=>{o||n(e)}),[e,o]),{timeLeft:t,isRunning:o,start:()=>{o||(d.current=Date.now(),i(!0),l.current=setInterval((()=>{const t=Math.floor((Date.now()-d.current)/1e3),o=Math.max(0,e-t);n(o),o<=0&&(i(!1),l.current&&(clearInterval(l.current),l.current=null),null==r||r())}),1e3))},stop:c,reset:()=>{c(),n(e),d.current=null},formatTime:e=>{const r=null!=e?e:t;return`${r} second${1===r?"":"s"}`}}})({duration:u});return r(ub,{id:n,"data-testid":o,className:i,children:[e(cb,Object.assign({},t,{inputId:l,"data-testid":o?`${o}-contact`:void 0,isLoading:v,isVerified:"verified"===p,countdown:F,onSendOtp:()=>ie(void 0,void 0,void 0,(function*(){if(d)try{x(!0),yield d(),y("sent"),F.reset(),F.start()}catch(e){}finally{x(!1)}})),onStateReset:()=>{"verified"===p&&y("default")},sendOtpError:h,fixedCountry:"phone-number"!==t.type||t.fixedCountry})),"sent"===p&&e(wb,Object.assign({},t,{"data-testid":o?`${o}-verification`:void 0,otpCode:null==f?void 0:f.value,otpPrefix:null==f?void 0:f.prefix,otpSeparator:null==f?void 0:f.separator,setOtpCode:b,isVerifyLoading:w,countdown:F,onVerifyOtp:()=>ie(void 0,void 0,void 0,(function*(){if(c&&(null==f?void 0:f.value))try{$(!0),yield c(f.value),y("verified"),F.reset(),null==b||b("")}catch(e){}finally{$(!1)}})),verifyOtpError:m}))]})};export{$b as OtpVerification};
//# sourceMappingURL=index.js.map
