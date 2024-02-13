import{jsxs as e,jsx as t,Fragment as r}from"react/jsx-runtime";import n,{useMemo as i,useState as a,useRef as o,useImperativeHandle as l,useEffect as s}from"react";import{ChevronDownIcon as c}from"@lifesg/react-icons/chevron-down";import{ChevronLeftIcon as d}from"@lifesg/react-icons/chevron-left";import{ChevronRightIcon as u}from"@lifesg/react-icons/chevron-right";import h,{keyframes as f,css as g}from"styled-components";import{ExternalIcon as p}from"@lifesg/react-icons/external";function m(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}"function"==typeof SuppressedError&&SuppressedError;var y="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function $(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var b={exports:{}};b.exports=function(){var e=1e3,t=6e4,r=36e5,n="millisecond",i="second",a="minute",o="hour",l="day",s="week",c="month",d="quarter",u="year",h="date",f="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}},y=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},$={s:y,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),i=r%60;return(t<=0?"+":"-")+y(n,2,"0")+":"+y(i,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),i=t.clone().add(n,c),a=r-i<0,o=t.clone().add(n+(a?-1:1),c);return+(-(n+(r-i)/(a?i-o:o-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:u,w:s,d:l,D:h,h:o,m:a,s:i,ms:n,Q:d}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",v={};v[b]=m;var D=function(e){return e instanceof w},S=function e(t,r,n){var i;if(!t)return b;if("string"==typeof t){var a=t.toLowerCase();v[a]&&(i=a),r&&(v[a]=r,i=a);var o=t.split("-");if(!i&&o.length>1)return e(o[0])}else{var l=t.name;v[l]=t,i=l}return!n&&i&&(b=i),i||!n&&b},x=function(e,t){if(D(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new w(r)},F=$;F.l=S,F.i=D,F.w=function(e,t){return x(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var w=function(){function m(e){this.$L=S(e.locale,null,!0),this.parse(e)}var y=m.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(F.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(g);if(n){var i=n[2]-1||0,a=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return F},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(e,t){var r=x(e);return this.startOf(t)<=r&&r<=this.endOf(t)},y.isAfter=function(e,t){return x(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<x(e)},y.$g=function(e,t,r){return F.u(e)?this[t]:this.set(r,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var r=this,n=!!F.u(t)||t,d=F.p(e),f=function(e,t){var i=F.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?i:i.endOf(l)},g=function(e,t){return F.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},p=this.$W,m=this.$M,y=this.$D,$="set"+(this.$u?"UTC":"");switch(d){case u:return n?f(1,0):f(31,11);case c:return n?f(1,m):f(0,m+1);case s:var b=this.$locale().weekStart||0,v=(p<b?p+7:p)-b;return f(n?y-v:y+(6-v),m);case l:case h:return g($+"Hours",0);case o:return g($+"Minutes",1);case a:return g($+"Seconds",2);case i:return g($+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var r,s=F.p(e),d="set"+(this.$u?"UTC":""),f=(r={},r[l]=d+"Date",r[h]=d+"Date",r[c]=d+"Month",r[u]=d+"FullYear",r[o]=d+"Hours",r[a]=d+"Minutes",r[i]=d+"Seconds",r[n]=d+"Milliseconds",r)[s],g=s===l?this.$D+(t-this.$W):t;if(s===c||s===u){var p=this.clone().set(h,1);p.$d[f](g),p.init(),this.$d=p.set(h,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f](g);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[F.p(e)]()},y.add=function(n,d){var h,f=this;n=Number(n);var g=F.p(d),p=function(e){var t=x(f);return F.w(t.date(t.date()+Math.round(e*n)),f)};if(g===c)return this.set(c,this.$M+n);if(g===u)return this.set(u,this.$y+n);if(g===l)return p(1);if(g===s)return p(7);var m=(h={},h[a]=t,h[o]=r,h[i]=e,h)[g]||1,y=this.$d.getTime()+n*m;return F.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||f;var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=F.z(this),a=this.$H,o=this.$m,l=this.$M,s=r.weekdays,c=r.months,d=function(e,r,i,a){return e&&(e[r]||e(t,n))||i[r].slice(0,a)},u=function(e){return F.s(a%12||12,e,"0")},h=r.meridiem||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n},g={YY:String(this.$y).slice(-2),YYYY:this.$y,M:l+1,MM:F.s(l+1,2,"0"),MMM:d(r.monthsShort,l,c,3),MMMM:d(c,l),D:this.$D,DD:F.s(this.$D,2,"0"),d:String(this.$W),dd:d(r.weekdaysMin,this.$W,s,2),ddd:d(r.weekdaysShort,this.$W,s,3),dddd:s[this.$W],H:String(a),HH:F.s(a,2,"0"),h:u(1),hh:u(2),a:h(a,o,!0),A:h(a,o,!1),m:String(o),mm:F.s(o,2,"0"),s:String(this.$s),ss:F.s(this.$s,2,"0"),SSS:F.s(this.$ms,3,"0"),Z:i};return n.replace(p,(function(e,t){return t||g[e]||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(n,h,f){var g,p=F.p(h),m=x(n),y=(m.utcOffset()-this.utcOffset())*t,$=this-m,b=F.m(this,m);return b=(g={},g[u]=b/12,g[c]=b,g[d]=b/3,g[s]=($-y)/6048e5,g[l]=($-y)/864e5,g[o]=$/r,g[a]=$/t,g[i]=$/e,g)[p]||$,f?b:F.a(b)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return v[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=S(e,t,!0);return n&&(r.$L=n),r},y.clone=function(){return F.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),B=w.prototype;return x.prototype=B,[["$ms",n],["$s",i],["$m",a],["$H",o],["$W",l],["$M",c],["$y",u],["$D",h]].forEach((function(e){B[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),x.extend=function(e,t){return e.$i||(e(t,w,x),e.$i=!0),x},x.locale=S,x.isDayjs=D,x.unix=function(e){return x(1e3*e)},x.en=v[b],x.Ls=v,x.p={},x}();var v=$(b.exports),D={exports:{}};D.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,n=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,a={},o=function(e){return(e=+e)+(e>68?1900:2e3)},l=function(e){return function(t){this[e]=+t}},s=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),r=60*t[1]+(+t[2]||0);return 0===r?0:"+"===t[0]?-r:r}(e)}],c=function(e){var t=a[e];return t&&(t.indexOf?t:t.s.concat(t.f))},d=function(e,t){var r,n=a.meridiem;if(n){for(var i=1;i<=24;i+=1)if(e.indexOf(n(i,0,t))>-1){r=i>12;break}}else r=e===(t?"pm":"PM");return r},u={A:[i,function(e){this.afternoon=d(e,!1)}],a:[i,function(e){this.afternoon=d(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,l("seconds")],ss:[n,l("seconds")],m:[n,l("minutes")],mm:[n,l("minutes")],H:[n,l("hours")],h:[n,l("hours")],HH:[n,l("hours")],hh:[n,l("hours")],D:[n,l("day")],DD:[r,l("day")],Do:[i,function(e){var t=a.ordinal,r=e.match(/\d+/);if(this.day=r[0],t)for(var n=1;n<=31;n+=1)t(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,l("month")],MM:[r,l("month")],MMM:[i,function(e){var t=c("months"),r=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],MMMM:[i,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,l("year")],YY:[r,function(e){this.year=o(e)}],YYYY:[/\d{4}/,l("year")],Z:s,ZZ:s};function h(r){var n,i;n=r,i=a&&a.formats;for(var o=(r=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,r,n){var a=n&&n.toUpperCase();return r||i[n]||e[n]||i[a].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,r){return t||r.slice(1)}))}))).match(t),l=o.length,s=0;s<l;s+=1){var c=o[s],d=u[c],h=d&&d[0],f=d&&d[1];o[s]=f?{regex:h,parser:f}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},r=0,n=0;r<l;r+=1){var i=o[r];if("string"==typeof i)n+=i.length;else{var a=i.regex,s=i.parser,c=e.slice(n),d=a.exec(c)[0];s.call(t,d),e=e.replace(d,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var r=e.hours;t?r<12&&(e.hours+=12):12===r&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,r){r.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(o=e.parseTwoDigitYear);var n=t.prototype,i=n.parse;n.parse=function(e){var t=e.date,n=e.utc,o=e.args;this.$u=n;var l=o[1];if("string"==typeof l){var s=!0===o[2],c=!0===o[3],d=s||c,u=o[2];c&&(u=o[2]),a=this.$locale(),!s&&u&&(a=r.Ls[u]),this.$d=function(e,t,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var n=h(t)(e),i=n.year,a=n.month,o=n.day,l=n.hours,s=n.minutes,c=n.seconds,d=n.milliseconds,u=n.zone,f=new Date,g=o||(i||a?1:f.getDate()),p=i||f.getFullYear(),m=0;i&&!a||(m=a>0?a-1:f.getMonth());var y=l||0,$=s||0,b=c||0,v=d||0;return u?new Date(Date.UTC(p,m,g,y,$,b,v+60*u.offset*1e3)):r?new Date(Date.UTC(p,m,g,y,$,b,v)):new Date(p,m,g,y,$,b,v)}catch(e){return new Date("")}}(t,l,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),d&&t!=this.format(l)&&(this.$d=new Date("")),a={}}else if(l instanceof Array)for(var f=l.length,g=1;g<=f;g+=1){o[1]=l[g-1];var p=r.apply(this,o);if(p.isValid()){this.$d=p.$d,this.$L=p.$L,this.init();break}g===f&&(this.$d=new Date(""))}else i.call(this,e)}}}();var S,x,F=$(D.exports),w={exports:{}},B=$(w.exports=(S={year:0,month:1,day:2,hour:3,minute:4,second:5},x={},function(e,t,r){var n,i=function(e,t,r){void 0===r&&(r={});var n=new Date(e),i=function(e,t){void 0===t&&(t={});var r=t.timeZoneName||"short",n=e+"|"+r,i=x[n];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:r}),x[n]=i),i}(t,r);return i.formatToParts(n)},a=function(e,t){for(var n=i(e,t),a=[],o=0;o<n.length;o+=1){var l=n[o],s=l.type,c=l.value,d=S[s];d>=0&&(a[d]=parseInt(c,10))}var u=a[3],h=24===u?0:u,f=a[0]+"-"+a[1]+"-"+a[2]+" "+h+":"+a[4]+":"+a[5]+":000",g=+e;return(r.utc(f).valueOf()-(g-=g%1e3))/6e4},o=t.prototype;o.tz=function(e,t){void 0===e&&(e=n);var i=this.utcOffset(),a=this.toDate(),o=a.toLocaleString("en-US",{timeZone:e}),l=Math.round((a-new Date(o))/1e3/60),s=r(o).$set("millisecond",this.$ms).utcOffset(15*-Math.round(a.getTimezoneOffset()/15)-l,!0);if(t){var c=s.utcOffset();s=s.add(i-c,"minute")}return s.$x.$timezone=e,s},o.offsetName=function(e){var t=this.$x.$timezone||r.tz.guess(),n=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var l=o.startOf;o.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return l.call(this,e,t);var n=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return l.call(n,e,t).tz(this.$x.$timezone,!0)},r.tz=function(e,t,i){var o=i&&t,l=i||t||n,s=a(+r(),l);if("string"!=typeof e)return r(e).tz(l);var c=function(e,t,r){var n=e-60*t*1e3,i=a(n,r);if(t===i)return[n,t];var o=a(n-=60*(i-t)*1e3,r);return i===o?[n,i]:[e-60*Math.min(i,o)*1e3,Math.max(i,o)]}(r.utc(e,o).valueOf(),s,l),d=c[0],u=c[1],h=r(d).utcOffset(u);return h.$x.$timezone=l,h},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function(e){n=e}})),k={exports:{}};k.exports=function(e,t,r){t.prototype.isBetween=function(e,t,n,i){var a=r(e),o=r(t),l="("===(i=i||"()")[0],s=")"===i[1];return(l?this.isAfter(a,n):!this.isBefore(a,n))&&(s?this.isBefore(o,n):!this.isAfter(o,n))||(l?this.isBefore(a,n):!this.isAfter(a,n))&&(s?this.isAfter(o,n):!this.isBefore(o,n))}};var H=$(k.exports),A={exports:{}};A.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var O=$(A.exports),M={exports:{}};M.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var E,C=$(M.exports);v.extend(H),v.extend(O),v.extend(C),v.extend(F),v.extend(B),function(e){e.generateDays=e=>{const t=e.startOf("month"),r=v(t).startOf("week");return L(r).map((e=>Y(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Y(t)},e.generateMonths=e=>{const t=[];for(let r=0;r<12;r++){const n=e.month(r);t.push(v(n))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),r=10*Math.floor(t/10),n=e.year(r),i=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)i.push(n.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+v(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=v(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,r,n="day")=>!t&&!r||(t&&r?e.isBetween(t,r,n,"[]"):t?e.isSameOrAfter(t,n):e.isSameOrBefore(r,n)),e.isPreviousMonthWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"month"),r,void 0,"month"),e.isPreviousYearWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"year"),r,void 0,"year"),e.isPreviousDecadeWithinRange=(t,r)=>{const{beginDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).subtract(1,"year"),r,void 0,"year")},e.isNextMonthWithinRange=(t,r)=>e.isWithinRange(t.add(1,"month"),void 0,r,"month"),e.isNextYearWithinRange=(t,r)=>e.isWithinRange(t.add(1,"year"),void 0,r,"year"),e.isNextDecadeWithinRange=(t,r)=>{const{endDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).add(1,"year"),void 0,r,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,r,n,i)=>{const a=e.isWithinRange(t,n?v(n):void 0,i?v(i):void 0),o=r&&r.includes(t.format("YYYY-MM-DD"));return!a||!!o}}(E||(E={}));const L=e=>{const t=[e];for(let r=1;r<6;r++){const n=e.add(r,"week");t.push(n)}return t},Y=e=>{const t=[];for(let r=0;r<7;r++){const n=e.add(r,"day");t.push(n)}return t},T=[1,3,5,7,8,10,12],z=[4,6,9,11];var N,_,j,W;!function(e){e.clampDay=(t,r,n)=>{const i=parseInt(t),a=parseInt(r),o=parseInt(n);return 0==i?"1":T.includes(a)?Math.min(i,31).toString():z.includes(a)?Math.min(i,30).toString():2===a?e.isLeapYear(o)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,r="HH:mm")=>{const n=v(e,r);return v(t,r).diff(n,"minute")},e.toDayjs=e=>e?v(e):v(),e.addMinutesToTime=(e,t,r="HH:mm")=>v(e,r).add(t,"minutes").format(r)}(N||(N={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:r,minDate:n,maxDate:i}=t;return!!(r&&r.length&&r.includes(e))||(!(!n||!v(e).isBefore(n,"day"))||!(!i||!v(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(v(e).isValid())return e}return""}}(_||(_={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(j||(j={})),function(e){e.transformWithSpaces=(e,t)=>{const r="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const r=Math.floor(t/9);return e.length>=2*r||1===e.split(" ").length&&e.length>r},e.truncateOneLine=(e,t,r,n,i=8)=>{let a=0;t>r&&(a=Math.floor((t-r)/i));const o=n+a;if(o<e.length){const t=Math.floor(o/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.getTextWidth=(t,r)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=r;return n.measureText(t).width}}(W||(W={}));var I=Array.isArray,P="object"==typeof y&&y&&y.Object===Object&&y,R="object"==typeof self&&self&&self.Object===Object&&self,V=P||R||Function("return this")(),Z=V.Symbol,X=Z,U=Object.prototype,G=U.hasOwnProperty,J=U.toString,q=X?X.toStringTag:void 0;var Q=function(e){var t=G.call(e,q),r=e[q];try{e[q]=void 0;var n=!0}catch(e){}var i=J.call(e);return n&&(t?e[q]=r:delete e[q]),i},K=Object.prototype.toString;var ee=Q,te=function(e){return K.call(e)},re=Z?Z.toStringTag:void 0;var ne=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":re&&re in Object(e)?ee(e):te(e)};var ie=ne,ae=function(e){return null!=e&&"object"==typeof e};var oe=function(e){return"symbol"==typeof e||ae(e)&&"[object Symbol]"==ie(e)},le=I,se=oe,ce=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,de=/^\w*$/;var ue=function(e,t){if(le(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!se(e))||(de.test(e)||!ce.test(e)||null!=t&&e in Object(t))};var he=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},fe=ne,ge=he;var pe,me=function(e){if(!ge(e))return!1;var t=fe(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},ye=V["__core-js_shared__"],$e=(pe=/[^.]+$/.exec(ye&&ye.keys&&ye.keys.IE_PROTO||""))?"Symbol(src)_1."+pe:"";var be=function(e){return!!$e&&$e in e},ve=Function.prototype.toString;var De=me,Se=be,xe=he,Fe=function(e){if(null!=e){try{return ve.call(e)}catch(e){}try{return e+""}catch(e){}}return""},we=/^\[object .+?Constructor\]$/,Be=Function.prototype,ke=Object.prototype,He=Be.toString,Ae=ke.hasOwnProperty,Oe=RegExp("^"+He.call(Ae).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Me=function(e){return!(!xe(e)||Se(e))&&(De(e)?Oe:we).test(Fe(e))},Ee=function(e,t){return null==e?void 0:e[t]};var Ce=function(e,t){var r=Ee(e,t);return Me(r)?r:void 0},Le=Ce(Object,"create"),Ye=Le;var Te=function(){this.__data__=Ye?Ye(null):{},this.size=0};var ze=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Ne=Le,_e=Object.prototype.hasOwnProperty;var je=function(e){var t=this.__data__;if(Ne){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return _e.call(t,e)?t[e]:void 0},We=Le,Ie=Object.prototype.hasOwnProperty;var Pe=Le;var Re=Te,Ve=ze,Ze=je,Xe=function(e){var t=this.__data__;return We?void 0!==t[e]:Ie.call(t,e)},Ue=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=Pe&&void 0===t?"__lodash_hash_undefined__":t,this};function Ge(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Ge.prototype.clear=Re,Ge.prototype.delete=Ve,Ge.prototype.get=Ze,Ge.prototype.has=Xe,Ge.prototype.set=Ue;var Je=Ge;var qe=function(){this.__data__=[],this.size=0};var Qe=function(e,t){return e===t||e!=e&&t!=t};var Ke=function(e,t){for(var r=e.length;r--;)if(Qe(e[r][0],t))return r;return-1},et=Ke,tt=Array.prototype.splice;var rt=Ke;var nt=Ke;var it=Ke;var at=qe,ot=function(e){var t=this.__data__,r=et(t,e);return!(r<0)&&(r==t.length-1?t.pop():tt.call(t,r,1),--this.size,!0)},lt=function(e){var t=this.__data__,r=rt(t,e);return r<0?void 0:t[r][1]},st=function(e){return nt(this.__data__,e)>-1},ct=function(e,t){var r=this.__data__,n=it(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function dt(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}dt.prototype.clear=at,dt.prototype.delete=ot,dt.prototype.get=lt,dt.prototype.has=st,dt.prototype.set=ct;var ut=dt,ht=Ce(V,"Map"),ft=Je,gt=ut,pt=ht;var mt=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var yt=function(e,t){var r=e.__data__;return mt(t)?r["string"==typeof t?"string":"hash"]:r.map},$t=yt;var bt=yt;var vt=yt;var Dt=yt;var St=function(){this.size=0,this.__data__={hash:new ft,map:new(pt||gt),string:new ft}},xt=function(e){var t=$t(this,e).delete(e);return this.size-=t?1:0,t},Ft=function(e){return bt(this,e).get(e)},wt=function(e){return vt(this,e).has(e)},Bt=function(e,t){var r=Dt(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};function kt(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}kt.prototype.clear=St,kt.prototype.delete=xt,kt.prototype.get=Ft,kt.prototype.has=wt,kt.prototype.set=Bt;var Ht=kt;function At(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],a=r.cache;if(a.has(i))return a.get(i);var o=e.apply(this,n);return r.cache=a.set(i,o)||a,o};return r.cache=new(At.Cache||Ht),r}At.Cache=Ht;var Ot=At;var Mt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Et=/\\(\\)?/g,Ct=function(e){var t=Ot(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Mt,(function(e,r,n,i){t.push(n?i.replace(Et,"$1"):r||e)})),t}));var Lt=function(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i},Yt=I,Tt=oe,zt=Z?Z.prototype:void 0,Nt=zt?zt.toString:void 0;var _t=function e(t){if("string"==typeof t)return t;if(Yt(t))return Lt(t,e)+"";if(Tt(t))return Nt?Nt.call(t):"";var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r},jt=_t;var Wt=I,It=ue,Pt=Ct,Rt=function(e){return null==e?"":jt(e)};var Vt=oe;var Zt=function(e,t){return Wt(e)?e:It(e,t)?[e]:Pt(Rt(e))},Xt=function(e){if("string"==typeof e||Vt(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var Ut=function(e,t){for(var r=0,n=(t=Zt(t,e)).length;null!=e&&r<n;)e=e[Xt(t[r++])];return r&&r==n?e:void 0};var Gt=$((function(e,t,r){var n=null==e?void 0:Ut(e,t);return void 0===n?r:n}));const Jt=(e,t,r)=>t?Gt(r,t)||Gt(e,t):r||e,qt=(e,t)=>{const r=t||e.defaultValue;return Gt(e.collections,r)};var Qt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Qt||(Qt={}));const Kt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#8F0E0E",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},er=e=>t=>{const r=t.theme,n=qt(Kt,r[Qt.colorScheme]);return r.options&&r.options.color?Jt(n,e,r.options.color):Jt(n,e)},tr={Brand:{1:er("Brand.1"),2:er("Brand.2"),3:er("Brand.3"),4:er("Brand.4"),5:er("Brand.5"),6:er("Brand.6")},Primary:er("Primary"),PrimaryDark:er("PrimaryDark"),Secondary:er("Secondary"),Accent:{Light:{1:er("Accent.Light.1"),2:er("Accent.Light.2"),3:er("Accent.Light.3"),4:er("Accent.Light.4"),5:er("Accent.Light.5"),6:er("Accent.Light.6")},Dark:{1:er("Accent.Dark.1"),2:er("Accent.Dark.2"),3:er("Accent.Dark.3")}},Neutral:{1:er("Neutral.1"),2:er("Neutral.2"),3:er("Neutral.3"),4:er("Neutral.4"),5:er("Neutral.5"),6:er("Neutral.6"),7:er("Neutral.7"),8:er("Neutral.8")},Validation:{Green:{Text:er("Validation.Green.Text"),Icon:er("Validation.Green.Icon"),Border:er("Validation.Green.Border"),Background:er("Validation.Green.Background")},Orange:{Text:er("Validation.Orange.Text"),Icon:er("Validation.Orange.Icon"),Border:er("Validation.Orange.Border"),Background:er("Validation.Orange.Background"),Badge:er("Validation.Orange.Badge")},Red:{Text:er("Validation.Red.Text"),Icon:er("Validation.Red.Icon"),Border:er("Validation.Red.Border"),Background:er("Validation.Red.Background")},Blue:{Text:er("Validation.Blue.Text"),Icon:er("Validation.Blue.Icon"),Border:er("Validation.Blue.Border"),Background:er("Validation.Blue.Background")}},Shadow:{Accent:er("Shadow.Accent"),Red:er("Shadow.Red"),Elevation:er("Shadow.Elevation")}},rr={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},nr=e=>Object.keys(rr).reduce(((t,r)=>{const n=rr[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),ir=nr("max-width"),ar=(nr("min-width"),h.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),or=f`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,lr=h.div`
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
`,sr=h(lr)`
    animation-delay: -0.45s;
`,cr=h(lr)`
    animation-delay: -0.3s;
`,dr=h(lr)`
    animation-delay: -0.15s;
`,ur={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},hr={collections:{base:{D1:{fontFamily:ur.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:ur.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:ur.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:ur.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:ur.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:ur.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:ur.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:ur.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:ur.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:ur.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:ur.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:ur.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:ur.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:ur.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},fr=e=>t=>{const r=t.theme,n=qt(hr,r[Qt.textStyleScheme]);return r.options&&r.options.textStyle?Jt(n,e,r.options.textStyle):Jt(n,e)},gr={D1:{fontFamily:fr("D1.fontFamily"),fontSize:fr("D1.fontSize"),fontWeight:fr("D1.fontWeight"),lineHeight:fr("D1.lineHeight"),letterSpacing:fr("D1.letterSpacing")},D2:{fontFamily:fr("D2.fontFamily"),fontSize:fr("D2.fontSize"),fontWeight:fr("D2.fontWeight"),lineHeight:fr("D2.lineHeight"),letterSpacing:fr("D2.letterSpacing")},D3:{fontFamily:fr("D3.fontFamily"),fontSize:fr("D3.fontSize"),fontWeight:fr("D3.fontWeight"),lineHeight:fr("D3.lineHeight"),letterSpacing:fr("D3.letterSpacing")},D4:{fontFamily:fr("D4.fontFamily"),fontSize:fr("D4.fontSize"),fontWeight:fr("D4.fontWeight"),lineHeight:fr("D4.lineHeight"),letterSpacing:fr("D4.letterSpacing")},DBody:{fontFamily:fr("DBody.fontFamily"),fontSize:fr("DBody.fontSize"),fontWeight:fr("DBody.fontWeight"),lineHeight:fr("DBody.lineHeight"),letterSpacing:fr("DBody.letterSpacing")},H1:{fontFamily:fr("H1.fontFamily"),fontSize:fr("H1.fontSize"),fontWeight:fr("H1.fontWeight"),lineHeight:fr("H1.lineHeight"),letterSpacing:fr("H1.letterSpacing")},H2:{fontFamily:fr("H2.fontFamily"),fontSize:fr("H2.fontSize"),fontWeight:fr("H2.fontWeight"),lineHeight:fr("H2.lineHeight"),letterSpacing:fr("H2.letterSpacing")},H3:{fontFamily:fr("H3.fontFamily"),fontSize:fr("H3.fontSize"),fontWeight:fr("H3.fontWeight"),lineHeight:fr("H3.lineHeight"),letterSpacing:fr("H3.letterSpacing")},H4:{fontFamily:fr("H4.fontFamily"),fontSize:fr("H4.fontSize"),fontWeight:fr("H4.fontWeight"),lineHeight:fr("H4.lineHeight"),letterSpacing:fr("H4.letterSpacing")},H5:{fontFamily:fr("H5.fontFamily"),fontSize:fr("H5.fontSize"),fontWeight:fr("H5.fontWeight"),lineHeight:fr("H5.lineHeight"),letterSpacing:fr("H5.letterSpacing")},H6:{fontFamily:fr("H6.fontFamily"),fontSize:fr("H6.fontSize"),fontWeight:fr("H6.fontWeight"),lineHeight:fr("H6.lineHeight"),letterSpacing:fr("H6.letterSpacing")},Body:{fontFamily:fr("Body.fontFamily"),fontSize:fr("Body.fontSize"),fontWeight:fr("Body.fontWeight"),lineHeight:fr("Body.lineHeight"),letterSpacing:fr("Body.letterSpacing")},BodySmall:{fontFamily:fr("BodySmall.fontFamily"),fontSize:fr("BodySmall.fontSize"),fontWeight:fr("BodySmall.fontWeight"),lineHeight:fr("BodySmall.lineHeight"),letterSpacing:fr("BodySmall.letterSpacing")},XSmall:{fontFamily:fr("XSmall.fontFamily"),fontSize:fr("XSmall.fontSize"),fontWeight:fr("XSmall.fontWeight"),lineHeight:fr("XSmall.lineHeight"),letterSpacing:fr("XSmall.letterSpacing")}},pr=e=>{switch(e){case 700:case"bold":return ur.Bold;case 600:case"semibold":return ur.Semibold;case 300:case"light":return ur.Light;case 400:case"regular":return ur.Regular;default:return""}},mr=(e,t)=>r=>{var n;const i=gr[e].fontFamily(r),a=gr[e].fontWeight(r);return Object.values(ur).includes(i)?g`
                font-family: ${pr(t)||pr(a)||i};
                font-weight: normal !important;
            `:g`
            font-family: ${i};
            font-weight: ${null!==(n=yr(t)||a)&&void 0!==n?n:"normal"};
        `},yr=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},$r=e=>{if(e>0)return g`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},br=mr,vr=(e,t,r=!1)=>n=>{const i=gr[e],a=i.fontSize(n);return g`
            ${mr(e,t)}
            font-size: ${a}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(n)||0}rem !important;
            ${g`
                margin-bottom: ${a*(r?1.05:0)}rem;
            `}
        `},Dr=(e=!1,t=!1,r=void 0)=>t?g`
            display: block;
            ${$r(r)}
        `:e?g`
            display: inline;
        `:g`
            display: block;
            ${$r(r)}
        `;var Sr;!function(e){e.D1=h.h1`
        ${e=>g`
                ${vr("D1",e.weight,e.paragraph)}
                color: ${tr.Neutral[1]};
                ${Dr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=h.h1`
        ${e=>g`
                ${vr("D2",e.weight,e.paragraph)}
                color: ${tr.Neutral[1]};
                ${Dr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=h.h1`
        ${e=>g`
                ${vr("D3",e.weight,e.paragraph)}
                color: ${tr.Neutral[1]};
                ${Dr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=h.h1`
        ${e=>g`
                ${vr("D4",e.weight,e.paragraph)}
                color: ${tr.Neutral[1]};
                ${Dr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=h.h1`
        ${e=>g`
                ${vr("DBody",e.weight,e.paragraph)}
                color: ${tr.Neutral[1]};
                ${Dr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=h.h1`
        ${e=>g`
                ${vr("H1",e.weight,e.paragraph)}
                color: ${tr.Neutral[1]};
                ${Dr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=h.h2`
        ${e=>g`
                ${vr("H2",e.weight,e.paragraph)}
                color: ${tr.Neutral[1]};
                ${Dr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=h.h3`
        ${e=>g`
                ${vr("H3",e.weight,e.paragraph)}
                color: ${tr.Neutral[1]};
                ${Dr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=h.h4`
        ${e=>g`
                ${vr("H4",e.weight,e.paragraph)}
                color: ${tr.Neutral[1]};
                ${Dr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=h.h5`
        ${e=>g`
                ${vr("H5",e.weight,e.paragraph)}
                color: ${tr.Neutral[1]};
                ${Dr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=h.h6`
        ${e=>g`
                ${vr("H6",e.weight,e.paragraph)}
                color: ${tr.Neutral[1]};
                ${Dr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=h.p`
        ${e=>g`
                ${vr("Body",e.weight,e.paragraph)}
                color: ${tr.Neutral[1]};
                ${Dr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=h.p`
        ${e=>g`
                ${vr("BodySmall",e.weight,e.paragraph)}
                color: ${tr.Neutral[1]};
                ${Dr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=h.span`
        ${e=>g`
                ${vr("XSmall",e.weight,e.paragraph)}
                color: ${tr.Neutral[1]};
                ${Dr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>wr(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>wr(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Sr||(Sr={}));const xr=h.a`
    ${e=>g`
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
`,Fr=h(p)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,wr=r=>{var{external:n=!1,children:i}=r,a=m(r,["external","children"]);return e(xr,Object.assign({},a,{children:[i,n&&t(Fr,{})]}))};var Br;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Br||(Br={}));const kr={collections:{base:{InputBoxShadow:g`
        inset 0 0 4px 0px ${tr.Shadow.Accent}
    `,InputErrorBoxShadow:g`
        inset 0 0 4px 0px ${tr.Shadow.Red}
    `,ElevationBoxShadow:g`
      0px 2px 8px ${tr.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:g`
        inset 0 0 3px 0px ${tr.Shadow.Accent}
    `,InputErrorBoxShadow:g`
        inset 0 0 3px 0px ${tr.Shadow.Red}
    `,ElevationBoxShadow:g`
      0px 2px 8px ${tr.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},Hr=e=>t=>{var r;const n=t.theme,i=qt(kr,n[Qt.designTokenScheme]);return(null===(r=n.options)||void 0===r?void 0:r.designToken)?Jt(i,e,n.options.designToken):Jt(i,e)},Ar={InputBoxShadow:Hr("InputBoxShadow"),InputErrorBoxShadow:Hr("InputErrorBoxShadow"),ElevationBoxShadow:Hr("ElevationBoxShadow"),Table:{Header:Hr("Table.Header"),Cell:{Primary:Hr("Table.Cell.Primary"),Secondary:Hr("Table.Cell.Secondary"),Selected:Hr("Table.Cell.Selected"),Hover:Hr("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:Hr("Button.Danger.BackgroundColor"),Hover:Hr("Button.Danger.Hover"),Primary:Hr("Button.Danger.Primary"),Border:Hr("Button.Danger.Border")}}},Or=h.button`
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
    ${e=>{switch(e.$buttonStyle){case"secondary":return g`
                    background-color: ${tr.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?Ar.Button.Danger.Border:tr.Primary};

                    span {
                        color: ${e.$buttonIsDanger?Ar.Button.Danger.Primary:tr.Primary};
                    }
                `;case"light":return g`
                    background-color: ${tr.Neutral[8]};
                    border: 1px solid ${tr.Neutral[5]};

                    span {
                        color: ${e.$buttonIsDanger?Ar.Button.Danger.Primary:tr.Primary};
                    }
                `;case"disabled":return g`
                    background-color: ${tr.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${tr.Neutral[3]};
                    }
                `;case"link":return g`
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
                        span {
                            color: ${e.$buttonIsDanger?Ar.Button.Danger.Hover:tr.Secondary};
                        }
                    }
                `;default:return g`
                    background-color: ${e.$buttonIsDanger?Ar.Button.Danger.BackgroundColor:tr.Primary};
                    border: 1px solid transparent;

                    ${ir.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${tr.Neutral[8]};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?g`
                    height: 2.5rem;
                    span {
                        ${vr("H5","semibold")}
                    }

                    ${ir.mobileS} {
                        height: auto;
                    }
                `:g`
                    height: 3rem;
                    span {
                        ${vr("H4","semibold")}
                    }

                    ${ir.mobileS} {
                        height: auto;
                    }
                `}
`,Mr=h((({color:r,className:n,size:i=18})=>e(ar,Object.assign({className:n,$size:i,$color:r},{children:[t(lr,{id:"inner1",$size:i-2,$borderWidth:2}),t(sr,{id:"inner2",$size:i-2,$borderWidth:2}),t(cr,{id:"inner3",$size:i-2,$borderWidth:2}),t(dr,{id:"inner4",$size:i-2,$borderWidth:2})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t=e.$buttonIsDanger?Ar.Button.Danger.Primary:tr.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=tr.Neutral[3](e);break;default:t=tr.Neutral[8](e)}return g`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,Er={Default:n.forwardRef(((r,n)=>{const{children:i,disabled:a=!1,loading:o=!1,styleType:l="default",danger:s=!1}=r,c=m(r,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:a?"disabled":l,$buttonSizeStyle:"default",$buttonIsDanger:s};return e(Or,Object.assign({ref:n,"data-testid":c["data-testid"]||"button",disabled:a},d,c,{children:[o&&t(Mr,Object.assign({},d)),t("span",{children:i})]}))})),Small:n.forwardRef(((r,n)=>{const{children:i,disabled:a=!1,loading:o=!1,styleType:l="default",danger:s=!1}=r,c=m(r,["children","disabled","loading","styleType","danger"]),d={$buttonStyle:a?"disabled":l,$buttonSizeStyle:"small",$buttonIsDanger:s};return e(Or,Object.assign({ref:n,"data-testid":c["data-testid"]||"button",disabled:a},d,c,{children:[o&&t(Mr,Object.assign({},d,{size:16})),t("span",{children:i})]}))}))},Cr=h.button`
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

        ${({$highlight:e})=>e&&g`
                background-color: ${tr.Neutral[7]};
            `}
    }
`,Lr=n.forwardRef(((e,r)=>{var{children:n,focusHighlight:i=!0,focusOutline:a="none",type:o="button"}=e,l=m(e,["children","focusHighlight","focusOutline","type"]);return t(Cr,Object.assign({ref:r,$outline:a,$highlight:i,type:o},l,{children:n}))})),Yr=g`
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
`,_r=h.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
`,jr=h.div`
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

    ${e=>{if(!e.$visible)return g`
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

    ${e=>!1===e.$visible?g`
                display: none;
            `:e.$expanded?g`
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
`,Jr=h(Er.Small)`
    flex: 1;
`,qr=h.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 2.5rem);
    align-content: center;
    justify-content: center;

    ${e=>{switch(e.$type){case"standalone":return g`
                    gap: 0.5rem 2.5rem;
                `;case"input":return g`
                    gap: 0.5rem 1rem;
                `}}}
`,Qr=h.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: default;
    border-radius: 5rem;
    margin: 0 0.5rem;

    ${e=>e.$interactive?g`
                cursor: pointer;
                &:hover {
                    box-shadow: 0px 0px 4px 1px ${tr.Shadow.Accent};
                    border: 1px solid ${tr.Accent.Light[1]};
                }
            `:e.$disabledDisplay?g`
                cursor: not-allowed;
            `:void 0}

    ${e=>{switch(e.$variant){case"current-month":return g`
                    background-color: ${tr.Accent.Light[6](e)};
                `;case"selected-month":return g`
                    background-color: ${tr.Accent.Light[5](e)};
                    border: 1px solid ${tr.Primary(e)};
                `}}}
`,Kr=h(Sr.H5)`
    ${e=>{if(e.$disabledDisplay)return g`
                color: ${tr.Neutral[4]};
            `;switch(e.$variant){case"current-month":return g`
                    color: ${tr.Neutral[3](e)};
                `;case"selected-month":return g`
                    ${vr("H5","semibold")}
                    color: ${tr.Primary(e)};
                `}}}
`,en=({calendarDate:e,currentFocus:r,selectedStartDate:n,selectedEndDate:a,viewCalendarDate:o,type:l,isNewSelection:s,minDate:c,maxDate:d,allowDisabledSelection:u,onMonthSelect:h})=>{const f=i((()=>E.generateMonths(v(e))),[e]),g=e=>{const t="start"===r&&a&&e.isAfter(a,"month")&&s,i="end"===r&&n&&e.isBefore(n,"month")&&s;return t||i},p=e=>{const t=e.format("MMMM"),r=(n=e,!E.isWithinRange(n,c?v(c):void 0,d?v(d):void 0,"month"));var n;const i=o.isSame(e,"month")?"selected-month":v().isSame(e,"month")?"current-month":"default";return{disabledDisplay:r||g(e),interactive:!r||u,month:t,variant:i}};return f.length?t(qr,Object.assign({$type:l},{children:f.map((e=>{const{disabledDisplay:r,interactive:n,variant:i,month:a}=p(e);return t(Qr,Object.assign({$variant:i,$disabledDisplay:r,$interactive:n,onClick:()=>((e,t)=>{t||h(e)})(e,!n)},{children:t(Kr,Object.assign({weight:"regular",$variant:i,$disabledDisplay:r},{children:a}))}),a)}))})):null},tn=h.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-content: center;
    grid-template-columns: repeat(3, 1fr);

    ${e=>{switch(e.$type){case"standalone":return g`
                    grid-template-rows: repeat(4, 4rem);
                    gap: 0.5rem 2.5rem;
                `;case"input":return g`
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

    ${e=>e.$interactive?g`
                cursor: pointer;
                &:hover {
                    box-shadow: 0px 0px 4px 1px ${tr.Shadow.Accent};
                    border: 1px solid ${tr.Accent.Light[1]};
                }
            `:e.$disabledDisplay?g`
                cursor: not-allowed;
            `:void 0}

    ${e=>{switch(e.$variant){case"current-year":return g`
                    background: ${tr.Accent.Light[6](e)};
                `;case"selected-year":return g`
                    background: ${tr.Accent.Light[5](e)};
                    border: 1px solid ${tr.Primary(e)};
                `}}};
`,nn=h(Sr.H5)`
    ${e=>{if(e.$disabledDisplay)return g`
                color: ${tr.Neutral[4]};
            `;switch(e.$variant){case"current-year":return g`
                    color: ${tr.Neutral[3](e)};
                `;case"selected-year":return g`
                    ${vr("H5","semibold")}
                    color: ${tr.Primary(e)};
                `;case"other-decade":return g`
                    color: ${tr.Neutral[4](e)};
                `}}}
`,an=({calendarDate:e,currentFocus:r,selectedStartDate:n,selectedEndDate:a,viewCalendarDate:o,type:l,isNewSelection:s,minDate:c,maxDate:d,allowDisabledSelection:u,onYearSelect:h})=>{const f=i((()=>E.generateDecadeOfYears(v(e))),[e]),g=e=>{const t="start"===r&&a&&e.isAfter(a,"year")&&s,i="end"===r&&n&&e.isBefore(n,"year")&&s;return t||i},p=e=>{const t=[0,11].includes(f.indexOf(e)),r=e.year(),n=(i=e,!E.isWithinRange(i,c?v(c):void 0,d?v(d):void 0,"year"));var i;const a=t?"other-decade":o.isSame(e,"year")?"selected-year":v().isSame(e,"year")?"current-year":"default";return{disabledDisplay:n||g(e),interactive:!n||u,year:r,variant:a}};return f.length?t(tn,Object.assign({$type:l},{children:f.map((e=>{const{disabledDisplay:r,interactive:n,variant:i,year:a}=p(e);return t(rn,Object.assign({$variant:i,$disabledDisplay:r,$interactive:n,onClick:()=>((e,t)=>{t||h(e)})(e,!n)},{children:t(nn,Object.assign({weight:"regular",$variant:i,$disabledDisplay:r,$interactive:n},{children:a}))}),a)}))})):null},on=n.forwardRef(((n,i)=>{var{children:c,initialCalendarDate:d,type:u,minDate:h,maxDate:f,currentFocus:g,selectedStartDate:p,selectedEndDate:y,selectWithinRange:$,dynamicHeight:b=!1,allowDisabledSelection:D,onCalendarDateChange:S,withButton:x,doneButtonDisabled:F,onDismiss:w,showNavigationHeader:B=!0,getLeftArrowDate:k,getRightArrowDate:H,isLeftArrowDisabled:A,isRightArrowDisabled:O,getMonthHeaderLabel:M,getYearHeaderLabel:C}=n,L=m(n,["children","initialCalendarDate","type","minDate","maxDate","currentFocus","selectedStartDate","selectedEndDate","selectWithinRange","dynamicHeight","allowDisabledSelection","onCalendarDateChange","withButton","doneButtonDisabled","onDismiss","showNavigationHeader","getLeftArrowDate","getRightArrowDate","isLeftArrowDisabled","isRightArrowDisabled","getMonthHeaderLabel","getYearHeaderLabel"]);const[Y,T]=a(N.toDayjs(d)),[z,_]=a(N.toDayjs(d)),[j,W]=a("default"),I=o(null),P=o(null),R=o();l(i,(()=>({defaultView(){W("default")},resetView(){const e=N.toDayjs(d);T(e),_(e),W("default")},setCalendarDate(e){const t=N.toDayjs(e);T(t),_(t)}}))),s((()=>{const e=N.toDayjs(d);T(e),_(e)}),[d]),s((()=>{q(z)}),[z]);const V=()=>{"month-options"!==j?(W("month-options"),R.current.focus()):(W("default"),T(z))},Z=()=>{"default"!==j?(W("default"),T(z)):W("year-options")},X=()=>{R.current.focus();const e=k?k(Y):Y.subtract(1,"month");switch(j){case"default":_(e),T(e);break;case"month-options":T((e=>e.subtract(1,"year")));break;case"year-options":T((e=>e.subtract(10,"year")))}},U=()=>{R.current.focus();const e=H?H(Y):Y.add(1,"month");switch(j){case"default":_(e),T(e);break;case"month-options":T((e=>e.add(1,"year")));break;case"year-options":T((e=>e.add(10,"year")))}},G=e=>{T(e),_(e),x||W("default")},J=()=>{const e=N.toDayjs(d);T(e),_(e),"default"===j?Q("reset"):W("default")},q=e=>{S&&S(e)},Q=e=>{w&&w(e)},K=()=>{if(!h||D)return!1;const e=v(h);return"month-options"===j?!E.isPreviousYearWithinRange(Y,e):"year-options"===j?!E.isPreviousDecadeWithinRange(Y,e):A?A(Y):!E.isPreviousMonthWithinRange(Y,e)},ee=()=>{if(!f||D)return!1;const e=v(f);return"month-options"===j?!E.isNextYearWithinRange(Y,e):"year-options"===j?!E.isNextDecadeWithinRange(Y,e):O?O(Y):!E.isNextMonthWithinRange(Y,e)},te=()=>{if("year-options"===j){const{beginDecade:e,endDecade:t}=E.getStartEndDecade(Y);return`${e} to ${t}`}return C?C(Y):Y.format("YYYY")},re=()=>{const n=M?M(Y):Y.format("MMM");return e(r,{children:[e(Vr,Object.assign({type:"button",tabIndex:-1,$expanded:"month-options"===j,$visible:"default"===j,id:"month-dropdown",onClick:V},{children:[t(Zr,{children:n}),t(Nr,{})]})),e(Vr,Object.assign({type:"button",tabIndex:-1,$expanded:"default"!==j,id:"year-dropdown",onClick:Z},{children:[t(Zr,{children:te()}),t(Nr,{})]}))]})},ne=()=>{switch(j){case"month-options":return t(en,{type:u,calendarDate:Y,currentFocus:g,minDate:h,maxDate:f,selectedStartDate:p,selectedEndDate:y,viewCalendarDate:z,isNewSelection:$,onMonthSelect:G,allowDisabledSelection:D});case"year-options":return t(an,{type:u,calendarDate:Y,currentFocus:g,minDate:h,maxDate:f,selectedStartDate:p,selectedEndDate:y,viewCalendarDate:z,isNewSelection:$,onYearSelect:G,allowDisabledSelection:D});default:return null}};return e(_r,Object.assign({ref:R,tabIndex:-1,"data-id":"calendar-container","data-testid":"calendar-container"},L,{children:[B&&e(Pr,Object.assign({"data-id":"calendar-header","data-testid":"calendar-header"},{children:[t(Rr,{children:re()}),e(Xr,{children:[t(Ur,Object.assign({"data-testid":"left-arrow-btn",disabled:K(),focusHighlight:!1,tabIndex:-1,onClick:X},{children:t(Tr,{})})),t(Ur,Object.assign({"data-testid":"right-arrow-btn",disabled:ee(),focusHighlight:!1,tabIndex:-1,onClick:U},{children:t(zr,{})}))]})]})),t(jr,{children:(()=>{const n="function"==typeof c?c({calendarDate:z,currentView:j}):c;return e(r,b?{children:["default"===j&&n,ne()]}:{children:[t(Wr,{children:n}),t(Ir,Object.assign({$visible:"default"!==j},{children:ne()}))]})})()}),(()=>{if(!x)return;const r=!!("default"===j)&&F;return e(Gr,{children:[t(Jr,Object.assign({ref:P,"data-testid":"cancel-button",styleType:"light",type:"button",onClick:J},{children:"Cancel"})),t(Jr,Object.assign({"data-testid":"done-button",ref:I,type:"button",onClick:()=>{r||(T(z),"default"===j?Q("confirmed"):W("default"))},disabled:r},{children:"Done"}))]})})()]}))}));h.div`
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
`;const ln=h.div`
    grid-column: 1 / -1;
    display: flex;
`,sn=h.div`
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

    ${e=>{switch(e.$position){case"left":return g`
                    left: 0;
                `;case"right":return g`
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
`,un=h(Sr.H5)`
    ${e=>{const{$disabledDisplay:t,$selected:r,$variant:n}=e;if(t&&r)return g`
                ${vr("H5","semibold")};
                color: ${tr.Accent.Light[2]};
            `;if(t)return g`
                color: ${tr.Neutral[4]};
            `;if(r)return g`
                ${vr("H5","semibold")};
                color: ${tr.Primary};
            `;switch(n){case"other-month":return g`
                    color: ${tr.Neutral[4]};
                `;case"today":return g`
                    color: ${tr.Neutral[3]};
                `;case"default":return g`
                    color: ${tr.Neutral[1]};
                `}}}
`;h(cn)`
    ${e=>{const{$selected:t}=e;if(t)return g`
                border-top: 1px solid ${tr.Accent.Light[4]};
                border-bottom: 1px solid ${tr.Accent.Light[4]};
                background-color: ${tr.Accent.Light[5]};
            `}}

    ${e=>{const{$hovered:t,$overlap:r}=e;return t?g`
                border-top: 1px dashed ${tr.Accent.Light[4]};
                border-bottom: 1px dashed ${tr.Accent.Light[4]};
                background-color: ${tr.Accent.Light[6]};
            `:r?g`
                background-color: ${tr.Accent.Light[4]};
            `:void 0}}
`;const hn=h(dn)`
    ${e=>{const{$hovered:t,$selected:r}=e;return r?g`
                background: ${tr.Accent.Light[5]};
                border: 1px solid ${tr.Primary};
            `:t?g`
                box-shadow: 0px 0px 4px 1px ${tr.Shadow.Accent};
                border: 1px solid ${tr.Accent.Light[1]};
                background-color: ${tr.Neutral[8]};
            `:void 0}}

    ${e=>{const{$interactive:t,$disabledDisplay:r}=e;return t?g`
                cursor: pointer;
                :hover {
                    box-shadow: 0px 0px 4px 1px ${tr.Shadow.Accent};
                    border: 1px solid ${tr.Accent.Light[1]};
                    background-color: ${tr.Neutral[8]};
                }
            `:r?g`
                cursor: not-allowed;
            `:void 0}}

    ${e=>{const{$disabledDisplay:t,$overlap:r,$variant:n}=e;return r?g`
                border: 1px solid ${tr.Accent.Light[1]};
                background: ${tr.Accent.Light[4]};

                :hover {
                    background: ${tr.Accent.Light[4]};
                }
            `:t?g`
                color: ${tr.Neutral[4]};
            `:"today"===n?g`
                    background: ${tr.Accent.Light[5]};
                `:void 0}}
`,fn=e=>{let t=tr.Neutral[8],r="1px solid transparent";switch(e.$type){case"current":t=tr.Accent.Light[5];break;case"hover-dash":t=tr.Accent.Light[6],r=`1px dashed ${tr.Accent.Light[4](e)}`;break;case"hover-current":t=tr.Neutral[8],r=`1px solid ${tr.Primary(e)}`;break;case"selected":t=tr.Accent.Light[5],r=`1px solid ${tr.Accent.Light[4](e)}`;break;case"selected-outline":t=tr.Accent.Light[5],r=`1px solid ${tr.Primary(e)}`;break;case"overlap":t=tr.Accent.Light[4],r=`1px solid ${tr.Accent.Light[4](e)}`;break;case"overlap-outline":t=tr.Accent.Light[4],r=`1px solid ${tr.Primary(e)}`}return{color:t,border:r}};h.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 2.5rem;
`;const gn=h.div`
    position: absolute;
    height: 2.5rem;
    width: 50%;

    ${e=>{if(!e.$type)return;const{color:t,border:r}=fn(e);return g`
            background-color: ${t};
            background-clip: content-box;
            border-top: ${r};
            border-bottom: ${r};
        `}}
`;h(gn)`
    left: 0;
`,h(gn)`
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

    ${e=>{if(e.$type){const{color:t,border:r}=fn(e);return g`
                background-color: ${t};
                background-clip: content-box;
                border: ${r};
            `}}}

    ${e=>e.$shadow&&g`
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
`,h(Sr.H5)`
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

    ${e=>{const{$disabled:t,$type:r}=e;if(t)return"selected"===r?g`
                    ${vr("H5","semibold")};
                    color: ${tr.Accent.Light[2]};
                `:g`
                color: ${tr.Neutral[4]};
            `;switch(r){case"selected":return g`
                    ${vr("H5","semibold")};
                    color: ${tr.Primary};
                `;case"current":return g`
                    color: ${tr.Neutral[3]};
                `;case"unavailable":return g`
                    color: ${tr.Neutral[4]};
                `;default:return g`
                    color: ${tr.Neutral[1]};
                `}}}
`,v.extend(H);const yn=1.25,$n=e=>"minified"===e?12:40;h.div`
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
    color: ${tr.Primary};
`,h(d)`
    font-size: 1rem;
    color: ${tr.Primary};
`,h.div`
    overflow: hidden;
    flex-grow: 1;
    position: relative;
    height: ${({$variant:e})=>`${20+$n(e)}px`};
`,h.div`
    position: relative;
    white-space: nowrap;
    height: ${yn}rem;
`,h.div`
    display: flex;
    white-space: nowrap;
`,h.div`
    display: inline-block;
    width: ${({$variant:e})=>("minified"===e?12:40)+"px"};
    position: relative;
    border-left: 1px solid ${tr.Neutral[2]};
    ${e=>{let t=0;switch(e.$variant){case"default":t=e.$isLongMarker?yn:.625;break;case"minified":t=e.$isLongMarker?yn:0;break;default:t=0}return g`
            height: ${t}rem;
        `}}
`,h(Sr.XSmall)`
    color: ${tr.Neutral[2]};
    position: absolute;
    bottom: 10%;
    left: 10%;
`;const bn=h.div`
    ${e=>"vertical"===e.$type?g`
                display: flex;
                flex-grow: 1;
                align-items: center;
                justify-content: center;
                width: 100%;
                margin: 1px 0px;
            `:g`
                position: absolute;
                height: ${$n(e.$variant)}px;
                width: ${e.$width}px;
                left: ${e.$left}px;
            `}
    background-color: ${({$bgColor:e})=>e};
    cursor: ${({$clickable:e})=>e?"pointer":"default"};

    ${e=>"stripes"===e.$styleType&&g`
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
    top: ${yn}rem;
    height: ${({$variant:e})=>`${$n(e)}px`};
    z-index: 1;
    border-right: 1px solid ${tr.Neutral[2]};
`,h(Sr.XSmall)`
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
    ${e=>{const{$variant:t}=e;if("default"===t)return g`
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
`,Sn=h.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
`,xn=h.div`
    grid-column: 1 / -1;
    display: flex;
    min-height: 7.625rem;
`,Fn=h.div`
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
`;v.extend(H);const Bn={id:"1",startTime:"",endTime:"",clickable:!1,styleAttributes:{styleType:"stripes",backgroundColor:"#ECEFEF",backgroundColor2:"#E0E4E5"}},kn=({calendarDate:r,disabledDates:n,selectedDate:a,onSelect:o,minDate:l,maxDate:s,slots:c,enableSelection:d=!0,onSlotClick:u})=>{const h=i((()=>E.generateDaysForCurrentWeek(r)),[r]),f="YYYY-MM-DD",g=e=>{const t=e.format(f),r=(e=>{const t=E.isWithinRange(e,l?v(l):void 0,s?v(s):void 0),r=n&&n.includes(e.format(f));return!t||r})(e),i={},o={};return r&&(i.$disabledDisplay=!0,o.$disabledDisplay=!0),i.$interactive=d&&!r,[a].includes(t)&&(i.$selected=!0,o.$selected=!0),{styleCircleProps:i,styleLabelProps:o}};return e(Sn,{children:[t(ln,{children:h.map(((e,r)=>{const n="default",{styleCircleProps:i,styleLabelProps:a}=g(e);return t(sn,{children:t(hn,Object.assign({$variant:n,onClick:()=>((e,t)=>{!t&&d&&o(e)})(e,!i.$interactive)},i,{children:t(vn,Object.assign({weight:a.$selected?"semibold":"regular",$variant:n},a,{children:e.format("D")}))}))},`day-${r}`)}))}),h.map(((e,r)=>t(Dn,{children:t(Sr.XSmall,Object.assign({weight:"semibold"},{children:v(e).format("ddd")}))},`week-day-${r}`))),t(xn,{children:h.map(((r,n)=>{const i=r.format(f),a=c&&(c[i]?c[i]:[Bn]);return t(wn,{children:a&&a.map((r=>{const{id:n,startTime:a,endTime:o,clickable:l=!0,styleAttributes:s}=r,{color:c,styleType:d="default",backgroundColor:h,backgroundColor2:f}=s;return t(bn,Object.assign({$type:"vertical",$variant:"default",$styleType:d,$bgColor:h,$bgColor2:f,$clickable:l,onClick:()=>l&&((e,t)=>{u(e,t)})(i,r)},{children:e(Fn,Object.assign({style:{color:c}},{children:[t("span",{children:E.convertTo12HourFormat(a)}),o&&a&&t("span",{children:"-"}),t("span",{children:E.convertTo12HourFormat(o)})]}))}),n)}))},`wrapper-${n}`)}))},`week-cell-${r.format(f)}`)]})},Hn=h.div`
    min-width: 18.5rem;

    [data-id="calendar-header"] {
        ${ir.mobileL} {
            padding: 0 1.25rem;
        }
    }
`,An="YYYY-MM-DD",On=e=>{var{disabledDates:r,onWeekDisplayChange:n,onChange:i,value:l,minDate:c,maxDate:d,slots:u,showNavigationHeader:h=!0,enableSelection:f,onSlotClick:g,currentCalendarDate:p}=e,y=m(e,["disabledDates","onWeekDisplayChange","onChange","value","minDate","maxDate","slots","showNavigationHeader","enableSelection","onSlotClick","currentCalendarDate"]);const[$,b]=a(l),D=o(),S=o(void 0);s((()=>{b(l)}),[l]);const x=e=>{const t=e.format(An);b(t),i&&i(t)},F=(e,t)=>{g&&g(e,t)},w=e=>{if(n){const t={week:{firstDayOfWeek:e.startOf("week").format(An),lastDayOfWeek:e.endOf("week").format(An)},month:e.month()+1,year:e.year()};n(t)}};return t(Hn,Object.assign({},y,{children:t(on,Object.assign({ref:D,type:"standalone",dynamicHeight:!0,initialCalendarDate:N.toDayjs($||p).endOf("week").format(An),selectedStartDate:$,getLeftArrowDate:e=>e.subtract(1,"week"),getRightArrowDate:e=>e.add(1,"week"),isLeftArrowDisabled:e=>c&&v(e).subtract(1,"week").isBefore(c,"week"),isRightArrowDisabled:e=>d&&v(e).add(1,"week").isAfter(d,"week"),onCalendarDateChange:e=>{S.current&&S.current.isSame(e,"week")||w(e),S.current=e},showNavigationHeader:h,minDate:c,maxDate:d,getMonthHeaderLabel:e=>v(e).endOf("week").format("MMM"),getYearHeaderLabel:e=>v(e).endOf("week").format("YYYY")},{children:({calendarDate:e})=>t(kn,{calendarDate:e,disabledDates:r,selectedDate:$,minDate:c,maxDate:d,onSelect:x,slots:u,enableSelection:f,onSlotClick:F})}))}))};export{On as TimeSlotWeekView};
//# sourceMappingURL=index.js.map
