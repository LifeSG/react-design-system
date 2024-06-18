import{jsxs as e,jsx as t,Fragment as n}from"react/jsx-runtime";import*as r from"react";import o,{useLayoutEffect as i,useEffect as a,useRef as s,useState as c,isValidElement as l,createRef as u,cloneElement as d,PureComponent as f,useCallback as p,useMemo as h,useImperativeHandle as m,useReducer as g}from"react";import{ChevronDownIcon as y}from"@lifesg/react-icons/chevron-down";import v,{css as b,keyframes as w}from"styled-components";import{ExternalIcon as x}from"@lifesg/react-icons/external";import*as D from"react-dom";import{createPortal as $,findDOMNode as S}from"react-dom";import{ChevronLeftIcon as O}from"@lifesg/react-icons/chevron-left";import{ChevronRightIcon as F}from"@lifesg/react-icons/chevron-right";import{ArrowRightIcon as E}from"@lifesg/react-icons";function B(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}"function"==typeof SuppressedError&&SuppressedError;var k="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function R(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var j={exports:{}};j.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",o="second",i="minute",a="hour",s="day",c="week",l="month",u="quarter",d="year",f="date",p="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},y=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},v={s:y,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),o=n%60;return(t<=0?"+":"-")+y(r,2,"0")+":"+y(o,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),o=t.clone().add(r,l),i=n-o<0,a=t.clone().add(r+(i?-1:1),l);return+(-(r+(n-o)/(i?o-a:a-o))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:l,y:d,w:c,d:s,D:f,h:a,m:i,s:o,ms:r,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",w={};w[b]=g;var x="$isDayjsObject",D=function(e){return e instanceof F||!(!e||!e[x])},$=function e(t,n,r){var o;if(!t)return b;if("string"==typeof t){var i=t.toLowerCase();w[i]&&(o=i),n&&(w[i]=n,o=i);var a=t.split("-");if(!o&&a.length>1)return e(a[0])}else{var s=t.name;w[s]=t,o=s}return!r&&o&&(b=o),o||!r&&b},S=function(e,t){if(D(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new F(n)},O=v;O.l=$,O.i=D,O.w=function(e,t){return S(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var F=function(){function g(e){this.$L=$(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[x]=!0}var y=g.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(O.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(h);if(r){var o=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(t)}(e),this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return O},y.isValid=function(){return!(this.$d.toString()===p)},y.isSame=function(e,t){var n=S(e);return this.startOf(t)<=n&&n<=this.endOf(t)},y.isAfter=function(e,t){return S(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<S(e)},y.$g=function(e,t,n){return O.u(e)?this[t]:this.set(n,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var n=this,r=!!O.u(t)||t,u=O.p(e),p=function(e,t){var o=O.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?o:o.endOf(s)},h=function(e,t){return O.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},m=this.$W,g=this.$M,y=this.$D,v="set"+(this.$u?"UTC":"");switch(u){case d:return r?p(1,0):p(31,11);case l:return r?p(1,g):p(0,g+1);case c:var b=this.$locale().weekStart||0,w=(m<b?m+7:m)-b;return p(r?y-w:y+(6-w),g);case s:case f:return h(v+"Hours",0);case a:return h(v+"Minutes",1);case i:return h(v+"Seconds",2);case o:return h(v+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var n,c=O.p(e),u="set"+(this.$u?"UTC":""),p=(n={},n[s]=u+"Date",n[f]=u+"Date",n[l]=u+"Month",n[d]=u+"FullYear",n[a]=u+"Hours",n[i]=u+"Minutes",n[o]=u+"Seconds",n[r]=u+"Milliseconds",n)[c],h=c===s?this.$D+(t-this.$W):t;if(c===l||c===d){var m=this.clone().set(f,1);m.$d[p](h),m.init(),this.$d=m.set(f,Math.min(this.$D,m.daysInMonth())).$d}else p&&this.$d[p](h);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[O.p(e)]()},y.add=function(r,u){var f,p=this;r=Number(r);var h=O.p(u),m=function(e){var t=S(p);return O.w(t.date(t.date()+Math.round(e*r)),p)};if(h===l)return this.set(l,this.$M+r);if(h===d)return this.set(d,this.$y+r);if(h===s)return m(1);if(h===c)return m(7);var g=(f={},f[i]=t,f[a]=n,f[o]=e,f)[h]||1,y=this.$d.getTime()+r*g;return O.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||p;var r=e||"YYYY-MM-DDTHH:mm:ssZ",o=O.z(this),i=this.$H,a=this.$m,s=this.$M,c=n.weekdays,l=n.months,u=n.meridiem,d=function(e,n,o,i){return e&&(e[n]||e(t,r))||o[n].slice(0,i)},f=function(e){return O.s(i%12||12,e,"0")},h=u||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(m,(function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return O.s(t.$y,4,"0");case"M":return s+1;case"MM":return O.s(s+1,2,"0");case"MMM":return d(n.monthsShort,s,l,3);case"MMMM":return d(l,s);case"D":return t.$D;case"DD":return O.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return d(n.weekdaysMin,t.$W,c,2);case"ddd":return d(n.weekdaysShort,t.$W,c,3);case"dddd":return c[t.$W];case"H":return String(i);case"HH":return O.s(i,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return h(i,a,!0);case"A":return h(i,a,!1);case"m":return String(a);case"mm":return O.s(a,2,"0");case"s":return String(t.$s);case"ss":return O.s(t.$s,2,"0");case"SSS":return O.s(t.$ms,3,"0");case"Z":return o}return null}(e)||o.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,f,p){var h,m=this,g=O.p(f),y=S(r),v=(y.utcOffset()-this.utcOffset())*t,b=this-y,w=function(){return O.m(m,y)};switch(g){case d:h=w()/12;break;case l:h=w();break;case u:h=w()/3;break;case c:h=(b-v)/6048e5;break;case s:h=(b-v)/864e5;break;case a:h=b/n;break;case i:h=b/t;break;case o:h=b/e;break;default:h=b}return p?h:O.a(h)},y.daysInMonth=function(){return this.endOf(l).$D},y.$locale=function(){return w[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=$(e,t,!0);return r&&(n.$L=r),n},y.clone=function(){return O.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},g}(),E=F.prototype;return S.prototype=E,[["$ms",r],["$s",o],["$m",i],["$H",a],["$W",s],["$M",l],["$y",d],["$D",f]].forEach((function(e){E[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),S.extend=function(e,t){return e.$i||(e(t,F,S),e.$i=!0),S},S.locale=$,S.isDayjs=D,S.unix=function(e){return S(1e3*e)},S.en=w[b],S.Ls=w,S.p={},S}();var A,M=R(j.exports),C={exports:{}};A=e=>(()=>{var t={"./node_modules/css-mediaquery/index.js":
/*!**********************************************!*\
	  !*** ./node_modules/css-mediaquery/index.js ***!
	  \**********************************************/(e,t)=>{t.match=function(e,t){return s(e).some((function(e){var n=e.inverse,r="all"===e.type||t.type===e.type;if(r&&n||!r&&!n)return!1;var o=e.expressions.every((function(e){var n=e.feature,r=e.modifier,o=e.value,i=t[n];if(!i)return!1;switch(n){case"orientation":case"scan":return i.toLowerCase()===o.toLowerCase();case"width":case"height":case"device-width":case"device-height":o=u(o),i=u(i);break;case"resolution":o=l(o),i=l(i);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":o=c(o),i=c(i);break;case"grid":case"color":case"color-index":case"monochrome":o=parseInt(o,10)||1,i=parseInt(i,10)||0}switch(r){case"min":return i>=o;case"max":return i<=o;default:return i===o}}));return o&&!n||!o&&n}))},t.parse=s;var n=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,r=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,o=/^(?:(min|max)-)?(.+)/,i=/(em|rem|px|cm|mm|in|pt|pc)?$/,a=/(dpi|dpcm|dppx)?$/;function s(e){return e.split(",").map((function(e){var t=(e=e.trim()).match(n),i=t[1],a=t[2],s=t[3]||"",c={};return c.inverse=!!i&&"not"===i.toLowerCase(),c.type=a?a.toLowerCase():"all",s=s.match(/\([^\)]+\)/g)||[],c.expressions=s.map((function(e){var t=e.match(r),n=t[1].toLowerCase().match(o);return{modifier:n[1],feature:n[2],value:t[2]}})),c}))}function c(e){var t,n=Number(e);return n||(n=(t=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/t[2]),n}function l(e){var t=parseFloat(e);switch(String(e).match(a)[1]){case"dpcm":return t/2.54;case"dppx":return 96*t;default:return t}}function u(e){var t=parseFloat(e);switch(String(e).match(i)[1]){case"em":case"rem":return 16*t;case"cm":return 96*t/2.54;case"mm":return 96*t/2.54/10;case"in":return 96*t;case"pt":return 72*t;case"pc":return 72*t/12;default:return t}}},"./node_modules/hyphenate-style-name/index.js":
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
var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,o){for(var i,a,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var l in i=Object(arguments[c]))n.call(i,l)&&(s[l]=i[l]);if(t){a=t(i);for(var u=0;u<a.length;u++)r.call(i,a[u])&&(s[a[u]]=i[a[u]])}}return s}},"./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
	  !*** ./node_modules/prop-types/checkPropTypes.js ***!
	  \***************************************************/(e,t,n)=>{var r,o=n(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),i={},a=n(/*! ./lib/has */"./node_modules/prop-types/lib/has.js");function s(e,t,n,s,c){for(var l in e)if(a(e,l)){var u;try{if("function"!=typeof e[l]){var d=Error((s||"React class")+": "+n+" type `"+l+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[l]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw d.name="Invariant Violation",d}u=e[l](t,l,s,n,null,o)}catch(e){u=e}if(!u||u instanceof Error||r((s||"React class")+": type specification of "+n+" `"+l+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof u+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),u instanceof Error&&!(u.message in i)){i[u.message]=!0;var f=c?c():"";r("Failed "+n+" type: "+u.message+(null!=f?f:""))}}}r=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},s.resetWarningCache=function(){i={}},e.exports=s},"./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
	  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
	  \************************************************************/(e,t,n)=>{var r,o=n(/*! react-is */"./node_modules/react-is/index.js"),i=n(/*! object-assign */"./node_modules/object-assign/index.js"),a=n(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),s=n(/*! ./lib/has */"./node_modules/prop-types/lib/has.js"),c=n(/*! ./checkPropTypes */"./node_modules/prop-types/checkPropTypes.js");function l(){return null}r=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},e.exports=function(e,t){var n="function"==typeof Symbol&&Symbol.iterator,u="@@iterator",d="<<anonymous>>",f={array:g("array"),bigint:g("bigint"),bool:g("boolean"),func:g("function"),number:g("number"),object:g("object"),string:g("string"),symbol:g("symbol"),any:m(l),arrayOf:function(e){return m((function(t,n,r,o,i){if("function"!=typeof e)return new h("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var s=t[n];if(!Array.isArray(s))return new h("Invalid "+o+" `"+i+"` of type `"+b(s)+"` supplied to `"+r+"`, expected an array.");for(var c=0;c<s.length;c++){var l=e(s,c,r,o,i+"["+c+"]",a);if(l instanceof Error)return l}return null}))},element:m((function(t,n,r,o,i){var a=t[n];return e(a)?null:new h("Invalid "+o+" `"+i+"` of type `"+b(a)+"` supplied to `"+r+"`, expected a single ReactElement.")})),elementType:m((function(e,t,n,r,i){var a=e[t];return o.isValidElementType(a)?null:new h("Invalid "+r+" `"+i+"` of type `"+b(a)+"` supplied to `"+n+"`, expected a single ReactElement type.")})),instanceOf:function(e){return m((function(t,n,r,o,i){if(!(t[n]instanceof e)){var a=e.name||d;return new h("Invalid "+o+" `"+i+"` of type `"+((s=t[n]).constructor&&s.constructor.name?s.constructor.name:d)+"` supplied to `"+r+"`, expected instance of `"+a+"`.")}var s;return null}))},node:m((function(e,t,n,r,o){return v(e[t])?null:new h("Invalid "+r+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.")})),objectOf:function(e){return m((function(t,n,r,o,i){if("function"!=typeof e)return new h("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var c=t[n],l=b(c);if("object"!==l)return new h("Invalid "+o+" `"+i+"` of type `"+l+"` supplied to `"+r+"`, expected an object.");for(var u in c)if(s(c,u)){var d=e(c,u,r,o,i+"."+u,a);if(d instanceof Error)return d}return null}))},oneOf:function(e){return Array.isArray(e)?m((function(t,n,r,o,i){for(var a=t[n],s=0;s<e.length;s++)if(p(a,e[s]))return null;var c=JSON.stringify(e,(function(e,t){return"symbol"===w(t)?String(t):t}));return new h("Invalid "+o+" `"+i+"` of value `"+String(a)+"` supplied to `"+r+"`, expected one of "+c+".")})):(r(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),l)},oneOfType:function(e){if(!Array.isArray(e))return r("Invalid argument supplied to oneOfType, expected an instance of array."),l;for(var t=0;t<e.length;t++){var n=e[t];if("function"!=typeof n)return r("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+x(n)+" at index "+t+"."),l}return m((function(t,n,r,o,i){for(var c=[],l=0;l<e.length;l++){var u=(0,e[l])(t,n,r,o,i,a);if(null==u)return null;u.data&&s(u.data,"expectedType")&&c.push(u.data.expectedType)}return new h("Invalid "+o+" `"+i+"` supplied to `"+r+"`"+(c.length>0?", expected one of type ["+c.join(", ")+"]":"")+".")}))},shape:function(e){return m((function(t,n,r,o,i){var s=t[n],c=b(s);if("object"!==c)return new h("Invalid "+o+" `"+i+"` of type `"+c+"` supplied to `"+r+"`, expected `object`.");for(var l in e){var u=e[l];if("function"!=typeof u)return y(r,o,i,l,w(u));var d=u(s,l,r,o,i+"."+l,a);if(d)return d}return null}))},exact:function(e){return m((function(t,n,r,o,c){var l=t[n],u=b(l);if("object"!==u)return new h("Invalid "+o+" `"+c+"` of type `"+u+"` supplied to `"+r+"`, expected `object`.");var d=i({},t[n],e);for(var f in d){var p=e[f];if(s(e,f)&&"function"!=typeof p)return y(r,o,c,f,w(p));if(!p)return new h("Invalid "+o+" `"+c+"` key `"+f+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var m=p(l,f,r,o,c+"."+f,a);if(m)return m}return null}))}};function p(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function h(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function m(e){var n={},o=0;function i(i,s,c,l,u,f,p){if(l=l||d,f=f||c,p!==a){if(t){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}if("undefined"!=typeof console){var g=l+":"+c;!n[g]&&o<3&&(r("You are manually calling a React.PropTypes validation function for the `"+f+"` prop on `"+l+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),n[g]=!0,o++)}}return null==s[c]?i?null===s[c]?new h("The "+u+" `"+f+"` is marked as required in `"+l+"`, but its value is `null`."):new h("The "+u+" `"+f+"` is marked as required in `"+l+"`, but its value is `undefined`."):null:e(s,c,l,u,f)}var s=i.bind(null,!1);return s.isRequired=i.bind(null,!0),s}function g(e){return m((function(t,n,r,o,i,a){var s=t[n];return b(s)!==e?new h("Invalid "+o+" `"+i+"` of type `"+w(s)+"` supplied to `"+r+"`, expected `"+e+"`.",{expectedType:e}):null}))}function y(e,t,n,r,o){return new h((e||"React class")+": "+t+" type `"+n+"."+r+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+o+"`.")}function v(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(v);if(null===t||e(t))return!0;var r=function(e){var t=e&&(n&&e[n]||e[u]);if("function"==typeof t)return t}(t);if(!r)return!1;var o,i=r.call(t);if(r!==t.entries){for(;!(o=i.next()).done;)if(!v(o.value))return!1}else for(;!(o=i.next()).done;){var a=o.value;if(a&&!v(a[1]))return!1}return!0;default:return!1}}function b(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function w(e){if(null==e)return""+e;var t=b(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function x(e){var t=w(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return h.prototype=Error.prototype,f.checkPropTypes=c,f.resetWarningCache=c.resetWarningCache,f.PropTypes=f,f}},"./node_modules/prop-types/index.js":
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
	  \***********************************************************/(e,t)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,n=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,c=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,u=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,f=e?Symbol.for("react.suspense"):60113,p=e?Symbol.for("react.suspense_list"):60120,h=e?Symbol.for("react.memo"):60115,m=e?Symbol.for("react.lazy"):60116,g=e?Symbol.for("react.block"):60121,y=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,b=e?Symbol.for("react.scope"):60119;function w(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:var p=e.type;switch(p){case l:case u:case o:case a:case i:case f:return p;default:var g=p&&p.$$typeof;switch(g){case c:case d:case m:case h:case s:return g;default:return t}}case r:return t}}}var x=l,D=u,$=c,S=s,O=n,F=d,E=o,B=m,k=h,R=r,j=a,A=i,M=f,C=!1;function T(e){return w(e)===u}t.AsyncMode=x,t.ConcurrentMode=D,t.ContextConsumer=$,t.ContextProvider=S,t.Element=O,t.ForwardRef=F,t.Fragment=E,t.Lazy=B,t.Memo=k,t.Portal=R,t.Profiler=j,t.StrictMode=A,t.Suspense=M,t.isAsyncMode=function(e){return C||(C=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),T(e)||w(e)===l},t.isConcurrentMode=T,t.isContextConsumer=function(e){return w(e)===c},t.isContextProvider=function(e){return w(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return w(e)===d},t.isFragment=function(e){return w(e)===o},t.isLazy=function(e){return w(e)===m},t.isMemo=function(e){return w(e)===h},t.isPortal=function(e){return w(e)===r},t.isProfiler=function(e){return w(e)===a},t.isStrictMode=function(e){return w(e)===i},t.isSuspense=function(e){return w(e)===f},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===u||e===a||e===i||e===f||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===h||e.$$typeof===s||e.$$typeof===c||e.$$typeof===d||e.$$typeof===y||e.$$typeof===v||e.$$typeof===b||e.$$typeof===g)},t.typeOf=w}()},"./node_modules/react-is/index.js":
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
	  \***************************/function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)},o=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=i(n(/*! prop-types */"./node_modules/prop-types/index.js")),s=a.default.oneOfType([a.default.string,a.default.number]),c={all:a.default.bool,grid:a.default.bool,aural:a.default.bool,braille:a.default.bool,handheld:a.default.bool,print:a.default.bool,projection:a.default.bool,screen:a.default.bool,tty:a.default.bool,tv:a.default.bool,embossed:a.default.bool},l={orientation:a.default.oneOf(["portrait","landscape"]),scan:a.default.oneOf(["progressive","interlace"]),aspectRatio:a.default.string,deviceAspectRatio:a.default.string,height:s,deviceHeight:s,width:s,deviceWidth:s,color:a.default.bool,colorIndex:a.default.bool,monochrome:a.default.bool,resolution:s,type:Object.keys(c)},u=o(l,["type"]),d=r({minAspectRatio:a.default.string,maxAspectRatio:a.default.string,minDeviceAspectRatio:a.default.string,maxDeviceAspectRatio:a.default.string,minHeight:s,maxHeight:s,minDeviceHeight:s,maxDeviceHeight:s,minWidth:s,maxWidth:s,minDeviceWidth:s,maxDeviceWidth:s,minColor:a.default.number,maxColor:a.default.number,minColorIndex:a.default.number,maxColorIndex:a.default.number,minMonochrome:a.default.number,maxMonochrome:a.default.number,minResolution:s,maxResolution:s},u),f=r(r({},c),d);t.default={all:f,types:c,matchers:l,features:d}},"./src/toQuery.ts":
/*!************************!*\
	  !*** ./src/toQuery.ts ***!
	  \************************/function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),i=r(n(/*! ./mediaQuery */"./src/mediaQuery.ts"));t.default=function(e){var t=[];return Object.keys(i.default.all).forEach((function(n){var r=e[n];null!=r&&t.push(function(e,t){var n=(0,o.default)(e);return"number"==typeof t&&(t="".concat(t,"px")),!0===t?n:!1===t?"not ".concat(n):"(".concat(n,": ").concat(t,")")}(n,r))})),t.join(" and ")}},"./src/useMediaQuery.ts":
/*!******************************!*\
	  !*** ./src/useMediaQuery.ts ***!
	  \******************************/function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(/*! react */"react"),i=r(n(/*! matchmediaquery */"./node_modules/matchmediaquery/index.js")),a=r(n(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),s=n(/*! shallow-equal */"./node_modules/shallow-equal/dist/index.esm.js"),c=r(n(/*! ./toQuery */"./src/toQuery.ts")),l=r(n(/*! ./Context */"./src/Context.ts")),u=function(e){if(e)return Object.keys(e).reduce((function(t,n){return t[(0,a.default)(n)]=e[n],t}),{})},d=function(){var e=(0,o.useRef)(!1);return(0,o.useEffect)((function(){e.current=!0}),[]),e.current},f=function(e){var t=function(){return function(e){return e.query||(0,c.default)(e)}(e)},n=(0,o.useState)(t),r=n[0],i=n[1];return(0,o.useEffect)((function(){var e=t();r!==e&&i(e)}),[e]),r};t.default=function(e,t,n){var r=function(e){var t=(0,o.useContext)(l.default),n=function(){return u(e)||u(t)},r=(0,o.useState)(n),i=r[0],a=r[1];return(0,o.useEffect)((function(){var e=n();(0,s.shallowEqualObjects)(i,e)||a(e)}),[e,t]),i}(t),a=f(e);if(!a)throw new Error("Invalid or missing MediaQuery!");var c=function(e,t){var n=function(){return(0,i.default)(e,t||{},!!t)},r=(0,o.useState)(n),a=r[0],s=r[1],c=d();return(0,o.useEffect)((function(){if(c){var e=n();return s(e),function(){e&&e.dispose()}}}),[e,t]),a}(a,r),p=function(e){var t=(0,o.useState)(e.matches),n=t[0],r=t[1];return(0,o.useEffect)((function(){var t=function(e){r(e.matches)};return e.addListener(t),r(e.matches),function(){e.removeListener(t)}}),[e]),n}(c),h=d();return(0,o.useEffect)((function(){h&&n&&n(p)}),[p]),(0,o.useEffect)((function(){return function(){c&&c.dispose()}}),[]),p}},react:
/*!**************************************************************************************!*\
	  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
	  \**************************************************************************************/t=>{t.exports=e}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return t[e].call(i.exports,i,i.exports,r),i.exports}return r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r("./src/index.ts")})();var T=C.exports=A(o);const L={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},H=e=>Object.keys(L).reduce(((t,n)=>{const r=L[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),_=H("max-width"),P=(H("min-width"),L);var I=Array.isArray,N="object"==typeof k&&k&&k.Object===Object&&k,Y="object"==typeof self&&self&&self.Object===Object&&self,z=N||Y||Function("return this")(),W=z.Symbol,V=W,q=Object.prototype,U=q.hasOwnProperty,Z=q.toString,K=V?V.toStringTag:void 0;var X=function(e){var t=U.call(e,K),n=e[K];try{e[K]=void 0;var r=!0}catch(e){}var o=Z.call(e);return r&&(t?e[K]=n:delete e[K]),o},Q=Object.prototype.toString;var G=X,J=function(e){return Q.call(e)},ee=W?W.toStringTag:void 0;var te=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":ee&&ee in Object(e)?G(e):J(e)};var ne=te,re=function(e){return null!=e&&"object"==typeof e};var oe=function(e){return"symbol"==typeof e||re(e)&&"[object Symbol]"==ne(e)},ie=I,ae=oe,se=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ce=/^\w*$/;var le=function(e,t){if(ie(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!ae(e))||(ce.test(e)||!se.test(e)||null!=t&&e in Object(t))};var ue=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},de=te,fe=ue;var pe,he=function(e){if(!fe(e))return!1;var t=de(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},me=z["__core-js_shared__"],ge=(pe=/[^.]+$/.exec(me&&me.keys&&me.keys.IE_PROTO||""))?"Symbol(src)_1."+pe:"";var ye=function(e){return!!ge&&ge in e},ve=Function.prototype.toString;var be=he,we=ye,xe=ue,De=function(e){if(null!=e){try{return ve.call(e)}catch(e){}try{return e+""}catch(e){}}return""},$e=/^\[object .+?Constructor\]$/,Se=Function.prototype,Oe=Object.prototype,Fe=Se.toString,Ee=Oe.hasOwnProperty,Be=RegExp("^"+Fe.call(Ee).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ke=function(e){return!(!xe(e)||we(e))&&(be(e)?Be:$e).test(De(e))},Re=function(e,t){return null==e?void 0:e[t]};var je=function(e,t){var n=Re(e,t);return ke(n)?n:void 0},Ae=je(Object,"create"),Me=Ae;var Ce=function(){this.__data__=Me?Me(null):{},this.size=0};var Te=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Le=Ae,He=Object.prototype.hasOwnProperty;var _e=function(e){var t=this.__data__;if(Le){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return He.call(t,e)?t[e]:void 0},Pe=Ae,Ie=Object.prototype.hasOwnProperty;var Ne=Ae;var Ye=Ce,ze=Te,We=_e,Ve=function(e){var t=this.__data__;return Pe?void 0!==t[e]:Ie.call(t,e)},qe=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Ne&&void 0===t?"__lodash_hash_undefined__":t,this};function Ue(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ue.prototype.clear=Ye,Ue.prototype.delete=ze,Ue.prototype.get=We,Ue.prototype.has=Ve,Ue.prototype.set=qe;var Ze=Ue;var Ke=function(){this.__data__=[],this.size=0};var Xe=function(e,t){return e===t||e!=e&&t!=t};var Qe=function(e,t){for(var n=e.length;n--;)if(Xe(e[n][0],t))return n;return-1},Ge=Qe,Je=Array.prototype.splice;var et=function(e){var t=this.__data__,n=Ge(t,e);return!(n<0)&&(n==t.length-1?t.pop():Je.call(t,n,1),--this.size,!0)},tt=Qe;var nt=function(e){var t=this.__data__,n=tt(t,e);return n<0?void 0:t[n][1]},rt=Qe;var ot=Qe;var it=function(e,t){var n=this.__data__,r=ot(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this},at=Ke,st=et,ct=nt,lt=function(e){return rt(this.__data__,e)>-1},ut=it;function dt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}dt.prototype.clear=at,dt.prototype.delete=st,dt.prototype.get=ct,dt.prototype.has=lt,dt.prototype.set=ut;var ft=dt,pt=je(z,"Map"),ht=Ze,mt=ft,gt=pt;var yt=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var vt=function(e,t){var n=e.__data__;return yt(t)?n["string"==typeof t?"string":"hash"]:n.map},bt=vt;var wt=vt;var xt=vt;var Dt=vt;var $t=function(e,t){var n=Dt(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this},St=function(){this.size=0,this.__data__={hash:new ht,map:new(gt||mt),string:new ht}},Ot=function(e){var t=bt(this,e).delete(e);return this.size-=t?1:0,t},Ft=function(e){return wt(this,e).get(e)},Et=function(e){return xt(this,e).has(e)},Bt=$t;function kt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}kt.prototype.clear=St,kt.prototype.delete=Ot,kt.prototype.get=Ft,kt.prototype.has=Et,kt.prototype.set=Bt;var Rt=kt;function jt(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(jt.Cache||Rt),n}jt.Cache=Rt;var At=jt;var Mt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ct=/\\(\\)?/g,Tt=function(e){var t=At(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Mt,(function(e,n,r,o){t.push(r?o.replace(Ct,"$1"):n||e)})),t}));var Lt=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o},Ht=Lt,_t=I,Pt=oe,It=W?W.prototype:void 0,Nt=It?It.toString:void 0;var Yt=function e(t){if("string"==typeof t)return t;if(_t(t))return Ht(t,e)+"";if(Pt(t))return Nt?Nt.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},zt=Yt;var Wt=I,Vt=le,qt=Tt,Ut=function(e){return null==e?"":zt(e)};var Zt=oe;var Kt=function(e,t){return Wt(e)?e:Vt(e,t)?[e]:qt(Ut(e))},Xt=function(e){if("string"==typeof e||Zt(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var Qt=function(e,t){for(var n=0,r=(t=Kt(t,e)).length;null!=e&&n<r;)e=e[Xt(t[n++])];return n&&n==r?e:void 0},Gt=Qt;var Jt=R((function(e,t,n){var r=null==e?void 0:Gt(e,t);return void 0===r?n:r}));const en=(e,t,n)=>t?Jt(n,t)||Jt(e,t):n||e,tn=(e,t)=>{const n=t||e.defaultValue;return Jt(e.collections,n)};var nn;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(nn||(nn={}));const rn={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},on=e=>t=>{const n=t.theme,r=tn(rn,n[nn.colorScheme]);return n.options&&n.options.color?en(r,e,n.options.color):en(r,e)},an={Brand:{1:on("Brand.1"),2:on("Brand.2"),3:on("Brand.3"),4:on("Brand.4"),5:on("Brand.5"),6:on("Brand.6")},Primary:on("Primary"),PrimaryDark:on("PrimaryDark"),Secondary:on("Secondary"),Accent:{Light:{1:on("Accent.Light.1"),2:on("Accent.Light.2"),3:on("Accent.Light.3"),4:on("Accent.Light.4"),5:on("Accent.Light.5"),6:on("Accent.Light.6")},Dark:{1:on("Accent.Dark.1"),2:on("Accent.Dark.2"),3:on("Accent.Dark.3")}},Neutral:{1:on("Neutral.1"),2:on("Neutral.2"),3:on("Neutral.3"),4:on("Neutral.4"),5:on("Neutral.5"),6:on("Neutral.6"),7:on("Neutral.7"),8:on("Neutral.8")},Validation:{Green:{Text:on("Validation.Green.Text"),Icon:on("Validation.Green.Icon"),Border:on("Validation.Green.Border"),Background:on("Validation.Green.Background")},Orange:{Text:on("Validation.Orange.Text"),Icon:on("Validation.Orange.Icon"),Border:on("Validation.Orange.Border"),Background:on("Validation.Orange.Background"),Badge:on("Validation.Orange.Badge")},Red:{Text:on("Validation.Red.Text"),Icon:on("Validation.Red.Icon"),Border:on("Validation.Red.Border"),Background:on("Validation.Red.Background")},Blue:{Text:on("Validation.Blue.Text"),Icon:on("Validation.Blue.Icon"),Border:on("Validation.Blue.Border"),Background:on("Validation.Blue.Background")}},Shadow:{Accent:on("Shadow.Accent"),Red:on("Shadow.Red"),Elevation:on("Shadow.Elevation")}},sn={collections:{base:{InputBoxShadow:b`
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
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},cn=e=>t=>{var n;const r=t.theme,o=tn(sn,r[nn.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?en(o,e,r.options.designToken):en(o,e)},ln={InputBoxShadow:cn("InputBoxShadow"),InputErrorBoxShadow:cn("InputErrorBoxShadow"),ElevationBoxShadow:cn("ElevationBoxShadow"),Table:{Header:cn("Table.Header"),Cell:{Primary:cn("Table.Cell.Primary"),Secondary:cn("Table.Cell.Secondary"),Selected:cn("Table.Cell.Selected"),Hover:cn("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:cn("Button.Danger.BackgroundColor"),Hover:cn("Button.Danger.Hover"),Primary:cn("Button.Danger.Primary"),Border:cn("Button.Danger.Border")}}},un={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},dn={collections:{base:{D1:{fontFamily:un.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:un.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:un.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:un.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:un.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:un.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:un.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:un.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:un.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:un.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:un.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:un.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:un.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:un.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},fn=e=>t=>{const n=t.theme,r=tn(dn,n[nn.textStyleScheme]);return n.options&&n.options.textStyle?en(r,e,n.options.textStyle):en(r,e)},pn={D1:{fontFamily:fn("D1.fontFamily"),fontSize:fn("D1.fontSize"),fontWeight:fn("D1.fontWeight"),lineHeight:fn("D1.lineHeight"),letterSpacing:fn("D1.letterSpacing")},D2:{fontFamily:fn("D2.fontFamily"),fontSize:fn("D2.fontSize"),fontWeight:fn("D2.fontWeight"),lineHeight:fn("D2.lineHeight"),letterSpacing:fn("D2.letterSpacing")},D3:{fontFamily:fn("D3.fontFamily"),fontSize:fn("D3.fontSize"),fontWeight:fn("D3.fontWeight"),lineHeight:fn("D3.lineHeight"),letterSpacing:fn("D3.letterSpacing")},D4:{fontFamily:fn("D4.fontFamily"),fontSize:fn("D4.fontSize"),fontWeight:fn("D4.fontWeight"),lineHeight:fn("D4.lineHeight"),letterSpacing:fn("D4.letterSpacing")},DBody:{fontFamily:fn("DBody.fontFamily"),fontSize:fn("DBody.fontSize"),fontWeight:fn("DBody.fontWeight"),lineHeight:fn("DBody.lineHeight"),letterSpacing:fn("DBody.letterSpacing")},H1:{fontFamily:fn("H1.fontFamily"),fontSize:fn("H1.fontSize"),fontWeight:fn("H1.fontWeight"),lineHeight:fn("H1.lineHeight"),letterSpacing:fn("H1.letterSpacing")},H2:{fontFamily:fn("H2.fontFamily"),fontSize:fn("H2.fontSize"),fontWeight:fn("H2.fontWeight"),lineHeight:fn("H2.lineHeight"),letterSpacing:fn("H2.letterSpacing")},H3:{fontFamily:fn("H3.fontFamily"),fontSize:fn("H3.fontSize"),fontWeight:fn("H3.fontWeight"),lineHeight:fn("H3.lineHeight"),letterSpacing:fn("H3.letterSpacing")},H4:{fontFamily:fn("H4.fontFamily"),fontSize:fn("H4.fontSize"),fontWeight:fn("H4.fontWeight"),lineHeight:fn("H4.lineHeight"),letterSpacing:fn("H4.letterSpacing")},H5:{fontFamily:fn("H5.fontFamily"),fontSize:fn("H5.fontSize"),fontWeight:fn("H5.fontWeight"),lineHeight:fn("H5.lineHeight"),letterSpacing:fn("H5.letterSpacing")},H6:{fontFamily:fn("H6.fontFamily"),fontSize:fn("H6.fontSize"),fontWeight:fn("H6.fontWeight"),lineHeight:fn("H6.lineHeight"),letterSpacing:fn("H6.letterSpacing")},Body:{fontFamily:fn("Body.fontFamily"),fontSize:fn("Body.fontSize"),fontWeight:fn("Body.fontWeight"),lineHeight:fn("Body.lineHeight"),letterSpacing:fn("Body.letterSpacing")},BodySmall:{fontFamily:fn("BodySmall.fontFamily"),fontSize:fn("BodySmall.fontSize"),fontWeight:fn("BodySmall.fontWeight"),lineHeight:fn("BodySmall.lineHeight"),letterSpacing:fn("BodySmall.letterSpacing")},XSmall:{fontFamily:fn("XSmall.fontFamily"),fontSize:fn("XSmall.fontSize"),fontWeight:fn("XSmall.fontWeight"),lineHeight:fn("XSmall.lineHeight"),letterSpacing:fn("XSmall.letterSpacing")}},hn=e=>{switch(e){case 700:case"bold":return un.Bold;case 600:case"semibold":return un.Semibold;case 300:case"light":return un.Light;case 400:case"regular":return un.Regular;default:return""}},mn=(e,t)=>n=>{var r;const o=pn[e].fontFamily(n),i=pn[e].fontWeight(n);return Object.values(un).includes(o)?b`
                font-family: ${hn(t)||hn(i)||o};
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
        `},vn=(e,t,n=!1)=>r=>{const o=pn[e],i=o.fontSize(r);return b`
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
`,$n=n=>{var{external:r=!1,children:o}=n,i=B(n,["external","children"]);return e(xn,Object.assign({},i,{children:[o,r&&t(Dn,{})]}))};var Sn;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Sn||(Sn={}));const On="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",Fn=e=>"small"===e?2.5:3;v.div`
    position: relative;
    width: 100%;
    ${e=>{const t=Fn(e.$variant);return b`
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
    height: calc(${e=>Fn(e.$variant)}rem - 2px);
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
        box-shadow: ${ln.InputBoxShadow};
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
                    box-shadow: ${ln.InputErrorBoxShadow};
                }
            `:void 0}
`,v.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: ${On};
    margin-left: 1rem;
`,v(y)`
    color: ${an.Neutral[3]};
    ${e=>{let t=pn.Body.fontSize;return"small"===e.$variant&&(t=pn.BodySmall.fontSize),b`
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
`;function jn(e){return Cn(e)?(e.nodeName||"").toLowerCase():"#document"}function An(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function Mn(e){var t;return null==(t=(Cn(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function Cn(e){return e instanceof Node||e instanceof An(e).Node}function Tn(e){return e instanceof Element||e instanceof An(e).Element}function Ln(e){return e instanceof HTMLElement||e instanceof An(e).HTMLElement}function Hn(e){return"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof An(e).ShadowRoot)}function _n(e){const{overflow:t,overflowX:n,overflowY:r,display:o}=zn(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(o)}function Pn(e){return["table","td","th"].includes(jn(e))}function In(e){const t=Nn(),n=zn(e);return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!t&&!!n.backdropFilter&&"none"!==n.backdropFilter||!t&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some((e=>(n.willChange||"").includes(e)))||["paint","layout","strict","content"].some((e=>(n.contain||"").includes(e)))}function Nn(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function Yn(e){return["html","body","#document"].includes(jn(e))}function zn(e){return An(e).getComputedStyle(e)}function Wn(e){return Tn(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function Vn(e){if("html"===jn(e))return e;const t=e.assignedSlot||e.parentNode||Hn(e)&&e.host||Mn(e);return Hn(t)?t.host:t}function qn(e){const t=Vn(e);return Yn(t)?e.ownerDocument?e.ownerDocument.body:e.body:Ln(t)&&_n(t)?t:qn(t)}function Un(e,t,n){var r;void 0===t&&(t=[]),void 0===n&&(n=!0);const o=qn(e),i=o===(null==(r=e.ownerDocument)?void 0:r.body),a=An(o);return i?t.concat(a,a.visualViewport||[],_n(o)?o:[],a.frameElement&&n?Un(a.frameElement):[]):t.concat(o,Un(o,[],n))}function Zn(e){let t=e.activeElement;for(;null!=(null==(n=t)||null==(n=n.shadowRoot)?void 0:n.activeElement);){var n;t=t.shadowRoot.activeElement}return t}function Kn(e,t){if(!e||!t)return!1;const n=null==t.getRootNode?void 0:t.getRootNode();if(e.contains(t))return!0;if(n&&Hn(n)){let n=t;for(;n;){if(e===n)return!0;n=n.parentNode||n.host}}return!1}function Xn(){const e=navigator.userAgentData;return null!=e&&e.platform?e.platform:navigator.platform}function Qn(){const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?e.brands.map((e=>{let{brand:t,version:n}=e;return t+"/"+n})).join(" "):navigator.userAgent}function Gn(e){return!Qn().includes("jsdom/")&&(!er()&&0===e.width&&0===e.height||er()&&1===e.width&&1===e.height&&0===e.pressure&&0===e.detail&&"mouse"===e.pointerType||e.width<1&&e.height<1&&0===e.pressure&&0===e.detail&&"touch"===e.pointerType)}function Jn(){return/apple/i.test(navigator.vendor)}function er(){const e=/android/i;return e.test(Xn())||e.test(Qn())}function tr(e,t){const n=["mouse","pen"];return t||n.push("",void 0),n.includes(e)}function nr(e){return(null==e?void 0:e.ownerDocument)||document}function rr(e,t){if(null==t)return!1;if("composedPath"in e)return e.composedPath().includes(t);const n=e;return null!=n.target&&t.contains(n.target)}function or(e){return"composedPath"in e?e.composedPath()[0]:e.target}v(Rn)`
    color: ${an.Neutral[3]};
`;const ir="input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";function ar(e){return Ln(e)&&e.matches(ir)}function sr(e){e.preventDefault(),e.stopPropagation()}const cr=Math.min,lr=Math.max,ur=Math.round,dr=Math.floor,fr=e=>({x:e,y:e}),pr={left:"right",right:"left",bottom:"top",top:"bottom"},hr={start:"end",end:"start"};function mr(e,t,n){return lr(e,cr(t,n))}function gr(e,t){return"function"==typeof e?e(t):e}function yr(e){return e.split("-")[0]}function vr(e){return e.split("-")[1]}function br(e){return"x"===e?"y":"x"}function wr(e){return"y"===e?"height":"width"}function xr(e){return["top","bottom"].includes(yr(e))?"y":"x"}function Dr(e){return br(xr(e))}function $r(e){return e.replace(/start|end/g,(e=>hr[e]))}function Sr(e){return e.replace(/left|right|bottom|top/g,(e=>pr[e]))}function Or(e){const{x:t,y:n,width:r,height:o}=e;return{width:r,height:o,top:n,left:t,right:t+r,bottom:n+o,x:t,y:n}}function Fr(e,t,n){let{reference:r,floating:o}=e;const i=xr(t),a=Dr(t),s=wr(a),c=yr(t),l="y"===i,u=r.x+r.width/2-o.width/2,d=r.y+r.height/2-o.height/2,f=r[s]/2-o[s]/2;let p;switch(c){case"top":p={x:u,y:r.y-o.height};break;case"bottom":p={x:u,y:r.y+r.height};break;case"right":p={x:r.x+r.width,y:d};break;case"left":p={x:r.x-o.width,y:d};break;default:p={x:r.x,y:r.y}}switch(vr(t)){case"start":p[a]-=f*(n&&l?-1:1);break;case"end":p[a]+=f*(n&&l?-1:1)}return p}async function Er(e,t){var n;void 0===t&&(t={});const{x:r,y:o,platform:i,rects:a,elements:s,strategy:c}=e,{boundary:l="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:f=!1,padding:p=0}=gr(t,e),h=function(e){return"number"!=typeof e?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(e):{top:e,right:e,bottom:e,left:e}}(p),m=s[f?"floating"===d?"reference":"floating":d],g=Or(await i.getClippingRect({element:null==(n=await(null==i.isElement?void 0:i.isElement(m)))||n?m:m.contextElement||await(null==i.getDocumentElement?void 0:i.getDocumentElement(s.floating)),boundary:l,rootBoundary:u,strategy:c})),y="floating"===d?{x:r,y:o,width:a.floating.width,height:a.floating.height}:a.reference,v=await(null==i.getOffsetParent?void 0:i.getOffsetParent(s.floating)),b=await(null==i.isElement?void 0:i.isElement(v))&&await(null==i.getScale?void 0:i.getScale(v))||{x:1,y:1},w=Or(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:s,rect:y,offsetParent:v,strategy:c}):y);return{top:(g.top-w.top+h.top)/b.y,bottom:(w.bottom-g.bottom+h.bottom)/b.y,left:(g.left-w.left+h.left)/b.x,right:(w.right-g.right+h.right)/b.x}}function Br(e){const t=zn(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const o=Ln(e),i=o?e.offsetWidth:n,a=o?e.offsetHeight:r,s=ur(n)!==i||ur(r)!==a;return s&&(n=i,r=a),{width:n,height:r,$:s}}function kr(e){return Tn(e)?e:e.contextElement}function Rr(e){const t=kr(e);if(!Ln(t))return fr(1);const n=t.getBoundingClientRect(),{width:r,height:o,$:i}=Br(t);let a=(i?ur(n.width):n.width)/r,s=(i?ur(n.height):n.height)/o;return a&&Number.isFinite(a)||(a=1),s&&Number.isFinite(s)||(s=1),{x:a,y:s}}const jr=fr(0);function Ar(e){const t=An(e);return Nn()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:jr}function Mr(e,t,n,r){void 0===t&&(t=!1),void 0===n&&(n=!1);const o=e.getBoundingClientRect(),i=kr(e);let a=fr(1);t&&(r?Tn(r)&&(a=Rr(r)):a=Rr(e));const s=function(e,t,n){return void 0===t&&(t=!1),!(!n||t&&n!==An(e))&&t}(i,n,r)?Ar(i):fr(0);let c=(o.left+s.x)/a.x,l=(o.top+s.y)/a.y,u=o.width/a.x,d=o.height/a.y;if(i){const e=An(i),t=r&&Tn(r)?An(r):r;let n=e,o=n.frameElement;for(;o&&r&&t!==n;){const e=Rr(o),t=o.getBoundingClientRect(),r=zn(o),i=t.left+(o.clientLeft+parseFloat(r.paddingLeft))*e.x,a=t.top+(o.clientTop+parseFloat(r.paddingTop))*e.y;c*=e.x,l*=e.y,u*=e.x,d*=e.y,c+=i,l+=a,n=An(o),o=n.frameElement}}return Or({width:u,height:d,x:c,y:l})}const Cr=[":popover-open",":modal"];function Tr(e){return Cr.some((t=>{try{return e.matches(t)}catch(e){return!1}}))}function Lr(e){return Mr(Mn(e)).left+Wn(e).scrollLeft}function Hr(e,t,n){let r;if("viewport"===t)r=function(e,t){const n=An(e),r=Mn(e),o=n.visualViewport;let i=r.clientWidth,a=r.clientHeight,s=0,c=0;if(o){i=o.width,a=o.height;const e=Nn();(!e||e&&"fixed"===t)&&(s=o.offsetLeft,c=o.offsetTop)}return{width:i,height:a,x:s,y:c}}(e,n);else if("document"===t)r=function(e){const t=Mn(e),n=Wn(e),r=e.ownerDocument.body,o=lr(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),i=lr(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let a=-n.scrollLeft+Lr(e);const s=-n.scrollTop;return"rtl"===zn(r).direction&&(a+=lr(t.clientWidth,r.clientWidth)-o),{width:o,height:i,x:a,y:s}}(Mn(e));else if(Tn(t))r=function(e,t){const n=Mr(e,!0,"fixed"===t),r=n.top+e.clientTop,o=n.left+e.clientLeft,i=Ln(e)?Rr(e):fr(1);return{width:e.clientWidth*i.x,height:e.clientHeight*i.y,x:o*i.x,y:r*i.y}}(t,n);else{const n=Ar(e);r={...t,x:t.x-n.x,y:t.y-n.y}}return Or(r)}function _r(e,t){const n=Vn(e);return!(n===t||!Tn(n)||Yn(n))&&("fixed"===zn(n).position||_r(n,t))}function Pr(e,t,n){const r=Ln(t),o=Mn(t),i="fixed"===n,a=Mr(e,!0,i,t);let s={scrollLeft:0,scrollTop:0};const c=fr(0);if(r||!r&&!i)if(("body"!==jn(t)||_n(o))&&(s=Wn(t)),r){const e=Mr(t,!0,i,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}else o&&(c.x=Lr(o));return{x:a.left+s.scrollLeft-c.x,y:a.top+s.scrollTop-c.y,width:a.width,height:a.height}}function Ir(e){return"static"===zn(e).position}function Nr(e,t){return Ln(e)&&"fixed"!==zn(e).position?t?t(e):e.offsetParent:null}function Yr(e,t){const n=An(e);if(Tr(e))return n;if(!Ln(e)){let t=Vn(e);for(;t&&!Yn(t);){if(Tn(t)&&!Ir(t))return t;t=Vn(t)}return n}let r=Nr(e,t);for(;r&&Pn(r)&&Ir(r);)r=Nr(r,t);return r&&Yn(r)&&Ir(r)&&!In(r)?n:r||function(e){let t=Vn(e);for(;Ln(t)&&!Yn(t);){if(In(t))return t;t=Vn(t)}return null}(e)||n}const zr={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:n,offsetParent:r,strategy:o}=e;const i="fixed"===o,a=Mn(r),s=!!t&&Tr(t.floating);if(r===a||s&&i)return n;let c={scrollLeft:0,scrollTop:0},l=fr(1);const u=fr(0),d=Ln(r);if((d||!d&&!i)&&(("body"!==jn(r)||_n(a))&&(c=Wn(r)),Ln(r))){const e=Mr(r);l=Rr(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-c.scrollLeft*l.x+u.x,y:n.y*l.y-c.scrollTop*l.y+u.y}},getDocumentElement:Mn,getClippingRect:function(e){let{element:t,boundary:n,rootBoundary:r,strategy:o}=e;const i=[..."clippingAncestors"===n?Tr(t)?[]:function(e,t){const n=t.get(e);if(n)return n;let r=Un(e,[],!1).filter((e=>Tn(e)&&"body"!==jn(e))),o=null;const i="fixed"===zn(e).position;let a=i?Vn(e):e;for(;Tn(a)&&!Yn(a);){const t=zn(a),n=In(a);n||"fixed"!==t.position||(o=null),(i?!n&&!o:!n&&"static"===t.position&&o&&["absolute","fixed"].includes(o.position)||_n(a)&&!n&&_r(e,a))?r=r.filter((e=>e!==a)):o=t,a=Vn(a)}return t.set(e,r),r}(t,this._c):[].concat(n),r],a=i[0],s=i.reduce(((e,n)=>{const r=Hr(t,n,o);return e.top=lr(r.top,e.top),e.right=cr(r.right,e.right),e.bottom=cr(r.bottom,e.bottom),e.left=lr(r.left,e.left),e}),Hr(t,a,o));return{width:s.right-s.left,height:s.bottom-s.top,x:s.left,y:s.top}},getOffsetParent:Yr,getElementRects:async function(e){const t=this.getOffsetParent||Yr,n=this.getDimensions,r=await n(e.floating);return{reference:Pr(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}},getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){const{width:t,height:n}=Br(e);return{width:t,height:n}},getScale:Rr,isElement:Tn,isRTL:function(e){return"rtl"===zn(e).direction}};function Wr(e,t,n,r){void 0===r&&(r={});const{ancestorScroll:o=!0,ancestorResize:i=!0,elementResize:a="function"==typeof ResizeObserver,layoutShift:s="function"==typeof IntersectionObserver,animationFrame:c=!1}=r,l=kr(e),u=o||i?[...l?Un(l):[],...Un(t)]:[];u.forEach((e=>{o&&e.addEventListener("scroll",n,{passive:!0}),i&&e.addEventListener("resize",n)}));const d=l&&s?function(e,t){let n,r=null;const o=Mn(e);function i(){var e;clearTimeout(n),null==(e=r)||e.disconnect(),r=null}return function a(s,c){void 0===s&&(s=!1),void 0===c&&(c=1),i();const{left:l,top:u,width:d,height:f}=e.getBoundingClientRect();if(s||t(),!d||!f)return;const p={rootMargin:-dr(u)+"px "+-dr(o.clientWidth-(l+d))+"px "+-dr(o.clientHeight-(u+f))+"px "+-dr(l)+"px",threshold:lr(0,cr(1,c))||1};let h=!0;function m(e){const t=e[0].intersectionRatio;if(t!==c){if(!h)return a();t?a(!1,t):n=setTimeout((()=>{a(!1,1e-7)}),1e3)}h=!1}try{r=new IntersectionObserver(m,{...p,root:o.ownerDocument})}catch(e){r=new IntersectionObserver(m,p)}r.observe(e)}(!0),i}(l,n):null;let f,p=-1,h=null;a&&(h=new ResizeObserver((e=>{let[r]=e;r&&r.target===l&&h&&(h.unobserve(t),cancelAnimationFrame(p),p=requestAnimationFrame((()=>{var e;null==(e=h)||e.observe(t)}))),n()})),l&&!c&&h.observe(l),h.observe(t));let m=c?Mr(e):null;return c&&function t(){const r=Mr(e);!m||r.x===m.x&&r.y===m.y&&r.width===m.width&&r.height===m.height||n();m=r,f=requestAnimationFrame(t)}(),n(),()=>{var e;u.forEach((e=>{o&&e.removeEventListener("scroll",n),i&&e.removeEventListener("resize",n)})),null==d||d(),null==(e=h)||e.disconnect(),h=null,c&&cancelAnimationFrame(f)}}const Vr=function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(t){var n,r;const{x:o,y:i,placement:a,middlewareData:s}=t,c=await async function(e,t){const{placement:n,platform:r,elements:o}=e,i=await(null==r.isRTL?void 0:r.isRTL(o.floating)),a=yr(n),s=vr(n),c="y"===xr(n),l=["left","top"].includes(a)?-1:1,u=i&&c?-1:1,d=gr(t,e);let{mainAxis:f,crossAxis:p,alignmentAxis:h}="number"==typeof d?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return s&&"number"==typeof h&&(p="end"===s?-1*h:h),c?{x:p*u,y:f*l}:{x:f*l,y:p*u}}(t,e);return a===(null==(n=s.offset)?void 0:n.placement)&&null!=(r=s.arrow)&&r.alignmentOffset?{}:{x:o+c.x,y:i+c.y,data:{...c,placement:a}}}}},qr=function(e){return void 0===e&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:r,placement:o}=t,{mainAxis:i=!0,crossAxis:a=!1,limiter:s={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...c}=gr(e,t),l={x:n,y:r},u=await Er(t,c),d=xr(yr(o)),f=br(d);let p=l[f],h=l[d];if(i){const e="y"===f?"bottom":"right";p=mr(p+u["y"===f?"top":"left"],p,p-u[e])}if(a){const e="y"===d?"bottom":"right";h=mr(h+u["y"===d?"top":"left"],h,h-u[e])}const m=s.fn({...t,[f]:p,[d]:h});return{...m,data:{x:m.x-n,y:m.y-r}}}}},Ur=function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var n,r;const{placement:o,middlewareData:i,rects:a,initialPlacement:s,platform:c,elements:l}=t,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:f,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:h="none",flipAlignment:m=!0,...g}=gr(e,t);if(null!=(n=i.arrow)&&n.alignmentOffset)return{};const y=yr(o),v=yr(s)===s,b=await(null==c.isRTL?void 0:c.isRTL(l.floating)),w=f||(v||!m?[Sr(s)]:function(e){const t=Sr(e);return[$r(e),t,$r(t)]}(s));f||"none"===h||w.push(...function(e,t,n,r){const o=vr(e);let i=function(e,t,n){const r=["left","right"],o=["right","left"],i=["top","bottom"],a=["bottom","top"];switch(e){case"top":case"bottom":return n?t?o:r:t?r:o;case"left":case"right":return t?i:a;default:return[]}}(yr(e),"start"===n,r);return o&&(i=i.map((e=>e+"-"+o)),t&&(i=i.concat(i.map($r)))),i}(s,m,h,b));const x=[s,...w],D=await Er(t,g),$=[];let S=(null==(r=i.flip)?void 0:r.overflows)||[];if(u&&$.push(D[y]),d){const e=function(e,t,n){void 0===n&&(n=!1);const r=vr(e),o=Dr(e),i=wr(o);let a="x"===o?r===(n?"end":"start")?"right":"left":"start"===r?"bottom":"top";return t.reference[i]>t.floating[i]&&(a=Sr(a)),[a,Sr(a)]}(o,a,b);$.push(D[e[0]],D[e[1]])}if(S=[...S,{placement:o,overflows:$}],!$.every((e=>e<=0))){var O,F;const e=((null==(O=i.flip)?void 0:O.index)||0)+1,t=x[e];if(t)return{data:{index:e,overflows:S},reset:{placement:t}};let n=null==(F=S.filter((e=>e.overflows[0]<=0)).sort(((e,t)=>e.overflows[1]-t.overflows[1]))[0])?void 0:F.placement;if(!n)switch(p){case"bestFit":{var E;const e=null==(E=S.map((e=>[e.placement,e.overflows.filter((e=>e>0)).reduce(((e,t)=>e+t),0)])).sort(((e,t)=>e[1]-t[1]))[0])?void 0:E[0];e&&(n=e);break}case"initialPlacement":n=s}if(o!==n)return{reset:{placement:n}}}return{}}}},Zr=function(e){return void 0===e&&(e={}),{name:"size",options:e,async fn(t){const{placement:n,rects:r,platform:o,elements:i}=t,{apply:a=(()=>{}),...s}=gr(e,t),c=await Er(t,s),l=yr(n),u=vr(n),d="y"===xr(n),{width:f,height:p}=r.floating;let h,m;"top"===l||"bottom"===l?(h=l,m=u===(await(null==o.isRTL?void 0:o.isRTL(i.floating))?"start":"end")?"left":"right"):(m=l,h="end"===u?"top":"bottom");const g=p-c.top-c.bottom,y=f-c.left-c.right,v=cr(p-c[h],g),b=cr(f-c[m],y),w=!t.middlewareData.shift;let x=v,D=b;if(d?D=u||w?cr(b,y):y:x=u||w?cr(v,g):g,w&&!u){const e=lr(c.left,0),t=lr(c.right,0),n=lr(c.top,0),r=lr(c.bottom,0);d?D=f-2*(0!==e||0!==t?e+t:lr(c.left,c.right)):x=p-2*(0!==n||0!==r?n+r:lr(c.top,c.bottom))}await a({...t,availableWidth:D,availableHeight:x});const $=await o.getDimensions(i.floating);return f!==$.width||p!==$.height?{reset:{rects:!0}}:{}}}},Kr=function(e){return void 0===e&&(e={}),{options:e,fn(t){const{x:n,y:r,placement:o,rects:i,middlewareData:a}=t,{offset:s=0,mainAxis:c=!0,crossAxis:l=!0}=gr(e,t),u={x:n,y:r},d=xr(o),f=br(d);let p=u[f],h=u[d];const m=gr(s,t),g="number"==typeof m?{mainAxis:m,crossAxis:0}:{mainAxis:0,crossAxis:0,...m};if(c){const e="y"===f?"height":"width",t=i.reference[f]-i.floating[e]+g.mainAxis,n=i.reference[f]+i.reference[e]-g.mainAxis;p<t?p=t:p>n&&(p=n)}if(l){var y,v;const e="y"===f?"width":"height",t=["top","left"].includes(yr(o)),n=i.reference[d]-i.floating[e]+(t&&(null==(y=a.offset)?void 0:y[d])||0)+(t?0:g.crossAxis),r=i.reference[d]+i.reference[e]+(t?0:(null==(v=a.offset)?void 0:v[d])||0)-(t?g.crossAxis:0);h<n?h=n:h>r&&(h=r)}return{[f]:p,[d]:h}}}},Xr=(e,t,n)=>{const r=new Map,o={platform:zr,...n},i={...o.platform,_c:r};return(async(e,t,n)=>{const{placement:r="bottom",strategy:o="absolute",middleware:i=[],platform:a}=n,s=i.filter(Boolean),c=await(null==a.isRTL?void 0:a.isRTL(t));let l=await a.getElementRects({reference:e,floating:t,strategy:o}),{x:u,y:d}=Fr(l,r,c),f=r,p={},h=0;for(let n=0;n<s.length;n++){const{name:i,fn:m}=s[n],{x:g,y:y,data:v,reset:b}=await m({x:u,y:d,initialPlacement:r,placement:f,strategy:o,middlewareData:p,rects:l,platform:a,elements:{reference:e,floating:t}});u=null!=g?g:u,d=null!=y?y:d,p={...p,[i]:{...p[i],...v}},b&&h<=50&&(h++,"object"==typeof b&&(b.placement&&(f=b.placement),b.rects&&(l=!0===b.rects?await a.getElementRects({reference:e,floating:t,strategy:o}):b.rects),({x:u,y:d}=Fr(l,f,c))),n=-1)}return{x:u,y:d,placement:f,strategy:o,middlewareData:p}})(e,t,{...o,platform:i})};var Qr="undefined"!=typeof document?i:a;function Gr(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if("function"==typeof e&&e.toString()===t.toString())return!0;let n,r,o;if(e&&t&&"object"==typeof e){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(r=n;0!=r--;)if(!Gr(e[r],t[r]))return!1;return!0}if(o=Object.keys(e),n=o.length,n!==Object.keys(t).length)return!1;for(r=n;0!=r--;)if(!{}.hasOwnProperty.call(t,o[r]))return!1;for(r=n;0!=r--;){const n=o[r];if(("_owner"!==n||!e.$$typeof)&&!Gr(e[n],t[n]))return!1}return!0}return e!=e&&t!=t}function Jr(e){if("undefined"==typeof window)return 1;return(e.ownerDocument.defaultView||window).devicePixelRatio||1}function eo(e,t){const n=Jr(e);return Math.round(t*n)/n}function to(e){const t=r.useRef(e);return Qr((()=>{t.current=e})),t}const no=(e,t)=>({...qr(e),options:[e,t]}),ro=(e,t)=>({...Kr(e),options:[e,t]}),oo=(e,t)=>({...Ur(e),options:[e,t]}),io=(e,t)=>({...Zr(e),options:[e,t]})
/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/;var ao=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"].join(","),so="undefined"==typeof Element,co=so?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,lo=!so&&Element.prototype.getRootNode?function(e){var t;return null==e||null===(t=e.getRootNode)||void 0===t?void 0:t.call(e)}:function(e){return null==e?void 0:e.ownerDocument},uo=function e(t,n){var r;void 0===n&&(n=!0);var o=null==t||null===(r=t.getAttribute)||void 0===r?void 0:r.call(t,"inert");return""===o||"true"===o||n&&t&&e(t.parentNode)},fo=function e(t,n,r){for(var o=[],i=Array.from(t);i.length;){var a=i.shift();if(!uo(a,!1))if("SLOT"===a.tagName){var s=a.assignedElements(),c=e(s.length?s:a.children,!0,r);r.flatten?o.push.apply(o,c):o.push({scopeParent:a,candidates:c})}else{co.call(a,ao)&&r.filter(a)&&(n||!t.includes(a))&&o.push(a);var l=a.shadowRoot||"function"==typeof r.getShadowRoot&&r.getShadowRoot(a),u=!uo(l,!1)&&(!r.shadowRootFilter||r.shadowRootFilter(a));if(l&&u){var d=e(!0===l?a.children:l.children,!0,r);r.flatten?o.push.apply(o,d):o.push({scopeParent:a,candidates:d})}else i.unshift.apply(i,a.children)}}return o},po=function(e){return!isNaN(parseInt(e.getAttribute("tabindex"),10))},ho=function(e){if(!e)throw new Error("No node provided");return e.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||function(e){var t,n=null==e||null===(t=e.getAttribute)||void 0===t?void 0:t.call(e,"contenteditable");return""===n||"true"===n}(e))&&!po(e)?0:e.tabIndex},mo=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},go=function(e){return"INPUT"===e.tagName},yo=function(e){return function(e){return go(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t,n=e.form||lo(e),r=function(e){return n.querySelectorAll('input[type="radio"][name="'+e+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)t=r(window.CSS.escape(e.name));else try{t=r(e.name)}catch(e){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",e.message),!1}var o=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]}(t,e.form);return!o||o===e}(e)},vo=function(e){var t=e.getBoundingClientRect(),n=t.width,r=t.height;return 0===n&&0===r},bo=function(e,t){var n=t.displayCheck,r=t.getShadowRoot;if("hidden"===getComputedStyle(e).visibility)return!0;var o=co.call(e,"details>summary:first-of-type")?e.parentElement:e;if(co.call(o,"details:not([open]) *"))return!0;if(n&&"full"!==n&&"legacy-full"!==n){if("non-zero-area"===n)return vo(e)}else{if("function"==typeof r){for(var i=e;e;){var a=e.parentElement,s=lo(e);if(a&&!a.shadowRoot&&!0===r(a))return vo(e);e=e.assignedSlot?e.assignedSlot:a||s===e.ownerDocument?a:s.host}e=i}if(function(e){var t,n,r,o,i=e&&lo(e),a=null===(t=i)||void 0===t?void 0:t.host,s=!1;if(i&&i!==e)for(s=!!(null!==(n=a)&&void 0!==n&&null!==(r=n.ownerDocument)&&void 0!==r&&r.contains(a)||null!=e&&null!==(o=e.ownerDocument)&&void 0!==o&&o.contains(e));!s&&a;){var c,l,u;s=!(null===(l=a=null===(c=i=lo(a))||void 0===c?void 0:c.host)||void 0===l||null===(u=l.ownerDocument)||void 0===u||!u.contains(a))}return s}(e))return!e.getClientRects().length;if("legacy-full"!==n)return!0}return!1},wo=function(e,t){return!(t.disabled||uo(t)||function(e){return go(e)&&"hidden"===e.type}(t)||bo(t,e)||function(e){return"DETAILS"===e.tagName&&Array.prototype.slice.apply(e.children).some((function(e){return"SUMMARY"===e.tagName}))}(t)||function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if("FIELDSET"===t.tagName&&t.disabled){for(var n=0;n<t.children.length;n++){var r=t.children.item(n);if("LEGEND"===r.tagName)return!!co.call(t,"fieldset[disabled] *")||!r.contains(e)}return!0}t=t.parentElement}return!1}(t))},xo=function(e,t){return!(yo(t)||ho(t)<0||!wo(e,t))},Do=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return!!(isNaN(t)||t>=0)},$o=function e(t){var n=[],r=[];return t.forEach((function(t,o){var i=!!t.scopeParent,a=i?t.scopeParent:t,s=function(e,t){var n=ho(e);return n<0&&t&&!po(e)?0:n}(a,i),c=i?e(t.candidates):a;0===s?i?n.push.apply(n,c):n.push(a):r.push({documentOrder:o,tabIndex:s,item:t,isScope:i,content:c})})),r.sort(mo).reduce((function(e,t){return t.isScope?e.push.apply(e,t.content):e.push(t.content),e}),[]).concat(n)},So=function(e,t){var n;return n=(t=t||{}).getShadowRoot?fo([e],t.includeContainer,{filter:xo.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:Do}):function(e,t,n){if(uo(e))return[];var r=Array.prototype.slice.apply(e.querySelectorAll(ao));return t&&co.call(e,ao)&&r.unshift(e),r.filter(n)}(e,t.includeContainer,xo.bind(null,t)),$o(n)},Oo=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return!1!==co.call(e,ao)&&xo(t,e)};const Fo={...r},Eo=Fo.useInsertionEffect||(e=>e());function Bo(e){const t=r.useRef((()=>{if("production"!==process.env.NODE_ENV)throw new Error("Cannot call an event handler while rendering.")}));return Eo((()=>{t.current=e})),r.useCallback((function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return null==t.current?void 0:t.current(...n)}),[])}let ko=0;function Ro(e,t){void 0===t&&(t={});const{preventScroll:n=!1,cancelPrevious:r=!0,sync:o=!1}=t;r&&cancelAnimationFrame(ko);const i=()=>null==e?void 0:e.focus({preventScroll:n});o?i():ko=requestAnimationFrame(i)}var jo="undefined"!=typeof document?i:a;function Ao(){return Ao=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ao.apply(this,arguments)}let Mo=!1,Co=0;const To=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+Co++;const Lo=Fo.useId||function(){const[e,t]=r.useState((()=>Mo?To():void 0));return jo((()=>{null==e&&t(To())}),[]),r.useEffect((()=>{Mo=!0}),[]),e};let Ho;"production"!==process.env.NODE_ENV&&(Ho=new Set);const _o=r.createContext(null),Po=r.createContext(null),Io=()=>{var e;return(null==(e=r.useContext(_o))?void 0:e.id)||null},No=()=>r.useContext(Po);function Yo(e){return"data-floating-ui-"+e}function zo(e){const t=s(e);return jo((()=>{t.current=e})),t}function Wo(e,t){let n=e.filter((e=>{var n;return e.parentId===t&&(null==(n=e.context)?void 0:n.open)})),r=n;for(;r.length;)r=e.filter((e=>{var t;return null==(t=r)?void 0:t.some((t=>{var n;return e.parentId===t.id&&(null==(n=e.context)?void 0:n.open)}))})),n=n.concat(r);return n}let Vo=new WeakMap,qo=new WeakSet,Uo={},Zo=0;const Ko=e=>e&&(e.host||Ko(e.parentNode)),Xo=(e,t)=>t.map((t=>{if(e.contains(t))return t;const n=Ko(t);return e.contains(n)?n:null})).filter((e=>null!=e));function Qo(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);const r=nr(e[0]).body;return function(e,t,n,r){const o="data-floating-ui-inert",i=r?"inert":n?"aria-hidden":null,a=Xo(t,e),s=new Set,c=new Set(a),l=[];Uo[o]||(Uo[o]=new WeakMap);const u=Uo[o];return a.forEach((function e(t){t&&!s.has(t)&&(s.add(t),t.parentNode&&e(t.parentNode))})),function e(t){t&&!c.has(t)&&[].forEach.call(t.children,(t=>{if("script"!==jn(t))if(s.has(t))e(t);else{const e=i?t.getAttribute(i):null,n=null!==e&&"false"!==e,r=(Vo.get(t)||0)+1,a=(u.get(t)||0)+1;Vo.set(t,r),u.set(t,a),l.push(t),1===r&&n&&qo.add(t),1===a&&t.setAttribute(o,""),!n&&i&&t.setAttribute(i,"true")}}))}(t),s.clear(),Zo++,()=>{l.forEach((e=>{const t=(Vo.get(e)||0)-1,n=(u.get(e)||0)-1;Vo.set(e,t),u.set(e,n),t||(!qo.has(e)&&i&&e.removeAttribute(i),qo.delete(e)),n||e.removeAttribute(o)})),Zo--,Zo||(Vo=new WeakMap,Vo=new WeakMap,qo=new WeakSet,Uo={})}}(e.concat(Array.from(r.querySelectorAll("[aria-live]"))),r,t,n)}const Go=()=>({getShadowRoot:!0,displayCheck:"function"==typeof ResizeObserver&&ResizeObserver.toString().includes("[native code]")?"full":"none"});function Jo(e,t){const n=So(e,Go());"prev"===t&&n.reverse();const r=n.indexOf(Zn(nr(e)));return n.slice(r+1)[0]}function ei(){return Jo(document.body,"next")}function ti(){return Jo(document.body,"prev")}function ni(e,t){const n=t||e.currentTarget,r=e.relatedTarget;return!r||!Kn(n,r)}function ri(e){So(e,Go()).forEach((e=>{e.dataset.tabindex=e.getAttribute("tabindex")||"",e.setAttribute("tabindex","-1")}))}function oi(e){e.querySelectorAll("[data-tabindex]").forEach((e=>{const t=e.dataset.tabindex;delete e.dataset.tabindex,t?e.setAttribute("tabindex",t):e.removeAttribute("tabindex")}))}const ii={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"fixed",whiteSpace:"nowrap",width:"1px",top:0,left:0};function ai(e){"Tab"===e.key&&(e.target,clearTimeout(undefined))}const si=r.forwardRef((function(e,t){const[n,o]=r.useState();jo((()=>(Jn()&&o("button"),document.addEventListener("keydown",ai),()=>{document.removeEventListener("keydown",ai)})),[]);const i={ref:t,tabIndex:0,role:n,"aria-hidden":!n||void 0,[Yo("focus-guard")]:"",style:ii};return r.createElement("span",Ao({},e,i))})),ci=r.createContext(null),li=Yo("portal");function ui(e){const{children:t,id:n,root:o=null,preserveTabOrder:i=!0}=e,a=function(e){void 0===e&&(e={});const{id:t,root:n}=e,o=Lo(),i=di(),[a,s]=r.useState(null),c=r.useRef(null);return jo((()=>()=>{null==a||a.remove(),queueMicrotask((()=>{c.current=null}))}),[a]),jo((()=>{if(!o)return;if(c.current)return;const e=t?document.getElementById(t):null;if(!e)return;const n=document.createElement("div");n.id=o,n.setAttribute(li,""),e.appendChild(n),c.current=n,s(n)}),[t,o]),jo((()=>{if(!o)return;if(c.current)return;let e=n||(null==i?void 0:i.portalNode);e&&!Tn(e)&&(e=e.current),e=e||document.body;let r=null;t&&(r=document.createElement("div"),r.id=t,e.appendChild(r));const a=document.createElement("div");a.id=o,a.setAttribute(li,""),e=r||e,e.appendChild(a),c.current=a,s(a)}),[t,n,o,i]),a}({id:n,root:o}),[s,c]=r.useState(null),l=r.useRef(null),u=r.useRef(null),d=r.useRef(null),f=r.useRef(null),p=!!s&&!s.modal&&s.open&&i&&!(!o&&!a);return r.useEffect((()=>{if(a&&i&&(null==s||!s.modal))return a.addEventListener("focusin",e,!0),a.addEventListener("focusout",e,!0),()=>{a.removeEventListener("focusin",e,!0),a.removeEventListener("focusout",e,!0)};function e(e){if(a&&ni(e)){("focusin"===e.type?oi:ri)(a)}}}),[a,i,null==s?void 0:s.modal]),r.createElement(ci.Provider,{value:r.useMemo((()=>({preserveTabOrder:i,beforeOutsideRef:l,afterOutsideRef:u,beforeInsideRef:d,afterInsideRef:f,portalNode:a,setFocusManagerState:c})),[i,a])},p&&a&&r.createElement(si,{"data-type":"outside",ref:l,onFocus:e=>{if(ni(e,a)){var t;null==(t=d.current)||t.focus()}else{const e=ti()||(null==s?void 0:s.refs.domReference.current);null==e||e.focus()}}}),p&&a&&r.createElement("span",{"aria-owns":a.id,style:ii}),a&&$(t,a),p&&a&&r.createElement(si,{"data-type":"outside",ref:u,onFocus:e=>{if(ni(e,a)){var t;null==(t=f.current)||t.focus()}else{const t=ei()||(null==s?void 0:s.refs.domReference.current);null==t||t.focus(),(null==s?void 0:s.closeOnFocusOut)&&(null==s||s.onOpenChange(!1,e.nativeEvent))}}}))}const di=()=>r.useContext(ci),fi=20;let pi=[];function hi(e){pi=pi.filter((e=>e.isConnected));let t=e;if(t&&"body"!==jn(t)){if(!Oo(t,Go())){const e=So(t,Go())[0];e&&(t=e)}pi.push(t),pi.length>fi&&(pi=pi.slice(-fi))}}function mi(){return pi.slice().reverse().find((e=>e.isConnected))}const gi=r.forwardRef((function(e,t){return r.createElement("button",Ao({},e,{type:"button",ref:t,tabIndex:-1,style:ii}))}));function yi(e){const{context:t,children:n,disabled:o=!1,order:i=["content"],guards:a=!0,initialFocus:s=0,returnFocus:c=!0,modal:l=!0,visuallyHiddenDismiss:u=!1,closeOnFocusOut:d=!0}=e,{open:f,refs:p,nodeId:h,onOpenChange:m,events:g,dataRef:y,elements:{domReference:v,floating:b}}=t,w="number"==typeof s&&s<0,x=!!(D=v)&&"combobox"===D.getAttribute("role")&&ar(D)&&w;var D;const $="undefined"==typeof HTMLElement||!("inert"in HTMLElement.prototype)||a,S=zo(i),O=zo(s),F=zo(c),E=No(),B=di(),k=r.useRef(null),R=r.useRef(null),j=r.useRef(!1),A=r.useRef(!1),M=null!=B,C=r.useCallback((function(e){return void 0===e&&(e=b),e?So(e,Go()):[]}),[b]),T=r.useCallback((e=>{const t=C(e);return S.current.map((e=>v&&"reference"===e?v:b&&"floating"===e?b:t)).filter(Boolean).flat()}),[v,b,S,C]);function L(e){return!o&&u&&l?r.createElement(gi,{ref:"start"===e?k:R,onClick:e=>m(!1,e.nativeEvent)},"string"==typeof u?u:"Dismiss"):null}r.useEffect((()=>{if(o||!l)return;function e(e){if("Tab"===e.key){Kn(b,Zn(nr(b)))&&0===C().length&&!x&&sr(e);const t=T(),n=or(e);"reference"===S.current[0]&&n===v&&(sr(e),e.shiftKey?Ro(t[t.length-1]):Ro(t[1])),"floating"===S.current[1]&&n===b&&e.shiftKey&&(sr(e),Ro(t[0]))}}const t=nr(b);return t.addEventListener("keydown",e),()=>{t.removeEventListener("keydown",e)}}),[o,v,b,l,S,x,C,T]),r.useEffect((()=>{if(!o&&d)return b&&Ln(v)?(v.addEventListener("focusout",t),v.addEventListener("pointerdown",e),!l&&b.addEventListener("focusout",t),()=>{v.removeEventListener("focusout",t),v.removeEventListener("pointerdown",e),!l&&b.removeEventListener("focusout",t)}):void 0;function e(){A.current=!0,setTimeout((()=>{A.current=!1}))}function t(e){const t=e.relatedTarget;queueMicrotask((()=>{const n=!(Kn(v,t)||Kn(b,t)||Kn(t,b)||Kn(null==B?void 0:B.portalNode,t)||null!=t&&t.hasAttribute(Yo("focus-guard"))||E&&(Wo(E.nodesRef.current,h).find((e=>{var n,r;return Kn(null==(n=e.context)?void 0:n.elements.floating,t)||Kn(null==(r=e.context)?void 0:r.elements.domReference,t)}))||function(e,t){var n;let r=[],o=null==(n=e.find((e=>e.id===t)))?void 0:n.parentId;for(;o;){const t=e.find((e=>e.id===o));o=null==t?void 0:t.parentId,t&&(r=r.concat(t))}return r}(E.nodesRef.current,h).find((e=>{var n,r;return(null==(n=e.context)?void 0:n.elements.floating)===t||(null==(r=e.context)?void 0:r.elements.domReference)===t}))));t&&n&&!A.current&&t!==mi()&&(j.current=!0,m(!1,e))}))}}),[o,v,b,l,h,E,B,m,d]),r.useEffect((()=>{var e;if(o)return;const t=Array.from((null==B||null==(e=B.portalNode)?void 0:e.querySelectorAll("["+Yo("portal")+"]"))||[]);if(b){const e=[b,...t,k.current,R.current,S.current.includes("reference")||x?v:null].filter((e=>null!=e)),n=l||x?Qo(e,$,!$):Qo(e);return()=>{n()}}}),[o,v,b,l,S,B,x,$]),jo((()=>{if(o||!b)return;const e=Zn(nr(b));queueMicrotask((()=>{const t=T(b),n=O.current,r=("number"==typeof n?t[n]:n.current)||b,o=Kn(b,e);w||o||!f||Ro(r,{preventScroll:r===b})}))}),[o,f,b,w,T,O]),jo((()=>{if(o||!b)return;let e=!1;const t=nr(b),n=Zn(t);let r=y.current.openEvent;function i(t){let{open:n,reason:o,event:i,nested:a}=t;n&&(r=i),"escape-key"===o&&p.domReference.current&&hi(p.domReference.current),"hover"===o&&"mouseleave"===i.type&&(j.current=!0),"outside-press"===o&&(a?(j.current=!1,e=!0):j.current=!(function(e){return!(0!==e.mozInputSource||!e.isTrusted)||(er()&&e.pointerType?"click"===e.type&&1===e.buttons:0===e.detail&&!e.pointerType)}(i)||Gn(i)))}return hi(n),g.on("openchange",i),()=>{g.off("openchange",i);const n=Zn(t),o=Kn(b,n)||E&&Wo(E.nodesRef.current,h).some((e=>{var t;return Kn(null==(t=e.context)?void 0:t.elements.floating,n)}));(o||r&&["click","mousedown"].includes(r.type))&&p.domReference.current&&hi(p.domReference.current);const a=mi();F.current&&!j.current&&Ln(a)&&(a===n||n===t.body||o)&&Ro(a,{cancelPrevious:!1,preventScroll:e})}}),[o,b,F,y,p,g,E,h]),jo((()=>{if(!o&&B)return B.setFocusManagerState({modal:l,closeOnFocusOut:d,open:f,onOpenChange:m,refs:p}),()=>{B.setFocusManagerState(null)}}),[o,B,l,f,m,p,d]),jo((()=>{if(o||!b||"function"!=typeof MutationObserver||w)return;const e=()=>{const e=b.getAttribute("tabindex");S.current.includes("floating")||Zn(nr(b))!==p.domReference.current&&0===C().length?"0"!==e&&b.setAttribute("tabindex","0"):"-1"!==e&&b.setAttribute("tabindex","-1")};e();const t=new MutationObserver(e);return t.observe(b,{childList:!0,subtree:!0,attributes:!0}),()=>{t.disconnect()}}),[o,b,p,S,C,w]);const H=!o&&$&&(M||l);return r.createElement(r.Fragment,null,H&&r.createElement(si,{"data-type":"inside",ref:null==B?void 0:B.beforeInsideRef,onFocus:e=>{if(l){const e=T();Ro("reference"===i[0]?e[0]:e[e.length-1])}else if(null!=B&&B.preserveTabOrder&&B.portalNode)if(j.current=!1,ni(e,B.portalNode)){const e=ei()||v;null==e||e.focus()}else{var t;null==(t=B.beforeOutsideRef.current)||t.focus()}}}),!x&&L("start"),n,L("end"),H&&r.createElement(si,{"data-type":"inside",ref:null==B?void 0:B.afterInsideRef,onFocus:e=>{if(l)Ro(T()[0]);else if(null!=B&&B.preserveTabOrder&&B.portalNode)if(d&&(j.current=!0),ni(e,B.portalNode)){const e=ti()||v;null==e||e.focus()}else{var t;null==(t=B.afterOutsideRef.current)||t.focus()}}}))}function vi(e){return Ln(e.target)&&"BUTTON"===e.target.tagName}function bi(e){return ar(e)}const wi={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},xi={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},Di=e=>{var t,n;return{escapeKey:"boolean"==typeof e?e:null!=(t=null==e?void 0:e.escapeKey)&&t,outsidePress:"boolean"==typeof e?e:null==(n=null==e?void 0:e.outsidePress)||n}};function $i(e){const{open:t=!1,onOpenChange:n,elements:o}=e,i=Lo(),a=r.useRef({}),[s]=r.useState((()=>function(){const e=new Map;return{emit(t,n){var r;null==(r=e.get(t))||r.forEach((e=>e(n)))},on(t,n){e.set(t,[...e.get(t)||[],n])},off(t,n){var r;e.set(t,(null==(r=e.get(t))?void 0:r.filter((e=>e!==n)))||[])}}}())),c=null!=Io();if("production"!==process.env.NODE_ENV){const e=o.reference;e&&!Tn(e)&&function(){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];const o="Floating UI: "+n.join(" ");var i;null!=(e=Ho)&&e.has(o)||(null==(i=Ho)||i.add(o),console.error(o))}("Cannot pass a virtual element to the `elements.reference` option,","as it must be a real DOM element. Use `refs.setPositionReference()`","instead.")}const[l,u]=r.useState(o.reference),d=Bo(((e,t,r)=>{a.current.openEvent=e?t:void 0,s.emit("openchange",{open:e,event:t,reason:r,nested:c}),null==n||n(e,t,r)})),f=r.useMemo((()=>({setPositionReference:u})),[]),p=r.useMemo((()=>({reference:l||o.reference||null,floating:o.floating||null,domReference:o.reference})),[l,o.reference,o.floating]);return r.useMemo((()=>({dataRef:a,open:t,onOpenChange:d,elements:p,events:s,floatingId:i,refs:f})),[t,d,p,s,i,f])}function Si(e){void 0===e&&(e={});const{nodeId:t}=e,n=$i({...e,elements:{reference:null,floating:null,...e.elements}}),o=e.rootContext||n,i=o.elements,[a,s]=r.useState(null),[c,l]=r.useState(null),u=(null==i?void 0:i.reference)||a,d=r.useRef(null),f=No();jo((()=>{u&&(d.current=u)}),[u]);const p=function(e){void 0===e&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:o=[],platform:i,elements:{reference:a,floating:s}={},transform:c=!0,whileElementsMounted:l,open:u}=e,[d,f]=r.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[p,h]=r.useState(o);Gr(p,o)||h(o);const[m,g]=r.useState(null),[y,v]=r.useState(null),b=r.useCallback((e=>{e!==S.current&&(S.current=e,g(e))}),[]),w=r.useCallback((e=>{e!==O.current&&(O.current=e,v(e))}),[]),x=a||m,$=s||y,S=r.useRef(null),O=r.useRef(null),F=r.useRef(d),E=null!=l,B=to(l),k=to(i),R=r.useCallback((()=>{if(!S.current||!O.current)return;const e={placement:t,strategy:n,middleware:p};k.current&&(e.platform=k.current),Xr(S.current,O.current,e).then((e=>{const t={...e,isPositioned:!0};j.current&&!Gr(F.current,t)&&(F.current=t,D.flushSync((()=>{f(t)})))}))}),[p,t,n,k]);Qr((()=>{!1===u&&F.current.isPositioned&&(F.current.isPositioned=!1,f((e=>({...e,isPositioned:!1}))))}),[u]);const j=r.useRef(!1);Qr((()=>(j.current=!0,()=>{j.current=!1})),[]),Qr((()=>{if(x&&(S.current=x),$&&(O.current=$),x&&$){if(B.current)return B.current(x,$,R);R()}}),[x,$,R,B,E]);const A=r.useMemo((()=>({reference:S,floating:O,setReference:b,setFloating:w})),[b,w]),M=r.useMemo((()=>({reference:x,floating:$})),[x,$]),C=r.useMemo((()=>{const e={position:n,left:0,top:0};if(!M.floating)return e;const t=eo(M.floating,d.x),r=eo(M.floating,d.y);return c?{...e,transform:"translate("+t+"px, "+r+"px)",...Jr(M.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:t,top:r}}),[n,c,M.floating,d.x,d.y]);return r.useMemo((()=>({...d,update:R,refs:A,elements:M,floatingStyles:C})),[d,R,A,M,C])}({...e,elements:{...i,...c&&{reference:c}}}),h=r.useCallback((e=>{const t=Tn(e)?{getBoundingClientRect:()=>e.getBoundingClientRect(),contextElement:e}:e;l(t),p.refs.setReference(t)}),[p.refs]),m=r.useCallback((e=>{(Tn(e)||null===e)&&(d.current=e,s(e)),(Tn(p.refs.reference.current)||null===p.refs.reference.current||null!==e&&!Tn(e))&&p.refs.setReference(e)}),[p.refs]),g=r.useMemo((()=>({...p.refs,setReference:m,setPositionReference:h,domReference:d})),[p.refs,m,h]),y=r.useMemo((()=>({...p.elements,domReference:u})),[p.elements,u]),v=r.useMemo((()=>({...p,...o,refs:g,elements:y,nodeId:t})),[p,g,y,t,o]);return jo((()=>{o.dataRef.current.floatingContext=v;const e=null==f?void 0:f.nodesRef.current.find((e=>e.id===t));e&&(e.context=v)})),r.useMemo((()=>({...p,context:v,refs:g,elements:y})),[p,g,y,v])}function Oi(e,t){void 0===t&&(t={});const{open:n,onOpenChange:o,events:i,dataRef:a,elements:{domReference:s}}=e,{enabled:c=!0,visibleOnly:l=!0}=t,u=r.useRef(!1),d=r.useRef(),f=r.useRef(!0);return r.useEffect((()=>{if(!c)return;const e=An(s);function t(){!n&&Ln(s)&&s===Zn(nr(s))&&(u.current=!0)}function r(){f.current=!0}return e.addEventListener("blur",t),e.addEventListener("keydown",r,!0),()=>{e.removeEventListener("blur",t),e.removeEventListener("keydown",r,!0)}}),[s,n,c]),r.useEffect((()=>{if(c)return i.on("openchange",e),()=>{i.off("openchange",e)};function e(e){let{reason:t}=e;"reference-press"!==t&&"escape-key"!==t||(u.current=!0)}}),[i,c]),r.useEffect((()=>()=>{clearTimeout(d.current)}),[]),r.useMemo((()=>c?{reference:{onPointerDown(e){Gn(e.nativeEvent)||(f.current=!1)},onMouseLeave(){u.current=!1},onFocus(e){if(u.current)return;const t=or(e.nativeEvent);if(l&&Tn(t))try{if(Jn()&&Xn().toLowerCase().startsWith("mac")&&!navigator.maxTouchPoints)throw Error();if(!t.matches(":focus-visible"))return}catch(e){if(!f.current&&!ar(t))return}o(!0,e.nativeEvent,"focus")},onBlur(e){u.current=!1;const t=e.relatedTarget,n=Tn(t)&&t.hasAttribute(Yo("focus-guard"))&&"outside"===t.getAttribute("data-type");d.current=window.setTimeout((()=>{var r;const i=Zn(s?s.ownerDocument:document);(t||i!==s)&&(Kn(null==(r=a.current.floatingContext)?void 0:r.refs.floating.current,i)||Kn(s,i)||n||o(!1,e.nativeEvent,"focus"))}))}}}:{}),[c,l,a,s,o])}const Fi="active",Ei="selected";function Bi(e,t,n){const r=new Map,o="item"===n;let i=e;if(o&&e){const{[Fi]:t,[Ei]:n,...r}=e;i=r}return{..."floating"===n&&{tabIndex:-1},...i,...t.map((t=>{const r=t?t[n]:null;return"function"==typeof r?e?r(e):null:r})).concat(e).reduce(((e,t)=>t?(Object.entries(t).forEach((t=>{let[n,i]=t;var a;o&&[Fi,Ei].includes(n)||(0===n.indexOf("on")?(r.has(n)||r.set(n,[]),"function"==typeof i&&(null==(a=r.get(n))||a.push(i),e[n]=function(){for(var e,t=arguments.length,o=new Array(t),i=0;i<t;i++)o[i]=arguments[i];return null==(e=r.get(n))?void 0:e.map((e=>e(...o))).find((e=>void 0!==e))})):e[n]=i)})),e):e),{})}}const ki=e=>e.replace(/[A-Z]+(?![a-z])|[A-Z]/g,((e,t)=>(t?"-":"")+e.toLowerCase()));function Ri(e,t){return"function"==typeof e?e(t):e}function ji(e,t){void 0===t&&(t={});const{open:n,elements:{floating:o}}=e,{duration:i=250}=t,a=("number"==typeof i?i:i.close)||0,[s,c]=r.useState("unmounted"),l=function(e,t){const[n,o]=r.useState(e);return e&&!n&&o(!0),r.useEffect((()=>{if(!e&&n){const e=setTimeout((()=>o(!1)),t);return()=>clearTimeout(e)}}),[e,n,t]),n}(n,a);return l||"close"!==s||c("unmounted"),jo((()=>{if(o){if(n){c("initial");const e=requestAnimationFrame((()=>{c("open")}));return()=>{cancelAnimationFrame(e)}}c("close")}}),[n,o]),{isMounted:l,status:s}}const Ai=({enabled:o,isOpen:i,onOpen:a,onClose:c,onDismiss:l,renderElement:u,renderDropdown:d,zIndex:f=50})=>{const p=s(null),{refs:h,floatingStyles:m,context:g}=Si({open:i,onOpenChange:(e,t,n)=>{"escape-key"===n?null==l||l():e&&!i?null==a||a():!e&&i&&(null==c||c())},whileElementsMounted:Wr,placement:"bottom-start",middleware:[(y=16,{...Vr(y),options:[y,v]}),oo(),no({limiter:ro()}),io({apply({rects:e,elements:t}){Object.assign(t.floating.style,{width:`${e.reference.width}px`})}})]});var y,v;const{isMounted:b,styles:w}=function(e,t){void 0===t&&(t={});const{initial:n={opacity:0},open:o,close:i,common:a,duration:s=250}=t,c=e.placement,l=c.split("-")[0],u=r.useMemo((()=>({side:l,placement:c})),[l,c]),d="number"==typeof s,f=(d?s:s.open)||0,p=(d?s:s.close)||0,[h,m]=r.useState((()=>({...Ri(a,u),...Ri(n,u)}))),{isMounted:g,status:y}=ji(e,{duration:s}),v=zo(n),b=zo(o),w=zo(i),x=zo(a);return jo((()=>{const e=Ri(v.current,u),t=Ri(w.current,u),n=Ri(x.current,u),r=Ri(b.current,u)||Object.keys(e).reduce(((e,t)=>(e[t]="",e)),{});if("initial"===y&&m((t=>({transitionProperty:t.transitionProperty,...n,...e}))),"open"===y&&m({transitionProperty:Object.keys(r).map(ki).join(","),transitionDuration:f+"ms",...n,...r}),"close"===y){const r=t||e;m({transitionProperty:Object.keys(r).map(ki).join(","),transitionDuration:p+"ms",...n,...r})}}),[p,w,v,b,x,f,y,u]),{isMounted:g,styles:h}}(g,{initial:{opacity:0},open:{opacity:1},duration:300}),x=function(e,t){void 0===t&&(t={});const{open:n,onOpenChange:o,dataRef:i,elements:{domReference:a}}=e,{enabled:s=!0,event:c="click",toggle:l=!0,ignoreMouse:u=!1,keyboardHandlers:d=!0}=t,f=r.useRef(),p=r.useRef(!1);return r.useMemo((()=>s?{reference:{onPointerDown(e){f.current=e.pointerType},onMouseDown(e){0===e.button&&(tr(f.current,!0)&&u||"click"!==c&&(!n||!l||i.current.openEvent&&"mousedown"!==i.current.openEvent.type?(e.preventDefault(),o(!0,e.nativeEvent,"click")):o(!1,e.nativeEvent,"click")))},onClick(e){"mousedown"===c&&f.current?f.current=void 0:tr(f.current,!0)&&u||(!n||!l||i.current.openEvent&&"click"!==i.current.openEvent.type?o(!0,e.nativeEvent,"click"):o(!1,e.nativeEvent,"click"))},onKeyDown(e){f.current=void 0,e.defaultPrevented||!d||vi(e)||(" "!==e.key||bi(a)||(e.preventDefault(),p.current=!0),"Enter"===e.key&&o(!n||!l,e.nativeEvent,"click"))},onKeyUp(e){e.defaultPrevented||!d||vi(e)||bi(a)||" "===e.key&&p.current&&(p.current=!1,o(!n||!l,e.nativeEvent,"click"))}}}:{}),[s,i,c,u,d,a,l,n,o])}(g,{enabled:o}),D=Oi(g,{enabled:o}),$=function(e,t){void 0===t&&(t={});const{open:n,onOpenChange:o,elements:{reference:i,domReference:a,floating:s},dataRef:c}=e,{enabled:l=!0,escapeKey:u=!0,outsidePress:d=!0,outsidePressEvent:f="pointerdown",referencePress:p=!1,referencePressEvent:h="pointerdown",ancestorScroll:m=!1,bubbles:g,capture:y}=t,v=No(),b=Bo("function"==typeof d?d:()=>!1),w="function"==typeof d?b:d,x=r.useRef(!1),D=r.useRef(!1),{escapeKey:$,outsidePress:S}=Di(g),{escapeKey:O,outsidePress:F}=Di(y),E=Bo((e=>{var t;if(!n||!l||!u||"Escape"!==e.key)return;const r=null==(t=c.current.floatingContext)?void 0:t.nodeId,i=v?Wo(v.nodesRef.current,r):[];if(!$&&(e.stopPropagation(),i.length>0)){let e=!0;if(i.forEach((t=>{var n;null==(n=t.context)||!n.open||t.context.dataRef.current.__escapeKeyBubbles||(e=!1)})),!e)return}o(!1,function(e){return"nativeEvent"in e}(e)?e.nativeEvent:e,"escape-key")})),B=Bo((e=>{var t;const n=()=>{var t;E(e),null==(t=or(e))||t.removeEventListener("keydown",n)};null==(t=or(e))||t.addEventListener("keydown",n)})),k=Bo((e=>{var t;const n=x.current;x.current=!1;const r=D.current;if(D.current=!1,"click"===f&&r)return;if(n)return;if("function"==typeof w&&!w(e))return;const i=or(e),l="["+Yo("inert")+"]",u=nr(s).querySelectorAll(l);let d=Tn(i)?i:null;for(;d&&!Yn(d);){const e=Vn(d);if(Yn(e)||!Tn(e))break;d=e}if(u.length&&Tn(i)&&!i.matches("html,body")&&!Kn(i,s)&&Array.from(u).every((e=>!Kn(d,e))))return;if(Ln(i)&&s){const t=i.clientWidth>0&&i.scrollWidth>i.clientWidth,n=i.clientHeight>0&&i.scrollHeight>i.clientHeight;let r=n&&e.offsetX>i.clientWidth;if(n&&"rtl"===zn(i).direction&&(r=e.offsetX<=i.offsetWidth-i.clientWidth),r||t&&e.offsetY>i.clientHeight)return}const p=null==(t=c.current.floatingContext)?void 0:t.nodeId,h=v&&Wo(v.nodesRef.current,p).some((t=>{var n;return rr(e,null==(n=t.context)?void 0:n.elements.floating)}));if(rr(e,s)||rr(e,a)||h)return;const m=v?Wo(v.nodesRef.current,p):[];if(m.length>0){let e=!0;if(m.forEach((t=>{var n;null==(n=t.context)||!n.open||t.context.dataRef.current.__outsidePressBubbles||(e=!1)})),!e)return}o(!1,e,"outside-press")})),R=Bo((e=>{var t;const n=()=>{var t;k(e),null==(t=or(e))||t.removeEventListener(f,n)};null==(t=or(e))||t.addEventListener(f,n)}));return r.useEffect((()=>{if(!n||!l)return;function e(e){o(!1,e,"ancestor-scroll")}c.current.__escapeKeyBubbles=$,c.current.__outsidePressBubbles=S;const t=nr(s);u&&t.addEventListener("keydown",O?B:E,O),w&&t.addEventListener(f,F?R:k,F);let r=[];return m&&(Tn(a)&&(r=Un(a)),Tn(s)&&(r=r.concat(Un(s))),!Tn(i)&&i&&i.contextElement&&(r=r.concat(Un(i.contextElement)))),r=r.filter((e=>{var n;return e!==(null==(n=t.defaultView)?void 0:n.visualViewport)})),r.forEach((t=>{t.addEventListener("scroll",e,{passive:!0})})),()=>{u&&t.removeEventListener("keydown",O?B:E,O),w&&t.removeEventListener(f,F?R:k,F),r.forEach((t=>{t.removeEventListener("scroll",e)}))}}),[c,s,a,i,u,w,f,n,o,m,l,$,S,E,O,B,k,F,R]),r.useEffect((()=>{x.current=!1}),[w,f]),r.useMemo((()=>l?{reference:{onKeyDown:E,[wi[h]]:e=>{p&&o(!1,e.nativeEvent,"reference-press")}},floating:{onKeyDown:E,onMouseDown(){D.current=!0},onMouseUp(){D.current=!0},[xi[f]]:()=>{x.current=!0}}}:{}),[l,p,f,h,o,E])}(g,{enabled:o}),{getReferenceProps:S,getFloatingProps:O}=function(e){void 0===e&&(e=[]);const t=e,n=r.useCallback((t=>Bi(t,e,"reference")),t),o=r.useCallback((t=>Bi(t,e,"floating")),t),i=r.useCallback((t=>Bi(t,e,"item")),e.map((e=>null==e?void 0:e.item)));return r.useMemo((()=>({getReferenceProps:n,getFloatingProps:o,getItemProps:i})),[n,o,i])}([x,D,$]);return e(n,{children:[t("div",Object.assign({ref:h.setReference},S(),{children:u()})),b&&t(ui,{children:t(yi,Object.assign({context:g,modal:!1,initialFocus:p,returnFocus:!1},{children:t("div",Object.assign({ref:h.setFloating,style:Object.assign(Object.assign({},m),{zIndex:f})},O(),{children:t("div",Object.assign({ref:p,style:Object.assign({},w),inert:w.opacity<1?"":void 0},{children:d()}))}))}))})]})},Mi=v.div`
    max-width: 41rem;
    min-width: 21rem;

    ${_.mobileL} {
        min-width: 17.5rem;
    }
`;var Ci={exports:{}};Ci.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,o=/\d*[^-_:/,()\s\d]+/,i={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},c=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],l=function(e){var t=i[e];return t&&(t.indexOf?t:t.s.concat(t.f))},u=function(e,t){var n,r=i.meridiem;if(r){for(var o=1;o<=24;o+=1)if(e.indexOf(r(o,0,t))>-1){n=o>12;break}}else n=e===(t?"pm":"PM");return n},d={A:[o,function(e){this.afternoon=u(e,!1)}],a:[o,function(e){this.afternoon=u(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[r,s("seconds")],ss:[r,s("seconds")],m:[r,s("minutes")],mm:[r,s("minutes")],H:[r,s("hours")],h:[r,s("hours")],HH:[r,s("hours")],hh:[r,s("hours")],D:[r,s("day")],DD:[n,s("day")],Do:[o,function(e){var t=i.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],M:[r,s("month")],MM:[n,s("month")],MMM:[o,function(e){var t=l("months"),n=(l("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[o,function(e){var t=l("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[n,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:c,ZZ:c};function f(n){var r,o;r=n,o=i&&i.formats;for(var a=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var i=r&&r.toUpperCase();return n||o[r]||e[r]||o[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),s=a.length,c=0;c<s;c+=1){var l=a[c],u=d[l],f=u&&u[0],p=u&&u[1];a[c]=p?{regex:f,parser:p}:l.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<s;n+=1){var o=a[n];if("string"==typeof o)r+=o.length;else{var i=o.regex,c=o.parser,l=e.slice(r),u=i.exec(l)[0];c.call(t,u),e=e.replace(u,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var r=t.prototype,o=r.parse;r.parse=function(e){var t=e.date,r=e.utc,a=e.args;this.$u=r;var s=a[1];if("string"==typeof s){var c=!0===a[2],l=!0===a[3],u=c||l,d=a[2];l&&(d=a[2]),i=this.$locale(),!c&&d&&(i=n.Ls[d]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=f(t)(e),o=r.year,i=r.month,a=r.day,s=r.hours,c=r.minutes,l=r.seconds,u=r.milliseconds,d=r.zone,p=new Date,h=a||(o||i?1:p.getDate()),m=o||p.getFullYear(),g=0;o&&!i||(g=i>0?i-1:p.getMonth());var y=s||0,v=c||0,b=l||0,w=u||0;return d?new Date(Date.UTC(m,g,h,y,v,b,w+60*d.offset*1e3)):n?new Date(Date.UTC(m,g,h,y,v,b,w)):new Date(m,g,h,y,v,b,w)}catch(e){return new Date("")}}(t,s,r),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(s)&&(this.$d=new Date("")),i={}}else if(s instanceof Array)for(var p=s.length,h=1;h<=p;h+=1){a[1]=s[h-1];var m=n.apply(this,a);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}h===p&&(this.$d=new Date(""))}else o.call(this,e)}}}();var Ti,Li,Hi=R(Ci.exports),_i={exports:{}},Pi=R(_i.exports=(Ti={year:0,month:1,day:2,hour:3,minute:4,second:5},Li={},function(e,t,n){var r,o=function(e,t,n){void 0===n&&(n={});var r=new Date(e),o=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,o=Li[r];return o||(o=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),Li[r]=o),o}(t,n);return o.formatToParts(r)},i=function(e,t){for(var r=o(e,t),i=[],a=0;a<r.length;a+=1){var s=r[a],c=s.type,l=s.value,u=Ti[c];u>=0&&(i[u]=parseInt(l,10))}var d=i[3],f=24===d?0:d,p=i[0]+"-"+i[1]+"-"+i[2]+" "+f+":"+i[4]+":"+i[5]+":000",h=+e;return(n.utc(p).valueOf()-(h-=h%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=r);var o=this.utcOffset(),i=this.toDate(),a=i.toLocaleString("en-US",{timeZone:e}),s=Math.round((i-new Date(a))/1e3/60),c=n(a,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-s,!0);if(t){var l=c.utcOffset();c=c.add(o-l,"minute")}return c.$x.$timezone=e,c},a.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=o(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var s=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,o){var a=o&&t,s=o||t||r,c=i(+n(),s);if("string"!=typeof e)return n(e).tz(s);var l=function(e,t,n){var r=e-60*t*1e3,o=i(r,n);if(t===o)return[r,t];var a=i(r-=60*(o-t)*1e3,n);return o===a?[r,o]:[e-60*Math.min(o,a)*1e3,Math.max(o,a)]}(n.utc(e,a).valueOf(),c,s),u=l[0],d=l[1],f=n(u).utcOffset(d);return f.$x.$timezone=s,f},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}})),Ii={exports:{}};Ii.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,o){var i=n(e),a=n(t),s="("===(o=o||"()")[0],c=")"===o[1];return(s?this.isAfter(i,r):!this.isBefore(i,r))&&(c?this.isBefore(a,r):!this.isAfter(a,r))||(s?this.isBefore(i,r):!this.isAfter(i,r))&&(c?this.isAfter(a,r):!this.isBefore(a,r))}};var Ni=R(Ii.exports),Yi={exports:{}};Yi.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var zi=R(Yi.exports),Wi={exports:{}};Wi.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var Vi,qi=R(Wi.exports);M.extend(Ni),M.extend(zi),M.extend(qi),M.extend(Hi),M.extend(Pi),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=M(t).startOf("week");return Ui(n).map((e=>Zi(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Zi(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(M(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),o=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)o.push(r.add(e,"year"));return o},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+M(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=M(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,n,r,o)=>{const i=e.isWithinRange(t,r?M(r):void 0,o?M(o):void 0),a=n&&n.includes(t.format("YYYY-MM-DD"));return!i||!!a}}(Vi||(Vi={}));const Ui=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},Zi=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},Ki=[1,3,5,7,8,10,12],Xi=[4,6,9,11];var Qi,Gi,Ji,ea;!function(e){e.clampDay=(t,n,r)=>{const o=parseInt(t),i=parseInt(n),a=parseInt(r);return 0==o?"1":Ki.includes(i)?Math.min(o,31).toString():Xi.includes(i)?Math.min(o,30).toString():2===i?e.isLeapYear(a)?Math.min(o,29).toString():Math.min(o,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=M(e,n);return M(t,n).diff(r,"minute")},e.toDayjs=e=>e?M(e):M(),e.addMinutesToTime=(e,t,n="HH:mm")=>M(e,n).add(t,"minutes").format(n)}(Qi||(Qi={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:n,minDate:r,maxDate:o}=t;return!!(n&&n.length&&n.includes(e))||(!(!r||!M(e).isBefore(r,"day"))||!(!o||!M(e).isAfter(o,"day")))},e.sanitizeInput=e=>{if(e){if(M(e).isValid())return e}return""}}(Gi||(Gi={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Ji||(Ji={})),function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,o=8)=>{let i=0;t>n&&(i=Math.floor((t-n)/o));const a=r+i;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width},e.maskValue=(e,n)=>{if(!e)return e;const{maskRange:r,unmaskRange:o,maskChar:i="•",maskRegex:a,maskTransformer:s}=n;if(s)return s(e);if(a)return e.replace(a,i);if(r){const{startIndex:n,endIndex:o}=t(r[0],r[1]);return e.substring(0,n)+i.repeat(e.substring(n,o+1).length)+e.substring(o+1)}if(o){const{startIndex:n,endIndex:r}=t(o[0],o[1]);return i.repeat(e.substring(0,n).length)+e.substring(n,r+1)+i.repeat(e.substring(r+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(ea||(ea={}));var ta=function(e,t){return ta=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},ta(e,t)};var na=function(){return na=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},na.apply(this,arguments)};var ra="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var oa=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},ia="object"==typeof ra&&ra&&ra.Object===Object&&ra,aa="object"==typeof self&&self&&self.Object===Object&&self,sa=ia||aa||Function("return this")(),ca=sa,la=function(){return ca.Date.now()},ua=/\s/;var da=function(e){for(var t=e.length;t--&&ua.test(e.charAt(t)););return t},fa=da,pa=/^\s+/;var ha=function(e){return e?e.slice(0,fa(e)+1).replace(pa,""):e},ma=sa.Symbol,ga=ma,ya=Object.prototype,va=ya.hasOwnProperty,ba=ya.toString,wa=ga?ga.toStringTag:void 0;var xa=function(e){var t=va.call(e,wa),n=e[wa];try{e[wa]=void 0;var r=!0}catch(e){}var o=ba.call(e);return r&&(t?e[wa]=n:delete e[wa]),o},Da=Object.prototype.toString;var $a=xa,Sa=function(e){return Da.call(e)},Oa=ma?ma.toStringTag:void 0;var Fa=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Oa&&Oa in Object(e)?$a(e):Sa(e)},Ea=function(e){return null!=e&&"object"==typeof e};var Ba=ha,ka=oa,Ra=function(e){return"symbol"==typeof e||Ea(e)&&"[object Symbol]"==Fa(e)},ja=/^[-+]0x[0-9a-f]+$/i,Aa=/^0b[01]+$/i,Ma=/^0o[0-7]+$/i,Ca=parseInt;var Ta=oa,La=la,Ha=function(e){if("number"==typeof e)return e;if(Ra(e))return NaN;if(ka(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=ka(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Ba(e);var n=Aa.test(e);return n||Ma.test(e)?Ca(e.slice(2),n?2:8):ja.test(e)?NaN:+e},_a=Math.max,Pa=Math.min;var Ia=function(e,t,n){var r,o,i,a,s,c,l=0,u=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var n=r,i=o;return r=o=void 0,l=t,a=e.apply(i,n)}function h(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=i}function m(){var e=La();if(h(e))return g(e);s=setTimeout(m,function(e){var n=t-(e-c);return d?Pa(n,i-(e-l)):n}(e))}function g(e){return s=void 0,f&&r?p(e):(r=o=void 0,a)}function y(){var e=La(),n=h(e);if(r=arguments,o=this,c=e,n){if(void 0===s)return function(e){return l=e,s=setTimeout(m,t),u?p(e):a}(c);if(d)return clearTimeout(s),s=setTimeout(m,t),p(c)}return void 0===s&&(s=setTimeout(m,t)),a}return t=Ha(t)||0,Ta(n)&&(u=!!n.leading,i=(d="maxWait"in n)?_a(Ha(n.maxWait)||0,t):i,f="trailing"in n?!!n.trailing:f),y.cancel=function(){void 0!==s&&clearTimeout(s),l=0,r=c=o=s=void 0},y.flush=function(){return void 0===s?a:g(La())},y},Na=Ia,Ya=oa;var za=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Ya(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),Na(e,t,{leading:r,maxWait:t,trailing:o})},Wa=function(e,t,n,r){switch(t){case"debounce":return Ia(e,n,r);case"throttle":return za(e,n,r);default:return e}},Va=function(e){return"function"==typeof e},qa=function(){return"undefined"==typeof window},Ua=function(e){return e instanceof Element||e instanceof HTMLDocument},Za=function(e,t,n,r){return function(o){var i=o.width,a=o.height;t((function(t){return t.width===i&&t.height===a||t.width===i&&!r||t.height===a&&!n?t:(e&&Va(e)&&e(i,a),{width:i,height:a})}))}};!function(e){function t(t){var n=e.call(this,t)||this;n.cancelHandler=function(){n.resizeHandler&&n.resizeHandler.cancel&&(n.resizeHandler.cancel(),n.resizeHandler=null)},n.attachObserver=function(){var e=n.props,t=e.targetRef,r=e.observerOptions;if(!qa()){t&&t.current&&(n.targetRef.current=t.current);var o=n.getElement();o&&(n.observableElement&&n.observableElement===o||(n.observableElement=o,n.resizeObserver.observe(o,r)))}},n.getElement=function(){var e=n.props,t=e.querySelector,r=e.targetDomEl;if(qa())return null;if(t)return document.querySelector(t);if(r&&Ua(r))return r;if(n.targetRef&&Ua(n.targetRef.current))return n.targetRef.current;var o=S(n);if(!o)return null;switch(n.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return o;default:return o.parentElement}},n.createResizeHandler=function(e){var t=n.props,r=t.handleWidth,o=void 0===r||r,i=t.handleHeight,a=void 0===i||i,s=t.onResize;if(o||a){var c=Za(s,n.setState.bind(n),o,a);e.forEach((function(e){var t=e&&e.contentRect||{},r=t.width,o=t.height;!n.skipOnMount&&!qa()&&c({width:r,height:o}),n.skipOnMount=!1}))}},n.getRenderType=function(){var e=n.props,t=e.render,r=e.children;return Va(t)?"renderProp":Va(r)?"childFunction":l(r)?"child":Array.isArray(r)?"childArray":"parent"};var r=t.skipOnMount,o=t.refreshMode,i=t.refreshRate,a=void 0===i?1e3:i,s=t.refreshOptions;return n.state={width:void 0,height:void 0},n.skipOnMount=r,n.targetRef=u(),n.observableElement=null,qa()||(n.resizeHandler=Wa(n.createResizeHandler,o,a,s),n.resizeObserver=new window.ResizeObserver(n.resizeHandler)),n}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}ta(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){qa()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,n=t.render,o=t.children,i=t.nodeType,a=void 0===i?"div":i,s=this.state,c={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return n&&n(c);case"childFunction":return(e=o)(c);case"child":if((e=o).type&&"string"==typeof e.type){var l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(c,["targetRef"]);return d(e,l)}return d(e,c);case"childArray":return(e=o).map((function(e){return!!e&&d(e,c)}));default:return r.createElement(a,null)}}}(f);var Ka=qa()?a:i;const Xa=({maxWidth:e,targetRef:t})=>{const[n,r]=c(!1);return function(e){void 0===e&&(e={});var t=e.skipOnMount,n=void 0!==t&&t,r=e.refreshMode,o=e.refreshRate,i=void 0===o?1e3:o,a=e.refreshOptions,l=e.handleWidth,u=void 0===l||l,d=e.handleHeight,f=void 0===d||d,p=e.targetRef,h=e.observerOptions,m=e.onResize,g=s(n),y=s(null),v=null!=p?p:y,b=s(),w=c({width:void 0,height:void 0}),x=w[0],D=w[1];Ka((function(){if(!qa()){var e=Za(m,D,u,f);b.current=Wa((function(t){(u||f)&&t.forEach((function(t){var n=t&&t.contentRect||{},r=n.width,o=n.height;!g.current&&!qa()&&e({width:r,height:o}),g.current=!1}))}),r,i,a);var t=new window.ResizeObserver(b.current);return v.current&&t.observe(v.current,h),function(){t.disconnect();var e=b.current;e&&e.cancel&&e.cancel()}}}),[r,i,a,u,f,m,h,v.current]),na({ref:v},x)}({targetRef:t,refreshMode:"throttle",refreshRate:300,handleHeight:!1,onResize:p((t=>{r(t<=e)}),[e])}),n},Qa=e=>{const[t,n]=c(e),r=s(e);return[t,p((e=>{r.current=e,n(e)}),[]),r]},Ga=v.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`,Ja=w`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,es=v.div`
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
    animation: ${Ja} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,ts=v(es)`
    animation-delay: -0.45s;
`,ns=v(es)`
    animation-delay: -0.3s;
`,rs=v(es)`
    animation-delay: -0.15s;
`,os=v.button`
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
                        ${e.$buttonIsDanger?ln.Button.Danger.Border:an.Primary};

                    color: ${e.$buttonIsDanger?ln.Button.Danger.Primary:an.Primary};
                `;case"light":return b`
                    background-color: ${an.Neutral[8]};
                    border: 1px solid ${an.Neutral[5]};

                    color: ${e.$buttonIsDanger?ln.Button.Danger.Primary:an.Primary};
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

                    color: ${e.$buttonIsDanger?ln.Button.Danger.Primary:an.Primary};
                    :hover,
                    :active,
                    :focus {
                        color: ${e.$buttonIsDanger?ln.Button.Danger.Hover:an.Secondary};
                    }
                `;default:return b`
                    background-color: ${e.$buttonIsDanger?ln.Button.Danger.BackgroundColor:an.Primary};
                    border: 1px solid transparent;

                    ${_.mobileL} {
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

                    ${_.mobileS} {
                        height: auto;
                    }
                `:b`
                    height: 3rem;
                    ${vn("H4","semibold")}

                    ${_.mobileS} {
                        height: auto;
                    }
                `}
`,is=v((({color:n,className:r,size:o=18})=>e(Ga,Object.assign({className:r,$size:o,$color:n},{children:[t(es,{id:"inner1",$size:o-2,$borderWidth:2,$color:n}),t(ts,{id:"inner2",$size:o-2,$borderWidth:2,$color:n}),t(ns,{id:"inner3",$size:o-2,$borderWidth:2,$color:n}),t(rs,{id:"inner4",$size:o-2,$borderWidth:2,$color:n})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t=e.$buttonIsDanger?ln.Button.Danger.Primary:an.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=an.Neutral[3](e);break;default:t=an.Neutral[8](e)}return b`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,as={Default:o.forwardRef(((n,r)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:s="default",danger:c=!1}=n,l=B(n,["children","disabled","loading","styleType","danger"]),u={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:c};return e(os,Object.assign({ref:r,"data-testid":l["data-testid"]||"button",disabled:i},u,l,{children:[a&&t(is,Object.assign({},u)),t("span",{children:o})]}))})),Small:o.forwardRef(((n,r)=>{const{children:o,disabled:i=!1,loading:a=!1,styleType:s="default",danger:c=!1}=n,l=B(n,["children","disabled","loading","styleType","danger"]),u={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:c};return e(os,Object.assign({ref:r,"data-testid":l["data-testid"]||"button",disabled:i},u,l,{children:[a&&t(is,Object.assign({},u,{size:16})),t("span",{children:o})]}))}))},ss=v.button`
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
`,cs=o.forwardRef(((e,n)=>{var{children:r,focusHighlight:o=!0,focusOutline:i="none",type:a="button"}=e,s=B(e,["children","focusHighlight","focusOutline","type"]);return t(ss,Object.assign({ref:n,$outline:i,$highlight:o,type:a},s,{children:r}))})),ls=b`
    color: ${an.Neutral[3]};
    height: 1rem;
    width: 1rem;
`,us=v(O)`
    ${ls}
`,ds=v(F)`
    ${ls}
`,fs=v(y)`
    ${ls}
    transition: transform 250ms ease-in-out;
    margin-left: 0.5rem;
`,ps=v.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
`,hs=v.div`
    display: flex;
    flex: 1;
    position: relative;
`,ms=v.div`
    isolation: isolate;
    width: 100%;
`,gs=v.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${an.Neutral[8]};

    ${e=>{if(!e.$visible)return b`
                display: none;
            `}}
`,ys=v.div`
    display: flex;
    justify-content: space-between;
    margin: 0 0 0.5rem 0;
`,vs=v.div`
    display: flex;
`,bs=v.button`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;

    ${e=>!1===e.$visible?b`
                display: none;
            `:e.$expanded?b`
                ${fs} {
                    transform: rotate(180deg);
                }
            `:void 0}
`,ws=v.p`
    ${vn("H5","regular")}
`,xs=v.div`
    display: flex;
`,Ds=v(cs)`
    margin: auto 0;
    padding: 0.75rem;

    :disabled {
        cursor: not-allowed;
    }
`,$s=v.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;
`,Ss=v(as.Small)`
    flex: 1;
`,Os=v.div`
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
`,Es=v(wn.H5)`
    ${e=>{if(e.$disabledDisplay)return b`
                color: ${an.Neutral[4]};
            `;switch(e.$variant){case"current-month":return b`
                    color: ${an.Neutral[3](e)};
                `;case"selected-month":return b`
                    ${vn("H5","semibold")}
                    color: ${an.Primary(e)};
                `}}}
`,Bs=({calendarDate:e,currentFocus:n,selectedStartDate:r,selectedEndDate:o,viewCalendarDate:i,type:a,isNewSelection:s,minDate:c,maxDate:l,allowDisabledSelection:u,onMonthSelect:d})=>{const f=h((()=>Vi.generateMonths(M(e))),[e]),p=e=>{const t="start"===n&&o&&e.isAfter(o,"month")&&s,i="end"===n&&r&&e.isBefore(r,"month")&&s;return t||i},m=e=>{const t=e.format("MMMM"),n=(r=e,!Vi.isWithinRange(r,c?M(c):void 0,l?M(l):void 0,"month"));var r;const o=i.isSame(e,"month")?"selected-month":M().isSame(e,"month")?"current-month":"default";return{disabledDisplay:n||p(e),interactive:!n||u,month:t,variant:o}};return f.length?t(Os,Object.assign({$type:a},{children:f.map((e=>{const{disabledDisplay:n,interactive:r,variant:o,month:i}=m(e);return t(Fs,Object.assign({$variant:o,$disabledDisplay:n,$interactive:r,onClick:()=>((e,t)=>{t||d(e)})(e,!r)},{children:t(Es,Object.assign({weight:"regular",$variant:o,$disabledDisplay:n},{children:i}))}),i)}))})):null},ks=v.div`
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
`,Rs=v.div`
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
`,js=v(wn.H5)`
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
`,As=({calendarDate:e,currentFocus:n,selectedStartDate:r,selectedEndDate:o,viewCalendarDate:i,type:a,isNewSelection:s,minDate:c,maxDate:l,allowDisabledSelection:u,onYearSelect:d})=>{const f=h((()=>Vi.generateDecadeOfYears(M(e))),[e]),p=e=>{const t="start"===n&&o&&e.isAfter(o,"year")&&s,i="end"===n&&r&&e.isBefore(r,"year")&&s;return t||i},m=e=>{const t=[0,11].includes(f.indexOf(e)),n=e.year(),r=(o=e,!Vi.isWithinRange(o,c?M(c):void 0,l?M(l):void 0,"year"));var o;const a=t?"other-decade":i.isSame(e,"year")?"selected-year":M().isSame(e,"year")?"current-year":"default";return{disabledDisplay:r||p(e),interactive:!r||u,year:n,variant:a}};return f.length?t(ks,Object.assign({$type:a},{children:f.map((e=>{const{disabledDisplay:n,interactive:r,variant:o,year:i}=m(e);return t(Rs,Object.assign({$variant:o,$disabledDisplay:n,$interactive:r,onClick:()=>((e,t)=>{t||d(e)})(e,!r)},{children:t(js,Object.assign({weight:"regular",$variant:o,$disabledDisplay:n,$interactive:r},{children:i}))}),i)}))})):null},Ms=o.forwardRef(((r,o)=>{var{children:i,initialCalendarDate:l,type:u,minDate:d,maxDate:f,currentFocus:p,selectedStartDate:h,selectedEndDate:g,selectWithinRange:y,dynamicHeight:v=!1,allowDisabledSelection:b,onCalendarDateChange:w,withButton:x,doneButtonDisabled:D,onDismiss:$,showNavigationHeader:S=!0,getLeftArrowDate:O,getRightArrowDate:F,isLeftArrowDisabled:E,isRightArrowDisabled:k,getMonthHeaderLabel:R,getYearHeaderLabel:j}=r,A=B(r,["children","initialCalendarDate","type","minDate","maxDate","currentFocus","selectedStartDate","selectedEndDate","selectWithinRange","dynamicHeight","allowDisabledSelection","onCalendarDateChange","withButton","doneButtonDisabled","onDismiss","showNavigationHeader","getLeftArrowDate","getRightArrowDate","isLeftArrowDisabled","isRightArrowDisabled","getMonthHeaderLabel","getYearHeaderLabel"]);const[C,T]=c(Qi.toDayjs(l)),[L,H]=c(Qi.toDayjs(l)),[_,P]=c("default"),I=s(null),N=s(null),Y=s();m(o,(()=>({defaultView(){P("default")},resetView(){const e=Qi.toDayjs(l);T(e),H(e),P("default")},setCalendarDate(e){const t=Qi.toDayjs(e);T(t),H(t)}}))),a((()=>{const e=Qi.toDayjs(l);T(e),H(e)}),[l]),a((()=>{K(L)}),[L]);const z=()=>{"month-options"!==_?(P("month-options"),Y.current.focus()):(P("default"),T(L))},W=()=>{"default"!==_?(P("default"),T(L)):P("year-options")},V=()=>{Y.current.focus();const e=O?O(C):C.subtract(1,"month");switch(_){case"default":H(e),T(e);break;case"month-options":T((e=>e.subtract(1,"year")));break;case"year-options":T((e=>e.subtract(10,"year")))}},q=()=>{Y.current.focus();const e=F?F(C):C.add(1,"month");switch(_){case"default":H(e),T(e);break;case"month-options":T((e=>e.add(1,"year")));break;case"year-options":T((e=>e.add(10,"year")))}},U=e=>{T(e),H(e),x||P("default")},Z=()=>{const e=Qi.toDayjs(l);T(e),H(e),"default"===_?X("reset"):P("default")},K=e=>{w&&w(e)},X=e=>{$&&$(e)},Q=()=>{if(!d||b)return!1;const e=M(d);return"month-options"===_?!Vi.isPreviousYearWithinRange(C,e):"year-options"===_?!Vi.isPreviousDecadeWithinRange(C,e):E?E(C):!Vi.isPreviousMonthWithinRange(C,e)},G=()=>{if(!f||b)return!1;const e=M(f);return"month-options"===_?!Vi.isNextYearWithinRange(C,e):"year-options"===_?!Vi.isNextDecadeWithinRange(C,e):k?k(C):!Vi.isNextMonthWithinRange(C,e)},J=()=>{if("year-options"===_){const{beginDecade:e,endDecade:t}=Vi.getStartEndDecade(C);return`${e} to ${t}`}return j?j(C):C.format("YYYY")},ee=()=>{const r=R?R(C):C.format("MMM");return e(n,{children:[e(bs,Object.assign({type:"button",tabIndex:-1,$expanded:"month-options"===_,$visible:"default"===_,id:"month-dropdown",onClick:z},{children:[t(ws,{children:r}),t(fs,{})]})),e(bs,Object.assign({type:"button",tabIndex:-1,$expanded:"default"!==_,id:"year-dropdown",onClick:W},{children:[t(ws,{children:J()}),t(fs,{})]}))]})},te=()=>{switch(_){case"month-options":return t(Bs,{type:u,calendarDate:C,currentFocus:p,minDate:d,maxDate:f,selectedStartDate:h,selectedEndDate:g,viewCalendarDate:L,isNewSelection:y,onMonthSelect:U,allowDisabledSelection:b});case"year-options":return t(As,{type:u,calendarDate:C,currentFocus:p,minDate:d,maxDate:f,selectedStartDate:h,selectedEndDate:g,viewCalendarDate:L,isNewSelection:y,onYearSelect:U,allowDisabledSelection:b});default:return null}};return e(ps,Object.assign({ref:Y,"data-id":"calendar-container","data-testid":"calendar-container"},A,{children:[S&&e(ys,Object.assign({"data-id":"calendar-header","data-testid":"calendar-header"},{children:[t(vs,{children:ee()}),e(xs,{children:[t(Ds,Object.assign({"data-testid":"left-arrow-btn",disabled:Q(),focusHighlight:!1,tabIndex:-1,onClick:V},{children:t(us,{})})),t(Ds,Object.assign({"data-testid":"right-arrow-btn",disabled:G(),focusHighlight:!1,tabIndex:-1,onClick:q},{children:t(ds,{})}))]})]})),t(hs,{children:(()=>{const r="function"==typeof i?i({calendarDate:L,currentView:_}):i;return e(n,v?{children:["default"===_&&r,te()]}:{children:[t(ms,{children:r}),t(gs,Object.assign({$visible:"default"!==_},{children:te()}))]})})()}),(()=>{if(!x)return;const n=!!("default"===_)&&D;return e($s,{children:[t(Ss,Object.assign({ref:N,"data-testid":"cancel-button",styleType:"light",type:"button",onClick:Z},{children:"Cancel"})),t(Ss,Object.assign({"data-testid":"done-button",ref:I,type:"button",onClick:()=>{n||(T(L),"default"===_?X("confirmed"):P("default"))},disabled:n},{children:"Done"}))]})})()]}))})),Cs=v.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 0.25rem;
`,Ts=v.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    pointer-events: none;
    user-select: none;
`,Ls=v.div`
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
`,_s=v.div`
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
`,v(_s)`
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
`;const Ps=e=>{let t=an.Neutral[8],n="1px solid transparent";switch(e.$type){case"current":t=an.Accent.Light[5];break;case"hover-dash":t=an.Accent.Light[6],n=`1px dashed ${an.Accent.Light[4](e)}`;break;case"hover-current":t=an.Neutral[8],n=`1px solid ${an.Primary(e)}`;break;case"selected":t=an.Accent.Light[5],n=`1px solid ${an.Accent.Light[4](e)}`;break;case"selected-outline":t=an.Accent.Light[5],n=`1px solid ${an.Primary(e)}`;break;case"overlap":t=an.Accent.Light[4],n=`1px solid ${an.Accent.Light[4](e)}`;break;case"overlap-outline":t=an.Accent.Light[4],n=`1px solid ${an.Primary(e)}`}return{color:t,border:n}},Is=v.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 2.5rem;
`,Ns=v.div`
    position: absolute;
    height: 2.5rem;
    width: 50%;

    ${e=>{if(!e.$type)return;const{color:t,border:n}=Ps(e);return b`
            background-color: ${t};
            background-clip: content-box;
            border-top: ${n};
            border-bottom: ${n};
        `}}
`,Ys=v(Ns)`
    left: 0;
`,zs=v(Ns)`
    right: 0;
`,Ws=v.div`
    z-index: -1;
    box-shadow: 0 0 4px 1px ${an.Shadow.Accent};
    position: absolute;
    height: 100%;
    width: 50%;
    display: none;

    ${e=>e.$shadow&&"display: block;"}
`,Vs=v(Ws)`
    left: 0;
`,qs=v(Ws)`
    right: 0;
`,Us=v.div`
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
`,Zs=v(Us)`
    right: calc(50% - 1.25rem);
    clip-path: inset(-3px 1.25rem -3px -3px);
    &:before {
        box-shadow: -1px 0 4px 1px ${an.Shadow.Accent};
    }
`,Ks=v(Us)`
    left: calc(50% - 1.25rem);
    clip-path: inset(-3px -3px -3px 1.25rem);
    &:before {
        box-shadow: 1px 0 4px 1px ${an.Shadow.Accent};
    }
`,Xs=v(wn.H5)`
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
                `;default:return b`
                    color: ${an.Neutral[1]};
                `}}}
`,Qs=({bgLeft:n,bgRight:r,circleLeft:o,circleRight:i,shadow:a,circleShadow:s,labelType:c,disabled:l,interactive:u,date:d,onSelect:f,onHover:p,onHoverEnd:h})=>e(Is,{children:[t(Vs,{$shadow:n&&a}),t(Ys,{$type:n,$shadow:n&&a}),t(Zs,{$type:o,$shadow:o&&s}),t(qs,{$shadow:r&&a}),t(zs,{$type:r,$shadow:r&&a}),t(Ks,{$type:i,$shadow:i&&s}),t(Xs,Object.assign({weight:"regular",$type:c,$disabled:l,$interactive:u,onClick:()=>{f(d)},onMouseEnter:()=>{p(d)},onMouseLeave:()=>{h&&h(d)}},{children:d.date()}))]}),Gs=({date:e,calendarDate:n,startDate:r,endDate:o,currentFocus:i,hoverDate:a,minDate:s,maxDate:c,disabledDates:l,allowDisabledSelection:u,isNewSelection:d,onSelect:f,onHover:p})=>{const h=Vi.isDisabledDay(e,l,s,c),m=!h||u,g=()=>{const e=M(a),t=e.isBefore(o,"day"),n=e.isAfter(r,"day");let s,c,l,u;return"start"===i&&o&&t&&(r&&n?(l=a,u=o):(s=a,c=r||o)),"end"===i&&r&&n&&(o&&t?(l=r,u=a):(s=o||r,c=a)),{hoverStart:s,hoverEnd:c,overlapStart:l,overlapEnd:u}},y={date:e,calendarDate:n,disabled:h,interactive:m,onSelect:()=>{f(e,!m)},onHover:()=>{p(e.format("YYYY-MM-DD"),!m)}};return t(Qs,Object.assign({},y,(()=>{const t={};if(n.month()!==e.month())t.labelType="unavailable";else if(M().isSame(e,"day")&&!h)t.labelType="current",t.circleLeft="current",t.circleRight="current";else if(d){const n="end"===i&&r&&e.isBefore(r),a="start"===i&&o&&e.isAfter(o);(n||a)&&(t.labelType="unavailable")}return t})(),(()=>{const t={},n=e.isSame(r,"day"),i=e.isSame(o,"day");return(r&&n||o&&i)&&(t.labelType="selected",t.circleLeft="selected-outline",t.circleRight="selected-outline"),r&&o&&e.isBetween(r,o,"day","[]")&&(t.labelType="selected",n||(t.bgLeft="selected"),i||(t.bgRight="selected")),t})(),(()=>{if(!a)return;const t={};e.isSame(a,"day")&&(t.circleShadow=!0,t.circleLeft="hover-current",t.circleRight="hover-current");const{hoverStart:n,hoverEnd:r,overlapStart:o,overlapEnd:i}=g();if(n&&r){if(e.isBetween(n,r,"day","[]")){const o=e.isSame(n,"day"),i=e.isSame(r,"day");t.labelType="selected",o||(t.bgLeft="hover-dash"),i||(t.bgRight="hover-dash")}return t}if(o&&i){if(e.isBetween(o,i,"day","[]")){const n=e.isSame(o,"day"),r=e.isSame(i,"day");t.labelType="selected",(n||r)&&(t.circleShadow=!0,t.circleLeft="overlap-outline",t.circleRight="overlap-outline"),n||(t.bgLeft="overlap"),r||(t.bgRight="overlap")}return t}return t})()))};M.extend(Ni);const Js=({calendarDate:n,currentFocus:r,disabledDates:o,selectedStartDate:i,selectedEndDate:a,onSelect:s,onHover:l,isNewSelection:u,minDate:d,maxDate:f,allowDisabledSelection:p})=>{const m=h((()=>Vi.generateDays(n)),[n]),[g,y]=c(""),v=(e,t)=>{t&&!p||s(e)},b=(e,t)=>{t&&!p||(y(e),l(e))},w=()=>{y(""),l("")};return e(Cs,Object.assign({"data-testid":"calendar-content"},{children:[m[0].map(((e,n)=>t(Ts,{children:t(wn.H6,Object.assign({weight:"semibold"},{children:M(e).format("ddd")}))},`week-day-${n}`))),m.map(((e,s)=>t(Ls,Object.assign({onMouseLeave:w},{children:e.map(((e,s)=>t(Gs,{date:e,calendarDate:n,startDate:i,endDate:a,hoverDate:g,currentFocus:r,minDate:d,maxDate:f,disabledDates:o,allowDisabledSelection:p,isNewSelection:u,onSelect:v,onHover:b},`day-${s}`)))}),s)))]}))},ec=({date:e,calendarDate:n,selectedDate:r,hoverDate:o,minDate:i,maxDate:a,disabledDates:s,allowDisabledSelection:c,numberOfDays:l,onSelect:u,onHover:d})=>{const f=Vi.isDisabledDay(e,s,i,a),p=!f||c,{start:h,end:m}=r?Vi.getFixedRangeStartEnd(Qi.toDayjs(r),l):{start:void 0,end:void 0},{start:g,end:y}=o?Vi.getFixedRangeStartEnd(Qi.toDayjs(o),l):{start:void 0,end:void 0},v=r&&e.isBetween(h,m,"day","[]"),b=o&&e.isBetween(g,y,"day","[]"),w=v&&e.isSame(h,"day")||b&&e.isSame(g,"day"),x=v&&e.isSame(m,"day")||b&&e.isSame(y,"day"),D=(e,t,n,r)=>{n?e.circleLeft=t:e.bgLeft=t,r?e.circleRight=t:e.bgRight=t},$={date:e,calendarDate:n,disabled:f,interactive:p,onSelect:()=>{u(e,!p)},onHover:()=>{d(e.format("YYYY-MM-DD"),!p)}};return t(Qs,Object.assign({},$,(()=>{const t={};return v||b?t.labelType="selected":n.month()!==e.month()?t.labelType="unavailable":M().isSame(e,"day")&&!f&&(t.labelType="current",t.circleLeft="current",t.circleRight="current"),t})(),(()=>{const t={},n=e.format("YYYY-MM-DD");return b&&D(t,"hover-dash",n===g,n===y),v&&D(t,"selected",n===h,n===m),v&&b&&D(t,"overlap",w,x),n===h&&(b?(t.circleLeft="overlap-outline",t.circleRight="overlap-outline"):(t.circleRight="selected-outline",t.circleLeft="selected-outline")),n===g&&(t.circleLeft="hover-current",t.circleRight="hover-current",t.circleShadow=!0,g>=h&&g<m&&(t.circleLeft="overlap-outline",t.circleRight="overlap-outline")),t})()))},tc=({calendarDate:n,disabledDates:r,selectedStartDate:o,onSelect:i,onHover:a,minDate:s,maxDate:l,allowDisabledSelection:u,numberOfDays:d})=>{const f=h((()=>Vi.generateDays(n)),[n]),[p,m]=c(""),g=(e,t)=>{t&&!u||(i(e),e&&!M(e).isSame(e,"month")&&m(""))},y=(e,t)=>{t&&!u||(m(e),a(e))},v=()=>{m(""),a("")};return e(Cs,Object.assign({"data-testid":"calendar-content"},{children:[f[0].map(((e,n)=>t(Ts,{children:t(wn.H6,Object.assign({weight:"semibold"},{children:M(e).format("ddd")}))},`week-day-${n}`))),f.map(((e,i)=>t(Ls,Object.assign({onMouseLeave:v},{children:e.map(((e,i)=>t(ec,{date:e,calendarDate:n,selectedDate:o,hoverDate:p,minDate:s,maxDate:l,disabledDates:r,allowDisabledSelection:u,onSelect:g,onHover:y,numberOfDays:d},`day-${i}`)))}),i)))]}))},nc=v.div`
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
`,rc=({date:e,calendarDate:n,selectedDate:r,hoverDate:o,minDate:i,maxDate:a,disabledDates:s,allowDisabledSelection:c,onSelect:l,onHover:u})=>{const d=Vi.isDisabledDay(e,s,i,a),f=!d||c,{start:p,end:h}=Vi.getWeekStartEnd(Qi.toDayjs(r)),{start:m,end:g}=Vi.getWeekStartEnd(Qi.toDayjs(o)),y=r&&e.isBetween(p,h,"day","[]"),v=o&&e.isBetween(m,g,"day","[]"),b=y&&e.isSame(p)||v&&e.isSame(m),w=y&&e.isSame(h)||v&&e.isSame(g),x={date:e,calendarDate:n,disabled:d,interactive:f,onSelect:()=>{l(e,!f)},onHover:()=>{u(e.format("YYYY-MM-DD"),!f)}};return t(Qs,Object.assign({},x,(()=>{const t={};return y||v?t.labelType="selected":n.month()!==e.month()?t.labelType="unavailable":M().isSame(e,"day")&&!d&&(t.labelType="current",t.circleLeft="current",t.circleRight="current"),t})(),(()=>{const e={};let t;return y&&v?(t="hover-current",e.shadow=!0,e.circleShadow=b||w):y?t="selected-outline":v&&(t="hover-dash"),t&&(b?e.circleLeft=t:e.bgLeft=t,w?e.circleRight=t:e.bgRight=t),e})()))},oc=({calendarDate:n,disabledDates:r,selectedStartDate:o,onSelect:i,onHover:a,minDate:s,maxDate:l,allowDisabledSelection:u})=>{const d=h((()=>Vi.generateDays(n)),[n]),[f,p]=c(""),m=(e,t)=>{if(t&&!u)return;const n=e.startOf("week");i(n),e&&!M(e).isSame(n,"month")&&p("")},g=(e,t)=>{t&&!u||(p(e),a(e))},y=()=>{p(""),a("")};return e(Cs,Object.assign({"data-testid":"calendar-content"},{children:[d[0].map(((e,n)=>t(Ts,{children:t(wn.H6,Object.assign({weight:"semibold"},{children:M(e).format("ddd")}))},`week-day-${n}`))),d.map(((e,i)=>t(Ls,Object.assign({onMouseLeave:y},{children:e.map(((e,i)=>t(rc,{date:e,calendarDate:n,selectedDate:o,hoverDate:f,minDate:s,maxDate:l,disabledDates:r,allowDisabledSelection:u,onSelect:m,onHover:g},`day-${i}`)))}),i)))]}))},ic=o.forwardRef((({disabledDates:e,onYearMonthDisplayChange:n,onSelect:r,onHover:o,onDismiss:i,value:a,endValue:c,currentFocus:l,withButton:u,variant:d,minDate:f,maxDate:p,allowDisabledSelection:h,type:g="standalone",selectWithinRange:y=!0,initialCalendarDate:v,numberOfDays:b},w)=>{const x=s(),D=s(void 0);m(w,(()=>({reset(){x.current.resetView()},setCalendarDate(e){x.current.setCalendarDate(e)}})));const $=e=>{const t=e.format("YYYY-MM-DD");x.current.setCalendarDate(t),O(t)},S=e=>{F(e)},O=e=>{r&&r(e)},F=e=>{o&&o(e)},E=e=>{if(n){const t={month:e.month()+1,year:e.year()};n(t)}};return t(nc,Object.assign({$type:g},{children:t(Ms,Object.assign({type:g,ref:x,withButton:u,doneButtonDisabled:(()=>{if(!u)return;let e=!0;switch(d){case"single":e=!1;break;case"range":case"fixed-range":e=!!a!=!!c;break;case"week":e=!a&&!c}return e})(),onDismiss:i,minDate:f,maxDate:p,selectWithinRange:y,currentFocus:l,selectedStartDate:a,selectedEndDate:c,allowDisabledSelection:h,onCalendarDateChange:e=>{D.current&&D.current.isSame(e,"month")||E(e),D.current=e},initialCalendarDate:v},{children:({calendarDate:n})=>(n=>{switch(d){case"week":return t(oc,{calendarDate:n,disabledDates:e,selectedStartDate:a,minDate:f,maxDate:p,allowDisabledSelection:h,onSelect:$,onHover:S});case"fixed-range":return t(tc,{calendarDate:n,disabledDates:e,selectedStartDate:a,minDate:f,maxDate:p,allowDisabledSelection:h,onSelect:$,onHover:S,numberOfDays:b});default:return t(Js,{calendarDate:n,currentFocus:l,disabledDates:e,selectedStartDate:a,selectedEndDate:c,minDate:f,maxDate:p,isNewSelection:y,allowDisabledSelection:h,onSelect:$,onHover:S})}})(n)}))}))})),ac=o.forwardRef(((e,n)=>t(Mi,{children:t(ic,Object.assign({ref:n},e))}))),sc=v.div`
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
`,cc=v.div`
    width: 100%; // Force next flex item to break to next line
`,lc=v.div`
    display: flex;
    flex: 1;
    align-items: center;
`,uc=v(E)`
    color: ${an.Neutral[3]};
    width: 1.125rem;
    height: 1.125rem;
    flex-shrink: 0;
    margin: 0 0.5rem;
    align-self: center;
`,dc=v.div`
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
`,fc=({children:n,currentActive:r,error:o,className:i,wrap:a})=>{const[s,c]=n;return e(sc,Object.assign({className:i,$wrap:a},{children:[t(lc,Object.assign({"data-id":"range-container-elem1-container"},{children:s})),t(uc,{}),a&&t(cc,{}),t(lc,Object.assign({"data-id":"range-container-elem2-container"},{children:c})),t(dc,{"data-id":"range-container-indicator",$position:r,$error:o,$wrap:a})]}))},pc=v.div`
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid ${an.Neutral[5]};
    border-radius: 4px;
    background: ${an.Neutral[8]};
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};

    :focus-within {
        border: 1px solid ${an.Accent.Light[1]};
        box-shadow: ${ln.InputBoxShadow};
    }

    ${e=>e.$readOnly?b`
                border: 1px solid transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    border: 1px solid transparent;
                    box-shadow: none;
                }
            `:e.$disabled?b`
                background: ${an.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    border: 1px solid ${an.Neutral[5]};
                    box-shadow: none;
                }
            `:e.$error?b`
                border: 1px solid ${an.Validation.Red.Border};

                :focus-within {
                    border: 1px solid ${an.Validation.Red.Border};
                    box-shadow: ${ln.InputErrorBoxShadow};
                }
            `:void 0}
`,hc=v.input`
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
`,mc=v.div`
    display: flex;
    align-items: center;
    position: relative;

    flex: 1;
`,gc=v.div`
    display: flex;
    align-items: center;

    ${e=>{if(e.$hover)return b`
                ${yc}, ${xc} {
                    color: ${an.Neutral[4]};
                }
            `}}
`,yc=v(hc)`
    background: transparent;
    text-align: center;
`,vc=v(yc)`
    width: 2rem;
    margin-right: 0.25rem;
`,bc=v(yc)`
    width: 2.5rem;
`,wc=v(yc)`
    width: 3rem;
    margin-left: 0.25rem;
`,xc=v(wn.Body)`
    ${e=>{if(e.$inactive)return b`
                color: ${an.Neutral[3](e)};
            `}}
`,Dc=v.div`
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
`;M.extend(Hi);const $c=o.forwardRef((({disabled:n,readOnly:r,names:o,value:i,focused:l,hoverValue:u,placeholder:d,label:f,onChange:p,onFocus:h,onBlur:g,hideInputKeyboard:y},v)=>{const b=y?"none":"numeric",[w,x,D]=Qa(""),[$,S,O]=Qa(""),[F,E,B]=Qa(""),[k,R]=c("none"),[j,A]=c(!1),C=s(null),T=s(null),L=s(null),H=s(null),[_,P,I]=q(u);a((()=>{const[e="",t="",n=""]=q(i);x(e),S(t),E(n)}),[i]),a((()=>{l||R("none"),l&&(A(!0),C.current.contains(document.activeElement)||T.current.focus())}),[l]),m(v,(()=>({ref:C,resetPlaceholder(){A(!1)},resetInput(){const[e="",t="",n=""]=q(i);x(e),S(t),E(n)}})),[i]);const N=e=>{var t;e.preventDefault(),null===(t=T.current)||void 0===t||t.focus()},Y=e=>{e.target.select();const t=e.target.name;R(t)},z=e=>{const[t,n,r]=o,i={[t]:D.current,[n]:O.current,[r]:B.current},a=e.target.name,s=i[a],c=a!==r?ea.padValue(s,!0):s;switch(a){case t:i[t]=c,x(c);break;case n:i[n]=c,S(c)}const l=`${i[r]}-${i[n]}-${i[t]}`,u=M(l,"YYYY-MM-DD",!0).isValid(),d=!i[t]&&!i[n]&&!i[r];u&&s!==c&&p(l),C.current.contains(e.relatedTarget)||(R("none"),null==g||g(d||u))},W=e=>{if(u)return;const t=e.target.name,n=e.target.value.replace(/[^0-9]/g,""),r={day:w,month:$,year:F};switch(t){case o[0]:r.day=n,x(n),2===n.length&&L.current.focus();break;case o[1]:r.month=n,S(n),2===n.length&&H.current.focus();break;case o[2]:r.year=n,E(n)}if(!r.day&&!r.month&&!r.year)return void p("");const i=`${r.year}-${r.month}-${r.day}`;M(i,"YYYY-MM-DD",!0).isValid()&&p(i)},V=e=>{"Backspace"!==e.code&&"Backspace"!==e.key||(k===o[1]&&0===$.length&&T.current.focus(),k===o[2]&&0===F.length&&L.current.focus())};function q(e){if(e){const t=M(new Date(e));return[ea.padValue(t.date().toString()),ea.padValue((t.month()+1).toString()),t.year().toString()]}return[void 0,void 0,void 0]}return e(mc,Object.assign({role:"group","aria-label":f,onClick:()=>{n||r||(A(!0),C.current.contains(document.activeElement)||T.current.focus())},onFocus:()=>{n||(A(!0),l||h())}},{children:[e(gc,Object.assign({ref:C,$hover:!!u},{children:[t(vc,{ref:T,name:o[0],maxLength:2,value:null!=_?_:w,onFocus:Y,onBlur:z,onChange:W,type:"text",inputMode:b,pattern:"[0-9]{2}","data-testid":`${o[0]}-input`,"aria-label":"day",disabled:n,readOnly:r,tabIndex:r?-1:0,autoComplete:"off",placeholder:k!==o[0]||r?"DD":""}),t(xc,Object.assign({$inactive:0===w.length},{children:"/"})),t(bc,{ref:L,name:o[1],maxLength:2,value:null!=P?P:$,onFocus:Y,onBlur:z,onChange:W,onKeyDown:V,type:"text",inputMode:b,pattern:"[0-9]{2}","data-testid":`${o[1]}-input`,"aria-label":"month",disabled:n,readOnly:r,tabIndex:r?-1:0,autoComplete:"off",placeholder:k!==o[1]||r?"MM":""}),t(xc,Object.assign({$inactive:0===$.length},{children:"/"})),t(wc,{ref:H,name:o[2],maxLength:4,value:null!=I?I:F,onFocus:Y,onBlur:z,onChange:W,onKeyDown:V,type:"text",inputMode:b,pattern:"[0-9]{4}","data-testid":`${o[2]}-input`,"aria-label":"year",disabled:n,readOnly:r,tabIndex:r?-1:0,autoComplete:"off",placeholder:k!==o[2]||r?"YYYY":""})]})),(()=>{if(!i&&!r&&d)return t(Dc,Object.assign({$hide:j,$disabled:n,onMouseDown:N},{children:d}))})()]}))})),Sc=(e,t,n)=>{const r=[];e&&r.push(`[${e}]`),r.push(t,n),console.log(...r)},Oc=v(pc)`
    ${e=>e.$wrap&&b`
            padding: 0.75rem 1rem;
        `}
`,Fc=v.div`
    display: flex;
    align-items: center;
    height: calc(3rem - 2px); // exclude top and bottom borders
    width: 100%;

    ${e=>e.$wrap&&b`
            height: fit-content;
        `}
`,Ec={initialStart:"",initialEnd:"",selectedStart:"",selectedEnd:"",currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1},Bc=n=>{var{minDate:r,maxDate:o,disabled:i,disabledDates:l,error:u,hideInputKeyboard:d,value:f,valueEnd:p,onChange:h,onFocus:m,onBlur:y,onYearMonthDisplayChange:v,withButton:b=!0,variant:w="range",numberOfDays:x=7,readOnly:D,id:$,allowDisabledSelection:S,zIndex:O=50}=n,F=B(n,["minDate","maxDate","disabled","disabledDates","error","hideInputKeyboard","value","valueEnd","onChange","onFocus","onBlur","onYearMonthDisplayChange","withButton","variant","numberOfDays","readOnly","id","allowDisabledSelection","zIndex"]);const[E,k]=c(),[R,j]=c(void 0),[A,C]=c(!1),[L,H]=c(!1),_="week"===w,I="fixed-range"===w,[{selectedStart:N,selectedEnd:Y,currentFocus:z,calendarOpen:W,isStartDirty:V,isEndDirty:q},U]=(({initialState:e,reducers:t,name:n,debug:r})=>{const[o,i]=g(((e,n)=>t[n.type]?t[n.type](e,n.payload):e),e);return[o,Object.fromEntries(Object.keys(t).map((e=>[e,t=>{r&&Sc(n,e,t),i({type:e,payload:t})}])))]})({name:"date-range-input",initialState:Ec,reducers:{blur:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),changeStart:(e,t)=>Object.assign(Object.assign({},e),{selectedStart:t,isStartDirty:!0}),changeEnd:(e,t)=>Object.assign(Object.assign({},e),{selectedEnd:t,isEndDirty:!0}),reselectStart:e=>Object.assign(Object.assign({},e),{selectedStart:"",currentFocus:"start"}),reselectEnd:e=>Object.assign(Object.assign({},e),{selectedEnd:"",currentFocus:"end"}),focus:(e,t)=>Object.assign(Object.assign({},e),{currentFocus:_?"none":I?"start":t,calendarOpen:!D}),cancel:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1}),done:(e,t)=>Object.assign(Object.assign({},e),{selectedStart:t.start,selectedEnd:t.end,initialStart:t.start,initialEnd:t.end,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),resetStart:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart}),resetEnd:e=>Object.assign(Object.assign({},e),{selectedEnd:e.initialEnd}),resetRange:(e,t)=>Object.assign(Object.assign({},e),{initialStart:t.start,selectedStart:t.start,initialEnd:t.end,selectedEnd:t.end})}}),Z=s(!1),K=s(),X=s(),Q=s(),G=s(),J=T.useMediaQuery({maxWidth:P.mobileL}),ee=Xa({maxWidth:320,targetRef:K}),te=b||J;a((()=>{U.resetRange({start:Gi.sanitizeInput(f),end:Gi.sanitizeInput(p)})}),[f,p]),a((()=>{"start"===z?k(N):"end"===z&&k(Y)}),[z]);const ne=e=>{"Enter"!==e.code||te||(N&&Y?(U.done({start:N,end:Y}),null==h||h(N,Y)):U.blur())},re=e=>{if(he(e))return void(Z.current=!0);if(U.changeStart(e),X.current.setCalendarDate(e),Z.current=!1,!e)return void(te||Y||!q||(U.resetRange({start:"",end:""}),null==h||h("","")));if(!Y)return void U.focus("end");if(M(e).isAfter(Y,"day"))U.reselectEnd();else{if(q)return te?void 0:(U.done({start:e,end:Y}),void(null==h||h(e,Y)));U.focus("end")}},oe=e=>{if(he(e))return void(Z.current=!0);if(U.changeEnd(e),X.current.setCalendarDate(e),!e)return void(te||N||!V||(U.resetRange({start:"",end:""}),null==h||h("","")));if(!N)return void U.focus("start");if(M(e).isBefore(N,"day"))U.reselectStart();else{if(V)return te?void 0:(U.done({start:N,end:e}),void(null==h||h(N,e)));U.focus("start")}},ie=e=>{if(he(e))return void(Z.current=!0);if(U.changeStart(e),X.current.setCalendarDate(e),Z.current=!1,!e)return void(te?U.changeEnd(""):(U.resetRange({start:"",end:""}),null==h||h("","")));const t=M(e).format("YYYY-MM-DD"),n=M(t).add(x-1,"day").format("YYYY-MM-DD");return U.changeStart(t),U.changeEnd(n),Z.current=!1,te?void 0:(U.done({start:t,end:n}),void(null==h||h(t,n)))},ae=e=>()=>{D||(U.focus(e),se(),ce(),m&&m())},se=()=>{if(_){const e=Qi.toDayjs(N).startOf("week").format("YYYY-MM-DD");C(!0),H(!0),k(e)}},ce=()=>{I&&(H(!0),k(N))},le=e=>{e&&!Z.current||(U.resetStart(),Q.current.resetInput())},ue=e=>{e&&!Z.current||(U.resetEnd(),G.current.resetInput())},de=e=>{switch(w){case"week":(e=>{const t=M(e).startOf("week").format("YYYY-MM-DD"),n=M(e).endOf("week").format("YYYY-MM-DD");if(U.changeStart(t),U.changeEnd(n),Z.current=!1,!te)U.done({start:t,end:n}),null==h||h(t,n)})(e);break;case"fixed-range":ie(e);break;default:"start"===z?re(e):"end"===z&&oe(e)}},fe=e=>{switch(e){case"reset":U.cancel();break;case"confirmed":U.done({start:N,end:Y}),null==h||h(N,Y)}},pe=e=>{j(e)},he=e=>!S&&e&&Gi.isDateDisabled(e,{disabledDates:l,minDate:r,maxDate:o}),me=e=>{let t={start:void 0,end:void 0};switch(w){case"range":t={start:"start"===z?R:void 0,end:"end"===z?R:void 0};break;case"week":if(!R)return;t={start:M(R).startOf("week").format("YYYY-MM-DD"),end:M(R).endOf("week").format("YYYY-MM-DD")};break;case"fixed-range":if(!R)return;t={start:M(R).format("YYYY-MM-DD"),end:M(R).add(x-1,"day").format("YYYY-MM-DD")}}return t[e]};return t(Ai,{enabled:!D&&!i,isOpen:W,onClose:()=>{U.blur(),C(!1),H(!1),Q.current.resetPlaceholder(),G.current.resetPlaceholder(),null==y||y()},onDismiss:()=>{U.blur()},renderElement:()=>t(Oc,Object.assign({ref:K,$disabled:i,$readOnly:D,$error:u,$wrap:ee,id:$,"data-testid":F["data-testid"],onKeyDown:ne},F,{children:e(fc,Object.assign({currentActive:z,wrap:ee,error:u},{children:[t(Fc,Object.assign({$wrap:ee},{children:t($c,{ref:Q,placeholder:"From",names:["start-day","start-month","start-year"],value:N,disabled:i,readOnly:A||D,focused:"start"===z,hoverValue:me("start"),onChange:I?ie:re,onFocus:ae("start"),onBlur:le,hideInputKeyboard:d})})),t(Fc,Object.assign({$wrap:ee},{children:t($c,{ref:G,placeholder:"To",names:["end-day","end-month","end-year"],value:Y,disabled:i,readOnly:L||D,focused:"end"===z,hoverValue:me("end"),onChange:oe,onFocus:ae("end"),onBlur:ue,hideInputKeyboard:d})}))]}))})),renderDropdown:()=>t(ac,{ref:X,type:"input",variant:w,initialCalendarDate:E,withButton:te,value:N,endValue:Y,selectWithinRange:V||q,currentFocus:z,disabledDates:l,minDate:r,maxDate:o,allowDisabledSelection:S,onSelect:de,onDismiss:fe,onHover:pe,onYearMonthDisplayChange:v,numberOfDays:x}),zIndex:O})};export{Bc as DateRangeInput};
//# sourceMappingURL=index.js.map
