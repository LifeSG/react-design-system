import{jsxs as e,jsx as t,Fragment as n}from"react/jsx-runtime";import*as r from"react";import a,{cloneElement as i,useRef as o,useState as s,isValidElement as c,createRef as l,PureComponent as u,useEffect as d,useLayoutEffect as h,forwardRef as f,useCallback as p,useContext as m,useMemo as g,useImperativeHandle as y,useReducer as v}from"react";import{findDOMNode as b,unstable_batchedUpdates as w}from"react-dom";import $,{keyframes as S,css as D}from"styled-components";import{ChevronDownIcon as x}from"@lifesg/react-icons/chevron-down";import{ChevronLeftIcon as O}from"@lifesg/react-icons/chevron-left";import{ChevronRightIcon as F}from"@lifesg/react-icons/chevron-right";import{ExternalIcon as _}from"@lifesg/react-icons/external";import{ArrowRightIcon as j}from"@lifesg/react-icons";function k(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}var M="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},E={exports:{}};E.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",a="second",i="minute",o="hour",s="day",c="week",l="month",u="quarter",d="year",h="date",f="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},y=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},v={s:y,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),a=n%60;return(t<=0?"+":"-")+y(r,2,"0")+":"+y(a,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),a=t.clone().add(r,l),i=n-a<0,o=t.clone().add(r+(i?-1:1),l);return+(-(r+(n-a)/(i?a-o:o-a))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:l,y:d,w:c,d:s,D:h,h:o,m:i,s:a,ms:r,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",w={};w[b]=g;var $=function(e){return e instanceof O},S=function e(t,n,r){var a;if(!t)return b;if("string"==typeof t){var i=t.toLowerCase();w[i]&&(a=i),n&&(w[i]=n,a=i);var o=t.split("-");if(!a&&o.length>1)return e(o[0])}else{var s=t.name;w[s]=t,a=s}return!r&&a&&(b=a),a||!r&&b},D=function(e,t){if($(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new O(n)},x=v;x.l=S,x.i=$,x.w=function(e,t){return D(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var O=function(){function g(e){this.$L=S(e.locale,null,!0),this.parse(e)}var y=g.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(x.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(p);if(r){var a=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],a,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],a,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return x},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(e,t){var n=D(e);return this.startOf(t)<=n&&n<=this.endOf(t)},y.isAfter=function(e,t){return D(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<D(e)},y.$g=function(e,t,n){return x.u(e)?this[t]:this.set(n,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var n=this,r=!!x.u(t)||t,u=x.p(e),f=function(e,t){var a=x.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?a:a.endOf(s)},p=function(e,t){return x.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},m=this.$W,g=this.$M,y=this.$D,v="set"+(this.$u?"UTC":"");switch(u){case d:return r?f(1,0):f(31,11);case l:return r?f(1,g):f(0,g+1);case c:var b=this.$locale().weekStart||0,w=(m<b?m+7:m)-b;return f(r?y-w:y+(6-w),g);case s:case h:return p(v+"Hours",0);case o:return p(v+"Minutes",1);case i:return p(v+"Seconds",2);case a:return p(v+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var n,c=x.p(e),u="set"+(this.$u?"UTC":""),f=(n={},n[s]=u+"Date",n[h]=u+"Date",n[l]=u+"Month",n[d]=u+"FullYear",n[o]=u+"Hours",n[i]=u+"Minutes",n[a]=u+"Seconds",n[r]=u+"Milliseconds",n)[c],p=c===s?this.$D+(t-this.$W):t;if(c===l||c===d){var m=this.clone().set(h,1);m.$d[f](p),m.init(),this.$d=m.set(h,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[x.p(e)]()},y.add=function(r,u){var h,f=this;r=Number(r);var p=x.p(u),m=function(e){var t=D(f);return x.w(t.date(t.date()+Math.round(e*r)),f)};if(p===l)return this.set(l,this.$M+r);if(p===d)return this.set(d,this.$y+r);if(p===s)return m(1);if(p===c)return m(7);var g=(h={},h[i]=t,h[o]=n,h[a]=e,h)[p]||1,y=this.$d.getTime()+r*g;return x.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=e||"YYYY-MM-DDTHH:mm:ssZ",a=x.z(this),i=this.$H,o=this.$m,s=this.$M,c=n.weekdays,l=n.months,u=function(e,n,a,i){return e&&(e[n]||e(t,r))||a[n].slice(0,i)},d=function(e){return x.s(i%12||12,e,"0")},h=n.meridiem||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:x.s(s+1,2,"0"),MMM:u(n.monthsShort,s,l,3),MMMM:u(l,s),D:this.$D,DD:x.s(this.$D,2,"0"),d:String(this.$W),dd:u(n.weekdaysMin,this.$W,c,2),ddd:u(n.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(i),HH:x.s(i,2,"0"),h:d(1),hh:d(2),a:h(i,o,!0),A:h(i,o,!1),m:String(o),mm:x.s(o,2,"0"),s:String(this.$s),ss:x.s(this.$s,2,"0"),SSS:x.s(this.$ms,3,"0"),Z:a};return r.replace(m,(function(e,t){return t||p[e]||a.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,h,f){var p,m=x.p(h),g=D(r),y=(g.utcOffset()-this.utcOffset())*t,v=this-g,b=x.m(this,g);return b=(p={},p[d]=b/12,p[l]=b,p[u]=b/3,p[c]=(v-y)/6048e5,p[s]=(v-y)/864e5,p[o]=v/n,p[i]=v/t,p[a]=v/e,p)[m]||v,f?b:x.a(b)},y.daysInMonth=function(){return this.endOf(l).$D},y.$locale=function(){return w[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=S(e,t,!0);return r&&(n.$L=r),n},y.clone=function(){return x.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},g}(),F=O.prototype;return D.prototype=F,[["$ms",r],["$s",a],["$m",i],["$H",o],["$W",s],["$M",l],["$y",d],["$D",h]].forEach((function(e){F[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),D.extend=function(e,t){return e.$i||(e(t,O,D),e.$i=!0),D},D.locale=S,D.isDayjs=$,D.unix=function(e){return D(1e3*e)},D.en=w[b],D.Ls=w,D.p={},D}();var B,A=E.exports,C={exports:{}};B=e=>(()=>{var t={"./node_modules/css-mediaquery/index.js":
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
  \************************************************************/(e,t,n)=>{var r,a=n(/*! react-is */"./node_modules/react-is/index.js"),i=n(/*! object-assign */"./node_modules/object-assign/index.js"),o=n(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),s=n(/*! ./lib/has */"./node_modules/prop-types/lib/has.js"),c=n(/*! ./checkPropTypes */"./node_modules/prop-types/checkPropTypes.js");function l(){return null}r=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},e.exports=function(e,t){var n="function"==typeof Symbol&&Symbol.iterator,u="@@iterator",d="<<anonymous>>",h={array:g("array"),bigint:g("bigint"),bool:g("boolean"),func:g("function"),number:g("number"),object:g("object"),string:g("string"),symbol:g("symbol"),any:m(l),arrayOf:function(e){return m((function(t,n,r,a,i){if("function"!=typeof e)return new p("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var s=t[n];if(!Array.isArray(s))return new p("Invalid "+a+" `"+i+"` of type `"+b(s)+"` supplied to `"+r+"`, expected an array.");for(var c=0;c<s.length;c++){var l=e(s,c,r,a,i+"["+c+"]",o);if(l instanceof Error)return l}return null}))},element:m((function(t,n,r,a,i){var o=t[n];return e(o)?null:new p("Invalid "+a+" `"+i+"` of type `"+b(o)+"` supplied to `"+r+"`, expected a single ReactElement.")})),elementType:m((function(e,t,n,r,i){var o=e[t];return a.isValidElementType(o)?null:new p("Invalid "+r+" `"+i+"` of type `"+b(o)+"` supplied to `"+n+"`, expected a single ReactElement type.")})),instanceOf:function(e){return m((function(t,n,r,a,i){if(!(t[n]instanceof e)){var o=e.name||d;return new p("Invalid "+a+" `"+i+"` of type `"+((s=t[n]).constructor&&s.constructor.name?s.constructor.name:d)+"` supplied to `"+r+"`, expected instance of `"+o+"`.")}var s;return null}))},node:m((function(e,t,n,r,a){return v(e[t])?null:new p("Invalid "+r+" `"+a+"` supplied to `"+n+"`, expected a ReactNode.")})),objectOf:function(e){return m((function(t,n,r,a,i){if("function"!=typeof e)return new p("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var c=t[n],l=b(c);if("object"!==l)return new p("Invalid "+a+" `"+i+"` of type `"+l+"` supplied to `"+r+"`, expected an object.");for(var u in c)if(s(c,u)){var d=e(c,u,r,a,i+"."+u,o);if(d instanceof Error)return d}return null}))},oneOf:function(e){return Array.isArray(e)?m((function(t,n,r,a,i){for(var o=t[n],s=0;s<e.length;s++)if(f(o,e[s]))return null;var c=JSON.stringify(e,(function(e,t){return"symbol"===w(t)?String(t):t}));return new p("Invalid "+a+" `"+i+"` of value `"+String(o)+"` supplied to `"+r+"`, expected one of "+c+".")})):(r(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),l)},oneOfType:function(e){if(!Array.isArray(e))return r("Invalid argument supplied to oneOfType, expected an instance of array."),l;for(var t=0;t<e.length;t++){var n=e[t];if("function"!=typeof n)return r("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+$(n)+" at index "+t+"."),l}return m((function(t,n,r,a,i){for(var c=[],l=0;l<e.length;l++){var u=(0,e[l])(t,n,r,a,i,o);if(null==u)return null;u.data&&s(u.data,"expectedType")&&c.push(u.data.expectedType)}return new p("Invalid "+a+" `"+i+"` supplied to `"+r+"`"+(c.length>0?", expected one of type ["+c.join(", ")+"]":"")+".")}))},shape:function(e){return m((function(t,n,r,a,i){var s=t[n],c=b(s);if("object"!==c)return new p("Invalid "+a+" `"+i+"` of type `"+c+"` supplied to `"+r+"`, expected `object`.");for(var l in e){var u=e[l];if("function"!=typeof u)return y(r,a,i,l,w(u));var d=u(s,l,r,a,i+"."+l,o);if(d)return d}return null}))},exact:function(e){return m((function(t,n,r,a,c){var l=t[n],u=b(l);if("object"!==u)return new p("Invalid "+a+" `"+c+"` of type `"+u+"` supplied to `"+r+"`, expected `object`.");var d=i({},t[n],e);for(var h in d){var f=e[h];if(s(e,h)&&"function"!=typeof f)return y(r,a,c,h,w(f));if(!f)return new p("Invalid "+a+" `"+c+"` key `"+h+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var m=f(l,h,r,a,c+"."+h,o);if(m)return m}return null}))}};function f(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function p(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function m(e){var n={},a=0;function i(i,s,c,l,u,h,f){if(l=l||d,h=h||c,f!==o){if(t){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}if("undefined"!=typeof console){var g=l+":"+c;!n[g]&&a<3&&(r("You are manually calling a React.PropTypes validation function for the `"+h+"` prop on `"+l+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),n[g]=!0,a++)}}return null==s[c]?i?null===s[c]?new p("The "+u+" `"+h+"` is marked as required in `"+l+"`, but its value is `null`."):new p("The "+u+" `"+h+"` is marked as required in `"+l+"`, but its value is `undefined`."):null:e(s,c,l,u,h)}var s=i.bind(null,!1);return s.isRequired=i.bind(null,!0),s}function g(e){return m((function(t,n,r,a,i,o){var s=t[n];return b(s)!==e?new p("Invalid "+a+" `"+i+"` of type `"+w(s)+"` supplied to `"+r+"`, expected `"+e+"`.",{expectedType:e}):null}))}function y(e,t,n,r,a){return new p((e||"React class")+": "+t+" type `"+n+"."+r+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+a+"`.")}function v(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(v);if(null===t||e(t))return!0;var r=function(e){var t=e&&(n&&e[n]||e[u]);if("function"==typeof t)return t}(t);if(!r)return!1;var a,i=r.call(t);if(r!==t.entries){for(;!(a=i.next()).done;)if(!v(a.value))return!1}else for(;!(a=i.next()).done;){var o=a.value;if(o&&!v(o[1]))return!1}return!0;default:return!1}}function b(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function w(e){if(null==e)return""+e;var t=b(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function $(e){var t=w(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return p.prototype=Error.prototype,h.checkPropTypes=c,h.resetWarningCache=c.resetWarningCache,h.PropTypes=h,h}},"./node_modules/prop-types/index.js":
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
  \***********************************************************/(e,t)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,n=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,a=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,o=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,c=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,u=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,f=e?Symbol.for("react.suspense_list"):60120,p=e?Symbol.for("react.memo"):60115,m=e?Symbol.for("react.lazy"):60116,g=e?Symbol.for("react.block"):60121,y=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,b=e?Symbol.for("react.scope"):60119;function w(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:var f=e.type;switch(f){case l:case u:case a:case o:case i:case h:return f;default:var g=f&&f.$$typeof;switch(g){case c:case d:case m:case p:case s:return g;default:return t}}case r:return t}}}var $=l,S=u,D=c,x=s,O=n,F=d,_=a,j=m,k=p,M=r,E=o,B=i,A=h,C=!1;function P(e){return w(e)===u}t.AsyncMode=$,t.ConcurrentMode=S,t.ContextConsumer=D,t.ContextProvider=x,t.Element=O,t.ForwardRef=F,t.Fragment=_,t.Lazy=j,t.Memo=k,t.Portal=M,t.Profiler=E,t.StrictMode=B,t.Suspense=A,t.isAsyncMode=function(e){return C||(C=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),P(e)||w(e)===l},t.isConcurrentMode=P,t.isContextConsumer=function(e){return w(e)===c},t.isContextProvider=function(e){return w(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return w(e)===d},t.isFragment=function(e){return w(e)===a},t.isLazy=function(e){return w(e)===m},t.isMemo=function(e){return w(e)===p},t.isPortal=function(e){return w(e)===r},t.isProfiler=function(e){return w(e)===o},t.isStrictMode=function(e){return w(e)===i},t.isSuspense=function(e){return w(e)===h},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===a||e===u||e===o||e===i||e===h||e===f||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===p||e.$$typeof===s||e.$$typeof===c||e.$$typeof===d||e.$$typeof===y||e.$$typeof===v||e.$$typeof===b||e.$$typeof===g)},t.typeOf=w}()},"./node_modules/react-is/index.js":
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
  \**************************************************************************************/t=>{t.exports=e}},n={};function r(e){var a=n[e];if(void 0!==a)return a.exports;var i=n[e]={exports:{}};return t[e].call(i.exports,i,i.exports,r),i.exports}return r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r("./src/index.ts")})(),C.exports=B(a);const P={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},H=e=>Object.keys(P).reduce(((t,n)=>{const r=P[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),R=H("max-width"),T=(H("min-width"),P);var I=function(e,t){return I=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},I(e,t)};var Y=function(){return Y=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},Y.apply(this,arguments)};var L="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var z=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},N="object"==typeof L&&L&&L.Object===Object&&L,W="object"==typeof self&&self&&self.Object===Object&&self,V=N||W||Function("return this")(),q=V,Q=function(){return q.Date.now()},U=/\s/;var Z=function(e){for(var t=e.length;t--&&U.test(e.charAt(t)););return t},G=/^\s+/;var X=function(e){return e?e.slice(0,Z(e)+1).replace(G,""):e},J=V.Symbol,K=J,ee=Object.prototype,te=ee.hasOwnProperty,ne=ee.toString,re=K?K.toStringTag:void 0;var ae=function(e){var t=te.call(e,re),n=e[re];try{e[re]=void 0;var r=!0}catch(e){}var a=ne.call(e);return r&&(t?e[re]=n:delete e[re]),a},ie=Object.prototype.toString;var oe=ae,se=function(e){return ie.call(e)},ce=J?J.toStringTag:void 0;var le=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":ce&&ce in Object(e)?oe(e):se(e)},ue=function(e){return null!=e&&"object"==typeof e};var de=X,he=z,fe=function(e){return"symbol"==typeof e||ue(e)&&"[object Symbol]"==le(e)},pe=/^[-+]0x[0-9a-f]+$/i,me=/^0b[01]+$/i,ge=/^0o[0-7]+$/i,ye=parseInt;var ve=z,be=Q,we=function(e){if("number"==typeof e)return e;if(fe(e))return NaN;if(he(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=he(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=de(e);var n=me.test(e);return n||ge.test(e)?ye(e.slice(2),n?2:8):pe.test(e)?NaN:+e},$e=Math.max,Se=Math.min;var De=function(e,t,n){var r,a,i,o,s,c,l=0,u=!1,d=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var n=r,i=a;return r=a=void 0,l=t,o=e.apply(i,n)}function p(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=i}function m(){var e=be();if(p(e))return g(e);s=setTimeout(m,function(e){var n=t-(e-c);return d?Se(n,i-(e-l)):n}(e))}function g(e){return s=void 0,h&&r?f(e):(r=a=void 0,o)}function y(){var e=be(),n=p(e);if(r=arguments,a=this,c=e,n){if(void 0===s)return function(e){return l=e,s=setTimeout(m,t),u?f(e):o}(c);if(d)return clearTimeout(s),s=setTimeout(m,t),f(c)}return void 0===s&&(s=setTimeout(m,t)),o}return t=we(t)||0,ve(n)&&(u=!!n.leading,i=(d="maxWait"in n)?$e(we(n.maxWait)||0,t):i,h="trailing"in n?!!n.trailing:h),y.cancel=function(){void 0!==s&&clearTimeout(s),l=0,r=c=a=s=void 0},y.flush=function(){return void 0===s?o:g(be())},y},xe=De,Oe=z;var Fe=function(e,t,n){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Oe(n)&&(r="leading"in n?!!n.leading:r,a="trailing"in n?!!n.trailing:a),xe(e,t,{leading:r,maxWait:t,trailing:a})},_e=function(e,t,n,r){switch(t){case"debounce":return De(e,n,r);case"throttle":return Fe(e,n,r);default:return e}},je=function(e){return"function"==typeof e},ke=function(){return"undefined"==typeof window},Me=function(e){return e instanceof Element||e instanceof HTMLDocument},Ee=function(e,t,n,r){return function(a){var i=a.width,o=a.height;t((function(t){return t.width===i&&t.height===o||t.width===i&&!r||t.height===o&&!n?t:(e&&je(e)&&e(i,o),{width:i,height:o})}))}};!function(e){function t(t){var n=e.call(this,t)||this;n.cancelHandler=function(){n.resizeHandler&&n.resizeHandler.cancel&&(n.resizeHandler.cancel(),n.resizeHandler=null)},n.attachObserver=function(){var e=n.props,t=e.targetRef,r=e.observerOptions;if(!ke()){t&&t.current&&(n.targetRef.current=t.current);var a=n.getElement();a&&(n.observableElement&&n.observableElement===a||(n.observableElement=a,n.resizeObserver.observe(a,r)))}},n.getElement=function(){var e=n.props,t=e.querySelector,r=e.targetDomEl;if(ke())return null;if(t)return document.querySelector(t);if(r&&Me(r))return r;if(n.targetRef&&Me(n.targetRef.current))return n.targetRef.current;var a=b(n);if(!a)return null;switch(n.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return a;default:return a.parentElement}},n.createResizeHandler=function(e){var t=n.props,r=t.handleWidth,a=void 0===r||r,i=t.handleHeight,o=void 0===i||i,s=t.onResize;if(a||o){var c=Ee(s,n.setState.bind(n),a,o);e.forEach((function(e){var t=e&&e.contentRect||{},r=t.width,a=t.height;!n.skipOnMount&&!ke()&&c({width:r,height:a}),n.skipOnMount=!1}))}},n.getRenderType=function(){var e=n.props,t=e.render,r=e.children;return je(t)?"renderProp":je(r)?"childFunction":c(r)?"child":Array.isArray(r)?"childArray":"parent"};var r=t.skipOnMount,a=t.refreshMode,i=t.refreshRate,o=void 0===i?1e3:i,s=t.refreshOptions;return n.state={width:void 0,height:void 0},n.skipOnMount=r,n.targetRef=l(),n.observableElement=null,ke()||(n.resizeHandler=_e(n.createResizeHandler,a,o,s),n.resizeObserver=new window.ResizeObserver(n.resizeHandler)),n}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}I(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){ke()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,n=t.render,a=t.children,o=t.nodeType,s=void 0===o?"div":o,c=this.state,l={width:c.width,height:c.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return n&&n(l);case"childFunction":return(e=a)(l);case"child":if((e=a).type&&"string"==typeof e.type){var u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(l,["targetRef"]);return i(e,u)}return i(e,l);case"childArray":return(e=a).map((function(e){return!!e&&i(e,l)}));default:return r.createElement(s,null)}}}(u);var Be=ke()?d:h;function Ae(e){void 0===e&&(e={});var t=e.skipOnMount,n=void 0!==t&&t,r=e.refreshMode,a=e.refreshRate,i=void 0===a?1e3:a,c=e.refreshOptions,l=e.handleWidth,u=void 0===l||l,d=e.handleHeight,h=void 0===d||d,f=e.targetRef,p=e.observerOptions,m=e.onResize,g=o(n),y=o(null),v=null!=f?f:y,b=o(),w=s({width:void 0,height:void 0}),$=w[0],S=w[1];return Be((function(){if(!ke()){var e=Ee(m,S,u,h);b.current=_e((function(t){(u||h)&&t.forEach((function(t){var n=t&&t.contentRect||{},r=n.width,a=n.height;!g.current&&!ke()&&e({width:r,height:a}),g.current=!1}))}),r,i,c);var t=new window.ResizeObserver(b.current);return v.current&&t.observe(v.current,p),function(){t.disconnect();var e=b.current;e&&e.cancel&&e.cancel()}}}),[r,i,c,u,h,m,p,v.current]),Y({ref:v},$)}let Ce=Ge();const Pe=e=>qe(e,Ce);let He=Ge();Pe.write=e=>qe(e,He);let Re=Ge();Pe.onStart=e=>qe(e,Re);let Te=Ge();Pe.onFrame=e=>qe(e,Te);let Ie=Ge();Pe.onFinish=e=>qe(e,Ie);let Ye=[];Pe.setTimeout=(e,t)=>{let n=Pe.now()+t,r=()=>{let e=Ye.findIndex((e=>e.cancel==r));~e&&Ye.splice(e,1),We-=~e?1:0},a={time:n,handler:e,cancel:r};return Ye.splice(Le(n),0,a),We+=1,Qe(),a};let Le=e=>~(~Ye.findIndex((t=>t.time>e))||~Ye.length);Pe.cancel=e=>{Re.delete(e),Te.delete(e),Ie.delete(e),Ce.delete(e),He.delete(e)},Pe.sync=e=>{Ve=!0,Pe.batchedUpdates(e),Ve=!1},Pe.throttle=e=>{let t;function n(){try{e(...t)}finally{t=null}}function r(...e){t=e,Pe.onStart(n)}return r.handler=e,r.cancel=()=>{Re.delete(n),t=null},r};let ze="undefined"!=typeof window?window.requestAnimationFrame:()=>{};Pe.use=e=>ze=e,Pe.now="undefined"!=typeof performance?()=>performance.now():Date.now,Pe.batchedUpdates=e=>e(),Pe.catch=console.error,Pe.frameLoop="always",Pe.advance=()=>{"demand"!==Pe.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):Ze()};let Ne=-1,We=0,Ve=!1;function qe(e,t){Ve?(t.delete(e),e(0)):(t.add(e),Qe())}function Qe(){Ne<0&&(Ne=0,"demand"!==Pe.frameLoop&&ze(Ue))}function Ue(){~Ne&&(ze(Ue),Pe.batchedUpdates(Ze))}function Ze(){let e=Ne;Ne=Pe.now();let t=Le(Ne);t&&(Xe(Ye.splice(0,t),(e=>e.handler())),We-=t),We?(Re.flush(),Ce.flush(e?Math.min(64,Ne-e):16.667),Te.flush(),He.flush(),Ie.flush()):Ne=-1}function Ge(){let e=new Set,t=e;return{add(n){We+=t!=e||e.has(n)?0:1,e.add(n)},delete:n=>(We-=t==e&&e.has(n)?1:0,e.delete(n)),flush(n){t.size&&(e=new Set,We-=t.size,Xe(t,(t=>t(n)&&e.add(t))),We+=e.size,t=e)}}}function Xe(e,t){e.forEach((e=>{try{t(e)}catch(e){Pe.catch(e)}}))}function Je(){}const Ke={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function et(e,t){if(Ke.arr(e)){if(!Ke.arr(t)||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}return e===t}const tt=(e,t)=>e.forEach(t);function nt(e,t,n){if(Ke.arr(e))for(let r=0;r<e.length;r++)t.call(n,e[r],`${r}`);else for(const r in e)e.hasOwnProperty(r)&&t.call(n,e[r],r)}const rt=e=>Ke.und(e)?[]:Ke.arr(e)?e:[e];function at(e,t){if(e.size){const n=Array.from(e);e.clear(),tt(n,t)}}const it=(e,...t)=>at(e,(e=>e(...t))),ot=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent);let st,ct,lt=null,ut=!1,dt=Je;var ht=Object.freeze({__proto__:null,get createStringInterpolator(){return st},get to(){return ct},get colors(){return lt},get skipAnimation(){return ut},get willAdvance(){return dt},assign:e=>{e.to&&(ct=e.to),e.now&&(Pe.now=e.now),void 0!==e.colors&&(lt=e.colors),null!=e.skipAnimation&&(ut=e.skipAnimation),e.createStringInterpolator&&(st=e.createStringInterpolator),e.requestAnimationFrame&&Pe.use(e.requestAnimationFrame),e.batchedUpdates&&(Pe.batchedUpdates=e.batchedUpdates),e.willAdvance&&(dt=e.willAdvance),e.frameLoop&&(Pe.frameLoop=e.frameLoop)}});const ft=new Set;let pt=[],mt=[],gt=0;const yt={get idle(){return!ft.size&&!pt.length},start(e){gt>e.priority?(ft.add(e),Pe.onStart(vt)):(bt(e),Pe($t))},advance:$t,sort(e){if(gt)Pe.onFrame((()=>yt.sort(e)));else{const t=pt.indexOf(e);~t&&(pt.splice(t,1),wt(e))}},clear(){pt=[],ft.clear()}};function vt(){ft.forEach(bt),ft.clear(),Pe($t)}function bt(e){pt.includes(e)||wt(e)}function wt(e){pt.splice(function(e,t){const n=e.findIndex(t);return n<0?e.length:n}(pt,(t=>t.priority>e.priority)),0,e)}function $t(e){const t=mt;for(let n=0;n<pt.length;n++){const r=pt[n];gt=r.priority,r.idle||(dt(r),r.advance(e),r.idle||t.push(r))}return gt=0,mt=pt,mt.length=0,pt=t,pt.length>0}const St="[-+]?\\d*\\.?\\d+",Dt=St+"%";function xt(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}const Ot=new RegExp("rgb"+xt(St,St,St)),Ft=new RegExp("rgba"+xt(St,St,St,St)),_t=new RegExp("hsl"+xt(St,Dt,Dt)),jt=new RegExp("hsla"+xt(St,Dt,Dt,St)),kt=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Mt=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Et=/^#([0-9a-fA-F]{6})$/,Bt=/^#([0-9a-fA-F]{8})$/;function At(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Ct(e,t,n){const r=n<.5?n*(1+t):n+t-n*t,a=2*n-r,i=At(a,r,e+1/3),o=At(a,r,e),s=At(a,r,e-1/3);return Math.round(255*i)<<24|Math.round(255*o)<<16|Math.round(255*s)<<8}function Pt(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function Ht(e){return(parseFloat(e)%360+360)%360/360}function Rt(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function Tt(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function It(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=Et.exec(e))?parseInt(t[1]+"ff",16)>>>0:lt&&void 0!==lt[e]?lt[e]:(t=Ot.exec(e))?(Pt(t[1])<<24|Pt(t[2])<<16|Pt(t[3])<<8|255)>>>0:(t=Ft.exec(e))?(Pt(t[1])<<24|Pt(t[2])<<16|Pt(t[3])<<8|Rt(t[4]))>>>0:(t=kt.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=Bt.exec(e))?parseInt(t[1],16)>>>0:(t=Mt.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=_t.exec(e))?(255|Ct(Ht(t[1]),Tt(t[2]),Tt(t[3])))>>>0:(t=jt.exec(e))?(Ct(Ht(t[1]),Tt(t[2]),Tt(t[3]))|Rt(t[4]))>>>0:null}(e);return null===t?e:(t=t||0,`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)}const Yt=(e,t,n)=>{if(Ke.fun(e))return e;if(Ke.arr(e))return Yt({range:e,output:t,extrapolate:n});if(Ke.str(e.output[0]))return st(e);const r=e,a=r.output,i=r.range||[0,1],o=r.extrapolateLeft||r.extrapolate||"extend",s=r.extrapolateRight||r.extrapolate||"extend",c=r.easing||(e=>e);return e=>{const t=function(e,t){for(var n=1;n<t.length-1&&!(t[n]>=e);++n);return n-1}(e,i);return function(e,t,n,r,a,i,o,s,c){let l=c?c(e):e;if(l<t){if("identity"===o)return l;"clamp"===o&&(l=t)}if(l>n){if("identity"===s)return l;"clamp"===s&&(l=n)}if(r===a)return r;if(t===n)return e<=t?r:a;t===-1/0?l=-l:n===1/0?l-=t:l=(l-t)/(n-t);l=i(l),r===-1/0?l=-l:a===1/0?l+=r:l=l*(a-r)+r;return l}(e,i[t],i[t+1],a[t],a[t+1],c,o,s,r.map)}};const Lt=1.70158,zt=1.525*Lt,Nt=Lt+1,Wt=2*Math.PI/3,Vt=2*Math.PI/4.5,qt=e=>{const t=7.5625,n=2.75;return e<1/n?t*e*e:e<2/n?t*(e-=1.5/n)*e+.75:e<2.5/n?t*(e-=2.25/n)*e+.9375:t*(e-=2.625/n)*e+.984375},Qt={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>Nt*e*e*e-Lt*e*e,easeOutBack:e=>1+Nt*Math.pow(e-1,3)+Lt*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-zt)/2:(Math.pow(2*e-2,2)*((zt+1)*(2*e-2)+zt)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*Wt),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*Wt)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*Vt)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*Vt)/2+1,easeInBounce:e=>1-qt(1-e),easeOutBounce:qt,easeInOutBounce:e=>e<.5?(1-qt(1-2*e))/2:(1+qt(2*e-1))/2,steps:(e,t="end")=>n=>{const r=(n="end"===t?Math.min(n,.999):Math.max(n,.001))*e,a="end"===t?Math.floor(r):Math.ceil(r);return i=0,o=1,s=a/e,Math.min(Math.max(s,i),o);var i,o,s}};function Ut(){return Ut=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ut.apply(this,arguments)}const Zt=Symbol.for("FluidValue.get"),Gt=Symbol.for("FluidValue.observers"),Xt=e=>Boolean(e&&e[Zt]),Jt=e=>e&&e[Zt]?e[Zt]():e,Kt=e=>e[Gt]||null;function en(e,t){let n=e[Gt];n&&n.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}class tn{constructor(e){if(this[Zt]=void 0,this[Gt]=void 0,!e&&!(e=this.get))throw Error("Unknown getter");nn(this,e)}}const nn=(e,t)=>on(e,Zt,t);function rn(e,t){if(e[Zt]){let n=e[Gt];n||on(e,Gt,n=new Set),n.has(t)||(n.add(t),e.observerAdded&&e.observerAdded(n.size,t))}return t}function an(e,t){let n=e[Gt];if(n&&n.has(t)){const r=n.size-1;r?n.delete(t):e[Gt]=null,e.observerRemoved&&e.observerRemoved(r,t)}}const on=(e,t,n)=>Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0}),sn=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,cn=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,ln=new RegExp(`(${sn.source})(%|[a-z]+)`,"i"),un=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,dn=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,hn=e=>{const[t,n]=fn(e);if(!t||ot())return e;const r=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(r)return r.trim();if(n&&n.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(n);return t||e}return n&&dn.test(n)?hn(n):n||e},fn=e=>{const t=dn.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]};let pn;const mn=(e,t,n,r,a)=>`rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${a})`,gn=e=>{pn||(pn=lt?new RegExp(`(${Object.keys(lt).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>Jt(e).replace(dn,hn).replace(cn,It).replace(pn,It))),n=t.map((e=>e.match(sn).map(Number))),r=n[0].map(((e,t)=>n.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>Yt(Ut({},e,{output:t}))));return e=>{var n;const a=!ln.test(t[0])&&(null==(n=t.find((e=>ln.test(e))))?void 0:n.replace(sn,""));let i=0;return t[0].replace(sn,(()=>`${r[i++](e)}${a||""}`)).replace(un,mn)}},yn="react-spring: ",vn=e=>{const t=e;let n=!1;if("function"!=typeof t)throw new TypeError(`${yn}once requires a function parameter`);return(...e)=>{n||(t(...e),n=!0)}},bn=vn(console.warn);const wn=vn(console.warn);function $n(e){return Ke.str(e)&&("#"==e[0]||/\d/.test(e)||!ot()&&dn.test(e)||e in(lt||{}))}const Sn=ot()?d:h,Dn=()=>{const e=o(!1);return Sn((()=>(e.current=!0,()=>{e.current=!1})),[]),e};function xn(){const e=s()[1],t=Dn();return()=>{t.current&&e(Math.random())}}const On=e=>d(e,Fn),Fn=[];function _n(e){const t=o();return d((()=>{t.current=e})),t.current}const jn=Symbol.for("Animated:node"),kn=e=>e&&e[jn],Mn=(e,t)=>{return n=e,r=jn,a=t,Object.defineProperty(n,r,{value:a,writable:!0,configurable:!0});var n,r,a},En=e=>e&&e[jn]&&e[jn].getPayload();class Bn{constructor(){this.payload=void 0,Mn(this,this)}getPayload(){return this.payload||[]}}class An extends Bn{constructor(e){super(),this.done=!0,this.elapsedTime=void 0,this.lastPosition=void 0,this.lastVelocity=void 0,this.v0=void 0,this.durationProgress=0,this._value=e,Ke.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new An(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return Ke.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,Ke.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}}class Cn extends An{constructor(e){super(0),this._string=null,this._toString=void 0,this._toString=Yt({output:[e,e]})}static create(e){return new Cn(e)}getValue(){let e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(Ke.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=Yt({output:[this.getValue(),e]})),this._value=0,super.reset()}}const Pn={dependencies:null};class Hn extends Bn{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return nt(this.source,((n,r)=>{var a;(a=n)&&a[jn]===a?t[r]=n.getValue(e):Xt(n)?t[r]=Jt(n):e||(t[r]=n)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&tt(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return nt(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){Pn.dependencies&&Xt(e)&&Pn.dependencies.add(e);const t=En(e);t&&tt(t,(e=>this.add(e)))}}class Rn extends Hn{constructor(e){super(e)}static create(e){return new Rn(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,n)=>t.setValue(e[n]))).some(Boolean):(super.setValue(e.map(Tn)),!0)}}function Tn(e){return($n(e)?Cn:An).create(e)}function In(e){const t=kn(e);return t?t.constructor:Ke.arr(e)?Rn:$n(e)?Cn:An}function Yn(){return Yn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Yn.apply(this,arguments)}const Ln=(e,t)=>{const n=!Ke.fun(e)||e.prototype&&e.prototype.isReactComponent;return f(((a,i)=>{const s=o(null),c=n&&p((e=>{s.current=function(e,t){e&&(Ke.fun(e)?e(t):e.current=t);return t}(i,e)}),[i]),[l,u]=function(e,t){const n=new Set;Pn.dependencies=n,e.style&&(e=Yn({},e,{style:t.createAnimatedStyle(e.style)}));return e=new Hn(e),Pn.dependencies=null,[e,n]}(a,t),h=xn(),f=()=>{const e=s.current;if(n&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,l.getValue(!0)))&&h()},m=new zn(f,u),g=o();Sn((()=>(g.current=m,tt(u,(e=>rn(e,m))),()=>{g.current&&(tt(g.current.deps,(e=>an(e,g.current))),Pe.cancel(g.current.update))}))),d(f,[]),On((()=>()=>{const e=g.current;tt(e.deps,(t=>an(t,e)))}));const y=t.getComponentProps(l.getValue());return r.createElement(e,Yn({},y,{ref:c}))}))};class zn{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&Pe.write(this.update)}}const Nn=Symbol.for("AnimatedComponent"),Wn=e=>Ke.str(e)?e:e&&Ke.str(e.displayName)?e.displayName:Ke.fun(e)&&e.name||null;function Vn(){return Vn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Vn.apply(this,arguments)}function qn(e,...t){return Ke.fun(e)?e(...t):e}const Qn=(e,t)=>!0===e||!!(t&&e&&(Ke.fun(e)?e(t):rt(e).includes(t))),Un=(e,t)=>Ke.obj(e)?t&&e[t]:e,Zn=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,Gn=e=>e,Xn=(e,t=Gn)=>{let n=Jn;e.default&&!0!==e.default&&(e=e.default,n=Object.keys(e));const r={};for(const a of n){const n=t(e[a],a);Ke.und(n)||(r[a]=n)}return r},Jn=["config","onProps","onStart","onChange","onPause","onResume","onRest"],Kn={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function er(e){const t=function(e){const t={};let n=0;if(nt(e,((e,r)=>{Kn[r]||(t[r]=e,n++)})),n)return t}(e);if(t){const n={to:t};return nt(e,((e,r)=>r in t||(n[r]=e))),n}return Vn({},e)}function tr(e){return e=Jt(e),Ke.arr(e)?e.map(tr):$n(e)?ht.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function nr(e){return Ke.fun(e)||Ke.arr(e)&&Ke.obj(e[0])}const rr=Vn({},{tension:170,friction:26},{mass:1,damping:1,easing:Qt.linear,clamp:!1});class ar{constructor(){this.tension=void 0,this.friction=void 0,this.frequency=void 0,this.damping=void 0,this.mass=void 0,this.velocity=0,this.restVelocity=void 0,this.precision=void 0,this.progress=void 0,this.duration=void 0,this.easing=void 0,this.clamp=void 0,this.bounce=void 0,this.decay=void 0,this.round=void 0,Object.assign(this,rr)}}function ir(e,t){if(Ke.und(t.decay)){const n=!Ke.und(t.tension)||!Ke.und(t.friction);!n&&Ke.und(t.frequency)&&Ke.und(t.damping)&&Ke.und(t.mass)||(e.duration=void 0,e.decay=void 0),n&&(e.frequency=void 0)}else e.duration=void 0}const or=[];class sr{constructor(){this.changed=!1,this.values=or,this.toValues=null,this.fromValues=or,this.to=void 0,this.from=void 0,this.config=new ar,this.immediate=!1}}function cr(e,{key:t,props:n,defaultProps:r,state:a,actions:i}){return new Promise(((o,s)=>{var c;let l,u,d=Qn(null!=(c=n.cancel)?c:null==r?void 0:r.cancel,t);if(d)p();else{Ke.und(n.pause)||(a.paused=Qn(n.pause,t));let e=null==r?void 0:r.pause;!0!==e&&(e=a.paused||Qn(e,t)),l=qn(n.delay||0,t),e?(a.resumeQueue.add(f),i.pause()):(i.resume(),f())}function h(){a.resumeQueue.add(f),a.timeouts.delete(u),u.cancel(),l=u.time-Pe.now()}function f(){l>0&&!ht.skipAnimation?(a.delayed=!0,u=Pe.setTimeout(p,l),a.pauseQueue.add(h),a.timeouts.add(u)):p()}function p(){a.delayed&&(a.delayed=!1),a.pauseQueue.delete(h),a.timeouts.delete(u),e<=(a.cancelId||0)&&(d=!0);try{i.start(Vn({},n,{callId:e,cancel:d}),o)}catch(e){s(e)}}}))}const lr=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?hr(e.get()):t.every((e=>e.noop))?ur(e.get()):dr(e.get(),t.every((e=>e.finished))),ur=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),dr=(e,t,n=!1)=>({value:e,finished:t,cancelled:n}),hr=e=>({value:e,cancelled:!0,finished:!1});function fr(e,t,n,r){const{callId:a,parentId:i,onRest:o}=t,{asyncTo:s,promise:c}=n;return i||e!==s||t.reset?n.promise=(async()=>{n.asyncId=a,n.asyncTo=e;const l=Xn(t,((e,t)=>"onRest"===t?void 0:e));let u,d;const h=new Promise(((e,t)=>(u=e,d=t))),f=e=>{const t=a<=(n.cancelId||0)&&hr(r)||a!==n.asyncId&&dr(r,!1);if(t)throw e.result=t,d(e),e},p=(e,t)=>{const i=new mr,o=new gr;return(async()=>{if(ht.skipAnimation)throw pr(n),o.result=dr(r,!1),d(o),o;f(i);const s=Ke.obj(e)?Vn({},e):Vn({},t,{to:e});s.parentId=a,nt(l,((e,t)=>{Ke.und(s[t])&&(s[t]=e)}));const c=await r.start(s);return f(i),n.paused&&await new Promise((e=>{n.resumeQueue.add(e)})),c})()};let m;if(ht.skipAnimation)return pr(n),dr(r,!1);try{let t;t=Ke.arr(e)?(async e=>{for(const t of e)await p(t)})(e):Promise.resolve(e(p,r.stop.bind(r))),await Promise.all([t.then(u),h]),m=dr(r.get(),!0,!1)}catch(e){if(e instanceof mr)m=e.result;else{if(!(e instanceof gr))throw e;m=e.result}}finally{a==n.asyncId&&(n.asyncId=i,n.asyncTo=i?s:void 0,n.promise=i?c:void 0)}return Ke.fun(o)&&Pe.batchedUpdates((()=>{o(m,r,r.item)})),m})():c}function pr(e,t){at(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}class mr extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."),this.result=void 0}}class gr extends Error{constructor(){super("SkipAnimationSignal"),this.result=void 0}}const yr=e=>e instanceof br;let vr=1;class br extends tn{constructor(...e){super(...e),this.id=vr++,this.key=void 0,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=kn(this);return e&&e.getValue()}to(...e){return ht.to(this,e)}interpolate(...e){return bn(`${yn}The "interpolate" function is deprecated in v9 (use "to" instead)`),ht.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){en(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||yt.sort(this),en(this,{type:"priority",parent:this,priority:e})}}const wr=Symbol.for("SpringPhase"),$r=e=>(1&e[wr])>0,Sr=e=>(2&e[wr])>0,Dr=e=>(4&e[wr])>0,xr=(e,t)=>t?e[wr]|=3:e[wr]&=-3,Or=(e,t)=>t?e[wr]|=4:e[wr]&=-5;class Fr extends br{constructor(e,t){if(super(),this.key=void 0,this.animation=new sr,this.queue=void 0,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!Ke.und(e)||!Ke.und(t)){const n=Ke.obj(e)?Vn({},e):Vn({},t,{from:e});Ke.und(n.default)&&(n.default=!0),this.start(n)}}get idle(){return!(Sr(this)||this._state.asyncTo)||Dr(this)}get goal(){return Jt(this.animation.to)}get velocity(){const e=kn(this);return e instanceof An?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return $r(this)}get isAnimating(){return Sr(this)}get isPaused(){return Dr(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,n=!1;const r=this.animation;let{config:a,toValues:i}=r;const o=En(r.to);!o&&Xt(r.to)&&(i=rt(Jt(r.to))),r.values.forEach(((s,c)=>{if(s.done)return;const l=s.constructor==Cn?1:o?o[c].lastPosition:i[c];let u=r.immediate,d=l;if(!u){if(d=s.lastPosition,a.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const n=r.fromValues[c],i=null!=s.v0?s.v0:s.v0=Ke.arr(a.velocity)?a.velocity[c]:a.velocity;let o;const h=a.precision||(n==l?.005:Math.min(1,.001*Math.abs(l-n)));if(Ke.und(a.duration))if(a.decay){const e=!0===a.decay?.998:a.decay,r=Math.exp(-(1-e)*t);d=n+i/(1-e)*(1-r),u=Math.abs(s.lastPosition-d)<=h,o=i*r}else{o=null==s.lastVelocity?i:s.lastVelocity;const t=a.restVelocity||h/10,r=a.clamp?0:a.bounce,c=!Ke.und(r),f=n==l?s.v0>0:n<l;let p,m=!1;const g=1,y=Math.ceil(e/g);for(let e=0;e<y&&(p=Math.abs(o)>t,p||(u=Math.abs(l-d)<=h,!u));++e){c&&(m=d==l||d>l==f,m&&(o=-o*r,d=l));o+=(1e-6*-a.tension*(d-l)+.001*-a.friction*o)/a.mass*g,d+=o*g}}else{let r=1;a.duration>0&&(this._memoizedDuration!==a.duration&&(this._memoizedDuration=a.duration,s.durationProgress>0&&(s.elapsedTime=a.duration*s.durationProgress,t=s.elapsedTime+=e)),r=(a.progress||0)+t/this._memoizedDuration,r=r>1?1:r<0?0:r,s.durationProgress=r),d=n+a.easing(r)*(l-n),o=(d-s.lastPosition)/e,u=1==r}s.lastVelocity=o,Number.isNaN(d)&&(console.warn("Got NaN while animating:",this),u=!0)}o&&!o[c].done&&(u=!1),u?s.done=!0:t=!1,s.setValue(d,a.round)&&(n=!0)}));const s=kn(this),c=s.getValue();if(t){const e=Jt(r.to);c===e&&!n||a.decay?n&&a.decay&&this._onChange(c):(s.setValue(e),this._onChange(e)),this._stop()}else n&&this._onChange(c)}set(e){return Pe.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(Sr(this)){const{to:e,config:t}=this.animation;Pe.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let n;return Ke.und(e)?(n=this.queue||[],this.queue=[]):n=[Ke.obj(e)?e:Vn({},t,{to:e})],Promise.all(n.map((e=>this._update(e)))).then((e=>lr(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),pr(this._state,e&&this._lastCallId),Pe.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:n,from:r}=e;n=Ke.obj(n)?n[t]:n,(null==n||nr(n))&&(n=void 0),r=Ke.obj(r)?r[t]:r,null==r&&(r=void 0);const a={to:n,from:r};return $r(this)||(e.reverse&&([n,r]=[r,n]),r=Jt(r),Ke.und(r)?kn(this)||this._set(n):this._set(r)),a}_update(e,t){let n=Vn({},e);const{key:r,defaultProps:a}=this;n.default&&Object.assign(a,Xn(n,((e,t)=>/^on/.test(t)?Un(e,r):e))),Ar(this,n,"onProps"),Cr(this,"onProps",n,this);const i=this._prepareNode(n);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const o=this._state;return cr(++this._lastCallId,{key:r,props:n,defaultProps:a,state:o,actions:{pause:()=>{Dr(this)||(Or(this,!0),it(o.pauseQueue),Cr(this,"onPause",dr(this,_r(this,this.animation.to)),this))},resume:()=>{Dr(this)&&(Or(this,!1),Sr(this)&&this._resume(),it(o.resumeQueue),Cr(this,"onResume",dr(this,_r(this,this.animation.to)),this))},start:this._merge.bind(this,i)}}).then((e=>{if(n.loop&&e.finished&&(!t||!e.noop)){const e=jr(n);if(e)return this._update(e,!0)}return e}))}_merge(e,t,n){if(t.cancel)return this.stop(!0),n(hr(this));const r=!Ke.und(e.to),a=!Ke.und(e.from);if(r||a){if(!(t.callId>this._lastToId))return n(hr(this));this._lastToId=t.callId}const{key:i,defaultProps:o,animation:s}=this,{to:c,from:l}=s;let{to:u=c,from:d=l}=e;!a||r||t.default&&!Ke.und(u)||(u=d),t.reverse&&([u,d]=[d,u]);const h=!et(d,l);h&&(s.from=d),d=Jt(d);const f=!et(u,c);f&&this._focus(u);const p=nr(t.to),{config:m}=s,{decay:g,velocity:y}=m;(r||a)&&(m.velocity=0),t.config&&!p&&function(e,t,n){n&&(ir(n=Vn({},n),t),t=Vn({},n,t)),ir(e,t),Object.assign(e,t);for(const t in rr)null==e[t]&&(e[t]=rr[t]);let{mass:r,frequency:a,damping:i}=e;Ke.und(a)||(a<.01&&(a=.01),i<0&&(i=0),e.tension=Math.pow(2*Math.PI/a,2)*r,e.friction=4*Math.PI*i*r/a)}(m,qn(t.config,i),t.config!==o.config?qn(o.config,i):void 0);let v=kn(this);if(!v||Ke.und(u))return n(dr(this,!0));const b=Ke.und(t.reset)?a&&!t.default:!Ke.und(d)&&Qn(t.reset,i),w=b?d:this.get(),$=tr(u),S=Ke.num($)||Ke.arr($)||$n($),D=!p&&(!S||Qn(o.immediate||t.immediate,i));if(f){const e=In(u);if(e!==v.constructor){if(!D)throw Error(`Cannot animate between ${v.constructor.name} and ${e.name}, as the "to" prop suggests`);v=this._set($)}}const x=v.constructor;let O=Xt(u),F=!1;if(!O){const e=b||!$r(this)&&h;(f||e)&&(F=et(tr(w),$),O=!F),(et(s.immediate,D)||D)&&et(m.decay,g)&&et(m.velocity,y)||(O=!0)}if(F&&Sr(this)&&(s.changed&&!b?O=!0:O||this._stop(c)),!p&&((O||Xt(c))&&(s.values=v.getPayload(),s.toValues=Xt(u)?null:x==Cn?[1]:rt($)),s.immediate!=D&&(s.immediate=D,D||b||this._set(c)),O)){const{onRest:e}=s;tt(Br,(e=>Ar(this,t,e)));const r=dr(this,_r(this,c));it(this._pendingCalls,r),this._pendingCalls.add(n),s.changed&&Pe.batchedUpdates((()=>{s.changed=!b,null==e||e(r,this),b?qn(o.onRest,r):null==s.onStart||s.onStart(r,this)}))}b&&this._set(w),p?n(fr(t.to,t,this._state,this)):O?this._start():Sr(this)&&!f?this._pendingCalls.add(n):n(ur(w))}_focus(e){const t=this.animation;e!==t.to&&(Kt(this)&&this._detach(),t.to=e,Kt(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;Xt(t)&&(rn(t,this),yr(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;Xt(e)&&an(e,this)}_set(e,t=!0){const n=Jt(e);if(!Ke.und(n)){const e=kn(this);if(!e||!et(n,e.getValue())){const r=In(n);e&&e.constructor==r?e.setValue(n):Mn(this,r.create(n)),e&&Pe.batchedUpdates((()=>{this._onChange(n,t)}))}}return kn(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,Cr(this,"onStart",dr(this,_r(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),qn(this.animation.onChange,e,this)),qn(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;kn(this).reset(Jt(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),Sr(this)||(xr(this,!0),Dr(this)||this._resume())}_resume(){ht.skipAnimation?this.finish():yt.start(this)}_stop(e,t){if(Sr(this)){xr(this,!1);const n=this.animation;tt(n.values,(e=>{e.done=!0})),n.toValues&&(n.onChange=n.onPause=n.onResume=void 0),en(this,{type:"idle",parent:this});const r=t?hr(this.get()):dr(this.get(),_r(this,null!=e?e:n.to));it(this._pendingCalls,r),n.changed&&(n.changed=!1,Cr(this,"onRest",r,this))}}}function _r(e,t){const n=tr(t);return et(tr(e.get()),n)}function jr(e,t=e.loop,n=e.to){let r=qn(t);if(r){const a=!0!==r&&er(r),i=(a||e).reverse,o=!a||a.reset;return kr(Vn({},e,{loop:t,default:!1,pause:void 0,to:!i||nr(n)?n:void 0,from:o?e.from:void 0,reset:o},a))}}function kr(e){const{to:t,from:n}=e=er(e),r=new Set;return Ke.obj(t)&&Er(t,r),Ke.obj(n)&&Er(n,r),e.keys=r.size?Array.from(r):null,e}function Mr(e){const t=kr(e);return Ke.und(t.default)&&(t.default=Xn(t)),t}function Er(e,t){nt(e,((e,n)=>null!=e&&t.add(n)))}const Br=["onStart","onRest","onChange","onPause","onResume"];function Ar(e,t,n){e.animation[n]=t[n]!==Zn(t,n)?Un(t[n],e.key):void 0}function Cr(e,t,...n){var r,a,i,o;null==(r=(a=e.animation)[t])||r.call(a,...n),null==(i=(o=e.defaultProps)[t])||i.call(o,...n)}const Pr=["onStart","onChange","onRest"];let Hr=1;class Rr{constructor(e,t){this.id=Hr++,this.springs={},this.queue=[],this.ref=void 0,this._flush=void 0,this._initialProps=void 0,this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._item=void 0,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start(Vn({default:!0},e))}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,n)=>e[n]=t.get())),e}set(e){for(const t in e){const n=e[t];Ke.und(n)||this.springs[t].set(n)}}update(e){return e&&this.queue.push(kr(e)),this}start(e){let{queue:t}=this;return e?t=rt(e).map(kr):this.queue=[],this._flush?this._flush(this,t):(Wr(this,t),Tr(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const n=this.springs;tt(rt(t),(t=>n[t].stop(!!e)))}else pr(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(Ke.und(e))this.start({pause:!0});else{const t=this.springs;tt(rt(e),(e=>t[e].pause()))}return this}resume(e){if(Ke.und(e))this.start({pause:!1});else{const t=this.springs;tt(rt(e),(e=>t[e].resume()))}return this}each(e){nt(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:n}=this._events,r=this._active.size>0,a=this._changed.size>0;(r&&!this._started||a&&!this._started)&&(this._started=!0,at(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const i=!r&&this._started,o=a||i&&n.size?this.get():null;a&&t.size&&at(t,(([e,t])=>{t.value=o,e(t,this,this._item)})),i&&(this._started=!1,at(n,(([e,t])=>{t.value=o,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}Pe.onFrame(this._onFrame)}}function Tr(e,t){return Promise.all(t.map((t=>Ir(e,t)))).then((t=>lr(e,t)))}async function Ir(e,t,n){const{keys:r,to:a,from:i,loop:o,onRest:s,onResolve:c}=t,l=Ke.obj(t.default)&&t.default;o&&(t.loop=!1),!1===a&&(t.to=null),!1===i&&(t.from=null);const u=Ke.arr(a)||Ke.fun(a)?a:void 0;u?(t.to=void 0,t.onRest=void 0,l&&(l.onRest=void 0)):tt(Pr,(n=>{const r=t[n];if(Ke.fun(r)){const a=e._events[n];t[n]=({finished:e,cancelled:t})=>{const n=a.get(r);n?(e||(n.finished=!1),t&&(n.cancelled=!0)):a.set(r,{value:null,finished:e||!1,cancelled:t||!1})},l&&(l[n]=t[n])}}));const d=e._state;t.pause===!d.paused?(d.paused=t.pause,it(t.pause?d.pauseQueue:d.resumeQueue)):d.paused&&(t.pause=!0);const h=(r||Object.keys(e.springs)).map((n=>e.springs[n].start(t))),f=!0===t.cancel||!0===Zn(t,"cancel");(u||f&&d.asyncId)&&h.push(cr(++e._lastAsyncId,{props:t,state:d,actions:{pause:Je,resume:Je,start(t,n){f?(pr(d,e._lastAsyncId),n(hr(e))):(t.onRest=s,n(fr(u,t,d,e)))}}})),d.paused&&await new Promise((e=>{d.resumeQueue.add(e)}));const p=lr(e,await Promise.all(h));if(o&&p.finished&&(!n||!p.noop)){const n=jr(t,o,a);if(n)return Wr(e,[n]),Ir(e,n,!0)}return c&&Pe.batchedUpdates((()=>c(p,e,e.item))),p}function Yr(e,t){const n=Vn({},e.springs);return t&&tt(rt(t),(e=>{Ke.und(e.keys)&&(e=kr(e)),Ke.obj(e.to)||(e=Vn({},e,{to:void 0})),Nr(n,e,(e=>zr(e)))})),Lr(e,n),n}function Lr(e,t){nt(t,((t,n)=>{e.springs[n]||(e.springs[n]=t,rn(t,e))}))}function zr(e,t){const n=new Fr;return n.key=e,t&&rn(n,t),n}function Nr(e,t,n){t.keys&&tt(t.keys,(r=>{(e[r]||(e[r]=n(r)))._prepareNode(t)}))}function Wr(e,t){tt(t,(t=>{Nr(e.springs,t,(t=>zr(t,e)))}))}const Vr=["children"],qr=e=>{let{children:t}=e,n=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,Vr);const a=m(Qr),i=n.pause||!!a.pause,c=n.immediate||!!a.immediate;n=function(e,t){const[n]=s((()=>({inputs:t,result:e()}))),r=o(),a=r.current;let i=a;i?Boolean(t&&i.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}(t,i.inputs))||(i={inputs:t,result:e()}):i=n;return d((()=>{r.current=i,a==n&&(n.inputs=n.result=void 0)}),[i]),i.result}((()=>({pause:i,immediate:c})),[i,c]);const{Provider:l}=Qr;return r.createElement(l,{value:n},t)},Qr=(Ur=qr,Zr={},Object.assign(Ur,r.createContext(Zr)),Ur.Provider._context=Ur,Ur.Consumer._context=Ur,Ur);var Ur,Zr;qr.Provider=Qr.Provider,qr.Consumer=Qr.Consumer;const Gr=()=>{const e=[],t=function(t){wn(`${yn}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const r=[];return tt(e,((e,a)=>{if(Ke.und(t))r.push(e.start());else{const i=n(t,e,a);i&&r.push(e.start(i))}})),r};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const n=e.indexOf(t);~n&&e.splice(n,1)},t.pause=function(){return tt(e,(e=>e.pause(...arguments))),this},t.resume=function(){return tt(e,(e=>e.resume(...arguments))),this},t.set=function(t){tt(e,(e=>e.set(t)))},t.start=function(t){const n=[];return tt(e,((e,r)=>{if(Ke.und(t))n.push(e.start());else{const a=this._getProps(t,e,r);a&&n.push(e.start(a))}})),n},t.stop=function(){return tt(e,(e=>e.stop(...arguments))),this},t.update=function(t){return tt(e,((e,n)=>e.update(this._getProps(t,e,n)))),this};const n=function(e,t,n){return Ke.fun(e)?e(n,t):e};return t._getProps=n,t};function Xr(e,t){const n=Ke.fun(e),[[r],a]=function(e,t,n){const r=Ke.fun(t)&&t;r&&!n&&(n=[]);const a=g((()=>r||3==arguments.length?Gr():void 0),[]),i=o(0),s=xn(),c=g((()=>({ctrls:[],queue:[],flush(e,t){const n=Yr(e,t);return i.current>0&&!c.queue.length&&!Object.keys(n).some((t=>!e.springs[t]))?Tr(e,t):new Promise((r=>{Lr(e,n),c.queue.push((()=>{r(Tr(e,t))})),s()}))}})),[]),l=o([...c.ctrls]),u=[],d=_n(e)||0;function h(e,n){for(let a=e;a<n;a++){const e=l.current[a]||(l.current[a]=new Rr(null,c.flush)),n=r?r(a,e):t[a];n&&(u[a]=Mr(n))}}g((()=>{tt(l.current.slice(e,d),(e=>{!function(e,t){var n;null==(n=e.ref)||n.delete(e),null==t||t.delete(e)}(e,a),e.stop(!0)})),l.current.length=e,h(d,e)}),[e]),g((()=>{h(0,Math.min(d,e))}),n);const f=l.current.map(((e,t)=>Yr(e,u[t]))),p=m(qr),y=_n(p),v=p!==y&&function(e){for(const t in e)return!0;return!1}(p);Sn((()=>{i.current++,c.ctrls=l.current;const{queue:e}=c;e.length&&(c.queue=[],tt(e,(e=>e()))),tt(l.current,((e,t)=>{null==a||a.add(e),v&&e.start({default:p});const n=u[t];n&&(function(e,t){var n;t&&e.ref!==t&&(null==(n=e.ref)||n.delete(e),t.add(e),e.ref=t)}(e,n.ref),e.ref?e.queue.push(n):e.start(n))}))})),On((()=>()=>{tt(c.ctrls,(e=>e.stop(!0)))}));const b=f.map((e=>Vn({},e)));return a?[b,a]:b}(1,n?e:[e],n?t||[]:t);return n||2==arguments.length?[r,a]:r}let Jr;!function(e){e.MOUNT="mount",e.ENTER="enter",e.UPDATE="update",e.LEAVE="leave"}(Jr||(Jr={}));class Kr extends br{constructor(e,t){super(),this.key=void 0,this.idle=!0,this.calc=void 0,this._active=new Set,this.source=e,this.calc=Yt(...t);const n=this._get(),r=In(n);Mn(this,r.create(n))}advance(e){const t=this._get();et(t,this.get())||(kn(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&ta(this._active)&&na(this)}_get(){const e=Ke.arr(this.source)?this.source.map(Jt):rt(Jt(this.source));return this.calc(...e)}_start(){this.idle&&!ta(this._active)&&(this.idle=!1,tt(En(this),(e=>{e.done=!1})),ht.skipAnimation?(Pe.batchedUpdates((()=>this.advance())),na(this)):yt.start(this))}_attach(){let e=1;tt(rt(this.source),(t=>{Xt(t)&&rn(t,this),yr(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){tt(rt(this.source),(e=>{Xt(e)&&an(e,this)})),this._active.clear(),na(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=rt(this.source).reduce(((e,t)=>Math.max(e,(yr(t)?t.priority:0)+1)),0))}}function ea(e){return!1!==e.idle}function ta(e){return!e.size||Array.from(e).every(ea)}function na(e){e.idle||(e.idle=!0,tt(En(e),(e=>{e.done=!0})),en(e,{type:"idle",parent:e}))}function ra(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}ht.assign({createStringInterpolator:gn,to:(e,t)=>new Kr(e,t)});const aa=["style","children","scrollTop","scrollLeft","viewBox"],ia=/^--/;function oa(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||ia.test(e)||ca.hasOwnProperty(e)&&ca[e]?(""+t).trim():t+"px"}const sa={};let ca={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0};const la=["Webkit","Ms","Moz","O"];ca=Object.keys(ca).reduce(((e,t)=>(la.forEach((n=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(n,t)]=e[t])),e)),ca);const ua=["x","y","z"],da=/^(matrix|translate|scale|rotate|skew)/,ha=/^(translate)/,fa=/^(rotate|skew)/,pa=(e,t)=>Ke.num(e)&&0!==e?e+t:e,ma=(e,t)=>Ke.arr(e)?e.every((e=>ma(e,t))):Ke.num(e)?e===t:parseFloat(e)===t;class ga extends Hn{constructor(e){let{x:t,y:n,z:r}=e,a=ra(e,ua);const i=[],o=[];(t||n||r)&&(i.push([t||0,n||0,r||0]),o.push((e=>[`translate3d(${e.map((e=>pa(e,"px"))).join(",")})`,ma(e,0)]))),nt(a,((e,t)=>{if("transform"===t)i.push([e||""]),o.push((e=>[e,""===e]));else if(da.test(t)){if(delete a[t],Ke.und(e))return;const n=ha.test(t)?"px":fa.test(t)?"deg":"";i.push(rt(e)),o.push("rotate3d"===t?([e,t,r,a])=>[`rotate3d(${e},${t},${r},${pa(a,n)})`,ma(a,0)]:e=>[`${t}(${e.map((e=>pa(e,n))).join(",")})`,ma(e,t.startsWith("scale")?1:0)])}})),i.length&&(a.transform=new ya(i,o)),super(a)}}class ya extends tn{constructor(e,t){super(),this._value=null,this.inputs=e,this.transforms=t}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return tt(this.inputs,((n,r)=>{const a=Jt(n[0]),[i,o]=this.transforms[r](Ke.arr(a)?a:n.map(Jt));e+=" "+i,t=t&&o})),t?"none":e}observerAdded(e){1==e&&tt(this.inputs,(e=>tt(e,(e=>Xt(e)&&rn(e,this)))))}observerRemoved(e){0==e&&tt(this.inputs,(e=>tt(e,(e=>Xt(e)&&an(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),en(this,e)}}const va=["scrollTop","scrollLeft"];ht.assign({batchedUpdates:w,createStringInterpolator:gn,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});const ba=((e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:n=(e=>new Hn(e)),getComponentProps:r=(e=>e)}={})=>{const a={applyAnimatedValues:t,createAnimatedStyle:n,getComponentProps:r},i=e=>{const t=Wn(e)||"Anonymous";return(e=Ke.str(e)?i[e]||(i[e]=Ln(e,a)):e[Nn]||(e[Nn]=Ln(e,a))).displayName=`Animated(${t})`,e};return nt(e,((t,n)=>{Ke.arr(e)&&(n=Wn(t)),i[n]=i(t)})),{animated:i}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const n="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,r=t,{style:a,children:i,scrollTop:o,scrollLeft:s,viewBox:c}=r,l=ra(r,aa),u=Object.values(l),d=Object.keys(l).map((t=>n||e.hasAttribute(t)?t:sa[t]||(sa[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==i&&(e.textContent=i);for(let t in a)if(a.hasOwnProperty(t)){const n=oa(t,a[t]);ia.test(t)?e.style.setProperty(t,n):e.style[t]=n}d.forEach(((t,n)=>{e.setAttribute(t,u[n])})),void 0!==o&&(e.scrollTop=o),void 0!==s&&(e.scrollLeft=s),void 0!==c&&e.setAttribute("viewBox",c)},createAnimatedStyle:e=>new ga(e),getComponentProps:e=>ra(e,va)}),wa=ba.animated,$a=$(wa.div)`
    position: absolute;
    top: calc(100% + 0.5rem);
    left: -1px;
    width: calc(100% + 2px);
    max-width: 41rem;
    overflow: hidden;
    z-index: 1;
    min-width: 21rem;

    ${R.mobileL} {
        min-width: 17.5rem;
    }
`;var Sa={exports:{}};Sa.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,a=/\d*[^-_:/,()\s\d]+/,i={},o=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},c=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],l=function(e){var t=i[e];return t&&(t.indexOf?t:t.s.concat(t.f))},u=function(e,t){var n,r=i.meridiem;if(r){for(var a=1;a<=24;a+=1)if(e.indexOf(r(a,0,t))>-1){n=a>12;break}}else n=e===(t?"pm":"PM");return n},d={A:[a,function(e){this.afternoon=u(e,!1)}],a:[a,function(e){this.afternoon=u(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[r,s("seconds")],ss:[r,s("seconds")],m:[r,s("minutes")],mm:[r,s("minutes")],H:[r,s("hours")],h:[r,s("hours")],HH:[r,s("hours")],hh:[r,s("hours")],D:[r,s("day")],DD:[n,s("day")],Do:[a,function(e){var t=i.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],M:[r,s("month")],MM:[n,s("month")],MMM:[a,function(e){var t=l("months"),n=(l("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[a,function(e){var t=l("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[n,function(e){this.year=o(e)}],YYYY:[/\d{4}/,s("year")],Z:c,ZZ:c};function h(n){var r,a;r=n,a=i&&i.formats;for(var o=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var i=r&&r.toUpperCase();return n||a[r]||e[r]||a[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),s=o.length,c=0;c<s;c+=1){var l=o[c],u=d[l],h=u&&u[0],f=u&&u[1];o[c]=f?{regex:h,parser:f}:l.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<s;n+=1){var a=o[n];if("string"==typeof a)r+=a.length;else{var i=a.regex,c=a.parser,l=e.slice(r),u=i.exec(l)[0];c.call(t,u),e=e.replace(u,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(o=e.parseTwoDigitYear);var r=t.prototype,a=r.parse;r.parse=function(e){var t=e.date,r=e.utc,o=e.args;this.$u=r;var s=o[1];if("string"==typeof s){var c=!0===o[2],l=!0===o[3],u=c||l,d=o[2];l&&(d=o[2]),i=this.$locale(),!c&&d&&(i=n.Ls[d]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=h(t)(e),a=r.year,i=r.month,o=r.day,s=r.hours,c=r.minutes,l=r.seconds,u=r.milliseconds,d=r.zone,f=new Date,p=o||(a||i?1:f.getDate()),m=a||f.getFullYear(),g=0;a&&!i||(g=i>0?i-1:f.getMonth());var y=s||0,v=c||0,b=l||0,w=u||0;return d?new Date(Date.UTC(m,g,p,y,v,b,w+60*d.offset*1e3)):n?new Date(Date.UTC(m,g,p,y,v,b,w)):new Date(m,g,p,y,v,b,w)}catch(e){return new Date("")}}(t,s,r),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(s)&&(this.$d=new Date("")),i={}}else if(s instanceof Array)for(var f=s.length,p=1;p<=f;p+=1){o[1]=s[p-1];var m=n.apply(this,o);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}p===f&&(this.$d=new Date(""))}else a.call(this,e)}}}();var Da,xa,Oa=Sa.exports,Fa={exports:{}},_a=Fa.exports=(Da={year:0,month:1,day:2,hour:3,minute:4,second:5},xa={},function(e,t,n){var r,a=function(e,t,n){void 0===n&&(n={});var r=new Date(e),a=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,a=xa[r];return a||(a=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),xa[r]=a),a}(t,n);return a.formatToParts(r)},i=function(e,t){for(var r=a(e,t),i=[],o=0;o<r.length;o+=1){var s=r[o],c=s.type,l=s.value,u=Da[c];u>=0&&(i[u]=parseInt(l,10))}var d=i[3],h=24===d?0:d,f=i[0]+"-"+i[1]+"-"+i[2]+" "+h+":"+i[4]+":"+i[5]+":000",p=+e;return(n.utc(f).valueOf()-(p-=p%1e3))/6e4},o=t.prototype;o.tz=function(e,t){void 0===e&&(e=r);var a=this.utcOffset(),i=this.toDate(),o=i.toLocaleString("en-US",{timeZone:e}),s=Math.round((i-new Date(o))/1e3/60),c=n(o).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-s,!0);if(t){var l=c.utcOffset();c=c.add(a-l,"minute")}return c.$x.$timezone=e,c},o.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=a(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var s=o.startOf;o.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return s.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,a){var o=a&&t,s=a||t||r,c=i(+n(),s);if("string"!=typeof e)return n(e).tz(s);var l=function(e,t,n){var r=e-60*t*1e3,a=i(r,n);if(t===a)return[r,t];var o=i(r-=60*(a-t)*1e3,n);return a===o?[r,a]:[e-60*Math.min(a,o)*1e3,Math.max(a,o)]}(n.utc(e,o).valueOf(),c,s),u=l[0],d=l[1],h=n(u).utcOffset(d);return h.$x.$timezone=s,h},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}}),ja={exports:{}};ja.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,a){var i=n(e),o=n(t),s="("===(a=a||"()")[0],c=")"===a[1];return(s?this.isAfter(i,r):!this.isBefore(i,r))&&(c?this.isBefore(o,r):!this.isAfter(o,r))||(s?this.isBefore(i,r):!this.isAfter(i,r))&&(c?this.isAfter(o,r):!this.isBefore(o,r))}};var ka=ja.exports,Ma={exports:{}};Ma.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var Ea=Ma.exports,Ba={exports:{}};Ba.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var Aa,Ca=Ba.exports;A.extend(ka),A.extend(Ea),A.extend(Ca),A.extend(Oa),A.extend(_a),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=A(t).startOf("week");return Pa(n).map((e=>Ha(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Ha(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(A(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),a=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)a.push(r.add(e,"year"));return a},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+A(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=A(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,n,r,a)=>{const i=e.isWithinRange(t,r?A(r):void 0,a?A(a):void 0),o=n&&n.includes(t.format("YYYY-MM-DD"));return!i||!!o}}(Aa||(Aa={}));const Pa=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},Ha=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},Ra=[1,3,5,7,8,10,12],Ta=[4,6,9,11];var Ia,Ya,La,za;!function(e){e.clampDay=(t,n,r)=>{const a=parseInt(t),i=parseInt(n),o=parseInt(r);return 0==a?"1":Ra.includes(i)?Math.min(a,31).toString():Ta.includes(i)?Math.min(a,30).toString():2===i?e.isLeapYear(o)?Math.min(a,29).toString():Math.min(a,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=A(e,n);return A(t,n).diff(r,"minute")},e.toDayjs=e=>e?A(e):A()}(Ia||(Ia={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:n,minDate:r,maxDate:a}=t;return!!(n&&n.length&&n.includes(e))||(!(!r||!A(e).isBefore(r,"day"))||!(!a||!A(e).isAfter(a,"day")))},e.sanitizeInput=e=>{if(e){if(A(e).isValid())return e}return""}}(Ya||(Ya={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(La||(La={})),function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,a=8)=>{let i=0;t>n&&(i=Math.floor((t-n)/a));const o=r+i;if(o<e.length){const t=Math.floor(o/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width}}(za||(za={}));const Na=e=>{const[t,n]=s(e),r=o(e);return[t,p((e=>{r.current=e,n(e)}),[]),r]};var Wa=Array.isArray,Va="object"==typeof M&&M&&M.Object===Object&&M,qa="object"==typeof self&&self&&self.Object===Object&&self,Qa=Va||qa||Function("return this")(),Ua=Qa.Symbol,Za=Ua,Ga=Object.prototype,Xa=Ga.hasOwnProperty,Ja=Ga.toString,Ka=Za?Za.toStringTag:void 0;var ei=function(e){var t=Xa.call(e,Ka),n=e[Ka];try{e[Ka]=void 0;var r=!0}catch(e){}var a=Ja.call(e);return r&&(t?e[Ka]=n:delete e[Ka]),a},ti=Object.prototype.toString;var ni=ei,ri=function(e){return ti.call(e)},ai=Ua?Ua.toStringTag:void 0;var ii=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":ai&&ai in Object(e)?ni(e):ri(e)};var oi=ii,si=function(e){return null!=e&&"object"==typeof e};var ci=function(e){return"symbol"==typeof e||si(e)&&"[object Symbol]"==oi(e)},li=Wa,ui=ci,di=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,hi=/^\w*$/;var fi=function(e,t){if(li(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!ui(e))||(hi.test(e)||!di.test(e)||null!=t&&e in Object(t))};var pi=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},mi=ii,gi=pi;var yi,vi=function(e){if(!gi(e))return!1;var t=mi(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},bi=Qa["__core-js_shared__"],wi=(yi=/[^.]+$/.exec(bi&&bi.keys&&bi.keys.IE_PROTO||""))?"Symbol(src)_1."+yi:"";var $i=function(e){return!!wi&&wi in e},Si=Function.prototype.toString;var Di=vi,xi=$i,Oi=pi,Fi=function(e){if(null!=e){try{return Si.call(e)}catch(e){}try{return e+""}catch(e){}}return""},_i=/^\[object .+?Constructor\]$/,ji=Function.prototype,ki=Object.prototype,Mi=ji.toString,Ei=ki.hasOwnProperty,Bi=RegExp("^"+Mi.call(Ei).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Ai=function(e){return!(!Oi(e)||xi(e))&&(Di(e)?Bi:_i).test(Fi(e))},Ci=function(e,t){return null==e?void 0:e[t]};var Pi=function(e,t){var n=Ci(e,t);return Ai(n)?n:void 0},Hi=Pi(Object,"create"),Ri=Hi;var Ti=function(){this.__data__=Ri?Ri(null):{},this.size=0};var Ii=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Yi=Hi,Li=Object.prototype.hasOwnProperty;var zi=function(e){var t=this.__data__;if(Yi){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return Li.call(t,e)?t[e]:void 0},Ni=Hi,Wi=Object.prototype.hasOwnProperty;var Vi=Hi;var qi=Ti,Qi=Ii,Ui=zi,Zi=function(e){var t=this.__data__;return Ni?void 0!==t[e]:Wi.call(t,e)},Gi=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Vi&&void 0===t?"__lodash_hash_undefined__":t,this};function Xi(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Xi.prototype.clear=qi,Xi.prototype.delete=Qi,Xi.prototype.get=Ui,Xi.prototype.has=Zi,Xi.prototype.set=Gi;var Ji=Xi;var Ki=function(){this.__data__=[],this.size=0};var eo=function(e,t){return e===t||e!=e&&t!=t};var to=function(e,t){for(var n=e.length;n--;)if(eo(e[n][0],t))return n;return-1},no=to,ro=Array.prototype.splice;var ao=to;var io=to;var oo=to;var so=Ki,co=function(e){var t=this.__data__,n=no(t,e);return!(n<0)&&(n==t.length-1?t.pop():ro.call(t,n,1),--this.size,!0)},lo=function(e){var t=this.__data__,n=ao(t,e);return n<0?void 0:t[n][1]},uo=function(e){return io(this.__data__,e)>-1},ho=function(e,t){var n=this.__data__,r=oo(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function fo(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}fo.prototype.clear=so,fo.prototype.delete=co,fo.prototype.get=lo,fo.prototype.has=uo,fo.prototype.set=ho;var po=fo,mo=Pi(Qa,"Map"),go=Ji,yo=po,vo=mo;var bo=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var wo=function(e,t){var n=e.__data__;return bo(t)?n["string"==typeof t?"string":"hash"]:n.map},$o=wo;var So=wo;var Do=wo;var xo=wo;var Oo=function(){this.size=0,this.__data__={hash:new go,map:new(vo||yo),string:new go}},Fo=function(e){var t=$o(this,e).delete(e);return this.size-=t?1:0,t},_o=function(e){return So(this,e).get(e)},jo=function(e){return Do(this,e).has(e)},ko=function(e,t){var n=xo(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function Mo(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Mo.prototype.clear=Oo,Mo.prototype.delete=Fo,Mo.prototype.get=_o,Mo.prototype.has=jo,Mo.prototype.set=ko;var Eo=Mo;function Bo(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,a=t?t.apply(this,r):r[0],i=n.cache;if(i.has(a))return i.get(a);var o=e.apply(this,r);return n.cache=i.set(a,o)||i,o};return n.cache=new(Bo.Cache||Eo),n}Bo.Cache=Eo;var Ao=Bo;var Co=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Po=/\\(\\)?/g,Ho=function(e){var t=Ao(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Co,(function(e,n,r,a){t.push(r?a.replace(Po,"$1"):n||e)})),t}));var Ro=function(e,t){for(var n=-1,r=null==e?0:e.length,a=Array(r);++n<r;)a[n]=t(e[n],n,e);return a},To=Wa,Io=ci,Yo=Ua?Ua.prototype:void 0,Lo=Yo?Yo.toString:void 0;var zo=function e(t){if("string"==typeof t)return t;if(To(t))return Ro(t,e)+"";if(Io(t))return Lo?Lo.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},No=zo;var Wo=Wa,Vo=fi,qo=Ho,Qo=function(e){return null==e?"":No(e)};var Uo=ci;var Zo=function(e,t){return Wo(e)?e:Vo(e,t)?[e]:qo(Qo(e))},Go=function(e){if("string"==typeof e||Uo(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var Xo=function(e,t){for(var n=0,r=(t=Zo(t,e)).length;null!=e&&n<r;)e=e[Go(t[n++])];return n&&n==r?e:void 0};var Jo=function(e,t,n){var r=null==e?void 0:Xo(e,t);return void 0===r?n:r};const Ko=(e,t,n)=>t?Jo(n,t)||Jo(e,t):n||e,es=(e,t)=>{const n=t||e.defaultValue;return Jo(e.collections,n)};var ts;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(ts||(ts={}));const ns={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#8F0E0E",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},rs=e=>t=>{const n=t.theme,r=es(ns,n[ts.colorScheme]);return n.options&&n.options.color?Ko(r,e,n.options.color):Ko(r,e)},as={Brand:{1:rs("Brand.1"),2:rs("Brand.2"),3:rs("Brand.3"),4:rs("Brand.4"),5:rs("Brand.5"),6:rs("Brand.6")},Primary:rs("Primary"),PrimaryDark:rs("PrimaryDark"),Secondary:rs("Secondary"),Accent:{Light:{1:rs("Accent.Light.1"),2:rs("Accent.Light.2"),3:rs("Accent.Light.3"),4:rs("Accent.Light.4"),5:rs("Accent.Light.5"),6:rs("Accent.Light.6")},Dark:{1:rs("Accent.Dark.1"),2:rs("Accent.Dark.2"),3:rs("Accent.Dark.3")}},Neutral:{1:rs("Neutral.1"),2:rs("Neutral.2"),3:rs("Neutral.3"),4:rs("Neutral.4"),5:rs("Neutral.5"),6:rs("Neutral.6"),7:rs("Neutral.7"),8:rs("Neutral.8")},Validation:{Green:{Text:rs("Validation.Green.Text"),Icon:rs("Validation.Green.Icon"),Border:rs("Validation.Green.Border"),Background:rs("Validation.Green.Background")},Orange:{Text:rs("Validation.Orange.Text"),Icon:rs("Validation.Orange.Icon"),Border:rs("Validation.Orange.Border"),Background:rs("Validation.Orange.Background"),Badge:rs("Validation.Orange.Badge")},Red:{Text:rs("Validation.Red.Text"),Icon:rs("Validation.Red.Icon"),Border:rs("Validation.Red.Border"),Background:rs("Validation.Red.Background")},Blue:{Text:rs("Validation.Blue.Text"),Icon:rs("Validation.Blue.Icon"),Border:rs("Validation.Blue.Border"),Background:rs("Validation.Blue.Background")}},Shadow:{Accent:rs("Shadow.Accent"),Red:rs("Shadow.Red"),Elevation:rs("Shadow.Elevation")}},is=$.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`,os=S`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,ss=$.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||as.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${os} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,cs=$(ss)`
    animation-delay: -0.45s;
`,ls=$(ss)`
    animation-delay: -0.3s;
`,us=$(ss)`
    animation-delay: -0.15s;
`,ds={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},hs={collections:{base:{D1:{fontFamily:ds.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:ds.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:ds.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:ds.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:ds.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:ds.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:ds.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:ds.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:ds.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:ds.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:ds.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:ds.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:ds.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:ds.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},fs=e=>t=>{const n=t.theme,r=es(hs,n[ts.textStyleScheme]);return n.options&&n.options.textStyle?Ko(r,e,n.options.textStyle):Ko(r,e)},ps={D1:{fontFamily:fs("D1.fontFamily"),fontSize:fs("D1.fontSize"),fontWeight:fs("D1.fontWeight"),lineHeight:fs("D1.lineHeight"),letterSpacing:fs("D1.letterSpacing")},D2:{fontFamily:fs("D2.fontFamily"),fontSize:fs("D2.fontSize"),fontWeight:fs("D2.fontWeight"),lineHeight:fs("D2.lineHeight"),letterSpacing:fs("D2.letterSpacing")},D3:{fontFamily:fs("D3.fontFamily"),fontSize:fs("D3.fontSize"),fontWeight:fs("D3.fontWeight"),lineHeight:fs("D3.lineHeight"),letterSpacing:fs("D3.letterSpacing")},D4:{fontFamily:fs("D4.fontFamily"),fontSize:fs("D4.fontSize"),fontWeight:fs("D4.fontWeight"),lineHeight:fs("D4.lineHeight"),letterSpacing:fs("D4.letterSpacing")},DBody:{fontFamily:fs("DBody.fontFamily"),fontSize:fs("DBody.fontSize"),fontWeight:fs("DBody.fontWeight"),lineHeight:fs("DBody.lineHeight"),letterSpacing:fs("DBody.letterSpacing")},H1:{fontFamily:fs("H1.fontFamily"),fontSize:fs("H1.fontSize"),fontWeight:fs("H1.fontWeight"),lineHeight:fs("H1.lineHeight"),letterSpacing:fs("H1.letterSpacing")},H2:{fontFamily:fs("H2.fontFamily"),fontSize:fs("H2.fontSize"),fontWeight:fs("H2.fontWeight"),lineHeight:fs("H2.lineHeight"),letterSpacing:fs("H2.letterSpacing")},H3:{fontFamily:fs("H3.fontFamily"),fontSize:fs("H3.fontSize"),fontWeight:fs("H3.fontWeight"),lineHeight:fs("H3.lineHeight"),letterSpacing:fs("H3.letterSpacing")},H4:{fontFamily:fs("H4.fontFamily"),fontSize:fs("H4.fontSize"),fontWeight:fs("H4.fontWeight"),lineHeight:fs("H4.lineHeight"),letterSpacing:fs("H4.letterSpacing")},H5:{fontFamily:fs("H5.fontFamily"),fontSize:fs("H5.fontSize"),fontWeight:fs("H5.fontWeight"),lineHeight:fs("H5.lineHeight"),letterSpacing:fs("H5.letterSpacing")},H6:{fontFamily:fs("H6.fontFamily"),fontSize:fs("H6.fontSize"),fontWeight:fs("H6.fontWeight"),lineHeight:fs("H6.lineHeight"),letterSpacing:fs("H6.letterSpacing")},Body:{fontFamily:fs("Body.fontFamily"),fontSize:fs("Body.fontSize"),fontWeight:fs("Body.fontWeight"),lineHeight:fs("Body.lineHeight"),letterSpacing:fs("Body.letterSpacing")},BodySmall:{fontFamily:fs("BodySmall.fontFamily"),fontSize:fs("BodySmall.fontSize"),fontWeight:fs("BodySmall.fontWeight"),lineHeight:fs("BodySmall.lineHeight"),letterSpacing:fs("BodySmall.letterSpacing")},XSmall:{fontFamily:fs("XSmall.fontFamily"),fontSize:fs("XSmall.fontSize"),fontWeight:fs("XSmall.fontWeight"),lineHeight:fs("XSmall.lineHeight"),letterSpacing:fs("XSmall.letterSpacing")}},ms=e=>{switch(e){case 700:case"bold":return ds.Bold;case 600:case"semibold":return ds.Semibold;case 300:case"light":return ds.Light;case 400:case"regular":return ds.Regular;default:return""}},gs=(e,t)=>n=>{var r;const a=ps[e].fontFamily(n),i=ps[e].fontWeight(n);return Object.values(ds).includes(a)?D`
                font-family: ${ms(t)||ms(i)||a};
                font-weight: normal !important;
            `:D`
            font-family: ${a};
            font-weight: ${null!==(r=ys(t)||i)&&void 0!==r?r:"normal"};
        `},ys=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},vs=e=>{if(e>0)return D`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},bs=(e,t,n=!1)=>r=>{const a=ps[e],i=a.fontSize(r);return D`
            ${gs(e,t)}
            font-size: ${i}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${a.letterSpacing(r)||0}rem !important;
            ${D`
                margin-bottom: ${i*(n?1.05:0)}rem;
            `}
        `},ws=(e=!1,t=!1,n=void 0)=>t?D`
            display: block;
            ${vs(n)}
        `:e?D`
            display: inline;
        `:D`
            display: block;
            ${vs(n)}
        `;var $s;!function(e){e.D1=$.h1`
        ${e=>D`
                ${bs("D1",e.weight,e.paragraph)}
                color: ${as.Neutral[1]};
                ${ws(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=$.h1`
        ${e=>D`
                ${bs("D2",e.weight,e.paragraph)}
                color: ${as.Neutral[1]};
                ${ws(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=$.h1`
        ${e=>D`
                ${bs("D3",e.weight,e.paragraph)}
                color: ${as.Neutral[1]};
                ${ws(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=$.h1`
        ${e=>D`
                ${bs("D4",e.weight,e.paragraph)}
                color: ${as.Neutral[1]};
                ${ws(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=$.h1`
        ${e=>D`
                ${bs("DBody",e.weight,e.paragraph)}
                color: ${as.Neutral[1]};
                ${ws(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=$.h1`
        ${e=>D`
                ${bs("H1",e.weight,e.paragraph)}
                color: ${as.Neutral[1]};
                ${ws(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=$.h2`
        ${e=>D`
                ${bs("H2",e.weight,e.paragraph)}
                color: ${as.Neutral[1]};
                ${ws(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=$.h3`
        ${e=>D`
                ${bs("H3",e.weight,e.paragraph)}
                color: ${as.Neutral[1]};
                ${ws(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=$.h4`
        ${e=>D`
                ${bs("H4",e.weight,e.paragraph)}
                color: ${as.Neutral[1]};
                ${ws(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=$.h5`
        ${e=>D`
                ${bs("H5",e.weight,e.paragraph)}
                color: ${as.Neutral[1]};
                ${ws(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=$.h6`
        ${e=>D`
                ${bs("H6",e.weight,e.paragraph)}
                color: ${as.Neutral[1]};
                ${ws(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=$.p`
        ${e=>D`
                ${bs("Body",e.weight,e.paragraph)}
                color: ${as.Neutral[1]};
                ${ws(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=$.p`
        ${e=>D`
                ${bs("BodySmall",e.weight,e.paragraph)}
                color: ${as.Neutral[1]};
                ${ws(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=$.span`
        ${e=>D`
                ${bs("XSmall",e.weight,e.paragraph)}
                color: ${as.Neutral[1]};
                ${ws(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>xs(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>xs(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}($s||($s={}));const Ss=$.a`
    ${e=>D`
            ${bs(e.textStyle,e.weight)}
            color: ${as.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${as.Secondary};

                svg {
                    color: ${as.Secondary};
                }
            }
        `}
`,Ds=$(_)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,xs=n=>{var{external:r=!1,children:a}=n,i=k(n,["external","children"]);return e(Ss,Object.assign({},i,{children:[a,r&&t(Ds,{})]}))};var Os;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Os||(Os={}));const Fs=$.button`
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
    ${e=>{switch(e.$buttonStyle){case"secondary":return D`
                    background-color: ${as.Neutral[8](e)};
                    border: 1px solid ${as.Primary(e)};

                    span {
                        color: ${as.Primary(e)};
                    }
                `;case"light":return D`
                    background-color: ${as.Neutral[8](e)};
                    border: 1px solid ${as.Neutral[5](e)};

                    span {
                        color: ${as.Primary(e)};
                    }
                `;case"disabled":return D`
                    background-color: ${as.Neutral[6](e)};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${as.Neutral[3](e)};
                    }
                `;case"link":return D`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${as.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${as.Secondary};
                        }
                    }
                `;default:return D`
                    background-color: ${as.Primary(e)};
                    border: 1px solid transparent;

                    ${R.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${as.Neutral[8](e)};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?D`
                    height: 2.5rem;
                    span {
                        ${bs("H5","semibold")}
                    }

                    ${R.mobileS} {
                        height: auto;
                    }
                `:D`
                    height: 3rem;
                    span {
                        ${bs("H4","semibold")}
                    }

                    ${R.mobileS} {
                        height: auto;
                    }
                `}
`,_s=$((({color:n,className:r,size:a=18})=>e(is,Object.assign({className:r,$size:a,$color:n},{children:[t(ss,{id:"inner1",$size:a-2,$borderWidth:2}),t(cs,{id:"inner2",$size:a-2,$borderWidth:2}),t(ls,{id:"inner3",$size:a-2,$borderWidth:2}),t(us,{id:"inner4",$size:a-2,$borderWidth:2})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t;switch(e.$buttonStyle){case"secondary":case"light":case"link":t=as.Primary(e);break;case"disabled":t=as.Neutral[3](e);break;default:t=as.Neutral[8](e)}return D`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,js={Default:a.forwardRef(((n,r)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:s="default"}=n,c=k(n,["children","disabled","loading","styleType"]),l={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"default"};return e(Fs,Object.assign({ref:r,"data-testid":c["data-testid"]||"button",disabled:i},l,c,{children:[o&&t(_s,Object.assign({},l)),t("span",{children:a})]}))})),Small:a.forwardRef(((n,r)=>{const{children:a,disabled:i=!1,loading:o=!1,styleType:s="default"}=n,c=k(n,["children","disabled","loading","styleType"]),l={$buttonStyle:i?"disabled":s,$buttonSizeStyle:"small"};return e(Fs,Object.assign({ref:r,"data-testid":c["data-testid"]||"button",disabled:i},l,c,{children:[o&&t(_s,Object.assign({},l,{size:16})),t("span",{children:a})]}))}))},ks=$.button`
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
        ${({$outline:e})=>"none"===e&&"outline: none;"}

        ${({$highlight:e})=>e&&D`
                background-color: ${as.Neutral[7]};
            `}
    }
`,Ms=a.forwardRef(((e,n)=>{var{children:r,focusHighlight:a=!0,focusOutline:i="none",type:o="button"}=e,s=k(e,["children","focusHighlight","focusOutline","type"]);return t(ks,Object.assign({ref:n,$outline:i,$highlight:a,type:o},s,{children:r}))})),Es=D`
    color: ${as.Neutral[3]};
    height: 1rem;
    width: 1rem;
`,Bs=$(O)`
    ${Es}
`,As=$(F)`
    ${Es}
`,Cs=$(x)`
    ${Es}
    transition: transform 250ms ease-in-out;
    margin-left: 0.5rem;
`,Ps=$.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
`,Hs=$.div`
    display: flex;
    flex: 1;
    position: relative;
`,Rs=$.div`
    isolation: isolate;
    width: 100%;
`,Ts=$.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${as.Neutral[8]};

    ${e=>{if(!e.$visible)return D`
                display: none;
            `}}
`,Is=$.div`
    display: flex;
    justify-content: space-between;
    margin: 0 0 0.5rem 0;
`,Ys=$.div`
    display: flex;
`,Ls=$.button`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;

    ${e=>!1===e.$visible?D`
                display: none;
            `:e.$expanded?D`
                ${Cs} {
                    transform: rotate(180deg);
                }
            `:void 0}
`,zs=$.p`
    ${bs("H5","regular")}
`,Ns=$.div`
    display: flex;
`,Ws=$(Ms)`
    margin: auto 0;
    padding: 0.75rem;

    :disabled {
        cursor: not-allowed;
    }
`,Vs=$.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;
`,qs=$(js.Small)`
    flex: 1;
`,Qs=$.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 2.5rem);
    align-content: center;
    justify-content: center;

    ${e=>{switch(e.$type){case"standalone":return D`
                    gap: 0.5rem 2.5rem;
                `;case"input":return D`
                    gap: 0.5rem 1rem;
                `}}}
`,Us=$.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: default;
    border-radius: 5rem;
    margin: 0 0.5rem;

    ${e=>e.$interactive?D`
                cursor: pointer;
                &:hover {
                    box-shadow: 0px 0px 4px 1px ${as.Shadow.Accent};
                    border: 1px solid ${as.Accent.Light[1]};
                }
            `:e.$disabledDisplay?D`
                cursor: not-allowed;
            `:void 0}

    ${e=>{switch(e.$variant){case"current-month":return D`
                    background-color: ${as.Accent.Light[6](e)};
                `;case"selected-month":return D`
                    background-color: ${as.Accent.Light[5](e)};
                    border: 1px solid ${as.Primary(e)};
                `}}}
`,Zs=$($s.H5)`
    ${e=>{if(e.$disabledDisplay)return D`
                color: ${as.Neutral[4]};
            `;switch(e.$variant){case"current-month":return D`
                    color: ${as.Neutral[3](e)};
                `;case"selected-month":return D`
                    ${bs("H5","semibold")}
                    color: ${as.Primary(e)};
                `}}}
`,Gs=({calendarDate:e,currentFocus:n,selectedStartDate:r,selectedEndDate:a,viewCalendarDate:i,type:o,isNewSelection:s,minDate:c,maxDate:l,allowDisabledSelection:u,onMonthSelect:d})=>{const h=g((()=>Aa.generateMonths(A(e))),[e]),f=e=>{const t="start"===n&&a&&e.isAfter(a,"month")&&s,i="end"===n&&r&&e.isBefore(r,"month")&&s;return t||i},p=e=>{const t=e.format("MMMM"),n=(r=e,!Aa.isWithinRange(r,c?A(c):void 0,l?A(l):void 0,"month"));var r;const a=i.isSame(e,"month")?"selected-month":A().isSame(e,"month")?"current-month":"default";return{disabledDisplay:n||f(e),interactive:!n||u,month:t,variant:a}};return h.length?t(Qs,Object.assign({$type:o},{children:h.map((e=>{const{disabledDisplay:n,interactive:r,variant:a,month:i}=p(e);return t(Us,Object.assign({$variant:a,$disabledDisplay:n,$interactive:r,onClick:()=>((e,t)=>{t||d(e)})(e,!r)},{children:t(Zs,Object.assign({weight:"regular",$variant:a,$disabledDisplay:n},{children:i}))}),i)}))})):null},Xs=$.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-content: center;
    grid-template-columns: repeat(3, 1fr);

    ${e=>{switch(e.$type){case"standalone":return D`
                    grid-template-rows: repeat(4, 4rem);
                    gap: 0.5rem 2.5rem;
                `;case"input":return D`
                    grid-template-rows: repeat(4, 4.375rem);
                    gap: 0.5rem 1rem;
                `}}}
`,Js=$.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: default;
    border-radius: 0.5rem;
    margin: 0 0.5rem;

    ${e=>e.$interactive?D`
                cursor: pointer;
                &:hover {
                    box-shadow: 0px 0px 4px 1px ${as.Shadow.Accent};
                    border: 1px solid ${as.Accent.Light[1]};
                }
            `:e.$disabledDisplay?D`
                cursor: not-allowed;
            `:void 0}

    ${e=>{switch(e.$variant){case"current-year":return D`
                    background: ${as.Accent.Light[6](e)};
                `;case"selected-year":return D`
                    background: ${as.Accent.Light[5](e)};
                    border: 1px solid ${as.Primary(e)};
                `}}};
`,Ks=$($s.H5)`
    ${e=>{if(e.$disabledDisplay)return D`
                color: ${as.Neutral[4]};
            `;switch(e.$variant){case"current-year":return D`
                    color: ${as.Neutral[3](e)};
                `;case"selected-year":return D`
                    ${bs("H5","semibold")}
                    color: ${as.Primary(e)};
                `;case"other-decade":return D`
                    color: ${as.Neutral[4](e)};
                `}}}
`,ec=({calendarDate:e,currentFocus:n,selectedStartDate:r,selectedEndDate:a,viewCalendarDate:i,type:o,isNewSelection:s,minDate:c,maxDate:l,allowDisabledSelection:u,onYearSelect:d})=>{const h=g((()=>Aa.generateDecadeOfYears(A(e))),[e]),f=e=>{const t="start"===n&&a&&e.isAfter(a,"year")&&s,i="end"===n&&r&&e.isBefore(r,"year")&&s;return t||i},p=e=>{const t=[0,11].includes(h.indexOf(e)),n=e.year(),r=(a=e,!Aa.isWithinRange(a,c?A(c):void 0,l?A(l):void 0,"year"));var a;const o=t?"other-decade":i.isSame(e,"year")?"selected-year":A().isSame(e,"year")?"current-year":"default";return{disabledDisplay:r||f(e),interactive:!r||u,year:n,variant:o}};return h.length?t(Xs,Object.assign({$type:o},{children:h.map((e=>{const{disabledDisplay:n,interactive:r,variant:a,year:i}=p(e);return t(Js,Object.assign({$variant:a,$disabledDisplay:n,$interactive:r,onClick:()=>((e,t)=>{t||d(e)})(e,!r)},{children:t(Ks,Object.assign({weight:"regular",$variant:a,$disabledDisplay:n,$interactive:r},{children:i}))}),i)}))})):null},tc=a.forwardRef(((r,a)=>{var{children:i,initialCalendarDate:c,type:l,minDate:u,maxDate:h,currentFocus:f,selectedStartDate:p,selectedEndDate:m,selectWithinRange:g,dynamicHeight:v=!1,allowDisabledSelection:b,onCalendarDateChange:w,withButton:$,doneButtonDisabled:S,onDismiss:D,showNavigationHeader:x=!0,getLeftArrowDate:O,getRightArrowDate:F,isLeftArrowDisabled:_,isRightArrowDisabled:j,getMonthHeaderLabel:M,getYearHeaderLabel:E}=r,B=k(r,["children","initialCalendarDate","type","minDate","maxDate","currentFocus","selectedStartDate","selectedEndDate","selectWithinRange","dynamicHeight","allowDisabledSelection","onCalendarDateChange","withButton","doneButtonDisabled","onDismiss","showNavigationHeader","getLeftArrowDate","getRightArrowDate","isLeftArrowDisabled","isRightArrowDisabled","getMonthHeaderLabel","getYearHeaderLabel"]);const[C,P]=s(Ia.toDayjs(c)),[H,R]=s(Ia.toDayjs(c)),[T,I]=s("default"),Y=o(null),L=o(null),z=o();y(a,(()=>({defaultView(){I("default")},resetView(){const e=Ia.toDayjs(c);P(e),R(e),I("default")},setCalendarDate(e){const t=Ia.toDayjs(e);P(t),R(t)}}))),d((()=>{const e=Ia.toDayjs(c);P(e),R(e)}),[c]),d((()=>{Z(H)}),[H]);const N=()=>{"month-options"!==T?(I("month-options"),z.current.focus()):(I("default"),P(H))},W=()=>{"default"!==T?(I("default"),P(H)):I("year-options")},V=()=>{z.current.focus();const e=O?O(C):C.subtract(1,"month");switch(T){case"default":R(e),P(e);break;case"month-options":P((e=>e.subtract(1,"year")));break;case"year-options":P((e=>e.subtract(10,"year")))}},q=()=>{z.current.focus();const e=F?F(C):C.add(1,"month");switch(T){case"default":R(e),P(e);break;case"month-options":P((e=>e.add(1,"year")));break;case"year-options":P((e=>e.add(10,"year")))}},Q=e=>{P(e),R(e),$||I("default")},U=()=>{const e=Ia.toDayjs(c);P(e),R(e),"default"===T?G("reset"):I("default")},Z=e=>{w&&w(e)},G=e=>{D&&D(e)},X=()=>{if(!u||b)return!1;const e=A(u);return"month-options"===T?!Aa.isPreviousYearWithinRange(C,e):"year-options"===T?!Aa.isPreviousDecadeWithinRange(C,e):_?_(C):!Aa.isPreviousMonthWithinRange(C,e)},J=()=>{if(!h||b)return!1;const e=A(h);return"month-options"===T?!Aa.isNextYearWithinRange(C,e):"year-options"===T?!Aa.isNextDecadeWithinRange(C,e):j?j(C):!Aa.isNextMonthWithinRange(C,e)},K=()=>{if("year-options"===T){const{beginDecade:e,endDecade:t}=Aa.getStartEndDecade(C);return`${e} to ${t}`}return E?E(C):C.format("YYYY")},ee=()=>{const r=M?M(C):C.format("MMM");return e(n,{children:[e(Ls,Object.assign({type:"button",tabIndex:-1,$expanded:"month-options"===T,$visible:"default"===T,id:"month-dropdown",onClick:N},{children:[t(zs,{children:r}),t(Cs,{})]})),e(Ls,Object.assign({type:"button",tabIndex:-1,$expanded:"default"!==T,id:"year-dropdown",onClick:W},{children:[t(zs,{children:K()}),t(Cs,{})]}))]})},te=()=>{switch(T){case"month-options":return t(Gs,{type:l,calendarDate:C,currentFocus:f,minDate:u,maxDate:h,selectedStartDate:p,selectedEndDate:m,viewCalendarDate:H,isNewSelection:g,onMonthSelect:Q,allowDisabledSelection:b});case"year-options":return t(ec,{type:l,calendarDate:C,currentFocus:f,minDate:u,maxDate:h,selectedStartDate:p,selectedEndDate:m,viewCalendarDate:H,isNewSelection:g,onYearSelect:Q,allowDisabledSelection:b});default:return null}};return e(Ps,Object.assign({ref:z,tabIndex:-1,"data-id":"calendar-container","data-testid":"calendar-container"},B,{children:[x&&e(Is,Object.assign({"data-id":"calendar-header","data-testid":"calendar-header"},{children:[t(Ys,{children:ee()}),e(Ns,{children:[t(Ws,Object.assign({"data-testid":"left-arrow-btn",disabled:X(),focusHighlight:!1,tabIndex:-1,onClick:V},{children:t(Bs,{})})),t(Ws,Object.assign({"data-testid":"right-arrow-btn",disabled:J(),focusHighlight:!1,tabIndex:-1,onClick:q},{children:t(As,{})}))]})]})),t(Hs,{children:(()=>{const r="function"==typeof i?i({calendarDate:H,currentView:T}):i;return e(n,v?{children:["default"===T&&r,te()]}:{children:[t(Rs,{children:r}),t(Ts,Object.assign({$visible:"default"!==T},{children:te()}))]})})()}),(()=>{if(!$)return;const n=!!("default"===T)&&S;return e(Vs,{children:[t(qs,Object.assign({ref:L,"data-testid":"cancel-button",styleType:"light",type:"button",onClick:U},{children:"Cancel"})),t(qs,Object.assign({"data-testid":"done-button",ref:Y,type:"button",onClick:()=>{n||(P(H),"default"===T?G("confirmed"):I("default"))},disabled:n},{children:"Done"}))]})})()]}))})),nc=$.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 0.25rem;
`,rc=$.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    pointer-events: none;
    user-select: none;
`,ac=$.div`
    grid-column: 1 / -1;
    display: flex;
`;$.div`
    display: flex;
    position: relative;
    height: 2.5rem;
    align-items: center;
    justify-content: center;
    flex: 1;
`;const ic=$.div`
    position: absolute;
    width: 50%;
    height: 100%;

    ${e=>{switch(e.$position){case"left":return D`
                    left: 0;
                `;case"right":return D`
                    right: 0;
                `}}}
`,oc=$.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    cursor: default;
    position: absolute;
`;$($s.H5)`
    ${e=>{const{$disabledDisplay:t,$selected:n,$variant:r}=e;if(t&&n)return D`
                ${bs("H5","semibold")};
                color: ${as.Accent.Light[2]};
            `;if(t)return D`
                color: ${as.Neutral[4]};
            `;if(n)return D`
                ${bs("H5","semibold")};
                color: ${as.Primary};
            `;switch(r){case"other-month":return D`
                    color: ${as.Neutral[4]};
                `;case"today":return D`
                    color: ${as.Neutral[3]};
                `;case"default":return D`
                    color: ${as.Neutral[1]};
                `}}}
`,$(ic)`
    ${e=>{const{$selected:t}=e;if(t)return D`
                border-top: 1px solid ${as.Accent.Light[4]};
                border-bottom: 1px solid ${as.Accent.Light[4]};
                background-color: ${as.Accent.Light[5]};
            `}}

    ${e=>{const{$hovered:t,$overlap:n}=e;return t?D`
                border-top: 1px dashed ${as.Accent.Light[4]};
                border-bottom: 1px dashed ${as.Accent.Light[4]};
                background-color: ${as.Accent.Light[6]};
            `:n?D`
                background-color: ${as.Accent.Light[4]};
            `:void 0}}
`,$(oc)`
    ${e=>{const{$hovered:t,$selected:n}=e;return n?D`
                background: ${as.Accent.Light[5]};
                border: 1px solid ${as.Primary};
            `:t?D`
                box-shadow: 0px 0px 4px 1px ${as.Shadow.Accent};
                border: 1px solid ${as.Accent.Light[1]};
                background-color: ${as.Neutral[8]};
            `:void 0}}

    ${e=>{const{$interactive:t,$disabledDisplay:n}=e;return t?D`
                cursor: pointer;
                :hover {
                    box-shadow: 0px 0px 4px 1px ${as.Shadow.Accent};
                    border: 1px solid ${as.Accent.Light[1]};
                    background-color: ${as.Neutral[8]};
                }
            `:n?D`
                cursor: not-allowed;
            `:void 0}}

    ${e=>{const{$disabledDisplay:t,$overlap:n,$variant:r}=e;return n?D`
                border: 1px solid ${as.Accent.Light[1]};
                background: ${as.Accent.Light[4]};

                :hover {
                    background: ${as.Accent.Light[4]};
                }
            `:t?D`
                color: ${as.Neutral[4]};
            `:"today"===r?D`
                    background: ${as.Accent.Light[5]};
                `:void 0}}
`;const sc=e=>{let t=as.Neutral[8],n="1px solid transparent";switch(e.$type){case"current":t=as.Accent.Light[5];break;case"hover-dash":t=as.Accent.Light[6],n=`1px dashed ${as.Accent.Light[4](e)}`;break;case"hover-current":t=as.Neutral[8],n=`1px solid ${as.Primary(e)}`;break;case"selected":t=as.Accent.Light[5],n=`1px solid ${as.Accent.Light[4](e)}`;break;case"selected-outline":t=as.Accent.Light[5],n=`1px solid ${as.Primary(e)}`;break;case"overlap":t=as.Accent.Light[4],n=`1px solid ${as.Accent.Light[4](e)}`;break;case"overlap-outline":t=as.Accent.Light[4],n=`1px solid ${as.Primary(e)}`}return{color:t,border:n}},cc=$.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 2.5rem;
`,lc=$.div`
    position: absolute;
    height: 2.5rem;
    width: 50%;

    ${e=>{if(!e.$type)return;const{color:t,border:n}=sc(e);return D`
            background-color: ${t};
            background-clip: content-box;
            border-top: ${n};
            border-bottom: ${n};
        `}}
`,uc=$(lc)`
    left: 0;
`,dc=$(lc)`
    right: 0;
`,hc=$.div`
    z-index: -1;
    box-shadow: 0 0 4px 1px ${as.Shadow.Accent};
    position: absolute;
    height: 100%;
    width: 50%;
    display: none;

    ${e=>e.$shadow&&"display: block;"}
`,fc=$(hc)`
    left: 0;
`,pc=$(hc)`
    right: 0;
`,mc=$.div`
    position: absolute;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;

    border: 1px solid transparent;
    border-radius: 50%;

    ${e=>{if(e.$type){const{color:t,border:n}=sc(e);return D`
                background-color: ${t};
                background-clip: content-box;
                border: ${n};
            `}}}

    ${e=>e.$shadow&&D`
            &:before {
                content: "";
                border-radius: 50%;
                position: absolute;
                height: 100%;
                width: 100%;
            }
        `}
`,gc=$(mc)`
    right: calc(50% - 1.25rem);
    clip-path: inset(-3px 1.25rem -3px -3px);
    &:before {
        box-shadow: -1px 0 4px 1px ${as.Shadow.Accent};
    }
`,yc=$(mc)`
    left: calc(50% - 1.25rem);
    clip-path: inset(-3px -3px -3px 1.25rem);
    &:before {
        box-shadow: 1px 0 4px 1px ${as.Shadow.Accent};
    }
`,vc=$($s.H5)`
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

    cursor: ${e=>e.$interactive?"pointer":"not-allowed"};

    ${e=>{const{$disabled:t,$type:n}=e;if(t)return"selected"===n?D`
                    ${bs("H5","semibold")};
                    color: ${as.Accent.Light[2]};
                `:D`
                color: ${as.Neutral[4]};
            `;switch(n){case"selected":return D`
                    ${bs("H5","semibold")};
                    color: ${as.Primary};
                `;case"current":return D`
                    color: ${as.Neutral[3]};
                `;case"unavailable":return D`
                    color: ${as.Neutral[4]};
                `;default:return D`
                    color: ${as.Neutral[1]};
                `}}}
`,bc=({bgLeft:n,bgRight:r,circleLeft:a,circleRight:i,shadow:o,circleShadow:s,labelType:c,disabled:l,interactive:u,date:d,onSelect:h,onHover:f})=>e(cc,{children:[t(fc,{$shadow:n&&o}),t(uc,{$type:n,$shadow:n&&o}),t(gc,{$type:a,$shadow:a&&s}),t(pc,{$shadow:r&&o}),t(dc,{$type:r,$shadow:r&&o}),t(yc,{$type:i,$shadow:i&&s}),t(vc,Object.assign({weight:"regular",$type:c,$disabled:l,$interactive:u,onClick:()=>{h(d)},onMouseEnter:()=>{f(d)}},{children:d.date()}))]}),wc=({date:e,calendarDate:n,startDate:r,endDate:a,currentFocus:i,hoverDate:o,minDate:s,maxDate:c,disabledDates:l,allowDisabledSelection:u,isNewSelection:d,onSelect:h,onHover:f})=>{const p=Aa.isDisabledDay(e,l,s,c),m=!p||u,g=()=>{const e=A(o),t=e.isBefore(a,"day"),n=e.isAfter(r,"day");let s,c,l,u;return"start"===i&&a&&t&&(r&&n?(l=o,u=a):(s=o,c=r||a)),"end"===i&&r&&n&&(a&&t?(l=r,u=o):(s=a||r,c=o)),{hoverStart:s,hoverEnd:c,overlapStart:l,overlapEnd:u}},y={date:e,calendarDate:n,disabled:p,interactive:m,onSelect:()=>{h(e,!m)},onHover:()=>{f(e.format("YYYY-MM-DD"),!m)}};return t(bc,Object.assign({},y,(()=>{const t={};if(n.month()!==e.month())t.labelType="unavailable";else if(A().isSame(e,"day")&&!p)t.labelType="current",t.circleLeft="current",t.circleRight="current";else if(d){const n="end"===i&&r&&e.isBefore(r),o="start"===i&&a&&e.isAfter(a);(n||o)&&(t.labelType="unavailable")}return t})(),(()=>{const t={},n=e.isSame(r,"day"),i=e.isSame(a,"day");return(r&&n||a&&i)&&(t.labelType="selected",t.circleLeft="selected-outline",t.circleRight="selected-outline"),r&&a&&e.isBetween(r,a,"day","[]")&&(t.labelType="selected",n||(t.bgLeft="selected"),i||(t.bgRight="selected")),t})(),(()=>{if(!o)return;const t={};e.isSame(o,"day")&&(t.circleShadow=!0,t.circleLeft="hover-current",t.circleRight="hover-current");const{hoverStart:n,hoverEnd:r,overlapStart:a,overlapEnd:i}=g();if(n&&r){if(e.isBetween(n,r,"day","[]")){const a=e.isSame(n,"day"),i=e.isSame(r,"day");t.labelType="selected",a||(t.bgLeft="hover-dash"),i||(t.bgRight="hover-dash")}return t}if(a&&i){if(e.isBetween(a,i,"day","[]")){const n=e.isSame(a,"day"),r=e.isSame(i,"day");t.labelType="selected",(n||r)&&(t.circleShadow=!0,t.circleLeft="overlap-outline",t.circleRight="overlap-outline"),n||(t.bgLeft="overlap"),r||(t.bgRight="overlap")}return t}return t})()))};A.extend(ka);const $c=({calendarDate:n,currentFocus:r,disabledDates:a,selectedStartDate:i,selectedEndDate:o,onSelect:c,onHover:l,isNewSelection:u,minDate:d,maxDate:h,allowDisabledSelection:f})=>{const p=g((()=>Aa.generateDays(n)),[n]),[m,y]=s(""),v=(e,t)=>{t&&!f||c(e)},b=(e,t)=>{t&&!f||(y(e),l(e))},w=()=>{y(""),l("")};return e(nc,Object.assign({"data-testid":"calendar-content"},{children:[p[0].map(((e,n)=>t(rc,{children:t($s.H6,Object.assign({weight:"semibold"},{children:A(e).format("ddd")}))},`week-day-${n}`))),p.map(((e,s)=>t(ac,Object.assign({onMouseLeave:w},{children:e.map(((e,s)=>t(wc,{date:e,calendarDate:n,startDate:i,endDate:o,hoverDate:m,currentFocus:r,minDate:d,maxDate:h,disabledDates:a,allowDisabledSelection:f,isNewSelection:u,onSelect:v,onHover:b},`day-${s}`)))}),s)))]}))},Sc=({date:e,calendarDate:n,selectedDate:r,hoverDate:a,minDate:i,maxDate:o,disabledDates:s,allowDisabledSelection:c,numberOfDays:l,onSelect:u,onHover:d})=>{const h=Aa.isDisabledDay(e,s,i,o),f=!h||c,{start:p,end:m}=r?Aa.getFixedRangeStartEnd(Ia.toDayjs(r),l):{start:void 0,end:void 0},{start:g,end:y}=a?Aa.getFixedRangeStartEnd(Ia.toDayjs(a),l):{start:void 0,end:void 0},v=r&&e.isBetween(p,m,"day","[]"),b=a&&e.isBetween(g,y,"day","[]"),w=v&&e.isSame(p,"day")||b&&e.isSame(g,"day"),$=v&&e.isSame(m,"day")||b&&e.isSame(y,"day"),S=(e,t,n,r)=>{n?e.circleLeft=t:e.bgLeft=t,r?e.circleRight=t:e.bgRight=t},D={date:e,calendarDate:n,disabled:h,interactive:f,onSelect:()=>{u(e,!f)},onHover:()=>{d(e.format("YYYY-MM-DD"),!f)}};return t(bc,Object.assign({},D,(()=>{const t={};return v||b?t.labelType="selected":n.month()!==e.month()?t.labelType="unavailable":A().isSame(e,"day")&&!h&&(t.labelType="current",t.circleLeft="current",t.circleRight="current"),t})(),(()=>{const t={},n=e.format("YYYY-MM-DD");return b&&S(t,"hover-dash",n===g,n===y),v&&S(t,"selected",n===p,n===m),v&&b&&S(t,"overlap",w,$),n===p&&(b?(t.circleLeft="overlap-outline",t.circleRight="overlap-outline"):(t.circleRight="selected-outline",t.circleLeft="selected-outline")),n===g&&(t.circleLeft="hover-current",t.circleRight="hover-current",t.circleShadow=!0,g>=p&&g<m&&(t.circleLeft="overlap-outline",t.circleRight="overlap-outline")),t})()))},Dc=({calendarDate:n,disabledDates:r,selectedStartDate:a,onSelect:i,onHover:o,minDate:c,maxDate:l,allowDisabledSelection:u,numberOfDays:d})=>{const h=g((()=>Aa.generateDays(n)),[n]),[f,p]=s(""),m=(e,t)=>{t&&!u||(i(e),e&&!A(e).isSame(e,"month")&&p(""))},y=(e,t)=>{t&&!u||(p(e),o(e))},v=()=>{p(""),o("")};return e(nc,Object.assign({"data-testid":"calendar-content"},{children:[h[0].map(((e,n)=>t(rc,{children:t($s.H6,Object.assign({weight:"semibold"},{children:A(e).format("ddd")}))},`week-day-${n}`))),h.map(((e,i)=>t(ac,Object.assign({onMouseLeave:v},{children:e.map(((e,i)=>t(Sc,{date:e,calendarDate:n,selectedDate:a,hoverDate:f,minDate:c,maxDate:l,disabledDates:r,allowDisabledSelection:u,onSelect:m,onHover:y,numberOfDays:d},`day-${i}`)))}),i)))]}))},xc=$.div`
    width: 100%;
    padding: 1.5rem 2rem;
    background: ${as.Neutral[8]};

    ${e=>{if("input"===e.$type)return D`
                border: 1px solid ${as.Neutral[5]};
                border-radius: 8px;
                overflow: hidden;
                padding: 1.5rem 1.25rem;

                [data-id="header"] {
                    margin: 0 0 0.25rem 0;
                }
            `}}
`,Oc=({date:e,calendarDate:n,selectedDate:r,hoverDate:a,minDate:i,maxDate:o,disabledDates:s,allowDisabledSelection:c,onSelect:l,onHover:u})=>{const d=Aa.isDisabledDay(e,s,i,o),h=!d||c,{start:f,end:p}=Aa.getWeekStartEnd(Ia.toDayjs(r)),{start:m,end:g}=Aa.getWeekStartEnd(Ia.toDayjs(a)),y=r&&e.isBetween(f,p,"day","[]"),v=a&&e.isBetween(m,g,"day","[]"),b=y&&e.isSame(f)||v&&e.isSame(m),w=y&&e.isSame(p)||v&&e.isSame(g),$={date:e,calendarDate:n,disabled:d,interactive:h,onSelect:()=>{l(e,!h)},onHover:()=>{u(e.format("YYYY-MM-DD"),!h)}};return t(bc,Object.assign({},$,(()=>{const t={};return y||v?t.labelType="selected":n.month()!==e.month()?t.labelType="unavailable":A().isSame(e,"day")&&!d&&(t.labelType="current",t.circleLeft="current",t.circleRight="current"),t})(),(()=>{const e={};let t;return y&&v?(t="hover-current",e.shadow=!0,e.circleShadow=b||w):y?t="selected-outline":v&&(t="hover-dash"),t&&(b?e.circleLeft=t:e.bgLeft=t,w?e.circleRight=t:e.bgRight=t),e})()))},Fc=({calendarDate:n,disabledDates:r,selectedStartDate:a,onSelect:i,onHover:o,minDate:c,maxDate:l,allowDisabledSelection:u})=>{const d=g((()=>Aa.generateDays(n)),[n]),[h,f]=s(""),p=(e,t)=>{if(t&&!u)return;const n=e.startOf("week");i(n),e&&!A(e).isSame(n,"month")&&f("")},m=(e,t)=>{t&&!u||(f(e),o(e))},y=()=>{f(""),o("")};return e(nc,Object.assign({"data-testid":"calendar-content"},{children:[d[0].map(((e,n)=>t(rc,{children:t($s.H6,Object.assign({weight:"semibold"},{children:A(e).format("ddd")}))},`week-day-${n}`))),d.map(((e,i)=>t(ac,Object.assign({onMouseLeave:y},{children:e.map(((e,i)=>t(Oc,{date:e,calendarDate:n,selectedDate:a,hoverDate:h,minDate:c,maxDate:l,disabledDates:r,allowDisabledSelection:u,onSelect:p,onHover:m},`day-${i}`)))}),i)))]}))},_c=a.forwardRef((({disabledDates:e,onYearMonthDisplayChange:n,onSelect:r,onHover:a,onDismiss:i,value:s,endValue:c,currentFocus:l,withButton:u,variant:d,minDate:h,maxDate:f,allowDisabledSelection:p,type:m="standalone",selectWithinRange:g=!0,initialCalendarDate:v,numberOfDays:b},w)=>{const $=o(),S=o(void 0);y(w,(()=>({reset(){$.current.resetView()},setCalendarDate(e){$.current.setCalendarDate(e)}})));const D=e=>{const t=e.format("YYYY-MM-DD");$.current.setCalendarDate(t),O(t)},x=e=>{F(e)},O=e=>{r&&r(e)},F=e=>{a&&a(e)},_=e=>{if(n){const t={month:e.month()+1,year:e.year()};n(t)}};return t(xc,Object.assign({$type:m},{children:t(tc,Object.assign({type:m,ref:$,withButton:u,doneButtonDisabled:(()=>{if(!u)return;let e=!0;switch(d){case"single":e=!1;break;case"range":case"fixed-range":e=!!s!=!!c;break;case"week":e=!s&&!c}return e})(),onDismiss:i,minDate:h,maxDate:f,selectWithinRange:g,currentFocus:l,selectedStartDate:s,selectedEndDate:c,allowDisabledSelection:p,onCalendarDateChange:e=>{S.current&&S.current.isSame(e,"month")||_(e),S.current=e},initialCalendarDate:v},{children:({calendarDate:n})=>(n=>{switch(d){case"week":return t(Fc,{calendarDate:n,disabledDates:e,selectedStartDate:s,minDate:h,maxDate:f,allowDisabledSelection:p,onSelect:D,onHover:x});case"fixed-range":return t(Dc,{calendarDate:n,disabledDates:e,selectedStartDate:s,minDate:h,maxDate:f,allowDisabledSelection:p,onSelect:D,onHover:x,numberOfDays:b});default:return t($c,{calendarDate:n,currentFocus:l,disabledDates:e,selectedStartDate:s,selectedEndDate:c,minDate:h,maxDate:f,isNewSelection:g,allowDisabledSelection:p,onSelect:D,onHover:x})}})(n)}))}))})),jc=a.forwardRef(((e,n)=>{const{isOpen:r}=e,a=k(e,["isOpen"]),i=o(),s=Ae(),c=Xr({height:r?s.height:0});return d((()=>{r&&i.current.reset()}),[r]),y(n,(()=>i.current)),t($a,Object.assign({style:c},{children:t("div",Object.assign({ref:s.ref,inert:r?void 0:""},{children:t(_c,Object.assign({ref:i},a))}))}))})),kc=$.div`
    position: relative;
    height: 100%;
    display: flex;
    flex: 1;

    ${e=>{if(e.$wrap)return D`
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
`,Mc=$.div`
    width: 100%; // Force next flex item to break to next line
`,Ec=$.div`
    display: flex;
    flex: 1;
    align-items: center;
`,Bc=$(j)`
    color: ${as.Neutral[3]};
    width: 1.125rem;
    height: 1.125rem;
    flex-shrink: 0;
    margin: 0 0.5rem;
    align-self: center;
`,Ac=$.div`
    position: absolute;
    background: ${e=>e.$error?as.Validation.Red.Border(e):as.Primary(e)};
    height: 0.125rem;
    // half - half padding - half icon width
    width: calc(50% - 0.5rem - (1.125rem / 2));
    transition: left 350ms ease-in-out, opacity 350ms ease-in-out;
    left: 0;
    bottom: 0;

    ${e=>{switch(e.$position){case"start":return D`
                    opacity: 1;
                `;case"end":return D`
                    left: calc(50% + 1rem);
                    opacity: 1;
                `;case"none":return D`
                    opacity: 0;
                `}}}

    ${e=>{if(e.$wrap)return D`
                display: none;
            `}}
`,Cc=({children:n,currentActive:r,error:a,className:i,wrap:o})=>{const[s,c]=n;return e(kc,Object.assign({className:i,$wrap:o},{children:[t(Ec,Object.assign({"data-id":"range-container-elem1-container"},{children:s})),t(Bc,{}),o&&t(Mc,{}),t(Ec,Object.assign({"data-id":"range-container-elem2-container"},{children:c})),t(Ac,{"data-id":"range-container-indicator",$position:r,$error:a,$wrap:o})]}))},Pc={collections:{base:{InputBoxShadow:D`
        inset 0 0 4px 0px ${as.Shadow.Accent}
    `,InputErrorBoxShadow:D`
        inset 0 0 4px 0px ${as.Shadow.Red}
    `,ElevationBoxShadow:D`
      0px 2px 8px ${as.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}}},rbs:{InputBoxShadow:D`
        inset 0 0 3px 0px ${as.Shadow.Accent}
    `,InputErrorBoxShadow:D`
        inset 0 0 3px 0px ${as.Shadow.Red}
    `,ElevationBoxShadow:D`
      0px 2px 8px ${as.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}}}},defaultValue:"base"},Hc=e=>t=>{var n;const r=t.theme,a=es(Pc,r[ts.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?Ko(a,e,r.options.designToken):Ko(a,e)},Rc=Hc("InputBoxShadow"),Tc=Hc("InputErrorBoxShadow"),Ic=(Hc("ElevationBoxShadow"),Hc("Table.Header"),Hc("Table.Cell.Primary"),Hc("Table.Cell.Secondary"),Hc("Table.Cell.Selected"),Hc("Table.Cell.Hover"),$.div`
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid ${as.Neutral[5]};
    border-radius: 4px;
    background: ${as.Neutral[8]};
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};

    :focus-within {
        border: 1px solid ${as.Accent.Light[1]};
        box-shadow: ${Rc};
    }

    ${e=>e.$readOnly?D`
                border: 1px solid transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    border: 1px solid transparent;
                    box-shadow: none;
                }
            `:e.$disabled?D`
                background: ${as.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    border: 1px solid ${as.Neutral[5]};
                    box-shadow: none;
                }
            `:e.$error?D`
                border: 1px solid ${as.Validation.Red.Border};

                :focus-within {
                    border: 1px solid ${as.Validation.Red.Border};
                    box-shadow: ${Tc};
                }
            `:void 0}
`),Yc=$.input`
    ${bs("Body","regular")}
    color: ${as.Neutral[1]};
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
        color: ${as.Neutral[3]};
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
`,Lc=$.div`
    display: flex;
    align-items: center;
    position: relative;

    flex: 1;
`,zc=$.div`
    display: flex;
    align-items: center;

    ${e=>{if(e.$hover)return D`
                ${Nc}, ${Qc} {
                    color: ${as.Neutral[4]};
                }
            `}}
`,Nc=$(Yc)`
    background: transparent;
    text-align: center;
`,Wc=$(Nc)`
    width: 2rem;
    margin-right: 0.25rem;
`,Vc=$(Nc)`
    width: 2.5rem;
`,qc=$(Nc)`
    width: 3rem;
    margin-left: 0.25rem;
`,Qc=$($s.Body)`
    ${e=>{if(e.$inactive)return D`
                color: ${as.Neutral[3](e)};
            `}}
`,Uc=$.div`
    ${bs("Body","regular")}
    background-color: ${as.Neutral[8]};
    color: ${as.Neutral[3]};
    position: absolute;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    ${e=>e.$disabled?D`
                background-color: ${as.Neutral[6](e)};
                cursor: not-allowed;
            `:e.$hide?D`
                display: none;
            `:void 0}
`;A.extend(Oa);const Zc=a.forwardRef((({disabled:n,readOnly:r,names:a,value:i,focused:c,hoverValue:l,placeholder:u,label:h,onChange:f,onFocus:p,onBlur:m},g)=>{const[v,b,w]=Na(""),[$,S,D]=Na(""),[x,O,F]=Na(""),[_,j]=s("none"),[k,M]=s(!1),E=o(null),B=o(null),C=o(null),P=o(null),[H,R,T]=N(l);d((()=>{const[e="",t="",n=""]=N(i);b(e),S(t),O(n)}),[i]),d((()=>{c||j("none"),c&&(M(!0),E.current.contains(document.activeElement)||B.current.focus())}),[c]),y(g,(()=>({ref:E,resetPlaceholder(){M(!1)},resetInput(){const[e="",t="",n=""]=N(i);b(e),S(t),O(n)}})),[i]);const I=e=>{e.target.select();const t=e.target.name;j(t)},Y=e=>{const[t,n,r]=a,i={[t]:w.current,[n]:D.current,[r]:F.current},o=e.target.name,s=i[o],c=o!==r?za.padValue(s,!0):s;switch(o){case t:i[t]=c,b(c);break;case n:i[n]=c,S(c)}const l=`${i[r]}-${i[n]}-${i[t]}`,u=A(l,"YYYY-MM-DD",!0).isValid(),d=!i[t]&&!i[n]&&!i[r];u&&s!==c&&f(l),E.current.contains(e.relatedTarget)||(j("none"),null==m||m(d||u))},L=e=>{if(l)return;const t=e.target.name,n=e.target.value.replace(/[^0-9]/g,""),r={day:v,month:$,year:x};switch(t){case a[0]:r.day=n,b(n),2===n.length&&C.current.focus();break;case a[1]:r.month=n,S(n),2===n.length&&P.current.focus();break;case a[2]:r.year=n,O(n)}if(!r.day&&!r.month&&!r.year)return void f("");const i=`${r.year}-${r.month}-${r.day}`;A(i,"YYYY-MM-DD",!0).isValid()&&f(i)},z=e=>{"Backspace"!==e.code&&"Backspace"!==e.key||(_===a[1]&&0===$.length&&B.current.focus(),_===a[2]&&0===x.length&&C.current.focus())};function N(e){if(e){const t=A(e,"YYYY-MM-DD");return[za.padValue(t.date().toString()),za.padValue((t.month()+1).toString()),t.year().toString()]}return[void 0,void 0,void 0]}return e(Lc,Object.assign({role:"group","aria-label":h,onClick:()=>{n||r||(M(!0),E.current.contains(document.activeElement)||B.current.focus())},onFocus:()=>{n||(M(!0),c||p())}},{children:[e(zc,Object.assign({ref:E,$hover:!!l},{children:[t(Wc,{ref:B,name:a[0],maxLength:2,value:null!=H?H:v,onFocus:I,onBlur:Y,onChange:L,type:"text",inputMode:"numeric",pattern:"[0-9]{2}","data-testid":`${a[0]}-input`,"aria-label":"day",disabled:n,readOnly:r,tabIndex:r?-1:0,autoComplete:"off",placeholder:_!==a[0]||r?"DD":""}),t(Qc,Object.assign({$inactive:0===v.length},{children:"/"})),t(Vc,{ref:C,name:a[1],maxLength:2,value:null!=R?R:$,onFocus:I,onBlur:Y,onChange:L,onKeyDown:z,type:"text",inputMode:"numeric",pattern:"[0-9]{2}","data-testid":`${a[1]}-input`,"aria-label":"month",disabled:n,readOnly:r,tabIndex:r?-1:0,autoComplete:"off",placeholder:_!==a[1]||r?"MM":""}),t(Qc,Object.assign({$inactive:0===$.length},{children:"/"})),t(qc,{ref:P,name:a[2],maxLength:4,value:null!=T?T:x,onFocus:I,onBlur:Y,onChange:L,onKeyDown:z,type:"text",inputMode:"numeric",pattern:"[0-9]{4}","data-testid":`${a[2]}-input`,"aria-label":"year",disabled:n,readOnly:r,tabIndex:r?-1:0,autoComplete:"off",placeholder:_!==a[2]||r?"YYYY":""})]})),(()=>{if(!i&&!r&&u)return t(Uc,Object.assign({$hide:k,$disabled:n},{children:u}))})()]}))})),Gc=(e,t,n)=>{const r=[];e&&r.push(`[${e}]`),r.push(t,n),console.log(...r)},Xc=$(Ic)`
    ${e=>e.$wrap&&D`
            padding: 0.75rem 1rem;
        `}
`,Jc=$.div`
    display: flex;
    align-items: center;
    height: calc(3rem - 2px); // exclude top and bottom borders
    width: 100%;

    ${e=>e.$wrap&&D`
            height: fit-content;
        `}
`,Kc={initialStart:"",initialEnd:"",selectedStart:"",selectedEnd:"",currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1},el=n=>{var{minDate:r,maxDate:a,disabled:i,disabledDates:c,error:l,value:u,valueEnd:h,onChange:f,onFocus:m,onBlur:g,onYearMonthDisplayChange:y,withButton:b=!0,variant:w="range",numberOfDays:$=7,readOnly:S,id:D,allowDisabledSelection:x}=n,O=k(n,["minDate","maxDate","disabled","disabledDates","error","value","valueEnd","onChange","onFocus","onBlur","onYearMonthDisplayChange","withButton","variant","numberOfDays","readOnly","id","allowDisabledSelection"]);const[F,_]=s(),[j,M]=s(void 0),[E,B]=s(!1),[P,H]=s(!1),R="week"===w,I="fixed-range"===w,[{selectedStart:Y,selectedEnd:L,currentFocus:z,calendarOpen:N,isStartDirty:W,isEndDirty:V},q]=(({initialState:e,reducers:t,name:n,debug:r})=>{const[a,i]=v(((e,n)=>t[n.type]?t[n.type](e,n.payload):e),e);return[a,Object.fromEntries(Object.keys(t).map((e=>[e,t=>{r&&Gc(n,e,t),i({type:e,payload:t})}])))]})({name:"date-range-input",initialState:Kc,reducers:{blur:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),changeStart:(e,t)=>Object.assign(Object.assign({},e),{selectedStart:t,isStartDirty:!0}),changeEnd:(e,t)=>Object.assign(Object.assign({},e),{selectedEnd:t,isEndDirty:!0}),reselectStart:e=>Object.assign(Object.assign({},e),{selectedStart:"",currentFocus:"start"}),reselectEnd:e=>Object.assign(Object.assign({},e),{selectedEnd:"",currentFocus:"end"}),focus:(e,t)=>Object.assign(Object.assign({},e),{currentFocus:R?"none":I?"start":t,calendarOpen:!S}),cancel:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1}),done:(e,t)=>Object.assign(Object.assign({},e),{selectedStart:t.start,selectedEnd:t.end,initialStart:t.start,initialEnd:t.end,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),resetStart:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart}),resetEnd:e=>Object.assign(Object.assign({},e),{selectedEnd:e.initialEnd}),resetRange:(e,t)=>Object.assign(Object.assign({},e),{initialStart:t.start,selectedStart:t.start,initialEnd:t.end,selectedEnd:t.end})}}),Q=o(!1),U=o(),Z=o(),G=o(),X=o(),J=C.exports.useMediaQuery({maxWidth:T.mobileL}),K=(({maxWidth:e,targetRef:t})=>{const[n,r]=s(!1);return Ae({targetRef:t,refreshMode:"throttle",refreshRate:300,handleHeight:!1,onResize:p((t=>{r(t<=e)}),[e])}),n})({maxWidth:320,targetRef:U}),ee=b||J;d((()=>{q.resetRange({start:Ya.sanitizeInput(u),end:Ya.sanitizeInput(h)})}),[u,h]),d((()=>{"start"===z?_(Y):"end"===z&&_(L)}),[z]);const te=e=>{if(se(e))return void(Q.current=!0);if(q.changeStart(e),Z.current.setCalendarDate(e),Q.current=!1,!e)return void(ee||L||!V||(q.resetRange({start:"",end:""}),null==f||f("","")));if(!L)return void q.focus("end");if(A(e).isAfter(L,"day"))q.reselectEnd();else{if(V)return ee?void 0:(q.done({start:e,end:L}),void(null==f||f(e,L)));q.focus("end")}},ne=e=>{if(se(e))return void(Q.current=!0);if(q.changeEnd(e),Z.current.setCalendarDate(e),!e)return void(ee||Y||!W||(q.resetRange({start:"",end:""}),null==f||f("","")));if(!Y)return void q.focus("start");if(A(e).isBefore(Y,"day"))q.reselectStart();else{if(W)return ee?void 0:(q.done({start:Y,end:e}),void(null==f||f(Y,e)));q.focus("start")}},re=e=>{if(se(e))return void(Q.current=!0);if(q.changeStart(e),Z.current.setCalendarDate(e),Q.current=!1,!e)return void(ee?q.changeEnd(""):(q.resetRange({start:"",end:""}),null==f||f("","")));const t=A(e).format("YYYY-MM-DD"),n=A(t).add($-1,"day").format("YYYY-MM-DD");return q.changeStart(t),q.changeEnd(n),Q.current=!1,ee?void 0:(q.done({start:t,end:n}),void(null==f||f(t,n)))},ae=e=>()=>{S||(q.focus(e),ie(),oe(),m&&m())},ie=()=>{if(R){const e=Ia.toDayjs(Y).startOf("week").format("YYYY-MM-DD");B(!0),H(!0),_(e)}},oe=()=>{I&&(H(!0),_(Y))},se=e=>!x&&e&&Ya.isDateDisabled(e,{disabledDates:c,minDate:r,maxDate:a}),ce=e=>{let t={start:void 0,end:void 0};switch(w){case"range":t={start:"start"===z?j:void 0,end:"end"===z?j:void 0};break;case"week":if(!j)return;t={start:A(j).startOf("week").format("YYYY-MM-DD"),end:A(j).endOf("week").format("YYYY-MM-DD")};break;case"fixed-range":if(!j)return;t={start:A(j).format("YYYY-MM-DD"),end:A(j).add($-1,"day").format("YYYY-MM-DD")}}return t[e]};return e(Xc,Object.assign({ref:U,$disabled:i,$readOnly:S,$error:l,$wrap:K,id:D,"data-testid":O["data-testid"],onBlur:e=>{U.current.contains(e.relatedTarget)||(q.blur(),B(!1),H(!1),G.current.resetPlaceholder(),X.current.resetPlaceholder(),null==g||g())},onKeyDown:e=>{"Escape"===e.code&&q.blur(),"Enter"!==e.code||ee||(Y&&L?(q.done({start:Y,end:L}),null==f||f(Y,L)):q.blur())}},O,{children:[e(Cc,Object.assign({currentActive:z,wrap:K,error:l},{children:[t(Jc,Object.assign({$wrap:K},{children:t(Zc,{ref:G,placeholder:"From",names:["start-day","start-month","start-year"],value:Y,disabled:i,readOnly:E||S,focused:"start"===z,hoverValue:ce("start"),onChange:I?re:te,onFocus:ae("start"),onBlur:e=>{e&&!Q.current||(q.resetStart(),G.current.resetInput())}})})),t(Jc,Object.assign({$wrap:K},{children:t(Zc,{ref:X,placeholder:"To",names:["end-day","end-month","end-year"],value:L,disabled:i,readOnly:P||S,focused:"end"===z,hoverValue:ce("end"),onChange:ne,onFocus:ae("end"),onBlur:e=>{e&&!Q.current||(q.resetEnd(),X.current.resetInput())}})}))]})),t(jc,{ref:Z,type:"input",variant:w,initialCalendarDate:F,isOpen:N,withButton:ee,value:Y,endValue:L,selectWithinRange:W||V,currentFocus:z,disabledDates:c,minDate:r,maxDate:a,allowDisabledSelection:x,onSelect:e=>{switch(w){case"week":(e=>{const t=A(e).startOf("week").format("YYYY-MM-DD"),n=A(e).endOf("week").format("YYYY-MM-DD");if(q.changeStart(t),q.changeEnd(n),Q.current=!1,!ee)q.done({start:t,end:n}),null==f||f(t,n)})(e);break;case"fixed-range":re(e);break;default:"start"===z?te(e):"end"===z&&ne(e)}},onDismiss:e=>{switch(e){case"reset":q.cancel();break;case"confirmed":q.done({start:Y,end:L}),null==f||f(Y,L)}},onHover:e=>{M(e)},onYearMonthDisplayChange:y,numberOfDays:$})]}))};export{el as DateRangeInput};
//# sourceMappingURL=index.js.map
