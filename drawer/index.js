import{jsx as t,jsxs as e}from"react/jsx-runtime";import{CrossIcon as n}from"@lifesg/react-icons/cross";import r,{useState as i,useRef as a,useEffect as o}from"react";import s from"react-dom";import l,{css as c}from"styled-components";import{ExternalIcon as u}from"@lifesg/react-icons/external";function d(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}"function"==typeof SuppressedError&&SuppressedError;var h="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function f(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var g={exports:{}};g.exports=function(){var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},e=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,a={},o=function(t){return(t=+t)+(t>68?1900:2e3)},s=function(t){return function(e){this[t]=+e}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(t){(this.zone||(this.zone={})).offset=function(t){if(!t)return 0;if("Z"===t)return 0;var e=t.match(/([+-]|\d\d)/g),n=60*e[1]+(+e[2]||0);return 0===n?0:"+"===e[0]?-n:n}(t)}],c=function(t){var e=a[t];return e&&(e.indexOf?e:e.s.concat(e.f))},u=function(t,e){var n,r=a.meridiem;if(r){for(var i=1;i<=24;i+=1)if(t.indexOf(r(i,0,e))>-1){n=i>12;break}}else n=t===(e?"pm":"PM");return n},d={A:[i,function(t){this.afternoon=u(t,!1)}],a:[i,function(t){this.afternoon=u(t,!0)}],S:[/\d/,function(t){this.milliseconds=100*+t}],SS:[n,function(t){this.milliseconds=10*+t}],SSS:[/\d{3}/,function(t){this.milliseconds=+t}],s:[r,s("seconds")],ss:[r,s("seconds")],m:[r,s("minutes")],mm:[r,s("minutes")],H:[r,s("hours")],h:[r,s("hours")],HH:[r,s("hours")],hh:[r,s("hours")],D:[r,s("day")],DD:[n,s("day")],Do:[i,function(t){var e=a.ordinal,n=t.match(/\d+/);if(this.day=n[0],e)for(var r=1;r<=31;r+=1)e(r).replace(/\[|\]/g,"")===t&&(this.day=r)}],M:[r,s("month")],MM:[n,s("month")],MMM:[i,function(t){var e=c("months"),n=(c("monthsShort")||e.map((function(t){return t.slice(0,3)}))).indexOf(t)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(t){var e=c("months").indexOf(t)+1;if(e<1)throw new Error;this.month=e%12||e}],Y:[/[+-]?\d+/,s("year")],YY:[n,function(t){this.year=o(t)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(n){var r,i;r=n,i=a&&a.formats;for(var o=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(e,n,r){var a=r&&r.toUpperCase();return n||i[r]||t[r]||i[a].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(t,e,n){return e||n.slice(1)}))}))).match(e),s=o.length,l=0;l<s;l+=1){var c=o[l],u=d[c],h=u&&u[0],f=u&&u[1];o[l]=f?{regex:h,parser:f}:c.replace(/^\[|\]$/g,"")}return function(t){for(var e={},n=0,r=0;n<s;n+=1){var i=o[n];if("string"==typeof i)r+=i.length;else{var a=i.regex,l=i.parser,c=t.slice(r),u=a.exec(c)[0];l.call(e,u),t=t.replace(u,"")}}return function(t){var e=t.afternoon;if(void 0!==e){var n=t.hours;e?n<12&&(t.hours+=12):12===n&&(t.hours=0),delete t.afternoon}}(e),e}}return function(t,e,n){n.p.customParseFormat=!0,t&&t.parseTwoDigitYear&&(o=t.parseTwoDigitYear);var r=e.prototype,i=r.parse;r.parse=function(t){var e=t.date,r=t.utc,o=t.args;this.$u=r;var s=o[1];if("string"==typeof s){var l=!0===o[2],c=!0===o[3],u=l||c,d=o[2];c&&(d=o[2]),a=this.$locale(),!l&&d&&(a=n.Ls[d]),this.$d=function(t,e,n){try{if(["x","X"].indexOf(e)>-1)return new Date(("X"===e?1e3:1)*t);var r=h(e)(t),i=r.year,a=r.month,o=r.day,s=r.hours,l=r.minutes,c=r.seconds,u=r.milliseconds,d=r.zone,f=new Date,g=o||(i||a?1:f.getDate()),p=i||f.getFullYear(),m=0;i&&!a||(m=a>0?a-1:f.getMonth());var y=s||0,F=l||0,v=c||0,D=u||0;return d?new Date(Date.UTC(p,m,g,y,F,v,D+60*d.offset*1e3)):n?new Date(Date.UTC(p,m,g,y,F,v,D)):new Date(p,m,g,y,F,v,D)}catch(t){return new Date("")}}(e,s,r),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&e!=this.format(s)&&(this.$d=new Date("")),a={}}else if(s instanceof Array)for(var f=s.length,g=1;g<=f;g+=1){o[1]=s[g-1];var p=n.apply(this,o);if(p.isValid()){this.$d=p.$d,this.$L=p.$L,this.init();break}g===f&&(this.$d=new Date(""))}else i.call(this,t)}}}();var p,m,y=f(g.exports),F={exports:{}},v=f(F.exports=(p={year:0,month:1,day:2,hour:3,minute:4,second:5},m={},function(t,e,n){var r,i=function(t,e,n){void 0===n&&(n={});var r=new Date(t),i=function(t,e){void 0===e&&(e={});var n=e.timeZoneName||"short",r=t+"|"+n,i=m[r];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:t,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),m[r]=i),i}(e,n);return i.formatToParts(r)},a=function(t,e){for(var r=i(t,e),a=[],o=0;o<r.length;o+=1){var s=r[o],l=s.type,c=s.value,u=p[l];u>=0&&(a[u]=parseInt(c,10))}var d=a[3],h=24===d?0:d,f=a[0]+"-"+a[1]+"-"+a[2]+" "+h+":"+a[4]+":"+a[5]+":000",g=+t;return(n.utc(f).valueOf()-(g-=g%1e3))/6e4},o=e.prototype;o.tz=function(t,e){void 0===t&&(t=r);var i=this.utcOffset(),a=this.toDate(),o=a.toLocaleString("en-US",{timeZone:t}),s=Math.round((a-new Date(o))/1e3/60),l=n(o,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(a.getTimezoneOffset()/15)-s,!0);if(e){var c=l.utcOffset();l=l.add(i-c,"minute")}return l.$x.$timezone=t,l},o.offsetName=function(t){var e=this.$x.$timezone||n.tz.guess(),r=i(this.valueOf(),e,{timeZoneName:t}).find((function(t){return"timezonename"===t.type.toLowerCase()}));return r&&r.value};var s=o.startOf;o.startOf=function(t,e){if(!this.$x||!this.$x.$timezone)return s.call(this,t,e);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(r,t,e).tz(this.$x.$timezone,!0)},n.tz=function(t,e,i){var o=i&&e,s=i||e||r,l=a(+n(),s);if("string"!=typeof t)return n(t).tz(s);var c=function(t,e,n){var r=t-60*e*1e3,i=a(r,n);if(e===i)return[r,e];var o=a(r-=60*(i-e)*1e3,n);return i===o?[r,i]:[t-60*Math.min(i,o)*1e3,Math.max(i,o)]}(n.utc(t,o).valueOf(),l,s),u=c[0],d=c[1],h=n(u).utcOffset(d);return h.$x.$timezone=s,h},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(t){r=t}})),D={exports:{}};D.exports=function(){var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",a="minute",o="hour",s="day",l="week",c="month",u="quarter",d="year",h="date",f="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},y=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},F={s:y,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+y(r,2,"0")+":"+y(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),a=n-i<0,o=e.clone().add(r+(a?-1:1),c);return+(-(r+(n-i)/(a?i-o:o-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:d,w:l,d:s,D:h,h:o,m:a,s:i,ms:r,Q:u}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},v="en",D={};D[v]=m;var $="$isDayjsObject",S=function(t){return t instanceof x||!(!t||!t[$])},b=function t(e,n,r){var i;if(!e)return v;if("string"==typeof e){var a=e.toLowerCase();D[a]&&(i=a),n&&(D[a]=n,i=a);var o=e.split("-");if(!i&&o.length>1)return t(o[0])}else{var s=e.name;D[s]=e,i=s}return!r&&i&&(v=i),i||!r&&v},B=function(t,e){if(S(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new x(n)},w=F;w.l=b,w.i=S,w.w=function(t,e){return B(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var x=function(){function m(t){this.$L=b(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[$]=!0}var y=m.prototype;return y.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(w.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(g);if(r){var i=r[2]-1||0,a=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)}}return new Date(e)}(t),this.init()},y.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},y.$utils=function(){return w},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(t,e){var n=B(t);return this.startOf(e)<=n&&n<=this.endOf(e)},y.isAfter=function(t,e){return B(t)<this.startOf(e)},y.isBefore=function(t,e){return this.endOf(e)<B(t)},y.$g=function(t,e,n){return w.u(t)?this[e]:this.set(n,t)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(t,e){var n=this,r=!!w.u(e)||e,u=w.p(t),f=function(t,e){var i=w.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(s)},g=function(t,e){return w.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},p=this.$W,m=this.$M,y=this.$D,F="set"+(this.$u?"UTC":"");switch(u){case d:return r?f(1,0):f(31,11);case c:return r?f(1,m):f(0,m+1);case l:var v=this.$locale().weekStart||0,D=(p<v?p+7:p)-v;return f(r?y-D:y+(6-D),m);case s:case h:return g(F+"Hours",0);case o:return g(F+"Minutes",1);case a:return g(F+"Seconds",2);case i:return g(F+"Milliseconds",3);default:return this.clone()}},y.endOf=function(t){return this.startOf(t,!1)},y.$set=function(t,e){var n,l=w.p(t),u="set"+(this.$u?"UTC":""),f=(n={},n[s]=u+"Date",n[h]=u+"Date",n[c]=u+"Month",n[d]=u+"FullYear",n[o]=u+"Hours",n[a]=u+"Minutes",n[i]=u+"Seconds",n[r]=u+"Milliseconds",n)[l],g=l===s?this.$D+(e-this.$W):e;if(l===c||l===d){var p=this.clone().set(h,1);p.$d[f](g),p.init(),this.$d=p.set(h,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f](g);return this.init(),this},y.set=function(t,e){return this.clone().$set(t,e)},y.get=function(t){return this[w.p(t)]()},y.add=function(r,u){var h,f=this;r=Number(r);var g=w.p(u),p=function(t){var e=B(f);return w.w(e.date(e.date()+Math.round(t*r)),f)};if(g===c)return this.set(c,this.$M+r);if(g===d)return this.set(d,this.$y+r);if(g===s)return p(1);if(g===l)return p(7);var m=(h={},h[a]=e,h[o]=n,h[i]=t,h)[g]||1,y=this.$d.getTime()+r*m;return w.w(y,this)},y.subtract=function(t,e){return this.add(-1*t,e)},y.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=w.z(this),a=this.$H,o=this.$m,s=this.$M,l=n.weekdays,c=n.months,u=n.meridiem,d=function(t,n,i,a){return t&&(t[n]||t(e,r))||i[n].slice(0,a)},h=function(t){return w.s(a%12||12,t,"0")},g=u||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(p,(function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return w.s(e.$y,4,"0");case"M":return s+1;case"MM":return w.s(s+1,2,"0");case"MMM":return d(n.monthsShort,s,c,3);case"MMMM":return d(c,s);case"D":return e.$D;case"DD":return w.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return d(n.weekdaysMin,e.$W,l,2);case"ddd":return d(n.weekdaysShort,e.$W,l,3);case"dddd":return l[e.$W];case"H":return String(a);case"HH":return w.s(a,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return g(a,o,!0);case"A":return g(a,o,!1);case"m":return String(o);case"mm":return w.s(o,2,"0");case"s":return String(e.$s);case"ss":return w.s(e.$s,2,"0");case"SSS":return w.s(e.$ms,3,"0");case"Z":return i}return null}(t)||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,h,f){var g,p=this,m=w.p(h),y=B(r),F=(y.utcOffset()-this.utcOffset())*e,v=this-y,D=function(){return w.m(p,y)};switch(m){case d:g=D()/12;break;case c:g=D();break;case u:g=D()/3;break;case l:g=(v-F)/6048e5;break;case s:g=(v-F)/864e5;break;case o:g=v/n;break;case a:g=v/e;break;case i:g=v/t;break;default:g=v}return f?g:w.a(g)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return D[this.$L]},y.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=b(t,e,!0);return r&&(n.$L=r),n},y.clone=function(){return w.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),H=x.prototype;return B.prototype=H,[["$ms",r],["$s",i],["$m",a],["$H",o],["$W",s],["$M",c],["$y",d],["$D",h]].forEach((function(t){H[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),B.extend=function(t,e){return t.$i||(t(e,x,B),t.$i=!0),B},B.locale=b,B.isDayjs=S,B.unix=function(t){return B(1e3*t)},B.en=D[v],B.Ls=D,B.p={},B}();var $=f(D.exports),S={exports:{}};S.exports=function(t,e,n){e.prototype.isBetween=function(t,e,r,i){var a=n(t),o=n(e),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(a,r):!this.isBefore(a,r))&&(l?this.isBefore(o,r):!this.isAfter(o,r))||(s?this.isBefore(a,r):!this.isAfter(a,r))&&(l?this.isAfter(o,r):!this.isBefore(o,r))}};var b=f(S.exports),B={exports:{}};B.exports=function(t,e){e.prototype.isSameOrBefore=function(t,e){return this.isSame(t,e)||this.isBefore(t,e)}};var w=f(B.exports),x={exports:{}};x.exports=function(t,e){e.prototype.isSameOrAfter=function(t,e){return this.isSame(t,e)||this.isAfter(t,e)}};var H,O=f(x.exports);$.extend(b),$.extend(w),$.extend(O),$.extend(y),$.extend(v),function(t){t.generateDays=t=>{const e=t.startOf("month"),n=$(e).startOf("week");return E(n).map((t=>M(t)))},t.generateDaysForCurrentWeek=t=>{const e=t.startOf("week");return M(e)},t.generateMonths=t=>{const e=[];for(let n=0;n<12;n++){const r=t.month(n);e.push($(r))}return e},t.generateDecadeOfYears=t=>{const e=t.year(),n=10*Math.floor(e/10),r=t.year(n),i=[r.subtract(1,"year"),r];for(let t=1;t<11;t++)i.push(r.add(t,"year"));return i},t.getStartEndDecade=t=>{const e=10*Math.floor(+t.format("YYYY")/10);return{beginDecade:e,endDecade:+$(`${e+9}-01-01`).format("YYYY")}},t.convertTo12HourFormat=t=>{const e=$(t,"HH:mm");return e.isValid()?e.format("h:mm a"):""},t.isWithinRange=(t,e,n,r="day")=>!e&&!n||(e&&n?t.isBetween(e,n,r,"[]"):e?t.isSameOrAfter(e,r):t.isSameOrBefore(n,r)),t.isPreviousMonthWithinRange=(e,n)=>t.isWithinRange(e.subtract(1,"month"),n,void 0,"month"),t.isPreviousYearWithinRange=(e,n)=>t.isWithinRange(e.subtract(1,"year"),n,void 0,"year"),t.isPreviousDecadeWithinRange=(e,n)=>{const{beginDecade:r}=t.getStartEndDecade(e);return t.isWithinRange(e.year(r).subtract(1,"year"),n,void 0,"year")},t.isNextMonthWithinRange=(e,n)=>t.isWithinRange(e.add(1,"month"),void 0,n,"month"),t.isNextYearWithinRange=(e,n)=>t.isWithinRange(e.add(1,"year"),void 0,n,"year"),t.isNextDecadeWithinRange=(e,n)=>{const{endDecade:r}=t.getStartEndDecade(e);return t.isWithinRange(e.year(r).add(1,"year"),void 0,n,"year")},t.getWeekStartEnd=t=>({start:t.startOf("week").format("YYYY-MM-DD"),end:t.endOf("week").format("YYYY-MM-DD")}),t.getFixedRangeStartEnd=(t,e)=>({start:t.format("YYYY-MM-DD"),end:t.add(e-1,"day").format("YYYY-MM-DD")}),t.isDisabledDay=(e,n,r,i)=>{const a=t.isWithinRange(e,r?$(r):void 0,i?$(i):void 0),o=n&&n.includes(e.format("YYYY-MM-DD"));return!a||!!o}}(H||(H={}));const E=t=>{const e=[t];for(let n=1;n<6;n++){const r=t.add(n,"week");e.push(r)}return e},M=t=>{const e=[];for(let n=0;n<7;n++){const r=t.add(n,"day");e.push(r)}return e},k=[1,3,5,7,8,10,12],A=[4,6,9,11];var _,C,z,Y;!function(t){t.clampDay=(e,n,r)=>{const i=parseInt(e),a=parseInt(n),o=parseInt(r);return 0==i?"1":k.includes(a)?Math.min(i,31).toString():A.includes(a)?Math.min(i,30).toString():2===a?t.isLeapYear(o)?Math.min(i,29).toString():Math.min(i,28).toString():e},t.clampMonth=t=>{const e=parseInt(t);return 0==e?"1":e>12?"12":t},t.isLeapYear=t=>t%4==0&&t%100!=0||t%400==0,t.getTimeDiffInMinutes=(t,e,n="HH:mm")=>{const r=$(t,n);return $(e,n).diff(r,"minute")},t.toDayjs=t=>t?$(t):$(),t.addMinutesToTime=(t,e,n="HH:mm")=>$(t,n).add(e,"minutes").format(n)}(_||(_={})),function(t){t.isDateDisabled=(t,e)=>{const{disabledDates:n,minDate:r,maxDate:i}=e;return!!(n&&n.length&&n.includes(t))||(!(!r||!$(t).isBefore(r,"day"))||!(!i||!$(t).isAfter(i,"day")))},t.sanitizeInput=t=>{if(t){if($(t).isValid())return t}return""}}(C||(C={})),function(t){t.generate=()=>Math.random().toString(36).substring(2,9)}(z||(z={})),function(t){t.transformWithSpaces=(t,e)=>{const n="(.{"+e+"})";return t.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},t.padValue=(t,e)=>{if("0"===t)return e?t:t.padStart(2,"0");if(""===t)return t;return parseInt(t).toString().padStart(2,"0")},t.shouldTruncateToTwoLines=(t,e)=>{const n=Math.floor(e/9);return t.length>=2*n||1===t.split(" ").length&&t.length>n},t.truncateOneLine=(t,e,n,r,i=8)=>{let a=0;e>n&&(a=Math.floor((e-n)/i));const o=r+a;if(o<t.length){const e=Math.floor(o/2);return t.substring(0,e)+" ... "+t.substring(t.length-e,t.length)}return t},t.getTextWidth=(e,n)=>{if("undefined"==typeof document)return 0;const r=(t.getTextWidth.canvas||(t.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(e).width},t.maskValue=(t,n)=>{if(!t)return t;const{maskRange:r,unmaskRange:i,maskChar:a="•",maskRegex:o,maskTransformer:s}=n;if(s)return s(t);if(o)return t.replace(o,a);if(r){const{startIndex:n,endIndex:i}=e(r[0],r[1]);return t.substring(0,n)+a.repeat(t.substring(n,i+1).length)+t.substring(i+1)}if(i){const{startIndex:n,endIndex:r}=e(i[0],i[1]);return a.repeat(t.substring(0,n).length)+t.substring(n,r+1)+a.repeat(t.substring(r+1).length)}return t};const e=(t,e)=>t<e?{startIndex:t,endIndex:e}:{startIndex:e,endIndex:t}}(Y||(Y={}));const T=l.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 0;
    width: 0;
    visibility: hidden;
    z-index: ${t=>t.zIndex||(t.$stacked?99999:99998)};

    ${t=>{if(t.$show)return c`
                height: 100%;
                width: 100vw;
                visibility: visible;
            `}}
