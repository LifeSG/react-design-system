import{jsx as t,jsxs as e}from"react/jsx-runtime";import{CrossIcon as n}from"@lifesg/react-icons/cross";import r,{useEffect as i,useState as a,useRef as o}from"react";import{useFloatingTree as s,FloatingTree as l,useFloatingNodeId as c,FloatingNode as u}from"@floating-ui/react";import d from"react-dom";import f,{css as h}from"styled-components";import{ExternalIcon as g}from"@lifesg/react-icons/external";function m(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}"function"==typeof SuppressedError&&SuppressedError;var p="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function y(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var F={exports:{}};F.exports=function(){var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",a="minute",o="hour",s="day",l="week",c="month",u="quarter",d="year",f="date",h="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},y=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},F={s:y,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+y(r,2,"0")+":"+y(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),a=n-i<0,o=e.clone().add(r+(a?-1:1),c);return+(-(r+(n-i)/(a?i-o:o-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:d,w:l,d:s,D:f,h:o,m:a,s:i,ms:r,Q:u}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},S="en",v={};v[S]=p;var D="$isDayjsObject",B=function(t){return t instanceof w||!(!t||!t[D])},$=function t(e,n,r){var i;if(!e)return S;if("string"==typeof e){var a=e.toLowerCase();v[a]&&(i=a),n&&(v[a]=n,i=a);var o=e.split("-");if(!i&&o.length>1)return t(o[0])}else{var s=e.name;v[s]=e,i=s}return!r&&i&&(S=i),i||!r&&S},b=function(t,e){if(B(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new w(n)},H=F;H.l=$,H.i=B,H.w=function(t,e){return b(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var w=function(){function p(t){this.$L=$(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[D]=!0}var y=p.prototype;return y.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(H.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(g);if(r){var i=r[2]-1||0,a=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)}}return new Date(e)}(t),this.init()},y.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},y.$utils=function(){return H},y.isValid=function(){return!(this.$d.toString()===h)},y.isSame=function(t,e){var n=b(t);return this.startOf(e)<=n&&n<=this.endOf(e)},y.isAfter=function(t,e){return b(t)<this.startOf(e)},y.isBefore=function(t,e){return this.endOf(e)<b(t)},y.$g=function(t,e,n){return H.u(t)?this[e]:this.set(n,t)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(t,e){var n=this,r=!!H.u(e)||e,u=H.p(t),h=function(t,e){var i=H.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(s)},g=function(t,e){return H.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},m=this.$W,p=this.$M,y=this.$D,F="set"+(this.$u?"UTC":"");switch(u){case d:return r?h(1,0):h(31,11);case c:return r?h(1,p):h(0,p+1);case l:var S=this.$locale().weekStart||0,v=(m<S?m+7:m)-S;return h(r?y-v:y+(6-v),p);case s:case f:return g(F+"Hours",0);case o:return g(F+"Minutes",1);case a:return g(F+"Seconds",2);case i:return g(F+"Milliseconds",3);default:return this.clone()}},y.endOf=function(t){return this.startOf(t,!1)},y.$set=function(t,e){var n,l=H.p(t),u="set"+(this.$u?"UTC":""),h=(n={},n[s]=u+"Date",n[f]=u+"Date",n[c]=u+"Month",n[d]=u+"FullYear",n[o]=u+"Hours",n[a]=u+"Minutes",n[i]=u+"Seconds",n[r]=u+"Milliseconds",n)[l],g=l===s?this.$D+(e-this.$W):e;if(l===c||l===d){var m=this.clone().set(f,1);m.$d[h](g),m.init(),this.$d=m.set(f,Math.min(this.$D,m.daysInMonth())).$d}else h&&this.$d[h](g);return this.init(),this},y.set=function(t,e){return this.clone().$set(t,e)},y.get=function(t){return this[H.p(t)]()},y.add=function(r,u){var f,h=this;r=Number(r);var g=H.p(u),m=function(t){var e=b(h);return H.w(e.date(e.date()+Math.round(t*r)),h)};if(g===c)return this.set(c,this.$M+r);if(g===d)return this.set(d,this.$y+r);if(g===s)return m(1);if(g===l)return m(7);var p=(f={},f[a]=e,f[o]=n,f[i]=t,f)[g]||1,y=this.$d.getTime()+r*p;return H.w(y,this)},y.subtract=function(t,e){return this.add(-1*t,e)},y.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=H.z(this),a=this.$H,o=this.$m,s=this.$M,l=n.weekdays,c=n.months,u=n.meridiem,d=function(t,n,i,a){return t&&(t[n]||t(e,r))||i[n].slice(0,a)},f=function(t){return H.s(a%12||12,t,"0")},g=u||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(m,(function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return H.s(e.$y,4,"0");case"M":return s+1;case"MM":return H.s(s+1,2,"0");case"MMM":return d(n.monthsShort,s,c,3);case"MMMM":return d(c,s);case"D":return e.$D;case"DD":return H.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return d(n.weekdaysMin,e.$W,l,2);case"ddd":return d(n.weekdaysShort,e.$W,l,3);case"dddd":return l[e.$W];case"H":return String(a);case"HH":return H.s(a,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return g(a,o,!0);case"A":return g(a,o,!1);case"m":return String(o);case"mm":return H.s(o,2,"0");case"s":return String(e.$s);case"ss":return H.s(e.$s,2,"0");case"SSS":return H.s(e.$ms,3,"0");case"Z":return i}return null}(t)||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,f,h){var g,m=this,p=H.p(f),y=b(r),F=(y.utcOffset()-this.utcOffset())*e,S=this-y,v=function(){return H.m(m,y)};switch(p){case d:g=v()/12;break;case c:g=v();break;case u:g=v()/3;break;case l:g=(S-F)/6048e5;break;case s:g=(S-F)/864e5;break;case o:g=S/n;break;case a:g=S/e;break;case i:g=S/t;break;default:g=S}return h?g:H.a(g)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return v[this.$L]},y.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=$(t,e,!0);return r&&(n.$L=r),n},y.clone=function(){return H.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},p}(),x=w.prototype;return b.prototype=x,[["$ms",r],["$s",i],["$m",a],["$H",o],["$W",s],["$M",c],["$y",d],["$D",f]].forEach((function(t){x[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),b.extend=function(t,e){return t.$i||(t(e,w,b),t.$i=!0),b},b.locale=$,b.isDayjs=B,b.unix=function(t){return b(1e3*t)},b.en=v[S],b.Ls=v,b.p={},b}();var S=y(F.exports),v={exports:{}};v.exports=function(){var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},e=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d/,r=/\d\d/,i=/\d\d?/,a=/\d*[^-_:/,()\s\d]+/,o={},s=function(t){return(t=+t)+(t>68?1900:2e3)},l=function(t){return function(e){this[t]=+e}},c=[/[+-]\d\d:?(\d\d)?|Z/,function(t){(this.zone||(this.zone={})).offset=function(t){if(!t)return 0;if("Z"===t)return 0;var e=t.match(/([+-]|\d\d)/g),n=60*e[1]+(+e[2]||0);return 0===n?0:"+"===e[0]?-n:n}(t)}],u=function(t){var e=o[t];return e&&(e.indexOf?e:e.s.concat(e.f))},d=function(t,e){var n,r=o.meridiem;if(r){for(var i=1;i<=24;i+=1)if(t.indexOf(r(i,0,e))>-1){n=i>12;break}}else n=t===(e?"pm":"PM");return n},f={A:[a,function(t){this.afternoon=d(t,!1)}],a:[a,function(t){this.afternoon=d(t,!0)}],Q:[n,function(t){this.month=3*(t-1)+1}],S:[n,function(t){this.milliseconds=100*+t}],SS:[r,function(t){this.milliseconds=10*+t}],SSS:[/\d{3}/,function(t){this.milliseconds=+t}],s:[i,l("seconds")],ss:[i,l("seconds")],m:[i,l("minutes")],mm:[i,l("minutes")],H:[i,l("hours")],h:[i,l("hours")],HH:[i,l("hours")],hh:[i,l("hours")],D:[i,l("day")],DD:[r,l("day")],Do:[a,function(t){var e=o.ordinal,n=t.match(/\d+/);if(this.day=n[0],e)for(var r=1;r<=31;r+=1)e(r).replace(/\[|\]/g,"")===t&&(this.day=r)}],w:[i,l("week")],ww:[r,l("week")],M:[i,l("month")],MM:[r,l("month")],MMM:[a,function(t){var e=u("months"),n=(u("monthsShort")||e.map((function(t){return t.slice(0,3)}))).indexOf(t)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[a,function(t){var e=u("months").indexOf(t)+1;if(e<1)throw new Error;this.month=e%12||e}],Y:[/[+-]?\d+/,l("year")],YY:[r,function(t){this.year=s(t)}],YYYY:[/\d{4}/,l("year")],Z:c,ZZ:c};function h(n){var r,i;r=n,i=o&&o.formats;for(var a=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(e,n,r){var a=r&&r.toUpperCase();return n||i[r]||t[r]||i[a].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(t,e,n){return e||n.slice(1)}))}))).match(e),s=a.length,l=0;l<s;l+=1){var c=a[l],u=f[c],d=u&&u[0],h=u&&u[1];a[l]=h?{regex:d,parser:h}:c.replace(/^\[|\]$/g,"")}return function(t){for(var e={},n=0,r=0;n<s;n+=1){var i=a[n];if("string"==typeof i)r+=i.length;else{var o=i.regex,l=i.parser,c=t.slice(r),u=o.exec(c)[0];l.call(e,u),t=t.replace(u,"")}}return function(t){var e=t.afternoon;if(void 0!==e){var n=t.hours;e?n<12&&(t.hours+=12):12===n&&(t.hours=0),delete t.afternoon}}(e),e}}return function(t,e,n){n.p.customParseFormat=!0,t&&t.parseTwoDigitYear&&(s=t.parseTwoDigitYear);var r=e.prototype,i=r.parse;r.parse=function(t){var e=t.date,r=t.utc,a=t.args;this.$u=r;var s=a[1];if("string"==typeof s){var l=!0===a[2],c=!0===a[3],u=l||c,d=a[2];c&&(d=a[2]),o=this.$locale(),!l&&d&&(o=n.Ls[d]),this.$d=function(t,e,n,r){try{if(["x","X"].indexOf(e)>-1)return new Date(("X"===e?1e3:1)*t);var i=h(e)(t),a=i.year,o=i.month,s=i.day,l=i.hours,c=i.minutes,u=i.seconds,d=i.milliseconds,f=i.zone,g=i.week,m=new Date,p=s||(a||o?1:m.getDate()),y=a||m.getFullYear(),F=0;a&&!o||(F=o>0?o-1:m.getMonth());var S,v=l||0,D=c||0,B=u||0,$=d||0;return f?new Date(Date.UTC(y,F,p,v,D,B,$+60*f.offset*1e3)):n?new Date(Date.UTC(y,F,p,v,D,B,$)):(S=new Date(y,F,p,v,D,B,$),g&&(S=r(S).week(g).toDate()),S)}catch(t){return new Date("")}}(e,s,r,n),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&e!=this.format(s)&&(this.$d=new Date("")),o={}}else if(s instanceof Array)for(var f=s.length,g=1;g<=f;g+=1){a[1]=s[g-1];var m=n.apply(this,a);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}g===f&&(this.$d=new Date(""))}else i.call(this,t)}}}();var D=y(v.exports),B={exports:{}};B.exports=function(t,e,n){e.prototype.isBetween=function(t,e,r,i){var a=n(t),o=n(e),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(a,r):!this.isBefore(a,r))&&(l?this.isBefore(o,r):!this.isAfter(o,r))||(s?this.isBefore(a,r):!this.isAfter(a,r))&&(l?this.isAfter(o,r):!this.isBefore(o,r))}};var $=y(B.exports),b={exports:{}};b.exports=function(t,e){e.prototype.isSameOrAfter=function(t,e){return this.isSame(t,e)||this.isAfter(t,e)}};var H=y(b.exports),w={exports:{}};w.exports=function(t,e){e.prototype.isSameOrBefore=function(t,e){return this.isSame(t,e)||this.isBefore(t,e)}};var x,O,E,k=y(w.exports),M={exports:{}},A=y(M.exports=(x={year:0,month:1,day:2,hour:3,minute:4,second:5},O={},function(t,e,n){var r,i=function(t,e,n){void 0===n&&(n={});var r=new Date(t),i=function(t,e){void 0===e&&(e={});var n=e.timeZoneName||"short",r=t+"|"+n,i=O[r];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:t,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),O[r]=i),i}(e,n);return i.formatToParts(r)},a=function(t,e){for(var r=i(t,e),a=[],o=0;o<r.length;o+=1){var s=r[o],l=s.type,c=s.value,u=x[l];u>=0&&(a[u]=parseInt(c,10))}var d=a[3],f=24===d?0:d,h=a[0]+"-"+a[1]+"-"+a[2]+" "+f+":"+a[4]+":"+a[5]+":000",g=+t;return(n.utc(h).valueOf()-(g-=g%1e3))/6e4},o=e.prototype;o.tz=function(t,e){void 0===t&&(t=r);var i,a=this.utcOffset(),o=this.toDate(),s=o.toLocaleString("en-US",{timeZone:t}),l=Math.round((o-new Date(s))/1e3/60),c=15*-Math.round(o.getTimezoneOffset()/15)-l;if(Number(c)){if(i=n(s,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(c,!0),e){var u=i.utcOffset();i=i.add(a-u,"minute")}}else i=this.utcOffset(0,e);return i.$x.$timezone=t,i},o.offsetName=function(t){var e=this.$x.$timezone||n.tz.guess(),r=i(this.valueOf(),e,{timeZoneName:t}).find((function(t){return"timezonename"===t.type.toLowerCase()}));return r&&r.value};var s=o.startOf;o.startOf=function(t,e){if(!this.$x||!this.$x.$timezone)return s.call(this,t,e);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(r,t,e).tz(this.$x.$timezone,!0)},n.tz=function(t,e,i){var o=i&&e,s=i||e||r,l=a(+n(),s);if("string"!=typeof t)return n(t).tz(s);var c=function(t,e,n){var r=t-60*e*1e3,i=a(r,n);if(e===i)return[r,e];var o=a(r-=60*(i-e)*1e3,n);return i===o?[r,i]:[t-60*Math.min(i,o)*1e3,Math.max(i,o)]}(n.utc(t,o).valueOf(),l,s),u=c[0],d=c[1],f=n(u).utcOffset(d);return f.$x.$timezone=s,f},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(t){r=t}}));S.extend($),S.extend(k),S.extend(H),S.extend(D),S.extend(A),function(t){t.generateDays=t=>{const e=t.startOf("month"),n=S(e).startOf("week");return z(n).map((t=>C(t)))},t.generateDaysForCurrentWeek=t=>{const e=t.startOf("week");return C(e)},t.generateMonths=t=>{const e=[];for(let n=0;n<12;n++){const r=t.month(n);e.push(S(r))}return e},t.generateDecadeOfYears=t=>{const e=t.year(),n=10*Math.floor(e/10),r=t.year(n),i=[r.subtract(1,"year"),r];for(let t=1;t<11;t++)i.push(r.add(t,"year"));return i},t.getStartEndDecade=t=>{const e=10*Math.floor(+t.format("YYYY")/10);return{beginDecade:e,endDecade:+S(`${e+9}-01-01`).format("YYYY")}},t.convertTo12HourFormat=t=>{const e=S(t,"HH:mm");return e.isValid()?e.format("h:mm a"):""},t.isWithinRange=(t,e,n,r="day")=>!e&&!n||(e&&n?t.isBetween(e,n,r,"[]"):e?t.isSameOrAfter(e,r):t.isSameOrBefore(n,r)),t.isPreviousMonthWithinRange=(e,n)=>t.isWithinRange(e.subtract(1,"month"),n,void 0,"month"),t.isPreviousYearWithinRange=(e,n)=>t.isWithinRange(e.subtract(1,"year"),n,void 0,"year"),t.isPreviousDecadeWithinRange=(e,n)=>{const{beginDecade:r}=t.getStartEndDecade(e);return t.isWithinRange(e.year(r).subtract(1,"year"),n,void 0,"year")},t.isNextMonthWithinRange=(e,n)=>t.isWithinRange(e.add(1,"month"),void 0,n,"month"),t.isNextYearWithinRange=(e,n)=>t.isWithinRange(e.add(1,"year"),void 0,n,"year"),t.isNextDecadeWithinRange=(e,n)=>{const{endDecade:r}=t.getStartEndDecade(e);return t.isWithinRange(e.year(r).add(1,"year"),void 0,n,"year")},t.getWeekStartEnd=t=>({start:t.startOf("week").format("YYYY-MM-DD"),end:t.endOf("week").format("YYYY-MM-DD")}),t.getFixedRangeStartEnd=(t,e)=>({start:t.format("YYYY-MM-DD"),end:t.add(e-1,"day").format("YYYY-MM-DD")}),t.isDisabledDay=(e,n,r,i)=>{const a=t.isWithinRange(e,r?S(r):void 0,i?S(i):void 0),o=n&&n.includes(e.format("YYYY-MM-DD"));return!a||!!o}}(E||(E={}));const z=t=>{const e=[t];for(let n=1;n<6;n++){const r=t.add(n,"week");e.push(r)}return e},C=t=>{const e=[];for(let n=0;n<7;n++){const r=t.add(n,"day");e.push(r)}return e},_=[1,3,5,7,8,10,12],W=[4,6,9,11];var T,Y,V,L;!function(t){t.clampDay=(e,n,r)=>{const i=parseInt(e),a=parseInt(n),o=parseInt(r);return 0==i?"1":_.includes(a)?Math.min(i,31).toString():W.includes(a)?Math.min(i,30).toString():2===a?t.isLeapYear(o)?Math.min(i,29).toString():Math.min(i,28).toString():e},t.clampMonth=t=>{const e=parseInt(t);return 0==e?"1":e>12?"12":t},t.isLeapYear=t=>t%4==0&&t%100!=0||t%400==0,t.getTimeDiffInMinutes=(t,e,n="HH:mm")=>{const r=S(t,n);return S(e,n).diff(r,"minute")},t.toDayjs=t=>t?S(t):S(),t.addMinutesToTime=(t,e,n="HH:mm")=>S(t,n).add(e,"minutes").format(n),t.isSame=(t,e,n="day")=>S(t).isSame(S(e),n)}(T||(T={})),function(t){t.isDateDisabled=(t,e)=>{const{disabledDates:n,minDate:r,maxDate:i}=e;return!!(n&&n.length&&n.includes(t))||(!(!r||!S(t).isBefore(r,"day"))||!(!i||!S(t).isAfter(i,"day")))},t.sanitizeInput=t=>{if(t){if(S(t).isValid())return t}return""}}(Y||(Y={})),function(t){t.generate=()=>Math.random().toString(36).substring(2,9)}(V||(V={})),function(t){t.transformWithSpaces=(t,e)=>{const n="(.{"+e+"})";return t.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},t.padValue=(t,e)=>{if("0"===t)return e?t:t.padStart(2,"0");if(""===t)return t;return parseInt(t).toString().padStart(2,"0")},t.shouldTruncateToTwoLines=(t,e)=>{const n=Math.floor(e/9);return t.length>=2*n||1===t.split(" ").length&&t.length>n},t.truncateOneLine=(t,e,n,r,i=8)=>{let a=0;e>n&&(a=Math.floor((e-n)/i));const o=r+a;if(o<t.length){const e=Math.floor(o/2);return t.substring(0,e)+" ... "+t.substring(t.length-e,t.length)}return t},t.truncateTwoLines=(t,e,n,r=1.2)=>{const i=Math.floor(2*e/(.6*n))*(2/r);if(t.length<=i)return t;const a=Math.floor(.6*i),o=Math.floor(.2*i);return`${t.substring(0,a)}...${t.substring(t.length-o)}`},t.getTextWidth=(e,n)=>{if("undefined"==typeof document)return 0;const r=(t.getTextWidth.canvas||(t.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(e).width},t.maskValue=(t,n)=>{if(!t)return t;const{maskRange:r,unmaskRange:i,maskChar:a="•",maskRegex:o,maskTransformer:s}=n;if(s)return s(t);if(o)return t.replace(o,a);if(r){const{startIndex:n,endIndex:i}=e(r[0],r[1]);return t.substring(0,n)+a.repeat(t.substring(n,i+1).length)+t.substring(i+1)}if(i){const{startIndex:n,endIndex:r}=e(i[0],i[1]);return a.repeat(t.substring(0,n).length)+t.substring(n,r+1)+a.repeat(t.substring(r+1).length)}return t};const e=(t,e)=>t<e?{startIndex:t,endIndex:e}:{startIndex:e,endIndex:t}}(L||(L={}));const I=f.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 0;
    width: 0;
    visibility: hidden;
    z-index: ${t=>t.$zIndex};

    ${t=>{if(t.$show)return h`
                height: 100%;
                width: 100vw;
                visibility: visible;
            `}}
