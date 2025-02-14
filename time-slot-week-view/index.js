import{jsxs as e,jsx as r,Fragment as t}from"react/jsx-runtime";import n,{useMemo as a,useState as i,useRef as o,useImperativeHandle as s,useEffect as l}from"react";import{ChevronDownIcon as d}from"@lifesg/react-icons/chevron-down";import{ChevronLeftIcon as c}from"@lifesg/react-icons/chevron-left";import{ChevronRightIcon as u}from"@lifesg/react-icons/chevron-right";import h,{keyframes as b,css as g}from"styled-components";import{ExternalIcon as m}from"@lifesg/react-icons/external";function f(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]])}return t}"function"==typeof SuppressedError&&SuppressedError;var y="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function p(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var v={exports:{}};v.exports=function(){var e=1e3,r=6e4,t=36e5,n="millisecond",a="second",i="minute",o="hour",s="day",l="week",d="month",c="quarter",u="year",h="date",b="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var r=["th","st","nd","rd"],t=e%100;return"["+e+(r[(t-20)%10]||r[t]||r[0])+"]"}},y=function(e,r,t){var n=String(e);return!n||n.length>=r?e:""+Array(r+1-n.length).join(t)+e},p={s:y,z:function(e){var r=-e.utcOffset(),t=Math.abs(r),n=Math.floor(t/60),a=t%60;return(r<=0?"+":"-")+y(n,2,"0")+":"+y(a,2,"0")},m:function e(r,t){if(r.date()<t.date())return-e(t,r);var n=12*(t.year()-r.year())+(t.month()-r.month()),a=r.clone().add(n,d),i=t-a<0,o=r.clone().add(n+(i?-1:1),d);return+(-(n+(t-a)/(i?a-o:o-a))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:s,D:h,h:o,m:i,s:a,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",x={};x[v]=f;var $="$isDayjsObject",w=function(e){return e instanceof E||!(!e||!e[$])},D=function e(r,t,n){var a;if(!r)return v;if("string"==typeof r){var i=r.toLowerCase();x[i]&&(a=i),t&&(x[i]=t,a=i);var o=r.split("-");if(!a&&o.length>1)return e(o[0])}else{var s=r.name;x[s]=r,a=s}return!n&&a&&(v=a),a||!n&&v},F=function(e,r){if(w(e))return e.clone();var t="object"==typeof r?r:{};return t.date=e,t.args=arguments,new E(t)},C=p;C.l=D,C.i=w,C.w=function(e,r){return F(e,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var E=function(){function f(e){this.$L=D(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[$]=!0}var y=f.prototype;return y.parse=function(e){this.$d=function(e){var r=e.date,t=e.utc;if(null===r)return new Date(NaN);if(C.u(r))return new Date;if(r instanceof Date)return new Date(r);if("string"==typeof r&&!/Z$/i.test(r)){var n=r.match(g);if(n){var a=n[2]-1||0,i=(n[7]||"0").substring(0,3);return t?new Date(Date.UTC(n[1],a,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],a,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(r)}(e),this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return C},y.isValid=function(){return!(this.$d.toString()===b)},y.isSame=function(e,r){var t=F(e);return this.startOf(r)<=t&&t<=this.endOf(r)},y.isAfter=function(e,r){return F(e)<this.startOf(r)},y.isBefore=function(e,r){return this.endOf(r)<F(e)},y.$g=function(e,r,t){return C.u(e)?this[r]:this.set(t,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,r){var t=this,n=!!C.u(r)||r,c=C.p(e),b=function(e,r){var a=C.w(t.$u?Date.UTC(t.$y,r,e):new Date(t.$y,r,e),t);return n?a:a.endOf(s)},g=function(e,r){return C.w(t.toDate()[e].apply(t.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(r)),t)},m=this.$W,f=this.$M,y=this.$D,p="set"+(this.$u?"UTC":"");switch(c){case u:return n?b(1,0):b(31,11);case d:return n?b(1,f):b(0,f+1);case l:var v=this.$locale().weekStart||0,x=(m<v?m+7:m)-v;return b(n?y-x:y+(6-x),f);case s:case h:return g(p+"Hours",0);case o:return g(p+"Minutes",1);case i:return g(p+"Seconds",2);case a:return g(p+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,r){var t,l=C.p(e),c="set"+(this.$u?"UTC":""),b=(t={},t[s]=c+"Date",t[h]=c+"Date",t[d]=c+"Month",t[u]=c+"FullYear",t[o]=c+"Hours",t[i]=c+"Minutes",t[a]=c+"Seconds",t[n]=c+"Milliseconds",t)[l],g=l===s?this.$D+(r-this.$W):r;if(l===d||l===u){var m=this.clone().set(h,1);m.$d[b](g),m.init(),this.$d=m.set(h,Math.min(this.$D,m.daysInMonth())).$d}else b&&this.$d[b](g);return this.init(),this},y.set=function(e,r){return this.clone().$set(e,r)},y.get=function(e){return this[C.p(e)]()},y.add=function(n,c){var h,b=this;n=Number(n);var g=C.p(c),m=function(e){var r=F(b);return C.w(r.date(r.date()+Math.round(e*n)),b)};if(g===d)return this.set(d,this.$M+n);if(g===u)return this.set(u,this.$y+n);if(g===s)return m(1);if(g===l)return m(7);var f=(h={},h[i]=r,h[o]=t,h[a]=e,h)[g]||1,y=this.$d.getTime()+n*f;return C.w(y,this)},y.subtract=function(e,r){return this.add(-1*e,r)},y.format=function(e){var r=this,t=this.$locale();if(!this.isValid())return t.invalidDate||b;var n=e||"YYYY-MM-DDTHH:mm:ssZ",a=C.z(this),i=this.$H,o=this.$m,s=this.$M,l=t.weekdays,d=t.months,c=t.meridiem,u=function(e,t,a,i){return e&&(e[t]||e(r,n))||a[t].slice(0,i)},h=function(e){return C.s(i%12||12,e,"0")},g=c||function(e,r,t){var n=e<12?"AM":"PM";return t?n.toLowerCase():n};return n.replace(m,(function(e,n){return n||function(e){switch(e){case"YY":return String(r.$y).slice(-2);case"YYYY":return C.s(r.$y,4,"0");case"M":return s+1;case"MM":return C.s(s+1,2,"0");case"MMM":return u(t.monthsShort,s,d,3);case"MMMM":return u(d,s);case"D":return r.$D;case"DD":return C.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return u(t.weekdaysMin,r.$W,l,2);case"ddd":return u(t.weekdaysShort,r.$W,l,3);case"dddd":return l[r.$W];case"H":return String(i);case"HH":return C.s(i,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return g(i,o,!0);case"A":return g(i,o,!1);case"m":return String(o);case"mm":return C.s(o,2,"0");case"s":return String(r.$s);case"ss":return C.s(r.$s,2,"0");case"SSS":return C.s(r.$ms,3,"0");case"Z":return a}return null}(e)||a.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(n,h,b){var g,m=this,f=C.p(h),y=F(n),p=(y.utcOffset()-this.utcOffset())*r,v=this-y,x=function(){return C.m(m,y)};switch(f){case u:g=x()/12;break;case d:g=x();break;case c:g=x()/3;break;case l:g=(v-p)/6048e5;break;case s:g=(v-p)/864e5;break;case o:g=v/t;break;case i:g=v/r;break;case a:g=v/e;break;default:g=v}return b?g:C.a(g)},y.daysInMonth=function(){return this.endOf(d).$D},y.$locale=function(){return x[this.$L]},y.locale=function(e,r){if(!e)return this.$L;var t=this.clone(),n=D(e,r,!0);return n&&(t.$L=n),t},y.clone=function(){return C.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},f}(),S=E.prototype;return F.prototype=S,[["$ms",n],["$s",a],["$m",i],["$H",o],["$W",s],["$M",d],["$y",u],["$D",h]].forEach((function(e){S[e[1]]=function(r){return this.$g(r,e[0],e[1])}})),F.extend=function(e,r){return e.$i||(e(r,E,F),e.$i=!0),F},F.locale=D,F.isDayjs=w,F.unix=function(e){return F(1e3*e)},F.en=x[v],F.Ls=x,F.p={},F}();var x=p(v.exports),$={exports:{}};$.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,t=/\d\d/,n=/\d\d?/,a=/\d*[^-_:/,()\s\d]+/,i={},o=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(r){this[e]=+r}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var r=e.match(/([+-]|\d\d)/g),t=60*r[1]+(+r[2]||0);return 0===t?0:"+"===r[0]?-t:t}(e)}],d=function(e){var r=i[e];return r&&(r.indexOf?r:r.s.concat(r.f))},c=function(e,r){var t,n=i.meridiem;if(n){for(var a=1;a<=24;a+=1)if(e.indexOf(n(a,0,r))>-1){t=a>12;break}}else t=e===(r?"pm":"PM");return t},u={A:[a,function(e){this.afternoon=c(e,!1)}],a:[a,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[t,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[t,s("day")],Do:[a,function(e){var r=i.ordinal,t=e.match(/\d+/);if(this.day=t[0],r)for(var n=1;n<=31;n+=1)r(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[t,s("month")],MMM:[a,function(e){var r=d("months"),t=(d("monthsShort")||r.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],MMMM:[a,function(e){var r=d("months").indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],Y:[/[+-]?\d+/,s("year")],YY:[t,function(e){this.year=o(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(t){var n,a;n=t,a=i&&i.formats;for(var o=(t=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(r,t,n){var i=n&&n.toUpperCase();return t||a[n]||e[n]||a[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,r,t){return r||t.slice(1)}))}))).match(r),s=o.length,l=0;l<s;l+=1){var d=o[l],c=u[d],h=c&&c[0],b=c&&c[1];o[l]=b?{regex:h,parser:b}:d.replace(/^\[|\]$/g,"")}return function(e){for(var r={},t=0,n=0;t<s;t+=1){var a=o[t];if("string"==typeof a)n+=a.length;else{var i=a.regex,l=a.parser,d=e.slice(n),c=i.exec(d)[0];l.call(r,c),e=e.replace(c,"")}}return function(e){var r=e.afternoon;if(void 0!==r){var t=e.hours;r?t<12&&(e.hours+=12):12===t&&(e.hours=0),delete e.afternoon}}(r),r}}return function(e,r,t){t.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(o=e.parseTwoDigitYear);var n=r.prototype,a=n.parse;n.parse=function(e){var r=e.date,n=e.utc,o=e.args;this.$u=n;var s=o[1];if("string"==typeof s){var l=!0===o[2],d=!0===o[3],c=l||d,u=o[2];d&&(u=o[2]),i=this.$locale(),!l&&u&&(i=t.Ls[u]),this.$d=function(e,r,t){try{if(["x","X"].indexOf(r)>-1)return new Date(("X"===r?1e3:1)*e);var n=h(r)(e),a=n.year,i=n.month,o=n.day,s=n.hours,l=n.minutes,d=n.seconds,c=n.milliseconds,u=n.zone,b=new Date,g=o||(a||i?1:b.getDate()),m=a||b.getFullYear(),f=0;a&&!i||(f=i>0?i-1:b.getMonth());var y=s||0,p=l||0,v=d||0,x=c||0;return u?new Date(Date.UTC(m,f,g,y,p,v,x+60*u.offset*1e3)):t?new Date(Date.UTC(m,f,g,y,p,v,x)):new Date(m,f,g,y,p,v,x)}catch(e){return new Date("")}}(r,s,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&r!=this.format(s)&&(this.$d=new Date("")),i={}}else if(s instanceof Array)for(var b=s.length,g=1;g<=b;g+=1){o[1]=s[g-1];var m=t.apply(this,o);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}g===b&&(this.$d=new Date(""))}else a.call(this,e)}}}();var w=p($.exports),D={exports:{}};D.exports=function(e,r,t){r.prototype.isBetween=function(e,r,n,a){var i=t(e),o=t(r),s="("===(a=a||"()")[0],l=")"===a[1];return(s?this.isAfter(i,n):!this.isBefore(i,n))&&(l?this.isBefore(o,n):!this.isAfter(o,n))||(s?this.isBefore(i,n):!this.isAfter(i,n))&&(l?this.isAfter(o,n):!this.isBefore(o,n))}};var F=p(D.exports),C={exports:{}};C.exports=function(e,r){r.prototype.isSameOrAfter=function(e,r){return this.isSame(e,r)||this.isAfter(e,r)}};var E=p(C.exports),S={exports:{}};S.exports=function(e,r){r.prototype.isSameOrBefore=function(e,r){return this.isSame(e,r)||this.isBefore(e,r)}};var B,k,A,M=p(S.exports),z={exports:{}},O=p(z.exports=(B={year:0,month:1,day:2,hour:3,minute:4,second:5},k={},function(e,r,t){var n,a=function(e,r,t){void 0===t&&(t={});var n=new Date(e),a=function(e,r){void 0===r&&(r={});var t=r.timeZoneName||"short",n=e+"|"+t,a=k[n];return a||(a=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:t}),k[n]=a),a}(r,t);return a.formatToParts(n)},i=function(e,r){for(var n=a(e,r),i=[],o=0;o<n.length;o+=1){var s=n[o],l=s.type,d=s.value,c=B[l];c>=0&&(i[c]=parseInt(d,10))}var u=i[3],h=24===u?0:u,b=i[0]+"-"+i[1]+"-"+i[2]+" "+h+":"+i[4]+":"+i[5]+":000",g=+e;return(t.utc(b).valueOf()-(g-=g%1e3))/6e4},o=r.prototype;o.tz=function(e,r){void 0===e&&(e=n);var a=this.utcOffset(),i=this.toDate(),o=i.toLocaleString("en-US",{timeZone:e}),s=Math.round((i-new Date(o))/1e3/60),l=t(o,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-s,!0);if(r){var d=l.utcOffset();l=l.add(a-d,"minute")}return l.$x.$timezone=e,l},o.offsetName=function(e){var r=this.$x.$timezone||t.tz.guess(),n=a(this.valueOf(),r,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=o.startOf;o.startOf=function(e,r){if(!this.$x||!this.$x.$timezone)return s.call(this,e,r);var n=t(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,e,r).tz(this.$x.$timezone,!0)},t.tz=function(e,r,a){var o=a&&r,s=a||r||n,l=i(+t(),s);if("string"!=typeof e)return t(e).tz(s);var d=function(e,r,t){var n=e-60*r*1e3,a=i(n,t);if(r===a)return[n,r];var o=i(n-=60*(a-r)*1e3,t);return a===o?[n,a]:[e-60*Math.min(a,o)*1e3,Math.max(a,o)]}(t.utc(e,o).valueOf(),l,s),c=d[0],u=d[1],h=t(c).utcOffset(u);return h.$x.$timezone=s,h},t.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},t.tz.setDefault=function(e){n=e}}));x.extend(F),x.extend(M),x.extend(E),x.extend(w),x.extend(O),function(e){e.generateDays=e=>{const r=e.startOf("month"),t=x(r).startOf("week");return Y(t).map((e=>_(e)))},e.generateDaysForCurrentWeek=e=>{const r=e.startOf("week");return _(r)},e.generateMonths=e=>{const r=[];for(let t=0;t<12;t++){const n=e.month(t);r.push(x(n))}return r},e.generateDecadeOfYears=e=>{const r=e.year(),t=10*Math.floor(r/10),n=e.year(t),a=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)a.push(n.add(e,"year"));return a},e.getStartEndDecade=e=>{const r=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:r,endDecade:+x(`${r+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const r=x(e,"HH:mm");return r.isValid()?r.format("h:mm a"):""},e.isWithinRange=(e,r,t,n="day")=>!r&&!t||(r&&t?e.isBetween(r,t,n,"[]"):r?e.isSameOrAfter(r,n):e.isSameOrBefore(t,n)),e.isPreviousMonthWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"month"),t,void 0,"month"),e.isPreviousYearWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"year"),t,void 0,"year"),e.isPreviousDecadeWithinRange=(r,t)=>{const{beginDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).subtract(1,"year"),t,void 0,"year")},e.isNextMonthWithinRange=(r,t)=>e.isWithinRange(r.add(1,"month"),void 0,t,"month"),e.isNextYearWithinRange=(r,t)=>e.isWithinRange(r.add(1,"year"),void 0,t,"year"),e.isNextDecadeWithinRange=(r,t)=>{const{endDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).add(1,"year"),void 0,t,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,r)=>({start:e.format("YYYY-MM-DD"),end:e.add(r-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(r,t,n,a)=>{const i=e.isWithinRange(r,n?x(n):void 0,a?x(a):void 0),o=t&&t.includes(r.format("YYYY-MM-DD"));return!i||!!o}}(A||(A={}));const Y=e=>{const r=[e];for(let t=1;t<6;t++){const n=e.add(t,"week");r.push(n)}return r},_=e=>{const r=[];for(let t=0;t<7;t++){const n=e.add(t,"day");r.push(n)}return r},j=[1,3,5,7,8,10,12],L=[4,6,9,11];var T,H,W,R;!function(e){e.clampDay=(r,t,n)=>{const a=parseInt(r),i=parseInt(t),o=parseInt(n);return 0==a?"1":j.includes(i)?Math.min(a,31).toString():L.includes(i)?Math.min(a,30).toString():2===i?e.isLeapYear(o)?Math.min(a,29).toString():Math.min(a,28).toString():r},e.clampMonth=e=>{const r=parseInt(e);return 0==r?"1":r>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,r,t="HH:mm")=>{const n=x(e,t);return x(r,t).diff(n,"minute")},e.toDayjs=e=>e?x(e):x(),e.addMinutesToTime=(e,r,t="HH:mm")=>x(e,t).add(r,"minutes").format(t),e.isSame=(e,r,t="day")=>x(e).isSame(x(r),t)}(T||(T={})),function(e){e.isDateDisabled=(e,r)=>{const{disabledDates:t,minDate:n,maxDate:a}=r;return!!(t&&t.length&&t.includes(e))||(!(!n||!x(e).isBefore(n,"day"))||!(!a||!x(e).isAfter(a,"day")))},e.sanitizeInput=e=>{if(e){if(x(e).isValid())return e}return""}}(H||(H={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(W||(W={})),function(e){e.transformWithSpaces=(e,r)=>{const t="(.{"+r+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(t,"g"),"$1 ").trim()},e.padValue=(e,r)=>{if("0"===e)return r?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,r)=>{const t=Math.floor(r/9);return e.length>=2*t||1===e.split(" ").length&&e.length>t},e.truncateOneLine=(e,r,t,n,a=8)=>{let i=0;r>t&&(i=Math.floor((r-t)/a));const o=n+i;if(o<e.length){const r=Math.floor(o/2);return e.substring(0,r)+" ... "+e.substring(e.length-r,e.length)}return e},e.truncateTwoLines=(e,r,t,n=1.2)=>{const a=Math.floor(2*r/(.6*t))*(2/n);if(e.length<=a)return e;const i=Math.floor(.6*a),o=Math.floor(.2*a);return`${e.substring(0,i)}...${e.substring(e.length-o)}`},e.getTextWidth=(r,t)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=t;return n.measureText(r).width},e.maskValue=(e,t)=>{if(!e)return e;const{maskRange:n,unmaskRange:a,maskChar:i="•",maskRegex:o,maskTransformer:s}=t;if(s)return s(e);if(o)return e.replace(o,i);if(n){const{startIndex:t,endIndex:a}=r(n[0],n[1]);return e.substring(0,t)+i.repeat(e.substring(t,a+1).length)+e.substring(a+1)}if(a){const{startIndex:t,endIndex:n}=r(a[0],a[1]);return i.repeat(e.substring(0,t).length)+e.substring(t,n+1)+i.repeat(e.substring(n+1).length)}return e};const r=(e,r)=>e<r?{startIndex:e,endIndex:r}:{startIndex:r,endIndex:e}}(R||(R={}));const I=h.div`
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
`,P=h.div`
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
`,V=h(P)`
    animation-delay: -0.45s;
`,Z=h(P)`
    animation-delay: -0.3s;
`,X=h(P)`
    animation-delay: -0.15s;
`;var U=Array.isArray,J="object"==typeof y&&y&&y.Object===Object&&y,G="object"==typeof self&&self&&self.Object===Object&&self,q=J||G||Function("return this")(),Q=q.Symbol,K=Q,ee=Object.prototype,re=ee.hasOwnProperty,te=ee.toString,ne=K?K.toStringTag:void 0;var ae=function(e){var r=re.call(e,ne),t=e[ne];try{e[ne]=void 0;var n=!0}catch(e){}var a=te.call(e);return n&&(r?e[ne]=t:delete e[ne]),a},ie=Object.prototype.toString;var oe=ae,se=function(e){return ie.call(e)},le=Q?Q.toStringTag:void 0;var de=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":le&&le in Object(e)?oe(e):se(e)};var ce=de,ue=function(e){return null!=e&&"object"==typeof e};var he=function(e){return"symbol"==typeof e||ue(e)&&"[object Symbol]"==ce(e)},be=U,ge=he,me=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,fe=/^\w*$/;var ye=function(e,r){if(be(e))return!1;var t=typeof e;return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=e&&!ge(e))||(fe.test(e)||!me.test(e)||null!=r&&e in Object(r))};var pe=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},ve=de,xe=pe;var $e,we=function(e){if(!xe(e))return!1;var r=ve(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},De=q["__core-js_shared__"],Fe=($e=/[^.]+$/.exec(De&&De.keys&&De.keys.IE_PROTO||""))?"Symbol(src)_1."+$e:"";var Ce=function(e){return!!Fe&&Fe in e},Ee=Function.prototype.toString;var Se=we,Be=Ce,ke=pe,Ae=function(e){if(null!=e){try{return Ee.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Me=/^\[object .+?Constructor\]$/,ze=Function.prototype,Oe=Object.prototype,Ye=ze.toString,_e=Oe.hasOwnProperty,je=RegExp("^"+Ye.call(_e).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Le=function(e,r){return null==e?void 0:e[r]},Te=function(e){return!(!ke(e)||Be(e))&&(Se(e)?je:Me).test(Ae(e))},He=Le;var We=function(e,r){var t=He(e,r);return Te(t)?t:void 0},Re=We(Object,"create"),Ie=Re;var Ne=function(){this.__data__=Ie?Ie(null):{},this.size=0};var Pe=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},Ve=Re,Ze=Object.prototype.hasOwnProperty;var Xe=function(e){var r=this.__data__;if(Ve){var t=r[e];return"__lodash_hash_undefined__"===t?void 0:t}return Ze.call(r,e)?r[e]:void 0},Ue=Re,Je=Object.prototype.hasOwnProperty;var Ge=function(e){var r=this.__data__;return Ue?void 0!==r[e]:Je.call(r,e)},qe=Re;var Qe=function(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=qe&&void 0===r?"__lodash_hash_undefined__":r,this},Ke=Ne,er=Pe,rr=Xe,tr=Ge,nr=Qe;function ar(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}ar.prototype.clear=Ke,ar.prototype.delete=er,ar.prototype.get=rr,ar.prototype.has=tr,ar.prototype.set=nr;var ir=ar;var or=function(){this.__data__=[],this.size=0};var sr=function(e,r){return e===r||e!=e&&r!=r};var lr=function(e,r){for(var t=e.length;t--;)if(sr(e[t][0],r))return t;return-1},dr=lr,cr=Array.prototype.splice;var ur=function(e){var r=this.__data__,t=dr(r,e);return!(t<0)&&(t==r.length-1?r.pop():cr.call(r,t,1),--this.size,!0)},hr=lr;var br=function(e){var r=this.__data__,t=hr(r,e);return t<0?void 0:r[t][1]},gr=lr;var mr=function(e){return gr(this.__data__,e)>-1},fr=lr;var yr=function(e,r){var t=this.__data__,n=fr(t,e);return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this},pr=or,vr=ur,xr=br,$r=mr,wr=yr;function Dr(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Dr.prototype.clear=pr,Dr.prototype.delete=vr,Dr.prototype.get=xr,Dr.prototype.has=$r,Dr.prototype.set=wr;var Fr=Dr,Cr=We(q,"Map"),Er=ir,Sr=Fr,Br=Cr;var kr=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var Ar=function(e,r){var t=e.__data__;return kr(r)?t["string"==typeof r?"string":"hash"]:t.map},Mr=Ar;var zr=function(e){var r=Mr(this,e).delete(e);return this.size-=r?1:0,r},Or=Ar;var Yr=function(e){return Or(this,e).get(e)},_r=Ar;var jr=function(e){return _r(this,e).has(e)},Lr=Ar;var Tr=function(e,r){var t=Lr(this,e),n=t.size;return t.set(e,r),this.size+=t.size==n?0:1,this},Hr=function(){this.size=0,this.__data__={hash:new Er,map:new(Br||Sr),string:new Er}},Wr=zr,Rr=Yr,Ir=jr,Nr=Tr;function Pr(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Pr.prototype.clear=Hr,Pr.prototype.delete=Wr,Pr.prototype.get=Rr,Pr.prototype.has=Ir,Pr.prototype.set=Nr;var Vr=Pr;function Zr(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var t=function(){var n=arguments,a=r?r.apply(this,n):n[0],i=t.cache;if(i.has(a))return i.get(a);var o=e.apply(this,n);return t.cache=i.set(a,o)||i,o};return t.cache=new(Zr.Cache||Vr),t}Zr.Cache=Vr;var Xr=Zr;var Ur=function(e){var r=Xr(e,(function(e){return 500===t.size&&t.clear(),e})),t=r.cache;return r},Jr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Gr=/\\(\\)?/g,qr=Ur((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(Jr,(function(e,t,n,a){r.push(n?a.replace(Gr,"$1"):t||e)})),r}));var Qr=function(e,r){for(var t=-1,n=null==e?0:e.length,a=Array(n);++t<n;)a[t]=r(e[t],t,e);return a},Kr=U,et=he,rt=Q?Q.prototype:void 0,tt=rt?rt.toString:void 0;var nt=function e(r){if("string"==typeof r)return r;if(Kr(r))return Qr(r,e)+"";if(et(r))return tt?tt.call(r):"";var t=r+"";return"0"==t&&1/r==-1/0?"-0":t},at=nt;var it=U,ot=ye,st=qr,lt=function(e){return null==e?"":at(e)};var dt=he;var ct=function(e,r){return it(e)?e:ot(e,r)?[e]:st(lt(e))},ut=function(e){if("string"==typeof e||dt(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r};var ht=function(e,r){for(var t=0,n=(r=ct(r,e)).length;null!=e&&t<n;)e=e[ut(r[t++])];return t&&t==n?e:void 0};var bt=p((function(e,r,t){var n=null==e?void 0:ht(e,r);return void 0===n?t:n}));const gt=(e,r,t)=>bt(t,r)||bt(e,r),mt=(e,r)=>{const t=r||e.defaultValue;return bt(e.collections,t)},ft={collections:{lifesg:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"lifesg"},yt=e=>r=>{var t;const n=r.theme,a=mt(ft,null==n?void 0:n.motionScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.motion)?gt(a,e,n.overrides.motion):a[e]},pt={"duration-150":yt("duration-150"),"duration-250":yt("duration-250"),"duration-350":yt("duration-350"),"duration-500":yt("duration-500"),"duration-800":yt("duration-800"),"duration-1000":yt("duration-1000"),"ease-default":yt("ease-default"),"ease-standard":yt("ease-standard"),"ease-entrance":yt("ease-entrance"),"ease-exit":yt("ease-exit")},vt={collections:{lifesg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},bookingsg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},rbs:{"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},mylegacy:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ccube:{"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"}},defaultValue:"lifesg"},xt=e=>r=>{var t;const n=r.theme,a=mt(vt,null==n?void 0:n.colourScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.primitiveColour)?gt(a,e,n.overrides.primitiveColour):a[e]},$t={"brand-10":xt("brand-10"),"brand-20":xt("brand-20"),"brand-30":xt("brand-30"),"brand-40":xt("brand-40"),"brand-50":xt("brand-50"),"brand-60":xt("brand-60"),"brand-70":xt("brand-70"),"brand-80":xt("brand-80"),"brand-90":xt("brand-90"),"brand-95":xt("brand-95"),"brand-100":xt("brand-100"),"primary-10":xt("primary-10"),"primary-20":xt("primary-20"),"primary-30":xt("primary-30"),"primary-40":xt("primary-40"),"primary-50":xt("primary-50"),"primary-60":xt("primary-60"),"primary-70":xt("primary-70"),"primary-80":xt("primary-80"),"primary-90":xt("primary-90"),"primary-95":xt("primary-95"),"primary-100":xt("primary-100"),"secondary-10":xt("secondary-10"),"secondary-20":xt("secondary-20"),"secondary-30":xt("secondary-30"),"secondary-40":xt("secondary-40"),"secondary-50":xt("secondary-50"),"secondary-60":xt("secondary-60"),"secondary-70":xt("secondary-70"),"secondary-80":xt("secondary-80"),"secondary-90":xt("secondary-90"),"secondary-95":xt("secondary-95"),"secondary-100":xt("secondary-100"),"neutral-10":xt("neutral-10"),"neutral-20":xt("neutral-20"),"neutral-30":xt("neutral-30"),"neutral-40":xt("neutral-40"),"neutral-50":xt("neutral-50"),"neutral-60":xt("neutral-60"),"neutral-70":xt("neutral-70"),"neutral-80":xt("neutral-80"),"neutral-90":xt("neutral-90"),"neutral-95":xt("neutral-95"),"neutral-100":xt("neutral-100"),"success-10":xt("success-10"),"success-20":xt("success-20"),"success-30":xt("success-30"),"success-40":xt("success-40"),"success-50":xt("success-50"),"success-60":xt("success-60"),"success-70":xt("success-70"),"success-80":xt("success-80"),"success-90":xt("success-90"),"success-95":xt("success-95"),"success-100":xt("success-100"),"warning-10":xt("warning-10"),"warning-20":xt("warning-20"),"warning-30":xt("warning-30"),"warning-40":xt("warning-40"),"warning-50":xt("warning-50"),"warning-60":xt("warning-60"),"warning-70":xt("warning-70"),"warning-80":xt("warning-80"),"warning-90":xt("warning-90"),"warning-95":xt("warning-95"),"warning-100":xt("warning-100"),"error-10":xt("error-10"),"error-20":xt("error-20"),"error-30":xt("error-30"),"error-40":xt("error-40"),"error-50":xt("error-50"),"error-60":xt("error-60"),"error-70":xt("error-70"),"error-80":xt("error-80"),"error-90":xt("error-90"),"error-95":xt("error-95"),"error-100":xt("error-100"),"info-10":xt("info-10"),"info-20":xt("info-20"),"info-30":xt("info-30"),"info-40":xt("info-40"),"info-50":xt("info-50"),"info-60":xt("info-60"),"info-70":xt("info-70"),"info-80":xt("info-80"),"info-90":xt("info-90"),"info-95":xt("info-95"),"info-100":xt("info-100"),white:xt("white"),black:xt("black"),"primary-inverse":xt("primary-inverse")},wt={text:xt("neutral-20"),"text-subtle":xt("neutral-30"),"text-subtler":xt("neutral-50"),"text-subtlest":xt("neutral-60"),"text-primary":xt("primary-50"),"text-hover":xt("primary-40"),"text-selected":xt("primary-50"),"text-selected-hover":xt("primary-40"),"text-disabled":xt("neutral-50"),"text-disabled-subtle":xt("neutral-60"),"text-disabled-subtlest":xt("neutral-80"),"text-selected-disabled":xt("neutral-20"),"text-success":xt("success-40"),"text-warning":xt("warning-40"),"text-error":xt("error-40"),"text-info":xt("info-40"),"text-inverse":xt("white"),icon:xt("neutral-50"),"icon-subtle":xt("neutral-60"),"icon-strongest":xt("neutral-20"),"icon-primary":xt("primary-50"),"icon-primary-subtle":xt("primary-60"),"icon-primary-subtlest":xt("primary-70"),"icon-hover":xt("primary-40"),"icon-selected":xt("primary-50"),"icon-selected-hover":xt("primary-40"),"icon-disabled":xt("neutral-50"),"icon-disabled-subtle":xt("neutral-60"),"icon-selected-disabled":xt("neutral-60"),"icon-success":xt("success-50"),"icon-warning":xt("warning-60"),"icon-error":xt("error-50"),"icon-error-strong":xt("error-40"),"icon-info":xt("info-50"),"icon-inverse":xt("white"),"icon-primary-inverse":xt("primary-inverse"),border:xt("neutral-90"),"border-strong":xt("neutral-70"),"border-stronger":xt("neutral-50"),"border-primary":xt("primary-50"),"border-primary-subtle":xt("primary-60"),"border-hover":xt("primary-90"),"border-hover-strong":xt("primary-60"),"border-selected":xt("primary-50"),"border-selected-subtle":xt("primary-70"),"border-selected-subtlest":xt("primary-90"),"border-selected-hover":xt("primary-40"),"border-focus":xt("primary-60"),"border-focus-strong":xt("primary-50"),"border-disabled":xt("neutral-90"),"border-selected-disabled":xt("neutral-70"),"border-success":xt("success-60"),"border-warning":xt("warning-60"),"border-error":xt("error-60"),"border-error-focus":xt("error-60"),"border-error-focus-strong":xt("error-40"),"border-error-strong":xt("error-40"),"border-info":xt("info-60"),bg:xt("white"),"bg-strong":xt("neutral-100"),"bg-stronger":xt("neutral-95"),"bg-strongest":xt("neutral-90"),"bg-hover":xt("primary-95"),"bg-hover-strong":xt("primary-90"),"bg-hover-subtle":xt("primary-100"),"bg-hover-neutral":xt("neutral-100"),"bg-hover-neutral-strong":xt("neutral-90"),"bg-selected":xt("primary-95"),"bg-selected-hover":xt("primary-90"),"bg-selected-strong":xt("primary-90"),"bg-selected-stronger":xt("primary-70"),"bg-selected-strongest":xt("primary-50"),"bg-selected-strongest-hover":xt("primary-40"),"bg-disabled":xt("neutral-95"),"bg-selected-disabled":xt("neutral-95"),"bg-selected-stronger-disabled":xt("neutral-70"),"bg-success":xt("success-100"),"bg-success-hover":xt("success-95"),"bg-success-strong":xt("success-50"),"bg-success-strong-hover":xt("success-40"),"bg-warning":xt("warning-100"),"bg-warning-hover":xt("warning-95"),"bg-warning-strong":xt("warning-50"),"bg-warning-strong-hover":xt("warning-40"),"bg-info":xt("info-100"),"bg-info-hover":xt("info-95"),"bg-info-strong":xt("info-50"),"bg-info-strong-hover":xt("info-40"),"bg-error":xt("error-100"),"bg-error-hover":xt("error-95"),"bg-error-strong":xt("error-50"),"bg-error-strong-hover":xt("error-40"),"bg-inverse":xt("neutral-20"),"bg-inverse-subtle":xt("neutral-30"),"bg-inverse-subtler":xt("neutral-50"),"bg-inverse-subtlest":xt("neutral-60"),"bg-inverse-hover":xt("neutral-40"),"bg-primary":xt("primary-50"),"bg-primary-subtle":xt("primary-60"),"bg-primary-subtler":xt("primary-95"),"bg-primary-subtlest":xt("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":xt("primary-40"),"bg-primary-subtlest-hover":xt("primary-90"),"bg-primary-subtlest-selected":xt("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:xt("primary-50"),"hyperlink-hover":xt("primary-40"),"hyperlink-visited":xt("primary-40"),"hyperlink-inverse":xt("primary-inverse"),"focus-ring":xt("black"),"focus-ring-inverse":xt("white")},Dt={collections:{lifesg:wt,bookingsg:wt,rbs:wt,mylegacy:wt,ccube:wt},defaultValue:"lifesg"},Ft=e=>r=>{var t;const n=r.theme,a=mt(Dt,null==n?void 0:n.colourScheme),i=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.semanticColour)?gt(a,e,n.overrides.semanticColour):a[e];return"function"==typeof i?i(r):i},Ct={text:Ft("text"),"text-subtle":Ft("text-subtle"),"text-subtler":Ft("text-subtler"),"text-subtlest":Ft("text-subtlest"),"text-primary":Ft("text-primary"),"text-hover":Ft("text-hover"),"text-selected":Ft("text-selected"),"text-selected-hover":Ft("text-selected-hover"),"text-disabled":Ft("text-disabled"),"text-disabled-subtle":Ft("text-disabled-subtle"),"text-disabled-subtlest":Ft("text-disabled-subtlest"),"text-selected-disabled":Ft("text-selected-disabled"),"text-success":Ft("text-success"),"text-warning":Ft("text-warning"),"text-error":Ft("text-error"),"text-info":Ft("text-info"),"text-inverse":Ft("text-inverse"),icon:Ft("icon"),"icon-subtle":Ft("icon-subtle"),"icon-strongest":Ft("icon-strongest"),"icon-primary":Ft("icon-primary"),"icon-primary-subtle":Ft("icon-primary-subtle"),"icon-primary-subtlest":Ft("icon-primary-subtlest"),"icon-hover":Ft("icon-hover"),"icon-selected":Ft("icon-selected"),"icon-selected-hover":Ft("icon-selected-hover"),"icon-disabled":Ft("icon-disabled"),"icon-disabled-subtle":Ft("icon-disabled-subtle"),"icon-selected-disabled":Ft("icon-selected-disabled"),"icon-success":Ft("icon-success"),"icon-warning":Ft("icon-warning"),"icon-error":Ft("icon-error"),"icon-error-strong":Ft("icon-error-strong"),"icon-info":Ft("icon-info"),"icon-inverse":Ft("icon-inverse"),"icon-primary-inverse":Ft("icon-primary-inverse"),border:Ft("border"),"border-strong":Ft("border-strong"),"border-stronger":Ft("border-stronger"),"border-primary":Ft("border-primary"),"border-primary-subtle":Ft("border-primary-subtle"),"border-hover":Ft("border-hover"),"border-hover-strong":Ft("border-hover-strong"),"border-selected":Ft("border-selected"),"border-selected-subtle":Ft("border-selected-subtle"),"border-selected-subtlest":Ft("border-selected-subtlest"),"border-selected-hover":Ft("border-selected-hover"),"border-focus":Ft("border-focus"),"border-focus-strong":Ft("border-focus-strong"),"border-disabled":Ft("border-disabled"),"border-selected-disabled":Ft("border-selected-disabled"),"border-success":Ft("border-success"),"border-warning":Ft("border-warning"),"border-error":Ft("border-error"),"border-error-focus":Ft("border-error-focus"),"border-error-focus-strong":Ft("border-error-focus-strong"),"border-error-strong":Ft("border-error-strong"),"border-info":Ft("border-info"),bg:Ft("bg"),"bg-strong":Ft("bg-strong"),"bg-stronger":Ft("bg-stronger"),"bg-strongest":Ft("bg-strongest"),"bg-hover":Ft("bg-hover"),"bg-hover-strong":Ft("bg-hover-strong"),"bg-hover-subtle":Ft("bg-hover-subtle"),"bg-hover-neutral":Ft("bg-hover-neutral"),"bg-hover-neutral-strong":Ft("bg-hover-neutral-strong"),"bg-selected":Ft("bg-selected"),"bg-selected-hover":Ft("bg-selected-hover"),"bg-selected-strong":Ft("bg-selected-strong"),"bg-selected-stronger":Ft("bg-selected-stronger"),"bg-selected-strongest":Ft("bg-selected-strongest"),"bg-selected-strongest-hover":Ft("bg-selected-strongest-hover"),"bg-disabled":Ft("bg-disabled"),"bg-selected-disabled":Ft("bg-selected-disabled"),"bg-selected-stronger-disabled":Ft("bg-selected-stronger-disabled"),"bg-success":Ft("bg-success"),"bg-success-hover":Ft("bg-success-hover"),"bg-success-strong":Ft("bg-success-strong"),"bg-success-strong-hover":Ft("bg-success-strong-hover"),"bg-warning":Ft("bg-warning"),"bg-warning-hover":Ft("bg-warning-hover"),"bg-warning-strong":Ft("bg-warning-strong"),"bg-warning-strong-hover":Ft("bg-warning-strong-hover"),"bg-info":Ft("bg-info"),"bg-info-hover":Ft("bg-info-hover"),"bg-info-strong":Ft("bg-info-strong"),"bg-info-strong-hover":Ft("bg-info-strong-hover"),"bg-error":Ft("bg-error"),"bg-error-hover":Ft("bg-error-hover"),"bg-error-strong":Ft("bg-error-strong"),"bg-error-strong-hover":Ft("bg-error-strong-hover"),"bg-inverse":Ft("bg-inverse"),"bg-inverse-subtle":Ft("bg-inverse-subtle"),"bg-inverse-subtler":Ft("bg-inverse-subtler"),"bg-inverse-subtlest":Ft("bg-inverse-subtlest"),"bg-inverse-hover":Ft("bg-inverse-hover"),"bg-primary":Ft("bg-primary"),"bg-primary-subtle":Ft("bg-primary-subtle"),"bg-primary-subtler":Ft("bg-primary-subtler"),"bg-primary-subtlest":Ft("bg-primary-subtlest"),"bg-available":Ft("bg-available"),"bg-primary-hover":Ft("bg-primary-hover"),"bg-primary-subtlest-hover":Ft("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":Ft("bg-primary-subtlest-selected"),"overlay-strong":Ft("overlay-strong"),"overlay-subtle":Ft("overlay-subtle"),hyperlink:Ft("hyperlink"),"hyperlink-hover":Ft("hyperlink-hover"),"hyperlink-visited":Ft("hyperlink-visited"),"hyperlink-inverse":Ft("hyperlink-inverse"),"focus-ring":Ft("focus-ring"),"focus-ring-inverse":Ft("focus-ring-inverse")},Et={collections:{lifesg:{"width-010":1,"width-020":2,"width-040":4,solid:"solid","dashed-default":e=>r=>{var t,n,a;const{thickness:i,radius:o,colour:s}=e||{},l=null!==(t="function"==typeof i?i(r):i)&&void 0!==t?t:kt["width-010"](r),d=null!==(n="function"==typeof o?o(r):o)&&void 0!==n?n:0,c=null!==(a="function"==typeof s?s(r):s)&&void 0!==a?a:Ct.border(r),u=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${d}' ry='${d}' stroke='${c}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return g`
            background-image: url("data:image/svg+xml,${u}");
            border-radius: ${d};
        `}}},defaultValue:"lifesg"},St=e=>r=>{var t;const n=r.theme,a=mt(Et,null==n?void 0:n.borderScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.border)?`${gt(a,e,n.overrides.border)}px`:`${a[e]}px`},Bt=e=>1===e.length&&"theme"in e[0],kt={"width-010":St("width-010"),"width-020":St("width-020"),"width-040":St("width-040"),solid:(At="solid",e=>{var r;const t=e.theme,n=mt(Et,null==t?void 0:t.borderScheme),a=(null===(r=null==t?void 0:t.overrides)||void 0===r?void 0:r.border)?gt(n,At,t.overrides.border):n[At];return"function"==typeof a?a(e):a}),"dashed-default":(e=>(...r)=>t=>{var n;const a=Bt(r)?[]:r,i=Bt(r)?r[0]:t,o=i.theme,s=mt(Et,null==o?void 0:o.borderScheme);return((null===(n=null==o?void 0:o.overrides)||void 0===n?void 0:n.border)?gt(s,e,o.overrides.border):s[e])(...a)(i)})("dashed-default")};var At;const Mt={collections:{lifesg:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"lifesg"},zt=e=>r=>{var t;const n=r.theme,a=mt(Mt,null==n?void 0:n.breakpointScheme);let i;return i=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.breakpoint)?gt(a,e,n.overrides.breakpoint):a[e],i},Ot={"xxs-min":zt("xxs-min"),"xxs-max":zt("xxs-max"),"xs-min":zt("xs-min"),"xs-max":zt("xs-max"),"sm-min":zt("sm-min"),"sm-max":zt("sm-max"),"md-min":zt("md-min"),"md-max":zt("md-max"),"lg-min":zt("lg-min"),"lg-max":zt("lg-max"),"xl-min":zt("xl-min"),"xl-max":zt("xl-max"),"xxl-min":zt("xxl-min"),"xxs-column":zt("xxs-column"),"xs-column":zt("xs-column"),"sm-column":zt("sm-column"),"md-column":zt("md-column"),"lg-column":zt("lg-column"),"xl-column":zt("xl-column"),"xxl-column":zt("xxl-column"),"xxs-gutter":zt("xxs-gutter"),"xs-gutter":zt("xs-gutter"),"sm-gutter":zt("sm-gutter"),"md-gutter":zt("md-gutter"),"lg-gutter":zt("lg-gutter"),"xl-gutter":zt("xl-gutter"),"xxl-gutter":zt("xxl-gutter"),"xxs-margin":zt("xxs-margin"),"xs-margin":zt("xs-margin"),"sm-margin":zt("sm-margin"),"md-margin":zt("md-margin"),"lg-margin":zt("lg-margin"),"xl-margin":zt("xl-margin"),"xxl-margin":zt("xxl-margin")},Yt=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,t)=>(r[t]=((e,r)=>{const t=Ot["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const n=t(r);return`@media screen and (${e}: ${n}px)`}})(e,t),r)),{}),_t={MaxWidth:Yt("max-width"),MinWidth:Yt("min-width")},jt={"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.625rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.625rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"},Lt={collections:{lifesg:jt,bookingsg:{"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.75rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.75rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"},rbs:jt,mylegacy:jt,ccube:jt},defaultValue:"lifesg"},Tt=e=>r=>{var t;const n=r.theme,a=mt(Lt,null==n?void 0:n.fontScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.fontSpec)?gt(a,e,n.overrides.fontSpec):a[e]},Ht={"header-size-xxl":Tt("header-size-xxl"),"header-size-xl":Tt("header-size-xl"),"header-size-lg":Tt("header-size-lg"),"header-size-md":Tt("header-size-md"),"header-size-sm":Tt("header-size-sm"),"header-size-xs":Tt("header-size-xs"),"header-lh-xxl":Tt("header-lh-xxl"),"header-lh-xl":Tt("header-lh-xl"),"header-lh-lg":Tt("header-lh-lg"),"header-lh-md":Tt("header-lh-md"),"header-lh-sm":Tt("header-lh-sm"),"header-lh-xs":Tt("header-lh-xs"),"header-ls-xxl":Tt("header-ls-xxl"),"header-ls-xl":Tt("header-ls-xl"),"header-ls-lg":Tt("header-ls-lg"),"header-ls-md":Tt("header-ls-md"),"header-ls-sm":Tt("header-ls-sm"),"header-ls-xs":Tt("header-ls-xs"),"weight-light":Tt("weight-light"),"weight-regular":Tt("weight-regular"),"weight-semibold":Tt("weight-semibold"),"weight-bold":Tt("weight-bold"),"font-family":Tt("font-family"),"body-size-baseline":Tt("body-size-baseline"),"body-size-md":Tt("body-size-md"),"body-size-sm":Tt("body-size-sm"),"body-size-xs":Tt("body-size-xs"),"body-lh-baseline":Tt("body-lh-baseline"),"body-lh-md":Tt("body-lh-md"),"body-lh-sm":Tt("body-lh-sm"),"body-lh-xs":Tt("body-lh-xs"),"body-ls-baseline":Tt("body-ls-baseline"),"body-ls-md":Tt("body-ls-md"),"body-ls-sm":Tt("body-ls-sm"),"body-ls-xs":Tt("body-ls-xs"),"formlabel-size-baseline":Tt("formlabel-size-baseline"),"formlabel-size-lg":Tt("formlabel-size-lg"),"formlabel-lh-baseline":Tt("formlabel-lh-baseline"),"formlabel-lh-lg":Tt("formlabel-lh-lg"),"formlabel-ls-baseline":Tt("formlabel-ls-baseline"),"formlabel-ls-lg":Tt("formlabel-ls-lg")},Wt={collections:{lifesg:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"lifesg"},Rt=e=>r=>{var t;const n=r.theme,a=mt(Wt,null==n?void 0:n.radiusScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.radius)?`${gt(a,e,n.overrides.radius)}px`:`${a[e]}px`},It={none:Rt("none"),xs:Rt("xs"),sm:Rt("sm"),md:Rt("md"),lg:Rt("lg"),full:Rt("full")},Nt={collections:{lifesg:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"lifesg"},Pt=e=>r=>{var t;const n=r.theme,a=mt(Nt,null==n?void 0:n.spacingScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.spacing)?`${gt(a,e,n.overrides.spacing)}px`:`${a[e]}px`},Vt={"spacing-0":Pt("spacing-0"),"spacing-4":Pt("spacing-4"),"spacing-8":Pt("spacing-8"),"spacing-12":Pt("spacing-12"),"spacing-16":Pt("spacing-16"),"spacing-20":Pt("spacing-20"),"spacing-24":Pt("spacing-24"),"spacing-32":Pt("spacing-32"),"spacing-40":Pt("spacing-40"),"spacing-48":Pt("spacing-48"),"spacing-64":Pt("spacing-64"),"spacing-72":Pt("spacing-72"),"layout-xs":Pt("layout-xs"),"layout-sm":Pt("layout-sm"),"layout-md":Pt("layout-md"),"layout-lg":Pt("layout-lg"),"layout-xl":Pt("layout-xl"),"layout-xxl":Pt("layout-xxl"),"layout-xxxl":Pt("layout-xxxl")},Zt=(e,r,t,n)=>g`
    font-family: ${Tt("font-family")};
    font-size: ${Tt(e)};
    font-weight: ${Tt(r)};
    line-height: ${Tt(t)};
    letter-spacing: ${Tt(n)};
`,Xt={"header-xxl-light":Zt("header-size-xxl","weight-light","header-lh-xxl","header-ls-xxl"),"header-xxl-regular":Zt("header-size-xxl","weight-regular","header-lh-xxl","header-ls-xxl"),"header-xxl-semibold":Zt("header-size-xxl","weight-semibold","header-lh-xxl","header-ls-xxl"),"header-xxl-bold":Zt("header-size-xxl","weight-bold","header-lh-xxl","header-ls-xxl"),"header-xl-light":Zt("header-size-xl","weight-light","header-lh-xl","header-ls-xl"),"header-xl-regular":Zt("header-size-xl","weight-regular","header-lh-xl","header-ls-xl"),"header-xl-semibold":Zt("header-size-xl","weight-semibold","header-lh-xl","header-ls-xl"),"header-xl-bold":Zt("header-size-xl","weight-bold","header-lh-xl","header-ls-xl"),"header-lg-light":Zt("header-size-lg","weight-light","header-lh-lg","header-ls-lg"),"header-lg-regular":Zt("header-size-lg","weight-regular","header-lh-lg","header-ls-lg"),"header-lg-semibold":Zt("header-size-lg","weight-semibold","header-lh-lg","header-ls-lg"),"header-lg-bold":Zt("header-size-lg","weight-bold","header-lh-lg","header-ls-lg"),"header-md-light":Zt("header-size-md","weight-light","header-lh-md","header-ls-md"),"header-md-regular":Zt("header-size-md","weight-regular","header-lh-md","header-ls-md"),"header-md-semibold":Zt("header-size-md","weight-semibold","header-lh-md","header-ls-md"),"header-md-bold":Zt("header-size-md","weight-bold","header-lh-md","header-ls-md"),"header-sm-light":Zt("header-size-sm","weight-light","header-lh-sm","header-ls-sm"),"header-sm-regular":Zt("header-size-sm","weight-regular","header-lh-sm","header-ls-sm"),"header-sm-semibold":Zt("header-size-sm","weight-semibold","header-lh-sm","header-ls-sm"),"header-sm-bold":Zt("header-size-sm","weight-bold","header-lh-sm","header-ls-sm"),"header-xs-light":Zt("header-size-xs","weight-light","header-lh-xs","header-ls-xs"),"header-xs-regular":Zt("header-size-xs","weight-regular","header-lh-xs","header-ls-xs"),"header-xs-semibold":Zt("header-size-xs","weight-semibold","header-lh-xs","header-ls-xs"),"header-xs-bold":Zt("header-size-xs","weight-bold","header-lh-xs","header-ls-xs"),"body-baseline-light":Zt("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline"),"body-baseline-regular":Zt("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline"),"body-baseline-semibold":Zt("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline"),"body-baseline-bold":Zt("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline"),"body-md-light":Zt("body-size-md","weight-light","body-lh-md","body-ls-md"),"body-md-regular":Zt("body-size-md","weight-regular","body-lh-md","body-ls-md"),"body-md-semibold":Zt("body-size-md","weight-semibold","body-lh-md","body-ls-md"),"body-md-bold":Zt("body-size-md","weight-bold","body-lh-md","body-ls-md"),"body-sm-light":Zt("body-size-sm","weight-light","body-lh-sm","body-ls-sm"),"body-sm-regular":Zt("body-size-sm","weight-regular","body-lh-sm","body-ls-sm"),"body-sm-semibold":Zt("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm"),"body-sm-bold":Zt("body-size-sm","weight-bold","body-lh-sm","body-ls-sm"),"body-xs-light":Zt("body-size-xs","weight-light","body-lh-xs","body-ls-xs"),"body-xs-regular":Zt("body-size-xs","weight-regular","body-lh-xs","body-ls-xs"),"body-xs-semibold":Zt("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs"),"body-xs-bold":Zt("body-size-xs","weight-bold","body-lh-xs","body-ls-xs"),"formlabel-baseline-semibold":Zt("formlabel-size-baseline","weight-semibold","formlabel-lh-baseline","formlabel-ls-baseline"),"formlabel-lg-semibold":Zt("formlabel-size-lg","weight-semibold","formlabel-lh-lg","formlabel-ls-lg")},Ut={collections:{lifesg:Xt,bookingsg:Xt,rbs:Xt,mylegacy:Xt,ccube:Xt},defaultValue:"lifesg"},Jt=e=>r=>{var t;const n=r.theme,a=mt(Ut,null==n?void 0:n.fontScheme),i=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.font)?gt(a,e,n.overrides.font):a[e];return"function"==typeof i?i(r):i},Gt={"header-xxl-light":Jt("header-xxl-light"),"header-xxl-regular":Jt("header-xxl-regular"),"header-xxl-semibold":Jt("header-xxl-semibold"),"header-xxl-bold":Jt("header-xxl-bold"),"header-xl-light":Jt("header-xl-light"),"header-xl-regular":Jt("header-xl-regular"),"header-xl-semibold":Jt("header-xl-semibold"),"header-xl-bold":Jt("header-xl-bold"),"header-lg-light":Jt("header-lg-light"),"header-lg-regular":Jt("header-lg-regular"),"header-lg-semibold":Jt("header-lg-semibold"),"header-lg-bold":Jt("header-lg-bold"),"header-md-light":Jt("header-md-light"),"header-md-regular":Jt("header-md-regular"),"header-md-semibold":Jt("header-md-semibold"),"header-md-bold":Jt("header-md-bold"),"header-sm-light":Jt("header-sm-light"),"header-sm-regular":Jt("header-sm-regular"),"header-sm-semibold":Jt("header-sm-semibold"),"header-sm-bold":Jt("header-sm-bold"),"header-xs-light":Jt("header-xs-light"),"header-xs-regular":Jt("header-xs-regular"),"header-xs-semibold":Jt("header-xs-semibold"),"header-xs-bold":Jt("header-xs-bold"),"body-baseline-light":Jt("body-baseline-light"),"body-baseline-regular":Jt("body-baseline-regular"),"body-baseline-semibold":Jt("body-baseline-semibold"),"body-baseline-bold":Jt("body-baseline-bold"),"body-md-light":Jt("body-md-light"),"body-md-regular":Jt("body-md-regular"),"body-md-semibold":Jt("body-md-semibold"),"body-md-bold":Jt("body-md-bold"),"body-sm-light":Jt("body-sm-light"),"body-sm-regular":Jt("body-sm-regular"),"body-sm-semibold":Jt("body-sm-semibold"),"body-sm-bold":Jt("body-sm-bold"),"body-xs-light":Jt("body-xs-light"),"body-xs-regular":Jt("body-xs-regular"),"body-xs-semibold":Jt("body-xs-semibold"),"body-xs-bold":Jt("body-xs-bold"),"formlabel-baseline-semibold":Jt("formlabel-baseline-semibold"),"formlabel-lg-semibold":Jt("formlabel-lg-semibold")},qt=Object.assign(Object.assign({},Ct),{Primitive:$t}),Qt=Object.assign(Object.assign({},Gt),{Spec:Ht}),Kt=pt,en=kt,rn=Vt,tn=It,nn=_t,an=h.button`
    padding: ${rn["spacing-8"]} ${rn["spacing-16"]};
    min-width: 4rem;
    border: ${en["width-010"]} ${en.solid} transparent;
    border-radius: ${tn.sm};
    transition: all ${Kt["duration-250"]} ${Kt["ease-default"]};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return g`
                    background-color: ${qt.Primitive.white};
                    border-color: ${e.$buttonIsDanger?qt["border-error-strong"]:qt["border-primary"]};

                    color: ${e.$buttonIsDanger?qt["text-error"]:qt["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${qt["bg-hover-neutral"]};
                    }
                `;case"light":return g`
                    background-color: ${qt.bg};
                    border-color: ${qt.border};

                    color: ${e.$buttonIsDanger?qt["text-error"]:qt["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${qt["bg-hover-neutral"]};
                    }
                `;case"link":return g`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?qt["text-error"]:qt["text-primary"]};
                    &:hover,
                    &:active {
                        background-color: ${qt["bg-hover-neutral"]};
                    }
                `;case"disabled":return g`
                    background-color: ${qt["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${qt["text-disabled"]};
                `;default:return g`
                    background-color: ${e.$buttonIsDanger?qt["bg-error-strong"]:qt["bg-primary"]};

                    ${nn.MaxWidth.md} {
                        width: 100%;
                    }

                    color: ${qt["text-inverse"]};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?qt["bg-error-strong-hover"]:qt["bg-primary-hover"]};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return g`
                    height: 2.5rem;
                    ${Qt["body-md-semibold"]}

                    ${nn.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return g`
                    height: 4rem;
                    ${Qt["header-md-semibold"]}

                    ${nn.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return g`
                    height: 3rem;
                    ${Qt["header-xs-semibold"]}

                    ${nn.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,on=h((({color:t,className:n,size:a})=>e(I,Object.assign({className:n,$size:a,$color:t},{children:[r(P,{id:"inner1"}),r(V,{id:"inner2"}),r(Z,{id:"inner3"}),r(X,{id:"inner4"})]}))))`
    margin-right: 0.5rem;
`,sn=(t,n)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:s="default",danger:l=!1}=t,d=f(t,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return e(an,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:i},c,d,{children:[o&&r(on,{}),r("span",{children:a})]}))};sn.displayName="Button.Default";const ln=(t,n)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:s="default",danger:l=!1}=t,d=f(t,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return e(an,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:i},c,d,{children:[o&&r(on,{}),r("span",{children:a})]}))};ln.displayName="Button.Small";const dn=(t,n)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:s="default",danger:l=!1}=t,d=f(t,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"large",$buttonIsDanger:l};return e(an,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:i},c,d,{children:[o&&r(on,{}),r("span",{children:a})]}))};dn.displayName="Button.Large";const cn={Default:n.forwardRef(sn),Small:n.forwardRef(ln),Large:n.forwardRef(dn)},un=h.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${rn["spacing-32"]};
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
                background-color: ${qt["bg-hover-neutral"]};
            `}
    }
`,hn=n.forwardRef(((e,t)=>{var{children:n,focusHighlight:a=!0,focusOutline:i="none",type:o="button"}=e,s=f(e,["children","focusHighlight","focusOutline","type"]);return r(un,Object.assign({ref:t,$outline:i,$highlight:a,type:o},s,{children:n}))})),bn=g`
    color: ${qt.icon};
    height: 1rem;
    width: 1rem;
`,gn=h(c)`
    ${bn}
`,mn=h(u)`
    ${bn}
`,fn=h(d)`
    ${bn}
    transition: transform 250ms ease-in-out;
    margin-left: 0.5rem;
`,yn=h.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    padding-top: var(--vertical-inset);
    padding-bottom: var(--vertical-inset);
