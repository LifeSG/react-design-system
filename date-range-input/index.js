import{jsxs as e,jsx as t,Fragment as n}from"react/jsx-runtime";import*as r from"react";import a,{useRef as i,useState as o,isValidElement as s,createRef as c,cloneElement as l,PureComponent as u,useEffect as d,useLayoutEffect as h,forwardRef as f,useCallback as p,useContext as m,useMemo as g,useImperativeHandle as y,useReducer as v}from"react";import{findDOMNode as b,unstable_batchedUpdates as w}from"react-dom";import D,{keyframes as $,css as S}from"styled-components";import{ChevronDownIcon as x}from"@lifesg/react-icons/chevron-down";import{ChevronLeftIcon as O}from"@lifesg/react-icons/chevron-left";import{ChevronRightIcon as F}from"@lifesg/react-icons/chevron-right";import{ExternalIcon as _}from"@lifesg/react-icons/external";import{ArrowRightIcon as k}from"@lifesg/react-icons";function B(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}"function"==typeof SuppressedError&&SuppressedError;var j="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function M(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var E={exports:{}};E.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",a="second",i="minute",o="hour",s="day",c="week",l="month",u="quarter",d="year",h="date",f="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},y=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},v={s:y,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),a=n%60;return(t<=0?"+":"-")+y(r,2,"0")+":"+y(a,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),a=t.clone().add(r,l),i=n-a<0,o=t.clone().add(r+(i?-1:1),l);return+(-(r+(n-a)/(i?a-o:o-a))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:l,y:d,w:c,d:s,D:h,h:o,m:i,s:a,ms:r,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",w={};w[b]=g;var D=function(e){return e instanceof O},$=function e(t,n,r){var a;if(!t)return b;if("string"==typeof t){var i=t.toLowerCase();w[i]&&(a=i),n&&(w[i]=n,a=i);var o=t.split("-");if(!a&&o.length>1)return e(o[0])}else{var s=t.name;w[s]=t,a=s}return!r&&a&&(b=a),a||!r&&b},S=function(e,t){if(D(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new O(n)},x=v;x.l=$,x.i=D,x.w=function(e,t){return S(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var O=function(){function g(e){this.$L=$(e.locale,null,!0),this.parse(e)}var y=g.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(x.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(p);if(r){var a=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],a,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],a,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return x},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(e,t){var n=S(e);return this.startOf(t)<=n&&n<=this.endOf(t)},y.isAfter=function(e,t){return S(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<S(e)},y.$g=function(e,t,n){return x.u(e)?this[t]:this.set(n,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var n=this,r=!!x.u(t)||t,u=x.p(e),f=function(e,t){var a=x.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?a:a.endOf(s)},p=function(e,t){return x.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},m=this.$W,g=this.$M,y=this.$D,v="set"+(this.$u?"UTC":"");switch(u){case d:return r?f(1,0):f(31,11);case l:return r?f(1,g):f(0,g+1);case c:var b=this.$locale().weekStart||0,w=(m<b?m+7:m)-b;return f(r?y-w:y+(6-w),g);case s:case h:return p(v+"Hours",0);case o:return p(v+"Minutes",1);case i:return p(v+"Seconds",2);case a:return p(v+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var n,c=x.p(e),u="set"+(this.$u?"UTC":""),f=(n={},n[s]=u+"Date",n[h]=u+"Date",n[l]=u+"Month",n[d]=u+"FullYear",n[o]=u+"Hours",n[i]=u+"Minutes",n[a]=u+"Seconds",n[r]=u+"Milliseconds",n)[c],p=c===s?this.$D+(t-this.$W):t;if(c===l||c===d){var m=this.clone().set(h,1);m.$d[f](p),m.init(),this.$d=m.set(h,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[x.p(e)]()},y.add=function(r,u){var h,f=this;r=Number(r);var p=x.p(u),m=function(e){var t=S(f);return x.w(t.date(t.date()+Math.round(e*r)),f)};if(p===l)return this.set(l,this.$M+r);if(p===d)return this.set(d,this.$y+r);if(p===s)return m(1);if(p===c)return m(7);var g=(h={},h[i]=t,h[o]=n,h[a]=e,h)[p]||1,y=this.$d.getTime()+r*g;return x.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=e||"YYYY-MM-DDTHH:mm:ssZ",a=x.z(this),i=this.$H,o=this.$m,s=this.$M,c=n.weekdays,l=n.months,u=function(e,n,a,i){return e&&(e[n]||e(t,r))||a[n].slice(0,i)},d=function(e){return x.s(i%12||12,e,"0")},h=n.meridiem||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:x.s(s+1,2,"0"),MMM:u(n.monthsShort,s,l,3),MMMM:u(l,s),D:this.$D,DD:x.s(this.$D,2,"0"),d:String(this.$W),dd:u(n.weekdaysMin,this.$W,c,2),ddd:u(n.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(i),HH:x.s(i,2,"0"),h:d(1),hh:d(2),a:h(i,o,!0),A:h(i,o,!1),m:String(o),mm:x.s(o,2,"0"),s:String(this.$s),ss:x.s(this.$s,2,"0"),SSS:x.s(this.$ms,3,"0"),Z:a};return r.replace(m,(function(e,t){return t||p[e]||a.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,h,f){var p,m=x.p(h),g=S(r),y=(g.utcOffset()-this.utcOffset())*t,v=this-g,b=x.m(this,g);return b=(p={},p[d]=b/12,p[l]=b,p[u]=b/3,p[c]=(v-y)/6048e5,p[s]=(v-y)/864e5,p[o]=v/n,p[i]=v/t,p[a]=v/e,p)[m]||v,f?b:x.a(b)},y.daysInMonth=function(){return this.endOf(l).$D},y.$locale=function(){return w[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=$(e,t,!0);return r&&(n.$L=r),n},y.clone=function(){return x.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},g}(),F=O.prototype;return S.prototype=F,[["$ms",r],["$s",a],["$m",i],["$H",o],["$W",s],["$M",l],["$y",d],["$D",h]].forEach((function(e){F[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),S.extend=function(e,t){return e.$i||(e(t,O,S),e.$i=!0),S},S.locale=$,S.isDayjs=D,S.unix=function(e){return S(1e3*e)},S.en=w[b],S.Ls=w,S.p={},S}();var A,C=M(E.exports),P={exports:{}};A=e=>(()=>{var t={"./node_modules/css-mediaquery/index.js":
/*!**********************************************!*\
	  !*** ./node_modules/css-mediaquery/index.js ***!
	  \**********************************************/(e,t)=>{t.match=function(e,t){return s(e).some((function(e){var n=e.inverse,r="all"===e.type||t.type===e.type;if(r&&n||!r&&!n)return!1;var a=e.expressions.every((function(e){var n=e.feature,r=e.modifier,a=e.value,i=t[n];if(!i)return!1;switch(n){case"orientation":case"scan":return i.toLowerCase()===a.toLowerCase();case"width":case"height":case"device-width":case"device-height":a=u(a),i=u(i);break;case"resolution":a=l(a),i=l(i);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":a=c(a),i=c(i);break;case"grid":case"color":case"color-index":case"monochrome":a=parseInt(a,10)||1,i=parseInt(i,10)||0}switch(r){case"min":return i>=a;case"max":return i<=a;default:return i===a}}));return a&&!n||!a&&n}))},t.parse=s;var n=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,r=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,a=/^(?:(min|max)-)?(.+)/,i=/(em|rem|px|cm|mm|in|pt|pc)?$/,o=/(dpi|dpcm|dppx)?$/;function s(e){return e.split(",").map((function(e){var t=(e=e.trim()).match(n),i=t[1],o=t[2],s=t[3]||"",c={};return c.inverse=!!i&&"not"===i.toLowerCase(),c.type=o?o.toLowerCase():"all",s=s.match(/\([^\)]+\)/g)||[],c.expressions=s.map((function(e){var t=e.match(r),n=t[1].toLowerCase().match(a);return{modifier:n[1],feature:n[2],value:t[2]}})),c}))}function c(e){var t,n=Number(e);return n||(n=(t=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/t[2]),n}function l(e){var t=parseFloat(e);switch(String(e).match(o)[1]){case"dpcm":return t/2.54;case"dppx":return 96*t;default:return t}}function u(e){var t=parseFloat(e);switch(String(e).match(i)[1]){case"em":case"rem":return 16*t;case"cm":return 96*t/2.54;case"mm":return 96*t/2.54/10;case"in":return 96*t;case"pt":return 72*t;case"pc":return 72*t/12;default:return t}}},"./node_modules/hyphenate-style-name/index.js":
/*!****************************************************!*\
	  !*** ./node_modules/hyphenate-style-name/index.js ***!
	  \****************************************************/(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var r=/[A-Z]/g,a=/^ms-/,i={};function o(e){return"-"+e.toLowerCase()}const s=function(e){if(i.hasOwnProperty(e))return i[e];var t=e.replace(r,o);return i[e]=a.test(t)?"-"+t:t}},"./node_modules/matchmediaquery/index.js":
/*!***********************************************!*\
	  !*** ./node_modules/matchmediaquery/index.js ***!
	  \***********************************************/(e,t,n)=>{var r=n(/*! css-mediaquery */"./node_modules/css-mediaquery/index.js").match,a="undefined"!=typeof window?window.matchMedia:null;function i(e,t,n){var i=this;if(a&&!n){var o=a.call(window,e);this.matches=o.matches,this.media=o.media,o.addListener(s)}else this.matches=r(e,t),this.media=e;function s(e){i.matches=e.matches,i.media=e.media}this.addListener=function(e){o&&o.addListener(e)},this.removeListener=function(e){o&&o.removeListener(e)},this.dispose=function(){o&&o.removeListener(s)}}e.exports=function(e,t,n){return new i(e,t,n)}},"./node_modules/object-assign/index.js":
/*!*********************************************!*\
	  !*** ./node_modules/object-assign/index.js ***!
	  \*********************************************/e=>{
/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,a){for(var i,o,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var l in i=Object(arguments[c]))n.call(i,l)&&(s[l]=i[l]);if(t){o=t(i);for(var u=0;u<o.length;u++)r.call(i,o[u])&&(s[o[u]]=i[o[u]])}}return s}},"./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
	  !*** ./node_modules/prop-types/checkPropTypes.js ***!
	  \***************************************************/(e,t,n)=>{var r,a=n(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),i={},o=n(/*! ./lib/has */"./node_modules/prop-types/lib/has.js");function s(e,t,n,s,c){for(var l in e)if(o(e,l)){var u;try{if("function"!=typeof e[l]){var d=Error((s||"React class")+": "+n+" type `"+l+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[l]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw d.name="Invariant Violation",d}u=e[l](t,l,s,n,null,a)}catch(e){u=e}if(!u||u instanceof Error||r((s||"React class")+": type specification of "+n+" `"+l+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof u+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),u instanceof Error&&!(u.message in i)){i[u.message]=!0;var h=c?c():"";r("Failed "+n+" type: "+u.message+(null!=h?h:""))}}}r=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},s.resetWarningCache=function(){i={}},e.exports=s},"./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
	  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
	  \************************************************************/(e,t,n)=>{var r,a=n(/*! react-is */"./node_modules/react-is/index.js"),i=n(/*! object-assign */"./node_modules/object-assign/index.js"),o=n(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),s=n(/*! ./lib/has */"./node_modules/prop-types/lib/has.js"),c=n(/*! ./checkPropTypes */"./node_modules/prop-types/checkPropTypes.js");function l(){return null}r=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},e.exports=function(e,t){var n="function"==typeof Symbol&&Symbol.iterator,u="@@iterator",d="<<anonymous>>",h={array:g("array"),bigint:g("bigint"),bool:g("boolean"),func:g("function"),number:g("number"),object:g("object"),string:g("string"),symbol:g("symbol"),any:m(l),arrayOf:function(e){return m((function(t,n,r,a,i){if("function"!=typeof e)return new p("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var s=t[n];if(!Array.isArray(s))return new p("Invalid "+a+" `"+i+"` of type `"+b(s)+"` supplied to `"+r+"`, expected an array.");for(var c=0;c<s.length;c++){var l=e(s,c,r,a,i+"["+c+"]",o);if(l instanceof Error)return l}return null}))},element:m((function(t,n,r,a,i){var o=t[n];return e(o)?null:new p("Invalid "+a+" `"+i+"` of type `"+b(o)+"` supplied to `"+r+"`, expected a single ReactElement.")})),elementType:m((function(e,t,n,r,i){var o=e[t];return a.isValidElementType(o)?null:new p("Invalid "+r+" `"+i+"` of type `"+b(o)+"` supplied to `"+n+"`, expected a single ReactElement type.")})),instanceOf:function(e){return m((function(t,n,r,a,i){if(!(t[n]instanceof e)){var o=e.name||d;return new p("Invalid "+a+" `"+i+"` of type `"+((s=t[n]).constructor&&s.constructor.name?s.constructor.name:d)+"` supplied to `"+r+"`, expected instance of `"+o+"`.")}var s;return null}))},node:m((function(e,t,n,r,a){return v(e[t])?null:new p("Invalid "+r+" `"+a+"` supplied to `"+n+"`, expected a ReactNode.")})),objectOf:function(e){return m((function(t,n,r,a,i){if("function"!=typeof e)return new p("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var c=t[n],l=b(c);if("object"!==l)return new p("Invalid "+a+" `"+i+"` of type `"+l+"` supplied to `"+r+"`, expected an object.");for(var u in c)if(s(c,u)){var d=e(c,u,r,a,i+"."+u,o);if(d instanceof Error)return d}return null}))},oneOf:function(e){return Array.isArray(e)?m((function(t,n,r,a,i){for(var o=t[n],s=0;s<e.length;s++)if(f(o,e[s]))return null;var c=JSON.stringify(e,(function(e,t){return"symbol"===w(t)?String(t):t}));return new p("Invalid "+a+" `"+i+"` of value `"+String(o)+"` supplied to `"+r+"`, expected one of "+c+".")})):(r(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),l)},oneOfType:function(e){if(!Array.isArray(e))return r("Invalid argument supplied to oneOfType, expected an instance of array."),l;for(var t=0;t<e.length;t++){var n=e[t];if("function"!=typeof n)return r("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+D(n)+" at index "+t+"."),l}return m((function(t,n,r,a,i){for(var c=[],l=0;l<e.length;l++){var u=(0,e[l])(t,n,r,a,i,o);if(null==u)return null;u.data&&s(u.data,"expectedType")&&c.push(u.data.expectedType)}return new p("Invalid "+a+" `"+i+"` supplied to `"+r+"`"+(c.length>0?", expected one of type ["+c.join(", ")+"]":"")+".")}))},shape:function(e){return m((function(t,n,r,a,i){var s=t[n],c=b(s);if("object"!==c)return new p("Invalid "+a+" `"+i+"` of type `"+c+"` supplied to `"+r+"`, expected `object`.");for(var l in e){var u=e[l];if("function"!=typeof u)return y(r,a,i,l,w(u));var d=u(s,l,r,a,i+"."+l,o);if(d)return d}return null}))},exact:function(e){return m((function(t,n,r,a,c){var l=t[n],u=b(l);if("object"!==u)return new p("Invalid "+a+" `"+c+"` of type `"+u+"` supplied to `"+r+"`, expected `object`.");var d=i({},t[n],e);for(var h in d){var f=e[h];if(s(e,h)&&"function"!=typeof f)return y(r,a,c,h,w(f));if(!f)return new p("Invalid "+a+" `"+c+"` key `"+h+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var m=f(l,h,r,a,c+"."+h,o);if(m)return m}return null}))}};function f(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function p(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function m(e){var n={},a=0;function i(i,s,c,l,u,h,f){if(l=l||d,h=h||c,f!==o){if(t){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}if("undefined"!=typeof console){var g=l+":"+c;!n[g]&&a<3&&(r("You are manually calling a React.PropTypes validation function for the `"+h+"` prop on `"+l+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),n[g]=!0,a++)}}return null==s[c]?i?null===s[c]?new p("The "+u+" `"+h+"` is marked as required in `"+l+"`, but its value is `null`."):new p("The "+u+" `"+h+"` is marked as required in `"+l+"`, but its value is `undefined`."):null:e(s,c,l,u,h)}var s=i.bind(null,!1);return s.isRequired=i.bind(null,!0),s}function g(e){return m((function(t,n,r,a,i,o){var s=t[n];return b(s)!==e?new p("Invalid "+a+" `"+i+"` of type `"+w(s)+"` supplied to `"+r+"`, expected `"+e+"`.",{expectedType:e}):null}))}function y(e,t,n,r,a){return new p((e||"React class")+": "+t+" type `"+n+"."+r+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+a+"`.")}function v(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(v);if(null===t||e(t))return!0;var r=function(e){var t=e&&(n&&e[n]||e[u]);if("function"==typeof t)return t}(t);if(!r)return!1;var a,i=r.call(t);if(r!==t.entries){for(;!(a=i.next()).done;)if(!v(a.value))return!1}else for(;!(a=i.next()).done;){var o=a.value;if(o&&!v(o[1]))return!1}return!0;default:return!1}}function b(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function w(e){if(null==e)return""+e;var t=b(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function D(e){var t=w(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return p.prototype=Error.prototype,h.checkPropTypes=c,h.resetWarningCache=c.resetWarningCache,h.PropTypes=h,h}},"./node_modules/prop-types/index.js":
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
	  \***********************************************************/(e,t)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,n=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,a=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,o=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,c=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,u=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,f=e?Symbol.for("react.suspense_list"):60120,p=e?Symbol.for("react.memo"):60115,m=e?Symbol.for("react.lazy"):60116,g=e?Symbol.for("react.block"):60121,y=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,b=e?Symbol.for("react.scope"):60119;function w(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:var f=e.type;switch(f){case l:case u:case a:case o:case i:case h:return f;default:var g=f&&f.$$typeof;switch(g){case c:case d:case m:case p:case s:return g;default:return t}}case r:return t}}}var D=l,$=u,S=c,x=s,O=n,F=d,_=a,k=m,B=p,j=r,M=o,E=i,A=h,C=!1;function P(e){return w(e)===u}t.AsyncMode=D,t.ConcurrentMode=$,t.ContextConsumer=S,t.ContextProvider=x,t.Element=O,t.ForwardRef=F,t.Fragment=_,t.Lazy=k,t.Memo=B,t.Portal=j,t.Profiler=M,t.StrictMode=E,t.Suspense=A,t.isAsyncMode=function(e){return C||(C=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),P(e)||w(e)===l},t.isConcurrentMode=P,t.isContextConsumer=function(e){return w(e)===c},t.isContextProvider=function(e){return w(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return w(e)===d},t.isFragment=function(e){return w(e)===a},t.isLazy=function(e){return w(e)===m},t.isMemo=function(e){return w(e)===p},t.isPortal=function(e){return w(e)===r},t.isProfiler=function(e){return w(e)===o},t.isStrictMode=function(e){return w(e)===i},t.isSuspense=function(e){return w(e)===h},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===a||e===u||e===o||e===i||e===h||e===f||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===p||e.$$typeof===s||e.$$typeof===c||e.$$typeof===d||e.$$typeof===y||e.$$typeof===v||e.$$typeof===b||e.$$typeof===g)},t.typeOf=w}()},"./node_modules/react-is/index.js":
/*!****************************************!*\
	  !*** ./node_modules/react-is/index.js ***!
	  \****************************************/(e,t,n)=>{e.exports=n(/*! ./cjs/react-is.development.js */"./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":
/*!******************************************************!*\
	  !*** ./node_modules/shallow-equal/dist/index.esm.js ***!
	  \******************************************************/(e,t,n)=>{function r(e,t){if(e===t)return!0;if(!e||!t)return!1;var n=Object.keys(e),r=Object.keys(t),a=n.length;if(r.length!==a)return!1;for(var i=0;i<a;i++){var o=n[i];if(e[o]!==t[o]||!Object.prototype.hasOwnProperty.call(t,o))return!1}return!0}function a(e,t){if(e===t)return!0;if(!e||!t)return!1;var n=e.length;if(t.length!==n)return!1;for(var r=0;r<n;r++)if(e[r]!==t[r])return!1;return!0}n.r(t),n.d(t,{shallowEqualArrays:()=>a,shallowEqualObjects:()=>r})},"./src/Component.ts":
/*!**************************!*\
	  !*** ./src/Component.ts ***!
	  \**************************/function(e,t,n){var r=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=a(n(/*! ./useMediaQuery */"./src/useMediaQuery.ts"));t.default=function(e){var t=e.children,n=e.device,a=e.onChange,o=r(e,["children","device","onChange"]),s=(0,i.default)(o,n,a);return"function"==typeof t?t(s):s?t:null}},"./src/Context.ts":
/*!************************!*\
	  !*** ./src/Context.ts ***!
	  \************************/(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var r=(0,n(/*! react */"react").createContext)(void 0);t.default=r},"./src/index.ts":
/*!**********************!*\
	  !*** ./src/index.ts ***!
	  \**********************/function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Context=t.toQuery=t.useMediaQuery=t.default=void 0;var a=r(n(/*! ./useMediaQuery */"./src/useMediaQuery.ts"));t.useMediaQuery=a.default;var i=r(n(/*! ./Component */"./src/Component.ts"));t.default=i.default;var o=r(n(/*! ./toQuery */"./src/toQuery.ts"));t.toQuery=o.default;var s=r(n(/*! ./Context */"./src/Context.ts"));t.Context=s.default},"./src/mediaQuery.ts":
/*!***************************!*\
	  !*** ./src/mediaQuery.ts ***!
	  \***************************/function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},r.apply(this,arguments)},a=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=i(n(/*! prop-types */"./node_modules/prop-types/index.js")),s=o.default.oneOfType([o.default.string,o.default.number]),c={all:o.default.bool,grid:o.default.bool,aural:o.default.bool,braille:o.default.bool,handheld:o.default.bool,print:o.default.bool,projection:o.default.bool,screen:o.default.bool,tty:o.default.bool,tv:o.default.bool,embossed:o.default.bool},l={orientation:o.default.oneOf(["portrait","landscape"]),scan:o.default.oneOf(["progressive","interlace"]),aspectRatio:o.default.string,deviceAspectRatio:o.default.string,height:s,deviceHeight:s,width:s,deviceWidth:s,color:o.default.bool,colorIndex:o.default.bool,monochrome:o.default.bool,resolution:s,type:Object.keys(c)},u=a(l,["type"]),d=r({minAspectRatio:o.default.string,maxAspectRatio:o.default.string,minDeviceAspectRatio:o.default.string,maxDeviceAspectRatio:o.default.string,minHeight:s,maxHeight:s,minDeviceHeight:s,maxDeviceHeight:s,minWidth:s,maxWidth:s,minDeviceWidth:s,maxDeviceWidth:s,minColor:o.default.number,maxColor:o.default.number,minColorIndex:o.default.number,maxColorIndex:o.default.number,minMonochrome:o.default.number,maxMonochrome:o.default.number,minResolution:s,maxResolution:s},u),h=r(r({},c),d);t.default={all:h,types:c,matchers:l,features:d}},"./src/toQuery.ts":
/*!************************!*\
	  !*** ./src/toQuery.ts ***!
	  \************************/function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),i=r(n(/*! ./mediaQuery */"./src/mediaQuery.ts"));t.default=function(e){var t=[];return Object.keys(i.default.all).forEach((function(n){var r=e[n];null!=r&&t.push(function(e,t){var n=(0,a.default)(e);return"number"==typeof t&&(t="".concat(t,"px")),!0===t?n:!1===t?"not ".concat(n):"(".concat(n,": ").concat(t,")")}(n,r))})),t.join(" and ")}},"./src/useMediaQuery.ts":
/*!******************************!*\
	  !*** ./src/useMediaQuery.ts ***!
	  \******************************/function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(/*! react */"react"),i=r(n(/*! matchmediaquery */"./node_modules/matchmediaquery/index.js")),o=r(n(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),s=n(/*! shallow-equal */"./node_modules/shallow-equal/dist/index.esm.js"),c=r(n(/*! ./toQuery */"./src/toQuery.ts")),l=r(n(/*! ./Context */"./src/Context.ts")),u=function(e){if(e)return Object.keys(e).reduce((function(t,n){return t[(0,o.default)(n)]=e[n],t}),{})},d=function(){var e=(0,a.useRef)(!1);return(0,a.useEffect)((function(){e.current=!0}),[]),e.current},h=function(e){var t=function(){return function(e){return e.query||(0,c.default)(e)}(e)},n=(0,a.useState)(t),r=n[0],i=n[1];return(0,a.useEffect)((function(){var e=t();r!==e&&i(e)}),[e]),r};t.default=function(e,t,n){var r=function(e){var t=(0,a.useContext)(l.default),n=function(){return u(e)||u(t)},r=(0,a.useState)(n),i=r[0],o=r[1];return(0,a.useEffect)((function(){var e=n();(0,s.shallowEqualObjects)(i,e)||o(e)}),[e,t]),i}(t),o=h(e);if(!o)throw new Error("Invalid or missing MediaQuery!");var c=function(e,t){var n=function(){return(0,i.default)(e,t||{},!!t)},r=(0,a.useState)(n),o=r[0],s=r[1],c=d();return(0,a.useEffect)((function(){if(c){var e=n();return s(e),function(){e&&e.dispose()}}}),[e,t]),o}(o,r),f=function(e){var t=(0,a.useState)(e.matches),n=t[0],r=t[1];return(0,a.useEffect)((function(){var t=function(e){r(e.matches)};return e.addListener(t),r(e.matches),function(){e.removeListener(t)}}),[e]),n}(c),p=d();return(0,a.useEffect)((function(){p&&n&&n(f)}),[f]),(0,a.useEffect)((function(){return function(){c&&c.dispose()}}),[]),f}},react:
/*!**************************************************************************************!*\
	  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
	  \**************************************************************************************/t=>{t.exports=e}},n={};function r(e){var a=n[e];if(void 0!==a)return a.exports;var i=n[e]={exports:{}};return t[e].call(i.exports,i,i.exports,r),i.exports}return r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r("./src/index.ts")})();var H=P.exports=A(a);const I={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},R=e=>Object.keys(I).reduce(((t,n)=>{const r=I[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),T=R("max-width"),Y=(R("min-width"),I);var L=function(e,t){return L=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},L(e,t)};var z=function(){return z=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},z.apply(this,arguments)};var N="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var W=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},V="object"==typeof N&&N&&N.Object===Object&&N,q="object"==typeof self&&self&&self.Object===Object&&self,Q=V||q||Function("return this")(),U=Q,Z=function(){return U.Date.now()},G=/\s/;var X=function(e){for(var t=e.length;t--&&G.test(e.charAt(t)););return t},J=/^\s+/;var K=function(e){return e?e.slice(0,X(e)+1).replace(J,""):e},ee=Q.Symbol,te=ee,ne=Object.prototype,re=ne.hasOwnProperty,ae=ne.toString,ie=te?te.toStringTag:void 0;var oe=function(e){var t=re.call(e,ie),n=e[ie];try{e[ie]=void 0;var r=!0}catch(e){}var a=ae.call(e);return r&&(t?e[ie]=n:delete e[ie]),a},se=Object.prototype.toString;var ce=oe,le=function(e){return se.call(e)},ue=ee?ee.toStringTag:void 0;var de=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":ue&&ue in Object(e)?ce(e):le(e)},he=function(e){return null!=e&&"object"==typeof e};var fe=K,pe=W,me=function(e){return"symbol"==typeof e||he(e)&&"[object Symbol]"==de(e)},ge=/^[-+]0x[0-9a-f]+$/i,ye=/^0b[01]+$/i,ve=/^0o[0-7]+$/i,be=parseInt;var we=W,De=Z,$e=function(e){if("number"==typeof e)return e;if(me(e))return NaN;if(pe(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=pe(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=fe(e);var n=ye.test(e);return n||ve.test(e)?be(e.slice(2),n?2:8):ge.test(e)?NaN:+e},Se=Math.max,xe=Math.min;var Oe=function(e,t,n){var r,a,i,o,s,c,l=0,u=!1,d=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var n=r,i=a;return r=a=void 0,l=t,o=e.apply(i,n)}function p(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=i}function m(){var e=De();if(p(e))return g(e);s=setTimeout(m,function(e){var n=t-(e-c);return d?xe(n,i-(e-l)):n}(e))}function g(e){return s=void 0,h&&r?f(e):(r=a=void 0,o)}function y(){var e=De(),n=p(e);if(r=arguments,a=this,c=e,n){if(void 0===s)return function(e){return l=e,s=setTimeout(m,t),u?f(e):o}(c);if(d)return clearTimeout(s),s=setTimeout(m,t),f(c)}return void 0===s&&(s=setTimeout(m,t)),o}return t=$e(t)||0,we(n)&&(u=!!n.leading,i=(d="maxWait"in n)?Se($e(n.maxWait)||0,t):i,h="trailing"in n?!!n.trailing:h),y.cancel=function(){void 0!==s&&clearTimeout(s),l=0,r=c=a=s=void 0},y.flush=function(){return void 0===s?o:g(De())},y},Fe=Oe,_e=W;var ke=function(e,t,n){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return _e(n)&&(r="leading"in n?!!n.leading:r,a="trailing"in n?!!n.trailing:a),Fe(e,t,{leading:r,maxWait:t,trailing:a})},Be=function(e,t,n,r){switch(t){case"debounce":return Oe(e,n,r);case"throttle":return ke(e,n,r);default:return e}},je=function(e){return"function"==typeof e},Me=function(){return"undefined"==typeof window},Ee=function(e){return e instanceof Element||e instanceof HTMLDocument},Ae=function(e,t,n,r){return function(a){var i=a.width,o=a.height;t((function(t){return t.width===i&&t.height===o||t.width===i&&!r||t.height===o&&!n?t:(e&&je(e)&&e(i,o),{width:i,height:o})}))}};!function(e){function t(t){var n=e.call(this,t)||this;n.cancelHandler=function(){n.resizeHandler&&n.resizeHandler.cancel&&(n.resizeHandler.cancel(),n.resizeHandler=null)},n.attachObserver=function(){var e=n.props,t=e.targetRef,r=e.observerOptions;if(!Me()){t&&t.current&&(n.targetRef.current=t.current);var a=n.getElement();a&&(n.observableElement&&n.observableElement===a||(n.observableElement=a,n.resizeObserver.observe(a,r)))}},n.getElement=function(){var e=n.props,t=e.querySelector,r=e.targetDomEl;if(Me())return null;if(t)return document.querySelector(t);if(r&&Ee(r))return r;if(n.targetRef&&Ee(n.targetRef.current))return n.targetRef.current;var a=b(n);if(!a)return null;switch(n.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return a;default:return a.parentElement}},n.createResizeHandler=function(e){var t=n.props,r=t.handleWidth,a=void 0===r||r,i=t.handleHeight,o=void 0===i||i,s=t.onResize;if(a||o){var c=Ae(s,n.setState.bind(n),a,o);e.forEach((function(e){var t=e&&e.contentRect||{},r=t.width,a=t.height;!n.skipOnMount&&!Me()&&c({width:r,height:a}),n.skipOnMount=!1}))}},n.getRenderType=function(){var e=n.props,t=e.render,r=e.children;return je(t)?"renderProp":je(r)?"childFunction":s(r)?"child":Array.isArray(r)?"childArray":"parent"};var r=t.skipOnMount,a=t.refreshMode,i=t.refreshRate,o=void 0===i?1e3:i,l=t.refreshOptions;return n.state={width:void 0,height:void 0},n.skipOnMount=r,n.targetRef=c(),n.observableElement=null,Me()||(n.resizeHandler=Be(n.createResizeHandler,a,o,l),n.resizeObserver=new window.ResizeObserver(n.resizeHandler)),n}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}L(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){Me()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,n=t.render,a=t.children,i=t.nodeType,o=void 0===i?"div":i,s=this.state,c={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return n&&n(c);case"childFunction":return(e=a)(c);case"child":if((e=a).type&&"string"==typeof e.type){var u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(c,["targetRef"]);return l(e,u)}return l(e,c);case"childArray":return(e=a).map((function(e){return!!e&&l(e,c)}));default:return r.createElement(o,null)}}}(u);var Ce=Me()?d:h;function Pe(e){void 0===e&&(e={});var t=e.skipOnMount,n=void 0!==t&&t,r=e.refreshMode,a=e.refreshRate,s=void 0===a?1e3:a,c=e.refreshOptions,l=e.handleWidth,u=void 0===l||l,d=e.handleHeight,h=void 0===d||d,f=e.targetRef,p=e.observerOptions,m=e.onResize,g=i(n),y=i(null),v=null!=f?f:y,b=i(),w=o({width:void 0,height:void 0}),D=w[0],$=w[1];return Ce((function(){if(!Me()){var e=Ae(m,$,u,h);b.current=Be((function(t){(u||h)&&t.forEach((function(t){var n=t&&t.contentRect||{},r=n.width,a=n.height;!g.current&&!Me()&&e({width:r,height:a}),g.current=!1}))}),r,s,c);var t=new window.ResizeObserver(b.current);return v.current&&t.observe(v.current,p),function(){t.disconnect();var e=b.current;e&&e.cancel&&e.cancel()}}}),[r,s,c,u,h,m,p,v.current]),z({ref:v},D)}var He=Object.defineProperty,Ie={};((e,t)=>{for(var n in t)He(e,n,{get:t[n],enumerable:!0})})(Ie,{assign:()=>gt,colors:()=>ft,createStringInterpolator:()=>lt,skipAnimation:()=>pt,to:()=>ut,willAdvance:()=>mt});var Re=et(),Te=e=>Ge(e,Re),Ye=et();Te.write=e=>Ge(e,Ye);var Le=et();Te.onStart=e=>Ge(e,Le);var ze=et();Te.onFrame=e=>Ge(e,ze);var Ne=et();Te.onFinish=e=>Ge(e,Ne);var We=[];Te.setTimeout=(e,t)=>{const n=Te.now()+t,r=()=>{const e=We.findIndex((e=>e.cancel==r));~e&&We.splice(e,1),Ue-=~e?1:0},a={time:n,handler:e,cancel:r};return We.splice(Ve(n),0,a),Ue+=1,Xe(),a};var Ve=e=>~(~We.findIndex((t=>t.time>e))||~We.length);Te.cancel=e=>{Le.delete(e),ze.delete(e),Ne.delete(e),Re.delete(e),Ye.delete(e)},Te.sync=e=>{Ze=!0,Te.batchedUpdates(e),Ze=!1},Te.throttle=e=>{let t;function n(){try{e(...t)}finally{t=null}}function r(...e){t=e,Te.onStart(n)}return r.handler=e,r.cancel=()=>{Le.delete(n),t=null},r};var qe="undefined"!=typeof window?window.requestAnimationFrame:()=>{};Te.use=e=>qe=e,Te.now="undefined"!=typeof performance?()=>performance.now():Date.now,Te.batchedUpdates=e=>e(),Te.catch=console.error,Te.frameLoop="always",Te.advance=()=>{"demand"!==Te.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):Ke()};var Qe=-1,Ue=0,Ze=!1;function Ge(e,t){Ze?(t.delete(e),e(0)):(t.add(e),Xe())}function Xe(){Qe<0&&(Qe=0,"demand"!==Te.frameLoop&&qe(Je))}function Je(){~Qe&&(qe(Je),Te.batchedUpdates(Ke))}function Ke(){const e=Qe;Qe=Te.now();const t=Ve(Qe);t&&(tt(We.splice(0,t),(e=>e.handler())),Ue-=t),Ue?(Le.flush(),Re.flush(e?Math.min(64,Qe-e):16.667),ze.flush(),Ye.flush(),Ne.flush()):Qe=-1}function et(){let e=new Set,t=e;return{add(n){Ue+=t!=e||e.has(n)?0:1,e.add(n)},delete:n=>(Ue-=t==e&&e.has(n)?1:0,e.delete(n)),flush(n){t.size&&(e=new Set,Ue-=t.size,tt(t,(t=>t(n)&&e.add(t))),Ue+=e.size,t=e)}}}function tt(e,t){e.forEach((e=>{try{t(e)}catch(e){Te.catch(e)}}))}function nt(){}var rt={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function at(e,t){if(rt.arr(e)){if(!rt.arr(t)||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}return e===t}var it=(e,t)=>e.forEach(t);function ot(e,t,n){if(rt.arr(e))for(let r=0;r<e.length;r++)t.call(n,e[r],`${r}`);else for(const r in e)e.hasOwnProperty(r)&&t.call(n,e[r],r)}var st=e=>rt.und(e)?[]:rt.arr(e)?e:[e];function ct(e,t){if(e.size){const n=Array.from(e);e.clear(),it(n,t)}}var lt,ut,dt=(e,...t)=>ct(e,(e=>e(...t))),ht=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),ft=null,pt=!1,mt=nt,gt=e=>{e.to&&(ut=e.to),e.now&&(Te.now=e.now),void 0!==e.colors&&(ft=e.colors),null!=e.skipAnimation&&(pt=e.skipAnimation),e.createStringInterpolator&&(lt=e.createStringInterpolator),e.requestAnimationFrame&&Te.use(e.requestAnimationFrame),e.batchedUpdates&&(Te.batchedUpdates=e.batchedUpdates),e.willAdvance&&(mt=e.willAdvance),e.frameLoop&&(Te.frameLoop=e.frameLoop)},yt=new Set,vt=[],bt=[],wt=0,Dt={get idle(){return!yt.size&&!vt.length},start(e){wt>e.priority?(yt.add(e),Te.onStart($t)):(St(e),Te(Ot))},advance:Ot,sort(e){if(wt)Te.onFrame((()=>Dt.sort(e)));else{const t=vt.indexOf(e);~t&&(vt.splice(t,1),xt(e))}},clear(){vt=[],yt.clear()}};function $t(){yt.forEach(St),yt.clear(),Te(Ot)}function St(e){vt.includes(e)||xt(e)}function xt(e){vt.splice(function(e,t){const n=e.findIndex(t);return n<0?e.length:n}(vt,(t=>t.priority>e.priority)),0,e)}function Ot(e){const t=bt;for(let n=0;n<vt.length;n++){const r=vt[n];wt=r.priority,r.idle||(mt(r),r.advance(e),r.idle||t.push(r))}return wt=0,(bt=vt).length=0,(vt=t).length>0}var Ft="[-+]?\\d*\\.?\\d+",_t=Ft+"%";function kt(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var Bt=new RegExp("rgb"+kt(Ft,Ft,Ft)),jt=new RegExp("rgba"+kt(Ft,Ft,Ft,Ft)),Mt=new RegExp("hsl"+kt(Ft,_t,_t)),Et=new RegExp("hsla"+kt(Ft,_t,_t,Ft)),At=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Ct=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Pt=/^#([0-9a-fA-F]{6})$/,Ht=/^#([0-9a-fA-F]{8})$/;function It(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Rt(e,t,n){const r=n<.5?n*(1+t):n+t-n*t,a=2*n-r,i=It(a,r,e+1/3),o=It(a,r,e),s=It(a,r,e-1/3);return Math.round(255*i)<<24|Math.round(255*o)<<16|Math.round(255*s)<<8}function Tt(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function Yt(e){return(parseFloat(e)%360+360)%360/360}function Lt(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function zt(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function Nt(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=Pt.exec(e))?parseInt(t[1]+"ff",16)>>>0:ft&&void 0!==ft[e]?ft[e]:(t=Bt.exec(e))?(Tt(t[1])<<24|Tt(t[2])<<16|Tt(t[3])<<8|255)>>>0:(t=jt.exec(e))?(Tt(t[1])<<24|Tt(t[2])<<16|Tt(t[3])<<8|Lt(t[4]))>>>0:(t=At.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=Ht.exec(e))?parseInt(t[1],16)>>>0:(t=Ct.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=Mt.exec(e))?(255|Rt(Yt(t[1]),zt(t[2]),zt(t[3])))>>>0:(t=Et.exec(e))?(Rt(Yt(t[1]),zt(t[2]),zt(t[3]))|Lt(t[4]))>>>0:null}(e);if(null===t)return e;t=t||0;return`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`}var Wt=(e,t,n)=>{if(rt.fun(e))return e;if(rt.arr(e))return Wt({range:e,output:t,extrapolate:n});if(rt.str(e.output[0]))return lt(e);const r=e,a=r.output,i=r.range||[0,1],o=r.extrapolateLeft||r.extrapolate||"extend",s=r.extrapolateRight||r.extrapolate||"extend",c=r.easing||(e=>e);return e=>{const t=function(e,t){for(var n=1;n<t.length-1&&!(t[n]>=e);++n);return n-1}(e,i);return function(e,t,n,r,a,i,o,s,c){let l=c?c(e):e;if(l<t){if("identity"===o)return l;"clamp"===o&&(l=t)}if(l>n){if("identity"===s)return l;"clamp"===s&&(l=n)}if(r===a)return r;if(t===n)return e<=t?r:a;t===-1/0?l=-l:n===1/0?l-=t:l=(l-t)/(n-t);l=i(l),r===-1/0?l=-l:a===1/0?l+=r:l=l*(a-r)+r;return l}(e,i[t],i[t+1],a[t],a[t+1],c,o,s,r.map)}};var Vt=1.70158,qt=1.525*Vt,Qt=Vt+1,Ut=2*Math.PI/3,Zt=2*Math.PI/4.5,Gt=e=>{const t=7.5625,n=2.75;return e<1/n?t*e*e:e<2/n?t*(e-=1.5/n)*e+.75:e<2.5/n?t*(e-=2.25/n)*e+.9375:t*(e-=2.625/n)*e+.984375},Xt={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>Qt*e*e*e-Vt*e*e,easeOutBack:e=>1+Qt*Math.pow(e-1,3)+Vt*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-qt)/2:(Math.pow(2*e-2,2)*((qt+1)*(2*e-2)+qt)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*Ut),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*Ut)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*Zt)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*Zt)/2+1,easeInBounce:e=>1-Gt(1-e),easeOutBounce:Gt,easeInOutBounce:e=>e<.5?(1-Gt(1-2*e))/2:(1+Gt(2*e-1))/2,steps:(e,t="end")=>n=>{const r=(n="end"===t?Math.min(n,.999):Math.max(n,.001))*e,a="end"===t?Math.floor(r):Math.ceil(r);return i=0,o=1,s=a/e,Math.min(Math.max(s,i),o);var i,o,s}},Jt=Symbol.for("FluidValue.get"),Kt=Symbol.for("FluidValue.observers"),en=e=>Boolean(e&&e[Jt]),tn=e=>e&&e[Jt]?e[Jt]():e,nn=e=>e[Kt]||null;function rn(e,t){const n=e[Kt];n&&n.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}var an=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");on(this,e)}},on=(e,t)=>un(e,Jt,t);function sn(e,t){if(e[Jt]){let n=e[Kt];n||un(e,Kt,n=new Set),n.has(t)||(n.add(t),e.observerAdded&&e.observerAdded(n.size,t))}return t}function cn(e,t){const n=e[Kt];if(n&&n.has(t)){const r=n.size-1;r?n.delete(t):e[Kt]=null,e.observerRemoved&&e.observerRemoved(r,t)}}var ln,un=(e,t,n)=>Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0}),dn=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,hn=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,fn=new RegExp(`(${dn.source})(%|[a-z]+)`,"i"),pn=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,mn=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,gn=e=>{const[t,n]=yn(e);if(!t||ht())return e;const r=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(r)return r.trim();if(n&&n.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(n);return t||e}return n&&mn.test(n)?gn(n):n||e},yn=e=>{const t=mn.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]},vn=(e,t,n,r,a)=>`rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${a})`,bn=e=>{ln||(ln=ft?new RegExp(`(${Object.keys(ft).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>tn(e).replace(mn,gn).replace(hn,Nt).replace(ln,Nt))),n=t.map((e=>e.match(dn).map(Number))),r=n[0].map(((e,t)=>n.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>Wt({...e,output:t})));return e=>{const n=!fn.test(t[0])&&t.find((e=>fn.test(e)))?.replace(dn,"");let a=0;return t[0].replace(dn,(()=>`${r[a++](e)}${n||""}`)).replace(pn,vn)}},wn="react-spring: ",Dn=e=>{const t=e;let n=!1;if("function"!=typeof t)throw new TypeError(`${wn}once requires a function parameter`);return(...e)=>{n||(t(...e),n=!0)}},$n=Dn(console.warn);var Sn=Dn(console.warn);function xn(e){return rt.str(e)&&("#"==e[0]||/\d/.test(e)||!ht()&&mn.test(e)||e in(ft||{}))}var On=ht()?d:h,Fn=()=>{const e=i(!1);return On((()=>(e.current=!0,()=>{e.current=!1})),[]),e};function _n(){const e=o()[1],t=Fn();return()=>{t.current&&e(Math.random())}}var kn=e=>d(e,Bn),Bn=[];function jn(e){const t=i();return d((()=>{t.current=e})),t.current}var Mn=Symbol.for("Animated:node"),En=e=>e&&e[Mn],An=(e,t)=>{return n=e,r=Mn,a=t,Object.defineProperty(n,r,{value:a,writable:!0,configurable:!0});var n,r,a},Cn=e=>e&&e[Mn]&&e[Mn].getPayload(),Pn=class{constructor(){An(this,this)}getPayload(){return this.payload||[]}},Hn=class extends Pn{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,rt.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new Hn(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return rt.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,rt.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},In=class extends Hn{constructor(e){super(0),this._string=null,this._toString=Wt({output:[e,e]})}static create(e){return new In(e)}getValue(){const e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(rt.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=Wt({output:[this.getValue(),e]})),this._value=0,super.reset()}},Rn={dependencies:null},Tn=class extends Pn{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return ot(this.source,((n,r)=>{var a;(a=n)&&a[Mn]===a?t[r]=n.getValue(e):en(n)?t[r]=tn(n):e||(t[r]=n)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&it(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return ot(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){Rn.dependencies&&en(e)&&Rn.dependencies.add(e);const t=Cn(e);t&&it(t,(e=>this.add(e)))}},Yn=class extends Tn{constructor(e){super(e)}static create(e){return new Yn(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,n)=>t.setValue(e[n]))).some(Boolean):(super.setValue(e.map(Ln)),!0)}};function Ln(e){return(xn(e)?In:Hn).create(e)}function zn(e){const t=En(e);return t?t.constructor:rt.arr(e)?Yn:xn(e)?In:Hn}var Nn=(e,t)=>{const n=!rt.fun(e)||e.prototype&&e.prototype.isReactComponent;return f(((a,o)=>{const s=i(null),c=n&&p((e=>{s.current=function(e,t){e&&(rt.fun(e)?e(t):e.current=t);return t}(o,e)}),[o]),[l,u]=function(e,t){const n=new Set;Rn.dependencies=n,e.style&&(e={...e,style:t.createAnimatedStyle(e.style)});return e=new Tn(e),Rn.dependencies=null,[e,n]}(a,t),h=_n(),f=()=>{const e=s.current;if(n&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,l.getValue(!0)))&&h()},m=new Wn(f,u),g=i();On((()=>(g.current=m,it(u,(e=>sn(e,m))),()=>{g.current&&(it(g.current.deps,(e=>cn(e,g.current))),Te.cancel(g.current.update))}))),d(f,[]),kn((()=>()=>{const e=g.current;it(e.deps,(t=>cn(t,e)))}));const y=t.getComponentProps(l.getValue());return r.createElement(e,{...y,ref:c})}))},Wn=class{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&Te.write(this.update)}};var Vn=Symbol.for("AnimatedComponent"),qn=e=>rt.str(e)?e:e&&rt.str(e.displayName)?e.displayName:rt.fun(e)&&e.name||null;function Qn(e,...t){return rt.fun(e)?e(...t):e}var Un=(e,t)=>!0===e||!!(t&&e&&(rt.fun(e)?e(t):st(e).includes(t))),Zn=(e,t)=>rt.obj(e)?t&&e[t]:e,Gn=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,Xn=e=>e,Jn=(e,t=Xn)=>{let n=Kn;e.default&&!0!==e.default&&(e=e.default,n=Object.keys(e));const r={};for(const a of n){const n=t(e[a],a);rt.und(n)||(r[a]=n)}return r},Kn=["config","onProps","onStart","onChange","onPause","onResume","onRest"],er={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function tr(e){const t=function(e){const t={};let n=0;if(ot(e,((e,r)=>{er[r]||(t[r]=e,n++)})),n)return t}(e);if(t){const n={to:t};return ot(e,((e,r)=>r in t||(n[r]=e))),n}return{...e}}function nr(e){return e=tn(e),rt.arr(e)?e.map(nr):xn(e)?Ie.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function rr(e){return rt.fun(e)||rt.arr(e)&&rt.obj(e[0])}var ar={tension:170,friction:26,mass:1,damping:1,easing:Xt.linear,clamp:!1},ir=class{constructor(){this.velocity=0,Object.assign(this,ar)}};function or(e,t){if(rt.und(t.decay)){const n=!rt.und(t.tension)||!rt.und(t.friction);!n&&rt.und(t.frequency)&&rt.und(t.damping)&&rt.und(t.mass)||(e.duration=void 0,e.decay=void 0),n&&(e.frequency=void 0)}else e.duration=void 0}var sr=[],cr=class{constructor(){this.changed=!1,this.values=sr,this.toValues=null,this.fromValues=sr,this.config=new ir,this.immediate=!1}};function lr(e,{key:t,props:n,defaultProps:r,state:a,actions:i}){return new Promise(((o,s)=>{let c,l,u=Un(n.cancel??r?.cancel,t);if(u)f();else{rt.und(n.pause)||(a.paused=Un(n.pause,t));let e=r?.pause;!0!==e&&(e=a.paused||Un(e,t)),c=Qn(n.delay||0,t),e?(a.resumeQueue.add(h),i.pause()):(i.resume(),h())}function d(){a.resumeQueue.add(h),a.timeouts.delete(l),l.cancel(),c=l.time-Te.now()}function h(){c>0&&!Ie.skipAnimation?(a.delayed=!0,l=Te.setTimeout(f,c),a.pauseQueue.add(d),a.timeouts.add(l)):f()}function f(){a.delayed&&(a.delayed=!1),a.pauseQueue.delete(d),a.timeouts.delete(l),e<=(a.cancelId||0)&&(u=!0);try{i.start({...n,callId:e,cancel:u},o)}catch(e){s(e)}}}))}var ur=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?fr(e.get()):t.every((e=>e.noop))?dr(e.get()):hr(e.get(),t.every((e=>e.finished))),dr=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),hr=(e,t,n=!1)=>({value:e,finished:t,cancelled:n}),fr=e=>({value:e,cancelled:!0,finished:!1});function pr(e,t,n,r){const{callId:a,parentId:i,onRest:o}=t,{asyncTo:s,promise:c}=n;return i||e!==s||t.reset?n.promise=(async()=>{n.asyncId=a,n.asyncTo=e;const l=Jn(t,((e,t)=>"onRest"===t?void 0:e));let u,d;const h=new Promise(((e,t)=>(u=e,d=t))),f=e=>{const t=a<=(n.cancelId||0)&&fr(r)||a!==n.asyncId&&hr(r,!1);if(t)throw e.result=t,d(e),e},p=(e,t)=>{const i=new gr,o=new yr;return(async()=>{if(Ie.skipAnimation)throw mr(n),o.result=hr(r,!1),d(o),o;f(i);const s=rt.obj(e)?{...e}:{...t,to:e};s.parentId=a,ot(l,((e,t)=>{rt.und(s[t])&&(s[t]=e)}));const c=await r.start(s);return f(i),n.paused&&await new Promise((e=>{n.resumeQueue.add(e)})),c})()};let m;if(Ie.skipAnimation)return mr(n),hr(r,!1);try{let t;t=rt.arr(e)?(async e=>{for(const t of e)await p(t)})(e):Promise.resolve(e(p,r.stop.bind(r))),await Promise.all([t.then(u),h]),m=hr(r.get(),!0,!1)}catch(e){if(e instanceof gr)m=e.result;else{if(!(e instanceof yr))throw e;m=e.result}}finally{a==n.asyncId&&(n.asyncId=i,n.asyncTo=i?s:void 0,n.promise=i?c:void 0)}return rt.fun(o)&&Te.batchedUpdates((()=>{o(m,r,r.item)})),m})():c}function mr(e,t){ct(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}var gr=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},yr=class extends Error{constructor(){super("SkipAnimationSignal")}},vr=e=>e instanceof wr,br=1,wr=class extends an{constructor(){super(...arguments),this.id=br++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=En(this);return e&&e.getValue()}to(...e){return Ie.to(this,e)}interpolate(...e){return $n(`${wn}The "interpolate" function is deprecated in v9 (use "to" instead)`),Ie.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){rn(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||Dt.sort(this),rn(this,{type:"priority",parent:this,priority:e})}},Dr=Symbol.for("SpringPhase"),$r=e=>(1&e[Dr])>0,Sr=e=>(2&e[Dr])>0,xr=e=>(4&e[Dr])>0,Or=(e,t)=>t?e[Dr]|=3:e[Dr]&=-3,Fr=(e,t)=>t?e[Dr]|=4:e[Dr]&=-5,_r=class extends wr{constructor(e,t){if(super(),this.animation=new cr,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!rt.und(e)||!rt.und(t)){const n=rt.obj(e)?{...e}:{...t,from:e};rt.und(n.default)&&(n.default=!0),this.start(n)}}get idle(){return!(Sr(this)||this._state.asyncTo)||xr(this)}get goal(){return tn(this.animation.to)}get velocity(){const e=En(this);return e instanceof Hn?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return $r(this)}get isAnimating(){return Sr(this)}get isPaused(){return xr(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,n=!1;const r=this.animation;let{toValues:a}=r;const{config:i}=r,o=Cn(r.to);!o&&en(r.to)&&(a=st(tn(r.to))),r.values.forEach(((s,c)=>{if(s.done)return;const l=s.constructor==In?1:o?o[c].lastPosition:a[c];let u=r.immediate,d=l;if(!u){if(d=s.lastPosition,i.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const n=r.fromValues[c],a=null!=s.v0?s.v0:s.v0=rt.arr(i.velocity)?i.velocity[c]:i.velocity;let o;const h=i.precision||(n==l?.005:Math.min(1,.001*Math.abs(l-n)));if(rt.und(i.duration))if(i.decay){const e=!0===i.decay?.998:i.decay,r=Math.exp(-(1-e)*t);d=n+a/(1-e)*(1-r),u=Math.abs(s.lastPosition-d)<=h,o=a*r}else{o=null==s.lastVelocity?a:s.lastVelocity;const t=i.restVelocity||h/10,r=i.clamp?0:i.bounce,c=!rt.und(r),f=n==l?s.v0>0:n<l;let p,m=!1;const g=1,y=Math.ceil(e/g);for(let e=0;e<y&&(p=Math.abs(o)>t,p||(u=Math.abs(l-d)<=h,!u));++e){c&&(m=d==l||d>l==f,m&&(o=-o*r,d=l));o+=(1e-6*-i.tension*(d-l)+.001*-i.friction*o)/i.mass*g,d+=o*g}}else{let r=1;i.duration>0&&(this._memoizedDuration!==i.duration&&(this._memoizedDuration=i.duration,s.durationProgress>0&&(s.elapsedTime=i.duration*s.durationProgress,t=s.elapsedTime+=e)),r=(i.progress||0)+t/this._memoizedDuration,r=r>1?1:r<0?0:r,s.durationProgress=r),d=n+i.easing(r)*(l-n),o=(d-s.lastPosition)/e,u=1==r}s.lastVelocity=o,Number.isNaN(d)&&(console.warn("Got NaN while animating:",this),u=!0)}o&&!o[c].done&&(u=!1),u?s.done=!0:t=!1,s.setValue(d,i.round)&&(n=!0)}));const s=En(this),c=s.getValue();if(t){const e=tn(r.to);c===e&&!n||i.decay?n&&i.decay&&this._onChange(c):(s.setValue(e),this._onChange(e)),this._stop()}else n&&this._onChange(c)}set(e){return Te.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(Sr(this)){const{to:e,config:t}=this.animation;Te.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let n;return rt.und(e)?(n=this.queue||[],this.queue=[]):n=[rt.obj(e)?e:{...t,to:e}],Promise.all(n.map((e=>this._update(e)))).then((e=>ur(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),mr(this._state,e&&this._lastCallId),Te.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:n,from:r}=e;n=rt.obj(n)?n[t]:n,(null==n||rr(n))&&(n=void 0),r=rt.obj(r)?r[t]:r,null==r&&(r=void 0);const a={to:n,from:r};return $r(this)||(e.reverse&&([n,r]=[r,n]),r=tn(r),rt.und(r)?En(this)||this._set(n):this._set(r)),a}_update({...e},t){const{key:n,defaultProps:r}=this;e.default&&Object.assign(r,Jn(e,((e,t)=>/^on/.test(t)?Zn(e,n):e))),Cr(this,e,"onProps"),Pr(this,"onProps",e,this);const a=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const i=this._state;return lr(++this._lastCallId,{key:n,props:e,defaultProps:r,state:i,actions:{pause:()=>{xr(this)||(Fr(this,!0),dt(i.pauseQueue),Pr(this,"onPause",hr(this,kr(this,this.animation.to)),this))},resume:()=>{xr(this)&&(Fr(this,!1),Sr(this)&&this._resume(),dt(i.resumeQueue),Pr(this,"onResume",hr(this,kr(this,this.animation.to)),this))},start:this._merge.bind(this,a)}}).then((n=>{if(e.loop&&n.finished&&(!t||!n.noop)){const t=Br(e);if(t)return this._update(t,!0)}return n}))}_merge(e,t,n){if(t.cancel)return this.stop(!0),n(fr(this));const r=!rt.und(e.to),a=!rt.und(e.from);if(r||a){if(!(t.callId>this._lastToId))return n(fr(this));this._lastToId=t.callId}const{key:i,defaultProps:o,animation:s}=this,{to:c,from:l}=s;let{to:u=c,from:d=l}=e;!a||r||t.default&&!rt.und(u)||(u=d),t.reverse&&([u,d]=[d,u]);const h=!at(d,l);h&&(s.from=d),d=tn(d);const f=!at(u,c);f&&this._focus(u);const p=rr(t.to),{config:m}=s,{decay:g,velocity:y}=m;(r||a)&&(m.velocity=0),t.config&&!p&&function(e,t,n){n&&(or(n={...n},t),t={...n,...t}),or(e,t),Object.assign(e,t);for(const t in ar)null==e[t]&&(e[t]=ar[t]);let{frequency:r,damping:a}=e;const{mass:i}=e;rt.und(r)||(r<.01&&(r=.01),a<0&&(a=0),e.tension=Math.pow(2*Math.PI/r,2)*i,e.friction=4*Math.PI*a*i/r)}(m,Qn(t.config,i),t.config!==o.config?Qn(o.config,i):void 0);let v=En(this);if(!v||rt.und(u))return n(hr(this,!0));const b=rt.und(t.reset)?a&&!t.default:!rt.und(d)&&Un(t.reset,i),w=b?d:this.get(),D=nr(u),$=rt.num(D)||rt.arr(D)||xn(D),S=!p&&(!$||Un(o.immediate||t.immediate,i));if(f){const e=zn(u);if(e!==v.constructor){if(!S)throw Error(`Cannot animate between ${v.constructor.name} and ${e.name}, as the "to" prop suggests`);v=this._set(D)}}const x=v.constructor;let O=en(u),F=!1;if(!O){const e=b||!$r(this)&&h;(f||e)&&(F=at(nr(w),D),O=!F),(at(s.immediate,S)||S)&&at(m.decay,g)&&at(m.velocity,y)||(O=!0)}if(F&&Sr(this)&&(s.changed&&!b?O=!0:O||this._stop(c)),!p&&((O||en(c))&&(s.values=v.getPayload(),s.toValues=en(u)?null:x==In?[1]:st(D)),s.immediate!=S&&(s.immediate=S,S||b||this._set(c)),O)){const{onRest:e}=s;it(Ar,(e=>Cr(this,t,e)));const r=hr(this,kr(this,c));dt(this._pendingCalls,r),this._pendingCalls.add(n),s.changed&&Te.batchedUpdates((()=>{s.changed=!b,e?.(r,this),b?Qn(o.onRest,r):s.onStart?.(r,this)}))}b&&this._set(w),p?n(pr(t.to,t,this._state,this)):O?this._start():Sr(this)&&!f?this._pendingCalls.add(n):n(dr(w))}_focus(e){const t=this.animation;e!==t.to&&(nn(this)&&this._detach(),t.to=e,nn(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;en(t)&&(sn(t,this),vr(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;en(e)&&cn(e,this)}_set(e,t=!0){const n=tn(e);if(!rt.und(n)){const e=En(this);if(!e||!at(n,e.getValue())){const r=zn(n);e&&e.constructor==r?e.setValue(n):An(this,r.create(n)),e&&Te.batchedUpdates((()=>{this._onChange(n,t)}))}}return En(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,Pr(this,"onStart",hr(this,kr(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),Qn(this.animation.onChange,e,this)),Qn(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;En(this).reset(tn(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),Sr(this)||(Or(this,!0),xr(this)||this._resume())}_resume(){Ie.skipAnimation?this.finish():Dt.start(this)}_stop(e,t){if(Sr(this)){Or(this,!1);const n=this.animation;it(n.values,(e=>{e.done=!0})),n.toValues&&(n.onChange=n.onPause=n.onResume=void 0),rn(this,{type:"idle",parent:this});const r=t?fr(this.get()):hr(this.get(),kr(this,e??n.to));dt(this._pendingCalls,r),n.changed&&(n.changed=!1,Pr(this,"onRest",r,this))}}};function kr(e,t){const n=nr(t);return at(nr(e.get()),n)}function Br(e,t=e.loop,n=e.to){const r=Qn(t);if(r){const a=!0!==r&&tr(r),i=(a||e).reverse,o=!a||a.reset;return jr({...e,loop:t,default:!1,pause:void 0,to:!i||rr(n)?n:void 0,from:o?e.from:void 0,reset:o,...a})}}function jr(e){const{to:t,from:n}=e=tr(e),r=new Set;return rt.obj(t)&&Er(t,r),rt.obj(n)&&Er(n,r),e.keys=r.size?Array.from(r):null,e}function Mr(e){const t=jr(e);return rt.und(t.default)&&(t.default=Jn(t)),t}function Er(e,t){ot(e,((e,n)=>null!=e&&t.add(n)))}var Ar=["onStart","onRest","onChange","onPause","onResume"];function Cr(e,t,n){e.animation[n]=t[n]!==Gn(t,n)?Zn(t[n],e.key):void 0}function Pr(e,t,...n){e.animation[t]?.(...n),e.defaultProps[t]?.(...n)}var Hr=["onStart","onChange","onRest"],Ir=1,Rr=class{constructor(e,t){this.id=Ir++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,n)=>e[n]=t.get())),e}set(e){for(const t in e){const n=e[t];rt.und(n)||this.springs[t].set(n)}}update(e){return e&&this.queue.push(jr(e)),this}start(e){let{queue:t}=this;return e?t=st(e).map(jr):this.queue=[],this._flush?this._flush(this,t):(Vr(this,t),Tr(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const n=this.springs;it(st(t),(t=>n[t].stop(!!e)))}else mr(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(rt.und(e))this.start({pause:!0});else{const t=this.springs;it(st(e),(e=>t[e].pause()))}return this}resume(e){if(rt.und(e))this.start({pause:!1});else{const t=this.springs;it(st(e),(e=>t[e].resume()))}return this}each(e){ot(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:n}=this._events,r=this._active.size>0,a=this._changed.size>0;(r&&!this._started||a&&!this._started)&&(this._started=!0,ct(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const i=!r&&this._started,o=a||i&&n.size?this.get():null;a&&t.size&&ct(t,(([e,t])=>{t.value=o,e(t,this,this._item)})),i&&(this._started=!1,ct(n,(([e,t])=>{t.value=o,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}Te.onFrame(this._onFrame)}};function Tr(e,t){return Promise.all(t.map((t=>Yr(e,t)))).then((t=>ur(e,t)))}async function Yr(e,t,n){const{keys:r,to:a,from:i,loop:o,onRest:s,onResolve:c}=t,l=rt.obj(t.default)&&t.default;o&&(t.loop=!1),!1===a&&(t.to=null),!1===i&&(t.from=null);const u=rt.arr(a)||rt.fun(a)?a:void 0;u?(t.to=void 0,t.onRest=void 0,l&&(l.onRest=void 0)):it(Hr,(n=>{const r=t[n];if(rt.fun(r)){const a=e._events[n];t[n]=({finished:e,cancelled:t})=>{const n=a.get(r);n?(e||(n.finished=!1),t&&(n.cancelled=!0)):a.set(r,{value:null,finished:e||!1,cancelled:t||!1})},l&&(l[n]=t[n])}}));const d=e._state;t.pause===!d.paused?(d.paused=t.pause,dt(t.pause?d.pauseQueue:d.resumeQueue)):d.paused&&(t.pause=!0);const h=(r||Object.keys(e.springs)).map((n=>e.springs[n].start(t))),f=!0===t.cancel||!0===Gn(t,"cancel");(u||f&&d.asyncId)&&h.push(lr(++e._lastAsyncId,{props:t,state:d,actions:{pause:nt,resume:nt,start(t,n){f?(mr(d,e._lastAsyncId),n(fr(e))):(t.onRest=s,n(pr(u,t,d,e)))}}})),d.paused&&await new Promise((e=>{d.resumeQueue.add(e)}));const p=ur(e,await Promise.all(h));if(o&&p.finished&&(!n||!p.noop)){const n=Br(t,o,a);if(n)return Vr(e,[n]),Yr(e,n,!0)}return c&&Te.batchedUpdates((()=>c(p,e,e.item))),p}function Lr(e,t){const n={...e.springs};return t&&it(st(t),(e=>{rt.und(e.keys)&&(e=jr(e)),rt.obj(e.to)||(e={...e,to:void 0}),Wr(n,e,(e=>Nr(e)))})),zr(e,n),n}function zr(e,t){ot(t,((t,n)=>{e.springs[n]||(e.springs[n]=t,sn(t,e))}))}function Nr(e,t){const n=new _r;return n.key=e,t&&sn(n,t),n}function Wr(e,t,n){t.keys&&it(t.keys,(r=>{(e[r]||(e[r]=n(r)))._prepareNode(t)}))}function Vr(e,t){it(t,(t=>{Wr(e.springs,t,(t=>Nr(t,e)))}))}var qr,Qr,Ur=({children:e,...t})=>{const n=m(Zr),a=t.pause||!!n.pause,s=t.immediate||!!n.immediate;t=function(e,t){const[n]=o((()=>({inputs:t,result:e()}))),r=i(),a=r.current;let s=a;s?Boolean(t&&s.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}(t,s.inputs))||(s={inputs:t,result:e()}):s=n;return d((()=>{r.current=s,a==n&&(n.inputs=n.result=void 0)}),[s]),s.result}((()=>({pause:a,immediate:s})),[a,s]);const{Provider:c}=Zr;return r.createElement(c,{value:t},e)},Zr=(qr=Ur,Qr={},Object.assign(qr,r.createContext(Qr)),qr.Provider._context=qr,qr.Consumer._context=qr,qr);Ur.Provider=Zr.Provider,Ur.Consumer=Zr.Consumer;var Gr=()=>{const e=[],t=function(t){Sn(`${wn}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const r=[];return it(e,((e,a)=>{if(rt.und(t))r.push(e.start());else{const i=n(t,e,a);i&&r.push(e.start(i))}})),r};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const n=e.indexOf(t);~n&&e.splice(n,1)},t.pause=function(){return it(e,(e=>e.pause(...arguments))),this},t.resume=function(){return it(e,(e=>e.resume(...arguments))),this},t.set=function(t){it(e,((e,n)=>{const r=rt.fun(t)?t(n,e):t;r&&e.set(r)}))},t.start=function(t){const n=[];return it(e,((e,r)=>{if(rt.und(t))n.push(e.start());else{const a=this._getProps(t,e,r);a&&n.push(e.start(a))}})),n},t.stop=function(){return it(e,(e=>e.stop(...arguments))),this},t.update=function(t){return it(e,((e,n)=>e.update(this._getProps(t,e,n)))),this};const n=function(e,t,n){return rt.fun(e)?e(n,t):e};return t._getProps=n,t};function Xr(e,t){const n=rt.fun(e),[[r],a]=function(e,t,n){const r=rt.fun(t)&&t;r&&!n&&(n=[]);const a=g((()=>r||3==arguments.length?Gr():void 0),[]),o=i(0),s=_n(),c=g((()=>({ctrls:[],queue:[],flush(e,t){const n=Lr(e,t);return o.current>0&&!c.queue.length&&!Object.keys(n).some((t=>!e.springs[t]))?Tr(e,t):new Promise((r=>{zr(e,n),c.queue.push((()=>{r(Tr(e,t))})),s()}))}})),[]),l=i([...c.ctrls]),u=[],d=jn(e)||0;function h(e,n){for(let a=e;a<n;a++){const e=l.current[a]||(l.current[a]=new Rr(null,c.flush)),n=r?r(a,e):t[a];n&&(u[a]=Mr(n))}}g((()=>{it(l.current.slice(e,d),(e=>{!function(e,t){e.ref?.delete(e),t?.delete(e)}(e,a),e.stop(!0)})),l.current.length=e,h(d,e)}),[e]),g((()=>{h(0,Math.min(d,e))}),n);const f=l.current.map(((e,t)=>Lr(e,u[t]))),p=m(Ur),y=jn(p),v=p!==y&&function(e){for(const t in e)return!0;return!1}(p);On((()=>{o.current++,c.ctrls=l.current;const{queue:e}=c;e.length&&(c.queue=[],it(e,(e=>e()))),it(l.current,((e,t)=>{a?.add(e),v&&e.start({default:p});const n=u[t];n&&(function(e,t){t&&e.ref!==t&&(e.ref?.delete(e),t.add(e),e.ref=t)}(e,n.ref),e.ref?e.queue.push(n):e.start(n))}))})),kn((()=>()=>{it(c.ctrls,(e=>e.stop(!0)))}));const b=f.map((e=>({...e})));return a?[b,a]:b}(1,n?e:[e],n?t||[]:t);return n||2==arguments.length?[r,a]:r}var Jr=class extends wr{constructor(e,t){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=Wt(...t);const n=this._get(),r=zn(n);An(this,r.create(n))}advance(e){const t=this._get();at(t,this.get())||(En(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&ea(this._active)&&ta(this)}_get(){const e=rt.arr(this.source)?this.source.map(tn):st(tn(this.source));return this.calc(...e)}_start(){this.idle&&!ea(this._active)&&(this.idle=!1,it(Cn(this),(e=>{e.done=!1})),Ie.skipAnimation?(Te.batchedUpdates((()=>this.advance())),ta(this)):Dt.start(this))}_attach(){let e=1;it(st(this.source),(t=>{en(t)&&sn(t,this),vr(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){it(st(this.source),(e=>{en(e)&&cn(e,this)})),this._active.clear(),ta(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=st(this.source).reduce(((e,t)=>Math.max(e,(vr(t)?t.priority:0)+1)),0))}};function Kr(e){return!1!==e.idle}function ea(e){return!e.size||Array.from(e).every(Kr)}function ta(e){e.idle||(e.idle=!0,it(Cn(e),(e=>{e.done=!0})),rn(e,{type:"idle",parent:e}))}Ie.assign({createStringInterpolator:bn,to:(e,t)=>new Jr(e,t)});var na=/^--/;function ra(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||na.test(e)||ia.hasOwnProperty(e)&&ia[e]?(""+t).trim():t+"px"}var aa={};var ia={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},oa=["Webkit","Ms","Moz","O"];ia=Object.keys(ia).reduce(((e,t)=>(oa.forEach((n=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(n,t)]=e[t])),e)),ia);var sa=/^(matrix|translate|scale|rotate|skew)/,ca=/^(translate)/,la=/^(rotate|skew)/,ua=(e,t)=>rt.num(e)&&0!==e?e+t:e,da=(e,t)=>rt.arr(e)?e.every((e=>da(e,t))):rt.num(e)?e===t:parseFloat(e)===t,ha=class extends Tn{constructor({x:e,y:t,z:n,...r}){const a=[],i=[];(e||t||n)&&(a.push([e||0,t||0,n||0]),i.push((e=>[`translate3d(${e.map((e=>ua(e,"px"))).join(",")})`,da(e,0)]))),ot(r,((e,t)=>{if("transform"===t)a.push([e||""]),i.push((e=>[e,""===e]));else if(sa.test(t)){if(delete r[t],rt.und(e))return;const n=ca.test(t)?"px":la.test(t)?"deg":"";a.push(st(e)),i.push("rotate3d"===t?([e,t,r,a])=>[`rotate3d(${e},${t},${r},${ua(a,n)})`,da(a,0)]:e=>[`${t}(${e.map((e=>ua(e,n))).join(",")})`,da(e,t.startsWith("scale")?1:0)])}})),a.length&&(r.transform=new fa(a,i)),super(r)}},fa=class extends an{constructor(e,t){super(),this.inputs=e,this.transforms=t,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return it(this.inputs,((n,r)=>{const a=tn(n[0]),[i,o]=this.transforms[r](rt.arr(a)?a:n.map(tn));e+=" "+i,t=t&&o})),t?"none":e}observerAdded(e){1==e&&it(this.inputs,(e=>it(e,(e=>en(e)&&sn(e,this)))))}observerRemoved(e){0==e&&it(this.inputs,(e=>it(e,(e=>en(e)&&cn(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),rn(this,e)}};Ie.assign({batchedUpdates:w,createStringInterpolator:bn,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});var pa=((e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:n=(e=>new Tn(e)),getComponentProps:r=(e=>e)}={})=>{const a={applyAnimatedValues:t,createAnimatedStyle:n,getComponentProps:r},i=e=>{const t=qn(e)||"Anonymous";return(e=rt.str(e)?i[e]||(i[e]=Nn(e,a)):e[Vn]||(e[Vn]=Nn(e,a))).displayName=`Animated(${t})`,e};return ot(e,((t,n)=>{rt.arr(e)&&(n=qn(t)),i[n]=i(t)})),{animated:i}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const n="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,{style:r,children:a,scrollTop:i,scrollLeft:o,viewBox:s,...c}=t,l=Object.values(c),u=Object.keys(c).map((t=>n||e.hasAttribute(t)?t:aa[t]||(aa[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==a&&(e.textContent=a);for(const t in r)if(r.hasOwnProperty(t)){const n=ra(t,r[t]);na.test(t)?e.style.setProperty(t,n):e.style[t]=n}u.forEach(((t,n)=>{e.setAttribute(t,l[n])})),void 0!==i&&(e.scrollTop=i),void 0!==o&&(e.scrollLeft=o),void 0!==s&&e.setAttribute("viewBox",s)},createAnimatedStyle:e=>new ha(e),getComponentProps:({scrollTop:e,scrollLeft:t,...n})=>n}),ma=pa.animated;const ga=D(ma.div)`
    position: absolute;
    top: calc(100% + 0.5rem);
    left: -1px;
    width: calc(100% + 2px);
    max-width: 41rem;
    overflow: hidden;
    z-index: 1;
    min-width: 21rem;

    ${T.mobileL} {
        min-width: 17.5rem;
    }
`;var ya={exports:{}};ya.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,a=/\d*[^-_:/,()\s\d]+/,i={},o=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},c=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],l=function(e){var t=i[e];return t&&(t.indexOf?t:t.s.concat(t.f))},u=function(e,t){var n,r=i.meridiem;if(r){for(var a=1;a<=24;a+=1)if(e.indexOf(r(a,0,t))>-1){n=a>12;break}}else n=e===(t?"pm":"PM");return n},d={A:[a,function(e){this.afternoon=u(e,!1)}],a:[a,function(e){this.afternoon=u(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[r,s("seconds")],ss:[r,s("seconds")],m:[r,s("minutes")],mm:[r,s("minutes")],H:[r,s("hours")],h:[r,s("hours")],HH:[r,s("hours")],hh:[r,s("hours")],D:[r,s("day")],DD:[n,s("day")],Do:[a,function(e){var t=i.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],M:[r,s("month")],MM:[n,s("month")],MMM:[a,function(e){var t=l("months"),n=(l("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[a,function(e){var t=l("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[n,function(e){this.year=o(e)}],YYYY:[/\d{4}/,s("year")],Z:c,ZZ:c};function h(n){var r,a;r=n,a=i&&i.formats;for(var o=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var i=r&&r.toUpperCase();return n||a[r]||e[r]||a[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),s=o.length,c=0;c<s;c+=1){var l=o[c],u=d[l],h=u&&u[0],f=u&&u[1];o[c]=f?{regex:h,parser:f}:l.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<s;n+=1){var a=o[n];if("string"==typeof a)r+=a.length;else{var i=a.regex,c=a.parser,l=e.slice(r),u=i.exec(l)[0];c.call(t,u),e=e.replace(u,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(o=e.parseTwoDigitYear);var r=t.prototype,a=r.parse;r.parse=function(e){var t=e.date,r=e.utc,o=e.args;this.$u=r;var s=o[1];if("string"==typeof s){var c=!0===o[2],l=!0===o[3],u=c||l,d=o[2];l&&(d=o[2]),i=this.$locale(),!c&&d&&(i=n.Ls[d]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=h(t)(e),a=r.year,i=r.month,o=r.day,s=r.hours,c=r.minutes,l=r.seconds,u=r.milliseconds,d=r.zone,f=new Date,p=o||(a||i?1:f.getDate()),m=a||f.getFullYear(),g=0;a&&!i||(g=i>0?i-1:f.getMonth());var y=s||0,v=c||0,b=l||0,w=u||0;return d?new Date(Date.UTC(m,g,p,y,v,b,w+60*d.offset*1e3)):n?new Date(Date.UTC(m,g,p,y,v,b,w)):new Date(m,g,p,y,v,b,w)}catch(e){return new Date("")}}(t,s,r),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(s)&&(this.$d=new Date("")),i={}}else if(s instanceof Array)for(var f=s.length,p=1;p<=f;p+=1){o[1]=s[p-1];var m=n.apply(this,o);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}p===f&&(this.$d=new Date(""))}else a.call(this,e)}}}();var va,ba,wa=M(ya.exports),Da={exports:{}},$a=M(Da.exports=(va={year:0,month:1,day:2,hour:3,minute:4,second:5},ba={},function(e,t,n){var r,a=function(e,t,n){void 0===n&&(n={});var r=new Date(e),a=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,a=ba[r];return a||(a=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),ba[r]=a),a}(t,n);return a.formatToParts(r)},i=function(e,t){for(var r=a(e,t),i=[],o=0;o<r.length;o+=1){var s=r[o],c=s.type,l=s.value,u=va[c];u>=0&&(i[u]=parseInt(l,10))}var d=i[3],h=24===d?0:d,f=i[0]+"-"+i[1]+"-"+i[2]+" "+h+":"+i[4]+":"+i[5]+":000",p=+e;return(n.utc(f).valueOf()-(p-=p%1e3))/6e4},o=t.prototype;o.tz=function(e,t){void 0===e&&(e=r);var a=this.utcOffset(),i=this.toDate(),o=i.toLocaleString("en-US",{timeZone:e}),s=Math.round((i-new Date(o))/1e3/60),c=n(o).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-s,!0);if(t){var l=c.utcOffset();c=c.add(a-l,"minute")}return c.$x.$timezone=e,c},o.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=a(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var s=o.startOf;o.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return s.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,a){var o=a&&t,s=a||t||r,c=i(+n(),s);if("string"!=typeof e)return n(e).tz(s);var l=function(e,t,n){var r=e-60*t*1e3,a=i(r,n);if(t===a)return[r,t];var o=i(r-=60*(a-t)*1e3,n);return a===o?[r,a]:[e-60*Math.min(a,o)*1e3,Math.max(a,o)]}(n.utc(e,o).valueOf(),c,s),u=l[0],d=l[1],h=n(u).utcOffset(d);return h.$x.$timezone=s,h},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}})),Sa={exports:{}};Sa.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,a){var i=n(e),o=n(t),s="("===(a=a||"()")[0],c=")"===a[1];return(s?this.isAfter(i,r):!this.isBefore(i,r))&&(c?this.isBefore(o,r):!this.isAfter(o,r))||(s?this.isBefore(i,r):!this.isAfter(i,r))&&(c?this.isAfter(o,r):!this.isBefore(o,r))}};var xa=M(Sa.exports),Oa={exports:{}};Oa.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var Fa=M(Oa.exports),_a={exports:{}};_a.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var ka,Ba=M(_a.exports);C.extend(xa),C.extend(Fa),C.extend(Ba),C.extend(wa),C.extend($a),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=C(t).startOf("week");return ja(n).map((e=>Ma(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Ma(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(C(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),a=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)a.push(r.add(e,"year"));return a},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+C(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=C(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,n,r,a)=>{const i=e.isWithinRange(t,r?C(r):void 0,a?C(a):void 0),o=n&&n.includes(t.format("YYYY-MM-DD"));return!i||!!o}}(ka||(ka={}));const ja=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},Ma=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},Ea=[1,3,5,7,8,10,12],Aa=[4,6,9,11];var Ca,Pa,Ha,Ia;!function(e){e.clampDay=(t,n,r)=>{const a=parseInt(t),i=parseInt(n),o=parseInt(r);return 0==a?"1":Ea.includes(i)?Math.min(a,31).toString():Aa.includes(i)?Math.min(a,30).toString():2===i?e.isLeapYear(o)?Math.min(a,29).toString():Math.min(a,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=C(e,n);return C(t,n).diff(r,"minute")},e.toDayjs=e=>e?C(e):C(),e.addMinutesToTime=(e,t,n="HH:mm")=>C(e,n).add(t,"minutes").format(n)}(Ca||(Ca={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:n,minDate:r,maxDate:a}=t;return!!(n&&n.length&&n.includes(e))||(!(!r||!C(e).isBefore(r,"day"))||!(!a||!C(e).isAfter(a,"day")))},e.sanitizeInput=e=>{if(e){if(C(e).isValid())return e}return""}}(Pa||(Pa={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Ha||(Ha={})),function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,a=8)=>{let i=0;t>n&&(i=Math.floor((t-n)/a));const o=r+i;if(o<e.length){const t=Math.floor(o/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width},e.maskValue=(e,n)=>{if(!e)return e;const{maskRange:r,unmaskRange:a,maskChar:i="•",maskRegex:o,maskTransformer:s}=n;if(s)return s(e);if(o)return e.replace(o,i);if(r){const{startIndex:n,endIndex:a}=t(r[0],r[1]);return e.substring(0,n)+i.repeat(e.substring(n,a+1).length)+e.substring(a+1)}if(a){const{startIndex:n,endIndex:r}=t(a[0],a[1]);return i.repeat(e.substring(0,n).length)+e.substring(n,r+1)+i.repeat(e.substring(r+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(Ia||(Ia={}));const Ra=e=>{const[t,n]=o(e),r=i(e);return[t,p((e=>{r.current=e,n(e)}),[]),r]};var Ta=Array.isArray,Ya="object"==typeof j&&j&&j.Object===Object&&j,La="object"==typeof self&&self&&self.Object===Object&&self,za=Ya||La||Function("return this")(),Na=za.Symbol,Wa=Na,Va=Object.prototype,qa=Va.hasOwnProperty,Qa=Va.toString,Ua=Wa?Wa.toStringTag:void 0;var Za=function(e){var t=qa.call(e,Ua),n=e[Ua];try{e[Ua]=void 0;var r=!0}catch(e){}var a=Qa.call(e);return r&&(t?e[Ua]=n:delete e[Ua]),a},Ga=Object.prototype.toString;var Xa=Za,Ja=function(e){return Ga.call(e)},Ka=Na?Na.toStringTag:void 0;var ei=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Ka&&Ka in Object(e)?Xa(e):Ja(e)};var ti=ei,ni=function(e){return null!=e&&"object"==typeof e};var ri=function(e){return"symbol"==typeof e||ni(e)&&"[object Symbol]"==ti(e)},ai=Ta,ii=ri,oi=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,si=/^\w*$/;var ci=function(e,t){if(ai(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!ii(e))||(si.test(e)||!oi.test(e)||null!=t&&e in Object(t))};var li=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},ui=ei,di=li;var hi,fi=function(e){if(!di(e))return!1;var t=ui(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},pi=za["__core-js_shared__"],mi=(hi=/[^.]+$/.exec(pi&&pi.keys&&pi.keys.IE_PROTO||""))?"Symbol(src)_1."+hi:"";var gi=function(e){return!!mi&&mi in e},yi=Function.prototype.toString;var vi=fi,bi=gi,wi=li,Di=function(e){if(null!=e){try{return yi.call(e)}catch(e){}try{return e+""}catch(e){}}return""},$i=/^\[object .+?Constructor\]$/,Si=Function.prototype,xi=Object.prototype,Oi=Si.toString,Fi=xi.hasOwnProperty,_i=RegExp("^"+Oi.call(Fi).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ki=function(e){return!(!wi(e)||bi(e))&&(vi(e)?_i:$i).test(Di(e))},Bi=function(e,t){return null==e?void 0:e[t]};var ji=function(e,t){var n=Bi(e,t);return ki(n)?n:void 0},Mi=ji(Object,"create"),Ei=Mi;var Ai=function(){this.__data__=Ei?Ei(null):{},this.size=0};var Ci=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Pi=Mi,Hi=Object.prototype.hasOwnProperty;var Ii=function(e){var t=this.__data__;if(Pi){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return Hi.call(t,e)?t[e]:void 0},Ri=Mi,Ti=Object.prototype.hasOwnProperty;var Yi=Mi;var Li=Ai,zi=Ci,Ni=Ii,Wi=function(e){var t=this.__data__;return Ri?void 0!==t[e]:Ti.call(t,e)},Vi=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Yi&&void 0===t?"__lodash_hash_undefined__":t,this};function qi(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}qi.prototype.clear=Li,qi.prototype.delete=zi,qi.prototype.get=Ni,qi.prototype.has=Wi,qi.prototype.set=Vi;var Qi=qi;var Ui=function(){this.__data__=[],this.size=0};var Zi=function(e,t){return e===t||e!=e&&t!=t};var Gi=function(e,t){for(var n=e.length;n--;)if(Zi(e[n][0],t))return n;return-1},Xi=Gi,Ji=Array.prototype.splice;var Ki=Gi;var eo=Gi;var to=Gi;var no=Ui,ro=function(e){var t=this.__data__,n=Xi(t,e);return!(n<0)&&(n==t.length-1?t.pop():Ji.call(t,n,1),--this.size,!0)},ao=function(e){var t=this.__data__,n=Ki(t,e);return n<0?void 0:t[n][1]},io=function(e){return eo(this.__data__,e)>-1},oo=function(e,t){var n=this.__data__,r=to(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function so(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}so.prototype.clear=no,so.prototype.delete=ro,so.prototype.get=ao,so.prototype.has=io,so.prototype.set=oo;var co=so,lo=ji(za,"Map"),uo=Qi,ho=co,fo=lo;var po=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var mo=function(e,t){var n=e.__data__;return po(t)?n["string"==typeof t?"string":"hash"]:n.map},go=mo;var yo=mo;var vo=mo;var bo=mo;var wo=function(){this.size=0,this.__data__={hash:new uo,map:new(fo||ho),string:new uo}},Do=function(e){var t=go(this,e).delete(e);return this.size-=t?1:0,t},$o=function(e){return yo(this,e).get(e)},So=function(e){return vo(this,e).has(e)},xo=function(e,t){var n=bo(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function Oo(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Oo.prototype.clear=wo,Oo.prototype.delete=Do,Oo.prototype.get=$o,Oo.prototype.has=So,Oo.prototype.set=xo;var Fo=Oo;function _o(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,a=t?t.apply(this,r):r[0],i=n.cache;if(i.has(a))return i.get(a);var o=e.apply(this,r);return n.cache=i.set(a,o)||i,o};return n.cache=new(_o.Cache||Fo),n}_o.Cache=Fo;var ko=_o;var Bo=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,jo=/\\(\\)?/g,Mo=function(e){var t=ko(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Bo,(function(e,n,r,a){t.push(r?a.replace(jo,"$1"):n||e)})),t}));var Eo=function(e,t){for(var n=-1,r=null==e?0:e.length,a=Array(r);++n<r;)a[n]=t(e[n],n,e);return a},Ao=Ta,Co=ri,Po=Na?Na.prototype:void 0,Ho=Po?Po.toString:void 0;var Io=function e(t){if("string"==typeof t)return t;if(Ao(t))return Eo(t,e)+"";if(Co(t))return Ho?Ho.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},Ro=Io;var To=Ta,Yo=ci,Lo=Mo,zo=function(e){return null==e?"":Ro(e)};var No=ri;var Wo=function(e,t){return To(e)?e:Yo(e,t)?[e]:Lo(zo(e))},Vo=function(e){if("string"==typeof e||No(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var qo=function(e,t){for(var n=0,r=(t=Wo(t,e)).length;null!=e&&n<r;)e=e[Vo(t[n++])];return n&&n==r?e:void 0};var Qo=M((function(e,t,n){var r=null==e?void 0:qo(e,t);return void 0===r?n:r}));const Uo=(e,t,n)=>t?Qo(n,t)||Qo(e,t):n||e,Zo=(e,t)=>{const n=t||e.defaultValue;return Qo(e.collections,n)};var Go;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(Go||(Go={}));const Xo={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#8F0E0E",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Jo=e=>t=>{const n=t.theme,r=Zo(Xo,n[Go.colorScheme]);return n.options&&n.options.color?Uo(r,e,n.options.color):Uo(r,e)},Ko={Brand:{1:Jo("Brand.1"),2:Jo("Brand.2"),3:Jo("Brand.3"),4:Jo("Brand.4"),5:Jo("Brand.5"),6:Jo("Brand.6")},Primary:Jo("Primary"),PrimaryDark:Jo("PrimaryDark"),Secondary:Jo("Secondary"),Accent:{Light:{1:Jo("Accent.Light.1"),2:Jo("Accent.Light.2"),3:Jo("Accent.Light.3"),4:Jo("Accent.Light.4"),5:Jo("Accent.Light.5"),6:Jo("Accent.Light.6")},Dark:{1:Jo("Accent.Dark.1"),2:Jo("Accent.Dark.2"),3:Jo("Accent.Dark.3")}},Neutral:{1:Jo("Neutral.1"),2:Jo("Neutral.2"),3:Jo("Neutral.3"),4:Jo("Neutral.4"),5:Jo("Neutral.5"),6:Jo("Neutral.6"),7:Jo("Neutral.7"),8:Jo("Neutral.8")},Validation:{Green:{Text:Jo("Validation.Green.Text"),Icon:Jo("Validation.Green.Icon"),Border:Jo("Validation.Green.Border"),Background:Jo("Validation.Green.Background")},Orange:{Text:Jo("Validation.Orange.Text"),Icon:Jo("Validation.Orange.Icon"),Border:Jo("Validation.Orange.Border"),Background:Jo("Validation.Orange.Background"),Badge:Jo("Validation.Orange.Badge")},Red:{Text:Jo("Validation.Red.Text"),Icon:Jo("Validation.Red.Icon"),Border:Jo("Validation.Red.Border"),Background:Jo("Validation.Red.Background")},Blue:{Text:Jo("Validation.Blue.Text"),Icon:Jo("Validation.Blue.Icon"),Border:Jo("Validation.Blue.Border"),Background:Jo("Validation.Blue.Background")}},Shadow:{Accent:Jo("Shadow.Accent"),Red:Jo("Shadow.Red"),Elevation:Jo("Shadow.Elevation")}},es=D.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`,ts=$`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,ns=D.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||Ko.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${ts} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,rs=D(ns)`
    animation-delay: -0.45s;
`,as=D(ns)`
    animation-delay: -0.3s;
`,is=D(ns)`
    animation-delay: -0.15s;
`,os={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},ss={collections:{base:{D1:{fontFamily:os.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:os.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:os.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:os.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:os.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:os.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:os.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:os.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:os.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:os.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:os.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:os.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:os.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:os.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},cs=e=>t=>{const n=t.theme,r=Zo(ss,n[Go.textStyleScheme]);return n.options&&n.options.textStyle?Uo(r,e,n.options.textStyle):Uo(r,e)},ls={D1:{fontFamily:cs("D1.fontFamily"),fontSize:cs("D1.fontSize"),fontWeight:cs("D1.fontWeight"),lineHeight:cs("D1.lineHeight"),letterSpacing:cs("D1.letterSpacing")},D2:{fontFamily:cs("D2.fontFamily"),fontSize:cs("D2.fontSize"),fontWeight:cs("D2.fontWeight"),lineHeight:cs("D2.lineHeight"),letterSpacing:cs("D2.letterSpacing")},D3:{fontFamily:cs("D3.fontFamily"),fontSize:cs("D3.fontSize"),fontWeight:cs("D3.fontWeight"),lineHeight:cs("D3.lineHeight"),letterSpacing:cs("D3.letterSpacing")},D4:{fontFamily:cs("D4.fontFamily"),fontSize:cs("D4.fontSize"),fontWeight:cs("D4.fontWeight"),lineHeight:cs("D4.lineHeight"),letterSpacing:cs("D4.letterSpacing")},DBody:{fontFamily:cs("DBody.fontFamily"),fontSize:cs("DBody.fontSize"),fontWeight:cs("DBody.fontWeight"),lineHeight:cs("DBody.lineHeight"),letterSpacing:cs("DBody.letterSpacing")},H1:{fontFamily:cs("H1.fontFamily"),fontSize:cs("H1.fontSize"),fontWeight:cs("H1.fontWeight"),lineHeight:cs("H1.lineHeight"),letterSpacing:cs("H1.letterSpacing")},H2:{fontFamily:cs("H2.fontFamily"),fontSize:cs("H2.fontSize"),fontWeight:cs("H2.fontWeight"),lineHeight:cs("H2.lineHeight"),letterSpacing:cs("H2.letterSpacing")},H3:{fontFamily:cs("H3.fontFamily"),fontSize:cs("H3.fontSize"),fontWeight:cs("H3.fontWeight"),lineHeight:cs("H3.lineHeight"),letterSpacing:cs("H3.letterSpacing")},H4:{fontFamily:cs("H4.fontFamily"),fontSize:cs("H4.fontSize"),fontWeight:cs("H4.fontWeight"),lineHeight:cs("H4.lineHeight"),letterSpacing:cs("H4.letterSpacing")},H5:{fontFamily:cs("H5.fontFamily"),fontSize:cs("H5.fontSize"),fontWeight:cs("H5.fontWeight"),lineHeight:cs("H5.lineHeight"),letterSpacing:cs("H5.letterSpacing")},H6:{fontFamily:cs("H6.fontFamily"),fontSize:cs("H6.fontSize"),fontWeight:cs("H6.fontWeight"),lineHeight:cs("H6.lineHeight"),letterSpacing:cs("H6.letterSpacing")},Body:{fontFamily:cs("Body.fontFamily"),fontSize:cs("Body.fontSize"),fontWeight:cs("Body.fontWeight"),lineHeight:cs("Body.lineHeight"),letterSpacing:cs("Body.letterSpacing")},BodySmall:{fontFamily:cs("BodySmall.fontFamily"),fontSize:cs("BodySmall.fontSize"),fontWeight:cs("BodySmall.fontWeight"),lineHeight:cs("BodySmall.lineHeight"),letterSpacing:cs("BodySmall.letterSpacing")},XSmall:{fontFamily:cs("XSmall.fontFamily"),fontSize:cs("XSmall.fontSize"),fontWeight:cs("XSmall.fontWeight"),lineHeight:cs("XSmall.lineHeight"),letterSpacing:cs("XSmall.letterSpacing")}},us=e=>{switch(e){case 700:case"bold":return os.Bold;case 600:case"semibold":return os.Semibold;case 300:case"light":return os.Light;case 400:case"regular":return os.Regular;default:return""}},ds=(e,t)=>n=>{var r;const a=ls[e].fontFamily(n),i=ls[e].fontWeight(n);return Object.values(os).includes(a)?S`
                font-family: ${us(t)||us(i)||a};
                font-weight: normal !important;
            `:S`
            font-family: ${a};
            font-weight: ${null!==(r=hs(t)||i)&&void 0!==r?r:"normal"};
        `},hs=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},fs=e=>{if(e>0)return S`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},ps=(e,t,n=!1)=>r=>{const a=ls[e],i=a.fontSize(r);return S`
            ${ds(e,t)}
            font-size: ${i}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${a.letterSpacing(r)||0}rem !important;
            ${S`
                margin-bottom: ${i*(n?1.05:0)}rem;
            `}
        `},ms=(e=!1,t=!1,n=void 0)=>t?S`
            display: block;
            ${fs(n)}
        `:e?S`
            display: inline;
        `:S`
            display: block;
            ${fs(n)}
        `;var gs;!function(e){e.D1=D.h1`
        ${e=>S`
                ${ps("D1",e.weight,e.paragraph)}
                color: ${Ko.Neutral[1]};
                ${ms(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=D.h1`
        ${e=>S`
                ${ps("D2",e.weight,e.paragraph)}
                color: ${Ko.Neutral[1]};
                ${ms(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=D.h1`
        ${e=>S`
                ${ps("D3",e.weight,e.paragraph)}
                color: ${Ko.Neutral[1]};
                ${ms(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=D.h1`
        ${e=>S`
                ${ps("D4",e.weight,e.paragraph)}
                color: ${Ko.Neutral[1]};
                ${ms(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=D.h1`
        ${e=>S`
                ${ps("DBody",e.weight,e.paragraph)}
                color: ${Ko.Neutral[1]};
                ${ms(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=D.h1`
        ${e=>S`
                ${ps("H1",e.weight,e.paragraph)}
                color: ${Ko.Neutral[1]};
                ${ms(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=D.h2`
        ${e=>S`
                ${ps("H2",e.weight,e.paragraph)}
                color: ${Ko.Neutral[1]};
                ${ms(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=D.h3`
        ${e=>S`
                ${ps("H3",e.weight,e.paragraph)}
                color: ${Ko.Neutral[1]};
                ${ms(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=D.h4`
        ${e=>S`
                ${ps("H4",e.weight,e.paragraph)}
                color: ${Ko.Neutral[1]};
                ${ms(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=D.h5`
        ${e=>S`
                ${ps("H5",e.weight,e.paragraph)}
                color: ${Ko.Neutral[1]};
                ${ms(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=D.h6`
        ${e=>S`
                ${ps("H6",e.weight,e.paragraph)}
                color: ${Ko.Neutral[1]};
                ${ms(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=D.p`
        ${e=>S`
                ${ps("Body",e.weight,e.paragraph)}
                color: ${Ko.Neutral[1]};
                ${ms(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=D.p`
        ${e=>S`
                ${ps("BodySmall",e.weight,e.paragraph)}
                color: ${Ko.Neutral[1]};
                ${ms(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=D.span`
        ${e=>S`
                ${ps("XSmall",e.weight,e.paragraph)}
                color: ${Ko.Neutral[1]};
                ${ms(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>bs(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>bs(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}(gs||(gs={}));const ys=D.a`
    ${e=>S`
            ${ps(e.textStyle,e.weight)}
            color: ${Ko.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Ko.Secondary};

                svg {
                    color: ${Ko.Secondary};
                }
            }
        `}
`,vs=D(_)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,bs=n=>{var{external:r=!1,children:a}=n,i=B(n,["external","children"]);return e(ys,Object.assign({},i,{children:[a,r&&t(vs,{})]}))};var ws;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(ws||(ws={}));const Ds={collections:{base:{InputBoxShadow:S`
        inset 0 0 4px 0px ${Ko.Shadow.Accent}
    `,InputErrorBoxShadow:S`
        inset 0 0 4px 0px ${Ko.Shadow.Red}
    `,ElevationBoxShadow:S`
      0px 2px 8px ${Ko.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:S`
        inset 0 0 3px 0px ${Ko.Shadow.Accent}
    `,InputErrorBoxShadow:S`
        inset 0 0 3px 0px ${Ko.Shadow.Red}
    `,ElevationBoxShadow:S`
      0px 2px 8px ${Ko.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},$s=e=>t=>{var n;const r=t.theme,a=Zo(Ds,r[Go.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?Uo(a,e,r.options.designToken):Uo(a,e)},Ss={InputBoxShadow:$s("InputBoxShadow"),InputErrorBoxShadow:$s("InputErrorBoxShadow"),ElevationBoxShadow:$s("ElevationBoxShadow"),Table:{Header:$s("Table.Header"),Cell:{Primary:$s("Table.Cell.Primary"),Secondary:$s("Table.Cell.Secondary"),Selected:$s("Table.Cell.Selected"),Hover:$s("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:$s("Button.Danger.BackgroundColor"),Hover:$s("Button.Danger.Hover"),Primary:$s("Button.Danger.Primary"),Border:$s("Button.Danger.Border")}}},xs=D.button`
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
                    background-color: ${Ko.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?Ss.Button.Danger.Border:Ko.Primary};

                    span {
                        color: ${e.$buttonIsDanger?Ss.Button.Danger.Primary:Ko.Primary};
                    }
                `;case"light":return S`
                    background-color: ${Ko.Neutral[8]};
                    border: 1px solid ${Ko.Neutral[5]};

                    span {
                        color: ${e.$buttonIsDanger?Ss.Button.Danger.Primary:Ko.Primary};
                    }
                `;case"disabled":return S`
                    background-color: ${Ko.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${Ko.Neutral[3]};
                    }
                `;case"link":return S`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?Ss.Button.Danger.Primary:Ko.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${e.$buttonIsDanger?Ss.Button.Danger.Hover:Ko.Secondary};
                        }
                    }
                `;default:return S`
                    background-color: ${e.$buttonIsDanger?Ss.Button.Danger.BackgroundColor:Ko.Primary};
                    border: 1px solid transparent;

                    ${T.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${Ko.Neutral[8]};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?S`
                    height: 2.5rem;
                    span {
                        ${ps("H5","semibold")}
                    }

                    ${T.mobileS} {
                        height: auto;
                    }
                `:S`
                    height: 3rem;
                    span {
                        ${ps("H4","semibold")}
                    }

                    ${T.mobileS} {
                        height: auto;
                    }
                `}
`,Os=D((({color:n,className:r,size:a=18})=>e(es,Object.assign({className:r,$size:a,$color:n},{children:[t(ns,{id:"inner1",$size:a-2,$borderWidth:2,$color:n}),t(rs,{id:"inner2",$size:a-2,$borderWidth:2,$color:n}),t(as,{id:"inner3",$size:a-2,$borderWidth:2,$color:n}),t(is,{id:"inner4",$size:a-2,$borderWidth:2,$color:n})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t=e.$buttonIsDanger?Ss.Button.Danger.Primary:Ko.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=Ko.Neutral[3](e);break;default:t=Ko.Neutral[8](e)}return S`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,Fs={Default:a.forwardRef(((n,r)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:s="default",danger:c=!1}=n,l=B(n,["children","disabled","loading","styleType","danger"]),u={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"default",$buttonIsDanger:c};return e(xs,Object.assign({ref:r,"data-testid":l["data-testid"]||"button",disabled:i},u,l,{children:[o&&t(Os,Object.assign({},u)),t("span",{children:a})]}))})),Small:a.forwardRef(((n,r)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:s="default",danger:c=!1}=n,l=B(n,["children","disabled","loading","styleType","danger"]),u={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"small",$buttonIsDanger:c};return e(xs,Object.assign({ref:r,"data-testid":l["data-testid"]||"button",disabled:i},u,l,{children:[o&&t(Os,Object.assign({},u,{size:16})),t("span",{children:a})]}))}))},_s=D.button`
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
                background-color: ${Ko.Neutral[7]};
            `}
    }
`,ks=a.forwardRef(((e,n)=>{var{children:r,focusHighlight:a=!0,focusOutline:i="none",type:o="button"}=e,s=B(e,["children","focusHighlight","focusOutline","type"]);return t(_s,Object.assign({ref:n,$outline:i,$highlight:a,type:o},s,{children:r}))})),Bs=S`
    color: ${Ko.Neutral[3]};
    height: 1rem;
    width: 1rem;
`,js=D(O)`
    ${Bs}
`,Ms=D(F)`
    ${Bs}
`,Es=D(x)`
    ${Bs}
    transition: transform 250ms ease-in-out;
    margin-left: 0.5rem;
`,As=D.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
`,Cs=D.div`
    display: flex;
    flex: 1;
    position: relative;
`,Ps=D.div`
    isolation: isolate;
    width: 100%;
`,Hs=D.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${Ko.Neutral[8]};

    ${e=>{if(!e.$visible)return S`
                display: none;
            `}}
`,Is=D.div`
    display: flex;
    justify-content: space-between;
    margin: 0 0 0.5rem 0;
`,Rs=D.div`
    display: flex;
`,Ts=D.button`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;

    ${e=>!1===e.$visible?S`
                display: none;
            `:e.$expanded?S`
                ${Es} {
                    transform: rotate(180deg);
                }
            `:void 0}
`,Ys=D.p`
    ${ps("H5","regular")}
`,Ls=D.div`
    display: flex;
`,zs=D(ks)`
    margin: auto 0;
    padding: 0.75rem;

    :disabled {
        cursor: not-allowed;
    }
`,Ns=D.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;
`,Ws=D(Fs.Small)`
    flex: 1;
`,Vs=D.div`
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
`,qs=D.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: default;
    border-radius: 5rem;
    margin: 0 0.5rem;

    ${e=>e.$interactive?S`
                cursor: pointer;
                &:hover {
                    box-shadow: 0px 0px 4px 1px ${Ko.Shadow.Accent};
                    border: 1px solid ${Ko.Accent.Light[1]};
                }
            `:e.$disabledDisplay?S`
                cursor: not-allowed;
            `:void 0}

    ${e=>{switch(e.$variant){case"current-month":return S`
                    background-color: ${Ko.Accent.Light[6](e)};
                `;case"selected-month":return S`
                    background-color: ${Ko.Accent.Light[5](e)};
                    border: 1px solid ${Ko.Primary(e)};
                `}}}
`,Qs=D(gs.H5)`
    ${e=>{if(e.$disabledDisplay)return S`
                color: ${Ko.Neutral[4]};
            `;switch(e.$variant){case"current-month":return S`
                    color: ${Ko.Neutral[3](e)};
                `;case"selected-month":return S`
                    ${ps("H5","semibold")}
                    color: ${Ko.Primary(e)};
                `}}}
`,Us=({calendarDate:e,currentFocus:n,selectedStartDate:r,selectedEndDate:a,viewCalendarDate:i,type:o,isNewSelection:s,minDate:c,maxDate:l,allowDisabledSelection:u,onMonthSelect:d})=>{const h=g((()=>ka.generateMonths(C(e))),[e]),f=e=>{const t="start"===n&&a&&e.isAfter(a,"month")&&s,i="end"===n&&r&&e.isBefore(r,"month")&&s;return t||i},p=e=>{const t=e.format("MMMM"),n=(r=e,!ka.isWithinRange(r,c?C(c):void 0,l?C(l):void 0,"month"));var r;const a=i.isSame(e,"month")?"selected-month":C().isSame(e,"month")?"current-month":"default";return{disabledDisplay:n||f(e),interactive:!n||u,month:t,variant:a}};return h.length?t(Vs,Object.assign({$type:o},{children:h.map((e=>{const{disabledDisplay:n,interactive:r,variant:a,month:i}=p(e);return t(qs,Object.assign({$variant:a,$disabledDisplay:n,$interactive:r,onClick:()=>((e,t)=>{t||d(e)})(e,!r)},{children:t(Qs,Object.assign({weight:"regular",$variant:a,$disabledDisplay:n},{children:i}))}),i)}))})):null},Zs=D.div`
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
`,Gs=D.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: default;
    border-radius: 0.5rem;
    margin: 0 0.5rem;

    ${e=>e.$interactive?S`
                cursor: pointer;
                &:hover {
                    box-shadow: 0px 0px 4px 1px ${Ko.Shadow.Accent};
                    border: 1px solid ${Ko.Accent.Light[1]};
                }
            `:e.$disabledDisplay?S`
                cursor: not-allowed;
            `:void 0}

    ${e=>{switch(e.$variant){case"current-year":return S`
                    background: ${Ko.Accent.Light[6](e)};
                `;case"selected-year":return S`
                    background: ${Ko.Accent.Light[5](e)};
                    border: 1px solid ${Ko.Primary(e)};
                `}}};
`,Xs=D(gs.H5)`
    ${e=>{if(e.$disabledDisplay)return S`
                color: ${Ko.Neutral[4]};
            `;switch(e.$variant){case"current-year":return S`
                    color: ${Ko.Neutral[3](e)};
                `;case"selected-year":return S`
                    ${ps("H5","semibold")}
                    color: ${Ko.Primary(e)};
                `;case"other-decade":return S`
                    color: ${Ko.Neutral[4](e)};
                `}}}
`,Js=({calendarDate:e,currentFocus:n,selectedStartDate:r,selectedEndDate:a,viewCalendarDate:i,type:o,isNewSelection:s,minDate:c,maxDate:l,allowDisabledSelection:u,onYearSelect:d})=>{const h=g((()=>ka.generateDecadeOfYears(C(e))),[e]),f=e=>{const t="start"===n&&a&&e.isAfter(a,"year")&&s,i="end"===n&&r&&e.isBefore(r,"year")&&s;return t||i},p=e=>{const t=[0,11].includes(h.indexOf(e)),n=e.year(),r=(a=e,!ka.isWithinRange(a,c?C(c):void 0,l?C(l):void 0,"year"));var a;const o=t?"other-decade":i.isSame(e,"year")?"selected-year":C().isSame(e,"year")?"current-year":"default";return{disabledDisplay:r||f(e),interactive:!r||u,year:n,variant:o}};return h.length?t(Zs,Object.assign({$type:o},{children:h.map((e=>{const{disabledDisplay:n,interactive:r,variant:a,year:i}=p(e);return t(Gs,Object.assign({$variant:a,$disabledDisplay:n,$interactive:r,onClick:()=>((e,t)=>{t||d(e)})(e,!r)},{children:t(Xs,Object.assign({weight:"regular",$variant:a,$disabledDisplay:n,$interactive:r},{children:i}))}),i)}))})):null},Ks=a.forwardRef(((r,a)=>{var{children:s,initialCalendarDate:c,type:l,minDate:u,maxDate:h,currentFocus:f,selectedStartDate:p,selectedEndDate:m,selectWithinRange:g,dynamicHeight:v=!1,allowDisabledSelection:b,onCalendarDateChange:w,withButton:D,doneButtonDisabled:$,onDismiss:S,showNavigationHeader:x=!0,getLeftArrowDate:O,getRightArrowDate:F,isLeftArrowDisabled:_,isRightArrowDisabled:k,getMonthHeaderLabel:j,getYearHeaderLabel:M}=r,E=B(r,["children","initialCalendarDate","type","minDate","maxDate","currentFocus","selectedStartDate","selectedEndDate","selectWithinRange","dynamicHeight","allowDisabledSelection","onCalendarDateChange","withButton","doneButtonDisabled","onDismiss","showNavigationHeader","getLeftArrowDate","getRightArrowDate","isLeftArrowDisabled","isRightArrowDisabled","getMonthHeaderLabel","getYearHeaderLabel"]);const[A,P]=o(Ca.toDayjs(c)),[H,I]=o(Ca.toDayjs(c)),[R,T]=o("default"),Y=i(null),L=i(null),z=i();y(a,(()=>({defaultView(){T("default")},resetView(){const e=Ca.toDayjs(c);P(e),I(e),T("default")},setCalendarDate(e){const t=Ca.toDayjs(e);P(t),I(t)}}))),d((()=>{const e=Ca.toDayjs(c);P(e),I(e)}),[c]),d((()=>{Z(H)}),[H]);const N=()=>{"month-options"!==R?(T("month-options"),z.current.focus()):(T("default"),P(H))},W=()=>{"default"!==R?(T("default"),P(H)):T("year-options")},V=()=>{z.current.focus();const e=O?O(A):A.subtract(1,"month");switch(R){case"default":I(e),P(e);break;case"month-options":P((e=>e.subtract(1,"year")));break;case"year-options":P((e=>e.subtract(10,"year")))}},q=()=>{z.current.focus();const e=F?F(A):A.add(1,"month");switch(R){case"default":I(e),P(e);break;case"month-options":P((e=>e.add(1,"year")));break;case"year-options":P((e=>e.add(10,"year")))}},Q=e=>{P(e),I(e),D||T("default")},U=()=>{const e=Ca.toDayjs(c);P(e),I(e),"default"===R?G("reset"):T("default")},Z=e=>{w&&w(e)},G=e=>{S&&S(e)},X=()=>{if(!u||b)return!1;const e=C(u);return"month-options"===R?!ka.isPreviousYearWithinRange(A,e):"year-options"===R?!ka.isPreviousDecadeWithinRange(A,e):_?_(A):!ka.isPreviousMonthWithinRange(A,e)},J=()=>{if(!h||b)return!1;const e=C(h);return"month-options"===R?!ka.isNextYearWithinRange(A,e):"year-options"===R?!ka.isNextDecadeWithinRange(A,e):k?k(A):!ka.isNextMonthWithinRange(A,e)},K=()=>{if("year-options"===R){const{beginDecade:e,endDecade:t}=ka.getStartEndDecade(A);return`${e} to ${t}`}return M?M(A):A.format("YYYY")},ee=()=>{const r=j?j(A):A.format("MMM");return e(n,{children:[e(Ts,Object.assign({type:"button",tabIndex:-1,$expanded:"month-options"===R,$visible:"default"===R,id:"month-dropdown",onClick:N},{children:[t(Ys,{children:r}),t(Es,{})]})),e(Ts,Object.assign({type:"button",tabIndex:-1,$expanded:"default"!==R,id:"year-dropdown",onClick:W},{children:[t(Ys,{children:K()}),t(Es,{})]}))]})},te=()=>{switch(R){case"month-options":return t(Us,{type:l,calendarDate:A,currentFocus:f,minDate:u,maxDate:h,selectedStartDate:p,selectedEndDate:m,viewCalendarDate:H,isNewSelection:g,onMonthSelect:Q,allowDisabledSelection:b});case"year-options":return t(Js,{type:l,calendarDate:A,currentFocus:f,minDate:u,maxDate:h,selectedStartDate:p,selectedEndDate:m,viewCalendarDate:H,isNewSelection:g,onYearSelect:Q,allowDisabledSelection:b});default:return null}};return e(As,Object.assign({ref:z,tabIndex:-1,"data-id":"calendar-container","data-testid":"calendar-container"},E,{children:[x&&e(Is,Object.assign({"data-id":"calendar-header","data-testid":"calendar-header"},{children:[t(Rs,{children:ee()}),e(Ls,{children:[t(zs,Object.assign({"data-testid":"left-arrow-btn",disabled:X(),focusHighlight:!1,tabIndex:-1,onClick:V},{children:t(js,{})})),t(zs,Object.assign({"data-testid":"right-arrow-btn",disabled:J(),focusHighlight:!1,tabIndex:-1,onClick:q},{children:t(Ms,{})}))]})]})),t(Cs,{children:(()=>{const r="function"==typeof s?s({calendarDate:H,currentView:R}):s;return e(n,v?{children:["default"===R&&r,te()]}:{children:[t(Ps,{children:r}),t(Hs,Object.assign({$visible:"default"!==R},{children:te()}))]})})()}),(()=>{if(!D)return;const n=!!("default"===R)&&$;return e(Ns,{children:[t(Ws,Object.assign({ref:L,"data-testid":"cancel-button",styleType:"light",type:"button",onClick:U},{children:"Cancel"})),t(Ws,Object.assign({"data-testid":"done-button",ref:Y,type:"button",onClick:()=>{n||(P(H),"default"===R?G("confirmed"):T("default"))},disabled:n},{children:"Done"}))]})})()]}))})),ec=D.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 0.25rem;
`,tc=D.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    pointer-events: none;
    user-select: none;
`,nc=D.div`
    grid-column: 1 / -1;
    display: flex;
`;D.div`
    display: flex;
    position: relative;
    height: 2.5rem;
    align-items: center;
    justify-content: center;
    flex: 1;
`;const rc=D.div`
    position: absolute;
    width: 50%;
    height: 100%;

    ${e=>{switch(e.$position){case"left":return S`
                    left: 0;
                `;case"right":return S`
                    right: 0;
                `}}}
`,ac=D.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    cursor: default;
    position: absolute;
`;D(gs.H5)`
    ${e=>{const{$disabledDisplay:t,$selected:n,$variant:r}=e;if(t&&n)return S`
                ${ps("H5","semibold")};
                color: ${Ko.Accent.Light[2]};
            `;if(t)return S`
                color: ${Ko.Neutral[4]};
            `;if(n)return S`
                ${ps("H5","semibold")};
                color: ${Ko.Primary};
            `;switch(r){case"other-month":return S`
                    color: ${Ko.Neutral[4]};
                `;case"today":return S`
                    color: ${Ko.Neutral[3]};
                `;case"default":return S`
                    color: ${Ko.Neutral[1]};
                `}}}
`,D(rc)`
    ${e=>{const{$selected:t}=e;if(t)return S`
                border-top: 1px solid ${Ko.Accent.Light[4]};
                border-bottom: 1px solid ${Ko.Accent.Light[4]};
                background-color: ${Ko.Accent.Light[5]};
            `}}

    ${e=>{const{$hovered:t,$overlap:n}=e;return t?S`
                border-top: 1px dashed ${Ko.Accent.Light[4]};
                border-bottom: 1px dashed ${Ko.Accent.Light[4]};
                background-color: ${Ko.Accent.Light[6]};
            `:n?S`
                background-color: ${Ko.Accent.Light[4]};
            `:void 0}}
`,D(ac)`
    ${e=>{const{$hovered:t,$selected:n}=e;return n?S`
                background: ${Ko.Accent.Light[5]};
                border: 1px solid ${Ko.Primary};
            `:t?S`
                box-shadow: 0px 0px 4px 1px ${Ko.Shadow.Accent};
                border: 1px solid ${Ko.Accent.Light[1]};
                background-color: ${Ko.Neutral[8]};
            `:void 0}}

    ${e=>{const{$interactive:t,$disabledDisplay:n}=e;return t?S`
                cursor: pointer;
                :hover {
                    box-shadow: 0px 0px 4px 1px ${Ko.Shadow.Accent};
                    border: 1px solid ${Ko.Accent.Light[1]};
                    background-color: ${Ko.Neutral[8]};
                }
            `:n?S`
                cursor: not-allowed;
            `:void 0}}

    ${e=>{const{$disabledDisplay:t,$overlap:n,$variant:r}=e;return n?S`
                border: 1px solid ${Ko.Accent.Light[1]};
                background: ${Ko.Accent.Light[4]};

                :hover {
                    background: ${Ko.Accent.Light[4]};
                }
            `:t?S`
                color: ${Ko.Neutral[4]};
            `:"today"===r?S`
                    background: ${Ko.Accent.Light[5]};
                `:void 0}}
`;const ic=e=>{let t=Ko.Neutral[8],n="1px solid transparent";switch(e.$type){case"current":t=Ko.Accent.Light[5];break;case"hover-dash":t=Ko.Accent.Light[6],n=`1px dashed ${Ko.Accent.Light[4](e)}`;break;case"hover-current":t=Ko.Neutral[8],n=`1px solid ${Ko.Primary(e)}`;break;case"selected":t=Ko.Accent.Light[5],n=`1px solid ${Ko.Accent.Light[4](e)}`;break;case"selected-outline":t=Ko.Accent.Light[5],n=`1px solid ${Ko.Primary(e)}`;break;case"overlap":t=Ko.Accent.Light[4],n=`1px solid ${Ko.Accent.Light[4](e)}`;break;case"overlap-outline":t=Ko.Accent.Light[4],n=`1px solid ${Ko.Primary(e)}`}return{color:t,border:n}},oc=D.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 2.5rem;
`,sc=D.div`
    position: absolute;
    height: 2.5rem;
    width: 50%;

    ${e=>{if(!e.$type)return;const{color:t,border:n}=ic(e);return S`
            background-color: ${t};
            background-clip: content-box;
            border-top: ${n};
            border-bottom: ${n};
        `}}
`,cc=D(sc)`
    left: 0;
`,lc=D(sc)`
    right: 0;
`,uc=D.div`
    z-index: -1;
    box-shadow: 0 0 4px 1px ${Ko.Shadow.Accent};
    position: absolute;
    height: 100%;
    width: 50%;
    display: none;

    ${e=>e.$shadow&&"display: block;"}
`,dc=D(uc)`
    left: 0;
`,hc=D(uc)`
    right: 0;
`,fc=D.div`
    position: absolute;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;

    border: 1px solid transparent;
    border-radius: 50%;

    ${e=>{if(e.$type){const{color:t,border:n}=ic(e);return S`
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
`,pc=D(fc)`
    right: calc(50% - 1.25rem);
    clip-path: inset(-3px 1.25rem -3px -3px);
    &:before {
        box-shadow: -1px 0 4px 1px ${Ko.Shadow.Accent};
    }
`,mc=D(fc)`
    left: calc(50% - 1.25rem);
    clip-path: inset(-3px -3px -3px 1.25rem);
    &:before {
        box-shadow: 1px 0 4px 1px ${Ko.Shadow.Accent};
    }
`,gc=D(gs.H5)`
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
                    ${ps("H5","semibold")};
                    color: ${Ko.Accent.Light[2]};
                `:S`
                color: ${Ko.Neutral[4]};
            `;switch(n){case"selected":return S`
                    ${ps("H5","semibold")};
                    color: ${Ko.Primary};
                `;case"current":return S`
                    color: ${Ko.Neutral[3]};
                `;case"unavailable":return S`
                    color: ${Ko.Neutral[4]};
                `;default:return S`
                    color: ${Ko.Neutral[1]};
                `}}}
`,yc=({bgLeft:n,bgRight:r,circleLeft:a,circleRight:i,shadow:o,circleShadow:s,labelType:c,disabled:l,interactive:u,date:d,onSelect:h,onHover:f,onHoverEnd:p})=>e(oc,{children:[t(dc,{$shadow:n&&o}),t(cc,{$type:n,$shadow:n&&o}),t(pc,{$type:a,$shadow:a&&s}),t(hc,{$shadow:r&&o}),t(lc,{$type:r,$shadow:r&&o}),t(mc,{$type:i,$shadow:i&&s}),t(gc,Object.assign({weight:"regular",$type:c,$disabled:l,$interactive:u,onClick:()=>{h(d)},onMouseEnter:()=>{f(d)},onMouseLeave:()=>{p&&p(d)}},{children:d.date()}))]}),vc=({date:e,calendarDate:n,startDate:r,endDate:a,currentFocus:i,hoverDate:o,minDate:s,maxDate:c,disabledDates:l,allowDisabledSelection:u,isNewSelection:d,onSelect:h,onHover:f})=>{const p=ka.isDisabledDay(e,l,s,c),m=!p||u,g=()=>{const e=C(o),t=e.isBefore(a,"day"),n=e.isAfter(r,"day");let s,c,l,u;return"start"===i&&a&&t&&(r&&n?(l=o,u=a):(s=o,c=r||a)),"end"===i&&r&&n&&(a&&t?(l=r,u=o):(s=a||r,c=o)),{hoverStart:s,hoverEnd:c,overlapStart:l,overlapEnd:u}},y={date:e,calendarDate:n,disabled:p,interactive:m,onSelect:()=>{h(e,!m)},onHover:()=>{f(e.format("YYYY-MM-DD"),!m)}};return t(yc,Object.assign({},y,(()=>{const t={};if(n.month()!==e.month())t.labelType="unavailable";else if(C().isSame(e,"day")&&!p)t.labelType="current",t.circleLeft="current",t.circleRight="current";else if(d){const n="end"===i&&r&&e.isBefore(r),o="start"===i&&a&&e.isAfter(a);(n||o)&&(t.labelType="unavailable")}return t})(),(()=>{const t={},n=e.isSame(r,"day"),i=e.isSame(a,"day");return(r&&n||a&&i)&&(t.labelType="selected",t.circleLeft="selected-outline",t.circleRight="selected-outline"),r&&a&&e.isBetween(r,a,"day","[]")&&(t.labelType="selected",n||(t.bgLeft="selected"),i||(t.bgRight="selected")),t})(),(()=>{if(!o)return;const t={};e.isSame(o,"day")&&(t.circleShadow=!0,t.circleLeft="hover-current",t.circleRight="hover-current");const{hoverStart:n,hoverEnd:r,overlapStart:a,overlapEnd:i}=g();if(n&&r){if(e.isBetween(n,r,"day","[]")){const a=e.isSame(n,"day"),i=e.isSame(r,"day");t.labelType="selected",a||(t.bgLeft="hover-dash"),i||(t.bgRight="hover-dash")}return t}if(a&&i){if(e.isBetween(a,i,"day","[]")){const n=e.isSame(a,"day"),r=e.isSame(i,"day");t.labelType="selected",(n||r)&&(t.circleShadow=!0,t.circleLeft="overlap-outline",t.circleRight="overlap-outline"),n||(t.bgLeft="overlap"),r||(t.bgRight="overlap")}return t}return t})()))};C.extend(xa);const bc=({calendarDate:n,currentFocus:r,disabledDates:a,selectedStartDate:i,selectedEndDate:s,onSelect:c,onHover:l,isNewSelection:u,minDate:d,maxDate:h,allowDisabledSelection:f})=>{const p=g((()=>ka.generateDays(n)),[n]),[m,y]=o(""),v=(e,t)=>{t&&!f||c(e)},b=(e,t)=>{t&&!f||(y(e),l(e))},w=()=>{y(""),l("")};return e(ec,Object.assign({"data-testid":"calendar-content"},{children:[p[0].map(((e,n)=>t(tc,{children:t(gs.H6,Object.assign({weight:"semibold"},{children:C(e).format("ddd")}))},`week-day-${n}`))),p.map(((e,o)=>t(nc,Object.assign({onMouseLeave:w},{children:e.map(((e,o)=>t(vc,{date:e,calendarDate:n,startDate:i,endDate:s,hoverDate:m,currentFocus:r,minDate:d,maxDate:h,disabledDates:a,allowDisabledSelection:f,isNewSelection:u,onSelect:v,onHover:b},`day-${o}`)))}),o)))]}))},wc=({date:e,calendarDate:n,selectedDate:r,hoverDate:a,minDate:i,maxDate:o,disabledDates:s,allowDisabledSelection:c,numberOfDays:l,onSelect:u,onHover:d})=>{const h=ka.isDisabledDay(e,s,i,o),f=!h||c,{start:p,end:m}=r?ka.getFixedRangeStartEnd(Ca.toDayjs(r),l):{start:void 0,end:void 0},{start:g,end:y}=a?ka.getFixedRangeStartEnd(Ca.toDayjs(a),l):{start:void 0,end:void 0},v=r&&e.isBetween(p,m,"day","[]"),b=a&&e.isBetween(g,y,"day","[]"),w=v&&e.isSame(p,"day")||b&&e.isSame(g,"day"),D=v&&e.isSame(m,"day")||b&&e.isSame(y,"day"),$=(e,t,n,r)=>{n?e.circleLeft=t:e.bgLeft=t,r?e.circleRight=t:e.bgRight=t},S={date:e,calendarDate:n,disabled:h,interactive:f,onSelect:()=>{u(e,!f)},onHover:()=>{d(e.format("YYYY-MM-DD"),!f)}};return t(yc,Object.assign({},S,(()=>{const t={};return v||b?t.labelType="selected":n.month()!==e.month()?t.labelType="unavailable":C().isSame(e,"day")&&!h&&(t.labelType="current",t.circleLeft="current",t.circleRight="current"),t})(),(()=>{const t={},n=e.format("YYYY-MM-DD");return b&&$(t,"hover-dash",n===g,n===y),v&&$(t,"selected",n===p,n===m),v&&b&&$(t,"overlap",w,D),n===p&&(b?(t.circleLeft="overlap-outline",t.circleRight="overlap-outline"):(t.circleRight="selected-outline",t.circleLeft="selected-outline")),n===g&&(t.circleLeft="hover-current",t.circleRight="hover-current",t.circleShadow=!0,g>=p&&g<m&&(t.circleLeft="overlap-outline",t.circleRight="overlap-outline")),t})()))},Dc=({calendarDate:n,disabledDates:r,selectedStartDate:a,onSelect:i,onHover:s,minDate:c,maxDate:l,allowDisabledSelection:u,numberOfDays:d})=>{const h=g((()=>ka.generateDays(n)),[n]),[f,p]=o(""),m=(e,t)=>{t&&!u||(i(e),e&&!C(e).isSame(e,"month")&&p(""))},y=(e,t)=>{t&&!u||(p(e),s(e))},v=()=>{p(""),s("")};return e(ec,Object.assign({"data-testid":"calendar-content"},{children:[h[0].map(((e,n)=>t(tc,{children:t(gs.H6,Object.assign({weight:"semibold"},{children:C(e).format("ddd")}))},`week-day-${n}`))),h.map(((e,i)=>t(nc,Object.assign({onMouseLeave:v},{children:e.map(((e,i)=>t(wc,{date:e,calendarDate:n,selectedDate:a,hoverDate:f,minDate:c,maxDate:l,disabledDates:r,allowDisabledSelection:u,onSelect:m,onHover:y,numberOfDays:d},`day-${i}`)))}),i)))]}))},$c=D.div`
    width: 100%;
    padding: 1.5rem 2rem;
    background: ${Ko.Neutral[8]};

    ${e=>{if("input"===e.$type)return S`
                border: 1px solid ${Ko.Neutral[5]};
                border-radius: 8px;
                overflow: hidden;
                padding: 1.5rem 1.25rem;

                [data-id="header"] {
                    margin: 0 0 0.25rem 0;
                }
            `}}
`,Sc=({date:e,calendarDate:n,selectedDate:r,hoverDate:a,minDate:i,maxDate:o,disabledDates:s,allowDisabledSelection:c,onSelect:l,onHover:u})=>{const d=ka.isDisabledDay(e,s,i,o),h=!d||c,{start:f,end:p}=ka.getWeekStartEnd(Ca.toDayjs(r)),{start:m,end:g}=ka.getWeekStartEnd(Ca.toDayjs(a)),y=r&&e.isBetween(f,p,"day","[]"),v=a&&e.isBetween(m,g,"day","[]"),b=y&&e.isSame(f)||v&&e.isSame(m),w=y&&e.isSame(p)||v&&e.isSame(g),D={date:e,calendarDate:n,disabled:d,interactive:h,onSelect:()=>{l(e,!h)},onHover:()=>{u(e.format("YYYY-MM-DD"),!h)}};return t(yc,Object.assign({},D,(()=>{const t={};return y||v?t.labelType="selected":n.month()!==e.month()?t.labelType="unavailable":C().isSame(e,"day")&&!d&&(t.labelType="current",t.circleLeft="current",t.circleRight="current"),t})(),(()=>{const e={};let t;return y&&v?(t="hover-current",e.shadow=!0,e.circleShadow=b||w):y?t="selected-outline":v&&(t="hover-dash"),t&&(b?e.circleLeft=t:e.bgLeft=t,w?e.circleRight=t:e.bgRight=t),e})()))},xc=({calendarDate:n,disabledDates:r,selectedStartDate:a,onSelect:i,onHover:s,minDate:c,maxDate:l,allowDisabledSelection:u})=>{const d=g((()=>ka.generateDays(n)),[n]),[h,f]=o(""),p=(e,t)=>{if(t&&!u)return;const n=e.startOf("week");i(n),e&&!C(e).isSame(n,"month")&&f("")},m=(e,t)=>{t&&!u||(f(e),s(e))},y=()=>{f(""),s("")};return e(ec,Object.assign({"data-testid":"calendar-content"},{children:[d[0].map(((e,n)=>t(tc,{children:t(gs.H6,Object.assign({weight:"semibold"},{children:C(e).format("ddd")}))},`week-day-${n}`))),d.map(((e,i)=>t(nc,Object.assign({onMouseLeave:y},{children:e.map(((e,i)=>t(Sc,{date:e,calendarDate:n,selectedDate:a,hoverDate:h,minDate:c,maxDate:l,disabledDates:r,allowDisabledSelection:u,onSelect:p,onHover:m},`day-${i}`)))}),i)))]}))},Oc=a.forwardRef((({disabledDates:e,onYearMonthDisplayChange:n,onSelect:r,onHover:a,onDismiss:o,value:s,endValue:c,currentFocus:l,withButton:u,variant:d,minDate:h,maxDate:f,allowDisabledSelection:p,type:m="standalone",selectWithinRange:g=!0,initialCalendarDate:v,numberOfDays:b},w)=>{const D=i(),$=i(void 0);y(w,(()=>({reset(){D.current.resetView()},setCalendarDate(e){D.current.setCalendarDate(e)}})));const S=e=>{const t=e.format("YYYY-MM-DD");D.current.setCalendarDate(t),O(t)},x=e=>{F(e)},O=e=>{r&&r(e)},F=e=>{a&&a(e)},_=e=>{if(n){const t={month:e.month()+1,year:e.year()};n(t)}};return t($c,Object.assign({$type:m},{children:t(Ks,Object.assign({type:m,ref:D,withButton:u,doneButtonDisabled:(()=>{if(!u)return;let e=!0;switch(d){case"single":e=!1;break;case"range":case"fixed-range":e=!!s!=!!c;break;case"week":e=!s&&!c}return e})(),onDismiss:o,minDate:h,maxDate:f,selectWithinRange:g,currentFocus:l,selectedStartDate:s,selectedEndDate:c,allowDisabledSelection:p,onCalendarDateChange:e=>{$.current&&$.current.isSame(e,"month")||_(e),$.current=e},initialCalendarDate:v},{children:({calendarDate:n})=>(n=>{switch(d){case"week":return t(xc,{calendarDate:n,disabledDates:e,selectedStartDate:s,minDate:h,maxDate:f,allowDisabledSelection:p,onSelect:S,onHover:x});case"fixed-range":return t(Dc,{calendarDate:n,disabledDates:e,selectedStartDate:s,minDate:h,maxDate:f,allowDisabledSelection:p,onSelect:S,onHover:x,numberOfDays:b});default:return t(bc,{calendarDate:n,currentFocus:l,disabledDates:e,selectedStartDate:s,selectedEndDate:c,minDate:h,maxDate:f,isNewSelection:g,allowDisabledSelection:p,onSelect:S,onHover:x})}})(n)}))}))})),Fc=a.forwardRef(((e,n)=>{const{isOpen:r}=e,a=B(e,["isOpen"]),o=i(),s=Pe(),c=Xr({height:r?s.height:0,config:{duration:300}});return d((()=>{r&&o.current.reset()}),[r]),y(n,(()=>o.current)),t(ga,Object.assign({style:c},{children:t("div",Object.assign({ref:s.ref,inert:r?void 0:""},{children:t(Oc,Object.assign({ref:o},a))}))}))})),_c=D.div`
    position: relative;
    height: 100%;
    display: flex;
    flex: 1;

    ${e=>{if(e.$wrap)return S`
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
`,kc=D.div`
    width: 100%; // Force next flex item to break to next line
`,Bc=D.div`
    display: flex;
    flex: 1;
    align-items: center;
`,jc=D(k)`
    color: ${Ko.Neutral[3]};
    width: 1.125rem;
    height: 1.125rem;
    flex-shrink: 0;
    margin: 0 0.5rem;
    align-self: center;
`,Mc=D.div`
    position: absolute;
    background: ${e=>e.$error?Ko.Validation.Red.Border(e):Ko.Primary(e)};
    height: 0.125rem;
    // half - half padding - half icon width
    width: calc(50% - 0.5rem - (1.125rem / 2));
    transition: left 350ms ease-in-out, opacity 350ms ease-in-out;
    left: 0;
    bottom: 0;

    ${e=>{switch(e.$position){case"start":return S`
                    opacity: 1;
                `;case"end":return S`
                    left: calc(50% + 1rem);
                    opacity: 1;
                `;case"none":return S`
                    opacity: 0;
                `}}}

    ${e=>{if(e.$wrap)return S`
                display: none;
            `}}
`,Ec=({children:n,currentActive:r,error:a,className:i,wrap:o})=>{const[s,c]=n;return e(_c,Object.assign({className:i,$wrap:o},{children:[t(Bc,Object.assign({"data-id":"range-container-elem1-container"},{children:s})),t(jc,{}),o&&t(kc,{}),t(Bc,Object.assign({"data-id":"range-container-elem2-container"},{children:c})),t(Mc,{"data-id":"range-container-indicator",$position:r,$error:a,$wrap:o})]}))},Ac=D.div`
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid ${Ko.Neutral[5]};
    border-radius: 4px;
    background: ${Ko.Neutral[8]};
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};

    :focus-within {
        border: 1px solid ${Ko.Accent.Light[1]};
        box-shadow: ${Ss.InputBoxShadow};
    }

    ${e=>e.$readOnly?S`
                border: 1px solid transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    border: 1px solid transparent;
                    box-shadow: none;
                }
            `:e.$disabled?S`
                background: ${Ko.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    border: 1px solid ${Ko.Neutral[5]};
                    box-shadow: none;
                }
            `:e.$error?S`
                border: 1px solid ${Ko.Validation.Red.Border};

                :focus-within {
                    border: 1px solid ${Ko.Validation.Red.Border};
                    box-shadow: ${Ss.InputErrorBoxShadow};
                }
            `:void 0}
`,Cc=D.input`
    ${ps("Body","regular")}
    color: ${Ko.Neutral[1]};
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
        color: ${Ko.Neutral[3]};
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
`,Pc=D.div`
    display: flex;
    align-items: center;
    position: relative;

    flex: 1;
`,Hc=D.div`
    display: flex;
    align-items: center;

    ${e=>{if(e.$hover)return S`
                ${Ic}, ${Lc} {
                    color: ${Ko.Neutral[4]};
                }
            `}}
`,Ic=D(Cc)`
    background: transparent;
    text-align: center;
`,Rc=D(Ic)`
    width: 2rem;
    margin-right: 0.25rem;
`,Tc=D(Ic)`
    width: 2.5rem;
`,Yc=D(Ic)`
    width: 3rem;
    margin-left: 0.25rem;
`,Lc=D(gs.Body)`
    ${e=>{if(e.$inactive)return S`
                color: ${Ko.Neutral[3](e)};
            `}}
`,zc=D.div`
    ${ps("Body","regular")}
    background-color: ${Ko.Neutral[8]};
    color: ${Ko.Neutral[3]};
    position: absolute;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    ${e=>e.$disabled?S`
                background-color: ${Ko.Neutral[6](e)};
                cursor: not-allowed;
            `:e.$hide?S`
                display: none;
            `:void 0}
`;C.extend(wa);const Nc=a.forwardRef((({disabled:n,readOnly:r,names:a,value:s,focused:c,hoverValue:l,placeholder:u,label:h,onChange:f,onFocus:p,onBlur:m,hideInputKeyboard:g},v)=>{const b=g?"none":"numeric",[w,D,$]=Ra(""),[S,x,O]=Ra(""),[F,_,k]=Ra(""),[B,j]=o("none"),[M,E]=o(!1),A=i(null),P=i(null),H=i(null),I=i(null),[R,T,Y]=V(l);d((()=>{const[e="",t="",n=""]=V(s);D(e),x(t),_(n)}),[s]),d((()=>{c||j("none"),c&&(E(!0),A.current.contains(document.activeElement)||P.current.focus())}),[c]),y(v,(()=>({ref:A,resetPlaceholder(){E(!1)},resetInput(){const[e="",t="",n=""]=V(s);D(e),x(t),_(n)}})),[s]);const L=e=>{e.target.select();const t=e.target.name;j(t)},z=e=>{const[t,n,r]=a,i={[t]:$.current,[n]:O.current,[r]:k.current},o=e.target.name,s=i[o],c=o!==r?Ia.padValue(s,!0):s;switch(o){case t:i[t]=c,D(c);break;case n:i[n]=c,x(c)}const l=`${i[r]}-${i[n]}-${i[t]}`,u=C(l,"YYYY-MM-DD",!0).isValid(),d=!i[t]&&!i[n]&&!i[r];u&&s!==c&&f(l),A.current.contains(e.relatedTarget)||(j("none"),null==m||m(d||u))},N=e=>{if(l)return;const t=e.target.name,n=e.target.value.replace(/[^0-9]/g,""),r={day:w,month:S,year:F};switch(t){case a[0]:r.day=n,D(n),2===n.length&&H.current.focus();break;case a[1]:r.month=n,x(n),2===n.length&&I.current.focus();break;case a[2]:r.year=n,_(n)}if(!r.day&&!r.month&&!r.year)return void f("");const i=`${r.year}-${r.month}-${r.day}`;C(i,"YYYY-MM-DD",!0).isValid()&&f(i)},W=e=>{"Backspace"!==e.code&&"Backspace"!==e.key||(B===a[1]&&0===S.length&&P.current.focus(),B===a[2]&&0===F.length&&H.current.focus())};function V(e){if(e){const t=C(new Date(e));return[Ia.padValue(t.date().toString()),Ia.padValue((t.month()+1).toString()),t.year().toString()]}return[void 0,void 0,void 0]}return e(Pc,Object.assign({role:"group","aria-label":h,onClick:()=>{n||r||(E(!0),A.current.contains(document.activeElement)||P.current.focus())},onFocus:()=>{n||(E(!0),c||p())}},{children:[e(Hc,Object.assign({ref:A,$hover:!!l},{children:[t(Rc,{ref:P,name:a[0],maxLength:2,value:null!=R?R:w,onFocus:L,onBlur:z,onChange:N,type:"text",inputMode:b,pattern:"[0-9]{2}","data-testid":`${a[0]}-input`,"aria-label":"day",disabled:n,readOnly:r,tabIndex:r?-1:0,autoComplete:"off",placeholder:B!==a[0]||r?"DD":""}),t(Lc,Object.assign({$inactive:0===w.length},{children:"/"})),t(Tc,{ref:H,name:a[1],maxLength:2,value:null!=T?T:S,onFocus:L,onBlur:z,onChange:N,onKeyDown:W,type:"text",inputMode:b,pattern:"[0-9]{2}","data-testid":`${a[1]}-input`,"aria-label":"month",disabled:n,readOnly:r,tabIndex:r?-1:0,autoComplete:"off",placeholder:B!==a[1]||r?"MM":""}),t(Lc,Object.assign({$inactive:0===S.length},{children:"/"})),t(Yc,{ref:I,name:a[2],maxLength:4,value:null!=Y?Y:F,onFocus:L,onBlur:z,onChange:N,onKeyDown:W,type:"text",inputMode:b,pattern:"[0-9]{4}","data-testid":`${a[2]}-input`,"aria-label":"year",disabled:n,readOnly:r,tabIndex:r?-1:0,autoComplete:"off",placeholder:B!==a[2]||r?"YYYY":""})]})),(()=>{if(!s&&!r&&u)return t(zc,Object.assign({$hide:M,$disabled:n},{children:u}))})()]}))})),Wc=(e,t,n)=>{const r=[];e&&r.push(`[${e}]`),r.push(t,n),console.log(...r)},Vc=D(Ac)`
    ${e=>e.$wrap&&S`
            padding: 0.75rem 1rem;
        `}
`,qc=D.div`
    display: flex;
    align-items: center;
    height: calc(3rem - 2px); // exclude top and bottom borders
    width: 100%;

    ${e=>e.$wrap&&S`
            height: fit-content;
        `}
`,Qc={initialStart:"",initialEnd:"",selectedStart:"",selectedEnd:"",currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1},Uc=n=>{var{minDate:r,maxDate:a,disabled:s,disabledDates:c,error:l,hideInputKeyboard:u,value:h,valueEnd:f,onChange:m,onFocus:g,onBlur:y,onYearMonthDisplayChange:b,withButton:w=!0,variant:D="range",numberOfDays:$=7,readOnly:S,id:x,allowDisabledSelection:O}=n,F=B(n,["minDate","maxDate","disabled","disabledDates","error","hideInputKeyboard","value","valueEnd","onChange","onFocus","onBlur","onYearMonthDisplayChange","withButton","variant","numberOfDays","readOnly","id","allowDisabledSelection"]);const[_,k]=o(),[j,M]=o(void 0),[E,A]=o(!1),[P,I]=o(!1),R="week"===D,T="fixed-range"===D,[{selectedStart:L,selectedEnd:z,currentFocus:N,calendarOpen:W,isStartDirty:V,isEndDirty:q},Q]=(({initialState:e,reducers:t,name:n,debug:r})=>{const[a,i]=v(((e,n)=>t[n.type]?t[n.type](e,n.payload):e),e);return[a,Object.fromEntries(Object.keys(t).map((e=>[e,t=>{r&&Wc(n,e,t),i({type:e,payload:t})}])))]})({name:"date-range-input",initialState:Qc,reducers:{blur:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),changeStart:(e,t)=>Object.assign(Object.assign({},e),{selectedStart:t,isStartDirty:!0}),changeEnd:(e,t)=>Object.assign(Object.assign({},e),{selectedEnd:t,isEndDirty:!0}),reselectStart:e=>Object.assign(Object.assign({},e),{selectedStart:"",currentFocus:"start"}),reselectEnd:e=>Object.assign(Object.assign({},e),{selectedEnd:"",currentFocus:"end"}),focus:(e,t)=>Object.assign(Object.assign({},e),{currentFocus:R?"none":T?"start":t,calendarOpen:!S}),cancel:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1}),done:(e,t)=>Object.assign(Object.assign({},e),{selectedStart:t.start,selectedEnd:t.end,initialStart:t.start,initialEnd:t.end,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),resetStart:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart}),resetEnd:e=>Object.assign(Object.assign({},e),{selectedEnd:e.initialEnd}),resetRange:(e,t)=>Object.assign(Object.assign({},e),{initialStart:t.start,selectedStart:t.start,initialEnd:t.end,selectedEnd:t.end})}}),U=i(!1),Z=i(),G=i(),X=i(),J=i(),K=H.useMediaQuery({maxWidth:Y.mobileL}),ee=(({maxWidth:e,targetRef:t})=>{const[n,r]=o(!1);return Pe({targetRef:t,refreshMode:"throttle",refreshRate:300,handleHeight:!1,onResize:p((t=>{r(t<=e)}),[e])}),n})({maxWidth:320,targetRef:Z}),te=w||K;d((()=>{Q.resetRange({start:Pa.sanitizeInput(h),end:Pa.sanitizeInput(f)})}),[h,f]),d((()=>{"start"===N?k(L):"end"===N&&k(z)}),[N]);const ne=e=>{if(ce(e))return void(U.current=!0);if(Q.changeStart(e),G.current.setCalendarDate(e),U.current=!1,!e)return void(te||z||!q||(Q.resetRange({start:"",end:""}),null==m||m("","")));if(!z)return void Q.focus("end");if(C(e).isAfter(z,"day"))Q.reselectEnd();else{if(q)return te?void 0:(Q.done({start:e,end:z}),void(null==m||m(e,z)));Q.focus("end")}},re=e=>{if(ce(e))return void(U.current=!0);if(Q.changeEnd(e),G.current.setCalendarDate(e),!e)return void(te||L||!V||(Q.resetRange({start:"",end:""}),null==m||m("","")));if(!L)return void Q.focus("start");if(C(e).isBefore(L,"day"))Q.reselectStart();else{if(V)return te?void 0:(Q.done({start:L,end:e}),void(null==m||m(L,e)));Q.focus("start")}},ae=e=>{if(ce(e))return void(U.current=!0);if(Q.changeStart(e),G.current.setCalendarDate(e),U.current=!1,!e)return void(te?Q.changeEnd(""):(Q.resetRange({start:"",end:""}),null==m||m("","")));const t=C(e).format("YYYY-MM-DD"),n=C(t).add($-1,"day").format("YYYY-MM-DD");return Q.changeStart(t),Q.changeEnd(n),U.current=!1,te?void 0:(Q.done({start:t,end:n}),void(null==m||m(t,n)))},ie=e=>()=>{S||(Q.focus(e),oe(),se(),g&&g())},oe=()=>{if(R){const e=Ca.toDayjs(L).startOf("week").format("YYYY-MM-DD");A(!0),I(!0),k(e)}},se=()=>{T&&(I(!0),k(L))},ce=e=>!O&&e&&Pa.isDateDisabled(e,{disabledDates:c,minDate:r,maxDate:a}),le=e=>{let t={start:void 0,end:void 0};switch(D){case"range":t={start:"start"===N?j:void 0,end:"end"===N?j:void 0};break;case"week":if(!j)return;t={start:C(j).startOf("week").format("YYYY-MM-DD"),end:C(j).endOf("week").format("YYYY-MM-DD")};break;case"fixed-range":if(!j)return;t={start:C(j).format("YYYY-MM-DD"),end:C(j).add($-1,"day").format("YYYY-MM-DD")}}return t[e]};return e(Vc,Object.assign({ref:Z,$disabled:s,$readOnly:S,$error:l,$wrap:ee,id:x,"data-testid":F["data-testid"],onBlur:e=>{Z.current.contains(e.relatedTarget)||(Q.blur(),A(!1),I(!1),X.current.resetPlaceholder(),J.current.resetPlaceholder(),null==y||y())},onKeyDown:e=>{"Escape"===e.code&&Q.blur(),"Enter"!==e.code||te||(L&&z?(Q.done({start:L,end:z}),null==m||m(L,z)):Q.blur())}},F,{children:[e(Ec,Object.assign({currentActive:N,wrap:ee,error:l},{children:[t(qc,Object.assign({$wrap:ee},{children:t(Nc,{ref:X,placeholder:"From",names:["start-day","start-month","start-year"],value:L,disabled:s,readOnly:E||S,focused:"start"===N,hoverValue:le("start"),onChange:T?ae:ne,onFocus:ie("start"),onBlur:e=>{e&&!U.current||(Q.resetStart(),X.current.resetInput())},hideInputKeyboard:u})})),t(qc,Object.assign({$wrap:ee},{children:t(Nc,{ref:J,placeholder:"To",names:["end-day","end-month","end-year"],value:z,disabled:s,readOnly:P||S,focused:"end"===N,hoverValue:le("end"),onChange:re,onFocus:ie("end"),onBlur:e=>{e&&!U.current||(Q.resetEnd(),J.current.resetInput())},hideInputKeyboard:u})}))]})),t(Fc,{ref:G,type:"input",variant:D,initialCalendarDate:_,isOpen:W,withButton:te,value:L,endValue:z,selectWithinRange:V||q,currentFocus:N,disabledDates:c,minDate:r,maxDate:a,allowDisabledSelection:O,onSelect:e=>{switch(D){case"week":(e=>{const t=C(e).startOf("week").format("YYYY-MM-DD"),n=C(e).endOf("week").format("YYYY-MM-DD");if(Q.changeStart(t),Q.changeEnd(n),U.current=!1,!te)Q.done({start:t,end:n}),null==m||m(t,n)})(e);break;case"fixed-range":ae(e);break;default:"start"===N?ne(e):"end"===N&&re(e)}},onDismiss:e=>{switch(e){case"reset":Q.cancel();break;case"confirmed":Q.done({start:L,end:z}),null==m||m(L,z)}},onHover:e=>{M(e)},onYearMonthDisplayChange:b,numberOfDays:$})]}))};export{Uc as DateRangeInput};
//# sourceMappingURL=index.js.map
