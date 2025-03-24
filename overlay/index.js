import{jsx as t}from"react/jsx-runtime";import{useFloatingTree as e,FloatingTree as n,useFloatingNodeId as r,FloatingNode as i}from"@floating-ui/react";import s,{useEffect as a,useState as o,useRef as u}from"react";import c from"react-dom";import d,{css as f}from"styled-components";"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;function h(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var l={exports:{}};l.exports=function(){var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",a="hour",o="day",u="week",c="month",d="quarter",f="year",h="date",l="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},p=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},y={s:p,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+p(r,2,"0")+":"+p(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),s=n-i<0,a=e.clone().add(r+(s?-1:1),c);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:f,w:u,d:o,D:h,h:a,m:s,s:i,ms:r,Q:d}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},$="en",M={};M[$]=v;var D="$isDayjsObject",b=function(t){return t instanceof S||!(!t||!t[D])},Y=function t(e,n,r){var i;if(!e)return $;if("string"==typeof e){var s=e.toLowerCase();M[s]&&(i=s),n&&(M[s]=n,i=s);var a=e.split("-");if(!i&&a.length>1)return t(a[0])}else{var o=e.name;M[o]=e,i=o}return!r&&i&&($=i),i||!r&&$},w=function(t,e){if(b(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},x=y;x.l=Y,x.i=b,x.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function v(t){this.$L=Y(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[D]=!0}var p=v.prototype;return p.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(x.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(m);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.init()},p.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},p.$utils=function(){return x},p.isValid=function(){return!(this.$d.toString()===l)},p.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},p.isAfter=function(t,e){return w(t)<this.startOf(e)},p.isBefore=function(t,e){return this.endOf(e)<w(t)},p.$g=function(t,e,n){return x.u(t)?this[e]:this.set(n,t)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(t,e){var n=this,r=!!x.u(e)||e,d=x.p(t),l=function(t,e){var i=x.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(o)},m=function(t,e){return x.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},g=this.$W,v=this.$M,p=this.$D,y="set"+(this.$u?"UTC":"");switch(d){case f:return r?l(1,0):l(31,11);case c:return r?l(1,v):l(0,v+1);case u:var $=this.$locale().weekStart||0,M=(g<$?g+7:g)-$;return l(r?p-M:p+(6-M),v);case o:case h:return m(y+"Hours",0);case a:return m(y+"Minutes",1);case s:return m(y+"Seconds",2);case i:return m(y+"Milliseconds",3);default:return this.clone()}},p.endOf=function(t){return this.startOf(t,!1)},p.$set=function(t,e){var n,u=x.p(t),d="set"+(this.$u?"UTC":""),l=(n={},n[o]=d+"Date",n[h]=d+"Date",n[c]=d+"Month",n[f]=d+"FullYear",n[a]=d+"Hours",n[s]=d+"Minutes",n[i]=d+"Seconds",n[r]=d+"Milliseconds",n)[u],m=u===o?this.$D+(e-this.$W):e;if(u===c||u===f){var g=this.clone().set(h,1);g.$d[l](m),g.init(),this.$d=g.set(h,Math.min(this.$D,g.daysInMonth())).$d}else l&&this.$d[l](m);return this.init(),this},p.set=function(t,e){return this.clone().$set(t,e)},p.get=function(t){return this[x.p(t)]()},p.add=function(r,d){var h,l=this;r=Number(r);var m=x.p(d),g=function(t){var e=w(l);return x.w(e.date(e.date()+Math.round(t*r)),l)};if(m===c)return this.set(c,this.$M+r);if(m===f)return this.set(f,this.$y+r);if(m===o)return g(1);if(m===u)return g(7);var v=(h={},h[s]=e,h[a]=n,h[i]=t,h)[m]||1,p=this.$d.getTime()+r*v;return x.w(p,this)},p.subtract=function(t,e){return this.add(-1*t,e)},p.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=x.z(this),s=this.$H,a=this.$m,o=this.$M,u=n.weekdays,c=n.months,d=n.meridiem,f=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},h=function(t){return x.s(s%12||12,t,"0")},m=d||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(g,(function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return x.s(e.$y,4,"0");case"M":return o+1;case"MM":return x.s(o+1,2,"0");case"MMM":return f(n.monthsShort,o,c,3);case"MMMM":return f(c,o);case"D":return e.$D;case"DD":return x.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return f(n.weekdaysMin,e.$W,u,2);case"ddd":return f(n.weekdaysShort,e.$W,u,3);case"dddd":return u[e.$W];case"H":return String(s);case"HH":return x.s(s,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return m(s,a,!0);case"A":return m(s,a,!1);case"m":return String(a);case"mm":return x.s(a,2,"0");case"s":return String(e.$s);case"ss":return x.s(e.$s,2,"0");case"SSS":return x.s(e.$ms,3,"0");case"Z":return i}return null}(t)||i.replace(":","")}))},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(r,h,l){var m,g=this,v=x.p(h),p=w(r),y=(p.utcOffset()-this.utcOffset())*e,$=this-p,M=function(){return x.m(g,p)};switch(v){case f:m=M()/12;break;case c:m=M();break;case d:m=M()/3;break;case u:m=($-y)/6048e5;break;case o:m=($-y)/864e5;break;case a:m=$/n;break;case s:m=$/e;break;case i:m=$/t;break;default:m=$}return l?m:x.a(m)},p.daysInMonth=function(){return this.endOf(c).$D},p.$locale=function(){return M[this.$L]},p.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=Y(t,e,!0);return r&&(n.$L=r),n},p.clone=function(){return x.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},v}(),O=S.prototype;return w.prototype=O,[["$ms",r],["$s",i],["$m",s],["$H",a],["$W",o],["$M",c],["$y",f],["$D",h]].forEach((function(t){O[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,S,w),t.$i=!0),w},w.locale=Y,w.isDayjs=b,w.unix=function(t){return w(1e3*t)},w.en=M[$],w.Ls=M,w.p={},w}();var m=h(l.exports),g={exports:{}};g.exports=function(){var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},e=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,s={},a=function(t){return(t=+t)+(t>68?1900:2e3)},o=function(t){return function(e){this[t]=+e}},u=[/[+-]\d\d:?(\d\d)?|Z/,function(t){(this.zone||(this.zone={})).offset=function(t){if(!t)return 0;if("Z"===t)return 0;var e=t.match(/([+-]|\d\d)/g),n=60*e[1]+(+e[2]||0);return 0===n?0:"+"===e[0]?-n:n}(t)}],c=function(t){var e=s[t];return e&&(e.indexOf?e:e.s.concat(e.f))},d=function(t,e){var n,r=s.meridiem;if(r){for(var i=1;i<=24;i+=1)if(t.indexOf(r(i,0,e))>-1){n=i>12;break}}else n=t===(e?"pm":"PM");return n},f={A:[i,function(t){this.afternoon=d(t,!1)}],a:[i,function(t){this.afternoon=d(t,!0)}],S:[/\d/,function(t){this.milliseconds=100*+t}],SS:[n,function(t){this.milliseconds=10*+t}],SSS:[/\d{3}/,function(t){this.milliseconds=+t}],s:[r,o("seconds")],ss:[r,o("seconds")],m:[r,o("minutes")],mm:[r,o("minutes")],H:[r,o("hours")],h:[r,o("hours")],HH:[r,o("hours")],hh:[r,o("hours")],D:[r,o("day")],DD:[n,o("day")],Do:[i,function(t){var e=s.ordinal,n=t.match(/\d+/);if(this.day=n[0],e)for(var r=1;r<=31;r+=1)e(r).replace(/\[|\]/g,"")===t&&(this.day=r)}],M:[r,o("month")],MM:[n,o("month")],MMM:[i,function(t){var e=c("months"),n=(c("monthsShort")||e.map((function(t){return t.slice(0,3)}))).indexOf(t)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(t){var e=c("months").indexOf(t)+1;if(e<1)throw new Error;this.month=e%12||e}],Y:[/[+-]?\d+/,o("year")],YY:[n,function(t){this.year=a(t)}],YYYY:[/\d{4}/,o("year")],Z:u,ZZ:u};function h(n){var r,i;r=n,i=s&&s.formats;for(var a=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(e,n,r){var s=r&&r.toUpperCase();return n||i[r]||t[r]||i[s].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(t,e,n){return e||n.slice(1)}))}))).match(e),o=a.length,u=0;u<o;u+=1){var c=a[u],d=f[c],h=d&&d[0],l=d&&d[1];a[u]=l?{regex:h,parser:l}:c.replace(/^\[|\]$/g,"")}return function(t){for(var e={},n=0,r=0;n<o;n+=1){var i=a[n];if("string"==typeof i)r+=i.length;else{var s=i.regex,u=i.parser,c=t.slice(r),d=s.exec(c)[0];u.call(e,d),t=t.replace(d,"")}}return function(t){var e=t.afternoon;if(void 0!==e){var n=t.hours;e?n<12&&(t.hours+=12):12===n&&(t.hours=0),delete t.afternoon}}(e),e}}return function(t,e,n){n.p.customParseFormat=!0,t&&t.parseTwoDigitYear&&(a=t.parseTwoDigitYear);var r=e.prototype,i=r.parse;r.parse=function(t){var e=t.date,r=t.utc,a=t.args;this.$u=r;var o=a[1];if("string"==typeof o){var u=!0===a[2],c=!0===a[3],d=u||c,f=a[2];c&&(f=a[2]),s=this.$locale(),!u&&f&&(s=n.Ls[f]),this.$d=function(t,e,n){try{if(["x","X"].indexOf(e)>-1)return new Date(("X"===e?1e3:1)*t);var r=h(e)(t),i=r.year,s=r.month,a=r.day,o=r.hours,u=r.minutes,c=r.seconds,d=r.milliseconds,f=r.zone,l=new Date,m=a||(i||s?1:l.getDate()),g=i||l.getFullYear(),v=0;i&&!s||(v=s>0?s-1:l.getMonth());var p=o||0,y=u||0,$=c||0,M=d||0;return f?new Date(Date.UTC(g,v,m,p,y,$,M+60*f.offset*1e3)):n?new Date(Date.UTC(g,v,m,p,y,$,M)):new Date(g,v,m,p,y,$,M)}catch(t){return new Date("")}}(e,o,r),this.init(),f&&!0!==f&&(this.$L=this.locale(f).$L),d&&e!=this.format(o)&&(this.$d=new Date("")),s={}}else if(o instanceof Array)for(var l=o.length,m=1;m<=l;m+=1){a[1]=o[m-1];var g=n.apply(this,a);if(g.isValid()){this.$d=g.$d,this.$L=g.$L,this.init();break}m===l&&(this.$d=new Date(""))}else i.call(this,t)}}}();var v=h(g.exports),p={exports:{}};p.exports=function(t,e,n){e.prototype.isBetween=function(t,e,r,i){var s=n(t),a=n(e),o="("===(i=i||"()")[0],u=")"===i[1];return(o?this.isAfter(s,r):!this.isBefore(s,r))&&(u?this.isBefore(a,r):!this.isAfter(a,r))||(o?this.isBefore(s,r):!this.isAfter(s,r))&&(u?this.isAfter(a,r):!this.isBefore(a,r))}};var y=h(p.exports),$={exports:{}};$.exports=function(t,e){e.prototype.isSameOrAfter=function(t,e){return this.isSame(t,e)||this.isAfter(t,e)}};var M=h($.exports),D={exports:{}};D.exports=function(t,e){e.prototype.isSameOrBefore=function(t,e){return this.isSame(t,e)||this.isBefore(t,e)}};var b,Y,w,x=h(D.exports),S={exports:{}},O=h(S.exports=(b={year:0,month:1,day:2,hour:3,minute:4,second:5},Y={},function(t,e,n){var r,i=function(t,e,n){void 0===n&&(n={});var r=new Date(t),i=function(t,e){void 0===e&&(e={});var n=e.timeZoneName||"short",r=t+"|"+n,i=Y[r];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:t,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),Y[r]=i),i}(e,n);return i.formatToParts(r)},s=function(t,e){for(var r=i(t,e),s=[],a=0;a<r.length;a+=1){var o=r[a],u=o.type,c=o.value,d=b[u];d>=0&&(s[d]=parseInt(c,10))}var f=s[3],h=24===f?0:f,l=s[0]+"-"+s[1]+"-"+s[2]+" "+h+":"+s[4]+":"+s[5]+":000",m=+t;return(n.utc(l).valueOf()-(m-=m%1e3))/6e4},a=e.prototype;a.tz=function(t,e){void 0===t&&(t=r);var i=this.utcOffset(),s=this.toDate(),a=s.toLocaleString("en-US",{timeZone:t}),o=Math.round((s-new Date(a))/1e3/60),u=n(a,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(s.getTimezoneOffset()/15)-o,!0);if(e){var c=u.utcOffset();u=u.add(i-c,"minute")}return u.$x.$timezone=t,u},a.offsetName=function(t){var e=this.$x.$timezone||n.tz.guess(),r=i(this.valueOf(),e,{timeZoneName:t}).find((function(t){return"timezonename"===t.type.toLowerCase()}));return r&&r.value};var o=a.startOf;a.startOf=function(t,e){if(!this.$x||!this.$x.$timezone)return o.call(this,t,e);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return o.call(r,t,e).tz(this.$x.$timezone,!0)},n.tz=function(t,e,i){var a=i&&e,o=i||e||r,u=s(+n(),o);if("string"!=typeof t)return n(t).tz(o);var c=function(t,e,n){var r=t-60*e*1e3,i=s(r,n);if(e===i)return[r,e];var a=s(r-=60*(i-e)*1e3,n);return i===a?[r,i]:[t-60*Math.min(i,a)*1e3,Math.max(i,a)]}(n.utc(t,a).valueOf(),u,o),d=c[0],f=c[1],h=n(d).utcOffset(f);return h.$x.$timezone=o,h},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(t){r=t}}));m.extend(y),m.extend(x),m.extend(M),m.extend(v),m.extend(O),function(t){t.generateDays=t=>{const e=t.startOf("month"),n=m(e).startOf("week");return T(n).map((t=>k(t)))},t.generateDaysForCurrentWeek=t=>{const e=t.startOf("week");return k(e)},t.generateMonths=t=>{const e=[];for(let n=0;n<12;n++){const r=t.month(n);e.push(m(r))}return e},t.generateDecadeOfYears=t=>{const e=t.year(),n=10*Math.floor(e/10),r=t.year(n),i=[r.subtract(1,"year"),r];for(let t=1;t<11;t++)i.push(r.add(t,"year"));return i},t.getStartEndDecade=t=>{const e=10*Math.floor(+t.format("YYYY")/10);return{beginDecade:e,endDecade:+m(`${e+9}-01-01`).format("YYYY")}},t.convertTo12HourFormat=t=>{const e=m(t,"HH:mm");return e.isValid()?e.format("h:mm a"):""},t.isWithinRange=(t,e,n,r="day")=>!e&&!n||(e&&n?t.isBetween(e,n,r,"[]"):e?t.isSameOrAfter(e,r):t.isSameOrBefore(n,r)),t.isPreviousMonthWithinRange=(e,n)=>t.isWithinRange(e.subtract(1,"month"),n,void 0,"month"),t.isPreviousYearWithinRange=(e,n)=>t.isWithinRange(e.subtract(1,"year"),n,void 0,"year"),t.isPreviousDecadeWithinRange=(e,n)=>{const{beginDecade:r}=t.getStartEndDecade(e);return t.isWithinRange(e.year(r).subtract(1,"year"),n,void 0,"year")},t.isNextMonthWithinRange=(e,n)=>t.isWithinRange(e.add(1,"month"),void 0,n,"month"),t.isNextYearWithinRange=(e,n)=>t.isWithinRange(e.add(1,"year"),void 0,n,"year"),t.isNextDecadeWithinRange=(e,n)=>{const{endDecade:r}=t.getStartEndDecade(e);return t.isWithinRange(e.year(r).add(1,"year"),void 0,n,"year")},t.getWeekStartEnd=t=>({start:t.startOf("week").format("YYYY-MM-DD"),end:t.endOf("week").format("YYYY-MM-DD")}),t.getFixedRangeStartEnd=(t,e)=>({start:t.format("YYYY-MM-DD"),end:t.add(e-1,"day").format("YYYY-MM-DD")}),t.isDisabledDay=(e,n,r,i)=>{const s=t.isWithinRange(e,r?m(r):void 0,i?m(i):void 0),a=n&&n.includes(e.format("YYYY-MM-DD"));return!s||!!a}}(w||(w={}));const T=t=>{const e=[t];for(let n=1;n<6;n++){const r=t.add(n,"week");e.push(r)}return e},k=t=>{const e=[];for(let n=0;n<7;n++){const r=t.add(n,"day");e.push(r)}return e},L=[1,3,5,7,8,10,12],I=[4,6,9,11];var W,z,H,A;!function(t){t.clampDay=(e,n,r)=>{const i=parseInt(e),s=parseInt(n),a=parseInt(r);return 0==i?"1":L.includes(s)?Math.min(i,31).toString():I.includes(s)?Math.min(i,30).toString():2===s?t.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():e},t.clampMonth=t=>{const e=parseInt(t);return 0==e?"1":e>12?"12":t},t.isLeapYear=t=>t%4==0&&t%100!=0||t%400==0,t.getTimeDiffInMinutes=(t,e,n="HH:mm")=>{const r=m(t,n);return m(e,n).diff(r,"minute")},t.toDayjs=t=>t?m(t):m(),t.addMinutesToTime=(t,e,n="HH:mm")=>m(t,n).add(e,"minutes").format(n),t.isSame=(t,e,n="day")=>m(t).isSame(m(e),n)}(W||(W={})),function(t){t.isDateDisabled=(t,e)=>{const{disabledDates:n,minDate:r,maxDate:i}=e;return!!(n&&n.length&&n.includes(t))||(!(!r||!m(t).isBefore(r,"day"))||!(!i||!m(t).isAfter(i,"day")))},t.sanitizeInput=t=>{if(t){if(m(t).isValid())return t}return""}}(z||(z={})),function(t){t.generate=()=>Math.random().toString(36).substring(2,9)}(H||(H={})),function(t){t.transformWithSpaces=(t,e)=>{const n="(.{"+e+"})";return t.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},t.padValue=(t,e)=>{if("0"===t)return e?t:t.padStart(2,"0");if(""===t)return t;return parseInt(t).toString().padStart(2,"0")},t.shouldTruncateToTwoLines=(t,e)=>{const n=Math.floor(e/9);return t.length>=2*n||1===t.split(" ").length&&t.length>n},t.truncateOneLine=(t,e,n,r,i=8)=>{let s=0;e>n&&(s=Math.floor((e-n)/i));const a=r+s;if(a<t.length){const e=Math.floor(a/2);return t.substring(0,e)+" ... "+t.substring(t.length-e,t.length)}return t},t.truncateTwoLines=(t,e,n,r=1.2)=>{const i=Math.floor(2*e/(.6*n))*(2/r);if(t.length<=i)return t;const s=Math.floor(.6*i),a=Math.floor(.2*i);return`${t.substring(0,s)}...${t.substring(t.length-a)}`},t.getTextWidth=(e,n)=>{if("undefined"==typeof document)return 0;const r=(t.getTextWidth.canvas||(t.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(e).width},t.maskValue=(t,n)=>{if(!t)return t;const{maskRange:r,unmaskRange:i,maskChar:s="•",maskRegex:a,maskTransformer:o}=n;if(o)return o(t);if(a)return t.replace(a,s);if(r){const{startIndex:n,endIndex:i}=e(r[0],r[1]);return t.substring(0,n)+s.repeat(t.substring(n,i+1).length)+t.substring(i+1)}if(i){const{startIndex:n,endIndex:r}=e(i[0],i[1]);return s.repeat(t.substring(0,n).length)+t.substring(n,r+1)+s.repeat(t.substring(r+1).length)}return t};const e=(t,e)=>t<e?{startIndex:t,endIndex:e}:{startIndex:e,endIndex:t}}(A||(A={}));const C=d.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 0;
    width: 0;
    visibility: hidden;
    z-index: ${t=>t.$zIndex};

    ${t=>{if(t.$show)return f`
                height: 100%;
                width: 100vw;
                visibility: visible;
            `}}