`,pn=h.div`
    display: flex;
    flex: 1;
    position: relative;
`,vn=h.div`
    isolation: isolate;
    width: 100%;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,xn=h.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${qt.bg};

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);

    ${e=>{if(!e.$visible)return g`
                display: none;
            `}}
`,$n=h.div`
    display: flex;
    justify-content: space-between;

    padding-left: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-right: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-bottom: var(--header-bottom-spacing);
`,wn=h.div`
    display: flex;
`,Dn=h.button`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;

    ${e=>!1===e.$visible?g`
                display: none;
            `:e.$expanded?g`
                ${fn} {
                    transform: rotate(180deg);
                }
            `:void 0};
`,Fn=h.span`
    ${Qt["body-md-regular"]}
    color: ${qt.text};
`,Cn=h.div`
    display: flex;
`,En=h(hn)`
    margin: auto 0;
    padding: 0.75rem;

    :disabled {
        cursor: not-allowed;
    }
`,Sn=h.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,Bn=h(cn.Small)`
    flex: 1;
`,kn=h.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 2.5rem);
    align-content: center;
    justify-content: center;

    gap: 0.5rem 0;
`,An=h.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${tn.md};
    margin: 0 0.5rem;
    transition: ${Kt["duration-150"]} ${Kt["ease-default"]};

    // default styles
    ${Qt["body-md-regular"]}
    border-radius: ${tn.md};
    border: ${en["width-010"]} ${en.solid} transparent;
    background-clip: border-box;
    color: ${qt.text};
    cursor: default;

    // cursor style
    ${e=>e.$interactive?g`
                cursor: pointer;
            `:e.$disabledDisplay?g`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:e,$interactive:r,$disabledDisplay:t})=>"selected-month"===e?g`
                background: ${qt["bg-selected"]};
                border-color: ${qt["border-selected"]};
                color: ${qt["text-selected"]};
                font-weight: ${Qt.Spec["weight-semibold"]};

                ${r&&g`
                    &:hover {
                        background: ${qt["bg-selected-hover"]};
                        border-color: ${qt["border-selected-hover"]};
                        color: ${qt["text-selected-hover"]};
                    }
                `}
            `:"current-month"===e?g`
                color: ${qt["text-primary"]};
                font-weight: ${Qt.Spec["weight-semibold"]};
            `:t?g`
                color: ${qt["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:r})=>{if(r)return"selected-month"===e?g`
                &:hover {
                    background: ${qt["bg-selected-hover"]};
                    border-color: ${qt["border-selected-hover"]};
                    color: ${qt["text-selected-hover"]};
                    font-weight: ${Qt.Spec["weight-semibold"]};
                }
            `:g`
            &:hover {
                background: ${qt["bg-hover"]};
                color: ${qt["text-hover"]};
                font-weight: ${Qt.Spec["weight-semibold"]};
            }
        `}}
`,Mn=({calendarDate:e,currentFocus:t,selectedStartDate:n,selectedEndDate:i,viewCalendarDate:o,isNewSelection:s,minDate:l,maxDate:d,allowDisabledSelection:c,onMonthSelect:u})=>{const h=a((()=>A.generateMonths(x(e))),[e]),b=e=>{const r="start"===t&&i&&e.isAfter(i,"month")&&s,a="end"===t&&n&&e.isBefore(n,"month")&&s;return r||a},g=e=>{const r=e.format("MMMM"),t=(n=e,!A.isWithinRange(n,l?x(l):void 0,d?x(d):void 0,"month"));var n;const a=o.isSame(e,"month")?"selected-month":x().isSame(e,"month")?"current-month":"default";return{disabledDisplay:t||b(e),interactive:!t||c,month:r,variant:a}};return h.length?r(kn,{children:h.map((e=>{const{disabledDisplay:t,interactive:n,variant:a,month:i}=g(e);return r(An,Object.assign({$variant:a,$disabledDisplay:t,$interactive:n,onClick:()=>((e,r)=>{r||u(e)})(e,!n)},{children:i}),i)}))}):null},zn=h.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-content: center;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
`,On=h.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0.5rem;
    transition: ${Kt["duration-150"]} ${Kt["ease-default"]};
    padding: 0.5rem;

    // default styles
    ${Qt["body-md-regular"]}
    border-radius: ${tn.md};
    border: ${en["width-010"]} ${en.solid} transparent;
    background-clip: border-box;
    color: ${qt.text};
    cursor: default;

    // cursor style
    ${({$interactive:e,$disabledDisplay:r})=>e?g`
                cursor: pointer;
            `:r?g`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:e,$interactive:r,$disabledDisplay:t})=>"selected-year"===e?g`
                background: ${qt["bg-selected"]};
                border-color: ${qt["border-selected"]};
                color: ${qt["text-selected"]};
                font-weight: ${Qt.Spec["weight-semibold"]};

                ${r&&g`
                    &:hover {
                        background: ${qt["bg-selected-hover"]};
                        border-color: ${qt["border-selected-hover"]};
                        color: ${qt["text-selected-hover"]};
                    }
                `}
            `:"current-year"===e?g`
                color: ${qt["text-primary"]};
                font-weight: ${Qt.Spec["weight-semibold"]};
            `:"other-decade"===e||t?g`
                color: ${qt["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:r})=>{if(r)return"selected-year"===e?g`
                &:hover {
                    background: ${qt["bg-selected-hover"]};
                    border-color: ${qt["border-selected-hover"]};
                    color: ${qt["text-selected-hover"]};
                    font-weight: ${Qt.Spec["weight-semibold"]};
                }
            `:g`
            &:hover {
                background: ${qt["bg-hover"]};
                color: ${qt["text-hover"]};
                font-weight: ${Qt.Spec["weight-semibold"]};
            }
        `}}
`,Yn=({calendarDate:e,currentFocus:t,selectedStartDate:n,selectedEndDate:i,viewCalendarDate:o,isNewSelection:s,minDate:l,maxDate:d,allowDisabledSelection:c,onYearSelect:u})=>{const h=a((()=>A.generateDecadeOfYears(x(e))),[e]),b=e=>{const r="start"===t&&i&&e.isAfter(i,"year")&&s,a="end"===t&&n&&e.isBefore(n,"year")&&s;return r||a},g=e=>{const r=[0,11].includes(h.indexOf(e)),t=e.year(),n=(a=e,!A.isWithinRange(a,l?x(l):void 0,d?x(d):void 0,"year"));var a;const i=r?"other-decade":o.isSame(e,"year")?"selected-year":x().isSame(e,"year")?"current-year":"default";return{disabledDisplay:n||b(e),interactive:!n||c,year:t,variant:i}};return h.length?r(zn,{children:h.map((e=>{const{disabledDisplay:t,interactive:n,variant:a,year:i}=g(e);return r(On,Object.assign({$variant:a,$disabledDisplay:t,$interactive:n,onClick:()=>((e,r)=>{r||u(e)})(e,!n)},{children:i}),i)}))}):null},_n=n.forwardRef(((n,a)=>{var{children:d,initialCalendarDate:c,minDate:u,maxDate:h,currentFocus:b,selectedStartDate:g,selectedEndDate:m,selectWithinRange:y,dynamicHeight:p=!1,allowDisabledSelection:v,onCalendarDateChange:$,withButton:w,doneButtonDisabled:D,onDismiss:F,showNavigationHeader:C=!0,getLeftArrowDate:E,getRightArrowDate:S,isLeftArrowDisabled:B,isRightArrowDisabled:k,getMonthHeaderLabel:M,getYearHeaderLabel:z}=n,O=f(n,["children","initialCalendarDate","minDate","maxDate","currentFocus","selectedStartDate","selectedEndDate","selectWithinRange","dynamicHeight","allowDisabledSelection","onCalendarDateChange","withButton","doneButtonDisabled","onDismiss","showNavigationHeader","getLeftArrowDate","getRightArrowDate","isLeftArrowDisabled","isRightArrowDisabled","getMonthHeaderLabel","getYearHeaderLabel"]);const[Y,_]=i(T.toDayjs(c)),[j,L]=i(T.toDayjs(c)),[H,W]=i("default"),R=o(null),I=o(null),N=o();s(a,(()=>({defaultView(){W("default")},resetView(){const e=T.toDayjs(c);_(e),L(e),W("default")},setCalendarDate(e){const r=T.toDayjs(e);_(r),L(r)}}))),l((()=>{const e=T.toDayjs(c);_(e),L(e)}),[c]),l((()=>{G(j)}),[j]);const P=()=>{"month-options"!==H?(W("month-options"),N.current.focus()):(W("default"),_(j))},V=()=>{"default"!==H?(W("default"),_(j)):W("year-options")},Z=()=>{N.current.focus();const e=E?E(Y):Y.subtract(1,"month");switch(H){case"default":L(e),_(e);break;case"month-options":_((e=>e.subtract(1,"year")));break;case"year-options":_((e=>e.subtract(10,"year")))}},X=()=>{N.current.focus();const e=S?S(Y):Y.add(1,"month");switch(H){case"default":L(e),_(e);break;case"month-options":_((e=>e.add(1,"year")));break;case"year-options":_((e=>e.add(10,"year")))}},U=e=>{_(e),L(e),w||W("default")},J=()=>{const e=T.toDayjs(c);_(e),L(e),"default"===H?q("reset"):W("default")},G=e=>{$&&$(e)},q=e=>{F&&F(e)},Q=()=>{if(!u||v)return!1;const e=x(u);return"month-options"===H?!A.isPreviousYearWithinRange(Y,e):"year-options"===H?!A.isPreviousDecadeWithinRange(Y,e):B?B(Y):!A.isPreviousMonthWithinRange(Y,e)},K=()=>{if(!h||v)return!1;const e=x(h);return"month-options"===H?!A.isNextYearWithinRange(Y,e):"year-options"===H?!A.isNextDecadeWithinRange(Y,e):k?k(Y):!A.isNextMonthWithinRange(Y,e)},ee=()=>{if("year-options"===H){const{beginDecade:e,endDecade:r}=A.getStartEndDecade(Y);return`${e} to ${r}`}return z?z(Y):Y.format("YYYY")},re=()=>{const n=M?M(Y):Y.format("MMM");return e(t,{children:[e(Dn,Object.assign({type:"button",tabIndex:-1,$expanded:"month-options"===H,$visible:"default"===H,id:"month-dropdown",onClick:P},{children:[r(Fn,{children:n}),r(fn,{})]})),e(Dn,Object.assign({type:"button",tabIndex:-1,$expanded:"default"!==H,id:"year-dropdown",onClick:V},{children:[r(Fn,{children:ee()}),r(fn,{})]}))]})},te=()=>{switch(H){case"month-options":return r(Mn,{calendarDate:Y,currentFocus:b,minDate:u,maxDate:h,selectedStartDate:g,selectedEndDate:m,viewCalendarDate:j,isNewSelection:y,onMonthSelect:U,allowDisabledSelection:v});case"year-options":return r(Yn,{calendarDate:Y,currentFocus:b,minDate:u,maxDate:h,selectedStartDate:g,selectedEndDate:m,viewCalendarDate:j,isNewSelection:y,onYearSelect:U,allowDisabledSelection:v});default:return null}};return e(yn,Object.assign({ref:N,"data-id":"calendar-container","data-testid":"calendar-container"},O,{children:[C&&e($n,Object.assign({"data-id":"calendar-header","data-testid":"calendar-header"},{children:[r(wn,{children:re()}),e(Cn,{children:[r(En,Object.assign({"aria-label":"Previous month","data-testid":"left-arrow-btn",disabled:Q(),focusHighlight:!1,tabIndex:-1,onClick:Z},{children:r(gn,{})})),r(En,Object.assign({"aria-label":"Next month","data-testid":"right-arrow-btn",disabled:K(),focusHighlight:!1,tabIndex:-1,onClick:X},{children:r(mn,{})}))]})]})),r(pn,{children:(()=>{const n="function"==typeof d?d({calendarDate:j,currentView:H}):d;return e(t,p?{children:["default"===H&&n,te()]}:{children:[r(vn,{children:n}),r(xn,Object.assign({$visible:"default"!==H},{children:te()}))]})})()}),(()=>{if(!w)return;const t=!!("default"===H)&&D;return e(Sn,{children:[r(Bn,Object.assign({ref:I,"data-testid":"cancel-button",styleType:"light",type:"button",onClick:J},{children:"Cancel"})),r(Bn,Object.assign({"data-testid":"done-button",ref:R,type:"button",onClick:()=>{t||(_(j),"default"===H?q("confirmed"):W("default"))},disabled:t},{children:"Done"}))]})})()]}))})),jn=e=>{let r=qt.bg,t="transparent";switch(e.$type){case"hover-subtle":r=qt["bg-hover"],t=qt["bg-hover"];break;case"hover":r=qt["bg-hover-strong"],t=qt["bg-hover-strong"];break;case"hover-outline":r=qt["bg-hover-subtle"],t=qt["border-hover"];break;case"selected-outline":r=qt["bg-selected"],t=qt["border-selected"];break;case"selected-outline-subtle":r=qt["bg-selected"],t=qt["border-selected-subtle"];break;case"selected-hover":r=qt["bg-selected-hover"];break;case"selected-hover-outline":r=qt["bg-selected-hover"],t=qt["border-selected-hover"]}return{color:r,borderColor:t}},Ln=h.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 2.5rem;
`,Tn=h.div`
    position: absolute;
    height: 2.5rem;
    width: 50%;
    transition: ${Kt["duration-150"]} ${Kt["ease-default"]};
    border: ${en["width-010"]} ${en.solid} transparent;
    border-left: none;
    border-right: none;

    ${e=>{if(!e.$type)return;const{color:r,borderColor:t}=jn(e);return g`
            background-color: ${r};
            background-clip: border-box;
            border-top-color: ${t};
            border-bottom-color: ${t};
        `}}
`,Hn=h(Tn)`
    left: 0;
`,Wn=h(Tn)`
    right: 0;
`,Rn=h.div`
    position: absolute;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    transition: ${Kt["duration-150"]} ${Kt["ease-default"]};

    border: ${en["width-010"]} ${en.solid} transparent;
    border-radius: ${tn.md};

    ${e=>{if(e.$type){const{color:r,borderColor:t}=jn(e);return g`
                background-color: ${r};
                background-clip: content-box;
                border-color: ${t};
            `}}}
`,In=h(Rn)`
    right: calc(50% - 1.25rem);
    clip-path: inset(-3px 1.25rem -3px -3px);
`,Nn=h(Rn)`
    left: calc(50% - 1.25rem);
    clip-path: inset(-3px -3px -3px 1.25rem);
`,Pn=h.div`
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 2;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    ${Qt["body-md-regular"]}
    transition: ${Kt["duration-150"]} ${Kt["ease-default"]};

    cursor: ${e=>e.$interactive?"pointer":null===e.$interactive?"default":"not-allowed"};

    ${e=>{const{$disabled:r,$type:t}=e;if(r)return g`
                color: ${qt["text-disabled-subtlest"]};
            `;switch(t){case"selected":return g`
                    font-weight: ${Qt.Spec["weight-semibold"]};
                    color: ${qt["text-selected"]};
                `;case"selected-hover":return g`
                    font-weight: ${Qt.Spec["weight-semibold"]};
                    color: ${qt["text-selected-hover"]};
                `;case"current":return g`
                    font-weight: ${Qt.Spec["weight-semibold"]};
                    color: ${qt["text-primary"]};
                `;case"hover":return g`
                    font-weight: ${Qt.Spec["weight-semibold"]};
                    color: ${qt["text-hover"]};
                `;case"unavailable":return g`
                    color: ${qt["text-disabled-subtlest"]};
                `;case"hidden":return g`
                    visibility: hidden;
                `;default:return g`
                    color: ${qt.text};
                `}}}
`,Vn=h.div`
    position: absolute;
    width: 4px;
    height: 4px;
    background-color: currentColor;
    border-radius: 50%;
    bottom: 4px;
`,Zn=({bgLeft:t,bgRight:n,circleLeft:a,circleRight:i,labelType:o,disabled:s,interactive:l,currentDateIndicator:d,date:c,onSelect:u,onHover:h,onHoverEnd:b})=>{const g=x().isSame(c,"day");return e(Ln,{children:[r(Hn,{$type:t}),r(In,{$type:a}),r(Wn,{$type:n}),r(Nn,{$type:i}),e(Pn,Object.assign({$type:o,$disabled:s,$interactive:l,onClick:()=>{u(c)},onMouseEnter:()=>{h(c)},onMouseLeave:()=>{b&&b(c)}},{children:[c.date(),d&&g&&r(Vn,{$disabled:s})]}))]})},Xn=(e,r,t=!1)=>{const n=`${e}-${r.toLowerCase()}`;return g`
        ${Qt[n]}
        ${t?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `},Un=(e,r)=>g`
    ${Xn(e,r.weight||"regular",r.paragraph)}
    ${((e=!1,r=!1)=>r?g`
            display: block;
        `:e?g`
            display: inline;
        `:g`
            display: block;
        `)(r.inline,r.paragraph)}
    color: ${qt.text};
`;var Jn;!function(t){const n=(e,r,t)=>{const n=h(e).attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${e=>Un(r,e)}
        `;return n.displayName=`Typography.${t}`,n};t.HeaderXXL=n("h1","header-xxl","HeaderXXL"),t.HeaderXL=n("h2","header-xl","HeaderXL"),t.HeaderLG=n("h3","header-lg","HeaderLG"),t.HeaderMD=n("h4","header-md","HeaderMD"),t.HeaderSM=n("h5","header-sm","HeaderSM"),t.HeaderXS=n("h6","header-xs","HeaderXS");const a=(e,r)=>{const t=h.p.attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${r=>Un(e,r)}
        `;return t.displayName=`Typography.${r}`,t};t.BodyBL=a("body-baseline","BodyBL"),t.BodyMD=a("body-md","BodyMD"),t.BodySM=a("body-sm","BodySM"),t.BodyXS=a("body-xs","BodyXS");const i=(t,n)=>{const a=h.a`
            ${e=>g`
                ${Xn(t,e.weight||"regular")}
                color: ${qt.hyperlink};
                text-decoration: none;

                :hover,
                :active,
                :focus {
                    color: ${qt["text-hover"]};
                }
            `}
        `,i=t=>{var{external:n=!1,children:i}=t,o=f(t,["external","children"]);return e(a,Object.assign({},o,{children:[i,n&&r(Gn,{})]}))};return i.displayName=`Typography.${n}`,i};t.LinkBL=i("body-baseline","LinkBL"),t.LinkMD=i("body-md","LinkMD"),t.LinkSM=i("body-sm","LinkSM"),t.LinkXS=i("body-xs","LinkXS")}(Jn||(Jn={}));const Gn=h(m)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`,qn=1.25,Qn=e=>"minified"===e?12:40;h.div`
    position: relative;
    display: flex;
    align-items: center;
`,h(hn)`
    z-index: 2;
    position: absolute;
    bottom: ${({$variant:e})=>"default"===e?"0.25rem":"0rem"};
    background-color: ${qt.bg};
    box-shadow: 0px 2px 8px
        rgb(from ${qt.Primitive["neutral-50"]} r g b / 50%);
    border-radius: 50%;
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
`,h(u)`
    width: 1rem;
    height: 1rem;
    color: ${qt["icon-primary"]};
`,h(c)`
    font-size: 1rem;
    color: ${qt["icon-primary"]};
`,h.div`
    overflow: hidden;
    flex-grow: 1;
    position: relative;
    height: ${({$variant:e})=>`${20+Qn(e)}px`};
`,h.div`
    position: relative;
    white-space: nowrap;
    height: ${qn}rem;
`,h.div`
    display: flex;
    white-space: nowrap;
`,h.div`
    display: inline-block;
    width: ${({$variant:e})=>("minified"===e?12:40)+"px"};
    position: relative;
    border-left: ${en["width-010"]} ${en.solid}
        ${qt["border-stronger"]};
    ${e=>{let r=0;switch(e.$variant){case"default":r=e.$isLongMarker?qn:.625;break;case"minified":r=e.$isLongMarker?qn:0;break;default:r=0}return g`
            height: ${r}rem;
        `}}
`,h(Jn.BodyXS)`
    color: ${qt["text-subtle"]};
    position: absolute;
    bottom: 10%;
    left: 10%;
`;const Kn=h.div`
    ${e=>"vertical"===e.$type?g`
                display: flex;
                flex-grow: 1;
                align-items: center;
                justify-content: center;
                width: 100%;
                margin: 1px 0px;
            `:g`
                position: absolute;
                height: ${Qn(e.$variant)}px;
                width: ${e.$width}px;
                left: ${e.$left}px;
            `}
    background-color: ${({$bgColor:e})=>e};
    cursor: ${({$clickable:e})=>e?"pointer":"default"};

    ${e=>"stripes"===e.$styleType&&g`
            background: repeating-linear-gradient(
                135deg,
                ${e.$bgColor2||qt["bg-strongest"]} 0px,
                ${e.$bgColor2||qt["bg-strongest"]} 10px,
                ${e.$bgColor||qt["bg-stronger"]} 10px,
                ${e.$bgColor||qt["bg-stronger"]} 20px
            );
        `}
`;h.div`
    position: absolute;
    top: ${qn}rem;
    height: ${({$variant:e})=>`${Qn(e)}px`};
    z-index: 1;
    border-right: ${en["width-010"]} ${en.solid}
        ${qt["border-stronger"]};
`,h(Jn.BodyXS)`
    color: ${e=>e.$color||qt.text(e)};
    position: absolute;
    bottom: 0;
    padding-left: 4px;
    padding-bottom: 4px;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;const ea=h.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    user-select: none;
    margin-bottom: 0.188rem;
`,ra=h.div`
    ${Qt["body-xs-semibold"]}
    color:${qt.text};

    ${e=>e.$disabled&&g`
            color: ${qt["text-disabled-subtlest"]};
        `};
`,ta=h.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
`,na=h.div`
    grid-column: 1 / -1;
    display: flex;
    min-height: 7.625rem;
`,aa=h.div`
    ${Qt["body-xs-semibold"]}
    margin: 1rem 0rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 2.5rem;
    color: ${qt.text};
    span {
        display: block;
    }
`,ia=h.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 1px;
`;x.extend(F);const oa="YYYY-MM-DD",sa={id:"1",startTime:"",endTime:"",clickable:!1,styleAttributes:{styleType:"stripes",backgroundColor:qt["bg-stronger"],backgroundColor2:qt["bg-strongest"]}},la=({calendarDate:t,disabledDates:n,selectedDate:o,onSelect:s,minDate:l,maxDate:d,slots:c,enableSelection:u=!0,onSlotClick:h})=>{const b=a((()=>A.generateDaysForCurrentWeek(t)),[t]),[g,m]=i(),f=e=>{m(e)},y=()=>{m(void 0)},p=e=>{const r=e.format(oa),t=(e=>{const r=A.isWithinRange(e,l?x(l):void 0,d?x(d):void 0),t=n&&n.includes(e.format(oa));return!r||t})(e),a=u&&!t,i=a&&g&&e.isSame(g,"day"),s=[o].includes(r),c={labelType:"available",interactive:u?a:null};return t&&(c.disabled=!0,c.labelType="unavailable"),s&&i?(c.labelType="selected-hover",c.circleLeft="selected-hover-outline",c.circleRight="selected-hover-outline"):s?(c.labelType="selected",c.circleLeft="selected-outline",c.circleRight="selected-outline"):i&&(c.labelType="hover",c.circleLeft="hover-subtle",c.circleRight="hover-subtle"),c};return e(ta,{children:[b.map(((t,n)=>{const a=p(t);return e(ea,{children:[r(Zn,Object.assign({date:t,calendarDate:x(o),onSelect:()=>{((e,r)=>{!r&&u&&s(e)})(t,!a.interactive)},onHover:f,onHoverEnd:y},a),`day-${n}`),r(ra,Object.assign({$disabled:a.disabled},{children:x(t).format("ddd")}))]},`week-day-${n}`)})),r(na,{children:b.map(((t,n)=>{const a=t.format(oa),i=c&&(c[a]?c[a]:[sa]);return r(ia,{children:i&&i.map((t=>{const{id:n,startTime:i,endTime:o,clickable:s=!0,styleAttributes:l}=t,{color:d,styleType:c="default",backgroundColor:u,backgroundColor2:b}=l;return r(Kn,Object.assign({$type:"vertical",$variant:"default",$styleType:c,$bgColor:u,$bgColor2:b,$clickable:s,onClick:()=>s&&((e,r)=>{h(e,r)})(a,t)},{children:e(aa,Object.assign({style:{color:d}},{children:[r("span",{children:A.convertTo12HourFormat(i)}),o&&i&&r("span",{children:"-"}),r("span",{children:A.convertTo12HourFormat(o)})]}))}),n)}))},`wrapper-${n}`)}))},`week-cell-${t.format(oa)}`)]})},da=h.div`
    --header-bottom-spacing: 0.5rem;

    ${nn.MaxWidth.sm} {
        --header-horizontal-inset: 1.25rem;
    }

    min-width: 18.5rem;
`,ca="YYYY-MM-DD",ua=e=>{var{disabledDates:t,onWeekDisplayChange:n,onChange:a,value:s,minDate:d,maxDate:c,slots:u,showNavigationHeader:h=!0,enableSelection:b,onSlotClick:g,currentCalendarDate:m}=e,y=f(e,["disabledDates","onWeekDisplayChange","onChange","value","minDate","maxDate","slots","showNavigationHeader","enableSelection","onSlotClick","currentCalendarDate"]);const[p,v]=i(s),$=o(),w=o(void 0);l((()=>{v(s)}),[s]);const D=e=>{const r=e.format(ca);v(r),a&&a(r)},F=(e,r)=>{g&&g(e,r)},C=e=>{if(n){const r={week:{firstDayOfWeek:e.startOf("week").format(ca),lastDayOfWeek:e.endOf("week").format(ca)},month:e.month()+1,year:e.year()};n(r)}};return r(da,Object.assign({},y,{children:r(_n,Object.assign({ref:$,dynamicHeight:!0,initialCalendarDate:T.toDayjs(p||m).endOf("week").format(ca),selectedStartDate:p,getLeftArrowDate:e=>e.subtract(1,"week"),getRightArrowDate:e=>e.add(1,"week"),isLeftArrowDisabled:e=>d&&x(e).subtract(1,"week").isBefore(d,"week"),isRightArrowDisabled:e=>c&&x(e).add(1,"week").isAfter(c,"week"),onCalendarDateChange:e=>{w.current&&w.current.isSame(e,"week")||C(e),w.current=e},showNavigationHeader:h,minDate:d,maxDate:c,getMonthHeaderLabel:e=>x(e).endOf("week").format("MMM"),getYearHeaderLabel:e=>x(e).endOf("week").format("YYYY")},{children:({calendarDate:e})=>r(la,{calendarDate:e,disabledDates:t,selectedDate:p,minDate:d,maxDate:c,onSelect:D,slots:u,enableSelection:b,onSlotClick:F})}))}))};export{ua as TimeSlotWeekView};
//# sourceMappingURL=index.js.map