`,L=l.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(5, 1, 1, ${t=>t.$backgroundOpacity});
    backdrop-filter: ${t=>(t=>{let e="";return t&&(e+="blur(10px)"),e.length>0?e:"none"})(t.$backgroundBlur)};
    transition: opacity 200ms ease;

    ${t=>{let e="";return t.$show?e+=c`
                visibility: visible;
                opacity: 1;
                pointer-events: auto;
                height: 100%;
                width: 100vw;
            `:e+=c`
                visibility: hidden;
                opacity: 0;
                transition-delay: ${t.$disableTransition?"0ms":"400ms"};
                pointer-events: none;
                height: 0;
                width: 0;
            `,t.$disableTransition&&(e+=c`
                transition: none;
            `),e}}
`,W=({show:e=!1,rootId:n,onOverlayClick:l,children:c,backgroundOpacity:u,backgroundBlur:d=!0,disableTransition:h=!1,enableOverlayClick:f=!1,zIndex:g,id:p})=>{const[m,y]=i(null),[F,v]=i(),[D]=i((()=>z.generate())),$=a(),S=a(null),b=c&&r.cloneElement(c,{ref:S}),B=p?`lifesg-ds-overlay-root-${p}`:"lifesg-ds-overlay-root";o((()=>(O(),y(x()),()=>{A(),M().length<1&&E("remove")})),[]),o((()=>{if(e){const t=H();w(t),k();const e=setTimeout((()=>{E("add")}),200);return()=>clearTimeout(e)}{A();const t=setTimeout((()=>{M().length<1&&E("remove")}),200);return()=>clearTimeout(t)}}),[e]);const w=t=>{$.current=t,v(t)},x=()=>document&&n?document.getElementById(n):document?document.body:null,H=()=>M().length>0,O=()=>{if(!document.getElementById(I)){const t=document.createElement("style");t.id=I;const e=document.documentElement.clientWidth,n=window.innerWidth-e;t.innerHTML=`\n\t\t\t\t.${j} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${n}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${j}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(t)}},E=t=>{const e=document.body.classList.contains(j);"add"!==t||e?"remove"===t&&e&&document.body.classList.remove(j):document.body.classList.add(j)},M=()=>{const t=document.body.dataset.lifesgDsOverlayOrder;return t?t.split(","):[]},k=()=>{const t=M();document.body.dataset.lifesgDsOverlayOrder=[...t,D].join(",")},A=()=>{const t=M();document.body.dataset.lifesgDsOverlayOrder=t.filter((t=>t!==D)).join(",")},_=t=>{var e;const n=null===(e=S.current)||void 0===e?void 0:e.firstChild;n&&n.contains(t.target)||l&&f&&(t.preventDefault(),l())};return m?s.createPortal(t(T,Object.assign({id:B,"data-testid":B,$show:e,zIndex:g,$stacked:F},{children:c&&t(L,Object.assign({"data-testid":"overlay-wrapper",$show:e,$backgroundOpacity:u||(F?.5:.8),$backgroundBlur:d,$disableTransition:h,$enableOverlayClick:f,onClick:_},{children:b}))})),m):null},I="lifesg-ds-overlay-stylesheet",j="lifesg-ds-overlay-open";var R=Array.isArray,V="object"==typeof h&&h&&h.Object===Object&&h,P="object"==typeof self&&self&&self.Object===Object&&self,N=V||P||Function("return this")(),Z=N.Symbol,U=Z,X=Object.prototype,G=X.hasOwnProperty,J=X.toString,q=U?U.toStringTag:void 0;var Q=function(t){var e=G.call(t,q),n=t[q];try{t[q]=void 0;var r=!0}catch(t){}var i=J.call(t);return r&&(e?t[q]=n:delete t[q]),i},K=Object.prototype.toString;var tt=Q,et=function(t){return K.call(t)},nt=Z?Z.toStringTag:void 0;var rt=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":nt&&nt in Object(t)?tt(t):et(t)};var it=rt,at=function(t){return null!=t&&"object"==typeof t};var ot=function(t){return"symbol"==typeof t||at(t)&&"[object Symbol]"==it(t)},st=R,lt=ot,ct=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ut=/^\w*$/;var dt=function(t,e){if(st(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!lt(t))||(ut.test(t)||!ct.test(t)||null!=e&&t in Object(e))};var ht=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},ft=rt,gt=ht;var pt,mt=function(t){if(!gt(t))return!1;var e=ft(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},yt=N["__core-js_shared__"],Ft=(pt=/[^.]+$/.exec(yt&&yt.keys&&yt.keys.IE_PROTO||""))?"Symbol(src)_1."+pt:"";var vt=function(t){return!!Ft&&Ft in t},Dt=Function.prototype.toString;var $t=mt,St=vt,bt=ht,Bt=function(t){if(null!=t){try{return Dt.call(t)}catch(t){}try{return t+""}catch(t){}}return""},wt=/^\[object .+?Constructor\]$/,xt=Function.prototype,Ht=Object.prototype,Ot=xt.toString,Et=Ht.hasOwnProperty,Mt=RegExp("^"+Ot.call(Et).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var kt=function(t){return!(!bt(t)||St(t))&&($t(t)?Mt:wt).test(Bt(t))},At=function(t,e){return null==t?void 0:t[e]};var _t=function(t,e){var n=At(t,e);return kt(n)?n:void 0},Ct=_t(Object,"create"),zt=Ct;var Yt=function(){this.__data__=zt?zt(null):{},this.size=0};var Tt=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},Lt=Ct,Wt=Object.prototype.hasOwnProperty;var It=function(t){var e=this.__data__;if(Lt){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return Wt.call(e,t)?e[t]:void 0},jt=Ct,Rt=Object.prototype.hasOwnProperty;var Vt=Ct;var Pt=Yt,Nt=Tt,Zt=It,Ut=function(t){var e=this.__data__;return jt?void 0!==e[t]:Rt.call(e,t)},Xt=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=Vt&&void 0===e?"__lodash_hash_undefined__":e,this};function Gt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Gt.prototype.clear=Pt,Gt.prototype.delete=Nt,Gt.prototype.get=Zt,Gt.prototype.has=Ut,Gt.prototype.set=Xt;var Jt=Gt;var qt=function(){this.__data__=[],this.size=0};var Qt=function(t,e){return t===e||t!=t&&e!=e};var Kt=function(t,e){for(var n=t.length;n--;)if(Qt(t[n][0],e))return n;return-1},te=Kt,ee=Array.prototype.splice;var ne=Kt;var re=Kt;var ie=Kt;var ae=qt,oe=function(t){var e=this.__data__,n=te(e,t);return!(n<0)&&(n==e.length-1?e.pop():ee.call(e,n,1),--this.size,!0)},se=function(t){var e=this.__data__,n=ne(e,t);return n<0?void 0:e[n][1]},le=function(t){return re(this.__data__,t)>-1},ce=function(t,e){var n=this.__data__,r=ie(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};function ue(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}ue.prototype.clear=ae,ue.prototype.delete=oe,ue.prototype.get=se,ue.prototype.has=le,ue.prototype.set=ce;var de=ue,he=_t(N,"Map"),fe=Jt,ge=de,pe=he;var me=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var ye=function(t,e){var n=t.__data__;return me(e)?n["string"==typeof e?"string":"hash"]:n.map},Fe=ye;var ve=ye;var De=ye;var $e=ye;var Se=function(){this.size=0,this.__data__={hash:new fe,map:new(pe||ge),string:new fe}},be=function(t){var e=Fe(this,t).delete(t);return this.size-=e?1:0,e},Be=function(t){return ve(this,t).get(t)},we=function(t){return De(this,t).has(t)},xe=function(t,e){var n=$e(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function He(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}He.prototype.clear=Se,He.prototype.delete=be,He.prototype.get=Be,He.prototype.has=we,He.prototype.set=xe;var Oe=He;function Ee(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],a=n.cache;if(a.has(i))return a.get(i);var o=t.apply(this,r);return n.cache=a.set(i,o)||a,o};return n.cache=new(Ee.Cache||Oe),n}Ee.Cache=Oe;var Me=Ee;var ke=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ae=/\\(\\)?/g,_e=function(t){var e=Me(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(ke,(function(t,n,r,i){e.push(r?i.replace(Ae,"$1"):n||t)})),e}));var Ce=function(t,e){for(var n=-1,r=null==t?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i},ze=R,Ye=ot,Te=Z?Z.prototype:void 0,Le=Te?Te.toString:void 0;var We=function t(e){if("string"==typeof e)return e;if(ze(e))return Ce(e,t)+"";if(Ye(e))return Le?Le.call(e):"";var n=e+"";return"0"==n&&1/e==-1/0?"-0":n},Ie=We;var je=R,Re=dt,Ve=_e,Pe=function(t){return null==t?"":Ie(t)};var Ne=ot;var Ze=function(t,e){return je(t)?t:Re(t,e)?[t]:Ve(Pe(t))},Ue=function(t){if("string"==typeof t||Ne(t))return t;var e=t+"";return"0"==e&&1/t==-1/0?"-0":e};var Xe=function(t,e){for(var n=0,r=(e=Ze(e,t)).length;null!=t&&n<r;)t=t[Ue(e[n++])];return n&&n==r?t:void 0};var Ge=f((function(t,e,n){var r=null==t?void 0:Xe(t,e);return void 0===r?n:r}));const Je=(t,e,n)=>e?Ge(n,e)||Ge(t,e):n||t,qe=(t,e)=>{const n=e||t.defaultValue;return Ge(t.collections,n)};var Qe;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme",t.designTokenScheme="designTokenScheme",t.resourceScheme="resourceScheme"}(Qe||(Qe={}));const Ke={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},tn=t=>e=>{const n=e.theme,r=qe(Ke,n[Qe.colorScheme]);return n.options&&n.options.color?Je(r,t,n.options.color):Je(r,t)},en=(tn("Brand.1"),tn("Brand.2"),tn("Brand.3"),tn("Brand.4"),tn("Brand.5"),tn("Brand.6"),tn("Primary")),nn=(tn("PrimaryDark"),tn("Secondary")),rn=(tn("Accent.Light.1"),tn("Accent.Light.2"),tn("Accent.Light.3"),tn("Accent.Light.4"),tn("Accent.Light.5"),tn("Accent.Light.6"),tn("Accent.Dark.1"),tn("Accent.Dark.2"),tn("Accent.Dark.3"),{1:tn("Neutral.1"),2:tn("Neutral.2"),3:tn("Neutral.3"),4:tn("Neutral.4"),5:tn("Neutral.5"),6:tn("Neutral.6"),7:tn("Neutral.7"),8:tn("Neutral.8")}),an=(tn("Validation.Green.Text"),tn("Validation.Green.Icon"),tn("Validation.Green.Border"),tn("Validation.Green.Background"),tn("Validation.Orange.Text"),tn("Validation.Orange.Icon"),tn("Validation.Orange.Border"),tn("Validation.Orange.Background"),tn("Validation.Orange.Badge"),tn("Validation.Red.Text"),tn("Validation.Red.Icon"),tn("Validation.Red.Border"),tn("Validation.Red.Background"),tn("Validation.Blue.Text"),tn("Validation.Blue.Icon"),tn("Validation.Blue.Border"),tn("Validation.Blue.Background"),tn("Shadow.Accent"),tn("Shadow.Red"),tn("Shadow.Elevation"),{mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840}),on=t=>Object.keys(an).reduce(((e,n)=>{const r=an[n];return e[n]=`@media screen and (${t}: ${r}px)`,e}),{}),sn=on("max-width"),ln=(on("min-width"),l.button`
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
        ${({$outline:t})=>"none"===t&&"outline: none;"}

        ${({$highlight:t})=>t&&c`
                background-color: ${rn[7]};
            `}
    }
`),cn=r.forwardRef(((e,n)=>{var{children:r,focusHighlight:i=!0,focusOutline:a="none",type:o="button"}=e,s=d(e,["children","focusHighlight","focusOutline","type"]);return t(ln,Object.assign({ref:n,$outline:a,$highlight:i,type:o},s,{children:r}))})),un={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},dn={collections:{base:{D1:{fontFamily:un.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:un.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:un.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:un.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:un.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:un.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:un.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:un.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:un.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:un.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:un.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:un.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:un.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:un.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},hn=t=>e=>{const n=e.theme,r=qe(dn,n[Qe.textStyleScheme]);return n.options&&n.options.textStyle?Je(r,t,n.options.textStyle):Je(r,t)},fn={D1:{fontFamily:hn("D1.fontFamily"),fontSize:hn("D1.fontSize"),fontWeight:hn("D1.fontWeight"),lineHeight:hn("D1.lineHeight"),letterSpacing:hn("D1.letterSpacing")},D2:{fontFamily:hn("D2.fontFamily"),fontSize:hn("D2.fontSize"),fontWeight:hn("D2.fontWeight"),lineHeight:hn("D2.lineHeight"),letterSpacing:hn("D2.letterSpacing")},D3:{fontFamily:hn("D3.fontFamily"),fontSize:hn("D3.fontSize"),fontWeight:hn("D3.fontWeight"),lineHeight:hn("D3.lineHeight"),letterSpacing:hn("D3.letterSpacing")},D4:{fontFamily:hn("D4.fontFamily"),fontSize:hn("D4.fontSize"),fontWeight:hn("D4.fontWeight"),lineHeight:hn("D4.lineHeight"),letterSpacing:hn("D4.letterSpacing")},DBody:{fontFamily:hn("DBody.fontFamily"),fontSize:hn("DBody.fontSize"),fontWeight:hn("DBody.fontWeight"),lineHeight:hn("DBody.lineHeight"),letterSpacing:hn("DBody.letterSpacing")},H1:{fontFamily:hn("H1.fontFamily"),fontSize:hn("H1.fontSize"),fontWeight:hn("H1.fontWeight"),lineHeight:hn("H1.lineHeight"),letterSpacing:hn("H1.letterSpacing")},H2:{fontFamily:hn("H2.fontFamily"),fontSize:hn("H2.fontSize"),fontWeight:hn("H2.fontWeight"),lineHeight:hn("H2.lineHeight"),letterSpacing:hn("H2.letterSpacing")},H3:{fontFamily:hn("H3.fontFamily"),fontSize:hn("H3.fontSize"),fontWeight:hn("H3.fontWeight"),lineHeight:hn("H3.lineHeight"),letterSpacing:hn("H3.letterSpacing")},H4:{fontFamily:hn("H4.fontFamily"),fontSize:hn("H4.fontSize"),fontWeight:hn("H4.fontWeight"),lineHeight:hn("H4.lineHeight"),letterSpacing:hn("H4.letterSpacing")},H5:{fontFamily:hn("H5.fontFamily"),fontSize:hn("H5.fontSize"),fontWeight:hn("H5.fontWeight"),lineHeight:hn("H5.lineHeight"),letterSpacing:hn("H5.letterSpacing")},H6:{fontFamily:hn("H6.fontFamily"),fontSize:hn("H6.fontSize"),fontWeight:hn("H6.fontWeight"),lineHeight:hn("H6.lineHeight"),letterSpacing:hn("H6.letterSpacing")},Body:{fontFamily:hn("Body.fontFamily"),fontSize:hn("Body.fontSize"),fontWeight:hn("Body.fontWeight"),lineHeight:hn("Body.lineHeight"),letterSpacing:hn("Body.letterSpacing")},BodySmall:{fontFamily:hn("BodySmall.fontFamily"),fontSize:hn("BodySmall.fontSize"),fontWeight:hn("BodySmall.fontWeight"),lineHeight:hn("BodySmall.lineHeight"),letterSpacing:hn("BodySmall.letterSpacing")},XSmall:{fontFamily:hn("XSmall.fontFamily"),fontSize:hn("XSmall.fontSize"),fontWeight:hn("XSmall.fontWeight"),lineHeight:hn("XSmall.lineHeight"),letterSpacing:hn("XSmall.letterSpacing")}},gn=t=>{switch(t){case 700:case"bold":return un.Bold;case 600:case"semibold":return un.Semibold;case 300:case"light":return un.Light;case 400:case"regular":return un.Regular;default:return""}},pn=(t,e)=>n=>{var r;const i=fn[t].fontFamily(n),a=fn[t].fontWeight(n);return Object.values(un).includes(i)?c`
                font-family: ${gn(e)||gn(a)||i};
                font-weight: normal !important;
            `:c`
            font-family: ${i};
            font-weight: ${null!==(r=mn(e)||a)&&void 0!==r?r:"normal"};
        `},mn=t=>{switch(t){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},yn=t=>{if(t>0)return c`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${t};
            line-clamp: ${t};
            overflow: hidden;
        `},Fn=(t,e,n=!1)=>r=>{const i=fn[t],a=i.fontSize(r);return c`
            ${pn(t,e)}
            font-size: ${a}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${c`
                margin-bottom: ${a*(n?1.05:0)}rem;
            `}
        `},vn=(t=!1,e=!1,n=void 0)=>e?c`
            display: block;
            ${yn(n)}
        `:t?c`
            display: inline;
        `:c`
            display: block;
            ${yn(n)}
        `;var Dn;!function(t){t.D1=l.h1`
        ${t=>c`
                ${Fn("D1",t.weight,t.paragraph)}
                color: ${rn[1]};
                ${vn(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.D2=l.h1`
        ${t=>c`
                ${Fn("D2",t.weight,t.paragraph)}
                color: ${rn[1]};
                ${vn(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.D3=l.h1`
        ${t=>c`
                ${Fn("D3",t.weight,t.paragraph)}
                color: ${rn[1]};
                ${vn(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.D4=l.h1`
        ${t=>c`
                ${Fn("D4",t.weight,t.paragraph)}
                color: ${rn[1]};
                ${vn(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.DBody=l.h1`
        ${t=>c`
                ${Fn("DBody",t.weight,t.paragraph)}
                color: ${rn[1]};
                ${vn(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H1=l.h1`
        ${t=>c`
                ${Fn("H1",t.weight,t.paragraph)}
                color: ${rn[1]};
                ${vn(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H2=l.h2`
        ${t=>c`
                ${Fn("H2",t.weight,t.paragraph)}
                color: ${rn[1]};
                ${vn(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H3=l.h3`
        ${t=>c`
                ${Fn("H3",t.weight,t.paragraph)}
                color: ${rn[1]};
                ${vn(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H4=l.h4`
        ${t=>c`
                ${Fn("H4",t.weight,t.paragraph)}
                color: ${rn[1]};
                ${vn(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H5=l.h5`
        ${t=>c`
                ${Fn("H5",t.weight,t.paragraph)}
                color: ${rn[1]};
                ${vn(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H6=l.h6`
        ${t=>c`
                ${Fn("H6",t.weight,t.paragraph)}
                color: ${rn[1]};
                ${vn(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.Body=l.p`
        ${t=>c`
                ${Fn("Body",t.weight,t.paragraph)}
                color: ${rn[1]};
                ${vn(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.BodySmall=l.p`
        ${t=>c`
                ${Fn("BodySmall",t.weight,t.paragraph)}
                color: ${rn[1]};
                ${vn(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.XSmall=l.span`
        ${t=>c`
                ${Fn("XSmall",t.weight,t.paragraph)}
                color: ${rn[1]};
                ${vn(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.Hyperlink={Default:t=>bn(Object.assign(Object.assign({},t),{textStyle:"Body"})),Small:t=>bn(Object.assign(Object.assign({},t),{textStyle:"BodySmall"}))}}(Dn||(Dn={}));const $n=l.a`
    ${t=>c`
            ${Fn(t.textStyle,t.weight)}
            color: ${en};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${nn};

                svg {
                    color: ${nn};
                }
            }
        `}
`,Sn=l(u)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,bn=n=>{var{external:r=!1,children:i}=n,a=d(n,["external","children"]);return e($n,Object.assign({},a,{children:[i,r&&t(Sn,{})]}))};var Bn;!function(t){t[t.Subpage=0]="Subpage",t[t.Domain=1]="Domain"}(Bn||(Bn={}));const wn=l.div`
    position: fixed;
    top: 0;

    display: flex;
    flex-direction: column;
    height: 100%;

    background-color: ${rn[8]};
    box-shadow: 0px 2px 12px rgba(104, 104, 104, 0.25);

    visibility: ${t=>t.$show?"visible":"hidden"};
    ${t=>t.$show?c`
            right: 0;
            transition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);
            transition-delay: 200ms;
        `:c`
        right: -100%;
        transition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);
    `}

    width: 40%;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    overflow: hidden;

    ${sn.desktopL} {
        width: 50%;
        min-width: 700px;
    }

    ${sn.tablet} {
        width: 100%;
        min-width: unset;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
`,xn=l.div`
    top: 0;

    display: flex;
    align-items: center;
    gap: 1rem;
    height: 5rem;
    padding: 2rem 1rem 1rem;
    background-color: ${rn[8]};
    border-bottom: 1px solid ${rn[5]};

    ${sn.tablet} {
        gap: 0.5rem;
        padding: 2rem 1.25rem 1rem;
    }
`,Hn=l(cn)`
    color: ${rn[3]};
    padding: 0;
    order: -1; // show button on the left of the header

    :active,
    :focus {
        color: ${en};
    }

    svg {
        height: 2rem;
        width: 2rem;
    }
`,On=l(Dn.H2)`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`,En=l.div`
    flex: 1;
    overflow-y: auto;
`,Mn=r=>{var{children:s,heading:l,show:c,onClose:u,onOverlayClick:h}=r,f=d(r,["children","heading","show","onClose","onOverlayClick"]);const[g,p]=i(c),[m]=i((()=>z.generate())),y=a();o((()=>{if(!c){const t=setTimeout((()=>p(!1)),500);return()=>clearTimeout(t)}p(!0)}),[c]);return t(W,Object.assign({show:g,enableOverlayClick:!0,onOverlayClick:h},{children:e(wn,Object.assign({$show:c,"data-testid":"drawer",onClick:t=>{t.stopPropagation()},role:"dialog","aria-labelledby":m,onTransitionEnd:t=>{"visibility"===t.propertyName&&c&&y.current.focus()}},f,{children:[e(xn,{children:[t(On,Object.assign({id:m,ref:y,tabIndex:-1},{children:l})),t(Hn,Object.assign({"aria-label":"Close drawer",onClick:u,focusHighlight:!1},{children:t(n,{"aria-hidden":!0})}))]}),t(En,{children:s})]}))}))};export{Mn as Drawer};
//# sourceMappingURL=index.js.map