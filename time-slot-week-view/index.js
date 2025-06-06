import{jsxs as e,jsx as r,Fragment as t}from"react/jsx-runtime";import n,{useMemo as i,useRef as a,useState as o,useEffect as s,useImperativeHandle as l}from"react";import{ChevronDownIcon as d}from"@lifesg/react-icons/chevron-down";import{ChevronLeftIcon as c}from"@lifesg/react-icons/chevron-left";import{ChevronRightIcon as u}from"@lifesg/react-icons/chevron-right";import g,{keyframes as b,css as h}from"styled-components";import{ExternalIcon as m}from"@lifesg/react-icons/external";function y(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(t[n[i]]=e[n[i]])}return t}"function"==typeof SuppressedError&&SuppressedError;var f="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function p(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var v={exports:{}};v.exports=function(){var e=1e3,r=6e4,t=36e5,n="millisecond",i="second",a="minute",o="hour",s="day",l="week",d="month",c="quarter",u="year",g="date",b="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,y={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var r=["th","st","nd","rd"],t=e%100;return"["+e+(r[(t-20)%10]||r[t]||r[0])+"]"}},f=function(e,r,t){var n=String(e);return!n||n.length>=r?e:""+Array(r+1-n.length).join(t)+e},p={s:f,z:function(e){var r=-e.utcOffset(),t=Math.abs(r),n=Math.floor(t/60),i=t%60;return(r<=0?"+":"-")+f(n,2,"0")+":"+f(i,2,"0")},m:function e(r,t){if(r.date()<t.date())return-e(t,r);var n=12*(t.year()-r.year())+(t.month()-r.month()),i=r.clone().add(n,d),a=t-i<0,o=r.clone().add(n+(a?-1:1),d);return+(-(n+(t-i)/(a?i-o:o-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:s,D:g,h:o,m:a,s:i,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",x={};x[v]=y;var F="$isDayjsObject",w=function(e){return e instanceof C||!(!e||!e[F])},D=function e(r,t,n){var i;if(!r)return v;if("string"==typeof r){var a=r.toLowerCase();x[a]&&(i=a),t&&(x[a]=t,i=a);var o=r.split("-");if(!i&&o.length>1)return e(o[0])}else{var s=r.name;x[s]=r,i=s}return!n&&i&&(v=i),i||!n&&v},$=function(e,r){if(w(e))return e.clone();var t="object"==typeof r?r:{};return t.date=e,t.args=arguments,new C(t)},E=p;E.l=D,E.i=w,E.w=function(e,r){return $(e,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var C=function(){function y(e){this.$L=D(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[F]=!0}var f=y.prototype;return f.parse=function(e){this.$d=function(e){var r=e.date,t=e.utc;if(null===r)return new Date(NaN);if(E.u(r))return new Date;if(r instanceof Date)return new Date(r);if("string"==typeof r&&!/Z$/i.test(r)){var n=r.match(h);if(n){var i=n[2]-1||0,a=(n[7]||"0").substring(0,3);return t?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)}}return new Date(r)}(e),this.init()},f.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},f.$utils=function(){return E},f.isValid=function(){return!(this.$d.toString()===b)},f.isSame=function(e,r){var t=$(e);return this.startOf(r)<=t&&t<=this.endOf(r)},f.isAfter=function(e,r){return $(e)<this.startOf(r)},f.isBefore=function(e,r){return this.endOf(r)<$(e)},f.$g=function(e,r,t){return E.u(e)?this[r]:this.set(t,e)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(e,r){var t=this,n=!!E.u(r)||r,c=E.p(e),b=function(e,r){var i=E.w(t.$u?Date.UTC(t.$y,r,e):new Date(t.$y,r,e),t);return n?i:i.endOf(s)},h=function(e,r){return E.w(t.toDate()[e].apply(t.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(r)),t)},m=this.$W,y=this.$M,f=this.$D,p="set"+(this.$u?"UTC":"");switch(c){case u:return n?b(1,0):b(31,11);case d:return n?b(1,y):b(0,y+1);case l:var v=this.$locale().weekStart||0,x=(m<v?m+7:m)-v;return b(n?f-x:f+(6-x),y);case s:case g:return h(p+"Hours",0);case o:return h(p+"Minutes",1);case a:return h(p+"Seconds",2);case i:return h(p+"Milliseconds",3);default:return this.clone()}},f.endOf=function(e){return this.startOf(e,!1)},f.$set=function(e,r){var t,l=E.p(e),c="set"+(this.$u?"UTC":""),b=(t={},t[s]=c+"Date",t[g]=c+"Date",t[d]=c+"Month",t[u]=c+"FullYear",t[o]=c+"Hours",t[a]=c+"Minutes",t[i]=c+"Seconds",t[n]=c+"Milliseconds",t)[l],h=l===s?this.$D+(r-this.$W):r;if(l===d||l===u){var m=this.clone().set(g,1);m.$d[b](h),m.init(),this.$d=m.set(g,Math.min(this.$D,m.daysInMonth())).$d}else b&&this.$d[b](h);return this.init(),this},f.set=function(e,r){return this.clone().$set(e,r)},f.get=function(e){return this[E.p(e)]()},f.add=function(n,c){var g,b=this;n=Number(n);var h=E.p(c),m=function(e){var r=$(b);return E.w(r.date(r.date()+Math.round(e*n)),b)};if(h===d)return this.set(d,this.$M+n);if(h===u)return this.set(u,this.$y+n);if(h===s)return m(1);if(h===l)return m(7);var y=(g={},g[a]=r,g[o]=t,g[i]=e,g)[h]||1,f=this.$d.getTime()+n*y;return E.w(f,this)},f.subtract=function(e,r){return this.add(-1*e,r)},f.format=function(e){var r=this,t=this.$locale();if(!this.isValid())return t.invalidDate||b;var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=E.z(this),a=this.$H,o=this.$m,s=this.$M,l=t.weekdays,d=t.months,c=t.meridiem,u=function(e,t,i,a){return e&&(e[t]||e(r,n))||i[t].slice(0,a)},g=function(e){return E.s(a%12||12,e,"0")},h=c||function(e,r,t){var n=e<12?"AM":"PM";return t?n.toLowerCase():n};return n.replace(m,(function(e,n){return n||function(e){switch(e){case"YY":return String(r.$y).slice(-2);case"YYYY":return E.s(r.$y,4,"0");case"M":return s+1;case"MM":return E.s(s+1,2,"0");case"MMM":return u(t.monthsShort,s,d,3);case"MMMM":return u(d,s);case"D":return r.$D;case"DD":return E.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return u(t.weekdaysMin,r.$W,l,2);case"ddd":return u(t.weekdaysShort,r.$W,l,3);case"dddd":return l[r.$W];case"H":return String(a);case"HH":return E.s(a,2,"0");case"h":return g(1);case"hh":return g(2);case"a":return h(a,o,!0);case"A":return h(a,o,!1);case"m":return String(o);case"mm":return E.s(o,2,"0");case"s":return String(r.$s);case"ss":return E.s(r.$s,2,"0");case"SSS":return E.s(r.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},f.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},f.diff=function(n,g,b){var h,m=this,y=E.p(g),f=$(n),p=(f.utcOffset()-this.utcOffset())*r,v=this-f,x=function(){return E.m(m,f)};switch(y){case u:h=x()/12;break;case d:h=x();break;case c:h=x()/3;break;case l:h=(v-p)/6048e5;break;case s:h=(v-p)/864e5;break;case o:h=v/t;break;case a:h=v/r;break;case i:h=v/e;break;default:h=v}return b?h:E.a(h)},f.daysInMonth=function(){return this.endOf(d).$D},f.$locale=function(){return x[this.$L]},f.locale=function(e,r){if(!e)return this.$L;var t=this.clone(),n=D(e,r,!0);return n&&(t.$L=n),t},f.clone=function(){return E.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},y}(),B=C.prototype;return $.prototype=B,[["$ms",n],["$s",i],["$m",a],["$H",o],["$W",s],["$M",d],["$y",u],["$D",g]].forEach((function(e){B[e[1]]=function(r){return this.$g(r,e[0],e[1])}})),$.extend=function(e,r){return e.$i||(e(r,C,$),e.$i=!0),$},$.locale=D,$.isDayjs=w,$.unix=function(e){return $(1e3*e)},$.en=x[v],$.Ls=x,$.p={},$}();var x=p(v.exports),F={exports:{}};F.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,t=/\d\d/,n=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,a={},o=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(r){this[e]=+r}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var r=e.match(/([+-]|\d\d)/g),t=60*r[1]+(+r[2]||0);return 0===t?0:"+"===r[0]?-t:t}(e)}],d=function(e){var r=a[e];return r&&(r.indexOf?r:r.s.concat(r.f))},c=function(e,r){var t,n=a.meridiem;if(n){for(var i=1;i<=24;i+=1)if(e.indexOf(n(i,0,r))>-1){t=i>12;break}}else t=e===(r?"pm":"PM");return t},u={A:[i,function(e){this.afternoon=c(e,!1)}],a:[i,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[t,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[t,s("day")],Do:[i,function(e){var r=a.ordinal,t=e.match(/\d+/);if(this.day=t[0],r)for(var n=1;n<=31;n+=1)r(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[t,s("month")],MMM:[i,function(e){var r=d("months"),t=(d("monthsShort")||r.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],MMMM:[i,function(e){var r=d("months").indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],Y:[/[+-]?\d+/,s("year")],YY:[t,function(e){this.year=o(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function g(t){var n,i;n=t,i=a&&a.formats;for(var o=(t=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(r,t,n){var a=n&&n.toUpperCase();return t||i[n]||e[n]||i[a].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,r,t){return r||t.slice(1)}))}))).match(r),s=o.length,l=0;l<s;l+=1){var d=o[l],c=u[d],g=c&&c[0],b=c&&c[1];o[l]=b?{regex:g,parser:b}:d.replace(/^\[|\]$/g,"")}return function(e){for(var r={},t=0,n=0;t<s;t+=1){var i=o[t];if("string"==typeof i)n+=i.length;else{var a=i.regex,l=i.parser,d=e.slice(n),c=a.exec(d)[0];l.call(r,c),e=e.replace(c,"")}}return function(e){var r=e.afternoon;if(void 0!==r){var t=e.hours;r?t<12&&(e.hours+=12):12===t&&(e.hours=0),delete e.afternoon}}(r),r}}return function(e,r,t){t.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(o=e.parseTwoDigitYear);var n=r.prototype,i=n.parse;n.parse=function(e){var r=e.date,n=e.utc,o=e.args;this.$u=n;var s=o[1];if("string"==typeof s){var l=!0===o[2],d=!0===o[3],c=l||d,u=o[2];d&&(u=o[2]),a=this.$locale(),!l&&u&&(a=t.Ls[u]),this.$d=function(e,r,t){try{if(["x","X"].indexOf(r)>-1)return new Date(("X"===r?1e3:1)*e);var n=g(r)(e),i=n.year,a=n.month,o=n.day,s=n.hours,l=n.minutes,d=n.seconds,c=n.milliseconds,u=n.zone,b=new Date,h=o||(i||a?1:b.getDate()),m=i||b.getFullYear(),y=0;i&&!a||(y=a>0?a-1:b.getMonth());var f=s||0,p=l||0,v=d||0,x=c||0;return u?new Date(Date.UTC(m,y,h,f,p,v,x+60*u.offset*1e3)):t?new Date(Date.UTC(m,y,h,f,p,v,x)):new Date(m,y,h,f,p,v,x)}catch(e){return new Date("")}}(r,s,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&r!=this.format(s)&&(this.$d=new Date("")),a={}}else if(s instanceof Array)for(var b=s.length,h=1;h<=b;h+=1){o[1]=s[h-1];var m=t.apply(this,o);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}h===b&&(this.$d=new Date(""))}else i.call(this,e)}}}();var w=p(F.exports),D={exports:{}};D.exports=function(e,r,t){r.prototype.isBetween=function(e,r,n,i){var a=t(e),o=t(r),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(a,n):!this.isBefore(a,n))&&(l?this.isBefore(o,n):!this.isAfter(o,n))||(s?this.isBefore(a,n):!this.isAfter(a,n))&&(l?this.isAfter(o,n):!this.isBefore(o,n))}};var $=p(D.exports),E={exports:{}};E.exports=function(e,r){r.prototype.isSameOrAfter=function(e,r){return this.isSame(e,r)||this.isAfter(e,r)}};var C=p(E.exports),B={exports:{}};B.exports=function(e,r){r.prototype.isSameOrBefore=function(e,r){return this.isSame(e,r)||this.isBefore(e,r)}};var A,k,S,z=p(B.exports),M={exports:{}},O=p(M.exports=(A={year:0,month:1,day:2,hour:3,minute:4,second:5},k={},function(e,r,t){var n,i=function(e,r,t){void 0===t&&(t={});var n=new Date(e),i=function(e,r){void 0===r&&(r={});var t=r.timeZoneName||"short",n=e+"|"+t,i=k[n];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:t}),k[n]=i),i}(r,t);return i.formatToParts(n)},a=function(e,r){for(var n=i(e,r),a=[],o=0;o<n.length;o+=1){var s=n[o],l=s.type,d=s.value,c=A[l];c>=0&&(a[c]=parseInt(d,10))}var u=a[3],g=24===u?0:u,b=a[0]+"-"+a[1]+"-"+a[2]+" "+g+":"+a[4]+":"+a[5]+":000",h=+e;return(t.utc(b).valueOf()-(h-=h%1e3))/6e4},o=r.prototype;o.tz=function(e,r){void 0===e&&(e=n);var i=this.utcOffset(),a=this.toDate(),o=a.toLocaleString("en-US",{timeZone:e}),s=Math.round((a-new Date(o))/1e3/60),l=t(o,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(a.getTimezoneOffset()/15)-s,!0);if(r){var d=l.utcOffset();l=l.add(i-d,"minute")}return l.$x.$timezone=e,l},o.offsetName=function(e){var r=this.$x.$timezone||t.tz.guess(),n=i(this.valueOf(),r,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=o.startOf;o.startOf=function(e,r){if(!this.$x||!this.$x.$timezone)return s.call(this,e,r);var n=t(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,e,r).tz(this.$x.$timezone,!0)},t.tz=function(e,r,i){var o=i&&r,s=i||r||n,l=a(+t(),s);if("string"!=typeof e)return t(e).tz(s);var d=function(e,r,t){var n=e-60*r*1e3,i=a(n,t);if(r===i)return[n,r];var o=a(n-=60*(i-r)*1e3,t);return i===o?[n,i]:[e-60*Math.min(i,o)*1e3,Math.max(i,o)]}(t.utc(e,o).valueOf(),l,s),c=d[0],u=d[1],g=t(c).utcOffset(u);return g.$x.$timezone=s,g},t.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},t.tz.setDefault=function(e){n=e}}));x.extend($),x.extend(z),x.extend(C),x.extend(w),x.extend(O),function(e){e.generateDays=e=>{const r=e.startOf("month"),t=x(r).startOf("week");return Y(t).map((e=>_(e)))},e.generateDaysForCurrentWeek=e=>{const r=e.startOf("week");return _(r)},e.generateMonths=e=>{const r=[];for(let t=0;t<12;t++){const n=e.month(t);r.push(x(n))}return r},e.generateDecadeOfYears=e=>{const r=e.year(),t=10*Math.floor(r/10),n=e.year(t),i=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)i.push(n.add(e,"year"));return i},e.getStartEndDecade=e=>{const r=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:r,endDecade:+x(`${r+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const r=x(e,"HH:mm");return r.isValid()?r.format("h:mm a"):""},e.isWithinRange=(e,r,t,n="day")=>!r&&!t||(r&&t?e.isBetween(r,t,n,"[]"):r?e.isSameOrAfter(r,n):e.isSameOrBefore(t,n)),e.isPreviousMonthWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"month"),t,void 0,"month"),e.isPreviousYearWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"year"),t,void 0,"year"),e.isPreviousDecadeWithinRange=(r,t)=>{const{beginDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).subtract(1,"year"),t,void 0,"year")},e.isNextMonthWithinRange=(r,t)=>e.isWithinRange(r.add(1,"month"),void 0,t,"month"),e.isNextYearWithinRange=(r,t)=>e.isWithinRange(r.add(1,"year"),void 0,t,"year"),e.isNextDecadeWithinRange=(r,t)=>{const{endDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).add(1,"year"),void 0,t,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,r)=>({start:e.format("YYYY-MM-DD"),end:e.add(r-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(r,t,n,i)=>{const a=e.isWithinRange(r,n?x(n):void 0,i?x(i):void 0),o=t&&t.includes(r.format("YYYY-MM-DD"));return!a||!!o}}(S||(S={}));const Y=e=>{const r=[e];for(let t=1;t<6;t++){const n=e.add(t,"week");r.push(n)}return r},_=e=>{const r=[];for(let t=0;t<7;t++){const n=e.add(t,"day");r.push(n)}return r},L=[1,3,5,7,8,10,12],T=[4,6,9,11];var j,H,R,I;!function(e){e.clampDay=(r,t,n)=>{const i=parseInt(r),a=parseInt(t),o=parseInt(n);return 0==i?"1":L.includes(a)?Math.min(i,31).toString():T.includes(a)?Math.min(i,30).toString():2===a?e.isLeapYear(o)?Math.min(i,29).toString():Math.min(i,28).toString():r},e.clampMonth=e=>{const r=parseInt(e);return 0==r?"1":r>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,r,t="HH:mm")=>{const n=x(e,t);return x(r,t).diff(n,"minute")},e.toDayjs=e=>e?x(e):x(),e.addMinutesToTime=(e,r,t="HH:mm")=>x(e,t).add(r,"minutes").format(t),e.isSame=(e,r,t="day")=>x(e).isSame(x(r),t)}(j||(j={})),function(e){e.isDateDisabled=(e,r)=>{const{disabledDates:t,minDate:n,maxDate:i}=r;return!!(e&&t&&t.length&&t.includes(e))||(!(!n||!x(e).isBefore(n,"day"))||!(!i||!x(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(x(e).isValid())return e}return""}}(H||(H={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(R||(R={})),function(e){e.transformWithSpaces=(e,r)=>{const t="(.{"+r+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(t,"g"),"$1 ").trim()},e.padValue=(e,r)=>{if("0"===e)return r?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,r)=>{const t=Math.floor(r/9);return e.length>=2*t||1===e.split(" ").length&&e.length>t},e.truncateOneLine=(e,r,t,n,i=8)=>{let a=0;r>t&&(a=Math.floor((r-t)/i));const o=n+a;if(o<e.length){const r=Math.floor(o/2);return e.substring(0,r)+" ... "+e.substring(e.length-r,e.length)}return e},e.truncateTwoLines=(e,r,t,n=1.2)=>{const i=Math.floor(2*r/(.6*t))*(2/n);if(e.length<=i)return e;const a=Math.floor(.6*i),o=Math.floor(.2*i);return`${e.substring(0,a)}...${e.substring(e.length-o)}`},e.getTextWidth=(r,t)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=t;return n.measureText(r).width},e.maskValue=(e,t)=>{if(!e)return e;const{maskRange:n,unmaskRange:i,maskChar:a="•",maskRegex:o,maskTransformer:s}=t;if(s)return s(e);if(o)return e.replace(o,a);if(n){const{startIndex:t,endIndex:i}=r(n[0],n[1]);return e.substring(0,t)+a.repeat(e.substring(t,i+1).length)+e.substring(i+1)}if(i){const{startIndex:t,endIndex:n}=r(i[0],i[1]);return a.repeat(e.substring(0,t).length)+e.substring(t,n+1)+a.repeat(e.substring(n+1).length)}return e};const r=(e,r)=>e<r?{startIndex:e,endIndex:r}:{startIndex:r,endIndex:e},t=new Intl.PluralRules("en",{type:"ordinal"}),n=new Map([["one","st"],["two","nd"],["few","rd"],["other","th"]]);e.formatOrdinal=e=>{const r=t.select(e);return`${e}${n.get(r)}`}}(I||(I={}));const W=g.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,N=b`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,P=g.div`
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
    animation: ${N} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,U=g(P)`
    animation-delay: -0.45s;
`,V=g(P)`
    animation-delay: -0.3s;
`,Z=g(P)`
    animation-delay: -0.15s;
`;var X=Array.isArray,K="object"==typeof f&&f&&f.Object===Object&&f,J="object"==typeof self&&self&&self.Object===Object&&self,G=K||J||Function("return this")(),q=G.Symbol,Q=q,ee=Object.prototype,re=ee.hasOwnProperty,te=ee.toString,ne=Q?Q.toStringTag:void 0;var ie=function(e){var r=re.call(e,ne),t=e[ne];try{e[ne]=void 0;var n=!0}catch(e){}var i=te.call(e);return n&&(r?e[ne]=t:delete e[ne]),i},ae=Object.prototype.toString;var oe=ie,se=function(e){return ae.call(e)},le=q?q.toStringTag:void 0;var de=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":le&&le in Object(e)?oe(e):se(e)};var ce=de,ue=function(e){return null!=e&&"object"==typeof e};var ge=function(e){return"symbol"==typeof e||ue(e)&&"[object Symbol]"==ce(e)},be=X,he=ge,me=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ye=/^\w*$/;var fe=function(e,r){if(be(e))return!1;var t=typeof e;return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=e&&!he(e))||(ye.test(e)||!me.test(e)||null!=r&&e in Object(r))};var pe=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},ve=de,xe=pe;var Fe,we=function(e){if(!xe(e))return!1;var r=ve(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},De=G["__core-js_shared__"],$e=(Fe=/[^.]+$/.exec(De&&De.keys&&De.keys.IE_PROTO||""))?"Symbol(src)_1."+Fe:"";var Ee=function(e){return!!$e&&$e in e},Ce=Function.prototype.toString;var Be=we,Ae=Ee,ke=pe,Se=function(e){if(null!=e){try{return Ce.call(e)}catch(e){}try{return e+""}catch(e){}}return""},ze=/^\[object .+?Constructor\]$/,Me=Function.prototype,Oe=Object.prototype,Ye=Me.toString,_e=Oe.hasOwnProperty,Le=RegExp("^"+Ye.call(_e).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Te=function(e,r){return null==e?void 0:e[r]},je=function(e){return!(!ke(e)||Ae(e))&&(Be(e)?Le:ze).test(Se(e))},He=Te;var Re=function(e,r){var t=He(e,r);return je(t)?t:void 0},Ie=Re(Object,"create"),We=Ie;var Ne=function(){this.__data__=We?We(null):{},this.size=0};var Pe=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},Ue=Ie,Ve=Object.prototype.hasOwnProperty;var Ze=function(e){var r=this.__data__;if(Ue){var t=r[e];return"__lodash_hash_undefined__"===t?void 0:t}return Ve.call(r,e)?r[e]:void 0},Xe=Ie,Ke=Object.prototype.hasOwnProperty;var Je=function(e){var r=this.__data__;return Xe?void 0!==r[e]:Ke.call(r,e)},Ge=Ie;var qe=function(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=Ge&&void 0===r?"__lodash_hash_undefined__":r,this},Qe=Ne,er=Pe,rr=Ze,tr=Je,nr=qe;function ir(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}ir.prototype.clear=Qe,ir.prototype.delete=er,ir.prototype.get=rr,ir.prototype.has=tr,ir.prototype.set=nr;var ar=ir;var or=function(){this.__data__=[],this.size=0};var sr=function(e,r){return e===r||e!=e&&r!=r};var lr=function(e,r){for(var t=e.length;t--;)if(sr(e[t][0],r))return t;return-1},dr=lr,cr=Array.prototype.splice;var ur=function(e){var r=this.__data__,t=dr(r,e);return!(t<0)&&(t==r.length-1?r.pop():cr.call(r,t,1),--this.size,!0)},gr=lr;var br=function(e){var r=this.__data__,t=gr(r,e);return t<0?void 0:r[t][1]},hr=lr;var mr=function(e){return hr(this.__data__,e)>-1},yr=lr;var fr=function(e,r){var t=this.__data__,n=yr(t,e);return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this},pr=or,vr=ur,xr=br,Fr=mr,wr=fr;function Dr(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Dr.prototype.clear=pr,Dr.prototype.delete=vr,Dr.prototype.get=xr,Dr.prototype.has=Fr,Dr.prototype.set=wr;var $r=Dr,Er=Re(G,"Map"),Cr=ar,Br=$r,Ar=Er;var kr=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var Sr=function(e,r){var t=e.__data__;return kr(r)?t["string"==typeof r?"string":"hash"]:t.map},zr=Sr;var Mr=function(e){var r=zr(this,e).delete(e);return this.size-=r?1:0,r},Or=Sr;var Yr=function(e){return Or(this,e).get(e)},_r=Sr;var Lr=function(e){return _r(this,e).has(e)},Tr=Sr;var jr=function(e,r){var t=Tr(this,e),n=t.size;return t.set(e,r),this.size+=t.size==n?0:1,this},Hr=function(){this.size=0,this.__data__={hash:new Cr,map:new(Ar||Br),string:new Cr}},Rr=Mr,Ir=Yr,Wr=Lr,Nr=jr;function Pr(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Pr.prototype.clear=Hr,Pr.prototype.delete=Rr,Pr.prototype.get=Ir,Pr.prototype.has=Wr,Pr.prototype.set=Nr;var Ur=Pr;function Vr(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var t=function(){var n=arguments,i=r?r.apply(this,n):n[0],a=t.cache;if(a.has(i))return a.get(i);var o=e.apply(this,n);return t.cache=a.set(i,o)||a,o};return t.cache=new(Vr.Cache||Ur),t}Vr.Cache=Ur;var Zr=Vr;var Xr=function(e){var r=Zr(e,(function(e){return 500===t.size&&t.clear(),e})),t=r.cache;return r},Kr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Jr=/\\(\\)?/g,Gr=Xr((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(Kr,(function(e,t,n,i){r.push(n?i.replace(Jr,"$1"):t||e)})),r}));var qr=function(e,r){for(var t=-1,n=null==e?0:e.length,i=Array(n);++t<n;)i[t]=r(e[t],t,e);return i},Qr=X,et=ge,rt=q?q.prototype:void 0,tt=rt?rt.toString:void 0;var nt=function e(r){if("string"==typeof r)return r;if(Qr(r))return qr(r,e)+"";if(et(r))return tt?tt.call(r):"";var t=r+"";return"0"==t&&1/r==-1/0?"-0":t},it=nt;var at=X,ot=fe,st=Gr,lt=function(e){return null==e?"":it(e)};var dt=ge;var ct=function(e,r){return at(e)?e:ot(e,r)?[e]:st(lt(e))},ut=function(e){if("string"==typeof e||dt(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r};var gt=function(e,r){for(var t=0,n=(r=ct(r,e)).length;null!=e&&t<n;)e=e[ut(r[t++])];return t&&t==n?e:void 0};var bt=p((function(e,r,t){var n=null==e?void 0:gt(e,r);return void 0===n?t:n}));const ht=(e,r,t)=>bt(t,r)||bt(e,r),mt=(e,r)=>{const t=r||e.defaultValue;return bt(e.collections,t)},yt={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},ft=e=>r=>{var t;const n=r.theme,i=mt(yt,null==n?void 0:n.borderScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.border)?`${ht(i,e,n.overrides.border)}px`:`${i[e]}px`},pt={"width-005":ft("width-005"),"width-010":ft("width-010"),"width-020":ft("width-020"),"width-040":ft("width-040"),solid:(vt="solid",e=>{var r;const t=e.theme,n=mt(yt,null==t?void 0:t.borderScheme),i=(null===(r=null==t?void 0:t.overrides)||void 0===r?void 0:r.border)?ht(n,vt,t.overrides.border):n[vt];return"function"==typeof i?i(e):i})};var vt;const xt={collections:{lifesg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},bookingsg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},rbs:{"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},mylegacy:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ccube:{"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},oneservice:{"brand-10":"#001A19","brand-20":"#002D2B","brand-30":"#00413D","brand-40":"#005954","brand-50":"#00756F","brand-60":"#03A098","brand-70":"#55BFBA","brand-80":"#92D6D2","brand-90":"#BFE7E5","brand-95":"#DDF2F1","brand-100":"#F4FBFA","primary-10":"#09191D","primary-20":"#102B34","primary-30":"#173D49","primary-40":"#205666","primary-50":"#2A7086","primary-60":"#2A7086","primary-70":"#8CB6C2","primary-80":"#B2CED6","primary-90":"#D1E2E7","primary-95":"#E8F0F3","primary-100":"#F9F8FC","secondary-10":"#001731","secondary-20":"#002752","secondary-30":"#003874","secondary-40":"#004D9F","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},pa:{"brand-10":"#881317","brand-20":"#B5191E","brand-30":"#B5040A","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},a11yplayground:{"brand-10":"#170F39","brand-20":"#281C62","brand-30":"#38268B","brand-40":"#4D34BF","brand-50":"#5735DF","brand-60":"#9986F9","brand-70":"#B2A5F8","brand-80":"#CDC2FA","brand-90":"#E2DCFC","brand-95":"#EFEDFE","brand-100":"#FAF8FD","primary-10":"#170F39","primary-20":"#281C62","primary-30":"#38268B","primary-40":"#4D34BF","primary-50":"#5735DF","primary-60":"#9986F9","primary-70":"#B2A5F8","primary-80":"#CDC2FA","primary-90":"#E2DCFC","primary-95":"#EFEDFE","primary-100":"#FAF8FD","secondary-10":"#251204","secondary-20":"#401F08","secondary-30":"#5B2C0B","secondary-40":"#7E3D0F","secondary-50":"#B04900","secondary-60":"#E26E1C","secondary-70":"#FF9445","secondary-80":"#FFBB8E","secondary-90":"#FFD9BF","secondary-95":"#FFECDF","secondary-100":"#FFF8F3","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#031B15","success-20":"#082D24","success-30":"#094134","success-40":"#0D5947","success-50":"#10755E","success-60":"#16A181","success-70":"#1EC59D","success-80":"#6FDDC2","success-90":"#AFECDE","success-95":"#D5F5ED","success-100":"#F1FCF9","warning-10":"#1F1500","warning-20":"#362500","warning-30":"#4D3501","warning-40":"#6A4801","warning-50":"#8B6001","warning-60":"#BF8301","warning-70":"#EAA102","warning-80":"#FFBF34","warning-90":"#FFDC8F","warning-95":"#FFEDC7","warning-100":"#FFF8EA","error-10":"#270F10","error-20":"#441B1B","error-30":"#612627","error-40":"#853535","error-50":"#AF4546","error-60":"#EC6162","error-70":"#F29696","error-80":"#F7BBBC","error-90":"#FAD8D8","error-95":"#FCEAEA","error-100":"#FEF7F7","info-10":"#0F1627","info-20":"#1B2745","info-30":"#273763","info-40":"#354D88","info-50":"#4665B3","info-60":"#618AF6","info-70":"#8DADFF","info-80":"#B4C9FF","info-90":"#D3DFFF","info-95":"#E9EFFF","info-100":"#F5F8FF",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"}},defaultValue:"lifesg"},Ft=e=>r=>{var t;const n=r.theme,i=mt(xt,null==n?void 0:n.colourScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.primitiveColour)?ht(i,e,n.overrides.primitiveColour):i[e]},wt={"brand-10":Ft("brand-10"),"brand-20":Ft("brand-20"),"brand-30":Ft("brand-30"),"brand-40":Ft("brand-40"),"brand-50":Ft("brand-50"),"brand-60":Ft("brand-60"),"brand-70":Ft("brand-70"),"brand-80":Ft("brand-80"),"brand-90":Ft("brand-90"),"brand-95":Ft("brand-95"),"brand-100":Ft("brand-100"),"primary-10":Ft("primary-10"),"primary-20":Ft("primary-20"),"primary-30":Ft("primary-30"),"primary-40":Ft("primary-40"),"primary-50":Ft("primary-50"),"primary-60":Ft("primary-60"),"primary-70":Ft("primary-70"),"primary-80":Ft("primary-80"),"primary-90":Ft("primary-90"),"primary-95":Ft("primary-95"),"primary-100":Ft("primary-100"),"secondary-10":Ft("secondary-10"),"secondary-20":Ft("secondary-20"),"secondary-30":Ft("secondary-30"),"secondary-40":Ft("secondary-40"),"secondary-50":Ft("secondary-50"),"secondary-60":Ft("secondary-60"),"secondary-70":Ft("secondary-70"),"secondary-80":Ft("secondary-80"),"secondary-90":Ft("secondary-90"),"secondary-95":Ft("secondary-95"),"secondary-100":Ft("secondary-100"),"neutral-10":Ft("neutral-10"),"neutral-20":Ft("neutral-20"),"neutral-30":Ft("neutral-30"),"neutral-40":Ft("neutral-40"),"neutral-50":Ft("neutral-50"),"neutral-60":Ft("neutral-60"),"neutral-70":Ft("neutral-70"),"neutral-80":Ft("neutral-80"),"neutral-90":Ft("neutral-90"),"neutral-95":Ft("neutral-95"),"neutral-100":Ft("neutral-100"),"success-10":Ft("success-10"),"success-20":Ft("success-20"),"success-30":Ft("success-30"),"success-40":Ft("success-40"),"success-50":Ft("success-50"),"success-60":Ft("success-60"),"success-70":Ft("success-70"),"success-80":Ft("success-80"),"success-90":Ft("success-90"),"success-95":Ft("success-95"),"success-100":Ft("success-100"),"warning-10":Ft("warning-10"),"warning-20":Ft("warning-20"),"warning-30":Ft("warning-30"),"warning-40":Ft("warning-40"),"warning-50":Ft("warning-50"),"warning-60":Ft("warning-60"),"warning-70":Ft("warning-70"),"warning-80":Ft("warning-80"),"warning-90":Ft("warning-90"),"warning-95":Ft("warning-95"),"warning-100":Ft("warning-100"),"error-10":Ft("error-10"),"error-20":Ft("error-20"),"error-30":Ft("error-30"),"error-40":Ft("error-40"),"error-50":Ft("error-50"),"error-60":Ft("error-60"),"error-70":Ft("error-70"),"error-80":Ft("error-80"),"error-90":Ft("error-90"),"error-95":Ft("error-95"),"error-100":Ft("error-100"),"info-10":Ft("info-10"),"info-20":Ft("info-20"),"info-30":Ft("info-30"),"info-40":Ft("info-40"),"info-50":Ft("info-50"),"info-60":Ft("info-60"),"info-70":Ft("info-70"),"info-80":Ft("info-80"),"info-90":Ft("info-90"),"info-95":Ft("info-95"),"info-100":Ft("info-100"),white:Ft("white"),black:Ft("black"),"primary-inverse":Ft("primary-inverse")},Dt={text:Ft("neutral-20"),"text-subtle":Ft("neutral-30"),"text-subtler":Ft("neutral-50"),"text-subtlest":Ft("neutral-60"),"text-primary":Ft("primary-50"),"text-hover":Ft("primary-40"),"text-selected":Ft("primary-50"),"text-selected-hover":Ft("primary-40"),"text-disabled":Ft("neutral-50"),"text-disabled-subtle":Ft("neutral-60"),"text-disabled-subtlest":Ft("neutral-80"),"text-selected-disabled":Ft("neutral-20"),"text-success":Ft("success-40"),"text-warning":Ft("warning-40"),"text-error":Ft("error-40"),"text-info":Ft("info-40"),"text-inverse":Ft("white"),icon:Ft("neutral-50"),"icon-subtle":Ft("neutral-60"),"icon-strongest":Ft("neutral-20"),"icon-primary":Ft("primary-50"),"icon-primary-subtle":Ft("primary-60"),"icon-primary-subtlest":Ft("primary-70"),"icon-hover":Ft("primary-40"),"icon-selected":Ft("primary-50"),"icon-selected-hover":Ft("primary-40"),"icon-disabled":Ft("neutral-50"),"icon-disabled-subtle":Ft("neutral-60"),"icon-selected-disabled":Ft("neutral-60"),"icon-success":Ft("success-50"),"icon-warning":Ft("warning-60"),"icon-error":Ft("error-50"),"icon-error-strong":Ft("error-40"),"icon-info":Ft("info-50"),"icon-inverse":Ft("white"),"icon-primary-inverse":Ft("primary-inverse"),border:Ft("neutral-90"),"border-strong":Ft("neutral-70"),"border-stronger":Ft("neutral-50"),"border-primary":Ft("primary-50"),"border-primary-subtle":Ft("primary-60"),"border-hover":Ft("primary-90"),"border-hover-strong":Ft("primary-60"),"border-selected":Ft("primary-50"),"border-selected-subtle":Ft("primary-70"),"border-selected-subtlest":Ft("primary-90"),"border-selected-hover":Ft("primary-40"),"border-focus":Ft("primary-60"),"border-focus-strong":Ft("primary-50"),"border-disabled":Ft("neutral-90"),"border-selected-disabled":Ft("neutral-70"),"border-success":Ft("success-60"),"border-warning":Ft("warning-60"),"border-error":Ft("error-60"),"border-error-focus":Ft("error-60"),"border-error-focus-strong":Ft("error-40"),"border-error-strong":Ft("error-40"),"border-info":Ft("info-60"),bg:Ft("white"),"bg-strong":Ft("neutral-100"),"bg-stronger":Ft("neutral-95"),"bg-strongest":Ft("neutral-90"),"bg-hover":Ft("primary-95"),"bg-hover-strong":Ft("primary-90"),"bg-hover-subtle":Ft("primary-100"),"bg-hover-neutral":Ft("neutral-100"),"bg-hover-neutral-strong":Ft("neutral-90"),"bg-selected":Ft("primary-95"),"bg-selected-hover":Ft("primary-90"),"bg-selected-strong":Ft("primary-90"),"bg-selected-stronger":Ft("primary-70"),"bg-selected-strongest":Ft("primary-50"),"bg-selected-strongest-hover":Ft("primary-40"),"bg-disabled":Ft("neutral-95"),"bg-selected-disabled":Ft("neutral-95"),"bg-selected-stronger-disabled":Ft("neutral-70"),"bg-success":Ft("success-100"),"bg-success-hover":Ft("success-95"),"bg-success-strong":Ft("success-50"),"bg-success-strong-hover":Ft("success-40"),"bg-warning":Ft("warning-100"),"bg-warning-hover":Ft("warning-95"),"bg-warning-strong":Ft("warning-50"),"bg-warning-strong-hover":Ft("warning-40"),"bg-info":Ft("info-100"),"bg-info-hover":Ft("info-95"),"bg-info-strong":Ft("info-50"),"bg-info-strong-hover":Ft("info-40"),"bg-error":Ft("error-100"),"bg-error-hover":Ft("error-95"),"bg-error-strong":Ft("error-50"),"bg-error-strong-hover":Ft("error-40"),"bg-inverse":Ft("neutral-20"),"bg-inverse-subtle":Ft("neutral-30"),"bg-inverse-subtler":Ft("neutral-50"),"bg-inverse-subtlest":Ft("neutral-60"),"bg-inverse-hover":Ft("neutral-40"),"bg-primary":Ft("primary-50"),"bg-primary-subtle":Ft("primary-60"),"bg-primary-subtler":Ft("primary-95"),"bg-primary-subtlest":Ft("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":Ft("primary-40"),"bg-primary-subtlest-hover":Ft("primary-90"),"bg-primary-subtlest-selected":Ft("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:Ft("primary-50"),"hyperlink-hover":Ft("primary-40"),"hyperlink-visited":Ft("primary-40"),"hyperlink-inverse":Ft("primary-inverse"),"focus-ring":Ft("black"),"focus-ring-inverse":Ft("white")},$t={collections:{lifesg:Dt,bookingsg:Dt,rbs:Dt,mylegacy:Dt,ccube:Dt,oneservice:Dt,pa:{text:Ft("neutral-30"),"text-subtle":Ft("neutral-40"),"text-subtler":Ft("neutral-50"),"text-subtlest":Ft("neutral-70"),"text-primary":Ft("neutral-10"),"text-hover":Ft("neutral-70"),"text-selected":Ft("neutral-20"),"text-selected-hover":Ft("neutral-10"),"text-disabled":Ft("neutral-50"),"text-disabled-subtle":Ft("neutral-60"),"text-disabled-subtlest":Ft("neutral-80"),"text-selected-disabled":Ft("neutral-40"),"text-success":Ft("success-40"),"text-warning":Ft("warning-40"),"text-error":Ft("brand-30"),"text-info":Ft("neutral-40"),"text-inverse":Ft("neutral-100"),icon:Ft("neutral-40"),"icon-subtle":Ft("neutral-50"),"icon-strongest":Ft("neutral-10"),"icon-primary":Ft("neutral-10"),"icon-primary-subtle":Ft("neutral-30"),"icon-primary-subtlest":Ft("neutral-60"),"icon-hover":Ft("neutral-70"),"icon-selected":Ft("brand-20"),"icon-selected-hover":Ft("brand-10"),"icon-disabled":Ft("neutral-50"),"icon-disabled-subtle":Ft("neutral-60"),"icon-selected-disabled":Ft("neutral-40"),"icon-success":Ft("success-40"),"icon-warning":Ft("warning-60"),"icon-error":Ft("brand-30"),"icon-error-strong":Ft("brand-10"),"icon-info":Ft("neutral-40"),"icon-inverse":Ft("neutral-100"),"icon-primary-inverse":"#F9B371",border:Ft("neutral-90"),"border-strong":Ft("neutral-30"),"border-stronger":Ft("neutral-20"),"border-primary":Ft("neutral-40"),"border-primary-subtle":Ft("neutral-60"),"border-hover":Ft("neutral-80"),"border-hover-strong":Ft("neutral-10"),"border-selected":Ft("brand-20"),"border-selected-subtle":Ft("neutral-40"),"border-selected-subtlest":Ft("neutral-70"),"border-selected-hover":Ft("neutral-10"),"border-focus":Ft("neutral-20"),"border-focus-strong":Ft("neutral-10"),"border-disabled":Ft("neutral-90"),"border-selected-disabled":Ft("neutral-80"),"border-success":Ft("success-40"),"border-warning":Ft("warning-60"),"border-error":Ft("brand-30"),"border-error-focus":Ft("brand-20"),"border-error-focus-strong":Ft("brand-10"),"border-error-strong":Ft("brand-20"),"border-info":Ft("neutral-40"),bg:Ft("neutral-100"),"bg-strong":Ft("neutral-95"),"bg-stronger":Ft("neutral-90"),"bg-strongest":Ft("neutral-80"),"bg-hover":Ft("brand-90"),"bg-hover-strong":Ft("brand-80"),"bg-hover-subtle":Ft("neutral-90"),"bg-hover-neutral":Ft("neutral-90"),"bg-hover-neutral-strong":Ft("neutral-90"),"bg-selected":Ft("brand-100"),"bg-selected-hover":Ft("brand-30"),"bg-selected-strong":Ft("brand-50"),"bg-selected-stronger":Ft("brand-40"),"bg-selected-strongest":Ft("brand-20"),"bg-selected-strongest-hover":Ft("brand-10"),"bg-disabled":Ft("neutral-90"),"bg-selected-disabled":Ft("neutral-90"),"bg-selected-stronger-disabled":Ft("neutral-80"),"bg-success":Ft("success-100"),"bg-success-hover":Ft("success-95"),"bg-success-strong":Ft("success-50"),"bg-success-strong-hover":Ft("success-40"),"bg-warning":Ft("warning-100"),"bg-warning-hover":Ft("warning-95"),"bg-warning-strong":Ft("warning-50"),"bg-warning-strong-hover":Ft("warning-40"),"bg-info":Ft("neutral-95"),"bg-info-hover":Ft("info-95"),"bg-info-strong":Ft("info-50"),"bg-info-strong-hover":Ft("info-40"),"bg-error":Ft("brand-100"),"bg-error-hover":Ft("error-95"),"bg-error-strong":Ft("error-50"),"bg-error-strong-hover":Ft("error-40"),"bg-inverse":Ft("neutral-40"),"bg-inverse-subtle":Ft("neutral-60"),"bg-inverse-subtler":Ft("neutral-70"),"bg-inverse-subtlest":Ft("neutral-80"),"bg-inverse-hover":Ft("neutral-30"),"bg-primary":Ft("brand-20"),"bg-primary-subtle":Ft("brand-60"),"bg-primary-subtler":Ft("brand-80"),"bg-primary-subtlest":Ft("brand-100"),"bg-available":Ft("success-60"),"bg-primary-hover":Ft("brand-10"),"bg-primary-subtlest-hover":Ft("brand-80"),"bg-primary-subtlest-selected":Ft("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:Ft("neutral-10"),"hyperlink-hover":Ft("neutral-40"),"hyperlink-visited":Ft("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":Ft("black"),"focus-ring-inverse":Ft("white")},a11yplayground:Dt},defaultValue:"lifesg"},Et=e=>r=>{var t;const n=r.theme,i=mt($t,null==n?void 0:n.colourScheme),a=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.semanticColour)?ht(i,e,n.overrides.semanticColour):i[e];return"function"==typeof a?a(r):a},Ct={text:Et("text"),"text-subtle":Et("text-subtle"),"text-subtler":Et("text-subtler"),"text-subtlest":Et("text-subtlest"),"text-primary":Et("text-primary"),"text-hover":Et("text-hover"),"text-selected":Et("text-selected"),"text-selected-hover":Et("text-selected-hover"),"text-disabled":Et("text-disabled"),"text-disabled-subtle":Et("text-disabled-subtle"),"text-disabled-subtlest":Et("text-disabled-subtlest"),"text-selected-disabled":Et("text-selected-disabled"),"text-success":Et("text-success"),"text-warning":Et("text-warning"),"text-error":Et("text-error"),"text-info":Et("text-info"),"text-inverse":Et("text-inverse"),icon:Et("icon"),"icon-subtle":Et("icon-subtle"),"icon-strongest":Et("icon-strongest"),"icon-primary":Et("icon-primary"),"icon-primary-subtle":Et("icon-primary-subtle"),"icon-primary-subtlest":Et("icon-primary-subtlest"),"icon-hover":Et("icon-hover"),"icon-selected":Et("icon-selected"),"icon-selected-hover":Et("icon-selected-hover"),"icon-disabled":Et("icon-disabled"),"icon-disabled-subtle":Et("icon-disabled-subtle"),"icon-selected-disabled":Et("icon-selected-disabled"),"icon-success":Et("icon-success"),"icon-warning":Et("icon-warning"),"icon-error":Et("icon-error"),"icon-error-strong":Et("icon-error-strong"),"icon-info":Et("icon-info"),"icon-inverse":Et("icon-inverse"),"icon-primary-inverse":Et("icon-primary-inverse"),border:Et("border"),"border-strong":Et("border-strong"),"border-stronger":Et("border-stronger"),"border-primary":Et("border-primary"),"border-primary-subtle":Et("border-primary-subtle"),"border-hover":Et("border-hover"),"border-hover-strong":Et("border-hover-strong"),"border-selected":Et("border-selected"),"border-selected-subtle":Et("border-selected-subtle"),"border-selected-subtlest":Et("border-selected-subtlest"),"border-selected-hover":Et("border-selected-hover"),"border-focus":Et("border-focus"),"border-focus-strong":Et("border-focus-strong"),"border-disabled":Et("border-disabled"),"border-selected-disabled":Et("border-selected-disabled"),"border-success":Et("border-success"),"border-warning":Et("border-warning"),"border-error":Et("border-error"),"border-error-focus":Et("border-error-focus"),"border-error-focus-strong":Et("border-error-focus-strong"),"border-error-strong":Et("border-error-strong"),"border-info":Et("border-info"),bg:Et("bg"),"bg-strong":Et("bg-strong"),"bg-stronger":Et("bg-stronger"),"bg-strongest":Et("bg-strongest"),"bg-hover":Et("bg-hover"),"bg-hover-strong":Et("bg-hover-strong"),"bg-hover-subtle":Et("bg-hover-subtle"),"bg-hover-neutral":Et("bg-hover-neutral"),"bg-hover-neutral-strong":Et("bg-hover-neutral-strong"),"bg-selected":Et("bg-selected"),"bg-selected-hover":Et("bg-selected-hover"),"bg-selected-strong":Et("bg-selected-strong"),"bg-selected-stronger":Et("bg-selected-stronger"),"bg-selected-strongest":Et("bg-selected-strongest"),"bg-selected-strongest-hover":Et("bg-selected-strongest-hover"),"bg-disabled":Et("bg-disabled"),"bg-selected-disabled":Et("bg-selected-disabled"),"bg-selected-stronger-disabled":Et("bg-selected-stronger-disabled"),"bg-success":Et("bg-success"),"bg-success-hover":Et("bg-success-hover"),"bg-success-strong":Et("bg-success-strong"),"bg-success-strong-hover":Et("bg-success-strong-hover"),"bg-warning":Et("bg-warning"),"bg-warning-hover":Et("bg-warning-hover"),"bg-warning-strong":Et("bg-warning-strong"),"bg-warning-strong-hover":Et("bg-warning-strong-hover"),"bg-info":Et("bg-info"),"bg-info-hover":Et("bg-info-hover"),"bg-info-strong":Et("bg-info-strong"),"bg-info-strong-hover":Et("bg-info-strong-hover"),"bg-error":Et("bg-error"),"bg-error-hover":Et("bg-error-hover"),"bg-error-strong":Et("bg-error-strong"),"bg-error-strong-hover":Et("bg-error-strong-hover"),"bg-inverse":Et("bg-inverse"),"bg-inverse-subtle":Et("bg-inverse-subtle"),"bg-inverse-subtler":Et("bg-inverse-subtler"),"bg-inverse-subtlest":Et("bg-inverse-subtlest"),"bg-inverse-hover":Et("bg-inverse-hover"),"bg-primary":Et("bg-primary"),"bg-primary-subtle":Et("bg-primary-subtle"),"bg-primary-subtler":Et("bg-primary-subtler"),"bg-primary-subtlest":Et("bg-primary-subtlest"),"bg-available":Et("bg-available"),"bg-primary-hover":Et("bg-primary-hover"),"bg-primary-subtlest-hover":Et("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":Et("bg-primary-subtlest-selected"),"overlay-strong":Et("overlay-strong"),"overlay-subtle":Et("overlay-subtle"),hyperlink:Et("hyperlink"),"hyperlink-hover":Et("hyperlink-hover"),"hyperlink-visited":Et("hyperlink-visited"),"hyperlink-inverse":Et("hyperlink-inverse"),"focus-ring":Et("focus-ring"),"focus-ring-inverse":Et("focus-ring-inverse")},Bt={collections:{default:{solid:e=>r=>{var t,n,i;const{thickness:a,radius:o,colour:s}=e||{},l=null!==(t="function"==typeof a?a(r):a)&&void 0!==t?t:pt["width-010"](r),d=null!==(n="function"==typeof o?o(r):o)&&void 0!==n?n:0,c=null!==(i="function"==typeof s?s(r):s)&&void 0!==i?i:Ct.border(r),u=pt.solid;return h`
            border: ${l} ${u} ${c};
            border-radius: ${d};
        `},"dashed-default":e=>r=>{var t,n,i;const{thickness:a,radius:o,colour:s}=e||{},l=null!==(t="function"==typeof a?a(r):a)&&void 0!==t?t:pt["width-010"](r),d=null!==(n="function"==typeof o?o(r):o)&&void 0!==n?n:0,c=null!==(i="function"==typeof s?s(r):s)&&void 0!==i?i:Ct.border(r),u=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${d}' ry='${d}' stroke='${c}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return h`
            background-image: url("data:image/svg+xml,${u}");
            border-radius: ${d};
        `}}},defaultValue:"default"},At=e=>1===e.length&&"theme"in e[0],kt=e=>(...r)=>t=>{const n=At(r)?[]:r,i=At(r)?r[0]:t,a=i.theme;return(0,mt(Bt,null==a?void 0:a.borderScheme)[e])(...n)(i)},St={solid:kt("solid"),"dashed-default":kt("dashed-default")},zt={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},Mt=e=>r=>{var t;const n=r.theme,i=mt(zt,null==n?void 0:n.breakpointScheme);let a;return a=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.breakpoint)?ht(i,e,n.overrides.breakpoint):i[e],a},Ot={"xxs-min":Mt("xxs-min"),"xxs-max":Mt("xxs-max"),"xs-min":Mt("xs-min"),"xs-max":Mt("xs-max"),"sm-min":Mt("sm-min"),"sm-max":Mt("sm-max"),"md-min":Mt("md-min"),"md-max":Mt("md-max"),"lg-min":Mt("lg-min"),"lg-max":Mt("lg-max"),"xl-min":Mt("xl-min"),"xl-max":Mt("xl-max"),"xxl-min":Mt("xxl-min"),"xxs-column":Mt("xxs-column"),"xs-column":Mt("xs-column"),"sm-column":Mt("sm-column"),"md-column":Mt("md-column"),"lg-column":Mt("lg-column"),"xl-column":Mt("xl-column"),"xxl-column":Mt("xxl-column"),"xxs-gutter":Mt("xxs-gutter"),"xs-gutter":Mt("xs-gutter"),"sm-gutter":Mt("sm-gutter"),"md-gutter":Mt("md-gutter"),"lg-gutter":Mt("lg-gutter"),"xl-gutter":Mt("xl-gutter"),"xxl-gutter":Mt("xxl-gutter"),"xxs-margin":Mt("xxs-margin"),"xs-margin":Mt("xs-margin"),"sm-margin":Mt("sm-margin"),"md-margin":Mt("md-margin"),"lg-margin":Mt("lg-margin"),"xl-margin":Mt("xl-margin"),"xxl-margin":Mt("xxl-margin")},Yt=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,t)=>(r[t]=((e,r)=>{const t=Ot["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const n=t(r);return`@media screen and (${e}: ${n}px)`}})(e,t),r)),{}),_t={MaxWidth:Yt("max-width"),MinWidth:Yt("min-width")},Lt={collections:{default:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},bookingsg:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},pa:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.5rem","heading-size-sm":"1.25rem","heading-size-xs":"1rem","heading-lh-xxl":"3rem","heading-lh-xl":"2.5rem","heading-lh-lg":"2.25rem","heading-lh-md":"2rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.032rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.625rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.25rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},a11yplayground:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Atkinson Hyperlegible Next","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1.125rem","form-description-size":"1rem","form-label-lh":"1.5rem","form-description-lh":"1.625rem","form-label-ls":"0rem","form-description-ls":"0.00875rem"}},defaultValue:"default"},Tt=e=>r=>{var t;const n=r.theme,i=mt(Lt,null==n?void 0:n.fontScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.fontSpec)?ht(i,e,n.overrides.fontSpec):i[e]},jt={"heading-size-xxl":Tt("heading-size-xxl"),"heading-size-xl":Tt("heading-size-xl"),"heading-size-lg":Tt("heading-size-lg"),"heading-size-md":Tt("heading-size-md"),"heading-size-sm":Tt("heading-size-sm"),"heading-size-xs":Tt("heading-size-xs"),"heading-lh-xxl":Tt("heading-lh-xxl"),"heading-lh-xl":Tt("heading-lh-xl"),"heading-lh-lg":Tt("heading-lh-lg"),"heading-lh-md":Tt("heading-lh-md"),"heading-lh-sm":Tt("heading-lh-sm"),"heading-lh-xs":Tt("heading-lh-xs"),"heading-ls-xxl":Tt("heading-ls-xxl"),"heading-ls-xl":Tt("heading-ls-xl"),"heading-ls-lg":Tt("heading-ls-lg"),"heading-ls-md":Tt("heading-ls-md"),"heading-ls-sm":Tt("heading-ls-sm"),"heading-ls-xs":Tt("heading-ls-xs"),"weight-light":Tt("weight-light"),"weight-regular":Tt("weight-regular"),"weight-semibold":Tt("weight-semibold"),"weight-bold":Tt("weight-bold"),"font-family":Tt("font-family"),"body-size-baseline":Tt("body-size-baseline"),"body-size-md":Tt("body-size-md"),"body-size-sm":Tt("body-size-sm"),"body-size-xs":Tt("body-size-xs"),"body-lh-baseline":Tt("body-lh-baseline"),"body-lh-md":Tt("body-lh-md"),"body-lh-sm":Tt("body-lh-sm"),"body-lh-xs":Tt("body-lh-xs"),"body-ls-baseline":Tt("body-ls-baseline"),"body-ls-md":Tt("body-ls-md"),"body-ls-sm":Tt("body-ls-sm"),"body-ls-xs":Tt("body-ls-xs"),"form-label-size":Tt("form-label-size"),"form-description-size":Tt("form-description-size"),"form-label-lh":Tt("form-label-lh"),"form-description-lh":Tt("form-description-lh"),"form-label-ls":Tt("form-label-ls"),"form-description-ls":Tt("form-description-ls")},Ht=(e,r,t,n,i)=>{const{disableLigatures:a}=i||{};return h`
        font-family: ${Tt("font-family")};
        font-size: ${Tt(e)};
        font-weight: ${Tt(r)};
        line-height: ${Tt(t)};
        letter-spacing: ${Tt(n)};

        font-variant: ${a?"no-common-ligatures":"normal"};
    `},Rt=(e={})=>({"heading-xxl-light":Ht("heading-size-xxl","weight-light","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-regular":Ht("heading-size-xxl","weight-regular","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-semibold":Ht("heading-size-xxl","weight-semibold","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-bold":Ht("heading-size-xxl","weight-bold","heading-lh-xxl","heading-ls-xxl",e),"heading-xl-light":Ht("heading-size-xl","weight-light","heading-lh-xl","heading-ls-xl",e),"heading-xl-regular":Ht("heading-size-xl","weight-regular","heading-lh-xl","heading-ls-xl",e),"heading-xl-semibold":Ht("heading-size-xl","weight-semibold","heading-lh-xl","heading-ls-xl",e),"heading-xl-bold":Ht("heading-size-xl","weight-bold","heading-lh-xl","heading-ls-xl",e),"heading-lg-light":Ht("heading-size-lg","weight-light","heading-lh-lg","heading-ls-lg",e),"heading-lg-regular":Ht("heading-size-lg","weight-regular","heading-lh-lg","heading-ls-lg",e),"heading-lg-semibold":Ht("heading-size-lg","weight-semibold","heading-lh-lg","heading-ls-lg",e),"heading-lg-bold":Ht("heading-size-lg","weight-bold","heading-lh-lg","heading-ls-lg",e),"heading-md-light":Ht("heading-size-md","weight-light","heading-lh-md","heading-ls-md",e),"heading-md-regular":Ht("heading-size-md","weight-regular","heading-lh-md","heading-ls-md",e),"heading-md-semibold":Ht("heading-size-md","weight-semibold","heading-lh-md","heading-ls-md",e),"heading-md-bold":Ht("heading-size-md","weight-bold","heading-lh-md","heading-ls-md",e),"heading-sm-light":Ht("heading-size-sm","weight-light","heading-lh-sm","heading-ls-sm",e),"heading-sm-regular":Ht("heading-size-sm","weight-regular","heading-lh-sm","heading-ls-sm",e),"heading-sm-semibold":Ht("heading-size-sm","weight-semibold","heading-lh-sm","heading-ls-sm",e),"heading-sm-bold":Ht("heading-size-sm","weight-bold","heading-lh-sm","heading-ls-sm",e),"heading-xs-light":Ht("heading-size-xs","weight-light","heading-lh-xs","heading-ls-xs",e),"heading-xs-regular":Ht("heading-size-xs","weight-regular","heading-lh-xs","heading-ls-xs",e),"heading-xs-semibold":Ht("heading-size-xs","weight-semibold","heading-lh-xs","heading-ls-xs",e),"heading-xs-bold":Ht("heading-size-xs","weight-bold","heading-lh-xs","heading-ls-xs",e),"body-baseline-light":Ht("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline",e),"body-baseline-regular":Ht("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline",e),"body-baseline-semibold":Ht("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline",e),"body-baseline-bold":Ht("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline",e),"body-md-light":Ht("body-size-md","weight-light","body-lh-md","body-ls-md",e),"body-md-regular":Ht("body-size-md","weight-regular","body-lh-md","body-ls-md",e),"body-md-semibold":Ht("body-size-md","weight-semibold","body-lh-md","body-ls-md",e),"body-md-bold":Ht("body-size-md","weight-bold","body-lh-md","body-ls-md",e),"body-sm-light":Ht("body-size-sm","weight-light","body-lh-sm","body-ls-sm",e),"body-sm-regular":Ht("body-size-sm","weight-regular","body-lh-sm","body-ls-sm",e),"body-sm-semibold":Ht("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm",e),"body-sm-bold":Ht("body-size-sm","weight-bold","body-lh-sm","body-ls-sm",e),"body-xs-light":Ht("body-size-xs","weight-light","body-lh-xs","body-ls-xs",e),"body-xs-regular":Ht("body-size-xs","weight-regular","body-lh-xs","body-ls-xs",e),"body-xs-semibold":Ht("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs",e),"body-xs-bold":Ht("body-size-xs","weight-bold","body-lh-xs","body-ls-xs",e),"form-label":Ht("form-label-size","weight-semibold","form-label-lh","form-label-ls",e),"form-description":Ht("form-description-size","weight-regular","form-description-lh","form-description-ls",e)}),It=Rt({disableLigatures:!0}),Wt={collections:{default:Rt(),bookingsg:It,pa:Rt({disableLigatures:!0}),a11yplayground:Rt({disableLigatures:!0})},defaultValue:"default"},Nt=e=>r=>{var t;const n=r.theme,i=mt(Wt,null==n?void 0:n.fontScheme),a=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.font)?ht(i,e,n.overrides.font):i[e];return"function"==typeof a?a(r):a},Pt={"heading-xxl-light":Nt("heading-xxl-light"),"heading-xxl-regular":Nt("heading-xxl-regular"),"heading-xxl-semibold":Nt("heading-xxl-semibold"),"heading-xxl-bold":Nt("heading-xxl-bold"),"heading-xl-light":Nt("heading-xl-light"),"heading-xl-regular":Nt("heading-xl-regular"),"heading-xl-semibold":Nt("heading-xl-semibold"),"heading-xl-bold":Nt("heading-xl-bold"),"heading-lg-light":Nt("heading-lg-light"),"heading-lg-regular":Nt("heading-lg-regular"),"heading-lg-semibold":Nt("heading-lg-semibold"),"heading-lg-bold":Nt("heading-lg-bold"),"heading-md-light":Nt("heading-md-light"),"heading-md-regular":Nt("heading-md-regular"),"heading-md-semibold":Nt("heading-md-semibold"),"heading-md-bold":Nt("heading-md-bold"),"heading-sm-light":Nt("heading-sm-light"),"heading-sm-regular":Nt("heading-sm-regular"),"heading-sm-semibold":Nt("heading-sm-semibold"),"heading-sm-bold":Nt("heading-sm-bold"),"heading-xs-light":Nt("heading-xs-light"),"heading-xs-regular":Nt("heading-xs-regular"),"heading-xs-semibold":Nt("heading-xs-semibold"),"heading-xs-bold":Nt("heading-xs-bold"),"body-baseline-light":Nt("body-baseline-light"),"body-baseline-regular":Nt("body-baseline-regular"),"body-baseline-semibold":Nt("body-baseline-semibold"),"body-baseline-bold":Nt("body-baseline-bold"),"body-md-light":Nt("body-md-light"),"body-md-regular":Nt("body-md-regular"),"body-md-semibold":Nt("body-md-semibold"),"body-md-bold":Nt("body-md-bold"),"body-sm-light":Nt("body-sm-light"),"body-sm-regular":Nt("body-sm-regular"),"body-sm-semibold":Nt("body-sm-semibold"),"body-sm-bold":Nt("body-sm-bold"),"body-xs-light":Nt("body-xs-light"),"body-xs-regular":Nt("body-xs-regular"),"body-xs-semibold":Nt("body-xs-semibold"),"body-xs-bold":Nt("body-xs-bold"),"form-label":Nt("form-label"),"form-description":Nt("form-description")},Ut={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},Vt=e=>r=>{var t;const n=r.theme,i=mt(Ut,null==n?void 0:n.motionScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.motion)?ht(i,e,n.overrides.motion):i[e]},Zt={"duration-150":Vt("duration-150"),"duration-250":Vt("duration-250"),"duration-350":Vt("duration-350"),"duration-500":Vt("duration-500"),"duration-800":Vt("duration-800"),"duration-1000":Vt("duration-1000"),"ease-default":Vt("ease-default"),"ease-standard":Vt("ease-standard"),"ease-entrance":Vt("ease-entrance"),"ease-exit":Vt("ease-exit")},Xt={collections:{default:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"default"},Kt=e=>r=>{var t;const n=r.theme,i=mt(Xt,null==n?void 0:n.radiusScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.radius)?`${ht(i,e,n.overrides.radius)}px`:`${i[e]}px`},Jt={none:Kt("none"),xs:Kt("xs"),sm:Kt("sm"),md:Kt("md"),lg:Kt("lg"),full:Kt("full")},Gt={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},qt=e=>r=>{var t;const n=r.theme,i=mt(Gt,null==n?void 0:n.spacingScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.spacing)?`${ht(i,e,n.overrides.spacing)}px`:`${i[e]}px`},Qt={"spacing-0":qt("spacing-0"),"spacing-4":qt("spacing-4"),"spacing-8":qt("spacing-8"),"spacing-12":qt("spacing-12"),"spacing-16":qt("spacing-16"),"spacing-20":qt("spacing-20"),"spacing-24":qt("spacing-24"),"spacing-32":qt("spacing-32"),"spacing-40":qt("spacing-40"),"spacing-48":qt("spacing-48"),"spacing-64":qt("spacing-64"),"spacing-72":qt("spacing-72"),"layout-xs":qt("layout-xs"),"layout-sm":qt("layout-sm"),"layout-md":qt("layout-md"),"layout-lg":qt("layout-lg"),"layout-xl":qt("layout-xl"),"layout-xxl":qt("layout-xxl"),"layout-xxxl":qt("layout-xxxl")},en=Object.assign(Object.assign({},Ct),{Primitive:wt}),rn=Object.assign(Object.assign({},Pt),{Spec:jt}),tn=Zt,nn=Object.assign(Object.assign({},pt),{Util:St}),an=Qt,on=Jt,sn=_t,ln={collections:{default:{Button:{"button-radius":Jt.sm,"button-default-colour-bg":Ct["bg-primary"],"button-default-colour-bg-hover":Ct["bg-primary-hover"],"button-default-colour-text":Ct["text-inverse"],"button-secondary-colour-border":Ct["border-primary"],"button-secondary-colour-text":Ct["text-primary"],"button-light-colour-text":Ct["text-primary"],"button-link-colour-text":Ct["text-primary"]}},pa:{Button:{"button-radius":Jt.full,"button-default-colour-bg":Ct["bg-primary"],"button-default-colour-bg-hover":Ct["bg-primary-hover"],"button-default-colour-text":Ct["text-inverse"],"button-secondary-colour-border":Ct["border-primary"],"button-secondary-colour-text":Ct["text-primary"],"button-light-colour-text":Ct["text-primary"],"button-link-colour-text":Ct["text-primary"]}}},defaultValue:"default"},dn=(e,r)=>t=>{var n,i;const a=t.theme,o=mt(ln,null==a?void 0:a.componentScheme);return cn((null===(i=null===(n=null==a?void 0:a.componentOverrides)||void 0===n?void 0:n[e])||void 0===i?void 0:i[r])||o[e][r],t)},cn=(e,r)=>{switch(typeof e){case"function":return e(r);case"number":return e+"px";case"string":return e}},un=dn("Button","button-radius"),gn=dn("Button","button-default-colour-bg"),bn=dn("Button","button-default-colour-bg-hover"),hn=dn("Button","button-default-colour-text"),mn=dn("Button","button-secondary-colour-border"),yn=dn("Button","button-secondary-colour-text"),fn=dn("Button","button-light-colour-text"),pn=dn("Button","button-link-colour-text"),vn=g.button`
    padding: ${an["spacing-8"]} ${an["spacing-16"]};
    min-width: 4rem;
    border: ${nn["width-010"]} ${nn.solid} transparent;
    transition: all ${tn["duration-250"]} ${tn["ease-default"]};
    border-radius: ${un};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return h`
                    background-color: ${en.Primitive.white};
                    border-color: ${e.$buttonIsDanger?en["border-error-strong"]:mn};

                    color: ${e.$buttonIsDanger?en["text-error"]:yn};

                    &:hover,
                    &:active {
                        background-color: ${en["bg-hover-neutral"]};
                    }
                `;case"light":return h`
                    background-color: ${en.bg};
                    border-color: ${en.border};

                    color: ${e.$buttonIsDanger?en["text-error"]:fn};

                    &:hover,
                    &:active {
                        background-color: ${en["bg-hover-neutral"]};
                    }
                `;case"link":return h`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?en["text-error"]:pn};
                    &:hover,
                    &:active {
                        background-color: ${en["bg-hover-neutral"]};
                    }
                `;case"disabled":return h`
                    background-color: ${en["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${en["text-disabled"]};
                `;default:return h`
                    background-color: ${e.$buttonIsDanger?en["bg-error-strong"]:gn};};

                    ${sn.MaxWidth.sm} {
                        width: 100%;
                    }

                    color: ${hn}};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?en["bg-error-strong-hover"]:bn}
                        };
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return h`
                    height: 2.5rem;
                    ${rn["body-md-semibold"]}

                    ${sn.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return h`
                    height: 4rem;
                    ${rn["heading-md-semibold"]}

                    ${sn.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return h`
                    height: 3rem;
                    ${rn["heading-xs-semibold"]}

                    ${sn.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,xn=g((({color:t,className:n,size:i})=>e(W,{className:n,$size:i,$color:t,"data-testid":"component-loading-spinner",children:[r(P,{id:"inner1"}),r(U,{id:"inner2"}),r(V,{id:"inner3"}),r(Z,{id:"inner4"})]})))`
    margin-right: 0.5rem;
`,Fn=(t,n)=>{const{children:i,disabled:a=!1,loading:o=!1,styleType:s="default",danger:l=!1}=t,d=y(t,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:a?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return e(vn,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:a},c,d,{children:[o&&r(xn,{}),r("span",{children:i})]}))};Fn.displayName="Button.Default";const wn=(t,n)=>{const{children:i,disabled:a=!1,loading:o=!1,styleType:s="default",danger:l=!1}=t,d=y(t,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:a?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return e(vn,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:a},c,d,{children:[o&&r(xn,{}),r("span",{children:i})]}))};wn.displayName="Button.Small";const Dn=(t,n)=>{const{children:i,disabled:a=!1,loading:o=!1,styleType:s="default",danger:l=!1}=t,d=y(t,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:a?"disabled":s,$buttonSizeStyle:"large",$buttonIsDanger:l};return e(vn,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:a},c,d,{children:[o&&r(xn,{}),r("span",{children:i})]}))};Dn.displayName="Button.Large";const $n={Default:n.forwardRef(Fn),Small:n.forwardRef(wn),Large:n.forwardRef(Dn)},En=g.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${an["spacing-24"]};
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

        ${({$highlight:e})=>e&&h`
                background-color: ${en["bg-hover-neutral"]};
            `}
    }
`,Cn=n.forwardRef(((e,t)=>{var{children:n,focusHighlight:i=!0,focusOutline:a="none",type:o="button"}=e,s=y(e,["children","focusHighlight","focusOutline","type"]);return r(En,Object.assign({ref:t,$outline:a,$highlight:i,type:o},s,{children:n}))})),Bn=h`
    color: ${en.icon};
    height: 1rem;
    width: 1rem;
`,An=g(c)`
    ${Bn}
`,kn=g(u)`
    ${Bn}
`,Sn=g(d)`
    ${Bn}
    transition: transform 250ms ease-in-out;
    margin-left: 0.5rem;
`,zn=g.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    padding-top: var(--vertical-inset);
    padding-bottom: var(--vertical-inset);
`,Mn=g.div`
    display: flex;
    flex: 1;
    position: relative;
`,On=g.div`
    isolation: isolate;
    width: 100%;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,Yn=g.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${en.bg};

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);

    ${e=>{if(!e.$visible)return h`
                display: none;
            `}}
`,_n=g.div`
    display: flex;
    justify-content: space-between;

    padding-left: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-right: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-bottom: var(--header-bottom-spacing);
`,Ln=g.div`
    display: flex;
`,Tn=g.button`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;

    ${e=>!1===e.$visible?h`
                display: none;
            `:e.$expanded?h`
                ${Sn} {
                    transform: rotate(180deg);
                }
            `:void 0};
`,jn=g.span`
    ${rn["body-md-regular"]}
    color: ${en.text};
`,Hn=g.div`
    display: flex;
`,Rn=g(Cn)`
    margin: auto 0;
    padding: 0.75rem;

    :disabled {
        cursor: not-allowed;
    }
`,In=g.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,Wn=g($n.Small)`
    flex: 1;
`,Nn=g.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 2.5rem);
    align-content: center;
    justify-content: center;

    gap: 0.5rem 0;
`,Pn=g.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${on.md};
    margin: 0 0.5rem;
    transition: ${tn["duration-150"]} ${tn["ease-default"]};

    // default styles
    ${rn["body-md-regular"]}
    border-radius: ${on.md};
    border: ${nn["width-010"]} ${nn.solid} transparent;
    background-clip: border-box;
    color: ${en.text};
    cursor: default;

    // cursor style
    ${e=>e.$interactive?h`
                cursor: pointer;
            `:e.$disabledDisplay?h`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:e,$interactive:r,$disabledDisplay:t})=>"selected-month"===e?h`
                background: ${en["bg-selected"]};
                border-color: ${en["border-selected"]};
                color: ${en["text-selected"]};
                font-weight: ${rn.Spec["weight-semibold"]};

                ${r&&h`
                    &:hover {
                        background: ${en["bg-selected-hover"]};
                        border-color: ${en["border-selected-hover"]};
                        color: ${en["text-selected-hover"]};
                    }
                `}
            `:"current-month"===e?h`
                color: ${en["text-primary"]};
                font-weight: ${rn.Spec["weight-semibold"]};
            `:t?h`
                color: ${en["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:r})=>{if(r)return"selected-month"===e?h`
                &:hover {
                    background: ${en["bg-selected-hover"]};
                    border-color: ${en["border-selected-hover"]};
                    color: ${en["text-selected-hover"]};
                    font-weight: ${rn.Spec["weight-semibold"]};
                }
            `:h`
            &:hover {
                background: ${en["bg-hover"]};
                color: ${en["text-hover"]};
                font-weight: ${rn.Spec["weight-semibold"]};
            }
        `}}
`,Un=({calendarDate:e,currentFocus:t,selectedStartDate:n,selectedEndDate:l,viewCalendarDate:d,isNewSelection:c,minDate:u,maxDate:g,allowDisabledSelection:b,onMonthSelect:h})=>{const m=i((()=>S.generateMonths(x(e))),[e]),y=a(new Array(m.length).fill(null)),[f,p]=o(m.findIndex((e=>e.isSame(d,"month"))));s((()=>{var e;null!==f&&(null===(e=y.current[f])||void 0===e||e.focus())}),[f,m]);const v=(e,r)=>{r||h(e)},F=e=>{const r="start"===t&&l&&e.isAfter(l,"month")&&c,i="end"===t&&n&&e.isBefore(n,"month")&&c;return!(!r&&!i)},w=e=>{const r=e.format("MMMM"),t=(n=e,!S.isWithinRange(n,u?x(u):void 0,g?x(g):void 0,"month"));var n;const i=d.isSame(e,"month"),a=i?"selected-month":x().isSame(e,"month")?"current-month":"default",o=d.isSame(e,"year")?i?0:-1:0===e.month()?0:-1;return{disabledDisplay:t||F(e),interactive:!t||b,month:r,variant:a,tabIndex:o}};return m.length?r(Nn,{onBlur:()=>{p(null)},children:m.map(((e,t)=>{const{disabledDisplay:n,interactive:i,variant:a,month:o,tabIndex:s}=w(e);return r(Pn,{ref:e=>y.current[t]=e,tabIndex:s,role:"button","aria-disabled":!i,"aria-selected":"selected-month"===a,$variant:a,$disabledDisplay:n,$interactive:i,onClick:()=>v(e,!i),onKeyDown:r=>{((e,r,t)=>{const n=e.key;let i;const a=m.indexOf(r);switch(n){case"Enter":case" ":e.preventDefault(),v(r,t);break;case"ArrowLeft":i=a-1;break;case"ArrowRight":i=a+1;break;case"ArrowUp":i=a-2;break;case"ArrowDown":i=a+2}void 0!==i&&i>=0&&i<m.length&&(e.preventDefault(),p(i))})(r,e,!i)},children:o},o)}))}):null},Vn=g.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-content: center;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
`,Zn=g.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0.5rem;
    transition: ${tn["duration-150"]} ${tn["ease-default"]};
    padding: 0.5rem;

    // default styles
    ${rn["body-md-regular"]}
    border-radius: ${on.md};
    border: ${nn["width-010"]} ${nn.solid} transparent;
    background-clip: border-box;
    color: ${en.text};
    cursor: default;

    // cursor style
    ${({$interactive:e,$disabledDisplay:r})=>e?h`
                cursor: pointer;
            `:r?h`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:e,$interactive:r,$disabledDisplay:t})=>"selected-year"===e?h`
                background: ${en["bg-selected"]};
                border-color: ${en["border-selected"]};
                color: ${en["text-selected"]};
                font-weight: ${rn.Spec["weight-semibold"]};

                ${r&&h`
                    &:hover {
                        background: ${en["bg-selected-hover"]};
                        border-color: ${en["border-selected-hover"]};
                        color: ${en["text-selected-hover"]};
                    }
                `}
            `:"current-year"===e?h`
                color: ${en["text-primary"]};
                font-weight: ${rn.Spec["weight-semibold"]};
            `:"other-decade"===e||t?h`
                color: ${en["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:r})=>{if(r)return"selected-year"===e?h`
                &:hover {
                    background: ${en["bg-selected-hover"]};
                    border-color: ${en["border-selected-hover"]};
                    color: ${en["text-selected-hover"]};
                    font-weight: ${rn.Spec["weight-semibold"]};
                }
            `:h`
            &:hover {
                background: ${en["bg-hover"]};
                color: ${en["text-hover"]};
                font-weight: ${rn.Spec["weight-semibold"]};
            }
        `}}
`,Xn=({calendarDate:e,currentFocus:t,selectedStartDate:n,selectedEndDate:l,viewCalendarDate:d,isNewSelection:c,minDate:u,maxDate:g,allowDisabledSelection:b,onYearSelect:h,setCalendarDate:m})=>{const y=i((()=>S.generateDecadeOfYears(x(e))),[e]),f=a(new Array(y.length).fill(null)),[p,v]=o(e);s((()=>{var e;if(null===p)return;const r=y.findIndex((e=>e.isSame(p,"year")));r>=0&&(null===(e=f.current[r])||void 0===e||e.focus())}),[p,y]);const F=(e,r)=>{r||h(e)},w=e=>{const r="start"===t&&l&&e.isAfter(l,"year")&&c,i="end"===t&&n&&e.isBefore(n,"year")&&c;return!(!r&&!i)},D=e=>{const r=y.indexOf(e),t=[0,11].includes(r),n=e.year(),i=(a=e,!S.isWithinRange(a,u?x(u):void 0,g?x(g):void 0,"year"));var a;const o=t?"other-decade":d.isSame(e,"year")?"selected-year":x().isSame(e,"year")?"current-year":"default",s=d.year()>=y[0].year()&&d.year()<=y[y.length-1].year()?"selected-year"===o?0:-1:1===r?0:-1;return{disabledDisplay:i||w(e),interactive:!i||b,year:n,variant:o,tabIndex:s}};return y.length?r(Vn,{onBlur:()=>{v(null)},children:y.map(((e,t)=>{const{disabledDisplay:n,interactive:i,variant:a,year:o,tabIndex:s}=D(e);return r(Zn,{ref:e=>{f.current[t]=e},tabIndex:s,role:"button","aria-label":`${o}`,"aria-disabled":!i,"aria-selected":"selected-year"===a,$variant:a,$disabledDisplay:n,$interactive:!!i,onClick:()=>F(e,!i),onKeyDown:r=>{((e,r,t)=>{let n;switch(e.key){case"Enter":case" ":e.preventDefault(),F(r,t);break;case"ArrowLeft":n=r.subtract(1,"year");break;case"ArrowRight":n=r.add(1,"year");break;case"ArrowUp":n=r.subtract(3,"year");break;case"ArrowDown":n=r.add(3,"year")}void 0!==n&&(e.preventDefault(),m(n),v(n))})(r,e,!i)},children:o},o)}))}):null},Kn=n.forwardRef(((n,i)=>{var{children:d,initialCalendarDate:c,minDate:u,maxDate:g,currentFocus:b,selectedStartDate:h,selectedEndDate:m,selectWithinRange:f,dynamicHeight:p=!1,allowDisabledSelection:v,onCalendarDateChange:F,withButton:w,doneButtonDisabled:D,onDismiss:$,showNavigationHeader:E=!0,getLeftArrowDate:C,getRightArrowDate:B,isLeftArrowDisabled:A,isRightArrowDisabled:k,getMonthHeaderLabel:z,getYearHeaderLabel:M,isFocusable:O=!1}=n,Y=y(n,["children","initialCalendarDate","minDate","maxDate","currentFocus","selectedStartDate","selectedEndDate","selectWithinRange","dynamicHeight","allowDisabledSelection","onCalendarDateChange","withButton","doneButtonDisabled","onDismiss","showNavigationHeader","getLeftArrowDate","getRightArrowDate","isLeftArrowDisabled","isRightArrowDisabled","getMonthHeaderLabel","getYearHeaderLabel","isFocusable"]);const[_,L]=o(j.toDayjs(c)),[T,H]=o(j.toDayjs(c)),[R,I]=o("default"),W=a(null),N=a(null),P=a(null),U=a(null);l(i,(()=>({defaultView(){I("default")},resetView(){const e=j.toDayjs(c);L(e),H(e),I("default")},setCalendarDate(e){const r=j.toDayjs(e);L(r),H(r)}}))),s((()=>{const e=j.toDayjs(c);L(e),H(e)}),[c]),s((()=>{ee(T)}),[T]);const V=()=>{var e;"month-options"!==R?(I("month-options"),null===(e=P.current)||void 0===e||e.focus()):(I("default"),L(T))},Z=e=>{var r;if("Enter"!==e.key&&" "!==e.key||(e.preventDefault(),V(),null===(r=U.current)||void 0===r||r.focus()),"ArrowUp"===e.key||"ArrowDown"===e.key){e.preventDefault();const r="ArrowUp"===e.key?_.subtract(1,"month"):_.add(1,"month");if(!S.isWithinRange(r,u?x(u):void 0,g?x(g):void 0,"month"))return;L(r),"default"===R&&H(r)}},X=()=>{"default"!==R?(I("default"),L(T)):I("year-options")},K=e=>{if("Enter"!==e.key&&" "!==e.key||(e.preventDefault(),X()),"ArrowUp"===e.key||"ArrowDown"===e.key){e.preventDefault();let r;if(r="year-options"===R?"ArrowUp"===e.key?_.subtract(10,"year"):_.add(10,"year"):"ArrowUp"===e.key?_.subtract(1,"year"):_.add(1,"year"),!S.isWithinRange(r,u?x(u):void 0,g?x(g):void 0,"year"))return;L(r),"default"===R&&H(r)}},J=()=>{var e;null===(e=P.current)||void 0===e||e.focus();const r=C?C(_):_.subtract(1,"month");switch(R){case"default":H(r),L(r);break;case"month-options":L((e=>e.subtract(1,"year")));break;case"year-options":L((e=>e.subtract(10,"year")))}},G=()=>{var e;null===(e=P.current)||void 0===e||e.focus();const r=B?B(_):_.add(1,"month");switch(R){case"default":H(r),L(r);break;case"month-options":L((e=>e.add(1,"year")));break;case"year-options":L((e=>e.add(10,"year")))}},q=e=>{L(e),H(e),w||I("default")},Q=()=>{const e=j.toDayjs(c);L(e),H(e),"default"===R?re("reset"):I("default")},ee=e=>{F&&F(e)},re=e=>{$&&$(e)},te=()=>{if(!u||v)return!1;const e=x(u);return"month-options"===R?!S.isPreviousYearWithinRange(_,e):"year-options"===R?!S.isPreviousDecadeWithinRange(_,e):A?A(_):!S.isPreviousMonthWithinRange(_,e)},ne=()=>{if(!g||v)return!1;const e=x(g);return"month-options"===R?!S.isNextYearWithinRange(_,e):"year-options"===R?!S.isNextDecadeWithinRange(_,e):k?k(_):!S.isNextMonthWithinRange(_,e)},ie=()=>{const n=z?z(_):_.format("MMM"),i=x(n,"MMM").format("MMMM"),a=(()=>{if("year-options"===R){const{beginDecade:e,endDecade:r}=S.getStartEndDecade(_);return`${e} to ${r}`}return M?M(_):_.format("YYYY")})(),o={"month-options":`${a}, Close month selection`,"year-options":`${a}, Close year selection`,default:`${a}, Select year`};return e(t,{children:[e(Tn,{"aria-label":`${i}, Select month`,type:"button",$expanded:"month-options"===R,$visible:"default"===R,id:"month-dropdown",onClick:V,onKeyDown:Z,tabIndex:O?0:-1,children:[r(jn,{children:n}),r(Sn,{})]}),e(Tn,{ref:U,"aria-label":o[R],type:"button",$expanded:"default"!==R,id:"year-dropdown",onClick:X,onKeyDown:K,tabIndex:O?0:-1,children:[r(jn,{children:a}),r(Sn,{})]})]})},ae=()=>{switch(R){case"month-options":return r(Un,{calendarDate:_,currentFocus:b,minDate:u,maxDate:g,selectedStartDate:h,selectedEndDate:m,viewCalendarDate:T,isNewSelection:!!f,onMonthSelect:q,allowDisabledSelection:v});case"year-options":return r(Xn,{setCalendarDate:L,calendarDate:_,currentFocus:b,minDate:u,maxDate:g,selectedStartDate:h,selectedEndDate:m,viewCalendarDate:T,isNewSelection:!!f,onYearSelect:q,allowDisabledSelection:v});default:return null}};return e(zn,Object.assign({ref:P,"data-id":"calendar-container","data-testid":"calendar-container","aria-label":T.format("MMMM, YYYY"),role:"group"},Y,{children:[E&&(()=>{const t={"month-options":"year","year-options":"decade",default:"month"}[R];return e(_n,{"data-id":"calendar-header","data-testid":"calendar-header",children:[r(Ln,{children:ie()}),e(Hn,{children:[r(Rn,{"aria-label":`Previous ${t}`,"data-testid":"left-arrow-btn",disabled:te(),focusHighlight:!1,focusOutline:"browser",onClick:J,tabIndex:O?0:-1,children:r(An,{})}),r(Rn,{"aria-label":`Next ${t}`,"data-testid":"right-arrow-btn",disabled:ne(),focusHighlight:!1,focusOutline:"browser",onClick:G,tabIndex:O?0:-1,children:r(kn,{})})]})]})})(),r(Mn,{children:(()=>{const n="function"==typeof d?d({calendarDate:T,currentView:R}):d;if(p)return e(t,{children:["default"===R&&n,ae()]});{const i="default"===R;return e(t,{children:[r(On,{inert:i?void 0:"",children:n}),r(Yn,{$visible:!i,children:ae()})]})}})()}),(()=>{if(!w)return;const t=!!("default"===R)&&D;return e(In,{children:[r(Wn,{ref:N,"data-testid":"cancel-button",styleType:"light",type:"button",onClick:Q,children:"Cancel"}),r(Wn,{"data-testid":"done-button",ref:W,type:"button",onClick:()=>{t||(L(T),"default"===R?re("confirmed"):I("default"))},disabled:t,children:"Done"})]})})()]}))})),Jn=e=>{let r=en.bg,t="transparent";switch(e.$type){case"hover-subtle":r=en["bg-hover"],t=en["bg-hover"];break;case"hover":r=en["bg-hover-strong"],t=en["bg-hover-strong"];break;case"hover-outline":r=en["bg-hover-subtle"],t=en["border-hover"];break;case"selected-outline":r=en["bg-selected"],t=en["border-selected"];break;case"selected-outline-subtle":r=en["bg-selected"],t=en["border-selected-subtle"];break;case"selected-hover":r=en["bg-selected-hover"];break;case"selected-hover-outline":r=en["bg-selected-hover"],t=en["border-selected-hover"]}return{color:r,borderColor:t}},Gn=g.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 2.5rem;
`,qn=g.div`
    position: absolute;
    height: 2.5rem;
    width: 50%;
    transition: ${tn["duration-150"]} ${tn["ease-default"]};
    border: ${nn["width-010"]} ${nn.solid} transparent;
    border-left: none;
    border-right: none;

    ${e=>{if(!e.$type)return;const{color:r,borderColor:t}=Jn(e);return h`
            background-color: ${r};
            background-clip: border-box;
            border-top-color: ${t};
            border-bottom-color: ${t};
        `}}
