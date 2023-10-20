import{jsxs as e,jsx as t,Fragment as n}from"react/jsx-runtime";import*as r from"react";import i,{cloneElement as a,useRef as o,useState as s,isValidElement as l,createRef as c,PureComponent as u,useEffect as d,useLayoutEffect as h,forwardRef as f,useCallback as p,useContext as m,useMemo as g,useImperativeHandle as y,useReducer as v}from"react";import{findDOMNode as b,unstable_batchedUpdates as $}from"react-dom";import w,{keyframes as S,css as x}from"styled-components";import{ChevronDownIcon as D}from"@lifesg/react-icons/chevron-down";import{ChevronLeftIcon as O}from"@lifesg/react-icons/chevron-left";import{ChevronRightIcon as _}from"@lifesg/react-icons/chevron-right";import{ExternalIcon as F}from"@lifesg/react-icons/external";import{ArrowRightIcon as j}from"@lifesg/react-icons";function k(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}var M="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},B={exports:{}};B.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",i="second",a="minute",o="hour",s="day",l="week",c="month",u="quarter",d="year",h="date",f="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},y=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},v={s:y,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+y(r,2,"0")+":"+y(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,c),a=n-i<0,o=t.clone().add(r+(a?-1:1),c);return+(-(r+(n-i)/(a?i-o:o-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:d,w:l,d:s,D:h,h:o,m:a,s:i,ms:r,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",$={};$[b]=g;var w=function(e){return e instanceof O},S=function e(t,n,r){var i;if(!t)return b;if("string"==typeof t){var a=t.toLowerCase();$[a]&&(i=a),n&&($[a]=n,i=a);var o=t.split("-");if(!i&&o.length>1)return e(o[0])}else{var s=t.name;$[s]=t,i=s}return!r&&i&&(b=i),i||!r&&b},x=function(e,t){if(w(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new O(n)},D=v;D.l=S,D.i=w,D.w=function(e,t){return x(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var O=function(){function g(e){this.$L=S(e.locale,null,!0),this.parse(e)}var y=g.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(D.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(p);if(r){var i=r[2]-1||0,a=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return D},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(e,t){var n=x(e);return this.startOf(t)<=n&&n<=this.endOf(t)},y.isAfter=function(e,t){return x(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<x(e)},y.$g=function(e,t,n){return D.u(e)?this[t]:this.set(n,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var n=this,r=!!D.u(t)||t,u=D.p(e),f=function(e,t){var i=D.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?i:i.endOf(s)},p=function(e,t){return D.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},m=this.$W,g=this.$M,y=this.$D,v="set"+(this.$u?"UTC":"");switch(u){case d:return r?f(1,0):f(31,11);case c:return r?f(1,g):f(0,g+1);case l:var b=this.$locale().weekStart||0,$=(m<b?m+7:m)-b;return f(r?y-$:y+(6-$),g);case s:case h:return p(v+"Hours",0);case o:return p(v+"Minutes",1);case a:return p(v+"Seconds",2);case i:return p(v+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var n,l=D.p(e),u="set"+(this.$u?"UTC":""),f=(n={},n[s]=u+"Date",n[h]=u+"Date",n[c]=u+"Month",n[d]=u+"FullYear",n[o]=u+"Hours",n[a]=u+"Minutes",n[i]=u+"Seconds",n[r]=u+"Milliseconds",n)[l],p=l===s?this.$D+(t-this.$W):t;if(l===c||l===d){var m=this.clone().set(h,1);m.$d[f](p),m.init(),this.$d=m.set(h,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[D.p(e)]()},y.add=function(r,u){var h,f=this;r=Number(r);var p=D.p(u),m=function(e){var t=x(f);return D.w(t.date(t.date()+Math.round(e*r)),f)};if(p===c)return this.set(c,this.$M+r);if(p===d)return this.set(d,this.$y+r);if(p===s)return m(1);if(p===l)return m(7);var g=(h={},h[a]=t,h[o]=n,h[i]=e,h)[p]||1,y=this.$d.getTime()+r*g;return D.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var r=e||"YYYY-MM-DDTHH:mm:ssZ",i=D.z(this),a=this.$H,o=this.$m,s=this.$M,l=n.weekdays,c=n.months,u=function(e,n,i,a){return e&&(e[n]||e(t,r))||i[n].slice(0,a)},d=function(e){return D.s(a%12||12,e,"0")},h=n.meridiem||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:D.s(s+1,2,"0"),MMM:u(n.monthsShort,s,c,3),MMMM:u(c,s),D:this.$D,DD:D.s(this.$D,2,"0"),d:String(this.$W),dd:u(n.weekdaysMin,this.$W,l,2),ddd:u(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(a),HH:D.s(a,2,"0"),h:d(1),hh:d(2),a:h(a,o,!0),A:h(a,o,!1),m:String(o),mm:D.s(o,2,"0"),s:String(this.$s),ss:D.s(this.$s,2,"0"),SSS:D.s(this.$ms,3,"0"),Z:i};return r.replace(m,(function(e,t){return t||p[e]||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,h,f){var p,m=D.p(h),g=x(r),y=(g.utcOffset()-this.utcOffset())*t,v=this-g,b=D.m(this,g);return b=(p={},p[d]=b/12,p[c]=b,p[u]=b/3,p[l]=(v-y)/6048e5,p[s]=(v-y)/864e5,p[o]=v/n,p[a]=v/t,p[i]=v/e,p)[m]||v,f?b:D.a(b)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return $[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=S(e,t,!0);return r&&(n.$L=r),n},y.clone=function(){return D.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},g}(),_=O.prototype;return x.prototype=_,[["$ms",r],["$s",i],["$m",a],["$H",o],["$W",s],["$M",c],["$y",d],["$D",h]].forEach((function(e){_[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),x.extend=function(e,t){return e.$i||(e(t,O,x),e.$i=!0),x},x.locale=S,x.isDayjs=w,x.unix=function(e){return x(1e3*e)},x.en=$[b],x.Ls=$,x.p={},x}();var P,E=B.exports,A={exports:{}};P=e=>(()=>{var t={"./node_modules/css-mediaquery/index.js":
/*!**********************************************!*\
  !*** ./node_modules/css-mediaquery/index.js ***!
  \**********************************************/(e,t)=>{t.match=function(e,t){return s(e).some((function(e){var n=e.inverse,r="all"===e.type||t.type===e.type;if(r&&n||!r&&!n)return!1;var i=e.expressions.every((function(e){var n=e.feature,r=e.modifier,i=e.value,a=t[n];if(!a)return!1;switch(n){case"orientation":case"scan":return a.toLowerCase()===i.toLowerCase();case"width":case"height":case"device-width":case"device-height":i=u(i),a=u(a);break;case"resolution":i=c(i),a=c(a);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":i=l(i),a=l(a);break;case"grid":case"color":case"color-index":case"monochrome":i=parseInt(i,10)||1,a=parseInt(a,10)||0}switch(r){case"min":return a>=i;case"max":return a<=i;default:return a===i}}));return i&&!n||!i&&n}))},t.parse=s;var n=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,r=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,i=/^(?:(min|max)-)?(.+)/,a=/(em|rem|px|cm|mm|in|pt|pc)?$/,o=/(dpi|dpcm|dppx)?$/;function s(e){return e.split(",").map((function(e){var t=(e=e.trim()).match(n),a=t[1],o=t[2],s=t[3]||"",l={};return l.inverse=!!a&&"not"===a.toLowerCase(),l.type=o?o.toLowerCase():"all",s=s.match(/\([^\)]+\)/g)||[],l.expressions=s.map((function(e){var t=e.match(r),n=t[1].toLowerCase().match(i);return{modifier:n[1],feature:n[2],value:t[2]}})),l}))}function l(e){var t,n=Number(e);return n||(n=(t=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/t[2]),n}function c(e){var t=parseFloat(e);switch(String(e).match(o)[1]){case"dpcm":return t/2.54;case"dppx":return 96*t;default:return t}}function u(e){var t=parseFloat(e);switch(String(e).match(a)[1]){case"em":case"rem":return 16*t;case"cm":return 96*t/2.54;case"mm":return 96*t/2.54/10;case"in":return 96*t;case"pt":return 72*t;case"pc":return 72*t/12;default:return t}}},"./node_modules/hyphenate-style-name/index.js":
/*!****************************************************!*\
  !*** ./node_modules/hyphenate-style-name/index.js ***!
  \****************************************************/(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var r=/[A-Z]/g,i=/^ms-/,a={};function o(e){return"-"+e.toLowerCase()}const s=function(e){if(a.hasOwnProperty(e))return a[e];var t=e.replace(r,o);return a[e]=i.test(t)?"-"+t:t}},"./node_modules/matchmediaquery/index.js":
/*!***********************************************!*\
  !*** ./node_modules/matchmediaquery/index.js ***!
  \***********************************************/(e,t,n)=>{var r=n(/*! css-mediaquery */"./node_modules/css-mediaquery/index.js").match,i="undefined"!=typeof window?window.matchMedia:null;function a(e,t,n){var a=this;if(i&&!n){var o=i.call(window,e);this.matches=o.matches,this.media=o.media,o.addListener(s)}else this.matches=r(e,t),this.media=e;function s(e){a.matches=e.matches,a.media=e.media}this.addListener=function(e){o&&o.addListener(e)},this.removeListener=function(e){o&&o.removeListener(e)},this.dispose=function(){o&&o.removeListener(s)}}e.exports=function(e,t,n){return new a(e,t,n)}},"./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/e=>{
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,i){for(var a,o,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var c in a=Object(arguments[l]))n.call(a,c)&&(s[c]=a[c]);if(t){o=t(a);for(var u=0;u<o.length;u++)r.call(a,o[u])&&(s[o[u]]=a[o[u]])}}return s}},"./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/(e,t,n)=>{var r,i=n(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),a={},o=n(/*! ./lib/has */"./node_modules/prop-types/lib/has.js");function s(e,t,n,s,l){for(var c in e)if(o(e,c)){var u;try{if("function"!=typeof e[c]){var d=Error((s||"React class")+": "+n+" type `"+c+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[c]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw d.name="Invariant Violation",d}u=e[c](t,c,s,n,null,i)}catch(e){u=e}if(!u||u instanceof Error||r((s||"React class")+": type specification of "+n+" `"+c+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof u+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),u instanceof Error&&!(u.message in a)){a[u.message]=!0;var h=l?l():"";r("Failed "+n+" type: "+u.message+(null!=h?h:""))}}}r=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},s.resetWarningCache=function(){a={}},e.exports=s},"./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/(e,t,n)=>{var r,i=n(/*! react-is */"./node_modules/react-is/index.js"),a=n(/*! object-assign */"./node_modules/object-assign/index.js"),o=n(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),s=n(/*! ./lib/has */"./node_modules/prop-types/lib/has.js"),l=n(/*! ./checkPropTypes */"./node_modules/prop-types/checkPropTypes.js");function c(){return null}r=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},e.exports=function(e,t){var n="function"==typeof Symbol&&Symbol.iterator,u="@@iterator",d="<<anonymous>>",h={array:g("array"),bigint:g("bigint"),bool:g("boolean"),func:g("function"),number:g("number"),object:g("object"),string:g("string"),symbol:g("symbol"),any:m(c),arrayOf:function(e){return m((function(t,n,r,i,a){if("function"!=typeof e)return new p("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var s=t[n];if(!Array.isArray(s))return new p("Invalid "+i+" `"+a+"` of type `"+b(s)+"` supplied to `"+r+"`, expected an array.");for(var l=0;l<s.length;l++){var c=e(s,l,r,i,a+"["+l+"]",o);if(c instanceof Error)return c}return null}))},element:m((function(t,n,r,i,a){var o=t[n];return e(o)?null:new p("Invalid "+i+" `"+a+"` of type `"+b(o)+"` supplied to `"+r+"`, expected a single ReactElement.")})),elementType:m((function(e,t,n,r,a){var o=e[t];return i.isValidElementType(o)?null:new p("Invalid "+r+" `"+a+"` of type `"+b(o)+"` supplied to `"+n+"`, expected a single ReactElement type.")})),instanceOf:function(e){return m((function(t,n,r,i,a){if(!(t[n]instanceof e)){var o=e.name||d;return new p("Invalid "+i+" `"+a+"` of type `"+((s=t[n]).constructor&&s.constructor.name?s.constructor.name:d)+"` supplied to `"+r+"`, expected instance of `"+o+"`.")}var s;return null}))},node:m((function(e,t,n,r,i){return v(e[t])?null:new p("Invalid "+r+" `"+i+"` supplied to `"+n+"`, expected a ReactNode.")})),objectOf:function(e){return m((function(t,n,r,i,a){if("function"!=typeof e)return new p("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var l=t[n],c=b(l);if("object"!==c)return new p("Invalid "+i+" `"+a+"` of type `"+c+"` supplied to `"+r+"`, expected an object.");for(var u in l)if(s(l,u)){var d=e(l,u,r,i,a+"."+u,o);if(d instanceof Error)return d}return null}))},oneOf:function(e){return Array.isArray(e)?m((function(t,n,r,i,a){for(var o=t[n],s=0;s<e.length;s++)if(f(o,e[s]))return null;var l=JSON.stringify(e,(function(e,t){return"symbol"===$(t)?String(t):t}));return new p("Invalid "+i+" `"+a+"` of value `"+String(o)+"` supplied to `"+r+"`, expected one of "+l+".")})):(r(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),c)},oneOfType:function(e){if(!Array.isArray(e))return r("Invalid argument supplied to oneOfType, expected an instance of array."),c;for(var t=0;t<e.length;t++){var n=e[t];if("function"!=typeof n)return r("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+w(n)+" at index "+t+"."),c}return m((function(t,n,r,i,a){for(var l=[],c=0;c<e.length;c++){var u=(0,e[c])(t,n,r,i,a,o);if(null==u)return null;u.data&&s(u.data,"expectedType")&&l.push(u.data.expectedType)}return new p("Invalid "+i+" `"+a+"` supplied to `"+r+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return m((function(t,n,r,i,a){var s=t[n],l=b(s);if("object"!==l)return new p("Invalid "+i+" `"+a+"` of type `"+l+"` supplied to `"+r+"`, expected `object`.");for(var c in e){var u=e[c];if("function"!=typeof u)return y(r,i,a,c,$(u));var d=u(s,c,r,i,a+"."+c,o);if(d)return d}return null}))},exact:function(e){return m((function(t,n,r,i,l){var c=t[n],u=b(c);if("object"!==u)return new p("Invalid "+i+" `"+l+"` of type `"+u+"` supplied to `"+r+"`, expected `object`.");var d=a({},t[n],e);for(var h in d){var f=e[h];if(s(e,h)&&"function"!=typeof f)return y(r,i,l,h,$(f));if(!f)return new p("Invalid "+i+" `"+l+"` key `"+h+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var m=f(c,h,r,i,l+"."+h,o);if(m)return m}return null}))}};function f(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function p(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function m(e){var n={},i=0;function a(a,s,l,c,u,h,f){if(c=c||d,h=h||l,f!==o){if(t){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}if("undefined"!=typeof console){var g=c+":"+l;!n[g]&&i<3&&(r("You are manually calling a React.PropTypes validation function for the `"+h+"` prop on `"+c+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),n[g]=!0,i++)}}return null==s[l]?a?null===s[l]?new p("The "+u+" `"+h+"` is marked as required in `"+c+"`, but its value is `null`."):new p("The "+u+" `"+h+"` is marked as required in `"+c+"`, but its value is `undefined`."):null:e(s,l,c,u,h)}var s=a.bind(null,!1);return s.isRequired=a.bind(null,!0),s}function g(e){return m((function(t,n,r,i,a,o){var s=t[n];return b(s)!==e?new p("Invalid "+i+" `"+a+"` of type `"+$(s)+"` supplied to `"+r+"`, expected `"+e+"`.",{expectedType:e}):null}))}function y(e,t,n,r,i){return new p((e||"React class")+": "+t+" type `"+n+"."+r+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+i+"`.")}function v(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(v);if(null===t||e(t))return!0;var r=function(e){var t=e&&(n&&e[n]||e[u]);if("function"==typeof t)return t}(t);if(!r)return!1;var i,a=r.call(t);if(r!==t.entries){for(;!(i=a.next()).done;)if(!v(i.value))return!1}else for(;!(i=a.next()).done;){var o=i.value;if(o&&!v(o[1]))return!1}return!0;default:return!1}}function b(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function $(e){if(null==e)return""+e;var t=b(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function w(e){var t=$(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return p.prototype=Error.prototype,h.checkPropTypes=l,h.resetWarningCache=l.resetWarningCache,h.PropTypes=h,h}},"./node_modules/prop-types/index.js":
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
  \***********************************************************/(e,t)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,n=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,i=e?Symbol.for("react.fragment"):60107,a=e?Symbol.for("react.strict_mode"):60108,o=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,u=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,f=e?Symbol.for("react.suspense_list"):60120,p=e?Symbol.for("react.memo"):60115,m=e?Symbol.for("react.lazy"):60116,g=e?Symbol.for("react.block"):60121,y=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,b=e?Symbol.for("react.scope"):60119;function $(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:var f=e.type;switch(f){case c:case u:case i:case o:case a:case h:return f;default:var g=f&&f.$$typeof;switch(g){case l:case d:case m:case p:case s:return g;default:return t}}case r:return t}}}var w=c,S=u,x=l,D=s,O=n,_=d,F=i,j=m,k=p,M=r,B=o,P=a,E=h,A=!1;function C(e){return $(e)===u}t.AsyncMode=w,t.ConcurrentMode=S,t.ContextConsumer=x,t.ContextProvider=D,t.Element=O,t.ForwardRef=_,t.Fragment=F,t.Lazy=j,t.Memo=k,t.Portal=M,t.Profiler=B,t.StrictMode=P,t.Suspense=E,t.isAsyncMode=function(e){return A||(A=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),C(e)||$(e)===c},t.isConcurrentMode=C,t.isContextConsumer=function(e){return $(e)===l},t.isContextProvider=function(e){return $(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return $(e)===d},t.isFragment=function(e){return $(e)===i},t.isLazy=function(e){return $(e)===m},t.isMemo=function(e){return $(e)===p},t.isPortal=function(e){return $(e)===r},t.isProfiler=function(e){return $(e)===o},t.isStrictMode=function(e){return $(e)===a},t.isSuspense=function(e){return $(e)===h},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===u||e===o||e===a||e===h||e===f||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===p||e.$$typeof===s||e.$$typeof===l||e.$$typeof===d||e.$$typeof===y||e.$$typeof===v||e.$$typeof===b||e.$$typeof===g)},t.typeOf=$}()},"./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/(e,t,n)=>{e.exports=n(/*! ./cjs/react-is.development.js */"./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/shallow-equal/dist/index.esm.js ***!
  \******************************************************/(e,t,n)=>{function r(e,t){if(e===t)return!0;if(!e||!t)return!1;var n=Object.keys(e),r=Object.keys(t),i=n.length;if(r.length!==i)return!1;for(var a=0;a<i;a++){var o=n[a];if(e[o]!==t[o]||!Object.prototype.hasOwnProperty.call(t,o))return!1}return!0}function i(e,t){if(e===t)return!0;if(!e||!t)return!1;var n=e.length;if(t.length!==n)return!1;for(var r=0;r<n;r++)if(e[r]!==t[r])return!1;return!0}n.r(t),n.d(t,{shallowEqualArrays:()=>i,shallowEqualObjects:()=>r})},"./src/Component.ts":
/*!**************************!*\
  !*** ./src/Component.ts ***!
  \**************************/function(e,t,n){var r=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=i(n(/*! ./useMediaQuery */"./src/useMediaQuery.ts"));t.default=function(e){var t=e.children,n=e.device,i=e.onChange,o=r(e,["children","device","onChange"]),s=(0,a.default)(o,n,i);return"function"==typeof t?t(s):s?t:null}},"./src/Context.ts":
/*!************************!*\
  !*** ./src/Context.ts ***!
  \************************/(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var r=(0,n(/*! react */"react").createContext)(void 0);t.default=r},"./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Context=t.toQuery=t.useMediaQuery=t.default=void 0;var i=r(n(/*! ./useMediaQuery */"./src/useMediaQuery.ts"));t.useMediaQuery=i.default;var a=r(n(/*! ./Component */"./src/Component.ts"));t.default=a.default;var o=r(n(/*! ./toQuery */"./src/toQuery.ts"));t.toQuery=o.default;var s=r(n(/*! ./Context */"./src/Context.ts"));t.Context=s.default},"./src/mediaQuery.ts":
/*!***************************!*\
  !*** ./src/mediaQuery.ts ***!
  \***************************/function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},r.apply(this,arguments)},i=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=a(n(/*! prop-types */"./node_modules/prop-types/index.js")),s=o.default.oneOfType([o.default.string,o.default.number]),l={all:o.default.bool,grid:o.default.bool,aural:o.default.bool,braille:o.default.bool,handheld:o.default.bool,print:o.default.bool,projection:o.default.bool,screen:o.default.bool,tty:o.default.bool,tv:o.default.bool,embossed:o.default.bool},c={orientation:o.default.oneOf(["portrait","landscape"]),scan:o.default.oneOf(["progressive","interlace"]),aspectRatio:o.default.string,deviceAspectRatio:o.default.string,height:s,deviceHeight:s,width:s,deviceWidth:s,color:o.default.bool,colorIndex:o.default.bool,monochrome:o.default.bool,resolution:s,type:Object.keys(l)},u=i(c,["type"]),d=r({minAspectRatio:o.default.string,maxAspectRatio:o.default.string,minDeviceAspectRatio:o.default.string,maxDeviceAspectRatio:o.default.string,minHeight:s,maxHeight:s,minDeviceHeight:s,maxDeviceHeight:s,minWidth:s,maxWidth:s,minDeviceWidth:s,maxDeviceWidth:s,minColor:o.default.number,maxColor:o.default.number,minColorIndex:o.default.number,maxColorIndex:o.default.number,minMonochrome:o.default.number,maxMonochrome:o.default.number,minResolution:s,maxResolution:s},u),h=r(r({},l),d);t.default={all:h,types:l,matchers:c,features:d}},"./src/toQuery.ts":
/*!************************!*\
  !*** ./src/toQuery.ts ***!
  \************************/function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(n(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),a=r(n(/*! ./mediaQuery */"./src/mediaQuery.ts"));t.default=function(e){var t=[];return Object.keys(a.default.all).forEach((function(n){var r=e[n];null!=r&&t.push(function(e,t){var n=(0,i.default)(e);return"number"==typeof t&&(t="".concat(t,"px")),!0===t?n:!1===t?"not ".concat(n):"(".concat(n,": ").concat(t,")")}(n,r))})),t.join(" and ")}},"./src/useMediaQuery.ts":
/*!******************************!*\
  !*** ./src/useMediaQuery.ts ***!
  \******************************/function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=n(/*! react */"react"),a=r(n(/*! matchmediaquery */"./node_modules/matchmediaquery/index.js")),o=r(n(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),s=n(/*! shallow-equal */"./node_modules/shallow-equal/dist/index.esm.js"),l=r(n(/*! ./toQuery */"./src/toQuery.ts")),c=r(n(/*! ./Context */"./src/Context.ts")),u=function(e){if(e)return Object.keys(e).reduce((function(t,n){return t[(0,o.default)(n)]=e[n],t}),{})},d=function(){var e=(0,i.useRef)(!1);return(0,i.useEffect)((function(){e.current=!0}),[]),e.current},h=function(e){var t=function(){return function(e){return e.query||(0,l.default)(e)}(e)},n=(0,i.useState)(t),r=n[0],a=n[1];return(0,i.useEffect)((function(){var e=t();r!==e&&a(e)}),[e]),r};t.default=function(e,t,n){var r=function(e){var t=(0,i.useContext)(c.default),n=function(){return u(e)||u(t)},r=(0,i.useState)(n),a=r[0],o=r[1];return(0,i.useEffect)((function(){var e=n();(0,s.shallowEqualObjects)(a,e)||o(e)}),[e,t]),a}(t),o=h(e);if(!o)throw new Error("Invalid or missing MediaQuery!");var l=function(e,t){var n=function(){return(0,a.default)(e,t||{},!!t)},r=(0,i.useState)(n),o=r[0],s=r[1],l=d();return(0,i.useEffect)((function(){if(l){var e=n();return s(e),function(){e&&e.dispose()}}}),[e,t]),o}(o,r),f=function(e){var t=(0,i.useState)(e.matches),n=t[0],r=t[1];return(0,i.useEffect)((function(){var t=function(e){r(e.matches)};return e.addListener(t),r(e.matches),function(){e.removeListener(t)}}),[e]),n}(l),p=d();return(0,i.useEffect)((function(){p&&n&&n(f)}),[f]),(0,i.useEffect)((function(){return function(){l&&l.dispose()}}),[]),f}},react:
/*!**************************************************************************************!*\
  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
  \**************************************************************************************/t=>{t.exports=e}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var a=n[e]={exports:{}};return t[e].call(a.exports,a,a.exports,r),a.exports}return r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r("./src/index.ts")})(),A.exports=P(i);const C={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},H=e=>Object.keys(C).reduce(((t,n)=>{const r=C[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),T=H("max-width"),I=(H("min-width"),C);var R=function(e,t){return R=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},R(e,t)};var L=function(){return L=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},L.apply(this,arguments)};var z="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var Y=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},W="object"==typeof z&&z&&z.Object===Object&&z,N="object"==typeof self&&self&&self.Object===Object&&self,V=W||N||Function("return this")(),q=V,Q=function(){return q.Date.now()},U=/\s/;var Z=function(e){for(var t=e.length;t--&&U.test(e.charAt(t)););return t},G=/^\s+/;var X=function(e){return e?e.slice(0,Z(e)+1).replace(G,""):e},J=V.Symbol,K=J,ee=Object.prototype,te=ee.hasOwnProperty,ne=ee.toString,re=K?K.toStringTag:void 0;var ie=function(e){var t=te.call(e,re),n=e[re];try{e[re]=void 0;var r=!0}catch(e){}var i=ne.call(e);return r&&(t?e[re]=n:delete e[re]),i},ae=Object.prototype.toString;var oe=ie,se=function(e){return ae.call(e)},le=J?J.toStringTag:void 0;var ce=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":le&&le in Object(e)?oe(e):se(e)},ue=function(e){return null!=e&&"object"==typeof e};var de=X,he=Y,fe=function(e){return"symbol"==typeof e||ue(e)&&"[object Symbol]"==ce(e)},pe=/^[-+]0x[0-9a-f]+$/i,me=/^0b[01]+$/i,ge=/^0o[0-7]+$/i,ye=parseInt;var ve=Y,be=Q,$e=function(e){if("number"==typeof e)return e;if(fe(e))return NaN;if(he(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=he(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=de(e);var n=me.test(e);return n||ge.test(e)?ye(e.slice(2),n?2:8):pe.test(e)?NaN:+e},we=Math.max,Se=Math.min;var xe=function(e,t,n){var r,i,a,o,s,l,c=0,u=!1,d=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var n=r,a=i;return r=i=void 0,c=t,o=e.apply(a,n)}function p(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function m(){var e=be();if(p(e))return g(e);s=setTimeout(m,function(e){var n=t-(e-l);return d?Se(n,a-(e-c)):n}(e))}function g(e){return s=void 0,h&&r?f(e):(r=i=void 0,o)}function y(){var e=be(),n=p(e);if(r=arguments,i=this,l=e,n){if(void 0===s)return function(e){return c=e,s=setTimeout(m,t),u?f(e):o}(l);if(d)return clearTimeout(s),s=setTimeout(m,t),f(l)}return void 0===s&&(s=setTimeout(m,t)),o}return t=$e(t)||0,ve(n)&&(u=!!n.leading,a=(d="maxWait"in n)?we($e(n.maxWait)||0,t):a,h="trailing"in n?!!n.trailing:h),y.cancel=function(){void 0!==s&&clearTimeout(s),c=0,r=l=i=s=void 0},y.flush=function(){return void 0===s?o:g(be())},y},De=xe,Oe=Y;var _e=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Oe(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),De(e,t,{leading:r,maxWait:t,trailing:i})},Fe=function(e,t,n,r){switch(t){case"debounce":return xe(e,n,r);case"throttle":return _e(e,n,r);default:return e}},je=function(e){return"function"==typeof e},ke=function(){return"undefined"==typeof window},Me=function(e){return e instanceof Element||e instanceof HTMLDocument},Be=function(e,t,n,r){return function(i){var a=i.width,o=i.height;t((function(t){return t.width===a&&t.height===o||t.width===a&&!r||t.height===o&&!n?t:(e&&je(e)&&e(a,o),{width:a,height:o})}))}};!function(e){function t(t){var n=e.call(this,t)||this;n.cancelHandler=function(){n.resizeHandler&&n.resizeHandler.cancel&&(n.resizeHandler.cancel(),n.resizeHandler=null)},n.attachObserver=function(){var e=n.props,t=e.targetRef,r=e.observerOptions;if(!ke()){t&&t.current&&(n.targetRef.current=t.current);var i=n.getElement();i&&(n.observableElement&&n.observableElement===i||(n.observableElement=i,n.resizeObserver.observe(i,r)))}},n.getElement=function(){var e=n.props,t=e.querySelector,r=e.targetDomEl;if(ke())return null;if(t)return document.querySelector(t);if(r&&Me(r))return r;if(n.targetRef&&Me(n.targetRef.current))return n.targetRef.current;var i=b(n);if(!i)return null;switch(n.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},n.createResizeHandler=function(e){var t=n.props,r=t.handleWidth,i=void 0===r||r,a=t.handleHeight,o=void 0===a||a,s=t.onResize;if(i||o){var l=Be(s,n.setState.bind(n),i,o);e.forEach((function(e){var t=e&&e.contentRect||{},r=t.width,i=t.height;!n.skipOnMount&&!ke()&&l({width:r,height:i}),n.skipOnMount=!1}))}},n.getRenderType=function(){var e=n.props,t=e.render,r=e.children;return je(t)?"renderProp":je(r)?"childFunction":l(r)?"child":Array.isArray(r)?"childArray":"parent"};var r=t.skipOnMount,i=t.refreshMode,a=t.refreshRate,o=void 0===a?1e3:a,s=t.refreshOptions;return n.state={width:void 0,height:void 0},n.skipOnMount=r,n.targetRef=c(),n.observableElement=null,ke()||(n.resizeHandler=Fe(n.createResizeHandler,i,o,s),n.resizeObserver=new window.ResizeObserver(n.resizeHandler)),n}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}R(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){ke()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,n=t.render,i=t.children,o=t.nodeType,s=void 0===o?"div":o,l=this.state,c={width:l.width,height:l.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return n&&n(c);case"childFunction":return(e=i)(c);case"child":if((e=i).type&&"string"==typeof e.type){var u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(c,["targetRef"]);return a(e,u)}return a(e,c);case"childArray":return(e=i).map((function(e){return!!e&&a(e,c)}));default:return r.createElement(s,null)}}}(u);var Pe=ke()?d:h;let Ee=Ze();const Ae=e=>Ve(e,Ee);let Ce=Ze();Ae.write=e=>Ve(e,Ce);let He=Ze();Ae.onStart=e=>Ve(e,He);let Te=Ze();Ae.onFrame=e=>Ve(e,Te);let Ie=Ze();Ae.onFinish=e=>Ve(e,Ie);let Re=[];Ae.setTimeout=(e,t)=>{let n=Ae.now()+t,r=()=>{let e=Re.findIndex((e=>e.cancel==r));~e&&Re.splice(e,1),We-=~e?1:0},i={time:n,handler:e,cancel:r};return Re.splice(Le(n),0,i),We+=1,qe(),i};let Le=e=>~(~Re.findIndex((t=>t.time>e))||~Re.length);Ae.cancel=e=>{He.delete(e),Te.delete(e),Ie.delete(e),Ee.delete(e),Ce.delete(e)},Ae.sync=e=>{Ne=!0,Ae.batchedUpdates(e),Ne=!1},Ae.throttle=e=>{let t;function n(){try{e(...t)}finally{t=null}}function r(...e){t=e,Ae.onStart(n)}return r.handler=e,r.cancel=()=>{He.delete(n),t=null},r};let ze="undefined"!=typeof window?window.requestAnimationFrame:()=>{};Ae.use=e=>ze=e,Ae.now="undefined"!=typeof performance?()=>performance.now():Date.now,Ae.batchedUpdates=e=>e(),Ae.catch=console.error,Ae.frameLoop="always",Ae.advance=()=>{"demand"!==Ae.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):Ue()};let Ye=-1,We=0,Ne=!1;function Ve(e,t){Ne?(t.delete(e),e(0)):(t.add(e),qe())}function qe(){Ye<0&&(Ye=0,"demand"!==Ae.frameLoop&&ze(Qe))}function Qe(){~Ye&&(ze(Qe),Ae.batchedUpdates(Ue))}function Ue(){let e=Ye;Ye=Ae.now();let t=Le(Ye);t&&(Ge(Re.splice(0,t),(e=>e.handler())),We-=t),We?(He.flush(),Ee.flush(e?Math.min(64,Ye-e):16.667),Te.flush(),Ce.flush(),Ie.flush()):Ye=-1}function Ze(){let e=new Set,t=e;return{add(n){We+=t!=e||e.has(n)?0:1,e.add(n)},delete:n=>(We-=t==e&&e.has(n)?1:0,e.delete(n)),flush(n){t.size&&(e=new Set,We-=t.size,Ge(t,(t=>t(n)&&e.add(t))),We+=e.size,t=e)}}}function Ge(e,t){e.forEach((e=>{try{t(e)}catch(e){Ae.catch(e)}}))}function Xe(){}const Je={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function Ke(e,t){if(Je.arr(e)){if(!Je.arr(t)||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}return e===t}const et=(e,t)=>e.forEach(t);function tt(e,t,n){if(Je.arr(e))for(let r=0;r<e.length;r++)t.call(n,e[r],`${r}`);else for(const r in e)e.hasOwnProperty(r)&&t.call(n,e[r],r)}const nt=e=>Je.und(e)?[]:Je.arr(e)?e:[e];function rt(e,t){if(e.size){const n=Array.from(e);e.clear(),et(n,t)}}const it=(e,...t)=>rt(e,(e=>e(...t))),at=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent);let ot,st,lt=null,ct=!1,ut=Xe;var dt=Object.freeze({__proto__:null,get createStringInterpolator(){return ot},get to(){return st},get colors(){return lt},get skipAnimation(){return ct},get willAdvance(){return ut},assign:e=>{e.to&&(st=e.to),e.now&&(Ae.now=e.now),void 0!==e.colors&&(lt=e.colors),null!=e.skipAnimation&&(ct=e.skipAnimation),e.createStringInterpolator&&(ot=e.createStringInterpolator),e.requestAnimationFrame&&Ae.use(e.requestAnimationFrame),e.batchedUpdates&&(Ae.batchedUpdates=e.batchedUpdates),e.willAdvance&&(ut=e.willAdvance),e.frameLoop&&(Ae.frameLoop=e.frameLoop)}});const ht=new Set;let ft=[],pt=[],mt=0;const gt={get idle(){return!ht.size&&!ft.length},start(e){mt>e.priority?(ht.add(e),Ae.onStart(yt)):(vt(e),Ae($t))},advance:$t,sort(e){if(mt)Ae.onFrame((()=>gt.sort(e)));else{const t=ft.indexOf(e);~t&&(ft.splice(t,1),bt(e))}},clear(){ft=[],ht.clear()}};function yt(){ht.forEach(vt),ht.clear(),Ae($t)}function vt(e){ft.includes(e)||bt(e)}function bt(e){ft.splice(function(e,t){const n=e.findIndex(t);return n<0?e.length:n}(ft,(t=>t.priority>e.priority)),0,e)}function $t(e){const t=pt;for(let n=0;n<ft.length;n++){const r=ft[n];mt=r.priority,r.idle||(ut(r),r.advance(e),r.idle||t.push(r))}return mt=0,pt=ft,pt.length=0,ft=t,ft.length>0}const wt="[-+]?\\d*\\.?\\d+",St=wt+"%";function xt(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}const Dt=new RegExp("rgb"+xt(wt,wt,wt)),Ot=new RegExp("rgba"+xt(wt,wt,wt,wt)),_t=new RegExp("hsl"+xt(wt,St,St)),Ft=new RegExp("hsla"+xt(wt,St,St,wt)),jt=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,kt=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Mt=/^#([0-9a-fA-F]{6})$/,Bt=/^#([0-9a-fA-F]{8})$/;function Pt(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Et(e,t,n){const r=n<.5?n*(1+t):n+t-n*t,i=2*n-r,a=Pt(i,r,e+1/3),o=Pt(i,r,e),s=Pt(i,r,e-1/3);return Math.round(255*a)<<24|Math.round(255*o)<<16|Math.round(255*s)<<8}function At(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function Ct(e){return(parseFloat(e)%360+360)%360/360}function Ht(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function Tt(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function It(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=Mt.exec(e))?parseInt(t[1]+"ff",16)>>>0:lt&&void 0!==lt[e]?lt[e]:(t=Dt.exec(e))?(At(t[1])<<24|At(t[2])<<16|At(t[3])<<8|255)>>>0:(t=Ot.exec(e))?(At(t[1])<<24|At(t[2])<<16|At(t[3])<<8|Ht(t[4]))>>>0:(t=jt.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=Bt.exec(e))?parseInt(t[1],16)>>>0:(t=kt.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=_t.exec(e))?(255|Et(Ct(t[1]),Tt(t[2]),Tt(t[3])))>>>0:(t=Ft.exec(e))?(Et(Ct(t[1]),Tt(t[2]),Tt(t[3]))|Ht(t[4]))>>>0:null}(e);return null===t?e:(t=t||0,`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)}const Rt=(e,t,n)=>{if(Je.fun(e))return e;if(Je.arr(e))return Rt({range:e,output:t,extrapolate:n});if(Je.str(e.output[0]))return ot(e);const r=e,i=r.output,a=r.range||[0,1],o=r.extrapolateLeft||r.extrapolate||"extend",s=r.extrapolateRight||r.extrapolate||"extend",l=r.easing||(e=>e);return e=>{const t=function(e,t){for(var n=1;n<t.length-1&&!(t[n]>=e);++n);return n-1}(e,a);return function(e,t,n,r,i,a,o,s,l){let c=l?l(e):e;if(c<t){if("identity"===o)return c;"clamp"===o&&(c=t)}if(c>n){if("identity"===s)return c;"clamp"===s&&(c=n)}if(r===i)return r;if(t===n)return e<=t?r:i;t===-1/0?c=-c:n===1/0?c-=t:c=(c-t)/(n-t);c=a(c),r===-1/0?c=-c:i===1/0?c+=r:c=c*(i-r)+r;return c}(e,a[t],a[t+1],i[t],i[t+1],l,o,s,r.map)}};const Lt=1.70158,zt=1.525*Lt,Yt=Lt+1,Wt=2*Math.PI/3,Nt=2*Math.PI/4.5,Vt=e=>{const t=7.5625,n=2.75;return e<1/n?t*e*e:e<2/n?t*(e-=1.5/n)*e+.75:e<2.5/n?t*(e-=2.25/n)*e+.9375:t*(e-=2.625/n)*e+.984375},qt={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>Yt*e*e*e-Lt*e*e,easeOutBack:e=>1+Yt*Math.pow(e-1,3)+Lt*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-zt)/2:(Math.pow(2*e-2,2)*((zt+1)*(2*e-2)+zt)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*Wt),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*Wt)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*Nt)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*Nt)/2+1,easeInBounce:e=>1-Vt(1-e),easeOutBounce:Vt,easeInOutBounce:e=>e<.5?(1-Vt(1-2*e))/2:(1+Vt(2*e-1))/2,steps:(e,t="end")=>n=>{const r=(n="end"===t?Math.min(n,.999):Math.max(n,.001))*e,i="end"===t?Math.floor(r):Math.ceil(r);return a=0,o=1,s=i/e,Math.min(Math.max(s,a),o);var a,o,s}};function Qt(){return Qt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Qt.apply(this,arguments)}const Ut=Symbol.for("FluidValue.get"),Zt=Symbol.for("FluidValue.observers"),Gt=e=>Boolean(e&&e[Ut]),Xt=e=>e&&e[Ut]?e[Ut]():e,Jt=e=>e[Zt]||null;function Kt(e,t){let n=e[Zt];n&&n.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}class en{constructor(e){if(this[Ut]=void 0,this[Zt]=void 0,!e&&!(e=this.get))throw Error("Unknown getter");tn(this,e)}}const tn=(e,t)=>an(e,Ut,t);function nn(e,t){if(e[Ut]){let n=e[Zt];n||an(e,Zt,n=new Set),n.has(t)||(n.add(t),e.observerAdded&&e.observerAdded(n.size,t))}return t}function rn(e,t){let n=e[Zt];if(n&&n.has(t)){const r=n.size-1;r?n.delete(t):e[Zt]=null,e.observerRemoved&&e.observerRemoved(r,t)}}const an=(e,t,n)=>Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0}),on=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,sn=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,ln=new RegExp(`(${on.source})(%|[a-z]+)`,"i"),cn=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,un=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,dn=e=>{const[t,n]=hn(e);if(!t||at())return e;const r=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(r)return r.trim();if(n&&n.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(n);return t||e}return n&&un.test(n)?dn(n):n||e},hn=e=>{const t=un.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]};let fn;const pn=(e,t,n,r,i)=>`rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,mn=e=>{fn||(fn=lt?new RegExp(`(${Object.keys(lt).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>Xt(e).replace(un,dn).replace(sn,It).replace(fn,It))),n=t.map((e=>e.match(on).map(Number))),r=n[0].map(((e,t)=>n.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>Rt(Qt({},e,{output:t}))));return e=>{var n;const i=!ln.test(t[0])&&(null==(n=t.find((e=>ln.test(e))))?void 0:n.replace(on,""));let a=0;return t[0].replace(on,(()=>`${r[a++](e)}${i||""}`)).replace(cn,pn)}},gn="react-spring: ",yn=e=>{const t=e;let n=!1;if("function"!=typeof t)throw new TypeError(`${gn}once requires a function parameter`);return(...e)=>{n||(t(...e),n=!0)}},vn=yn(console.warn);const bn=yn(console.warn);function $n(e){return Je.str(e)&&("#"==e[0]||/\d/.test(e)||!at()&&un.test(e)||e in(lt||{}))}const wn=at()?d:h,Sn=()=>{const e=o(!1);return wn((()=>(e.current=!0,()=>{e.current=!1})),[]),e};function xn(){const e=s()[1],t=Sn();return()=>{t.current&&e(Math.random())}}const Dn=e=>d(e,On),On=[];function _n(e){const t=o();return d((()=>{t.current=e})),t.current}const Fn=Symbol.for("Animated:node"),jn=e=>e&&e[Fn],kn=(e,t)=>{return n=e,r=Fn,i=t,Object.defineProperty(n,r,{value:i,writable:!0,configurable:!0});var n,r,i},Mn=e=>e&&e[Fn]&&e[Fn].getPayload();class Bn{constructor(){this.payload=void 0,kn(this,this)}getPayload(){return this.payload||[]}}class Pn extends Bn{constructor(e){super(),this.done=!0,this.elapsedTime=void 0,this.lastPosition=void 0,this.lastVelocity=void 0,this.v0=void 0,this.durationProgress=0,this._value=e,Je.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new Pn(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return Je.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,Je.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}}class En extends Pn{constructor(e){super(0),this._string=null,this._toString=void 0,this._toString=Rt({output:[e,e]})}static create(e){return new En(e)}getValue(){let e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(Je.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=Rt({output:[this.getValue(),e]})),this._value=0,super.reset()}}const An={dependencies:null};class Cn extends Bn{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return tt(this.source,((n,r)=>{var i;(i=n)&&i[Fn]===i?t[r]=n.getValue(e):Gt(n)?t[r]=Xt(n):e||(t[r]=n)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&et(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return tt(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){An.dependencies&&Gt(e)&&An.dependencies.add(e);const t=Mn(e);t&&et(t,(e=>this.add(e)))}}class Hn extends Cn{constructor(e){super(e)}static create(e){return new Hn(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,n)=>t.setValue(e[n]))).some(Boolean):(super.setValue(e.map(Tn)),!0)}}function Tn(e){return($n(e)?En:Pn).create(e)}function In(e){const t=jn(e);return t?t.constructor:Je.arr(e)?Hn:$n(e)?En:Pn}function Rn(){return Rn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Rn.apply(this,arguments)}const Ln=(e,t)=>{const n=!Je.fun(e)||e.prototype&&e.prototype.isReactComponent;return f(((i,a)=>{const s=o(null),l=n&&p((e=>{s.current=function(e,t){e&&(Je.fun(e)?e(t):e.current=t);return t}(a,e)}),[a]),[c,u]=function(e,t){const n=new Set;An.dependencies=n,e.style&&(e=Rn({},e,{style:t.createAnimatedStyle(e.style)}));return e=new Cn(e),An.dependencies=null,[e,n]}(i,t),h=xn(),f=()=>{const e=s.current;if(n&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,c.getValue(!0)))&&h()},m=new zn(f,u),g=o();wn((()=>(g.current=m,et(u,(e=>nn(e,m))),()=>{g.current&&(et(g.current.deps,(e=>rn(e,g.current))),Ae.cancel(g.current.update))}))),d(f,[]),Dn((()=>()=>{const e=g.current;et(e.deps,(t=>rn(t,e)))}));const y=t.getComponentProps(c.getValue());return r.createElement(e,Rn({},y,{ref:l}))}))};class zn{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&Ae.write(this.update)}}const Yn=Symbol.for("AnimatedComponent"),Wn=e=>Je.str(e)?e:e&&Je.str(e.displayName)?e.displayName:Je.fun(e)&&e.name||null;function Nn(){return Nn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Nn.apply(this,arguments)}function Vn(e,...t){return Je.fun(e)?e(...t):e}const qn=(e,t)=>!0===e||!!(t&&e&&(Je.fun(e)?e(t):nt(e).includes(t))),Qn=(e,t)=>Je.obj(e)?t&&e[t]:e,Un=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,Zn=e=>e,Gn=(e,t=Zn)=>{let n=Xn;e.default&&!0!==e.default&&(e=e.default,n=Object.keys(e));const r={};for(const i of n){const n=t(e[i],i);Je.und(n)||(r[i]=n)}return r},Xn=["config","onProps","onStart","onChange","onPause","onResume","onRest"],Jn={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function Kn(e){const t=function(e){const t={};let n=0;if(tt(e,((e,r)=>{Jn[r]||(t[r]=e,n++)})),n)return t}(e);if(t){const n={to:t};return tt(e,((e,r)=>r in t||(n[r]=e))),n}return Nn({},e)}function er(e){return e=Xt(e),Je.arr(e)?e.map(er):$n(e)?dt.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function tr(e){return Je.fun(e)||Je.arr(e)&&Je.obj(e[0])}const nr=Nn({},{tension:170,friction:26},{mass:1,damping:1,easing:qt.linear,clamp:!1});class rr{constructor(){this.tension=void 0,this.friction=void 0,this.frequency=void 0,this.damping=void 0,this.mass=void 0,this.velocity=0,this.restVelocity=void 0,this.precision=void 0,this.progress=void 0,this.duration=void 0,this.easing=void 0,this.clamp=void 0,this.bounce=void 0,this.decay=void 0,this.round=void 0,Object.assign(this,nr)}}function ir(e,t){if(Je.und(t.decay)){const n=!Je.und(t.tension)||!Je.und(t.friction);!n&&Je.und(t.frequency)&&Je.und(t.damping)&&Je.und(t.mass)||(e.duration=void 0,e.decay=void 0),n&&(e.frequency=void 0)}else e.duration=void 0}const ar=[];class or{constructor(){this.changed=!1,this.values=ar,this.toValues=null,this.fromValues=ar,this.to=void 0,this.from=void 0,this.config=new rr,this.immediate=!1}}function sr(e,{key:t,props:n,defaultProps:r,state:i,actions:a}){return new Promise(((o,s)=>{var l;let c,u,d=qn(null!=(l=n.cancel)?l:null==r?void 0:r.cancel,t);if(d)p();else{Je.und(n.pause)||(i.paused=qn(n.pause,t));let e=null==r?void 0:r.pause;!0!==e&&(e=i.paused||qn(e,t)),c=Vn(n.delay||0,t),e?(i.resumeQueue.add(f),a.pause()):(a.resume(),f())}function h(){i.resumeQueue.add(f),i.timeouts.delete(u),u.cancel(),c=u.time-Ae.now()}function f(){c>0&&!dt.skipAnimation?(i.delayed=!0,u=Ae.setTimeout(p,c),i.pauseQueue.add(h),i.timeouts.add(u)):p()}function p(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(h),i.timeouts.delete(u),e<=(i.cancelId||0)&&(d=!0);try{a.start(Nn({},n,{callId:e,cancel:d}),o)}catch(e){s(e)}}}))}const lr=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?dr(e.get()):t.every((e=>e.noop))?cr(e.get()):ur(e.get(),t.every((e=>e.finished))),cr=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),ur=(e,t,n=!1)=>({value:e,finished:t,cancelled:n}),dr=e=>({value:e,cancelled:!0,finished:!1});function hr(e,t,n,r){const{callId:i,parentId:a,onRest:o}=t,{asyncTo:s,promise:l}=n;return a||e!==s||t.reset?n.promise=(async()=>{n.asyncId=i,n.asyncTo=e;const c=Gn(t,((e,t)=>"onRest"===t?void 0:e));let u,d;const h=new Promise(((e,t)=>(u=e,d=t))),f=e=>{const t=i<=(n.cancelId||0)&&dr(r)||i!==n.asyncId&&ur(r,!1);if(t)throw e.result=t,d(e),e},p=(e,t)=>{const a=new pr,o=new mr;return(async()=>{if(dt.skipAnimation)throw fr(n),o.result=ur(r,!1),d(o),o;f(a);const s=Je.obj(e)?Nn({},e):Nn({},t,{to:e});s.parentId=i,tt(c,((e,t)=>{Je.und(s[t])&&(s[t]=e)}));const l=await r.start(s);return f(a),n.paused&&await new Promise((e=>{n.resumeQueue.add(e)})),l})()};let m;if(dt.skipAnimation)return fr(n),ur(r,!1);try{let t;t=Je.arr(e)?(async e=>{for(const t of e)await p(t)})(e):Promise.resolve(e(p,r.stop.bind(r))),await Promise.all([t.then(u),h]),m=ur(r.get(),!0,!1)}catch(e){if(e instanceof pr)m=e.result;else{if(!(e instanceof mr))throw e;m=e.result}}finally{i==n.asyncId&&(n.asyncId=a,n.asyncTo=a?s:void 0,n.promise=a?l:void 0)}return Je.fun(o)&&Ae.batchedUpdates((()=>{o(m,r,r.item)})),m})():l}function fr(e,t){rt(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}class pr extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."),this.result=void 0}}class mr extends Error{constructor(){super("SkipAnimationSignal"),this.result=void 0}}const gr=e=>e instanceof vr;let yr=1;class vr extends en{constructor(...e){super(...e),this.id=yr++,this.key=void 0,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=jn(this);return e&&e.getValue()}to(...e){return dt.to(this,e)}interpolate(...e){return vn(`${gn}The "interpolate" function is deprecated in v9 (use "to" instead)`),dt.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){Kt(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||gt.sort(this),Kt(this,{type:"priority",parent:this,priority:e})}}const br=Symbol.for("SpringPhase"),$r=e=>(1&e[br])>0,wr=e=>(2&e[br])>0,Sr=e=>(4&e[br])>0,xr=(e,t)=>t?e[br]|=3:e[br]&=-3,Dr=(e,t)=>t?e[br]|=4:e[br]&=-5;class Or extends vr{constructor(e,t){if(super(),this.key=void 0,this.animation=new or,this.queue=void 0,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!Je.und(e)||!Je.und(t)){const n=Je.obj(e)?Nn({},e):Nn({},t,{from:e});Je.und(n.default)&&(n.default=!0),this.start(n)}}get idle(){return!(wr(this)||this._state.asyncTo)||Sr(this)}get goal(){return Xt(this.animation.to)}get velocity(){const e=jn(this);return e instanceof Pn?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return $r(this)}get isAnimating(){return wr(this)}get isPaused(){return Sr(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,n=!1;const r=this.animation;let{config:i,toValues:a}=r;const o=Mn(r.to);!o&&Gt(r.to)&&(a=nt(Xt(r.to))),r.values.forEach(((s,l)=>{if(s.done)return;const c=s.constructor==En?1:o?o[l].lastPosition:a[l];let u=r.immediate,d=c;if(!u){if(d=s.lastPosition,i.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const n=r.fromValues[l],a=null!=s.v0?s.v0:s.v0=Je.arr(i.velocity)?i.velocity[l]:i.velocity;let o;const h=i.precision||(n==c?.005:Math.min(1,.001*Math.abs(c-n)));if(Je.und(i.duration))if(i.decay){const e=!0===i.decay?.998:i.decay,r=Math.exp(-(1-e)*t);d=n+a/(1-e)*(1-r),u=Math.abs(s.lastPosition-d)<=h,o=a*r}else{o=null==s.lastVelocity?a:s.lastVelocity;const t=i.restVelocity||h/10,r=i.clamp?0:i.bounce,l=!Je.und(r),f=n==c?s.v0>0:n<c;let p,m=!1;const g=1,y=Math.ceil(e/g);for(let e=0;e<y&&(p=Math.abs(o)>t,p||(u=Math.abs(c-d)<=h,!u));++e){l&&(m=d==c||d>c==f,m&&(o=-o*r,d=c));o+=(1e-6*-i.tension*(d-c)+.001*-i.friction*o)/i.mass*g,d+=o*g}}else{let r=1;i.duration>0&&(this._memoizedDuration!==i.duration&&(this._memoizedDuration=i.duration,s.durationProgress>0&&(s.elapsedTime=i.duration*s.durationProgress,t=s.elapsedTime+=e)),r=(i.progress||0)+t/this._memoizedDuration,r=r>1?1:r<0?0:r,s.durationProgress=r),d=n+i.easing(r)*(c-n),o=(d-s.lastPosition)/e,u=1==r}s.lastVelocity=o,Number.isNaN(d)&&(console.warn("Got NaN while animating:",this),u=!0)}o&&!o[l].done&&(u=!1),u?s.done=!0:t=!1,s.setValue(d,i.round)&&(n=!0)}));const s=jn(this),l=s.getValue();if(t){const e=Xt(r.to);l===e&&!n||i.decay?n&&i.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else n&&this._onChange(l)}set(e){return Ae.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(wr(this)){const{to:e,config:t}=this.animation;Ae.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let n;return Je.und(e)?(n=this.queue||[],this.queue=[]):n=[Je.obj(e)?e:Nn({},t,{to:e})],Promise.all(n.map((e=>this._update(e)))).then((e=>lr(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),fr(this._state,e&&this._lastCallId),Ae.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:n,from:r}=e;n=Je.obj(n)?n[t]:n,(null==n||tr(n))&&(n=void 0),r=Je.obj(r)?r[t]:r,null==r&&(r=void 0);const i={to:n,from:r};return $r(this)||(e.reverse&&([n,r]=[r,n]),r=Xt(r),Je.und(r)?jn(this)||this._set(n):this._set(r)),i}_update(e,t){let n=Nn({},e);const{key:r,defaultProps:i}=this;n.default&&Object.assign(i,Gn(n,((e,t)=>/^on/.test(t)?Qn(e,r):e))),Pr(this,n,"onProps"),Er(this,"onProps",n,this);const a=this._prepareNode(n);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const o=this._state;return sr(++this._lastCallId,{key:r,props:n,defaultProps:i,state:o,actions:{pause:()=>{Sr(this)||(Dr(this,!0),it(o.pauseQueue),Er(this,"onPause",ur(this,_r(this,this.animation.to)),this))},resume:()=>{Sr(this)&&(Dr(this,!1),wr(this)&&this._resume(),it(o.resumeQueue),Er(this,"onResume",ur(this,_r(this,this.animation.to)),this))},start:this._merge.bind(this,a)}}).then((e=>{if(n.loop&&e.finished&&(!t||!e.noop)){const e=Fr(n);if(e)return this._update(e,!0)}return e}))}_merge(e,t,n){if(t.cancel)return this.stop(!0),n(dr(this));const r=!Je.und(e.to),i=!Je.und(e.from);if(r||i){if(!(t.callId>this._lastToId))return n(dr(this));this._lastToId=t.callId}const{key:a,defaultProps:o,animation:s}=this,{to:l,from:c}=s;let{to:u=l,from:d=c}=e;!i||r||t.default&&!Je.und(u)||(u=d),t.reverse&&([u,d]=[d,u]);const h=!Ke(d,c);h&&(s.from=d),d=Xt(d);const f=!Ke(u,l);f&&this._focus(u);const p=tr(t.to),{config:m}=s,{decay:g,velocity:y}=m;(r||i)&&(m.velocity=0),t.config&&!p&&function(e,t,n){n&&(ir(n=Nn({},n),t),t=Nn({},n,t)),ir(e,t),Object.assign(e,t);for(const t in nr)null==e[t]&&(e[t]=nr[t]);let{mass:r,frequency:i,damping:a}=e;Je.und(i)||(i<.01&&(i=.01),a<0&&(a=0),e.tension=Math.pow(2*Math.PI/i,2)*r,e.friction=4*Math.PI*a*r/i)}(m,Vn(t.config,a),t.config!==o.config?Vn(o.config,a):void 0);let v=jn(this);if(!v||Je.und(u))return n(ur(this,!0));const b=Je.und(t.reset)?i&&!t.default:!Je.und(d)&&qn(t.reset,a),$=b?d:this.get(),w=er(u),S=Je.num(w)||Je.arr(w)||$n(w),x=!p&&(!S||qn(o.immediate||t.immediate,a));if(f){const e=In(u);if(e!==v.constructor){if(!x)throw Error(`Cannot animate between ${v.constructor.name} and ${e.name}, as the "to" prop suggests`);v=this._set(w)}}const D=v.constructor;let O=Gt(u),_=!1;if(!O){const e=b||!$r(this)&&h;(f||e)&&(_=Ke(er($),w),O=!_),(Ke(s.immediate,x)||x)&&Ke(m.decay,g)&&Ke(m.velocity,y)||(O=!0)}if(_&&wr(this)&&(s.changed&&!b?O=!0:O||this._stop(l)),!p&&((O||Gt(l))&&(s.values=v.getPayload(),s.toValues=Gt(u)?null:D==En?[1]:nt(w)),s.immediate!=x&&(s.immediate=x,x||b||this._set(l)),O)){const{onRest:e}=s;et(Br,(e=>Pr(this,t,e)));const r=ur(this,_r(this,l));it(this._pendingCalls,r),this._pendingCalls.add(n),s.changed&&Ae.batchedUpdates((()=>{s.changed=!b,null==e||e(r,this),b?Vn(o.onRest,r):null==s.onStart||s.onStart(r,this)}))}b&&this._set($),p?n(hr(t.to,t,this._state,this)):O?this._start():wr(this)&&!f?this._pendingCalls.add(n):n(cr($))}_focus(e){const t=this.animation;e!==t.to&&(Jt(this)&&this._detach(),t.to=e,Jt(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;Gt(t)&&(nn(t,this),gr(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;Gt(e)&&rn(e,this)}_set(e,t=!0){const n=Xt(e);if(!Je.und(n)){const e=jn(this);if(!e||!Ke(n,e.getValue())){const r=In(n);e&&e.constructor==r?e.setValue(n):kn(this,r.create(n)),e&&Ae.batchedUpdates((()=>{this._onChange(n,t)}))}}return jn(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,Er(this,"onStart",ur(this,_r(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),Vn(this.animation.onChange,e,this)),Vn(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;jn(this).reset(Xt(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),wr(this)||(xr(this,!0),Sr(this)||this._resume())}_resume(){dt.skipAnimation?this.finish():gt.start(this)}_stop(e,t){if(wr(this)){xr(this,!1);const n=this.animation;et(n.values,(e=>{e.done=!0})),n.toValues&&(n.onChange=n.onPause=n.onResume=void 0),Kt(this,{type:"idle",parent:this});const r=t?dr(this.get()):ur(this.get(),_r(this,null!=e?e:n.to));it(this._pendingCalls,r),n.changed&&(n.changed=!1,Er(this,"onRest",r,this))}}}function _r(e,t){const n=er(t);return Ke(er(e.get()),n)}function Fr(e,t=e.loop,n=e.to){let r=Vn(t);if(r){const i=!0!==r&&Kn(r),a=(i||e).reverse,o=!i||i.reset;return jr(Nn({},e,{loop:t,default:!1,pause:void 0,to:!a||tr(n)?n:void 0,from:o?e.from:void 0,reset:o},i))}}function jr(e){const{to:t,from:n}=e=Kn(e),r=new Set;return Je.obj(t)&&Mr(t,r),Je.obj(n)&&Mr(n,r),e.keys=r.size?Array.from(r):null,e}function kr(e){const t=jr(e);return Je.und(t.default)&&(t.default=Gn(t)),t}function Mr(e,t){tt(e,((e,n)=>null!=e&&t.add(n)))}const Br=["onStart","onRest","onChange","onPause","onResume"];function Pr(e,t,n){e.animation[n]=t[n]!==Un(t,n)?Qn(t[n],e.key):void 0}function Er(e,t,...n){var r,i,a,o;null==(r=(i=e.animation)[t])||r.call(i,...n),null==(a=(o=e.defaultProps)[t])||a.call(o,...n)}const Ar=["onStart","onChange","onRest"];let Cr=1;class Hr{constructor(e,t){this.id=Cr++,this.springs={},this.queue=[],this.ref=void 0,this._flush=void 0,this._initialProps=void 0,this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._item=void 0,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start(Nn({default:!0},e))}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,n)=>e[n]=t.get())),e}set(e){for(const t in e){const n=e[t];Je.und(n)||this.springs[t].set(n)}}update(e){return e&&this.queue.push(jr(e)),this}start(e){let{queue:t}=this;return e?t=nt(e).map(jr):this.queue=[],this._flush?this._flush(this,t):(Wr(this,t),Tr(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const n=this.springs;et(nt(t),(t=>n[t].stop(!!e)))}else fr(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(Je.und(e))this.start({pause:!0});else{const t=this.springs;et(nt(e),(e=>t[e].pause()))}return this}resume(e){if(Je.und(e))this.start({pause:!1});else{const t=this.springs;et(nt(e),(e=>t[e].resume()))}return this}each(e){tt(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:n}=this._events,r=this._active.size>0,i=this._changed.size>0;(r&&!this._started||i&&!this._started)&&(this._started=!0,rt(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const a=!r&&this._started,o=i||a&&n.size?this.get():null;i&&t.size&&rt(t,(([e,t])=>{t.value=o,e(t,this,this._item)})),a&&(this._started=!1,rt(n,(([e,t])=>{t.value=o,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}Ae.onFrame(this._onFrame)}}function Tr(e,t){return Promise.all(t.map((t=>Ir(e,t)))).then((t=>lr(e,t)))}async function Ir(e,t,n){const{keys:r,to:i,from:a,loop:o,onRest:s,onResolve:l}=t,c=Je.obj(t.default)&&t.default;o&&(t.loop=!1),!1===i&&(t.to=null),!1===a&&(t.from=null);const u=Je.arr(i)||Je.fun(i)?i:void 0;u?(t.to=void 0,t.onRest=void 0,c&&(c.onRest=void 0)):et(Ar,(n=>{const r=t[n];if(Je.fun(r)){const i=e._events[n];t[n]=({finished:e,cancelled:t})=>{const n=i.get(r);n?(e||(n.finished=!1),t&&(n.cancelled=!0)):i.set(r,{value:null,finished:e||!1,cancelled:t||!1})},c&&(c[n]=t[n])}}));const d=e._state;t.pause===!d.paused?(d.paused=t.pause,it(t.pause?d.pauseQueue:d.resumeQueue)):d.paused&&(t.pause=!0);const h=(r||Object.keys(e.springs)).map((n=>e.springs[n].start(t))),f=!0===t.cancel||!0===Un(t,"cancel");(u||f&&d.asyncId)&&h.push(sr(++e._lastAsyncId,{props:t,state:d,actions:{pause:Xe,resume:Xe,start(t,n){f?(fr(d,e._lastAsyncId),n(dr(e))):(t.onRest=s,n(hr(u,t,d,e)))}}})),d.paused&&await new Promise((e=>{d.resumeQueue.add(e)}));const p=lr(e,await Promise.all(h));if(o&&p.finished&&(!n||!p.noop)){const n=Fr(t,o,i);if(n)return Wr(e,[n]),Ir(e,n,!0)}return l&&Ae.batchedUpdates((()=>l(p,e,e.item))),p}function Rr(e,t){const n=Nn({},e.springs);return t&&et(nt(t),(e=>{Je.und(e.keys)&&(e=jr(e)),Je.obj(e.to)||(e=Nn({},e,{to:void 0})),Yr(n,e,(e=>zr(e)))})),Lr(e,n),n}function Lr(e,t){tt(t,((t,n)=>{e.springs[n]||(e.springs[n]=t,nn(t,e))}))}function zr(e,t){const n=new Or;return n.key=e,t&&nn(n,t),n}function Yr(e,t,n){t.keys&&et(t.keys,(r=>{(e[r]||(e[r]=n(r)))._prepareNode(t)}))}function Wr(e,t){et(t,(t=>{Yr(e.springs,t,(t=>zr(t,e)))}))}const Nr=["children"],Vr=e=>{let{children:t}=e,n=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,Nr);const i=m(qr),a=n.pause||!!i.pause,l=n.immediate||!!i.immediate;n=function(e,t){const[n]=s((()=>({inputs:t,result:e()}))),r=o(),i=r.current;let a=i;a?Boolean(t&&a.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}(t,a.inputs))||(a={inputs:t,result:e()}):a=n;return d((()=>{r.current=a,i==n&&(n.inputs=n.result=void 0)}),[a]),a.result}((()=>({pause:a,immediate:l})),[a,l]);const{Provider:c}=qr;return r.createElement(c,{value:n},t)},qr=(Qr=Vr,Ur={},Object.assign(Qr,r.createContext(Ur)),Qr.Provider._context=Qr,Qr.Consumer._context=Qr,Qr);var Qr,Ur;Vr.Provider=qr.Provider,Vr.Consumer=qr.Consumer;const Zr=()=>{const e=[],t=function(t){bn(`${gn}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const r=[];return et(e,((e,i)=>{if(Je.und(t))r.push(e.start());else{const a=n(t,e,i);a&&r.push(e.start(a))}})),r};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const n=e.indexOf(t);~n&&e.splice(n,1)},t.pause=function(){return et(e,(e=>e.pause(...arguments))),this},t.resume=function(){return et(e,(e=>e.resume(...arguments))),this},t.set=function(t){et(e,(e=>e.set(t)))},t.start=function(t){const n=[];return et(e,((e,r)=>{if(Je.und(t))n.push(e.start());else{const i=this._getProps(t,e,r);i&&n.push(e.start(i))}})),n},t.stop=function(){return et(e,(e=>e.stop(...arguments))),this},t.update=function(t){return et(e,((e,n)=>e.update(this._getProps(t,e,n)))),this};const n=function(e,t,n){return Je.fun(e)?e(n,t):e};return t._getProps=n,t};function Gr(e,t){const n=Je.fun(e),[[r],i]=function(e,t,n){const r=Je.fun(t)&&t;r&&!n&&(n=[]);const i=g((()=>r||3==arguments.length?Zr():void 0),[]),a=o(0),s=xn(),l=g((()=>({ctrls:[],queue:[],flush(e,t){const n=Rr(e,t);return a.current>0&&!l.queue.length&&!Object.keys(n).some((t=>!e.springs[t]))?Tr(e,t):new Promise((r=>{Lr(e,n),l.queue.push((()=>{r(Tr(e,t))})),s()}))}})),[]),c=o([...l.ctrls]),u=[],d=_n(e)||0;function h(e,n){for(let i=e;i<n;i++){const e=c.current[i]||(c.current[i]=new Hr(null,l.flush)),n=r?r(i,e):t[i];n&&(u[i]=kr(n))}}g((()=>{et(c.current.slice(e,d),(e=>{!function(e,t){var n;null==(n=e.ref)||n.delete(e),null==t||t.delete(e)}(e,i),e.stop(!0)})),c.current.length=e,h(d,e)}),[e]),g((()=>{h(0,Math.min(d,e))}),n);const f=c.current.map(((e,t)=>Rr(e,u[t]))),p=m(Vr),y=_n(p),v=p!==y&&function(e){for(const t in e)return!0;return!1}(p);wn((()=>{a.current++,l.ctrls=c.current;const{queue:e}=l;e.length&&(l.queue=[],et(e,(e=>e()))),et(c.current,((e,t)=>{null==i||i.add(e),v&&e.start({default:p});const n=u[t];n&&(function(e,t){var n;t&&e.ref!==t&&(null==(n=e.ref)||n.delete(e),t.add(e),e.ref=t)}(e,n.ref),e.ref?e.queue.push(n):e.start(n))}))})),Dn((()=>()=>{et(l.ctrls,(e=>e.stop(!0)))}));const b=f.map((e=>Nn({},e)));return i?[b,i]:b}(1,n?e:[e],n?t||[]:t);return n||2==arguments.length?[r,i]:r}let Xr;!function(e){e.MOUNT="mount",e.ENTER="enter",e.UPDATE="update",e.LEAVE="leave"}(Xr||(Xr={}));class Jr extends vr{constructor(e,t){super(),this.key=void 0,this.idle=!0,this.calc=void 0,this._active=new Set,this.source=e,this.calc=Rt(...t);const n=this._get(),r=In(n);kn(this,r.create(n))}advance(e){const t=this._get();Ke(t,this.get())||(jn(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&ei(this._active)&&ti(this)}_get(){const e=Je.arr(this.source)?this.source.map(Xt):nt(Xt(this.source));return this.calc(...e)}_start(){this.idle&&!ei(this._active)&&(this.idle=!1,et(Mn(this),(e=>{e.done=!1})),dt.skipAnimation?(Ae.batchedUpdates((()=>this.advance())),ti(this)):gt.start(this))}_attach(){let e=1;et(nt(this.source),(t=>{Gt(t)&&nn(t,this),gr(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){et(nt(this.source),(e=>{Gt(e)&&rn(e,this)})),this._active.clear(),ti(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=nt(this.source).reduce(((e,t)=>Math.max(e,(gr(t)?t.priority:0)+1)),0))}}function Kr(e){return!1!==e.idle}function ei(e){return!e.size||Array.from(e).every(Kr)}function ti(e){e.idle||(e.idle=!0,et(Mn(e),(e=>{e.done=!0})),Kt(e,{type:"idle",parent:e}))}function ni(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}dt.assign({createStringInterpolator:mn,to:(e,t)=>new Jr(e,t)});const ri=["style","children","scrollTop","scrollLeft","viewBox"],ii=/^--/;function ai(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||ii.test(e)||si.hasOwnProperty(e)&&si[e]?(""+t).trim():t+"px"}const oi={};let si={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0};const li=["Webkit","Ms","Moz","O"];si=Object.keys(si).reduce(((e,t)=>(li.forEach((n=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(n,t)]=e[t])),e)),si);const ci=["x","y","z"],ui=/^(matrix|translate|scale|rotate|skew)/,di=/^(translate)/,hi=/^(rotate|skew)/,fi=(e,t)=>Je.num(e)&&0!==e?e+t:e,pi=(e,t)=>Je.arr(e)?e.every((e=>pi(e,t))):Je.num(e)?e===t:parseFloat(e)===t;class mi extends Cn{constructor(e){let{x:t,y:n,z:r}=e,i=ni(e,ci);const a=[],o=[];(t||n||r)&&(a.push([t||0,n||0,r||0]),o.push((e=>[`translate3d(${e.map((e=>fi(e,"px"))).join(",")})`,pi(e,0)]))),tt(i,((e,t)=>{if("transform"===t)a.push([e||""]),o.push((e=>[e,""===e]));else if(ui.test(t)){if(delete i[t],Je.und(e))return;const n=di.test(t)?"px":hi.test(t)?"deg":"";a.push(nt(e)),o.push("rotate3d"===t?([e,t,r,i])=>[`rotate3d(${e},${t},${r},${fi(i,n)})`,pi(i,0)]:e=>[`${t}(${e.map((e=>fi(e,n))).join(",")})`,pi(e,t.startsWith("scale")?1:0)])}})),a.length&&(i.transform=new gi(a,o)),super(i)}}class gi extends en{constructor(e,t){super(),this._value=null,this.inputs=e,this.transforms=t}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return et(this.inputs,((n,r)=>{const i=Xt(n[0]),[a,o]=this.transforms[r](Je.arr(i)?i:n.map(Xt));e+=" "+a,t=t&&o})),t?"none":e}observerAdded(e){1==e&&et(this.inputs,(e=>et(e,(e=>Gt(e)&&nn(e,this)))))}observerRemoved(e){0==e&&et(this.inputs,(e=>et(e,(e=>Gt(e)&&rn(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),Kt(this,e)}}const yi=["scrollTop","scrollLeft"];dt.assign({batchedUpdates:$,createStringInterpolator:mn,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});const vi=((e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:n=(e=>new Cn(e)),getComponentProps:r=(e=>e)}={})=>{const i={applyAnimatedValues:t,createAnimatedStyle:n,getComponentProps:r},a=e=>{const t=Wn(e)||"Anonymous";return(e=Je.str(e)?a[e]||(a[e]=Ln(e,i)):e[Yn]||(e[Yn]=Ln(e,i))).displayName=`Animated(${t})`,e};return tt(e,((t,n)=>{Je.arr(e)&&(n=Wn(t)),a[n]=a(t)})),{animated:a}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const n="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,r=t,{style:i,children:a,scrollTop:o,scrollLeft:s,viewBox:l}=r,c=ni(r,ri),u=Object.values(c),d=Object.keys(c).map((t=>n||e.hasAttribute(t)?t:oi[t]||(oi[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==a&&(e.textContent=a);for(let t in i)if(i.hasOwnProperty(t)){const n=ai(t,i[t]);ii.test(t)?e.style.setProperty(t,n):e.style[t]=n}d.forEach(((t,n)=>{e.setAttribute(t,u[n])})),void 0!==o&&(e.scrollTop=o),void 0!==s&&(e.scrollLeft=s),void 0!==l&&e.setAttribute("viewBox",l)},createAnimatedStyle:e=>new mi(e),getComponentProps:e=>ni(e,yi)}),bi=vi.animated,$i=w(bi.div)`
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
`;var wi={exports:{}};wi.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,a={},o=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],c=function(e){var t=a[e];return t&&(t.indexOf?t:t.s.concat(t.f))},u=function(e,t){var n,r=a.meridiem;if(r){for(var i=1;i<=24;i+=1)if(e.indexOf(r(i,0,t))>-1){n=i>12;break}}else n=e===(t?"pm":"PM");return n},d={A:[i,function(e){this.afternoon=u(e,!1)}],a:[i,function(e){this.afternoon=u(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[r,s("seconds")],ss:[r,s("seconds")],m:[r,s("minutes")],mm:[r,s("minutes")],H:[r,s("hours")],h:[r,s("hours")],HH:[r,s("hours")],hh:[r,s("hours")],D:[r,s("day")],DD:[n,s("day")],Do:[i,function(e){var t=a.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],M:[r,s("month")],MM:[n,s("month")],MMM:[i,function(e){var t=c("months"),n=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[n,function(e){this.year=o(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(n){var r,i;r=n,i=a&&a.formats;for(var o=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var a=r&&r.toUpperCase();return n||i[r]||e[r]||i[a].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),s=o.length,l=0;l<s;l+=1){var c=o[l],u=d[c],h=u&&u[0],f=u&&u[1];o[l]=f?{regex:h,parser:f}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<s;n+=1){var i=o[n];if("string"==typeof i)r+=i.length;else{var a=i.regex,l=i.parser,c=e.slice(r),u=a.exec(c)[0];l.call(t,u),e=e.replace(u,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(o=e.parseTwoDigitYear);var r=t.prototype,i=r.parse;r.parse=function(e){var t=e.date,r=e.utc,o=e.args;this.$u=r;var s=o[1];if("string"==typeof s){var l=!0===o[2],c=!0===o[3],u=l||c,d=o[2];c&&(d=o[2]),a=this.$locale(),!l&&d&&(a=n.Ls[d]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=h(t)(e),i=r.year,a=r.month,o=r.day,s=r.hours,l=r.minutes,c=r.seconds,u=r.milliseconds,d=r.zone,f=new Date,p=o||(i||a?1:f.getDate()),m=i||f.getFullYear(),g=0;i&&!a||(g=a>0?a-1:f.getMonth());var y=s||0,v=l||0,b=c||0,$=u||0;return d?new Date(Date.UTC(m,g,p,y,v,b,$+60*d.offset*1e3)):n?new Date(Date.UTC(m,g,p,y,v,b,$)):new Date(m,g,p,y,v,b,$)}catch(e){return new Date("")}}(t,s,r),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(s)&&(this.$d=new Date("")),a={}}else if(s instanceof Array)for(var f=s.length,p=1;p<=f;p+=1){o[1]=s[p-1];var m=n.apply(this,o);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}p===f&&(this.$d=new Date(""))}else i.call(this,e)}}}();var Si,xi,Di=wi.exports,Oi={exports:{}},_i=Oi.exports=(Si={year:0,month:1,day:2,hour:3,minute:4,second:5},xi={},function(e,t,n){var r,i=function(e,t,n){void 0===n&&(n={});var r=new Date(e),i=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,i=xi[r];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),xi[r]=i),i}(t,n);return i.formatToParts(r)},a=function(e,t){for(var r=i(e,t),a=[],o=0;o<r.length;o+=1){var s=r[o],l=s.type,c=s.value,u=Si[l];u>=0&&(a[u]=parseInt(c,10))}var d=a[3],h=24===d?0:d,f=a[0]+"-"+a[1]+"-"+a[2]+" "+h+":"+a[4]+":"+a[5]+":000",p=+e;return(n.utc(f).valueOf()-(p-=p%1e3))/6e4},o=t.prototype;o.tz=function(e,t){void 0===e&&(e=r);var i=this.utcOffset(),a=this.toDate(),o=a.toLocaleString("en-US",{timeZone:e}),s=Math.round((a-new Date(o))/1e3/60),l=n(o).$set("millisecond",this.$ms).utcOffset(15*-Math.round(a.getTimezoneOffset()/15)-s,!0);if(t){var c=l.utcOffset();l=l.add(i-c,"minute")}return l.$x.$timezone=e,l},o.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var s=o.startOf;o.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return s.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,i){var o=i&&t,s=i||t||r,l=a(+n(),s);if("string"!=typeof e)return n(e).tz(s);var c=function(e,t,n){var r=e-60*t*1e3,i=a(r,n);if(t===i)return[r,t];var o=a(r-=60*(i-t)*1e3,n);return i===o?[r,i]:[e-60*Math.min(i,o)*1e3,Math.max(i,o)]}(n.utc(e,o).valueOf(),l,s),u=c[0],d=c[1],h=n(u).utcOffset(d);return h.$x.$timezone=s,h},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}}),Fi={exports:{}};Fi.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,i){var a=n(e),o=n(t),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(a,r):!this.isBefore(a,r))&&(l?this.isBefore(o,r):!this.isAfter(o,r))||(s?this.isBefore(a,r):!this.isAfter(a,r))&&(l?this.isAfter(o,r):!this.isBefore(o,r))}};var ji=Fi.exports,ki={exports:{}};ki.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var Mi=ki.exports,Bi={exports:{}};Bi.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var Pi,Ei=Bi.exports;E.extend(ji),E.extend(Mi),E.extend(Ei),E.extend(Di),E.extend(_i),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=E(t).startOf("week");return Ai(n).map((e=>Ci(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Ci(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(E(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),i=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)i.push(r.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+E(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=E(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")}}(Pi||(Pi={}));const Ai=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},Ci=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},Hi=[1,3,5,7,8,10,12],Ti=[4,6,9,11];var Ii,Ri,Li,zi;!function(e){e.clampDay=(t,n,r)=>{const i=parseInt(t),a=parseInt(n),o=parseInt(r);return 0==i?"1":Hi.includes(a)?Math.min(i,31).toString():Ti.includes(a)?Math.min(i,30).toString():2===a?e.isLeapYear(o)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=E(e,n);return E(t,n).diff(r,"minute")},e.toDayjs=e=>e?E(e):E()}(Ii||(Ii={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:n,minDate:r,maxDate:i}=t;return!!(n&&n.length&&n.includes(e))||(!(!r||!E(e).isBefore(r,"day"))||!(!i||!E(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(E(e).isValid())return e}return""}}(Ri||(Ri={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Li||(Li={})),function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,i=8)=>{let a=0;t>n&&(a=Math.floor((t-n)/i));const o=r+a;if(o<e.length){const t=Math.floor(o/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width}}(zi||(zi={}));const Yi=e=>{const[t,n]=s(e),r=o(e);return[t,p((e=>{r.current=e,n(e)}),[]),r]};var Wi=Array.isArray,Ni="object"==typeof M&&M&&M.Object===Object&&M,Vi="object"==typeof self&&self&&self.Object===Object&&self,qi=Ni||Vi||Function("return this")(),Qi=qi.Symbol,Ui=Qi,Zi=Object.prototype,Gi=Zi.hasOwnProperty,Xi=Zi.toString,Ji=Ui?Ui.toStringTag:void 0;var Ki=function(e){var t=Gi.call(e,Ji),n=e[Ji];try{e[Ji]=void 0;var r=!0}catch(e){}var i=Xi.call(e);return r&&(t?e[Ji]=n:delete e[Ji]),i},ea=Object.prototype.toString;var ta=Ki,na=function(e){return ea.call(e)},ra=Qi?Qi.toStringTag:void 0;var ia=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":ra&&ra in Object(e)?ta(e):na(e)};var aa=ia,oa=function(e){return null!=e&&"object"==typeof e};var sa=function(e){return"symbol"==typeof e||oa(e)&&"[object Symbol]"==aa(e)},la=Wi,ca=sa,ua=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,da=/^\w*$/;var ha=function(e,t){if(la(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!ca(e))||(da.test(e)||!ua.test(e)||null!=t&&e in Object(t))};var fa=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},pa=ia,ma=fa;var ga,ya=function(e){if(!ma(e))return!1;var t=pa(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},va=qi["__core-js_shared__"],ba=(ga=/[^.]+$/.exec(va&&va.keys&&va.keys.IE_PROTO||""))?"Symbol(src)_1."+ga:"";var $a=function(e){return!!ba&&ba in e},wa=Function.prototype.toString;var Sa=ya,xa=$a,Da=fa,Oa=function(e){if(null!=e){try{return wa.call(e)}catch(e){}try{return e+""}catch(e){}}return""},_a=/^\[object .+?Constructor\]$/,Fa=Function.prototype,ja=Object.prototype,ka=Fa.toString,Ma=ja.hasOwnProperty,Ba=RegExp("^"+ka.call(Ma).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Pa=function(e){return!(!Da(e)||xa(e))&&(Sa(e)?Ba:_a).test(Oa(e))},Ea=function(e,t){return null==e?void 0:e[t]};var Aa=function(e,t){var n=Ea(e,t);return Pa(n)?n:void 0},Ca=Aa(Object,"create"),Ha=Ca;var Ta=function(){this.__data__=Ha?Ha(null):{},this.size=0};var Ia=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Ra=Ca,La=Object.prototype.hasOwnProperty;var za=function(e){var t=this.__data__;if(Ra){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return La.call(t,e)?t[e]:void 0},Ya=Ca,Wa=Object.prototype.hasOwnProperty;var Na=Ca;var Va=Ta,qa=Ia,Qa=za,Ua=function(e){var t=this.__data__;return Ya?void 0!==t[e]:Wa.call(t,e)},Za=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Na&&void 0===t?"__lodash_hash_undefined__":t,this};function Ga(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ga.prototype.clear=Va,Ga.prototype.delete=qa,Ga.prototype.get=Qa,Ga.prototype.has=Ua,Ga.prototype.set=Za;var Xa=Ga;var Ja=function(){this.__data__=[],this.size=0};var Ka=function(e,t){return e===t||e!=e&&t!=t};var eo=function(e,t){for(var n=e.length;n--;)if(Ka(e[n][0],t))return n;return-1},to=eo,no=Array.prototype.splice;var ro=eo;var io=eo;var ao=eo;var oo=Ja,so=function(e){var t=this.__data__,n=to(t,e);return!(n<0)&&(n==t.length-1?t.pop():no.call(t,n,1),--this.size,!0)},lo=function(e){var t=this.__data__,n=ro(t,e);return n<0?void 0:t[n][1]},co=function(e){return io(this.__data__,e)>-1},uo=function(e,t){var n=this.__data__,r=ao(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function ho(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ho.prototype.clear=oo,ho.prototype.delete=so,ho.prototype.get=lo,ho.prototype.has=co,ho.prototype.set=uo;var fo=ho,po=Aa(qi,"Map"),mo=Xa,go=fo,yo=po;var vo=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var bo=function(e,t){var n=e.__data__;return vo(t)?n["string"==typeof t?"string":"hash"]:n.map},$o=bo;var wo=bo;var So=bo;var xo=bo;var Do=function(){this.size=0,this.__data__={hash:new mo,map:new(yo||go),string:new mo}},Oo=function(e){var t=$o(this,e).delete(e);return this.size-=t?1:0,t},_o=function(e){return wo(this,e).get(e)},Fo=function(e){return So(this,e).has(e)},jo=function(e,t){var n=xo(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function ko(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ko.prototype.clear=Do,ko.prototype.delete=Oo,ko.prototype.get=_o,ko.prototype.has=Fo,ko.prototype.set=jo;var Mo=ko;function Bo(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],a=n.cache;if(a.has(i))return a.get(i);var o=e.apply(this,r);return n.cache=a.set(i,o)||a,o};return n.cache=new(Bo.Cache||Mo),n}Bo.Cache=Mo;var Po=Bo;var Eo=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ao=/\\(\\)?/g,Co=function(e){var t=Po(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Eo,(function(e,n,r,i){t.push(r?i.replace(Ao,"$1"):n||e)})),t}));var Ho=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},To=Wi,Io=sa,Ro=Qi?Qi.prototype:void 0,Lo=Ro?Ro.toString:void 0;var zo=function e(t){if("string"==typeof t)return t;if(To(t))return Ho(t,e)+"";if(Io(t))return Lo?Lo.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},Yo=zo;var Wo=Wi,No=ha,Vo=Co,qo=function(e){return null==e?"":Yo(e)};var Qo=sa;var Uo=function(e,t){return Wo(e)?e:No(e,t)?[e]:Vo(qo(e))},Zo=function(e){if("string"==typeof e||Qo(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var Go=function(e,t){for(var n=0,r=(t=Uo(t,e)).length;null!=e&&n<r;)e=e[Zo(t[n++])];return n&&n==r?e:void 0};var Xo=function(e,t,n){var r=null==e?void 0:Go(e,t);return void 0===r?n:r};const Jo=(e,t,n)=>t?Xo(n,t)||Xo(e,t):n||e,Ko=(e,t)=>{const n=t||e.defaultValue;return Xo(e.collections,n)};var es;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(es||(es={}));const ts={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},ns=e=>t=>{const n=t.theme,r=Ko(ts,n[es.colorScheme]);return n.options&&n.options.color?Jo(r,e,n.options.color):Jo(r,e)},rs={Brand:{1:ns("Brand.1"),2:ns("Brand.2"),3:ns("Brand.3"),4:ns("Brand.4"),5:ns("Brand.5"),6:ns("Brand.6")},Primary:ns("Primary"),PrimaryDark:ns("PrimaryDark"),Secondary:ns("Secondary"),Accent:{Light:{1:ns("Accent.Light.1"),2:ns("Accent.Light.2"),3:ns("Accent.Light.3"),4:ns("Accent.Light.4"),5:ns("Accent.Light.5"),6:ns("Accent.Light.6")},Dark:{1:ns("Accent.Dark.1"),2:ns("Accent.Dark.2"),3:ns("Accent.Dark.3")}},Neutral:{1:ns("Neutral.1"),2:ns("Neutral.2"),3:ns("Neutral.3"),4:ns("Neutral.4"),5:ns("Neutral.5"),6:ns("Neutral.6"),7:ns("Neutral.7"),8:ns("Neutral.8")},Validation:{Green:{Text:ns("Validation.Green.Text"),Icon:ns("Validation.Green.Icon"),Border:ns("Validation.Green.Border"),Background:ns("Validation.Green.Background")},Orange:{Text:ns("Validation.Orange.Text"),Icon:ns("Validation.Orange.Icon"),Border:ns("Validation.Orange.Border"),Background:ns("Validation.Orange.Background"),Badge:ns("Validation.Orange.Badge")},Red:{Text:ns("Validation.Red.Text"),Icon:ns("Validation.Red.Icon"),Border:ns("Validation.Red.Border"),Background:ns("Validation.Red.Background")},Blue:{Text:ns("Validation.Blue.Text"),Icon:ns("Validation.Blue.Icon"),Border:ns("Validation.Blue.Border"),Background:ns("Validation.Blue.Background")}},Shadow:{Accent:ns("Shadow.Accent"),Red:ns("Shadow.Red"),Elevation:ns("Shadow.Elevation")}},is=w.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`,as=S`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,os=w.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||rs.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${as} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,ss=w(os)`
    animation-delay: -0.45s;
`,ls=w(os)`
    animation-delay: -0.3s;
`,cs=w(os)`
    animation-delay: -0.15s;
`,us={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},ds={collections:{base:{D1:{fontFamily:us.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:us.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:us.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:us.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:us.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:us.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:us.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:us.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:us.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:us.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:us.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:us.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:us.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:us.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},hs=e=>t=>{const n=t.theme,r=Ko(ds,n[es.textStyleScheme]);return n.options&&n.options.textStyle?Jo(r,e,n.options.textStyle):Jo(r,e)},fs={D1:{fontFamily:hs("D1.fontFamily"),fontSize:hs("D1.fontSize"),fontWeight:hs("D1.fontWeight"),lineHeight:hs("D1.lineHeight"),letterSpacing:hs("D1.letterSpacing")},D2:{fontFamily:hs("D2.fontFamily"),fontSize:hs("D2.fontSize"),fontWeight:hs("D2.fontWeight"),lineHeight:hs("D2.lineHeight"),letterSpacing:hs("D2.letterSpacing")},D3:{fontFamily:hs("D3.fontFamily"),fontSize:hs("D3.fontSize"),fontWeight:hs("D3.fontWeight"),lineHeight:hs("D3.lineHeight"),letterSpacing:hs("D3.letterSpacing")},D4:{fontFamily:hs("D4.fontFamily"),fontSize:hs("D4.fontSize"),fontWeight:hs("D4.fontWeight"),lineHeight:hs("D4.lineHeight"),letterSpacing:hs("D4.letterSpacing")},DBody:{fontFamily:hs("DBody.fontFamily"),fontSize:hs("DBody.fontSize"),fontWeight:hs("DBody.fontWeight"),lineHeight:hs("DBody.lineHeight"),letterSpacing:hs("DBody.letterSpacing")},H1:{fontFamily:hs("H1.fontFamily"),fontSize:hs("H1.fontSize"),fontWeight:hs("H1.fontWeight"),lineHeight:hs("H1.lineHeight"),letterSpacing:hs("H1.letterSpacing")},H2:{fontFamily:hs("H2.fontFamily"),fontSize:hs("H2.fontSize"),fontWeight:hs("H2.fontWeight"),lineHeight:hs("H2.lineHeight"),letterSpacing:hs("H2.letterSpacing")},H3:{fontFamily:hs("H3.fontFamily"),fontSize:hs("H3.fontSize"),fontWeight:hs("H3.fontWeight"),lineHeight:hs("H3.lineHeight"),letterSpacing:hs("H3.letterSpacing")},H4:{fontFamily:hs("H4.fontFamily"),fontSize:hs("H4.fontSize"),fontWeight:hs("H4.fontWeight"),lineHeight:hs("H4.lineHeight"),letterSpacing:hs("H4.letterSpacing")},H5:{fontFamily:hs("H5.fontFamily"),fontSize:hs("H5.fontSize"),fontWeight:hs("H5.fontWeight"),lineHeight:hs("H5.lineHeight"),letterSpacing:hs("H5.letterSpacing")},H6:{fontFamily:hs("H6.fontFamily"),fontSize:hs("H6.fontSize"),fontWeight:hs("H6.fontWeight"),lineHeight:hs("H6.lineHeight"),letterSpacing:hs("H6.letterSpacing")},Body:{fontFamily:hs("Body.fontFamily"),fontSize:hs("Body.fontSize"),fontWeight:hs("Body.fontWeight"),lineHeight:hs("Body.lineHeight"),letterSpacing:hs("Body.letterSpacing")},BodySmall:{fontFamily:hs("BodySmall.fontFamily"),fontSize:hs("BodySmall.fontSize"),fontWeight:hs("BodySmall.fontWeight"),lineHeight:hs("BodySmall.lineHeight"),letterSpacing:hs("BodySmall.letterSpacing")},XSmall:{fontFamily:hs("XSmall.fontFamily"),fontSize:hs("XSmall.fontSize"),fontWeight:hs("XSmall.fontWeight"),lineHeight:hs("XSmall.lineHeight"),letterSpacing:hs("XSmall.letterSpacing")}},ps=e=>{switch(e){case 700:case"bold":return us.Bold;case 600:case"semibold":return us.Semibold;case 300:case"light":return us.Light;case 400:case"regular":return us.Regular;default:return""}},ms=(e,t)=>n=>{var r;const i=fs[e].fontFamily(n),a=fs[e].fontWeight(n);return Object.values(us).includes(i)?x`
                font-family: ${ps(t)||ps(a)||i};
                font-weight: normal !important;
            `:x`
            font-family: ${i};
            font-weight: ${null!==(r=gs(t)||a)&&void 0!==r?r:"normal"};
        `},gs=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},ys=e=>{if(e>0)return x`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},vs=(e,t,n=!1)=>r=>{const i=fs[e],a=i.fontSize(r);return x`
            ${ms(e,t)}
            font-size: ${a}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${x`
                margin-bottom: ${a*(n?1.05:0)}rem;
            `}
        `},bs=(e=!1,t=!1,n=void 0)=>t?x`
            display: block;
            ${ys(n)}
        `:e?x`
            display: inline;
        `:x`
            display: block;
            ${ys(n)}
        `;var $s;!function(e){e.D1=w.h1`
        ${e=>x`
                ${vs("D1",e.weight,e.paragraph)}
                color: ${rs.Neutral[1]};
                ${bs(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D2=w.h1`
        ${e=>x`
                ${vs("D2",e.weight,e.paragraph)}
                color: ${rs.Neutral[1]};
                ${bs(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D3=w.h1`
        ${e=>x`
                ${vs("D3",e.weight,e.paragraph)}
                color: ${rs.Neutral[1]};
                ${bs(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.D4=w.h1`
        ${e=>x`
                ${vs("D4",e.weight,e.paragraph)}
                color: ${rs.Neutral[1]};
                ${bs(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.DBody=w.h1`
        ${e=>x`
                ${vs("DBody",e.weight,e.paragraph)}
                color: ${rs.Neutral[1]};
                ${bs(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H1=w.h1`
        ${e=>x`
                ${vs("H1",e.weight,e.paragraph)}
                color: ${rs.Neutral[1]};
                ${bs(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H2=w.h2`
        ${e=>x`
                ${vs("H2",e.weight,e.paragraph)}
                color: ${rs.Neutral[1]};
                ${bs(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H3=w.h3`
        ${e=>x`
                ${vs("H3",e.weight,e.paragraph)}
                color: ${rs.Neutral[1]};
                ${bs(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H4=w.h4`
        ${e=>x`
                ${vs("H4",e.weight,e.paragraph)}
                color: ${rs.Neutral[1]};
                ${bs(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H5=w.h5`
        ${e=>x`
                ${vs("H5",e.weight,e.paragraph)}
                color: ${rs.Neutral[1]};
                ${bs(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.H6=w.h6`
        ${e=>x`
                ${vs("H6",e.weight,e.paragraph)}
                color: ${rs.Neutral[1]};
                ${bs(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Body=w.p`
        ${e=>x`
                ${vs("Body",e.weight,e.paragraph)}
                color: ${rs.Neutral[1]};
                ${bs(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.BodySmall=w.p`
        ${e=>x`
                ${vs("BodySmall",e.weight,e.paragraph)}
                color: ${rs.Neutral[1]};
                ${bs(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.XSmall=w.span`
        ${e=>x`
                ${vs("XSmall",e.weight,e.paragraph)}
                color: ${rs.Neutral[1]};
                ${bs(e.inline,e.paragraph,e.maxLines)}
            `}
    `,e.Hyperlink={Default:e=>xs(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>xs(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))}}($s||($s={}));const ws=w.a`
    ${e=>x`
            ${vs(e.textStyle,e.weight)}
            color: ${rs.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${rs.Secondary};

                svg {
                    color: ${rs.Secondary};
                }
            }
        `}
`,Ss=w(F)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,xs=n=>{var{external:r=!1,children:i}=n,a=k(n,["external","children"]);return e(ws,Object.assign({},a,{children:[i,r&&t(Ss,{})]}))};var Ds;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Ds||(Ds={}));const Os=w.button`
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
    ${e=>{switch(e.$buttonStyle){case"secondary":return x`
                    background-color: ${rs.Neutral[8](e)};
                    border: 1px solid ${rs.Primary(e)};

                    span {
                        color: ${rs.Primary(e)};
                    }
                `;case"light":return x`
                    background-color: ${rs.Neutral[8](e)};
                    border: 1px solid ${rs.Neutral[5](e)};

                    span {
                        color: ${rs.Primary(e)};
                    }
                `;case"disabled":return x`
                    background-color: ${rs.Neutral[6](e)};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${rs.Neutral[3](e)};
                    }
                `;case"link":return x`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${rs.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${rs.Secondary};
                        }
                    }
                `;default:return x`
                    background-color: ${rs.Primary(e)};
                    border: 1px solid transparent;

                    ${T.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${rs.Neutral[8](e)};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?x`
                    height: 2.5rem;
                    span {
                        ${vs("H5","semibold")}
                    }

                    ${T.mobileS} {
                        height: auto;
                    }
                `:x`
                    height: 3rem;
                    span {
                        ${vs("H4","semibold")}
                    }

                    ${T.mobileS} {
                        height: auto;
                    }
                `}
`,_s=w((({color:n,className:r,size:i=18})=>e(is,Object.assign({className:r,$size:i,$color:n},{children:[t(os,{id:"inner1",$size:i-2,$borderWidth:2}),t(ss,{id:"inner2",$size:i-2,$borderWidth:2}),t(ls,{id:"inner3",$size:i-2,$borderWidth:2}),t(cs,{id:"inner4",$size:i-2,$borderWidth:2})]}))))`
    margin-right: 0.5rem;
    ${e=>{let t;switch(e.$buttonStyle){case"secondary":case"light":case"link":t=rs.Primary(e);break;case"disabled":t=rs.Neutral[3](e);break;default:t=rs.Neutral[8](e)}return x`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,Fs={Default:i.forwardRef(((n,r)=>{const{children:i,disabled:a=!1,loading:o=!1,styleType:s="default"}=n,l=k(n,["children","disabled","loading","styleType"]),c={$buttonStyle:a?"disabled":s,$buttonSizeStyle:"default"};return e(Os,Object.assign({ref:r,"data-testid":l["data-testid"]||"button",disabled:a},c,l,{children:[o&&t(_s,Object.assign({},c)),t("span",{children:i})]}))})),Small:i.forwardRef(((n,r)=>{const{children:i,disabled:a=!1,loading:o=!1,styleType:s="default"}=n,l=k(n,["children","disabled","loading","styleType"]),c={$buttonStyle:a?"disabled":s,$buttonSizeStyle:"small"};return e(Os,Object.assign({ref:r,"data-testid":l["data-testid"]||"button",disabled:a},c,l,{children:[o&&t(_s,Object.assign({},c,{size:16})),t("span",{children:i})]}))}))},js=w.button`
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

        ${({$highlight:e})=>e&&x`
                background-color: ${rs.Neutral[7]};
            `}
    }
`,ks=i.forwardRef(((e,n)=>{var{children:r,focusHighlight:i=!0,focusOutline:a="none",type:o="button"}=e,s=k(e,["children","focusHighlight","focusOutline","type"]);return t(js,Object.assign({ref:n,$outline:a,$highlight:i,type:o},s,{children:r}))})),Ms=x`
    color: ${rs.Neutral[3]};
    height: 1rem;
    width: 1rem;
`,Bs=w(O)`
    ${Ms}
`,Ps=w(_)`
    ${Ms}
`,Es=w(D)`
    ${Ms}
    transition: transform 250ms ease-in-out;
    margin-left: 0.5rem;
`,As=w.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
`,Cs=w.div`
    display: flex;
    flex: 1;
    position: relative;
`,Hs=w.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${rs.Neutral[8]};

    ${e=>{if(!e.$visible)return x`
                display: none;
            `}}
`,Ts=w.div`
    display: flex;
    justify-content: space-between;
    margin: 0 0 0.5rem 0;
`,Is=w.div`
    display: flex;
`,Rs=w.button`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;

    ${e=>!1===e.$visible?x`
                display: none;
            `:e.$expanded?x`
                ${Es} {
                    transform: rotate(180deg);
                }
            `:void 0}
`,Ls=w.p`
    ${vs("H5","regular")}
`,zs=w.div`
    display: flex;
`,Ys=w(ks)`
    margin: auto 0;
    padding: 0.75rem;

    :disabled {
        cursor: not-allowed;
    }
`,Ws=w.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;
`,Ns=w(Fs.Small)`
    flex: 1;
`,Vs=w.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 2.5rem);
    align-content: center;
    justify-content: center;

    ${e=>{switch(e.$type){case"standalone":return x`
                    gap: 0.5rem 2.5rem;
                `;case"input":return x`
                    gap: 0.5rem 1rem;
                `}}}
`,qs=w.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: default;
    border-radius: 5rem;
    margin: 0 0.5rem;

    ${e=>e.$interactive?x`
                cursor: pointer;
                &:hover {
                    box-shadow: 0px 0px 4px 1px ${rs.Shadow.Accent};
                    border: 1px solid ${rs.Accent.Light[1]};
                }
            `:e.$disabledDisplay?x`
                cursor: not-allowed;
            `:void 0}

    ${e=>{switch(e.$variant){case"current-month":return x`
                    background-color: ${rs.Accent.Light[6](e)};
                `;case"selected-month":return x`
                    background-color: ${rs.Accent.Light[5](e)};
                    border: 1px solid ${rs.Primary(e)};
                `}}}
`,Qs=w($s.H5)`
    ${e=>{if(e.$disabledDisplay)return x`
                color: ${rs.Neutral[4]};
            `;switch(e.$variant){case"current-month":return x`
                    color: ${rs.Neutral[3](e)};
                `;case"selected-month":return x`
                    ${vs("H5","semibold")}
                    color: ${rs.Primary(e)};
                `}}}
`,Us=({calendarDate:e,currentFocus:n,selectedStartDate:r,selectedEndDate:i,viewCalendarDate:a,type:o,isNewSelection:s,minDate:l,maxDate:c,allowDisabledSelection:u,onMonthSelect:d})=>{const h=g((()=>Pi.generateMonths(E(e))),[e]),f=e=>{const t="start"===n&&i&&e.isAfter(i,"month")&&s,a="end"===n&&r&&e.isBefore(r,"month")&&s;return t||a},p=e=>{const t=e.format("MMMM"),n=(r=e,!Pi.isWithinRange(r,l?E(l):void 0,c?E(c):void 0,"month"));var r;const i=a.isSame(e,"month")?"selected-month":E().isSame(e,"month")?"current-month":"default";return{disabledDisplay:n||f(e),interactive:!n||u,month:t,variant:i}};return h.length?t(Vs,Object.assign({$type:o},{children:h.map((e=>{const{disabledDisplay:n,interactive:r,variant:i,month:a}=p(e);return t(qs,Object.assign({$variant:i,$disabledDisplay:n,$interactive:r,onClick:()=>((e,t)=>{t||d(e)})(e,!r)},{children:t(Qs,Object.assign({weight:"regular",$variant:i,$disabledDisplay:n},{children:a}))}),a)}))})):null},Zs=w.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-content: center;
    grid-template-columns: repeat(3, 1fr);

    ${e=>{switch(e.$type){case"standalone":return x`
                    grid-template-rows: repeat(4, 4rem);
                    gap: 0.5rem 2.5rem;
                `;case"input":return x`
                    grid-template-rows: repeat(4, 4.375rem);
                    gap: 0.5rem 1rem;
                `}}}
`,Gs=w.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: default;
    border-radius: 0.5rem;
    margin: 0 0.5rem;

    ${e=>e.$interactive?x`
                cursor: pointer;
                &:hover {
                    box-shadow: 0px 0px 4px 1px ${rs.Shadow.Accent};
                    border: 1px solid ${rs.Accent.Light[1]};
                }
            `:e.$disabledDisplay?x`
                cursor: not-allowed;
            `:void 0}

    ${e=>{switch(e.$variant){case"current-year":return x`
                    background: ${rs.Accent.Light[6](e)};
                `;case"selected-year":return x`
                    background: ${rs.Accent.Light[5](e)};
                    border: 1px solid ${rs.Primary(e)};
                `}}};
`,Xs=w($s.H5)`
    ${e=>{if(e.$disabledDisplay)return x`
                color: ${rs.Neutral[4]};
            `;switch(e.$variant){case"current-year":return x`
                    color: ${rs.Neutral[3](e)};
                `;case"selected-year":return x`
                    ${vs("H5","semibold")}
                    color: ${rs.Primary(e)};
                `;case"other-decade":return x`
                    color: ${rs.Neutral[4](e)};
                `}}}
`,Js=({calendarDate:e,currentFocus:n,selectedStartDate:r,selectedEndDate:i,viewCalendarDate:a,type:o,isNewSelection:s,minDate:l,maxDate:c,allowDisabledSelection:u,onYearSelect:d})=>{const h=g((()=>Pi.generateDecadeOfYears(E(e))),[e]),f=e=>{const t="start"===n&&i&&e.isAfter(i,"year")&&s,a="end"===n&&r&&e.isBefore(r,"year")&&s;return t||a},p=e=>{const t=[0,11].includes(h.indexOf(e)),n=e.year(),r=(i=e,!Pi.isWithinRange(i,l?E(l):void 0,c?E(c):void 0,"year"));var i;const o=t?"other-decade":a.isSame(e,"year")?"selected-year":E().isSame(e,"year")?"current-year":"default";return{disabledDisplay:r||f(e),interactive:!r||u,year:n,variant:o}};return h.length?t(Zs,Object.assign({$type:o},{children:h.map((e=>{const{disabledDisplay:n,interactive:r,variant:i,year:a}=p(e);return t(Gs,Object.assign({$variant:i,$disabledDisplay:n,$interactive:r,onClick:()=>((e,t)=>{t||d(e)})(e,!r)},{children:t(Xs,Object.assign({weight:"regular",$variant:i,$disabledDisplay:n,$interactive:r},{children:a}))}),a)}))})):null},Ks=i.forwardRef(((r,i)=>{var{children:a,initialCalendarDate:l,type:c,minDate:u,maxDate:h,currentFocus:f,selectedStartDate:p,selectedEndDate:m,selectWithinRange:g,dynamicHeight:v=!1,allowDisabledSelection:b,onCalendarDateChange:$,withButton:w,doneButtonDisabled:S,onDismiss:x,showNavigationHeader:D=!0,getLeftArrowDate:O,getRightArrowDate:_,isLeftArrowDisabled:F,isRightArrowDisabled:j,getMonthHeaderLabel:M,getYearHeaderLabel:B}=r,P=k(r,["children","initialCalendarDate","type","minDate","maxDate","currentFocus","selectedStartDate","selectedEndDate","selectWithinRange","dynamicHeight","allowDisabledSelection","onCalendarDateChange","withButton","doneButtonDisabled","onDismiss","showNavigationHeader","getLeftArrowDate","getRightArrowDate","isLeftArrowDisabled","isRightArrowDisabled","getMonthHeaderLabel","getYearHeaderLabel"]);const[A,C]=s(Ii.toDayjs(l)),[H,T]=s(Ii.toDayjs(l)),[I,R]=s("default"),L=o(null),z=o(null),Y=o();y(i,(()=>({defaultView(){R("default")},resetView(){const e=Ii.toDayjs(l);C(e),T(e),R("default")},setCalendarDate(e){const t=Ii.toDayjs(e);C(t),T(t)}}))),d((()=>{const e=Ii.toDayjs(l);C(e),T(e)}),[l]),d((()=>{Z(H)}),[H]);const W=()=>{"month-options"!==I?(R("month-options"),Y.current.focus()):(R("default"),C(H))},N=()=>{"default"!==I?(R("default"),C(H)):R("year-options")},V=()=>{Y.current.focus();const e=O?O(A):A.subtract(1,"month");switch(I){case"default":T(e),C(e);break;case"month-options":C((e=>e.subtract(1,"year")));break;case"year-options":C((e=>e.subtract(10,"year")))}},q=()=>{Y.current.focus();const e=_?_(A):A.add(1,"month");switch(I){case"default":T(e),C(e);break;case"month-options":C((e=>e.add(1,"year")));break;case"year-options":C((e=>e.add(10,"year")))}},Q=e=>{C(e),T(e),w||R("default")},U=()=>{const e=Ii.toDayjs(l);C(e),T(e),"default"===I?G("reset"):R("default")},Z=e=>{$&&$(e)},G=e=>{x&&x(e)},X=()=>{if(!u||b)return!1;const e=E(u);return"month-options"===I?!Pi.isPreviousYearWithinRange(A,e):"year-options"===I?!Pi.isPreviousDecadeWithinRange(A,e):F?F(A):!Pi.isPreviousMonthWithinRange(A,e)},J=()=>{if(!h||b)return!1;const e=E(h);return"month-options"===I?!Pi.isNextYearWithinRange(A,e):"year-options"===I?!Pi.isNextDecadeWithinRange(A,e):j?j(A):!Pi.isNextMonthWithinRange(A,e)},K=()=>{if("year-options"===I){const{beginDecade:e,endDecade:t}=Pi.getStartEndDecade(A);return`${e} to ${t}`}return B?B(A):A.format("YYYY")},ee=()=>{const r=M?M(A):A.format("MMM");return e(n,{children:[e(Rs,Object.assign({type:"button",tabIndex:-1,$expanded:"month-options"===I,$visible:"default"===I,id:"month-dropdown",onClick:W},{children:[t(Ls,{children:r}),t(Es,{})]})),e(Rs,Object.assign({type:"button",tabIndex:-1,$expanded:"default"!==I,id:"year-dropdown",onClick:N},{children:[t(Ls,{children:K()}),t(Es,{})]}))]})},te=()=>{switch(I){case"month-options":return t(Us,{type:c,calendarDate:A,currentFocus:f,minDate:u,maxDate:h,selectedStartDate:p,selectedEndDate:m,viewCalendarDate:H,isNewSelection:g,onMonthSelect:Q,allowDisabledSelection:b});case"year-options":return t(Js,{type:c,calendarDate:A,currentFocus:f,minDate:u,maxDate:h,selectedStartDate:p,selectedEndDate:m,viewCalendarDate:H,isNewSelection:g,onYearSelect:Q,allowDisabledSelection:b});default:return null}};return e(As,Object.assign({ref:Y,tabIndex:-1,"data-id":"calendar-container","data-testid":"calendar-container"},P,{children:[D&&e(Ts,Object.assign({"data-id":"calendar-header","data-testid":"calendar-header"},{children:[t(Is,{children:ee()}),e(zs,{children:[t(Ys,Object.assign({"data-testid":"left-arrow-btn",disabled:X(),focusHighlight:!1,tabIndex:-1,onClick:V},{children:t(Bs,{})})),t(Ys,Object.assign({"data-testid":"right-arrow-btn",disabled:J(),focusHighlight:!1,tabIndex:-1,onClick:q},{children:t(Ps,{})}))]})]})),t(Cs,{children:(()=>{const r="function"==typeof a?a({calendarDate:H,currentView:I}):a;return e(n,v?{children:["default"===I&&r,te()]}:{children:[r,t(Hs,Object.assign({$visible:"default"!==I},{children:te()}))]})})()}),(()=>{if(!w)return;const n=!!("default"===I)&&S;return e(Ws,{children:[t(Ns,Object.assign({ref:z,"data-testid":"cancel-button",styleType:"light",type:"button",onClick:U},{children:"Cancel"})),t(Ns,Object.assign({"data-testid":"done-button",ref:L,type:"button",onClick:()=>(e=>{e||(C(H),"default"===I?G("confirmed"):R("default"))})(n),disabled:n},{children:"Done"}))]})})()]}))})),el=w.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 0.25rem;
`,tl=w.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    pointer-events: none;
    user-select: none;
`,nl=w.div`
    grid-column: 1 / -1;
    display: flex;
`,rl=w.div`
    display: flex;
    position: relative;
    height: 2.5rem;
    align-items: center;
    justify-content: center;
    flex: 1;
`,il=w.div`
    position: absolute;
    width: 50%;
    height: 100%;

    ${e=>{switch(e.$position){case"left":return x`
                    left: 0;
                `;case"right":return x`
                    right: 0;
                `}}}
`,al=w.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    cursor: default;
    position: absolute;
`,ol=w($s.H5)`
    ${e=>{const{$disabledDisplay:t,$selected:n,$variant:r}=e;if(t&&n)return x`
                ${vs("H5","semibold")};
                color: ${rs.Accent.Light[2]};
            `;if(t)return x`
                color: ${rs.Neutral[4]};
            `;if(n)return x`
                ${vs("H5","semibold")};
                color: ${rs.Primary};
            `;switch(r){case"other-month":return x`
                    color: ${rs.Neutral[4]};
                `;case"today":return x`
                    color: ${rs.Neutral[3]};
                `;case"default":return x`
                    color: ${rs.Neutral[1]};
                `}}}
`,sl=w(il)`
    ${e=>{const{$selected:t}=e;if(t)return x`
                border-top: 1px solid ${rs.Accent.Light[4]};
                border-bottom: 1px solid ${rs.Accent.Light[4]};
                background-color: ${rs.Accent.Light[5]};
            `}}

    ${e=>{const{$hovered:t,$overlap:n}=e;return t?x`
                border-top: 1px dashed ${rs.Accent.Light[4]};
                border-bottom: 1px dashed ${rs.Accent.Light[4]};
                background-color: ${rs.Accent.Light[6]};
            `:n?x`
                background-color: ${rs.Accent.Light[4]};
            `:void 0}}
`,ll=w(al)`
    ${e=>{const{$hovered:t,$selected:n}=e;return n?x`
                background: ${rs.Accent.Light[5]};
                border: 1px solid ${rs.Primary};
            `:t?x`
                box-shadow: 0px 0px 4px 1px ${rs.Shadow.Accent};
                border: 1px solid ${rs.Accent.Light[1]};
                background-color: ${rs.Neutral[8]};
            `:void 0}}

    ${e=>{const{$interactive:t,$disabledDisplay:n}=e;return t?x`
                cursor: pointer;
                :hover {
                    box-shadow: 0px 0px 4px 1px ${rs.Shadow.Accent};
                    border: 1px solid ${rs.Accent.Light[1]};
                    background-color: ${rs.Neutral[8]};
                }
            `:n?x`
                cursor: not-allowed;
            `:void 0}}

    ${e=>{const{$disabledDisplay:t,$overlap:n,$variant:r}=e;return n?x`
                border: 1px solid ${rs.Accent.Light[1]};
                background: ${rs.Accent.Light[4]};

                :hover {
                    background: ${rs.Accent.Light[4]};
                }
            `:t?x`
                color: ${rs.Neutral[4]};
            `:"today"===r?x`
                    background: ${rs.Accent.Light[5]};
                `:void 0}}
`,cl=w(il)`
    ${e=>{const{$hovered:t,$selected:n}=e;return t?x`
                border-top: 1px dashed ${rs.Accent.Light[4]};
                border-bottom: 1px dashed ${rs.Accent.Light[4]};
                background-color: ${rs.Accent.Light[6]};
            `:n?x`
                border-top: 1px solid ${rs.Primary};
                border-bottom: 1px solid ${rs.Primary};
                background-color: ${rs.Accent.Light[5]};
            `:void 0}}

    ${e=>{if(e.$overlap)return x`
                border-top: 1px solid ${rs.Primary};
                border-bottom: 1px solid ${rs.Primary};
                background-color: ${rs.Neutral[8]};
                box-shadow: 4px 0px 4px 0px ${rs.Shadow.Accent};
            `}}
`,ul=w.div`
    display: none;
    position: absolute;
    pointer-events: none;
    background-color: transparent;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;

    ::before {
        content: "";
        display: block;
        position: absolute;
        width: 1.75rem; // width must larger than half original width to cover middle border curve and border shadow
        pointer-events: none;
        height: 100%;
        top: 0;
    }

    ${e=>{if(e.$hovered)return x`
                border: 1px dashed ${rs.Accent.Light[4]};

                ::before {
                    background-color: ${rs.Accent.Light[6]};
                }
            `}}

    ${e=>{if(e.$selected)return x`
                border: 1px solid ${rs.Primary};

                ::before {
                    background-color: ${rs.Accent.Light[5]};
                }
            `}}

    ${e=>{if(e.$overlap)return x`
                ::before {
                    background-color: ${rs.Neutral[8]};
                }
            `}}

    ${e=>e.$overlap&&"left"===e.$position?x`
                box-shadow: -1px 0px 4px 0px ${rs.Shadow.Accent};
            `:e.$overlap&&"right"===e.$position?x`
                box-shadow: 1px 0px 4px 0px ${rs.Shadow.Accent};
            `:void 0}

    ${e=>{switch(e.$position){case"left":return x`
                    display: block;

                    ::before {
                        left: 50%;
                    }
                `;case"right":return x`
                    display: block;

                    ::before {
                        right: 50%;
                    }
                `}}}
`,dl=w(al)`
    ${e=>{const{$hovered:t,$selected:n,$position:r}=e;if(n){if("left"===r)return x`
                    background: ${rs.Accent.Light[5]};
                `;if("right"===r)return x`
                    background: ${rs.Accent.Light[5]};
                `}if(t)return x`
                background-color: ${rs.Accent.Light[6]};
            `}}

    ${e=>{const{$overlap:t,$position:n}=e;if(t){if("left"===n)return x`
                    background-color: ${rs.Neutral[8]};
                `;if("right"===n)return x`
                    background-color: ${rs.Neutral[8]};
                `}}}

    ${e=>{const{$interactive:t,$disabledDisplay:n}=e;return t?x`
                cursor: pointer;
            `:n?x`
                cursor: not-allowed;
            `:void 0}}
    
    ${e=>{const{$disabledDisplay:t,$overlap:n,$selected:r,$variant:i}=e;return t?x`
                color: ${rs.Neutral[4]};
            `:"today"===i?n?x`
                    background: ${rs.Neutral[8]};
                    height: 2.35rem;
                `:r?x`
                    height: 2.35rem;
                `:x`
                    background: ${rs.Accent.Light[5]};
                `:void 0}}
`,hl=w(ol)`
    ${e=>{if("default"===e.$view)return x`
                z-index: 1;
            `}}
`,fl=({type:r,dayDate:i,currentView:a,variant:o,styleLeftProps:s,styleRightProps:l,styleCircleProps:c,styleLabelProps:u,styleOverflowCirleProps:d,onDayClick:h,onHoverCell:f})=>t(n,{children:(()=>{const n=i.format("YYYY-MM-DD");switch(r){case"regular":return e(rl,{children:[t(sl,Object.assign({$position:"left"},s)),t(sl,Object.assign({$position:"right"},l)),t(ll,Object.assign({$variant:o,onClick:()=>h(i,!c.$interactive),onMouseEnter:()=>f(n,!c.$interactive)},c,{children:t(ol,Object.assign({weight:u.$selected?"semibold":"regular",$variant:o},u,{children:i.format("D")}))}))]});case"week":return e(rl,{children:[t(cl,Object.assign({$position:"left"},s)),t(cl,Object.assign({$position:"right"},l)),t(dl,Object.assign({$variant:o,onClick:()=>h(i,!c.$interactive),onMouseEnter:()=>f(n,!c.$interactive)},c,d,{children:t(hl,Object.assign({weight:u.$selected?"semibold":"regular",$variant:o,$view:a},u,{children:i.format("D")}))})),t(ul,Object.assign({},c,d))]})}})()});var pl;E.extend(ji),function(e){e.generateStyleProps=(e,t,n,r,i,a,o,s,l,c,u)=>{const d=e.format("YYYY-MM-DD"),h={},f={},p={},m={},g=ml(e,l,o,s),y=t&&n&&t===n;return!u&&["reset-start","reset-end"].includes(i)&&[t,n].includes(d)&&(p.$overlap=!0),(g||gl(e,a,t,n,u))&&(p.$disabledDisplay=!0,m.$disabledDisplay=!0),p.$interactive=!g||c,[t,n].includes(d)&&(p.$selected=!0,m.$selected=!0),t&&n&&!y&&e.isBetween(t,n,"day","[]")&&(m.$selected=!0,e.isSame(t)?f.$selected=!0:e.isSame(n)?h.$selected=!0:(h.$selected=!0,f.$selected=!0)),"hover-start"===i&&e.isBetween(n,r,"day","[]")&&(m.$selected=!0,n===d?h.$hovered=!0:r===d?(f.$hovered=!0,p.$hovered=!0):(h.$hovered=!0,f.$hovered=!0)),"hover-end"===i&&e.isBetween(t,r,"day","[]")&&(m.$selected=!0,t===d?f.$hovered=!0:r===d?(h.$hovered=!0,p.$hovered=!0):(h.$hovered=!0,f.$hovered=!0)),"overlap-start"===i&&e.isBetween(n,r,"day","[]")&&(r===d?(f.$overlap=!0,p.$overlap=!0):n===d?(h.$overlap=!0,p.$overlap=!0,p.$hovered=!0):(h.$overlap=!0,f.$overlap=!0)),"overlap-end"===i&&e.isBetween(t,r,"day","[]")&&(r===d?(h.$overlap=!0,p.$overlap=!0):t===d?(f.$overlap=!0,p.$overlap=!0,p.$hovered=!0):(h.$overlap=!0,f.$overlap=!0)),"full-overlap-start"===i&&e.isBetween(n,r,"day","[]")&&(t===d&&y?(h.$hovered=!0,p.$overlap=!0):t===d?(h.$hovered=!0,f.$overlap=!0,p.$overlap=!0):n===d?(h.$overlap=!0,p.$overlap=!0):e.isSame(r)?(f.$hovered=!0,m.$selected=!0,p.$hovered=!0):e.isBetween(t,r,"day","()")&&(h.$hovered=!0,f.$hovered=!0,m.$selected=!0)),"full-overlap-end"===i&&e.isBetween(t,r,"day","[]")&&(n===d&&y?(f.$hovered=!0,p.$overlap=!0):n===d?(h.$overlap=!0,f.$hovered=!0,p.$overlap=!0):t===d?(f.$overlap=!0,p.$overlap=!0):e.isSame(r)?(h.$hovered=!0,m.$selected=!0,p.$hovered=!0):e.isBetween(n,r,"day","()")&&(h.$hovered=!0,f.$hovered=!0,m.$selected=!0)),["full-overlap-end","full-overlap-start"].includes(i)&&e.isBetween(t,n,"day","()")&&(h.$overlap=!0,f.$overlap=!0),{styleLeftProps:h,styleRightProps:f,styleCircleProps:p,styleLabelProps:m}},e.getStylePropsForWeekSelection=(e,t,n,r,i,a,o,s)=>{const l={},c={},u={},d={},h={},f=ml(e,o,i,a);if(f&&(u.$disabledDisplay=!0,d.$disabledDisplay=!0),u.$interactive=!f||s,t){const{firstDayOfWeek:n,lastDayOfWeek:r}=yl(t);e.isBetween(n,r,"day","[]")&&(d.$selected=!0,e.isSame(n)?(c.$selected=!0,u.$selected=!0,h.$position="left"):e.isSame(r)?(l.$selected=!0,u.$selected=!0,h.$position="right"):(l.$selected=!0,u.$selected=!0,c.$selected=!0))}if(r){const{firstDayOfWeek:t,lastDayOfWeek:n}=yl(r);e.isBetween(t,n,"day","[]")&&(d.$selected=!0,e.isSame(t)?(c.$hovered=!0,u.$hovered=!0,h.$position="left"):e.isSame(n)?(l.$hovered=!0,u.$hovered=!0,h.$position="right"):(l.$hovered=!0,c.$hovered=!0))}if(t&&n&&r&&e.isBetween(t,n,"day","[]")&&E(r).isBetween(t,n,"day","[]")){const{firstDayOfWeek:n,lastDayOfWeek:r}=yl(t);e.isBetween(n,r,"day","[]")&&(d.$selected=!0,e.isSame(n)?(c.$overlap=!0,u.$overlap=!0,h.$position="left"):e.isSame(r)?(l.$overlap=!0,u.$overlap=!0,h.$position="right"):(l.$overlap=!0,u.$overlap=!0,c.$overlap=!0))}return{styleLeftProps:l,styleRightProps:c,styleCircleProps:u,styleLabelProps:d,styleOverflowCirleProps:h}}}(pl||(pl={}));const ml=(e,t,n,r)=>{const i=Pi.isWithinRange(e,n?E(n):void 0,r?E(r):void 0),a=t&&t.includes(e.format("YYYY-MM-DD"));return!i||a},gl=(e,t,n,r,i)=>{const a="start"===t&&r&&e.isAfter(r)&&i,o="end"===t&&n&&e.isBefore(n)&&i;return a||o},yl=e=>({firstDayOfWeek:Ii.toDayjs(e).startOf("week").format("YYYY-MM-DD"),lastDayOfWeek:Ii.toDayjs(e).endOf("week").format("YYYY-MM-DD")});E.extend(ji);const vl=({calendarDate:n,currentFocus:r,disabledDates:i,selectedStartDate:a,selectedEndDate:o,onSelect:l,onHover:c,isNewSelection:u,minDate:d,maxDate:h,variant:f,allowDisabledSelection:p})=>{const m=g((()=>Pi.generateDays(n)),[n]),[y,v]=s(""),b=(e,t)=>{t&&!p||l(e)},$=(e,t)=>{t&&!p||(v(e),c(e))},w=()=>{v(""),c("")},S=(()=>{if(!y||"single"===f)return null;const e=E(y);if(a&&o)if(e.isBefore(a)){if("start"===r)return"full-overlap-start";if("end"===r)return"reset-end"}else if(e.isAfter(o)){if("end"===r)return"full-overlap-end";if("start"===r)return"reset-start"}else if(e.isBetween(a,o,"day","[]")&&![a,o].includes(y)){if("start"===r)return"overlap-start";if("end"===r)return"overlap-end"}if(a&&!o){if(e.isAfter(a)&&"end"===r)return"hover-end"}else if(!a&&o&&e.isBefore(o)&&"start"===r)return"hover-start";return null})();return e(el,Object.assign({"data-testid":"calendar-content"},{children:[m[0].map(((e,n)=>t(tl,{children:t($s.H6,Object.assign({weight:"semibold"},{children:E(e).format("ddd")}))},`week-day-${n}`))),m.map(((e,s)=>t(nl,Object.assign({onMouseLeave:w},{children:e.map(((e,s)=>{const{variant:l}=(e=>({variant:n.month()!==e.month()?"other-month":E().isSame(e,"day")?"today":"default"}))(e),{styleLeftProps:c,styleRightProps:f,styleCircleProps:m,styleLabelProps:g}=pl.generateStyleProps(e,a,o,y,S,r,d,h,i,p,u);return t(fl,{type:"regular",dayDate:e,variant:l,styleLeftProps:c,styleRightProps:f,styleCircleProps:m,styleLabelProps:g,onDayClick:b,onHoverCell:$},`day-${s}`)}))}),s)))]}))},bl=({calendarDate:n,disabledDates:r,selectedStartDate:i,selectedEndDate:a,onSelect:o,onHover:l,minDate:c,maxDate:u,currentView:d,allowDisabledSelection:h})=>{const f=g((()=>Pi.generateDays(n)),[n]),[p,m]=s(""),y=(e,t)=>{if(t&&!h)return;const n=e.startOf("week");o(n),e&&!E(e).isSame(n,"month")&&m("")},v=(e,t)=>{t&&!h||(m(e),l(e))},b=()=>{m(""),l("")};return e(el,Object.assign({"data-testid":"calendar-content"},{children:[f[0].map(((e,n)=>t(tl,{children:t($s.H6,Object.assign({weight:"semibold"},{children:E(e).format("ddd")}))},`week-day-${n}`))),f.map(((e,o)=>t(nl,Object.assign({onMouseLeave:b},{children:e.map(((e,o)=>{const{variant:s}=(e=>({variant:n.month()!==e.month()?"other-month":E().isSame(e,"day")?"today":"default"}))(e),{styleLeftProps:l,styleRightProps:f,styleCircleProps:m,styleLabelProps:g,styleOverflowCirleProps:b}=pl.getStylePropsForWeekSelection(e,i,a,p,c,u,r,h);return t(fl,{type:"week",dayDate:e,variant:s,currentView:d,styleLeftProps:l,styleRightProps:f,styleCircleProps:m,styleLabelProps:g,styleOverflowCirleProps:b,onDayClick:y,onHoverCell:v},`day-${o}`)}))}),o)))]}))},$l=w.div`
    width: 100%;
    padding: 1.5rem 2rem;
    background: ${rs.Neutral[8]};

    ${e=>{if("input"===e.$type)return x`
                border: 1px solid ${rs.Neutral[5]};
                border-radius: 8px;
                overflow: hidden;
                padding: 1.5rem 1.25rem;

                [data-id="header"] {
                    margin: 0 0 0.25rem 0;
                }
            `}}
`,wl=i.forwardRef((({disabledDates:e,onYearMonthDisplayChange:n,onSelect:r,onHover:i,onDismiss:a,value:s,endValue:l,currentFocus:c,withButton:u,variant:d,minDate:h,maxDate:f,allowDisabledSelection:p,type:m="standalone",selectWithinRange:g=!0,initialCalendarDate:v},b)=>{const $=o(),w=o(void 0);y(b,(()=>({reset(){$.current.resetView()},setCalendarDate(e){$.current.setCalendarDate(e)}})));const S=e=>{const t=e.format("YYYY-MM-DD");$.current.setCalendarDate(t),D(t)},x=e=>{O(e)},D=e=>{r&&r(e)},O=e=>{i&&i(e)},_=e=>{if(n){const t={month:e.month()+1,year:e.year()};n(t)}};return t($l,Object.assign({$type:m},{children:t(Ks,Object.assign({type:m,ref:$,withButton:u,doneButtonDisabled:(()=>{if(!u)return;let e=!0;switch(d){case"single":e=!1;break;case"range":e=!!s!=!!l;break;case"week":e=!s&&!l}return e})(),onDismiss:a,minDate:h,maxDate:f,selectWithinRange:g,currentFocus:c,selectedStartDate:s,selectedEndDate:l,allowDisabledSelection:p,onCalendarDateChange:e=>{w.current&&w.current.isSame(e,"month")||_(e),w.current=e},initialCalendarDate:v},{children:({calendarDate:n,currentView:r})=>((n,r)=>{switch(d){case"single":case"range":default:return t(vl,{calendarDate:n,currentFocus:c,disabledDates:e,selectedStartDate:s,selectedEndDate:l,variant:d,minDate:h,maxDate:f,isNewSelection:g,allowDisabledSelection:p,onSelect:S,onHover:x});case"week":return t(bl,{calendarDate:n,disabledDates:e,selectedStartDate:s,selectedEndDate:l,minDate:h,maxDate:f,currentView:r,allowDisabledSelection:p,onSelect:S,onHover:x})}})(n,r)}))}))})),Sl=i.forwardRef(((e,n)=>{const{isOpen:r}=e,i=k(e,["isOpen"]),a=o(),l=function(e){void 0===e&&(e={});var t=e.skipOnMount,n=void 0!==t&&t,r=e.refreshMode,i=e.refreshRate,a=void 0===i?1e3:i,l=e.refreshOptions,c=e.handleWidth,u=void 0===c||c,d=e.handleHeight,h=void 0===d||d,f=e.targetRef,p=e.observerOptions,m=e.onResize,g=o(n),y=o(null),v=null!=f?f:y,b=o(),$=s({width:void 0,height:void 0}),w=$[0],S=$[1];return Pe((function(){if(!ke()){var e=Be(m,S,u,h);b.current=Fe((function(t){(u||h)&&t.forEach((function(t){var n=t&&t.contentRect||{},r=n.width,i=n.height;!g.current&&!ke()&&e({width:r,height:i}),g.current=!1}))}),r,a,l);var t=new window.ResizeObserver(b.current);return v.current&&t.observe(v.current,p),function(){t.disconnect();var e=b.current;e&&e.cancel&&e.cancel()}}}),[r,a,l,u,h,m,p,v.current]),L({ref:v},w)}(),c=Gr({height:r?l.height:0});return d((()=>{r&&a.current.reset()}),[r]),y(n,(()=>a.current)),t($i,Object.assign({style:c},{children:t("div",Object.assign({ref:l.ref,inert:r?void 0:""},{children:t(wl,Object.assign({ref:a},i))}))}))})),xl=e=>`@media screen and (max-width: ${e}px)`,Dl=w.div`
    position: relative;
    height: 100%;
    display: flex;
    flex: 1;

    ${e=>{if(e.$minWidthBeforeWrap)return x`
                ${xl(e.$minWidthBeforeWrap)} {
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
                }
            `}}
`,Ol=w.div`
    height: 100%;
    display: flex;
    flex: 1;
    align-items: center;
`,_l=w(j)`
    color: ${rs.Neutral[3]};
    width: 1.125rem;
    height: 1.125rem;
    flex-shrink: 0;
    margin: 0 0.5rem;
    align-self: center;
`,Fl=w.div`
    position: absolute;
    background: ${e=>e.$error?rs.Validation.Red.Border(e):rs.Primary(e)};
    height: 0.125rem;
    // half - half padding - half icon width
    width: calc(50% - 0.5rem - (1.125rem / 2));
    transition: left 350ms ease-in-out, opacity 350ms ease-in-out;
    left: 0;
    bottom: 0;

    ${e=>{switch(e.$position){case"start":return x`
                    opacity: 1;
                `;case"end":return x`
                    left: calc(50% + 1rem);
                    opacity: 1;
                `;case"none":return x`
                    opacity: 0;
                `}}}

    ${e=>{if(e.$minWidthBeforeWrap)return x`
                ${xl(e.$minWidthBeforeWrap)} {
                    display: none;
                }
            `}}
`,jl=({children:n,currentActive:r,error:i,className:a,minWidthBeforeWrap:o})=>{const[s,l]=n;return e(Dl,Object.assign({className:a,$minWidthBeforeWrap:o},{children:[t(Ol,Object.assign({"data-id":"range-container-elem1-container"},{children:s})),t(_l,{}),t(Ol,Object.assign({"data-id":"range-container-elem2-container"},{children:l})),t(Fl,{"data-id":"range-container-indicator",$position:r,$error:i,$minWidthBeforeWrap:o})]}))},kl={collections:{base:{InputBoxShadow:x`
        inset 0 0 4px 0px ${rs.Shadow.Accent}
    `,InputErrorBoxShadow:x`
        inset 0 0 4px 0px ${rs.Shadow.Red}
    `,ElevationBoxShadow:x`
      0px 2px 8px ${rs.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}}},rbs:{InputBoxShadow:x`
        inset 0 0 3px 0px ${rs.Shadow.Accent}
    `,InputErrorBoxShadow:x`
        inset 0 0 3px 0px ${rs.Shadow.Red}
    `,ElevationBoxShadow:x`
      0px 2px 8px ${rs.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}}}},defaultValue:"base"},Ml=e=>t=>{var n;const r=t.theme,i=Ko(kl,r[es.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?Jo(i,e,r.options.designToken):Jo(i,e)},Bl=Ml("InputBoxShadow"),Pl=Ml("InputErrorBoxShadow"),El=(Ml("ElevationBoxShadow"),Ml("Table.Header"),Ml("Table.Cell.Primary"),Ml("Table.Cell.Secondary"),Ml("Table.Cell.Selected"),Ml("Table.Cell.Hover"),w.div`
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid ${rs.Neutral[5]};
    border-radius: 4px;
    background: ${rs.Neutral[8]};
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};

    :focus-within {
        border: 1px solid ${rs.Accent.Light[1]};
        box-shadow: ${Bl};
    }

    ${e=>e.$readOnly?x`
                border: 1px solid transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    border: 1px solid transparent;
                    box-shadow: none;
                }
            `:e.$disabled?x`
                background: ${rs.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    border: 1px solid ${rs.Neutral[5]};
                    box-shadow: none;
                }
            `:e.$error?x`
                border: 1px solid ${rs.Validation.Red.Border};

                :focus-within {
                    border: 1px solid ${rs.Validation.Red.Border};
                    box-shadow: ${Pl};
                }
            `:void 0}
`),Al=w.input`
    ${vs("Body","regular")}
    color: ${rs.Neutral[1]};
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
        color: ${rs.Neutral[3]};
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
`,Cl=w.div`
    display: flex;
    align-items: center;
    position: relative;

    flex: 1;
`,Hl=w.div`
    display: flex;
    align-items: center;

    ${e=>{if(e.$hover)return x`
                ${Tl}, ${zl} {
                    color: ${rs.Neutral[4]};
                }
            `}}
`,Tl=w(Al)`
    background: transparent;
    text-align: center;
`,Il=w(Tl)`
    width: 2rem;
    margin-right: 0.25rem;
`,Rl=w(Tl)`
    width: 2.5rem;
`,Ll=w(Tl)`
    width: 3rem;
    margin-left: 0.25rem;
`,zl=w($s.Body)`
    ${e=>{if(e.$inactive)return x`
                color: ${rs.Neutral[3](e)};
            `}}
`,Yl=w.div`
    ${vs("Body","regular")}
    background-color: ${rs.Neutral[8]};
    color: ${rs.Neutral[3]};
    position: absolute;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    ${e=>e.$disabled?x`
                background-color: ${rs.Neutral[6](e)};
                cursor: not-allowed;
            `:e.$hide?x`
                display: none;
            `:void 0}
`;E.extend(Di);const Wl=i.forwardRef((({disabled:n,readOnly:r,names:i,value:a,focused:l,hoverValue:c,placeholder:u,label:h,onChange:f,onFocus:p,onBlur:m},g)=>{const[v,b,$]=Yi(""),[w,S,x]=Yi(""),[D,O,_]=Yi(""),[F,j]=s("none"),[k,M]=s(!1),B=o(null),P=o(null),A=o(null),C=o(null),[H,T,I]=W(c);d((()=>{const[e="",t="",n=""]=W(a);b(e),S(t),O(n)}),[a]),d((()=>{l||j("none"),l&&(M(!0),B.current.contains(document.activeElement)||P.current.focus())}),[l]),y(g,(()=>({ref:B,resetPlaceholder(){M(!1)},resetInput(){const[e="",t="",n=""]=W(a);b(e),S(t),O(n)}})),[a]);const R=e=>{e.target.select();const t=e.target.name;j(t)},L=e=>{const[t,n,r]=i,a={[t]:$.current,[n]:x.current,[r]:_.current},o=e.target.name,s=a[o],l=o!==r?zi.padValue(s,!0):s;switch(o){case t:a[t]=l,b(l);break;case n:a[n]=l,S(l)}const c=`${a[r]}-${a[n]}-${a[t]}`,u=E(c,"YYYY-MM-DD",!0).isValid(),d=!a[t]&&!a[n]&&!a[r];u&&s!==l&&f(c),B.current.contains(e.relatedTarget)||(j("none"),null==m||m(d||u))},z=e=>{if(c)return;const t=e.target.name,n=e.target.value.replace(/[^0-9]/g,""),r={day:v,month:w,year:D};switch(t){case i[0]:r.day=n,b(n),2===n.length&&A.current.focus();break;case i[1]:r.month=n,S(n),2===n.length&&C.current.focus();break;case i[2]:r.year=n,O(n)}if(!r.day&&!r.month&&!r.year)return void f("");const a=`${r.year}-${r.month}-${r.day}`;E(a,"YYYY-MM-DD",!0).isValid()&&f(a)},Y=e=>{"Backspace"!==e.code&&"Backspace"!==e.key||(F===i[1]&&0===w.length&&P.current.focus(),F===i[2]&&0===D.length&&A.current.focus())};function W(e){if(e){const t=E(e,"YYYY-MM-DD");return[zi.padValue(t.date().toString()),zi.padValue((t.month()+1).toString()),t.year().toString()]}return[void 0,void 0,void 0]}return e(Cl,Object.assign({role:"group","aria-label":h,onClick:()=>{n||r||(M(!0),B.current.contains(document.activeElement)||P.current.focus())},onFocus:()=>{n||(M(!0),l||p())}},{children:[e(Hl,Object.assign({ref:B,$hover:!!c},{children:[t(Il,{ref:P,name:i[0],maxLength:2,value:null!=H?H:v,onFocus:R,onBlur:L,onChange:z,type:"text",inputMode:"numeric",pattern:"[0-9]{2}","data-testid":`${i[0]}-input`,"aria-label":"day",disabled:n,readOnly:r,tabIndex:r?-1:0,autoComplete:"off",placeholder:F!==i[0]||r?"DD":""}),t(zl,Object.assign({$inactive:0===v.length},{children:"/"})),t(Rl,{ref:A,name:i[1],maxLength:2,value:null!=T?T:w,onFocus:R,onBlur:L,onChange:z,onKeyDown:Y,type:"text",inputMode:"numeric",pattern:"[0-9]{2}","data-testid":`${i[1]}-input`,"aria-label":"month",disabled:n,readOnly:r,tabIndex:r?-1:0,autoComplete:"off",placeholder:F!==i[1]||r?"MM":""}),t(zl,Object.assign({$inactive:0===w.length},{children:"/"})),t(Ll,{ref:C,name:i[2],maxLength:4,value:null!=I?I:D,onFocus:R,onBlur:L,onChange:z,onKeyDown:Y,type:"text",inputMode:"numeric",pattern:"[0-9]{4}","data-testid":`${i[2]}-input`,"aria-label":"year",disabled:n,readOnly:r,tabIndex:r?-1:0,autoComplete:"off",placeholder:F!==i[2]||r?"YYYY":""})]})),(()=>{if(!a&&!r&&u)return t(Yl,Object.assign({$hide:k,$disabled:n},{children:u}))})()]}))})),Nl=(e,t,n)=>{const r=[];e&&r.push(`[${e}]`),r.push(t,n),console.log(...r)},Vl=w(El)`
    @media screen and (max-width: ${374}px) {
        padding: 0.75rem 1rem;
    }
`,ql=w.div`
    display: flex;
    align-items: center;
    height: calc(3rem - 2px); // exclude top and bottom borders
    width: 100%;

    @media screen and (max-width: ${374}px) {
        height: fit-content;
    }
`,Ql={initialStart:"",initialEnd:"",selectedStart:"",selectedEnd:"",currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1},Ul=n=>{var{minDate:r,maxDate:i,disabled:a,disabledDates:l,error:c,value:u,valueEnd:h,onChange:f,onFocus:p,onBlur:m,onYearMonthDisplayChange:g,withButton:y=!0,variant:b="range",readOnly:$,id:w,allowDisabledSelection:S}=n,x=k(n,["minDate","maxDate","disabled","disabledDates","error","value","valueEnd","onChange","onFocus","onBlur","onYearMonthDisplayChange","withButton","variant","readOnly","id","allowDisabledSelection"]);const[D,O]=s(),[_,F]=s(void 0),[j,M]=s(!1),B="week"===b,[{selectedStart:P,selectedEnd:C,currentFocus:H,calendarOpen:T,isStartDirty:R,isEndDirty:L},z]=(({initialState:e,reducers:t,name:n,debug:r})=>{const[i,a]=v(((e,n)=>t[n.type]?t[n.type](e,n.payload):e),e);return[i,Object.fromEntries(Object.keys(t).map((e=>[e,t=>{r&&Nl(n,e,t),a({type:e,payload:t})}])))]})({name:"date-range-input",initialState:Ql,reducers:{blur:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),changeStart:(e,t)=>Object.assign(Object.assign({},e),{selectedStart:t,isStartDirty:!0}),changeEnd:(e,t)=>Object.assign(Object.assign({},e),{selectedEnd:t,isEndDirty:!0}),reselectStart:e=>Object.assign(Object.assign({},e),{selectedStart:"",currentFocus:"start"}),reselectEnd:e=>Object.assign(Object.assign({},e),{selectedEnd:"",currentFocus:"end"}),focus:(e,t)=>Object.assign(Object.assign({},e),{currentFocus:B?"none":t,calendarOpen:!$}),cancel:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1}),done:(e,t)=>Object.assign(Object.assign({},e),{selectedStart:t.start,selectedEnd:t.end,initialStart:t.start,initialEnd:t.end,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),resetStart:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart}),resetEnd:e=>Object.assign(Object.assign({},e),{selectedEnd:e.initialEnd}),resetRange:(e,t)=>Object.assign(Object.assign({},e),{initialStart:t.start,selectedStart:t.start,initialEnd:t.end,selectedEnd:t.end})}}),Y=o(!1),W=o(),N=o(),V=o(),q=o(),Q=A.exports.useMediaQuery({maxWidth:I.mobileL}),U=y||Q;d((()=>{z.resetRange({start:Ri.sanitizeInput(u),end:Ri.sanitizeInput(h)})}),[u,h]),d((()=>{"start"===H?O(P):"end"===H&&O(C)}),[H]);const Z=e=>{if(K(e))return void(Y.current=!0);if(z.changeStart(e),N.current.setCalendarDate(e),Y.current=!1,!e)return void(U||C||!L||(z.resetRange({start:"",end:""}),null==f||f("","")));if(!C)return void z.focus("end");if(E(e).isAfter(C,"day"))z.reselectEnd();else{if(L)return U?void 0:(z.done({start:e,end:C}),void(null==f||f(e,C)));z.focus("end")}},G=e=>{if(K(e))return void(Y.current=!0);if(z.changeEnd(e),N.current.setCalendarDate(e),!e)return void(U||P||!R||(z.resetRange({start:"",end:""}),null==f||f("","")));if(!P)return void z.focus("start");if(E(e).isBefore(P,"day"))z.reselectStart();else{if(R)return U?void 0:(z.done({start:P,end:e}),void(null==f||f(P,e)));z.focus("start")}},X=e=>()=>{$||(z.focus(e),J(),p&&p())},J=()=>{if(B){const e=Ii.toDayjs(P).startOf("week").format("YYYY-MM-DD");M(!0),O(e)}},K=e=>!S&&e&&Ri.isDateDisabled(e,{disabledDates:l,minDate:r,maxDate:i}),ee=e=>{let t={start:void 0,end:void 0};switch(b){case"range":t={start:"start"===H?_:void 0,end:"end"===H?_:void 0};break;case"week":if(!_)return;t={start:E(_).startOf("week").format("YYYY-MM-DD"),end:E(_).endOf("week").format("YYYY-MM-DD")}}return t[e]};return e(Vl,Object.assign({ref:W,$disabled:a,$readOnly:$,$error:c,id:w,"data-testid":x["data-testid"],onBlur:e=>{W.current.contains(e.relatedTarget)||(z.blur(),M(!1),V.current.resetPlaceholder(),q.current.resetPlaceholder(),null==m||m())},onKeyDown:e=>{"Escape"===e.code&&z.blur(),"Enter"!==e.code||U||(P&&C?(z.done({start:P,end:C}),null==f||f(P,C)):z.blur())}},x,{children:[e(jl,Object.assign({currentActive:H,minWidthBeforeWrap:374,error:c},{children:[t(ql,{children:t(Wl,{ref:V,placeholder:"From",names:["start-day","start-month","start-year"],value:P,disabled:a,readOnly:j||$,focused:"start"===H,hoverValue:ee("start"),onChange:Z,onFocus:X("start"),onBlur:e=>{e&&!Y.current||(z.resetStart(),V.current.resetInput())}})}),t(ql,{children:t(Wl,{ref:q,placeholder:"To",names:["end-day","end-month","end-year"],value:C,disabled:a,readOnly:j||$,focused:"end"===H,hoverValue:ee("end"),onChange:G,onFocus:X("end"),onBlur:e=>{e&&!Y.current||(z.resetEnd(),q.current.resetInput())}})})]})),t(Sl,{ref:N,type:"input",variant:b,initialCalendarDate:D,isOpen:T,withButton:U,value:P,endValue:C,selectWithinRange:R||L,currentFocus:H,disabledDates:l,minDate:r,maxDate:i,allowDisabledSelection:S,onSelect:e=>{"start"===H?Z(e):"end"===H&&G(e),B&&(e=>{const t=E(e).startOf("week").format("YYYY-MM-DD"),n=E(e).endOf("week").format("YYYY-MM-DD");if(z.changeStart(t),z.changeEnd(n),Y.current=!1,!U)z.done({start:t,end:n}),null==f||f(t,n)})(e)},onDismiss:e=>{switch(e){case"reset":z.cancel();break;case"confirmed":z.done({start:P,end:C}),null==f||f(P,C)}},onHover:e=>{F(e)},onYearMonthDisplayChange:g})]}))};export{Ul as DateRangeInput};
//# sourceMappingURL=index.js.map
