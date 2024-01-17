import{jsx as t,jsxs as e,Fragment as n}from"react/jsx-runtime";import*as r from"react";import i,{cloneElement as o,useRef as a,useState as l,isValidElement as s,createRef as c,PureComponent as u,useEffect as f,useLayoutEffect as d}from"react";import{findDOMNode as h}from"react-dom";import{ChevronLeftIcon as g}from"@lifesg/react-icons/chevron-left";import{ChevronRightIcon as p}from"@lifesg/react-icons/chevron-right";import m,{css as y}from"styled-components";import{ExternalIcon as v}from"@lifesg/react-icons/external";var $="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},F={exports:{}};F.exports=function(){var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",o="minute",a="hour",l="day",s="week",c="month",u="quarter",f="year",d="date",h="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},y=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},v={s:y,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+y(r,2,"0")+":"+y(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),o=n-i<0,a=e.clone().add(r+(o?-1:1),c);return+(-(r+(n-i)/(o?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:f,w:s,d:l,D:d,h:a,m:o,s:i,ms:r,Q:u}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},$="en",F={};F[$]=m;var D=function(t){return t instanceof w},S=function t(e,n,r){var i;if(!e)return $;if("string"==typeof e){var o=e.toLowerCase();F[o]&&(i=o),n&&(F[o]=n,i=o);var a=e.split("-");if(!i&&a.length>1)return t(a[0])}else{var l=e.name;F[l]=e,i=l}return!r&&i&&($=i),i||!r&&$},b=function(t,e){if(D(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new w(n)},B=v;B.l=S,B.i=D,B.w=function(t,e){return b(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var w=function(){function m(t){this.$L=S(t.locale,null,!0),this.parse(t)}var y=m.prototype;return y.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(B.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(g);if(r){var i=r[2]-1||0,o=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},y.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},y.$utils=function(){return B},y.isValid=function(){return!(this.$d.toString()===h)},y.isSame=function(t,e){var n=b(t);return this.startOf(e)<=n&&n<=this.endOf(e)},y.isAfter=function(t,e){return b(t)<this.startOf(e)},y.isBefore=function(t,e){return this.endOf(e)<b(t)},y.$g=function(t,e,n){return B.u(t)?this[e]:this.set(n,t)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(t,e){var n=this,r=!!B.u(e)||e,u=B.p(t),h=function(t,e){var i=B.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(l)},g=function(t,e){return B.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},p=this.$W,m=this.$M,y=this.$D,v="set"+(this.$u?"UTC":"");switch(u){case f:return r?h(1,0):h(31,11);case c:return r?h(1,m):h(0,m+1);case s:var $=this.$locale().weekStart||0,F=(p<$?p+7:p)-$;return h(r?y-F:y+(6-F),m);case l:case d:return g(v+"Hours",0);case a:return g(v+"Minutes",1);case o:return g(v+"Seconds",2);case i:return g(v+"Milliseconds",3);default:return this.clone()}},y.endOf=function(t){return this.startOf(t,!1)},y.$set=function(t,e){var n,s=B.p(t),u="set"+(this.$u?"UTC":""),h=(n={},n[l]=u+"Date",n[d]=u+"Date",n[c]=u+"Month",n[f]=u+"FullYear",n[a]=u+"Hours",n[o]=u+"Minutes",n[i]=u+"Seconds",n[r]=u+"Milliseconds",n)[s],g=s===l?this.$D+(e-this.$W):e;if(s===c||s===f){var p=this.clone().set(d,1);p.$d[h](g),p.init(),this.$d=p.set(d,Math.min(this.$D,p.daysInMonth())).$d}else h&&this.$d[h](g);return this.init(),this},y.set=function(t,e){return this.clone().$set(t,e)},y.get=function(t){return this[B.p(t)]()},y.add=function(r,u){var d,h=this;r=Number(r);var g=B.p(u),p=function(t){var e=b(h);return B.w(e.date(e.date()+Math.round(t*r)),h)};if(g===c)return this.set(c,this.$M+r);if(g===f)return this.set(f,this.$y+r);if(g===l)return p(1);if(g===s)return p(7);var m=(d={},d[o]=e,d[a]=n,d[i]=t,d)[g]||1,y=this.$d.getTime()+r*m;return B.w(y,this)},y.subtract=function(t,e){return this.add(-1*t,e)},y.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=B.z(this),o=this.$H,a=this.$m,l=this.$M,s=n.weekdays,c=n.months,u=function(t,n,i,o){return t&&(t[n]||t(e,r))||i[n].slice(0,o)},f=function(t){return B.s(o%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},g={YY:String(this.$y).slice(-2),YYYY:this.$y,M:l+1,MM:B.s(l+1,2,"0"),MMM:u(n.monthsShort,l,c,3),MMMM:u(c,l),D:this.$D,DD:B.s(this.$D,2,"0"),d:String(this.$W),dd:u(n.weekdaysMin,this.$W,s,2),ddd:u(n.weekdaysShort,this.$W,s,3),dddd:s[this.$W],H:String(o),HH:B.s(o,2,"0"),h:f(1),hh:f(2),a:d(o,a,!0),A:d(o,a,!1),m:String(a),mm:B.s(a,2,"0"),s:String(this.$s),ss:B.s(this.$s,2,"0"),SSS:B.s(this.$ms,3,"0"),Z:i};return r.replace(p,(function(t,e){return e||g[t]||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,d,h){var g,p=B.p(d),m=b(r),y=(m.utcOffset()-this.utcOffset())*e,v=this-m,$=B.m(this,m);return $=(g={},g[f]=$/12,g[c]=$,g[u]=$/3,g[s]=(v-y)/6048e5,g[l]=(v-y)/864e5,g[a]=v/n,g[o]=v/e,g[i]=v/t,g)[p]||v,h?$:B.a($)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return F[this.$L]},y.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},y.clone=function(){return B.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),x=w.prototype;return b.prototype=x,[["$ms",r],["$s",i],["$m",o],["$H",a],["$W",l],["$M",c],["$y",f],["$D",d]].forEach((function(t){x[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),b.extend=function(t,e){return t.$i||(t(e,w,b),t.$i=!0),b},b.locale=S,b.isDayjs=D,b.unix=function(t){return b(1e3*t)},b.en=F[$],b.Ls=F,b.p={},b}();var D=F.exports,S=function(t,e){return S=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},S(t,e)};var b=function(){return b=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},b.apply(this,arguments)};var B="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var w=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},x="object"==typeof B&&B&&B.Object===Object&&B,O="object"==typeof self&&self&&self.Object===Object&&self,H=x||O||Function("return this")(),M=H,E=function(){return M.Date.now()},A=/\s/;var _=function(t){for(var e=t.length;e--&&A.test(t.charAt(e)););return e},k=/^\s+/;var z=function(t){return t?t.slice(0,_(t)+1).replace(k,""):t},T=H.Symbol,C=T,Y=Object.prototype,W=Y.hasOwnProperty,j=Y.toString,L=C?C.toStringTag:void 0;var R=function(t){var e=W.call(t,L),n=t[L];try{t[L]=void 0;var r=!0}catch(t){}var i=j.call(t);return r&&(e?t[L]=n:delete t[L]),i},N=Object.prototype.toString;var I=R,P=function(t){return N.call(t)},V=T?T.toStringTag:void 0;var Z=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":V&&V in Object(t)?I(t):P(t)},U=function(t){return null!=t&&"object"==typeof t};var X=z,G=w,J=function(t){return"symbol"==typeof t||U(t)&&"[object Symbol]"==Z(t)},q=/^[-+]0x[0-9a-f]+$/i,Q=/^0b[01]+$/i,K=/^0o[0-7]+$/i,tt=parseInt;var et=w,nt=E,rt=function(t){if("number"==typeof t)return t;if(J(t))return NaN;if(G(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=G(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=X(t);var n=Q.test(t);return n||K.test(t)?tt(t.slice(2),n?2:8):q.test(t)?NaN:+t},it=Math.max,ot=Math.min;var at=function(t,e,n){var r,i,o,a,l,s,c=0,u=!1,f=!1,d=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function h(e){var n=r,o=i;return r=i=void 0,c=e,a=t.apply(o,n)}function g(t){var n=t-s;return void 0===s||n>=e||n<0||f&&t-c>=o}function p(){var t=nt();if(g(t))return m(t);l=setTimeout(p,function(t){var n=e-(t-s);return f?ot(n,o-(t-c)):n}(t))}function m(t){return l=void 0,d&&r?h(t):(r=i=void 0,a)}function y(){var t=nt(),n=g(t);if(r=arguments,i=this,s=t,n){if(void 0===l)return function(t){return c=t,l=setTimeout(p,e),u?h(t):a}(s);if(f)return clearTimeout(l),l=setTimeout(p,e),h(s)}return void 0===l&&(l=setTimeout(p,e)),a}return e=rt(e)||0,et(n)&&(u=!!n.leading,o=(f="maxWait"in n)?it(rt(n.maxWait)||0,e):o,d="trailing"in n?!!n.trailing:d),y.cancel=function(){void 0!==l&&clearTimeout(l),c=0,r=s=i=l=void 0},y.flush=function(){return void 0===l?a:m(nt())},y},lt=at,st=w;var ct=function(t,e,n){var r=!0,i=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return st(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),lt(t,e,{leading:r,maxWait:e,trailing:i})},ut=function(t,e,n,r){switch(e){case"debounce":return at(t,n,r);case"throttle":return ct(t,n,r);default:return t}},ft=function(t){return"function"==typeof t},dt=function(){return"undefined"==typeof window},ht=function(t){return t instanceof Element||t instanceof HTMLDocument},gt=function(t,e,n,r){return function(i){var o=i.width,a=i.height;e((function(e){return e.width===o&&e.height===a||e.width===o&&!r||e.height===a&&!n?e:(t&&ft(t)&&t(o,a),{width:o,height:a})}))}};!function(t){function e(e){var n=t.call(this,e)||this;n.cancelHandler=function(){n.resizeHandler&&n.resizeHandler.cancel&&(n.resizeHandler.cancel(),n.resizeHandler=null)},n.attachObserver=function(){var t=n.props,e=t.targetRef,r=t.observerOptions;if(!dt()){e&&e.current&&(n.targetRef.current=e.current);var i=n.getElement();i&&(n.observableElement&&n.observableElement===i||(n.observableElement=i,n.resizeObserver.observe(i,r)))}},n.getElement=function(){var t=n.props,e=t.querySelector,r=t.targetDomEl;if(dt())return null;if(e)return document.querySelector(e);if(r&&ht(r))return r;if(n.targetRef&&ht(n.targetRef.current))return n.targetRef.current;var i=h(n);if(!i)return null;switch(n.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},n.createResizeHandler=function(t){var e=n.props,r=e.handleWidth,i=void 0===r||r,o=e.handleHeight,a=void 0===o||o,l=e.onResize;if(i||a){var s=gt(l,n.setState.bind(n),i,a);t.forEach((function(t){var e=t&&t.contentRect||{},r=e.width,i=e.height;!n.skipOnMount&&!dt()&&s({width:r,height:i}),n.skipOnMount=!1}))}},n.getRenderType=function(){var t=n.props,e=t.render,r=t.children;return ft(e)?"renderProp":ft(r)?"childFunction":s(r)?"child":Array.isArray(r)?"childArray":"parent"};var r=e.skipOnMount,i=e.refreshMode,o=e.refreshRate,a=void 0===o?1e3:o,l=e.refreshOptions;return n.state={width:void 0,height:void 0},n.skipOnMount=r,n.targetRef=c(),n.observableElement=null,dt()||(n.resizeHandler=ut(n.createResizeHandler,i,a,l),n.resizeObserver=new window.ResizeObserver(n.resizeHandler)),n}(function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}S(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)})(e,t),e.prototype.componentDidMount=function(){this.attachObserver()},e.prototype.componentDidUpdate=function(){this.attachObserver()},e.prototype.componentWillUnmount=function(){dt()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},e.prototype.render=function(){var t,e=this.props,n=e.render,i=e.children,a=e.nodeType,l=void 0===a?"div":a,s=this.state,c={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return n&&n(c);case"childFunction":return(t=i)(c);case"child":if((t=i).type&&"string"==typeof t.type){var u=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}(c,["targetRef"]);return o(t,u)}return o(t,c);case"childArray":return(t=i).map((function(t){return!!t&&o(t,c)}));default:return r.createElement(l,null)}}}(u);var pt=dt()?f:d;var mt={exports:{}};mt.exports=function(){var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},e=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},a=function(t){return(t=+t)+(t>68?1900:2e3)},l=function(t){return function(e){this[t]=+e}},s=[/[+-]\d\d:?(\d\d)?|Z/,function(t){(this.zone||(this.zone={})).offset=function(t){if(!t)return 0;if("Z"===t)return 0;var e=t.match(/([+-]|\d\d)/g),n=60*e[1]+(+e[2]||0);return 0===n?0:"+"===e[0]?-n:n}(t)}],c=function(t){var e=o[t];return e&&(e.indexOf?e:e.s.concat(e.f))},u=function(t,e){var n,r=o.meridiem;if(r){for(var i=1;i<=24;i+=1)if(t.indexOf(r(i,0,e))>-1){n=i>12;break}}else n=t===(e?"pm":"PM");return n},f={A:[i,function(t){this.afternoon=u(t,!1)}],a:[i,function(t){this.afternoon=u(t,!0)}],S:[/\d/,function(t){this.milliseconds=100*+t}],SS:[n,function(t){this.milliseconds=10*+t}],SSS:[/\d{3}/,function(t){this.milliseconds=+t}],s:[r,l("seconds")],ss:[r,l("seconds")],m:[r,l("minutes")],mm:[r,l("minutes")],H:[r,l("hours")],h:[r,l("hours")],HH:[r,l("hours")],hh:[r,l("hours")],D:[r,l("day")],DD:[n,l("day")],Do:[i,function(t){var e=o.ordinal,n=t.match(/\d+/);if(this.day=n[0],e)for(var r=1;r<=31;r+=1)e(r).replace(/\[|\]/g,"")===t&&(this.day=r)}],M:[r,l("month")],MM:[n,l("month")],MMM:[i,function(t){var e=c("months"),n=(c("monthsShort")||e.map((function(t){return t.slice(0,3)}))).indexOf(t)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(t){var e=c("months").indexOf(t)+1;if(e<1)throw new Error;this.month=e%12||e}],Y:[/[+-]?\d+/,l("year")],YY:[n,function(t){this.year=a(t)}],YYYY:[/\d{4}/,l("year")],Z:s,ZZ:s};function d(n){var r,i;r=n,i=o&&o.formats;for(var a=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(e,n,r){var o=r&&r.toUpperCase();return n||i[r]||t[r]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(t,e,n){return e||n.slice(1)}))}))).match(e),l=a.length,s=0;s<l;s+=1){var c=a[s],u=f[c],d=u&&u[0],h=u&&u[1];a[s]=h?{regex:d,parser:h}:c.replace(/^\[|\]$/g,"")}return function(t){for(var e={},n=0,r=0;n<l;n+=1){var i=a[n];if("string"==typeof i)r+=i.length;else{var o=i.regex,s=i.parser,c=t.slice(r),u=o.exec(c)[0];s.call(e,u),t=t.replace(u,"")}}return function(t){var e=t.afternoon;if(void 0!==e){var n=t.hours;e?n<12&&(t.hours+=12):12===n&&(t.hours=0),delete t.afternoon}}(e),e}}return function(t,e,n){n.p.customParseFormat=!0,t&&t.parseTwoDigitYear&&(a=t.parseTwoDigitYear);var r=e.prototype,i=r.parse;r.parse=function(t){var e=t.date,r=t.utc,a=t.args;this.$u=r;var l=a[1];if("string"==typeof l){var s=!0===a[2],c=!0===a[3],u=s||c,f=a[2];c&&(f=a[2]),o=this.$locale(),!s&&f&&(o=n.Ls[f]),this.$d=function(t,e,n){try{if(["x","X"].indexOf(e)>-1)return new Date(("X"===e?1e3:1)*t);var r=d(e)(t),i=r.year,o=r.month,a=r.day,l=r.hours,s=r.minutes,c=r.seconds,u=r.milliseconds,f=r.zone,h=new Date,g=a||(i||o?1:h.getDate()),p=i||h.getFullYear(),m=0;i&&!o||(m=o>0?o-1:h.getMonth());var y=l||0,v=s||0,$=c||0,F=u||0;return f?new Date(Date.UTC(p,m,g,y,v,$,F+60*f.offset*1e3)):n?new Date(Date.UTC(p,m,g,y,v,$,F)):new Date(p,m,g,y,v,$,F)}catch(t){return new Date("")}}(e,l,r),this.init(),f&&!0!==f&&(this.$L=this.locale(f).$L),u&&e!=this.format(l)&&(this.$d=new Date("")),o={}}else if(l instanceof Array)for(var h=l.length,g=1;g<=h;g+=1){a[1]=l[g-1];var p=n.apply(this,a);if(p.isValid()){this.$d=p.$d,this.$L=p.$L,this.init();break}g===h&&(this.$d=new Date(""))}else i.call(this,t)}}}();var yt,vt,$t=mt.exports,Ft={exports:{}},Dt=Ft.exports=(yt={year:0,month:1,day:2,hour:3,minute:4,second:5},vt={},function(t,e,n){var r,i=function(t,e,n){void 0===n&&(n={});var r=new Date(t),i=function(t,e){void 0===e&&(e={});var n=e.timeZoneName||"short",r=t+"|"+n,i=vt[r];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:t,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),vt[r]=i),i}(e,n);return i.formatToParts(r)},o=function(t,e){for(var r=i(t,e),o=[],a=0;a<r.length;a+=1){var l=r[a],s=l.type,c=l.value,u=yt[s];u>=0&&(o[u]=parseInt(c,10))}var f=o[3],d=24===f?0:f,h=o[0]+"-"+o[1]+"-"+o[2]+" "+d+":"+o[4]+":"+o[5]+":000",g=+t;return(n.utc(h).valueOf()-(g-=g%1e3))/6e4},a=e.prototype;a.tz=function(t,e){void 0===t&&(t=r);var i=this.utcOffset(),o=this.toDate(),a=o.toLocaleString("en-US",{timeZone:t}),l=Math.round((o-new Date(a))/1e3/60),s=n(a).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-l,!0);if(e){var c=s.utcOffset();s=s.add(i-c,"minute")}return s.$x.$timezone=t,s},a.offsetName=function(t){var e=this.$x.$timezone||n.tz.guess(),r=i(this.valueOf(),e,{timeZoneName:t}).find((function(t){return"timezonename"===t.type.toLowerCase()}));return r&&r.value};var l=a.startOf;a.startOf=function(t,e){if(!this.$x||!this.$x.$timezone)return l.call(this,t,e);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return l.call(r,t,e).tz(this.$x.$timezone,!0)},n.tz=function(t,e,i){var a=i&&e,l=i||e||r,s=o(+n(),l);if("string"!=typeof t)return n(t).tz(l);var c=function(t,e,n){var r=t-60*e*1e3,i=o(r,n);if(e===i)return[r,e];var a=o(r-=60*(i-e)*1e3,n);return i===a?[r,i]:[t-60*Math.min(i,a)*1e3,Math.max(i,a)]}(n.utc(t,a).valueOf(),s,l),u=c[0],f=c[1],d=n(u).utcOffset(f);return d.$x.$timezone=l,d},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(t){r=t}}),St={exports:{}};St.exports=function(t,e,n){e.prototype.isBetween=function(t,e,r,i){var o=n(t),a=n(e),l="("===(i=i||"()")[0],s=")"===i[1];return(l?this.isAfter(o,r):!this.isBefore(o,r))&&(s?this.isBefore(a,r):!this.isAfter(a,r))||(l?this.isBefore(o,r):!this.isAfter(o,r))&&(s?this.isAfter(a,r):!this.isBefore(a,r))}};var bt=St.exports,Bt={exports:{}};Bt.exports=function(t,e){e.prototype.isSameOrBefore=function(t,e){return this.isSame(t,e)||this.isBefore(t,e)}};var wt=Bt.exports,xt={exports:{}};xt.exports=function(t,e){e.prototype.isSameOrAfter=function(t,e){return this.isSame(t,e)||this.isAfter(t,e)}};var Ot,Ht=xt.exports;D.extend(bt),D.extend(wt),D.extend(Ht),D.extend($t),D.extend(Dt),function(t){t.generateDays=t=>{const e=t.startOf("month"),n=D(e).startOf("week");return Mt(n).map((t=>Et(t)))},t.generateDaysForCurrentWeek=t=>{const e=t.startOf("week");return Et(e)},t.generateMonths=t=>{const e=[];for(let n=0;n<12;n++){const r=t.month(n);e.push(D(r))}return e},t.generateDecadeOfYears=t=>{const e=t.year(),n=10*Math.floor(e/10),r=t.year(n),i=[r.subtract(1,"year"),r];for(let t=1;t<11;t++)i.push(r.add(t,"year"));return i},t.getStartEndDecade=t=>{const e=10*Math.floor(+t.format("YYYY")/10);return{beginDecade:e,endDecade:+D(`${e+9}-01-01`).format("YYYY")}},t.convertTo12HourFormat=t=>{const e=D(t,"HH:mm");return e.isValid()?e.format("h:mm a"):""},t.isWithinRange=(t,e,n,r="day")=>!e&&!n||(e&&n?t.isBetween(e,n,r,"[]"):e?t.isSameOrAfter(e,r):t.isSameOrBefore(n,r)),t.isPreviousMonthWithinRange=(e,n)=>t.isWithinRange(e.subtract(1,"month"),n,void 0,"month"),t.isPreviousYearWithinRange=(e,n)=>t.isWithinRange(e.subtract(1,"year"),n,void 0,"year"),t.isPreviousDecadeWithinRange=(e,n)=>{const{beginDecade:r}=t.getStartEndDecade(e);return t.isWithinRange(e.year(r).subtract(1,"year"),n,void 0,"year")},t.isNextMonthWithinRange=(e,n)=>t.isWithinRange(e.add(1,"month"),void 0,n,"month"),t.isNextYearWithinRange=(e,n)=>t.isWithinRange(e.add(1,"year"),void 0,n,"year"),t.isNextDecadeWithinRange=(e,n)=>{const{endDecade:r}=t.getStartEndDecade(e);return t.isWithinRange(e.year(r).add(1,"year"),void 0,n,"year")},t.getWeekStartEnd=t=>({start:t.startOf("week").format("YYYY-MM-DD"),end:t.endOf("week").format("YYYY-MM-DD")}),t.getFixedRangeStartEnd=(t,e)=>({start:t.format("YYYY-MM-DD"),end:t.add(e-1,"day").format("YYYY-MM-DD")}),t.isDisabledDay=(e,n,r,i)=>{const o=t.isWithinRange(e,r?D(r):void 0,i?D(i):void 0),a=n&&n.includes(e.format("YYYY-MM-DD"));return!o||!!a}}(Ot||(Ot={}));const Mt=t=>{const e=[t];for(let n=1;n<6;n++){const r=t.add(n,"week");e.push(r)}return e},Et=t=>{const e=[];for(let n=0;n<7;n++){const r=t.add(n,"day");e.push(r)}return e},At=[1,3,5,7,8,10,12],_t=[4,6,9,11];var kt,zt,Tt,Ct,Yt;!function(t){t.clampDay=(e,n,r)=>{const i=parseInt(e),o=parseInt(n),a=parseInt(r);return 0==i?"1":At.includes(o)?Math.min(i,31).toString():_t.includes(o)?Math.min(i,30).toString():2===o?t.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():e},t.clampMonth=t=>{const e=parseInt(t);return 0==e?"1":e>12?"12":t},t.isLeapYear=t=>t%4==0&&t%100!=0||t%400==0,t.getTimeDiffInMinutes=(t,e,n="HH:mm")=>{const r=D(t,n);return D(e,n).diff(r,"minute")},t.toDayjs=t=>t?D(t):D(),t.addMinutesToTime=(t,e,n="HH:mm")=>D(t,n).add(e,"minutes").format(n)}(kt||(kt={})),function(t){t.isDateDisabled=(t,e)=>{const{disabledDates:n,minDate:r,maxDate:i}=e;return!!(n&&n.length&&n.includes(t))||(!(!r||!D(t).isBefore(r,"day"))||!(!i||!D(t).isAfter(i,"day")))},t.sanitizeInput=t=>{if(t){if(D(t).isValid())return t}return""}}(zt||(zt={})),function(t){t.generate=()=>Math.random().toString(36).substring(2,9)}(Tt||(Tt={})),function(t){t.transformWithSpaces=(t,e)=>{const n="(.{"+e+"})";return t.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},t.padValue=(t,e)=>{if("0"===t)return e?t:t.padStart(2,"0");if(""===t)return t;return parseInt(t).toString().padStart(2,"0")},t.shouldTruncateToTwoLines=(t,e)=>{const n=Math.floor(e/9);return t.length>=2*n||1===t.split(" ").length&&t.length>n},t.truncateOneLine=(t,e,n,r,i=8)=>{let o=0;e>n&&(o=Math.floor((e-n)/i));const a=r+o;if(a<t.length){const e=Math.floor(a/2);return t.substring(0,e)+" ... "+t.substring(t.length-e,t.length)}return t},t.getTextWidth=(e,n)=>{if("undefined"==typeof document)return 0;const r=(t.getTextWidth.canvas||(t.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(e).width}}(Ct||(Ct={})),D.extend($t),function(t){t.formatHourlyDisplay=t=>D(t,"HH:mm").format("ha"),t.calculateWidth=(t,e,n)=>kt.getTimeDiffInMinutes(t,e)/15*(n/2)}(Yt||(Yt={}));var Wt=Array.isArray,jt="object"==typeof $&&$&&$.Object===Object&&$,Lt="object"==typeof self&&self&&self.Object===Object&&self,Rt=jt||Lt||Function("return this")(),Nt=Rt.Symbol,It=Nt,Pt=Object.prototype,Vt=Pt.hasOwnProperty,Zt=Pt.toString,Ut=It?It.toStringTag:void 0;var Xt=function(t){var e=Vt.call(t,Ut),n=t[Ut];try{t[Ut]=void 0;var r=!0}catch(t){}var i=Zt.call(t);return r&&(e?t[Ut]=n:delete t[Ut]),i},Gt=Object.prototype.toString;var Jt=Xt,qt=function(t){return Gt.call(t)},Qt=Nt?Nt.toStringTag:void 0;var Kt=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":Qt&&Qt in Object(t)?Jt(t):qt(t)};var te=Kt,ee=function(t){return null!=t&&"object"==typeof t};var ne=function(t){return"symbol"==typeof t||ee(t)&&"[object Symbol]"==te(t)},re=Wt,ie=ne,oe=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ae=/^\w*$/;var le=function(t,e){if(re(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!ie(t))||(ae.test(t)||!oe.test(t)||null!=e&&t in Object(e))};var se=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},ce=Kt,ue=se;var fe,de=function(t){if(!ue(t))return!1;var e=ce(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},he=Rt["__core-js_shared__"],ge=(fe=/[^.]+$/.exec(he&&he.keys&&he.keys.IE_PROTO||""))?"Symbol(src)_1."+fe:"";var pe=function(t){return!!ge&&ge in t},me=Function.prototype.toString;var ye=de,ve=pe,$e=se,Fe=function(t){if(null!=t){try{return me.call(t)}catch(t){}try{return t+""}catch(t){}}return""},De=/^\[object .+?Constructor\]$/,Se=Function.prototype,be=Object.prototype,Be=Se.toString,we=be.hasOwnProperty,xe=RegExp("^"+Be.call(we).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Oe=function(t){return!(!$e(t)||ve(t))&&(ye(t)?xe:De).test(Fe(t))},He=function(t,e){return null==t?void 0:t[e]};var Me=function(t,e){var n=He(t,e);return Oe(n)?n:void 0},Ee=Me(Object,"create"),Ae=Ee;var _e=function(){this.__data__=Ae?Ae(null):{},this.size=0};var ke=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},ze=Ee,Te=Object.prototype.hasOwnProperty;var Ce=function(t){var e=this.__data__;if(ze){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return Te.call(e,t)?e[t]:void 0},Ye=Ee,We=Object.prototype.hasOwnProperty;var je=Ee;var Le=_e,Re=ke,Ne=Ce,Ie=function(t){var e=this.__data__;return Ye?void 0!==e[t]:We.call(e,t)},Pe=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=je&&void 0===e?"__lodash_hash_undefined__":e,this};function Ve(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Ve.prototype.clear=Le,Ve.prototype.delete=Re,Ve.prototype.get=Ne,Ve.prototype.has=Ie,Ve.prototype.set=Pe;var Ze=Ve;var Ue=function(){this.__data__=[],this.size=0};var Xe=function(t,e){return t===e||t!=t&&e!=e};var Ge=function(t,e){for(var n=t.length;n--;)if(Xe(t[n][0],e))return n;return-1},Je=Ge,qe=Array.prototype.splice;var Qe=Ge;var Ke=Ge;var tn=Ge;var en=Ue,nn=function(t){var e=this.__data__,n=Je(e,t);return!(n<0)&&(n==e.length-1?e.pop():qe.call(e,n,1),--this.size,!0)},rn=function(t){var e=this.__data__,n=Qe(e,t);return n<0?void 0:e[n][1]},on=function(t){return Ke(this.__data__,t)>-1},an=function(t,e){var n=this.__data__,r=tn(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};function ln(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}ln.prototype.clear=en,ln.prototype.delete=nn,ln.prototype.get=rn,ln.prototype.has=on,ln.prototype.set=an;var sn=ln,cn=Me(Rt,"Map"),un=Ze,fn=sn,dn=cn;var hn=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var gn=function(t,e){var n=t.__data__;return hn(e)?n["string"==typeof e?"string":"hash"]:n.map},pn=gn;var mn=gn;var yn=gn;var vn=gn;var $n=function(){this.size=0,this.__data__={hash:new un,map:new(dn||fn),string:new un}},Fn=function(t){var e=pn(this,t).delete(t);return this.size-=e?1:0,e},Dn=function(t){return mn(this,t).get(t)},Sn=function(t){return yn(this,t).has(t)},bn=function(t,e){var n=vn(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function Bn(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Bn.prototype.clear=$n,Bn.prototype.delete=Fn,Bn.prototype.get=Dn,Bn.prototype.has=Sn,Bn.prototype.set=bn;var wn=Bn;function xn(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=t.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(xn.Cache||wn),n}xn.Cache=wn;var On=xn;var Hn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Mn=/\\(\\)?/g,En=function(t){var e=On(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(Hn,(function(t,n,r,i){e.push(r?i.replace(Mn,"$1"):n||t)})),e}));var An=function(t,e){for(var n=-1,r=null==t?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i},_n=Wt,kn=ne,zn=Nt?Nt.prototype:void 0,Tn=zn?zn.toString:void 0;var Cn=function t(e){if("string"==typeof e)return e;if(_n(e))return An(e,t)+"";if(kn(e))return Tn?Tn.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n},Yn=Cn;var Wn=Wt,jn=le,Ln=En,Rn=function(t){return null==t?"":Yn(t)};var Nn=ne;var In=function(t,e){return Wn(t)?t:jn(t,e)?[t]:Ln(Rn(t))},Pn=function(t){if("string"==typeof t||Nn(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e};var Vn=function(t,e){for(var n=0,r=(e=In(e,t)).length;null!=t&&n<r;)t=t[Pn(e[n++])];return n&&n==r?t:void 0};var Zn=function(t,e,n){var r=null==t?void 0:Vn(t,e);return void 0===r?n:r};const Un=(t,e,n)=>e?Zn(n,e)||Zn(t,e):n||t,Xn=(t,e)=>{const n=e||t.defaultValue;return Zn(t.collections,n)};var Gn;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme",t.designTokenScheme="designTokenScheme",t.resourceScheme="resourceScheme"}(Gn||(Gn={}));const Jn={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#8F0E0E",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},qn=t=>e=>{const n=e.theme,r=Xn(Jn,n[Gn.colorScheme]);return n.options&&n.options.color?Un(r,t,n.options.color):Un(r,t)},Qn={Brand:{1:qn("Brand.1"),2:qn("Brand.2"),3:qn("Brand.3"),4:qn("Brand.4"),5:qn("Brand.5"),6:qn("Brand.6")},Primary:qn("Primary"),PrimaryDark:qn("PrimaryDark"),Secondary:qn("Secondary"),Accent:{Light:{1:qn("Accent.Light.1"),2:qn("Accent.Light.2"),3:qn("Accent.Light.3"),4:qn("Accent.Light.4"),5:qn("Accent.Light.5"),6:qn("Accent.Light.6")},Dark:{1:qn("Accent.Dark.1"),2:qn("Accent.Dark.2"),3:qn("Accent.Dark.3")}},Neutral:{1:qn("Neutral.1"),2:qn("Neutral.2"),3:qn("Neutral.3"),4:qn("Neutral.4"),5:qn("Neutral.5"),6:qn("Neutral.6"),7:qn("Neutral.7"),8:qn("Neutral.8")},Validation:{Green:{Text:qn("Validation.Green.Text"),Icon:qn("Validation.Green.Icon"),Border:qn("Validation.Green.Border"),Background:qn("Validation.Green.Background")},Orange:{Text:qn("Validation.Orange.Text"),Icon:qn("Validation.Orange.Icon"),Border:qn("Validation.Orange.Border"),Background:qn("Validation.Orange.Background"),Badge:qn("Validation.Orange.Badge")},Red:{Text:qn("Validation.Red.Text"),Icon:qn("Validation.Red.Icon"),Border:qn("Validation.Red.Border"),Background:qn("Validation.Red.Background")},Blue:{Text:qn("Validation.Blue.Text"),Icon:qn("Validation.Blue.Icon"),Border:qn("Validation.Blue.Border"),Background:qn("Validation.Blue.Background")}},Shadow:{Accent:qn("Shadow.Accent"),Red:qn("Shadow.Red"),Elevation:qn("Shadow.Elevation")}};function Kn(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}const tr=m.button`
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
                background-color: ${Qn.Neutral[7]};
            `}
    }
`,er=i.forwardRef(((e,n)=>{var{children:r,focusHighlight:i=!0,focusOutline:o="none",type:a="button"}=e,l=Kn(e,["children","focusHighlight","focusOutline","type"]);return t(tr,Object.assign({ref:n,$outline:o,$highlight:i,type:a},l,{children:r}))})),nr={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},rr={collections:{base:{D1:{fontFamily:nr.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:nr.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:nr.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:nr.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:nr.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:nr.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:nr.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:nr.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:nr.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:nr.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:nr.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:nr.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:nr.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:nr.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},ir=t=>e=>{const n=e.theme,r=Xn(rr,n[Gn.textStyleScheme]);return n.options&&n.options.textStyle?Un(r,t,n.options.textStyle):Un(r,t)},or={D1:{fontFamily:ir("D1.fontFamily"),fontSize:ir("D1.fontSize"),fontWeight:ir("D1.fontWeight"),lineHeight:ir("D1.lineHeight"),letterSpacing:ir("D1.letterSpacing")},D2:{fontFamily:ir("D2.fontFamily"),fontSize:ir("D2.fontSize"),fontWeight:ir("D2.fontWeight"),lineHeight:ir("D2.lineHeight"),letterSpacing:ir("D2.letterSpacing")},D3:{fontFamily:ir("D3.fontFamily"),fontSize:ir("D3.fontSize"),fontWeight:ir("D3.fontWeight"),lineHeight:ir("D3.lineHeight"),letterSpacing:ir("D3.letterSpacing")},D4:{fontFamily:ir("D4.fontFamily"),fontSize:ir("D4.fontSize"),fontWeight:ir("D4.fontWeight"),lineHeight:ir("D4.lineHeight"),letterSpacing:ir("D4.letterSpacing")},DBody:{fontFamily:ir("DBody.fontFamily"),fontSize:ir("DBody.fontSize"),fontWeight:ir("DBody.fontWeight"),lineHeight:ir("DBody.lineHeight"),letterSpacing:ir("DBody.letterSpacing")},H1:{fontFamily:ir("H1.fontFamily"),fontSize:ir("H1.fontSize"),fontWeight:ir("H1.fontWeight"),lineHeight:ir("H1.lineHeight"),letterSpacing:ir("H1.letterSpacing")},H2:{fontFamily:ir("H2.fontFamily"),fontSize:ir("H2.fontSize"),fontWeight:ir("H2.fontWeight"),lineHeight:ir("H2.lineHeight"),letterSpacing:ir("H2.letterSpacing")},H3:{fontFamily:ir("H3.fontFamily"),fontSize:ir("H3.fontSize"),fontWeight:ir("H3.fontWeight"),lineHeight:ir("H3.lineHeight"),letterSpacing:ir("H3.letterSpacing")},H4:{fontFamily:ir("H4.fontFamily"),fontSize:ir("H4.fontSize"),fontWeight:ir("H4.fontWeight"),lineHeight:ir("H4.lineHeight"),letterSpacing:ir("H4.letterSpacing")},H5:{fontFamily:ir("H5.fontFamily"),fontSize:ir("H5.fontSize"),fontWeight:ir("H5.fontWeight"),lineHeight:ir("H5.lineHeight"),letterSpacing:ir("H5.letterSpacing")},H6:{fontFamily:ir("H6.fontFamily"),fontSize:ir("H6.fontSize"),fontWeight:ir("H6.fontWeight"),lineHeight:ir("H6.lineHeight"),letterSpacing:ir("H6.letterSpacing")},Body:{fontFamily:ir("Body.fontFamily"),fontSize:ir("Body.fontSize"),fontWeight:ir("Body.fontWeight"),lineHeight:ir("Body.lineHeight"),letterSpacing:ir("Body.letterSpacing")},BodySmall:{fontFamily:ir("BodySmall.fontFamily"),fontSize:ir("BodySmall.fontSize"),fontWeight:ir("BodySmall.fontWeight"),lineHeight:ir("BodySmall.lineHeight"),letterSpacing:ir("BodySmall.letterSpacing")},XSmall:{fontFamily:ir("XSmall.fontFamily"),fontSize:ir("XSmall.fontSize"),fontWeight:ir("XSmall.fontWeight"),lineHeight:ir("XSmall.lineHeight"),letterSpacing:ir("XSmall.letterSpacing")}},ar=t=>{switch(t){case 700:case"bold":return nr.Bold;case 600:case"semibold":return nr.Semibold;case 300:case"light":return nr.Light;case 400:case"regular":return nr.Regular;default:return""}},lr=(t,e)=>n=>{var r;const i=or[t].fontFamily(n),o=or[t].fontWeight(n);return Object.values(nr).includes(i)?y`
                font-family: ${ar(e)||ar(o)||i};
                font-weight: normal !important;
            `:y`
            font-family: ${i};
            font-weight: ${null!==(r=sr(e)||o)&&void 0!==r?r:"normal"};
        `},sr=t=>{switch(t){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},cr=t=>{if(t>0)return y`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${t};
            line-clamp: ${t};
            overflow: hidden;
        `},ur=(t,e,n=!1)=>r=>{const i=or[t],o=i.fontSize(r);return y`
            ${lr(t,e)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${y`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},fr=(t=!1,e=!1,n=void 0)=>e?y`
            display: block;
            ${cr(n)}
        `:t?y`
            display: inline;
        `:y`
            display: block;
            ${cr(n)}
        `;var dr;!function(t){t.D1=m.h1`
        ${t=>y`
                ${ur("D1",t.weight,t.paragraph)}
                color: ${Qn.Neutral[1]};
                ${fr(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.D2=m.h1`
        ${t=>y`
                ${ur("D2",t.weight,t.paragraph)}
                color: ${Qn.Neutral[1]};
                ${fr(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.D3=m.h1`
        ${t=>y`
                ${ur("D3",t.weight,t.paragraph)}
                color: ${Qn.Neutral[1]};
                ${fr(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.D4=m.h1`
        ${t=>y`
                ${ur("D4",t.weight,t.paragraph)}
                color: ${Qn.Neutral[1]};
                ${fr(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.DBody=m.h1`
        ${t=>y`
                ${ur("DBody",t.weight,t.paragraph)}
                color: ${Qn.Neutral[1]};
                ${fr(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H1=m.h1`
        ${t=>y`
                ${ur("H1",t.weight,t.paragraph)}
                color: ${Qn.Neutral[1]};
                ${fr(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H2=m.h2`
        ${t=>y`
                ${ur("H2",t.weight,t.paragraph)}
                color: ${Qn.Neutral[1]};
                ${fr(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H3=m.h3`
        ${t=>y`
                ${ur("H3",t.weight,t.paragraph)}
                color: ${Qn.Neutral[1]};
                ${fr(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H4=m.h4`
        ${t=>y`
                ${ur("H4",t.weight,t.paragraph)}
                color: ${Qn.Neutral[1]};
                ${fr(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H5=m.h5`
        ${t=>y`
                ${ur("H5",t.weight,t.paragraph)}
                color: ${Qn.Neutral[1]};
                ${fr(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.H6=m.h6`
        ${t=>y`
                ${ur("H6",t.weight,t.paragraph)}
                color: ${Qn.Neutral[1]};
                ${fr(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.Body=m.p`
        ${t=>y`
                ${ur("Body",t.weight,t.paragraph)}
                color: ${Qn.Neutral[1]};
                ${fr(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.BodySmall=m.p`
        ${t=>y`
                ${ur("BodySmall",t.weight,t.paragraph)}
                color: ${Qn.Neutral[1]};
                ${fr(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.XSmall=m.span`
        ${t=>y`
                ${ur("XSmall",t.weight,t.paragraph)}
                color: ${Qn.Neutral[1]};
                ${fr(t.inline,t.paragraph,t.maxLines)}
            `}
    `,t.Hyperlink={Default:t=>pr(Object.assign(Object.assign({},t),{textStyle:"Body"})),Small:t=>pr(Object.assign(Object.assign({},t),{textStyle:"BodySmall"}))}}(dr||(dr={}));const hr=m.a`
    ${t=>y`
            ${ur(t.textStyle,t.weight)}
            color: ${Qn.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Qn.Secondary};

                svg {
                    color: ${Qn.Secondary};
                }
            }
        `}
`,gr=m(v)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,pr=n=>{var{external:r=!1,children:i}=n,o=Kn(n,["external","children"]);return e(hr,Object.assign({},o,{children:[i,r&&t(gr,{})]}))};var mr;!function(t){t[t.Subpage=0]="Subpage",t[t.Domain=1]="Domain"}(mr||(mr={}));const yr=1.25,vr=t=>"minified"===t?12:40,$r=t=>"minified"===t?12:40,Fr=m.div`
    position: relative;
    display: flex;
    align-items: center;
`,Dr=m(er)`
    z-index: 2;
    position: absolute;
    bottom: ${({$variant:t})=>"default"===t?"0.25rem":"0rem"};
    background-color: ${Qn.Neutral[8]};
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
`,Sr=m(p)`
    width: 1rem;
    height: 1rem;
    color: ${Qn.Primary};
`,br=m(g)`
    font-size: 1rem;
    color: ${Qn.Primary};
`,Br=m.div`
    overflow: hidden;
    flex-grow: 1;
    position: relative;
    height: ${({$variant:t})=>`${20+$r(t)}px`};
`,wr=m.div`
    position: relative;
    white-space: nowrap;
    height: ${yr}rem;
`,xr=m.div`
    display: flex;
    white-space: nowrap;
`,Or=m.div`
    display: inline-block;
    width: ${({$variant:t})=>`${vr(t)}px`};
    position: relative;
    border-left: 1px solid ${Qn.Neutral[2]};
    ${t=>{let e=0;switch(t.$variant){case"default":e=t.$isLongMarker?yr:.625;break;case"minified":e=t.$isLongMarker?yr:0;break;default:e=0}return y`
            height: ${e}rem;
        `}}
`,Hr=m(dr.XSmall)`
    color: ${Qn.Neutral[2]};
    position: absolute;
    bottom: 10%;
    left: 10%;
`,Mr=m.div`
    ${t=>"vertical"===t.$type?y`
                display: flex;
                flex-grow: 1;
                align-items: center;
                justify-content: center;
                width: 100%;
                margin: 1px 0px;
            `:y`
                position: absolute;
                height: ${$r(t.$variant)}px;
                width: ${t.$width}px;
                left: ${t.$left}px;
            `}
    background-color: ${({$bgColor:t})=>t};
    cursor: ${({$clickable:t})=>t?"pointer":"default"};

    ${t=>"stripes"===t.$styleType&&y`
            background: repeating-linear-gradient(
                135deg,
                ${t.$bgColor2||Qn.Neutral[5]} 0px,
                ${t.$bgColor2||Qn.Neutral[5]} 10px,
                ${t.$bgColor} 10px,
                ${t.$bgColor} 20px
            );
        `}
`,Er=m.div`
    position: absolute;
    top: ${yr}rem;
    height: ${({$variant:t})=>`${$r(t)}px`};
    z-index: 1;
    border-right: 1px solid ${Qn.Neutral[2]};
`,Ar=m(dr.XSmall)`
    color: ${t=>t.$color||Qn.Neutral[2](t)};
    position: absolute;
    bottom: 0;
    padding-left: 4px;
    padding-bottom: 4px;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`,_r=({"data-testid":r,className:i,variant:o="default",startTime:s,endTime:c,slots:u,onSlotClick:d,onClick:h,styleAttributes:g})=>{const p=a(null),[m,y]=l(0),[v,$]=l(0),F=vr(o),S=2.5*F;f((()=>{const t=p.current;return t&&t.addEventListener("scroll",B),()=>{t&&t.removeEventListener("scroll",B)}}),[]);const B=()=>{p.current&&y(p.current.scrollLeft)},w=t=>{p.current&&p.current.scrollBy({left:"left"===t?-S:S,behavior:"smooth"})};!function(t){void 0===t&&(t={});var e=t.skipOnMount,n=void 0!==e&&e,r=t.refreshMode,i=t.refreshRate,o=void 0===i?1e3:i,s=t.refreshOptions,c=t.handleWidth,u=void 0===c||c,f=t.handleHeight,d=void 0===f||f,h=t.targetRef,g=t.observerOptions,p=t.onResize,m=a(n),y=a(null),v=null!=h?h:y,$=a(),F=l({width:void 0,height:void 0}),D=F[0],S=F[1];pt((function(){if(!dt()){var t=gt(p,S,u,d);$.current=ut((function(e){(u||d)&&e.forEach((function(e){var n=e&&e.contentRect||{},r=n.width,i=n.height;!m.current&&!dt()&&t({width:r,height:i}),m.current=!1}))}),r,o,s);var e=new window.ResizeObserver($.current);return v.current&&e.observe(v.current,g),function(){e.disconnect();var t=$.current;t&&t.cancel&&t.cancel()}}}),[r,o,s,u,d,p,g,v.current]),b({ref:v},D)}({onResize:()=>{p.current&&$(p.current.clientWidth)},targetRef:p,refreshMode:"debounce",refreshRate:50});const x=t=>t<=F/2,O=t=>{if(r)return`${r}-${t}`},H=(t,e,n)=>{const r=0===t.minute();if("default"===n)return r;return r&&(e?t.hour()%2==0:t.hour()%2==1)};return e(Fr,Object.assign({className:i},{children:[e(Br,Object.assign({"data-testid":r,ref:p,$variant:o},{children:[t(wr,Object.assign({"data-testid":O("time-marker-wrapper"),"data-id":"marker-wrapper"},{children:(()=>{const e=[],n=D(s,"HH:mm"),r=D(c,"HH:mm"),i=n.hour()%2==0;for(let a=n;a.isBefore(r);a=a.add(30,"minute")){const n=H(a,i,o);e.push(t(Or,Object.assign({$isLongMarker:n,$variant:o},{children:n&&t(Hr,Object.assign({weight:"semibold"},{children:Yt.formatHourlyDisplay(a.format("HH:mm"))}))}),a.format("HH:mm")))}return e})()})),e(xr,Object.assign({"data-testid":O("time-slot-wrapper"),"data-id":"slot-wrapper"},{children:[g&&(()=>{const{backgroundColor:r,backgroundColor2:i,styleType:a="default"}=g,l=Yt.calculateWidth(s,c,F),u=!!h&&"default"===o;return e(n,{children:[t(Er,{$variant:o}),t(Mr,{"data-testid":O("default-timeslot"),$width:l,$variant:o,$left:0,$styleType:a,$bgColor:r,$bgColor2:i,$clickable:u,onClick:u?h:void 0},"default-timeslot")]})})(),u.map((n=>{const{id:r,startTime:i,endTime:a,label:l,clickable:u=!0,styleAttributes:f}=n,{color:h,styleType:g="default",backgroundColor:p,backgroundColor2:m}=f,y=Yt.calculateWidth(i,a,F),v=Yt.calculateWidth(s,i,F),$=u&&"default"===o;return e("div",{children:[t(Er,{$variant:o,style:{left:`${v}px`}}),t(Mr,Object.assign({"data-testid":O(`${r}-timeslot`),$width:y,$left:v,$styleType:g,$variant:o,$bgColor:p,$bgColor2:m,$clickable:$,onClick:()=>$&&d(n)},{children:l&&"default"===o&&t(Ar,Object.assign({$slotWidth:y,$color:h,weight:"semibold"},{children:x(y)?"...":l}))})),c!==a&&t(Er,{$variant:o,style:{left:`${v+y}px`}})]},r)}))]}))]})),t(n,{children:m>0&&t(Dr,Object.assign({"data-testid":O("arrow-left"),$direction:"left",$variant:o,focusHighlight:!1,focusOutline:"none",onClick:()=>{w("left")}},{children:t(br,{})}))}),m+v<Yt.calculateWidth(s,c,F)?t(Dr,Object.assign({"data-testid":O("arrow-right"),$direction:"right",$variant:o,focusHighlight:!1,focusOutline:"none",onClick:()=>{w("right")}},{children:t(Sr,{})})):t(n,{})]}))};export{_r as TimeSlotBar};
//# sourceMappingURL=index.js.map
