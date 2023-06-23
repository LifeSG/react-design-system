import t,{jsx as e,jsxs as n}from"react/jsx-runtime";import r,{useState as i,useRef as o,useEffect as a}from"react";import s from"react-dom";import l,{css as c}from"styled-components";var u,h="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},d={};Object.defineProperty(d,"__esModule",{value:!0});var f=t;const g=t=>f.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:f.jsx("path",{d:"M9.99991 11.229L5.97891 15.25C5.81224 15.4167 5.61091 15.4967 5.37491 15.49C5.13891 15.4827 4.93757 15.3957 4.77091 15.229C4.60424 15.0623 4.52091 14.8577 4.52091 14.615C4.52091 14.3717 4.60424 14.1667 4.77091 14L8.77091 10L4.74991 5.979C4.58324 5.81233 4.50324 5.60767 4.50991 5.365C4.51724 5.12167 4.60424 4.91667 4.77091 4.75C4.93757 4.58333 5.14224 4.5 5.38491 4.5C5.62824 4.5 5.83324 4.58333 5.99991 4.75L9.99991 8.771L14.0209 4.75C14.1876 4.58333 14.3922 4.5 14.6349 4.5C14.8782 4.5 15.0832 4.58333 15.2499 4.75C15.4166 4.91667 15.4999 5.12167 15.4999 5.365C15.4999 5.60767 15.4166 5.81233 15.2499 5.979L11.2289 10L15.2499 14.021C15.4166 14.1877 15.4999 14.389 15.4999 14.625C15.4999 14.861 15.4166 15.0623 15.2499 15.229C15.0832 15.3957 14.8782 15.479 14.6349 15.479C14.3922 15.479 14.1876 15.3957 14.0209 15.229L9.99991 11.229Z",fill:"currentColor"})});g.displayName="CrossIcon",u=d.CrossIcon=g;const p=l.div`
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
`,m=l.div`
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
`,y=({show:t=!1,rootId:n,onOverlayClick:l,children:c,backgroundOpacity:u,backgroundBlur:h=!0,disableTransition:d=!1,enableOverlayClick:f=!1,zIndex:g,id:y})=>{const[S,F]=i(null),[D,b]=i(),B=o(),w=o(null),H=c&&r.cloneElement(c,{ref:w}),x=y?`lifesg-ds-overlay-root-${y}`:"lifesg-ds-overlay-root";a((()=>{if(t){const t=_();if(C(t),!t){const t=setTimeout((()=>{z("add")}),200);return()=>clearTimeout(t)}}else if(!B.current){const t=setTimeout((()=>{z("remove")}),200);return()=>clearTimeout(t)}}),[t]),a((()=>{F(M());const t=_();return C(t),t||O(),()=>{z("remove")}}),[]);const C=t=>{B.current=t,b(t)},M=()=>document&&n?document.getElementById(n):document?document.body:null,_=()=>document.body.classList.contains($),O=()=>{if(!document.getElementById(v)){const t=document.createElement("style");t.id=v;const e=document.documentElement.clientWidth,n=window.innerWidth-e;t.innerHTML=`\n\t\t\t\t.${$} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${n}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${$}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(t)}},z=t=>{const e=document.body.classList.contains($);"add"!==t||e?"remove"===t&&e&&document.body.classList.remove($):document.body.classList.add($)},E=t=>{const e=w.current?.firstChild;e&&e.contains(t.target)||l&&f&&(t.preventDefault(),l())};return S?s.createPortal(e(p,{id:x,"data-testid":x,$show:t,zIndex:g,$stacked:D,children:c&&e(m,{"data-testid":"overlay-wrapper",$show:t,$backgroundOpacity:u||(D?.5:.8),$backgroundBlur:h,$disableTransition:d,$enableOverlayClick:f,onClick:E,children:H})}),S):null},v="lifesg-ds-overlay-stylesheet",$="lifesg-ds-overlay-open";var S={exports:{}};S.exports=function(){var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},e=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},a=function(t){return(t=+t)+(t>68?1900:2e3)},s=function(t){return function(e){this[t]=+e}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(t){(this.zone||(this.zone={})).offset=function(t){if(!t)return 0;if("Z"===t)return 0;var e=t.match(/([+-]|\d\d)/g),n=60*e[1]+(+e[2]||0);return 0===n?0:"+"===e[0]?-n:n}(t)}],c=function(t){var e=o[t];return e&&(e.indexOf?e:e.s.concat(e.f))},u=function(t,e){var n,r=o.meridiem;if(r){for(var i=1;i<=24;i+=1)if(t.indexOf(r(i,0,e))>-1){n=i>12;break}}else n=t===(e?"pm":"PM");return n},h={A:[i,function(t){this.afternoon=u(t,!1)}],a:[i,function(t){this.afternoon=u(t,!0)}],S:[/\d/,function(t){this.milliseconds=100*+t}],SS:[n,function(t){this.milliseconds=10*+t}],SSS:[/\d{3}/,function(t){this.milliseconds=+t}],s:[r,s("seconds")],ss:[r,s("seconds")],m:[r,s("minutes")],mm:[r,s("minutes")],H:[r,s("hours")],h:[r,s("hours")],HH:[r,s("hours")],hh:[r,s("hours")],D:[r,s("day")],DD:[n,s("day")],Do:[i,function(t){var e=o.ordinal,n=t.match(/\d+/);if(this.day=n[0],e)for(var r=1;r<=31;r+=1)e(r).replace(/\[|\]/g,"")===t&&(this.day=r)}],M:[r,s("month")],MM:[n,s("month")],MMM:[i,function(t){var e=c("months"),n=(c("monthsShort")||e.map((function(t){return t.slice(0,3)}))).indexOf(t)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(t){var e=c("months").indexOf(t)+1;if(e<1)throw new Error;this.month=e%12||e}],Y:[/[+-]?\d+/,s("year")],YY:[n,function(t){this.year=a(t)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function d(n){var r,i;r=n,i=o&&o.formats;for(var a=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(e,n,r){var o=r&&r.toUpperCase();return n||i[r]||t[r]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(t,e,n){return e||n.slice(1)}))}))).match(e),s=a.length,l=0;l<s;l+=1){var c=a[l],u=h[c],d=u&&u[0],f=u&&u[1];a[l]=f?{regex:d,parser:f}:c.replace(/^\[|\]$/g,"")}return function(t){for(var e={},n=0,r=0;n<s;n+=1){var i=a[n];if("string"==typeof i)r+=i.length;else{var o=i.regex,l=i.parser,c=t.slice(r),u=o.exec(c)[0];l.call(e,u),t=t.replace(u,"")}}return function(t){var e=t.afternoon;if(void 0!==e){var n=t.hours;e?n<12&&(t.hours+=12):12===n&&(t.hours=0),delete t.afternoon}}(e),e}}return function(t,e,n){n.p.customParseFormat=!0,t&&t.parseTwoDigitYear&&(a=t.parseTwoDigitYear);var r=e.prototype,i=r.parse;r.parse=function(t){var e=t.date,r=t.utc,a=t.args;this.$u=r;var s=a[1];if("string"==typeof s){var l=!0===a[2],c=!0===a[3],u=l||c,h=a[2];c&&(h=a[2]),o=this.$locale(),!l&&h&&(o=n.Ls[h]),this.$d=function(t,e,n){try{if(["x","X"].indexOf(e)>-1)return new Date(("X"===e?1e3:1)*t);var r=d(e)(t),i=r.year,o=r.month,a=r.day,s=r.hours,l=r.minutes,c=r.seconds,u=r.milliseconds,h=r.zone,f=new Date,g=a||(i||o?1:f.getDate()),p=i||f.getFullYear(),m=0;i&&!o||(m=o>0?o-1:f.getMonth());var y=s||0,v=l||0,$=c||0,S=u||0;return h?new Date(Date.UTC(p,m,g,y,v,$,S+60*h.offset*1e3)):n?new Date(Date.UTC(p,m,g,y,v,$,S)):new Date(p,m,g,y,v,$,S)}catch(t){return new Date("")}}(e,s,r),this.init(),h&&!0!==h&&(this.$L=this.locale(h).$L),u&&e!=this.format(s)&&(this.$d=new Date("")),o={}}else if(s instanceof Array)for(var f=s.length,g=1;g<=f;g+=1){a[1]=s[g-1];var p=n.apply(this,a);if(p.isValid()){this.$d=p.$d,this.$L=p.$L,this.init();break}g===f&&(this.$d=new Date(""))}else i.call(this,t)}}}();var F=S.exports,D={exports:{}};D.exports=function(){var t={year:0,month:1,day:2,hour:3,minute:4,second:5},e={};return function(n,r,i){var o,a=function(t,n,r){void 0===r&&(r={});var i=new Date(t),o=function(t,n){void 0===n&&(n={});var r=n.timeZoneName||"short",i=t+"|"+r,o=e[i];return o||(o=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:t,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:r}),e[i]=o),o}(n,r);return o.formatToParts(i)},s=function(e,n){for(var r=a(e,n),o=[],s=0;s<r.length;s+=1){var l=r[s],c=l.type,u=l.value,h=t[c];h>=0&&(o[h]=parseInt(u,10))}var d=o[3],f=24===d?0:d,g=o[0]+"-"+o[1]+"-"+o[2]+" "+f+":"+o[4]+":"+o[5]+":000",p=+e;return(i.utc(g).valueOf()-(p-=p%1e3))/6e4},l=r.prototype;l.tz=function(t,e){void 0===t&&(t=o);var n=this.utcOffset(),r=this.toDate(),a=r.toLocaleString("en-US",{timeZone:t}),s=Math.round((r-new Date(a))/1e3/60),l=i(a).$set("millisecond",this.$ms).utcOffset(15*-Math.round(r.getTimezoneOffset()/15)-s,!0);if(e){var c=l.utcOffset();l=l.add(n-c,"minute")}return l.$x.$timezone=t,l},l.offsetName=function(t){var e=this.$x.$timezone||i.tz.guess(),n=a(this.valueOf(),e,{timeZoneName:t}).find((function(t){return"timezonename"===t.type.toLowerCase()}));return n&&n.value};var c=l.startOf;l.startOf=function(t,e){if(!this.$x||!this.$x.$timezone)return c.call(this,t,e);var n=i(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return c.call(n,t,e).tz(this.$x.$timezone,!0)},i.tz=function(t,e,n){var r=n&&e,a=n||e||o,l=s(+i(),a);if("string"!=typeof t)return i(t).tz(a);var c=function(t,e,n){var r=t-60*e*1e3,i=s(r,n);if(e===i)return[r,e];var o=s(r-=60*(i-e)*1e3,n);return i===o?[r,i]:[t-60*Math.min(i,o)*1e3,Math.max(i,o)]}(i.utc(t,r).valueOf(),l,a),u=c[0],h=c[1],d=i(u).utcOffset(h);return d.$x.$timezone=a,d},i.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},i.tz.setDefault=function(t){o=t}}}();var b=D.exports,B={exports:{}};B.exports=function(){var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",o="minute",a="hour",s="day",l="week",c="month",u="quarter",h="year",d="date",f="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},y=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},v={s:y,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+y(r,2,"0")+":"+y(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),o=n-i<0,a=e.clone().add(r+(o?-1:1),c);return+(-(r+(n-i)/(o?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:h,w:l,d:s,D:d,h:a,m:o,s:i,ms:r,Q:u}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},$="en",S={};S[$]=m;var F=function(t){return t instanceof w},D=function t(e,n,r){var i;if(!e)return $;if("string"==typeof e){var o=e.toLowerCase();S[o]&&(i=o),n&&(S[o]=n,i=o);var a=e.split("-");if(!i&&a.length>1)return t(a[0])}else{var s=e.name;S[s]=e,i=s}return!r&&i&&($=i),i||!r&&$},b=function(t,e){if(F(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new w(n)},B=v;B.l=D,B.i=F,B.w=function(t,e){return b(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var w=function(){function m(t){this.$L=D(t.locale,null,!0),this.parse(t)}var y=m.prototype;return y.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(B.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(g);if(r){var i=r[2]-1||0,o=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},y.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},y.$utils=function(){return B},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(t,e){var n=b(t);return this.startOf(e)<=n&&n<=this.endOf(e)},y.isAfter=function(t,e){return b(t)<this.startOf(e)},y.isBefore=function(t,e){return this.endOf(e)<b(t)},y.$g=function(t,e,n){return B.u(t)?this[e]:this.set(n,t)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(t,e){var n=this,r=!!B.u(e)||e,u=B.p(t),f=function(t,e){var i=B.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(s)},g=function(t,e){return B.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},p=this.$W,m=this.$M,y=this.$D,v="set"+(this.$u?"UTC":"");switch(u){case h:return r?f(1,0):f(31,11);case c:return r?f(1,m):f(0,m+1);case l:var $=this.$locale().weekStart||0,S=(p<$?p+7:p)-$;return f(r?y-S:y+(6-S),m);case s:case d:return g(v+"Hours",0);case a:return g(v+"Minutes",1);case o:return g(v+"Seconds",2);case i:return g(v+"Milliseconds",3);default:return this.clone()}},y.endOf=function(t){return this.startOf(t,!1)},y.$set=function(t,e){var n,l=B.p(t),u="set"+(this.$u?"UTC":""),f=(n={},n[s]=u+"Date",n[d]=u+"Date",n[c]=u+"Month",n[h]=u+"FullYear",n[a]=u+"Hours",n[o]=u+"Minutes",n[i]=u+"Seconds",n[r]=u+"Milliseconds",n)[l],g=l===s?this.$D+(e-this.$W):e;if(l===c||l===h){var p=this.clone().set(d,1);p.$d[f](g),p.init(),this.$d=p.set(d,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f](g);return this.init(),this},y.set=function(t,e){return this.clone().$set(t,e)},y.get=function(t){return this[B.p(t)]()},y.add=function(r,u){var d,f=this;r=Number(r);var g=B.p(u),p=function(t){var e=b(f);return B.w(e.date(e.date()+Math.round(t*r)),f)};if(g===c)return this.set(c,this.$M+r);if(g===h)return this.set(h,this.$y+r);if(g===s)return p(1);if(g===l)return p(7);var m=(d={},d[o]=e,d[a]=n,d[i]=t,d)[g]||1,y=this.$d.getTime()+r*m;return B.w(y,this)},y.subtract=function(t,e){return this.add(-1*t,e)},y.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=B.z(this),o=this.$H,a=this.$m,s=this.$M,l=n.weekdays,c=n.months,u=function(t,n,i,o){return t&&(t[n]||t(e,r))||i[n].slice(0,o)},h=function(t){return B.s(o%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},g={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:B.s(s+1,2,"0"),MMM:u(n.monthsShort,s,c,3),MMMM:u(c,s),D:this.$D,DD:B.s(this.$D,2,"0"),d:String(this.$W),dd:u(n.weekdaysMin,this.$W,l,2),ddd:u(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(o),HH:B.s(o,2,"0"),h:h(1),hh:h(2),a:d(o,a,!0),A:d(o,a,!1),m:String(a),mm:B.s(a,2,"0"),s:String(this.$s),ss:B.s(this.$s,2,"0"),SSS:B.s(this.$ms,3,"0"),Z:i};return r.replace(p,(function(t,e){return e||g[t]||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,d,f){var g,p=B.p(d),m=b(r),y=(m.utcOffset()-this.utcOffset())*e,v=this-m,$=B.m(this,m);return $=(g={},g[h]=$/12,g[c]=$,g[u]=$/3,g[l]=(v-y)/6048e5,g[s]=(v-y)/864e5,g[a]=v/n,g[o]=v/e,g[i]=v/t,g)[p]||v,f?$:B.a($)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return S[this.$L]},y.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=D(t,e,!0);return r&&(n.$L=r),n},y.clone=function(){return B.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),H=w.prototype;return b.prototype=H,[["$ms",r],["$s",i],["$m",o],["$H",a],["$W",s],["$M",c],["$y",h],["$D",d]].forEach((function(t){H[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),b.extend=function(t,e){return t.$i||(t(e,w,b),t.$i=!0),b},b.locale=D,b.isDayjs=F,b.unix=function(t){return b(1e3*t)},b.en=S[$],b.Ls=S,b.p={},b}();var w=B.exports,H={exports:{}};H.exports=function(t,e,n){e.prototype.isBetween=function(t,e,r,i){var o=n(t),a=n(e),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(o,r):!this.isBefore(o,r))&&(l?this.isBefore(a,r):!this.isAfter(a,r))||(s?this.isBefore(o,r):!this.isAfter(o,r))&&(l?this.isAfter(a,r):!this.isBefore(a,r))}};var x=H.exports,C={exports:{}};C.exports=function(t,e){e.prototype.isSameOrBefore=function(t,e){return this.isSame(t,e)||this.isBefore(t,e)}};var M=C.exports,_={exports:{}};_.exports=function(t,e){e.prototype.isSameOrAfter=function(t,e){return this.isSame(t,e)||this.isAfter(t,e)}};var O,z=_.exports;w.extend(x),w.extend(M),w.extend(z),w.extend(F),w.extend(b),function(t){t.generateDays=t=>{const e=t.startOf("month"),n=w(e).startOf("week");return E(n).map((t=>k(t)))},t.generateDaysForCurrentWeek=t=>{const e=t.startOf("week");return k(e)},t.generateMonths=t=>{const e=[];for(let n=0;n<12;n++){const r=t.month(n);e.push(w(r))}return e},t.generateDecadeOfYears=t=>{const e=t.year(),n=10*Math.floor(e/10),r=t.year(n),i=[r.subtract(1,"year"),r];for(let t=1;t<11;t++)i.push(r.add(t,"year"));return i},t.getStartEndDecade=t=>{const e=10*Math.floor(+t.format("YYYY")/10);return{beginDecade:e,endDecade:+w(`${e+9}-01-01`).format("YYYY")}},t.convertTo12HourFormat=t=>{const e=w(t,"HH:mm");return e.isValid()?e.format("h:mm a"):""},t.isWithinRange=(t,e,n,r="day")=>!e&&!n||(e&&n?t.isBetween(e,n,r,"[]"):e?t.isSameOrAfter(e,r):t.isSameOrBefore(n,r)),t.isPreviousMonthWithinRange=(e,n)=>t.isWithinRange(e.subtract(1,"month"),n,void 0,"month"),t.isPreviousYearWithinRange=(e,n)=>t.isWithinRange(e.subtract(1,"year"),n,void 0,"year"),t.isPreviousDecadeWithinRange=(e,n)=>{const{beginDecade:r}=t.getStartEndDecade(e);return t.isWithinRange(e.year(r).subtract(1,"year"),n,void 0,"year")},t.isNextMonthWithinRange=(e,n)=>t.isWithinRange(e.add(1,"month"),void 0,n,"month"),t.isNextYearWithinRange=(e,n)=>t.isWithinRange(e.add(1,"year"),void 0,n,"year"),t.isNextDecadeWithinRange=(e,n)=>{const{endDecade:r}=t.getStartEndDecade(e);return t.isWithinRange(e.year(r).add(1,"year"),void 0,n,"year")}}(O||(O={}));const E=t=>{const e=[t];for(let n=1;n<6;n++){const r=t.add(n,"week");e.push(r)}return e},k=t=>{const e=[];for(let n=0;n<7;n++){const r=t.add(n,"day");e.push(r)}return e},A=[1,3,5,7,8,10,12],W=[4,6,9,11];var L,T,Y;!function(t){t.clampDay=(e,n,r)=>{const i=parseInt(e),o=parseInt(n),a=parseInt(r);return 0==i?"1":A.includes(o)?Math.min(i,31).toString():W.includes(o)?Math.min(i,30).toString():2===o?t.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():e},t.clampMonth=t=>{const e=parseInt(t);return 0==e?"1":e>12?"12":t},t.isLeapYear=t=>t%4==0&&t%100!=0||t%400==0,t.getTimeDiffInMinutes=(t,e,n="HH:mm")=>{const r=w(t,n);return w(e,n).diff(r,"minute")}}(L||(L={})),function(t){t.generate=()=>Math.random().toString(36).substring(2,9)}(T||(T={})),function(t){t.transformWithSpaces=(t,e)=>{const n="(.{"+e+"})";return t.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},t.padValue=(t,e)=>{if("0"===t)return e?t:t.padStart(2,"0");if(""===t)return t;return parseInt(t).toString().padStart(2,"0")},t.shouldTruncateToTwoLines=(t,e)=>{const n=Math.floor(e/9);return t.length>=2*n||1===t.split(" ").length&&t.length>n},t.truncateOneLine=(t,e,n,r)=>{let i=0;e>n&&(i=Math.floor((e-n)/8));const o=r+i;if(o<t.length){const e=Math.floor(o/2);return t.substring(0,e)+" ... "+t.substring(t.length-e,t.length)}return t}}(Y||(Y={}));var I=Array.isArray,j="object"==typeof h&&h&&h.Object===Object&&h,V="object"==typeof self&&self&&self.Object===Object&&self,R=j||V||Function("return this")(),N=R.Symbol,P=N,Z=Object.prototype,U=Z.hasOwnProperty,X=Z.toString,G=P?P.toStringTag:void 0;var J=function(t){var e=U.call(t,G),n=t[G];try{t[G]=void 0;var r=!0}catch(t){}var i=X.call(t);return r&&(e?t[G]=n:delete t[G]),i},q=Object.prototype.toString;var Q=J,K=function(t){return q.call(t)},tt=N?N.toStringTag:void 0;var et=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":tt&&tt in Object(t)?Q(t):K(t)};var nt=et,rt=function(t){return null!=t&&"object"==typeof t};var it=function(t){return"symbol"==typeof t||rt(t)&&"[object Symbol]"==nt(t)},ot=I,at=it,st=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,lt=/^\w*$/;var ct=function(t,e){if(ot(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!at(t))||(lt.test(t)||!st.test(t)||null!=e&&t in Object(e))};var ut=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},ht=et,dt=ut;var ft,gt=function(t){if(!dt(t))return!1;var e=ht(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},pt=R["__core-js_shared__"],mt=(ft=/[^.]+$/.exec(pt&&pt.keys&&pt.keys.IE_PROTO||""))?"Symbol(src)_1."+ft:"";var yt=function(t){return!!mt&&mt in t},vt=Function.prototype.toString;var $t=gt,St=yt,Ft=ut,Dt=function(t){if(null!=t){try{return vt.call(t)}catch(t){}try{return t+""}catch(t){}}return""},bt=/^\[object .+?Constructor\]$/,Bt=Function.prototype,wt=Object.prototype,Ht=Bt.toString,xt=wt.hasOwnProperty,Ct=RegExp("^"+Ht.call(xt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Mt=function(t){return!(!Ft(t)||St(t))&&($t(t)?Ct:bt).test(Dt(t))},_t=function(t,e){return null==t?void 0:t[e]};var Ot=function(t,e){var n=_t(t,e);return Mt(n)?n:void 0},zt=Ot(Object,"create"),Et=zt;var kt=function(){this.__data__=Et?Et(null):{},this.size=0};var At=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},Wt=zt,Lt=Object.prototype.hasOwnProperty;var Tt=function(t){var e=this.__data__;if(Wt){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return Lt.call(e,t)?e[t]:void 0},Yt=zt,It=Object.prototype.hasOwnProperty;var jt=zt;var Vt=kt,Rt=At,Nt=Tt,Pt=function(t){var e=this.__data__;return Yt?void 0!==e[t]:It.call(e,t)},Zt=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=jt&&void 0===e?"__lodash_hash_undefined__":e,this};function Ut(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Ut.prototype.clear=Vt,Ut.prototype.delete=Rt,Ut.prototype.get=Nt,Ut.prototype.has=Pt,Ut.prototype.set=Zt;var Xt=Ut;var Gt=function(){this.__data__=[],this.size=0};var Jt=function(t,e){return t===e||t!=t&&e!=e};var qt=function(t,e){for(var n=t.length;n--;)if(Jt(t[n][0],e))return n;return-1},Qt=qt,Kt=Array.prototype.splice;var te=qt;var ee=qt;var ne=qt;var re=Gt,ie=function(t){var e=this.__data__,n=Qt(e,t);return!(n<0)&&(n==e.length-1?e.pop():Kt.call(e,n,1),--this.size,!0)},oe=function(t){var e=this.__data__,n=te(e,t);return n<0?void 0:e[n][1]},ae=function(t){return ee(this.__data__,t)>-1},se=function(t,e){var n=this.__data__,r=ne(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};function le(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}le.prototype.clear=re,le.prototype.delete=ie,le.prototype.get=oe,le.prototype.has=ae,le.prototype.set=se;var ce=le,ue=Ot(R,"Map"),he=Xt,de=ce,fe=ue;var ge=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var pe=function(t,e){var n=t.__data__;return ge(e)?n["string"==typeof e?"string":"hash"]:n.map},me=pe;var ye=pe;var ve=pe;var $e=pe;var Se=function(){this.size=0,this.__data__={hash:new he,map:new(fe||de),string:new he}},Fe=function(t){var e=me(this,t).delete(t);return this.size-=e?1:0,e},De=function(t){return ye(this,t).get(t)},be=function(t){return ve(this,t).has(t)},Be=function(t,e){var n=$e(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function we(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}we.prototype.clear=Se,we.prototype.delete=Fe,we.prototype.get=De,we.prototype.has=be,we.prototype.set=Be;var He=we;function xe(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=t.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(xe.Cache||He),n}xe.Cache=He;var Ce=xe;var Me=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,_e=/\\(\\)?/g,Oe=function(t){var e=Ce(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(Me,(function(t,n,r,i){e.push(r?i.replace(_e,"$1"):n||t)})),e}));var ze=function(t,e){for(var n=-1,r=null==t?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i},Ee=I,ke=it,Ae=N?N.prototype:void 0,We=Ae?Ae.toString:void 0;var Le=function t(e){if("string"==typeof e)return e;if(Ee(e))return ze(e,t)+"";if(ke(e))return We?We.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n},Te=Le;var Ye=I,Ie=ct,je=Oe,Ve=function(t){return null==t?"":Te(t)};var Re=it;var Ne=function(t,e){return Ye(t)?t:Ie(t,e)?[t]:je(Ve(t))},Pe=function(t){if("string"==typeof t||Re(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e};var Ze=function(t,e){for(var n=0,r=(e=Ne(e,t)).length;null!=t&&n<r;)t=t[Pe(e[n++])];return n&&n==r?t:void 0};var Ue=function(t,e,n){var r=null==t?void 0:Ze(t,e);return void 0===r?n:r};const Xe=(t,e,n)=>e?Ue(n,e)||Ue(t,e):n||t,Ge=(t,e)=>{const n=e||t.defaultValue;return Ue(t.collections,n)};var Je;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme",t.designTokenScheme="designTokenScheme",t.resourceScheme="resourceScheme"}(Je||(Je={}));const qe={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Qe=t=>e=>{const n=e.theme,r=Ge(qe,n[Je.colorScheme]);return n.options&&n.options.color?Xe(r,t,n.options.color):Xe(r,t)},Ke=(Qe("Brand.1"),Qe("Brand.2"),Qe("Brand.3"),Qe("Brand.4"),Qe("Brand.5"),Qe("Brand.6"),Qe("Primary")),tn=(Qe("PrimaryDark"),Qe("Secondary")),en=(Qe("Accent.Light.1"),Qe("Accent.Light.2"),Qe("Accent.Light.3"),Qe("Accent.Light.4"),Qe("Accent.Light.5"),Qe("Accent.Light.6"),Qe("Accent.Dark.1"),Qe("Accent.Dark.2"),Qe("Accent.Dark.3"),{1:Qe("Neutral.1"),2:Qe("Neutral.2"),3:Qe("Neutral.3"),4:Qe("Neutral.4"),5:Qe("Neutral.5"),6:Qe("Neutral.6"),7:Qe("Neutral.7"),8:Qe("Neutral.8")}),nn=(Qe("Validation.Green.Text"),Qe("Validation.Green.Icon"),Qe("Validation.Green.Border"),Qe("Validation.Green.Background"),Qe("Validation.Orange.Text"),Qe("Validation.Orange.Icon"),Qe("Validation.Orange.Border"),Qe("Validation.Orange.Background"),Qe("Validation.Orange.Badge"),Qe("Validation.Red.Text"),Qe("Validation.Red.Icon"),Qe("Validation.Red.Border"),Qe("Validation.Red.Background"),Qe("Validation.Blue.Text"),Qe("Validation.Blue.Icon"),Qe("Validation.Blue.Border"),Qe("Validation.Blue.Background"),Qe("Shadow.Accent"),Qe("Shadow.Red"),Qe("Shadow.Elevation"),{mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840}),rn=t=>Object.keys(nn).reduce(((e,n)=>{const r=nn[n];return e[n]=`@media screen and (${t}: ${r}px)`,e}),{}),on=rn("max-width"),an=(rn("min-width"),l.button`
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
`),sn=r.forwardRef((({children:t,focusHighlight:n=!0,focusOutline:r="none",type:i="button",...o},a)=>e(an,{ref:a,$outline:r,$highlight:n,type:i,...o,children:t}))),ln={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},cn={collections:{base:{D1:{fontFamily:ln.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:ln.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:ln.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:ln.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:ln.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:ln.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:ln.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:ln.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:ln.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:ln.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:ln.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:ln.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:ln.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:ln.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},un=t=>e=>{const n=e.theme,r=Ge(cn,n[Je.textStyleScheme]);return n.options&&n.options.textStyle?Xe(r,t,n.options.textStyle):Xe(r,t)},hn={D1:{fontFamily:un("D1.fontFamily"),fontSize:un("D1.fontSize"),fontWeight:un("D1.fontWeight"),lineHeight:un("D1.lineHeight"),letterSpacing:un("D1.letterSpacing")},D2:{fontFamily:un("D2.fontFamily"),fontSize:un("D2.fontSize"),fontWeight:un("D2.fontWeight"),lineHeight:un("D2.lineHeight"),letterSpacing:un("D2.letterSpacing")},D3:{fontFamily:un("D3.fontFamily"),fontSize:un("D3.fontSize"),fontWeight:un("D3.fontWeight"),lineHeight:un("D3.lineHeight"),letterSpacing:un("D3.letterSpacing")},D4:{fontFamily:un("D4.fontFamily"),fontSize:un("D4.fontSize"),fontWeight:un("D4.fontWeight"),lineHeight:un("D4.lineHeight"),letterSpacing:un("D4.letterSpacing")},DBody:{fontFamily:un("DBody.fontFamily"),fontSize:un("DBody.fontSize"),fontWeight:un("DBody.fontWeight"),lineHeight:un("DBody.lineHeight"),letterSpacing:un("DBody.letterSpacing")},H1:{fontFamily:un("H1.fontFamily"),fontSize:un("H1.fontSize"),fontWeight:un("H1.fontWeight"),lineHeight:un("H1.lineHeight"),letterSpacing:un("H1.letterSpacing")},H2:{fontFamily:un("H2.fontFamily"),fontSize:un("H2.fontSize"),fontWeight:un("H2.fontWeight"),lineHeight:un("H2.lineHeight"),letterSpacing:un("H2.letterSpacing")},H3:{fontFamily:un("H3.fontFamily"),fontSize:un("H3.fontSize"),fontWeight:un("H3.fontWeight"),lineHeight:un("H3.lineHeight"),letterSpacing:un("H3.letterSpacing")},H4:{fontFamily:un("H4.fontFamily"),fontSize:un("H4.fontSize"),fontWeight:un("H4.fontWeight"),lineHeight:un("H4.lineHeight"),letterSpacing:un("H4.letterSpacing")},H5:{fontFamily:un("H5.fontFamily"),fontSize:un("H5.fontSize"),fontWeight:un("H5.fontWeight"),lineHeight:un("H5.lineHeight"),letterSpacing:un("H5.letterSpacing")},H6:{fontFamily:un("H6.fontFamily"),fontSize:un("H6.fontSize"),fontWeight:un("H6.fontWeight"),lineHeight:un("H6.lineHeight"),letterSpacing:un("H6.letterSpacing")},Body:{fontFamily:un("Body.fontFamily"),fontSize:un("Body.fontSize"),fontWeight:un("Body.fontWeight"),lineHeight:un("Body.lineHeight"),letterSpacing:un("Body.letterSpacing")},BodySmall:{fontFamily:un("BodySmall.fontFamily"),fontSize:un("BodySmall.fontSize"),fontWeight:un("BodySmall.fontWeight"),lineHeight:un("BodySmall.lineHeight"),letterSpacing:un("BodySmall.letterSpacing")},XSmall:{fontFamily:un("XSmall.fontFamily"),fontSize:un("XSmall.fontSize"),fontWeight:un("XSmall.fontWeight"),lineHeight:un("XSmall.lineHeight"),letterSpacing:un("XSmall.letterSpacing")}},dn=t=>{switch(t){case 700:case"bold":return ln.Bold;case 600:case"semibold":return ln.Semibold;case 300:case"light":return ln.Light;case 400:case"regular":return ln.Regular;default:return""}},fn=(t,e)=>n=>{const r=hn[t].fontFamily(n),i=hn[t].fontWeight(n);return Object.values(ln).includes(r)?c`
                font-family: ${dn(e)||dn(i)||r};
                font-weight: normal !important;
            `:c`
            font-family: ${r};
            font-weight: ${(gn(e)||i)??"normal"};
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
        `;var yn,vn={};Object.defineProperty(vn,"__esModule",{value:!0});var $n=t;const Sn=t=>$n.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:$n.jsx("path",{d:"M4.25 17.5C3.764 17.5 3.35067 17.33 3.01 16.99C2.67 16.6493 2.5 16.236 2.5 15.75V4.25C2.5 3.764 2.67 3.35067 3.01 3.01C3.35067 2.67 3.764 2.5 4.25 2.5H9.208C9.444 2.5 9.649 2.58667 9.823 2.76C9.99633 2.934 10.083 3.139 10.083 3.375C10.083 3.611 9.99633 3.816 9.823 3.99C9.649 4.16333 9.444 4.25 9.208 4.25H4.25V15.75H15.75V10.792C15.75 10.556 15.8367 10.351 16.01 10.177C16.184 10.0037 16.389 9.917 16.625 9.917C16.861 9.917 17.066 10.0037 17.24 10.177C17.4133 10.351 17.5 10.556 17.5 10.792V15.75C17.5 16.236 17.33 16.6493 16.99 16.99C16.6493 17.33 16.236 17.5 15.75 17.5H4.25ZM7.5 12.5C7.33333 12.3333 7.25 12.1283 7.25 11.885C7.25 11.6423 7.33333 11.4377 7.5 11.271L14.521 4.25H12.708C12.472 4.25 12.2673 4.16333 12.094 3.99C11.92 3.816 11.833 3.611 11.833 3.375C11.833 3.139 11.92 2.934 12.094 2.76C12.2673 2.58667 12.472 2.5 12.708 2.5H16.625C16.861 2.5 17.066 2.58667 17.24 2.76C17.4133 2.934 17.5 3.139 17.5 3.375V7.292C17.5 7.528 17.4133 7.73267 17.24 7.906C17.066 8.08 16.861 8.167 16.625 8.167C16.389 8.167 16.184 8.08 16.01 7.906C15.8367 7.73267 15.75 7.528 15.75 7.292V5.479L8.708 12.521C8.54133 12.6877 8.34367 12.771 8.115 12.771C7.88567 12.771 7.68067 12.6807 7.5 12.5Z",fill:"currentColor"})});var Fn;Sn.displayName="ExternalIcon",yn=vn.ExternalIcon=Sn,function(t){t.D1=l.h1`
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
    `,t.Hyperlink={Default:t=>Bn({...t,textStyle:"Body"}),Small:t=>Bn({...t,textStyle:"BodySmall"})}}(Fn||(Fn={}));const Dn=l.a`
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
`,bn=l(yn)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Bn=({external:t=!1,children:r,...i})=>n(Dn,{...i,children:[r,t&&e(bn,{})]});var wn;!function(t){t[t.Subpage=0]="Subpage",t[t.Domain=1]="Domain"}(wn||(wn={}));const Hn=l.div`
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
`,xn=l.div`
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
`,Cn=l(sn)`
    color: ${en[1]};
    padding: 0;

    :active,
    :focus {
        color: ${Ke};
    }

    svg {
        height: 2rem;
        width: 2rem;
    }
`,Mn=l(Fn.H2)`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`,_n=l.div`
    flex: 1;
    overflow-y: auto;
`,On=({children:t,heading:r,show:s,onClose:l,onOverlayClick:c,...h})=>{const[d,f]=i(s),[g]=i((()=>T.generate())),p=o();a((()=>{if(!s){const t=setTimeout((()=>f(!1)),500);return()=>clearTimeout(t)}f(!0)}),[s]);return e(y,{show:d,enableOverlayClick:!0,onOverlayClick:c,children:n(Hn,{$show:s,"data-testid":"drawer",onClick:t=>{t.stopPropagation()},role:"dialog","aria-labelledby":g,onTransitionEnd:t=>{"visibility"===t.propertyName&&s&&p.current.focus()},...h,children:[n(xn,{children:[e(Cn,{"aria-label":"Close drawer",onClick:l,focusHighlight:!1,ref:p,children:e(u,{"aria-hidden":!0})}),e(Mn,{id:g,children:r})]}),e(_n,{children:t})]})})};export{On as Drawer};
//# sourceMappingURL=index.js.map
