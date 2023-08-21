import{jsx as t,jsxs as e}from"react/jsx-runtime";import{CrossIcon as n}from"@lifesg/react-icons/cross";import r,{useState as i,useRef as o,useEffect as a}from"react";import s from"react-dom";import l,{css as c}from"styled-components";import{ExternalIcon as u}from"@lifesg/react-icons/external";function h(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}const d=l.div`
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
`,f=l.div`
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
`,g=({show:e=!1,rootId:n,onOverlayClick:l,children:c,backgroundOpacity:u,backgroundBlur:h=!0,disableTransition:g=!1,enableOverlayClick:y=!1,zIndex:v,id:$})=>{const[S,F]=i(null),[D,b]=i(),B=o(),w=o(!1),H=o(null),x=c&&r.cloneElement(c,{ref:H}),O=$?`lifesg-ds-overlay-root-${$}`:"lifesg-ds-overlay-root";a((()=>{const t=!0===w.current;if(t||(w.current=!0),e){const t=z();if(M(t),!t){const t=setTimeout((()=>{k("add")}),200);return()=>clearTimeout(t)}}else{if(!t)return;if(!B.current){const t=setTimeout((()=>{k("remove")}),200);return()=>clearTimeout(t)}}}),[e]),a((()=>{F(_());const t=z();return M(t),t||E(),()=>{k("remove")}}),[]);const M=t=>{B.current=t,b(t)},_=()=>document&&n?document.getElementById(n):document?document.body:null,z=()=>document.body.classList.contains(m),E=()=>{if(!document.getElementById(p)){const t=document.createElement("style");t.id=p;const e=document.documentElement.clientWidth,n=window.innerWidth-e;t.innerHTML=`\n\t\t\t\t.${m} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${n}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${m}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(t)}},k=t=>{const e=document.body.classList.contains(m);"add"!==t||e?"remove"===t&&e&&document.body.classList.remove(m):document.body.classList.add(m)},A=t=>{var e;const n=null===(e=H.current)||void 0===e?void 0:e.firstChild;n&&n.contains(t.target)||l&&y&&(t.preventDefault(),l())};return S?s.createPortal(t(d,Object.assign({id:O,"data-testid":O,$show:e,zIndex:v,$stacked:D},{children:c&&t(f,Object.assign({"data-testid":"overlay-wrapper",$show:e,$backgroundOpacity:u||(D?.5:.8),$backgroundBlur:h,$disableTransition:g,$enableOverlayClick:y,onClick:A},{children:x}))})),S):null},p="lifesg-ds-overlay-stylesheet",m="lifesg-ds-overlay-open";var y="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},v={exports:{}};v.exports=function(){var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},e=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},a=function(t){return(t=+t)+(t>68?1900:2e3)},s=function(t){return function(e){this[t]=+e}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(t){(this.zone||(this.zone={})).offset=function(t){if(!t)return 0;if("Z"===t)return 0;var e=t.match(/([+-]|\d\d)/g),n=60*e[1]+(+e[2]||0);return 0===n?0:"+"===e[0]?-n:n}(t)}],c=function(t){var e=o[t];return e&&(e.indexOf?e:e.s.concat(e.f))},u=function(t,e){var n,r=o.meridiem;if(r){for(var i=1;i<=24;i+=1)if(t.indexOf(r(i,0,e))>-1){n=i>12;break}}else n=t===(e?"pm":"PM");return n},h={A:[i,function(t){this.afternoon=u(t,!1)}],a:[i,function(t){this.afternoon=u(t,!0)}],S:[/\d/,function(t){this.milliseconds=100*+t}],SS:[n,function(t){this.milliseconds=10*+t}],SSS:[/\d{3}/,function(t){this.milliseconds=+t}],s:[r,s("seconds")],ss:[r,s("seconds")],m:[r,s("minutes")],mm:[r,s("minutes")],H:[r,s("hours")],h:[r,s("hours")],HH:[r,s("hours")],hh:[r,s("hours")],D:[r,s("day")],DD:[n,s("day")],Do:[i,function(t){var e=o.ordinal,n=t.match(/\d+/);if(this.day=n[0],e)for(var r=1;r<=31;r+=1)e(r).replace(/\[|\]/g,"")===t&&(this.day=r)}],M:[r,s("month")],MM:[n,s("month")],MMM:[i,function(t){var e=c("months"),n=(c("monthsShort")||e.map((function(t){return t.slice(0,3)}))).indexOf(t)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(t){var e=c("months").indexOf(t)+1;if(e<1)throw new Error;this.month=e%12||e}],Y:[/[+-]?\d+/,s("year")],YY:[n,function(t){this.year=a(t)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function d(n){var r,i;r=n,i=o&&o.formats;for(var a=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(e,n,r){var o=r&&r.toUpperCase();return n||i[r]||t[r]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(t,e,n){return e||n.slice(1)}))}))).match(e),s=a.length,l=0;l<s;l+=1){var c=a[l],u=h[c],d=u&&u[0],f=u&&u[1];a[l]=f?{regex:d,parser:f}:c.replace(/^\[|\]$/g,"")}return function(t){for(var e={},n=0,r=0;n<s;n+=1){var i=a[n];if("string"==typeof i)r+=i.length;else{var o=i.regex,l=i.parser,c=t.slice(r),u=o.exec(c)[0];l.call(e,u),t=t.replace(u,"")}}return function(t){var e=t.afternoon;if(void 0!==e){var n=t.hours;e?n<12&&(t.hours+=12):12===n&&(t.hours=0),delete t.afternoon}}(e),e}}return function(t,e,n){n.p.customParseFormat=!0,t&&t.parseTwoDigitYear&&(a=t.parseTwoDigitYear);var r=e.prototype,i=r.parse;r.parse=function(t){var e=t.date,r=t.utc,a=t.args;this.$u=r;var s=a[1];if("string"==typeof s){var l=!0===a[2],c=!0===a[3],u=l||c,h=a[2];c&&(h=a[2]),o=this.$locale(),!l&&h&&(o=n.Ls[h]),this.$d=function(t,e,n){try{if(["x","X"].indexOf(e)>-1)return new Date(("X"===e?1e3:1)*t);var r=d(e)(t),i=r.year,o=r.month,a=r.day,s=r.hours,l=r.minutes,c=r.seconds,u=r.milliseconds,h=r.zone,f=new Date,g=a||(i||o?1:f.getDate()),p=i||f.getFullYear(),m=0;i&&!o||(m=o>0?o-1:f.getMonth());var y=s||0,v=l||0,$=c||0,S=u||0;return h?new Date(Date.UTC(p,m,g,y,v,$,S+60*h.offset*1e3)):n?new Date(Date.UTC(p,m,g,y,v,$,S)):new Date(p,m,g,y,v,$,S)}catch(t){return new Date("")}}(e,s,r),this.init(),h&&!0!==h&&(this.$L=this.locale(h).$L),u&&e!=this.format(s)&&(this.$d=new Date("")),o={}}else if(s instanceof Array)for(var f=s.length,g=1;g<=f;g+=1){a[1]=s[g-1];var p=n.apply(this,a);if(p.isValid()){this.$d=p.$d,this.$L=p.$L,this.init();break}g===f&&(this.$d=new Date(""))}else i.call(this,t)}}}();var $,S,F=v.exports,D={exports:{}},b=D.exports=($={year:0,month:1,day:2,hour:3,minute:4,second:5},S={},function(t,e,n){var r,i=function(t,e,n){void 0===n&&(n={});var r=new Date(t),i=function(t,e){void 0===e&&(e={});var n=e.timeZoneName||"short",r=t+"|"+n,i=S[r];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:t,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),S[r]=i),i}(e,n);return i.formatToParts(r)},o=function(t,e){for(var r=i(t,e),o=[],a=0;a<r.length;a+=1){var s=r[a],l=s.type,c=s.value,u=$[l];u>=0&&(o[u]=parseInt(c,10))}var h=o[3],d=24===h?0:h,f=o[0]+"-"+o[1]+"-"+o[2]+" "+d+":"+o[4]+":"+o[5]+":000",g=+t;return(n.utc(f).valueOf()-(g-=g%1e3))/6e4},a=e.prototype;a.tz=function(t,e){void 0===t&&(t=r);var i=this.utcOffset(),o=this.toDate(),a=o.toLocaleString("en-US",{timeZone:t}),s=Math.round((o-new Date(a))/1e3/60),l=n(a).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-s,!0);if(e){var c=l.utcOffset();l=l.add(i-c,"minute")}return l.$x.$timezone=t,l},a.offsetName=function(t){var e=this.$x.$timezone||n.tz.guess(),r=i(this.valueOf(),e,{timeZoneName:t}).find((function(t){return"timezonename"===t.type.toLowerCase()}));return r&&r.value};var s=a.startOf;a.startOf=function(t,e){if(!this.$x||!this.$x.$timezone)return s.call(this,t,e);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return s.call(r,t,e).tz(this.$x.$timezone,!0)},n.tz=function(t,e,i){var a=i&&e,s=i||e||r,l=o(+n(),s);if("string"!=typeof t)return n(t).tz(s);var c=function(t,e,n){var r=t-60*e*1e3,i=o(r,n);if(e===i)return[r,e];var a=o(r-=60*(i-e)*1e3,n);return i===a?[r,i]:[t-60*Math.min(i,a)*1e3,Math.max(i,a)]}(n.utc(t,a).valueOf(),l,s),u=c[0],h=c[1],d=n(u).utcOffset(h);return d.$x.$timezone=s,d},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(t){r=t}}),B={exports:{}};B.exports=function(){var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",o="minute",a="hour",s="day",l="week",c="month",u="quarter",h="year",d="date",f="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},y=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},v={s:y,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+y(r,2,"0")+":"+y(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),o=n-i<0,a=e.clone().add(r+(o?-1:1),c);return+(-(r+(n-i)/(o?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:h,w:l,d:s,D:d,h:a,m:o,s:i,ms:r,Q:u}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},$="en",S={};S[$]=m;var F=function(t){return t instanceof w},D=function t(e,n,r){var i;if(!e)return $;if("string"==typeof e){var o=e.toLowerCase();S[o]&&(i=o),n&&(S[o]=n,i=o);var a=e.split("-");if(!i&&a.length>1)return t(a[0])}else{var s=e.name;S[s]=e,i=s}return!r&&i&&($=i),i||!r&&$},b=function(t,e){if(F(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new w(n)},B=v;B.l=D,B.i=F,B.w=function(t,e){return b(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var w=function(){function m(t){this.$L=D(t.locale,null,!0),this.parse(t)}var y=m.prototype;return y.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(B.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(g);if(r){var i=r[2]-1||0,o=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},y.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},y.$utils=function(){return B},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(t,e){var n=b(t);return this.startOf(e)<=n&&n<=this.endOf(e)},y.isAfter=function(t,e){return b(t)<this.startOf(e)},y.isBefore=function(t,e){return this.endOf(e)<b(t)},y.$g=function(t,e,n){return B.u(t)?this[e]:this.set(n,t)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(t,e){var n=this,r=!!B.u(e)||e,u=B.p(t),f=function(t,e){var i=B.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(s)},g=function(t,e){return B.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},p=this.$W,m=this.$M,y=this.$D,v="set"+(this.$u?"UTC":"");switch(u){case h:return r?f(1,0):f(31,11);case c:return r?f(1,m):f(0,m+1);case l:var $=this.$locale().weekStart||0,S=(p<$?p+7:p)-$;return f(r?y-S:y+(6-S),m);case s:case d:return g(v+"Hours",0);case a:return g(v+"Minutes",1);case o:return g(v+"Seconds",2);case i:return g(v+"Milliseconds",3);default:return this.clone()}},y.endOf=function(t){return this.startOf(t,!1)},y.$set=function(t,e){var n,l=B.p(t),u="set"+(this.$u?"UTC":""),f=(n={},n[s]=u+"Date",n[d]=u+"Date",n[c]=u+"Month",n[h]=u+"FullYear",n[a]=u+"Hours",n[o]=u+"Minutes",n[i]=u+"Seconds",n[r]=u+"Milliseconds",n)[l],g=l===s?this.$D+(e-this.$W):e;if(l===c||l===h){var p=this.clone().set(d,1);p.$d[f](g),p.init(),this.$d=p.set(d,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f](g);return this.init(),this},y.set=function(t,e){return this.clone().$set(t,e)},y.get=function(t){return this[B.p(t)]()},y.add=function(r,u){var d,f=this;r=Number(r);var g=B.p(u),p=function(t){var e=b(f);return B.w(e.date(e.date()+Math.round(t*r)),f)};if(g===c)return this.set(c,this.$M+r);if(g===h)return this.set(h,this.$y+r);if(g===s)return p(1);if(g===l)return p(7);var m=(d={},d[o]=e,d[a]=n,d[i]=t,d)[g]||1,y=this.$d.getTime()+r*m;return B.w(y,this)},y.subtract=function(t,e){return this.add(-1*t,e)},y.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=B.z(this),o=this.$H,a=this.$m,s=this.$M,l=n.weekdays,c=n.months,u=function(t,n,i,o){return t&&(t[n]||t(e,r))||i[n].slice(0,o)},h=function(t){return B.s(o%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},g={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:B.s(s+1,2,"0"),MMM:u(n.monthsShort,s,c,3),MMMM:u(c,s),D:this.$D,DD:B.s(this.$D,2,"0"),d:String(this.$W),dd:u(n.weekdaysMin,this.$W,l,2),ddd:u(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(o),HH:B.s(o,2,"0"),h:h(1),hh:h(2),a:d(o,a,!0),A:d(o,a,!1),m:String(a),mm:B.s(a,2,"0"),s:String(this.$s),ss:B.s(this.$s,2,"0"),SSS:B.s(this.$ms,3,"0"),Z:i};return r.replace(p,(function(t,e){return e||g[t]||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,d,f){var g,p=B.p(d),m=b(r),y=(m.utcOffset()-this.utcOffset())*e,v=this-m,$=B.m(this,m);return $=(g={},g[h]=$/12,g[c]=$,g[u]=$/3,g[l]=(v-y)/6048e5,g[s]=(v-y)/864e5,g[a]=v/n,g[o]=v/e,g[i]=v/t,g)[p]||v,f?$:B.a($)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return S[this.$L]},y.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=D(t,e,!0);return r&&(n.$L=r),n},y.clone=function(){return B.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),H=w.prototype;return b.prototype=H,[["$ms",r],["$s",i],["$m",o],["$H",a],["$W",s],["$M",c],["$y",h],["$D",d]].forEach((function(t){H[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),b.extend=function(t,e){return t.$i||(t(e,w,b),t.$i=!0),b},b.locale=D,b.isDayjs=F,b.unix=function(t){return b(1e3*t)},b.en=S[$],b.Ls=S,b.p={},b}();var w=B.exports,H={exports:{}};H.exports=function(t,e,n){e.prototype.isBetween=function(t,e,r,i){var o=n(t),a=n(e),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(o,r):!this.isBefore(o,r))&&(l?this.isBefore(a,r):!this.isAfter(a,r))||(s?this.isBefore(o,r):!this.isAfter(o,r))&&(l?this.isAfter(a,r):!this.isBefore(a,r))}};var x=H.exports,O={exports:{}};O.exports=function(t,e){e.prototype.isSameOrBefore=function(t,e){return this.isSame(t,e)||this.isBefore(t,e)}};var M=O.exports,_={exports:{}};_.exports=function(t,e){e.prototype.isSameOrAfter=function(t,e){return this.isSame(t,e)||this.isAfter(t,e)}};var z,E=_.exports;w.extend(x),w.extend(M),w.extend(E),w.extend(F),w.extend(b),function(t){t.generateDays=t=>{const e=t.startOf("month"),n=w(e).startOf("week");return k(n).map((t=>A(t)))},t.generateDaysForCurrentWeek=t=>{const e=t.startOf("week");return A(e)},t.generateMonths=t=>{const e=[];for(let n=0;n<12;n++){const r=t.month(n);e.push(w(r))}return e},t.generateDecadeOfYears=t=>{const e=t.year(),n=10*Math.floor(e/10),r=t.year(n),i=[r.subtract(1,"year"),r];for(let t=1;t<11;t++)i.push(r.add(t,"year"));return i},t.getStartEndDecade=t=>{const e=10*Math.floor(+t.format("YYYY")/10);return{beginDecade:e,endDecade:+w(`${e+9}-01-01`).format("YYYY")}},t.convertTo12HourFormat=t=>{const e=w(t,"HH:mm");return e.isValid()?e.format("h:mm a"):""},t.isWithinRange=(t,e,n,r="day")=>!e&&!n||(e&&n?t.isBetween(e,n,r,"[]"):e?t.isSameOrAfter(e,r):t.isSameOrBefore(n,r)),t.isPreviousMonthWithinRange=(e,n)=>t.isWithinRange(e.subtract(1,"month"),n,void 0,"month"),t.isPreviousYearWithinRange=(e,n)=>t.isWithinRange(e.subtract(1,"year"),n,void 0,"year"),t.isPreviousDecadeWithinRange=(e,n)=>{const{beginDecade:r}=t.getStartEndDecade(e);return t.isWithinRange(e.year(r).subtract(1,"year"),n,void 0,"year")},t.isNextMonthWithinRange=(e,n)=>t.isWithinRange(e.add(1,"month"),void 0,n,"month"),t.isNextYearWithinRange=(e,n)=>t.isWithinRange(e.add(1,"year"),void 0,n,"year"),t.isNextDecadeWithinRange=(e,n)=>{const{endDecade:r}=t.getStartEndDecade(e);return t.isWithinRange(e.year(r).add(1,"year"),void 0,n,"year")}}(z||(z={}));const k=t=>{const e=[t];for(let n=1;n<6;n++){const r=t.add(n,"week");e.push(r)}return e},A=t=>{const e=[];for(let n=0;n<7;n++){const r=t.add(n,"day");e.push(r)}return e},T=[1,3,5,7,8,10,12],W=[4,6,9,11];var C,Y,L;!function(t){t.clampDay=(e,n,r)=>{const i=parseInt(e),o=parseInt(n),a=parseInt(r);return 0==i?"1":T.includes(o)?Math.min(i,31).toString():W.includes(o)?Math.min(i,30).toString():2===o?t.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():e},t.clampMonth=t=>{const e=parseInt(t);return 0==e?"1":e>12?"12":t},t.isLeapYear=t=>t%4==0&&t%100!=0||t%400==0,t.getTimeDiffInMinutes=(t,e,n="HH:mm")=>{const r=w(t,n);return w(e,n).diff(r,"minute")}}(C||(C={})),function(t){t.generate=()=>Math.random().toString(36).substring(2,9)}(Y||(Y={})),function(t){t.transformWithSpaces=(t,e)=>{const n="(.{"+e+"})";return t.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},t.padValue=(t,e)=>{if("0"===t)return e?t:t.padStart(2,"0");if(""===t)return t;return parseInt(t).toString().padStart(2,"0")},t.shouldTruncateToTwoLines=(t,e)=>{const n=Math.floor(e/9);return t.length>=2*n||1===t.split(" ").length&&t.length>n},t.truncateOneLine=(t,e,n,r,i=8)=>{let o=0;e>n&&(o=Math.floor((e-n)/i));const a=r+o;if(a<t.length){const e=Math.floor(a/2);return t.substring(0,e)+" ... "+t.substring(t.length-e,t.length)}return t},t.getTextWidth=(e,n)=>{if("undefined"==typeof document)return 0;const r=(t.getTextWidth.canvas||(t.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(e).width}}(L||(L={}));var j=Array.isArray,I="object"==typeof y&&y&&y.Object===Object&&y,R="object"==typeof self&&self&&self.Object===Object&&self,V=I||R||Function("return this")(),P=V.Symbol,N=P,Z=Object.prototype,U=Z.hasOwnProperty,X=Z.toString,G=N?N.toStringTag:void 0;var J=function(t){var e=U.call(t,G),n=t[G];try{t[G]=void 0;var r=!0}catch(t){}var i=X.call(t);return r&&(e?t[G]=n:delete t[G]),i},q=Object.prototype.toString;var Q=J,K=function(t){return q.call(t)},tt=P?P.toStringTag:void 0;var et=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":tt&&tt in Object(t)?Q(t):K(t)};var nt=et,rt=function(t){return null!=t&&"object"==typeof t};var it=function(t){return"symbol"==typeof t||rt(t)&&"[object Symbol]"==nt(t)},ot=j,at=it,st=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,lt=/^\w*$/;var ct=function(t,e){if(ot(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!at(t))||(lt.test(t)||!st.test(t)||null!=e&&t in Object(e))};var ut=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},ht=et,dt=ut;var ft,gt=function(t){if(!dt(t))return!1;var e=ht(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},pt=V["__core-js_shared__"],mt=(ft=/[^.]+$/.exec(pt&&pt.keys&&pt.keys.IE_PROTO||""))?"Symbol(src)_1."+ft:"";var yt=function(t){return!!mt&&mt in t},vt=Function.prototype.toString;var $t=gt,St=yt,Ft=ut,Dt=function(t){if(null!=t){try{return vt.call(t)}catch(t){}try{return t+""}catch(t){}}return""},bt=/^\[object .+?Constructor\]$/,Bt=Function.prototype,wt=Object.prototype,Ht=Bt.toString,xt=wt.hasOwnProperty,Ot=RegExp("^"+Ht.call(xt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Mt=function(t){return!(!Ft(t)||St(t))&&($t(t)?Ot:bt).test(Dt(t))},_t=function(t,e){return null==t?void 0:t[e]};var zt=function(t,e){var n=_t(t,e);return Mt(n)?n:void 0},Et=zt(Object,"create"),kt=Et;var At=function(){this.__data__=kt?kt(null):{},this.size=0};var Tt=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},Wt=Et,Ct=Object.prototype.hasOwnProperty;var Yt=function(t){var e=this.__data__;if(Wt){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return Ct.call(e,t)?e[t]:void 0},Lt=Et,jt=Object.prototype.hasOwnProperty;var It=Et;var Rt=At,Vt=Tt,Pt=Yt,Nt=function(t){var e=this.__data__;return Lt?void 0!==e[t]:jt.call(e,t)},Zt=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=It&&void 0===e?"__lodash_hash_undefined__":e,this};function Ut(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Ut.prototype.clear=Rt,Ut.prototype.delete=Vt,Ut.prototype.get=Pt,Ut.prototype.has=Nt,Ut.prototype.set=Zt;var Xt=Ut;var Gt=function(){this.__data__=[],this.size=0};var Jt=function(t,e){return t===e||t!=t&&e!=e};var qt=function(t,e){for(var n=t.length;n--;)if(Jt(t[n][0],e))return n;return-1},Qt=qt,Kt=Array.prototype.splice;var te=qt;var ee=qt;var ne=qt;var re=Gt,ie=function(t){var e=this.__data__,n=Qt(e,t);return!(n<0)&&(n==e.length-1?e.pop():Kt.call(e,n,1),--this.size,!0)},oe=function(t){var e=this.__data__,n=te(e,t);return n<0?void 0:e[n][1]},ae=function(t){return ee(this.__data__,t)>-1},se=function(t,e){var n=this.__data__,r=ne(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};function le(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}le.prototype.clear=re,le.prototype.delete=ie,le.prototype.get=oe,le.prototype.has=ae,le.prototype.set=se;var ce=le,ue=zt(V,"Map"),he=Xt,de=ce,fe=ue;var ge=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var pe=function(t,e){var n=t.__data__;return ge(e)?n["string"==typeof e?"string":"hash"]:n.map},me=pe;var ye=pe;var ve=pe;var $e=pe;var Se=function(){this.size=0,this.__data__={hash:new he,map:new(fe||de),string:new he}},Fe=function(t){var e=me(this,t).delete(t);return this.size-=e?1:0,e},De=function(t){return ye(this,t).get(t)},be=function(t){return ve(this,t).has(t)},Be=function(t,e){var n=$e(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function we(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}we.prototype.clear=Se,we.prototype.delete=Fe,we.prototype.get=De,we.prototype.has=be,we.prototype.set=Be;var He=we;function xe(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=t.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(xe.Cache||He),n}xe.Cache=He;var Oe=xe;var Me=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,_e=/\\(\\)?/g,ze=function(t){var e=Oe(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(Me,(function(t,n,r,i){e.push(r?i.replace(_e,"$1"):n||t)})),e}));var Ee=function(t,e){for(var n=-1,r=null==t?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i},ke=j,Ae=it,Te=P?P.prototype:void 0,We=Te?Te.toString:void 0;var Ce=function t(e){if("string"==typeof e)return e;if(ke(e))return Ee(e,t)+"";if(Ae(e))return We?We.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n},Ye=Ce;var Le=j,je=ct,Ie=ze,Re=function(t){return null==t?"":Ye(t)};var Ve=it;var Pe=function(t,e){return Le(t)?t:je(t,e)?[t]:Ie(Re(t))},Ne=function(t){if("string"==typeof t||Ve(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e};var Ze=function(t,e){for(var n=0,r=(e=Pe(e,t)).length;null!=t&&n<r;)t=t[Ne(e[n++])];return n&&n==r?t:void 0};var Ue=function(t,e,n){var r=null==t?void 0:Ze(t,e);return void 0===r?n:r};const Xe=(t,e,n)=>e?Ue(n,e)||Ue(t,e):n||t,Ge=(t,e)=>{const n=e||t.defaultValue;return Ue(t.collections,n)};var Je;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme",t.designTokenScheme="designTokenScheme",t.resourceScheme="resourceScheme"}(Je||(Je={}));const qe={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Qe=t=>e=>{const n=e.theme,r=Ge(qe,n[Je.colorScheme]);return n.options&&n.options.color?Xe(r,t,n.options.color):Xe(r,t)},Ke=(Qe("Brand.1"),Qe("Brand.2"),Qe("Brand.3"),Qe("Brand.4"),Qe("Brand.5"),Qe("Brand.6"),Qe("Primary")),tn=(Qe("PrimaryDark"),Qe("Secondary")),en=(Qe("Accent.Light.1"),Qe("Accent.Light.2"),Qe("Accent.Light.3"),Qe("Accent.Light.4"),Qe("Accent.Light.5"),Qe("Accent.Light.6"),Qe("Accent.Dark.1"),Qe("Accent.Dark.2"),Qe("Accent.Dark.3"),{1:Qe("Neutral.1"),2:Qe("Neutral.2"),3:Qe("Neutral.3"),4:Qe("Neutral.4"),5:Qe("Neutral.5"),6:Qe("Neutral.6"),7:Qe("Neutral.7"),8:Qe("Neutral.8")}),nn=(Qe("Validation.Green.Text"),Qe("Validation.Green.Icon"),Qe("Validation.Green.Border"),Qe("Validation.Green.Background"),Qe("Validation.Orange.Text"),Qe("Validation.Orange.Icon"),Qe("Validation.Orange.Border"),Qe("Validation.Orange.Background"),Qe("Validation.Orange.Badge"),Qe("Validation.Red.Text"),Qe("Validation.Red.Icon"),Qe("Validation.Red.Border"),Qe("Validation.Red.Background"),Qe("Validation.Blue.Text"),Qe("Validation.Blue.Icon"),Qe("Validation.Blue.Border"),Qe("Validation.Blue.Background"),Qe("Shadow.Accent"),Qe("Shadow.Red"),Qe("Shadow.Elevation"),{mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840}),rn=t=>Object.keys(nn).reduce(((e,n)=>{const r=nn[n];return e[n]=`@media screen and (${t}: ${r}px)`,e}),{}),on=rn("max-width"),an=(rn("min-width"),l.button`
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
        ${({$outline:t})=>"none"===t&&"outline: none;"}

        ${({$highlight:t})=>t&&c`
                background-color: ${en[7]};
            `}
    }
`),sn=r.forwardRef(((e,n)=>{var{children:r,focusHighlight:i=!0,focusOutline:o="none",type:a="button"}=e,s=h(e,["children","focusHighlight","focusOutline","type"]);return t(an,Object.assign({ref:n,$outline:o,$highlight:i,type:a},s,{children:r}))})),ln={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},cn={collections:{base:{D1:{fontFamily:ln.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:ln.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:ln.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:ln.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:ln.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:ln.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:ln.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:ln.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:ln.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:ln.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:ln.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:ln.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:ln.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:ln.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},un=t=>e=>{const n=e.theme,r=Ge(cn,n[Je.textStyleScheme]);return n.options&&n.options.textStyle?Xe(r,t,n.options.textStyle):Xe(r,t)},hn={D1:{fontFamily:un("D1.fontFamily"),fontSize:un("D1.fontSize"),fontWeight:un("D1.fontWeight"),lineHeight:un("D1.lineHeight"),letterSpacing:un("D1.letterSpacing")},D2:{fontFamily:un("D2.fontFamily"),fontSize:un("D2.fontSize"),fontWeight:un("D2.fontWeight"),lineHeight:un("D2.lineHeight"),letterSpacing:un("D2.letterSpacing")},D3:{fontFamily:un("D3.fontFamily"),fontSize:un("D3.fontSize"),fontWeight:un("D3.fontWeight"),lineHeight:un("D3.lineHeight"),letterSpacing:un("D3.letterSpacing")},D4:{fontFamily:un("D4.fontFamily"),fontSize:un("D4.fontSize"),fontWeight:un("D4.fontWeight"),lineHeight:un("D4.lineHeight"),letterSpacing:un("D4.letterSpacing")},DBody:{fontFamily:un("DBody.fontFamily"),fontSize:un("DBody.fontSize"),fontWeight:un("DBody.fontWeight"),lineHeight:un("DBody.lineHeight"),letterSpacing:un("DBody.letterSpacing")},H1:{fontFamily:un("H1.fontFamily"),fontSize:un("H1.fontSize"),fontWeight:un("H1.fontWeight"),lineHeight:un("H1.lineHeight"),letterSpacing:un("H1.letterSpacing")},H2:{fontFamily:un("H2.fontFamily"),fontSize:un("H2.fontSize"),fontWeight:un("H2.fontWeight"),lineHeight:un("H2.lineHeight"),letterSpacing:un("H2.letterSpacing")},H3:{fontFamily:un("H3.fontFamily"),fontSize:un("H3.fontSize"),fontWeight:un("H3.fontWeight"),lineHeight:un("H3.lineHeight"),letterSpacing:un("H3.letterSpacing")},H4:{fontFamily:un("H4.fontFamily"),fontSize:un("H4.fontSize"),fontWeight:un("H4.fontWeight"),lineHeight:un("H4.lineHeight"),letterSpacing:un("H4.letterSpacing")},H5:{fontFamily:un("H5.fontFamily"),fontSize:un("H5.fontSize"),fontWeight:un("H5.fontWeight"),lineHeight:un("H5.lineHeight"),letterSpacing:un("H5.letterSpacing")},H6:{fontFamily:un("H6.fontFamily"),fontSize:un("H6.fontSize"),fontWeight:un("H6.fontWeight"),lineHeight:un("H6.lineHeight"),letterSpacing:un("H6.letterSpacing")},Body:{fontFamily:un("Body.fontFamily"),fontSize:un("Body.fontSize"),fontWeight:un("Body.fontWeight"),lineHeight:un("Body.lineHeight"),letterSpacing:un("Body.letterSpacing")},BodySmall:{fontFamily:un("BodySmall.fontFamily"),fontSize:un("BodySmall.fontSize"),fontWeight:un("BodySmall.fontWeight"),lineHeight:un("BodySmall.lineHeight"),letterSpacing:un("BodySmall.letterSpacing")},XSmall:{fontFamily:un("XSmall.fontFamily"),fontSize:un("XSmall.fontSize"),fontWeight:un("XSmall.fontWeight"),lineHeight:un("XSmall.lineHeight"),letterSpacing:un("XSmall.letterSpacing")}},dn=t=>{switch(t){case 700:case"bold":return ln.Bold;case 600:case"semibold":return ln.Semibold;case 300:case"light":return ln.Light;case 400:case"regular":return ln.Regular;default:return""}},fn=(t,e)=>n=>{var r;const i=hn[t].fontFamily(n),o=hn[t].fontWeight(n);return Object.values(ln).includes(i)?c`
                font-family: ${dn(e)||dn(o)||i};
                font-weight: normal !important;
            `:c`
            font-family: ${i};
            font-weight: ${null!==(r=gn(e)||o)&&void 0!==r?r:"normal"};
        `},gn=t=>{switch(t){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},pn=(t,e,n=!1)=>r=>{const i=hn[t],o=i.fontSize(r);return c`
            ${fn(t,e)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${c`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},mn=(t=!1,e=!1)=>e?c`
            display: block;
        `:t?c`
            display: inline;
        `:c`
            display: block;
        `;var yn;!function(t){t.D1=l.h1`
        ${t=>c`
                ${pn("D1",t.weight,t.paragraph)}
                color: ${en[1]};
                ${mn(t.inline,t.paragraph)}
            `}
    `,t.D2=l.h1`
        ${t=>c`
                ${pn("D2",t.weight,t.paragraph)}
                color: ${en[1]};
                ${mn(t.inline,t.paragraph)}
            `}
    `,t.D3=l.h1`
        ${t=>c`
                ${pn("D3",t.weight,t.paragraph)}
                color: ${en[1]};
                ${mn(t.inline,t.paragraph)}
            `}
    `,t.D4=l.h1`
        ${t=>c`
                ${pn("D4",t.weight,t.paragraph)}
                color: ${en[1]};
                ${mn(t.inline,t.paragraph)}
            `}
    `,t.DBody=l.h1`
        ${t=>c`
                ${pn("DBody",t.weight,t.paragraph)}
                color: ${en[1]};
                ${mn(t.inline,t.paragraph)}
            `}
    `,t.H1=l.h1`
        ${t=>c`
                ${pn("H1",t.weight,t.paragraph)}
                color: ${en[1]};
                ${mn(t.inline,t.paragraph)}
            `}
    `,t.H2=l.h2`
        ${t=>c`
                ${pn("H2",t.weight,t.paragraph)}
                color: ${en[1]};
                ${mn(t.inline,t.paragraph)}
            `}
    `,t.H3=l.h3`
        ${t=>c`
                ${pn("H3",t.weight,t.paragraph)}
                color: ${en[1]};
                ${mn(t.inline,t.paragraph)}
            `}
    `,t.H4=l.h4`
        ${t=>c`
                ${pn("H4",t.weight,t.paragraph)}
                color: ${en[1]};
                ${mn(t.inline,t.paragraph)}
            `}
    `,t.H5=l.h5`
        ${t=>c`
                ${pn("H5",t.weight,t.paragraph)}
                color: ${en[1]};
                ${mn(t.inline,t.paragraph)}
            `}
    `,t.H6=l.h6`
        ${t=>c`
                ${pn("H6",t.weight,t.paragraph)}
                color: ${en[1]};
                ${mn(t.inline,t.paragraph)}
            `}
    `,t.Body=l.p`
        ${t=>c`
                ${pn("Body",t.weight,t.paragraph)}
                color: ${en[1]};
                ${mn(t.inline,t.paragraph)}
            `}
    `,t.BodySmall=l.p`
        ${t=>c`
                ${pn("BodySmall",t.weight,t.paragraph)}
                color: ${en[1]};
                ${mn(t.inline,t.paragraph)}
            `}
    `,t.XSmall=l.span`
        ${t=>c`
                ${pn("XSmall",t.weight,t.paragraph)}
                color: ${en[1]};
                ${mn(t.inline,t.paragraph)}
            `}
    `,t.Hyperlink={Default:t=>Sn(Object.assign(Object.assign({},t),{textStyle:"Body"})),Small:t=>Sn(Object.assign(Object.assign({},t),{textStyle:"BodySmall"}))}}(yn||(yn={}));const vn=l.a`
    ${t=>c`
            ${pn(t.textStyle,t.weight)}
            color: ${Ke};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${tn};

                svg {
                    color: ${tn};
                }
            }
        `}
`,$n=l(u)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Sn=n=>{var{external:r=!1,children:i}=n,o=h(n,["external","children"]);return e(vn,Object.assign({},o,{children:[i,r&&t($n,{})]}))};var Fn;!function(t){t[t.Subpage=0]="Subpage",t[t.Domain=1]="Domain"}(Fn||(Fn={}));const Dn=l.div`
    position: fixed;
    top: 0;

    display: flex;
    flex-direction: column;
    height: 100%;

    background-color: ${en[8]};
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

    ${on.desktopL} {
        width: 50%;
        min-width: 700px;
    }

    ${on.tablet} {
        width: 100%;
        min-width: unset;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
`,bn=l.div`
    top: 0;

    display: flex;
    align-items: center;
    gap: 1rem;
    height: 5rem;
    padding: 2rem 1rem 1rem;
    background-color: ${en[8]};
    border-bottom: 1px solid ${en[5]};

    ${on.tablet} {
        gap: 0.5rem;
        padding: 2rem 1.25rem 1rem;
    }
`,Bn=l(sn)`
    color: ${en[3]};
    padding: 0;
    order: -1; // show button on the left of the header

    :active,
    :focus {
        color: ${Ke};
    }

    svg {
        height: 2rem;
        width: 2rem;
    }
`,wn=l(yn.H2)`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`,Hn=l.div`
    flex: 1;
    overflow-y: auto;
`,xn=r=>{var{children:s,heading:l,show:c,onClose:u,onOverlayClick:d}=r,f=h(r,["children","heading","show","onClose","onOverlayClick"]);const[p,m]=i(c),[y]=i((()=>Y.generate())),v=o();a((()=>{if(!c){const t=setTimeout((()=>m(!1)),500);return()=>clearTimeout(t)}m(!0)}),[c]);return t(g,Object.assign({show:p,enableOverlayClick:!0,onOverlayClick:d},{children:e(Dn,Object.assign({$show:c,"data-testid":"drawer",onClick:t=>{t.stopPropagation()},role:"dialog","aria-labelledby":y,onTransitionEnd:t=>{"visibility"===t.propertyName&&c&&v.current.focus()}},f,{children:[e(bn,{children:[t(wn,Object.assign({id:y,ref:v,tabIndex:-1},{children:l})),t(Bn,Object.assign({"aria-label":"Close drawer",onClick:u,focusHighlight:!1},{children:t(n,{"aria-hidden":!0})}))]}),t(Hn,{children:s})]}))}))};export{xn as Drawer};
//# sourceMappingURL=index.js.map
