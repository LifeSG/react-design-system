import{jsx as t,jsxs as e,Fragment as n}from"react/jsx-runtime";import*as r from"react";import i,{cloneElement as o,useRef as a,useState as l,isValidElement as c,createRef as s,PureComponent as u,useEffect as f,useLayoutEffect as h}from"react";import{findDOMNode as d}from"react-dom";import{ChevronLeftIcon as g}from"@lifesg/react-icons/chevron-left";import{ChevronRightIcon as p}from"@lifesg/react-icons/chevron-right";import m,{css as y}from"styled-components";import{ExternalIcon as v}from"@lifesg/react-icons/external";var $="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},S={exports:{}};S.exports=function(){var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",o="minute",a="hour",l="day",c="week",s="month",u="quarter",f="year",h="date",d="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},y=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},v={s:y,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+y(r,2,"0")+":"+y(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,s),o=n-i<0,a=e.clone().add(r+(o?-1:1),s);return+(-(r+(n-i)/(o?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:s,y:f,w:c,d:l,D:h,h:a,m:o,s:i,ms:r,Q:u}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},$="en",S={};S[$]=m;var b=function(t){return t instanceof B},F=function t(e,n,r){var i;if(!e)return $;if("string"==typeof e){var o=e.toLowerCase();S[o]&&(i=o),n&&(S[o]=n,i=o);var a=e.split("-");if(!i&&a.length>1)return t(a[0])}else{var l=e.name;S[l]=e,i=l}return!r&&i&&($=i),i||!r&&$},D=function(t,e){if(b(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new B(n)},w=v;w.l=F,w.i=b,w.w=function(t,e){return D(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var B=function(){function m(t){this.$L=F(t.locale,null,!0),this.parse(t)}var y=m.prototype;return y.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(w.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(g);if(r){var i=r[2]-1||0,o=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},y.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},y.$utils=function(){return w},y.isValid=function(){return!(this.$d.toString()===d)},y.isSame=function(t,e){var n=D(t);return this.startOf(e)<=n&&n<=this.endOf(e)},y.isAfter=function(t,e){return D(t)<this.startOf(e)},y.isBefore=function(t,e){return this.endOf(e)<D(t)},y.$g=function(t,e,n){return w.u(t)?this[e]:this.set(n,t)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(t,e){var n=this,r=!!w.u(e)||e,u=w.p(t),d=function(t,e){var i=w.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(l)},g=function(t,e){return w.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},p=this.$W,m=this.$M,y=this.$D,v="set"+(this.$u?"UTC":"");switch(u){case f:return r?d(1,0):d(31,11);case s:return r?d(1,m):d(0,m+1);case c:var $=this.$locale().weekStart||0,S=(p<$?p+7:p)-$;return d(r?y-S:y+(6-S),m);case l:case h:return g(v+"Hours",0);case a:return g(v+"Minutes",1);case o:return g(v+"Seconds",2);case i:return g(v+"Milliseconds",3);default:return this.clone()}},y.endOf=function(t){return this.startOf(t,!1)},y.$set=function(t,e){var n,c=w.p(t),u="set"+(this.$u?"UTC":""),d=(n={},n[l]=u+"Date",n[h]=u+"Date",n[s]=u+"Month",n[f]=u+"FullYear",n[a]=u+"Hours",n[o]=u+"Minutes",n[i]=u+"Seconds",n[r]=u+"Milliseconds",n)[c],g=c===l?this.$D+(e-this.$W):e;if(c===s||c===f){var p=this.clone().set(h,1);p.$d[d](g),p.init(),this.$d=p.set(h,Math.min(this.$D,p.daysInMonth())).$d}else d&&this.$d[d](g);return this.init(),this},y.set=function(t,e){return this.clone().$set(t,e)},y.get=function(t){return this[w.p(t)]()},y.add=function(r,u){var h,d=this;r=Number(r);var g=w.p(u),p=function(t){var e=D(d);return w.w(e.date(e.date()+Math.round(t*r)),d)};if(g===s)return this.set(s,this.$M+r);if(g===f)return this.set(f,this.$y+r);if(g===l)return p(1);if(g===c)return p(7);var m=(h={},h[o]=e,h[a]=n,h[i]=t,h)[g]||1,y=this.$d.getTime()+r*m;return w.w(y,this)},y.subtract=function(t,e){return this.add(-1*t,e)},y.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||d;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=w.z(this),o=this.$H,a=this.$m,l=this.$M,c=n.weekdays,s=n.months,u=function(t,n,i,o){return t&&(t[n]||t(e,r))||i[n].slice(0,o)},f=function(t){return w.s(o%12||12,t,"0")},h=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},g={YY:String(this.$y).slice(-2),YYYY:this.$y,M:l+1,MM:w.s(l+1,2,"0"),MMM:u(n.monthsShort,l,s,3),MMMM:u(s,l),D:this.$D,DD:w.s(this.$D,2,"0"),d:String(this.$W),dd:u(n.weekdaysMin,this.$W,c,2),ddd:u(n.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(o),HH:w.s(o,2,"0"),h:f(1),hh:f(2),a:h(o,a,!0),A:h(o,a,!1),m:String(a),mm:w.s(a,2,"0"),s:String(this.$s),ss:w.s(this.$s,2,"0"),SSS:w.s(this.$ms,3,"0"),Z:i};return r.replace(p,(function(t,e){return e||g[t]||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,h,d){var g,p=w.p(h),m=D(r),y=(m.utcOffset()-this.utcOffset())*e,v=this-m,$=w.m(this,m);return $=(g={},g[f]=$/12,g[s]=$,g[u]=$/3,g[c]=(v-y)/6048e5,g[l]=(v-y)/864e5,g[a]=v/n,g[o]=v/e,g[i]=v/t,g)[p]||v,d?$:w.a($)},y.daysInMonth=function(){return this.endOf(s).$D},y.$locale=function(){return S[this.$L]},y.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=F(t,e,!0);return r&&(n.$L=r),n},y.clone=function(){return w.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),H=B.prototype;return D.prototype=H,[["$ms",r],["$s",i],["$m",o],["$H",a],["$W",l],["$M",s],["$y",f],["$D",h]].forEach((function(t){H[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),D.extend=function(t,e){return t.$i||(t(e,B,D),t.$i=!0),D},D.locale=F,D.isDayjs=b,D.unix=function(t){return D(1e3*t)},D.en=S[$],D.Ls=S,D.p={},D}();var b=S.exports,F=function(t,e){return F=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},F(t,e)};var D=function(){return D=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},D.apply(this,arguments)};var w="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var B=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},H="object"==typeof w&&w&&w.Object===Object&&w,O="object"==typeof self&&self&&self.Object===Object&&self,x=H||O||Function("return this")(),M=x,_=function(){return M.Date.now()},E=/\s/;var z=function(t){for(var e=t.length;e--&&E.test(t.charAt(e)););return e},T=/^\s+/;var A=function(t){return t?t.slice(0,z(t)+1).replace(T,""):t},k=x.Symbol,W=k,j=Object.prototype,C=j.hasOwnProperty,R=j.toString,Y=W?W.toStringTag:void 0;var N=function(t){var e=C.call(t,Y),n=t[Y];try{t[Y]=void 0;var r=!0}catch(t){}var i=R.call(t);return r&&(e?t[Y]=n:delete t[Y]),i},L=Object.prototype.toString;var I=N,P=function(t){return L.call(t)},V=k?k.toStringTag:void 0;var Z=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":V&&V in Object(t)?I(t):P(t)},U=function(t){return null!=t&&"object"==typeof t};var X=A,G=B,J=function(t){return"symbol"==typeof t||U(t)&&"[object Symbol]"==Z(t)},q=/^[-+]0x[0-9a-f]+$/i,Q=/^0b[01]+$/i,K=/^0o[0-7]+$/i,tt=parseInt;var et=B,nt=_,rt=function(t){if("number"==typeof t)return t;if(J(t))return NaN;if(G(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=G(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=X(t);var n=Q.test(t);return n||K.test(t)?tt(t.slice(2),n?2:8):q.test(t)?NaN:+t},it=Math.max,ot=Math.min;var at=function(t,e,n){var r,i,o,a,l,c,s=0,u=!1,f=!1,h=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function d(e){var n=r,o=i;return r=i=void 0,s=e,a=t.apply(o,n)}function g(t){var n=t-c;return void 0===c||n>=e||n<0||f&&t-s>=o}function p(){var t=nt();if(g(t))return m(t);l=setTimeout(p,function(t){var n=e-(t-c);return f?ot(n,o-(t-s)):n}(t))}function m(t){return l=void 0,h&&r?d(t):(r=i=void 0,a)}function y(){var t=nt(),n=g(t);if(r=arguments,i=this,c=t,n){if(void 0===l)return function(t){return s=t,l=setTimeout(p,e),u?d(t):a}(c);if(f)return clearTimeout(l),l=setTimeout(p,e),d(c)}return void 0===l&&(l=setTimeout(p,e)),a}return e=rt(e)||0,et(n)&&(u=!!n.leading,o=(f="maxWait"in n)?it(rt(n.maxWait)||0,e):o,h="trailing"in n?!!n.trailing:h),y.cancel=function(){void 0!==l&&clearTimeout(l),s=0,r=c=i=l=void 0},y.flush=function(){return void 0===l?a:m(nt())},y},lt=at,ct=B;var st=function(t,e,n){var r=!0,i=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return ct(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),lt(t,e,{leading:r,maxWait:e,trailing:i})},ut=function(t,e,n,r){switch(e){case"debounce":return at(t,n,r);case"throttle":return st(t,n,r);default:return t}},ft=function(t){return"function"==typeof t},ht=function(){return"undefined"==typeof window},dt=function(t){return t instanceof Element||t instanceof HTMLDocument},gt=function(t,e,n,r){return function(i){var o=i.width,a=i.height;e((function(e){return e.width===o&&e.height===a||e.width===o&&!r||e.height===a&&!n?e:(t&&ft(t)&&t(o,a),{width:o,height:a})}))}};!function(t){function e(e){var n=t.call(this,e)||this;n.cancelHandler=function(){n.resizeHandler&&n.resizeHandler.cancel&&(n.resizeHandler.cancel(),n.resizeHandler=null)},n.attachObserver=function(){var t=n.props,e=t.targetRef,r=t.observerOptions;if(!ht()){e&&e.current&&(n.targetRef.current=e.current);var i=n.getElement();i&&(n.observableElement&&n.observableElement===i||(n.observableElement=i,n.resizeObserver.observe(i,r)))}},n.getElement=function(){var t=n.props,e=t.querySelector,r=t.targetDomEl;if(ht())return null;if(e)return document.querySelector(e);if(r&&dt(r))return r;if(n.targetRef&&dt(n.targetRef.current))return n.targetRef.current;var i=d(n);if(!i)return null;switch(n.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},n.createResizeHandler=function(t){var e=n.props,r=e.handleWidth,i=void 0===r||r,o=e.handleHeight,a=void 0===o||o,l=e.onResize;if(i||a){var c=gt(l,n.setState.bind(n),i,a);t.forEach((function(t){var e=t&&t.contentRect||{},r=e.width,i=e.height;!n.skipOnMount&&!ht()&&c({width:r,height:i}),n.skipOnMount=!1}))}},n.getRenderType=function(){var t=n.props,e=t.render,r=t.children;return ft(e)?"renderProp":ft(r)?"childFunction":c(r)?"child":Array.isArray(r)?"childArray":"parent"};var r=e.skipOnMount,i=e.refreshMode,o=e.refreshRate,a=void 0===o?1e3:o,l=e.refreshOptions;return n.state={width:void 0,height:void 0},n.skipOnMount=r,n.targetRef=s(),n.observableElement=null,ht()||(n.resizeHandler=ut(n.createResizeHandler,i,a,l),n.resizeObserver=new window.ResizeObserver(n.resizeHandler)),n}(function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}F(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)})(e,t),e.prototype.componentDidMount=function(){this.attachObserver()},e.prototype.componentDidUpdate=function(){this.attachObserver()},e.prototype.componentWillUnmount=function(){ht()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},e.prototype.render=function(){var t,e=this.props,n=e.render,i=e.children,a=e.nodeType,l=void 0===a?"div":a,c=this.state,s={width:c.width,height:c.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return n&&n(s);case"childFunction":return(t=i)(s);case"child":if((t=i).type&&"string"==typeof t.type){var u=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}(s,["targetRef"]);return o(t,u)}return o(t,s);case"childArray":return(t=i).map((function(t){return!!t&&o(t,s)}));default:return r.createElement(l,null)}}}(u);var pt=ht()?f:h;var mt={exports:{}};mt.exports=function(){var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},e=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},a=function(t){return(t=+t)+(t>68?1900:2e3)},l=function(t){return function(e){this[t]=+e}},c=[/[+-]\d\d:?(\d\d)?|Z/,function(t){(this.zone||(this.zone={})).offset=function(t){if(!t)return 0;if("Z"===t)return 0;var e=t.match(/([+-]|\d\d)/g),n=60*e[1]+(+e[2]||0);return 0===n?0:"+"===e[0]?-n:n}(t)}],s=function(t){var e=o[t];return e&&(e.indexOf?e:e.s.concat(e.f))},u=function(t,e){var n,r=o.meridiem;if(r){for(var i=1;i<=24;i+=1)if(t.indexOf(r(i,0,e))>-1){n=i>12;break}}else n=t===(e?"pm":"PM");return n},f={A:[i,function(t){this.afternoon=u(t,!1)}],a:[i,function(t){this.afternoon=u(t,!0)}],S:[/\d/,function(t){this.milliseconds=100*+t}],SS:[n,function(t){this.milliseconds=10*+t}],SSS:[/\d{3}/,function(t){this.milliseconds=+t}],s:[r,l("seconds")],ss:[r,l("seconds")],m:[r,l("minutes")],mm:[r,l("minutes")],H:[r,l("hours")],h:[r,l("hours")],HH:[r,l("hours")],hh:[r,l("hours")],D:[r,l("day")],DD:[n,l("day")],Do:[i,function(t){var e=o.ordinal,n=t.match(/\d+/);if(this.day=n[0],e)for(var r=1;r<=31;r+=1)e(r).replace(/\[|\]/g,"")===t&&(this.day=r)}],M:[r,l("month")],MM:[n,l("month")],MMM:[i,function(t){var e=s("months"),n=(s("monthsShort")||e.map((function(t){return t.slice(0,3)}))).indexOf(t)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(t){var e=s("months").indexOf(t)+1;if(e<1)throw new Error;this.month=e%12||e}],Y:[/[+-]?\d+/,l("year")],YY:[n,function(t){this.year=a(t)}],YYYY:[/\d{4}/,l("year")],Z:c,ZZ:c};function h(n){var r,i;r=n,i=o&&o.formats;for(var a=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(e,n,r){var o=r&&r.toUpperCase();return n||i[r]||t[r]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(t,e,n){return e||n.slice(1)}))}))).match(e),l=a.length,c=0;c<l;c+=1){var s=a[c],u=f[s],h=u&&u[0],d=u&&u[1];a[c]=d?{regex:h,parser:d}:s.replace(/^\[|\]$/g,"")}return function(t){for(var e={},n=0,r=0;n<l;n+=1){var i=a[n];if("string"==typeof i)r+=i.length;else{var o=i.regex,c=i.parser,s=t.slice(r),u=o.exec(s)[0];c.call(e,u),t=t.replace(u,"")}}return function(t){var e=t.afternoon;if(void 0!==e){var n=t.hours;e?n<12&&(t.hours+=12):12===n&&(t.hours=0),delete t.afternoon}}(e),e}}return function(t,e,n){n.p.customParseFormat=!0,t&&t.parseTwoDigitYear&&(a=t.parseTwoDigitYear);var r=e.prototype,i=r.parse;r.parse=function(t){var e=t.date,r=t.utc,a=t.args;this.$u=r;var l=a[1];if("string"==typeof l){var c=!0===a[2],s=!0===a[3],u=c||s,f=a[2];s&&(f=a[2]),o=this.$locale(),!c&&f&&(o=n.Ls[f]),this.$d=function(t,e,n){try{if(["x","X"].indexOf(e)>-1)return new Date(("X"===e?1e3:1)*t);var r=h(e)(t),i=r.year,o=r.month,a=r.day,l=r.hours,c=r.minutes,s=r.seconds,u=r.milliseconds,f=r.zone,d=new Date,g=a||(i||o?1:d.getDate()),p=i||d.getFullYear(),m=0;i&&!o||(m=o>0?o-1:d.getMonth());var y=l||0,v=c||0,$=s||0,S=u||0;return f?new Date(Date.UTC(p,m,g,y,v,$,S+60*f.offset*1e3)):n?new Date(Date.UTC(p,m,g,y,v,$,S)):new Date(p,m,g,y,v,$,S)}catch(t){return new Date("")}}(e,l,r),this.init(),f&&!0!==f&&(this.$L=this.locale(f).$L),u&&e!=this.format(l)&&(this.$d=new Date("")),o={}}else if(l instanceof Array)for(var d=l.length,g=1;g<=d;g+=1){a[1]=l[g-1];var p=n.apply(this,a);if(p.isValid()){this.$d=p.$d,this.$L=p.$L,this.init();break}g===d&&(this.$d=new Date(""))}else i.call(this,t)}}}();var yt,vt,$t=mt.exports,St={exports:{}},bt=St.exports=(yt={year:0,month:1,day:2,hour:3,minute:4,second:5},vt={},function(t,e,n){var r,i=function(t,e,n){void 0===n&&(n={});var r=new Date(t),i=function(t,e){void 0===e&&(e={});var n=e.timeZoneName||"short",r=t+"|"+n,i=vt[r];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:t,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),vt[r]=i),i}(e,n);return i.formatToParts(r)},o=function(t,e){for(var r=i(t,e),o=[],a=0;a<r.length;a+=1){var l=r[a],c=l.type,s=l.value,u=yt[c];u>=0&&(o[u]=parseInt(s,10))}var f=o[3],h=24===f?0:f,d=o[0]+"-"+o[1]+"-"+o[2]+" "+h+":"+o[4]+":"+o[5]+":000",g=+t;return(n.utc(d).valueOf()-(g-=g%1e3))/6e4},a=e.prototype;a.tz=function(t,e){void 0===t&&(t=r);var i=this.utcOffset(),o=this.toDate(),a=o.toLocaleString("en-US",{timeZone:t}),l=Math.round((o-new Date(a))/1e3/60),c=n(a).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-l,!0);if(e){var s=c.utcOffset();c=c.add(i-s,"minute")}return c.$x.$timezone=t,c},a.offsetName=function(t){var e=this.$x.$timezone||n.tz.guess(),r=i(this.valueOf(),e,{timeZoneName:t}).find((function(t){return"timezonename"===t.type.toLowerCase()}));return r&&r.value};var l=a.startOf;a.startOf=function(t,e){if(!this.$x||!this.$x.$timezone)return l.call(this,t,e);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return l.call(r,t,e).tz(this.$x.$timezone,!0)},n.tz=function(t,e,i){var a=i&&e,l=i||e||r,c=o(+n(),l);if("string"!=typeof t)return n(t).tz(l);var s=function(t,e,n){var r=t-60*e*1e3,i=o(r,n);if(e===i)return[r,e];var a=o(r-=60*(i-e)*1e3,n);return i===a?[r,i]:[t-60*Math.min(i,a)*1e3,Math.max(i,a)]}(n.utc(t,a).valueOf(),c,l),u=s[0],f=s[1],h=n(u).utcOffset(f);return h.$x.$timezone=l,h},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(t){r=t}}),Ft={exports:{}};Ft.exports=function(t,e,n){e.prototype.isBetween=function(t,e,r,i){var o=n(t),a=n(e),l="("===(i=i||"()")[0],c=")"===i[1];return(l?this.isAfter(o,r):!this.isBefore(o,r))&&(c?this.isBefore(a,r):!this.isAfter(a,r))||(l?this.isBefore(o,r):!this.isAfter(o,r))&&(c?this.isAfter(a,r):!this.isBefore(a,r))}};var Dt=Ft.exports,wt={exports:{}};wt.exports=function(t,e){e.prototype.isSameOrBefore=function(t,e){return this.isSame(t,e)||this.isBefore(t,e)}};var Bt=wt.exports,Ht={exports:{}};Ht.exports=function(t,e){e.prototype.isSameOrAfter=function(t,e){return this.isSame(t,e)||this.isAfter(t,e)}};var Ot,xt=Ht.exports;b.extend(Dt),b.extend(Bt),b.extend(xt),b.extend($t),b.extend(bt),function(t){t.generateDays=t=>{const e=t.startOf("month"),n=b(e).startOf("week");return Mt(n).map((t=>_t(t)))},t.generateDaysForCurrentWeek=t=>{const e=t.startOf("week");return _t(e)},t.generateMonths=t=>{const e=[];for(let n=0;n<12;n++){const r=t.month(n);e.push(b(r))}return e},t.generateDecadeOfYears=t=>{const e=t.year(),n=10*Math.floor(e/10),r=t.year(n),i=[r.subtract(1,"year"),r];for(let t=1;t<11;t++)i.push(r.add(t,"year"));return i},t.getStartEndDecade=t=>{const e=10*Math.floor(+t.format("YYYY")/10);return{beginDecade:e,endDecade:+b(`${e+9}-01-01`).format("YYYY")}},t.convertTo12HourFormat=t=>{const e=b(t,"HH:mm");return e.isValid()?e.format("h:mm a"):""},t.isWithinRange=(t,e,n,r="day")=>!e&&!n||(e&&n?t.isBetween(e,n,r,"[]"):e?t.isSameOrAfter(e,r):t.isSameOrBefore(n,r)),t.isPreviousMonthWithinRange=(e,n)=>t.isWithinRange(e.subtract(1,"month"),n,void 0,"month"),t.isPreviousYearWithinRange=(e,n)=>t.isWithinRange(e.subtract(1,"year"),n,void 0,"year"),t.isPreviousDecadeWithinRange=(e,n)=>{const{beginDecade:r}=t.getStartEndDecade(e);return t.isWithinRange(e.year(r).subtract(1,"year"),n,void 0,"year")},t.isNextMonthWithinRange=(e,n)=>t.isWithinRange(e.add(1,"month"),void 0,n,"month"),t.isNextYearWithinRange=(e,n)=>t.isWithinRange(e.add(1,"year"),void 0,n,"year"),t.isNextDecadeWithinRange=(e,n)=>{const{endDecade:r}=t.getStartEndDecade(e);return t.isWithinRange(e.year(r).add(1,"year"),void 0,n,"year")}}(Ot||(Ot={}));const Mt=t=>{const e=[t];for(let n=1;n<6;n++){const r=t.add(n,"week");e.push(r)}return e},_t=t=>{const e=[];for(let n=0;n<7;n++){const r=t.add(n,"day");e.push(r)}return e},Et=[1,3,5,7,8,10,12],zt=[4,6,9,11];var Tt,At,kt,Wt;!function(t){t.clampDay=(e,n,r)=>{const i=parseInt(e),o=parseInt(n),a=parseInt(r);return 0==i?"1":Et.includes(o)?Math.min(i,31).toString():zt.includes(o)?Math.min(i,30).toString():2===o?t.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():e},t.clampMonth=t=>{const e=parseInt(t);return 0==e?"1":e>12?"12":t},t.isLeapYear=t=>t%4==0&&t%100!=0||t%400==0,t.getTimeDiffInMinutes=(t,e,n="HH:mm")=>{const r=b(t,n);return b(e,n).diff(r,"minute")}}(Tt||(Tt={})),function(t){t.generate=()=>Math.random().toString(36).substring(2,9)}(At||(At={})),function(t){t.transformWithSpaces=(t,e)=>{const n="(.{"+e+"})";return t.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},t.padValue=(t,e)=>{if("0"===t)return e?t:t.padStart(2,"0");if(""===t)return t;return parseInt(t).toString().padStart(2,"0")},t.shouldTruncateToTwoLines=(t,e)=>{const n=Math.floor(e/9);return t.length>=2*n||1===t.split(" ").length&&t.length>n},t.truncateOneLine=(t,e,n,r,i=8)=>{let o=0;e>n&&(o=Math.floor((e-n)/i));const a=r+o;if(a<t.length){const e=Math.floor(a/2);return t.substring(0,e)+" ... "+t.substring(t.length-e,t.length)}return t},t.getTextWidth=(e,n)=>{if("undefined"==typeof document)return 0;const r=(t.getTextWidth.canvas||(t.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(e).width}}(kt||(kt={})),b.extend($t),function(t){t.formatHourlyDisplay=t=>b(t,"HH:mm").format("ha"),t.calculateWidth=(t,e,n)=>Tt.getTimeDiffInMinutes(t,e)/15*(n/2)}(Wt||(Wt={}));var jt=Array.isArray,Ct="object"==typeof $&&$&&$.Object===Object&&$,Rt="object"==typeof self&&self&&self.Object===Object&&self,Yt=Ct||Rt||Function("return this")(),Nt=Yt.Symbol,Lt=Nt,It=Object.prototype,Pt=It.hasOwnProperty,Vt=It.toString,Zt=Lt?Lt.toStringTag:void 0;var Ut=function(t){var e=Pt.call(t,Zt),n=t[Zt];try{t[Zt]=void 0;var r=!0}catch(t){}var i=Vt.call(t);return r&&(e?t[Zt]=n:delete t[Zt]),i},Xt=Object.prototype.toString;var Gt=Ut,Jt=function(t){return Xt.call(t)},qt=Nt?Nt.toStringTag:void 0;var Qt=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":qt&&qt in Object(t)?Gt(t):Jt(t)};var Kt=Qt,te=function(t){return null!=t&&"object"==typeof t};var ee=function(t){return"symbol"==typeof t||te(t)&&"[object Symbol]"==Kt(t)},ne=jt,re=ee,ie=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,oe=/^\w*$/;var ae=function(t,e){if(ne(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!re(t))||(oe.test(t)||!ie.test(t)||null!=e&&t in Object(e))};var le=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},ce=Qt,se=le;var ue,fe=function(t){if(!se(t))return!1;var e=ce(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},he=Yt["__core-js_shared__"],de=(ue=/[^.]+$/.exec(he&&he.keys&&he.keys.IE_PROTO||""))?"Symbol(src)_1."+ue:"";var ge=function(t){return!!de&&de in t},pe=Function.prototype.toString;var me=fe,ye=ge,ve=le,$e=function(t){if(null!=t){try{return pe.call(t)}catch(t){}try{return t+""}catch(t){}}return""},Se=/^\[object .+?Constructor\]$/,be=Function.prototype,Fe=Object.prototype,De=be.toString,we=Fe.hasOwnProperty,Be=RegExp("^"+De.call(we).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var He=function(t){return!(!ve(t)||ye(t))&&(me(t)?Be:Se).test($e(t))},Oe=function(t,e){return null==t?void 0:t[e]};var xe=function(t,e){var n=Oe(t,e);return He(n)?n:void 0},Me=xe(Object,"create"),_e=Me;var Ee=function(){this.__data__=_e?_e(null):{},this.size=0};var ze=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},Te=Me,Ae=Object.prototype.hasOwnProperty;var ke=function(t){var e=this.__data__;if(Te){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return Ae.call(e,t)?e[t]:void 0},We=Me,je=Object.prototype.hasOwnProperty;var Ce=Me;var Re=Ee,Ye=ze,Ne=ke,Le=function(t){var e=this.__data__;return We?void 0!==e[t]:je.call(e,t)},Ie=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=Ce&&void 0===e?"__lodash_hash_undefined__":e,this};function Pe(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Pe.prototype.clear=Re,Pe.prototype.delete=Ye,Pe.prototype.get=Ne,Pe.prototype.has=Le,Pe.prototype.set=Ie;var Ve=Pe;var Ze=function(){this.__data__=[],this.size=0};var Ue=function(t,e){return t===e||t!=t&&e!=e};var Xe=function(t,e){for(var n=t.length;n--;)if(Ue(t[n][0],e))return n;return-1},Ge=Xe,Je=Array.prototype.splice;var qe=Xe;var Qe=Xe;var Ke=Xe;var tn=Ze,en=function(t){var e=this.__data__,n=Ge(e,t);return!(n<0)&&(n==e.length-1?e.pop():Je.call(e,n,1),--this.size,!0)},nn=function(t){var e=this.__data__,n=qe(e,t);return n<0?void 0:e[n][1]},rn=function(t){return Qe(this.__data__,t)>-1},on=function(t,e){var n=this.__data__,r=Ke(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};function an(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}an.prototype.clear=tn,an.prototype.delete=en,an.prototype.get=nn,an.prototype.has=rn,an.prototype.set=on;var ln=an,cn=xe(Yt,"Map"),sn=Ve,un=ln,fn=cn;var hn=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var dn=function(t,e){var n=t.__data__;return hn(e)?n["string"==typeof e?"string":"hash"]:n.map},gn=dn;var pn=dn;var mn=dn;var yn=dn;var vn=function(){this.size=0,this.__data__={hash:new sn,map:new(fn||un),string:new sn}},$n=function(t){var e=gn(this,t).delete(t);return this.size-=e?1:0,e},Sn=function(t){return pn(this,t).get(t)},bn=function(t){return mn(this,t).has(t)},Fn=function(t,e){var n=yn(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function Dn(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Dn.prototype.clear=vn,Dn.prototype.delete=$n,Dn.prototype.get=Sn,Dn.prototype.has=bn,Dn.prototype.set=Fn;var wn=Dn;function Bn(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=t.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(Bn.Cache||wn),n}Bn.Cache=wn;var Hn=Bn;var On=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,xn=/\\(\\)?/g,Mn=function(t){var e=Hn(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(On,(function(t,n,r,i){e.push(r?i.replace(xn,"$1"):n||t)})),e}));var _n=function(t,e){for(var n=-1,r=null==t?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i},En=jt,zn=ee,Tn=Nt?Nt.prototype:void 0,An=Tn?Tn.toString:void 0;var kn=function t(e){if("string"==typeof e)return e;if(En(e))return _n(e,t)+"";if(zn(e))return An?An.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n},Wn=kn;var jn=jt,Cn=ae,Rn=Mn,Yn=function(t){return null==t?"":Wn(t)};var Nn=ee;var Ln=function(t,e){return jn(t)?t:Cn(t,e)?[t]:Rn(Yn(t))},In=function(t){if("string"==typeof t||Nn(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e};var Pn=function(t,e){for(var n=0,r=(e=Ln(e,t)).length;null!=t&&n<r;)t=t[In(e[n++])];return n&&n==r?t:void 0};var Vn=function(t,e,n){var r=null==t?void 0:Pn(t,e);return void 0===r?n:r};const Zn=(t,e,n)=>e?Vn(n,e)||Vn(t,e):n||t,Un=(t,e)=>{const n=e||t.defaultValue;return Vn(t.collections,n)};var Xn;!function(t){t.colorScheme="colorScheme",t.layout="layout",t.textStyleScheme="textStyleScheme",t.designTokenScheme="designTokenScheme",t.resourceScheme="resourceScheme"}(Xn||(Xn={}));const Gn={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Jn=t=>e=>{const n=e.theme,r=Un(Gn,n[Xn.colorScheme]);return n.options&&n.options.color?Zn(r,t,n.options.color):Zn(r,t)},qn={Brand:{1:Jn("Brand.1"),2:Jn("Brand.2"),3:Jn("Brand.3"),4:Jn("Brand.4"),5:Jn("Brand.5"),6:Jn("Brand.6")},Primary:Jn("Primary"),PrimaryDark:Jn("PrimaryDark"),Secondary:Jn("Secondary"),Accent:{Light:{1:Jn("Accent.Light.1"),2:Jn("Accent.Light.2"),3:Jn("Accent.Light.3"),4:Jn("Accent.Light.4"),5:Jn("Accent.Light.5"),6:Jn("Accent.Light.6")},Dark:{1:Jn("Accent.Dark.1"),2:Jn("Accent.Dark.2"),3:Jn("Accent.Dark.3")}},Neutral:{1:Jn("Neutral.1"),2:Jn("Neutral.2"),3:Jn("Neutral.3"),4:Jn("Neutral.4"),5:Jn("Neutral.5"),6:Jn("Neutral.6"),7:Jn("Neutral.7"),8:Jn("Neutral.8")},Validation:{Green:{Text:Jn("Validation.Green.Text"),Icon:Jn("Validation.Green.Icon"),Border:Jn("Validation.Green.Border"),Background:Jn("Validation.Green.Background")},Orange:{Text:Jn("Validation.Orange.Text"),Icon:Jn("Validation.Orange.Icon"),Border:Jn("Validation.Orange.Border"),Background:Jn("Validation.Orange.Background"),Badge:Jn("Validation.Orange.Badge")},Red:{Text:Jn("Validation.Red.Text"),Icon:Jn("Validation.Red.Icon"),Border:Jn("Validation.Red.Border"),Background:Jn("Validation.Red.Background")},Blue:{Text:Jn("Validation.Blue.Text"),Icon:Jn("Validation.Blue.Icon"),Border:Jn("Validation.Blue.Border"),Background:Jn("Validation.Blue.Background")}},Shadow:{Accent:Jn("Shadow.Accent"),Red:Jn("Shadow.Red"),Elevation:Jn("Shadow.Elevation")}};function Qn(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}const Kn=m.button`
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
                background-color: ${qn.Neutral[7]};
            `}
    }
`,tr=i.forwardRef(((e,n)=>{var{children:r,focusHighlight:i=!0,focusOutline:o="none",type:a="button"}=e,l=Qn(e,["children","focusHighlight","focusOutline","type"]);return t(Kn,Object.assign({ref:n,$outline:o,$highlight:i,type:a},l,{children:r}))})),er={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},nr={collections:{base:{D1:{fontFamily:er.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:er.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:er.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:er.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:er.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:er.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:er.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:er.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:er.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:er.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:er.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:er.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:er.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:er.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},rr=t=>e=>{const n=e.theme,r=Un(nr,n[Xn.textStyleScheme]);return n.options&&n.options.textStyle?Zn(r,t,n.options.textStyle):Zn(r,t)},ir={D1:{fontFamily:rr("D1.fontFamily"),fontSize:rr("D1.fontSize"),fontWeight:rr("D1.fontWeight"),lineHeight:rr("D1.lineHeight"),letterSpacing:rr("D1.letterSpacing")},D2:{fontFamily:rr("D2.fontFamily"),fontSize:rr("D2.fontSize"),fontWeight:rr("D2.fontWeight"),lineHeight:rr("D2.lineHeight"),letterSpacing:rr("D2.letterSpacing")},D3:{fontFamily:rr("D3.fontFamily"),fontSize:rr("D3.fontSize"),fontWeight:rr("D3.fontWeight"),lineHeight:rr("D3.lineHeight"),letterSpacing:rr("D3.letterSpacing")},D4:{fontFamily:rr("D4.fontFamily"),fontSize:rr("D4.fontSize"),fontWeight:rr("D4.fontWeight"),lineHeight:rr("D4.lineHeight"),letterSpacing:rr("D4.letterSpacing")},DBody:{fontFamily:rr("DBody.fontFamily"),fontSize:rr("DBody.fontSize"),fontWeight:rr("DBody.fontWeight"),lineHeight:rr("DBody.lineHeight"),letterSpacing:rr("DBody.letterSpacing")},H1:{fontFamily:rr("H1.fontFamily"),fontSize:rr("H1.fontSize"),fontWeight:rr("H1.fontWeight"),lineHeight:rr("H1.lineHeight"),letterSpacing:rr("H1.letterSpacing")},H2:{fontFamily:rr("H2.fontFamily"),fontSize:rr("H2.fontSize"),fontWeight:rr("H2.fontWeight"),lineHeight:rr("H2.lineHeight"),letterSpacing:rr("H2.letterSpacing")},H3:{fontFamily:rr("H3.fontFamily"),fontSize:rr("H3.fontSize"),fontWeight:rr("H3.fontWeight"),lineHeight:rr("H3.lineHeight"),letterSpacing:rr("H3.letterSpacing")},H4:{fontFamily:rr("H4.fontFamily"),fontSize:rr("H4.fontSize"),fontWeight:rr("H4.fontWeight"),lineHeight:rr("H4.lineHeight"),letterSpacing:rr("H4.letterSpacing")},H5:{fontFamily:rr("H5.fontFamily"),fontSize:rr("H5.fontSize"),fontWeight:rr("H5.fontWeight"),lineHeight:rr("H5.lineHeight"),letterSpacing:rr("H5.letterSpacing")},H6:{fontFamily:rr("H6.fontFamily"),fontSize:rr("H6.fontSize"),fontWeight:rr("H6.fontWeight"),lineHeight:rr("H6.lineHeight"),letterSpacing:rr("H6.letterSpacing")},Body:{fontFamily:rr("Body.fontFamily"),fontSize:rr("Body.fontSize"),fontWeight:rr("Body.fontWeight"),lineHeight:rr("Body.lineHeight"),letterSpacing:rr("Body.letterSpacing")},BodySmall:{fontFamily:rr("BodySmall.fontFamily"),fontSize:rr("BodySmall.fontSize"),fontWeight:rr("BodySmall.fontWeight"),lineHeight:rr("BodySmall.lineHeight"),letterSpacing:rr("BodySmall.letterSpacing")},XSmall:{fontFamily:rr("XSmall.fontFamily"),fontSize:rr("XSmall.fontSize"),fontWeight:rr("XSmall.fontWeight"),lineHeight:rr("XSmall.lineHeight"),letterSpacing:rr("XSmall.letterSpacing")}},or=t=>{switch(t){case 700:case"bold":return er.Bold;case 600:case"semibold":return er.Semibold;case 300:case"light":return er.Light;case 400:case"regular":return er.Regular;default:return""}},ar=(t,e)=>n=>{var r;const i=ir[t].fontFamily(n),o=ir[t].fontWeight(n);return Object.values(er).includes(i)?y`
                font-family: ${or(e)||or(o)||i};
                font-weight: normal !important;
            `:y`
            font-family: ${i};
            font-weight: ${null!==(r=lr(e)||o)&&void 0!==r?r:"normal"};
        `},lr=t=>{switch(t){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},cr=(t,e,n=!1)=>r=>{const i=ir[t],o=i.fontSize(r);return y`
            ${ar(t,e)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${y`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},sr=(t=!1,e=!1)=>e?y`
            display: block;
        `:t?y`
            display: inline;
        `:y`
            display: block;
        `;var ur;!function(t){t.D1=m.h1`
        ${t=>y`
                ${cr("D1",t.weight,t.paragraph)}
                color: ${qn.Neutral[1]};
                ${sr(t.inline,t.paragraph)}
            `}
    `,t.D2=m.h1`
        ${t=>y`
                ${cr("D2",t.weight,t.paragraph)}
                color: ${qn.Neutral[1]};
                ${sr(t.inline,t.paragraph)}
            `}
    `,t.D3=m.h1`
        ${t=>y`
                ${cr("D3",t.weight,t.paragraph)}
                color: ${qn.Neutral[1]};
                ${sr(t.inline,t.paragraph)}
            `}
    `,t.D4=m.h1`
        ${t=>y`
                ${cr("D4",t.weight,t.paragraph)}
                color: ${qn.Neutral[1]};
                ${sr(t.inline,t.paragraph)}
            `}
    `,t.DBody=m.h1`
        ${t=>y`
                ${cr("DBody",t.weight,t.paragraph)}
                color: ${qn.Neutral[1]};
                ${sr(t.inline,t.paragraph)}
            `}
    `,t.H1=m.h1`
        ${t=>y`
                ${cr("H1",t.weight,t.paragraph)}
                color: ${qn.Neutral[1]};
                ${sr(t.inline,t.paragraph)}
            `}
    `,t.H2=m.h2`
        ${t=>y`
                ${cr("H2",t.weight,t.paragraph)}
                color: ${qn.Neutral[1]};
                ${sr(t.inline,t.paragraph)}
            `}
    `,t.H3=m.h3`
        ${t=>y`
                ${cr("H3",t.weight,t.paragraph)}
                color: ${qn.Neutral[1]};
                ${sr(t.inline,t.paragraph)}
            `}
    `,t.H4=m.h4`
        ${t=>y`
                ${cr("H4",t.weight,t.paragraph)}
                color: ${qn.Neutral[1]};
                ${sr(t.inline,t.paragraph)}
            `}
    `,t.H5=m.h5`
        ${t=>y`
                ${cr("H5",t.weight,t.paragraph)}
                color: ${qn.Neutral[1]};
                ${sr(t.inline,t.paragraph)}
            `}
    `,t.H6=m.h6`
        ${t=>y`
                ${cr("H6",t.weight,t.paragraph)}
                color: ${qn.Neutral[1]};
                ${sr(t.inline,t.paragraph)}
            `}
    `,t.Body=m.p`
        ${t=>y`
                ${cr("Body",t.weight,t.paragraph)}
                color: ${qn.Neutral[1]};
                ${sr(t.inline,t.paragraph)}
            `}
    `,t.BodySmall=m.p`
        ${t=>y`
                ${cr("BodySmall",t.weight,t.paragraph)}
                color: ${qn.Neutral[1]};
                ${sr(t.inline,t.paragraph)}
            `}
    `,t.XSmall=m.span`
        ${t=>y`
                ${cr("XSmall",t.weight,t.paragraph)}
                color: ${qn.Neutral[1]};
                ${sr(t.inline,t.paragraph)}
            `}
    `,t.Hyperlink={Default:t=>dr(Object.assign(Object.assign({},t),{textStyle:"Body"})),Small:t=>dr(Object.assign(Object.assign({},t),{textStyle:"BodySmall"}))}}(ur||(ur={}));const fr=m.a`
    ${t=>y`
            ${cr(t.textStyle,t.weight)}
            color: ${qn.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${qn.Secondary};

                svg {
                    color: ${qn.Secondary};
                }
            }
        `}
`,hr=m(v)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,dr=n=>{var{external:r=!1,children:i}=n,o=Qn(n,["external","children"]);return e(fr,Object.assign({},o,{children:[i,r&&t(hr,{})]}))};var gr;!function(t){t[t.Subpage=0]="Subpage",t[t.Domain=1]="Domain"}(gr||(gr={}));const pr=44,mr=m.div`
    position: relative;
    display: flex;
    align-items: center;
`,yr=m(tr)`
    z-index: 2;
    position: absolute;
    bottom: 1rem;
    background-color: ${qn.Neutral[8]};
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
`,vr=m(p)`
    width: 1rem;
    height: 1rem;
    color: ${qn.Primary};
`,$r=m(g)`
    font-size: 1rem;
    color: ${qn.Primary};
`,Sr=m.div`
    overflow: hidden;
    flex-grow: 1;
    position: relative;
    height: 5rem;
`,br=m.div`
    position: relative;
    white-space: nowrap;
    height: 1.25rem;
`,Fr=m.div`
    display: flex;
    white-space: nowrap;
`,Dr=m.div`
    display: inline-block;
    width: ${pr}px;
    height: ${({isHour:t})=>t?"1.25rem":"0.625rem"};
    position: relative;
    border-left: 1px solid ${qn.Neutral[4]};
`,wr=m(ur.XSmall)`
    color: ${qn.Neutral[2]};
    position: absolute;
    bottom: 10%;
    left: 10%;
`,Br=m.div`
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
                ${t.$bgColor2||qn.Neutral[5]} 0px,
                ${t.$bgColor2||qn.Neutral[5]} 10px,
                ${t.$bgColor} 10px,
                ${t.$bgColor} 20px
            );
        `}
`,Hr=m.div`
    position: absolute;
    top: 1.25rem;
    height: 3.375rem;
    z-index: 1;
    border-right: 1px solid ${qn.Neutral[4]};
`,Or=m(ur.XSmall)`
    color: ${t=>t.$color||qn.Neutral[3](t)};
    position: absolute;
    bottom: 0;
    padding-left: 4px;
    padding-bottom: 4px;
    max-width: ${({$slotWidth:t})=>`calc(${t}px - 8px)`};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`,xr=({"data-testid":r,className:i,startTime:o,endTime:c,slots:s,onSlotClick:u,onClick:h,styleAttributes:d})=>{const g=a(null),[p,m]=l(0),[y,v]=l(0);f((()=>{const t=g.current;return t&&t.addEventListener("scroll",$),()=>{t&&t.removeEventListener("scroll",$)}}),[]);const $=()=>{g.current&&m(g.current.scrollLeft)},S=t=>{g.current&&g.current.scrollBy({left:"left"===t?-110:110,behavior:"smooth"})};!function(t){void 0===t&&(t={});var e=t.skipOnMount,n=void 0!==e&&e,r=t.refreshMode,i=t.refreshRate,o=void 0===i?1e3:i,c=t.refreshOptions,s=t.handleWidth,u=void 0===s||s,f=t.handleHeight,h=void 0===f||f,d=t.targetRef,g=t.observerOptions,p=t.onResize,m=a(n),y=a(null),v=null!=d?d:y,$=a(),S=l({width:void 0,height:void 0}),b=S[0],F=S[1];pt((function(){if(!ht()){var t=gt(p,F,u,h);$.current=ut((function(e){(u||h)&&e.forEach((function(e){var n=e&&e.contentRect||{},r=n.width,i=n.height;!m.current&&!ht()&&t({width:r,height:i}),m.current=!1}))}),r,o,c);var e=new window.ResizeObserver($.current);return v.current&&e.observe(v.current,g),function(){e.disconnect();var t=$.current;t&&t.cancel&&t.cancel()}}}),[r,o,c,u,h,p,g,v.current]),D({ref:v},b)}({onResize:()=>{g.current&&v(g.current.clientWidth)},targetRef:g,refreshMode:"debounce",refreshRate:50});const F=t=>t<=22,w=t=>{if(r)return`${r}-${t}`};return e(mr,Object.assign({className:i},{children:[e(Sr,Object.assign({"data-testid":r,ref:g},{children:[t(br,Object.assign({"data-testid":w("time-marker-wrapper"),"data-id":"marker-wrapper"},{children:(()=>{const e=[],n=b(o,"HH:mm"),r=b(c,"HH:mm");for(let i=n;i.isBefore(r);i=i.add(30,"minute")){const n=0===i.minute();e.push(t(Dr,Object.assign({isHour:n},{children:n&&t(wr,Object.assign({weight:"semibold"},{children:Wt.formatHourlyDisplay(i.format("HH:mm"))}))}),i.format("HH:mm")))}return e})()})),e(Fr,Object.assign({"data-testid":w("time-slot-wrapper"),"data-id":"slot-wrapper"},{children:[d&&(()=>{const{backgroundColor:r,backgroundColor2:i,styleType:a="default"}=d,l=Wt.calculateWidth(o,c,pr);return e(n,{children:[t(Hr,{}),t(Br,{"data-testid":w("default-timeslot"),$width:l,$left:0,$styleType:a,$bgColor:r,$bgColor2:i,$clickable:!!h,onClick:h},"default-timeslot"),t(Hr,{style:{left:`${l}px`}})]})})(),s.map((r=>{const{id:i,startTime:a,endTime:l,label:c,clickable:s=!0,styleAttributes:f}=r,{color:h,styleType:d="default",backgroundColor:g,backgroundColor2:p}=f,m=Wt.calculateWidth(a,l,pr),y=Wt.calculateWidth(o,a,pr);return e(n,{children:[t(Hr,{style:{left:`${y}px`}}),t(Br,Object.assign({"data-testid":w(`${i}-timeslot`),$width:m,$left:y,$styleType:d,$bgColor:g,$bgColor2:p,$clickable:s,onClick:()=>s&&u(r)},{children:c&&t(Or,Object.assign({$slotWidth:m,$color:h,weight:"semibold"},{children:F(m)?"...":c}))}),i),t(Hr,{style:{left:`${y+m}px`}})]})}))]}))]})),t(n,{children:p>0&&t(yr,Object.assign({"data-testid":w("arrow-left"),$direction:"left",focusHighlight:!1,focusOutline:"none",onClick:()=>{S("left")}},{children:t($r,{})}))}),p+y<Wt.calculateWidth(o,c,pr)?t(yr,Object.assign({"data-testid":w("arrow-right"),$direction:"right",focusHighlight:!1,focusOutline:"none",onClick:()=>{S("right")}},{children:t(vr,{})})):t(n,{})]}))};export{xr as TimeSlotBar};
//# sourceMappingURL=index.js.map