`,R=f.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(5, 1, 1, ${t=>t.$backgroundOpacity});
    backdrop-filter: ${t=>(t=>{let e="";return t&&(e+="blur(10px)"),e.length>0?e:"none"})(t.$backgroundBlur)};
    transition: opacity 200ms ease;

    ${t=>{let e="";return t.$show?e+=h`
                visibility: visible;
                opacity: 1;
                pointer-events: auto;
                height: 100%;
                width: 100vw;
            `:e+=h`
                visibility: hidden;
                opacity: 0;
                transition-delay: ${t.$disableTransition?"0ms":"400ms"};
                pointer-events: none;
                height: 0;
                width: 0;
            `,t.$disableTransition&&(e+=h`
                transition: none;
            `),e}}
`;var j;!function(t){t.Ready="overlay-context-ready",t.Change="overlay-context-change"}(j||(j={}));const P=({show:e=!1,rootId:n,onOverlayClick:l,children:f,backgroundOpacity:h,backgroundBlur:g=!0,disableTransition:m=!1,enableOverlayClick:p=!1,zIndex:y,id:F})=>{const[S,v]=a(null),[D,B]=a(),[$]=a((()=>V.generate())),b=c(),H=o(),w=o(null),x=f&&r.cloneElement(f,{ref:w}),O=F?`lifesg-ds-overlay-root-${F}`:"lifesg-ds-overlay-root",E=null!=y?y:D?99999:99998;(t=>{const e=s();i((()=>{if(!e)return;const n={zIndex:t};e.events.emit(j.Change,n)}),[e,t]),i((()=>{if(!e)return;const n=()=>{const n={zIndex:t};e.events.emit(j.Change,n)};return null==e||e.events.on(j.Ready,n),()=>null==e?void 0:e.events.off(j.Ready,n)}),[e,t])})(E),i((()=>(z(),v(M()),()=>{T(),_().length<1&&C("remove")})),[]),i((()=>{if(e){const t=A();k(t),W();const e=setTimeout((()=>{C("add")}),200);return()=>clearTimeout(e)}{T();const t=setTimeout((()=>{_().length<1&&C("remove")}),200);return()=>clearTimeout(t)}}),[e]);const k=t=>{H.current=t,B(t)},M=()=>document&&n?document.getElementById(n):document?document.body:null,A=()=>_().length>0,z=()=>{if(!document.getElementById(J)){const t=document.createElement("style");t.id=J;const e=document.documentElement.clientWidth,n=window.innerWidth-e;t.innerHTML=`\n\t\t\t\t.${Z} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${n}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${Z}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(t)}},C=t=>{const e=document.body.classList.contains(Z);"add"!==t||e?"remove"===t&&e&&document.body.classList.remove(Z):document.body.classList.add(Z)},_=()=>{const t=document.body.dataset.lifesgDsOverlayOrder;return t?t.split(","):[]},W=()=>{const t=_();document.body.dataset.lifesgDsOverlayOrder=[...t,$].join(",")},T=()=>{const t=_();document.body.dataset.lifesgDsOverlayOrder=t.filter((t=>t!==$)).join(",")},Y=t=>{var e;const n=null===(e=w.current)||void 0===e?void 0:e.firstChild;n&&n.contains(t.target)||l&&p&&(t.preventDefault(),l())};return S?d.createPortal(t(I,Object.assign({id:O,"data-testid":O,$show:e,$zIndex:E},{children:f&&t(u,Object.assign({id:b},{children:t(R,Object.assign({"data-testid":"overlay-wrapper",$show:e,$backgroundOpacity:h||(D?.5:.8),$backgroundBlur:g,$disableTransition:m,onClick:Y},{children:x}))}))})),S):null},N=e=>t(l,{children:t(P,Object.assign({},e))}),J="lifesg-ds-overlay-stylesheet",Z="lifesg-ds-overlay-open";var X=Array.isArray,G="object"==typeof p&&p&&p.Object===Object&&p,U="object"==typeof self&&self&&self.Object===Object&&self,Q=G||U||Function("return this")(),q=Q.Symbol,K=q,tt=Object.prototype,et=tt.hasOwnProperty,nt=tt.toString,rt=K?K.toStringTag:void 0;var it=function(t){var e=et.call(t,rt),n=t[rt];try{t[rt]=void 0;var r=!0}catch(t){}var i=nt.call(t);return r&&(e?t[rt]=n:delete t[rt]),i},at=Object.prototype.toString;var ot=it,st=function(t){return at.call(t)},lt=q?q.toStringTag:void 0;var ct=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":lt&&lt in Object(t)?ot(t):st(t)};var ut=ct,dt=function(t){return null!=t&&"object"==typeof t};var ft=function(t){return"symbol"==typeof t||dt(t)&&"[object Symbol]"==ut(t)},ht=X,gt=ft,mt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,pt=/^\w*$/;var yt=function(t,e){if(ht(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!gt(t))||(pt.test(t)||!mt.test(t)||null!=e&&t in Object(e))};var Ft=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},St=ct,vt=Ft;var Dt,Bt=function(t){if(!vt(t))return!1;var e=St(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},$t=Q["__core-js_shared__"],bt=(Dt=/[^.]+$/.exec($t&&$t.keys&&$t.keys.IE_PROTO||""))?"Symbol(src)_1."+Dt:"";var Ht=function(t){return!!bt&&bt in t},wt=Function.prototype.toString;var xt=Bt,Ot=Ht,Et=Ft,kt=function(t){if(null!=t){try{return wt.call(t)}catch(t){}try{return t+""}catch(t){}}return""},Mt=/^\[object .+?Constructor\]$/,At=Function.prototype,zt=Object.prototype,Ct=At.toString,_t=zt.hasOwnProperty,Wt=RegExp("^"+Ct.call(_t).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Tt=function(t){return!(!Et(t)||Ot(t))&&(xt(t)?Wt:Mt).test(kt(t))},Yt=function(t,e){return null==t?void 0:t[e]};var Vt=function(t,e){var n=Yt(t,e);return Tt(n)?n:void 0},Lt=Vt(Object,"create"),It=Lt;var Rt=function(){this.__data__=It?It(null):{},this.size=0};var jt=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},Pt=Lt,Nt=Object.prototype.hasOwnProperty;var Jt=function(t){var e=this.__data__;if(Pt){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return Nt.call(e,t)?e[t]:void 0},Zt=Lt,Xt=Object.prototype.hasOwnProperty;var Gt=Lt;var Ut=Rt,Qt=jt,qt=Jt,Kt=function(t){var e=this.__data__;return Zt?void 0!==e[t]:Xt.call(e,t)},te=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=Gt&&void 0===e?"__lodash_hash_undefined__":e,this};function ee(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}ee.prototype.clear=Ut,ee.prototype.delete=Qt,ee.prototype.get=qt,ee.prototype.has=Kt,ee.prototype.set=te;var ne=ee;var re=function(){this.__data__=[],this.size=0};var ie=function(t,e){return t===e||t!=t&&e!=e};var ae=function(t,e){for(var n=t.length;n--;)if(ie(t[n][0],e))return n;return-1},oe=ae,se=Array.prototype.splice;var le=ae;var ce=ae;var ue=ae;var de=re,fe=function(t){var e=this.__data__,n=oe(e,t);return!(n<0)&&(n==e.length-1?e.pop():se.call(e,n,1),--this.size,!0)},he=function(t){var e=this.__data__,n=le(e,t);return n<0?void 0:e[n][1]},ge=function(t){return ce(this.__data__,t)>-1},me=function(t,e){var n=this.__data__,r=ue(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};function pe(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}pe.prototype.clear=de,pe.prototype.delete=fe,pe.prototype.get=he,pe.prototype.has=ge,pe.prototype.set=me;var ye=pe,Fe=Vt(Q,"Map"),Se=ne,ve=ye,De=Fe;var Be=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var $e=function(t,e){var n=t.__data__;return Be(e)?n["string"==typeof e?"string":"hash"]:n.map},be=$e;var He=$e;var we=$e;var xe=$e;var Oe=function(){this.size=0,this.__data__={hash:new Se,map:new(De||ve),string:new Se}},Ee=function(t){var e=be(this,t).delete(t);return this.size-=e?1:0,e},ke=function(t){return He(this,t).get(t)},Me=function(t){return we(this,t).has(t)},Ae=function(t,e){var n=xe(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function ze(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}ze.prototype.clear=Oe,ze.prototype.delete=Ee,ze.prototype.get=ke,ze.prototype.has=Me,ze.prototype.set=Ae;var Ce=ze;function _e(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],a=n.cache;if(a.has(i))return a.get(i);var o=t.apply(this,r);return n.cache=a.set(i,o)||a,o};return n.cache=new(_e.Cache||Ce),n}_e.Cache=Ce;var We=_e;var Te=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ye=/\\(\\)?/g,Ve=function(t){var e=We(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(Te,(function(t,n,r,i){e.push(r?i.replace(Ye,"$1"):n||t)})),e}));var Le=function(t,e){for(var n=-1,r=null==t?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i},Ie=X,Re=ft,je=q?q.prototype:void 0,Pe=je?je.toString:void 0;var Ne=function t(e){if("string"==typeof e)return e;if(Ie(e))return Le(e,t)+"";if(Re(e))return Pe?Pe.call(e):"";var n=e+"";return"0"==n&&1/e==-1/0?"-0":n},Je=Ne;var Ze=X,Xe=yt,Ge=Ve,Ue=function(t){return null==t?"":Je(t)};var Qe=ft;var qe=function(t,e){return Ze(t)?t:Xe(t,e)?[t]:Ge(Ue(t))},Ke=function(t){if("string"==typeof t||Qe(t))return t;var e=t+"";return"0"==e&&1/t==-1/0?"-0":e};var tn=function(t,e){for(var n=0,r=(e=qe(e,t)).length;null!=t&&n<r;)t=t[Ke(e[n++])];return n&&n==r?t:void 0};var en=y((function(t,e,n){var r=null==t?void 0:tn(t,e);return void 0===r?n:r}));const nn=(t,e,n)=>e?en(n,e)||en(t,e):n||t,rn=(t,e)=>{const n=e||t.defaultValue;return en(t.collections,n)};var an;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme",t.designTokenScheme="designTokenScheme",t.resourceScheme="resourceScheme"}(an||(an={}));const on={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},sn=t=>e=>{const n=e.theme,r=rn(on,n[an.colorScheme]);return n.options&&n.options.color?nn(r,t,n.options.color):nn(r,t)},ln=(sn("Brand.1"),sn("Brand.2"),sn("Brand.3"),sn("Brand.4"),sn("Brand.5"),sn("Brand.6"),sn("Primary")),cn=(sn("PrimaryDark"),sn("Secondary")),un=(sn("Accent.Light.1"),sn("Accent.Light.2"),sn("Accent.Light.3"),sn("Accent.Light.4"),sn("Accent.Light.5"),sn("Accent.Light.6"),sn("Accent.Dark.1"),sn("Accent.Dark.2"),sn("Accent.Dark.3"),{1:sn("Neutral.1"),2:sn("Neutral.2"),3:sn("Neutral.3"),4:sn("Neutral.4"),5:sn("Neutral.5"),6:sn("Neutral.6"),7:sn("Neutral.7"),8:sn("Neutral.8")}),dn=(sn("Validation.Green.Text"),sn("Validation.Green.Icon"),sn("Validation.Green.Border"),sn("Validation.Green.Background"),sn("Validation.Orange.Text"),sn("Validation.Orange.Icon"),sn("Validation.Orange.Border"),sn("Validation.Orange.Background"),sn("Validation.Orange.Badge"),sn("Validation.Red.Text"),sn("Validation.Red.Icon"),sn("Validation.Red.Border"),sn("Validation.Red.Background"),sn("Validation.Blue.Text"),sn("Validation.Blue.Icon"),sn("Validation.Blue.Border"),sn("Validation.Blue.Background"),sn("Shadow.Accent"),sn("Shadow.Red"),sn("Shadow.Elevation"),{mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840}),fn=t=>Object.keys(dn).reduce(((e,n)=>{const r=dn[n];return e[n]=`@media screen and (${t}: ${r}px)`,e}),{}),hn=fn("max-width"),gn=(fn("min-width"),f.button`
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

        ${({$highlight:t})=>t&&h`
                background-color: ${un[7]};
            `}
    }
`),mn=r.forwardRef(((e,n)=>{var{children:r,focusHighlight:i=!0,focusOutline:a="none",type:o="button"}=e,s=m(e,["children","focusHighlight","focusOutline","type"]);return t(gn,Object.assign({ref:n,$outline:a,$highlight:i,type:o},s,{children:r}))})),pn={OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"},yn={D1:{fontFamily:pn.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:pn.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:pn.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:pn.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:pn.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:pn.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:pn.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:pn.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:pn.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:pn.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:pn.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:pn.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:pn.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:pn.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},Fn={D1:{fontFamily:pn.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056,fontVariant:"no-common-ligatures"},D2:{fontFamily:pn.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032,fontVariant:"no-common-ligatures"},D3:{fontFamily:pn.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},D4:{fontFamily:pn.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},DBody:{fontFamily:pn.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75,fontVariant:"no-common-ligatures"},H1:{fontFamily:pn.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032,fontVariant:"no-common-ligatures"},H2:{fontFamily:pn.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},H3:{fontFamily:pn.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H4:{fontFamily:pn.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H5:{fontFamily:pn.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,fontVariant:"no-common-ligatures"},H6:{fontFamily:pn.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012,fontVariant:"no-common-ligatures"},Body:{fontFamily:pn.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75,fontVariant:"no-common-ligatures"},BodySmall:{fontFamily:pn.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014,fontVariant:"no-common-ligatures"},XSmall:{fontFamily:pn.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012,fontVariant:"no-common-ligatures"}},Sn={collections:{base:yn,oneservice:{D1:{fontFamily:pn.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:pn.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:pn.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:pn.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:pn.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:pn.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:pn.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:pn.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:pn.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:pn.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:pn.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:pn.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:pn.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:pn.OpenSans.Regular,fontSize:.75,lineHeight:1.125}},plusJakartaSans:Fn},defaultValue:"base"},vn=t=>e=>{const n=e.theme,r=rn(Sn,n[an.textStyleScheme]);return n.options&&n.options.textStyle?nn(r,t,n.options.textStyle):nn(r,t)},Dn={D1:{fontFamily:vn("D1.fontFamily"),fontSize:vn("D1.fontSize"),fontWeight:vn("D1.fontWeight"),lineHeight:vn("D1.lineHeight"),letterSpacing:vn("D1.letterSpacing"),fontVariant:vn("D1.fontVariant")},D2:{fontFamily:vn("D2.fontFamily"),fontSize:vn("D2.fontSize"),fontWeight:vn("D2.fontWeight"),lineHeight:vn("D2.lineHeight"),letterSpacing:vn("D2.letterSpacing"),fontVariant:vn("D2.fontVariant")},D3:{fontFamily:vn("D3.fontFamily"),fontSize:vn("D3.fontSize"),fontWeight:vn("D3.fontWeight"),lineHeight:vn("D3.lineHeight"),letterSpacing:vn("D3.letterSpacing"),fontVariant:vn("D3.fontVariant")},D4:{fontFamily:vn("D4.fontFamily"),fontSize:vn("D4.fontSize"),fontWeight:vn("D4.fontWeight"),lineHeight:vn("D4.lineHeight"),letterSpacing:vn("D4.letterSpacing"),fontVariant:vn("D4.fontVariant")},DBody:{fontFamily:vn("DBody.fontFamily"),fontSize:vn("DBody.fontSize"),fontWeight:vn("DBody.fontWeight"),lineHeight:vn("DBody.lineHeight"),letterSpacing:vn("DBody.letterSpacing"),fontVariant:vn("DBody.fontVariant")},H1:{fontFamily:vn("H1.fontFamily"),fontSize:vn("H1.fontSize"),fontWeight:vn("H1.fontWeight"),lineHeight:vn("H1.lineHeight"),letterSpacing:vn("H1.letterSpacing"),fontVariant:vn("H1.fontVariant")},H2:{fontFamily:vn("H2.fontFamily"),fontSize:vn("H2.fontSize"),fontWeight:vn("H2.fontWeight"),lineHeight:vn("H2.lineHeight"),letterSpacing:vn("H2.letterSpacing"),fontVariant:vn("H2.fontVariant")},H3:{fontFamily:vn("H3.fontFamily"),fontSize:vn("H3.fontSize"),fontWeight:vn("H3.fontWeight"),lineHeight:vn("H3.lineHeight"),letterSpacing:vn("H3.letterSpacing"),fontVariant:vn("H3.fontVariant")},H4:{fontFamily:vn("H4.fontFamily"),fontSize:vn("H4.fontSize"),fontWeight:vn("H4.fontWeight"),lineHeight:vn("H4.lineHeight"),letterSpacing:vn("H4.letterSpacing"),fontVariant:vn("H4.fontVariant")},H5:{fontFamily:vn("H5.fontFamily"),fontSize:vn("H5.fontSize"),fontWeight:vn("H5.fontWeight"),lineHeight:vn("H5.lineHeight"),letterSpacing:vn("H5.letterSpacing"),fontVariant:vn("H5.fontVariant")},H6:{fontFamily:vn("H6.fontFamily"),fontSize:vn("H6.fontSize"),fontWeight:vn("H6.fontWeight"),lineHeight:vn("H6.lineHeight"),letterSpacing:vn("H6.letterSpacing"),fontVariant:vn("H6.fontVariant")},Body:{fontFamily:vn("Body.fontFamily"),fontSize:vn("Body.fontSize"),fontWeight:vn("Body.fontWeight"),lineHeight:vn("Body.lineHeight"),letterSpacing:vn("Body.letterSpacing"),fontVariant:vn("Body.fontVariant")},BodySmall:{fontFamily:vn("BodySmall.fontFamily"),fontSize:vn("BodySmall.fontSize"),fontWeight:vn("BodySmall.fontWeight"),lineHeight:vn("BodySmall.lineHeight"),letterSpacing:vn("BodySmall.letterSpacing"),fontVariant:vn("BodySmall.fontVariant")},XSmall:{fontFamily:vn("XSmall.fontFamily"),fontSize:vn("XSmall.fontSize"),fontWeight:vn("XSmall.fontWeight"),lineHeight:vn("XSmall.lineHeight"),letterSpacing:vn("XSmall.letterSpacing"),fontVariant:vn("XSmall.fontVariant")}},Bn=[pn.OpenSans,pn.PlusJakartaSans],$n=(t,e)=>{switch(e){case 700:case"bold":return t.Bold;case 600:case"semibold":return t.Semibold;case 300:case"light":return t.Light;case 400:case"regular":return t.Regular;default:return""}},bn=(t,e)=>n=>{var r;const i=Dn[t].fontFamily(n),a=Dn[t].fontWeight(n),o=Bn.find((t=>Object.values(t).includes(i)));return o?h`
                font-family: ${$n(o,e)||$n(o,a)||i};
                font-weight: normal !important;
            `:h`
            font-family: ${i};
            font-weight: ${null!==(r=Hn(e)||a)&&void 0!==r?r:"normal"};
        `},Hn=t=>{switch(t){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},wn=t=>{if(t>0)return h`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${t};
            line-clamp: ${t};
            overflow: hidden;
        `},xn=(t,e,n=!1)=>r=>{const i=Dn[t],a=i.fontSize(r);return h`
            ${bn(t,e)}
            font-size: ${a}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            font-variant: ${i.fontVariant(r)||"normal"};
            ${h`
                margin-bottom: ${a*(n?1.05:0)}rem;
            `}
        `},On=(t=!1,e=!1,n=void 0)=>e?h`
            display: block;
            ${wn(n)}
        `:t?h`
            display: inline;
        `:h`
            display: block;
            ${wn(n)}
        `;var En;!function(t){t.D1=f.h1`
        ${t=>h`
                ${xn("D1",t.weight,t.paragraph)}
                color: ${un[1]};
                ${On(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.D2=f.h1`
        ${t=>h`
                ${xn("D2",t.weight,t.paragraph)}
                color: ${un[1]};
                ${On(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.D3=f.h1`
        ${t=>h`
                ${xn("D3",t.weight,t.paragraph)}
                color: ${un[1]};
                ${On(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.D4=f.h1`
        ${t=>h`
                ${xn("D4",t.weight,t.paragraph)}
                color: ${un[1]};
                ${On(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.DBody=f.h1`
        ${t=>h`
                ${xn("DBody",t.weight,t.paragraph)}
                color: ${un[1]};
                ${On(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H1=f.h1`
        ${t=>h`
                ${xn("H1",t.weight,t.paragraph)}
                color: ${un[1]};
                ${On(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H2=f.h2`
        ${t=>h`
                ${xn("H2",t.weight,t.paragraph)}
                color: ${un[1]};
                ${On(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H3=f.h3`
        ${t=>h`
                ${xn("H3",t.weight,t.paragraph)}
                color: ${un[1]};
                ${On(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H4=f.h4`
        ${t=>h`
                ${xn("H4",t.weight,t.paragraph)}
                color: ${un[1]};
                ${On(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H5=f.h5`
        ${t=>h`
                ${xn("H5",t.weight,t.paragraph)}
                color: ${un[1]};
                ${On(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H6=f.h6`
        ${t=>h`
                ${xn("H6",t.weight,t.paragraph)}
                color: ${un[1]};
                ${On(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.Body=f.p`
        ${t=>h`
                ${xn("Body",t.weight,t.paragraph)}
                color: ${un[1]};
                ${On(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.BodySmall=f.p`
        ${t=>h`
                ${xn("BodySmall",t.weight,t.paragraph)}
                color: ${un[1]};
                ${On(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.XSmall=f.span`
        ${t=>h`
                ${xn("XSmall",t.weight,t.paragraph)}
                color: ${un[1]};
                ${On(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.Hyperlink={Default:t=>An(Object.assign(Object.assign({},t),{textStyle:"Body"})),Small:t=>An(Object.assign(Object.assign({},t),{textStyle:"BodySmall"}))}}(En||(En={}));const kn=f.a`
    ${t=>h`
            ${xn(t.textStyle,t.weight)}
            color: ${ln};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${cn};

                svg {
                    color: ${cn};
                }
            }
        `}
`,Mn=f(g)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,An=n=>{var{external:r=!1,children:i}=n,a=m(n,["external","children"]);return e(kn,Object.assign({},a,{children:[i,r&&t(Mn,{})]}))};var zn;!function(t){t[t.Subpage=0]="Subpage",t[t.Domain=1]="Domain"}(zn||(zn={}));const Cn=f.div`
    position: fixed;
    top: 0;

    display: flex;
    flex-direction: column;
    height: 100%;

    background-color: ${un[8]};
    box-shadow: 0px 2px 12px rgba(104, 104, 104, 0.25);

    visibility: ${t=>t.$show?"visible":"hidden"};
    ${t=>t.$show?h`
            right: 0;
            transition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);
            transition-delay: 200ms;
        `:h`
        right: -100%;
        transition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);
    `}

    width: 40%;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    overflow: hidden;

    ${hn.desktopL} {
        width: 50%;
        min-width: 700px;
    }

    ${hn.tablet} {
        width: 100%;
        min-width: unset;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
`,_n=f.div`
    top: 0;

    display: flex;
    align-items: center;
    gap: 1rem;
    height: 5rem;
    padding: 2rem 1rem 1rem;
    background-color: ${un[8]};
    border-bottom: 1px solid ${un[5]};

    ${hn.tablet} {
        gap: 0.5rem;
        padding: 2rem 1.25rem 1rem;
    }
`,Wn=f(mn)`
    color: ${un[3]};
    padding: 0;
    order: -1; // show button on the left of the header

    :active,
    :focus {
        color: ${ln};
    }

    svg {
        height: 2rem;
        width: 2rem;
    }
`,Tn=f(En.H2)`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`,Yn=f.div`
    flex: 1;
    overflow-y: auto;
`,Vn=r=>{var{children:s,heading:l,show:c,onClose:u,onOverlayClick:d}=r,f=m(r,["children","heading","show","onClose","onOverlayClick"]);const[h,g]=a(c),[p]=a((()=>V.generate())),y=o();i((()=>{if(!c){const t=setTimeout((()=>g(!1)),500);return()=>clearTimeout(t)}g(!0)}),[c]);return t(N,Object.assign({show:h,enableOverlayClick:!0,onOverlayClick:d},{children:e(Cn,Object.assign({$show:c,"data-testid":"drawer",onClick:t=>{t.stopPropagation()},role:"dialog","aria-labelledby":p,onTransitionEnd:t=>{"visibility"===t.propertyName&&c&&y.current&&y.current.focus()}},f,{children:[e(_n,{children:[t(Tn,Object.assign({id:p,ref:y,tabIndex:-1},{children:l})),t(Wn,Object.assign({"aria-label":"Close drawer",onClick:u,focusHighlight:!1},{children:t(n,{"aria-hidden":!0})}))]}),t(Yn,{children:s})]}))}))};export{Vn as Drawer};
//# sourceMappingURL=index.js.map
