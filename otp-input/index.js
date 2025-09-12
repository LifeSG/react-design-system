import{jsx as e,jsxs as r,Fragment as n}from"react/jsx-runtime";import t,{useRef as i,useImperativeHandle as s,useState as o,useEffect as a}from"react";import"@lifesg/react-icons/i-circle-fill";import l,{css as d,keyframes as c}from"styled-components";import"@floating-ui/react";import"react-dom";import{ExternalIcon as u}from"@lifesg/react-icons/external";import{CrossIcon as g}from"@lifesg/react-icons/cross";function b(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(t=Object.getOwnPropertySymbols(e);i<t.length;i++)r.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(n[t[i]]=e[t[i]])}return n}"function"==typeof SuppressedError&&SuppressedError;var h="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function m(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var y={exports:{}};y.exports=function(){var e=1e3,r=6e4,n=36e5,t="millisecond",i="second",s="minute",o="hour",a="day",l="week",d="month",c="quarter",u="year",g="date",b="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,y={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var r=["th","st","nd","rd"],n=e%100;return"["+e+(r[(n-20)%10]||r[n]||r[0])+"]"}},p=function(e,r,n){var t=String(e);return!t||t.length>=r?e:""+Array(r+1-t.length).join(n)+e},f={s:p,z:function(e){var r=-e.utcOffset(),n=Math.abs(r),t=Math.floor(n/60),i=n%60;return(r<=0?"+":"-")+p(t,2,"0")+":"+p(i,2,"0")},m:function e(r,n){if(r.date()<n.date())return-e(n,r);var t=12*(n.year()-r.year())+(n.month()-r.month()),i=r.clone().add(t,d),s=n-i<0,o=r.clone().add(t+(s?-1:1),d);return+(-(t+(n-i)/(s?i-o:o-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:a,D:g,h:o,m:s,s:i,ms:t,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",x={};x[v]=y;var F="$isDayjsObject",w=function(e){return e instanceof C||!(!e||!e[F])},$=function e(r,n,t){var i;if(!r)return v;if("string"==typeof r){var s=r.toLowerCase();x[s]&&(i=s),n&&(x[s]=n,i=s);var o=r.split("-");if(!i&&o.length>1)return e(o[0])}else{var a=r.name;x[a]=r,i=a}return!t&&i&&(v=i),i||!t&&v},D=function(e,r){if(w(e))return e.clone();var n="object"==typeof r?r:{};return n.date=e,n.args=arguments,new C(n)},E=f;E.l=$,E.i=w,E.w=function(e,r){return D(e,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var C=function(){function y(e){this.$L=$(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[F]=!0}var p=y.prototype;return p.parse=function(e){this.$d=function(e){var r=e.date,n=e.utc;if(null===r)return new Date(NaN);if(E.u(r))return new Date;if(r instanceof Date)return new Date(r);if("string"==typeof r&&!/Z$/i.test(r)){var t=r.match(h);if(t){var i=t[2]-1||0,s=(t[7]||"0").substring(0,3);return n?new Date(Date.UTC(t[1],i,t[3]||1,t[4]||0,t[5]||0,t[6]||0,s)):new Date(t[1],i,t[3]||1,t[4]||0,t[5]||0,t[6]||0,s)}}return new Date(r)}(e),this.init()},p.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},p.$utils=function(){return E},p.isValid=function(){return!(this.$d.toString()===b)},p.isSame=function(e,r){var n=D(e);return this.startOf(r)<=n&&n<=this.endOf(r)},p.isAfter=function(e,r){return D(e)<this.startOf(r)},p.isBefore=function(e,r){return this.endOf(r)<D(e)},p.$g=function(e,r,n){return E.u(e)?this[r]:this.set(n,e)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(e,r){var n=this,t=!!E.u(r)||r,c=E.p(e),b=function(e,r){var i=E.w(n.$u?Date.UTC(n.$y,r,e):new Date(n.$y,r,e),n);return t?i:i.endOf(a)},h=function(e,r){return E.w(n.toDate()[e].apply(n.toDate("s"),(t?[0,0,0,0]:[23,59,59,999]).slice(r)),n)},m=this.$W,y=this.$M,p=this.$D,f="set"+(this.$u?"UTC":"");switch(c){case u:return t?b(1,0):b(31,11);case d:return t?b(1,y):b(0,y+1);case l:var v=this.$locale().weekStart||0,x=(m<v?m+7:m)-v;return b(t?p-x:p+(6-x),y);case a:case g:return h(f+"Hours",0);case o:return h(f+"Minutes",1);case s:return h(f+"Seconds",2);case i:return h(f+"Milliseconds",3);default:return this.clone()}},p.endOf=function(e){return this.startOf(e,!1)},p.$set=function(e,r){var n,l=E.p(e),c="set"+(this.$u?"UTC":""),b=(n={},n[a]=c+"Date",n[g]=c+"Date",n[d]=c+"Month",n[u]=c+"FullYear",n[o]=c+"Hours",n[s]=c+"Minutes",n[i]=c+"Seconds",n[t]=c+"Milliseconds",n)[l],h=l===a?this.$D+(r-this.$W):r;if(l===d||l===u){var m=this.clone().set(g,1);m.$d[b](h),m.init(),this.$d=m.set(g,Math.min(this.$D,m.daysInMonth())).$d}else b&&this.$d[b](h);return this.init(),this},p.set=function(e,r){return this.clone().$set(e,r)},p.get=function(e){return this[E.p(e)]()},p.add=function(t,c){var g,b=this;t=Number(t);var h=E.p(c),m=function(e){var r=D(b);return E.w(r.date(r.date()+Math.round(e*t)),b)};if(h===d)return this.set(d,this.$M+t);if(h===u)return this.set(u,this.$y+t);if(h===a)return m(1);if(h===l)return m(7);var y=(g={},g[s]=r,g[o]=n,g[i]=e,g)[h]||1,p=this.$d.getTime()+t*y;return E.w(p,this)},p.subtract=function(e,r){return this.add(-1*e,r)},p.format=function(e){var r=this,n=this.$locale();if(!this.isValid())return n.invalidDate||b;var t=e||"YYYY-MM-DDTHH:mm:ssZ",i=E.z(this),s=this.$H,o=this.$m,a=this.$M,l=n.weekdays,d=n.months,c=n.meridiem,u=function(e,n,i,s){return e&&(e[n]||e(r,t))||i[n].slice(0,s)},g=function(e){return E.s(s%12||12,e,"0")},h=c||function(e,r,n){var t=e<12?"AM":"PM";return n?t.toLowerCase():t};return t.replace(m,(function(e,t){return t||function(e){switch(e){case"YY":return String(r.$y).slice(-2);case"YYYY":return E.s(r.$y,4,"0");case"M":return a+1;case"MM":return E.s(a+1,2,"0");case"MMM":return u(n.monthsShort,a,d,3);case"MMMM":return u(d,a);case"D":return r.$D;case"DD":return E.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return u(n.weekdaysMin,r.$W,l,2);case"ddd":return u(n.weekdaysShort,r.$W,l,3);case"dddd":return l[r.$W];case"H":return String(s);case"HH":return E.s(s,2,"0");case"h":return g(1);case"hh":return g(2);case"a":return h(s,o,!0);case"A":return h(s,o,!1);case"m":return String(o);case"mm":return E.s(o,2,"0");case"s":return String(r.$s);case"ss":return E.s(r.$s,2,"0");case"SSS":return E.s(r.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(t,g,b){var h,m=this,y=E.p(g),p=D(t),f=(p.utcOffset()-this.utcOffset())*r,v=this-p,x=function(){return E.m(m,p)};switch(y){case u:h=x()/12;break;case d:h=x();break;case c:h=x()/3;break;case l:h=(v-f)/6048e5;break;case a:h=(v-f)/864e5;break;case o:h=v/n;break;case s:h=v/r;break;case i:h=v/e;break;default:h=v}return b?h:E.a(h)},p.daysInMonth=function(){return this.endOf(d).$D},p.$locale=function(){return x[this.$L]},p.locale=function(e,r){if(!e)return this.$L;var n=this.clone(),t=$(e,r,!0);return t&&(n.$L=t),n},p.clone=function(){return E.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},y}(),B=C.prototype;return D.prototype=B,[["$ms",t],["$s",i],["$m",s],["$H",o],["$W",a],["$M",d],["$y",u],["$D",g]].forEach((function(e){B[e[1]]=function(r){return this.$g(r,e[0],e[1])}})),D.extend=function(e,r){return e.$i||(e(r,C,D),e.$i=!0),D},D.locale=$,D.isDayjs=w,D.unix=function(e){return D(1e3*e)},D.en=x[v],D.Ls=x,D.p={},D}();var p=m(y.exports),f={exports:{}};f.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,t=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,s={},o=function(e){return(e=+e)+(e>68?1900:2e3)},a=function(e){return function(r){this[e]=+r}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var r=e.match(/([+-]|\d\d)/g),n=60*r[1]+(+r[2]||0);return 0===n?0:"+"===r[0]?-n:n}(e)}],d=function(e){var r=s[e];return r&&(r.indexOf?r:r.s.concat(r.f))},c=function(e,r){var n,t=s.meridiem;if(t){for(var i=1;i<=24;i+=1)if(e.indexOf(t(i,0,r))>-1){n=i>12;break}}else n=e===(r?"pm":"PM");return n},u={A:[i,function(e){this.afternoon=c(e,!1)}],a:[i,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[t,a("seconds")],ss:[t,a("seconds")],m:[t,a("minutes")],mm:[t,a("minutes")],H:[t,a("hours")],h:[t,a("hours")],HH:[t,a("hours")],hh:[t,a("hours")],D:[t,a("day")],DD:[n,a("day")],Do:[i,function(e){var r=s.ordinal,n=e.match(/\d+/);if(this.day=n[0],r)for(var t=1;t<=31;t+=1)r(t).replace(/\[|\]/g,"")===e&&(this.day=t)}],M:[t,a("month")],MM:[n,a("month")],MMM:[i,function(e){var r=d("months"),n=(d("monthsShort")||r.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(e){var r=d("months").indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],Y:[/[+-]?\d+/,a("year")],YY:[n,function(e){this.year=o(e)}],YYYY:[/\d{4}/,a("year")],Z:l,ZZ:l};function g(n){var t,i;t=n,i=s&&s.formats;for(var o=(n=t.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(r,n,t){var s=t&&t.toUpperCase();return n||i[t]||e[t]||i[s].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,r,n){return r||n.slice(1)}))}))).match(r),a=o.length,l=0;l<a;l+=1){var d=o[l],c=u[d],g=c&&c[0],b=c&&c[1];o[l]=b?{regex:g,parser:b}:d.replace(/^\[|\]$/g,"")}return function(e){for(var r={},n=0,t=0;n<a;n+=1){var i=o[n];if("string"==typeof i)t+=i.length;else{var s=i.regex,l=i.parser,d=e.slice(t),c=s.exec(d)[0];l.call(r,c),e=e.replace(c,"")}}return function(e){var r=e.afternoon;if(void 0!==r){var n=e.hours;r?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(r),r}}return function(e,r,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(o=e.parseTwoDigitYear);var t=r.prototype,i=t.parse;t.parse=function(e){var r=e.date,t=e.utc,o=e.args;this.$u=t;var a=o[1];if("string"==typeof a){var l=!0===o[2],d=!0===o[3],c=l||d,u=o[2];d&&(u=o[2]),s=this.$locale(),!l&&u&&(s=n.Ls[u]),this.$d=function(e,r,n){try{if(["x","X"].indexOf(r)>-1)return new Date(("X"===r?1e3:1)*e);var t=g(r)(e),i=t.year,s=t.month,o=t.day,a=t.hours,l=t.minutes,d=t.seconds,c=t.milliseconds,u=t.zone,b=new Date,h=o||(i||s?1:b.getDate()),m=i||b.getFullYear(),y=0;i&&!s||(y=s>0?s-1:b.getMonth());var p=a||0,f=l||0,v=d||0,x=c||0;return u?new Date(Date.UTC(m,y,h,p,f,v,x+60*u.offset*1e3)):n?new Date(Date.UTC(m,y,h,p,f,v,x)):new Date(m,y,h,p,f,v,x)}catch(e){return new Date("")}}(r,a,t),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&r!=this.format(a)&&(this.$d=new Date("")),s={}}else if(a instanceof Array)for(var b=a.length,h=1;h<=b;h+=1){o[1]=a[h-1];var m=n.apply(this,o);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}h===b&&(this.$d=new Date(""))}else i.call(this,e)}}}();var v=m(f.exports),x={exports:{}};x.exports=function(e,r,n){r.prototype.isBetween=function(e,r,t,i){var s=n(e),o=n(r),a="("===(i=i||"()")[0],l=")"===i[1];return(a?this.isAfter(s,t):!this.isBefore(s,t))&&(l?this.isBefore(o,t):!this.isAfter(o,t))||(a?this.isBefore(s,t):!this.isAfter(s,t))&&(l?this.isAfter(o,t):!this.isBefore(o,t))}};var F=m(x.exports),w={exports:{}};w.exports=function(e,r){r.prototype.isSameOrAfter=function(e,r){return this.isSame(e,r)||this.isAfter(e,r)}};var $=m(w.exports),D={exports:{}};D.exports=function(e,r){r.prototype.isSameOrBefore=function(e,r){return this.isSame(e,r)||this.isBefore(e,r)}};var E,C,B,S=m(D.exports),A={exports:{}},k=m(A.exports=(E={year:0,month:1,day:2,hour:3,minute:4,second:5},C={},function(e,r,n){var t,i=function(e,r,n){void 0===n&&(n={});var t=new Date(e),i=function(e,r){void 0===r&&(r={});var n=r.timeZoneName||"short",t=e+"|"+n,i=C[t];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),C[t]=i),i}(r,n);return i.formatToParts(t)},s=function(e,r){for(var t=i(e,r),s=[],o=0;o<t.length;o+=1){var a=t[o],l=a.type,d=a.value,c=E[l];c>=0&&(s[c]=parseInt(d,10))}var u=s[3],g=24===u?0:u,b=s[0]+"-"+s[1]+"-"+s[2]+" "+g+":"+s[4]+":"+s[5]+":000",h=+e;return(n.utc(b).valueOf()-(h-=h%1e3))/6e4},o=r.prototype;o.tz=function(e,r){void 0===e&&(e=t);var i=this.utcOffset(),s=this.toDate(),o=s.toLocaleString("en-US",{timeZone:e}),a=Math.round((s-new Date(o))/1e3/60),l=n(o,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(s.getTimezoneOffset()/15)-a,!0);if(r){var d=l.utcOffset();l=l.add(i-d,"minute")}return l.$x.$timezone=e,l},o.offsetName=function(e){var r=this.$x.$timezone||n.tz.guess(),t=i(this.valueOf(),r,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return t&&t.value};var a=o.startOf;o.startOf=function(e,r){if(!this.$x||!this.$x.$timezone)return a.call(this,e,r);var t=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return a.call(t,e,r).tz(this.$x.$timezone,!0)},n.tz=function(e,r,i){var o=i&&r,a=i||r||t,l=s(+n(),a);if("string"!=typeof e)return n(e).tz(a);var d=function(e,r,n){var t=e-60*r*1e3,i=s(t,n);if(r===i)return[t,r];var o=s(t-=60*(i-r)*1e3,n);return i===o?[t,i]:[e-60*Math.min(i,o)*1e3,Math.max(i,o)]}(n.utc(e,o).valueOf(),l,a),c=d[0],u=d[1],g=n(c).utcOffset(u);return g.$x.$timezone=a,g},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){t=e}}));p.extend(F),p.extend(S),p.extend($),p.extend(v),p.extend(k),function(e){e.generateDays=e=>{const r=e.startOf("month"),n=p(r).startOf("week");return z(n).map((e=>M(e)))},e.generateDaysForCurrentWeek=e=>{const r=e.startOf("week");return M(r)},e.generateMonths=e=>{const r=[];for(let n=0;n<12;n++){const t=e.month(n);r.push(p(t))}return r},e.generateDecadeOfYears=e=>{const r=e.year(),n=10*Math.floor(r/10),t=e.year(n),i=[t.subtract(1,"year"),t];for(let e=1;e<11;e++)i.push(t.add(e,"year"));return i},e.getStartEndDecade=e=>{const r=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:r,endDecade:+p(`${r+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const r=p(e,"HH:mm");return r.isValid()?r.format("h:mm a"):""},e.isWithinRange=(e,r,n,t="day")=>!r&&!n||(r&&n?e.isBetween(r,n,t,"[]"):r?e.isSameOrAfter(r,t):e.isSameOrBefore(n,t)),e.isPreviousMonthWithinRange=(r,n)=>e.isWithinRange(r.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(r,n)=>e.isWithinRange(r.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(r,n)=>{const{beginDecade:t}=e.getStartEndDecade(r);return e.isWithinRange(r.year(t).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(r,n)=>e.isWithinRange(r.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(r,n)=>e.isWithinRange(r.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(r,n)=>{const{endDecade:t}=e.getStartEndDecade(r);return e.isWithinRange(r.year(t).add(1,"year"),void 0,n,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,r)=>({start:e.format("YYYY-MM-DD"),end:e.add(r-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(r,n,t,i)=>{const s=e.isWithinRange(r,t?p(t):void 0,i?p(i):void 0),o=n&&n.includes(r.format("YYYY-MM-DD"));return!s||!!o}}(B||(B={}));const z=e=>{const r=[e];for(let n=1;n<6;n++){const t=e.add(n,"week");r.push(t)}return r},M=e=>{const r=[];for(let n=0;n<7;n++){const t=e.add(n,"day");r.push(t)}return r},O=[1,3,5,7,8,10,12],_=[4,6,9,11];var T,Y,j,L;!function(e){e.clampDay=(r,n,t)=>{const i=parseInt(r),s=parseInt(n),o=parseInt(t);return 0==i?"1":O.includes(s)?Math.min(i,31).toString():_.includes(s)?Math.min(i,30).toString():2===s?e.isLeapYear(o)?Math.min(i,29).toString():Math.min(i,28).toString():r},e.clampMonth=e=>{const r=parseInt(e);return 0==r?"1":r>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,r,n="HH:mm")=>{const t=p(e,n);return p(r,n).diff(t,"minute")},e.toDayjs=e=>e?p(e):p(),e.addMinutesToTime=(e,r,n="HH:mm")=>p(e,n).add(r,"minutes").format(n),e.isSame=(e,r,n="day")=>p(e).isSame(p(r),n)}(T||(T={})),function(e){e.isDateDisabled=(e,r)=>{const{disabledDates:n,minDate:t,maxDate:i}=r;return!!(e&&n&&n.length&&n.includes(e))||(!(!t||!p(e).isBefore(t,"day"))||!(!i||!p(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(p(e).isValid())return e}return""}}(Y||(Y={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(j||(j={})),function(e){e.transformWithSpaces=(e,r)=>{const n="(.{"+r+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,r)=>{if("0"===e)return r?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,r)=>{const n=Math.floor(r/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,r,n,t,i=8)=>{let s=0;r>n&&(s=Math.floor((r-n)/i));const o=t+s;if(o<e.length){const r=Math.floor(o/2);return e.substring(0,r)+" ... "+e.substring(e.length-r,e.length)}return e},e.truncateTwoLines=(e,r,n,t=1.2)=>{const i=Math.floor(2*r/(.6*n))*(2/t);if(e.length<=i)return e;const s=Math.floor(.6*i),o=Math.floor(.2*i);return`${e.substring(0,s)}...${e.substring(e.length-o)}`},e.getTextWidth=(r,n)=>{if("undefined"==typeof document)return 0;const t=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");t.font=n;return t.measureText(r).width},e.maskValue=(e,n)=>{if(!e)return e;const{maskRange:t,unmaskRange:i,maskChar:s="•",maskRegex:o,maskTransformer:a}=n;if(a)return a(e);if(o)return e.replace(o,s);if(t){const{startIndex:n,endIndex:i}=r(t[0],t[1]);return e.substring(0,n)+s.repeat(e.substring(n,i+1).length)+e.substring(i+1)}if(i){const{startIndex:n,endIndex:t}=r(i[0],i[1]);return s.repeat(e.substring(0,n).length)+e.substring(n,t+1)+s.repeat(e.substring(t+1).length)}return e};const r=(e,r)=>e<r?{startIndex:e,endIndex:r}:{startIndex:r,endIndex:e},n=new Intl.PluralRules("en",{type:"ordinal"}),t=new Map([["one","st"],["two","nd"],["few","rd"],["other","th"]]);e.formatOrdinal=e=>{const r=n.select(e);return`${e}${t.get(r)}`}}(L||(L={}));var W=Array.isArray,H="object"==typeof h&&h&&h.Object===Object&&h,I="object"==typeof self&&self&&self.Object===Object&&self,R=H||I||Function("return this")(),P=R.Symbol,N=P,V=Object.prototype,Z=V.hasOwnProperty,X=V.toString,U=N?N.toStringTag:void 0;var J=function(e){var r=Z.call(e,U),n=e[U];try{e[U]=void 0;var t=!0}catch(e){}var i=X.call(e);return t&&(r?e[U]=n:delete e[U]),i},G=Object.prototype.toString;var q=J,K=function(e){return G.call(e)},Q=P?P.toStringTag:void 0;var ee=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Q&&Q in Object(e)?q(e):K(e)};var re=ee,ne=function(e){return null!=e&&"object"==typeof e};var te=function(e){return"symbol"==typeof e||ne(e)&&"[object Symbol]"==re(e)},ie=W,se=te,oe=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ae=/^\w*$/;var le=function(e,r){if(ie(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!se(e))||(ae.test(e)||!oe.test(e)||null!=r&&e in Object(r))};var de=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},ce=ee,ue=de;var ge,be=function(e){if(!ue(e))return!1;var r=ce(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},he=R["__core-js_shared__"],me=(ge=/[^.]+$/.exec(he&&he.keys&&he.keys.IE_PROTO||""))?"Symbol(src)_1."+ge:"";var ye=function(e){return!!me&&me in e},pe=Function.prototype.toString;var fe=be,ve=ye,xe=de,Fe=function(e){if(null!=e){try{return pe.call(e)}catch(e){}try{return e+""}catch(e){}}return""},we=/^\[object .+?Constructor\]$/,$e=Function.prototype,De=Object.prototype,Ee=$e.toString,Ce=De.hasOwnProperty,Be=RegExp("^"+Ee.call(Ce).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Se=function(e,r){return null==e?void 0:e[r]},Ae=function(e){return!(!xe(e)||ve(e))&&(fe(e)?Be:we).test(Fe(e))},ke=Se;var ze=function(e,r){var n=ke(e,r);return Ae(n)?n:void 0},Me=ze(Object,"create"),Oe=Me;var _e=function(){this.__data__=Oe?Oe(null):{},this.size=0};var Te=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},Ye=Me,je=Object.prototype.hasOwnProperty;var Le=function(e){var r=this.__data__;if(Ye){var n=r[e];return"__lodash_hash_undefined__"===n?void 0:n}return je.call(r,e)?r[e]:void 0},We=Me,He=Object.prototype.hasOwnProperty;var Ie=function(e){var r=this.__data__;return We?void 0!==r[e]:He.call(r,e)},Re=Me;var Pe=function(e,r){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Re&&void 0===r?"__lodash_hash_undefined__":r,this},Ne=_e,Ve=Te,Ze=Le,Xe=Ie,Ue=Pe;function Je(e){var r=-1,n=null==e?0:e.length;for(this.clear();++r<n;){var t=e[r];this.set(t[0],t[1])}}Je.prototype.clear=Ne,Je.prototype.delete=Ve,Je.prototype.get=Ze,Je.prototype.has=Xe,Je.prototype.set=Ue;var Ge=Je;var qe=function(){this.__data__=[],this.size=0};var Ke=function(e,r){return e===r||e!=e&&r!=r};var Qe=function(e,r){for(var n=e.length;n--;)if(Ke(e[n][0],r))return n;return-1},er=Qe,rr=Array.prototype.splice;var nr=function(e){var r=this.__data__,n=er(r,e);return!(n<0)&&(n==r.length-1?r.pop():rr.call(r,n,1),--this.size,!0)},tr=Qe;var ir=function(e){var r=this.__data__,n=tr(r,e);return n<0?void 0:r[n][1]},sr=Qe;var or=function(e){return sr(this.__data__,e)>-1},ar=Qe;var lr=function(e,r){var n=this.__data__,t=ar(n,e);return t<0?(++this.size,n.push([e,r])):n[t][1]=r,this},dr=qe,cr=nr,ur=ir,gr=or,br=lr;function hr(e){var r=-1,n=null==e?0:e.length;for(this.clear();++r<n;){var t=e[r];this.set(t[0],t[1])}}hr.prototype.clear=dr,hr.prototype.delete=cr,hr.prototype.get=ur,hr.prototype.has=gr,hr.prototype.set=br;var mr=hr,yr=ze(R,"Map"),pr=Ge,fr=mr,vr=yr;var xr=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var Fr=function(e,r){var n=e.__data__;return xr(r)?n["string"==typeof r?"string":"hash"]:n.map},wr=Fr;var $r=function(e){var r=wr(this,e).delete(e);return this.size-=r?1:0,r},Dr=Fr;var Er=function(e){return Dr(this,e).get(e)},Cr=Fr;var Br=function(e){return Cr(this,e).has(e)},Sr=Fr;var Ar=function(e,r){var n=Sr(this,e),t=n.size;return n.set(e,r),this.size+=n.size==t?0:1,this},kr=function(){this.size=0,this.__data__={hash:new pr,map:new(vr||fr),string:new pr}},zr=$r,Mr=Er,Or=Br,_r=Ar;function Tr(e){var r=-1,n=null==e?0:e.length;for(this.clear();++r<n;){var t=e[r];this.set(t[0],t[1])}}Tr.prototype.clear=kr,Tr.prototype.delete=zr,Tr.prototype.get=Mr,Tr.prototype.has=Or,Tr.prototype.set=_r;var Yr=Tr;function jr(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var n=function(){var t=arguments,i=r?r.apply(this,t):t[0],s=n.cache;if(s.has(i))return s.get(i);var o=e.apply(this,t);return n.cache=s.set(i,o)||s,o};return n.cache=new(jr.Cache||Yr),n}jr.Cache=Yr;var Lr=jr;var Wr=function(e){var r=Lr(e,(function(e){return 500===n.size&&n.clear(),e})),n=r.cache;return r},Hr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ir=/\\(\\)?/g,Rr=Wr((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(Hr,(function(e,n,t,i){r.push(t?i.replace(Ir,"$1"):n||e)})),r}));var Pr=function(e,r){for(var n=-1,t=null==e?0:e.length,i=Array(t);++n<t;)i[n]=r(e[n],n,e);return i},Nr=W,Vr=te,Zr=P?P.prototype:void 0,Xr=Zr?Zr.toString:void 0;var Ur=function e(r){if("string"==typeof r)return r;if(Nr(r))return Pr(r,e)+"";if(Vr(r))return Xr?Xr.call(r):"";var n=r+"";return"0"==n&&1/r==-1/0?"-0":n},Jr=Ur;var Gr=W,qr=le,Kr=Rr,Qr=function(e){return null==e?"":Jr(e)};var en=te;var rn=function(e,r){return Gr(e)?e:qr(e,r)?[e]:Kr(Qr(e))},nn=function(e){if("string"==typeof e||en(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r};var tn=function(e,r){for(var n=0,t=(r=rn(r,e)).length;null!=e&&n<t;)e=e[nn(r[n++])];return n&&n==t?e:void 0};var sn=m((function(e,r,n){var t=null==e?void 0:tn(e,r);return void 0===t?n:t}));const on=(e,r,n)=>sn(n,r)||sn(e,r),an=(e,r)=>{const n=r||e.defaultValue;return sn(e.collections,n)},ln={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},dn=e=>r=>{var n;const t=r.theme,i=an(ln,null==t?void 0:t.borderScheme);return(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.border)?`${on(i,e,t.overrides.border)}px`:`${i[e]}px`},cn={"width-005":dn("width-005"),"width-010":dn("width-010"),"width-020":dn("width-020"),"width-040":dn("width-040"),solid:(un="solid",e=>{var r;const n=e.theme,t=an(ln,null==n?void 0:n.borderScheme),i=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.border)?on(t,un,n.overrides.border):t[un];return"function"==typeof i?i(e):i})};var un;const gn={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},bn={"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFF8FC","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},hn={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},mn={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},yn={"brand-10":"#001A19","brand-20":"#002D2B","brand-30":"#00413D","brand-40":"#005954","brand-50":"#00756F","brand-60":"#03A098","brand-70":"#55BFBA","brand-80":"#92D6D2","brand-90":"#BFE7E5","brand-95":"#DDF2F1","brand-100":"#F4FBFA","primary-10":"#09191D","primary-20":"#102B34","primary-30":"#173D49","primary-40":"#205666","primary-50":"#2A7086","primary-60":"#5D97A9","primary-70":"#8CB6C2","primary-80":"#B2CED6","primary-90":"#D1E2E7","primary-95":"#E8F0F3","primary-100":"#F7FAFB","secondary-10":"#001731","secondary-20":"#002752","secondary-30":"#003874","secondary-40":"#004D9F","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},pn={"brand-10":"#881317","brand-20":"#B5191E","brand-30":"#B5040A","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},fn={"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},vn={"brand-10":"#170F39","brand-20":"#281C62","brand-30":"#38268B","brand-40":"#4D34BF","brand-50":"#5735DF","brand-60":"#9986F9","brand-70":"#B2A5F8","brand-80":"#CDC2FA","brand-90":"#E2DCFC","brand-95":"#EFEDFE","brand-100":"#FAF8FD","primary-10":"#170F39","primary-20":"#281C62","primary-30":"#38268B","primary-40":"#4D34BF","primary-50":"#5735DF","primary-60":"#9986F9","primary-70":"#B2A5F8","primary-80":"#CDC2FA","primary-90":"#E2DCFC","primary-95":"#EFEDFE","primary-100":"#FAF8FD","secondary-10":"#251204","secondary-20":"#401F08","secondary-30":"#5B2C0B","secondary-40":"#7E3D0F","secondary-50":"#B04900","secondary-60":"#E26E1C","secondary-70":"#FF9445","secondary-80":"#FFBB8E","secondary-90":"#FFD9BF","secondary-95":"#FFECDF","secondary-100":"#FFF8F3","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#031B15","success-20":"#082D24","success-30":"#094134","success-40":"#0D5947","success-50":"#10755E","success-60":"#16A181","success-70":"#1EC59D","success-80":"#6FDDC2","success-90":"#AFECDE","success-95":"#D5F5ED","success-100":"#F1FCF9","warning-10":"#1F1500","warning-20":"#362500","warning-30":"#4D3501","warning-40":"#6A4801","warning-50":"#8B6001","warning-60":"#BF8301","warning-70":"#EAA102","warning-80":"#FFBF34","warning-90":"#FFDC8F","warning-95":"#FFEDC7","warning-100":"#FFF8EA","error-10":"#270F10","error-20":"#441B1B","error-30":"#612627","error-40":"#853535","error-50":"#AF4546","error-60":"#EC6162","error-70":"#F29696","error-80":"#F7BBBC","error-90":"#FAD8D8","error-95":"#FCEAEA","error-100":"#FEF7F7","info-10":"#0F1627","info-20":"#1B2745","info-30":"#273763","info-40":"#354D88","info-50":"#4665B3","info-60":"#618AF6","info-70":"#8DADFF","info-80":"#B4C9FF","info-90":"#D3DFFF","info-95":"#E9EFFF","info-100":"#F5F8FF",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},xn={"brand-10":"#0E113C","brand-20":"#191E67","brand-30":"#232A92","brand-40":"#233FC2","brand-50":"#135CEA","brand-60":"#378FFB","brand-70":"#71B3FD","brand-80":"#9DCFFE","brand-90":"#C1E5FF","brand-95":"#DCF1FF","brand-100":"#F3FAFF","primary-10":"#0E113C","primary-20":"#191E67","primary-30":"#232A92","primary-40":"#233FC2","primary-50":"#135CEA","primary-60":"#378FFB","primary-70":"#71B3FD","primary-80":"#9DCFFE","primary-90":"#C1E5FF","primary-95":"#DCF1FF","primary-100":"#F3FAFF","secondary-10":"#34001F","secondary-20":"#540033","secondary-30":"#730045","secondary-40":"#9D0054","secondary-50":"#C61C64","secondary-60":"#DE6792","secondary-70":"#EB96B6","secondary-80":"#F5BAD2","secondary-90":"#FCD5E3","secondary-95":"#FDEBF1","secondary-100":"#FDF6F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Fn={collections:{lifesg:hn,bookingsg:gn,rbs:fn,mylegacy:mn,ccube:bn,oneservice:yn,pa:pn,a11yplayground:vn,supportgowhere:xn},defaultValue:"lifesg"},wn={collections:{lifesg:hn,bookingsg:gn,rbs:fn,mylegacy:mn,ccube:bn,oneservice:yn,pa:pn,a11yplayground:vn,supportgowhere:xn},defaultValue:"lifesg"},$n=e=>r=>{var n;const t=r.theme,i="dark"===(null==t?void 0:t.colourMode),s=an(i?wn:Fn,null==t?void 0:t.colourScheme),o=i?"primitiveColourDark":"primitiveColour",a=null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n[o];return a?on(s,e,a):s[e]},Dn={"brand-10":$n("brand-10"),"brand-20":$n("brand-20"),"brand-30":$n("brand-30"),"brand-40":$n("brand-40"),"brand-50":$n("brand-50"),"brand-60":$n("brand-60"),"brand-70":$n("brand-70"),"brand-80":$n("brand-80"),"brand-90":$n("brand-90"),"brand-95":$n("brand-95"),"brand-100":$n("brand-100"),"primary-10":$n("primary-10"),"primary-20":$n("primary-20"),"primary-30":$n("primary-30"),"primary-40":$n("primary-40"),"primary-50":$n("primary-50"),"primary-60":$n("primary-60"),"primary-70":$n("primary-70"),"primary-80":$n("primary-80"),"primary-90":$n("primary-90"),"primary-95":$n("primary-95"),"primary-100":$n("primary-100"),"secondary-10":$n("secondary-10"),"secondary-20":$n("secondary-20"),"secondary-30":$n("secondary-30"),"secondary-40":$n("secondary-40"),"secondary-50":$n("secondary-50"),"secondary-60":$n("secondary-60"),"secondary-70":$n("secondary-70"),"secondary-80":$n("secondary-80"),"secondary-90":$n("secondary-90"),"secondary-95":$n("secondary-95"),"secondary-100":$n("secondary-100"),"neutral-10":$n("neutral-10"),"neutral-20":$n("neutral-20"),"neutral-30":$n("neutral-30"),"neutral-40":$n("neutral-40"),"neutral-50":$n("neutral-50"),"neutral-60":$n("neutral-60"),"neutral-70":$n("neutral-70"),"neutral-80":$n("neutral-80"),"neutral-90":$n("neutral-90"),"neutral-95":$n("neutral-95"),"neutral-100":$n("neutral-100"),"success-10":$n("success-10"),"success-20":$n("success-20"),"success-30":$n("success-30"),"success-40":$n("success-40"),"success-50":$n("success-50"),"success-60":$n("success-60"),"success-70":$n("success-70"),"success-80":$n("success-80"),"success-90":$n("success-90"),"success-95":$n("success-95"),"success-100":$n("success-100"),"warning-10":$n("warning-10"),"warning-20":$n("warning-20"),"warning-30":$n("warning-30"),"warning-40":$n("warning-40"),"warning-50":$n("warning-50"),"warning-60":$n("warning-60"),"warning-70":$n("warning-70"),"warning-80":$n("warning-80"),"warning-90":$n("warning-90"),"warning-95":$n("warning-95"),"warning-100":$n("warning-100"),"error-10":$n("error-10"),"error-20":$n("error-20"),"error-30":$n("error-30"),"error-40":$n("error-40"),"error-50":$n("error-50"),"error-60":$n("error-60"),"error-70":$n("error-70"),"error-80":$n("error-80"),"error-90":$n("error-90"),"error-95":$n("error-95"),"error-100":$n("error-100"),"info-10":$n("info-10"),"info-20":$n("info-20"),"info-30":$n("info-30"),"info-40":$n("info-40"),"info-50":$n("info-50"),"info-60":$n("info-60"),"info-70":$n("info-70"),"info-80":$n("info-80"),"info-90":$n("info-90"),"info-95":$n("info-95"),"info-100":$n("info-100"),white:$n("white"),black:$n("black"),"primary-inverse":$n("primary-inverse")},En={text:$n("neutral-20"),"text-subtle":$n("neutral-30"),"text-subtler":$n("neutral-50"),"text-subtlest":$n("neutral-60"),"text-primary":$n("primary-50"),"text-hover":$n("primary-40"),"text-selected":$n("primary-50"),"text-selected-hover":$n("primary-40"),"text-disabled":$n("neutral-50"),"text-disabled-subtle":$n("neutral-60"),"text-disabled-subtlest":$n("neutral-80"),"text-selected-disabled":$n("neutral-20"),"text-success":$n("success-40"),"text-warning":$n("warning-40"),"text-error":$n("error-40"),"text-info":$n("info-40"),"text-inverse":$n("white"),icon:$n("neutral-50"),"icon-subtle":$n("neutral-60"),"icon-strongest":$n("neutral-20"),"icon-primary":$n("primary-50"),"icon-primary-subtle":$n("primary-60"),"icon-primary-subtlest":$n("primary-70"),"icon-hover":$n("primary-40"),"icon-selected":$n("primary-50"),"icon-selected-hover":$n("primary-40"),"icon-disabled":$n("neutral-50"),"icon-disabled-subtle":$n("neutral-60"),"icon-selected-disabled":$n("neutral-60"),"icon-success":$n("success-50"),"icon-warning":$n("warning-60"),"icon-error":$n("error-50"),"icon-error-strong":$n("error-40"),"icon-info":$n("info-50"),"icon-inverse":$n("white"),"icon-primary-inverse":$n("primary-inverse"),border:$n("neutral-90"),"border-strong":$n("neutral-70"),"border-stronger":$n("neutral-50"),"border-primary":$n("primary-50"),"border-primary-subtle":$n("primary-60"),"border-hover":$n("primary-90"),"border-hover-strong":$n("primary-60"),"border-selected":$n("primary-50"),"border-selected-subtle":$n("primary-70"),"border-selected-subtlest":$n("primary-90"),"border-selected-hover":$n("primary-40"),"border-focus":$n("primary-60"),"border-focus-strong":$n("primary-50"),"border-disabled":$n("neutral-90"),"border-selected-disabled":$n("neutral-70"),"border-success":$n("success-60"),"border-warning":$n("warning-60"),"border-error":$n("error-60"),"border-error-focus":$n("error-60"),"border-error-focus-strong":$n("error-40"),"border-error-strong":$n("error-40"),"border-info":$n("info-60"),bg:$n("white"),"bg-strong":$n("neutral-100"),"bg-stronger":$n("neutral-95"),"bg-strongest":$n("neutral-90"),"bg-hover":$n("primary-95"),"bg-hover-strong":$n("primary-90"),"bg-hover-subtle":$n("primary-100"),"bg-hover-neutral":$n("neutral-100"),"bg-hover-neutral-strong":$n("neutral-90"),"bg-selected":$n("primary-95"),"bg-selected-hover":$n("primary-90"),"bg-selected-strong":$n("primary-90"),"bg-selected-stronger":$n("primary-70"),"bg-selected-strongest":$n("primary-50"),"bg-selected-strongest-hover":$n("primary-40"),"bg-disabled":$n("neutral-95"),"bg-selected-disabled":$n("neutral-95"),"bg-selected-stronger-disabled":$n("neutral-70"),"bg-success":$n("success-100"),"bg-success-hover":$n("success-95"),"bg-success-strong":$n("success-50"),"bg-success-strong-hover":$n("success-40"),"bg-warning":$n("warning-100"),"bg-warning-hover":$n("warning-95"),"bg-warning-strong":$n("warning-50"),"bg-warning-strong-hover":$n("warning-40"),"bg-info":$n("info-100"),"bg-info-hover":$n("info-95"),"bg-info-strong":$n("info-50"),"bg-info-strong-hover":$n("info-40"),"bg-error":$n("error-100"),"bg-error-hover":$n("error-95"),"bg-error-strong":$n("error-50"),"bg-error-strong-hover":$n("error-40"),"bg-inverse":$n("neutral-20"),"bg-inverse-subtle":$n("neutral-30"),"bg-inverse-subtler":$n("neutral-50"),"bg-inverse-subtlest":$n("neutral-60"),"bg-inverse-hover":$n("neutral-40"),"bg-primary":$n("primary-50"),"bg-primary-subtle":$n("primary-60"),"bg-primary-subtler":$n("primary-95"),"bg-primary-subtlest":$n("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":$n("primary-40"),"bg-primary-subtlest-hover":$n("primary-90"),"bg-primary-subtlest-selected":$n("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:$n("primary-50"),"hyperlink-hover":$n("primary-40"),"hyperlink-visited":$n("primary-40"),"hyperlink-inverse":$n("primary-inverse"),"focus-ring":$n("primary-50"),"focus-ring-inverse":$n("white")},Cn={text:$n("neutral-100"),"text-subtle":$n("neutral-80"),"text-subtler":$n("neutral-60"),"text-subtlest":$n("neutral-50"),"text-primary":$n("primary-60"),"text-hover":$n("primary-70"),"text-selected":$n("primary-60"),"text-selected-hover":$n("primary-70"),"text-disabled":$n("neutral-60"),"text-disabled-subtle":$n("neutral-50"),"text-disabled-subtlest":$n("neutral-30"),"text-selected-disabled":$n("neutral-90"),"text-success":$n("success-70"),"text-warning":$n("warning-70"),"text-error":$n("error-70"),"text-info":$n("info-70"),"text-inverse":$n("black"),icon:$n("neutral-60"),"icon-subtle":$n("neutral-50"),"icon-strongest":$n("neutral-90"),"icon-primary":$n("primary-60"),"icon-primary-subtle":$n("primary-50"),"icon-primary-subtlest":$n("primary-40"),"icon-hover":$n("primary-70"),"icon-selected":$n("primary-60"),"icon-selected-hover":$n("primary-70"),"icon-disabled":$n("neutral-60"),"icon-disabled-subtle":$n("neutral-50"),"icon-selected-disabled":$n("neutral-50"),"icon-success":$n("success-60"),"icon-warning":$n("warning-50"),"icon-error":$n("error-60"),"icon-error-strong":$n("error-70"),"icon-info":$n("info-60"),"icon-inverse":$n("black"),"icon-primary-inverse":$n("primary-inverse"),border:$n("neutral-20"),"border-strong":$n("neutral-40"),"border-stronger":$n("neutral-60"),"border-primary":$n("primary-60"),"border-primary-subtle":$n("primary-50"),"border-hover":$n("primary-20"),"border-hover-strong":$n("primary-50"),"border-selected":$n("primary-60"),"border-selected-subtle":$n("primary-40"),"border-selected-subtlest":$n("primary-20"),"border-selected-hover":$n("primary-70"),"border-focus":$n("primary-50"),"border-focus-strong":$n("primary-60"),"border-disabled":$n("neutral-20"),"border-selected-disabled":$n("neutral-40"),"border-success":$n("success-50"),"border-warning":$n("warning-50"),"border-error":$n("error-50"),"border-error-focus":$n("error-50"),"border-error-focus-strong":$n("error-70"),"border-error-strong":$n("error-70"),"border-info":$n("info-50"),bg:$n("black"),"bg-strong":$n("neutral-10"),"bg-stronger":$n("neutral-20"),"bg-strongest":$n("neutral-20"),"bg-hover":$n("primary-20"),"bg-hover-strong":$n("primary-20"),"bg-hover-subtle":$n("primary-10"),"bg-hover-neutral":$n("neutral-10"),"bg-hover-neutral-strong":$n("neutral-20"),"bg-selected":$n("primary-20"),"bg-selected-hover":$n("primary-20"),"bg-selected-strong":$n("primary-20"),"bg-selected-stronger":$n("primary-40"),"bg-selected-strongest":$n("primary-60"),"bg-selected-strongest-hover":$n("primary-70"),"bg-disabled":$n("neutral-20"),"bg-selected-disabled":$n("neutral-20"),"bg-selected-stronger-disabled":$n("neutral-40"),"bg-success":$n("success-10"),"bg-success-hover":$n("success-20"),"bg-success-strong":$n("success-60"),"bg-success-strong-hover":$n("success-70"),"bg-warning":$n("warning-10"),"bg-warning-hover":$n("warning-20"),"bg-warning-strong":$n("warning-60"),"bg-warning-strong-hover":$n("warning-70"),"bg-info":$n("info-10"),"bg-info-hover":$n("info-20"),"bg-info-strong":$n("info-60"),"bg-info-strong-hover":$n("info-70"),"bg-error":$n("error-10"),"bg-error-hover":$n("error-20"),"bg-error-strong":$n("error-60"),"bg-error-strong-hover":$n("error-70"),"bg-inverse":$n("neutral-90"),"bg-inverse-subtle":$n("neutral-80"),"bg-inverse-subtler":$n("neutral-60"),"bg-inverse-subtlest":$n("neutral-50"),"bg-inverse-hover":$n("neutral-70"),"bg-primary":$n("primary-60"),"bg-primary-subtle":$n("primary-50"),"bg-primary-subtler":$n("primary-20"),"bg-primary-subtlest":$n("primary-10"),"bg-available":"#185339","bg-primary-hover":$n("primary-70"),"bg-primary-subtlest-hover":$n("primary-20"),"bg-primary-subtlest-selected":$n("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:$n("primary-60"),"hyperlink-hover":$n("primary-70"),"hyperlink-visited":$n("primary-70"),"hyperlink-inverse":$n("primary-inverse"),"focus-ring":$n("primary-60"),"focus-ring-inverse":$n("black")},Bn={text:$n("neutral-30"),"text-subtle":$n("neutral-40"),"text-subtler":$n("neutral-50"),"text-subtlest":$n("neutral-70"),"text-primary":$n("neutral-10"),"text-hover":$n("neutral-70"),"text-selected":$n("neutral-20"),"text-selected-hover":$n("neutral-10"),"text-disabled":$n("neutral-50"),"text-disabled-subtle":$n("neutral-60"),"text-disabled-subtlest":$n("neutral-80"),"text-selected-disabled":$n("neutral-40"),"text-success":$n("success-40"),"text-warning":$n("warning-40"),"text-error":$n("brand-30"),"text-info":$n("neutral-40"),"text-inverse":$n("neutral-100"),icon:$n("neutral-40"),"icon-subtle":$n("neutral-50"),"icon-strongest":$n("neutral-10"),"icon-primary":$n("neutral-10"),"icon-primary-subtle":$n("neutral-30"),"icon-primary-subtlest":$n("neutral-60"),"icon-hover":$n("neutral-70"),"icon-selected":$n("brand-20"),"icon-selected-hover":$n("brand-10"),"icon-disabled":$n("neutral-50"),"icon-disabled-subtle":$n("neutral-60"),"icon-selected-disabled":$n("neutral-40"),"icon-success":$n("success-40"),"icon-warning":$n("warning-60"),"icon-error":$n("brand-30"),"icon-error-strong":$n("brand-10"),"icon-info":$n("neutral-40"),"icon-inverse":$n("neutral-100"),"icon-primary-inverse":"#F9B371",border:$n("neutral-90"),"border-strong":$n("neutral-30"),"border-stronger":$n("neutral-20"),"border-primary":$n("neutral-40"),"border-primary-subtle":$n("neutral-60"),"border-hover":$n("neutral-80"),"border-hover-strong":$n("neutral-10"),"border-selected":$n("brand-20"),"border-selected-subtle":$n("neutral-40"),"border-selected-subtlest":$n("neutral-70"),"border-selected-hover":$n("neutral-10"),"border-focus":$n("neutral-20"),"border-focus-strong":$n("neutral-10"),"border-disabled":$n("neutral-90"),"border-selected-disabled":$n("neutral-80"),"border-success":$n("success-40"),"border-warning":$n("warning-60"),"border-error":$n("brand-30"),"border-error-focus":$n("brand-20"),"border-error-focus-strong":$n("brand-10"),"border-error-strong":$n("brand-20"),"border-info":$n("neutral-40"),bg:$n("neutral-100"),"bg-strong":$n("neutral-95"),"bg-stronger":$n("neutral-90"),"bg-strongest":$n("neutral-80"),"bg-hover":$n("brand-90"),"bg-hover-strong":$n("brand-80"),"bg-hover-subtle":$n("neutral-90"),"bg-hover-neutral":$n("neutral-90"),"bg-hover-neutral-strong":$n("neutral-90"),"bg-selected":$n("brand-100"),"bg-selected-hover":$n("brand-30"),"bg-selected-strong":$n("brand-50"),"bg-selected-stronger":$n("brand-40"),"bg-selected-strongest":$n("brand-20"),"bg-selected-strongest-hover":$n("brand-10"),"bg-disabled":$n("neutral-90"),"bg-selected-disabled":$n("neutral-90"),"bg-selected-stronger-disabled":$n("neutral-80"),"bg-success":$n("success-100"),"bg-success-hover":$n("success-95"),"bg-success-strong":$n("success-50"),"bg-success-strong-hover":$n("success-40"),"bg-warning":$n("warning-100"),"bg-warning-hover":$n("warning-95"),"bg-warning-strong":$n("warning-50"),"bg-warning-strong-hover":$n("warning-40"),"bg-info":$n("neutral-95"),"bg-info-hover":$n("info-95"),"bg-info-strong":$n("info-50"),"bg-info-strong-hover":$n("info-40"),"bg-error":$n("brand-100"),"bg-error-hover":$n("error-95"),"bg-error-strong":$n("error-50"),"bg-error-strong-hover":$n("error-40"),"bg-inverse":$n("neutral-40"),"bg-inverse-subtle":$n("neutral-60"),"bg-inverse-subtler":$n("neutral-70"),"bg-inverse-subtlest":$n("neutral-80"),"bg-inverse-hover":$n("neutral-30"),"bg-primary":$n("brand-20"),"bg-primary-subtle":$n("brand-60"),"bg-primary-subtler":$n("brand-80"),"bg-primary-subtlest":$n("brand-100"),"bg-available":$n("success-60"),"bg-primary-hover":$n("brand-10"),"bg-primary-subtlest-hover":$n("brand-80"),"bg-primary-subtlest-selected":$n("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:$n("neutral-10"),"hyperlink-hover":$n("neutral-40"),"hyperlink-visited":$n("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":$n("primary-50"),"focus-ring-inverse":$n("white")},Sn={text:$n("neutral-20"),"text-subtle":$n("neutral-30"),"text-subtler":$n("neutral-50"),"text-subtlest":$n("neutral-60"),"text-primary":$n("primary-50"),"text-hover":$n("primary-40"),"text-selected":$n("primary-50"),"text-selected-hover":$n("primary-40"),"text-disabled":$n("neutral-50"),"text-disabled-subtle":$n("neutral-60"),"text-disabled-subtlest":$n("neutral-80"),"text-selected-disabled":$n("neutral-20"),"text-success":$n("success-40"),"text-warning":$n("warning-40"),"text-error":$n("error-40"),"text-info":$n("info-40"),"text-inverse":$n("white"),icon:$n("neutral-50"),"icon-subtle":$n("neutral-60"),"icon-strongest":$n("neutral-20"),"icon-primary":$n("primary-50"),"icon-primary-subtle":$n("primary-60"),"icon-primary-subtlest":$n("primary-70"),"icon-hover":$n("primary-40"),"icon-selected":$n("primary-50"),"icon-selected-hover":$n("primary-40"),"icon-disabled":$n("neutral-50"),"icon-disabled-subtle":$n("neutral-60"),"icon-selected-disabled":$n("neutral-60"),"icon-success":$n("success-50"),"icon-warning":$n("warning-60"),"icon-error":$n("error-50"),"icon-error-strong":$n("error-40"),"icon-info":$n("info-50"),"icon-inverse":$n("white"),"icon-primary-inverse":$n("primary-inverse"),border:$n("neutral-90"),"border-strong":$n("neutral-70"),"border-stronger":$n("neutral-50"),"border-primary":$n("primary-50"),"border-primary-subtle":$n("primary-60"),"border-hover":$n("primary-90"),"border-hover-strong":$n("primary-60"),"border-selected":$n("primary-50"),"border-selected-subtle":$n("primary-70"),"border-selected-subtlest":$n("primary-90"),"border-selected-hover":$n("primary-40"),"border-focus":$n("primary-60"),"border-focus-strong":$n("primary-50"),"border-disabled":$n("neutral-90"),"border-selected-disabled":$n("neutral-70"),"border-success":$n("success-60"),"border-warning":$n("warning-60"),"border-error":$n("error-60"),"border-error-focus":$n("error-60"),"border-error-focus-strong":$n("error-40"),"border-error-strong":$n("error-40"),"border-info":$n("info-60"),bg:$n("white"),"bg-strong":$n("neutral-100"),"bg-stronger":$n("neutral-95"),"bg-strongest":$n("neutral-90"),"bg-hover":$n("primary-95"),"bg-hover-strong":$n("primary-90"),"bg-hover-subtle":$n("primary-100"),"bg-hover-neutral":$n("neutral-100"),"bg-hover-neutral-strong":$n("neutral-90"),"bg-selected":$n("primary-95"),"bg-selected-hover":$n("primary-90"),"bg-selected-strong":$n("primary-90"),"bg-selected-stronger":$n("primary-70"),"bg-selected-strongest":$n("primary-50"),"bg-selected-strongest-hover":$n("primary-40"),"bg-disabled":$n("neutral-95"),"bg-selected-disabled":$n("neutral-95"),"bg-selected-stronger-disabled":$n("neutral-70"),"bg-success":$n("success-100"),"bg-success-hover":$n("success-95"),"bg-success-strong":$n("success-50"),"bg-success-strong-hover":$n("success-40"),"bg-warning":$n("warning-100"),"bg-warning-hover":$n("warning-95"),"bg-warning-strong":$n("warning-50"),"bg-warning-strong-hover":$n("warning-40"),"bg-info":$n("info-100"),"bg-info-hover":$n("info-95"),"bg-info-strong":$n("info-50"),"bg-info-strong-hover":$n("info-40"),"bg-error":$n("error-100"),"bg-error-hover":$n("error-95"),"bg-error-strong":$n("error-50"),"bg-error-strong-hover":$n("error-40"),"bg-inverse":$n("neutral-20"),"bg-inverse-subtle":$n("neutral-30"),"bg-inverse-subtler":$n("neutral-50"),"bg-inverse-subtlest":$n("neutral-60"),"bg-inverse-hover":$n("neutral-40"),"bg-primary":$n("primary-50"),"bg-primary-subtle":$n("primary-60"),"bg-primary-subtler":$n("primary-95"),"bg-primary-subtlest":$n("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":$n("primary-40"),"bg-primary-subtlest-hover":$n("primary-90"),"bg-primary-subtlest-selected":$n("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:$n("primary-50"),"hyperlink-hover":$n("primary-40"),"hyperlink-visited":$n("primary-40"),"hyperlink-inverse":$n("primary-inverse"),"focus-ring":$n("primary-50"),"focus-ring-inverse":$n("white")},An={text:$n("neutral-100"),"text-subtle":$n("neutral-80"),"text-subtler":$n("neutral-60"),"text-subtlest":$n("neutral-50"),"text-primary":$n("primary-60"),"text-hover":$n("primary-70"),"text-selected":$n("primary-60"),"text-selected-hover":$n("primary-70"),"text-disabled":$n("neutral-60"),"text-disabled-subtle":$n("neutral-50"),"text-disabled-subtlest":$n("neutral-30"),"text-selected-disabled":$n("neutral-90"),"text-success":$n("success-70"),"text-warning":$n("warning-70"),"text-error":$n("error-70"),"text-info":$n("info-70"),"text-inverse":$n("black"),icon:$n("neutral-60"),"icon-subtle":$n("neutral-50"),"icon-strongest":$n("neutral-90"),"icon-primary":$n("primary-60"),"icon-primary-subtle":$n("primary-50"),"icon-primary-subtlest":$n("primary-40"),"icon-hover":$n("primary-70"),"icon-selected":$n("primary-60"),"icon-selected-hover":$n("primary-70"),"icon-disabled":$n("neutral-60"),"icon-disabled-subtle":$n("neutral-50"),"icon-selected-disabled":$n("neutral-50"),"icon-success":$n("success-60"),"icon-warning":$n("warning-50"),"icon-error":$n("error-60"),"icon-error-strong":$n("error-70"),"icon-info":$n("info-60"),"icon-inverse":$n("black"),"icon-primary-inverse":$n("primary-inverse"),border:$n("neutral-20"),"border-strong":$n("neutral-40"),"border-stronger":$n("neutral-60"),"border-primary":$n("primary-60"),"border-primary-subtle":$n("primary-50"),"border-hover":$n("primary-20"),"border-hover-strong":$n("primary-50"),"border-selected":$n("primary-60"),"border-selected-subtle":$n("primary-40"),"border-selected-subtlest":$n("primary-20"),"border-selected-hover":$n("primary-70"),"border-focus":$n("primary-50"),"border-focus-strong":$n("primary-60"),"border-disabled":$n("neutral-20"),"border-selected-disabled":$n("neutral-40"),"border-success":$n("success-50"),"border-warning":$n("warning-50"),"border-error":$n("error-50"),"border-error-focus":$n("error-50"),"border-error-focus-strong":$n("error-70"),"border-error-strong":$n("error-70"),"border-info":$n("info-50"),bg:$n("black"),"bg-strong":$n("neutral-10"),"bg-stronger":$n("neutral-20"),"bg-strongest":$n("neutral-20"),"bg-hover":$n("primary-20"),"bg-hover-strong":$n("primary-20"),"bg-hover-subtle":$n("primary-10"),"bg-hover-neutral":$n("neutral-10"),"bg-hover-neutral-strong":$n("neutral-20"),"bg-selected":$n("primary-20"),"bg-selected-hover":$n("primary-20"),"bg-selected-strong":$n("primary-20"),"bg-selected-stronger":$n("primary-40"),"bg-selected-strongest":$n("primary-60"),"bg-selected-strongest-hover":$n("primary-70"),"bg-disabled":$n("neutral-20"),"bg-selected-disabled":$n("neutral-20"),"bg-selected-stronger-disabled":$n("neutral-40"),"bg-success":$n("success-10"),"bg-success-hover":$n("success-20"),"bg-success-strong":$n("success-60"),"bg-success-strong-hover":$n("success-70"),"bg-warning":$n("warning-10"),"bg-warning-hover":$n("warning-20"),"bg-warning-strong":$n("warning-60"),"bg-warning-strong-hover":$n("warning-70"),"bg-info":$n("info-10"),"bg-info-hover":$n("info-20"),"bg-info-strong":$n("info-60"),"bg-info-strong-hover":$n("info-70"),"bg-error":$n("error-10"),"bg-error-hover":$n("error-20"),"bg-error-strong":$n("error-60"),"bg-error-strong-hover":$n("error-70"),"bg-inverse":$n("neutral-90"),"bg-inverse-subtle":$n("neutral-80"),"bg-inverse-subtler":$n("neutral-60"),"bg-inverse-subtlest":$n("neutral-50"),"bg-inverse-hover":$n("neutral-70"),"bg-primary":$n("primary-60"),"bg-primary-subtle":$n("primary-50"),"bg-primary-subtler":$n("primary-20"),"bg-primary-subtlest":$n("primary-10"),"bg-available":"#185339","bg-primary-hover":$n("primary-70"),"bg-primary-subtlest-hover":$n("primary-20"),"bg-primary-subtlest-selected":$n("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:$n("primary-60"),"hyperlink-hover":$n("primary-70"),"hyperlink-visited":$n("primary-70"),"hyperlink-inverse":$n("primary-inverse"),"focus-ring":$n("primary-60"),"focus-ring-inverse":$n("black")},kn={collections:{lifesg:En,bookingsg:En,rbs:En,mylegacy:En,ccube:En,oneservice:En,pa:Bn,a11yplayground:Sn,supportgowhere:En},defaultValue:"lifesg"},zn={collections:{lifesg:Cn,bookingsg:Cn,rbs:Cn,mylegacy:Cn,ccube:Cn,oneservice:Cn,pa:Cn,a11yplayground:An,supportgowhere:Cn},defaultValue:"lifesg"},Mn=e=>r=>{var n;const t=r.theme,i="dark"===(null==t?void 0:t.colourMode),s=an(i?zn:kn,null==t?void 0:t.colourScheme),o=i?"semanticColourDark":"semanticColour",a=null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n[o],l=a?on(s,e,a):s[e];return"function"==typeof l?l(r):l},On={text:Mn("text"),"text-subtle":Mn("text-subtle"),"text-subtler":Mn("text-subtler"),"text-subtlest":Mn("text-subtlest"),"text-primary":Mn("text-primary"),"text-hover":Mn("text-hover"),"text-selected":Mn("text-selected"),"text-selected-hover":Mn("text-selected-hover"),"text-disabled":Mn("text-disabled"),"text-disabled-subtle":Mn("text-disabled-subtle"),"text-disabled-subtlest":Mn("text-disabled-subtlest"),"text-selected-disabled":Mn("text-selected-disabled"),"text-success":Mn("text-success"),"text-warning":Mn("text-warning"),"text-error":Mn("text-error"),"text-info":Mn("text-info"),"text-inverse":Mn("text-inverse"),icon:Mn("icon"),"icon-subtle":Mn("icon-subtle"),"icon-strongest":Mn("icon-strongest"),"icon-primary":Mn("icon-primary"),"icon-primary-subtle":Mn("icon-primary-subtle"),"icon-primary-subtlest":Mn("icon-primary-subtlest"),"icon-hover":Mn("icon-hover"),"icon-selected":Mn("icon-selected"),"icon-selected-hover":Mn("icon-selected-hover"),"icon-disabled":Mn("icon-disabled"),"icon-disabled-subtle":Mn("icon-disabled-subtle"),"icon-selected-disabled":Mn("icon-selected-disabled"),"icon-success":Mn("icon-success"),"icon-warning":Mn("icon-warning"),"icon-error":Mn("icon-error"),"icon-error-strong":Mn("icon-error-strong"),"icon-info":Mn("icon-info"),"icon-inverse":Mn("icon-inverse"),"icon-primary-inverse":Mn("icon-primary-inverse"),border:Mn("border"),"border-strong":Mn("border-strong"),"border-stronger":Mn("border-stronger"),"border-primary":Mn("border-primary"),"border-primary-subtle":Mn("border-primary-subtle"),"border-hover":Mn("border-hover"),"border-hover-strong":Mn("border-hover-strong"),"border-selected":Mn("border-selected"),"border-selected-subtle":Mn("border-selected-subtle"),"border-selected-subtlest":Mn("border-selected-subtlest"),"border-selected-hover":Mn("border-selected-hover"),"border-focus":Mn("border-focus"),"border-focus-strong":Mn("border-focus-strong"),"border-disabled":Mn("border-disabled"),"border-selected-disabled":Mn("border-selected-disabled"),"border-success":Mn("border-success"),"border-warning":Mn("border-warning"),"border-error":Mn("border-error"),"border-error-focus":Mn("border-error-focus"),"border-error-focus-strong":Mn("border-error-focus-strong"),"border-error-strong":Mn("border-error-strong"),"border-info":Mn("border-info"),bg:Mn("bg"),"bg-strong":Mn("bg-strong"),"bg-stronger":Mn("bg-stronger"),"bg-strongest":Mn("bg-strongest"),"bg-hover":Mn("bg-hover"),"bg-hover-strong":Mn("bg-hover-strong"),"bg-hover-subtle":Mn("bg-hover-subtle"),"bg-hover-neutral":Mn("bg-hover-neutral"),"bg-hover-neutral-strong":Mn("bg-hover-neutral-strong"),"bg-selected":Mn("bg-selected"),"bg-selected-hover":Mn("bg-selected-hover"),"bg-selected-strong":Mn("bg-selected-strong"),"bg-selected-stronger":Mn("bg-selected-stronger"),"bg-selected-strongest":Mn("bg-selected-strongest"),"bg-selected-strongest-hover":Mn("bg-selected-strongest-hover"),"bg-disabled":Mn("bg-disabled"),"bg-selected-disabled":Mn("bg-selected-disabled"),"bg-selected-stronger-disabled":Mn("bg-selected-stronger-disabled"),"bg-success":Mn("bg-success"),"bg-success-hover":Mn("bg-success-hover"),"bg-success-strong":Mn("bg-success-strong"),"bg-success-strong-hover":Mn("bg-success-strong-hover"),"bg-warning":Mn("bg-warning"),"bg-warning-hover":Mn("bg-warning-hover"),"bg-warning-strong":Mn("bg-warning-strong"),"bg-warning-strong-hover":Mn("bg-warning-strong-hover"),"bg-info":Mn("bg-info"),"bg-info-hover":Mn("bg-info-hover"),"bg-info-strong":Mn("bg-info-strong"),"bg-info-strong-hover":Mn("bg-info-strong-hover"),"bg-error":Mn("bg-error"),"bg-error-hover":Mn("bg-error-hover"),"bg-error-strong":Mn("bg-error-strong"),"bg-error-strong-hover":Mn("bg-error-strong-hover"),"bg-inverse":Mn("bg-inverse"),"bg-inverse-subtle":Mn("bg-inverse-subtle"),"bg-inverse-subtler":Mn("bg-inverse-subtler"),"bg-inverse-subtlest":Mn("bg-inverse-subtlest"),"bg-inverse-hover":Mn("bg-inverse-hover"),"bg-primary":Mn("bg-primary"),"bg-primary-subtle":Mn("bg-primary-subtle"),"bg-primary-subtler":Mn("bg-primary-subtler"),"bg-primary-subtlest":Mn("bg-primary-subtlest"),"bg-available":Mn("bg-available"),"bg-primary-hover":Mn("bg-primary-hover"),"bg-primary-subtlest-hover":Mn("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":Mn("bg-primary-subtlest-selected"),"overlay-strong":Mn("overlay-strong"),"overlay-subtle":Mn("overlay-subtle"),hyperlink:Mn("hyperlink"),"hyperlink-hover":Mn("hyperlink-hover"),"hyperlink-visited":Mn("hyperlink-visited"),"hyperlink-inverse":Mn("hyperlink-inverse"),"focus-ring":Mn("focus-ring"),"focus-ring-inverse":Mn("focus-ring-inverse")},_n={collections:{default:{solid:e=>r=>{var n,t,i;const{thickness:s,radius:o,colour:a}=e||{},l=null!==(n="function"==typeof s?s(r):s)&&void 0!==n?n:cn["width-010"](r),c=null!==(t="function"==typeof o?o(r):o)&&void 0!==t?t:0,u=null!==(i="function"==typeof a?a(r):a)&&void 0!==i?i:On.border(r),g=cn.solid;return d`
            border: ${l} ${g} ${u};
            border-radius: ${c};
        `},"dashed-default":e=>r=>{var n,t,i;const{thickness:s,radius:o,colour:a}=e||{},l=null!==(n="function"==typeof s?s(r):s)&&void 0!==n?n:cn["width-010"](r),c=null!==(t="function"==typeof o?o(r):o)&&void 0!==t?t:0,u=null!==(i="function"==typeof a?a(r):a)&&void 0!==i?i:On.border(r),g=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${c}' ry='${c}' stroke='${u}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return d`
            background-image: url("data:image/svg+xml,${g}");
            border-radius: ${c};
        `}}},defaultValue:"default"},Tn=e=>1===e.length&&"theme"in e[0],Yn=e=>(...r)=>n=>{const t=Tn(r)?[]:r,i=Tn(r)?r[0]:n,s=i.theme;return(0,an(_n,null==s?void 0:s.borderScheme)[e])(...t)(i)},jn={solid:Yn("solid"),"dashed-default":Yn("dashed-default")},Ln={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":480,"md-min":481,"md-max":768,"lg-min":769,"lg-max":1200,"xl-min":1201,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},Wn=e=>r=>{var n;const t=r.theme,i=an(Ln,null==t?void 0:t.breakpointScheme);let s;return s=(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.breakpoint)?on(i,e,t.overrides.breakpoint):i[e],s},Hn={"xxs-min":Wn("xxs-min"),"xxs-max":Wn("xxs-max"),"xs-min":Wn("xs-min"),"xs-max":Wn("xs-max"),"sm-min":Wn("sm-min"),"sm-max":Wn("sm-max"),"md-min":Wn("md-min"),"md-max":Wn("md-max"),"lg-min":Wn("lg-min"),"lg-max":Wn("lg-max"),"xl-min":Wn("xl-min"),"xl-max":Wn("xl-max"),"xxl-min":Wn("xxl-min"),"xxs-column":Wn("xxs-column"),"xs-column":Wn("xs-column"),"sm-column":Wn("sm-column"),"md-column":Wn("md-column"),"lg-column":Wn("lg-column"),"xl-column":Wn("xl-column"),"xxl-column":Wn("xxl-column"),"xxs-gutter":Wn("xxs-gutter"),"xs-gutter":Wn("xs-gutter"),"sm-gutter":Wn("sm-gutter"),"md-gutter":Wn("md-gutter"),"lg-gutter":Wn("lg-gutter"),"xl-gutter":Wn("xl-gutter"),"xxl-gutter":Wn("xxl-gutter"),"xxs-margin":Wn("xxs-margin"),"xs-margin":Wn("xs-margin"),"sm-margin":Wn("sm-margin"),"md-margin":Wn("md-margin"),"lg-margin":Wn("lg-margin"),"xl-margin":Wn("xl-margin"),"xxl-margin":Wn("xxl-margin")},In=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,n)=>(r[n]=((e,r)=>{const n=Hn["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const t=n(r);return`@media screen and (${e}: ${t}px)`}})(e,n),r)),{}),Rn={MaxWidth:In("max-width"),MinWidth:In("min-width")},Pn={collections:{default:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},bookingsg:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},pa:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.5rem","heading-size-sm":"1.25rem","heading-size-xs":"1rem","heading-lh-xxl":"3rem","heading-lh-xl":"2.5rem","heading-lh-lg":"2.25rem","heading-lh-md":"2rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.032rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.625rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.25rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},a11yplayground:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Atkinson Hyperlegible Next","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0.00875rem"},supportgowhere:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Libre Franklin","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"}},defaultValue:"default"},Nn=e=>r=>{var n;const t=r.theme,i=an(Pn,null==t?void 0:t.fontScheme);return(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.fontSpec)?on(i,e,t.overrides.fontSpec):i[e]},Vn={"heading-size-xxl":Nn("heading-size-xxl"),"heading-size-xl":Nn("heading-size-xl"),"heading-size-lg":Nn("heading-size-lg"),"heading-size-md":Nn("heading-size-md"),"heading-size-sm":Nn("heading-size-sm"),"heading-size-xs":Nn("heading-size-xs"),"heading-lh-xxl":Nn("heading-lh-xxl"),"heading-lh-xl":Nn("heading-lh-xl"),"heading-lh-lg":Nn("heading-lh-lg"),"heading-lh-md":Nn("heading-lh-md"),"heading-lh-sm":Nn("heading-lh-sm"),"heading-lh-xs":Nn("heading-lh-xs"),"heading-ls-xxl":Nn("heading-ls-xxl"),"heading-ls-xl":Nn("heading-ls-xl"),"heading-ls-lg":Nn("heading-ls-lg"),"heading-ls-md":Nn("heading-ls-md"),"heading-ls-sm":Nn("heading-ls-sm"),"heading-ls-xs":Nn("heading-ls-xs"),"weight-light":Nn("weight-light"),"weight-regular":Nn("weight-regular"),"weight-semibold":Nn("weight-semibold"),"weight-bold":Nn("weight-bold"),"font-family":Nn("font-family"),"body-size-baseline":Nn("body-size-baseline"),"body-size-md":Nn("body-size-md"),"body-size-sm":Nn("body-size-sm"),"body-size-xs":Nn("body-size-xs"),"body-lh-baseline":Nn("body-lh-baseline"),"body-lh-md":Nn("body-lh-md"),"body-lh-sm":Nn("body-lh-sm"),"body-lh-xs":Nn("body-lh-xs"),"body-ls-baseline":Nn("body-ls-baseline"),"body-ls-md":Nn("body-ls-md"),"body-ls-sm":Nn("body-ls-sm"),"body-ls-xs":Nn("body-ls-xs"),"form-label-size":Nn("form-label-size"),"form-description-size":Nn("form-description-size"),"form-label-lh":Nn("form-label-lh"),"form-description-lh":Nn("form-description-lh"),"form-label-ls":Nn("form-label-ls"),"form-description-ls":Nn("form-description-ls")},Zn=(e,r,n,t,i)=>{const{disableLigatures:s}=i||{};return d`
        font-family: ${Nn("font-family")};
        font-size: ${Nn(e)};
        font-weight: ${Nn(r)};
        line-height: ${Nn(n)};
        letter-spacing: ${Nn(t)};

        font-variant: ${s?"no-common-ligatures":"normal"};
    `},Xn=(e={})=>({"heading-xxl-light":Zn("heading-size-xxl","weight-light","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-regular":Zn("heading-size-xxl","weight-regular","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-semibold":Zn("heading-size-xxl","weight-semibold","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-bold":Zn("heading-size-xxl","weight-bold","heading-lh-xxl","heading-ls-xxl",e),"heading-xl-light":Zn("heading-size-xl","weight-light","heading-lh-xl","heading-ls-xl",e),"heading-xl-regular":Zn("heading-size-xl","weight-regular","heading-lh-xl","heading-ls-xl",e),"heading-xl-semibold":Zn("heading-size-xl","weight-semibold","heading-lh-xl","heading-ls-xl",e),"heading-xl-bold":Zn("heading-size-xl","weight-bold","heading-lh-xl","heading-ls-xl",e),"heading-lg-light":Zn("heading-size-lg","weight-light","heading-lh-lg","heading-ls-lg",e),"heading-lg-regular":Zn("heading-size-lg","weight-regular","heading-lh-lg","heading-ls-lg",e),"heading-lg-semibold":Zn("heading-size-lg","weight-semibold","heading-lh-lg","heading-ls-lg",e),"heading-lg-bold":Zn("heading-size-lg","weight-bold","heading-lh-lg","heading-ls-lg",e),"heading-md-light":Zn("heading-size-md","weight-light","heading-lh-md","heading-ls-md",e),"heading-md-regular":Zn("heading-size-md","weight-regular","heading-lh-md","heading-ls-md",e),"heading-md-semibold":Zn("heading-size-md","weight-semibold","heading-lh-md","heading-ls-md",e),"heading-md-bold":Zn("heading-size-md","weight-bold","heading-lh-md","heading-ls-md",e),"heading-sm-light":Zn("heading-size-sm","weight-light","heading-lh-sm","heading-ls-sm",e),"heading-sm-regular":Zn("heading-size-sm","weight-regular","heading-lh-sm","heading-ls-sm",e),"heading-sm-semibold":Zn("heading-size-sm","weight-semibold","heading-lh-sm","heading-ls-sm",e),"heading-sm-bold":Zn("heading-size-sm","weight-bold","heading-lh-sm","heading-ls-sm",e),"heading-xs-light":Zn("heading-size-xs","weight-light","heading-lh-xs","heading-ls-xs",e),"heading-xs-regular":Zn("heading-size-xs","weight-regular","heading-lh-xs","heading-ls-xs",e),"heading-xs-semibold":Zn("heading-size-xs","weight-semibold","heading-lh-xs","heading-ls-xs",e),"heading-xs-bold":Zn("heading-size-xs","weight-bold","heading-lh-xs","heading-ls-xs",e),"body-baseline-light":Zn("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline",e),"body-baseline-regular":Zn("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline",e),"body-baseline-semibold":Zn("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline",e),"body-baseline-bold":Zn("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline",e),"body-md-light":Zn("body-size-md","weight-light","body-lh-md","body-ls-md",e),"body-md-regular":Zn("body-size-md","weight-regular","body-lh-md","body-ls-md",e),"body-md-semibold":Zn("body-size-md","weight-semibold","body-lh-md","body-ls-md",e),"body-md-bold":Zn("body-size-md","weight-bold","body-lh-md","body-ls-md",e),"body-sm-light":Zn("body-size-sm","weight-light","body-lh-sm","body-ls-sm",e),"body-sm-regular":Zn("body-size-sm","weight-regular","body-lh-sm","body-ls-sm",e),"body-sm-semibold":Zn("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm",e),"body-sm-bold":Zn("body-size-sm","weight-bold","body-lh-sm","body-ls-sm",e),"body-xs-light":Zn("body-size-xs","weight-light","body-lh-xs","body-ls-xs",e),"body-xs-regular":Zn("body-size-xs","weight-regular","body-lh-xs","body-ls-xs",e),"body-xs-semibold":Zn("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs",e),"body-xs-bold":Zn("body-size-xs","weight-bold","body-lh-xs","body-ls-xs",e),"form-label":Zn("form-label-size","weight-semibold","form-label-lh","form-label-ls",e),"form-description":Zn("form-description-size","weight-regular","form-description-lh","form-description-ls",e)}),Un=Xn({disableLigatures:!0}),Jn={collections:{default:Xn(),bookingsg:Un,pa:Xn({disableLigatures:!0}),a11yplayground:Xn({disableLigatures:!0}),supportgowhere:Xn({disableLigatures:!0})},defaultValue:"default"},Gn=e=>r=>{var n;const t=r.theme,i=an(Jn,null==t?void 0:t.fontScheme),s=(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.font)?on(i,e,t.overrides.font):i[e];return"function"==typeof s?s(r):s},qn={"heading-xxl-light":Gn("heading-xxl-light"),"heading-xxl-regular":Gn("heading-xxl-regular"),"heading-xxl-semibold":Gn("heading-xxl-semibold"),"heading-xxl-bold":Gn("heading-xxl-bold"),"heading-xl-light":Gn("heading-xl-light"),"heading-xl-regular":Gn("heading-xl-regular"),"heading-xl-semibold":Gn("heading-xl-semibold"),"heading-xl-bold":Gn("heading-xl-bold"),"heading-lg-light":Gn("heading-lg-light"),"heading-lg-regular":Gn("heading-lg-regular"),"heading-lg-semibold":Gn("heading-lg-semibold"),"heading-lg-bold":Gn("heading-lg-bold"),"heading-md-light":Gn("heading-md-light"),"heading-md-regular":Gn("heading-md-regular"),"heading-md-semibold":Gn("heading-md-semibold"),"heading-md-bold":Gn("heading-md-bold"),"heading-sm-light":Gn("heading-sm-light"),"heading-sm-regular":Gn("heading-sm-regular"),"heading-sm-semibold":Gn("heading-sm-semibold"),"heading-sm-bold":Gn("heading-sm-bold"),"heading-xs-light":Gn("heading-xs-light"),"heading-xs-regular":Gn("heading-xs-regular"),"heading-xs-semibold":Gn("heading-xs-semibold"),"heading-xs-bold":Gn("heading-xs-bold"),"body-baseline-light":Gn("body-baseline-light"),"body-baseline-regular":Gn("body-baseline-regular"),"body-baseline-semibold":Gn("body-baseline-semibold"),"body-baseline-bold":Gn("body-baseline-bold"),"body-md-light":Gn("body-md-light"),"body-md-regular":Gn("body-md-regular"),"body-md-semibold":Gn("body-md-semibold"),"body-md-bold":Gn("body-md-bold"),"body-sm-light":Gn("body-sm-light"),"body-sm-regular":Gn("body-sm-regular"),"body-sm-semibold":Gn("body-sm-semibold"),"body-sm-bold":Gn("body-sm-bold"),"body-xs-light":Gn("body-xs-light"),"body-xs-regular":Gn("body-xs-regular"),"body-xs-semibold":Gn("body-xs-semibold"),"body-xs-bold":Gn("body-xs-bold"),"form-label":Gn("form-label"),"form-description":Gn("form-description")},Kn={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},Qn=e=>r=>{var n;const t=r.theme,i=an(Kn,null==t?void 0:t.motionScheme);return(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.motion)?on(i,e,t.overrides.motion):i[e]},et={"duration-150":Qn("duration-150"),"duration-250":Qn("duration-250"),"duration-350":Qn("duration-350"),"duration-500":Qn("duration-500"),"duration-800":Qn("duration-800"),"duration-1000":Qn("duration-1000"),"ease-default":Qn("ease-default"),"ease-standard":Qn("ease-standard"),"ease-entrance":Qn("ease-entrance"),"ease-exit":Qn("ease-exit")},rt={collections:{default:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"default"},nt=e=>r=>{var n;const t=r.theme,i=an(rt,null==t?void 0:t.radiusScheme);return(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.radius)?`${on(i,e,t.overrides.radius)}px`:`${i[e]}px`},tt={none:nt("none"),xs:nt("xs"),sm:nt("sm"),md:nt("md"),lg:nt("lg"),full:nt("full")},it=(e,r,n)=>t=>{const i=Mn(r)(t)||$n(r)(t);return`${e} rgba(from ${i} r g b / ${100*n}%)`},st={collections:{default:{"xs-subtle":it("0 0 4px 1px","neutral-50",.24),"xs-strong":it("0 0 4px 1px","neutral-50",.5),"xs-focus-strong":it("0 0 4px 1px","border-focus",.5),"xs-error-strong":it("0 0 4px 1px","border-error",.5),"sm-subtle":it("0 2px 4px 0","neutral-50",.24),"sm-strong":it("0 2px 4px 0","neutral-50",.5),"md-subtle":it("0 2px 8px 0","neutral-50",.24),"md-strong":it("0 2px 8px 0","neutral-50",.5),"lg-subtle":it("0 2px 12px 1px","neutral-50",.24),"lg-strong":it("0 2px 12px 1px","neutral-50",.5)}},defaultValue:"default"},ot=e=>r=>{var n;const t=r.theme,i=an(st,null==t?void 0:t.shadowScheme),s=(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.shadow)?on(i,e,t.overrides.shadow):i[e];return"function"==typeof s?s(r):s},at={"xs-subtle":ot("xs-subtle"),"xs-strong":ot("xs-strong"),"xs-focus-strong":ot("xs-focus-strong"),"xs-error-strong":ot("xs-error-strong"),"sm-subtle":ot("sm-subtle"),"sm-strong":ot("sm-strong"),"md-subtle":ot("md-subtle"),"md-strong":ot("md-strong"),"lg-subtle":ot("lg-subtle"),"lg-strong":ot("lg-strong")},lt={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},dt=e=>r=>{var n;const t=r.theme,i=an(lt,null==t?void 0:t.spacingScheme);return(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.spacing)?`${on(i,e,t.overrides.spacing)}px`:`${i[e]}px`},ct={"spacing-0":dt("spacing-0"),"spacing-4":dt("spacing-4"),"spacing-8":dt("spacing-8"),"spacing-12":dt("spacing-12"),"spacing-16":dt("spacing-16"),"spacing-20":dt("spacing-20"),"spacing-24":dt("spacing-24"),"spacing-32":dt("spacing-32"),"spacing-40":dt("spacing-40"),"spacing-48":dt("spacing-48"),"spacing-64":dt("spacing-64"),"spacing-72":dt("spacing-72"),"layout-xs":dt("layout-xs"),"layout-sm":dt("layout-sm"),"layout-md":dt("layout-md"),"layout-lg":dt("layout-lg"),"layout-xl":dt("layout-xl"),"layout-xxl":dt("layout-xxl"),"layout-xxxl":dt("layout-xxxl")},ut=(e,r)=>Object.assign(Object.assign({},e),{colourMode:r}),gt=Object.assign(Object.assign({},On),{Primitive:Dn}),bt=Object.assign(Object.assign({},qn),{Spec:Vn}),ht=et,mt=Object.assign(Object.assign({},cn),{Util:jn}),yt=ct,pt=tt,ft=at,vt=Rn,xt={colourScheme:"lifesg",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"lifesg",_v2:{colorScheme:"base",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"base"}},Ft={colourScheme:"bookingsg",fontScheme:"bookingsg",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"bookingsg",_v2:{colorScheme:"bookingsg",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"bookingsg"}},wt={colourScheme:"ccube",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"ccube",_v2:{colorScheme:"ccube",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"ccube"}},$t={colourScheme:"mylegacy",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"mylegacy",_v2:{colorScheme:"mylegacy",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"mylegacy"}},Dt={colourScheme:"rbs",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"rbs",_v2:{colorScheme:"rbs",textStyleScheme:"base",designTokenScheme:"rbs",resourceScheme:"rbs"}},Et={colourScheme:"oneservice",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"oneservice"},Ct={colourScheme:"pa",fontScheme:"pa",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"pa",componentScheme:"pa"},Bt={colourScheme:"a11yplayground",fontScheme:"a11yplayground",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"a11yplayground",componentScheme:"a11yplayground"},St={colourScheme:"supportgowhere",fontScheme:"supportgowhere",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"supportgowhere",componentScheme:"default"};Object.assign(Object.assign({},xt),{light:ut(xt,"light"),dark:ut(xt,"dark")}),Object.assign(Object.assign({},Ft),{light:ut(Ft,"light"),dark:ut(Ft,"dark")}),Object.assign(Object.assign({},wt),{light:ut(wt,"light"),dark:ut(wt,"dark")}),Object.assign(Object.assign({},$t),{light:ut($t,"light"),dark:ut($t,"dark")}),Object.assign(Object.assign({},Dt),{light:ut(Dt,"light"),dark:ut(Dt,"dark")}),Object.assign(Object.assign({},Et),{light:ut(Et,"light"),dark:ut(Et,"dark")}),Object.assign(Object.assign({},Ct),{light:ut(Ct,"light"),dark:ut(Ct,"dark")}),Object.assign(Object.assign({},Bt),{light:ut(Bt,"light"),dark:ut(Bt,"dark")}),Object.assign(Object.assign({},St),{light:ut(St,"light"),dark:ut(St,"dark")});var At;l.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 0;
    width: 0;
    visibility: hidden;
    z-index: ${e=>e.$zIndex};

    ${e=>{if(e.$show)return d`
                height: 100%;
                width: 100vw;
                visibility: visible;
            `}}
`,l.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${e=>e.$stacked?gt["overlay-subtle"]:gt["overlay-strong"]};
    backdrop-filter: ${e=>(e=>{let r="";return e&&(r+="blur(10px)"),r.length>0?r:"none"})(e.$backgroundBlur)};
    transition: opacity 200ms ease;

    ${e=>{let r="";return e.$show?r+=d`
                visibility: visible;
                opacity: 1;
                pointer-events: auto;
                height: 100%;
                width: 100vw;
            `:r+=d`
                visibility: hidden;
                opacity: 0;
                transition-delay: ${e.$disableTransition?"0ms":"400ms"};
                pointer-events: none;
                height: 0;
                width: 0;
            `,e.$disableTransition&&(r+=d`
                transition: none;
            `),r}}
`,function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(At||(At={}));l.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${e=>{return r=e.$show,n=e.$animationFrom||"bottom",r?`\n\t\t\t${n}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${n}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var r,n}}

    ${vt.MaxWidth.sm} {
        height: calc(
            ${e=>e.$verticalHeight?`${e.$verticalHeight}px`:"1vh"} * 100
        );

        top: ${e=>e.$offsetTop||0}px;
    }
`;const kt=(e,r,n=!1)=>d`
        ${bt[`${e}-${r}`]}
        ${n?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `,zt=e=>{if(e)return d`
            ${r=e,d`
    display: -webkit-box;
    -webkit-line-clamp: ${r};
    -webkit-box-orient: vertical;
    overflow: hidden;
`}
        `;var r},Mt=(e,r,n,t,i)=>d`
    ${kt(e,r||"regular",t)}
    ${((e=!1,r=!1,n)=>r?d`
            display: block;
            ${zt(n)}
        `:e?d`
            display: inline;
        `:d`
            display: block;
            ${zt(n)}
        `)(n,t,i)}
    color: ${gt.text};
`,Ot=l.div`
    ${e=>Mt(e.$textStyle,e.$weight,e.$inline,e.$paragraph,e.$maxLines)}
`,_t=l.a`
    ${e=>d`
        ${kt(e.$textStyle,e.$weight||"regular")}
        color: ${gt.hyperlink};
        text-decoration: none;

        &:hover,
        &:active,
        &:focus {
            color: ${gt["text-hover"]};
        }
    `}
`,Tt=l(u)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`;var Yt;!function(n){const i=(r,n,i)=>{const s=(t,i)=>{var{weight:s,inline:o,paragraph:a,maxLines:l}=t,d=b(t,["weight","inline","paragraph","maxLines"]);return e(Ot,Object.assign({ref:i,as:o?"span":r,$textStyle:n,$weight:s,$inline:o,$paragraph:a,$maxLines:l},d))};return s.displayName=`Typography.${i}`,t.forwardRef(s)};n.HeadingXXL=i("h1","heading-xxl","HeadingXXL"),n.HeadingXL=i("h2","heading-xl","HeadingXL"),n.HeadingLG=i("h3","heading-lg","HeadingLG"),n.HeadingMD=i("h4","heading-md","HeadingMD"),n.HeadingSM=i("h5","heading-sm","HeadingSM"),n.HeadingXS=i("h6","heading-xs","HeadingXS");const s=(r,n)=>{const i=(n,t)=>{var{weight:i,inline:s,paragraph:o,maxLines:a}=n,l=b(n,["weight","inline","paragraph","maxLines"]);return e(Ot,Object.assign({ref:t,as:s?"span":"p",$textStyle:r,$weight:i,$inline:s,$paragraph:o,$maxLines:a},l))};return i.displayName=`Typography.${n}`,t.forwardRef(i)};n.BodyBL=s("body-baseline","BodyBL"),n.BodyMD=s("body-md","BodyMD"),n.BodySM=s("body-sm","BodySM"),n.BodyXS=s("body-xs","BodyXS");const o=(n,i)=>{const s=(t,i)=>{var{weight:s,children:o,external:a}=t,l=b(t,["weight","children","external"]);return r(_t,Object.assign({ref:i,$textStyle:n,$weight:s},l,{children:[o,a&&e(Tt,{})]}))};return s.displayName=`Typography.${i}`,t.forwardRef(s)};n.LinkBL=o("body-baseline","LinkBL"),n.LinkMD=o("body-md","LinkMD"),n.LinkSM=o("body-sm","LinkSM"),n.LinkXS=o("body-xs","LinkXS")}(Yt||(Yt={}));const jt=l.div`
    border-radius: ${pt.md};
    background: ${gt.bg};
    padding: ${yt["spacing-16"]} ${yt["spacing-32"]};
    ${e=>{var r;return"dark"===(null===(r=e.theme)||void 0===r?void 0:r.colourMode)?d`
                  border: ${mt["width-010"]} ${mt.solid}
                      ${gt.border};
              `:d`
                  box-shadow: ${ft["md-subtle"]};
              `}}
`,Lt=l.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${yt["spacing-24"]};
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

        ${({$highlight:e})=>e&&d`
                background-color: ${gt["bg-hover-neutral"]};
            `}
    }
`,Wt=t.forwardRef(((r,n)=>{var{children:t,focusHighlight:i=!0,focusOutline:s="none",type:o="button"}=r,a=b(r,["children","focusHighlight","focusOutline","type"]);return e(Lt,Object.assign({ref:n,$outline:s,$highlight:i,type:o},a,{children:t}))})),Ht=l.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${gt.bg};
    box-shadow: ${ft["lg-strong"]};
    border-radius: ${pt.lg};
    overflow: hidden;

    ${vt.MaxWidth.md} {
        width: 90%;
        max-height: 70%;
    }
`,It=l(Wt)`
    position: absolute;
    top: var(--close-button-top-inset, ${yt["spacing-16"]});
    right: var(--close-button-right-inset, ${yt["spacing-16"]});
    padding: 0;
    color: ${gt.icon};

    svg {
        height: 2rem;
        width: 2rem;
    }

    ${vt.MaxWidth.sm} {
        right: var(--close-button-right-inset, ${yt["spacing-20"]});
    }
`,Rt=e=>{const{textSize:r}=e||{};return d`
        // Text styling
        ${r&&bt[`${r}-regular`]}

        strong {
            font-weight: ${bt.Spec["weight-semibold"]};
            ${r&&bt[`${r}-semibold`]};
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-weight: ${bt.Spec["weight-semibold"]};
            ${r&&bt[`${r}-semibold`]}
            color: ${gt.hyperlink};
            text-decoration: none;

            svg {
                color: ${gt["icon-primary"]};
                height: 1lh;
                width: 1em;
                margin-left: 0.4rem;
                vertical-align: middle;
            }

            &:hover,
            &:active,
            &:visited,
            &:focus {
                color: ${gt["hyperlink-hover"]};

                svg {
                    color: ${gt["icon-hover"]};
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
    `};l.div`
    max-width: 30rem;
    padding: 0 1rem;
    pointer-events: auto;
`,l((r=>{var{children:n}=r,t=b(r,["children"]);const i=t["data-testid"]||"card";return e(jt,Object.assign({},t,{"data-testid":i,children:"string"==typeof n?e(Yt.BodyBL,{children:n}):n}))}))`
    color: ${gt.text};
    ${Rt({textSize:"body-md"})}

    ${vt.MaxWidth.sm} {
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
        background: ${gt["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: ${pt.full};
        background-clip: padding-box;
    }
`,l((n=>{var{id:t="modal-box",children:i,onClose:s,showCloseButton:o=!0}=n,a=b(n,["id","children","onClose","showCloseButton"]);return r(Ht,Object.assign({"data-testid":t},a,{onClick:e=>{e.stopPropagation()},children:[o&&e(It,{onClick:s,"data-testid":"close-button",focusHighlight:!1,focusOutline:"browser",children:e(g,{})}),i]}))}))`
    padding: 3.5rem 1.25rem 2.5rem;
`,l.div`
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    color: ${gt.text};
    ${Rt({textSize:"body-md"})}
`,l.div`
    display: inline;
    width: fit-content;
    cursor: pointer;
    position: relative;
`;const Pt=e=>{switch(e){case"underline":return"text-decoration: underline 1px;";case"underline-dashed":return"text-decoration: underline dashed 1px;"}};l.span`
    color: ${gt["text-primary"]};
    font-weight: 600;
    text-underline-position: under;

    ${({$defaultStyle:e})=>Pt(e)}

    &:hover,
    &:focus-visible {
        color: ${gt["text-hover"]};
        ${({$hoverStyle:e})=>Pt(e)}
    }

    svg {
        height: 1lh; // align vertically
        width: 1em; // scale icon with font size
        vertical-align: top;
    }
`,l.span`
    ${e=>!e.$standalone&&"margin-left: 0.25rem;"}
`,l.div`
    padding-left: ${yt["spacing-4"]};
    display: inline;
`,l.div`
    margin-bottom: ${yt["spacing-8"]};
`,l.label`
    color: ${gt["text-subtle"]};
    display: inline-block;

    ${bt["form-label"]}
    ${Rt()}
    font-weight: ${bt.Spec["weight-semibold"]};
`;const Nt=l.p`
    ${bt["body-sm-semibold"]}
    color: ${gt["text-error"]};
    margin-top: ${yt["spacing-8"]};
    margin-bottom: 0;
    outline: none;
`;l.span`
    ${bt["form-description"]}
    color: ${gt["text-subtler"]};
    display: block;
`;const Vt=r=>e(Nt,Object.assign({},r)),Zt=l.div`
    clip-path: inset(50%);
    height: 1px;
    width: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
`,Xt=l.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,Ut=c`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Jt=l.div`
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
    animation: ${Ut} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Gt=l(Jt)`
    animation-delay: -0.45s;
`,qt=l(Jt)`
    animation-delay: -0.3s;
`,Kt=l(Jt)`
    animation-delay: -0.15s;
`,Qt={Button:{"button-radius":tt.md,"button-default-colour-bg":On["bg-primary"],"button-default-colour-bg-hover":On["bg-primary-hover"],"button-default-colour-text":On["text-inverse"],"button-secondary-colour-border":On["border-primary"],"button-secondary-colour-text":On["text-primary"],"button-light-colour-text":On["text-primary"],"button-link-colour-text":On["text-primary"]}},ei={collections:{default:{Button:{"button-radius":tt.sm,"button-default-colour-bg":On["bg-primary"],"button-default-colour-bg-hover":On["bg-primary-hover"],"button-default-colour-text":On["text-inverse"],"button-secondary-colour-border":On["border-primary"],"button-secondary-colour-text":On["text-primary"],"button-light-colour-text":On["text-primary"],"button-link-colour-text":On["text-primary"]}},pa:{Button:{"button-radius":tt.full,"button-default-colour-bg":On["bg-primary"],"button-default-colour-bg-hover":On["bg-primary-hover"],"button-default-colour-text":On["text-inverse"],"button-secondary-colour-border":On["border-primary"],"button-secondary-colour-text":On["text-primary"],"button-light-colour-text":On["text-primary"],"button-link-colour-text":On["text-primary"]}},a11yplayground:Qt},defaultValue:"default"},ri=(e,r)=>n=>{var t,i;const s=n.theme,o=an(ei,null==s?void 0:s.componentScheme);return ni((null===(i=null===(t=null==s?void 0:s.componentOverrides)||void 0===t?void 0:t[e])||void 0===i?void 0:i[r])||o[e][r],n)},ni=(e,r)=>{switch(typeof e){case"function":return e(r);case"number":return e+"px";case"string":return e}},ti=ri("Button","button-radius"),ii=ri("Button","button-default-colour-bg"),si=ri("Button","button-default-colour-bg-hover"),oi=ri("Button","button-default-colour-text"),ai=ri("Button","button-secondary-colour-border"),li=ri("Button","button-secondary-colour-text"),di=ri("Button","button-light-colour-text"),ci=ri("Button","button-link-colour-text"),ui=l.button`
    padding: ${yt["spacing-8"]} ${yt["spacing-16"]};
    min-width: 4rem;
    border: ${mt["width-010"]} ${mt.solid} transparent;
    transition: all ${ht["duration-250"]} ${ht["ease-default"]};
    border-radius: ${ti};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return d`
                    background-color: ${gt.bg};
                    border-color: ${e.$buttonIsDanger?gt["border-error-strong"]:ai};

                    color: ${e.$buttonIsDanger?gt["text-error"]:li};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${gt["bg-hover-neutral"]};
                        }
                    }
                `;case"light":return d`
                    background-color: ${gt.bg};
                    border-color: ${gt.border};

                    color: ${e.$buttonIsDanger?gt["text-error"]:di};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${gt["bg-hover-neutral"]};
                        }
                    }
                `;case"link":return d`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?gt["text-error"]:ci};
                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${gt["bg-hover-neutral"]};
                        }
                    }
                `;case"disabled":return d`
                    background-color: ${gt["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${gt["text-disabled"]};
                `;default:return d`
                    background-color: ${e.$buttonIsDanger?gt["bg-error-strong"]:ii};

                    ${vt.MaxWidth.sm} {
                        width: 100%;
                    }

                    color: ${oi};

                    &:hover,
                    &:active {
                        @media (pointer: fine) {
                            background-color: ${e.$buttonIsDanger?gt["bg-error-strong-hover"]:si};
                        }
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return d`
                    height: 2.5rem;
                    ${bt["body-md-semibold"]}

                    ${vt.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return d`
                    height: 4rem;
                    ${bt["heading-md-semibold"]}

                    ${vt.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return d`
                    height: 3rem;
                    ${bt["heading-xs-semibold"]}

                    ${vt.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,gi=l((({color:n,className:t,size:i})=>r(Xt,{className:t,$size:i,$color:n,"data-testid":"component-loading-spinner",children:[e(Jt,{id:"inner1"}),e(Gt,{id:"inner2"}),e(qt,{id:"inner3"}),e(Kt,{id:"inner4"})]})))`
    margin-right: 0.5rem;
`,bi=(n,t)=>{const{children:i,disabled:s=!1,loading:o=!1,styleType:a="default",danger:l=!1,focusableWhenDisabled:d=!1,onClick:c}=n,u=b(n,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),g={$buttonStyle:s?"disabled":a,$buttonSizeStyle:"default",$buttonIsDanger:l};return r(ui,Object.assign({ref:t,"data-testid":u["data-testid"]||"button",disabled:s&&!d,"aria-disabled":s,"aria-busy":o,onClick:s?void 0:c},g,u,{children:[o&&e(gi,{}),e("span",{children:i})]}))};bi.displayName="Button.Default";const hi=(n,t)=>{const{children:i,disabled:s=!1,loading:o=!1,styleType:a="default",danger:l=!1,focusableWhenDisabled:d=!1,onClick:c}=n,u=b(n,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),g={$buttonStyle:s?"disabled":a,$buttonSizeStyle:"small",$buttonIsDanger:l};return r(ui,Object.assign({ref:t,"data-testid":u["data-testid"]||"button",disabled:s&&!d,"aria-disabled":s,"aria-busy":o,onClick:s?void 0:c},g,u,{children:[o&&e(gi,{}),e("span",{children:i})]}))};hi.displayName="Button.Small";const mi=(n,t)=>{const{children:i,disabled:s=!1,loading:o=!1,styleType:a="default",danger:l=!1,focusableWhenDisabled:d=!1,onClick:c}=n,u=b(n,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),g={$buttonStyle:s?"disabled":a,$buttonSizeStyle:"large",$buttonIsDanger:l};return r(ui,Object.assign({ref:t,"data-testid":u["data-testid"]||"button",disabled:s&&!d,"aria-disabled":s,"aria-busy":o,onClick:s?void 0:c},g,u,{children:[o&&e(gi,{}),e("span",{children:i})]}))};mi.displayName="Button.Large";const yi={Default:t.forwardRef(bi),Small:t.forwardRef(hi),Large:t.forwardRef(mi)},pi=d`
    outline-offset: -1px;
    outline: ${mt["width-020"]} ${mt.solid} ${gt["border-focus"]};
`,fi=d`
    outline-color: ${gt["border-focus"]};
`,vi=d`
    outline-color: ${gt["border-disabled"]};
`,xi=d`
    outline-color: ${gt["border-error-focus"]};
`,Fi=l.div`
    border: ${mt["width-010"]} ${mt.solid} ${gt.border};
    border-radius: ${pt.sm};
    background: ${gt.bg};

    &:focus-within {
        ${pi}
    }
    ${e=>e.$focused&&pi}

    ${e=>e.$readOnly?d`
                border-color: transparent;
                padding: 0;
                background: transparent !important;

                &:focus-within {
                    ${fi}
                }
                ${e.$focused&&fi}
            `:e.$disabled?d`
                background: ${gt["bg-disabled"]};
                cursor: not-allowed;

                &:focus-within {
                    ${vi}
                }
                ${e.$focused&&vi}
            `:e.$error?d`
                border-color: ${gt["border-error"]};

                &:focus-within {
                    ${xi}
                }
                ${e.$focused&&xi}
            `:void 0}
`;l(Fi)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 ${yt["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`;const wi=l.input`
    ${e=>"small"===e.$variant?bt["body-md-regular"]:bt["body-baseline-regular"]}
    color: ${gt.text};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    &:disabled {
        color: ${gt["text-subtler"]};

        &:hover {
            cursor: not-allowed;
        }
    }

    &::placeholder,
    &::-webkit-input-placeholder {
        color: ${gt["text-subtler"]};
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
`,$i=l.button`
    background: transparent;
    border: none;
    outline: none;

    &:focus,
    &:active {
        outline: none;
    }

    &:focus-visible {
        outline: ${mt["width-010"]} ${mt.solid}
            ${gt["border-focus"]};
        border-radius: ${pt.sm};
    }
`,Di=l(wi)`
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders

    ${e=>"no-border"!==e.$styleType&&d`
            padding-left: ${yt["spacing-16"]};
            padding-right: ${e.$showClear?0:yt["spacing-16"]};
        `}
`,Ei=l($i)`
    height: auto;
    padding: ${yt["spacing-12"]} ${yt["spacing-16"]};

    cursor: pointer;
    color: ${gt.icon};

    ${e=>"no-border"===e.$styleType&&d`
            margin-right: -${yt["spacing-12"]};
        `}
`,Ci=l(g)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`,Bi=l.div`
    display: flex;
    width: 100%;
`,Si=l(Fi)`
    display: flex;
    align-items: center;
    width: 100%;
`,Ai=t.forwardRef(((t,o)=>{var{value:a,spacing:l,type:d,error:c,disabled:u,readOnly:g,onChange:h,onClear:m,allowClear:y=!1,className:p,styleType:f="bordered"}=t,v=b(t,["value","spacing","type","error","disabled","readOnly","onChange","onClear","allowClear","className","styleType"]);const x=((e,r)=>"tel"===e&&!!r)(d,l),F=i(null);s(o,(()=>F.current),[]);const w=function({ref:e,formatter:r}){return()=>{var n;const t=e.current;if(!t)return;const i=t.value,s=r(i),o=null!==(n=t.selectionEnd)&&void 0!==n?n:0,a=i.substring(0,o),l=r(a),d=a.length-l.length,c=Math.max(0,o-d);return{nextValue:s,updateCaretPosition:()=>{t.value=s,t.setSelectionRange(c,c)}}}}({ref:F,formatter:e=>x?L.transformWithSpaces(e,l):e}),$=e=>{h&&(x?E(e):h(e))},D=()=>{m&&m(),F&&F.current&&F.current.focus()},E=e=>{const r=w();if(!r)return;const{nextValue:n,updateCaretPosition:t}=r,i=n.replace(/\s/g,"");e.target.value=i,null==h||h(e),t()},C=a?(e=>e?x?L.transformWithSpaces(e,l):e:"")(a):a,B=y&&!u&&!g&&!!a,S=()=>r(n,{children:[e(Di,Object.assign({"data-testid":"input",ref:F,"aria-disabled":u,value:C,onChange:$,type:d,readOnly:g||u,$showClear:B,$styleType:f},v)),B&&e(Ei,{onClick:D,type:"button",$styleType:f,children:e(Ci,{"aria-hidden":!0})})]});return e(n,{children:"no-border"===f?e(Bi,{className:p,children:S()}):e(Si,{$disabled:u,$error:c,$readOnly:g,className:p,children:S()})})})),ki=l.div`
    display: flex;
    flex-direction: column;
`,zi=l.div`
    display: flex;
    flex-direction: row;
    align-self: center;
    align-items: center;
    gap: ${yt["spacing-8"]};
`,Mi=l(Ai)`
    margin-bottom: 0rem !important;

    input {
        text-align: center;

        ${vt.MaxWidth.xs} {
            padding: 0 ${yt["spacing-8"]};
        }
    }
`,Oi=l(yi.Small)`
    margin: ${yt["spacing-32"]} 0;
`,_i=l(Yt.HeadingSM)`
    flex-shrink: 0;
`,Ti=(e,r=1)=>!!e&&RegExp(`^[0-9]{${r}}$`).test(e),Yi=(e,r,n)=>{if(e.length===r)return e;if(n){const[t,i]=e.split(n.separator);return t===n.value&&i.length===r?i:""}return""},ji=n=>{var{id:t,value:s=[],"data-testid":l,className:d,cooldownDuration:c,actionButtonProps:u,errorMessage:g,numOfInput:h,prefix:m,onChange:y,onCooldownStart:p,onCooldownEnd:f}=n,v=b(n,["id","value","data-testid","className","cooldownDuration","actionButtonProps","errorMessage","numOfInput","prefix","onChange","onCooldownStart","onCooldownEnd"]);const x=null!=u?u:{},{disabled:F,onClick:w,styleType:$="secondary"}=x,D=b(x,["disabled","onClick","styleType"]),E=i([]),C=i(y),[B,S]=o(new Array(h).fill("")),[A,k]=o(c),[z,M]=o(new Date),[O]=o((()=>j.generate())),_=!!g,T=`${O}-error`,Y=`${O}-timer`;a((()=>{var e;return null===(e=null==E?void 0:E.current[0])||void 0===e||e.focus(),document.addEventListener("paste",R),()=>document.removeEventListener("paste",R)}),[]),a((()=>{if(0!==c){p&&p();const e=N();return()=>e()}}),[z]),a((()=>{C.current=y}),[y]),a((()=>{s.length===h&&S(s)}),[s]);const W=e=>{if(e&&Ti(e,h)){const r=e.split("");return S(r),C.current&&C.current(r),!0}return!1},H=e=>r=>{var n;const t=r.target.value,i=B.every((e=>""===e)),s=Yi(t,h,m);if(i&&W(s))return;const o=t.replace(/[^0-9]/g,"");if(Ti(o)){const r=[...B];r[e]=o.substring(o.length-1),null===(n=E.current[e+1])||void 0===n||n.focus(),S(r),y&&y(r)}},I=e=>r=>{var n,t,i;const{key:s,code:o}=r;if("Backspace"===s||"Backspace"===o){const r=[...B];""!==r[e]?r[e]="":0!==e&&(r[e-1]="",null===(n=E.current[e-1])||void 0===n||n.focus()),S(r),y&&y(r)}else"ArrowRight"===r.code?null===(t=E.current[e+1])||void 0===t||t.focus():"ArrowLeft"===r.code&&(null===(i=E.current[e-1])||void 0===i||i.focus())},R=e=>{if(!e.clipboardData)return;const r=e.clipboardData.getData("text"),n=Yi(r,h,m);W(n)||e.preventDefault()},P=()=>{const e=Date.now(),r=1e3*c;return e<z.valueOf()+r},N=()=>{const e=setInterval((()=>{const r=Date.now(),n=1e3*c,t=Math.ceil((z.valueOf()+n-r)/1e3);k(t),t<=0&&(f&&f(),clearInterval(e))}),1e3);return()=>{clearInterval(e)}},V=(e,r,n)=>n?`${n}-${r}-${e+1}`:`${r}-${e+1}`,Z=e=>`${e} second${1===e?"":"s"}`;return r(ki,{id:t,"data-testid":l,className:d,children:[r(zi,{role:"group","aria-label":`${h}-digit OTP input field`,children:[m&&r(_i,{forwardedAs:"span","data-testid":"otp-prefix",children:[e(Zt,{children:"O T P prefix"}),`${m.value} ${m.separator}`]}),B.map(((r,n)=>e(Mi,Object.assign({id:V(n,"otp-input",t),"data-testid":V(n,"otp-input",l),"aria-label":`${L.formatOrdinal(n+1)} digit`,"aria-invalid":_,"aria-describedby":_?T:void 0,ref:e=>E.current[n]=e,type:"text",inputMode:"numeric",value:r,error:_,onChange:H(n),onKeyDown:I(n),autoComplete:"off"},v),n)))]}),g&&e(Vt,{id:T,children:g}),r(Zt,{role:"timer",id:Y,children:[Z(A)," remaining"]}),e(Zt,{"aria-live":"polite",children:A>0?"":"Ready to resend OTP"}),e(Oi,Object.assign({styleType:$,type:"button"},D,{onClick:e=>{S(new Array(h).fill("")),P()||(M(new Date),k(c)),w&&w(e)},disabled:F||P()},D.children?{children:D.children}:{children:A>0?`Resend OTP in ${Z(A)}`:"Resend OTP","aria-label":A>0?`Resend OTP in ${Z(c)}`:"Resend OTP","aria-describedby":Y}))]})};export{ji as OtpInput};
//# sourceMappingURL=index.js.map
