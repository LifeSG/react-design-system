import{jsxs as e,jsx as r,Fragment as n}from"react/jsx-runtime";import t,{useRef as i,useImperativeHandle as s,useState as o,useEffect as a}from"react";import"@lifesg/react-icons/i-circle-fill";import l,{css as d,keyframes as c}from"styled-components";import"@floating-ui/react";import"react-dom";import{ExternalIcon as u}from"@lifesg/react-icons/external";import{CrossIcon as g}from"@lifesg/react-icons/cross";function h(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(t=Object.getOwnPropertySymbols(e);i<t.length;i++)r.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(n[t[i]]=e[t[i]])}return n}"function"==typeof SuppressedError&&SuppressedError;var b="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function m(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var y={exports:{}};y.exports=function(){var e=1e3,r=6e4,n=36e5,t="millisecond",i="second",s="minute",o="hour",a="day",l="week",d="month",c="quarter",u="year",g="date",h="Invalid Date",b=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,y={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var r=["th","st","nd","rd"],n=e%100;return"["+e+(r[(n-20)%10]||r[n]||r[0])+"]"}},f=function(e,r,n){var t=String(e);return!t||t.length>=r?e:""+Array(r+1-t.length).join(n)+e},p={s:f,z:function(e){var r=-e.utcOffset(),n=Math.abs(r),t=Math.floor(n/60),i=n%60;return(r<=0?"+":"-")+f(t,2,"0")+":"+f(i,2,"0")},m:function e(r,n){if(r.date()<n.date())return-e(n,r);var t=12*(n.year()-r.year())+(n.month()-r.month()),i=r.clone().add(t,d),s=n-i<0,o=r.clone().add(t+(s?-1:1),d);return+(-(t+(n-i)/(s?i-o:o-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:a,D:g,h:o,m:s,s:i,ms:t,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},x="en",v={};v[x]=y;var F="$isDayjsObject",w=function(e){return e instanceof C||!(!e||!e[F])},$=function e(r,n,t){var i;if(!r)return x;if("string"==typeof r){var s=r.toLowerCase();v[s]&&(i=s),n&&(v[s]=n,i=s);var o=r.split("-");if(!i&&o.length>1)return e(o[0])}else{var a=r.name;v[a]=r,i=a}return!t&&i&&(x=i),i||!t&&x},D=function(e,r){if(w(e))return e.clone();var n="object"==typeof r?r:{};return n.date=e,n.args=arguments,new C(n)},E=p;E.l=$,E.i=w,E.w=function(e,r){return D(e,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var C=function(){function y(e){this.$L=$(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[F]=!0}var f=y.prototype;return f.parse=function(e){this.$d=function(e){var r=e.date,n=e.utc;if(null===r)return new Date(NaN);if(E.u(r))return new Date;if(r instanceof Date)return new Date(r);if("string"==typeof r&&!/Z$/i.test(r)){var t=r.match(b);if(t){var i=t[2]-1||0,s=(t[7]||"0").substring(0,3);return n?new Date(Date.UTC(t[1],i,t[3]||1,t[4]||0,t[5]||0,t[6]||0,s)):new Date(t[1],i,t[3]||1,t[4]||0,t[5]||0,t[6]||0,s)}}return new Date(r)}(e),this.init()},f.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},f.$utils=function(){return E},f.isValid=function(){return!(this.$d.toString()===h)},f.isSame=function(e,r){var n=D(e);return this.startOf(r)<=n&&n<=this.endOf(r)},f.isAfter=function(e,r){return D(e)<this.startOf(r)},f.isBefore=function(e,r){return this.endOf(r)<D(e)},f.$g=function(e,r,n){return E.u(e)?this[r]:this.set(n,e)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(e,r){var n=this,t=!!E.u(r)||r,c=E.p(e),h=function(e,r){var i=E.w(n.$u?Date.UTC(n.$y,r,e):new Date(n.$y,r,e),n);return t?i:i.endOf(a)},b=function(e,r){return E.w(n.toDate()[e].apply(n.toDate("s"),(t?[0,0,0,0]:[23,59,59,999]).slice(r)),n)},m=this.$W,y=this.$M,f=this.$D,p="set"+(this.$u?"UTC":"");switch(c){case u:return t?h(1,0):h(31,11);case d:return t?h(1,y):h(0,y+1);case l:var x=this.$locale().weekStart||0,v=(m<x?m+7:m)-x;return h(t?f-v:f+(6-v),y);case a:case g:return b(p+"Hours",0);case o:return b(p+"Minutes",1);case s:return b(p+"Seconds",2);case i:return b(p+"Milliseconds",3);default:return this.clone()}},f.endOf=function(e){return this.startOf(e,!1)},f.$set=function(e,r){var n,l=E.p(e),c="set"+(this.$u?"UTC":""),h=(n={},n[a]=c+"Date",n[g]=c+"Date",n[d]=c+"Month",n[u]=c+"FullYear",n[o]=c+"Hours",n[s]=c+"Minutes",n[i]=c+"Seconds",n[t]=c+"Milliseconds",n)[l],b=l===a?this.$D+(r-this.$W):r;if(l===d||l===u){var m=this.clone().set(g,1);m.$d[h](b),m.init(),this.$d=m.set(g,Math.min(this.$D,m.daysInMonth())).$d}else h&&this.$d[h](b);return this.init(),this},f.set=function(e,r){return this.clone().$set(e,r)},f.get=function(e){return this[E.p(e)]()},f.add=function(t,c){var g,h=this;t=Number(t);var b=E.p(c),m=function(e){var r=D(h);return E.w(r.date(r.date()+Math.round(e*t)),h)};if(b===d)return this.set(d,this.$M+t);if(b===u)return this.set(u,this.$y+t);if(b===a)return m(1);if(b===l)return m(7);var y=(g={},g[s]=r,g[o]=n,g[i]=e,g)[b]||1,f=this.$d.getTime()+t*y;return E.w(f,this)},f.subtract=function(e,r){return this.add(-1*e,r)},f.format=function(e){var r=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var t=e||"YYYY-MM-DDTHH:mm:ssZ",i=E.z(this),s=this.$H,o=this.$m,a=this.$M,l=n.weekdays,d=n.months,c=n.meridiem,u=function(e,n,i,s){return e&&(e[n]||e(r,t))||i[n].slice(0,s)},g=function(e){return E.s(s%12||12,e,"0")},b=c||function(e,r,n){var t=e<12?"AM":"PM";return n?t.toLowerCase():t};return t.replace(m,(function(e,t){return t||function(e){switch(e){case"YY":return String(r.$y).slice(-2);case"YYYY":return E.s(r.$y,4,"0");case"M":return a+1;case"MM":return E.s(a+1,2,"0");case"MMM":return u(n.monthsShort,a,d,3);case"MMMM":return u(d,a);case"D":return r.$D;case"DD":return E.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return u(n.weekdaysMin,r.$W,l,2);case"ddd":return u(n.weekdaysShort,r.$W,l,3);case"dddd":return l[r.$W];case"H":return String(s);case"HH":return E.s(s,2,"0");case"h":return g(1);case"hh":return g(2);case"a":return b(s,o,!0);case"A":return b(s,o,!1);case"m":return String(o);case"mm":return E.s(o,2,"0");case"s":return String(r.$s);case"ss":return E.s(r.$s,2,"0");case"SSS":return E.s(r.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},f.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},f.diff=function(t,g,h){var b,m=this,y=E.p(g),f=D(t),p=(f.utcOffset()-this.utcOffset())*r,x=this-f,v=function(){return E.m(m,f)};switch(y){case u:b=v()/12;break;case d:b=v();break;case c:b=v()/3;break;case l:b=(x-p)/6048e5;break;case a:b=(x-p)/864e5;break;case o:b=x/n;break;case s:b=x/r;break;case i:b=x/e;break;default:b=x}return h?b:E.a(b)},f.daysInMonth=function(){return this.endOf(d).$D},f.$locale=function(){return v[this.$L]},f.locale=function(e,r){if(!e)return this.$L;var n=this.clone(),t=$(e,r,!0);return t&&(n.$L=t),n},f.clone=function(){return E.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},y}(),B=C.prototype;return D.prototype=B,[["$ms",t],["$s",i],["$m",s],["$H",o],["$W",a],["$M",d],["$y",u],["$D",g]].forEach((function(e){B[e[1]]=function(r){return this.$g(r,e[0],e[1])}})),D.extend=function(e,r){return e.$i||(e(r,C,D),e.$i=!0),D},D.locale=$,D.isDayjs=w,D.unix=function(e){return D(1e3*e)},D.en=v[x],D.Ls=v,D.p={},D}();var f=m(y.exports),p={exports:{}};p.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,t=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,s={},o=function(e){return(e=+e)+(e>68?1900:2e3)},a=function(e){return function(r){this[e]=+r}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var r=e.match(/([+-]|\d\d)/g),n=60*r[1]+(+r[2]||0);return 0===n?0:"+"===r[0]?-n:n}(e)}],d=function(e){var r=s[e];return r&&(r.indexOf?r:r.s.concat(r.f))},c=function(e,r){var n,t=s.meridiem;if(t){for(var i=1;i<=24;i+=1)if(e.indexOf(t(i,0,r))>-1){n=i>12;break}}else n=e===(r?"pm":"PM");return n},u={A:[i,function(e){this.afternoon=c(e,!1)}],a:[i,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[t,a("seconds")],ss:[t,a("seconds")],m:[t,a("minutes")],mm:[t,a("minutes")],H:[t,a("hours")],h:[t,a("hours")],HH:[t,a("hours")],hh:[t,a("hours")],D:[t,a("day")],DD:[n,a("day")],Do:[i,function(e){var r=s.ordinal,n=e.match(/\d+/);if(this.day=n[0],r)for(var t=1;t<=31;t+=1)r(t).replace(/\[|\]/g,"")===e&&(this.day=t)}],M:[t,a("month")],MM:[n,a("month")],MMM:[i,function(e){var r=d("months"),n=(d("monthsShort")||r.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(e){var r=d("months").indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],Y:[/[+-]?\d+/,a("year")],YY:[n,function(e){this.year=o(e)}],YYYY:[/\d{4}/,a("year")],Z:l,ZZ:l};function g(n){var t,i;t=n,i=s&&s.formats;for(var o=(n=t.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(r,n,t){var s=t&&t.toUpperCase();return n||i[t]||e[t]||i[s].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,r,n){return r||n.slice(1)}))}))).match(r),a=o.length,l=0;l<a;l+=1){var d=o[l],c=u[d],g=c&&c[0],h=c&&c[1];o[l]=h?{regex:g,parser:h}:d.replace(/^\[|\]$/g,"")}return function(e){for(var r={},n=0,t=0;n<a;n+=1){var i=o[n];if("string"==typeof i)t+=i.length;else{var s=i.regex,l=i.parser,d=e.slice(t),c=s.exec(d)[0];l.call(r,c),e=e.replace(c,"")}}return function(e){var r=e.afternoon;if(void 0!==r){var n=e.hours;r?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(r),r}}return function(e,r,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(o=e.parseTwoDigitYear);var t=r.prototype,i=t.parse;t.parse=function(e){var r=e.date,t=e.utc,o=e.args;this.$u=t;var a=o[1];if("string"==typeof a){var l=!0===o[2],d=!0===o[3],c=l||d,u=o[2];d&&(u=o[2]),s=this.$locale(),!l&&u&&(s=n.Ls[u]),this.$d=function(e,r,n){try{if(["x","X"].indexOf(r)>-1)return new Date(("X"===r?1e3:1)*e);var t=g(r)(e),i=t.year,s=t.month,o=t.day,a=t.hours,l=t.minutes,d=t.seconds,c=t.milliseconds,u=t.zone,h=new Date,b=o||(i||s?1:h.getDate()),m=i||h.getFullYear(),y=0;i&&!s||(y=s>0?s-1:h.getMonth());var f=a||0,p=l||0,x=d||0,v=c||0;return u?new Date(Date.UTC(m,y,b,f,p,x,v+60*u.offset*1e3)):n?new Date(Date.UTC(m,y,b,f,p,x,v)):new Date(m,y,b,f,p,x,v)}catch(e){return new Date("")}}(r,a,t),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&r!=this.format(a)&&(this.$d=new Date("")),s={}}else if(a instanceof Array)for(var h=a.length,b=1;b<=h;b+=1){o[1]=a[b-1];var m=n.apply(this,o);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}b===h&&(this.$d=new Date(""))}else i.call(this,e)}}}();var x=m(p.exports),v={exports:{}};v.exports=function(e,r,n){r.prototype.isBetween=function(e,r,t,i){var s=n(e),o=n(r),a="("===(i=i||"()")[0],l=")"===i[1];return(a?this.isAfter(s,t):!this.isBefore(s,t))&&(l?this.isBefore(o,t):!this.isAfter(o,t))||(a?this.isBefore(s,t):!this.isAfter(s,t))&&(l?this.isAfter(o,t):!this.isBefore(o,t))}};var F=m(v.exports),w={exports:{}};w.exports=function(e,r){r.prototype.isSameOrAfter=function(e,r){return this.isSame(e,r)||this.isAfter(e,r)}};var $=m(w.exports),D={exports:{}};D.exports=function(e,r){r.prototype.isSameOrBefore=function(e,r){return this.isSame(e,r)||this.isBefore(e,r)}};var E,C,B,A=m(D.exports),z={exports:{}},S=m(z.exports=(E={year:0,month:1,day:2,hour:3,minute:4,second:5},C={},function(e,r,n){var t,i=function(e,r,n){void 0===n&&(n={});var t=new Date(e),i=function(e,r){void 0===r&&(r={});var n=r.timeZoneName||"short",t=e+"|"+n,i=C[t];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),C[t]=i),i}(r,n);return i.formatToParts(t)},s=function(e,r){for(var t=i(e,r),s=[],o=0;o<t.length;o+=1){var a=t[o],l=a.type,d=a.value,c=E[l];c>=0&&(s[c]=parseInt(d,10))}var u=s[3],g=24===u?0:u,h=s[0]+"-"+s[1]+"-"+s[2]+" "+g+":"+s[4]+":"+s[5]+":000",b=+e;return(n.utc(h).valueOf()-(b-=b%1e3))/6e4},o=r.prototype;o.tz=function(e,r){void 0===e&&(e=t);var i=this.utcOffset(),s=this.toDate(),o=s.toLocaleString("en-US",{timeZone:e}),a=Math.round((s-new Date(o))/1e3/60),l=n(o,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(s.getTimezoneOffset()/15)-a,!0);if(r){var d=l.utcOffset();l=l.add(i-d,"minute")}return l.$x.$timezone=e,l},o.offsetName=function(e){var r=this.$x.$timezone||n.tz.guess(),t=i(this.valueOf(),r,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return t&&t.value};var a=o.startOf;o.startOf=function(e,r){if(!this.$x||!this.$x.$timezone)return a.call(this,e,r);var t=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return a.call(t,e,r).tz(this.$x.$timezone,!0)},n.tz=function(e,r,i){var o=i&&r,a=i||r||t,l=s(+n(),a);if("string"!=typeof e)return n(e).tz(a);var d=function(e,r,n){var t=e-60*r*1e3,i=s(t,n);if(r===i)return[t,r];var o=s(t-=60*(i-r)*1e3,n);return i===o?[t,i]:[e-60*Math.min(i,o)*1e3,Math.max(i,o)]}(n.utc(e,o).valueOf(),l,a),c=d[0],u=d[1],g=n(c).utcOffset(u);return g.$x.$timezone=a,g},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){t=e}}));f.extend(F),f.extend(A),f.extend($),f.extend(x),f.extend(S),function(e){e.generateDays=e=>{const r=e.startOf("month"),n=f(r).startOf("week");return M(n).map((e=>k(e)))},e.generateDaysForCurrentWeek=e=>{const r=e.startOf("week");return k(r)},e.generateMonths=e=>{const r=[];for(let n=0;n<12;n++){const t=e.month(n);r.push(f(t))}return r},e.generateDecadeOfYears=e=>{const r=e.year(),n=10*Math.floor(r/10),t=e.year(n),i=[t.subtract(1,"year"),t];for(let e=1;e<11;e++)i.push(t.add(e,"year"));return i},e.getStartEndDecade=e=>{const r=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:r,endDecade:+f(`${r+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const r=f(e,"HH:mm");return r.isValid()?r.format("h:mm a"):""},e.isWithinRange=(e,r,n,t="day")=>!r&&!n||(r&&n?e.isBetween(r,n,t,"[]"):r?e.isSameOrAfter(r,t):e.isSameOrBefore(n,t)),e.isPreviousMonthWithinRange=(r,n)=>e.isWithinRange(r.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(r,n)=>e.isWithinRange(r.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(r,n)=>{const{beginDecade:t}=e.getStartEndDecade(r);return e.isWithinRange(r.year(t).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(r,n)=>e.isWithinRange(r.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(r,n)=>e.isWithinRange(r.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(r,n)=>{const{endDecade:t}=e.getStartEndDecade(r);return e.isWithinRange(r.year(t).add(1,"year"),void 0,n,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,r)=>({start:e.format("YYYY-MM-DD"),end:e.add(r-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(r,n,t,i)=>{const s=e.isWithinRange(r,t?f(t):void 0,i?f(i):void 0),o=n&&n.includes(r.format("YYYY-MM-DD"));return!s||!!o}}(B||(B={}));const M=e=>{const r=[e];for(let n=1;n<6;n++){const t=e.add(n,"week");r.push(t)}return r},k=e=>{const r=[];for(let n=0;n<7;n++){const t=e.add(n,"day");r.push(t)}return r},O=[1,3,5,7,8,10,12],_=[4,6,9,11];var Y,T,L,j;!function(e){e.clampDay=(r,n,t)=>{const i=parseInt(r),s=parseInt(n),o=parseInt(t);return 0==i?"1":O.includes(s)?Math.min(i,31).toString():_.includes(s)?Math.min(i,30).toString():2===s?e.isLeapYear(o)?Math.min(i,29).toString():Math.min(i,28).toString():r},e.clampMonth=e=>{const r=parseInt(e);return 0==r?"1":r>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,r,n="HH:mm")=>{const t=f(e,n);return f(r,n).diff(t,"minute")},e.toDayjs=e=>e?f(e):f(),e.addMinutesToTime=(e,r,n="HH:mm")=>f(e,n).add(r,"minutes").format(n),e.isSame=(e,r,n="day")=>f(e).isSame(f(r),n)}(Y||(Y={})),function(e){e.isDateDisabled=(e,r)=>{const{disabledDates:n,minDate:t,maxDate:i}=r;return!!(e&&n&&n.length&&n.includes(e))||(!(!t||!f(e).isBefore(t,"day"))||!(!i||!f(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(f(e).isValid())return e}return""}}(T||(T={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(L||(L={})),function(e){e.transformWithSpaces=(e,r)=>{const n="(.{"+r+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,r)=>{if("0"===e)return r?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,r)=>{const n=Math.floor(r/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,r,n,t,i=8)=>{let s=0;r>n&&(s=Math.floor((r-n)/i));const o=t+s;if(o<e.length){const r=Math.floor(o/2);return e.substring(0,r)+" ... "+e.substring(e.length-r,e.length)}return e},e.truncateTwoLines=(e,r,n,t=1.2)=>{const i=Math.floor(2*r/(.6*n))*(2/t);if(e.length<=i)return e;const s=Math.floor(.6*i),o=Math.floor(.2*i);return`${e.substring(0,s)}...${e.substring(e.length-o)}`},e.getTextWidth=(r,n)=>{if("undefined"==typeof document)return 0;const t=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");t.font=n;return t.measureText(r).width},e.maskValue=(e,n)=>{if(!e)return e;const{maskRange:t,unmaskRange:i,maskChar:s="•",maskRegex:o,maskTransformer:a}=n;if(a)return a(e);if(o)return e.replace(o,s);if(t){const{startIndex:n,endIndex:i}=r(t[0],t[1]);return e.substring(0,n)+s.repeat(e.substring(n,i+1).length)+e.substring(i+1)}if(i){const{startIndex:n,endIndex:t}=r(i[0],i[1]);return s.repeat(e.substring(0,n).length)+e.substring(n,t+1)+s.repeat(e.substring(t+1).length)}return e};const r=(e,r)=>e<r?{startIndex:e,endIndex:r}:{startIndex:r,endIndex:e},n=new Intl.PluralRules("en",{type:"ordinal"}),t=new Map([["one","st"],["two","nd"],["few","rd"],["other","th"]]);e.formatOrdinal=e=>{const r=n.select(e);return`${e}${t.get(r)}`}}(j||(j={}));var I=Array.isArray,H="object"==typeof b&&b&&b.Object===Object&&b,W="object"==typeof self&&self&&self.Object===Object&&self,R=H||W||Function("return this")(),P=R.Symbol,N=P,V=Object.prototype,Z=V.hasOwnProperty,X=V.toString,U=N?N.toStringTag:void 0;var J=function(e){var r=Z.call(e,U),n=e[U];try{e[U]=void 0;var t=!0}catch(e){}var i=X.call(e);return t&&(r?e[U]=n:delete e[U]),i},G=Object.prototype.toString;var q=J,K=function(e){return G.call(e)},Q=P?P.toStringTag:void 0;var ee=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Q&&Q in Object(e)?q(e):K(e)};var re=ee,ne=function(e){return null!=e&&"object"==typeof e};var te=function(e){return"symbol"==typeof e||ne(e)&&"[object Symbol]"==re(e)},ie=I,se=te,oe=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ae=/^\w*$/;var le=function(e,r){if(ie(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!se(e))||(ae.test(e)||!oe.test(e)||null!=r&&e in Object(r))};var de=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},ce=ee,ue=de;var ge,he=function(e){if(!ue(e))return!1;var r=ce(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},be=R["__core-js_shared__"],me=(ge=/[^.]+$/.exec(be&&be.keys&&be.keys.IE_PROTO||""))?"Symbol(src)_1."+ge:"";var ye=function(e){return!!me&&me in e},fe=Function.prototype.toString;var pe=he,xe=ye,ve=de,Fe=function(e){if(null!=e){try{return fe.call(e)}catch(e){}try{return e+""}catch(e){}}return""},we=/^\[object .+?Constructor\]$/,$e=Function.prototype,De=Object.prototype,Ee=$e.toString,Ce=De.hasOwnProperty,Be=RegExp("^"+Ee.call(Ce).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Ae=function(e,r){return null==e?void 0:e[r]},ze=function(e){return!(!ve(e)||xe(e))&&(pe(e)?Be:we).test(Fe(e))},Se=Ae;var Me=function(e,r){var n=Se(e,r);return ze(n)?n:void 0},ke=Me(Object,"create"),Oe=ke;var _e=function(){this.__data__=Oe?Oe(null):{},this.size=0};var Ye=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},Te=ke,Le=Object.prototype.hasOwnProperty;var je=function(e){var r=this.__data__;if(Te){var n=r[e];return"__lodash_hash_undefined__"===n?void 0:n}return Le.call(r,e)?r[e]:void 0},Ie=ke,He=Object.prototype.hasOwnProperty;var We=function(e){var r=this.__data__;return Ie?void 0!==r[e]:He.call(r,e)},Re=ke;var Pe=function(e,r){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Re&&void 0===r?"__lodash_hash_undefined__":r,this},Ne=_e,Ve=Ye,Ze=je,Xe=We,Ue=Pe;function Je(e){var r=-1,n=null==e?0:e.length;for(this.clear();++r<n;){var t=e[r];this.set(t[0],t[1])}}Je.prototype.clear=Ne,Je.prototype.delete=Ve,Je.prototype.get=Ze,Je.prototype.has=Xe,Je.prototype.set=Ue;var Ge=Je;var qe=function(){this.__data__=[],this.size=0};var Ke=function(e,r){return e===r||e!=e&&r!=r};var Qe=function(e,r){for(var n=e.length;n--;)if(Ke(e[n][0],r))return n;return-1},er=Qe,rr=Array.prototype.splice;var nr=function(e){var r=this.__data__,n=er(r,e);return!(n<0)&&(n==r.length-1?r.pop():rr.call(r,n,1),--this.size,!0)},tr=Qe;var ir=function(e){var r=this.__data__,n=tr(r,e);return n<0?void 0:r[n][1]},sr=Qe;var or=function(e){return sr(this.__data__,e)>-1},ar=Qe;var lr=function(e,r){var n=this.__data__,t=ar(n,e);return t<0?(++this.size,n.push([e,r])):n[t][1]=r,this},dr=qe,cr=nr,ur=ir,gr=or,hr=lr;function br(e){var r=-1,n=null==e?0:e.length;for(this.clear();++r<n;){var t=e[r];this.set(t[0],t[1])}}br.prototype.clear=dr,br.prototype.delete=cr,br.prototype.get=ur,br.prototype.has=gr,br.prototype.set=hr;var mr=br,yr=Me(R,"Map"),fr=Ge,pr=mr,xr=yr;var vr=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var Fr=function(e,r){var n=e.__data__;return vr(r)?n["string"==typeof r?"string":"hash"]:n.map},wr=Fr;var $r=function(e){var r=wr(this,e).delete(e);return this.size-=r?1:0,r},Dr=Fr;var Er=function(e){return Dr(this,e).get(e)},Cr=Fr;var Br=function(e){return Cr(this,e).has(e)},Ar=Fr;var zr=function(e,r){var n=Ar(this,e),t=n.size;return n.set(e,r),this.size+=n.size==t?0:1,this},Sr=function(){this.size=0,this.__data__={hash:new fr,map:new(xr||pr),string:new fr}},Mr=$r,kr=Er,Or=Br,_r=zr;function Yr(e){var r=-1,n=null==e?0:e.length;for(this.clear();++r<n;){var t=e[r];this.set(t[0],t[1])}}Yr.prototype.clear=Sr,Yr.prototype.delete=Mr,Yr.prototype.get=kr,Yr.prototype.has=Or,Yr.prototype.set=_r;var Tr=Yr;function Lr(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var n=function(){var t=arguments,i=r?r.apply(this,t):t[0],s=n.cache;if(s.has(i))return s.get(i);var o=e.apply(this,t);return n.cache=s.set(i,o)||s,o};return n.cache=new(Lr.Cache||Tr),n}Lr.Cache=Tr;var jr=Lr;var Ir=function(e){var r=jr(e,(function(e){return 500===n.size&&n.clear(),e})),n=r.cache;return r},Hr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Wr=/\\(\\)?/g,Rr=Ir((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(Hr,(function(e,n,t,i){r.push(t?i.replace(Wr,"$1"):n||e)})),r}));var Pr=function(e,r){for(var n=-1,t=null==e?0:e.length,i=Array(t);++n<t;)i[n]=r(e[n],n,e);return i},Nr=I,Vr=te,Zr=P?P.prototype:void 0,Xr=Zr?Zr.toString:void 0;var Ur=function e(r){if("string"==typeof r)return r;if(Nr(r))return Pr(r,e)+"";if(Vr(r))return Xr?Xr.call(r):"";var n=r+"";return"0"==n&&1/r==-1/0?"-0":n},Jr=Ur;var Gr=I,qr=le,Kr=Rr,Qr=function(e){return null==e?"":Jr(e)};var en=te;var rn=function(e,r){return Gr(e)?e:qr(e,r)?[e]:Kr(Qr(e))},nn=function(e){if("string"==typeof e||en(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r};var tn=function(e,r){for(var n=0,t=(r=rn(r,e)).length;null!=e&&n<t;)e=e[nn(r[n++])];return n&&n==t?e:void 0};var sn=m((function(e,r,n){var t=null==e?void 0:tn(e,r);return void 0===t?n:t}));const on=(e,r,n)=>sn(n,r)||sn(e,r),an=(e,r)=>{const n=r||e.defaultValue;return sn(e.collections,n)},ln={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},dn=e=>r=>{var n;const t=r.theme,i=an(ln,null==t?void 0:t.borderScheme);return(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.border)?`${on(i,e,t.overrides.border)}px`:`${i[e]}px`},cn={"width-005":dn("width-005"),"width-010":dn("width-010"),"width-020":dn("width-020"),"width-040":dn("width-040"),solid:(un="solid",e=>{var r;const n=e.theme,t=an(ln,null==n?void 0:n.borderScheme),i=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.border)?on(t,un,n.overrides.border):t[un];return"function"==typeof i?i(e):i})};var un;const gn={collections:{lifesg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},bookingsg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},rbs:{"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},mylegacy:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ccube:{"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},oneservice:{"brand-10":"#001A19","brand-20":"#002D2B","brand-30":"#00413D","brand-40":"#005954","brand-50":"#00756F","brand-60":"#03A098","brand-70":"#55BFBA","brand-80":"#92D6D2","brand-90":"#BFE7E5","brand-95":"#DDF2F1","brand-100":"#F4FBFA","primary-10":"#09191D","primary-20":"#102B34","primary-30":"#173D49","primary-40":"#205666","primary-50":"#2A7086","primary-60":"#2A7086","primary-70":"#8CB6C2","primary-80":"#B2CED6","primary-90":"#D1E2E7","primary-95":"#E8F0F3","primary-100":"#F9F8FC","secondary-10":"#001731","secondary-20":"#002752","secondary-30":"#003874","secondary-40":"#004D9F","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},pa:{"brand-10":"#881317","brand-20":"#B5191E","brand-30":"#B5040A","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},a11yplayground:{"brand-10":"#170F39","brand-20":"#281C62","brand-30":"#38268B","brand-40":"#4D34BF","brand-50":"#5735DF","brand-60":"#9986F9","brand-70":"#B2A5F8","brand-80":"#CDC2FA","brand-90":"#E2DCFC","brand-95":"#EFEDFE","brand-100":"#FAF8FD","primary-10":"#170F39","primary-20":"#281C62","primary-30":"#38268B","primary-40":"#4D34BF","primary-50":"#5735DF","primary-60":"#9986F9","primary-70":"#B2A5F8","primary-80":"#CDC2FA","primary-90":"#E2DCFC","primary-95":"#EFEDFE","primary-100":"#FAF8FD","secondary-10":"#251204","secondary-20":"#401F08","secondary-30":"#5B2C0B","secondary-40":"#7E3D0F","secondary-50":"#B04900","secondary-60":"#E26E1C","secondary-70":"#FF9445","secondary-80":"#FFBB8E","secondary-90":"#FFD9BF","secondary-95":"#FFECDF","secondary-100":"#FFF8F3","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#031B15","success-20":"#082D24","success-30":"#094134","success-40":"#0D5947","success-50":"#10755E","success-60":"#16A181","success-70":"#1EC59D","success-80":"#6FDDC2","success-90":"#AFECDE","success-95":"#D5F5ED","success-100":"#F1FCF9","warning-10":"#1F1500","warning-20":"#362500","warning-30":"#4D3501","warning-40":"#6A4801","warning-50":"#8B6001","warning-60":"#BF8301","warning-70":"#EAA102","warning-80":"#FFBF34","warning-90":"#FFDC8F","warning-95":"#FFEDC7","warning-100":"#FFF8EA","error-10":"#270F10","error-20":"#441B1B","error-30":"#612627","error-40":"#853535","error-50":"#AF4546","error-60":"#EC6162","error-70":"#F29696","error-80":"#F7BBBC","error-90":"#FAD8D8","error-95":"#FCEAEA","error-100":"#FEF7F7","info-10":"#0F1627","info-20":"#1B2745","info-30":"#273763","info-40":"#354D88","info-50":"#4665B3","info-60":"#618AF6","info-70":"#8DADFF","info-80":"#B4C9FF","info-90":"#D3DFFF","info-95":"#E9EFFF","info-100":"#F5F8FF",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"}},defaultValue:"lifesg"},hn=e=>r=>{var n;const t=r.theme,i=an(gn,null==t?void 0:t.colourScheme);return(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.primitiveColour)?on(i,e,t.overrides.primitiveColour):i[e]},bn={"brand-10":hn("brand-10"),"brand-20":hn("brand-20"),"brand-30":hn("brand-30"),"brand-40":hn("brand-40"),"brand-50":hn("brand-50"),"brand-60":hn("brand-60"),"brand-70":hn("brand-70"),"brand-80":hn("brand-80"),"brand-90":hn("brand-90"),"brand-95":hn("brand-95"),"brand-100":hn("brand-100"),"primary-10":hn("primary-10"),"primary-20":hn("primary-20"),"primary-30":hn("primary-30"),"primary-40":hn("primary-40"),"primary-50":hn("primary-50"),"primary-60":hn("primary-60"),"primary-70":hn("primary-70"),"primary-80":hn("primary-80"),"primary-90":hn("primary-90"),"primary-95":hn("primary-95"),"primary-100":hn("primary-100"),"secondary-10":hn("secondary-10"),"secondary-20":hn("secondary-20"),"secondary-30":hn("secondary-30"),"secondary-40":hn("secondary-40"),"secondary-50":hn("secondary-50"),"secondary-60":hn("secondary-60"),"secondary-70":hn("secondary-70"),"secondary-80":hn("secondary-80"),"secondary-90":hn("secondary-90"),"secondary-95":hn("secondary-95"),"secondary-100":hn("secondary-100"),"neutral-10":hn("neutral-10"),"neutral-20":hn("neutral-20"),"neutral-30":hn("neutral-30"),"neutral-40":hn("neutral-40"),"neutral-50":hn("neutral-50"),"neutral-60":hn("neutral-60"),"neutral-70":hn("neutral-70"),"neutral-80":hn("neutral-80"),"neutral-90":hn("neutral-90"),"neutral-95":hn("neutral-95"),"neutral-100":hn("neutral-100"),"success-10":hn("success-10"),"success-20":hn("success-20"),"success-30":hn("success-30"),"success-40":hn("success-40"),"success-50":hn("success-50"),"success-60":hn("success-60"),"success-70":hn("success-70"),"success-80":hn("success-80"),"success-90":hn("success-90"),"success-95":hn("success-95"),"success-100":hn("success-100"),"warning-10":hn("warning-10"),"warning-20":hn("warning-20"),"warning-30":hn("warning-30"),"warning-40":hn("warning-40"),"warning-50":hn("warning-50"),"warning-60":hn("warning-60"),"warning-70":hn("warning-70"),"warning-80":hn("warning-80"),"warning-90":hn("warning-90"),"warning-95":hn("warning-95"),"warning-100":hn("warning-100"),"error-10":hn("error-10"),"error-20":hn("error-20"),"error-30":hn("error-30"),"error-40":hn("error-40"),"error-50":hn("error-50"),"error-60":hn("error-60"),"error-70":hn("error-70"),"error-80":hn("error-80"),"error-90":hn("error-90"),"error-95":hn("error-95"),"error-100":hn("error-100"),"info-10":hn("info-10"),"info-20":hn("info-20"),"info-30":hn("info-30"),"info-40":hn("info-40"),"info-50":hn("info-50"),"info-60":hn("info-60"),"info-70":hn("info-70"),"info-80":hn("info-80"),"info-90":hn("info-90"),"info-95":hn("info-95"),"info-100":hn("info-100"),white:hn("white"),black:hn("black"),"primary-inverse":hn("primary-inverse")},mn={text:hn("neutral-20"),"text-subtle":hn("neutral-30"),"text-subtler":hn("neutral-50"),"text-subtlest":hn("neutral-60"),"text-primary":hn("primary-50"),"text-hover":hn("primary-40"),"text-selected":hn("primary-50"),"text-selected-hover":hn("primary-40"),"text-disabled":hn("neutral-50"),"text-disabled-subtle":hn("neutral-60"),"text-disabled-subtlest":hn("neutral-80"),"text-selected-disabled":hn("neutral-20"),"text-success":hn("success-40"),"text-warning":hn("warning-40"),"text-error":hn("error-40"),"text-info":hn("info-40"),"text-inverse":hn("white"),icon:hn("neutral-50"),"icon-subtle":hn("neutral-60"),"icon-strongest":hn("neutral-20"),"icon-primary":hn("primary-50"),"icon-primary-subtle":hn("primary-60"),"icon-primary-subtlest":hn("primary-70"),"icon-hover":hn("primary-40"),"icon-selected":hn("primary-50"),"icon-selected-hover":hn("primary-40"),"icon-disabled":hn("neutral-50"),"icon-disabled-subtle":hn("neutral-60"),"icon-selected-disabled":hn("neutral-60"),"icon-success":hn("success-50"),"icon-warning":hn("warning-60"),"icon-error":hn("error-50"),"icon-error-strong":hn("error-40"),"icon-info":hn("info-50"),"icon-inverse":hn("white"),"icon-primary-inverse":hn("primary-inverse"),border:hn("neutral-90"),"border-strong":hn("neutral-70"),"border-stronger":hn("neutral-50"),"border-primary":hn("primary-50"),"border-primary-subtle":hn("primary-60"),"border-hover":hn("primary-90"),"border-hover-strong":hn("primary-60"),"border-selected":hn("primary-50"),"border-selected-subtle":hn("primary-70"),"border-selected-subtlest":hn("primary-90"),"border-selected-hover":hn("primary-40"),"border-focus":hn("primary-60"),"border-focus-strong":hn("primary-50"),"border-disabled":hn("neutral-90"),"border-selected-disabled":hn("neutral-70"),"border-success":hn("success-60"),"border-warning":hn("warning-60"),"border-error":hn("error-60"),"border-error-focus":hn("error-60"),"border-error-focus-strong":hn("error-40"),"border-error-strong":hn("error-40"),"border-info":hn("info-60"),bg:hn("white"),"bg-strong":hn("neutral-100"),"bg-stronger":hn("neutral-95"),"bg-strongest":hn("neutral-90"),"bg-hover":hn("primary-95"),"bg-hover-strong":hn("primary-90"),"bg-hover-subtle":hn("primary-100"),"bg-hover-neutral":hn("neutral-100"),"bg-hover-neutral-strong":hn("neutral-90"),"bg-selected":hn("primary-95"),"bg-selected-hover":hn("primary-90"),"bg-selected-strong":hn("primary-90"),"bg-selected-stronger":hn("primary-70"),"bg-selected-strongest":hn("primary-50"),"bg-selected-strongest-hover":hn("primary-40"),"bg-disabled":hn("neutral-95"),"bg-selected-disabled":hn("neutral-95"),"bg-selected-stronger-disabled":hn("neutral-70"),"bg-success":hn("success-100"),"bg-success-hover":hn("success-95"),"bg-success-strong":hn("success-50"),"bg-success-strong-hover":hn("success-40"),"bg-warning":hn("warning-100"),"bg-warning-hover":hn("warning-95"),"bg-warning-strong":hn("warning-50"),"bg-warning-strong-hover":hn("warning-40"),"bg-info":hn("info-100"),"bg-info-hover":hn("info-95"),"bg-info-strong":hn("info-50"),"bg-info-strong-hover":hn("info-40"),"bg-error":hn("error-100"),"bg-error-hover":hn("error-95"),"bg-error-strong":hn("error-50"),"bg-error-strong-hover":hn("error-40"),"bg-inverse":hn("neutral-20"),"bg-inverse-subtle":hn("neutral-30"),"bg-inverse-subtler":hn("neutral-50"),"bg-inverse-subtlest":hn("neutral-60"),"bg-inverse-hover":hn("neutral-40"),"bg-primary":hn("primary-50"),"bg-primary-subtle":hn("primary-60"),"bg-primary-subtler":hn("primary-95"),"bg-primary-subtlest":hn("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":hn("primary-40"),"bg-primary-subtlest-hover":hn("primary-90"),"bg-primary-subtlest-selected":hn("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:hn("primary-50"),"hyperlink-hover":hn("primary-40"),"hyperlink-visited":hn("primary-40"),"hyperlink-inverse":hn("primary-inverse"),"focus-ring":hn("black"),"focus-ring-inverse":hn("white")},yn={collections:{lifesg:mn,bookingsg:mn,rbs:mn,mylegacy:mn,ccube:mn,oneservice:mn,pa:{text:hn("neutral-30"),"text-subtle":hn("neutral-40"),"text-subtler":hn("neutral-50"),"text-subtlest":hn("neutral-70"),"text-primary":hn("neutral-10"),"text-hover":hn("neutral-70"),"text-selected":hn("neutral-20"),"text-selected-hover":hn("neutral-10"),"text-disabled":hn("neutral-50"),"text-disabled-subtle":hn("neutral-60"),"text-disabled-subtlest":hn("neutral-80"),"text-selected-disabled":hn("neutral-40"),"text-success":hn("success-40"),"text-warning":hn("warning-40"),"text-error":hn("brand-30"),"text-info":hn("neutral-40"),"text-inverse":hn("neutral-100"),icon:hn("neutral-40"),"icon-subtle":hn("neutral-50"),"icon-strongest":hn("neutral-10"),"icon-primary":hn("neutral-10"),"icon-primary-subtle":hn("neutral-30"),"icon-primary-subtlest":hn("neutral-60"),"icon-hover":hn("neutral-70"),"icon-selected":hn("brand-20"),"icon-selected-hover":hn("brand-10"),"icon-disabled":hn("neutral-50"),"icon-disabled-subtle":hn("neutral-60"),"icon-selected-disabled":hn("neutral-40"),"icon-success":hn("success-40"),"icon-warning":hn("warning-60"),"icon-error":hn("brand-30"),"icon-error-strong":hn("brand-10"),"icon-info":hn("neutral-40"),"icon-inverse":hn("neutral-100"),"icon-primary-inverse":"#F9B371",border:hn("neutral-90"),"border-strong":hn("neutral-30"),"border-stronger":hn("neutral-20"),"border-primary":hn("neutral-40"),"border-primary-subtle":hn("neutral-60"),"border-hover":hn("neutral-80"),"border-hover-strong":hn("neutral-10"),"border-selected":hn("brand-20"),"border-selected-subtle":hn("neutral-40"),"border-selected-subtlest":hn("neutral-70"),"border-selected-hover":hn("neutral-10"),"border-focus":hn("neutral-20"),"border-focus-strong":hn("neutral-10"),"border-disabled":hn("neutral-90"),"border-selected-disabled":hn("neutral-80"),"border-success":hn("success-40"),"border-warning":hn("warning-60"),"border-error":hn("brand-30"),"border-error-focus":hn("brand-20"),"border-error-focus-strong":hn("brand-10"),"border-error-strong":hn("brand-20"),"border-info":hn("neutral-40"),bg:hn("neutral-100"),"bg-strong":hn("neutral-95"),"bg-stronger":hn("neutral-90"),"bg-strongest":hn("neutral-80"),"bg-hover":hn("brand-90"),"bg-hover-strong":hn("brand-80"),"bg-hover-subtle":hn("neutral-90"),"bg-hover-neutral":hn("neutral-90"),"bg-hover-neutral-strong":hn("neutral-90"),"bg-selected":hn("brand-100"),"bg-selected-hover":hn("brand-30"),"bg-selected-strong":hn("brand-50"),"bg-selected-stronger":hn("brand-40"),"bg-selected-strongest":hn("brand-20"),"bg-selected-strongest-hover":hn("brand-10"),"bg-disabled":hn("neutral-90"),"bg-selected-disabled":hn("neutral-90"),"bg-selected-stronger-disabled":hn("neutral-80"),"bg-success":hn("success-100"),"bg-success-hover":hn("success-95"),"bg-success-strong":hn("success-50"),"bg-success-strong-hover":hn("success-40"),"bg-warning":hn("warning-100"),"bg-warning-hover":hn("warning-95"),"bg-warning-strong":hn("warning-50"),"bg-warning-strong-hover":hn("warning-40"),"bg-info":hn("neutral-95"),"bg-info-hover":hn("info-95"),"bg-info-strong":hn("info-50"),"bg-info-strong-hover":hn("info-40"),"bg-error":hn("brand-100"),"bg-error-hover":hn("error-95"),"bg-error-strong":hn("error-50"),"bg-error-strong-hover":hn("error-40"),"bg-inverse":hn("neutral-40"),"bg-inverse-subtle":hn("neutral-60"),"bg-inverse-subtler":hn("neutral-70"),"bg-inverse-subtlest":hn("neutral-80"),"bg-inverse-hover":hn("neutral-30"),"bg-primary":hn("brand-20"),"bg-primary-subtle":hn("brand-60"),"bg-primary-subtler":hn("brand-80"),"bg-primary-subtlest":hn("brand-100"),"bg-available":hn("success-60"),"bg-primary-hover":hn("brand-10"),"bg-primary-subtlest-hover":hn("brand-80"),"bg-primary-subtlest-selected":hn("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:hn("neutral-10"),"hyperlink-hover":hn("neutral-40"),"hyperlink-visited":hn("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":hn("black"),"focus-ring-inverse":hn("white")},a11yplayground:mn},defaultValue:"lifesg"},fn=e=>r=>{var n;const t=r.theme,i=an(yn,null==t?void 0:t.colourScheme),s=(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.semanticColour)?on(i,e,t.overrides.semanticColour):i[e];return"function"==typeof s?s(r):s},pn={text:fn("text"),"text-subtle":fn("text-subtle"),"text-subtler":fn("text-subtler"),"text-subtlest":fn("text-subtlest"),"text-primary":fn("text-primary"),"text-hover":fn("text-hover"),"text-selected":fn("text-selected"),"text-selected-hover":fn("text-selected-hover"),"text-disabled":fn("text-disabled"),"text-disabled-subtle":fn("text-disabled-subtle"),"text-disabled-subtlest":fn("text-disabled-subtlest"),"text-selected-disabled":fn("text-selected-disabled"),"text-success":fn("text-success"),"text-warning":fn("text-warning"),"text-error":fn("text-error"),"text-info":fn("text-info"),"text-inverse":fn("text-inverse"),icon:fn("icon"),"icon-subtle":fn("icon-subtle"),"icon-strongest":fn("icon-strongest"),"icon-primary":fn("icon-primary"),"icon-primary-subtle":fn("icon-primary-subtle"),"icon-primary-subtlest":fn("icon-primary-subtlest"),"icon-hover":fn("icon-hover"),"icon-selected":fn("icon-selected"),"icon-selected-hover":fn("icon-selected-hover"),"icon-disabled":fn("icon-disabled"),"icon-disabled-subtle":fn("icon-disabled-subtle"),"icon-selected-disabled":fn("icon-selected-disabled"),"icon-success":fn("icon-success"),"icon-warning":fn("icon-warning"),"icon-error":fn("icon-error"),"icon-error-strong":fn("icon-error-strong"),"icon-info":fn("icon-info"),"icon-inverse":fn("icon-inverse"),"icon-primary-inverse":fn("icon-primary-inverse"),border:fn("border"),"border-strong":fn("border-strong"),"border-stronger":fn("border-stronger"),"border-primary":fn("border-primary"),"border-primary-subtle":fn("border-primary-subtle"),"border-hover":fn("border-hover"),"border-hover-strong":fn("border-hover-strong"),"border-selected":fn("border-selected"),"border-selected-subtle":fn("border-selected-subtle"),"border-selected-subtlest":fn("border-selected-subtlest"),"border-selected-hover":fn("border-selected-hover"),"border-focus":fn("border-focus"),"border-focus-strong":fn("border-focus-strong"),"border-disabled":fn("border-disabled"),"border-selected-disabled":fn("border-selected-disabled"),"border-success":fn("border-success"),"border-warning":fn("border-warning"),"border-error":fn("border-error"),"border-error-focus":fn("border-error-focus"),"border-error-focus-strong":fn("border-error-focus-strong"),"border-error-strong":fn("border-error-strong"),"border-info":fn("border-info"),bg:fn("bg"),"bg-strong":fn("bg-strong"),"bg-stronger":fn("bg-stronger"),"bg-strongest":fn("bg-strongest"),"bg-hover":fn("bg-hover"),"bg-hover-strong":fn("bg-hover-strong"),"bg-hover-subtle":fn("bg-hover-subtle"),"bg-hover-neutral":fn("bg-hover-neutral"),"bg-hover-neutral-strong":fn("bg-hover-neutral-strong"),"bg-selected":fn("bg-selected"),"bg-selected-hover":fn("bg-selected-hover"),"bg-selected-strong":fn("bg-selected-strong"),"bg-selected-stronger":fn("bg-selected-stronger"),"bg-selected-strongest":fn("bg-selected-strongest"),"bg-selected-strongest-hover":fn("bg-selected-strongest-hover"),"bg-disabled":fn("bg-disabled"),"bg-selected-disabled":fn("bg-selected-disabled"),"bg-selected-stronger-disabled":fn("bg-selected-stronger-disabled"),"bg-success":fn("bg-success"),"bg-success-hover":fn("bg-success-hover"),"bg-success-strong":fn("bg-success-strong"),"bg-success-strong-hover":fn("bg-success-strong-hover"),"bg-warning":fn("bg-warning"),"bg-warning-hover":fn("bg-warning-hover"),"bg-warning-strong":fn("bg-warning-strong"),"bg-warning-strong-hover":fn("bg-warning-strong-hover"),"bg-info":fn("bg-info"),"bg-info-hover":fn("bg-info-hover"),"bg-info-strong":fn("bg-info-strong"),"bg-info-strong-hover":fn("bg-info-strong-hover"),"bg-error":fn("bg-error"),"bg-error-hover":fn("bg-error-hover"),"bg-error-strong":fn("bg-error-strong"),"bg-error-strong-hover":fn("bg-error-strong-hover"),"bg-inverse":fn("bg-inverse"),"bg-inverse-subtle":fn("bg-inverse-subtle"),"bg-inverse-subtler":fn("bg-inverse-subtler"),"bg-inverse-subtlest":fn("bg-inverse-subtlest"),"bg-inverse-hover":fn("bg-inverse-hover"),"bg-primary":fn("bg-primary"),"bg-primary-subtle":fn("bg-primary-subtle"),"bg-primary-subtler":fn("bg-primary-subtler"),"bg-primary-subtlest":fn("bg-primary-subtlest"),"bg-available":fn("bg-available"),"bg-primary-hover":fn("bg-primary-hover"),"bg-primary-subtlest-hover":fn("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":fn("bg-primary-subtlest-selected"),"overlay-strong":fn("overlay-strong"),"overlay-subtle":fn("overlay-subtle"),hyperlink:fn("hyperlink"),"hyperlink-hover":fn("hyperlink-hover"),"hyperlink-visited":fn("hyperlink-visited"),"hyperlink-inverse":fn("hyperlink-inverse"),"focus-ring":fn("focus-ring"),"focus-ring-inverse":fn("focus-ring-inverse")},xn={collections:{default:{solid:e=>r=>{var n,t,i;const{thickness:s,radius:o,colour:a}=e||{},l=null!==(n="function"==typeof s?s(r):s)&&void 0!==n?n:cn["width-010"](r),c=null!==(t="function"==typeof o?o(r):o)&&void 0!==t?t:0,u=null!==(i="function"==typeof a?a(r):a)&&void 0!==i?i:pn.border(r),g=cn.solid;return d`
            border: ${l} ${g} ${u};
            border-radius: ${c};
        `},"dashed-default":e=>r=>{var n,t,i;const{thickness:s,radius:o,colour:a}=e||{},l=null!==(n="function"==typeof s?s(r):s)&&void 0!==n?n:cn["width-010"](r),c=null!==(t="function"==typeof o?o(r):o)&&void 0!==t?t:0,u=null!==(i="function"==typeof a?a(r):a)&&void 0!==i?i:pn.border(r),g=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${c}' ry='${c}' stroke='${u}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return d`
            background-image: url("data:image/svg+xml,${g}");
            border-radius: ${c};
        `}}},defaultValue:"default"},vn=e=>1===e.length&&"theme"in e[0],Fn=e=>(...r)=>n=>{const t=vn(r)?[]:r,i=vn(r)?r[0]:n,s=i.theme;return(0,an(xn,null==s?void 0:s.borderScheme)[e])(...t)(i)},wn={solid:Fn("solid"),"dashed-default":Fn("dashed-default")},$n={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},Dn=e=>r=>{var n;const t=r.theme,i=an($n,null==t?void 0:t.breakpointScheme);let s;return s=(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.breakpoint)?on(i,e,t.overrides.breakpoint):i[e],s},En={"xxs-min":Dn("xxs-min"),"xxs-max":Dn("xxs-max"),"xs-min":Dn("xs-min"),"xs-max":Dn("xs-max"),"sm-min":Dn("sm-min"),"sm-max":Dn("sm-max"),"md-min":Dn("md-min"),"md-max":Dn("md-max"),"lg-min":Dn("lg-min"),"lg-max":Dn("lg-max"),"xl-min":Dn("xl-min"),"xl-max":Dn("xl-max"),"xxl-min":Dn("xxl-min"),"xxs-column":Dn("xxs-column"),"xs-column":Dn("xs-column"),"sm-column":Dn("sm-column"),"md-column":Dn("md-column"),"lg-column":Dn("lg-column"),"xl-column":Dn("xl-column"),"xxl-column":Dn("xxl-column"),"xxs-gutter":Dn("xxs-gutter"),"xs-gutter":Dn("xs-gutter"),"sm-gutter":Dn("sm-gutter"),"md-gutter":Dn("md-gutter"),"lg-gutter":Dn("lg-gutter"),"xl-gutter":Dn("xl-gutter"),"xxl-gutter":Dn("xxl-gutter"),"xxs-margin":Dn("xxs-margin"),"xs-margin":Dn("xs-margin"),"sm-margin":Dn("sm-margin"),"md-margin":Dn("md-margin"),"lg-margin":Dn("lg-margin"),"xl-margin":Dn("xl-margin"),"xxl-margin":Dn("xxl-margin")},Cn=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,n)=>(r[n]=((e,r)=>{const n=En["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const t=n(r);return`@media screen and (${e}: ${t}px)`}})(e,n),r)),{}),Bn={MaxWidth:Cn("max-width"),MinWidth:Cn("min-width")},An={collections:{default:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},bookingsg:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},pa:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.5rem","heading-size-sm":"1.25rem","heading-size-xs":"1rem","heading-lh-xxl":"3rem","heading-lh-xl":"2.5rem","heading-lh-lg":"2.25rem","heading-lh-md":"2rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.032rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.625rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.25rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},a11yplayground:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Atkinson Hyperlegible Next","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0.00875rem"}},defaultValue:"default"},zn=e=>r=>{var n;const t=r.theme,i=an(An,null==t?void 0:t.fontScheme);return(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.fontSpec)?on(i,e,t.overrides.fontSpec):i[e]},Sn={"heading-size-xxl":zn("heading-size-xxl"),"heading-size-xl":zn("heading-size-xl"),"heading-size-lg":zn("heading-size-lg"),"heading-size-md":zn("heading-size-md"),"heading-size-sm":zn("heading-size-sm"),"heading-size-xs":zn("heading-size-xs"),"heading-lh-xxl":zn("heading-lh-xxl"),"heading-lh-xl":zn("heading-lh-xl"),"heading-lh-lg":zn("heading-lh-lg"),"heading-lh-md":zn("heading-lh-md"),"heading-lh-sm":zn("heading-lh-sm"),"heading-lh-xs":zn("heading-lh-xs"),"heading-ls-xxl":zn("heading-ls-xxl"),"heading-ls-xl":zn("heading-ls-xl"),"heading-ls-lg":zn("heading-ls-lg"),"heading-ls-md":zn("heading-ls-md"),"heading-ls-sm":zn("heading-ls-sm"),"heading-ls-xs":zn("heading-ls-xs"),"weight-light":zn("weight-light"),"weight-regular":zn("weight-regular"),"weight-semibold":zn("weight-semibold"),"weight-bold":zn("weight-bold"),"font-family":zn("font-family"),"body-size-baseline":zn("body-size-baseline"),"body-size-md":zn("body-size-md"),"body-size-sm":zn("body-size-sm"),"body-size-xs":zn("body-size-xs"),"body-lh-baseline":zn("body-lh-baseline"),"body-lh-md":zn("body-lh-md"),"body-lh-sm":zn("body-lh-sm"),"body-lh-xs":zn("body-lh-xs"),"body-ls-baseline":zn("body-ls-baseline"),"body-ls-md":zn("body-ls-md"),"body-ls-sm":zn("body-ls-sm"),"body-ls-xs":zn("body-ls-xs"),"form-label-size":zn("form-label-size"),"form-description-size":zn("form-description-size"),"form-label-lh":zn("form-label-lh"),"form-description-lh":zn("form-description-lh"),"form-label-ls":zn("form-label-ls"),"form-description-ls":zn("form-description-ls")},Mn=(e,r,n,t,i)=>{const{disableLigatures:s}=i||{};return d`
        font-family: ${zn("font-family")};
        font-size: ${zn(e)};
        font-weight: ${zn(r)};
        line-height: ${zn(n)};
        letter-spacing: ${zn(t)};

        font-variant: ${s?"no-common-ligatures":"normal"};
    `},kn=(e={})=>({"heading-xxl-light":Mn("heading-size-xxl","weight-light","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-regular":Mn("heading-size-xxl","weight-regular","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-semibold":Mn("heading-size-xxl","weight-semibold","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-bold":Mn("heading-size-xxl","weight-bold","heading-lh-xxl","heading-ls-xxl",e),"heading-xl-light":Mn("heading-size-xl","weight-light","heading-lh-xl","heading-ls-xl",e),"heading-xl-regular":Mn("heading-size-xl","weight-regular","heading-lh-xl","heading-ls-xl",e),"heading-xl-semibold":Mn("heading-size-xl","weight-semibold","heading-lh-xl","heading-ls-xl",e),"heading-xl-bold":Mn("heading-size-xl","weight-bold","heading-lh-xl","heading-ls-xl",e),"heading-lg-light":Mn("heading-size-lg","weight-light","heading-lh-lg","heading-ls-lg",e),"heading-lg-regular":Mn("heading-size-lg","weight-regular","heading-lh-lg","heading-ls-lg",e),"heading-lg-semibold":Mn("heading-size-lg","weight-semibold","heading-lh-lg","heading-ls-lg",e),"heading-lg-bold":Mn("heading-size-lg","weight-bold","heading-lh-lg","heading-ls-lg",e),"heading-md-light":Mn("heading-size-md","weight-light","heading-lh-md","heading-ls-md",e),"heading-md-regular":Mn("heading-size-md","weight-regular","heading-lh-md","heading-ls-md",e),"heading-md-semibold":Mn("heading-size-md","weight-semibold","heading-lh-md","heading-ls-md",e),"heading-md-bold":Mn("heading-size-md","weight-bold","heading-lh-md","heading-ls-md",e),"heading-sm-light":Mn("heading-size-sm","weight-light","heading-lh-sm","heading-ls-sm",e),"heading-sm-regular":Mn("heading-size-sm","weight-regular","heading-lh-sm","heading-ls-sm",e),"heading-sm-semibold":Mn("heading-size-sm","weight-semibold","heading-lh-sm","heading-ls-sm",e),"heading-sm-bold":Mn("heading-size-sm","weight-bold","heading-lh-sm","heading-ls-sm",e),"heading-xs-light":Mn("heading-size-xs","weight-light","heading-lh-xs","heading-ls-xs",e),"heading-xs-regular":Mn("heading-size-xs","weight-regular","heading-lh-xs","heading-ls-xs",e),"heading-xs-semibold":Mn("heading-size-xs","weight-semibold","heading-lh-xs","heading-ls-xs",e),"heading-xs-bold":Mn("heading-size-xs","weight-bold","heading-lh-xs","heading-ls-xs",e),"body-baseline-light":Mn("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline",e),"body-baseline-regular":Mn("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline",e),"body-baseline-semibold":Mn("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline",e),"body-baseline-bold":Mn("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline",e),"body-md-light":Mn("body-size-md","weight-light","body-lh-md","body-ls-md",e),"body-md-regular":Mn("body-size-md","weight-regular","body-lh-md","body-ls-md",e),"body-md-semibold":Mn("body-size-md","weight-semibold","body-lh-md","body-ls-md",e),"body-md-bold":Mn("body-size-md","weight-bold","body-lh-md","body-ls-md",e),"body-sm-light":Mn("body-size-sm","weight-light","body-lh-sm","body-ls-sm",e),"body-sm-regular":Mn("body-size-sm","weight-regular","body-lh-sm","body-ls-sm",e),"body-sm-semibold":Mn("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm",e),"body-sm-bold":Mn("body-size-sm","weight-bold","body-lh-sm","body-ls-sm",e),"body-xs-light":Mn("body-size-xs","weight-light","body-lh-xs","body-ls-xs",e),"body-xs-regular":Mn("body-size-xs","weight-regular","body-lh-xs","body-ls-xs",e),"body-xs-semibold":Mn("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs",e),"body-xs-bold":Mn("body-size-xs","weight-bold","body-lh-xs","body-ls-xs",e),"form-label":Mn("form-label-size","weight-semibold","form-label-lh","form-label-ls",e),"form-description":Mn("form-description-size","weight-regular","form-description-lh","form-description-ls",e)}),On=kn({disableLigatures:!0}),_n={collections:{default:kn(),bookingsg:On,pa:kn({disableLigatures:!0}),a11yplayground:kn({disableLigatures:!0})},defaultValue:"default"},Yn=e=>r=>{var n;const t=r.theme,i=an(_n,null==t?void 0:t.fontScheme),s=(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.font)?on(i,e,t.overrides.font):i[e];return"function"==typeof s?s(r):s},Tn={"heading-xxl-light":Yn("heading-xxl-light"),"heading-xxl-regular":Yn("heading-xxl-regular"),"heading-xxl-semibold":Yn("heading-xxl-semibold"),"heading-xxl-bold":Yn("heading-xxl-bold"),"heading-xl-light":Yn("heading-xl-light"),"heading-xl-regular":Yn("heading-xl-regular"),"heading-xl-semibold":Yn("heading-xl-semibold"),"heading-xl-bold":Yn("heading-xl-bold"),"heading-lg-light":Yn("heading-lg-light"),"heading-lg-regular":Yn("heading-lg-regular"),"heading-lg-semibold":Yn("heading-lg-semibold"),"heading-lg-bold":Yn("heading-lg-bold"),"heading-md-light":Yn("heading-md-light"),"heading-md-regular":Yn("heading-md-regular"),"heading-md-semibold":Yn("heading-md-semibold"),"heading-md-bold":Yn("heading-md-bold"),"heading-sm-light":Yn("heading-sm-light"),"heading-sm-regular":Yn("heading-sm-regular"),"heading-sm-semibold":Yn("heading-sm-semibold"),"heading-sm-bold":Yn("heading-sm-bold"),"heading-xs-light":Yn("heading-xs-light"),"heading-xs-regular":Yn("heading-xs-regular"),"heading-xs-semibold":Yn("heading-xs-semibold"),"heading-xs-bold":Yn("heading-xs-bold"),"body-baseline-light":Yn("body-baseline-light"),"body-baseline-regular":Yn("body-baseline-regular"),"body-baseline-semibold":Yn("body-baseline-semibold"),"body-baseline-bold":Yn("body-baseline-bold"),"body-md-light":Yn("body-md-light"),"body-md-regular":Yn("body-md-regular"),"body-md-semibold":Yn("body-md-semibold"),"body-md-bold":Yn("body-md-bold"),"body-sm-light":Yn("body-sm-light"),"body-sm-regular":Yn("body-sm-regular"),"body-sm-semibold":Yn("body-sm-semibold"),"body-sm-bold":Yn("body-sm-bold"),"body-xs-light":Yn("body-xs-light"),"body-xs-regular":Yn("body-xs-regular"),"body-xs-semibold":Yn("body-xs-semibold"),"body-xs-bold":Yn("body-xs-bold"),"form-label":Yn("form-label"),"form-description":Yn("form-description")},Ln={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},jn=e=>r=>{var n;const t=r.theme,i=an(Ln,null==t?void 0:t.motionScheme);return(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.motion)?on(i,e,t.overrides.motion):i[e]},In={"duration-150":jn("duration-150"),"duration-250":jn("duration-250"),"duration-350":jn("duration-350"),"duration-500":jn("duration-500"),"duration-800":jn("duration-800"),"duration-1000":jn("duration-1000"),"ease-default":jn("ease-default"),"ease-standard":jn("ease-standard"),"ease-entrance":jn("ease-entrance"),"ease-exit":jn("ease-exit")},Hn={collections:{default:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"default"},Wn=e=>r=>{var n;const t=r.theme,i=an(Hn,null==t?void 0:t.radiusScheme);return(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.radius)?`${on(i,e,t.overrides.radius)}px`:`${i[e]}px`},Rn={none:Wn("none"),xs:Wn("xs"),sm:Wn("sm"),md:Wn("md"),lg:Wn("lg"),full:Wn("full")},Pn={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},Nn=e=>r=>{var n;const t=r.theme,i=an(Pn,null==t?void 0:t.spacingScheme);return(null===(n=null==t?void 0:t.overrides)||void 0===n?void 0:n.spacing)?`${on(i,e,t.overrides.spacing)}px`:`${i[e]}px`},Vn={"spacing-0":Nn("spacing-0"),"spacing-4":Nn("spacing-4"),"spacing-8":Nn("spacing-8"),"spacing-12":Nn("spacing-12"),"spacing-16":Nn("spacing-16"),"spacing-20":Nn("spacing-20"),"spacing-24":Nn("spacing-24"),"spacing-32":Nn("spacing-32"),"spacing-40":Nn("spacing-40"),"spacing-48":Nn("spacing-48"),"spacing-64":Nn("spacing-64"),"spacing-72":Nn("spacing-72"),"layout-xs":Nn("layout-xs"),"layout-sm":Nn("layout-sm"),"layout-md":Nn("layout-md"),"layout-lg":Nn("layout-lg"),"layout-xl":Nn("layout-xl"),"layout-xxl":Nn("layout-xxl"),"layout-xxxl":Nn("layout-xxxl")},Zn=Object.assign(Object.assign({},pn),{Primitive:bn}),Xn=Object.assign(Object.assign({},Tn),{Spec:Sn}),Un=In,Jn=Object.assign(Object.assign({},cn),{Util:wn}),Gn=Vn,qn=Rn,Kn=Bn;var Qn;l.div`
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
    background-color: ${e=>e.$stacked?Zn["overlay-subtle"]:Zn["overlay-strong"]};
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
`,function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(Qn||(Qn={}));l.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${e=>{return r=e.show,n=e.animationFrom||"bottom",r?`\n\t\t\t${n}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${n}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var r,n}}

    ${Kn.MaxWidth.sm} {
        height: calc(
            ${e=>e.verticalHeight?`${e.verticalHeight}px`:"1vh"} * 100
        );

        top: ${e=>e.offsetTop||0}px;
    }