`,Qn=g(qn)`
    left: 0;
`,ei=g(qn)`
    right: 0;
`,ri=g.div`
    position: absolute;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    transition: ${tn["duration-150"]} ${tn["ease-default"]};

    border: ${nn["width-010"]} ${nn.solid} transparent;
    border-radius: ${on.md};

    ${e=>{if(e.$type){const{color:r,borderColor:t}=Jn(e);return h`
                background-color: ${r};
                background-clip: content-box;
                border-color: ${t};
            `}}}
`,ti=g(ri)`
    right: calc(50% - 1.25rem);
    clip-path: inset(-3px 1.25rem -3px -3px);
`,ni=g(ri)`
    left: calc(50% - 1.25rem);
    clip-path: inset(-3px -3px -3px 1.25rem);
`,ii=g.span`
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 2;
    cursor: ${e=>e.$interactive?"pointer":null===e.$interactive?"default":"not-allowed"};
`,ai=g.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    ${rn["body-md-regular"]}
    transition: ${tn["duration-150"]} ${tn["ease-default"]};

    pointer-events: ${e=>e.$interactive||null===e.$interactive?"auto":"none"};

    ${e=>{const{$disabled:r,$type:t}=e;if(r)return"hidden"===t?h`
                    visibility: hidden;
                `:h`
                color: ${en["text-disabled-subtlest"]};
            `;switch(t){case"selected":return h`
                    font-weight: ${rn.Spec["weight-semibold"]};
                    color: ${en["text-selected"]};
                `;case"selected-hover":return h`
                    font-weight: ${rn.Spec["weight-semibold"]};
                    color: ${en["text-selected-hover"]};
                `;case"current":return h`
                    font-weight: ${rn.Spec["weight-semibold"]};
                    color: ${en["text-primary"]};
                `;case"hover":return h`
                    font-weight: ${rn.Spec["weight-semibold"]};
                    color: ${en["text-hover"]};
                `;case"unavailable":return h`
                    color: ${en["text-disabled-subtlest"]};
                `;case"hidden":return h`
                    visibility: hidden;
                `;default:return h`
                    color: ${en.text};
                `}}}

    &:focus {
        outline: none;
    }
`,oi=g.div`
    position: absolute;
    width: 4px;
    height: 4px;
    background-color: currentColor;
    border-radius: 50%;
    bottom: 4px;
`,si=({bgLeft:t,bgRight:n,circleLeft:i,circleRight:o,labelType:l,disabled:d,interactive:c,currentDateIndicator:u,date:g,onSelect:b,onHover:h,onFocus:m,onHoverEnd:y,onKeyDown:f,tabIndex:p=-1,role:v="button",focusDate:F})=>{const w=x().isSame(g,"day"),D=`${g.format("D MMMM YYYY dddd")}, ${d?"Unavailable":"Available"}`,$=!!F&&F.isSame(g,"day"),E=a(null);s((()=>{var e;$&&E.current&&(null===(e=E.current)||void 0===e||e.focus())}),[$]);return e(Gn,{children:[r(Qn,{$type:t}),r(ti,{$type:i}),r(ei,{$type:n}),r(ni,{$type:o}),r(ii,{$interactive:c,children:e(ai,{ref:E,tabIndex:p,role:v,"aria-label":D,"aria-disabled":!c,"aria-selected":"selected"===l||"selected-hover"===l,$type:l,$disabled:d,$interactive:c,onClick:()=>{b(g)},onKeyDown:e=>{f&&f(e)},onMouseEnter:()=>{h(g)},onMouseLeave:()=>{y&&y(g)},onFocus:()=>{m&&m(g)},children:[g.date(),u&&w&&r(oi,{$disabled:d})]})})]})},li=(e,r,t=!1)=>h`
        ${rn[`${e}-${r}`]}
        ${t?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `,di=e=>{if(e)return h`
            ${r=e,h`
    display: -webkit-box;
    -webkit-line-clamp: ${r};
    -webkit-box-orient: vertical;
    overflow: hidden;
`}
        `;var r},ci=(e,r)=>h`
    ${li(e,r.weight||"regular",r.paragraph)}
    ${((e=!1,r=!1,t)=>r?h`
            display: block;
            ${di(t)}
        `:e?h`
            display: inline;
        `:h`
            display: block;
            ${di(t)}
        `)(r.inline,r.paragraph,r.maxLines)}
    color: ${en.text};
`;var ui;!function(t){const n=(e,r,t)=>{const n=g(e).attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${e=>ci(r,e)}
        `;return n.displayName=`Typography.${t}`,n};t.HeadingXXL=n("h1","heading-xxl","HeadingXXL"),t.HeadingXL=n("h2","heading-xl","HeadingXL"),t.HeadingLG=n("h3","heading-lg","HeadingLG"),t.HeadingMD=n("h4","heading-md","HeadingMD"),t.HeadingSM=n("h5","heading-sm","HeadingSM"),t.HeadingXS=n("h6","heading-xs","HeadingXS");const i=(e,r)=>{const t=g.p.attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${r=>ci(e,r)}
        `;return t.displayName=`Typography.${r}`,t};t.BodyBL=i("body-baseline","BodyBL"),t.BodyMD=i("body-md","BodyMD"),t.BodySM=i("body-sm","BodySM"),t.BodyXS=i("body-xs","BodyXS");const a=(t,n)=>{const i=g.a`
            ${e=>h`
                ${li(t,e.weight||"regular")}
                color: ${en.hyperlink};
                text-decoration: none;

                :hover,
                :active,
                :focus {
                    color: ${en["text-hover"]};
                }
            `}
        `,a=t=>{var{external:n=!1,children:a}=t,o=y(t,["external","children"]);return e(i,Object.assign({},o,{children:[a,n&&r(gi,{})]}))};return a.displayName=`Typography.${n}`,a};t.LinkBL=a("body-baseline","LinkBL"),t.LinkMD=a("body-md","LinkMD"),t.LinkSM=a("body-sm","LinkSM"),t.LinkXS=a("body-xs","LinkXS")}(ui||(ui={}));const gi=g(m)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`,bi=1.25,hi=e=>"minified"===e?12:40;g.div`
    position: relative;
    display: flex;
    align-items: center;
