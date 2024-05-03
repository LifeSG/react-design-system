import{jsx as t,jsxs as e,Fragment as r}from"react/jsx-runtime";import*as n from"react";import i,{useRef as o,useState as a,isValidElement as l,createRef as s,cloneElement as c,PureComponent as u,useEffect as f,useLayoutEffect as d}from"react";import{findDOMNode as h}from"react-dom";import{ChevronLeftIcon as g}from"@lifesg/react-icons/chevron-left";import{ChevronRightIcon as p}from"@lifesg/react-icons/chevron-right";import m,{css as y}from"styled-components";import{ExternalIcon as v}from"@lifesg/react-icons/external";var F="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function $(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var D={exports:{}};D.exports=function(){var t=1e3,e=6e4,r=36e5,n="millisecond",i="second",o="minute",a="hour",l="day",s="week",c="month",u="quarter",f="year",d="date",h="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],r=t%100;return"["+t+(e[(r-20)%10]||e[r]||e[0])+"]"}},y=function(t,e,r){var n=String(t);return!n||n.length>=e?t:""+Array(e+1-n.length).join(r)+t},v={s:y,z:function(t){var e=-t.utcOffset(),r=Math.abs(e),n=Math.floor(r/60),i=r%60;return(e<=0?"+":"-")+y(n,2,"0")+":"+y(i,2,"0")},m:function t(e,r){if(e.date()<r.date())return-t(r,e);var n=12*(r.year()-e.year())+(r.month()-e.month()),i=e.clone().add(n,c),o=r-i<0,a=e.clone().add(n+(o?-1:1),c);return+(-(n+(r-i)/(o?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:f,w:s,d:l,D:d,h:a,m:o,s:i,ms:n,Q:u}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},F="en",$={};$[F]=m;var D=function(t){return t instanceof w},b=function t(e,r,n){var i;if(!e)return F;if("string"==typeof e){var o=e.toLowerCase();$[o]&&(i=o),r&&($[o]=r,i=o);var a=e.split("-");if(!i&&a.length>1)return t(a[0])}else{var l=e.name;$[l]=e,i=l}return!n&&i&&(F=i),i||!n&&F},S=function(t,e){if(D(t))return t.clone();var r="object"==typeof e?e:{};return r.date=t,r.args=arguments,new w(r)},B=v;B.l=b,B.i=D,B.w=function(t,e){return S(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var w=function(){function m(t){this.$L=b(t.locale,null,!0),this.parse(t)}var y=m.prototype;return y.parse=function(t){this.$d=function(t){var e=t.date,r=t.utc;if(null===e)return new Date(NaN);if(B.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var n=e.match(g);if(n){var i=n[2]-1||0,o=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},y.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},y.$utils=function(){return B},y.isValid=function(){return!(this.$d.toString()===h)},y.isSame=function(t,e){var r=S(t);return this.startOf(e)<=r&&r<=this.endOf(e)},y.isAfter=function(t,e){return S(t)<this.startOf(e)},y.isBefore=function(t,e){return this.endOf(e)<S(t)},y.$g=function(t,e,r){return B.u(t)?this[e]:this.set(r,t)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(t,e){var r=this,n=!!B.u(e)||e,u=B.p(t),h=function(t,e){var i=B.w(r.$u?Date.UTC(r.$y,e,t):new Date(r.$y,e,t),r);return n?i:i.endOf(l)},g=function(t,e){return B.w(r.toDate()[t].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(e)),r)},p=this.$W,m=this.$M,y=this.$D,v="set"+(this.$u?"UTC":"");switch(u){case f:return n?h(1,0):h(31,11);case c:return n?h(1,m):h(0,m+1);case s:var F=this.$locale().weekStart||0,$=(p<F?p+7:p)-F;return h(n?y-$:y+(6-$),m);case l:case d:return g(v+"Hours",0);case a:return g(v+"Minutes",1);case o:return g(v+"Seconds",2);case i:return g(v+"Milliseconds",3);default:return this.clone()}},y.endOf=function(t){return this.startOf(t,!1)},y.$set=function(t,e){var r,s=B.p(t),u="set"+(this.$u?"UTC":""),h=(r={},r[l]=u+"Date",r[d]=u+"Date",r[c]=u+"Month",r[f]=u+"FullYear",r[a]=u+"Hours",r[o]=u+"Minutes",r[i]=u+"Seconds",r[n]=u+"Milliseconds",r)[s],g=s===l?this.$D+(e-this.$W):e;if(s===c||s===f){var p=this.clone().set(d,1);p.$d[h](g),p.init(),this.$d=p.set(d,Math.min(this.$D,p.daysInMonth())).$d}else h&&this.$d[h](g);return this.init(),this},y.set=function(t,e){return this.clone().$set(t,e)},y.get=function(t){return this[B.p(t)]()},y.add=function(n,u){var d,h=this;n=Number(n);var g=B.p(u),p=function(t){var e=S(h);return B.w(e.date(e.date()+Math.round(t*n)),h)};if(g===c)return this.set(c,this.$M+n);if(g===f)return this.set(f,this.$y+n);if(g===l)return p(1);if(g===s)return p(7);var m=(d={},d[o]=e,d[a]=r,d[i]=t,d)[g]||1,y=this.$d.getTime()+n*m;return B.w(y,this)},y.subtract=function(t,e){return this.add(-1*t,e)},y.format=function(t){var e=this,r=this.$locale();if(!this.isValid())return r.invalidDate||h;var n=t||"YYYY-MM-DDTHH:mm:ssZ",i=B.z(this),o=this.$H,a=this.$m,l=this.$M,s=r.weekdays,c=r.months,u=function(t,r,i,o){return t&&(t[r]||t(e,n))||i[r].slice(0,o)},f=function(t){return B.s(o%12||12,t,"0")},d=r.meridiem||function(t,e,r){var n=t<12?"AM":"PM";return r?n.toLowerCase():n},g={YY:String(this.$y).slice(-2),YYYY:this.$y,M:l+1,MM:B.s(l+1,2,"0"),MMM:u(r.monthsShort,l,c,3),MMMM:u(c,l),D:this.$D,DD:B.s(this.$D,2,"0"),d:String(this.$W),dd:u(r.weekdaysMin,this.$W,s,2),ddd:u(r.weekdaysShort,this.$W,s,3),dddd:s[this.$W],H:String(o),HH:B.s(o,2,"0"),h:f(1),hh:f(2),a:d(o,a,!0),A:d(o,a,!1),m:String(a),mm:B.s(a,2,"0"),s:String(this.$s),ss:B.s(this.$s,2,"0"),SSS:B.s(this.$ms,3,"0"),Z:i};return n.replace(p,(function(t,e){return e||g[t]||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(n,d,h){var g,p=B.p(d),m=S(n),y=(m.utcOffset()-this.utcOffset())*e,v=this-m,F=B.m(this,m);return F=(g={},g[f]=F/12,g[c]=F,g[u]=F/3,g[s]=(v-y)/6048e5,g[l]=(v-y)/864e5,g[a]=v/r,g[o]=v/e,g[i]=v/t,g)[p]||v,h?F:B.a(F)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return $[this.$L]},y.locale=function(t,e){if(!t)return this.$L;var r=this.clone(),n=b(t,e,!0);return n&&(r.$L=n),r},y.clone=function(){return B.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),x=w.prototype;return S.prototype=x,[["$ms",n],["$s",i],["$m",o],["$H",a],["$W",l],["$M",c],["$y",f],["$D",d]].forEach((function(t){x[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),S.extend=function(t,e){return t.$i||(t(e,w,S),t.$i=!0),S},S.locale=b,S.isDayjs=D,S.unix=function(t){return S(1e3*t)},S.en=$[F],S.Ls=$,S.p={},S}();var b=$(D.exports),S=function(t,e){return S=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},S(t,e)};var B=function(){return B=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var i in e=arguments[r])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},B.apply(this,arguments)};var w="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var x=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},O="object"==typeof w&&w&&w.Object===Object&&w,H="object"==typeof self&&self&&self.Object===Object&&self,E=O||H||Function("return this")(),M=E,A=function(){return M.Date.now()},k=/\s/;var _=function(t){for(var e=t.length;e--&&k.test(t.charAt(e)););return e},T=/^\s+/;var z=function(t){return t?t.slice(0,_(t)+1).replace(T,""):t},C=E.Symbol,Y=C,W=Object.prototype,j=W.hasOwnProperty,R=W.toString,L=Y?Y.toStringTag:void 0;var I=function(t){var e=j.call(t,L),r=t[L];try{t[L]=void 0;var n=!0}catch(t){}var i=R.call(t);return n&&(e?t[L]=r:delete t[L]),i},N=Object.prototype.toString;var P=I,V=function(t){return N.call(t)},Z=C?C.toStringTag:void 0;var U=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":Z&&Z in Object(t)?P(t):V(t)},X=function(t){return null!=t&&"object"==typeof t};var G=z,J=x,q=function(t){return"symbol"==typeof t||X(t)&&"[object Symbol]"==U(t)},Q=/^[-+]0x[0-9a-f]+$/i,K=/^0b[01]+$/i,tt=/^0o[0-7]+$/i,et=parseInt;var rt=x,nt=A,it=function(t){if("number"==typeof t)return t;if(q(t))return NaN;if(J(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=J(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=G(t);var r=K.test(t);return r||tt.test(t)?et(t.slice(2),r?2:8):Q.test(t)?NaN:+t},ot=Math.max,at=Math.min;var lt=function(t,e,r){var n,i,o,a,l,s,c=0,u=!1,f=!1,d=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function h(e){var r=n,o=i;return n=i=void 0,c=e,a=t.apply(o,r)}function g(t){var r=t-s;return void 0===s||r>=e||r<0||f&&t-c>=o}function p(){var t=nt();if(g(t))return m(t);l=setTimeout(p,function(t){var r=e-(t-s);return f?at(r,o-(t-c)):r}(t))}function m(t){return l=void 0,d&&n?h(t):(n=i=void 0,a)}function y(){var t=nt(),r=g(t);if(n=arguments,i=this,s=t,r){if(void 0===l)return function(t){return c=t,l=setTimeout(p,e),u?h(t):a}(s);if(f)return clearTimeout(l),l=setTimeout(p,e),h(s)}return void 0===l&&(l=setTimeout(p,e)),a}return e=it(e)||0,rt(r)&&(u=!!r.leading,o=(f="maxWait"in r)?ot(it(r.maxWait)||0,e):o,d="trailing"in r?!!r.trailing:d),y.cancel=function(){void 0!==l&&clearTimeout(l),c=0,n=s=i=l=void 0},y.flush=function(){return void 0===l?a:m(nt())},y},st=lt,ct=x;var ut=function(t,e,r){var n=!0,i=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return ct(r)&&(n="leading"in r?!!r.leading:n,i="trailing"in r?!!r.trailing:i),st(t,e,{leading:n,maxWait:e,trailing:i})},ft=function(t,e,r,n){switch(e){case"debounce":return lt(t,r,n);case"throttle":return ut(t,r,n);default:return t}},dt=function(t){return"function"==typeof t},ht=function(){return"undefined"==typeof window},gt=function(t){return t instanceof Element||t instanceof HTMLDocument},pt=function(t,e,r,n){return function(i){var o=i.width,a=i.height;e((function(e){return e.width===o&&e.height===a||e.width===o&&!n||e.height===a&&!r?e:(t&&dt(t)&&t(o,a),{width:o,height:a})}))}};!function(t){function e(e){var r=t.call(this,e)||this;r.cancelHandler=function(){r.resizeHandler&&r.resizeHandler.cancel&&(r.resizeHandler.cancel(),r.resizeHandler=null)},r.attachObserver=function(){var t=r.props,e=t.targetRef,n=t.observerOptions;if(!ht()){e&&e.current&&(r.targetRef.current=e.current);var i=r.getElement();i&&(r.observableElement&&r.observableElement===i||(r.observableElement=i,r.resizeObserver.observe(i,n)))}},r.getElement=function(){var t=r.props,e=t.querySelector,n=t.targetDomEl;if(ht())return null;if(e)return document.querySelector(e);if(n&&gt(n))return n;if(r.targetRef&&gt(r.targetRef.current))return r.targetRef.current;var i=h(r);if(!i)return null;switch(r.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},r.createResizeHandler=function(t){var e=r.props,n=e.handleWidth,i=void 0===n||n,o=e.handleHeight,a=void 0===o||o,l=e.onResize;if(i||a){var s=pt(l,r.setState.bind(r),i,a);t.forEach((function(t){var e=t&&t.contentRect||{},n=e.width,i=e.height;!r.skipOnMount&&!ht()&&s({width:n,height:i}),r.skipOnMount=!1}))}},r.getRenderType=function(){var t=r.props,e=t.render,n=t.children;return dt(e)?"renderProp":dt(n)?"childFunction":l(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=e.skipOnMount,i=e.refreshMode,o=e.refreshRate,a=void 0===o?1e3:o,c=e.refreshOptions;return r.state={width:void 0,height:void 0},r.skipOnMount=n,r.targetRef=s(),r.observableElement=null,ht()||(r.resizeHandler=ft(r.createResizeHandler,i,a,c),r.resizeObserver=new window.ResizeObserver(r.resizeHandler)),r}(function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}S(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)})(e,t),e.prototype.componentDidMount=function(){this.attachObserver()},e.prototype.componentDidUpdate=function(){this.attachObserver()},e.prototype.componentWillUnmount=function(){ht()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},e.prototype.render=function(){var t,e=this.props,r=e.render,i=e.children,o=e.nodeType,a=void 0===o?"div":o,l=this.state,s={width:l.width,height:l.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return r&&r(s);case"childFunction":return(t=i)(s);case"child":if((t=i).type&&"string"==typeof t.type){var u=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(t);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(t,n[i])&&(r[n[i]]=t[n[i]])}return r}(s,["targetRef"]);return c(t,u)}return c(t,s);case"childArray":return(t=i).map((function(t){return!!t&&c(t,s)}));default:return n.createElement(a,null)}}}(u);var mt=ht()?f:d;var yt={exports:{}};yt.exports=function(){var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},e=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,n=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},a=function(t){return(t=+t)+(t>68?1900:2e3)},l=function(t){return function(e){this[t]=+e}},s=[/[+-]\d\d:?(\d\d)?|Z/,function(t){(this.zone||(this.zone={})).offset=function(t){if(!t)return 0;if("Z"===t)return 0;var e=t.match(/([+-]|\d\d)/g),r=60*e[1]+(+e[2]||0);return 0===r?0:"+"===e[0]?-r:r}(t)}],c=function(t){var e=o[t];return e&&(e.indexOf?e:e.s.concat(e.f))},u=function(t,e){var r,n=o.meridiem;if(n){for(var i=1;i<=24;i+=1)if(t.indexOf(n(i,0,e))>-1){r=i>12;break}}else r=t===(e?"pm":"PM");return r},f={A:[i,function(t){this.afternoon=u(t,!1)}],a:[i,function(t){this.afternoon=u(t,!0)}],S:[/\d/,function(t){this.milliseconds=100*+t}],SS:[r,function(t){this.milliseconds=10*+t}],SSS:[/\d{3}/,function(t){this.milliseconds=+t}],s:[n,l("seconds")],ss:[n,l("seconds")],m:[n,l("minutes")],mm:[n,l("minutes")],H:[n,l("hours")],h:[n,l("hours")],HH:[n,l("hours")],hh:[n,l("hours")],D:[n,l("day")],DD:[r,l("day")],Do:[i,function(t){var e=o.ordinal,r=t.match(/\d+/);if(this.day=r[0],e)for(var n=1;n<=31;n+=1)e(n).replace(/\[|\]/g,"")===t&&(this.day=n)}],M:[n,l("month")],MM:[r,l("month")],MMM:[i,function(t){var e=c("months"),r=(c("monthsShort")||e.map((function(t){return t.slice(0,3)}))).indexOf(t)+1;if(r<1)throw new Error;this.month=r%12||r}],MMMM:[i,function(t){var e=c("months").indexOf(t)+1;if(e<1)throw new Error;this.month=e%12||e}],Y:[/[+-]?\d+/,l("year")],YY:[r,function(t){this.year=a(t)}],YYYY:[/\d{4}/,l("year")],Z:s,ZZ:s};function d(r){var n,i;n=r,i=o&&o.formats;for(var a=(r=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(e,r,n){var o=n&&n.toUpperCase();return r||i[n]||t[n]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(t,e,r){return e||r.slice(1)}))}))).match(e),l=a.length,s=0;s<l;s+=1){var c=a[s],u=f[c],d=u&&u[0],h=u&&u[1];a[s]=h?{regex:d,parser:h}:c.replace(/^\[|\]$/g,"")}return function(t){for(var e={},r=0,n=0;r<l;r+=1){var i=a[r];if("string"==typeof i)n+=i.length;else{var o=i.regex,s=i.parser,c=t.slice(n),u=o.exec(c)[0];s.call(e,u),t=t.replace(u,"")}}return function(t){var e=t.afternoon;if(void 0!==e){var r=t.hours;e?r<12&&(t.hours+=12):12===r&&(t.hours=0),delete t.afternoon}}(e),e}}return function(t,e,r){r.p.customParseFormat=!0,t&&t.parseTwoDigitYear&&(a=t.parseTwoDigitYear);var n=e.prototype,i=n.parse;n.parse=function(t){var e=t.date,n=t.utc,a=t.args;this.$u=n;var l=a[1];if("string"==typeof l){var s=!0===a[2],c=!0===a[3],u=s||c,f=a[2];c&&(f=a[2]),o=this.$locale(),!s&&f&&(o=r.Ls[f]),this.$d=function(t,e,r){try{if(["x","X"].indexOf(e)>-1)return new Date(("X"===e?1e3:1)*t);var n=d(e)(t),i=n.year,o=n.month,a=n.day,l=n.hours,s=n.minutes,c=n.seconds,u=n.milliseconds,f=n.zone,h=new Date,g=a||(i||o?1:h.getDate()),p=i||h.getFullYear(),m=0;i&&!o||(m=o>0?o-1:h.getMonth());var y=l||0,v=s||0,F=c||0,$=u||0;return f?new Date(Date.UTC(p,m,g,y,v,F,$+60*f.offset*1e3)):r?new Date(Date.UTC(p,m,g,y,v,F,$)):new Date(p,m,g,y,v,F,$)}catch(t){return new Date("")}}(e,l,n),this.init(),f&&!0!==f&&(this.$L=this.locale(f).$L),u&&e!=this.format(l)&&(this.$d=new Date("")),o={}}else if(l instanceof Array)for(var h=l.length,g=1;g<=h;g+=1){a[1]=l[g-1];var p=r.apply(this,a);if(p.isValid()){this.$d=p.$d,this.$L=p.$L,this.init();break}g===h&&(this.$d=new Date(""))}else i.call(this,t)}}}();var vt,Ft,$t=$(yt.exports),Dt={exports:{}},bt=$(Dt.exports=(vt={year:0,month:1,day:2,hour:3,minute:4,second:5},Ft={},function(t,e,r){var n,i=function(t,e,r){void 0===r&&(r={});var n=new Date(t),i=function(t,e){void 0===e&&(e={});var r=e.timeZoneName||"short",n=t+"|"+r,i=Ft[n];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:t,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:r}),Ft[n]=i),i}(e,r);return i.formatToParts(n)},o=function(t,e){for(var n=i(t,e),o=[],a=0;a<n.length;a+=1){var l=n[a],s=l.type,c=l.value,u=vt[s];u>=0&&(o[u]=parseInt(c,10))}var f=o[3],d=24===f?0:f,h=o[0]+"-"+o[1]+"-"+o[2]+" "+d+":"+o[4]+":"+o[5]+":000",g=+t;return(r.utc(h).valueOf()-(g-=g%1e3))/6e4},a=e.prototype;a.tz=function(t,e){void 0===t&&(t=n);var i=this.utcOffset(),o=this.toDate(),a=o.toLocaleString("en-US",{timeZone:t}),l=Math.round((o-new Date(a))/1e3/60),s=r(a).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-l,!0);if(e){var c=s.utcOffset();s=s.add(i-c,"minute")}return s.$x.$timezone=t,s},a.offsetName=function(t){var e=this.$x.$timezone||r.tz.guess(),n=i(this.valueOf(),e,{timeZoneName:t}).find((function(t){return"timezonename"===t.type.toLowerCase()}));return n&&n.value};var l=a.startOf;a.startOf=function(t,e){if(!this.$x||!this.$x.$timezone)return l.call(this,t,e);var n=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return l.call(n,t,e).tz(this.$x.$timezone,!0)},r.tz=function(t,e,i){var a=i&&e,l=i||e||n,s=o(+r(),l);if("string"!=typeof t)return r(t).tz(l);var c=function(t,e,r){var n=t-60*e*1e3,i=o(n,r);if(e===i)return[n,e];var a=o(n-=60*(i-e)*1e3,r);return i===a?[n,i]:[t-60*Math.min(i,a)*1e3,Math.max(i,a)]}(r.utc(t,a).valueOf(),s,l),u=c[0],f=c[1],d=r(u).utcOffset(f);return d.$x.$timezone=l,d},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function(t){n=t}})),St={exports:{}};St.exports=function(t,e,r){e.prototype.isBetween=function(t,e,n,i){var o=r(t),a=r(e),l="("===(i=i||"()")[0],s=")"===i[1];return(l?this.isAfter(o,n):!this.isBefore(o,n))&&(s?this.isBefore(a,n):!this.isAfter(a,n))||(l?this.isBefore(o,n):!this.isAfter(o,n))&&(s?this.isAfter(a,n):!this.isBefore(a,n))}};var Bt=$(St.exports),wt={exports:{}};wt.exports=function(t,e){e.prototype.isSameOrBefore=function(t,e){return this.isSame(t,e)||this.isBefore(t,e)}};var xt=$(wt.exports),Ot={exports:{}};Ot.exports=function(t,e){e.prototype.isSameOrAfter=function(t,e){return this.isSame(t,e)||this.isAfter(t,e)}};var Ht,Et=$(Ot.exports);b.extend(Bt),b.extend(xt),b.extend(Et),b.extend($t),b.extend(bt),function(t){t.generateDays=t=>{const e=t.startOf("month"),r=b(e).startOf("week");return Mt(r).map((t=>At(t)))},t.generateDaysForCurrentWeek=t=>{const e=t.startOf("week");return At(e)},t.generateMonths=t=>{const e=[];for(let r=0;r<12;r++){const n=t.month(r);e.push(b(n))}return e},t.generateDecadeOfYears=t=>{const e=t.year(),r=10*Math.floor(e/10),n=t.year(r),i=[n.subtract(1,"year"),n];for(let t=1;t<11;t++)i.push(n.add(t,"year"));return i},t.getStartEndDecade=t=>{const e=10*Math.floor(+t.format("YYYY")/10);return{beginDecade:e,endDecade:+b(`${e+9}-01-01`).format("YYYY")}},t.convertTo12HourFormat=t=>{const e=b(t,"HH:mm");return e.isValid()?e.format("h:mm a"):""},t.isWithinRange=(t,e,r,n="day")=>!e&&!r||(e&&r?t.isBetween(e,r,n,"[]"):e?t.isSameOrAfter(e,n):t.isSameOrBefore(r,n)),t.isPreviousMonthWithinRange=(e,r)=>t.isWithinRange(e.subtract(1,"month"),r,void 0,"month"),t.isPreviousYearWithinRange=(e,r)=>t.isWithinRange(e.subtract(1,"year"),r,void 0,"year"),t.isPreviousDecadeWithinRange=(e,r)=>{const{beginDecade:n}=t.getStartEndDecade(e);return t.isWithinRange(e.year(n).subtract(1,"year"),r,void 0,"year")},t.isNextMonthWithinRange=(e,r)=>t.isWithinRange(e.add(1,"month"),void 0,r,"month"),t.isNextYearWithinRange=(e,r)=>t.isWithinRange(e.add(1,"year"),void 0,r,"year"),t.isNextDecadeWithinRange=(e,r)=>{const{endDecade:n}=t.getStartEndDecade(e);return t.isWithinRange(e.year(n).add(1,"year"),void 0,r,"year")},t.getWeekStartEnd=t=>({start:t.startOf("week").format("YYYY-MM-DD"),end:t.endOf("week").format("YYYY-MM-DD")}),t.getFixedRangeStartEnd=(t,e)=>({start:t.format("YYYY-MM-DD"),end:t.add(e-1,"day").format("YYYY-MM-DD")}),t.isDisabledDay=(e,r,n,i)=>{const o=t.isWithinRange(e,n?b(n):void 0,i?b(i):void 0),a=r&&r.includes(e.format("YYYY-MM-DD"));return!o||!!a}}(Ht||(Ht={}));const Mt=t=>{const e=[t];for(let r=1;r<6;r++){const n=t.add(r,"week");e.push(n)}return e},At=t=>{const e=[];for(let r=0;r<7;r++){const n=t.add(r,"day");e.push(n)}return e},kt=[1,3,5,7,8,10,12],_t=[4,6,9,11];var Tt,zt,Ct,Yt,Wt;!function(t){t.clampDay=(e,r,n)=>{const i=parseInt(e),o=parseInt(r),a=parseInt(n);return 0==i?"1":kt.includes(o)?Math.min(i,31).toString():_t.includes(o)?Math.min(i,30).toString():2===o?t.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():e},t.clampMonth=t=>{const e=parseInt(t);return 0==e?"1":e>12?"12":t},t.isLeapYear=t=>t%4==0&&t%100!=0||t%400==0,t.getTimeDiffInMinutes=(t,e,r="HH:mm")=>{const n=b(t,r);return b(e,r).diff(n,"minute")},t.toDayjs=t=>t?b(t):b(),t.addMinutesToTime=(t,e,r="HH:mm")=>b(t,r).add(e,"minutes").format(r)}(Tt||(Tt={})),function(t){t.isDateDisabled=(t,e)=>{const{disabledDates:r,minDate:n,maxDate:i}=e;return!!(r&&r.length&&r.includes(t))||(!(!n||!b(t).isBefore(n,"day"))||!(!i||!b(t).isAfter(i,"day")))},t.sanitizeInput=t=>{if(t){if(b(t).isValid())return t}return""}}(zt||(zt={})),function(t){t.generate=()=>Math.random().toString(36).substring(2,9)}(Ct||(Ct={})),function(t){t.transformWithSpaces=(t,e)=>{const r="(.{"+e+"})";return t.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},t.padValue=(t,e)=>{if("0"===t)return e?t:t.padStart(2,"0");if(""===t)return t;return parseInt(t).toString().padStart(2,"0")},t.shouldTruncateToTwoLines=(t,e)=>{const r=Math.floor(e/9);return t.length>=2*r||1===t.split(" ").length&&t.length>r},t.truncateOneLine=(t,e,r,n,i=8)=>{let o=0;e>r&&(o=Math.floor((e-r)/i));const a=n+o;if(a<t.length){const e=Math.floor(a/2);return t.substring(0,e)+" ... "+t.substring(t.length-e,t.length)}return t},t.getTextWidth=(e,r)=>{if("undefined"==typeof document)return 0;const n=(t.getTextWidth.canvas||(t.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=r;return n.measureText(e).width},t.maskValue=(t,r)=>{if(!t)return t;const{maskRange:n,unmaskRange:i,maskChar:o="•",maskRegex:a,maskTransformer:l}=r;if(l)return l(t);if(a)return t.replace(a,o);if(n){const{startIndex:r,endIndex:i}=e(n[0],n[1]);return t.substring(0,r)+o.repeat(t.substring(r,i+1).length)+t.substring(i+1)}if(i){const{startIndex:r,endIndex:n}=e(i[0],i[1]);return o.repeat(t.substring(0,r).length)+t.substring(r,n+1)+o.repeat(t.substring(n+1).length)}return t};const e=(t,e)=>t<e?{startIndex:t,endIndex:e}:{startIndex:e,endIndex:t}}(Yt||(Yt={})),b.extend($t),function(t){t.formatHourlyDisplay=t=>b(t,"HH:mm").format("ha"),t.calculateWidth=(t,e,r)=>Tt.getTimeDiffInMinutes(t,e)/15*(r/2)}(Wt||(Wt={}));var jt=Array.isArray,Rt="object"==typeof F&&F&&F.Object===Object&&F,Lt="object"==typeof self&&self&&self.Object===Object&&self,It=Rt||Lt||Function("return this")(),Nt=It.Symbol,Pt=Nt,Vt=Object.prototype,Zt=Vt.hasOwnProperty,Ut=Vt.toString,Xt=Pt?Pt.toStringTag:void 0;var Gt=function(t){var e=Zt.call(t,Xt),r=t[Xt];try{t[Xt]=void 0;var n=!0}catch(t){}var i=Ut.call(t);return n&&(e?t[Xt]=r:delete t[Xt]),i},Jt=Object.prototype.toString;var qt=Gt,Qt=function(t){return Jt.call(t)},Kt=Nt?Nt.toStringTag:void 0;var te=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":Kt&&Kt in Object(t)?qt(t):Qt(t)};var ee=te,re=function(t){return null!=t&&"object"==typeof t};var ne=function(t){return"symbol"==typeof t||re(t)&&"[object Symbol]"==ee(t)},ie=jt,oe=ne,ae=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,le=/^\w*$/;var se=function(t,e){if(ie(t))return!1;var r=typeof t;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=t&&!oe(t))||(le.test(t)||!ae.test(t)||null!=e&&t in Object(e))};var ce=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},ue=te,fe=ce;var de,he=function(t){if(!fe(t))return!1;var e=ue(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},ge=It["__core-js_shared__"],pe=(de=/[^.]+$/.exec(ge&&ge.keys&&ge.keys.IE_PROTO||""))?"Symbol(src)_1."+de:"";var me=function(t){return!!pe&&pe in t},ye=Function.prototype.toString;var ve=he,Fe=me,$e=ce,De=function(t){if(null!=t){try{return ye.call(t)}catch(t){}try{return t+""}catch(t){}}return""},be=/^\[object .+?Constructor\]$/,Se=Function.prototype,Be=Object.prototype,we=Se.toString,xe=Be.hasOwnProperty,Oe=RegExp("^"+we.call(xe).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var He=function(t){return!(!$e(t)||Fe(t))&&(ve(t)?Oe:be).test(De(t))},Ee=function(t,e){return null==t?void 0:t[e]};var Me=function(t,e){var r=Ee(t,e);return He(r)?r:void 0},Ae=Me(Object,"create"),ke=Ae;var _e=function(){this.__data__=ke?ke(null):{},this.size=0};var Te=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},ze=Ae,Ce=Object.prototype.hasOwnProperty;var Ye=function(t){var e=this.__data__;if(ze){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return Ce.call(e,t)?e[t]:void 0},We=Ae,je=Object.prototype.hasOwnProperty;var Re=Ae;var Le=_e,Ie=Te,Ne=Ye,Pe=function(t){var e=this.__data__;return We?void 0!==e[t]:je.call(e,t)},Ve=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=Re&&void 0===e?"__lodash_hash_undefined__":e,this};function Ze(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}Ze.prototype.clear=Le,Ze.prototype.delete=Ie,Ze.prototype.get=Ne,Ze.prototype.has=Pe,Ze.prototype.set=Ve;var Ue=Ze;var Xe=function(){this.__data__=[],this.size=0};var Ge=function(t,e){return t===e||t!=t&&e!=e};var Je=function(t,e){for(var r=t.length;r--;)if(Ge(t[r][0],e))return r;return-1},qe=Je,Qe=Array.prototype.splice;var Ke=Je;var tr=Je;var er=Je;var rr=Xe,nr=function(t){var e=this.__data__,r=qe(e,t);return!(r<0)&&(r==e.length-1?e.pop():Qe.call(e,r,1),--this.size,!0)},ir=function(t){var e=this.__data__,r=Ke(e,t);return r<0?void 0:e[r][1]},or=function(t){return tr(this.__data__,t)>-1},ar=function(t,e){var r=this.__data__,n=er(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this};function lr(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}lr.prototype.clear=rr,lr.prototype.delete=nr,lr.prototype.get=ir,lr.prototype.has=or,lr.prototype.set=ar;var sr=lr,cr=Me(It,"Map"),ur=Ue,fr=sr,dr=cr;var hr=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var gr=function(t,e){var r=t.__data__;return hr(e)?r["string"==typeof e?"string":"hash"]:r.map},pr=gr;var mr=gr;var yr=gr;var vr=gr;var Fr=function(){this.size=0,this.__data__={hash:new ur,map:new(dr||fr),string:new ur}},$r=function(t){var e=pr(this,t).delete(t);return this.size-=e?1:0,e},Dr=function(t){return mr(this,t).get(t)},br=function(t){return yr(this,t).has(t)},Sr=function(t,e){var r=vr(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this};function Br(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}Br.prototype.clear=Fr,Br.prototype.delete=$r,Br.prototype.get=Dr,Br.prototype.has=br,Br.prototype.set=Sr;var wr=Br;function xr(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var r=function(){var n=arguments,i=e?e.apply(this,n):n[0],o=r.cache;if(o.has(i))return o.get(i);var a=t.apply(this,n);return r.cache=o.set(i,a)||o,a};return r.cache=new(xr.Cache||wr),r}xr.Cache=wr;var Or=xr;var Hr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Er=/\\(\\)?/g,Mr=function(t){var e=Or(t,(function(t){return 500===r.size&&r.clear(),t})),r=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(Hr,(function(t,r,n,i){e.push(n?i.replace(Er,"$1"):r||t)})),e}));var Ar=function(t,e){for(var r=-1,n=null==t?0:t.length,i=Array(n);++r<n;)i[r]=e(t[r],r,t);return i},kr=jt,_r=ne,Tr=Nt?Nt.prototype:void 0,zr=Tr?Tr.toString:void 0;var Cr=function t(e){if("string"==typeof e)return e;if(kr(e))return Ar(e,t)+"";if(_r(e))return zr?zr.call(e):"";var r=e+"";return"0"==r&&1/e==-Infinity?"-0":r},Yr=Cr;var Wr=jt,jr=se,Rr=Mr,Lr=function(t){return null==t?"":Yr(t)};var Ir=ne;var Nr=function(t,e){return Wr(t)?t:jr(t,e)?[t]:Rr(Lr(t))},Pr=function(t){if("string"==typeof t||Ir(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e};var Vr=function(t,e){for(var r=0,n=(e=Nr(e,t)).length;null!=t&&r<n;)t=t[Pr(e[r++])];return r&&r==n?t:void 0};var Zr=$((function(t,e,r){var n=null==t?void 0:Vr(t,e);return void 0===n?r:n}));const Ur=(t,e,r)=>e?Zr(r,e)||Zr(t,e):r||t,Xr=(t,e)=>{const r=e||t.defaultValue;return Zr(t.collections,r)};var Gr;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme",t.designTokenScheme="designTokenScheme",t.resourceScheme="resourceScheme"}(Gr||(Gr={}));const Jr={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},qr=t=>e=>{const r=e.theme,n=Xr(Jr,r[Gr.colorScheme]);return r.options&&r.options.color?Ur(n,t,r.options.color):Ur(n,t)},Qr={Brand:{1:qr("Brand.1"),2:qr("Brand.2"),3:qr("Brand.3"),4:qr("Brand.4"),5:qr("Brand.5"),6:qr("Brand.6")},Primary:qr("Primary"),PrimaryDark:qr("PrimaryDark"),Secondary:qr("Secondary"),Accent:{Light:{1:qr("Accent.Light.1"),2:qr("Accent.Light.2"),3:qr("Accent.Light.3"),4:qr("Accent.Light.4"),5:qr("Accent.Light.5"),6:qr("Accent.Light.6")},Dark:{1:qr("Accent.Dark.1"),2:qr("Accent.Dark.2"),3:qr("Accent.Dark.3")}},Neutral:{1:qr("Neutral.1"),2:qr("Neutral.2"),3:qr("Neutral.3"),4:qr("Neutral.4"),5:qr("Neutral.5"),6:qr("Neutral.6"),7:qr("Neutral.7"),8:qr("Neutral.8")},Validation:{Green:{Text:qr("Validation.Green.Text"),Icon:qr("Validation.Green.Icon"),Border:qr("Validation.Green.Border"),Background:qr("Validation.Green.Background")},Orange:{Text:qr("Validation.Orange.Text"),Icon:qr("Validation.Orange.Icon"),Border:qr("Validation.Orange.Border"),Background:qr("Validation.Orange.Background"),Badge:qr("Validation.Orange.Badge")},Red:{Text:qr("Validation.Red.Text"),Icon:qr("Validation.Red.Icon"),Border:qr("Validation.Red.Border"),Background:qr("Validation.Red.Background")},Blue:{Text:qr("Validation.Blue.Text"),Icon:qr("Validation.Blue.Icon"),Border:qr("Validation.Blue.Border"),Background:qr("Validation.Blue.Background")}},Shadow:{Accent:qr("Shadow.Accent"),Red:qr("Shadow.Red"),Elevation:qr("Shadow.Elevation")}};function Kr(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(t);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(t,n[i])&&(r[n[i]]=t[n[i]])}return r}"function"==typeof SuppressedError&&SuppressedError;const tn=m.button`
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

        ${({$highlight:t})=>t&&y`
                background-color: ${Qr.Neutral[7]};
            `}
    }
`,en=i.forwardRef(((e,r)=>{var{children:n,focusHighlight:i=!0,focusOutline:o="none",type:a="button"}=e,l=Kr(e,["children","focusHighlight","focusOutline","type"]);return t(tn,Object.assign({ref:r,$outline:o,$highlight:i,type:a},l,{children:n}))})),rn={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},nn={collections:{base:{D1:{fontFamily:rn.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:rn.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:rn.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:rn.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:rn.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:rn.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:rn.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:rn.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:rn.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:rn.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:rn.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:rn.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:rn.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:rn.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},on=t=>e=>{const r=e.theme,n=Xr(nn,r[Gr.textStyleScheme]);return r.options&&r.options.textStyle?Ur(n,t,r.options.textStyle):Ur(n,t)},an={D1:{fontFamily:on("D1.fontFamily"),fontSize:on("D1.fontSize"),fontWeight:on("D1.fontWeight"),lineHeight:on("D1.lineHeight"),letterSpacing:on("D1.letterSpacing")},D2:{fontFamily:on("D2.fontFamily"),fontSize:on("D2.fontSize"),fontWeight:on("D2.fontWeight"),lineHeight:on("D2.lineHeight"),letterSpacing:on("D2.letterSpacing")},D3:{fontFamily:on("D3.fontFamily"),fontSize:on("D3.fontSize"),fontWeight:on("D3.fontWeight"),lineHeight:on("D3.lineHeight"),letterSpacing:on("D3.letterSpacing")},D4:{fontFamily:on("D4.fontFamily"),fontSize:on("D4.fontSize"),fontWeight:on("D4.fontWeight"),lineHeight:on("D4.lineHeight"),letterSpacing:on("D4.letterSpacing")},DBody:{fontFamily:on("DBody.fontFamily"),fontSize:on("DBody.fontSize"),fontWeight:on("DBody.fontWeight"),lineHeight:on("DBody.lineHeight"),letterSpacing:on("DBody.letterSpacing")},H1:{fontFamily:on("H1.fontFamily"),fontSize:on("H1.fontSize"),fontWeight:on("H1.fontWeight"),lineHeight:on("H1.lineHeight"),letterSpacing:on("H1.letterSpacing")},H2:{fontFamily:on("H2.fontFamily"),fontSize:on("H2.fontSize"),fontWeight:on("H2.fontWeight"),lineHeight:on("H2.lineHeight"),letterSpacing:on("H2.letterSpacing")},H3:{fontFamily:on("H3.fontFamily"),fontSize:on("H3.fontSize"),fontWeight:on("H3.fontWeight"),lineHeight:on("H3.lineHeight"),letterSpacing:on("H3.letterSpacing")},H4:{fontFamily:on("H4.fontFamily"),fontSize:on("H4.fontSize"),fontWeight:on("H4.fontWeight"),lineHeight:on("H4.lineHeight"),letterSpacing:on("H4.letterSpacing")},H5:{fontFamily:on("H5.fontFamily"),fontSize:on("H5.fontSize"),fontWeight:on("H5.fontWeight"),lineHeight:on("H5.lineHeight"),letterSpacing:on("H5.letterSpacing")},H6:{fontFamily:on("H6.fontFamily"),fontSize:on("H6.fontSize"),fontWeight:on("H6.fontWeight"),lineHeight:on("H6.lineHeight"),letterSpacing:on("H6.letterSpacing")},Body:{fontFamily:on("Body.fontFamily"),fontSize:on("Body.fontSize"),fontWeight:on("Body.fontWeight"),lineHeight:on("Body.lineHeight"),letterSpacing:on("Body.letterSpacing")},BodySmall:{fontFamily:on("BodySmall.fontFamily"),fontSize:on("BodySmall.fontSize"),fontWeight:on("BodySmall.fontWeight"),lineHeight:on("BodySmall.lineHeight"),letterSpacing:on("BodySmall.letterSpacing")},XSmall:{fontFamily:on("XSmall.fontFamily"),fontSize:on("XSmall.fontSize"),fontWeight:on("XSmall.fontWeight"),lineHeight:on("XSmall.lineHeight"),letterSpacing:on("XSmall.letterSpacing")}},ln=t=>{switch(t){case 700:case"bold":return rn.Bold;case 600:case"semibold":return rn.Semibold;case 300:case"light":return rn.Light;case 400:case"regular":return rn.Regular;default:return""}},sn=(t,e)=>r=>{var n;const i=an[t].fontFamily(r),o=an[t].fontWeight(r);return Object.values(rn).includes(i)?y`
                font-family: ${ln(e)||ln(o)||i};
                font-weight: normal !important;
            `:y`
            font-family: ${i};
            font-weight: ${null!==(n=cn(e)||o)&&void 0!==n?n:"normal"};
        `},cn=t=>{switch(t){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},un=t=>{if(t>0)return y`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${t};
            line-clamp: ${t};
            overflow: hidden;
        `},fn=(t,e,r=!1)=>n=>{const i=an[t],o=i.fontSize(n);return y`
            ${sn(t,e)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(n)||0}rem !important;
            ${y`
                margin-bottom: ${o*(r?1.05:0)}rem;
            `}
        `},dn=(t=!1,e=!1,r=void 0)=>e?y`
            display: block;
            ${un(r)}
        `:t?y`
            display: inline;
        `:y`
            display: block;
            ${un(r)}
        `;var hn;!function(t){t.D1=m.h1`
        ${t=>y`
                ${fn("D1",t.weight,t.paragraph)}
                color: ${Qr.Neutral[1]};
                ${dn(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.D2=m.h1`
        ${t=>y`
                ${fn("D2",t.weight,t.paragraph)}
                color: ${Qr.Neutral[1]};
                ${dn(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.D3=m.h1`
        ${t=>y`
                ${fn("D3",t.weight,t.paragraph)}
                color: ${Qr.Neutral[1]};
                ${dn(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.D4=m.h1`
        ${t=>y`
                ${fn("D4",t.weight,t.paragraph)}
                color: ${Qr.Neutral[1]};
                ${dn(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.DBody=m.h1`
        ${t=>y`
                ${fn("DBody",t.weight,t.paragraph)}
                color: ${Qr.Neutral[1]};
                ${dn(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H1=m.h1`
        ${t=>y`
                ${fn("H1",t.weight,t.paragraph)}
                color: ${Qr.Neutral[1]};
                ${dn(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H2=m.h2`
        ${t=>y`
                ${fn("H2",t.weight,t.paragraph)}
                color: ${Qr.Neutral[1]};
                ${dn(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H3=m.h3`
        ${t=>y`
                ${fn("H3",t.weight,t.paragraph)}
                color: ${Qr.Neutral[1]};
                ${dn(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H4=m.h4`
        ${t=>y`
                ${fn("H4",t.weight,t.paragraph)}
                color: ${Qr.Neutral[1]};
                ${dn(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H5=m.h5`
        ${t=>y`
                ${fn("H5",t.weight,t.paragraph)}
                color: ${Qr.Neutral[1]};
                ${dn(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H6=m.h6`
        ${t=>y`
                ${fn("H6",t.weight,t.paragraph)}
                color: ${Qr.Neutral[1]};
                ${dn(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.Body=m.p`
        ${t=>y`
                ${fn("Body",t.weight,t.paragraph)}
                color: ${Qr.Neutral[1]};
                ${dn(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.BodySmall=m.p`
        ${t=>y`
                ${fn("BodySmall",t.weight,t.paragraph)}
                color: ${Qr.Neutral[1]};
                ${dn(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.XSmall=m.span`
        ${t=>y`
                ${fn("XSmall",t.weight,t.paragraph)}
                color: ${Qr.Neutral[1]};
                ${dn(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.Hyperlink={Default:t=>mn(Object.assign(Object.assign({},t),{textStyle:"Body"})),Small:t=>mn(Object.assign(Object.assign({},t),{textStyle:"BodySmall"}))}}(hn||(hn={}));const gn=m.a`
    ${t=>y`
            ${fn(t.textStyle,t.weight)}
            color: ${Qr.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Qr.Secondary};

                svg {
                    color: ${Qr.Secondary};
                }
            }
        `}
`,pn=m(v)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,mn=r=>{var{external:n=!1,children:i}=r,o=Kr(r,["external","children"]);return e(gn,Object.assign({},o,{children:[i,n&&t(pn,{})]}))};var yn;!function(t){t[t.Subpage=0]="Subpage",t[t.Domain=1]="Domain"}(yn||(yn={}));const vn=1.25,Fn=t=>"minified"===t?12:40,$n=t=>"minified"===t?12:40,Dn=m.div`
    position: relative;
    display: flex;
    align-items: center;
`,bn=m(en)`
    z-index: 2;
    position: absolute;
    bottom: ${({$variant:t})=>"default"===t?"0.25rem":"0rem"};
    background-color: ${Qr.Neutral[8]};
    box-shadow: 0px 2px 8px rgba(104, 104, 104, 0.5);
    border-radius: 50%;
    padding: 0.5rem;
    width: 2rem;
    height: 2rem;

    ${t=>"right"===t.$direction?y`
                  right: 0;
              `:y`
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
`,Sn=m(p)`
    width: 1rem;
    height: 1rem;
    color: ${Qr.Primary};
`,Bn=m(g)`
    font-size: 1rem;
    color: ${Qr.Primary};
`,wn=m.div`
    overflow: hidden;
    flex-grow: 1;
    position: relative;
    height: ${({$variant:t})=>`${20+$n(t)}px`};
`,xn=m.div`
    position: relative;
    white-space: nowrap;
    height: ${vn}rem;
`,On=m.div`
    display: flex;
    white-space: nowrap;
`,Hn=m.div`
    display: inline-block;
    width: ${({$variant:t})=>`${Fn(t)}px`};
    position: relative;
    border-left: 1px solid ${Qr.Neutral[2]};
    ${t=>{let e=0;switch(t.$variant){case"default":e=t.$isLongMarker?vn:.625;break;case"minified":e=t.$isLongMarker?vn:0;break;default:e=0}return y`
            height: ${e}rem;
        `}}
`,En=m(hn.XSmall)`
    color: ${Qr.Neutral[2]};
    position: absolute;
    bottom: 10%;
    left: 10%;
`,Mn=m.div`
    ${t=>"vertical"===t.$type?y`
                display: flex;
                flex-grow: 1;
                align-items: center;
                justify-content: center;
                width: 100%;
                margin: 1px 0px;
            `:y`
                position: absolute;
                height: ${$n(t.$variant)}px;
                width: ${t.$width}px;
                left: ${t.$left}px;
            `}
    background-color: ${({$bgColor:t})=>t};
    cursor: ${({$clickable:t})=>t?"pointer":"default"};

    ${t=>"stripes"===t.$styleType&&y`
            background: repeating-linear-gradient(
                135deg,
                ${t.$bgColor2||Qr.Neutral[5]} 0px,
                ${t.$bgColor2||Qr.Neutral[5]} 10px,
                ${t.$bgColor} 10px,
                ${t.$bgColor} 20px
            );
        `}
`,An=m.div`
    position: absolute;
    top: ${vn}rem;
    height: ${({$variant:t})=>`${$n(t)}px`};
    z-index: 1;
    border-right: 1px solid ${Qr.Neutral[2]};
`,kn=m(hn.XSmall)`
    color: ${t=>t.$color||Qr.Neutral[2](t)};
    position: absolute;
    bottom: 0;
    padding-left: 4px;
    padding-bottom: 4px;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`,_n=({"data-testid":n,className:i,variant:l="default",startTime:s,endTime:c,slots:u,onSlotClick:d,onClick:h,styleAttributes:g})=>{const p=o(null),[m,y]=a(0),[v,F]=a(0),$=Fn(l),D=2.5*$;f((()=>{const t=p.current;return t&&t.addEventListener("scroll",S),()=>{t&&t.removeEventListener("scroll",S)}}),[]);const S=()=>{p.current&&y(p.current.scrollLeft)},w=t=>{p.current&&p.current.scrollBy({left:"left"===t?-D:D,behavior:"smooth"})};!function(t){void 0===t&&(t={});var e=t.skipOnMount,r=void 0!==e&&e,n=t.refreshMode,i=t.refreshRate,l=void 0===i?1e3:i,s=t.refreshOptions,c=t.handleWidth,u=void 0===c||c,f=t.handleHeight,d=void 0===f||f,h=t.targetRef,g=t.observerOptions,p=t.onResize,m=o(r),y=o(null),v=null!=h?h:y,F=o(),$=a({width:void 0,height:void 0}),D=$[0],b=$[1];mt((function(){if(!ht()){var t=pt(p,b,u,d);F.current=ft((function(e){(u||d)&&e.forEach((function(e){var r=e&&e.contentRect||{},n=r.width,i=r.height;!m.current&&!ht()&&t({width:n,height:i}),m.current=!1}))}),n,l,s);var e=new window.ResizeObserver(F.current);return v.current&&e.observe(v.current,g),function(){e.disconnect();var t=F.current;t&&t.cancel&&t.cancel()}}}),[n,l,s,u,d,p,g,v.current]),B({ref:v},D)}({onResize:()=>{p.current&&F(p.current.clientWidth)},targetRef:p,refreshMode:"debounce",refreshRate:50});const x=t=>t<=$/2,O=t=>{if(n)return`${n}-${t}`},H=(t,e,r)=>{const n=0===t.minute();if("default"===r)return n;return n&&(e?t.hour()%2==0:t.hour()%2==1)};return e(Dn,Object.assign({className:i},{children:[e(wn,Object.assign({"data-testid":n,ref:p,$variant:l},{children:[t(xn,Object.assign({"data-testid":O("time-marker-wrapper"),"data-id":"marker-wrapper"},{children:(()=>{const e=[],r=b(s,"HH:mm"),n=b(c,"HH:mm"),i=r.hour()%2==0;for(let o=r;o.isBefore(n);o=o.add(30,"minute")){const r=H(o,i,l);e.push(t(Hn,Object.assign({$isLongMarker:r,$variant:l},{children:r&&t(En,Object.assign({weight:"semibold"},{children:Wt.formatHourlyDisplay(o.format("HH:mm"))}))}),o.format("HH:mm")))}return e})()})),e(On,Object.assign({"data-testid":O("time-slot-wrapper"),"data-id":"slot-wrapper"},{children:[g&&(()=>{const{backgroundColor:n,backgroundColor2:i,styleType:o="default"}=g,a=Wt.calculateWidth(s,c,$),u=!!h&&"default"===l;return e(r,{children:[t(An,{$variant:l}),t(Mn,{"data-testid":O("default-timeslot"),$width:a,$variant:l,$left:0,$styleType:o,$bgColor:n,$bgColor2:i,$clickable:u,onClick:u?h:void 0},"default-timeslot")]})})(),u.map((r=>{const{id:n,startTime:i,endTime:o,label:a,clickable:u=!0,styleAttributes:f}=r,{color:h,styleType:g="default",backgroundColor:p,backgroundColor2:m}=f,y=Wt.calculateWidth(i,o,$),v=Wt.calculateWidth(s,i,$),F=u&&"default"===l;return e("div",{children:[t(An,{$variant:l,style:{left:`${v}px`}}),t(Mn,Object.assign({"data-testid":O(`${n}-timeslot`),$width:y,$left:v,$styleType:g,$variant:l,$bgColor:p,$bgColor2:m,$clickable:F,onClick:()=>F&&d(r)},{children:a&&"default"===l&&t(kn,Object.assign({$slotWidth:y,$color:h,weight:"semibold"},{children:x(y)?"...":a}))})),c!==o&&t(An,{$variant:l,style:{left:`${v+y}px`}})]},n)}))]}))]})),t(r,{children:m>0&&t(bn,Object.assign({"data-testid":O("arrow-left"),$direction:"left",$variant:l,focusHighlight:!1,focusOutline:"none",onClick:()=>{w("left")}},{children:t(Bn,{})}))}),m+v<Wt.calculateWidth(s,c,$)?t(bn,Object.assign({"data-testid":O("arrow-right"),$direction:"right",$variant:l,focusHighlight:!1,focusOutline:"none",onClick:()=>{w("right")}},{children:t(Sn,{})})):t(r,{})]}))};export{_n as TimeSlotBar};
//# sourceMappingURL=index.js.map
