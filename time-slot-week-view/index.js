import{jsxs as e,jsx as r,Fragment as t}from"react/jsx-runtime";import n,{version as i,useMemo as a,useRef as o,useState as s,useEffect as l,useImperativeHandle as d}from"react";import c,{keyframes as u,css as g}from"styled-components";import{ChevronDownIcon as b}from"@lifesg/react-icons/chevron-down";import{ChevronLeftIcon as h}from"@lifesg/react-icons/chevron-left";import{ChevronRightIcon as m}from"@lifesg/react-icons/chevron-right";import{ExternalIcon as y}from"@lifesg/react-icons/external";function f(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(t[n[i]]=e[n[i]])}return t}"function"==typeof SuppressedError&&SuppressedError;var p="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function v(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var x={exports:{}};x.exports=function(){var e=1e3,r=6e4,t=36e5,n="millisecond",i="second",a="minute",o="hour",s="day",l="week",d="month",c="quarter",u="year",g="date",b="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,y={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var r=["th","st","nd","rd"],t=e%100;return"["+e+(r[(t-20)%10]||r[t]||r[0])+"]"}},f=function(e,r,t){var n=String(e);return!n||n.length>=r?e:""+Array(r+1-n.length).join(t)+e},p={s:f,z:function(e){var r=-e.utcOffset(),t=Math.abs(r),n=Math.floor(t/60),i=t%60;return(r<=0?"+":"-")+f(n,2,"0")+":"+f(i,2,"0")},m:function e(r,t){if(r.date()<t.date())return-e(t,r);var n=12*(t.year()-r.year())+(t.month()-r.month()),i=r.clone().add(n,d),a=t-i<0,o=r.clone().add(n+(a?-1:1),d);return+(-(n+(t-i)/(a?i-o:o-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:s,D:g,h:o,m:a,s:i,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",x={};x[v]=y;var F="$isDayjsObject",w=function(e){return e instanceof E||!(!e||!e[F])},D=function e(r,t,n){var i;if(!r)return v;if("string"==typeof r){var a=r.toLowerCase();x[a]&&(i=a),t&&(x[a]=t,i=a);var o=r.split("-");if(!i&&o.length>1)return e(o[0])}else{var s=r.name;x[s]=r,i=s}return!n&&i&&(v=i),i||!n&&v},$=function(e,r){if(w(e))return e.clone();var t="object"==typeof r?r:{};return t.date=e,t.args=arguments,new E(t)},C=p;C.l=D,C.i=w,C.w=function(e,r){return $(e,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var E=function(){function y(e){this.$L=D(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[F]=!0}var f=y.prototype;return f.parse=function(e){this.$d=function(e){var r=e.date,t=e.utc;if(null===r)return new Date(NaN);if(C.u(r))return new Date;if(r instanceof Date)return new Date(r);if("string"==typeof r&&!/Z$/i.test(r)){var n=r.match(h);if(n){var i=n[2]-1||0,a=(n[7]||"0").substring(0,3);return t?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)}}return new Date(r)}(e),this.init()},f.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},f.$utils=function(){return C},f.isValid=function(){return!(this.$d.toString()===b)},f.isSame=function(e,r){var t=$(e);return this.startOf(r)<=t&&t<=this.endOf(r)},f.isAfter=function(e,r){return $(e)<this.startOf(r)},f.isBefore=function(e,r){return this.endOf(r)<$(e)},f.$g=function(e,r,t){return C.u(e)?this[r]:this.set(t,e)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(e,r){var t=this,n=!!C.u(r)||r,c=C.p(e),b=function(e,r){var i=C.w(t.$u?Date.UTC(t.$y,r,e):new Date(t.$y,r,e),t);return n?i:i.endOf(s)},h=function(e,r){return C.w(t.toDate()[e].apply(t.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(r)),t)},m=this.$W,y=this.$M,f=this.$D,p="set"+(this.$u?"UTC":"");switch(c){case u:return n?b(1,0):b(31,11);case d:return n?b(1,y):b(0,y+1);case l:var v=this.$locale().weekStart||0,x=(m<v?m+7:m)-v;return b(n?f-x:f+(6-x),y);case s:case g:return h(p+"Hours",0);case o:return h(p+"Minutes",1);case a:return h(p+"Seconds",2);case i:return h(p+"Milliseconds",3);default:return this.clone()}},f.endOf=function(e){return this.startOf(e,!1)},f.$set=function(e,r){var t,l=C.p(e),c="set"+(this.$u?"UTC":""),b=(t={},t[s]=c+"Date",t[g]=c+"Date",t[d]=c+"Month",t[u]=c+"FullYear",t[o]=c+"Hours",t[a]=c+"Minutes",t[i]=c+"Seconds",t[n]=c+"Milliseconds",t)[l],h=l===s?this.$D+(r-this.$W):r;if(l===d||l===u){var m=this.clone().set(g,1);m.$d[b](h),m.init(),this.$d=m.set(g,Math.min(this.$D,m.daysInMonth())).$d}else b&&this.$d[b](h);return this.init(),this},f.set=function(e,r){return this.clone().$set(e,r)},f.get=function(e){return this[C.p(e)]()},f.add=function(n,c){var g,b=this;n=Number(n);var h=C.p(c),m=function(e){var r=$(b);return C.w(r.date(r.date()+Math.round(e*n)),b)};if(h===d)return this.set(d,this.$M+n);if(h===u)return this.set(u,this.$y+n);if(h===s)return m(1);if(h===l)return m(7);var y=(g={},g[a]=r,g[o]=t,g[i]=e,g)[h]||1,f=this.$d.getTime()+n*y;return C.w(f,this)},f.subtract=function(e,r){return this.add(-1*e,r)},f.format=function(e){var r=this,t=this.$locale();if(!this.isValid())return t.invalidDate||b;var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=C.z(this),a=this.$H,o=this.$m,s=this.$M,l=t.weekdays,d=t.months,c=t.meridiem,u=function(e,t,i,a){return e&&(e[t]||e(r,n))||i[t].slice(0,a)},g=function(e){return C.s(a%12||12,e,"0")},h=c||function(e,r,t){var n=e<12?"AM":"PM";return t?n.toLowerCase():n};return n.replace(m,(function(e,n){return n||function(e){switch(e){case"YY":return String(r.$y).slice(-2);case"YYYY":return C.s(r.$y,4,"0");case"M":return s+1;case"MM":return C.s(s+1,2,"0");case"MMM":return u(t.monthsShort,s,d,3);case"MMMM":return u(d,s);case"D":return r.$D;case"DD":return C.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return u(t.weekdaysMin,r.$W,l,2);case"ddd":return u(t.weekdaysShort,r.$W,l,3);case"dddd":return l[r.$W];case"H":return String(a);case"HH":return C.s(a,2,"0");case"h":return g(1);case"hh":return g(2);case"a":return h(a,o,!0);case"A":return h(a,o,!1);case"m":return String(o);case"mm":return C.s(o,2,"0");case"s":return String(r.$s);case"ss":return C.s(r.$s,2,"0");case"SSS":return C.s(r.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},f.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},f.diff=function(n,g,b){var h,m=this,y=C.p(g),f=$(n),p=(f.utcOffset()-this.utcOffset())*r,v=this-f,x=function(){return C.m(m,f)};switch(y){case u:h=x()/12;break;case d:h=x();break;case c:h=x()/3;break;case l:h=(v-p)/6048e5;break;case s:h=(v-p)/864e5;break;case o:h=v/t;break;case a:h=v/r;break;case i:h=v/e;break;default:h=v}return b?h:C.a(h)},f.daysInMonth=function(){return this.endOf(d).$D},f.$locale=function(){return x[this.$L]},f.locale=function(e,r){if(!e)return this.$L;var t=this.clone(),n=D(e,r,!0);return n&&(t.$L=n),t},f.clone=function(){return C.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},y}(),B=E.prototype;return $.prototype=B,[["$ms",n],["$s",i],["$m",a],["$H",o],["$W",s],["$M",d],["$y",u],["$D",g]].forEach((function(e){B[e[1]]=function(r){return this.$g(r,e[0],e[1])}})),$.extend=function(e,r){return e.$i||(e(r,E,$),e.$i=!0),$},$.locale=D,$.isDayjs=w,$.unix=function(e){return $(1e3*e)},$.en=x[v],$.Ls=x,$.p={},$}();var F=v(x.exports),w={exports:{}};w.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,t=/\d\d/,n=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,a={},o=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(r){this[e]=+r}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var r=e.match(/([+-]|\d\d)/g),t=60*r[1]+(+r[2]||0);return 0===t?0:"+"===r[0]?-t:t}(e)}],d=function(e){var r=a[e];return r&&(r.indexOf?r:r.s.concat(r.f))},c=function(e,r){var t,n=a.meridiem;if(n){for(var i=1;i<=24;i+=1)if(e.indexOf(n(i,0,r))>-1){t=i>12;break}}else t=e===(r?"pm":"PM");return t},u={A:[i,function(e){this.afternoon=c(e,!1)}],a:[i,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[t,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[t,s("day")],Do:[i,function(e){var r=a.ordinal,t=e.match(/\d+/);if(this.day=t[0],r)for(var n=1;n<=31;n+=1)r(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[t,s("month")],MMM:[i,function(e){var r=d("months"),t=(d("monthsShort")||r.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],MMMM:[i,function(e){var r=d("months").indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],Y:[/[+-]?\d+/,s("year")],YY:[t,function(e){this.year=o(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function g(t){var n,i;n=t,i=a&&a.formats;for(var o=(t=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(r,t,n){var a=n&&n.toUpperCase();return t||i[n]||e[n]||i[a].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,r,t){return r||t.slice(1)}))}))).match(r),s=o.length,l=0;l<s;l+=1){var d=o[l],c=u[d],g=c&&c[0],b=c&&c[1];o[l]=b?{regex:g,parser:b}:d.replace(/^\[|\]$/g,"")}return function(e){for(var r={},t=0,n=0;t<s;t+=1){var i=o[t];if("string"==typeof i)n+=i.length;else{var a=i.regex,l=i.parser,d=e.slice(n),c=a.exec(d)[0];l.call(r,c),e=e.replace(c,"")}}return function(e){var r=e.afternoon;if(void 0!==r){var t=e.hours;r?t<12&&(e.hours+=12):12===t&&(e.hours=0),delete e.afternoon}}(r),r}}return function(e,r,t){t.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(o=e.parseTwoDigitYear);var n=r.prototype,i=n.parse;n.parse=function(e){var r=e.date,n=e.utc,o=e.args;this.$u=n;var s=o[1];if("string"==typeof s){var l=!0===o[2],d=!0===o[3],c=l||d,u=o[2];d&&(u=o[2]),a=this.$locale(),!l&&u&&(a=t.Ls[u]),this.$d=function(e,r,t){try{if(["x","X"].indexOf(r)>-1)return new Date(("X"===r?1e3:1)*e);var n=g(r)(e),i=n.year,a=n.month,o=n.day,s=n.hours,l=n.minutes,d=n.seconds,c=n.milliseconds,u=n.zone,b=new Date,h=o||(i||a?1:b.getDate()),m=i||b.getFullYear(),y=0;i&&!a||(y=a>0?a-1:b.getMonth());var f=s||0,p=l||0,v=d||0,x=c||0;return u?new Date(Date.UTC(m,y,h,f,p,v,x+60*u.offset*1e3)):t?new Date(Date.UTC(m,y,h,f,p,v,x)):new Date(m,y,h,f,p,v,x)}catch(e){return new Date("")}}(r,s,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&r!=this.format(s)&&(this.$d=new Date("")),a={}}else if(s instanceof Array)for(var b=s.length,h=1;h<=b;h+=1){o[1]=s[h-1];var m=t.apply(this,o);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}h===b&&(this.$d=new Date(""))}else i.call(this,e)}}}();var D=v(w.exports),$={exports:{}};$.exports=function(e,r,t){r.prototype.isBetween=function(e,r,n,i){var a=t(e),o=t(r),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(a,n):!this.isBefore(a,n))&&(l?this.isBefore(o,n):!this.isAfter(o,n))||(s?this.isBefore(a,n):!this.isAfter(a,n))&&(l?this.isAfter(o,n):!this.isBefore(o,n))}};var C=v($.exports),E={exports:{}};E.exports=function(e,r){r.prototype.isSameOrAfter=function(e,r){return this.isSame(e,r)||this.isAfter(e,r)}};var B=v(E.exports),S={exports:{}};S.exports=function(e,r){r.prototype.isSameOrBefore=function(e,r){return this.isSame(e,r)||this.isBefore(e,r)}};var k,A,z,M=v(S.exports),O={exports:{}},Y=v(O.exports=(k={year:0,month:1,day:2,hour:3,minute:4,second:5},A={},function(e,r,t){var n,i=function(e,r,t){void 0===t&&(t={});var n=new Date(e),i=function(e,r){void 0===r&&(r={});var t=r.timeZoneName||"short",n=e+"|"+t,i=A[n];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:t}),A[n]=i),i}(r,t);return i.formatToParts(n)},a=function(e,r){for(var n=i(e,r),a=[],o=0;o<n.length;o+=1){var s=n[o],l=s.type,d=s.value,c=k[l];c>=0&&(a[c]=parseInt(d,10))}var u=a[3],g=24===u?0:u,b=a[0]+"-"+a[1]+"-"+a[2]+" "+g+":"+a[4]+":"+a[5]+":000",h=+e;return(t.utc(b).valueOf()-(h-=h%1e3))/6e4},o=r.prototype;o.tz=function(e,r){void 0===e&&(e=n);var i=this.utcOffset(),a=this.toDate(),o=a.toLocaleString("en-US",{timeZone:e}),s=Math.round((a-new Date(o))/1e3/60),l=t(o,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(a.getTimezoneOffset()/15)-s,!0);if(r){var d=l.utcOffset();l=l.add(i-d,"minute")}return l.$x.$timezone=e,l},o.offsetName=function(e){var r=this.$x.$timezone||t.tz.guess(),n=i(this.valueOf(),r,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=o.startOf;o.startOf=function(e,r){if(!this.$x||!this.$x.$timezone)return s.call(this,e,r);var n=t(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,e,r).tz(this.$x.$timezone,!0)},t.tz=function(e,r,i){var o=i&&r,s=i||r||n,l=a(+t(),s);if("string"!=typeof e)return t(e).tz(s);var d=function(e,r,t){var n=e-60*r*1e3,i=a(n,t);if(r===i)return[n,r];var o=a(n-=60*(i-r)*1e3,t);return i===o?[n,i]:[e-60*Math.min(i,o)*1e3,Math.max(i,o)]}(t.utc(e,o).valueOf(),l,s),c=d[0],u=d[1],g=t(c).utcOffset(u);return g.$x.$timezone=s,g},t.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},t.tz.setDefault=function(e){n=e}}));F.extend(C),F.extend(M),F.extend(B),F.extend(D),F.extend(Y),function(e){e.generateDays=e=>{const r=e.startOf("month"),t=F(r).startOf("week");return _(t).map((e=>L(e)))},e.generateDaysForCurrentWeek=e=>{const r=e.startOf("week");return L(r)},e.generateMonths=e=>{const r=[];for(let t=0;t<12;t++){const n=e.month(t);r.push(F(n))}return r},e.generateDecadeOfYears=e=>{const r=e.year(),t=10*Math.floor(r/10),n=e.year(t),i=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)i.push(n.add(e,"year"));return i},e.getStartEndDecade=e=>{const r=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:r,endDecade:+F(`${r+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const r=F(e,"HH:mm");return r.isValid()?r.format("h:mm a"):""},e.isWithinRange=(e,r,t,n="day")=>!r&&!t||(r&&t?e.isBetween(r,t,n,"[]"):r?e.isSameOrAfter(r,n):e.isSameOrBefore(t,n)),e.isPreviousMonthWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"month"),t,void 0,"month"),e.isPreviousYearWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"year"),t,void 0,"year"),e.isPreviousDecadeWithinRange=(r,t)=>{const{beginDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).subtract(1,"year"),t,void 0,"year")},e.isNextMonthWithinRange=(r,t)=>e.isWithinRange(r.add(1,"month"),void 0,t,"month"),e.isNextYearWithinRange=(r,t)=>e.isWithinRange(r.add(1,"year"),void 0,t,"year"),e.isNextDecadeWithinRange=(r,t)=>{const{endDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).add(1,"year"),void 0,t,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,r)=>({start:e.format("YYYY-MM-DD"),end:e.add(r-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(r,t,n,i)=>{const a=e.isWithinRange(r,n?F(n):void 0,i?F(i):void 0),o=t&&t.includes(r.format("YYYY-MM-DD"));return!a||!!o}}(z||(z={}));const _=e=>{const r=[e];for(let t=1;t<6;t++){const n=e.add(t,"week");r.push(n)}return r},L=e=>{const r=[];for(let t=0;t<7;t++){const n=e.add(t,"day");r.push(n)}return r},j=[1,3,5,7,8,10,12],T=[4,6,9,11];var H,W,R,I;!function(e){e.clampDay=(r,t,n)=>{const i=parseInt(r),a=parseInt(t),o=parseInt(n);return 0==i?"1":j.includes(a)?Math.min(i,31).toString():T.includes(a)?Math.min(i,30).toString():2===a?e.isLeapYear(o)?Math.min(i,29).toString():Math.min(i,28).toString():r},e.clampMonth=e=>{const r=parseInt(e);return 0==r?"1":r>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,r,t="HH:mm")=>{const n=F(e,t);return F(r,t).diff(n,"minute")},e.toDayjs=e=>e?F(e):F(),e.addMinutesToTime=(e,r,t="HH:mm")=>F(e,t).add(r,"minutes").format(t),e.isSame=(e,r,t="day")=>F(e).isSame(F(r),t)}(H||(H={})),function(e){e.isDateDisabled=(e,r)=>{const{disabledDates:t,minDate:n,maxDate:i}=r;return!!(e&&t&&t.length&&t.includes(e))||(!(!n||!F(e).isBefore(n,"day"))||!(!i||!F(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(F(e).isValid())return e}return""}}(W||(W={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(R||(R={})),function(e){e.transformWithSpaces=(e,r)=>{const t="(.{"+r+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(t,"g"),"$1 ").trim()},e.padValue=(e,r)=>{if("0"===e)return r?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,r)=>{const t=Math.floor(r/9);return e.length>=2*t||1===e.split(" ").length&&e.length>t},e.truncateOneLine=(e,r,t,n,i=8)=>{let a=0;r>t&&(a=Math.floor((r-t)/i));const o=n+a;if(o<e.length){const r=Math.floor(o/2);return e.substring(0,r)+" ... "+e.substring(e.length-r,e.length)}return e},e.truncateTwoLines=(e,r,t,n=1.2)=>{const i=Math.floor(2*r/(.6*t))*(2/n);if(e.length<=i)return e;const a=Math.floor(.6*i),o=Math.floor(.2*i);return`${e.substring(0,a)}...${e.substring(e.length-o)}`},e.getTextWidth=(r,t)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=t;return n.measureText(r).width},e.maskValue=(e,t)=>{if(!e)return e;const{maskRange:n,unmaskRange:i,maskChar:a="•",maskRegex:o,maskTransformer:s}=t;if(s)return s(e);if(o)return e.replace(o,a);if(n){const{startIndex:t,endIndex:i}=r(n[0],n[1]);return e.substring(0,t)+a.repeat(e.substring(t,i+1).length)+e.substring(i+1)}if(i){const{startIndex:t,endIndex:n}=r(i[0],i[1]);return a.repeat(e.substring(0,t).length)+e.substring(t,n+1)+a.repeat(e.substring(n+1).length)}return e};const r=(e,r)=>e<r?{startIndex:e,endIndex:r}:{startIndex:r,endIndex:e},t=new Intl.PluralRules("en",{type:"ordinal"}),n=new Map([["one","st"],["two","nd"],["few","rd"],["other","th"]]);e.formatOrdinal=e=>{const r=t.select(e);return`${e}${n.get(r)}`}}(I||(I={})),c.div`
    clip-path: inset(50%);
    height: 1px;
    width: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
`;const N=e=>{const r=i.split(".");return parseInt(r[0],10)>=19?e:e?"true":void 0},V=c.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,P=u`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,U=c.div`
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
    animation: ${P} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Z=c(U)`
    animation-delay: -0.45s;
`,X=c(U)`
    animation-delay: -0.3s;
`,K=c(U)`
    animation-delay: -0.15s;
`;var J=Array.isArray,G="object"==typeof p&&p&&p.Object===Object&&p,q="object"==typeof self&&self&&self.Object===Object&&self,Q=G||q||Function("return this")(),ee=Q.Symbol,re=ee,te=Object.prototype,ne=te.hasOwnProperty,ie=te.toString,ae=re?re.toStringTag:void 0;var oe=function(e){var r=ne.call(e,ae),t=e[ae];try{e[ae]=void 0;var n=!0}catch(e){}var i=ie.call(e);return n&&(r?e[ae]=t:delete e[ae]),i},se=Object.prototype.toString;var le=oe,de=function(e){return se.call(e)},ce=ee?ee.toStringTag:void 0;var ue=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":ce&&ce in Object(e)?le(e):de(e)};var ge=ue,be=function(e){return null!=e&&"object"==typeof e};var he=function(e){return"symbol"==typeof e||be(e)&&"[object Symbol]"==ge(e)},me=J,ye=he,fe=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,pe=/^\w*$/;var ve=function(e,r){if(me(e))return!1;var t=typeof e;return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=e&&!ye(e))||(pe.test(e)||!fe.test(e)||null!=r&&e in Object(r))};var xe=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},Fe=ue,we=xe;var De,$e=function(e){if(!we(e))return!1;var r=Fe(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},Ce=Q["__core-js_shared__"],Ee=(De=/[^.]+$/.exec(Ce&&Ce.keys&&Ce.keys.IE_PROTO||""))?"Symbol(src)_1."+De:"";var Be=function(e){return!!Ee&&Ee in e},Se=Function.prototype.toString;var ke=$e,Ae=Be,ze=xe,Me=function(e){if(null!=e){try{return Se.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Oe=/^\[object .+?Constructor\]$/,Ye=Function.prototype,_e=Object.prototype,Le=Ye.toString,je=_e.hasOwnProperty,Te=RegExp("^"+Le.call(je).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var He=function(e,r){return null==e?void 0:e[r]},We=function(e){return!(!ze(e)||Ae(e))&&(ke(e)?Te:Oe).test(Me(e))},Re=He;var Ie=function(e,r){var t=Re(e,r);return We(t)?t:void 0},Ne=Ie(Object,"create"),Ve=Ne;var Pe=function(){this.__data__=Ve?Ve(null):{},this.size=0};var Ue=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},Ze=Ne,Xe=Object.prototype.hasOwnProperty;var Ke=function(e){var r=this.__data__;if(Ze){var t=r[e];return"__lodash_hash_undefined__"===t?void 0:t}return Xe.call(r,e)?r[e]:void 0},Je=Ne,Ge=Object.prototype.hasOwnProperty;var qe=function(e){var r=this.__data__;return Je?void 0!==r[e]:Ge.call(r,e)},Qe=Ne;var er=function(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=Qe&&void 0===r?"__lodash_hash_undefined__":r,this},rr=Pe,tr=Ue,nr=Ke,ir=qe,ar=er;function or(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}or.prototype.clear=rr,or.prototype.delete=tr,or.prototype.get=nr,or.prototype.has=ir,or.prototype.set=ar;var sr=or;var lr=function(){this.__data__=[],this.size=0};var dr=function(e,r){return e===r||e!=e&&r!=r};var cr=function(e,r){for(var t=e.length;t--;)if(dr(e[t][0],r))return t;return-1},ur=cr,gr=Array.prototype.splice;var br=function(e){var r=this.__data__,t=ur(r,e);return!(t<0)&&(t==r.length-1?r.pop():gr.call(r,t,1),--this.size,!0)},hr=cr;var mr=function(e){var r=this.__data__,t=hr(r,e);return t<0?void 0:r[t][1]},yr=cr;var fr=function(e){return yr(this.__data__,e)>-1},pr=cr;var vr=function(e,r){var t=this.__data__,n=pr(t,e);return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this},xr=lr,Fr=br,wr=mr,Dr=fr,$r=vr;function Cr(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Cr.prototype.clear=xr,Cr.prototype.delete=Fr,Cr.prototype.get=wr,Cr.prototype.has=Dr,Cr.prototype.set=$r;var Er=Cr,Br=Ie(Q,"Map"),Sr=sr,kr=Er,Ar=Br;var zr=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var Mr=function(e,r){var t=e.__data__;return zr(r)?t["string"==typeof r?"string":"hash"]:t.map},Or=Mr;var Yr=function(e){var r=Or(this,e).delete(e);return this.size-=r?1:0,r},_r=Mr;var Lr=function(e){return _r(this,e).get(e)},jr=Mr;var Tr=function(e){return jr(this,e).has(e)},Hr=Mr;var Wr=function(e,r){var t=Hr(this,e),n=t.size;return t.set(e,r),this.size+=t.size==n?0:1,this},Rr=function(){this.size=0,this.__data__={hash:new Sr,map:new(Ar||kr),string:new Sr}},Ir=Yr,Nr=Lr,Vr=Tr,Pr=Wr;function Ur(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Ur.prototype.clear=Rr,Ur.prototype.delete=Ir,Ur.prototype.get=Nr,Ur.prototype.has=Vr,Ur.prototype.set=Pr;var Zr=Ur;function Xr(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var t=function(){var n=arguments,i=r?r.apply(this,n):n[0],a=t.cache;if(a.has(i))return a.get(i);var o=e.apply(this,n);return t.cache=a.set(i,o)||a,o};return t.cache=new(Xr.Cache||Zr),t}Xr.Cache=Zr;var Kr=Xr;var Jr=function(e){var r=Kr(e,(function(e){return 500===t.size&&t.clear(),e})),t=r.cache;return r},Gr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,qr=/\\(\\)?/g,Qr=Jr((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(Gr,(function(e,t,n,i){r.push(n?i.replace(qr,"$1"):t||e)})),r}));var et=function(e,r){for(var t=-1,n=null==e?0:e.length,i=Array(n);++t<n;)i[t]=r(e[t],t,e);return i},rt=J,tt=he,nt=ee?ee.prototype:void 0,it=nt?nt.toString:void 0;var at=function e(r){if("string"==typeof r)return r;if(rt(r))return et(r,e)+"";if(tt(r))return it?it.call(r):"";var t=r+"";return"0"==t&&1/r==-1/0?"-0":t},ot=at;var st=J,lt=ve,dt=Qr,ct=function(e){return null==e?"":ot(e)};var ut=he;var gt=function(e,r){return st(e)?e:lt(e,r)?[e]:dt(ct(e))},bt=function(e){if("string"==typeof e||ut(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r};var ht=function(e,r){for(var t=0,n=(r=gt(r,e)).length;null!=e&&t<n;)e=e[bt(r[t++])];return t&&t==n?e:void 0};var mt=v((function(e,r,t){var n=null==e?void 0:ht(e,r);return void 0===n?t:n}));const yt=(e,r,t)=>mt(t,r)||mt(e,r),ft=(e,r)=>{const t=r||e.defaultValue;return mt(e.collections,t)},pt={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},vt=e=>r=>{var t;const n=r.theme,i=ft(pt,null==n?void 0:n.borderScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.border)?`${yt(i,e,n.overrides.border)}px`:`${i[e]}px`},xt={"width-005":vt("width-005"),"width-010":vt("width-010"),"width-020":vt("width-020"),"width-040":vt("width-040"),solid:(Ft="solid",e=>{var r;const t=e.theme,n=ft(pt,null==t?void 0:t.borderScheme),i=(null===(r=null==t?void 0:t.overrides)||void 0===r?void 0:r.border)?yt(n,Ft,t.overrides.border):n[Ft];return"function"==typeof i?i(e):i})};var Ft;const wt={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Dt={"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFF8FC","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},$t={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Ct={"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Et={"brand-10":"#001A19","brand-20":"#002D2B","brand-30":"#00413D","brand-40":"#005954","brand-50":"#00756F","brand-60":"#03A098","brand-70":"#55BFBA","brand-80":"#92D6D2","brand-90":"#BFE7E5","brand-95":"#DDF2F1","brand-100":"#F4FBFA","primary-10":"#09191D","primary-20":"#102B34","primary-30":"#173D49","primary-40":"#205666","primary-50":"#2A7086","primary-60":"#5D97A9","primary-70":"#8CB6C2","primary-80":"#B2CED6","primary-90":"#D1E2E7","primary-95":"#E8F0F3","primary-100":"#F7FAFB","secondary-10":"#001731","secondary-20":"#002752","secondary-30":"#003874","secondary-40":"#004D9F","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},Bt={"brand-10":"#881317","brand-20":"#B5191E","brand-30":"#B5040A","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},St={"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},kt={"brand-10":"#170F39","brand-20":"#281C62","brand-30":"#38268B","brand-40":"#4D34BF","brand-50":"#5735DF","brand-60":"#9986F9","brand-70":"#B2A5F8","brand-80":"#CDC2FA","brand-90":"#E2DCFC","brand-95":"#EFEDFE","brand-100":"#FAF8FD","primary-10":"#170F39","primary-20":"#281C62","primary-30":"#38268B","primary-40":"#4D34BF","primary-50":"#5735DF","primary-60":"#9986F9","primary-70":"#B2A5F8","primary-80":"#CDC2FA","primary-90":"#E2DCFC","primary-95":"#EFEDFE","primary-100":"#FAF8FD","secondary-10":"#251204","secondary-20":"#401F08","secondary-30":"#5B2C0B","secondary-40":"#7E3D0F","secondary-50":"#B04900","secondary-60":"#E26E1C","secondary-70":"#FF9445","secondary-80":"#FFBB8E","secondary-90":"#FFD9BF","secondary-95":"#FFECDF","secondary-100":"#FFF8F3","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#031B15","success-20":"#082D24","success-30":"#094134","success-40":"#0D5947","success-50":"#10755E","success-60":"#16A181","success-70":"#1EC59D","success-80":"#6FDDC2","success-90":"#AFECDE","success-95":"#D5F5ED","success-100":"#F1FCF9","warning-10":"#1F1500","warning-20":"#362500","warning-30":"#4D3501","warning-40":"#6A4801","warning-50":"#8B6001","warning-60":"#BF8301","warning-70":"#EAA102","warning-80":"#FFBF34","warning-90":"#FFDC8F","warning-95":"#FFEDC7","warning-100":"#FFF8EA","error-10":"#270F10","error-20":"#441B1B","error-30":"#612627","error-40":"#853535","error-50":"#AF4546","error-60":"#EC6162","error-70":"#F29696","error-80":"#F7BBBC","error-90":"#FAD8D8","error-95":"#FCEAEA","error-100":"#FEF7F7","info-10":"#0F1627","info-20":"#1B2745","info-30":"#273763","info-40":"#354D88","info-50":"#4665B3","info-60":"#618AF6","info-70":"#8DADFF","info-80":"#B4C9FF","info-90":"#D3DFFF","info-95":"#E9EFFF","info-100":"#F5F8FF",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},At={"brand-10":"#0E113C","brand-20":"#191E67","brand-30":"#232A92","brand-40":"#233FC2","brand-50":"#135CEA","brand-60":"#378FFB","brand-70":"#71B3FD","brand-80":"#9DCFFE","brand-90":"#C1E5FF","brand-95":"#DCF1FF","brand-100":"#F3FAFF","primary-10":"#0E113C","primary-20":"#191E67","primary-30":"#232A92","primary-40":"#233FC2","primary-50":"#135CEA","primary-60":"#378FFB","primary-70":"#71B3FD","primary-80":"#9DCFFE","primary-90":"#C1E5FF","primary-95":"#DCF1FF","primary-100":"#F3FAFF","secondary-10":"#34001F","secondary-20":"#540033","secondary-30":"#730045","secondary-40":"#9D0054","secondary-50":"#C61C64","secondary-60":"#DE6792","secondary-70":"#EB96B6","secondary-80":"#F5BAD2","secondary-90":"#FCD5E3","secondary-95":"#FDEBF1","secondary-100":"#FDF6F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#06547B","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},zt={collections:{lifesg:$t,bookingsg:wt,rbs:St,mylegacy:Ct,ccube:Dt,oneservice:Et,pa:Bt,a11yplayground:kt,supportgowhere:At},defaultValue:"lifesg"},Mt={collections:{lifesg:$t,bookingsg:wt,rbs:St,mylegacy:Ct,ccube:Dt,oneservice:Et,pa:Bt,a11yplayground:kt,supportgowhere:At},defaultValue:"lifesg"},Ot=e=>r=>{var t;const n=r.theme,i="dark"===(null==n?void 0:n.colourMode),a=ft(i?Mt:zt,null==n?void 0:n.colourScheme),o=i?"primitiveColourDark":"primitiveColour",s=null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t[o];return s?yt(a,e,s):a[e]},Yt={"brand-10":Ot("brand-10"),"brand-20":Ot("brand-20"),"brand-30":Ot("brand-30"),"brand-40":Ot("brand-40"),"brand-50":Ot("brand-50"),"brand-60":Ot("brand-60"),"brand-70":Ot("brand-70"),"brand-80":Ot("brand-80"),"brand-90":Ot("brand-90"),"brand-95":Ot("brand-95"),"brand-100":Ot("brand-100"),"primary-10":Ot("primary-10"),"primary-20":Ot("primary-20"),"primary-30":Ot("primary-30"),"primary-40":Ot("primary-40"),"primary-50":Ot("primary-50"),"primary-60":Ot("primary-60"),"primary-70":Ot("primary-70"),"primary-80":Ot("primary-80"),"primary-90":Ot("primary-90"),"primary-95":Ot("primary-95"),"primary-100":Ot("primary-100"),"secondary-10":Ot("secondary-10"),"secondary-20":Ot("secondary-20"),"secondary-30":Ot("secondary-30"),"secondary-40":Ot("secondary-40"),"secondary-50":Ot("secondary-50"),"secondary-60":Ot("secondary-60"),"secondary-70":Ot("secondary-70"),"secondary-80":Ot("secondary-80"),"secondary-90":Ot("secondary-90"),"secondary-95":Ot("secondary-95"),"secondary-100":Ot("secondary-100"),"neutral-10":Ot("neutral-10"),"neutral-20":Ot("neutral-20"),"neutral-30":Ot("neutral-30"),"neutral-40":Ot("neutral-40"),"neutral-50":Ot("neutral-50"),"neutral-60":Ot("neutral-60"),"neutral-70":Ot("neutral-70"),"neutral-80":Ot("neutral-80"),"neutral-90":Ot("neutral-90"),"neutral-95":Ot("neutral-95"),"neutral-100":Ot("neutral-100"),"success-10":Ot("success-10"),"success-20":Ot("success-20"),"success-30":Ot("success-30"),"success-40":Ot("success-40"),"success-50":Ot("success-50"),"success-60":Ot("success-60"),"success-70":Ot("success-70"),"success-80":Ot("success-80"),"success-90":Ot("success-90"),"success-95":Ot("success-95"),"success-100":Ot("success-100"),"warning-10":Ot("warning-10"),"warning-20":Ot("warning-20"),"warning-30":Ot("warning-30"),"warning-40":Ot("warning-40"),"warning-50":Ot("warning-50"),"warning-60":Ot("warning-60"),"warning-70":Ot("warning-70"),"warning-80":Ot("warning-80"),"warning-90":Ot("warning-90"),"warning-95":Ot("warning-95"),"warning-100":Ot("warning-100"),"error-10":Ot("error-10"),"error-20":Ot("error-20"),"error-30":Ot("error-30"),"error-40":Ot("error-40"),"error-50":Ot("error-50"),"error-60":Ot("error-60"),"error-70":Ot("error-70"),"error-80":Ot("error-80"),"error-90":Ot("error-90"),"error-95":Ot("error-95"),"error-100":Ot("error-100"),"info-10":Ot("info-10"),"info-20":Ot("info-20"),"info-30":Ot("info-30"),"info-40":Ot("info-40"),"info-50":Ot("info-50"),"info-60":Ot("info-60"),"info-70":Ot("info-70"),"info-80":Ot("info-80"),"info-90":Ot("info-90"),"info-95":Ot("info-95"),"info-100":Ot("info-100"),white:Ot("white"),black:Ot("black"),"primary-inverse":Ot("primary-inverse")},_t={text:Ot("neutral-20"),"text-subtle":Ot("neutral-30"),"text-subtler":Ot("neutral-50"),"text-subtlest":Ot("neutral-60"),"text-primary":Ot("primary-50"),"text-hover":Ot("primary-40"),"text-selected":Ot("primary-50"),"text-selected-hover":Ot("primary-40"),"text-disabled":Ot("neutral-50"),"text-disabled-subtle":Ot("neutral-60"),"text-disabled-subtlest":Ot("neutral-80"),"text-selected-disabled":Ot("neutral-20"),"text-success":Ot("success-40"),"text-warning":Ot("warning-40"),"text-error":Ot("error-40"),"text-info":Ot("info-40"),"text-inverse":Ot("white"),icon:Ot("neutral-50"),"icon-subtle":Ot("neutral-60"),"icon-strongest":Ot("neutral-20"),"icon-primary":Ot("primary-50"),"icon-primary-subtle":Ot("primary-60"),"icon-primary-subtlest":Ot("primary-70"),"icon-hover":Ot("primary-40"),"icon-selected":Ot("primary-50"),"icon-selected-hover":Ot("primary-40"),"icon-disabled":Ot("neutral-50"),"icon-disabled-subtle":Ot("neutral-60"),"icon-selected-disabled":Ot("neutral-60"),"icon-success":Ot("success-50"),"icon-warning":Ot("warning-60"),"icon-error":Ot("error-50"),"icon-error-strong":Ot("error-40"),"icon-info":Ot("info-50"),"icon-inverse":Ot("white"),"icon-primary-inverse":Ot("primary-inverse"),border:Ot("neutral-90"),"border-strong":Ot("neutral-70"),"border-stronger":Ot("neutral-50"),"border-primary":Ot("primary-50"),"border-primary-subtle":Ot("primary-60"),"border-hover":Ot("primary-90"),"border-hover-strong":Ot("primary-60"),"border-selected":Ot("primary-50"),"border-selected-subtle":Ot("primary-70"),"border-selected-subtlest":Ot("primary-90"),"border-selected-hover":Ot("primary-40"),"border-focus":Ot("primary-60"),"border-focus-strong":Ot("primary-50"),"border-disabled":Ot("neutral-90"),"border-selected-disabled":Ot("neutral-70"),"border-success":Ot("success-60"),"border-warning":Ot("warning-60"),"border-error":Ot("error-60"),"border-error-focus":Ot("error-60"),"border-error-focus-strong":Ot("error-40"),"border-error-strong":Ot("error-40"),"border-info":Ot("info-60"),bg:Ot("white"),"bg-strong":Ot("neutral-100"),"bg-stronger":Ot("neutral-95"),"bg-strongest":Ot("neutral-90"),"bg-hover":Ot("primary-95"),"bg-hover-strong":Ot("primary-90"),"bg-hover-subtle":Ot("primary-100"),"bg-hover-neutral":Ot("neutral-100"),"bg-hover-neutral-strong":Ot("neutral-90"),"bg-selected":Ot("primary-95"),"bg-selected-hover":Ot("primary-90"),"bg-selected-strong":Ot("primary-90"),"bg-selected-stronger":Ot("primary-70"),"bg-selected-strongest":Ot("primary-50"),"bg-selected-strongest-hover":Ot("primary-40"),"bg-disabled":Ot("neutral-95"),"bg-selected-disabled":Ot("neutral-95"),"bg-selected-stronger-disabled":Ot("neutral-70"),"bg-success":Ot("success-100"),"bg-success-hover":Ot("success-95"),"bg-success-strong":Ot("success-50"),"bg-success-strong-hover":Ot("success-40"),"bg-warning":Ot("warning-100"),"bg-warning-hover":Ot("warning-95"),"bg-warning-strong":Ot("warning-50"),"bg-warning-strong-hover":Ot("warning-40"),"bg-info":Ot("info-100"),"bg-info-hover":Ot("info-95"),"bg-info-strong":Ot("info-50"),"bg-info-strong-hover":Ot("info-40"),"bg-error":Ot("error-100"),"bg-error-hover":Ot("error-95"),"bg-error-strong":Ot("error-50"),"bg-error-strong-hover":Ot("error-40"),"bg-inverse":Ot("neutral-20"),"bg-inverse-subtle":Ot("neutral-30"),"bg-inverse-subtler":Ot("neutral-50"),"bg-inverse-subtlest":Ot("neutral-60"),"bg-inverse-hover":Ot("neutral-40"),"bg-primary":Ot("primary-50"),"bg-primary-subtle":Ot("primary-60"),"bg-primary-subtler":Ot("primary-95"),"bg-primary-subtlest":Ot("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":Ot("primary-40"),"bg-primary-subtlest-hover":Ot("primary-90"),"bg-primary-subtlest-selected":Ot("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:Ot("primary-50"),"hyperlink-hover":Ot("primary-40"),"hyperlink-visited":Ot("primary-40"),"hyperlink-inverse":Ot("primary-inverse"),"focus-ring":Ot("primary-50"),"focus-ring-inverse":Ot("white")},Lt={text:Ot("neutral-100"),"text-subtle":Ot("neutral-80"),"text-subtler":Ot("neutral-60"),"text-subtlest":Ot("neutral-50"),"text-primary":Ot("primary-60"),"text-hover":Ot("primary-70"),"text-selected":Ot("primary-60"),"text-selected-hover":Ot("primary-70"),"text-disabled":Ot("neutral-60"),"text-disabled-subtle":Ot("neutral-50"),"text-disabled-subtlest":Ot("neutral-30"),"text-selected-disabled":Ot("neutral-90"),"text-success":Ot("success-70"),"text-warning":Ot("warning-70"),"text-error":Ot("error-70"),"text-info":Ot("info-70"),"text-inverse":Ot("black"),icon:Ot("neutral-60"),"icon-subtle":Ot("neutral-50"),"icon-strongest":Ot("neutral-90"),"icon-primary":Ot("primary-60"),"icon-primary-subtle":Ot("primary-50"),"icon-primary-subtlest":Ot("primary-40"),"icon-hover":Ot("primary-70"),"icon-selected":Ot("primary-60"),"icon-selected-hover":Ot("primary-70"),"icon-disabled":Ot("neutral-60"),"icon-disabled-subtle":Ot("neutral-50"),"icon-selected-disabled":Ot("neutral-50"),"icon-success":Ot("success-60"),"icon-warning":Ot("warning-50"),"icon-error":Ot("error-60"),"icon-error-strong":Ot("error-70"),"icon-info":Ot("info-60"),"icon-inverse":Ot("black"),"icon-primary-inverse":Ot("primary-inverse"),border:Ot("neutral-20"),"border-strong":Ot("neutral-40"),"border-stronger":Ot("neutral-60"),"border-primary":Ot("primary-60"),"border-primary-subtle":Ot("primary-50"),"border-hover":Ot("primary-20"),"border-hover-strong":Ot("primary-50"),"border-selected":Ot("primary-60"),"border-selected-subtle":Ot("primary-40"),"border-selected-subtlest":Ot("primary-20"),"border-selected-hover":Ot("primary-70"),"border-focus":Ot("primary-50"),"border-focus-strong":Ot("primary-60"),"border-disabled":Ot("neutral-20"),"border-selected-disabled":Ot("neutral-40"),"border-success":Ot("success-50"),"border-warning":Ot("warning-50"),"border-error":Ot("error-50"),"border-error-focus":Ot("error-50"),"border-error-focus-strong":Ot("error-70"),"border-error-strong":Ot("error-70"),"border-info":Ot("info-50"),bg:Ot("black"),"bg-strong":Ot("neutral-10"),"bg-stronger":Ot("neutral-20"),"bg-strongest":Ot("neutral-20"),"bg-hover":Ot("primary-20"),"bg-hover-strong":Ot("primary-20"),"bg-hover-subtle":Ot("primary-10"),"bg-hover-neutral":Ot("neutral-10"),"bg-hover-neutral-strong":Ot("neutral-20"),"bg-selected":Ot("primary-20"),"bg-selected-hover":Ot("primary-20"),"bg-selected-strong":Ot("primary-20"),"bg-selected-stronger":Ot("primary-40"),"bg-selected-strongest":Ot("primary-60"),"bg-selected-strongest-hover":Ot("primary-70"),"bg-disabled":Ot("neutral-20"),"bg-selected-disabled":Ot("neutral-20"),"bg-selected-stronger-disabled":Ot("neutral-40"),"bg-success":Ot("success-10"),"bg-success-hover":Ot("success-20"),"bg-success-strong":Ot("success-60"),"bg-success-strong-hover":Ot("success-70"),"bg-warning":Ot("warning-10"),"bg-warning-hover":Ot("warning-20"),"bg-warning-strong":Ot("warning-60"),"bg-warning-strong-hover":Ot("warning-70"),"bg-info":Ot("info-10"),"bg-info-hover":Ot("info-20"),"bg-info-strong":Ot("info-60"),"bg-info-strong-hover":Ot("info-70"),"bg-error":Ot("error-10"),"bg-error-hover":Ot("error-20"),"bg-error-strong":Ot("error-60"),"bg-error-strong-hover":Ot("error-70"),"bg-inverse":Ot("neutral-90"),"bg-inverse-subtle":Ot("neutral-80"),"bg-inverse-subtler":Ot("neutral-60"),"bg-inverse-subtlest":Ot("neutral-50"),"bg-inverse-hover":Ot("neutral-70"),"bg-primary":Ot("primary-60"),"bg-primary-subtle":Ot("primary-50"),"bg-primary-subtler":Ot("primary-20"),"bg-primary-subtlest":Ot("primary-10"),"bg-available":"#185339","bg-primary-hover":Ot("primary-70"),"bg-primary-subtlest-hover":Ot("primary-20"),"bg-primary-subtlest-selected":Ot("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:Ot("primary-60"),"hyperlink-hover":Ot("primary-70"),"hyperlink-visited":Ot("primary-70"),"hyperlink-inverse":Ot("primary-inverse"),"focus-ring":Ot("primary-60"),"focus-ring-inverse":Ot("black")},jt={text:Ot("neutral-30"),"text-subtle":Ot("neutral-40"),"text-subtler":Ot("neutral-50"),"text-subtlest":Ot("neutral-70"),"text-primary":Ot("neutral-10"),"text-hover":Ot("neutral-70"),"text-selected":Ot("neutral-20"),"text-selected-hover":Ot("neutral-10"),"text-disabled":Ot("neutral-50"),"text-disabled-subtle":Ot("neutral-60"),"text-disabled-subtlest":Ot("neutral-80"),"text-selected-disabled":Ot("neutral-40"),"text-success":Ot("success-40"),"text-warning":Ot("warning-40"),"text-error":Ot("brand-30"),"text-info":Ot("neutral-40"),"text-inverse":Ot("neutral-100"),icon:Ot("neutral-40"),"icon-subtle":Ot("neutral-50"),"icon-strongest":Ot("neutral-10"),"icon-primary":Ot("neutral-10"),"icon-primary-subtle":Ot("neutral-30"),"icon-primary-subtlest":Ot("neutral-60"),"icon-hover":Ot("neutral-70"),"icon-selected":Ot("brand-20"),"icon-selected-hover":Ot("brand-10"),"icon-disabled":Ot("neutral-50"),"icon-disabled-subtle":Ot("neutral-60"),"icon-selected-disabled":Ot("neutral-40"),"icon-success":Ot("success-40"),"icon-warning":Ot("warning-60"),"icon-error":Ot("brand-30"),"icon-error-strong":Ot("brand-10"),"icon-info":Ot("neutral-40"),"icon-inverse":Ot("neutral-100"),"icon-primary-inverse":"#F9B371",border:Ot("neutral-90"),"border-strong":Ot("neutral-30"),"border-stronger":Ot("neutral-20"),"border-primary":Ot("neutral-40"),"border-primary-subtle":Ot("neutral-60"),"border-hover":Ot("neutral-80"),"border-hover-strong":Ot("neutral-10"),"border-selected":Ot("brand-20"),"border-selected-subtle":Ot("neutral-40"),"border-selected-subtlest":Ot("neutral-70"),"border-selected-hover":Ot("neutral-10"),"border-focus":Ot("neutral-20"),"border-focus-strong":Ot("neutral-10"),"border-disabled":Ot("neutral-90"),"border-selected-disabled":Ot("neutral-80"),"border-success":Ot("success-40"),"border-warning":Ot("warning-60"),"border-error":Ot("brand-30"),"border-error-focus":Ot("brand-20"),"border-error-focus-strong":Ot("brand-10"),"border-error-strong":Ot("brand-20"),"border-info":Ot("neutral-40"),bg:Ot("neutral-100"),"bg-strong":Ot("neutral-95"),"bg-stronger":Ot("neutral-90"),"bg-strongest":Ot("neutral-80"),"bg-hover":Ot("brand-90"),"bg-hover-strong":Ot("brand-80"),"bg-hover-subtle":Ot("neutral-90"),"bg-hover-neutral":Ot("neutral-90"),"bg-hover-neutral-strong":Ot("neutral-90"),"bg-selected":Ot("brand-100"),"bg-selected-hover":Ot("brand-30"),"bg-selected-strong":Ot("brand-50"),"bg-selected-stronger":Ot("brand-40"),"bg-selected-strongest":Ot("brand-20"),"bg-selected-strongest-hover":Ot("brand-10"),"bg-disabled":Ot("neutral-90"),"bg-selected-disabled":Ot("neutral-90"),"bg-selected-stronger-disabled":Ot("neutral-80"),"bg-success":Ot("success-100"),"bg-success-hover":Ot("success-95"),"bg-success-strong":Ot("success-50"),"bg-success-strong-hover":Ot("success-40"),"bg-warning":Ot("warning-100"),"bg-warning-hover":Ot("warning-95"),"bg-warning-strong":Ot("warning-50"),"bg-warning-strong-hover":Ot("warning-40"),"bg-info":Ot("neutral-95"),"bg-info-hover":Ot("info-95"),"bg-info-strong":Ot("info-50"),"bg-info-strong-hover":Ot("info-40"),"bg-error":Ot("brand-100"),"bg-error-hover":Ot("error-95"),"bg-error-strong":Ot("error-50"),"bg-error-strong-hover":Ot("error-40"),"bg-inverse":Ot("neutral-40"),"bg-inverse-subtle":Ot("neutral-60"),"bg-inverse-subtler":Ot("neutral-70"),"bg-inverse-subtlest":Ot("neutral-80"),"bg-inverse-hover":Ot("neutral-30"),"bg-primary":Ot("brand-20"),"bg-primary-subtle":Ot("brand-60"),"bg-primary-subtler":Ot("brand-80"),"bg-primary-subtlest":Ot("brand-100"),"bg-available":Ot("success-60"),"bg-primary-hover":Ot("brand-10"),"bg-primary-subtlest-hover":Ot("brand-80"),"bg-primary-subtlest-selected":Ot("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:Ot("neutral-10"),"hyperlink-hover":Ot("neutral-40"),"hyperlink-visited":Ot("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":Ot("primary-50"),"focus-ring-inverse":Ot("white")},Tt={text:Ot("neutral-20"),"text-subtle":Ot("neutral-30"),"text-subtler":Ot("neutral-50"),"text-subtlest":Ot("neutral-60"),"text-primary":Ot("primary-50"),"text-hover":Ot("primary-40"),"text-selected":Ot("primary-50"),"text-selected-hover":Ot("primary-40"),"text-disabled":Ot("neutral-50"),"text-disabled-subtle":Ot("neutral-60"),"text-disabled-subtlest":Ot("neutral-80"),"text-selected-disabled":Ot("neutral-20"),"text-success":Ot("success-40"),"text-warning":Ot("warning-40"),"text-error":Ot("error-40"),"text-info":Ot("info-40"),"text-inverse":Ot("white"),icon:Ot("neutral-50"),"icon-subtle":Ot("neutral-60"),"icon-strongest":Ot("neutral-20"),"icon-primary":Ot("primary-50"),"icon-primary-subtle":Ot("primary-60"),"icon-primary-subtlest":Ot("primary-70"),"icon-hover":Ot("primary-40"),"icon-selected":Ot("primary-50"),"icon-selected-hover":Ot("primary-40"),"icon-disabled":Ot("neutral-50"),"icon-disabled-subtle":Ot("neutral-60"),"icon-selected-disabled":Ot("neutral-60"),"icon-success":Ot("success-50"),"icon-warning":Ot("warning-60"),"icon-error":Ot("error-50"),"icon-error-strong":Ot("error-40"),"icon-info":Ot("info-50"),"icon-inverse":Ot("white"),"icon-primary-inverse":Ot("primary-inverse"),border:Ot("neutral-90"),"border-strong":Ot("neutral-70"),"border-stronger":Ot("neutral-50"),"border-primary":Ot("primary-50"),"border-primary-subtle":Ot("primary-60"),"border-hover":Ot("primary-90"),"border-hover-strong":Ot("primary-60"),"border-selected":Ot("primary-50"),"border-selected-subtle":Ot("primary-70"),"border-selected-subtlest":Ot("primary-90"),"border-selected-hover":Ot("primary-40"),"border-focus":Ot("primary-60"),"border-focus-strong":Ot("primary-50"),"border-disabled":Ot("neutral-90"),"border-selected-disabled":Ot("neutral-70"),"border-success":Ot("success-60"),"border-warning":Ot("warning-60"),"border-error":Ot("error-60"),"border-error-focus":Ot("error-60"),"border-error-focus-strong":Ot("error-40"),"border-error-strong":Ot("error-40"),"border-info":Ot("info-60"),bg:Ot("white"),"bg-strong":Ot("neutral-100"),"bg-stronger":Ot("neutral-95"),"bg-strongest":Ot("neutral-90"),"bg-hover":Ot("primary-95"),"bg-hover-strong":Ot("primary-90"),"bg-hover-subtle":Ot("primary-100"),"bg-hover-neutral":Ot("neutral-100"),"bg-hover-neutral-strong":Ot("neutral-90"),"bg-selected":Ot("primary-95"),"bg-selected-hover":Ot("primary-90"),"bg-selected-strong":Ot("primary-90"),"bg-selected-stronger":Ot("primary-70"),"bg-selected-strongest":Ot("primary-50"),"bg-selected-strongest-hover":Ot("primary-40"),"bg-disabled":Ot("neutral-95"),"bg-selected-disabled":Ot("neutral-95"),"bg-selected-stronger-disabled":Ot("neutral-70"),"bg-success":Ot("success-100"),"bg-success-hover":Ot("success-95"),"bg-success-strong":Ot("success-50"),"bg-success-strong-hover":Ot("success-40"),"bg-warning":Ot("warning-100"),"bg-warning-hover":Ot("warning-95"),"bg-warning-strong":Ot("warning-50"),"bg-warning-strong-hover":Ot("warning-40"),"bg-info":Ot("info-100"),"bg-info-hover":Ot("info-95"),"bg-info-strong":Ot("info-50"),"bg-info-strong-hover":Ot("info-40"),"bg-error":Ot("error-100"),"bg-error-hover":Ot("error-95"),"bg-error-strong":Ot("error-50"),"bg-error-strong-hover":Ot("error-40"),"bg-inverse":Ot("neutral-20"),"bg-inverse-subtle":Ot("neutral-30"),"bg-inverse-subtler":Ot("neutral-50"),"bg-inverse-subtlest":Ot("neutral-60"),"bg-inverse-hover":Ot("neutral-40"),"bg-primary":Ot("primary-50"),"bg-primary-subtle":Ot("primary-60"),"bg-primary-subtler":Ot("primary-95"),"bg-primary-subtlest":Ot("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":Ot("primary-40"),"bg-primary-subtlest-hover":Ot("primary-90"),"bg-primary-subtlest-selected":Ot("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:Ot("primary-50"),"hyperlink-hover":Ot("primary-40"),"hyperlink-visited":Ot("primary-40"),"hyperlink-inverse":Ot("primary-inverse"),"focus-ring":Ot("primary-50"),"focus-ring-inverse":Ot("white")},Ht={text:Ot("neutral-100"),"text-subtle":Ot("neutral-80"),"text-subtler":Ot("neutral-60"),"text-subtlest":Ot("neutral-50"),"text-primary":Ot("primary-60"),"text-hover":Ot("primary-70"),"text-selected":Ot("primary-60"),"text-selected-hover":Ot("primary-70"),"text-disabled":Ot("neutral-60"),"text-disabled-subtle":Ot("neutral-50"),"text-disabled-subtlest":Ot("neutral-30"),"text-selected-disabled":Ot("neutral-90"),"text-success":Ot("success-70"),"text-warning":Ot("warning-70"),"text-error":Ot("error-70"),"text-info":Ot("info-70"),"text-inverse":Ot("black"),icon:Ot("neutral-60"),"icon-subtle":Ot("neutral-50"),"icon-strongest":Ot("neutral-90"),"icon-primary":Ot("primary-60"),"icon-primary-subtle":Ot("primary-50"),"icon-primary-subtlest":Ot("primary-40"),"icon-hover":Ot("primary-70"),"icon-selected":Ot("primary-60"),"icon-selected-hover":Ot("primary-70"),"icon-disabled":Ot("neutral-60"),"icon-disabled-subtle":Ot("neutral-50"),"icon-selected-disabled":Ot("neutral-50"),"icon-success":Ot("success-60"),"icon-warning":Ot("warning-50"),"icon-error":Ot("error-60"),"icon-error-strong":Ot("error-70"),"icon-info":Ot("info-60"),"icon-inverse":Ot("black"),"icon-primary-inverse":Ot("primary-inverse"),border:Ot("neutral-20"),"border-strong":Ot("neutral-40"),"border-stronger":Ot("neutral-60"),"border-primary":Ot("primary-60"),"border-primary-subtle":Ot("primary-50"),"border-hover":Ot("primary-20"),"border-hover-strong":Ot("primary-50"),"border-selected":Ot("primary-60"),"border-selected-subtle":Ot("primary-40"),"border-selected-subtlest":Ot("primary-20"),"border-selected-hover":Ot("primary-70"),"border-focus":Ot("primary-50"),"border-focus-strong":Ot("primary-60"),"border-disabled":Ot("neutral-20"),"border-selected-disabled":Ot("neutral-40"),"border-success":Ot("success-50"),"border-warning":Ot("warning-50"),"border-error":Ot("error-50"),"border-error-focus":Ot("error-50"),"border-error-focus-strong":Ot("error-70"),"border-error-strong":Ot("error-70"),"border-info":Ot("info-50"),bg:Ot("black"),"bg-strong":Ot("neutral-10"),"bg-stronger":Ot("neutral-20"),"bg-strongest":Ot("neutral-20"),"bg-hover":Ot("primary-20"),"bg-hover-strong":Ot("primary-20"),"bg-hover-subtle":Ot("primary-10"),"bg-hover-neutral":Ot("neutral-10"),"bg-hover-neutral-strong":Ot("neutral-20"),"bg-selected":Ot("primary-20"),"bg-selected-hover":Ot("primary-20"),"bg-selected-strong":Ot("primary-20"),"bg-selected-stronger":Ot("primary-40"),"bg-selected-strongest":Ot("primary-60"),"bg-selected-strongest-hover":Ot("primary-70"),"bg-disabled":Ot("neutral-20"),"bg-selected-disabled":Ot("neutral-20"),"bg-selected-stronger-disabled":Ot("neutral-40"),"bg-success":Ot("success-10"),"bg-success-hover":Ot("success-20"),"bg-success-strong":Ot("success-60"),"bg-success-strong-hover":Ot("success-70"),"bg-warning":Ot("warning-10"),"bg-warning-hover":Ot("warning-20"),"bg-warning-strong":Ot("warning-60"),"bg-warning-strong-hover":Ot("warning-70"),"bg-info":Ot("info-10"),"bg-info-hover":Ot("info-20"),"bg-info-strong":Ot("info-60"),"bg-info-strong-hover":Ot("info-70"),"bg-error":Ot("error-10"),"bg-error-hover":Ot("error-20"),"bg-error-strong":Ot("error-60"),"bg-error-strong-hover":Ot("error-70"),"bg-inverse":Ot("neutral-90"),"bg-inverse-subtle":Ot("neutral-80"),"bg-inverse-subtler":Ot("neutral-60"),"bg-inverse-subtlest":Ot("neutral-50"),"bg-inverse-hover":Ot("neutral-70"),"bg-primary":Ot("primary-60"),"bg-primary-subtle":Ot("primary-50"),"bg-primary-subtler":Ot("primary-20"),"bg-primary-subtlest":Ot("primary-10"),"bg-available":"#185339","bg-primary-hover":Ot("primary-70"),"bg-primary-subtlest-hover":Ot("primary-20"),"bg-primary-subtlest-selected":Ot("primary-20"),"overlay-strong":"rgba(78, 78, 78, 0.80)","overlay-subtle":"rgba(78, 78, 78, 0.50)",hyperlink:Ot("primary-60"),"hyperlink-hover":Ot("primary-70"),"hyperlink-visited":Ot("primary-70"),"hyperlink-inverse":Ot("primary-inverse"),"focus-ring":Ot("primary-60"),"focus-ring-inverse":Ot("black")},Wt={collections:{lifesg:_t,bookingsg:_t,rbs:_t,mylegacy:_t,ccube:_t,oneservice:_t,pa:jt,a11yplayground:Tt,supportgowhere:_t},defaultValue:"lifesg"},Rt={collections:{lifesg:Lt,bookingsg:Lt,rbs:Lt,mylegacy:Lt,ccube:Lt,oneservice:Lt,pa:Lt,a11yplayground:Ht,supportgowhere:Lt},defaultValue:"lifesg"},It=e=>r=>{var t;const n=r.theme,i="dark"===(null==n?void 0:n.colourMode),a=ft(i?Rt:Wt,null==n?void 0:n.colourScheme),o=i?"semanticColourDark":"semanticColour",s=null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t[o],l=s?yt(a,e,s):a[e];return"function"==typeof l?l(r):l},Nt={text:It("text"),"text-subtle":It("text-subtle"),"text-subtler":It("text-subtler"),"text-subtlest":It("text-subtlest"),"text-primary":It("text-primary"),"text-hover":It("text-hover"),"text-selected":It("text-selected"),"text-selected-hover":It("text-selected-hover"),"text-disabled":It("text-disabled"),"text-disabled-subtle":It("text-disabled-subtle"),"text-disabled-subtlest":It("text-disabled-subtlest"),"text-selected-disabled":It("text-selected-disabled"),"text-success":It("text-success"),"text-warning":It("text-warning"),"text-error":It("text-error"),"text-info":It("text-info"),"text-inverse":It("text-inverse"),icon:It("icon"),"icon-subtle":It("icon-subtle"),"icon-strongest":It("icon-strongest"),"icon-primary":It("icon-primary"),"icon-primary-subtle":It("icon-primary-subtle"),"icon-primary-subtlest":It("icon-primary-subtlest"),"icon-hover":It("icon-hover"),"icon-selected":It("icon-selected"),"icon-selected-hover":It("icon-selected-hover"),"icon-disabled":It("icon-disabled"),"icon-disabled-subtle":It("icon-disabled-subtle"),"icon-selected-disabled":It("icon-selected-disabled"),"icon-success":It("icon-success"),"icon-warning":It("icon-warning"),"icon-error":It("icon-error"),"icon-error-strong":It("icon-error-strong"),"icon-info":It("icon-info"),"icon-inverse":It("icon-inverse"),"icon-primary-inverse":It("icon-primary-inverse"),border:It("border"),"border-strong":It("border-strong"),"border-stronger":It("border-stronger"),"border-primary":It("border-primary"),"border-primary-subtle":It("border-primary-subtle"),"border-hover":It("border-hover"),"border-hover-strong":It("border-hover-strong"),"border-selected":It("border-selected"),"border-selected-subtle":It("border-selected-subtle"),"border-selected-subtlest":It("border-selected-subtlest"),"border-selected-hover":It("border-selected-hover"),"border-focus":It("border-focus"),"border-focus-strong":It("border-focus-strong"),"border-disabled":It("border-disabled"),"border-selected-disabled":It("border-selected-disabled"),"border-success":It("border-success"),"border-warning":It("border-warning"),"border-error":It("border-error"),"border-error-focus":It("border-error-focus"),"border-error-focus-strong":It("border-error-focus-strong"),"border-error-strong":It("border-error-strong"),"border-info":It("border-info"),bg:It("bg"),"bg-strong":It("bg-strong"),"bg-stronger":It("bg-stronger"),"bg-strongest":It("bg-strongest"),"bg-hover":It("bg-hover"),"bg-hover-strong":It("bg-hover-strong"),"bg-hover-subtle":It("bg-hover-subtle"),"bg-hover-neutral":It("bg-hover-neutral"),"bg-hover-neutral-strong":It("bg-hover-neutral-strong"),"bg-selected":It("bg-selected"),"bg-selected-hover":It("bg-selected-hover"),"bg-selected-strong":It("bg-selected-strong"),"bg-selected-stronger":It("bg-selected-stronger"),"bg-selected-strongest":It("bg-selected-strongest"),"bg-selected-strongest-hover":It("bg-selected-strongest-hover"),"bg-disabled":It("bg-disabled"),"bg-selected-disabled":It("bg-selected-disabled"),"bg-selected-stronger-disabled":It("bg-selected-stronger-disabled"),"bg-success":It("bg-success"),"bg-success-hover":It("bg-success-hover"),"bg-success-strong":It("bg-success-strong"),"bg-success-strong-hover":It("bg-success-strong-hover"),"bg-warning":It("bg-warning"),"bg-warning-hover":It("bg-warning-hover"),"bg-warning-strong":It("bg-warning-strong"),"bg-warning-strong-hover":It("bg-warning-strong-hover"),"bg-info":It("bg-info"),"bg-info-hover":It("bg-info-hover"),"bg-info-strong":It("bg-info-strong"),"bg-info-strong-hover":It("bg-info-strong-hover"),"bg-error":It("bg-error"),"bg-error-hover":It("bg-error-hover"),"bg-error-strong":It("bg-error-strong"),"bg-error-strong-hover":It("bg-error-strong-hover"),"bg-inverse":It("bg-inverse"),"bg-inverse-subtle":It("bg-inverse-subtle"),"bg-inverse-subtler":It("bg-inverse-subtler"),"bg-inverse-subtlest":It("bg-inverse-subtlest"),"bg-inverse-hover":It("bg-inverse-hover"),"bg-primary":It("bg-primary"),"bg-primary-subtle":It("bg-primary-subtle"),"bg-primary-subtler":It("bg-primary-subtler"),"bg-primary-subtlest":It("bg-primary-subtlest"),"bg-available":It("bg-available"),"bg-primary-hover":It("bg-primary-hover"),"bg-primary-subtlest-hover":It("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":It("bg-primary-subtlest-selected"),"overlay-strong":It("overlay-strong"),"overlay-subtle":It("overlay-subtle"),hyperlink:It("hyperlink"),"hyperlink-hover":It("hyperlink-hover"),"hyperlink-visited":It("hyperlink-visited"),"hyperlink-inverse":It("hyperlink-inverse"),"focus-ring":It("focus-ring"),"focus-ring-inverse":It("focus-ring-inverse")},Vt={collections:{default:{solid:e=>r=>{var t,n,i;const{thickness:a,radius:o,colour:s}=e||{},l=null!==(t="function"==typeof a?a(r):a)&&void 0!==t?t:xt["width-010"](r),d=null!==(n="function"==typeof o?o(r):o)&&void 0!==n?n:0,c=null!==(i="function"==typeof s?s(r):s)&&void 0!==i?i:Nt.border(r),u=xt.solid;return g`
            border: ${l} ${u} ${c};
            border-radius: ${d};
        `},"dashed-default":e=>r=>{var t,n,i;const{thickness:a,radius:o,colour:s}=e||{},l=null!==(t="function"==typeof a?a(r):a)&&void 0!==t?t:xt["width-010"](r),d=null!==(n="function"==typeof o?o(r):o)&&void 0!==n?n:0,c=null!==(i="function"==typeof s?s(r):s)&&void 0!==i?i:Nt.border(r),u=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${d}' ry='${d}' stroke='${c}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return g`
            background-image: url("data:image/svg+xml,${u}");
            border-radius: ${d};
        `}}},defaultValue:"default"},Pt=e=>1===e.length&&"theme"in e[0],Ut=e=>(...r)=>t=>{const n=Pt(r)?[]:r,i=Pt(r)?r[0]:t,a=i.theme;return(0,ft(Vt,null==a?void 0:a.borderScheme)[e])(...n)(i)},Zt={solid:Ut("solid"),"dashed-default":Ut("dashed-default")},Xt={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":480,"md-min":481,"md-max":768,"lg-min":769,"lg-max":1024,"xl-min":1025,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},Kt=e=>r=>{var t;const n=r.theme,i=ft(Xt,null==n?void 0:n.breakpointScheme);let a;return a=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.breakpoint)?yt(i,e,n.overrides.breakpoint):i[e],a},Jt={"xxs-min":Kt("xxs-min"),"xxs-max":Kt("xxs-max"),"xs-min":Kt("xs-min"),"xs-max":Kt("xs-max"),"sm-min":Kt("sm-min"),"sm-max":Kt("sm-max"),"md-min":Kt("md-min"),"md-max":Kt("md-max"),"lg-min":Kt("lg-min"),"lg-max":Kt("lg-max"),"xl-min":Kt("xl-min"),"xl-max":Kt("xl-max"),"xxl-min":Kt("xxl-min"),"xxs-column":Kt("xxs-column"),"xs-column":Kt("xs-column"),"sm-column":Kt("sm-column"),"md-column":Kt("md-column"),"lg-column":Kt("lg-column"),"xl-column":Kt("xl-column"),"xxl-column":Kt("xxl-column"),"xxs-gutter":Kt("xxs-gutter"),"xs-gutter":Kt("xs-gutter"),"sm-gutter":Kt("sm-gutter"),"md-gutter":Kt("md-gutter"),"lg-gutter":Kt("lg-gutter"),"xl-gutter":Kt("xl-gutter"),"xxl-gutter":Kt("xxl-gutter"),"xxs-margin":Kt("xxs-margin"),"xs-margin":Kt("xs-margin"),"sm-margin":Kt("sm-margin"),"md-margin":Kt("md-margin"),"lg-margin":Kt("lg-margin"),"xl-margin":Kt("xl-margin"),"xxl-margin":Kt("xxl-margin")},Gt=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,t)=>(r[t]=((e,r)=>{const t=Jt["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const n=t(r);return`@media screen and (${e}: ${n}px)`}})(e,t),r)),{}),qt={MaxWidth:Gt("max-width"),MinWidth:Gt("min-width")},Qt={collections:{default:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},bookingsg:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},pa:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.5rem","heading-size-sm":"1.25rem","heading-size-xs":"1rem","heading-lh-xxl":"3rem","heading-lh-xl":"2.5rem","heading-lh-lg":"2.25rem","heading-lh-md":"2rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.032rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.625rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.25rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},a11yplayground:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Atkinson Hyperlegible Next","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0.00875rem"},supportgowhere:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Libre Franklin","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"}},defaultValue:"default"},en=e=>r=>{var t;const n=r.theme,i=ft(Qt,null==n?void 0:n.fontScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.fontSpec)?yt(i,e,n.overrides.fontSpec):i[e]},rn={"heading-size-xxl":en("heading-size-xxl"),"heading-size-xl":en("heading-size-xl"),"heading-size-lg":en("heading-size-lg"),"heading-size-md":en("heading-size-md"),"heading-size-sm":en("heading-size-sm"),"heading-size-xs":en("heading-size-xs"),"heading-lh-xxl":en("heading-lh-xxl"),"heading-lh-xl":en("heading-lh-xl"),"heading-lh-lg":en("heading-lh-lg"),"heading-lh-md":en("heading-lh-md"),"heading-lh-sm":en("heading-lh-sm"),"heading-lh-xs":en("heading-lh-xs"),"heading-ls-xxl":en("heading-ls-xxl"),"heading-ls-xl":en("heading-ls-xl"),"heading-ls-lg":en("heading-ls-lg"),"heading-ls-md":en("heading-ls-md"),"heading-ls-sm":en("heading-ls-sm"),"heading-ls-xs":en("heading-ls-xs"),"weight-light":en("weight-light"),"weight-regular":en("weight-regular"),"weight-semibold":en("weight-semibold"),"weight-bold":en("weight-bold"),"font-family":en("font-family"),"body-size-baseline":en("body-size-baseline"),"body-size-md":en("body-size-md"),"body-size-sm":en("body-size-sm"),"body-size-xs":en("body-size-xs"),"body-lh-baseline":en("body-lh-baseline"),"body-lh-md":en("body-lh-md"),"body-lh-sm":en("body-lh-sm"),"body-lh-xs":en("body-lh-xs"),"body-ls-baseline":en("body-ls-baseline"),"body-ls-md":en("body-ls-md"),"body-ls-sm":en("body-ls-sm"),"body-ls-xs":en("body-ls-xs"),"form-label-size":en("form-label-size"),"form-description-size":en("form-description-size"),"form-label-lh":en("form-label-lh"),"form-description-lh":en("form-description-lh"),"form-label-ls":en("form-label-ls"),"form-description-ls":en("form-description-ls")},tn=(e,r,t,n,i)=>{const{disableLigatures:a}=i||{};return g`
        font-family: ${en("font-family")};
        font-size: ${en(e)};
        font-weight: ${en(r)};
        line-height: ${en(t)};
        letter-spacing: ${en(n)};

        font-variant: ${a?"no-common-ligatures":"normal"};
    `},nn=(e={})=>({"heading-xxl-light":tn("heading-size-xxl","weight-light","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-regular":tn("heading-size-xxl","weight-regular","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-semibold":tn("heading-size-xxl","weight-semibold","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-bold":tn("heading-size-xxl","weight-bold","heading-lh-xxl","heading-ls-xxl",e),"heading-xl-light":tn("heading-size-xl","weight-light","heading-lh-xl","heading-ls-xl",e),"heading-xl-regular":tn("heading-size-xl","weight-regular","heading-lh-xl","heading-ls-xl",e),"heading-xl-semibold":tn("heading-size-xl","weight-semibold","heading-lh-xl","heading-ls-xl",e),"heading-xl-bold":tn("heading-size-xl","weight-bold","heading-lh-xl","heading-ls-xl",e),"heading-lg-light":tn("heading-size-lg","weight-light","heading-lh-lg","heading-ls-lg",e),"heading-lg-regular":tn("heading-size-lg","weight-regular","heading-lh-lg","heading-ls-lg",e),"heading-lg-semibold":tn("heading-size-lg","weight-semibold","heading-lh-lg","heading-ls-lg",e),"heading-lg-bold":tn("heading-size-lg","weight-bold","heading-lh-lg","heading-ls-lg",e),"heading-md-light":tn("heading-size-md","weight-light","heading-lh-md","heading-ls-md",e),"heading-md-regular":tn("heading-size-md","weight-regular","heading-lh-md","heading-ls-md",e),"heading-md-semibold":tn("heading-size-md","weight-semibold","heading-lh-md","heading-ls-md",e),"heading-md-bold":tn("heading-size-md","weight-bold","heading-lh-md","heading-ls-md",e),"heading-sm-light":tn("heading-size-sm","weight-light","heading-lh-sm","heading-ls-sm",e),"heading-sm-regular":tn("heading-size-sm","weight-regular","heading-lh-sm","heading-ls-sm",e),"heading-sm-semibold":tn("heading-size-sm","weight-semibold","heading-lh-sm","heading-ls-sm",e),"heading-sm-bold":tn("heading-size-sm","weight-bold","heading-lh-sm","heading-ls-sm",e),"heading-xs-light":tn("heading-size-xs","weight-light","heading-lh-xs","heading-ls-xs",e),"heading-xs-regular":tn("heading-size-xs","weight-regular","heading-lh-xs","heading-ls-xs",e),"heading-xs-semibold":tn("heading-size-xs","weight-semibold","heading-lh-xs","heading-ls-xs",e),"heading-xs-bold":tn("heading-size-xs","weight-bold","heading-lh-xs","heading-ls-xs",e),"body-baseline-light":tn("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline",e),"body-baseline-regular":tn("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline",e),"body-baseline-semibold":tn("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline",e),"body-baseline-bold":tn("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline",e),"body-md-light":tn("body-size-md","weight-light","body-lh-md","body-ls-md",e),"body-md-regular":tn("body-size-md","weight-regular","body-lh-md","body-ls-md",e),"body-md-semibold":tn("body-size-md","weight-semibold","body-lh-md","body-ls-md",e),"body-md-bold":tn("body-size-md","weight-bold","body-lh-md","body-ls-md",e),"body-sm-light":tn("body-size-sm","weight-light","body-lh-sm","body-ls-sm",e),"body-sm-regular":tn("body-size-sm","weight-regular","body-lh-sm","body-ls-sm",e),"body-sm-semibold":tn("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm",e),"body-sm-bold":tn("body-size-sm","weight-bold","body-lh-sm","body-ls-sm",e),"body-xs-light":tn("body-size-xs","weight-light","body-lh-xs","body-ls-xs",e),"body-xs-regular":tn("body-size-xs","weight-regular","body-lh-xs","body-ls-xs",e),"body-xs-semibold":tn("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs",e),"body-xs-bold":tn("body-size-xs","weight-bold","body-lh-xs","body-ls-xs",e),"form-label":tn("form-label-size","weight-semibold","form-label-lh","form-label-ls",e),"form-description":tn("form-description-size","weight-regular","form-description-lh","form-description-ls",e)}),an=nn({disableLigatures:!0}),on={collections:{default:nn(),bookingsg:an,pa:nn({disableLigatures:!0}),a11yplayground:nn({disableLigatures:!0}),supportgowhere:nn({disableLigatures:!0})},defaultValue:"default"},sn=e=>r=>{var t;const n=r.theme,i=ft(on,null==n?void 0:n.fontScheme),a=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.font)?yt(i,e,n.overrides.font):i[e];return"function"==typeof a?a(r):a},ln={"heading-xxl-light":sn("heading-xxl-light"),"heading-xxl-regular":sn("heading-xxl-regular"),"heading-xxl-semibold":sn("heading-xxl-semibold"),"heading-xxl-bold":sn("heading-xxl-bold"),"heading-xl-light":sn("heading-xl-light"),"heading-xl-regular":sn("heading-xl-regular"),"heading-xl-semibold":sn("heading-xl-semibold"),"heading-xl-bold":sn("heading-xl-bold"),"heading-lg-light":sn("heading-lg-light"),"heading-lg-regular":sn("heading-lg-regular"),"heading-lg-semibold":sn("heading-lg-semibold"),"heading-lg-bold":sn("heading-lg-bold"),"heading-md-light":sn("heading-md-light"),"heading-md-regular":sn("heading-md-regular"),"heading-md-semibold":sn("heading-md-semibold"),"heading-md-bold":sn("heading-md-bold"),"heading-sm-light":sn("heading-sm-light"),"heading-sm-regular":sn("heading-sm-regular"),"heading-sm-semibold":sn("heading-sm-semibold"),"heading-sm-bold":sn("heading-sm-bold"),"heading-xs-light":sn("heading-xs-light"),"heading-xs-regular":sn("heading-xs-regular"),"heading-xs-semibold":sn("heading-xs-semibold"),"heading-xs-bold":sn("heading-xs-bold"),"body-baseline-light":sn("body-baseline-light"),"body-baseline-regular":sn("body-baseline-regular"),"body-baseline-semibold":sn("body-baseline-semibold"),"body-baseline-bold":sn("body-baseline-bold"),"body-md-light":sn("body-md-light"),"body-md-regular":sn("body-md-regular"),"body-md-semibold":sn("body-md-semibold"),"body-md-bold":sn("body-md-bold"),"body-sm-light":sn("body-sm-light"),"body-sm-regular":sn("body-sm-regular"),"body-sm-semibold":sn("body-sm-semibold"),"body-sm-bold":sn("body-sm-bold"),"body-xs-light":sn("body-xs-light"),"body-xs-regular":sn("body-xs-regular"),"body-xs-semibold":sn("body-xs-semibold"),"body-xs-bold":sn("body-xs-bold"),"form-label":sn("form-label"),"form-description":sn("form-description")},dn={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},cn=e=>r=>{var t;const n=r.theme,i=ft(dn,null==n?void 0:n.motionScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.motion)?yt(i,e,n.overrides.motion):i[e]},un={"duration-150":cn("duration-150"),"duration-250":cn("duration-250"),"duration-350":cn("duration-350"),"duration-500":cn("duration-500"),"duration-800":cn("duration-800"),"duration-1000":cn("duration-1000"),"ease-default":cn("ease-default"),"ease-standard":cn("ease-standard"),"ease-entrance":cn("ease-entrance"),"ease-exit":cn("ease-exit")},gn={collections:{default:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"default"},bn=e=>r=>{var t;const n=r.theme,i=ft(gn,null==n?void 0:n.radiusScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.radius)?`${yt(i,e,n.overrides.radius)}px`:`${i[e]}px`},hn={none:bn("none"),xs:bn("xs"),sm:bn("sm"),md:bn("md"),lg:bn("lg"),full:bn("full")},mn=(e,r,t)=>n=>{const i=It(r)(n)||Ot(r)(n);return`${e} rgba(from ${i} r g b / ${100*t}%)`},yn={collections:{default:{"xs-subtle":mn("0 0 4px 1px","neutral-50",.24),"xs-strong":mn("0 0 4px 1px","neutral-50",.5),"xs-focus-strong":mn("0 0 4px 1px","border-focus",.5),"xs-error-strong":mn("0 0 4px 1px","border-error",.5),"sm-subtle":mn("0 2px 4px 0","neutral-50",.24),"sm-strong":mn("0 2px 4px 0","neutral-50",.5),"md-subtle":mn("0 2px 8px 0","neutral-50",.24),"md-strong":mn("0 2px 8px 0","neutral-50",.5),"lg-subtle":mn("0 2px 12px 1px","neutral-50",.24),"lg-strong":mn("0 2px 12px 1px","neutral-50",.5)}},defaultValue:"default"},fn=e=>r=>{var t;const n=r.theme,i=ft(yn,null==n?void 0:n.shadowScheme),a=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.shadow)?yt(i,e,n.overrides.shadow):i[e];return"function"==typeof a?a(r):a},pn={"xs-subtle":fn("xs-subtle"),"xs-strong":fn("xs-strong"),"xs-focus-strong":fn("xs-focus-strong"),"xs-error-strong":fn("xs-error-strong"),"sm-subtle":fn("sm-subtle"),"sm-strong":fn("sm-strong"),"md-subtle":fn("md-subtle"),"md-strong":fn("md-strong"),"lg-subtle":fn("lg-subtle"),"lg-strong":fn("lg-strong")},vn={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},xn=e=>r=>{var t;const n=r.theme,i=ft(vn,null==n?void 0:n.spacingScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.spacing)?`${yt(i,e,n.overrides.spacing)}px`:`${i[e]}px`},Fn={"spacing-0":xn("spacing-0"),"spacing-4":xn("spacing-4"),"spacing-8":xn("spacing-8"),"spacing-12":xn("spacing-12"),"spacing-16":xn("spacing-16"),"spacing-20":xn("spacing-20"),"spacing-24":xn("spacing-24"),"spacing-32":xn("spacing-32"),"spacing-40":xn("spacing-40"),"spacing-48":xn("spacing-48"),"spacing-64":xn("spacing-64"),"spacing-72":xn("spacing-72"),"layout-xs":xn("layout-xs"),"layout-sm":xn("layout-sm"),"layout-md":xn("layout-md"),"layout-lg":xn("layout-lg"),"layout-xl":xn("layout-xl"),"layout-xxl":xn("layout-xxl"),"layout-xxxl":xn("layout-xxxl")},wn=(e,r)=>Object.assign(Object.assign({},e),{colourMode:r}),Dn=Object.assign(Object.assign({},Nt),{Primitive:Yt}),$n=Object.assign(Object.assign({},ln),{Spec:rn}),Cn=un,En=Object.assign(Object.assign({},xt),{Util:Zt}),Bn=Fn,Sn=hn,kn=pn,An=qt,zn={colourScheme:"lifesg",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"lifesg",_v2:{colorScheme:"base",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"base"}},Mn={colourScheme:"bookingsg",fontScheme:"bookingsg",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"bookingsg",_v2:{colorScheme:"bookingsg",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"bookingsg"}},On={colourScheme:"ccube",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"ccube",_v2:{colorScheme:"ccube",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"ccube"}},Yn={colourScheme:"mylegacy",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"mylegacy",_v2:{colorScheme:"mylegacy",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"mylegacy"}},_n={colourScheme:"rbs",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"rbs",_v2:{colorScheme:"rbs",textStyleScheme:"base",designTokenScheme:"rbs",resourceScheme:"rbs"}},Ln={colourScheme:"oneservice",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"oneservice"},jn={colourScheme:"pa",fontScheme:"pa",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"pa",componentScheme:"pa"},Tn={colourScheme:"a11yplayground",fontScheme:"a11yplayground",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"a11yplayground",componentScheme:"a11yplayground"},Hn={colourScheme:"supportgowhere",fontScheme:"supportgowhere",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",shadowScheme:"default",breakpointScheme:"default",resourceScheme:"supportgowhere",componentScheme:"default"};Object.assign(Object.assign({},zn),{light:wn(zn,"light"),dark:wn(zn,"dark")}),Object.assign(Object.assign({},Mn),{light:wn(Mn,"light"),dark:wn(Mn,"dark")}),Object.assign(Object.assign({},On),{light:wn(On,"light"),dark:wn(On,"dark")}),Object.assign(Object.assign({},Yn),{light:wn(Yn,"light"),dark:wn(Yn,"dark")}),Object.assign(Object.assign({},_n),{light:wn(_n,"light"),dark:wn(_n,"dark")}),Object.assign(Object.assign({},Ln),{light:wn(Ln,"light"),dark:wn(Ln,"dark")}),Object.assign(Object.assign({},jn),{light:wn(jn,"light"),dark:wn(jn,"dark")}),Object.assign(Object.assign({},Tn),{light:wn(Tn,"light"),dark:wn(Tn,"dark")}),Object.assign(Object.assign({},Hn),{light:wn(Hn,"light"),dark:wn(Hn,"dark")});const Wn={Button:{"button-radius":hn.md,"button-default-colour-bg":Nt["bg-primary"],"button-default-colour-bg-hover":Nt["bg-primary-hover"],"button-default-colour-text":Nt["text-inverse"],"button-secondary-colour-border":Nt["border-primary"],"button-secondary-colour-text":Nt["text-primary"],"button-light-colour-text":Nt["text-primary"],"button-link-colour-text":Nt["text-primary"]}},Rn={collections:{default:{Button:{"button-radius":hn.sm,"button-default-colour-bg":Nt["bg-primary"],"button-default-colour-bg-hover":Nt["bg-primary-hover"],"button-default-colour-text":Nt["text-inverse"],"button-secondary-colour-border":Nt["border-primary"],"button-secondary-colour-text":Nt["text-primary"],"button-light-colour-text":Nt["text-primary"],"button-link-colour-text":Nt["text-primary"]}},pa:{Button:{"button-radius":hn.full,"button-default-colour-bg":Nt["bg-primary"],"button-default-colour-bg-hover":Nt["bg-primary-hover"],"button-default-colour-text":Nt["text-inverse"],"button-secondary-colour-border":Nt["border-primary"],"button-secondary-colour-text":Nt["text-primary"],"button-light-colour-text":Nt["text-primary"],"button-link-colour-text":Nt["text-primary"]}},a11yplayground:Wn},defaultValue:"default"},In=(e,r)=>t=>{var n,i;const a=t.theme,o=ft(Rn,null==a?void 0:a.componentScheme);return Nn((null===(i=null===(n=null==a?void 0:a.componentOverrides)||void 0===n?void 0:n[e])||void 0===i?void 0:i[r])||o[e][r],t)},Nn=(e,r)=>{switch(typeof e){case"function":return e(r);case"number":return e+"px";case"string":return e}},Vn=In("Button","button-radius"),Pn=In("Button","button-default-colour-bg"),Un=In("Button","button-default-colour-bg-hover"),Zn=In("Button","button-default-colour-text"),Xn=In("Button","button-secondary-colour-border"),Kn=In("Button","button-secondary-colour-text"),Jn=In("Button","button-light-colour-text"),Gn=In("Button","button-link-colour-text"),qn=c.button`
    padding: ${Bn["spacing-8"]} ${Bn["spacing-16"]};
    min-width: 4rem;
    border: ${En["width-010"]} ${En.solid} transparent;
    transition: all ${Cn["duration-250"]} ${Cn["ease-default"]};
    border-radius: ${Vn};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return g`
                    background-color: ${Dn.bg};
                    border-color: ${e.$buttonIsDanger?Dn["border-error-strong"]:Xn};

                    color: ${e.$buttonIsDanger?Dn["text-error"]:Kn};

                    &:hover,
                    &:active {
                        background-color: ${Dn["bg-hover-neutral"]};
                    }
                `;case"light":return g`
                    background-color: ${Dn.bg};
                    border-color: ${Dn.border};

                    color: ${e.$buttonIsDanger?Dn["text-error"]:Jn};

                    &:hover,
                    &:active {
                        background-color: ${Dn["bg-hover-neutral"]};
                    }
                `;case"link":return g`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?Dn["text-error"]:Gn};
                    &:hover,
                    &:active {
                        background-color: ${Dn["bg-hover-neutral"]};
                    }
                `;case"disabled":return g`
                    background-color: ${Dn["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Dn["text-disabled"]};
                `;default:return g`
                    background-color: ${e.$buttonIsDanger?Dn["bg-error-strong"]:Pn};

                    ${An.MaxWidth.sm} {
                        width: 100%;
                    }

                    color: ${Zn};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?Dn["bg-error-strong-hover"]:Un};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return g`
                    height: 2.5rem;
                    ${$n["body-md-semibold"]}

                    ${An.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return g`
                    height: 4rem;
                    ${$n["heading-md-semibold"]}

                    ${An.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return g`
                    height: 3rem;
                    ${$n["heading-xs-semibold"]}

                    ${An.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,Qn=c((({color:t,className:n,size:i})=>e(V,{className:n,$size:i,$color:t,"data-testid":"component-loading-spinner",children:[r(U,{id:"inner1"}),r(Z,{id:"inner2"}),r(X,{id:"inner3"}),r(K,{id:"inner4"})]})))`
    margin-right: 0.5rem;
`,ei=(t,n)=>{const{children:i,disabled:a=!1,loading:o=!1,styleType:s="default",danger:l=!1,focusableWhenDisabled:d=!1,onClick:c}=t,u=f(t,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),g={$buttonStyle:a?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return e(qn,Object.assign({ref:n,"data-testid":u["data-testid"]||"button",disabled:a&&!d,"aria-disabled":a,"aria-busy":o,onClick:a?void 0:c},g,u,{children:[o&&r(Qn,{}),r("span",{children:i})]}))};ei.displayName="Button.Default";const ri=(t,n)=>{const{children:i,disabled:a=!1,loading:o=!1,styleType:s="default",danger:l=!1,focusableWhenDisabled:d=!1,onClick:c}=t,u=f(t,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),g={$buttonStyle:a?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return e(qn,Object.assign({ref:n,"data-testid":u["data-testid"]||"button",disabled:a&&!d,"aria-disabled":a,"aria-busy":o,onClick:a?void 0:c},g,u,{children:[o&&r(Qn,{}),r("span",{children:i})]}))};ri.displayName="Button.Small";const ti=(t,n)=>{const{children:i,disabled:a=!1,loading:o=!1,styleType:s="default",danger:l=!1,focusableWhenDisabled:d=!1,onClick:c}=t,u=f(t,["children","disabled","loading","styleType","danger","focusableWhenDisabled","onClick"]),g={$buttonStyle:a?"disabled":s,$buttonSizeStyle:"large",$buttonIsDanger:l};return e(qn,Object.assign({ref:n,"data-testid":u["data-testid"]||"button",disabled:a&&!d,"aria-disabled":a,"aria-busy":o,onClick:a?void 0:c},g,u,{children:[o&&r(Qn,{}),r("span",{children:i})]}))};ti.displayName="Button.Large";const ni={Default:n.forwardRef(ei),Small:n.forwardRef(ri),Large:n.forwardRef(ti)},ii=c.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${Bn["spacing-24"]};
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

        ${({$highlight:e})=>e&&g`
                background-color: ${Dn["bg-hover-neutral"]};
            `}
    }
`,ai=n.forwardRef(((e,t)=>{var{children:n,focusHighlight:i=!0,focusOutline:a="none",type:o="button"}=e,s=f(e,["children","focusHighlight","focusOutline","type"]);return r(ii,Object.assign({ref:t,$outline:a,$highlight:i,type:o},s,{children:n}))})),oi=g`
    color: ${Dn.icon};
    height: 1rem;
    width: 1rem;
`,si=c(h)`
    ${oi}
`,li=c(m)`
    ${oi}
`,di=c(b)`
    ${oi}
    transition: transform 250ms ease-in-out;
    margin-left: 0.5rem;
`,ci=c.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    padding-top: var(--vertical-inset);
    padding-bottom: var(--vertical-inset);
`,ui=c.div`
    display: flex;
    flex: 1;
    position: relative;
`,gi=c.div`
    isolation: isolate;
    width: 100%;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,bi=c.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${Dn.bg};

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);

    ${e=>{if(!e.$visible)return g`
                display: none;
            `}}
`,hi=c.div`
    display: flex;
    justify-content: space-between;

    padding-left: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-right: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-bottom: var(--header-bottom-spacing);
`,mi=c.div`
    display: flex;
`,yi=c.button`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;

    ${e=>!1===e.$visible?g`
                display: none;
            `:e.$expanded?g`
                ${di} {
                    transform: rotate(180deg);
                }
            `:void 0};
`,fi=c.span`
    ${$n["body-md-regular"]}
    color: ${Dn.text};
`,pi=c.div`
    display: flex;
`,vi=c(ai)`
    margin: auto 0;
    padding: 0.75rem;

    &:disabled {
        cursor: not-allowed;
    }
`,xi=c.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,Fi=c(ni.Small)`
    flex: 1;
`,wi=c.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 2.5rem);
    align-content: center;
    justify-content: center;

    gap: 0.5rem 0;
`,Di=c.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${Sn.md};
    margin: 0 0.5rem;
    transition: ${Cn["duration-150"]} ${Cn["ease-default"]};

    // default styles
    ${$n["body-md-regular"]}
    border-radius: ${Sn.md};
    border: ${En["width-010"]} ${En.solid} transparent;
    background-clip: border-box;
    color: ${Dn.text};
    cursor: default;

    // cursor style
    ${e=>e.$interactive?g`
                cursor: pointer;
            `:e.$disabledDisplay?g`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:e,$interactive:r,$disabledDisplay:t})=>"selected-month"===e?g`
                background: ${Dn["bg-selected"]};
                border-color: ${Dn["border-selected"]};
                color: ${Dn["text-selected"]};
                font-weight: ${$n.Spec["weight-semibold"]};

                ${r&&g`
                    &:hover {
                        background: ${Dn["bg-selected-hover"]};
                        border-color: ${Dn["border-selected-hover"]};
                        color: ${Dn["text-selected-hover"]};
                    }
                `}
            `:"current-month"===e?g`
                color: ${Dn["text-primary"]};
                font-weight: ${$n.Spec["weight-semibold"]};
            `:t?g`
                color: ${Dn["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:r})=>{if(r)return"selected-month"===e?g`
                &:hover {
                    background: ${Dn["bg-selected-hover"]};
                    border-color: ${Dn["border-selected-hover"]};
                    color: ${Dn["text-selected-hover"]};
                    font-weight: ${$n.Spec["weight-semibold"]};
                }
            `:g`
            &:hover {
                background: ${Dn["bg-hover"]};
                color: ${Dn["text-hover"]};
                font-weight: ${$n.Spec["weight-semibold"]};
            }
        `}}
`,$i=({calendarDate:e,currentFocus:t,selectedStartDate:n,selectedEndDate:i,viewCalendarDate:d,isNewSelection:c,minDate:u,maxDate:g,allowDisabledSelection:b,onMonthSelect:h})=>{const m=a((()=>z.generateMonths(F(e))),[e]),y=o(new Array(m.length).fill(null)),[f,p]=s(m.findIndex((e=>e.isSame(d,"month"))));l((()=>{var e;null!==f&&(null===(e=y.current[f])||void 0===e||e.focus())}),[f,m]);const v=(e,r)=>{r||h(e)},x=e=>{const r="start"===t&&i&&e.isAfter(i,"month")&&c,a="end"===t&&n&&e.isBefore(n,"month")&&c;return!(!r&&!a)},w=e=>{const r=e.format("MMMM"),t=(n=e,!z.isWithinRange(n,u?F(u):void 0,g?F(g):void 0,"month"));var n;const i=d.isSame(e,"month"),a=i?"selected-month":F().isSame(e,"month")?"current-month":"default",o=d.isSame(e,"year")?i?0:-1:0===e.month()?0:-1;return{disabledDisplay:t||x(e),interactive:!t||b,month:r,variant:a,tabIndex:o}};return m.length?r(wi,{onBlur:()=>{p(null)},children:m.map(((e,t)=>{const{disabledDisplay:n,interactive:i,variant:a,month:o,tabIndex:s}=w(e);return r(Di,{ref:e=>y.current[t]=e,tabIndex:s,role:"button","aria-disabled":!i,"aria-selected":"selected-month"===a,$variant:a,$disabledDisplay:n,$interactive:i,onClick:()=>v(e,!i),onKeyDown:r=>{((e,r,t)=>{const n=e.key;let i;const a=m.indexOf(r);switch(n){case"Enter":case" ":e.preventDefault(),v(r,t);break;case"ArrowLeft":i=a-1;break;case"ArrowRight":i=a+1;break;case"ArrowUp":i=a-2;break;case"ArrowDown":i=a+2}void 0!==i&&i>=0&&i<m.length&&(e.preventDefault(),p(i))})(r,e,!i)},children:o},o)}))}):null},Ci=c.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-content: center;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
`,Ei=c.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0.5rem;
    transition: ${Cn["duration-150"]} ${Cn["ease-default"]};
    padding: 0.5rem;

    // default styles
    ${$n["body-md-regular"]}
    border-radius: ${Sn.md};
    border: ${En["width-010"]} ${En.solid} transparent;
    background-clip: border-box;
    color: ${Dn.text};
    cursor: default;

    // cursor style
    ${({$interactive:e,$disabledDisplay:r})=>e?g`
                cursor: pointer;
            `:r?g`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:e,$interactive:r,$disabledDisplay:t})=>"selected-year"===e?g`
                background: ${Dn["bg-selected"]};
                border-color: ${Dn["border-selected"]};
                color: ${Dn["text-selected"]};
                font-weight: ${$n.Spec["weight-semibold"]};

                ${r&&g`
                    &:hover {
                        background: ${Dn["bg-selected-hover"]};
                        border-color: ${Dn["border-selected-hover"]};
                        color: ${Dn["text-selected-hover"]};
                    }
                `}
            `:"current-year"===e?g`
                color: ${Dn["text-primary"]};
                font-weight: ${$n.Spec["weight-semibold"]};
            `:"other-decade"===e||t?g`
                color: ${Dn["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:r})=>{if(r)return"selected-year"===e?g`
                &:hover {
                    background: ${Dn["bg-selected-hover"]};
                    border-color: ${Dn["border-selected-hover"]};
                    color: ${Dn["text-selected-hover"]};
                    font-weight: ${$n.Spec["weight-semibold"]};
                }
            `:g`
            &:hover {
                background: ${Dn["bg-hover"]};
                color: ${Dn["text-hover"]};
                font-weight: ${$n.Spec["weight-semibold"]};
            }
        `}}
`,Bi=({calendarDate:e,currentFocus:t,selectedStartDate:n,selectedEndDate:i,viewCalendarDate:d,isNewSelection:c,minDate:u,maxDate:g,allowDisabledSelection:b,onYearSelect:h,setCalendarDate:m})=>{const y=a((()=>z.generateDecadeOfYears(F(e))),[e]),f=o(new Array(y.length).fill(null)),[p,v]=s(e);l((()=>{var e;if(null===p)return;const r=y.findIndex((e=>e.isSame(p,"year")));r>=0&&(null===(e=f.current[r])||void 0===e||e.focus())}),[p,y]);const x=(e,r)=>{r||h(e)},w=e=>{const r="start"===t&&i&&e.isAfter(i,"year")&&c,a="end"===t&&n&&e.isBefore(n,"year")&&c;return!(!r&&!a)},D=e=>{const r=y.indexOf(e),t=[0,11].includes(r),n=e.year(),i=(a=e,!z.isWithinRange(a,u?F(u):void 0,g?F(g):void 0,"year"));var a;const o=t?"other-decade":d.isSame(e,"year")?"selected-year":F().isSame(e,"year")?"current-year":"default",s=d.year()>=y[0].year()&&d.year()<=y[y.length-1].year()?"selected-year"===o?0:-1:1===r?0:-1;return{disabledDisplay:i||w(e),interactive:!i||b,year:n,variant:o,tabIndex:s}};return y.length?r(Ci,{onBlur:()=>{v(null)},children:y.map(((e,t)=>{const{disabledDisplay:n,interactive:i,variant:a,year:o,tabIndex:s}=D(e);return r(Ei,{ref:e=>{f.current[t]=e},tabIndex:s,role:"button","aria-label":`${o}`,"aria-disabled":!i,"aria-selected":"selected-year"===a,$variant:a,$disabledDisplay:n,$interactive:!!i,onClick:()=>x(e,!i),onKeyDown:r=>{((e,r,t)=>{let n;switch(e.key){case"Enter":case" ":e.preventDefault(),x(r,t);break;case"ArrowLeft":n=r.subtract(1,"year");break;case"ArrowRight":n=r.add(1,"year");break;case"ArrowUp":n=r.subtract(3,"year");break;case"ArrowDown":n=r.add(3,"year")}void 0!==n&&(e.preventDefault(),m(n),v(n))})(r,e,!i)},children:o},o)}))}):null},Si=n.forwardRef(((n,i)=>{var{children:a,initialCalendarDate:c,minDate:u,maxDate:g,currentFocus:b,selectedStartDate:h,selectedEndDate:m,selectWithinRange:y,dynamicHeight:p=!1,allowDisabledSelection:v,onCalendarDateChange:x,withButton:w,doneButtonDisabled:D,onDismiss:$,showNavigationHeader:C=!0,getLeftArrowDate:E,getRightArrowDate:B,isLeftArrowDisabled:S,isRightArrowDisabled:k,getMonthHeaderLabel:A,getYearHeaderLabel:M,isFocusable:O=!1}=n,Y=f(n,["children","initialCalendarDate","minDate","maxDate","currentFocus","selectedStartDate","selectedEndDate","selectWithinRange","dynamicHeight","allowDisabledSelection","onCalendarDateChange","withButton","doneButtonDisabled","onDismiss","showNavigationHeader","getLeftArrowDate","getRightArrowDate","isLeftArrowDisabled","isRightArrowDisabled","getMonthHeaderLabel","getYearHeaderLabel","isFocusable"]);const[_,L]=s(H.toDayjs(c)),[j,T]=s(H.toDayjs(c)),[W,R]=s("default"),I=o(null),V=o(null),P=o(null),U=o(null);d(i,(()=>({defaultView(){R("default")},resetView(){const e=H.toDayjs(c);L(e),T(e),R("default")},setCalendarDate(e){const r=H.toDayjs(e);L(r),T(r)}}))),l((()=>{const e=H.toDayjs(c);L(e),T(e)}),[c]),l((()=>{re(j)}),[j]);const Z=()=>{var e;"month-options"!==W?(R("month-options"),null===(e=P.current)||void 0===e||e.focus()):(R("default"),L(j))},X=e=>{var r;if("Enter"!==e.key&&" "!==e.key||(e.preventDefault(),Z(),null===(r=U.current)||void 0===r||r.focus()),"ArrowUp"===e.key||"ArrowDown"===e.key){e.preventDefault();const r="ArrowUp"===e.key?_.subtract(1,"month"):_.add(1,"month");if(!z.isWithinRange(r,u?F(u):void 0,g?F(g):void 0,"month"))return;L(r),"default"===W&&T(r)}},K=()=>{"default"!==W?(R("default"),L(j)):R("year-options")},J=e=>{if("Enter"!==e.key&&" "!==e.key||(e.preventDefault(),K()),"ArrowUp"===e.key||"ArrowDown"===e.key){e.preventDefault();let r;if(r="year-options"===W?"ArrowUp"===e.key?_.subtract(10,"year"):_.add(10,"year"):"ArrowUp"===e.key?_.subtract(1,"year"):_.add(1,"year"),!z.isWithinRange(r,u?F(u):void 0,g?F(g):void 0,"year"))return;L(r),"default"===W&&T(r)}},G=()=>{var e;null===(e=P.current)||void 0===e||e.focus();const r=E?E(_):_.subtract(1,"month");switch(W){case"default":T(r),L(r);break;case"month-options":L((e=>e.subtract(1,"year")));break;case"year-options":L((e=>e.subtract(10,"year")))}},q=()=>{var e;null===(e=P.current)||void 0===e||e.focus();const r=B?B(_):_.add(1,"month");switch(W){case"default":T(r),L(r);break;case"month-options":L((e=>e.add(1,"year")));break;case"year-options":L((e=>e.add(10,"year")))}},Q=e=>{L(e),T(e),w||R("default")},ee=()=>{const e=H.toDayjs(c);L(e),T(e),"default"===W?te("reset"):R("default")},re=e=>{x&&x(e)},te=e=>{$&&$(e)},ne=()=>{if(!u||v)return!1;const e=F(u);return"month-options"===W?!z.isPreviousYearWithinRange(_,e):"year-options"===W?!z.isPreviousDecadeWithinRange(_,e):S?S(_):!z.isPreviousMonthWithinRange(_,e)},ie=()=>{if(!g||v)return!1;const e=F(g);return"month-options"===W?!z.isNextYearWithinRange(_,e):"year-options"===W?!z.isNextDecadeWithinRange(_,e):k?k(_):!z.isNextMonthWithinRange(_,e)},ae=()=>{const n=A?A(_):_.format("MMM"),i=F(n,"MMM").format("MMMM"),a=(()=>{if("year-options"===W){const{beginDecade:e,endDecade:r}=z.getStartEndDecade(_);return`${e} to ${r}`}return M?M(_):_.format("YYYY")})(),o={"month-options":`${a}, Close month selection`,"year-options":`${a}, Close year selection`,default:`${a}, Select year`};return e(t,{children:[e(yi,{"aria-label":`${i}, Select month`,type:"button",$expanded:"month-options"===W,$visible:"default"===W,id:"month-dropdown",onClick:Z,onKeyDown:X,tabIndex:O?0:-1,children:[r(fi,{children:n}),r(di,{})]}),e(yi,{ref:U,"aria-label":o[W],type:"button",$expanded:"default"!==W,id:"year-dropdown",onClick:K,onKeyDown:J,tabIndex:O?0:-1,children:[r(fi,{children:a}),r(di,{})]})]})},oe=()=>{switch(W){case"month-options":return r($i,{calendarDate:_,currentFocus:b,minDate:u,maxDate:g,selectedStartDate:h,selectedEndDate:m,viewCalendarDate:j,isNewSelection:!!y,onMonthSelect:Q,allowDisabledSelection:v});case"year-options":return r(Bi,{setCalendarDate:L,calendarDate:_,currentFocus:b,minDate:u,maxDate:g,selectedStartDate:h,selectedEndDate:m,viewCalendarDate:j,isNewSelection:!!y,onYearSelect:Q,allowDisabledSelection:v});default:return null}};return e(ci,Object.assign({ref:P,"data-id":"calendar-container","data-testid":"calendar-container","aria-label":j.format("MMMM, YYYY"),role:"group"},Y,{children:[C&&(()=>{const t={"month-options":"year","year-options":"decade",default:"month"}[W];return e(hi,{"data-id":"calendar-header","data-testid":"calendar-header",children:[r(mi,{children:ae()}),e(pi,{children:[r(vi,{"aria-label":`Previous ${t}`,"data-testid":"left-arrow-btn",disabled:ne(),focusHighlight:!1,focusOutline:"browser",onClick:G,tabIndex:O?0:-1,children:r(si,{})}),r(vi,{"aria-label":`Next ${t}`,"data-testid":"right-arrow-btn",disabled:ie(),focusHighlight:!1,focusOutline:"browser",onClick:q,tabIndex:O?0:-1,children:r(li,{})})]})]})})(),r(ui,{children:(()=>{const n="function"==typeof a?a({calendarDate:j,currentView:W}):a;if(p)return e(t,{children:["default"===W&&n,oe()]});{const i="default"===W;return e(t,{children:[r(gi,{inert:N(!i),children:n}),r(bi,{$visible:!i,children:oe()})]})}})()}),(()=>{if(!w)return;const t=!!("default"===W)&&D;return e(xi,{children:[r(Fi,{ref:V,"data-testid":"cancel-button",styleType:"light",type:"button",onClick:ee,children:"Cancel"}),r(Fi,{"data-testid":"done-button",ref:I,type:"button",onClick:()=>{t||(L(j),"default"===W?te("confirmed"):R("default"))},disabled:t,children:"Done"})]})})()]}))})),ki=e=>{let r=Dn.bg,t="transparent";switch(e.$type){case"hover-subtle":r=Dn["bg-hover"],t=Dn["bg-hover"];break;case"hover":r=Dn["bg-hover-strong"],t=Dn["bg-hover-strong"];break;case"hover-outline":r=Dn["bg-hover-subtle"],t=Dn["border-hover"];break;case"selected-outline":r=Dn["bg-selected"],t=Dn["border-selected"];break;case"selected-outline-subtle":r=Dn["bg-selected"],t=Dn["border-selected-subtle"];break;case"selected-hover":r=Dn["bg-selected-hover"];break;case"selected-hover-outline":r=Dn["bg-selected-hover"],t=Dn["border-selected-hover"]}return{color:r,borderColor:t}},Ai=c.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 2.5rem;
`,zi=c.div`
    position: absolute;
    height: 2.5rem;
    width: 50%;
    transition: ${Cn["duration-150"]} ${Cn["ease-default"]};
    border: ${En["width-010"]} ${En.solid} transparent;
    border-left: none;
    border-right: none;

    ${e=>{if(!e.$type)return;const{color:r,borderColor:t}=ki(e);return g`
            background-color: ${r};
            background-clip: border-box;
            border-top-color: ${t};
            border-bottom-color: ${t};
        `}}
`,Mi=c(zi)`
    left: 0;
`,Oi=c(zi)`
    right: 0;
`,Yi=c.div`
    position: absolute;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    transition: ${Cn["duration-150"]} ${Cn["ease-default"]};

    border: ${En["width-010"]} ${En.solid} transparent;
    border-radius: ${Sn.md};

    ${e=>{if(e.$type){const{color:r,borderColor:t}=ki(e);return g`
                background-color: ${r};
                background-clip: content-box;
                border-color: ${t};
            `}}}
`,_i=c(Yi)`
    right: calc(50% - 1.25rem);
    clip-path: inset(-3px 1.25rem -3px -3px);
`,Li=c(Yi)`
    left: calc(50% - 1.25rem);
    clip-path: inset(-3px -3px -3px 1.25rem);
`,ji=c.span`
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 2;
    cursor: ${e=>e.$interactive?"pointer":null===e.$interactive?"default":"not-allowed"};
`,Ti=c.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    ${$n["body-md-regular"]}
    transition: ${Cn["duration-150"]} ${Cn["ease-default"]};

    pointer-events: ${e=>e.$interactive||null===e.$interactive?"auto":"none"};

    ${e=>{const{$disabled:r,$type:t}=e;if(r)return"hidden"===t?g`
                    visibility: hidden;
                `:g`
                color: ${Dn["text-disabled-subtlest"]};
            `;switch(t){case"selected":return g`
                    font-weight: ${$n.Spec["weight-semibold"]};
                    color: ${Dn["text-selected"]};
                `;case"selected-hover":return g`
                    font-weight: ${$n.Spec["weight-semibold"]};
                    color: ${Dn["text-selected-hover"]};
                `;case"current":return g`
                    font-weight: ${$n.Spec["weight-semibold"]};
                    color: ${Dn["text-primary"]};
                `;case"hover":return g`
                    font-weight: ${$n.Spec["weight-semibold"]};
                    color: ${Dn["text-hover"]};
                `;case"unavailable":return g`
                    color: ${Dn["text-disabled-subtlest"]};
                `;case"hidden":return g`
                    visibility: hidden;
                `;default:return g`
                    color: ${Dn.text};
                `}}}

    &:focus {
        outline: none;
    }
`,Hi=c.div`
    position: absolute;
    width: 4px;
    height: 4px;
    background-color: currentColor;
    border-radius: 100%;
    bottom: 4px;
`,Wi=({bgLeft:t,bgRight:n,circleLeft:i,circleRight:a,labelType:s,disabled:d,interactive:c,currentDateIndicator:u,date:g,onSelect:b,onHover:h,onFocus:m,onHoverEnd:y,onKeyDown:f,focusDate:p,label:v,ariaHidden:x,tabIndex:w=-1,role:D="button"})=>{const $=F().isSame(g,"day"),C=!!p&&p.isSame(g,"day"),E=`${g.format("D MMMM YYYY dddd")}, ${d?"Unavailable":"Available"}`,B=o(null);l((()=>{var e;C&&B.current&&(null===(e=B.current)||void 0===e||e.focus())}),[C]);return e(Ai,{"aria-hidden":x,children:[r(Mi,{$type:t}),r(_i,{$type:i}),r(Oi,{$type:n}),r(Li,{$type:a}),r(ji,{$interactive:c,children:e(Ti,{ref:B,tabIndex:w,role:D,"aria-label":v||E,"aria-disabled":!c,"aria-selected":"selected"===s||"selected-hover"===s,$type:s,$disabled:d,$interactive:c,onClick:()=>{b(g)},onKeyDown:e=>{f&&f(e)},onMouseEnter:()=>{h(g)},onMouseLeave:()=>{y&&y(g)},onFocus:()=>{m&&m(g)},children:[g.date(),u&&$&&r(Hi,{$disabled:d})]})})]})},Ri=(e,r,t=!1)=>g`
        ${$n[`${e}-${r}`]}
        ${t?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `,Ii=e=>{if(e)return g`
            ${r=e,g`
    display: -webkit-box;
    -webkit-line-clamp: ${r};
    -webkit-box-orient: vertical;
    overflow: hidden;
`}
        `;var r},Ni=(e,r,t,n,i)=>g`
    ${Ri(e,r||"regular",n)}
    ${((e=!1,r=!1,t)=>r?g`
            display: block;
            ${Ii(t)}
        `:e?g`
            display: inline;
        `:g`
            display: block;
            ${Ii(t)}
        `)(t,n,i)}
    color: ${Dn.text};
`,Vi=c.div`
    ${e=>Ni(e.$textStyle,e.$weight,e.$inline,e.$paragraph,e.$maxLines)}
`,Pi=c.a`
    ${e=>g`
        ${Ri(e.$textStyle,e.$weight||"regular")}
        color: ${Dn.hyperlink};
        text-decoration: none;

        &:hover,
        &:active,
        &:focus {
            color: ${Dn["text-hover"]};
        }
    `}
`,Ui=c(y)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`;var Zi;!function(t){const i=(e,t,i)=>{const a=(n,i)=>{var{weight:a,inline:o,paragraph:s,maxLines:l}=n,d=f(n,["weight","inline","paragraph","maxLines"]);return r(Vi,Object.assign({ref:i,as:o?"span":e,$textStyle:t,$weight:a,$inline:o,$paragraph:s,$maxLines:l},d))};return a.displayName=`Typography.${i}`,n.forwardRef(a)};t.HeadingXXL=i("h1","heading-xxl","HeadingXXL"),t.HeadingXL=i("h2","heading-xl","HeadingXL"),t.HeadingLG=i("h3","heading-lg","HeadingLG"),t.HeadingMD=i("h4","heading-md","HeadingMD"),t.HeadingSM=i("h5","heading-sm","HeadingSM"),t.HeadingXS=i("h6","heading-xs","HeadingXS");const a=(e,t)=>{const i=(t,n)=>{var{weight:i,inline:a,paragraph:o,maxLines:s}=t,l=f(t,["weight","inline","paragraph","maxLines"]);return r(Vi,Object.assign({ref:n,as:a?"span":"p",$textStyle:e,$weight:i,$inline:a,$paragraph:o,$maxLines:s},l))};return i.displayName=`Typography.${t}`,n.forwardRef(i)};t.BodyBL=a("body-baseline","BodyBL"),t.BodyMD=a("body-md","BodyMD"),t.BodySM=a("body-sm","BodySM"),t.BodyXS=a("body-xs","BodyXS");const o=(t,i)=>{const a=(n,i)=>{var{weight:a,children:o,external:s}=n,l=f(n,["weight","children","external"]);return e(Pi,Object.assign({ref:i,$textStyle:t,$weight:a},l,{children:[o,s&&r(Ui,{})]}))};return a.displayName=`Typography.${i}`,n.forwardRef(a)};t.LinkBL=o("body-baseline","LinkBL"),t.LinkMD=o("body-md","LinkMD"),t.LinkSM=o("body-sm","LinkSM"),t.LinkXS=o("body-xs","LinkXS")}(Zi||(Zi={}));const Xi=1.25,Ki=e=>"minified"===e?12:40;c.div`
    position: relative;
    display: flex;
    align-items: center;
`,c(ai)`
    z-index: 2;
    position: absolute;
    bottom: ${({$variant:e})=>"default"===e?"0.25rem":"0rem"};
    background-color: ${Dn.bg};
    box-shadow: ${kn["md-strong"]};
    border-radius: 100%;
    padding: 0.5rem;
    width: 2rem;
    height: 2rem;

    ${e=>"right"===e.$direction?g`
                  right: 0;
              `:g`
                  left: 0;
              `}

    > div {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    &:focus {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
`,c(m)`
    width: 1rem;
    height: 1rem;
    color: ${Dn["icon-primary"]};
`,c(h)`
    font-size: 1rem;
    color: ${Dn["icon-primary"]};
`,c.div`
    overflow: hidden;
    flex-grow: 1;
    position: relative;
    height: ${({$variant:e})=>`${20+Ki(e)}px`};
`,c.div`
    position: relative;
    white-space: nowrap;
    height: ${Xi}rem;
`,c.div`
    display: flex;
    white-space: nowrap;
`,c.div`
    display: inline-block;
    width: ${({$variant:e})=>("minified"===e?12:40)+"px"};
    position: relative;
    border-left: ${En["width-010"]} ${En.solid}
        ${Dn["border-stronger"]};
    ${e=>{let r=0;switch(e.$variant){case"default":r=e.$isLongMarker?Xi:.625;break;case"minified":r=e.$isLongMarker?Xi:0;break;default:r=0}return g`
            height: ${r}rem;
        `}}
`,c(Zi.BodyXS)`
    color: ${Dn["text-subtle"]};
    position: absolute;
    bottom: 10%;
    left: 10%;
`;const Ji=c.div`
    ${e=>"vertical"===e.$type?g`
                display: flex;
                flex-grow: 1;
                align-items: center;
                justify-content: center;
                width: 100%;
                margin: 1px 0px;
            `:g`
                position: absolute;
                height: ${Ki(e.$variant)}px;
                width: ${e.$width}px;
                left: ${e.$left}px;
            `}
    background-color: ${({$bgColor:e})=>e};
    cursor: ${({$clickable:e})=>e?"pointer":"default"};

    ${e=>"stripes"===e.$styleType&&g`
            background: repeating-linear-gradient(
                135deg,
                ${e.$bgColor2||Dn["bg-strongest"]} 0px,
                ${e.$bgColor2||Dn["bg-strongest"]} 10px,
                ${e.$bgColor||Dn["bg-stronger"]} 10px,
                ${e.$bgColor||Dn["bg-stronger"]} 20px
            );
        `}
`;c.div`
    position: absolute;
    top: ${Xi}rem;
    height: ${({$variant:e})=>`${Ki(e)}px`};
    z-index: 1;
    border-right: ${En["width-010"]} ${En.solid}
        ${Dn["border-stronger"]};
`,c(Zi.BodyXS)`
    color: ${e=>e.$color||Dn.text(e)};
    position: absolute;
    bottom: 0;
    padding-left: 4px;
    padding-bottom: 4px;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;const Gi=c.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    user-select: none;
    margin-bottom: 0.188rem;
`,qi=c.div`
    ${$n["body-xs-semibold"]}
    color:${Dn.text};

    ${e=>e.$disabled&&g`
            color: ${Dn["text-disabled-subtlest"]};
        `};
`,Qi=c.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
`,ea=c.div`
    grid-column: 1 / -1;
    display: flex;
    min-height: 7.625rem;
`,ra=c.div`
    ${$n["body-xs-semibold"]}
    margin: 1rem 0rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 2.5rem;
    color: ${Dn.text};
    span {
        display: block;
    }
`,ta=c.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 1px;
`;F.extend(C);const na="YYYY-MM-DD",ia={id:"1",startTime:"",endTime:"",clickable:!1,styleAttributes:{color:"",styleType:"stripes",backgroundColor:Dn["bg-stronger"],backgroundColor2:Dn["bg-strongest"]}},aa=({calendarDate:t,disabledDates:n,selectedDate:i,onSelect:o,minDate:l,maxDate:d,slots:c,enableSelection:u=!0,onSlotClick:g})=>{const b=a((()=>z.generateDaysForCurrentWeek(t)),[t]),[h,m]=s(),y=e=>{m(e)},f=()=>{m(void 0)},p=e=>{const r=e.format(na),t=(e=>{const r=z.isWithinRange(e,l?F(l):void 0,d?F(d):void 0),t=!!n&&n.includes(e.format(na));return!r||t})(e),a=u&&!t,o=a&&h&&e.isSame(h,"day"),s=[i].includes(r),c={labelType:"available",interactive:u?a:null};return t&&(c.disabled=!0,c.labelType="unavailable"),s&&o?(c.labelType="selected-hover",c.circleLeft="selected-hover-outline",c.circleRight="selected-hover-outline"):s?(c.labelType="selected",c.circleLeft="selected-outline",c.circleRight="selected-outline"):o&&(c.labelType="hover",c.circleLeft="hover-subtle",c.circleRight="hover-subtle"),c};return e(Qi,{children:[b.map(((t,n)=>{const a=p(t);return e(Gi,{children:[r(Wi,Object.assign({date:t,calendarDate:F(i),onSelect:()=>{((e,r)=>{!r&&u&&o(e)})(t,!a.interactive)},onHover:y,onHoverEnd:f},a),`day-${n}`),r(qi,{$disabled:a.disabled,children:F(t).format("ddd")})]},`week-day-${n}`)})),r(ea,{children:b.map(((t,n)=>{const i=t.format(na),a=c&&(c[i]?c[i]:[ia]);return r(ta,{children:a&&a.map((t=>{const{id:n,startTime:a,endTime:o,clickable:s=!0,styleAttributes:l}=t,{color:d,styleType:c="default",backgroundColor:u,backgroundColor2:b}=l;return r(Ji,{$type:"vertical",$variant:"default",$styleType:c,$bgColor:u,$bgColor2:b,$clickable:s,onClick:()=>s&&((e,r)=>{null==g||g(e,r)})(i,t),children:e(ra,{style:{color:d},children:[r("span",{children:z.convertTo12HourFormat(a)}),o&&a&&r("span",{children:"-"}),r("span",{children:z.convertTo12HourFormat(o)})]})},n)}))},`wrapper-${n}`)}))},`week-cell-${t.format(na)}`)]})},oa=c.div`
    --header-bottom-spacing: 0.5rem;

    ${An.MaxWidth.sm} {
        --header-horizontal-inset: 1.25rem;
    }

    min-width: 18.5rem;
`,sa="YYYY-MM-DD",la=e=>{var{disabledDates:t,onWeekDisplayChange:n,onChange:i,value:a,minDate:d,maxDate:c,slots:u,showNavigationHeader:g=!0,enableSelection:b,onSlotClick:h,currentCalendarDate:m}=e,y=f(e,["disabledDates","onWeekDisplayChange","onChange","value","minDate","maxDate","slots","showNavigationHeader","enableSelection","onSlotClick","currentCalendarDate"]);const[p,v]=s(a),x=o(null),w=o(void 0);l((()=>{v(a)}),[a]);const D=e=>{const r=e.format(sa);v(r),i&&i(r)},$=(e,r)=>{h&&h(e,r)},C=e=>{if(n){const r={week:{firstDayOfWeek:e.startOf("week").format(sa),lastDayOfWeek:e.endOf("week").format(sa)},month:e.month()+1,year:e.year()};n(r)}};return r(oa,Object.assign({},y,{children:r(Si,{ref:x,dynamicHeight:!0,initialCalendarDate:H.toDayjs(p||m).endOf("week").format(sa),selectedStartDate:p,getLeftArrowDate:e=>e.subtract(1,"week"),getRightArrowDate:e=>e.add(1,"week"),isLeftArrowDisabled:e=>!!d&&F(e).subtract(1,"week").isBefore(d,"week"),isRightArrowDisabled:e=>!!c&&F(e).add(1,"week").isAfter(c,"week"),onCalendarDateChange:e=>{w.current&&w.current.isSame(e,"week")||C(e),w.current=e},showNavigationHeader:g,minDate:d,maxDate:c,getMonthHeaderLabel:e=>F(e).endOf("week").format("MMM"),getYearHeaderLabel:e=>F(e).endOf("week").format("YYYY"),children:({calendarDate:e})=>r(aa,{calendarDate:e,disabledDates:t,selectedDate:p,minDate:d,maxDate:c,onSelect:D,slots:u,enableSelection:b,onSlotClick:$})})}))};export{la as TimeSlotWeekView};
//# sourceMappingURL=index.js.map