`;const et=(e,r,n=!1)=>d`
        ${Xn[`${e}-${r}`]}
        ${n?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `,rt=e=>{if(e)return d`
            ${r=e,d`
    display: -webkit-box;
    -webkit-line-clamp: ${r};
    -webkit-box-orient: vertical;
    overflow: hidden;
`}
        `;var r},nt=(e,r)=>d`
    ${et(e,r.weight||"regular",r.paragraph)}
    ${((e=!1,r=!1,n)=>r?d`
            display: block;
            ${rt(n)}
        `:e?d`
            display: inline;
        `:d`
            display: block;
            ${rt(n)}
        `)(r.inline,r.paragraph,r.maxLines)}
    color: ${Zn.text};
`;var tt;!function(n){const t=(e,r,n)=>{const t=l(e).attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${e=>nt(r,e)}
        `;return t.displayName=`Typography.${n}`,t};n.HeadingXXL=t("h1","heading-xxl","HeadingXXL"),n.HeadingXL=t("h2","heading-xl","HeadingXL"),n.HeadingLG=t("h3","heading-lg","HeadingLG"),n.HeadingMD=t("h4","heading-md","HeadingMD"),n.HeadingSM=t("h5","heading-sm","HeadingSM"),n.HeadingXS=t("h6","heading-xs","HeadingXS");const i=(e,r)=>{const n=l.p.attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${r=>nt(e,r)}
        `;return n.displayName=`Typography.${r}`,n};n.BodyBL=i("body-baseline","BodyBL"),n.BodyMD=i("body-md","BodyMD"),n.BodySM=i("body-sm","BodySM"),n.BodyXS=i("body-xs","BodyXS");const s=(n,t)=>{const i=l.a`
            ${e=>d`
                ${et(n,e.weight||"regular")}
                color: ${Zn.hyperlink};
                text-decoration: none;

                :hover,
                :active,
                :focus {
                    color: ${Zn["text-hover"]};
                }
            `}
        `,s=n=>{var{external:t=!1,children:s}=n,o=h(n,["external","children"]);return e(i,Object.assign({},o,{children:[s,t&&r(it,{})]}))};return s.displayName=`Typography.${t}`,s};n.LinkBL=s("body-baseline","LinkBL"),n.LinkMD=s("body-md","LinkMD"),n.LinkSM=s("body-sm","LinkSM"),n.LinkXS=s("body-xs","LinkXS")}(tt||(tt={}));const it=l(u)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`,st=l.div`
    border-radius: ${qn.md};
    background: ${Zn.bg};
    padding: ${Gn["spacing-16"]} ${Gn["spacing-32"]};
    box-shadow: 0 2px 8px rgba(104, 104, 104, 0.25);
`,ot=l.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${Gn["spacing-24"]};
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
                background-color: ${Zn["bg-hover-neutral"]};
            `}
    }
`,at=t.forwardRef(((e,n)=>{var{children:t,focusHighlight:i=!0,focusOutline:s="none",type:o="button"}=e,a=h(e,["children","focusHighlight","focusOutline","type"]);return r(ot,Object.assign({ref:n,$outline:s,$highlight:i,type:o},a,{children:t}))})),lt=l.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${Zn.bg};
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.45);
    border-radius: 0.75rem;
    overflow: hidden;

    ${Kn.MaxWidth.md} {
        width: 90%;
        max-height: 70%;
    }
