import{jsxs as e,jsx as t,Fragment as r}from"react/jsx-runtime";import n,{useMemo as a,useState as i,useRef as o,useImperativeHandle as s,useEffect as l}from"react";import{ChevronDownIcon as c}from"@lifesg/react-icons/chevron-down";import{ChevronLeftIcon as d}from"@lifesg/react-icons/chevron-left";import{ChevronRightIcon as u}from"@lifesg/react-icons/chevron-right";import h,{keyframes as g,css as f}from"styled-components";import{ExternalIcon as p}from"@lifesg/react-icons/external";function m(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r}"function"==typeof SuppressedError&&SuppressedError;var $="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function y(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var b={exports:{}};b.exports=function(){var e=1e3,t=6e4,r=36e5,n="millisecond",a="second",i="minute",o="hour",s="day",l="week",c="month",d="quarter",u="year",h="date",g="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}},$=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},y={s:$,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),a=r%60;return(t<=0?"+":"-")+$(n,2,"0")+":"+$(a,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),a=t.clone().add(n,c),i=r-a<0,o=t.clone().add(n+(i?-1:1),c);return+(-(n+(r-a)/(i?a-o:o-a))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:u,w:l,d:s,D:h,h:o,m:i,s:a,ms:n,Q:d}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",v={};v[b]=m;var D="$isDayjsObject",F=function(e){return e instanceof B||!(!e||!e[D])},x=function e(t,r,n){var a;if(!t)return b;if("string"==typeof t){var i=t.toLowerCase();v[i]&&(a=i),r&&(v[i]=r,a=i);var o=t.split("-");if(!a&&o.length>1)return e(o[0])}else{var s=t.name;v[s]=t,a=s}return!n&&a&&(b=a),a||!n&&b},S=function(e,t){if(F(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new B(r)},w=y;w.l=x,w.i=F,w.w=function(e,t){return S(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var B=function(){function m(e){this.$L=x(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[D]=!0}var $=m.prototype;return $.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(w.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(f);if(n){var a=n[2]-1||0,i=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],a,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],a,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(t)}(e),this.init()},$.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},$.$utils=function(){return w},$.isValid=function(){return!(this.$d.toString()===g)},$.isSame=function(e,t){var r=S(e);return this.startOf(t)<=r&&r<=this.endOf(t)},$.isAfter=function(e,t){return S(e)<this.startOf(t)},$.isBefore=function(e,t){return this.endOf(t)<S(e)},$.$g=function(e,t,r){return w.u(e)?this[t]:this.set(r,e)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(e,t){var r=this,n=!!w.u(t)||t,d=w.p(e),g=function(e,t){var a=w.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?a:a.endOf(s)},f=function(e,t){return w.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},p=this.$W,m=this.$M,$=this.$D,y="set"+(this.$u?"UTC":"");switch(d){case u:return n?g(1,0):g(31,11);case c:return n?g(1,m):g(0,m+1);case l:var b=this.$locale().weekStart||0,v=(p<b?p+7:p)-b;return g(n?$-v:$+(6-v),m);case s:case h:return f(y+"Hours",0);case o:return f(y+"Minutes",1);case i:return f(y+"Seconds",2);case a:return f(y+"Milliseconds",3);default:return this.clone()}},$.endOf=function(e){return this.startOf(e,!1)},$.$set=function(e,t){var r,l=w.p(e),d="set"+(this.$u?"UTC":""),g=(r={},r[s]=d+"Date",r[h]=d+"Date",r[c]=d+"Month",r[u]=d+"FullYear",r[o]=d+"Hours",r[i]=d+"Minutes",r[a]=d+"Seconds",r[n]=d+"Milliseconds",r)[l],f=l===s?this.$D+(t-this.$W):t;if(l===c||l===u){var p=this.clone().set(h,1);p.$d[g](f),p.init(),this.$d=p.set(h,Math.min(this.$D,p.daysInMonth())).$d}else g&&this.$d[g](f);return this.init(),this},$.set=function(e,t){return this.clone().$set(e,t)},$.get=function(e){return this[w.p(e)]()},$.add=function(n,d){var h,g=this;n=Number(n);var f=w.p(d),p=function(e){var t=S(g);return w.w(t.date(t.date()+Math.round(e*n)),g)};if(f===c)return this.set(c,this.$M+n);if(f===u)return this.set(u,this.$y+n);if(f===s)return p(1);if(f===l)return p(7);var m=(h={},h[i]=t,h[o]=r,h[a]=e,h)[f]||1,$=this.$d.getTime()+n*m;return w.w($,this)},$.subtract=function(e,t){return this.add(-1*e,t)},$.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||g;var n=e||"YYYY-MM-DDTHH:mm:ssZ",a=w.z(this),i=this.$H,o=this.$m,s=this.$M,l=r.weekdays,c=r.months,d=r.meridiem,u=function(e,r,a,i){return e&&(e[r]||e(t,n))||a[r].slice(0,i)},h=function(e){return w.s(i%12||12,e,"0")},f=d||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(p,(function(e,n){return n||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return w.s(t.$y,4,"0");case"M":return s+1;case"MM":return w.s(s+1,2,"0");case"MMM":return u(r.monthsShort,s,c,3);case"MMMM":return u(c,s);case"D":return t.$D;case"DD":return w.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return u(r.weekdaysMin,t.$W,l,2);case"ddd":return u(r.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(i);case"HH":return w.s(i,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return f(i,o,!0);case"A":return f(i,o,!1);case"m":return String(o);case"mm":return w.s(o,2,"0");case"s":return String(t.$s);case"ss":return w.s(t.$s,2,"0");case"SSS":return w.s(t.$ms,3,"0");case"Z":return a}return null}(e)||a.replace(":","")}))},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(n,h,g){var f,p=this,m=w.p(h),$=S(n),y=($.utcOffset()-this.utcOffset())*t,b=this-$,v=function(){return w.m(p,$)};switch(m){case u:f=v()/12;break;case c:f=v();break;case d:f=v()/3;break;case l:f=(b-y)/6048e5;break;case s:f=(b-y)/864e5;break;case o:f=b/r;break;case i:f=b/t;break;case a:f=b/e;break;default:f=b}return g?f:w.a(f)},$.daysInMonth=function(){return this.endOf(c).$D},$.$locale=function(){return v[this.$L]},$.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=x(e,t,!0);return n&&(r.$L=n),r},$.clone=function(){return w.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},m}(),k=B.prototype;return S.prototype=k,[["$ms",n],["$s",a],["$m",i],["$H",o],["$W",s],["$M",c],["$y",u],["$D",h]].forEach((function(e){k[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),S.extend=function(e,t){return e.$i||(e(t,B,S),e.$i=!0),S},S.locale=x,S.isDayjs=F,S.unix=function(e){return S(1e3*e)},S.en=v[b],S.Ls=v,S.p={},S}();var v=y(b.exports),D={exports:{}};D.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,n=/\d\d?/,a=/\d*[^-_:/,()\s\d]+/,i={},o=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),r=60*t[1]+(+t[2]||0);return 0===r?0:"+"===t[0]?-r:r}(e)}],c=function(e){var t=i[e];return t&&(t.indexOf?t:t.s.concat(t.f))},d=function(e,t){var r,n=i.meridiem;if(n){for(var a=1;a<=24;a+=1)if(e.indexOf(n(a,0,t))>-1){r=a>12;break}}else r=e===(t?"pm":"PM");return r},u={A:[a,function(e){this.afternoon=d(e,!1)}],a:[a,function(e){this.afternoon=d(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[r,s("day")],Do:[a,function(e){var t=i.ordinal,r=e.match(/\d+/);if(this.day=r[0],t)for(var n=1;n<=31;n+=1)t(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[r,s("month")],MMM:[a,function(e){var t=c("months"),r=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],MMMM:[a,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[r,function(e){this.year=o(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(r){var n,a;n=r,a=i&&i.formats;for(var o=(r=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,r,n){var i=n&&n.toUpperCase();return r||a[n]||e[n]||a[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,r){return t||r.slice(1)}))}))).match(t),s=o.length,l=0;l<s;l+=1){var c=o[l],d=u[c],h=d&&d[0],g=d&&d[1];o[l]=g?{regex:h,parser:g}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},r=0,n=0;r<s;r+=1){var a=o[r];if("string"==typeof a)n+=a.length;else{var i=a.regex,l=a.parser,c=e.slice(n),d=i.exec(c)[0];l.call(t,d),e=e.replace(d,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var r=e.hours;t?r<12&&(e.hours+=12):12===r&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,r){r.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(o=e.parseTwoDigitYear);var n=t.prototype,a=n.parse;n.parse=function(e){var t=e.date,n=e.utc,o=e.args;this.$u=n;var s=o[1];if("string"==typeof s){var l=!0===o[2],c=!0===o[3],d=l||c,u=o[2];c&&(u=o[2]),i=this.$locale(),!l&&u&&(i=r.Ls[u]),this.$d=function(e,t,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var n=h(t)(e),a=n.year,i=n.month,o=n.day,s=n.hours,l=n.minutes,c=n.seconds,d=n.milliseconds,u=n.zone,g=new Date,f=o||(a||i?1:g.getDate()),p=a||g.getFullYear(),m=0;a&&!i||(m=i>0?i-1:g.getMonth());var $=s||0,y=l||0,b=c||0,v=d||0;return u?new Date(Date.UTC(p,m,f,$,y,b,v+60*u.offset*1e3)):r?new Date(Date.UTC(p,m,f,$,y,b,v)):new Date(p,m,f,$,y,b,v)}catch(e){return new Date("")}}(t,s,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),d&&t!=this.format(s)&&(this.$d=new Date("")),i={}}else if(s instanceof Array)for(var g=s.length,f=1;f<=g;f+=1){o[1]=s[f-1];var p=r.apply(this,o);if(p.isValid()){this.$d=p.$d,this.$L=p.$L,this.init();break}f===g&&(this.$d=new Date(""))}else a.call(this,e)}}}();var F,x,S=y(D.exports),w={exports:{}},B=y(w.exports=(F={year:0,month:1,day:2,hour:3,minute:4,second:5},x={},function(e,t,r){var n,a=function(e,t,r){void 0===r&&(r={});var n=new Date(e),a=function(e,t){void 0===t&&(t={});var r=t.timeZoneName||"short",n=e+"|"+r,a=x[n];return a||(a=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:r}),x[n]=a),a}(t,r);return a.formatToParts(n)},i=function(e,t){for(var n=a(e,t),i=[],o=0;o<n.length;o+=1){var s=n[o],l=s.type,c=s.value,d=F[l];d>=0&&(i[d]=parseInt(c,10))}var u=i[3],h=24===u?0:u,g=i[0]+"-"+i[1]+"-"+i[2]+" "+h+":"+i[4]+":"+i[5]+":000",f=+e;return(r.utc(g).valueOf()-(f-=f%1e3))/6e4},o=t.prototype;o.tz=function(e,t){void 0===e&&(e=n);var a=this.utcOffset(),i=this.toDate(),o=i.toLocaleString("en-US",{timeZone:e}),s=Math.round((i-new Date(o))/1e3/60),l=r(o,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-s,!0);if(t){var c=l.utcOffset();l=l.add(a-c,"minute")}return l.$x.$timezone=e,l},o.offsetName=function(e){var t=this.$x.$timezone||r.tz.guess(),n=a(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=o.startOf;o.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var n=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,e,t).tz(this.$x.$timezone,!0)},r.tz=function(e,t,a){var o=a&&t,s=a||t||n,l=i(+r(),s);if("string"!=typeof e)return r(e).tz(s);var c=function(e,t,r){var n=e-60*t*1e3,a=i(n,r);if(t===a)return[n,t];var o=i(n-=60*(a-t)*1e3,r);return a===o?[n,a]:[e-60*Math.min(a,o)*1e3,Math.max(a,o)]}(r.utc(e,o).valueOf(),l,s),d=c[0],u=c[1],h=r(d).utcOffset(u);return h.$x.$timezone=s,h},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function(e){n=e}})),k={exports:{}};k.exports=function(e,t,r){t.prototype.isBetween=function(e,t,n,a){var i=r(e),o=r(t),s="("===(a=a||"()")[0],l=")"===a[1];return(s?this.isAfter(i,n):!this.isBefore(i,n))&&(l?this.isBefore(o,n):!this.isAfter(o,n))||(s?this.isBefore(i,n):!this.isAfter(i,n))&&(l?this.isAfter(o,n):!this.isBefore(o,n))}};var H=y(k.exports),A={exports:{}};A.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var E=y(A.exports),C={exports:{}};C.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var O,M=y(C.exports);v.extend(H),v.extend(E),v.extend(M),v.extend(S),v.extend(B),function(e){e.generateDays=e=>{const t=e.startOf("month"),r=v(t).startOf("week");return L(r).map((e=>Y(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Y(t)},e.generateMonths=e=>{const t=[];for(let r=0;r<12;r++){const n=e.month(r);t.push(v(n))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),r=10*Math.floor(t/10),n=e.year(r),a=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)a.push(n.add(e,"year"));return a},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+v(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=v(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,r,n="day")=>!t&&!r||(t&&r?e.isBetween(t,r,n,"[]"):t?e.isSameOrAfter(t,n):e.isSameOrBefore(r,n)),e.isPreviousMonthWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"month"),r,void 0,"month"),e.isPreviousYearWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"year"),r,void 0,"year"),e.isPreviousDecadeWithinRange=(t,r)=>{const{beginDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).subtract(1,"year"),r,void 0,"year")},e.isNextMonthWithinRange=(t,r)=>e.isWithinRange(t.add(1,"month"),void 0,r,"month"),e.isNextYearWithinRange=(t,r)=>e.isWithinRange(t.add(1,"year"),void 0,r,"year"),e.isNextDecadeWithinRange=(t,r)=>{const{endDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).add(1,"year"),void 0,r,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,r,n,a)=>{const i=e.isWithinRange(t,n?v(n):void 0,a?v(a):void 0),o=r&&r.includes(t.format("YYYY-MM-DD"));return!i||!!o}}(O||(O={}));const L=e=>{const t=[e];for(let r=1;r<6;r++){const n=e.add(r,"week");t.push(n)}return t},Y=e=>{const t=[];for(let r=0;r<7;r++){const n=e.add(r,"day");t.push(n)}return t},T=[1,3,5,7,8,10,12],z=[4,6,9,11];var N,j,_,W;!function(e){e.clampDay=(t,r,n)=>{const a=parseInt(t),i=parseInt(r),o=parseInt(n);return 0==a?"1":T.includes(i)?Math.min(a,31).toString():z.includes(i)?Math.min(a,30).toString():2===i?e.isLeapYear(o)?Math.min(a,29).toString():Math.min(a,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,r="HH:mm")=>{const n=v(e,r);return v(t,r).diff(n,"minute")},e.toDayjs=e=>e?v(e):v(),e.addMinutesToTime=(e,t,r="HH:mm")=>v(e,r).add(t,"minutes").format(r)}(N||(N={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:r,minDate:n,maxDate:a}=t;return!!(r&&r.length&&r.includes(e))||(!(!n||!v(e).isBefore(n,"day"))||!(!a||!v(e).isAfter(a,"day")))},e.sanitizeInput=e=>{if(e){if(v(e).isValid())return e}return""}}(j||(j={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(_||(_={})),function(e){e.transformWithSpaces=(e,t)=>{const r="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const r=Math.floor(t/9);return e.length>=2*r||1===e.split(" ").length&&e.length>r},e.truncateOneLine=(e,t,r,n,a=8)=>{let i=0;t>r&&(i=Math.floor((t-r)/a));const o=n+i;if(o<e.length){const t=Math.floor(o/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.getTextWidth=(t,r)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=r;return n.measureText(t).width},e.maskValue=(e,r)=>{if(!e)return e;const{maskRange:n,unmaskRange:a,maskChar:i="•",maskRegex:o,maskTransformer:s}=r;if(s)return s(e);if(o)return e.replace(o,i);if(n){const{startIndex:r,endIndex:a}=t(n[0],n[1]);return e.substring(0,r)+i.repeat(e.substring(r,a+1).length)+e.substring(a+1)}if(a){const{startIndex:r,endIndex:n}=t(a[0],a[1]);return i.repeat(e.substring(0,r).length)+e.substring(r,n+1)+i.repeat(e.substring(n+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(W||(W={}));var I=Array.isArray,P="object"==typeof $&&$&&$.Object===Object&&$,R="object"==typeof self&&self&&self.Object===Object&&self,V=P||R||Function("return this")(),Z=V.Symbol,X=Z,U=Object.prototype,G=U.hasOwnProperty,J=U.toString,q=X?X.toStringTag:void 0;var Q=function(e){var t=G.call(e,q),r=e[q];try{e[q]=void 0;var n=!0}catch(e){}var a=J.call(e);return n&&(t?e[q]=r:delete e[q]),a},K=Object.prototype.toString;var ee=Q,te=function(e){return K.call(e)},re=Z?Z.toStringTag:void 0;var ne=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":re&&re in Object(e)?ee(e):te(e)};var ae=ne,ie=function(e){return null!=e&&"object"==typeof e};var oe=function(e){return"symbol"==typeof e||ie(e)&&"[object Symbol]"==ae(e)},se=I,le=oe,ce=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,de=/^\w*$/;var ue=function(e,t){if(se(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!le(e))||(de.test(e)||!ce.test(e)||null!=t&&e in Object(t))};var he=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},ge=ne,fe=he;var pe,me=function(e){if(!fe(e))return!1;var t=ge(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},$e=V["__core-js_shared__"],ye=(pe=/[^.]+$/.exec($e&&$e.keys&&$e.keys.IE_PROTO||""))?"Symbol(src)_1."+pe:"";var be=function(e){return!!ye&&ye in e},ve=Function.prototype.toString;var De=me,Fe=be,xe=he,Se=function(e){if(null!=e){try{return ve.call(e)}catch(e){}try{return e+""}catch(e){}}return""},we=/^\[object .+?Constructor\]$/,Be=Function.prototype,ke=Object.prototype,He=Be.toString,Ae=ke.hasOwnProperty,Ee=RegExp("^"+He.call(Ae).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Ce=function(e){return!(!xe(e)||Fe(e))&&(De(e)?Ee:we).test(Se(e))},Oe=function(e,t){return null==e?void 0:e[t]};var Me=function(e,t){var r=Oe(e,t);return Ce(r)?r:void 0},Le=Me(Object,"create"),Ye=Le;var Te=function(){this.__data__=Ye?Ye(null):{},this.size=0};var ze=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Ne=Le,je=Object.prototype.hasOwnProperty;var _e=function(e){var t=this.__data__;if(Ne){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return je.call(t,e)?t[e]:void 0},We=Le,Ie=Object.prototype.hasOwnProperty;var Pe=Le;var Re=Te,Ve=ze,Ze=_e,Xe=function(e){var t=this.__data__;return We?void 0!==t[e]:Ie.call(t,e)},Ue=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=Pe&&void 0===t?"__lodash_hash_undefined__":t,this};function Ge(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Ge.prototype.clear=Re,Ge.prototype.delete=Ve,Ge.prototype.get=Ze,Ge.prototype.has=Xe,Ge.prototype.set=Ue;var Je=Ge;var qe=function(){this.__data__=[],this.size=0};var Qe=function(e,t){return e===t||e!=e&&t!=t};var Ke=function(e,t){for(var r=e.length;r--;)if(Qe(e[r][0],t))return r;return-1},et=Ke,tt=Array.prototype.splice;var rt=Ke;var nt=Ke;var at=Ke;var it=qe,ot=function(e){var t=this.__data__,r=et(t,e);return!(r<0)&&(r==t.length-1?t.pop():tt.call(t,r,1),--this.size,!0)},st=function(e){var t=this.__data__,r=rt(t,e);return r<0?void 0:t[r][1]},lt=function(e){return nt(this.__data__,e)>-1},ct=function(e,t){var r=this.__data__,n=at(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function dt(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}dt.prototype.clear=it,dt.prototype.delete=ot,dt.prototype.get=st,dt.prototype.has=lt,dt.prototype.set=ct;var ut=dt,ht=Me(V,"Map"),gt=Je,ft=ut,pt=ht;var mt=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var $t=function(e,t){var r=e.__data__;return mt(t)?r["string"==typeof t?"string":"hash"]:r.map},yt=$t;var bt=$t;var vt=$t;var Dt=$t;var Ft=function(){this.size=0,this.__data__={hash:new gt,map:new(pt||ft),string:new gt}},xt=function(e){var t=yt(this,e).delete(e);return this.size-=t?1:0,t},St=function(e){return bt(this,e).get(e)},wt=function(e){return vt(this,e).has(e)},Bt=function(e,t){var r=Dt(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};function kt(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}kt.prototype.clear=Ft,kt.prototype.delete=xt,kt.prototype.get=St,kt.prototype.has=wt,kt.prototype.set=Bt;var Ht=kt;function At(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,a=t?t.apply(this,n):n[0],i=r.cache;if(i.has(a))return i.get(a);var o=e.apply(this,n);return r.cache=i.set(a,o)||i,o};return r.cache=new(At.Cache||Ht),r}At.Cache=Ht;var Et=At;var Ct=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ot=/\\(\\)?/g,Mt=function(e){var t=Et(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Ct,(function(e,r,n,a){t.push(n?a.replace(Ot,"$1"):r||e)})),t}));var Lt=function(e,t){for(var r=-1,n=null==e?0:e.length,a=Array(n);++r<n;)a[r]=t(e[r],r,e);return a},Yt=I,Tt=oe,zt=Z?Z.prototype:void 0,Nt=zt?zt.toString:void 0;var jt=function e(t){if("string"==typeof t)return t;if(Yt(t))return Lt(t,e)+"";if(Tt(t))return Nt?Nt.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},_t=jt;var Wt=I,It=ue,Pt=Mt,Rt=function(e){return null==e?"":_t(e)};var Vt=oe;var Zt=function(e,t){return Wt(e)?e:It(e,t)?[e]:Pt(Rt(e))},Xt=function(e){if("string"==typeof e||Vt(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var Ut=function(e,t){for(var r=0,n=(t=Zt(t,e)).length;null!=e&&r<n;)e=e[Xt(t[r++])];return r&&r==n?e:void 0};var Gt=y((function(e,t,r){var n=null==e?void 0:Ut(e,t);return void 0===n?r:n}));const Jt=(e,t,r)=>t?Gt(r,t)||Gt(e,t):r||e,qt=(e,t)=>{const r=t||e.defaultValue;return Gt(e.collections,r)};var Qt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Qt||(Qt={}));const Kt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},er=e=>t=>{const r=t.theme,n=qt(Kt,r[Qt.colorScheme]);return r.options&&r.options.color?Jt(n,e,r.options.color):Jt(n,e)},tr={Brand:{1:er("Brand.1"),2:er("Brand.2"),3:er("Brand.3"),4:er("Brand.4"),5:er("Brand.5"),6:er("Brand.6")},Primary:er("Primary"),PrimaryDark:er("PrimaryDark"),Secondary:er("Secondary"),Accent:{Light:{1:er("Accent.Light.1"),2:er("Accent.Light.2"),3:er("Accent.Light.3"),4:er("Accent.Light.4"),5:er("Accent.Light.5"),6:er("Accent.Light.6")},Dark:{1:er("Accent.Dark.1"),2:er("Accent.Dark.2"),3:er("Accent.Dark.3")}},Neutral:{1:er("Neutral.1"),2:er("Neutral.2"),3:er("Neutral.3"),4:er("Neutral.4"),5:er("Neutral.5"),6:er("Neutral.6"),7:er("Neutral.7"),8:er("Neutral.8")},Validation:{Green:{Text:er("Validation.Green.Text"),Icon:er("Validation.Green.Icon"),Border:er("Validation.Green.Border"),Background:er("Validation.Green.Background")},Orange:{Text:er("Validation.Orange.Text"),Icon:er("Validation.Orange.Icon"),Border:er("Validation.Orange.Border"),Background:er("Validation.Orange.Background"),Badge:er("Validation.Orange.Badge")},Red:{Text:er("Validation.Red.Text"),Icon:er("Validation.Red.Icon"),Border:er("Validation.Red.Border"),Background:er("Validation.Red.Background")},Blue:{Text:er("Validation.Blue.Text"),Icon:er("Validation.Blue.Icon"),Border:er("Validation.Blue.Border"),Background:er("Validation.Blue.Background")}},Shadow:{Accent:er("Shadow.Accent"),Red:er("Shadow.Red"),Elevation:er("Shadow.Elevation")}},rr={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},nr=e=>Object.keys(rr).reduce(((t,r)=>{const n=rr[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),ar=nr("max-width"),ir=(nr("min-width"),h.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),or=g`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,sr=h.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||tr.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${or} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,lr=h(sr)`
    animation-delay: -0.45s;
`,cr=h(sr)`
    animation-delay: -0.3s;
`,dr=h(sr)`
    animation-delay: -0.15s;
`,ur={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},hr={collections:{base:{D1:{fontFamily:ur.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:ur.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:ur.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:ur.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:ur.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:ur.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:ur.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:ur.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:ur.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:ur.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:ur.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:ur.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:ur.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:ur.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},gr=e=>t=>{const r=t.theme,n=qt(hr,r[Qt.textStyleScheme]);return r.options&&r.options.textStyle?Jt(n,e,r.options.textStyle):Jt(n,e)},fr={D1:{fontFamily:gr("D1.fontFamily"),fontSize:gr("D1.fontSize"),fontWeight:gr("D1.fontWeight"),lineHeight:gr("D1.lineHeight"),letterSpacing:gr("D1.letterSpacing")},D2:{fontFamily:gr("D2.fontFamily"),fontSize:gr("D2.fontSize"),fontWeight:gr("D2.fontWeight"),lineHeight:gr("D2.lineHeight"),letterSpacing:gr("D2.letterSpacing")},D3:{fontFamily:gr("D3.fontFamily"),fontSize:gr("D3.fontSize"),fontWeight:gr("D3.fontWeight"),lineHeight:gr("D3.lineHeight"),letterSpacing:gr("D3.letterSpacing")},D4:{fontFamily:gr("D4.fontFamily"),fontSize:gr("D4.fontSize"),fontWeight:gr("D4.fontWeight"),lineHeight:gr("D4.lineHeight"),letterSpacing:gr("D4.letterSpacing")},DBody:{fontFamily:gr("DBody.fontFamily"),fontSize:gr("DBody.fontSize"),fontWeight:gr("DBody.fontWeight"),lineHeight:gr("DBody.lineHeight"),letterSpacing:gr("DBody.letterSpacing")},H1:{fontFamily:gr("H1.fontFamily"),fontSize:gr("H1.fontSize"),fontWeight:gr("H1.fontWeight"),lineHeight:gr("H1.lineHeight"),letterSpacing:gr("H1.letterSpacing")},H2:{fontFamily:gr("H2.fontFamily"),fontSize:gr("H2.fontSize"),fontWeight:gr("H2.fontWeight"),lineHeight:gr("H2.lineHeight"),letterSpacing:gr("H2.letterSpacing")},H3:{fontFamily:gr("H3.fontFamily"),fontSize:gr("H3.fontSize"),fontWeight:gr("H3.fontWeight"),lineHeight:gr("H3.lineHeight"),letterSpacing:gr("H3.letterSpacing")},H4:{fontFamily:gr("H4.fontFamily"),fontSize:gr("H4.fontSize"),fontWeight:gr("H4.fontWeight"),lineHeight:gr("H4.lineHeight"),letterSpacing:gr("H4.letterSpacing")},H5:{fontFamily:gr("H5.fontFamily"),fontSize:gr("H5.fontSize"),fontWeight:gr("H5.fontWeight"),lineHeight:gr("H5.lineHeight"),letterSpacing:gr("H5.letterSpacing")},H6:{fontFamily:gr("H6.fontFamily"),fontSize:gr("H6.fontSize"),fontWeight:gr("H6.fontWeight"),lineHeight:gr("H6.lineHeight"),letterSpacing:gr("H6.letterSpacing")},Body:{fontFamily:gr("Body.fontFamily"),fontSize:gr("Body.fontSize"),fontWeight:gr("Body.fontWeight"),lineHeight:gr("Body.lineHeight"),letterSpacing:gr("Body.letterSpacing")},BodySmall:{fontFamily:gr("BodySmall.fontFamily"),fontSize:gr("BodySmall.fontSize"),fontWeight:gr("BodySmall.fontWeight"),lineHeight:gr("BodySmall.lineHeight"),letterSpacing:gr("BodySmall.letterSpacing")},XSmall:{fontFamily:gr("XSmall.fontFamily"),fontSize:gr("XSmall.fontSize"),fontWeight:gr("XSmall.fontWeight"),lineHeight:gr("XSmall.lineHeight"),letterSpacing:gr("XSmall.letterSpacing")}},pr=e=>{switch(e){case 700:case"bold":return ur.Bold;case 600:case"semibold":return ur.Semibold;case 300:case"light":return ur.Light;case 400:case"regular":return ur.Regular;default:return""}},mr=(e,t)=>r=>{var n;const a=fr[e].fontFamily(r),i=fr[e].fontWeight(r);return Object.values(ur).includes(a)?f`
                font-family: ${pr(t)||pr(i)||a};
                font-weight: normal !important;
            `:f`
            font-family: ${a};
            font-weight: ${null!==(n=$r(t)||i)&&void 0!==n?n:"normal"};
        `},$r=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},yr=e=>{if(e>0)return f`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},br=mr,vr=(e,t,r=!1)=>n=>{const a=fr[e],i=a.fontSize(n);return f`
            ${mr(e,t)}
            font-size: ${i}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${a.letterSpacing(n)||0}rem !important;
            ${f`
                margin-bottom: ${i*(r?1.05:0)}rem;
            `}
        `},Dr=(e=!1,t=!1,r=void 0)=>t?f`
            display: block;
            ${yr(r)}
        `:e?f`
            display: inline;
        `:f`
            display: block;
            ${yr(r)}
        `;var Fr;!function(e){e.D1=h.h1`
        ${e=>f`
                ${vr("D1",e.weight,e.paragraph)}
                color: ${tr.Neutral[1]};
                ${Dr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=h.h1`
        ${e=>f`
                ${vr("D2",e.weight,e.paragraph)}
                color: ${tr.Neutral[1]};
                ${Dr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=h.h1`
        ${e=>f`
                ${vr("D3",e.weight,e.paragraph)}
                color: ${tr.Neutral[1]};
                ${Dr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=h.h1`
        ${e=>f`
                ${vr("D4",e.weight,e.paragraph)}
                color: ${tr.Neutral[1]};
                ${Dr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=h.h1`
        ${e=>f`
                ${vr("DBody",e.weight,e.paragraph)}
                color: ${tr.Neutral[1]};
                ${Dr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=h.h1`
        ${e=>f`
                ${vr("H1",e.weight,e.paragraph)}
                color: ${tr.Neutral[1]};
                ${Dr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=h.h2`
        ${e=>f`
                ${vr("H2",e.weight,e.paragraph)}
                color: ${tr.Neutral[1]};
                ${Dr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=h.h3`
        ${e=>f`
                ${vr("H3",e.weight,e.paragraph)}
                color: ${tr.Neutral[1]};
                ${Dr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=h.h4`
        ${e=>f`
                ${vr("H4",e.weight,e.paragraph)}
                color: ${tr.Neutral[1]};
                ${Dr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=h.h5`
        ${e=>f`
                ${vr("H5",e.weight,e.paragraph)}
                color: ${tr.Neutral[1]};
                ${Dr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=h.h6`
        ${e=>f`
                ${vr("H6",e.weight,e.paragraph)}
                color: ${tr.Neutral[1]};
                ${Dr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=h.p`
        ${e=>f`
                ${vr("Body",e.weight,e.paragraph)}
                color: ${tr.Neutral[1]};
                ${Dr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=h.p`
        ${e=>f`
                ${vr("BodySmall",e.weight,e.paragraph)}
                color: ${tr.Neutral[1]};
                ${Dr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=h.span`
        ${e=>f`
                ${vr("XSmall",e.weight,e.paragraph)}
                color: ${tr.Neutral[1]};
                ${Dr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>wr(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>wr(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Fr||(Fr={}));const xr=h.a`
    ${e=>f`
            ${vr(e.textStyle,e.weight)}
            color: ${tr.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${tr.Secondary};

                svg {
                    color: ${tr.Secondary};
                }
            }
        `}
`,Sr=h(p)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,wr=r=>{var{external:n=!1,children:a}=r,i=m(r,["external","children"]);return e(xr,Object.assign({},i,{children:[a,n&&t(Sr,{})]}))};var Br;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Br||(Br={}));const kr={collections:{base:{InputBoxShadow:f`
        inset 0 0 4px 0px ${tr.Shadow.Accent}
    `,InputErrorBoxShadow:f`
        inset 0 0 4px 0px ${tr.Shadow.Red}
    `,ElevationBoxShadow:f`
      0px 2px 8px ${tr.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:f`
        inset 0 0 3px 0px ${tr.Shadow.Accent}
    `,InputErrorBoxShadow:f`
        inset 0 0 3px 0px ${tr.Shadow.Red}
    `,ElevationBoxShadow:f`
      0px 2px 8px ${tr.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},Hr=e=>t=>{var r;const n=t.theme,a=qt(kr,n[Qt.designTokenScheme]);return(null===(r=n.options)||void 0===r?void 0:r.designToken)?Jt(a,e,n.options.designToken):Jt(a,e)},Ar={InputBoxShadow:Hr("InputBoxShadow"),InputErrorBoxShadow:Hr("InputErrorBoxShadow"),ElevationBoxShadow:Hr("ElevationBoxShadow"),Table:{Header:Hr("Table.Header"),Cell:{Primary:Hr("Table.Cell.Primary"),Secondary:Hr("Table.Cell.Secondary"),Selected:Hr("Table.Cell.Selected"),Hover:Hr("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:Hr("Button.Danger.BackgroundColor"),Hover:Hr("Button.Danger.Hover"),Primary:Hr("Button.Danger.Primary"),Border:Hr("Button.Danger.Border")}}},Er=h.button`
    padding: 0.5rem 1rem;
    min-width: 4rem;
    border-radius: 4px;
    transition: all 200ms ease;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (hover: hover) {
        &:hover {
            box-shadow: 1px 1px 4px 2px rgba(0, 0, 0, 0.2);
        }
    }

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return f`
                    background-color: ${tr.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?Ar.Button.Danger.Border:tr.Primary};

                    color: ${e.$buttonIsDanger?Ar.Button.Danger.Primary:tr.Primary};
                `;case"light":return f`
                    background-color: ${tr.Neutral[8]};
                    border: 1px solid ${tr.Neutral[5]};

                    color: ${e.$buttonIsDanger?Ar.Button.Danger.Primary:tr.Primary};
                `;case"disabled":return f`
                    background-color: ${tr.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${tr.Neutral[3]};
                `;case"link":return f`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?Ar.Button.Danger.Primary:tr.Primary};
                    :hover,
                    :active,
                    :focus {
                        color: ${e.$buttonIsDanger?Ar.Button.Danger.Hover:tr.Secondary};
                    }
                `;default:return f`
                    background-color: ${e.$buttonIsDanger?Ar.Button.Danger.BackgroundColor:tr.Primary};
                    border: 1px solid transparent;

                    ${ar.mobileL} {
                        width: 100%;
                    }

                    color: ${tr.Neutral[8]};
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?f`
                    height: 2.5rem;
                    ${vr("H5","semibold")}

                    ${ar.mobileS} {
                        height: auto;
                    }
                `:f`
                    height: 3rem;
                    ${vr("H4","semibold")}

                    ${ar.mobileS} {
                        height: auto;
                    }
                `}
`,Cr=h((({color:r,className:n,size:a=18})=>e(ir,Object.assign({className:n,$size:a,$color:r},{children:[t(sr,{id:"inner1",$size:a-2,$borderWidth:2,$color:r}),t(lr,{id:"inner2",$size:a-2,$borderWidth:2,$color:r}),t(cr,{id:"inner3",$size:a-2,$borderWidth:2,$color:r}),t(dr,{id:"inner4",$size:a-2,$borderWidth:2,$color:r})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t=e.$buttonIsDanger?Ar.Button.Danger.Primary:tr.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=tr.Neutral[3](e);break;default:t=tr.Neutral[8](e)}return f`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,Or={Default:n.forwardRef(((r,n)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:s="default",danger:l=!1}=r,c=m(r,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return e(Er,Object.assign({ref:n,"data-testid":c["data-testid"]||"button",disabled:i},d,c,{children:[o&&t(Cr,Object.assign({},d)),t("span",{children:a})]}))})),Small:n.forwardRef(((r,n)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:s="default",danger:l=!1}=r,c=m(r,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return e(Er,Object.assign({ref:n,"data-testid":c["data-testid"]||"button",disabled:i},d,c,{children:[o&&t(Cr,Object.assign({},d,{size:16})),t("span",{children:a})]}))}))},Mr=h.button`
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

        ${({$highlight:e})=>e&&f`
                background-color: ${tr.Neutral[7]};
            `}
    }
`,Lr=n.forwardRef(((e,r)=>{var{children:n,focusHighlight:a=!0,focusOutline:i="none",type:o="button"}=e,s=m(e,["children","focusHighlight","focusOutline","type"]);return t(Mr,Object.assign({ref:r,$outline:i,$highlight:a,type:o},s,{children:n}))})),Yr=f`
    color: ${tr.Neutral[3]};
    height: 1rem;
    width: 1rem;
`,Tr=h(d)`
    ${Yr}
`,zr=h(u)`
    ${Yr}
`,Nr=h(c)`
    ${Yr}
    transition: transform 250ms ease-in-out;
    margin-left: 0.5rem;
`,jr=h.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
`,_r=h.div`
    display: flex;
    flex: 1;
    position: relative;
`,Wr=h.div`
    isolation: isolate;
    width: 100%;
`,Ir=h.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${tr.Neutral[8]};

    ${e=>{if(!e.$visible)return f`
                display: none;
            `}}
`,Pr=h.div`
    display: flex;
    justify-content: space-between;
    margin: 0 0 0.5rem 0;
`,Rr=h.div`
    display: flex;
`,Vr=h.button`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;

    ${e=>!1===e.$visible?f`
                display: none;
            `:e.$expanded?f`
                ${Nr} {
                    transform: rotate(180deg);
                }
            `:void 0}
`,Zr=h.p`
    ${vr("H5","regular")}
`,Xr=h.div`
    display: flex;
`,Ur=h(Lr)`
    margin: auto 0;
    padding: 0.75rem;

    :disabled {
        cursor: not-allowed;
    }
`,Gr=h.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;
`,Jr=h(Or.Small)`
    flex: 1;
`,qr=h.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 2.5rem);
    align-content: center;
    justify-content: center;

    ${e=>{switch(e.$type){case"standalone":return f`
                    gap: 0.5rem 2.5rem;
                `;case"input":return f`
                    gap: 0.5rem 1rem;
                `}}}
`,Qr=h.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: default;
    border-radius: 5rem;
    margin: 0 0.5rem;

    ${e=>e.$interactive?f`
                cursor: pointer;
                &:hover {
                    box-shadow: 0px 0px 4px 1px ${tr.Shadow.Accent};
                    border: 1px solid ${tr.Accent.Light[1]};
                }
            `:e.$disabledDisplay?f`
                cursor: not-allowed;
            `:void 0}

    ${e=>{switch(e.$variant){case"current-month":return f`
                    background-color: ${tr.Accent.Light[6](e)};
                `;case"selected-month":return f`
                    background-color: ${tr.Accent.Light[5](e)};
                    border: 1px solid ${tr.Primary(e)};
                `}}}
`,Kr=h(Fr.H5)`
    ${e=>{if(e.$disabledDisplay)return f`
                color: ${tr.Neutral[4]};
            `;switch(e.$variant){case"current-month":return f`
                    color: ${tr.Neutral[3](e)};
                `;case"selected-month":return f`
                    ${vr("H5","semibold")}
                    color: ${tr.Primary(e)};
                `}}}
`,en=({calendarDate:e,currentFocus:r,selectedStartDate:n,selectedEndDate:i,viewCalendarDate:o,type:s,isNewSelection:l,minDate:c,maxDate:d,allowDisabledSelection:u,onMonthSelect:h})=>{const g=a((()=>O.generateMonths(v(e))),[e]),f=e=>{const t="start"===r&&i&&e.isAfter(i,"month")&&l,a="end"===r&&n&&e.isBefore(n,"month")&&l;return t||a},p=e=>{const t=e.format("MMMM"),r=(n=e,!O.isWithinRange(n,c?v(c):void 0,d?v(d):void 0,"month"));var n;const a=o.isSame(e,"month")?"selected-month":v().isSame(e,"month")?"current-month":"default";return{disabledDisplay:r||f(e),interactive:!r||u,month:t,variant:a}};return g.length?t(qr,Object.assign({$type:s},{children:g.map((e=>{const{disabledDisplay:r,interactive:n,variant:a,month:i}=p(e);return t(Qr,Object.assign({$variant:a,$disabledDisplay:r,$interactive:n,onClick:()=>((e,t)=>{t||h(e)})(e,!n)},{children:t(Kr,Object.assign({weight:"regular",$variant:a,$disabledDisplay:r},{children:i}))}),i)}))})):null},tn=h.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-content: center;
    grid-template-columns: repeat(3, 1fr);

    ${e=>{switch(e.$type){case"standalone":return f`
                    grid-template-rows: repeat(4, 4rem);
                    gap: 0.5rem 2.5rem;
                `;case"input":return f`
                    grid-template-rows: repeat(4, 4.375rem);
                    gap: 0.5rem 1rem;
                `}}}
`,rn=h.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: default;
    border-radius: 0.5rem;
    margin: 0 0.5rem;

    ${e=>e.$interactive?f`
                cursor: pointer;
                &:hover {
                    box-shadow: 0px 0px 4px 1px ${tr.Shadow.Accent};
                    border: 1px solid ${tr.Accent.Light[1]};
                }
            `:e.$disabledDisplay?f`
                cursor: not-allowed;
            `:void 0}

    ${e=>{switch(e.$variant){case"current-year":return f`
                    background: ${tr.Accent.Light[6](e)};
                `;case"selected-year":return f`
                    background: ${tr.Accent.Light[5](e)};
                    border: 1px solid ${tr.Primary(e)};
                `}}};
`,nn=h(Fr.H5)`
    ${e=>{if(e.$disabledDisplay)return f`
                color: ${tr.Neutral[4]};
            `;switch(e.$variant){case"current-year":return f`
                    color: ${tr.Neutral[3](e)};
                `;case"selected-year":return f`
                    ${vr("H5","semibold")}
                    color: ${tr.Primary(e)};
                `;case"other-decade":return f`
                    color: ${tr.Neutral[4](e)};
                `}}}
`,an=({calendarDate:e,currentFocus:r,selectedStartDate:n,selectedEndDate:i,viewCalendarDate:o,type:s,isNewSelection:l,minDate:c,maxDate:d,allowDisabledSelection:u,onYearSelect:h})=>{const g=a((()=>O.generateDecadeOfYears(v(e))),[e]),f=e=>{const t="start"===r&&i&&e.isAfter(i,"year")&&l,a="end"===r&&n&&e.isBefore(n,"year")&&l;return t||a},p=e=>{const t=[0,11].includes(g.indexOf(e)),r=e.year(),n=(a=e,!O.isWithinRange(a,c?v(c):void 0,d?v(d):void 0,"year"));var a;const i=t?"other-decade":o.isSame(e,"year")?"selected-year":v().isSame(e,"year")?"current-year":"default";return{disabledDisplay:n||f(e),interactive:!n||u,year:r,variant:i}};return g.length?t(tn,Object.assign({$type:s},{children:g.map((e=>{const{disabledDisplay:r,interactive:n,variant:a,year:i}=p(e);return t(rn,Object.assign({$variant:a,$disabledDisplay:r,$interactive:n,onClick:()=>((e,t)=>{t||h(e)})(e,!n)},{children:t(nn,Object.assign({weight:"regular",$variant:a,$disabledDisplay:r,$interactive:n},{children:i}))}),i)}))})):null},on=n.forwardRef(((n,a)=>{var{children:c,initialCalendarDate:d,type:u,minDate:h,maxDate:g,currentFocus:f,selectedStartDate:p,selectedEndDate:$,selectWithinRange:y,dynamicHeight:b=!1,allowDisabledSelection:D,onCalendarDateChange:F,withButton:x,doneButtonDisabled:S,onDismiss:w,showNavigationHeader:B=!0,getLeftArrowDate:k,getRightArrowDate:H,isLeftArrowDisabled:A,isRightArrowDisabled:E,getMonthHeaderLabel:C,getYearHeaderLabel:M}=n,L=m(n,["children","initialCalendarDate","type","minDate","maxDate","currentFocus","selectedStartDate","selectedEndDate","selectWithinRange","dynamicHeight","allowDisabledSelection","onCalendarDateChange","withButton","doneButtonDisabled","onDismiss","showNavigationHeader","getLeftArrowDate","getRightArrowDate","isLeftArrowDisabled","isRightArrowDisabled","getMonthHeaderLabel","getYearHeaderLabel"]);const[Y,T]=i(N.toDayjs(d)),[z,j]=i(N.toDayjs(d)),[_,W]=i("default"),I=o(null),P=o(null),R=o();s(a,(()=>({defaultView(){W("default")},resetView(){const e=N.toDayjs(d);T(e),j(e),W("default")},setCalendarDate(e){const t=N.toDayjs(e);T(t),j(t)}}))),l((()=>{const e=N.toDayjs(d);T(e),j(e)}),[d]),l((()=>{q(z)}),[z]);const V=()=>{"month-options"!==_?(W("month-options"),R.current.focus()):(W("default"),T(z))},Z=()=>{"default"!==_?(W("default"),T(z)):W("year-options")},X=()=>{R.current.focus();const e=k?k(Y):Y.subtract(1,"month");switch(_){case"default":j(e),T(e);break;case"month-options":T((e=>e.subtract(1,"year")));break;case"year-options":T((e=>e.subtract(10,"year")))}},U=()=>{R.current.focus();const e=H?H(Y):Y.add(1,"month");switch(_){case"default":j(e),T(e);break;case"month-options":T((e=>e.add(1,"year")));break;case"year-options":T((e=>e.add(10,"year")))}},G=e=>{T(e),j(e),x||W("default")},J=()=>{const e=N.toDayjs(d);T(e),j(e),"default"===_?Q("reset"):W("default")},q=e=>{F&&F(e)},Q=e=>{w&&w(e)},K=()=>{if(!h||D)return!1;const e=v(h);return"month-options"===_?!O.isPreviousYearWithinRange(Y,e):"year-options"===_?!O.isPreviousDecadeWithinRange(Y,e):A?A(Y):!O.isPreviousMonthWithinRange(Y,e)},ee=()=>{if(!g||D)return!1;const e=v(g);return"month-options"===_?!O.isNextYearWithinRange(Y,e):"year-options"===_?!O.isNextDecadeWithinRange(Y,e):E?E(Y):!O.isNextMonthWithinRange(Y,e)},te=()=>{if("year-options"===_){const{beginDecade:e,endDecade:t}=O.getStartEndDecade(Y);return`${e} to ${t}`}return M?M(Y):Y.format("YYYY")},re=()=>{const n=C?C(Y):Y.format("MMM");return e(r,{children:[e(Vr,Object.assign({type:"button",tabIndex:-1,$expanded:"month-options"===_,$visible:"default"===_,id:"month-dropdown",onClick:V},{children:[t(Zr,{children:n}),t(Nr,{})]})),e(Vr,Object.assign({type:"button",tabIndex:-1,$expanded:"default"!==_,id:"year-dropdown",onClick:Z},{children:[t(Zr,{children:te()}),t(Nr,{})]}))]})},ne=()=>{switch(_){case"month-options":return t(en,{type:u,calendarDate:Y,currentFocus:f,minDate:h,maxDate:g,selectedStartDate:p,selectedEndDate:$,viewCalendarDate:z,isNewSelection:y,onMonthSelect:G,allowDisabledSelection:D});case"year-options":return t(an,{type:u,calendarDate:Y,currentFocus:f,minDate:h,maxDate:g,selectedStartDate:p,selectedEndDate:$,viewCalendarDate:z,isNewSelection:y,onYearSelect:G,allowDisabledSelection:D});default:return null}};return e(jr,Object.assign({ref:R,"data-id":"calendar-container","data-testid":"calendar-container"},L,{children:[B&&e(Pr,Object.assign({"data-id":"calendar-header","data-testid":"calendar-header"},{children:[t(Rr,{children:re()}),e(Xr,{children:[t(Ur,Object.assign({"data-testid":"left-arrow-btn",disabled:K(),focusHighlight:!1,tabIndex:-1,onClick:X},{children:t(Tr,{})})),t(Ur,Object.assign({"data-testid":"right-arrow-btn",disabled:ee(),focusHighlight:!1,tabIndex:-1,onClick:U},{children:t(zr,{})}))]})]})),t(_r,{children:(()=>{const n="function"==typeof c?c({calendarDate:z,currentView:_}):c;return e(r,b?{children:["default"===_&&n,ne()]}:{children:[t(Wr,{children:n}),t(Ir,Object.assign({$visible:"default"!==_},{children:ne()}))]})})()}),(()=>{if(!x)return;const r=!!("default"===_)&&S;return e(Gr,{children:[t(Jr,Object.assign({ref:P,"data-testid":"cancel-button",styleType:"light",type:"button",onClick:J},{children:"Cancel"})),t(Jr,Object.assign({"data-testid":"done-button",ref:I,type:"button",onClick:()=>{r||(T(z),"default"===_?Q("confirmed"):W("default"))},disabled:r},{children:"Done"}))]})})()]}))}));h.div`
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
`;const sn=h.div`
    grid-column: 1 / -1;
    display: flex;
`,ln=h.div`
    display: flex;
    position: relative;
    height: 2.5rem;
    align-items: center;
    justify-content: center;
    flex: 1;
`,cn=h.div`
    position: absolute;
    width: 50%;
    height: 100%;

    ${e=>{switch(e.$position){case"left":return f`
                    left: 0;
                `;case"right":return f`
                    right: 0;
                `}}}
`,dn=h.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    cursor: default;
    position: absolute;
`,un=h(Fr.H5)`
    ${e=>{const{$disabledDisplay:t,$selected:r,$variant:n}=e;if(t&&r)return f`
                ${vr("H5","semibold")};
                color: ${tr.Accent.Light[2]};
            `;if(t)return f`
                color: ${tr.Neutral[4]};
            `;if(r)return f`
                ${vr("H5","semibold")};
                color: ${tr.Primary};
            `;switch(n){case"other-month":return f`
                    color: ${tr.Neutral[4]};
                `;case"today":return f`
                    color: ${tr.Neutral[3]};
                `;case"default":return f`
                    color: ${tr.Neutral[1]};
                `}}}
`;h(cn)`
    ${e=>{const{$selected:t}=e;if(t)return f`
                border-top: 1px solid ${tr.Accent.Light[4]};
                border-bottom: 1px solid ${tr.Accent.Light[4]};
                background-color: ${tr.Accent.Light[5]};
            `}}

    ${e=>{const{$hovered:t,$overlap:r}=e;return t?f`
                border-top: 1px dashed ${tr.Accent.Light[4]};
                border-bottom: 1px dashed ${tr.Accent.Light[4]};
                background-color: ${tr.Accent.Light[6]};
            `:r?f`
                background-color: ${tr.Accent.Light[4]};
            `:void 0}}
`;const hn=h(dn)`
    ${e=>{const{$hovered:t,$selected:r}=e;return r?f`
                background: ${tr.Accent.Light[5]};
                border: 1px solid ${tr.Primary};
            `:t?f`
                box-shadow: 0px 0px 4px 1px ${tr.Shadow.Accent};
                border: 1px solid ${tr.Accent.Light[1]};
                background-color: ${tr.Neutral[8]};
            `:void 0}}

    ${e=>{const{$interactive:t,$disabledDisplay:r}=e;return t?f`
                cursor: pointer;
                :hover {
                    box-shadow: 0px 0px 4px 1px ${tr.Shadow.Accent};
                    border: 1px solid ${tr.Accent.Light[1]};
                    background-color: ${tr.Neutral[8]};
                }
            `:r?f`
                cursor: not-allowed;
            `:void 0}}

    ${e=>{const{$disabledDisplay:t,$overlap:r,$variant:n}=e;return r?f`
                border: 1px solid ${tr.Accent.Light[1]};
                background: ${tr.Accent.Light[4]};

                :hover {
                    background: ${tr.Accent.Light[4]};
                }
            `:t?f`
                color: ${tr.Neutral[4]};
            `:"today"===n?f`
                    background: ${tr.Accent.Light[5]};
                `:void 0}}
`,gn=e=>{let t=tr.Neutral[8],r="1px solid transparent";switch(e.$type){case"current":t=tr.Accent.Light[5];break;case"hover-dash":t=tr.Accent.Light[6],r=`1px dashed ${tr.Accent.Light[4](e)}`;break;case"hover-current":t=tr.Neutral[8],r=`1px solid ${tr.Primary(e)}`;break;case"selected":t=tr.Accent.Light[5],r=`1px solid ${tr.Accent.Light[4](e)}`;break;case"selected-outline":t=tr.Accent.Light[5],r=`1px solid ${tr.Primary(e)}`;break;case"overlap":t=tr.Accent.Light[4],r=`1px solid ${tr.Accent.Light[4](e)}`;break;case"overlap-outline":t=tr.Accent.Light[4],r=`1px solid ${tr.Primary(e)}`}return{color:t,border:r}};h.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 2.5rem;
`;const fn=h.div`
    position: absolute;
    height: 2.5rem;
    width: 50%;

    ${e=>{if(!e.$type)return;const{color:t,border:r}=gn(e);return f`
            background-color: ${t};
            background-clip: content-box;
            border-top: ${r};
            border-bottom: ${r};
        `}}
`;h(fn)`
    left: 0;
`,h(fn)`
    right: 0;
`;const pn=h.div`
    z-index: -1;
    box-shadow: 0 0 4px 1px ${tr.Shadow.Accent};
    position: absolute;
    height: 100%;
    width: 50%;
    display: none;

    ${e=>e.$shadow&&"display: block;"}
`;h(pn)`
    left: 0;
`,h(pn)`
    right: 0;
`;const mn=h.div`
    position: absolute;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;

    border: 1px solid transparent;
    border-radius: 50%;

    ${e=>{if(e.$type){const{color:t,border:r}=gn(e);return f`
                background-color: ${t};
                background-clip: content-box;
                border: ${r};
            `}}}

    ${e=>e.$shadow&&f`
            &:before {
                content: "";
                border-radius: 50%;
                position: absolute;
                height: 100%;
                width: 100%;
            }
        `}
`;h(mn)`
    right: calc(50% - 1.25rem);
    clip-path: inset(-3px 1.25rem -3px -3px);
    &:before {
        box-shadow: -1px 0 4px 1px ${tr.Shadow.Accent};
    }
`,h(mn)`
    left: calc(50% - 1.25rem);
    clip-path: inset(-3px -3px -3px 1.25rem);
    &:before {
        box-shadow: 1px 0 4px 1px ${tr.Shadow.Accent};
    }
`,h(Fr.H5)`
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

    ${e=>{const{$disabled:t,$type:r}=e;if(t)return"selected"===r?f`
                    ${vr("H5","semibold")};
                    color: ${tr.Accent.Light[2]};
                `:f`
                color: ${tr.Neutral[4]};
            `;switch(r){case"selected":return f`
                    ${vr("H5","semibold")};
                    color: ${tr.Primary};
                `;case"current":return f`
                    color: ${tr.Neutral[3]};
                `;case"unavailable":return f`
                    color: ${tr.Neutral[4]};
                `;default:return f`
                    color: ${tr.Neutral[1]};
                `}}}
`,v.extend(H);const $n=1.25,yn=e=>"minified"===e?12:40;h.div`
    position: relative;
    display: flex;
    align-items: center;
`,h(Lr)`
    z-index: 2;
    position: absolute;
    bottom: ${({$variant:e})=>"default"===e?"0.25rem":"0rem"};
    background-color: ${tr.Neutral[8]};
    box-shadow: 0px 2px 8px rgba(104, 104, 104, 0.5);
    border-radius: 50%;
    padding: 0.5rem;
    width: 2rem;
    height: 2rem;

    ${e=>"right"===e.$direction?f`
                  right: 0;
              `:f`
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
    color: ${tr.Primary};
`,h(d)`
    font-size: 1rem;
    color: ${tr.Primary};
`,h.div`
    overflow: hidden;
    flex-grow: 1;
    position: relative;
    height: ${({$variant:e})=>`${20+yn(e)}px`};
`,h.div`
    position: relative;
    white-space: nowrap;
    height: ${$n}rem;
`,h.div`
    display: flex;
    white-space: nowrap;
`,h.div`
    display: inline-block;
    width: ${({$variant:e})=>("minified"===e?12:40)+"px"};
    position: relative;
    border-left: 1px solid ${tr.Neutral[2]};
    ${e=>{let t=0;switch(e.$variant){case"default":t=e.$isLongMarker?$n:.625;break;case"minified":t=e.$isLongMarker?$n:0;break;default:t=0}return f`
            height: ${t}rem;
        `}}
`,h(Fr.XSmall)`
    color: ${tr.Neutral[2]};
    position: absolute;
    bottom: 10%;
    left: 10%;
`;const bn=h.div`
    ${e=>"vertical"===e.$type?f`
                display: flex;
                flex-grow: 1;
                align-items: center;
                justify-content: center;
                width: 100%;
                margin: 1px 0px;
            `:f`
                position: absolute;
                height: ${yn(e.$variant)}px;
                width: ${e.$width}px;
                left: ${e.$left}px;
            `}
    background-color: ${({$bgColor:e})=>e};
    cursor: ${({$clickable:e})=>e?"pointer":"default"};

    ${e=>"stripes"===e.$styleType&&f`
            background: repeating-linear-gradient(
                135deg,
                ${e.$bgColor2||tr.Neutral[5]} 0px,
                ${e.$bgColor2||tr.Neutral[5]} 10px,
                ${e.$bgColor} 10px,
                ${e.$bgColor} 20px
            );
        `}
`;h.div`
    position: absolute;
    top: ${$n}rem;
    height: ${({$variant:e})=>`${yn(e)}px`};
    z-index: 1;
    border-right: 1px solid ${tr.Neutral[2]};
`,h(Fr.XSmall)`
    color: ${e=>e.$color||tr.Neutral[2](e)};
    position: absolute;
    bottom: 0;
    padding-left: 4px;
    padding-bottom: 4px;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;const vn=h(un)`
    ${e=>{const{$variant:t}=e;if("default"===t)return f`
                    ${br("H5","semibold")}
                    color: ${tr.Neutral[3]};
                `}}
`,Dn=h.div`
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    user-select: none;
    margin-bottom: 0.188rem;
`,Fn=h.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
`,xn=h.div`
    grid-column: 1 / -1;
    display: flex;
    min-height: 7.625rem;
`,Sn=h.div`
    ${vr("XSmall","semibold")}
    margin: 1rem 0rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 2.5rem;
    color: ${tr.Neutral[1]};
    span {
        display: block;
    }
`,wn=h.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 1px;
`;v.extend(H);const Bn={id:"1",startTime:"",endTime:"",clickable:!1,styleAttributes:{styleType:"stripes",backgroundColor:"#ECEFEF",backgroundColor2:"#E0E4E5"}},kn=({calendarDate:r,disabledDates:n,selectedDate:i,onSelect:o,minDate:s,maxDate:l,slots:c,enableSelection:d=!0,onSlotClick:u})=>{const h=a((()=>O.generateDaysForCurrentWeek(r)),[r]),g="YYYY-MM-DD",f=e=>{const t=e.format(g),r=(e=>{const t=O.isWithinRange(e,s?v(s):void 0,l?v(l):void 0),r=n&&n.includes(e.format(g));return!t||r})(e),a={},o={};return r&&(a.$disabledDisplay=!0,o.$disabledDisplay=!0),a.$interactive=d&&!r,[i].includes(t)&&(a.$selected=!0,o.$selected=!0),{styleCircleProps:a,styleLabelProps:o}};return e(Fn,{children:[t(sn,{children:h.map(((e,r)=>{const n="default",{styleCircleProps:a,styleLabelProps:i}=f(e);return t(ln,{children:t(hn,Object.assign({$variant:n,onClick:()=>((e,t)=>{!t&&d&&o(e)})(e,!a.$interactive)},a,{children:t(vn,Object.assign({weight:i.$selected?"semibold":"regular",$variant:n},i,{children:e.format("D")}))}))},`day-${r}`)}))}),h.map(((e,r)=>t(Dn,{children:t(Fr.XSmall,Object.assign({weight:"semibold"},{children:v(e).format("ddd")}))},`week-day-${r}`))),t(xn,{children:h.map(((r,n)=>{const a=r.format(g),i=c&&(c[a]?c[a]:[Bn]);return t(wn,{children:i&&i.map((r=>{const{id:n,startTime:i,endTime:o,clickable:s=!0,styleAttributes:l}=r,{color:c,styleType:d="default",backgroundColor:h,backgroundColor2:g}=l;return t(bn,Object.assign({$type:"vertical",$variant:"default",$styleType:d,$bgColor:h,$bgColor2:g,$clickable:s,onClick:()=>s&&((e,t)=>{u(e,t)})(a,r)},{children:e(Sn,Object.assign({style:{color:c}},{children:[t("span",{children:O.convertTo12HourFormat(i)}),o&&i&&t("span",{children:"-"}),t("span",{children:O.convertTo12HourFormat(o)})]}))}),n)}))},`wrapper-${n}`)}))},`week-cell-${r.format(g)}`)]})},Hn=h.div`
    min-width: 18.5rem;

    [data-id="calendar-header"] {
        ${ar.mobileL} {
            padding: 0 1.25rem;
        }
    }
`,An="YYYY-MM-DD",En=e=>{var{disabledDates:r,onWeekDisplayChange:n,onChange:a,value:s,minDate:c,maxDate:d,slots:u,showNavigationHeader:h=!0,enableSelection:g,onSlotClick:f,currentCalendarDate:p}=e,$=m(e,["disabledDates","onWeekDisplayChange","onChange","value","minDate","maxDate","slots","showNavigationHeader","enableSelection","onSlotClick","currentCalendarDate"]);const[y,b]=i(s),D=o(),F=o(void 0);l((()=>{b(s)}),[s]);const x=e=>{const t=e.format(An);b(t),a&&a(t)},S=(e,t)=>{f&&f(e,t)},w=e=>{if(n){const t={week:{firstDayOfWeek:e.startOf("week").format(An),lastDayOfWeek:e.endOf("week").format(An)},month:e.month()+1,year:e.year()};n(t)}};return t(Hn,Object.assign({},$,{children:t(on,Object.assign({ref:D,type:"standalone",dynamicHeight:!0,initialCalendarDate:N.toDayjs(y||p).endOf("week").format(An),selectedStartDate:y,getLeftArrowDate:e=>e.subtract(1,"week"),getRightArrowDate:e=>e.add(1,"week"),isLeftArrowDisabled:e=>c&&v(e).subtract(1,"week").isBefore(c,"week"),isRightArrowDisabled:e=>d&&v(e).add(1,"week").isAfter(d,"week"),onCalendarDateChange:e=>{F.current&&F.current.isSame(e,"week")||w(e),F.current=e},showNavigationHeader:h,minDate:c,maxDate:d,getMonthHeaderLabel:e=>v(e).endOf("week").format("MMM"),getYearHeaderLabel:e=>v(e).endOf("week").format("YYYY")},{children:({calendarDate:e})=>t(kn,{calendarDate:e,disabledDates:r,selectedDate:y,minDate:c,maxDate:d,onSelect:x,slots:u,enableSelection:g,onSlotClick:S})}))}))};export{En as TimeSlotWeekView};
//# sourceMappingURL=index.js.map
