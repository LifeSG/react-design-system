import{jsxs as e,jsx as t,Fragment as r}from"react/jsx-runtime";import n,{useMemo as i,useState as a,useRef as o,useImperativeHandle as s,useEffect as l}from"react";import{ChevronDownIcon as c}from"@lifesg/react-icons/chevron-down";import{ChevronLeftIcon as d}from"@lifesg/react-icons/chevron-left";import{ChevronRightIcon as u}from"@lifesg/react-icons/chevron-right";import h,{keyframes as f,css as g}from"styled-components";import{ExternalIcon as p}from"@lifesg/react-icons/external";function m(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}var y="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},$={exports:{}};$.exports=function(){var e=1e3,t=6e4,r=36e5,n="millisecond",i="second",a="minute",o="hour",s="day",l="week",c="month",d="quarter",u="year",h="date",f="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}},y=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},$={s:y,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),i=r%60;return(t<=0?"+":"-")+y(n,2,"0")+":"+y(i,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),i=t.clone().add(n,c),a=r-i<0,o=t.clone().add(n+(a?-1:1),c);return+(-(n+(r-i)/(a?i-o:o-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:u,w:l,d:s,D:h,h:o,m:a,s:i,ms:n,Q:d}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",v={};v[b]=m;var D=function(e){return e instanceof F},S=function e(t,r,n){var i;if(!t)return b;if("string"==typeof t){var a=t.toLowerCase();v[a]&&(i=a),r&&(v[a]=r,i=a);var o=t.split("-");if(!i&&o.length>1)return e(o[0])}else{var s=t.name;v[s]=t,i=s}return!n&&i&&(b=i),i||!n&&b},x=function(e,t){if(D(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new F(r)},w=$;w.l=S,w.i=D,w.w=function(e,t){return x(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var F=function(){function m(e){this.$L=S(e.locale,null,!0),this.parse(e)}var y=m.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(w.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(g);if(n){var i=n[2]-1||0,a=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return w},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(e,t){var r=x(e);return this.startOf(t)<=r&&r<=this.endOf(t)},y.isAfter=function(e,t){return x(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<x(e)},y.$g=function(e,t,r){return w.u(e)?this[t]:this.set(r,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var r=this,n=!!w.u(t)||t,d=w.p(e),f=function(e,t){var i=w.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?i:i.endOf(s)},g=function(e,t){return w.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},p=this.$W,m=this.$M,y=this.$D,$="set"+(this.$u?"UTC":"");switch(d){case u:return n?f(1,0):f(31,11);case c:return n?f(1,m):f(0,m+1);case l:var b=this.$locale().weekStart||0,v=(p<b?p+7:p)-b;return f(n?y-v:y+(6-v),m);case s:case h:return g($+"Hours",0);case o:return g($+"Minutes",1);case a:return g($+"Seconds",2);case i:return g($+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var r,l=w.p(e),d="set"+(this.$u?"UTC":""),f=(r={},r[s]=d+"Date",r[h]=d+"Date",r[c]=d+"Month",r[u]=d+"FullYear",r[o]=d+"Hours",r[a]=d+"Minutes",r[i]=d+"Seconds",r[n]=d+"Milliseconds",r)[l],g=l===s?this.$D+(t-this.$W):t;if(l===c||l===u){var p=this.clone().set(h,1);p.$d[f](g),p.init(),this.$d=p.set(h,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f](g);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[w.p(e)]()},y.add=function(n,d){var h,f=this;n=Number(n);var g=w.p(d),p=function(e){var t=x(f);return w.w(t.date(t.date()+Math.round(e*n)),f)};if(g===c)return this.set(c,this.$M+n);if(g===u)return this.set(u,this.$y+n);if(g===s)return p(1);if(g===l)return p(7);var m=(h={},h[a]=t,h[o]=r,h[i]=e,h)[g]||1,y=this.$d.getTime()+n*m;return w.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||f;var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=w.z(this),a=this.$H,o=this.$m,s=this.$M,l=r.weekdays,c=r.months,d=function(e,r,i,a){return e&&(e[r]||e(t,n))||i[r].slice(0,a)},u=function(e){return w.s(a%12||12,e,"0")},h=r.meridiem||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n},g={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:w.s(s+1,2,"0"),MMM:d(r.monthsShort,s,c,3),MMMM:d(c,s),D:this.$D,DD:w.s(this.$D,2,"0"),d:String(this.$W),dd:d(r.weekdaysMin,this.$W,l,2),ddd:d(r.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(a),HH:w.s(a,2,"0"),h:u(1),hh:u(2),a:h(a,o,!0),A:h(a,o,!1),m:String(o),mm:w.s(o,2,"0"),s:String(this.$s),ss:w.s(this.$s,2,"0"),SSS:w.s(this.$ms,3,"0"),Z:i};return n.replace(p,(function(e,t){return t||g[e]||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(n,h,f){var g,p=w.p(h),m=x(n),y=(m.utcOffset()-this.utcOffset())*t,$=this-m,b=w.m(this,m);return b=(g={},g[u]=b/12,g[c]=b,g[d]=b/3,g[l]=($-y)/6048e5,g[s]=($-y)/864e5,g[o]=$/r,g[a]=$/t,g[i]=$/e,g)[p]||$,f?b:w.a(b)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return v[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=S(e,t,!0);return n&&(r.$L=n),r},y.clone=function(){return w.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),B=F.prototype;return x.prototype=B,[["$ms",n],["$s",i],["$m",a],["$H",o],["$W",s],["$M",c],["$y",u],["$D",h]].forEach((function(e){B[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),x.extend=function(e,t){return e.$i||(e(t,F,x),e.$i=!0),x},x.locale=S,x.isDayjs=D,x.unix=function(e){return x(1e3*e)},x.en=v[b],x.Ls=v,x.p={},x}();var b=$.exports,v={exports:{}};v.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,n=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,a={},o=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),r=60*t[1]+(+t[2]||0);return 0===r?0:"+"===t[0]?-r:r}(e)}],c=function(e){var t=a[e];return t&&(t.indexOf?t:t.s.concat(t.f))},d=function(e,t){var r,n=a.meridiem;if(n){for(var i=1;i<=24;i+=1)if(e.indexOf(n(i,0,t))>-1){r=i>12;break}}else r=e===(t?"pm":"PM");return r},u={A:[i,function(e){this.afternoon=d(e,!1)}],a:[i,function(e){this.afternoon=d(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[r,s("day")],Do:[i,function(e){var t=a.ordinal,r=e.match(/\d+/);if(this.day=r[0],t)for(var n=1;n<=31;n+=1)t(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[r,s("month")],MMM:[i,function(e){var t=c("months"),r=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],MMMM:[i,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[r,function(e){this.year=o(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(r){var n,i;n=r,i=a&&a.formats;for(var o=(r=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,r,n){var a=n&&n.toUpperCase();return r||i[n]||e[n]||i[a].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,r){return t||r.slice(1)}))}))).match(t),s=o.length,l=0;l<s;l+=1){var c=o[l],d=u[c],h=d&&d[0],f=d&&d[1];o[l]=f?{regex:h,parser:f}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},r=0,n=0;r<s;r+=1){var i=o[r];if("string"==typeof i)n+=i.length;else{var a=i.regex,l=i.parser,c=e.slice(n),d=a.exec(c)[0];l.call(t,d),e=e.replace(d,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var r=e.hours;t?r<12&&(e.hours+=12):12===r&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,r){r.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(o=e.parseTwoDigitYear);var n=t.prototype,i=n.parse;n.parse=function(e){var t=e.date,n=e.utc,o=e.args;this.$u=n;var s=o[1];if("string"==typeof s){var l=!0===o[2],c=!0===o[3],d=l||c,u=o[2];c&&(u=o[2]),a=this.$locale(),!l&&u&&(a=r.Ls[u]),this.$d=function(e,t,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var n=h(t)(e),i=n.year,a=n.month,o=n.day,s=n.hours,l=n.minutes,c=n.seconds,d=n.milliseconds,u=n.zone,f=new Date,g=o||(i||a?1:f.getDate()),p=i||f.getFullYear(),m=0;i&&!a||(m=a>0?a-1:f.getMonth());var y=s||0,$=l||0,b=c||0,v=d||0;return u?new Date(Date.UTC(p,m,g,y,$,b,v+60*u.offset*1e3)):r?new Date(Date.UTC(p,m,g,y,$,b,v)):new Date(p,m,g,y,$,b,v)}catch(e){return new Date("")}}(t,s,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),d&&t!=this.format(s)&&(this.$d=new Date("")),a={}}else if(s instanceof Array)for(var f=s.length,g=1;g<=f;g+=1){o[1]=s[g-1];var p=r.apply(this,o);if(p.isValid()){this.$d=p.$d,this.$L=p.$L,this.init();break}g===f&&(this.$d=new Date(""))}else i.call(this,e)}}}();var D,S,x=v.exports,w={exports:{}},F=w.exports=(D={year:0,month:1,day:2,hour:3,minute:4,second:5},S={},function(e,t,r){var n,i=function(e,t,r){void 0===r&&(r={});var n=new Date(e),i=function(e,t){void 0===t&&(t={});var r=t.timeZoneName||"short",n=e+"|"+r,i=S[n];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:r}),S[n]=i),i}(t,r);return i.formatToParts(n)},a=function(e,t){for(var n=i(e,t),a=[],o=0;o<n.length;o+=1){var s=n[o],l=s.type,c=s.value,d=D[l];d>=0&&(a[d]=parseInt(c,10))}var u=a[3],h=24===u?0:u,f=a[0]+"-"+a[1]+"-"+a[2]+" "+h+":"+a[4]+":"+a[5]+":000",g=+e;return(r.utc(f).valueOf()-(g-=g%1e3))/6e4},o=t.prototype;o.tz=function(e,t){void 0===e&&(e=n);var i=this.utcOffset(),a=this.toDate(),o=a.toLocaleString("en-US",{timeZone:e}),s=Math.round((a-new Date(o))/1e3/60),l=r(o).$set("millisecond",this.$ms).utcOffset(15*-Math.round(a.getTimezoneOffset()/15)-s,!0);if(t){var c=l.utcOffset();l=l.add(i-c,"minute")}return l.$x.$timezone=e,l},o.offsetName=function(e){var t=this.$x.$timezone||r.tz.guess(),n=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=o.startOf;o.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var n=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return s.call(n,e,t).tz(this.$x.$timezone,!0)},r.tz=function(e,t,i){var o=i&&t,s=i||t||n,l=a(+r(),s);if("string"!=typeof e)return r(e).tz(s);var c=function(e,t,r){var n=e-60*t*1e3,i=a(n,r);if(t===i)return[n,t];var o=a(n-=60*(i-t)*1e3,r);return i===o?[n,i]:[e-60*Math.min(i,o)*1e3,Math.max(i,o)]}(r.utc(e,o).valueOf(),l,s),d=c[0],u=c[1],h=r(d).utcOffset(u);return h.$x.$timezone=s,h},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function(e){n=e}}),B={exports:{}};B.exports=function(e,t,r){t.prototype.isBetween=function(e,t,n,i){var a=r(e),o=r(t),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(a,n):!this.isBefore(a,n))&&(l?this.isBefore(o,n):!this.isAfter(o,n))||(s?this.isBefore(a,n):!this.isAfter(a,n))&&(l?this.isAfter(o,n):!this.isBefore(o,n))}};var H=B.exports,k={exports:{}};k.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var O=k.exports,M={exports:{}};M.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var A,C=M.exports;b.extend(H),b.extend(O),b.extend(C),b.extend(x),b.extend(F),function(e){e.generateDays=e=>{const t=e.startOf("month"),r=b(t).startOf("week");return L(r).map((e=>z(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return z(t)},e.generateMonths=e=>{const t=[];for(let r=0;r<12;r++){const n=e.month(r);t.push(b(n))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),r=10*Math.floor(t/10),n=e.year(r),i=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)i.push(n.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+b(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=b(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,r,n="day")=>!t&&!r||(t&&r?e.isBetween(t,r,n,"[]"):t?e.isSameOrAfter(t,n):e.isSameOrBefore(r,n)),e.isPreviousMonthWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"month"),r,void 0,"month"),e.isPreviousYearWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"year"),r,void 0,"year"),e.isPreviousDecadeWithinRange=(t,r)=>{const{beginDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).subtract(1,"year"),r,void 0,"year")},e.isNextMonthWithinRange=(t,r)=>e.isWithinRange(t.add(1,"month"),void 0,r,"month"),e.isNextYearWithinRange=(t,r)=>e.isWithinRange(t.add(1,"year"),void 0,r,"year"),e.isNextDecadeWithinRange=(t,r)=>{const{endDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).add(1,"year"),void 0,r,"year")}}(A||(A={}));const L=e=>{const t=[e];for(let r=1;r<6;r++){const n=e.add(r,"week");t.push(n)}return t},z=e=>{const t=[];for(let r=0;r<7;r++){const n=e.add(r,"day");t.push(n)}return t},E=[1,3,5,7,8,10,12],_=[4,6,9,11];var W,j,N,Y;!function(e){e.clampDay=(t,r,n)=>{const i=parseInt(t),a=parseInt(r),o=parseInt(n);return 0==i?"1":E.includes(a)?Math.min(i,31).toString():_.includes(a)?Math.min(i,30).toString():2===a?e.isLeapYear(o)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,r="HH:mm")=>{const n=b(e,r);return b(t,r).diff(n,"minute")},e.toDayjs=e=>e?b(e):b()}(W||(W={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:r,minDate:n,maxDate:i}=t;return!!(r&&r.length&&r.includes(e))||(!(!n||!b(e).isBefore(n,"day"))||!(!i||!b(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(b(e).isValid())return e}return""}}(j||(j={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(N||(N={})),function(e){e.transformWithSpaces=(e,t)=>{const r="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const r=Math.floor(t/9);return e.length>=2*r||1===e.split(" ").length&&e.length>r},e.truncateOneLine=(e,t,r,n,i=8)=>{let a=0;t>r&&(a=Math.floor((t-r)/i));const o=n+a;if(o<e.length){const t=Math.floor(o/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.getTextWidth=(t,r)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=r;return n.measureText(t).width}}(Y||(Y={}));var T=Array.isArray,R="object"==typeof y&&y&&y.Object===Object&&y,P="object"==typeof self&&self&&self.Object===Object&&self,I=R||P||Function("return this")(),V=I.Symbol,Z=V,X=Object.prototype,U=X.hasOwnProperty,G=X.toString,J=Z?Z.toStringTag:void 0;var q=function(e){var t=U.call(e,J),r=e[J];try{e[J]=void 0;var n=!0}catch(e){}var i=G.call(e);return n&&(t?e[J]=r:delete e[J]),i},Q=Object.prototype.toString;var K=q,ee=function(e){return Q.call(e)},te=V?V.toStringTag:void 0;var re=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":te&&te in Object(e)?K(e):ee(e)};var ne=re,ie=function(e){return null!=e&&"object"==typeof e};var ae=function(e){return"symbol"==typeof e||ie(e)&&"[object Symbol]"==ne(e)},oe=T,se=ae,le=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ce=/^\w*$/;var de=function(e,t){if(oe(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!se(e))||(ce.test(e)||!le.test(e)||null!=t&&e in Object(t))};var ue=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},he=re,fe=ue;var ge,pe=function(e){if(!fe(e))return!1;var t=he(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},me=I["__core-js_shared__"],ye=(ge=/[^.]+$/.exec(me&&me.keys&&me.keys.IE_PROTO||""))?"Symbol(src)_1."+ge:"";var $e=function(e){return!!ye&&ye in e},be=Function.prototype.toString;var ve=pe,De=$e,Se=ue,xe=function(e){if(null!=e){try{return be.call(e)}catch(e){}try{return e+""}catch(e){}}return""},we=/^\[object .+?Constructor\]$/,Fe=Function.prototype,Be=Object.prototype,He=Fe.toString,ke=Be.hasOwnProperty,Oe=RegExp("^"+He.call(ke).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Me=function(e){return!(!Se(e)||De(e))&&(ve(e)?Oe:we).test(xe(e))},Ae=function(e,t){return null==e?void 0:e[t]};var Ce=function(e,t){var r=Ae(e,t);return Me(r)?r:void 0},Le=Ce(Object,"create"),ze=Le;var Ee=function(){this.__data__=ze?ze(null):{},this.size=0};var _e=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},We=Le,je=Object.prototype.hasOwnProperty;var Ne=function(e){var t=this.__data__;if(We){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return je.call(t,e)?t[e]:void 0},Ye=Le,Te=Object.prototype.hasOwnProperty;var Re=Le;var Pe=Ee,Ie=_e,Ve=Ne,Ze=function(e){var t=this.__data__;return Ye?void 0!==t[e]:Te.call(t,e)},Xe=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=Re&&void 0===t?"__lodash_hash_undefined__":t,this};function Ue(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Ue.prototype.clear=Pe,Ue.prototype.delete=Ie,Ue.prototype.get=Ve,Ue.prototype.has=Ze,Ue.prototype.set=Xe;var Ge=Ue;var Je=function(){this.__data__=[],this.size=0};var qe=function(e,t){return e===t||e!=e&&t!=t};var Qe=function(e,t){for(var r=e.length;r--;)if(qe(e[r][0],t))return r;return-1},Ke=Qe,et=Array.prototype.splice;var tt=Qe;var rt=Qe;var nt=Qe;var it=Je,at=function(e){var t=this.__data__,r=Ke(t,e);return!(r<0)&&(r==t.length-1?t.pop():et.call(t,r,1),--this.size,!0)},ot=function(e){var t=this.__data__,r=tt(t,e);return r<0?void 0:t[r][1]},st=function(e){return rt(this.__data__,e)>-1},lt=function(e,t){var r=this.__data__,n=nt(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function ct(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}ct.prototype.clear=it,ct.prototype.delete=at,ct.prototype.get=ot,ct.prototype.has=st,ct.prototype.set=lt;var dt=ct,ut=Ce(I,"Map"),ht=Ge,ft=dt,gt=ut;var pt=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var mt=function(e,t){var r=e.__data__;return pt(t)?r["string"==typeof t?"string":"hash"]:r.map},yt=mt;var $t=mt;var bt=mt;var vt=mt;var Dt=function(){this.size=0,this.__data__={hash:new ht,map:new(gt||ft),string:new ht}},St=function(e){var t=yt(this,e).delete(e);return this.size-=t?1:0,t},xt=function(e){return $t(this,e).get(e)},wt=function(e){return bt(this,e).has(e)},Ft=function(e,t){var r=vt(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};function Bt(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Bt.prototype.clear=Dt,Bt.prototype.delete=St,Bt.prototype.get=xt,Bt.prototype.has=wt,Bt.prototype.set=Ft;var Ht=Bt;function kt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],a=r.cache;if(a.has(i))return a.get(i);var o=e.apply(this,n);return r.cache=a.set(i,o)||a,o};return r.cache=new(kt.Cache||Ht),r}kt.Cache=Ht;var Ot=kt;var Mt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,At=/\\(\\)?/g,Ct=function(e){var t=Ot(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Mt,(function(e,r,n,i){t.push(n?i.replace(At,"$1"):r||e)})),t}));var Lt=function(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i},zt=T,Et=ae,_t=V?V.prototype:void 0,Wt=_t?_t.toString:void 0;var jt=function e(t){if("string"==typeof t)return t;if(zt(t))return Lt(t,e)+"";if(Et(t))return Wt?Wt.call(t):"";var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r},Nt=jt;var Yt=T,Tt=de,Rt=Ct,Pt=function(e){return null==e?"":Nt(e)};var It=ae;var Vt=function(e,t){return Yt(e)?e:Tt(e,t)?[e]:Rt(Pt(e))},Zt=function(e){if("string"==typeof e||It(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var Xt=function(e,t){for(var r=0,n=(t=Vt(t,e)).length;null!=e&&r<n;)e=e[Zt(t[r++])];return r&&r==n?e:void 0};var Ut=function(e,t,r){var n=null==e?void 0:Xt(e,t);return void 0===n?r:n};const Gt=(e,t,r)=>t?Ut(r,t)||Ut(e,t):r||e,Jt=(e,t)=>{const r=t||e.defaultValue;return Ut(e.collections,r)};var qt;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(qt||(qt={}));const Qt={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Kt=e=>t=>{const r=t.theme,n=Jt(Qt,r[qt.colorScheme]);return r.options&&r.options.color?Gt(n,e,r.options.color):Gt(n,e)},er={Brand:{1:Kt("Brand.1"),2:Kt("Brand.2"),3:Kt("Brand.3"),4:Kt("Brand.4"),5:Kt("Brand.5"),6:Kt("Brand.6")},Primary:Kt("Primary"),PrimaryDark:Kt("PrimaryDark"),Secondary:Kt("Secondary"),Accent:{Light:{1:Kt("Accent.Light.1"),2:Kt("Accent.Light.2"),3:Kt("Accent.Light.3"),4:Kt("Accent.Light.4"),5:Kt("Accent.Light.5"),6:Kt("Accent.Light.6")},Dark:{1:Kt("Accent.Dark.1"),2:Kt("Accent.Dark.2"),3:Kt("Accent.Dark.3")}},Neutral:{1:Kt("Neutral.1"),2:Kt("Neutral.2"),3:Kt("Neutral.3"),4:Kt("Neutral.4"),5:Kt("Neutral.5"),6:Kt("Neutral.6"),7:Kt("Neutral.7"),8:Kt("Neutral.8")},Validation:{Green:{Text:Kt("Validation.Green.Text"),Icon:Kt("Validation.Green.Icon"),Border:Kt("Validation.Green.Border"),Background:Kt("Validation.Green.Background")},Orange:{Text:Kt("Validation.Orange.Text"),Icon:Kt("Validation.Orange.Icon"),Border:Kt("Validation.Orange.Border"),Background:Kt("Validation.Orange.Background"),Badge:Kt("Validation.Orange.Badge")},Red:{Text:Kt("Validation.Red.Text"),Icon:Kt("Validation.Red.Icon"),Border:Kt("Validation.Red.Border"),Background:Kt("Validation.Red.Background")},Blue:{Text:Kt("Validation.Blue.Text"),Icon:Kt("Validation.Blue.Icon"),Border:Kt("Validation.Blue.Border"),Background:Kt("Validation.Blue.Background")}},Shadow:{Accent:Kt("Shadow.Accent"),Red:Kt("Shadow.Red"),Elevation:Kt("Shadow.Elevation")}},tr={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},rr=e=>Object.keys(tr).reduce(((t,r)=>{const n=tr[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),nr=rr("max-width"),ir=(rr("min-width"),h.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),ar=f`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,or=h.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||er.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${ar} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,sr=h(or)`
    animation-delay: -0.45s;
`,lr=h(or)`
    animation-delay: -0.3s;
`,cr=h(or)`
    animation-delay: -0.15s;
`,dr={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},ur={collections:{base:{D1:{fontFamily:dr.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:dr.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:dr.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:dr.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:dr.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:dr.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:dr.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:dr.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:dr.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:dr.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:dr.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:dr.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:dr.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:dr.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},hr=e=>t=>{const r=t.theme,n=Jt(ur,r[qt.textStyleScheme]);return r.options&&r.options.textStyle?Gt(n,e,r.options.textStyle):Gt(n,e)},fr={D1:{fontFamily:hr("D1.fontFamily"),fontSize:hr("D1.fontSize"),fontWeight:hr("D1.fontWeight"),lineHeight:hr("D1.lineHeight"),letterSpacing:hr("D1.letterSpacing")},D2:{fontFamily:hr("D2.fontFamily"),fontSize:hr("D2.fontSize"),fontWeight:hr("D2.fontWeight"),lineHeight:hr("D2.lineHeight"),letterSpacing:hr("D2.letterSpacing")},D3:{fontFamily:hr("D3.fontFamily"),fontSize:hr("D3.fontSize"),fontWeight:hr("D3.fontWeight"),lineHeight:hr("D3.lineHeight"),letterSpacing:hr("D3.letterSpacing")},D4:{fontFamily:hr("D4.fontFamily"),fontSize:hr("D4.fontSize"),fontWeight:hr("D4.fontWeight"),lineHeight:hr("D4.lineHeight"),letterSpacing:hr("D4.letterSpacing")},DBody:{fontFamily:hr("DBody.fontFamily"),fontSize:hr("DBody.fontSize"),fontWeight:hr("DBody.fontWeight"),lineHeight:hr("DBody.lineHeight"),letterSpacing:hr("DBody.letterSpacing")},H1:{fontFamily:hr("H1.fontFamily"),fontSize:hr("H1.fontSize"),fontWeight:hr("H1.fontWeight"),lineHeight:hr("H1.lineHeight"),letterSpacing:hr("H1.letterSpacing")},H2:{fontFamily:hr("H2.fontFamily"),fontSize:hr("H2.fontSize"),fontWeight:hr("H2.fontWeight"),lineHeight:hr("H2.lineHeight"),letterSpacing:hr("H2.letterSpacing")},H3:{fontFamily:hr("H3.fontFamily"),fontSize:hr("H3.fontSize"),fontWeight:hr("H3.fontWeight"),lineHeight:hr("H3.lineHeight"),letterSpacing:hr("H3.letterSpacing")},H4:{fontFamily:hr("H4.fontFamily"),fontSize:hr("H4.fontSize"),fontWeight:hr("H4.fontWeight"),lineHeight:hr("H4.lineHeight"),letterSpacing:hr("H4.letterSpacing")},H5:{fontFamily:hr("H5.fontFamily"),fontSize:hr("H5.fontSize"),fontWeight:hr("H5.fontWeight"),lineHeight:hr("H5.lineHeight"),letterSpacing:hr("H5.letterSpacing")},H6:{fontFamily:hr("H6.fontFamily"),fontSize:hr("H6.fontSize"),fontWeight:hr("H6.fontWeight"),lineHeight:hr("H6.lineHeight"),letterSpacing:hr("H6.letterSpacing")},Body:{fontFamily:hr("Body.fontFamily"),fontSize:hr("Body.fontSize"),fontWeight:hr("Body.fontWeight"),lineHeight:hr("Body.lineHeight"),letterSpacing:hr("Body.letterSpacing")},BodySmall:{fontFamily:hr("BodySmall.fontFamily"),fontSize:hr("BodySmall.fontSize"),fontWeight:hr("BodySmall.fontWeight"),lineHeight:hr("BodySmall.lineHeight"),letterSpacing:hr("BodySmall.letterSpacing")},XSmall:{fontFamily:hr("XSmall.fontFamily"),fontSize:hr("XSmall.fontSize"),fontWeight:hr("XSmall.fontWeight"),lineHeight:hr("XSmall.lineHeight"),letterSpacing:hr("XSmall.letterSpacing")}},gr=e=>{switch(e){case 700:case"bold":return dr.Bold;case 600:case"semibold":return dr.Semibold;case 300:case"light":return dr.Light;case 400:case"regular":return dr.Regular;default:return""}},pr=(e,t)=>r=>{var n;const i=fr[e].fontFamily(r),a=fr[e].fontWeight(r);return Object.values(dr).includes(i)?g`
                font-family: ${gr(t)||gr(a)||i};
                font-weight: normal !important;
            `:g`
            font-family: ${i};
            font-weight: ${null!==(n=mr(t)||a)&&void 0!==n?n:"normal"};
        `},mr=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},yr=e=>{if(e>0)return g`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},$r=pr,br=(e,t,r=!1)=>n=>{const i=fr[e],a=i.fontSize(n);return g`
            ${pr(e,t)}
            font-size: ${a}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(n)||0}rem !important;
            ${g`
                margin-bottom: ${a*(r?1.05:0)}rem;
            `}
        `},vr=(e=!1,t=!1,r=void 0)=>t?g`
            display: block;
            ${yr(r)}
        `:e?g`
            display: inline;
        `:g`
            display: block;
            ${yr(r)}
        `;var Dr;!function(e){e.D1=h.h1`
        ${e=>g`
                ${br("D1",e.weight,e.paragraph)}
                color: ${er.Neutral[1]};
                ${vr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=h.h1`
        ${e=>g`
                ${br("D2",e.weight,e.paragraph)}
                color: ${er.Neutral[1]};
                ${vr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=h.h1`
        ${e=>g`
                ${br("D3",e.weight,e.paragraph)}
                color: ${er.Neutral[1]};
                ${vr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=h.h1`
        ${e=>g`
                ${br("D4",e.weight,e.paragraph)}
                color: ${er.Neutral[1]};
                ${vr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=h.h1`
        ${e=>g`
                ${br("DBody",e.weight,e.paragraph)}
                color: ${er.Neutral[1]};
                ${vr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=h.h1`
        ${e=>g`
                ${br("H1",e.weight,e.paragraph)}
                color: ${er.Neutral[1]};
                ${vr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=h.h2`
        ${e=>g`
                ${br("H2",e.weight,e.paragraph)}
                color: ${er.Neutral[1]};
                ${vr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=h.h3`
        ${e=>g`
                ${br("H3",e.weight,e.paragraph)}
                color: ${er.Neutral[1]};
                ${vr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=h.h4`
        ${e=>g`
                ${br("H4",e.weight,e.paragraph)}
                color: ${er.Neutral[1]};
                ${vr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=h.h5`
        ${e=>g`
                ${br("H5",e.weight,e.paragraph)}
                color: ${er.Neutral[1]};
                ${vr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=h.h6`
        ${e=>g`
                ${br("H6",e.weight,e.paragraph)}
                color: ${er.Neutral[1]};
                ${vr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=h.p`
        ${e=>g`
                ${br("Body",e.weight,e.paragraph)}
                color: ${er.Neutral[1]};
                ${vr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=h.p`
        ${e=>g`
                ${br("BodySmall",e.weight,e.paragraph)}
                color: ${er.Neutral[1]};
                ${vr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=h.span`
        ${e=>g`
                ${br("XSmall",e.weight,e.paragraph)}
                color: ${er.Neutral[1]};
                ${vr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>wr(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>wr(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Dr||(Dr={}));const Sr=h.a`
    ${e=>g`
            ${br(e.textStyle,e.weight)}
            color: ${er.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${er.Secondary};

                svg {
                    color: ${er.Secondary};
                }
            }
        `}
`,xr=h(p)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,wr=r=>{var{external:n=!1,children:i}=r,a=m(r,["external","children"]);return e(Sr,Object.assign({},a,{children:[i,n&&t(xr,{})]}))};var Fr;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Fr||(Fr={}));const Br=h.button`
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
                    background-color: ${er.Neutral[8](e)};
                    border: 1px solid ${er.Primary(e)};

                    span {
                        color: ${er.Primary(e)};
                    }
                `;case"light":return g`
                    background-color: ${er.Neutral[8](e)};
                    border: 1px solid ${er.Neutral[5](e)};

                    span {
                        color: ${er.Primary(e)};
                    }
                `;case"disabled":return g`
                    background-color: ${er.Neutral[6](e)};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${er.Neutral[3](e)};
                    }
                `;case"link":return g`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${er.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${er.Secondary};
                        }
                    }
                `;default:return g`
                    background-color: ${er.Primary(e)};
                    border: 1px solid transparent;

                    ${nr.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${er.Neutral[8](e)};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?g`
                    height: 2.5rem;
                    span {
                        ${br("H5","semibold")}
                    }

                    ${nr.mobileS} {
                        height: auto;
                    }
                `:g`
                    height: 3rem;
                    span {
                        ${br("H4","semibold")}
                    }

                    ${nr.mobileS} {
                        height: auto;
                    }
                `}
`,Hr=h((({color:r,className:n,size:i=18})=>e(ir,Object.assign({className:n,$size:i,$color:r},{children:[t(or,{id:"inner1",$size:i-2,$borderWidth:2}),t(sr,{id:"inner2",$size:i-2,$borderWidth:2}),t(lr,{id:"inner3",$size:i-2,$borderWidth:2}),t(cr,{id:"inner4",$size:i-2,$borderWidth:2})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t;switch(e.$buttonStyle){case"secondary":case"light":case"link":t=er.Primary(e);break;case"disabled":t=er.Neutral[3](e);break;default:t=er.Neutral[8](e)}return g`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,kr={Default:n.forwardRef(((r,n)=>{const{children:i,disabled:a=!1,loading:o=!1,styleType:s="default"}=r,l=m(r,["children","disabled","loading","styleType"]),c={$buttonStyle:a?"disabled":s,$buttonSizeStyle:"default"};return e(Br,Object.assign({ref:n,"data-testid":l["data-testid"]||"button",disabled:a},c,l,{children:[o&&t(Hr,Object.assign({},c)),t("span",{children:i})]}))})),Small:n.forwardRef(((r,n)=>{const{children:i,disabled:a=!1,loading:o=!1,styleType:s="default"}=r,l=m(r,["children","disabled","loading","styleType"]),c={$buttonStyle:a?"disabled":s,$buttonSizeStyle:"small"};return e(Br,Object.assign({ref:n,"data-testid":l["data-testid"]||"button",disabled:a},c,l,{children:[o&&t(Hr,Object.assign({},c,{size:16})),t("span",{children:i})]}))}))},Or=h.button`
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

    &:active,
    &:focus {
        ${({$outline:e})=>"none"===e&&"outline: none;"}

        ${({$highlight:e})=>e&&g`
                background-color: ${er.Neutral[7]};
            `}
    }
`,Mr=n.forwardRef(((e,r)=>{var{children:n,focusHighlight:i=!0,focusOutline:a="none",type:o="button"}=e,s=m(e,["children","focusHighlight","focusOutline","type"]);return t(Or,Object.assign({ref:r,$outline:a,$highlight:i,type:o},s,{children:n}))})),Ar=g`
    color: ${er.Neutral[3]};
    height: 1rem;
    width: 1rem;
`,Cr=h(d)`
    ${Ar}
`,Lr=h(u)`
    ${Ar}
`,zr=h(c)`
    ${Ar}
    transition: transform 250ms ease-in-out;
    margin-left: 0.5rem;
`,Er=h.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
`,_r=h.div`
    display: flex;
    flex: 1;
    position: relative;
`,Wr=h.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${er.Neutral[8]};

    ${e=>{if(!e.$visible)return g`
                display: none;
            `}}
`,jr=h.div`
    display: flex;
    justify-content: space-between;
    margin: 0 0 0.5rem 0;
`,Nr=h.div`
    display: flex;
`,Yr=h.button`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;

    ${e=>!1===e.$visible?g`
                display: none;
            `:e.$expanded?g`
                ${zr} {
                    transform: rotate(180deg);
                }
            `:void 0}
`,Tr=h.p`
    ${br("H5","regular")}
`,Rr=h.div`
    display: flex;
`,Pr=h(Mr)`
    margin: auto 0;
    padding: 0.75rem;

    :disabled {
        cursor: not-allowed;
    }
`,Ir=h.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;
`,Vr=h(kr.Small)`
    flex: 1;
`,Zr=h.div`
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
`,Xr=h.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: default;
    border-radius: 5rem;
    margin: 0 0.5rem;

    ${e=>e.$interactive?g`
                cursor: pointer;
                &:hover {
                    box-shadow: 0px 0px 4px 1px ${er.Shadow.Accent};
                    border: 1px solid ${er.Accent.Light[1]};
                }
            `:e.$disabledDisplay?g`
                cursor: not-allowed;
            `:void 0}

    ${e=>{switch(e.$variant){case"current-month":return g`
                    background-color: ${er.Accent.Light[6](e)};
                `;case"selected-month":return g`
                    background-color: ${er.Accent.Light[5](e)};
                    border: 1px solid ${er.Primary(e)};
                `}}}
`,Ur=h(Dr.H5)`
    ${e=>{if(e.$disabledDisplay)return g`
                color: ${er.Neutral[4]};
            `;switch(e.$variant){case"current-month":return g`
                    color: ${er.Neutral[3](e)};
                `;case"selected-month":return g`
                    ${br("H5","semibold")}
                    color: ${er.Primary(e)};
                `}}}
`,Gr=({calendarDate:e,currentFocus:r,selectedStartDate:n,selectedEndDate:a,viewCalendarDate:o,type:s,isNewSelection:l,minDate:c,maxDate:d,allowDisabledSelection:u,onMonthSelect:h})=>{const f=i((()=>A.generateMonths(b(e))),[e]),g=e=>{const t="start"===r&&a&&e.isAfter(a,"month")&&l,i="end"===r&&n&&e.isBefore(n,"month")&&l;return t||i},p=e=>{const t=e.format("MMMM"),r=(n=e,!A.isWithinRange(n,c?b(c):void 0,d?b(d):void 0,"month"));var n;const i=o.isSame(e,"month")?"selected-month":b().isSame(e,"month")?"current-month":"default";return{disabledDisplay:r||g(e),interactive:!r||u,month:t,variant:i}};return f.length?t(Zr,Object.assign({$type:s},{children:f.map((e=>{const{disabledDisplay:r,interactive:n,variant:i,month:a}=p(e);return t(Xr,Object.assign({$variant:i,$disabledDisplay:r,$interactive:n,onClick:()=>((e,t)=>{t||h(e)})(e,!n)},{children:t(Ur,Object.assign({weight:"regular",$variant:i,$disabledDisplay:r},{children:a}))}),a)}))})):null},Jr=h.div`
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
`,qr=h.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: default;
    border-radius: 0.5rem;
    margin: 0 0.5rem;

    ${e=>e.$interactive?g`
                cursor: pointer;
                &:hover {
                    box-shadow: 0px 0px 4px 1px ${er.Shadow.Accent};
                    border: 1px solid ${er.Accent.Light[1]};
                }
            `:e.$disabledDisplay?g`
                cursor: not-allowed;
            `:void 0}

    ${e=>{switch(e.$variant){case"current-year":return g`
                    background: ${er.Accent.Light[6](e)};
                `;case"selected-year":return g`
                    background: ${er.Accent.Light[5](e)};
                    border: 1px solid ${er.Primary(e)};
                `}}};
`,Qr=h(Dr.H5)`
    ${e=>{if(e.$disabledDisplay)return g`
                color: ${er.Neutral[4]};
            `;switch(e.$variant){case"current-year":return g`
                    color: ${er.Neutral[3](e)};
                `;case"selected-year":return g`
                    ${br("H5","semibold")}
                    color: ${er.Primary(e)};
                `;case"other-decade":return g`
                    color: ${er.Neutral[4](e)};
                `}}}
`,Kr=({calendarDate:e,currentFocus:r,selectedStartDate:n,selectedEndDate:a,viewCalendarDate:o,type:s,isNewSelection:l,minDate:c,maxDate:d,allowDisabledSelection:u,onYearSelect:h})=>{const f=i((()=>A.generateDecadeOfYears(b(e))),[e]),g=e=>{const t="start"===r&&a&&e.isAfter(a,"year")&&l,i="end"===r&&n&&e.isBefore(n,"year")&&l;return t||i},p=e=>{const t=[0,11].includes(f.indexOf(e)),r=e.year(),n=(i=e,!A.isWithinRange(i,c?b(c):void 0,d?b(d):void 0,"year"));var i;const a=t?"other-decade":o.isSame(e,"year")?"selected-year":b().isSame(e,"year")?"current-year":"default";return{disabledDisplay:n||g(e),interactive:!n||u,year:r,variant:a}};return f.length?t(Jr,Object.assign({$type:s},{children:f.map((e=>{const{disabledDisplay:r,interactive:n,variant:i,year:a}=p(e);return t(qr,Object.assign({$variant:i,$disabledDisplay:r,$interactive:n,onClick:()=>((e,t)=>{t||h(e)})(e,!n)},{children:t(Qr,Object.assign({weight:"regular",$variant:i,$disabledDisplay:r,$interactive:n},{children:a}))}),a)}))})):null},en=n.forwardRef(((n,i)=>{var{children:c,initialCalendarDate:d,type:u,minDate:h,maxDate:f,currentFocus:g,selectedStartDate:p,selectedEndDate:y,selectWithinRange:$,dynamicHeight:v=!1,allowDisabledSelection:D,onCalendarDateChange:S,withButton:x,doneButtonDisabled:w,onDismiss:F,showNavigationHeader:B=!0,getLeftArrowDate:H,getRightArrowDate:k,isLeftArrowDisabled:O,isRightArrowDisabled:M,getMonthHeaderLabel:C,getYearHeaderLabel:L}=n,z=m(n,["children","initialCalendarDate","type","minDate","maxDate","currentFocus","selectedStartDate","selectedEndDate","selectWithinRange","dynamicHeight","allowDisabledSelection","onCalendarDateChange","withButton","doneButtonDisabled","onDismiss","showNavigationHeader","getLeftArrowDate","getRightArrowDate","isLeftArrowDisabled","isRightArrowDisabled","getMonthHeaderLabel","getYearHeaderLabel"]);const[E,_]=a(W.toDayjs(d)),[j,N]=a(W.toDayjs(d)),[Y,T]=a("default"),R=o(null),P=o(null),I=o();s(i,(()=>({defaultView(){T("default")},resetView(){const e=W.toDayjs(d);_(e),N(e),T("default")},setCalendarDate(e){const t=W.toDayjs(e);_(t),N(t)}}))),l((()=>{const e=W.toDayjs(d);_(e),N(e)}),[d]),l((()=>{q(j)}),[j]);const V=()=>{"month-options"!==Y?(T("month-options"),I.current.focus()):(T("default"),_(j))},Z=()=>{"default"!==Y?(T("default"),_(j)):T("year-options")},X=()=>{I.current.focus();const e=H?H(E):E.subtract(1,"month");switch(Y){case"default":N(e),_(e);break;case"month-options":_((e=>e.subtract(1,"year")));break;case"year-options":_((e=>e.subtract(10,"year")))}},U=()=>{I.current.focus();const e=k?k(E):E.add(1,"month");switch(Y){case"default":N(e),_(e);break;case"month-options":_((e=>e.add(1,"year")));break;case"year-options":_((e=>e.add(10,"year")))}},G=e=>{_(e),N(e),x||T("default")},J=()=>{const e=W.toDayjs(d);_(e),N(e),"default"===Y?Q("reset"):T("default")},q=e=>{S&&S(e)},Q=e=>{F&&F(e)},K=()=>{if(!h||D)return!1;const e=b(h);return"month-options"===Y?!A.isPreviousYearWithinRange(E,e):"year-options"===Y?!A.isPreviousDecadeWithinRange(E,e):O?O(E):!A.isPreviousMonthWithinRange(E,e)},ee=()=>{if(!f||D)return!1;const e=b(f);return"month-options"===Y?!A.isNextYearWithinRange(E,e):"year-options"===Y?!A.isNextDecadeWithinRange(E,e):M?M(E):!A.isNextMonthWithinRange(E,e)},te=()=>{if("year-options"===Y){const{beginDecade:e,endDecade:t}=A.getStartEndDecade(E);return`${e} to ${t}`}return L?L(E):E.format("YYYY")},re=()=>{const n=C?C(E):E.format("MMM");return e(r,{children:[e(Yr,Object.assign({type:"button",tabIndex:-1,$expanded:"month-options"===Y,$visible:"default"===Y,id:"month-dropdown",onClick:V},{children:[t(Tr,{children:n}),t(zr,{})]})),e(Yr,Object.assign({type:"button",tabIndex:-1,$expanded:"default"!==Y,id:"year-dropdown",onClick:Z},{children:[t(Tr,{children:te()}),t(zr,{})]}))]})},ne=()=>{switch(Y){case"month-options":return t(Gr,{type:u,calendarDate:E,currentFocus:g,minDate:h,maxDate:f,selectedStartDate:p,selectedEndDate:y,viewCalendarDate:j,isNewSelection:$,onMonthSelect:G,allowDisabledSelection:D});case"year-options":return t(Kr,{type:u,calendarDate:E,currentFocus:g,minDate:h,maxDate:f,selectedStartDate:p,selectedEndDate:y,viewCalendarDate:j,isNewSelection:$,onYearSelect:G,allowDisabledSelection:D});default:return null}};return e(Er,Object.assign({ref:I,tabIndex:-1,"data-id":"calendar-container","data-testid":"calendar-container"},z,{children:[B&&e(jr,Object.assign({"data-id":"calendar-header","data-testid":"calendar-header"},{children:[t(Nr,{children:re()}),e(Rr,{children:[t(Pr,Object.assign({"data-testid":"left-arrow-btn",disabled:K(),focusHighlight:!1,tabIndex:-1,onClick:X},{children:t(Cr,{})})),t(Pr,Object.assign({"data-testid":"right-arrow-btn",disabled:ee(),focusHighlight:!1,tabIndex:-1,onClick:U},{children:t(Lr,{})}))]})]})),t(_r,{children:(()=>{const n="function"==typeof c?c({calendarDate:j,currentView:Y}):c;return e(r,v?{children:["default"===Y&&n,ne()]}:{children:[n,t(Wr,Object.assign({$visible:"default"!==Y},{children:ne()}))]})})()}),(()=>{if(!x)return;const r=!!("default"===Y)&&w;return e(Ir,{children:[t(Vr,Object.assign({ref:P,"data-testid":"cancel-button",styleType:"light",type:"button",onClick:J},{children:"Cancel"})),t(Vr,Object.assign({"data-testid":"done-button",ref:R,type:"button",onClick:()=>{r||(_(j),"default"===Y?Q("confirmed"):T("default"))},disabled:r},{children:"Done"}))]})})()]}))}));h.div`
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
`;const tn=h.div`
    grid-column: 1 / -1;
    display: flex;
`,rn=h.div`
    display: flex;
    position: relative;
    height: 2.5rem;
    align-items: center;
    justify-content: center;
    flex: 1;
`,nn=h.div`
    position: absolute;
    width: 50%;
    height: 100%;

    ${e=>{switch(e.$position){case"left":return g`
                    left: 0;
                `;case"right":return g`
                    right: 0;
                `}}}
`,an=h.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    cursor: default;
    position: absolute;
`,on=h(Dr.H5)`
    ${e=>{const{$disabledDisplay:t,$selected:r,$variant:n}=e;if(t&&r)return g`
                ${br("H5","semibold")};
                color: ${er.Accent.Light[2]};
            `;if(t)return g`
                color: ${er.Neutral[4]};
            `;if(r)return g`
                ${br("H5","semibold")};
                color: ${er.Primary};
            `;switch(n){case"other-month":return g`
                    color: ${er.Neutral[4]};
                `;case"today":return g`
                    color: ${er.Neutral[3]};
                `;case"default":return g`
                    color: ${er.Neutral[1]};
                `}}}
`;h(nn)`
    ${e=>{const{$selected:t}=e;if(t)return g`
                border-top: 1px solid ${er.Accent.Light[4]};
                border-bottom: 1px solid ${er.Accent.Light[4]};
                background-color: ${er.Accent.Light[5]};
            `}}

    ${e=>{const{$hovered:t,$overlap:r}=e;return t?g`
                border-top: 1px dashed ${er.Accent.Light[4]};
                border-bottom: 1px dashed ${er.Accent.Light[4]};
                background-color: ${er.Accent.Light[6]};
            `:r?g`
                background-color: ${er.Accent.Light[4]};
            `:void 0}}
`;const sn=h(an)`
    ${e=>{const{$hovered:t,$selected:r}=e;return r?g`
                background: ${er.Accent.Light[5]};
                border: 1px solid ${er.Primary};
            `:t?g`
                box-shadow: 0px 0px 4px 1px ${er.Shadow.Accent};
                border: 1px solid ${er.Accent.Light[1]};
                background-color: ${er.Neutral[8]};
            `:void 0}}

    ${e=>{const{$interactive:t,$disabledDisplay:r}=e;return t?g`
                cursor: pointer;
                :hover {
                    box-shadow: 0px 0px 4px 1px ${er.Shadow.Accent};
                    border: 1px solid ${er.Accent.Light[1]};
                    background-color: ${er.Neutral[8]};
                }
            `:r?g`
                cursor: not-allowed;
            `:void 0}}

    ${e=>{const{$disabledDisplay:t,$overlap:r,$variant:n}=e;return r?g`
                border: 1px solid ${er.Accent.Light[1]};
                background: ${er.Accent.Light[4]};

                :hover {
                    background: ${er.Accent.Light[4]};
                }
            `:t?g`
                color: ${er.Neutral[4]};
            `:"today"===n?g`
                    background: ${er.Accent.Light[5]};
                `:void 0}}
`;h.div`
    position: relative;
    display: flex;
    align-items: center;
`,h(Mr)`
    z-index: 2;
    position: absolute;
    bottom: 1rem;
    background-color: ${er.Neutral[8]};
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
    color: ${er.Primary};
`,h(d)`
    font-size: 1rem;
    color: ${er.Primary};
`,h.div`
    overflow: hidden;
    flex-grow: 1;
    position: relative;
    height: 5rem;
`,h.div`
    position: relative;
    white-space: nowrap;
    height: 1.25rem;
`,h.div`
    display: flex;
    white-space: nowrap;
`,h.div`
    display: inline-block;
    width: ${44}px;
    height: ${({isHour:e})=>e?"1.25rem":"0.625rem"};
    position: relative;
    border-left: 1px solid ${er.Neutral[4]};
`,h(Dr.XSmall)`
    color: ${er.Neutral[2]};
    position: absolute;
    bottom: 10%;
    left: 10%;
`;const ln=h.div`
    ${e=>"vertical"===e.$type?g`
                display: flex;
                flex-grow: 1;
                align-items: center;
                justify-content: center;
                width: 100%;
                margin: 1px 0px;
            `:g`
                position: absolute;
                height: 3.375rem;
                width: ${e.$width}px;
                left: ${e.$left}px;
            `}
    background-color: ${({$bgColor:e})=>e};
    cursor: ${({$clickable:e})=>e?"pointer":"default"};

    ${e=>"stripes"===e.$styleType&&g`
            background: repeating-linear-gradient(
                135deg,
                ${e.$bgColor2||er.Neutral[5]} 0px,
                ${e.$bgColor2||er.Neutral[5]} 10px,
                ${e.$bgColor} 10px,
                ${e.$bgColor} 20px
            );
        `}
`;h.div`
    position: absolute;
    top: 1.25rem;
    height: 3.375rem;
    z-index: 1;
    border-right: 1px solid ${er.Neutral[4]};
`,h(Dr.XSmall)`
    color: ${e=>e.$color||er.Neutral[3](e)};
    position: absolute;
    bottom: 0;
    padding-left: 4px;
    padding-bottom: 4px;
    max-width: ${({$slotWidth:e})=>`calc(${e}px - 8px)`};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;const cn=h(on)`
    ${e=>{const{$variant:t}=e;if("default"===t)return g`
                    ${$r("H5","semibold")}
                    color: ${er.Neutral[3]};
                `}}
`,dn=h.div`
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    user-select: none;
    margin-bottom: 0.188rem;
`,un=h.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
`,hn=h.div`
    grid-column: 1 / -1;
    display: flex;
    min-height: 7.625rem;
`,fn=h.div`
    ${br("XSmall","semibold")}
    margin: 1rem 0rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 2.5rem;
    color: ${er.Neutral[1]};
    span {
        display: block;
    }
`,gn=h.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 1px;
`;b.extend(H);const pn={id:"1",startTime:"",endTime:"",clickable:!1,styleAttributes:{styleType:"stripes",backgroundColor:"#ECEFEF",backgroundColor2:"#E0E4E5"}},mn=({calendarDate:r,disabledDates:n,selectedDate:a,onSelect:o,minDate:s,maxDate:l,slots:c,enableSelection:d=!0,onSlotClick:u})=>{const h=i((()=>A.generateDaysForCurrentWeek(r)),[r]),f="YYYY-MM-DD",g=e=>{const t=e.format(f),r=(e=>{const t=A.isWithinRange(e,s?b(s):void 0,l?b(l):void 0),r=n&&n.includes(e.format(f));return!t||r})(e),i={},o={};return r&&(i.$disabledDisplay=!0,o.$disabledDisplay=!0),i.$interactive=d&&!r,[a].includes(t)&&(i.$selected=!0,o.$selected=!0),{styleCircleProps:i,styleLabelProps:o}};return e(un,{children:[t(tn,{children:h.map(((e,r)=>{const n="default",{styleCircleProps:i,styleLabelProps:a}=g(e);return t(rn,{children:t(sn,Object.assign({$variant:n,onClick:()=>((e,t)=>{!t&&d&&o(e)})(e,!i.$interactive)},i,{children:t(cn,Object.assign({weight:a.$selected?"semibold":"regular",$variant:n},a,{children:e.format("D")}))}))},`day-${r}`)}))}),h.map(((e,r)=>t(dn,{children:t(Dr.XSmall,Object.assign({weight:"semibold"},{children:b(e).format("ddd")}))},`week-day-${r}`))),t(hn,{children:h.map(((r,n)=>{const i=r.format(f),a=c&&(c[i]?c[i]:[pn]);return t(gn,{children:a&&a.map((r=>{const{id:n,startTime:a,endTime:o,clickable:s=!0,styleAttributes:l}=r,{color:c,styleType:d="default",backgroundColor:h,backgroundColor2:f}=l;return t(ln,Object.assign({$type:"vertical",$styleType:d,$bgColor:h,$bgColor2:f,$clickable:s,onClick:()=>s&&((e,t)=>{u(e,t)})(i,r)},{children:e(fn,Object.assign({style:{color:c}},{children:[t("span",{children:A.convertTo12HourFormat(a)}),o&&a&&t("span",{children:"-"}),t("span",{children:A.convertTo12HourFormat(o)})]}))}),n)}))},`wrapper-${n}`)}))},`week-cell-${r.format(f)}`)]})},yn=h.div`
    min-width: 18.5rem;

    [data-id="calendar-header"] {
        ${nr.mobileL} {
            padding: 0 1.25rem;
        }
    }
`,$n="YYYY-MM-DD",bn=e=>{var{disabledDates:r,onWeekDisplayChange:n,onChange:i,value:s,minDate:c,maxDate:d,slots:u,showNavigationHeader:h=!0,enableSelection:f,onSlotClick:g,currentCalendarDate:p}=e,y=m(e,["disabledDates","onWeekDisplayChange","onChange","value","minDate","maxDate","slots","showNavigationHeader","enableSelection","onSlotClick","currentCalendarDate"]);const[$,v]=a(s),D=o(),S=o(void 0);l((()=>{v(s)}),[s]);const x=e=>{const t=e.format($n);v(t),i&&i(t)},w=(e,t)=>{g&&g(e,t)},F=e=>{if(n){const t={week:{firstDayOfWeek:e.startOf("week").format($n),lastDayOfWeek:e.endOf("week").format($n)},month:e.month()+1,year:e.year()};n(t)}};return t(yn,Object.assign({},y,{children:t(en,Object.assign({ref:D,type:"standalone",dynamicHeight:!0,initialCalendarDate:W.toDayjs($||p).endOf("week").format($n),selectedStartDate:$,getLeftArrowDate:e=>e.subtract(1,"week"),getRightArrowDate:e=>e.add(1,"week"),isLeftArrowDisabled:e=>c&&b(e).subtract(1,"week").isBefore(c,"week"),isRightArrowDisabled:e=>d&&b(e).add(1,"week").isAfter(d,"week"),onCalendarDateChange:e=>{S.current&&S.current.isSame(e,"week")||F(e),S.current=e},showNavigationHeader:h,minDate:c,maxDate:d,getMonthHeaderLabel:e=>b(e).endOf("week").format("MMM"),getYearHeaderLabel:e=>b(e).endOf("week").format("YYYY")},{children:({calendarDate:e})=>t(mn,{calendarDate:e,disabledDates:r,selectedDate:$,minDate:c,maxDate:d,onSelect:x,slots:u,enableSelection:f,onSlotClick:w})}))}))};export{bn as TimeSlotWeekView};
//# sourceMappingURL=index.js.map