`,dt=l(at)`
    position: absolute;
    top: var(--close-button-top-inset, ${Gn["spacing-16"]});
    right: var(--close-button-right-inset, ${Gn["spacing-16"]});
    padding: 0;
    color: ${Zn.icon};

    svg {
        height: 2rem;
        width: 2rem;
    }

    ${Kn.MaxWidth.sm} {
        right: var(--close-button-right-inset, ${Gn["spacing-20"]});
    }
`,ct=e=>{const{textSize:r}=e||{};return d`
        // Text styling
        ${r&&Xn[`${r}-regular`]}

        strong {
            font-weight: ${Xn.Spec["weight-semibold"]};
            ${r&&Xn[`${r}-semibold`]};
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-weight: ${Xn.Spec["weight-semibold"]};
            ${r&&Xn[`${r}-semibold`]}
            color: ${Zn.hyperlink};
            text-decoration: none;

            svg {
                color: ${Zn["icon-primary"]};
                height: 1lh;
                width: 1em;
                margin-left: 0.4rem;
                vertical-align: middle;
            }

            :hover,
            :active,
            :visited,
            :focus {
                color: ${Zn["hyperlink-hover"]};

                svg {
                    color: ${Zn["icon-hover"]};
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
`,l((e=>{var{children:n}=e,t=h(e,["children"]);const i=t["data-testid"]||"card";return r(st,Object.assign({},t,{"data-testid":i,children:"string"==typeof n?r(tt.BodyBL,{children:n}):n}))}))`
    color: ${Zn.text};
    ${ct({textSize:"body-md"})}

    ${Kn.MaxWidth.sm} {
        display: none;
    }
`,l((n=>{var{id:t="modal-box",children:i,onClose:s,showCloseButton:o=!0}=n,a=h(n,["id","children","onClose","showCloseButton"]);return e(lt,Object.assign({"data-testid":t},a,{onClick:e=>{e.stopPropagation()},children:[o&&r(dt,{onClick:s,"data-testid":"close-button",focusHighlight:!1,focusOutline:"browser",children:r(g,{})}),i]}))}))`
    padding: 3.5rem 1.25rem 2.5rem;
`,l.div`
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    color: ${Zn.text};
    ${ct({textSize:"body-md"})}
`,l.div`
    display: inline;
    width: fit-content;
    cursor: pointer;
    position: relative;
`;const ut=e=>{switch(e){case"underline":return"text-decoration: underline 1px;";case"underline-dashed":return"text-decoration: underline dashed 1px;"}};l.span`
    color: ${Zn["text-primary"]};
    font-weight: 600;
    text-underline-position: under;

    ${({$defaultStyle:e})=>ut(e)}

    &:hover,
    &:focus-visible {
        color: ${Zn["text-hover"]};
        ${({$hoverStyle:e})=>ut(e)}
    }

    svg {
        height: 1lh; // align vertically
        width: 1em; // scale icon with font size
        vertical-align: top;
    }
`,l.span`
    ${e=>!e.$standalone&&"margin-left: 0.25rem;"}
`,l.div`
    padding-left: ${Gn["spacing-4"]};
    display: inline;
`,l.label`
    color: ${Zn["text-subtle"]};
    margin-bottom: ${Gn["spacing-8"]};
    display: inline-block;

    ${Xn["form-label"]}
    ${ct()}
    font-weight: ${Xn.Spec["weight-semibold"]};
`;const gt=l.p`
    ${Xn["body-sm-semibold"]}
    color: ${Zn["text-error"]};
    margin-top: ${Gn["spacing-8"]};
    margin-bottom: 0;
    outline: none;
`;l.span`
    ${Xn["form-description"]}
    color: ${Zn["text-subtler"]};
    display: block;
`;const ht=e=>r(gt,Object.assign({},e)),bt=l.div`
    clip-path: inset(50%);
    height: 1px;
    width: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
`,mt=l.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,yt=c`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,ft=l.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    top: 1px;
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    border-width: 2px;
    border-style: solid;
    border-radius: 50%;
    border-color: currentColor transparent transparent transparent;
    animation: ${yt} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,pt=l(ft)`
    animation-delay: -0.45s;
`,xt=l(ft)`
    animation-delay: -0.3s;
`,vt=l(ft)`
    animation-delay: -0.15s;
`,Ft={collections:{default:{Button:{"button-radius":Rn.sm,"button-default-colour-bg":pn["bg-primary"],"button-default-colour-bg-hover":pn["bg-primary-hover"],"button-default-colour-text":pn["text-inverse"],"button-secondary-colour-border":pn["border-primary"],"button-secondary-colour-text":pn["text-primary"],"button-light-colour-text":pn["text-primary"],"button-link-colour-text":pn["text-primary"]}},pa:{Button:{"button-radius":Rn.full,"button-default-colour-bg":pn["bg-primary"],"button-default-colour-bg-hover":pn["bg-primary-hover"],"button-default-colour-text":pn["text-inverse"],"button-secondary-colour-border":pn["border-primary"],"button-secondary-colour-text":pn["text-primary"],"button-light-colour-text":pn["text-primary"],"button-link-colour-text":pn["text-primary"]}}},defaultValue:"default"},wt=(e,r)=>n=>{var t,i;const s=n.theme,o=an(Ft,null==s?void 0:s.componentScheme);return $t((null===(i=null===(t=null==s?void 0:s.componentOverrides)||void 0===t?void 0:t[e])||void 0===i?void 0:i[r])||o[e][r],n)},$t=(e,r)=>{switch(typeof e){case"function":return e(r);case"number":return e+"px";case"string":return e}},Dt=wt("Button","button-radius"),Et=wt("Button","button-default-colour-bg"),Ct=wt("Button","button-default-colour-bg-hover"),Bt=wt("Button","button-default-colour-text"),At=wt("Button","button-secondary-colour-border"),zt=wt("Button","button-secondary-colour-text"),St=wt("Button","button-light-colour-text"),Mt=wt("Button","button-link-colour-text"),kt=l.button`
    padding: ${Gn["spacing-8"]} ${Gn["spacing-16"]};
    min-width: 4rem;
    border: ${Jn["width-010"]} ${Jn.solid} transparent;
    transition: all ${Un["duration-250"]} ${Un["ease-default"]};
    border-radius: ${Dt};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return d`
                    background-color: ${Zn.Primitive.white};
                    border-color: ${e.$buttonIsDanger?Zn["border-error-strong"]:At};

                    color: ${e.$buttonIsDanger?Zn["text-error"]:zt};

                    &:hover,
                    &:active {
                        background-color: ${Zn["bg-hover-neutral"]};
                    }
                `;case"light":return d`
                    background-color: ${Zn.bg};
                    border-color: ${Zn.border};

                    color: ${e.$buttonIsDanger?Zn["text-error"]:St};

                    &:hover,
                    &:active {
                        background-color: ${Zn["bg-hover-neutral"]};
                    }
                `;case"link":return d`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?Zn["text-error"]:Mt};
                    &:hover,
                    &:active {
                        background-color: ${Zn["bg-hover-neutral"]};
                    }
                `;case"disabled":return d`
                    background-color: ${Zn["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Zn["text-disabled"]};
                `;default:return d`
                    background-color: ${e.$buttonIsDanger?Zn["bg-error-strong"]:Et};};

                    ${Kn.MaxWidth.sm} {
                        width: 100%;
                    }

                    color: ${Bt}};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?Zn["bg-error-strong-hover"]:Ct}
                        };
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return d`
                    height: 2.5rem;
                    ${Xn["body-md-semibold"]}

                    ${Kn.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return d`
                    height: 4rem;
                    ${Xn["heading-md-semibold"]}

                    ${Kn.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return d`
                    height: 3rem;
                    ${Xn["heading-xs-semibold"]}

                    ${Kn.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,Ot=l((({color:n,className:t,size:i})=>e(mt,{className:t,$size:i,$color:n,"data-testid":"component-loading-spinner",children:[r(ft,{id:"inner1"}),r(pt,{id:"inner2"}),r(xt,{id:"inner3"}),r(vt,{id:"inner4"})]})))`
    margin-right: 0.5rem;
`,_t=(n,t)=>{const{children:i,disabled:s=!1,loading:o=!1,styleType:a="default",danger:l=!1}=n,d=h(n,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:s?"disabled":a,$buttonSizeStyle:"default",$buttonIsDanger:l};return e(kt,Object.assign({ref:t,"data-testid":d["data-testid"]||"button",disabled:s},c,d,{children:[o&&r(Ot,{}),r("span",{children:i})]}))};_t.displayName="Button.Default";const Yt=(n,t)=>{const{children:i,disabled:s=!1,loading:o=!1,styleType:a="default",danger:l=!1}=n,d=h(n,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:s?"disabled":a,$buttonSizeStyle:"small",$buttonIsDanger:l};return e(kt,Object.assign({ref:t,"data-testid":d["data-testid"]||"button",disabled:s},c,d,{children:[o&&r(Ot,{}),r("span",{children:i})]}))};Yt.displayName="Button.Small";const Tt=(n,t)=>{const{children:i,disabled:s=!1,loading:o=!1,styleType:a="default",danger:l=!1}=n,d=h(n,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:s?"disabled":a,$buttonSizeStyle:"large",$buttonIsDanger:l};return e(kt,Object.assign({ref:t,"data-testid":d["data-testid"]||"button",disabled:s},c,d,{children:[o&&r(Ot,{}),r("span",{children:i})]}))};Tt.displayName="Button.Large";const Lt={Default:t.forwardRef(_t),Small:t.forwardRef(Yt),Large:t.forwardRef(Tt)},jt=d`
    outline-offset: -1px;
    outline: ${Jn["width-020"]} ${Jn.solid} ${Zn["border-focus"]};
`,It=d`
    outline-color: ${Zn["border-focus"]};
`,Ht=d`
    outline-color: ${Zn["border-disabled"]};
`,Wt=d`
    outline-color: ${Zn["border-error-focus"]};
`,Rt=l.div`
    border: ${Jn["width-010"]} ${Jn.solid} ${Zn.border};
    border-radius: ${qn.sm};
    background: ${Zn.bg};

    :focus-within {
        ${jt}
    }
    ${e=>e.$focused&&jt}

    ${e=>e.$readOnly?d`
                border-color: transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${It}
                }
                ${e.$focused&&It}
            `:e.$disabled?d`
                background: ${Zn["bg-disabled"]};
                cursor: not-allowed;

                :focus-within {
                    ${Ht}
                }
                ${e.$focused&&Ht}
            `:e.$error?d`
                border-color: ${Zn["border-error"]};

                :focus-within {
                    ${Wt}
                }
                ${e.$focused&&Wt}
            `:void 0}
`;l(Rt)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 ${Gn["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`;const Pt=l.input`
    ${e=>"small"===e.$variant?Xn["body-md-regular"]:Xn["body-baseline-regular"]}
    color: ${Zn.text};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    :disabled {
        color: ${Zn["text-subtler"]};

        :hover {
            cursor: not-allowed;
        }
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${Zn["text-subtler"]};
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
`,Nt=l.button`
    background: transparent;
    border: none;
    outline: none;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: ${Jn["width-010"]} ${Jn.solid}
            ${Zn["border-focus"]};
        border-radius: ${qn.sm};
    }
`,Vt=l(Pt)`
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders

    ${e=>"no-border"!==e.$styleType&&d`
            padding-left: ${Gn["spacing-16"]};
            padding-right: ${e.$showClear?0:Gn["spacing-16"]};
        `}
`,Zt=l(Nt)`
    height: auto;
    padding: ${Gn["spacing-12"]} ${Gn["spacing-16"]};

    cursor: pointer;
    color: ${Zn.icon};

    ${e=>"no-border"===e.$styleType&&d`
            margin-right: -${Gn["spacing-12"]};
        `}
`,Xt=l(g)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`,Ut=l.div`
    display: flex;
    width: 100%;
`,Jt=l(Rt)`
    display: flex;
    align-items: center;
    width: 100%;
`,Gt=t.forwardRef(((t,o)=>{var{value:a,spacing:l,type:d,error:c,disabled:u,readOnly:g,onChange:b,onClear:m,allowClear:y=!1,className:f,styleType:p="bordered"}=t,x=h(t,["value","spacing","type","error","disabled","readOnly","onChange","onClear","allowClear","className","styleType"]);const v=((e,r)=>"tel"===e&&!!r)(d,l),F=i(null);s(o,(()=>F.current),[]);const w=function({ref:e,formatter:r}){return()=>{var n;const t=e.current;if(!t)return;const i=t.value,s=r(i),o=null!==(n=t.selectionEnd)&&void 0!==n?n:0,a=i.substring(0,o),l=r(a),d=a.length-l.length,c=Math.max(0,o-d);return{nextValue:s,updateCaretPosition:()=>{t.value=s,t.setSelectionRange(c,c)}}}}({ref:F,formatter:e=>v?j.transformWithSpaces(e,l):e}),$=e=>{b&&(v?E(e):b(e))},D=()=>{m&&m(),F&&F.current&&F.current.focus()},E=e=>{const r=w();if(!r)return;const{nextValue:n,updateCaretPosition:t}=r,i=n.replace(/\s/g,"");e.target.value=i,null==b||b(e),t()},C=a?(e=>e?v?j.transformWithSpaces(e,l):e:"")(a):a,B=y&&!u&&!g&&!!a,A=()=>e(n,{children:[r(Vt,Object.assign({"data-testid":"input",ref:F,disabled:u,value:C,onChange:$,type:d,readOnly:g,$showClear:B,$styleType:p},x)),B&&r(Zt,{onClick:D,type:"button",$styleType:p,children:r(Xt,{"aria-hidden":!0})})]});return r(n,{children:"no-border"===p?r(Ut,{className:f,children:A()}):r(Jt,{$disabled:u,$error:c,$readOnly:g,className:f,children:A()})})})),qt=l.div`
    display: flex;
    flex-direction: column;
`,Kt=l.div`
    display: flex;
    flex-direction: row;
    align-self: center;
    gap: ${Gn["spacing-8"]};
`,Qt=l(Gt)`
    margin-bottom: 0rem !important;

    input {
        text-align: center;

        ${Kn.MaxWidth.xs} {
            padding: 0 ${Gn["spacing-8"]};
        }
    }
`,ei=l(Lt.Small)`
    margin: ${Gn["spacing-32"]} 0;
`,ri=n=>{var{id:t,value:s=[],"data-testid":l,className:d,cooldownDuration:c,actionButtonProps:u,errorMessage:g,numOfInput:b,onChange:m,onCooldownStart:y,onCooldownEnd:f}=n,p=h(n,["id","value","data-testid","className","cooldownDuration","actionButtonProps","errorMessage","numOfInput","onChange","onCooldownStart","onCooldownEnd"]);const x=null!=u?u:{},{disabled:v,onClick:F,styleType:w="secondary"}=x,$=h(x,["disabled","onClick","styleType"]),D=i([]),E=i(m),[C,B]=o(new Array(b).fill("")),[A,z]=o(c),[S,M]=o(new Date),[k]=o((()=>L.generate())),O=!!g,_=`${k}-error`,Y=`${k}-timer`;a((()=>{var e;return null===(e=null==D?void 0:D.current[0])||void 0===e||e.focus(),document.addEventListener("paste",H),()=>document.removeEventListener("paste",H)}),[]),a((()=>{if(0!==c){y&&y();const e=P();return()=>e()}}),[S]),a((()=>{E.current=m}),[m]),a((()=>{s.length===b&&B(s)}),[s]);const T=e=>r=>{var n;const t=r.target.value.replace(/[^0-9]/g,"");if(W(t)){const r=[...C];r[e]=t.substring(t.length-1),null===(n=D.current[e+1])||void 0===n||n.focus(),B(r),m&&m(r)}},I=e=>r=>{var n,t,i;const{key:s,code:o}=r;if("Backspace"===s||"Backspace"===o){const r=[...C];""!==r[e]?r[e]="":0!==e&&(r[e-1]="",null===(n=D.current[e-1])||void 0===n||n.focus()),B(r),m&&m(r)}else"ArrowRight"===r.code?null===(t=D.current[e+1])||void 0===t||t.focus():"ArrowLeft"===r.code&&(null===(i=D.current[e-1])||void 0===i||i.focus())},H=e=>{if(!e.clipboardData)return;const r=e.clipboardData.getData("text"),n=r.split("");r&&W(r,b)?(B(n),E.current&&E.current(n)):e.preventDefault()},W=(e,r=1)=>!!e&&RegExp(`^[0-9]{${r}}$`).test(e),R=()=>{const e=Date.now(),r=1e3*c;return e<S.valueOf()+r},P=()=>{const e=setInterval((()=>{const r=Date.now(),n=1e3*c,t=Math.ceil((S.valueOf()+n-r)/1e3);z(t),t<=0&&(f&&f(),clearInterval(e))}),1e3);return()=>{clearInterval(e)}},N=(e,r,n)=>n?`${n}-${r}-${e+1}`:`${r}-${e+1}`,V=e=>`${e} second${1===e?"":"s"}`;return e(qt,{id:t,"data-testid":l,className:d,children:[r(Kt,{role:"group","aria-label":`${b}-digit OTP input field`,children:C.map(((e,n)=>r(Qt,Object.assign({id:N(n,"otp-input",t),"data-testid":N(n,"otp-input",l),"aria-label":`${j.formatOrdinal(n+1)} digit`,"aria-invalid":O,"aria-describedby":O?_:void 0,ref:e=>D.current[n]=e,type:"text",inputMode:"numeric",value:e,error:O,onChange:T(n),onKeyDown:I(n),autoComplete:"off"},p),n)))}),g&&r(ht,{id:_,children:g}),e(bt,{role:"timer",id:Y,children:[V(A)," remaining"]}),r(bt,{"aria-live":"polite",children:A>0?"":"Ready to resend OTP"}),r(ei,Object.assign({styleType:w,type:"button"},$,{onClick:e=>{B(new Array(b).fill("")),R()||(M(new Date),z(c)),F&&F(e)},disabled:v||R()},$.children?{children:$.children}:{children:A>0?`Resend OTP in ${V(A)}`:"Resend OTP","aria-label":A>0?`Resend OTP in ${V(c)}`:"Resend OTP","aria-describedby":Y}))]})};export{ri as OtpInput};
//# sourceMappingURL=index.js.map
