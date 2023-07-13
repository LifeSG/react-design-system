import{jsx as t,jsxs as e,Fragment as r}from"react/jsx-runtime";import*as n from"react";import i,{cloneElement as o,useRef as a,useState as l,isValidElement as c,createRef as s,PureComponent as u,useEffect as f,useLayoutEffect as h}from"react";import{findDOMNode as d}from"react-dom";import{ChevronLeftIcon as g}from"@lifesg/react-icons/chevron-left";import{ChevronRightIcon as p}from"@lifesg/react-icons/chevron-right";import m,{css as y}from"styled-components";import{ExternalIcon as v}from"@lifesg/react-icons/external";var $="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},S={exports:{}};S.exports=function(){var t=1e3,e=6e4,r=36e5,n="millisecond",i="second",o="minute",a="hour",l="day",c="week",s="month",u="quarter",f="year",h="date",d="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],r=t%100;return"["+t+(e[(r-20)%10]||e[r]||e[0])+"]"}},y=function(t,e,r){var n=String(t);return!n||n.length>=e?t:""+Array(e+1-n.length).join(r)+t},v={s:y,z:function(t){var e=-t.utcOffset(),r=Math.abs(e),n=Math.floor(r/60),i=r%60;return(e<=0?"+":"-")+y(n,2,"0")+":"+y(i,2,"0")},m:function t(e,r){if(e.date()<r.date())return-t(r,e);var n=12*(r.year()-e.year())+(r.month()-e.month()),i=e.clone().add(n,s),o=r-i<0,a=e.clone().add(n+(o?-1:1),s);return+(-(n+(r-i)/(o?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:s,y:f,w:c,d:l,D:h,h:a,m:o,s:i,ms:n,Q:u}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},$="en",S={};S[$]=m;var F=function(t){return t instanceof B},D=function t(e,r,n){var i;if(!e)return $;if("string"==typeof e){var o=e.toLowerCase();S[o]&&(i=o),r&&(S[o]=r,i=o);var a=e.split("-");if(!i&&a.length>1)return t(a[0])}else{var l=e.name;S[l]=e,i=l}return!n&&i&&($=i),i||!n&&$},b=function(t,e){if(F(t))return t.clone();var r="object"==typeof e?e:{};return r.date=t,r.args=arguments,new B(r)},w=v;w.l=D,w.i=F,w.w=function(t,e){return b(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var B=function(){function m(t){this.$L=D(t.locale,null,!0),this.parse(t)}var y=m.prototype;return y.parse=function(t){this.$d=function(t){var e=t.date,r=t.utc;if(null===e)return new Date(NaN);if(w.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var n=e.match(g);if(n){var i=n[2]-1||0,o=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},y.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},y.$utils=function(){return w},y.isValid=function(){return!(this.$d.toString()===d)},y.isSame=function(t,e){var r=b(t);return this.startOf(e)<=r&&r<=this.endOf(e)},y.isAfter=function(t,e){return b(t)<this.startOf(e)},y.isBefore=function(t,e){return this.endOf(e)<b(t)},y.$g=function(t,e,r){return w.u(t)?this[e]:this.set(r,t)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(t,e){var r=this,n=!!w.u(e)||e,u=w.p(t),d=function(t,e){var i=w.w(r.$u?Date.UTC(r.$y,e,t):new Date(r.$y,e,t),r);return n?i:i.endOf(l)},g=function(t,e){return w.w(r.toDate()[t].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(e)),r)},p=this.$W,m=this.$M,y=this.$D,v="set"+(this.$u?"UTC":"");switch(u){case f:return n?d(1,0):d(31,11);case s:return n?d(1,m):d(0,m+1);case c:var $=this.$locale().weekStart||0,S=(p<$?p+7:p)-$;return d(n?y-S:y+(6-S),m);case l:case h:return g(v+"Hours",0);case a:return g(v+"Minutes",1);case o:return g(v+"Seconds",2);case i:return g(v+"Milliseconds",3);default:return this.clone()}},y.endOf=function(t){return this.startOf(t,!1)},y.$set=function(t,e){var r,c=w.p(t),u="set"+(this.$u?"UTC":""),d=(r={},r[l]=u+"Date",r[h]=u+"Date",r[s]=u+"Month",r[f]=u+"FullYear",r[a]=u+"Hours",r[o]=u+"Minutes",r[i]=u+"Seconds",r[n]=u+"Milliseconds",r)[c],g=c===l?this.$D+(e-this.$W):e;if(c===s||c===f){var p=this.clone().set(h,1);p.$d[d](g),p.init(),this.$d=p.set(h,Math.min(this.$D,p.daysInMonth())).$d}else d&&this.$d[d](g);return this.init(),this},y.set=function(t,e){return this.clone().$set(t,e)},y.get=function(t){return this[w.p(t)]()},y.add=function(n,u){var h,d=this;n=Number(n);var g=w.p(u),p=function(t){var e=b(d);return w.w(e.date(e.date()+Math.round(t*n)),d)};if(g===s)return this.set(s,this.$M+n);if(g===f)return this.set(f,this.$y+n);if(g===l)return p(1);if(g===c)return p(7);var m=(h={},h[o]=e,h[a]=r,h[i]=t,h)[g]||1,y=this.$d.getTime()+n*m;return w.w(y,this)},y.subtract=function(t,e){return this.add(-1*t,e)},y.format=function(t){var e=this,r=this.$locale();if(!this.isValid())return r.invalidDate||d;var n=t||"YYYY-MM-DDTHH:mm:ssZ",i=w.z(this),o=this.$H,a=this.$m,l=this.$M,c=r.weekdays,s=r.months,u=function(t,r,i,o){return t&&(t[r]||t(e,n))||i[r].slice(0,o)},f=function(t){return w.s(o%12||12,t,"0")},h=r.meridiem||function(t,e,r){var n=t<12?"AM":"PM";return r?n.toLowerCase():n},g={YY:String(this.$y).slice(-2),YYYY:this.$y,M:l+1,MM:w.s(l+1,2,"0"),MMM:u(r.monthsShort,l,s,3),MMMM:u(s,l),D:this.$D,DD:w.s(this.$D,2,"0"),d:String(this.$W),dd:u(r.weekdaysMin,this.$W,c,2),ddd:u(r.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(o),HH:w.s(o,2,"0"),h:f(1),hh:f(2),a:h(o,a,!0),A:h(o,a,!1),m:String(a),mm:w.s(a,2,"0"),s:String(this.$s),ss:w.s(this.$s,2,"0"),SSS:w.s(this.$ms,3,"0"),Z:i};return n.replace(p,(function(t,e){return e||g[t]||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(n,h,d){var g,p=w.p(h),m=b(n),y=(m.utcOffset()-this.utcOffset())*e,v=this-m,$=w.m(this,m);return $=(g={},g[f]=$/12,g[s]=$,g[u]=$/3,g[c]=(v-y)/6048e5,g[l]=(v-y)/864e5,g[a]=v/r,g[o]=v/e,g[i]=v/t,g)[p]||v,d?$:w.a($)},y.daysInMonth=function(){return this.endOf(s).$D},y.$locale=function(){return S[this.$L]},y.locale=function(t,e){if(!t)return this.$L;var r=this.clone(),n=D(t,e,!0);return n&&(r.$L=n),r},y.clone=function(){return w.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),H=B.prototype;return b.prototype=H,[["$ms",n],["$s",i],["$m",o],["$H",a],["$W",l],["$M",s],["$y",f],["$D",h]].forEach((function(t){H[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),b.extend=function(t,e){return t.$i||(t(e,B,b),t.$i=!0),b},b.locale=D,b.isDayjs=F,b.unix=function(t){return b(1e3*t)},b.en=S[$],b.Ls=S,b.p={},b}();var F=S.exports,D=function(t,e){return D=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},D(t,e)};var b=function(){return b=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var i in e=arguments[r])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},b.apply(this,arguments)};var w="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var B=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},H="object"==typeof w&&w&&w.Object===Object&&w,x="object"==typeof self&&self&&self.Object===Object&&self,O=H||x||Function("return this")(),M=O,_=function(){return M.Date.now()},z=/\s/;var E=function(t){for(var e=t.length;e--&&z.test(t.charAt(e)););return e},A=/^\s+/;var T=function(t){return t?t.slice(0,E(t)+1).replace(A,""):t},k=O.Symbol,W=k,C=Object.prototype,R=C.hasOwnProperty,Y=C.toString,j=W?W.toStringTag:void 0;var N=function(t){var e=R.call(t,j),r=t[j];try{t[j]=void 0;var n=!0}catch(t){}var i=Y.call(t);return n&&(e?t[j]=r:delete t[j]),i},L=Object.prototype.toString;var I=N,P=function(t){return L.call(t)},V=k?k.toStringTag:void 0;var Z=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":V&&V in Object(t)?I(t):P(t)},U=function(t){return null!=t&&"object"==typeof t};var X=T,G=B,J=function(t){return"symbol"==typeof t||U(t)&&"[object Symbol]"==Z(t)},q=/^[-+]0x[0-9a-f]+$/i,Q=/^0b[01]+$/i,K=/^0o[0-7]+$/i,tt=parseInt;var et=B,rt=_,nt=function(t){if("number"==typeof t)return t;if(J(t))return NaN;if(G(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=G(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=X(t);var r=Q.test(t);return r||K.test(t)?tt(t.slice(2),r?2:8):q.test(t)?NaN:+t},it=Math.max,ot=Math.min;var at=function(t,e,r){var n,i,o,a,l,c,s=0,u=!1,f=!1,h=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function d(e){var r=n,o=i;return n=i=void 0,s=e,a=t.apply(o,r)}function g(t){var r=t-c;return void 0===c||r>=e||r<0||f&&t-s>=o}function p(){var t=rt();if(g(t))return m(t);l=setTimeout(p,function(t){var r=e-(t-c);return f?ot(r,o-(t-s)):r}(t))}function m(t){return l=void 0,h&&n?d(t):(n=i=void 0,a)}function y(){var t=rt(),r=g(t);if(n=arguments,i=this,c=t,r){if(void 0===l)return function(t){return s=t,l=setTimeout(p,e),u?d(t):a}(c);if(f)return clearTimeout(l),l=setTimeout(p,e),d(c)}return void 0===l&&(l=setTimeout(p,e)),a}return e=nt(e)||0,et(r)&&(u=!!r.leading,o=(f="maxWait"in r)?it(nt(r.maxWait)||0,e):o,h="trailing"in r?!!r.trailing:h),y.cancel=function(){void 0!==l&&clearTimeout(l),s=0,n=c=i=l=void 0},y.flush=function(){return void 0===l?a:m(rt())},y},lt=at,ct=B;var st=function(t,e,r){var n=!0,i=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return ct(r)&&(n="leading"in r?!!r.leading:n,i="trailing"in r?!!r.trailing:i),lt(t,e,{leading:n,maxWait:e,trailing:i})},ut=function(t,e,r,n){switch(e){case"debounce":return at(t,r,n);case"throttle":return st(t,r,n);default:return t}},ft=function(t){return"function"==typeof t},ht=function(){return"undefined"==typeof window},dt=function(t){return t instanceof Element||t instanceof HTMLDocument},gt=function(t,e,r,n){return function(i){var o=i.width,a=i.height;e((function(e){return e.width===o&&e.height===a||e.width===o&&!n||e.height===a&&!r?e:(t&&ft(t)&&t(o,a),{width:o,height:a})}))}};!function(t){function e(e){var r=t.call(this,e)||this;r.cancelHandler=function(){r.resizeHandler&&r.resizeHandler.cancel&&(r.resizeHandler.cancel(),r.resizeHandler=null)},r.attachObserver=function(){var t=r.props,e=t.targetRef,n=t.observerOptions;if(!ht()){e&&e.current&&(r.targetRef.current=e.current);var i=r.getElement();i&&(r.observableElement&&r.observableElement===i||(r.observableElement=i,r.resizeObserver.observe(i,n)))}},r.getElement=function(){var t=r.props,e=t.querySelector,n=t.targetDomEl;if(ht())return null;if(e)return document.querySelector(e);if(n&&dt(n))return n;if(r.targetRef&&dt(r.targetRef.current))return r.targetRef.current;var i=d(r);if(!i)return null;switch(r.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},r.createResizeHandler=function(t){var e=r.props,n=e.handleWidth,i=void 0===n||n,o=e.handleHeight,a=void 0===o||o,l=e.onResize;if(i||a){var c=gt(l,r.setState.bind(r),i,a);t.forEach((function(t){var e=t&&t.contentRect||{},n=e.width,i=e.height;!r.skipOnMount&&!ht()&&c({width:n,height:i}),r.skipOnMount=!1}))}},r.getRenderType=function(){var t=r.props,e=t.render,n=t.children;return ft(e)?"renderProp":ft(n)?"childFunction":c(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=e.skipOnMount,i=e.refreshMode,o=e.refreshRate,a=void 0===o?1e3:o,l=e.refreshOptions;return r.state={width:void 0,height:void 0},r.skipOnMount=n,r.targetRef=s(),r.observableElement=null,ht()||(r.resizeHandler=ut(r.createResizeHandler,i,a,l),r.resizeObserver=new window.ResizeObserver(r.resizeHandler)),r}(function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}D(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)})(e,t),e.prototype.componentDidMount=function(){this.attachObserver()},e.prototype.componentDidUpdate=function(){this.attachObserver()},e.prototype.componentWillUnmount=function(){ht()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},e.prototype.render=function(){var t,e=this.props,r=e.render,i=e.children,a=e.nodeType,l=void 0===a?"div":a,c=this.state,s={width:c.width,height:c.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return r&&r(s);case"childFunction":return(t=i)(s);case"child":if((t=i).type&&"string"==typeof t.type){var u=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(t);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(t,n[i])&&(r[n[i]]=t[n[i]])}return r}(s,["targetRef"]);return o(t,u)}return o(t,s);case"childArray":return(t=i).map((function(t){return!!t&&o(t,s)}));default:return n.createElement(l,null)}}}(u);var pt=ht()?f:h;var mt={exports:{}};mt.exports=function(){var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},e=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,n=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},a=function(t){return(t=+t)+(t>68?1900:2e3)},l=function(t){return function(e){this[t]=+e}},c=[/[+-]\d\d:?(\d\d)?|Z/,function(t){(this.zone||(this.zone={})).offset=function(t){if(!t)return 0;if("Z"===t)return 0;var e=t.match(/([+-]|\d\d)/g),r=60*e[1]+(+e[2]||0);return 0===r?0:"+"===e[0]?-r:r}(t)}],s=function(t){var e=o[t];return e&&(e.indexOf?e:e.s.concat(e.f))},u=function(t,e){var r,n=o.meridiem;if(n){for(var i=1;i<=24;i+=1)if(t.indexOf(n(i,0,e))>-1){r=i>12;break}}else r=t===(e?"pm":"PM");return r},f={A:[i,function(t){this.afternoon=u(t,!1)}],a:[i,function(t){this.afternoon=u(t,!0)}],S:[/\d/,function(t){this.milliseconds=100*+t}],SS:[r,function(t){this.milliseconds=10*+t}],SSS:[/\d{3}/,function(t){this.milliseconds=+t}],s:[n,l("seconds")],ss:[n,l("seconds")],m:[n,l("minutes")],mm:[n,l("minutes")],H:[n,l("hours")],h:[n,l("hours")],HH:[n,l("hours")],hh:[n,l("hours")],D:[n,l("day")],DD:[r,l("day")],Do:[i,function(t){var e=o.ordinal,r=t.match(/\d+/);if(this.day=r[0],e)for(var n=1;n<=31;n+=1)e(n).replace(/\[|\]/g,"")===t&&(this.day=n)}],M:[n,l("month")],MM:[r,l("month")],MMM:[i,function(t){var e=s("months"),r=(s("monthsShort")||e.map((function(t){return t.slice(0,3)}))).indexOf(t)+1;if(r<1)throw new Error;this.month=r%12||r}],MMMM:[i,function(t){var e=s("months").indexOf(t)+1;if(e<1)throw new Error;this.month=e%12||e}],Y:[/[+-]?\d+/,l("year")],YY:[r,function(t){this.year=a(t)}],YYYY:[/\d{4}/,l("year")],Z:c,ZZ:c};function h(r){var n,i;n=r,i=o&&o.formats;for(var a=(r=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(e,r,n){var o=n&&n.toUpperCase();return r||i[n]||t[n]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(t,e,r){return e||r.slice(1)}))}))).match(e),l=a.length,c=0;c<l;c+=1){var s=a[c],u=f[s],h=u&&u[0],d=u&&u[1];a[c]=d?{regex:h,parser:d}:s.replace(/^\[|\]$/g,"")}return function(t){for(var e={},r=0,n=0;r<l;r+=1){var i=a[r];if("string"==typeof i)n+=i.length;else{var o=i.regex,c=i.parser,s=t.slice(n),u=o.exec(s)[0];c.call(e,u),t=t.replace(u,"")}}return function(t){var e=t.afternoon;if(void 0!==e){var r=t.hours;e?r<12&&(t.hours+=12):12===r&&(t.hours=0),delete t.afternoon}}(e),e}}return function(t,e,r){r.p.customParseFormat=!0,t&&t.parseTwoDigitYear&&(a=t.parseTwoDigitYear);var n=e.prototype,i=n.parse;n.parse=function(t){var e=t.date,n=t.utc,a=t.args;this.$u=n;var l=a[1];if("string"==typeof l){var c=!0===a[2],s=!0===a[3],u=c||s,f=a[2];s&&(f=a[2]),o=this.$locale(),!c&&f&&(o=r.Ls[f]),this.$d=function(t,e,r){try{if(["x","X"].indexOf(e)>-1)return new Date(("X"===e?1e3:1)*t);var n=h(e)(t),i=n.year,o=n.month,a=n.day,l=n.hours,c=n.minutes,s=n.seconds,u=n.milliseconds,f=n.zone,d=new Date,g=a||(i||o?1:d.getDate()),p=i||d.getFullYear(),m=0;i&&!o||(m=o>0?o-1:d.getMonth());var y=l||0,v=c||0,$=s||0,S=u||0;return f?new Date(Date.UTC(p,m,g,y,v,$,S+60*f.offset*1e3)):r?new Date(Date.UTC(p,m,g,y,v,$,S)):new Date(p,m,g,y,v,$,S)}catch(t){return new Date("")}}(e,l,n),this.init(),f&&!0!==f&&(this.$L=this.locale(f).$L),u&&e!=this.format(l)&&(this.$d=new Date("")),o={}}else if(l instanceof Array)for(var d=l.length,g=1;g<=d;g+=1){a[1]=l[g-1];var p=r.apply(this,a);if(p.isValid()){this.$d=p.$d,this.$L=p.$L,this.init();break}g===d&&(this.$d=new Date(""))}else i.call(this,t)}}}();var yt,vt,$t=mt.exports,St={exports:{}},Ft=St.exports=(yt={year:0,month:1,day:2,hour:3,minute:4,second:5},vt={},function(t,e,r){var n,i=function(t,e,r){void 0===r&&(r={});var n=new Date(t),i=function(t,e){void 0===e&&(e={});var r=e.timeZoneName||"short",n=t+"|"+r,i=vt[n];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:t,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:r}),vt[n]=i),i}(e,r);return i.formatToParts(n)},o=function(t,e){for(var n=i(t,e),o=[],a=0;a<n.length;a+=1){var l=n[a],c=l.type,s=l.value,u=yt[c];u>=0&&(o[u]=parseInt(s,10))}var f=o[3],h=24===f?0:f,d=o[0]+"-"+o[1]+"-"+o[2]+" "+h+":"+o[4]+":"+o[5]+":000",g=+t;return(r.utc(d).valueOf()-(g-=g%1e3))/6e4},a=e.prototype;a.tz=function(t,e){void 0===t&&(t=n);var i=this.utcOffset(),o=this.toDate(),a=o.toLocaleString("en-US",{timeZone:t}),l=Math.round((o-new Date(a))/1e3/60),c=r(a).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-l,!0);if(e){var s=c.utcOffset();c=c.add(i-s,"minute")}return c.$x.$timezone=t,c},a.offsetName=function(t){var e=this.$x.$timezone||r.tz.guess(),n=i(this.valueOf(),e,{timeZoneName:t}).find((function(t){return"timezonename"===t.type.toLowerCase()}));return n&&n.value};var l=a.startOf;a.startOf=function(t,e){if(!this.$x||!this.$x.$timezone)return l.call(this,t,e);var n=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return l.call(n,t,e).tz(this.$x.$timezone,!0)},r.tz=function(t,e,i){var a=i&&e,l=i||e||n,c=o(+r(),l);if("string"!=typeof t)return r(t).tz(l);var s=function(t,e,r){var n=t-60*e*1e3,i=o(n,r);if(e===i)return[n,e];var a=o(n-=60*(i-e)*1e3,r);return i===a?[n,i]:[t-60*Math.min(i,a)*1e3,Math.max(i,a)]}(r.utc(t,a).valueOf(),c,l),u=s[0],f=s[1],h=r(u).utcOffset(f);return h.$x.$timezone=l,h},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function(t){n=t}}),Dt={exports:{}};Dt.exports=function(t,e,r){e.prototype.isBetween=function(t,e,n,i){var o=r(t),a=r(e),l="("===(i=i||"()")[0],c=")"===i[1];return(l?this.isAfter(o,n):!this.isBefore(o,n))&&(c?this.isBefore(a,n):!this.isAfter(a,n))||(l?this.isBefore(o,n):!this.isAfter(o,n))&&(c?this.isAfter(a,n):!this.isBefore(a,n))}};var bt=Dt.exports,wt={exports:{}};wt.exports=function(t,e){e.prototype.isSameOrBefore=function(t,e){return this.isSame(t,e)||this.isBefore(t,e)}};var Bt=wt.exports,Ht={exports:{}};Ht.exports=function(t,e){e.prototype.isSameOrAfter=function(t,e){return this.isSame(t,e)||this.isAfter(t,e)}};var xt,Ot=Ht.exports;F.extend(bt),F.extend(Bt),F.extend(Ot),F.extend($t),F.extend(Ft),function(t){t.generateDays=t=>{const e=t.startOf("month"),r=F(e).startOf("week");return Mt(r).map((t=>_t(t)))},t.generateDaysForCurrentWeek=t=>{const e=t.startOf("week");return _t(e)},t.generateMonths=t=>{const e=[];for(let r=0;r<12;r++){const n=t.month(r);e.push(F(n))}return e},t.generateDecadeOfYears=t=>{const e=t.year(),r=10*Math.floor(e/10),n=t.year(r),i=[n.subtract(1,"year"),n];for(let t=1;t<11;t++)i.push(n.add(t,"year"));return i},t.getStartEndDecade=t=>{const e=10*Math.floor(+t.format("YYYY")/10);return{beginDecade:e,endDecade:+F(`${e+9}-01-01`).format("YYYY")}},t.convertTo12HourFormat=t=>{const e=F(t,"HH:mm");return e.isValid()?e.format("h:mm a"):""},t.isWithinRange=(t,e,r,n="day")=>!e&&!r||(e&&r?t.isBetween(e,r,n,"[]"):e?t.isSameOrAfter(e,n):t.isSameOrBefore(r,n)),t.isPreviousMonthWithinRange=(e,r)=>t.isWithinRange(e.subtract(1,"month"),r,void 0,"month"),t.isPreviousYearWithinRange=(e,r)=>t.isWithinRange(e.subtract(1,"year"),r,void 0,"year"),t.isPreviousDecadeWithinRange=(e,r)=>{const{beginDecade:n}=t.getStartEndDecade(e);return t.isWithinRange(e.year(n).subtract(1,"year"),r,void 0,"year")},t.isNextMonthWithinRange=(e,r)=>t.isWithinRange(e.add(1,"month"),void 0,r,"month"),t.isNextYearWithinRange=(e,r)=>t.isWithinRange(e.add(1,"year"),void 0,r,"year"),t.isNextDecadeWithinRange=(e,r)=>{const{endDecade:n}=t.getStartEndDecade(e);return t.isWithinRange(e.year(n).add(1,"year"),void 0,r,"year")}}(xt||(xt={}));const Mt=t=>{const e=[t];for(let r=1;r<6;r++){const n=t.add(r,"week");e.push(n)}return e},_t=t=>{const e=[];for(let r=0;r<7;r++){const n=t.add(r,"day");e.push(n)}return e},zt=[1,3,5,7,8,10,12],Et=[4,6,9,11];var At,Tt,kt,Wt;!function(t){t.clampDay=(e,r,n)=>{const i=parseInt(e),o=parseInt(r),a=parseInt(n);return 0==i?"1":zt.includes(o)?Math.min(i,31).toString():Et.includes(o)?Math.min(i,30).toString():2===o?t.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():e},t.clampMonth=t=>{const e=parseInt(t);return 0==e?"1":e>12?"12":t},t.isLeapYear=t=>t%4==0&&t%100!=0||t%400==0,t.getTimeDiffInMinutes=(t,e,r="HH:mm")=>{const n=F(t,r);return F(e,r).diff(n,"minute")}}(At||(At={})),function(t){t.generate=()=>Math.random().toString(36).substring(2,9)}(Tt||(Tt={})),function(t){t.transformWithSpaces=(t,e)=>{const r="(.{"+e+"})";return t.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},t.padValue=(t,e)=>{if("0"===t)return e?t:t.padStart(2,"0");if(""===t)return t;return parseInt(t).toString().padStart(2,"0")},t.shouldTruncateToTwoLines=(t,e)=>{const r=Math.floor(e/9);return t.length>=2*r||1===t.split(" ").length&&t.length>r},t.truncateOneLine=(t,e,r,n,i=8)=>{let o=0;e>r&&(o=Math.floor((e-r)/i));const a=n+o;if(a<t.length){const e=Math.floor(a/2);return t.substring(0,e)+" ... "+t.substring(t.length-e,t.length)}return t}}(kt||(kt={})),F.extend($t),function(t){t.formatHourlyDisplay=t=>F(t,"HH:mm").format("ha"),t.calculateWidth=(t,e,r)=>At.getTimeDiffInMinutes(t,e)/15*(r/2)}(Wt||(Wt={}));var Ct=Array.isArray,Rt="object"==typeof $&&$&&$.Object===Object&&$,Yt="object"==typeof self&&self&&self.Object===Object&&self,jt=Rt||Yt||Function("return this")(),Nt=jt.Symbol,Lt=Nt,It=Object.prototype,Pt=It.hasOwnProperty,Vt=It.toString,Zt=Lt?Lt.toStringTag:void 0;var Ut=function(t){var e=Pt.call(t,Zt),r=t[Zt];try{t[Zt]=void 0;var n=!0}catch(t){}var i=Vt.call(t);return n&&(e?t[Zt]=r:delete t[Zt]),i},Xt=Object.prototype.toString;var Gt=Ut,Jt=function(t){return Xt.call(t)},qt=Nt?Nt.toStringTag:void 0;var Qt=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":qt&&qt in Object(t)?Gt(t):Jt(t)};var Kt=Qt,te=function(t){return null!=t&&"object"==typeof t};var ee=function(t){return"symbol"==typeof t||te(t)&&"[object Symbol]"==Kt(t)},re=Ct,ne=ee,ie=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,oe=/^\w*$/;var ae=function(t,e){if(re(t))return!1;var r=typeof t;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=t&&!ne(t))||(oe.test(t)||!ie.test(t)||null!=e&&t in Object(e))};var le=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},ce=Qt,se=le;var ue,fe=function(t){if(!se(t))return!1;var e=ce(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},he=jt["__core-js_shared__"],de=(ue=/[^.]+$/.exec(he&&he.keys&&he.keys.IE_PROTO||""))?"Symbol(src)_1."+ue:"";var ge=function(t){return!!de&&de in t},pe=Function.prototype.toString;var me=fe,ye=ge,ve=le,$e=function(t){if(null!=t){try{return pe.call(t)}catch(t){}try{return t+""}catch(t){}}return""},Se=/^\[object .+?Constructor\]$/,Fe=Function.prototype,De=Object.prototype,be=Fe.toString,we=De.hasOwnProperty,Be=RegExp("^"+be.call(we).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var He=function(t){return!(!ve(t)||ye(t))&&(me(t)?Be:Se).test($e(t))},xe=function(t,e){return null==t?void 0:t[e]};var Oe=function(t,e){var r=xe(t,e);return He(r)?r:void 0},Me=Oe(Object,"create"),_e=Me;var ze=function(){this.__data__=_e?_e(null):{},this.size=0};var Ee=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},Ae=Me,Te=Object.prototype.hasOwnProperty;var ke=function(t){var e=this.__data__;if(Ae){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return Te.call(e,t)?e[t]:void 0},We=Me,Ce=Object.prototype.hasOwnProperty;var Re=Me;var Ye=ze,je=Ee,Ne=ke,Le=function(t){var e=this.__data__;return We?void 0!==e[t]:Ce.call(e,t)},Ie=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=Re&&void 0===e?"__lodash_hash_undefined__":e,this};function Pe(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}Pe.prototype.clear=Ye,Pe.prototype.delete=je,Pe.prototype.get=Ne,Pe.prototype.has=Le,Pe.prototype.set=Ie;var Ve=Pe;var Ze=function(){this.__data__=[],this.size=0};var Ue=function(t,e){return t===e||t!=t&&e!=e};var Xe=function(t,e){for(var r=t.length;r--;)if(Ue(t[r][0],e))return r;return-1},Ge=Xe,Je=Array.prototype.splice;var qe=Xe;var Qe=Xe;var Ke=Xe;var tr=Ze,er=function(t){var e=this.__data__,r=Ge(e,t);return!(r<0)&&(r==e.length-1?e.pop():Je.call(e,r,1),--this.size,!0)},rr=function(t){var e=this.__data__,r=qe(e,t);return r<0?void 0:e[r][1]},nr=function(t){return Qe(this.__data__,t)>-1},ir=function(t,e){var r=this.__data__,n=Ke(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this};function or(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}or.prototype.clear=tr,or.prototype.delete=er,or.prototype.get=rr,or.prototype.has=nr,or.prototype.set=ir;var ar=or,lr=Oe(jt,"Map"),cr=Ve,sr=ar,ur=lr;var fr=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var hr=function(t,e){var r=t.__data__;return fr(e)?r["string"==typeof e?"string":"hash"]:r.map},dr=hr;var gr=hr;var pr=hr;var mr=hr;var yr=function(){this.size=0,this.__data__={hash:new cr,map:new(ur||sr),string:new cr}},vr=function(t){var e=dr(this,t).delete(t);return this.size-=e?1:0,e},$r=function(t){return gr(this,t).get(t)},Sr=function(t){return pr(this,t).has(t)},Fr=function(t,e){var r=mr(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this};function Dr(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}Dr.prototype.clear=yr,Dr.prototype.delete=vr,Dr.prototype.get=$r,Dr.prototype.has=Sr,Dr.prototype.set=Fr;var br=Dr;function wr(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var r=function(){var n=arguments,i=e?e.apply(this,n):n[0],o=r.cache;if(o.has(i))return o.get(i);var a=t.apply(this,n);return r.cache=o.set(i,a)||o,a};return r.cache=new(wr.Cache||br),r}wr.Cache=br;var Br=wr;var Hr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,xr=/\\(\\)?/g,Or=function(t){var e=Br(t,(function(t){return 500===r.size&&r.clear(),t})),r=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(Hr,(function(t,r,n,i){e.push(n?i.replace(xr,"$1"):r||t)})),e}));var Mr=function(t,e){for(var r=-1,n=null==t?0:t.length,i=Array(n);++r<n;)i[r]=e(t[r],r,t);return i},_r=Ct,zr=ee,Er=Nt?Nt.prototype:void 0,Ar=Er?Er.toString:void 0;var Tr=function t(e){if("string"==typeof e)return e;if(_r(e))return Mr(e,t)+"";if(zr(e))return Ar?Ar.call(e):"";var r=e+"";return"0"==r&&1/e==-Infinity?"-0":r},kr=Tr;var Wr=Ct,Cr=ae,Rr=Or,Yr=function(t){return null==t?"":kr(t)};var jr=ee;var Nr=function(t,e){return Wr(t)?t:Cr(t,e)?[t]:Rr(Yr(t))},Lr=function(t){if("string"==typeof t||jr(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e};var Ir=function(t,e){for(var r=0,n=(e=Nr(e,t)).length;null!=t&&r<n;)t=t[Lr(e[r++])];return r&&r==n?t:void 0};var Pr=function(t,e,r){var n=null==t?void 0:Ir(t,e);return void 0===n?r:n};const Vr=(t,e,r)=>e?Pr(r,e)||Pr(t,e):r||t,Zr=(t,e)=>{const r=e||t.defaultValue;return Pr(t.collections,r)};var Ur;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme",t.designTokenScheme="designTokenScheme",t.resourceScheme="resourceScheme"}(Ur||(Ur={}));const Xr={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Gr=t=>e=>{const r=e.theme,n=Zr(Xr,r[Ur.colorScheme]);return r.options&&r.options.color?Vr(n,t,r.options.color):Vr(n,t)},Jr={Brand:{1:Gr("Brand.1"),2:Gr("Brand.2"),3:Gr("Brand.3"),4:Gr("Brand.4"),5:Gr("Brand.5"),6:Gr("Brand.6")},Primary:Gr("Primary"),PrimaryDark:Gr("PrimaryDark"),Secondary:Gr("Secondary"),Accent:{Light:{1:Gr("Accent.Light.1"),2:Gr("Accent.Light.2"),3:Gr("Accent.Light.3"),4:Gr("Accent.Light.4"),5:Gr("Accent.Light.5"),6:Gr("Accent.Light.6")},Dark:{1:Gr("Accent.Dark.1"),2:Gr("Accent.Dark.2"),3:Gr("Accent.Dark.3")}},Neutral:{1:Gr("Neutral.1"),2:Gr("Neutral.2"),3:Gr("Neutral.3"),4:Gr("Neutral.4"),5:Gr("Neutral.5"),6:Gr("Neutral.6"),7:Gr("Neutral.7"),8:Gr("Neutral.8")},Validation:{Green:{Text:Gr("Validation.Green.Text"),Icon:Gr("Validation.Green.Icon"),Border:Gr("Validation.Green.Border"),Background:Gr("Validation.Green.Background")},Orange:{Text:Gr("Validation.Orange.Text"),Icon:Gr("Validation.Orange.Icon"),Border:Gr("Validation.Orange.Border"),Background:Gr("Validation.Orange.Background"),Badge:Gr("Validation.Orange.Badge")},Red:{Text:Gr("Validation.Red.Text"),Icon:Gr("Validation.Red.Icon"),Border:Gr("Validation.Red.Border"),Background:Gr("Validation.Red.Background")},Blue:{Text:Gr("Validation.Blue.Text"),Icon:Gr("Validation.Blue.Icon"),Border:Gr("Validation.Blue.Border"),Background:Gr("Validation.Blue.Background")}},Shadow:{Accent:Gr("Shadow.Accent"),Red:Gr("Shadow.Red"),Elevation:Gr("Shadow.Elevation")}},qr=m.button`
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

        ${({$highlight:t})=>t&&y`
                background-color: ${Jr.Neutral[7]};
            `}
    }
`,Qr=i.forwardRef((({children:e,focusHighlight:r=!0,focusOutline:n="none",type:i="button",...o},a)=>t(qr,{ref:a,$outline:n,$highlight:r,type:i,...o,children:e}))),Kr={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},tn={collections:{base:{D1:{fontFamily:Kr.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:Kr.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:Kr.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:Kr.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:Kr.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:Kr.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:Kr.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:Kr.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:Kr.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:Kr.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:Kr.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:Kr.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:Kr.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:Kr.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},en=t=>e=>{const r=e.theme,n=Zr(tn,r[Ur.textStyleScheme]);return r.options&&r.options.textStyle?Vr(n,t,r.options.textStyle):Vr(n,t)},rn={D1:{fontFamily:en("D1.fontFamily"),fontSize:en("D1.fontSize"),fontWeight:en("D1.fontWeight"),lineHeight:en("D1.lineHeight"),letterSpacing:en("D1.letterSpacing")},D2:{fontFamily:en("D2.fontFamily"),fontSize:en("D2.fontSize"),fontWeight:en("D2.fontWeight"),lineHeight:en("D2.lineHeight"),letterSpacing:en("D2.letterSpacing")},D3:{fontFamily:en("D3.fontFamily"),fontSize:en("D3.fontSize"),fontWeight:en("D3.fontWeight"),lineHeight:en("D3.lineHeight"),letterSpacing:en("D3.letterSpacing")},D4:{fontFamily:en("D4.fontFamily"),fontSize:en("D4.fontSize"),fontWeight:en("D4.fontWeight"),lineHeight:en("D4.lineHeight"),letterSpacing:en("D4.letterSpacing")},DBody:{fontFamily:en("DBody.fontFamily"),fontSize:en("DBody.fontSize"),fontWeight:en("DBody.fontWeight"),lineHeight:en("DBody.lineHeight"),letterSpacing:en("DBody.letterSpacing")},H1:{fontFamily:en("H1.fontFamily"),fontSize:en("H1.fontSize"),fontWeight:en("H1.fontWeight"),lineHeight:en("H1.lineHeight"),letterSpacing:en("H1.letterSpacing")},H2:{fontFamily:en("H2.fontFamily"),fontSize:en("H2.fontSize"),fontWeight:en("H2.fontWeight"),lineHeight:en("H2.lineHeight"),letterSpacing:en("H2.letterSpacing")},H3:{fontFamily:en("H3.fontFamily"),fontSize:en("H3.fontSize"),fontWeight:en("H3.fontWeight"),lineHeight:en("H3.lineHeight"),letterSpacing:en("H3.letterSpacing")},H4:{fontFamily:en("H4.fontFamily"),fontSize:en("H4.fontSize"),fontWeight:en("H4.fontWeight"),lineHeight:en("H4.lineHeight"),letterSpacing:en("H4.letterSpacing")},H5:{fontFamily:en("H5.fontFamily"),fontSize:en("H5.fontSize"),fontWeight:en("H5.fontWeight"),lineHeight:en("H5.lineHeight"),letterSpacing:en("H5.letterSpacing")},H6:{fontFamily:en("H6.fontFamily"),fontSize:en("H6.fontSize"),fontWeight:en("H6.fontWeight"),lineHeight:en("H6.lineHeight"),letterSpacing:en("H6.letterSpacing")},Body:{fontFamily:en("Body.fontFamily"),fontSize:en("Body.fontSize"),fontWeight:en("Body.fontWeight"),lineHeight:en("Body.lineHeight"),letterSpacing:en("Body.letterSpacing")},BodySmall:{fontFamily:en("BodySmall.fontFamily"),fontSize:en("BodySmall.fontSize"),fontWeight:en("BodySmall.fontWeight"),lineHeight:en("BodySmall.lineHeight"),letterSpacing:en("BodySmall.letterSpacing")},XSmall:{fontFamily:en("XSmall.fontFamily"),fontSize:en("XSmall.fontSize"),fontWeight:en("XSmall.fontWeight"),lineHeight:en("XSmall.lineHeight"),letterSpacing:en("XSmall.letterSpacing")}},nn=t=>{switch(t){case 700:case"bold":return Kr.Bold;case 600:case"semibold":return Kr.Semibold;case 300:case"light":return Kr.Light;case 400:case"regular":return Kr.Regular;default:return""}},on=(t,e)=>r=>{const n=rn[t].fontFamily(r),i=rn[t].fontWeight(r);return Object.values(Kr).includes(n)?y`
                font-family: ${nn(e)||nn(i)||n};
                font-weight: normal !important;
            `:y`
            font-family: ${n};
            font-weight: ${(an(e)||i)??"normal"};
        `},an=t=>{switch(t){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},ln=(t,e,r=!1)=>n=>{const i=rn[t],o=i.fontSize(n);return y`
            ${on(t,e)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(n)||0}rem !important;
            ${y`
                margin-bottom: ${o*(r?1.05:0)}rem;
            `}
        `},cn=(t=!1,e=!1)=>e?y`
            display: block;
        `:t?y`
            display: inline;
        `:y`
            display: block;
        `;var sn;!function(t){t.D1=m.h1`
        ${t=>y`
                ${ln("D1",t.weight,t.paragraph)}
                color: ${Jr.Neutral[1]};
                ${cn(t.inline,t.paragraph)}
            `}
    `,t.D2=m.h1`
        ${t=>y`
                ${ln("D2",t.weight,t.paragraph)}
                color: ${Jr.Neutral[1]};
                ${cn(t.inline,t.paragraph)}
            `}
    `,t.D3=m.h1`
        ${t=>y`
                ${ln("D3",t.weight,t.paragraph)}
                color: ${Jr.Neutral[1]};
                ${cn(t.inline,t.paragraph)}
            `}
    `,t.D4=m.h1`
        ${t=>y`
                ${ln("D4",t.weight,t.paragraph)}
                color: ${Jr.Neutral[1]};
                ${cn(t.inline,t.paragraph)}
            `}
    `,t.DBody=m.h1`
        ${t=>y`
                ${ln("DBody",t.weight,t.paragraph)}
                color: ${Jr.Neutral[1]};
                ${cn(t.inline,t.paragraph)}
            `}
    `,t.H1=m.h1`
        ${t=>y`
                ${ln("H1",t.weight,t.paragraph)}
                color: ${Jr.Neutral[1]};
                ${cn(t.inline,t.paragraph)}
            `}
    `,t.H2=m.h2`
        ${t=>y`
                ${ln("H2",t.weight,t.paragraph)}
                color: ${Jr.Neutral[1]};
                ${cn(t.inline,t.paragraph)}
            `}
    `,t.H3=m.h3`
        ${t=>y`
                ${ln("H3",t.weight,t.paragraph)}
                color: ${Jr.Neutral[1]};
                ${cn(t.inline,t.paragraph)}
            `}
    `,t.H4=m.h4`
        ${t=>y`
                ${ln("H4",t.weight,t.paragraph)}
                color: ${Jr.Neutral[1]};
                ${cn(t.inline,t.paragraph)}
            `}
    `,t.H5=m.h5`
        ${t=>y`
                ${ln("H5",t.weight,t.paragraph)}
                color: ${Jr.Neutral[1]};
                ${cn(t.inline,t.paragraph)}
            `}
    `,t.H6=m.h6`
        ${t=>y`
                ${ln("H6",t.weight,t.paragraph)}
                color: ${Jr.Neutral[1]};
                ${cn(t.inline,t.paragraph)}
            `}
    `,t.Body=m.p`
        ${t=>y`
                ${ln("Body",t.weight,t.paragraph)}
                color: ${Jr.Neutral[1]};
                ${cn(t.inline,t.paragraph)}
            `}
    `,t.BodySmall=m.p`
        ${t=>y`
                ${ln("BodySmall",t.weight,t.paragraph)}
                color: ${Jr.Neutral[1]};
                ${cn(t.inline,t.paragraph)}
            `}
    `,t.XSmall=m.span`
        ${t=>y`
                ${ln("XSmall",t.weight,t.paragraph)}
                color: ${Jr.Neutral[1]};
                ${cn(t.inline,t.paragraph)}
            `}
    `,t.Hyperlink={Default:t=>hn({...t,textStyle:"Body"}),Small:t=>hn({...t,textStyle:"BodySmall"})}}(sn||(sn={}));const un=m.a`
    ${t=>y`
            ${ln(t.textStyle,t.weight)}
            color: ${Jr.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Jr.Secondary};

                svg {
                    color: ${Jr.Secondary};
                }
            }
        `}
`,fn=m(v)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,hn=({external:r=!1,children:n,...i})=>e(un,{...i,children:[n,r&&t(fn,{})]});var dn;!function(t){t[t.Subpage=0]="Subpage",t[t.Domain=1]="Domain"}(dn||(dn={}));const gn=44,pn=m.div`
    position: relative;
    display: flex;
    align-items: center;
`,mn=m(Qr)`
    z-index: 2;
    position: absolute;
    bottom: 1rem;
    background-color: ${Jr.Neutral[8]};
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
`,yn=m(p)`
    width: 1rem;
    height: 1rem;
    color: ${Jr.Primary};
`,vn=m(g)`
    font-size: 1rem;
    color: ${Jr.Primary};
`,$n=m.div`
    overflow: hidden;
    flex-grow: 1;
    position: relative;
    height: 5rem;
`,Sn=m.div`
    position: relative;
    white-space: nowrap;
    height: 1.25rem;
`,Fn=m.div`
    display: flex;
    white-space: nowrap;
`,Dn=m.div`
    display: inline-block;
    width: ${gn}px;
    height: ${({isHour:t})=>t?"1.25rem":"0.625rem"};
    position: relative;
    border-left: 1px solid ${Jr.Neutral[4]};
`,bn=m(sn.XSmall)`
    color: ${Jr.Neutral[2]};
    position: absolute;
    bottom: 10%;
    left: 10%;
`,wn=m.div`
    ${t=>"vertical"===t.$type?y`
                display: flex;
                flex-grow: 1;
                align-items: center;
                justify-content: center;
                width: 100%;
                margin: 1px 0px;
            `:y`
                position: absolute;
                height: 3.375rem;
                width: ${t.$width}px;
                left: ${t.$left}px;
            `}
    background-color: ${({$bgColor:t})=>t};
    cursor: ${({$clickable:t})=>t?"pointer":"default"};

    ${t=>"stripes"===t.$styleType&&y`
            background: repeating-linear-gradient(
                135deg,
                ${t.$bgColor2||Jr.Neutral[5]} 0px,
                ${t.$bgColor2||Jr.Neutral[5]} 10px,
                ${t.$bgColor} 10px,
                ${t.$bgColor} 20px
            );
        `}
`,Bn=m.div`
    position: absolute;
    top: 1.25rem;
    height: 3.375rem;
    z-index: 1;
    border-right: 1px solid ${Jr.Neutral[4]};
`,Hn=m(sn.XSmall)`
    color: ${t=>t.$color||Jr.Neutral[3](t)};
    position: absolute;
    bottom: 0;
    padding-left: 4px;
    padding-bottom: 4px;
    max-width: ${({$slotWidth:t})=>`calc(${t}px - 8px)`};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`,xn=({"data-testid":n,className:i,startTime:o,endTime:c,slots:s,onSlotClick:u,onClick:h,styleAttributes:d})=>{const g=a(null),[p,m]=l(0),[y,v]=l(0);f((()=>{const t=g.current;return t&&t.addEventListener("scroll",$),()=>{t&&t.removeEventListener("scroll",$)}}),[]);const $=()=>{g.current&&m(g.current.scrollLeft)},S=t=>{g.current&&g.current.scrollBy({left:"left"===t?-110:110,behavior:"smooth"})};!function(t){void 0===t&&(t={});var e=t.skipOnMount,r=void 0!==e&&e,n=t.refreshMode,i=t.refreshRate,o=void 0===i?1e3:i,c=t.refreshOptions,s=t.handleWidth,u=void 0===s||s,f=t.handleHeight,h=void 0===f||f,d=t.targetRef,g=t.observerOptions,p=t.onResize,m=a(r),y=a(null),v=null!=d?d:y,$=a(),S=l({width:void 0,height:void 0}),F=S[0],D=S[1];pt((function(){if(!ht()){var t=gt(p,D,u,h);$.current=ut((function(e){(u||h)&&e.forEach((function(e){var r=e&&e.contentRect||{},n=r.width,i=r.height;!m.current&&!ht()&&t({width:n,height:i}),m.current=!1}))}),n,o,c);var e=new window.ResizeObserver($.current);return v.current&&e.observe(v.current,g),function(){e.disconnect();var t=$.current;t&&t.cancel&&t.cancel()}}}),[n,o,c,u,h,p,g,v.current]),b({ref:v},F)}({onResize:()=>{g.current&&v(g.current.clientWidth)},targetRef:g,refreshMode:"debounce",refreshRate:50});const D=t=>t<=22,w=t=>{if(n)return`${n}-${t}`};return e(pn,{className:i,children:[e($n,{"data-testid":n,ref:g,children:[t(Sn,{"data-testid":w("time-marker-wrapper"),"data-id":"marker-wrapper",children:(()=>{const e=[],r=F(o,"HH:mm"),n=F(c,"HH:mm");for(let i=r;i.isBefore(n);i=i.add(30,"minute")){const r=0===i.minute();e.push(t(Dn,{isHour:r,children:r&&t(bn,{weight:"semibold",children:Wt.formatHourlyDisplay(i.format("HH:mm"))})},i.format("HH:mm")))}return e})()}),e(Fn,{"data-testid":w("time-slot-wrapper"),"data-id":"slot-wrapper",children:[d&&(()=>{const{backgroundColor:n,backgroundColor2:i,styleType:a="default"}=d,l=Wt.calculateWidth(o,c,gn);return e(r,{children:[t(Bn,{}),t(wn,{"data-testid":w("default-timeslot"),$width:l,$left:0,$styleType:a,$bgColor:n,$bgColor2:i,$clickable:!!h,onClick:h},"default-timeslot"),t(Bn,{style:{left:`${l}px`}})]})})(),s.map((n=>{const{id:i,startTime:a,endTime:l,label:c,clickable:s=!0,styleAttributes:f}=n,{color:h,styleType:d="default",backgroundColor:g,backgroundColor2:p}=f,m=Wt.calculateWidth(a,l,gn),y=Wt.calculateWidth(o,a,gn);return e(r,{children:[t(Bn,{style:{left:`${y}px`}}),t(wn,{"data-testid":w(`${i}-timeslot`),$width:m,$left:y,$styleType:d,$bgColor:g,$bgColor2:p,$clickable:s,onClick:()=>s&&u(n),children:c&&t(Hn,{$slotWidth:m,$color:h,weight:"semibold",children:D(m)?"...":c})},i),t(Bn,{style:{left:`${y+m}px`}})]})}))]})]}),t(r,{children:p>0&&t(mn,{"data-testid":w("arrow-left"),$direction:"left",focusHighlight:!1,focusOutline:"none",onClick:()=>{S("left")},children:t(vn,{})})}),p+y<Wt.calculateWidth(o,c,gn)?t(mn,{"data-testid":w("arrow-right"),$direction:"right",focusHighlight:!1,focusOutline:"none",onClick:()=>{S("right")},children:t(yn,{})}):t(r,{})]})};export{xn as TimeSlotBar};
//# sourceMappingURL=index.js.map
