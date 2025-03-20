import{jsxs as e,jsx as r,Fragment as t}from"react/jsx-runtime";import{ChevronDownIcon as n}from"@lifesg/react-icons/chevron-down";import{ChevronUpIcon as i}from"@lifesg/react-icons/chevron-up";import*as o from"react";import{useRef as s,useState as a,isValidElement as l,createRef as d,cloneElement as c,PureComponent as u,useEffect as h,useLayoutEffect as b,useMemo as g}from"react";import m,{css as f}from"styled-components";import{ArrowRightIcon as y}from"@lifesg/react-icons/arrow-right";import{ExclamationCircleFillIcon as p}from"@lifesg/react-icons/exclamation-circle-fill";import{ExclamationTriangleFillIcon as v}from"@lifesg/react-icons/exclamation-triangle-fill";import{ICircleFillIcon as x}from"@lifesg/react-icons/i-circle-fill";import{TickCircleFillIcon as F}from"@lifesg/react-icons/tick-circle-fill";import{findDOMNode as w}from"react-dom";import{ChevronDownIcon as $}from"@lifesg/react-icons";import{ExternalIcon as E}from"@lifesg/react-icons/external";import{CircleIcon as D}from"@lifesg/react-icons/circle";import{CircleDotIcon as C}from"@lifesg/react-icons/circle-dot";import{CrossIcon as B}from"@lifesg/react-icons/cross";import{SquareIcon as A}from"@lifesg/react-icons/square";import{SquareTickFillIcon as z}from"@lifesg/react-icons/square-tick-fill";import{TickIcon as k}from"@lifesg/react-icons/tick";var M="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function S(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var O={exports:{}};O.exports=function(){var e=1e3,r=6e4,t=36e5,n="millisecond",i="second",o="minute",s="hour",a="day",l="week",d="month",c="quarter",u="year",h="date",b="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var r=["th","st","nd","rd"],t=e%100;return"["+e+(r[(t-20)%10]||r[t]||r[0])+"]"}},y=function(e,r,t){var n=String(e);return!n||n.length>=r?e:""+Array(r+1-n.length).join(t)+e},p={s:y,z:function(e){var r=-e.utcOffset(),t=Math.abs(r),n=Math.floor(t/60),i=t%60;return(r<=0?"+":"-")+y(n,2,"0")+":"+y(i,2,"0")},m:function e(r,t){if(r.date()<t.date())return-e(t,r);var n=12*(t.year()-r.year())+(t.month()-r.month()),i=r.clone().add(n,d),o=t-i<0,s=r.clone().add(n+(o?-1:1),d);return+(-(n+(t-i)/(o?i-s:s-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:d,y:u,w:l,d:a,D:h,h:s,m:o,s:i,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",x={};x[v]=f;var F="$isDayjsObject",w=function(e){return e instanceof C||!(!e||!e[F])},$=function e(r,t,n){var i;if(!r)return v;if("string"==typeof r){var o=r.toLowerCase();x[o]&&(i=o),t&&(x[o]=t,i=o);var s=r.split("-");if(!i&&s.length>1)return e(s[0])}else{var a=r.name;x[a]=r,i=a}return!n&&i&&(v=i),i||!n&&v},E=function(e,r){if(w(e))return e.clone();var t="object"==typeof r?r:{};return t.date=e,t.args=arguments,new C(t)},D=p;D.l=$,D.i=w,D.w=function(e,r){return E(e,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var C=function(){function f(e){this.$L=$(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[F]=!0}var y=f.prototype;return y.parse=function(e){this.$d=function(e){var r=e.date,t=e.utc;if(null===r)return new Date(NaN);if(D.u(r))return new Date;if(r instanceof Date)return new Date(r);if("string"==typeof r&&!/Z$/i.test(r)){var n=r.match(g);if(n){var i=n[2]-1||0,o=(n[7]||"0").substring(0,3);return t?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)}}return new Date(r)}(e),this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return D},y.isValid=function(){return!(this.$d.toString()===b)},y.isSame=function(e,r){var t=E(e);return this.startOf(r)<=t&&t<=this.endOf(r)},y.isAfter=function(e,r){return E(e)<this.startOf(r)},y.isBefore=function(e,r){return this.endOf(r)<E(e)},y.$g=function(e,r,t){return D.u(e)?this[r]:this.set(t,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,r){var t=this,n=!!D.u(r)||r,c=D.p(e),b=function(e,r){var i=D.w(t.$u?Date.UTC(t.$y,r,e):new Date(t.$y,r,e),t);return n?i:i.endOf(a)},g=function(e,r){return D.w(t.toDate()[e].apply(t.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(r)),t)},m=this.$W,f=this.$M,y=this.$D,p="set"+(this.$u?"UTC":"");switch(c){case u:return n?b(1,0):b(31,11);case d:return n?b(1,f):b(0,f+1);case l:var v=this.$locale().weekStart||0,x=(m<v?m+7:m)-v;return b(n?y-x:y+(6-x),f);case a:case h:return g(p+"Hours",0);case s:return g(p+"Minutes",1);case o:return g(p+"Seconds",2);case i:return g(p+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,r){var t,l=D.p(e),c="set"+(this.$u?"UTC":""),b=(t={},t[a]=c+"Date",t[h]=c+"Date",t[d]=c+"Month",t[u]=c+"FullYear",t[s]=c+"Hours",t[o]=c+"Minutes",t[i]=c+"Seconds",t[n]=c+"Milliseconds",t)[l],g=l===a?this.$D+(r-this.$W):r;if(l===d||l===u){var m=this.clone().set(h,1);m.$d[b](g),m.init(),this.$d=m.set(h,Math.min(this.$D,m.daysInMonth())).$d}else b&&this.$d[b](g);return this.init(),this},y.set=function(e,r){return this.clone().$set(e,r)},y.get=function(e){return this[D.p(e)]()},y.add=function(n,c){var h,b=this;n=Number(n);var g=D.p(c),m=function(e){var r=E(b);return D.w(r.date(r.date()+Math.round(e*n)),b)};if(g===d)return this.set(d,this.$M+n);if(g===u)return this.set(u,this.$y+n);if(g===a)return m(1);if(g===l)return m(7);var f=(h={},h[o]=r,h[s]=t,h[i]=e,h)[g]||1,y=this.$d.getTime()+n*f;return D.w(y,this)},y.subtract=function(e,r){return this.add(-1*e,r)},y.format=function(e){var r=this,t=this.$locale();if(!this.isValid())return t.invalidDate||b;var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=D.z(this),o=this.$H,s=this.$m,a=this.$M,l=t.weekdays,d=t.months,c=t.meridiem,u=function(e,t,i,o){return e&&(e[t]||e(r,n))||i[t].slice(0,o)},h=function(e){return D.s(o%12||12,e,"0")},g=c||function(e,r,t){var n=e<12?"AM":"PM";return t?n.toLowerCase():n};return n.replace(m,(function(e,n){return n||function(e){switch(e){case"YY":return String(r.$y).slice(-2);case"YYYY":return D.s(r.$y,4,"0");case"M":return a+1;case"MM":return D.s(a+1,2,"0");case"MMM":return u(t.monthsShort,a,d,3);case"MMMM":return u(d,a);case"D":return r.$D;case"DD":return D.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return u(t.weekdaysMin,r.$W,l,2);case"ddd":return u(t.weekdaysShort,r.$W,l,3);case"dddd":return l[r.$W];case"H":return String(o);case"HH":return D.s(o,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return g(o,s,!0);case"A":return g(o,s,!1);case"m":return String(s);case"mm":return D.s(s,2,"0");case"s":return String(r.$s);case"ss":return D.s(r.$s,2,"0");case"SSS":return D.s(r.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(n,h,b){var g,m=this,f=D.p(h),y=E(n),p=(y.utcOffset()-this.utcOffset())*r,v=this-y,x=function(){return D.m(m,y)};switch(f){case u:g=x()/12;break;case d:g=x();break;case c:g=x()/3;break;case l:g=(v-p)/6048e5;break;case a:g=(v-p)/864e5;break;case s:g=v/t;break;case o:g=v/r;break;case i:g=v/e;break;default:g=v}return b?g:D.a(g)},y.daysInMonth=function(){return this.endOf(d).$D},y.$locale=function(){return x[this.$L]},y.locale=function(e,r){if(!e)return this.$L;var t=this.clone(),n=$(e,r,!0);return n&&(t.$L=n),t},y.clone=function(){return D.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},f}(),B=C.prototype;return E.prototype=B,[["$ms",n],["$s",i],["$m",o],["$H",s],["$W",a],["$M",d],["$y",u],["$D",h]].forEach((function(e){B[e[1]]=function(r){return this.$g(r,e[0],e[1])}})),E.extend=function(e,r){return e.$i||(e(r,C,E),e.$i=!0),E},E.locale=$,E.isDayjs=w,E.unix=function(e){return E(1e3*e)},E.en=x[v],E.Ls=x,E.p={},E}();var _=S(O.exports),T={exports:{}};T.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,t=/\d\d/,n=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},s=function(e){return(e=+e)+(e>68?1900:2e3)},a=function(e){return function(r){this[e]=+r}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var r=e.match(/([+-]|\d\d)/g),t=60*r[1]+(+r[2]||0);return 0===t?0:"+"===r[0]?-t:t}(e)}],d=function(e){var r=o[e];return r&&(r.indexOf?r:r.s.concat(r.f))},c=function(e,r){var t,n=o.meridiem;if(n){for(var i=1;i<=24;i+=1)if(e.indexOf(n(i,0,r))>-1){t=i>12;break}}else t=e===(r?"pm":"PM");return t},u={A:[i,function(e){this.afternoon=c(e,!1)}],a:[i,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[t,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,a("seconds")],ss:[n,a("seconds")],m:[n,a("minutes")],mm:[n,a("minutes")],H:[n,a("hours")],h:[n,a("hours")],HH:[n,a("hours")],hh:[n,a("hours")],D:[n,a("day")],DD:[t,a("day")],Do:[i,function(e){var r=o.ordinal,t=e.match(/\d+/);if(this.day=t[0],r)for(var n=1;n<=31;n+=1)r(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,a("month")],MM:[t,a("month")],MMM:[i,function(e){var r=d("months"),t=(d("monthsShort")||r.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],MMMM:[i,function(e){var r=d("months").indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],Y:[/[+-]?\d+/,a("year")],YY:[t,function(e){this.year=s(e)}],YYYY:[/\d{4}/,a("year")],Z:l,ZZ:l};function h(t){var n,i;n=t,i=o&&o.formats;for(var s=(t=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(r,t,n){var o=n&&n.toUpperCase();return t||i[n]||e[n]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,r,t){return r||t.slice(1)}))}))).match(r),a=s.length,l=0;l<a;l+=1){var d=s[l],c=u[d],h=c&&c[0],b=c&&c[1];s[l]=b?{regex:h,parser:b}:d.replace(/^\[|\]$/g,"")}return function(e){for(var r={},t=0,n=0;t<a;t+=1){var i=s[t];if("string"==typeof i)n+=i.length;else{var o=i.regex,l=i.parser,d=e.slice(n),c=o.exec(d)[0];l.call(r,c),e=e.replace(c,"")}}return function(e){var r=e.afternoon;if(void 0!==r){var t=e.hours;r?t<12&&(e.hours+=12):12===t&&(e.hours=0),delete e.afternoon}}(r),r}}return function(e,r,t){t.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(s=e.parseTwoDigitYear);var n=r.prototype,i=n.parse;n.parse=function(e){var r=e.date,n=e.utc,s=e.args;this.$u=n;var a=s[1];if("string"==typeof a){var l=!0===s[2],d=!0===s[3],c=l||d,u=s[2];d&&(u=s[2]),o=this.$locale(),!l&&u&&(o=t.Ls[u]),this.$d=function(e,r,t){try{if(["x","X"].indexOf(r)>-1)return new Date(("X"===r?1e3:1)*e);var n=h(r)(e),i=n.year,o=n.month,s=n.day,a=n.hours,l=n.minutes,d=n.seconds,c=n.milliseconds,u=n.zone,b=new Date,g=s||(i||o?1:b.getDate()),m=i||b.getFullYear(),f=0;i&&!o||(f=o>0?o-1:b.getMonth());var y=a||0,p=l||0,v=d||0,x=c||0;return u?new Date(Date.UTC(m,f,g,y,p,v,x+60*u.offset*1e3)):t?new Date(Date.UTC(m,f,g,y,p,v,x)):new Date(m,f,g,y,p,v,x)}catch(e){return new Date("")}}(r,a,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),c&&r!=this.format(a)&&(this.$d=new Date("")),o={}}else if(a instanceof Array)for(var b=a.length,g=1;g<=b;g+=1){s[1]=a[g-1];var m=t.apply(this,s);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}g===b&&(this.$d=new Date(""))}else i.call(this,e)}}}();var Y=S(T.exports),L={exports:{}};L.exports=function(e,r,t){r.prototype.isBetween=function(e,r,n,i){var o=t(e),s=t(r),a="("===(i=i||"()")[0],l=")"===i[1];return(a?this.isAfter(o,n):!this.isBefore(o,n))&&(l?this.isBefore(s,n):!this.isAfter(s,n))||(a?this.isBefore(o,n):!this.isAfter(o,n))&&(l?this.isAfter(s,n):!this.isBefore(s,n))}};var j=S(L.exports),H={exports:{}};H.exports=function(e,r){r.prototype.isSameOrAfter=function(e,r){return this.isSame(e,r)||this.isAfter(e,r)}};var R=S(H.exports),W={exports:{}};W.exports=function(e,r){r.prototype.isSameOrBefore=function(e,r){return this.isSame(e,r)||this.isBefore(e,r)}};var I,P,N,V=S(W.exports),Z={exports:{}},U=S(Z.exports=(I={year:0,month:1,day:2,hour:3,minute:4,second:5},P={},function(e,r,t){var n,i=function(e,r,t){void 0===t&&(t={});var n=new Date(e),i=function(e,r){void 0===r&&(r={});var t=r.timeZoneName||"short",n=e+"|"+t,i=P[n];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:t}),P[n]=i),i}(r,t);return i.formatToParts(n)},o=function(e,r){for(var n=i(e,r),o=[],s=0;s<n.length;s+=1){var a=n[s],l=a.type,d=a.value,c=I[l];c>=0&&(o[c]=parseInt(d,10))}var u=o[3],h=24===u?0:u,b=o[0]+"-"+o[1]+"-"+o[2]+" "+h+":"+o[4]+":"+o[5]+":000",g=+e;return(t.utc(b).valueOf()-(g-=g%1e3))/6e4},s=r.prototype;s.tz=function(e,r){void 0===e&&(e=n);var i=this.utcOffset(),o=this.toDate(),s=o.toLocaleString("en-US",{timeZone:e}),a=Math.round((o-new Date(s))/1e3/60),l=t(s,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-a,!0);if(r){var d=l.utcOffset();l=l.add(i-d,"minute")}return l.$x.$timezone=e,l},s.offsetName=function(e){var r=this.$x.$timezone||t.tz.guess(),n=i(this.valueOf(),r,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var a=s.startOf;s.startOf=function(e,r){if(!this.$x||!this.$x.$timezone)return a.call(this,e,r);var n=t(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return a.call(n,e,r).tz(this.$x.$timezone,!0)},t.tz=function(e,r,i){var s=i&&r,a=i||r||n,l=o(+t(),a);if("string"!=typeof e)return t(e).tz(a);var d=function(e,r,t){var n=e-60*r*1e3,i=o(n,t);if(r===i)return[n,r];var s=o(n-=60*(i-r)*1e3,t);return i===s?[n,i]:[e-60*Math.min(i,s)*1e3,Math.max(i,s)]}(t.utc(e,s).valueOf(),l,a),c=d[0],u=d[1],h=t(c).utcOffset(u);return h.$x.$timezone=a,h},t.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},t.tz.setDefault=function(e){n=e}}));_.extend(j),_.extend(V),_.extend(R),_.extend(Y),_.extend(U),function(e){e.generateDays=e=>{const r=e.startOf("month"),t=_(r).startOf("week");return X(t).map((e=>q(e)))},e.generateDaysForCurrentWeek=e=>{const r=e.startOf("week");return q(r)},e.generateMonths=e=>{const r=[];for(let t=0;t<12;t++){const n=e.month(t);r.push(_(n))}return r},e.generateDecadeOfYears=e=>{const r=e.year(),t=10*Math.floor(r/10),n=e.year(t),i=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)i.push(n.add(e,"year"));return i},e.getStartEndDecade=e=>{const r=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:r,endDecade:+_(`${r+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const r=_(e,"HH:mm");return r.isValid()?r.format("h:mm a"):""},e.isWithinRange=(e,r,t,n="day")=>!r&&!t||(r&&t?e.isBetween(r,t,n,"[]"):r?e.isSameOrAfter(r,n):e.isSameOrBefore(t,n)),e.isPreviousMonthWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"month"),t,void 0,"month"),e.isPreviousYearWithinRange=(r,t)=>e.isWithinRange(r.subtract(1,"year"),t,void 0,"year"),e.isPreviousDecadeWithinRange=(r,t)=>{const{beginDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).subtract(1,"year"),t,void 0,"year")},e.isNextMonthWithinRange=(r,t)=>e.isWithinRange(r.add(1,"month"),void 0,t,"month"),e.isNextYearWithinRange=(r,t)=>e.isWithinRange(r.add(1,"year"),void 0,t,"year"),e.isNextDecadeWithinRange=(r,t)=>{const{endDecade:n}=e.getStartEndDecade(r);return e.isWithinRange(r.year(n).add(1,"year"),void 0,t,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,r)=>({start:e.format("YYYY-MM-DD"),end:e.add(r-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(r,t,n,i)=>{const o=e.isWithinRange(r,n?_(n):void 0,i?_(i):void 0),s=t&&t.includes(r.format("YYYY-MM-DD"));return!o||!!s}}(N||(N={}));const X=e=>{const r=[e];for(let t=1;t<6;t++){const n=e.add(t,"week");r.push(n)}return r},q=e=>{const r=[];for(let t=0;t<7;t++){const n=e.add(t,"day");r.push(n)}return r},J=[1,3,5,7,8,10,12],G=[4,6,9,11];var Q,K,ee,re;!function(e){e.clampDay=(r,t,n)=>{const i=parseInt(r),o=parseInt(t),s=parseInt(n);return 0==i?"1":J.includes(o)?Math.min(i,31).toString():G.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(s)?Math.min(i,29).toString():Math.min(i,28).toString():r},e.clampMonth=e=>{const r=parseInt(e);return 0==r?"1":r>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,r,t="HH:mm")=>{const n=_(e,t);return _(r,t).diff(n,"minute")},e.toDayjs=e=>e?_(e):_(),e.addMinutesToTime=(e,r,t="HH:mm")=>_(e,t).add(r,"minutes").format(t),e.isSame=(e,r,t="day")=>_(e).isSame(_(r),t)}(Q||(Q={})),function(e){e.isDateDisabled=(e,r)=>{const{disabledDates:t,minDate:n,maxDate:i}=r;return!!(e&&t&&t.length&&t.includes(e))||(!(!n||!_(e).isBefore(n,"day"))||!(!i||!_(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(_(e).isValid())return e}return""}}(K||(K={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(ee||(ee={})),function(e){e.transformWithSpaces=(e,r)=>{const t="(.{"+r+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(t,"g"),"$1 ").trim()},e.padValue=(e,r)=>{if("0"===e)return r?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,r)=>{const t=Math.floor(r/9);return e.length>=2*t||1===e.split(" ").length&&e.length>t},e.truncateOneLine=(e,r,t,n,i=8)=>{let o=0;r>t&&(o=Math.floor((r-t)/i));const s=n+o;if(s<e.length){const r=Math.floor(s/2);return e.substring(0,r)+" ... "+e.substring(e.length-r,e.length)}return e},e.truncateTwoLines=(e,r,t,n=1.2)=>{const i=Math.floor(2*r/(.6*t))*(2/n);if(e.length<=i)return e;const o=Math.floor(.6*i),s=Math.floor(.2*i);return`${e.substring(0,o)}...${e.substring(e.length-s)}`},e.getTextWidth=(r,t)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=t;return n.measureText(r).width},e.maskValue=(e,t)=>{if(!e)return e;const{maskRange:n,unmaskRange:i,maskChar:o="•",maskRegex:s,maskTransformer:a}=t;if(a)return a(e);if(s)return e.replace(s,o);if(n){const{startIndex:t,endIndex:i}=r(n[0],n[1]);return e.substring(0,t)+o.repeat(e.substring(t,i+1).length)+e.substring(i+1)}if(i){const{startIndex:t,endIndex:n}=r(i[0],i[1]);return o.repeat(e.substring(0,t).length)+e.substring(t,n+1)+o.repeat(e.substring(n+1).length)}return e};const r=(e,r)=>e<r?{startIndex:e,endIndex:r}:{startIndex:r,endIndex:e}}(re||(re={}));var te=function(e,r){return te=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])},te(e,r)};var ne=function(){return ne=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var i in r=arguments[t])Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i]);return e},ne.apply(this,arguments)};var ie="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var oe=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},se="object"==typeof ie&&ie&&ie.Object===Object&&ie,ae="object"==typeof self&&self&&self.Object===Object&&self,le=se||ae||Function("return this")(),de=le,ce=function(){return de.Date.now()},ue=/\s/;var he=function(e){for(var r=e.length;r--&&ue.test(e.charAt(r)););return r},be=/^\s+/;var ge=function(e){return e?e.slice(0,he(e)+1).replace(be,""):e},me=le.Symbol,fe=me,ye=Object.prototype,pe=ye.hasOwnProperty,ve=ye.toString,xe=fe?fe.toStringTag:void 0;var Fe=function(e){var r=pe.call(e,xe),t=e[xe];try{e[xe]=void 0;var n=!0}catch(e){}var i=ve.call(e);return n&&(r?e[xe]=t:delete e[xe]),i},we=Object.prototype.toString;var $e=Fe,Ee=function(e){return we.call(e)},De=me?me.toStringTag:void 0;var Ce=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":De&&De in Object(e)?$e(e):Ee(e)},Be=function(e){return null!=e&&"object"==typeof e};var Ae=ge,ze=oe,ke=function(e){return"symbol"==typeof e||Be(e)&&"[object Symbol]"==Ce(e)},Me=/^[-+]0x[0-9a-f]+$/i,Se=/^0b[01]+$/i,Oe=/^0o[0-7]+$/i,_e=parseInt;var Te=oe,Ye=ce,Le=function(e){if("number"==typeof e)return e;if(ke(e))return NaN;if(ze(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=ze(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=Ae(e);var t=Se.test(e);return t||Oe.test(e)?_e(e.slice(2),t?2:8):Me.test(e)?NaN:+e},je=Math.max,He=Math.min;var Re=function(e,r,t){var n,i,o,s,a,l,d=0,c=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(r){var t=n,o=i;return n=i=void 0,d=r,s=e.apply(o,t)}function g(e){var t=e-l;return void 0===l||t>=r||t<0||u&&e-d>=o}function m(){var e=Ye();if(g(e))return f(e);a=setTimeout(m,function(e){var t=r-(e-l);return u?He(t,o-(e-d)):t}(e))}function f(e){return a=void 0,h&&n?b(e):(n=i=void 0,s)}function y(){var e=Ye(),t=g(e);if(n=arguments,i=this,l=e,t){if(void 0===a)return function(e){return d=e,a=setTimeout(m,r),c?b(e):s}(l);if(u)return clearTimeout(a),a=setTimeout(m,r),b(l)}return void 0===a&&(a=setTimeout(m,r)),s}return r=Le(r)||0,Te(t)&&(c=!!t.leading,o=(u="maxWait"in t)?je(Le(t.maxWait)||0,r):o,h="trailing"in t?!!t.trailing:h),y.cancel=function(){void 0!==a&&clearTimeout(a),d=0,n=l=i=a=void 0},y.flush=function(){return void 0===a?s:f(Ye())},y},We=Re,Ie=oe;var Pe=function(e,r,t){var n=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Ie(t)&&(n="leading"in t?!!t.leading:n,i="trailing"in t?!!t.trailing:i),We(e,r,{leading:n,maxWait:r,trailing:i})},Ne=function(e,r,t,n){switch(r){case"debounce":return Re(e,t,n);case"throttle":return Pe(e,t,n);default:return e}},Ve=function(e){return"function"==typeof e},Ze=function(){return"undefined"==typeof window},Ue=function(e){return e instanceof Element||e instanceof HTMLDocument},Xe=function(e,r,t,n){return function(i){var o=i.width,s=i.height;r((function(r){return r.width===o&&r.height===s||r.width===o&&!n||r.height===s&&!t?r:(e&&Ve(e)&&e(o,s),{width:o,height:s})}))}};!function(e){function r(r){var t=e.call(this,r)||this;t.cancelHandler=function(){t.resizeHandler&&t.resizeHandler.cancel&&(t.resizeHandler.cancel(),t.resizeHandler=null)},t.attachObserver=function(){var e=t.props,r=e.targetRef,n=e.observerOptions;if(!Ze()){r&&r.current&&(t.targetRef.current=r.current);var i=t.getElement();i&&(t.observableElement&&t.observableElement===i||(t.observableElement=i,t.resizeObserver.observe(i,n)))}},t.getElement=function(){var e=t.props,r=e.querySelector,n=e.targetDomEl;if(Ze())return null;if(r)return document.querySelector(r);if(n&&Ue(n))return n;if(t.targetRef&&Ue(t.targetRef.current))return t.targetRef.current;var i=w(t);if(!i)return null;switch(t.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},t.createResizeHandler=function(e){var r=t.props,n=r.handleWidth,i=void 0===n||n,o=r.handleHeight,s=void 0===o||o,a=r.onResize;if(i||s){var l=Xe(a,t.setState.bind(t),i,s);e.forEach((function(e){var r=e&&e.contentRect||{},n=r.width,i=r.height;!t.skipOnMount&&!Ze()&&l({width:n,height:i}),t.skipOnMount=!1}))}},t.getRenderType=function(){var e=t.props,r=e.render,n=e.children;return Ve(r)?"renderProp":Ve(n)?"childFunction":l(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=r.skipOnMount,i=r.refreshMode,o=r.refreshRate,s=void 0===o?1e3:o,a=r.refreshOptions;return t.state={width:void 0,height:void 0},t.skipOnMount=n,t.targetRef=d(),t.observableElement=null,Ze()||(t.resizeHandler=Ne(t.createResizeHandler,i,s,a),t.resizeObserver=new window.ResizeObserver(t.resizeHandler)),t}(function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function t(){this.constructor=e}te(e,r),e.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)})(r,e),r.prototype.componentDidMount=function(){this.attachObserver()},r.prototype.componentDidUpdate=function(){this.attachObserver()},r.prototype.componentWillUnmount=function(){Ze()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},r.prototype.render=function(){var e,r=this.props,t=r.render,n=r.children,i=r.nodeType,s=void 0===i?"div":i,a=this.state,l={width:a.width,height:a.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return t&&t(l);case"childFunction":return(e=n)(l);case"child":if((e=n).type&&"string"==typeof e.type){var d=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(t[n[i]]=e[n[i]])}return t}(l,["targetRef"]);return c(e,d)}return c(e,l);case"childArray":return(e=n).map((function(e){return!!e&&c(e,l)}));default:return o.createElement(s,null)}}}(u);var qe=Ze()?h:b;function Je(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(t[n[i]]=e[n[i]])}return t}"function"==typeof SuppressedError&&SuppressedError;var Ge=Array.isArray,Qe="object"==typeof M&&M&&M.Object===Object&&M,Ke="object"==typeof self&&self&&self.Object===Object&&self,er=Qe||Ke||Function("return this")(),rr=er.Symbol,tr=rr,nr=Object.prototype,ir=nr.hasOwnProperty,or=nr.toString,sr=tr?tr.toStringTag:void 0;var ar=function(e){var r=ir.call(e,sr),t=e[sr];try{e[sr]=void 0;var n=!0}catch(e){}var i=or.call(e);return n&&(r?e[sr]=t:delete e[sr]),i},lr=Object.prototype.toString;var dr=ar,cr=function(e){return lr.call(e)},ur=rr?rr.toStringTag:void 0;var hr=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":ur&&ur in Object(e)?dr(e):cr(e)};var br=hr,gr=function(e){return null!=e&&"object"==typeof e};var mr=function(e){return"symbol"==typeof e||gr(e)&&"[object Symbol]"==br(e)},fr=Ge,yr=mr,pr=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,vr=/^\w*$/;var xr=function(e,r){if(fr(e))return!1;var t=typeof e;return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=e&&!yr(e))||(vr.test(e)||!pr.test(e)||null!=r&&e in Object(r))};var Fr=function(e){var r=typeof e;return null!=e&&("object"==r||"function"==r)},wr=hr,$r=Fr;var Er,Dr=function(e){if(!$r(e))return!1;var r=wr(e);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},Cr=er["__core-js_shared__"],Br=(Er=/[^.]+$/.exec(Cr&&Cr.keys&&Cr.keys.IE_PROTO||""))?"Symbol(src)_1."+Er:"";var Ar=function(e){return!!Br&&Br in e},zr=Function.prototype.toString;var kr=Dr,Mr=Ar,Sr=Fr,Or=function(e){if(null!=e){try{return zr.call(e)}catch(e){}try{return e+""}catch(e){}}return""},_r=/^\[object .+?Constructor\]$/,Tr=Function.prototype,Yr=Object.prototype,Lr=Tr.toString,jr=Yr.hasOwnProperty,Hr=RegExp("^"+Lr.call(jr).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Rr=function(e,r){return null==e?void 0:e[r]},Wr=function(e){return!(!Sr(e)||Mr(e))&&(kr(e)?Hr:_r).test(Or(e))},Ir=Rr;var Pr=function(e,r){var t=Ir(e,r);return Wr(t)?t:void 0},Nr=Pr(Object,"create"),Vr=Nr;var Zr=function(){this.__data__=Vr?Vr(null):{},this.size=0};var Ur=function(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r},Xr=Nr,qr=Object.prototype.hasOwnProperty;var Jr=function(e){var r=this.__data__;if(Xr){var t=r[e];return"__lodash_hash_undefined__"===t?void 0:t}return qr.call(r,e)?r[e]:void 0},Gr=Nr,Qr=Object.prototype.hasOwnProperty;var Kr=function(e){var r=this.__data__;return Gr?void 0!==r[e]:Qr.call(r,e)},et=Nr;var rt=function(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=et&&void 0===r?"__lodash_hash_undefined__":r,this},tt=Zr,nt=Ur,it=Jr,ot=Kr,st=rt;function at(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}at.prototype.clear=tt,at.prototype.delete=nt,at.prototype.get=it,at.prototype.has=ot,at.prototype.set=st;var lt=at;var dt=function(){this.__data__=[],this.size=0};var ct=function(e,r){return e===r||e!=e&&r!=r};var ut=function(e,r){for(var t=e.length;t--;)if(ct(e[t][0],r))return t;return-1},ht=ut,bt=Array.prototype.splice;var gt=function(e){var r=this.__data__,t=ht(r,e);return!(t<0)&&(t==r.length-1?r.pop():bt.call(r,t,1),--this.size,!0)},mt=ut;var ft=function(e){var r=this.__data__,t=mt(r,e);return t<0?void 0:r[t][1]},yt=ut;var pt=function(e){return yt(this.__data__,e)>-1},vt=ut;var xt=function(e,r){var t=this.__data__,n=vt(t,e);return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this},Ft=dt,wt=gt,$t=ft,Et=pt,Dt=xt;function Ct(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Ct.prototype.clear=Ft,Ct.prototype.delete=wt,Ct.prototype.get=$t,Ct.prototype.has=Et,Ct.prototype.set=Dt;var Bt=Ct,At=Pr(er,"Map"),zt=lt,kt=Bt,Mt=At;var St=function(e){var r=typeof e;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e};var Ot=function(e,r){var t=e.__data__;return St(r)?t["string"==typeof r?"string":"hash"]:t.map},_t=Ot;var Tt=function(e){var r=_t(this,e).delete(e);return this.size-=r?1:0,r},Yt=Ot;var Lt=function(e){return Yt(this,e).get(e)},jt=Ot;var Ht=function(e){return jt(this,e).has(e)},Rt=Ot;var Wt=function(e,r){var t=Rt(this,e),n=t.size;return t.set(e,r),this.size+=t.size==n?0:1,this},It=function(){this.size=0,this.__data__={hash:new zt,map:new(Mt||kt),string:new zt}},Pt=Tt,Nt=Lt,Vt=Ht,Zt=Wt;function Ut(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}Ut.prototype.clear=It,Ut.prototype.delete=Pt,Ut.prototype.get=Nt,Ut.prototype.has=Vt,Ut.prototype.set=Zt;var Xt=Ut;function qt(e,r){if("function"!=typeof e||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var t=function(){var n=arguments,i=r?r.apply(this,n):n[0],o=t.cache;if(o.has(i))return o.get(i);var s=e.apply(this,n);return t.cache=o.set(i,s)||o,s};return t.cache=new(qt.Cache||Xt),t}qt.Cache=Xt;var Jt=qt;var Gt=function(e){var r=Jt(e,(function(e){return 500===t.size&&t.clear(),e})),t=r.cache;return r},Qt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Kt=/\\(\\)?/g,en=Gt((function(e){var r=[];return 46===e.charCodeAt(0)&&r.push(""),e.replace(Qt,(function(e,t,n,i){r.push(n?i.replace(Kt,"$1"):t||e)})),r}));var rn=function(e,r){for(var t=-1,n=null==e?0:e.length,i=Array(n);++t<n;)i[t]=r(e[t],t,e);return i},tn=Ge,nn=mr,on=rr?rr.prototype:void 0,sn=on?on.toString:void 0;var an=function e(r){if("string"==typeof r)return r;if(tn(r))return rn(r,e)+"";if(nn(r))return sn?sn.call(r):"";var t=r+"";return"0"==t&&1/r==-1/0?"-0":t},ln=an;var dn=Ge,cn=xr,un=en,hn=function(e){return null==e?"":ln(e)};var bn=mr;var gn=function(e,r){return dn(e)?e:cn(e,r)?[e]:un(hn(e))},mn=function(e){if("string"==typeof e||bn(e))return e;var r=e+"";return"0"==r&&1/e==-1/0?"-0":r};var fn=function(e,r){for(var t=0,n=(r=gn(r,e)).length;null!=e&&t<n;)e=e[mn(r[t++])];return t&&t==n?e:void 0};var yn=S((function(e,r,t){var n=null==e?void 0:fn(e,r);return void 0===n?t:n}));const pn=(e,r,t)=>yn(t,r)||yn(e,r),vn=(e,r)=>{const t=r||e.defaultValue;return yn(e.collections,t)},xn={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},Fn=e=>r=>{var t;const n=r.theme,i=vn(xn,null==n?void 0:n.borderScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.border)?`${pn(i,e,n.overrides.border)}px`:`${i[e]}px`},wn={"width-005":Fn("width-005"),"width-010":Fn("width-010"),"width-020":Fn("width-020"),"width-040":Fn("width-040"),solid:($n="solid",e=>{var r;const t=e.theme,n=vn(xn,null==t?void 0:t.borderScheme),i=(null===(r=null==t?void 0:t.overrides)||void 0===r?void 0:r.border)?pn(n,$n,t.overrides.border):n[$n];return"function"==typeof i?i(e):i})};var $n;const En={collections:{lifesg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},bookingsg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},rbs:{"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},mylegacy:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ccube:{"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},pa:{"brand-10":"#89000B","brand-20":"#B0000E","brand-30":"#C4000F","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"}},defaultValue:"lifesg"},Dn=e=>r=>{var t;const n=r.theme,i=vn(En,null==n?void 0:n.colourScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.primitiveColour)?pn(i,e,n.overrides.primitiveColour):i[e]},Cn={"brand-10":Dn("brand-10"),"brand-20":Dn("brand-20"),"brand-30":Dn("brand-30"),"brand-40":Dn("brand-40"),"brand-50":Dn("brand-50"),"brand-60":Dn("brand-60"),"brand-70":Dn("brand-70"),"brand-80":Dn("brand-80"),"brand-90":Dn("brand-90"),"brand-95":Dn("brand-95"),"brand-100":Dn("brand-100"),"primary-10":Dn("primary-10"),"primary-20":Dn("primary-20"),"primary-30":Dn("primary-30"),"primary-40":Dn("primary-40"),"primary-50":Dn("primary-50"),"primary-60":Dn("primary-60"),"primary-70":Dn("primary-70"),"primary-80":Dn("primary-80"),"primary-90":Dn("primary-90"),"primary-95":Dn("primary-95"),"primary-100":Dn("primary-100"),"secondary-10":Dn("secondary-10"),"secondary-20":Dn("secondary-20"),"secondary-30":Dn("secondary-30"),"secondary-40":Dn("secondary-40"),"secondary-50":Dn("secondary-50"),"secondary-60":Dn("secondary-60"),"secondary-70":Dn("secondary-70"),"secondary-80":Dn("secondary-80"),"secondary-90":Dn("secondary-90"),"secondary-95":Dn("secondary-95"),"secondary-100":Dn("secondary-100"),"neutral-10":Dn("neutral-10"),"neutral-20":Dn("neutral-20"),"neutral-30":Dn("neutral-30"),"neutral-40":Dn("neutral-40"),"neutral-50":Dn("neutral-50"),"neutral-60":Dn("neutral-60"),"neutral-70":Dn("neutral-70"),"neutral-80":Dn("neutral-80"),"neutral-90":Dn("neutral-90"),"neutral-95":Dn("neutral-95"),"neutral-100":Dn("neutral-100"),"success-10":Dn("success-10"),"success-20":Dn("success-20"),"success-30":Dn("success-30"),"success-40":Dn("success-40"),"success-50":Dn("success-50"),"success-60":Dn("success-60"),"success-70":Dn("success-70"),"success-80":Dn("success-80"),"success-90":Dn("success-90"),"success-95":Dn("success-95"),"success-100":Dn("success-100"),"warning-10":Dn("warning-10"),"warning-20":Dn("warning-20"),"warning-30":Dn("warning-30"),"warning-40":Dn("warning-40"),"warning-50":Dn("warning-50"),"warning-60":Dn("warning-60"),"warning-70":Dn("warning-70"),"warning-80":Dn("warning-80"),"warning-90":Dn("warning-90"),"warning-95":Dn("warning-95"),"warning-100":Dn("warning-100"),"error-10":Dn("error-10"),"error-20":Dn("error-20"),"error-30":Dn("error-30"),"error-40":Dn("error-40"),"error-50":Dn("error-50"),"error-60":Dn("error-60"),"error-70":Dn("error-70"),"error-80":Dn("error-80"),"error-90":Dn("error-90"),"error-95":Dn("error-95"),"error-100":Dn("error-100"),"info-10":Dn("info-10"),"info-20":Dn("info-20"),"info-30":Dn("info-30"),"info-40":Dn("info-40"),"info-50":Dn("info-50"),"info-60":Dn("info-60"),"info-70":Dn("info-70"),"info-80":Dn("info-80"),"info-90":Dn("info-90"),"info-95":Dn("info-95"),"info-100":Dn("info-100"),white:Dn("white"),black:Dn("black"),"primary-inverse":Dn("primary-inverse")},Bn={text:Dn("neutral-20"),"text-subtle":Dn("neutral-30"),"text-subtler":Dn("neutral-50"),"text-subtlest":Dn("neutral-60"),"text-primary":Dn("primary-50"),"text-hover":Dn("primary-40"),"text-selected":Dn("primary-50"),"text-selected-hover":Dn("primary-40"),"text-disabled":Dn("neutral-50"),"text-disabled-subtle":Dn("neutral-60"),"text-disabled-subtlest":Dn("neutral-80"),"text-selected-disabled":Dn("neutral-20"),"text-success":Dn("success-40"),"text-warning":Dn("warning-40"),"text-error":Dn("error-40"),"text-info":Dn("info-40"),"text-inverse":Dn("white"),icon:Dn("neutral-50"),"icon-subtle":Dn("neutral-60"),"icon-strongest":Dn("neutral-20"),"icon-primary":Dn("primary-50"),"icon-primary-subtle":Dn("primary-60"),"icon-primary-subtlest":Dn("primary-70"),"icon-hover":Dn("primary-40"),"icon-selected":Dn("primary-50"),"icon-selected-hover":Dn("primary-40"),"icon-disabled":Dn("neutral-50"),"icon-disabled-subtle":Dn("neutral-60"),"icon-selected-disabled":Dn("neutral-60"),"icon-success":Dn("success-50"),"icon-warning":Dn("warning-60"),"icon-error":Dn("error-50"),"icon-error-strong":Dn("error-40"),"icon-info":Dn("info-50"),"icon-inverse":Dn("white"),"icon-primary-inverse":Dn("primary-inverse"),border:Dn("neutral-90"),"border-strong":Dn("neutral-70"),"border-stronger":Dn("neutral-50"),"border-primary":Dn("primary-50"),"border-primary-subtle":Dn("primary-60"),"border-hover":Dn("primary-90"),"border-hover-strong":Dn("primary-60"),"border-selected":Dn("primary-50"),"border-selected-subtle":Dn("primary-70"),"border-selected-subtlest":Dn("primary-90"),"border-selected-hover":Dn("primary-40"),"border-focus":Dn("primary-60"),"border-focus-strong":Dn("primary-50"),"border-disabled":Dn("neutral-90"),"border-selected-disabled":Dn("neutral-70"),"border-success":Dn("success-60"),"border-warning":Dn("warning-60"),"border-error":Dn("error-60"),"border-error-focus":Dn("error-60"),"border-error-focus-strong":Dn("error-40"),"border-error-strong":Dn("error-40"),"border-info":Dn("info-60"),bg:Dn("white"),"bg-strong":Dn("neutral-100"),"bg-stronger":Dn("neutral-95"),"bg-strongest":Dn("neutral-90"),"bg-hover":Dn("primary-95"),"bg-hover-strong":Dn("primary-90"),"bg-hover-subtle":Dn("primary-100"),"bg-hover-neutral":Dn("neutral-100"),"bg-hover-neutral-strong":Dn("neutral-90"),"bg-selected":Dn("primary-95"),"bg-selected-hover":Dn("primary-90"),"bg-selected-strong":Dn("primary-90"),"bg-selected-stronger":Dn("primary-70"),"bg-selected-strongest":Dn("primary-50"),"bg-selected-strongest-hover":Dn("primary-40"),"bg-disabled":Dn("neutral-95"),"bg-selected-disabled":Dn("neutral-95"),"bg-selected-stronger-disabled":Dn("neutral-70"),"bg-success":Dn("success-100"),"bg-success-hover":Dn("success-95"),"bg-success-strong":Dn("success-50"),"bg-success-strong-hover":Dn("success-40"),"bg-warning":Dn("warning-100"),"bg-warning-hover":Dn("warning-95"),"bg-warning-strong":Dn("warning-50"),"bg-warning-strong-hover":Dn("warning-40"),"bg-info":Dn("info-100"),"bg-info-hover":Dn("info-95"),"bg-info-strong":Dn("info-50"),"bg-info-strong-hover":Dn("info-40"),"bg-error":Dn("error-100"),"bg-error-hover":Dn("error-95"),"bg-error-strong":Dn("error-50"),"bg-error-strong-hover":Dn("error-40"),"bg-inverse":Dn("neutral-20"),"bg-inverse-subtle":Dn("neutral-30"),"bg-inverse-subtler":Dn("neutral-50"),"bg-inverse-subtlest":Dn("neutral-60"),"bg-inverse-hover":Dn("neutral-40"),"bg-primary":Dn("primary-50"),"bg-primary-subtle":Dn("primary-60"),"bg-primary-subtler":Dn("primary-95"),"bg-primary-subtlest":Dn("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":Dn("primary-40"),"bg-primary-subtlest-hover":Dn("primary-90"),"bg-primary-subtlest-selected":Dn("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:Dn("primary-50"),"hyperlink-hover":Dn("primary-40"),"hyperlink-visited":Dn("primary-40"),"hyperlink-inverse":Dn("primary-inverse"),"focus-ring":Dn("black"),"focus-ring-inverse":Dn("white")},An={collections:{lifesg:Bn,bookingsg:Bn,rbs:Bn,mylegacy:Bn,ccube:Bn,pa:{text:Dn("neutral-30"),"text-subtle":Dn("neutral-40"),"text-subtler":Dn("neutral-50"),"text-subtlest":Dn("neutral-70"),"text-primary":Dn("neutral-10"),"text-hover":Dn("neutral-70"),"text-selected":Dn("neutral-20"),"text-selected-hover":Dn("neutral-10"),"text-disabled":Dn("neutral-50"),"text-disabled-subtle":Dn("neutral-60"),"text-disabled-subtlest":Dn("neutral-80"),"text-selected-disabled":Dn("neutral-40"),"text-success":Dn("success-40"),"text-warning":Dn("warning-40"),"text-error":Dn("brand-30"),"text-info":Dn("neutral-40"),"text-inverse":Dn("neutral-100"),icon:Dn("neutral-40"),"icon-subtle":Dn("neutral-50"),"icon-strongest":Dn("neutral-10"),"icon-primary":Dn("neutral-10"),"icon-primary-subtle":Dn("neutral-30"),"icon-primary-subtlest":Dn("neutral-60"),"icon-hover":Dn("neutral-70"),"icon-selected":Dn("brand-20"),"icon-selected-hover":Dn("brand-10"),"icon-disabled":Dn("neutral-50"),"icon-disabled-subtle":Dn("neutral-60"),"icon-selected-disabled":Dn("neutral-40"),"icon-success":Dn("success-40"),"icon-warning":Dn("warning-60"),"icon-error":Dn("brand-30"),"icon-error-strong":Dn("brand-10"),"icon-info":Dn("neutral-40"),"icon-inverse":Dn("neutral-100"),"icon-primary-inverse":"#F9B371",border:Dn("neutral-90"),"border-strong":Dn("neutral-30"),"border-stronger":Dn("neutral-20"),"border-primary":Dn("neutral-40"),"border-primary-subtle":Dn("neutral-60"),"border-hover":Dn("neutral-80"),"border-hover-strong":Dn("neutral-10"),"border-selected":Dn("neutral-20"),"border-selected-subtle":Dn("neutral-40"),"border-selected-subtlest":Dn("neutral-70"),"border-selected-hover":Dn("neutral-10"),"border-focus":Dn("brand-60"),"border-focus-strong":Dn("brand-40"),"border-disabled":Dn("neutral-90"),"border-selected-disabled":Dn("neutral-80"),"border-success":Dn("success-40"),"border-warning":Dn("warning-60"),"border-error":Dn("brand-30"),"border-error-focus":Dn("brand-20"),"border-error-focus-strong":Dn("brand-10"),"border-error-strong":Dn("brand-20"),"border-info":Dn("neutral-40"),bg:Dn("neutral-100"),"bg-strong":Dn("neutral-95"),"bg-stronger":Dn("neutral-90"),"bg-strongest":Dn("neutral-80"),"bg-hover":Dn("brand-90"),"bg-hover-strong":Dn("brand-80"),"bg-hover-subtle":Dn("neutral-90"),"bg-hover-neutral":Dn("neutral-90"),"bg-hover-neutral-strong":Dn("neutral-90"),"bg-selected":Dn("brand-50"),"bg-selected-hover":Dn("brand-70"),"bg-selected-strong":Dn("brand-90"),"bg-selected-stronger":Dn("brand-40"),"bg-selected-strongest":Dn("brand-20"),"bg-selected-strongest-hover":Dn("brand-10"),"bg-disabled":Dn("neutral-90"),"bg-selected-disabled":Dn("neutral-90"),"bg-selected-stronger-disabled":Dn("neutral-80"),"bg-success":Dn("success-100"),"bg-success-hover":Dn("success-95"),"bg-success-strong":Dn("success-50"),"bg-success-strong-hover":Dn("success-40"),"bg-warning":Dn("warning-100"),"bg-warning-hover":Dn("warning-95"),"bg-warning-strong":Dn("warning-50"),"bg-warning-strong-hover":Dn("warning-40"),"bg-info":Dn("neutral-95"),"bg-info-hover":Dn("info-95"),"bg-info-strong":Dn("info-50"),"bg-info-strong-hover":Dn("info-40"),"bg-error":Dn("brand-100"),"bg-error-hover":Dn("error-95"),"bg-error-strong":Dn("error-50"),"bg-error-strong-hover":Dn("error-40"),"bg-inverse":Dn("neutral-40"),"bg-inverse-subtle":Dn("neutral-60"),"bg-inverse-subtler":Dn("neutral-70"),"bg-inverse-subtlest":Dn("neutral-80"),"bg-inverse-hover":Dn("neutral-30"),"bg-primary":Dn("brand-20"),"bg-primary-subtle":Dn("brand-60"),"bg-primary-subtler":Dn("brand-80"),"bg-primary-subtlest":Dn("brand-100"),"bg-available":Dn("success-60"),"bg-primary-hover":Dn("brand-10"),"bg-primary-subtlest-hover":Dn("brand-80"),"bg-primary-subtlest-selected":Dn("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:Dn("neutral-10"),"hyperlink-hover":Dn("neutral-40"),"hyperlink-visited":Dn("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":Dn("black"),"focus-ring-inverse":Dn("white")}},defaultValue:"lifesg"},zn=e=>r=>{var t;const n=r.theme,i=vn(An,null==n?void 0:n.colourScheme),o=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.semanticColour)?pn(i,e,n.overrides.semanticColour):i[e];return"function"==typeof o?o(r):o},kn={text:zn("text"),"text-subtle":zn("text-subtle"),"text-subtler":zn("text-subtler"),"text-subtlest":zn("text-subtlest"),"text-primary":zn("text-primary"),"text-hover":zn("text-hover"),"text-selected":zn("text-selected"),"text-selected-hover":zn("text-selected-hover"),"text-disabled":zn("text-disabled"),"text-disabled-subtle":zn("text-disabled-subtle"),"text-disabled-subtlest":zn("text-disabled-subtlest"),"text-selected-disabled":zn("text-selected-disabled"),"text-success":zn("text-success"),"text-warning":zn("text-warning"),"text-error":zn("text-error"),"text-info":zn("text-info"),"text-inverse":zn("text-inverse"),icon:zn("icon"),"icon-subtle":zn("icon-subtle"),"icon-strongest":zn("icon-strongest"),"icon-primary":zn("icon-primary"),"icon-primary-subtle":zn("icon-primary-subtle"),"icon-primary-subtlest":zn("icon-primary-subtlest"),"icon-hover":zn("icon-hover"),"icon-selected":zn("icon-selected"),"icon-selected-hover":zn("icon-selected-hover"),"icon-disabled":zn("icon-disabled"),"icon-disabled-subtle":zn("icon-disabled-subtle"),"icon-selected-disabled":zn("icon-selected-disabled"),"icon-success":zn("icon-success"),"icon-warning":zn("icon-warning"),"icon-error":zn("icon-error"),"icon-error-strong":zn("icon-error-strong"),"icon-info":zn("icon-info"),"icon-inverse":zn("icon-inverse"),"icon-primary-inverse":zn("icon-primary-inverse"),border:zn("border"),"border-strong":zn("border-strong"),"border-stronger":zn("border-stronger"),"border-primary":zn("border-primary"),"border-primary-subtle":zn("border-primary-subtle"),"border-hover":zn("border-hover"),"border-hover-strong":zn("border-hover-strong"),"border-selected":zn("border-selected"),"border-selected-subtle":zn("border-selected-subtle"),"border-selected-subtlest":zn("border-selected-subtlest"),"border-selected-hover":zn("border-selected-hover"),"border-focus":zn("border-focus"),"border-focus-strong":zn("border-focus-strong"),"border-disabled":zn("border-disabled"),"border-selected-disabled":zn("border-selected-disabled"),"border-success":zn("border-success"),"border-warning":zn("border-warning"),"border-error":zn("border-error"),"border-error-focus":zn("border-error-focus"),"border-error-focus-strong":zn("border-error-focus-strong"),"border-error-strong":zn("border-error-strong"),"border-info":zn("border-info"),bg:zn("bg"),"bg-strong":zn("bg-strong"),"bg-stronger":zn("bg-stronger"),"bg-strongest":zn("bg-strongest"),"bg-hover":zn("bg-hover"),"bg-hover-strong":zn("bg-hover-strong"),"bg-hover-subtle":zn("bg-hover-subtle"),"bg-hover-neutral":zn("bg-hover-neutral"),"bg-hover-neutral-strong":zn("bg-hover-neutral-strong"),"bg-selected":zn("bg-selected"),"bg-selected-hover":zn("bg-selected-hover"),"bg-selected-strong":zn("bg-selected-strong"),"bg-selected-stronger":zn("bg-selected-stronger"),"bg-selected-strongest":zn("bg-selected-strongest"),"bg-selected-strongest-hover":zn("bg-selected-strongest-hover"),"bg-disabled":zn("bg-disabled"),"bg-selected-disabled":zn("bg-selected-disabled"),"bg-selected-stronger-disabled":zn("bg-selected-stronger-disabled"),"bg-success":zn("bg-success"),"bg-success-hover":zn("bg-success-hover"),"bg-success-strong":zn("bg-success-strong"),"bg-success-strong-hover":zn("bg-success-strong-hover"),"bg-warning":zn("bg-warning"),"bg-warning-hover":zn("bg-warning-hover"),"bg-warning-strong":zn("bg-warning-strong"),"bg-warning-strong-hover":zn("bg-warning-strong-hover"),"bg-info":zn("bg-info"),"bg-info-hover":zn("bg-info-hover"),"bg-info-strong":zn("bg-info-strong"),"bg-info-strong-hover":zn("bg-info-strong-hover"),"bg-error":zn("bg-error"),"bg-error-hover":zn("bg-error-hover"),"bg-error-strong":zn("bg-error-strong"),"bg-error-strong-hover":zn("bg-error-strong-hover"),"bg-inverse":zn("bg-inverse"),"bg-inverse-subtle":zn("bg-inverse-subtle"),"bg-inverse-subtler":zn("bg-inverse-subtler"),"bg-inverse-subtlest":zn("bg-inverse-subtlest"),"bg-inverse-hover":zn("bg-inverse-hover"),"bg-primary":zn("bg-primary"),"bg-primary-subtle":zn("bg-primary-subtle"),"bg-primary-subtler":zn("bg-primary-subtler"),"bg-primary-subtlest":zn("bg-primary-subtlest"),"bg-available":zn("bg-available"),"bg-primary-hover":zn("bg-primary-hover"),"bg-primary-subtlest-hover":zn("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":zn("bg-primary-subtlest-selected"),"overlay-strong":zn("overlay-strong"),"overlay-subtle":zn("overlay-subtle"),hyperlink:zn("hyperlink"),"hyperlink-hover":zn("hyperlink-hover"),"hyperlink-visited":zn("hyperlink-visited"),"hyperlink-inverse":zn("hyperlink-inverse"),"focus-ring":zn("focus-ring"),"focus-ring-inverse":zn("focus-ring-inverse")},Mn={collections:{default:{solid:e=>r=>{var t,n,i;const{thickness:o,radius:s,colour:a}=e||{},l=null!==(t="function"==typeof o?o(r):o)&&void 0!==t?t:wn["width-010"](r),d=null!==(n="function"==typeof s?s(r):s)&&void 0!==n?n:0,c=null!==(i="function"==typeof a?a(r):a)&&void 0!==i?i:kn.border(r),u=wn.solid;return f`
            border: ${l} ${u} ${c};
            border-radius: ${d};
        `},"dashed-default":e=>r=>{var t,n,i;const{thickness:o,radius:s,colour:a}=e||{},l=null!==(t="function"==typeof o?o(r):o)&&void 0!==t?t:wn["width-010"](r),d=null!==(n="function"==typeof s?s(r):s)&&void 0!==n?n:0,c=null!==(i="function"==typeof a?a(r):a)&&void 0!==i?i:kn.border(r),u=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${d}' ry='${d}' stroke='${c}' stroke-width='${l}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return f`
            background-image: url("data:image/svg+xml,${u}");
            border-radius: ${d};
        `}}},defaultValue:"default"},Sn=e=>1===e.length&&"theme"in e[0],On=e=>(...r)=>t=>{const n=Sn(r)?[]:r,i=Sn(r)?r[0]:t,o=i.theme;return(0,vn(Mn,null==o?void 0:o.borderScheme)[e])(...n)(i)},_n={solid:On("solid"),"dashed-default":On("dashed-default")},Tn={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},Yn=e=>r=>{var t;const n=r.theme,i=vn(Tn,null==n?void 0:n.breakpointScheme);let o;return o=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.breakpoint)?pn(i,e,n.overrides.breakpoint):i[e],o},Ln={"xxs-min":Yn("xxs-min"),"xxs-max":Yn("xxs-max"),"xs-min":Yn("xs-min"),"xs-max":Yn("xs-max"),"sm-min":Yn("sm-min"),"sm-max":Yn("sm-max"),"md-min":Yn("md-min"),"md-max":Yn("md-max"),"lg-min":Yn("lg-min"),"lg-max":Yn("lg-max"),"xl-min":Yn("xl-min"),"xl-max":Yn("xl-max"),"xxl-min":Yn("xxl-min"),"xxs-column":Yn("xxs-column"),"xs-column":Yn("xs-column"),"sm-column":Yn("sm-column"),"md-column":Yn("md-column"),"lg-column":Yn("lg-column"),"xl-column":Yn("xl-column"),"xxl-column":Yn("xxl-column"),"xxs-gutter":Yn("xxs-gutter"),"xs-gutter":Yn("xs-gutter"),"sm-gutter":Yn("sm-gutter"),"md-gutter":Yn("md-gutter"),"lg-gutter":Yn("lg-gutter"),"xl-gutter":Yn("xl-gutter"),"xxl-gutter":Yn("xxl-gutter"),"xxs-margin":Yn("xxs-margin"),"xs-margin":Yn("xs-margin"),"sm-margin":Yn("sm-margin"),"md-margin":Yn("md-margin"),"lg-margin":Yn("lg-margin"),"xl-margin":Yn("xl-margin"),"xxl-margin":Yn("xxl-margin")},jn=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((r,t)=>(r[t]=((e,r)=>{const t=Ln["max-width"===e?`${r}-max`:`${r}-min`];return r=>{const n=t(r);return`@media screen and (${e}: ${n}px)`}})(e,t),r)),{}),Hn={MaxWidth:jn("max-width"),MinWidth:jn("min-width")},Rn={"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.625rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},Wn={collections:{lifesg:Rn,bookingsg:{"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.75rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"-0.032rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},rbs:Rn,mylegacy:Rn,ccube:Rn,pa:{"header-size-xxl":"3rem","header-size-xl":"2.5rem","header-size-lg":"2rem","header-size-md":"1.625rem","header-size-sm":"1.375rem","header-size-xs":"1.125rem","header-lh-xxl":"3.5rem","header-lh-xl":"3rem","header-lh-lg":"2.5rem","header-lh-md":"2.25rem","header-lh-sm":"1.75rem","header-lh-xs":"1.625rem","header-ls-xxl":"-0.056rem","header-ls-xl":"-0.032rem","header-ls-lg":"0rem","header-ls-md":"0rem","header-ls-sm":"0rem","header-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1.375rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.5rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0.014rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"}},defaultValue:"lifesg"},In=e=>r=>{var t;const n=r.theme,i=vn(Wn,null==n?void 0:n.fontScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.fontSpec)?pn(i,e,n.overrides.fontSpec):i[e]},Pn={"header-size-xxl":In("header-size-xxl"),"header-size-xl":In("header-size-xl"),"header-size-lg":In("header-size-lg"),"header-size-md":In("header-size-md"),"header-size-sm":In("header-size-sm"),"header-size-xs":In("header-size-xs"),"header-lh-xxl":In("header-lh-xxl"),"header-lh-xl":In("header-lh-xl"),"header-lh-lg":In("header-lh-lg"),"header-lh-md":In("header-lh-md"),"header-lh-sm":In("header-lh-sm"),"header-lh-xs":In("header-lh-xs"),"header-ls-xxl":In("header-ls-xxl"),"header-ls-xl":In("header-ls-xl"),"header-ls-lg":In("header-ls-lg"),"header-ls-md":In("header-ls-md"),"header-ls-sm":In("header-ls-sm"),"header-ls-xs":In("header-ls-xs"),"weight-light":In("weight-light"),"weight-regular":In("weight-regular"),"weight-semibold":In("weight-semibold"),"weight-bold":In("weight-bold"),"font-family":In("font-family"),"body-size-baseline":In("body-size-baseline"),"body-size-md":In("body-size-md"),"body-size-sm":In("body-size-sm"),"body-size-xs":In("body-size-xs"),"body-lh-baseline":In("body-lh-baseline"),"body-lh-md":In("body-lh-md"),"body-lh-sm":In("body-lh-sm"),"body-lh-xs":In("body-lh-xs"),"body-ls-baseline":In("body-ls-baseline"),"body-ls-md":In("body-ls-md"),"body-ls-sm":In("body-ls-sm"),"body-ls-xs":In("body-ls-xs"),"form-label-size":In("form-label-size"),"form-description-size":In("form-description-size"),"form-label-lh":In("form-label-lh"),"form-description-lh":In("form-description-lh"),"form-label-ls":In("form-label-ls"),"form-description-ls":In("form-description-ls")},Nn=(e,r,t,n)=>f`
    font-family: ${In("font-family")};
    font-size: ${In(e)};
    font-weight: ${In(r)};
    line-height: ${In(t)};
    letter-spacing: ${In(n)};
`,Vn={"header-xxl-light":Nn("header-size-xxl","weight-light","header-lh-xxl","header-ls-xxl"),"header-xxl-regular":Nn("header-size-xxl","weight-regular","header-lh-xxl","header-ls-xxl"),"header-xxl-semibold":Nn("header-size-xxl","weight-semibold","header-lh-xxl","header-ls-xxl"),"header-xxl-bold":Nn("header-size-xxl","weight-bold","header-lh-xxl","header-ls-xxl"),"header-xl-light":Nn("header-size-xl","weight-light","header-lh-xl","header-ls-xl"),"header-xl-regular":Nn("header-size-xl","weight-regular","header-lh-xl","header-ls-xl"),"header-xl-semibold":Nn("header-size-xl","weight-semibold","header-lh-xl","header-ls-xl"),"header-xl-bold":Nn("header-size-xl","weight-bold","header-lh-xl","header-ls-xl"),"header-lg-light":Nn("header-size-lg","weight-light","header-lh-lg","header-ls-lg"),"header-lg-regular":Nn("header-size-lg","weight-regular","header-lh-lg","header-ls-lg"),"header-lg-semibold":Nn("header-size-lg","weight-semibold","header-lh-lg","header-ls-lg"),"header-lg-bold":Nn("header-size-lg","weight-bold","header-lh-lg","header-ls-lg"),"header-md-light":Nn("header-size-md","weight-light","header-lh-md","header-ls-md"),"header-md-regular":Nn("header-size-md","weight-regular","header-lh-md","header-ls-md"),"header-md-semibold":Nn("header-size-md","weight-semibold","header-lh-md","header-ls-md"),"header-md-bold":Nn("header-size-md","weight-bold","header-lh-md","header-ls-md"),"header-sm-light":Nn("header-size-sm","weight-light","header-lh-sm","header-ls-sm"),"header-sm-regular":Nn("header-size-sm","weight-regular","header-lh-sm","header-ls-sm"),"header-sm-semibold":Nn("header-size-sm","weight-semibold","header-lh-sm","header-ls-sm"),"header-sm-bold":Nn("header-size-sm","weight-bold","header-lh-sm","header-ls-sm"),"header-xs-light":Nn("header-size-xs","weight-light","header-lh-xs","header-ls-xs"),"header-xs-regular":Nn("header-size-xs","weight-regular","header-lh-xs","header-ls-xs"),"header-xs-semibold":Nn("header-size-xs","weight-semibold","header-lh-xs","header-ls-xs"),"header-xs-bold":Nn("header-size-xs","weight-bold","header-lh-xs","header-ls-xs"),"body-baseline-light":Nn("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline"),"body-baseline-regular":Nn("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline"),"body-baseline-semibold":Nn("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline"),"body-baseline-bold":Nn("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline"),"body-md-light":Nn("body-size-md","weight-light","body-lh-md","body-ls-md"),"body-md-regular":Nn("body-size-md","weight-regular","body-lh-md","body-ls-md"),"body-md-semibold":Nn("body-size-md","weight-semibold","body-lh-md","body-ls-md"),"body-md-bold":Nn("body-size-md","weight-bold","body-lh-md","body-ls-md"),"body-sm-light":Nn("body-size-sm","weight-light","body-lh-sm","body-ls-sm"),"body-sm-regular":Nn("body-size-sm","weight-regular","body-lh-sm","body-ls-sm"),"body-sm-semibold":Nn("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm"),"body-sm-bold":Nn("body-size-sm","weight-bold","body-lh-sm","body-ls-sm"),"body-xs-light":Nn("body-size-xs","weight-light","body-lh-xs","body-ls-xs"),"body-xs-regular":Nn("body-size-xs","weight-regular","body-lh-xs","body-ls-xs"),"body-xs-semibold":Nn("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs"),"body-xs-bold":Nn("body-size-xs","weight-bold","body-lh-xs","body-ls-xs"),"form-label":Nn("form-label-size","weight-semibold","form-label-lh","form-label-ls"),"form-description":Nn("form-description-size","weight-regular","form-description-lh","form-description-ls")},Zn={collections:{lifesg:Vn,bookingsg:Vn,rbs:Vn,mylegacy:Vn,ccube:Vn,pa:Vn},defaultValue:"lifesg"},Un=e=>r=>{var t;const n=r.theme,i=vn(Zn,null==n?void 0:n.fontScheme),o=(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.font)?pn(i,e,n.overrides.font):i[e];return"function"==typeof o?o(r):o},Xn={"header-xxl-light":Un("header-xxl-light"),"header-xxl-regular":Un("header-xxl-regular"),"header-xxl-semibold":Un("header-xxl-semibold"),"header-xxl-bold":Un("header-xxl-bold"),"header-xl-light":Un("header-xl-light"),"header-xl-regular":Un("header-xl-regular"),"header-xl-semibold":Un("header-xl-semibold"),"header-xl-bold":Un("header-xl-bold"),"header-lg-light":Un("header-lg-light"),"header-lg-regular":Un("header-lg-regular"),"header-lg-semibold":Un("header-lg-semibold"),"header-lg-bold":Un("header-lg-bold"),"header-md-light":Un("header-md-light"),"header-md-regular":Un("header-md-regular"),"header-md-semibold":Un("header-md-semibold"),"header-md-bold":Un("header-md-bold"),"header-sm-light":Un("header-sm-light"),"header-sm-regular":Un("header-sm-regular"),"header-sm-semibold":Un("header-sm-semibold"),"header-sm-bold":Un("header-sm-bold"),"header-xs-light":Un("header-xs-light"),"header-xs-regular":Un("header-xs-regular"),"header-xs-semibold":Un("header-xs-semibold"),"header-xs-bold":Un("header-xs-bold"),"body-baseline-light":Un("body-baseline-light"),"body-baseline-regular":Un("body-baseline-regular"),"body-baseline-semibold":Un("body-baseline-semibold"),"body-baseline-bold":Un("body-baseline-bold"),"body-md-light":Un("body-md-light"),"body-md-regular":Un("body-md-regular"),"body-md-semibold":Un("body-md-semibold"),"body-md-bold":Un("body-md-bold"),"body-sm-light":Un("body-sm-light"),"body-sm-regular":Un("body-sm-regular"),"body-sm-semibold":Un("body-sm-semibold"),"body-sm-bold":Un("body-sm-bold"),"body-xs-light":Un("body-xs-light"),"body-xs-regular":Un("body-xs-regular"),"body-xs-semibold":Un("body-xs-semibold"),"body-xs-bold":Un("body-xs-bold"),"form-label":Un("form-label"),"form-description":Un("form-description")},qn={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},Jn=e=>r=>{var t;const n=r.theme,i=vn(qn,null==n?void 0:n.motionScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.motion)?pn(i,e,n.overrides.motion):i[e]},Gn={"duration-150":Jn("duration-150"),"duration-250":Jn("duration-250"),"duration-350":Jn("duration-350"),"duration-500":Jn("duration-500"),"duration-800":Jn("duration-800"),"duration-1000":Jn("duration-1000"),"ease-default":Jn("ease-default"),"ease-standard":Jn("ease-standard"),"ease-entrance":Jn("ease-entrance"),"ease-exit":Jn("ease-exit")},Qn={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},Kn=e=>r=>{var t;const n=r.theme,i=vn(Qn,null==n?void 0:n.spacingScheme);return(null===(t=null==n?void 0:n.overrides)||void 0===t?void 0:t.spacing)?`${pn(i,e,n.overrides.spacing)}px`:`${i[e]}px`},ei={"spacing-0":Kn("spacing-0"),"spacing-4":Kn("spacing-4"),"spacing-8":Kn("spacing-8"),"spacing-12":Kn("spacing-12"),"spacing-16":Kn("spacing-16"),"spacing-20":Kn("spacing-20"),"spacing-24":Kn("spacing-24"),"spacing-32":Kn("spacing-32"),"spacing-40":Kn("spacing-40"),"spacing-48":Kn("spacing-48"),"spacing-64":Kn("spacing-64"),"spacing-72":Kn("spacing-72"),"layout-xs":Kn("layout-xs"),"layout-sm":Kn("layout-sm"),"layout-md":Kn("layout-md"),"layout-lg":Kn("layout-lg"),"layout-xl":Kn("layout-xl"),"layout-xxl":Kn("layout-xxl"),"layout-xxxl":Kn("layout-xxxl")},ri=Object.assign(Object.assign({},kn),{Primitive:Cn}),ti=Object.assign(Object.assign({},Xn),{Spec:Pn}),ni=Gn,ii=Object.assign(Object.assign({},wn),{Util:_n}),oi=ei,si=Hn,ai=e=>{const{textSize:r}=e||{};return f`
        // Text styling
        ${r&&ti[`${r}-regular`]}

        strong {
            font-weight: ${ti.Spec["weight-semibold"]};
            ${r&&ti[`${r}-semibold`]};
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-weight: ${ti.Spec["weight-semibold"]};
            ${r&&ti[`${r}-semibold`]}
            color: ${ri.hyperlink};
            text-decoration: none;

            svg {
                color: ${ri["icon-primary"]};
                height: 1lh;
                width: 1em;
                margin-left: 0.4rem;
                vertical-align: middle;
            }

            :hover,
            :active,
            :visited,
            :focus {
                color: ${ri["hyperlink-hover"]};

                svg {
                    color: ${ri["icon-hover"]};
                }
            }
        }

        // List styling
        ul,
        ol {
            margin: 0;
            padding: 0;
            margin-left: 2.5rem;
        }

        ol {
            list-style: decimal;
        }

        ul {
            list-style: disc;
        }
    `},li=(e,r,t=!1)=>f`
        ${ti[`${e}-${r}`]}
        ${t?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `,di=e=>{if(e)return f`
            ${r=e,f`
    display: -webkit-box;
    -webkit-line-clamp: ${r};
    -webkit-box-orient: vertical;
    overflow: hidden;
`}
        `;var r},ci=(e,r)=>f`
    ${li(e,r.weight||"regular",r.paragraph)}
    ${((e=!1,r=!1,t)=>r?f`
            display: block;
            ${di(t)}
        `:e?f`
            display: inline;
        `:f`
            display: block;
            ${di(t)}
        `)(r.inline,r.paragraph,r.maxLines)}
    color: ${ri.text};
`;var ui;!function(t){const n=(e,r,t)=>{const n=m(e).attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${e=>ci(r,e)}
        `;return n.displayName=`Typography.${t}`,n};t.HeaderXXL=n("h1","header-xxl","HeaderXXL"),t.HeaderXL=n("h2","header-xl","HeaderXL"),t.HeaderLG=n("h3","header-lg","HeaderLG"),t.HeaderMD=n("h4","header-md","HeaderMD"),t.HeaderSM=n("h5","header-sm","HeaderSM"),t.HeaderXS=n("h6","header-xs","HeaderXS");const i=(e,r)=>{const t=m.p.attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${r=>ci(e,r)}
        `;return t.displayName=`Typography.${r}`,t};t.BodyBL=i("body-baseline","BodyBL"),t.BodyMD=i("body-md","BodyMD"),t.BodySM=i("body-sm","BodySM"),t.BodyXS=i("body-xs","BodyXS");const o=(t,n)=>{const i=m.a`
            ${e=>f`
                ${li(t,e.weight||"regular")}
                color: ${ri.hyperlink};
                text-decoration: none;

                :hover,
                :active,
                :focus {
                    color: ${ri["text-hover"]};
                }
            `}
        `,o=t=>{var{external:n=!1,children:o}=t,s=Je(t,["external","children"]);return e(i,Object.assign({},s,{children:[o,n&&r(hi,{})]}))};return o.displayName=`Typography.${n}`,o};t.LinkBL=o("body-baseline","LinkBL"),t.LinkMD=o("body-md","LinkMD"),t.LinkSM=o("body-sm","LinkSM"),t.LinkXS=o("body-xs","LinkXS")}(ui||(ui={}));const hi=m(E)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`,bi=m.div`
    padding: ${oi["spacing-8"]} ${oi["spacing-16"]};
    display: flex;

    ${e=>{let r,t;switch(e.$type){case"error":r=ri["bg-error"](e),t=ri["border-error"](e);break;case"success":r=ri["bg-success"](e),t=ri["border-success"](e);break;case"warning":default:r=ri["bg-warning"](e),t=ri["border-warning"](e);break;case"info":r=ri["bg-info"](e),t=ri["border-info"](e);break;case"description":r=ri["bg-strong"](e),t=ri["border-strong"](e)}return f`
            background: ${r};
            border-left: ${ii["width-020"]} ${ii.solid}
                ${t};
        `}}

    color: ${ri.text};
    ${e=>"small"===e.$sizeType?ai({textSize:"body-sm"}):ai({textSize:"body-md"})}
`,gi=m.div`
    display: flex;
    align-items: center;
    height: 1lh;
    margin-right: ${oi["spacing-8"]};

    ${e=>{let r;const t="small"===e.$sizeType?"1.25rem":"1.5rem";switch(e.$type){case"error":r=ri["icon-error"](e);break;case"success":r=ri["icon-success"](e);break;case"warning":default:r=ri["icon-warning"](e);break;case"info":r=ri["icon-info"](e);break;case"description":r=ri["icon-subtle"](e)}return f`
            svg {
                color: ${r};
                width: ${t};
                height: ${t};
            }
        `}}
`,mi=m(ui.LinkSM)`
    ${e=>"small"===e.$sizeType?f`
                ${ti["body-sm-semibold"]}
                margin-top: ${oi["spacing-4"]};
            `:f`
                ${ti["body-md-semibold"]}
                margin-top: ${oi["spacing-8"]};
            `}
    display: flex;
    align-items: center;
    align-self: flex-start;

    svg {
        height: 1rem;
        width: 1rem;
        margin-left: ${oi["spacing-4"]};
    }
`,fi=m.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-wrap: anywhere;
`,yi=m.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    ${e=>{if(e.$showMore&&e.$hasActionLink)return f`
                margin-bottom: ${oi["spacing-8"]};
            `}}
    ${e=>{const r="linear-gradient(to bottom, black 50%, transparent 100%)";if(!e.$showMore&&e.$maxCollapsedHeight)return`\n                max-height: ${e.$maxCollapsedHeight}px;\n\t\t\t\toverflow: hidden;\n                -webkit-mask-image: ${r};\n                mask-image: ${r};\n\t\t\t`}}
`,pi=m.button`
    ${e=>"small"===e.$sizeType?f`
                ${ti["body-sm-semibold"]}
            `:f`
                ${ti["body-md-semibold"]}
            `}

    display: flex;
    align-items: center;
    align-self: flex-start;
    gap: ${oi["spacing-4"]};
    margin-top: ${oi["spacing-8"]};

    cursor: pointer;
    user-select: none;
    border: none;
    background: transparent;

    color: ${ri["text-primary"]};
`,vi=m($)`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${ni["duration-350"]} ${ni["ease-standard"]};
`,xi=m.div`
    height: 1.625rem;
    width: 1.625rem;
    margin-right: 0.5rem;
    flex-shrink: 0;

    svg {
        height: 100%;
        width: 100%;
    }

    ${e=>e.$disabled?e.$active?f`
                    color: ${ri["icon-selected-disabled"]};
                `:f`
                    color: ${ri["icon-disabled-subtle"]};
                `:e.$active?f`
                color: ${ri["icon-selected"]};
            `:f`
            color: ${ri["icon-subtle"]};
        `};
`,Fi=f`
    margin-bottom: ${e=>e.$bottomMargin||0}rem;

    // Counter matters
    counter-reset: list;

    li {
        font-weight: ${ti.Spec["weight-regular"]};
        ${e=>e.$size&&ti[`${e.$size}-regular`]}
        color: ${ri.text};
    }

    // nested lists styling
    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`,wi=m.ol`
    ${Fi}

    margin-left: 3rem;

    ${si.MaxWidth.lg} {
        margin-left: 2.5rem;
    }

    li {
        position: relative;
    }

    ${e=>{const{reversed:r}=e,t=e.$counterType||"decimal",n=e.$counterSeparator||")";return f`
            li:before {
                content: counter(list, ${t}) "${n}";
                counter-increment: ${r?"list -1":"list"};
                position: absolute;
                left: -2rem;
            }
        `}}

    ${e=>{const{reversed:r,start:t}=e;if(t){return f`
                counter-reset: list ${r?t+1:t-1};
            `}}}

    list-style-position: outside;
    list-style-type: none;

    ul > li:before {
        content: "";
    }
`,$i=m.ul`
    ${Fi}

    margin-left: 2.5rem;
    list-style-type: ${e=>e.$bulletType||"disc"};
`,Ei=e=>{var{size:t,bulletType:n,bottomMargin:i,children:o}=e,s=Je(e,["size","bulletType","bottomMargin","children"]);return r($i,Object.assign({$size:t,$bulletType:n,$bottomMargin:i},s,{children:o}))};Ei.displayName="TextList.Ul";const Di=e=>{var{size:t,counterType:n,counterSeparator:i,bottomMargin:o,children:s}=e,a=Je(e,["size","counterType","counterSeparator","bottomMargin","children"]);return r(wi,Object.assign({$size:t,$counterType:n,$counterSeparator:i,$bottomMargin:o},a,{children:s}))};Di.displayName="TextList.Ol";const Ci=Ei,Bi=m.div`
    position: relative;
    display: inline-flex;
    min-width: 10.375rem;
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    overflow: hidden;
    flex-direction: column;
    height: fit-content;
    background: ${ri.bg};

    ${e=>{if(!e.$indicator)return f`
                justify-content: center;
            `}}

    // Container min width to fit content
    ${e=>{if(e.$useContentWidth)return f`
                min-width: unset;
            `}}

    // apply container border and header background color
    ${e=>"no-border"===e.$styleType?e.$error?e.$disabled?f`
                            border-color: ${ri["border-error"]};
                        `:f`
                            border-color: ${ri["border-error"]};

                            &:has(${Si}:hover) {
                                background: ${ri["bg-hover-subtle"]};
                            }
                        `:e.$disabled?e.$selected?f`
                            border: none;
                            background: ${ri["bg-selected-disabled"]};
                        `:f`
                            border: none;
                        `:e.$selected?f`
                        border: none;
                        background: ${ri["bg-selected"]};

                        &:has(${Si}:hover) {
                            background: ${ri["bg-selected-hover"]};

                            & ${zi} {
                                color: ${ri["text-selected-hover"]};
                            }

                            & ${Wi} {
                                color: ${ri["icon-selected-hover"]};
                            }
                        }
                    `:f`
                    border: none;

                    &:has(${Si}:hover) {
                        background: ${ri["bg-hover-subtle"]};
                    }
                `:e.$error?e.$disabled?f`
                            border-color: ${ri["border-error"]};
                        `:f`
                            border-color: ${ri["border-error"]};

                            &:has(${Si}:hover) {
                                background: ${ri["bg-hover-subtle"]};
                            }
                        `:e.$disabled?e.$selected?f`
                            border-color: ${ri["border-selected-disabled"]};
                            background: ${ri["bg-selected-disabled"]};
                        `:f`
                            border-color: ${ri["border-disabled"]};
                            background: ${ri["bg-disabled"]};
                        `:e.$selected?f`
                        border-color: ${ri["border-selected"]};
                        background: ${ri["bg-selected"]};

                        &:has(${Si}:hover) {
                            background: ${ri["bg-selected-hover"]};

                            & ${zi} {
                                color: ${ri["text-selected-hover"]};
                            }

                            & ${Wi} {
                                color: ${ri["icon-selected-hover"]};
                            }
                        }
                    `:f`
                    border-color: ${ri.border};

                    &:has(${Si}:hover) {
                        background: ${ri["bg-hover-subtle"]};
                    }
                `}
`,Ai=m.input`
    position: absolute;
    height: 100%;
    width: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    top: 0;
    left: 0;

    /* Hide appearance but keep it focusable using keyboard interactions */
    appearance: none;
    background: transparent;
    border: none;
`,zi=m.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
    width: 100%;
    overflow: hidden;

    // apply header container text color
    ${e=>e.$disabled?e.$selected?f`
                    color: ${ri["text-selected-disabled"]};
                `:f`
                    color: ${ri["text-disabled"]};
                `:e.$selected?f`
                color: ${ri["text-selected"]};
            `:f`
            color: ${ri.text};
        `}
`,ki=m.label`
    ${ti["body-baseline-regular"]}
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
    -webkit-line-clamp: ${e=>{var r,t;return null!==(t=null===(r=e.$maxLines)||void 0===r?void 0:r.desktop)&&void 0!==t?t:"none"}};
    ${si.MaxWidth.lg} {
        -webkit-line-clamp: ${e=>{var r,t;return null!==(t=null===(r=e.$maxLines)||void 0===r?void 0:r.tablet)&&void 0!==t?t:"none"}};
    }
    ${si.MaxWidth.sm} {
        -webkit-line-clamp: ${e=>{var r,t;return null!==(t=null===(r=e.$maxLines)||void 0===r?void 0:r.mobile)&&void 0!==t?t:"none"}};
    }
`,Mi=m.div`
    ${ti["body-md-regular"]}
    margin-top: 0.5rem;

    z-index: 1; // forces sublabel to render above the input
    pointer-events: none; // to allow click events to be passed to the input

    strong,
    b {
        ${ti["body-md-semibold"]}
    }
`,Si=m.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`,Oi=m.div`
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
    padding: ${e=>e.$addPadding?"0.6875rem 0rem 0.6875rem 1rem":"0.6875rem 1rem"};
`,_i=m.button`
    color: ${e=>e.$disabled?ri["text-disabled"]:ri["text-error"]};
    white-space: nowrap;
    ${ti["body-md-semibold"]}
    height: fit-content;
    padding: 0.6875rem 1rem 0.6875rem 0.5rem;
    border: none;
    background: none;

    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
`,Ti=m.button`
    color: ${e=>e.disabled?ri["text-disabled"]:ri["text-primary"]};
    ${ti["body-baseline-semibold"]}
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border: none;
    background-color: ${ri.bg};
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    padding: 0 1rem 0.6875rem 1rem;
    padding-top: ${e=>e.$paddingTopRequired?"0.6875rem":"0rem"};
    width: 100%;

    svg {
        width: 1em;
        height: 1em;
        margin-left: 0.5rem;
    }
`,Yi=m.div`
    width: 100%;
    color: ${e=>e.$disabled?ri["text-disabled"]:ri["text-error"]};
    border: none;
    background: ${ri.bg};
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem 0.5rem 1rem;
`,Li=m((t=>{var{type:n,className:i,children:o,actionLink:l,actionLinkIcon:d,sizeType:c="default",showIcon:u=!1,customIcon:b,maxCollapsedHeight:g}=t,m=Je(t,["type","className","children","actionLink","actionLinkIcon","sizeType","showIcon","customIcon","maxCollapsedHeight"]);const[f,w]=a(!1),[$,E]=a(!1),{height:D,ref:C}=function(e){void 0===e&&(e={});var r=e.skipOnMount,t=void 0!==r&&r,n=e.refreshMode,i=e.refreshRate,o=void 0===i?1e3:i,l=e.refreshOptions,d=e.handleWidth,c=void 0===d||d,u=e.handleHeight,h=void 0===u||u,b=e.targetRef,g=e.observerOptions,m=e.onResize,f=s(t),y=s(null),p=null!=b?b:y,v=s(),x=a({width:void 0,height:void 0}),F=x[0],w=x[1];return qe((function(){if(!Ze()){var e=Xe(m,w,c,h);v.current=Ne((function(r){(c||h)&&r.forEach((function(r){var t=r&&r.contentRect||{},n=t.width,i=t.height;!f.current&&!Ze()&&e({width:n,height:i}),f.current=!1}))}),n,o,l);var r=new window.ResizeObserver(v.current);return p.current&&r.observe(p.current,g),function(){r.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[n,o,l,c,h,m,g,p.current]),ne({ref:p},F)}();h((()=>{B()}),[g,D]);const B=()=>{w(!g),E(A())},A=()=>!(!D||!g)&&D>g;return e(bi,{className:i,$type:n,$sizeType:c,"data-testid":m["data-testid"],children:[u&&r(gi,{$sizeType:c,$type:n,children:(()=>{if(n&&b)return b;switch(n){case"success":return r(F,{});case"warning":return r(v,{});case"error":return r(p,{});case"info":case"description":return r(x,{});default:return null}})()}),e(fi,{children:[e(yi,{$maxCollapsedHeight:A()?g:void 0,$showMore:f,$hasActionLink:!!l,children:[r("div",{ref:C,children:o}),l?e(mi,Object.assign({"data-testid":"action-link",$type:n,$sizeType:c},l,{children:[l.children,d||r(y,{})]})):null]}),$&&e(pi,{$sizeType:c,$type:n,type:"button",onClick:()=>w(!f),children:["Show ",f?"less":"more",r(vi,{$expanded:f})]})]})]})}))`
    width: 100%;
    user-select: none;
`,ji=m.div`
    padding: 0 1rem;
    padding-top: 0.6875rem;
    padding-bottom: ${e=>e.$isFinalItem?"0.6875rem":"0.5rem"};
    background-color: ${ri.bg};
    ${ai({textSize:"body-md"})}

    ${e=>e.$disabled?f`
                color: ${ri["text-disabled"]};
            `:e.$selected?f`
                color: ${ri["text-selected"]};
            `:f`
                color: ${ri.text};
            `}
`,Hi=m(ui.BodyMD)`
    color: ${e=>e.$disabled?ri["text-disabled"]:ri["text-error"]};
`,Ri=m(Ci)`
    color: ${e=>e.$disabled?ri["text-disabled"]:ri["text-error"]};
`,Wi=m((({type:e,active:t=!1,disabled:n,className:i})=>{let o;switch(e){case"checkbox":o=r(t?z:A,{});break;case"radio":o=r(t?C:D,{});break;case"tick":o=r(k,{});break;case"cross":o=r(B,{});break;default:o=null}return r(xi,{className:i,$active:t,$disabled:n,children:o})}))`
    ${e=>e.$disabled?e.$selected?f`
                    color: ${ri["icon-selected-disabled"]};
                `:f`
                    color: ${ri["icon-disabled-subtle"]};
                `:e.$selected?f`
                color: ${ri["icon-selected"]};
            `:f`
            color: ${ri["icon-subtle"]};
        `};
`,Ii=({type:o="checkbox",indicator:l,checked:d,styleType:c="default",children:u,childrenMaxLines:b,subLabel:m,disabled:f,error:y,name:p,id:v,className:x,compositeSection:F,removable:w,onRemove:$,"data-testid":E,onChange:D,useContentWidth:C})=>{const{collapsible:B=!0,errors:A,children:z,initialExpanded:k}=F||{},[M,S]=a(d),[O,_]=a(!!k),T=g((()=>{const e=Array.isArray(A)&&(null==A?void 0:A.length)>0,r=!Array.isArray(A)&&!!A;return e||r}),[A]),[Y]=a(ee.generate()),L=v?`${v}`:`tg-${Y}`,j=s(null);h((()=>{S(d)}),[d]),h((()=>{M&&_(null==k||k)}),[M]);const H=()=>{f||_(!O)},R=()=>{f||!$||$()},W=()=>{let e;switch(o){case"yes":e="tick";break;case"no":e="cross";break;case"checkbox":case"radio":e=o}return r(Wi,{type:e,active:M,disabled:f,$selected:M,$disabled:f})},I=()=>{if(!m)return null;let e;return e="function"==typeof m?m():m,r(Mi,{"data-id":"toggle-sublabel",children:e})},P=n=>e(t,{children:[r(Hi,{weight:"semibold",$disabled:f,children:"Error"}),r(Ri,{$disabled:f,children:null==n?void 0:n.map(((e,t)=>r("li",{id:`${L}-error-list-item-${t}`,children:r(Hi,{weight:"semibold",$disabled:f,children:e})},t)))})]});return e(Bi,{$selected:M,$disabled:f,className:x,$styleType:c,$error:y,$indicator:l,$useContentWidth:C,id:v,"data-testid":E,children:[e(Si,{id:`${L}-header-container`,$disabled:f,$error:y,$selected:M,$indicator:l,$styleType:c,children:[e(Oi,{$addPadding:w,children:[r(Ai,{ref:j,name:p,id:`${L}-input`,type:"checkbox"===o?"checkbox":"radio","data-testid":"toggle-input",disabled:f,onChange:e=>{if(!f){if(D)return void D(e);switch(o){case"checkbox":S((e=>!e));break;case"radio":case"yes":case"no":M||S(!0)}}},checked:M}),l&&W(),e(zi,{$selected:M,$disabled:f,children:[r(ki,{htmlFor:`${L}-input`,"data-testid":`${L}-toggle-label`,$maxLines:b,children:u}),m&&I()]})]}),w&&r(_i,{type:"button",$disabled:f,onClick:R,id:`${L}-remove-button`,children:"Remove"})]}),z&&e("div",{children:[(!B||O)&&r(ji,{"data-id":"toggle-composite-children",$isFinalItem:!B,$disabled:f,children:z}),B&&!O&&T&&r(Yi,{$disabled:f,onClick:H,id:`${L}-error-alert`,children:r(Li,{type:f?"description":"error",className:x,showIcon:!0,children:Array.isArray(A)?P(A):A})}),B&&e(Ti,{$paddingTopRequired:!O&&!T,disabled:f,onClick:H,"data-testid":O?"collapse-button":"expand-button",children:[O?"Show less":"Show more",r(O?i:n,{"aria-hidden":!0})]})]})]})};export{Ii as Toggle};
//# sourceMappingURL=index.js.map
