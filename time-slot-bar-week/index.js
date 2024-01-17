import{jsxs as e,jsx as t,Fragment as n}from"react/jsx-runtime";import*as r from"react";import i,{cloneElement as a,useRef as o,useState as s,isValidElement as l,createRef as c,PureComponent as u,useEffect as d,useLayoutEffect as h,useMemo as f,useImperativeHandle as p,forwardRef as g,useCallback as m,useContext as y}from"react";import{ChevronDownIcon as v}from"@lifesg/react-icons/chevron-down";import{ChevronLeftIcon as b}from"@lifesg/react-icons/chevron-left";import{ChevronRightIcon as $}from"@lifesg/react-icons/chevron-right";import w,{keyframes as x,css as S}from"styled-components";import{ExternalIcon as D}from"@lifesg/react-icons/external";import{ChevronUpIcon as _}from"@lifesg/react-icons";import{findDOMNode as F,unstable_batchedUpdates as O}from"react-dom";function k(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}var B="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},M={exports:{}};M.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",i="second",a="minute",o="hour",s="day",l="week",c="month",u="quarter",d="year",h="date",f="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},y=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},v={s:y,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+y(r,2,"0")+":"+y(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,c),a=n-i<0,o=t.clone().add(r+(a?-1:1),c);return+(-(r+(n-i)/(a?i-o:o-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:d,w:l,d:s,D:h,h:o,m:a,s:i,ms:r,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",$={};$[b]=m;var w=function(e){return e instanceof _},x=function e(t,n,r){var i;if(!t)return b;if("string"==typeof t){var a=t.toLowerCase();$[a]&&(i=a),n&&($[a]=n,i=a);var o=t.split("-");if(!i&&o.length>1)return e(o[0])}else{var s=t.name;$[s]=t,i=s}return!r&&i&&(b=i),i||!r&&b},S=function(e,t){if(w(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new _(n)},D=v;D.l=x,D.i=w,D.w=function(e,t){return S(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var _=function(){function m(e){this.$L=x(e.locale,null,!0),this.parse(e)}var y=m.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(D.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(p);if(r){var i=r[2]-1||0,a=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return D},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(e,t){var n=S(e);return this.startOf(t)<=n&&n<=this.endOf(t)},y.isAfter=function(e,t){return S(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<S(e)},y.$g=function(e,t,n){return D.u(e)?this[t]:this.set(n,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var n=this,r=!!D.u(t)||t,u=D.p(e),f=function(e,t){var i=D.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?i:i.endOf(s)},p=function(e,t){return D.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},g=this.$W,m=this.$M,y=this.$D,v="set"+(this.$u?"UTC":"");switch(u){case d:return r?f(1,0):f(31,11);case c:return r?f(1,m):f(0,m+1);case l:var b=this.$locale().weekStart||0,$=(g<b?g+7:g)-b;return f(r?y-$:y+(6-$),m);case s:case h:return p(v+"Hours",0);case o:return p(v+"Minutes",1);case a:return p(v+"Seconds",2);case i:return p(v+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var n,l=D.p(e),u="set"+(this.$u?"UTC":""),f=(n={},n[s]=u+"Date",n[h]=u+"Date",n[c]=u+"Month",n[d]=u+"FullYear",n[o]=u+"Hours",n[a]=u+"Minutes",n[i]=u+"Seconds",n[r]=u+"Milliseconds",n)[l],p=l===s?this.$D+(t-this.$W):t;if(l===c||l===d){var g=this.clone().set(h,1);g.$d[f](p),g.init(),this.$d=g.set(h,Math.min(this.$D,g.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[D.p(e)]()},y.add=function(r,u){var h,f=this;r=Number(r);var p=D.p(u),g=function(e){var t=S(f);return D.w(t.date(t.date()+Math.round(e*r)),f)};if(p===c)return this.set(c,this.$M+r);if(p===d)return this.set(d,this.$y+r);if(p===s)return g(1);if(p===l)return g(7);var m=(h={},h[a]=t,h[o]=n,h[i]=e,h)[p]||1,y=this.$d.getTime()+r*m;return D.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=e||"YYYY-MM-DDTHH:mm:ssZ",i=D.z(this),a=this.$H,o=this.$m,s=this.$M,l=n.weekdays,c=n.months,u=function(e,n,i,a){return e&&(e[n]||e(t,r))||i[n].slice(0,a)},d=function(e){return D.s(a%12||12,e,"0")},h=n.meridiem||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:D.s(s+1,2,"0"),MMM:u(n.monthsShort,s,c,3),MMMM:u(c,s),D:this.$D,DD:D.s(this.$D,2,"0"),d:String(this.$W),dd:u(n.weekdaysMin,this.$W,l,2),ddd:u(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(a),HH:D.s(a,2,"0"),h:d(1),hh:d(2),a:h(a,o,!0),A:h(a,o,!1),m:String(o),mm:D.s(o,2,"0"),s:String(this.$s),ss:D.s(this.$s,2,"0"),SSS:D.s(this.$ms,3,"0"),Z:i};return r.replace(g,(function(e,t){return t||p[e]||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,h,f){var p,g=D.p(h),m=S(r),y=(m.utcOffset()-this.utcOffset())*t,v=this-m,b=D.m(this,m);return b=(p={},p[d]=b/12,p[c]=b,p[u]=b/3,p[l]=(v-y)/6048e5,p[s]=(v-y)/864e5,p[o]=v/n,p[a]=v/t,p[i]=v/e,p)[g]||v,f?b:D.a(b)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return $[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=x(e,t,!0);return r&&(n.$L=r),n},y.clone=function(){return D.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),F=_.prototype;return S.prototype=F,[["$ms",r],["$s",i],["$m",a],["$H",o],["$W",s],["$M",c],["$y",d],["$D",h]].forEach((function(e){F[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),S.extend=function(e,t){return e.$i||(e(t,_,S),e.$i=!0),S},S.locale=x,S.isDayjs=w,S.unix=function(e){return S(1e3*e)},S.en=$[b],S.Ls=$,S.p={},S}();var j=M.exports,A={exports:{}};A.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,a={},o=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],c=function(e){var t=a[e];return t&&(t.indexOf?t:t.s.concat(t.f))},u=function(e,t){var n,r=a.meridiem;if(r){for(var i=1;i<=24;i+=1)if(e.indexOf(r(i,0,t))>-1){n=i>12;break}}else n=e===(t?"pm":"PM");return n},d={A:[i,function(e){this.afternoon=u(e,!1)}],a:[i,function(e){this.afternoon=u(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[r,s("seconds")],ss:[r,s("seconds")],m:[r,s("minutes")],mm:[r,s("minutes")],H:[r,s("hours")],h:[r,s("hours")],HH:[r,s("hours")],hh:[r,s("hours")],D:[r,s("day")],DD:[n,s("day")],Do:[i,function(e){var t=a.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],M:[r,s("month")],MM:[n,s("month")],MMM:[i,function(e){var t=c("months"),n=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[n,function(e){this.year=o(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(n){var r,i;r=n,i=a&&a.formats;for(var o=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var a=r&&r.toUpperCase();return n||i[r]||e[r]||i[a].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),s=o.length,l=0;l<s;l+=1){var c=o[l],u=d[c],h=u&&u[0],f=u&&u[1];o[l]=f?{regex:h,parser:f}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<s;n+=1){var i=o[n];if("string"==typeof i)r+=i.length;else{var a=i.regex,l=i.parser,c=e.slice(r),u=a.exec(c)[0];l.call(t,u),e=e.replace(u,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(o=e.parseTwoDigitYear);var r=t.prototype,i=r.parse;r.parse=function(e){var t=e.date,r=e.utc,o=e.args;this.$u=r;var s=o[1];if("string"==typeof s){var l=!0===o[2],c=!0===o[3],u=l||c,d=o[2];c&&(d=o[2]),a=this.$locale(),!l&&d&&(a=n.Ls[d]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=h(t)(e),i=r.year,a=r.month,o=r.day,s=r.hours,l=r.minutes,c=r.seconds,u=r.milliseconds,d=r.zone,f=new Date,p=o||(i||a?1:f.getDate()),g=i||f.getFullYear(),m=0;i&&!a||(m=a>0?a-1:f.getMonth());var y=s||0,v=l||0,b=c||0,$=u||0;return d?new Date(Date.UTC(g,m,p,y,v,b,$+60*d.offset*1e3)):n?new Date(Date.UTC(g,m,p,y,v,b,$)):new Date(g,m,p,y,v,b,$)}catch(e){return new Date("")}}(t,s,r),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(s)&&(this.$d=new Date("")),a={}}else if(s instanceof Array)for(var f=s.length,p=1;p<=f;p+=1){o[1]=s[p-1];var g=n.apply(this,o);if(g.isValid()){this.$d=g.$d,this.$L=g.$L,this.init();break}p===f&&(this.$d=new Date(""))}else i.call(this,e)}}}();var E,C,H=A.exports,T={exports:{}},P=T.exports=(E={year:0,month:1,day:2,hour:3,minute:4,second:5},C={},function(e,t,n){var r,i=function(e,t,n){void 0===n&&(n={});var r=new Date(e),i=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,i=C[r];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),C[r]=i),i}(t,n);return i.formatToParts(r)},a=function(e,t){for(var r=i(e,t),a=[],o=0;o<r.length;o+=1){var s=r[o],l=s.type,c=s.value,u=E[l];u>=0&&(a[u]=parseInt(c,10))}var d=a[3],h=24===d?0:d,f=a[0]+"-"+a[1]+"-"+a[2]+" "+h+":"+a[4]+":"+a[5]+":000",p=+e;return(n.utc(f).valueOf()-(p-=p%1e3))/6e4},o=t.prototype;o.tz=function(e,t){void 0===e&&(e=r);var i=this.utcOffset(),a=this.toDate(),o=a.toLocaleString("en-US",{timeZone:e}),s=Math.round((a-new Date(o))/1e3/60),l=n(o).$set("millisecond",this.$ms).utcOffset(15*-Math.round(a.getTimezoneOffset()/15)-s,!0);if(t){var c=l.utcOffset();l=l.add(i-c,"minute")}return l.$x.$timezone=e,l},o.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var s=o.startOf;o.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return s.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,i){var o=i&&t,s=i||t||r,l=a(+n(),s);if("string"!=typeof e)return n(e).tz(s);var c=function(e,t,n){var r=e-60*t*1e3,i=a(r,n);if(t===i)return[r,t];var o=a(r-=60*(i-t)*1e3,n);return i===o?[r,i]:[e-60*Math.min(i,o)*1e3,Math.max(i,o)]}(n.utc(e,o).valueOf(),l,s),u=c[0],d=c[1],h=n(u).utcOffset(d);return h.$x.$timezone=s,h},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}}),z={exports:{}};z.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,i){var a=n(e),o=n(t),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(a,r):!this.isBefore(a,r))&&(l?this.isBefore(o,r):!this.isAfter(o,r))||(s?this.isBefore(a,r):!this.isAfter(a,r))&&(l?this.isAfter(o,r):!this.isBefore(o,r))}};var I=z.exports,R={exports:{}};R.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var L=R.exports,N={exports:{}};N.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var Y,W=N.exports;j.extend(I),j.extend(L),j.extend(W),j.extend(H),j.extend(P),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=j(t).startOf("week");return V(n).map((e=>q(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return q(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(j(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),i=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)i.push(r.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+j(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=j(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,n,r,i)=>{const a=e.isWithinRange(t,r?j(r):void 0,i?j(i):void 0),o=n&&n.includes(t.format("YYYY-MM-DD"));return!a||!!o}}(Y||(Y={}));const V=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},q=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},U=[1,3,5,7,8,10,12],Q=[4,6,9,11];var Z,X,G,J;!function(e){e.clampDay=(t,n,r)=>{const i=parseInt(t),a=parseInt(n),o=parseInt(r);return 0==i?"1":U.includes(a)?Math.min(i,31).toString():Q.includes(a)?Math.min(i,30).toString():2===a?e.isLeapYear(o)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=j(e,n);return j(t,n).diff(r,"minute")},e.toDayjs=e=>e?j(e):j(),e.addMinutesToTime=(e,t,n="HH:mm")=>j(e,n).add(t,"minutes").format(n)}(Z||(Z={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:n,minDate:r,maxDate:i}=t;return!!(n&&n.length&&n.includes(e))||(!(!r||!j(e).isBefore(r,"day"))||!(!i||!j(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(j(e).isValid())return e}return""}}(X||(X={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(G||(G={})),function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,i=8)=>{let a=0;t>n&&(a=Math.floor((t-n)/i));const o=r+a;if(o<e.length){const t=Math.floor(o/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width}}(J||(J={}));var K=function(e,t){return K=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},K(e,t)};var ee=function(){return ee=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},ee.apply(this,arguments)};var te="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var ne=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},re="object"==typeof te&&te&&te.Object===Object&&te,ie="object"==typeof self&&self&&self.Object===Object&&self,ae=re||ie||Function("return this")(),oe=ae,se=function(){return oe.Date.now()},le=/\s/;var ce=function(e){for(var t=e.length;t--&&le.test(e.charAt(t)););return t},ue=/^\s+/;var de=function(e){return e?e.slice(0,ce(e)+1).replace(ue,""):e},he=ae.Symbol,fe=he,pe=Object.prototype,ge=pe.hasOwnProperty,me=pe.toString,ye=fe?fe.toStringTag:void 0;var ve=function(e){var t=ge.call(e,ye),n=e[ye];try{e[ye]=void 0;var r=!0}catch(e){}var i=me.call(e);return r&&(t?e[ye]=n:delete e[ye]),i},be=Object.prototype.toString;var $e=ve,we=function(e){return be.call(e)},xe=he?he.toStringTag:void 0;var Se=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":xe&&xe in Object(e)?$e(e):we(e)},De=function(e){return null!=e&&"object"==typeof e};var _e=de,Fe=ne,Oe=function(e){return"symbol"==typeof e||De(e)&&"[object Symbol]"==Se(e)},ke=/^[-+]0x[0-9a-f]+$/i,Be=/^0b[01]+$/i,Me=/^0o[0-7]+$/i,je=parseInt;var Ae=ne,Ee=se,Ce=function(e){if("number"==typeof e)return e;if(Oe(e))return NaN;if(Fe(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Fe(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=_e(e);var n=Be.test(e);return n||Me.test(e)?je(e.slice(2),n?2:8):ke.test(e)?NaN:+e},He=Math.max,Te=Math.min;var Pe=function(e,t,n){var r,i,a,o,s,l,c=0,u=!1,d=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var n=r,a=i;return r=i=void 0,c=t,o=e.apply(a,n)}function p(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function g(){var e=Ee();if(p(e))return m(e);s=setTimeout(g,function(e){var n=t-(e-l);return d?Te(n,a-(e-c)):n}(e))}function m(e){return s=void 0,h&&r?f(e):(r=i=void 0,o)}function y(){var e=Ee(),n=p(e);if(r=arguments,i=this,l=e,n){if(void 0===s)return function(e){return c=e,s=setTimeout(g,t),u?f(e):o}(l);if(d)return clearTimeout(s),s=setTimeout(g,t),f(l)}return void 0===s&&(s=setTimeout(g,t)),o}return t=Ce(t)||0,Ae(n)&&(u=!!n.leading,a=(d="maxWait"in n)?He(Ce(n.maxWait)||0,t):a,h="trailing"in n?!!n.trailing:h),y.cancel=function(){void 0!==s&&clearTimeout(s),c=0,r=l=i=s=void 0},y.flush=function(){return void 0===s?o:m(Ee())},y},ze=Pe,Ie=ne;var Re=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Ie(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),ze(e,t,{leading:r,maxWait:t,trailing:i})},Le=function(e,t,n,r){switch(t){case"debounce":return Pe(e,n,r);case"throttle":return Re(e,n,r);default:return e}},Ne=function(e){return"function"==typeof e},Ye=function(){return"undefined"==typeof window},We=function(e){return e instanceof Element||e instanceof HTMLDocument},Ve=function(e,t,n,r){return function(i){var a=i.width,o=i.height;t((function(t){return t.width===a&&t.height===o||t.width===a&&!r||t.height===o&&!n?t:(e&&Ne(e)&&e(a,o),{width:a,height:o})}))}};!function(e){function t(t){var n=e.call(this,t)||this;n.cancelHandler=function(){n.resizeHandler&&n.resizeHandler.cancel&&(n.resizeHandler.cancel(),n.resizeHandler=null)},n.attachObserver=function(){var e=n.props,t=e.targetRef,r=e.observerOptions;if(!Ye()){t&&t.current&&(n.targetRef.current=t.current);var i=n.getElement();i&&(n.observableElement&&n.observableElement===i||(n.observableElement=i,n.resizeObserver.observe(i,r)))}},n.getElement=function(){var e=n.props,t=e.querySelector,r=e.targetDomEl;if(Ye())return null;if(t)return document.querySelector(t);if(r&&We(r))return r;if(n.targetRef&&We(n.targetRef.current))return n.targetRef.current;var i=F(n);if(!i)return null;switch(n.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},n.createResizeHandler=function(e){var t=n.props,r=t.handleWidth,i=void 0===r||r,a=t.handleHeight,o=void 0===a||a,s=t.onResize;if(i||o){var l=Ve(s,n.setState.bind(n),i,o);e.forEach((function(e){var t=e&&e.contentRect||{},r=t.width,i=t.height;!n.skipOnMount&&!Ye()&&l({width:r,height:i}),n.skipOnMount=!1}))}},n.getRenderType=function(){var e=n.props,t=e.render,r=e.children;return Ne(t)?"renderProp":Ne(r)?"childFunction":l(r)?"child":Array.isArray(r)?"childArray":"parent"};var r=t.skipOnMount,i=t.refreshMode,a=t.refreshRate,o=void 0===a?1e3:a,s=t.refreshOptions;return n.state={width:void 0,height:void 0},n.skipOnMount=r,n.targetRef=c(),n.observableElement=null,Ye()||(n.resizeHandler=Le(n.createResizeHandler,i,o,s),n.resizeObserver=new window.ResizeObserver(n.resizeHandler)),n}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}K(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){Ye()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,n=t.render,i=t.children,o=t.nodeType,s=void 0===o?"div":o,l=this.state,c={width:l.width,height:l.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return n&&n(c);case"childFunction":return(e=i)(c);case"child":if((e=i).type&&"string"==typeof e.type){var u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(c,["targetRef"]);return a(e,u)}return a(e,c);case"childArray":return(e=i).map((function(e){return!!e&&a(e,c)}));default:return r.createElement(s,null)}}}(u);var qe=Ye()?d:h;var Ue=Array.isArray,Qe="object"==typeof B&&B&&B.Object===Object&&B,Ze=Qe,Xe="object"==typeof self&&self&&self.Object===Object&&self,Ge=Ze||Xe||Function("return this")(),Je=Ge.Symbol,Ke=Je,et=Object.prototype,tt=et.hasOwnProperty,nt=et.toString,rt=Ke?Ke.toStringTag:void 0;var it=function(e){var t=tt.call(e,rt),n=e[rt];try{e[rt]=void 0;var r=!0}catch(e){}var i=nt.call(e);return r&&(t?e[rt]=n:delete e[rt]),i},at=Object.prototype.toString;var ot=it,st=function(e){return at.call(e)},lt=Je?Je.toStringTag:void 0;var ct=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":lt&&lt in Object(e)?ot(e):st(e)};var ut=function(e){return null!=e&&"object"==typeof e},dt=ct,ht=ut;var ft=function(e){return"symbol"==typeof e||ht(e)&&"[object Symbol]"==dt(e)},pt=Ue,gt=ft,mt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,yt=/^\w*$/;var vt=function(e,t){if(pt(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!gt(e))||(yt.test(e)||!mt.test(e)||null!=t&&e in Object(t))};var bt=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},$t=ct,wt=bt;var xt,St=function(e){if(!wt(e))return!1;var t=$t(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},Dt=Ge["__core-js_shared__"],_t=(xt=/[^.]+$/.exec(Dt&&Dt.keys&&Dt.keys.IE_PROTO||""))?"Symbol(src)_1."+xt:"";var Ft=function(e){return!!_t&&_t in e},Ot=Function.prototype.toString;var kt=function(e){if(null!=e){try{return Ot.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Bt=St,Mt=Ft,jt=bt,At=kt,Et=/^\[object .+?Constructor\]$/,Ct=Function.prototype,Ht=Object.prototype,Tt=Ct.toString,Pt=Ht.hasOwnProperty,zt=RegExp("^"+Tt.call(Pt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var It=function(e){return!(!jt(e)||Mt(e))&&(Bt(e)?zt:Et).test(At(e))},Rt=function(e,t){return null==e?void 0:e[t]};var Lt=function(e,t){var n=Rt(e,t);return It(n)?n:void 0},Nt=Lt(Object,"create"),Yt=Nt;var Wt=function(){this.__data__=Yt?Yt(null):{},this.size=0};var Vt=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},qt=Nt,Ut=Object.prototype.hasOwnProperty;var Qt=function(e){var t=this.__data__;if(qt){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return Ut.call(t,e)?t[e]:void 0},Zt=Nt,Xt=Object.prototype.hasOwnProperty;var Gt=Nt;var Jt=Wt,Kt=Vt,en=Qt,tn=function(e){var t=this.__data__;return Zt?void 0!==t[e]:Xt.call(t,e)},nn=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Gt&&void 0===t?"__lodash_hash_undefined__":t,this};function rn(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}rn.prototype.clear=Jt,rn.prototype.delete=Kt,rn.prototype.get=en,rn.prototype.has=tn,rn.prototype.set=nn;var an=rn;var on=function(){this.__data__=[],this.size=0};var sn=function(e,t){return e===t||e!=e&&t!=t},ln=sn;var cn=function(e,t){for(var n=e.length;n--;)if(ln(e[n][0],t))return n;return-1},un=cn,dn=Array.prototype.splice;var hn=cn;var fn=cn;var pn=cn;var gn=on,mn=function(e){var t=this.__data__,n=un(t,e);return!(n<0)&&(n==t.length-1?t.pop():dn.call(t,n,1),--this.size,!0)},yn=function(e){var t=this.__data__,n=hn(t,e);return n<0?void 0:t[n][1]},vn=function(e){return fn(this.__data__,e)>-1},bn=function(e,t){var n=this.__data__,r=pn(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function $n(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}$n.prototype.clear=gn,$n.prototype.delete=mn,$n.prototype.get=yn,$n.prototype.has=vn,$n.prototype.set=bn;var wn=$n,xn=Lt(Ge,"Map"),Sn=an,Dn=wn,_n=xn;var Fn=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var On=function(e,t){var n=e.__data__;return Fn(t)?n["string"==typeof t?"string":"hash"]:n.map},kn=On;var Bn=On;var Mn=On;var jn=On;var An=function(){this.size=0,this.__data__={hash:new Sn,map:new(_n||Dn),string:new Sn}},En=function(e){var t=kn(this,e).delete(e);return this.size-=t?1:0,t},Cn=function(e){return Bn(this,e).get(e)},Hn=function(e){return Mn(this,e).has(e)},Tn=function(e,t){var n=jn(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function Pn(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Pn.prototype.clear=An,Pn.prototype.delete=En,Pn.prototype.get=Cn,Pn.prototype.has=Hn,Pn.prototype.set=Tn;var zn=Pn,In=zn;function Rn(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],a=n.cache;if(a.has(i))return a.get(i);var o=e.apply(this,r);return n.cache=a.set(i,o)||a,o};return n.cache=new(Rn.Cache||In),n}Rn.Cache=In;var Ln=Rn;var Nn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Yn=/\\(\\)?/g,Wn=function(e){var t=Ln(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Nn,(function(e,n,r,i){t.push(r?i.replace(Yn,"$1"):n||e)})),t}));var Vn=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},qn=Ue,Un=ft,Qn=Je?Je.prototype:void 0,Zn=Qn?Qn.toString:void 0;var Xn=function e(t){if("string"==typeof t)return t;if(qn(t))return Vn(t,e)+"";if(Un(t))return Zn?Zn.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},Gn=Xn;var Jn=Ue,Kn=vt,er=Wn,tr=function(e){return null==e?"":Gn(e)};var nr=function(e,t){return Jn(e)?e:Kn(e,t)?[e]:er(tr(e))},rr=ft;var ir=function(e){if("string"==typeof e||rr(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t},ar=nr,or=ir;var sr=function(e,t){for(var n=0,r=(t=ar(t,e)).length;null!=e&&n<r;)e=e[or(t[n++])];return n&&n==r?e:void 0},lr=sr;var cr=function(e,t,n){var r=null==e?void 0:lr(e,t);return void 0===r?n:r};const ur=(e,t,n)=>t?cr(n,t)||cr(e,t):n||e,dr=(e,t)=>{const n=t||e.defaultValue;return cr(e.collections,n)};var hr;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(hr||(hr={}));const fr={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#8F0E0E",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},pr=e=>t=>{const n=t.theme,r=dr(fr,n[hr.colorScheme]);return n.options&&n.options.color?ur(r,e,n.options.color):ur(r,e)},gr={Brand:{1:pr("Brand.1"),2:pr("Brand.2"),3:pr("Brand.3"),4:pr("Brand.4"),5:pr("Brand.5"),6:pr("Brand.6")},Primary:pr("Primary"),PrimaryDark:pr("PrimaryDark"),Secondary:pr("Secondary"),Accent:{Light:{1:pr("Accent.Light.1"),2:pr("Accent.Light.2"),3:pr("Accent.Light.3"),4:pr("Accent.Light.4"),5:pr("Accent.Light.5"),6:pr("Accent.Light.6")},Dark:{1:pr("Accent.Dark.1"),2:pr("Accent.Dark.2"),3:pr("Accent.Dark.3")}},Neutral:{1:pr("Neutral.1"),2:pr("Neutral.2"),3:pr("Neutral.3"),4:pr("Neutral.4"),5:pr("Neutral.5"),6:pr("Neutral.6"),7:pr("Neutral.7"),8:pr("Neutral.8")},Validation:{Green:{Text:pr("Validation.Green.Text"),Icon:pr("Validation.Green.Icon"),Border:pr("Validation.Green.Border"),Background:pr("Validation.Green.Background")},Orange:{Text:pr("Validation.Orange.Text"),Icon:pr("Validation.Orange.Icon"),Border:pr("Validation.Orange.Border"),Background:pr("Validation.Orange.Background"),Badge:pr("Validation.Orange.Badge")},Red:{Text:pr("Validation.Red.Text"),Icon:pr("Validation.Red.Icon"),Border:pr("Validation.Red.Border"),Background:pr("Validation.Red.Background")},Blue:{Text:pr("Validation.Blue.Text"),Icon:pr("Validation.Blue.Icon"),Border:pr("Validation.Blue.Border"),Background:pr("Validation.Blue.Background")}},Shadow:{Accent:pr("Shadow.Accent"),Red:pr("Shadow.Red"),Elevation:pr("Shadow.Elevation")}},mr={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},yr=e=>Object.keys(mr).reduce(((t,n)=>{const r=mr[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),vr=yr("max-width"),br=(yr("min-width"),w.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),$r=x`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,wr=w.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||gr.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${$r} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,xr=w(wr)`
    animation-delay: -0.45s;
`,Sr=w(wr)`
    animation-delay: -0.3s;
`,Dr=w(wr)`
    animation-delay: -0.15s;
`,_r={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Fr={collections:{base:{D1:{fontFamily:_r.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:_r.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:_r.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:_r.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:_r.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:_r.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:_r.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:_r.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:_r.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:_r.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:_r.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:_r.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:_r.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:_r.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Or=e=>t=>{const n=t.theme,r=dr(Fr,n[hr.textStyleScheme]);return n.options&&n.options.textStyle?ur(r,e,n.options.textStyle):ur(r,e)},kr={D1:{fontFamily:Or("D1.fontFamily"),fontSize:Or("D1.fontSize"),fontWeight:Or("D1.fontWeight"),lineHeight:Or("D1.lineHeight"),letterSpacing:Or("D1.letterSpacing")},D2:{fontFamily:Or("D2.fontFamily"),fontSize:Or("D2.fontSize"),fontWeight:Or("D2.fontWeight"),lineHeight:Or("D2.lineHeight"),letterSpacing:Or("D2.letterSpacing")},D3:{fontFamily:Or("D3.fontFamily"),fontSize:Or("D3.fontSize"),fontWeight:Or("D3.fontWeight"),lineHeight:Or("D3.lineHeight"),letterSpacing:Or("D3.letterSpacing")},D4:{fontFamily:Or("D4.fontFamily"),fontSize:Or("D4.fontSize"),fontWeight:Or("D4.fontWeight"),lineHeight:Or("D4.lineHeight"),letterSpacing:Or("D4.letterSpacing")},DBody:{fontFamily:Or("DBody.fontFamily"),fontSize:Or("DBody.fontSize"),fontWeight:Or("DBody.fontWeight"),lineHeight:Or("DBody.lineHeight"),letterSpacing:Or("DBody.letterSpacing")},H1:{fontFamily:Or("H1.fontFamily"),fontSize:Or("H1.fontSize"),fontWeight:Or("H1.fontWeight"),lineHeight:Or("H1.lineHeight"),letterSpacing:Or("H1.letterSpacing")},H2:{fontFamily:Or("H2.fontFamily"),fontSize:Or("H2.fontSize"),fontWeight:Or("H2.fontWeight"),lineHeight:Or("H2.lineHeight"),letterSpacing:Or("H2.letterSpacing")},H3:{fontFamily:Or("H3.fontFamily"),fontSize:Or("H3.fontSize"),fontWeight:Or("H3.fontWeight"),lineHeight:Or("H3.lineHeight"),letterSpacing:Or("H3.letterSpacing")},H4:{fontFamily:Or("H4.fontFamily"),fontSize:Or("H4.fontSize"),fontWeight:Or("H4.fontWeight"),lineHeight:Or("H4.lineHeight"),letterSpacing:Or("H4.letterSpacing")},H5:{fontFamily:Or("H5.fontFamily"),fontSize:Or("H5.fontSize"),fontWeight:Or("H5.fontWeight"),lineHeight:Or("H5.lineHeight"),letterSpacing:Or("H5.letterSpacing")},H6:{fontFamily:Or("H6.fontFamily"),fontSize:Or("H6.fontSize"),fontWeight:Or("H6.fontWeight"),lineHeight:Or("H6.lineHeight"),letterSpacing:Or("H6.letterSpacing")},Body:{fontFamily:Or("Body.fontFamily"),fontSize:Or("Body.fontSize"),fontWeight:Or("Body.fontWeight"),lineHeight:Or("Body.lineHeight"),letterSpacing:Or("Body.letterSpacing")},BodySmall:{fontFamily:Or("BodySmall.fontFamily"),fontSize:Or("BodySmall.fontSize"),fontWeight:Or("BodySmall.fontWeight"),lineHeight:Or("BodySmall.lineHeight"),letterSpacing:Or("BodySmall.letterSpacing")},XSmall:{fontFamily:Or("XSmall.fontFamily"),fontSize:Or("XSmall.fontSize"),fontWeight:Or("XSmall.fontWeight"),lineHeight:Or("XSmall.lineHeight"),letterSpacing:Or("XSmall.letterSpacing")}},Br=e=>{switch(e){case 700:case"bold":return _r.Bold;case 600:case"semibold":return _r.Semibold;case 300:case"light":return _r.Light;case 400:case"regular":return _r.Regular;default:return""}},Mr=(e,t)=>n=>{var r;const i=kr[e].fontFamily(n),a=kr[e].fontWeight(n);return Object.values(_r).includes(i)?S`
                font-family: ${Br(t)||Br(a)||i};
                font-weight: normal !important;
            `:S`
            font-family: ${i};
            font-weight: ${null!==(r=jr(t)||a)&&void 0!==r?r:"normal"};
        `},jr=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},Ar=e=>{if(e>0)return S`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Er=Mr,Cr=(e,t,n=!1)=>r=>{const i=kr[e],a=i.fontSize(r);return S`
            ${Mr(e,t)}
            font-size: ${a}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${S`
                margin-bottom: ${a*(n?1.05:0)}rem;
            `}
        `},Hr=(e=!1,t=!1,n=void 0)=>t?S`
            display: block;
            ${Ar(n)}
        `:e?S`
            display: inline;
        `:S`
            display: block;
            ${Ar(n)}
        `;var Tr;!function(e){e.D1=w.h1`
        ${e=>S`
                ${Cr("D1",e.weight,e.paragraph)}
                color: ${gr.Neutral[1]};
                ${Hr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=w.h1`
        ${e=>S`
                ${Cr("D2",e.weight,e.paragraph)}
                color: ${gr.Neutral[1]};
                ${Hr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=w.h1`
        ${e=>S`
                ${Cr("D3",e.weight,e.paragraph)}
                color: ${gr.Neutral[1]};
                ${Hr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=w.h1`
        ${e=>S`
                ${Cr("D4",e.weight,e.paragraph)}
                color: ${gr.Neutral[1]};
                ${Hr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=w.h1`
        ${e=>S`
                ${Cr("DBody",e.weight,e.paragraph)}
                color: ${gr.Neutral[1]};
                ${Hr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=w.h1`
        ${e=>S`
                ${Cr("H1",e.weight,e.paragraph)}
                color: ${gr.Neutral[1]};
                ${Hr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=w.h2`
        ${e=>S`
                ${Cr("H2",e.weight,e.paragraph)}
                color: ${gr.Neutral[1]};
                ${Hr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=w.h3`
        ${e=>S`
                ${Cr("H3",e.weight,e.paragraph)}
                color: ${gr.Neutral[1]};
                ${Hr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=w.h4`
        ${e=>S`
                ${Cr("H4",e.weight,e.paragraph)}
                color: ${gr.Neutral[1]};
                ${Hr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=w.h5`
        ${e=>S`
                ${Cr("H5",e.weight,e.paragraph)}
                color: ${gr.Neutral[1]};
                ${Hr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=w.h6`
        ${e=>S`
                ${Cr("H6",e.weight,e.paragraph)}
                color: ${gr.Neutral[1]};
                ${Hr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=w.p`
        ${e=>S`
                ${Cr("Body",e.weight,e.paragraph)}
                color: ${gr.Neutral[1]};
                ${Hr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=w.p`
        ${e=>S`
                ${Cr("BodySmall",e.weight,e.paragraph)}
                color: ${gr.Neutral[1]};
                ${Hr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=w.span`
        ${e=>S`
                ${Cr("XSmall",e.weight,e.paragraph)}
                color: ${gr.Neutral[1]};
                ${Hr(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>Ir(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Ir(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(Tr||(Tr={}));const Pr=w.a`
    ${e=>S`
            ${Cr(e.textStyle,e.weight)}
            color: ${gr.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${gr.Secondary};

                svg {
                    color: ${gr.Secondary};
                }
            }
        `}
`,zr=w(D)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Ir=n=>{var{external:r=!1,children:i}=n,a=k(n,["external","children"]);return e(Pr,Object.assign({},a,{children:[i,r&&t(zr,{})]}))};var Rr;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Rr||(Rr={}));const Lr={collections:{base:{InputBoxShadow:S`
        inset 0 0 4px 0px ${gr.Shadow.Accent}
    `,InputErrorBoxShadow:S`
        inset 0 0 4px 0px ${gr.Shadow.Red}
    `,ElevationBoxShadow:S`
      0px 2px 8px ${gr.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:S`
        inset 0 0 3px 0px ${gr.Shadow.Accent}
    `,InputErrorBoxShadow:S`
        inset 0 0 3px 0px ${gr.Shadow.Red}
    `,ElevationBoxShadow:S`
      0px 2px 8px ${gr.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},Nr=e=>t=>{var n;const r=t.theme,i=dr(Lr,r[hr.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?ur(i,e,r.options.designToken):ur(i,e)},Yr={InputBoxShadow:Nr("InputBoxShadow"),InputErrorBoxShadow:Nr("InputErrorBoxShadow"),ElevationBoxShadow:Nr("ElevationBoxShadow"),Table:{Header:Nr("Table.Header"),Cell:{Primary:Nr("Table.Cell.Primary"),Secondary:Nr("Table.Cell.Secondary"),Selected:Nr("Table.Cell.Selected"),Hover:Nr("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:Nr("Button.Danger.BackgroundColor"),Hover:Nr("Button.Danger.Hover"),Primary:Nr("Button.Danger.Primary"),Border:Nr("Button.Danger.Border")}}},Wr=w.button`
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
    ${e=>{switch(e.$buttonStyle){case"secondary":return S`
                    background-color: ${gr.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?Yr.Button.Danger.Border:gr.Primary};

                    span {
                        color: ${e.$buttonIsDanger?Yr.Button.Danger.Primary:gr.Primary};
                    }
                `;case"light":return S`
                    background-color: ${gr.Neutral[8]};
                    border: 1px solid ${gr.Neutral[5]};

                    span {
                        color: ${e.$buttonIsDanger?Yr.Button.Danger.Primary:gr.Primary};
                    }
                `;case"disabled":return S`
                    background-color: ${gr.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${gr.Neutral[3]};
                    }
                `;case"link":return S`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?Yr.Button.Danger.Primary:gr.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${e.$buttonIsDanger?Yr.Button.Danger.Hover:gr.Secondary};
                        }
                    }
                `;default:return S`
                    background-color: ${e.$buttonIsDanger?Yr.Button.Danger.BackgroundColor:gr.Primary};
                    border: 1px solid transparent;

                    ${vr.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${gr.Neutral[8]};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?S`
                    height: 2.5rem;
                    span {
                        ${Cr("H5","semibold")}
                    }

                    ${vr.mobileS} {
                        height: auto;
                    }
                `:S`
                    height: 3rem;
                    span {
                        ${Cr("H4","semibold")}
                    }

                    ${vr.mobileS} {
                        height: auto;
                    }
                `}
`,Vr=w((({color:n,className:r,size:i=18})=>e(br,Object.assign({className:r,$size:i,$color:n},{children:[t(wr,{id:"inner1",$size:i-2,$borderWidth:2}),t(xr,{id:"inner2",$size:i-2,$borderWidth:2}),t(Sr,{id:"inner3",$size:i-2,$borderWidth:2}),t(Dr,{id:"inner4",$size:i-2,$borderWidth:2})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t=e.$buttonIsDanger?Yr.Button.Danger.Primary:gr.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=gr.Neutral[3](e);break;default:t=gr.Neutral[8](e)}return S`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,qr={Default:i.forwardRef(((n,r)=>{const{children:i,disabled:a=!1,loading:o=!1,styleType:s="default",danger:l=!1}=n,c=k(n,["children","disabled","loading","styleType","danger"]),u={$buttonStyle:a?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return e(Wr,Object.assign({ref:r,"data-testid":c["data-testid"]||"button",disabled:a},u,c,{children:[o&&t(Vr,Object.assign({},u)),t("span",{children:i})]}))})),Small:i.forwardRef(((n,r)=>{const{children:i,disabled:a=!1,loading:o=!1,styleType:s="default",danger:l=!1}=n,c=k(n,["children","disabled","loading","styleType","danger"]),u={$buttonStyle:a?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return e(Wr,Object.assign({ref:r,"data-testid":c["data-testid"]||"button",disabled:a},u,c,{children:[o&&t(Vr,Object.assign({},u,{size:16})),t("span",{children:i})]}))}))},Ur=w.button`
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

        ${({$highlight:e})=>e&&S`
                background-color: ${gr.Neutral[7]};
            `}
    }
`,Qr=i.forwardRef(((e,n)=>{var{children:r,focusHighlight:i=!0,focusOutline:a="none",type:o="button"}=e,s=k(e,["children","focusHighlight","focusOutline","type"]);return t(Ur,Object.assign({ref:n,$outline:a,$highlight:i,type:o},s,{children:r}))})),Zr=S`
    color: ${gr.Neutral[3]};
    height: 1rem;
    width: 1rem;
`,Xr=w(b)`
    ${Zr}
`,Gr=w($)`
    ${Zr}
`,Jr=w(v)`
    ${Zr}
    transition: transform 250ms ease-in-out;
    margin-left: 0.5rem;
`,Kr=w.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
`,ei=w.div`
    display: flex;
    flex: 1;
    position: relative;
`,ti=w.div`
    isolation: isolate;
    width: 100%;
`,ni=w.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${gr.Neutral[8]};

    ${e=>{if(!e.$visible)return S`
                display: none;
            `}}
`,ri=w.div`
    display: flex;
    justify-content: space-between;
    margin: 0 0 0.5rem 0;
`,ii=w.div`
    display: flex;
`,ai=w.button`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;

    ${e=>!1===e.$visible?S`
                display: none;
            `:e.$expanded?S`
                ${Jr} {
                    transform: rotate(180deg);
                }
            `:void 0}
`,oi=w.p`
    ${Cr("H5","regular")}
`,si=w.div`
    display: flex;
`,li=w(Qr)`
    margin: auto 0;
    padding: 0.75rem;

    :disabled {
        cursor: not-allowed;
    }
`,ci=w.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;
`,ui=w(qr.Small)`
    flex: 1;
`,di=w.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 2.5rem);
    align-content: center;
    justify-content: center;

    ${e=>{switch(e.$type){case"standalone":return S`
                    gap: 0.5rem 2.5rem;
                `;case"input":return S`
                    gap: 0.5rem 1rem;
                `}}}
`,hi=w.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: default;
    border-radius: 5rem;
    margin: 0 0.5rem;

    ${e=>e.$interactive?S`
                cursor: pointer;
                &:hover {
                    box-shadow: 0px 0px 4px 1px ${gr.Shadow.Accent};
                    border: 1px solid ${gr.Accent.Light[1]};
                }
            `:e.$disabledDisplay?S`
                cursor: not-allowed;
            `:void 0}

    ${e=>{switch(e.$variant){case"current-month":return S`
                    background-color: ${gr.Accent.Light[6](e)};
                `;case"selected-month":return S`
                    background-color: ${gr.Accent.Light[5](e)};
                    border: 1px solid ${gr.Primary(e)};
                `}}}
`,fi=w(Tr.H5)`
    ${e=>{if(e.$disabledDisplay)return S`
                color: ${gr.Neutral[4]};
            `;switch(e.$variant){case"current-month":return S`
                    color: ${gr.Neutral[3](e)};
                `;case"selected-month":return S`
                    ${Cr("H5","semibold")}
                    color: ${gr.Primary(e)};
                `}}}
`,pi=({calendarDate:e,currentFocus:n,selectedStartDate:r,selectedEndDate:i,viewCalendarDate:a,type:o,isNewSelection:s,minDate:l,maxDate:c,allowDisabledSelection:u,onMonthSelect:d})=>{const h=f((()=>Y.generateMonths(j(e))),[e]),p=e=>{const t="start"===n&&i&&e.isAfter(i,"month")&&s,a="end"===n&&r&&e.isBefore(r,"month")&&s;return t||a},g=e=>{const t=e.format("MMMM"),n=(r=e,!Y.isWithinRange(r,l?j(l):void 0,c?j(c):void 0,"month"));var r;const i=a.isSame(e,"month")?"selected-month":j().isSame(e,"month")?"current-month":"default";return{disabledDisplay:n||p(e),interactive:!n||u,month:t,variant:i}};return h.length?t(di,Object.assign({$type:o},{children:h.map((e=>{const{disabledDisplay:n,interactive:r,variant:i,month:a}=g(e);return t(hi,Object.assign({$variant:i,$disabledDisplay:n,$interactive:r,onClick:()=>((e,t)=>{t||d(e)})(e,!r)},{children:t(fi,Object.assign({weight:"regular",$variant:i,$disabledDisplay:n},{children:a}))}),a)}))})):null},gi=w.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-content: center;
    grid-template-columns: repeat(3, 1fr);

    ${e=>{switch(e.$type){case"standalone":return S`
                    grid-template-rows: repeat(4, 4rem);
                    gap: 0.5rem 2.5rem;
                `;case"input":return S`
                    grid-template-rows: repeat(4, 4.375rem);
                    gap: 0.5rem 1rem;
                `}}}
`,mi=w.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: default;
    border-radius: 0.5rem;
    margin: 0 0.5rem;

    ${e=>e.$interactive?S`
                cursor: pointer;
                &:hover {
                    box-shadow: 0px 0px 4px 1px ${gr.Shadow.Accent};
                    border: 1px solid ${gr.Accent.Light[1]};
                }
            `:e.$disabledDisplay?S`
                cursor: not-allowed;
            `:void 0}

    ${e=>{switch(e.$variant){case"current-year":return S`
                    background: ${gr.Accent.Light[6](e)};
                `;case"selected-year":return S`
                    background: ${gr.Accent.Light[5](e)};
                    border: 1px solid ${gr.Primary(e)};
                `}}};
`,yi=w(Tr.H5)`
    ${e=>{if(e.$disabledDisplay)return S`
                color: ${gr.Neutral[4]};
            `;switch(e.$variant){case"current-year":return S`
                    color: ${gr.Neutral[3](e)};
                `;case"selected-year":return S`
                    ${Cr("H5","semibold")}
                    color: ${gr.Primary(e)};
                `;case"other-decade":return S`
                    color: ${gr.Neutral[4](e)};
                `}}}
`,vi=({calendarDate:e,currentFocus:n,selectedStartDate:r,selectedEndDate:i,viewCalendarDate:a,type:o,isNewSelection:s,minDate:l,maxDate:c,allowDisabledSelection:u,onYearSelect:d})=>{const h=f((()=>Y.generateDecadeOfYears(j(e))),[e]),p=e=>{const t="start"===n&&i&&e.isAfter(i,"year")&&s,a="end"===n&&r&&e.isBefore(r,"year")&&s;return t||a},g=e=>{const t=[0,11].includes(h.indexOf(e)),n=e.year(),r=(i=e,!Y.isWithinRange(i,l?j(l):void 0,c?j(c):void 0,"year"));var i;const o=t?"other-decade":a.isSame(e,"year")?"selected-year":j().isSame(e,"year")?"current-year":"default";return{disabledDisplay:r||p(e),interactive:!r||u,year:n,variant:o}};return h.length?t(gi,Object.assign({$type:o},{children:h.map((e=>{const{disabledDisplay:n,interactive:r,variant:i,year:a}=g(e);return t(mi,Object.assign({$variant:i,$disabledDisplay:n,$interactive:r,onClick:()=>((e,t)=>{t||d(e)})(e,!r)},{children:t(yi,Object.assign({weight:"regular",$variant:i,$disabledDisplay:n,$interactive:r},{children:a}))}),a)}))})):null},bi=i.forwardRef(((r,i)=>{var{children:a,initialCalendarDate:l,type:c,minDate:u,maxDate:h,currentFocus:f,selectedStartDate:g,selectedEndDate:m,selectWithinRange:y,dynamicHeight:v=!1,allowDisabledSelection:b,onCalendarDateChange:$,withButton:w,doneButtonDisabled:x,onDismiss:S,showNavigationHeader:D=!0,getLeftArrowDate:_,getRightArrowDate:F,isLeftArrowDisabled:O,isRightArrowDisabled:B,getMonthHeaderLabel:M,getYearHeaderLabel:A}=r,E=k(r,["children","initialCalendarDate","type","minDate","maxDate","currentFocus","selectedStartDate","selectedEndDate","selectWithinRange","dynamicHeight","allowDisabledSelection","onCalendarDateChange","withButton","doneButtonDisabled","onDismiss","showNavigationHeader","getLeftArrowDate","getRightArrowDate","isLeftArrowDisabled","isRightArrowDisabled","getMonthHeaderLabel","getYearHeaderLabel"]);const[C,H]=s(Z.toDayjs(l)),[T,P]=s(Z.toDayjs(l)),[z,I]=s("default"),R=o(null),L=o(null),N=o();p(i,(()=>({defaultView(){I("default")},resetView(){const e=Z.toDayjs(l);H(e),P(e),I("default")},setCalendarDate(e){const t=Z.toDayjs(e);H(t),P(t)}}))),d((()=>{const e=Z.toDayjs(l);H(e),P(e)}),[l]),d((()=>{G(T)}),[T]);const W=()=>{"month-options"!==z?(I("month-options"),N.current.focus()):(I("default"),H(T))},V=()=>{"default"!==z?(I("default"),H(T)):I("year-options")},q=()=>{N.current.focus();const e=_?_(C):C.subtract(1,"month");switch(z){case"default":P(e),H(e);break;case"month-options":H((e=>e.subtract(1,"year")));break;case"year-options":H((e=>e.subtract(10,"year")))}},U=()=>{N.current.focus();const e=F?F(C):C.add(1,"month");switch(z){case"default":P(e),H(e);break;case"month-options":H((e=>e.add(1,"year")));break;case"year-options":H((e=>e.add(10,"year")))}},Q=e=>{H(e),P(e),w||I("default")},X=()=>{const e=Z.toDayjs(l);H(e),P(e),"default"===z?J("reset"):I("default")},G=e=>{$&&$(e)},J=e=>{S&&S(e)},K=()=>{if(!u||b)return!1;const e=j(u);return"month-options"===z?!Y.isPreviousYearWithinRange(C,e):"year-options"===z?!Y.isPreviousDecadeWithinRange(C,e):O?O(C):!Y.isPreviousMonthWithinRange(C,e)},ee=()=>{if(!h||b)return!1;const e=j(h);return"month-options"===z?!Y.isNextYearWithinRange(C,e):"year-options"===z?!Y.isNextDecadeWithinRange(C,e):B?B(C):!Y.isNextMonthWithinRange(C,e)},te=()=>{if("year-options"===z){const{beginDecade:e,endDecade:t}=Y.getStartEndDecade(C);return`${e} to ${t}`}return A?A(C):C.format("YYYY")},ne=()=>{const r=M?M(C):C.format("MMM");return e(n,{children:[e(ai,Object.assign({type:"button",tabIndex:-1,$expanded:"month-options"===z,$visible:"default"===z,id:"month-dropdown",onClick:W},{children:[t(oi,{children:r}),t(Jr,{})]})),e(ai,Object.assign({type:"button",tabIndex:-1,$expanded:"default"!==z,id:"year-dropdown",onClick:V},{children:[t(oi,{children:te()}),t(Jr,{})]}))]})},re=()=>{switch(z){case"month-options":return t(pi,{type:c,calendarDate:C,currentFocus:f,minDate:u,maxDate:h,selectedStartDate:g,selectedEndDate:m,viewCalendarDate:T,isNewSelection:y,onMonthSelect:Q,allowDisabledSelection:b});case"year-options":return t(vi,{type:c,calendarDate:C,currentFocus:f,minDate:u,maxDate:h,selectedStartDate:g,selectedEndDate:m,viewCalendarDate:T,isNewSelection:y,onYearSelect:Q,allowDisabledSelection:b});default:return null}};return e(Kr,Object.assign({ref:N,tabIndex:-1,"data-id":"calendar-container","data-testid":"calendar-container"},E,{children:[D&&e(ri,Object.assign({"data-id":"calendar-header","data-testid":"calendar-header"},{children:[t(ii,{children:ne()}),e(si,{children:[t(li,Object.assign({"data-testid":"left-arrow-btn",disabled:K(),focusHighlight:!1,tabIndex:-1,onClick:q},{children:t(Xr,{})})),t(li,Object.assign({"data-testid":"right-arrow-btn",disabled:ee(),focusHighlight:!1,tabIndex:-1,onClick:U},{children:t(Gr,{})}))]})]})),t(ei,{children:(()=>{const r="function"==typeof a?a({calendarDate:T,currentView:z}):a;return e(n,v?{children:["default"===z&&r,re()]}:{children:[t(ti,{children:r}),t(ni,Object.assign({$visible:"default"!==z},{children:re()}))]})})()}),(()=>{if(!w)return;const n=!!("default"===z)&&x;return e(ci,{children:[t(ui,Object.assign({ref:L,"data-testid":"cancel-button",styleType:"light",type:"button",onClick:X},{children:"Cancel"})),t(ui,Object.assign({"data-testid":"done-button",ref:R,type:"button",onClick:()=>{n||(H(T),"default"===z?J("confirmed"):I("default"))},disabled:n},{children:"Done"}))]})})()]}))})),$i=e=>{let t=gr.Neutral[8],n="1px solid transparent";switch(e.$type){case"current":t=gr.Accent.Light[5];break;case"hover-dash":t=gr.Accent.Light[6],n=`1px dashed ${gr.Accent.Light[4](e)}`;break;case"hover-current":t=gr.Neutral[8],n=`1px solid ${gr.Primary(e)}`;break;case"selected":t=gr.Accent.Light[5],n=`1px solid ${gr.Accent.Light[4](e)}`;break;case"selected-outline":t=gr.Accent.Light[5],n=`1px solid ${gr.Primary(e)}`;break;case"overlap":t=gr.Accent.Light[4],n=`1px solid ${gr.Accent.Light[4](e)}`;break;case"overlap-outline":t=gr.Accent.Light[4],n=`1px solid ${gr.Primary(e)}`}return{color:t,border:n}},wi=w.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 2.5rem;
`,xi=w.div`
    position: absolute;
    height: 2.5rem;
    width: 50%;

    ${e=>{if(!e.$type)return;const{color:t,border:n}=$i(e);return S`
            background-color: ${t};
            background-clip: content-box;
            border-top: ${n};
            border-bottom: ${n};
        `}}
`,Si=w(xi)`
    left: 0;
`,Di=w(xi)`
    right: 0;
`,_i=w.div`
    z-index: -1;
    box-shadow: 0 0 4px 1px ${gr.Shadow.Accent};
    position: absolute;
    height: 100%;
    width: 50%;
    display: none;

    ${e=>e.$shadow&&"display: block;"}
`,Fi=w(_i)`
    left: 0;
`,Oi=w(_i)`
    right: 0;
`,ki=w.div`
    position: absolute;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;

    border: 1px solid transparent;
    border-radius: 50%;

    ${e=>{if(e.$type){const{color:t,border:n}=$i(e);return S`
                background-color: ${t};
                background-clip: content-box;
                border: ${n};
            `}}}

    ${e=>e.$shadow&&S`
            &:before {
                content: "";
                border-radius: 50%;
                position: absolute;
                height: 100%;
                width: 100%;
            }
        `}
`,Bi=w(ki)`
    right: calc(50% - 1.25rem);
    clip-path: inset(-3px 1.25rem -3px -3px);
    &:before {
        box-shadow: -1px 0 4px 1px ${gr.Shadow.Accent};
    }
`,Mi=w(ki)`
    left: calc(50% - 1.25rem);
    clip-path: inset(-3px -3px -3px 1.25rem);
    &:before {
        box-shadow: 1px 0 4px 1px ${gr.Shadow.Accent};
    }
`,ji=w(Tr.H5)`
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

    ${e=>{const{$disabled:t,$type:n}=e;if(t)return"selected"===n?S`
                    ${Cr("H5","semibold")};
                    color: ${gr.Accent.Light[2]};
                `:S`
                color: ${gr.Neutral[4]};
            `;switch(n){case"selected":return S`
                    ${Cr("H5","semibold")};
                    color: ${gr.Primary};
                `;case"current":return S`
                    color: ${gr.Neutral[3]};
                `;case"unavailable":return S`
                    color: ${gr.Neutral[4]};
                `;default:return S`
                    color: ${gr.Neutral[1]};
                `}}}
`,Ai=({bgLeft:n,bgRight:r,circleLeft:i,circleRight:a,shadow:o,circleShadow:s,labelType:l,disabled:c,interactive:u,date:d,onSelect:h,onHover:f,onHoverEnd:p})=>e(wi,{children:[t(Fi,{$shadow:n&&o}),t(Si,{$type:n,$shadow:n&&o}),t(Bi,{$type:i,$shadow:i&&s}),t(Oi,{$shadow:r&&o}),t(Di,{$type:r,$shadow:r&&o}),t(Mi,{$type:a,$shadow:a&&s}),t(ji,Object.assign({weight:"regular",$type:l,$disabled:c,$interactive:u,onClick:()=>{h(d)},onMouseEnter:()=>{f(d)},onMouseLeave:()=>{p&&p(d)}},{children:d.date()}))]}),Ei="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",Ci=1.25,Hi=e=>"minified"===e?12:40;w.div`
    position: relative;
    display: flex;
    align-items: center;
`,w(Qr)`
    z-index: 2;
    position: absolute;
    bottom: ${({$variant:e})=>"default"===e?"0.25rem":"0rem"};
    background-color: ${gr.Neutral[8]};
    box-shadow: 0px 2px 8px rgba(104, 104, 104, 0.5);
    border-radius: 50%;
    padding: 0.5rem;
    width: 2rem;
    height: 2rem;

    ${e=>"right"===e.$direction?S`
                  right: 0;
              `:S`
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
`,w($)`
    width: 1rem;
    height: 1rem;
    color: ${gr.Primary};
`,w(b)`
    font-size: 1rem;
    color: ${gr.Primary};
`,w.div`
    overflow: hidden;
    flex-grow: 1;
    position: relative;
    height: ${({$variant:e})=>`${20+Hi(e)}px`};
`,w.div`
    position: relative;
    white-space: nowrap;
    height: ${Ci}rem;
`,w.div`
    display: flex;
    white-space: nowrap;
`,w.div`
    display: inline-block;
    width: ${({$variant:e})=>("minified"===e?12:40)+"px"};
    position: relative;
    border-left: 1px solid ${gr.Neutral[2]};
    ${e=>{let t=0;switch(e.$variant){case"default":t=e.$isLongMarker?Ci:.625;break;case"minified":t=e.$isLongMarker?Ci:0;break;default:t=0}return S`
            height: ${t}rem;
        `}}
`,w(Tr.XSmall)`
    color: ${gr.Neutral[2]};
    position: absolute;
    bottom: 10%;
    left: 10%;
`;const Ti=w.div`
    ${e=>"vertical"===e.$type?S`
                display: flex;
                flex-grow: 1;
                align-items: center;
                justify-content: center;
                width: 100%;
                margin: 1px 0px;
            `:S`
                position: absolute;
                height: ${Hi(e.$variant)}px;
                width: ${e.$width}px;
                left: ${e.$left}px;
            `}
    background-color: ${({$bgColor:e})=>e};
    cursor: ${({$clickable:e})=>e?"pointer":"default"};

    ${e=>"stripes"===e.$styleType&&S`
            background: repeating-linear-gradient(
                135deg,
                ${e.$bgColor2||gr.Neutral[5]} 0px,
                ${e.$bgColor2||gr.Neutral[5]} 10px,
                ${e.$bgColor} 10px,
                ${e.$bgColor} 20px
            );
        `}
`;w.div`
    position: absolute;
    top: ${Ci}rem;
    height: ${({$variant:e})=>`${Hi(e)}px`};
    z-index: 1;
    border-right: 1px solid ${gr.Neutral[2]};
`,w(Tr.XSmall)`
    color: ${e=>e.$color||gr.Neutral[2](e)};
    position: absolute;
    bottom: 0;
    padding-left: 4px;
    padding-bottom: 4px;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;let Pi=Ki();const zi=e=>Zi(e,Pi);let Ii=Ki();zi.write=e=>Zi(e,Ii);let Ri=Ki();zi.onStart=e=>Zi(e,Ri);let Li=Ki();zi.onFrame=e=>Zi(e,Li);let Ni=Ki();zi.onFinish=e=>Zi(e,Ni);let Yi=[];zi.setTimeout=(e,t)=>{let n=zi.now()+t,r=()=>{let e=Yi.findIndex((e=>e.cancel==r));~e&&Yi.splice(e,1),Ui-=~e?1:0},i={time:n,handler:e,cancel:r};return Yi.splice(Wi(n),0,i),Ui+=1,Xi(),i};let Wi=e=>~(~Yi.findIndex((t=>t.time>e))||~Yi.length);zi.cancel=e=>{Ri.delete(e),Li.delete(e),Ni.delete(e),Pi.delete(e),Ii.delete(e)},zi.sync=e=>{Qi=!0,zi.batchedUpdates(e),Qi=!1},zi.throttle=e=>{let t;function n(){try{e(...t)}finally{t=null}}function r(...e){t=e,zi.onStart(n)}return r.handler=e,r.cancel=()=>{Ri.delete(n),t=null},r};let Vi="undefined"!=typeof window?window.requestAnimationFrame:()=>{};zi.use=e=>Vi=e,zi.now="undefined"!=typeof performance?()=>performance.now():Date.now,zi.batchedUpdates=e=>e(),zi.catch=console.error,zi.frameLoop="always",zi.advance=()=>{"demand"!==zi.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):Ji()};let qi=-1,Ui=0,Qi=!1;function Zi(e,t){Qi?(t.delete(e),e(0)):(t.add(e),Xi())}function Xi(){qi<0&&(qi=0,"demand"!==zi.frameLoop&&Vi(Gi))}function Gi(){~qi&&(Vi(Gi),zi.batchedUpdates(Ji))}function Ji(){let e=qi;qi=zi.now();let t=Wi(qi);t&&(ea(Yi.splice(0,t),(e=>e.handler())),Ui-=t),Ui?(Ri.flush(),Pi.flush(e?Math.min(64,qi-e):16.667),Li.flush(),Ii.flush(),Ni.flush()):qi=-1}function Ki(){let e=new Set,t=e;return{add(n){Ui+=t!=e||e.has(n)?0:1,e.add(n)},delete:n=>(Ui-=t==e&&e.has(n)?1:0,e.delete(n)),flush(n){t.size&&(e=new Set,Ui-=t.size,ea(t,(t=>t(n)&&e.add(t))),Ui+=e.size,t=e)}}}function ea(e,t){e.forEach((e=>{try{t(e)}catch(e){zi.catch(e)}}))}function ta(){}const na={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function ra(e,t){if(na.arr(e)){if(!na.arr(t)||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}return e===t}const ia=(e,t)=>e.forEach(t);function aa(e,t,n){if(na.arr(e))for(let r=0;r<e.length;r++)t.call(n,e[r],`${r}`);else for(const r in e)e.hasOwnProperty(r)&&t.call(n,e[r],r)}const oa=e=>na.und(e)?[]:na.arr(e)?e:[e];function sa(e,t){if(e.size){const n=Array.from(e);e.clear(),ia(n,t)}}const la=(e,...t)=>sa(e,(e=>e(...t))),ca=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent);let ua,da,ha=null,fa=!1,pa=ta;var ga=Object.freeze({__proto__:null,get createStringInterpolator(){return ua},get to(){return da},get colors(){return ha},get skipAnimation(){return fa},get willAdvance(){return pa},assign:e=>{e.to&&(da=e.to),e.now&&(zi.now=e.now),void 0!==e.colors&&(ha=e.colors),null!=e.skipAnimation&&(fa=e.skipAnimation),e.createStringInterpolator&&(ua=e.createStringInterpolator),e.requestAnimationFrame&&zi.use(e.requestAnimationFrame),e.batchedUpdates&&(zi.batchedUpdates=e.batchedUpdates),e.willAdvance&&(pa=e.willAdvance),e.frameLoop&&(zi.frameLoop=e.frameLoop)}});const ma=new Set;let ya=[],va=[],ba=0;const $a={get idle(){return!ma.size&&!ya.length},start(e){ba>e.priority?(ma.add(e),zi.onStart(wa)):(xa(e),zi(Da))},advance:Da,sort(e){if(ba)zi.onFrame((()=>$a.sort(e)));else{const t=ya.indexOf(e);~t&&(ya.splice(t,1),Sa(e))}},clear(){ya=[],ma.clear()}};function wa(){ma.forEach(xa),ma.clear(),zi(Da)}function xa(e){ya.includes(e)||Sa(e)}function Sa(e){ya.splice(function(e,t){const n=e.findIndex(t);return n<0?e.length:n}(ya,(t=>t.priority>e.priority)),0,e)}function Da(e){const t=va;for(let n=0;n<ya.length;n++){const r=ya[n];ba=r.priority,r.idle||(pa(r),r.advance(e),r.idle||t.push(r))}return ba=0,va=ya,va.length=0,ya=t,ya.length>0}const _a="[-+]?\\d*\\.?\\d+",Fa=_a+"%";function Oa(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}const ka=new RegExp("rgb"+Oa(_a,_a,_a)),Ba=new RegExp("rgba"+Oa(_a,_a,_a,_a)),Ma=new RegExp("hsl"+Oa(_a,Fa,Fa)),ja=new RegExp("hsla"+Oa(_a,Fa,Fa,_a)),Aa=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Ea=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Ca=/^#([0-9a-fA-F]{6})$/,Ha=/^#([0-9a-fA-F]{8})$/;function Ta(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Pa(e,t,n){const r=n<.5?n*(1+t):n+t-n*t,i=2*n-r,a=Ta(i,r,e+1/3),o=Ta(i,r,e),s=Ta(i,r,e-1/3);return Math.round(255*a)<<24|Math.round(255*o)<<16|Math.round(255*s)<<8}function za(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function Ia(e){return(parseFloat(e)%360+360)%360/360}function Ra(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function La(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function Na(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=Ca.exec(e))?parseInt(t[1]+"ff",16)>>>0:ha&&void 0!==ha[e]?ha[e]:(t=ka.exec(e))?(za(t[1])<<24|za(t[2])<<16|za(t[3])<<8|255)>>>0:(t=Ba.exec(e))?(za(t[1])<<24|za(t[2])<<16|za(t[3])<<8|Ra(t[4]))>>>0:(t=Aa.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=Ha.exec(e))?parseInt(t[1],16)>>>0:(t=Ea.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=Ma.exec(e))?(255|Pa(Ia(t[1]),La(t[2]),La(t[3])))>>>0:(t=ja.exec(e))?(Pa(Ia(t[1]),La(t[2]),La(t[3]))|Ra(t[4]))>>>0:null}(e);return null===t?e:(t=t||0,`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)}const Ya=(e,t,n)=>{if(na.fun(e))return e;if(na.arr(e))return Ya({range:e,output:t,extrapolate:n});if(na.str(e.output[0]))return ua(e);const r=e,i=r.output,a=r.range||[0,1],o=r.extrapolateLeft||r.extrapolate||"extend",s=r.extrapolateRight||r.extrapolate||"extend",l=r.easing||(e=>e);return e=>{const t=function(e,t){for(var n=1;n<t.length-1&&!(t[n]>=e);++n);return n-1}(e,a);return function(e,t,n,r,i,a,o,s,l){let c=l?l(e):e;if(c<t){if("identity"===o)return c;"clamp"===o&&(c=t)}if(c>n){if("identity"===s)return c;"clamp"===s&&(c=n)}if(r===i)return r;if(t===n)return e<=t?r:i;t===-1/0?c=-c:n===1/0?c-=t:c=(c-t)/(n-t);c=a(c),r===-1/0?c=-c:i===1/0?c+=r:c=c*(i-r)+r;return c}(e,a[t],a[t+1],i[t],i[t+1],l,o,s,r.map)}};const Wa=1.70158,Va=1.525*Wa,qa=Wa+1,Ua=2*Math.PI/3,Qa=2*Math.PI/4.5,Za=e=>{const t=7.5625,n=2.75;return e<1/n?t*e*e:e<2/n?t*(e-=1.5/n)*e+.75:e<2.5/n?t*(e-=2.25/n)*e+.9375:t*(e-=2.625/n)*e+.984375},Xa={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>qa*e*e*e-Wa*e*e,easeOutBack:e=>1+qa*Math.pow(e-1,3)+Wa*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-Va)/2:(Math.pow(2*e-2,2)*((Va+1)*(2*e-2)+Va)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*Ua),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*Ua)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*Qa)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*Qa)/2+1,easeInBounce:e=>1-Za(1-e),easeOutBounce:Za,easeInOutBounce:e=>e<.5?(1-Za(1-2*e))/2:(1+Za(2*e-1))/2,steps:(e,t="end")=>n=>{const r=(n="end"===t?Math.min(n,.999):Math.max(n,.001))*e,i="end"===t?Math.floor(r):Math.ceil(r);return a=0,o=1,s=i/e,Math.min(Math.max(s,a),o);var a,o,s}};function Ga(){return Ga=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ga.apply(this,arguments)}const Ja=Symbol.for("FluidValue.get"),Ka=Symbol.for("FluidValue.observers"),eo=e=>Boolean(e&&e[Ja]),to=e=>e&&e[Ja]?e[Ja]():e,no=e=>e[Ka]||null;function ro(e,t){let n=e[Ka];n&&n.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}class io{constructor(e){if(this[Ja]=void 0,this[Ka]=void 0,!e&&!(e=this.get))throw Error("Unknown getter");ao(this,e)}}const ao=(e,t)=>lo(e,Ja,t);function oo(e,t){if(e[Ja]){let n=e[Ka];n||lo(e,Ka,n=new Set),n.has(t)||(n.add(t),e.observerAdded&&e.observerAdded(n.size,t))}return t}function so(e,t){let n=e[Ka];if(n&&n.has(t)){const r=n.size-1;r?n.delete(t):e[Ka]=null,e.observerRemoved&&e.observerRemoved(r,t)}}const lo=(e,t,n)=>Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0}),co=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,uo=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,ho=new RegExp(`(${co.source})(%|[a-z]+)`,"i"),fo=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,po=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,go=e=>{const[t,n]=mo(e);if(!t||ca())return e;const r=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(r)return r.trim();if(n&&n.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(n);return t||e}return n&&po.test(n)?go(n):n||e},mo=e=>{const t=po.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]};let yo;const vo=(e,t,n,r,i)=>`rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,bo=e=>{yo||(yo=ha?new RegExp(`(${Object.keys(ha).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>to(e).replace(po,go).replace(uo,Na).replace(yo,Na))),n=t.map((e=>e.match(co).map(Number))),r=n[0].map(((e,t)=>n.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>Ya(Ga({},e,{output:t}))));return e=>{var n;const i=!ho.test(t[0])&&(null==(n=t.find((e=>ho.test(e))))?void 0:n.replace(co,""));let a=0;return t[0].replace(co,(()=>`${r[a++](e)}${i||""}`)).replace(fo,vo)}},$o="react-spring: ",wo=e=>{const t=e;let n=!1;if("function"!=typeof t)throw new TypeError(`${$o}once requires a function parameter`);return(...e)=>{n||(t(...e),n=!0)}},xo=wo(console.warn);const So=wo(console.warn);function Do(e){return na.str(e)&&("#"==e[0]||/\d/.test(e)||!ca()&&po.test(e)||e in(ha||{}))}const _o=ca()?d:h,Fo=()=>{const e=o(!1);return _o((()=>(e.current=!0,()=>{e.current=!1})),[]),e};function Oo(){const e=s()[1],t=Fo();return()=>{t.current&&e(Math.random())}}const ko=e=>d(e,Bo),Bo=[];function Mo(e){const t=o();return d((()=>{t.current=e})),t.current}const jo=Symbol.for("Animated:node"),Ao=e=>e&&e[jo],Eo=(e,t)=>{return n=e,r=jo,i=t,Object.defineProperty(n,r,{value:i,writable:!0,configurable:!0});var n,r,i},Co=e=>e&&e[jo]&&e[jo].getPayload();class Ho{constructor(){this.payload=void 0,Eo(this,this)}getPayload(){return this.payload||[]}}class To extends Ho{constructor(e){super(),this.done=!0,this.elapsedTime=void 0,this.lastPosition=void 0,this.lastVelocity=void 0,this.v0=void 0,this.durationProgress=0,this._value=e,na.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new To(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return na.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,na.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}}class Po extends To{constructor(e){super(0),this._string=null,this._toString=void 0,this._toString=Ya({output:[e,e]})}static create(e){return new Po(e)}getValue(){let e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(na.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=Ya({output:[this.getValue(),e]})),this._value=0,super.reset()}}const zo={dependencies:null};class Io extends Ho{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return aa(this.source,((n,r)=>{var i;(i=n)&&i[jo]===i?t[r]=n.getValue(e):eo(n)?t[r]=to(n):e||(t[r]=n)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&ia(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return aa(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){zo.dependencies&&eo(e)&&zo.dependencies.add(e);const t=Co(e);t&&ia(t,(e=>this.add(e)))}}class Ro extends Io{constructor(e){super(e)}static create(e){return new Ro(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,n)=>t.setValue(e[n]))).some(Boolean):(super.setValue(e.map(Lo)),!0)}}function Lo(e){return(Do(e)?Po:To).create(e)}function No(e){const t=Ao(e);return t?t.constructor:na.arr(e)?Ro:Do(e)?Po:To}function Yo(){return Yo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Yo.apply(this,arguments)}const Wo=(e,t)=>{const n=!na.fun(e)||e.prototype&&e.prototype.isReactComponent;return g(((i,a)=>{const s=o(null),l=n&&m((e=>{s.current=function(e,t){e&&(na.fun(e)?e(t):e.current=t);return t}(a,e)}),[a]),[c,u]=function(e,t){const n=new Set;zo.dependencies=n,e.style&&(e=Yo({},e,{style:t.createAnimatedStyle(e.style)}));return e=new Io(e),zo.dependencies=null,[e,n]}(i,t),h=Oo(),f=()=>{const e=s.current;if(n&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,c.getValue(!0)))&&h()},p=new Vo(f,u),g=o();_o((()=>(g.current=p,ia(u,(e=>oo(e,p))),()=>{g.current&&(ia(g.current.deps,(e=>so(e,g.current))),zi.cancel(g.current.update))}))),d(f,[]),ko((()=>()=>{const e=g.current;ia(e.deps,(t=>so(t,e)))}));const y=t.getComponentProps(c.getValue());return r.createElement(e,Yo({},y,{ref:l}))}))};class Vo{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&zi.write(this.update)}}const qo=Symbol.for("AnimatedComponent"),Uo=e=>na.str(e)?e:e&&na.str(e.displayName)?e.displayName:na.fun(e)&&e.name||null;function Qo(){return Qo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Qo.apply(this,arguments)}function Zo(e,...t){return na.fun(e)?e(...t):e}const Xo=(e,t)=>!0===e||!!(t&&e&&(na.fun(e)?e(t):oa(e).includes(t))),Go=(e,t)=>na.obj(e)?t&&e[t]:e,Jo=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,Ko=e=>e,es=(e,t=Ko)=>{let n=ts;e.default&&!0!==e.default&&(e=e.default,n=Object.keys(e));const r={};for(const i of n){const n=t(e[i],i);na.und(n)||(r[i]=n)}return r},ts=["config","onProps","onStart","onChange","onPause","onResume","onRest"],ns={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function rs(e){const t=function(e){const t={};let n=0;if(aa(e,((e,r)=>{ns[r]||(t[r]=e,n++)})),n)return t}(e);if(t){const n={to:t};return aa(e,((e,r)=>r in t||(n[r]=e))),n}return Qo({},e)}function is(e){return e=to(e),na.arr(e)?e.map(is):Do(e)?ga.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function as(e){return na.fun(e)||na.arr(e)&&na.obj(e[0])}const os=Qo({},{tension:170,friction:26},{mass:1,damping:1,easing:Xa.linear,clamp:!1});class ss{constructor(){this.tension=void 0,this.friction=void 0,this.frequency=void 0,this.damping=void 0,this.mass=void 0,this.velocity=0,this.restVelocity=void 0,this.precision=void 0,this.progress=void 0,this.duration=void 0,this.easing=void 0,this.clamp=void 0,this.bounce=void 0,this.decay=void 0,this.round=void 0,Object.assign(this,os)}}function ls(e,t){if(na.und(t.decay)){const n=!na.und(t.tension)||!na.und(t.friction);!n&&na.und(t.frequency)&&na.und(t.damping)&&na.und(t.mass)||(e.duration=void 0,e.decay=void 0),n&&(e.frequency=void 0)}else e.duration=void 0}const cs=[];class us{constructor(){this.changed=!1,this.values=cs,this.toValues=null,this.fromValues=cs,this.to=void 0,this.from=void 0,this.config=new ss,this.immediate=!1}}function ds(e,{key:t,props:n,defaultProps:r,state:i,actions:a}){return new Promise(((o,s)=>{var l;let c,u,d=Xo(null!=(l=n.cancel)?l:null==r?void 0:r.cancel,t);if(d)p();else{na.und(n.pause)||(i.paused=Xo(n.pause,t));let e=null==r?void 0:r.pause;!0!==e&&(e=i.paused||Xo(e,t)),c=Zo(n.delay||0,t),e?(i.resumeQueue.add(f),a.pause()):(a.resume(),f())}function h(){i.resumeQueue.add(f),i.timeouts.delete(u),u.cancel(),c=u.time-zi.now()}function f(){c>0&&!ga.skipAnimation?(i.delayed=!0,u=zi.setTimeout(p,c),i.pauseQueue.add(h),i.timeouts.add(u)):p()}function p(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(h),i.timeouts.delete(u),e<=(i.cancelId||0)&&(d=!0);try{a.start(Qo({},n,{callId:e,cancel:d}),o)}catch(e){s(e)}}}))}const hs=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?gs(e.get()):t.every((e=>e.noop))?fs(e.get()):ps(e.get(),t.every((e=>e.finished))),fs=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),ps=(e,t,n=!1)=>({value:e,finished:t,cancelled:n}),gs=e=>({value:e,cancelled:!0,finished:!1});function ms(e,t,n,r){const{callId:i,parentId:a,onRest:o}=t,{asyncTo:s,promise:l}=n;return a||e!==s||t.reset?n.promise=(async()=>{n.asyncId=i,n.asyncTo=e;const c=es(t,((e,t)=>"onRest"===t?void 0:e));let u,d;const h=new Promise(((e,t)=>(u=e,d=t))),f=e=>{const t=i<=(n.cancelId||0)&&gs(r)||i!==n.asyncId&&ps(r,!1);if(t)throw e.result=t,d(e),e},p=(e,t)=>{const a=new vs,o=new bs;return(async()=>{if(ga.skipAnimation)throw ys(n),o.result=ps(r,!1),d(o),o;f(a);const s=na.obj(e)?Qo({},e):Qo({},t,{to:e});s.parentId=i,aa(c,((e,t)=>{na.und(s[t])&&(s[t]=e)}));const l=await r.start(s);return f(a),n.paused&&await new Promise((e=>{n.resumeQueue.add(e)})),l})()};let g;if(ga.skipAnimation)return ys(n),ps(r,!1);try{let t;t=na.arr(e)?(async e=>{for(const t of e)await p(t)})(e):Promise.resolve(e(p,r.stop.bind(r))),await Promise.all([t.then(u),h]),g=ps(r.get(),!0,!1)}catch(e){if(e instanceof vs)g=e.result;else{if(!(e instanceof bs))throw e;g=e.result}}finally{i==n.asyncId&&(n.asyncId=a,n.asyncTo=a?s:void 0,n.promise=a?l:void 0)}return na.fun(o)&&zi.batchedUpdates((()=>{o(g,r,r.item)})),g})():l}function ys(e,t){sa(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}class vs extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."),this.result=void 0}}class bs extends Error{constructor(){super("SkipAnimationSignal"),this.result=void 0}}const $s=e=>e instanceof xs;let ws=1;class xs extends io{constructor(...e){super(...e),this.id=ws++,this.key=void 0,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=Ao(this);return e&&e.getValue()}to(...e){return ga.to(this,e)}interpolate(...e){return xo(`${$o}The "interpolate" function is deprecated in v9 (use "to" instead)`),ga.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){ro(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||$a.sort(this),ro(this,{type:"priority",parent:this,priority:e})}}const Ss=Symbol.for("SpringPhase"),Ds=e=>(1&e[Ss])>0,_s=e=>(2&e[Ss])>0,Fs=e=>(4&e[Ss])>0,Os=(e,t)=>t?e[Ss]|=3:e[Ss]&=-3,ks=(e,t)=>t?e[Ss]|=4:e[Ss]&=-5;class Bs extends xs{constructor(e,t){if(super(),this.key=void 0,this.animation=new us,this.queue=void 0,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!na.und(e)||!na.und(t)){const n=na.obj(e)?Qo({},e):Qo({},t,{from:e});na.und(n.default)&&(n.default=!0),this.start(n)}}get idle(){return!(_s(this)||this._state.asyncTo)||Fs(this)}get goal(){return to(this.animation.to)}get velocity(){const e=Ao(this);return e instanceof To?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return Ds(this)}get isAnimating(){return _s(this)}get isPaused(){return Fs(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,n=!1;const r=this.animation;let{config:i,toValues:a}=r;const o=Co(r.to);!o&&eo(r.to)&&(a=oa(to(r.to))),r.values.forEach(((s,l)=>{if(s.done)return;const c=s.constructor==Po?1:o?o[l].lastPosition:a[l];let u=r.immediate,d=c;if(!u){if(d=s.lastPosition,i.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const n=r.fromValues[l],a=null!=s.v0?s.v0:s.v0=na.arr(i.velocity)?i.velocity[l]:i.velocity;let o;const h=i.precision||(n==c?.005:Math.min(1,.001*Math.abs(c-n)));if(na.und(i.duration))if(i.decay){const e=!0===i.decay?.998:i.decay,r=Math.exp(-(1-e)*t);d=n+a/(1-e)*(1-r),u=Math.abs(s.lastPosition-d)<=h,o=a*r}else{o=null==s.lastVelocity?a:s.lastVelocity;const t=i.restVelocity||h/10,r=i.clamp?0:i.bounce,l=!na.und(r),f=n==c?s.v0>0:n<c;let p,g=!1;const m=1,y=Math.ceil(e/m);for(let e=0;e<y&&(p=Math.abs(o)>t,p||(u=Math.abs(c-d)<=h,!u));++e){l&&(g=d==c||d>c==f,g&&(o=-o*r,d=c));o+=(1e-6*-i.tension*(d-c)+.001*-i.friction*o)/i.mass*m,d+=o*m}}else{let r=1;i.duration>0&&(this._memoizedDuration!==i.duration&&(this._memoizedDuration=i.duration,s.durationProgress>0&&(s.elapsedTime=i.duration*s.durationProgress,t=s.elapsedTime+=e)),r=(i.progress||0)+t/this._memoizedDuration,r=r>1?1:r<0?0:r,s.durationProgress=r),d=n+i.easing(r)*(c-n),o=(d-s.lastPosition)/e,u=1==r}s.lastVelocity=o,Number.isNaN(d)&&(console.warn("Got NaN while animating:",this),u=!0)}o&&!o[l].done&&(u=!1),u?s.done=!0:t=!1,s.setValue(d,i.round)&&(n=!0)}));const s=Ao(this),l=s.getValue();if(t){const e=to(r.to);l===e&&!n||i.decay?n&&i.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else n&&this._onChange(l)}set(e){return zi.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(_s(this)){const{to:e,config:t}=this.animation;zi.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let n;return na.und(e)?(n=this.queue||[],this.queue=[]):n=[na.obj(e)?e:Qo({},t,{to:e})],Promise.all(n.map((e=>this._update(e)))).then((e=>hs(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),ys(this._state,e&&this._lastCallId),zi.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:n,from:r}=e;n=na.obj(n)?n[t]:n,(null==n||as(n))&&(n=void 0),r=na.obj(r)?r[t]:r,null==r&&(r=void 0);const i={to:n,from:r};return Ds(this)||(e.reverse&&([n,r]=[r,n]),r=to(r),na.und(r)?Ao(this)||this._set(n):this._set(r)),i}_update(e,t){let n=Qo({},e);const{key:r,defaultProps:i}=this;n.default&&Object.assign(i,es(n,((e,t)=>/^on/.test(t)?Go(e,r):e))),Ts(this,n,"onProps"),Ps(this,"onProps",n,this);const a=this._prepareNode(n);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const o=this._state;return ds(++this._lastCallId,{key:r,props:n,defaultProps:i,state:o,actions:{pause:()=>{Fs(this)||(ks(this,!0),la(o.pauseQueue),Ps(this,"onPause",ps(this,Ms(this,this.animation.to)),this))},resume:()=>{Fs(this)&&(ks(this,!1),_s(this)&&this._resume(),la(o.resumeQueue),Ps(this,"onResume",ps(this,Ms(this,this.animation.to)),this))},start:this._merge.bind(this,a)}}).then((e=>{if(n.loop&&e.finished&&(!t||!e.noop)){const e=js(n);if(e)return this._update(e,!0)}return e}))}_merge(e,t,n){if(t.cancel)return this.stop(!0),n(gs(this));const r=!na.und(e.to),i=!na.und(e.from);if(r||i){if(!(t.callId>this._lastToId))return n(gs(this));this._lastToId=t.callId}const{key:a,defaultProps:o,animation:s}=this,{to:l,from:c}=s;let{to:u=l,from:d=c}=e;!i||r||t.default&&!na.und(u)||(u=d),t.reverse&&([u,d]=[d,u]);const h=!ra(d,c);h&&(s.from=d),d=to(d);const f=!ra(u,l);f&&this._focus(u);const p=as(t.to),{config:g}=s,{decay:m,velocity:y}=g;(r||i)&&(g.velocity=0),t.config&&!p&&function(e,t,n){n&&(ls(n=Qo({},n),t),t=Qo({},n,t)),ls(e,t),Object.assign(e,t);for(const t in os)null==e[t]&&(e[t]=os[t]);let{mass:r,frequency:i,damping:a}=e;na.und(i)||(i<.01&&(i=.01),a<0&&(a=0),e.tension=Math.pow(2*Math.PI/i,2)*r,e.friction=4*Math.PI*a*r/i)}(g,Zo(t.config,a),t.config!==o.config?Zo(o.config,a):void 0);let v=Ao(this);if(!v||na.und(u))return n(ps(this,!0));const b=na.und(t.reset)?i&&!t.default:!na.und(d)&&Xo(t.reset,a),$=b?d:this.get(),w=is(u),x=na.num(w)||na.arr(w)||Do(w),S=!p&&(!x||Xo(o.immediate||t.immediate,a));if(f){const e=No(u);if(e!==v.constructor){if(!S)throw Error(`Cannot animate between ${v.constructor.name} and ${e.name}, as the "to" prop suggests`);v=this._set(w)}}const D=v.constructor;let _=eo(u),F=!1;if(!_){const e=b||!Ds(this)&&h;(f||e)&&(F=ra(is($),w),_=!F),(ra(s.immediate,S)||S)&&ra(g.decay,m)&&ra(g.velocity,y)||(_=!0)}if(F&&_s(this)&&(s.changed&&!b?_=!0:_||this._stop(l)),!p&&((_||eo(l))&&(s.values=v.getPayload(),s.toValues=eo(u)?null:D==Po?[1]:oa(w)),s.immediate!=S&&(s.immediate=S,S||b||this._set(l)),_)){const{onRest:e}=s;ia(Hs,(e=>Ts(this,t,e)));const r=ps(this,Ms(this,l));la(this._pendingCalls,r),this._pendingCalls.add(n),s.changed&&zi.batchedUpdates((()=>{s.changed=!b,null==e||e(r,this),b?Zo(o.onRest,r):null==s.onStart||s.onStart(r,this)}))}b&&this._set($),p?n(ms(t.to,t,this._state,this)):_?this._start():_s(this)&&!f?this._pendingCalls.add(n):n(fs($))}_focus(e){const t=this.animation;e!==t.to&&(no(this)&&this._detach(),t.to=e,no(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;eo(t)&&(oo(t,this),$s(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;eo(e)&&so(e,this)}_set(e,t=!0){const n=to(e);if(!na.und(n)){const e=Ao(this);if(!e||!ra(n,e.getValue())){const r=No(n);e&&e.constructor==r?e.setValue(n):Eo(this,r.create(n)),e&&zi.batchedUpdates((()=>{this._onChange(n,t)}))}}return Ao(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,Ps(this,"onStart",ps(this,Ms(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),Zo(this.animation.onChange,e,this)),Zo(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;Ao(this).reset(to(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),_s(this)||(Os(this,!0),Fs(this)||this._resume())}_resume(){ga.skipAnimation?this.finish():$a.start(this)}_stop(e,t){if(_s(this)){Os(this,!1);const n=this.animation;ia(n.values,(e=>{e.done=!0})),n.toValues&&(n.onChange=n.onPause=n.onResume=void 0),ro(this,{type:"idle",parent:this});const r=t?gs(this.get()):ps(this.get(),Ms(this,null!=e?e:n.to));la(this._pendingCalls,r),n.changed&&(n.changed=!1,Ps(this,"onRest",r,this))}}}function Ms(e,t){const n=is(t);return ra(is(e.get()),n)}function js(e,t=e.loop,n=e.to){let r=Zo(t);if(r){const i=!0!==r&&rs(r),a=(i||e).reverse,o=!i||i.reset;return As(Qo({},e,{loop:t,default:!1,pause:void 0,to:!a||as(n)?n:void 0,from:o?e.from:void 0,reset:o},i))}}function As(e){const{to:t,from:n}=e=rs(e),r=new Set;return na.obj(t)&&Cs(t,r),na.obj(n)&&Cs(n,r),e.keys=r.size?Array.from(r):null,e}function Es(e){const t=As(e);return na.und(t.default)&&(t.default=es(t)),t}function Cs(e,t){aa(e,((e,n)=>null!=e&&t.add(n)))}const Hs=["onStart","onRest","onChange","onPause","onResume"];function Ts(e,t,n){e.animation[n]=t[n]!==Jo(t,n)?Go(t[n],e.key):void 0}function Ps(e,t,...n){var r,i,a,o;null==(r=(i=e.animation)[t])||r.call(i,...n),null==(a=(o=e.defaultProps)[t])||a.call(o,...n)}const zs=["onStart","onChange","onRest"];let Is=1;class Rs{constructor(e,t){this.id=Is++,this.springs={},this.queue=[],this.ref=void 0,this._flush=void 0,this._initialProps=void 0,this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._item=void 0,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start(Qo({default:!0},e))}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,n)=>e[n]=t.get())),e}set(e){for(const t in e){const n=e[t];na.und(n)||this.springs[t].set(n)}}update(e){return e&&this.queue.push(As(e)),this}start(e){let{queue:t}=this;return e?t=oa(e).map(As):this.queue=[],this._flush?this._flush(this,t):(Us(this,t),Ls(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const n=this.springs;ia(oa(t),(t=>n[t].stop(!!e)))}else ys(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(na.und(e))this.start({pause:!0});else{const t=this.springs;ia(oa(e),(e=>t[e].pause()))}return this}resume(e){if(na.und(e))this.start({pause:!1});else{const t=this.springs;ia(oa(e),(e=>t[e].resume()))}return this}each(e){aa(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:n}=this._events,r=this._active.size>0,i=this._changed.size>0;(r&&!this._started||i&&!this._started)&&(this._started=!0,sa(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const a=!r&&this._started,o=i||a&&n.size?this.get():null;i&&t.size&&sa(t,(([e,t])=>{t.value=o,e(t,this,this._item)})),a&&(this._started=!1,sa(n,(([e,t])=>{t.value=o,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}zi.onFrame(this._onFrame)}}function Ls(e,t){return Promise.all(t.map((t=>Ns(e,t)))).then((t=>hs(e,t)))}async function Ns(e,t,n){const{keys:r,to:i,from:a,loop:o,onRest:s,onResolve:l}=t,c=na.obj(t.default)&&t.default;o&&(t.loop=!1),!1===i&&(t.to=null),!1===a&&(t.from=null);const u=na.arr(i)||na.fun(i)?i:void 0;u?(t.to=void 0,t.onRest=void 0,c&&(c.onRest=void 0)):ia(zs,(n=>{const r=t[n];if(na.fun(r)){const i=e._events[n];t[n]=({finished:e,cancelled:t})=>{const n=i.get(r);n?(e||(n.finished=!1),t&&(n.cancelled=!0)):i.set(r,{value:null,finished:e||!1,cancelled:t||!1})},c&&(c[n]=t[n])}}));const d=e._state;t.pause===!d.paused?(d.paused=t.pause,la(t.pause?d.pauseQueue:d.resumeQueue)):d.paused&&(t.pause=!0);const h=(r||Object.keys(e.springs)).map((n=>e.springs[n].start(t))),f=!0===t.cancel||!0===Jo(t,"cancel");(u||f&&d.asyncId)&&h.push(ds(++e._lastAsyncId,{props:t,state:d,actions:{pause:ta,resume:ta,start(t,n){f?(ys(d,e._lastAsyncId),n(gs(e))):(t.onRest=s,n(ms(u,t,d,e)))}}})),d.paused&&await new Promise((e=>{d.resumeQueue.add(e)}));const p=hs(e,await Promise.all(h));if(o&&p.finished&&(!n||!p.noop)){const n=js(t,o,i);if(n)return Us(e,[n]),Ns(e,n,!0)}return l&&zi.batchedUpdates((()=>l(p,e,e.item))),p}function Ys(e,t){const n=Qo({},e.springs);return t&&ia(oa(t),(e=>{na.und(e.keys)&&(e=As(e)),na.obj(e.to)||(e=Qo({},e,{to:void 0})),qs(n,e,(e=>Vs(e)))})),Ws(e,n),n}function Ws(e,t){aa(t,((t,n)=>{e.springs[n]||(e.springs[n]=t,oo(t,e))}))}function Vs(e,t){const n=new Bs;return n.key=e,t&&oo(n,t),n}function qs(e,t,n){t.keys&&ia(t.keys,(r=>{(e[r]||(e[r]=n(r)))._prepareNode(t)}))}function Us(e,t){ia(t,(t=>{qs(e.springs,t,(t=>Vs(t,e)))}))}const Qs=["children"],Zs=e=>{let{children:t}=e,n=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,Qs);const i=y(Xs),a=n.pause||!!i.pause,l=n.immediate||!!i.immediate;n=function(e,t){const[n]=s((()=>({inputs:t,result:e()}))),r=o(),i=r.current;let a=i;a?Boolean(t&&a.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}(t,a.inputs))||(a={inputs:t,result:e()}):a=n;return d((()=>{r.current=a,i==n&&(n.inputs=n.result=void 0)}),[a]),a.result}((()=>({pause:a,immediate:l})),[a,l]);const{Provider:c}=Xs;return r.createElement(c,{value:n},t)},Xs=(Gs=Zs,Js={},Object.assign(Gs,r.createContext(Js)),Gs.Provider._context=Gs,Gs.Consumer._context=Gs,Gs);var Gs,Js;Zs.Provider=Xs.Provider,Zs.Consumer=Xs.Consumer;const Ks=()=>{const e=[],t=function(t){So(`${$o}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const r=[];return ia(e,((e,i)=>{if(na.und(t))r.push(e.start());else{const a=n(t,e,i);a&&r.push(e.start(a))}})),r};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const n=e.indexOf(t);~n&&e.splice(n,1)},t.pause=function(){return ia(e,(e=>e.pause(...arguments))),this},t.resume=function(){return ia(e,(e=>e.resume(...arguments))),this},t.set=function(t){ia(e,(e=>e.set(t)))},t.start=function(t){const n=[];return ia(e,((e,r)=>{if(na.und(t))n.push(e.start());else{const i=this._getProps(t,e,r);i&&n.push(e.start(i))}})),n},t.stop=function(){return ia(e,(e=>e.stop(...arguments))),this},t.update=function(t){return ia(e,((e,n)=>e.update(this._getProps(t,e,n)))),this};const n=function(e,t,n){return na.fun(e)?e(n,t):e};return t._getProps=n,t};function el(e,t){const n=na.fun(e),[[r],i]=function(e,t,n){const r=na.fun(t)&&t;r&&!n&&(n=[]);const i=f((()=>r||3==arguments.length?Ks():void 0),[]),a=o(0),s=Oo(),l=f((()=>({ctrls:[],queue:[],flush(e,t){const n=Ys(e,t);return a.current>0&&!l.queue.length&&!Object.keys(n).some((t=>!e.springs[t]))?Ls(e,t):new Promise((r=>{Ws(e,n),l.queue.push((()=>{r(Ls(e,t))})),s()}))}})),[]),c=o([...l.ctrls]),u=[],d=Mo(e)||0;function h(e,n){for(let i=e;i<n;i++){const e=c.current[i]||(c.current[i]=new Rs(null,l.flush)),n=r?r(i,e):t[i];n&&(u[i]=Es(n))}}f((()=>{ia(c.current.slice(e,d),(e=>{!function(e,t){var n;null==(n=e.ref)||n.delete(e),null==t||t.delete(e)}(e,i),e.stop(!0)})),c.current.length=e,h(d,e)}),[e]),f((()=>{h(0,Math.min(d,e))}),n);const p=c.current.map(((e,t)=>Ys(e,u[t]))),g=y(Zs),m=Mo(g),v=g!==m&&function(e){for(const t in e)return!0;return!1}(g);_o((()=>{a.current++,l.ctrls=c.current;const{queue:e}=l;e.length&&(l.queue=[],ia(e,(e=>e()))),ia(c.current,((e,t)=>{null==i||i.add(e),v&&e.start({default:g});const n=u[t];n&&(function(e,t){var n;t&&e.ref!==t&&(null==(n=e.ref)||n.delete(e),t.add(e),e.ref=t)}(e,n.ref),e.ref?e.queue.push(n):e.start(n))}))})),ko((()=>()=>{ia(l.ctrls,(e=>e.stop(!0)))}));const b=p.map((e=>Qo({},e)));return i?[b,i]:b}(1,n?e:[e],n?t||[]:t);return n||2==arguments.length?[r,i]:r}let tl;!function(e){e.MOUNT="mount",e.ENTER="enter",e.UPDATE="update",e.LEAVE="leave"}(tl||(tl={}));class nl extends xs{constructor(e,t){super(),this.key=void 0,this.idle=!0,this.calc=void 0,this._active=new Set,this.source=e,this.calc=Ya(...t);const n=this._get(),r=No(n);Eo(this,r.create(n))}advance(e){const t=this._get();ra(t,this.get())||(Ao(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&il(this._active)&&al(this)}_get(){const e=na.arr(this.source)?this.source.map(to):oa(to(this.source));return this.calc(...e)}_start(){this.idle&&!il(this._active)&&(this.idle=!1,ia(Co(this),(e=>{e.done=!1})),ga.skipAnimation?(zi.batchedUpdates((()=>this.advance())),al(this)):$a.start(this))}_attach(){let e=1;ia(oa(this.source),(t=>{eo(t)&&oo(t,this),$s(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){ia(oa(this.source),(e=>{eo(e)&&so(e,this)})),this._active.clear(),al(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=oa(this.source).reduce(((e,t)=>Math.max(e,($s(t)?t.priority:0)+1)),0))}}function rl(e){return!1!==e.idle}function il(e){return!e.size||Array.from(e).every(rl)}function al(e){e.idle||(e.idle=!0,ia(Co(e),(e=>{e.done=!0})),ro(e,{type:"idle",parent:e}))}function ol(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}ga.assign({createStringInterpolator:bo,to:(e,t)=>new nl(e,t)});const sl=["style","children","scrollTop","scrollLeft","viewBox"],ll=/^--/;function cl(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||ll.test(e)||dl.hasOwnProperty(e)&&dl[e]?(""+t).trim():t+"px"}const ul={};let dl={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0};const hl=["Webkit","Ms","Moz","O"];dl=Object.keys(dl).reduce(((e,t)=>(hl.forEach((n=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(n,t)]=e[t])),e)),dl);const fl=["x","y","z"],pl=/^(matrix|translate|scale|rotate|skew)/,gl=/^(translate)/,ml=/^(rotate|skew)/,yl=(e,t)=>na.num(e)&&0!==e?e+t:e,vl=(e,t)=>na.arr(e)?e.every((e=>vl(e,t))):na.num(e)?e===t:parseFloat(e)===t;class bl extends Io{constructor(e){let{x:t,y:n,z:r}=e,i=ol(e,fl);const a=[],o=[];(t||n||r)&&(a.push([t||0,n||0,r||0]),o.push((e=>[`translate3d(${e.map((e=>yl(e,"px"))).join(",")})`,vl(e,0)]))),aa(i,((e,t)=>{if("transform"===t)a.push([e||""]),o.push((e=>[e,""===e]));else if(pl.test(t)){if(delete i[t],na.und(e))return;const n=gl.test(t)?"px":ml.test(t)?"deg":"";a.push(oa(e)),o.push("rotate3d"===t?([e,t,r,i])=>[`rotate3d(${e},${t},${r},${yl(i,n)})`,vl(i,0)]:e=>[`${t}(${e.map((e=>yl(e,n))).join(",")})`,vl(e,t.startsWith("scale")?1:0)])}})),a.length&&(i.transform=new $l(a,o)),super(i)}}class $l extends io{constructor(e,t){super(),this._value=null,this.inputs=e,this.transforms=t}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return ia(this.inputs,((n,r)=>{const i=to(n[0]),[a,o]=this.transforms[r](na.arr(i)?i:n.map(to));e+=" "+a,t=t&&o})),t?"none":e}observerAdded(e){1==e&&ia(this.inputs,(e=>ia(e,(e=>eo(e)&&oo(e,this)))))}observerRemoved(e){0==e&&ia(this.inputs,(e=>ia(e,(e=>eo(e)&&so(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),ro(this,e)}}const wl=["scrollTop","scrollLeft"];ga.assign({batchedUpdates:O,createStringInterpolator:bo,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});const xl=((e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:n=(e=>new Io(e)),getComponentProps:r=(e=>e)}={})=>{const i={applyAnimatedValues:t,createAnimatedStyle:n,getComponentProps:r},a=e=>{const t=Uo(e)||"Anonymous";return(e=na.str(e)?a[e]||(a[e]=Wo(e,i)):e[qo]||(e[qo]=Wo(e,i))).displayName=`Animated(${t})`,e};return aa(e,((t,n)=>{na.arr(e)&&(n=Uo(t)),a[n]=a(t)})),{animated:a}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const n="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,r=t,{style:i,children:a,scrollTop:o,scrollLeft:s,viewBox:l}=r,c=ol(r,sl),u=Object.values(c),d=Object.keys(c).map((t=>n||e.hasAttribute(t)?t:ul[t]||(ul[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==a&&(e.textContent=a);for(let t in i)if(i.hasOwnProperty(t)){const n=cl(t,i[t]);ll.test(t)?e.style.setProperty(t,n):e.style[t]=n}d.forEach(((t,n)=>{e.setAttribute(t,u[n])})),void 0!==o&&(e.scrollTop=o),void 0!==s&&(e.scrollLeft=s),void 0!==l&&e.setAttribute("viewBox",l)},createAnimatedStyle:e=>new bl(e),getComponentProps:e=>ol(e,wl)}),Sl=xl.animated,Dl=w.div`
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    user-select: none;
    margin-bottom: 0.5rem;
    flex: 1;
`,_l=w(Tr.XSmall)`
    ${e=>e.$disabled&&S`
            color: ${gr.Neutral[4]};
        `}
`,Fl=w.div`
    grid-column: 2 / -1;
    display: flex;
`,Ol=w.div`
    width: 100%;
    display: grid;
    grid-template-columns: auto repeat(7, 1fr);
    column-gap: 0.25rem;
`,kl=w(Sl.div)`
    grid-column: 2 / -1;
    overflow: hidden;
`,Bl=w.div`
    display: flex;
    gap: 0.25rem;
    transition: ${Ei};
    overflow: hidden;
`,Ml=w.div`
    display: flex;
    flex-direction: column;
    grid-row: 3 / auto;
    gap: 0.25rem;
    width: 1.375rem;
    transition: ${Ei};
    overflow: hidden;

    ${e=>e.$height&&`height: ${e.$height}px;`}
`,jl=w.div`
    min-height: 3.75rem;
    :last-child {
        min-height: 0;
    }
`,Al=w.div`
    ${Er("Body",700)}
    color: ${gr.Neutral[3]};
    font-size: 0.625rem !important;
    line-height: 0.75rem !important;
    text-align: center;
    :first-line {
        font-size: 0.875rem !important;
    }
`,El=w.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 0.25rem;
`,Cl=w.div`
    grid-row: 4;
    grid-column: 1 / -1;
    display: flex;
    margin-top: 0.5rem;
`,Hl=w(qr.Small)`
    width: 100%;
    height: 2.5rem;
    span {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
`,Tl=w(_)`
    transform: rotate(${e=>e.$isExpanded?0:180}deg);
    transition: transform 300ms ease-in-out;
`,Pl=w(Ti)`
    ${e=>{if("vertical"===e.$type)return S`
                max-width: 200px;
                height: ${e.$height}px;
                min-height: ${e.$height}px;
                margin: 0;
                border-radius: 0.125rem;
            `}}

    ${e=>e.$halfFill?S`
                background: linear-gradient(
                        to ${e.$halfFill},
                        ${"stripes"===e.$styleType?"transparent":e.$bgColor}
                            50%,
                        ${gr.Neutral[5]} 0%
                    )
                    ${"stripes"===e.$styleType&&`, repeating-linear-gradient(\n                            135deg,\n                            ${e.$bgColor2||gr.Neutral[5]} 0px,\n                            ${e.$bgColor2||gr.Neutral[5]} 10px,\n                            ${e.$bgColor} 10px,\n                            ${e.$bgColor} 20px\n                        )`};
            `:S`
                background-color: ${e.$bgColor};
            `}
`;var zl=Object.prototype;var Il=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||zl)};var Rl=function(e,t){return function(n){return e(t(n))}}(Object.keys,Object),Ll=Il,Nl=Rl,Yl=Object.prototype.hasOwnProperty;var Wl=function(e){if(!Ll(e))return Nl(e);var t=[];for(var n in Object(e))Yl.call(e,n)&&"constructor"!=n&&t.push(n);return t},Vl=Lt(Ge,"DataView"),ql=xn,Ul=Lt(Ge,"Promise"),Ql=Lt(Ge,"Set"),Zl=Lt(Ge,"WeakMap"),Xl=ct,Gl=kt,Jl="[object Map]",Kl="[object Promise]",ec="[object Set]",tc="[object WeakMap]",nc="[object DataView]",rc=Gl(Vl),ic=Gl(ql),ac=Gl(Ul),oc=Gl(Ql),sc=Gl(Zl),lc=Xl;(Vl&&lc(new Vl(new ArrayBuffer(1)))!=nc||ql&&lc(new ql)!=Jl||Ul&&lc(Ul.resolve())!=Kl||Ql&&lc(new Ql)!=ec||Zl&&lc(new Zl)!=tc)&&(lc=function(e){var t=Xl(e),n="[object Object]"==t?e.constructor:void 0,r=n?Gl(n):"";if(r)switch(r){case rc:return nc;case ic:return Jl;case ac:return Kl;case oc:return ec;case sc:return tc}return t});var cc=lc,uc=ct,dc=ut;var hc=function(e){return dc(e)&&"[object Arguments]"==uc(e)},fc=ut,pc=Object.prototype,gc=pc.hasOwnProperty,mc=pc.propertyIsEnumerable,yc=hc(function(){return arguments}())?hc:function(e){return fc(e)&&gc.call(e,"callee")&&!mc.call(e,"callee")};var vc=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},bc=St,$c=vc;var wc=function(e){return null!=e&&$c(e.length)&&!bc(e)},xc={exports:{}};var Sc=function(){return!1};!function(e,t){var n=Ge,r=Sc,i=t&&!t.nodeType&&t,a=i&&e&&!e.nodeType&&e,o=a&&a.exports===i?n.Buffer:void 0,s=(o?o.isBuffer:void 0)||r;e.exports=s}(xc,xc.exports);var Dc=ct,_c=vc,Fc=ut,Oc={};Oc["[object Float32Array]"]=Oc["[object Float64Array]"]=Oc["[object Int8Array]"]=Oc["[object Int16Array]"]=Oc["[object Int32Array]"]=Oc["[object Uint8Array]"]=Oc["[object Uint8ClampedArray]"]=Oc["[object Uint16Array]"]=Oc["[object Uint32Array]"]=!0,Oc["[object Arguments]"]=Oc["[object Array]"]=Oc["[object ArrayBuffer]"]=Oc["[object Boolean]"]=Oc["[object DataView]"]=Oc["[object Date]"]=Oc["[object Error]"]=Oc["[object Function]"]=Oc["[object Map]"]=Oc["[object Number]"]=Oc["[object Object]"]=Oc["[object RegExp]"]=Oc["[object Set]"]=Oc["[object String]"]=Oc["[object WeakMap]"]=!1;var kc=function(e){return Fc(e)&&_c(e.length)&&!!Oc[Dc(e)]};var Bc=function(e){return function(t){return e(t)}},Mc={exports:{}};!function(e,t){var n=Qe,r=t&&!t.nodeType&&t,i=r&&e&&!e.nodeType&&e,a=i&&i.exports===r&&n.process,o=function(){try{var e=i&&i.require&&i.require("util").types;return e||a&&a.binding&&a.binding("util")}catch(e){}}();e.exports=o}(Mc,Mc.exports);var jc=kc,Ac=Bc,Ec=Mc.exports,Cc=Ec&&Ec.isTypedArray,Hc=Cc?Ac(Cc):jc,Tc=Wl,Pc=cc,zc=yc,Ic=Ue,Rc=wc,Lc=xc.exports,Nc=Il,Yc=Hc,Wc=Object.prototype.hasOwnProperty;var Vc=function(e){if(null==e)return!0;if(Rc(e)&&(Ic(e)||"string"==typeof e||"function"==typeof e.splice||Lc(e)||Yc(e)||zc(e)))return!e.length;var t=Pc(e);if("[object Map]"==t||"[object Set]"==t)return!e.size;if(Nc(e))return!Tc(e).length;for(var n in e)if(Wc.call(e,n))return!1;return!0},qc=ft;var Uc=function(e,t,n){for(var r=-1,i=e.length;++r<i;){var a=e[r],o=t(a);if(null!=o&&(void 0===s?o==o&&!qc(o):n(o,s)))var s=o,l=a}return l},Qc=wn;var Zc=wn,Xc=xn,Gc=zn;var Jc=wn,Kc=function(){this.__data__=new Qc,this.size=0},eu=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n},tu=function(e){return this.__data__.get(e)},nu=function(e){return this.__data__.has(e)},ru=function(e,t){var n=this.__data__;if(n instanceof Zc){var r=n.__data__;if(!Xc||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new Gc(r)}return n.set(e,t),this.size=n.size,this};function iu(e){var t=this.__data__=new Jc(e);this.size=t.size}iu.prototype.clear=Kc,iu.prototype.delete=eu,iu.prototype.get=tu,iu.prototype.has=nu,iu.prototype.set=ru;var au=iu;var ou=zn,su=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},lu=function(e){return this.__data__.has(e)};function cu(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new ou;++t<n;)this.add(e[t])}cu.prototype.add=cu.prototype.push=su,cu.prototype.has=lu;var uu=cu,du=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1},hu=function(e,t){return e.has(t)};var fu=function(e,t,n,r,i,a){var o=1&n,s=e.length,l=t.length;if(s!=l&&!(o&&l>s))return!1;var c=a.get(e),u=a.get(t);if(c&&u)return c==t&&u==e;var d=-1,h=!0,f=2&n?new uu:void 0;for(a.set(e,t),a.set(t,e);++d<s;){var p=e[d],g=t[d];if(r)var m=o?r(g,p,d,t,e,a):r(p,g,d,e,t,a);if(void 0!==m){if(m)continue;h=!1;break}if(f){if(!du(t,(function(e,t){if(!hu(f,t)&&(p===e||i(p,e,n,r,a)))return f.push(t)}))){h=!1;break}}else if(p!==g&&!i(p,g,n,r,a)){h=!1;break}}return a.delete(e),a.delete(t),h};var pu=Ge.Uint8Array,gu=sn,mu=fu,yu=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r){n[++t]=[r,e]})),n},vu=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n},bu=Je?Je.prototype:void 0,$u=bu?bu.valueOf:void 0;var wu=function(e,t,n,r,i,a,o){switch(n){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!a(new pu(e),new pu(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return gu(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var s=yu;case"[object Set]":var l=1&r;if(s||(s=vu),e.size!=t.size&&!l)return!1;var c=o.get(e);if(c)return c==t;r|=2,o.set(e,t);var u=mu(s(e),s(t),r,i,a,o);return o.delete(e),u;case"[object Symbol]":if($u)return $u.call(e)==$u.call(t)}return!1};var xu=function(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e},Su=Ue;var Du=function(e,t,n){var r=t(e);return Su(e)?r:xu(r,n(e))};var _u=function(e,t){for(var n=-1,r=null==e?0:e.length,i=0,a=[];++n<r;){var o=e[n];t(o,n,e)&&(a[i++]=o)}return a},Fu=function(){return[]},Ou=Object.prototype.propertyIsEnumerable,ku=Object.getOwnPropertySymbols,Bu=ku?function(e){return null==e?[]:(e=Object(e),_u(ku(e),(function(t){return Ou.call(e,t)})))}:Fu;var Mu=/^(?:0|[1-9]\d*)$/;var ju=function(e,t){var n=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==n||"symbol"!=n&&Mu.test(e))&&e>-1&&e%1==0&&e<t},Au=function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r},Eu=yc,Cu=Ue,Hu=xc.exports,Tu=ju,Pu=Hc,zu=Object.prototype.hasOwnProperty;var Iu=function(e,t){var n=Cu(e),r=!n&&Eu(e),i=!n&&!r&&Hu(e),a=!n&&!r&&!i&&Pu(e),o=n||r||i||a,s=o?Au(e.length,String):[],l=s.length;for(var c in e)!t&&!zu.call(e,c)||o&&("length"==c||i&&("offset"==c||"parent"==c)||a&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||Tu(c,l))||s.push(c);return s},Ru=Wl,Lu=wc;var Nu=function(e){return Lu(e)?Iu(e):Ru(e)},Yu=Du,Wu=Bu,Vu=Nu;var qu=function(e){return Yu(e,Vu,Wu)},Uu=Object.prototype.hasOwnProperty;var Qu=au,Zu=fu,Xu=wu,Gu=function(e,t,n,r,i,a){var o=1&n,s=qu(e),l=s.length;if(l!=qu(t).length&&!o)return!1;for(var c=l;c--;){var u=s[c];if(!(o?u in t:Uu.call(t,u)))return!1}var d=a.get(e),h=a.get(t);if(d&&h)return d==t&&h==e;var f=!0;a.set(e,t),a.set(t,e);for(var p=o;++c<l;){var g=e[u=s[c]],m=t[u];if(r)var y=o?r(m,g,u,t,e,a):r(g,m,u,e,t,a);if(!(void 0===y?g===m||i(g,m,n,r,a):y)){f=!1;break}p||(p="constructor"==u)}if(f&&!p){var v=e.constructor,b=t.constructor;v==b||!("constructor"in e)||!("constructor"in t)||"function"==typeof v&&v instanceof v&&"function"==typeof b&&b instanceof b||(f=!1)}return a.delete(e),a.delete(t),f},Ju=cc,Ku=Ue,ed=xc.exports,td=Hc,nd="[object Arguments]",rd="[object Array]",id="[object Object]",ad=Object.prototype.hasOwnProperty;var od=function(e,t,n,r,i,a){var o=Ku(e),s=Ku(t),l=o?rd:Ju(e),c=s?rd:Ju(t),u=(l=l==nd?id:l)==id,d=(c=c==nd?id:c)==id,h=l==c;if(h&&ed(e)){if(!ed(t))return!1;o=!0,u=!1}if(h&&!u)return a||(a=new Qu),o||td(e)?Zu(e,t,n,r,i,a):Xu(e,t,l,n,r,i,a);if(!(1&n)){var f=u&&ad.call(e,"__wrapped__"),p=d&&ad.call(t,"__wrapped__");if(f||p){var g=f?e.value():e,m=p?t.value():t;return a||(a=new Qu),i(g,m,n,r,a)}}return!!h&&(a||(a=new Qu),Gu(e,t,n,r,i,a))},sd=ut;var ld=function e(t,n,r,i,a){return t===n||(null==t||null==n||!sd(t)&&!sd(n)?t!=t&&n!=n:od(t,n,r,i,e,a))},cd=au,ud=ld;var dd=bt;var hd=function(e){return e==e&&!dd(e)},fd=hd,pd=Nu;var gd=function(e,t){return function(n){return null!=n&&(n[e]===t&&(void 0!==t||e in Object(n)))}},md=function(e,t,n,r){var i=n.length,a=i,o=!r;if(null==e)return!a;for(e=Object(e);i--;){var s=n[i];if(o&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++i<a;){var l=(s=n[i])[0],c=e[l],u=s[1];if(o&&s[2]){if(void 0===c&&!(l in e))return!1}else{var d=new cd;if(r)var h=r(c,u,l,e,t,d);if(!(void 0===h?ud(u,c,3,r,d):h))return!1}}return!0},yd=function(e){for(var t=pd(e),n=t.length;n--;){var r=t[n],i=e[r];t[n]=[r,i,fd(i)]}return t},vd=gd;var bd=nr,$d=yc,wd=Ue,xd=ju,Sd=vc,Dd=ir;var _d=function(e,t){return null!=e&&t in Object(e)},Fd=function(e,t,n){for(var r=-1,i=(t=bd(t,e)).length,a=!1;++r<i;){var o=Dd(t[r]);if(!(a=null!=e&&n(e,o)))break;e=e[o]}return a||++r!=i?a:!!(i=null==e?0:e.length)&&Sd(i)&&xd(o,i)&&(wd(e)||$d(e))};var Od=ld,kd=cr,Bd=function(e,t){return null!=e&&Fd(e,t,_d)},Md=vt,jd=hd,Ad=gd,Ed=ir;var Cd=sr;var Hd=function(e){return function(t){return null==t?void 0:t[e]}},Td=function(e){return function(t){return Cd(t,e)}},Pd=vt,zd=ir;var Id=function(e){var t=yd(e);return 1==t.length&&t[0][2]?vd(t[0][0],t[0][1]):function(n){return n===e||md(n,e,t)}},Rd=function(e,t){return Md(e)&&jd(t)?Ad(Ed(e),t):function(n){var r=kd(n,e);return void 0===r&&r===t?Bd(n,e):Od(t,r,3)}},Ld=function(e){return e},Nd=Ue,Yd=function(e){return Pd(e)?Hd(zd(e)):Td(e)};var Wd=function(e){return"function"==typeof e?e:null==e?Ld:"object"==typeof e?Nd(e)?Rd(e[0],e[1]):Id(e):Yd(e)};var Vd=Uc,qd=Wd,Ud=function(e,t){return e<t};var Qd=function(e,t){return e&&e.length?Vd(e,qd(t),Ud):void 0};var Zd=Uc,Xd=function(e,t){return e>t},Gd=Wd;var Jd=function(e,t){return e&&e.length?Zd(e,Gd(t),Xd):void 0};const Kd=({calendarDate:n,disabledDates:r,selectedDate:i,onSelect:a,minDate:l,maxDate:c,startTime:u,endTime:d,maxVisibleCellHeight:h,slots:p,interval:g=30,variant:m="flexible",enableSelection:y=!0,onSlotClick:v})=>{var b,$,w,x;const S="YYYY-MM-DD",[D,_]=s(!1),[F,O]=s(),k=f((()=>Y.generateDaysForCurrentWeek(n)),[n]),B=Object.values(null!=p?p:{}).flat(),M=null!==($=null!=u?u:null===(b=Qd(B,"startTime"))||void 0===b?void 0:b.startTime)&&void 0!==$?$:"00:00",A=null!==(x=null!=d?d:null===(w=Jd(B,"endTime"))||void 0===w?void 0:w.endTime)&&void 0!==x?x:"24:00",E=Math.ceil(Z.getTimeDiffInMinutes(M,A)/g),{height:C,ref:H}=function(e){void 0===e&&(e={});var t=e.skipOnMount,n=void 0!==t&&t,r=e.refreshMode,i=e.refreshRate,a=void 0===i?1e3:i,l=e.refreshOptions,c=e.handleWidth,u=void 0===c||c,d=e.handleHeight,h=void 0===d||d,f=e.targetRef,p=e.observerOptions,g=e.onResize,m=o(n),y=o(null),v=null!=f?f:y,b=o(),$=s({width:void 0,height:void 0}),w=$[0],x=$[1];return qe((function(){if(!Ye()){var e=Ve(g,x,u,h);b.current=Le((function(t){(u||h)&&t.forEach((function(t){var n=t&&t.contentRect||{},r=n.width,i=n.height;!m.current&&!Ye()&&e({width:r,height:i}),m.current=!1}))}),r,a,l);var t=new window.ResizeObserver(b.current);return v.current&&t.observe(v.current,p),function(){t.disconnect();var e=b.current;e&&e.cancel&&e.cancel()}}}),[r,a,l,u,h,g,p,v.current]),ee({ref:v},w)}(),T=h?D?C:h:C,P=el({height:T}),z=f((()=>{if(p){const e={};return Object.entries(p).forEach((([t,n])=>{const r=function(e){const t=Array(E).fill({});return e.forEach((e=>{const n=Math.max(0,Z.getTimeDiffInMinutes(M,e.startTime)/g),r=Math.min(E,Z.getTimeDiffInMinutes(M,e.endTime)/g),i=Math.ceil(r)-Math.floor(n);switch(m){case"fixed":t[Math.floor(n)]=Object.assign(Object.assign({},e),{cellLength:r-n});break;case"flexible":for(let a=0;a<i;a++){const o=Z.addMinutesToTime(M,Math.floor(n+a)*g),s=Z.addMinutesToTime(o,g);let l;Vc(t[Math.floor(n+a)])?0===a&&n%1!=0?l="top":a===i-1&&r%1!=0&&(l="bottom"):l=void 0,t[Math.floor(n+a)]=Object.assign(Object.assign({},e),{id:`${e.id}-${a}`,startTime:o,endTime:s,cellLength:1,halfFill:l})}}})),t}(n);e[t]=function(e){var t,n,r,i;let a=0;switch(m){case"fixed":for(e=e.reduce(((e,t)=>{const n=e.length>0?e[e.length-1]:e[0];return Vc(t)&&Vc(n)?e:[...e,t]}),[{}]);a<e.length;){if(Vc(e[a])){const o=null!==(n=null===(t=e[a-1])||void 0===t?void 0:t.endTime)&&void 0!==n?n:M,s=null!==(i=null===(r=e[a+1])||void 0===r?void 0:r.startTime)&&void 0!==i?i:A;if(o!==s){const t=Z.getTimeDiffInMinutes(o,s)/g;e[a]=Object.assign(Object.assign({},W(a)),{startTime:o,endTime:s,cellLength:t})}}a++}break;case"flexible":for(;a<e.length;)Vc(e[a])?(e[a]=W(a),a++):a+=e[a].cellLength}return e.filter((e=>!Vc(e)))}(r)})),e}return{}}),[p]),I=e=>{O(e)},R=()=>{O(void 0)},L=e=>{e.preventDefault(),_((e=>!e))},N=e=>{var t;const n=Y.isWithinRange(e,l?j(l):void 0,c?j(c):void 0),i=null!==(t=r&&r.includes(e.format(S)))&&void 0!==t&&t;return!n||i};function W(e,t=1){return{id:`${e.toString()}-${(new Date).getTime()}`,startTime:"",endTime:"",clickable:!1,styleAttributes:{backgroundColor:"#E0E4E5"},cellLength:t}}return e(Ol,{children:[t(Fl,{children:k.map(((e,n)=>{const r=(e=>{const t=e.format(S),n=N(e),r={},a=y&&!n;return n&&(r.disabled=!0),r.interactive=y?a:null,a&&F&&e.isSame(F,"day")&&(r.circleLeft="hover-current",r.circleRight="hover-current",r.circleShadow=!0),[i].includes(t)&&(r.labelType="selected",r.circleLeft="selected-outline",r.circleRight="selected-outline"),r})(e);return t(Ai,Object.assign({date:e,calendarDate:j(i),onSelect:()=>{((e,t)=>{!t&&y&&a(e)})(e,!r.interactive)},onHover:I,onHoverEnd:R},r),`day-${n}`)}))}),t(Fl,{children:k.map(((e,n)=>t(Dl,{children:t(_l,Object.assign({weight:"semibold",$disabled:N(e)},{children:j(e).format("ddd")}))},`week-day-${n}`)))}),(()=>{let e=!1;const n=t=>{const n=j(M,"HH:mm").add(4*t*g,"minutes"),r=n.format("h"),i=n.format("mm"),a=n.format("a");let o=`${r}${"00"!==i?` ${i}`:""}`;return e||"pm"!==a||"00"!==i||(o+=` ${a}`,e=!0),o};return t(Ml,Object.assign({$height:T},{children:Array(Math.ceil(E/4)).fill(void 0).map(((e,r)=>t(jl,{children:t(Al,{children:n(r)})},`time-${r}`)))}))})(),t(kl,Object.assign({style:P},{children:t(Bl,Object.assign({ref:H},{children:k.map(((e,n)=>{var r;const i=e.format(S),a=null!==(r=z[i])&&void 0!==r?r:Array("flexible"===m?E:1).fill(void 0).map(((e,t)=>W(t,"fixed"===m?E:void 0)));return t(El,{children:a.map((e=>{const{id:n,clickable:r=!0,styleAttributes:a,cellLength:o,halfFill:s}=e,{styleType:l="default",backgroundColor:c,backgroundColor2:u}=a;return t(Pl,{$type:"vertical",$variant:"default",$styleType:l,$bgColor:c,$bgColor2:u,$halfFill:s,$clickable:r,$height:"fixed"===m?12*o+4*(o-1):12,onClick:()=>r&&((e,t)=>{v&&v(e,t)})(i,e)},n)}))},`wrapper-${n}`)}))}),`week-cell-${n.format(S)}`)})),(()=>{if(h&&H.current&&!(C&&C<h))return t(Cl,{children:e(Hl,Object.assign({"data-testid":"time-bar-expand-collapse-button",styleType:"light",onClick:L},{children:[t(Tl,{$isExpanded:D}),(D?"Hide":"Show")+" later times"]}))})})()]})},eh=w.div`
    min-width: 18.5rem;

    [data-id="calendar-header"] {
        ${vr.mobileL} {
            padding: 0 1.25rem;
        }
    }
`,th="YYYY-MM-DD",nh=e=>{var{disabledDates:n,onWeekDisplayChange:r,onChange:i,value:a,minDate:l,maxDate:c,startTime:u,endTime:h,slots:f,interval:p,variant:g,maxVisibleCellHeight:m,showNavigationHeader:y=!0,enableSelection:v,onSlotClick:b,currentCalendarDate:$}=e,w=k(e,["disabledDates","onWeekDisplayChange","onChange","value","minDate","maxDate","startTime","endTime","slots","interval","variant","maxVisibleCellHeight","showNavigationHeader","enableSelection","onSlotClick","currentCalendarDate"]);const[x,S]=s(a),D=o(),_=o(void 0);d((()=>{S(a)}),[a]);const F=e=>{const t=e.format(th);S(t),i&&i(t)},O=(e,t)=>{b&&b(e,t)},B=e=>{if(r){const t={week:{firstDayOfWeek:e.startOf("week").format(th),lastDayOfWeek:e.endOf("week").format(th)},month:e.month()+1,year:e.year()};r(t)}};return t(eh,Object.assign({},w,{children:t(bi,Object.assign({ref:D,type:"standalone",dynamicHeight:!0,initialCalendarDate:Z.toDayjs(x||$).endOf("week").format(th),selectedStartDate:x,getLeftArrowDate:e=>e.subtract(1,"week"),getRightArrowDate:e=>e.add(1,"week"),isLeftArrowDisabled:e=>l&&j(e).subtract(1,"week").isBefore(l,"week"),isRightArrowDisabled:e=>c&&j(e).add(1,"week").isAfter(c,"week"),onCalendarDateChange:e=>{_.current&&_.current.isSame(e,"week")||B(e),_.current=e},showNavigationHeader:y,minDate:l,maxDate:c,getMonthHeaderLabel:e=>j(e).endOf("week").format("MMM"),getYearHeaderLabel:e=>j(e).endOf("week").format("YYYY")},{children:({calendarDate:e})=>(e=>t(Kd,{calendarDate:e,disabledDates:n,selectedDate:x,minDate:l,maxDate:c,startTime:u,endTime:h,onSelect:F,slots:f,interval:p,variant:g,maxVisibleCellHeight:m,enableSelection:v,onSlotClick:O}))(e)}))}))};export{nh as TimeSlotBarWeek};
//# sourceMappingURL=index.js.map
