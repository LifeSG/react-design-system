import{jsx as e,jsxs as r,Fragment as t}from"react/jsx-runtime";import*as n from"react";import o,{version as i,useRef as a,useState as s,isValidElement as l,createRef as d,cloneElement as c,PureComponent as u,useEffect as g,useLayoutEffect as h,useCallback as m,createContext as f,useContext as b,useMemo as p,createElement as y,forwardRef as v,useImperativeHandle as x}from"react";import{TickCircleFillIcon as w}from"@lifesg/react-icons";import"@lifesg/react-icons/i-circle-fill";import F,{css as $,isStyledComponent as C,keyframes as E,ThemeContext as S,useTheme as D}from"styled-components";import{ExternalIcon as B}from"@lifesg/react-icons/external";import{CrossIcon as k}from"@lifesg/react-icons/cross";import{useFloatingTree as O,FloatingTree as T,useFloatingNodeId as z,FloatingNode as A,useFloating as I,useTransitionStatus as M,useDismiss as j,useInteractions as L,FloatingFocusManager as _,autoUpdate as R,offset as H,flip as P,shift as W,limitShift as N,size as V,useTransitionStyles as Y,useClick as U,FloatingPortal as q}from"@floating-ui/react";import G,{findDOMNode as Z}from"react-dom";import{ExclamationCircleFillIcon as K}from"@lifesg/react-icons/exclamation-circle-fill";import{ChevronDownIcon as X}from"@lifesg/react-icons/chevron-down";import{SquareIcon as Q}from"@lifesg/react-icons/square";import{SquareFillIcon as J}from"@lifesg/react-icons/square-fill";import{SquareTickFillIcon as ee}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as re}from"@lifesg/react-icons/tick";import{MagnifierIcon as te}from"@lifesg/react-icons/magnifier";import"@lifesg/react-icons/caret-right";import{MinusSquareFillIcon as ne}from"@lifesg/react-icons/minus-square-fill";function oe(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)r.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(t[n[o]]=e[n[o]])}return t}function ie(e,r,t,n){return new(t||(t=Promise))((function(o,i){function a(e){try{l(n.next(e))}catch(e){i(e)}}function s(e){try{l(n.throw(e))}catch(e){i(e)}}function l(e){var r;e.done?o(e.value):(r=e.value,r instanceof t?r:new t((function(e){e(r)}))).then(a,s)}l((n=n.apply(e,r||[])).next())}))}"function"==typeof SuppressedError&&SuppressedError;var ae="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function se(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var le={exports:{}};le.exports=function(){var e=1e3,r=6e4,t=36e5,n="millisecond",o="second",i="minute",a="hour",s="day",l="week",d="month",c="quarter",u="year",g="date",h="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,b={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var r=["th","st","nd","rd"],t=e%100;return"["+e+(r[(t-20)%10]||r[t]||r[0])+"]"}},p=function(e,r,t){var n=String(e);return!n||n.length>=r?e:""+Array(r+1-n.length).join(t)+e},y={s:p,z:function(e){var r=-e.utcOffset(),t=Math.abs(r),n=Math.floor(t/60),o=t%60;return(r<=0?"+":"-")+p(n,2,"0")+":"+p(o,2,"0")},m:function e(r,t){if(r.date()<t.date())return-e(t,r);var n=12*(t.year()-r.year())+(t.month()-r.month()),o=r.clone().add(n,d),i=t-o<0,a=r.clone().add(n+(i?-1:1),d);return+(-(n+(t-o)/(i?o-a:a-o))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:s,D:g,h:a,m:i,s:o,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",x={};x[v]=b;var w="$isDayjsObject",F=function(e){return e instanceof S||!(!e||!e[w])},$=function e(r,t,n){var o;if(!r)return v;if("string"==typeof r){var i=r.toLowerCase();x[i]&&(o=i),t&&(x[i]=t,o=i);var a=r.split("-");if(!o&&a.length>1)return e(a[0])}else{var s=r.name;x[s]=r,o=s}return!n&&o&&(v=o),o||!n&&v},C=function(e,r){if(F(e))return e.clone();var t="object"==typeof r?r:{};return t.date=e,t.args=arguments,new S(t)},E=y;E.l=$,E.i=F,E.w=function(e,r){return C(e,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var S=function(){function b(e){this.$L=$(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var p=b.prototype;return p.parse=function(e){this.$d=function(e){var r=e.date,t=e.utc;if(null===r)return new Date(NaN);if(E.u(r))return new Date;if(r instanceof Date)return new Date(r);if("string"==typeof r&&!/Z$/i.test(r)){var n=r.match(m);if(n){var o=n[2]-1||0,i=(n[7]||"0").substring(0,3);return t?new Date(Date.UTC(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(r)}(e),this.init()},p.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},p.$utils=function(){return E},p.isValid=function(){return!(this.$d.toString()===h)},p.isSame=function(e,r){var t=C(e);return this.startOf(r)<=t&&t<=this.endOf(r)},p.isAfter=function(e,r){return C(e)<this.startOf(r)},p.isBefore=function(e,r){return this.endOf(r)<C(e)},p.$g=function(e,r,t){return E.u(e)?this[r]:this.set(t,e)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(e,r){var t=this,n=!!E.u(r)||r,c=E.p(e),h=function(e,r){var o=E.w(t.$u?Date.UTC(t.$y,r,e):new Date(t.$y,r,e),t);return n?o:o.endOf(s)},m=function(e,r){return E.w(t.toDate()[e].apply(t.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(r)),t)},f=this.$W,b=this.$M,p=this.$D,y="set"+(this.$u?"UTC":"");switch(c){case u:return n?h(1,0):h(31,11);case d:return n?h(1,b):h(0,b+1);case l:var v=this.$locale().weekStart||0,x=(f<v?f+7:f)-v;return h(n?p-x:p+(6-x),b);case s:case g:return m(y+"Hours",0);case a:return m(y+"Minutes",1);case i:return m(y+"Seconds",2);case o:return m(y+"Milliseconds",3);default:return this.clone()}},p.endOf=function(e){return this.startOf(e,!1)},p.$set=function(e,r){var t,l=E.p(e),c="set"+(this.$u?"UTC":""),h=(t={},t[s]=c+"Date",t[g]=c+"Date",t[d]=c+"Month",t[u]=c+"FullYear",t[a]=c+"Hours",t[i]=c+"Minutes",t[o]=c+"Seconds",t[n]=c+"Milliseconds",t)[l],m=l===s?this.$D+(r-this.$W):r;if(l===d||l===u){var f=this.clone().set(g,1);f.$d[h](m),f.init(),this.$d=f.set(g,Math.min(this.$D,f.daysInMonth())).$d}else h&&this.$d[h](m);return this.init(),this},p.set=function(e,r){return this.clone().$set(e,r)},p.get=function(e){return this[E.p(e)]()},p.add=function(n,c){var g,h=this;n=Number(n);var m=E.p(c),f=function(e){var r=C(h);return E.w(r.date(r.date()+Math.round(e*n)),h)};if(m===d)return this.set(d,this.$M+n);if(m===u)return this.set(u,this.$y+n);if(m===s)return f(1);if(m===l)return f(7);var b=(g={},g[i]=r,g[a]=t,g[o]=e,g)[m]||1,p=this.$d.getTime()+n*b;return E.w(p,this)},p.subtract=function(e,r){return this.add(-1*e,r)},p.format=function(e){var r=this,t=this.$locale();if(!this.isValid())return t.invalidDate||h;var n=e||"YYYY-MM-DDTHH:mm:ssZ",o=E.z(this),i=this.$H,a=this.$m,s=this.$M,l=t.weekdays,d=t.months,c=t.meridiem,u=function(e,t,o,i){return e&&(e[t]||e(r,n))||o[t].slice(0,i)},g=function(e){return E.s(i%12||12,e,"0")},m=c||function(e,r,t){var n=e<12?"AM":"PM";return t?n.toLowerCase():n};return n.replace(f,(function(e,n){return n||function(e){switch(e){case"YY":return String(r.$y).slice(-2);case"YYYY":return E.s(r.$y,4,"0");case"M":return s+1;case"MM":return E.s(s+1,2,"0");case"MMM":return u(t.monthsShort,s,d,3);case"MMMM":return u(d,s);case"D":return r.$D;case"DD":return E.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return u(t.weekdaysMin,r.$W,l,2);case"ddd":return u(t.weekdaysShort,r.$W,l,3);case"dddd":return l[r.$W];case"H":return String(i);case"HH":return E.s(i,2,"0");case"h":return g(1);case"hh":return g(2);case"a":return m(i,a,!0);case"A":return m(i,a,!1);case"m":return String(a);case"mm":return E.s(a,2,"0");case"s":return String(r.$s);case"ss":return E.s(r.$s,2,"0");case"SSS":return E.s(r.$ms,3,"0");case"Z":return o}return null}(e)||o.replace(":","")}))},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(n,g,h){var m,f=this,b=E.p(g),p=C(n),y=(p.utcOffset()-this.utcOffset())*r,v=this-p,x=function(){return E.m(f,p)};switch(b){case u:m=x()/12;break;case d:m=x();break;case c:m=x()/3;break;case l:m=(v-y)/6048e5;break;case s:m=(v-y)/864e5;break;case a:m=v/t;break;case i:m=v/r;break;case o:m=v/e;break;default:m=v}return h?m:E.a(m)},p.daysInMonth=function(){return this.endOf(d).$D},p.$locale=function(){return x[this.$L]},p.locale=function(e,r){if(!e)return this.$L;var t=this.clone(),n=$(e,r,!0);return n&&(t.$L=n),t},p.clone=function(){return E.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},b}(),D=S.prototype;return C.prototype=D,[["$ms",n],["$s",o],["$m",i],["$H",a],["$W",s],["$M",d],["$y",u],["$D",g]].forEach((function(e){D[e[1]]=function(r){return this.$g(r,e[0],e[1])}})),C.extend=function(e,r){return e.$i||(e(r,S,C),e.$i=!0),C},C.locale=$,C.isDayjs=F,C.unix=function(e){return C(1e3*e)},C.en=x[v],C.Ls=x,C.p={},C}();var de=se(le.exports),ce={exports:{}};ce.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,t=/\d\d/,n=/\d\d?/,o=/\d*[^-_:/,()\s\d]+/,i={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(r){this[e]=+r}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var r=e.match(/([+-]|\d\d)/g),t=60*r[1]+(+r[2]||0);return 0===t?0:"+"===r[0]?-t:t}(e)}],d=function(e){var r=i[e];return r&&(r.indexOf?r:r.s.concat(r.f))},c=function(e,r){var t,n=i.meridiem;if(n){for(var o=1;o<=24;o+=1)if(e.indexOf(n(o,0,r))>-1){t=o>12;break}}else t=e===(r?"pm":"PM");return t},u={A:[o,function(e){this.afternoon=c(e,!1)}],a:[o,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[t,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[t,s("day")],Do:[o,function(e){var r=i.ordinal,t=e.match(/\d+/);if(this.day=t[0],r)for(var n=1;n<=31;n+=1)r(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[t,s("month")],MMM:[o,function(e){var r=d("months"),t=(d("monthsShort")||r.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],MMMM:[o,function(e){var r=d("months").indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],Y:[/[+-]?\d+/,s("year")],YY:[t,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function g(t){var n,o;n=t,o=i&&i.formats;for(var a=(t=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(r,t,n){var i=n&&n.toUpperCase();return t||o[n]||e[n]||o[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,r,t){return r||t.slice(1)}))}))).match(r),s=a.length,l=0;l<s;l+=1){var d=a[l],c=u[d],g=c&&c[0],h=c&&c[1];a[l]=h?{regex:g,parser:h}:d.replace(/^\[|\]$/g,"")}return function(e){for(var r={},t=0,n=0;t<s;t+=1){var o=a[t];if("string"==typeof o)n+=o.length;else{var i=o.regex,l=o.parser,d=e.slice(n),c=i.exec(d)[0];l.call(r,c),e=e.replace(c,"")}}return function(e){var r=e.afternoon;if(void 0!==r){var t=e.hours;r?t<12&&(e.hours+=12):12===t&&(e.hours=0),delete e.afternoon}}(r),r}}return function(e,r,t){t.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var n=r.prototype,o=n.parse;n.parse=function(e){var r=e.date,n=e.utc,a=e.args;this.$u=n;var s=a[1];if("string"==typeof s){var l=!0===a[2],d=!0===a[3],c=l||d,u=a[2];d&&(u=a[2]),i=this.$locale(),!l&&u&&(i=t.Ls[u]),this.$d=function(e,r,t){try{if(["x","X"].indexOf(r)>-1)return new Date(("X"===r?1e3:1)*e);var n=g(r)(e),o=n.year,i=n.month,a=n.day,s=n.hours,l=n.minutes,d=n.seconds,c=n.milliseconds,u=n.zone,h=new Date,m=a||(o||i?1:h.getDate()),f=o||h.getFullYear(),b=0;o&&!i||(b=i>0?i-1:h.getMonth());var p=s||0,y=l||0,v=d||0,x=c||0;return u?new Date(Date.UTC(f,b,m,p,y,v,x+60*u.offset*1e3)):t?new Date(Date.UTC(f,b,m,p,y,v,x)):new Date(f,b,m,p,y,v,x)}catch(e){return new Date("")}}(r,s,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&r!=this.format(s)&&(this.$d=new Date("")),i={}}else if(s instanceof Array)for(var h=s.length,m=1;m<=h;m+=1){a[1]=s[m-1];var f=t.apply(this,a);if(f.isValid()){this.$d=f.$d,this.$L=f.$L,this.init();break}m===h&&(this.$d=new Date(""))}else o.call(this,e)}}}();var ue=se(ce.exports),ge={exports:{}};ge.exports=function(e,r,t){r.prototype.isBetween=function(e,r,n,o){var i=t(e),a=t(r),s="("===(o=o||"()")[0],l=")"===o[1];return(s?this.isAfter(i,n):!this.isBefore(i,n))&&(l?this.isBefore(a,n):!this.isAfter(a,n))||(s?this.isBefore(i,n):!this.isAfter(i,n))&&(l?this.isAfter(a,n):!this.isBefore(a,n))}};var he=se(ge.exports),me={exports:{}};me.exports=function(e,r){r.prototype.isSameOrAfter=function(e,r){return this.isSame(e,r)||this.isAfter(e,r)}};var fe=se(me.exports),be={exports:{}};be.exports=function(e,r){r.prototype.isSameOrBefore=function(e,r){return this.isSame(e,r)||this.isBefore(e,r)}};var pe,ye,ve,xe=se(be.exports),we={exports:{}},Fe=se(we.exports=(pe={year:0,month:1,day:2,hour:3,minute:4,second:5},ye={},function(e,r,t){var n,o=function(e,r,t){void 0===t&&(t={});var n=new Date(e),o=function(e,r){void 0===r&&(r={});var t=r.timeZoneName||"short",n=e+"|"+t,o=ye[n];return o||(o=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:t}),ye[n]=o),o}(r,t);return o.formatToParts(n)},i=function(e,r){for(var n=o(e,r),i=[],a=0;a<n.length;a+=1){var s=n[a],l=s.type,d=s.value,c=pe[l];c>=0&&(i[c]=parseInt(d,10))}var u=i[3],g=24===u?0:u,h=i[0]+"-"+i[1]+"-"+i[2]+" "+g+":"+i[4]+":"+i[5]+":000",m=+e;return(t.utc(h).valueOf()-(m-=m%1e3))/6e4},a=r.prototype;a.tz=function(e,r){void 0===e&&(e=n);var o=this.utcOffset(),i=this.toDate(),a=i.toLocaleString("en-US",{timeZone:e}),s=Math.round((i-new Date(a))/1e3/60),l=t(a,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-s,!0);if(r){var d=l.utcOffset();l=l.add(o-d,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var r=this.$x.$timezone||t.tz.guess(),n=o(this.valueOf(),r,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=a.startOf;a.startOf=function(e,r){if(!this.$x||!this.$x.$timezone)return s.call(this,e,r);var n=t(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,e,r).tz(this.$x.$timezone,!0)},t.tz=function(e,r,o){var a=o&&r,s=o||r||n,l=i(+t(),s);if("string"!=typeof e)return t(e).tz(s);var d=function(e,r,t){var n=e-60*r*1e3,o=i(n,t);if(r===o)return[n,r];var a=i(n-=60*(o-r)*1e3,t);return o===a?[n,o]:[e-60*Math.min(o,a)*1e3,Math.max(o,a)]}(t.utc(e,a).valueOf(),l,s),c=d[0],u=d[1],g=t(c).utcOffset(u);return g.$x.$timezone=s,g},t.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},t.tz.setDefault=function(e){n=e}}));de.extend(he),de.extend(xe),de.extend(fe),de.extend(ue),de.extend(Fe),function(e){e.generateDays=e=>{const r=e.startOf("month"),t=de(r).startOf("week");return $e(t).map((e=>Ce(e)))},e.generateDaysForCurrentWeek=e=>{const r=e.startOf("week");return Ce(r)},e.generateMonths=e=>{const r=[];for(let t=0;t<12;t++){const n=e.month(t);r.push(de(n))}return r},e.generateDecadeOfYears=e=>{const r=e.year(),t=10*Math.floor(r/10),n=e.year(t),o=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)o.push(n.add(e,"year"));return o},e.getStartEndDecade=e=>{const r=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:r,endDecade:+de(`${r+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const r=de(e,"HH:mm");return r.isValid()?r.format("h:mm a"):""},e.isWithinRange=(e,r,t,n="day")=>!r&&!t||(r&&t?e.isBetween(r,t,n,"[]"):r?e.isSameOrAfter(r,n):e.isSameOrBefore(t,n)),e.isPreviousMonthWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"month"),t,void 0,"month"),e.isPreviousYearWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"year"),t,void 0,"year"),e.isPreviousDecadeWithinRange=(r,t)=>{const{beginDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).subtract(1,"year"),t,void 0,"year")},e.isNextMonthWithinRange=(r,t)=>e.isWithinRange(r.add(1,"month"),void 0,t,"month"),e.isNextYearWithinRange=(r,t)=>e.isWithinRange(r.add(1,"year"),void 0,t,"year"),e.isNextDecadeWithinRange=(r,t)=>{const{endDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).add(1,"year"),void 0,t,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,r)=>({start:e.format("YYYY-MM-DD"),end:e.add(r-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(r,t,n,o)=>{const i=e.isWithinRange(r,n?de(n):void 0,o?de(o):void 0),a=t&&t.includes(r.format("YYYY-MM-DD"));return!i||!!a}}(ve||(ve={}));const $e=e=>{const r=[e];for(let t=1;t<6;t++){const n=e.add(t,"week");r.push(n)}return r},Ce=e=>{const r=[];for(let t=0;t<7;t++){const n=e.add(t,"day");r.push(n)}return r},Ee=[1,3,5,7,8,10,12],Se=[4,6,9,11];var De,Be;!function(e){e.clampDay=(r,t,n)=>{const o=parseInt(r),i=parseInt(t),a=parseInt(n);return 0==o?"1":Ee.includes(i)?Math.min(o,31).toString():Se.includes(i)?Math.min(o,30).toString():2===i?e.isLeapYear(a)?Math.min(o,29).toString():Math.min(o,28).toString():r},e.clampMonth=e=>{const r=parseInt(e);return 0==r?"1":r>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,r,t="HH:mm")=>{const n=de(e,t);return de(r,t).diff(n,"minute")},e.toDayjs=e=>e?de(e):de(),e.addMinutesToTime=(e,r,t="HH:mm")=>de(e,t).add(r,"minutes").format(t),e.isSame=(e,r,t="day")=>de(e).isSame(de(r),t)}(De||(De={})),function(e){e.isDateDisabled=(e,r)=>{const{disabledDates:t,minDate:n,maxDate:o}=r;return!!(e&&t&&t.length&&t.includes(e))||(!(!n||!de(e).isBefore(n,"day"))||!(!o||!de(e).isAfter(o,"day")))},e.sanitizeInput=e=>{if(e){const t=r(e);if(de(t,"YYYY-MM-DD",!0).isValid())return t}return""};const r=e=>{const r=e.match(/^(\d{1,4})-(\d{1,2})-(\d{1,2})$/);if(!r)return"";const[,t,n,o]=r;if(t.length<=2||parseInt(t,10)<100)return"";return`${t.padStart(4,"0")}-${n.padStart(2,"0")}-${o.padStart(2,"0")}`}}(Be||(Be={}));const ke=(...e)=>r=>{const t=[];for(const n of e)if("function"==typeof n){const e=n(r),o="function"==typeof e;t.push(o?e:()=>n(null))}else n.current=r,t.push((()=>{n.current=null}));if((()=>{const e=i.split(".");return parseInt(e[0],10)>=19})())return()=>{for(const e of t)e()}};var Oe,Te;!function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Oe||(Oe={})),function(e){e.transformWithSpaces=(e,r)=>{const t="(.{"+r+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(t,"g"),"$1 ").trim()},e.padValue=(e,r)=>{if("0"===e)return r?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,r)=>{const t=Math.floor(r/9);return e.length>=2*t||1===e.split(" ").length&&e.length>t},e.truncateOneLine=(e,r,t,n,o=8)=>{let i=0;r>t&&(i=Math.floor((r-t)/o));const a=n+i;if(a<e.length){const r=Math.floor(a/2);return e.substring(0,r)+" ... "+e.substring(e.length-r,e.length)}return e},e.truncateTwoLines=(e,r,t,n=1.2)=>{const o=Math.floor(2*r/(.6*t))*(2/n);if(e.length<=o)return e;const i=Math.floor(.6*o),a=Math.floor(.2*o);return`${e.substring(0,i)}...${e.substring(e.length-a)}`},e.getTextWidth=(r,t)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=t;return n.measureText(r).width},e.maskValue=(e,t)=>{if(!e)return e;const{maskRange:n,unmaskRange:o,maskChar:i="•",maskRegex:a,maskTransformer:s}=t;if(s)return s(e);if(a)return e.replace(a,i);if(n){const{startIndex:t,endIndex:o}=r(n[0],n[1]);return e.substring(0,t)+i.repeat(e.substring(t,o+1).length)+e.substring(o+1)}if(o){const{startIndex:t,endIndex:n}=r(o[0],o[1]);return i.repeat(e.substring(0,t).length)+e.substring(t,n+1)+i.repeat(e.substring(n+1).length)}return e};const r=(e,r)=>e<r?{startIndex:e,endIndex:r}:{startIndex:r,endIndex:e},t=new Intl.PluralRules("en",{type:"ordinal"}),n=new Map([["one","st"],["two","nd"],["few","rd"],["other","th"]]);e.formatOrdinal=e=>{const r=t.select(e);return`${e}${n.get(r)}`},e.getMaskedDescription=(e,r,t)=>{if(!e||"masked"!==r||!t)return"";const[n,o]=t,i=n>0,a=o<e.length-1,s=i?e.substring(0,n):"",l=a?e.substring(o+1):"";return i&&a?`Starting with ${s} and ending with ${l}`:i?`Starting with ${s}`:a?`Ending with ${l}`:""}}(Te||(Te={}));var ze=function(e,r){return ze=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])},ze(e,r)};var Ae=function(){return Ae=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e},Ae.apply(this,arguments)};var Ie="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var Me=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},je="object"==typeof Ie&&Ie&&Ie.Object===Object&&Ie,Le="object"==typeof self&&self&&self.Object===Object&&self,_e=je||Le||Function("return this")(),Re=_e,He=function(){return Re.Date.now()},Pe=/\s/;var We=function(e){for(var r=e.length;r--&&Pe.test(e.charAt(r)););return r},Ne=/^\s+/;var Ve=function(e){return e?e.slice(0,We(e)+1).replace(Ne,""):e},Ye=_e.Symbol,Ue=Ye,qe=Object.prototype,Ge=qe.hasOwnProperty,Ze=qe.toString,Ke=Ue?Ue.toStringTag:void 0;var Xe=function(e){var r=Ge.call(e,Ke),t=e[Ke];try{e[Ke]=void 0;var n=!0}catch(e){}var o=Ze.call(e);return n&&(r?e[Ke]=t:delete e[Ke]),o},Qe=Object.prototype.toString;var Je=Xe,er=function(e){return Qe.call(e)},rr=Ye?Ye.toStringTag:void 0;var tr=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":rr&&rr in Object(e)?Je(e):er(e)},nr=function(e){return null!=e&&"object"==typeof e};var or=Ve,ir=Me,ar=function(e){return"symbol"==typeof e||nr(e)&&"[object Symbol]"==tr(e)},sr=/^[-+]0x[0-9a-f]+$/i,lr=/^0b[01]+$/i,dr=/^0o[0-7]+$/i,cr=parseInt;var ur=Me,gr=He,hr=function(e){if("number"==typeof e)return e;if(ar(e))return NaN;if(ir(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=ir(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=or(e);var t=lr.test(e);return t||dr.test(e)?cr(e.slice(2),t?2:8):sr.test(e)?NaN:+e},mr=Math.max,fr=Math.min;var br=function(e,r,t){var n,o,i,a,s,l,d=0,c=!1,u=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(r){var t=n,i=o;return n=o=void 0,d=r,a=e.apply(i,t)}function m(e){var t=e-l;return void 0===l||t>=r||t<0||u&&e-d>=i}function f(){var e=gr();if(m(e))return b(e);s=setTimeout(f,function(e){var t=r-(e-l);return u?fr(t,i-(e-d)):t}(e))}function b(e){return s=void 0,g&&n?h(e):(n=o=void 0,a)}function p(){var e=gr(),t=m(e);if(n=arguments,o=this,l=e,t){if(void 0===s)return function(e){return d=e,s=setTimeout(f,r),c?h(e):a}(l);if(u)return clearTimeout(s),s=setTimeout(f,r),h(l)}return void 0===s&&(s=setTimeout(f,r)),a}return r=hr(r)||0,ur(t)&&(c=!!t.leading,i=(u="maxWait"in t)?mr(hr(t.maxWait)||0,r):i,g="trailing"in t?!!t.trailing:g),p.cancel=function(){void 0!==s&&clearTimeout(s),d=0,n=l=o=s=void 0},p.flush=function(){return void 0===s?a:b(gr())},p},pr=br,yr=Me;var vr=function(e,r,t){var n=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return yr(t)&&(n="leading"in t?!!t.leading:n,o="trailing"in t?!!t.trailing:o),pr(e,r,{leading:n,maxWait:r,trailing:o})},xr=function(e,r,t,n){switch(r){case"debounce":return br(e,t,n);case"throttle":return vr(e,t,n);default:return e}},wr=function(e){return"function"==typeof e},Fr=function(){return"undefined"==typeof window},$r=function(e){return e instanceof Element||e instanceof HTMLDocument},Cr=function(e,r,t,n){return function(o){var i=o.width,a=o.height;r((function(r){return r.width===i&&r.height===a||r.width===i&&!n||r.height===a&&!t?r:(e&&wr(e)&&e(i,a),{width:i,height:a})}))}};!function(e){function r(r){var t=e.call(this,r)||this;t.cancelHandler=function(){t.resizeHandler&&t.resizeHandler.cancel&&(t.resizeHandler.cancel(),t.resizeHandler=null)},t.attachObserver=function(){var e=t.props,r=e.targetRef,n=e.observerOptions;if(!Fr()){r&&r.current&&(t.targetRef.current=r.current);var o=t.getElement();o&&(t.observableElement&&t.observableElement===o||(t.observableElement=o,t.resizeObserver.observe(o,n)))}},t.getElement=function(){var e=t.props,r=e.querySelector,n=e.targetDomEl;if(Fr())return null;if(r)return document.querySelector(r);if(n&&$r(n))return n;if(t.targetRef&&$r(t.targetRef.current))return t.targetRef.current;var o=Z(t);if(!o)return null;switch(t.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return o;default:return o.parentElement}},t.createResizeHandler=function(e){var r=t.props,n=r.handleWidth,o=void 0===n||n,i=r.handleHeight,a=void 0===i||i,s=r.onResize;if(o||a){var l=Cr(s,t.setState.bind(t),o,a);e.forEach((function(e){var r=e&&e.contentRect||{},n=r.width,o=r.height;!t.skipOnMount&&!Fr()&&l({width:n,height:o}),t.skipOnMount=!1}))}},t.getRenderType=function(){var e=t.props,r=e.render,n=e.children;return wr(r)?"renderProp":wr(n)?"childFunction":l(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=r.skipOnMount,o=r.refreshMode,i=r.refreshRate,a=void 0===i?1e3:i,s=r.refreshOptions;return t.state={width:void 0,height:void 0},t.skipOnMount=n,t.targetRef=d(),t.observableElement=null,Fr()||(t.resizeHandler=xr(t.createResizeHandler,o,a,s),t.resizeObserver=new window.ResizeObserver(t.resizeHandler)),t}(function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function t(){this.constructor=e}ze(e,r),e.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)})(r,e),r.prototype.componentDidMount=function(){this.attachObserver()},r.prototype.componentDidUpdate=function(){this.attachObserver()},r.prototype.componentWillUnmount=function(){Fr()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},r.prototype.render=function(){var e,r=this.props,t=r.render,o=r.children,i=r.nodeType,a=void 0===i?"div":i,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return t&&t(l);case"childFunction":return(e=o)(l);case"child":if((e=o).type&&"string"==typeof e.type){var d=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)r.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(t[n[o]]=e[n[o]])}return t}(l,["targetRef"]);return c(e,d)}return c(e,l);case"childArray":return(e=o).map((function(e){return!!e&&c(e,l)}));default:return n.createElement(a,null)}}}(u);var Er=Fr()?g:h;function Sr(e){void 0===e&&(e={});var r=e.skipOnMount,t=void 0!==r&&r,n=e.refreshMode,o=e.refreshRate,i=void 0===o?1e3:o,l=e.refreshOptions,d=e.handleWidth,c=void 0===d||d,u=e.handleHeight,g=void 0===u||u,h=e.targetRef,m=e.observerOptions,f=e.onResize,b=a(t),p=a(null),y=null!=h?h:p,v=a(),x=s({width:void 0,height:void 0}),w=x[0],F=x[1];return Er((function(){if(!Fr()){var e=Cr(f,F,c,g);v.current=xr((function(r){(c||g)&&r.forEach((function(r){var t=r&&r.contentRect||{},n=t.width,o=t.height;!b.current&&!Fr()&&e({width:n,height:o}),b.current=!1}))}),n,i,l);var r=new window.ResizeObserver(v.current);return y.current&&r.observe(y.current,m),function(){r.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[n,i,l,c,g,f,m,y.current]),Ae({ref:y},w)}function Dr(e){const r=a(null);h((()=>{r.current=e}),[e]);return m(((...e)=>{var t;return null===(t=r.current)||void 0===t?void 0:t.call(r,...e)}),[])}function Br({ref:e,formatter:r}){return()=>{var t;const n=e.current;if(!n)return;const o=n.value,i=r(o),a=null!==(t=n.selectionEnd)&&void 0!==t?t:0,s=o.substring(0,a),l=r(s),d=s.length-l.length,c=Math.max(0,a-d);return{nextValue:i,updateCaretPosition:()=>{n.value=i,n.setSelectionRange(c,c)}}}}const kr=e=>{const r=(e=>{const r=a(e),t=a();return g((()=>{t.current=r.current,r.current=e}),[e]),t.current})(e);return r!==e};var Or,Tr={exports:{}};Or=e=>(()=>{var r={"./node_modules/css-mediaquery/index.js":
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
	  \***********************************************************/(e,r)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,d=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,g=e?Symbol.for("react.suspense"):60113,h=e?Symbol.for("react.suspense_list"):60120,m=e?Symbol.for("react.memo"):60115,f=e?Symbol.for("react.lazy"):60116,b=e?Symbol.for("react.block"):60121,p=e?Symbol.for("react.fundamental"):60117,y=e?Symbol.for("react.responder"):60118,v=e?Symbol.for("react.scope"):60119;function x(e){if("object"==typeof e&&null!==e){var r=e.$$typeof;switch(r){case t:var h=e.type;switch(h){case d:case c:case o:case a:case i:case g:return h;default:var b=h&&h.$$typeof;switch(b){case l:case u:case f:case m:case s:return b;default:return r}}case n:return r}}}var w=d,F=c,$=l,C=s,E=t,S=u,D=o,B=f,k=m,O=n,T=a,z=i,A=g,I=!1;function M(e){return x(e)===c}r.AsyncMode=w,r.ConcurrentMode=F,r.ContextConsumer=$,r.ContextProvider=C,r.Element=E,r.ForwardRef=S,r.Fragment=D,r.Lazy=B,r.Memo=k,r.Portal=O,r.Profiler=T,r.StrictMode=z,r.Suspense=A,r.isAsyncMode=function(e){return I||(I=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),M(e)||x(e)===d},r.isConcurrentMode=M,r.isContextConsumer=function(e){return x(e)===l},r.isContextProvider=function(e){return x(e)===s},r.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},r.isForwardRef=function(e){return x(e)===u},r.isFragment=function(e){return x(e)===o},r.isLazy=function(e){return x(e)===f},r.isMemo=function(e){return x(e)===m},r.isPortal=function(e){return x(e)===n},r.isProfiler=function(e){return x(e)===a},r.isStrictMode=function(e){return x(e)===i},r.isSuspense=function(e){return x(e)===g},r.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===c||e===a||e===i||e===g||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===f||e.$$typeof===m||e.$$typeof===s||e.$$typeof===l||e.$$typeof===u||e.$$typeof===p||e.$$typeof===y||e.$$typeof===v||e.$$typeof===b)},r.typeOf=x}()},"./node_modules/react-is/index.js":
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
	  \**************************************************************************************/r=>{r.exports=e}},t={};function n(e){var o=t[e];if(void 0!==o)return o.exports;var i=t[e]={exports:{}};return r[e].call(i.exports,i,i.exports,n),i.exports}return n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n("./src/index.ts")})();var zr=Tr.exports=Or(o),Ar=Array.isArray,Ir="object"==typeof ae&&ae&&ae.Object===Object&&ae,Mr=Ir,jr="object"==typeof self&&self&&self.Object===Object&&self,Lr=Mr||jr||Function("return this")(),_r=Lr.Symbol,Rr=_r,Hr=Object.prototype,Pr=Hr.hasOwnProperty,Wr=Hr.toString,Nr=Rr?Rr.toStringTag:void 0;var Vr=function(e){var r=Pr.call(e,Nr),t=e[Nr];try{e[Nr]=void 0;var n=!0}catch(e){}var o=Wr.call(e);return n&&(r?e[Nr]=t:delete e[Nr]),o},Yr=Object.prototype.toString;var Ur=Vr,qr=function(e){return Yr.call(e)},Gr=_r?_r.toStringTag:void 0;var Zr=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Gr&&Gr in Object(e)?Ur(e):qr(e)};var Kr=function(e){return null!=e&&"object"==typeof e},Xr=Zr,Qr=Kr;var Jr=function(e){return"symbol"==typeof e||Qr(e)&&"[object Symbol]"==Xr(e)},et=Ar,rt=Jr,tt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,nt=/^\w*$/;var ot=function(e,r){if(et(e))return!1;var t=typeof e;return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=e&&!rt(e))||(nt.test(e)||!tt.test(e)||null!=r&&e in Object(r))};var it=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},at=Zr,st=it;var lt,dt=function(e){if(!st(e))return!1;var r=at(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},ct=Lr["__core-js_shared__"],ut=(lt=/[^.]+$/.exec(ct&&ct.keys&&ct.keys.IE_PROTO||""))?"Symbol(src)_1."+lt:"";var gt=function(e){return!!ut&&ut in e},ht=Function.prototype.toString;var mt=function(e){if(null!=e){try{return ht.call(e)}catch(e){}try{return e+""}catch(e){}}return""},ft=dt,bt=gt,pt=it,yt=mt,vt=/^\[object .+?Constructor\]$/,xt=Function.prototype,wt=Object.prototype,Ft=xt.toString,$t=wt.hasOwnProperty,Ct=RegExp("^"+Ft.call($t).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Et=function(e,r){return null==e?void 0:e[r]},St=function(e){return!(!pt(e)||bt(e))&&(ft(e)?Ct:vt).test(yt(e))},Dt=Et;var Bt=function(e,r){var t=Dt(e,r);return St(t)?t:void 0},kt=Bt(Object,"create"),Ot=kt;var Tt=function(){this.__data__=Ot?Ot(null):{},this.size=0};var zt=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},At=kt,It=Object.prototype.hasOwnProperty;var Mt=function(e){var r=this.__data__;if(At){var t=r[e];return"__lodash_hash_undefined__"===t?void 0:t}return It.call(r,e)?r[e]:void 0},jt=kt,Lt=Object.prototype.hasOwnProperty;var _t=function(e){var r=this.__data__;return jt?void 0!==r[e]:Lt.call(r,e)},Rt=kt;var Ht=function(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=Rt&&void 0===r?"__lodash_hash_undefined__":r,this},Pt=Tt,Wt=zt,Nt=Mt,Vt=_t,Yt=Ht;function Ut(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Ut.prototype.clear=Pt,Ut.prototype.delete=Wt,Ut.prototype.get=Nt,Ut.prototype.has=Vt,Ut.prototype.set=Yt;var qt=Ut;var Gt=function(){this.__data__=[],this.size=0};var Zt=function(e,r){return e===r||e!=e&&r!=r},Kt=Zt;var Xt=function(e,r){for(var t=e.length;t--;)if(Kt(e[t][0],r))return t;return-1},Qt=Xt,Jt=Array.prototype.splice;var en=function(e){var r=this.__data__,t=Qt(r,e);return!(t<0)&&(t==r.length-1?r.pop():Jt.call(r,t,1),--this.size,!0)},rn=Xt;var tn=function(e){var r=this.__data__,t=rn(r,e);return t<0?void 0:r[t][1]},nn=Xt;var on=function(e){return nn(this.__data__,e)>-1},an=Xt;var sn=function(e,r){var t=this.__data__,n=an(t,e);return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this},ln=Gt,dn=en,cn=tn,un=on,gn=sn;function hn(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}hn.prototype.clear=ln,hn.prototype.delete=dn,hn.prototype.get=cn,hn.prototype.has=un,hn.prototype.set=gn;var mn=hn,fn=Bt(Lr,"Map"),bn=qt,pn=mn,yn=fn;var vn=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var xn=function(e,r){var t=e.__data__;return vn(r)?t["string"==typeof r?"string":"hash"]:t.map},wn=xn;var Fn=function(e){var r=wn(this,e).delete(e);return this.size-=r?1:0,r},$n=xn;var Cn=function(e){return $n(this,e).get(e)},En=xn;var Sn=function(e){return En(this,e).has(e)},Dn=xn;var Bn=function(e,r){var t=Dn(this,e),n=t.size;return t.set(e,r),this.size+=t.size==n?0:1,this},kn=function(){this.size=0,this.__data__={hash:new bn,map:new(yn||pn),string:new bn}},On=Fn,Tn=Cn,zn=Sn,An=Bn;function In(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}In.prototype.clear=kn,In.prototype.delete=On,In.prototype.get=Tn,In.prototype.has=zn,In.prototype.set=An;var Mn=In,jn=Mn;function Ln(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var t=function(){var n=arguments,o=r?r.apply(this,n):n[0],i=t.cache;if(i.has(o))return i.get(o);var a=e.apply(this,n);return t.cache=i.set(o,a)||i,a};return t.cache=new(Ln.Cache||jn),t}Ln.Cache=jn;var _n=Ln;var Rn=function(e){var r=_n(e,(function(e){return 500===t.size&&t.clear(),e})),t=r.cache;return r},Hn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Pn=/\\(\\)?/g,Wn=Rn((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(Hn,(function(e,t,n,o){r.push(n?o.replace(Pn,"$1"):t||e)})),r}));var Nn=function(e,r){for(var t=-1,n=null==e?0:e.length,o=Array(n);++t<n;)o[t]=r(e[t],t,e);return o},Vn=Ar,Yn=Jr,Un=_r?_r.prototype:void 0,qn=Un?Un.toString:void 0;var Gn=function e(r){if("string"==typeof r)return r;if(Vn(r))return Nn(r,e)+"";if(Yn(r))return qn?qn.call(r):"";var t=r+"";return"0"==t&&1/r==-1/0?"-0":t},Zn=Gn;var Kn=Ar,Xn=ot,Qn=Wn,Jn=function(e){return null==e?"":Zn(e)};var eo=function(e,r){return Kn(e)?e:Xn(e,r)?[e]:Qn(Jn(e))},ro=Jr;var to=function(e){if("string"==typeof e||ro(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r},no=eo,oo=to;var io=function(e,r){for(var t=0,n=(r=no(r,e)).length;null!=e&&t<n;)e=e[oo(r[t++])];return t&&t==n?e:void 0},ao=io;var so=function(e,r,t){var n=null==e?void 0:ao(e,r);return void 0===n?t:n},lo=se(so);const co=(e,r,t)=>lo(t,r)||lo(e,r),uo=(e,r)=>{const t=r||e.defaultValue;return lo(e.collections,t)},go={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},ho=e=>r=>{var t;const n=r.theme,o=uo(go,null==n?void 0:n.borderScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.border)?`${co(o,e,n.overrides.border)}px`:`${o[e]}px`},mo={"width-005":ho("width-005"),"width-010":ho("width-010"),"width-020":ho("width-020"),"width-040":ho("width-040"),solid:(fo="solid",e=>{var r;const t=e.theme,n=uo(go,null==t?void 0:t.borderScheme),o=(null===(r=null==t?void 0:t.overrides)||void 0===r?void 0:r.border)?co(n,fo,t.overrides.border):n[fo];return"function"==typeof o?o(e):o})};var fo;const bo={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},po={"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFF8FC","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},yo={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},vo={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},xo={"brand-10":"#001A19","brand-20":"#002D2B","brand-30":"#00413D","brand-40":"#005954","brand-50":"#00756F","brand-60":"#03A098","brand-70":"#55BFBA","brand-80":"#92D6D2","brand-90":"#BFE7E5","brand-95":"#DDF2F1","brand-100":"#F4FBFA","primary-10":"#09191D","primary-20":"#102B34","primary-30":"#173D49","primary-40":"#205666","primary-50":"#2A7086","primary-60":"#5D97A9","primary-70":"#8CB6C2","primary-80":"#B2CED6","primary-90":"#D1E2E7","primary-95":"#E8F0F3","primary-100":"#F7FAFB","secondary-10":"#001731","secondary-20":"#002752","secondary-30":"#003874","secondary-40":"#004D9F","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},wo={"brand-10":"#881317","brand-20":"#B5191E","brand-30":"#B5040A","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Fo={"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},$o={"brand-10":"#170F39","brand-20":"#281C62","brand-30":"#38268B","brand-40":"#4D34BF","brand-50":"#5735DF","brand-60":"#9986F9","brand-70":"#B2A5F8","brand-80":"#CDC2FA","brand-90":"#E2DCFC","brand-95":"#EFEDFE","brand-100":"#FAF8FD","primary-10":"#170F39","primary-20":"#281C62","primary-30":"#38268B","primary-40":"#4D34BF","primary-50":"#5735DF","primary-60":"#9986F9","primary-70":"#B2A5F8","primary-80":"#CDC2FA","primary-90":"#E2DCFC","primary-95":"#EFEDFE","primary-100":"#FAF8FD","secondary-10":"#251204","secondary-20":"#401F08","secondary-30":"#5B2C0B","secondary-40":"#7E3D0F","secondary-50":"#B04900","secondary-60":"#E26E1C","secondary-70":"#FF9445","secondary-80":"#FFBB8E","secondary-90":"#FFD9BF","secondary-95":"#FFECDF","secondary-100":"#FFF8F3","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#031B15","success-20":"#082D24","success-30":"#094134","success-40":"#0D5947","success-50":"#10755E","success-60":"#16A181","success-70":"#1EC59D","success-80":"#6FDDC2","success-90":"#AFECDE","success-95":"#D5F5ED","success-100":"#F1FCF9","warning-10":"#1F1500","warning-20":"#362500","warning-30":"#4D3501","warning-40":"#6A4801","warning-50":"#8B6001","warning-60":"#BF8301","warning-70":"#EAA102","warning-80":"#FFBF34","warning-90":"#FFDC8F","warning-95":"#FFEDC7","warning-100":"#FFF8EA","error-10":"#270F10","error-20":"#441B1B","error-30":"#612627","error-40":"#853535","error-50":"#AF4546","error-60":"#EC6162","error-70":"#F29696","error-80":"#F7BBBC","error-90":"#FAD8D8","error-95":"#FCEAEA","error-100":"#FEF7F7","info-10":"#0F1627","info-20":"#1B2745","info-30":"#273763","info-40":"#354D88","info-50":"#4665B3","info-60":"#618AF6","info-70":"#8DADFF","info-80":"#B4C9FF","info-90":"#D3DFFF","info-95":"#E9EFFF","info-100":"#F5F8FF",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Co={"brand-10":"#0E113C","brand-20":"#191E67","brand-30":"#232A92","brand-40":"#233FC2","brand-50":"#135CEA","brand-60":"#378FFB","brand-70":"#71B3FD","brand-80":"#9DCFFE","brand-90":"#C1E5FF","brand-95":"#DCF1FF","brand-100":"#F3FAFF","primary-10":"#0E113C","primary-20":"#191E67","primary-30":"#232A92","primary-40":"#233FC2","primary-50":"#135CEA","primary-60":"#378FFB","primary-70":"#71B3FD","primary-80":"#9DCFFE","primary-90":"#C1E5FF","primary-95":"#DCF1FF","primary-100":"#F3FAFF","secondary-10":"#34001F","secondary-20":"#540033","secondary-30":"#730045","secondary-40":"#9D0054","secondary-50":"#C61C64","secondary-60":"#DE6792","secondary-70":"#EB96B6","secondary-80":"#F5BAD2","secondary-90":"#FCD5E3","secondary-95":"#FDEBF1","secondary-100":"#FDF6F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Eo={"brand-10":"#370009","brand-20":"#4E000D","brand-30":"#640011","brand-40":"#850017","brand-50":"#9B001A","brand-60":"#EF2D4E","brand-70":"#F692A3","brand-80":"#FAB9C4","brand-90":"#FCD7DD","brand-95":"#FDEAED","brand-100":"#FEF8F9","primary-10":"#1F102A","primary-20":"#2F193F","primary-30":"#3E2053","primary-40":"#562D71","primary-50":"#663587","primary-60":"#9370AA","primary-70":"#BCA7CB","primary-80":"#D3C5DC","primary-90":"#E5DDEB","primary-95":"#F2EEF5","primary-100":"#FAF9FB","secondary-10":"#201316","secondary-20":"#311D22","secondary-30":"#3F272C","secondary-40":"#58363D","secondary-50":"#684049","secondary-60":"#AF6A7A","secondary-70":"#F393A8","secondary-80":"#FFB6C6","secondary-90":"#FFD6DF","secondary-95":"#FFE9EE","secondary-100":"#FFF7F9","neutral-10":"#161616","neutral-20":"#222222","neutral-30":"#2D2D2D","neutral-40":"#3F3F3F","neutral-50":"#4B4B4B","neutral-60":"#7E7E7E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081917","success-20":"#0D2724","success-30":"#11332E","success-40":"#174740","success-50":"#1B554C","success-60":"#2D8C7E","success-70":"#46C2AF","success-80":"#89D8CC","success-90":"#BCE9E2","success-95":"#DAF3EF","success-100":"#F0FAF9","warning-10":"#241200","warning-20":"#371C00","warning-30":"#482500","warning-40":"#633300","warning-50":"#763C00","warning-60":"#C36400","warning-70":"#FF9524","warning-80":"#FFBD77","warning-90":"#FFD9B2","warning-95":"#FFEBD6","warning-100":"#FFF7F0","error-10":"#330505","error-20":"#4B0707","error-30":"#600909","error-40":"#810D0D","error-50":"#98110F","error-60":"#D7504C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032537","info-30":"#043148","info-40":"#054462","info-50":"#065175","info-60":"#3985AF","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},So={"brand-10":"#00143A","brand-20":"#00205B","brand-30":"#153368","brand-40":"#18417C","brand-50":"#00558C","brand-60":"#009CDE","brand-70":"#5AB9E7","brand-80":"#9ED0ED","brand-90":"#CAE3F4","brand-95":"#E2F0F9","brand-100":"#F4FAFD","primary-10":"#00143A","primary-20":"#00205B","primary-30":"#153368","primary-40":"#18417C","primary-50":"#00558C","primary-60":"#009CDE","primary-70":"#5AB9E7","primary-80":"#9ED0ED","primary-90":"#CAE3F4","primary-95":"#E2F0F9","primary-100":"#F4FAFD","secondary-10":"#10171F","secondary-20":"#1E252C","secondary-30":"#2F353B","secondary-40":"#3D4247","secondary-50":"#4E5255","secondary-60":"#8F9396","secondary-70":"#A9B0B3","secondary-80":"#C7CBCC","secondary-90":"#DDDFE0","secondary-95":"#ECEDEE","secondary-100":"#F8F8F9","neutral-10":"#10171F","neutral-20":"#1E252C","neutral-30":"#2F353B","neutral-40":"#3D4247","neutral-50":"#4E5255","neutral-60":"#8F9396","neutral-70":"#A9B0B3","neutral-80":"#C7CBCC","neutral-90":"#DDDFE0","neutral-95":"#ECEDEE","neutral-100":"#F8F8F9","success-10":"#001B0E","success-20":"#012A16","success-30":"#013D20","success-40":"#014D28","success-50":"#005F30","success-60":"#48A377","success-70":"#77BD9B","success-80":"#A3D5BD","success-90":"#C4E7D6","success-95":"#DBF4E7","success-100":"#ECFDF5","warning-10":"#1F1500","warning-20":"#312100","warning-30":"#473000","warning-40":"#593C00","warning-50":"#6E4B00","warning-60":"#B78C31","warning-70":"#DDA633","warning-80":"#E0C792","warning-90":"#E9DEC5","warning-95":"#F4EEE0","warning-100":"#FAF8F3","error-10":"#360109","error-20":"#50010E","error-30":"#6F0213","error-40":"#88051A","error-50":"#A60A24","error-60":"#E07083","error-70":"#EA98A6","error-80":"#F3BBC4","error-90":"#FAD5DC","error-95":"#FEE9ED","error-100":"#FFF6F8","info-10":"#00143A","info-20":"#00205B","info-30":"#153368","info-40":"#18417C","info-50":"#00558C","info-60":"#009CDE","info-70":"#5AB9E7","info-80":"#9ED0ED","info-90":"#CAE3F4","info-95":"#E2F0F9","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FFCB6A"},Do={collections:{lifesg:yo,bookingsg:bo,rbs:Fo,mylegacy:vo,ccube:po,oneservice:xo,pa:wo,a11yplayground:$o,supportgowhere:Co,imda:Eo,spf:So},defaultValue:"lifesg"},Bo={collections:{lifesg:yo,bookingsg:bo,rbs:Fo,mylegacy:vo,ccube:po,oneservice:xo,pa:wo,a11yplayground:$o,supportgowhere:Co,imda:Eo,spf:So},defaultValue:"lifesg"},ko=e=>r=>{var t;const n=r.theme,o="dark"===(null==n?void 0:n.colourMode),i=uo(o?Bo:Do,null==n?void 0:n.colourScheme),a=o?"primitiveColourDark":"primitiveColour",s=null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t[a];return s?co(i,e,s):i[e]},Oo={"brand-10":ko("brand-10"),"brand-20":ko("brand-20"),"brand-30":ko("brand-30"),"brand-40":ko("brand-40"),"brand-50":ko("brand-50"),"brand-60":ko("brand-60"),"brand-70":ko("brand-70"),"brand-80":ko("brand-80"),"brand-90":ko("brand-90"),"brand-95":ko("brand-95"),"brand-100":ko("brand-100"),"primary-10":ko("primary-10"),"primary-20":ko("primary-20"),"primary-30":ko("primary-30"),"primary-40":ko("primary-40"),"primary-50":ko("primary-50"),"primary-60":ko("primary-60"),"primary-70":ko("primary-70"),"primary-80":ko("primary-80"),"primary-90":ko("primary-90"),"primary-95":ko("primary-95"),"primary-100":ko("primary-100"),"secondary-10":ko("secondary-10"),"secondary-20":ko("secondary-20"),"secondary-30":ko("secondary-30"),"secondary-40":ko("secondary-40"),"secondary-50":ko("secondary-50"),"secondary-60":ko("secondary-60"),"secondary-70":ko("secondary-70"),"secondary-80":ko("secondary-80"),"secondary-90":ko("secondary-90"),"secondary-95":ko("secondary-95"),"secondary-100":ko("secondary-100"),"neutral-10":ko("neutral-10"),"neutral-20":ko("neutral-20"),"neutral-30":ko("neutral-30"),"neutral-40":ko("neutral-40"),"neutral-50":ko("neutral-50"),"neutral-60":ko("neutral-60"),"neutral-70":ko("neutral-70"),"neutral-80":ko("neutral-80"),"neutral-90":ko("neutral-90"),"neutral-95":ko("neutral-95"),"neutral-100":ko("neutral-100"),"success-10":ko("success-10"),"success-20":ko("success-20"),"success-30":ko("success-30"),"success-40":ko("success-40"),"success-50":ko("success-50"),"success-60":ko("success-60"),"success-70":ko("success-70"),"success-80":ko("success-80"),"success-90":ko("success-90"),"success-95":ko("success-95"),"success-100":ko("success-100"),"warning-10":ko("warning-10"),"warning-20":ko("warning-20"),"warning-30":ko("warning-30"),"warning-40":ko("warning-40"),"warning-50":ko("warning-50"),"warning-60":ko("warning-60"),"warning-70":ko("warning-70"),"warning-80":ko("warning-80"),"warning-90":ko("warning-90"),"warning-95":ko("warning-95"),"warning-100":ko("warning-100"),"error-10":ko("error-10"),"error-20":ko("error-20"),"error-30":ko("error-30"),"error-40":ko("error-40"),"error-50":ko("error-50"),"error-60":ko("error-60"),"error-70":ko("error-70"),"error-80":ko("error-80"),"error-90":ko("error-90"),"error-95":ko("error-95"),"error-100":ko("error-100"),"info-10":ko("info-10"),"info-20":ko("info-20"),"info-30":ko("info-30"),"info-40":ko("info-40"),"info-50":ko("info-50"),"info-60":ko("info-60"),"info-70":ko("info-70"),"info-80":ko("info-80"),"info-90":ko("info-90"),"info-95":ko("info-95"),"info-100":ko("info-100"),white:ko("white"),black:ko("black"),"primary-inverse":ko("primary-inverse")},To={text:ko("neutral-20"),"text-subtle":ko("neutral-30"),"text-subtler":ko("neutral-50"),"text-subtlest":ko("neutral-60"),"text-primary":ko("primary-50"),"text-primary-strongest":ko("primary-20"),"text-hover":ko("primary-40"),"text-selected":ko("primary-50"),"text-selected-hover":ko("primary-40"),"text-disabled":ko("neutral-50"),"text-disabled-subtle":ko("neutral-60"),"text-disabled-subtlest":ko("neutral-80"),"text-selected-disabled":ko("neutral-20"),"text-success":ko("success-40"),"text-warning":ko("warning-40"),"text-error":ko("error-40"),"text-info":ko("info-40"),"text-inverse":ko("white"),icon:ko("neutral-50"),"icon-subtle":ko("neutral-60"),"icon-strongest":ko("neutral-20"),"icon-primary":ko("primary-50"),"icon-primary-subtle":ko("primary-60"),"icon-primary-subtlest":ko("primary-70"),"icon-hover":ko("primary-40"),"icon-selected":ko("primary-50"),"icon-selected-hover":ko("primary-40"),"icon-disabled":ko("neutral-50"),"icon-disabled-subtle":ko("neutral-60"),"icon-selected-disabled":ko("neutral-60"),"icon-success":ko("success-50"),"icon-warning":ko("warning-60"),"icon-error":ko("error-50"),"icon-error-strong":ko("error-40"),"icon-info":ko("info-50"),"icon-inverse":ko("white"),"icon-primary-inverse":ko("primary-inverse"),border:ko("neutral-90"),"border-strong":ko("neutral-70"),"border-stronger":ko("neutral-50"),"border-primary":ko("primary-50"),"border-primary-subtle":ko("primary-60"),"border-hover":ko("primary-90"),"border-hover-strong":ko("primary-60"),"border-selected":ko("primary-50"),"border-selected-subtle":ko("primary-70"),"border-selected-subtlest":ko("primary-90"),"border-selected-hover":ko("primary-40"),"border-focus":ko("primary-60"),"border-focus-strong":ko("primary-50"),"border-disabled":ko("neutral-90"),"border-selected-disabled":ko("neutral-70"),"border-success":ko("success-60"),"border-warning":ko("warning-60"),"border-error":ko("error-60"),"border-error-focus":ko("error-60"),"border-error-focus-strong":ko("error-40"),"border-error-strong":ko("error-40"),"border-info":ko("info-60"),bg:ko("white"),"bg-strong":ko("neutral-100"),"bg-stronger":ko("neutral-95"),"bg-strongest":ko("neutral-90"),"bg-hover":ko("primary-95"),"bg-hover-strong":ko("primary-90"),"bg-hover-subtle":ko("primary-100"),"bg-hover-neutral":ko("neutral-100"),"bg-hover-neutral-strong":ko("neutral-90"),"bg-selected":ko("primary-95"),"bg-selected-hover":ko("primary-90"),"bg-selected-strong":ko("primary-90"),"bg-selected-stronger":ko("primary-70"),"bg-selected-strongest":ko("primary-50"),"bg-selected-strongest-hover":ko("primary-40"),"bg-disabled":ko("neutral-95"),"bg-selected-disabled":ko("neutral-95"),"bg-selected-stronger-disabled":ko("neutral-70"),"bg-success":ko("success-100"),"bg-success-hover":ko("success-95"),"bg-success-strong":ko("success-50"),"bg-success-strong-hover":ko("success-40"),"bg-warning":ko("warning-100"),"bg-warning-hover":ko("warning-95"),"bg-warning-strong":ko("warning-50"),"bg-warning-strong-hover":ko("warning-40"),"bg-info":ko("info-100"),"bg-info-hover":ko("info-95"),"bg-info-strong":ko("info-50"),"bg-info-strong-hover":ko("info-40"),"bg-error":ko("error-100"),"bg-error-hover":ko("error-95"),"bg-error-strong":ko("error-50"),"bg-error-strong-hover":ko("error-40"),"bg-inverse":ko("neutral-20"),"bg-inverse-subtle":ko("neutral-30"),"bg-inverse-subtler":ko("neutral-50"),"bg-inverse-subtlest":ko("neutral-60"),"bg-inverse-hover":ko("neutral-40"),"bg-primary":ko("primary-50"),"bg-primary-subtle":ko("primary-60"),"bg-primary-subtler":ko("primary-95"),"bg-primary-subtlest":ko("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":ko("primary-40"),"bg-primary-subtlest-hover":ko("primary-90"),"bg-primary-subtlest-selected":ko("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:ko("primary-50"),"hyperlink-hover":ko("primary-40"),"hyperlink-visited":ko("primary-40"),"hyperlink-inverse":ko("primary-inverse"),"focus-ring":ko("primary-50"),"focus-ring-inverse":ko("white")},zo={text:ko("neutral-100"),"text-subtle":ko("neutral-80"),"text-subtler":ko("neutral-60"),"text-subtlest":ko("neutral-50"),"text-primary":ko("primary-60"),"text-primary-strongest":ko("primary-90"),"text-hover":ko("primary-70"),"text-selected":ko("primary-60"),"text-selected-hover":ko("primary-70"),"text-disabled":ko("neutral-60"),"text-disabled-subtle":ko("neutral-50"),"text-disabled-subtlest":ko("neutral-30"),"text-selected-disabled":ko("neutral-90"),"text-success":ko("success-70"),"text-warning":ko("warning-70"),"text-error":ko("error-70"),"text-info":ko("info-70"),"text-inverse":ko("black"),icon:ko("neutral-60"),"icon-subtle":ko("neutral-50"),"icon-strongest":ko("neutral-90"),"icon-primary":ko("primary-60"),"icon-primary-subtle":ko("primary-50"),"icon-primary-subtlest":ko("primary-40"),"icon-hover":ko("primary-70"),"icon-selected":ko("primary-60"),"icon-selected-hover":ko("primary-70"),"icon-disabled":ko("neutral-60"),"icon-disabled-subtle":ko("neutral-50"),"icon-selected-disabled":ko("neutral-50"),"icon-success":ko("success-60"),"icon-warning":ko("warning-50"),"icon-error":ko("error-60"),"icon-error-strong":ko("error-70"),"icon-info":ko("info-60"),"icon-inverse":ko("black"),"icon-primary-inverse":ko("primary-inverse"),border:ko("neutral-20"),"border-strong":ko("neutral-40"),"border-stronger":ko("neutral-60"),"border-primary":ko("primary-60"),"border-primary-subtle":ko("primary-50"),"border-hover":ko("primary-20"),"border-hover-strong":ko("primary-50"),"border-selected":ko("primary-60"),"border-selected-subtle":ko("primary-40"),"border-selected-subtlest":ko("primary-20"),"border-selected-hover":ko("primary-70"),"border-focus":ko("primary-50"),"border-focus-strong":ko("primary-60"),"border-disabled":ko("neutral-20"),"border-selected-disabled":ko("neutral-40"),"border-success":ko("success-50"),"border-warning":ko("warning-50"),"border-error":ko("error-50"),"border-error-focus":ko("error-50"),"border-error-focus-strong":ko("error-70"),"border-error-strong":ko("error-70"),"border-info":ko("info-50"),bg:ko("black"),"bg-strong":ko("neutral-10"),"bg-stronger":ko("neutral-20"),"bg-strongest":ko("neutral-20"),"bg-hover":ko("primary-20"),"bg-hover-strong":ko("primary-20"),"bg-hover-subtle":ko("primary-10"),"bg-hover-neutral":ko("neutral-10"),"bg-hover-neutral-strong":ko("neutral-20"),"bg-selected":ko("primary-20"),"bg-selected-hover":ko("primary-20"),"bg-selected-strong":ko("primary-20"),"bg-selected-stronger":ko("primary-40"),"bg-selected-strongest":ko("primary-60"),"bg-selected-strongest-hover":ko("primary-70"),"bg-disabled":ko("neutral-20"),"bg-selected-disabled":ko("neutral-20"),"bg-selected-stronger-disabled":ko("neutral-40"),"bg-success":ko("success-10"),"bg-success-hover":ko("success-20"),"bg-success-strong":ko("success-60"),"bg-success-strong-hover":ko("success-70"),"bg-warning":ko("warning-10"),"bg-warning-hover":ko("warning-20"),"bg-warning-strong":ko("warning-60"),"bg-warning-strong-hover":ko("warning-70"),"bg-info":ko("info-10"),"bg-info-hover":ko("info-20"),"bg-info-strong":ko("info-60"),"bg-info-strong-hover":ko("info-70"),"bg-error":ko("error-10"),"bg-error-hover":ko("error-20"),"bg-error-strong":ko("error-60"),"bg-error-strong-hover":ko("error-70"),"bg-inverse":ko("neutral-90"),"bg-inverse-subtle":ko("neutral-80"),"bg-inverse-subtler":ko("neutral-60"),"bg-inverse-subtlest":ko("neutral-50"),"bg-inverse-hover":ko("neutral-70"),"bg-primary":ko("primary-60"),"bg-primary-subtle":ko("primary-50"),"bg-primary-subtler":ko("primary-20"),"bg-primary-subtlest":ko("primary-10"),"bg-available":"#185339","bg-primary-hover":ko("primary-70"),"bg-primary-subtlest-hover":ko("primary-20"),"bg-primary-subtlest-selected":ko("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:ko("primary-60"),"hyperlink-hover":ko("primary-70"),"hyperlink-visited":ko("primary-70"),"hyperlink-inverse":ko("primary-inverse"),"focus-ring":ko("primary-60"),"focus-ring-inverse":ko("black")},Ao={text:ko("neutral-30"),"text-subtle":ko("neutral-40"),"text-subtler":ko("neutral-50"),"text-subtlest":ko("neutral-70"),"text-primary":ko("neutral-10"),"text-primary-strongest":ko("neutral-10"),"text-hover":ko("neutral-70"),"text-selected":ko("neutral-20"),"text-selected-hover":ko("neutral-10"),"text-disabled":ko("neutral-50"),"text-disabled-subtle":ko("neutral-70"),"text-disabled-subtlest":ko("neutral-80"),"text-selected-disabled":ko("neutral-40"),"text-success":ko("success-40"),"text-warning":ko("warning-40"),"text-error":ko("brand-30"),"text-info":ko("neutral-40"),"text-inverse":ko("neutral-100"),icon:ko("neutral-40"),"icon-subtle":ko("neutral-50"),"icon-strongest":ko("neutral-10"),"icon-primary":ko("neutral-10"),"icon-primary-subtle":ko("neutral-30"),"icon-primary-subtlest":ko("neutral-60"),"icon-hover":ko("neutral-70"),"icon-selected":ko("brand-20"),"icon-selected-hover":ko("brand-10"),"icon-disabled":ko("neutral-50"),"icon-disabled-subtle":ko("neutral-70"),"icon-selected-disabled":ko("neutral-40"),"icon-success":ko("success-40"),"icon-warning":ko("warning-60"),"icon-error":ko("brand-30"),"icon-error-strong":ko("brand-10"),"icon-info":ko("neutral-40"),"icon-inverse":ko("neutral-100"),"icon-primary-inverse":"#F9B371",border:ko("neutral-90"),"border-strong":ko("neutral-30"),"border-stronger":ko("neutral-20"),"border-primary":ko("neutral-40"),"border-primary-subtle":ko("neutral-60"),"border-hover":ko("neutral-80"),"border-hover-strong":ko("neutral-10"),"border-selected":ko("brand-20"),"border-selected-subtle":ko("neutral-40"),"border-selected-subtlest":ko("neutral-70"),"border-selected-hover":ko("neutral-10"),"border-focus":ko("neutral-20"),"border-focus-strong":ko("neutral-10"),"border-disabled":ko("neutral-90"),"border-selected-disabled":ko("neutral-80"),"border-success":ko("success-40"),"border-warning":ko("warning-60"),"border-error":ko("brand-30"),"border-error-focus":ko("brand-20"),"border-error-focus-strong":ko("brand-10"),"border-error-strong":ko("brand-20"),"border-info":ko("neutral-40"),bg:ko("neutral-100"),"bg-strong":ko("neutral-95"),"bg-stronger":ko("neutral-90"),"bg-strongest":ko("neutral-80"),"bg-hover":ko("brand-90"),"bg-hover-strong":ko("brand-80"),"bg-hover-subtle":ko("neutral-90"),"bg-hover-neutral":ko("neutral-90"),"bg-hover-neutral-strong":ko("neutral-90"),"bg-selected":ko("brand-100"),"bg-selected-hover":ko("brand-30"),"bg-selected-strong":ko("brand-50"),"bg-selected-stronger":ko("brand-40"),"bg-selected-strongest":ko("brand-20"),"bg-selected-strongest-hover":ko("brand-10"),"bg-disabled":ko("neutral-90"),"bg-selected-disabled":ko("neutral-90"),"bg-selected-stronger-disabled":ko("neutral-80"),"bg-success":ko("success-100"),"bg-success-hover":ko("success-95"),"bg-success-strong":ko("success-50"),"bg-success-strong-hover":ko("success-40"),"bg-warning":ko("warning-100"),"bg-warning-hover":ko("warning-95"),"bg-warning-strong":ko("warning-50"),"bg-warning-strong-hover":ko("warning-40"),"bg-info":ko("neutral-95"),"bg-info-hover":ko("info-95"),"bg-info-strong":ko("info-50"),"bg-info-strong-hover":ko("info-40"),"bg-error":ko("brand-100"),"bg-error-hover":ko("error-95"),"bg-error-strong":ko("error-50"),"bg-error-strong-hover":ko("error-40"),"bg-inverse":ko("neutral-40"),"bg-inverse-subtle":ko("neutral-60"),"bg-inverse-subtler":ko("neutral-70"),"bg-inverse-subtlest":ko("neutral-80"),"bg-inverse-hover":ko("neutral-30"),"bg-primary":ko("brand-20"),"bg-primary-subtle":ko("brand-60"),"bg-primary-subtler":ko("brand-80"),"bg-primary-subtlest":ko("brand-100"),"bg-available":ko("success-60"),"bg-primary-hover":ko("brand-10"),"bg-primary-subtlest-hover":ko("brand-80"),"bg-primary-subtlest-selected":ko("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:ko("neutral-10"),"hyperlink-hover":ko("neutral-40"),"hyperlink-visited":ko("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":ko("primary-50"),"focus-ring-inverse":ko("white")},Io={text:ko("neutral-20"),"text-subtle":ko("neutral-30"),"text-subtler":ko("neutral-50"),"text-subtlest":ko("neutral-60"),"text-primary":ko("primary-50"),"text-primary-strongest":ko("primary-20"),"text-hover":ko("primary-40"),"text-selected":ko("primary-50"),"text-selected-hover":ko("primary-40"),"text-disabled":ko("neutral-50"),"text-disabled-subtle":ko("neutral-60"),"text-disabled-subtlest":ko("neutral-80"),"text-selected-disabled":ko("neutral-20"),"text-success":ko("success-40"),"text-warning":ko("warning-40"),"text-error":ko("error-40"),"text-info":ko("info-40"),"text-inverse":ko("white"),icon:ko("neutral-50"),"icon-subtle":ko("neutral-60"),"icon-strongest":ko("neutral-20"),"icon-primary":ko("primary-50"),"icon-primary-subtle":ko("primary-60"),"icon-primary-subtlest":ko("primary-70"),"icon-hover":ko("primary-40"),"icon-selected":ko("primary-50"),"icon-selected-hover":ko("primary-40"),"icon-disabled":ko("neutral-50"),"icon-disabled-subtle":ko("neutral-60"),"icon-selected-disabled":ko("neutral-60"),"icon-success":ko("success-50"),"icon-warning":ko("warning-60"),"icon-error":ko("error-50"),"icon-error-strong":ko("error-40"),"icon-info":ko("info-50"),"icon-inverse":ko("white"),"icon-primary-inverse":ko("primary-inverse"),border:ko("neutral-90"),"border-strong":ko("neutral-70"),"border-stronger":ko("neutral-50"),"border-primary":ko("primary-50"),"border-primary-subtle":ko("primary-60"),"border-hover":ko("primary-90"),"border-hover-strong":ko("primary-60"),"border-selected":ko("primary-50"),"border-selected-subtle":ko("primary-70"),"border-selected-subtlest":ko("primary-90"),"border-selected-hover":ko("primary-40"),"border-focus":ko("primary-60"),"border-focus-strong":ko("primary-50"),"border-disabled":ko("neutral-90"),"border-selected-disabled":ko("neutral-70"),"border-success":ko("success-60"),"border-warning":ko("warning-60"),"border-error":ko("error-60"),"border-error-focus":ko("error-60"),"border-error-focus-strong":ko("error-40"),"border-error-strong":ko("error-40"),"border-info":ko("info-60"),bg:ko("white"),"bg-strong":ko("neutral-100"),"bg-stronger":ko("neutral-95"),"bg-strongest":ko("neutral-90"),"bg-hover":ko("primary-95"),"bg-hover-strong":ko("primary-90"),"bg-hover-subtle":ko("primary-100"),"bg-hover-neutral":ko("neutral-100"),"bg-hover-neutral-strong":ko("neutral-90"),"bg-selected":ko("primary-95"),"bg-selected-hover":ko("primary-90"),"bg-selected-strong":ko("primary-90"),"bg-selected-stronger":ko("primary-70"),"bg-selected-strongest":ko("primary-50"),"bg-selected-strongest-hover":ko("primary-40"),"bg-disabled":ko("neutral-95"),"bg-selected-disabled":ko("neutral-95"),"bg-selected-stronger-disabled":ko("neutral-70"),"bg-success":ko("success-100"),"bg-success-hover":ko("success-95"),"bg-success-strong":ko("success-50"),"bg-success-strong-hover":ko("success-40"),"bg-warning":ko("warning-100"),"bg-warning-hover":ko("warning-95"),"bg-warning-strong":ko("warning-50"),"bg-warning-strong-hover":ko("warning-40"),"bg-info":ko("info-100"),"bg-info-hover":ko("info-95"),"bg-info-strong":ko("info-50"),"bg-info-strong-hover":ko("info-40"),"bg-error":ko("error-100"),"bg-error-hover":ko("error-95"),"bg-error-strong":ko("error-50"),"bg-error-strong-hover":ko("error-40"),"bg-inverse":ko("neutral-20"),"bg-inverse-subtle":ko("neutral-30"),"bg-inverse-subtler":ko("neutral-50"),"bg-inverse-subtlest":ko("neutral-60"),"bg-inverse-hover":ko("neutral-40"),"bg-primary":ko("primary-50"),"bg-primary-subtle":ko("primary-60"),"bg-primary-subtler":ko("primary-95"),"bg-primary-subtlest":ko("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":ko("primary-40"),"bg-primary-subtlest-hover":ko("primary-90"),"bg-primary-subtlest-selected":ko("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:ko("primary-50"),"hyperlink-hover":ko("primary-40"),"hyperlink-visited":ko("primary-40"),"hyperlink-inverse":ko("primary-inverse"),"focus-ring":ko("primary-50"),"focus-ring-inverse":ko("white")},Mo={text:ko("neutral-100"),"text-subtle":ko("neutral-80"),"text-subtler":ko("neutral-60"),"text-subtlest":ko("neutral-50"),"text-primary":ko("primary-60"),"text-primary-strongest":ko("primary-90"),"text-hover":ko("primary-70"),"text-selected":ko("primary-60"),"text-selected-hover":ko("primary-70"),"text-disabled":ko("neutral-60"),"text-disabled-subtle":ko("neutral-50"),"text-disabled-subtlest":ko("neutral-30"),"text-selected-disabled":ko("neutral-90"),"text-success":ko("success-70"),"text-warning":ko("warning-70"),"text-error":ko("error-70"),"text-info":ko("info-70"),"text-inverse":ko("black"),icon:ko("neutral-60"),"icon-subtle":ko("neutral-50"),"icon-strongest":ko("neutral-90"),"icon-primary":ko("primary-60"),"icon-primary-subtle":ko("primary-50"),"icon-primary-subtlest":ko("primary-40"),"icon-hover":ko("primary-70"),"icon-selected":ko("primary-60"),"icon-selected-hover":ko("primary-70"),"icon-disabled":ko("neutral-60"),"icon-disabled-subtle":ko("neutral-50"),"icon-selected-disabled":ko("neutral-50"),"icon-success":ko("success-60"),"icon-warning":ko("warning-50"),"icon-error":ko("error-60"),"icon-error-strong":ko("error-70"),"icon-info":ko("info-60"),"icon-inverse":ko("black"),"icon-primary-inverse":ko("primary-inverse"),border:ko("neutral-20"),"border-strong":ko("neutral-40"),"border-stronger":ko("neutral-60"),"border-primary":ko("primary-60"),"border-primary-subtle":ko("primary-50"),"border-hover":ko("primary-20"),"border-hover-strong":ko("primary-50"),"border-selected":ko("primary-60"),"border-selected-subtle":ko("primary-40"),"border-selected-subtlest":ko("primary-20"),"border-selected-hover":ko("primary-70"),"border-focus":ko("primary-50"),"border-focus-strong":ko("primary-60"),"border-disabled":ko("neutral-20"),"border-selected-disabled":ko("neutral-40"),"border-success":ko("success-50"),"border-warning":ko("warning-50"),"border-error":ko("error-50"),"border-error-focus":ko("error-50"),"border-error-focus-strong":ko("error-70"),"border-error-strong":ko("error-70"),"border-info":ko("info-50"),bg:ko("black"),"bg-strong":ko("neutral-10"),"bg-stronger":ko("neutral-20"),"bg-strongest":ko("neutral-20"),"bg-hover":ko("primary-20"),"bg-hover-strong":ko("primary-20"),"bg-hover-subtle":ko("primary-10"),"bg-hover-neutral":ko("neutral-10"),"bg-hover-neutral-strong":ko("neutral-20"),"bg-selected":ko("primary-20"),"bg-selected-hover":ko("primary-20"),"bg-selected-strong":ko("primary-20"),"bg-selected-stronger":ko("primary-40"),"bg-selected-strongest":ko("primary-60"),"bg-selected-strongest-hover":ko("primary-70"),"bg-disabled":ko("neutral-20"),"bg-selected-disabled":ko("neutral-20"),"bg-selected-stronger-disabled":ko("neutral-40"),"bg-success":ko("success-10"),"bg-success-hover":ko("success-20"),"bg-success-strong":ko("success-60"),"bg-success-strong-hover":ko("success-70"),"bg-warning":ko("warning-10"),"bg-warning-hover":ko("warning-20"),"bg-warning-strong":ko("warning-60"),"bg-warning-strong-hover":ko("warning-70"),"bg-info":ko("info-10"),"bg-info-hover":ko("info-20"),"bg-info-strong":ko("info-60"),"bg-info-strong-hover":ko("info-70"),"bg-error":ko("error-10"),"bg-error-hover":ko("error-20"),"bg-error-strong":ko("error-60"),"bg-error-strong-hover":ko("error-70"),"bg-inverse":ko("neutral-90"),"bg-inverse-subtle":ko("neutral-80"),"bg-inverse-subtler":ko("neutral-60"),"bg-inverse-subtlest":ko("neutral-50"),"bg-inverse-hover":ko("neutral-70"),"bg-primary":ko("primary-60"),"bg-primary-subtle":ko("primary-50"),"bg-primary-subtler":ko("primary-20"),"bg-primary-subtlest":ko("primary-10"),"bg-available":"#185339","bg-primary-hover":ko("primary-70"),"bg-primary-subtlest-hover":ko("primary-20"),"bg-primary-subtlest-selected":ko("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:ko("primary-60"),"hyperlink-hover":ko("primary-70"),"hyperlink-visited":ko("primary-70"),"hyperlink-inverse":ko("primary-inverse"),"focus-ring":ko("primary-60"),"focus-ring-inverse":ko("black")},jo={collections:{lifesg:To,bookingsg:To,rbs:To,mylegacy:To,ccube:To,oneservice:To,pa:Ao,a11yplayground:Io,supportgowhere:To,imda:To,spf:To},defaultValue:"lifesg"},Lo={collections:{lifesg:zo,bookingsg:zo,rbs:zo,mylegacy:zo,ccube:zo,oneservice:zo,pa:zo,a11yplayground:Mo,supportgowhere:zo,imda:zo,spf:zo},defaultValue:"lifesg"},_o=e=>r=>{var t;const n=r.theme,o="dark"===(null==n?void 0:n.colourMode),i=uo(o?Lo:jo,null==n?void 0:n.colourScheme),a=o?"semanticColourDark":"semanticColour",s=null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t[a],l=s?co(i,e,s):i[e];return"function"==typeof l?l(r):l},Ro={text:_o("text"),"text-subtle":_o("text-subtle"),"text-subtler":_o("text-subtler"),"text-subtlest":_o("text-subtlest"),"text-primary":_o("text-primary"),"text-primary-strongest":_o("text-primary-strongest"),"text-hover":_o("text-hover"),"text-selected":_o("text-selected"),"text-selected-hover":_o("text-selected-hover"),"text-disabled":_o("text-disabled"),"text-disabled-subtle":_o("text-disabled-subtle"),"text-disabled-subtlest":_o("text-disabled-subtlest"),"text-selected-disabled":_o("text-selected-disabled"),"text-success":_o("text-success"),"text-warning":_o("text-warning"),"text-error":_o("text-error"),"text-info":_o("text-info"),"text-inverse":_o("text-inverse"),icon:_o("icon"),"icon-subtle":_o("icon-subtle"),"icon-strongest":_o("icon-strongest"),"icon-primary":_o("icon-primary"),"icon-primary-subtle":_o("icon-primary-subtle"),"icon-primary-subtlest":_o("icon-primary-subtlest"),"icon-hover":_o("icon-hover"),"icon-selected":_o("icon-selected"),"icon-selected-hover":_o("icon-selected-hover"),"icon-disabled":_o("icon-disabled"),"icon-disabled-subtle":_o("icon-disabled-subtle"),"icon-selected-disabled":_o("icon-selected-disabled"),"icon-success":_o("icon-success"),"icon-warning":_o("icon-warning"),"icon-error":_o("icon-error"),"icon-error-strong":_o("icon-error-strong"),"icon-info":_o("icon-info"),"icon-inverse":_o("icon-inverse"),"icon-primary-inverse":_o("icon-primary-inverse"),border:_o("border"),"border-strong":_o("border-strong"),"border-stronger":_o("border-stronger"),"border-primary":_o("border-primary"),"border-primary-subtle":_o("border-primary-subtle"),"border-hover":_o("border-hover"),"border-hover-strong":_o("border-hover-strong"),"border-selected":_o("border-selected"),"border-selected-subtle":_o("border-selected-subtle"),"border-selected-subtlest":_o("border-selected-subtlest"),"border-selected-hover":_o("border-selected-hover"),"border-focus":_o("border-focus"),"border-focus-strong":_o("border-focus-strong"),"border-disabled":_o("border-disabled"),"border-selected-disabled":_o("border-selected-disabled"),"border-success":_o("border-success"),"border-warning":_o("border-warning"),"border-error":_o("border-error"),"border-error-focus":_o("border-error-focus"),"border-error-focus-strong":_o("border-error-focus-strong"),"border-error-strong":_o("border-error-strong"),"border-info":_o("border-info"),bg:_o("bg"),"bg-strong":_o("bg-strong"),"bg-stronger":_o("bg-stronger"),"bg-strongest":_o("bg-strongest"),"bg-hover":_o("bg-hover"),"bg-hover-strong":_o("bg-hover-strong"),"bg-hover-subtle":_o("bg-hover-subtle"),"bg-hover-neutral":_o("bg-hover-neutral"),"bg-hover-neutral-strong":_o("bg-hover-neutral-strong"),"bg-selected":_o("bg-selected"),"bg-selected-hover":_o("bg-selected-hover"),"bg-selected-strong":_o("bg-selected-strong"),"bg-selected-stronger":_o("bg-selected-stronger"),"bg-selected-strongest":_o("bg-selected-strongest"),"bg-selected-strongest-hover":_o("bg-selected-strongest-hover"),"bg-disabled":_o("bg-disabled"),"bg-selected-disabled":_o("bg-selected-disabled"),"bg-selected-stronger-disabled":_o("bg-selected-stronger-disabled"),"bg-success":_o("bg-success"),"bg-success-hover":_o("bg-success-hover"),"bg-success-strong":_o("bg-success-strong"),"bg-success-strong-hover":_o("bg-success-strong-hover"),"bg-warning":_o("bg-warning"),"bg-warning-hover":_o("bg-warning-hover"),"bg-warning-strong":_o("bg-warning-strong"),"bg-warning-strong-hover":_o("bg-warning-strong-hover"),"bg-info":_o("bg-info"),"bg-info-hover":_o("bg-info-hover"),"bg-info-strong":_o("bg-info-strong"),"bg-info-strong-hover":_o("bg-info-strong-hover"),"bg-error":_o("bg-error"),"bg-error-hover":_o("bg-error-hover"),"bg-error-strong":_o("bg-error-strong"),"bg-error-strong-hover":_o("bg-error-strong-hover"),"bg-inverse":_o("bg-inverse"),"bg-inverse-subtle":_o("bg-inverse-subtle"),"bg-inverse-subtler":_o("bg-inverse-subtler"),"bg-inverse-subtlest":_o("bg-inverse-subtlest"),"bg-inverse-hover":_o("bg-inverse-hover"),"bg-primary":_o("bg-primary"),"bg-primary-subtle":_o("bg-primary-subtle"),"bg-primary-subtler":_o("bg-primary-subtler"),"bg-primary-subtlest":_o("bg-primary-subtlest"),"bg-available":_o("bg-available"),"bg-primary-hover":_o("bg-primary-hover"),"bg-primary-subtlest-hover":_o("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":_o("bg-primary-subtlest-selected"),"overlay-strong":_o("overlay-strong"),"overlay-subtle":_o("overlay-subtle"),hyperlink:_o("hyperlink"),"hyperlink-hover":_o("hyperlink-hover"),"hyperlink-visited":_o("hyperlink-visited"),"hyperlink-inverse":_o("hyperlink-inverse"),"focus-ring":_o("focus-ring"),"focus-ring-inverse":_o("focus-ring-inverse")},Ho={collections:{default:{solid:e=>r=>{var t,n,o;const{thickness:i,radius:a,colour:s}=e||{},l=null!==(t="function"==typeof i?i(r):i+"px")&&void 0!==t?t:mo["width-010"](r),d=null!==(n="function"==typeof a?a(r):a+"px")&&void 0!==n?n:0,c=null!==(o="function"==typeof s?s(r):s)&&void 0!==o?o:Ro.border(r),u=mo.solid;return $`
            border: ${l} ${u} ${c};
            border-radius: ${d};
        `},"dashed-default":e=>r=>{var t,n,o;const{thickness:i,radius:a,colour:s}=e||{},l=null!==(t="function"==typeof i?i(r):i)&&void 0!==t?t:mo["width-010"](r),d=null!==(n="function"==typeof a?a(r):a)&&void 0!==n?n:0,c=null!==(o="function"==typeof s?s(r):s)&&void 0!==o?o:Ro.border(r),u=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${d}' ry='${d}' stroke='${c}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return $`
            background-image: url("data:image/svg+xml,${u}");
            border-radius: ${d};
        `}}},defaultValue:"default"},Po=e=>1===e.length&&"theme"in e[0],Wo=e=>(...r)=>t=>{const n=Po(r)?[]:r,o=Po(r)?r[0]:t,i=o.theme;return(0,uo(Ho,null==i?void 0:i.borderScheme)[e])(...n)(o)},No={solid:Wo("solid"),"dashed-default":Wo("dashed-default")},Vo={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":480,"md-min":481,"md-max":768,"lg-min":769,"lg-max":1200,"xl-min":1201,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},Yo=e=>r=>{var t;const n=r.theme,o=uo(Vo,null==n?void 0:n.breakpointScheme);let i;return i=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.breakpoint)?co(o,e,n.overrides.breakpoint):o[e],i},Uo={"xxs-min":Yo("xxs-min"),"xxs-max":Yo("xxs-max"),"xs-min":Yo("xs-min"),"xs-max":Yo("xs-max"),"sm-min":Yo("sm-min"),"sm-max":Yo("sm-max"),"md-min":Yo("md-min"),"md-max":Yo("md-max"),"lg-min":Yo("lg-min"),"lg-max":Yo("lg-max"),"xl-min":Yo("xl-min"),"xl-max":Yo("xl-max"),"xxl-min":Yo("xxl-min"),"xxs-column":Yo("xxs-column"),"xs-column":Yo("xs-column"),"sm-column":Yo("sm-column"),"md-column":Yo("md-column"),"lg-column":Yo("lg-column"),"xl-column":Yo("xl-column"),"xxl-column":Yo("xxl-column"),"xxs-gutter":Yo("xxs-gutter"),"xs-gutter":Yo("xs-gutter"),"sm-gutter":Yo("sm-gutter"),"md-gutter":Yo("md-gutter"),"lg-gutter":Yo("lg-gutter"),"xl-gutter":Yo("xl-gutter"),"xxl-gutter":Yo("xxl-gutter"),"xxs-margin":Yo("xxs-margin"),"xs-margin":Yo("xs-margin"),"sm-margin":Yo("sm-margin"),"md-margin":Yo("md-margin"),"lg-margin":Yo("lg-margin"),"xl-margin":Yo("xl-margin"),"xxl-margin":Yo("xxl-margin")},qo=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,t)=>(r[t]=((e,r)=>{const t=Uo["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const n=t(r);return`@media screen and (${e}: ${n}px)`}})(e,t),r)),{}),Go={MaxWidth:qo("max-width"),MinWidth:qo("min-width")},Zo={collections:{default:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},bookingsg:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},mylegacy:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0.009rem"},pa:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.5rem","heading-size-sm":"1.25rem","heading-size-xs":"1rem","heading-lh-xxl":"3rem","heading-lh-xl":"2.5rem","heading-lh-lg":"2.25rem","heading-lh-md":"2rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.032rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.625rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.25rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},a11yplayground:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Atkinson Hyperlegible Next","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0.009rem"},supportgowhere:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Libre Franklin","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},imda:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Montserrat","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},spf:{"heading-size-xxl":"3.75rem","heading-size-xl":"3rem","heading-size-lg":"2.5rem","heading-size-md":"2rem","heading-size-sm":"1.75rem","heading-size-xs":"1.5rem","heading-lh-xxl":"4.5rem","heading-lh-xl":"3.5rem","heading-lh-lg":"3rem","heading-lh-md":"2.25rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.035rem","heading-ls-xl":"-0.02rem","heading-ls-lg":"-0.02rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Public Sans","body-size-baseline":"1.2rem","body-size-md":"1.125rem","body-size-sm":"1rem","body-size-xs":"0.875rem","body-lh-baseline":"1.5rem","body-lh-md":"1.5rem","body-lh-sm":"1.5rem","body-lh-xs":"1.125rem","body-ls-baseline":"0rem","body-ls-md":"0.009rem","body-ls-sm":"0.008rem","body-ls-xs":"0.008rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0.009rem","form-description-ls":"0.008rem"},oneservice:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.375rem","heading-size-sm":"1.125rem","heading-size-xs":"1rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.625rem","heading-lh-md":"2rem","heading-lh-sm":"1.625rem","heading-lh-xs":"1.5rem","heading-ls-xxl":"0rem","heading-ls-xl":"0rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.75rem","body-lh-baseline":"1.5rem","body-lh-md":"1.313rem","body-lh-sm":"1.125rem","body-lh-xs":"1.125rem","body-ls-baseline":"0rem","body-ls-md":"0rem","body-ls-sm":"0rem","body-ls-xs":"0rem","form-label-size":"0.875rem","form-description-size":"0.875rem","form-label-lh":"1.313rem","form-description-lh":"1.313rem","form-label-ls":"0rem","form-description-ls":"0rem"}},defaultValue:"default"},Ko=e=>r=>{var t;const n=r.theme,o=uo(Zo,null==n?void 0:n.fontScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.fontSpec)?co(o,e,n.overrides.fontSpec):o[e]},Xo={"heading-size-xxl":Ko("heading-size-xxl"),"heading-size-xl":Ko("heading-size-xl"),"heading-size-lg":Ko("heading-size-lg"),"heading-size-md":Ko("heading-size-md"),"heading-size-sm":Ko("heading-size-sm"),"heading-size-xs":Ko("heading-size-xs"),"heading-lh-xxl":Ko("heading-lh-xxl"),"heading-lh-xl":Ko("heading-lh-xl"),"heading-lh-lg":Ko("heading-lh-lg"),"heading-lh-md":Ko("heading-lh-md"),"heading-lh-sm":Ko("heading-lh-sm"),"heading-lh-xs":Ko("heading-lh-xs"),"heading-ls-xxl":Ko("heading-ls-xxl"),"heading-ls-xl":Ko("heading-ls-xl"),"heading-ls-lg":Ko("heading-ls-lg"),"heading-ls-md":Ko("heading-ls-md"),"heading-ls-sm":Ko("heading-ls-sm"),"heading-ls-xs":Ko("heading-ls-xs"),"weight-light":Ko("weight-light"),"weight-regular":Ko("weight-regular"),"weight-semibold":Ko("weight-semibold"),"weight-bold":Ko("weight-bold"),"font-family":Ko("font-family"),"body-size-baseline":Ko("body-size-baseline"),"body-size-md":Ko("body-size-md"),"body-size-sm":Ko("body-size-sm"),"body-size-xs":Ko("body-size-xs"),"body-lh-baseline":Ko("body-lh-baseline"),"body-lh-md":Ko("body-lh-md"),"body-lh-sm":Ko("body-lh-sm"),"body-lh-xs":Ko("body-lh-xs"),"body-ls-baseline":Ko("body-ls-baseline"),"body-ls-md":Ko("body-ls-md"),"body-ls-sm":Ko("body-ls-sm"),"body-ls-xs":Ko("body-ls-xs"),"form-label-size":Ko("form-label-size"),"form-description-size":Ko("form-description-size"),"form-label-lh":Ko("form-label-lh"),"form-description-lh":Ko("form-description-lh"),"form-label-ls":Ko("form-label-ls"),"form-description-ls":Ko("form-description-ls")},Qo=(e,r,t,n,o)=>{const{disableLigatures:i}=o||{};return $`
        font-family: ${Ko("font-family")};
        font-size: ${Ko(e)};
        font-weight: ${Ko(r)};
        line-height: ${Ko(t)};
        letter-spacing: ${Ko(n)};

        font-variant: ${i?"no-common-ligatures":"normal"};
    `},Jo=(e={})=>({"heading-xxl-light":Qo("heading-size-xxl","weight-light","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-regular":Qo("heading-size-xxl","weight-regular","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-semibold":Qo("heading-size-xxl","weight-semibold","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-bold":Qo("heading-size-xxl","weight-bold","heading-lh-xxl","heading-ls-xxl",e),"heading-xl-light":Qo("heading-size-xl","weight-light","heading-lh-xl","heading-ls-xl",e),"heading-xl-regular":Qo("heading-size-xl","weight-regular","heading-lh-xl","heading-ls-xl",e),"heading-xl-semibold":Qo("heading-size-xl","weight-semibold","heading-lh-xl","heading-ls-xl",e),"heading-xl-bold":Qo("heading-size-xl","weight-bold","heading-lh-xl","heading-ls-xl",e),"heading-lg-light":Qo("heading-size-lg","weight-light","heading-lh-lg","heading-ls-lg",e),"heading-lg-regular":Qo("heading-size-lg","weight-regular","heading-lh-lg","heading-ls-lg",e),"heading-lg-semibold":Qo("heading-size-lg","weight-semibold","heading-lh-lg","heading-ls-lg",e),"heading-lg-bold":Qo("heading-size-lg","weight-bold","heading-lh-lg","heading-ls-lg",e),"heading-md-light":Qo("heading-size-md","weight-light","heading-lh-md","heading-ls-md",e),"heading-md-regular":Qo("heading-size-md","weight-regular","heading-lh-md","heading-ls-md",e),"heading-md-semibold":Qo("heading-size-md","weight-semibold","heading-lh-md","heading-ls-md",e),"heading-md-bold":Qo("heading-size-md","weight-bold","heading-lh-md","heading-ls-md",e),"heading-sm-light":Qo("heading-size-sm","weight-light","heading-lh-sm","heading-ls-sm",e),"heading-sm-regular":Qo("heading-size-sm","weight-regular","heading-lh-sm","heading-ls-sm",e),"heading-sm-semibold":Qo("heading-size-sm","weight-semibold","heading-lh-sm","heading-ls-sm",e),"heading-sm-bold":Qo("heading-size-sm","weight-bold","heading-lh-sm","heading-ls-sm",e),"heading-xs-light":Qo("heading-size-xs","weight-light","heading-lh-xs","heading-ls-xs",e),"heading-xs-regular":Qo("heading-size-xs","weight-regular","heading-lh-xs","heading-ls-xs",e),"heading-xs-semibold":Qo("heading-size-xs","weight-semibold","heading-lh-xs","heading-ls-xs",e),"heading-xs-bold":Qo("heading-size-xs","weight-bold","heading-lh-xs","heading-ls-xs",e),"body-baseline-light":Qo("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline",e),"body-baseline-regular":Qo("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline",e),"body-baseline-semibold":Qo("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline",e),"body-baseline-bold":Qo("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline",e),"body-md-light":Qo("body-size-md","weight-light","body-lh-md","body-ls-md",e),"body-md-regular":Qo("body-size-md","weight-regular","body-lh-md","body-ls-md",e),"body-md-semibold":Qo("body-size-md","weight-semibold","body-lh-md","body-ls-md",e),"body-md-bold":Qo("body-size-md","weight-bold","body-lh-md","body-ls-md",e),"body-sm-light":Qo("body-size-sm","weight-light","body-lh-sm","body-ls-sm",e),"body-sm-regular":Qo("body-size-sm","weight-regular","body-lh-sm","body-ls-sm",e),"body-sm-semibold":Qo("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm",e),"body-sm-bold":Qo("body-size-sm","weight-bold","body-lh-sm","body-ls-sm",e),"body-xs-light":Qo("body-size-xs","weight-light","body-lh-xs","body-ls-xs",e),"body-xs-regular":Qo("body-size-xs","weight-regular","body-lh-xs","body-ls-xs",e),"body-xs-semibold":Qo("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs",e),"body-xs-bold":Qo("body-size-xs","weight-bold","body-lh-xs","body-ls-xs",e),"form-label":Qo("form-label-size","weight-semibold","form-label-lh","form-label-ls",e),"form-description":Qo("form-description-size","weight-regular","form-description-lh","form-description-ls",e)}),ei=Jo({disableLigatures:!0}),ri=Jo(),ti={collections:{default:ri,bookingsg:ei,mylegacy:ri,pa:Jo({disableLigatures:!0}),a11yplayground:Jo({disableLigatures:!0}),supportgowhere:Jo({disableLigatures:!0}),imda:Jo({disableLigatures:!0}),spf:Jo({disableLigatures:!0}),oneservice:Jo()},defaultValue:"default"},ni=e=>r=>{var t;const n=r.theme,o=uo(ti,null==n?void 0:n.fontScheme),i=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.font)?co(o,e,n.overrides.font):o[e];return"function"==typeof i?i(r):i},oi={"heading-xxl-light":ni("heading-xxl-light"),"heading-xxl-regular":ni("heading-xxl-regular"),"heading-xxl-semibold":ni("heading-xxl-semibold"),"heading-xxl-bold":ni("heading-xxl-bold"),"heading-xl-light":ni("heading-xl-light"),"heading-xl-regular":ni("heading-xl-regular"),"heading-xl-semibold":ni("heading-xl-semibold"),"heading-xl-bold":ni("heading-xl-bold"),"heading-lg-light":ni("heading-lg-light"),"heading-lg-regular":ni("heading-lg-regular"),"heading-lg-semibold":ni("heading-lg-semibold"),"heading-lg-bold":ni("heading-lg-bold"),"heading-md-light":ni("heading-md-light"),"heading-md-regular":ni("heading-md-regular"),"heading-md-semibold":ni("heading-md-semibold"),"heading-md-bold":ni("heading-md-bold"),"heading-sm-light":ni("heading-sm-light"),"heading-sm-regular":ni("heading-sm-regular"),"heading-sm-semibold":ni("heading-sm-semibold"),"heading-sm-bold":ni("heading-sm-bold"),"heading-xs-light":ni("heading-xs-light"),"heading-xs-regular":ni("heading-xs-regular"),"heading-xs-semibold":ni("heading-xs-semibold"),"heading-xs-bold":ni("heading-xs-bold"),"body-baseline-light":ni("body-baseline-light"),"body-baseline-regular":ni("body-baseline-regular"),"body-baseline-semibold":ni("body-baseline-semibold"),"body-baseline-bold":ni("body-baseline-bold"),"body-md-light":ni("body-md-light"),"body-md-regular":ni("body-md-regular"),"body-md-semibold":ni("body-md-semibold"),"body-md-bold":ni("body-md-bold"),"body-sm-light":ni("body-sm-light"),"body-sm-regular":ni("body-sm-regular"),"body-sm-semibold":ni("body-sm-semibold"),"body-sm-bold":ni("body-sm-bold"),"body-xs-light":ni("body-xs-light"),"body-xs-regular":ni("body-xs-regular"),"body-xs-semibold":ni("body-xs-semibold"),"body-xs-bold":ni("body-xs-bold"),"form-label":ni("form-label"),"form-description":ni("form-description")},ii={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},ai=e=>r=>{var t;const n=r.theme,o=uo(ii,null==n?void 0:n.motionScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.motion)?co(o,e,n.overrides.motion):o[e]},si={"duration-150":ai("duration-150"),"duration-250":ai("duration-250"),"duration-350":ai("duration-350"),"duration-500":ai("duration-500"),"duration-800":ai("duration-800"),"duration-1000":ai("duration-1000"),"ease-default":ai("ease-default"),"ease-standard":ai("ease-standard"),"ease-entrance":ai("ease-entrance"),"ease-exit":ai("ease-exit")},li={collections:{default:{none:0,xs:2,sm:4,md:8,lg:12,full:9999},spf:{none:0,xs:2,sm:8,md:8,lg:12,full:9999}},defaultValue:"default"},di=e=>r=>{var t;const n=r.theme,o=uo(li,null==n?void 0:n.radiusScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.radius)?`${co(o,e,n.overrides.radius)}px`:`${o[e]}px`},ci={none:di("none"),xs:di("xs"),sm:di("sm"),md:di("md"),lg:di("lg"),full:di("full")},ui=(e,r,t)=>n=>{const o=_o(r)(n)||ko(r)(n);return`${e} rgba(from ${o} r g b / ${100*t}%)`},gi={collections:{default:{"xs-subtle":ui("0 0 4px 1px","neutral-50",.24),"xs-strong":ui("0 0 4px 1px","neutral-50",.5),"xs-focus-strong":ui("0 0 4px 1px","border-focus",.5),"xs-error-strong":ui("0 0 4px 1px","border-error",.5),"sm-subtle":ui("0 2px 4px 0","neutral-50",.24),"sm-strong":ui("0 2px 4px 0","neutral-50",.5),"md-subtle":ui("0 2px 8px 0","neutral-50",.24),"md-strong":ui("0 2px 8px 0","neutral-50",.5),"lg-subtle":ui("0 2px 12px 1px","neutral-50",.24),"lg-strong":ui("0 2px 12px 1px","neutral-50",.5)}},defaultValue:"default"},hi=e=>r=>{var t;const n=r.theme,o=uo(gi,null==n?void 0:n.shadowScheme),i=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.shadow)?co(o,e,n.overrides.shadow):o[e];return"function"==typeof i?i(r):i},mi={"xs-subtle":hi("xs-subtle"),"xs-strong":hi("xs-strong"),"xs-focus-strong":hi("xs-focus-strong"),"xs-error-strong":hi("xs-error-strong"),"sm-subtle":hi("sm-subtle"),"sm-strong":hi("sm-strong"),"md-subtle":hi("md-subtle"),"md-strong":hi("md-strong"),"lg-subtle":hi("lg-subtle"),"lg-strong":hi("lg-strong")},fi={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},bi=e=>r=>{var t;const n=r.theme,o=uo(fi,null==n?void 0:n.spacingScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.spacing)?`${co(o,e,n.overrides.spacing)}px`:`${o[e]}px`},pi={"spacing-0":bi("spacing-0"),"spacing-4":bi("spacing-4"),"spacing-8":bi("spacing-8"),"spacing-12":bi("spacing-12"),"spacing-16":bi("spacing-16"),"spacing-20":bi("spacing-20"),"spacing-24":bi("spacing-24"),"spacing-32":bi("spacing-32"),"spacing-40":bi("spacing-40"),"spacing-48":bi("spacing-48"),"spacing-64":bi("spacing-64"),"spacing-72":bi("spacing-72"),"layout-xs":bi("layout-xs"),"layout-sm":bi("layout-sm"),"layout-md":bi("layout-md"),"layout-lg":bi("layout-lg"),"layout-xl":bi("layout-xl"),"layout-xxl":bi("layout-xxl"),"layout-xxxl":bi("layout-xxxl")},yi=(e,r)=>Object.assign(Object.assign({},e),{colourMode:r}),vi=Object.assign(Object.assign({},Ro),{Primitive:Oo}),xi=Object.assign(Object.assign({},oi),{Spec:Xo}),wi=si,Fi=Object.assign(Object.assign({},mo),{Util:No}),$i=pi,Ci=ci,Ei=mi,Si=Uo,Di=Go,Bi={colourScheme:"lifesg",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"lifesg",componentScheme:"lifesg",_v2:{colorScheme:"base",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"base"}},ki={colourScheme:"bookingsg",fontScheme:"bookingsg",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"bookingsg",_v2:{colorScheme:"bookingsg",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"bookingsg"}},Oi={colourScheme:"ccube",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"ccube",_v2:{colorScheme:"ccube",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"ccube"}},Ti={colourScheme:"mylegacy",fontScheme:"mylegacy",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"mylegacy",_v2:{colorScheme:"mylegacy",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"mylegacy"}},zi={colourScheme:"rbs",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"rbs",_v2:{colorScheme:"rbs",textStyleScheme:"base",designTokenScheme:"rbs",resourceScheme:"rbs"}},Ai={colourScheme:"oneservice",fontScheme:"oneservice",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"oneservice"},Ii={colourScheme:"pa",fontScheme:"pa",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"pa",componentScheme:"pa"},Mi={colourScheme:"a11yplayground",fontScheme:"a11yplayground",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"a11yplayground",componentScheme:"a11yplayground"},ji={colourScheme:"supportgowhere",fontScheme:"supportgowhere",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"supportgowhere",componentScheme:"default"},Li={colourScheme:"imda",fontScheme:"imda",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"imda",componentScheme:"default"},_i={colourScheme:"spf",fontScheme:"spf",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"spf",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"spf",componentScheme:"spf"};Object.assign(Object.assign({},Bi),{light:yi(Bi,"light"),dark:yi(Bi,"dark")}),Object.assign(Object.assign({},ki),{light:yi(ki,"light"),dark:yi(ki,"dark")}),Object.assign(Object.assign({},Oi),{light:yi(Oi,"light"),dark:yi(Oi,"dark")}),Object.assign(Object.assign({},Ti),{light:yi(Ti,"light"),dark:yi(Ti,"dark")}),Object.assign(Object.assign({},zi),{light:yi(zi,"light"),dark:yi(zi,"dark")}),Object.assign(Object.assign({},Ai),{light:yi(Ai,"light"),dark:yi(Ai,"dark")}),Object.assign(Object.assign({},Ii),{light:yi(Ii,"light"),dark:yi(Ii,"dark")}),Object.assign(Object.assign({},Mi),{light:yi(Mi,"light"),dark:yi(Mi,"dark")}),Object.assign(Object.assign({},ji),{light:yi(ji,"light"),dark:yi(ji,"dark")}),Object.assign(Object.assign({},Li),{light:yi(Li,"light"),dark:yi(Li,"dark")}),Object.assign(Object.assign({},_i),{light:yi(_i,"light"),dark:yi(_i,"dark")});const Ri=e=>$`
    display: -webkit-box;
    -webkit-line-clamp: ${e};
    -webkit-box-orient: vertical;
    overflow: hidden;
`,Hi=(e,r,t=!1)=>$`
        ${xi[`${e}-${r}`]}
        ${t?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `,Pi=e=>{if(e)return $`
            ${Ri(e)}
        `},Wi=(e,r,t,n,o)=>$`
    ${Hi(e,r||"regular",n)}
    ${((e=!1,r=!1,t)=>r?$`
            display: block;
            ${Pi(t)}
        `:e?$`
            display: inline;
        `:$`
            display: block;
            ${Pi(t)}
        `)(t,n,o)}
    color: ${vi.text};
`,Ni=F.div`
    ${e=>Wi(e.$textStyle,e.$weight,e.$inline,e.$paragraph,e.$maxLines)}
`,Vi=F.a`
    ${e=>{var r;return $`
        ${Hi(e.$textStyle,e.$weight||"regular")}
        color: ${vi.hyperlink};
        text-decoration: ${null!==(r=e.$underlineStyle)&&void 0!==r?r:"underline"};

        &:hover,
        &:active,
        &:focus {
            color: ${vi["text-hover"]};
        }
    `}}
`,Yi=F(B)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`;var Ui;!function(t){const n=(r,t,n)=>{const i=(n,o)=>{var{weight:i,inline:a,paragraph:s,maxLines:l}=n,d=oe(n,["weight","inline","paragraph","maxLines"]);return e(Ni,Object.assign({ref:o,as:a?"span":r,$textStyle:t,$weight:i,$inline:a,$paragraph:s,$maxLines:l},d))};return i.displayName=`Typography.${n}`,o.forwardRef(i)};t.HeadingXXL=n("h1","heading-xxl","HeadingXXL"),t.HeadingXL=n("h2","heading-xl","HeadingXL"),t.HeadingLG=n("h3","heading-lg","HeadingLG"),t.HeadingMD=n("h4","heading-md","HeadingMD"),t.HeadingSM=n("h5","heading-sm","HeadingSM"),t.HeadingXS=n("h6","heading-xs","HeadingXS");const i=(r,t)=>{const n=(t,n)=>{var{weight:o,inline:i,paragraph:a,maxLines:s}=t,l=oe(t,["weight","inline","paragraph","maxLines"]);return e(Ni,Object.assign({ref:n,as:i?"span":"p",$textStyle:r,$weight:o,$inline:i,$paragraph:a,$maxLines:s},l))};return n.displayName=`Typography.${t}`,o.forwardRef(n)};t.BodyBL=i("body-baseline","BodyBL"),t.BodyMD=i("body-md","BodyMD"),t.BodySM=i("body-sm","BodySM"),t.BodyXS=i("body-xs","BodyXS");const a=(t,n)=>{const i=(n,o)=>{var{weight:i,children:a,external:s,underlineStyle:l="underline"}=n,d=oe(n,["weight","children","external","underlineStyle"]);return r(Vi,Object.assign({ref:o,$textStyle:t,$weight:i,$underlineStyle:l},d,{children:[a,s&&e(Yi,{})]}))};return i.displayName=`Typography.${n}`,o.forwardRef(i)};t.LinkBL=a("body-baseline","LinkBL"),t.LinkMD=a("body-md","LinkMD"),t.LinkSM=a("body-sm","LinkSM"),t.LinkXS=a("body-xs","LinkXS")}(Ui||(Ui={}));const qi=F.div`
    border-radius: ${Ci.md};
    background: ${vi.bg};
    padding: ${$i["spacing-16"]} ${$i["spacing-32"]};
    ${e=>{var r;return"dark"===(null===(r=e.theme)||void 0===r?void 0:r.colourMode)?$`
                  border: ${Fi["width-010"]} ${Fi.solid}
                      ${vi.border};
              `:$`
                  box-shadow: ${Ei["md-subtle"]};
              `}}
`,Gi=F.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${$i["spacing-24"]};
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

        ${({$highlight:e})=>e&&$`
                background-color: ${vi["bg-hover-neutral"]};
            `}
    }
`,Zi=o.forwardRef(((r,t)=>{var{children:n,focusHighlight:o=!0,focusOutline:i="none",type:a="button"}=r,s=oe(r,["children","focusHighlight","focusOutline","type"]);return e(Gi,Object.assign({ref:t,$outline:i,$highlight:o,type:a},s,{children:n}))})),Ki=F.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${vi.bg};
    box-shadow: ${Ei["lg-strong"]};
    border-radius: ${Ci.lg};
    overflow: hidden;

    ${Di.MaxWidth.md} {
        width: 90%;
        max-height: 70%;
    }
`,Xi=F(Zi)`
    position: absolute;
    top: var(--close-button-top-inset, ${$i["spacing-16"]});
    right: var(--close-button-right-inset, ${$i["spacing-16"]});
    padding: 0;
    color: ${vi.icon};

    svg {
        height: 2rem;
        width: 2rem;
    }

    ${Di.MaxWidth.sm} {
        right: var(--close-button-right-inset, ${$i["spacing-20"]});
    }
`,Qi=e=>{const{textSize:r}=e||{};return $`
        // Text styling
        ${r&&xi[`${r}-regular`]}

        strong {
            font-weight: ${xi.Spec["weight-semibold"]};
            ${r&&xi[`${r}-semibold`]};
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-weight: ${xi.Spec["weight-semibold"]};
            ${r&&xi[`${r}-semibold`]}
            color: ${vi.hyperlink};
            text-decoration: underline;

            svg {
                color: ${vi["icon-primary"]};
                height: 1lh;
                width: 1em;
                margin-left: 0.4rem;
                vertical-align: middle;
            }

            &:hover,
            &:active,
            &:visited,
            &:focus {
                color: ${vi["hyperlink-hover"]};

                svg {
                    color: ${vi["icon-hover"]};
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
    `};F.div`
    max-width: 30rem;
    padding: 0 1rem;
    pointer-events: auto;
    outline: none;
`,F((r=>{var{children:t}=r,n=oe(r,["children"]);const o=n["data-testid"]||"card";return e(qi,Object.assign({},n,{"data-testid":o,children:"string"==typeof t?e(Ui.BodyBL,{children:t}):t}))}))`
    color: ${vi.text};
    ${Qi({textSize:"body-md"})}

    ${Di.MaxWidth.sm} {
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
        background: ${vi["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: ${Ci.full};
        background-clip: padding-box;
    }
`,F((t=>{var{id:n="modal-box",children:o,onClose:i,showCloseButton:a=!0}=t,s=oe(t,["id","children","onClose","showCloseButton"]);return r(Ki,Object.assign({"data-testid":n},s,{onClick:e=>{e.stopPropagation()},children:[a&&e(Xi,{onClick:i,"data-testid":"close-button",focusHighlight:!1,focusOutline:"browser",children:e(k,{})}),o]}))}))`
    padding: 3.5rem 1.25rem 2.5rem;
`,F.div`
    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    color: ${vi.text};
    ${Qi({textSize:"body-md"})}
`;const Ji=F.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 0;
    width: 0;
    visibility: hidden;
    z-index: ${e=>e.$zIndex};

    ${e=>{if(e.$show)return $`
                height: 100%;
                width: 100vw;
                visibility: visible;
            `}}
`,ea=F.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${e=>e.$stacked?vi["overlay-subtle"]:vi["overlay-strong"]};
    backdrop-filter: ${e=>(e=>{let r="";return e&&(r+="blur(10px)"),r.length>0?r:"none"})(e.$backgroundBlur)};
    transition: opacity 200ms ease;

    ${e=>{let r="";return e.$show?r+=$`
                visibility: visible;
                opacity: 1;
                pointer-events: auto;
                height: 100%;
                width: 100vw;
            `:r+=$`
                visibility: hidden;
                opacity: 0;
                transition-delay: ${e.$disableTransition?"0ms":"400ms"};
                pointer-events: none;
                height: 0;
                width: 0;
            `,e.$disableTransition&&(r+=$`
                transition: none;
            `),r}};
`;var ra;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(ra||(ra={}));const ta=({show:r=!1,rootId:t,onOverlayClick:n,children:i,backgroundOpacity:l,backgroundBlur:d=!0,disableTransition:c=!1,enableOverlayClick:u=!1,zIndex:h,id:m})=>{const[f,b]=s(null),[p,y]=s(),[v]=s((()=>Oe.generate())),x=z(),w=a(),F=a(null),$=i&&o.cloneElement(i,{ref:F}),C=m?`lifesg-ds-overlay-root-${m}`:"lifesg-ds-overlay-root",E=null!=h?h:p?99999:99998;(e=>{const r=O();g((()=>{if(!r)return;const t={zIndex:e};r.events.emit(ra.Change,t)}),[r,e]),g((()=>{if(!r)return;const t=()=>{const t={zIndex:e};r.events.emit(ra.Change,t)};return null==r||r.events.on(ra.Ready,t),()=>null==r?void 0:r.events.off(ra.Ready,t)}),[r,e])})(E),g((()=>(T(),b(B()),()=>{L(),M().length<1&&(_("remove"),H(),I("remove"))})),[]),g((()=>{if(r){const e=k();S(e),j(),D()&&1===M().length&&(R(),_("add"));const r=setTimeout((()=>{I("add")}),200);return()=>clearTimeout(r)}{L(),D()&&M().length<1&&(_("remove"),H());const e=setTimeout((()=>{M().length<1&&I("remove")}),200);return()=>clearTimeout(e)}}),[r]);const S=e=>{w.current=e,y(e)},D=()=>/(iPad|iPhone|iPod)/g.test(navigator.userAgent),B=()=>document&&t?document.getElementById(t):document?document.body:null,k=()=>M().length>0,T=()=>{if(!document.getElementById(oa)){const e=document.createElement("style");e.id=oa;const r=document.documentElement.clientWidth,t=window.innerWidth-r;e.innerHTML=`\n\t\t\t\t.${ia} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${t}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${ia}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\n\t\t\t\t.${aa} {\n\t\t\t\t\tposition: fixed;\n\t\t\t\t\ttop: var(${sa}, 0);\n\t\t\t\t\tbottom: 0;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},I=e=>{const r=document.body.classList.contains(ia);"add"!==e||r?"remove"===e&&r&&document.body.classList.remove(ia):document.body.classList.add(ia)},M=()=>{const e=document.body.dataset.lifesgDsOverlayOrder;return e?e.split(","):[]},j=()=>{const e=M();document.body.dataset.lifesgDsOverlayOrder=[...e,v].join(",")},L=()=>{const e=M();document.body.dataset.lifesgDsOverlayOrder=e.filter((e=>e!==v)).join(",")},_=e=>{if(!D())return;const r=document.body.classList.contains(aa);"add"!==e||r?"remove"===e&&r&&document.body.classList.remove(aa):document.body.classList.add(aa)},R=()=>{const e=document.body.style,r=e.top?e.top:window.scrollY+"px";document.body.style.setProperty(sa,r)},H=()=>{const e=document.body.style.getPropertyValue(sa);requestAnimationFrame((()=>{window.scrollTo({top:parseFloat(e)})}))},P=e=>{var r;const t=null===(r=F.current)||void 0===r?void 0:r.firstChild;t&&t.contains(e.target)||n&&u&&(e.preventDefault(),n())};return f?G.createPortal(e(Ji,{id:C,"data-testid":C,$show:r,$zIndex:E,children:i&&e(A,{id:x,children:e(ea,{"data-testid":"overlay-wrapper",$show:r,$stacked:p,$backgroundBlur:d,$disableTransition:c,onClick:P,children:$})})}),f):null},na=r=>e(T,{children:e(ta,Object.assign({},r))}),oa="lifesg-ds-overlay-stylesheet",ia="lifesg-ds-overlay-open",aa="lifesg-ds-overlay-scroll-lock",sa="--lifesg-ds-overlay-scroll-y",la=f({onClose:()=>{}}),da=F.div`
    position: relative;
    width: 100%;
    height: 100%;

    overflow: auto;

    ${Di.MaxWidth.sm} {
        ${e=>$`
                height: calc(
                    ${e.$verticalHeight?`${e.$verticalHeight}px`:"1vh"} * 100
                );
            `}

        top: ${e=>e.$offsetTop||0}px;
    }

    ${e=>$`
        &[data-status="initial"] {
            opacity: 0;
            ${e.$animationFrom}: -3%;
        }

        &[data-status="open"] {
            opacity: 1;
            ${e.$animationFrom}: 0;
            transition: all ${wi["duration-250"]}
                ${wi["ease-entrance"]}
            transition-delay: ${wi["duration-150"]};
        }

        &[data-status="close"] {
            opacity: 0;
            ${e.$animationFrom}: -3%;
            transition: all ${wi["duration-250"]}
                ${wi["ease-exit"]};
        }
    `}
`,ca=F.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100%;
    pointer-events: none;
`,ua=F.div`
    pointer-events: auto;
    width: 100%;
    outline: none;
`,ga=F.div`
    width: 40rem;
    margin: ${$i["spacing-64"]} auto;
    background: ${vi.bg};
    box-shadow: ${Ei["xs-strong"]};
    border-radius: ${Ci.lg};

    display: flex;
    flex-direction: column-reverse;

    max-width: calc(100% - ${Si["xxl-margin"]}px * 2);

    ${Di.MaxWidth.xl} {
        max-width: calc(100% - ${Si["xl-margin"]}px * 2);
    }

    ${Di.MaxWidth.lg} {
        max-width: calc(100% - ${Si["lg-margin"]}px * 2);
    }

    ${Di.MaxWidth.md} {
        max-width: calc(100% - ${Si["md-margin"]}px * 2);
    }

    ${Di.MaxWidth.sm} {
        max-width: calc(100% - ${Si["sm-margin"]}px * 2);
    }

    ${Di.MaxWidth.xs} {
        max-width: calc(100% - ${Si["xs-margin"]}px * 2);
    }

    ${Di.MaxWidth.xxs} {
        max-width: calc(100% - ${Si["xxs-margin"]}px * 2);
    }
`,ha=F.div`
    margin-right: ${$i["spacing-16"]};
    margin-left: auto;
    margin-top: ${$i["spacing-16"]};
    margin-bottom: ${$i["spacing-16"]};
`,ma=F(Zi)`
    padding: 0;
    color: ${vi.icon};

    svg {
        height: 2rem;
        width: 2rem;
    }
`,fa=F.div`
    margin-right: ${$i["spacing-64"]};
    margin-left: ${$i["spacing-64"]};

    ${Di.MaxWidth.sm} {
        margin-right: ${$i["spacing-20"]};
        margin-left: ${$i["spacing-20"]};
    }
`,ba=F.div`
    margin-right: ${$i["spacing-64"]};
    margin-left: ${$i["spacing-64"]};

    ${Di.MaxWidth.sm} {
        margin-right: ${$i["spacing-20"]};
        margin-left: ${$i["spacing-20"]};
    }

    display: flex;
    flex-direction: row-reverse; /* primary button on right */
    column-gap: ${$i["spacing-32"]};
    row-gap: ${$i["spacing-16"]};

    & > button {
        flex: 1;
    }

    ${Di.MaxWidth.md} {
        flex-direction: column;
    }
`,pa=F.div`
    :where(& > ${fa}:last-child) {
        margin-bottom: ${$i["spacing-64"]};
    }

    :where(& > ${ba}:not(:first-child)) {
        margin-top: ${$i["spacing-32"]};
    }

    :where(& > ${ba}:last-child) {
        margin-bottom: ${$i["spacing-64"]};
    }

    ${e=>e.$hasCloseButton?$`
                  :where(& > ${fa}:first-child),
                  :where(& > ${ba}:first-child) {
                      margin-top: 0;
                  }
              `:$`
                  :where(& > ${fa}:first-child),
                  :where(& > ${ba}:first-child) {
                      margin-top: ${$i["spacing-64"]};
                  }
              `}
`,ya=r=>{var{"data-testid":t="modal-close-button"}=r,n=oe(r,["data-testid"]);const{onClose:o}=b(la);return e(ha,Object.assign({"data-testid":t},n,{children:e(ma,{onClick:o,"data-testid":"close-button",focusHighlight:!1,focusOutline:"browser","aria-label":"Close button",children:e(k,{"aria-hidden":!0})})}))};ya.displayName="ModalV2.CloseButton";const va=r=>{var{"data-testid":t="modal-content",children:n}=r,o=oe(r,["data-testid","children"]);return e(fa,Object.assign({"data-testid":t},o,{children:n}))};va.displayName="ModalV2.Content";const xa=e=>{var{"data-testid":t="modal-footer",primaryButton:n,secondaryButton:o}=e,i=oe(e,["data-testid","primaryButton","secondaryButton"]);return r(ba,Object.assign({"data-testid":t},i,{children:[n,o]}))};xa.displayName="ModalV2.Footer";const wa=e=>{var{id:t,"data-testid":n="modal-card",children:i}=e,a=oe(e,["id","data-testid","children"]);const s=e=>o.Children.toArray(i).find((r=>((e,r)=>C(e.type)?e.type.target===r:e.type===r)(r,e))),l=s(ya),d=s(va),c=s(xa),u=!!l;return r(ga,Object.assign({id:t,"data-testid":n},a,{onClick:e=>{e.stopPropagation()},children:[r(pa,{$hasCloseButton:u,children:[d,c]}),u&&l]}))};wa.displayName="ModalV2.Card",Object.assign((r=>{var{id:t,show:n,onClose:o,animationFrom:i="bottom",children:a,enableOverlayClick:l=!0,rootComponentId:d,zIndex:c,onOverlayClick:u,dismissKeyboardOnShow:h=!0,"data-testid":f="modal"}=r,b=oe(r,["id","show","onClose","animationFrom","children","enableOverlayClick","rootComponentId","zIndex","onOverlayClick","dismissKeyboardOnShow","data-testid"]);const{verticalHeight:p,offsetTop:y}=(()=>{const[e,r]=s(),[t,n]=s(),o=m((()=>{const e=.01*window.innerHeight;r(e)}),[]),i=m((()=>{if(window.visualViewport){const e=.01*window.visualViewport.height;r(e),n(window.visualViewport.offsetTop)}}),[]);return g((()=>window.visualViewport?(i(),window.visualViewport.addEventListener("resize",i),()=>{var e;null===(e=window.visualViewport)||void 0===e||e.removeEventListener("resize",i)}):(o(),window.addEventListener("resize",o),()=>{window.removeEventListener("resize",o)})),[]),{verticalHeight:e,offsetTop:t}})(),{refs:v,context:x}=I({open:n,onOpenChange:e=>{e||null==o||o()}}),{isMounted:w,status:F}=M(x,{duration:300}),$=j(x,{outsidePress:!1,enabled:!!o}),{getFloatingProps:C}=L([$]);return g((()=>{var e,r;n&&h&&(null===(r=null===(e=document.activeElement)||void 0===e?void 0:e.blur)||void 0===r||r.call(e))}),[h,n]),e(na,{"data-testid":`${f}-overlay`,show:w,enableOverlayClick:l,onOverlayClick:u,id:t,rootId:d,zIndex:c,children:e(da,Object.assign({$show:w,$animationFrom:i,"data-testid":f,$verticalHeight:p,$offsetTop:y},b,{"data-status":F,children:e(la.Provider,{value:{onClose:o},children:w&&e(_,{context:x,initialFocus:v.floating,children:e(ca,{children:e(ua,Object.assign({ref:v.setFloating},C(),{"aria-modal":!0,role:"dialog",children:a}))})})})}))})}),{Card:wa,CloseButton:ya,Content:va,Footer:xa}),F.div`
    display: inline;
    width: fit-content;
    cursor: pointer;
    position: relative;
`;const Fa=e=>{switch(e){case"underline":return"text-decoration: underline 1px;";case"underline-dashed":return"text-decoration: underline dashed 1px;"}};F.span`
    color: ${vi["text-primary"]};
    font-weight: 600;
    text-underline-position: under;

    ${({$defaultStyle:e})=>Fa(e)}

    &:hover,
    &:focus-visible {
        color: ${vi["text-hover"]};
        ${({$hoverStyle:e})=>Fa(e)}
    }

    svg {
        height: 1lh; // align vertically
        width: 1em; // scale icon with font size
        vertical-align: top;
    }
`,F.span`
    ${e=>!e.$standalone&&"margin-left: 0.25rem;"}
`,F.div`
    padding-left: ${$i["spacing-4"]};
    display: inline;
`,F.div`
    margin-bottom: ${$i["spacing-8"]};
`,F.label`
    color: ${vi["text-subtle"]};
    display: inline-block;

    ${xi["form-label"]}
    ${Qi()}
    font-weight: ${xi.Spec["weight-semibold"]};
`;const $a=F(K)`
    height: 1lh;
    width: 1em;
    flex-shrink: 0;
    color: ${vi["icon-error-strong"]};
`,Ca=F.div`
    ${xi["body-sm-semibold"]}
    display: flex;
    gap: ${$i["spacing-4"]};
    margin-top: ${$i["spacing-8"]};
`,Ea=F.p`
    color: ${vi["text-error"]};
    margin-bottom: 0;
    outline: none;
`;F.span`
    ${xi["form-description"]}
    color: ${vi["text-subtler"]};
    display: block;
`;const Sa=t=>r(Ca,{children:[e($a,{"aria-hidden":!0}),e(Ea,Object.assign({},t))]}),Da=F.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,Ba=E`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,ka=F.div`
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
    animation: ${Ba} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Oa=F(ka)`
    animation-delay: -0.45s;
`,Ta=F(ka)`
    animation-delay: -0.3s;
`,za=F(ka)`
    animation-delay: -0.15s;
`,Aa=({color:t,className:n,size:o})=>r(Da,{className:n,$size:o,$color:t,"data-testid":"component-loading-spinner",children:[e(ka,{id:"inner1"}),e(Oa,{id:"inner2"}),e(Ta,{id:"inner3"}),e(za,{id:"inner4"})]}),Ia={Button:{"button-radius":ci.md,"button-default-colour-bg":Ro["bg-primary"],"button-default-colour-bg-hover":Ro["bg-primary-hover"],"button-default-colour-text":Ro["text-inverse"],"button-secondary-colour-border":Ro["border-primary"],"button-secondary-colour-text":Ro["text-primary"],"button-light-colour-text":Ro["text-primary"],"button-link-colour-text":Ro["text-primary"]},Animation:{"loading-dots-spinner-colour":Ro["icon-primary"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"2rem","navbar-compressed-height":"4rem","navbar-compressed-logo-height":"1.5rem","navbar-mobile-height":"3.5rem","navbar-mobile-logo-height":"1.5rem","navbar-colour-bg":Ro.bg,"navbar-colour-icon":Ro.icon,"navbar-link-colour-text":Ro.text,"navbar-link-colour-text-hover":Ro["text-hover"],"navbar-link-colour-text-selected-hover":Ro["text-selected-hover"]},Footer:{"footer-colour-bg":Ro["bg-strong"],"footer-colour-text":Ro.text,"footer-link-colour-text":Ro.text,"footer-link-colour-text-hover":Ro["text-hover"],"footer-disclaimer-link-colour-text":Ro.text,"footer-disclaimer-link-colour-text-hover":Ro["text-subtler"]}},Ma={Button:{"button-radius":ci.sm,"button-default-colour-bg":Ro["bg-primary"],"button-default-colour-bg-hover":Ro["bg-primary-hover"],"button-default-colour-text":Ro["text-inverse"],"button-secondary-colour-border":Ro["border-primary"],"button-secondary-colour-text":Ro["text-primary"],"button-light-colour-text":Ro["text-primary"],"button-link-colour-text":Ro["text-primary"]},Animation:{"loading-dots-spinner-colour":Ro["icon-primary"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"2rem","navbar-compressed-height":"4rem","navbar-compressed-logo-height":"1.5rem","navbar-mobile-height":"3.5rem","navbar-mobile-logo-height":"1.5rem","navbar-colour-bg":Ro.bg,"navbar-colour-icon":Ro.icon,"navbar-link-colour-text":Ro.text,"navbar-link-colour-text-hover":Ro["text-hover"],"navbar-link-colour-text-selected-hover":Ro["text-selected-hover"]},Footer:{"footer-colour-bg":Ro["bg-strong"],"footer-colour-text":Ro.text,"footer-link-colour-text":Ro.text,"footer-link-colour-text-hover":Ro["text-hover"],"footer-disclaimer-link-colour-text":Ro.text,"footer-disclaimer-link-colour-text-hover":Ro["text-subtler"]}},ja={Button:{"button-radius":ci.sm,"button-default-colour-bg":Ro["bg-primary"],"button-default-colour-bg-hover":Ro["bg-primary-hover"],"button-default-colour-text":Ro["text-inverse"],"button-secondary-colour-border":Ro["border-primary"],"button-secondary-colour-text":Ro["text-primary"],"button-light-colour-text":Ro["text-primary"],"button-link-colour-text":Ro["text-primary"]},Animation:{"loading-dots-spinner-colour":vi.Primitive["brand-50"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"2rem","navbar-compressed-height":"4rem","navbar-compressed-logo-height":"1.5rem","navbar-mobile-height":"3.5rem","navbar-mobile-logo-height":"1.5rem","navbar-colour-bg":Ro.bg,"navbar-colour-icon":Ro.icon,"navbar-link-colour-text":Ro.text,"navbar-link-colour-text-hover":Ro["text-hover"],"navbar-link-colour-text-selected-hover":Ro["text-selected-hover"]},Footer:{"footer-colour-bg":Ro["bg-strong"],"footer-colour-text":Ro.text,"footer-link-colour-text":Ro.text,"footer-link-colour-text-hover":Ro["text-hover"],"footer-disclaimer-link-colour-text":Ro.text,"footer-disclaimer-link-colour-text-hover":Ro["text-subtler"]}},La={collections:{default:Ma,pa:{Button:{"button-radius":ci.full,"button-default-colour-bg":Ro["bg-primary"],"button-default-colour-bg-hover":Ro["bg-primary-hover"],"button-default-colour-text":Ro["text-inverse"],"button-secondary-colour-border":Ro["border-primary"],"button-secondary-colour-text":Ro["text-primary"],"button-light-colour-text":Ro["text-primary"],"button-link-colour-text":Ro["text-primary"]},Animation:{"loading-dots-spinner-colour":Ro["icon-primary"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"2rem","navbar-compressed-height":"4rem","navbar-compressed-logo-height":"1.5rem","navbar-mobile-height":"3.5rem","navbar-mobile-logo-height":"1.5rem","navbar-colour-bg":Ro.bg,"navbar-colour-icon":Ro.icon,"navbar-link-colour-text":Ro.text,"navbar-link-colour-text-hover":Ro["text-hover"],"navbar-link-colour-text-selected-hover":Ro["text-selected-hover"]},Footer:{"footer-colour-bg":Ro["bg-strong"],"footer-colour-text":Ro.text,"footer-link-colour-text":Ro.text,"footer-link-colour-text-hover":Ro["text-hover"],"footer-disclaimer-link-colour-text":Ro.text,"footer-disclaimer-link-colour-text-hover":Ro["text-subtler"]}},a11yplayground:Ia,lifesg:ja,spf:{Button:{"button-radius":ci.md,"button-default-colour-bg":Ro["bg-primary"],"button-default-colour-bg-hover":Ro["bg-primary-hover"],"button-default-colour-text":Ro["text-inverse"],"button-secondary-colour-border":Ro["border-primary"],"button-secondary-colour-text":Ro["text-primary"],"button-light-colour-text":Ro["text-primary"],"button-link-colour-text":Ro["text-primary"]},Animation:{"loading-dots-spinner-colour":Ro["icon-primary"]},Navbar:{"navbar-full-height":"6rem","navbar-full-logo-height":"3rem","navbar-compressed-height":"5rem","navbar-compressed-logo-height":"2rem","navbar-mobile-height":"4rem","navbar-mobile-logo-height":"2rem","navbar-colour-bg":Ro.bg,"navbar-colour-icon":Ro.icon,"navbar-link-colour-text":Ro["text-primary-strongest"],"navbar-link-colour-text-hover":Ro["text-subtler"],"navbar-link-colour-text-selected-hover":Ro["text-subtler"]},Footer:{"footer-colour-bg":Ro["bg-inverse"],"footer-colour-text":Ro["text-inverse"],"footer-link-colour-text":Ro["text-inverse"],"footer-link-colour-text-hover":Ro["text-inverse"],"footer-disclaimer-link-colour-text":Ro["text-inverse"],"footer-disclaimer-link-colour-text-hover":Ro["text-inverse"]}}},defaultValue:"default"},_a=(e,r)=>t=>{var n,o;const i=t.theme,a=uo(La,null==i?void 0:i.componentScheme);return Ra((null===(o=null===(n=null==i?void 0:i.componentOverrides)||void 0===n?void 0:n[e])||void 0===o?void 0:o[r])||a[e][r],t)},Ra=(e,r)=>{switch(typeof e){case"function":return e(r);case"number":return e+"px";case"string":return e}},Ha=_a("Button","button-radius"),Pa=_a("Button","button-default-colour-bg"),Wa=_a("Button","button-default-colour-bg-hover"),Na=_a("Button","button-default-colour-text"),Va=_a("Button","button-secondary-colour-border"),Ya=_a("Button","button-secondary-colour-text"),Ua=_a("Button","button-light-colour-text"),qa=_a("Button","button-link-colour-text"),Ga=F.button`
    padding: ${$i["spacing-8"]} ${$i["spacing-16"]};
    min-width: 4rem;
    border: ${Fi["width-010"]} ${Fi.solid} transparent;
    transition: all ${wi["duration-250"]} ${wi["ease-default"]};
    border-radius: ${Ha};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return $`
                    background-color: ${vi.bg};
                    border-color: ${e.$buttonIsDanger?vi["border-error-strong"]:Va};

                    color: ${e.$buttonIsDanger?vi["text-error"]:Ya};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${vi["bg-hover-neutral"]};
                        }
                    }
                `;case"light":return $`
                    background-color: ${vi.bg};
                    border-color: ${vi.border};

                    color: ${e.$buttonIsDanger?vi["text-error"]:Ua};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${vi["bg-hover-neutral"]};
                        }
                    }
                `;case"link":return $`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?vi["text-error"]:qa};
                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${vi["bg-hover-neutral"]};
                        }
                    }
                `;case"disabled":return $`
                    background-color: ${vi["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${vi["text-disabled"]};
                `;default:return $`
                    background-color: ${e.$buttonIsDanger?vi["bg-error-strong"]:Pa};

                    ${Di.MaxWidth.sm} {
                        width: 100%;
                    }

                    color: ${Na};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${e.$buttonIsDanger?vi["bg-error-strong-hover"]:Wa};
                        }
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return $`
                    height: 2.5rem;
                    ${xi["body-md-semibold"]}

                    ${Di.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return $`
                    height: 4rem;
                    ${xi["heading-md-semibold"]}

                    ${Di.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return $`
                    height: 3rem;
                    ${xi["heading-xs-semibold"]}

                    ${Di.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,Za=F(Aa)`
    margin-right: ${e=>e.$hasChildren?"0.5rem":"0"};
`,Ka=e=>o.Children.toArray(e).some((e=>"string"==typeof e?""!==e.trim():null!=e)),Xa=(t,n)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:s="default",danger:l=!1,focusableWhenDisabled:d=!1,onClick:c}=t,u=oe(t,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),g={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return r(Ga,Object.assign({ref:n,"data-testid":u["data-testid"]||"button",disabled:i&&!d,"aria-disabled":i,"aria-busy":a,onClick:i?void 0:c},g,u,{children:[a&&e(Za,{$hasChildren:Ka(o)}),e("span",{children:o})]}))};Xa.displayName="Button.Default";const Qa=(t,n)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:s="default",danger:l=!1,focusableWhenDisabled:d=!1,onClick:c}=t,u=oe(t,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),g={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return r(Ga,Object.assign({ref:n,"data-testid":u["data-testid"]||"button",disabled:i&&!d,"aria-disabled":i,"aria-busy":a,onClick:i?void 0:c},g,u,{children:[a&&e(Za,{$hasChildren:Ka(o)}),e("span",{children:o})]}))};Qa.displayName="Button.Small";const Ja=(t,n)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:s="default",danger:l=!1,focusableWhenDisabled:d=!1,onClick:c}=t,u=oe(t,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),g={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"large",$buttonIsDanger:l};return r(Ga,Object.assign({ref:n,"data-testid":u["data-testid"]||"button",disabled:i&&!d,"aria-disabled":i,"aria-busy":a,onClick:i?void 0:c},g,u,{children:[a&&e(Za,{$hasChildren:Ka(o)}),e("span",{children:o})]}))};Ja.displayName="Button.Large";const es={Default:o.forwardRef(Xa),Small:o.forwardRef(Qa),Large:o.forwardRef(Ja)},rs=F.span`
    clip-path: inset(50%);
    height: 1px;
    width: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
`,ts=(...e)=>e.filter((e=>!!e)).join(" "),ns=F.div`
    font-weight: ${e=>e.$bold?xi.Spec["weight-semibold"]:xi.Spec["weight-regular"]};

    ${e=>e.$disabled?$`
                color: ${vi["text-disabled"]};
            `:e.$selected?$`
                color: ${vi["text-selected"]};
            `:$`
                color: ${vi.text};
            `}
    width: 100%;

    ${e=>"end"===e.$truncateType&&Ri(e.$maxLines||2)}
    overflow-wrap: break-word;
`,os=F.div`
    color: ${vi["text-subtlest"]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&Ri(e.$maxLines||2)}
    overflow-wrap: break-word;

    ${e=>"next-line"===e.$labelDisplayType?$`
                    ${xi["body-md-semibold"]}
                `:$`
                    ${xi["body-baseline-regular"]}
                `}
`,is=F.span`
    font-weight: ${xi.Spec["weight-semibold"]};
`,as=F.div`
    text-align: left;
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;

    ${e=>"small"===e.$variant?xi["body-md-regular"]:xi["body-baseline-regular"]}

    ${e=>{switch(e.$labelDisplayType){case"next-line":return $`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return $`
                    ${ns} {
                        display: inline;
                    }

                    ${os} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,ss=F.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    word-break: break-all;
    overflow: hidden;
`,ls=F.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,ds=({bold:n,displayType:o="inline",label:i,searchTerm:a,maxLines:s=2,selected:l,disabled:d,sublabel:c,truncationType:u="middle",variant:g="default"})=>{const h=b(S),f="small"===g?xi.Spec["body-size-md"]({theme:h}):xi.Spec["body-size-baseline"]({theme:h}),y=xi.Spec["font-family"]({theme:h}),{ref:v,width:x}=Sr(),w=m((e=>{if("inline"!==o||!x)return!1;return Te.getTextWidth(e,`${f} '${y}'`)>x*s-50}),[x,o,f,y,s]),F=p((()=>w(i)),[w,i]),$=p((()=>c&&w(c)),[w,c]),C=n=>{if(!a)return n;const o=a.toLowerCase().trim(),s=n.toLowerCase().indexOf(o),l=s+a.length;return-1===s?n:r(t,{children:[i.slice(0,s),e(is,{$variant:g,children:i.slice(s,l)}),i.slice(l)]})},E=n=>r(t,{children:[e(ss,{$maxLines:s,"aria-hidden":!0,children:C(n)}),e(ls,{$maxLines:s,"aria-hidden":!0,children:C(n)})]});return r(as,{ref:v,$labelDisplayType:F||$?"next-line":o,$variant:g,children:[e(ns,{"aria-label":i,$bold:n,$maxLines:s,$selected:l,$disabled:d,$truncateType:u,children:"middle"===u&&F?E(i):C(i)}),c&&e(os,{"aria-label":c,$maxLines:s,$truncateType:u,$labelDisplayType:o,children:"middle"===u&&$?E(c):c})]})};var cs=mn;var us=function(e){var r=this.__data__,t=r.delete(e);return this.size=r.size,t};var gs=function(e){return this.__data__.get(e)};var hs=function(e){return this.__data__.has(e)},ms=mn,fs=fn,bs=Mn;var ps=function(e,r){var t=this.__data__;if(t instanceof ms){var n=t.__data__;if(!fs||n.length<199)return n.push([e,r]),this.size=++t.size,this;t=this.__data__=new bs(n)}return t.set(e,r),this.size=t.size,this},ys=mn,vs=function(){this.__data__=new cs,this.size=0},xs=us,ws=gs,Fs=hs,$s=ps;function Cs(e){var r=this.__data__=new ys(e);this.size=r.size}Cs.prototype.clear=vs,Cs.prototype.delete=xs,Cs.prototype.get=ws,Cs.prototype.has=Fs,Cs.prototype.set=$s;var Es=Cs;var Ss=Mn,Ds=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},Bs=function(e){return this.__data__.has(e)};function ks(e){var r=-1,t=null==e?0:e.length;for(this.__data__=new Ss;++r<t;)this.add(e[r])}ks.prototype.add=ks.prototype.push=Ds,ks.prototype.has=Bs;var Os=function(e,r){return e.has(r)},Ts=ks,zs=function(e,r){for(var t=-1,n=null==e?0:e.length;++t<n;)if(r(e[t],t,e))return!0;return!1},As=Os;var Is=function(e,r,t,n,o,i){var a=1&t,s=e.length,l=r.length;if(s!=l&&!(a&&l>s))return!1;var d=i.get(e),c=i.get(r);if(d&&c)return d==r&&c==e;var u=-1,g=!0,h=2&t?new Ts:void 0;for(i.set(e,r),i.set(r,e);++u<s;){var m=e[u],f=r[u];if(n)var b=a?n(f,m,u,r,e,i):n(m,f,u,e,r,i);if(void 0!==b){if(b)continue;g=!1;break}if(h){if(!zs(r,(function(e,r){if(!As(h,r)&&(m===e||o(m,e,t,n,i)))return h.push(r)}))){g=!1;break}}else if(m!==f&&!o(m,f,t,n,i)){g=!1;break}}return i.delete(e),i.delete(r),g};var Ms=function(e){var r=-1,t=Array(e.size);return e.forEach((function(e,n){t[++r]=[n,e]})),t};var js=Lr.Uint8Array,Ls=Zt,_s=Is,Rs=Ms,Hs=function(e){var r=-1,t=Array(e.size);return e.forEach((function(e){t[++r]=e})),t},Ps=_r?_r.prototype:void 0,Ws=Ps?Ps.valueOf:void 0;var Ns=function(e,r,t,n,o,i,a){switch(t){case"[object DataView]":if(e.byteLength!=r.byteLength||e.byteOffset!=r.byteOffset)return!1;e=e.buffer,r=r.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=r.byteLength||!i(new js(e),new js(r)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Ls(+e,+r);case"[object Error]":return e.name==r.name&&e.message==r.message;case"[object RegExp]":case"[object String]":return e==r+"";case"[object Map]":var s=Rs;case"[object Set]":var l=1&n;if(s||(s=Hs),e.size!=r.size&&!l)return!1;var d=a.get(e);if(d)return d==r;n|=2,a.set(e,r);var c=_s(s(e),s(r),n,o,i,a);return a.delete(e),c;case"[object Symbol]":if(Ws)return Ws.call(e)==Ws.call(r)}return!1};var Vs=function(e,r){for(var t=-1,n=r.length,o=e.length;++t<n;)e[o+t]=r[t];return e},Ys=Vs,Us=Ar;var qs=function(e,r,t){var n=r(e);return Us(e)?n:Ys(n,t(e))};var Gs=function(e,r){for(var t=-1,n=null==e?0:e.length,o=0,i=[];++t<n;){var a=e[t];r(a,t,e)&&(i[o++]=a)}return i},Zs=function(){return[]},Ks=Object.prototype.propertyIsEnumerable,Xs=Object.getOwnPropertySymbols,Qs=Xs?function(e){return null==e?[]:(e=Object(e),Gs(Xs(e),(function(r){return Ks.call(e,r)})))}:Zs;var Js=function(e,r){for(var t=-1,n=Array(e);++t<e;)n[t]=r(t);return n},el=Zr,rl=Kr;var tl=function(e){return rl(e)&&"[object Arguments]"==el(e)},nl=Kr,ol=Object.prototype,il=ol.hasOwnProperty,al=ol.propertyIsEnumerable,sl=tl(function(){return arguments}())?tl:function(e){return nl(e)&&il.call(e,"callee")&&!al.call(e,"callee")},ll={exports:{}};var dl=function(){return!1};!function(e,r){var t=Lr,n=dl,o=r&&!r.nodeType&&r,i=o&&e&&!e.nodeType&&e,a=i&&i.exports===o?t.Buffer:void 0,s=(a?a.isBuffer:void 0)||n;e.exports=s}(ll,ll.exports);var cl=ll.exports,ul=/^(?:0|[1-9]\d*)$/;var gl=function(e,r){var t=typeof e;return!!(r=null==r?9007199254740991:r)&&("number"==t||"symbol"!=t&&ul.test(e))&&e>-1&&e%1==0&&e<r};var hl=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},ml=Zr,fl=hl,bl=Kr,pl={};pl["[object Float32Array]"]=pl["[object Float64Array]"]=pl["[object Int8Array]"]=pl["[object Int16Array]"]=pl["[object Int32Array]"]=pl["[object Uint8Array]"]=pl["[object Uint8ClampedArray]"]=pl["[object Uint16Array]"]=pl["[object Uint32Array]"]=!0,pl["[object Arguments]"]=pl["[object Array]"]=pl["[object ArrayBuffer]"]=pl["[object Boolean]"]=pl["[object DataView]"]=pl["[object Date]"]=pl["[object Error]"]=pl["[object Function]"]=pl["[object Map]"]=pl["[object Number]"]=pl["[object Object]"]=pl["[object RegExp]"]=pl["[object Set]"]=pl["[object String]"]=pl["[object WeakMap]"]=!1;var yl=function(e){return bl(e)&&fl(e.length)&&!!pl[ml(e)]};var vl=function(e){return function(r){return e(r)}},xl={exports:{}};!function(e,r){var t=Ir,n=r&&!r.nodeType&&r,o=n&&e&&!e.nodeType&&e,i=o&&o.exports===n&&t.process,a=function(){try{var e=o&&o.require&&o.require("util").types;return e||i&&i.binding&&i.binding("util")}catch(e){}}();e.exports=a}(xl,xl.exports);var wl=xl.exports,Fl=yl,$l=vl,Cl=wl&&wl.isTypedArray,El=Cl?$l(Cl):Fl,Sl=Js,Dl=sl,Bl=Ar,kl=cl,Ol=gl,Tl=El,zl=Object.prototype.hasOwnProperty;var Al=function(e,r){var t=Bl(e),n=!t&&Dl(e),o=!t&&!n&&kl(e),i=!t&&!n&&!o&&Tl(e),a=t||n||o||i,s=a?Sl(e.length,String):[],l=s.length;for(var d in e)!r&&!zl.call(e,d)||a&&("length"==d||o&&("offset"==d||"parent"==d)||i&&("buffer"==d||"byteLength"==d||"byteOffset"==d)||Ol(d,l))||s.push(d);return s},Il=Object.prototype;var Ml=function(e){var r=e&&e.constructor;return e===("function"==typeof r&&r.prototype||Il)};var jl=function(e,r){return function(t){return e(r(t))}}(Object.keys,Object),Ll=Ml,_l=jl,Rl=Object.prototype.hasOwnProperty;var Hl=function(e){if(!Ll(e))return _l(e);var r=[];for(var t in Object(e))Rl.call(e,t)&&"constructor"!=t&&r.push(t);return r},Pl=dt,Wl=hl;var Nl=function(e){return null!=e&&Wl(e.length)&&!Pl(e)},Vl=Al,Yl=Hl,Ul=Nl;var ql=function(e){return Ul(e)?Vl(e):Yl(e)},Gl=qs,Zl=Qs,Kl=ql;var Xl=function(e){return Gl(e,Kl,Zl)},Ql=Object.prototype.hasOwnProperty;var Jl=function(e,r,t,n,o,i){var a=1&t,s=Xl(e),l=s.length;if(l!=Xl(r).length&&!a)return!1;for(var d=l;d--;){var c=s[d];if(!(a?c in r:Ql.call(r,c)))return!1}var u=i.get(e),g=i.get(r);if(u&&g)return u==r&&g==e;var h=!0;i.set(e,r),i.set(r,e);for(var m=a;++d<l;){var f=e[c=s[d]],b=r[c];if(n)var p=a?n(b,f,c,r,e,i):n(f,b,c,e,r,i);if(!(void 0===p?f===b||o(f,b,t,n,i):p)){h=!1;break}m||(m="constructor"==c)}if(h&&!m){var y=e.constructor,v=r.constructor;y==v||!("constructor"in e)||!("constructor"in r)||"function"==typeof y&&y instanceof y&&"function"==typeof v&&v instanceof v||(h=!1)}return i.delete(e),i.delete(r),h},ed=Bt(Lr,"DataView"),rd=fn,td=Bt(Lr,"Promise"),nd=Bt(Lr,"Set"),od=Bt(Lr,"WeakMap"),id=Zr,ad=mt,sd="[object Map]",ld="[object Promise]",dd="[object Set]",cd="[object WeakMap]",ud="[object DataView]",gd=ad(ed),hd=ad(rd),md=ad(td),fd=ad(nd),bd=ad(od),pd=id;(ed&&pd(new ed(new ArrayBuffer(1)))!=ud||rd&&pd(new rd)!=sd||td&&pd(td.resolve())!=ld||nd&&pd(new nd)!=dd||od&&pd(new od)!=cd)&&(pd=function(e){var r=id(e),t="[object Object]"==r?e.constructor:void 0,n=t?ad(t):"";if(n)switch(n){case gd:return ud;case hd:return sd;case md:return ld;case fd:return dd;case bd:return cd}return r});var yd=Es,vd=Is,xd=Ns,wd=Jl,Fd=pd,$d=Ar,Cd=cl,Ed=El,Sd="[object Arguments]",Dd="[object Array]",Bd="[object Object]",kd=Object.prototype.hasOwnProperty;var Od=function(e,r,t,n,o,i){var a=$d(e),s=$d(r),l=a?Dd:Fd(e),d=s?Dd:Fd(r),c=(l=l==Sd?Bd:l)==Bd,u=(d=d==Sd?Bd:d)==Bd,g=l==d;if(g&&Cd(e)){if(!Cd(r))return!1;a=!0,c=!1}if(g&&!c)return i||(i=new yd),a||Ed(e)?vd(e,r,t,n,o,i):xd(e,r,l,t,n,o,i);if(!(1&t)){var h=c&&kd.call(e,"__wrapped__"),m=u&&kd.call(r,"__wrapped__");if(h||m){var f=h?e.value():e,b=m?r.value():r;return i||(i=new yd),o(f,b,t,n,i)}}return!!g&&(i||(i=new yd),wd(e,r,t,n,o,i))},Td=Kr;var zd=function e(r,t,n,o,i){return r===t||(null==r||null==t||!Td(r)&&!Td(t)?r!=r&&t!=t:Od(r,t,n,o,e,i))},Ad=Es,Id=zd;var Md=function(e,r,t,n){var o=t.length,i=o,a=!n;if(null==e)return!i;for(e=Object(e);o--;){var s=t[o];if(a&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++o<i;){var l=(s=t[o])[0],d=e[l],c=s[1];if(a&&s[2]){if(void 0===d&&!(l in e))return!1}else{var u=new Ad;if(n)var g=n(d,c,l,e,r,u);if(!(void 0===g?Id(c,d,3,n,u):g))return!1}}return!0},jd=it;var Ld=function(e){return e==e&&!jd(e)},_d=Ld,Rd=ql;var Hd=function(e){for(var r=Rd(e),t=r.length;t--;){var n=r[t],o=e[n];r[t]=[n,o,_d(o)]}return r};var Pd=function(e,r){return function(t){return null!=t&&(t[e]===r&&(void 0!==r||e in Object(t)))}},Wd=Md,Nd=Hd,Vd=Pd;var Yd=function(e,r){return null!=e&&r in Object(e)},Ud=eo,qd=sl,Gd=Ar,Zd=gl,Kd=hl,Xd=to;var Qd=function(e,r,t){for(var n=-1,o=(r=Ud(r,e)).length,i=!1;++n<o;){var a=Xd(r[n]);if(!(i=null!=e&&t(e,a)))break;e=e[a]}return i||++n!=o?i:!!(o=null==e?0:e.length)&&Kd(o)&&Zd(a,o)&&(Gd(e)||qd(e))},Jd=Yd,ec=Qd;var rc=zd,tc=so,nc=function(e,r){return null!=e&&ec(e,r,Jd)},oc=ot,ic=Ld,ac=Pd,sc=to;var lc=function(e){return function(r){return null==r?void 0:r[e]}},dc=io;var cc=lc,uc=function(e){return function(r){return dc(r,e)}},gc=ot,hc=to;var mc=function(e){var r=Nd(e);return 1==r.length&&r[0][2]?Vd(r[0][0],r[0][1]):function(t){return t===e||Wd(t,e,r)}},fc=function(e,r){return oc(e)&&ic(r)?ac(sc(e),r):function(t){var n=tc(t,e);return void 0===n&&n===r?nc(t,e):rc(r,n,3)}},bc=function(e){return e},pc=Ar,yc=function(e){return gc(e)?cc(hc(e)):uc(e)};var vc=function(e){return"function"==typeof e?e:null==e?bc:"object"==typeof e?pc(e)?fc(e[0],e[1]):mc(e):yc(e)},xc=vc,wc=Nl,Fc=ql;var $c=function(e){return function(r,t,n){var o=Object(r);if(!wc(r)){var i=xc(t);r=Fc(r),t=function(e){return i(o[e],e,o)}}var a=e(r,t,n);return a>-1?o[i?r[a]:a]:void 0}};var Cc=/\s/;var Ec=function(e){for(var r=e.length;r--&&Cc.test(e.charAt(r)););return r},Sc=/^\s+/;var Dc=function(e){return e?e.slice(0,Ec(e)+1).replace(Sc,""):e},Bc=it,kc=Jr,Oc=/^[-+]0x[0-9a-f]+$/i,Tc=/^0b[01]+$/i,zc=/^0o[0-7]+$/i,Ac=parseInt;var Ic=function(e){if("number"==typeof e)return e;if(kc(e))return NaN;if(Bc(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=Bc(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=Dc(e);var t=Tc.test(e);return t||zc.test(e)?Ac(e.slice(2),t?2:8):Oc.test(e)?NaN:+e},Mc=1/0;var jc=function(e){return e?(e=Ic(e))===Mc||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var Lc=function(e,r,t,n){for(var o=e.length,i=t+(n?1:-1);n?i--:++i<o;)if(r(e[i],i,e))return i;return-1},_c=vc,Rc=function(e){var r=jc(e),t=r%1;return r==r?t?r-t:r:0},Hc=Math.max;var Pc=se($c((function(e,r,t){var n=null==e?0:e.length;if(!n)return-1;var o=null==t?0:Rc(t);return o<0&&(o=Hc(n+o,0)),Lc(e,_c(r),o)}))),Wc=zd;var Nc=se((function(e,r){return Wc(e,r)}));function Vc(e){return()=>e}function Yc(e){e()}function Uc(e,r){return t=>e(r(t))}function qc(e,r){return()=>e(r)}function Gc(e,r){return t=>e(r,t)}function Zc(e){return void 0!==e}function Kc(){}function Xc(e,r){return r(e),e}function Qc(e,r){return r(e)}function Jc(...e){return e}function eu(e,r){return e(1,r)}function ru(e,r){e(0,r)}function tu(e){e(2)}function nu(e){return e(4)}function ou(e,r){return eu(e,Gc(r,0))}function iu(e,r){const t=e(1,(e=>{t(),r(e)}));return t}function au(e){let r,t;return n=>o=>{r=o,t&&clearTimeout(t),t=setTimeout((()=>{n(r)}),e)}}function su(e,r){return e===r}function lu(e=su){let r;return t=>n=>{e(r,n)||(r=n,t(n))}}function du(e){return r=>t=>{e(t)&&r(t)}}function cu(e){return r=>Uc(r,e)}function uu(e){return r=>()=>{r(e)}}function gu(e,...r){const t=function(...e){return r=>e.reduceRight(Qc,r)}(...r);return(r,n)=>{switch(r){case 2:return void tu(e);case 1:return eu(e,t(n))}}}function hu(e,r){return t=>n=>{t(r=e(r,n))}}function mu(e){return r=>t=>{e>0?e--:r(t)}}function fu(e){let r,t=null;return n=>o=>{t=o,!r&&(r=setTimeout((()=>{r=void 0,n(t)}),e))}}function bu(...e){const r=new Array(e.length);let t=0,n=null;const o=Math.pow(2,e.length)-1;return e.forEach(((e,i)=>{const a=Math.pow(2,i);eu(e,(e=>{const s=t;t|=a,r[i]=e,s!==o&&t===o&&n&&(n(),n=null)}))})),e=>i=>{const a=()=>{e([i].concat(r))};t===o?a():n=a}}function pu(e){let r=e;const t=vu();return(e,n)=>{switch(e){case 0:r=n;break;case 1:n(r);break;case 4:return r}return t(e,n)}}function yu(e,r){return Xc(pu(r),(r=>ou(e,r)))}function vu(){const e=[];return(r,t)=>{switch(r){case 0:return void e.slice().forEach((e=>{e(t)}));case 2:return void e.splice(0,e.length);case 1:return e.push(t),()=>{const r=e.indexOf(t);r>-1&&e.splice(r,1)}}}}function xu(e){return Xc(vu(),(r=>ou(e,r)))}function wu(e,r=[],{singleton:t}={singleton:!0}){return{constructor:e,dependencies:r,id:Fu(),singleton:t}}const Fu=()=>Symbol();function $u(...e){const r=vu(),t=new Array(e.length);let n=0;const o=Math.pow(2,e.length)-1;return e.forEach(((e,i)=>{const a=Math.pow(2,i);eu(e,(e=>{t[i]=e,n|=a,n===o&&ru(r,t)}))})),function(e,i){switch(e){case 2:return void tu(r);case 1:return n===o&&i(t),eu(r,i)}}}function Cu(e,r=su){return gu(e,lu(r))}function Eu(...e){return function(r,t){switch(r){case 2:return;case 1:return function(...e){return()=>{e.map(Yc)}}(...e.map((e=>eu(e,t))))}}}var Su=(e=>(e[e.DEBUG=0]="DEBUG",e[e.INFO=1]="INFO",e[e.WARN=2]="WARN",e[e.ERROR=3]="ERROR",e))(Su||{});const Du={0:"debug",3:"error",1:"log",2:"warn"},Bu=wu((()=>{const e=pu(3);return{log:pu(((r,t,n=1)=>{var o;n>=(null!=(o=(typeof globalThis>"u"?window:globalThis).VIRTUOSO_LOG_LEVEL)?o:nu(e))&&console[Du[n]]("%creact-virtuoso: %c%s %o","color: #0253b3; font-weight: bold","color: initial",r,t)})),logLevel:e}}),[],{singleton:!0});function ku(e,r,t){return Ou(e,r,t).callbackRef}function Ou(e,r,t){const n=o.useRef(null);let i=e=>{};if(typeof ResizeObserver<"u"){const a=o.useMemo((()=>new ResizeObserver((r=>{const n=()=>{const t=r[0].target;null!==t.offsetParent&&e(t)};t?n():requestAnimationFrame(n)}))),[e]);i=e=>{e&&r?(a.observe(e),n.current=e):(n.current&&a.unobserve(n.current),n.current=null)}}return{callbackRef:i,ref:n}}function Tu(e,r,t,n,i,a,s,l,d){const c=o.useCallback((t=>{const o=function(e,r,t,n){const o=e.length;if(0===o)return null;const i=[];for(let a=0;a<o;a++){const o=e.item(a);if(void 0===o.dataset.index)continue;const s=parseInt(o.dataset.index),l=parseFloat(o.dataset.knownSize),d=r(o,t);if(0===d&&n("Zero-sized element, this should not happen",{child:o},Su.ERROR),d===l)continue;const c=i[i.length-1];0===i.length||c.size!==d||c.endIndex!==s-1?i.push({endIndex:s,size:d,startIndex:s}):i[i.length-1].endIndex++}return i}(t.children,r,l?"offsetWidth":"offsetHeight",i);let d=t.parentElement;for(;!d.dataset.virtuosoScroller;)d=d.parentElement;const c="window"===d.lastElementChild.dataset.viewportType,u=s?l?s.scrollLeft:s.scrollTop:c?l?window.pageXOffset||document.documentElement.scrollLeft:window.pageYOffset||document.documentElement.scrollTop:l?d.scrollLeft:d.scrollTop,g=s?l?s.scrollWidth:s.scrollHeight:c?l?document.documentElement.scrollWidth:document.documentElement.scrollHeight:l?d.scrollWidth:d.scrollHeight,h=s?l?s.offsetWidth:s.offsetHeight:c?l?window.innerWidth:window.innerHeight:l?d.offsetWidth:d.offsetHeight;n({scrollHeight:g,scrollTop:Math.max(u,0),viewportHeight:h}),null==a||a(l?zu("column-gap",getComputedStyle(t).columnGap,i):zu("row-gap",getComputedStyle(t).rowGap,i)),null!==o&&e(o)}),[e,r,i,a,s,n]);return Ou(c,t,d)}function zu(e,r,t){return"normal"!==r&&!(null!=r&&r.endsWith("px"))&&t(`${e} was not resolved to pixel value correctly`,r,Su.WARN),"normal"===r?0:parseInt(null!=r?r:"0",10)}function Au(e,r,t){const n=o.useRef(null),i=o.useCallback((t=>{if(null==t||!t.offsetParent)return;const o=t.getBoundingClientRect(),i=o.width;let a,s;if(r){const e=r.getBoundingClientRect(),t=o.top-e.top;s=e.height-Math.max(0,t),a=t+r.scrollTop}else s=window.innerHeight-Math.max(0,o.top),a=o.top+window.pageYOffset;n.current={offsetTop:a,visibleHeight:s,visibleWidth:i},e(n.current)}),[e,r]),{callbackRef:a,ref:s}=Ou(i,!0,t),l=o.useCallback((()=>{i(s.current)}),[i,s]);return o.useEffect((()=>{if(r){r.addEventListener("scroll",l);const e=new ResizeObserver((()=>{requestAnimationFrame(l)}));return e.observe(r),()=>{r.removeEventListener("scroll",l),e.unobserve(r)}}return window.addEventListener("scroll",l),window.addEventListener("resize",l),()=>{window.removeEventListener("scroll",l),window.removeEventListener("resize",l)}}),[l,r]),a}const Iu=wu((()=>{const e=vu(),r=vu(),t=pu(0),n=vu(),o=pu(0),i=vu(),a=vu(),s=pu(0),l=pu(0),d=pu(0),c=pu(0),u=vu(),g=vu(),h=pu(!1),m=pu(!1),f=pu(!1);return ou(gu(e,cu((({scrollTop:e})=>e))),r),ou(gu(e,cu((({scrollHeight:e})=>e))),a),ou(r,o),{deviation:t,fixedFooterHeight:d,fixedHeaderHeight:l,footerHeight:c,headerHeight:s,horizontalDirection:m,scrollBy:g,scrollContainerState:e,scrollHeight:a,scrollingInProgress:h,scrollTo:u,scrollTop:r,skipAnimationFrameInResizeObserver:f,smoothScrollTargetReached:n,statefulScrollTop:o,viewportHeight:i}}),[],{singleton:!0}),Mu={lvl:0};function ju(e,r){const t=e.length;if(0===t)return[];let{index:n,value:o}=r(e[0]);const i=[];for(let a=1;a<t;a++){const{index:t,value:s}=r(e[a]);i.push({end:t-1,start:n,value:o}),n=t,o=s}return i.push({end:1/0,start:n,value:o}),i}function Lu(e){return e===Mu}function _u(e,r){if(!Lu(e))return r===e.k?e.v:r<e.k?_u(e.l,r):_u(e.r,r)}function Ru(e,r,t="k"){if(Lu(e))return[-1/0,void 0];if(Number(e[t])===r)return[e.k,e.v];if(Number(e[t])<r){const n=Ru(e.r,r,t);return n[0]===-1/0?[e.k,e.v]:n}return Ru(e.l,r,t)}function Hu(e,r,t){return Lu(e)?Xu(r,t,1):r===e.k?qu(e,{k:r,v:t}):r<e.k?Qu(qu(e,{l:Hu(e.l,r,t)})):Qu(qu(e,{r:Hu(e.r,r,t)}))}function Pu(){return Mu}function Wu(e,r,t){if(Lu(e))return[];return function(e){return ju(e,(({k:e,v:r})=>({index:e,value:r})))}(Yu(e,Ru(e,r)[0],t))}function Nu(e,r){if(Lu(e))return Mu;const{k:t,l:n,r:o}=e;if(r===t){if(Lu(n))return o;if(Lu(o))return n;{const[r,t]=Ku(n);return Uu(qu(e,{k:r,l:Gu(n),v:t}))}}return Uu(qu(e,r<t?{l:Nu(n,r)}:{r:Nu(o,r)}))}function Vu(e){return Lu(e)?[]:[...Vu(e.l),{k:e.k,v:e.v},...Vu(e.r)]}function Yu(e,r,t){if(Lu(e))return[];const{k:n,l:o,r:i,v:a}=e;let s=[];return n>r&&(s=s.concat(Yu(o,r,t))),n>=r&&n<=t&&s.push({k:n,v:a}),n<=t&&(s=s.concat(Yu(i,r,t))),s}function Uu(e){const{l:r,lvl:t,r:n}=e;if(n.lvl>=t-1&&r.lvl>=t-1)return e;if(t>n.lvl+1){if(Zu(r))return Ju(qu(e,{lvl:t-1}));if(!Lu(r)&&!Lu(r.r))return qu(r.r,{l:qu(r,{r:r.r.l}),lvl:t,r:qu(e,{l:r.r.r,lvl:t-1})});throw new Error("Unexpected empty nodes")}if(Zu(e))return eg(qu(e,{lvl:t-1}));if(Lu(n)||Lu(n.l))throw new Error("Unexpected empty nodes");{const r=n.l,o=Zu(r)?n.lvl-1:n.lvl;return qu(r,{l:qu(e,{lvl:t-1,r:r.l}),lvl:r.lvl+1,r:eg(qu(n,{l:r.r,lvl:o}))})}}function qu(e,r){return Xu(void 0!==r.k?r.k:e.k,void 0!==r.v?r.v:e.v,void 0!==r.lvl?r.lvl:e.lvl,void 0!==r.l?r.l:e.l,void 0!==r.r?r.r:e.r)}function Gu(e){return Lu(e.r)?e.l:Uu(qu(e,{r:Gu(e.r)}))}function Zu(e){return Lu(e)||e.lvl>e.r.lvl}function Ku(e){return Lu(e.r)?[e.k,e.v]:Ku(e.r)}function Xu(e,r,t,n=Mu,o=Mu){return{k:e,l:n,lvl:t,r:o,v:r}}function Qu(e){return eg(Ju(e))}function Ju(e){const{l:r}=e;return Lu(r)||r.lvl!==e.lvl?e:qu(r,{r:qu(e,{l:r.r})})}function eg(e){const{lvl:r,r:t}=e;return Lu(t)||Lu(t.r)||t.lvl!==r||t.r.lvl!==r?e:qu(t,{l:qu(e,{r:t.l}),lvl:r+1})}function rg(e,r){return!(!e||e.startIndex!==r.startIndex||e.endIndex!==r.endIndex)}function tg(e,r){return!(!e||e[0]!==r[0]||e[1]!==r[1])}const ng=wu((()=>({recalcInProgress:pu(!1)})),[],{singleton:!0});function og(e,r,t){return e[ig(e,r,t)]}function ig(e,r,t,n=0){let o=e.length-1;for(;n<=o;){const i=Math.floor((n+o)/2),a=t(e[i],r);if(0===a)return i;if(-1===a){if(o-n<2)return i-1;o=i-1}else{if(o===n)return i;n=i+1}}throw new Error(`Failed binary finding record in array - ${e.join(",")}, searched for ${r}`)}function ag(e,r){return Math.round(e.getBoundingClientRect()[r])}function sg(e){return!Lu(e.groupOffsetTree)}function lg({index:e},r){return r===e?0:r<e?-1:1}function dg({offset:e},r){return r===e?0:r<e?-1:1}function cg(e,r,t){if(0===r.length)return 0;const{index:n,offset:o,size:i}=og(r,e,lg),a=e-n,s=i*a+(a-1)*t+o;return s>0?s+t:s}function ug(e,r){if(!sg(r))return e;let t=0;for(;r.groupIndices[t]<=e+t;)t++;return e+t}function gg(e,r,t){if(function(e){return typeof e.groupIndex<"u"}(e))return r.groupIndices[e.groupIndex]+1;{let n=ug("LAST"===e.index?t:e.index,r);return n=Math.max(0,n,Math.min(t,n)),n}}function hg(e,r,t,n=0){return n>0&&(r=Math.max(r,og(e,n,lg).offset)),ju(function(e,r,t,n){const o=ig(e,r,n),i=ig(e,t,n,o);return e.slice(o,i+1)}(e,r,t,dg),pg)}function mg(e,[r,t,n,o]){r.length>0&&n("received item sizes",r,Su.DEBUG);const i=e.sizeTree;let a=i,s=0;if(t.length>0&&Lu(i)&&2===r.length){const e=r[0].size,n=r[1].size;a=t.reduce(((r,t)=>Hu(Hu(r,t,e),t+1,n)),a)}else[a,s]=function(e,r){let t=Lu(e)?0:1/0;for(const n of r){const{endIndex:r,size:o,startIndex:i}=n;if(t=Math.min(t,i),Lu(e)){e=Hu(e,0,o);continue}const a=Wu(e,i-1,r+1);if(a.some(yg(n)))continue;let s=!1,l=!1;for(const{end:t,start:n,value:i}of a)s?(r>=n||o===i)&&(e=Nu(e,n)):(l=i!==o,s=!0),t>r&&r>=n&&i!==o&&(e=Hu(e,r+1,i));l&&(e=Hu(e,i,o))}return[e,t]}(a,r);if(a===i)return e;const{lastIndex:l,lastOffset:d,lastSize:c,offsetTree:u}=bg(e.offsetTree,s,a,o);return{groupIndices:t,groupOffsetTree:t.reduce(((e,r)=>Hu(e,r,cg(r,u,o))),Pu()),lastIndex:l,lastOffset:d,lastSize:c,offsetTree:u,sizeTree:a}}function fg(e,r){let t=0,n=0;for(;t<e;)t+=r[n+1]-r[n]-1,n++;return n-(t===e?0:1)}function bg(e,r,t,n){let o=e,i=0,a=0,s=0,l=0;if(0!==r){l=ig(o,r-1,lg),s=o[l].offset;const e=Ru(t,r-1);i=e[0],a=e[1],o.length&&o[l].size===Ru(t,r)[1]&&(l-=1),o=o.slice(0,l+1)}else o=[];for(const{start:e,value:l}of Wu(t,r,1/0)){const r=e-i,t=r*a+s+r*n;o.push({index:e,offset:t,size:l}),i=e,s=t,a=l}return{lastIndex:i,lastOffset:s,lastSize:a,offsetTree:o}}function pg(e){return{index:e.index,value:e}}function yg(e){const{endIndex:r,size:t,startIndex:n}=e;return e=>e.start===n&&(e.end===r||e.end===1/0)&&e.value===t}const vg={offsetHeight:"height",offsetWidth:"width"},xg=wu((([{log:e},{recalcInProgress:r}])=>{const t=vu(),n=vu(),o=yu(n,0),i=vu(),a=vu(),s=pu(0),l=pu([]),d=pu(void 0),c=pu(void 0),u=pu(((e,r)=>ag(e,vg[r]))),g=pu(void 0),h=pu(0),m={groupIndices:[],groupOffsetTree:Pu(),lastIndex:0,lastOffset:0,lastSize:0,offsetTree:[],sizeTree:Pu()},f=yu(gu(t,bu(l,e,h),hu(mg,m),lu()),m),b=yu(gu(l,lu(),hu(((e,r)=>({current:r,prev:e.current})),{current:[],prev:[]}),cu((({prev:e})=>e))),[]);ou(gu(l,du((e=>e.length>0)),bu(f,h),cu((([e,r,t])=>{const n=e.reduce(((e,n,o)=>Hu(e,n,cg(n,r.offsetTree,t)||o)),Pu());return{...r,groupIndices:e,groupOffsetTree:n}}))),f),ou(gu(n,bu(f),du((([e,{lastIndex:r}])=>e<r)),cu((([e,{lastIndex:r,lastSize:t}])=>[{endIndex:r,size:t,startIndex:e}]))),t),ou(d,c);const p=yu(gu(d,cu((e=>void 0===e))),!0);ou(gu(c,du((e=>void 0!==e&&Lu(nu(f).sizeTree))),cu((e=>[{endIndex:0,size:e,startIndex:0}]))),t);const y=xu(gu(t,bu(f),hu((({sizes:e},[r,t])=>({changed:t!==e,sizes:t})),{changed:!1,sizes:m}),cu((e=>e.changed))));eu(gu(s,hu(((e,r)=>({diff:e.prev-r,prev:r})),{diff:0,prev:0}),cu((e=>e.diff))),(e=>{const{groupIndices:t}=nu(f);if(e>0)ru(r,!0),ru(i,e+fg(e,t));else if(e<0){const r=nu(b);r.length>0&&(e-=fg(-e,r)),ru(a,e)}})),eu(gu(s,bu(e)),(([e,r])=>{e<0&&r("`firstItemIndex` prop should not be set to less than zero. If you don't know the total count, just use a very high value",{firstItemIndex:s},Su.ERROR)}));const v=xu(i);ou(gu(i,bu(f),cu((([e,r])=>{const t=r.groupIndices.length>0,n=[],o=r.lastSize;if(t){const t=_u(r.sizeTree,0);let i=0,a=0;for(;i<e;){const e=r.groupIndices[a],s=r.groupIndices.length===a+1?1/0:r.groupIndices[a+1]-e-1;n.push({endIndex:e,size:t,startIndex:e}),n.push({endIndex:e+1+s-1,size:o,startIndex:e+1}),a++,i+=s+1}const s=Vu(r.sizeTree);return i!==e&&s.shift(),s.reduce(((r,{k:t,v:n})=>{let o=r.ranges;return 0!==r.prevSize&&(o=[...r.ranges,{endIndex:t+e-1,size:r.prevSize,startIndex:r.prevIndex}]),{prevIndex:t+e,prevSize:n,ranges:o}}),{prevIndex:e,prevSize:0,ranges:n}).ranges}return Vu(r.sizeTree).reduce(((r,{k:t,v:n})=>({prevIndex:t+e,prevSize:n,ranges:[...r.ranges,{endIndex:t+e-1,size:r.prevSize,startIndex:r.prevIndex}]})),{prevIndex:0,prevSize:o,ranges:[]}).ranges}))),t);const x=xu(gu(a,bu(f,h),cu((([e,{offsetTree:r},t])=>cg(-e,r,t)))));return ou(gu(a,bu(f,h),cu((([e,r,t])=>{if(r.groupIndices.length>0){if(Lu(r.sizeTree))return r;let n=Pu();const o=nu(b);let i=0,a=0,s=0;for(;i<-e;){s=o[a];const e=o[a+1]-s-1;a++,i+=e+1}if(n=Vu(r.sizeTree).reduce(((r,{k:t,v:n})=>Hu(r,Math.max(0,t+e),n)),n),i!==-e){n=Hu(n,0,_u(r.sizeTree,s));n=Hu(n,1,Ru(r.sizeTree,1-e)[1])}return{...r,sizeTree:n,...bg(r.offsetTree,0,n,t)}}{const n=Vu(r.sizeTree).reduce(((r,{k:t,v:n})=>Hu(r,Math.max(0,t+e),n)),Pu());return{...r,sizeTree:n,...bg(r.offsetTree,0,n,t)}}}))),f),{beforeUnshiftWith:v,data:g,defaultItemSize:c,firstItemIndex:s,fixedItemSize:d,gap:h,groupIndices:l,itemSize:u,listRefresh:y,shiftWith:a,shiftWithOffset:x,sizeRanges:t,sizes:f,statefulTotalCount:o,totalCount:n,trackItemSizes:p,unshiftWith:i}}),Jc(Bu,ng),{singleton:!0});function wg(e){return e.reduce(((e,r)=>(e.groupIndices.push(e.totalCount),e.totalCount+=r+1,e)),{groupIndices:[],totalCount:0})}const Fg=wu((([{groupIndices:e,sizes:r,totalCount:t},{headerHeight:n,scrollTop:o}])=>{const i=vu(),a=vu(),s=xu(gu(i,cu(wg)));return ou(gu(s,cu((e=>e.totalCount))),t),ou(gu(s,cu((e=>e.groupIndices))),e),ou(gu($u(o,r,n),du((([e,r])=>sg(r))),cu((([e,r,t])=>Ru(r.groupOffsetTree,Math.max(e-t,0),"v")[0])),lu(),cu((e=>[e]))),a),{groupCounts:i,topItemsIndexes:a}}),Jc(xg,Iu)),$g=wu((([{log:e}])=>{const r=pu(!1),t=xu(gu(r,du((e=>e)),lu()));return eu(r,(r=>{r&&nu(e)("props updated",{},Su.DEBUG)})),{didMount:t,propsReady:r}}),Jc(Bu),{singleton:!0}),Cg=typeof document<"u"&&"scrollBehavior"in document.documentElement.style;function Eg(e){const r="number"==typeof e?{index:e}:e;return r.align||(r.align="start"),(!r.behavior||!Cg)&&(r.behavior="auto"),r.offset||(r.offset=0),r}const Sg=wu((([{gap:e,listRefresh:r,sizes:t,totalCount:n},{fixedFooterHeight:o,fixedHeaderHeight:i,footerHeight:a,headerHeight:s,scrollingInProgress:l,scrollTo:d,smoothScrollTargetReached:c,viewportHeight:u},{log:g}])=>{const h=vu(),m=vu(),f=pu(0);let b=null,p=null,y=null;function v(){b&&(b(),b=null),y&&(y(),y=null),p&&(clearTimeout(p),p=null),ru(l,!1)}return ou(gu(h,bu(t,u,n,f,s,a,g),bu(e,i,o),cu((([[e,t,n,o,i,a,s,d],u,g,f])=>{const x=Eg(e),{align:w,behavior:F,offset:$}=x,C=o-1,E=gg(x,t,C);let S=cg(E,t.offsetTree,u)+a;"end"===w?(S+=g+Ru(t.sizeTree,E)[1]-n+f,E===C&&(S+=s)):"center"===w?S+=(g+Ru(t.sizeTree,E)[1]-n+f)/2:S-=i,$&&(S+=$);const D=r=>{v(),r?(d("retrying to scroll to",{location:e},Su.DEBUG),ru(h,e)):(ru(m,!0),d("list did not change, scroll successful",{},Su.DEBUG))};if(v(),"smooth"===F){let e=!1;y=eu(r,(r=>{e=e||r})),b=iu(c,(()=>{D(e)}))}else b=iu(gu(r,function(e){return r=>{const t=setTimeout((()=>{r(!1)}),e);return e=>{e&&(r(!0),clearTimeout(t))}}}(150)),D);return p=setTimeout((()=>{v()}),1200),ru(l,!0),d("scrolling from index to",{behavior:F,index:E,top:S},Su.DEBUG),{behavior:F,top:S}}))),d),{scrollTargetReached:m,scrollToIndex:h,topListHeight:f}}),Jc(xg,Iu,Bu),{singleton:!0});function Dg(e,r){0==e?r():requestAnimationFrame((()=>{Dg(e-1,r)}))}function Bg(e,r){const t=r-1;return"number"==typeof e?e:"LAST"===e.index?t:e.index}const kg=wu((([{defaultItemSize:e,listRefresh:r,sizes:t},{scrollTop:n},{scrollTargetReached:o,scrollToIndex:i},{didMount:a}])=>{const s=pu(!0),l=pu(0),d=pu(!0);return ou(gu(a,bu(l),du((([e,r])=>!!r)),uu(!1)),s),ou(gu(a,bu(l),du((([e,r])=>!!r)),uu(!1)),d),eu(gu($u(r,a),bu(s,t,e,d),du((([[,e],r,{sizeTree:t},n,o])=>e&&(!Lu(t)||Zc(n))&&!r&&!o)),bu(l)),(([,e])=>{iu(o,(()=>{ru(d,!0)})),Dg(4,(()=>{iu(n,(()=>{ru(s,!0)})),ru(i,e)}))})),{initialItemFinalLocationReached:d,initialTopMostItemIndex:l,scrolledToInitialItem:s}}),Jc(xg,Iu,Sg,$g),{singleton:!0});function Og(e,r){return Math.abs(e-r)<1.01}const Tg="up",zg="down",Ag={atBottom:!1,notAtBottomBecause:"NOT_SHOWING_LAST_ITEM",state:{offsetBottom:0,scrollHeight:0,scrollTop:0,viewportHeight:0}},Ig=wu((([{footerHeight:e,headerHeight:r,scrollBy:t,scrollContainerState:n,scrollTop:o,viewportHeight:i}])=>{const a=pu(!1),s=pu(!0),l=vu(),d=vu(),c=pu(4),u=pu(0),g=yu(gu(Eu(gu(Cu(o),mu(1),uu(!0)),gu(Cu(o),mu(1),uu(!1),au(100))),lu()),!1),h=yu(gu(Eu(gu(t,uu(!0)),gu(t,uu(!1),au(200))),lu()),!1);ou(gu($u(Cu(o),Cu(u)),cu((([e,r])=>e<=r)),lu()),s),ou(gu(s,fu(50)),d);const m=xu(gu($u(n,Cu(i),Cu(r),Cu(e),Cu(c)),hu(((e,[{scrollHeight:r,scrollTop:t},n,o,i,a])=>{const s={scrollHeight:r,scrollTop:t,viewportHeight:n};if(t+n-r>-a){let r,n;return t>e.state.scrollTop?(r="SCROLLED_DOWN",n=e.state.scrollTop-t):(r="SIZE_DECREASED",n=e.state.scrollTop-t||e.scrollTopDelta),{atBottom:!0,atBottomBecause:r,scrollTopDelta:n,state:s}}let l;return l=s.scrollHeight>e.state.scrollHeight?"SIZE_INCREASED":n<e.state.viewportHeight?"VIEWPORT_HEIGHT_DECREASING":t<e.state.scrollTop?"SCROLLING_UPWARDS":"NOT_FULLY_SCROLLED_TO_LAST_ITEM_BOTTOM",{atBottom:!1,notAtBottomBecause:l,state:s}}),Ag),lu(((e,r)=>e&&e.atBottom===r.atBottom)))),f=yu(gu(n,hu(((e,{scrollHeight:r,scrollTop:t,viewportHeight:n})=>{if(Og(e.scrollHeight,r))return{changed:!1,jump:0,scrollHeight:r,scrollTop:t};{const o=r-(t+n)<1;return e.scrollTop!==t&&o?{changed:!0,jump:e.scrollTop-t,scrollHeight:r,scrollTop:t}:{changed:!0,jump:0,scrollHeight:r,scrollTop:t}}}),{changed:!1,jump:0,scrollHeight:0,scrollTop:0}),du((e=>e.changed)),cu((e=>e.jump))),0);ou(gu(m,cu((e=>e.atBottom))),a),ou(gu(a,fu(50)),l);const b=pu(zg);ou(gu(n,cu((({scrollTop:e})=>e)),lu(),hu(((e,r)=>nu(h)?{direction:e.direction,prevScrollTop:r}:{direction:r<e.prevScrollTop?Tg:zg,prevScrollTop:r}),{direction:zg,prevScrollTop:0}),cu((e=>e.direction))),b),ou(gu(n,fu(50),uu("none")),b);const p=pu(0);return ou(gu(g,du((e=>!e)),uu(0)),p),ou(gu(o,fu(100),bu(g),du((([e,r])=>!!r)),hu((([e,r],[t])=>[r,t]),[0,0]),cu((([e,r])=>r-e))),p),{atBottomState:m,atBottomStateChange:l,atBottomThreshold:c,atTopStateChange:d,atTopThreshold:u,isAtBottom:a,isAtTop:s,isScrolling:g,lastJumpDueToItemResize:f,scrollDirection:b,scrollVelocity:p}}),Jc(Iu)),Mg="top",jg="bottom",Lg="none";function _g(e,r,t){return"number"==typeof e?t===Tg&&r===Mg||t===zg&&r===jg?e:0:t===Tg?r===Mg?e.main:e.reverse:r===jg?e.main:e.reverse}function Rg(e,r){var t;return"number"==typeof e?e:null!=(t=e[r])?t:0}const Hg=wu((([{deviation:e,fixedHeaderHeight:r,headerHeight:t,scrollTop:n,viewportHeight:o}])=>{const i=vu(),a=pu(0),s=pu(0),l=pu(0);return{increaseViewportBy:s,listBoundary:i,overscan:l,topListHeight:a,visibleRange:yu(gu($u(Cu(n),Cu(o),Cu(t),Cu(i,tg),Cu(l),Cu(a),Cu(r),Cu(e),Cu(s)),cu((([e,r,t,[n,o],i,a,s,l,d])=>{const c=e-l,u=a+s,g=Math.max(t-c,0);let h=Lg;const m=Rg(d,Mg),f=Rg(d,jg);return n-=l,o+=t+s,(n+=t+s)>e+u-m&&(h=Tg),(o-=l)<e-g+r+f&&(h=zg),h!==Lg?[Math.max(c-t-_g(i,Mg,h)-m,0),c-g-s+r+_g(i,jg,h)+f]:null})),du((e=>null!=e)),lu(tg)),[0,0])}}),Jc(Iu),{singleton:!0});const Pg={bottom:0,firstItemIndex:0,items:[],offsetBottom:0,offsetTop:0,top:0,topItems:[],topListHeight:0,totalCount:0};function Wg(e,r,t,n,o,i){const{lastIndex:a,lastOffset:s,lastSize:l}=o;let d=0,c=0;if(e.length>0){d=e[0].offset;const r=e[e.length-1];c=r.offset+r.size}const u=t-a,g=d,h=s+u*l+(u-1)*n-c;return{bottom:c,firstItemIndex:i,items:Vg(e,o,i),offsetBottom:h,offsetTop:d,top:g,topItems:Vg(r,o,i),topListHeight:r.reduce(((e,r)=>r.size+e),0),totalCount:t}}function Ng(e,r,t,n,o,i){let a=0;if(t.groupIndices.length>0)for(const r of t.groupIndices){if(r-a>=e)break;a++}const s=e+a,l=Bg(r,s);return Wg(Array.from({length:s}).map(((e,r)=>({data:i[r+l],index:r+l,offset:0,size:0}))),[],s,o,t,n)}function Vg(e,r,t){if(0===e.length)return[];if(!sg(r))return e.map((e=>({...e,index:e.index+t,originalIndex:e.index})));const n=e[0].index,o=e[e.length-1].index,i=[],a=Wu(r.groupOffsetTree,n,o);let s,l=0;for(const n of e){let e;(!s||s.end<n.index)&&(s=a.shift(),l=r.groupIndices.indexOf(s.start)),e=n.index===s.start?{index:l,type:"group"}:{groupIndex:l,index:n.index-(l+1)+t},i.push({...e,data:n.data,offset:n.offset,originalIndex:n.index,size:n.size})}return i}const Yg=wu((([{data:e,firstItemIndex:r,gap:t,sizes:n,totalCount:o},i,{listBoundary:a,topListHeight:s,visibleRange:l},{initialTopMostItemIndex:d,scrolledToInitialItem:c},{topListHeight:u},g,{didMount:h},{recalcInProgress:m}])=>{const f=pu([]),b=pu(0),p=vu();ou(i.topItemsIndexes,f);const y=yu(gu($u(h,m,Cu(l,tg),Cu(o),Cu(n),Cu(d),c,Cu(f),Cu(r),Cu(t),e),du((([e,r,,t,,,,,,,n])=>{const o=n&&n.length!==t;return e&&!r&&!o})),cu((([,,[e,r],t,n,o,i,a,s,l,d])=>{const c=n,{offsetTree:u,sizeTree:g}=c,h=nu(b);if(0===t)return{...Pg,totalCount:t};if(0===e&&0===r)return 0===h?{...Pg,totalCount:t}:Ng(h,o,n,s,l,d||[]);if(Lu(g))return h>0?null:Wg(function(e,r,t){if(sg(r)){const n=ug(e,r);return[{index:Ru(r.groupOffsetTree,n)[0],offset:0,size:0},{data:null==t?void 0:t[0],index:n,offset:0,size:0}]}return[{data:null==t?void 0:t[0],index:e,offset:0,size:0}]}(Bg(o,t),c,d),[],t,l,c,s);const m=[];if(a.length>0){const e=a[0],r=a[a.length-1];let t=0;for(const n of Wu(g,e,r)){const o=n.value,i=Math.max(n.start,e),a=Math.min(n.end,r);for(let e=i;e<=a;e++)m.push({data:null==d?void 0:d[e],index:e,offset:t,size:o}),t+=o}}if(!i)return Wg([],m,t,l,c,s);const f=a.length>0?a[a.length-1]+1:0,p=hg(u,e,r,f);if(0===p.length)return null;const y=t-1;return Wg(Xc([],(t=>{for(const n of p){const o=n.value;let i=o.offset,a=n.start;const s=o.size;if(o.offset<e){a+=Math.floor((e-o.offset+l)/(s+l));const r=a-n.start;i+=r*s+r*l}a<f&&(i+=(f-a)*s,a=f);const c=Math.min(n.end,y);for(let e=a;e<=c&&!(i>=r);e++)t.push({data:null==d?void 0:d[e],index:e,offset:i,size:s}),i+=s+l}})),m,t,l,c,s)})),du((e=>null!==e)),lu()),Pg);ou(gu(e,du(Zc),cu((e=>null==e?void 0:e.length))),o),ou(gu(y,cu((e=>e.topListHeight))),u),ou(u,s),ou(gu(y,cu((e=>[e.top,e.bottom]))),a),ou(gu(y,cu((e=>e.items))),p);const v=xu(gu(y,du((({items:e})=>e.length>0)),bu(o,e),du((([{items:e},r])=>e[e.length-1].originalIndex===r-1)),cu((([,e,r])=>[e-1,r])),lu(tg),cu((([e])=>e)))),x=xu(gu(y,fu(200),du((({items:e,topItems:r})=>e.length>0&&e[0].originalIndex===r.length)),cu((({items:e})=>e[0].index)),lu())),w=xu(gu(y,du((({items:e})=>e.length>0)),cu((({items:e})=>{let r=0,t=e.length-1;for(;"group"===e[r].type&&r<t;)r++;for(;"group"===e[t].type&&t>r;)t--;return{endIndex:e[t].index,startIndex:e[r].index}})),lu(rg)));return{endReached:v,initialItemCount:b,itemsRendered:p,listState:y,rangeChanged:w,startReached:x,topItemsIndexes:f,...g}}),Jc(xg,Fg,Hg,kg,Sg,Ig,$g,ng),{singleton:!0}),Ug=wu((([{fixedFooterHeight:e,fixedHeaderHeight:r,footerHeight:t,headerHeight:n},{listState:o}])=>{const i=vu(),a=yu(gu($u(t,e,n,r,o),cu((([e,r,t,n,o])=>e+r+t+n+o.offsetBottom+o.bottom))),0);return ou(Cu(a),i),{totalListHeight:a,totalListHeightChanged:i}}),Jc(Iu,Yg),{singleton:!0}),qg=wu((([{viewportHeight:e},{totalListHeight:r}])=>{const t=pu(!1);return{alignToBottom:t,paddingTopAddition:yu(gu($u(t,e,r),du((([e])=>e)),cu((([,e,r])=>Math.max(0,e-r))),fu(0),lu()),0)}}),Jc(Iu,Ug),{singleton:!0});function Gg(e){return!!e&&("smooth"===e?"smooth":"auto")}const Zg=wu((([{listRefresh:e,totalCount:r},{atBottomState:t,isAtBottom:n},{scrollToIndex:o},{scrolledToInitialItem:i},{didMount:a,propsReady:s},{log:l},{scrollingInProgress:d}])=>{const c=pu(!1),u=vu();let g=null;function h(e){ru(o,{align:"end",behavior:e,index:"LAST"})}function m(e){const r=iu(t,(r=>{e&&!r.atBottom&&"SIZE_INCREASED"===r.notAtBottomBecause&&!g&&(nu(l)("scrolling to bottom due to increased size",{},Su.DEBUG),h("auto"))}));setTimeout(r,100)}return eu(gu($u(gu(Cu(r),mu(1)),a),bu(Cu(c),n,i,d),cu((([[e,r],t,n,o,i])=>{let a=r&&o,s="auto";return a&&(s=((e,r)=>"function"==typeof e?Gg(e(r)):r&&Gg(e))(t,n||i),a=a&&!!s),{followOutputBehavior:s,shouldFollow:a,totalCount:e}})),du((({shouldFollow:e})=>e))),(({followOutputBehavior:r,totalCount:t})=>{g&&(g(),g=null),g=iu(e,(()=>{nu(l)("following output to ",{totalCount:t},Su.DEBUG),h(r),g=null}))})),eu(gu($u(Cu(c),r,s),du((([e,,r])=>e&&r)),hu((({value:e},[,r])=>({refreshed:e===r,value:r})),{refreshed:!1,value:0}),du((({refreshed:e})=>e)),bu(c,r)),(([,e])=>{nu(i)&&m(!1!==e)})),eu(u,(()=>{m(!1!==nu(c))})),eu($u(Cu(c),t),(([e,r])=>{e&&!r.atBottom&&"VIEWPORT_HEIGHT_DECREASING"===r.notAtBottomBecause&&h("auto")})),{autoscrollToBottom:u,followOutput:c}}),Jc(xg,Ig,Sg,kg,$g,Bu,Iu)),Kg=wu((([{data:e,firstItemIndex:r,gap:t,sizes:n},{initialTopMostItemIndex:o},{initialItemCount:i,listState:a},{didMount:s}])=>(ou(gu(s,bu(i),du((([,e])=>0!==e)),bu(o,n,r,t,e),cu((([[,e],r,t,n,o,i=[]])=>Ng(e,r,t,n,o,i)))),a),{})),Jc(xg,kg,Yg,$g),{singleton:!0}),Xg=wu((([{didMount:e},{scrollTo:r},{listState:t}])=>{const n=pu(0);return eu(gu(e,bu(n),du((([,e])=>0!==e)),cu((([,e])=>({top:e})))),(e=>{iu(gu(t,mu(1),du((e=>e.items.length>1))),(()=>{requestAnimationFrame((()=>{ru(r,e)}))}))})),{initialScrollTop:n}}),Jc($g,Iu,Yg),{singleton:!0}),Qg=({itemBottom:e,itemTop:r,locationParams:{align:t,behavior:n,...o},viewportBottom:i,viewportTop:a})=>r<a?{...o,align:null!=t?t:"start",behavior:n}:e>i?{...o,align:null!=t?t:"end",behavior:n}:null,Jg=wu((([{gap:e,sizes:r,totalCount:t},{fixedFooterHeight:n,fixedHeaderHeight:o,headerHeight:i,scrollingInProgress:a,scrollTop:s,viewportHeight:l},{scrollToIndex:d}])=>{const c=vu();return ou(gu(c,bu(r,l,t,i,o,n,s),bu(e),cu((([[e,r,t,n,o,i,s,l],d])=>{const{align:c,behavior:u,calculateViewLocation:g=Qg,done:h,...m}=e,f=gg(e,r,n-1),b=cg(f,r.offsetTree,d)+o+i,p=g({itemBottom:b+Ru(r.sizeTree,f)[1],itemTop:b,locationParams:{align:c,behavior:u,...m},viewportBottom:l+t-s,viewportTop:l+i});return p?h&&iu(gu(a,du((e=>!e)),mu(nu(a)?1:2)),h):h&&h(),p})),du((e=>null!==e))),d),{scrollIntoView:c}}),Jc(xg,Iu,Sg,Yg,Bu),{singleton:!0}),eh=wu((([{scrollVelocity:e}])=>{const r=pu(!1),t=vu(),n=pu(!1);return ou(gu(e,bu(n,r,t),du((([e,r])=>!!r)),cu((([e,r,t,n])=>{const{enter:o,exit:i}=r;if(t){if(i(e,n))return!1}else if(o(e,n))return!0;return t})),lu()),r),eu(gu($u(r,e,t),bu(n)),(([[e,r,t],n])=>{e&&n&&n.change&&n.change(r,t)})),{isSeeking:r,scrollSeekConfiguration:n,scrollSeekRangeChanged:t,scrollVelocity:e}}),Jc(Ig),{singleton:!0}),rh=wu((([{scrollContainerState:e,scrollTo:r}])=>{const t=vu(),n=vu(),o=vu(),i=pu(!1),a=pu(void 0);return ou(gu($u(t,n),cu((([{scrollHeight:e,scrollTop:r,viewportHeight:t},{offsetTop:n}])=>({scrollHeight:e,scrollTop:Math.max(0,r-n),viewportHeight:t})))),e),ou(gu(r,bu(n),cu((([e,{offsetTop:r}])=>({...e,top:e.top+r})))),o),{customScrollParent:a,useWindowScroll:i,windowScrollContainerState:t,windowScrollTo:o,windowViewportRect:n}}),Jc(Iu)),th=wu((([{sizeRanges:e,sizes:r},{headerHeight:t,scrollTop:n},{initialTopMostItemIndex:o},{didMount:i},{useWindowScroll:a,windowScrollContainerState:s,windowViewportRect:l}])=>{const d=vu(),c=pu(void 0),u=pu(null),g=pu(null);return ou(s,u),ou(l,g),eu(gu(d,bu(r,n,a,u,g,t)),(([e,r,t,n,o,i,a])=>{const s=function(e){return Vu(e).map((({k:e,v:r},t,n)=>{const o=n[t+1];return{endIndex:o?o.k-1:1/0,size:r,startIndex:e}}))}(r.sizeTree);n&&null!==o&&null!==i&&(t=o.scrollTop-i.offsetTop),e({ranges:s,scrollTop:t-=a})})),ou(gu(c,du(Zc),cu(nh)),o),ou(gu(i,bu(c),du((([,e])=>void 0!==e)),lu(),cu((([,e])=>e.ranges))),e),{getState:d,restoreStateFrom:c}}),Jc(xg,Iu,kg,$g,rh));function nh(e){return{align:"start",index:0,offset:e.scrollTop}}const oh=wu((([{topItemsIndexes:e}])=>{const r=pu(0);return ou(gu(r,du((e=>e>=0)),cu((e=>Array.from({length:e}).map(((e,r)=>r))))),e),{topItemCount:r}}),Jc(Yg));function ih(e){let r,t=!1;return()=>(t||(t=!0,r=e()),r)}const ah=ih((()=>/iP(ad|od|hone)/i.test(navigator.userAgent)&&/WebKit/i.test(navigator.userAgent))),sh=wu((([{deviation:e,scrollBy:r,scrollingInProgress:t,scrollTop:n},{isAtBottom:o,isScrolling:i,lastJumpDueToItemResize:a,scrollDirection:s},{listState:l},{beforeUnshiftWith:d,gap:c,shiftWithOffset:u,sizes:g},{log:h},{recalcInProgress:m}])=>{const f=xu(gu(l,bu(a),hu((([,e,r,t],[{bottom:n,items:o,offsetBottom:i,totalCount:a},s])=>{const l=n+i;let d=0;return r===a&&e.length>0&&o.length>0&&(0===o[0].originalIndex&&0===e[0].originalIndex||(d=l-t,0!==d&&(d+=s))),[d,o,a,l]}),[0,[],0,0]),du((([e])=>0!==e)),bu(n,s,t,o,h,m),du((([,e,r,t,,,n])=>!n&&!t&&0!==e&&r===Tg)),cu((([[e],,,,,r])=>(r("Upward scrolling compensation",{amount:e},Su.DEBUG),e)))));function b(t){t>0?(ru(r,{behavior:"auto",top:-t}),ru(e,0)):(ru(e,0),ru(r,{behavior:"auto",top:-t}))}return eu(gu(f,bu(e,i)),(([r,t,n])=>{n&&ah()?ru(e,t-r):b(-r)})),eu(gu($u(yu(i,!1),e,m),du((([e,r,t])=>!e&&!t&&0!==r)),cu((([e,r])=>r)),fu(1)),b),ou(gu(u,cu((e=>({top:-e})))),r),eu(gu(d,bu(g,c),cu((([e,{groupIndices:r,lastSize:t,sizeTree:n},o])=>{function i(e){return e*(t+o)}if(0===r.length)return i(e);{let t=0;const o=_u(n,0);let a=0,s=0;for(;a<e;){a++,t+=o;let n=r.length===s+1?1/0:r[s+1]-r[s]-1;a+n>e&&(t-=o,n=e-a+1),a+=n,t+=i(n),s++}return t}}))),(t=>{ru(e,t),requestAnimationFrame((()=>{ru(r,{top:t}),requestAnimationFrame((()=>{ru(e,0),ru(m,!1)}))}))})),{deviation:e}}),Jc(Iu,Ig,Yg,xg,Bu,ng)),lh=wu((([e,r,t,n,o,i,a,s,l,d])=>({...e,...r,...t,...n,...o,...i,...a,...s,...l,...d})),Jc(Hg,Kg,$g,eh,Ug,Xg,qg,rh,Jg,Bu)),dh=wu((([{data:e,defaultItemSize:r,firstItemIndex:t,fixedItemSize:n,gap:o,groupIndices:i,itemSize:a,sizeRanges:s,sizes:l,statefulTotalCount:d,totalCount:c,trackItemSizes:u},{initialItemFinalLocationReached:g,initialTopMostItemIndex:h,scrolledToInitialItem:m},f,b,p,{listState:y,topItemsIndexes:v,...x},{scrollToIndex:w},F,{topItemCount:$},{groupCounts:C},E])=>(ou(x.rangeChanged,E.scrollSeekRangeChanged),ou(gu(E.windowViewportRect,cu((e=>e.visibleHeight))),f.viewportHeight),{data:e,defaultItemHeight:r,firstItemIndex:t,fixedItemHeight:n,gap:o,groupCounts:C,initialItemFinalLocationReached:g,initialTopMostItemIndex:h,scrolledToInitialItem:m,sizeRanges:s,topItemCount:$,topItemsIndexes:v,totalCount:c,...p,groupIndices:i,itemSize:a,listState:y,scrollToIndex:w,statefulTotalCount:d,trackItemSizes:u,...x,...E,...f,sizes:l,...b})),Jc(xg,kg,Iu,th,Zg,Yg,Sg,sh,oh,Fg,lh));function ch(e,r){const t={},n={};let o=0;const i=e.length;for(;o<i;)n[e[o]]=1,o+=1;for(const e in r)Object.hasOwn(n,e)||(t[e]=r[e]);return t}const uh=typeof document<"u"?o.useLayoutEffect:o.useEffect;function gh(r,t,n){const i=Object.keys(t.required||{}),a=Object.keys(t.optional||{}),s=Object.keys(t.methods||{}),l=Object.keys(t.events||{}),d=o.createContext({});function c(e,r){e.propsReady&&ru(e.propsReady,!1);for(const n of i){ru(e[t.required[n]],r[n])}for(const n of a)if(n in r){ru(e[t.optional[n]],r[n])}e.propsReady&&ru(e.propsReady,!0)}function u(e){return l.reduce(((r,n)=>(r[n]=function(e){let r,t;const n=()=>null==r?void 0:r();return function(o,i){switch(o){case 1:return i?t===i?void 0:(n(),t=i,r=eu(e,i),r):(n(),Kc);case 2:return n(),void(t=null)}}}(e[t.events[n]]),r)),{})}const g=o.forwardRef(((g,h)=>{const{children:m,...f}=g,[b]=o.useState((()=>Xc(function(e){const r=new Map,t=({constructor:e,dependencies:n,id:o,singleton:i})=>{if(i&&r.has(o))return r.get(o);const a=e(n.map((e=>t(e))));return i&&r.set(o,a),a};return t(e)}(r),(e=>{c(e,f)})))),[p]=o.useState(qc(u,b));uh((()=>{for(const e of l)e in f&&eu(p[e],f[e]);return()=>{Object.values(p).map(tu)}}),[f,p,b]),uh((()=>{c(b,f)})),o.useImperativeHandle(h,Vc(function(e){return s.reduce(((r,n)=>(r[n]=r=>{ru(e[t.methods[n]],r)},r)),{})}(b)));const y=n;return e(d.Provider,{value:b,children:n?e(y,{...ch([...i,...a,...l],f),children:m}):m})}));return{Component:g,useEmitter:(e,r)=>{const t=o.useContext(d)[e];uh((()=>eu(t,r)),[r,t])},useEmitterValue:o.version.startsWith("18")?e=>{const r=o.useContext(d)[e],t=o.useCallback((e=>eu(r,e)),[r]);return o.useSyncExternalStore(t,(()=>nu(r)),(()=>nu(r)))}:e=>{const r=o.useContext(d)[e],[t,n]=o.useState(qc(nu,r));return uh((()=>eu(r,(e=>{e!==t&&n(Vc(e))}))),[r,t]),t},usePublisher:e=>o.useCallback(Gc(ru,o.useContext(d)[e]),[e])}}const hh=o.createContext(void 0),mh=o.createContext(void 0),fh=typeof document<"u"?o.useLayoutEffect:o.useEffect;function bh(e,r,t,n=Kc,i,a){const s=o.useRef(null),l=o.useRef(null),d=o.useRef(null),c=o.useCallback((t=>{const n=t.target,o=n===window||n===document,i=a?o?window.pageXOffset||document.documentElement.scrollLeft:n.scrollLeft:o?window.pageYOffset||document.documentElement.scrollTop:n.scrollTop,s=a?o?document.documentElement.scrollWidth:n.scrollWidth:o?document.documentElement.scrollHeight:n.scrollHeight,c=a?o?window.innerWidth:n.offsetWidth:o?window.innerHeight:n.offsetHeight,u=()=>{e({scrollHeight:s,scrollTop:Math.max(i,0),viewportHeight:c})};t.suppressFlushSync?u():G.flushSync(u),null!==l.current&&(i===l.current||i<=0||i===s-c)&&(l.current=null,r(!0),d.current&&(clearTimeout(d.current),d.current=null))}),[e,r]);return o.useEffect((()=>{const e=i||s.current;return n(i||s.current),c({suppressFlushSync:!0,target:e}),e.addEventListener("scroll",c,{passive:!0}),()=>{n(null),e.removeEventListener("scroll",c)}}),[s,c,t,n,i]),{scrollByCallback:function(e){a&&(e={behavior:e.behavior,left:e.top}),s.current.scrollBy(e)},scrollerRef:s,scrollToCallback:function(t){const n=s.current;if(!n||(a?"offsetWidth"in n&&0===n.offsetWidth:"offsetHeight"in n&&0===n.offsetHeight))return;const o="smooth"===t.behavior;let i,c,u;n===window?(c=Math.max(ag(document.documentElement,a?"width":"height"),a?document.documentElement.scrollWidth:document.documentElement.scrollHeight),i=a?window.innerWidth:window.innerHeight,u=a?document.documentElement.scrollLeft:document.documentElement.scrollTop):(c=n[a?"scrollWidth":"scrollHeight"],i=ag(n,a?"width":"height"),u=n[a?"scrollLeft":"scrollTop"]);const g=c-i;if(t.top=Math.ceil(Math.max(Math.min(g,t.top),0)),Og(i,c)||t.top===u)return e({scrollHeight:c,scrollTop:u,viewportHeight:i}),void(o&&r(!0));o?(l.current=t.top,d.current&&clearTimeout(d.current),d.current=setTimeout((()=>{d.current=null,l.current=null,r(!0)}),1e3)):l.current=null,a&&(t={behavior:t.behavior,left:t.top}),n.scrollTo(t)}}}const ph="-webkit-sticky",yh="sticky",vh=ih((()=>{if(typeof document>"u")return yh;const e=document.createElement("div");return e.style.position=ph,e.style.position===ph?ph:yh}));function xh(e){return e}const wh=wu((()=>{const e=pu((e=>`Item ${e}`)),r=pu(null),t=pu((e=>`Group ${e}`)),n=pu({}),o=pu(xh),i=pu("div"),a=pu(Kc),s=(e,r=null)=>yu(gu(n,cu((r=>r[e])),lu()),r);return{components:n,computeItemKey:o,context:r,EmptyPlaceholder:s("EmptyPlaceholder"),FooterComponent:s("Footer"),GroupComponent:s("Group","div"),groupContent:t,HeaderComponent:s("Header"),HeaderFooterTag:i,ItemComponent:s("Item","div"),itemContent:e,ListComponent:s("List","div"),ScrollerComponent:s("Scroller","div"),scrollerRef:a,ScrollSeekPlaceholder:s("ScrollSeekPlaceholder"),TopItemListComponent:s("TopItemList")}})),Fh=wu((([e,r])=>({...e,...r})),Jc(dh,wh)),$h=({height:r})=>e("div",{style:{height:r}}),Ch={overflowAnchor:"none",position:vh(),zIndex:1},Eh={overflowAnchor:"none"},Sh={...Eh,display:"inline-block",height:"100%"},Dh=o.memo((function({showTopList:r=!1}){const t=Vh("listState"),n=Yh("sizeRanges"),i=Vh("useWindowScroll"),a=Vh("customScrollParent"),s=Yh("windowScrollContainerState"),l=Yh("scrollContainerState"),d=a||i?s:l,c=Vh("itemContent"),u=Vh("context"),g=Vh("groupContent"),h=Vh("trackItemSizes"),m=Vh("itemSize"),f=Vh("log"),b=Yh("gap"),p=Vh("horizontalDirection"),{callbackRef:v}=Tu(n,m,h,r?Kc:d,f,b,a,p,Vh("skipAnimationFrameInResizeObserver")),[x,w]=o.useState(0);Nh("deviation",(e=>{x!==e&&w(e)}));const F=Vh("EmptyPlaceholder"),$=Vh("ScrollSeekPlaceholder")||$h,C=Vh("ListComponent"),E=Vh("ItemComponent"),S=Vh("GroupComponent"),D=Vh("computeItemKey"),B=Vh("isSeeking"),k=Vh("groupIndices").length>0,O=Vh("alignToBottom"),T=Vh("initialItemFinalLocationReached"),z=r?{}:{boxSizing:"border-box",...p?{display:"inline-block",height:"100%",marginLeft:0!==x?x:O?"auto":0,paddingLeft:t.offsetTop,paddingRight:t.offsetBottom,whiteSpace:"nowrap"}:{marginTop:0!==x?x:O?"auto":0,paddingBottom:t.offsetBottom,paddingTop:t.offsetTop},...T?{}:{visibility:"hidden"}};return!r&&0===t.totalCount&&F?e(F,{...zh(F,u)}):e(C,{...zh(C,u),"data-testid":r?"virtuoso-top-item-list":"virtuoso-item-list",ref:v,style:z,children:(r?t.topItems:t.items).map((e=>{const r=e.originalIndex,n=D(r+t.firstItemIndex,e.data,u);return B?y($,{...zh($,u),height:e.size,index:e.index,key:n,type:e.type||"item",..."group"===e.type?{}:{groupIndex:e.groupIndex}}):"group"===e.type?y(S,{...zh(S,u),"data-index":r,"data-item-index":e.index,"data-known-size":e.size,key:n,style:Ch},g(e.index,u)):y(E,{...zh(E,u),...Ah(E,e.data),"data-index":r,"data-item-group-index":e.groupIndex,"data-item-index":e.index,"data-known-size":e.size,key:n,style:p?Sh:Eh},k?c(e.index,e.groupIndex,e.data,u):c(e.index,e.data,u))}))})})),Bh={height:"100%",outline:"none",overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},kh={outline:"none",overflowX:"auto",position:"relative"},Oh=e=>({height:"100%",position:"absolute",top:0,width:"100%",...e?{display:"flex",flexDirection:"column"}:{}}),Th={position:vh(),top:0,width:"100%",zIndex:1};function zh(e,r){if("string"!=typeof e)return{context:r}}function Ah(e,r){return{item:"string"==typeof e?void 0:r}}const Ih=o.memo((function(){const r=Vh("HeaderComponent"),t=Yh("headerHeight"),n=Vh("HeaderFooterTag"),i=ku(o.useMemo((()=>e=>{t(ag(e,"height"))}),[t]),!0,Vh("skipAnimationFrameInResizeObserver")),a=Vh("context");return r?e(n,{ref:i,children:e(r,{...zh(r,a)})}):null})),Mh=o.memo((function(){const r=Vh("FooterComponent"),t=Yh("footerHeight"),n=Vh("HeaderFooterTag"),i=ku(o.useMemo((()=>e=>{t(ag(e,"height"))}),[t]),!0,Vh("skipAnimationFrameInResizeObserver")),a=Vh("context");return r?e(n,{ref:i,children:e(r,{...zh(r,a)})}):null}));function jh({useEmitter:r,useEmitterValue:t,usePublisher:n}){return o.memo((function({children:o,style:i,...a}){const s=n("scrollContainerState"),l=t("ScrollerComponent"),d=n("smoothScrollTargetReached"),c=t("scrollerRef"),u=t("context"),g=t("horizontalDirection")||!1,{scrollByCallback:h,scrollerRef:m,scrollToCallback:f}=bh(s,d,l,c,void 0,g);return r("scrollTo",f),r("scrollBy",h),e(l,{"data-testid":"virtuoso-scroller","data-virtuoso-scroller":!0,ref:m,style:{...g?kh:Bh,...i},tabIndex:0,...a,...zh(l,u),children:o})}))}function Lh({useEmitter:r,useEmitterValue:t,usePublisher:n}){return o.memo((function({children:o,style:i,...a}){const s=n("windowScrollContainerState"),l=t("ScrollerComponent"),d=n("smoothScrollTargetReached"),c=t("totalListHeight"),u=t("deviation"),g=t("customScrollParent"),h=t("context"),{scrollByCallback:m,scrollerRef:f,scrollToCallback:b}=bh(s,d,l,Kc,g);return fh((()=>(f.current=g||window,()=>{f.current=null})),[f,g]),r("windowScrollTo",b),r("scrollBy",m),e(l,{"data-virtuoso-scroller":!0,style:{position:"relative",...i,...0!==c?{height:c+u}:{}},...a,...zh(l,h),children:o})}))}const _h=({children:r})=>{const t=o.useContext(hh),n=Yh("viewportHeight"),i=Yh("fixedItemHeight"),a=Vh("alignToBottom"),s=Vh("horizontalDirection"),l=ku(o.useMemo((()=>Uc(n,(e=>ag(e,s?"width":"height")))),[n,s]),!0,Vh("skipAnimationFrameInResizeObserver"));return o.useEffect((()=>{t&&(n(t.viewportHeight),i(t.itemHeight))}),[t,n,i]),e("div",{"data-viewport-type":"element",ref:l,style:Oh(a),children:r})},Rh=({children:r})=>{const t=o.useContext(hh),n=Yh("windowViewportRect"),i=Yh("fixedItemHeight"),a=Vh("customScrollParent"),s=Au(n,a,Vh("skipAnimationFrameInResizeObserver")),l=Vh("alignToBottom");return o.useEffect((()=>{t&&(i(t.itemHeight),n({offsetTop:0,visibleHeight:t.viewportHeight,visibleWidth:100}))}),[t,n,i]),e("div",{"data-viewport-type":"window",ref:s,style:Oh(l),children:r})},Hh=({children:r})=>{const t=Vh("TopItemListComponent")||"div",n=Vh("headerHeight"),o={...Th,marginTop:`${n}px`},i=Vh("context");return e(t,{style:o,...zh(t,i),children:r})},Ph=o.memo((function(t){const n=Vh("useWindowScroll"),o=Vh("topItemsIndexes").length>0,i=Vh("customScrollParent"),a=Vh("context"),s=i||n?qh:Uh,l=i||n?Rh:_h;return r(s,{...t,...zh(s,a),children:[o&&e(Hh,{children:e(Dh,{showTopList:!0})}),r(l,{children:[e(Ih,{}),e(Dh,{}),e(Mh,{})]})]})})),{Component:Wh,useEmitter:Nh,useEmitterValue:Vh,usePublisher:Yh}=gh(Fh,{events:{atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",endReached:"endReached",groupIndices:"groupIndices",isScrolling:"isScrolling",itemsRendered:"itemsRendered",rangeChanged:"rangeChanged",startReached:"startReached",totalListHeightChanged:"totalListHeightChanged"},methods:{autoscrollToBottom:"autoscrollToBottom",getState:"getState",scrollBy:"scrollBy",scrollIntoView:"scrollIntoView",scrollTo:"scrollTo",scrollToIndex:"scrollToIndex"},optional:{alignToBottom:"alignToBottom",atBottomThreshold:"atBottomThreshold",atTopThreshold:"atTopThreshold",components:"components",computeItemKey:"computeItemKey",context:"context",customScrollParent:"customScrollParent",data:"data",defaultItemHeight:"defaultItemHeight",firstItemIndex:"firstItemIndex",fixedItemHeight:"fixedItemHeight",followOutput:"followOutput",groupContent:"groupContent",groupCounts:"groupCounts",headerFooterTag:"HeaderFooterTag",horizontalDirection:"horizontalDirection",increaseViewportBy:"increaseViewportBy",initialItemCount:"initialItemCount",initialScrollTop:"initialScrollTop",initialTopMostItemIndex:"initialTopMostItemIndex",itemContent:"itemContent",itemSize:"itemSize",logLevel:"logLevel",overscan:"overscan",restoreStateFrom:"restoreStateFrom",scrollerRef:"scrollerRef",scrollSeekConfiguration:"scrollSeekConfiguration",skipAnimationFrameInResizeObserver:"skipAnimationFrameInResizeObserver",topItemCount:"topItemCount",totalCount:"totalCount",useWindowScroll:"useWindowScroll"},required:{}},Ph),Uh=jh({useEmitter:Nh,useEmitterValue:Vh,usePublisher:Yh}),qh=Lh({useEmitter:Nh,useEmitterValue:Vh,usePublisher:Yh}),Gh=Wh,Zh={bottom:0,itemHeight:0,items:[],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},Kh={bottom:0,itemHeight:0,items:[{index:0}],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},{ceil:Xh,floor:Qh,max:Jh,min:em,round:rm}=Math;function tm(e,r,t){return Array.from({length:r-e+1}).map(((r,n)=>({data:null===t?null:t[n+e],index:n+e})))}function nm(e,r){return e&&e.width===r.width&&e.height===r.height}function om(e,r){return e&&e.column===r.column&&e.row===r.row}const im=wu((([{increaseViewportBy:e,listBoundary:r,overscan:t,visibleRange:n},{footerHeight:o,headerHeight:i,scrollBy:a,scrollContainerState:s,scrollTo:l,scrollTop:d,smoothScrollTargetReached:c,viewportHeight:u},g,h,{didMount:m,propsReady:f},{customScrollParent:b,useWindowScroll:p,windowScrollContainerState:y,windowScrollTo:v,windowViewportRect:x},w])=>{const F=pu(0),$=pu(0),C=pu(Zh),E=pu({height:0,width:0}),S=pu({height:0,width:0}),D=vu(),B=vu(),k=pu(0),O=pu(null),T=pu({column:0,row:0}),z=vu(),A=vu(),I=pu(!1),M=pu(0),j=pu(!0),L=pu(!1),_=pu(!1);eu(gu(m,bu(M),du((([e,r])=>!!r))),(()=>{ru(j,!1)})),eu(gu($u(m,j,S,E,M,L),du((([e,r,t,n,,o])=>e&&!r&&0!==t.height&&0!==n.height&&!o))),(([,,,,e])=>{ru(L,!0),Dg(1,(()=>{ru(D,e)})),iu(gu(d),(()=>{ru(r,[0,0]),ru(j,!0)}))})),ou(gu(A,du((e=>null!=e&&e.scrollTop>0)),uu(0)),$),eu(gu(m,bu(A),du((([,e])=>null!=e))),(([,e])=>{e&&(ru(E,e.viewport),ru(S,e.item),ru(T,e.gap),e.scrollTop>0&&(ru(I,!0),iu(gu(d,mu(1)),(e=>{ru(I,!1)})),ru(l,{top:e.scrollTop})))})),ou(gu(E,cu((({height:e})=>e))),u),ou(gu($u(Cu(E,nm),Cu(S,nm),Cu(T,((e,r)=>e&&e.column===r.column&&e.row===r.row)),Cu(d)),cu((([e,r,t,n])=>({gap:t,item:r,scrollTop:n,viewport:e})))),z),ou(gu($u(Cu(F),n,Cu(T,om),Cu(S,nm),Cu(E,nm),Cu(O),Cu($),Cu(I),Cu(j),Cu(M)),du((([,,,,,,,e])=>!e)),cu((([e,[r,t],n,o,i,a,s,,l,d])=>{const{column:c,row:u}=n,{height:g,width:h}=o,{width:m}=i;if(0===s&&(0===e||0===m))return Zh;if(0===h){const r=Bg(d,e);return function(e){return{...Kh,items:e}}(tm(r,r+Math.max(s-1,0),a))}const f=am(m,h,c);let b,p;l?0===r&&0===t&&s>0?(b=0,p=s-1):(b=f*Qh((r+u)/(g+u)),p=f*Xh((t+u)/(g+u))-1,p=em(e-1,Jh(p,f-1)),b=em(p,Jh(0,b))):(b=0,p=-1);const y=tm(b,p,a),{bottom:v,top:x}=sm(i,n,o,y),w=Xh(e/f);return{bottom:v,itemHeight:g,items:y,itemWidth:h,offsetBottom:w*g+(w-1)*u-v,offsetTop:x,top:x}}))),C),ou(gu(O,du((e=>null!==e)),cu((e=>e.length))),F),ou(gu($u(E,S,C,T),du((([e,r,{items:t}])=>t.length>0&&0!==r.height&&0!==e.height)),cu((([e,r,{items:t},n])=>{const{bottom:o,top:i}=sm(e,n,r,t);return[i,o]})),lu(tg)),r);const R=pu(!1);ou(gu(d,bu(R),cu((([e,r])=>r||0!==e))),R);const H=xu(gu($u(C,F),du((([{items:e}])=>e.length>0)),bu(R),du((([[e,r],t])=>{const n=e.items[e.items.length-1].index===r-1;return(t||e.bottom>0&&e.itemHeight>0&&0===e.offsetBottom&&e.items.length===r)&&n})),cu((([[,e]])=>e-1)),lu())),P=xu(gu(Cu(C),du((({items:e})=>e.length>0&&0===e[0].index)),uu(0),lu())),W=xu(gu(Cu(C),bu(I),du((([{items:e},r])=>e.length>0&&!r)),cu((([{items:e}])=>({endIndex:e[e.length-1].index,startIndex:e[0].index}))),lu(rg),fu(0)));ou(W,h.scrollSeekRangeChanged),ou(gu(D,bu(E,S,F,T),cu((([e,r,t,n,o])=>{const i=Eg(e),{align:a,behavior:s,offset:l}=i;let d=i.index;"LAST"===d&&(d=n-1),d=Jh(0,d,em(n-1,d));let c=lm(r,o,t,d);return"end"===a?c=rm(c-r.height+t.height):"center"===a&&(c=rm(c-r.height/2+t.height/2)),l&&(c+=l),{behavior:s,top:c}}))),l);const N=yu(gu(C,cu((e=>e.offsetBottom+e.bottom))),0);return ou(gu(x,cu((e=>({height:e.visibleHeight,width:e.visibleWidth})))),E),{customScrollParent:b,data:O,deviation:k,footerHeight:o,gap:T,headerHeight:i,increaseViewportBy:e,initialItemCount:$,itemDimensions:S,overscan:t,restoreStateFrom:A,scrollBy:a,scrollContainerState:s,scrollHeight:B,scrollTo:l,scrollToIndex:D,scrollTop:d,smoothScrollTargetReached:c,totalCount:F,useWindowScroll:p,viewportDimensions:E,windowScrollContainerState:y,windowScrollTo:v,windowViewportRect:x,...h,gridState:C,horizontalDirection:_,initialTopMostItemIndex:M,totalListHeight:N,...g,endReached:H,propsReady:f,rangeChanged:W,startReached:P,stateChanged:z,stateRestoreInProgress:I,...w}}),Jc(Hg,Iu,Ig,eh,$g,rh,Bu));function am(e,r,t){return Jh(1,Qh((e+t)/(Qh(r)+t)))}function sm(e,r,t,n){const{height:o}=t;if(void 0===o||0===n.length)return{bottom:0,top:0};const i=lm(e,r,t,n[0].index);return{bottom:lm(e,r,t,n[n.length-1].index)+o,top:i}}function lm(e,r,t,n){const o=am(e.width,t.width,r.column),i=Qh(n/o),a=i*t.height+Jh(0,i-1)*r.row;return a>0?a+r.row:a}const dm=wu((()=>{const e=pu((e=>`Item ${e}`)),r=pu({}),t=pu(null),n=pu("virtuoso-grid-item"),o=pu("virtuoso-grid-list"),i=pu(xh),a=pu("div"),s=pu(Kc),l=(e,t=null)=>yu(gu(r,cu((r=>r[e])),lu()),t),d=pu(!1),c=pu(!1);return ou(Cu(c),d),{components:r,computeItemKey:i,context:t,FooterComponent:l("Footer"),HeaderComponent:l("Header"),headerFooterTag:a,itemClassName:n,ItemComponent:l("Item","div"),itemContent:e,listClassName:o,ListComponent:l("List","div"),readyStateChanged:d,reportReadyState:c,ScrollerComponent:l("Scroller","div"),scrollerRef:s,ScrollSeekPlaceholder:l("ScrollSeekPlaceholder","div")}})),cm=wu((([e,r])=>({...e,...r})),Jc(im,dm)),um=o.memo((function(){const r=vm("gridState"),t=vm("listClassName"),n=vm("itemClassName"),i=vm("itemContent"),a=vm("computeItemKey"),s=vm("isSeeking"),l=xm("scrollHeight"),d=vm("ItemComponent"),c=vm("ListComponent"),u=vm("ScrollSeekPlaceholder"),g=vm("context"),h=xm("itemDimensions"),m=xm("gap"),f=vm("log"),b=vm("stateRestoreInProgress"),p=xm("reportReadyState"),v=ku(o.useMemo((()=>e=>{const r=e.parentElement.parentElement.scrollHeight;l(r);const t=e.firstChild;if(t){const{height:e,width:r}=t.getBoundingClientRect();h({height:e,width:r})}m({column:$m("column-gap",getComputedStyle(e).columnGap,f),row:$m("row-gap",getComputedStyle(e).rowGap,f)})}),[l,h,m,f]),!0,!1);return fh((()=>{r.itemHeight>0&&r.itemWidth>0&&p(!0)}),[r]),b?null:e(c,{className:t,ref:v,...zh(c,g),"data-testid":"virtuoso-item-list",style:{paddingBottom:r.offsetBottom,paddingTop:r.offsetTop},children:r.items.map((t=>{const o=a(t.index,t.data,g);return s?e(u,{...zh(u,g),height:r.itemHeight,index:t.index,width:r.itemWidth},o):y(d,{...zh(d,g),className:n,"data-index":t.index,key:o},i(t.index,t.data,g))}))})})),gm=o.memo((function(){const r=vm("HeaderComponent"),t=xm("headerHeight"),n=vm("headerFooterTag"),i=ku(o.useMemo((()=>e=>{t(ag(e,"height"))}),[t]),!0,!1),a=vm("context");return r?e(n,{ref:i,children:e(r,{...zh(r,a)})}):null})),hm=o.memo((function(){const r=vm("FooterComponent"),t=xm("footerHeight"),n=vm("headerFooterTag"),i=ku(o.useMemo((()=>e=>{t(ag(e,"height"))}),[t]),!0,!1),a=vm("context");return r?e(n,{ref:i,children:e(r,{...zh(r,a)})}):null})),mm=({children:r})=>{const t=o.useContext(mh),n=xm("itemDimensions"),i=xm("viewportDimensions"),a=ku(o.useMemo((()=>e=>{i(e.getBoundingClientRect())}),[i]),!0,!1);return o.useEffect((()=>{t&&(i({height:t.viewportHeight,width:t.viewportWidth}),n({height:t.itemHeight,width:t.itemWidth}))}),[t,i,n]),e("div",{ref:a,style:Oh(!1),children:r})},fm=({children:r})=>{const t=o.useContext(mh),n=xm("windowViewportRect"),i=xm("itemDimensions"),a=vm("customScrollParent"),s=Au(n,a,!1);return o.useEffect((()=>{t&&(i({height:t.itemHeight,width:t.itemWidth}),n({offsetTop:0,visibleHeight:t.viewportHeight,visibleWidth:t.viewportWidth}))}),[t,n,i]),e("div",{ref:s,style:Oh(!1),children:r})},bm=o.memo((function({...t}){const n=vm("useWindowScroll"),o=vm("customScrollParent"),i=o||n?Fm:wm,a=o||n?fm:mm,s=vm("context");return e(i,{...t,...zh(i,s),children:r(a,{children:[e(gm,{}),e(um,{}),e(hm,{})]})})})),{Component:pm,useEmitter:ym,useEmitterValue:vm,usePublisher:xm}=gh(cm,{events:{atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",endReached:"endReached",isScrolling:"isScrolling",rangeChanged:"rangeChanged",readyStateChanged:"readyStateChanged",startReached:"startReached",stateChanged:"stateChanged"},methods:{scrollBy:"scrollBy",scrollTo:"scrollTo",scrollToIndex:"scrollToIndex"},optional:{components:"components",computeItemKey:"computeItemKey",context:"context",customScrollParent:"customScrollParent",data:"data",headerFooterTag:"headerFooterTag",increaseViewportBy:"increaseViewportBy",initialItemCount:"initialItemCount",initialTopMostItemIndex:"initialTopMostItemIndex",itemClassName:"itemClassName",itemContent:"itemContent",listClassName:"listClassName",logLevel:"logLevel",overscan:"overscan",restoreStateFrom:"restoreStateFrom",scrollerRef:"scrollerRef",scrollSeekConfiguration:"scrollSeekConfiguration",totalCount:"totalCount",useWindowScroll:"useWindowScroll"}},bm),wm=jh({useEmitter:ym,useEmitterValue:vm,usePublisher:xm}),Fm=Lh({useEmitter:ym,useEmitterValue:vm,usePublisher:xm});function $m(e,r,t){return"normal"!==r&&!(null!=r&&r.endsWith("px"))&&t(`${e} was not resolved to pixel value correctly`,r,Su.WARN),"normal"===r?0:parseInt(null!=r?r:"0",10)}const Cm=e=>"small"===e?2.5:3;F.div`
    position: relative;
    width: 100%;
    ${e=>{const r=Cm(e.$variant);return $`
            min-height: ${r}rem;
            height: ${r}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`;const Em=$`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${$i["spacing-16"]};
    // exclude top and bottom borders
    height: calc(${e=>Cm(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${Ci.sm};
    border: none;
    background: transparent;

    &:focus,
    &:active {
        outline: none;
    }

    &:focus-visible {
        outline: 2px solid ${vi["border-focus"]};
    }
`,Sm=F.button`
    ${Em}
    cursor: pointer;
`;F.div`
    ${Em}
`;const Dm=E`
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
`;F.div`
    position: relative;
    border: ${Fi["width-010"]} ${Fi.solid} ${vi.border};
    border-radius: ${Ci.sm};
    background: ${vi.bg};
    overflow: hidden;

    &:focus-within {
        border-color: ${vi["border-focus"]};
        box-shadow: 0px 0px 4px 0px
            rgb(from ${vi["border-focus"]} r g b / 50%) inset; // TODO: confirm shadow
    }

    ${e=>e.$expanded?$`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:$`
                animation: ${Dm} 0.5s ease-in-out;
            `}

    ${e=>e.$disabled?$`
                background: ${vi["bg-disabled"]};

                ${Sm} {
                    cursor: not-allowed;
                }

                &:focus-within {
                    border-color: ${vi.border};
                    box-shadow: none;
                }
            `:e.$readOnly?$`
                border: none;
                background: transparent !important;

                ${Sm} {
                    padding: 0;
                }

                &:focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.$error?$`
                border-color: ${vi["border-error"]};

                &:focus-within {
                    border-color: ${vi["border-error"]};
                    box-shadow: 0px 0px 4px 0px
                        rgb(from ${vi["border-error"]} r g b / 50%) inset; // TODO: confirm shadow
                }
            `:void 0}
`,F.div`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${wi["duration-250"]} ${wi["ease-default"]};
    margin-left: ${$i["spacing-16"]};
`,F(X)`
    color: ${vi.icon};
`,F.div`
    height: 1px;
    background: ${vi.border};
    margin: 0 ${$i["spacing-8"]};
`;const Bm=F.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return $`
                color: ${vi["text-disabled"]};
            `}}
`,km=F.div`
    ${e=>"small"===e.$variant?xi["body-md-regular"]:xi["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.$truncateType)return $`
                    ${Ri(1)}
                `}}
    overflow: hidden;
`,Om=F(km)`
    color: ${vi["text-subtler"]};
`,Tm=e=>"right"===e?"bottom-end":"bottom-start",zm=f({elementWidth:0,styles:{},setFloatingRef:()=>{},getFloatingProps:()=>({})}),Am=({enabled:n,isOpen:o,onOpen:i,onClose:l,onDismiss:d,renderElement:c,renderDropdown:u,customZIndex:h,clickToToggle:m=!1,offset:f=0,alignment:p="left",fitAvailableHeight:y,rootNode:v,positionRef:x})=>{var w;const F=b(S),$=Si["sm-max"]({theme:F}),C=a(null),{width:E=0}=Sr({targetRef:null!=x?x:C,handleHeight:!1}),D={name:"center",fn:({x:e,rects:r})=>{const t=0===e||e+r.floating.width===window.innerWidth,n=window.innerWidth<$;return{x:t&&n?(window.innerWidth-r.floating.width)/2:e}}},{refs:B,floatingStyles:k,context:T}=I({open:o,onOpenChange:(e,r,t)=>{"escape-key"===t?null==d||d():e&&!o?null==i||i():!e&&o&&(null==l||l(t))},whileElementsMounted:R,placement:Tm(p),middleware:[H(f),P(),W({limiter:N()}),V({apply({availableHeight:e,elements:r}){!y||e>=r.floating.scrollHeight?r.floating.style.setProperty("--available-height",""):r.floating.style.setProperty("--available-height",`${Math.max(0,e)}px`)}}),D]}),z=(()=>{const[e,r]=s(void 0),t=O();return g((()=>{if(!t)return void r(void 0);const e=e=>{r(e.zIndex)};return t.events.on(ra.Change,e),t.events.emit(ra.Ready),()=>t.events.off(ra.Change,e)}),[t]),e})(),{isMounted:A,styles:M}=Y(T,{initial:{opacity:0},open:{opacity:1},duration:300}),G=U(T,{enabled:n,toggle:m,keyboardHandlers:m}),Z=j(T,{enabled:n}),{getReferenceProps:K,getFloatingProps:X}=L([G,Z]),Q={elementWidth:E,styles:Object.assign(Object.assign(Object.assign({},M),k),{zIndex:null!==(w=null!=h?h:z)&&void 0!==w?w:50}),setFloatingRef:B.setFloating,getFloatingProps:X};return r(t,{children:[e("div",Object.assign({ref:e=>{C.current=e,B.setReference(e)}},K(),{children:c()})),A&&e(q,{root:v,children:e(_,{context:T,modal:!1,initialFocus:-1,returnFocus:!1,children:e(zm.Provider,{value:Q,children:u(Q)})})})]})},Im=o.createContext({focusedIndex:-1,setFocusedIndex:()=>{}}),Mm=({children:r})=>{const[t,n]=s(-1);return e(Im.Provider,{value:{focusedIndex:t,setFocusedIndex:n},children:r})},jm=$`
    outline-offset: -1px;
    outline: ${Fi["width-020"]} ${Fi.solid} ${vi["border-focus"]};
`,Lm=$`
    outline-color: ${vi["border-focus"]};
`,_m=$`
    outline-color: ${vi["border-disabled"]};
`,Rm=$`
    outline-color: ${vi["border-error-focus"]};
`,Hm=$`
    outline: none;
`,Pm=F.div`
    border: ${Fi["width-010"]} ${Fi.solid} ${vi.border};
    border-radius: ${Ci.sm};
    background: ${vi.bg};

    &:focus-within {
        ${jm}
    }
    ${e=>e.$focused&&!e.$noBorder&&jm}

    ${e=>e.$readOnly?$`
                border-color: transparent;
                padding: 0;
                background: transparent !important;

                &:focus-within {
                    ${Lm}
                }
                ${e.$focused&&Lm}
            `:e.$disabled?$`
                background: ${vi["bg-disabled"]};
                cursor: not-allowed;

                &:focus-within {
                    ${_m}
                }
                ${e.$focused&&_m}
            `:e.$error?$`
                border-color: ${vi["border-error"]};

                &:focus-within {
                    ${Rm}
                }
                ${e.$focused&&Rm}
            `:void 0}
    ${e=>{if(e.$noBorder)return $`
                border-color: transparent;
                &:focus-within {
                    ${Hm}
                }
            `}}
`;F(Pm)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 ${$i["spacing-16"]} 0
        ${e=>e.$readOnly?"0":$i["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`;const Wm=F.input`
    ${e=>"small"===e.$variant?xi["body-md-regular"]:xi["body-baseline-regular"]}
    color: ${vi.text};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    &:disabled {
        color: ${vi["text-subtler"]};

        &:hover {
            cursor: not-allowed;
        }
    }

    &::placeholder,
    &::-webkit-input-placeholder {
        color: ${vi["text-subtler"]};
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
`,Nm=F.button`
    background: transparent;
    border: none;
    outline: none;

    &:focus,
    &:active {
        outline: none;
    }

    &:focus-visible {
        outline: ${Fi["width-010"]} ${Fi.solid}
            ${vi["border-focus"]};
        border-radius: ${Ci.sm};
    }
`,Vm=F.div`
    border: ${Fi["width-010"]} ${Fi.solid} ${vi.border};
    border-radius: ${Ci.sm};
    background: ${vi.bg};

    --x-spacing: 0px;
    --available-width: calc(100vw - var(--x-spacing) * 2);

    ${Di.MaxWidth.sm} {
        --x-spacing: ${Si["sm-margin"]}px;
        max-height: 15rem;
    }

    ${Di.MaxWidth.xs} {
        --x-spacing: ${Si["xs-margin"]}px;
    }

    ${Di.MaxWidth.xxs} {
        --x-spacing: ${Si["xxs-margin"]}px;
    }

    max-width: var(--available-width);

    ${e=>e.$customWidth?`width: ${e.$customWidth};`:e.$width?`width: ${e.$width}px; min-width: min(23rem, var(--available-width));`:"min-width: min(23rem, var(--available-width));"}

    max-height: min(27rem, var(--available-height, infinity * 1px));
    overflow: hidden;
    overflow-y: auto;
    ${e=>"small"===e.$variant?xi["body-md-regular"]:xi["body-baseline-regular"]}

    &::-webkit-scrollbar {
        width: 14px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: ${vi["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: ${Ci.full};
        background-clip: padding-box;
    }
`,Ym=F.div`
    background: transparent;
    padding: ${$i["spacing-8"]};
`,Um=F.ul`
    list-style-type: none;
`,qm=F.li`
    display: flex;
    align-items: flex-start;
    gap: ${$i["spacing-8"]};
    padding: ${$i["spacing-12"]} ${$i["spacing-8"]};
    cursor: pointer;
    border: none;
    border-radius: ${Ci.none};
    outline: none;

    ${e=>e.$disabled?$`
                cursor: not-allowed;
            `:e.$active&&e.$selected?$`
                background: ${vi["bg-hover"]};
            `:e.$active?$`
                background: ${vi["bg-hover-subtle"]};
            `:void 0}
`,Gm=F(re)`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
    color: ${vi["icon-selected"]};
`,Zm=F.div`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
`,Km=F(ee)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${vi["icon-selected"]};
`,Xm=F(Q)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${vi["icon-primary-subtlest"]};
`,Qm=F(J)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${vi["icon-disabled-subtle"]};
`,Jm=F.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`,ef=F(Nm)`
    cursor: pointer;
    overflow: hidden;
    color: ${vi["text-primary"]};
    font-size: inherit;
`,rf=F(ef)`
    ${xi["body-baseline-semibold"]}
`,tf=F(ef)`
    ${xi["body-md-semibold"]}
    padding: ${$i["spacing-8"]} ${$i["spacing-8"]};
`,nf=F.div`
    width: 100%;
    display: flex;
    padding: ${$i["spacing-12"]} ${$i["spacing-16"]};
    align-items: center;
`,of=F(K)`
    margin-right: ${$i["spacing-4"]};
    color: ${vi["icon-error"]};
    height: 1em;
    width: 1em;
`,af=F(Aa)`
    margin-right: ${$i["spacing-8"]};
    color: ${vi.icon};
`,sf=F.div`
    ${Qi()}
    color: ${vi["text-subtle"]};
    padding: 0 ${$i["spacing-16"]} ${$i["spacing-12"]}
        ${$i["spacing-16"]};
`,lf=F.div`
    background: ${vi["bg-strong"]};
    border-radius: ${Ci.sm};
    display: flex;
    align-items: center;

    ${e=>"small"===e.$variant?xi["body-md-regular"]:xi["body-baseline-regular"]}
`,df=F.label`
    flex: 1;
    display: flex;
    align-items: center;
    gap: ${$i["spacing-8"]};
    padding: ${e=>"small"===e.$variant?$`
                  ${$i["spacing-8"]} ${$i["spacing-16"]}
              `:$`10px ${$i["spacing-16"]}`};
`,cf=F(Wm)`
    flex: 1;
`,uf=F(te)`
    color: ${vi.icon};
    flex-shrink: 0;
    height: 1em;
    width: 1em;
`,gf=F(Zi)`
    flex-shrink: 0;
    align-self: stretch;
    box-sizing: content-box;
    padding: ${$i["spacing-8"]};
    margin-left: -${$i["spacing-8"]};
    color: ${vi.icon};
    cursor: pointer;
    font-size: inherit;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`,hf=v(((t,n)=>{var{value:o,variant:i,onClear:a}=t,s=oe(t,["value","variant","onClear"]);return r(lf,{$variant:i,children:[r(df,{$variant:i,children:[e(uf,{"aria-hidden":!0}),e(cf,Object.assign({ref:n,value:o,$variant:i},s))]}),o&&e(gf,{"aria-label":"Clear search",focusOutline:"browser",onClick:a,children:e(k,{"aria-hidden":!0})})]})})),mf=({listItems:n,multiSelect:o,maxSelectable:i,selectedItems:l,disableItemFocus:d,itemsLoadState:c="success",itemTruncationType:u="end",itemMaxLines:h=2,labelDisplayType:f="inline",variant:p="default",listboxId:y,matchElementWidth:v=!1,width:x,topScrollItem:w,onSelectItem:F,onSelectAll:$,onDismiss:C,onRetry:E,valueExtractor:S,listExtractor:D,renderListItem:B,renderCustomCallToAction:k,enableSearch:O,hideNoResultsDisplay:T,noResultsDescription:z,customLabels:A,searchPlaceholder:I,searchFunction:M,onSearch:j})=>{const{noResultsLabel:L="No results found.",selectAllButtonLabel:_="Select all",clearAllButtonLabel:R="Clear all"}=A||{},H=(null==A?void 0:A.searchPlaceholder)||I||"Search",P=(null==A?void 0:A.noResultsDescription)||z,{focusedIndex:W,setFocusedIndex:N}=b(Im),{elementWidth:V,setFloatingRef:Y,getFloatingProps:U,styles:q}=b(zm),[G,Z]=s(""),[K,X]=s(null!=n?n:[]),Q=kr(c),J=(()=>{const[e,r]=s(!1);return g((()=>{r(!0)}),[]),e})(),ee=a(null),re=a(null),te=a([]),ne=a(null),oe=a(null),ie=!!i&&!!l&&(null==l?void 0:l.length)===i,ae=e=>{const r=D?D(e):null==e?void 0:e.toString();return"object"==typeof r?{title:r.title,secondaryLabel:r.secondaryLabel}:{title:null!=r?r:""}},se=m((e=>!!Pc(l,(r=>Nc(r,e)))),[l]),le=Dr((()=>null==M?void 0:M(G))),de=Dr((()=>null==n?void 0:n.filter((e=>{const{title:r,secondaryLabel:t}=ae(e),n=G.trim().toLowerCase();return r.toLowerCase().includes(n)||t&&t.toLowerCase().includes(n)})))),ce=(e,r)=>{ie&&!se(e)||(N(r),null==F||F(e,(e=>S?S(e):e)(e)))},ue=e=>{const r=e.target.value;Z(r),null==j||j()},ge=()=>{var e;Z(""),null===(e=ne.current)||void 0===e||e.focus(),null==j||j()},he=()=>{null==E||E()};((e,r,t="window",n)=>{const o=a();g((()=>{o.current=r}),[r]),g((()=>{let r;switch(t){case"window":r=window;break;case"document":r=document;break;default:r=t}if(!r||!r.addEventListener)return;const i=e=>{var r;return null===(r=o.current)||void 0===r?void 0:r.call(o,e)};return r.addEventListener(e,i,n),()=>{null==r||r.removeEventListener(e,i,n)}}),[e,t])})("keydown",(e=>{var r,t;switch(e.code){case"ArrowDown":if(e.preventDefault(),W<K.length-1){const e=W+1;null===(r=te.current[e])||void 0===r||r.focus(),N(e)}break;case"ArrowUp":if(e.preventDefault(),W>0){const e=W-1;null===(t=te.current[e])||void 0===t||t.focus(),N(e)}else 0===W&&ne.current&&(ne.current.focus(),N(-1));break;case"Space":case"Enter":document.activeElement===te.current[W]&&(e.preventDefault(),K[W]&&ce(K[W],W))}})),g((()=>{var e;if(!w)return void(null===(e=oe.current)||void 0===e||e.scrollTo({top:0}));const r=setTimeout((()=>{if(!n)return;const e=n.indexOf(w);oe.current&&-1!==e&&(oe.current.scrollToIndex({index:e}),N(e))}),0);return()=>clearTimeout(r)}),[te,n,N,w]),g((()=>{var e,r,t;if(J)return;if(d||!n)return;const o=n.findIndex((e=>se(e)));ne.current?(N(-1),setTimeout((()=>{var e;return null===(e=ne.current)||void 0===e?void 0:e.focus()}),200)):W>0?(null===(e=oe.current)||void 0===e||e.scrollToIndex({index:W,align:"center"}),setTimeout((()=>{var e;return null===(e=te.current[W])||void 0===e?void 0:e.focus()}),200)):-1!==o?(null===(r=oe.current)||void 0===r||r.scrollToIndex({index:o,align:"center"}),N(o),setTimeout((()=>{var e;return null===(e=te.current[o])||void 0===e?void 0:e.focus()}),200)):(null===(t=oe.current)||void 0===t||t.scrollToIndex({index:0}),N(0),setTimeout((()=>{var e;return null===(e=te.current[0])||void 0===e?void 0:e.focus()}),200))}),[se,d,W,n,J,N]),g((()=>{J&&Q&&(d||"success"===c&&ne.current&&(N(-1),ne.current.focus()))}),[J,Q,c,N,d]),g((()=>{var e;X(null!==(e=""===G?n:M?le():de())&&void 0!==e?e:[])}),[le,de,n,M,G]);const me=r=>o?e(ie&&!r?Qm:r?Km:Xm,{"aria-hidden":!0}):r?e(Gm,{"aria-hidden":!0}):e(Zm,{}),fe=(r,t)=>{const{title:n,secondaryLabel:o}=ae(r);return e(ds,{displayType:f,label:n,maxLines:h,selected:t,disabled:!t&&ie,sublabel:o,truncationType:u,variant:p})},be=(n,i)=>{if(!E||"success"===c){const a=se(n),s=i===W;return e(qm,{"aria-selected":a,"aria-multiselectable":o,"aria-disabled":!a&&ie,"aria-posinset":i+1,"aria-setsize":null==K?void 0:K.length,"data-testid":"list-item",onClick:()=>ce(n,i),onMouseEnter:()=>(e=>{N(e)})(i),ref:e=>{te.current[i]=e},role:"option",tabIndex:s?0:-1,$active:s,$selected:a,$disabled:!a&&ie,children:B?B(n,{selected:a}):r(t,{children:[me(a),fe(n,a)]})},((e,r)=>`item_${r}__${S?S(e):e}`)(n,i))}},pe=()=>{if((O||M)&&"success"===c)return e(hf,{ref:ne,onChange:ue,value:G,placeholder:H,"data-testid":"search-input","aria-label":"Enter text to search",onClear:ge,variant:p})},ye=()=>{if(l&&o&&K.length>0&&!G&&"success"===c)return e(Jm,{children:e(tf,{onClick:$,type:"button",$variant:p,children:i||0!==l.length?R:_})})},ve=()=>{if(!T&&(G||!O)&&0===K.length&&"success"===c)return r(t,{children:[r(nf,{"data-testid":"list-no-results",children:[e(of,{"data-testid":"no-result-icon"}),L]}),P&&e(sf,{"data-testid":"no-result-desc",children:P})]})},xe=()=>{if(E&&"loading"===c)return r(nf,{"data-testid":"list-loading",children:[e(af,{}),"Loading..."]})},we=()=>{if(E&&"fail"===c)return r(nf,{"data-testid":"list-fail",children:[e(of,{"data-testid":"load-error-icon"}),"Failed to load. ",e(rf,{onClick:he,type:"button",$variant:p,children:"Try again."})]})},Fe=()=>{var r;const t="test"===process.env.NODE_ENV;return e(Um,{role:"listbox",id:y,children:e(Gh,Object.assign({ref:oe,style:{height:"100%"},data:K,customScrollParent:null!==(r=ee.current)&&void 0!==r?r:void 0,itemContent:(e,r)=>be(r,e)},t?{initialItemCount:K.length}:{}),t?K.length:void 0)})};return r(Vm,Object.assign({"data-testid":"dropdown-container",ref:ke(ee,Y),style:q},U(),{$width:v?V:void 0,$customWidth:x,$variant:p,children:[r(Ym,{ref:re,"data-testid":"dropdown-list",children:[pe(),ye(),ve(),xe(),we(),Fe()]}),(()=>{if(k)return e("div",{"data-testid":"custom-cta",children:k(C,K)})})()]}))},ff=F(Nm)`
    display: flex;
    align-items: center;
    gap: ${$i["spacing-8"]};
    width: 100%;
    padding: ${e=>e.$readOnly?`0 ${$i["spacing-16"]}`:$i["spacing-16"]};

    ${e=>"small"===e.$variant?$`
                  ${xi["body-md-regular"]}
                  height: calc(2.5rem - 2px); // exclude top and bottom borders
              `:$`
                  ${xi["body-baseline-regular"]}
                  height: calc(3rem - 2px);
              `}

    &:disabled {
        cursor: not-allowed;
    }

    &:focus-visible {
        outline: 2px solid ${vi["focus-ring"]};
        outline-offset: -2px;
    }
`,bf=F.div`
    display: flex;
    align-items: center;
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${wi["duration-250"]} ${wi["ease-default"]};

    svg {
        color: ${vi.icon};
        height: 1em;
        width: 1em;
    }
`,pf=v(((t,n)=>{var{children:o,disabled:i,expanded:a,listboxId:s,popupRole:l,readOnly:d,variant:c}=t,u=oe(t,["children","disabled","expanded","listboxId","popupRole","readOnly","variant"]);return r(ff,Object.assign({ref:n,type:"button",role:"combobox","aria-expanded":a,"aria-haspopup":l,"aria-controls":a?s:void 0,"data-testid":"selector","aria-disabled":i,"aria-readonly":d,$variant:c,$readOnly:d},u,{children:[o,!d&&e(bf,{$expanded:a,$variant:c,children:e(X,{"aria-hidden":!0})})]}))}));F.li`
    display: ${e=>e.$visible?"flex":"none"};
`,F.div`
    flex: 1;
    display: flex;
    align-items: flex-start;
    gap: ${$i["spacing-8"]};
    padding: ${$i["spacing-12"]} ${$i["spacing-8"]};
    cursor: ${e=>e.$toggleable?"default":"pointer"};
    overflow: hidden; // required for label to truncate properly
    border-radius: ${Ci.none};
    outline: none;

    ${e=>e.$active&&$`
            background: ${vi["bg-hover"]};
        `}
`,F.div`
    height: 1px;
    width: calc((1lh + ${$i["spacing-8"]}) * ${e=>e.$level});
`,F.div`
    width: 1lh;
    height: 1lh;
    color: ${vi["icon-primary"]};
    cursor: pointer;

    svg {
        width: 1lh;
        height: 1lh;
        transition: transform ${wi["duration-350"]}
            ${wi["ease-standard"]};

        ${e=>{if(e.$expanded)return $`
                    transform: rotate(90deg);
                `}}
    }
`,F.div`
    width: 1lh;
    height: 1lh;
    margin-right: ${$i["spacing-8"]};
`,F.div`
    flex-shrink: 0;
    height: 1lh;
    width: ${e=>e.$hasNestedSiblings?"1lh":$i["spacing-16"]};

    display: flex;
    justify-content: center;
`,F(ne)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${vi["icon-selected"]};
`;const yf=F(Wm)`
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders

    ${e=>"no-border"!==e.$styleType&&$`
            padding-left: ${e.$visuallyReadOnly?0:$i["spacing-16"]};
            padding-right: ${e.$visuallyReadOnly||e.$showClear?0:$i["spacing-16"]};
        `}
`,vf=F(Nm)`
    height: auto;
    padding: ${$i["spacing-12"]} ${$i["spacing-16"]};

    cursor: pointer;
    color: ${vi.icon};

    ${e=>"no-border"===e.$styleType&&$`
            margin-right: -${$i["spacing-12"]};
        `}
`,xf=F(k)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`,wf=F.div`
    display: flex;
    width: 100%;
`,Ff=F(Pm)`
    display: flex;
    align-items: center;
    width: 100%;
`,$f=o.forwardRef(((n,o)=>{var{value:i,spacing:s,type:l,error:d,disabled:c,readOnly:u,onChange:g,onClear:h,allowClear:m=!1,className:f,styleType:b="bordered"}=n,p=oe(n,["value","spacing","type","error","disabled","readOnly","onChange","onClear","allowClear","className","styleType"]);const y=((e,r)=>"tel"===e&&!!r)(l,s),v=a(null);x(o,(()=>v.current),[]);const w=Br({ref:v,formatter:e=>y?Te.transformWithSpaces(e,s):e}),F=e=>{g&&(y?C(e):g(e))},$=()=>{h&&h(),v&&v.current&&v.current.focus()},C=e=>{const r=w();if(!r)return;const{nextValue:t,updateCaretPosition:n}=r,o=t.replace(/\s/g,"");e.target.value=o,null==g||g(e),n()},E=i?(e=>e?y?Te.transformWithSpaces(e,s):e:"")(i):i,S=m&&!c&&!u&&!!i,D=()=>r(t,{children:[e(yf,Object.assign({"data-testid":"input",ref:v,"aria-disabled":c,value:E,onChange:F,type:l,readOnly:u||c,$showClear:S,$styleType:b,$visuallyReadOnly:u},p)),S&&e(vf,{onClick:$,type:"button","aria-label":"Clear input",$styleType:b,children:e(xf,{"aria-hidden":!0})})]});return e(t,{children:"no-border"===b?e(wf,{className:f,children:D()}):e(Ff,{$disabled:c,$error:d,$readOnly:u,className:f,children:D()})})})),Cf=F(Pm)`
    display: flex;
    align-items: center;

    ${e=>"right"===e.$position?$`
                    flex-direction: row-reverse;
                `:$`
                    flex-direction: row;
                `}
`,Ef=F.div`
    flex: 0 0 auto;
`,Sf=F($f)`
    ${e=>e.readOnly?$`
                padding: 0;
            `:"right"===e.$position?$`
                    padding-left: ${$i["spacing-16"]};
                `:$`
                    padding-right: ${$i["spacing-16"]};
                `}
`,Df=F.div`
    padding: 10px 0; // TODO: confirm vertical spacing
    display: flex;
    align-items: center;
    padding: 0;
    background: transparent;
    margin-right: ${$i["spacing-12"]};
    color: ${vi.text};
`,Bf=F.div`
    width: 1px;
    background: ${vi.border};
    flex-shrink: 0;
    height: 1.25rem;

    ${e=>{if(e.$readOnly)return $`
                display: none;
            `}}

    ${e=>"right"===e.$position?$`
                    margin-left: ${$i["spacing-12"]};
                `:$`
                    margin-right: ${$i["spacing-12"]};
                `}
`,kf=o.forwardRef(((t,n)=>{var{addon:o,error:i,onChange:l,readOnly:d,disabled:c,className:u,onBlur:h,noBorder:m,"data-testid":f,"aria-labelledby":b,"aria-describedby":p,"aria-invalid":y,"aria-label":v}=t,x=oe(t,["addon","error","onChange","readOnly","disabled","className","onBlur","noBorder","data-testid","aria-labelledby","aria-describedby","aria-invalid","aria-label"]);const{valueExtractor:w,listExtractor:F,enableSearch:$,hideNoResultsDisplay:C,noResultsDescription:E,searchPlaceholder:S,searchFunction:D,onSearch:B,placeholder:k="Select",displayValueExtractor:O,"data-selector-testid":T,options:z,selectedOption:A,onSelectOption:I,optionsLoadState:M,optionTruncationType:j,onRetry:L,onHideOptions:_,onShowOptions:R,dropdownZIndex:H,dropdownRootNode:P,"aria-label":W}=o.attributes,{position:N}=o,[V,Y]=s(A),[U,q]=s(!1),[G,Z]=s(!1),[K]=s((()=>Oe.generate())),X=`${K}-listbox`,Q=`${K}-instruction`,J=`${K}-combobox-label`,ee=`${K}-textbox-label`,re=a(null),te=a(null);g((()=>{Y(A)}),[A]);const ne=()=>{if(V)return O?O(V):w?w(V):V.toString()},ie=e=>{e?null==R||R():null==_||_()},ae=(e,r)=>{var t;null===(t=te.current)||void 0===t||t.focus(),Y(e),q(!1),ie(!1),null==I||I(e,r)},se=()=>{U&&(q(!1),ie(!1))},le=()=>{q(!0),ie(!0),Z(!0)},de=e=>{q(!1),ie(!1),"click"!==e&&(Z(!1),null==h||h())},ce=()=>{var e;null===(e=te.current)||void 0===e||e.focus(),q(!1),ie(!1)},ue=()=>r("div",{children:[e(pf,{ref:te,disabled:c,expanded:U,listboxId:X,popupRole:"listbox",readOnly:d,"aria-labelledby":ts(b,J),"aria-describedby":ts(p,Q),"aria-invalid":y,children:e(Bm,{$disabled:c,children:V?e(km,{children:ne()}):e(Om,{children:k})})}),e(rs,{id:Q,children:"Press space to open options"})]}),ge=()=>e(mf,{listboxId:X,listItems:z,onSelectItem:ae,onDismiss:se,valueExtractor:w,listExtractor:F,enableSearch:$,hideNoResultsDisplay:C,noResultsDescription:E,searchPlaceholder:S,searchFunction:D,onSearch:B,selectedItems:V?[V]:[],itemsLoadState:M,itemTruncationType:j,onRetry:L,matchElementWidth:!0});return e(Mm,{children:r(Cf,{$focused:G,$disabled:c,$readOnly:d,$error:i,$position:N,ref:re,className:u,"data-testid":f,$noBorder:m,tabIndex:-1,onFocus:()=>{G||U||Z(!0)},onBlur:e=>{G&&!U&&re.current&&!re.current.contains(e.relatedTarget)&&(Z(!1),null==h||h())},children:[e(rs,{"aria-hidden":!0,id:J,children:W}),e(Ef,{"data-testid":T,children:d?V?e(Df,{"data-testid":"selector-label",tabIndex:0,role:"combobox","aria-haspopup":"listbox","aria-readonly":!0,"aria-expanded":!1,"aria-labelledby":b,"aria-describedby":p,"aria-invalid":y,children:e(km,{children:ne()})}):null:e(Am,{enabled:!d&&!c,isOpen:U,renderElement:ue,renderDropdown:ge,onOpen:le,onClose:de,onDismiss:ce,clickToToggle:!0,offset:8,alignment:"right"===N?"right":"left",fitAvailableHeight:!0,customZIndex:H,rootNode:P,positionRef:re})}),e(Bf,{$readOnly:d,$position:N}),e(rs,{"aria-hidden":!0,id:ee,children:v}),e(Sf,Object.assign({ref:n},x,{$position:N,readOnly:d,disabled:c,error:i,onChange:e=>{l&&l(e)},"data-testid":"input",styleType:"no-border","aria-labelledby":ts(b,ee),"aria-describedby":p,"aria-invalid":y}))]})})})),Of=F(Pm)`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0
        ${e=>e.$readOnly||e.$noBorder?"0":$i["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,Tf=F(Pm)`
    display: flex;
    position: relative;
    width: 100%;
    padding: 0
        ${e=>e.$readOnly||e.$noBorder?"0":$i["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,zf=F($f)``,Af=F.div`
    position: relative;
    display: flex;
    align-items: center;

    ${xi["body-baseline-regular"]}
    color: ${vi.text};

    /* SVG Icon */
    svg {
        height: 1em;
        width: 1em;
    }

    ${e=>{if(e.$disabled)return $`
                color: ${vi["text-subtler"]};
            `}}

    ${e=>"right"===e.$position?$`
                    margin-left: ${e.$readOnly?$i["spacing-4"]:$i["spacing-12"]};
                `:$`
                    margin-right: ${e.$readOnly?$i["spacing-4"]:$i["spacing-12"]};
                `};
`,If=o.forwardRef(((t,n)=>{var{addon:o,error:i,className:a}=t,s=oe(t,["addon","error","className"]);const l=()=>e(Tf,{$disabled:s.disabled,$error:i,$readOnly:s.readOnly,"data-testid":s["data-testid"],className:a,$noBorder:s.noBorder,children:e(zf,Object.assign({ref:n},s,{"data-testid":"input",styleType:"no-border"}))});if(!o)return l();{const{type:t="label",position:d="left"}=o,{allowClear:c}=s;switch(t){case"list":{const r=o.attributes;return r.options&&r.options.length>0?e(kf,Object.assign({ref:n,addon:o,error:i,className:a,noBorder:s.noBorder},s)):l()}case"custom":{const t=o.attributes;return t.children?r(Of,{$error:i,$disabled:s.disabled,$readOnly:s.readOnly,"data-testid":s["data-testid"],$position:d,className:a,$noBorder:s.noBorder,children:[e(Af,{"data-testid":"addon",$disabled:s.disabled,$readOnly:s.readOnly,$position:d,children:t.children}),e(zf,Object.assign({ref:n},s,{allowClear:c&&"right"!==d,error:i,"data-testid":"input",styleType:"no-border"}))]}):l()}default:{const t=o.attributes;return t.value?r(Of,{$disabled:s.disabled,$error:i,$readOnly:s.readOnly,"data-testid":s["data-testid"],$position:d,className:a,$noBorder:s.noBorder,children:[e(Af,{"data-testid":"addon",$disabled:s.disabled,$readOnly:s.readOnly,$position:d,children:t.value}),e(zf,Object.assign({ref:n},s,{allowClear:c&&"right"!==d,error:i,"data-testid":"input",styleType:"no-border"}))]}):l()}}}}));var Mf=function(e,r,t,n){var o=-1,i=null==e?0:e.length;for(n&&i&&(t=e[++o]);++o<i;)t=r(t,e[o],o,e);return t};var jf=function(e){return function(r,t,n){for(var o=-1,i=Object(r),a=n(r),s=a.length;s--;){var l=a[e?s:++o];if(!1===t(i[l],l,i))break}return r}},Lf=jf(),_f=ql;var Rf=Nl;var Hf=function(e,r){return function(t,n){if(null==t)return t;if(!Rf(t))return e(t,n);for(var o=t.length,i=r?o:-1,a=Object(t);(r?i--:++i<o)&&!1!==n(a[i],i,a););return t}}((function(e,r){return e&&Lf(e,r,_f)}));var Pf=Mf,Wf=Hf,Nf=vc,Vf=function(e,r,t,n,o){return o(e,(function(e,o,i){t=n?(n=!1,e):r(t,e,o,i)})),t},Yf=Ar;var Uf=se((function(e,r,t){var n=Yf(e)?Pf:Vf,o=arguments.length<3;return n(e,Nf(r),t,o,Wf)}));const qf=[["Afghanistan",["asia"],"af","93"],["Albania",["europe"],"al","355"],["Algeria",["africa","north-africa"],"dz","213"],["Andorra",["europe"],"ad","376"],["Angola",["africa"],"ao","244"],["Antigua and Barbuda",["america","carribean"],"ag","1268"],["Argentina",["america","south-america"],"ar","54","(..) ........"],["Armenia",["asia","ex-ussr"],"am","374",".. ......"],["Aruba",["america","carribean"],"aw","297"],["Australia",["oceania"],"au","61","(..) .... ...."],["Austria",["europe","eu-union"],"at","43"],["Azerbaijan",["asia","ex-ussr"],"az","994","(..) ... .. .."],["Bahamas",["america","carribean"],"bs","1242"],["Bahrain",["middle-east"],"bh","973"],["Bangladesh",["asia"],"bd","880"],["Barbados",["america","carribean"],"bb","1246"],["Belarus",["europe","ex-ussr"],"by","375","(..) ... .. .."],["Belgium",["europe","eu-union"],"be","32","... .. .. .."],["Belize",["america","central-america"],"bz","501"],["Benin",["africa"],"bj","229"],["Bhutan",["asia"],"bt","975"],["Bolivia",["america","south-america"],"bo","591"],["Bosnia and Herzegovina",["europe","ex-yugos"],"ba","387"],["Botswana",["africa"],"bw","267"],["Brazil",["america","south-america"],"br","55","(..) ........."],["British Indian Ocean Territory",["asia"],"io","246"],["Brunei",["asia"],"bn","673"],["Bulgaria",["europe","eu-union"],"bg","359"],["Burkina Faso",["africa"],"bf","226"],["Burundi",["africa"],"bi","257"],["Cambodia",["asia"],"kh","855"],["Cameroon",["africa"],"cm","237"],["Canada",["america","north-america"],"ca","1","(...) ... ...."],["Cape Verde",["africa"],"cv","238"],["Caribbean Netherlands",["america","carribean"],"bq","599",""],["Central African Republic",["africa"],"cf","236"],["Chad",["africa"],"td","235"],["Chile",["america","south-america"],"cl","56"],["China",["asia"],"cn","86",".. ........."],["Colombia",["america","south-america"],"co","57","... ... ...."],["Comoros",["africa"],"km","269"],["Congo",["africa"],"cd","243"],["Congo",["africa"],"cg","242"],["Costa Rica",["america","central-america"],"cr","506",".... ...."],["Côte d’Ivoire",["africa"],"ci","225",".. .. .. .."],["Croatia",["europe","eu-union","ex-yugos"],"hr","385"],["Cuba",["america","carribean"],"cu","53"],["Curaçao",["america","carribean"],"cw","599",""],["Cyprus",["europe","eu-union"],"cy","357",".. ......"],["Czech Republic",["europe","eu-union"],"cz","420","... ... ..."],["Denmark",["europe","eu-union","baltic"],"dk","45",".. .. .. .."],["Djibouti",["africa"],"dj","253"],["Dominica",["america","carribean"],"dm","1767"],["Dominican Republic",["america","carribean"],"do","1",""],["Ecuador",["america","south-america"],"ec","593"],["Egypt",["africa","north-africa"],"eg","20"],["El Salvador",["america","central-america"],"sv","503",".... ...."],["Equatorial Guinea",["africa"],"gq","240"],["Eritrea",["africa"],"er","291"],["Estonia",["europe","eu-union","ex-ussr","baltic"],"ee","372",".... ......"],["Ethiopia",["africa"],"et","251"],["Fiji",["oceania"],"fj","679"],["Finland",["europe","eu-union","baltic"],"fi","358",".. ... .. .."],["France",["europe","eu-union"],"fr","33",". .. .. .. .."],["French Guiana",["america","south-america"],"gf","594"],["French Polynesia",["oceania"],"pf","689"],["Gabon",["africa"],"ga","241"],["Gambia",["africa"],"gm","220"],["Georgia",["asia","ex-ussr"],"ge","995"],["Germany",["europe","eu-union","baltic"],"de","49",".... ........"],["Ghana",["africa"],"gh","233"],["Greece",["europe","eu-union"],"gr","30"],["Grenada",["america","carribean"],"gd","1473"],["Guadeloupe",["america","carribean"],"gp","590","",0],["Guam",["oceania"],"gu","1671"],["Guatemala",["america","central-america"],"gt","502",".... ...."],["Guinea",["africa"],"gn","224"],["Guinea-Bissau",["africa"],"gw","245"],["Guyana",["america","south-america"],"gy","592"],["Haiti",["america","carribean"],"ht","509",".... ...."],["Honduras",["america","central-america"],"hn","504"],["Hong Kong",["asia"],"hk","852",".... ...."],["Hungary",["europe","eu-union"],"hu","36"],["Iceland",["europe"],"is","354","... ...."],["India",["asia"],"in","91","..... ....."],["Indonesia",["asia"],"id","62"],["Iran",["middle-east"],"ir","98","... ... ...."],["Iraq",["middle-east"],"iq","964"],["Ireland",["europe","eu-union"],"ie","353",".. ......."],["Israel",["middle-east"],"il","972","... ... ...."],["Italy",["europe","eu-union"],"it","39","... ......."],["Jamaica",["america","carribean"],"jm","1876"],["Japan",["asia"],"jp","81",".. .... ...."],["Jordan",["middle-east"],"jo","962"],["Kazakhstan",["asia","ex-ussr"],"kz","7","... ... .. .."],["Kenya",["africa"],"ke","254"],["Kiribati",["oceania"],"ki","686"],["Kosovo",["europe","ex-yugos"],"xk","383"],["Kuwait",["middle-east"],"kw","965"],["Kyrgyzstan",["asia","ex-ussr"],"kg","996","... ... ..."],["Laos",["asia"],"la","856"],["Latvia",["europe","eu-union","ex-ussr","baltic"],"lv","371",".. ... ..."],["Lebanon",["middle-east"],"lb","961"],["Lesotho",["africa"],"ls","266"],["Liberia",["africa"],"lr","231"],["Libya",["africa","north-africa"],"ly","218"],["Liechtenstein",["europe"],"li","423"],["Lithuania",["europe","eu-union","ex-ussr","baltic"],"lt","370"],["Luxembourg",["europe","eu-union"],"lu","352"],["Macau",["asia"],"mo","853"],["Macedonia",["europe","ex-yugos"],"mk","389"],["Madagascar",["africa"],"mg","261"],["Malawi",["africa"],"mw","265"],["Malaysia",["asia"],"my","60",".. .... ...."],["Maldives",["asia"],"mv","960"],["Mali",["africa"],"ml","223"],["Malta",["europe","eu-union"],"mt","356"],["Marshall Islands",["oceania"],"mh","692"],["Martinique",["america","carribean"],"mq","596"],["Mauritania",["africa"],"mr","222"],["Mauritius",["africa"],"mu","230"],["Mexico",["america","central-america"],"mx","52","... ... ...."],["Micronesia",["oceania"],"fm","691"],["Moldova",["europe"],"md","373","(..) .. .. .."],["Monaco",["europe"],"mc","377"],["Mongolia",["asia"],"mn","976"],["Montenegro",["europe","ex-yugos"],"me","382"],["Morocco",["africa","north-africa"],"ma","212"],["Mozambique",["africa"],"mz","258"],["Myanmar",["asia"],"mm","95"],["Namibia",["africa"],"na","264"],["Nauru",["africa"],"nr","674"],["Nepal",["asia"],"np","977"],["Netherlands",["europe","eu-union"],"nl","31",".. ........"],["New Caledonia",["oceania"],"nc","687"],["New Zealand",["oceania"],"nz","64","... ... ...."],["Nicaragua",["america","central-america"],"ni","505"],["Niger",["africa"],"ne","227"],["Nigeria",["africa"],"ng","234"],["North Korea",["asia"],"kp","850"],["Norway",["europe","baltic"],"no","47","... .. ..."],["Oman",["middle-east"],"om","968"],["Pakistan",["asia"],"pk","92","... ......."],["Palau",["oceania"],"pw","680"],["Palestine",["middle-east"],"ps","970"],["Panama",["america","central-america"],"pa","507"],["Papua New Guinea",["oceania"],"pg","675"],["Paraguay",["america","south-america"],"py","595"],["Peru",["america","south-america"],"pe","51"],["Philippines",["asia"],"ph","63",".... ......."],["Poland",["europe","eu-union","baltic"],"pl","48","... ... ..."],["Portugal",["europe","eu-union"],"pt","351"],["Puerto Rico",["america","carribean"],"pr","1",""],["Qatar",["middle-east"],"qa","974"],["Réunion",["africa"],"re","262"],["Romania",["europe","eu-union"],"ro","40"],["Russia",["europe","asia","ex-ussr","baltic"],"ru","7","(...) ... .. .."],["Rwanda",["africa"],"rw","250"],["Saint Kitts and Nevis",["america","carribean"],"kn","1869"],["Saint Lucia",["america","carribean"],"lc","1758"],["Saint Vincent and the Grenadines",["america","carribean"],"vc","1784"],["Samoa",["oceania"],"ws","685"],["San Marino",["europe"],"sm","378"],["São Tomé and Príncipe",["africa"],"st","239"],["Saudi Arabia",["middle-east"],"sa","966"],["Senegal",["africa"],"sn","221"],["Serbia",["europe","ex-yugos"],"rs","381"],["Seychelles",["africa"],"sc","248"],["Sierra Leone",["africa"],"sl","232"],["Singapore",["asia"],"sg","65",".... ...."],["Slovakia",["europe","eu-union"],"sk","421"],["Slovenia",["europe","eu-union","ex-yugos"],"si","386"],["Solomon Islands",["oceania"],"sb","677"],["Somalia",["africa"],"so","252"],["South Africa",["africa"],"za","27"],["South Korea",["asia"],"kr","82","... .... ...."],["South Sudan",["africa","north-africa"],"ss","211"],["Spain",["europe","eu-union"],"es","34","... ... ..."],["Sri Lanka",["asia"],"lk","94"],["Sudan",["africa"],"sd","249"],["Suriname",["america","south-america"],"sr","597"],["Swaziland",["africa"],"sz","268"],["Sweden",["europe","eu-union","baltic"],"se","46","(...) ... ..."],["Switzerland",["europe"],"ch","41",".. ... .. .."],["Syria",["middle-east"],"sy","963"],["Taiwan",["asia"],"tw","886"],["Tajikistan",["asia","ex-ussr"],"tj","992"],["Tanzania",["africa"],"tz","255"],["Thailand",["asia"],"th","66"],["Timor-Leste",["asia"],"tl","670"],["Togo",["africa"],"tg","228"],["Tonga",["oceania"],"to","676"],["Trinidad and Tobago",["america","carribean"],"tt","1868"],["Tunisia",["africa","north-africa"],"tn","216"],["Turkey",["europe"],"tr","90","... ... .. .."],["Turkmenistan",["asia","ex-ussr"],"tm","993"],["Tuvalu",["asia"],"tv","688"],["Uganda",["africa"],"ug","256"],["Ukraine",["europe","ex-ussr"],"ua","380","(..) ... .. .."],["United Arab Emirates",["middle-east"],"ae","971"],["United Kingdom",["europe","eu-union"],"gb","44",".... ......"],["United States",["america","north-america"],"us","1","(...) ... ...."],["Uruguay",["america","south-america"],"uy","598"],["Uzbekistan",["asia","ex-ussr"],"uz","998",".. ... .. .."],["Vanuatu",["oceania"],"vu","678"],["Vatican City",["europe"],"va","39",".. .... ...."],["Venezuela",["america","south-america"],"ve","58"],["Vietnam",["asia"],"vn","84"],["Yemen",["middle-east"],"ye","967"],["Zambia",["africa"],"zm","260"],["Zimbabwe",["africa"],"zw","263"]],Gf=(e,r,t,n)=>t?e+"".padEnd(r.length,".")+" "+t:e+"".padEnd(r.length,".")+" "+n;var Zf;!function(e){e.getCountries=()=>[].concat(...qf.map((e=>({name:e[0],regions:e[1],iso2:e[2],countryCode:e[3],format:Gf("+",e[3],e[4],"... ... ... ... ..")})))),e.formatNumber=(e="",r)=>{if(!r)return e;const t=e.replace(/[\s()]+/g,""),{format:n}=r,o=n.split(" ");o.shift();const i=o.join(" ");return Uf(i,((e,r)=>{if(0===e.remainingText.length)return e;if("."!==r)return{formattedText:e.formattedText+r,remainingText:e.remainingText};const t=e.remainingText.slice(0,1),n=e.remainingText.slice(1);return{formattedText:e.formattedText+t,remainingText:n}}),{formattedText:"",remainingText:t}).formattedText}}(Zf||(Zf={}));const Kf=e=>e?e.replace("+",""):"",Xf=e=>e?e.includes("+")?e:`+${e}`:"",Qf=F.div`
    display: flex;
    flex-direction: column;
`,Jf=F.div`
    display: flex;
`,eb=F.div`
    display: flex;
    align-items: center;
    width: ${e=>e.$isMaxWidth?"100%":"auto"};
    border-radius: ${Ci.sm} 0 0 ${Ci.sm};
    box-shadow: inset 1px 0 0 ${vi.border},
        inset 0 1px 0 ${vi.border}, inset 0 -1px 0 ${vi.border};

    &:focus-within {
        box-shadow: inset 2px 0 0 ${vi["border-focus"]},
            inset 0 2px 0 ${vi["border-focus"]},
            inset 0 -2px 0 ${vi["border-focus"]};
    }

    ${e=>e.$error?$`
                box-shadow: inset 1px 0 0 ${vi["border-error"]},
                    inset 0 1px 0 ${vi["border-error"]},
                    inset 0 -1px 0 ${vi["border-error"]};

                &:focus-within {
                    box-shadow: inset 2px 0 0 ${vi["border-error-focus"]},
                        inset 0 2px 0 ${vi["border-error-focus"]},
                        inset 0 -2px 0 ${vi["border-error-focus"]};
                }
            `:e.$disabled?$`
                box-shadow: inset 0 0 0 1px ${vi.border};
                border-radius: ${Ci.sm};
                background: ${vi["bg-disabled"]};
                color: ${vi["text-disabled"]};
                &:focus-within {
                    box-shadow: inset 0 0 0 2px ${vi.border};
                }

                /* Spacer to maintain width when disabled */
                ${!e.$isMaxWidth&&$`
                    &::after {
                        content: "";
                        min-width: 120px;
                        flex-shrink: 0;
                    }

                    /* Hide spacer on mobile to prevent text coverage */
                    ${Di.MaxWidth.sm} {
                        &::after {
                            display: none;
                        }
                    }
                `}
            `:e.$readonly?$`
                box-shadow: none;
                border-radius: ${Ci.sm};
                &:focus-within {
                    box-shadow: inset 0 0 0 2px ${vi["border-focus"]};
                }
            `:void 0}
`,rb=F.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 ${$i["spacing-12"]};
    color: ${vi["icon-success"]};
    flex-shrink: 0;

    svg {
        width: 1.25rem;
        height: 1.25rem;
    }
`,tb=F(es.Default)`
    min-width: 120px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    flex-shrink: 0;
    ${Di.MaxWidth.sm} {
        width: fit-content;
    }
`,nb=F(If)`
    padding: 0 ${$i["spacing-16"]};
    width: 100%;
    background: transparent;

    ${e=>e.disabled&&$`
            input {
                color: ${vi["text-disabled"]};
            }
        `}

    ${e=>e.readOnly&&$`
            padding: 0;
        `}
`,ob=F((r=>{var{onChange:t,value:n,allowClear:o,onClear:i,onBlur:l,error:d,fixedCountry:c=!1,optionPlaceholder:u="Select",optionSearchPlaceholder:h,enableSearch:m,onHideOptions:f,onShowOptions:b,placeholder:p,autoComplete:y,noBorder:v=!1}=r,x=oe(r,["onChange","value","allowClear","onClear","onBlur","error","fixedCountry","optionPlaceholder","optionSearchPlaceholder","enableSearch","onHideOptions","onShowOptions","placeholder","autoComplete","noBorder"]);const[w]=s(Zf.getCountries()),[F,$]=s(void 0),[C,E]=s(""),S=a(null),D=Br({ref:S,formatter:e=>Zf.formatNumber(e.replace(/[^0-9]/g,""),F)});g((()=>{const e=w.filter((e=>e.countryCode===Kf(null==n?void 0:n.countryCode)))[0];$(e),E(Zf.formatNumber(null==n?void 0:n.number,e))}),[n]);const B=e=>{O(C,e),t&&k(C,e)},k=(e,r)=>{const n=Zf.formatNumber(e,r);null==t||t({number:n.replace(/[\s()]+/g,""),countryCode:r&&Xf(r.countryCode)})},O=(e,r)=>{E(Zf.formatNumber(e,r)),$(r)};return e(If,Object.assign({ref:S,value:C,onChange:()=>{const e=D();if(!e)return;const{nextValue:r,updateCaretPosition:n}=e;n(),O(r,F),t&&k(r,F)},allowClear:o&&!!C,onClear:()=>{i?i():E("")},onBlur:l,error:d,placeholder:p,addon:c?{type:"label",attributes:{value:Xf(null==F?void 0:F.countryCode)}}:{type:"list",attributes:{"aria-label":"Country code",placeholder:u,options:w,selectedOption:F,enableSearch:m,searchPlaceholder:h,valueExtractor:e=>`+${e.countryCode}`,listExtractor:e=>({title:e.name,secondaryLabel:Xf(e.countryCode)}),onSelectOption:B,onHideOptions:f,onShowOptions:b}},inputMode:"numeric",autoComplete:y,"aria-label":"Enter phone number",noBorder:v},x))}))`
    padding: 0 ${$i["spacing-16"]};
    background: transparent;

    ${e=>e.disabled&&$`
            input {
                color: ${vi["text-disabled"]};
            }
        `}

    ${e=>e.readOnly&&$`
            padding: 0;
            input {
                margin-left: ${$i["spacing-12"]};
            }
        `}
`,ib=({id:t,"data-testid":n,disabled:o,readOnly:i,inputId:a,type:s,sendOtpPlaceholder:l,emailValue:d,onEmailChange:c,phoneNumberValue:u,onPhoneNumberChange:g,fixedCountry:h,isLoading:m,isVerified:f,countdown:b,onSendOtp:p,onStateReset:y,sendOtpError:v})=>{const x=e=>{y(),"email"===s&&c&&c(e.target.value)},F=e=>{y(),"phone-number"===s&&g&&g(e)};return r(Qf,{id:t,"data-testid":n,children:[r(Jf,{children:[r(eb,{$isMaxWidth:"email"===s,$error:!!v,$disabled:o,$readonly:i,children:["email"===s?e(nb,{id:a,"data-testid":n?`${n}-contact-input`:void 0,placeholder:l||"Enter email",value:d,onChange:x,type:"email",noBorder:!0,"aria-invalid":!!v,"aria-required":!0,disabled:o,readOnly:i}):e(ob,{id:a,"data-testid":n?`${n}-contact-input`:void 0,placeholder:l||"Enter mobile number",value:u,onChange:F,noBorder:!0,fixedCountry:h,"aria-invalid":!!v,"aria-required":!0,disabled:o,readOnly:i}),f&&e(rb,{"aria-label":"Verified",role:"img",children:e(w,{})})]}),!o&&!i&&e(tb,{id:t?`${t}-contact-button`:void 0,"data-testid":n?`${n}-contact-button`:void 0,onClick:p,disabled:b.isRunning||f,loading:m,children:f?"Verified":m?"":b.isRunning?"Sent OTP":"Send OTP"})]}),v&&e(Sa,{id:t?`${t}-contact-error`:void 0,"data-testid":n?`${n}-contact-error`:void 0,role:"alert",children:v})]})},ab=F.div`
    display: flex;
    flex-direction: column;
    gap: ${$i["spacing-16"]};
`,sb=F.svg`
    .background-circle {
        fill: ${vi["bg-stronger"]};
    }

    .primary-path {
        fill: ${vi["icon-primary"]};
    }

    .validation-icon {
        fill: ${vi["bg-available"]};
    }

    .accent-light-3 {
        fill: ${vi["icon-primary-subtle"]};
    }

    .accent-light-4 {
        fill: ${vi["icon-primary-subtlest"]};
    }
`,lb=({width:t=120,height:n=120,className:o})=>r(sb,{width:t,height:n,viewBox:"0 0 120 120",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:o,children:[r("g",{clipPath:"url(#clip0_email_icon)",children:[e("circle",{cx:"60",cy:"60",r:"60",className:"background-circle"}),e("path",{d:"M22.9744 60.2636L62.1602 72.5619C62.6183 72.7414 63.1075 72.7591 63.5596 72.638C64.0116 72.5169 64.4265 72.2569 64.7334 71.8724L92.5201 41.6289L52.1928 25.0006C51.2645 24.6309 50.2039 24.9151 49.5848 25.6994L22.9744 60.2636Z",className:"primary-path"}),e("path",{d:"M72.6935 18.8097L29.2275 30.4564C26.8325 31.0982 25.4042 33.5744 26.0465 35.9714L38.8689 83.8253C39.1907 85.026 40.4254 85.7396 41.6251 85.4182L89.4378 72.6068C90.6374 72.2854 91.3499 71.05 91.0282 69.8493L78.2058 21.9954C77.5635 19.5984 75.0929 18.1668 72.6935 18.8097Z",fill:"white"}),e("path",{d:"M64.7456 71.7935C64.4385 72.1773 64.0235 72.4369 63.5715 72.5581C63.1194 72.6792 62.6303 72.6618 62.1724 72.483L23 60.2346L33.4375 99.188C34.0777 101.577 36.5445 102.994 38.9439 102.352L99.7963 86.0462C102.196 85.4033 103.623 82.9425 102.983 80.5533L92.5457 41.5999L64.7456 71.7935Z",className:"accent-light-3"}),e("path",{d:"M99.8349 86.0769L38.9824 102.382C36.544 103.036 34.127 101.648 33.4768 99.2216C33.2926 98.5339 33.4491 97.7966 33.8965 97.2409L60.7012 66.8793C61.0084 66.4957 61.4233 66.2361 61.8754 66.115C62.3274 65.9939 62.8166 66.0112 63.2744 66.1898L101.669 79.0814C102.334 79.3389 102.838 79.8992 103.023 80.5869C103.673 83.0134 102.273 85.4235 99.8349 86.0769Z",className:"accent-light-4"}),e("path",{d:"M56.1874 49.1387L52.6167 47.0772C52.2767 46.8809 51.9109 46.8352 51.5193 46.9401C51.1288 47.0447 50.8354 47.2671 50.6391 47.6071C50.4263 47.9757 50.3723 48.3558 50.4772 48.7474C50.5819 49.1379 50.8155 49.4283 51.1781 49.6186L55.9386 52.3685C56.2844 52.5863 56.6531 52.6427 57.0447 52.5378C57.4352 52.4332 57.737 52.1971 57.9501 51.8295L63.423 42.35C63.6193 42.01 63.6666 41.65 63.5649 41.2703C63.4628 40.8894 63.2418 40.6009 62.9017 40.4045C62.5617 40.2082 62.1958 40.1625 61.8043 40.2674C61.4138 40.372 61.1204 40.5944 60.924 40.9344L56.1874 49.1387ZM61.0069 59.8842C59.152 60.3812 57.3145 60.4964 55.4942 60.2299C53.674 59.9633 51.9987 59.3883 50.4684 58.5048C48.9382 57.6213 47.6026 56.458 46.4616 55.0148C45.3206 53.5717 44.5017 51.9227 44.0046 50.0678C43.5076 48.2129 43.3924 46.3754 43.6589 44.5551C43.9255 42.7348 44.5005 41.0595 45.384 39.5293C46.2674 37.999 47.4308 36.6634 48.8739 35.5224C50.317 34.3814 51.966 33.5625 53.8208 33.0655C55.6757 32.5685 57.5132 32.4532 59.3335 32.7198C61.1537 32.9863 62.829 33.5613 64.3593 34.4448C65.8895 35.3283 67.2251 36.4917 68.3661 37.9348C69.5071 39.378 70.326 41.027 70.8231 42.8818C71.3201 44.7367 71.4353 46.5743 71.1688 48.3945C70.9023 50.2148 70.3272 51.8901 69.4438 53.4204C68.5603 54.9506 67.3969 56.2863 65.9538 57.4272C64.5107 58.5682 62.8617 59.3872 61.0069 59.8842Z",className:"validation-icon"})]}),e("defs",{children:e("clipPath",{id:"clip0_email_icon",children:e("rect",{width:"120",height:"120",fill:"white"})})})]}),db=F.svg`
    .background-circle {
        fill: ${vi["bg-stronger"]};
    }

    .primary-path {
        fill: ${vi["icon-primary"]};
    }

    .validation-icon {
        fill: ${vi["bg-available"]};
    }

    .accent-light {
        fill: ${vi["bg-selected-stronger"]};
    }
`,cb=({width:t=120,height:n=120,className:o})=>r(db,{width:t,height:n,viewBox:"0 0 120 120",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:o,children:[r("g",{clipPath:"url(#clip0_phone_icon)",children:[e("circle",{cx:"60",cy:"60.5",r:"60",className:"background-circle"}),e("path",{d:"M85.7091 99.047L56.9789 106.705C51.6167 108.134 46.0606 104.916 44.6318 99.5553L27.1393 33.9319C25.9969 29.6444 27.8244 25.2332 31.3437 22.9073C32.2263 22.3231 33.2151 21.8712 34.2899 21.5845L34.4374 21.5449L40.7667 19.8586L56.4455 15.6787L56.4545 15.6763L63.02 13.9267C68.3822 12.497 73.9383 15.715 75.3671 21.0761L92.8596 86.6995C94.2888 92.0619 91.0712 97.6172 85.7091 99.047Z",className:"primary-path"}),e("path",{d:"M90.0893 85.5165L72.9593 22.8765C72.8393 22.4365 72.6893 22.0165 72.5093 21.6165C72.0993 20.6965 71.5393 19.8765 70.8693 19.1765C70.2493 18.5365 69.5393 17.9865 68.7593 17.5665C66.8993 16.5465 64.6593 16.2165 62.4593 16.8065L58.8593 17.8765C58.8593 17.8765 58.8693 17.9065 58.8793 17.9265C59.2793 19.4065 58.8293 20.8265 57.8893 21.0665L42.2093 25.2365C41.3193 25.4765 40.3093 24.5765 39.8593 23.2265L36.0693 24.2365C31.5193 25.4465 28.7793 30.1665 29.9993 34.7265L30.3093 35.8765L32.1393 42.7565L35.8493 56.6765L36.8693 60.5165L38.1493 65.3165L47.0793 97.5165C48.2893 102.067 53.0093 104.807 57.5693 103.587L83.9993 95.9965C88.5493 94.7865 91.2893 90.0665 90.0693 85.5065L90.0893 85.5165ZM38.6893 26.3265L34.8993 27.3365C34.5793 27.4265 34.2493 27.2265 34.1593 26.9065C34.0693 26.5865 34.2693 26.2565 34.5893 26.1665L38.3793 25.1565C38.6993 25.0665 39.0293 25.2665 39.1193 25.5865C39.2093 25.9065 39.0093 26.2365 38.6893 26.3265ZM65.6893 19.3265L61.8993 20.3365C61.5793 20.4265 61.2493 20.2265 61.1593 19.9065C61.0693 19.5865 61.2693 19.2565 61.5893 19.1665L65.3793 18.1565C65.6993 18.0665 66.0293 18.2665 66.1193 18.5865C66.2093 18.9065 66.0093 19.2365 65.6893 19.3265Z",fill:"white"}),e("path",{d:"M55.1766 48.5674L51.606 46.5059C51.2659 46.3096 50.9001 46.2639 50.5086 46.3688C50.1181 46.4734 49.8247 46.6958 49.6283 47.0358C49.4155 47.4045 49.3616 47.7846 49.4665 48.1761C49.5711 48.5666 49.8047 48.857 50.1673 49.0473L54.9279 51.7972C55.2737 52.015 55.6424 52.0715 56.0339 51.9665C56.4244 51.8619 56.7262 51.6258 56.9393 51.2583L62.4123 41.7787C62.6086 41.4387 62.6559 41.0788 62.5541 40.699C62.4521 40.3181 62.231 40.0296 61.891 39.8332C61.5509 39.6369 61.1851 39.5912 60.7935 39.6961C60.403 39.8007 60.1096 40.0231 59.9133 40.3631L55.1766 48.5674ZM59.9961 59.3129C58.1413 59.8099 56.3037 59.9251 54.4835 59.6586C52.6632 59.392 50.988 58.817 49.4577 57.9335C47.9274 57.05 46.5918 55.8867 45.4509 54.4435C44.3099 53.0004 43.4909 51.3514 42.9939 49.4965C42.4969 47.6417 42.3817 45.8041 42.6482 43.9838C42.9147 42.1635 43.4897 40.4882 44.3732 38.958C45.2567 37.4277 46.42 36.0921 47.8631 34.9511C49.3063 33.8102 50.9552 32.9912 52.8101 32.4942C54.6649 31.9972 56.5025 31.8819 58.3227 32.1485C60.143 32.415 61.8183 32.99 63.3485 33.8736C64.8788 34.7571 66.2144 35.9204 67.3554 37.3635C68.4963 38.8067 69.3153 40.4557 69.8123 42.3105C70.3093 44.1654 70.4246 46.003 70.158 47.8233C69.8915 49.6435 69.3165 51.3188 68.433 52.8491C67.5495 54.3794 66.3862 55.715 64.9431 56.8559C63.5 57.9969 61.851 58.8159 59.9961 59.3129Z",className:"validation-icon"}),e("path",{d:"M76.5801 68.8601C77.3501 68.6501 77.8201 67.8501 77.6101 67.0801C77.4001 66.3101 76.6001 65.8401 75.8301 66.0501L49.0801 73.1601C48.3101 73.3701 47.8401 74.1701 48.0501 74.9401C48.2601 75.7101 49.0601 76.1801 49.8301 75.9701L76.5801 68.8601Z",className:"accent-light"}),e("path",{d:"M78.5098 76.1402C79.2798 75.9302 79.7498 75.1302 79.5398 74.3602C79.3298 73.5902 78.5298 73.1202 77.7598 73.3302L51.0098 80.4402C50.2398 80.6502 49.7698 81.4502 49.9798 82.2202C50.1898 82.9902 50.9898 83.4602 51.7598 83.2502L78.5098 76.1402Z",className:"accent-light"}),e("path",{d:"M81.6702 82.3401C81.4602 81.5701 80.6602 81.1001 79.8902 81.3101L53.1402 88.4201C52.3702 88.6301 51.9002 89.4301 52.1102 90.2001C52.3202 90.9701 53.1202 91.4401 53.8902 91.2301L80.6402 84.1201C81.4102 83.9101 81.8802 83.1101 81.6702 82.3401Z",className:"accent-light"})]}),e("defs",{children:e("clipPath",{id:"clip0_phone_icon",children:e("rect",{width:"120",height:"120",fill:"white"})})})]}),ub=F.div`
    display: flex;
    align-items: center;
    background-color: ${vi["bg-strong"]};
    padding: ${$i["spacing-16"]} ${$i["spacing-32"]};
    gap: ${$i["spacing-32"]};
    ${Di.MaxWidth.sm} {
        flex-direction: column;
        align-items: start;
        gap: ${$i["spacing-16"]};
        padding: ${$i["spacing-16"]};
    }
`,gb=F.div`
    display: flex;
    flex-direction: column;
    gap: ${$i["spacing-16"]};
`,hb=F(Ui.BodyMD)`
    color: ${vi["text-subtlest"]};
`,mb=F.div`
    display: flex;
    gap: ${$i["spacing-8"]};
    max-width: 472px;
`,fb=F(es.Default)`
    flex-shrink: 0;
    width: 83px;
`,bb=({id:t,"data-testid":n,type:o,showVerifyOtpThumbnail:i=!1,verifyOtpTitle:a,verifyOtpMessage:s,otpCode:l,setOtpCode:d,isVerifyLoading:c,countdown:u,onVerifyOtp:g,verifyOtpError:h,otpPrefix:m,otpSeparator:f})=>{const b=D(),p=zr.useMediaQuery({maxWidth:Si["sm-max"]({theme:b})})?64:120;return r(ub,{id:t,"data-testid":n,role:"group","aria-labelledby":t?`${t}-title`:void 0,children:[(()=>{if(!i)return null;return e("div",{"aria-label":"email"===o?"Email verification":"Phone verification",role:"img",children:e("email"===o?lb:cb,{width:p,height:p})})})(),r(gb,{children:[r("div",{children:[e(Ui.BodyMD,{weight:"semibold",id:t?`${t}-title`:void 0,"data-testid":n?`${n}-title`:void 0,children:a}),e(Ui.BodyMD,{weight:"regular",id:t?`${t}-message`:void 0,"data-testid":n?`${n}-message`:void 0,children:s})]}),r("div",{children:[r(mb,{children:[e(If,{id:t?`${t}-verify-input`:void 0,"data-testid":n?`${n}-verify-input`:void 0,value:l,onChange:e=>null==d?void 0:d(e.target.value),placeholder:"Enter OTP",addon:{type:"label",attributes:{value:`${null!=m?m:""}${null!=f?f:""}`}},type:"number",error:!!h,"aria-label":"Enter OTP code","aria-invalid":!!h,"aria-required":!0}),e(fb,{id:t?`${t}-verify-button`:void 0,"data-testid":n?`${n}-verify-button`:void 0,onClick:g,loading:c,styleType:"light",disabled:!l||0===l.length,children:!c&&"Verify"})]}),h&&e(Sa,{id:t?`${t}-verify-error`:void 0,"data-testid":n?`${n}-verify-error`:void 0,role:"alert",children:h})]}),u.isRunning&&r(hb,{id:t?`${t}-countdown`:void 0,"data-testid":n?`${n}-countdown`:void 0,children:["Resend OTP in ",u.formatTime()]})]})]})},pb=t=>{const{id:n,"data-testid":o,className:i,inputId:l,onSendOtp:d,onVerifyOtp:c,verifyOtpCountdownTimer:u=60,sendOtpError:h,verifyOtpError:m,otpValue:f,onOtpChange:b,otpState:p,onOtpStateChange:y}=t,[v,x]=s(!1),[w,F]=s(!1),$=(({duration:e,onComplete:r})=>{const[t,n]=s(e),[o,i]=s(!1),l=a(null),d=a(null),c=()=>{i(!1),l.current&&(clearInterval(l.current),l.current=null)};return g((()=>{o||n(e)}),[e,o]),{timeLeft:t,isRunning:o,start:()=>{o||(d.current=Date.now(),i(!0),l.current=setInterval((()=>{const t=Math.floor((Date.now()-d.current)/1e3),o=Math.max(0,e-t);n(o),o<=0&&(i(!1),l.current&&(clearInterval(l.current),l.current=null),null==r||r())}),1e3))},stop:c,reset:()=>{c(),n(e),d.current=null},formatTime:e=>{const r=null!=e?e:t;return`${r} second${1===r?"":"s"}`}}})({duration:u});return r(ab,{id:n,"data-testid":o,className:i,children:[e(ib,Object.assign({},t,{inputId:l,"data-testid":o?`${o}-contact`:void 0,isLoading:v,isVerified:"verified"===p,countdown:$,onSendOtp:()=>ie(void 0,void 0,void 0,(function*(){if(d)try{x(!0),yield d(),y("sent"),$.reset(),$.start()}catch(e){}finally{x(!1)}})),onStateReset:()=>{"verified"===p&&y("default")},sendOtpError:h,fixedCountry:"phone-number"!==t.type||t.fixedCountry})),"sent"===p&&e(bb,Object.assign({},t,{"data-testid":o?`${o}-verification`:void 0,otpCode:null==f?void 0:f.value,otpPrefix:null==f?void 0:f.prefix,otpSeparator:null==f?void 0:f.separator,setOtpCode:b,isVerifyLoading:w,countdown:$,onVerifyOtp:()=>ie(void 0,void 0,void 0,(function*(){if(c&&(null==f?void 0:f.value))try{F(!0),yield c(f.value),y("verified"),$.reset(),null==b||b("")}catch(e){}finally{F(!1)}})),verifyOtpError:m}))]})};export{pb as OtpVerification};
//# sourceMappingURL=index.js.map
