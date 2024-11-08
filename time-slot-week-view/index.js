import{jsxs as e,jsx as r,Fragment as t}from"react/jsx-runtime";import n,{useMemo as a,useState as i,useRef as o,useImperativeHandle as s,useEffect as l}from"react";import{ChevronDownIcon as d}from"@lifesg/react-icons/chevron-down";import{ChevronLeftIcon as c}from"@lifesg/react-icons/chevron-left";import{ChevronRightIcon as u}from"@lifesg/react-icons/chevron-right";import h,{keyframes as g,css as m}from"styled-components";import{ExternalIcon as b}from"@lifesg/react-icons/external";function f(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]])}return t}"function"==typeof SuppressedError&&SuppressedError;var y="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function p(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var F={exports:{}};F.exports=function(){var e=1e3,r=6e4,t=36e5,n="millisecond",a="second",i="minute",o="hour",s="day",l="week",d="month",c="quarter",u="year",h="date",g="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,b=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var r=["th","st","nd","rd"],t=e%100;return"["+e+(r[(t-20)%10]||r[t]||r[0])+"]"}},y=function(e,r,t){var n=String(e);return!n||n.length>=r?e:""+Array(r+1-n.length).join(t)+e},p={s:y,z:function(e){var r=-e.utcOffset(),t=Math.abs(r),n=Math.floor(t/60),a=t%60;return(r<=0?"+":"-")+y(n,2,"0")+":"+y(a,2,"0")},m:function e(r,t){if(r.date()<t.date())return-e(t,r);var n=12*(t.year()-r.year())+(t.month()-r.month()),a=r.clone().add(n,d),i=t-a<0,o=r.clone().add(n+(i?-1:1),d);return+(-(n+(t-a)/(i?a-o:o-a))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:s,D:h,h:o,m:i,s:a,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},F="en",x={};x[F]=f;var D="$isDayjsObject",v=function(e){return e instanceof S||!(!e||!e[D])},$=function e(r,t,n){var a;if(!r)return F;if("string"==typeof r){var i=r.toLowerCase();x[i]&&(a=i),t&&(x[i]=t,a=i);var o=r.split("-");if(!a&&o.length>1)return e(o[0])}else{var s=r.name;x[s]=r,a=s}return!n&&a&&(F=a),a||!n&&F},w=function(e,r){if(v(e))return e.clone();var t="object"==typeof r?r:{};return t.date=e,t.args=arguments,new S(t)},B=p;B.l=$,B.i=v,B.w=function(e,r){return w(e,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var S=function(){function f(e){this.$L=$(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[D]=!0}var y=f.prototype;return y.parse=function(e){this.$d=function(e){var r=e.date,t=e.utc;if(null===r)return new Date(NaN);if(B.u(r))return new Date;if(r instanceof Date)return new Date(r);if("string"==typeof r&&!/Z$/i.test(r)){var n=r.match(m);if(n){var a=n[2]-1||0,i=(n[7]||"0").substring(0,3);return t?new Date(Date.UTC(n[1],a,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],a,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(r)}(e),this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return B},y.isValid=function(){return!(this.$d.toString()===g)},y.isSame=function(e,r){var t=w(e);return this.startOf(r)<=t&&t<=this.endOf(r)},y.isAfter=function(e,r){return w(e)<this.startOf(r)},y.isBefore=function(e,r){return this.endOf(r)<w(e)},y.$g=function(e,r,t){return B.u(e)?this[r]:this.set(t,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,r){var t=this,n=!!B.u(r)||r,c=B.p(e),g=function(e,r){var a=B.w(t.$u?Date.UTC(t.$y,r,e):new Date(t.$y,r,e),t);return n?a:a.endOf(s)},m=function(e,r){return B.w(t.toDate()[e].apply(t.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(r)),t)},b=this.$W,f=this.$M,y=this.$D,p="set"+(this.$u?"UTC":"");switch(c){case u:return n?g(1,0):g(31,11);case d:return n?g(1,f):g(0,f+1);case l:var F=this.$locale().weekStart||0,x=(b<F?b+7:b)-F;return g(n?y-x:y+(6-x),f);case s:case h:return m(p+"Hours",0);case o:return m(p+"Minutes",1);case i:return m(p+"Seconds",2);case a:return m(p+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,r){var t,l=B.p(e),c="set"+(this.$u?"UTC":""),g=(t={},t[s]=c+"Date",t[h]=c+"Date",t[d]=c+"Month",t[u]=c+"FullYear",t[o]=c+"Hours",t[i]=c+"Minutes",t[a]=c+"Seconds",t[n]=c+"Milliseconds",t)[l],m=l===s?this.$D+(r-this.$W):r;if(l===d||l===u){var b=this.clone().set(h,1);b.$d[g](m),b.init(),this.$d=b.set(h,Math.min(this.$D,b.daysInMonth())).$d}else g&&this.$d[g](m);return this.init(),this},y.set=function(e,r){return this.clone().$set(e,r)},y.get=function(e){return this[B.p(e)]()},y.add=function(n,c){var h,g=this;n=Number(n);var m=B.p(c),b=function(e){var r=w(g);return B.w(r.date(r.date()+Math.round(e*n)),g)};if(m===d)return this.set(d,this.$M+n);if(m===u)return this.set(u,this.$y+n);if(m===s)return b(1);if(m===l)return b(7);var f=(h={},h[i]=r,h[o]=t,h[a]=e,h)[m]||1,y=this.$d.getTime()+n*f;return B.w(y,this)},y.subtract=function(e,r){return this.add(-1*e,r)},y.format=function(e){var r=this,t=this.$locale();if(!this.isValid())return t.invalidDate||g;var n=e||"YYYY-MM-DDTHH:mm:ssZ",a=B.z(this),i=this.$H,o=this.$m,s=this.$M,l=t.weekdays,d=t.months,c=t.meridiem,u=function(e,t,a,i){return e&&(e[t]||e(r,n))||a[t].slice(0,i)},h=function(e){return B.s(i%12||12,e,"0")},m=c||function(e,r,t){var n=e<12?"AM":"PM";return t?n.toLowerCase():n};return n.replace(b,(function(e,n){return n||function(e){switch(e){case"YY":return String(r.$y).slice(-2);case"YYYY":return B.s(r.$y,4,"0");case"M":return s+1;case"MM":return B.s(s+1,2,"0");case"MMM":return u(t.monthsShort,s,d,3);case"MMMM":return u(d,s);case"D":return r.$D;case"DD":return B.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return u(t.weekdaysMin,r.$W,l,2);case"ddd":return u(t.weekdaysShort,r.$W,l,3);case"dddd":return l[r.$W];case"H":return String(i);case"HH":return B.s(i,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return m(i,o,!0);case"A":return m(i,o,!1);case"m":return String(o);case"mm":return B.s(o,2,"0");case"s":return String(r.$s);case"ss":return B.s(r.$s,2,"0");case"SSS":return B.s(r.$ms,3,"0");case"Z":return a}return null}(e)||a.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(n,h,g){var m,b=this,f=B.p(h),y=w(n),p=(y.utcOffset()-this.utcOffset())*r,F=this-y,x=function(){return B.m(b,y)};switch(f){case u:m=x()/12;break;case d:m=x();break;case c:m=x()/3;break;case l:m=(F-p)/6048e5;break;case s:m=(F-p)/864e5;break;case o:m=F/t;break;case i:m=F/r;break;case a:m=F/e;break;default:m=F}return g?m:B.a(m)},y.daysInMonth=function(){return this.endOf(d).$D},y.$locale=function(){return x[this.$L]},y.locale=function(e,r){if(!e)return this.$L;var t=this.clone(),n=$(e,r,!0);return n&&(t.$L=n),t},y.clone=function(){return B.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},f}(),E=S.prototype;return w.prototype=E,[["$ms",n],["$s",a],["$m",i],["$H",o],["$W",s],["$M",d],["$y",u],["$D",h]].forEach((function(e){E[e[1]]=function(r){return this.$g(r,e[0],e[1])}})),w.extend=function(e,r){return e.$i||(e(r,S,w),e.$i=!0),w},w.locale=$,w.isDayjs=v,w.unix=function(e){return w(1e3*e)},w.en=x[F],w.Ls=x,w.p={},w}();var x=p(F.exports),D={exports:{}};D.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,t=/\d\d/,n=/\d\d?/,a=/\d*[^-_:/,()\s\d]+/,i={},o=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(r){this[e]=+r}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var r=e.match(/([+-]|\d\d)/g),t=60*r[1]+(+r[2]||0);return 0===t?0:"+"===r[0]?-t:t}(e)}],d=function(e){var r=i[e];return r&&(r.indexOf?r:r.s.concat(r.f))},c=function(e,r){var t,n=i.meridiem;if(n){for(var a=1;a<=24;a+=1)if(e.indexOf(n(a,0,r))>-1){t=a>12;break}}else t=e===(r?"pm":"PM");return t},u={A:[a,function(e){this.afternoon=c(e,!1)}],a:[a,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[t,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[t,s("day")],Do:[a,function(e){var r=i.ordinal,t=e.match(/\d+/);if(this.day=t[0],r)for(var n=1;n<=31;n+=1)r(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[t,s("month")],MMM:[a,function(e){var r=d("months"),t=(d("monthsShort")||r.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],MMMM:[a,function(e){var r=d("months").indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],Y:[/[+-]?\d+/,s("year")],YY:[t,function(e){this.year=o(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(t){var n,a;n=t,a=i&&i.formats;for(var o=(t=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(r,t,n){var i=n&&n.toUpperCase();return t||a[n]||e[n]||a[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,r,t){return r||t.slice(1)}))}))).match(r),s=o.length,l=0;l<s;l+=1){var d=o[l],c=u[d],h=c&&c[0],g=c&&c[1];o[l]=g?{regex:h,parser:g}:d.replace(/^\[|\]$/g,"")}return function(e){for(var r={},t=0,n=0;t<s;t+=1){var a=o[t];if("string"==typeof a)n+=a.length;else{var i=a.regex,l=a.parser,d=e.slice(n),c=i.exec(d)[0];l.call(r,c),e=e.replace(c,"")}}return function(e){var r=e.afternoon;if(void 0!==r){var t=e.hours;r?t<12&&(e.hours+=12):12===t&&(e.hours=0),delete e.afternoon}}(r),r}}return function(e,r,t){t.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(o=e.parseTwoDigitYear);var n=r.prototype,a=n.parse;n.parse=function(e){var r=e.date,n=e.utc,o=e.args;this.$u=n;var s=o[1];if("string"==typeof s){var l=!0===o[2],d=!0===o[3],c=l||d,u=o[2];d&&(u=o[2]),i=this.$locale(),!l&&u&&(i=t.Ls[u]),this.$d=function(e,r,t){try{if(["x","X"].indexOf(r)>-1)return new Date(("X"===r?1e3:1)*e);var n=h(r)(e),a=n.year,i=n.month,o=n.day,s=n.hours,l=n.minutes,d=n.seconds,c=n.milliseconds,u=n.zone,g=new Date,m=o||(a||i?1:g.getDate()),b=a||g.getFullYear(),f=0;a&&!i||(f=i>0?i-1:g.getMonth());var y=s||0,p=l||0,F=d||0,x=c||0;return u?new Date(Date.UTC(b,f,m,y,p,F,x+60*u.offset*1e3)):t?new Date(Date.UTC(b,f,m,y,p,F,x)):new Date(b,f,m,y,p,F,x)}catch(e){return new Date("")}}(r,s,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&r!=this.format(s)&&(this.$d=new Date("")),i={}}else if(s instanceof Array)for(var g=s.length,m=1;m<=g;m+=1){o[1]=s[m-1];var b=t.apply(this,o);if(b.isValid()){this.$d=b.$d,this.$L=b.$L,this.init();break}m===g&&(this.$d=new Date(""))}else a.call(this,e)}}}();var v=p(D.exports),$={exports:{}};$.exports=function(e,r,t){r.prototype.isBetween=function(e,r,n,a){var i=t(e),o=t(r),s="("===(a=a||"()")[0],l=")"===a[1];return(s?this.isAfter(i,n):!this.isBefore(i,n))&&(l?this.isBefore(o,n):!this.isAfter(o,n))||(s?this.isBefore(i,n):!this.isAfter(i,n))&&(l?this.isAfter(o,n):!this.isBefore(o,n))}};var w=p($.exports),B={exports:{}};B.exports=function(e,r){r.prototype.isSameOrAfter=function(e,r){return this.isSame(e,r)||this.isAfter(e,r)}};var S=p(B.exports),E={exports:{}};E.exports=function(e,r){r.prototype.isSameOrBefore=function(e,r){return this.isSame(e,r)||this.isBefore(e,r)}};var C,A,k,H=p(E.exports),z={exports:{}},O=p(z.exports=(C={year:0,month:1,day:2,hour:3,minute:4,second:5},A={},function(e,r,t){var n,a=function(e,r,t){void 0===t&&(t={});var n=new Date(e),a=function(e,r){void 0===r&&(r={});var t=r.timeZoneName||"short",n=e+"|"+t,a=A[n];return a||(a=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:t}),A[n]=a),a}(r,t);return a.formatToParts(n)},i=function(e,r){for(var n=a(e,r),i=[],o=0;o<n.length;o+=1){var s=n[o],l=s.type,d=s.value,c=C[l];c>=0&&(i[c]=parseInt(d,10))}var u=i[3],h=24===u?0:u,g=i[0]+"-"+i[1]+"-"+i[2]+" "+h+":"+i[4]+":"+i[5]+":000",m=+e;return(t.utc(g).valueOf()-(m-=m%1e3))/6e4},o=r.prototype;o.tz=function(e,r){void 0===e&&(e=n);var a=this.utcOffset(),i=this.toDate(),o=i.toLocaleString("en-US",{timeZone:e}),s=Math.round((i-new Date(o))/1e3/60),l=t(o,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-s,!0);if(r){var d=l.utcOffset();l=l.add(a-d,"minute")}return l.$x.$timezone=e,l},o.offsetName=function(e){var r=this.$x.$timezone||t.tz.guess(),n=a(this.valueOf(),r,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=o.startOf;o.startOf=function(e,r){if(!this.$x||!this.$x.$timezone)return s.call(this,e,r);var n=t(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,e,r).tz(this.$x.$timezone,!0)},t.tz=function(e,r,a){var o=a&&r,s=a||r||n,l=i(+t(),s);if("string"!=typeof e)return t(e).tz(s);var d=function(e,r,t){var n=e-60*r*1e3,a=i(n,t);if(r===a)return[n,r];var o=i(n-=60*(a-r)*1e3,t);return a===o?[n,a]:[e-60*Math.min(a,o)*1e3,Math.max(a,o)]}(t.utc(e,o).valueOf(),l,s),c=d[0],u=d[1],h=t(c).utcOffset(u);return h.$x.$timezone=s,h},t.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},t.tz.setDefault=function(e){n=e}}));x.extend(w),x.extend(H),x.extend(S),x.extend(v),x.extend(O),function(e){e.generateDays=e=>{const r=e.startOf("month"),t=x(r).startOf("week");return M(t).map((e=>L(e)))},e.generateDaysForCurrentWeek=e=>{const r=e.startOf("week");return L(r)},e.generateMonths=e=>{const r=[];for(let t=0;t<12;t++){const n=e.month(t);r.push(x(n))}return r},e.generateDecadeOfYears=e=>{const r=e.year(),t=10*Math.floor(r/10),n=e.year(t),a=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)a.push(n.add(e,"year"));return a},e.getStartEndDecade=e=>{const r=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:r,endDecade:+x(`${r+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const r=x(e,"HH:mm");return r.isValid()?r.format("h:mm a"):""},e.isWithinRange=(e,r,t,n="day")=>!r&&!t||(r&&t?e.isBetween(r,t,n,"[]"):r?e.isSameOrAfter(r,n):e.isSameOrBefore(t,n)),e.isPreviousMonthWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"month"),t,void 0,"month"),e.isPreviousYearWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"year"),t,void 0,"year"),e.isPreviousDecadeWithinRange=(r,t)=>{const{beginDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).subtract(1,"year"),t,void 0,"year")},e.isNextMonthWithinRange=(r,t)=>e.isWithinRange(r.add(1,"month"),void 0,t,"month"),e.isNextYearWithinRange=(r,t)=>e.isWithinRange(r.add(1,"year"),void 0,t,"year"),e.isNextDecadeWithinRange=(r,t)=>{const{endDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).add(1,"year"),void 0,t,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,r)=>({start:e.format("YYYY-MM-DD"),end:e.add(r-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(r,t,n,a)=>{const i=e.isWithinRange(r,n?x(n):void 0,a?x(a):void 0),o=t&&t.includes(r.format("YYYY-MM-DD"));return!i||!!o}}(k||(k={}));const M=e=>{const r=[e];for(let t=1;t<6;t++){const n=e.add(t,"week");r.push(n)}return r},L=e=>{const r=[];for(let t=0;t<7;t++){const n=e.add(t,"day");r.push(n)}return r},W=[1,3,5,7,8,10,12],Y=[4,6,9,11];var T,j,_,N;!function(e){e.clampDay=(r,t,n)=>{const a=parseInt(r),i=parseInt(t),o=parseInt(n);return 0==a?"1":W.includes(i)?Math.min(a,31).toString():Y.includes(i)?Math.min(a,30).toString():2===i?e.isLeapYear(o)?Math.min(a,29).toString():Math.min(a,28).toString():r},e.clampMonth=e=>{const r=parseInt(e);return 0==r?"1":r>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,r,t="HH:mm")=>{const n=x(e,t);return x(r,t).diff(n,"minute")},e.toDayjs=e=>e?x(e):x(),e.addMinutesToTime=(e,r,t="HH:mm")=>x(e,t).add(r,"minutes").format(t),e.isSame=(e,r,t="day")=>x(e).isSame(x(r),t)}(T||(T={})),function(e){e.isDateDisabled=(e,r)=>{const{disabledDates:t,minDate:n,maxDate:a}=r;return!!(t&&t.length&&t.includes(e))||(!(!n||!x(e).isBefore(n,"day"))||!(!a||!x(e).isAfter(a,"day")))},e.sanitizeInput=e=>{if(e){if(x(e).isValid())return e}return""}}(j||(j={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(_||(_={})),function(e){e.transformWithSpaces=(e,r)=>{const t="(.{"+r+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(t,"g"),"$1 ").trim()},e.padValue=(e,r)=>{if("0"===e)return r?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,r)=>{const t=Math.floor(r/9);return e.length>=2*t||1===e.split(" ").length&&e.length>t},e.truncateOneLine=(e,r,t,n,a=8)=>{let i=0;r>t&&(i=Math.floor((r-t)/a));const o=n+i;if(o<e.length){const r=Math.floor(o/2);return e.substring(0,r)+" ... "+e.substring(e.length-r,e.length)}return e},e.truncateTwoLines=(e,r,t,n=1.2)=>{const a=Math.floor(2*r/(.6*t))*(2/n);if(e.length<=a)return e;const i=Math.floor(.6*a),o=Math.floor(.2*a);return`${e.substring(0,i)}...${e.substring(e.length-o)}`},e.getTextWidth=(r,t)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=t;return n.measureText(r).width},e.maskValue=(e,t)=>{if(!e)return e;const{maskRange:n,unmaskRange:a,maskChar:i="•",maskRegex:o,maskTransformer:s}=t;if(s)return s(e);if(o)return e.replace(o,i);if(n){const{startIndex:t,endIndex:a}=r(n[0],n[1]);return e.substring(0,t)+i.repeat(e.substring(t,a+1).length)+e.substring(a+1)}if(a){const{startIndex:t,endIndex:n}=r(a[0],a[1]);return i.repeat(e.substring(0,t).length)+e.substring(t,n+1)+i.repeat(e.substring(n+1).length)}return e};const r=(e,r)=>e<r?{startIndex:e,endIndex:r}:{startIndex:r,endIndex:e}}(N||(N={}));const P=h.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,R=g`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,I=h.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-width: 2px;
    border-style: solid;
    border-radius: 50%;
    border-color: currentColor transparent transparent transparent;
    animation: ${R} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,V=h(I)`
    animation-delay: -0.45s;
`,J=h(I)`
    animation-delay: -0.3s;
`,Z=h(I)`
    animation-delay: -0.15s;
`;var X=Array.isArray,U="object"==typeof y&&y&&y.Object===Object&&y,G="object"==typeof self&&self&&self.Object===Object&&self,q=U||G||Function("return this")(),Q=q.Symbol,K=Q,ee=Object.prototype,re=ee.hasOwnProperty,te=ee.toString,ne=K?K.toStringTag:void 0;var ae=function(e){var r=re.call(e,ne),t=e[ne];try{e[ne]=void 0;var n=!0}catch(e){}var a=te.call(e);return n&&(r?e[ne]=t:delete e[ne]),a},ie=Object.prototype.toString;var oe=ae,se=function(e){return ie.call(e)},le=Q?Q.toStringTag:void 0;var de=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":le&&le in Object(e)?oe(e):se(e)};var ce=de,ue=function(e){return null!=e&&"object"==typeof e};var he=function(e){return"symbol"==typeof e||ue(e)&&"[object Symbol]"==ce(e)},ge=X,me=he,be=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,fe=/^\w*$/;var ye=function(e,r){if(ge(e))return!1;var t=typeof e;return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=e&&!me(e))||(fe.test(e)||!be.test(e)||null!=r&&e in Object(r))};var pe=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},Fe=de,xe=pe;var De,ve=function(e){if(!xe(e))return!1;var r=Fe(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},$e=q["__core-js_shared__"],we=(De=/[^.]+$/.exec($e&&$e.keys&&$e.keys.IE_PROTO||""))?"Symbol(src)_1."+De:"";var Be=function(e){return!!we&&we in e},Se=Function.prototype.toString;var Ee=ve,Ce=Be,Ae=pe,ke=function(e){if(null!=e){try{return Se.call(e)}catch(e){}try{return e+""}catch(e){}}return""},He=/^\[object .+?Constructor\]$/,ze=Function.prototype,Oe=Object.prototype,Me=ze.toString,Le=Oe.hasOwnProperty,We=RegExp("^"+Me.call(Le).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Ye=function(e){return!(!Ae(e)||Ce(e))&&(Ee(e)?We:He).test(ke(e))},Te=function(e,r){return null==e?void 0:e[r]};var je=function(e,r){var t=Te(e,r);return Ye(t)?t:void 0},_e=je(Object,"create"),Ne=_e;var Pe=function(){this.__data__=Ne?Ne(null):{},this.size=0};var Re=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},Ie=_e,Ve=Object.prototype.hasOwnProperty;var Je=function(e){var r=this.__data__;if(Ie){var t=r[e];return"__lodash_hash_undefined__"===t?void 0:t}return Ve.call(r,e)?r[e]:void 0},Ze=_e,Xe=Object.prototype.hasOwnProperty;var Ue=_e;var Ge=Pe,qe=Re,Qe=Je,Ke=function(e){var r=this.__data__;return Ze?void 0!==r[e]:Xe.call(r,e)},er=function(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=Ue&&void 0===r?"__lodash_hash_undefined__":r,this};function rr(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}rr.prototype.clear=Ge,rr.prototype.delete=qe,rr.prototype.get=Qe,rr.prototype.has=Ke,rr.prototype.set=er;var tr=rr;var nr=function(){this.__data__=[],this.size=0};var ar=function(e,r){return e===r||e!=e&&r!=r};var ir=function(e,r){for(var t=e.length;t--;)if(ar(e[t][0],r))return t;return-1},or=ir,sr=Array.prototype.splice;var lr=ir;var dr=ir;var cr=ir;var ur=nr,hr=function(e){var r=this.__data__,t=or(r,e);return!(t<0)&&(t==r.length-1?r.pop():sr.call(r,t,1),--this.size,!0)},gr=function(e){var r=this.__data__,t=lr(r,e);return t<0?void 0:r[t][1]},mr=function(e){return dr(this.__data__,e)>-1},br=function(e,r){var t=this.__data__,n=cr(t,e);return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this};function fr(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}fr.prototype.clear=ur,fr.prototype.delete=hr,fr.prototype.get=gr,fr.prototype.has=mr,fr.prototype.set=br;var yr=fr,pr=je(q,"Map"),Fr=tr,xr=yr,Dr=pr;var vr=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var $r=function(e,r){var t=e.__data__;return vr(r)?t["string"==typeof r?"string":"hash"]:t.map},wr=$r;var Br=$r;var Sr=$r;var Er=$r;var Cr=function(){this.size=0,this.__data__={hash:new Fr,map:new(Dr||xr),string:new Fr}},Ar=function(e){var r=wr(this,e).delete(e);return this.size-=r?1:0,r},kr=function(e){return Br(this,e).get(e)},Hr=function(e){return Sr(this,e).has(e)},zr=function(e,r){var t=Er(this,e),n=t.size;return t.set(e,r),this.size+=t.size==n?0:1,this};function Or(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Or.prototype.clear=Cr,Or.prototype.delete=Ar,Or.prototype.get=kr,Or.prototype.has=Hr,Or.prototype.set=zr;var Mr=Or;function Lr(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var t=function(){var n=arguments,a=r?r.apply(this,n):n[0],i=t.cache;if(i.has(a))return i.get(a);var o=e.apply(this,n);return t.cache=i.set(a,o)||i,o};return t.cache=new(Lr.Cache||Mr),t}Lr.Cache=Mr;var Wr=Lr;var Yr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Tr=/\\(\\)?/g,jr=function(e){var r=Wr(e,(function(e){return 500===t.size&&t.clear(),e})),t=r.cache;return r}((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(Yr,(function(e,t,n,a){r.push(n?a.replace(Tr,"$1"):t||e)})),r}));var _r=function(e,r){for(var t=-1,n=null==e?0:e.length,a=Array(n);++t<n;)a[t]=r(e[t],t,e);return a},Nr=X,Pr=he,Rr=Q?Q.prototype:void 0,Ir=Rr?Rr.toString:void 0;var Vr=function e(r){if("string"==typeof r)return r;if(Nr(r))return _r(r,e)+"";if(Pr(r))return Ir?Ir.call(r):"";var t=r+"";return"0"==t&&1/r==-1/0?"-0":t},Jr=Vr;var Zr=X,Xr=ye,Ur=jr,Gr=function(e){return null==e?"":Jr(e)};var qr=he;var Qr=function(e,r){return Zr(e)?e:Xr(e,r)?[e]:Ur(Gr(e))},Kr=function(e){if("string"==typeof e||qr(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r};var et=function(e,r){for(var t=0,n=(r=Qr(r,e)).length;null!=e&&t<n;)e=e[Kr(r[t++])];return t&&t==n?e:void 0};var rt=p((function(e,r,t){var n=null==e?void 0:et(e,r);return void 0===n?t:n}));const tt=(e,r,t)=>rt(t,r)||rt(e,r),nt=(e,r)=>{const t=r||e.defaultValue;return rt(e.collections,t)},at={collections:{lifesg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000"},bookingsg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000"},rbs:{"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000"},mylegacy:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000"},ccube:{"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000"}},defaultValue:"lifesg"},it=e=>r=>{const t=r.theme,n=nt(at,t.colourScheme);return t.overrides&&t.overrides.primitiveColour?tt(n,e,t.overrides.primitiveColour):n[e]},ot={"primary-10":it("primary-10"),"primary-20":it("primary-20"),"primary-30":it("primary-30"),"primary-40":it("primary-40"),"primary-50":it("primary-50"),"primary-60":it("primary-60"),"primary-70":it("primary-70"),"primary-80":it("primary-80"),"primary-90":it("primary-90"),"primary-95":it("primary-95"),"primary-100":it("primary-100"),"secondary-10":it("secondary-10"),"secondary-20":it("secondary-20"),"secondary-30":it("secondary-30"),"secondary-40":it("secondary-40"),"secondary-50":it("secondary-50"),"secondary-60":it("secondary-60"),"secondary-70":it("secondary-70"),"secondary-80":it("secondary-80"),"secondary-90":it("secondary-90"),"secondary-95":it("secondary-95"),"secondary-100":it("secondary-100"),"neutral-10":it("neutral-10"),"neutral-20":it("neutral-20"),"neutral-30":it("neutral-30"),"neutral-40":it("neutral-40"),"neutral-50":it("neutral-50"),"neutral-60":it("neutral-60"),"neutral-70":it("neutral-70"),"neutral-80":it("neutral-80"),"neutral-90":it("neutral-90"),"neutral-95":it("neutral-95"),"neutral-100":it("neutral-100"),"success-10":it("success-10"),"success-20":it("success-20"),"success-30":it("success-30"),"success-40":it("success-40"),"success-50":it("success-50"),"success-60":it("success-60"),"success-70":it("success-70"),"success-80":it("success-80"),"success-90":it("success-90"),"success-95":it("success-95"),"success-100":it("success-100"),"warning-10":it("warning-10"),"warning-20":it("warning-20"),"warning-30":it("warning-30"),"warning-40":it("warning-40"),"warning-50":it("warning-50"),"warning-60":it("warning-60"),"warning-70":it("warning-70"),"warning-80":it("warning-80"),"warning-90":it("warning-90"),"warning-95":it("warning-95"),"warning-100":it("warning-100"),"error-10":it("error-10"),"error-20":it("error-20"),"error-30":it("error-30"),"error-40":it("error-40"),"error-50":it("error-50"),"error-60":it("error-60"),"error-70":it("error-70"),"error-80":it("error-80"),"error-90":it("error-90"),"error-95":it("error-95"),"error-100":it("error-100"),"info-10":it("info-10"),"info-20":it("info-20"),"info-30":it("info-30"),"info-40":it("info-40"),"info-50":it("info-50"),"info-60":it("info-60"),"info-70":it("info-70"),"info-80":it("info-80"),"info-90":it("info-90"),"info-95":it("info-95"),"info-100":it("info-100"),white:it("white"),black:it("black")},st={text:it("neutral-20"),"text-subtle":it("neutral-30"),"text-subtler":it("neutral-50"),"text-subtlest":it("neutral-60"),"text-primary":it("primary-50"),"text-hover":it("primary-40"),"text-selected":it("primary-50"),"text-selected-hover":it("primary-40"),"text-disabled":it("neutral-50"),"text-disabled-subtle":it("neutral-60"),"text-disabled-subtlest":it("neutral-80"),"text-selected-disabled":it("neutral-50"),"text-success":it("success-40"),"text-warning":it("warning-40"),"text-error":it("error-40"),"text-info":it("info-40"),"text-inverse":it("white"),icon:it("neutral-50"),"icon-subtle":it("neutral-60"),"icon-strongest":it("neutral-20"),"icon-primary":it("primary-50"),"icon-primary-subtle":it("primary-60"),"icon-primary-subtlest":it("primary-70"),"icon-hover":it("primary-40"),"icon-selected":it("primary-50"),"icon-selected-hover":it("primary-40"),"icon-disabled":it("neutral-50"),"icon-disabled-subtle":it("neutral-60"),"icon-selected-disabled":it("neutral-60"),"icon-success":it("success-50"),"icon-warning":it("warning-60"),"icon-error":it("error-50"),"icon-error-strong":it("error-40"),"icon-info":it("info-50"),"icon-inverse":it("white"),"icon-primary-inverse":"#FEAB10",border:it("neutral-90"),"border-strong":it("neutral-70"),"border-stronger":it("neutral-30"),"border-primary":it("primary-50"),"border-primary-subtle":it("primary-60"),"border-hover":it("primary-90"),"border-hover-strong":it("primary-60"),"border-selected":it("primary-50"),"border-selected-subtle":it("primary-70"),"border-selected-subtlest":it("primary-90"),"border-selected-hover":it("primary-40"),"border-focus":it("primary-60"),"border-focus-strong":it("primary-50"),"border-disabled":it("neutral-90"),"border-selected-disabled":it("neutral-70"),"border-success":it("success-60"),"border-warning":it("warning-60"),"border-error":it("error-60"),"border-error-focus":it("error-60"),"border-error-strong":it("error-40"),"border-info":it("info-60"),bg:it("white"),"bg-strong":it("neutral-100"),"bg-stronger":it("neutral-95"),"bg-strongest":it("neutral-90"),"bg-hover":it("primary-95"),"bg-hover-strong":it("primary-90"),"bg-hover-subtle":it("primary-100"),"bg-hover-neutral":it("neutral-95"),"bg-selected":it("primary-95"),"bg-selected-hover":it("primary-90"),"bg-selected-strong":it("primary-90"),"bg-selected-strongest":it("primary-90"),"bg-disabled":it("neutral-95"),"bg-selected-disabled":it("neutral-95"),"bg-success":it("success-100"),"bg-success-strong":it("success-50"),"bg-warning":it("warning-100"),"bg-warning-strong":it("warning-50"),"bg-info":it("info-100"),"bg-info-strong":it("info-50"),"bg-error":it("error-100"),"bg-error-strong":it("error-50"),"bg-error-strong-hover":it("error-30"),"bg-inverse":it("neutral-20"),"bg-inverse-subtle":it("neutral-30"),"bg-inverse-subtler":it("neutral-50"),"bg-inverse-subtlest":it("neutral-60"),"bg-primary":it("primary-50"),"bg-primary-subtle":it("primary-60"),"bg-primary-subtler":it("primary-80"),"bg-primary-subtlest":it("primary-100"),"bg-primary-hover":it("primary-40"),"bg-primary-subtlest-hover":it("primary-90"),"bg-primary-subtlest-selected":it("primary-90"),"bg-available":"#6DD0A1","overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:it("primary-50"),"hyperlink-inverse":"#FFCB6A","focus-ring":it("black"),"focus-ring-inverse":it("white")},lt={collections:{lifesg:st,bookingsg:st,rbs:st,mylegacy:st,ccube:st},defaultValue:"lifesg"},dt=e=>r=>{const t=r.theme,n=nt(lt,t.colourScheme),a=t.overrides&&t.overrides.semanticColour?tt(n,e,t.overrides.semanticColour):n[e];return"function"==typeof a?a(r):a},ct={text:dt("text"),"text-subtle":dt("text-subtle"),"text-subtler":dt("text-subtler"),"text-subtlest":dt("text-subtlest"),"text-primary":dt("text-primary"),"text-hover":dt("text-hover"),"text-selected":dt("text-selected"),"text-selected-hover":dt("text-selected-hover"),"text-disabled":dt("text-disabled"),"text-disabled-subtle":dt("text-disabled-subtle"),"text-disabled-subtlest":dt("text-disabled-subtlest"),"text-selected-disabled":dt("text-selected-disabled"),"text-success":dt("text-success"),"text-warning":dt("text-warning"),"text-error":dt("text-error"),"text-info":dt("text-info"),"text-inverse":dt("text-inverse"),icon:dt("icon"),"icon-subtle":dt("icon-subtle"),"icon-strongest":dt("icon-strongest"),"icon-primary":dt("icon-primary"),"icon-primary-subtle":dt("icon-primary-subtle"),"icon-primary-subtlest":dt("icon-primary-subtlest"),"icon-hover":dt("icon-hover"),"icon-selected":dt("icon-selected"),"icon-selected-hover":dt("icon-selected-hover"),"icon-disabled":dt("icon-disabled"),"icon-disabled-subtle":dt("icon-disabled-subtle"),"icon-selected-disabled":dt("icon-selected-disabled"),"icon-success":dt("icon-success"),"icon-warning":dt("icon-warning"),"icon-error":dt("icon-error"),"icon-error-strong":dt("icon-error-strong"),"icon-info":dt("icon-info"),"icon-inverse":dt("icon-inverse"),"icon-primary-inverse":dt("icon-primary-inverse"),border:dt("border"),"border-strong":dt("border-strong"),"border-stronger":dt("border-stronger"),"border-primary":dt("border-primary"),"border-primary-subtle":dt("border-primary-subtle"),"border-hover":dt("border-hover"),"border-hover-strong":dt("border-hover-strong"),"border-selected":dt("border-selected"),"border-selected-subtle":dt("border-selected-subtle"),"border-selected-subtlest":dt("border-selected-subtlest"),"border-selected-hover":dt("border-selected-hover"),"border-focus":dt("border-focus"),"border-focus-strong":dt("border-focus-strong"),"border-disabled":dt("border-disabled"),"border-selected-disabled":dt("border-selected-disabled"),"border-success":dt("border-success"),"border-warning":dt("border-warning"),"border-error":dt("border-error"),"border-error-focus":dt("border-error-focus"),"border-error-strong":dt("border-error-strong"),"border-info":dt("border-info"),bg:dt("bg"),"bg-strong":dt("bg-strong"),"bg-stronger":dt("bg-stronger"),"bg-strongest":dt("bg-strongest"),"bg-hover":dt("bg-hover"),"bg-hover-strong":dt("bg-hover-strong"),"bg-hover-subtle":dt("bg-hover-subtle"),"bg-hover-neutral":dt("bg-hover-neutral"),"bg-selected":dt("bg-selected"),"bg-selected-hover":dt("bg-selected-hover"),"bg-selected-strong":dt("bg-selected-strong"),"bg-selected-strongest":dt("bg-selected-strongest"),"bg-disabled":dt("bg-disabled"),"bg-selected-disabled":dt("bg-selected-disabled"),"bg-success":dt("bg-success"),"bg-success-strong":dt("bg-success-strong"),"bg-warning":dt("bg-warning"),"bg-warning-strong":dt("bg-warning-strong"),"bg-info":dt("bg-info"),"bg-info-strong":dt("bg-info-strong"),"bg-error":dt("bg-error"),"bg-error-strong":dt("bg-error-strong"),"bg-error-strong-hover":dt("bg-error-strong-hover"),"bg-inverse":dt("bg-inverse"),"bg-inverse-subtle":dt("bg-inverse-subtle"),"bg-inverse-subtler":dt("bg-inverse-subtler"),"bg-inverse-subtlest":dt("bg-inverse-subtlest"),"bg-primary":dt("bg-primary"),"bg-primary-subtle":dt("bg-primary-subtle"),"bg-primary-subtler":dt("bg-primary-subtler"),"bg-primary-subtlest":dt("bg-primary-subtlest"),"bg-primary-hover":dt("bg-primary-hover"),"bg-primary-subtlest-hover":dt("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":dt("bg-primary-subtlest-selected"),"bg-available":dt("bg-available"),"overlay-strong":dt("overlay-strong"),"overlay-subtle":dt("overlay-subtle"),hyperlink:dt("hyperlink"),"hyperlink-inverse":dt("hyperlink-inverse"),"focus-ring":dt("focus-ring"),"focus-ring-inverse":dt("focus-ring-inverse")},ut={collections:{lifesg:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"lifesg"},ht=e=>r=>{var t;const n=r.theme,a=nt(ut,null==n?void 0:n.breakpointScheme);let i;return i=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.breakpoint)?tt(a,e,n.overrides.breakpoint):a[e],i},gt={"xxs-min":ht("xxs-min"),"xxs-max":ht("xxs-max"),"xs-min":ht("xs-min"),"xs-max":ht("xs-max"),"sm-min":ht("sm-min"),"sm-max":ht("sm-max"),"md-min":ht("md-min"),"md-max":ht("md-max"),"lg-min":ht("lg-min"),"lg-max":ht("lg-max"),"xl-min":ht("xl-min"),"xl-max":ht("xl-max"),"xxl-min":ht("xxl-min"),"xxs-column":ht("xxs-column"),"xs-column":ht("xs-column"),"sm-column":ht("sm-column"),"md-column":ht("md-column"),"lg-column":ht("lg-column"),"xl-column":ht("xl-column"),"xxl-column":ht("xxl-column"),"xxs-gutter":ht("xxs-gutter"),"xs-gutter":ht("xs-gutter"),"sm-gutter":ht("sm-gutter"),"md-gutter":ht("md-gutter"),"lg-gutter":ht("lg-gutter"),"xl-gutter":ht("xl-gutter"),"xxl-gutter":ht("xxl-gutter"),"xxs-margin":ht("xxs-margin"),"xs-margin":ht("xs-margin"),"sm-margin":ht("sm-margin"),"md-margin":ht("md-margin"),"lg-margin":ht("lg-margin"),"xl-margin":ht("xl-margin"),"xxl-margin":ht("xxl-margin")},mt=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,t)=>(r[t]=((e,r)=>{const t=gt["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const n=t(r);return`@media screen and (${e}: ${n}px)`}})(e,t),r)),{}),bt={MaxWidth:mt("max-width"),MinWidth:mt("min-width")},ft={"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.625rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.625rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"},yt={collections:{lifesg:ft,bookingsg:{"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.75rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","formlabel-size-baseline":"1rem","formlabel-size-lg":"1.125rem","formlabel-lh-baseline":"1.5rem","formlabel-lh-lg":"1.75rem","formlabel-ls-baseline":"0.014rem","formlabel-ls-lg":"0rem"},rbs:ft,mylegacy:ft,ccube:ft},defaultValue:"lifesg"},pt=e=>r=>{const t=r.theme,n=nt(yt,t.fontScheme);return t.overrides&&t.overrides.fontSpec?tt(n,e,t.overrides.fontSpec):n[e]},Ft=(e,r,t,n)=>m`
    font-family: ${pt("font-family")};
    font-size: ${pt(e)};
    font-weight: ${pt(r)};
    line-height: ${pt(t)};
    letter-spacing: ${pt(n)};
`,xt={"header-xxl-light":Ft("header-size-xxl","weight-light","header-lh-xxl","header-ls-xxl"),"header-xxl-regular":Ft("header-size-xxl","weight-regular","header-lh-xxl","header-ls-xxl"),"header-xxl-semibold":Ft("header-size-xxl","weight-semibold","header-lh-xxl","header-ls-xxl"),"header-xxl-bold":Ft("header-size-xxl","weight-bold","header-lh-xxl","header-ls-xxl"),"header-xl-light":Ft("header-size-xl","weight-light","header-lh-xl","header-ls-xl"),"header-xl-regular":Ft("header-size-xl","weight-regular","header-lh-xl","header-ls-xl"),"header-xl-semibold":Ft("header-size-xl","weight-semibold","header-lh-xl","header-ls-xl"),"header-xl-bold":Ft("header-size-xl","weight-bold","header-lh-xl","header-ls-xl"),"header-lg-light":Ft("header-size-lg","weight-light","header-lh-lg","header-ls-lg"),"header-lg-regular":Ft("header-size-lg","weight-regular","header-lh-lg","header-ls-lg"),"header-lg-semibold":Ft("header-size-lg","weight-semibold","header-lh-lg","header-ls-lg"),"header-lg-bold":Ft("header-size-lg","weight-bold","header-lh-lg","header-ls-lg"),"header-md-light":Ft("header-size-md","weight-light","header-lh-md","header-ls-md"),"header-md-regular":Ft("header-size-md","weight-regular","header-lh-md","header-ls-md"),"header-md-semibold":Ft("header-size-md","weight-semibold","header-lh-md","header-ls-md"),"header-md-bold":Ft("header-size-md","weight-bold","header-lh-md","header-ls-md"),"header-sm-light":Ft("header-size-sm","weight-light","header-lh-sm","header-ls-sm"),"header-sm-regular":Ft("header-size-sm","weight-regular","header-lh-sm","header-ls-sm"),"header-sm-semibold":Ft("header-size-sm","weight-semibold","header-lh-sm","header-ls-sm"),"header-sm-bold":Ft("header-size-sm","weight-bold","header-lh-sm","header-ls-sm"),"header-xs-light":Ft("header-size-xs","weight-light","header-lh-xs","header-ls-xs"),"header-xs-regular":Ft("header-size-xs","weight-regular","header-lh-xs","header-ls-xs"),"header-xs-semibold":Ft("header-size-xs","weight-semibold","header-lh-xs","header-ls-xs"),"header-xs-bold":Ft("header-size-xs","weight-bold","header-lh-xs","header-ls-xs"),"body-baseline-light":Ft("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline"),"body-baseline-regular":Ft("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline"),"body-baseline-semibold":Ft("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline"),"body-baseline-bold":Ft("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline"),"body-md-light":Ft("body-size-md","weight-light","body-lh-md","body-ls-md"),"body-md-regular":Ft("body-size-md","weight-regular","body-lh-md","body-ls-md"),"body-md-semibold":Ft("body-size-md","weight-semibold","body-lh-md","body-ls-md"),"body-md-bold":Ft("body-size-md","weight-bold","body-lh-md","body-ls-md"),"body-sm-light":Ft("body-size-sm","weight-light","body-lh-sm","body-ls-sm"),"body-sm-regular":Ft("body-size-sm","weight-regular","body-lh-sm","body-ls-sm"),"body-sm-semibold":Ft("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm"),"body-sm-bold":Ft("body-size-sm","weight-bold","body-lh-sm","body-ls-sm"),"body-xs-light":Ft("body-size-xs","weight-light","body-lh-xs","body-ls-xs"),"body-xs-regular":Ft("body-size-xs","weight-regular","body-lh-xs","body-ls-xs"),"body-xs-semibold":Ft("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs"),"body-xs-bold":Ft("body-size-xs","weight-bold","body-lh-xs","body-ls-xs"),"formlabel-baseline-semibold":Ft("formlabel-size-baseline","weight-semibold","formlabel-lh-baseline","formlabel-ls-baseline"),"formlabel-lg-semibold":Ft("formlabel-size-lg","weight-semibold","formlabel-lh-lg","formlabel-ls-lg")},Dt={collections:{lifesg:xt,bookingsg:xt,rbs:xt,mylegacy:xt,ccube:xt},defaultValue:"lifesg"},vt=e=>r=>{const t=r.theme,n=nt(Dt,t.fontScheme),a=t.overrides&&t.overrides.font?tt(n,e,t.overrides.font):n[e];return"function"==typeof a?a(r):a},$t={"header-xxl-light":vt("header-xxl-light"),"header-xxl-regular":vt("header-xxl-regular"),"header-xxl-semibold":vt("header-xxl-semibold"),"header-xxl-bold":vt("header-xxl-bold"),"header-xl-light":vt("header-xl-light"),"header-xl-regular":vt("header-xl-regular"),"header-xl-semibold":vt("header-xl-semibold"),"header-xl-bold":vt("header-xl-bold"),"header-lg-light":vt("header-lg-light"),"header-lg-regular":vt("header-lg-regular"),"header-lg-semibold":vt("header-lg-semibold"),"header-lg-bold":vt("header-lg-bold"),"header-md-light":vt("header-md-light"),"header-md-regular":vt("header-md-regular"),"header-md-semibold":vt("header-md-semibold"),"header-md-bold":vt("header-md-bold"),"header-sm-light":vt("header-sm-light"),"header-sm-regular":vt("header-sm-regular"),"header-sm-semibold":vt("header-sm-semibold"),"header-sm-bold":vt("header-sm-bold"),"header-xs-light":vt("header-xs-light"),"header-xs-regular":vt("header-xs-regular"),"header-xs-semibold":vt("header-xs-semibold"),"header-xs-bold":vt("header-xs-bold"),"body-baseline-light":vt("body-baseline-light"),"body-baseline-regular":vt("body-baseline-regular"),"body-baseline-semibold":vt("body-baseline-semibold"),"body-baseline-bold":vt("body-baseline-bold"),"body-md-light":vt("body-md-light"),"body-md-regular":vt("body-md-regular"),"body-md-semibold":vt("body-md-semibold"),"body-md-bold":vt("body-md-bold"),"body-sm-light":vt("body-sm-light"),"body-sm-regular":vt("body-sm-regular"),"body-sm-semibold":vt("body-sm-semibold"),"body-sm-bold":vt("body-sm-bold"),"body-xs-light":vt("body-xs-light"),"body-xs-regular":vt("body-xs-regular"),"body-xs-semibold":vt("body-xs-semibold"),"body-xs-bold":vt("body-xs-bold"),"formlabel-baseline-semibold":vt("formlabel-baseline-semibold"),"formlabel-lg-semibold":vt("formlabel-lg-semibold")},wt=Object.assign(Object.assign({},ct),{Primitive:ot}),Bt=$t,St=bt,Et=h.button`
    padding: 0.5rem 1rem;
    min-width: 4rem;
    border-radius: 4px;
    transition: all 200ms ease;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return m`
                    background-color: ${wt.Primitive.white};
                    border: 1px solid
                        ${e.$buttonIsDanger?wt["border-error-strong"]:wt["border-primary"]};

                    color: ${e.$buttonIsDanger?wt["text-error"]:wt["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${wt["bg-hover-neutral"]};
                    }
                `;case"light":return m`
                    background-color: ${wt.bg};
                    border: 1px solid ${wt.border};

                    color: ${e.$buttonIsDanger?wt["text-error"]:wt["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${wt["bg-hover-neutral"]};
                    }
                `;case"link":return m`
                    background-color: transparent;
                    border: transparent;
                    color: ${e.$buttonIsDanger?wt["text-error"]:wt["text-primary"]};
                    &:hover,
                    &:active {
                        background-color: ${wt["bg-hover-neutral"]};
                    }
                `;case"disabled":return m`
                    background-color: ${wt["bg-disabled"]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${wt["text-disabled"]};
                `;default:return m`
                    background-color: ${e.$buttonIsDanger?wt["bg-error-strong"]:wt["bg-primary"]};
                    border: 1px solid transparent;

                    ${St.MaxWidth.md} {
                        width: 100%;
                    }

                    color: ${wt["text-inverse"]};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?wt["bg-error-strong-hover"]:wt["bg-primary-hover"]};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return m`
                    height: 2.5rem;
                    ${Bt["body-md-semibold"]}

                    ${St.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return m`
                    height: 4rem;
                    ${Bt["header-md-semibold"]}

                    ${St.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return m`
                    height: 3rem;
                    ${Bt["header-xs-semibold"]}

                    ${St.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,Ct=h((({color:t,className:n,size:a})=>e(P,Object.assign({className:n,$size:a,$color:t},{children:[r(I,{id:"inner1"}),r(V,{id:"inner2"}),r(J,{id:"inner3"}),r(Z,{id:"inner4"})]}))))`
    margin-right: 0.5rem;
`,At={Default:n.forwardRef(((t,n)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:s="default",danger:l=!1}=t,d=f(t,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return e(Et,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:i},c,d,{children:[o&&r(Ct,{}),r("span",{children:a})]}))})),Small:n.forwardRef(((t,n)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:s="default",danger:l=!1}=t,d=f(t,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return e(Et,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:i},c,d,{children:[o&&r(Ct,{}),r("span",{children:a})]}))})),Large:n.forwardRef(((t,n)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:s="default",danger:l=!1}=t,d=f(t,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"large",$buttonIsDanger:l};return e(Et,Object.assign({ref:n,"data-testid":d["data-testid"]||"button",disabled:i},c,d,{children:[o&&r(Ct,{}),r("span",{children:a})]}))}))},kt=(e,r,t)=>r?rt(t,r)||rt(e,r):t||e,Ht=(e,r)=>{const t=r||e.defaultValue;return rt(e.collections,t)};var zt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(zt||(zt={}));const Ot={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Mt=e=>r=>{const t=r.theme,n=Ht(Ot,t[zt.colorScheme]);return t.options&&t.options.color?kt(n,e,t.options.color):kt(n,e)},Lt={Brand:{1:Mt("Brand.1"),2:Mt("Brand.2"),3:Mt("Brand.3"),4:Mt("Brand.4"),5:Mt("Brand.5"),6:Mt("Brand.6")},Primary:Mt("Primary"),PrimaryDark:Mt("PrimaryDark"),Secondary:Mt("Secondary"),Accent:{Light:{1:Mt("Accent.Light.1"),2:Mt("Accent.Light.2"),3:Mt("Accent.Light.3"),4:Mt("Accent.Light.4"),5:Mt("Accent.Light.5"),6:Mt("Accent.Light.6")},Dark:{1:Mt("Accent.Dark.1"),2:Mt("Accent.Dark.2"),3:Mt("Accent.Dark.3")}},Neutral:{1:Mt("Neutral.1"),2:Mt("Neutral.2"),3:Mt("Neutral.3"),4:Mt("Neutral.4"),5:Mt("Neutral.5"),6:Mt("Neutral.6"),7:Mt("Neutral.7"),8:Mt("Neutral.8")},Validation:{Green:{Text:Mt("Validation.Green.Text"),Icon:Mt("Validation.Green.Icon"),Border:Mt("Validation.Green.Border"),Background:Mt("Validation.Green.Background")},Orange:{Text:Mt("Validation.Orange.Text"),Icon:Mt("Validation.Orange.Icon"),Border:Mt("Validation.Orange.Border"),Background:Mt("Validation.Orange.Background"),Badge:Mt("Validation.Orange.Badge")},Red:{Text:Mt("Validation.Red.Text"),Icon:Mt("Validation.Red.Icon"),Border:Mt("Validation.Red.Border"),Background:Mt("Validation.Red.Background")},Blue:{Text:Mt("Validation.Blue.Text"),Icon:Mt("Validation.Blue.Icon"),Border:Mt("Validation.Blue.Border"),Background:Mt("Validation.Blue.Background")}},Shadow:{Accent:Mt("Shadow.Accent"),Red:Mt("Shadow.Red"),Elevation:Mt("Shadow.Elevation")}},Wt={OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"},Yt={D1:{fontFamily:Wt.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Wt.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Wt.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Wt.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Wt.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Wt.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Wt.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Wt.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Wt.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Wt.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Wt.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Wt.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Wt.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Wt.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},Tt={D1:{fontFamily:Wt.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056},D2:{fontFamily:Wt.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032},D3:{fontFamily:Wt.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Wt.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Wt.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Wt.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032},H2:{fontFamily:Wt.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Wt.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Wt.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75},H5:{fontFamily:Wt.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H6:{fontFamily:Wt.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012},Body:{fontFamily:Wt.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75},BodySmall:{fontFamily:Wt.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Wt.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},jt={collections:{base:Yt,oneservice:{D1:{fontFamily:Wt.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:Wt.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:Wt.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Wt.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Wt.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:Wt.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:Wt.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:Wt.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:Wt.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:Wt.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:Wt.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:Wt.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:Wt.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:Wt.OpenSans.Regular,fontSize:.75,lineHeight:1.125}},plusJakartaSans:Tt},defaultValue:"base"},_t=e=>r=>{const t=r.theme,n=Ht(jt,t[zt.textStyleScheme]);return t.options&&t.options.textStyle?kt(n,e,t.options.textStyle):kt(n,e)},Nt={D1:{fontFamily:_t("D1.fontFamily"),fontSize:_t("D1.fontSize"),fontWeight:_t("D1.fontWeight"),lineHeight:_t("D1.lineHeight"),letterSpacing:_t("D1.letterSpacing")},D2:{fontFamily:_t("D2.fontFamily"),fontSize:_t("D2.fontSize"),fontWeight:_t("D2.fontWeight"),lineHeight:_t("D2.lineHeight"),letterSpacing:_t("D2.letterSpacing")},D3:{fontFamily:_t("D3.fontFamily"),fontSize:_t("D3.fontSize"),fontWeight:_t("D3.fontWeight"),lineHeight:_t("D3.lineHeight"),letterSpacing:_t("D3.letterSpacing")},D4:{fontFamily:_t("D4.fontFamily"),fontSize:_t("D4.fontSize"),fontWeight:_t("D4.fontWeight"),lineHeight:_t("D4.lineHeight"),letterSpacing:_t("D4.letterSpacing")},DBody:{fontFamily:_t("DBody.fontFamily"),fontSize:_t("DBody.fontSize"),fontWeight:_t("DBody.fontWeight"),lineHeight:_t("DBody.lineHeight"),letterSpacing:_t("DBody.letterSpacing")},H1:{fontFamily:_t("H1.fontFamily"),fontSize:_t("H1.fontSize"),fontWeight:_t("H1.fontWeight"),lineHeight:_t("H1.lineHeight"),letterSpacing:_t("H1.letterSpacing")},H2:{fontFamily:_t("H2.fontFamily"),fontSize:_t("H2.fontSize"),fontWeight:_t("H2.fontWeight"),lineHeight:_t("H2.lineHeight"),letterSpacing:_t("H2.letterSpacing")},H3:{fontFamily:_t("H3.fontFamily"),fontSize:_t("H3.fontSize"),fontWeight:_t("H3.fontWeight"),lineHeight:_t("H3.lineHeight"),letterSpacing:_t("H3.letterSpacing")},H4:{fontFamily:_t("H4.fontFamily"),fontSize:_t("H4.fontSize"),fontWeight:_t("H4.fontWeight"),lineHeight:_t("H4.lineHeight"),letterSpacing:_t("H4.letterSpacing")},H5:{fontFamily:_t("H5.fontFamily"),fontSize:_t("H5.fontSize"),fontWeight:_t("H5.fontWeight"),lineHeight:_t("H5.lineHeight"),letterSpacing:_t("H5.letterSpacing")},H6:{fontFamily:_t("H6.fontFamily"),fontSize:_t("H6.fontSize"),fontWeight:_t("H6.fontWeight"),lineHeight:_t("H6.lineHeight"),letterSpacing:_t("H6.letterSpacing")},Body:{fontFamily:_t("Body.fontFamily"),fontSize:_t("Body.fontSize"),fontWeight:_t("Body.fontWeight"),lineHeight:_t("Body.lineHeight"),letterSpacing:_t("Body.letterSpacing")},BodySmall:{fontFamily:_t("BodySmall.fontFamily"),fontSize:_t("BodySmall.fontSize"),fontWeight:_t("BodySmall.fontWeight"),lineHeight:_t("BodySmall.lineHeight"),letterSpacing:_t("BodySmall.letterSpacing")},XSmall:{fontFamily:_t("XSmall.fontFamily"),fontSize:_t("XSmall.fontSize"),fontWeight:_t("XSmall.fontWeight"),lineHeight:_t("XSmall.lineHeight"),letterSpacing:_t("XSmall.letterSpacing")}},Pt=[Wt.OpenSans,Wt.PlusJakartaSans],Rt=(e,r)=>{switch(r){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},It=(e,r)=>t=>{var n;const a=Nt[e].fontFamily(t),i=Nt[e].fontWeight(t),o=Pt.find((e=>Object.values(e).includes(a)));return o?m`
                font-family: ${Rt(o,r)||Rt(o,i)||a};
                font-weight: normal !important;
            `:m`
            font-family: ${a};
            font-weight: ${null!==(n=Vt(r)||i)&&void 0!==n?n:"normal"};
        `},Vt=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Jt=e=>{if(e>0)return m`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Zt=It,Xt=(e,r,t=!1)=>n=>{const a=Nt[e],i=a.fontSize(n);return m`
            ${It(e,r)}
            font-size: ${i}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${a.letterSpacing(n)||0}rem !important;
            ${m`
                margin-bottom: ${i*(t?1.05:0)}rem;
            `}
        `},Ut=(e=!1,r=!1,t=void 0)=>r?m`
            display: block;
            ${Jt(t)}
        `:e?m`
            display: inline;
        `:m`
            display: block;
            ${Jt(t)}
        `;var Gt;!function(e){e.D1=h.h1`
        ${e=>m`
                ${Xt("D1",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${Ut(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=h.h1`
        ${e=>m`
                ${Xt("D2",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${Ut(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=h.h1`
        ${e=>m`
                ${Xt("D3",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${Ut(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=h.h1`
        ${e=>m`
                ${Xt("D4",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${Ut(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=h.h1`
        ${e=>m`
                ${Xt("DBody",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${Ut(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=h.h1`
        ${e=>m`
                ${Xt("H1",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${Ut(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=h.h2`
        ${e=>m`
                ${Xt("H2",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${Ut(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=h.h3`
        ${e=>m`
                ${Xt("H3",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${Ut(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=h.h4`
        ${e=>m`
                ${Xt("H4",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${Ut(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=h.h5`
        ${e=>m`
                ${Xt("H5",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${Ut(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=h.h6`
        ${e=>m`
                ${Xt("H6",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${Ut(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=h.p`
        ${e=>m`
                ${Xt("Body",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${Ut(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=h.p`
        ${e=>m`
                ${Xt("BodySmall",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${Ut(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=h.span`
        ${e=>m`
                ${Xt("XSmall",e.weight,e.paragraph)}
                color: ${Lt.Neutral[1]};
                ${Ut(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Kt(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Kt(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Gt||(Gt={}));const qt=h.a`
    ${e=>m`
            ${Xt(e.textStyle,e.weight)}
            color: ${Lt.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Lt.Secondary};

                svg {
                    color: ${Lt.Secondary};
                }
            }
        `}
`,Qt=h(b)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Kt=t=>{var{external:n=!1,children:a}=t,i=f(t,["external","children"]);return e(qt,Object.assign({},i,{children:[a,n&&r(Qt,{})]}))};var en;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(en||(en={}));const rn=h.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
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

        ${({$highlight:e})=>e&&m`
                background-color: ${Lt.Neutral[7]};
            `}
    }
`,tn=n.forwardRef(((e,t)=>{var{children:n,focusHighlight:a=!0,focusOutline:i="none",type:o="button"}=e,s=f(e,["children","focusHighlight","focusOutline","type"]);return r(rn,Object.assign({ref:t,$outline:i,$highlight:a,type:o},s,{children:n}))})),nn=m`
    color: ${Lt.Neutral[3]};
    height: 1rem;
    width: 1rem;
`,an=h(c)`
    ${nn}
`,on=h(u)`
    ${nn}
`,sn=h(d)`
    ${nn}
    transition: transform 250ms ease-in-out;
    margin-left: 0.5rem;
`,ln=h.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
`,dn=h.div`
    display: flex;
    flex: 1;
    position: relative;
`,cn=h.div`
    isolation: isolate;
    width: 100%;
`,un=h.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${Lt.Neutral[8]};

    ${e=>{if(!e.$visible)return m`
                display: none;
            `}}
`,hn=h.div`
    display: flex;
    justify-content: space-between;
    margin: 0 0 0.5rem 0;
`,gn=h.div`
    display: flex;
`,mn=h.button`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;

    ${e=>!1===e.$visible?m`
                display: none;
            `:e.$expanded?m`
                ${sn} {
                    transform: rotate(180deg);
                }
            `:void 0}
`,bn=h.p`
    ${Xt("H5","regular")}
`,fn=h.div`
    display: flex;
`,yn=h(tn)`
    margin: auto 0;
    padding: 0.75rem;

    :disabled {
        cursor: not-allowed;
    }
`,pn=h.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;
`,Fn=h(At.Small)`
    flex: 1;
`,xn=h.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 2.5rem);
    align-content: center;
    justify-content: center;

    ${e=>{switch(e.$type){case"standalone":return m`
                    gap: 0.5rem 2.5rem;
                `;case"input":return m`
                    gap: 0.5rem 1rem;
                `}}}
`,Dn=h.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: default;
    border-radius: 5rem;
    margin: 0 0.5rem;

    ${e=>e.$interactive?m`
                cursor: pointer;
                &:hover {
                    box-shadow: 0px 0px 4px 1px ${Lt.Shadow.Accent};
                    border: 1px solid ${Lt.Accent.Light[1]};
                }
            `:e.$disabledDisplay?m`
                cursor: not-allowed;
            `:void 0}

    ${e=>{switch(e.$variant){case"current-month":return m`
                    background-color: ${Lt.Accent.Light[6](e)};
                `;case"selected-month":return m`
                    background-color: ${Lt.Accent.Light[5](e)};
                    border: 1px solid ${Lt.Primary(e)};
                `}}}
`,vn=h(Gt.H5)`
    ${e=>{if(e.$disabledDisplay)return m`
                color: ${Lt.Neutral[4]};
            `;switch(e.$variant){case"current-month":return m`
                    color: ${Lt.Neutral[3](e)};
                `;case"selected-month":return m`
                    ${Xt("H5","semibold")}
                    color: ${Lt.Primary(e)};
                `}}}
`,$n=({calendarDate:e,currentFocus:t,selectedStartDate:n,selectedEndDate:i,viewCalendarDate:o,type:s,isNewSelection:l,minDate:d,maxDate:c,allowDisabledSelection:u,onMonthSelect:h})=>{const g=a((()=>k.generateMonths(x(e))),[e]),m=e=>{const r="start"===t&&i&&e.isAfter(i,"month")&&l,a="end"===t&&n&&e.isBefore(n,"month")&&l;return r||a},b=e=>{const r=e.format("MMMM"),t=(n=e,!k.isWithinRange(n,d?x(d):void 0,c?x(c):void 0,"month"));var n;const a=o.isSame(e,"month")?"selected-month":x().isSame(e,"month")?"current-month":"default";return{disabledDisplay:t||m(e),interactive:!t||u,month:r,variant:a}};return g.length?r(xn,Object.assign({$type:s},{children:g.map((e=>{const{disabledDisplay:t,interactive:n,variant:a,month:i}=b(e);return r(Dn,Object.assign({$variant:a,$disabledDisplay:t,$interactive:n,onClick:()=>((e,r)=>{r||h(e)})(e,!n)},{children:r(vn,Object.assign({weight:"regular",$variant:a,$disabledDisplay:t},{children:i}))}),i)}))})):null},wn=h.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-content: center;
    grid-template-columns: repeat(3, 1fr);

    ${e=>{switch(e.$type){case"standalone":return m`
                    grid-template-rows: repeat(4, 4rem);
                    gap: 0.5rem 2.5rem;
                `;case"input":return m`
                    grid-template-rows: repeat(4, 4.375rem);
                    gap: 0.5rem 1rem;
                `}}}
`,Bn=h.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: default;
    border-radius: 0.5rem;
    margin: 0 0.5rem;

    ${e=>e.$interactive?m`
                cursor: pointer;
                &:hover {
                    box-shadow: 0px 0px 4px 1px ${Lt.Shadow.Accent};
                    border: 1px solid ${Lt.Accent.Light[1]};
                }
            `:e.$disabledDisplay?m`
                cursor: not-allowed;
            `:void 0}

    ${e=>{switch(e.$variant){case"current-year":return m`
                    background: ${Lt.Accent.Light[6](e)};
                `;case"selected-year":return m`
                    background: ${Lt.Accent.Light[5](e)};
                    border: 1px solid ${Lt.Primary(e)};
                `}}};
`,Sn=h(Gt.H5)`
    ${e=>{if(e.$disabledDisplay)return m`
                color: ${Lt.Neutral[4]};
            `;switch(e.$variant){case"current-year":return m`
                    color: ${Lt.Neutral[3](e)};
                `;case"selected-year":return m`
                    ${Xt("H5","semibold")}
                    color: ${Lt.Primary(e)};
                `;case"other-decade":return m`
                    color: ${Lt.Neutral[4](e)};
                `}}}
`,En=({calendarDate:e,currentFocus:t,selectedStartDate:n,selectedEndDate:i,viewCalendarDate:o,type:s,isNewSelection:l,minDate:d,maxDate:c,allowDisabledSelection:u,onYearSelect:h})=>{const g=a((()=>k.generateDecadeOfYears(x(e))),[e]),m=e=>{const r="start"===t&&i&&e.isAfter(i,"year")&&l,a="end"===t&&n&&e.isBefore(n,"year")&&l;return r||a},b=e=>{const r=[0,11].includes(g.indexOf(e)),t=e.year(),n=(a=e,!k.isWithinRange(a,d?x(d):void 0,c?x(c):void 0,"year"));var a;const i=r?"other-decade":o.isSame(e,"year")?"selected-year":x().isSame(e,"year")?"current-year":"default";return{disabledDisplay:n||m(e),interactive:!n||u,year:t,variant:i}};return g.length?r(wn,Object.assign({$type:s},{children:g.map((e=>{const{disabledDisplay:t,interactive:n,variant:a,year:i}=b(e);return r(Bn,Object.assign({$variant:a,$disabledDisplay:t,$interactive:n,onClick:()=>((e,r)=>{r||h(e)})(e,!n)},{children:r(Sn,Object.assign({weight:"regular",$variant:a,$disabledDisplay:t,$interactive:n},{children:i}))}),i)}))})):null},Cn=n.forwardRef(((n,a)=>{var{children:d,initialCalendarDate:c,type:u,minDate:h,maxDate:g,currentFocus:m,selectedStartDate:b,selectedEndDate:y,selectWithinRange:p,dynamicHeight:F=!1,allowDisabledSelection:D,onCalendarDateChange:v,withButton:$,doneButtonDisabled:w,onDismiss:B,showNavigationHeader:S=!0,getLeftArrowDate:E,getRightArrowDate:C,isLeftArrowDisabled:A,isRightArrowDisabled:H,getMonthHeaderLabel:z,getYearHeaderLabel:O}=n,M=f(n,["children","initialCalendarDate","type","minDate","maxDate","currentFocus","selectedStartDate","selectedEndDate","selectWithinRange","dynamicHeight","allowDisabledSelection","onCalendarDateChange","withButton","doneButtonDisabled","onDismiss","showNavigationHeader","getLeftArrowDate","getRightArrowDate","isLeftArrowDisabled","isRightArrowDisabled","getMonthHeaderLabel","getYearHeaderLabel"]);const[L,W]=i(T.toDayjs(c)),[Y,j]=i(T.toDayjs(c)),[_,N]=i("default"),P=o(null),R=o(null),I=o();s(a,(()=>({defaultView(){N("default")},resetView(){const e=T.toDayjs(c);W(e),j(e),N("default")},setCalendarDate(e){const r=T.toDayjs(e);W(r),j(r)}}))),l((()=>{const e=T.toDayjs(c);W(e),j(e)}),[c]),l((()=>{q(Y)}),[Y]);const V=()=>{"month-options"!==_?(N("month-options"),I.current.focus()):(N("default"),W(Y))},J=()=>{"default"!==_?(N("default"),W(Y)):N("year-options")},Z=()=>{I.current.focus();const e=E?E(L):L.subtract(1,"month");switch(_){case"default":j(e),W(e);break;case"month-options":W((e=>e.subtract(1,"year")));break;case"year-options":W((e=>e.subtract(10,"year")))}},X=()=>{I.current.focus();const e=C?C(L):L.add(1,"month");switch(_){case"default":j(e),W(e);break;case"month-options":W((e=>e.add(1,"year")));break;case"year-options":W((e=>e.add(10,"year")))}},U=e=>{W(e),j(e),$||N("default")},G=()=>{const e=T.toDayjs(c);W(e),j(e),"default"===_?Q("reset"):N("default")},q=e=>{v&&v(e)},Q=e=>{B&&B(e)},K=()=>{if(!h||D)return!1;const e=x(h);return"month-options"===_?!k.isPreviousYearWithinRange(L,e):"year-options"===_?!k.isPreviousDecadeWithinRange(L,e):A?A(L):!k.isPreviousMonthWithinRange(L,e)},ee=()=>{if(!g||D)return!1;const e=x(g);return"month-options"===_?!k.isNextYearWithinRange(L,e):"year-options"===_?!k.isNextDecadeWithinRange(L,e):H?H(L):!k.isNextMonthWithinRange(L,e)},re=()=>{if("year-options"===_){const{beginDecade:e,endDecade:r}=k.getStartEndDecade(L);return`${e} to ${r}`}return O?O(L):L.format("YYYY")},te=()=>{const n=z?z(L):L.format("MMM");return e(t,{children:[e(mn,Object.assign({type:"button",tabIndex:-1,$expanded:"month-options"===_,$visible:"default"===_,id:"month-dropdown",onClick:V},{children:[r(bn,{children:n}),r(sn,{})]})),e(mn,Object.assign({type:"button",tabIndex:-1,$expanded:"default"!==_,id:"year-dropdown",onClick:J},{children:[r(bn,{children:re()}),r(sn,{})]}))]})},ne=()=>{switch(_){case"month-options":return r($n,{type:u,calendarDate:L,currentFocus:m,minDate:h,maxDate:g,selectedStartDate:b,selectedEndDate:y,viewCalendarDate:Y,isNewSelection:p,onMonthSelect:U,allowDisabledSelection:D});case"year-options":return r(En,{type:u,calendarDate:L,currentFocus:m,minDate:h,maxDate:g,selectedStartDate:b,selectedEndDate:y,viewCalendarDate:Y,isNewSelection:p,onYearSelect:U,allowDisabledSelection:D});default:return null}};return e(ln,Object.assign({ref:I,"data-id":"calendar-container","data-testid":"calendar-container"},M,{children:[S&&e(hn,Object.assign({"data-id":"calendar-header","data-testid":"calendar-header"},{children:[r(gn,{children:te()}),e(fn,{children:[r(yn,Object.assign({"aria-label":"Previous month","data-testid":"left-arrow-btn",disabled:K(),focusHighlight:!1,tabIndex:-1,onClick:Z},{children:r(an,{})})),r(yn,Object.assign({"aria-label":"Next month","data-testid":"right-arrow-btn",disabled:ee(),focusHighlight:!1,tabIndex:-1,onClick:X},{children:r(on,{})}))]})]})),r(dn,{children:(()=>{const n="function"==typeof d?d({calendarDate:Y,currentView:_}):d;return e(t,F?{children:["default"===_&&n,ne()]}:{children:[r(cn,{children:n}),r(un,Object.assign({$visible:"default"!==_},{children:ne()}))]})})()}),(()=>{if(!$)return;const t=!!("default"===_)&&w;return e(pn,{children:[r(Fn,Object.assign({ref:R,"data-testid":"cancel-button",styleType:"light",type:"button",onClick:G},{children:"Cancel"})),r(Fn,Object.assign({"data-testid":"done-button",ref:P,type:"button",onClick:()=>{t||(W(Y),"default"===_?Q("confirmed"):N("default"))},disabled:t},{children:"Done"}))]})})()]}))}));h.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 0.25rem;
`,h.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    pointer-events: none;
    user-select: none;
`;const An=h.div`
    grid-column: 1 / -1;
    display: flex;
`,kn=h.div`
    display: flex;
    position: relative;
    height: 2.5rem;
    align-items: center;
    justify-content: center;
    flex: 1;
`,Hn=h.div`
    position: absolute;
    width: 50%;
    height: 100%;

    ${e=>{switch(e.$position){case"left":return m`
                    left: 0;
                `;case"right":return m`
                    right: 0;
                `}}}
`,zn=h.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    cursor: default;
    position: absolute;
`,On=h(Gt.H5)`
    ${e=>{const{$disabledDisplay:r,$selected:t,$variant:n}=e;if(r&&t)return m`
                ${Xt("H5","semibold")};
                color: ${Lt.Accent.Light[2]};
            `;if(r)return m`
                color: ${Lt.Neutral[4]};
            `;if(t)return m`
                ${Xt("H5","semibold")};
                color: ${Lt.Primary};
            `;switch(n){case"other-month":return m`
                    color: ${Lt.Neutral[4]};
                `;case"today":return m`
                    color: ${Lt.Neutral[3]};
                `;case"default":return m`
                    color: ${Lt.Neutral[1]};
                `}}}
`;h(Hn)`
    ${e=>{const{$selected:r}=e;if(r)return m`
                border-top: 1px solid ${Lt.Accent.Light[4]};
                border-bottom: 1px solid ${Lt.Accent.Light[4]};
                background-color: ${Lt.Accent.Light[5]};
            `}}

    ${e=>{const{$hovered:r,$overlap:t}=e;return r?m`
                border-top: 1px dashed ${Lt.Accent.Light[4]};
                border-bottom: 1px dashed ${Lt.Accent.Light[4]};
                background-color: ${Lt.Accent.Light[6]};
            `:t?m`
                background-color: ${Lt.Accent.Light[4]};
            `:void 0}}
`;const Mn=h(zn)`
    ${e=>{const{$hovered:r,$selected:t}=e;return t?m`
                background: ${Lt.Accent.Light[5]};
                border: 1px solid ${Lt.Primary};
            `:r?m`
                box-shadow: 0px 0px 4px 1px ${Lt.Shadow.Accent};
                border: 1px solid ${Lt.Accent.Light[1]};
                background-color: ${Lt.Neutral[8]};
            `:void 0}}

    ${e=>{const{$interactive:r,$disabledDisplay:t}=e;return r?m`
                cursor: pointer;
                :hover {
                    box-shadow: 0px 0px 4px 1px ${Lt.Shadow.Accent};
                    border: 1px solid ${Lt.Accent.Light[1]};
                    background-color: ${Lt.Neutral[8]};
                }
            `:t?m`
                cursor: not-allowed;
            `:void 0}}

    ${e=>{const{$disabledDisplay:r,$overlap:t,$variant:n}=e;return t?m`
                border: 1px solid ${Lt.Accent.Light[1]};
                background: ${Lt.Accent.Light[4]};

                :hover {
                    background: ${Lt.Accent.Light[4]};
                }
            `:r?m`
                color: ${Lt.Neutral[4]};
            `:"today"===n?m`
                    background: ${Lt.Accent.Light[5]};
                `:void 0}}
`,Ln=e=>{let r=Lt.Neutral[8],t="1px solid transparent";switch(e.$type){case"current":r=Lt.Accent.Light[5];break;case"hover-dash":r=Lt.Accent.Light[6],t=`1px dashed ${Lt.Accent.Light[4](e)}`;break;case"hover-current":r=Lt.Neutral[8],t=`1px solid ${Lt.Primary(e)}`;break;case"selected":r=Lt.Accent.Light[5],t=`1px solid ${Lt.Accent.Light[4](e)}`;break;case"selected-outline":r=Lt.Accent.Light[5],t=`1px solid ${Lt.Primary(e)}`;break;case"overlap":r=Lt.Accent.Light[4],t=`1px solid ${Lt.Accent.Light[4](e)}`;break;case"overlap-outline":r=Lt.Accent.Light[4],t=`1px solid ${Lt.Primary(e)}`}return{color:r,border:t}};h.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 2.5rem;
`;const Wn=h.div`
    position: absolute;
    height: 2.5rem;
    width: 50%;

    ${e=>{if(!e.$type)return;const{color:r,border:t}=Ln(e);return m`
            background-color: ${r};
            background-clip: content-box;
            border-top: ${t};
            border-bottom: ${t};
        `}}
`;h(Wn)`
    left: 0;
`,h(Wn)`
    right: 0;
`;const Yn=h.div`
    z-index: -1;
    box-shadow: 0 0 4px 1px ${Lt.Shadow.Accent};
    position: absolute;
    height: 100%;
    width: 50%;
    display: none;

    ${e=>e.$shadow&&"display: block;"}
`;h(Yn)`
    left: 0;
`,h(Yn)`
    right: 0;
`;const Tn=h.div`
    position: absolute;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;

    border: 1px solid transparent;
    border-radius: 50%;

    ${e=>{if(e.$type){const{color:r,border:t}=Ln(e);return m`
                background-color: ${r};
                background-clip: content-box;
                border: ${t};
            `}}}

    ${e=>e.$shadow&&m`
            &:before {
                content: "";
                border-radius: 50%;
                position: absolute;
                height: 100%;
                width: 100%;
            }
        `}
`;h(Tn)`
    right: calc(50% - 1.25rem);
    clip-path: inset(-3px 1.25rem -3px -3px);
    &:before {
        box-shadow: -1px 0 4px 1px ${Lt.Shadow.Accent};
    }
`,h(Tn)`
    left: calc(50% - 1.25rem);
    clip-path: inset(-3px -3px -3px 1.25rem);
    &:before {
        box-shadow: 1px 0 4px 1px ${Lt.Shadow.Accent};
    }
`,h(Gt.H5)`
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 2;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 50%;

    cursor: ${e=>e.$interactive?"pointer":null===e.$interactive?"default":"not-allowed"};

    ${e=>{const{$disabled:r,$type:t}=e;if(r)return"selected"===t?m`
                    ${Xt("H5","semibold")};
                    color: ${Lt.Accent.Light[2]};
                `:m`
                color: ${Lt.Neutral[4]};
            `;switch(t){case"selected":return m`
                    ${Xt("H5","semibold")};
                    color: ${Lt.Primary};
                `;case"current":return m`
                    color: ${Lt.Neutral[3]};
                `;case"unavailable":return m`
                    color: ${Lt.Neutral[4]};
                `;case"hidden":return m`
                    visibility: hidden;
                `;default:return m`
                    color: ${Lt.Neutral[1]};
                `}}}
`,x.extend(w);const jn=1.25,_n=e=>"minified"===e?12:40;h.div`
    position: relative;
    display: flex;
    align-items: center;
`,h(tn)`
    z-index: 2;
    position: absolute;
    bottom: ${({$variant:e})=>"default"===e?"0.25rem":"0rem"};
    background-color: ${Lt.Neutral[8]};
    box-shadow: 0px 2px 8px rgba(104, 104, 104, 0.5);
    border-radius: 50%;
    padding: 0.5rem;
    width: 2rem;
    height: 2rem;

    ${e=>"right"===e.$direction?m`
                  right: 0;
              `:m`
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
    color: ${Lt.Primary};
`,h(c)`
    font-size: 1rem;
    color: ${Lt.Primary};
`,h.div`
    overflow: hidden;
    flex-grow: 1;
    position: relative;
    height: ${({$variant:e})=>`${20+_n(e)}px`};
`,h.div`
    position: relative;
    white-space: nowrap;
    height: ${jn}rem;
`,h.div`
    display: flex;
    white-space: nowrap;
`,h.div`
    display: inline-block;
    width: ${({$variant:e})=>("minified"===e?12:40)+"px"};
    position: relative;
    border-left: 1px solid ${Lt.Neutral[2]};
    ${e=>{let r=0;switch(e.$variant){case"default":r=e.$isLongMarker?jn:.625;break;case"minified":r=e.$isLongMarker?jn:0;break;default:r=0}return m`
            height: ${r}rem;
        `}}
`,h(Gt.XSmall)`
    color: ${Lt.Neutral[2]};
    position: absolute;
    bottom: 10%;
    left: 10%;
`;const Nn=h.div`
    ${e=>"vertical"===e.$type?m`
                display: flex;
                flex-grow: 1;
                align-items: center;
                justify-content: center;
                width: 100%;
                margin: 1px 0px;
            `:m`
                position: absolute;
                height: ${_n(e.$variant)}px;
                width: ${e.$width}px;
                left: ${e.$left}px;
            `}
    background-color: ${({$bgColor:e})=>e};
    cursor: ${({$clickable:e})=>e?"pointer":"default"};

    ${e=>"stripes"===e.$styleType&&m`
            background: repeating-linear-gradient(
                135deg,
                ${e.$bgColor2||Lt.Neutral[5]} 0px,
                ${e.$bgColor2||Lt.Neutral[5]} 10px,
                ${e.$bgColor} 10px,
                ${e.$bgColor} 20px
            );
        `}
`;h.div`
    position: absolute;
    top: ${jn}rem;
    height: ${({$variant:e})=>`${_n(e)}px`};
    z-index: 1;
    border-right: 1px solid ${Lt.Neutral[2]};
`,h(Gt.XSmall)`
    color: ${e=>e.$color||Lt.Neutral[2](e)};
    position: absolute;
    bottom: 0;
    padding-left: 4px;
    padding-bottom: 4px;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;const Pn=h(On)`
    ${e=>{const{$variant:r}=e;if("default"===r)return m`
                    ${Zt("H5","semibold")}
                    color: ${Lt.Neutral[3]};
                `}}
`,Rn=h.div`
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    user-select: none;
    margin-bottom: 0.188rem;
`,In=h.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
`,Vn=h.div`
    grid-column: 1 / -1;
    display: flex;
    min-height: 7.625rem;
`,Jn=h.div`
    ${Xt("XSmall","semibold")}
    margin: 1rem 0rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 2.5rem;
    color: ${Lt.Neutral[1]};
    span {
        display: block;
    }
`,Zn=h.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 1px;
`;x.extend(w);const Xn={id:"1",startTime:"",endTime:"",clickable:!1,styleAttributes:{styleType:"stripes",backgroundColor:"#ECEFEF",backgroundColor2:"#E0E4E5"}},Un=({calendarDate:t,disabledDates:n,selectedDate:i,onSelect:o,minDate:s,maxDate:l,slots:d,enableSelection:c=!0,onSlotClick:u})=>{const h=a((()=>k.generateDaysForCurrentWeek(t)),[t]),g="YYYY-MM-DD",m=e=>{const r=e.format(g),t=(e=>{const r=k.isWithinRange(e,s?x(s):void 0,l?x(l):void 0),t=n&&n.includes(e.format(g));return!r||t})(e),a={},o={};return t&&(a.$disabledDisplay=!0,o.$disabledDisplay=!0),a.$interactive=c&&!t,[i].includes(r)&&(a.$selected=!0,o.$selected=!0),{styleCircleProps:a,styleLabelProps:o}};return e(In,{children:[r(An,{children:h.map(((e,t)=>{const n="default",{styleCircleProps:a,styleLabelProps:i}=m(e);return r(kn,{children:r(Mn,Object.assign({$variant:n,onClick:()=>((e,r)=>{!r&&c&&o(e)})(e,!a.$interactive)},a,{children:r(Pn,Object.assign({weight:i.$selected?"semibold":"regular",$variant:n},i,{children:e.format("D")}))}))},`day-${t}`)}))}),h.map(((e,t)=>r(Rn,{children:r(Gt.XSmall,Object.assign({weight:"semibold"},{children:x(e).format("ddd")}))},`week-day-${t}`))),r(Vn,{children:h.map(((t,n)=>{const a=t.format(g),i=d&&(d[a]?d[a]:[Xn]);return r(Zn,{children:i&&i.map((t=>{const{id:n,startTime:i,endTime:o,clickable:s=!0,styleAttributes:l}=t,{color:d,styleType:c="default",backgroundColor:h,backgroundColor2:g}=l;return r(Nn,Object.assign({$type:"vertical",$variant:"default",$styleType:c,$bgColor:h,$bgColor2:g,$clickable:s,onClick:()=>s&&((e,r)=>{u(e,r)})(a,t)},{children:e(Jn,Object.assign({style:{color:d}},{children:[r("span",{children:k.convertTo12HourFormat(i)}),o&&i&&r("span",{children:"-"}),r("span",{children:k.convertTo12HourFormat(o)})]}))}),n)}))},`wrapper-${n}`)}))},`week-cell-${t.format(g)}`)]})},Gn={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},qn=e=>Object.keys(Gn).reduce(((r,t)=>{const n=Gn[t];return r[t]=`@media screen and (${e}: ${n}px)`,r}),{}),Qn=qn("max-width"),Kn=(qn("min-width"),h.div`
    min-width: 18.5rem;

    [data-id="calendar-header"] {
        ${Qn.mobileL} {
            padding: 0 1.25rem;
        }
    }
`),ea="YYYY-MM-DD",ra=e=>{var{disabledDates:t,onWeekDisplayChange:n,onChange:a,value:s,minDate:d,maxDate:c,slots:u,showNavigationHeader:h=!0,enableSelection:g,onSlotClick:m,currentCalendarDate:b}=e,y=f(e,["disabledDates","onWeekDisplayChange","onChange","value","minDate","maxDate","slots","showNavigationHeader","enableSelection","onSlotClick","currentCalendarDate"]);const[p,F]=i(s),D=o(),v=o(void 0);l((()=>{F(s)}),[s]);const $=e=>{const r=e.format(ea);F(r),a&&a(r)},w=(e,r)=>{m&&m(e,r)},B=e=>{if(n){const r={week:{firstDayOfWeek:e.startOf("week").format(ea),lastDayOfWeek:e.endOf("week").format(ea)},month:e.month()+1,year:e.year()};n(r)}};return r(Kn,Object.assign({},y,{children:r(Cn,Object.assign({ref:D,type:"standalone",dynamicHeight:!0,initialCalendarDate:T.toDayjs(p||b).endOf("week").format(ea),selectedStartDate:p,getLeftArrowDate:e=>e.subtract(1,"week"),getRightArrowDate:e=>e.add(1,"week"),isLeftArrowDisabled:e=>d&&x(e).subtract(1,"week").isBefore(d,"week"),isRightArrowDisabled:e=>c&&x(e).add(1,"week").isAfter(c,"week"),onCalendarDateChange:e=>{v.current&&v.current.isSame(e,"week")||B(e),v.current=e},showNavigationHeader:h,minDate:d,maxDate:c,getMonthHeaderLabel:e=>x(e).endOf("week").format("MMM"),getYearHeaderLabel:e=>x(e).endOf("week").format("YYYY")},{children:({calendarDate:e})=>r(Un,{calendarDate:e,disabledDates:t,selectedDate:p,minDate:d,maxDate:c,onSelect:$,slots:u,enableSelection:g,onSlotClick:w})}))}))};export{ra as TimeSlotWeekView};
//# sourceMappingURL=index.js.map
