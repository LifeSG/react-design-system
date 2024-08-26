import{jsxs as e,jsx as t,Fragment as n}from"react/jsx-runtime";import*as r from"react";import o,{useLayoutEffect as i,useEffect as a,useRef as s,useState as l,isValidElement as c,createRef as u,cloneElement as d,PureComponent as f,useCallback as h,useMemo as p,useImperativeHandle as m,useReducer as g}from"react";import{ChevronDownIcon as y}from"@lifesg/react-icons/chevron-down";import v,{css as b,keyframes as w}from"styled-components";import{ExternalIcon as x}from"@lifesg/react-icons/external";import*as D from"react-dom";import{createPortal as $,findDOMNode as S}from"react-dom";import{ChevronLeftIcon as F}from"@lifesg/react-icons/chevron-left";import{ChevronRightIcon as O}from"@lifesg/react-icons/chevron-right";import{ArrowRightIcon as E}from"@lifesg/react-icons";function B(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}"function"==typeof SuppressedError&&SuppressedError;var k="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function R(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var A={exports:{}};A.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",o="second",i="minute",a="hour",s="day",l="week",c="month",u="quarter",d="year",f="date",h="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},y=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},v={s:y,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),o=n%60;return(t<=0?"+":"-")+y(r,2,"0")+":"+y(o,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),o=t.clone().add(r,c),i=n-o<0,a=t.clone().add(r+(i?-1:1),c);return+(-(r+(n-o)/(i?o-a:a-o))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:d,w:l,d:s,D:f,h:a,m:i,s:o,ms:r,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",w={};w[b]=g;var x="$isDayjsObject",D=function(e){return e instanceof O||!(!e||!e[x])},$=function e(t,n,r){var o;if(!t)return b;if("string"==typeof t){var i=t.toLowerCase();w[i]&&(o=i),n&&(w[i]=n,o=i);var a=t.split("-");if(!o&&a.length>1)return e(a[0])}else{var s=t.name;w[s]=t,o=s}return!r&&o&&(b=o),o||!r&&b},S=function(e,t){if(D(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new O(n)},F=v;F.l=$,F.i=D,F.w=function(e,t){return S(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var O=function(){function g(e){this.$L=$(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[x]=!0}var y=g.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(F.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(p);if(r){var o=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(t)}(e),this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return F},y.isValid=function(){return!(this.$d.toString()===h)},y.isSame=function(e,t){var n=S(e);return this.startOf(t)<=n&&n<=this.endOf(t)},y.isAfter=function(e,t){return S(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<S(e)},y.$g=function(e,t,n){return F.u(e)?this[t]:this.set(n,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var n=this,r=!!F.u(t)||t,u=F.p(e),h=function(e,t){var o=F.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?o:o.endOf(s)},p=function(e,t){return F.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},m=this.$W,g=this.$M,y=this.$D,v="set"+(this.$u?"UTC":"");switch(u){case d:return r?h(1,0):h(31,11);case c:return r?h(1,g):h(0,g+1);case l:var b=this.$locale().weekStart||0,w=(m<b?m+7:m)-b;return h(r?y-w:y+(6-w),g);case s:case f:return p(v+"Hours",0);case a:return p(v+"Minutes",1);case i:return p(v+"Seconds",2);case o:return p(v+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var n,l=F.p(e),u="set"+(this.$u?"UTC":""),h=(n={},n[s]=u+"Date",n[f]=u+"Date",n[c]=u+"Month",n[d]=u+"FullYear",n[a]=u+"Hours",n[i]=u+"Minutes",n[o]=u+"Seconds",n[r]=u+"Milliseconds",n)[l],p=l===s?this.$D+(t-this.$W):t;if(l===c||l===d){var m=this.clone().set(f,1);m.$d[h](p),m.init(),this.$d=m.set(f,Math.min(this.$D,m.daysInMonth())).$d}else h&&this.$d[h](p);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[F.p(e)]()},y.add=function(r,u){var f,h=this;r=Number(r);var p=F.p(u),m=function(e){var t=S(h);return F.w(t.date(t.date()+Math.round(e*r)),h)};if(p===c)return this.set(c,this.$M+r);if(p===d)return this.set(d,this.$y+r);if(p===s)return m(1);if(p===l)return m(7);var g=(f={},f[i]=t,f[a]=n,f[o]=e,f)[p]||1,y=this.$d.getTime()+r*g;return F.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var r=e||"YYYY-MM-DDTHH:mm:ssZ",o=F.z(this),i=this.$H,a=this.$m,s=this.$M,l=n.weekdays,c=n.months,u=n.meridiem,d=function(e,n,o,i){return e&&(e[n]||e(t,r))||o[n].slice(0,i)},f=function(e){return F.s(i%12||12,e,"0")},p=u||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(m,(function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return F.s(t.$y,4,"0");case"M":return s+1;case"MM":return F.s(s+1,2,"0");case"MMM":return d(n.monthsShort,s,c,3);case"MMMM":return d(c,s);case"D":return t.$D;case"DD":return F.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return d(n.weekdaysMin,t.$W,l,2);case"ddd":return d(n.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(i);case"HH":return F.s(i,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return p(i,a,!0);case"A":return p(i,a,!1);case"m":return String(a);case"mm":return F.s(a,2,"0");case"s":return String(t.$s);case"ss":return F.s(t.$s,2,"0");case"SSS":return F.s(t.$ms,3,"0");case"Z":return o}return null}(e)||o.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,f,h){var p,m=this,g=F.p(f),y=S(r),v=(y.utcOffset()-this.utcOffset())*t,b=this-y,w=function(){return F.m(m,y)};switch(g){case d:p=w()/12;break;case c:p=w();break;case u:p=w()/3;break;case l:p=(b-v)/6048e5;break;case s:p=(b-v)/864e5;break;case a:p=b/n;break;case i:p=b/t;break;case o:p=b/e;break;default:p=b}return h?p:F.a(p)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return w[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=$(e,t,!0);return r&&(n.$L=r),n},y.clone=function(){return F.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},g}(),E=O.prototype;return S.prototype=E,[["$ms",r],["$s",o],["$m",i],["$H",a],["$W",s],["$M",c],["$y",d],["$D",f]].forEach((function(e){E[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),S.extend=function(e,t){return e.$i||(e(t,O,S),e.$i=!0),S},S.locale=$,S.isDayjs=D,S.unix=function(e){return S(1e3*e)},S.en=w[b],S.Ls=w,S.p={},S}();var j,M=R(A.exports),C={exports:{}};j=e=>(()=>{var t={"./node_modules/css-mediaquery/index.js":
/*!**********************************************!*\
	  !*** ./node_modules/css-mediaquery/index.js ***!
	  \**********************************************/(e,t)=>{t.match=function(e,t){return s(e).some((function(e){var n=e.inverse,r="all"===e.type||t.type===e.type;if(r&&n||!r&&!n)return!1;var o=e.expressions.every((function(e){var n=e.feature,r=e.modifier,o=e.value,i=t[n];if(!i)return!1;switch(n){case"orientation":case"scan":return i.toLowerCase()===o.toLowerCase();case"width":case"height":case"device-width":case"device-height":o=u(o),i=u(i);break;case"resolution":o=c(o),i=c(i);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":o=l(o),i=l(i);break;case"grid":case"color":case"color-index":case"monochrome":o=parseInt(o,10)||1,i=parseInt(i,10)||0}switch(r){case"min":return i>=o;case"max":return i<=o;default:return i===o}}));return o&&!n||!o&&n}))},t.parse=s;var n=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,r=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,o=/^(?:(min|max)-)?(.+)/,i=/(em|rem|px|cm|mm|in|pt|pc)?$/,a=/(dpi|dpcm|dppx)?$/;function s(e){return e.split(",").map((function(e){var t=(e=e.trim()).match(n),i=t[1],a=t[2],s=t[3]||"",l={};return l.inverse=!!i&&"not"===i.toLowerCase(),l.type=a?a.toLowerCase():"all",s=s.match(/\([^\)]+\)/g)||[],l.expressions=s.map((function(e){var t=e.match(r),n=t[1].toLowerCase().match(o);return{modifier:n[1],feature:n[2],value:t[2]}})),l}))}function l(e){var t,n=Number(e);return n||(n=(t=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/t[2]),n}function c(e){var t=parseFloat(e);switch(String(e).match(a)[1]){case"dpcm":return t/2.54;case"dppx":return 96*t;default:return t}}function u(e){var t=parseFloat(e);switch(String(e).match(i)[1]){case"em":case"rem":return 16*t;case"cm":return 96*t/2.54;case"mm":return 96*t/2.54/10;case"in":return 96*t;case"pt":return 72*t;case"pc":return 72*t/12;default:return t}}},"./node_modules/hyphenate-style-name/index.js":
/*!****************************************************!*\
	  !*** ./node_modules/hyphenate-style-name/index.js ***!
	  \****************************************************/(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var r=/[A-Z]/g,o=/^ms-/,i={};function a(e){return"-"+e.toLowerCase()}const s=function(e){if(i.hasOwnProperty(e))return i[e];var t=e.replace(r,a);return i[e]=o.test(t)?"-"+t:t}},"./node_modules/matchmediaquery/index.js":
/*!***********************************************!*\
	  !*** ./node_modules/matchmediaquery/index.js ***!
	  \***********************************************/(e,t,n)=>{var r=n(/*! css-mediaquery */"./node_modules/css-mediaquery/index.js").match,o="undefined"!=typeof window?window.matchMedia:null;function i(e,t,n){var i=this;if(o&&!n){var a=o.call(window,e);this.matches=a.matches,this.media=a.media,a.addListener(s)}else this.matches=r(e,t),this.media=e;function s(e){i.matches=e.matches,i.media=e.media}this.addListener=function(e){a&&a.addListener(e)},this.removeListener=function(e){a&&a.removeListener(e)},this.dispose=function(){a&&a.removeListener(s)}}e.exports=function(e,t,n){return new i(e,t,n)}},"./node_modules/object-assign/index.js":
/*!*********************************************!*\
	  !*** ./node_modules/object-assign/index.js ***!
	  \*********************************************/e=>{
/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,o){for(var i,a,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var c in i=Object(arguments[l]))n.call(i,c)&&(s[c]=i[c]);if(t){a=t(i);for(var u=0;u<a.length;u++)r.call(i,a[u])&&(s[a[u]]=i[a[u]])}}return s}},"./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
	  !*** ./node_modules/prop-types/checkPropTypes.js ***!
	  \***************************************************/(e,t,n)=>{var r,o=n(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),i={},a=n(/*! ./lib/has */"./node_modules/prop-types/lib/has.js");function s(e,t,n,s,l){for(var c in e)if(a(e,c)){var u;try{if("function"!=typeof e[c]){var d=Error((s||"React class")+": "+n+" type `"+c+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[c]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw d.name="Invariant Violation",d}u=e[c](t,c,s,n,null,o)}catch(e){u=e}if(!u||u instanceof Error||r((s||"React class")+": type specification of "+n+" `"+c+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof u+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),u instanceof Error&&!(u.message in i)){i[u.message]=!0;var f=l?l():"";r("Failed "+n+" type: "+u.message+(null!=f?f:""))}}}r=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},s.resetWarningCache=function(){i={}},e.exports=s},"./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
	  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
	  \************************************************************/(e,t,n)=>{var r,o=n(/*! react-is */"./node_modules/react-is/index.js"),i=n(/*! object-assign */"./node_modules/object-assign/index.js"),a=n(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),s=n(/*! ./lib/has */"./node_modules/prop-types/lib/has.js"),l=n(/*! ./checkPropTypes */"./node_modules/prop-types/checkPropTypes.js");function c(){return null}r=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},e.exports=function(e,t){var n="function"==typeof Symbol&&Symbol.iterator,u="@@iterator",d="<<anonymous>>",f={array:g("array"),bigint:g("bigint"),bool:g("boolean"),func:g("function"),number:g("number"),object:g("object"),string:g("string"),symbol:g("symbol"),any:m(c),arrayOf:function(e){return m((function(t,n,r,o,i){if("function"!=typeof e)return new p("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var s=t[n];if(!Array.isArray(s))return new p("Invalid "+o+" `"+i+"` of type `"+b(s)+"` supplied to `"+r+"`, expected an array.");for(var l=0;l<s.length;l++){var c=e(s,l,r,o,i+"["+l+"]",a);if(c instanceof Error)return c}return null}))},element:m((function(t,n,r,o,i){var a=t[n];return e(a)?null:new p("Invalid "+o+" `"+i+"` of type `"+b(a)+"` supplied to `"+r+"`, expected a single ReactElement.")})),elementType:m((function(e,t,n,r,i){var a=e[t];return o.isValidElementType(a)?null:new p("Invalid "+r+" `"+i+"` of type `"+b(a)+"` supplied to `"+n+"`, expected a single ReactElement type.")})),instanceOf:function(e){return m((function(t,n,r,o,i){if(!(t[n]instanceof e)){var a=e.name||d;return new p("Invalid "+o+" `"+i+"` of type `"+((s=t[n]).constructor&&s.constructor.name?s.constructor.name:d)+"` supplied to `"+r+"`, expected instance of `"+a+"`.")}var s;return null}))},node:m((function(e,t,n,r,o){return v(e[t])?null:new p("Invalid "+r+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.")})),objectOf:function(e){return m((function(t,n,r,o,i){if("function"!=typeof e)return new p("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var l=t[n],c=b(l);if("object"!==c)return new p("Invalid "+o+" `"+i+"` of type `"+c+"` supplied to `"+r+"`, expected an object.");for(var u in l)if(s(l,u)){var d=e(l,u,r,o,i+"."+u,a);if(d instanceof Error)return d}return null}))},oneOf:function(e){return Array.isArray(e)?m((function(t,n,r,o,i){for(var a=t[n],s=0;s<e.length;s++)if(h(a,e[s]))return null;var l=JSON.stringify(e,(function(e,t){return"symbol"===w(t)?String(t):t}));return new p("Invalid "+o+" `"+i+"` of value `"+String(a)+"` supplied to `"+r+"`, expected one of "+l+".")})):(r(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),c)},oneOfType:function(e){if(!Array.isArray(e))return r("Invalid argument supplied to oneOfType, expected an instance of array."),c;for(var t=0;t<e.length;t++){var n=e[t];if("function"!=typeof n)return r("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+x(n)+" at index "+t+"."),c}return m((function(t,n,r,o,i){for(var l=[],c=0;c<e.length;c++){var u=(0,e[c])(t,n,r,o,i,a);if(null==u)return null;u.data&&s(u.data,"expectedType")&&l.push(u.data.expectedType)}return new p("Invalid "+o+" `"+i+"` supplied to `"+r+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return m((function(t,n,r,o,i){var s=t[n],l=b(s);if("object"!==l)return new p("Invalid "+o+" `"+i+"` of type `"+l+"` supplied to `"+r+"`, expected `object`.");for(var c in e){var u=e[c];if("function"!=typeof u)return y(r,o,i,c,w(u));var d=u(s,c,r,o,i+"."+c,a);if(d)return d}return null}))},exact:function(e){return m((function(t,n,r,o,l){var c=t[n],u=b(c);if("object"!==u)return new p("Invalid "+o+" `"+l+"` of type `"+u+"` supplied to `"+r+"`, expected `object`.");var d=i({},t[n],e);for(var f in d){var h=e[f];if(s(e,f)&&"function"!=typeof h)return y(r,o,l,f,w(h));if(!h)return new p("Invalid "+o+" `"+l+"` key `"+f+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var m=h(c,f,r,o,l+"."+f,a);if(m)return m}return null}))}};function h(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function p(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function m(e){var n={},o=0;function i(i,s,l,c,u,f,h){if(c=c||d,f=f||l,h!==a){if(t){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}if("undefined"!=typeof console){var g=c+":"+l;!n[g]&&o<3&&(r("You are manually calling a React.PropTypes validation function for the `"+f+"` prop on `"+c+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),n[g]=!0,o++)}}return null==s[l]?i?null===s[l]?new p("The "+u+" `"+f+"` is marked as required in `"+c+"`, but its value is `null`."):new p("The "+u+" `"+f+"` is marked as required in `"+c+"`, but its value is `undefined`."):null:e(s,l,c,u,f)}var s=i.bind(null,!1);return s.isRequired=i.bind(null,!0),s}function g(e){return m((function(t,n,r,o,i,a){var s=t[n];return b(s)!==e?new p("Invalid "+o+" `"+i+"` of type `"+w(s)+"` supplied to `"+r+"`, expected `"+e+"`.",{expectedType:e}):null}))}function y(e,t,n,r,o){return new p((e||"React class")+": "+t+" type `"+n+"."+r+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+o+"`.")}function v(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(v);if(null===t||e(t))return!0;var r=function(e){var t=e&&(n&&e[n]||e[u]);if("function"==typeof t)return t}(t);if(!r)return!1;var o,i=r.call(t);if(r!==t.entries){for(;!(o=i.next()).done;)if(!v(o.value))return!1}else for(;!(o=i.next()).done;){var a=o.value;if(a&&!v(a[1]))return!1}return!0;default:return!1}}function b(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function w(e){if(null==e)return""+e;var t=b(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function x(e){var t=w(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return p.prototype=Error.prototype,f.checkPropTypes=l,f.resetWarningCache=l.resetWarningCache,f.PropTypes=f,f}},"./node_modules/prop-types/index.js":
/*!******************************************!*\
	  !*** ./node_modules/prop-types/index.js ***!
	  \******************************************/(e,t,n)=>{var r=n(/*! react-is */"./node_modules/react-is/index.js");e.exports=n(/*! ./factoryWithTypeCheckers */"./node_modules/prop-types/factoryWithTypeCheckers.js")(r.isElement,!0)},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
	  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
	  \*************************************************************/e=>{e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"./node_modules/prop-types/lib/has.js":
/*!********************************************!*\
	  !*** ./node_modules/prop-types/lib/has.js ***!
	  \********************************************/e=>{e.exports=Function.call.bind(Object.prototype.hasOwnProperty)},"./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
	  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
	  \***********************************************************/(e,t)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,n=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,u=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,f=e?Symbol.for("react.suspense"):60113,h=e?Symbol.for("react.suspense_list"):60120,p=e?Symbol.for("react.memo"):60115,m=e?Symbol.for("react.lazy"):60116,g=e?Symbol.for("react.block"):60121,y=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,b=e?Symbol.for("react.scope"):60119;function w(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:var h=e.type;switch(h){case c:case u:case o:case a:case i:case f:return h;default:var g=h&&h.$$typeof;switch(g){case l:case d:case m:case p:case s:return g;default:return t}}case r:return t}}}var x=c,D=u,$=l,S=s,F=n,O=d,E=o,B=m,k=p,R=r,A=a,j=i,M=f,C=!1;function T(e){return w(e)===u}t.AsyncMode=x,t.ConcurrentMode=D,t.ContextConsumer=$,t.ContextProvider=S,t.Element=F,t.ForwardRef=O,t.Fragment=E,t.Lazy=B,t.Memo=k,t.Portal=R,t.Profiler=A,t.StrictMode=j,t.Suspense=M,t.isAsyncMode=function(e){return C||(C=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),T(e)||w(e)===c},t.isConcurrentMode=T,t.isContextConsumer=function(e){return w(e)===l},t.isContextProvider=function(e){return w(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return w(e)===d},t.isFragment=function(e){return w(e)===o},t.isLazy=function(e){return w(e)===m},t.isMemo=function(e){return w(e)===p},t.isPortal=function(e){return w(e)===r},t.isProfiler=function(e){return w(e)===a},t.isStrictMode=function(e){return w(e)===i},t.isSuspense=function(e){return w(e)===f},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===u||e===a||e===i||e===f||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===p||e.$$typeof===s||e.$$typeof===l||e.$$typeof===d||e.$$typeof===y||e.$$typeof===v||e.$$typeof===b||e.$$typeof===g)},t.typeOf=w}()},"./node_modules/react-is/index.js":
/*!****************************************!*\
	  !*** ./node_modules/react-is/index.js ***!
	  \****************************************/(e,t,n)=>{e.exports=n(/*! ./cjs/react-is.development.js */"./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":
/*!******************************************************!*\
	  !*** ./node_modules/shallow-equal/dist/index.esm.js ***!
	  \******************************************************/(e,t,n)=>{function r(e,t){if(e===t)return!0;if(!e||!t)return!1;var n=Object.keys(e),r=Object.keys(t),o=n.length;if(r.length!==o)return!1;for(var i=0;i<o;i++){var a=n[i];if(e[a]!==t[a]||!Object.prototype.hasOwnProperty.call(t,a))return!1}return!0}function o(e,t){if(e===t)return!0;if(!e||!t)return!1;var n=e.length;if(t.length!==n)return!1;for(var r=0;r<n;r++)if(e[r]!==t[r])return!1;return!0}n.r(t),n.d(t,{shallowEqualArrays:()=>o,shallowEqualObjects:()=>r})},"./src/Component.ts":
/*!**************************!*\
	  !*** ./src/Component.ts ***!
	  \**************************/function(e,t,n){var r=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=o(n(/*! ./useMediaQuery */"./src/useMediaQuery.ts"));t.default=function(e){var t=e.children,n=e.device,o=e.onChange,a=r(e,["children","device","onChange"]),s=(0,i.default)(a,n,o);return"function"==typeof t?t(s):s?t:null}},"./src/Context.ts":
/*!************************!*\
	  !*** ./src/Context.ts ***!
	  \************************/(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var r=(0,n(/*! react */"react").createContext)(void 0);t.default=r},"./src/index.ts":
/*!**********************!*\
	  !*** ./src/index.ts ***!
	  \**********************/function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Context=t.toQuery=t.useMediaQuery=t.default=void 0;var o=r(n(/*! ./useMediaQuery */"./src/useMediaQuery.ts"));t.useMediaQuery=o.default;var i=r(n(/*! ./Component */"./src/Component.ts"));t.default=i.default;var a=r(n(/*! ./toQuery */"./src/toQuery.ts"));t.toQuery=a.default;var s=r(n(/*! ./Context */"./src/Context.ts"));t.Context=s.default},"./src/mediaQuery.ts":
/*!***************************!*\
	  !*** ./src/mediaQuery.ts ***!
	  \***************************/function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)},o=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=i(n(/*! prop-types */"./node_modules/prop-types/index.js")),s=a.default.oneOfType([a.default.string,a.default.number]),l={all:a.default.bool,grid:a.default.bool,aural:a.default.bool,braille:a.default.bool,handheld:a.default.bool,print:a.default.bool,projection:a.default.bool,screen:a.default.bool,tty:a.default.bool,tv:a.default.bool,embossed:a.default.bool},c={orientation:a.default.oneOf(["portrait","landscape"]),scan:a.default.oneOf(["progressive","interlace"]),aspectRatio:a.default.string,deviceAspectRatio:a.default.string,height:s,deviceHeight:s,width:s,deviceWidth:s,color:a.default.bool,colorIndex:a.default.bool,monochrome:a.default.bool,resolution:s,type:Object.keys(l)},u=o(c,["type"]),d=r({minAspectRatio:a.default.string,maxAspectRatio:a.default.string,minDeviceAspectRatio:a.default.string,maxDeviceAspectRatio:a.default.string,minHeight:s,maxHeight:s,minDeviceHeight:s,maxDeviceHeight:s,minWidth:s,maxWidth:s,minDeviceWidth:s,maxDeviceWidth:s,minColor:a.default.number,maxColor:a.default.number,minColorIndex:a.default.number,maxColorIndex:a.default.number,minMonochrome:a.default.number,maxMonochrome:a.default.number,minResolution:s,maxResolution:s},u),f=r(r({},l),d);t.default={all:f,types:l,matchers:c,features:d}},"./src/toQuery.ts":
/*!************************!*\
	  !*** ./src/toQuery.ts ***!
	  \************************/function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),i=r(n(/*! ./mediaQuery */"./src/mediaQuery.ts"));t.default=function(e){var t=[];return Object.keys(i.default.all).forEach((function(n){var r=e[n];null!=r&&t.push(function(e,t){var n=(0,o.default)(e);return"number"==typeof t&&(t="".concat(t,"px")),!0===t?n:!1===t?"not ".concat(n):"(".concat(n,": ").concat(t,")")}(n,r))})),t.join(" and ")}},"./src/useMediaQuery.ts":
/*!******************************!*\
	  !*** ./src/useMediaQuery.ts ***!
	  \******************************/function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(/*! react */"react"),i=r(n(/*! matchmediaquery */"./node_modules/matchmediaquery/index.js")),a=r(n(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),s=n(/*! shallow-equal */"./node_modules/shallow-equal/dist/index.esm.js"),l=r(n(/*! ./toQuery */"./src/toQuery.ts")),c=r(n(/*! ./Context */"./src/Context.ts")),u=function(e){if(e)return Object.keys(e).reduce((function(t,n){return t[(0,a.default)(n)]=e[n],t}),{})},d=function(){var e=(0,o.useRef)(!1);return(0,o.useEffect)((function(){e.current=!0}),[]),e.current},f=function(e){var t=function(){return function(e){return e.query||(0,l.default)(e)}(e)},n=(0,o.useState)(t),r=n[0],i=n[1];return(0,o.useEffect)((function(){var e=t();r!==e&&i(e)}),[e]),r};t.default=function(e,t,n){var r=function(e){var t=(0,o.useContext)(c.default),n=function(){return u(e)||u(t)},r=(0,o.useState)(n),i=r[0],a=r[1];return(0,o.useEffect)((function(){var e=n();(0,s.shallowEqualObjects)(i,e)||a(e)}),[e,t]),i}(t),a=f(e);if(!a)throw new Error("Invalid or missing MediaQuery!");var l=function(e,t){var n=function(){return(0,i.default)(e,t||{},!!t)},r=(0,o.useState)(n),a=r[0],s=r[1],l=d();return(0,o.useEffect)((function(){if(l){var e=n();return s(e),function(){e&&e.dispose()}}}),[e,t]),a}(a,r),h=function(e){var t=(0,o.useState)(e.matches),n=t[0],r=t[1];return(0,o.useEffect)((function(){var t=function(e){r(e.matches)};return e.addListener(t),r(e.matches),function(){e.removeListener(t)}}),[e]),n}(l),p=d();return(0,o.useEffect)((function(){p&&n&&n(h)}),[h]),(0,o.useEffect)((function(){return function(){l&&l.dispose()}}),[]),h}},react:
/*!**************************************************************************************!*\
	  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
	  \**************************************************************************************/t=>{t.exports=e}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return t[e].call(i.exports,i,i.exports,r),i.exports}return r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r("./src/index.ts")})();var T=C.exports=j(o);const H={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},L=e=>Object.keys(H).reduce(((t,n)=>{const r=H[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),P=L("max-width"),_=(L("min-width"),H);var I=Array.isArray,N="object"==typeof k&&k&&k.Object===Object&&k,Y="object"==typeof self&&self&&self.Object===Object&&self,z=N||Y||Function("return this")(),W=z.Symbol,V=W,q=Object.prototype,U=q.hasOwnProperty,Z=q.toString,K=V?V.toStringTag:void 0;var X=function(e){var t=U.call(e,K),n=e[K];try{e[K]=void 0;var r=!0}catch(e){}var o=Z.call(e);return r&&(t?e[K]=n:delete e[K]),o},Q=Object.prototype.toString;var G=X,J=function(e){return Q.call(e)},ee=W?W.toStringTag:void 0;var te=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":ee&&ee in Object(e)?G(e):J(e)};var ne=te,re=function(e){return null!=e&&"object"==typeof e};var oe=function(e){return"symbol"==typeof e||re(e)&&"[object Symbol]"==ne(e)},ie=I,ae=oe,se=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,le=/^\w*$/;var ce=function(e,t){if(ie(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!ae(e))||(le.test(e)||!se.test(e)||null!=t&&e in Object(t))};var ue=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},de=te,fe=ue;var he,pe=function(e){if(!fe(e))return!1;var t=de(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},me=z["__core-js_shared__"],ge=(he=/[^.]+$/.exec(me&&me.keys&&me.keys.IE_PROTO||""))?"Symbol(src)_1."+he:"";var ye=function(e){return!!ge&&ge in e},ve=Function.prototype.toString;var be=pe,we=ye,xe=ue,De=function(e){if(null!=e){try{return ve.call(e)}catch(e){}try{return e+""}catch(e){}}return""},$e=/^\[object .+?Constructor\]$/,Se=Function.prototype,Fe=Object.prototype,Oe=Se.toString,Ee=Fe.hasOwnProperty,Be=RegExp("^"+Oe.call(Ee).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ke=function(e){return!(!xe(e)||we(e))&&(be(e)?Be:$e).test(De(e))},Re=function(e,t){return null==e?void 0:e[t]};var Ae=function(e,t){var n=Re(e,t);return ke(n)?n:void 0},je=Ae(Object,"create"),Me=je;var Ce=function(){this.__data__=Me?Me(null):{},this.size=0};var Te=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},He=je,Le=Object.prototype.hasOwnProperty;var Pe=function(e){var t=this.__data__;if(He){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return Le.call(t,e)?t[e]:void 0},_e=je,Ie=Object.prototype.hasOwnProperty;var Ne=je;var Ye=Ce,ze=Te,We=Pe,Ve=function(e){var t=this.__data__;return _e?void 0!==t[e]:Ie.call(t,e)},qe=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Ne&&void 0===t?"__lodash_hash_undefined__":t,this};function Ue(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ue.prototype.clear=Ye,Ue.prototype.delete=ze,Ue.prototype.get=We,Ue.prototype.has=Ve,Ue.prototype.set=qe;var Ze=Ue;var Ke=function(){this.__data__=[],this.size=0};var Xe=function(e,t){return e===t||e!=e&&t!=t};var Qe=function(e,t){for(var n=e.length;n--;)if(Xe(e[n][0],t))return n;return-1},Ge=Qe,Je=Array.prototype.splice;var et=function(e){var t=this.__data__,n=Ge(t,e);return!(n<0)&&(n==t.length-1?t.pop():Je.call(t,n,1),--this.size,!0)},tt=Qe;var nt=function(e){var t=this.__data__,n=tt(t,e);return n<0?void 0:t[n][1]},rt=Qe;var ot=Qe;var it=function(e,t){var n=this.__data__,r=ot(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this},at=Ke,st=et,lt=nt,ct=function(e){return rt(this.__data__,e)>-1},ut=it;function dt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}dt.prototype.clear=at,dt.prototype.delete=st,dt.prototype.get=lt,dt.prototype.has=ct,dt.prototype.set=ut;var ft=dt,ht=Ae(z,"Map"),pt=Ze,mt=ft,gt=ht;var yt=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var vt=function(e,t){var n=e.__data__;return yt(t)?n["string"==typeof t?"string":"hash"]:n.map},bt=vt;var wt=vt;var xt=vt;var Dt=vt;var $t=function(e,t){var n=Dt(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this},St=function(){this.size=0,this.__data__={hash:new pt,map:new(gt||mt),string:new pt}},Ft=function(e){var t=bt(this,e).delete(e);return this.size-=t?1:0,t},Ot=function(e){return wt(this,e).get(e)},Et=function(e){return xt(this,e).has(e)},Bt=$t;function kt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}kt.prototype.clear=St,kt.prototype.delete=Ft,kt.prototype.get=Ot,kt.prototype.has=Et,kt.prototype.set=Bt;var Rt=kt;function At(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(At.Cache||Rt),n}At.Cache=Rt;var jt=At;var Mt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ct=/\\(\\)?/g,Tt=function(e){var t=jt(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Mt,(function(e,n,r,o){t.push(r?o.replace(Ct,"$1"):n||e)})),t}));var Ht=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o},Lt=Ht,Pt=I,_t=oe,It=W?W.prototype:void 0,Nt=It?It.toString:void 0;var Yt=function e(t){if("string"==typeof t)return t;if(Pt(t))return Lt(t,e)+"";if(_t(t))return Nt?Nt.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},zt=Yt;var Wt=I,Vt=ce,qt=Tt,Ut=function(e){return null==e?"":zt(e)};var Zt=oe;var Kt=function(e,t){return Wt(e)?e:Vt(e,t)?[e]:qt(Ut(e))},Xt=function(e){if("string"==typeof e||Zt(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var Qt=function(e,t){for(var n=0,r=(t=Kt(t,e)).length;null!=e&&n<r;)e=e[Xt(t[n++])];return n&&n==r?e:void 0},Gt=Qt;var Jt=R((function(e,t,n){var r=null==e?void 0:Gt(e,t);return void 0===r?n:r}));const en=(e,t,n)=>t?Jt(n,t)||Jt(e,t):n||e,tn=(e,t)=>{const n=t||e.defaultValue;return Jt(e.collections,n)};var nn;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(nn||(nn={}));const rn={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},on=e=>t=>{const n=t.theme,r=tn(rn,n[nn.colorScheme]);return n.options&&n.options.color?en(r,e,n.options.color):en(r,e)},an={Brand:{1:on("Brand.1"),2:on("Brand.2"),3:on("Brand.3"),4:on("Brand.4"),5:on("Brand.5"),6:on("Brand.6")},Primary:on("Primary"),PrimaryDark:on("PrimaryDark"),Secondary:on("Secondary"),Accent:{Light:{1:on("Accent.Light.1"),2:on("Accent.Light.2"),3:on("Accent.Light.3"),4:on("Accent.Light.4"),5:on("Accent.Light.5"),6:on("Accent.Light.6")},Dark:{1:on("Accent.Dark.1"),2:on("Accent.Dark.2"),3:on("Accent.Dark.3")}},Neutral:{1:on("Neutral.1"),2:on("Neutral.2"),3:on("Neutral.3"),4:on("Neutral.4"),5:on("Neutral.5"),6:on("Neutral.6"),7:on("Neutral.7"),8:on("Neutral.8")},Validation:{Green:{Text:on("Validation.Green.Text"),Icon:on("Validation.Green.Icon"),Border:on("Validation.Green.Border"),Background:on("Validation.Green.Background")},Orange:{Text:on("Validation.Orange.Text"),Icon:on("Validation.Orange.Icon"),Border:on("Validation.Orange.Border"),Background:on("Validation.Orange.Background"),Badge:on("Validation.Orange.Badge")},Red:{Text:on("Validation.Red.Text"),Icon:on("Validation.Red.Icon"),Border:on("Validation.Red.Border"),Background:on("Validation.Red.Background")},Blue:{Text:on("Validation.Blue.Text"),Icon:on("Validation.Blue.Icon"),Border:on("Validation.Blue.Border"),Background:on("Validation.Blue.Background")}},Shadow:{Accent:on("Shadow.Accent"),Red:on("Shadow.Red"),Elevation:on("Shadow.Elevation")}},sn={collections:{base:{InputBoxShadow:b`
        inset 0 0 4px 0px ${an.Shadow.Accent}
    `,InputErrorBoxShadow:b`
        inset 0 0 4px 0px ${an.Shadow.Red}
    `,ElevationBoxShadow:b`
      0px 2px 8px ${an.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:b`
        inset 0 0 3px 0px ${an.Shadow.Accent}
    `,InputErrorBoxShadow:b`
        inset 0 0 3px 0px ${an.Shadow.Red}
    `,ElevationBoxShadow:b`
      0px 2px 8px ${an.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},ln=e=>t=>{var n;const r=t.theme,o=tn(sn,r[nn.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?en(o,e,r.options.designToken):en(o,e)},cn={InputBoxShadow:ln("InputBoxShadow"),InputErrorBoxShadow:ln("InputErrorBoxShadow"),ElevationBoxShadow:ln("ElevationBoxShadow"),Table:{Header:ln("Table.Header"),Cell:{Primary:ln("Table.Cell.Primary"),Secondary:ln("Table.Cell.Secondary"),Selected:ln("Table.Cell.Selected"),Hover:ln("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:ln("Button.Danger.BackgroundColor"),Hover:ln("Button.Danger.Hover"),Primary:ln("Button.Danger.Primary"),Border:ln("Button.Danger.Border")}}},un={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},dn={collections:{base:{D1:{fontFamily:un.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:un.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:un.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:un.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:un.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:un.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:un.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:un.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:un.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:un.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:un.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:un.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:un.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:un.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},oneservice:{D1:{fontFamily:un.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:un.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:un.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:un.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:un.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:un.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:un.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:un.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:un.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:un.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:un.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:un.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:un.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:un.Regular,fontSize:.75,lineHeight:1.125}}},defaultValue:"base"},fn=e=>t=>{const n=t.theme,r=tn(dn,n[nn.textStyleScheme]);return n.options&&n.options.textStyle?en(r,e,n.options.textStyle):en(r,e)},hn={D1:{fontFamily:fn("D1.fontFamily"),fontSize:fn("D1.fontSize"),fontWeight:fn("D1.fontWeight"),lineHeight:fn("D1.lineHeight"),letterSpacing:fn("D1.letterSpacing")},D2:{fontFamily:fn("D2.fontFamily"),fontSize:fn("D2.fontSize"),fontWeight:fn("D2.fontWeight"),lineHeight:fn("D2.lineHeight"),letterSpacing:fn("D2.letterSpacing")},D3:{fontFamily:fn("D3.fontFamily"),fontSize:fn("D3.fontSize"),fontWeight:fn("D3.fontWeight"),lineHeight:fn("D3.lineHeight"),letterSpacing:fn("D3.letterSpacing")},D4:{fontFamily:fn("D4.fontFamily"),fontSize:fn("D4.fontSize"),fontWeight:fn("D4.fontWeight"),lineHeight:fn("D4.lineHeight"),letterSpacing:fn("D4.letterSpacing")},DBody:{fontFamily:fn("DBody.fontFamily"),fontSize:fn("DBody.fontSize"),fontWeight:fn("DBody.fontWeight"),lineHeight:fn("DBody.lineHeight"),letterSpacing:fn("DBody.letterSpacing")},H1:{fontFamily:fn("H1.fontFamily"),fontSize:fn("H1.fontSize"),fontWeight:fn("H1.fontWeight"),lineHeight:fn("H1.lineHeight"),letterSpacing:fn("H1.letterSpacing")},H2:{fontFamily:fn("H2.fontFamily"),fontSize:fn("H2.fontSize"),fontWeight:fn("H2.fontWeight"),lineHeight:fn("H2.lineHeight"),letterSpacing:fn("H2.letterSpacing")},H3:{fontFamily:fn("H3.fontFamily"),fontSize:fn("H3.fontSize"),fontWeight:fn("H3.fontWeight"),lineHeight:fn("H3.lineHeight"),letterSpacing:fn("H3.letterSpacing")},H4:{fontFamily:fn("H4.fontFamily"),fontSize:fn("H4.fontSize"),fontWeight:fn("H4.fontWeight"),lineHeight:fn("H4.lineHeight"),letterSpacing:fn("H4.letterSpacing")},H5:{fontFamily:fn("H5.fontFamily"),fontSize:fn("H5.fontSize"),fontWeight:fn("H5.fontWeight"),lineHeight:fn("H5.lineHeight"),letterSpacing:fn("H5.letterSpacing")},H6:{fontFamily:fn("H6.fontFamily"),fontSize:fn("H6.fontSize"),fontWeight:fn("H6.fontWeight"),lineHeight:fn("H6.lineHeight"),letterSpacing:fn("H6.letterSpacing")},Body:{fontFamily:fn("Body.fontFamily"),fontSize:fn("Body.fontSize"),fontWeight:fn("Body.fontWeight"),lineHeight:fn("Body.lineHeight"),letterSpacing:fn("Body.letterSpacing")},BodySmall:{fontFamily:fn("BodySmall.fontFamily"),fontSize:fn("BodySmall.fontSize"),fontWeight:fn("BodySmall.fontWeight"),lineHeight:fn("BodySmall.lineHeight"),letterSpacing:fn("BodySmall.letterSpacing")},XSmall:{fontFamily:fn("XSmall.fontFamily"),fontSize:fn("XSmall.fontSize"),fontWeight:fn("XSmall.fontWeight"),lineHeight:fn("XSmall.lineHeight"),letterSpacing:fn("XSmall.letterSpacing")}},pn=e=>{switch(e){case 700:case"bold":return un.Bold;case 600:case"semibold":return un.Semibold;case 300:case"light":return un.Light;case 400:case"regular":return un.Regular;default:return""}},mn=(e,t)=>n=>{var r;const o=hn[e].fontFamily(n),i=hn[e].fontWeight(n);return Object.values(un).includes(o)?b`
                font-family: ${pn(t)||pn(i)||o};
                font-weight: normal !important;
            `:b`
            font-family: ${o};
            font-weight: ${null!==(r=gn(t)||i)&&void 0!==r?r:"normal"};
        `},gn=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},yn=e=>{if(e>0)return b`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},vn=(e,t,n=!1)=>r=>{const o=hn[e],i=o.fontSize(r);return b`
            ${mn(e,t)}
            font-size: ${i}rem !important;
            line-height: ${o.lineHeight}rem !important;
            letter-spacing: ${o.letterSpacing(r)||0}rem !important;
            ${b`
                margin-bottom: ${i*(n?1.05:0)}rem;
            `}
        `},bn=(e=!1,t=!1,n=void 0)=>t?b`
            display: block;
            ${yn(n)}
        `:e?b`
            display: inline;
        `:b`
            display: block;
            ${yn(n)}
        `;var wn;!function(e){e.D1=v.h1`
        ${e=>b`
                ${vn("D1",e.weight,e.paragraph)}
                color: ${an.Neutral[1]};
                ${bn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=v.h1`
        ${e=>b`
                ${vn("D2",e.weight,e.paragraph)}
                color: ${an.Neutral[1]};
                ${bn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=v.h1`
        ${e=>b`
                ${vn("D3",e.weight,e.paragraph)}
                color: ${an.Neutral[1]};
                ${bn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=v.h1`
        ${e=>b`
                ${vn("D4",e.weight,e.paragraph)}
                color: ${an.Neutral[1]};
                ${bn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=v.h1`
        ${e=>b`
                ${vn("DBody",e.weight,e.paragraph)}
                color: ${an.Neutral[1]};
                ${bn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=v.h1`
        ${e=>b`
                ${vn("H1",e.weight,e.paragraph)}
                color: ${an.Neutral[1]};
                ${bn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=v.h2`
        ${e=>b`
                ${vn("H2",e.weight,e.paragraph)}
                color: ${an.Neutral[1]};
                ${bn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=v.h3`
        ${e=>b`
                ${vn("H3",e.weight,e.paragraph)}
                color: ${an.Neutral[1]};
                ${bn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=v.h4`
        ${e=>b`
                ${vn("H4",e.weight,e.paragraph)}
                color: ${an.Neutral[1]};
                ${bn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=v.h5`
        ${e=>b`
                ${vn("H5",e.weight,e.paragraph)}
                color: ${an.Neutral[1]};
                ${bn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=v.h6`
        ${e=>b`
                ${vn("H6",e.weight,e.paragraph)}
                color: ${an.Neutral[1]};
                ${bn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=v.p`
        ${e=>b`
                ${vn("Body",e.weight,e.paragraph)}
                color: ${an.Neutral[1]};
                ${bn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=v.p`
        ${e=>b`
                ${vn("BodySmall",e.weight,e.paragraph)}
                color: ${an.Neutral[1]};
                ${bn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=v.span`
        ${e=>b`
                ${vn("XSmall",e.weight,e.paragraph)}
                color: ${an.Neutral[1]};
                ${bn(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>$n(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>$n(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(wn||(wn={}));const xn=v.a`
    ${e=>b`
            ${vn(e.textStyle,e.weight)}
            color: ${an.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${an.Secondary};

                svg {
                    color: ${an.Secondary};
                }
            }
        `}
`,Dn=v(x)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,$n=n=>{var{external:r=!1,children:o}=n,i=B(n,["external","children"]);return e(xn,Object.assign({},i,{children:[o,r&&t(Dn,{})]}))};var Sn;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Sn||(Sn={}));const Fn="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",On=e=>"small"===e?2.5:3;v.div`
    position: relative;
    width: 100%;
    ${e=>{const t=On(e.$variant);return b`
            min-height: ${t}rem;
            height: ${t}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`;const En=b`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    // exclude top and bottom borders
    height: calc(${e=>On(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${"4px"};
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${an.Accent.Light[3]};
    }
`,Bn=v.button`
    ${En}
    cursor: pointer;
`;v.div`
    ${En}
`;const kn=w`
	from {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 2;
	}

	to {
		position: relative;
	}
`;v.div`
    position: relative;
    border: 1px solid ${an.Neutral[5]};
    border-radius: ${"4px"};
    background: ${an.Neutral[8]};

    :focus-within {
        border: 1px solid ${an.Accent.Light[1]};
        box-shadow: ${cn.InputBoxShadow};
    }

    ${e=>e.expanded?b`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:b`
                animation: ${kn} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?b`
                background: ${an.Neutral[6](e)};

                ${Bn} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${an.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$readOnly?b`
                border: none;
                background: transparent !important;

                ${Bn} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?b`
                border: 1px solid ${an.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${an.Validation.Red.Border(e)};
                    box-shadow: ${cn.InputErrorBoxShadow};
                }
            `:void 0}
`,v.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: ${Fn};
    margin-left: 1rem;
`,v(y)`
    color: ${an.Neutral[3]};
    ${e=>{let t=hn.Body.fontSize;return"small"===e.$variant&&(t=hn.BodySmall.fontSize),b`
            height: ${t}rem;
            width: ${t}rem;
        `}}
`,v.div`
    height: 1px;
    background: ${an.Neutral[5]};
    margin: 0 0.5rem;
`,v.div`
    display: flex;
    flex: 1;
    word-break: break-all;
`;const Rn=v.div`
    ${e=>vn("small"===e.$variant?"BodySmall":"Body","regular")}
    text-align: left;
    line-height: 1.375rem;
    ${e=>{if("middle"!==e.truncateType)return b`
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                `}}
    overflow: hidden;
`;function An(e){return Cn(e)?(e.nodeName||"").toLowerCase():"#document"}function jn(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function Mn(e){var t;return null==(t=(Cn(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function Cn(e){return e instanceof Node||e instanceof jn(e).Node}function Tn(e){return e instanceof Element||e instanceof jn(e).Element}function Hn(e){return e instanceof HTMLElement||e instanceof jn(e).HTMLElement}function Ln(e){return"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof jn(e).ShadowRoot)}function Pn(e){const{overflow:t,overflowX:n,overflowY:r,display:o}=zn(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(o)}function _n(e){return["table","td","th"].includes(An(e))}function In(e){const t=Nn(),n=zn(e);return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!t&&!!n.backdropFilter&&"none"!==n.backdropFilter||!t&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some((e=>(n.willChange||"").includes(e)))||["paint","layout","strict","content"].some((e=>(n.contain||"").includes(e)))}function Nn(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function Yn(e){return["html","body","#document"].includes(An(e))}function zn(e){return jn(e).getComputedStyle(e)}function Wn(e){return Tn(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function Vn(e){if("html"===An(e))return e;const t=e.assignedSlot||e.parentNode||Ln(e)&&e.host||Mn(e);return Ln(t)?t.host:t}function qn(e){const t=Vn(e);return Yn(t)?e.ownerDocument?e.ownerDocument.body:e.body:Hn(t)&&Pn(t)?t:qn(t)}function Un(e,t,n){var r;void 0===t&&(t=[]),void 0===n&&(n=!0);const o=qn(e),i=o===(null==(r=e.ownerDocument)?void 0:r.body),a=jn(o);return i?t.concat(a,a.visualViewport||[],Pn(o)?o:[],a.frameElement&&n?Un(a.frameElement):[]):t.concat(o,Un(o,[],n))}function Zn(e){let t=e.activeElement;for(;null!=(null==(n=t)||null==(n=n.shadowRoot)?void 0:n.activeElement);){var n;t=t.shadowRoot.activeElement}return t}function Kn(e,t){if(!e||!t)return!1;const n=null==t.getRootNode?void 0:t.getRootNode();if(e.contains(t))return!0;if(n&&Ln(n)){let n=t;for(;n;){if(e===n)return!0;n=n.parentNode||n.host}}return!1}function Xn(){const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?e.brands.map((e=>{let{brand:t,version:n}=e;return t+"/"+n})).join(" "):navigator.userAgent}function Qn(e){return!Xn().includes("jsdom/")&&(!Gn()&&0===e.width&&0===e.height||Gn()&&1===e.width&&1===e.height&&0===e.pressure&&0===e.detail&&"mouse"===e.pointerType||e.width<1&&e.height<1&&0===e.pressure&&0===e.detail&&"touch"===e.pointerType)}function Gn(){const e=/android/i;return e.test(function(){const e=navigator.userAgentData;return null!=e&&e.platform?e.platform:navigator.platform}())||e.test(Xn())}function Jn(e,t){const n=["mouse","pen"];return t||n.push("",void 0),n.includes(e)}function er(e){return(null==e?void 0:e.ownerDocument)||document}function tr(e,t){if(null==t)return!1;if("composedPath"in e)return e.composedPath().includes(t);const n=e;return null!=n.target&&t.contains(n.target)}function nr(e){return"composedPath"in e?e.composedPath()[0]:e.target}v(Rn)`
    color: ${an.Neutral[3]};
`;const rr="input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";function or(e){return Hn(e)&&e.matches(rr)}function ir(e){e.preventDefault(),e.stopPropagation()}const ar=Math.min,sr=Math.max,lr=Math.round,cr=Math.floor,ur=e=>({x:e,y:e}),dr={left:"right",right:"left",bottom:"top",top:"bottom"},fr={start:"end",end:"start"};function hr(e,t,n){return sr(e,ar(t,n))}function pr(e,t){return"function"==typeof e?e(t):e}function mr(e){return e.split("-")[0]}function gr(e){return e.split("-")[1]}function yr(e){return"x"===e?"y":"x"}function vr(e){return"y"===e?"height":"width"}function br(e){return["top","bottom"].includes(mr(e))?"y":"x"}function wr(e){return yr(br(e))}function xr(e){return e.replace(/start|end/g,(e=>fr[e]))}function Dr(e){return e.replace(/left|right|bottom|top/g,(e=>dr[e]))}function $r(e){const{x:t,y:n,width:r,height:o}=e;return{width:r,height:o,top:n,left:t,right:t+r,bottom:n+o,x:t,y:n}}function Sr(e,t,n){let{reference:r,floating:o}=e;const i=br(t),a=wr(t),s=vr(a),l=mr(t),c="y"===i,u=r.x+r.width/2-o.width/2,d=r.y+r.height/2-o.height/2,f=r[s]/2-o[s]/2;let h;switch(l){case"top":h={x:u,y:r.y-o.height};break;case"bottom":h={x:u,y:r.y+r.height};break;case"right":h={x:r.x+r.width,y:d};break;case"left":h={x:r.x-o.width,y:d};break;default:h={x:r.x,y:r.y}}switch(gr(t)){case"start":h[a]-=f*(n&&c?-1:1);break;case"end":h[a]+=f*(n&&c?-1:1)}return h}async function Fr(e,t){var n;void 0===t&&(t={});const{x:r,y:o,platform:i,rects:a,elements:s,strategy:l}=e,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:f=!1,padding:h=0}=pr(t,e),p=function(e){return"number"!=typeof e?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(e):{top:e,right:e,bottom:e,left:e}}(h),m=s[f?"floating"===d?"reference":"floating":d],g=$r(await i.getClippingRect({element:null==(n=await(null==i.isElement?void 0:i.isElement(m)))||n?m:m.contextElement||await(null==i.getDocumentElement?void 0:i.getDocumentElement(s.floating)),boundary:c,rootBoundary:u,strategy:l})),y="floating"===d?{x:r,y:o,width:a.floating.width,height:a.floating.height}:a.reference,v=await(null==i.getOffsetParent?void 0:i.getOffsetParent(s.floating)),b=await(null==i.isElement?void 0:i.isElement(v))&&await(null==i.getScale?void 0:i.getScale(v))||{x:1,y:1},w=$r(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:s,rect:y,offsetParent:v,strategy:l}):y);return{top:(g.top-w.top+p.top)/b.y,bottom:(w.bottom-g.bottom+p.bottom)/b.y,left:(g.left-w.left+p.left)/b.x,right:(w.right-g.right+p.right)/b.x}}function Or(e){const t=zn(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const o=Hn(e),i=o?e.offsetWidth:n,a=o?e.offsetHeight:r,s=lr(n)!==i||lr(r)!==a;return s&&(n=i,r=a),{width:n,height:r,$:s}}function Er(e){return Tn(e)?e:e.contextElement}function Br(e){const t=Er(e);if(!Hn(t))return ur(1);const n=t.getBoundingClientRect(),{width:r,height:o,$:i}=Or(t);let a=(i?lr(n.width):n.width)/r,s=(i?lr(n.height):n.height)/o;return a&&Number.isFinite(a)||(a=1),s&&Number.isFinite(s)||(s=1),{x:a,y:s}}const kr=ur(0);function Rr(e){const t=jn(e);return Nn()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:kr}function Ar(e,t,n,r){void 0===t&&(t=!1),void 0===n&&(n=!1);const o=e.getBoundingClientRect(),i=Er(e);let a=ur(1);t&&(r?Tn(r)&&(a=Br(r)):a=Br(e));const s=function(e,t,n){return void 0===t&&(t=!1),!(!n||t&&n!==jn(e))&&t}(i,n,r)?Rr(i):ur(0);let l=(o.left+s.x)/a.x,c=(o.top+s.y)/a.y,u=o.width/a.x,d=o.height/a.y;if(i){const e=jn(i),t=r&&Tn(r)?jn(r):r;let n=e,o=n.frameElement;for(;o&&r&&t!==n;){const e=Br(o),t=o.getBoundingClientRect(),r=zn(o),i=t.left+(o.clientLeft+parseFloat(r.paddingLeft))*e.x,a=t.top+(o.clientTop+parseFloat(r.paddingTop))*e.y;l*=e.x,c*=e.y,u*=e.x,d*=e.y,l+=i,c+=a,n=jn(o),o=n.frameElement}}return $r({width:u,height:d,x:l,y:c})}const jr=[":popover-open",":modal"];function Mr(e){return jr.some((t=>{try{return e.matches(t)}catch(e){return!1}}))}function Cr(e){return Ar(Mn(e)).left+Wn(e).scrollLeft}function Tr(e,t,n){let r;if("viewport"===t)r=function(e,t){const n=jn(e),r=Mn(e),o=n.visualViewport;let i=r.clientWidth,a=r.clientHeight,s=0,l=0;if(o){i=o.width,a=o.height;const e=Nn();(!e||e&&"fixed"===t)&&(s=o.offsetLeft,l=o.offsetTop)}return{width:i,height:a,x:s,y:l}}(e,n);else if("document"===t)r=function(e){const t=Mn(e),n=Wn(e),r=e.ownerDocument.body,o=sr(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),i=sr(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let a=-n.scrollLeft+Cr(e);const s=-n.scrollTop;return"rtl"===zn(r).direction&&(a+=sr(t.clientWidth,r.clientWidth)-o),{width:o,height:i,x:a,y:s}}(Mn(e));else if(Tn(t))r=function(e,t){const n=Ar(e,!0,"fixed"===t),r=n.top+e.clientTop,o=n.left+e.clientLeft,i=Hn(e)?Br(e):ur(1);return{width:e.clientWidth*i.x,height:e.clientHeight*i.y,x:o*i.x,y:r*i.y}}(t,n);else{const n=Rr(e);r={...t,x:t.x-n.x,y:t.y-n.y}}return $r(r)}function Hr(e,t){const n=Vn(e);return!(n===t||!Tn(n)||Yn(n))&&("fixed"===zn(n).position||Hr(n,t))}function Lr(e,t,n){const r=Hn(t),o=Mn(t),i="fixed"===n,a=Ar(e,!0,i,t);let s={scrollLeft:0,scrollTop:0};const l=ur(0);if(r||!r&&!i)if(("body"!==An(t)||Pn(o))&&(s=Wn(t)),r){const e=Ar(t,!0,i,t);l.x=e.x+t.clientLeft,l.y=e.y+t.clientTop}else o&&(l.x=Cr(o));return{x:a.left+s.scrollLeft-l.x,y:a.top+s.scrollTop-l.y,width:a.width,height:a.height}}function Pr(e){return"static"===zn(e).position}function _r(e,t){return Hn(e)&&"fixed"!==zn(e).position?t?t(e):e.offsetParent:null}function Ir(e,t){const n=jn(e);if(Mr(e))return n;if(!Hn(e)){let t=Vn(e);for(;t&&!Yn(t);){if(Tn(t)&&!Pr(t))return t;t=Vn(t)}return n}let r=_r(e,t);for(;r&&_n(r)&&Pr(r);)r=_r(r,t);return r&&Yn(r)&&Pr(r)&&!In(r)?n:r||function(e){let t=Vn(e);for(;Hn(t)&&!Yn(t);){if(In(t))return t;t=Vn(t)}return null}(e)||n}const Nr={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:n,offsetParent:r,strategy:o}=e;const i="fixed"===o,a=Mn(r),s=!!t&&Mr(t.floating);if(r===a||s&&i)return n;let l={scrollLeft:0,scrollTop:0},c=ur(1);const u=ur(0),d=Hn(r);if((d||!d&&!i)&&(("body"!==An(r)||Pn(a))&&(l=Wn(r)),Hn(r))){const e=Ar(r);c=Br(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-l.scrollLeft*c.x+u.x,y:n.y*c.y-l.scrollTop*c.y+u.y}},getDocumentElement:Mn,getClippingRect:function(e){let{element:t,boundary:n,rootBoundary:r,strategy:o}=e;const i=[..."clippingAncestors"===n?Mr(t)?[]:function(e,t){const n=t.get(e);if(n)return n;let r=Un(e,[],!1).filter((e=>Tn(e)&&"body"!==An(e))),o=null;const i="fixed"===zn(e).position;let a=i?Vn(e):e;for(;Tn(a)&&!Yn(a);){const t=zn(a),n=In(a);n||"fixed"!==t.position||(o=null),(i?!n&&!o:!n&&"static"===t.position&&o&&["absolute","fixed"].includes(o.position)||Pn(a)&&!n&&Hr(e,a))?r=r.filter((e=>e!==a)):o=t,a=Vn(a)}return t.set(e,r),r}(t,this._c):[].concat(n),r],a=i[0],s=i.reduce(((e,n)=>{const r=Tr(t,n,o);return e.top=sr(r.top,e.top),e.right=ar(r.right,e.right),e.bottom=ar(r.bottom,e.bottom),e.left=sr(r.left,e.left),e}),Tr(t,a,o));return{width:s.right-s.left,height:s.bottom-s.top,x:s.left,y:s.top}},getOffsetParent:Ir,getElementRects:async function(e){const t=this.getOffsetParent||Ir,n=this.getDimensions,r=await n(e.floating);return{reference:Lr(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}},getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){const{width:t,height:n}=Or(e);return{width:t,height:n}},getScale:Br,isElement:Tn,isRTL:function(e){return"rtl"===zn(e).direction}};function Yr(e,t,n,r){void 0===r&&(r={});const{ancestorScroll:o=!0,ancestorResize:i=!0,elementResize:a="function"==typeof ResizeObserver,layoutShift:s="function"==typeof IntersectionObserver,animationFrame:l=!1}=r,c=Er(e),u=o||i?[...c?Un(c):[],...Un(t)]:[];u.forEach((e=>{o&&e.addEventListener("scroll",n,{passive:!0}),i&&e.addEventListener("resize",n)}));const d=c&&s?function(e,t){let n,r=null;const o=Mn(e);function i(){var e;clearTimeout(n),null==(e=r)||e.disconnect(),r=null}return function a(s,l){void 0===s&&(s=!1),void 0===l&&(l=1),i();const{left:c,top:u,width:d,height:f}=e.getBoundingClientRect();if(s||t(),!d||!f)return;const h={rootMargin:-cr(u)+"px "+-cr(o.clientWidth-(c+d))+"px "+-cr(o.clientHeight-(u+f))+"px "+-cr(c)+"px",threshold:sr(0,ar(1,l))||1};let p=!0;function m(e){const t=e[0].intersectionRatio;if(t!==l){if(!p)return a();t?a(!1,t):n=setTimeout((()=>{a(!1,1e-7)}),1e3)}p=!1}try{r=new IntersectionObserver(m,{...h,root:o.ownerDocument})}catch(e){r=new IntersectionObserver(m,h)}r.observe(e)}(!0),i}(c,n):null;let f,h=-1,p=null;a&&(p=new ResizeObserver((e=>{let[r]=e;r&&r.target===c&&p&&(p.unobserve(t),cancelAnimationFrame(h),h=requestAnimationFrame((()=>{var e;null==(e=p)||e.observe(t)}))),n()})),c&&!l&&p.observe(c),p.observe(t));let m=l?Ar(e):null;return l&&function t(){const r=Ar(e);!m||r.x===m.x&&r.y===m.y&&r.width===m.width&&r.height===m.height||n();m=r,f=requestAnimationFrame(t)}(),n(),()=>{var e;u.forEach((e=>{o&&e.removeEventListener("scroll",n),i&&e.removeEventListener("resize",n)})),null==d||d(),null==(e=p)||e.disconnect(),p=null,l&&cancelAnimationFrame(f)}}const zr=function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(t){var n,r;const{x:o,y:i,placement:a,middlewareData:s}=t,l=await async function(e,t){const{placement:n,platform:r,elements:o}=e,i=await(null==r.isRTL?void 0:r.isRTL(o.floating)),a=mr(n),s=gr(n),l="y"===br(n),c=["left","top"].includes(a)?-1:1,u=i&&l?-1:1,d=pr(t,e);let{mainAxis:f,crossAxis:h,alignmentAxis:p}="number"==typeof d?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return s&&"number"==typeof p&&(h="end"===s?-1*p:p),l?{x:h*u,y:f*c}:{x:f*c,y:h*u}}(t,e);return a===(null==(n=s.offset)?void 0:n.placement)&&null!=(r=s.arrow)&&r.alignmentOffset?{}:{x:o+l.x,y:i+l.y,data:{...l,placement:a}}}}},Wr=function(e){return void 0===e&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:r,placement:o}=t,{mainAxis:i=!0,crossAxis:a=!1,limiter:s={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...l}=pr(e,t),c={x:n,y:r},u=await Fr(t,l),d=br(mr(o)),f=yr(d);let h=c[f],p=c[d];if(i){const e="y"===f?"bottom":"right";h=hr(h+u["y"===f?"top":"left"],h,h-u[e])}if(a){const e="y"===d?"bottom":"right";p=hr(p+u["y"===d?"top":"left"],p,p-u[e])}const m=s.fn({...t,[f]:h,[d]:p});return{...m,data:{x:m.x-n,y:m.y-r}}}}},Vr=function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var n,r;const{placement:o,middlewareData:i,rects:a,initialPlacement:s,platform:l,elements:c}=t,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:f,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:p="none",flipAlignment:m=!0,...g}=pr(e,t);if(null!=(n=i.arrow)&&n.alignmentOffset)return{};const y=mr(o),v=mr(s)===s,b=await(null==l.isRTL?void 0:l.isRTL(c.floating)),w=f||(v||!m?[Dr(s)]:function(e){const t=Dr(e);return[xr(e),t,xr(t)]}(s));f||"none"===p||w.push(...function(e,t,n,r){const o=gr(e);let i=function(e,t,n){const r=["left","right"],o=["right","left"],i=["top","bottom"],a=["bottom","top"];switch(e){case"top":case"bottom":return n?t?o:r:t?r:o;case"left":case"right":return t?i:a;default:return[]}}(mr(e),"start"===n,r);return o&&(i=i.map((e=>e+"-"+o)),t&&(i=i.concat(i.map(xr)))),i}(s,m,p,b));const x=[s,...w],D=await Fr(t,g),$=[];let S=(null==(r=i.flip)?void 0:r.overflows)||[];if(u&&$.push(D[y]),d){const e=function(e,t,n){void 0===n&&(n=!1);const r=gr(e),o=wr(e),i=vr(o);let a="x"===o?r===(n?"end":"start")?"right":"left":"start"===r?"bottom":"top";return t.reference[i]>t.floating[i]&&(a=Dr(a)),[a,Dr(a)]}(o,a,b);$.push(D[e[0]],D[e[1]])}if(S=[...S,{placement:o,overflows:$}],!$.every((e=>e<=0))){var F,O;const e=((null==(F=i.flip)?void 0:F.index)||0)+1,t=x[e];if(t)return{data:{index:e,overflows:S},reset:{placement:t}};let n=null==(O=S.filter((e=>e.overflows[0]<=0)).sort(((e,t)=>e.overflows[1]-t.overflows[1]))[0])?void 0:O.placement;if(!n)switch(h){case"bestFit":{var E;const e=null==(E=S.map((e=>[e.placement,e.overflows.filter((e=>e>0)).reduce(((e,t)=>e+t),0)])).sort(((e,t)=>e[1]-t[1]))[0])?void 0:E[0];e&&(n=e);break}case"initialPlacement":n=s}if(o!==n)return{reset:{placement:n}}}return{}}}},qr=function(e){return void 0===e&&(e={}),{name:"size",options:e,async fn(t){const{placement:n,rects:r,platform:o,elements:i}=t,{apply:a=(()=>{}),...s}=pr(e,t),l=await Fr(t,s),c=mr(n),u=gr(n),d="y"===br(n),{width:f,height:h}=r.floating;let p,m;"top"===c||"bottom"===c?(p=c,m=u===(await(null==o.isRTL?void 0:o.isRTL(i.floating))?"start":"end")?"left":"right"):(m=c,p="end"===u?"top":"bottom");const g=h-l.top-l.bottom,y=f-l.left-l.right,v=ar(h-l[p],g),b=ar(f-l[m],y),w=!t.middlewareData.shift;let x=v,D=b;if(d?D=u||w?ar(b,y):y:x=u||w?ar(v,g):g,w&&!u){const e=sr(l.left,0),t=sr(l.right,0),n=sr(l.top,0),r=sr(l.bottom,0);d?D=f-2*(0!==e||0!==t?e+t:sr(l.left,l.right)):x=h-2*(0!==n||0!==r?n+r:sr(l.top,l.bottom))}await a({...t,availableWidth:D,availableHeight:x});const $=await o.getDimensions(i.floating);return f!==$.width||h!==$.height?{reset:{rects:!0}}:{}}}},Ur=function(e){return void 0===e&&(e={}),{options:e,fn(t){const{x:n,y:r,placement:o,rects:i,middlewareData:a}=t,{offset:s=0,mainAxis:l=!0,crossAxis:c=!0}=pr(e,t),u={x:n,y:r},d=br(o),f=yr(d);let h=u[f],p=u[d];const m=pr(s,t),g="number"==typeof m?{mainAxis:m,crossAxis:0}:{mainAxis:0,crossAxis:0,...m};if(l){const e="y"===f?"height":"width",t=i.reference[f]-i.floating[e]+g.mainAxis,n=i.reference[f]+i.reference[e]-g.mainAxis;h<t?h=t:h>n&&(h=n)}if(c){var y,v;const e="y"===f?"width":"height",t=["top","left"].includes(mr(o)),n=i.reference[d]-i.floating[e]+(t&&(null==(y=a.offset)?void 0:y[d])||0)+(t?0:g.crossAxis),r=i.reference[d]+i.reference[e]+(t?0:(null==(v=a.offset)?void 0:v[d])||0)-(t?g.crossAxis:0);p<n?p=n:p>r&&(p=r)}return{[f]:h,[d]:p}}}},Zr=(e,t,n)=>{const r=new Map,o={platform:Nr,...n},i={...o.platform,_c:r};return(async(e,t,n)=>{const{placement:r="bottom",strategy:o="absolute",middleware:i=[],platform:a}=n,s=i.filter(Boolean),l=await(null==a.isRTL?void 0:a.isRTL(t));let c=await a.getElementRects({reference:e,floating:t,strategy:o}),{x:u,y:d}=Sr(c,r,l),f=r,h={},p=0;for(let n=0;n<s.length;n++){const{name:i,fn:m}=s[n],{x:g,y:y,data:v,reset:b}=await m({x:u,y:d,initialPlacement:r,placement:f,strategy:o,middlewareData:h,rects:c,platform:a,elements:{reference:e,floating:t}});u=null!=g?g:u,d=null!=y?y:d,h={...h,[i]:{...h[i],...v}},b&&p<=50&&(p++,"object"==typeof b&&(b.placement&&(f=b.placement),b.rects&&(c=!0===b.rects?await a.getElementRects({reference:e,floating:t,strategy:o}):b.rects),({x:u,y:d}=Sr(c,f,l))),n=-1)}return{x:u,y:d,placement:f,strategy:o,middlewareData:h}})(e,t,{...o,platform:i})};var Kr="undefined"!=typeof document?i:a;function Xr(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if("function"==typeof e&&e.toString()===t.toString())return!0;let n,r,o;if(e&&t&&"object"==typeof e){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(r=n;0!=r--;)if(!Xr(e[r],t[r]))return!1;return!0}if(o=Object.keys(e),n=o.length,n!==Object.keys(t).length)return!1;for(r=n;0!=r--;)if(!{}.hasOwnProperty.call(t,o[r]))return!1;for(r=n;0!=r--;){const n=o[r];if(("_owner"!==n||!e.$$typeof)&&!Xr(e[n],t[n]))return!1}return!0}return e!=e&&t!=t}function Qr(e){if("undefined"==typeof window)return 1;return(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Gr(e,t){const n=Qr(e);return Math.round(t*n)/n}function Jr(e){const t=r.useRef(e);return Kr((()=>{t.current=e})),t}const eo=(e,t)=>({...Wr(e),options:[e,t]}),to=(e,t)=>({...Ur(e),options:[e,t]}),no=(e,t)=>({...Vr(e),options:[e,t]}),ro=(e,t)=>({...qr(e),options:[e,t]})
/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/;var oo=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"].join(","),io="undefined"==typeof Element,ao=io?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,so=!io&&Element.prototype.getRootNode?function(e){var t;return null==e||null===(t=e.getRootNode)||void 0===t?void 0:t.call(e)}:function(e){return null==e?void 0:e.ownerDocument},lo=function e(t,n){var r;void 0===n&&(n=!0);var o=null==t||null===(r=t.getAttribute)||void 0===r?void 0:r.call(t,"inert");return""===o||"true"===o||n&&t&&e(t.parentNode)},co=function e(t,n,r){for(var o=[],i=Array.from(t);i.length;){var a=i.shift();if(!lo(a,!1))if("SLOT"===a.tagName){var s=a.assignedElements(),l=e(s.length?s:a.children,!0,r);r.flatten?o.push.apply(o,l):o.push({scopeParent:a,candidates:l})}else{ao.call(a,oo)&&r.filter(a)&&(n||!t.includes(a))&&o.push(a);var c=a.shadowRoot||"function"==typeof r.getShadowRoot&&r.getShadowRoot(a),u=!lo(c,!1)&&(!r.shadowRootFilter||r.shadowRootFilter(a));if(c&&u){var d=e(!0===c?a.children:c.children,!0,r);r.flatten?o.push.apply(o,d):o.push({scopeParent:a,candidates:d})}else i.unshift.apply(i,a.children)}}return o},uo=function(e){return!isNaN(parseInt(e.getAttribute("tabindex"),10))},fo=function(e){if(!e)throw new Error("No node provided");return e.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||function(e){var t,n=null==e||null===(t=e.getAttribute)||void 0===t?void 0:t.call(e,"contenteditable");return""===n||"true"===n}(e))&&!uo(e)?0:e.tabIndex},ho=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},po=function(e){return"INPUT"===e.tagName},mo=function(e){return function(e){return po(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t,n=e.form||so(e),r=function(e){return n.querySelectorAll('input[type="radio"][name="'+e+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)t=r(window.CSS.escape(e.name));else try{t=r(e.name)}catch(e){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",e.message),!1}var o=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]}(t,e.form);return!o||o===e}(e)},go=function(e){var t=e.getBoundingClientRect(),n=t.width,r=t.height;return 0===n&&0===r},yo=function(e,t){var n=t.displayCheck,r=t.getShadowRoot;if("hidden"===getComputedStyle(e).visibility)return!0;var o=ao.call(e,"details>summary:first-of-type")?e.parentElement:e;if(ao.call(o,"details:not([open]) *"))return!0;if(n&&"full"!==n&&"legacy-full"!==n){if("non-zero-area"===n)return go(e)}else{if("function"==typeof r){for(var i=e;e;){var a=e.parentElement,s=so(e);if(a&&!a.shadowRoot&&!0===r(a))return go(e);e=e.assignedSlot?e.assignedSlot:a||s===e.ownerDocument?a:s.host}e=i}if(function(e){var t,n,r,o,i=e&&so(e),a=null===(t=i)||void 0===t?void 0:t.host,s=!1;if(i&&i!==e)for(s=!!(null!==(n=a)&&void 0!==n&&null!==(r=n.ownerDocument)&&void 0!==r&&r.contains(a)||null!=e&&null!==(o=e.ownerDocument)&&void 0!==o&&o.contains(e));!s&&a;){var l,c,u;s=!(null===(c=a=null===(l=i=so(a))||void 0===l?void 0:l.host)||void 0===c||null===(u=c.ownerDocument)||void 0===u||!u.contains(a))}return s}(e))return!e.getClientRects().length;if("legacy-full"!==n)return!0}return!1},vo=function(e,t){return!(t.disabled||lo(t)||function(e){return po(e)&&"hidden"===e.type}(t)||yo(t,e)||function(e){return"DETAILS"===e.tagName&&Array.prototype.slice.apply(e.children).some((function(e){return"SUMMARY"===e.tagName}))}(t)||function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if("FIELDSET"===t.tagName&&t.disabled){for(var n=0;n<t.children.length;n++){var r=t.children.item(n);if("LEGEND"===r.tagName)return!!ao.call(t,"fieldset[disabled] *")||!r.contains(e)}return!0}t=t.parentElement}return!1}(t))},bo=function(e,t){return!(mo(t)||fo(t)<0||!vo(e,t))},wo=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return!!(isNaN(t)||t>=0)},xo=function e(t){var n=[],r=[];return t.forEach((function(t,o){var i=!!t.scopeParent,a=i?t.scopeParent:t,s=function(e,t){var n=fo(e);return n<0&&t&&!uo(e)?0:n}(a,i),l=i?e(t.candidates):a;0===s?i?n.push.apply(n,l):n.push(a):r.push({documentOrder:o,tabIndex:s,item:t,isScope:i,content:l})})),r.sort(ho).reduce((function(e,t){return t.isScope?e.push.apply(e,t.content):e.push(t.content),e}),[]).concat(n)},Do=function(e,t){var n;return n=(t=t||{}).getShadowRoot?co([e],t.includeContainer,{filter:bo.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:wo}):function(e,t,n){if(lo(e))return[];var r=Array.prototype.slice.apply(e.querySelectorAll(oo));return t&&ao.call(e,oo)&&r.unshift(e),r.filter(n)}(e,t.includeContainer,bo.bind(null,t)),xo(n)},$o=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return!1!==ao.call(e,oo)&&bo(t,e)};const So={...r},Fo=So.useInsertionEffect||(e=>e());function Oo(e){const t=r.useRef((()=>{if("production"!==process.env.NODE_ENV)throw new Error("Cannot call an event handler while rendering.")}));return Fo((()=>{t.current=e})),r.useCallback((function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return null==t.current?void 0:t.current(...n)}),[])}let Eo=0;function Bo(e,t){void 0===t&&(t={});const{preventScroll:n=!1,cancelPrevious:r=!0,sync:o=!1}=t;r&&cancelAnimationFrame(Eo);const i=()=>null==e?void 0:e.focus({preventScroll:n});o?i():Eo=requestAnimationFrame(i)}var ko="undefined"!=typeof document?i:a;function Ro(){return Ro=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ro.apply(this,arguments)}let Ao=!1,jo=0;const Mo=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+jo++;const Co=So.useId||function(){const[e,t]=r.useState((()=>Ao?Mo():void 0));return ko((()=>{null==e&&t(Mo())}),[]),r.useEffect((()=>{Ao=!0}),[]),e};let To;"production"!==process.env.NODE_ENV&&(To=new Set);const Ho=r.createContext(null),Lo=r.createContext(null),Po=()=>{var e;return(null==(e=r.useContext(Ho))?void 0:e.id)||null},_o=()=>r.useContext(Lo);function Io(e){return"data-floating-ui-"+e}function No(e){const t=s(e);return ko((()=>{t.current=e})),t}function Yo(e,t){let n=e.filter((e=>{var n;return e.parentId===t&&(null==(n=e.context)?void 0:n.open)})),r=n;for(;r.length;)r=e.filter((e=>{var t;return null==(t=r)?void 0:t.some((t=>{var n;return e.parentId===t.id&&(null==(n=e.context)?void 0:n.open)}))})),n=n.concat(r);return n}let zo=new WeakMap,Wo=new WeakSet,Vo={},qo=0;const Uo=e=>e&&(e.host||Uo(e.parentNode)),Zo=(e,t)=>t.map((t=>{if(e.contains(t))return t;const n=Uo(t);return e.contains(n)?n:null})).filter((e=>null!=e));function Ko(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);const r=er(e[0]).body;return function(e,t,n,r){const o="data-floating-ui-inert",i=r?"inert":n?"aria-hidden":null,a=Zo(t,e),s=new Set,l=new Set(a),c=[];Vo[o]||(Vo[o]=new WeakMap);const u=Vo[o];return a.forEach((function e(t){t&&!s.has(t)&&(s.add(t),t.parentNode&&e(t.parentNode))})),function e(t){t&&!l.has(t)&&[].forEach.call(t.children,(t=>{if("script"!==An(t))if(s.has(t))e(t);else{const e=i?t.getAttribute(i):null,n=null!==e&&"false"!==e,r=(zo.get(t)||0)+1,a=(u.get(t)||0)+1;zo.set(t,r),u.set(t,a),c.push(t),1===r&&n&&Wo.add(t),1===a&&t.setAttribute(o,""),!n&&i&&t.setAttribute(i,"true")}}))}(t),s.clear(),qo++,()=>{c.forEach((e=>{const t=(zo.get(e)||0)-1,n=(u.get(e)||0)-1;zo.set(e,t),u.set(e,n),t||(!Wo.has(e)&&i&&e.removeAttribute(i),Wo.delete(e)),n||e.removeAttribute(o)})),qo--,qo||(zo=new WeakMap,zo=new WeakMap,Wo=new WeakSet,Vo={})}}(e.concat(Array.from(r.querySelectorAll("[aria-live]"))),r,t,n)}const Xo=()=>({getShadowRoot:!0,displayCheck:"function"==typeof ResizeObserver&&ResizeObserver.toString().includes("[native code]")?"full":"none"});function Qo(e,t){const n=Do(e,Xo());"prev"===t&&n.reverse();const r=n.indexOf(Zn(er(e)));return n.slice(r+1)[0]}function Go(){return Qo(document.body,"next")}function Jo(){return Qo(document.body,"prev")}function ei(e,t){const n=t||e.currentTarget,r=e.relatedTarget;return!r||!Kn(n,r)}function ti(e){Do(e,Xo()).forEach((e=>{e.dataset.tabindex=e.getAttribute("tabindex")||"",e.setAttribute("tabindex","-1")}))}function ni(e){e.querySelectorAll("[data-tabindex]").forEach((e=>{const t=e.dataset.tabindex;delete e.dataset.tabindex,t?e.setAttribute("tabindex",t):e.removeAttribute("tabindex")}))}const ri={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"fixed",whiteSpace:"nowrap",width:"1px",top:0,left:0};function oi(e){"Tab"===e.key&&(e.target,clearTimeout(undefined))}const ii=r.forwardRef((function(e,t){const[n,o]=r.useState();ko((()=>(/apple/i.test(navigator.vendor)&&o("button"),document.addEventListener("keydown",oi),()=>{document.removeEventListener("keydown",oi)})),[]);const i={ref:t,tabIndex:0,role:n,"aria-hidden":!n||void 0,[Io("focus-guard")]:"",style:ri};return r.createElement("span",Ro({},e,i))})),ai=r.createContext(null),si=Io("portal");function li(e){const{children:t,id:n,root:o=null,preserveTabOrder:i=!0}=e,a=function(e){void 0===e&&(e={});const{id:t,root:n}=e,o=Co(),i=ci(),[a,s]=r.useState(null),l=r.useRef(null);return ko((()=>()=>{null==a||a.remove(),queueMicrotask((()=>{l.current=null}))}),[a]),ko((()=>{if(!o)return;if(l.current)return;const e=t?document.getElementById(t):null;if(!e)return;const n=document.createElement("div");n.id=o,n.setAttribute(si,""),e.appendChild(n),l.current=n,s(n)}),[t,o]),ko((()=>{if(!o)return;if(l.current)return;let e=n||(null==i?void 0:i.portalNode);e&&!Tn(e)&&(e=e.current),e=e||document.body;let r=null;t&&(r=document.createElement("div"),r.id=t,e.appendChild(r));const a=document.createElement("div");a.id=o,a.setAttribute(si,""),e=r||e,e.appendChild(a),l.current=a,s(a)}),[t,n,o,i]),a}({id:n,root:o}),[s,l]=r.useState(null),c=r.useRef(null),u=r.useRef(null),d=r.useRef(null),f=r.useRef(null),h=!!s&&!s.modal&&s.open&&i&&!(!o&&!a);return r.useEffect((()=>{if(a&&i&&(null==s||!s.modal))return a.addEventListener("focusin",e,!0),a.addEventListener("focusout",e,!0),()=>{a.removeEventListener("focusin",e,!0),a.removeEventListener("focusout",e,!0)};function e(e){if(a&&ei(e)){("focusin"===e.type?ni:ti)(a)}}}),[a,i,null==s?void 0:s.modal]),r.createElement(ai.Provider,{value:r.useMemo((()=>({preserveTabOrder:i,beforeOutsideRef:c,afterOutsideRef:u,beforeInsideRef:d,afterInsideRef:f,portalNode:a,setFocusManagerState:l})),[i,a])},h&&a&&r.createElement(ii,{"data-type":"outside",ref:c,onFocus:e=>{if(ei(e,a)){var t;null==(t=d.current)||t.focus()}else{const e=Jo()||(null==s?void 0:s.refs.domReference.current);null==e||e.focus()}}}),h&&a&&r.createElement("span",{"aria-owns":a.id,style:ri}),a&&$(t,a),h&&a&&r.createElement(ii,{"data-type":"outside",ref:u,onFocus:e=>{if(ei(e,a)){var t;null==(t=f.current)||t.focus()}else{const t=Go()||(null==s?void 0:s.refs.domReference.current);null==t||t.focus(),(null==s?void 0:s.closeOnFocusOut)&&(null==s||s.onOpenChange(!1,e.nativeEvent))}}}))}const ci=()=>r.useContext(ai),ui=20;let di=[];function fi(e){di=di.filter((e=>e.isConnected));let t=e;if(t&&"body"!==An(t)){if(!$o(t,Xo())){const e=Do(t,Xo())[0];e&&(t=e)}di.push(t),di.length>ui&&(di=di.slice(-ui))}}function hi(){return di.slice().reverse().find((e=>e.isConnected))}const pi=r.forwardRef((function(e,t){return r.createElement("button",Ro({},e,{type:"button",ref:t,tabIndex:-1,style:ri}))}));function mi(e){const{context:t,children:n,disabled:o=!1,order:i=["content"],guards:a=!0,initialFocus:s=0,returnFocus:l=!0,modal:c=!0,visuallyHiddenDismiss:u=!1,closeOnFocusOut:d=!0}=e,{open:f,refs:h,nodeId:p,onOpenChange:m,events:g,dataRef:y,elements:{domReference:v,floating:b}}=t,w="number"==typeof s&&s<0,x=!!(D=v)&&"combobox"===D.getAttribute("role")&&or(D)&&w;var D;const $="undefined"==typeof HTMLElement||!("inert"in HTMLElement.prototype)||a,S=No(i),F=No(s),O=No(l),E=_o(),B=ci(),k=r.useRef(null),R=r.useRef(null),A=r.useRef(!1),j=r.useRef(!1),M=null!=B,C=r.useCallback((function(e){return void 0===e&&(e=b),e?Do(e,Xo()):[]}),[b]),T=r.useCallback((e=>{const t=C(e);return S.current.map((e=>v&&"reference"===e?v:b&&"floating"===e?b:t)).filter(Boolean).flat()}),[v,b,S,C]);function H(e){return!o&&u&&c?r.createElement(pi,{ref:"start"===e?k:R,onClick:e=>m(!1,e.nativeEvent)},"string"==typeof u?u:"Dismiss"):null}r.useEffect((()=>{if(o||!c)return;function e(e){if("Tab"===e.key){Kn(b,Zn(er(b)))&&0===C().length&&!x&&ir(e);const t=T(),n=nr(e);"reference"===S.current[0]&&n===v&&(ir(e),e.shiftKey?Bo(t[t.length-1]):Bo(t[1])),"floating"===S.current[1]&&n===b&&e.shiftKey&&(ir(e),Bo(t[0]))}}const t=er(b);return t.addEventListener("keydown",e),()=>{t.removeEventListener("keydown",e)}}),[o,v,b,c,S,x,C,T]),r.useEffect((()=>{if(!o&&d)return b&&Hn(v)?(v.addEventListener("focusout",t),v.addEventListener("pointerdown",e),!c&&b.addEventListener("focusout",t),()=>{v.removeEventListener("focusout",t),v.removeEventListener("pointerdown",e),!c&&b.removeEventListener("focusout",t)}):void 0;function e(){j.current=!0,setTimeout((()=>{j.current=!1}))}function t(e){const t=e.relatedTarget;queueMicrotask((()=>{const n=!(Kn(v,t)||Kn(b,t)||Kn(t,b)||Kn(null==B?void 0:B.portalNode,t)||null!=t&&t.hasAttribute(Io("focus-guard"))||E&&(Yo(E.nodesRef.current,p).find((e=>{var n,r;return Kn(null==(n=e.context)?void 0:n.elements.floating,t)||Kn(null==(r=e.context)?void 0:r.elements.domReference,t)}))||function(e,t){var n;let r=[],o=null==(n=e.find((e=>e.id===t)))?void 0:n.parentId;for(;o;){const t=e.find((e=>e.id===o));o=null==t?void 0:t.parentId,t&&(r=r.concat(t))}return r}(E.nodesRef.current,p).find((e=>{var n,r;return(null==(n=e.context)?void 0:n.elements.floating)===t||(null==(r=e.context)?void 0:r.elements.domReference)===t}))));t&&n&&!j.current&&t!==hi()&&(A.current=!0,m(!1,e))}))}}),[o,v,b,c,p,E,B,m,d]),r.useEffect((()=>{var e;if(o)return;const t=Array.from((null==B||null==(e=B.portalNode)?void 0:e.querySelectorAll("["+Io("portal")+"]"))||[]);if(b){const e=[b,...t,k.current,R.current,S.current.includes("reference")||x?v:null].filter((e=>null!=e)),n=c||x?Ko(e,$,!$):Ko(e);return()=>{n()}}}),[o,v,b,c,S,B,x,$]),ko((()=>{if(o||!b)return;const e=Zn(er(b));queueMicrotask((()=>{const t=T(b),n=F.current,r=("number"==typeof n?t[n]:n.current)||b,o=Kn(b,e);w||o||!f||Bo(r,{preventScroll:r===b})}))}),[o,f,b,w,T,F]),ko((()=>{if(o||!b)return;let e=!1;const t=er(b),n=Zn(t);let r=y.current.openEvent;function i(t){let{open:n,reason:o,event:i,nested:a}=t;n&&(r=i),"escape-key"===o&&h.domReference.current&&fi(h.domReference.current),"hover"===o&&"mouseleave"===i.type&&(A.current=!0),"outside-press"===o&&(a?(A.current=!1,e=!0):A.current=!(function(e){return!(0!==e.mozInputSource||!e.isTrusted)||(Gn()&&e.pointerType?"click"===e.type&&1===e.buttons:0===e.detail&&!e.pointerType)}(i)||Qn(i)))}return fi(n),g.on("openchange",i),()=>{g.off("openchange",i);const n=Zn(t),o=Kn(b,n)||E&&Yo(E.nodesRef.current,p).some((e=>{var t;return Kn(null==(t=e.context)?void 0:t.elements.floating,n)}));(o||r&&["click","mousedown"].includes(r.type))&&h.domReference.current&&fi(h.domReference.current);const a=hi();O.current&&!A.current&&Hn(a)&&(a===n||n===t.body||o)&&Bo(a,{cancelPrevious:!1,preventScroll:e})}}),[o,b,O,y,h,g,E,p]),ko((()=>{if(!o&&B)return B.setFocusManagerState({modal:c,closeOnFocusOut:d,open:f,onOpenChange:m,refs:h}),()=>{B.setFocusManagerState(null)}}),[o,B,c,f,m,h,d]),ko((()=>{if(o||!b||"function"!=typeof MutationObserver||w)return;const e=()=>{const e=b.getAttribute("tabindex");S.current.includes("floating")||Zn(er(b))!==h.domReference.current&&0===C().length?"0"!==e&&b.setAttribute("tabindex","0"):"-1"!==e&&b.setAttribute("tabindex","-1")};e();const t=new MutationObserver(e);return t.observe(b,{childList:!0,subtree:!0,attributes:!0}),()=>{t.disconnect()}}),[o,b,h,S,C,w]);const L=!o&&$&&(M||c);return r.createElement(r.Fragment,null,L&&r.createElement(ii,{"data-type":"inside",ref:null==B?void 0:B.beforeInsideRef,onFocus:e=>{if(c){const e=T();Bo("reference"===i[0]?e[0]:e[e.length-1])}else if(null!=B&&B.preserveTabOrder&&B.portalNode)if(A.current=!1,ei(e,B.portalNode)){const e=Go()||v;null==e||e.focus()}else{var t;null==(t=B.beforeOutsideRef.current)||t.focus()}}}),!x&&H("start"),n,H("end"),L&&r.createElement(ii,{"data-type":"inside",ref:null==B?void 0:B.afterInsideRef,onFocus:e=>{if(c)Bo(T()[0]);else if(null!=B&&B.preserveTabOrder&&B.portalNode)if(d&&(A.current=!0),ei(e,B.portalNode)){const e=Jo()||v;null==e||e.focus()}else{var t;null==(t=B.afterOutsideRef.current)||t.focus()}}}))}function gi(e){return Hn(e.target)&&"BUTTON"===e.target.tagName}function yi(e){return or(e)}const vi={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},bi={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},wi=e=>{var t,n;return{escapeKey:"boolean"==typeof e?e:null!=(t=null==e?void 0:e.escapeKey)&&t,outsidePress:"boolean"==typeof e?e:null==(n=null==e?void 0:e.outsidePress)||n}};function xi(e){const{open:t=!1,onOpenChange:n,elements:o}=e,i=Co(),a=r.useRef({}),[s]=r.useState((()=>function(){const e=new Map;return{emit(t,n){var r;null==(r=e.get(t))||r.forEach((e=>e(n)))},on(t,n){e.set(t,[...e.get(t)||[],n])},off(t,n){var r;e.set(t,(null==(r=e.get(t))?void 0:r.filter((e=>e!==n)))||[])}}}())),l=null!=Po();if("production"!==process.env.NODE_ENV){const e=o.reference;e&&!Tn(e)&&function(){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];const o="Floating UI: "+n.join(" ");var i;null!=(e=To)&&e.has(o)||(null==(i=To)||i.add(o),console.error(o))}("Cannot pass a virtual element to the `elements.reference` option,","as it must be a real DOM element. Use `refs.setPositionReference()`","instead.")}const[c,u]=r.useState(o.reference),d=Oo(((e,t,r)=>{a.current.openEvent=e?t:void 0,s.emit("openchange",{open:e,event:t,reason:r,nested:l}),null==n||n(e,t,r)})),f=r.useMemo((()=>({setPositionReference:u})),[]),h=r.useMemo((()=>({reference:c||o.reference||null,floating:o.floating||null,domReference:o.reference})),[c,o.reference,o.floating]);return r.useMemo((()=>({dataRef:a,open:t,onOpenChange:d,elements:h,events:s,floatingId:i,refs:f})),[t,d,h,s,i,f])}function Di(e){void 0===e&&(e={});const{nodeId:t}=e,n=xi({...e,elements:{reference:null,floating:null,...e.elements}}),o=e.rootContext||n,i=o.elements,[a,s]=r.useState(null),[l,c]=r.useState(null),u=(null==i?void 0:i.reference)||a,d=r.useRef(null),f=_o();ko((()=>{u&&(d.current=u)}),[u]);const h=function(e){void 0===e&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:o=[],platform:i,elements:{reference:a,floating:s}={},transform:l=!0,whileElementsMounted:c,open:u}=e,[d,f]=r.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[h,p]=r.useState(o);Xr(h,o)||p(o);const[m,g]=r.useState(null),[y,v]=r.useState(null),b=r.useCallback((e=>{e!==S.current&&(S.current=e,g(e))}),[]),w=r.useCallback((e=>{e!==F.current&&(F.current=e,v(e))}),[]),x=a||m,$=s||y,S=r.useRef(null),F=r.useRef(null),O=r.useRef(d),E=null!=c,B=Jr(c),k=Jr(i),R=r.useCallback((()=>{if(!S.current||!F.current)return;const e={placement:t,strategy:n,middleware:h};k.current&&(e.platform=k.current),Zr(S.current,F.current,e).then((e=>{const t={...e,isPositioned:!0};A.current&&!Xr(O.current,t)&&(O.current=t,D.flushSync((()=>{f(t)})))}))}),[h,t,n,k]);Kr((()=>{!1===u&&O.current.isPositioned&&(O.current.isPositioned=!1,f((e=>({...e,isPositioned:!1}))))}),[u]);const A=r.useRef(!1);Kr((()=>(A.current=!0,()=>{A.current=!1})),[]),Kr((()=>{if(x&&(S.current=x),$&&(F.current=$),x&&$){if(B.current)return B.current(x,$,R);R()}}),[x,$,R,B,E]);const j=r.useMemo((()=>({reference:S,floating:F,setReference:b,setFloating:w})),[b,w]),M=r.useMemo((()=>({reference:x,floating:$})),[x,$]),C=r.useMemo((()=>{const e={position:n,left:0,top:0};if(!M.floating)return e;const t=Gr(M.floating,d.x),r=Gr(M.floating,d.y);return l?{...e,transform:"translate("+t+"px, "+r+"px)",...Qr(M.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:t,top:r}}),[n,l,M.floating,d.x,d.y]);return r.useMemo((()=>({...d,update:R,refs:j,elements:M,floatingStyles:C})),[d,R,j,M,C])}({...e,elements:{...i,...l&&{reference:l}}}),p=r.useCallback((e=>{const t=Tn(e)?{getBoundingClientRect:()=>e.getBoundingClientRect(),contextElement:e}:e;c(t),h.refs.setReference(t)}),[h.refs]),m=r.useCallback((e=>{(Tn(e)||null===e)&&(d.current=e,s(e)),(Tn(h.refs.reference.current)||null===h.refs.reference.current||null!==e&&!Tn(e))&&h.refs.setReference(e)}),[h.refs]),g=r.useMemo((()=>({...h.refs,setReference:m,setPositionReference:p,domReference:d})),[h.refs,m,p]),y=r.useMemo((()=>({...h.elements,domReference:u})),[h.elements,u]),v=r.useMemo((()=>({...h,...o,refs:g,elements:y,nodeId:t})),[h,g,y,t,o]);return ko((()=>{o.dataRef.current.floatingContext=v;const e=null==f?void 0:f.nodesRef.current.find((e=>e.id===t));e&&(e.context=v)})),r.useMemo((()=>({...h,context:v,refs:g,elements:y})),[h,g,y,v])}const $i="active",Si="selected";function Fi(e,t,n){const r=new Map,o="item"===n;let i=e;if(o&&e){const{[$i]:t,[Si]:n,...r}=e;i=r}return{..."floating"===n&&{tabIndex:-1},...i,...t.map((t=>{const r=t?t[n]:null;return"function"==typeof r?e?r(e):null:r})).concat(e).reduce(((e,t)=>t?(Object.entries(t).forEach((t=>{let[n,i]=t;var a;o&&[$i,Si].includes(n)||(0===n.indexOf("on")?(r.has(n)||r.set(n,[]),"function"==typeof i&&(null==(a=r.get(n))||a.push(i),e[n]=function(){for(var e,t=arguments.length,o=new Array(t),i=0;i<t;i++)o[i]=arguments[i];return null==(e=r.get(n))?void 0:e.map((e=>e(...o))).find((e=>void 0!==e))})):e[n]=i)})),e):e),{})}}const Oi=e=>e.replace(/[A-Z]+(?![a-z])|[A-Z]/g,((e,t)=>(t?"-":"")+e.toLowerCase()));function Ei(e,t){return"function"==typeof e?e(t):e}function Bi(e,t){void 0===t&&(t={});const{open:n,elements:{floating:o}}=e,{duration:i=250}=t,a=("number"==typeof i?i:i.close)||0,[s,l]=r.useState("unmounted"),c=function(e,t){const[n,o]=r.useState(e);return e&&!n&&o(!0),r.useEffect((()=>{if(!e&&n){const e=setTimeout((()=>o(!1)),t);return()=>clearTimeout(e)}}),[e,n,t]),n}(n,a);return c||"close"!==s||l("unmounted"),ko((()=>{if(o){if(n){l("initial");const e=requestAnimationFrame((()=>{l("open")}));return()=>{cancelAnimationFrame(e)}}l("close")}}),[n,o]),{isMounted:c,status:s}}var ki=function(e,t){return ki=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},ki(e,t)};var Ri=function(){return Ri=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},Ri.apply(this,arguments)};var Ai="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var ji=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Mi="object"==typeof Ai&&Ai&&Ai.Object===Object&&Ai,Ci="object"==typeof self&&self&&self.Object===Object&&self,Ti=Mi||Ci||Function("return this")(),Hi=Ti,Li=function(){return Hi.Date.now()},Pi=/\s/;var _i=function(e){for(var t=e.length;t--&&Pi.test(e.charAt(t)););return t},Ii=_i,Ni=/^\s+/;var Yi=function(e){return e?e.slice(0,Ii(e)+1).replace(Ni,""):e},zi=Ti.Symbol,Wi=zi,Vi=Object.prototype,qi=Vi.hasOwnProperty,Ui=Vi.toString,Zi=Wi?Wi.toStringTag:void 0;var Ki=function(e){var t=qi.call(e,Zi),n=e[Zi];try{e[Zi]=void 0;var r=!0}catch(e){}var o=Ui.call(e);return r&&(t?e[Zi]=n:delete e[Zi]),o},Xi=Object.prototype.toString;var Qi=Ki,Gi=function(e){return Xi.call(e)},Ji=zi?zi.toStringTag:void 0;var ea=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Ji&&Ji in Object(e)?Qi(e):Gi(e)},ta=function(e){return null!=e&&"object"==typeof e};var na=Yi,ra=ji,oa=function(e){return"symbol"==typeof e||ta(e)&&"[object Symbol]"==ea(e)},ia=/^[-+]0x[0-9a-f]+$/i,aa=/^0b[01]+$/i,sa=/^0o[0-7]+$/i,la=parseInt;var ca=ji,ua=Li,da=function(e){if("number"==typeof e)return e;if(oa(e))return NaN;if(ra(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=ra(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=na(e);var n=aa.test(e);return n||sa.test(e)?la(e.slice(2),n?2:8):ia.test(e)?NaN:+e},fa=Math.max,ha=Math.min;var pa=function(e,t,n){var r,o,i,a,s,l,c=0,u=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function p(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=i}function m(){var e=ua();if(p(e))return g(e);s=setTimeout(m,function(e){var n=t-(e-l);return d?ha(n,i-(e-c)):n}(e))}function g(e){return s=void 0,f&&r?h(e):(r=o=void 0,a)}function y(){var e=ua(),n=p(e);if(r=arguments,o=this,l=e,n){if(void 0===s)return function(e){return c=e,s=setTimeout(m,t),u?h(e):a}(l);if(d)return clearTimeout(s),s=setTimeout(m,t),h(l)}return void 0===s&&(s=setTimeout(m,t)),a}return t=da(t)||0,ca(n)&&(u=!!n.leading,i=(d="maxWait"in n)?fa(da(n.maxWait)||0,t):i,f="trailing"in n?!!n.trailing:f),y.cancel=function(){void 0!==s&&clearTimeout(s),c=0,r=l=o=s=void 0},y.flush=function(){return void 0===s?a:g(ua())},y},ma=pa,ga=ji;var ya=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return ga(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),ma(e,t,{leading:r,maxWait:t,trailing:o})},va=function(e,t,n,r){switch(t){case"debounce":return pa(e,n,r);case"throttle":return ya(e,n,r);default:return e}},ba=function(e){return"function"==typeof e},wa=function(){return"undefined"==typeof window},xa=function(e){return e instanceof Element||e instanceof HTMLDocument},Da=function(e,t,n,r){return function(o){var i=o.width,a=o.height;t((function(t){return t.width===i&&t.height===a||t.width===i&&!r||t.height===a&&!n?t:(e&&ba(e)&&e(i,a),{width:i,height:a})}))}};!function(e){function t(t){var n=e.call(this,t)||this;n.cancelHandler=function(){n.resizeHandler&&n.resizeHandler.cancel&&(n.resizeHandler.cancel(),n.resizeHandler=null)},n.attachObserver=function(){var e=n.props,t=e.targetRef,r=e.observerOptions;if(!wa()){t&&t.current&&(n.targetRef.current=t.current);var o=n.getElement();o&&(n.observableElement&&n.observableElement===o||(n.observableElement=o,n.resizeObserver.observe(o,r)))}},n.getElement=function(){var e=n.props,t=e.querySelector,r=e.targetDomEl;if(wa())return null;if(t)return document.querySelector(t);if(r&&xa(r))return r;if(n.targetRef&&xa(n.targetRef.current))return n.targetRef.current;var o=S(n);if(!o)return null;switch(n.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return o;default:return o.parentElement}},n.createResizeHandler=function(e){var t=n.props,r=t.handleWidth,o=void 0===r||r,i=t.handleHeight,a=void 0===i||i,s=t.onResize;if(o||a){var l=Da(s,n.setState.bind(n),o,a);e.forEach((function(e){var t=e&&e.contentRect||{},r=t.width,o=t.height;!n.skipOnMount&&!wa()&&l({width:r,height:o}),n.skipOnMount=!1}))}},n.getRenderType=function(){var e=n.props,t=e.render,r=e.children;return ba(t)?"renderProp":ba(r)?"childFunction":c(r)?"child":Array.isArray(r)?"childArray":"parent"};var r=t.skipOnMount,o=t.refreshMode,i=t.refreshRate,a=void 0===i?1e3:i,s=t.refreshOptions;return n.state={width:void 0,height:void 0},n.skipOnMount=r,n.targetRef=u(),n.observableElement=null,wa()||(n.resizeHandler=va(n.createResizeHandler,o,a,s),n.resizeObserver=new window.ResizeObserver(n.resizeHandler)),n}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}ki(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){wa()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,n=t.render,o=t.children,i=t.nodeType,a=void 0===i?"div":i,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return n&&n(l);case"childFunction":return(e=o)(l);case"child":if((e=o).type&&"string"==typeof e.type){var c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(l,["targetRef"]);return d(e,c)}return d(e,l);case"childArray":return(e=o).map((function(e){return!!e&&d(e,l)}));default:return r.createElement(a,null)}}}(f);var $a=wa()?a:i;function Sa(e){void 0===e&&(e={});var t=e.skipOnMount,n=void 0!==t&&t,r=e.refreshMode,o=e.refreshRate,i=void 0===o?1e3:o,a=e.refreshOptions,c=e.handleWidth,u=void 0===c||c,d=e.handleHeight,f=void 0===d||d,h=e.targetRef,p=e.observerOptions,m=e.onResize,g=s(n),y=s(null),v=null!=h?h:y,b=s(),w=l({width:void 0,height:void 0}),x=w[0],D=w[1];return $a((function(){if(!wa()){var e=Da(m,D,u,f);b.current=va((function(t){(u||f)&&t.forEach((function(t){var n=t&&t.contentRect||{},r=n.width,o=n.height;!g.current&&!wa()&&e({width:r,height:o}),g.current=!1}))}),r,i,a);var t=new window.ResizeObserver(b.current);return v.current&&t.observe(v.current,p),function(){t.disconnect();var e=b.current;e&&e.cancel&&e.cancel()}}}),[r,i,a,u,f,m,p,v.current]),Ri({ref:v},x)}const Fa=v.div`
    display: flex;
    flex-direction: column;
`,Oa=e=>"right"===e?"bottom-end":"bottom-start",Ea=({enabled:o,isOpen:i,onOpen:a,onClose:l,onDismiss:c,renderElement:u,renderDropdown:d,zIndex:f=50,clickToToggle:h=!1,offset:p=0,alignment:m="left",fitAvailableHeight:g})=>{const y=s(null),v=s(null),{width:b}=Sa({targetRef:y,handleHeight:!1}),{refs:w,floatingStyles:x,context:D}=Di({open:i,onOpenChange:(e,t,n)=>{"escape-key"===n?null==c||c():e&&!i?null==a||a():!e&&i&&(null==l||l(n))},whileElementsMounted:Yr,placement:Oa(m),middleware:[($=p,{...zr($),options:[$,S]}),no(),eo({limiter:to()}),ro({apply({availableHeight:e}){v.current&&Object.assign(v.current.style,{maxHeight:g?`${e}px`:void 0,overflowY:g?"hidden":void 0})}})]});var $,S;const{isMounted:F,styles:O}=function(e,t){void 0===t&&(t={});const{initial:n={opacity:0},open:o,close:i,common:a,duration:s=250}=t,l=e.placement,c=l.split("-")[0],u=r.useMemo((()=>({side:c,placement:l})),[c,l]),d="number"==typeof s,f=(d?s:s.open)||0,h=(d?s:s.close)||0,[p,m]=r.useState((()=>({...Ei(a,u),...Ei(n,u)}))),{isMounted:g,status:y}=Bi(e,{duration:s}),v=No(n),b=No(o),w=No(i),x=No(a);return ko((()=>{const e=Ei(v.current,u),t=Ei(w.current,u),n=Ei(x.current,u),r=Ei(b.current,u)||Object.keys(e).reduce(((e,t)=>(e[t]="",e)),{});if("initial"===y&&m((t=>({transitionProperty:t.transitionProperty,...n,...e}))),"open"===y&&m({transitionProperty:Object.keys(r).map(Oi).join(","),transitionDuration:f+"ms",...n,...r}),"close"===y){const r=t||e;m({transitionProperty:Object.keys(r).map(Oi).join(","),transitionDuration:h+"ms",...n,...r})}}),[h,w,v,b,x,f,y,u]),{isMounted:g,styles:p}}(D,{initial:{opacity:0},open:{opacity:1},duration:300}),E=function(e,t){void 0===t&&(t={});const{open:n,onOpenChange:o,dataRef:i,elements:{domReference:a}}=e,{enabled:s=!0,event:l="click",toggle:c=!0,ignoreMouse:u=!1,keyboardHandlers:d=!0}=t,f=r.useRef(),h=r.useRef(!1);return r.useMemo((()=>s?{reference:{onPointerDown(e){f.current=e.pointerType},onMouseDown(e){0===e.button&&(Jn(f.current,!0)&&u||"click"!==l&&(!n||!c||i.current.openEvent&&"mousedown"!==i.current.openEvent.type?(e.preventDefault(),o(!0,e.nativeEvent,"click")):o(!1,e.nativeEvent,"click")))},onClick(e){"mousedown"===l&&f.current?f.current=void 0:Jn(f.current,!0)&&u||(!n||!c||i.current.openEvent&&"click"!==i.current.openEvent.type?o(!0,e.nativeEvent,"click"):o(!1,e.nativeEvent,"click"))},onKeyDown(e){f.current=void 0,e.defaultPrevented||!d||gi(e)||(" "!==e.key||yi(a)||(e.preventDefault(),h.current=!0),"Enter"===e.key&&o(!n||!c,e.nativeEvent,"click"))},onKeyUp(e){e.defaultPrevented||!d||gi(e)||yi(a)||" "===e.key&&h.current&&(h.current=!1,o(!n||!c,e.nativeEvent,"click"))}}}:{}),[s,i,l,u,d,a,c,n,o])}(D,{enabled:o,toggle:h}),B=function(e,t){void 0===t&&(t={});const{open:n,onOpenChange:o,elements:{reference:i,domReference:a,floating:s},dataRef:l}=e,{enabled:c=!0,escapeKey:u=!0,outsidePress:d=!0,outsidePressEvent:f="pointerdown",referencePress:h=!1,referencePressEvent:p="pointerdown",ancestorScroll:m=!1,bubbles:g,capture:y}=t,v=_o(),b=Oo("function"==typeof d?d:()=>!1),w="function"==typeof d?b:d,x=r.useRef(!1),D=r.useRef(!1),{escapeKey:$,outsidePress:S}=wi(g),{escapeKey:F,outsidePress:O}=wi(y),E=Oo((e=>{var t;if(!n||!c||!u||"Escape"!==e.key)return;const r=null==(t=l.current.floatingContext)?void 0:t.nodeId,i=v?Yo(v.nodesRef.current,r):[];if(!$&&(e.stopPropagation(),i.length>0)){let e=!0;if(i.forEach((t=>{var n;null==(n=t.context)||!n.open||t.context.dataRef.current.__escapeKeyBubbles||(e=!1)})),!e)return}o(!1,function(e){return"nativeEvent"in e}(e)?e.nativeEvent:e,"escape-key")})),B=Oo((e=>{var t;const n=()=>{var t;E(e),null==(t=nr(e))||t.removeEventListener("keydown",n)};null==(t=nr(e))||t.addEventListener("keydown",n)})),k=Oo((e=>{var t;const n=x.current;x.current=!1;const r=D.current;if(D.current=!1,"click"===f&&r)return;if(n)return;if("function"==typeof w&&!w(e))return;const i=nr(e),c="["+Io("inert")+"]",u=er(s).querySelectorAll(c);let d=Tn(i)?i:null;for(;d&&!Yn(d);){const e=Vn(d);if(Yn(e)||!Tn(e))break;d=e}if(u.length&&Tn(i)&&!i.matches("html,body")&&!Kn(i,s)&&Array.from(u).every((e=>!Kn(d,e))))return;if(Hn(i)&&s){const t=i.clientWidth>0&&i.scrollWidth>i.clientWidth,n=i.clientHeight>0&&i.scrollHeight>i.clientHeight;let r=n&&e.offsetX>i.clientWidth;if(n&&"rtl"===zn(i).direction&&(r=e.offsetX<=i.offsetWidth-i.clientWidth),r||t&&e.offsetY>i.clientHeight)return}const h=null==(t=l.current.floatingContext)?void 0:t.nodeId,p=v&&Yo(v.nodesRef.current,h).some((t=>{var n;return tr(e,null==(n=t.context)?void 0:n.elements.floating)}));if(tr(e,s)||tr(e,a)||p)return;const m=v?Yo(v.nodesRef.current,h):[];if(m.length>0){let e=!0;if(m.forEach((t=>{var n;null==(n=t.context)||!n.open||t.context.dataRef.current.__outsidePressBubbles||(e=!1)})),!e)return}o(!1,e,"outside-press")})),R=Oo((e=>{var t;const n=()=>{var t;k(e),null==(t=nr(e))||t.removeEventListener(f,n)};null==(t=nr(e))||t.addEventListener(f,n)}));return r.useEffect((()=>{if(!n||!c)return;function e(e){o(!1,e,"ancestor-scroll")}l.current.__escapeKeyBubbles=$,l.current.__outsidePressBubbles=S;const t=er(s);u&&t.addEventListener("keydown",F?B:E,F),w&&t.addEventListener(f,O?R:k,O);let r=[];return m&&(Tn(a)&&(r=Un(a)),Tn(s)&&(r=r.concat(Un(s))),!Tn(i)&&i&&i.contextElement&&(r=r.concat(Un(i.contextElement)))),r=r.filter((e=>{var n;return e!==(null==(n=t.defaultView)?void 0:n.visualViewport)})),r.forEach((t=>{t.addEventListener("scroll",e,{passive:!0})})),()=>{u&&t.removeEventListener("keydown",F?B:E,F),w&&t.removeEventListener(f,O?R:k,O),r.forEach((t=>{t.removeEventListener("scroll",e)}))}}),[l,s,a,i,u,w,f,n,o,m,c,$,S,E,F,B,k,O,R]),r.useEffect((()=>{x.current=!1}),[w,f]),r.useMemo((()=>c?{reference:{onKeyDown:E,[vi[p]]:e=>{h&&o(!1,e.nativeEvent,"reference-press")}},floating:{onKeyDown:E,onMouseDown(){D.current=!0},onMouseUp(){D.current=!0},[bi[f]]:()=>{x.current=!0}}}:{}),[c,h,f,p,o,E])}(D,{enabled:o}),{getReferenceProps:k,getFloatingProps:R}=function(e){void 0===e&&(e=[]);const t=e,n=r.useCallback((t=>Fi(t,e,"reference")),t),o=r.useCallback((t=>Fi(t,e,"floating")),t),i=r.useCallback((t=>Fi(t,e,"item")),e.map((e=>null==e?void 0:e.item)));return r.useMemo((()=>({getReferenceProps:n,getFloatingProps:o,getItemProps:i})),[n,o,i])}([E,B]);return e(n,{children:[t("div",Object.assign({ref:e=>{y.current=e,w.setReference(e)}},k(),{children:u()})),F&&t(li,{children:t(mi,Object.assign({context:D,modal:!1,initialFocus:v,returnFocus:!1},{children:t("div",Object.assign({ref:w.setFloating,style:Object.assign(Object.assign({},x),{zIndex:f})},R(),{children:t(Fa,Object.assign({ref:v,style:Object.assign({},O),inert:O.opacity<1?"":void 0},{children:d({elementWidth:b})}))}))}))})]})},Ba=v.div`
    width: ${e=>e.$width}px;
    max-width: 41rem;
    min-width: 21rem;

    ${P.mobileL} {
        min-width: 17.5rem;
    }
`;var ka={exports:{}};ka.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,o=/\d*[^-_:/,()\s\d]+/,i={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],c=function(e){var t=i[e];return t&&(t.indexOf?t:t.s.concat(t.f))},u=function(e,t){var n,r=i.meridiem;if(r){for(var o=1;o<=24;o+=1)if(e.indexOf(r(o,0,t))>-1){n=o>12;break}}else n=e===(t?"pm":"PM");return n},d={A:[o,function(e){this.afternoon=u(e,!1)}],a:[o,function(e){this.afternoon=u(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[r,s("seconds")],ss:[r,s("seconds")],m:[r,s("minutes")],mm:[r,s("minutes")],H:[r,s("hours")],h:[r,s("hours")],HH:[r,s("hours")],hh:[r,s("hours")],D:[r,s("day")],DD:[n,s("day")],Do:[o,function(e){var t=i.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],M:[r,s("month")],MM:[n,s("month")],MMM:[o,function(e){var t=c("months"),n=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[o,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[n,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function f(n){var r,o;r=n,o=i&&i.formats;for(var a=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var i=r&&r.toUpperCase();return n||o[r]||e[r]||o[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),s=a.length,l=0;l<s;l+=1){var c=a[l],u=d[c],f=u&&u[0],h=u&&u[1];a[l]=h?{regex:f,parser:h}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<s;n+=1){var o=a[n];if("string"==typeof o)r+=o.length;else{var i=o.regex,l=o.parser,c=e.slice(r),u=i.exec(c)[0];l.call(t,u),e=e.replace(u,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var r=t.prototype,o=r.parse;r.parse=function(e){var t=e.date,r=e.utc,a=e.args;this.$u=r;var s=a[1];if("string"==typeof s){var l=!0===a[2],c=!0===a[3],u=l||c,d=a[2];c&&(d=a[2]),i=this.$locale(),!l&&d&&(i=n.Ls[d]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=f(t)(e),o=r.year,i=r.month,a=r.day,s=r.hours,l=r.minutes,c=r.seconds,u=r.milliseconds,d=r.zone,h=new Date,p=a||(o||i?1:h.getDate()),m=o||h.getFullYear(),g=0;o&&!i||(g=i>0?i-1:h.getMonth());var y=s||0,v=l||0,b=c||0,w=u||0;return d?new Date(Date.UTC(m,g,p,y,v,b,w+60*d.offset*1e3)):n?new Date(Date.UTC(m,g,p,y,v,b,w)):new Date(m,g,p,y,v,b,w)}catch(e){return new Date("")}}(t,s,r),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(s)&&(this.$d=new Date("")),i={}}else if(s instanceof Array)for(var h=s.length,p=1;p<=h;p+=1){a[1]=s[p-1];var m=n.apply(this,a);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}p===h&&(this.$d=new Date(""))}else o.call(this,e)}}}();var Ra,Aa,ja=R(ka.exports),Ma={exports:{}},Ca=R(Ma.exports=(Ra={year:0,month:1,day:2,hour:3,minute:4,second:5},Aa={},function(e,t,n){var r,o=function(e,t,n){void 0===n&&(n={});var r=new Date(e),o=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,o=Aa[r];return o||(o=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),Aa[r]=o),o}(t,n);return o.formatToParts(r)},i=function(e,t){for(var r=o(e,t),i=[],a=0;a<r.length;a+=1){var s=r[a],l=s.type,c=s.value,u=Ra[l];u>=0&&(i[u]=parseInt(c,10))}var d=i[3],f=24===d?0:d,h=i[0]+"-"+i[1]+"-"+i[2]+" "+f+":"+i[4]+":"+i[5]+":000",p=+e;return(n.utc(h).valueOf()-(p-=p%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=r);var o=this.utcOffset(),i=this.toDate(),a=i.toLocaleString("en-US",{timeZone:e}),s=Math.round((i-new Date(a))/1e3/60),l=n(a,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-s,!0);if(t){var c=l.utcOffset();l=l.add(o-c,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=o(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var s=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,o){var a=o&&t,s=o||t||r,l=i(+n(),s);if("string"!=typeof e)return n(e).tz(s);var c=function(e,t,n){var r=e-60*t*1e3,o=i(r,n);if(t===o)return[r,t];var a=i(r-=60*(o-t)*1e3,n);return o===a?[r,o]:[e-60*Math.min(o,a)*1e3,Math.max(o,a)]}(n.utc(e,a).valueOf(),l,s),u=c[0],d=c[1],f=n(u).utcOffset(d);return f.$x.$timezone=s,f},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}})),Ta={exports:{}};Ta.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,o){var i=n(e),a=n(t),s="("===(o=o||"()")[0],l=")"===o[1];return(s?this.isAfter(i,r):!this.isBefore(i,r))&&(l?this.isBefore(a,r):!this.isAfter(a,r))||(s?this.isBefore(i,r):!this.isAfter(i,r))&&(l?this.isAfter(a,r):!this.isBefore(a,r))}};var Ha=R(Ta.exports),La={exports:{}};La.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var Pa=R(La.exports),_a={exports:{}};_a.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var Ia,Na=R(_a.exports);M.extend(Ha),M.extend(Pa),M.extend(Na),M.extend(ja),M.extend(Ca),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=M(t).startOf("week");return Ya(n).map((e=>za(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return za(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(M(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),o=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)o.push(r.add(e,"year"));return o},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+M(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=M(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,n,r,o)=>{const i=e.isWithinRange(t,r?M(r):void 0,o?M(o):void 0),a=n&&n.includes(t.format("YYYY-MM-DD"));return!i||!!a}}(Ia||(Ia={}));const Ya=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},za=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},Wa=[1,3,5,7,8,10,12],Va=[4,6,9,11];var qa,Ua,Za,Ka;!function(e){e.clampDay=(t,n,r)=>{const o=parseInt(t),i=parseInt(n),a=parseInt(r);return 0==o?"1":Wa.includes(i)?Math.min(o,31).toString():Va.includes(i)?Math.min(o,30).toString():2===i?e.isLeapYear(a)?Math.min(o,29).toString():Math.min(o,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=M(e,n);return M(t,n).diff(r,"minute")},e.toDayjs=e=>e?M(e):M(),e.addMinutesToTime=(e,t,n="HH:mm")=>M(e,n).add(t,"minutes").format(n)}(qa||(qa={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:n,minDate:r,maxDate:o}=t;return!!(n&&n.length&&n.includes(e))||(!(!r||!M(e).isBefore(r,"day"))||!(!o||!M(e).isAfter(o,"day")))},e.sanitizeInput=e=>{if(e){if(M(e).isValid())return e}return""}}(Ua||(Ua={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Za||(Za={})),function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,o=8)=>{let i=0;t>n&&(i=Math.floor((t-n)/o));const a=r+i;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,n,r=1.2)=>{const o=Math.floor(2*t/(.6*n))*(2/r);if(e.length<=o)return e;const i=Math.floor(.6*o),a=Math.floor(.2*o);return`${e.substring(0,i)}...${e.substring(e.length-a)}`},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width},e.maskValue=(e,n)=>{if(!e)return e;const{maskRange:r,unmaskRange:o,maskChar:i="•",maskRegex:a,maskTransformer:s}=n;if(s)return s(e);if(a)return e.replace(a,i);if(r){const{startIndex:n,endIndex:o}=t(r[0],r[1]);return e.substring(0,n)+i.repeat(e.substring(n,o+1).length)+e.substring(o+1)}if(o){const{startIndex:n,endIndex:r}=t(o[0],o[1]);return i.repeat(e.substring(0,n).length)+e.substring(n,r+1)+i.repeat(e.substring(r+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(Ka||(Ka={}));const Xa=e=>{const[t,n]=l(e),r=s(e);return[t,h((e=>{r.current=e,n(e)}),[]),r]},Qa=v.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`,Ga=w`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Ja=v.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||an.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${Ga} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,es=v(Ja)`
    animation-delay: -0.45s;
`,ts=v(Ja)`
    animation-delay: -0.3s;
`,ns=v(Ja)`
    animation-delay: -0.15s;
`,rs=v.button`
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
    ${e=>{switch(e.$buttonStyle){case"secondary":return b`
                    background-color: ${an.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?cn.Button.Danger.Border:an.Primary};

                    color: ${e.$buttonIsDanger?cn.Button.Danger.Primary:an.Primary};
                `;case"light":return b`
                    background-color: ${an.Neutral[8]};
                    border: 1px solid ${an.Neutral[5]};

                    color: ${e.$buttonIsDanger?cn.Button.Danger.Primary:an.Primary};
                `;case"disabled":return b`
                    background-color: ${an.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${an.Neutral[3]};
                `;case"link":return b`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?cn.Button.Danger.Primary:an.Primary};
                    :hover,
                    :active,
                    :focus {
                        color: ${e.$buttonIsDanger?cn.Button.Danger.Hover:an.Secondary};
                    }
                `;default:return b`
                    background-color: ${e.$buttonIsDanger?cn.Button.Danger.BackgroundColor:an.Primary};
                    border: 1px solid transparent;

                    ${P.mobileL} {
                        width: 100%;
                    }

                    color: ${an.Neutral[8]};
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?b`
                    height: 2.5rem;
                    ${vn("H5","semibold")}

                    ${P.mobileS} {
                        height: auto;
                    }
                `:b`
                    height: 3rem;
                    ${vn("H4","semibold")}

                    ${P.mobileS} {
                        height: auto;
                    }
                `}
`,os=v((({color:n,className:r,size:o=18})=>e(Qa,Object.assign({className:r,$size:o,$color:n},{children:[t(Ja,{id:"inner1",$size:o-2,$borderWidth:2,$color:n}),t(es,{id:"inner2",$size:o-2,$borderWidth:2,$color:n}),t(ts,{id:"inner3",$size:o-2,$borderWidth:2,$color:n}),t(ns,{id:"inner4",$size:o-2,$borderWidth:2,$color:n})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t=e.$buttonIsDanger?cn.Button.Danger.Primary:an.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=an.Neutral[3](e);break;default:t=an.Neutral[8](e)}return b`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,is={Default:o.forwardRef(((n,r)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:s="default",danger:l=!1}=n,c=B(n,["children","disabled","loading","styleType","danger"]),u={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:l};return e(rs,Object.assign({ref:r,"data-testid":c["data-testid"]||"button",disabled:i},u,c,{children:[a&&t(os,Object.assign({},u)),t("span",{children:o})]}))})),Small:o.forwardRef(((n,r)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:s="default",danger:l=!1}=n,c=B(n,["children","disabled","loading","styleType","danger"]),u={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:l};return e(rs,Object.assign({ref:r,"data-testid":c["data-testid"]||"button",disabled:i},u,c,{children:[a&&t(os,Object.assign({},u,{size:16})),t("span",{children:o})]}))}))},as=v.button`
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

        ${({$highlight:e})=>e&&b`
                background-color: ${an.Neutral[7]};
            `}
    }
`,ss=o.forwardRef(((e,n)=>{var{children:r,focusHighlight:o=!0,focusOutline:i="none",type:a="button"}=e,s=B(e,["children","focusHighlight","focusOutline","type"]);return t(as,Object.assign({ref:n,$outline:i,$highlight:o,type:a},s,{children:r}))})),ls=b`
    color: ${an.Neutral[3]};
    height: 1rem;
    width: 1rem;
`,cs=v(F)`
    ${ls}
`,us=v(O)`
    ${ls}
`,ds=v(y)`
    ${ls}
    transition: transform 250ms ease-in-out;
    margin-left: 0.5rem;
`,fs=v.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
`,hs=v.div`
    display: flex;
    flex: 1;
    position: relative;
`,ps=v.div`
    isolation: isolate;
    width: 100%;
`,ms=v.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${an.Neutral[8]};

    ${e=>{if(!e.$visible)return b`
                display: none;
            `}}
`,gs=v.div`
    display: flex;
    justify-content: space-between;
    margin: 0 0 0.5rem 0;
`,ys=v.div`
    display: flex;
`,vs=v.button`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;

    ${e=>!1===e.$visible?b`
                display: none;
            `:e.$expanded?b`
                ${ds} {
                    transform: rotate(180deg);
                }
            `:void 0}
`,bs=v.p`
    ${vn("H5","regular")}
`,ws=v.div`
    display: flex;
`,xs=v(ss)`
    margin: auto 0;
    padding: 0.75rem;

    :disabled {
        cursor: not-allowed;
    }
`,Ds=v.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;
`,$s=v(is.Small)`
    flex: 1;
`,Ss=v.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 2.5rem);
    align-content: center;
    justify-content: center;

    ${e=>{switch(e.$type){case"standalone":return b`
                    gap: 0.5rem 2.5rem;
                `;case"input":return b`
                    gap: 0.5rem 1rem;
                `}}}
`,Fs=v.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: default;
    border-radius: 5rem;
    margin: 0 0.5rem;

    ${e=>e.$interactive?b`
                cursor: pointer;
                &:hover {
                    box-shadow: 0px 0px 4px 1px ${an.Shadow.Accent};
                    border: 1px solid ${an.Accent.Light[1]};
                }
            `:e.$disabledDisplay?b`
                cursor: not-allowed;
            `:void 0}

    ${e=>{switch(e.$variant){case"current-month":return b`
                    background-color: ${an.Accent.Light[6](e)};
                `;case"selected-month":return b`
                    background-color: ${an.Accent.Light[5](e)};
                    border: 1px solid ${an.Primary(e)};
                `}}}
`,Os=v(wn.H5)`
    ${e=>{if(e.$disabledDisplay)return b`
                color: ${an.Neutral[4]};
            `;switch(e.$variant){case"current-month":return b`
                    color: ${an.Neutral[3](e)};
                `;case"selected-month":return b`
                    ${vn("H5","semibold")}
                    color: ${an.Primary(e)};
                `}}}
`,Es=({calendarDate:e,currentFocus:n,selectedStartDate:r,selectedEndDate:o,viewCalendarDate:i,type:a,isNewSelection:s,minDate:l,maxDate:c,allowDisabledSelection:u,onMonthSelect:d})=>{const f=p((()=>Ia.generateMonths(M(e))),[e]),h=e=>{const t="start"===n&&o&&e.isAfter(o,"month")&&s,i="end"===n&&r&&e.isBefore(r,"month")&&s;return t||i},m=e=>{const t=e.format("MMMM"),n=(r=e,!Ia.isWithinRange(r,l?M(l):void 0,c?M(c):void 0,"month"));var r;const o=i.isSame(e,"month")?"selected-month":M().isSame(e,"month")?"current-month":"default";return{disabledDisplay:n||h(e),interactive:!n||u,month:t,variant:o}};return f.length?t(Ss,Object.assign({$type:a},{children:f.map((e=>{const{disabledDisplay:n,interactive:r,variant:o,month:i}=m(e);return t(Fs,Object.assign({$variant:o,$disabledDisplay:n,$interactive:r,onClick:()=>((e,t)=>{t||d(e)})(e,!r)},{children:t(Os,Object.assign({weight:"regular",$variant:o,$disabledDisplay:n},{children:i}))}),i)}))})):null},Bs=v.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-content: center;
    grid-template-columns: repeat(3, 1fr);

    ${e=>{switch(e.$type){case"standalone":return b`
                    grid-template-rows: repeat(4, 4rem);
                    gap: 0.5rem 2.5rem;
                `;case"input":return b`
                    grid-template-rows: repeat(4, 4.375rem);
                    gap: 0.5rem 1rem;
                `}}}
`,ks=v.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: default;
    border-radius: 0.5rem;
    margin: 0 0.5rem;

    ${e=>e.$interactive?b`
                cursor: pointer;
                &:hover {
                    box-shadow: 0px 0px 4px 1px ${an.Shadow.Accent};
                    border: 1px solid ${an.Accent.Light[1]};
                }
            `:e.$disabledDisplay?b`
                cursor: not-allowed;
            `:void 0}

    ${e=>{switch(e.$variant){case"current-year":return b`
                    background: ${an.Accent.Light[6](e)};
                `;case"selected-year":return b`
                    background: ${an.Accent.Light[5](e)};
                    border: 1px solid ${an.Primary(e)};
                `}}};
`,Rs=v(wn.H5)`
    ${e=>{if(e.$disabledDisplay)return b`
                color: ${an.Neutral[4]};
            `;switch(e.$variant){case"current-year":return b`
                    color: ${an.Neutral[3](e)};
                `;case"selected-year":return b`
                    ${vn("H5","semibold")}
                    color: ${an.Primary(e)};
                `;case"other-decade":return b`
                    color: ${an.Neutral[4](e)};
                `}}}
`,As=({calendarDate:e,currentFocus:n,selectedStartDate:r,selectedEndDate:o,viewCalendarDate:i,type:a,isNewSelection:s,minDate:l,maxDate:c,allowDisabledSelection:u,onYearSelect:d})=>{const f=p((()=>Ia.generateDecadeOfYears(M(e))),[e]),h=e=>{const t="start"===n&&o&&e.isAfter(o,"year")&&s,i="end"===n&&r&&e.isBefore(r,"year")&&s;return t||i},m=e=>{const t=[0,11].includes(f.indexOf(e)),n=e.year(),r=(o=e,!Ia.isWithinRange(o,l?M(l):void 0,c?M(c):void 0,"year"));var o;const a=t?"other-decade":i.isSame(e,"year")?"selected-year":M().isSame(e,"year")?"current-year":"default";return{disabledDisplay:r||h(e),interactive:!r||u,year:n,variant:a}};return f.length?t(Bs,Object.assign({$type:a},{children:f.map((e=>{const{disabledDisplay:n,interactive:r,variant:o,year:i}=m(e);return t(ks,Object.assign({$variant:o,$disabledDisplay:n,$interactive:r,onClick:()=>((e,t)=>{t||d(e)})(e,!r)},{children:t(Rs,Object.assign({weight:"regular",$variant:o,$disabledDisplay:n,$interactive:r},{children:i}))}),i)}))})):null},js=o.forwardRef(((r,o)=>{var{children:i,initialCalendarDate:c,type:u,minDate:d,maxDate:f,currentFocus:h,selectedStartDate:p,selectedEndDate:g,selectWithinRange:y,dynamicHeight:v=!1,allowDisabledSelection:b,onCalendarDateChange:w,withButton:x,doneButtonDisabled:D,onDismiss:$,showNavigationHeader:S=!0,getLeftArrowDate:F,getRightArrowDate:O,isLeftArrowDisabled:E,isRightArrowDisabled:k,getMonthHeaderLabel:R,getYearHeaderLabel:A}=r,j=B(r,["children","initialCalendarDate","type","minDate","maxDate","currentFocus","selectedStartDate","selectedEndDate","selectWithinRange","dynamicHeight","allowDisabledSelection","onCalendarDateChange","withButton","doneButtonDisabled","onDismiss","showNavigationHeader","getLeftArrowDate","getRightArrowDate","isLeftArrowDisabled","isRightArrowDisabled","getMonthHeaderLabel","getYearHeaderLabel"]);const[C,T]=l(qa.toDayjs(c)),[H,L]=l(qa.toDayjs(c)),[P,_]=l("default"),I=s(null),N=s(null),Y=s();m(o,(()=>({defaultView(){_("default")},resetView(){const e=qa.toDayjs(c);T(e),L(e),_("default")},setCalendarDate(e){const t=qa.toDayjs(e);T(t),L(t)}}))),a((()=>{const e=qa.toDayjs(c);T(e),L(e)}),[c]),a((()=>{K(H)}),[H]);const z=()=>{"month-options"!==P?(_("month-options"),Y.current.focus()):(_("default"),T(H))},W=()=>{"default"!==P?(_("default"),T(H)):_("year-options")},V=()=>{Y.current.focus();const e=F?F(C):C.subtract(1,"month");switch(P){case"default":L(e),T(e);break;case"month-options":T((e=>e.subtract(1,"year")));break;case"year-options":T((e=>e.subtract(10,"year")))}},q=()=>{Y.current.focus();const e=O?O(C):C.add(1,"month");switch(P){case"default":L(e),T(e);break;case"month-options":T((e=>e.add(1,"year")));break;case"year-options":T((e=>e.add(10,"year")))}},U=e=>{T(e),L(e),x||_("default")},Z=()=>{const e=qa.toDayjs(c);T(e),L(e),"default"===P?X("reset"):_("default")},K=e=>{w&&w(e)},X=e=>{$&&$(e)},Q=()=>{if(!d||b)return!1;const e=M(d);return"month-options"===P?!Ia.isPreviousYearWithinRange(C,e):"year-options"===P?!Ia.isPreviousDecadeWithinRange(C,e):E?E(C):!Ia.isPreviousMonthWithinRange(C,e)},G=()=>{if(!f||b)return!1;const e=M(f);return"month-options"===P?!Ia.isNextYearWithinRange(C,e):"year-options"===P?!Ia.isNextDecadeWithinRange(C,e):k?k(C):!Ia.isNextMonthWithinRange(C,e)},J=()=>{if("year-options"===P){const{beginDecade:e,endDecade:t}=Ia.getStartEndDecade(C);return`${e} to ${t}`}return A?A(C):C.format("YYYY")},ee=()=>{const r=R?R(C):C.format("MMM");return e(n,{children:[e(vs,Object.assign({type:"button",tabIndex:-1,$expanded:"month-options"===P,$visible:"default"===P,id:"month-dropdown",onClick:z},{children:[t(bs,{children:r}),t(ds,{})]})),e(vs,Object.assign({type:"button",tabIndex:-1,$expanded:"default"!==P,id:"year-dropdown",onClick:W},{children:[t(bs,{children:J()}),t(ds,{})]}))]})},te=()=>{switch(P){case"month-options":return t(Es,{type:u,calendarDate:C,currentFocus:h,minDate:d,maxDate:f,selectedStartDate:p,selectedEndDate:g,viewCalendarDate:H,isNewSelection:y,onMonthSelect:U,allowDisabledSelection:b});case"year-options":return t(As,{type:u,calendarDate:C,currentFocus:h,minDate:d,maxDate:f,selectedStartDate:p,selectedEndDate:g,viewCalendarDate:H,isNewSelection:y,onYearSelect:U,allowDisabledSelection:b});default:return null}};return e(fs,Object.assign({ref:Y,"data-id":"calendar-container","data-testid":"calendar-container"},j,{children:[S&&e(gs,Object.assign({"data-id":"calendar-header","data-testid":"calendar-header"},{children:[t(ys,{children:ee()}),e(ws,{children:[t(xs,Object.assign({"data-testid":"left-arrow-btn",disabled:Q(),focusHighlight:!1,tabIndex:-1,onClick:V},{children:t(cs,{})})),t(xs,Object.assign({"data-testid":"right-arrow-btn",disabled:G(),focusHighlight:!1,tabIndex:-1,onClick:q},{children:t(us,{})}))]})]})),t(hs,{children:(()=>{const r="function"==typeof i?i({calendarDate:H,currentView:P}):i;return e(n,v?{children:["default"===P&&r,te()]}:{children:[t(ps,{children:r}),t(ms,Object.assign({$visible:"default"!==P},{children:te()}))]})})()}),(()=>{if(!x)return;const n=!!("default"===P)&&D;return e(Ds,{children:[t($s,Object.assign({ref:N,"data-testid":"cancel-button",styleType:"light",type:"button",onClick:Z},{children:"Cancel"})),t($s,Object.assign({"data-testid":"done-button",ref:I,type:"button",onClick:()=>{n||(T(H),"default"===P?X("confirmed"):_("default"))},disabled:n},{children:"Done"}))]})})()]}))})),Ms=v.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 0.25rem;
`,Cs=v.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    pointer-events: none;
    user-select: none;
`,Ts=v.div`
    grid-column: 1 / -1;
    display: flex;
`;v.div`
    display: flex;
    position: relative;
    height: 2.5rem;
    align-items: center;
    justify-content: center;
    flex: 1;
`;const Hs=v.div`
    position: absolute;
    width: 50%;
    height: 100%;

    ${e=>{switch(e.$position){case"left":return b`
                    left: 0;
                `;case"right":return b`
                    right: 0;
                `}}}
`,Ls=v.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    cursor: default;
    position: absolute;
`;v(wn.H5)`
    ${e=>{const{$disabledDisplay:t,$selected:n,$variant:r}=e;if(t&&n)return b`
                ${vn("H5","semibold")};
                color: ${an.Accent.Light[2]};
            `;if(t)return b`
                color: ${an.Neutral[4]};
            `;if(n)return b`
                ${vn("H5","semibold")};
                color: ${an.Primary};
            `;switch(r){case"other-month":return b`
                    color: ${an.Neutral[4]};
                `;case"today":return b`
                    color: ${an.Neutral[3]};
                `;case"default":return b`
                    color: ${an.Neutral[1]};
                `}}}
`,v(Hs)`
    ${e=>{const{$selected:t}=e;if(t)return b`
                border-top: 1px solid ${an.Accent.Light[4]};
                border-bottom: 1px solid ${an.Accent.Light[4]};
                background-color: ${an.Accent.Light[5]};
            `}}

    ${e=>{const{$hovered:t,$overlap:n}=e;return t?b`
                border-top: 1px dashed ${an.Accent.Light[4]};
                border-bottom: 1px dashed ${an.Accent.Light[4]};
                background-color: ${an.Accent.Light[6]};
            `:n?b`
                background-color: ${an.Accent.Light[4]};
            `:void 0}}
`,v(Ls)`
    ${e=>{const{$hovered:t,$selected:n}=e;return n?b`
                background: ${an.Accent.Light[5]};
                border: 1px solid ${an.Primary};
            `:t?b`
                box-shadow: 0px 0px 4px 1px ${an.Shadow.Accent};
                border: 1px solid ${an.Accent.Light[1]};
                background-color: ${an.Neutral[8]};
            `:void 0}}

    ${e=>{const{$interactive:t,$disabledDisplay:n}=e;return t?b`
                cursor: pointer;
                :hover {
                    box-shadow: 0px 0px 4px 1px ${an.Shadow.Accent};
                    border: 1px solid ${an.Accent.Light[1]};
                    background-color: ${an.Neutral[8]};
                }
            `:n?b`
                cursor: not-allowed;
            `:void 0}}

    ${e=>{const{$disabledDisplay:t,$overlap:n,$variant:r}=e;return n?b`
                border: 1px solid ${an.Accent.Light[1]};
                background: ${an.Accent.Light[4]};

                :hover {
                    background: ${an.Accent.Light[4]};
                }
            `:t?b`
                color: ${an.Neutral[4]};
            `:"today"===r?b`
                    background: ${an.Accent.Light[5]};
                `:void 0}}
`;const Ps=e=>{let t=an.Neutral[8],n="1px solid transparent";switch(e.$type){case"current":t=an.Accent.Light[5];break;case"hover-dash":t=an.Accent.Light[6],n=`1px dashed ${an.Accent.Light[4](e)}`;break;case"hover-current":t=an.Neutral[8],n=`1px solid ${an.Primary(e)}`;break;case"selected":t=an.Accent.Light[5],n=`1px solid ${an.Accent.Light[4](e)}`;break;case"selected-outline":t=an.Accent.Light[5],n=`1px solid ${an.Primary(e)}`;break;case"overlap":t=an.Accent.Light[4],n=`1px solid ${an.Accent.Light[4](e)}`;break;case"overlap-outline":t=an.Accent.Light[4],n=`1px solid ${an.Primary(e)}`}return{color:t,border:n}},_s=v.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 2.5rem;
`,Is=v.div`
    position: absolute;
    height: 2.5rem;
    width: 50%;

    ${e=>{if(!e.$type)return;const{color:t,border:n}=Ps(e);return b`
            background-color: ${t};
            background-clip: content-box;
            border-top: ${n};
            border-bottom: ${n};
        `}}
`,Ns=v(Is)`
    left: 0;
`,Ys=v(Is)`
    right: 0;
`,zs=v.div`
    z-index: -1;
    box-shadow: 0 0 4px 1px ${an.Shadow.Accent};
    position: absolute;
    height: 100%;
    width: 50%;
    display: none;

    ${e=>e.$shadow&&"display: block;"}
`,Ws=v(zs)`
    left: 0;
`,Vs=v(zs)`
    right: 0;
`,qs=v.div`
    position: absolute;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;

    border: 1px solid transparent;
    border-radius: 50%;

    ${e=>{if(e.$type){const{color:t,border:n}=Ps(e);return b`
                background-color: ${t};
                background-clip: content-box;
                border: ${n};
            `}}}

    ${e=>e.$shadow&&b`
            &:before {
                content: "";
                border-radius: 50%;
                position: absolute;
                height: 100%;
                width: 100%;
            }
        `}
`,Us=v(qs)`
    right: calc(50% - 1.25rem);
    clip-path: inset(-3px 1.25rem -3px -3px);
    &:before {
        box-shadow: -1px 0 4px 1px ${an.Shadow.Accent};
    }
`,Zs=v(qs)`
    left: calc(50% - 1.25rem);
    clip-path: inset(-3px -3px -3px 1.25rem);
    &:before {
        box-shadow: 1px 0 4px 1px ${an.Shadow.Accent};
    }
`,Ks=v(wn.H5)`
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

    ${e=>{const{$disabled:t,$type:n}=e;if(t)return"selected"===n?b`
                    ${vn("H5","semibold")};
                    color: ${an.Accent.Light[2]};
                `:b`
                color: ${an.Neutral[4]};
            `;switch(n){case"selected":return b`
                    ${vn("H5","semibold")};
                    color: ${an.Primary};
                `;case"current":return b`
                    color: ${an.Neutral[3]};
                `;case"unavailable":return b`
                    color: ${an.Neutral[4]};
                `;case"hidden":return b`
                    visibility: hidden;
                `;default:return b`
                    color: ${an.Neutral[1]};
                `}}}
`,Xs=({bgLeft:n,bgRight:r,circleLeft:o,circleRight:i,shadow:a,circleShadow:s,labelType:l,disabled:c,interactive:u,date:d,onSelect:f,onHover:h,onHoverEnd:p})=>e(_s,{children:[t(Ws,{$shadow:n&&a}),t(Ns,{$type:n,$shadow:n&&a}),t(Us,{$type:o,$shadow:o&&s}),t(Vs,{$shadow:r&&a}),t(Ys,{$type:r,$shadow:r&&a}),t(Zs,{$type:i,$shadow:i&&s}),t(Ks,Object.assign({weight:"regular",$type:l,$disabled:c,$interactive:u,onClick:()=>{f(d)},onMouseEnter:()=>{h(d)},onMouseLeave:()=>{p&&p(d)}},{children:d.date()}))]}),Qs=({date:e,calendarDate:n,startDate:r,endDate:o,currentFocus:i,hoverDate:a,minDate:s,maxDate:l,disabledDates:c,allowDisabledSelection:u,isNewSelection:d,showActiveMonthDaysOnly:f,onSelect:h,onHover:p})=>{const m=Ia.isDisabledDay(e,c,s,l),g=!m||u,y=()=>{const e=M(a),t=e.isBefore(o,"day"),n=e.isAfter(r,"day");let s,l,c,u;return"start"===i&&o&&t&&(r&&n?(c=a,u=o):(s=a,l=r||o)),"end"===i&&r&&n&&(o&&t?(c=r,u=a):(s=o||r,l=a)),{hoverStart:s,hoverEnd:l,overlapStart:c,overlapEnd:u}},v={date:e,calendarDate:n,disabled:m,interactive:g,onSelect:()=>{h(e,!g)},onHover:()=>{p(e.format("YYYY-MM-DD"),!g)}};return t(Xs,Object.assign({},v,(()=>{const t={};if(n.month()!==e.month())t.labelType=f?"hidden":"unavailable";else if(M().isSame(e,"day")&&!m)t.labelType="current",t.circleLeft="current",t.circleRight="current";else if(d){const n="end"===i&&r&&e.isBefore(r),a="start"===i&&o&&e.isAfter(o);(n||a)&&(t.labelType="unavailable")}return t})(),(()=>{const t={},i=e.isSame(r,"day"),a=e.isSame(o,"day");return f&&n.month()!==e.month()?(t.labelType="hidden",t):((r&&i||o&&a)&&(t.labelType="selected",t.circleLeft="selected-outline",t.circleRight="selected-outline"),r&&o&&e.isBetween(r,o,"day","[]")&&(t.labelType="selected",i||(t.bgLeft="selected"),a||(t.bgRight="selected")),t)})(),(()=>{if(!a)return;const t={};e.isSame(a,"day")&&(t.circleShadow=!0,t.circleLeft="hover-current",t.circleRight="hover-current");const{hoverStart:n,hoverEnd:r,overlapStart:o,overlapEnd:i}=y();if(n&&r){if(e.isBetween(n,r,"day","[]")){const o=e.isSame(n,"day"),i=e.isSame(r,"day");t.labelType="selected",o||(t.bgLeft="hover-dash"),i||(t.bgRight="hover-dash")}return t}if(o&&i){if(e.isBetween(o,i,"day","[]")){const n=e.isSame(o,"day"),r=e.isSame(i,"day");t.labelType="selected",(n||r)&&(t.circleShadow=!0,t.circleLeft="overlap-outline",t.circleRight="overlap-outline"),n||(t.bgLeft="overlap"),r||(t.bgRight="overlap")}return t}return t})()))};M.extend(Ha);const Gs=({calendarDate:n,currentFocus:r,disabledDates:o,selectedStartDate:i,selectedEndDate:a,onSelect:s,onHover:c,isNewSelection:u,minDate:d,maxDate:f,allowDisabledSelection:h,showActiveMonthDaysOnly:m})=>{const g=p((()=>Ia.generateDays(n)),[n]),[y,v]=l(""),b=(e,t)=>{t&&!h||s(e)},w=(e,t)=>{t&&!h||(v(e),c(e))},x=()=>{v(""),c("")};return e(Ms,Object.assign({"data-testid":"calendar-content"},{children:[g[0].map(((e,n)=>t(Cs,{children:t(wn.H6,Object.assign({weight:"semibold"},{children:M(e).format("ddd")}))},`week-day-${n}`))),g.map(((e,s)=>t(Ts,Object.assign({onMouseLeave:x},{children:e.map(((e,s)=>t(Qs,{date:e,calendarDate:n,startDate:i,endDate:a,hoverDate:y,currentFocus:r,minDate:d,maxDate:f,disabledDates:o,allowDisabledSelection:h,isNewSelection:u,showActiveMonthDaysOnly:m,onSelect:b,onHover:w},`day-${s}`)))}),s)))]}))},Js=({date:e,calendarDate:n,selectedDate:r,hoverDate:o,minDate:i,maxDate:a,disabledDates:s,allowDisabledSelection:l,numberOfDays:c,onSelect:u,onHover:d})=>{const f=Ia.isDisabledDay(e,s,i,a),h=!f||l,{start:p,end:m}=r?Ia.getFixedRangeStartEnd(qa.toDayjs(r),c):{start:void 0,end:void 0},{start:g,end:y}=o?Ia.getFixedRangeStartEnd(qa.toDayjs(o),c):{start:void 0,end:void 0},v=r&&e.isBetween(p,m,"day","[]"),b=o&&e.isBetween(g,y,"day","[]"),w=v&&e.isSame(p,"day")||b&&e.isSame(g,"day"),x=v&&e.isSame(m,"day")||b&&e.isSame(y,"day"),D=(e,t,n,r)=>{n?e.circleLeft=t:e.bgLeft=t,r?e.circleRight=t:e.bgRight=t},$={date:e,calendarDate:n,disabled:f,interactive:h,onSelect:()=>{u(e,!h)},onHover:()=>{d(e.format("YYYY-MM-DD"),!h)}};return t(Xs,Object.assign({},$,(()=>{const t={};return v||b?t.labelType="selected":n.month()!==e.month()?t.labelType="unavailable":M().isSame(e,"day")&&!f&&(t.labelType="current",t.circleLeft="current",t.circleRight="current"),t})(),(()=>{const t={},n=e.format("YYYY-MM-DD");return b&&D(t,"hover-dash",n===g,n===y),v&&D(t,"selected",n===p,n===m),v&&b&&D(t,"overlap",w,x),n===p&&(b?(t.circleLeft="overlap-outline",t.circleRight="overlap-outline"):(t.circleRight="selected-outline",t.circleLeft="selected-outline")),n===g&&(t.circleLeft="hover-current",t.circleRight="hover-current",t.circleShadow=!0,g>=p&&g<m&&(t.circleLeft="overlap-outline",t.circleRight="overlap-outline")),t})()))},el=({calendarDate:n,disabledDates:r,selectedStartDate:o,onSelect:i,onHover:a,minDate:s,maxDate:c,allowDisabledSelection:u,numberOfDays:d})=>{const f=p((()=>Ia.generateDays(n)),[n]),[h,m]=l(""),g=(e,t)=>{t&&!u||(i(e),e&&!M(e).isSame(e,"month")&&m(""))},y=(e,t)=>{t&&!u||(m(e),a(e))},v=()=>{m(""),a("")};return e(Ms,Object.assign({"data-testid":"calendar-content"},{children:[f[0].map(((e,n)=>t(Cs,{children:t(wn.H6,Object.assign({weight:"semibold"},{children:M(e).format("ddd")}))},`week-day-${n}`))),f.map(((e,i)=>t(Ts,Object.assign({onMouseLeave:v},{children:e.map(((e,i)=>t(Js,{date:e,calendarDate:n,selectedDate:o,hoverDate:h,minDate:s,maxDate:c,disabledDates:r,allowDisabledSelection:u,onSelect:g,onHover:y,numberOfDays:d},`day-${i}`)))}),i)))]}))},tl=v.div`
    width: 100%;
    padding: 1.5rem 2rem;
    background: ${an.Neutral[8]};

    ${e=>{if("input"===e.$type)return b`
                border: 1px solid ${an.Neutral[5]};
                border-radius: 8px;
                overflow: hidden;
                padding: 1.5rem 1.25rem;

                [data-id="header"] {
                    margin: 0 0 0.25rem 0;
                }
            `}}
`,nl=({date:e,calendarDate:n,selectedDate:r,hoverDate:o,minDate:i,maxDate:a,disabledDates:s,allowDisabledSelection:l,onSelect:c,onHover:u})=>{const d=Ia.isDisabledDay(e,s,i,a),f=!d||l,{start:h,end:p}=Ia.getWeekStartEnd(qa.toDayjs(r)),{start:m,end:g}=Ia.getWeekStartEnd(qa.toDayjs(o)),y=r&&e.isBetween(h,p,"day","[]"),v=o&&e.isBetween(m,g,"day","[]"),b=y&&e.isSame(h)||v&&e.isSame(m),w=y&&e.isSame(p)||v&&e.isSame(g),x={date:e,calendarDate:n,disabled:d,interactive:f,onSelect:()=>{c(e,!f)},onHover:()=>{u(e.format("YYYY-MM-DD"),!f)}};return t(Xs,Object.assign({},x,(()=>{const t={};return y||v?t.labelType="selected":n.month()!==e.month()?t.labelType="unavailable":M().isSame(e,"day")&&!d&&(t.labelType="current",t.circleLeft="current",t.circleRight="current"),t})(),(()=>{const e={};let t;return y&&v?(t="hover-current",e.shadow=!0,e.circleShadow=b||w):y?t="selected-outline":v&&(t="hover-dash"),t&&(b?e.circleLeft=t:e.bgLeft=t,w?e.circleRight=t:e.bgRight=t),e})()))},rl=({calendarDate:n,disabledDates:r,selectedStartDate:o,onSelect:i,onHover:a,minDate:s,maxDate:c,allowDisabledSelection:u})=>{const d=p((()=>Ia.generateDays(n)),[n]),[f,h]=l(""),m=(e,t)=>{if(t&&!u)return;const n=e.startOf("week");i(n),e&&!M(e).isSame(n,"month")&&h("")},g=(e,t)=>{t&&!u||(h(e),a(e))},y=()=>{h(""),a("")};return e(Ms,Object.assign({"data-testid":"calendar-content"},{children:[d[0].map(((e,n)=>t(Cs,{children:t(wn.H6,Object.assign({weight:"semibold"},{children:M(e).format("ddd")}))},`week-day-${n}`))),d.map(((e,i)=>t(Ts,Object.assign({onMouseLeave:y},{children:e.map(((e,i)=>t(nl,{date:e,calendarDate:n,selectedDate:o,hoverDate:f,minDate:s,maxDate:c,disabledDates:r,allowDisabledSelection:u,onSelect:m,onHover:g},`day-${i}`)))}),i)))]}))},ol=o.forwardRef((({disabledDates:e,onYearMonthDisplayChange:n,onSelect:r,onHover:o,onDismiss:i,value:a,endValue:l,currentFocus:c,withButton:u,variant:d,minDate:f,maxDate:h,allowDisabledSelection:p,type:g="standalone",selectWithinRange:y=!0,initialCalendarDate:v,numberOfDays:b,showActiveMonthDaysOnly:w=!1},x)=>{const D=s(),$=s(void 0);m(x,(()=>({reset(){D.current.resetView()},setCalendarDate(e){D.current.setCalendarDate(e)}})));const S=e=>{const t=e.format("YYYY-MM-DD");D.current.setCalendarDate(t),O(t)},F=e=>{E(e)},O=e=>{r&&r(e)},E=e=>{o&&o(e)},B=e=>{if(n){const t={month:e.month()+1,year:e.year()};n(t)}};return t(tl,Object.assign({$type:g},{children:t(js,Object.assign({type:g,ref:D,withButton:u,doneButtonDisabled:(()=>{if(!u)return;let e=!0;switch(d){case"single":e=!1;break;case"range":case"fixed-range":e=!!a!=!!l;break;case"week":e=!a&&!l}return e})(),onDismiss:i,minDate:f,maxDate:h,selectWithinRange:y,currentFocus:c,selectedStartDate:a,selectedEndDate:l,allowDisabledSelection:p,onCalendarDateChange:e=>{$.current&&$.current.isSame(e,"month")||B(e),$.current=e},initialCalendarDate:v},{children:({calendarDate:n})=>(n=>{switch(d){case"week":return t(rl,{calendarDate:n,disabledDates:e,selectedStartDate:a,minDate:f,maxDate:h,allowDisabledSelection:p,onSelect:S,onHover:F});case"fixed-range":return t(el,{calendarDate:n,disabledDates:e,selectedStartDate:a,minDate:f,maxDate:h,allowDisabledSelection:p,onSelect:S,onHover:F,numberOfDays:b});default:return t(Gs,{calendarDate:n,currentFocus:c,disabledDates:e,selectedStartDate:a,selectedEndDate:l,minDate:f,maxDate:h,isNewSelection:y,allowDisabledSelection:p,showActiveMonthDaysOnly:w,onSelect:S,onHover:F})}})(n)}))}))})),il=o.forwardRef(((e,n)=>{var{width:r}=e,o=B(e,["width"]);return t(Ba,Object.assign({$width:r,"data-testid":"calendar-dropdown"},{children:t(ol,Object.assign({ref:n},o))}))})),al=v.div`
    position: relative;
    height: 100%;
    display: flex;
    flex: 1;

    ${e=>{if(e.$wrap)return b`
                /* Parent container need to provide space */
                flex-wrap: wrap;

                [data-id="range-container-elem1-container"],
                [data-id="range-container-elem2-container"] {
                    // 100% - Icon size - 2padding
                    max-width: calc(100% - 1.125rem - 1rem);
                    flex: unset;
                }

                [data-id="range-container-elem2-container"] {
                    margin-top: 0.5rem;
                }
            `}}
`,sl=v.div`
    width: 100%; // Force next flex item to break to next line
`,ll=v.div`
    display: flex;
    flex: 1;
    align-items: center;
`,cl=v(E)`
    color: ${an.Neutral[3]};
    width: 1.125rem;
    height: 1.125rem;
    flex-shrink: 0;
    margin: 0 0.5rem;
    align-self: center;
`,ul=v.div`
    position: absolute;
    background: ${e=>e.$error?an.Validation.Red.Border(e):an.Primary(e)};
    height: 0.125rem;
    // half - half padding - half icon width
    width: calc(50% - 0.5rem - (1.125rem / 2));
    transition: left 350ms ease-in-out, opacity 350ms ease-in-out;
    left: 0;
    bottom: 0;

    ${e=>{switch(e.$position){case"start":return b`
                    opacity: 1;
                `;case"end":return b`
                    left: calc(50% + 1rem);
                    opacity: 1;
                `;case"none":return b`
                    opacity: 0;
                `}}}

    ${e=>{if(e.$wrap)return b`
                display: none;
            `}}
`,dl=({children:n,currentActive:r,error:o,className:i,wrap:a})=>{const[s,l]=n;return e(al,Object.assign({className:i,$wrap:a},{children:[t(ll,Object.assign({"data-id":"range-container-elem1-container"},{children:s})),t(cl,{}),a&&t(sl,{}),t(ll,Object.assign({"data-id":"range-container-elem2-container"},{children:l})),t(ul,{"data-id":"range-container-indicator",$position:r,$error:o,$wrap:a})]}))},fl=b`
    border: 1px solid ${an.Accent.Light[1]};
    box-shadow: ${cn.InputBoxShadow};
`,hl=b`
    border: 1px solid ${an.Accent.Light[1]};
    box-shadow: none;
`,pl=b`
    border: 1px solid ${an.Neutral[5]};
    box-shadow: none;
`,ml=b`
    border: 1px solid ${an.Validation.Red.Border};
    box-shadow: ${cn.InputErrorBoxShadow};
`,gl=v.div`
    border: 1px solid ${an.Neutral[5]};
    border-radius: 4px;
    background: ${an.Neutral[8]};

    :focus-within {
        ${fl}
    }
    ${e=>e.$focused&&fl}

    ${e=>e.$readOnly?b`
                border: 1px solid transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${hl}
                }
                ${e.$focused&&hl}
            `:e.$disabled?b`
                background: ${an.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    ${pl}
                }
                ${e.$focused&&pl}
            `:e.$error?b`
                border: 1px solid ${an.Validation.Red.Border};

                :focus-within {
                    ${ml}
                }
                ${e.$focused&&ml}
            `:void 0}
`,yl=v(gl)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,vl=v.input`
    ${e=>vn("small"===e.$variant?"BodySmall":"Body","regular")}
    color: ${an.Neutral[1]};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    :disabled {
        :hover {
            cursor: not-allowed;
        }
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${an.Neutral[3]};
    }

    // Chrome, Safari, Edge, Opera
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    // Safari (remove top shadow)
    --webkit-appearance: none;

    // Firefox
    --moz-appearance: textfield;
`;v.button`
    background: transparent;
    border: none;
    outline: none;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px auto ${an.Primary};
    }
`;const bl=v.div`
    display: flex;
    align-items: center;
    position: relative;

    flex: 1;
`,wl=v.div`
    display: flex;
    align-items: center;

    ${e=>{if(e.$hover)return b`
                ${xl}, ${Fl} {
                    color: ${an.Neutral[4]};
                }
            `}}
`,xl=v(vl)`
    background: transparent;
    text-align: center;
`,Dl=v(xl)`
    width: 2rem;
    margin-right: 0.25rem;
`,$l=v(xl)`
    width: 2.5rem;
`,Sl=v(xl)`
    width: 3rem;
    margin-left: 0.25rem;
`,Fl=v(wn.Body)`
    ${e=>{if(e.$inactive)return b`
                color: ${an.Neutral[3](e)};
            `}}
`,Ol=v.div`
    ${vn("Body","regular")}
    background-color: ${an.Neutral[8]};
    color: ${an.Neutral[3]};
    position: absolute;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    ${e=>e.$disabled?b`
                background-color: ${an.Neutral[6](e)};
                cursor: not-allowed;
            `:e.$hide?b`
                display: none;
            `:void 0}
`;M.extend(ja);const El=o.forwardRef((({disabled:n,readOnly:r,names:o,value:i,focused:c,hoverValue:u,placeholder:d,label:f,onChange:h,onFocus:p,onBlur:g,hideInputKeyboard:y},v)=>{const b=y?"none":"numeric",[w,x,D]=Xa(""),[$,S,F]=Xa(""),[O,E,B]=Xa(""),[k,R]=l("none"),[A,j]=l(!1),C=s(null),T=s(null),H=s(null),L=s(null),[P,_,I]=q(u);a((()=>{const[e="",t="",n=""]=q(i);x(e),S(t),E(n)}),[i]),a((()=>{c||R("none"),c&&(j(!0),C.current.contains(document.activeElement)||T.current.focus())}),[c]),m(v,(()=>({ref:C,resetPlaceholder(){j(!1)},resetInput(){const[e="",t="",n=""]=q(i);x(e),S(t),E(n)}})),[i]);const N=e=>{var t;e.preventDefault(),null===(t=T.current)||void 0===t||t.focus()},Y=e=>{e.target.select();const t=e.target.name;R(t)},z=e=>{const[t,n,r]=o,i={[t]:D.current,[n]:F.current,[r]:B.current},a=e.target.name,s=i[a],l=a!==r?Ka.padValue(s,!0):s;switch(a){case t:i[t]=l,x(l);break;case n:i[n]=l,S(l)}const c=`${i[r]}-${i[n]}-${i[t]}`,u=M(c,"YYYY-MM-DD",!0).isValid(),d=!i[t]&&!i[n]&&!i[r];u&&s!==l&&h(c),C.current.contains(e.relatedTarget)||(R("none"),null==g||g(d||u))},W=e=>{if(u)return;const t=e.target.name,n=e.target.value.replace(/[^0-9]/g,""),r={day:w,month:$,year:O};switch(t){case o[0]:r.day=n,x(n),2===n.length&&H.current.focus();break;case o[1]:r.month=n,S(n),2===n.length&&L.current.focus();break;case o[2]:r.year=n,E(n)}if(!r.day&&!r.month&&!r.year)return void h("");const i=`${r.year}-${r.month}-${r.day}`;M(i,"YYYY-MM-DD",!0).isValid()&&h(i)},V=e=>{"Backspace"!==e.code&&"Backspace"!==e.key||(k===o[1]&&0===$.length&&T.current.focus(),k===o[2]&&0===O.length&&H.current.focus())};function q(e){if(e){const t=M(new Date(e));return t.isValid()?[Ka.padValue(t.date().toString()),Ka.padValue((t.month()+1).toString()),t.year().toString()]:[void 0,void 0,void 0]}return[void 0,void 0,void 0]}return e(bl,Object.assign({role:"group","aria-label":f,onClick:()=>{n||r||(j(!0),C.current.contains(document.activeElement)||T.current.focus())},onFocus:e=>{n||(j(!0),c||null==p||p(e))}},{children:[e(wl,Object.assign({ref:C,$hover:!!u},{children:[t(Dl,{ref:T,name:o[0],maxLength:2,value:null!=P?P:w,onFocus:Y,onBlur:z,onChange:W,type:"text",inputMode:b,pattern:"[0-9]{2}","data-testid":`${o[0]}-input`,"aria-label":"day",disabled:n,readOnly:r,tabIndex:r?-1:0,autoComplete:"off",placeholder:k!==o[0]||r?"DD":""}),t(Fl,Object.assign({$inactive:0===w.length},{children:"/"})),t($l,{ref:H,name:o[1],maxLength:2,value:null!=_?_:$,onFocus:Y,onBlur:z,onChange:W,onKeyDown:V,type:"text",inputMode:b,pattern:"[0-9]{2}","data-testid":`${o[1]}-input`,"aria-label":"month",disabled:n,readOnly:r,tabIndex:r?-1:0,autoComplete:"off",placeholder:k!==o[1]||r?"MM":""}),t(Fl,Object.assign({$inactive:0===$.length},{children:"/"})),t(Sl,{ref:L,name:o[2],maxLength:4,value:null!=I?I:O,onFocus:Y,onBlur:z,onChange:W,onKeyDown:V,type:"text",inputMode:b,pattern:"[0-9]{4}","data-testid":`${o[2]}-input`,"aria-label":"year",disabled:n,readOnly:r,tabIndex:r?-1:0,autoComplete:"off",placeholder:k!==o[2]||r?"YYYY":""})]})),(()=>{if(!i&&!r&&d)return t(Ol,Object.assign({$hide:A,$disabled:n,onMouseDown:N},{children:d}))})()]}))})),Bl=(e,t,n)=>{const r=[];e&&r.push(`[${e}]`),r.push(t,n),console.log(...r)},kl=v(yl)`
    ${e=>e.$wrap&&b`
            padding: 0.75rem 1rem;
        `}
`,Rl=v.div`
    display: flex;
    align-items: center;
    height: calc(3rem - 2px); // exclude top and bottom borders
    width: 100%;

    ${e=>e.$wrap&&b`
            height: fit-content;
        `}
`,Al={initialStart:"",initialEnd:"",selectedStart:"",selectedEnd:"",currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1,focused:!1},jl=n=>{var{minDate:r,maxDate:o,disabled:i,disabledDates:c,error:u,hideInputKeyboard:d,value:f,valueEnd:p,onChange:m,onFocus:y,onBlur:v,onYearMonthDisplayChange:b,withButton:w=!0,variant:x="range",numberOfDays:D=7,readOnly:$,id:S,allowDisabledSelection:F,zIndex:O=50}=n,E=B(n,["minDate","maxDate","disabled","disabledDates","error","hideInputKeyboard","value","valueEnd","onChange","onFocus","onBlur","onYearMonthDisplayChange","withButton","variant","numberOfDays","readOnly","id","allowDisabledSelection","zIndex"]);const[k,R]=l(),[A,j]=l(void 0),[C,H]=l(!1),[L,P]=l(!1),I="week"===x,N="fixed-range"===x,[{selectedStart:Y,selectedEnd:z,currentFocus:W,calendarOpen:V,isStartDirty:q,isEndDirty:U,focused:Z},K]=(({initialState:e,reducers:t,name:n,debug:r})=>{const[o,i]=g(((e,n)=>t[n.type]?t[n.type](e,n.payload):e),e);return[o,Object.fromEntries(Object.keys(t).map((e=>[e,t=>{r&&Bl(n,e,t),i({type:e,payload:t})}])))]})({name:"date-range-input",initialState:Al,reducers:{blur:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1,focused:!1}),dismiss:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),changeStart:(e,t)=>Object.assign(Object.assign({},e),{selectedStart:t,isStartDirty:!0}),changeEnd:(e,t)=>Object.assign(Object.assign({},e),{selectedEnd:t,isEndDirty:!0}),reselectStart:e=>Object.assign(Object.assign({},e),{selectedStart:"",currentFocus:"start"}),reselectEnd:e=>Object.assign(Object.assign({},e),{selectedEnd:"",currentFocus:"end"}),focus:(e,t)=>Object.assign(Object.assign({},e),{currentFocus:I?"none":N?"start":t,calendarOpen:!$,focused:!0}),cancel:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1}),done:(e,t)=>Object.assign(Object.assign({},e),{selectedStart:t.start,selectedEnd:t.end,initialStart:t.start,initialEnd:t.end,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),resetStart:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart}),resetEnd:e=>Object.assign(Object.assign({},e),{selectedEnd:e.initialEnd}),resetRange:(e,t)=>Object.assign(Object.assign({},e),{initialStart:t.start,selectedStart:t.start,initialEnd:t.end,selectedEnd:t.end})}}),X=s(!1),Q=s(),G=s(),J=s(),ee=s(),te=T.useMediaQuery({maxWidth:_.mobileL}),ne=(({maxWidth:e,targetRef:t})=>{const[n,r]=l(!1);return Sa({targetRef:t,refreshMode:"throttle",refreshRate:300,handleHeight:!1,onResize:h((t=>{r(t<=e)}),[e])}),n})({maxWidth:320,targetRef:Q}),re=w||te;a((()=>{K.resetRange({start:Ua.sanitizeInput(f),end:Ua.sanitizeInput(p)})}),[f,p]),a((()=>{"start"===W?R(Y):"end"===W&&R(z)}),[W]);const oe=e=>{"Enter"!==e.code||re||(Y&&z?(K.done({start:Y,end:z}),null==m||m(Y,z)):(K.dismiss(),Q.current.focus(),J.current.resetPlaceholder(),ee.current.resetPlaceholder()))},ie=e=>{if(ve(e))return void(X.current=!0);if(K.changeStart(e),G.current.setCalendarDate(e),X.current=!1,!e)return void(re||z||!U||(K.resetRange({start:"",end:""}),null==m||m("","")));if(!z)return void K.focus("end");if(M(e).isAfter(z,"day"))K.reselectEnd();else{if(U)return re?void 0:(K.done({start:e,end:z}),void(null==m||m(e,z)));K.focus("end")}},ae=e=>{if(ve(e))return void(X.current=!0);if(K.changeEnd(e),G.current.setCalendarDate(e),!e)return void(re||Y||!q||(K.resetRange({start:"",end:""}),null==m||m("","")));if(!Y)return void K.focus("start");if(M(e).isBefore(Y,"day"))K.reselectStart();else{if(q)return re?void 0:(K.done({start:Y,end:e}),void(null==m||m(Y,e)));K.focus("start")}},se=e=>{if(ve(e))return void(X.current=!0);if(K.changeStart(e),G.current.setCalendarDate(e),X.current=!1,!e)return void(re?K.changeEnd(""):(K.resetRange({start:"",end:""}),null==m||m("","")));const t=M(e).format("YYYY-MM-DD"),n=M(t).add(D-1,"day").format("YYYY-MM-DD");return K.changeStart(t),K.changeEnd(n),X.current=!1,re?void 0:(K.done({start:t,end:n}),void(null==m||m(t,n)))},le=()=>{$||i||Z||(K.focus("start"),null==y||y())},ce=e=>{!Z||V||Q.current.contains(e.relatedTarget)||(K.blur(),H(!1),P(!1),J.current.resetPlaceholder(),ee.current.resetPlaceholder(),null==v||v())},ue=e=>t=>{t.stopPropagation(),$||(K.focus(e),de(),fe(),Z||null==y||y())},de=()=>{if(I){const e=qa.toDayjs(Y).startOf("week").format("YYYY-MM-DD");H(!0),P(!0),R(e)}},fe=()=>{N&&(P(!0),R(Y))},he=e=>{e&&!X.current||(K.resetStart(),J.current.resetInput())},pe=e=>{e&&!X.current||(K.resetEnd(),ee.current.resetInput())},me=e=>{switch(x){case"week":(e=>{const t=M(e).startOf("week").format("YYYY-MM-DD"),n=M(e).endOf("week").format("YYYY-MM-DD");if(K.changeStart(t),K.changeEnd(n),X.current=!1,!re)K.done({start:t,end:n}),null==m||m(t,n)})(e);break;case"fixed-range":se(e);break;default:"start"===W?ie(e):"end"===W&&ae(e)}},ge=e=>{switch(Q.current.focus(),e){case"reset":K.cancel();break;case"confirmed":K.done({start:Y,end:z}),null==m||m(Y,z)}},ye=e=>{j(e)},ve=e=>!F&&e&&Ua.isDateDisabled(e,{disabledDates:c,minDate:r,maxDate:o}),be=e=>{let t={start:void 0,end:void 0};switch(x){case"range":t={start:"start"===W?A:void 0,end:"end"===W?A:void 0};break;case"week":if(!A)return;t={start:M(A).startOf("week").format("YYYY-MM-DD"),end:M(A).endOf("week").format("YYYY-MM-DD")};break;case"fixed-range":if(!A)return;t={start:M(A).format("YYYY-MM-DD"),end:M(A).add(D-1,"day").format("YYYY-MM-DD")}}return t[e]};return t(Ea,{enabled:!$&&!i,isOpen:V,onClose:()=>{K.blur(),H(!1),P(!1),J.current.resetPlaceholder(),ee.current.resetPlaceholder(),null==v||v()},onDismiss:()=>{K.dismiss(),Q.current.focus(),J.current.resetPlaceholder(),ee.current.resetPlaceholder()},renderElement:()=>t(kl,Object.assign({ref:Q,tabIndex:-1,onFocus:le,onBlur:ce,$focused:Z,$disabled:i,$readOnly:$,$error:u,$wrap:ne,id:S,"data-testid":E["data-testid"],onKeyDown:oe},E,{children:e(dl,Object.assign({currentActive:W,wrap:ne,error:u},{children:[t(Rl,Object.assign({$wrap:ne},{children:t(El,{ref:J,placeholder:"From",names:["start-day","start-month","start-year"],value:Y,disabled:i,readOnly:C||$,focused:"start"===W,hoverValue:be("start"),onChange:N?se:ie,onFocus:ue("start"),onBlur:he,hideInputKeyboard:d})})),t(Rl,Object.assign({$wrap:ne},{children:t(El,{ref:ee,placeholder:"To",names:["end-day","end-month","end-year"],value:z,disabled:i,readOnly:L||$,focused:"end"===W,hoverValue:be("end"),onChange:ae,onFocus:ue("end"),onBlur:pe,hideInputKeyboard:d})}))]}))})),renderDropdown:({elementWidth:e})=>t(il,{ref:G,type:"input",variant:x,initialCalendarDate:k,withButton:re,value:Y,endValue:z,selectWithinRange:q||U,currentFocus:W,disabledDates:c,minDate:r,maxDate:o,allowDisabledSelection:F,onSelect:me,onDismiss:ge,onHover:ye,onYearMonthDisplayChange:b,numberOfDays:D,width:e}),zIndex:O,offset:16})};export{jl as DateRangeInput};
//# sourceMappingURL=index.js.map