`,g(Cn)`
    z-index: 2;
    position: absolute;
    bottom: ${({$variant:e})=>"default"===e?"0.25rem":"0rem"};
    background-color: ${en.bg};
    box-shadow: 0px 2px 8px
        rgb(from ${en.Primitive["neutral-50"]} r g b / 50%);
    border-radius: 50%;
    padding: 0.5rem;
    width: 2rem;
    height: 2rem;

    ${e=>"right"===e.$direction?h`
                  right: 0;
              `:h`
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
`,g(u)`
    width: 1rem;
    height: 1rem;
    color: ${en["icon-primary"]};
`,g(c)`
    font-size: 1rem;
    color: ${en["icon-primary"]};
`,g.div`
    overflow: hidden;
    flex-grow: 1;
    position: relative;
    height: ${({$variant:e})=>`${20+hi(e)}px`};
`,g.div`
    position: relative;
    white-space: nowrap;
    height: ${bi}rem;
`,g.div`
    display: flex;
    white-space: nowrap;
`,g.div`
    display: inline-block;
    width: ${({$variant:e})=>("minified"===e?12:40)+"px"};
    position: relative;
    border-left: ${nn["width-010"]} ${nn.solid}
        ${en["border-stronger"]};
    ${e=>{let r=0;switch(e.$variant){case"default":r=e.$isLongMarker?bi:.625;break;case"minified":r=e.$isLongMarker?bi:0;break;default:r=0}return h`
            height: ${r}rem;
        `}}
`,g(ui.BodyXS)`
    color: ${en["text-subtle"]};
    position: absolute;
    bottom: 10%;
    left: 10%;
`;const mi=g.div`
    ${e=>"vertical"===e.$type?h`
                display: flex;
                flex-grow: 1;
                align-items: center;
                justify-content: center;
                width: 100%;
                margin: 1px 0px;
            `:h`
                position: absolute;
                height: ${hi(e.$variant)}px;
                width: ${e.$width}px;
                left: ${e.$left}px;
            `}
    background-color: ${({$bgColor:e})=>e};
    cursor: ${({$clickable:e})=>e?"pointer":"default"};

    ${e=>"stripes"===e.$styleType&&h`
            background: repeating-linear-gradient(
                135deg,
                ${e.$bgColor2||en["bg-strongest"]} 0px,
                ${e.$bgColor2||en["bg-strongest"]} 10px,
                ${e.$bgColor||en["bg-stronger"]} 10px,
                ${e.$bgColor||en["bg-stronger"]} 20px
            );
        `}
`;g.div`
    position: absolute;
    top: ${bi}rem;
    height: ${({$variant:e})=>`${hi(e)}px`};
    z-index: 1;
    border-right: ${nn["width-010"]} ${nn.solid}
        ${en["border-stronger"]};
`,g(ui.BodyXS)`
    color: ${e=>e.$color||en.text(e)};
    position: absolute;
    bottom: 0;
    padding-left: 4px;
    padding-bottom: 4px;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;const yi=g.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    user-select: none;
    margin-bottom: 0.188rem;
`,fi=g.div`
    ${rn["body-xs-semibold"]}
    color:${en.text};

    ${e=>e.$disabled&&h`
            color: ${en["text-disabled-subtlest"]};
        `};
`,pi=g.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
`,vi=g.div`
    grid-column: 1 / -1;
    display: flex;
    min-height: 7.625rem;
`,xi=g.div`
    ${rn["body-xs-semibold"]}
    margin: 1rem 0rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 2.5rem;
    color: ${en.text};
    span {
        display: block;
    }
`,Fi=g.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 1px;
`;x.extend($);const wi="YYYY-MM-DD",Di={id:"1",startTime:"",endTime:"",clickable:!1,styleAttributes:{color:"",styleType:"stripes",backgroundColor:en["bg-stronger"],backgroundColor2:en["bg-strongest"]}},$i=({calendarDate:t,disabledDates:n,selectedDate:a,onSelect:s,minDate:l,maxDate:d,slots:c,enableSelection:u=!0,onSlotClick:g})=>{const b=i((()=>S.generateDaysForCurrentWeek(t)),[t]),[h,m]=o(),y=e=>{m(e)},f=()=>{m(void 0)},p=e=>{const r=e.format(wi),t=(e=>{const r=S.isWithinRange(e,l?x(l):void 0,d?x(d):void 0),t=!!n&&n.includes(e.format(wi));return!r||t})(e),i=u&&!t,o=i&&h&&e.isSame(h,"day"),s=[a].includes(r),c={labelType:"available",interactive:u?i:null};return t&&(c.disabled=!0,c.labelType="unavailable"),s&&o?(c.labelType="selected-hover",c.circleLeft="selected-hover-outline",c.circleRight="selected-hover-outline"):s?(c.labelType="selected",c.circleLeft="selected-outline",c.circleRight="selected-outline"):o&&(c.labelType="hover",c.circleLeft="hover-subtle",c.circleRight="hover-subtle"),c};return e(pi,{children:[b.map(((t,n)=>{const i=p(t);return e(yi,{children:[r(si,Object.assign({date:t,calendarDate:x(a),onSelect:()=>{((e,r)=>{!r&&u&&s(e)})(t,!i.interactive)},onHover:y,onHoverEnd:f},i),`day-${n}`),r(fi,{$disabled:i.disabled,children:x(t).format("ddd")})]},`week-day-${n}`)})),r(vi,{children:b.map(((t,n)=>{const i=t.format(wi),a=c&&(c[i]?c[i]:[Di]);return r(Fi,{children:a&&a.map((t=>{const{id:n,startTime:a,endTime:o,clickable:s=!0,styleAttributes:l}=t,{color:d,styleType:c="default",backgroundColor:u,backgroundColor2:b}=l;return r(mi,{$type:"vertical",$variant:"default",$styleType:c,$bgColor:u,$bgColor2:b,$clickable:s,onClick:()=>s&&((e,r)=>{null==g||g(e,r)})(i,t),children:e(xi,{style:{color:d},children:[r("span",{children:S.convertTo12HourFormat(a)}),o&&a&&r("span",{children:"-"}),r("span",{children:S.convertTo12HourFormat(o)})]})},n)}))},`wrapper-${n}`)}))},`week-cell-${t.format(wi)}`)]})},Ei=g.div`
    --header-bottom-spacing: 0.5rem;

    ${sn.MaxWidth.sm} {
        --header-horizontal-inset: 1.25rem;
    }

    min-width: 18.5rem;
`,Ci="YYYY-MM-DD",Bi=e=>{var{disabledDates:t,onWeekDisplayChange:n,onChange:i,value:l,minDate:d,maxDate:c,slots:u,showNavigationHeader:g=!0,enableSelection:b,onSlotClick:h,currentCalendarDate:m}=e,f=y(e,["disabledDates","onWeekDisplayChange","onChange","value","minDate","maxDate","slots","showNavigationHeader","enableSelection","onSlotClick","currentCalendarDate"]);const[p,v]=o(l),F=a(null),w=a(void 0);s((()=>{v(l)}),[l]);const D=e=>{const r=e.format(Ci);v(r),i&&i(r)},$=(e,r)=>{h&&h(e,r)},E=e=>{if(n){const r={week:{firstDayOfWeek:e.startOf("week").format(Ci),lastDayOfWeek:e.endOf("week").format(Ci)},month:e.month()+1,year:e.year()};n(r)}};return r(Ei,Object.assign({},f,{children:r(Kn,{ref:F,dynamicHeight:!0,initialCalendarDate:j.toDayjs(p||m).endOf("week").format(Ci),selectedStartDate:p,getLeftArrowDate:e=>e.subtract(1,"week"),getRightArrowDate:e=>e.add(1,"week"),isLeftArrowDisabled:e=>!!d&&x(e).subtract(1,"week").isBefore(d,"week"),isRightArrowDisabled:e=>!!c&&x(e).add(1,"week").isAfter(c,"week"),onCalendarDateChange:e=>{w.current&&w.current.isSame(e,"week")||E(e),w.current=e},showNavigationHeader:g,minDate:d,maxDate:c,getMonthHeaderLabel:e=>x(e).endOf("week").format("MMM"),getYearHeaderLabel:e=>x(e).endOf("week").format("YYYY"),children:({calendarDate:e})=>r($i,{calendarDate:e,disabledDates:t,selectedDate:p,minDate:d,maxDate:c,onSelect:D,slots:u,enableSelection:b,onSlotClick:$})})}))};export{Bi as TimeSlotWeekView};
//# sourceMappingURL=index.js.map