`,_=d.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(5, 1, 1, ${t=>t.$backgroundOpacity});
    backdrop-filter: ${t=>(t=>{let e="";return t&&(e+="blur(10px)"),e.length>0?e:"none"})(t.$backgroundBlur)};
    transition: opacity 200ms ease;

    ${t=>{let e="";return t.$show?e+=f`
                visibility: visible;
                opacity: 1;
                pointer-events: auto;
                height: 100%;
                width: 100vw;
            `:e+=f`
                visibility: hidden;
                opacity: 0;
                transition-delay: ${t.$disableTransition?"0ms":"400ms"};
                pointer-events: none;
                height: 0;
                width: 0;
            `,t.$disableTransition&&(e+=f`
                transition: none;
            `),e}}
`;var R;!function(t){t.Ready="overlay-context-ready",t.Change="overlay-context-change"}(R||(R={}));const Z=({show:n=!1,rootId:d,onOverlayClick:f,children:h,backgroundOpacity:l,backgroundBlur:m=!0,disableTransition:g=!1,enableOverlayClick:v=!1,zIndex:p,id:y})=>{const[$,M]=o(null),[D,b]=o(),[Y]=o((()=>H.generate())),w=r(),x=u(),S=u(null),O=h&&s.cloneElement(h,{ref:S}),T=y?`lifesg-ds-overlay-root-${y}`:"lifesg-ds-overlay-root",k=null!=p?p:D?99999:99998;(t=>{const n=e();a((()=>{if(!n)return;const e={zIndex:t};n.events.emit(R.Change,e)}),[n,t]),a((()=>{if(!n)return;const e=()=>{const e={zIndex:t};n.events.emit(R.Change,e)};return null==n||n.events.on(R.Ready,e),()=>null==n?void 0:n.events.off(R.Ready,e)}),[n,t])})(k),a((()=>(z(),M(I()),()=>{N(),Z().length<1&&A("remove")})),[]),a((()=>{if(n){const t=W();L(t),B();const e=setTimeout((()=>{A("add")}),200);return()=>clearTimeout(e)}{N();const t=setTimeout((()=>{Z().length<1&&A("remove")}),200);return()=>clearTimeout(t)}}),[n]);const L=t=>{x.current=t,b(t)},I=()=>document&&d?document.getElementById(d):document?document.body:null,W=()=>Z().length>0,z=()=>{if(!document.getElementById(E)){const t=document.createElement("style");t.id=E;const e=document.documentElement.clientWidth,n=window.innerWidth-e;t.innerHTML=`\n\t\t\t\t.${j} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${n}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${j}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(t)}},A=t=>{const e=document.body.classList.contains(j);"add"!==t||e?"remove"===t&&e&&document.body.classList.remove(j):document.body.classList.add(j)},Z=()=>{const t=document.body.dataset.lifesgDsOverlayOrder;return t?t.split(","):[]},B=()=>{const t=Z();document.body.dataset.lifesgDsOverlayOrder=[...t,Y].join(",")},N=()=>{const t=Z();document.body.dataset.lifesgDsOverlayOrder=t.filter((t=>t!==Y)).join(",")},F=t=>{var e;const n=null===(e=S.current)||void 0===e?void 0:e.firstChild;n&&n.contains(t.target)||f&&v&&(t.preventDefault(),f())};return $?c.createPortal(t(C,Object.assign({id:T,"data-testid":T,$show:n,$zIndex:k},{children:h&&t(i,Object.assign({id:w},{children:t(_,Object.assign({"data-testid":"overlay-wrapper",$show:n,$backgroundOpacity:l||(D?.5:.8),$backgroundBlur:m,$disableTransition:g,onClick:F},{children:O}))}))})),$):null},B=e=>t(n,{children:t(Z,Object.assign({},e))}),E="lifesg-ds-overlay-stylesheet",j="lifesg-ds-overlay-open";export{B as Overlay};
//# sourceMappingURL=index.js.map
