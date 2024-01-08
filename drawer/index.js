import{jsx as t,jsxs as e}from"react/jsx-runtime";import{CrossIcon as n}from"@lifesg/react-icons/cross";import r,{useState as i,useRef as o,useEffect as a}from"react";import s from"react-dom";import l,{css as c}from"styled-components";import{ExternalIcon as u}from"@lifesg/react-icons/external";function d(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}var h="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},f={exports:{}};f.exports=function(){var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},e=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},a=function(t){return(t=+t)+(t>68?1900:2e3)},s=function(t){return function(e){this[t]=+e}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(t){(this.zone||(this.zone={})).offset=function(t){if(!t)return 0;if("Z"===t)return 0;var e=t.match(/([+-]|\d\d)/g),n=60*e[1]+(+e[2]||0);return 0===n?0:"+"===e[0]?-n:n}(t)}],c=function(t){var e=o[t];return e&&(e.indexOf?e:e.s.concat(e.f))},u=function(t,e){var n,r=o.meridiem;if(r){for(var i=1;i<=24;i+=1)if(t.indexOf(r(i,0,e))>-1){n=i>12;break}}else n=t===(e?"pm":"PM");return n},d={A:[i,function(t){this.afternoon=u(t,!1)}],a:[i,function(t){this.afternoon=u(t,!0)}],S:[/\d/,function(t){this.milliseconds=100*+t}],SS:[n,function(t){this.milliseconds=10*+t}],SSS:[/\d{3}/,function(t){this.milliseconds=+t}],s:[r,s("seconds")],ss:[r,s("seconds")],m:[r,s("minutes")],mm:[r,s("minutes")],H:[r,s("hours")],h:[r,s("hours")],HH:[r,s("hours")],hh:[r,s("hours")],D:[r,s("day")],DD:[n,s("day")],Do:[i,function(t){var e=o.ordinal,n=t.match(/\d+/);if(this.day=n[0],e)for(var r=1;r<=31;r+=1)e(r).replace(/\[|\]/g,"")===t&&(this.day=r)}],M:[r,s("month")],MM:[n,s("month")],MMM:[i,function(t){var e=c("months"),n=(c("monthsShort")||e.map((function(t){return t.slice(0,3)}))).indexOf(t)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(t){var e=c("months").indexOf(t)+1;if(e<1)throw new Error;this.month=e%12||e}],Y:[/[+-]?\d+/,s("year")],YY:[n,function(t){this.year=a(t)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(n){var r,i;r=n,i=o&&o.formats;for(var a=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(e,n,r){var o=r&&r.toUpperCase();return n||i[r]||t[r]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(t,e,n){return e||n.slice(1)}))}))).match(e),s=a.length,l=0;l<s;l+=1){var c=a[l],u=d[c],h=u&&u[0],f=u&&u[1];a[l]=f?{regex:h,parser:f}:c.replace(/^\[|\]$/g,"")}return function(t){for(var e={},n=0,r=0;n<s;n+=1){var i=a[n];if("string"==typeof i)r+=i.length;else{var o=i.regex,l=i.parser,c=t.slice(r),u=o.exec(c)[0];l.call(e,u),t=t.replace(u,"")}}return function(t){var e=t.afternoon;if(void 0!==e){var n=t.hours;e?n<12&&(t.hours+=12):12===n&&(t.hours=0),delete t.afternoon}}(e),e}}return function(t,e,n){n.p.customParseFormat=!0,t&&t.parseTwoDigitYear&&(a=t.parseTwoDigitYear);var r=e.prototype,i=r.parse;r.parse=function(t){var e=t.date,r=t.utc,a=t.args;this.$u=r;var s=a[1];if("string"==typeof s){var l=!0===a[2],c=!0===a[3],u=l||c,d=a[2];c&&(d=a[2]),o=this.$locale(),!l&&d&&(o=n.Ls[d]),this.$d=function(t,e,n){try{if(["x","X"].indexOf(e)>-1)return new Date(("X"===e?1e3:1)*t);var r=h(e)(t),i=r.year,o=r.month,a=r.day,s=r.hours,l=r.minutes,c=r.seconds,u=r.milliseconds,d=r.zone,f=new Date,g=a||(i||o?1:f.getDate()),p=i||f.getFullYear(),m=0;i&&!o||(m=o>0?o-1:f.getMonth());var y=s||0,v=l||0,F=c||0,$=u||0;return d?new Date(Date.UTC(p,m,g,y,v,F,$+60*d.offset*1e3)):n?new Date(Date.UTC(p,m,g,y,v,F,$)):new Date(p,m,g,y,v,F,$)}catch(t){return new Date("")}}(e,s,r),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&e!=this.format(s)&&(this.$d=new Date("")),o={}}else if(s instanceof Array)for(var f=s.length,g=1;g<=f;g+=1){a[1]=s[g-1];var p=n.apply(this,a);if(p.isValid()){this.$d=p.$d,this.$L=p.$L,this.init();break}g===f&&(this.$d=new Date(""))}else i.call(this,t)}}}();var g,p,m=f.exports,y={exports:{}},v=y.exports=(g={year:0,month:1,day:2,hour:3,minute:4,second:5},p={},function(t,e,n){var r,i=function(t,e,n){void 0===n&&(n={});var r=new Date(t),i=function(t,e){void 0===e&&(e={});var n=e.timeZoneName||"short",r=t+"|"+n,i=p[r];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:t,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),p[r]=i),i}(e,n);return i.formatToParts(r)},o=function(t,e){for(var r=i(t,e),o=[],a=0;a<r.length;a+=1){var s=r[a],l=s.type,c=s.value,u=g[l];u>=0&&(o[u]=parseInt(c,10))}var d=o[3],h=24===d?0:d,f=o[0]+"-"+o[1]+"-"+o[2]+" "+h+":"+o[4]+":"+o[5]+":000",p=+t;return(n.utc(f).valueOf()-(p-=p%1e3))/6e4},a=e.prototype;a.tz=function(t,e){void 0===t&&(t=r);var i=this.utcOffset(),o=this.toDate(),a=o.toLocaleString("en-US",{timeZone:t}),s=Math.round((o-new Date(a))/1e3/60),l=n(a).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-s,!0);if(e){var c=l.utcOffset();l=l.add(i-c,"minute")}return l.$x.$timezone=t,l},a.offsetName=function(t){var e=this.$x.$timezone||n.tz.guess(),r=i(this.valueOf(),e,{timeZoneName:t}).find((function(t){return"timezonename"===t.type.toLowerCase()}));return r&&r.value};var s=a.startOf;a.startOf=function(t,e){if(!this.$x||!this.$x.$timezone)return s.call(this,t,e);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return s.call(r,t,e).tz(this.$x.$timezone,!0)},n.tz=function(t,e,i){var a=i&&e,s=i||e||r,l=o(+n(),s);if("string"!=typeof t)return n(t).tz(s);var c=function(t,e,n){var r=t-60*e*1e3,i=o(r,n);if(e===i)return[r,e];var a=o(r-=60*(i-e)*1e3,n);return i===a?[r,i]:[t-60*Math.min(i,a)*1e3,Math.max(i,a)]}(n.utc(t,a).valueOf(),l,s),u=c[0],d=c[1],h=n(u).utcOffset(d);return h.$x.$timezone=s,h},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(t){r=t}}),F={exports:{}};F.exports=function(){var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",o="minute",a="hour",s="day",l="week",c="month",u="quarter",d="year",h="date",f="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},y=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},v={s:y,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+y(r,2,"0")+":"+y(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),o=n-i<0,a=e.clone().add(r+(o?-1:1),c);return+(-(r+(n-i)/(o?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:d,w:l,d:s,D:h,h:a,m:o,s:i,ms:r,Q:u}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},F="en",$={};$[F]=m;var D=function(t){return t instanceof w},S=function t(e,n,r){var i;if(!e)return F;if("string"==typeof e){var o=e.toLowerCase();$[o]&&(i=o),n&&($[o]=n,i=o);var a=e.split("-");if(!i&&a.length>1)return t(a[0])}else{var s=e.name;$[s]=e,i=s}return!r&&i&&(F=i),i||!r&&F},b=function(t,e){if(D(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new w(n)},B=v;B.l=S,B.i=D,B.w=function(t,e){return b(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var w=function(){function m(t){this.$L=S(t.locale,null,!0),this.parse(t)}var y=m.prototype;return y.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(B.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(g);if(r){var i=r[2]-1||0,o=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},y.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},y.$utils=function(){return B},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(t,e){var n=b(t);return this.startOf(e)<=n&&n<=this.endOf(e)},y.isAfter=function(t,e){return b(t)<this.startOf(e)},y.isBefore=function(t,e){return this.endOf(e)<b(t)},y.$g=function(t,e,n){return B.u(t)?this[e]:this.set(n,t)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(t,e){var n=this,r=!!B.u(e)||e,u=B.p(t),f=function(t,e){var i=B.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(s)},g=function(t,e){return B.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},p=this.$W,m=this.$M,y=this.$D,v="set"+(this.$u?"UTC":"");switch(u){case d:return r?f(1,0):f(31,11);case c:return r?f(1,m):f(0,m+1);case l:var F=this.$locale().weekStart||0,$=(p<F?p+7:p)-F;return f(r?y-$:y+(6-$),m);case s:case h:return g(v+"Hours",0);case a:return g(v+"Minutes",1);case o:return g(v+"Seconds",2);case i:return g(v+"Milliseconds",3);default:return this.clone()}},y.endOf=function(t){return this.startOf(t,!1)},y.$set=function(t,e){var n,l=B.p(t),u="set"+(this.$u?"UTC":""),f=(n={},n[s]=u+"Date",n[h]=u+"Date",n[c]=u+"Month",n[d]=u+"FullYear",n[a]=u+"Hours",n[o]=u+"Minutes",n[i]=u+"Seconds",n[r]=u+"Milliseconds",n)[l],g=l===s?this.$D+(e-this.$W):e;if(l===c||l===d){var p=this.clone().set(h,1);p.$d[f](g),p.init(),this.$d=p.set(h,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f](g);return this.init(),this},y.set=function(t,e){return this.clone().$set(t,e)},y.get=function(t){return this[B.p(t)]()},y.add=function(r,u){var h,f=this;r=Number(r);var g=B.p(u),p=function(t){var e=b(f);return B.w(e.date(e.date()+Math.round(t*r)),f)};if(g===c)return this.set(c,this.$M+r);if(g===d)return this.set(d,this.$y+r);if(g===s)return p(1);if(g===l)return p(7);var m=(h={},h[o]=e,h[a]=n,h[i]=t,h)[g]||1,y=this.$d.getTime()+r*m;return B.w(y,this)},y.subtract=function(t,e){return this.add(-1*t,e)},y.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=B.z(this),o=this.$H,a=this.$m,s=this.$M,l=n.weekdays,c=n.months,u=function(t,n,i,o){return t&&(t[n]||t(e,r))||i[n].slice(0,o)},d=function(t){return B.s(o%12||12,t,"0")},h=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},g={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:B.s(s+1,2,"0"),MMM:u(n.monthsShort,s,c,3),MMMM:u(c,s),D:this.$D,DD:B.s(this.$D,2,"0"),d:String(this.$W),dd:u(n.weekdaysMin,this.$W,l,2),ddd:u(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(o),HH:B.s(o,2,"0"),h:d(1),hh:d(2),a:h(o,a,!0),A:h(o,a,!1),m:String(a),mm:B.s(a,2,"0"),s:String(this.$s),ss:B.s(this.$s,2,"0"),SSS:B.s(this.$ms,3,"0"),Z:i};return r.replace(p,(function(t,e){return e||g[t]||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,h,f){var g,p=B.p(h),m=b(r),y=(m.utcOffset()-this.utcOffset())*e,v=this-m,F=B.m(this,m);return F=(g={},g[d]=F/12,g[c]=F,g[u]=F/3,g[l]=(v-y)/6048e5,g[s]=(v-y)/864e5,g[a]=v/n,g[o]=v/e,g[i]=v/t,g)[p]||v,f?F:B.a(F)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return $[this.$L]},y.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},y.clone=function(){return B.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),x=w.prototype;return b.prototype=x,[["$ms",r],["$s",i],["$m",o],["$H",a],["$W",s],["$M",c],["$y",d],["$D",h]].forEach((function(t){x[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),b.extend=function(t,e){return t.$i||(t(e,w,b),t.$i=!0),b},b.locale=S,b.isDayjs=D,b.unix=function(t){return b(1e3*t)},b.en=$[F],b.Ls=$,b.p={},b}();var $=F.exports,D={exports:{}};D.exports=function(t,e,n){e.prototype.isBetween=function(t,e,r,i){var o=n(t),a=n(e),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(o,r):!this.isBefore(o,r))&&(l?this.isBefore(a,r):!this.isAfter(a,r))||(s?this.isBefore(o,r):!this.isAfter(o,r))&&(l?this.isAfter(a,r):!this.isBefore(a,r))}};var S=D.exports,b={exports:{}};b.exports=function(t,e){e.prototype.isSameOrBefore=function(t,e){return this.isSame(t,e)||this.isBefore(t,e)}};var B=b.exports,w={exports:{}};w.exports=function(t,e){e.prototype.isSameOrAfter=function(t,e){return this.isSame(t,e)||this.isAfter(t,e)}};var x,H=w.exports;$.extend(S),$.extend(B),$.extend(H),$.extend(m),$.extend(v),function(t){t.generateDays=t=>{const e=t.startOf("month"),n=$(e).startOf("week");return O(n).map((t=>M(t)))},t.generateDaysForCurrentWeek=t=>{const e=t.startOf("week");return M(e)},t.generateMonths=t=>{const e=[];for(let n=0;n<12;n++){const r=t.month(n);e.push($(r))}return e},t.generateDecadeOfYears=t=>{const e=t.year(),n=10*Math.floor(e/10),r=t.year(n),i=[r.subtract(1,"year"),r];for(let t=1;t<11;t++)i.push(r.add(t,"year"));return i},t.getStartEndDecade=t=>{const e=10*Math.floor(+t.format("YYYY")/10);return{beginDecade:e,endDecade:+$(`${e+9}-01-01`).format("YYYY")}},t.convertTo12HourFormat=t=>{const e=$(t,"HH:mm");return e.isValid()?e.format("h:mm a"):""},t.isWithinRange=(t,e,n,r="day")=>!e&&!n||(e&&n?t.isBetween(e,n,r,"[]"):e?t.isSameOrAfter(e,r):t.isSameOrBefore(n,r)),t.isPreviousMonthWithinRange=(e,n)=>t.isWithinRange(e.subtract(1,"month"),n,void 0,"month"),t.isPreviousYearWithinRange=(e,n)=>t.isWithinRange(e.subtract(1,"year"),n,void 0,"year"),t.isPreviousDecadeWithinRange=(e,n)=>{const{beginDecade:r}=t.getStartEndDecade(e);return t.isWithinRange(e.year(r).subtract(1,"year"),n,void 0,"year")},t.isNextMonthWithinRange=(e,n)=>t.isWithinRange(e.add(1,"month"),void 0,n,"month"),t.isNextYearWithinRange=(e,n)=>t.isWithinRange(e.add(1,"year"),void 0,n,"year"),t.isNextDecadeWithinRange=(e,n)=>{const{endDecade:r}=t.getStartEndDecade(e);return t.isWithinRange(e.year(r).add(1,"year"),void 0,n,"year")},t.getWeekStartEnd=t=>({start:t.startOf("week").format("YYYY-MM-DD"),end:t.endOf("week").format("YYYY-MM-DD")}),t.getFixedRangeStartEnd=(t,e)=>({start:t.format("YYYY-MM-DD"),end:t.add(e-1,"day").format("YYYY-MM-DD")}),t.isDisabledDay=(e,n,r,i)=>{const o=t.isWithinRange(e,r?$(r):void 0,i?$(i):void 0),a=n&&n.includes(e.format("YYYY-MM-DD"));return!o||!!a}}(x||(x={}));const O=t=>{const e=[t];for(let n=1;n<6;n++){const r=t.add(n,"week");e.push(r)}return e},M=t=>{const e=[];for(let n=0;n<7;n++){const r=t.add(n,"day");e.push(r)}return e},E=[1,3,5,7,8,10,12],A=[4,6,9,11];var _,k,z,Y;!function(t){t.clampDay=(e,n,r)=>{const i=parseInt(e),o=parseInt(n),a=parseInt(r);return 0==i?"1":E.includes(o)?Math.min(i,31).toString():A.includes(o)?Math.min(i,30).toString():2===o?t.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():e},t.clampMonth=t=>{const e=parseInt(t);return 0==e?"1":e>12?"12":t},t.isLeapYear=t=>t%4==0&&t%100!=0||t%400==0,t.getTimeDiffInMinutes=(t,e,n="HH:mm")=>{const r=$(t,n);return $(e,n).diff(r,"minute")},t.toDayjs=t=>t?$(t):$()}(_||(_={})),function(t){t.isDateDisabled=(t,e)=>{const{disabledDates:n,minDate:r,maxDate:i}=e;return!!(n&&n.length&&n.includes(t))||(!(!r||!$(t).isBefore(r,"day"))||!(!i||!$(t).isAfter(i,"day")))},t.sanitizeInput=t=>{if(t){if($(t).isValid())return t}return""}}(k||(k={})),function(t){t.generate=()=>Math.random().toString(36).substring(2,9)}(z||(z={})),function(t){t.transformWithSpaces=(t,e)=>{const n="(.{"+e+"})";return t.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},t.padValue=(t,e)=>{if("0"===t)return e?t:t.padStart(2,"0");if(""===t)return t;return parseInt(t).toString().padStart(2,"0")},t.shouldTruncateToTwoLines=(t,e)=>{const n=Math.floor(e/9);return t.length>=2*n||1===t.split(" ").length&&t.length>n},t.truncateOneLine=(t,e,n,r,i=8)=>{let o=0;e>n&&(o=Math.floor((e-n)/i));const a=r+o;if(a<t.length){const e=Math.floor(a/2);return t.substring(0,e)+" ... "+t.substring(t.length-e,t.length)}return t},t.getTextWidth=(e,n)=>{if("undefined"==typeof document)return 0;const r=(t.getTextWidth.canvas||(t.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(e).width}}(Y||(Y={}));const C=l.div`
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
`,T=l.div`
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
`,W=({show:e=!1,rootId:n,onOverlayClick:l,children:c,backgroundOpacity:u,backgroundBlur:d=!0,disableTransition:h=!1,enableOverlayClick:f=!1,zIndex:g,id:p})=>{const[m,y]=i(null),[v,F]=i(),[$]=i((()=>z.generate())),D=o(),S=o(null),b=c&&r.cloneElement(c,{ref:S}),B=p?`lifesg-ds-overlay-root-${p}`:"lifesg-ds-overlay-root";a((()=>(O(),y(x()),()=>{_(),E().length<1&&M("remove")})),[]),a((()=>{if(e){const t=H();w(t),A();const e=setTimeout((()=>{M("add")}),200);return()=>clearTimeout(e)}{_();const t=setTimeout((()=>{E().length<1&&M("remove")}),200);return()=>clearTimeout(t)}}),[e]);const w=t=>{D.current=t,F(t)},x=()=>document&&n?document.getElementById(n):document?document.body:null,H=()=>E().length>0,O=()=>{if(!document.getElementById(L)){const t=document.createElement("style");t.id=L;const e=document.documentElement.clientWidth,n=window.innerWidth-e;t.innerHTML=`\n\t\t\t\t.${j} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${n}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${j}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(t)}},M=t=>{const e=document.body.classList.contains(j);"add"!==t||e?"remove"===t&&e&&document.body.classList.remove(j):document.body.classList.add(j)},E=()=>{const t=document.body.dataset.lifesgDsOverlayOrder;return t?t.split(","):[]},A=()=>{const t=E();document.body.dataset.lifesgDsOverlayOrder=[...t,$].join(",")},_=()=>{const t=E();document.body.dataset.lifesgDsOverlayOrder=t.filter((t=>t!==$)).join(",")},k=t=>{var e;const n=null===(e=S.current)||void 0===e?void 0:e.firstChild;n&&n.contains(t.target)||l&&f&&(t.preventDefault(),l())};return m?s.createPortal(t(C,Object.assign({id:B,"data-testid":B,$show:e,zIndex:g,$stacked:v},{children:c&&t(T,Object.assign({"data-testid":"overlay-wrapper",$show:e,$backgroundOpacity:u||(v?.5:.8),$backgroundBlur:d,$disableTransition:h,$enableOverlayClick:f,onClick:k},{children:b}))})),m):null},L="lifesg-ds-overlay-stylesheet",j="lifesg-ds-overlay-open";var I=Array.isArray,R="object"==typeof h&&h&&h.Object===Object&&h,V="object"==typeof self&&self&&self.Object===Object&&self,P=R||V||Function("return this")(),N=P.Symbol,Z=N,U=Object.prototype,X=U.hasOwnProperty,G=U.toString,J=Z?Z.toStringTag:void 0;var q=function(t){var e=X.call(t,J),n=t[J];try{t[J]=void 0;var r=!0}catch(t){}var i=G.call(t);return r&&(e?t[J]=n:delete t[J]),i},Q=Object.prototype.toString;var K=q,tt=function(t){return Q.call(t)},et=N?N.toStringTag:void 0;var nt=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":et&&et in Object(t)?K(t):tt(t)};var rt=nt,it=function(t){return null!=t&&"object"==typeof t};var ot=function(t){return"symbol"==typeof t||it(t)&&"[object Symbol]"==rt(t)},at=I,st=ot,lt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ct=/^\w*$/;var ut=function(t,e){if(at(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!st(t))||(ct.test(t)||!lt.test(t)||null!=e&&t in Object(e))};var dt=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},ht=nt,ft=dt;var gt,pt=function(t){if(!ft(t))return!1;var e=ht(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},mt=P["__core-js_shared__"],yt=(gt=/[^.]+$/.exec(mt&&mt.keys&&mt.keys.IE_PROTO||""))?"Symbol(src)_1."+gt:"";var vt=function(t){return!!yt&&yt in t},Ft=Function.prototype.toString;var $t=pt,Dt=vt,St=dt,bt=function(t){if(null!=t){try{return Ft.call(t)}catch(t){}try{return t+""}catch(t){}}return""},Bt=/^\[object .+?Constructor\]$/,wt=Function.prototype,xt=Object.prototype,Ht=wt.toString,Ot=xt.hasOwnProperty,Mt=RegExp("^"+Ht.call(Ot).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Et=function(t){return!(!St(t)||Dt(t))&&($t(t)?Mt:Bt).test(bt(t))},At=function(t,e){return null==t?void 0:t[e]};var _t=function(t,e){var n=At(t,e);return Et(n)?n:void 0},kt=_t(Object,"create"),zt=kt;var Yt=function(){this.__data__=zt?zt(null):{},this.size=0};var Ct=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},Tt=kt,Wt=Object.prototype.hasOwnProperty;var Lt=function(t){var e=this.__data__;if(Tt){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return Wt.call(e,t)?e[t]:void 0},jt=kt,It=Object.prototype.hasOwnProperty;var Rt=kt;var Vt=Yt,Pt=Ct,Nt=Lt,Zt=function(t){var e=this.__data__;return jt?void 0!==e[t]:It.call(e,t)},Ut=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=Rt&&void 0===e?"__lodash_hash_undefined__":e,this};function Xt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Xt.prototype.clear=Vt,Xt.prototype.delete=Pt,Xt.prototype.get=Nt,Xt.prototype.has=Zt,Xt.prototype.set=Ut;var Gt=Xt;var Jt=function(){this.__data__=[],this.size=0};var qt=function(t,e){return t===e||t!=t&&e!=e};var Qt=function(t,e){for(var n=t.length;n--;)if(qt(t[n][0],e))return n;return-1},Kt=Qt,te=Array.prototype.splice;var ee=Qt;var ne=Qt;var re=Qt;var ie=Jt,oe=function(t){var e=this.__data__,n=Kt(e,t);return!(n<0)&&(n==e.length-1?e.pop():te.call(e,n,1),--this.size,!0)},ae=function(t){var e=this.__data__,n=ee(e,t);return n<0?void 0:e[n][1]},se=function(t){return ne(this.__data__,t)>-1},le=function(t,e){var n=this.__data__,r=re(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};function ce(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}ce.prototype.clear=ie,ce.prototype.delete=oe,ce.prototype.get=ae,ce.prototype.has=se,ce.prototype.set=le;var ue=ce,de=_t(P,"Map"),he=Gt,fe=ue,ge=de;var pe=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var me=function(t,e){var n=t.__data__;return pe(e)?n["string"==typeof e?"string":"hash"]:n.map},ye=me;var ve=me;var Fe=me;var $e=me;var De=function(){this.size=0,this.__data__={hash:new he,map:new(ge||fe),string:new he}},Se=function(t){var e=ye(this,t).delete(t);return this.size-=e?1:0,e},be=function(t){return ve(this,t).get(t)},Be=function(t){return Fe(this,t).has(t)},we=function(t,e){var n=$e(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function xe(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}xe.prototype.clear=De,xe.prototype.delete=Se,xe.prototype.get=be,xe.prototype.has=Be,xe.prototype.set=we;var He=xe;function Oe(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=t.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(Oe.Cache||He),n}Oe.Cache=He;var Me=Oe;var Ee=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ae=/\\(\\)?/g,_e=function(t){var e=Me(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(Ee,(function(t,n,r,i){e.push(r?i.replace(Ae,"$1"):n||t)})),e}));var ke=function(t,e){for(var n=-1,r=null==t?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i},ze=I,Ye=ot,Ce=N?N.prototype:void 0,Te=Ce?Ce.toString:void 0;var We=function t(e){if("string"==typeof e)return e;if(ze(e))return ke(e,t)+"";if(Ye(e))return Te?Te.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n},Le=We;var je=I,Ie=ut,Re=_e,Ve=function(t){return null==t?"":Le(t)};var Pe=ot;var Ne=function(t,e){return je(t)?t:Ie(t,e)?[t]:Re(Ve(t))},Ze=function(t){if("string"==typeof t||Pe(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e};var Ue=function(t,e){for(var n=0,r=(e=Ne(e,t)).length;null!=t&&n<r;)t=t[Ze(e[n++])];return n&&n==r?t:void 0};var Xe=function(t,e,n){var r=null==t?void 0:Ue(t,e);return void 0===r?n:r};const Ge=(t,e,n)=>e?Xe(n,e)||Xe(t,e):n||t,Je=(t,e)=>{const n=e||t.defaultValue;return Xe(t.collections,n)};var qe;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme",t.designTokenScheme="designTokenScheme",t.resourceScheme="resourceScheme"}(qe||(qe={}));const Qe={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#8F0E0E",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Ke=t=>e=>{const n=e.theme,r=Je(Qe,n[qe.colorScheme]);return n.options&&n.options.color?Ge(r,t,n.options.color):Ge(r,t)},tn=(Ke("Brand.1"),Ke("Brand.2"),Ke("Brand.3"),Ke("Brand.4"),Ke("Brand.5"),Ke("Brand.6"),Ke("Primary")),en=(Ke("PrimaryDark"),Ke("Secondary")),nn=(Ke("Accent.Light.1"),Ke("Accent.Light.2"),Ke("Accent.Light.3"),Ke("Accent.Light.4"),Ke("Accent.Light.5"),Ke("Accent.Light.6"),Ke("Accent.Dark.1"),Ke("Accent.Dark.2"),Ke("Accent.Dark.3"),{1:Ke("Neutral.1"),2:Ke("Neutral.2"),3:Ke("Neutral.3"),4:Ke("Neutral.4"),5:Ke("Neutral.5"),6:Ke("Neutral.6"),7:Ke("Neutral.7"),8:Ke("Neutral.8")}),rn=(Ke("Validation.Green.Text"),Ke("Validation.Green.Icon"),Ke("Validation.Green.Border"),Ke("Validation.Green.Background"),Ke("Validation.Orange.Text"),Ke("Validation.Orange.Icon"),Ke("Validation.Orange.Border"),Ke("Validation.Orange.Background"),Ke("Validation.Orange.Badge"),Ke("Validation.Red.Text"),Ke("Validation.Red.Icon"),Ke("Validation.Red.Border"),Ke("Validation.Red.Background"),Ke("Validation.Blue.Text"),Ke("Validation.Blue.Icon"),Ke("Validation.Blue.Border"),Ke("Validation.Blue.Background"),Ke("Shadow.Accent"),Ke("Shadow.Red"),Ke("Shadow.Elevation"),{mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840}),on=t=>Object.keys(rn).reduce(((e,n)=>{const r=rn[n];return e[n]=`@media screen and (${t}: ${r}px)`,e}),{}),an=on("max-width"),sn=(on("min-width"),l.button`
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
                background-color: ${nn[7]};
            `}
    }
`),ln=r.forwardRef(((e,n)=>{var{children:r,focusHighlight:i=!0,focusOutline:o="none",type:a="button"}=e,s=d(e,["children","focusHighlight","focusOutline","type"]);return t(sn,Object.assign({ref:n,$outline:o,$highlight:i,type:a},s,{children:r}))})),cn={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},un={collections:{base:{D1:{fontFamily:cn.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:cn.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:cn.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:cn.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:cn.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:cn.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:cn.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:cn.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:cn.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:cn.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:cn.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:cn.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:cn.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:cn.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},dn=t=>e=>{const n=e.theme,r=Je(un,n[qe.textStyleScheme]);return n.options&&n.options.textStyle?Ge(r,t,n.options.textStyle):Ge(r,t)},hn={D1:{fontFamily:dn("D1.fontFamily"),fontSize:dn("D1.fontSize"),fontWeight:dn("D1.fontWeight"),lineHeight:dn("D1.lineHeight"),letterSpacing:dn("D1.letterSpacing")},D2:{fontFamily:dn("D2.fontFamily"),fontSize:dn("D2.fontSize"),fontWeight:dn("D2.fontWeight"),lineHeight:dn("D2.lineHeight"),letterSpacing:dn("D2.letterSpacing")},D3:{fontFamily:dn("D3.fontFamily"),fontSize:dn("D3.fontSize"),fontWeight:dn("D3.fontWeight"),lineHeight:dn("D3.lineHeight"),letterSpacing:dn("D3.letterSpacing")},D4:{fontFamily:dn("D4.fontFamily"),fontSize:dn("D4.fontSize"),fontWeight:dn("D4.fontWeight"),lineHeight:dn("D4.lineHeight"),letterSpacing:dn("D4.letterSpacing")},DBody:{fontFamily:dn("DBody.fontFamily"),fontSize:dn("DBody.fontSize"),fontWeight:dn("DBody.fontWeight"),lineHeight:dn("DBody.lineHeight"),letterSpacing:dn("DBody.letterSpacing")},H1:{fontFamily:dn("H1.fontFamily"),fontSize:dn("H1.fontSize"),fontWeight:dn("H1.fontWeight"),lineHeight:dn("H1.lineHeight"),letterSpacing:dn("H1.letterSpacing")},H2:{fontFamily:dn("H2.fontFamily"),fontSize:dn("H2.fontSize"),fontWeight:dn("H2.fontWeight"),lineHeight:dn("H2.lineHeight"),letterSpacing:dn("H2.letterSpacing")},H3:{fontFamily:dn("H3.fontFamily"),fontSize:dn("H3.fontSize"),fontWeight:dn("H3.fontWeight"),lineHeight:dn("H3.lineHeight"),letterSpacing:dn("H3.letterSpacing")},H4:{fontFamily:dn("H4.fontFamily"),fontSize:dn("H4.fontSize"),fontWeight:dn("H4.fontWeight"),lineHeight:dn("H4.lineHeight"),letterSpacing:dn("H4.letterSpacing")},H5:{fontFamily:dn("H5.fontFamily"),fontSize:dn("H5.fontSize"),fontWeight:dn("H5.fontWeight"),lineHeight:dn("H5.lineHeight"),letterSpacing:dn("H5.letterSpacing")},H6:{fontFamily:dn("H6.fontFamily"),fontSize:dn("H6.fontSize"),fontWeight:dn("H6.fontWeight"),lineHeight:dn("H6.lineHeight"),letterSpacing:dn("H6.letterSpacing")},Body:{fontFamily:dn("Body.fontFamily"),fontSize:dn("Body.fontSize"),fontWeight:dn("Body.fontWeight"),lineHeight:dn("Body.lineHeight"),letterSpacing:dn("Body.letterSpacing")},BodySmall:{fontFamily:dn("BodySmall.fontFamily"),fontSize:dn("BodySmall.fontSize"),fontWeight:dn("BodySmall.fontWeight"),lineHeight:dn("BodySmall.lineHeight"),letterSpacing:dn("BodySmall.letterSpacing")},XSmall:{fontFamily:dn("XSmall.fontFamily"),fontSize:dn("XSmall.fontSize"),fontWeight:dn("XSmall.fontWeight"),lineHeight:dn("XSmall.lineHeight"),letterSpacing:dn("XSmall.letterSpacing")}},fn=t=>{switch(t){case 700:case"bold":return cn.Bold;case 600:case"semibold":return cn.Semibold;case 300:case"light":return cn.Light;case 400:case"regular":return cn.Regular;default:return""}},gn=(t,e)=>n=>{var r;const i=hn[t].fontFamily(n),o=hn[t].fontWeight(n);return Object.values(cn).includes(i)?c`
                font-family: ${fn(e)||fn(o)||i};
                font-weight: normal !important;
            `:c`
            font-family: ${i};
            font-weight: ${null!==(r=pn(e)||o)&&void 0!==r?r:"normal"};
        `},pn=t=>{switch(t){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},mn=t=>{if(t>0)return c`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${t};
            line-clamp: ${t};
            overflow: hidden;
        `},yn=(t,e,n=!1)=>r=>{const i=hn[t],o=i.fontSize(r);return c`
            ${gn(t,e)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${c`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},vn=(t=!1,e=!1,n=void 0)=>e?c`
            display: block;
            ${mn(n)}
        `:t?c`
            display: inline;
        `:c`
            display: block;
            ${mn(n)}
        `;var Fn;!function(t){t.D1=l.h1`
        ${t=>c`
                ${yn("D1",t.weight,t.paragraph)}
                color: ${nn[1]};
                ${vn(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.D2=l.h1`
        ${t=>c`
                ${yn("D2",t.weight,t.paragraph)}
                color: ${nn[1]};
                ${vn(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.D3=l.h1`
        ${t=>c`
                ${yn("D3",t.weight,t.paragraph)}
                color: ${nn[1]};
                ${vn(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.D4=l.h1`
        ${t=>c`
                ${yn("D4",t.weight,t.paragraph)}
                color: ${nn[1]};
                ${vn(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.DBody=l.h1`
        ${t=>c`
                ${yn("DBody",t.weight,t.paragraph)}
                color: ${nn[1]};
                ${vn(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H1=l.h1`
        ${t=>c`
                ${yn("H1",t.weight,t.paragraph)}
                color: ${nn[1]};
                ${vn(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H2=l.h2`
        ${t=>c`
                ${yn("H2",t.weight,t.paragraph)}
                color: ${nn[1]};
                ${vn(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H3=l.h3`
        ${t=>c`
                ${yn("H3",t.weight,t.paragraph)}
                color: ${nn[1]};
                ${vn(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H4=l.h4`
        ${t=>c`
                ${yn("H4",t.weight,t.paragraph)}
                color: ${nn[1]};
                ${vn(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H5=l.h5`
        ${t=>c`
                ${yn("H5",t.weight,t.paragraph)}
                color: ${nn[1]};
                ${vn(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H6=l.h6`
        ${t=>c`
                ${yn("H6",t.weight,t.paragraph)}
                color: ${nn[1]};
                ${vn(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.Body=l.p`
        ${t=>c`
                ${yn("Body",t.weight,t.paragraph)}
                color: ${nn[1]};
                ${vn(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.BodySmall=l.p`
        ${t=>c`
                ${yn("BodySmall",t.weight,t.paragraph)}
                color: ${nn[1]};
                ${vn(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.XSmall=l.span`
        ${t=>c`
                ${yn("XSmall",t.weight,t.paragraph)}
                color: ${nn[1]};
                ${vn(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.Hyperlink={Default:t=>Sn(Object.assign(Object.assign({},t),{textStyle:"Body"})),Small:t=>Sn(Object.assign(Object.assign({},t),{textStyle:"BodySmall"}))}}(Fn||(Fn={}));const $n=l.a`
    ${t=>c`
            ${yn(t.textStyle,t.weight)}
            color: ${tn};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${en};

                svg {
                    color: ${en};
                }
            }
        `}
`,Dn=l(u)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Sn=n=>{var{external:r=!1,children:i}=n,o=d(n,["external","children"]);return e($n,Object.assign({},o,{children:[i,r&&t(Dn,{})]}))};var bn;!function(t){t[t.Subpage=0]="Subpage",t[t.Domain=1]="Domain"}(bn||(bn={}));const Bn=l.div`
    position: fixed;
    top: 0;

    display: flex;
    flex-direction: column;
    height: 100%;

    background-color: ${nn[8]};
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

    ${an.desktopL} {
        width: 50%;
        min-width: 700px;
    }

    ${an.tablet} {
        width: 100%;
        min-width: unset;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
`,wn=l.div`
    top: 0;

    display: flex;
    align-items: center;
    gap: 1rem;
    height: 5rem;
    padding: 2rem 1rem 1rem;
    background-color: ${nn[8]};
    border-bottom: 1px solid ${nn[5]};

    ${an.tablet} {
        gap: 0.5rem;
        padding: 2rem 1.25rem 1rem;
    }
`,xn=l(ln)`
    color: ${nn[3]};
    padding: 0;
    order: -1; // show button on the left of the header

    :active,
    :focus {
        color: ${tn};
    }

    svg {
        height: 2rem;
        width: 2rem;
    }
`,Hn=l(Fn.H2)`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`,On=l.div`
    flex: 1;
    overflow-y: auto;
`,Mn=r=>{var{children:s,heading:l,show:c,onClose:u,onOverlayClick:h}=r,f=d(r,["children","heading","show","onClose","onOverlayClick"]);const[g,p]=i(c),[m]=i((()=>z.generate())),y=o();a((()=>{if(!c){const t=setTimeout((()=>p(!1)),500);return()=>clearTimeout(t)}p(!0)}),[c]);return t(W,Object.assign({show:g,enableOverlayClick:!0,onOverlayClick:h},{children:e(Bn,Object.assign({$show:c,"data-testid":"drawer",onClick:t=>{t.stopPropagation()},role:"dialog","aria-labelledby":m,onTransitionEnd:t=>{"visibility"===t.propertyName&&c&&y.current.focus()}},f,{children:[e(wn,{children:[t(Hn,Object.assign({id:m,ref:y,tabIndex:-1},{children:l})),t(xn,Object.assign({"aria-label":"Close drawer",onClick:u,focusHighlight:!1},{children:t(n,{"aria-hidden":!0})}))]}),t(On,{children:s})]}))}))};export{Mn as Drawer};
//# sourceMappingURL=index.js.map
