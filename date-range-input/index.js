import{jsxs as e,jsx as t,Fragment as r}from"react/jsx-runtime";import*as n from"react";import i,{cloneElement as o,useRef as a,useState as s,isValidElement as l,createRef as c,PureComponent as u,useEffect as d,useLayoutEffect as h,forwardRef as f,useCallback as p,useContext as m,useMemo as g,useImperativeHandle as y,useReducer as v}from"react";import{findDOMNode as b,unstable_batchedUpdates as $}from"react-dom";import w,{keyframes as S,css as x}from"styled-components";import{ChevronDownIcon as D}from"@lifesg/react-icons/chevron-down";import{ChevronLeftIcon as _}from"@lifesg/react-icons/chevron-left";import{ChevronRightIcon as O}from"@lifesg/react-icons/chevron-right";import{ExternalIcon as F}from"@lifesg/react-icons/external";import{ArrowRightIcon as k}from"@lifesg/react-icons";var M="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},B={exports:{}};B.exports=function(){var e=1e3,t=6e4,r=36e5,n="millisecond",i="second",o="minute",a="hour",s="day",l="week",c="month",u="quarter",d="year",h="date",f="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}},y=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},v={s:y,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),i=r%60;return(t<=0?"+":"-")+y(n,2,"0")+":"+y(i,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),i=t.clone().add(n,c),o=r-i<0,a=t.clone().add(n+(o?-1:1),c);return+(-(n+(r-i)/(o?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:d,w:l,d:s,D:h,h:a,m:o,s:i,ms:n,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",$={};$[b]=g;var w=function(e){return e instanceof _},S=function e(t,r,n){var i;if(!t)return b;if("string"==typeof t){var o=t.toLowerCase();$[o]&&(i=o),r&&($[o]=r,i=o);var a=t.split("-");if(!i&&a.length>1)return e(a[0])}else{var s=t.name;$[s]=t,i=s}return!n&&i&&(b=i),i||!n&&b},x=function(e,t){if(w(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new _(r)},D=v;D.l=S,D.i=w,D.w=function(e,t){return x(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var _=function(){function g(e){this.$L=S(e.locale,null,!0),this.parse(e)}var y=g.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(D.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(p);if(n){var i=n[2]-1||0,o=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return D},y.isValid=function(){return!(this.$d.toString()===f)},y.isSame=function(e,t){var r=x(e);return this.startOf(t)<=r&&r<=this.endOf(t)},y.isAfter=function(e,t){return x(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<x(e)},y.$g=function(e,t,r){return D.u(e)?this[t]:this.set(r,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var r=this,n=!!D.u(t)||t,u=D.p(e),f=function(e,t){var i=D.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?i:i.endOf(s)},p=function(e,t){return D.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},m=this.$W,g=this.$M,y=this.$D,v="set"+(this.$u?"UTC":"");switch(u){case d:return n?f(1,0):f(31,11);case c:return n?f(1,g):f(0,g+1);case l:var b=this.$locale().weekStart||0,$=(m<b?m+7:m)-b;return f(n?y-$:y+(6-$),g);case s:case h:return p(v+"Hours",0);case a:return p(v+"Minutes",1);case o:return p(v+"Seconds",2);case i:return p(v+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var r,l=D.p(e),u="set"+(this.$u?"UTC":""),f=(r={},r[s]=u+"Date",r[h]=u+"Date",r[c]=u+"Month",r[d]=u+"FullYear",r[a]=u+"Hours",r[o]=u+"Minutes",r[i]=u+"Seconds",r[n]=u+"Milliseconds",r)[l],p=l===s?this.$D+(t-this.$W):t;if(l===c||l===d){var m=this.clone().set(h,1);m.$d[f](p),m.init(),this.$d=m.set(h,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[D.p(e)]()},y.add=function(n,u){var h,f=this;n=Number(n);var p=D.p(u),m=function(e){var t=x(f);return D.w(t.date(t.date()+Math.round(e*n)),f)};if(p===c)return this.set(c,this.$M+n);if(p===d)return this.set(d,this.$y+n);if(p===s)return m(1);if(p===l)return m(7);var g=(h={},h[o]=t,h[a]=r,h[i]=e,h)[p]||1,y=this.$d.getTime()+n*g;return D.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||f;var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=D.z(this),o=this.$H,a=this.$m,s=this.$M,l=r.weekdays,c=r.months,u=function(e,r,i,o){return e&&(e[r]||e(t,n))||i[r].slice(0,o)},d=function(e){return D.s(o%12||12,e,"0")},h=r.meridiem||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:D.s(s+1,2,"0"),MMM:u(r.monthsShort,s,c,3),MMMM:u(c,s),D:this.$D,DD:D.s(this.$D,2,"0"),d:String(this.$W),dd:u(r.weekdaysMin,this.$W,l,2),ddd:u(r.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(o),HH:D.s(o,2,"0"),h:d(1),hh:d(2),a:h(o,a,!0),A:h(o,a,!1),m:String(a),mm:D.s(a,2,"0"),s:String(this.$s),ss:D.s(this.$s,2,"0"),SSS:D.s(this.$ms,3,"0"),Z:i};return n.replace(m,(function(e,t){return t||p[e]||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(n,h,f){var p,m=D.p(h),g=x(n),y=(g.utcOffset()-this.utcOffset())*t,v=this-g,b=D.m(this,g);return b=(p={},p[d]=b/12,p[c]=b,p[u]=b/3,p[l]=(v-y)/6048e5,p[s]=(v-y)/864e5,p[a]=v/r,p[o]=v/t,p[i]=v/e,p)[m]||v,f?b:D.a(b)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return $[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=S(e,t,!0);return n&&(r.$L=n),r},y.clone=function(){return D.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},g}(),O=_.prototype;return x.prototype=O,[["$ms",n],["$s",i],["$m",o],["$H",a],["$W",s],["$M",c],["$y",d],["$D",h]].forEach((function(e){O[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),x.extend=function(e,t){return e.$i||(e(t,_,x),e.$i=!0),x},x.locale=S,x.isDayjs=w,x.unix=function(e){return x(1e3*e)},x.en=$[b],x.Ls=$,x.p={},x}();var P,E=B.exports,A={exports:{}};P=e=>(()=>{var t={"./node_modules/css-mediaquery/index.js":
/*!**********************************************!*\
  !*** ./node_modules/css-mediaquery/index.js ***!
  \**********************************************/(e,t)=>{t.match=function(e,t){return s(e).some((function(e){var r=e.inverse,n="all"===e.type||t.type===e.type;if(n&&r||!n&&!r)return!1;var i=e.expressions.every((function(e){var r=e.feature,n=e.modifier,i=e.value,o=t[r];if(!o)return!1;switch(r){case"orientation":case"scan":return o.toLowerCase()===i.toLowerCase();case"width":case"height":case"device-width":case"device-height":i=u(i),o=u(o);break;case"resolution":i=c(i),o=c(o);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":i=l(i),o=l(o);break;case"grid":case"color":case"color-index":case"monochrome":i=parseInt(i,10)||1,o=parseInt(o,10)||0}switch(n){case"min":return o>=i;case"max":return o<=i;default:return o===i}}));return i&&!r||!i&&r}))},t.parse=s;var r=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,n=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,i=/^(?:(min|max)-)?(.+)/,o=/(em|rem|px|cm|mm|in|pt|pc)?$/,a=/(dpi|dpcm|dppx)?$/;function s(e){return e.split(",").map((function(e){var t=(e=e.trim()).match(r),o=t[1],a=t[2],s=t[3]||"",l={};return l.inverse=!!o&&"not"===o.toLowerCase(),l.type=a?a.toLowerCase():"all",s=s.match(/\([^\)]+\)/g)||[],l.expressions=s.map((function(e){var t=e.match(n),r=t[1].toLowerCase().match(i);return{modifier:r[1],feature:r[2],value:t[2]}})),l}))}function l(e){var t,r=Number(e);return r||(r=(t=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/t[2]),r}function c(e){var t=parseFloat(e);switch(String(e).match(a)[1]){case"dpcm":return t/2.54;case"dppx":return 96*t;default:return t}}function u(e){var t=parseFloat(e);switch(String(e).match(o)[1]){case"em":case"rem":return 16*t;case"cm":return 96*t/2.54;case"mm":return 96*t/2.54/10;case"in":return 96*t;case"pt":return 72*t;case"pc":return 72*t/12;default:return t}}},"./node_modules/hyphenate-style-name/index.js":
/*!****************************************************!*\
  !*** ./node_modules/hyphenate-style-name/index.js ***!
  \****************************************************/(e,t,r)=>{r.r(t),r.d(t,{default:()=>s});var n=/[A-Z]/g,i=/^ms-/,o={};function a(e){return"-"+e.toLowerCase()}const s=function(e){if(o.hasOwnProperty(e))return o[e];var t=e.replace(n,a);return o[e]=i.test(t)?"-"+t:t}},"./node_modules/matchmediaquery/index.js":
/*!***********************************************!*\
  !*** ./node_modules/matchmediaquery/index.js ***!
  \***********************************************/(e,t,r)=>{var n=r(/*! css-mediaquery */"./node_modules/css-mediaquery/index.js").match,i="undefined"!=typeof window?window.matchMedia:null;function o(e,t,r){var o=this;if(i&&!r){var a=i.call(window,e);this.matches=a.matches,this.media=a.media,a.addListener(s)}else this.matches=n(e,t),this.media=e;function s(e){o.matches=e.matches,o.media=e.media}this.addListener=function(e){a&&a.addListener(e)},this.removeListener=function(e){a&&a.removeListener(e)},this.dispose=function(){a&&a.removeListener(s)}}e.exports=function(e,t,r){return new o(e,t,r)}},"./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/e=>{
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,i){for(var o,a,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var c in o=Object(arguments[l]))r.call(o,c)&&(s[c]=o[c]);if(t){a=t(o);for(var u=0;u<a.length;u++)n.call(o,a[u])&&(s[a[u]]=o[a[u]])}}return s}},"./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/(e,t,r)=>{var n,i=r(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),o={},a=r(/*! ./lib/has */"./node_modules/prop-types/lib/has.js");function s(e,t,r,s,l){for(var c in e)if(a(e,c)){var u;try{if("function"!=typeof e[c]){var d=Error((s||"React class")+": "+r+" type `"+c+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[c]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw d.name="Invariant Violation",d}u=e[c](t,c,s,r,null,i)}catch(e){u=e}if(!u||u instanceof Error||n((s||"React class")+": type specification of "+r+" `"+c+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof u+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),u instanceof Error&&!(u.message in o)){o[u.message]=!0;var h=l?l():"";n("Failed "+r+" type: "+u.message+(null!=h?h:""))}}}n=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},s.resetWarningCache=function(){o={}},e.exports=s},"./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/(e,t,r)=>{var n,i=r(/*! react-is */"./node_modules/react-is/index.js"),o=r(/*! object-assign */"./node_modules/object-assign/index.js"),a=r(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),s=r(/*! ./lib/has */"./node_modules/prop-types/lib/has.js"),l=r(/*! ./checkPropTypes */"./node_modules/prop-types/checkPropTypes.js");function c(){return null}n=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},e.exports=function(e,t){var r="function"==typeof Symbol&&Symbol.iterator,u="@@iterator",d="<<anonymous>>",h={array:g("array"),bigint:g("bigint"),bool:g("boolean"),func:g("function"),number:g("number"),object:g("object"),string:g("string"),symbol:g("symbol"),any:m(c),arrayOf:function(e){return m((function(t,r,n,i,o){if("function"!=typeof e)return new p("Property `"+o+"` of component `"+n+"` has invalid PropType notation inside arrayOf.");var s=t[r];if(!Array.isArray(s))return new p("Invalid "+i+" `"+o+"` of type `"+b(s)+"` supplied to `"+n+"`, expected an array.");for(var l=0;l<s.length;l++){var c=e(s,l,n,i,o+"["+l+"]",a);if(c instanceof Error)return c}return null}))},element:m((function(t,r,n,i,o){var a=t[r];return e(a)?null:new p("Invalid "+i+" `"+o+"` of type `"+b(a)+"` supplied to `"+n+"`, expected a single ReactElement.")})),elementType:m((function(e,t,r,n,o){var a=e[t];return i.isValidElementType(a)?null:new p("Invalid "+n+" `"+o+"` of type `"+b(a)+"` supplied to `"+r+"`, expected a single ReactElement type.")})),instanceOf:function(e){return m((function(t,r,n,i,o){if(!(t[r]instanceof e)){var a=e.name||d;return new p("Invalid "+i+" `"+o+"` of type `"+((s=t[r]).constructor&&s.constructor.name?s.constructor.name:d)+"` supplied to `"+n+"`, expected instance of `"+a+"`.")}var s;return null}))},node:m((function(e,t,r,n,i){return v(e[t])?null:new p("Invalid "+n+" `"+i+"` supplied to `"+r+"`, expected a ReactNode.")})),objectOf:function(e){return m((function(t,r,n,i,o){if("function"!=typeof e)return new p("Property `"+o+"` of component `"+n+"` has invalid PropType notation inside objectOf.");var l=t[r],c=b(l);if("object"!==c)return new p("Invalid "+i+" `"+o+"` of type `"+c+"` supplied to `"+n+"`, expected an object.");for(var u in l)if(s(l,u)){var d=e(l,u,n,i,o+"."+u,a);if(d instanceof Error)return d}return null}))},oneOf:function(e){return Array.isArray(e)?m((function(t,r,n,i,o){for(var a=t[r],s=0;s<e.length;s++)if(f(a,e[s]))return null;var l=JSON.stringify(e,(function(e,t){return"symbol"===$(t)?String(t):t}));return new p("Invalid "+i+" `"+o+"` of value `"+String(a)+"` supplied to `"+n+"`, expected one of "+l+".")})):(n(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),c)},oneOfType:function(e){if(!Array.isArray(e))return n("Invalid argument supplied to oneOfType, expected an instance of array."),c;for(var t=0;t<e.length;t++){var r=e[t];if("function"!=typeof r)return n("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+w(r)+" at index "+t+"."),c}return m((function(t,r,n,i,o){for(var l=[],c=0;c<e.length;c++){var u=(0,e[c])(t,r,n,i,o,a);if(null==u)return null;u.data&&s(u.data,"expectedType")&&l.push(u.data.expectedType)}return new p("Invalid "+i+" `"+o+"` supplied to `"+n+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return m((function(t,r,n,i,o){var s=t[r],l=b(s);if("object"!==l)return new p("Invalid "+i+" `"+o+"` of type `"+l+"` supplied to `"+n+"`, expected `object`.");for(var c in e){var u=e[c];if("function"!=typeof u)return y(n,i,o,c,$(u));var d=u(s,c,n,i,o+"."+c,a);if(d)return d}return null}))},exact:function(e){return m((function(t,r,n,i,l){var c=t[r],u=b(c);if("object"!==u)return new p("Invalid "+i+" `"+l+"` of type `"+u+"` supplied to `"+n+"`, expected `object`.");var d=o({},t[r],e);for(var h in d){var f=e[h];if(s(e,h)&&"function"!=typeof f)return y(n,i,l,h,$(f));if(!f)return new p("Invalid "+i+" `"+l+"` key `"+h+"` supplied to `"+n+"`.\nBad object: "+JSON.stringify(t[r],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var m=f(c,h,n,i,l+"."+h,a);if(m)return m}return null}))}};function f(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function p(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function m(e){var r={},i=0;function o(o,s,l,c,u,h,f){if(c=c||d,h=h||l,f!==a){if(t){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}if("undefined"!=typeof console){var g=c+":"+l;!r[g]&&i<3&&(n("You are manually calling a React.PropTypes validation function for the `"+h+"` prop on `"+c+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),r[g]=!0,i++)}}return null==s[l]?o?null===s[l]?new p("The "+u+" `"+h+"` is marked as required in `"+c+"`, but its value is `null`."):new p("The "+u+" `"+h+"` is marked as required in `"+c+"`, but its value is `undefined`."):null:e(s,l,c,u,h)}var s=o.bind(null,!1);return s.isRequired=o.bind(null,!0),s}function g(e){return m((function(t,r,n,i,o,a){var s=t[r];return b(s)!==e?new p("Invalid "+i+" `"+o+"` of type `"+$(s)+"` supplied to `"+n+"`, expected `"+e+"`.",{expectedType:e}):null}))}function y(e,t,r,n,i){return new p((e||"React class")+": "+t+" type `"+r+"."+n+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+i+"`.")}function v(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(v);if(null===t||e(t))return!0;var n=function(e){var t=e&&(r&&e[r]||e[u]);if("function"==typeof t)return t}(t);if(!n)return!1;var i,o=n.call(t);if(n!==t.entries){for(;!(i=o.next()).done;)if(!v(i.value))return!1}else for(;!(i=o.next()).done;){var a=i.value;if(a&&!v(a[1]))return!1}return!0;default:return!1}}function b(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function $(e){if(null==e)return""+e;var t=b(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function w(e){var t=$(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return p.prototype=Error.prototype,h.checkPropTypes=l,h.resetWarningCache=l.resetWarningCache,h.PropTypes=h,h}},"./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/(e,t,r)=>{var n=r(/*! react-is */"./node_modules/react-is/index.js");e.exports=r(/*! ./factoryWithTypeCheckers */"./node_modules/prop-types/factoryWithTypeCheckers.js")(n.isElement,!0)},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/e=>{e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"./node_modules/prop-types/lib/has.js":
/*!********************************************!*\
  !*** ./node_modules/prop-types/lib/has.js ***!
  \********************************************/e=>{e.exports=Function.call.bind(Object.prototype.hasOwnProperty)},"./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/(e,t)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,r=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,i=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,u=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,f=e?Symbol.for("react.suspense_list"):60120,p=e?Symbol.for("react.memo"):60115,m=e?Symbol.for("react.lazy"):60116,g=e?Symbol.for("react.block"):60121,y=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,b=e?Symbol.for("react.scope"):60119;function $(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:var f=e.type;switch(f){case c:case u:case i:case a:case o:case h:return f;default:var g=f&&f.$$typeof;switch(g){case l:case d:case m:case p:case s:return g;default:return t}}case n:return t}}}var w=c,S=u,x=l,D=s,_=r,O=d,F=i,k=m,M=p,B=n,P=a,E=o,A=h,C=!1;function j(e){return $(e)===u}t.AsyncMode=w,t.ConcurrentMode=S,t.ContextConsumer=x,t.ContextProvider=D,t.Element=_,t.ForwardRef=O,t.Fragment=F,t.Lazy=k,t.Memo=M,t.Portal=B,t.Profiler=P,t.StrictMode=E,t.Suspense=A,t.isAsyncMode=function(e){return C||(C=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),j(e)||$(e)===c},t.isConcurrentMode=j,t.isContextConsumer=function(e){return $(e)===l},t.isContextProvider=function(e){return $(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return $(e)===d},t.isFragment=function(e){return $(e)===i},t.isLazy=function(e){return $(e)===m},t.isMemo=function(e){return $(e)===p},t.isPortal=function(e){return $(e)===n},t.isProfiler=function(e){return $(e)===a},t.isStrictMode=function(e){return $(e)===o},t.isSuspense=function(e){return $(e)===h},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===u||e===a||e===o||e===h||e===f||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===p||e.$$typeof===s||e.$$typeof===l||e.$$typeof===d||e.$$typeof===y||e.$$typeof===v||e.$$typeof===b||e.$$typeof===g)},t.typeOf=$}()},"./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/(e,t,r)=>{e.exports=r(/*! ./cjs/react-is.development.js */"./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/shallow-equal/dist/index.esm.js ***!
  \******************************************************/(e,t,r)=>{function n(e,t){if(e===t)return!0;if(!e||!t)return!1;var r=Object.keys(e),n=Object.keys(t),i=r.length;if(n.length!==i)return!1;for(var o=0;o<i;o++){var a=r[o];if(e[a]!==t[a]||!Object.prototype.hasOwnProperty.call(t,a))return!1}return!0}function i(e,t){if(e===t)return!0;if(!e||!t)return!1;var r=e.length;if(t.length!==r)return!1;for(var n=0;n<r;n++)if(e[n]!==t[n])return!1;return!0}r.r(t),r.d(t,{shallowEqualArrays:()=>i,shallowEqualObjects:()=>n})},"./src/Component.ts":
/*!**************************!*\
  !*** ./src/Component.ts ***!
  \**************************/function(e,t,r){var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=i(r(/*! ./useMediaQuery */"./src/useMediaQuery.ts"));t.default=function(e){var t=e.children,r=e.device,i=e.onChange,a=n(e,["children","device","onChange"]),s=(0,o.default)(a,r,i);return"function"==typeof t?t(s):s?t:null}},"./src/Context.ts":
/*!************************!*\
  !*** ./src/Context.ts ***!
  \************************/(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});var n=(0,r(/*! react */"react").createContext)(void 0);t.default=n},"./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Context=t.toQuery=t.useMediaQuery=t.default=void 0;var i=n(r(/*! ./useMediaQuery */"./src/useMediaQuery.ts"));t.useMediaQuery=i.default;var o=n(r(/*! ./Component */"./src/Component.ts"));t.default=o.default;var a=n(r(/*! ./toQuery */"./src/toQuery.ts"));t.toQuery=a.default;var s=n(r(/*! ./Context */"./src/Context.ts"));t.Context=s.default},"./src/mediaQuery.ts":
/*!***************************!*\
  !*** ./src/mediaQuery.ts ***!
  \***************************/function(e,t,r){var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},n.apply(this,arguments)},i=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=o(r(/*! prop-types */"./node_modules/prop-types/index.js")),s=a.default.oneOfType([a.default.string,a.default.number]),l={all:a.default.bool,grid:a.default.bool,aural:a.default.bool,braille:a.default.bool,handheld:a.default.bool,print:a.default.bool,projection:a.default.bool,screen:a.default.bool,tty:a.default.bool,tv:a.default.bool,embossed:a.default.bool},c={orientation:a.default.oneOf(["portrait","landscape"]),scan:a.default.oneOf(["progressive","interlace"]),aspectRatio:a.default.string,deviceAspectRatio:a.default.string,height:s,deviceHeight:s,width:s,deviceWidth:s,color:a.default.bool,colorIndex:a.default.bool,monochrome:a.default.bool,resolution:s,type:Object.keys(l)},u=i(c,["type"]),d=n({minAspectRatio:a.default.string,maxAspectRatio:a.default.string,minDeviceAspectRatio:a.default.string,maxDeviceAspectRatio:a.default.string,minHeight:s,maxHeight:s,minDeviceHeight:s,maxDeviceHeight:s,minWidth:s,maxWidth:s,minDeviceWidth:s,maxDeviceWidth:s,minColor:a.default.number,maxColor:a.default.number,minColorIndex:a.default.number,maxColorIndex:a.default.number,minMonochrome:a.default.number,maxMonochrome:a.default.number,minResolution:s,maxResolution:s},u),h=n(n({},l),d);t.default={all:h,types:l,matchers:c,features:d}},"./src/toQuery.ts":
/*!************************!*\
  !*** ./src/toQuery.ts ***!
  \************************/function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=n(r(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),o=n(r(/*! ./mediaQuery */"./src/mediaQuery.ts"));t.default=function(e){var t=[];return Object.keys(o.default.all).forEach((function(r){var n=e[r];null!=n&&t.push(function(e,t){var r=(0,i.default)(e);return"number"==typeof t&&(t="".concat(t,"px")),!0===t?r:!1===t?"not ".concat(r):"(".concat(r,": ").concat(t,")")}(r,n))})),t.join(" and ")}},"./src/useMediaQuery.ts":
/*!******************************!*\
  !*** ./src/useMediaQuery.ts ***!
  \******************************/function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(/*! react */"react"),o=n(r(/*! matchmediaquery */"./node_modules/matchmediaquery/index.js")),a=n(r(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),s=r(/*! shallow-equal */"./node_modules/shallow-equal/dist/index.esm.js"),l=n(r(/*! ./toQuery */"./src/toQuery.ts")),c=n(r(/*! ./Context */"./src/Context.ts")),u=function(e){if(e)return Object.keys(e).reduce((function(t,r){return t[(0,a.default)(r)]=e[r],t}),{})},d=function(){var e=(0,i.useRef)(!1);return(0,i.useEffect)((function(){e.current=!0}),[]),e.current},h=function(e){var t=function(){return function(e){return e.query||(0,l.default)(e)}(e)},r=(0,i.useState)(t),n=r[0],o=r[1];return(0,i.useEffect)((function(){var e=t();n!==e&&o(e)}),[e]),n};t.default=function(e,t,r){var n=function(e){var t=(0,i.useContext)(c.default),r=function(){return u(e)||u(t)},n=(0,i.useState)(r),o=n[0],a=n[1];return(0,i.useEffect)((function(){var e=r();(0,s.shallowEqualObjects)(o,e)||a(e)}),[e,t]),o}(t),a=h(e);if(!a)throw new Error("Invalid or missing MediaQuery!");var l=function(e,t){var r=function(){return(0,o.default)(e,t||{},!!t)},n=(0,i.useState)(r),a=n[0],s=n[1],l=d();return(0,i.useEffect)((function(){if(l){var e=r();return s(e),function(){e&&e.dispose()}}}),[e,t]),a}(a,n),f=function(e){var t=(0,i.useState)(e.matches),r=t[0],n=t[1];return(0,i.useEffect)((function(){var t=function(e){n(e.matches)};return e.addListener(t),n(e.matches),function(){e.removeListener(t)}}),[e]),r}(l),p=d();return(0,i.useEffect)((function(){p&&r&&r(f)}),[f]),(0,i.useEffect)((function(){return function(){l&&l.dispose()}}),[]),f}},react:
/*!**************************************************************************************!*\
  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
  \**************************************************************************************/t=>{t.exports=e}},r={};function n(e){var i=r[e];if(void 0!==i)return i.exports;var o=r[e]={exports:{}};return t[e].call(o.exports,o,o.exports,n),o.exports}return n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n("./src/index.ts")})(),A.exports=P(i);const C={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},j=e=>Object.keys(C).reduce(((t,r)=>{const n=C[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),H=j("max-width"),T=(j("min-width"),C);var R=function(e,t){return R=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},R(e,t)};var I=function(){return I=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},I.apply(this,arguments)};var z="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var L=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Y="object"==typeof z&&z&&z.Object===Object&&z,W="object"==typeof self&&self&&self.Object===Object&&self,N=Y||W||Function("return this")(),V=N,q=function(){return V.Date.now()},Q=/\s/;var U=function(e){for(var t=e.length;t--&&Q.test(e.charAt(t)););return t},Z=/^\s+/;var G=function(e){return e?e.slice(0,U(e)+1).replace(Z,""):e},X=N.Symbol,J=X,K=Object.prototype,ee=K.hasOwnProperty,te=K.toString,re=J?J.toStringTag:void 0;var ne=function(e){var t=ee.call(e,re),r=e[re];try{e[re]=void 0;var n=!0}catch(e){}var i=te.call(e);return n&&(t?e[re]=r:delete e[re]),i},ie=Object.prototype.toString;var oe=ne,ae=function(e){return ie.call(e)},se=X?X.toStringTag:void 0;var le=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":se&&se in Object(e)?oe(e):ae(e)},ce=function(e){return null!=e&&"object"==typeof e};var ue=G,de=L,he=function(e){return"symbol"==typeof e||ce(e)&&"[object Symbol]"==le(e)},fe=/^[-+]0x[0-9a-f]+$/i,pe=/^0b[01]+$/i,me=/^0o[0-7]+$/i,ge=parseInt;var ye=L,ve=q,be=function(e){if("number"==typeof e)return e;if(he(e))return NaN;if(de(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=de(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=ue(e);var r=pe.test(e);return r||me.test(e)?ge(e.slice(2),r?2:8):fe.test(e)?NaN:+e},$e=Math.max,we=Math.min;var Se=function(e,t,r){var n,i,o,a,s,l,c=0,u=!1,d=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var r=n,o=i;return n=i=void 0,c=t,a=e.apply(o,r)}function p(e){var r=e-l;return void 0===l||r>=t||r<0||d&&e-c>=o}function m(){var e=ve();if(p(e))return g(e);s=setTimeout(m,function(e){var r=t-(e-l);return d?we(r,o-(e-c)):r}(e))}function g(e){return s=void 0,h&&n?f(e):(n=i=void 0,a)}function y(){var e=ve(),r=p(e);if(n=arguments,i=this,l=e,r){if(void 0===s)return function(e){return c=e,s=setTimeout(m,t),u?f(e):a}(l);if(d)return clearTimeout(s),s=setTimeout(m,t),f(l)}return void 0===s&&(s=setTimeout(m,t)),a}return t=be(t)||0,ye(r)&&(u=!!r.leading,o=(d="maxWait"in r)?$e(be(r.maxWait)||0,t):o,h="trailing"in r?!!r.trailing:h),y.cancel=function(){void 0!==s&&clearTimeout(s),c=0,n=l=i=s=void 0},y.flush=function(){return void 0===s?a:g(ve())},y},xe=Se,De=L;var _e=function(e,t,r){var n=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return De(r)&&(n="leading"in r?!!r.leading:n,i="trailing"in r?!!r.trailing:i),xe(e,t,{leading:n,maxWait:t,trailing:i})},Oe=function(e,t,r,n){switch(t){case"debounce":return Se(e,r,n);case"throttle":return _e(e,r,n);default:return e}},Fe=function(e){return"function"==typeof e},ke=function(){return"undefined"==typeof window},Me=function(e){return e instanceof Element||e instanceof HTMLDocument},Be=function(e,t,r,n){return function(i){var o=i.width,a=i.height;t((function(t){return t.width===o&&t.height===a||t.width===o&&!n||t.height===a&&!r?t:(e&&Fe(e)&&e(o,a),{width:o,height:a})}))}};!function(e){function t(t){var r=e.call(this,t)||this;r.cancelHandler=function(){r.resizeHandler&&r.resizeHandler.cancel&&(r.resizeHandler.cancel(),r.resizeHandler=null)},r.attachObserver=function(){var e=r.props,t=e.targetRef,n=e.observerOptions;if(!ke()){t&&t.current&&(r.targetRef.current=t.current);var i=r.getElement();i&&(r.observableElement&&r.observableElement===i||(r.observableElement=i,r.resizeObserver.observe(i,n)))}},r.getElement=function(){var e=r.props,t=e.querySelector,n=e.targetDomEl;if(ke())return null;if(t)return document.querySelector(t);if(n&&Me(n))return n;if(r.targetRef&&Me(r.targetRef.current))return r.targetRef.current;var i=b(r);if(!i)return null;switch(r.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},r.createResizeHandler=function(e){var t=r.props,n=t.handleWidth,i=void 0===n||n,o=t.handleHeight,a=void 0===o||o,s=t.onResize;if(i||a){var l=Be(s,r.setState.bind(r),i,a);e.forEach((function(e){var t=e&&e.contentRect||{},n=t.width,i=t.height;!r.skipOnMount&&!ke()&&l({width:n,height:i}),r.skipOnMount=!1}))}},r.getRenderType=function(){var e=r.props,t=e.render,n=e.children;return Fe(t)?"renderProp":Fe(n)?"childFunction":l(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=t.skipOnMount,i=t.refreshMode,o=t.refreshRate,a=void 0===o?1e3:o,s=t.refreshOptions;return r.state={width:void 0,height:void 0},r.skipOnMount=n,r.targetRef=c(),r.observableElement=null,ke()||(r.resizeHandler=Oe(r.createResizeHandler,i,a,s),r.resizeObserver=new window.ResizeObserver(r.resizeHandler)),r}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}R(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){ke()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,r=t.render,i=t.children,a=t.nodeType,s=void 0===a?"div":a,l=this.state,c={width:l.width,height:l.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return r&&r(c);case"childFunction":return(e=i)(c);case"child":if((e=i).type&&"string"==typeof e.type){var u=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}(c,["targetRef"]);return o(e,u)}return o(e,c);case"childArray":return(e=i).map((function(e){return!!e&&o(e,c)}));default:return n.createElement(s,null)}}}(u);var Pe=ke()?d:h;let Ee=Ue();const Ae=e=>Ne(e,Ee);let Ce=Ue();Ae.write=e=>Ne(e,Ce);let je=Ue();Ae.onStart=e=>Ne(e,je);let He=Ue();Ae.onFrame=e=>Ne(e,He);let Te=Ue();Ae.onFinish=e=>Ne(e,Te);let Re=[];Ae.setTimeout=(e,t)=>{let r=Ae.now()+t,n=()=>{let e=Re.findIndex((e=>e.cancel==n));~e&&Re.splice(e,1),Ye-=~e?1:0},i={time:r,handler:e,cancel:n};return Re.splice(Ie(r),0,i),Ye+=1,Ve(),i};let Ie=e=>~(~Re.findIndex((t=>t.time>e))||~Re.length);Ae.cancel=e=>{je.delete(e),He.delete(e),Te.delete(e),Ee.delete(e),Ce.delete(e)},Ae.sync=e=>{We=!0,Ae.batchedUpdates(e),We=!1},Ae.throttle=e=>{let t;function r(){try{e(...t)}finally{t=null}}function n(...e){t=e,Ae.onStart(r)}return n.handler=e,n.cancel=()=>{je.delete(r),t=null},n};let ze="undefined"!=typeof window?window.requestAnimationFrame:()=>{};Ae.use=e=>ze=e,Ae.now="undefined"!=typeof performance?()=>performance.now():Date.now,Ae.batchedUpdates=e=>e(),Ae.catch=console.error,Ae.frameLoop="always",Ae.advance=()=>{"demand"!==Ae.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):Qe()};let Le=-1,Ye=0,We=!1;function Ne(e,t){We?(t.delete(e),e(0)):(t.add(e),Ve())}function Ve(){Le<0&&(Le=0,"demand"!==Ae.frameLoop&&ze(qe))}function qe(){~Le&&(ze(qe),Ae.batchedUpdates(Qe))}function Qe(){let e=Le;Le=Ae.now();let t=Ie(Le);t&&(Ze(Re.splice(0,t),(e=>e.handler())),Ye-=t),Ye?(je.flush(),Ee.flush(e?Math.min(64,Le-e):16.667),He.flush(),Ce.flush(),Te.flush()):Le=-1}function Ue(){let e=new Set,t=e;return{add(r){Ye+=t!=e||e.has(r)?0:1,e.add(r)},delete:r=>(Ye-=t==e&&e.has(r)?1:0,e.delete(r)),flush(r){t.size&&(e=new Set,Ye-=t.size,Ze(t,(t=>t(r)&&e.add(t))),Ye+=e.size,t=e)}}}function Ze(e,t){e.forEach((e=>{try{t(e)}catch(e){Ae.catch(e)}}))}function Ge(){}const Xe={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function Je(e,t){if(Xe.arr(e)){if(!Xe.arr(t)||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}return e===t}const Ke=(e,t)=>e.forEach(t);function et(e,t,r){if(Xe.arr(e))for(let n=0;n<e.length;n++)t.call(r,e[n],`${n}`);else for(const n in e)e.hasOwnProperty(n)&&t.call(r,e[n],n)}const tt=e=>Xe.und(e)?[]:Xe.arr(e)?e:[e];function rt(e,t){if(e.size){const r=Array.from(e);e.clear(),Ke(r,t)}}const nt=(e,...t)=>rt(e,(e=>e(...t))),it=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent);let ot,at,st=null,lt=!1,ct=Ge;var ut=Object.freeze({__proto__:null,get createStringInterpolator(){return ot},get to(){return at},get colors(){return st},get skipAnimation(){return lt},get willAdvance(){return ct},assign:e=>{e.to&&(at=e.to),e.now&&(Ae.now=e.now),void 0!==e.colors&&(st=e.colors),null!=e.skipAnimation&&(lt=e.skipAnimation),e.createStringInterpolator&&(ot=e.createStringInterpolator),e.requestAnimationFrame&&Ae.use(e.requestAnimationFrame),e.batchedUpdates&&(Ae.batchedUpdates=e.batchedUpdates),e.willAdvance&&(ct=e.willAdvance),e.frameLoop&&(Ae.frameLoop=e.frameLoop)}});const dt=new Set;let ht=[],ft=[],pt=0;const mt={get idle(){return!dt.size&&!ht.length},start(e){pt>e.priority?(dt.add(e),Ae.onStart(gt)):(yt(e),Ae(bt))},advance:bt,sort(e){if(pt)Ae.onFrame((()=>mt.sort(e)));else{const t=ht.indexOf(e);~t&&(ht.splice(t,1),vt(e))}},clear(){ht=[],dt.clear()}};function gt(){dt.forEach(yt),dt.clear(),Ae(bt)}function yt(e){ht.includes(e)||vt(e)}function vt(e){ht.splice(function(e,t){const r=e.findIndex(t);return r<0?e.length:r}(ht,(t=>t.priority>e.priority)),0,e)}function bt(e){const t=ft;for(let r=0;r<ht.length;r++){const n=ht[r];pt=n.priority,n.idle||(ct(n),n.advance(e),n.idle||t.push(n))}return pt=0,ft=ht,ft.length=0,ht=t,ht.length>0}const $t="[-+]?\\d*\\.?\\d+",wt=$t+"%";function St(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}const xt=new RegExp("rgb"+St($t,$t,$t)),Dt=new RegExp("rgba"+St($t,$t,$t,$t)),_t=new RegExp("hsl"+St($t,wt,wt)),Ot=new RegExp("hsla"+St($t,wt,wt,$t)),Ft=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,kt=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Mt=/^#([0-9a-fA-F]{6})$/,Bt=/^#([0-9a-fA-F]{8})$/;function Pt(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function Et(e,t,r){const n=r<.5?r*(1+t):r+t-r*t,i=2*r-n,o=Pt(i,n,e+1/3),a=Pt(i,n,e),s=Pt(i,n,e-1/3);return Math.round(255*o)<<24|Math.round(255*a)<<16|Math.round(255*s)<<8}function At(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function Ct(e){return(parseFloat(e)%360+360)%360/360}function jt(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function Ht(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function Tt(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=Mt.exec(e))?parseInt(t[1]+"ff",16)>>>0:st&&void 0!==st[e]?st[e]:(t=xt.exec(e))?(At(t[1])<<24|At(t[2])<<16|At(t[3])<<8|255)>>>0:(t=Dt.exec(e))?(At(t[1])<<24|At(t[2])<<16|At(t[3])<<8|jt(t[4]))>>>0:(t=Ft.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=Bt.exec(e))?parseInt(t[1],16)>>>0:(t=kt.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=_t.exec(e))?(255|Et(Ct(t[1]),Ht(t[2]),Ht(t[3])))>>>0:(t=Ot.exec(e))?(Et(Ct(t[1]),Ht(t[2]),Ht(t[3]))|jt(t[4]))>>>0:null}(e);return null===t?e:(t=t||0,`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)}const Rt=(e,t,r)=>{if(Xe.fun(e))return e;if(Xe.arr(e))return Rt({range:e,output:t,extrapolate:r});if(Xe.str(e.output[0]))return ot(e);const n=e,i=n.output,o=n.range||[0,1],a=n.extrapolateLeft||n.extrapolate||"extend",s=n.extrapolateRight||n.extrapolate||"extend",l=n.easing||(e=>e);return e=>{const t=function(e,t){for(var r=1;r<t.length-1&&!(t[r]>=e);++r);return r-1}(e,o);return function(e,t,r,n,i,o,a,s,l){let c=l?l(e):e;if(c<t){if("identity"===a)return c;"clamp"===a&&(c=t)}if(c>r){if("identity"===s)return c;"clamp"===s&&(c=r)}if(n===i)return n;if(t===r)return e<=t?n:i;t===-1/0?c=-c:r===1/0?c-=t:c=(c-t)/(r-t);c=o(c),n===-1/0?c=-c:i===1/0?c+=n:c=c*(i-n)+n;return c}(e,o[t],o[t+1],i[t],i[t+1],l,a,s,n.map)}};const It=1.70158,zt=1.525*It,Lt=It+1,Yt=2*Math.PI/3,Wt=2*Math.PI/4.5,Nt=e=>{const t=7.5625,r=2.75;return e<1/r?t*e*e:e<2/r?t*(e-=1.5/r)*e+.75:e<2.5/r?t*(e-=2.25/r)*e+.9375:t*(e-=2.625/r)*e+.984375},Vt={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>Lt*e*e*e-It*e*e,easeOutBack:e=>1+Lt*Math.pow(e-1,3)+It*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-zt)/2:(Math.pow(2*e-2,2)*((zt+1)*(2*e-2)+zt)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*Yt),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*Yt)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*Wt)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*Wt)/2+1,easeInBounce:e=>1-Nt(1-e),easeOutBounce:Nt,easeInOutBounce:e=>e<.5?(1-Nt(1-2*e))/2:(1+Nt(2*e-1))/2,steps:(e,t="end")=>r=>{const n=(r="end"===t?Math.min(r,.999):Math.max(r,.001))*e,i="end"===t?Math.floor(n):Math.ceil(n);return o=0,a=1,s=i/e,Math.min(Math.max(s,o),a);var o,a,s}};function qt(){return qt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},qt.apply(this,arguments)}const Qt=Symbol.for("FluidValue.get"),Ut=Symbol.for("FluidValue.observers"),Zt=e=>Boolean(e&&e[Qt]),Gt=e=>e&&e[Qt]?e[Qt]():e,Xt=e=>e[Ut]||null;function Jt(e,t){let r=e[Ut];r&&r.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}class Kt{constructor(e){if(this[Qt]=void 0,this[Ut]=void 0,!e&&!(e=this.get))throw Error("Unknown getter");er(this,e)}}const er=(e,t)=>nr(e,Qt,t);function tr(e,t){if(e[Qt]){let r=e[Ut];r||nr(e,Ut,r=new Set),r.has(t)||(r.add(t),e.observerAdded&&e.observerAdded(r.size,t))}return t}function rr(e,t){let r=e[Ut];if(r&&r.has(t)){const n=r.size-1;n?r.delete(t):e[Ut]=null,e.observerRemoved&&e.observerRemoved(n,t)}}const nr=(e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}),ir=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,or=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,ar=new RegExp(`(${ir.source})(%|[a-z]+)`,"i"),sr=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,lr=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,cr=e=>{const[t,r]=ur(e);if(!t||it())return e;const n=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(n)return n.trim();if(r&&r.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(r);return t||e}return r&&lr.test(r)?cr(r):r||e},ur=e=>{const t=lr.exec(e);if(!t)return[,];const[,r,n]=t;return[r,n]};let dr;const hr=(e,t,r,n,i)=>`rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${i})`,fr=e=>{dr||(dr=st?new RegExp(`(${Object.keys(st).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>Gt(e).replace(lr,cr).replace(or,Tt).replace(dr,Tt))),r=t.map((e=>e.match(ir).map(Number))),n=r[0].map(((e,t)=>r.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>Rt(qt({},e,{output:t}))));return e=>{var r;const i=!ar.test(t[0])&&(null==(r=t.find((e=>ar.test(e))))?void 0:r.replace(ir,""));let o=0;return t[0].replace(ir,(()=>`${n[o++](e)}${i||""}`)).replace(sr,hr)}},pr="react-spring: ",mr=e=>{const t=e;let r=!1;if("function"!=typeof t)throw new TypeError(`${pr}once requires a function parameter`);return(...e)=>{r||(t(...e),r=!0)}},gr=mr(console.warn);const yr=mr(console.warn);function vr(e){return Xe.str(e)&&("#"==e[0]||/\d/.test(e)||!it()&&lr.test(e)||e in(st||{}))}const br=it()?d:h,$r=()=>{const e=a(!1);return br((()=>(e.current=!0,()=>{e.current=!1})),[]),e};function wr(){const e=s()[1],t=$r();return()=>{t.current&&e(Math.random())}}const Sr=e=>d(e,xr),xr=[];function Dr(e){const t=a();return d((()=>{t.current=e})),t.current}const _r=Symbol.for("Animated:node"),Or=e=>e&&e[_r],Fr=(e,t)=>{return r=e,n=_r,i=t,Object.defineProperty(r,n,{value:i,writable:!0,configurable:!0});var r,n,i},kr=e=>e&&e[_r]&&e[_r].getPayload();class Mr{constructor(){this.payload=void 0,Fr(this,this)}getPayload(){return this.payload||[]}}class Br extends Mr{constructor(e){super(),this.done=!0,this.elapsedTime=void 0,this.lastPosition=void 0,this.lastVelocity=void 0,this.v0=void 0,this.durationProgress=0,this._value=e,Xe.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new Br(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return Xe.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,Xe.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}}class Pr extends Br{constructor(e){super(0),this._string=null,this._toString=void 0,this._toString=Rt({output:[e,e]})}static create(e){return new Pr(e)}getValue(){let e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(Xe.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=Rt({output:[this.getValue(),e]})),this._value=0,super.reset()}}const Er={dependencies:null};class Ar extends Mr{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return et(this.source,((r,n)=>{var i;(i=r)&&i[_r]===i?t[n]=r.getValue(e):Zt(r)?t[n]=Gt(r):e||(t[n]=r)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&Ke(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return et(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){Er.dependencies&&Zt(e)&&Er.dependencies.add(e);const t=kr(e);t&&Ke(t,(e=>this.add(e)))}}class Cr extends Ar{constructor(e){super(e)}static create(e){return new Cr(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,r)=>t.setValue(e[r]))).some(Boolean):(super.setValue(e.map(jr)),!0)}}function jr(e){return(vr(e)?Pr:Br).create(e)}function Hr(e){const t=Or(e);return t?t.constructor:Xe.arr(e)?Cr:vr(e)?Pr:Br}function Tr(){return Tr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Tr.apply(this,arguments)}const Rr=(e,t)=>{const r=!Xe.fun(e)||e.prototype&&e.prototype.isReactComponent;return f(((i,o)=>{const s=a(null),l=r&&p((e=>{s.current=function(e,t){e&&(Xe.fun(e)?e(t):e.current=t);return t}(o,e)}),[o]),[c,u]=function(e,t){const r=new Set;Er.dependencies=r,e.style&&(e=Tr({},e,{style:t.createAnimatedStyle(e.style)}));return e=new Ar(e),Er.dependencies=null,[e,r]}(i,t),h=wr(),f=()=>{const e=s.current;if(r&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,c.getValue(!0)))&&h()},m=new Ir(f,u),g=a();br((()=>(g.current=m,Ke(u,(e=>tr(e,m))),()=>{g.current&&(Ke(g.current.deps,(e=>rr(e,g.current))),Ae.cancel(g.current.update))}))),d(f,[]),Sr((()=>()=>{const e=g.current;Ke(e.deps,(t=>rr(t,e)))}));const y=t.getComponentProps(c.getValue());return n.createElement(e,Tr({},y,{ref:l}))}))};class Ir{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&Ae.write(this.update)}}const zr=Symbol.for("AnimatedComponent"),Lr=e=>Xe.str(e)?e:e&&Xe.str(e.displayName)?e.displayName:Xe.fun(e)&&e.name||null;function Yr(){return Yr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Yr.apply(this,arguments)}function Wr(e,...t){return Xe.fun(e)?e(...t):e}const Nr=(e,t)=>!0===e||!!(t&&e&&(Xe.fun(e)?e(t):tt(e).includes(t))),Vr=(e,t)=>Xe.obj(e)?t&&e[t]:e,qr=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,Qr=e=>e,Ur=(e,t=Qr)=>{let r=Zr;e.default&&!0!==e.default&&(e=e.default,r=Object.keys(e));const n={};for(const i of r){const r=t(e[i],i);Xe.und(r)||(n[i]=r)}return n},Zr=["config","onProps","onStart","onChange","onPause","onResume","onRest"],Gr={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function Xr(e){const t=function(e){const t={};let r=0;if(et(e,((e,n)=>{Gr[n]||(t[n]=e,r++)})),r)return t}(e);if(t){const r={to:t};return et(e,((e,n)=>n in t||(r[n]=e))),r}return Yr({},e)}function Jr(e){return e=Gt(e),Xe.arr(e)?e.map(Jr):vr(e)?ut.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function Kr(e){return Xe.fun(e)||Xe.arr(e)&&Xe.obj(e[0])}const en=Yr({},{tension:170,friction:26},{mass:1,damping:1,easing:Vt.linear,clamp:!1});class tn{constructor(){this.tension=void 0,this.friction=void 0,this.frequency=void 0,this.damping=void 0,this.mass=void 0,this.velocity=0,this.restVelocity=void 0,this.precision=void 0,this.progress=void 0,this.duration=void 0,this.easing=void 0,this.clamp=void 0,this.bounce=void 0,this.decay=void 0,this.round=void 0,Object.assign(this,en)}}function rn(e,t){if(Xe.und(t.decay)){const r=!Xe.und(t.tension)||!Xe.und(t.friction);!r&&Xe.und(t.frequency)&&Xe.und(t.damping)&&Xe.und(t.mass)||(e.duration=void 0,e.decay=void 0),r&&(e.frequency=void 0)}else e.duration=void 0}const nn=[];class on{constructor(){this.changed=!1,this.values=nn,this.toValues=null,this.fromValues=nn,this.to=void 0,this.from=void 0,this.config=new tn,this.immediate=!1}}function an(e,{key:t,props:r,defaultProps:n,state:i,actions:o}){return new Promise(((a,s)=>{var l;let c,u,d=Nr(null!=(l=r.cancel)?l:null==n?void 0:n.cancel,t);if(d)p();else{Xe.und(r.pause)||(i.paused=Nr(r.pause,t));let e=null==n?void 0:n.pause;!0!==e&&(e=i.paused||Nr(e,t)),c=Wr(r.delay||0,t),e?(i.resumeQueue.add(f),o.pause()):(o.resume(),f())}function h(){i.resumeQueue.add(f),i.timeouts.delete(u),u.cancel(),c=u.time-Ae.now()}function f(){c>0&&!ut.skipAnimation?(i.delayed=!0,u=Ae.setTimeout(p,c),i.pauseQueue.add(h),i.timeouts.add(u)):p()}function p(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(h),i.timeouts.delete(u),e<=(i.cancelId||0)&&(d=!0);try{o.start(Yr({},r,{callId:e,cancel:d}),a)}catch(e){s(e)}}}))}const sn=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?un(e.get()):t.every((e=>e.noop))?ln(e.get()):cn(e.get(),t.every((e=>e.finished))),ln=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),cn=(e,t,r=!1)=>({value:e,finished:t,cancelled:r}),un=e=>({value:e,cancelled:!0,finished:!1});function dn(e,t,r,n){const{callId:i,parentId:o,onRest:a}=t,{asyncTo:s,promise:l}=r;return o||e!==s||t.reset?r.promise=(async()=>{r.asyncId=i,r.asyncTo=e;const c=Ur(t,((e,t)=>"onRest"===t?void 0:e));let u,d;const h=new Promise(((e,t)=>(u=e,d=t))),f=e=>{const t=i<=(r.cancelId||0)&&un(n)||i!==r.asyncId&&cn(n,!1);if(t)throw e.result=t,d(e),e},p=(e,t)=>{const o=new fn,a=new pn;return(async()=>{if(ut.skipAnimation)throw hn(r),a.result=cn(n,!1),d(a),a;f(o);const s=Xe.obj(e)?Yr({},e):Yr({},t,{to:e});s.parentId=i,et(c,((e,t)=>{Xe.und(s[t])&&(s[t]=e)}));const l=await n.start(s);return f(o),r.paused&&await new Promise((e=>{r.resumeQueue.add(e)})),l})()};let m;if(ut.skipAnimation)return hn(r),cn(n,!1);try{let t;t=Xe.arr(e)?(async e=>{for(const t of e)await p(t)})(e):Promise.resolve(e(p,n.stop.bind(n))),await Promise.all([t.then(u),h]),m=cn(n.get(),!0,!1)}catch(e){if(e instanceof fn)m=e.result;else{if(!(e instanceof pn))throw e;m=e.result}}finally{i==r.asyncId&&(r.asyncId=o,r.asyncTo=o?s:void 0,r.promise=o?l:void 0)}return Xe.fun(a)&&Ae.batchedUpdates((()=>{a(m,n,n.item)})),m})():l}function hn(e,t){rt(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}class fn extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."),this.result=void 0}}class pn extends Error{constructor(){super("SkipAnimationSignal"),this.result=void 0}}const mn=e=>e instanceof yn;let gn=1;class yn extends Kt{constructor(...e){super(...e),this.id=gn++,this.key=void 0,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=Or(this);return e&&e.getValue()}to(...e){return ut.to(this,e)}interpolate(...e){return gr(`${pr}The "interpolate" function is deprecated in v9 (use "to" instead)`),ut.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){Jt(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||mt.sort(this),Jt(this,{type:"priority",parent:this,priority:e})}}const vn=Symbol.for("SpringPhase"),bn=e=>(1&e[vn])>0,$n=e=>(2&e[vn])>0,wn=e=>(4&e[vn])>0,Sn=(e,t)=>t?e[vn]|=3:e[vn]&=-3,xn=(e,t)=>t?e[vn]|=4:e[vn]&=-5;class Dn extends yn{constructor(e,t){if(super(),this.key=void 0,this.animation=new on,this.queue=void 0,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!Xe.und(e)||!Xe.und(t)){const r=Xe.obj(e)?Yr({},e):Yr({},t,{from:e});Xe.und(r.default)&&(r.default=!0),this.start(r)}}get idle(){return!($n(this)||this._state.asyncTo)||wn(this)}get goal(){return Gt(this.animation.to)}get velocity(){const e=Or(this);return e instanceof Br?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return bn(this)}get isAnimating(){return $n(this)}get isPaused(){return wn(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,r=!1;const n=this.animation;let{config:i,toValues:o}=n;const a=kr(n.to);!a&&Zt(n.to)&&(o=tt(Gt(n.to))),n.values.forEach(((s,l)=>{if(s.done)return;const c=s.constructor==Pr?1:a?a[l].lastPosition:o[l];let u=n.immediate,d=c;if(!u){if(d=s.lastPosition,i.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const r=n.fromValues[l],o=null!=s.v0?s.v0:s.v0=Xe.arr(i.velocity)?i.velocity[l]:i.velocity;let a;const h=i.precision||(r==c?.005:Math.min(1,.001*Math.abs(c-r)));if(Xe.und(i.duration))if(i.decay){const e=!0===i.decay?.998:i.decay,n=Math.exp(-(1-e)*t);d=r+o/(1-e)*(1-n),u=Math.abs(s.lastPosition-d)<=h,a=o*n}else{a=null==s.lastVelocity?o:s.lastVelocity;const t=i.restVelocity||h/10,n=i.clamp?0:i.bounce,l=!Xe.und(n),f=r==c?s.v0>0:r<c;let p,m=!1;const g=1,y=Math.ceil(e/g);for(let e=0;e<y&&(p=Math.abs(a)>t,p||(u=Math.abs(c-d)<=h,!u));++e){l&&(m=d==c||d>c==f,m&&(a=-a*n,d=c));a+=(1e-6*-i.tension*(d-c)+.001*-i.friction*a)/i.mass*g,d+=a*g}}else{let n=1;i.duration>0&&(this._memoizedDuration!==i.duration&&(this._memoizedDuration=i.duration,s.durationProgress>0&&(s.elapsedTime=i.duration*s.durationProgress,t=s.elapsedTime+=e)),n=(i.progress||0)+t/this._memoizedDuration,n=n>1?1:n<0?0:n,s.durationProgress=n),d=r+i.easing(n)*(c-r),a=(d-s.lastPosition)/e,u=1==n}s.lastVelocity=a,Number.isNaN(d)&&(console.warn("Got NaN while animating:",this),u=!0)}a&&!a[l].done&&(u=!1),u?s.done=!0:t=!1,s.setValue(d,i.round)&&(r=!0)}));const s=Or(this),l=s.getValue();if(t){const e=Gt(n.to);l===e&&!r||i.decay?r&&i.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else r&&this._onChange(l)}set(e){return Ae.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if($n(this)){const{to:e,config:t}=this.animation;Ae.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let r;return Xe.und(e)?(r=this.queue||[],this.queue=[]):r=[Xe.obj(e)?e:Yr({},t,{to:e})],Promise.all(r.map((e=>this._update(e)))).then((e=>sn(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),hn(this._state,e&&this._lastCallId),Ae.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:r,from:n}=e;r=Xe.obj(r)?r[t]:r,(null==r||Kr(r))&&(r=void 0),n=Xe.obj(n)?n[t]:n,null==n&&(n=void 0);const i={to:r,from:n};return bn(this)||(e.reverse&&([r,n]=[n,r]),n=Gt(n),Xe.und(n)?Or(this)||this._set(r):this._set(n)),i}_update(e,t){let r=Yr({},e);const{key:n,defaultProps:i}=this;r.default&&Object.assign(i,Ur(r,((e,t)=>/^on/.test(t)?Vr(e,n):e))),Pn(this,r,"onProps"),En(this,"onProps",r,this);const o=this._prepareNode(r);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const a=this._state;return an(++this._lastCallId,{key:n,props:r,defaultProps:i,state:a,actions:{pause:()=>{wn(this)||(xn(this,!0),nt(a.pauseQueue),En(this,"onPause",cn(this,_n(this,this.animation.to)),this))},resume:()=>{wn(this)&&(xn(this,!1),$n(this)&&this._resume(),nt(a.resumeQueue),En(this,"onResume",cn(this,_n(this,this.animation.to)),this))},start:this._merge.bind(this,o)}}).then((e=>{if(r.loop&&e.finished&&(!t||!e.noop)){const e=On(r);if(e)return this._update(e,!0)}return e}))}_merge(e,t,r){if(t.cancel)return this.stop(!0),r(un(this));const n=!Xe.und(e.to),i=!Xe.und(e.from);if(n||i){if(!(t.callId>this._lastToId))return r(un(this));this._lastToId=t.callId}const{key:o,defaultProps:a,animation:s}=this,{to:l,from:c}=s;let{to:u=l,from:d=c}=e;!i||n||t.default&&!Xe.und(u)||(u=d),t.reverse&&([u,d]=[d,u]);const h=!Je(d,c);h&&(s.from=d),d=Gt(d);const f=!Je(u,l);f&&this._focus(u);const p=Kr(t.to),{config:m}=s,{decay:g,velocity:y}=m;(n||i)&&(m.velocity=0),t.config&&!p&&function(e,t,r){r&&(rn(r=Yr({},r),t),t=Yr({},r,t)),rn(e,t),Object.assign(e,t);for(const t in en)null==e[t]&&(e[t]=en[t]);let{mass:n,frequency:i,damping:o}=e;Xe.und(i)||(i<.01&&(i=.01),o<0&&(o=0),e.tension=Math.pow(2*Math.PI/i,2)*n,e.friction=4*Math.PI*o*n/i)}(m,Wr(t.config,o),t.config!==a.config?Wr(a.config,o):void 0);let v=Or(this);if(!v||Xe.und(u))return r(cn(this,!0));const b=Xe.und(t.reset)?i&&!t.default:!Xe.und(d)&&Nr(t.reset,o),$=b?d:this.get(),w=Jr(u),S=Xe.num(w)||Xe.arr(w)||vr(w),x=!p&&(!S||Nr(a.immediate||t.immediate,o));if(f){const e=Hr(u);if(e!==v.constructor){if(!x)throw Error(`Cannot animate between ${v.constructor.name} and ${e.name}, as the "to" prop suggests`);v=this._set(w)}}const D=v.constructor;let _=Zt(u),O=!1;if(!_){const e=b||!bn(this)&&h;(f||e)&&(O=Je(Jr($),w),_=!O),(Je(s.immediate,x)||x)&&Je(m.decay,g)&&Je(m.velocity,y)||(_=!0)}if(O&&$n(this)&&(s.changed&&!b?_=!0:_||this._stop(l)),!p&&((_||Zt(l))&&(s.values=v.getPayload(),s.toValues=Zt(u)?null:D==Pr?[1]:tt(w)),s.immediate!=x&&(s.immediate=x,x||b||this._set(l)),_)){const{onRest:e}=s;Ke(Bn,(e=>Pn(this,t,e)));const n=cn(this,_n(this,l));nt(this._pendingCalls,n),this._pendingCalls.add(r),s.changed&&Ae.batchedUpdates((()=>{s.changed=!b,null==e||e(n,this),b?Wr(a.onRest,n):null==s.onStart||s.onStart(n,this)}))}b&&this._set($),p?r(dn(t.to,t,this._state,this)):_?this._start():$n(this)&&!f?this._pendingCalls.add(r):r(ln($))}_focus(e){const t=this.animation;e!==t.to&&(Xt(this)&&this._detach(),t.to=e,Xt(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;Zt(t)&&(tr(t,this),mn(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;Zt(e)&&rr(e,this)}_set(e,t=!0){const r=Gt(e);if(!Xe.und(r)){const e=Or(this);if(!e||!Je(r,e.getValue())){const n=Hr(r);e&&e.constructor==n?e.setValue(r):Fr(this,n.create(r)),e&&Ae.batchedUpdates((()=>{this._onChange(r,t)}))}}return Or(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,En(this,"onStart",cn(this,_n(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),Wr(this.animation.onChange,e,this)),Wr(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;Or(this).reset(Gt(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),$n(this)||(Sn(this,!0),wn(this)||this._resume())}_resume(){ut.skipAnimation?this.finish():mt.start(this)}_stop(e,t){if($n(this)){Sn(this,!1);const r=this.animation;Ke(r.values,(e=>{e.done=!0})),r.toValues&&(r.onChange=r.onPause=r.onResume=void 0),Jt(this,{type:"idle",parent:this});const n=t?un(this.get()):cn(this.get(),_n(this,null!=e?e:r.to));nt(this._pendingCalls,n),r.changed&&(r.changed=!1,En(this,"onRest",n,this))}}}function _n(e,t){const r=Jr(t);return Je(Jr(e.get()),r)}function On(e,t=e.loop,r=e.to){let n=Wr(t);if(n){const i=!0!==n&&Xr(n),o=(i||e).reverse,a=!i||i.reset;return Fn(Yr({},e,{loop:t,default:!1,pause:void 0,to:!o||Kr(r)?r:void 0,from:a?e.from:void 0,reset:a},i))}}function Fn(e){const{to:t,from:r}=e=Xr(e),n=new Set;return Xe.obj(t)&&Mn(t,n),Xe.obj(r)&&Mn(r,n),e.keys=n.size?Array.from(n):null,e}function kn(e){const t=Fn(e);return Xe.und(t.default)&&(t.default=Ur(t)),t}function Mn(e,t){et(e,((e,r)=>null!=e&&t.add(r)))}const Bn=["onStart","onRest","onChange","onPause","onResume"];function Pn(e,t,r){e.animation[r]=t[r]!==qr(t,r)?Vr(t[r],e.key):void 0}function En(e,t,...r){var n,i,o,a;null==(n=(i=e.animation)[t])||n.call(i,...r),null==(o=(a=e.defaultProps)[t])||o.call(a,...r)}const An=["onStart","onChange","onRest"];let Cn=1;class jn{constructor(e,t){this.id=Cn++,this.springs={},this.queue=[],this.ref=void 0,this._flush=void 0,this._initialProps=void 0,this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._item=void 0,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start(Yr({default:!0},e))}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,r)=>e[r]=t.get())),e}set(e){for(const t in e){const r=e[t];Xe.und(r)||this.springs[t].set(r)}}update(e){return e&&this.queue.push(Fn(e)),this}start(e){let{queue:t}=this;return e?t=tt(e).map(Fn):this.queue=[],this._flush?this._flush(this,t):(Yn(this,t),Hn(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const r=this.springs;Ke(tt(t),(t=>r[t].stop(!!e)))}else hn(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(Xe.und(e))this.start({pause:!0});else{const t=this.springs;Ke(tt(e),(e=>t[e].pause()))}return this}resume(e){if(Xe.und(e))this.start({pause:!1});else{const t=this.springs;Ke(tt(e),(e=>t[e].resume()))}return this}each(e){et(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:r}=this._events,n=this._active.size>0,i=this._changed.size>0;(n&&!this._started||i&&!this._started)&&(this._started=!0,rt(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const o=!n&&this._started,a=i||o&&r.size?this.get():null;i&&t.size&&rt(t,(([e,t])=>{t.value=a,e(t,this,this._item)})),o&&(this._started=!1,rt(r,(([e,t])=>{t.value=a,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}Ae.onFrame(this._onFrame)}}function Hn(e,t){return Promise.all(t.map((t=>Tn(e,t)))).then((t=>sn(e,t)))}async function Tn(e,t,r){const{keys:n,to:i,from:o,loop:a,onRest:s,onResolve:l}=t,c=Xe.obj(t.default)&&t.default;a&&(t.loop=!1),!1===i&&(t.to=null),!1===o&&(t.from=null);const u=Xe.arr(i)||Xe.fun(i)?i:void 0;u?(t.to=void 0,t.onRest=void 0,c&&(c.onRest=void 0)):Ke(An,(r=>{const n=t[r];if(Xe.fun(n)){const i=e._events[r];t[r]=({finished:e,cancelled:t})=>{const r=i.get(n);r?(e||(r.finished=!1),t&&(r.cancelled=!0)):i.set(n,{value:null,finished:e||!1,cancelled:t||!1})},c&&(c[r]=t[r])}}));const d=e._state;t.pause===!d.paused?(d.paused=t.pause,nt(t.pause?d.pauseQueue:d.resumeQueue)):d.paused&&(t.pause=!0);const h=(n||Object.keys(e.springs)).map((r=>e.springs[r].start(t))),f=!0===t.cancel||!0===qr(t,"cancel");(u||f&&d.asyncId)&&h.push(an(++e._lastAsyncId,{props:t,state:d,actions:{pause:Ge,resume:Ge,start(t,r){f?(hn(d,e._lastAsyncId),r(un(e))):(t.onRest=s,r(dn(u,t,d,e)))}}})),d.paused&&await new Promise((e=>{d.resumeQueue.add(e)}));const p=sn(e,await Promise.all(h));if(a&&p.finished&&(!r||!p.noop)){const r=On(t,a,i);if(r)return Yn(e,[r]),Tn(e,r,!0)}return l&&Ae.batchedUpdates((()=>l(p,e,e.item))),p}function Rn(e,t){const r=Yr({},e.springs);return t&&Ke(tt(t),(e=>{Xe.und(e.keys)&&(e=Fn(e)),Xe.obj(e.to)||(e=Yr({},e,{to:void 0})),Ln(r,e,(e=>zn(e)))})),In(e,r),r}function In(e,t){et(t,((t,r)=>{e.springs[r]||(e.springs[r]=t,tr(t,e))}))}function zn(e,t){const r=new Dn;return r.key=e,t&&tr(r,t),r}function Ln(e,t,r){t.keys&&Ke(t.keys,(n=>{(e[n]||(e[n]=r(n)))._prepareNode(t)}))}function Yn(e,t){Ke(t,(t=>{Ln(e.springs,t,(t=>zn(t,e)))}))}const Wn=["children"],Nn=e=>{let{children:t}=e,r=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,Wn);const i=m(Vn),o=r.pause||!!i.pause,l=r.immediate||!!i.immediate;r=function(e,t){const[r]=s((()=>({inputs:t,result:e()}))),n=a(),i=n.current;let o=i;o?Boolean(t&&o.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}(t,o.inputs))||(o={inputs:t,result:e()}):o=r;return d((()=>{n.current=o,i==r&&(r.inputs=r.result=void 0)}),[o]),o.result}((()=>({pause:o,immediate:l})),[o,l]);const{Provider:c}=Vn;return n.createElement(c,{value:r},t)},Vn=(qn=Nn,Qn={},Object.assign(qn,n.createContext(Qn)),qn.Provider._context=qn,qn.Consumer._context=qn,qn);var qn,Qn;Nn.Provider=Vn.Provider,Nn.Consumer=Vn.Consumer;const Un=()=>{const e=[],t=function(t){yr(`${pr}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const n=[];return Ke(e,((e,i)=>{if(Xe.und(t))n.push(e.start());else{const o=r(t,e,i);o&&n.push(e.start(o))}})),n};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const r=e.indexOf(t);~r&&e.splice(r,1)},t.pause=function(){return Ke(e,(e=>e.pause(...arguments))),this},t.resume=function(){return Ke(e,(e=>e.resume(...arguments))),this},t.set=function(t){Ke(e,(e=>e.set(t)))},t.start=function(t){const r=[];return Ke(e,((e,n)=>{if(Xe.und(t))r.push(e.start());else{const i=this._getProps(t,e,n);i&&r.push(e.start(i))}})),r},t.stop=function(){return Ke(e,(e=>e.stop(...arguments))),this},t.update=function(t){return Ke(e,((e,r)=>e.update(this._getProps(t,e,r)))),this};const r=function(e,t,r){return Xe.fun(e)?e(r,t):e};return t._getProps=r,t};function Zn(e,t){const r=Xe.fun(e),[[n],i]=function(e,t,r){const n=Xe.fun(t)&&t;n&&!r&&(r=[]);const i=g((()=>n||3==arguments.length?Un():void 0),[]),o=a(0),s=wr(),l=g((()=>({ctrls:[],queue:[],flush(e,t){const r=Rn(e,t);return o.current>0&&!l.queue.length&&!Object.keys(r).some((t=>!e.springs[t]))?Hn(e,t):new Promise((n=>{In(e,r),l.queue.push((()=>{n(Hn(e,t))})),s()}))}})),[]),c=a([...l.ctrls]),u=[],d=Dr(e)||0;function h(e,r){for(let i=e;i<r;i++){const e=c.current[i]||(c.current[i]=new jn(null,l.flush)),r=n?n(i,e):t[i];r&&(u[i]=kn(r))}}g((()=>{Ke(c.current.slice(e,d),(e=>{!function(e,t){var r;null==(r=e.ref)||r.delete(e),null==t||t.delete(e)}(e,i),e.stop(!0)})),c.current.length=e,h(d,e)}),[e]),g((()=>{h(0,Math.min(d,e))}),r);const f=c.current.map(((e,t)=>Rn(e,u[t]))),p=m(Nn),y=Dr(p),v=p!==y&&function(e){for(const t in e)return!0;return!1}(p);br((()=>{o.current++,l.ctrls=c.current;const{queue:e}=l;e.length&&(l.queue=[],Ke(e,(e=>e()))),Ke(c.current,((e,t)=>{null==i||i.add(e),v&&e.start({default:p});const r=u[t];r&&(function(e,t){var r;t&&e.ref!==t&&(null==(r=e.ref)||r.delete(e),t.add(e),e.ref=t)}(e,r.ref),e.ref?e.queue.push(r):e.start(r))}))})),Sr((()=>()=>{Ke(l.ctrls,(e=>e.stop(!0)))}));const b=f.map((e=>Yr({},e)));return i?[b,i]:b}(1,r?e:[e],r?t||[]:t);return r||2==arguments.length?[n,i]:n}let Gn;!function(e){e.MOUNT="mount",e.ENTER="enter",e.UPDATE="update",e.LEAVE="leave"}(Gn||(Gn={}));class Xn extends yn{constructor(e,t){super(),this.key=void 0,this.idle=!0,this.calc=void 0,this._active=new Set,this.source=e,this.calc=Rt(...t);const r=this._get(),n=Hr(r);Fr(this,n.create(r))}advance(e){const t=this._get();Je(t,this.get())||(Or(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&Kn(this._active)&&ei(this)}_get(){const e=Xe.arr(this.source)?this.source.map(Gt):tt(Gt(this.source));return this.calc(...e)}_start(){this.idle&&!Kn(this._active)&&(this.idle=!1,Ke(kr(this),(e=>{e.done=!1})),ut.skipAnimation?(Ae.batchedUpdates((()=>this.advance())),ei(this)):mt.start(this))}_attach(){let e=1;Ke(tt(this.source),(t=>{Zt(t)&&tr(t,this),mn(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){Ke(tt(this.source),(e=>{Zt(e)&&rr(e,this)})),this._active.clear(),ei(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=tt(this.source).reduce(((e,t)=>Math.max(e,(mn(t)?t.priority:0)+1)),0))}}function Jn(e){return!1!==e.idle}function Kn(e){return!e.size||Array.from(e).every(Jn)}function ei(e){e.idle||(e.idle=!0,Ke(kr(e),(e=>{e.done=!0})),Jt(e,{type:"idle",parent:e}))}function ti(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}ut.assign({createStringInterpolator:fr,to:(e,t)=>new Xn(e,t)});const ri=["style","children","scrollTop","scrollLeft","viewBox"],ni=/^--/;function ii(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||ni.test(e)||ai.hasOwnProperty(e)&&ai[e]?(""+t).trim():t+"px"}const oi={};let ai={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0};const si=["Webkit","Ms","Moz","O"];ai=Object.keys(ai).reduce(((e,t)=>(si.forEach((r=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(r,t)]=e[t])),e)),ai);const li=["x","y","z"],ci=/^(matrix|translate|scale|rotate|skew)/,ui=/^(translate)/,di=/^(rotate|skew)/,hi=(e,t)=>Xe.num(e)&&0!==e?e+t:e,fi=(e,t)=>Xe.arr(e)?e.every((e=>fi(e,t))):Xe.num(e)?e===t:parseFloat(e)===t;class pi extends Ar{constructor(e){let{x:t,y:r,z:n}=e,i=ti(e,li);const o=[],a=[];(t||r||n)&&(o.push([t||0,r||0,n||0]),a.push((e=>[`translate3d(${e.map((e=>hi(e,"px"))).join(",")})`,fi(e,0)]))),et(i,((e,t)=>{if("transform"===t)o.push([e||""]),a.push((e=>[e,""===e]));else if(ci.test(t)){if(delete i[t],Xe.und(e))return;const r=ui.test(t)?"px":di.test(t)?"deg":"";o.push(tt(e)),a.push("rotate3d"===t?([e,t,n,i])=>[`rotate3d(${e},${t},${n},${hi(i,r)})`,fi(i,0)]:e=>[`${t}(${e.map((e=>hi(e,r))).join(",")})`,fi(e,t.startsWith("scale")?1:0)])}})),o.length&&(i.transform=new mi(o,a)),super(i)}}class mi extends Kt{constructor(e,t){super(),this._value=null,this.inputs=e,this.transforms=t}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return Ke(this.inputs,((r,n)=>{const i=Gt(r[0]),[o,a]=this.transforms[n](Xe.arr(i)?i:r.map(Gt));e+=" "+o,t=t&&a})),t?"none":e}observerAdded(e){1==e&&Ke(this.inputs,(e=>Ke(e,(e=>Zt(e)&&tr(e,this)))))}observerRemoved(e){0==e&&Ke(this.inputs,(e=>Ke(e,(e=>Zt(e)&&rr(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),Jt(this,e)}}const gi=["scrollTop","scrollLeft"];ut.assign({batchedUpdates:$,createStringInterpolator:fr,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});const yi=((e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:r=(e=>new Ar(e)),getComponentProps:n=(e=>e)}={})=>{const i={applyAnimatedValues:t,createAnimatedStyle:r,getComponentProps:n},o=e=>{const t=Lr(e)||"Anonymous";return(e=Xe.str(e)?o[e]||(o[e]=Rr(e,i)):e[zr]||(e[zr]=Rr(e,i))).displayName=`Animated(${t})`,e};return et(e,((t,r)=>{Xe.arr(e)&&(r=Lr(t)),o[r]=o(t)})),{animated:o}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const r="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,n=t,{style:i,children:o,scrollTop:a,scrollLeft:s,viewBox:l}=n,c=ti(n,ri),u=Object.values(c),d=Object.keys(c).map((t=>r||e.hasAttribute(t)?t:oi[t]||(oi[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==o&&(e.textContent=o);for(let t in i)if(i.hasOwnProperty(t)){const r=ii(t,i[t]);ni.test(t)?e.style.setProperty(t,r):e.style[t]=r}d.forEach(((t,r)=>{e.setAttribute(t,u[r])})),void 0!==a&&(e.scrollTop=a),void 0!==s&&(e.scrollLeft=s),void 0!==l&&e.setAttribute("viewBox",l)},createAnimatedStyle:e=>new pi(e),getComponentProps:e=>ti(e,gi)}),vi=yi.animated,bi=w(vi.div)`
    position: absolute;
    top: calc(100% + 0.5rem);
    left: -1px;
    width: calc(100% + 2px);
    max-width: 41rem;
    overflow: hidden;
    z-index: 1;
    min-width: 21rem;

    ${H.mobileL} {
        min-width: 17.5rem;
    }
`;var $i={exports:{}};$i.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,n=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),r=60*t[1]+(+t[2]||0);return 0===r?0:"+"===t[0]?-r:r}(e)}],c=function(e){var t=o[e];return t&&(t.indexOf?t:t.s.concat(t.f))},u=function(e,t){var r,n=o.meridiem;if(n){for(var i=1;i<=24;i+=1)if(e.indexOf(n(i,0,t))>-1){r=i>12;break}}else r=e===(t?"pm":"PM");return r},d={A:[i,function(e){this.afternoon=u(e,!1)}],a:[i,function(e){this.afternoon=u(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[r,s("day")],Do:[i,function(e){var t=o.ordinal,r=e.match(/\d+/);if(this.day=r[0],t)for(var n=1;n<=31;n+=1)t(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[r,s("month")],MMM:[i,function(e){var t=c("months"),r=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],MMMM:[i,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[r,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(r){var n,i;n=r,i=o&&o.formats;for(var a=(r=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,r,n){var o=n&&n.toUpperCase();return r||i[n]||e[n]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,r){return t||r.slice(1)}))}))).match(t),s=a.length,l=0;l<s;l+=1){var c=a[l],u=d[c],h=u&&u[0],f=u&&u[1];a[l]=f?{regex:h,parser:f}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},r=0,n=0;r<s;r+=1){var i=a[r];if("string"==typeof i)n+=i.length;else{var o=i.regex,l=i.parser,c=e.slice(n),u=o.exec(c)[0];l.call(t,u),e=e.replace(u,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var r=e.hours;t?r<12&&(e.hours+=12):12===r&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,r){r.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var n=t.prototype,i=n.parse;n.parse=function(e){var t=e.date,n=e.utc,a=e.args;this.$u=n;var s=a[1];if("string"==typeof s){var l=!0===a[2],c=!0===a[3],u=l||c,d=a[2];c&&(d=a[2]),o=this.$locale(),!l&&d&&(o=r.Ls[d]),this.$d=function(e,t,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var n=h(t)(e),i=n.year,o=n.month,a=n.day,s=n.hours,l=n.minutes,c=n.seconds,u=n.milliseconds,d=n.zone,f=new Date,p=a||(i||o?1:f.getDate()),m=i||f.getFullYear(),g=0;i&&!o||(g=o>0?o-1:f.getMonth());var y=s||0,v=l||0,b=c||0,$=u||0;return d?new Date(Date.UTC(m,g,p,y,v,b,$+60*d.offset*1e3)):r?new Date(Date.UTC(m,g,p,y,v,b,$)):new Date(m,g,p,y,v,b,$)}catch(e){return new Date("")}}(t,s,n),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(s)&&(this.$d=new Date("")),o={}}else if(s instanceof Array)for(var f=s.length,p=1;p<=f;p+=1){a[1]=s[p-1];var m=r.apply(this,a);if(m.isValid()){this.$d=m.$d,this.$L=m.$L,this.init();break}p===f&&(this.$d=new Date(""))}else i.call(this,e)}}}();var wi,Si,xi=$i.exports,Di={exports:{}},_i=Di.exports=(wi={year:0,month:1,day:2,hour:3,minute:4,second:5},Si={},function(e,t,r){var n,i=function(e,t,r){void 0===r&&(r={});var n=new Date(e),i=function(e,t){void 0===t&&(t={});var r=t.timeZoneName||"short",n=e+"|"+r,i=Si[n];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:r}),Si[n]=i),i}(t,r);return i.formatToParts(n)},o=function(e,t){for(var n=i(e,t),o=[],a=0;a<n.length;a+=1){var s=n[a],l=s.type,c=s.value,u=wi[l];u>=0&&(o[u]=parseInt(c,10))}var d=o[3],h=24===d?0:d,f=o[0]+"-"+o[1]+"-"+o[2]+" "+h+":"+o[4]+":"+o[5]+":000",p=+e;return(r.utc(f).valueOf()-(p-=p%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=n);var i=this.utcOffset(),o=this.toDate(),a=o.toLocaleString("en-US",{timeZone:e}),s=Math.round((o-new Date(a))/1e3/60),l=r(a).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-s,!0);if(t){var c=l.utcOffset();l=l.add(i-c,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var t=this.$x.$timezone||r.tz.guess(),n=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var n=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return s.call(n,e,t).tz(this.$x.$timezone,!0)},r.tz=function(e,t,i){var a=i&&t,s=i||t||n,l=o(+r(),s);if("string"!=typeof e)return r(e).tz(s);var c=function(e,t,r){var n=e-60*t*1e3,i=o(n,r);if(t===i)return[n,t];var a=o(n-=60*(i-t)*1e3,r);return i===a?[n,i]:[e-60*Math.min(i,a)*1e3,Math.max(i,a)]}(r.utc(e,a).valueOf(),l,s),u=c[0],d=c[1],h=r(u).utcOffset(d);return h.$x.$timezone=s,h},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function(e){n=e}}),Oi={exports:{}};Oi.exports=function(e,t,r){t.prototype.isBetween=function(e,t,n,i){var o=r(e),a=r(t),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(o,n):!this.isBefore(o,n))&&(l?this.isBefore(a,n):!this.isAfter(a,n))||(s?this.isBefore(o,n):!this.isAfter(o,n))&&(l?this.isAfter(a,n):!this.isBefore(a,n))}};var Fi=Oi.exports,ki={exports:{}};ki.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var Mi=ki.exports,Bi={exports:{}};Bi.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var Pi,Ei=Bi.exports;E.extend(Fi),E.extend(Mi),E.extend(Ei),E.extend(xi),E.extend(_i),function(e){e.generateDays=e=>{const t=e.startOf("month"),r=E(t).startOf("week");return Ai(r).map((e=>Ci(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Ci(t)},e.generateMonths=e=>{const t=[];for(let r=0;r<12;r++){const n=e.month(r);t.push(E(n))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),r=10*Math.floor(t/10),n=e.year(r),i=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)i.push(n.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+E(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=E(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,r,n="day")=>!t&&!r||(t&&r?e.isBetween(t,r,n,"[]"):t?e.isSameOrAfter(t,n):e.isSameOrBefore(r,n)),e.isPreviousMonthWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"month"),r,void 0,"month"),e.isPreviousYearWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"year"),r,void 0,"year"),e.isPreviousDecadeWithinRange=(t,r)=>{const{beginDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).subtract(1,"year"),r,void 0,"year")},e.isNextMonthWithinRange=(t,r)=>e.isWithinRange(t.add(1,"month"),void 0,r,"month"),e.isNextYearWithinRange=(t,r)=>e.isWithinRange(t.add(1,"year"),void 0,r,"year"),e.isNextDecadeWithinRange=(t,r)=>{const{endDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).add(1,"year"),void 0,r,"year")}}(Pi||(Pi={}));const Ai=e=>{const t=[e];for(let r=1;r<6;r++){const n=e.add(r,"week");t.push(n)}return t},Ci=e=>{const t=[];for(let r=0;r<7;r++){const n=e.add(r,"day");t.push(n)}return t};var ji=Array.isArray,Hi="object"==typeof M&&M&&M.Object===Object&&M,Ti="object"==typeof self&&self&&self.Object===Object&&self,Ri=Hi||Ti||Function("return this")(),Ii=Ri.Symbol,zi=Ii,Li=Object.prototype,Yi=Li.hasOwnProperty,Wi=Li.toString,Ni=zi?zi.toStringTag:void 0;var Vi=function(e){var t=Yi.call(e,Ni),r=e[Ni];try{e[Ni]=void 0;var n=!0}catch(e){}var i=Wi.call(e);return n&&(t?e[Ni]=r:delete e[Ni]),i},qi=Object.prototype.toString;var Qi=Vi,Ui=function(e){return qi.call(e)},Zi=Ii?Ii.toStringTag:void 0;var Gi=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Zi&&Zi in Object(e)?Qi(e):Ui(e)};var Xi=Gi,Ji=function(e){return null!=e&&"object"==typeof e};var Ki=function(e){return"symbol"==typeof e||Ji(e)&&"[object Symbol]"==Xi(e)},eo=ji,to=Ki,ro=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,no=/^\w*$/;var io=function(e,t){if(eo(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!to(e))||(no.test(e)||!ro.test(e)||null!=t&&e in Object(t))};var oo=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},ao=Gi,so=oo;var lo,co=function(e){if(!so(e))return!1;var t=ao(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},uo=Ri["__core-js_shared__"],ho=(lo=/[^.]+$/.exec(uo&&uo.keys&&uo.keys.IE_PROTO||""))?"Symbol(src)_1."+lo:"";var fo=function(e){return!!ho&&ho in e},po=Function.prototype.toString;var mo=co,go=fo,yo=oo,vo=function(e){if(null!=e){try{return po.call(e)}catch(e){}try{return e+""}catch(e){}}return""},bo=/^\[object .+?Constructor\]$/,$o=Function.prototype,wo=Object.prototype,So=$o.toString,xo=wo.hasOwnProperty,Do=RegExp("^"+So.call(xo).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var _o=function(e){return!(!yo(e)||go(e))&&(mo(e)?Do:bo).test(vo(e))},Oo=function(e,t){return null==e?void 0:e[t]};var Fo=function(e,t){var r=Oo(e,t);return _o(r)?r:void 0},ko=Fo(Object,"create"),Mo=ko;var Bo=function(){this.__data__=Mo?Mo(null):{},this.size=0};var Po=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Eo=ko,Ao=Object.prototype.hasOwnProperty;var Co=function(e){var t=this.__data__;if(Eo){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return Ao.call(t,e)?t[e]:void 0},jo=ko,Ho=Object.prototype.hasOwnProperty;var To=ko;var Ro=Bo,Io=Po,zo=Co,Lo=function(e){var t=this.__data__;return jo?void 0!==t[e]:Ho.call(t,e)},Yo=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=To&&void 0===t?"__lodash_hash_undefined__":t,this};function Wo(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Wo.prototype.clear=Ro,Wo.prototype.delete=Io,Wo.prototype.get=zo,Wo.prototype.has=Lo,Wo.prototype.set=Yo;var No=Wo;var Vo=function(){this.__data__=[],this.size=0};var qo=function(e,t){return e===t||e!=e&&t!=t};var Qo=function(e,t){for(var r=e.length;r--;)if(qo(e[r][0],t))return r;return-1},Uo=Qo,Zo=Array.prototype.splice;var Go=Qo;var Xo=Qo;var Jo=Qo;var Ko=Vo,ea=function(e){var t=this.__data__,r=Uo(t,e);return!(r<0)&&(r==t.length-1?t.pop():Zo.call(t,r,1),--this.size,!0)},ta=function(e){var t=this.__data__,r=Go(t,e);return r<0?void 0:t[r][1]},ra=function(e){return Xo(this.__data__,e)>-1},na=function(e,t){var r=this.__data__,n=Jo(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function ia(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}ia.prototype.clear=Ko,ia.prototype.delete=ea,ia.prototype.get=ta,ia.prototype.has=ra,ia.prototype.set=na;var oa=ia,aa=Fo(Ri,"Map"),sa=No,la=oa,ca=aa;var ua=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var da=function(e,t){var r=e.__data__;return ua(t)?r["string"==typeof t?"string":"hash"]:r.map},ha=da;var fa=da;var pa=da;var ma=da;var ga=function(){this.size=0,this.__data__={hash:new sa,map:new(ca||la),string:new sa}},ya=function(e){var t=ha(this,e).delete(e);return this.size-=t?1:0,t},va=function(e){return fa(this,e).get(e)},ba=function(e){return pa(this,e).has(e)},$a=function(e,t){var r=ma(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};function wa(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}wa.prototype.clear=ga,wa.prototype.delete=ya,wa.prototype.get=va,wa.prototype.has=ba,wa.prototype.set=$a;var Sa=wa;function xa(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],o=r.cache;if(o.has(i))return o.get(i);var a=e.apply(this,n);return r.cache=o.set(i,a)||o,a};return r.cache=new(xa.Cache||Sa),r}xa.Cache=Sa;var Da=xa;var _a=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Oa=/\\(\\)?/g,Fa=function(e){var t=Da(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(_a,(function(e,r,n,i){t.push(n?i.replace(Oa,"$1"):r||e)})),t}));var ka=function(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i},Ma=ji,Ba=Ki,Pa=Ii?Ii.prototype:void 0,Ea=Pa?Pa.toString:void 0;var Aa=function e(t){if("string"==typeof t)return t;if(Ma(t))return ka(t,e)+"";if(Ba(t))return Ea?Ea.call(t):"";var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r},Ca=Aa;var ja=ji,Ha=io,Ta=Fa,Ra=function(e){return null==e?"":Ca(e)};var Ia=Ki;var za=function(e,t){return ja(e)?e:Ha(e,t)?[e]:Ta(Ra(e))},La=function(e){if("string"==typeof e||Ia(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var Ya=function(e,t){for(var r=0,n=(t=za(t,e)).length;null!=e&&r<n;)e=e[La(t[r++])];return r&&r==n?e:void 0};var Wa=function(e,t,r){var n=null==e?void 0:Ya(e,t);return void 0===n?r:n};const Na=(e,t,r)=>t?Wa(r,t)||Wa(e,t):r||e,Va=(e,t)=>{const r=t||e.defaultValue;return Wa(e.collections,r)};var qa;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(qa||(qa={}));const Qa={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},Ua=e=>t=>{const r=t.theme,n=Va(Qa,r[qa.colorScheme]);return r.options&&r.options.color?Na(n,e,r.options.color):Na(n,e)},Za={Brand:{1:Ua("Brand.1"),2:Ua("Brand.2"),3:Ua("Brand.3"),4:Ua("Brand.4"),5:Ua("Brand.5"),6:Ua("Brand.6")},Primary:Ua("Primary"),PrimaryDark:Ua("PrimaryDark"),Secondary:Ua("Secondary"),Accent:{Light:{1:Ua("Accent.Light.1"),2:Ua("Accent.Light.2"),3:Ua("Accent.Light.3"),4:Ua("Accent.Light.4"),5:Ua("Accent.Light.5"),6:Ua("Accent.Light.6")},Dark:{1:Ua("Accent.Dark.1"),2:Ua("Accent.Dark.2"),3:Ua("Accent.Dark.3")}},Neutral:{1:Ua("Neutral.1"),2:Ua("Neutral.2"),3:Ua("Neutral.3"),4:Ua("Neutral.4"),5:Ua("Neutral.5"),6:Ua("Neutral.6"),7:Ua("Neutral.7"),8:Ua("Neutral.8")},Validation:{Green:{Text:Ua("Validation.Green.Text"),Icon:Ua("Validation.Green.Icon"),Border:Ua("Validation.Green.Border"),Background:Ua("Validation.Green.Background")},Orange:{Text:Ua("Validation.Orange.Text"),Icon:Ua("Validation.Orange.Icon"),Border:Ua("Validation.Orange.Border"),Background:Ua("Validation.Orange.Background"),Badge:Ua("Validation.Orange.Badge")},Red:{Text:Ua("Validation.Red.Text"),Icon:Ua("Validation.Red.Icon"),Border:Ua("Validation.Red.Border"),Background:Ua("Validation.Red.Background")},Blue:{Text:Ua("Validation.Blue.Text"),Icon:Ua("Validation.Blue.Icon"),Border:Ua("Validation.Blue.Border"),Background:Ua("Validation.Blue.Background")}},Shadow:{Accent:Ua("Shadow.Accent"),Red:Ua("Shadow.Red"),Elevation:Ua("Shadow.Elevation")}},Ga=w.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`,Xa=S`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Ja=w.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||Za.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${Xa} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Ka=w(Ja)`
    animation-delay: -0.45s;
`,es=w(Ja)`
    animation-delay: -0.3s;
`,ts=w(Ja)`
    animation-delay: -0.15s;
`,rs={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},ns={collections:{base:{D1:{fontFamily:rs.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:rs.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:rs.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:rs.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:rs.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:rs.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:rs.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:rs.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:rs.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:rs.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:rs.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:rs.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:rs.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:rs.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},is=e=>t=>{const r=t.theme,n=Va(ns,r[qa.textStyleScheme]);return r.options&&r.options.textStyle?Na(n,e,r.options.textStyle):Na(n,e)},os={D1:{fontFamily:is("D1.fontFamily"),fontSize:is("D1.fontSize"),fontWeight:is("D1.fontWeight"),lineHeight:is("D1.lineHeight"),letterSpacing:is("D1.letterSpacing")},D2:{fontFamily:is("D2.fontFamily"),fontSize:is("D2.fontSize"),fontWeight:is("D2.fontWeight"),lineHeight:is("D2.lineHeight"),letterSpacing:is("D2.letterSpacing")},D3:{fontFamily:is("D3.fontFamily"),fontSize:is("D3.fontSize"),fontWeight:is("D3.fontWeight"),lineHeight:is("D3.lineHeight"),letterSpacing:is("D3.letterSpacing")},D4:{fontFamily:is("D4.fontFamily"),fontSize:is("D4.fontSize"),fontWeight:is("D4.fontWeight"),lineHeight:is("D4.lineHeight"),letterSpacing:is("D4.letterSpacing")},DBody:{fontFamily:is("DBody.fontFamily"),fontSize:is("DBody.fontSize"),fontWeight:is("DBody.fontWeight"),lineHeight:is("DBody.lineHeight"),letterSpacing:is("DBody.letterSpacing")},H1:{fontFamily:is("H1.fontFamily"),fontSize:is("H1.fontSize"),fontWeight:is("H1.fontWeight"),lineHeight:is("H1.lineHeight"),letterSpacing:is("H1.letterSpacing")},H2:{fontFamily:is("H2.fontFamily"),fontSize:is("H2.fontSize"),fontWeight:is("H2.fontWeight"),lineHeight:is("H2.lineHeight"),letterSpacing:is("H2.letterSpacing")},H3:{fontFamily:is("H3.fontFamily"),fontSize:is("H3.fontSize"),fontWeight:is("H3.fontWeight"),lineHeight:is("H3.lineHeight"),letterSpacing:is("H3.letterSpacing")},H4:{fontFamily:is("H4.fontFamily"),fontSize:is("H4.fontSize"),fontWeight:is("H4.fontWeight"),lineHeight:is("H4.lineHeight"),letterSpacing:is("H4.letterSpacing")},H5:{fontFamily:is("H5.fontFamily"),fontSize:is("H5.fontSize"),fontWeight:is("H5.fontWeight"),lineHeight:is("H5.lineHeight"),letterSpacing:is("H5.letterSpacing")},H6:{fontFamily:is("H6.fontFamily"),fontSize:is("H6.fontSize"),fontWeight:is("H6.fontWeight"),lineHeight:is("H6.lineHeight"),letterSpacing:is("H6.letterSpacing")},Body:{fontFamily:is("Body.fontFamily"),fontSize:is("Body.fontSize"),fontWeight:is("Body.fontWeight"),lineHeight:is("Body.lineHeight"),letterSpacing:is("Body.letterSpacing")},BodySmall:{fontFamily:is("BodySmall.fontFamily"),fontSize:is("BodySmall.fontSize"),fontWeight:is("BodySmall.fontWeight"),lineHeight:is("BodySmall.lineHeight"),letterSpacing:is("BodySmall.letterSpacing")},XSmall:{fontFamily:is("XSmall.fontFamily"),fontSize:is("XSmall.fontSize"),fontWeight:is("XSmall.fontWeight"),lineHeight:is("XSmall.lineHeight"),letterSpacing:is("XSmall.letterSpacing")}},as=e=>{switch(e){case 700:case"bold":return rs.Bold;case 600:case"semibold":return rs.Semibold;case 300:case"light":return rs.Light;case 400:case"regular":return rs.Regular;default:return""}},ss=(e,t)=>r=>{const n=os[e].fontFamily(r),i=os[e].fontWeight(r);return Object.values(rs).includes(n)?x`
                font-family: ${as(t)||as(i)||n};
                font-weight: normal !important;
            `:x`
            font-family: ${n};
            font-weight: ${(ls(t)||i)??"normal"};
        `},ls=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},cs=(e,t,r=!1)=>n=>{const i=os[e],o=i.fontSize(n);return x`
            ${ss(e,t)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(n)||0}rem !important;
            ${x`
                margin-bottom: ${o*(r?1.05:0)}rem;
            `}
        `},us=(e=!1,t=!1)=>t?x`
            display: block;
        `:e?x`
            display: inline;
        `:x`
            display: block;
        `;var ds;!function(e){e.D1=w.h1`
        ${e=>x`
                ${cs("D1",e.weight,e.paragraph)}
                color: ${Za.Neutral[1]};
                ${us(e.inline,e.paragraph)}
            `}
    `,e.D2=w.h1`
        ${e=>x`
                ${cs("D2",e.weight,e.paragraph)}
                color: ${Za.Neutral[1]};
                ${us(e.inline,e.paragraph)}
            `}
    `,e.D3=w.h1`
        ${e=>x`
                ${cs("D3",e.weight,e.paragraph)}
                color: ${Za.Neutral[1]};
                ${us(e.inline,e.paragraph)}
            `}
    `,e.D4=w.h1`
        ${e=>x`
                ${cs("D4",e.weight,e.paragraph)}
                color: ${Za.Neutral[1]};
                ${us(e.inline,e.paragraph)}
            `}
    `,e.DBody=w.h1`
        ${e=>x`
                ${cs("DBody",e.weight,e.paragraph)}
                color: ${Za.Neutral[1]};
                ${us(e.inline,e.paragraph)}
            `}
    `,e.H1=w.h1`
        ${e=>x`
                ${cs("H1",e.weight,e.paragraph)}
                color: ${Za.Neutral[1]};
                ${us(e.inline,e.paragraph)}
            `}
    `,e.H2=w.h2`
        ${e=>x`
                ${cs("H2",e.weight,e.paragraph)}
                color: ${Za.Neutral[1]};
                ${us(e.inline,e.paragraph)}
            `}
    `,e.H3=w.h3`
        ${e=>x`
                ${cs("H3",e.weight,e.paragraph)}
                color: ${Za.Neutral[1]};
                ${us(e.inline,e.paragraph)}
            `}
    `,e.H4=w.h4`
        ${e=>x`
                ${cs("H4",e.weight,e.paragraph)}
                color: ${Za.Neutral[1]};
                ${us(e.inline,e.paragraph)}
            `}
    `,e.H5=w.h5`
        ${e=>x`
                ${cs("H5",e.weight,e.paragraph)}
                color: ${Za.Neutral[1]};
                ${us(e.inline,e.paragraph)}
            `}
    `,e.H6=w.h6`
        ${e=>x`
                ${cs("H6",e.weight,e.paragraph)}
                color: ${Za.Neutral[1]};
                ${us(e.inline,e.paragraph)}
            `}
    `,e.Body=w.p`
        ${e=>x`
                ${cs("Body",e.weight,e.paragraph)}
                color: ${Za.Neutral[1]};
                ${us(e.inline,e.paragraph)}
            `}
    `,e.BodySmall=w.p`
        ${e=>x`
                ${cs("BodySmall",e.weight,e.paragraph)}
                color: ${Za.Neutral[1]};
                ${us(e.inline,e.paragraph)}
            `}
    `,e.XSmall=w.span`
        ${e=>x`
                ${cs("XSmall",e.weight,e.paragraph)}
                color: ${Za.Neutral[1]};
                ${us(e.inline,e.paragraph)}
            `}
    `,e.Hyperlink={Default:e=>ps({...e,textStyle:"Body"}),Small:e=>ps({...e,textStyle:"BodySmall"})}}(ds||(ds={}));const hs=w.a`
    ${e=>x`
            ${cs(e.textStyle,e.weight)}
            color: ${Za.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Za.Secondary};

                svg {
                    color: ${Za.Secondary};
                }
            }
        `}
`,fs=w(F)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,ps=({external:r=!1,children:n,...i})=>e(hs,{...i,children:[n,r&&t(fs,{})]});var ms;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(ms||(ms={}));const gs=w.button`
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
                    background-color: ${Za.Neutral[8](e)};
                    border: 1px solid ${Za.Primary(e)};

                    span {
                        color: ${Za.Primary(e)};
                    }
                `;case"light":return x`
                    background-color: ${Za.Neutral[8](e)};
                    border: 1px solid ${Za.Neutral[5](e)};

                    span {
                        color: ${Za.Primary(e)};
                    }
                `;case"disabled":return x`
                    background-color: ${Za.Neutral[6](e)};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${Za.Neutral[3](e)};
                    }
                `;case"link":return x`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Za.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${Za.Secondary};
                        }
                    }
                `;default:return x`
                    background-color: ${Za.Primary(e)};
                    border: 1px solid transparent;

                    ${H.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${Za.Neutral[8](e)};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?x`
                    height: 2.5rem;
                    span {
                        ${cs("H5","semibold")}
                    }

                    ${H.mobileS} {
                        height: auto;
                    }
                `:x`
                    height: 3rem;
                    span {
                        ${cs("H4","semibold")}
                    }

                    ${H.mobileS} {
                        height: auto;
                    }
                `}
`,ys=w((({color:r,className:n,size:i=18})=>e(Ga,{className:n,$size:i,$color:r,children:[t(Ja,{id:"inner1",$size:i-2,$borderWidth:2}),t(Ka,{id:"inner2",$size:i-2,$borderWidth:2}),t(es,{id:"inner3",$size:i-2,$borderWidth:2}),t(ts,{id:"inner4",$size:i-2,$borderWidth:2})]})))`
    margin-right: 0.5rem;
    ${e=>{let t;switch(e.$buttonStyle){case"secondary":case"light":case"link":t=Za.Primary(e);break;case"disabled":t=Za.Neutral[3](e);break;default:t=Za.Neutral[8](e)}return x`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,vs={Default:i.forwardRef(((r,n)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default",...l}=r,c={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"default"};return e(gs,{ref:n,"data-testid":l["data-testid"]||"button",disabled:o,...c,...l,children:[a&&t(ys,{...c}),t("span",{children:i})]})})),Small:i.forwardRef(((r,n)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default",...l}=r,c={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"small"};return e(gs,{ref:n,"data-testid":l["data-testid"]||"button",disabled:o,...c,...l,children:[a&&t(ys,{...c,size:16}),t("span",{children:i})]})}))},bs=w.button`
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
                background-color: ${Za.Neutral[7]};
            `}
    }
`,$s=i.forwardRef((({children:e,focusHighlight:r=!0,focusOutline:n="none",type:i="button",...o},a)=>t(bs,{ref:a,$outline:n,$highlight:r,type:i,...o,children:e}))),ws=x`
    color: ${Za.Neutral[3]};
    height: 1rem;
    width: 1rem;
`,Ss=w(_)`
    ${ws}
`,xs=w(O)`
    ${ws}
`,Ds=w(D)`
    ${ws}
    transition: transform 250ms ease-in-out;
    margin-left: 0.5rem;
`,_s=w.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
`,Os=w.div`
    display: flex;
    flex: 1;
    position: relative;
`,Fs=w.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${Za.Neutral[8]};

    ${e=>{if(!e.$visible)return x`
                display: none;
            `}}
`,ks=w.div`
    display: flex;
    justify-content: space-between;
    margin: 0 0 0.5rem 0;
`,Ms=w.div`
    display: flex;
`,Bs=w.button`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;

    ${e=>!1===e.$visible?x`
                display: none;
            `:e.$expanded?x`
                ${Ds} {
                    transform: rotate(180deg);
                }
            `:void 0}
`,Ps=w.p`
    ${cs("H5","regular")}
`,Es=w.div`
    display: flex;
`,As=w($s)`
    margin: auto 0;
    padding: 0.75rem;

    :disabled {
        cursor: not-allowed;
    }
`,Cs=w.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;
`,js=w(vs.Small)`
    flex: 1;
`,Hs=w.div`
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
`,Ts=w.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: default;
    border-radius: 5rem;
    margin: 0 0.5rem;

    ${e=>e.$interactive?x`
                cursor: pointer;
                &:hover {
                    box-shadow: 0px 0px 4px 1px ${Za.Shadow.Accent};
                    border: 1px solid ${Za.Accent.Light[1]};
                }
            `:e.$disabledDisplay?x`
                cursor: not-allowed;
            `:void 0}

    ${e=>{switch(e.$variant){case"current-month":return x`
                    background-color: ${Za.Accent.Light[6](e)};
                `;case"selected-month":return x`
                    background-color: ${Za.Accent.Light[5](e)};
                    border: 1px solid ${Za.Primary(e)};
                `}}}
`,Rs=w(ds.H5)`
    ${e=>{if(e.$disabledDisplay)return x`
                color: ${Za.Neutral[4]};
            `;switch(e.$variant){case"current-month":return x`
                    color: ${Za.Neutral[3](e)};
                `;case"selected-month":return x`
                    ${cs("H5","semibold")}
                    color: ${Za.Primary(e)};
                `}}}
`,Is=({calendarDate:e,currentFocus:r,selectedStartDate:n,selectedEndDate:i,viewCalendarDate:o,type:a,isNewSelection:s,minDate:l,maxDate:c,allowDisabledSelection:u,onMonthSelect:d})=>{const h=g((()=>Pi.generateMonths(E(e))),[e]),f=e=>{const t="start"===r&&i&&e.isAfter(i,"month")&&s,o="end"===r&&n&&e.isBefore(n,"month")&&s;return t||o},p=e=>{const t=e.format("MMMM"),r=(n=e,!Pi.isWithinRange(n,l?E(l):void 0,c?E(c):void 0,"month"));var n;const i=o.isSame(e,"month")?"selected-month":E().isSame(e,"month")?"current-month":"default";return{disabledDisplay:r||f(e),interactive:!r||u,month:t,variant:i}};return h.length?t(Hs,{$type:a,children:h.map((e=>{const{disabledDisplay:r,interactive:n,variant:i,month:o}=p(e);return t(Ts,{$variant:i,$disabledDisplay:r,$interactive:n,onClick:()=>((e,t)=>{t||d(e)})(e,!n),children:t(Rs,{weight:"regular",$variant:i,$disabledDisplay:r,children:o})},o)}))}):null},zs=w.div`
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
`,Ls=w.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: default;
    border-radius: 0.5rem;
    margin: 0 0.5rem;

    ${e=>e.$interactive?x`
                cursor: pointer;
                &:hover {
                    box-shadow: 0px 0px 4px 1px ${Za.Shadow.Accent};
                    border: 1px solid ${Za.Accent.Light[1]};
                }
            `:e.$disabledDisplay?x`
                cursor: not-allowed;
            `:void 0}

    ${e=>{switch(e.$variant){case"current-year":return x`
                    background: ${Za.Accent.Light[6](e)};
                `;case"selected-year":return x`
                    background: ${Za.Accent.Light[5](e)};
                    border: 1px solid ${Za.Primary(e)};
                `}}};
`,Ys=w(ds.H5)`
    ${e=>{if(e.$disabledDisplay)return x`
                color: ${Za.Neutral[4]};
            `;switch(e.$variant){case"current-year":return x`
                    color: ${Za.Neutral[3](e)};
                `;case"selected-year":return x`
                    ${cs("H5","semibold")}
                    color: ${Za.Primary(e)};
                `;case"other-decade":return x`
                    color: ${Za.Neutral[4](e)};
                `}}}
`,Ws=({calendarDate:e,currentFocus:r,selectedStartDate:n,selectedEndDate:i,viewCalendarDate:o,type:a,isNewSelection:s,minDate:l,maxDate:c,allowDisabledSelection:u,onYearSelect:d})=>{const h=g((()=>Pi.generateDecadeOfYears(E(e))),[e]),f=e=>{const t="start"===r&&i&&e.isAfter(i,"year")&&s,o="end"===r&&n&&e.isBefore(n,"year")&&s;return t||o},p=e=>{const t=[0,11].includes(h.indexOf(e)),r=e.year(),n=(i=e,!Pi.isWithinRange(i,l?E(l):void 0,c?E(c):void 0,"year"));var i;const a=t?"other-decade":o.isSame(e,"year")?"selected-year":E().isSame(e,"year")?"current-year":"default";return{disabledDisplay:n||f(e),interactive:!n||u,year:r,variant:a}};return h.length?t(zs,{$type:a,children:h.map((e=>{const{disabledDisplay:r,interactive:n,variant:i,year:o}=p(e);return t(Ls,{$variant:i,$disabledDisplay:r,$interactive:n,onClick:()=>((e,t)=>{t||d(e)})(e,!n),children:t(Ys,{weight:"regular",$variant:i,$disabledDisplay:r,$interactive:n,children:o})},o)}))}):null},Ns=i.forwardRef((({children:n,initialCalendarDate:i,type:o,minDate:l,maxDate:c,currentFocus:u,selectedStartDate:h,selectedEndDate:f,selectWithinRange:p,dynamicHeight:m=!1,allowDisabledSelection:g,onCalendarDateChange:v,withButton:b,doneButtonDisabled:$,onDismiss:w,showNavigationHeader:S=!0,getLeftArrowDate:x,getRightArrowDate:D,isLeftArrowDisabled:_,isRightArrowDisabled:O,getMonthHeaderLabel:F,getYearHeaderLabel:k,...M},B)=>{const[P,A]=s(E(i)),[C,j]=s(E(i)),[H,T]=s("default"),R=a(null),I=a(null),z=a();y(B,(()=>({defaultView(){T("default")},resetView(){const e=E(i);A(e),j(e),T("default")},setCalendarDate(e){const t=e?E(e):E();A(t),j(t)}}))),d((()=>{const e=i?E(i):E();A(e),j(e)}),[i]),d((()=>{Q(C)}),[C]);const L=()=>{"month-options"!==H?(T("month-options"),z.current.focus()):(T("default"),A(C))},Y=()=>{"default"!==H?(T("default"),A(C)):T("year-options")},W=()=>{z.current.focus();const e=x?x(P):P.subtract(1,"month");switch(H){case"default":j(e),A(e);break;case"month-options":A((e=>e.subtract(1,"year")));break;case"year-options":A((e=>e.subtract(10,"year")))}},N=()=>{z.current.focus();const e=D?D(P):P.add(1,"month");switch(H){case"default":j(e),A(e);break;case"month-options":A((e=>e.add(1,"year")));break;case"year-options":A((e=>e.add(10,"year")))}},V=e=>{A(e),j(e)},q=()=>{A(E(i)),j(E(i)),"default"===H?U("reset"):T("default")},Q=e=>{v&&v(e)},U=e=>{w&&w(e)},Z=()=>{if(!l||g)return!1;const e=E(l);return"month-options"===H?!Pi.isPreviousYearWithinRange(P,e):"year-options"===H?!Pi.isPreviousDecadeWithinRange(P,e):_?_(P):!Pi.isPreviousMonthWithinRange(P,e)},G=()=>{if(!c||g)return!1;const e=E(c);return"month-options"===H?!Pi.isNextYearWithinRange(P,e):"year-options"===H?!Pi.isNextDecadeWithinRange(P,e):O?O(P):!Pi.isNextMonthWithinRange(P,e)},X=()=>{if("year-options"===H){const{beginDecade:e,endDecade:t}=Pi.getStartEndDecade(P);return`${e} to ${t}`}return k?k(P):E(P).format("YYYY")},J=()=>{const n=F?F(P):E(P).format("MMM");return e(r,{children:[e(Bs,{type:"button",tabIndex:-1,$expanded:"month-options"===H,$visible:"default"===H,id:"month-dropdown",onClick:L,children:[t(Ps,{children:n}),t(Ds,{})]}),e(Bs,{type:"button",tabIndex:-1,$expanded:"default"!==H,id:"year-dropdown",onClick:Y,children:[t(Ps,{children:X()}),t(Ds,{})]})]})},K=()=>{switch(H){case"month-options":return t(Is,{type:o,calendarDate:P,currentFocus:u,minDate:l,maxDate:c,selectedStartDate:h,selectedEndDate:f,viewCalendarDate:C,isNewSelection:p,onMonthSelect:V,allowDisabledSelection:g});case"year-options":return t(Ws,{type:o,calendarDate:P,currentFocus:u,minDate:l,maxDate:c,selectedStartDate:h,selectedEndDate:f,viewCalendarDate:C,isNewSelection:p,onYearSelect:V,allowDisabledSelection:g});default:return null}};return e(_s,{ref:z,tabIndex:-1,"data-id":"calendar-container","data-testid":"calendar-container",...M,children:[S&&e(ks,{"data-id":"calendar-header","data-testid":"calendar-header",children:[t(Ms,{children:J()}),e(Es,{children:[t(As,{"data-testid":"left-arrow-btn",disabled:Z(),focusHighlight:!1,tabIndex:-1,onClick:W,children:t(Ss,{})}),t(As,{"data-testid":"right-arrow-btn",disabled:G(),focusHighlight:!1,tabIndex:-1,onClick:N,children:t(xs,{})})]})]}),t(Os,{children:(()=>{const i="function"==typeof n?n({calendarDate:C,currentView:H}):n;return e(r,m?{children:["default"===H&&i,K()]}:{children:[i,t(Fs,{$visible:"default"!==H,children:K()})]})})()}),(()=>{if(!b)return;const r=!!("default"===H)&&$;return e(Cs,{children:[t(js,{ref:I,"data-testid":"cancel-button",styleType:"light",type:"button",onClick:q,children:"Cancel"}),t(js,{"data-testid":"done-button",ref:R,type:"button",onClick:()=>(e=>{e||(A(C),"default"===H?U("confirmed"):T("default"))})(r),disabled:r,children:"Done"})]})})()]})})),Vs=w.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 0.25rem;
`,qs=w.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    pointer-events: none;
    user-select: none;
`,Qs=w.div`
    grid-column: 1 / -1;
    display: flex;
`,Us=w.div`
    display: flex;
    position: relative;
    height: 2.5rem;
    align-items: center;
    justify-content: center;
    flex: 1;
`,Zs=w.div`
    position: absolute;
    width: 50%;
    height: 100%;

    ${e=>{switch(e.$position){case"left":return x`
                    left: 0;
                `;case"right":return x`
                    right: 0;
                `}}}
`,Gs=w.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    cursor: default;
    position: absolute;
`,Xs=w(ds.H5)`
    ${e=>{const{$disabledDisplay:t,$selected:r,$variant:n}=e;if(t&&r)return x`
                ${cs("H5","semibold")};
                color: ${Za.Accent.Light[2]};
            `;if(t)return x`
                color: ${Za.Neutral[4]};
            `;if(r)return x`
                ${cs("H5","semibold")};
                color: ${Za.Primary};
            `;switch(n){case"other-month":return x`
                    color: ${Za.Neutral[4]};
                `;case"today":return x`
                    color: ${Za.Neutral[3]};
                `;case"default":return x`
                    color: ${Za.Neutral[1]};
                `}}}
`,Js=w(Zs)`
    ${e=>{const{$selected:t}=e;if(t)return x`
                border-top: 1px solid ${Za.Accent.Light[4]};
                border-bottom: 1px solid ${Za.Accent.Light[4]};
                background-color: ${Za.Accent.Light[5]};
            `}}

    ${e=>{const{$hovered:t,$overlap:r}=e;return t?x`
                border-top: 1px dashed ${Za.Accent.Light[4]};
                border-bottom: 1px dashed ${Za.Accent.Light[4]};
                background-color: ${Za.Accent.Light[6]};
            `:r?x`
                background-color: ${Za.Accent.Light[4]};
            `:void 0}}
`,Ks=w(Gs)`
    ${e=>{const{$hovered:t,$selected:r}=e;return r?x`
                background: ${Za.Accent.Light[5]};
                border: 1px solid ${Za.Primary};
            `:t?x`
                box-shadow: 0px 0px 4px 1px ${Za.Shadow.Accent};
                border: 1px solid ${Za.Accent.Light[1]};
                background-color: ${Za.Neutral[8]};
            `:void 0}}

    ${e=>{const{$interactive:t,$disabledDisplay:r}=e;return t?x`
                cursor: pointer;
                :hover {
                    box-shadow: 0px 0px 4px 1px ${Za.Shadow.Accent};
                    border: 1px solid ${Za.Accent.Light[1]};
                    background-color: ${Za.Neutral[8]};
                }
            `:r?x`
                cursor: not-allowed;
            `:void 0}}

    ${e=>{const{$disabledDisplay:t,$overlap:r,$variant:n}=e;return r?x`
                border: 1px solid ${Za.Accent.Light[1]};
                background: ${Za.Accent.Light[4]};

                :hover {
                    background: ${Za.Accent.Light[4]};
                }
            `:t?x`
                color: ${Za.Neutral[4]};
            `:"today"===n?x`
                    background: ${Za.Accent.Light[5]};
                `:void 0}}
`,el=w(Zs)`
    ${e=>{const{$hovered:t,$selected:r}=e;return t?x`
                border-top: 1px dashed ${Za.Accent.Light[4]};
                border-bottom: 1px dashed ${Za.Accent.Light[4]};
                background-color: ${Za.Accent.Light[6]};
            `:r?x`
                border-top: 1px solid ${Za.Primary};
                border-bottom: 1px solid ${Za.Primary};
                background-color: ${Za.Accent.Light[5]};
            `:void 0}}

    ${e=>{if(e.$overlap)return x`
                border-top: 1px solid ${Za.Primary};
                border-bottom: 1px solid ${Za.Primary};
                background-color: ${Za.Neutral[8]};
                box-shadow: 4px 0px 4px 0px ${Za.Shadow.Accent};
            `}}
`,tl=w.div`
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
                border: 1px dashed ${Za.Accent.Light[4]};

                ::before {
                    background-color: ${Za.Accent.Light[6]};
                }
            `}}

    ${e=>{if(e.$selected)return x`
                border: 1px solid ${Za.Primary};

                ::before {
                    background-color: ${Za.Accent.Light[5]};
                }
            `}}

    ${e=>{if(e.$overlap)return x`
                ::before {
                    background-color: ${Za.Neutral[8]};
                }
            `}}

    ${e=>e.$overlap&&"left"===e.$position?x`
                box-shadow: -1px 0px 4px 0px ${Za.Shadow.Accent};
            `:e.$overlap&&"right"===e.$position?x`
                box-shadow: 1px 0px 4px 0px ${Za.Shadow.Accent};
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
`,rl=w(Gs)`
    ${e=>{const{$hovered:t,$selected:r,$position:n}=e;if(r){if("left"===n)return x`
                    background: ${Za.Accent.Light[5]};
                `;if("right"===n)return x`
                    background: ${Za.Accent.Light[5]};
                `}if(t)return x`
                background-color: ${Za.Accent.Light[6]};
            `}}

    ${e=>{const{$overlap:t,$position:r}=e;if(t){if("left"===r)return x`
                    background-color: ${Za.Neutral[8]};
                `;if("right"===r)return x`
                    background-color: ${Za.Neutral[8]};
                `}}}

    ${e=>{const{$interactive:t,$disabledDisplay:r}=e;return t?x`
                cursor: pointer;
            `:r?x`
                cursor: not-allowed;
            `:void 0}}
    
    ${e=>{const{$disabledDisplay:t,$overlap:r,$selected:n,$variant:i}=e;return t?x`
                color: ${Za.Neutral[4]};
            `:"today"===i?r?x`
                    background: ${Za.Neutral[8]};
                    height: 2.35rem;
                `:n?x`
                    height: 2.35rem;
                `:x`
                    background: ${Za.Accent.Light[5]};
                `:void 0}}
`,nl=w(Xs)`
    ${e=>{if("default"===e.$view)return x`
                z-index: 1;
            `}}
`,il=({type:n,dayDate:i,currentView:o,variant:a,styleLeftProps:s,styleRightProps:l,styleCircleProps:c,styleLabelProps:u,styleOverflowCirleProps:d,onDayClick:h,onHoverCell:f})=>t(r,{children:(()=>{const r=i.format("YYYY-MM-DD");switch(n){case"regular":return e(Us,{children:[t(Js,{$position:"left",...s}),t(Js,{$position:"right",...l}),t(Ks,{$variant:a,onClick:()=>h(i,!c.$interactive),onMouseEnter:()=>f(r,!c.$interactive),...c,children:t(Xs,{weight:u.$selected?"semibold":"regular",$variant:a,...u,children:i.format("D")})})]});case"week":return e(Us,{children:[t(el,{$position:"left",...s}),t(el,{$position:"right",...l}),t(rl,{$variant:a,onClick:()=>h(i,!c.$interactive),onMouseEnter:()=>f(r,!c.$interactive),...c,...d,children:t(nl,{weight:u.$selected?"semibold":"regular",$variant:a,$view:o,...u,children:i.format("D")})}),t(tl,{...c,...d})]})}})()}),ol=[1,3,5,7,8,10,12],al=[4,6,9,11];var sl,ll,cl;!function(e){e.clampDay=(t,r,n)=>{const i=parseInt(t),o=parseInt(r),a=parseInt(n);return 0==i?"1":ol.includes(o)?Math.min(i,31).toString():al.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,r="HH:mm")=>{const n=E(e,r);return E(t,r).diff(n,"minute")}}(sl||(sl={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(ll||(ll={})),function(e){e.transformWithSpaces=(e,t)=>{const r="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const r=Math.floor(t/9);return e.length>=2*r||1===e.split(" ").length&&e.length>r},e.truncateOneLine=(e,t,r,n,i=8)=>{let o=0;t>r&&(o=Math.floor((t-r)/i));const a=n+o;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.getTextWidth=(t,r)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=r;return n.measureText(t).width}}(cl||(cl={}));const ul=e=>{const[t,r]=s(e),n=a(e);return[t,p((e=>{n.current=e,r(e)}),[]),n]};var dl;E.extend(Fi),function(e){e.generateStyleProps=(e,t,r,n,i,o,a,s,l,c,u)=>{const d=e.format("YYYY-MM-DD"),h={},f={},p={},m={},g=hl(e,l,a,s),y=t&&r&&t===r;return!u&&["reset-start","reset-end"].includes(i)&&[t,r].includes(d)&&(p.$overlap=!0),(g||fl(e,o,t,r,u))&&(p.$disabledDisplay=!0,m.$disabledDisplay=!0),p.$interactive=!g||c,[t,r].includes(d)&&(p.$selected=!0,m.$selected=!0),t&&r&&!y&&e.isBetween(t,r,"day","[]")&&(m.$selected=!0,e.isSame(t)?f.$selected=!0:e.isSame(r)?h.$selected=!0:(h.$selected=!0,f.$selected=!0)),"hover-start"===i&&e.isBetween(r,n,"day","[]")&&(m.$selected=!0,r===d?h.$hovered=!0:n===d?(f.$hovered=!0,p.$hovered=!0):(h.$hovered=!0,f.$hovered=!0)),"hover-end"===i&&e.isBetween(t,n,"day","[]")&&(m.$selected=!0,t===d?f.$hovered=!0:n===d?(h.$hovered=!0,p.$hovered=!0):(h.$hovered=!0,f.$hovered=!0)),"overlap-start"===i&&e.isBetween(r,n,"day","[]")&&(n===d?(f.$overlap=!0,p.$overlap=!0):r===d?(h.$overlap=!0,p.$overlap=!0,p.$hovered=!0):(h.$overlap=!0,f.$overlap=!0)),"overlap-end"===i&&e.isBetween(t,n,"day","[]")&&(n===d?(h.$overlap=!0,p.$overlap=!0):t===d?(f.$overlap=!0,p.$overlap=!0,p.$hovered=!0):(h.$overlap=!0,f.$overlap=!0)),"full-overlap-start"===i&&e.isBetween(r,n,"day","[]")&&(t===d&&y?(h.$hovered=!0,p.$overlap=!0):t===d?(h.$hovered=!0,f.$overlap=!0,p.$overlap=!0):r===d?(h.$overlap=!0,p.$overlap=!0):e.isSame(n)?(f.$hovered=!0,m.$selected=!0,p.$hovered=!0):e.isBetween(t,n,"day","()")&&(h.$hovered=!0,f.$hovered=!0,m.$selected=!0)),"full-overlap-end"===i&&e.isBetween(t,n,"day","[]")&&(r===d&&y?(f.$hovered=!0,p.$overlap=!0):r===d?(h.$overlap=!0,f.$hovered=!0,p.$overlap=!0):t===d?(f.$overlap=!0,p.$overlap=!0):e.isSame(n)?(h.$hovered=!0,m.$selected=!0,p.$hovered=!0):e.isBetween(r,n,"day","()")&&(h.$hovered=!0,f.$hovered=!0,m.$selected=!0)),["full-overlap-end","full-overlap-start"].includes(i)&&e.isBetween(t,r,"day","()")&&(h.$overlap=!0,f.$overlap=!0),{styleLeftProps:h,styleRightProps:f,styleCircleProps:p,styleLabelProps:m}},e.getStylePropsForWeekSelection=(e,t,r,n,i,o,a,s)=>{const l={},c={},u={},d={},h={},f=hl(e,a,i,o);if(f&&(u.$disabledDisplay=!0,d.$disabledDisplay=!0),u.$interactive=!f||s,t){const{firstDayOfWeek:r,lastDayOfWeek:n}=pl(t);e.isBetween(r,n,"day","[]")&&(d.$selected=!0,e.isSame(r)?(c.$selected=!0,u.$selected=!0,h.$position="left"):e.isSame(n)?(l.$selected=!0,u.$selected=!0,h.$position="right"):(l.$selected=!0,u.$selected=!0,c.$selected=!0))}if(n){const{firstDayOfWeek:t,lastDayOfWeek:r}=pl(n);e.isBetween(t,r,"day","[]")&&(d.$selected=!0,e.isSame(t)?(c.$hovered=!0,u.$hovered=!0,h.$position="left"):e.isSame(r)?(l.$hovered=!0,u.$hovered=!0,h.$position="right"):(l.$hovered=!0,c.$hovered=!0))}if(t&&r&&n&&e.isBetween(t,r,"day","[]")&&E(n).isBetween(t,r,"day","[]")){const{firstDayOfWeek:r,lastDayOfWeek:n}=pl(t);e.isBetween(r,n,"day","[]")&&(d.$selected=!0,e.isSame(r)?(c.$overlap=!0,u.$overlap=!0,h.$position="left"):e.isSame(n)?(l.$overlap=!0,u.$overlap=!0,h.$position="right"):(l.$overlap=!0,u.$overlap=!0,c.$overlap=!0))}return{styleLeftProps:l,styleRightProps:c,styleCircleProps:u,styleLabelProps:d,styleOverflowCirleProps:h}}}(dl||(dl={}));const hl=(e,t,r,n)=>{const i=Pi.isWithinRange(e,r?E(r):void 0,n?E(n):void 0),o=t&&t.includes(e.format("YYYY-MM-DD"));return!i||o},fl=(e,t,r,n,i)=>{const o="start"===t&&n&&e.isAfter(n)&&i,a="end"===t&&r&&e.isBefore(r)&&i;return o||a},pl=e=>({firstDayOfWeek:E(e).startOf("week").format("YYYY-MM-DD"),lastDayOfWeek:E(e).endOf("week").format("YYYY-MM-DD")});E.extend(Fi);const ml=({calendarDate:r,currentFocus:n,disabledDates:i,selectedStartDate:o,selectedEndDate:a,onSelect:l,onHover:c,isNewSelection:u,minDate:d,maxDate:h,variant:f,allowDisabledSelection:p})=>{const m=g((()=>Pi.generateDays(r)),[r]),[y,v]=s(""),b=(e,t)=>{t&&!p||l(e)},$=(e,t)=>{t&&!p||(v(e),c(e))},w=()=>{v(""),c("")},S=(()=>{if(!y||"single"===f)return null;const e=E(y);if(o&&a)if(e.isBefore(o)){if("start"===n)return"full-overlap-start";if("end"===n)return"reset-end"}else if(e.isAfter(a)){if("end"===n)return"full-overlap-end";if("start"===n)return"reset-start"}else if(e.isBetween(o,a,"day","[]")&&![o,a].includes(y)){if("start"===n)return"overlap-start";if("end"===n)return"overlap-end"}if(o&&!a){if(e.isAfter(o)&&"end"===n)return"hover-end"}else if(!o&&a&&e.isBefore(a)&&"start"===n)return"hover-start";return null})();return e(Vs,{"data-testid":"calendar-content",children:[m[0].map(((e,r)=>t(qs,{children:t(ds.H6,{weight:"semibold",children:E(e).format("ddd")})},`week-day-${r}`))),m.map(((e,s)=>t(Qs,{onMouseLeave:w,children:e.map(((e,s)=>{const{variant:l}=(e=>({variant:r.month()!==e.month()?"other-month":E().isSame(e,"day")?"today":"default"}))(e),{styleLeftProps:c,styleRightProps:f,styleCircleProps:m,styleLabelProps:g}=dl.generateStyleProps(e,o,a,y,S,n,d,h,i,p,u);return t(il,{type:"regular",dayDate:e,variant:l,styleLeftProps:c,styleRightProps:f,styleCircleProps:m,styleLabelProps:g,onDayClick:b,onHoverCell:$},`day-${s}`)}))},s)))]})},gl=({calendarDate:r,disabledDates:n,selectedStartDate:i,selectedEndDate:o,onSelect:a,onHover:l,minDate:c,maxDate:u,currentView:d,allowDisabledSelection:h})=>{const f=g((()=>Pi.generateDays(r)),[r]),[p,m]=s(""),y=(e,t)=>{if(t&&!h)return;const r=e.startOf("week");a(r),e&&!E(e).isSame(r,"month")&&m("")},v=(e,t)=>{t&&!h||(m(e),l(e))},b=()=>{m(""),l("")};return e(Vs,{"data-testid":"calendar-content",children:[f[0].map(((e,r)=>t(qs,{children:t(ds.H6,{weight:"semibold",children:E(e).format("ddd")})},`week-day-${r}`))),f.map(((e,a)=>t(Qs,{onMouseLeave:b,children:e.map(((e,a)=>{const{variant:s}=(e=>({variant:r.month()!==e.month()?"other-month":E().isSame(e,"day")?"today":"default"}))(e),{styleLeftProps:l,styleRightProps:f,styleCircleProps:m,styleLabelProps:g,styleOverflowCirleProps:b}=dl.getStylePropsForWeekSelection(e,i,o,p,c,u,n,h);return t(il,{type:"week",dayDate:e,variant:s,currentView:d,styleLeftProps:l,styleRightProps:f,styleCircleProps:m,styleLabelProps:g,styleOverflowCirleProps:b,onDayClick:y,onHoverCell:v},`day-${a}`)}))},a)))]})},yl=w.div`
    width: 100%;
    padding: 1.5rem 2rem;
    background: ${Za.Neutral[8]};

    ${e=>{if("input"===e.$type)return x`
                border: 1px solid ${Za.Neutral[5]};
                border-radius: 8px;
                overflow: hidden;
                padding: 1.5rem 1.25rem;

                [data-id="header"] {
                    margin: 0 0 0.25rem 0;
                }
            `}}
`,vl=i.forwardRef((({disabledDates:e,onYearMonthDisplayChange:r,onSelect:n,onHover:i,onDismiss:o,value:s,endValue:l,currentFocus:c,withButton:u,variant:d,minDate:h,maxDate:f,allowDisabledSelection:p,type:m="standalone",selectWithinRange:g=!0,initialCalendarDate:v},b)=>{const $=a(),w=a(void 0);y(b,(()=>({reset(){$.current.resetView()},setCalendarDate(e){$.current.setCalendarDate(e)}})));const S=e=>{const t=e.format("YYYY-MM-DD");$.current.setCalendarDate(t),D(t)},x=e=>{_(e)},D=e=>{n&&n(e)},_=e=>{i&&i(e)},O=e=>{if(r){const t={month:e.month()+1,year:e.year()};r(t)}};return t(yl,{$type:m,children:t(Ns,{type:m,ref:$,withButton:u,doneButtonDisabled:(()=>{if(!u)return;let e=!0;switch(d){case"single":e=!1;break;case"range":e=!!s!=!!l;break;case"week":e=!s&&!l}return e})(),onDismiss:o,minDate:h,maxDate:f,selectWithinRange:g,currentFocus:c,selectedStartDate:s,selectedEndDate:l,allowDisabledSelection:p,onCalendarDateChange:e=>{w.current&&w.current.isSame(e,"month")||O(e),w.current=e},initialCalendarDate:v,children:({calendarDate:r,currentView:n})=>((r,n)=>{switch(d){case"single":case"range":default:return t(ml,{calendarDate:r,currentFocus:c,disabledDates:e,selectedStartDate:s,selectedEndDate:l,variant:d,minDate:h,maxDate:f,isNewSelection:g,allowDisabledSelection:p,onSelect:S,onHover:x});case"week":return t(gl,{calendarDate:r,disabledDates:e,selectedStartDate:s,selectedEndDate:l,minDate:h,maxDate:f,currentView:n,allowDisabledSelection:p,onSelect:S,onHover:x})}})(r,n)})})})),bl=i.forwardRef(((e,r)=>{const{isOpen:n,...i}=e,o=a(),l=function(e){void 0===e&&(e={});var t=e.skipOnMount,r=void 0!==t&&t,n=e.refreshMode,i=e.refreshRate,o=void 0===i?1e3:i,l=e.refreshOptions,c=e.handleWidth,u=void 0===c||c,d=e.handleHeight,h=void 0===d||d,f=e.targetRef,p=e.observerOptions,m=e.onResize,g=a(r),y=a(null),v=null!=f?f:y,b=a(),$=s({width:void 0,height:void 0}),w=$[0],S=$[1];return Pe((function(){if(!ke()){var e=Be(m,S,u,h);b.current=Oe((function(t){(u||h)&&t.forEach((function(t){var r=t&&t.contentRect||{},n=r.width,i=r.height;!g.current&&!ke()&&e({width:n,height:i}),g.current=!1}))}),n,o,l);var t=new window.ResizeObserver(b.current);return v.current&&t.observe(v.current,p),function(){t.disconnect();var e=b.current;e&&e.cancel&&e.cancel()}}}),[n,o,l,u,h,m,p,v.current]),I({ref:v},w)}(),c=Zn({height:n?l.height:0});return d((()=>{n&&o.current.reset()}),[n]),y(r,(()=>o.current)),t(bi,{style:c,children:t("div",{ref:l.ref,inert:n?void 0:"",children:t(vl,{ref:o,...i})})})})),$l=e=>`@media screen and (max-width: ${e}px)`,wl=w.div`
    position: relative;
    height: 100%;
    display: flex;
    flex: 1;

    ${e=>{if(e.$minWidthBeforeWrap)return x`
                ${$l(e.$minWidthBeforeWrap)} {
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
`,Sl=w.div`
    height: 100%;
    display: flex;
    flex: 1;
    align-items: center;
`,xl=w(k)`
    color: ${Za.Neutral[3]};
    width: 1.125rem;
    height: 1.125rem;
    flex-shrink: 0;
    margin: 0 0.5rem;
    align-self: center;
`,Dl=w.div`
    position: absolute;
    background: ${e=>e.$error?Za.Validation.Red.Border(e):Za.Primary(e)};
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
                ${$l(e.$minWidthBeforeWrap)} {
                    display: none;
                }
            `}}
`,_l=({children:r,currentActive:n,error:i,className:o,minWidthBeforeWrap:a})=>{const[s,l]=r;return e(wl,{className:o,$minWidthBeforeWrap:a,children:[t(Sl,{"data-id":"range-container-elem1-container",children:s}),t(xl,{}),t(Sl,{"data-id":"range-container-elem2-container",children:l}),t(Dl,{"data-id":"range-container-indicator",$position:n,$error:i,$minWidthBeforeWrap:a})]})},Ol={collections:{base:{InputBoxShadow:x`
        inset 0 0 6px 1px ${Za.Shadow.Accent}
    `,InputErrorBoxShadow:x`
        inset 0 0 6px 1px ${Za.Shadow.Red}
    `,ElevationBoxShadow:x`
      0px 2px 8px ${Za.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}}},rbs:{InputBoxShadow:x`
        inset 0 0 6px 1px ${Za.Shadow.Accent}
    `,InputErrorBoxShadow:x`
        inset 0 0 6px 1px ${Za.Shadow.Red}
    `,ElevationBoxShadow:x`
      0px 2px 8px ${Za.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}}}},defaultValue:"base"},Fl=e=>t=>{const r=t.theme,n=Va(Ol,r[qa.designTokenScheme]);return r.options?.designToken?Na(n,e,r.options.designToken):Na(n,e)},kl=Fl("InputBoxShadow"),Ml=Fl("InputErrorBoxShadow"),Bl=(Fl("ElevationBoxShadow"),Fl("Table.Header"),Fl("Table.Cell.Primary"),Fl("Table.Cell.Secondary"),Fl("Table.Cell.Selected"),Fl("Table.Cell.Hover"),w.div`
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid ${Za.Neutral[5]};
    border-radius: 4px;
    background: ${Za.Neutral[8]};
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};

    :focus-within {
        border: 1px solid ${Za.Accent.Light[1]};
        box-shadow: ${kl};
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
                background: ${Za.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    border: 1px solid ${Za.Neutral[5]};
                    box-shadow: none;
                }
            `:e.$error?x`
                border: 1px solid ${Za.Validation.Red.Border};

                :focus-within {
                    border: 1px solid ${Za.Validation.Red.Border};
                    box-shadow: ${Ml};
                }
            `:void 0}
`),Pl=w.input`
    ${cs("Body","regular")}
    color: ${Za.Neutral[1]};
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
        color: ${Za.Neutral[3]};
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
`,El=w.div`
    display: flex;
    align-items: center;
    position: relative;

    flex: 1;
`,Al=w.div`
    display: flex;
    align-items: center;

    ${e=>{if(e.$hover)return x`
                ${Cl}, ${Rl} {
                    color: ${Za.Neutral[4]};
                }
            `}}
`,Cl=w(Pl)`
    background: transparent;
    text-align: center;
`,jl=w(Cl)`
    width: 2rem;
    margin-right: 0.25rem;
`,Hl=w(Cl)`
    width: 2.5rem;
`,Tl=w(Cl)`
    width: 3rem;
    margin-left: 0.25rem;
`,Rl=w(ds.Body)`
    ${e=>{if(e.$inactive)return x`
                color: ${Za.Neutral[3](e)};
            `}}
`,Il=w.div`
    ${cs("Body","regular")}
    background-color: ${Za.Neutral[8]};
    color: ${Za.Neutral[3]};
    position: absolute;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    ${e=>e.$disabled?x`
                background-color: ${Za.Neutral[6](e)};
                cursor: not-allowed;
            `:e.$hide?x`
                display: none;
            `:void 0}
`;E.extend(xi);const zl=i.forwardRef((({disabled:r,readOnly:n,names:i,value:o,focused:l,hoverValue:c,placeholder:u,label:h,onChange:f,onFocus:p,onBlur:m},g)=>{const[v,b,$]=ul(""),[w,S,x]=ul(""),[D,_,O]=ul(""),[F,k]=s("none"),[M,B]=s(!1),P=a(null),A=a(null),C=a(null),j=a(null),[H,T,R]=W(c);d((()=>{const[e="",t="",r=""]=W(o);b(e),S(t),_(r)}),[o]),d((()=>{l||k("none"),l&&(B(!0),P.current.contains(document.activeElement)||A.current.focus())}),[l]),y(g,(()=>({ref:P,resetPlaceholder(){B(!1)},resetInput(){const[e="",t="",r=""]=W(o);b(e),S(t),_(r)}})),[o]);const I=e=>{e.target.select();const t=e.target.name;k(t)},z=e=>{const[t,r,n]=i,o={[t]:$.current,[r]:x.current,[n]:O.current},a=e.target.name,s=o[a],l=a!==n?cl.padValue(s,!0):s;switch(a){case t:o[t]=l,b(l);break;case r:o[r]=l,S(l)}const c=`${o[n]}-${o[r]}-${o[t]}`,u=E(c,"YYYY-MM-DD",!0).isValid(),d=!o[t]&&!o[r]&&!o[n];u&&s!==l&&f(c),P.current.contains(e.relatedTarget)||(k("none"),m?.(d||u))},L=e=>{if(c)return;const t=e.target.name,r=e.target.value.replace(/[^0-9]/g,""),n={day:v,month:w,year:D};switch(t){case i[0]:n.day=r,b(r),2===r.length&&C.current.focus();break;case i[1]:n.month=r,S(r),2===r.length&&j.current.focus();break;case i[2]:n.year=r,_(r)}if(!n.day&&!n.month&&!n.year)return void f("");const o=`${n.year}-${n.month}-${n.day}`;E(o,"YYYY-MM-DD",!0).isValid()&&f(o)},Y=e=>{"Backspace"!==e.code&&"Backspace"!==e.key||(F===i[1]&&0===w.length&&A.current.focus(),F===i[2]&&0===D.length&&C.current.focus())};function W(e){if(e){const t=E(e,"YYYY-MM-DD");return[cl.padValue(t.date().toString()),cl.padValue((t.month()+1).toString()),t.year().toString()]}return[void 0,void 0,void 0]}return e(El,{role:"group","aria-label":h,onClick:()=>{r||n||(B(!0),P.current.contains(document.activeElement)||A.current.focus())},onFocus:()=>{r||(B(!0),l||p())},children:[e(Al,{ref:P,$hover:!!c,children:[t(jl,{ref:A,name:i[0],maxLength:2,value:H??v,onFocus:I,onBlur:z,onChange:L,type:"text",inputMode:"numeric",pattern:"[0-9]{2}","data-testid":`${i[0]}-input`,"aria-label":"day",disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:F!==i[0]||n?"DD":""}),t(Rl,{$inactive:0===v.length,children:"/"}),t(Hl,{ref:C,name:i[1],maxLength:2,value:T??w,onFocus:I,onBlur:z,onChange:L,onKeyDown:Y,type:"text",inputMode:"numeric",pattern:"[0-9]{2}","data-testid":`${i[1]}-input`,"aria-label":"month",disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:F!==i[1]||n?"MM":""}),t(Rl,{$inactive:0===w.length,children:"/"}),t(Tl,{ref:j,name:i[2],maxLength:4,value:R??D,onFocus:I,onBlur:z,onChange:L,onKeyDown:Y,type:"text",inputMode:"numeric",pattern:"[0-9]{4}","data-testid":`${i[2]}-input`,"aria-label":"year",disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:F!==i[2]||n?"YYYY":""})]}),(()=>{if(!o&&!n&&u)return t(Il,{$hide:M,$disabled:r,children:u})})()]})}));var Ll;E.extend(Fi),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:r,minDate:n,maxDate:i}=t;return!!(r&&r.length&&r.includes(e))||(!(!n||!E(e).isBefore(n,"day"))||!(!i||!E(e).isAfter(i,"day")))}}(Ll||(Ll={}));const Yl=(e,t,r)=>{const n=[];e&&n.push(`[${e}]`),n.push(t,r),console.log(...n)},Wl=w(Bl)`
    @media screen and (max-width: ${374}px) {
        padding: 0.75rem 1rem;
    }
`,Nl=w.div`
    display: flex;
    align-items: center;
    height: calc(3rem - 2px); // exclude top and bottom borders
    width: 100%;

    @media screen and (max-width: ${374}px) {
        height: fit-content;
    }
`,Vl={initialStart:"",initialEnd:"",selectedStart:"",selectedEnd:"",currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1},ql=({minDate:r,maxDate:n,disabled:i,disabledDates:o,error:l,value:c,valueEnd:u,onChange:h,onFocus:f,onBlur:p,onYearMonthDisplayChange:m,withButton:g=!0,variant:y="range",readOnly:b,id:$,allowDisabledSelection:w,...S})=>{const[x,D]=s(),[_,O]=s(void 0),[F,k]=s(!1),M="week"===y,[{selectedStart:B,selectedEnd:P,currentFocus:C,calendarOpen:j,isStartDirty:H,isEndDirty:R},I]=(({initialState:e,reducers:t,name:r,debug:n})=>{const[i,o]=v(((e,r)=>t[r.type]?t[r.type](e,r.payload):e),e);return[i,Object.fromEntries(Object.keys(t).map((e=>[e,t=>{n&&Yl(r,e,t),o({type:e,payload:t})}])))]})({name:"date-range-input",initialState:Vl,reducers:{blur:e=>({...e,selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),changeStart:(e,t)=>({...e,selectedStart:t,isStartDirty:!0}),changeEnd:(e,t)=>({...e,selectedEnd:t,isEndDirty:!0}),reselectStart:e=>({...e,selectedStart:"",currentFocus:"start"}),reselectEnd:e=>({...e,selectedEnd:"",currentFocus:"end"}),focus:(e,t)=>({...e,currentFocus:M?"none":t,calendarOpen:!b}),cancel:e=>({...e,selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1}),done:(e,t)=>({...e,selectedStart:t.start,selectedEnd:t.end,initialStart:t.start,initialEnd:t.end,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),resetStart:e=>({...e,selectedStart:e.initialStart}),resetEnd:e=>({...e,selectedEnd:e.initialEnd}),resetRange:(e,t)=>({...e,initialStart:t.start,selectedStart:t.start,initialEnd:t.end,selectedEnd:t.end})}}),z=a(!1),L=a(),Y=a(),W=a(),N=a(),V=A.exports.useMediaQuery({maxWidth:T.mobileL}),q=g||V;d((()=>{I.resetRange({start:c,end:u})}),[c,u]),d((()=>{"start"===C?D(B):"end"===C&&D(P)}),[C]);const Q=e=>{if(X(e))return void(z.current=!0);if(I.changeStart(e),Y.current.setCalendarDate(e),z.current=!1,!e)return void(q||P||!R||(I.resetRange({start:"",end:""}),h?.("","")));if(!P)return void I.focus("end");if(E(e).isAfter(P,"day"))I.reselectEnd();else{if(R)return q?void 0:(I.done({start:e,end:P}),void h?.(e,P));I.focus("end")}},U=e=>{if(X(e))return void(z.current=!0);if(I.changeEnd(e),Y.current.setCalendarDate(e),!e)return void(q||B||!H||(I.resetRange({start:"",end:""}),h?.("","")));if(!B)return void I.focus("start");if(E(e).isBefore(B,"day"))I.reselectStart();else{if(H)return q?void 0:(I.done({start:B,end:e}),void h?.(B,e));I.focus("start")}},Z=e=>()=>{b||(I.focus(e),G(),f&&f())},G=()=>{if(M){const e=E(B).startOf("week").format("YYYY-MM-DD");k(!0),D(e)}},X=e=>!w&&e&&Ll.isDateDisabled(e,{disabledDates:o,minDate:r,maxDate:n}),J=e=>{let t={start:void 0,end:void 0};switch(y){case"range":t={start:"start"===C?_:void 0,end:"end"===C?_:void 0};break;case"week":if(!_)return;t={start:E(_).startOf("week").format("YYYY-MM-DD"),end:E(_).endOf("week").format("YYYY-MM-DD")}}return t[e]};return e(Wl,{ref:L,$disabled:i,$readOnly:b,$error:l,id:$,"data-testid":S["data-testid"],onBlur:e=>{L.current.contains(e.relatedTarget)||(I.blur(),k(!1),W.current.resetPlaceholder(),N.current.resetPlaceholder(),p?.())},onKeyDown:e=>{"Escape"===e.code&&I.blur(),"Enter"!==e.code||q||(B&&P?(I.done({start:B,end:P}),h?.(B,P)):I.blur())},...S,children:[e(_l,{currentActive:C,minWidthBeforeWrap:374,error:l,children:[t(Nl,{children:t(zl,{ref:W,placeholder:"From",names:["start-day","start-month","start-year"],value:B,disabled:i,readOnly:F||b,focused:"start"===C,hoverValue:J("start"),onChange:Q,onFocus:Z("start"),onBlur:e=>{e&&!z.current||(I.resetStart(),W.current.resetInput())}})}),t(Nl,{children:t(zl,{ref:N,placeholder:"To",names:["end-day","end-month","end-year"],value:P,disabled:i,readOnly:F||b,focused:"end"===C,hoverValue:J("end"),onChange:U,onFocus:Z("end"),onBlur:e=>{e&&!z.current||(I.resetEnd(),N.current.resetInput())}})})]}),t(bl,{ref:Y,type:"input",variant:y,initialCalendarDate:x,isOpen:j,withButton:q,value:B,endValue:P,selectWithinRange:H||R,currentFocus:C,disabledDates:o,minDate:r,maxDate:n,allowDisabledSelection:w,onSelect:e=>{"start"===C?Q(e):"end"===C&&U(e),M&&(e=>{const t=E(e).startOf("week").format("YYYY-MM-DD"),r=E(e).endOf("week").format("YYYY-MM-DD");if(I.changeStart(t),I.changeEnd(r),z.current=!1,!q)I.done({start:t,end:r}),h?.(t,r)})(e)},onDismiss:e=>{switch(e){case"reset":I.cancel();break;case"confirmed":I.done({start:B,end:P}),h?.(B,P)}},onHover:e=>{O(e)},onYearMonthDisplayChange:m})]})};export{ql as DateRangeInput};
//# sourceMappingURL=index.js.map
