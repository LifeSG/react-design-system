import require$$0,{jsx,jsxs,Fragment}from"react/jsx-runtime";import*as React from"react";import React__default,{cloneElement,useRef,useState,isValidElement,createRef,PureComponent,useEffect,useLayoutEffect,forwardRef,useCallback,useContext,useMemo,useImperativeHandle,useReducer,Children,createElement}from"react";import ReactDOM,{findDOMNode,unstable_batchedUpdates}from"react-dom";import styled,{css,keyframes,useTheme}from"styled-components";var extendStatics=function(e,t){return extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},extendStatics(e,t)};function __extends(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}extendStatics(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var __assign=function(){return __assign=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},__assign.apply(this,arguments)};function __rest(e,t){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(i=Object.getOwnPropertySymbols(e);a<i.length;a++)t.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(e,i[a])&&(r[i[a]]=e[i[a]])}return r}var commonjsGlobal$1="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function isObject$3$1(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}var isObject_1$1=isObject$3$1,freeGlobal$1$1="object"==typeof commonjsGlobal$1&&commonjsGlobal$1&&commonjsGlobal$1.Object===Object&&commonjsGlobal$1,_freeGlobal$1=freeGlobal$1$1,freeGlobal$2=_freeGlobal$1,freeSelf$1="object"==typeof self&&self&&self.Object===Object&&self,root$2$1=freeGlobal$2||freeSelf$1||Function("return this")(),_root$1=root$2$1,root$1$1=_root$1,now$1$1=function(){return root$1$1.Date.now()},now_1$1=now$1$1,reWhitespace$1=/\s/;function trimmedEndIndex$1$1(e){for(var t=e.length;t--&&reWhitespace$1.test(e.charAt(t)););return t}var _trimmedEndIndex$1=trimmedEndIndex$1$1,trimmedEndIndex$2=_trimmedEndIndex$1,reTrimStart$1=/^\s+/;function baseTrim$1$1(e){return e?e.slice(0,trimmedEndIndex$2(e)+1).replace(reTrimStart$1,""):e}var _baseTrim$1=baseTrim$1$1,root$a=_root$1,Symbol$2$1=root$a.Symbol,_Symbol$1=Symbol$2$1,Symbol$1$1=_Symbol$1,objectProto$1$1=Object.prototype,hasOwnProperty$a=objectProto$1$1.hasOwnProperty,nativeObjectToString$1$1=objectProto$1$1.toString,symToStringTag$1$1=Symbol$1$1?Symbol$1$1.toStringTag:void 0;function getRawTag$1$1(e){var t=hasOwnProperty$a.call(e,symToStringTag$1$1),r=e[symToStringTag$1$1];try{e[symToStringTag$1$1]=void 0;var i=!0}catch(e){}var a=nativeObjectToString$1$1.call(e);return i&&(t?e[symToStringTag$1$1]=r:delete e[symToStringTag$1$1]),a}var _getRawTag$1=getRawTag$1$1,objectProto$c=Object.prototype,nativeObjectToString$2=objectProto$c.toString;function objectToString$1$1(e){return nativeObjectToString$2.call(e)}var _objectToString$1=objectToString$1$1,Symbol$6=_Symbol$1,getRawTag$2=_getRawTag$1,objectToString$2=_objectToString$1,nullTag$1="[object Null]",undefinedTag$1="[object Undefined]",symToStringTag$2=Symbol$6?Symbol$6.toStringTag:void 0;function baseGetTag$1$1(e){return null==e?void 0===e?undefinedTag$1:nullTag$1:symToStringTag$2&&symToStringTag$2 in Object(e)?getRawTag$2(e):objectToString$2(e)}var _baseGetTag$1=baseGetTag$1$1;function isObjectLike$1$1(e){return null!=e&&"object"==typeof e}var isObjectLike_1$1=isObjectLike$1$1,baseGetTag$6=_baseGetTag$1,isObjectLike$6=isObjectLike_1$1,symbolTag$2="[object Symbol]";function isSymbol$1$1(e){return"symbol"==typeof e||isObjectLike$6(e)&&baseGetTag$6(e)==symbolTag$2}var isSymbol_1$1=isSymbol$1$1,baseTrim$2=_baseTrim$1,isObject$2$1=isObject_1$1,isSymbol$5=isSymbol_1$1,NAN$1=NaN,reIsBadHex$1=/^[-+]0x[0-9a-f]+$/i,reIsBinary$1=/^0b[01]+$/i,reIsOctal$1=/^0o[0-7]+$/i,freeParseInt$1=parseInt;function toNumber$1$1(e){if("number"==typeof e)return e;if(isSymbol$5(e))return NAN$1;if(isObject$2$1(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=isObject$2$1(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=baseTrim$2(e);var r=reIsBinary$1.test(e);return r||reIsOctal$1.test(e)?freeParseInt$1(e.slice(2),r?2:8):reIsBadHex$1.test(e)?NAN$1:+e}var toNumber_1$1=toNumber$1$1,isObject$1$1=isObject_1$1,now$2=now_1$1,toNumber$3=toNumber_1$1,FUNC_ERROR_TEXT$1$1="Expected a function",nativeMax$2=Math.max,nativeMin$1=Math.min;function debounce$1(e,t,r){var i,a,n,o,s,l,p=0,c=!1,d=!1,h=!0;if("function"!=typeof e)throw new TypeError(FUNC_ERROR_TEXT$1$1);function u(t){var r=i,n=a;return i=a=void 0,p=t,o=e.apply(n,r)}function m(e){var r=e-l;return void 0===l||r>=t||r<0||d&&e-p>=n}function f(){var e=now$2();if(m(e))return y(e);s=setTimeout(f,function(e){var r=t-(e-l);return d?nativeMin$1(r,n-(e-p)):r}(e))}function y(e){return s=void 0,h&&i?u(e):(i=a=void 0,o)}function g(){var e=now$2(),r=m(e);if(i=arguments,a=this,l=e,r){if(void 0===s)return function(e){return p=e,s=setTimeout(f,t),c?u(e):o}(l);if(d)return clearTimeout(s),s=setTimeout(f,t),u(l)}return void 0===s&&(s=setTimeout(f,t)),o}return t=toNumber$3(t)||0,isObject$1$1(r)&&(c=!!r.leading,n=(d="maxWait"in r)?nativeMax$2(toNumber$3(r.maxWait)||0,t):n,h="trailing"in r?!!r.trailing:h),g.cancel=function(){void 0!==s&&clearTimeout(s),p=0,i=l=a=s=void 0},g.flush=function(){return void 0===s?o:y(now$2())},g}var debounce_1$1=debounce$1,debounce$2=debounce_1$1,isObject$6=isObject_1$1,FUNC_ERROR_TEXT$2="Expected a function";function throttle(e,t,r){var i=!0,a=!0;if("function"!=typeof e)throw new TypeError(FUNC_ERROR_TEXT$2);return isObject$6(r)&&(i="leading"in r?!!r.leading:i,a="trailing"in r?!!r.trailing:a),debounce$2(e,t,{leading:i,maxWait:t,trailing:a})}var throttle_1=throttle,patchResizeHandler=function(e,t,r,i){switch(t){case"debounce":return debounce_1$1(e,r,i);case"throttle":return throttle_1(e,r,i);default:return e}},isFunction$3=function(e){return"function"==typeof e},isSSR$1=function(){return"undefined"==typeof window},isDOMElement=function(e){return e instanceof Element||e instanceof HTMLDocument},createNotifier=function(e,t,r,i){return function(a){var n=a.width,o=a.height;t((function(t){return t.width===n&&t.height===o||t.width===n&&!i||t.height===o&&!r?t:(e&&isFunction$3(e)&&e(n,o),{width:n,height:o})}))}};!function(e){function t(t){var r=e.call(this,t)||this;r.cancelHandler=function(){r.resizeHandler&&r.resizeHandler.cancel&&(r.resizeHandler.cancel(),r.resizeHandler=null)},r.attachObserver=function(){var e=r.props,t=e.targetRef,i=e.observerOptions;if(!isSSR$1()){t&&t.current&&(r.targetRef.current=t.current);var a=r.getElement();a&&(r.observableElement&&r.observableElement===a||(r.observableElement=a,r.resizeObserver.observe(a,i)))}},r.getElement=function(){var e=r.props,t=e.querySelector,i=e.targetDomEl;if(isSSR$1())return null;if(t)return document.querySelector(t);if(i&&isDOMElement(i))return i;if(r.targetRef&&isDOMElement(r.targetRef.current))return r.targetRef.current;var a=findDOMNode(r);if(!a)return null;switch(r.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return a;default:return a.parentElement}},r.createResizeHandler=function(e){var t=r.props,i=t.handleWidth,a=void 0===i||i,n=t.handleHeight,o=void 0===n||n,s=t.onResize;if(a||o){var l=createNotifier(s,r.setState.bind(r),a,o);e.forEach((function(e){var t=e&&e.contentRect||{},i=t.width,a=t.height;!r.skipOnMount&&!isSSR$1()&&l({width:i,height:a}),r.skipOnMount=!1}))}},r.getRenderType=function(){var e=r.props,t=e.render,i=e.children;return isFunction$3(t)?"renderProp":isFunction$3(i)?"childFunction":isValidElement(i)?"child":Array.isArray(i)?"childArray":"parent"};var i=t.skipOnMount,a=t.refreshMode,n=t.refreshRate,o=void 0===n?1e3:n,s=t.refreshOptions;return r.state={width:void 0,height:void 0},r.skipOnMount=i,r.targetRef=createRef(),r.observableElement=null,isSSR$1()||(r.resizeHandler=patchResizeHandler(r.createResizeHandler,a,o,s),r.resizeObserver=new window.ResizeObserver(r.resizeHandler)),r}__extends(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){isSSR$1()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,r=t.render,i=t.children,a=t.nodeType,n=void 0===a?"div":a,o=this.state,s={width:o.width,height:o.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return r&&r(s);case"childFunction":return(e=i)(s);case"child":if((e=i).type&&"string"==typeof e.type){var l=__rest(s,["targetRef"]);return cloneElement(e,l)}return cloneElement(e,s);case"childArray":return(e=i).map((function(e){return!!e&&cloneElement(e,s)}));default:return React.createElement(n,null)}}}(PureComponent);var useEnhancedEffect=isSSR$1()?useEffect:useLayoutEffect;function useResizeDetector(e){void 0===e&&(e={});var t=e.skipOnMount,r=void 0!==t&&t,i=e.refreshMode,a=e.refreshRate,n=void 0===a?1e3:a,o=e.refreshOptions,s=e.handleWidth,l=void 0===s||s,p=e.handleHeight,c=void 0===p||p,d=e.targetRef,h=e.observerOptions,u=e.onResize,m=useRef(r),f=useRef(null),y=null!=d?d:f,g=useRef(),_=useState({width:void 0,height:void 0}),x=_[0],b=_[1];return useEnhancedEffect((function(){if(!isSSR$1()){var e=createNotifier(u,b,l,c);g.current=patchResizeHandler((function(t){(l||c)&&t.forEach((function(t){var r=t&&t.contentRect||{},i=r.width,a=r.height;!m.current&&!isSSR$1()&&e({width:i,height:a}),m.current=!1}))}),i,n,o);var t=new window.ResizeObserver(g.current);return y.current&&t.observe(y.current,h),function(){t.disconnect();var e=g.current;e&&e.cancel&&e.cancel()}}}),[i,n,o,l,c,u,h,y.current]),__assign({ref:y},x)}let updateQueue=makeQueue();const raf=e=>schedule(e,updateQueue);let writeQueue=makeQueue();raf.write=e=>schedule(e,writeQueue);let onStartQueue=makeQueue();raf.onStart=e=>schedule(e,onStartQueue);let onFrameQueue=makeQueue();raf.onFrame=e=>schedule(e,onFrameQueue);let onFinishQueue=makeQueue();raf.onFinish=e=>schedule(e,onFinishQueue);let timeouts=[];raf.setTimeout=(e,t)=>{let r=raf.now()+t,i=()=>{let e=timeouts.findIndex((e=>e.cancel==i));~e&&timeouts.splice(e,1),pendingCount-=~e?1:0},a={time:r,handler:e,cancel:i};return timeouts.splice(findTimeout(r),0,a),pendingCount+=1,start(),a};let findTimeout=e=>~(~timeouts.findIndex((t=>t.time>e))||~timeouts.length);raf.cancel=e=>{onStartQueue.delete(e),onFrameQueue.delete(e),onFinishQueue.delete(e),updateQueue.delete(e),writeQueue.delete(e)},raf.sync=e=>{sync=!0,raf.batchedUpdates(e),sync=!1},raf.throttle=e=>{let t;function r(){try{e(...t)}finally{t=null}}function i(...e){t=e,raf.onStart(r)}return i.handler=e,i.cancel=()=>{onStartQueue.delete(r),t=null},i};let nativeRaf="undefined"!=typeof window?window.requestAnimationFrame:()=>{};raf.use=e=>nativeRaf=e,raf.now="undefined"!=typeof performance?()=>performance.now():Date.now,raf.batchedUpdates=e=>e(),raf.catch=console.error,raf.frameLoop="always",raf.advance=()=>{"demand"!==raf.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):update()};let ts=-1,pendingCount=0,sync=!1;function schedule(e,t){sync?(t.delete(e),e(0)):(t.add(e),start())}function start(){ts<0&&(ts=0,"demand"!==raf.frameLoop&&nativeRaf(loop))}function stop(){ts=-1}function loop(){~ts&&(nativeRaf(loop),raf.batchedUpdates(update))}function update(){let e=ts;ts=raf.now();let t=findTimeout(ts);t&&(eachSafely(timeouts.splice(0,t),(e=>e.handler())),pendingCount-=t),pendingCount?(onStartQueue.flush(),updateQueue.flush(e?Math.min(64,ts-e):16.667),onFrameQueue.flush(),writeQueue.flush(),onFinishQueue.flush()):stop()}function makeQueue(){let e=new Set,t=e;return{add(r){pendingCount+=t!=e||e.has(r)?0:1,e.add(r)},delete:r=>(pendingCount-=t==e&&e.has(r)?1:0,e.delete(r)),flush(r){t.size&&(e=new Set,pendingCount-=t.size,eachSafely(t,(t=>t(r)&&e.add(t))),pendingCount+=e.size,t=e)}}}function eachSafely(e,t){e.forEach((e=>{try{t(e)}catch(e){raf.catch(e)}}))}function noop(){}const defineHidden=(e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}),is={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function isEqual$1(e,t){if(is.arr(e)){if(!is.arr(t)||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}return e===t}const each=(e,t)=>e.forEach(t);function eachProp(e,t,r){if(is.arr(e))for(let i=0;i<e.length;i++)t.call(r,e[i],`${i}`);else for(const i in e)e.hasOwnProperty(i)&&t.call(r,e[i],i)}const toArray=e=>is.und(e)?[]:is.arr(e)?e:[e];function flush(e,t){if(e.size){const r=Array.from(e);e.clear(),each(r,t)}}const flushCalls=(e,...t)=>flush(e,(e=>e(...t))),isSSR=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent);let createStringInterpolator$1,to,colors$1=null,skipAnimation=!1,willAdvance=noop;const assign=e=>{e.to&&(to=e.to),e.now&&(raf.now=e.now),void 0!==e.colors&&(colors$1=e.colors),null!=e.skipAnimation&&(skipAnimation=e.skipAnimation),e.createStringInterpolator&&(createStringInterpolator$1=e.createStringInterpolator),e.requestAnimationFrame&&raf.use(e.requestAnimationFrame),e.batchedUpdates&&(raf.batchedUpdates=e.batchedUpdates),e.willAdvance&&(willAdvance=e.willAdvance),e.frameLoop&&(raf.frameLoop=e.frameLoop)};var globals=Object.freeze({__proto__:null,get createStringInterpolator(){return createStringInterpolator$1},get to(){return to},get colors(){return colors$1},get skipAnimation(){return skipAnimation},get willAdvance(){return willAdvance},assign:assign});const startQueue=new Set;let currentFrame=[],prevFrame=[],priority=0;const frameLoop={get idle(){return!startQueue.size&&!currentFrame.length},start(e){priority>e.priority?(startQueue.add(e),raf.onStart(flushStartQueue)):(startSafely(e),raf(advance))},advance:advance,sort(e){if(priority)raf.onFrame((()=>frameLoop.sort(e)));else{const t=currentFrame.indexOf(e);~t&&(currentFrame.splice(t,1),startUnsafely(e))}},clear(){currentFrame=[],startQueue.clear()}};function flushStartQueue(){startQueue.forEach(startSafely),startQueue.clear(),raf(advance)}function startSafely(e){currentFrame.includes(e)||startUnsafely(e)}function startUnsafely(e){currentFrame.splice(findIndex$2(currentFrame,(t=>t.priority>e.priority)),0,e)}function advance(e){const t=prevFrame;for(let r=0;r<currentFrame.length;r++){const i=currentFrame[r];priority=i.priority,i.idle||(willAdvance(i),i.advance(e),i.idle||t.push(i))}return priority=0,prevFrame=currentFrame,prevFrame.length=0,currentFrame=t,currentFrame.length>0}function findIndex$2(e,t){const r=e.findIndex(t);return r<0?e.length:r}const clamp=(e,t,r)=>Math.min(Math.max(r,e),t),colors={transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199},NUMBER="[-+]?\\d*\\.?\\d+",PERCENTAGE=NUMBER+"%";function call(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}const rgb=new RegExp("rgb"+call(NUMBER,NUMBER,NUMBER)),rgba=new RegExp("rgba"+call(NUMBER,NUMBER,NUMBER,NUMBER)),hsl=new RegExp("hsl"+call(NUMBER,PERCENTAGE,PERCENTAGE)),hsla=new RegExp("hsla"+call(NUMBER,PERCENTAGE,PERCENTAGE,NUMBER)),hex3=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex4=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6=/^#([0-9a-fA-F]{6})$/,hex8=/^#([0-9a-fA-F]{8})$/;function normalizeColor(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=hex6.exec(e))?parseInt(t[1]+"ff",16)>>>0:colors$1&&void 0!==colors$1[e]?colors$1[e]:(t=rgb.exec(e))?(parse255(t[1])<<24|parse255(t[2])<<16|parse255(t[3])<<8|255)>>>0:(t=rgba.exec(e))?(parse255(t[1])<<24|parse255(t[2])<<16|parse255(t[3])<<8|parse1(t[4]))>>>0:(t=hex3.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=hex8.exec(e))?parseInt(t[1],16)>>>0:(t=hex4.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=hsl.exec(e))?(255|hslToRgb(parse360(t[1]),parsePercentage(t[2]),parsePercentage(t[3])))>>>0:(t=hsla.exec(e))?(hslToRgb(parse360(t[1]),parsePercentage(t[2]),parsePercentage(t[3]))|parse1(t[4]))>>>0:null}function hue2rgb(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function hslToRgb(e,t,r){const i=r<.5?r*(1+t):r+t-r*t,a=2*r-i,n=hue2rgb(a,i,e+1/3),o=hue2rgb(a,i,e),s=hue2rgb(a,i,e-1/3);return Math.round(255*n)<<24|Math.round(255*o)<<16|Math.round(255*s)<<8}function parse255(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function parse360(e){return(parseFloat(e)%360+360)%360/360}function parse1(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function parsePercentage(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function colorToRgba(e){let t=normalizeColor(e);return null===t?e:(t=t||0,`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)}const createInterpolator=(e,t,r)=>{if(is.fun(e))return e;if(is.arr(e))return createInterpolator({range:e,output:t,extrapolate:r});if(is.str(e.output[0]))return createStringInterpolator$1(e);const i=e,a=i.output,n=i.range||[0,1],o=i.extrapolateLeft||i.extrapolate||"extend",s=i.extrapolateRight||i.extrapolate||"extend",l=i.easing||(e=>e);return e=>{const t=findRange(e,n);return interpolate(e,n[t],n[t+1],a[t],a[t+1],l,o,s,i.map)}};function interpolate(e,t,r,i,a,n,o,s,l){let p=l?l(e):e;if(p<t){if("identity"===o)return p;"clamp"===o&&(p=t)}if(p>r){if("identity"===s)return p;"clamp"===s&&(p=r)}return i===a?i:t===r?e<=t?i:a:(t===-1/0?p=-p:r===1/0?p-=t:p=(p-t)/(r-t),p=n(p),i===-1/0?p=-p:a===1/0?p+=i:p=p*(a-i)+i,p)}function findRange(e,t){for(var r=1;r<t.length-1&&!(t[r]>=e);++r);return r-1}const steps=(e,t="end")=>r=>{const i=(r="end"===t?Math.min(r,.999):Math.max(r,.001))*e,a="end"===t?Math.floor(i):Math.ceil(i);return clamp(0,1,a/e)},c1=1.70158,c2=1.525*c1,c3=c1+1,c4=2*Math.PI/3,c5=2*Math.PI/4.5,bounceOut=e=>{const t=7.5625,r=2.75;return e<1/r?t*e*e:e<2/r?t*(e-=1.5/r)*e+.75:e<2.5/r?t*(e-=2.25/r)*e+.9375:t*(e-=2.625/r)*e+.984375},easings={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>c3*e*e*e-c1*e*e,easeOutBack:e=>1+c3*Math.pow(e-1,3)+c1*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(2*(c2+1)*e-c2)/2:(Math.pow(2*e-2,2)*((c2+1)*(2*e-2)+c2)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*c4),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*c4)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*c5)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*c5)/2+1,easeInBounce:e=>1-bounceOut(1-e),easeOutBounce:bounceOut,easeInOutBounce:e=>e<.5?(1-bounceOut(1-2*e))/2:(1+bounceOut(2*e-1))/2,steps:steps};function _extends$2(){return _extends$2=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},_extends$2.apply(this,arguments)}const $get=Symbol.for("FluidValue.get"),$observers=Symbol.for("FluidValue.observers"),hasFluidValue=e=>Boolean(e&&e[$get]),getFluidValue=e=>e&&e[$get]?e[$get]():e,getFluidObservers=e=>e[$observers]||null;function callFluidObserver(e,t){e.eventObserved?e.eventObserved(t):e(t)}function callFluidObservers(e,t){let r=e[$observers];r&&r.forEach((e=>{callFluidObserver(e,t)}))}class FluidValue{constructor(e){if(this[$get]=void 0,this[$observers]=void 0,!e&&!(e=this.get))throw Error("Unknown getter");setFluidGetter(this,e)}}const setFluidGetter=(e,t)=>setHidden(e,$get,t);function addFluidObserver(e,t){if(e[$get]){let r=e[$observers];r||setHidden(e,$observers,r=new Set),r.has(t)||(r.add(t),e.observerAdded&&e.observerAdded(r.size,t))}return t}function removeFluidObserver(e,t){let r=e[$observers];if(r&&r.has(t)){const i=r.size-1;i?r.delete(t):e[$observers]=null,e.observerRemoved&&e.observerRemoved(i,t)}}const setHidden=(e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}),numberRegex=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,colorRegex=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,unitRegex=new RegExp(`(${numberRegex.source})(%|[a-z]+)`,"i"),rgbaRegex=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,cssVariableRegex=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,variableToRgba=e=>{const[t,r]=parseCSSVariable(e);if(!t||isSSR())return e;const i=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(i)return i.trim();if(r&&r.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(r);return t||e}return r&&cssVariableRegex.test(r)?variableToRgba(r):r||e},parseCSSVariable=e=>{const t=cssVariableRegex.exec(e);if(!t)return[,];const[,r,i]=t;return[r,i]};let namedColorRegex;const rgbaRound=(e,t,r,i,a)=>`rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(i)}, ${a})`,createStringInterpolator=e=>{namedColorRegex||(namedColorRegex=colors$1?new RegExp(`(${Object.keys(colors$1).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>getFluidValue(e).replace(cssVariableRegex,variableToRgba).replace(colorRegex,colorToRgba).replace(namedColorRegex,colorToRgba))),r=t.map((e=>e.match(numberRegex).map(Number))),i=r[0].map(((e,t)=>r.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>createInterpolator(_extends$2({},e,{output:t}))));return e=>{var r;const a=!unitRegex.test(t[0])&&(null==(r=t.find((e=>unitRegex.test(e))))?void 0:r.replace(numberRegex,""));let n=0;return t[0].replace(numberRegex,(()=>`${i[n++](e)}${a||""}`)).replace(rgbaRegex,rgbaRound)}},prefix$1="react-spring: ",once=e=>{const t=e;let r=!1;if("function"!=typeof t)throw new TypeError(`${prefix$1}once requires a function parameter`);return(...e)=>{r||(t(...e),r=!0)}},warnInterpolate=once(console.warn);function deprecateInterpolate(){warnInterpolate(`${prefix$1}The "interpolate" function is deprecated in v9 (use "to" instead)`)}const warnDirectCall=once(console.warn);function deprecateDirectCall(){warnDirectCall(`${prefix$1}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`)}function isAnimatedString(e){return is.str(e)&&("#"==e[0]||/\d/.test(e)||!isSSR()&&cssVariableRegex.test(e)||e in(colors$1||{}))}const useIsomorphicLayoutEffect=isSSR()?useEffect:useLayoutEffect,useIsMounted=()=>{const e=useRef(!1);return useIsomorphicLayoutEffect((()=>(e.current=!0,()=>{e.current=!1})),[]),e};function useForceUpdate(){const e=useState()[1],t=useIsMounted();return()=>{t.current&&e(Math.random())}}function useMemoOne(e,t){const[r]=useState((()=>({inputs:t,result:e()}))),i=useRef(),a=i.current;let n=a;if(n){Boolean(t&&n.inputs&&areInputsEqual(t,n.inputs))||(n={inputs:t,result:e()})}else n=r;return useEffect((()=>{i.current=n,a==r&&(r.inputs=r.result=void 0)}),[n]),n.result}function areInputsEqual(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}const useOnce=e=>useEffect(e,emptyDeps),emptyDeps=[];function usePrev(e){const t=useRef();return useEffect((()=>{t.current=e})),t.current}const $node=Symbol.for("Animated:node"),isAnimated=e=>!!e&&e[$node]===e,getAnimated=e=>e&&e[$node],setAnimated=(e,t)=>defineHidden(e,$node,t),getPayload=e=>e&&e[$node]&&e[$node].getPayload();class Animated{constructor(){this.payload=void 0,setAnimated(this,this)}getPayload(){return this.payload||[]}}class AnimatedValue extends Animated{constructor(e){super(),this.done=!0,this.elapsedTime=void 0,this.lastPosition=void 0,this.lastVelocity=void 0,this.v0=void 0,this.durationProgress=0,this._value=e,is.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new AnimatedValue(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return is.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,is.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}}class AnimatedString extends AnimatedValue{constructor(e){super(0),this._string=null,this._toString=void 0,this._toString=createInterpolator({output:[e,e]})}static create(e){return new AnimatedString(e)}getValue(){let e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(is.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=createInterpolator({output:[this.getValue(),e]})),this._value=0,super.reset()}}const TreeContext={dependencies:null};class AnimatedObject extends Animated{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return eachProp(this.source,((r,i)=>{isAnimated(r)?t[i]=r.getValue(e):hasFluidValue(r)?t[i]=getFluidValue(r):e||(t[i]=r)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&each(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return eachProp(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){TreeContext.dependencies&&hasFluidValue(e)&&TreeContext.dependencies.add(e);const t=getPayload(e);t&&each(t,(e=>this.add(e)))}}class AnimatedArray extends AnimatedObject{constructor(e){super(e)}static create(e){return new AnimatedArray(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,r)=>t.setValue(e[r]))).some(Boolean):(super.setValue(e.map(makeAnimated)),!0)}}function makeAnimated(e){return(isAnimatedString(e)?AnimatedString:AnimatedValue).create(e)}function getAnimatedType(e){const t=getAnimated(e);return t?t.constructor:is.arr(e)?AnimatedArray:isAnimatedString(e)?AnimatedString:AnimatedValue}function _extends$1(){return _extends$1=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},_extends$1.apply(this,arguments)}const withAnimated=(e,t)=>{const r=!is.fun(e)||e.prototype&&e.prototype.isReactComponent;return forwardRef(((i,a)=>{const n=useRef(null),o=r&&useCallback((e=>{n.current=updateRef(a,e)}),[a]),[s,l]=getAnimatedState(i,t),p=useForceUpdate(),c=()=>{const e=n.current;if(r&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,s.getValue(!0)))&&p()},d=new PropsObserver(c,l),h=useRef();useIsomorphicLayoutEffect((()=>(h.current=d,each(l,(e=>addFluidObserver(e,d))),()=>{h.current&&(each(h.current.deps,(e=>removeFluidObserver(e,h.current))),raf.cancel(h.current.update))}))),useEffect(c,[]),useOnce((()=>()=>{const e=h.current;each(e.deps,(t=>removeFluidObserver(t,e)))}));const u=t.getComponentProps(s.getValue());return React.createElement(e,_extends$1({},u,{ref:o}))}))};class PropsObserver{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&raf.write(this.update)}}function getAnimatedState(e,t){const r=new Set;return TreeContext.dependencies=r,e.style&&(e=_extends$1({},e,{style:t.createAnimatedStyle(e.style)})),e=new AnimatedObject(e),TreeContext.dependencies=null,[e,r]}function updateRef(e,t){return e&&(is.fun(e)?e(t):e.current=t),t}const cacheKey=Symbol.for("AnimatedComponent"),createHost=(e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:r=(e=>new AnimatedObject(e)),getComponentProps:i=(e=>e)}={})=>{const a={applyAnimatedValues:t,createAnimatedStyle:r,getComponentProps:i},n=e=>{const t=getDisplayName(e)||"Anonymous";return(e=is.str(e)?n[e]||(n[e]=withAnimated(e,a)):e[cacheKey]||(e[cacheKey]=withAnimated(e,a))).displayName=`Animated(${t})`,e};return eachProp(e,((t,r)=>{is.arr(e)&&(r=getDisplayName(t)),n[r]=n(t)})),{animated:n}},getDisplayName=e=>is.str(e)?e:e&&is.str(e.displayName)?e.displayName:is.fun(e)&&e.name||null;function _extends(){return _extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},_extends.apply(this,arguments)}function callProp(e,...t){return is.fun(e)?e(...t):e}const matchProp=(e,t)=>!0===e||!!(t&&e&&(is.fun(e)?e(t):toArray(e).includes(t))),resolveProp=(e,t)=>is.obj(e)?t&&e[t]:e,getDefaultProp=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,noopTransform=e=>e,getDefaultProps=(e,t=noopTransform)=>{let r=DEFAULT_PROPS;e.default&&!0!==e.default&&(e=e.default,r=Object.keys(e));const i={};for(const a of r){const r=t(e[a],a);is.und(r)||(i[a]=r)}return i},DEFAULT_PROPS=["config","onProps","onStart","onChange","onPause","onResume","onRest"],RESERVED_PROPS={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function getForwardProps(e){const t={};let r=0;if(eachProp(e,((e,i)=>{RESERVED_PROPS[i]||(t[i]=e,r++)})),r)return t}function inferTo(e){const t=getForwardProps(e);if(t){const r={to:t};return eachProp(e,((e,i)=>i in t||(r[i]=e))),r}return _extends({},e)}function computeGoal(e){return e=getFluidValue(e),is.arr(e)?e.map(computeGoal):isAnimatedString(e)?globals.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function hasProps(e){for(const t in e)return!0;return!1}function isAsyncTo(e){return is.fun(e)||is.arr(e)&&is.obj(e[0])}function detachRefs(e,t){var r;null==(r=e.ref)||r.delete(e),null==t||t.delete(e)}function replaceRef(e,t){var r;t&&e.ref!==t&&(null==(r=e.ref)||r.delete(e),t.add(e),e.ref=t)}const config={default:{tension:170,friction:26},gentle:{tension:120,friction:14},wobbly:{tension:180,friction:12},stiff:{tension:210,friction:20},slow:{tension:280,friction:60},molasses:{tension:280,friction:120}},defaults=_extends({},config.default,{mass:1,damping:1,easing:easings.linear,clamp:!1});class AnimationConfig{constructor(){this.tension=void 0,this.friction=void 0,this.frequency=void 0,this.damping=void 0,this.mass=void 0,this.velocity=0,this.restVelocity=void 0,this.precision=void 0,this.progress=void 0,this.duration=void 0,this.easing=void 0,this.clamp=void 0,this.bounce=void 0,this.decay=void 0,this.round=void 0,Object.assign(this,defaults)}}function mergeConfig(e,t,r){r&&(sanitizeConfig(r=_extends({},r),t),t=_extends({},r,t)),sanitizeConfig(e,t),Object.assign(e,t);for(const t in defaults)null==e[t]&&(e[t]=defaults[t]);let{mass:i,frequency:a,damping:n}=e;return is.und(a)||(a<.01&&(a=.01),n<0&&(n=0),e.tension=Math.pow(2*Math.PI/a,2)*i,e.friction=4*Math.PI*n*i/a),e}function sanitizeConfig(e,t){if(is.und(t.decay)){const r=!is.und(t.tension)||!is.und(t.friction);!r&&is.und(t.frequency)&&is.und(t.damping)&&is.und(t.mass)||(e.duration=void 0,e.decay=void 0),r&&(e.frequency=void 0)}else e.duration=void 0}const emptyArray=[];class Animation{constructor(){this.changed=!1,this.values=emptyArray,this.toValues=null,this.fromValues=emptyArray,this.to=void 0,this.from=void 0,this.config=new AnimationConfig,this.immediate=!1}}function scheduleProps(e,{key:t,props:r,defaultProps:i,state:a,actions:n}){return new Promise(((o,s)=>{var l;let p,c,d=matchProp(null!=(l=r.cancel)?l:null==i?void 0:i.cancel,t);if(d)m();else{is.und(r.pause)||(a.paused=matchProp(r.pause,t));let e=null==i?void 0:i.pause;!0!==e&&(e=a.paused||matchProp(e,t)),p=callProp(r.delay||0,t),e?(a.resumeQueue.add(u),n.pause()):(n.resume(),u())}function h(){a.resumeQueue.add(u),a.timeouts.delete(c),c.cancel(),p=c.time-raf.now()}function u(){p>0&&!globals.skipAnimation?(a.delayed=!0,c=raf.setTimeout(m,p),a.pauseQueue.add(h),a.timeouts.add(c)):m()}function m(){a.delayed&&(a.delayed=!1),a.pauseQueue.delete(h),a.timeouts.delete(c),e<=(a.cancelId||0)&&(d=!0);try{n.start(_extends({},r,{callId:e,cancel:d}),o)}catch(e){s(e)}}}))}const getCombinedResult=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?getCancelledResult(e.get()):t.every((e=>e.noop))?getNoopResult(e.get()):getFinishedResult(e.get(),t.every((e=>e.finished))),getNoopResult=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),getFinishedResult=(e,t,r=!1)=>({value:e,finished:t,cancelled:r}),getCancelledResult=e=>({value:e,cancelled:!0,finished:!1});function runAsync(e,t,r,i){const{callId:a,parentId:n,onRest:o}=t,{asyncTo:s,promise:l}=r;return n||e!==s||t.reset?r.promise=(async()=>{r.asyncId=a,r.asyncTo=e;const p=getDefaultProps(t,((e,t)=>"onRest"===t?void 0:e));let c,d;const h=new Promise(((e,t)=>(c=e,d=t))),u=e=>{const t=a<=(r.cancelId||0)&&getCancelledResult(i)||a!==r.asyncId&&getFinishedResult(i,!1);if(t)throw e.result=t,d(e),e},m=(e,t)=>{const n=new BailSignal,o=new SkipAnimationSignal;return(async()=>{if(globals.skipAnimation)throw stopAsync(r),o.result=getFinishedResult(i,!1),d(o),o;u(n);const s=is.obj(e)?_extends({},e):_extends({},t,{to:e});s.parentId=a,eachProp(p,((e,t)=>{is.und(s[t])&&(s[t]=e)}));const l=await i.start(s);return u(n),r.paused&&await new Promise((e=>{r.resumeQueue.add(e)})),l})()};let f;if(globals.skipAnimation)return stopAsync(r),getFinishedResult(i,!1);try{let t;t=is.arr(e)?(async e=>{for(const t of e)await m(t)})(e):Promise.resolve(e(m,i.stop.bind(i))),await Promise.all([t.then(c),h]),f=getFinishedResult(i.get(),!0,!1)}catch(e){if(e instanceof BailSignal)f=e.result;else{if(!(e instanceof SkipAnimationSignal))throw e;f=e.result}}finally{a==r.asyncId&&(r.asyncId=n,r.asyncTo=n?s:void 0,r.promise=n?l:void 0)}return is.fun(o)&&raf.batchedUpdates((()=>{o(f,i,i.item)})),f})():l}function stopAsync(e,t){flush(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}class BailSignal extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."),this.result=void 0}}class SkipAnimationSignal extends Error{constructor(){super("SkipAnimationSignal"),this.result=void 0}}const isFrameValue=e=>e instanceof FrameValue;let nextId$1=1;class FrameValue extends FluidValue{constructor(...e){super(...e),this.id=nextId$1++,this.key=void 0,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=getAnimated(this);return e&&e.getValue()}to(...e){return globals.to(this,e)}interpolate(...e){return deprecateInterpolate(),globals.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){callFluidObservers(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||frameLoop.sort(this),callFluidObservers(this,{type:"priority",parent:this,priority:e})}}const $P=Symbol.for("SpringPhase"),HAS_ANIMATED=1,IS_ANIMATING=2,IS_PAUSED=4,hasAnimated=e=>(e[$P]&HAS_ANIMATED)>0,isAnimating=e=>(e[$P]&IS_ANIMATING)>0,isPaused=e=>(e[$P]&IS_PAUSED)>0,setActiveBit=(e,t)=>t?e[$P]|=IS_ANIMATING|HAS_ANIMATED:e[$P]&=~IS_ANIMATING,setPausedBit=(e,t)=>t?e[$P]|=IS_PAUSED:e[$P]&=~IS_PAUSED;class SpringValue extends FrameValue{constructor(e,t){if(super(),this.key=void 0,this.animation=new Animation,this.queue=void 0,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!is.und(e)||!is.und(t)){const r=is.obj(e)?_extends({},e):_extends({},t,{from:e});is.und(r.default)&&(r.default=!0),this.start(r)}}get idle(){return!(isAnimating(this)||this._state.asyncTo)||isPaused(this)}get goal(){return getFluidValue(this.animation.to)}get velocity(){const e=getAnimated(this);return e instanceof AnimatedValue?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return hasAnimated(this)}get isAnimating(){return isAnimating(this)}get isPaused(){return isPaused(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,r=!1;const i=this.animation;let{config:a,toValues:n}=i;const o=getPayload(i.to);!o&&hasFluidValue(i.to)&&(n=toArray(getFluidValue(i.to))),i.values.forEach(((s,l)=>{if(s.done)return;const p=s.constructor==AnimatedString?1:o?o[l].lastPosition:n[l];let c=i.immediate,d=p;if(!c){if(d=s.lastPosition,a.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const r=i.fromValues[l],n=null!=s.v0?s.v0:s.v0=is.arr(a.velocity)?a.velocity[l]:a.velocity;let o;const h=a.precision||(r==p?.005:Math.min(1,.001*Math.abs(p-r)));if(is.und(a.duration))if(a.decay){const e=!0===a.decay?.998:a.decay,i=Math.exp(-(1-e)*t);d=r+n/(1-e)*(1-i),c=Math.abs(s.lastPosition-d)<=h,o=n*i}else{o=null==s.lastVelocity?n:s.lastVelocity;const t=a.restVelocity||h/10,i=a.clamp?0:a.bounce,l=!is.und(i),u=r==p?s.v0>0:r<p;let m,f=!1;const y=1,g=Math.ceil(e/y);for(let e=0;e<g&&(m=Math.abs(o)>t,m||(c=Math.abs(p-d)<=h,!c));++e){l&&(f=d==p||d>p==u,f&&(o=-o*i,d=p));o+=(1e-6*-a.tension*(d-p)+.001*-a.friction*o)/a.mass*y,d+=o*y}}else{let i=1;a.duration>0&&(this._memoizedDuration!==a.duration&&(this._memoizedDuration=a.duration,s.durationProgress>0&&(s.elapsedTime=a.duration*s.durationProgress,t=s.elapsedTime+=e)),i=(a.progress||0)+t/this._memoizedDuration,i=i>1?1:i<0?0:i,s.durationProgress=i),d=r+a.easing(i)*(p-r),o=(d-s.lastPosition)/e,c=1==i}s.lastVelocity=o,Number.isNaN(d)&&(console.warn("Got NaN while animating:",this),c=!0)}o&&!o[l].done&&(c=!1),c?s.done=!0:t=!1,s.setValue(d,a.round)&&(r=!0)}));const s=getAnimated(this),l=s.getValue();if(t){const e=getFluidValue(i.to);l===e&&!r||a.decay?r&&a.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else r&&this._onChange(l)}set(e){return raf.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(isAnimating(this)){const{to:e,config:t}=this.animation;raf.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let r;return is.und(e)?(r=this.queue||[],this.queue=[]):r=[is.obj(e)?e:_extends({},t,{to:e})],Promise.all(r.map((e=>this._update(e)))).then((e=>getCombinedResult(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),stopAsync(this._state,e&&this._lastCallId),raf.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:r,from:i}=e;r=is.obj(r)?r[t]:r,(null==r||isAsyncTo(r))&&(r=void 0),i=is.obj(i)?i[t]:i,null==i&&(i=void 0);const a={to:r,from:i};return hasAnimated(this)||(e.reverse&&([r,i]=[i,r]),i=getFluidValue(i),is.und(i)?getAnimated(this)||this._set(r):this._set(i)),a}_update(e,t){let r=_extends({},e);const{key:i,defaultProps:a}=this;r.default&&Object.assign(a,getDefaultProps(r,((e,t)=>/^on/.test(t)?resolveProp(e,i):e))),mergeActiveFn(this,r,"onProps"),sendEvent(this,"onProps",r,this);const n=this._prepareNode(r);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const o=this._state;return scheduleProps(++this._lastCallId,{key:i,props:r,defaultProps:a,state:o,actions:{pause:()=>{isPaused(this)||(setPausedBit(this,!0),flushCalls(o.pauseQueue),sendEvent(this,"onPause",getFinishedResult(this,checkFinished(this,this.animation.to)),this))},resume:()=>{isPaused(this)&&(setPausedBit(this,!1),isAnimating(this)&&this._resume(),flushCalls(o.resumeQueue),sendEvent(this,"onResume",getFinishedResult(this,checkFinished(this,this.animation.to)),this))},start:this._merge.bind(this,n)}}).then((e=>{if(r.loop&&e.finished&&(!t||!e.noop)){const e=createLoopUpdate(r);if(e)return this._update(e,!0)}return e}))}_merge(e,t,r){if(t.cancel)return this.stop(!0),r(getCancelledResult(this));const i=!is.und(e.to),a=!is.und(e.from);if(i||a){if(!(t.callId>this._lastToId))return r(getCancelledResult(this));this._lastToId=t.callId}const{key:n,defaultProps:o,animation:s}=this,{to:l,from:p}=s;let{to:c=l,from:d=p}=e;!a||i||t.default&&!is.und(c)||(c=d),t.reverse&&([c,d]=[d,c]);const h=!isEqual$1(d,p);h&&(s.from=d),d=getFluidValue(d);const u=!isEqual$1(c,l);u&&this._focus(c);const m=isAsyncTo(t.to),{config:f}=s,{decay:y,velocity:g}=f;(i||a)&&(f.velocity=0),t.config&&!m&&mergeConfig(f,callProp(t.config,n),t.config!==o.config?callProp(o.config,n):void 0);let _=getAnimated(this);if(!_||is.und(c))return r(getFinishedResult(this,!0));const x=is.und(t.reset)?a&&!t.default:!is.und(d)&&matchProp(t.reset,n),b=x?d:this.get(),v=computeGoal(c),C=is.num(v)||is.arr(v)||isAnimatedString(v),S=!m&&(!C||matchProp(o.immediate||t.immediate,n));if(u){const e=getAnimatedType(c);if(e!==_.constructor){if(!S)throw Error(`Cannot animate between ${_.constructor.name} and ${e.name}, as the "to" prop suggests`);_=this._set(v)}}const $=_.constructor;let w=hasFluidValue(c),T=!1;if(!w){const e=x||!hasAnimated(this)&&h;(u||e)&&(T=isEqual$1(computeGoal(b),v),w=!T),(isEqual$1(s.immediate,S)||S)&&isEqual$1(f.decay,y)&&isEqual$1(f.velocity,g)||(w=!0)}if(T&&isAnimating(this)&&(s.changed&&!x?w=!0:w||this._stop(l)),!m&&((w||hasFluidValue(l))&&(s.values=_.getPayload(),s.toValues=hasFluidValue(c)?null:$==AnimatedString?[1]:toArray(v)),s.immediate!=S&&(s.immediate=S,S||x||this._set(l)),w)){const{onRest:e}=s;each(ACTIVE_EVENTS,(e=>mergeActiveFn(this,t,e)));const i=getFinishedResult(this,checkFinished(this,l));flushCalls(this._pendingCalls,i),this._pendingCalls.add(r),s.changed&&raf.batchedUpdates((()=>{s.changed=!x,null==e||e(i,this),x?callProp(o.onRest,i):null==s.onStart||s.onStart(i,this)}))}x&&this._set(b),m?r(runAsync(t.to,t,this._state,this)):w?this._start():isAnimating(this)&&!u?this._pendingCalls.add(r):r(getNoopResult(b))}_focus(e){const t=this.animation;e!==t.to&&(getFluidObservers(this)&&this._detach(),t.to=e,getFluidObservers(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;hasFluidValue(t)&&(addFluidObserver(t,this),isFrameValue(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;hasFluidValue(e)&&removeFluidObserver(e,this)}_set(e,t=!0){const r=getFluidValue(e);if(!is.und(r)){const e=getAnimated(this);if(!e||!isEqual$1(r,e.getValue())){const i=getAnimatedType(r);e&&e.constructor==i?e.setValue(r):setAnimated(this,i.create(r)),e&&raf.batchedUpdates((()=>{this._onChange(r,t)}))}}return getAnimated(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,sendEvent(this,"onStart",getFinishedResult(this,checkFinished(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),callProp(this.animation.onChange,e,this)),callProp(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;getAnimated(this).reset(getFluidValue(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),isAnimating(this)||(setActiveBit(this,!0),isPaused(this)||this._resume())}_resume(){globals.skipAnimation?this.finish():frameLoop.start(this)}_stop(e,t){if(isAnimating(this)){setActiveBit(this,!1);const r=this.animation;each(r.values,(e=>{e.done=!0})),r.toValues&&(r.onChange=r.onPause=r.onResume=void 0),callFluidObservers(this,{type:"idle",parent:this});const i=t?getCancelledResult(this.get()):getFinishedResult(this.get(),checkFinished(this,null!=e?e:r.to));flushCalls(this._pendingCalls,i),r.changed&&(r.changed=!1,sendEvent(this,"onRest",i,this))}}}function checkFinished(e,t){const r=computeGoal(t);return isEqual$1(computeGoal(e.get()),r)}function createLoopUpdate(e,t=e.loop,r=e.to){let i=callProp(t);if(i){const a=!0!==i&&inferTo(i),n=(a||e).reverse,o=!a||a.reset;return createUpdate(_extends({},e,{loop:t,default:!1,pause:void 0,to:!n||isAsyncTo(r)?r:void 0,from:o?e.from:void 0,reset:o},a))}}function createUpdate(e){const{to:t,from:r}=e=inferTo(e),i=new Set;return is.obj(t)&&findDefined(t,i),is.obj(r)&&findDefined(r,i),e.keys=i.size?Array.from(i):null,e}function declareUpdate(e){const t=createUpdate(e);return is.und(t.default)&&(t.default=getDefaultProps(t)),t}function findDefined(e,t){eachProp(e,((e,r)=>null!=e&&t.add(r)))}const ACTIVE_EVENTS=["onStart","onRest","onChange","onPause","onResume"];function mergeActiveFn(e,t,r){e.animation[r]=t[r]!==getDefaultProp(t,r)?resolveProp(t[r],e.key):void 0}function sendEvent(e,t,...r){var i,a,n,o;null==(i=(a=e.animation)[t])||i.call(a,...r),null==(n=(o=e.defaultProps)[t])||n.call(o,...r)}const BATCHED_EVENTS=["onStart","onChange","onRest"];let nextId=1;class Controller{constructor(e,t){this.id=nextId++,this.springs={},this.queue=[],this.ref=void 0,this._flush=void 0,this._initialProps=void 0,this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._item=void 0,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start(_extends({default:!0},e))}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,r)=>e[r]=t.get())),e}set(e){for(const t in e){const r=e[t];is.und(r)||this.springs[t].set(r)}}update(e){return e&&this.queue.push(createUpdate(e)),this}start(e){let{queue:t}=this;return e?t=toArray(e).map(createUpdate):this.queue=[],this._flush?this._flush(this,t):(prepareKeys(this,t),flushUpdateQueue(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const r=this.springs;each(toArray(t),(t=>r[t].stop(!!e)))}else stopAsync(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(is.und(e))this.start({pause:!0});else{const t=this.springs;each(toArray(e),(e=>t[e].pause()))}return this}resume(e){if(is.und(e))this.start({pause:!1});else{const t=this.springs;each(toArray(e),(e=>t[e].resume()))}return this}each(e){eachProp(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:r}=this._events,i=this._active.size>0,a=this._changed.size>0;(i&&!this._started||a&&!this._started)&&(this._started=!0,flush(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const n=!i&&this._started,o=a||n&&r.size?this.get():null;a&&t.size&&flush(t,(([e,t])=>{t.value=o,e(t,this,this._item)})),n&&(this._started=!1,flush(r,(([e,t])=>{t.value=o,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}raf.onFrame(this._onFrame)}}function flushUpdateQueue(e,t){return Promise.all(t.map((t=>flushUpdate(e,t)))).then((t=>getCombinedResult(e,t)))}async function flushUpdate(e,t,r){const{keys:i,to:a,from:n,loop:o,onRest:s,onResolve:l}=t,p=is.obj(t.default)&&t.default;o&&(t.loop=!1),!1===a&&(t.to=null),!1===n&&(t.from=null);const c=is.arr(a)||is.fun(a)?a:void 0;c?(t.to=void 0,t.onRest=void 0,p&&(p.onRest=void 0)):each(BATCHED_EVENTS,(r=>{const i=t[r];if(is.fun(i)){const a=e._events[r];t[r]=({finished:e,cancelled:t})=>{const r=a.get(i);r?(e||(r.finished=!1),t&&(r.cancelled=!0)):a.set(i,{value:null,finished:e||!1,cancelled:t||!1})},p&&(p[r]=t[r])}}));const d=e._state;t.pause===!d.paused?(d.paused=t.pause,flushCalls(t.pause?d.pauseQueue:d.resumeQueue)):d.paused&&(t.pause=!0);const h=(i||Object.keys(e.springs)).map((r=>e.springs[r].start(t))),u=!0===t.cancel||!0===getDefaultProp(t,"cancel");(c||u&&d.asyncId)&&h.push(scheduleProps(++e._lastAsyncId,{props:t,state:d,actions:{pause:noop,resume:noop,start(t,r){u?(stopAsync(d,e._lastAsyncId),r(getCancelledResult(e))):(t.onRest=s,r(runAsync(c,t,d,e)))}}})),d.paused&&await new Promise((e=>{d.resumeQueue.add(e)}));const m=getCombinedResult(e,await Promise.all(h));if(o&&m.finished&&(!r||!m.noop)){const r=createLoopUpdate(t,o,a);if(r)return prepareKeys(e,[r]),flushUpdate(e,r,!0)}return l&&raf.batchedUpdates((()=>l(m,e,e.item))),m}function getSprings(e,t){const r=_extends({},e.springs);return t&&each(toArray(t),(e=>{is.und(e.keys)&&(e=createUpdate(e)),is.obj(e.to)||(e=_extends({},e,{to:void 0})),prepareSprings(r,e,(e=>createSpring(e)))})),setSprings(e,r),r}function setSprings(e,t){eachProp(t,((t,r)=>{e.springs[r]||(e.springs[r]=t,addFluidObserver(t,e))}))}function createSpring(e,t){const r=new SpringValue;return r.key=e,t&&addFluidObserver(r,t),r}function prepareSprings(e,t,r){t.keys&&each(t.keys,(i=>{(e[i]||(e[i]=r(i)))._prepareNode(t)}))}function prepareKeys(e,t){each(t,(t=>{prepareSprings(e.springs,t,(t=>createSpring(t,e)))}))}function _objectWithoutPropertiesLoose$2(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}const _excluded$6=["children"],SpringContext=e=>{let{children:t}=e,r=_objectWithoutPropertiesLoose$2(e,_excluded$6);const i=useContext(ctx),a=r.pause||!!i.pause,n=r.immediate||!!i.immediate;r=useMemoOne((()=>({pause:a,immediate:n})),[a,n]);const{Provider:o}=ctx;return React.createElement(o,{value:r},t)},ctx=makeContext(SpringContext,{});function makeContext(e,t){return Object.assign(e,React.createContext(t)),e.Provider._context=e,e.Consumer._context=e,e}SpringContext.Provider=ctx.Provider,SpringContext.Consumer=ctx.Consumer;const SpringRef=()=>{const e=[],t=function(t){deprecateDirectCall();const i=[];return each(e,((e,a)=>{if(is.und(t))i.push(e.start());else{const n=r(t,e,a);n&&i.push(e.start(n))}})),i};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const r=e.indexOf(t);~r&&e.splice(r,1)},t.pause=function(){return each(e,(e=>e.pause(...arguments))),this},t.resume=function(){return each(e,(e=>e.resume(...arguments))),this},t.set=function(t){each(e,(e=>e.set(t)))},t.start=function(t){const r=[];return each(e,((e,i)=>{if(is.und(t))r.push(e.start());else{const a=this._getProps(t,e,i);a&&r.push(e.start(a))}})),r},t.stop=function(){return each(e,(e=>e.stop(...arguments))),this},t.update=function(t){return each(e,((e,r)=>e.update(this._getProps(t,e,r)))),this};const r=function(e,t,r){return is.fun(e)?e(r,t):e};return t._getProps=r,t};function useSprings(e,t,r){const i=is.fun(t)&&t;i&&!r&&(r=[]);const a=useMemo((()=>i||3==arguments.length?SpringRef():void 0),[]),n=useRef(0),o=useForceUpdate(),s=useMemo((()=>({ctrls:[],queue:[],flush(e,t){const r=getSprings(e,t);return n.current>0&&!s.queue.length&&!Object.keys(r).some((t=>!e.springs[t]))?flushUpdateQueue(e,t):new Promise((i=>{setSprings(e,r),s.queue.push((()=>{i(flushUpdateQueue(e,t))})),o()}))}})),[]),l=useRef([...s.ctrls]),p=[],c=usePrev(e)||0;function d(e,r){for(let a=e;a<r;a++){const e=l.current[a]||(l.current[a]=new Controller(null,s.flush)),r=i?i(a,e):t[a];r&&(p[a]=declareUpdate(r))}}useMemo((()=>{each(l.current.slice(e,c),(e=>{detachRefs(e,a),e.stop(!0)})),l.current.length=e,d(c,e)}),[e]),useMemo((()=>{d(0,Math.min(c,e))}),r);const h=l.current.map(((e,t)=>getSprings(e,p[t]))),u=useContext(SpringContext),m=usePrev(u),f=u!==m&&hasProps(u);useIsomorphicLayoutEffect((()=>{n.current++,s.ctrls=l.current;const{queue:e}=s;e.length&&(s.queue=[],each(e,(e=>e()))),each(l.current,((e,t)=>{null==a||a.add(e),f&&e.start({default:u});const r=p[t];r&&(replaceRef(e,r.ref),e.ref?e.queue.push(r):e.start(r))}))})),useOnce((()=>()=>{each(s.ctrls,(e=>e.stop(!0)))}));const y=h.map((e=>_extends({},e)));return a?[y,a]:y}function useSpring(e,t){const r=is.fun(e),[[i],a]=useSprings(1,r?e:[e],r?t||[]:t);return r||2==arguments.length?[i,a]:i}let TransitionPhase;!function(e){e.MOUNT="mount",e.ENTER="enter",e.UPDATE="update",e.LEAVE="leave"}(TransitionPhase||(TransitionPhase={}));class Interpolation extends FrameValue{constructor(e,t){super(),this.key=void 0,this.idle=!0,this.calc=void 0,this._active=new Set,this.source=e,this.calc=createInterpolator(...t);const r=this._get(),i=getAnimatedType(r);setAnimated(this,i.create(r))}advance(e){const t=this._get();isEqual$1(t,this.get())||(getAnimated(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&checkIdle(this._active)&&becomeIdle(this)}_get(){const e=is.arr(this.source)?this.source.map(getFluidValue):toArray(getFluidValue(this.source));return this.calc(...e)}_start(){this.idle&&!checkIdle(this._active)&&(this.idle=!1,each(getPayload(this),(e=>{e.done=!1})),globals.skipAnimation?(raf.batchedUpdates((()=>this.advance())),becomeIdle(this)):frameLoop.start(this))}_attach(){let e=1;each(toArray(this.source),(t=>{hasFluidValue(t)&&addFluidObserver(t,this),isFrameValue(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){each(toArray(this.source),(e=>{hasFluidValue(e)&&removeFluidObserver(e,this)})),this._active.clear(),becomeIdle(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=toArray(this.source).reduce(((e,t)=>Math.max(e,(isFrameValue(t)?t.priority:0)+1)),0))}}function isIdle(e){return!1!==e.idle}function checkIdle(e){return!e.size||Array.from(e).every(isIdle)}function becomeIdle(e){e.idle||(e.idle=!0,each(getPayload(e),(e=>{e.done=!0})),callFluidObservers(e,{type:"idle",parent:e}))}function _objectWithoutPropertiesLoose$1(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}globals.assign({createStringInterpolator:createStringInterpolator,to:(e,t)=>new Interpolation(e,t)});const _excluded$2=["style","children","scrollTop","scrollLeft","viewBox"],isCustomPropRE=/^--/;function dangerousStyleValue(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||isCustomPropRE.test(e)||isUnitlessNumber.hasOwnProperty(e)&&isUnitlessNumber[e]?(""+t).trim():t+"px"}const attributeCache={};function applyAnimatedValues(e,t){if(!e.nodeType||!e.setAttribute)return!1;const r="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,i=t,{style:a,children:n,scrollTop:o,scrollLeft:s,viewBox:l}=i,p=_objectWithoutPropertiesLoose$1(i,_excluded$2),c=Object.values(p),d=Object.keys(p).map((t=>r||e.hasAttribute(t)?t:attributeCache[t]||(attributeCache[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==n&&(e.textContent=n);for(let t in a)if(a.hasOwnProperty(t)){const r=dangerousStyleValue(t,a[t]);isCustomPropRE.test(t)?e.style.setProperty(t,r):e.style[t]=r}d.forEach(((t,r)=>{e.setAttribute(t,c[r])})),void 0!==o&&(e.scrollTop=o),void 0!==s&&(e.scrollLeft=s),void 0!==l&&e.setAttribute("viewBox",l)}let isUnitlessNumber={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0};const prefixKey=(e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1),prefixes=["Webkit","Ms","Moz","O"];isUnitlessNumber=Object.keys(isUnitlessNumber).reduce(((e,t)=>(prefixes.forEach((r=>e[prefixKey(r,t)]=e[t])),e)),isUnitlessNumber);const _excluded$1$1=["x","y","z"],domTransforms=/^(matrix|translate|scale|rotate|skew)/,pxTransforms=/^(translate)/,degTransforms=/^(rotate|skew)/,addUnit=(e,t)=>is.num(e)&&0!==e?e+t:e,isValueIdentity=(e,t)=>is.arr(e)?e.every((e=>isValueIdentity(e,t))):is.num(e)?e===t:parseFloat(e)===t;class AnimatedStyle extends AnimatedObject{constructor(e){let{x:t,y:r,z:i}=e,a=_objectWithoutPropertiesLoose$1(e,_excluded$1$1);const n=[],o=[];(t||r||i)&&(n.push([t||0,r||0,i||0]),o.push((e=>[`translate3d(${e.map((e=>addUnit(e,"px"))).join(",")})`,isValueIdentity(e,0)]))),eachProp(a,((e,t)=>{if("transform"===t)n.push([e||""]),o.push((e=>[e,""===e]));else if(domTransforms.test(t)){if(delete a[t],is.und(e))return;const r=pxTransforms.test(t)?"px":degTransforms.test(t)?"deg":"";n.push(toArray(e)),o.push("rotate3d"===t?([e,t,i,a])=>[`rotate3d(${e},${t},${i},${addUnit(a,r)})`,isValueIdentity(a,0)]:e=>[`${t}(${e.map((e=>addUnit(e,r))).join(",")})`,isValueIdentity(e,t.startsWith("scale")?1:0)])}})),n.length&&(a.transform=new FluidTransform(n,o)),super(a)}}class FluidTransform extends FluidValue{constructor(e,t){super(),this._value=null,this.inputs=e,this.transforms=t}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return each(this.inputs,((r,i)=>{const a=getFluidValue(r[0]),[n,o]=this.transforms[i](is.arr(a)?a:r.map(getFluidValue));e+=" "+n,t=t&&o})),t?"none":e}observerAdded(e){1==e&&each(this.inputs,(e=>each(e,(e=>hasFluidValue(e)&&addFluidObserver(e,this)))))}observerRemoved(e){0==e&&each(this.inputs,(e=>each(e,(e=>hasFluidValue(e)&&removeFluidObserver(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),callFluidObservers(this,e)}}const primitives=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],_excluded=["scrollTop","scrollLeft"];globals.assign({batchedUpdates:unstable_batchedUpdates,createStringInterpolator:createStringInterpolator,colors:colors});const host=createHost(primitives,{applyAnimatedValues:applyAnimatedValues,createAnimatedStyle:e=>new AnimatedStyle(e),getComponentProps:e=>_objectWithoutPropertiesLoose$1(e,_excluded)}),animated=host.animated,AccordionContext=React__default.createContext(!1);var commonjsGlobal="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},chevronUp={},ChevronUpIcon;Object.defineProperty(chevronUp,"__esModule",{value:!0});var e$l=require$$0;const r$7=e=>e$l.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:e$l.jsx("path",{d:"M17.7279 14.2091C17.5059 14.4311 17.2492 14.5421 16.9579 14.5421C16.6659 14.5421 16.4089 14.4311 16.1869 14.2091L10.1659 8.18812L4.12389 14.2301C3.91589 14.4381 3.66589 14.5421 3.37389 14.5421C3.08256 14.5421 2.82589 14.4311 2.60389 14.2091C2.39523 14.0005 2.29089 13.7468 2.29089 13.4481C2.29089 13.1495 2.39523 12.8961 2.60389 12.6881L9.54089 5.75012C9.63823 5.65346 9.73889 5.58412 9.84289 5.54212C9.94689 5.50079 10.0546 5.48012 10.1659 5.48012C10.2772 5.48012 10.3849 5.50079 10.4889 5.54212C10.5929 5.58412 10.6936 5.65346 10.7909 5.75012L17.7489 12.7091C17.9716 12.9311 18.0759 13.1845 18.0619 13.4691C18.0479 13.7538 17.9366 14.0005 17.7279 14.2091Z",fill:"currentColor"})});r$7.displayName="ChevronUpIcon",ChevronUpIcon=chevronUp.ChevronUpIcon=r$7;const BaseColorSet={Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},BookingSGColorSet={Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}};var isArray$9=Array.isArray,isArray_1=isArray$9,freeGlobal$1="object"==typeof commonjsGlobal&&commonjsGlobal&&commonjsGlobal.Object===Object&&commonjsGlobal,_freeGlobal=freeGlobal$1,freeGlobal=_freeGlobal,freeSelf="object"==typeof self&&self&&self.Object===Object&&self,root$9=freeGlobal||freeSelf||Function("return this")(),_root=root$9,root$8=_root,Symbol$5=root$8.Symbol,_Symbol=Symbol$5,Symbol$4=_Symbol,objectProto$b=Object.prototype,hasOwnProperty$9=objectProto$b.hasOwnProperty,nativeObjectToString$1=objectProto$b.toString,symToStringTag$1=Symbol$4?Symbol$4.toStringTag:void 0;function getRawTag$1(e){var t=hasOwnProperty$9.call(e,symToStringTag$1),r=e[symToStringTag$1];try{e[symToStringTag$1]=void 0;var i=!0}catch(e){}var a=nativeObjectToString$1.call(e);return i&&(t?e[symToStringTag$1]=r:delete e[symToStringTag$1]),a}var _getRawTag=getRawTag$1,objectProto$a=Object.prototype,nativeObjectToString=objectProto$a.toString;function objectToString$1(e){return nativeObjectToString.call(e)}var _objectToString=objectToString$1,Symbol$3=_Symbol,getRawTag=_getRawTag,objectToString=_objectToString,nullTag="[object Null]",undefinedTag="[object Undefined]",symToStringTag=Symbol$3?Symbol$3.toStringTag:void 0;function baseGetTag$5(e){return null==e?void 0===e?undefinedTag:nullTag:symToStringTag&&symToStringTag in Object(e)?getRawTag(e):objectToString(e)}var _baseGetTag=baseGetTag$5;function isObjectLike$5(e){return null!=e&&"object"==typeof e}var isObjectLike_1=isObjectLike$5,baseGetTag$4=_baseGetTag,isObjectLike$4=isObjectLike_1,symbolTag$1="[object Symbol]";function isSymbol$4(e){return"symbol"==typeof e||isObjectLike$4(e)&&baseGetTag$4(e)==symbolTag$1}var isSymbol_1=isSymbol$4,isArray$8=isArray_1,isSymbol$3=isSymbol_1,reIsDeepProp=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,reIsPlainProp=/^\w*$/;function isKey$3(e,t){if(isArray$8(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!isSymbol$3(e))||(reIsPlainProp.test(e)||!reIsDeepProp.test(e)||null!=t&&e in Object(t))}var _isKey=isKey$3;function isObject$5(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}var isObject_1=isObject$5,baseGetTag$3=_baseGetTag,isObject$4=isObject_1,asyncTag="[object AsyncFunction]",funcTag$1="[object Function]",genTag="[object GeneratorFunction]",proxyTag="[object Proxy]";function isFunction$2(e){if(!isObject$4(e))return!1;var t=baseGetTag$3(e);return t==funcTag$1||t==genTag||t==asyncTag||t==proxyTag}var isFunction_1=isFunction$2,root$7=_root,coreJsData$1=root$7["__core-js_shared__"],_coreJsData=coreJsData$1,coreJsData=_coreJsData,maskSrcKey=(uid=/[^.]+$/.exec(coreJsData&&coreJsData.keys&&coreJsData.keys.IE_PROTO||""),uid?"Symbol(src)_1."+uid:""),uid;function isMasked$1(e){return!!maskSrcKey&&maskSrcKey in e}var _isMasked=isMasked$1,funcProto$1=Function.prototype,funcToString$1=funcProto$1.toString;function toSource$2(e){if(null!=e){try{return funcToString$1.call(e)}catch(e){}try{return e+""}catch(e){}}return""}var _toSource=toSource$2,isFunction$1=isFunction_1,isMasked=_isMasked,isObject$3=isObject_1,toSource$1=_toSource,reRegExpChar=/[\\^$.*+?()[\]{}|]/g,reIsHostCtor=/^\[object .+?Constructor\]$/,funcProto=Function.prototype,objectProto$9=Object.prototype,funcToString=funcProto.toString,hasOwnProperty$8=objectProto$9.hasOwnProperty,reIsNative=RegExp("^"+funcToString.call(hasOwnProperty$8).replace(reRegExpChar,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function baseIsNative$1(e){return!(!isObject$3(e)||isMasked(e))&&(isFunction$1(e)?reIsNative:reIsHostCtor).test(toSource$1(e))}var _baseIsNative=baseIsNative$1;function getValue$2(e,t){return null==e?void 0:e[t]}var _getValue=getValue$2,baseIsNative=_baseIsNative,getValue$1=_getValue;function getNative$6(e,t){var r=getValue$1(e,t);return baseIsNative(r)?r:void 0}var _getNative=getNative$6,getNative$5=_getNative,nativeCreate$4=getNative$5(Object,"create"),_nativeCreate=nativeCreate$4,nativeCreate$3=_nativeCreate;function hashClear$1(){this.__data__=nativeCreate$3?nativeCreate$3(null):{},this.size=0}var _hashClear=hashClear$1;function hashDelete$1(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var _hashDelete=hashDelete$1,nativeCreate$2=_nativeCreate,HASH_UNDEFINED$2="__lodash_hash_undefined__",objectProto$8=Object.prototype,hasOwnProperty$7=objectProto$8.hasOwnProperty;function hashGet$1(e){var t=this.__data__;if(nativeCreate$2){var r=t[e];return r===HASH_UNDEFINED$2?void 0:r}return hasOwnProperty$7.call(t,e)?t[e]:void 0}var _hashGet=hashGet$1,nativeCreate$1=_nativeCreate,objectProto$7=Object.prototype,hasOwnProperty$6=objectProto$7.hasOwnProperty;function hashHas$1(e){var t=this.__data__;return nativeCreate$1?void 0!==t[e]:hasOwnProperty$6.call(t,e)}var _hashHas=hashHas$1,nativeCreate=_nativeCreate,HASH_UNDEFINED$1="__lodash_hash_undefined__";function hashSet$1(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=nativeCreate&&void 0===t?HASH_UNDEFINED$1:t,this}var _hashSet=hashSet$1,hashClear=_hashClear,hashDelete=_hashDelete,hashGet=_hashGet,hashHas=_hashHas,hashSet=_hashSet;function Hash$1(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var i=e[t];this.set(i[0],i[1])}}Hash$1.prototype.clear=hashClear,Hash$1.prototype.delete=hashDelete,Hash$1.prototype.get=hashGet,Hash$1.prototype.has=hashHas,Hash$1.prototype.set=hashSet;var _Hash=Hash$1;function listCacheClear$1(){this.__data__=[],this.size=0}var _listCacheClear=listCacheClear$1;function eq$2(e,t){return e===t||e!=e&&t!=t}var eq_1=eq$2,eq$1=eq_1;function assocIndexOf$4(e,t){for(var r=e.length;r--;)if(eq$1(e[r][0],t))return r;return-1}var _assocIndexOf=assocIndexOf$4,assocIndexOf$3=_assocIndexOf,arrayProto=Array.prototype,splice=arrayProto.splice;function listCacheDelete$1(e){var t=this.__data__,r=assocIndexOf$3(t,e);return!(r<0)&&(r==t.length-1?t.pop():splice.call(t,r,1),--this.size,!0)}var _listCacheDelete=listCacheDelete$1,assocIndexOf$2=_assocIndexOf;function listCacheGet$1(e){var t=this.__data__,r=assocIndexOf$2(t,e);return r<0?void 0:t[r][1]}var _listCacheGet=listCacheGet$1,assocIndexOf$1=_assocIndexOf;function listCacheHas$1(e){return assocIndexOf$1(this.__data__,e)>-1}var _listCacheHas=listCacheHas$1,assocIndexOf=_assocIndexOf;function listCacheSet$1(e,t){var r=this.__data__,i=assocIndexOf(r,e);return i<0?(++this.size,r.push([e,t])):r[i][1]=t,this}var _listCacheSet=listCacheSet$1,listCacheClear=_listCacheClear,listCacheDelete=_listCacheDelete,listCacheGet=_listCacheGet,listCacheHas=_listCacheHas,listCacheSet=_listCacheSet;function ListCache$4(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var i=e[t];this.set(i[0],i[1])}}ListCache$4.prototype.clear=listCacheClear,ListCache$4.prototype.delete=listCacheDelete,ListCache$4.prototype.get=listCacheGet,ListCache$4.prototype.has=listCacheHas,ListCache$4.prototype.set=listCacheSet;var _ListCache=ListCache$4,getNative$4=_getNative,root$6=_root,Map$4=getNative$4(root$6,"Map"),_Map=Map$4,Hash=_Hash,ListCache$3=_ListCache,Map$3=_Map;function mapCacheClear$1(){this.size=0,this.__data__={hash:new Hash,map:new(Map$3||ListCache$3),string:new Hash}}var _mapCacheClear=mapCacheClear$1;function isKeyable$1(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}var _isKeyable=isKeyable$1,isKeyable=_isKeyable;function getMapData$4(e,t){var r=e.__data__;return isKeyable(t)?r["string"==typeof t?"string":"hash"]:r.map}var _getMapData=getMapData$4,getMapData$3=_getMapData;function mapCacheDelete$1(e){var t=getMapData$3(this,e).delete(e);return this.size-=t?1:0,t}var _mapCacheDelete=mapCacheDelete$1,getMapData$2=_getMapData;function mapCacheGet$1(e){return getMapData$2(this,e).get(e)}var _mapCacheGet=mapCacheGet$1,getMapData$1=_getMapData;function mapCacheHas$1(e){return getMapData$1(this,e).has(e)}var _mapCacheHas=mapCacheHas$1,getMapData=_getMapData;function mapCacheSet$1(e,t){var r=getMapData(this,e),i=r.size;return r.set(e,t),this.size+=r.size==i?0:1,this}var _mapCacheSet=mapCacheSet$1,mapCacheClear=_mapCacheClear,mapCacheDelete=_mapCacheDelete,mapCacheGet=_mapCacheGet,mapCacheHas=_mapCacheHas,mapCacheSet=_mapCacheSet;function MapCache$3(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var i=e[t];this.set(i[0],i[1])}}MapCache$3.prototype.clear=mapCacheClear,MapCache$3.prototype.delete=mapCacheDelete,MapCache$3.prototype.get=mapCacheGet,MapCache$3.prototype.has=mapCacheHas,MapCache$3.prototype.set=mapCacheSet;var _MapCache=MapCache$3,MapCache$2=_MapCache,FUNC_ERROR_TEXT$1="Expected a function";function memoize$1(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError(FUNC_ERROR_TEXT$1);var r=function(){var i=arguments,a=t?t.apply(this,i):i[0],n=r.cache;if(n.has(a))return n.get(a);var o=e.apply(this,i);return r.cache=n.set(a,o)||n,o};return r.cache=new(memoize$1.Cache||MapCache$2),r}memoize$1.Cache=MapCache$2;var memoize_1=memoize$1,memoize=memoize_1,MAX_MEMOIZE_SIZE=500;function memoizeCapped$1(e){var t=memoize(e,(function(e){return r.size===MAX_MEMOIZE_SIZE&&r.clear(),e})),r=t.cache;return t}var _memoizeCapped=memoizeCapped$1,memoizeCapped=_memoizeCapped,rePropName=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,reEscapeChar=/\\(\\)?/g,stringToPath$1=memoizeCapped((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(rePropName,(function(e,r,i,a){t.push(i?a.replace(reEscapeChar,"$1"):r||e)})),t})),_stringToPath=stringToPath$1;function arrayMap$1(e,t){for(var r=-1,i=null==e?0:e.length,a=Array(i);++r<i;)a[r]=t(e[r],r,e);return a}var _arrayMap=arrayMap$1,Symbol$2=_Symbol,arrayMap=_arrayMap,isArray$7=isArray_1,isSymbol$2=isSymbol_1,INFINITY$2=1/0,symbolProto$1=Symbol$2?Symbol$2.prototype:void 0,symbolToString=symbolProto$1?symbolProto$1.toString:void 0;function baseToString$1(e){if("string"==typeof e)return e;if(isArray$7(e))return arrayMap(e,baseToString$1)+"";if(isSymbol$2(e))return symbolToString?symbolToString.call(e):"";var t=e+"";return"0"==t&&1/e==-INFINITY$2?"-0":t}var _baseToString=baseToString$1,baseToString=_baseToString;function toString$3(e){return null==e?"":baseToString(e)}var toString_1=toString$3,isArray$6=isArray_1,isKey$2=_isKey,stringToPath=_stringToPath,toString$2=toString_1;function castPath$2(e,t){return isArray$6(e)?e:isKey$2(e,t)?[e]:stringToPath(toString$2(e))}var _castPath=castPath$2,isSymbol$1=isSymbol_1,INFINITY$1=1/0;function toKey$4(e){if("string"==typeof e||isSymbol$1(e))return e;var t=e+"";return"0"==t&&1/e==-INFINITY$1?"-0":t}var _toKey=toKey$4,castPath$1=_castPath,toKey$3=_toKey;function baseGet$2(e,t){for(var r=0,i=(t=castPath$1(t,e)).length;null!=e&&r<i;)e=e[toKey$3(t[r++])];return r&&r==i?e:void 0}var _baseGet=baseGet$2,baseGet$1=_baseGet;function get$1(e,t,r){var i=null==e?void 0:baseGet$1(e,t);return void 0===i?r:i}var get_1=get$1;const getValue=(e,t,r)=>t?get_1(r,t)||get_1(e,t):r||e,getCollection=(e,t)=>{const r=t||e.defaultValue;return get_1(e.collections,r)};var ThemeContextKeys;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme",e.designTokenScheme="designTokenScheme",e.resourceScheme="resourceScheme"}(ThemeContextKeys||(ThemeContextKeys={}));const ColorSpec={collections:{base:BaseColorSet,bookingsg:BookingSGColorSet},defaultValue:"base"},getThemeColors=e=>t=>{const r=t.theme,i=getCollection(ColorSpec,r[ThemeContextKeys.colorScheme]);return r.options&&r.options.color?getValue(i,e,r.options.color):getValue(i,e)},Color={Brand:{1:getThemeColors("Brand.1"),2:getThemeColors("Brand.2"),3:getThemeColors("Brand.3"),4:getThemeColors("Brand.4"),5:getThemeColors("Brand.5"),6:getThemeColors("Brand.6")},Primary:getThemeColors("Primary"),PrimaryDark:getThemeColors("PrimaryDark"),Secondary:getThemeColors("Secondary"),Accent:{Light:{1:getThemeColors("Accent.Light.1"),2:getThemeColors("Accent.Light.2"),3:getThemeColors("Accent.Light.3"),4:getThemeColors("Accent.Light.4"),5:getThemeColors("Accent.Light.5"),6:getThemeColors("Accent.Light.6")},Dark:{1:getThemeColors("Accent.Dark.1"),2:getThemeColors("Accent.Dark.2"),3:getThemeColors("Accent.Dark.3")}},Neutral:{1:getThemeColors("Neutral.1"),2:getThemeColors("Neutral.2"),3:getThemeColors("Neutral.3"),4:getThemeColors("Neutral.4"),5:getThemeColors("Neutral.5"),6:getThemeColors("Neutral.6"),7:getThemeColors("Neutral.7"),8:getThemeColors("Neutral.8")},Validation:{Green:{Text:getThemeColors("Validation.Green.Text"),Icon:getThemeColors("Validation.Green.Icon"),Border:getThemeColors("Validation.Green.Border"),Background:getThemeColors("Validation.Green.Background")},Orange:{Text:getThemeColors("Validation.Orange.Text"),Icon:getThemeColors("Validation.Orange.Icon"),Border:getThemeColors("Validation.Orange.Border"),Background:getThemeColors("Validation.Orange.Background"),Badge:getThemeColors("Validation.Orange.Badge")},Red:{Text:getThemeColors("Validation.Red.Text"),Icon:getThemeColors("Validation.Red.Icon"),Border:getThemeColors("Validation.Red.Border"),Background:getThemeColors("Validation.Red.Background")},Blue:{Text:getThemeColors("Validation.Blue.Text"),Icon:getThemeColors("Validation.Blue.Icon"),Border:getThemeColors("Validation.Blue.Border"),Background:getThemeColors("Validation.Blue.Background")}},Shadow:{Accent:getThemeColors("Shadow.Accent"),Red:getThemeColors("Shadow.Red"),Elevation:getThemeColors("Shadow.Elevation")}},Main$2=styled.button`
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

        ${({$highlight:e})=>e&&css`
                background-color: ${Color.Neutral[7]};
            `}
    }
`,Component$c=({children:e,focusHighlight:t=!0,focusOutline:r="none",...i},a)=>jsx(Main$2,{ref:a,$outline:r,$highlight:t,...i,children:e}),IconButton=React__default.forwardRef(Component$c),MediaWidths$1={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},getMediaQuerySpec=e=>Object.keys(MediaWidths$1).reduce(((t,r)=>{const i=MediaWidths$1[r];return t[r]=`@media screen and (${e}: ${i}px)`,t}),{}),MediaQuery={MaxWidth:getMediaQuerySpec("max-width"),MinWidth:getMediaQuerySpec("min-width")},MediaWidths=MediaWidths$1;var external={},ExternalIcon;Object.defineProperty(external,"__esModule",{value:!0});var C$d=require$$0;const e$k=e=>C$d.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:C$d.jsx("path",{d:"M4.25 17.5C3.764 17.5 3.35067 17.33 3.01 16.99C2.67 16.6493 2.5 16.236 2.5 15.75V4.25C2.5 3.764 2.67 3.35067 3.01 3.01C3.35067 2.67 3.764 2.5 4.25 2.5H9.208C9.444 2.5 9.649 2.58667 9.823 2.76C9.99633 2.934 10.083 3.139 10.083 3.375C10.083 3.611 9.99633 3.816 9.823 3.99C9.649 4.16333 9.444 4.25 9.208 4.25H4.25V15.75H15.75V10.792C15.75 10.556 15.8367 10.351 16.01 10.177C16.184 10.0037 16.389 9.917 16.625 9.917C16.861 9.917 17.066 10.0037 17.24 10.177C17.4133 10.351 17.5 10.556 17.5 10.792V15.75C17.5 16.236 17.33 16.6493 16.99 16.99C16.6493 17.33 16.236 17.5 15.75 17.5H4.25ZM7.5 12.5C7.33333 12.3333 7.25 12.1283 7.25 11.885C7.25 11.6423 7.33333 11.4377 7.5 11.271L14.521 4.25H12.708C12.472 4.25 12.2673 4.16333 12.094 3.99C11.92 3.816 11.833 3.611 11.833 3.375C11.833 3.139 11.92 2.934 12.094 2.76C12.2673 2.58667 12.472 2.5 12.708 2.5H16.625C16.861 2.5 17.066 2.58667 17.24 2.76C17.4133 2.934 17.5 3.139 17.5 3.375V7.292C17.5 7.528 17.4133 7.73267 17.24 7.906C17.066 8.08 16.861 8.167 16.625 8.167C16.389 8.167 16.184 8.08 16.01 7.906C15.8367 7.73267 15.75 7.528 15.75 7.292V5.479L8.708 12.521C8.54133 12.6877 8.34367 12.771 8.115 12.771C7.88567 12.771 7.68067 12.6807 7.5 12.5Z",fill:"currentColor"})});e$k.displayName="ExternalIcon",ExternalIcon=external.ExternalIcon=e$k;const FontFamily={OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},MerriWeather:"Merriweather"},BaseTextStyleSet={D1:{fontFamily:FontFamily.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:FontFamily.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:FontFamily.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:FontFamily.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:FontFamily.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:FontFamily.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:FontFamily.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:FontFamily.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:FontFamily.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:FontFamily.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:FontFamily.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:FontFamily.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:FontFamily.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:FontFamily.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},TextStyleSpec={collections:{base:BaseTextStyleSet},defaultValue:"base"},getThemeTextStyles=e=>t=>{const r=t.theme,i=getCollection(TextStyleSpec,r[ThemeContextKeys.textStyleScheme]);return r.options&&r.options.textStyle?getValue(i,e,r.options.textStyle):getValue(i,e)},TextStyle={D1:{fontFamily:getThemeTextStyles("D1.fontFamily"),fontSize:getThemeTextStyles("D1.fontSize"),fontWeight:getThemeTextStyles("D1.fontWeight"),lineHeight:getThemeTextStyles("D1.lineHeight"),letterSpacing:getThemeTextStyles("D1.letterSpacing")},D2:{fontFamily:getThemeTextStyles("D2.fontFamily"),fontSize:getThemeTextStyles("D2.fontSize"),fontWeight:getThemeTextStyles("D2.fontWeight"),lineHeight:getThemeTextStyles("D2.lineHeight"),letterSpacing:getThemeTextStyles("D2.letterSpacing")},D3:{fontFamily:getThemeTextStyles("D3.fontFamily"),fontSize:getThemeTextStyles("D3.fontSize"),fontWeight:getThemeTextStyles("D3.fontWeight"),lineHeight:getThemeTextStyles("D3.lineHeight"),letterSpacing:getThemeTextStyles("D3.letterSpacing")},D4:{fontFamily:getThemeTextStyles("D4.fontFamily"),fontSize:getThemeTextStyles("D4.fontSize"),fontWeight:getThemeTextStyles("D4.fontWeight"),lineHeight:getThemeTextStyles("D4.lineHeight"),letterSpacing:getThemeTextStyles("D4.letterSpacing")},DBody:{fontFamily:getThemeTextStyles("DBody.fontFamily"),fontSize:getThemeTextStyles("DBody.fontSize"),fontWeight:getThemeTextStyles("DBody.fontWeight"),lineHeight:getThemeTextStyles("DBody.lineHeight"),letterSpacing:getThemeTextStyles("DBody.letterSpacing")},H1:{fontFamily:getThemeTextStyles("H1.fontFamily"),fontSize:getThemeTextStyles("H1.fontSize"),fontWeight:getThemeTextStyles("H1.fontWeight"),lineHeight:getThemeTextStyles("H1.lineHeight"),letterSpacing:getThemeTextStyles("H1.letterSpacing")},H2:{fontFamily:getThemeTextStyles("H2.fontFamily"),fontSize:getThemeTextStyles("H2.fontSize"),fontWeight:getThemeTextStyles("H2.fontWeight"),lineHeight:getThemeTextStyles("H2.lineHeight"),letterSpacing:getThemeTextStyles("H2.letterSpacing")},H3:{fontFamily:getThemeTextStyles("H3.fontFamily"),fontSize:getThemeTextStyles("H3.fontSize"),fontWeight:getThemeTextStyles("H3.fontWeight"),lineHeight:getThemeTextStyles("H3.lineHeight"),letterSpacing:getThemeTextStyles("H3.letterSpacing")},H4:{fontFamily:getThemeTextStyles("H4.fontFamily"),fontSize:getThemeTextStyles("H4.fontSize"),fontWeight:getThemeTextStyles("H4.fontWeight"),lineHeight:getThemeTextStyles("H4.lineHeight"),letterSpacing:getThemeTextStyles("H4.letterSpacing")},H5:{fontFamily:getThemeTextStyles("H5.fontFamily"),fontSize:getThemeTextStyles("H5.fontSize"),fontWeight:getThemeTextStyles("H5.fontWeight"),lineHeight:getThemeTextStyles("H5.lineHeight"),letterSpacing:getThemeTextStyles("H5.letterSpacing")},H6:{fontFamily:getThemeTextStyles("H6.fontFamily"),fontSize:getThemeTextStyles("H6.fontSize"),fontWeight:getThemeTextStyles("H6.fontWeight"),lineHeight:getThemeTextStyles("H6.lineHeight"),letterSpacing:getThemeTextStyles("H6.letterSpacing")},Body:{fontFamily:getThemeTextStyles("Body.fontFamily"),fontSize:getThemeTextStyles("Body.fontSize"),fontWeight:getThemeTextStyles("Body.fontWeight"),lineHeight:getThemeTextStyles("Body.lineHeight"),letterSpacing:getThemeTextStyles("Body.letterSpacing")},BodySmall:{fontFamily:getThemeTextStyles("BodySmall.fontFamily"),fontSize:getThemeTextStyles("BodySmall.fontSize"),fontWeight:getThemeTextStyles("BodySmall.fontWeight"),lineHeight:getThemeTextStyles("BodySmall.lineHeight"),letterSpacing:getThemeTextStyles("BodySmall.letterSpacing")},XSmall:{fontFamily:getThemeTextStyles("XSmall.fontFamily"),fontSize:getThemeTextStyles("XSmall.fontSize"),fontWeight:getThemeTextStyles("XSmall.fontWeight"),lineHeight:getThemeTextStyles("XSmall.lineHeight"),letterSpacing:getThemeTextStyles("XSmall.letterSpacing")}},getFont=e=>{switch(e){case 700:case"bold":return FontFamily.OpenSans.Bold;case 600:case"semibold":return FontFamily.OpenSans.Semibold;case 300:case"light":return FontFamily.OpenSans.Light;case 400:case"regular":return FontFamily.OpenSans.Regular;default:return""}},getFontFamily=(e,t)=>r=>{const i=TextStyle[e].fontFamily(r),a=TextStyle[e].fontWeight(r);return Object.values(FontFamily.OpenSans).includes(i)?css`
                font-family: ${getFont(t)||getFont(a)||i};
                font-weight: normal !important;
            `:css`
            font-family: ${i};
            font-weight: ${(getFontWeight(t)||a)??"normal"};
        `},getFontWeight=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},getTextStyle=(e,t,r=!1)=>i=>{const a=TextStyle[e],n=a.fontSize(i);return css`
            ${getFontFamily(e,t)}
            font-size: ${n}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${a.letterSpacing(i)||0}rem !important;
            ${css`
                margin-bottom: ${n*(r?1.05:0)}rem;
            `}
        `},getDisplayStyle=(e=!1,t=!1)=>t?css`
            display: block;
        `:e?css`
            display: inline;
        `:css`
            display: block;
        `,TextStyleHelper={getFontFamily:getFontFamily,getTextStyle:getTextStyle,getDisplayStyle:getDisplayStyle};var Text;!function(e){e.D1=styled.h1`
        ${e=>css`
                ${TextStyleHelper.getTextStyle("D1",e.weight,e.paragraph)}
                color: ${Color.Neutral[1]};
                ${TextStyleHelper.getDisplayStyle(e.inline,e.paragraph)}
            `}
    `,e.D2=styled.h1`
        ${e=>css`
                ${TextStyleHelper.getTextStyle("D2",e.weight,e.paragraph)}
                color: ${Color.Neutral[1]};
                ${TextStyleHelper.getDisplayStyle(e.inline,e.paragraph)}
            `}
    `,e.D3=styled.h1`
        ${e=>css`
                ${TextStyleHelper.getTextStyle("D3",e.weight,e.paragraph)}
                color: ${Color.Neutral[1]};
                ${TextStyleHelper.getDisplayStyle(e.inline,e.paragraph)}
            `}
    `,e.D4=styled.h1`
        ${e=>css`
                ${TextStyleHelper.getTextStyle("D4",e.weight,e.paragraph)}
                color: ${Color.Neutral[1]};
                ${TextStyleHelper.getDisplayStyle(e.inline,e.paragraph)}
            `}
    `,e.DBody=styled.h1`
        ${e=>css`
                ${TextStyleHelper.getTextStyle("DBody",e.weight,e.paragraph)}
                color: ${Color.Neutral[1]};
                ${TextStyleHelper.getDisplayStyle(e.inline,e.paragraph)}
            `}
    `,e.H1=styled.h1`
        ${e=>css`
                ${TextStyleHelper.getTextStyle("H1",e.weight,e.paragraph)}
                color: ${Color.Neutral[1]};
                ${TextStyleHelper.getDisplayStyle(e.inline,e.paragraph)}
            `}
    `,e.H2=styled.h2`
        ${e=>css`
                ${TextStyleHelper.getTextStyle("H2",e.weight,e.paragraph)}
                color: ${Color.Neutral[1]};
                ${TextStyleHelper.getDisplayStyle(e.inline,e.paragraph)}
            `}
    `,e.H3=styled.h3`
        ${e=>css`
                ${TextStyleHelper.getTextStyle("H3",e.weight,e.paragraph)}
                color: ${Color.Neutral[1]};
                ${TextStyleHelper.getDisplayStyle(e.inline,e.paragraph)}
            `}
    `,e.H4=styled.h4`
        ${e=>css`
                ${TextStyleHelper.getTextStyle("H4",e.weight,e.paragraph)}
                color: ${Color.Neutral[1]};
                ${TextStyleHelper.getDisplayStyle(e.inline,e.paragraph)}
            `}
    `,e.H5=styled.h5`
        ${e=>css`
                ${TextStyleHelper.getTextStyle("H5",e.weight,e.paragraph)}
                color: ${Color.Neutral[1]};
                ${TextStyleHelper.getDisplayStyle(e.inline,e.paragraph)}
            `}
    `,e.H6=styled.h6`
        ${e=>css`
                ${TextStyleHelper.getTextStyle("H6",e.weight,e.paragraph)}
                color: ${Color.Neutral[1]};
                ${TextStyleHelper.getDisplayStyle(e.inline,e.paragraph)}
            `}
    `,e.Body=styled.p`
        ${e=>css`
                ${TextStyleHelper.getTextStyle("Body",e.weight,e.paragraph)}
                color: ${Color.Neutral[1]};
                ${TextStyleHelper.getDisplayStyle(e.inline,e.paragraph)}
            `}
    `,e.BodySmall=styled.p`
        ${e=>css`
                ${TextStyleHelper.getTextStyle("BodySmall",e.weight,e.paragraph)}
                color: ${Color.Neutral[1]};
                ${TextStyleHelper.getDisplayStyle(e.inline,e.paragraph)}
            `}
    `,e.XSmall=styled.span`
        ${e=>css`
                ${TextStyleHelper.getTextStyle("XSmall",e.weight,e.paragraph)}
                color: ${Color.Neutral[1]};
                ${TextStyleHelper.getDisplayStyle(e.inline,e.paragraph)}
            `}
    `,e.Hyperlink={Default:e=>HyperlinkComponent({...e,textStyle:"Body"}),Small:e=>HyperlinkComponent({...e,textStyle:"BodySmall"})}}(Text||(Text={}));const HyperlinkBase=styled.a`
    ${e=>css`
            ${TextStyleHelper.getTextStyle(e.textStyle,e.weight)}
            color: ${Color.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Color.Secondary};

                svg {
                    color: ${Color.Secondary};
                }
            }
        `}
`,StyledExternalIcon=styled(ExternalIcon)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,HyperlinkComponent=({external:e=!1,children:t,...r})=>jsxs(HyperlinkBase,{...r,children:[t,e&&jsx(StyledExternalIcon,{})]}),Base$1="all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",Custom=e=>`all ${e}ms cubic-bezier(0.21, 0.79, 0.53, 1)`,Transition={Base:Base$1,Custom:Custom},Container$n=styled.div`
    background-color: ${Color.Neutral[8]} !important;
    border-top: 1px solid ${Color.Neutral[6]};
    padding: ${e=>e.$isCollapsed?"0 0 1rem":"0"};

    ${MediaQuery.MaxWidth.mobileL} {
        padding: ${e=>e.$isCollapsed?".25rem 0 1.05rem":"0.5rem 0"};
    }
`,TitleContainer=styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`,TITLE_STYLE=e=>css`
    flex: 1;
    margin: 1rem 2rem ${e?.5:1}rem 0;
    transition: ${Transition.Base};
`,Title$4=styled(Text.H3)`
    ${e=>TITLE_STYLE(e.$isCollapsed)}
`,TitleH4=styled(Text.H4)`
    ${e=>TITLE_STYLE(e.$isCollapsed)}
`,ExpandCollapseButton$1=styled(IconButton)`
    height: 3.25rem;
    width: 3.25rem;
    padding: 1rem;
    transform: rotate(${e=>e.$isCollapsed?0:180}deg);
    transition: transform 300ms ease-in-out;
    margin: auto -1rem auto 0;
`,ChevronIcon$2=styled(ChevronUpIcon)`
    height: 1.25rem;
    width: 1.25rem;
    color: ${Color.Primary};
`,Expandable$2=styled(animated.div)`
    overflow: hidden;
`,DescriptionContainer$1=styled.div`
    display: inline-block;
    padding-right: 4rem;

    ${MediaQuery.MaxWidth.tablet} {
        padding-right: 0;
    }
`,AccordionItem=({title:e,children:t,expanded:r=!0,type:i="default",...a})=>{const n=useContext(AccordionContext),[o,s]=useState(n||r),l=a["data-testid"]||"accordion-item",p=useResizeDetector(),c=p.ref;useEffect((()=>{s(n)}),[n]),useEffect((()=>{s(r)}),[r]);const d=useSpring({height:o?p.height:0});return jsxs(Container$n,{"data-testid":l,className:a.className,$isCollapsed:o,children:[jsxs(TitleContainer,{children:[jsx("small"===i?TitleH4:Title$4,{"data-testid":`${l}-title`,$isCollapsed:o,children:e}),jsx(ExpandCollapseButton$1,{"data-testid":`${l}-expand-collapse-button`,onClick:e=>{e.preventDefault(),s((e=>!e))},$isCollapsed:o,focusHighlight:!1,focusOutline:"browser","aria-label":o?"Collapse":"Expand",children:jsx(ChevronIcon$2,{})})]}),jsx(Expandable$2,{style:d,$isCollapsed:o,"data-testid":`${l}-expandable-container`,children:jsx(DescriptionContainer$1,{ref:c,id:"content-container",children:t})})]})},OuterRing=styled.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`,rotate=keyframes`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,InnerRing1=styled.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||Color.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${rotate} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,InnerRing2=styled(InnerRing1)`
    animation-delay: -0.45s;
`,InnerRing3=styled(InnerRing1)`
    animation-delay: -0.3s;
`,InnerRing4=styled(InnerRing1)`
    animation-delay: -0.15s;
`,ComponentLoadingSpinner=({color:e,className:t,size:r=18})=>jsxs(OuterRing,{className:t,$size:r,$color:e,children:[jsx(InnerRing1,{id:"inner1",$size:r-2,$borderWidth:2}),jsx(InnerRing2,{id:"inner2",$size:r-2,$borderWidth:2}),jsx(InnerRing3,{id:"inner3",$size:r-2,$borderWidth:2}),jsx(InnerRing4,{id:"inner4",$size:r-2,$borderWidth:2})]});var RedirectScope;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(RedirectScope||(RedirectScope={}));const Main$1=styled.button`
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
    ${e=>{switch(e.$buttonStyle){case"secondary":return css`
                    background-color: ${Color.Neutral[8](e)};
                    border: 1px solid ${Color.Primary(e)};

                    span {
                        color: ${Color.Primary(e)};
                    }
                `;case"light":return css`
                    background-color: ${Color.Neutral[8](e)};
                    border: 1px solid ${Color.Neutral[5](e)};

                    span {
                        color: ${Color.Primary(e)};
                    }
                `;case"disabled":return css`
                    background-color: ${Color.Neutral[6](e)};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${Color.Neutral[3](e)};
                    }
                `;case"link":return css`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Color.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${Color.Secondary};
                        }
                    }
                `;default:return css`
                    background-color: ${Color.Primary(e)};
                    border: 1px solid transparent;

                    ${MediaQuery.MaxWidth.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${Color.Neutral[8](e)};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?css`
                    height: 2.5rem;
                    span {
                        ${TextStyleHelper.getTextStyle("H5","semibold")}
                    }

                    ${MediaQuery.MaxWidth.mobileS} {
                        height: auto;
                    }
                `:css`
                    height: 3rem;
                    span {
                        ${TextStyleHelper.getTextStyle("H4","semibold")}
                    }

                    ${MediaQuery.MaxWidth.mobileS} {
                        height: auto;
                    }
                `}
`,Spinner=styled(ComponentLoadingSpinner)`
    margin-right: 0.5rem;
    ${e=>{let t;switch(e.$buttonStyle){case"secondary":case"light":case"link":t=Color.Primary(e);break;case"disabled":t=Color.Neutral[3](e);break;default:t=Color.Neutral[8](e)}return css`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,DefaultComponent=(e,t)=>{const{children:r,disabled:i=!1,loading:a=!1,styleType:n="default",...o}=e,s={$buttonStyle:i?"disabled":n,$buttonSizeStyle:"default"};return jsxs(Main$1,{ref:t,"data-testid":o["data-testid"]||"button",disabled:i,...s,...o,children:[a&&jsx(Spinner,{...s}),jsx("span",{children:r})]})},SmallComponent=(e,t)=>{const{children:r,disabled:i=!1,loading:a=!1,styleType:n="default",...o}=e,s={$buttonStyle:i?"disabled":n,$buttonSizeStyle:"small"};return jsxs(Main$1,{ref:t,"data-testid":o["data-testid"]||"button",disabled:i,...s,...o,children:[a&&jsx(Spinner,{...s,size:16}),jsx("span",{children:r})]})},Button={Default:React__default.forwardRef(DefaultComponent),Small:React__default.forwardRef(SmallComponent)},Content$5=styled.div`
    width: 100%;
    border-bottom: 1px solid ${Color.Neutral[6]};
`,TitleWrapper=styled.div`
    display: flex;
    flex-direction: ${e=>e.$hasTitle?"row":"column"};
    align-items: ${e=>e.$hasTitle?"center":"flex-end"};
    padding-bottom: 1rem;

    ${MediaQuery.MaxWidth.mobileL} {
        justify-content: flex-end;
    }
`,Title$3=styled(Text.H2)`
    display: flex;
    align-self: flex-start;
    flex: 1;
    ${MediaQuery.MaxWidth.mobileL} {
        text-align: left;
    }

    ${e=>{if(!e.$showInMobile)return css`
                ${MediaQuery.MaxWidth.mobileL} {
                    display: none;
                    visibility: hidden;
                }
            `}}
`,ExpandCollapseLink=styled(Button.Small)`
    padding: 1.75rem 1rem; // larger clickable area
    margin: -1rem -1rem -1rem 0px;
    white-space: nowrap;
`,AccordionBase=({children:e,title:t,enableExpandAll:r=!0,showTitleInMobile:i=!1,className:a})=>{const[n,o]=useState(!0),s=e=>{e.preventDefault(),o((e=>!e))};return jsx(AccordionContext.Provider,{value:n,children:jsxs(Content$5,{className:a,children:[jsxs(TitleWrapper,{$hasTitle:!!t||i,children:[t&&jsx(Title$3,{$showInMobile:i,"data-testid":"accordion-title",children:t}),r&&jsx(ExpandCollapseLink,{"data-testid":"accordion-expand-collapse-button",onClick:s,styleType:"link",children:n?"Hide all":"Show all"})]}),e]})})},Accordion=Object.assign(AccordionBase,{Item:AccordionItem});var arrowRight={},ArrowRightIcon;Object.defineProperty(arrowRight,"__esModule",{value:!0});var e$j=require$$0;const r$6=e=>e$j.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:e$j.jsx("path",{d:"M9.39601 16.062C9.21534 15.882 9.12167 15.6807 9.11501 15.458C9.10767 15.236 9.19434 15.0347 9.37501 14.854L13.354 10.875H4.20801C3.97201 10.875 3.76734 10.7883 3.59401 10.615C3.42001 10.441 3.33301 10.236 3.33301 10C3.33301 9.764 3.42001 9.559 3.59401 9.385C3.76734 9.21167 3.97201 9.125 4.20801 9.125H13.354L9.37501 5.167C9.19434 4.98633 9.10767 4.78133 9.11501 4.552C9.12167 4.32267 9.21534 4.118 9.39601 3.938C9.57667 3.75733 9.77801 3.667 10 3.667C10.222 3.667 10.4233 3.75733 10.604 3.938L16.042 9.375C16.1393 9.45833 16.2087 9.55567 16.25 9.667C16.2913 9.77767 16.312 9.88867 16.312 10C16.312 10.1113 16.2913 10.219 16.25 10.323C16.2087 10.427 16.1393 10.5277 16.042 10.625L10.604 16.062C10.4233 16.2427 10.222 16.333 10 16.333C9.77801 16.333 9.57667 16.2427 9.39601 16.062Z",fill:"currentColor"})});r$6.displayName="ArrowRightIcon",ArrowRightIcon=arrowRight.ArrowRightIcon=r$6;const Wrapper$n=styled.div`
    padding: 0.5rem 1rem;
    display: flex;
    flex-direction: column;
    ${TextStyleHelper.getTextStyle("BodySmall","regular")}

    ${e=>{let t,r;switch(e.$type){case"error":t=Color.Validation.Red.Background(e),r=Color.Validation.Red.Border(e);break;case"success":default:t=Color.Validation.Green.Background(e),r=Color.Validation.Green.Border(e);break;case"warning":t=Color.Validation.Orange.Background(e),r=Color.Validation.Orange.Border(e)}return`\n\t\t\tbackground: ${t};\n\t\t\tborder-left: 2pt solid ${r};\n\t\t`}}

	p {
        ${TextStyleHelper.getTextStyle("BodySmall","regular")}
        margin: 0;

        strong {
            ${TextStyleHelper.getFontFamily("BodySmall","semibold")}
        }

        a {
            color: ${Color.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${Color.Secondary};
            }
        }
    }
`,ActionLinkText=styled(Text.Hyperlink.Small)`
    margin-bottom: 0;
    margin-top: 0.5rem;
    display: flex;
    align-items: center;
`,ArrowIcon=styled(ArrowRightIcon)`
    height: 1.375rem;
    width: 1.375rem;
    margin-left: 0.25rem;
`,Alert=({type:e,className:t,children:r,actionLink:i,...a})=>jsxs(Wrapper$n,{className:t,$type:e,"data-testid":a["data-testid"],children:[r,i&&jsxs(ActionLinkText,{weight:"semibold",...i,"data-testid":"action-link",children:[i.children,jsx(ArrowIcon,{})]})]});var lottie$1={exports:{}};(function(module,exports){var factory;"undefined"!=typeof navigator&&(factory=function(){var svgNS="http://www.w3.org/2000/svg",locationHref="",_useWebWorker=!1,initialDefaultFrame=-999999,setWebWorker=function(e){_useWebWorker=!!e},getWebWorker=function(){return _useWebWorker},setLocationHref=function(e){locationHref=e},getLocationHref=function(){return locationHref};function createTag(e){return document.createElement(e)}function extendPrototype(e,t){var r,i,a=e.length;for(r=0;r<a;r+=1)for(var n in i=e[r].prototype)Object.prototype.hasOwnProperty.call(i,n)&&(t.prototype[n]=i[n])}function getDescriptor(e,t){return Object.getOwnPropertyDescriptor(e,t)}function createProxyFunction(e){function t(){}return t.prototype=e,t}var audioControllerFactory=function(){function e(e){this.audios=[],this.audioFactory=e,this._volume=1,this._isMuted=!1}return e.prototype={addAudio:function(e){this.audios.push(e)},pause:function(){var e,t=this.audios.length;for(e=0;e<t;e+=1)this.audios[e].pause()},resume:function(){var e,t=this.audios.length;for(e=0;e<t;e+=1)this.audios[e].resume()},setRate:function(e){var t,r=this.audios.length;for(t=0;t<r;t+=1)this.audios[t].setRate(e)},createAudio:function(e){return this.audioFactory?this.audioFactory(e):window.Howl?new window.Howl({src:[e]}):{isPlaying:!1,play:function(){this.isPlaying=!0},seek:function(){this.isPlaying=!1},playing:function(){},rate:function(){},setVolume:function(){}}},setAudioFactory:function(e){this.audioFactory=e},setVolume:function(e){this._volume=e,this._updateVolume()},mute:function(){this._isMuted=!0,this._updateVolume()},unmute:function(){this._isMuted=!1,this._updateVolume()},getVolume:function(){return this._volume},_updateVolume:function(){var e,t=this.audios.length;for(e=0;e<t;e+=1)this.audios[e].volume(this._volume*(this._isMuted?0:1))}},function(){return new e}}(),createTypedArray=function(){function e(e,t){var r,i=0,a=[];switch(e){case"int16":case"uint8c":r=1;break;default:r=1.1}for(i=0;i<t;i+=1)a.push(r);return a}return"function"==typeof Uint8ClampedArray&&"function"==typeof Float32Array?function(t,r){return"float32"===t?new Float32Array(r):"int16"===t?new Int16Array(r):"uint8c"===t?new Uint8ClampedArray(r):e(t,r)}:e}();function createSizedArray(e){return Array.apply(null,{length:e})}function _typeof$6(e){return _typeof$6="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof$6(e)}var subframeEnabled=!0,expressionsPlugin=null,expressionsInterfaces=null,idPrefix$1="",isSafari=/^((?!chrome|android).)*safari/i.test(navigator.userAgent),bmPow=Math.pow,bmSqrt=Math.sqrt,bmFloor=Math.floor,bmMax=Math.max,bmMin=Math.min,BMMath={};!function(){var e,t=["abs","acos","acosh","asin","asinh","atan","atanh","atan2","ceil","cbrt","expm1","clz32","cos","cosh","exp","floor","fround","hypot","imul","log","log1p","log2","log10","max","min","pow","random","round","sign","sin","sinh","sqrt","tan","tanh","trunc","E","LN10","LN2","LOG10E","LOG2E","PI","SQRT1_2","SQRT2"],r=t.length;for(e=0;e<r;e+=1)BMMath[t[e]]=Math[t[e]]}(),BMMath.random=Math.random,BMMath.abs=function(e){if("object"===_typeof$6(e)&&e.length){var t,r=createSizedArray(e.length),i=e.length;for(t=0;t<i;t+=1)r[t]=Math.abs(e[t]);return r}return Math.abs(e)};var defaultCurveSegments=150,degToRads=Math.PI/180,roundCorner=.5519;function styleDiv(e){e.style.position="absolute",e.style.top=0,e.style.left=0,e.style.display="block",e.style.transformOrigin="0 0",e.style.webkitTransformOrigin="0 0",e.style.backfaceVisibility="visible",e.style.webkitBackfaceVisibility="visible",e.style.transformStyle="preserve-3d",e.style.webkitTransformStyle="preserve-3d",e.style.mozTransformStyle="preserve-3d"}function BMEnterFrameEvent(e,t,r,i){this.type=e,this.currentTime=t,this.totalTime=r,this.direction=i<0?-1:1}function BMCompleteEvent(e,t){this.type=e,this.direction=t<0?-1:1}function BMCompleteLoopEvent(e,t,r,i){this.type=e,this.currentLoop=r,this.totalLoops=t,this.direction=i<0?-1:1}function BMSegmentStartEvent(e,t,r){this.type=e,this.firstFrame=t,this.totalFrames=r}function BMDestroyEvent(e,t){this.type=e,this.target=t}function BMRenderFrameErrorEvent(e,t){this.type="renderFrameError",this.nativeError=e,this.currentTime=t}function BMConfigErrorEvent(e){this.type="configError",this.nativeError=e}var createElementID=(_count=0,function(){return idPrefix$1+"__lottie_element_"+(_count+=1)}),_count;function HSVtoRGB(e,t,r){var i,a,n,o,s,l,p,c;switch(l=r*(1-t),p=r*(1-(s=6*e-(o=Math.floor(6*e)))*t),c=r*(1-(1-s)*t),o%6){case 0:i=r,a=c,n=l;break;case 1:i=p,a=r,n=l;break;case 2:i=l,a=r,n=c;break;case 3:i=l,a=p,n=r;break;case 4:i=c,a=l,n=r;break;case 5:i=r,a=l,n=p}return[i,a,n]}function RGBtoHSV(e,t,r){var i,a=Math.max(e,t,r),n=Math.min(e,t,r),o=a-n,s=0===a?0:o/a,l=a/255;switch(a){case n:i=0;break;case e:i=t-r+o*(t<r?6:0),i/=6*o;break;case t:i=r-e+2*o,i/=6*o;break;case r:i=e-t+4*o,i/=6*o}return[i,s,l]}function addSaturationToRGB(e,t){var r=RGBtoHSV(255*e[0],255*e[1],255*e[2]);return r[1]+=t,r[1]>1?r[1]=1:r[1]<=0&&(r[1]=0),HSVtoRGB(r[0],r[1],r[2])}function addBrightnessToRGB(e,t){var r=RGBtoHSV(255*e[0],255*e[1],255*e[2]);return r[2]+=t,r[2]>1?r[2]=1:r[2]<0&&(r[2]=0),HSVtoRGB(r[0],r[1],r[2])}function addHueToRGB(e,t){var r=RGBtoHSV(255*e[0],255*e[1],255*e[2]);return r[0]+=t/360,r[0]>1?r[0]-=1:r[0]<0&&(r[0]+=1),HSVtoRGB(r[0],r[1],r[2])}var rgbToHex=function(){var e,t,r=[];for(e=0;e<256;e+=1)t=e.toString(16),r[e]=1===t.length?"0"+t:t;return function(e,t,i){return e<0&&(e=0),t<0&&(t=0),i<0&&(i=0),"#"+r[e]+r[t]+r[i]}}(),setSubframeEnabled=function(e){subframeEnabled=!!e},getSubframeEnabled=function(){return subframeEnabled},setExpressionsPlugin=function(e){expressionsPlugin=e},getExpressionsPlugin=function(){return expressionsPlugin},setExpressionInterfaces=function(e){expressionsInterfaces=e},getExpressionInterfaces=function(){return expressionsInterfaces},setDefaultCurveSegments=function(e){defaultCurveSegments=e},getDefaultCurveSegments=function(){return defaultCurveSegments},setIdPrefix=function(e){idPrefix$1=e};function createNS(e){return document.createElementNS(svgNS,e)}function _typeof$5(e){return _typeof$5="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof$5(e)}var dataManager=function(){var e,t,r=1,i=[],a={onmessage:function(){},postMessage:function(t){e({data:t})}},n={postMessage:function(e){a.onmessage({data:e})}};function o(){t||(t=function(t){if(window.Worker&&window.Blob&&getWebWorker()){var r=new Blob(["var _workerSelf = self; self.onmessage = ",t.toString()],{type:"text/javascript"}),i=URL.createObjectURL(r);return new Worker(i)}return e=t,a}((function(e){if(n.dataManager||(n.dataManager=function(){function e(a,n){var o,s,l,p,c,h,u=a.length;for(s=0;s<u;s+=1)if("ks"in(o=a[s])&&!o.completed){if(o.completed=!0,o.hasMask){var m=o.masksProperties;for(p=m.length,l=0;l<p;l+=1)if(m[l].pt.k.i)i(m[l].pt.k);else for(h=m[l].pt.k.length,c=0;c<h;c+=1)m[l].pt.k[c].s&&i(m[l].pt.k[c].s[0]),m[l].pt.k[c].e&&i(m[l].pt.k[c].e[0])}0===o.ty?(o.layers=t(o.refId,n),e(o.layers,n)):4===o.ty?r(o.shapes):5===o.ty&&d(o)}}function t(e,t){var r=function(e,t){for(var r=0,i=t.length;r<i;){if(t[r].id===e)return t[r];r+=1}return null}(e,t);return r?r.layers.__used?JSON.parse(JSON.stringify(r.layers)):(r.layers.__used=!0,r.layers):null}function r(e){var t,a,n;for(t=e.length-1;t>=0;t-=1)if("sh"===e[t].ty)if(e[t].ks.k.i)i(e[t].ks.k);else for(n=e[t].ks.k.length,a=0;a<n;a+=1)e[t].ks.k[a].s&&i(e[t].ks.k[a].s[0]),e[t].ks.k[a].e&&i(e[t].ks.k[a].e[0]);else"gr"===e[t].ty&&r(e[t].it)}function i(e){var t,r=e.i.length;for(t=0;t<r;t+=1)e.i[t][0]+=e.v[t][0],e.i[t][1]+=e.v[t][1],e.o[t][0]+=e.v[t][0],e.o[t][1]+=e.v[t][1]}function a(e,t){var r=t?t.split("."):[100,100,100];return e[0]>r[0]||!(r[0]>e[0])&&(e[1]>r[1]||!(r[1]>e[1])&&(e[2]>r[2]||!(r[2]>e[2])&&null))}var n,o=function(){var e=[4,4,14];function t(e){var t,r,i,a=e.length;for(t=0;t<a;t+=1)5===e[t].ty&&(i=void 0,i=(r=e[t]).t.d,r.t.d={k:[{s:i,t:0}]})}return function(r){if(a(e,r.v)&&(t(r.layers),r.assets)){var i,n=r.assets.length;for(i=0;i<n;i+=1)r.assets[i].layers&&t(r.assets[i].layers)}}}(),s=(n=[4,7,99],function(e){if(e.chars&&!a(n,e.v)){var t,i=e.chars.length;for(t=0;t<i;t+=1){var o=e.chars[t];o.data&&o.data.shapes&&(r(o.data.shapes),o.data.ip=0,o.data.op=99999,o.data.st=0,o.data.sr=1,o.data.ks={p:{k:[0,0],a:0},s:{k:[100,100],a:0},a:{k:[0,0],a:0},r:{k:0,a:0},o:{k:100,a:0}},e.chars[t].t||(o.data.shapes.push({ty:"no"}),o.data.shapes[0].it.push({p:{k:[0,0],a:0},s:{k:[100,100],a:0},a:{k:[0,0],a:0},r:{k:0,a:0},o:{k:100,a:0},sk:{k:0,a:0},sa:{k:0,a:0},ty:"tr"})))}}}),l=function(){var e=[5,7,15];function t(e){var t,r,i=e.length;for(t=0;t<i;t+=1)5===e[t].ty&&(r=void 0,"number"==typeof(r=e[t].t.p).a&&(r.a={a:0,k:r.a}),"number"==typeof r.p&&(r.p={a:0,k:r.p}),"number"==typeof r.r&&(r.r={a:0,k:r.r}))}return function(r){if(a(e,r.v)&&(t(r.layers),r.assets)){var i,n=r.assets.length;for(i=0;i<n;i+=1)r.assets[i].layers&&t(r.assets[i].layers)}}}(),p=function(){var e=[4,1,9];function t(e){var r,i,a,n=e.length;for(r=0;r<n;r+=1)if("gr"===e[r].ty)t(e[r].it);else if("fl"===e[r].ty||"st"===e[r].ty)if(e[r].c.k&&e[r].c.k[0].i)for(a=e[r].c.k.length,i=0;i<a;i+=1)e[r].c.k[i].s&&(e[r].c.k[i].s[0]/=255,e[r].c.k[i].s[1]/=255,e[r].c.k[i].s[2]/=255,e[r].c.k[i].s[3]/=255),e[r].c.k[i].e&&(e[r].c.k[i].e[0]/=255,e[r].c.k[i].e[1]/=255,e[r].c.k[i].e[2]/=255,e[r].c.k[i].e[3]/=255);else e[r].c.k[0]/=255,e[r].c.k[1]/=255,e[r].c.k[2]/=255,e[r].c.k[3]/=255}function r(e){var r,i=e.length;for(r=0;r<i;r+=1)4===e[r].ty&&t(e[r].shapes)}return function(t){if(a(e,t.v)&&(r(t.layers),t.assets)){var i,n=t.assets.length;for(i=0;i<n;i+=1)t.assets[i].layers&&r(t.assets[i].layers)}}}(),c=function(){var e=[4,4,18];function t(e){var r,i,a;for(r=e.length-1;r>=0;r-=1)if("sh"===e[r].ty)if(e[r].ks.k.i)e[r].ks.k.c=e[r].closed;else for(a=e[r].ks.k.length,i=0;i<a;i+=1)e[r].ks.k[i].s&&(e[r].ks.k[i].s[0].c=e[r].closed),e[r].ks.k[i].e&&(e[r].ks.k[i].e[0].c=e[r].closed);else"gr"===e[r].ty&&t(e[r].it)}function r(e){var r,i,a,n,o,s,l=e.length;for(i=0;i<l;i+=1){if((r=e[i]).hasMask){var p=r.masksProperties;for(n=p.length,a=0;a<n;a+=1)if(p[a].pt.k.i)p[a].pt.k.c=p[a].cl;else for(s=p[a].pt.k.length,o=0;o<s;o+=1)p[a].pt.k[o].s&&(p[a].pt.k[o].s[0].c=p[a].cl),p[a].pt.k[o].e&&(p[a].pt.k[o].e[0].c=p[a].cl)}4===r.ty&&t(r.shapes)}}return function(t){if(a(e,t.v)&&(r(t.layers),t.assets)){var i,n=t.assets.length;for(i=0;i<n;i+=1)t.assets[i].layers&&r(t.assets[i].layers)}}}();function d(e){0===e.t.a.length&&e.t.p}var h={completeData:function(r){r.__complete||(p(r),o(r),s(r),l(r),c(r),e(r.layers,r.assets),function(r,i){if(r){var a=0,n=r.length;for(a=0;a<n;a+=1)1===r[a].t&&(r[a].data.layers=t(r[a].data.refId,i),e(r[a].data.layers,i))}}(r.chars,r.assets),r.__complete=!0)}};return h.checkColors=p,h.checkChars=s,h.checkPathProperties=l,h.checkShapes=c,h.completeLayers=e,h}()),n.assetLoader||(n.assetLoader=function(){function e(e){var t=e.getResponseHeader("content-type");return t&&"json"===e.responseType&&-1!==t.indexOf("json")||e.response&&"object"===_typeof$5(e.response)?e.response:e.response&&"string"==typeof e.response?JSON.parse(e.response):e.responseText?JSON.parse(e.responseText):null}return{load:function(t,r,i,a){var n,o=new XMLHttpRequest;try{o.responseType="json"}catch(e){}o.onreadystatechange=function(){if(4===o.readyState)if(200===o.status)n=e(o),i(n);else try{n=e(o),i(n)}catch(e){a&&a(e)}};try{o.open(["G","E","T"].join(""),t,!0)}catch(e){o.open(["G","E","T"].join(""),r+"/"+t,!0)}o.send()}}}()),"loadAnimation"===e.data.type)n.assetLoader.load(e.data.path,e.data.fullPath,(function(t){n.dataManager.completeData(t),n.postMessage({id:e.data.id,payload:t,status:"success"})}),(function(){n.postMessage({id:e.data.id,status:"error"})}));else if("complete"===e.data.type){var t=e.data.animation;n.dataManager.completeData(t),n.postMessage({id:e.data.id,payload:t,status:"success"})}else"loadData"===e.data.type&&n.assetLoader.load(e.data.path,e.data.fullPath,(function(t){n.postMessage({id:e.data.id,payload:t,status:"success"})}),(function(){n.postMessage({id:e.data.id,status:"error"})}))})),t.onmessage=function(e){var t=e.data,r=t.id,a=i[r];i[r]=null,"success"===t.status?a.onComplete(t.payload):a.onError&&a.onError()})}function s(e,t){var a="processId_"+(r+=1);return i[a]={onComplete:e,onError:t},a}return{loadAnimation:function(e,r,i){o();var a=s(r,i);t.postMessage({type:"loadAnimation",path:e,fullPath:window.location.origin+window.location.pathname,id:a})},loadData:function(e,r,i){o();var a=s(r,i);t.postMessage({type:"loadData",path:e,fullPath:window.location.origin+window.location.pathname,id:a})},completeAnimation:function(e,r,i){o();var a=s(r,i);t.postMessage({type:"complete",animation:e,id:a})}}}(),ImagePreloader=function(){var e=function(){var e=createTag("canvas");e.width=1,e.height=1;var t=e.getContext("2d");return t.fillStyle="rgba(0,0,0,0)",t.fillRect(0,0,1,1),e}();function t(){this.loadedAssets+=1,this.loadedAssets===this.totalImages&&this.loadedFootagesCount===this.totalFootages&&this.imagesLoadedCb&&this.imagesLoadedCb(null)}function r(){this.loadedFootagesCount+=1,this.loadedAssets===this.totalImages&&this.loadedFootagesCount===this.totalFootages&&this.imagesLoadedCb&&this.imagesLoadedCb(null)}function i(e,t,r){var i="";if(e.e)i=e.p;else if(t){var a=e.p;-1!==a.indexOf("images/")&&(a=a.split("/")[1]),i=t+a}else i=r,i+=e.u?e.u:"",i+=e.p;return i}function a(e){var t=0,r=setInterval(function(){(e.getBBox().width||t>500)&&(this._imageLoaded(),clearInterval(r)),t+=1}.bind(this),50)}function n(e){var t={assetData:e},r=i(e,this.assetsPath,this.path);return dataManager.loadData(r,function(e){t.img=e,this._footageLoaded()}.bind(this),function(){t.img={},this._footageLoaded()}.bind(this)),t}function o(){this._imageLoaded=t.bind(this),this._footageLoaded=r.bind(this),this.testImageLoaded=a.bind(this),this.createFootageData=n.bind(this),this.assetsPath="",this.path="",this.totalImages=0,this.totalFootages=0,this.loadedAssets=0,this.loadedFootagesCount=0,this.imagesLoadedCb=null,this.images=[]}return o.prototype={loadAssets:function(e,t){var r;this.imagesLoadedCb=t;var i=e.length;for(r=0;r<i;r+=1)e[r].layers||(e[r].t&&"seq"!==e[r].t?3===e[r].t&&(this.totalFootages+=1,this.images.push(this.createFootageData(e[r]))):(this.totalImages+=1,this.images.push(this._createImageData(e[r]))))},setAssetsPath:function(e){this.assetsPath=e||""},setPath:function(e){this.path=e||""},loadedImages:function(){return this.totalImages===this.loadedAssets},loadedFootages:function(){return this.totalFootages===this.loadedFootagesCount},destroy:function(){this.imagesLoadedCb=null,this.images.length=0},getAsset:function(e){for(var t=0,r=this.images.length;t<r;){if(this.images[t].assetData===e)return this.images[t].img;t+=1}return null},createImgData:function(t){var r=i(t,this.assetsPath,this.path),a=createTag("img");a.crossOrigin="anonymous",a.addEventListener("load",this._imageLoaded,!1),a.addEventListener("error",function(){n.img=e,this._imageLoaded()}.bind(this),!1),a.src=r;var n={img:a,assetData:t};return n},createImageData:function(t){var r=i(t,this.assetsPath,this.path),a=createNS("image");isSafari?this.testImageLoaded(a):a.addEventListener("load",this._imageLoaded,!1),a.addEventListener("error",function(){n.img=e,this._imageLoaded()}.bind(this),!1),a.setAttributeNS("http://www.w3.org/1999/xlink","href",r),this._elementHelper.append?this._elementHelper.append(a):this._elementHelper.appendChild(a);var n={img:a,assetData:t};return n},imageLoaded:t,footageLoaded:r,setCacheType:function(e,t){"svg"===e?(this._elementHelper=t,this._createImageData=this.createImageData.bind(this)):this._createImageData=this.createImgData.bind(this)}},o}();function BaseEvent(){}BaseEvent.prototype={triggerEvent:function(e,t){if(this._cbs[e])for(var r=this._cbs[e],i=0;i<r.length;i+=1)r[i](t)},addEventListener:function(e,t){return this._cbs[e]||(this._cbs[e]=[]),this._cbs[e].push(t),function(){this.removeEventListener(e,t)}.bind(this)},removeEventListener:function(e,t){if(t){if(this._cbs[e]){for(var r=0,i=this._cbs[e].length;r<i;)this._cbs[e][r]===t&&(this._cbs[e].splice(r,1),r-=1,i-=1),r+=1;this._cbs[e].length||(this._cbs[e]=null)}}else this._cbs[e]=null}};var markerParser=function(){function e(e){for(var t,r=e.split("\r\n"),i={},a=0,n=0;n<r.length;n+=1)2===(t=r[n].split(":")).length&&(i[t[0]]=t[1].trim(),a+=1);if(0===a)throw new Error;return i}return function(t){for(var r=[],i=0;i<t.length;i+=1){var a=t[i],n={time:a.tm,duration:a.dr};try{n.payload=JSON.parse(t[i].cm)}catch(r){try{n.payload=e(t[i].cm)}catch(e){n.payload={name:t[i].cm}}}r.push(n)}return r}}(),ProjectInterface=function(){function e(e){this.compositions.push(e)}return function(){function t(e){for(var t=0,r=this.compositions.length;t<r;){if(this.compositions[t].data&&this.compositions[t].data.nm===e)return this.compositions[t].prepareFrame&&this.compositions[t].data.xt&&this.compositions[t].prepareFrame(this.currentFrame),this.compositions[t].compInterface;t+=1}return null}return t.compositions=[],t.currentFrame=0,t.registerComposition=e,t}}(),renderers={},registerRenderer=function(e,t){renderers[e]=t};function getRenderer(e){return renderers[e]}function getRegisteredRenderer(){if(renderers.canvas)return"canvas";for(var e in renderers)if(renderers[e])return e;return""}function _typeof$4(e){return _typeof$4="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof$4(e)}var AnimationItem=function(){this._cbs=[],this.name="",this.path="",this.isLoaded=!1,this.currentFrame=0,this.currentRawFrame=0,this.firstFrame=0,this.totalFrames=0,this.frameRate=0,this.frameMult=0,this.playSpeed=1,this.playDirection=1,this.playCount=0,this.animationData={},this.assets=[],this.isPaused=!0,this.autoplay=!1,this.loop=!0,this.renderer=null,this.animationID=createElementID(),this.assetsPath="",this.timeCompleted=0,this.segmentPos=0,this.isSubframeEnabled=getSubframeEnabled(),this.segments=[],this._idle=!0,this._completedLoop=!1,this.projectInterface=ProjectInterface(),this.imagePreloader=new ImagePreloader,this.audioController=audioControllerFactory(),this.markers=[],this.configAnimation=this.configAnimation.bind(this),this.onSetupError=this.onSetupError.bind(this),this.onSegmentComplete=this.onSegmentComplete.bind(this),this.drawnFrameEvent=new BMEnterFrameEvent("drawnFrame",0,0,0)};extendPrototype([BaseEvent],AnimationItem),AnimationItem.prototype.setParams=function(e){(e.wrapper||e.container)&&(this.wrapper=e.wrapper||e.container);var t="svg";e.animType?t=e.animType:e.renderer&&(t=e.renderer);var r=getRenderer(t);this.renderer=new r(this,e.rendererSettings),this.imagePreloader.setCacheType(t,this.renderer.globalData.defs),this.renderer.setProjectInterface(this.projectInterface),this.animType=t,""===e.loop||null===e.loop||void 0===e.loop||!0===e.loop?this.loop=!0:!1===e.loop?this.loop=!1:this.loop=parseInt(e.loop,10),this.autoplay=!("autoplay"in e)||e.autoplay,this.name=e.name?e.name:"",this.autoloadSegments=!Object.prototype.hasOwnProperty.call(e,"autoloadSegments")||e.autoloadSegments,this.assetsPath=e.assetsPath,this.initialSegment=e.initialSegment,e.audioFactory&&this.audioController.setAudioFactory(e.audioFactory),e.animationData?this.setupAnimation(e.animationData):e.path&&(-1!==e.path.lastIndexOf("\\")?this.path=e.path.substr(0,e.path.lastIndexOf("\\")+1):this.path=e.path.substr(0,e.path.lastIndexOf("/")+1),this.fileName=e.path.substr(e.path.lastIndexOf("/")+1),this.fileName=this.fileName.substr(0,this.fileName.lastIndexOf(".json")),dataManager.loadAnimation(e.path,this.configAnimation,this.onSetupError))},AnimationItem.prototype.onSetupError=function(){this.trigger("data_failed")},AnimationItem.prototype.setupAnimation=function(e){dataManager.completeAnimation(e,this.configAnimation)},AnimationItem.prototype.setData=function(e,t){t&&"object"!==_typeof$4(t)&&(t=JSON.parse(t));var r={wrapper:e,animationData:t},i=e.attributes;r.path=i.getNamedItem("data-animation-path")?i.getNamedItem("data-animation-path").value:i.getNamedItem("data-bm-path")?i.getNamedItem("data-bm-path").value:i.getNamedItem("bm-path")?i.getNamedItem("bm-path").value:"",r.animType=i.getNamedItem("data-anim-type")?i.getNamedItem("data-anim-type").value:i.getNamedItem("data-bm-type")?i.getNamedItem("data-bm-type").value:i.getNamedItem("bm-type")?i.getNamedItem("bm-type").value:i.getNamedItem("data-bm-renderer")?i.getNamedItem("data-bm-renderer").value:i.getNamedItem("bm-renderer")?i.getNamedItem("bm-renderer").value:getRegisteredRenderer()||"canvas";var a=i.getNamedItem("data-anim-loop")?i.getNamedItem("data-anim-loop").value:i.getNamedItem("data-bm-loop")?i.getNamedItem("data-bm-loop").value:i.getNamedItem("bm-loop")?i.getNamedItem("bm-loop").value:"";"false"===a?r.loop=!1:"true"===a?r.loop=!0:""!==a&&(r.loop=parseInt(a,10));var n=i.getNamedItem("data-anim-autoplay")?i.getNamedItem("data-anim-autoplay").value:i.getNamedItem("data-bm-autoplay")?i.getNamedItem("data-bm-autoplay").value:!i.getNamedItem("bm-autoplay")||i.getNamedItem("bm-autoplay").value;r.autoplay="false"!==n,r.name=i.getNamedItem("data-name")?i.getNamedItem("data-name").value:i.getNamedItem("data-bm-name")?i.getNamedItem("data-bm-name").value:i.getNamedItem("bm-name")?i.getNamedItem("bm-name").value:"","false"===(i.getNamedItem("data-anim-prerender")?i.getNamedItem("data-anim-prerender").value:i.getNamedItem("data-bm-prerender")?i.getNamedItem("data-bm-prerender").value:i.getNamedItem("bm-prerender")?i.getNamedItem("bm-prerender").value:"")&&(r.prerender=!1),r.path?this.setParams(r):this.trigger("destroy")},AnimationItem.prototype.includeLayers=function(e){e.op>this.animationData.op&&(this.animationData.op=e.op,this.totalFrames=Math.floor(e.op-this.animationData.ip));var t,r,i=this.animationData.layers,a=i.length,n=e.layers,o=n.length;for(r=0;r<o;r+=1)for(t=0;t<a;){if(i[t].id===n[r].id){i[t]=n[r];break}t+=1}if((e.chars||e.fonts)&&(this.renderer.globalData.fontManager.addChars(e.chars),this.renderer.globalData.fontManager.addFonts(e.fonts,this.renderer.globalData.defs)),e.assets)for(a=e.assets.length,t=0;t<a;t+=1)this.animationData.assets.push(e.assets[t]);this.animationData.__complete=!1,dataManager.completeAnimation(this.animationData,this.onSegmentComplete)},AnimationItem.prototype.onSegmentComplete=function(e){this.animationData=e;var t=getExpressionsPlugin();t&&t.initExpressions(this),this.loadNextSegment()},AnimationItem.prototype.loadNextSegment=function(){var e=this.animationData.segments;if(!e||0===e.length||!this.autoloadSegments)return this.trigger("data_ready"),void(this.timeCompleted=this.totalFrames);var t=e.shift();this.timeCompleted=t.time*this.frameRate;var r=this.path+this.fileName+"_"+this.segmentPos+".json";this.segmentPos+=1,dataManager.loadData(r,this.includeLayers.bind(this),function(){this.trigger("data_failed")}.bind(this))},AnimationItem.prototype.loadSegments=function(){this.animationData.segments||(this.timeCompleted=this.totalFrames),this.loadNextSegment()},AnimationItem.prototype.imagesLoaded=function(){this.trigger("loaded_images"),this.checkLoaded()},AnimationItem.prototype.preloadImages=function(){this.imagePreloader.setAssetsPath(this.assetsPath),this.imagePreloader.setPath(this.path),this.imagePreloader.loadAssets(this.animationData.assets,this.imagesLoaded.bind(this))},AnimationItem.prototype.configAnimation=function(e){if(this.renderer)try{this.animationData=e,this.initialSegment?(this.totalFrames=Math.floor(this.initialSegment[1]-this.initialSegment[0]),this.firstFrame=Math.round(this.initialSegment[0])):(this.totalFrames=Math.floor(this.animationData.op-this.animationData.ip),this.firstFrame=Math.round(this.animationData.ip)),this.renderer.configAnimation(e),e.assets||(e.assets=[]),this.assets=this.animationData.assets,this.frameRate=this.animationData.fr,this.frameMult=this.animationData.fr/1e3,this.renderer.searchExtraCompositions(e.assets),this.markers=markerParser(e.markers||[]),this.trigger("config_ready"),this.preloadImages(),this.loadSegments(),this.updaFrameModifier(),this.waitForFontsLoaded(),this.isPaused&&this.audioController.pause()}catch(e){this.triggerConfigError(e)}},AnimationItem.prototype.waitForFontsLoaded=function(){this.renderer&&(this.renderer.globalData.fontManager.isLoaded?this.checkLoaded():setTimeout(this.waitForFontsLoaded.bind(this),20))},AnimationItem.prototype.checkLoaded=function(){if(!this.isLoaded&&this.renderer.globalData.fontManager.isLoaded&&(this.imagePreloader.loadedImages()||"canvas"!==this.renderer.rendererType)&&this.imagePreloader.loadedFootages()){this.isLoaded=!0;var e=getExpressionsPlugin();e&&e.initExpressions(this),this.renderer.initItems(),setTimeout(function(){this.trigger("DOMLoaded")}.bind(this),0),this.gotoFrame(),this.autoplay&&this.play()}},AnimationItem.prototype.resize=function(e,t){var r="number"==typeof e?e:void 0,i="number"==typeof t?t:void 0;this.renderer.updateContainerSize(r,i)},AnimationItem.prototype.setSubframe=function(e){this.isSubframeEnabled=!!e},AnimationItem.prototype.gotoFrame=function(){this.currentFrame=this.isSubframeEnabled?this.currentRawFrame:~~this.currentRawFrame,this.timeCompleted!==this.totalFrames&&this.currentFrame>this.timeCompleted&&(this.currentFrame=this.timeCompleted),this.trigger("enterFrame"),this.renderFrame(),this.trigger("drawnFrame")},AnimationItem.prototype.renderFrame=function(){if(!1!==this.isLoaded&&this.renderer)try{this.renderer.renderFrame(this.currentFrame+this.firstFrame)}catch(e){this.triggerRenderFrameError(e)}},AnimationItem.prototype.play=function(e){e&&this.name!==e||!0===this.isPaused&&(this.isPaused=!1,this.trigger("_pause"),this.audioController.resume(),this._idle&&(this._idle=!1,this.trigger("_active")))},AnimationItem.prototype.pause=function(e){e&&this.name!==e||!1===this.isPaused&&(this.isPaused=!0,this.trigger("_play"),this._idle=!0,this.trigger("_idle"),this.audioController.pause())},AnimationItem.prototype.togglePause=function(e){e&&this.name!==e||(!0===this.isPaused?this.play():this.pause())},AnimationItem.prototype.stop=function(e){e&&this.name!==e||(this.pause(),this.playCount=0,this._completedLoop=!1,this.setCurrentRawFrameValue(0))},AnimationItem.prototype.getMarkerData=function(e){for(var t,r=0;r<this.markers.length;r+=1)if((t=this.markers[r]).payload&&t.payload.name===e)return t;return null},AnimationItem.prototype.goToAndStop=function(e,t,r){if(!r||this.name===r){var i=Number(e);if(isNaN(i)){var a=this.getMarkerData(e);a&&this.goToAndStop(a.time,!0)}else t?this.setCurrentRawFrameValue(e):this.setCurrentRawFrameValue(e*this.frameModifier);this.pause()}},AnimationItem.prototype.goToAndPlay=function(e,t,r){if(!r||this.name===r){var i=Number(e);if(isNaN(i)){var a=this.getMarkerData(e);a&&(a.duration?this.playSegments([a.time,a.time+a.duration],!0):this.goToAndStop(a.time,!0))}else this.goToAndStop(i,t,r);this.play()}},AnimationItem.prototype.advanceTime=function(e){if(!0!==this.isPaused&&!1!==this.isLoaded){var t=this.currentRawFrame+e*this.frameModifier,r=!1;t>=this.totalFrames-1&&this.frameModifier>0?this.loop&&this.playCount!==this.loop?t>=this.totalFrames?(this.playCount+=1,this.checkSegments(t%this.totalFrames)||(this.setCurrentRawFrameValue(t%this.totalFrames),this._completedLoop=!0,this.trigger("loopComplete"))):this.setCurrentRawFrameValue(t):this.checkSegments(t>this.totalFrames?t%this.totalFrames:0)||(r=!0,t=this.totalFrames-1):t<0?this.checkSegments(t%this.totalFrames)||(!this.loop||this.playCount--<=0&&!0!==this.loop?(r=!0,t=0):(this.setCurrentRawFrameValue(this.totalFrames+t%this.totalFrames),this._completedLoop?this.trigger("loopComplete"):this._completedLoop=!0)):this.setCurrentRawFrameValue(t),r&&(this.setCurrentRawFrameValue(t),this.pause(),this.trigger("complete"))}},AnimationItem.prototype.adjustSegment=function(e,t){this.playCount=0,e[1]<e[0]?(this.frameModifier>0&&(this.playSpeed<0?this.setSpeed(-this.playSpeed):this.setDirection(-1)),this.totalFrames=e[0]-e[1],this.timeCompleted=this.totalFrames,this.firstFrame=e[1],this.setCurrentRawFrameValue(this.totalFrames-.001-t)):e[1]>e[0]&&(this.frameModifier<0&&(this.playSpeed<0?this.setSpeed(-this.playSpeed):this.setDirection(1)),this.totalFrames=e[1]-e[0],this.timeCompleted=this.totalFrames,this.firstFrame=e[0],this.setCurrentRawFrameValue(.001+t)),this.trigger("segmentStart")},AnimationItem.prototype.setSegment=function(e,t){var r=-1;this.isPaused&&(this.currentRawFrame+this.firstFrame<e?r=e:this.currentRawFrame+this.firstFrame>t&&(r=t-e)),this.firstFrame=e,this.totalFrames=t-e,this.timeCompleted=this.totalFrames,-1!==r&&this.goToAndStop(r,!0)},AnimationItem.prototype.playSegments=function(e,t){if(t&&(this.segments.length=0),"object"===_typeof$4(e[0])){var r,i=e.length;for(r=0;r<i;r+=1)this.segments.push(e[r])}else this.segments.push(e);this.segments.length&&t&&this.adjustSegment(this.segments.shift(),0),this.isPaused&&this.play()},AnimationItem.prototype.resetSegments=function(e){this.segments.length=0,this.segments.push([this.animationData.ip,this.animationData.op]),e&&this.checkSegments(0)},AnimationItem.prototype.checkSegments=function(e){return!!this.segments.length&&(this.adjustSegment(this.segments.shift(),e),!0)},AnimationItem.prototype.destroy=function(e){e&&this.name!==e||!this.renderer||(this.renderer.destroy(),this.imagePreloader.destroy(),this.trigger("destroy"),this._cbs=null,this.onEnterFrame=null,this.onLoopComplete=null,this.onComplete=null,this.onSegmentStart=null,this.onDestroy=null,this.renderer=null,this.renderer=null,this.imagePreloader=null,this.projectInterface=null)},AnimationItem.prototype.setCurrentRawFrameValue=function(e){this.currentRawFrame=e,this.gotoFrame()},AnimationItem.prototype.setSpeed=function(e){this.playSpeed=e,this.updaFrameModifier()},AnimationItem.prototype.setDirection=function(e){this.playDirection=e<0?-1:1,this.updaFrameModifier()},AnimationItem.prototype.setLoop=function(e){this.loop=e},AnimationItem.prototype.setVolume=function(e,t){t&&this.name!==t||this.audioController.setVolume(e)},AnimationItem.prototype.getVolume=function(){return this.audioController.getVolume()},AnimationItem.prototype.mute=function(e){e&&this.name!==e||this.audioController.mute()},AnimationItem.prototype.unmute=function(e){e&&this.name!==e||this.audioController.unmute()},AnimationItem.prototype.updaFrameModifier=function(){this.frameModifier=this.frameMult*this.playSpeed*this.playDirection,this.audioController.setRate(this.playSpeed*this.playDirection)},AnimationItem.prototype.getPath=function(){return this.path},AnimationItem.prototype.getAssetsPath=function(e){var t="";if(e.e)t=e.p;else if(this.assetsPath){var r=e.p;-1!==r.indexOf("images/")&&(r=r.split("/")[1]),t=this.assetsPath+r}else t=this.path,t+=e.u?e.u:"",t+=e.p;return t},AnimationItem.prototype.getAssetData=function(e){for(var t=0,r=this.assets.length;t<r;){if(e===this.assets[t].id)return this.assets[t];t+=1}return null},AnimationItem.prototype.hide=function(){this.renderer.hide()},AnimationItem.prototype.show=function(){this.renderer.show()},AnimationItem.prototype.getDuration=function(e){return e?this.totalFrames:this.totalFrames/this.frameRate},AnimationItem.prototype.updateDocumentData=function(e,t,r){try{this.renderer.getElementByPath(e).updateDocumentData(t,r)}catch(e){}},AnimationItem.prototype.trigger=function(e){if(this._cbs&&this._cbs[e])switch(e){case"enterFrame":this.triggerEvent(e,new BMEnterFrameEvent(e,this.currentFrame,this.totalFrames,this.frameModifier));break;case"drawnFrame":this.drawnFrameEvent.currentTime=this.currentFrame,this.drawnFrameEvent.totalTime=this.totalFrames,this.drawnFrameEvent.direction=this.frameModifier,this.triggerEvent(e,this.drawnFrameEvent);break;case"loopComplete":this.triggerEvent(e,new BMCompleteLoopEvent(e,this.loop,this.playCount,this.frameMult));break;case"complete":this.triggerEvent(e,new BMCompleteEvent(e,this.frameMult));break;case"segmentStart":this.triggerEvent(e,new BMSegmentStartEvent(e,this.firstFrame,this.totalFrames));break;case"destroy":this.triggerEvent(e,new BMDestroyEvent(e,this));break;default:this.triggerEvent(e)}"enterFrame"===e&&this.onEnterFrame&&this.onEnterFrame.call(this,new BMEnterFrameEvent(e,this.currentFrame,this.totalFrames,this.frameMult)),"loopComplete"===e&&this.onLoopComplete&&this.onLoopComplete.call(this,new BMCompleteLoopEvent(e,this.loop,this.playCount,this.frameMult)),"complete"===e&&this.onComplete&&this.onComplete.call(this,new BMCompleteEvent(e,this.frameMult)),"segmentStart"===e&&this.onSegmentStart&&this.onSegmentStart.call(this,new BMSegmentStartEvent(e,this.firstFrame,this.totalFrames)),"destroy"===e&&this.onDestroy&&this.onDestroy.call(this,new BMDestroyEvent(e,this))},AnimationItem.prototype.triggerRenderFrameError=function(e){var t=new BMRenderFrameErrorEvent(e,this.currentFrame);this.triggerEvent("error",t),this.onError&&this.onError.call(this,t)},AnimationItem.prototype.triggerConfigError=function(e){var t=new BMConfigErrorEvent(e,this.currentFrame);this.triggerEvent("error",t),this.onError&&this.onError.call(this,t)};var animationManager=function(){var e={},t=[],r=0,i=0,a=0,n=!0,o=!1;function s(e){for(var r=0,a=e.target;r<i;)t[r].animation===a&&(t.splice(r,1),r-=1,i-=1,a.isPaused||c()),r+=1}function l(e,r){if(!e)return null;for(var a=0;a<i;){if(t[a].elem===e&&null!==t[a].elem)return t[a].animation;a+=1}var n=new AnimationItem;return d(n,e),n.setData(e,r),n}function p(){a+=1,m()}function c(){a-=1}function d(e,r){e.addEventListener("destroy",s),e.addEventListener("_active",p),e.addEventListener("_idle",c),t.push({elem:r,animation:e}),i+=1}function h(e){var s,l=e-r;for(s=0;s<i;s+=1)t[s].animation.advanceTime(l);r=e,a&&!o?window.requestAnimationFrame(h):n=!0}function u(e){r=e,window.requestAnimationFrame(h)}function m(){!o&&a&&n&&(window.requestAnimationFrame(u),n=!1)}return e.registerAnimation=l,e.loadAnimation=function(e){var t=new AnimationItem;return d(t,null),t.setParams(e),t},e.setSpeed=function(e,r){var a;for(a=0;a<i;a+=1)t[a].animation.setSpeed(e,r)},e.setDirection=function(e,r){var a;for(a=0;a<i;a+=1)t[a].animation.setDirection(e,r)},e.play=function(e){var r;for(r=0;r<i;r+=1)t[r].animation.play(e)},e.pause=function(e){var r;for(r=0;r<i;r+=1)t[r].animation.pause(e)},e.stop=function(e){var r;for(r=0;r<i;r+=1)t[r].animation.stop(e)},e.togglePause=function(e){var r;for(r=0;r<i;r+=1)t[r].animation.togglePause(e)},e.searchAnimations=function(e,t,r){var i,a=[].concat([].slice.call(document.getElementsByClassName("lottie")),[].slice.call(document.getElementsByClassName("bodymovin"))),n=a.length;for(i=0;i<n;i+=1)r&&a[i].setAttribute("data-bm-type",r),l(a[i],e);if(t&&0===n){r||(r="svg");var o=document.getElementsByTagName("body")[0];o.innerText="";var s=createTag("div");s.style.width="100%",s.style.height="100%",s.setAttribute("data-bm-type",r),o.appendChild(s),l(s,e)}},e.resize=function(){var e;for(e=0;e<i;e+=1)t[e].animation.resize()},e.goToAndStop=function(e,r,a){var n;for(n=0;n<i;n+=1)t[n].animation.goToAndStop(e,r,a)},e.destroy=function(e){var r;for(r=i-1;r>=0;r-=1)t[r].animation.destroy(e)},e.freeze=function(){o=!0},e.unfreeze=function(){o=!1,m()},e.setVolume=function(e,r){var a;for(a=0;a<i;a+=1)t[a].animation.setVolume(e,r)},e.mute=function(e){var r;for(r=0;r<i;r+=1)t[r].animation.mute(e)},e.unmute=function(e){var r;for(r=0;r<i;r+=1)t[r].animation.unmute(e)},e.getRegisteredAnimations=function(){var e,r=t.length,i=[];for(e=0;e<r;e+=1)i.push(t[e].animation);return i},e}(),BezierFactory=function(){var e={getBezierEasing:function(e,r,i,a,n){var o=n||("bez_"+e+"_"+r+"_"+i+"_"+a).replace(/\./g,"p");if(t[o])return t[o];var s=new c([e,r,i,a]);return t[o]=s,s}},t={},r=11,i=1/(r-1),a="function"==typeof Float32Array;function n(e,t){return 1-3*t+3*e}function o(e,t){return 3*t-6*e}function s(e){return 3*e}function l(e,t,r){return((n(t,r)*e+o(t,r))*e+s(t))*e}function p(e,t,r){return 3*n(t,r)*e*e+2*o(t,r)*e+s(t)}function c(e){this._p=e,this._mSampleValues=a?new Float32Array(r):new Array(r),this._precomputed=!1,this.get=this.get.bind(this)}return c.prototype={get:function(e){var t=this._p[0],r=this._p[1],i=this._p[2],a=this._p[3];return this._precomputed||this._precompute(),t===r&&i===a?e:0===e?0:1===e?1:l(this._getTForX(e),r,a)},_precompute:function(){var e=this._p[0],t=this._p[1],r=this._p[2],i=this._p[3];this._precomputed=!0,e===t&&r===i||this._calcSampleValues()},_calcSampleValues:function(){for(var e=this._p[0],t=this._p[2],a=0;a<r;++a)this._mSampleValues[a]=l(a*i,e,t)},_getTForX:function(e){for(var t=this._p[0],a=this._p[2],n=this._mSampleValues,o=0,s=1,c=r-1;s!==c&&n[s]<=e;++s)o+=i;var d=o+(e-n[--s])/(n[s+1]-n[s])*i,h=p(d,t,a);return h>=.001?function(e,t,r,i){for(var a=0;a<4;++a){var n=p(t,r,i);if(0===n)return t;t-=(l(t,r,i)-e)/n}return t}(e,d,t,a):0===h?d:function(e,t,r,i,a){var n,o,s=0;do{(n=l(o=t+(r-t)/2,i,a)-e)>0?r=o:t=o}while(Math.abs(n)>1e-7&&++s<10);return o}(e,o,o+i,t,a)}},e}(),pooling={double:function(e){return e.concat(createSizedArray(e.length))}},poolFactory=function(e,t,r){var i=0,a=e,n=createSizedArray(a);return{newElement:function(){return i?n[i-=1]:t()},release:function(e){i===a&&(n=pooling.double(n),a*=2),r&&r(e),n[i]=e,i+=1}}},bezierLengthPool=poolFactory(8,(function(){return{addedLength:0,percents:createTypedArray("float32",getDefaultCurveSegments()),lengths:createTypedArray("float32",getDefaultCurveSegments())}})),segmentsLengthPool=poolFactory(8,(function(){return{lengths:[],totalLength:0}}),(function(e){var t,r=e.lengths.length;for(t=0;t<r;t+=1)bezierLengthPool.release(e.lengths[t]);e.lengths.length=0}));function bezFunction(){var e=Math;function t(e,t,r,i,a,n){var o=e*i+t*a+r*n-a*i-n*e-r*t;return o>-.001&&o<.001}var r=function(e,t,r,i){var a,n,o,s,l,p,c=getDefaultCurveSegments(),d=0,h=[],u=[],m=bezierLengthPool.newElement();for(o=r.length,a=0;a<c;a+=1){for(l=a/(c-1),p=0,n=0;n<o;n+=1)s=bmPow(1-l,3)*e[n]+3*bmPow(1-l,2)*l*r[n]+3*(1-l)*bmPow(l,2)*i[n]+bmPow(l,3)*t[n],h[n]=s,null!==u[n]&&(p+=bmPow(h[n]-u[n],2)),u[n]=h[n];p&&(d+=p=bmSqrt(p)),m.percents[a]=l,m.lengths[a]=d}return m.addedLength=d,m};function i(e){this.segmentLength=0,this.points=new Array(e)}function a(e,t){this.partialLength=e,this.point=t}var n,o=(n={},function(e,r,o,s){var l=(e[0]+"_"+e[1]+"_"+r[0]+"_"+r[1]+"_"+o[0]+"_"+o[1]+"_"+s[0]+"_"+s[1]).replace(/\./g,"p");if(!n[l]){var p,c,d,h,u,m,f,y=getDefaultCurveSegments(),g=0,_=null;2===e.length&&(e[0]!==r[0]||e[1]!==r[1])&&t(e[0],e[1],r[0],r[1],e[0]+o[0],e[1]+o[1])&&t(e[0],e[1],r[0],r[1],r[0]+s[0],r[1]+s[1])&&(y=2);var x=new i(y);for(d=o.length,p=0;p<y;p+=1){for(f=createSizedArray(d),u=p/(y-1),m=0,c=0;c<d;c+=1)h=bmPow(1-u,3)*e[c]+3*bmPow(1-u,2)*u*(e[c]+o[c])+3*(1-u)*bmPow(u,2)*(r[c]+s[c])+bmPow(u,3)*r[c],f[c]=h,null!==_&&(m+=bmPow(f[c]-_[c],2));g+=m=bmSqrt(m),x.points[p]=new a(m,f),_=f}x.segmentLength=g,n[l]=x}return n[l]});function s(e,t){var r=t.percents,i=t.lengths,a=r.length,n=bmFloor((a-1)*e),o=e*t.addedLength,s=0;if(n===a-1||0===n||o===i[n])return r[n];for(var l=i[n]>o?-1:1,p=!0;p;)if(i[n]<=o&&i[n+1]>o?(s=(o-i[n])/(i[n+1]-i[n]),p=!1):n+=l,n<0||n>=a-1){if(n===a-1)return r[n];p=!1}return r[n]+(r[n+1]-r[n])*s}var l=createTypedArray("float32",8);return{getSegmentsLength:function(e){var t,i=segmentsLengthPool.newElement(),a=e.c,n=e.v,o=e.o,s=e.i,l=e._length,p=i.lengths,c=0;for(t=0;t<l-1;t+=1)p[t]=r(n[t],n[t+1],o[t],s[t+1]),c+=p[t].addedLength;return a&&l&&(p[t]=r(n[t],n[0],o[t],s[0]),c+=p[t].addedLength),i.totalLength=c,i},getNewSegment:function(t,r,i,a,n,o,p){n<0?n=0:n>1&&(n=1);var c,d=s(n,p),h=s(o=o>1?1:o,p),u=t.length,m=1-d,f=1-h,y=m*m*m,g=d*m*m*3,_=d*d*m*3,x=d*d*d,b=m*m*f,v=d*m*f+m*d*f+m*m*h,C=d*d*f+m*d*h+d*m*h,S=d*d*h,$=m*f*f,w=d*f*f+m*h*f+m*f*h,T=d*h*f+m*h*h+d*f*h,k=d*h*h,E=f*f*f,A=h*f*f+f*h*f+f*f*h,P=h*h*f+f*h*h+h*f*h,I=h*h*h;for(c=0;c<u;c+=1)l[4*c]=e.round(1e3*(y*t[c]+g*i[c]+_*a[c]+x*r[c]))/1e3,l[4*c+1]=e.round(1e3*(b*t[c]+v*i[c]+C*a[c]+S*r[c]))/1e3,l[4*c+2]=e.round(1e3*($*t[c]+w*i[c]+T*a[c]+k*r[c]))/1e3,l[4*c+3]=e.round(1e3*(E*t[c]+A*i[c]+P*a[c]+I*r[c]))/1e3;return l},getPointInSegment:function(t,r,i,a,n,o){var l=s(n,o),p=1-l;return[e.round(1e3*(p*p*p*t[0]+(l*p*p+p*l*p+p*p*l)*i[0]+(l*l*p+p*l*l+l*p*l)*a[0]+l*l*l*r[0]))/1e3,e.round(1e3*(p*p*p*t[1]+(l*p*p+p*l*p+p*p*l)*i[1]+(l*l*p+p*l*l+l*p*l)*a[1]+l*l*l*r[1]))/1e3]},buildBezierData:o,pointOnLine2D:t,pointOnLine3D:function(r,i,a,n,o,s,l,p,c){if(0===a&&0===s&&0===c)return t(r,i,n,o,l,p);var d,h=e.sqrt(e.pow(n-r,2)+e.pow(o-i,2)+e.pow(s-a,2)),u=e.sqrt(e.pow(l-r,2)+e.pow(p-i,2)+e.pow(c-a,2)),m=e.sqrt(e.pow(l-n,2)+e.pow(p-o,2)+e.pow(c-s,2));return(d=h>u?h>m?h-u-m:m-u-h:m>u?m-u-h:u-h-m)>-1e-4&&d<1e-4}}}var bez=bezFunction(),initFrame=initialDefaultFrame,mathAbs=Math.abs;function interpolateValue(e,t){var r,i=this.offsetTime;"multidimensional"===this.propType&&(r=createTypedArray("float32",this.pv.length));for(var a,n,o,s,l,p,c,d,h,u=t.lastIndex,m=u,f=this.keyframes.length-1,y=!0;y;){if(a=this.keyframes[m],n=this.keyframes[m+1],m===f-1&&e>=n.t-i){a.h&&(a=n),u=0;break}if(n.t-i>e){u=m;break}m<f-1?m+=1:(u=0,y=!1)}o=this.keyframesMetadata[m]||{};var g,_=n.t-i,x=a.t-i;if(a.to){o.bezierData||(o.bezierData=bez.buildBezierData(a.s,n.s||a.e,a.to,a.ti));var b=o.bezierData;if(e>=_||e<x){var v=e>=_?b.points.length-1:0;for(l=b.points[v].point.length,s=0;s<l;s+=1)r[s]=b.points[v].point[s]}else{o.__fnct?h=o.__fnct:(h=BezierFactory.getBezierEasing(a.o.x,a.o.y,a.i.x,a.i.y,a.n).get,o.__fnct=h),p=h((e-x)/(_-x));var C,S=b.segmentLength*p,$=t.lastFrame<e&&t._lastKeyframeIndex===m?t._lastAddedLength:0;for(d=t.lastFrame<e&&t._lastKeyframeIndex===m?t._lastPoint:0,y=!0,c=b.points.length;y;){if($+=b.points[d].partialLength,0===S||0===p||d===b.points.length-1){for(l=b.points[d].point.length,s=0;s<l;s+=1)r[s]=b.points[d].point[s];break}if(S>=$&&S<$+b.points[d+1].partialLength){for(C=(S-$)/b.points[d+1].partialLength,l=b.points[d].point.length,s=0;s<l;s+=1)r[s]=b.points[d].point[s]+(b.points[d+1].point[s]-b.points[d].point[s])*C;break}d<c-1?d+=1:y=!1}t._lastPoint=d,t._lastAddedLength=$-b.points[d].partialLength,t._lastKeyframeIndex=m}}else{var w,T,k,E,A;if(f=a.s.length,g=n.s||a.e,this.sh&&1!==a.h)e>=_?(r[0]=g[0],r[1]=g[1],r[2]=g[2]):e<=x?(r[0]=a.s[0],r[1]=a.s[1],r[2]=a.s[2]):quaternionToEuler(r,slerp(createQuaternion(a.s),createQuaternion(g),(e-x)/(_-x)));else for(m=0;m<f;m+=1)1!==a.h&&(e>=_?p=1:e<x?p=0:(a.o.x.constructor===Array?(o.__fnct||(o.__fnct=[]),o.__fnct[m]?h=o.__fnct[m]:(w=void 0===a.o.x[m]?a.o.x[0]:a.o.x[m],T=void 0===a.o.y[m]?a.o.y[0]:a.o.y[m],k=void 0===a.i.x[m]?a.i.x[0]:a.i.x[m],E=void 0===a.i.y[m]?a.i.y[0]:a.i.y[m],h=BezierFactory.getBezierEasing(w,T,k,E).get,o.__fnct[m]=h)):o.__fnct?h=o.__fnct:(w=a.o.x,T=a.o.y,k=a.i.x,E=a.i.y,h=BezierFactory.getBezierEasing(w,T,k,E).get,a.keyframeMetadata=h),p=h((e-x)/(_-x)))),g=n.s||a.e,A=1===a.h?a.s[m]:a.s[m]+(g[m]-a.s[m])*p,"multidimensional"===this.propType?r[m]=A:r=A}return t.lastIndex=u,r}function slerp(e,t,r){var i,a,n,o,s,l=[],p=e[0],c=e[1],d=e[2],h=e[3],u=t[0],m=t[1],f=t[2],y=t[3];return(a=p*u+c*m+d*f+h*y)<0&&(a=-a,u=-u,m=-m,f=-f,y=-y),1-a>1e-6?(i=Math.acos(a),n=Math.sin(i),o=Math.sin((1-r)*i)/n,s=Math.sin(r*i)/n):(o=1-r,s=r),l[0]=o*p+s*u,l[1]=o*c+s*m,l[2]=o*d+s*f,l[3]=o*h+s*y,l}function quaternionToEuler(e,t){var r=t[0],i=t[1],a=t[2],n=t[3],o=Math.atan2(2*i*n-2*r*a,1-2*i*i-2*a*a),s=Math.asin(2*r*i+2*a*n),l=Math.atan2(2*r*n-2*i*a,1-2*r*r-2*a*a);e[0]=o/degToRads,e[1]=s/degToRads,e[2]=l/degToRads}function createQuaternion(e){var t=e[0]*degToRads,r=e[1]*degToRads,i=e[2]*degToRads,a=Math.cos(t/2),n=Math.cos(r/2),o=Math.cos(i/2),s=Math.sin(t/2),l=Math.sin(r/2),p=Math.sin(i/2);return[s*l*o+a*n*p,s*n*o+a*l*p,a*l*o-s*n*p,a*n*o-s*l*p]}function getValueAtCurrentTime(){var e=this.comp.renderedFrame-this.offsetTime,t=this.keyframes[0].t-this.offsetTime,r=this.keyframes[this.keyframes.length-1].t-this.offsetTime;if(!(e===this._caching.lastFrame||this._caching.lastFrame!==initFrame&&(this._caching.lastFrame>=r&&e>=r||this._caching.lastFrame<t&&e<t))){this._caching.lastFrame>=e&&(this._caching._lastKeyframeIndex=-1,this._caching.lastIndex=0);var i=this.interpolateValue(e,this._caching);this.pv=i}return this._caching.lastFrame=e,this.pv}function setVValue(e){var t;if("unidimensional"===this.propType)t=e*this.mult,mathAbs(this.v-t)>1e-5&&(this.v=t,this._mdf=!0);else for(var r=0,i=this.v.length;r<i;)t=e[r]*this.mult,mathAbs(this.v[r]-t)>1e-5&&(this.v[r]=t,this._mdf=!0),r+=1}function processEffectsSequence(){if(this.elem.globalData.frameId!==this.frameId&&this.effectsSequence.length)if(this.lock)this.setVValue(this.pv);else{var e;this.lock=!0,this._mdf=this._isFirstFrame;var t=this.effectsSequence.length,r=this.kf?this.pv:this.data.k;for(e=0;e<t;e+=1)r=this.effectsSequence[e](r);this.setVValue(r),this._isFirstFrame=!1,this.lock=!1,this.frameId=this.elem.globalData.frameId}}function addEffect(e){this.effectsSequence.push(e),this.container.addDynamicProperty(this)}function ValueProperty(e,t,r,i){this.propType="unidimensional",this.mult=r||1,this.data=t,this.v=r?t.k*r:t.k,this.pv=t.k,this._mdf=!1,this.elem=e,this.container=i,this.comp=e.comp,this.k=!1,this.kf=!1,this.vel=0,this.effectsSequence=[],this._isFirstFrame=!0,this.getValue=processEffectsSequence,this.setVValue=setVValue,this.addEffect=addEffect}function MultiDimensionalProperty(e,t,r,i){var a;this.propType="multidimensional",this.mult=r||1,this.data=t,this._mdf=!1,this.elem=e,this.container=i,this.comp=e.comp,this.k=!1,this.kf=!1,this.frameId=-1;var n=t.k.length;for(this.v=createTypedArray("float32",n),this.pv=createTypedArray("float32",n),this.vel=createTypedArray("float32",n),a=0;a<n;a+=1)this.v[a]=t.k[a]*this.mult,this.pv[a]=t.k[a];this._isFirstFrame=!0,this.effectsSequence=[],this.getValue=processEffectsSequence,this.setVValue=setVValue,this.addEffect=addEffect}function KeyframedValueProperty(e,t,r,i){this.propType="unidimensional",this.keyframes=t.k,this.keyframesMetadata=[],this.offsetTime=e.data.st,this.frameId=-1,this._caching={lastFrame:initFrame,lastIndex:0,value:0,_lastKeyframeIndex:-1},this.k=!0,this.kf=!0,this.data=t,this.mult=r||1,this.elem=e,this.container=i,this.comp=e.comp,this.v=initFrame,this.pv=initFrame,this._isFirstFrame=!0,this.getValue=processEffectsSequence,this.setVValue=setVValue,this.interpolateValue=interpolateValue,this.effectsSequence=[getValueAtCurrentTime.bind(this)],this.addEffect=addEffect}function KeyframedMultidimensionalProperty(e,t,r,i){var a;this.propType="multidimensional";var n,o,s,l,p=t.k.length;for(a=0;a<p-1;a+=1)t.k[a].to&&t.k[a].s&&t.k[a+1]&&t.k[a+1].s&&(n=t.k[a].s,o=t.k[a+1].s,s=t.k[a].to,l=t.k[a].ti,(2===n.length&&(n[0]!==o[0]||n[1]!==o[1])&&bez.pointOnLine2D(n[0],n[1],o[0],o[1],n[0]+s[0],n[1]+s[1])&&bez.pointOnLine2D(n[0],n[1],o[0],o[1],o[0]+l[0],o[1]+l[1])||3===n.length&&(n[0]!==o[0]||n[1]!==o[1]||n[2]!==o[2])&&bez.pointOnLine3D(n[0],n[1],n[2],o[0],o[1],o[2],n[0]+s[0],n[1]+s[1],n[2]+s[2])&&bez.pointOnLine3D(n[0],n[1],n[2],o[0],o[1],o[2],o[0]+l[0],o[1]+l[1],o[2]+l[2]))&&(t.k[a].to=null,t.k[a].ti=null),n[0]===o[0]&&n[1]===o[1]&&0===s[0]&&0===s[1]&&0===l[0]&&0===l[1]&&(2===n.length||n[2]===o[2]&&0===s[2]&&0===l[2])&&(t.k[a].to=null,t.k[a].ti=null));this.effectsSequence=[getValueAtCurrentTime.bind(this)],this.data=t,this.keyframes=t.k,this.keyframesMetadata=[],this.offsetTime=e.data.st,this.k=!0,this.kf=!0,this._isFirstFrame=!0,this.mult=r||1,this.elem=e,this.container=i,this.comp=e.comp,this.getValue=processEffectsSequence,this.setVValue=setVValue,this.interpolateValue=interpolateValue,this.frameId=-1;var c=t.k[0].s.length;for(this.v=createTypedArray("float32",c),this.pv=createTypedArray("float32",c),a=0;a<c;a+=1)this.v[a]=initFrame,this.pv[a]=initFrame;this._caching={lastFrame:initFrame,lastIndex:0,value:createTypedArray("float32",c)},this.addEffect=addEffect}var PropertyFactory={getProp:function(e,t,r,i,a){var n;if(t.sid&&(t=e.globalData.slotManager.getProp(t)),t.k.length)if("number"==typeof t.k[0])n=new MultiDimensionalProperty(e,t,i,a);else switch(r){case 0:n=new KeyframedValueProperty(e,t,i,a);break;case 1:n=new KeyframedMultidimensionalProperty(e,t,i,a)}else n=new ValueProperty(e,t,i,a);return n.effectsSequence.length&&a.addDynamicProperty(n),n}};function DynamicPropertyContainer(){}DynamicPropertyContainer.prototype={addDynamicProperty:function(e){-1===this.dynamicProperties.indexOf(e)&&(this.dynamicProperties.push(e),this.container.addDynamicProperty(this),this._isAnimated=!0)},iterateDynamicProperties:function(){var e;this._mdf=!1;var t=this.dynamicProperties.length;for(e=0;e<t;e+=1)this.dynamicProperties[e].getValue(),this.dynamicProperties[e]._mdf&&(this._mdf=!0)},initDynamicPropertyContainer:function(e){this.container=e,this.dynamicProperties=[],this._mdf=!1,this._isAnimated=!1}};var pointPool=poolFactory(8,(function(){return createTypedArray("float32",2)}));function ShapePath(){this.c=!1,this._length=0,this._maxLength=8,this.v=createSizedArray(this._maxLength),this.o=createSizedArray(this._maxLength),this.i=createSizedArray(this._maxLength)}ShapePath.prototype.setPathData=function(e,t){this.c=e,this.setLength(t);for(var r=0;r<t;)this.v[r]=pointPool.newElement(),this.o[r]=pointPool.newElement(),this.i[r]=pointPool.newElement(),r+=1},ShapePath.prototype.setLength=function(e){for(;this._maxLength<e;)this.doubleArrayLength();this._length=e},ShapePath.prototype.doubleArrayLength=function(){this.v=this.v.concat(createSizedArray(this._maxLength)),this.i=this.i.concat(createSizedArray(this._maxLength)),this.o=this.o.concat(createSizedArray(this._maxLength)),this._maxLength*=2},ShapePath.prototype.setXYAt=function(e,t,r,i,a){var n;switch(this._length=Math.max(this._length,i+1),this._length>=this._maxLength&&this.doubleArrayLength(),r){case"v":n=this.v;break;case"i":n=this.i;break;case"o":n=this.o;break;default:n=[]}(!n[i]||n[i]&&!a)&&(n[i]=pointPool.newElement()),n[i][0]=e,n[i][1]=t},ShapePath.prototype.setTripleAt=function(e,t,r,i,a,n,o,s){this.setXYAt(e,t,"v",o,s),this.setXYAt(r,i,"o",o,s),this.setXYAt(a,n,"i",o,s)},ShapePath.prototype.reverse=function(){var e=new ShapePath;e.setPathData(this.c,this._length);var t=this.v,r=this.o,i=this.i,a=0;this.c&&(e.setTripleAt(t[0][0],t[0][1],i[0][0],i[0][1],r[0][0],r[0][1],0,!1),a=1);var n,o=this._length-1,s=this._length;for(n=a;n<s;n+=1)e.setTripleAt(t[o][0],t[o][1],i[o][0],i[o][1],r[o][0],r[o][1],n,!1),o-=1;return e},ShapePath.prototype.length=function(){return this._length};var shapePool=(factory=poolFactory(4,(function(){return new ShapePath}),(function(e){var t,r=e._length;for(t=0;t<r;t+=1)pointPool.release(e.v[t]),pointPool.release(e.i[t]),pointPool.release(e.o[t]),e.v[t]=null,e.i[t]=null,e.o[t]=null;e._length=0,e.c=!1})),factory.clone=function(e){var t,r=factory.newElement(),i=void 0===e._length?e.v.length:e._length;for(r.setLength(i),r.c=e.c,t=0;t<i;t+=1)r.setTripleAt(e.v[t][0],e.v[t][1],e.o[t][0],e.o[t][1],e.i[t][0],e.i[t][1],t);return r},factory),factory;function ShapeCollection(){this._length=0,this._maxLength=4,this.shapes=createSizedArray(this._maxLength)}ShapeCollection.prototype.addShape=function(e){this._length===this._maxLength&&(this.shapes=this.shapes.concat(createSizedArray(this._maxLength)),this._maxLength*=2),this.shapes[this._length]=e,this._length+=1},ShapeCollection.prototype.releaseShapes=function(){var e;for(e=0;e<this._length;e+=1)shapePool.release(this.shapes[e]);this._length=0};var shapeCollectionPool=(ob={newShapeCollection:function(){return _length?pool[_length-=1]:new ShapeCollection},release:function(e){var t,r=e._length;for(t=0;t<r;t+=1)shapePool.release(e.shapes[t]);e._length=0,_length===_maxLength&&(pool=pooling.double(pool),_maxLength*=2),pool[_length]=e,_length+=1}},_length=0,_maxLength=4,pool=createSizedArray(_maxLength),ob),ob,_length,_maxLength,pool,ShapePropertyFactory=function(){var e=-999999;function t(e,t,r){var i,a,n,o,s,l,p,c,d,h=r.lastIndex,u=this.keyframes;if(e<u[0].t-this.offsetTime)i=u[0].s[0],n=!0,h=0;else if(e>=u[u.length-1].t-this.offsetTime)i=u[u.length-1].s?u[u.length-1].s[0]:u[u.length-2].e[0],n=!0;else{for(var m,f,y,g=h,_=u.length-1,x=!0;x&&(m=u[g],!((f=u[g+1]).t-this.offsetTime>e));)g<_-1?g+=1:x=!1;if(y=this.keyframesMetadata[g]||{},h=g,!(n=1===m.h)){if(e>=f.t-this.offsetTime)c=1;else if(e<m.t-this.offsetTime)c=0;else{var b;y.__fnct?b=y.__fnct:(b=BezierFactory.getBezierEasing(m.o.x,m.o.y,m.i.x,m.i.y).get,y.__fnct=b),c=b((e-(m.t-this.offsetTime))/(f.t-this.offsetTime-(m.t-this.offsetTime)))}a=f.s?f.s[0]:m.e[0]}i=m.s[0]}for(l=t._length,p=i.i[0].length,r.lastIndex=h,o=0;o<l;o+=1)for(s=0;s<p;s+=1)d=n?i.i[o][s]:i.i[o][s]+(a.i[o][s]-i.i[o][s])*c,t.i[o][s]=d,d=n?i.o[o][s]:i.o[o][s]+(a.o[o][s]-i.o[o][s])*c,t.o[o][s]=d,d=n?i.v[o][s]:i.v[o][s]+(a.v[o][s]-i.v[o][s])*c,t.v[o][s]=d}function r(){var t=this.comp.renderedFrame-this.offsetTime,r=this.keyframes[0].t-this.offsetTime,i=this.keyframes[this.keyframes.length-1].t-this.offsetTime,a=this._caching.lastFrame;return a!==e&&(a<r&&t<r||a>i&&t>i)||(this._caching.lastIndex=a<t?this._caching.lastIndex:0,this.interpolateShape(t,this.pv,this._caching)),this._caching.lastFrame=t,this.pv}function i(){this.paths=this.localShapeCollection}function a(e){(function(e,t){if(e._length!==t._length||e.c!==t.c)return!1;var r,i=e._length;for(r=0;r<i;r+=1)if(e.v[r][0]!==t.v[r][0]||e.v[r][1]!==t.v[r][1]||e.o[r][0]!==t.o[r][0]||e.o[r][1]!==t.o[r][1]||e.i[r][0]!==t.i[r][0]||e.i[r][1]!==t.i[r][1])return!1;return!0})(this.v,e)||(this.v=shapePool.clone(e),this.localShapeCollection.releaseShapes(),this.localShapeCollection.addShape(this.v),this._mdf=!0,this.paths=this.localShapeCollection)}function n(){if(this.elem.globalData.frameId!==this.frameId)if(this.effectsSequence.length)if(this.lock)this.setVValue(this.pv);else{var e,t;this.lock=!0,this._mdf=!1,e=this.kf?this.pv:this.data.ks?this.data.ks.k:this.data.pt.k;var r=this.effectsSequence.length;for(t=0;t<r;t+=1)e=this.effectsSequence[t](e);this.setVValue(e),this.lock=!1,this.frameId=this.elem.globalData.frameId}else this._mdf=!1}function o(e,t,r){this.propType="shape",this.comp=e.comp,this.container=e,this.elem=e,this.data=t,this.k=!1,this.kf=!1,this._mdf=!1;var a=3===r?t.pt.k:t.ks.k;this.v=shapePool.clone(a),this.pv=shapePool.clone(this.v),this.localShapeCollection=shapeCollectionPool.newShapeCollection(),this.paths=this.localShapeCollection,this.paths.addShape(this.v),this.reset=i,this.effectsSequence=[]}function s(e){this.effectsSequence.push(e),this.container.addDynamicProperty(this)}function l(t,a,n){this.propType="shape",this.comp=t.comp,this.elem=t,this.container=t,this.offsetTime=t.data.st,this.keyframes=3===n?a.pt.k:a.ks.k,this.keyframesMetadata=[],this.k=!0,this.kf=!0;var o=this.keyframes[0].s[0].i.length;this.v=shapePool.newElement(),this.v.setPathData(this.keyframes[0].s[0].c,o),this.pv=shapePool.clone(this.v),this.localShapeCollection=shapeCollectionPool.newShapeCollection(),this.paths=this.localShapeCollection,this.paths.addShape(this.v),this.lastFrame=e,this.reset=i,this._caching={lastFrame:e,lastIndex:0},this.effectsSequence=[r.bind(this)]}o.prototype.interpolateShape=t,o.prototype.getValue=n,o.prototype.setVValue=a,o.prototype.addEffect=s,l.prototype.getValue=n,l.prototype.interpolateShape=t,l.prototype.setVValue=a,l.prototype.addEffect=s;var p=function(){var e=roundCorner;function t(e,t){this.v=shapePool.newElement(),this.v.setPathData(!0,4),this.localShapeCollection=shapeCollectionPool.newShapeCollection(),this.paths=this.localShapeCollection,this.localShapeCollection.addShape(this.v),this.d=t.d,this.elem=e,this.comp=e.comp,this.frameId=-1,this.initDynamicPropertyContainer(e),this.p=PropertyFactory.getProp(e,t.p,1,0,this),this.s=PropertyFactory.getProp(e,t.s,1,0,this),this.dynamicProperties.length?this.k=!0:(this.k=!1,this.convertEllToPath())}return t.prototype={reset:i,getValue:function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf&&this.convertEllToPath())},convertEllToPath:function(){var t=this.p.v[0],r=this.p.v[1],i=this.s.v[0]/2,a=this.s.v[1]/2,n=3!==this.d,o=this.v;o.v[0][0]=t,o.v[0][1]=r-a,o.v[1][0]=n?t+i:t-i,o.v[1][1]=r,o.v[2][0]=t,o.v[2][1]=r+a,o.v[3][0]=n?t-i:t+i,o.v[3][1]=r,o.i[0][0]=n?t-i*e:t+i*e,o.i[0][1]=r-a,o.i[1][0]=n?t+i:t-i,o.i[1][1]=r-a*e,o.i[2][0]=n?t+i*e:t-i*e,o.i[2][1]=r+a,o.i[3][0]=n?t-i:t+i,o.i[3][1]=r+a*e,o.o[0][0]=n?t+i*e:t-i*e,o.o[0][1]=r-a,o.o[1][0]=n?t+i:t-i,o.o[1][1]=r+a*e,o.o[2][0]=n?t-i*e:t+i*e,o.o[2][1]=r+a,o.o[3][0]=n?t-i:t+i,o.o[3][1]=r-a*e}},extendPrototype([DynamicPropertyContainer],t),t}(),c=function(){function e(e,t){this.v=shapePool.newElement(),this.v.setPathData(!0,0),this.elem=e,this.comp=e.comp,this.data=t,this.frameId=-1,this.d=t.d,this.initDynamicPropertyContainer(e),1===t.sy?(this.ir=PropertyFactory.getProp(e,t.ir,0,0,this),this.is=PropertyFactory.getProp(e,t.is,0,.01,this),this.convertToPath=this.convertStarToPath):this.convertToPath=this.convertPolygonToPath,this.pt=PropertyFactory.getProp(e,t.pt,0,0,this),this.p=PropertyFactory.getProp(e,t.p,1,0,this),this.r=PropertyFactory.getProp(e,t.r,0,degToRads,this),this.or=PropertyFactory.getProp(e,t.or,0,0,this),this.os=PropertyFactory.getProp(e,t.os,0,.01,this),this.localShapeCollection=shapeCollectionPool.newShapeCollection(),this.localShapeCollection.addShape(this.v),this.paths=this.localShapeCollection,this.dynamicProperties.length?this.k=!0:(this.k=!1,this.convertToPath())}return e.prototype={reset:i,getValue:function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf&&this.convertToPath())},convertStarToPath:function(){var e,t,r,i,a=2*Math.floor(this.pt.v),n=2*Math.PI/a,o=!0,s=this.or.v,l=this.ir.v,p=this.os.v,c=this.is.v,d=2*Math.PI*s/(2*a),h=2*Math.PI*l/(2*a),u=-Math.PI/2;u+=this.r.v;var m=3===this.data.d?-1:1;for(this.v._length=0,e=0;e<a;e+=1){r=o?p:c,i=o?d:h;var f=(t=o?s:l)*Math.cos(u),y=t*Math.sin(u),g=0===f&&0===y?0:y/Math.sqrt(f*f+y*y),_=0===f&&0===y?0:-f/Math.sqrt(f*f+y*y);f+=+this.p.v[0],y+=+this.p.v[1],this.v.setTripleAt(f,y,f-g*i*r*m,y-_*i*r*m,f+g*i*r*m,y+_*i*r*m,e,!0),o=!o,u+=n*m}},convertPolygonToPath:function(){var e,t=Math.floor(this.pt.v),r=2*Math.PI/t,i=this.or.v,a=this.os.v,n=2*Math.PI*i/(4*t),o=.5*-Math.PI,s=3===this.data.d?-1:1;for(o+=this.r.v,this.v._length=0,e=0;e<t;e+=1){var l=i*Math.cos(o),p=i*Math.sin(o),c=0===l&&0===p?0:p/Math.sqrt(l*l+p*p),d=0===l&&0===p?0:-l/Math.sqrt(l*l+p*p);l+=+this.p.v[0],p+=+this.p.v[1],this.v.setTripleAt(l,p,l-c*n*a*s,p-d*n*a*s,l+c*n*a*s,p+d*n*a*s,e,!0),o+=r*s}this.paths.length=0,this.paths[0]=this.v}},extendPrototype([DynamicPropertyContainer],e),e}(),d=function(){function e(e,t){this.v=shapePool.newElement(),this.v.c=!0,this.localShapeCollection=shapeCollectionPool.newShapeCollection(),this.localShapeCollection.addShape(this.v),this.paths=this.localShapeCollection,this.elem=e,this.comp=e.comp,this.frameId=-1,this.d=t.d,this.initDynamicPropertyContainer(e),this.p=PropertyFactory.getProp(e,t.p,1,0,this),this.s=PropertyFactory.getProp(e,t.s,1,0,this),this.r=PropertyFactory.getProp(e,t.r,0,0,this),this.dynamicProperties.length?this.k=!0:(this.k=!1,this.convertRectToPath())}return e.prototype={convertRectToPath:function(){var e=this.p.v[0],t=this.p.v[1],r=this.s.v[0]/2,i=this.s.v[1]/2,a=bmMin(r,i,this.r.v),n=a*(1-roundCorner);this.v._length=0,2===this.d||1===this.d?(this.v.setTripleAt(e+r,t-i+a,e+r,t-i+a,e+r,t-i+n,0,!0),this.v.setTripleAt(e+r,t+i-a,e+r,t+i-n,e+r,t+i-a,1,!0),0!==a?(this.v.setTripleAt(e+r-a,t+i,e+r-a,t+i,e+r-n,t+i,2,!0),this.v.setTripleAt(e-r+a,t+i,e-r+n,t+i,e-r+a,t+i,3,!0),this.v.setTripleAt(e-r,t+i-a,e-r,t+i-a,e-r,t+i-n,4,!0),this.v.setTripleAt(e-r,t-i+a,e-r,t-i+n,e-r,t-i+a,5,!0),this.v.setTripleAt(e-r+a,t-i,e-r+a,t-i,e-r+n,t-i,6,!0),this.v.setTripleAt(e+r-a,t-i,e+r-n,t-i,e+r-a,t-i,7,!0)):(this.v.setTripleAt(e-r,t+i,e-r+n,t+i,e-r,t+i,2),this.v.setTripleAt(e-r,t-i,e-r,t-i+n,e-r,t-i,3))):(this.v.setTripleAt(e+r,t-i+a,e+r,t-i+n,e+r,t-i+a,0,!0),0!==a?(this.v.setTripleAt(e+r-a,t-i,e+r-a,t-i,e+r-n,t-i,1,!0),this.v.setTripleAt(e-r+a,t-i,e-r+n,t-i,e-r+a,t-i,2,!0),this.v.setTripleAt(e-r,t-i+a,e-r,t-i+a,e-r,t-i+n,3,!0),this.v.setTripleAt(e-r,t+i-a,e-r,t+i-n,e-r,t+i-a,4,!0),this.v.setTripleAt(e-r+a,t+i,e-r+a,t+i,e-r+n,t+i,5,!0),this.v.setTripleAt(e+r-a,t+i,e+r-n,t+i,e+r-a,t+i,6,!0),this.v.setTripleAt(e+r,t+i-a,e+r,t+i-a,e+r,t+i-n,7,!0)):(this.v.setTripleAt(e-r,t-i,e-r+n,t-i,e-r,t-i,1,!0),this.v.setTripleAt(e-r,t+i,e-r,t+i-n,e-r,t+i,2,!0),this.v.setTripleAt(e+r,t+i,e+r-n,t+i,e+r,t+i,3,!0)))},getValue:function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf&&this.convertRectToPath())},reset:i},extendPrototype([DynamicPropertyContainer],e),e}(),h={getShapeProp:function(e,t,r){var i;return 3===r||4===r?i=(3===r?t.pt:t.ks).k.length?new l(e,t,r):new o(e,t,r):5===r?i=new d(e,t):6===r?i=new p(e,t):7===r&&(i=new c(e,t)),i.k&&e.addDynamicProperty(i),i},getConstructorFunction:function(){return o},getKeyframedConstructorFunction:function(){return l}};return h}(),Matrix=function(){var e=Math.cos,t=Math.sin,r=Math.tan,i=Math.round;function a(){return this.props[0]=1,this.props[1]=0,this.props[2]=0,this.props[3]=0,this.props[4]=0,this.props[5]=1,this.props[6]=0,this.props[7]=0,this.props[8]=0,this.props[9]=0,this.props[10]=1,this.props[11]=0,this.props[12]=0,this.props[13]=0,this.props[14]=0,this.props[15]=1,this}function n(r){if(0===r)return this;var i=e(r),a=t(r);return this._t(i,-a,0,0,a,i,0,0,0,0,1,0,0,0,0,1)}function o(r){if(0===r)return this;var i=e(r),a=t(r);return this._t(1,0,0,0,0,i,-a,0,0,a,i,0,0,0,0,1)}function s(r){if(0===r)return this;var i=e(r),a=t(r);return this._t(i,0,a,0,0,1,0,0,-a,0,i,0,0,0,0,1)}function l(r){if(0===r)return this;var i=e(r),a=t(r);return this._t(i,-a,0,0,a,i,0,0,0,0,1,0,0,0,0,1)}function p(e,t){return this._t(1,t,e,1,0,0)}function c(e,t){return this.shear(r(e),r(t))}function d(i,a){var n=e(a),o=t(a);return this._t(n,o,0,0,-o,n,0,0,0,0,1,0,0,0,0,1)._t(1,0,0,0,r(i),1,0,0,0,0,1,0,0,0,0,1)._t(n,-o,0,0,o,n,0,0,0,0,1,0,0,0,0,1)}function h(e,t,r){return r||0===r||(r=1),1===e&&1===t&&1===r?this:this._t(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1)}function u(e,t,r,i,a,n,o,s,l,p,c,d,h,u,m,f){return this.props[0]=e,this.props[1]=t,this.props[2]=r,this.props[3]=i,this.props[4]=a,this.props[5]=n,this.props[6]=o,this.props[7]=s,this.props[8]=l,this.props[9]=p,this.props[10]=c,this.props[11]=d,this.props[12]=h,this.props[13]=u,this.props[14]=m,this.props[15]=f,this}function m(e,t,r){return r=r||0,0!==e||0!==t||0!==r?this._t(1,0,0,0,0,1,0,0,0,0,1,0,e,t,r,1):this}function f(e,t,r,i,a,n,o,s,l,p,c,d,h,u,m,f){var y=this.props;if(1===e&&0===t&&0===r&&0===i&&0===a&&1===n&&0===o&&0===s&&0===l&&0===p&&1===c&&0===d)return y[12]=y[12]*e+y[15]*h,y[13]=y[13]*n+y[15]*u,y[14]=y[14]*c+y[15]*m,y[15]*=f,this._identityCalculated=!1,this;var g=y[0],_=y[1],x=y[2],b=y[3],v=y[4],C=y[5],S=y[6],$=y[7],w=y[8],T=y[9],k=y[10],E=y[11],A=y[12],P=y[13],I=y[14],M=y[15];return y[0]=g*e+_*a+x*l+b*h,y[1]=g*t+_*n+x*p+b*u,y[2]=g*r+_*o+x*c+b*m,y[3]=g*i+_*s+x*d+b*f,y[4]=v*e+C*a+S*l+$*h,y[5]=v*t+C*n+S*p+$*u,y[6]=v*r+C*o+S*c+$*m,y[7]=v*i+C*s+S*d+$*f,y[8]=w*e+T*a+k*l+E*h,y[9]=w*t+T*n+k*p+E*u,y[10]=w*r+T*o+k*c+E*m,y[11]=w*i+T*s+k*d+E*f,y[12]=A*e+P*a+I*l+M*h,y[13]=A*t+P*n+I*p+M*u,y[14]=A*r+P*o+I*c+M*m,y[15]=A*i+P*s+I*d+M*f,this._identityCalculated=!1,this}function y(){return this._identityCalculated||(this._identity=!(1!==this.props[0]||0!==this.props[1]||0!==this.props[2]||0!==this.props[3]||0!==this.props[4]||1!==this.props[5]||0!==this.props[6]||0!==this.props[7]||0!==this.props[8]||0!==this.props[9]||1!==this.props[10]||0!==this.props[11]||0!==this.props[12]||0!==this.props[13]||0!==this.props[14]||1!==this.props[15]),this._identityCalculated=!0),this._identity}function g(e){for(var t=0;t<16;){if(e.props[t]!==this.props[t])return!1;t+=1}return!0}function _(e){var t;for(t=0;t<16;t+=1)e.props[t]=this.props[t];return e}function x(e){var t;for(t=0;t<16;t+=1)this.props[t]=e[t]}function b(e,t,r){return{x:e*this.props[0]+t*this.props[4]+r*this.props[8]+this.props[12],y:e*this.props[1]+t*this.props[5]+r*this.props[9]+this.props[13],z:e*this.props[2]+t*this.props[6]+r*this.props[10]+this.props[14]}}function v(e,t,r){return e*this.props[0]+t*this.props[4]+r*this.props[8]+this.props[12]}function C(e,t,r){return e*this.props[1]+t*this.props[5]+r*this.props[9]+this.props[13]}function S(e,t,r){return e*this.props[2]+t*this.props[6]+r*this.props[10]+this.props[14]}function $(){var e=this.props[0]*this.props[5]-this.props[1]*this.props[4],t=this.props[5]/e,r=-this.props[1]/e,i=-this.props[4]/e,a=this.props[0]/e,n=(this.props[4]*this.props[13]-this.props[5]*this.props[12])/e,o=-(this.props[0]*this.props[13]-this.props[1]*this.props[12])/e,s=new Matrix;return s.props[0]=t,s.props[1]=r,s.props[4]=i,s.props[5]=a,s.props[12]=n,s.props[13]=o,s}function w(e){return this.getInverseMatrix().applyToPointArray(e[0],e[1],e[2]||0)}function T(e){var t,r=e.length,i=[];for(t=0;t<r;t+=1)i[t]=w(e[t]);return i}function k(e,t,r){var i=createTypedArray("float32",6);if(this.isIdentity())i[0]=e[0],i[1]=e[1],i[2]=t[0],i[3]=t[1],i[4]=r[0],i[5]=r[1];else{var a=this.props[0],n=this.props[1],o=this.props[4],s=this.props[5],l=this.props[12],p=this.props[13];i[0]=e[0]*a+e[1]*o+l,i[1]=e[0]*n+e[1]*s+p,i[2]=t[0]*a+t[1]*o+l,i[3]=t[0]*n+t[1]*s+p,i[4]=r[0]*a+r[1]*o+l,i[5]=r[0]*n+r[1]*s+p}return i}function E(e,t,r){return this.isIdentity()?[e,t,r]:[e*this.props[0]+t*this.props[4]+r*this.props[8]+this.props[12],e*this.props[1]+t*this.props[5]+r*this.props[9]+this.props[13],e*this.props[2]+t*this.props[6]+r*this.props[10]+this.props[14]]}function A(e,t){if(this.isIdentity())return e+","+t;var r=this.props;return Math.round(100*(e*r[0]+t*r[4]+r[12]))/100+","+Math.round(100*(e*r[1]+t*r[5]+r[13]))/100}function P(){for(var e=0,t=this.props,r="matrix3d(";e<16;)r+=i(1e4*t[e])/1e4,r+=15===e?")":",",e+=1;return r}function I(e){return e<1e-6&&e>0||e>-1e-6&&e<0?i(1e4*e)/1e4:e}function M(){var e=this.props;return"matrix("+I(e[0])+","+I(e[1])+","+I(e[4])+","+I(e[5])+","+I(e[12])+","+I(e[13])+")"}return function(){this.reset=a,this.rotate=n,this.rotateX=o,this.rotateY=s,this.rotateZ=l,this.skew=c,this.skewFromAxis=d,this.shear=p,this.scale=h,this.setTransform=u,this.translate=m,this.transform=f,this.applyToPoint=b,this.applyToX=v,this.applyToY=C,this.applyToZ=S,this.applyToPointArray=E,this.applyToTriplePoints=k,this.applyToPointStringified=A,this.toCSS=P,this.to2dCSS=M,this.clone=_,this.cloneFromProps=x,this.equals=g,this.inversePoints=T,this.inversePoint=w,this.getInverseMatrix=$,this._t=this.transform,this.isIdentity=y,this._identity=!0,this._identityCalculated=!1,this.props=createTypedArray("float32",16),this.reset()}}();function _typeof$3(e){return _typeof$3="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof$3(e)}var lottie={};function setLocation(e){setLocationHref(e)}function searchAnimations(){animationManager.searchAnimations()}function setSubframeRendering(e){setSubframeEnabled(e)}function setPrefix(e){setIdPrefix(e)}function loadAnimation(e){return animationManager.loadAnimation(e)}function setQuality(e){if("string"==typeof e)switch(e){case"high":setDefaultCurveSegments(200);break;default:case"medium":setDefaultCurveSegments(50);break;case"low":setDefaultCurveSegments(10)}else!isNaN(e)&&e>1&&setDefaultCurveSegments(e)}function inBrowser(){return"undefined"!=typeof navigator}function installPlugin(e,t){"expressions"===e&&setExpressionsPlugin(t)}function getFactory(e){switch(e){case"propertyFactory":return PropertyFactory;case"shapePropertyFactory":return ShapePropertyFactory;case"matrix":return Matrix;default:return null}}function checkReady(){"complete"===document.readyState&&(clearInterval(readyStateCheckInterval),searchAnimations())}function getQueryVariable(e){for(var t=queryString.split("&"),r=0;r<t.length;r+=1){var i=t[r].split("=");if(decodeURIComponent(i[0])==e)return decodeURIComponent(i[1])}return null}lottie.play=animationManager.play,lottie.pause=animationManager.pause,lottie.setLocationHref=setLocation,lottie.togglePause=animationManager.togglePause,lottie.setSpeed=animationManager.setSpeed,lottie.setDirection=animationManager.setDirection,lottie.stop=animationManager.stop,lottie.searchAnimations=searchAnimations,lottie.registerAnimation=animationManager.registerAnimation,lottie.loadAnimation=loadAnimation,lottie.setSubframeRendering=setSubframeRendering,lottie.resize=animationManager.resize,lottie.goToAndStop=animationManager.goToAndStop,lottie.destroy=animationManager.destroy,lottie.setQuality=setQuality,lottie.inBrowser=inBrowser,lottie.installPlugin=installPlugin,lottie.freeze=animationManager.freeze,lottie.unfreeze=animationManager.unfreeze,lottie.setVolume=animationManager.setVolume,lottie.mute=animationManager.mute,lottie.unmute=animationManager.unmute,lottie.getRegisteredAnimations=animationManager.getRegisteredAnimations,lottie.useWebWorker=setWebWorker,lottie.setIDPrefix=setPrefix,lottie.__getFactory=getFactory,lottie.version="5.11.0";var queryString="",scripts=document.getElementsByTagName("script"),index=scripts.length-1,myScript=scripts[index]||{src:""};queryString=myScript.src?myScript.src.replace(/^[^\?]+\??/,""):"",getQueryVariable("renderer");var readyStateCheckInterval=setInterval(checkReady,100);try{"object"!==_typeof$3(exports)&&(window.bodymovin=lottie)}catch(e){}var ShapeModifiers=function(){var e={},t={};return e.registerModifier=function(e,r){t[e]||(t[e]=r)},e.getModifier=function(e,r,i){return new t[e](r,i)},e}();function ShapeModifier(){}function TrimModifier(){}function PuckerAndBloatModifier(){}ShapeModifier.prototype.initModifierProperties=function(){},ShapeModifier.prototype.addShapeToModifier=function(){},ShapeModifier.prototype.addShape=function(e){if(!this.closed){e.sh.container.addDynamicProperty(e.sh);var t={shape:e.sh,data:e,localShapeCollection:shapeCollectionPool.newShapeCollection()};this.shapes.push(t),this.addShapeToModifier(t),this._isAnimated&&e.setAsAnimated()}},ShapeModifier.prototype.init=function(e,t){this.shapes=[],this.elem=e,this.initDynamicPropertyContainer(e),this.initModifierProperties(e,t),this.frameId=initialDefaultFrame,this.closed=!1,this.k=!1,this.dynamicProperties.length?this.k=!0:this.getValue(!0)},ShapeModifier.prototype.processKeys=function(){this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties())},extendPrototype([DynamicPropertyContainer],ShapeModifier),extendPrototype([ShapeModifier],TrimModifier),TrimModifier.prototype.initModifierProperties=function(e,t){this.s=PropertyFactory.getProp(e,t.s,0,.01,this),this.e=PropertyFactory.getProp(e,t.e,0,.01,this),this.o=PropertyFactory.getProp(e,t.o,0,0,this),this.sValue=0,this.eValue=0,this.getValue=this.processKeys,this.m=t.m,this._isAnimated=!!this.s.effectsSequence.length||!!this.e.effectsSequence.length||!!this.o.effectsSequence.length},TrimModifier.prototype.addShapeToModifier=function(e){e.pathsData=[]},TrimModifier.prototype.calculateShapeEdges=function(e,t,r,i,a){var n=[];t<=1?n.push({s:e,e:t}):e>=1?n.push({s:e-1,e:t-1}):(n.push({s:e,e:1}),n.push({s:0,e:t-1}));var o,s,l=[],p=n.length;for(o=0;o<p;o+=1){var c,d;(s=n[o]).e*a<i||s.s*a>i+r||(c=s.s*a<=i?0:(s.s*a-i)/r,d=s.e*a>=i+r?1:(s.e*a-i)/r,l.push([c,d]))}return l.length||l.push([0,0]),l},TrimModifier.prototype.releasePathsData=function(e){var t,r=e.length;for(t=0;t<r;t+=1)segmentsLengthPool.release(e[t]);return e.length=0,e},TrimModifier.prototype.processShapes=function(e){var t,r,i,a;if(this._mdf||e){var n=this.o.v%360/360;if(n<0&&(n+=1),(t=this.s.v>1?1+n:this.s.v<0?0+n:this.s.v+n)>(r=this.e.v>1?1+n:this.e.v<0?0+n:this.e.v+n)){var o=t;t=r,r=o}t=1e-4*Math.round(1e4*t),r=1e-4*Math.round(1e4*r),this.sValue=t,this.eValue=r}else t=this.sValue,r=this.eValue;var s,l,p,c,d,h=this.shapes.length,u=0;if(r===t)for(a=0;a<h;a+=1)this.shapes[a].localShapeCollection.releaseShapes(),this.shapes[a].shape._mdf=!0,this.shapes[a].shape.paths=this.shapes[a].localShapeCollection,this._mdf&&(this.shapes[a].pathsData.length=0);else if(1===r&&0===t||0===r&&1===t){if(this._mdf)for(a=0;a<h;a+=1)this.shapes[a].pathsData.length=0,this.shapes[a].shape._mdf=!0}else{var m,f,y=[];for(a=0;a<h;a+=1)if((m=this.shapes[a]).shape._mdf||this._mdf||e||2===this.m){if(l=(i=m.shape.paths)._length,d=0,!m.shape._mdf&&m.pathsData.length)d=m.totalShapeLength;else{for(p=this.releasePathsData(m.pathsData),s=0;s<l;s+=1)c=bez.getSegmentsLength(i.shapes[s]),p.push(c),d+=c.totalLength;m.totalShapeLength=d,m.pathsData=p}u+=d,m.shape._mdf=!0}else m.shape.paths=m.localShapeCollection;var g,_=t,x=r,b=0;for(a=h-1;a>=0;a-=1)if((m=this.shapes[a]).shape._mdf){for((f=m.localShapeCollection).releaseShapes(),2===this.m&&h>1?(g=this.calculateShapeEdges(t,r,m.totalShapeLength,b,u),b+=m.totalShapeLength):g=[[_,x]],l=g.length,s=0;s<l;s+=1){_=g[s][0],x=g[s][1],y.length=0,x<=1?y.push({s:m.totalShapeLength*_,e:m.totalShapeLength*x}):_>=1?y.push({s:m.totalShapeLength*(_-1),e:m.totalShapeLength*(x-1)}):(y.push({s:m.totalShapeLength*_,e:m.totalShapeLength}),y.push({s:0,e:m.totalShapeLength*(x-1)}));var v=this.addShapes(m,y[0]);if(y[0].s!==y[0].e){if(y.length>1)if(m.shape.paths.shapes[m.shape.paths._length-1].c){var C=v.pop();this.addPaths(v,f),v=this.addShapes(m,y[1],C)}else this.addPaths(v,f),v=this.addShapes(m,y[1]);this.addPaths(v,f)}}m.shape.paths=f}}},TrimModifier.prototype.addPaths=function(e,t){var r,i=e.length;for(r=0;r<i;r+=1)t.addShape(e[r])},TrimModifier.prototype.addSegment=function(e,t,r,i,a,n,o){a.setXYAt(t[0],t[1],"o",n),a.setXYAt(r[0],r[1],"i",n+1),o&&a.setXYAt(e[0],e[1],"v",n),a.setXYAt(i[0],i[1],"v",n+1)},TrimModifier.prototype.addSegmentFromArray=function(e,t,r,i){t.setXYAt(e[1],e[5],"o",r),t.setXYAt(e[2],e[6],"i",r+1),i&&t.setXYAt(e[0],e[4],"v",r),t.setXYAt(e[3],e[7],"v",r+1)},TrimModifier.prototype.addShapes=function(e,t,r){var i,a,n,o,s,l,p,c,d=e.pathsData,h=e.shape.paths.shapes,u=e.shape.paths._length,m=0,f=[],y=!0;for(r?(s=r._length,c=r._length):(r=shapePool.newElement(),s=0,c=0),f.push(r),i=0;i<u;i+=1){for(l=d[i].lengths,r.c=h[i].c,n=h[i].c?l.length:l.length+1,a=1;a<n;a+=1)if(m+(o=l[a-1]).addedLength<t.s)m+=o.addedLength,r.c=!1;else{if(m>t.e){r.c=!1;break}t.s<=m&&t.e>=m+o.addedLength?(this.addSegment(h[i].v[a-1],h[i].o[a-1],h[i].i[a],h[i].v[a],r,s,y),y=!1):(p=bez.getNewSegment(h[i].v[a-1],h[i].v[a],h[i].o[a-1],h[i].i[a],(t.s-m)/o.addedLength,(t.e-m)/o.addedLength,l[a-1]),this.addSegmentFromArray(p,r,s,y),y=!1,r.c=!1),m+=o.addedLength,s+=1}if(h[i].c&&l.length){if(o=l[a-1],m<=t.e){var g=l[a-1].addedLength;t.s<=m&&t.e>=m+g?(this.addSegment(h[i].v[a-1],h[i].o[a-1],h[i].i[0],h[i].v[0],r,s,y),y=!1):(p=bez.getNewSegment(h[i].v[a-1],h[i].v[0],h[i].o[a-1],h[i].i[0],(t.s-m)/g,(t.e-m)/g,l[a-1]),this.addSegmentFromArray(p,r,s,y),y=!1,r.c=!1)}else r.c=!1;m+=o.addedLength,s+=1}if(r._length&&(r.setXYAt(r.v[c][0],r.v[c][1],"i",c),r.setXYAt(r.v[r._length-1][0],r.v[r._length-1][1],"o",r._length-1)),m>t.e)break;i<u-1&&(r=shapePool.newElement(),y=!0,f.push(r),s=0)}return f},extendPrototype([ShapeModifier],PuckerAndBloatModifier),PuckerAndBloatModifier.prototype.initModifierProperties=function(e,t){this.getValue=this.processKeys,this.amount=PropertyFactory.getProp(e,t.a,0,null,this),this._isAnimated=!!this.amount.effectsSequence.length},PuckerAndBloatModifier.prototype.processPath=function(e,t){var r=t/100,i=[0,0],a=e._length,n=0;for(n=0;n<a;n+=1)i[0]+=e.v[n][0],i[1]+=e.v[n][1];i[0]/=a,i[1]/=a;var o,s,l,p,c,d,h=shapePool.newElement();for(h.c=e.c,n=0;n<a;n+=1)o=e.v[n][0]+(i[0]-e.v[n][0])*r,s=e.v[n][1]+(i[1]-e.v[n][1])*r,l=e.o[n][0]+(i[0]-e.o[n][0])*-r,p=e.o[n][1]+(i[1]-e.o[n][1])*-r,c=e.i[n][0]+(i[0]-e.i[n][0])*-r,d=e.i[n][1]+(i[1]-e.i[n][1])*-r,h.setTripleAt(o,s,l,p,c,d,n);return h},PuckerAndBloatModifier.prototype.processShapes=function(e){var t,r,i,a,n,o,s=this.shapes.length,l=this.amount.v;if(0!==l)for(r=0;r<s;r+=1){if(o=(n=this.shapes[r]).localShapeCollection,n.shape._mdf||this._mdf||e)for(o.releaseShapes(),n.shape._mdf=!0,t=n.shape.paths.shapes,a=n.shape.paths._length,i=0;i<a;i+=1)o.addShape(this.processPath(t[i],l));n.shape.paths=n.localShapeCollection}this.dynamicProperties.length||(this._mdf=!1)};var TransformPropertyFactory=function(){var e=[0,0];function t(e,t,r){if(this.elem=e,this.frameId=-1,this.propType="transform",this.data=t,this.v=new Matrix,this.pre=new Matrix,this.appliedTransformations=0,this.initDynamicPropertyContainer(r||e),t.p&&t.p.s?(this.px=PropertyFactory.getProp(e,t.p.x,0,0,this),this.py=PropertyFactory.getProp(e,t.p.y,0,0,this),t.p.z&&(this.pz=PropertyFactory.getProp(e,t.p.z,0,0,this))):this.p=PropertyFactory.getProp(e,t.p||{k:[0,0,0]},1,0,this),t.rx){if(this.rx=PropertyFactory.getProp(e,t.rx,0,degToRads,this),this.ry=PropertyFactory.getProp(e,t.ry,0,degToRads,this),this.rz=PropertyFactory.getProp(e,t.rz,0,degToRads,this),t.or.k[0].ti){var i,a=t.or.k.length;for(i=0;i<a;i+=1)t.or.k[i].to=null,t.or.k[i].ti=null}this.or=PropertyFactory.getProp(e,t.or,1,degToRads,this),this.or.sh=!0}else this.r=PropertyFactory.getProp(e,t.r||{k:0},0,degToRads,this);t.sk&&(this.sk=PropertyFactory.getProp(e,t.sk,0,degToRads,this),this.sa=PropertyFactory.getProp(e,t.sa,0,degToRads,this)),this.a=PropertyFactory.getProp(e,t.a||{k:[0,0,0]},1,0,this),this.s=PropertyFactory.getProp(e,t.s||{k:[100,100,100]},1,.01,this),t.o?this.o=PropertyFactory.getProp(e,t.o,0,.01,e):this.o={_mdf:!1,v:1},this._isDirty=!0,this.dynamicProperties.length||this.getValue(!0)}return t.prototype={applyToMatrix:function(e){var t=this._mdf;this.iterateDynamicProperties(),this._mdf=this._mdf||t,this.a&&e.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]),this.s&&e.scale(this.s.v[0],this.s.v[1],this.s.v[2]),this.sk&&e.skewFromAxis(-this.sk.v,this.sa.v),this.r?e.rotate(-this.r.v):e.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),this.data.p.s?this.data.p.z?e.translate(this.px.v,this.py.v,-this.pz.v):e.translate(this.px.v,this.py.v,0):e.translate(this.p.v[0],this.p.v[1],-this.p.v[2])},getValue:function(t){if(this.elem.globalData.frameId!==this.frameId){if(this._isDirty&&(this.precalculateMatrix(),this._isDirty=!1),this.iterateDynamicProperties(),this._mdf||t){var r;if(this.v.cloneFromProps(this.pre.props),this.appliedTransformations<1&&this.v.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]),this.appliedTransformations<2&&this.v.scale(this.s.v[0],this.s.v[1],this.s.v[2]),this.sk&&this.appliedTransformations<3&&this.v.skewFromAxis(-this.sk.v,this.sa.v),this.r&&this.appliedTransformations<4?this.v.rotate(-this.r.v):!this.r&&this.appliedTransformations<4&&this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),this.autoOriented){var i,a;if(r=this.elem.globalData.frameRate,this.p&&this.p.keyframes&&this.p.getValueAtTime)this.p._caching.lastFrame+this.p.offsetTime<=this.p.keyframes[0].t?(i=this.p.getValueAtTime((this.p.keyframes[0].t+.01)/r,0),a=this.p.getValueAtTime(this.p.keyframes[0].t/r,0)):this.p._caching.lastFrame+this.p.offsetTime>=this.p.keyframes[this.p.keyframes.length-1].t?(i=this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length-1].t/r,0),a=this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length-1].t-.05)/r,0)):(i=this.p.pv,a=this.p.getValueAtTime((this.p._caching.lastFrame+this.p.offsetTime-.01)/r,this.p.offsetTime));else if(this.px&&this.px.keyframes&&this.py.keyframes&&this.px.getValueAtTime&&this.py.getValueAtTime){i=[],a=[];var n=this.px,o=this.py;n._caching.lastFrame+n.offsetTime<=n.keyframes[0].t?(i[0]=n.getValueAtTime((n.keyframes[0].t+.01)/r,0),i[1]=o.getValueAtTime((o.keyframes[0].t+.01)/r,0),a[0]=n.getValueAtTime(n.keyframes[0].t/r,0),a[1]=o.getValueAtTime(o.keyframes[0].t/r,0)):n._caching.lastFrame+n.offsetTime>=n.keyframes[n.keyframes.length-1].t?(i[0]=n.getValueAtTime(n.keyframes[n.keyframes.length-1].t/r,0),i[1]=o.getValueAtTime(o.keyframes[o.keyframes.length-1].t/r,0),a[0]=n.getValueAtTime((n.keyframes[n.keyframes.length-1].t-.01)/r,0),a[1]=o.getValueAtTime((o.keyframes[o.keyframes.length-1].t-.01)/r,0)):(i=[n.pv,o.pv],a[0]=n.getValueAtTime((n._caching.lastFrame+n.offsetTime-.01)/r,n.offsetTime),a[1]=o.getValueAtTime((o._caching.lastFrame+o.offsetTime-.01)/r,o.offsetTime))}else i=a=e;this.v.rotate(-Math.atan2(i[1]-a[1],i[0]-a[0]))}this.data.p&&this.data.p.s?this.data.p.z?this.v.translate(this.px.v,this.py.v,-this.pz.v):this.v.translate(this.px.v,this.py.v,0):this.v.translate(this.p.v[0],this.p.v[1],-this.p.v[2])}this.frameId=this.elem.globalData.frameId}},precalculateMatrix:function(){if(!this.a.k&&(this.pre.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]),this.appliedTransformations=1,!this.s.effectsSequence.length)){if(this.pre.scale(this.s.v[0],this.s.v[1],this.s.v[2]),this.appliedTransformations=2,this.sk){if(this.sk.effectsSequence.length||this.sa.effectsSequence.length)return;this.pre.skewFromAxis(-this.sk.v,this.sa.v),this.appliedTransformations=3}this.r?this.r.effectsSequence.length||(this.pre.rotate(-this.r.v),this.appliedTransformations=4):this.rz.effectsSequence.length||this.ry.effectsSequence.length||this.rx.effectsSequence.length||this.or.effectsSequence.length||(this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),this.appliedTransformations=4)}},autoOrient:function(){}},extendPrototype([DynamicPropertyContainer],t),t.prototype.addDynamicProperty=function(e){this._addDynamicProperty(e),this.elem.addDynamicProperty(e),this._isDirty=!0},t.prototype._addDynamicProperty=DynamicPropertyContainer.prototype.addDynamicProperty,{getTransformProperty:function(e,r,i){return new t(e,r,i)}}}();function RepeaterModifier(){}function RoundCornersModifier(){}function floatEqual(e,t){return 1e5*Math.abs(e-t)<=Math.min(Math.abs(e),Math.abs(t))}function floatZero(e){return Math.abs(e)<=1e-5}function lerp(e,t,r){return e*(1-r)+t*r}function lerpPoint(e,t,r){return[lerp(e[0],t[0],r),lerp(e[1],t[1],r)]}function quadRoots(e,t,r){if(0===e)return[];var i=t*t-4*e*r;if(i<0)return[];var a=-t/(2*e);if(0===i)return[a];var n=Math.sqrt(i)/(2*e);return[a-n,a+n]}function polynomialCoefficients(e,t,r,i){return[3*t-e-3*r+i,3*e-6*t+3*r,-3*e+3*t,e]}function singlePoint(e){return new PolynomialBezier(e,e,e,e,!1)}function PolynomialBezier(e,t,r,i,a){a&&pointEqual(e,t)&&(t=lerpPoint(e,i,1/3)),a&&pointEqual(r,i)&&(r=lerpPoint(e,i,2/3));var n=polynomialCoefficients(e[0],t[0],r[0],i[0]),o=polynomialCoefficients(e[1],t[1],r[1],i[1]);this.a=[n[0],o[0]],this.b=[n[1],o[1]],this.c=[n[2],o[2]],this.d=[n[3],o[3]],this.points=[e,t,r,i]}function extrema(e,t){var r=e.points[0][t],i=e.points[e.points.length-1][t];if(r>i){var a=i;i=r,r=a}for(var n=quadRoots(3*e.a[t],2*e.b[t],e.c[t]),o=0;o<n.length;o+=1)if(n[o]>0&&n[o]<1){var s=e.point(n[o])[t];s<r?r=s:s>i&&(i=s)}return{min:r,max:i}}function intersectData(e,t,r){var i=e.boundingBox();return{cx:i.cx,cy:i.cy,width:i.width,height:i.height,bez:e,t:(t+r)/2,t1:t,t2:r}}function splitData(e){var t=e.bez.split(.5);return[intersectData(t[0],e.t1,e.t),intersectData(t[1],e.t,e.t2)]}function boxIntersect(e,t){return 2*Math.abs(e.cx-t.cx)<e.width+t.width&&2*Math.abs(e.cy-t.cy)<e.height+t.height}function intersectsImpl(e,t,r,i,a,n){if(boxIntersect(e,t))if(r>=n||e.width<=i&&e.height<=i&&t.width<=i&&t.height<=i)a.push([e.t,t.t]);else{var o=splitData(e),s=splitData(t);intersectsImpl(o[0],s[0],r+1,i,a,n),intersectsImpl(o[0],s[1],r+1,i,a,n),intersectsImpl(o[1],s[0],r+1,i,a,n),intersectsImpl(o[1],s[1],r+1,i,a,n)}}function crossProduct(e,t){return[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]]}function lineIntersection(e,t,r,i){var a=[e[0],e[1],1],n=[t[0],t[1],1],o=[r[0],r[1],1],s=[i[0],i[1],1],l=crossProduct(crossProduct(a,n),crossProduct(o,s));return floatZero(l[2])?null:[l[0]/l[2],l[1]/l[2]]}function polarOffset(e,t,r){return[e[0]+Math.cos(t)*r,e[1]-Math.sin(t)*r]}function pointDistance(e,t){return Math.hypot(e[0]-t[0],e[1]-t[1])}function pointEqual(e,t){return floatEqual(e[0],t[0])&&floatEqual(e[1],t[1])}function ZigZagModifier(){}function setPoint(e,t,r,i,a,n,o){var s=r-Math.PI/2,l=r+Math.PI/2,p=t[0]+Math.cos(r)*i*a,c=t[1]-Math.sin(r)*i*a;e.setTripleAt(p,c,p+Math.cos(s)*n,c-Math.sin(s)*n,p+Math.cos(l)*o,c-Math.sin(l)*o,e.length())}function getPerpendicularVector(e,t){var r=[t[0]-e[0],t[1]-e[1]],i=.5*-Math.PI;return[Math.cos(i)*r[0]-Math.sin(i)*r[1],Math.sin(i)*r[0]+Math.cos(i)*r[1]]}function getProjectingAngle(e,t){var r=0===t?e.length()-1:t-1,i=(t+1)%e.length(),a=getPerpendicularVector(e.v[r],e.v[i]);return Math.atan2(0,1)-Math.atan2(a[1],a[0])}function zigZagCorner(e,t,r,i,a,n,o){var s=getProjectingAngle(t,r),l=t.v[r%t._length],p=t.v[0===r?t._length-1:r-1],c=t.v[(r+1)%t._length],d=2===n?Math.sqrt(Math.pow(l[0]-p[0],2)+Math.pow(l[1]-p[1],2)):0,h=2===n?Math.sqrt(Math.pow(l[0]-c[0],2)+Math.pow(l[1]-c[1],2)):0;setPoint(e,t.v[r%t._length],s,o,i,h/(2*(a+1)),d/(2*(a+1)))}function zigZagSegment(e,t,r,i,a,n){for(var o=0;o<i;o+=1){var s=(o+1)/(i+1),l=2===a?Math.sqrt(Math.pow(t.points[3][0]-t.points[0][0],2)+Math.pow(t.points[3][1]-t.points[0][1],2)):0,p=t.normalAngle(s);setPoint(e,t.point(s),p,n,r,l/(2*(i+1)),l/(2*(i+1))),n=-n}return n}function linearOffset(e,t,r){var i=Math.atan2(t[0]-e[0],t[1]-e[1]);return[polarOffset(e,i,r),polarOffset(t,i,r)]}function offsetSegment(e,t){var r,i,a,n,o,s,l;r=(l=linearOffset(e.points[0],e.points[1],t))[0],i=l[1],a=(l=linearOffset(e.points[1],e.points[2],t))[0],n=l[1],o=(l=linearOffset(e.points[2],e.points[3],t))[0],s=l[1];var p=lineIntersection(r,i,a,n);null===p&&(p=i);var c=lineIntersection(o,s,a,n);return null===c&&(c=o),new PolynomialBezier(r,p,c,s)}function joinLines(e,t,r,i,a){var n=t.points[3],o=r.points[0];if(3===i)return n;if(pointEqual(n,o))return n;if(2===i){var s=-t.tangentAngle(1),l=-r.tangentAngle(0)+Math.PI,p=lineIntersection(n,polarOffset(n,s+Math.PI/2,100),o,polarOffset(o,s+Math.PI/2,100)),c=p?pointDistance(p,n):pointDistance(n,o)/2,d=polarOffset(n,s,2*c*roundCorner);return e.setXYAt(d[0],d[1],"o",e.length()-1),d=polarOffset(o,l,2*c*roundCorner),e.setTripleAt(o[0],o[1],o[0],o[1],d[0],d[1],e.length()),o}var h=lineIntersection(pointEqual(n,t.points[2])?t.points[0]:t.points[2],n,o,pointEqual(o,r.points[1])?r.points[3]:r.points[1]);return h&&pointDistance(h,n)<a?(e.setTripleAt(h[0],h[1],h[0],h[1],h[0],h[1],e.length()),h):n}function getIntersection(e,t){var r=e.intersections(t);return r.length&&floatEqual(r[0][0],1)&&r.shift(),r.length?r[0]:null}function pruneSegmentIntersection(e,t){var r=e.slice(),i=t.slice(),a=getIntersection(e[e.length-1],t[0]);return a&&(r[e.length-1]=e[e.length-1].split(a[0])[0],i[0]=t[0].split(a[1])[1]),e.length>1&&t.length>1&&(a=getIntersection(e[0],t[t.length-1]))?[[e[0].split(a[0])[0]],[t[t.length-1].split(a[1])[1]]]:[r,i]}function pruneIntersections(e){for(var t,r=1;r<e.length;r+=1)t=pruneSegmentIntersection(e[r-1],e[r]),e[r-1]=t[0],e[r]=t[1];return e.length>1&&(t=pruneSegmentIntersection(e[e.length-1],e[0]),e[e.length-1]=t[0],e[0]=t[1]),e}function offsetSegmentSplit(e,t){var r,i,a,n,o=e.inflectionPoints();if(0===o.length)return[offsetSegment(e,t)];if(1===o.length||floatEqual(o[1],1))return r=(a=e.split(o[0]))[0],i=a[1],[offsetSegment(r,t),offsetSegment(i,t)];r=(a=e.split(o[0]))[0];var s=(o[1]-o[0])/(1-o[0]);return n=(a=a[1].split(s))[0],i=a[1],[offsetSegment(r,t),offsetSegment(n,t),offsetSegment(i,t)]}function OffsetPathModifier(){}function getFontProperties(e){for(var t=e.fStyle?e.fStyle.split(" "):[],r="normal",i="normal",a=t.length,n=0;n<a;n+=1)switch(t[n].toLowerCase()){case"italic":i="italic";break;case"bold":r="700";break;case"black":r="900";break;case"medium":r="500";break;case"regular":case"normal":r="400";break;case"light":case"thin":r="200"}return{style:i,weight:e.fWeight||r}}extendPrototype([ShapeModifier],RepeaterModifier),RepeaterModifier.prototype.initModifierProperties=function(e,t){this.getValue=this.processKeys,this.c=PropertyFactory.getProp(e,t.c,0,null,this),this.o=PropertyFactory.getProp(e,t.o,0,null,this),this.tr=TransformPropertyFactory.getTransformProperty(e,t.tr,this),this.so=PropertyFactory.getProp(e,t.tr.so,0,.01,this),this.eo=PropertyFactory.getProp(e,t.tr.eo,0,.01,this),this.data=t,this.dynamicProperties.length||this.getValue(!0),this._isAnimated=!!this.dynamicProperties.length,this.pMatrix=new Matrix,this.rMatrix=new Matrix,this.sMatrix=new Matrix,this.tMatrix=new Matrix,this.matrix=new Matrix},RepeaterModifier.prototype.applyTransforms=function(e,t,r,i,a,n){var o=n?-1:1,s=i.s.v[0]+(1-i.s.v[0])*(1-a),l=i.s.v[1]+(1-i.s.v[1])*(1-a);e.translate(i.p.v[0]*o*a,i.p.v[1]*o*a,i.p.v[2]),t.translate(-i.a.v[0],-i.a.v[1],i.a.v[2]),t.rotate(-i.r.v*o*a),t.translate(i.a.v[0],i.a.v[1],i.a.v[2]),r.translate(-i.a.v[0],-i.a.v[1],i.a.v[2]),r.scale(n?1/s:s,n?1/l:l),r.translate(i.a.v[0],i.a.v[1],i.a.v[2])},RepeaterModifier.prototype.init=function(e,t,r,i){for(this.elem=e,this.arr=t,this.pos=r,this.elemsData=i,this._currentCopies=0,this._elements=[],this._groups=[],this.frameId=-1,this.initDynamicPropertyContainer(e),this.initModifierProperties(e,t[r]);r>0;)r-=1,this._elements.unshift(t[r]);this.dynamicProperties.length?this.k=!0:this.getValue(!0)},RepeaterModifier.prototype.resetElements=function(e){var t,r=e.length;for(t=0;t<r;t+=1)e[t]._processed=!1,"gr"===e[t].ty&&this.resetElements(e[t].it)},RepeaterModifier.prototype.cloneElements=function(e){var t=JSON.parse(JSON.stringify(e));return this.resetElements(t),t},RepeaterModifier.prototype.changeGroupRender=function(e,t){var r,i=e.length;for(r=0;r<i;r+=1)e[r]._render=t,"gr"===e[r].ty&&this.changeGroupRender(e[r].it,t)},RepeaterModifier.prototype.processShapes=function(e){var t,r,i,a,n,o=!1;if(this._mdf||e){var s,l=Math.ceil(this.c.v);if(this._groups.length<l){for(;this._groups.length<l;){var p={it:this.cloneElements(this._elements),ty:"gr"};p.it.push({a:{a:0,ix:1,k:[0,0]},nm:"Transform",o:{a:0,ix:7,k:100},p:{a:0,ix:2,k:[0,0]},r:{a:1,ix:6,k:[{s:0,e:0,t:0},{s:0,e:0,t:1}]},s:{a:0,ix:3,k:[100,100]},sa:{a:0,ix:5,k:0},sk:{a:0,ix:4,k:0},ty:"tr"}),this.arr.splice(0,0,p),this._groups.splice(0,0,p),this._currentCopies+=1}this.elem.reloadShapes(),o=!0}for(n=0,i=0;i<=this._groups.length-1;i+=1){if(s=n<l,this._groups[i]._render=s,this.changeGroupRender(this._groups[i].it,s),!s){var c=this.elemsData[i].it,d=c[c.length-1];0!==d.transform.op.v?(d.transform.op._mdf=!0,d.transform.op.v=0):d.transform.op._mdf=!1}n+=1}this._currentCopies=l;var h=this.o.v,u=h%1,m=h>0?Math.floor(h):Math.ceil(h),f=this.pMatrix.props,y=this.rMatrix.props,g=this.sMatrix.props;this.pMatrix.reset(),this.rMatrix.reset(),this.sMatrix.reset(),this.tMatrix.reset(),this.matrix.reset();var _,x,b=0;if(h>0){for(;b<m;)this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,1,!1),b+=1;u&&(this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,u,!1),b+=u)}else if(h<0){for(;b>m;)this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,1,!0),b-=1;u&&(this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,-u,!0),b-=u)}for(i=1===this.data.m?0:this._currentCopies-1,a=1===this.data.m?1:-1,n=this._currentCopies;n;){if(x=(r=(t=this.elemsData[i].it)[t.length-1].transform.mProps.v.props).length,t[t.length-1].transform.mProps._mdf=!0,t[t.length-1].transform.op._mdf=!0,t[t.length-1].transform.op.v=1===this._currentCopies?this.so.v:this.so.v+(this.eo.v-this.so.v)*(i/(this._currentCopies-1)),0!==b){for((0!==i&&1===a||i!==this._currentCopies-1&&-1===a)&&this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,1,!1),this.matrix.transform(y[0],y[1],y[2],y[3],y[4],y[5],y[6],y[7],y[8],y[9],y[10],y[11],y[12],y[13],y[14],y[15]),this.matrix.transform(g[0],g[1],g[2],g[3],g[4],g[5],g[6],g[7],g[8],g[9],g[10],g[11],g[12],g[13],g[14],g[15]),this.matrix.transform(f[0],f[1],f[2],f[3],f[4],f[5],f[6],f[7],f[8],f[9],f[10],f[11],f[12],f[13],f[14],f[15]),_=0;_<x;_+=1)r[_]=this.matrix.props[_];this.matrix.reset()}else for(this.matrix.reset(),_=0;_<x;_+=1)r[_]=this.matrix.props[_];b+=1,n-=1,i+=a}}else for(n=this._currentCopies,i=0,a=1;n;)r=(t=this.elemsData[i].it)[t.length-1].transform.mProps.v.props,t[t.length-1].transform.mProps._mdf=!1,t[t.length-1].transform.op._mdf=!1,n-=1,i+=a;return o},RepeaterModifier.prototype.addShape=function(){},extendPrototype([ShapeModifier],RoundCornersModifier),RoundCornersModifier.prototype.initModifierProperties=function(e,t){this.getValue=this.processKeys,this.rd=PropertyFactory.getProp(e,t.r,0,null,this),this._isAnimated=!!this.rd.effectsSequence.length},RoundCornersModifier.prototype.processPath=function(e,t){var r,i=shapePool.newElement();i.c=e.c;var a,n,o,s,l,p,c,d,h,u,m,f,y=e._length,g=0;for(r=0;r<y;r+=1)a=e.v[r],o=e.o[r],n=e.i[r],a[0]===o[0]&&a[1]===o[1]&&a[0]===n[0]&&a[1]===n[1]?0!==r&&r!==y-1||e.c?(s=0===r?e.v[y-1]:e.v[r-1],p=(l=Math.sqrt(Math.pow(a[0]-s[0],2)+Math.pow(a[1]-s[1],2)))?Math.min(l/2,t)/l:0,c=m=a[0]+(s[0]-a[0])*p,d=f=a[1]-(a[1]-s[1])*p,h=c-(c-a[0])*roundCorner,u=d-(d-a[1])*roundCorner,i.setTripleAt(c,d,h,u,m,f,g),g+=1,s=r===y-1?e.v[0]:e.v[r+1],p=(l=Math.sqrt(Math.pow(a[0]-s[0],2)+Math.pow(a[1]-s[1],2)))?Math.min(l/2,t)/l:0,c=h=a[0]+(s[0]-a[0])*p,d=u=a[1]+(s[1]-a[1])*p,m=c-(c-a[0])*roundCorner,f=d-(d-a[1])*roundCorner,i.setTripleAt(c,d,h,u,m,f,g),g+=1):(i.setTripleAt(a[0],a[1],o[0],o[1],n[0],n[1],g),g+=1):(i.setTripleAt(e.v[r][0],e.v[r][1],e.o[r][0],e.o[r][1],e.i[r][0],e.i[r][1],g),g+=1);return i},RoundCornersModifier.prototype.processShapes=function(e){var t,r,i,a,n,o,s=this.shapes.length,l=this.rd.v;if(0!==l)for(r=0;r<s;r+=1){if(o=(n=this.shapes[r]).localShapeCollection,n.shape._mdf||this._mdf||e)for(o.releaseShapes(),n.shape._mdf=!0,t=n.shape.paths.shapes,a=n.shape.paths._length,i=0;i<a;i+=1)o.addShape(this.processPath(t[i],l));n.shape.paths=n.localShapeCollection}this.dynamicProperties.length||(this._mdf=!1)},PolynomialBezier.prototype.point=function(e){return[((this.a[0]*e+this.b[0])*e+this.c[0])*e+this.d[0],((this.a[1]*e+this.b[1])*e+this.c[1])*e+this.d[1]]},PolynomialBezier.prototype.derivative=function(e){return[(3*e*this.a[0]+2*this.b[0])*e+this.c[0],(3*e*this.a[1]+2*this.b[1])*e+this.c[1]]},PolynomialBezier.prototype.tangentAngle=function(e){var t=this.derivative(e);return Math.atan2(t[1],t[0])},PolynomialBezier.prototype.normalAngle=function(e){var t=this.derivative(e);return Math.atan2(t[0],t[1])},PolynomialBezier.prototype.inflectionPoints=function(){var e=this.a[1]*this.b[0]-this.a[0]*this.b[1];if(floatZero(e))return[];var t=-.5*(this.a[1]*this.c[0]-this.a[0]*this.c[1])/e,r=t*t-1/3*(this.b[1]*this.c[0]-this.b[0]*this.c[1])/e;if(r<0)return[];var i=Math.sqrt(r);return floatZero(i)?i>0&&i<1?[t]:[]:[t-i,t+i].filter((function(e){return e>0&&e<1}))},PolynomialBezier.prototype.split=function(e){if(e<=0)return[singlePoint(this.points[0]),this];if(e>=1)return[this,singlePoint(this.points[this.points.length-1])];var t=lerpPoint(this.points[0],this.points[1],e),r=lerpPoint(this.points[1],this.points[2],e),i=lerpPoint(this.points[2],this.points[3],e),a=lerpPoint(t,r,e),n=lerpPoint(r,i,e),o=lerpPoint(a,n,e);return[new PolynomialBezier(this.points[0],t,a,o,!0),new PolynomialBezier(o,n,i,this.points[3],!0)]},PolynomialBezier.prototype.bounds=function(){return{x:extrema(this,0),y:extrema(this,1)}},PolynomialBezier.prototype.boundingBox=function(){var e=this.bounds();return{left:e.x.min,right:e.x.max,top:e.y.min,bottom:e.y.max,width:e.x.max-e.x.min,height:e.y.max-e.y.min,cx:(e.x.max+e.x.min)/2,cy:(e.y.max+e.y.min)/2}},PolynomialBezier.prototype.intersections=function(e,t,r){void 0===t&&(t=2),void 0===r&&(r=7);var i=[];return intersectsImpl(intersectData(this,0,1),intersectData(e,0,1),0,t,i,r),i},PolynomialBezier.shapeSegment=function(e,t){var r=(t+1)%e.length();return new PolynomialBezier(e.v[t],e.o[t],e.i[r],e.v[r],!0)},PolynomialBezier.shapeSegmentInverted=function(e,t){var r=(t+1)%e.length();return new PolynomialBezier(e.v[r],e.i[r],e.o[t],e.v[t],!0)},extendPrototype([ShapeModifier],ZigZagModifier),ZigZagModifier.prototype.initModifierProperties=function(e,t){this.getValue=this.processKeys,this.amplitude=PropertyFactory.getProp(e,t.s,0,null,this),this.frequency=PropertyFactory.getProp(e,t.r,0,null,this),this.pointsType=PropertyFactory.getProp(e,t.pt,0,null,this),this._isAnimated=0!==this.amplitude.effectsSequence.length||0!==this.frequency.effectsSequence.length||0!==this.pointsType.effectsSequence.length},ZigZagModifier.prototype.processPath=function(e,t,r,i){var a=e._length,n=shapePool.newElement();if(n.c=e.c,e.c||(a-=1),0===a)return n;var o=-1,s=PolynomialBezier.shapeSegment(e,0);zigZagCorner(n,e,0,t,r,i,o);for(var l=0;l<a;l+=1)o=zigZagSegment(n,s,t,r,i,-o),s=l!==a-1||e.c?PolynomialBezier.shapeSegment(e,(l+1)%a):null,zigZagCorner(n,e,l+1,t,r,i,o);return n},ZigZagModifier.prototype.processShapes=function(e){var t,r,i,a,n,o,s=this.shapes.length,l=this.amplitude.v,p=Math.max(0,Math.round(this.frequency.v)),c=this.pointsType.v;if(0!==l)for(r=0;r<s;r+=1){if(o=(n=this.shapes[r]).localShapeCollection,n.shape._mdf||this._mdf||e)for(o.releaseShapes(),n.shape._mdf=!0,t=n.shape.paths.shapes,a=n.shape.paths._length,i=0;i<a;i+=1)o.addShape(this.processPath(t[i],l,p,c));n.shape.paths=n.localShapeCollection}this.dynamicProperties.length||(this._mdf=!1)},extendPrototype([ShapeModifier],OffsetPathModifier),OffsetPathModifier.prototype.initModifierProperties=function(e,t){this.getValue=this.processKeys,this.amount=PropertyFactory.getProp(e,t.a,0,null,this),this.miterLimit=PropertyFactory.getProp(e,t.ml,0,null,this),this.lineJoin=t.lj,this._isAnimated=0!==this.amount.effectsSequence.length},OffsetPathModifier.prototype.processPath=function(e,t,r,i){var a=shapePool.newElement();a.c=e.c;var n,o,s,l=e.length();e.c||(l-=1);var p=[];for(n=0;n<l;n+=1)s=PolynomialBezier.shapeSegment(e,n),p.push(offsetSegmentSplit(s,t));if(!e.c)for(n=l-1;n>=0;n-=1)s=PolynomialBezier.shapeSegmentInverted(e,n),p.push(offsetSegmentSplit(s,t));p=pruneIntersections(p);var c=null,d=null;for(n=0;n<p.length;n+=1){var h=p[n];for(d&&(c=joinLines(a,d,h[0],r,i)),d=h[h.length-1],o=0;o<h.length;o+=1)s=h[o],c&&pointEqual(s.points[0],c)?a.setXYAt(s.points[1][0],s.points[1][1],"o",a.length()-1):a.setTripleAt(s.points[0][0],s.points[0][1],s.points[1][0],s.points[1][1],s.points[0][0],s.points[0][1],a.length()),a.setTripleAt(s.points[3][0],s.points[3][1],s.points[3][0],s.points[3][1],s.points[2][0],s.points[2][1],a.length()),c=s.points[3]}return p.length&&joinLines(a,d,p[0][0],r,i),a},OffsetPathModifier.prototype.processShapes=function(e){var t,r,i,a,n,o,s=this.shapes.length,l=this.amount.v,p=this.miterLimit.v,c=this.lineJoin;if(0!==l)for(r=0;r<s;r+=1){if(o=(n=this.shapes[r]).localShapeCollection,n.shape._mdf||this._mdf||e)for(o.releaseShapes(),n.shape._mdf=!0,t=n.shape.paths.shapes,a=n.shape.paths._length,i=0;i<a;i+=1)o.addShape(this.processPath(t[i],l,c,p));n.shape.paths=n.localShapeCollection}this.dynamicProperties.length||(this._mdf=!1)};var FontManager=function(){var e={w:0,size:0,shapes:[],data:{shapes:[]}},t=[];t=t.concat([2304,2305,2306,2307,2362,2363,2364,2364,2366,2367,2368,2369,2370,2371,2372,2373,2374,2375,2376,2377,2378,2379,2380,2381,2382,2383,2387,2388,2389,2390,2391,2402,2403]);var r=["d83cdffb","d83cdffc","d83cdffd","d83cdffe","d83cdfff"],i=[65039,8205];function a(e,t){var r=createTag("span");r.setAttribute("aria-hidden",!0),r.style.fontFamily=t;var i=createTag("span");i.innerText="giItT1WQy@!-/#",r.style.position="absolute",r.style.left="-10000px",r.style.top="-10000px",r.style.fontSize="300px",r.style.fontVariant="normal",r.style.fontStyle="normal",r.style.fontWeight="normal",r.style.letterSpacing="0",r.appendChild(i),document.body.appendChild(r);var a=i.offsetWidth;return i.style.fontFamily=function(e){var t,r=e.split(","),i=r.length,a=[];for(t=0;t<i;t+=1)"sans-serif"!==r[t]&&"monospace"!==r[t]&&a.push(r[t]);return a.join(",")}(e)+", "+t,{node:i,w:a,parent:r}}function n(e,t){var r,i=document.body&&t?"svg":"canvas",a=getFontProperties(e);if("svg"===i){var n=createNS("text");n.style.fontSize="100px",n.setAttribute("font-family",e.fFamily),n.setAttribute("font-style",a.style),n.setAttribute("font-weight",a.weight),n.textContent="1",e.fClass?(n.style.fontFamily="inherit",n.setAttribute("class",e.fClass)):n.style.fontFamily=e.fFamily,t.appendChild(n),r=n}else{var o=new OffscreenCanvas(500,500).getContext("2d");o.font=a.style+" "+a.weight+" 100px "+e.fFamily,r=o}return{measureText:function(e){return"svg"===i?(r.textContent=e,r.getComputedTextLength()):r.measureText(e).width}}}var o=function(){this.fonts=[],this.chars=null,this.typekitLoaded=0,this.isLoaded=!1,this._warned=!1,this.initTime=Date.now(),this.setIsLoadedBinded=this.setIsLoaded.bind(this),this.checkLoadedFontsBinded=this.checkLoadedFonts.bind(this)};o.isModifier=function(e,t){var i=e.toString(16)+t.toString(16);return-1!==r.indexOf(i)},o.isZeroWidthJoiner=function(e,t){return t?e===i[0]&&t===i[1]:e===i[1]},o.isCombinedCharacter=function(e){return-1!==t.indexOf(e)};var s={addChars:function(e){if(e){var t;this.chars||(this.chars=[]);var r,i,a=e.length,n=this.chars.length;for(t=0;t<a;t+=1){for(r=0,i=!1;r<n;)this.chars[r].style===e[t].style&&this.chars[r].fFamily===e[t].fFamily&&this.chars[r].ch===e[t].ch&&(i=!0),r+=1;i||(this.chars.push(e[t]),n+=1)}}},addFonts:function(e,t){if(e){if(this.chars)return this.isLoaded=!0,void(this.fonts=e.list);if(!document.body)return this.isLoaded=!0,e.list.forEach((function(e){e.helper=n(e),e.cache={}})),void(this.fonts=e.list);var r,i=e.list,o=i.length,s=o;for(r=0;r<o;r+=1){var l,p,c=!0;if(i[r].loaded=!1,i[r].monoCase=a(i[r].fFamily,"monospace"),i[r].sansCase=a(i[r].fFamily,"sans-serif"),i[r].fPath){if("p"===i[r].fOrigin||3===i[r].origin){if((l=document.querySelectorAll('style[f-forigin="p"][f-family="'+i[r].fFamily+'"], style[f-origin="3"][f-family="'+i[r].fFamily+'"]')).length>0&&(c=!1),c){var d=createTag("style");d.setAttribute("f-forigin",i[r].fOrigin),d.setAttribute("f-origin",i[r].origin),d.setAttribute("f-family",i[r].fFamily),d.type="text/css",d.innerText="@font-face {font-family: "+i[r].fFamily+"; font-style: normal; src: url('"+i[r].fPath+"');}",t.appendChild(d)}}else if("g"===i[r].fOrigin||1===i[r].origin){for(l=document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'),p=0;p<l.length;p+=1)-1!==l[p].href.indexOf(i[r].fPath)&&(c=!1);if(c){var h=createTag("link");h.setAttribute("f-forigin",i[r].fOrigin),h.setAttribute("f-origin",i[r].origin),h.type="text/css",h.rel="stylesheet",h.href=i[r].fPath,document.body.appendChild(h)}}else if("t"===i[r].fOrigin||2===i[r].origin){for(l=document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'),p=0;p<l.length;p+=1)i[r].fPath===l[p].src&&(c=!1);if(c){var u=createTag("link");u.setAttribute("f-forigin",i[r].fOrigin),u.setAttribute("f-origin",i[r].origin),u.setAttribute("rel","stylesheet"),u.setAttribute("href",i[r].fPath),t.appendChild(u)}}}else i[r].loaded=!0,s-=1;i[r].helper=n(i[r],t),i[r].cache={},this.fonts.push(i[r])}0===s?this.isLoaded=!0:setTimeout(this.checkLoadedFonts.bind(this),100)}else this.isLoaded=!0},getCharData:function(t,r,i){for(var a=0,n=this.chars.length;a<n;){if(this.chars[a].ch===t&&this.chars[a].style===r&&this.chars[a].fFamily===i)return this.chars[a];a+=1}return("string"==typeof t&&13!==t.charCodeAt(0)||!t)&&console&&console.warn&&!this._warned&&(this._warned=!0,console.warn("Missing character from exported characters list: ",t,r,i)),e},getFontByName:function(e){for(var t=0,r=this.fonts.length;t<r;){if(this.fonts[t].fName===e)return this.fonts[t];t+=1}return this.fonts[0]},measureText:function(e,t,r){var i=this.getFontByName(t),a=e.charCodeAt(0);if(!i.cache[a+1]){var n=i.helper;if(" "===e){var o=n.measureText("|"+e+"|"),s=n.measureText("||");i.cache[a+1]=(o-s)/100}else i.cache[a+1]=n.measureText(e)/100}return i.cache[a+1]*r},checkLoadedFonts:function(){var e,t,r,i=this.fonts.length,a=i;for(e=0;e<i;e+=1)this.fonts[e].loaded?a-=1:"n"===this.fonts[e].fOrigin||0===this.fonts[e].origin?this.fonts[e].loaded=!0:(t=this.fonts[e].monoCase.node,r=this.fonts[e].monoCase.w,t.offsetWidth!==r?(a-=1,this.fonts[e].loaded=!0):(t=this.fonts[e].sansCase.node,r=this.fonts[e].sansCase.w,t.offsetWidth!==r&&(a-=1,this.fonts[e].loaded=!0)),this.fonts[e].loaded&&(this.fonts[e].sansCase.parent.parentNode.removeChild(this.fonts[e].sansCase.parent),this.fonts[e].monoCase.parent.parentNode.removeChild(this.fonts[e].monoCase.parent)));0!==a&&Date.now()-this.initTime<5e3?setTimeout(this.checkLoadedFontsBinded,20):setTimeout(this.setIsLoadedBinded,10)},setIsLoaded:function(){this.isLoaded=!0}};return o.prototype=s,o}();function SlotManager(e){this.animationData=e}function slotFactory(e){return new SlotManager(e)}function RenderableElement(){}SlotManager.prototype.getProp=function(e){return this.animationData.slots&&this.animationData.slots[e.sid]?Object.assign(e,this.animationData.slots[e.sid].p):e},RenderableElement.prototype={initRenderable:function(){this.isInRange=!1,this.hidden=!1,this.isTransparent=!1,this.renderableComponents=[]},addRenderableComponent:function(e){-1===this.renderableComponents.indexOf(e)&&this.renderableComponents.push(e)},removeRenderableComponent:function(e){-1!==this.renderableComponents.indexOf(e)&&this.renderableComponents.splice(this.renderableComponents.indexOf(e),1)},prepareRenderableFrame:function(e){this.checkLayerLimits(e)},checkTransparency:function(){this.finalTransform.mProp.o.v<=0?!this.isTransparent&&this.globalData.renderConfig.hideOnTransparent&&(this.isTransparent=!0,this.hide()):this.isTransparent&&(this.isTransparent=!1,this.show())},checkLayerLimits:function(e){this.data.ip-this.data.st<=e&&this.data.op-this.data.st>e?!0!==this.isInRange&&(this.globalData._mdf=!0,this._mdf=!0,this.isInRange=!0,this.show()):!1!==this.isInRange&&(this.globalData._mdf=!0,this.isInRange=!1,this.hide())},renderRenderable:function(){var e,t=this.renderableComponents.length;for(e=0;e<t;e+=1)this.renderableComponents[e].renderFrame(this._isFirstFrame)},sourceRectAtTime:function(){return{top:0,left:0,width:100,height:100}},getLayerSize:function(){return 5===this.data.ty?{w:this.data.textData.width,h:this.data.textData.height}:{w:this.data.width,h:this.data.height}}};var getBlendMode=(blendModeEnums={0:"source-over",1:"multiply",2:"screen",3:"overlay",4:"darken",5:"lighten",6:"color-dodge",7:"color-burn",8:"hard-light",9:"soft-light",10:"difference",11:"exclusion",12:"hue",13:"saturation",14:"color",15:"luminosity"},function(e){return blendModeEnums[e]||""}),blendModeEnums;function SliderEffect(e,t,r){this.p=PropertyFactory.getProp(t,e.v,0,0,r)}function AngleEffect(e,t,r){this.p=PropertyFactory.getProp(t,e.v,0,0,r)}function ColorEffect(e,t,r){this.p=PropertyFactory.getProp(t,e.v,1,0,r)}function PointEffect(e,t,r){this.p=PropertyFactory.getProp(t,e.v,1,0,r)}function LayerIndexEffect(e,t,r){this.p=PropertyFactory.getProp(t,e.v,0,0,r)}function MaskIndexEffect(e,t,r){this.p=PropertyFactory.getProp(t,e.v,0,0,r)}function CheckboxEffect(e,t,r){this.p=PropertyFactory.getProp(t,e.v,0,0,r)}function NoValueEffect(){this.p={}}function EffectsManager(e,t){var r,i=e.ef||[];this.effectElements=[];var a,n=i.length;for(r=0;r<n;r+=1)a=new GroupEffect(i[r],t),this.effectElements.push(a)}function GroupEffect(e,t){this.init(e,t)}function BaseElement(){}function FrameElement(){}function FootageElement(e,t,r){this.initFrame(),this.initRenderable(),this.assetData=t.getAssetData(e.refId),this.footageData=t.imageLoader.getAsset(this.assetData),this.initBaseData(e,t,r)}function AudioElement(e,t,r){this.initFrame(),this.initRenderable(),this.assetData=t.getAssetData(e.refId),this.initBaseData(e,t,r),this._isPlaying=!1,this._canPlay=!1;var i=this.globalData.getAssetsPath(this.assetData);this.audio=this.globalData.audioController.createAudio(i),this._currentTime=0,this.globalData.audioController.addAudio(this),this._volumeMultiplier=1,this._volume=1,this._previousVolume=null,this.tm=e.tm?PropertyFactory.getProp(this,e.tm,0,t.frameRate,this):{_placeholder:!0},this.lv=PropertyFactory.getProp(this,e.au&&e.au.lv?e.au.lv:{k:[100]},1,.01,this)}function BaseRenderer(){}function TransformElement(){}function MaskElement(e,t,r){this.data=e,this.element=t,this.globalData=r,this.storedData=[],this.masksProperties=this.data.masksProperties||[],this.maskElement=null;var i,a,n=this.globalData.defs,o=this.masksProperties?this.masksProperties.length:0;this.viewData=createSizedArray(o),this.solidPath="";var s,l,p,c,d,h,u=this.masksProperties,m=0,f=[],y=createElementID(),g="clipPath",_="clip-path";for(i=0;i<o;i+=1)if(("a"!==u[i].mode&&"n"!==u[i].mode||u[i].inv||100!==u[i].o.k||u[i].o.x)&&(g="mask",_="mask"),"s"!==u[i].mode&&"i"!==u[i].mode||0!==m?p=null:((p=createNS("rect")).setAttribute("fill","#ffffff"),p.setAttribute("width",this.element.comp.data.w||0),p.setAttribute("height",this.element.comp.data.h||0),f.push(p)),a=createNS("path"),"n"===u[i].mode)this.viewData[i]={op:PropertyFactory.getProp(this.element,u[i].o,0,.01,this.element),prop:ShapePropertyFactory.getShapeProp(this.element,u[i],3),elem:a,lastPath:""},n.appendChild(a);else{var x;if(m+=1,a.setAttribute("fill","s"===u[i].mode?"#000000":"#ffffff"),a.setAttribute("clip-rule","nonzero"),0!==u[i].x.k?(g="mask",_="mask",h=PropertyFactory.getProp(this.element,u[i].x,0,null,this.element),x=createElementID(),(c=createNS("filter")).setAttribute("id",x),(d=createNS("feMorphology")).setAttribute("operator","erode"),d.setAttribute("in","SourceGraphic"),d.setAttribute("radius","0"),c.appendChild(d),n.appendChild(c),a.setAttribute("stroke","s"===u[i].mode?"#000000":"#ffffff")):(d=null,h=null),this.storedData[i]={elem:a,x:h,expan:d,lastPath:"",lastOperator:"",filterId:x,lastRadius:0},"i"===u[i].mode){l=f.length;var b=createNS("g");for(s=0;s<l;s+=1)b.appendChild(f[s]);var v=createNS("mask");v.setAttribute("mask-type","alpha"),v.setAttribute("id",y+"_"+m),v.appendChild(a),n.appendChild(v),b.setAttribute("mask","url("+getLocationHref()+"#"+y+"_"+m+")"),f.length=0,f.push(b)}else f.push(a);u[i].inv&&!this.solidPath&&(this.solidPath=this.createLayerSolidPath()),this.viewData[i]={elem:a,lastPath:"",op:PropertyFactory.getProp(this.element,u[i].o,0,.01,this.element),prop:ShapePropertyFactory.getShapeProp(this.element,u[i],3),invRect:p},this.viewData[i].prop.k||this.drawPath(u[i],this.viewData[i].prop.v,this.viewData[i])}for(this.maskElement=createNS(g),o=f.length,i=0;i<o;i+=1)this.maskElement.appendChild(f[i]);m>0&&(this.maskElement.setAttribute("id",y),this.element.maskedElement.setAttribute(_,"url("+getLocationHref()+"#"+y+")"),n.appendChild(this.maskElement)),this.viewData.length&&this.element.addRenderableComponent(this)}extendPrototype([DynamicPropertyContainer],GroupEffect),GroupEffect.prototype.getValue=GroupEffect.prototype.iterateDynamicProperties,GroupEffect.prototype.init=function(e,t){var r;this.data=e,this.effectElements=[],this.initDynamicPropertyContainer(t);var i,a=this.data.ef.length,n=this.data.ef;for(r=0;r<a;r+=1){switch(i=null,n[r].ty){case 0:i=new SliderEffect(n[r],t,this);break;case 1:i=new AngleEffect(n[r],t,this);break;case 2:i=new ColorEffect(n[r],t,this);break;case 3:i=new PointEffect(n[r],t,this);break;case 4:case 7:i=new CheckboxEffect(n[r],t,this);break;case 10:i=new LayerIndexEffect(n[r],t,this);break;case 11:i=new MaskIndexEffect(n[r],t,this);break;case 5:i=new EffectsManager(n[r],t);break;default:i=new NoValueEffect(n[r])}i&&this.effectElements.push(i)}},BaseElement.prototype={checkMasks:function(){if(!this.data.hasMask)return!1;for(var e=0,t=this.data.masksProperties.length;e<t;){if("n"!==this.data.masksProperties[e].mode&&!1!==this.data.masksProperties[e].cl)return!0;e+=1}return!1},initExpressions:function(){var e=getExpressionInterfaces();if(e){var t=e("layer"),r=e("effects"),i=e("shape"),a=e("text"),n=e("comp");this.layerInterface=t(this),this.data.hasMask&&this.maskManager&&this.layerInterface.registerMaskInterface(this.maskManager);var o=r.createEffectsInterface(this,this.layerInterface);this.layerInterface.registerEffectsInterface(o),0===this.data.ty||this.data.xt?this.compInterface=n(this):4===this.data.ty?(this.layerInterface.shapeInterface=i(this.shapesData,this.itemsData,this.layerInterface),this.layerInterface.content=this.layerInterface.shapeInterface):5===this.data.ty&&(this.layerInterface.textInterface=a(this),this.layerInterface.text=this.layerInterface.textInterface)}},setBlendMode:function(){var e=getBlendMode(this.data.bm);(this.baseElement||this.layerElement).style["mix-blend-mode"]=e},initBaseData:function(e,t,r){this.globalData=t,this.comp=r,this.data=e,this.layerId=createElementID(),this.data.sr||(this.data.sr=1),this.effectsManager=new EffectsManager(this.data,this,this.dynamicProperties)},getType:function(){return this.type},sourceRectAtTime:function(){}},FrameElement.prototype={initFrame:function(){this._isFirstFrame=!1,this.dynamicProperties=[],this._mdf=!1},prepareProperties:function(e,t){var r,i=this.dynamicProperties.length;for(r=0;r<i;r+=1)(t||this._isParent&&"transform"===this.dynamicProperties[r].propType)&&(this.dynamicProperties[r].getValue(),this.dynamicProperties[r]._mdf&&(this.globalData._mdf=!0,this._mdf=!0))},addDynamicProperty:function(e){-1===this.dynamicProperties.indexOf(e)&&this.dynamicProperties.push(e)}},FootageElement.prototype.prepareFrame=function(){},extendPrototype([RenderableElement,BaseElement,FrameElement],FootageElement),FootageElement.prototype.getBaseElement=function(){return null},FootageElement.prototype.renderFrame=function(){},FootageElement.prototype.destroy=function(){},FootageElement.prototype.initExpressions=function(){var e=getExpressionInterfaces();if(e){var t=e("footage");this.layerInterface=t(this)}},FootageElement.prototype.getFootageData=function(){return this.footageData},AudioElement.prototype.prepareFrame=function(e){if(this.prepareRenderableFrame(e,!0),this.prepareProperties(e,!0),this.tm._placeholder)this._currentTime=e/this.data.sr;else{var t=this.tm.v;this._currentTime=t}this._volume=this.lv.v[0];var r=this._volume*this._volumeMultiplier;this._previousVolume!==r&&(this._previousVolume=r,this.audio.volume(r))},extendPrototype([RenderableElement,BaseElement,FrameElement],AudioElement),AudioElement.prototype.renderFrame=function(){this.isInRange&&this._canPlay&&(this._isPlaying?(!this.audio.playing()||Math.abs(this._currentTime/this.globalData.frameRate-this.audio.seek())>.1)&&this.audio.seek(this._currentTime/this.globalData.frameRate):(this.audio.play(),this.audio.seek(this._currentTime/this.globalData.frameRate),this._isPlaying=!0))},AudioElement.prototype.show=function(){},AudioElement.prototype.hide=function(){this.audio.pause(),this._isPlaying=!1},AudioElement.prototype.pause=function(){this.audio.pause(),this._isPlaying=!1,this._canPlay=!1},AudioElement.prototype.resume=function(){this._canPlay=!0},AudioElement.prototype.setRate=function(e){this.audio.rate(e)},AudioElement.prototype.volume=function(e){this._volumeMultiplier=e,this._previousVolume=e*this._volume,this.audio.volume(this._previousVolume)},AudioElement.prototype.getBaseElement=function(){return null},AudioElement.prototype.destroy=function(){},AudioElement.prototype.sourceRectAtTime=function(){},AudioElement.prototype.initExpressions=function(){},BaseRenderer.prototype.checkLayers=function(e){var t,r,i=this.layers.length;for(this.completeLayers=!0,t=i-1;t>=0;t-=1)this.elements[t]||(r=this.layers[t]).ip-r.st<=e-this.layers[t].st&&r.op-r.st>e-this.layers[t].st&&this.buildItem(t),this.completeLayers=!!this.elements[t]&&this.completeLayers;this.checkPendingElements()},BaseRenderer.prototype.createItem=function(e){switch(e.ty){case 2:return this.createImage(e);case 0:return this.createComp(e);case 1:return this.createSolid(e);case 3:default:return this.createNull(e);case 4:return this.createShape(e);case 5:return this.createText(e);case 6:return this.createAudio(e);case 13:return this.createCamera(e);case 15:return this.createFootage(e)}},BaseRenderer.prototype.createCamera=function(){throw new Error("You're using a 3d camera. Try the html renderer.")},BaseRenderer.prototype.createAudio=function(e){return new AudioElement(e,this.globalData,this)},BaseRenderer.prototype.createFootage=function(e){return new FootageElement(e,this.globalData,this)},BaseRenderer.prototype.buildAllItems=function(){var e,t=this.layers.length;for(e=0;e<t;e+=1)this.buildItem(e);this.checkPendingElements()},BaseRenderer.prototype.includeLayers=function(e){var t;this.completeLayers=!1;var r,i=e.length,a=this.layers.length;for(t=0;t<i;t+=1)for(r=0;r<a;){if(this.layers[r].id===e[t].id){this.layers[r]=e[t];break}r+=1}},BaseRenderer.prototype.setProjectInterface=function(e){this.globalData.projectInterface=e},BaseRenderer.prototype.initItems=function(){this.globalData.progressiveLoad||this.buildAllItems()},BaseRenderer.prototype.buildElementParenting=function(e,t,r){for(var i=this.elements,a=this.layers,n=0,o=a.length;n<o;)a[n].ind==t&&(i[n]&&!0!==i[n]?(r.push(i[n]),i[n].setAsParent(),void 0!==a[n].parent?this.buildElementParenting(e,a[n].parent,r):e.setHierarchy(r)):(this.buildItem(n),this.addPendingElement(e))),n+=1},BaseRenderer.prototype.addPendingElement=function(e){this.pendingElements.push(e)},BaseRenderer.prototype.searchExtraCompositions=function(e){var t,r=e.length;for(t=0;t<r;t+=1)if(e[t].xt){var i=this.createComp(e[t]);i.initExpressions(),this.globalData.projectInterface.registerComposition(i)}},BaseRenderer.prototype.getElementById=function(e){var t,r=this.elements.length;for(t=0;t<r;t+=1)if(this.elements[t].data.ind===e)return this.elements[t];return null},BaseRenderer.prototype.getElementByPath=function(e){var t,r=e.shift();if("number"==typeof r)t=this.elements[r];else{var i,a=this.elements.length;for(i=0;i<a;i+=1)if(this.elements[i].data.nm===r){t=this.elements[i];break}}return 0===e.length?t:t.getElementByPath(e)},BaseRenderer.prototype.setupGlobalData=function(e,t){this.globalData.fontManager=new FontManager,this.globalData.slotManager=slotFactory(e),this.globalData.fontManager.addChars(e.chars),this.globalData.fontManager.addFonts(e.fonts,t),this.globalData.getAssetData=this.animationItem.getAssetData.bind(this.animationItem),this.globalData.getAssetsPath=this.animationItem.getAssetsPath.bind(this.animationItem),this.globalData.imageLoader=this.animationItem.imagePreloader,this.globalData.audioController=this.animationItem.audioController,this.globalData.frameId=0,this.globalData.frameRate=e.fr,this.globalData.nm=e.nm,this.globalData.compSize={w:e.w,h:e.h}},TransformElement.prototype={initTransform:function(){this.finalTransform={mProp:this.data.ks?TransformPropertyFactory.getTransformProperty(this,this.data.ks,this):{o:0},_matMdf:!1,_opMdf:!1,mat:new Matrix},this.data.ao&&(this.finalTransform.mProp.autoOriented=!0),this.data.ty},renderTransform:function(){if(this.finalTransform._opMdf=this.finalTransform.mProp.o._mdf||this._isFirstFrame,this.finalTransform._matMdf=this.finalTransform.mProp._mdf||this._isFirstFrame,this.hierarchy){var e,t=this.finalTransform.mat,r=0,i=this.hierarchy.length;if(!this.finalTransform._matMdf)for(;r<i;){if(this.hierarchy[r].finalTransform.mProp._mdf){this.finalTransform._matMdf=!0;break}r+=1}if(this.finalTransform._matMdf)for(e=this.finalTransform.mProp.v.props,t.cloneFromProps(e),r=0;r<i;r+=1)e=this.hierarchy[r].finalTransform.mProp.v.props,t.transform(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15])}},globalToLocal:function(e){var t=[];t.push(this.finalTransform);for(var r,i=!0,a=this.comp;i;)a.finalTransform?(a.data.hasMask&&t.splice(0,0,a.finalTransform),a=a.comp):i=!1;var n,o=t.length;for(r=0;r<o;r+=1)n=t[r].mat.applyToPointArray(0,0,0),e=[e[0]-n[0],e[1]-n[1],0];return e},mHelper:new Matrix},MaskElement.prototype.getMaskProperty=function(e){return this.viewData[e].prop},MaskElement.prototype.renderFrame=function(e){var t,r=this.element.finalTransform.mat,i=this.masksProperties.length;for(t=0;t<i;t+=1)if((this.viewData[t].prop._mdf||e)&&this.drawPath(this.masksProperties[t],this.viewData[t].prop.v,this.viewData[t]),(this.viewData[t].op._mdf||e)&&this.viewData[t].elem.setAttribute("fill-opacity",this.viewData[t].op.v),"n"!==this.masksProperties[t].mode&&(this.viewData[t].invRect&&(this.element.finalTransform.mProp._mdf||e)&&this.viewData[t].invRect.setAttribute("transform",r.getInverseMatrix().to2dCSS()),this.storedData[t].x&&(this.storedData[t].x._mdf||e))){var a=this.storedData[t].expan;this.storedData[t].x.v<0?("erode"!==this.storedData[t].lastOperator&&(this.storedData[t].lastOperator="erode",this.storedData[t].elem.setAttribute("filter","url("+getLocationHref()+"#"+this.storedData[t].filterId+")")),a.setAttribute("radius",-this.storedData[t].x.v)):("dilate"!==this.storedData[t].lastOperator&&(this.storedData[t].lastOperator="dilate",this.storedData[t].elem.setAttribute("filter",null)),this.storedData[t].elem.setAttribute("stroke-width",2*this.storedData[t].x.v))}},MaskElement.prototype.getMaskelement=function(){return this.maskElement},MaskElement.prototype.createLayerSolidPath=function(){var e="M0,0 ";return e+=" h"+this.globalData.compSize.w,e+=" v"+this.globalData.compSize.h,e+=" h-"+this.globalData.compSize.w,e+=" v-"+this.globalData.compSize.h+" "},MaskElement.prototype.drawPath=function(e,t,r){var i,a,n=" M"+t.v[0][0]+","+t.v[0][1];for(a=t._length,i=1;i<a;i+=1)n+=" C"+t.o[i-1][0]+","+t.o[i-1][1]+" "+t.i[i][0]+","+t.i[i][1]+" "+t.v[i][0]+","+t.v[i][1];if(t.c&&a>1&&(n+=" C"+t.o[i-1][0]+","+t.o[i-1][1]+" "+t.i[0][0]+","+t.i[0][1]+" "+t.v[0][0]+","+t.v[0][1]),r.lastPath!==n){var o="";r.elem&&(t.c&&(o=e.inv?this.solidPath+n:n),r.elem.setAttribute("d",o)),r.lastPath=n}},MaskElement.prototype.destroy=function(){this.element=null,this.globalData=null,this.maskElement=null,this.data=null,this.masksProperties=null};var filtersFactory=function(){var e={createFilter:function(e,t){var r=createNS("filter");return r.setAttribute("id",e),!0!==t&&(r.setAttribute("filterUnits","objectBoundingBox"),r.setAttribute("x","0%"),r.setAttribute("y","0%"),r.setAttribute("width","100%"),r.setAttribute("height","100%")),r},createAlphaToLuminanceFilter:function(){var e=createNS("feColorMatrix");return e.setAttribute("type","matrix"),e.setAttribute("color-interpolation-filters","sRGB"),e.setAttribute("values","0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"),e}};return e}(),featureSupport=function(){var e={maskType:!0,svgLumaHidden:!0,offscreenCanvas:"undefined"!=typeof OffscreenCanvas};return(/MSIE 10/i.test(navigator.userAgent)||/MSIE 9/i.test(navigator.userAgent)||/rv:11.0/i.test(navigator.userAgent)||/Edge\/\d./i.test(navigator.userAgent))&&(e.maskType=!1),/firefox/i.test(navigator.userAgent)&&(e.svgLumaHidden=!1),e}(),registeredEffects={},idPrefix="filter_result_";function SVGEffects(e){var t,r,i="SourceGraphic",a=e.data.ef?e.data.ef.length:0,n=createElementID(),o=filtersFactory.createFilter(n,!0),s=0;for(this.filters=[],t=0;t<a;t+=1){r=null;var l=e.data.ef[t].ty;registeredEffects[l]&&(r=new(0,registeredEffects[l].effect)(o,e.effectsManager.effectElements[t],e,idPrefix+s,i),i=idPrefix+s,registeredEffects[l].countsAsEffect&&(s+=1)),r&&this.filters.push(r)}s&&(e.globalData.defs.appendChild(o),e.layerElement.setAttribute("filter","url("+getLocationHref()+"#"+n+")")),this.filters.length&&e.addRenderableComponent(this)}function registerEffect(e,t,r){registeredEffects[e]={effect:t,countsAsEffect:r}}function SVGBaseElement(){}function HierarchyElement(){}function RenderableDOMElement(){}function IImageElement(e,t,r){this.assetData=t.getAssetData(e.refId),this.assetData&&this.assetData.sid&&(this.assetData=t.slotManager.getProp(this.assetData)),this.initElement(e,t,r),this.sourceRect={top:0,left:0,width:this.assetData.w,height:this.assetData.h}}function ProcessedElement(e,t){this.elem=e,this.pos=t}function IShapeElement(){}SVGEffects.prototype.renderFrame=function(e){var t,r=this.filters.length;for(t=0;t<r;t+=1)this.filters[t].renderFrame(e)},SVGBaseElement.prototype={initRendererElement:function(){this.layerElement=createNS("g")},createContainerElements:function(){this.matteElement=createNS("g"),this.transformedElement=this.layerElement,this.maskedElement=this.layerElement,this._sizeChanged=!1;var e=null;if(this.data.td){this.matteMasks={};var t=createNS("g");t.setAttribute("id",this.layerId),t.appendChild(this.layerElement),e=t,this.globalData.defs.appendChild(t)}else this.data.tt?(this.matteElement.appendChild(this.layerElement),e=this.matteElement,this.baseElement=this.matteElement):this.baseElement=this.layerElement;if(this.data.ln&&this.layerElement.setAttribute("id",this.data.ln),this.data.cl&&this.layerElement.setAttribute("class",this.data.cl),0===this.data.ty&&!this.data.hd){var r=createNS("clipPath"),i=createNS("path");i.setAttribute("d","M0,0 L"+this.data.w+",0 L"+this.data.w+","+this.data.h+" L0,"+this.data.h+"z");var a=createElementID();if(r.setAttribute("id",a),r.appendChild(i),this.globalData.defs.appendChild(r),this.checkMasks()){var n=createNS("g");n.setAttribute("clip-path","url("+getLocationHref()+"#"+a+")"),n.appendChild(this.layerElement),this.transformedElement=n,e?e.appendChild(this.transformedElement):this.baseElement=this.transformedElement}else this.layerElement.setAttribute("clip-path","url("+getLocationHref()+"#"+a+")")}0!==this.data.bm&&this.setBlendMode()},renderElement:function(){this.finalTransform._matMdf&&this.transformedElement.setAttribute("transform",this.finalTransform.mat.to2dCSS()),this.finalTransform._opMdf&&this.transformedElement.setAttribute("opacity",this.finalTransform.mProp.o.v)},destroyBaseElement:function(){this.layerElement=null,this.matteElement=null,this.maskManager.destroy()},getBaseElement:function(){return this.data.hd?null:this.baseElement},createRenderableComponents:function(){this.maskManager=new MaskElement(this.data,this,this.globalData),this.renderableEffectsManager=new SVGEffects(this)},getMatte:function(e){if(this.matteMasks||(this.matteMasks={}),!this.matteMasks[e]){var t,r,i,a,n=this.layerId+"_"+e;if(1===e||3===e){var o=createNS("mask");o.setAttribute("id",n),o.setAttribute("mask-type",3===e?"luminance":"alpha"),(i=createNS("use")).setAttributeNS("http://www.w3.org/1999/xlink","href","#"+this.layerId),o.appendChild(i),this.globalData.defs.appendChild(o),featureSupport.maskType||1!==e||(o.setAttribute("mask-type","luminance"),t=createElementID(),r=filtersFactory.createFilter(t),this.globalData.defs.appendChild(r),r.appendChild(filtersFactory.createAlphaToLuminanceFilter()),(a=createNS("g")).appendChild(i),o.appendChild(a),a.setAttribute("filter","url("+getLocationHref()+"#"+t+")"))}else if(2===e){var s=createNS("mask");s.setAttribute("id",n),s.setAttribute("mask-type","alpha");var l=createNS("g");s.appendChild(l),t=createElementID(),r=filtersFactory.createFilter(t);var p=createNS("feComponentTransfer");p.setAttribute("in","SourceGraphic"),r.appendChild(p);var c=createNS("feFuncA");c.setAttribute("type","table"),c.setAttribute("tableValues","1.0 0.0"),p.appendChild(c),this.globalData.defs.appendChild(r);var d=createNS("rect");d.setAttribute("width",this.comp.data.w),d.setAttribute("height",this.comp.data.h),d.setAttribute("x","0"),d.setAttribute("y","0"),d.setAttribute("fill","#ffffff"),d.setAttribute("opacity","0"),l.setAttribute("filter","url("+getLocationHref()+"#"+t+")"),l.appendChild(d),(i=createNS("use")).setAttributeNS("http://www.w3.org/1999/xlink","href","#"+this.layerId),l.appendChild(i),featureSupport.maskType||(s.setAttribute("mask-type","luminance"),r.appendChild(filtersFactory.createAlphaToLuminanceFilter()),a=createNS("g"),l.appendChild(d),a.appendChild(this.layerElement),l.appendChild(a)),this.globalData.defs.appendChild(s)}this.matteMasks[e]=n}return this.matteMasks[e]},setMatte:function(e){this.matteElement&&this.matteElement.setAttribute("mask","url("+getLocationHref()+"#"+e+")")}},HierarchyElement.prototype={initHierarchy:function(){this.hierarchy=[],this._isParent=!1,this.checkParenting()},setHierarchy:function(e){this.hierarchy=e},setAsParent:function(){this._isParent=!0},checkParenting:function(){void 0!==this.data.parent&&this.comp.buildElementParenting(this,this.data.parent,[])}},extendPrototype([RenderableElement,createProxyFunction({initElement:function(e,t,r){this.initFrame(),this.initBaseData(e,t,r),this.initTransform(e,t,r),this.initHierarchy(),this.initRenderable(),this.initRendererElement(),this.createContainerElements(),this.createRenderableComponents(),this.createContent(),this.hide()},hide:function(){this.hidden||this.isInRange&&!this.isTransparent||((this.baseElement||this.layerElement).style.display="none",this.hidden=!0)},show:function(){this.isInRange&&!this.isTransparent&&(this.data.hd||((this.baseElement||this.layerElement).style.display="block"),this.hidden=!1,this._isFirstFrame=!0)},renderFrame:function(){this.data.hd||this.hidden||(this.renderTransform(),this.renderRenderable(),this.renderElement(),this.renderInnerContent(),this._isFirstFrame&&(this._isFirstFrame=!1))},renderInnerContent:function(){},prepareFrame:function(e){this._mdf=!1,this.prepareRenderableFrame(e),this.prepareProperties(e,this.isInRange),this.checkTransparency()},destroy:function(){this.innerElem=null,this.destroyBaseElement()}})],RenderableDOMElement),extendPrototype([BaseElement,TransformElement,SVGBaseElement,HierarchyElement,FrameElement,RenderableDOMElement],IImageElement),IImageElement.prototype.createContent=function(){var e=this.globalData.getAssetsPath(this.assetData);this.innerElem=createNS("image"),this.innerElem.setAttribute("width",this.assetData.w+"px"),this.innerElem.setAttribute("height",this.assetData.h+"px"),this.innerElem.setAttribute("preserveAspectRatio",this.assetData.pr||this.globalData.renderConfig.imagePreserveAspectRatio),this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink","href",e),this.layerElement.appendChild(this.innerElem)},IImageElement.prototype.sourceRectAtTime=function(){return this.sourceRect},IShapeElement.prototype={addShapeToModifiers:function(e){var t,r=this.shapeModifiers.length;for(t=0;t<r;t+=1)this.shapeModifiers[t].addShape(e)},isShapeInAnimatedModifiers:function(e){for(var t=this.shapeModifiers.length;0<t;)if(this.shapeModifiers[0].isAnimatedWithShape(e))return!0;return!1},renderModifiers:function(){if(this.shapeModifiers.length){var e,t=this.shapes.length;for(e=0;e<t;e+=1)this.shapes[e].sh.reset();for(e=(t=this.shapeModifiers.length)-1;e>=0&&!this.shapeModifiers[e].processShapes(this._isFirstFrame);e-=1);}},searchProcessedElement:function(e){for(var t=this.processedElements,r=0,i=t.length;r<i;){if(t[r].elem===e)return t[r].pos;r+=1}return 0},addProcessedElement:function(e,t){for(var r=this.processedElements,i=r.length;i;)if(r[i-=1].elem===e)return void(r[i].pos=t);r.push(new ProcessedElement(e,t))},prepareFrame:function(e){this.prepareRenderableFrame(e),this.prepareProperties(e,this.isInRange)}};var lineCapEnum={1:"butt",2:"round",3:"square"},lineJoinEnum={1:"miter",2:"round",3:"bevel"};function SVGShapeData(e,t,r){this.caches=[],this.styles=[],this.transformers=e,this.lStr="",this.sh=r,this.lvl=t,this._isAnimated=!!r.k;for(var i=0,a=e.length;i<a;){if(e[i].mProps.dynamicProperties.length){this._isAnimated=!0;break}i+=1}}function SVGStyleData(e,t){this.data=e,this.type=e.ty,this.d="",this.lvl=t,this._mdf=!1,this.closed=!0===e.hd,this.pElem=createNS("path"),this.msElem=null}function DashProperty(e,t,r,i){var a;this.elem=e,this.frameId=-1,this.dataProps=createSizedArray(t.length),this.renderer=r,this.k=!1,this.dashStr="",this.dashArray=createTypedArray("float32",t.length?t.length-1:0),this.dashoffset=createTypedArray("float32",1),this.initDynamicPropertyContainer(i);var n,o=t.length||0;for(a=0;a<o;a+=1)n=PropertyFactory.getProp(e,t[a].v,0,0,this),this.k=n.k||this.k,this.dataProps[a]={n:t[a].n,p:n};this.k||this.getValue(!0),this._isAnimated=this.k}function SVGStrokeStyleData(e,t,r){this.initDynamicPropertyContainer(e),this.getValue=this.iterateDynamicProperties,this.o=PropertyFactory.getProp(e,t.o,0,.01,this),this.w=PropertyFactory.getProp(e,t.w,0,null,this),this.d=new DashProperty(e,t.d||{},"svg",this),this.c=PropertyFactory.getProp(e,t.c,1,255,this),this.style=r,this._isAnimated=!!this._isAnimated}function SVGFillStyleData(e,t,r){this.initDynamicPropertyContainer(e),this.getValue=this.iterateDynamicProperties,this.o=PropertyFactory.getProp(e,t.o,0,.01,this),this.c=PropertyFactory.getProp(e,t.c,1,255,this),this.style=r}function SVGNoStyleData(e,t,r){this.initDynamicPropertyContainer(e),this.getValue=this.iterateDynamicProperties,this.style=r}function GradientProperty(e,t,r){this.data=t,this.c=createTypedArray("uint8c",4*t.p);var i=t.k.k[0].s?t.k.k[0].s.length-4*t.p:t.k.k.length-4*t.p;this.o=createTypedArray("float32",i),this._cmdf=!1,this._omdf=!1,this._collapsable=this.checkCollapsable(),this._hasOpacity=i,this.initDynamicPropertyContainer(r),this.prop=PropertyFactory.getProp(e,t.k,1,null,this),this.k=this.prop.k,this.getValue(!0)}function SVGGradientFillStyleData(e,t,r){this.initDynamicPropertyContainer(e),this.getValue=this.iterateDynamicProperties,this.initGradientData(e,t,r)}function SVGGradientStrokeStyleData(e,t,r){this.initDynamicPropertyContainer(e),this.getValue=this.iterateDynamicProperties,this.w=PropertyFactory.getProp(e,t.w,0,null,this),this.d=new DashProperty(e,t.d||{},"svg",this),this.initGradientData(e,t,r),this._isAnimated=!!this._isAnimated}function ShapeGroupData(){this.it=[],this.prevViewData=[],this.gr=createNS("g")}function SVGTransformData(e,t,r){this.transform={mProps:e,op:t,container:r},this.elements=[],this._isAnimated=this.transform.mProps.dynamicProperties.length||this.transform.op.effectsSequence.length}SVGShapeData.prototype.setAsAnimated=function(){this._isAnimated=!0},SVGStyleData.prototype.reset=function(){this.d="",this._mdf=!1},DashProperty.prototype.getValue=function(e){if((this.elem.globalData.frameId!==this.frameId||e)&&(this.frameId=this.elem.globalData.frameId,this.iterateDynamicProperties(),this._mdf=this._mdf||e,this._mdf)){var t=0,r=this.dataProps.length;for("svg"===this.renderer&&(this.dashStr=""),t=0;t<r;t+=1)"o"!==this.dataProps[t].n?"svg"===this.renderer?this.dashStr+=" "+this.dataProps[t].p.v:this.dashArray[t]=this.dataProps[t].p.v:this.dashoffset[0]=this.dataProps[t].p.v}},extendPrototype([DynamicPropertyContainer],DashProperty),extendPrototype([DynamicPropertyContainer],SVGStrokeStyleData),extendPrototype([DynamicPropertyContainer],SVGFillStyleData),extendPrototype([DynamicPropertyContainer],SVGNoStyleData),GradientProperty.prototype.comparePoints=function(e,t){for(var r=0,i=this.o.length/2;r<i;){if(Math.abs(e[4*r]-e[4*t+2*r])>.01)return!1;r+=1}return!0},GradientProperty.prototype.checkCollapsable=function(){if(this.o.length/2!=this.c.length/4)return!1;if(this.data.k.k[0].s)for(var e=0,t=this.data.k.k.length;e<t;){if(!this.comparePoints(this.data.k.k[e].s,this.data.p))return!1;e+=1}else if(!this.comparePoints(this.data.k.k,this.data.p))return!1;return!0},GradientProperty.prototype.getValue=function(e){if(this.prop.getValue(),this._mdf=!1,this._cmdf=!1,this._omdf=!1,this.prop._mdf||e){var t,r,i,a=4*this.data.p;for(t=0;t<a;t+=1)r=t%4==0?100:255,i=Math.round(this.prop.v[t]*r),this.c[t]!==i&&(this.c[t]=i,this._cmdf=!e);if(this.o.length)for(a=this.prop.v.length,t=4*this.data.p;t<a;t+=1)r=t%2==0?100:1,i=t%2==0?Math.round(100*this.prop.v[t]):this.prop.v[t],this.o[t-4*this.data.p]!==i&&(this.o[t-4*this.data.p]=i,this._omdf=!e);this._mdf=!e}},extendPrototype([DynamicPropertyContainer],GradientProperty),SVGGradientFillStyleData.prototype.initGradientData=function(e,t,r){this.o=PropertyFactory.getProp(e,t.o,0,.01,this),this.s=PropertyFactory.getProp(e,t.s,1,null,this),this.e=PropertyFactory.getProp(e,t.e,1,null,this),this.h=PropertyFactory.getProp(e,t.h||{k:0},0,.01,this),this.a=PropertyFactory.getProp(e,t.a||{k:0},0,degToRads,this),this.g=new GradientProperty(e,t.g,this),this.style=r,this.stops=[],this.setGradientData(r.pElem,t),this.setGradientOpacity(t,r),this._isAnimated=!!this._isAnimated},SVGGradientFillStyleData.prototype.setGradientData=function(e,t){var r=createElementID(),i=createNS(1===t.t?"linearGradient":"radialGradient");i.setAttribute("id",r),i.setAttribute("spreadMethod","pad"),i.setAttribute("gradientUnits","userSpaceOnUse");var a,n,o,s=[];for(o=4*t.g.p,n=0;n<o;n+=4)a=createNS("stop"),i.appendChild(a),s.push(a);e.setAttribute("gf"===t.ty?"fill":"stroke","url("+getLocationHref()+"#"+r+")"),this.gf=i,this.cst=s},SVGGradientFillStyleData.prototype.setGradientOpacity=function(e,t){if(this.g._hasOpacity&&!this.g._collapsable){var r,i,a,n=createNS("mask"),o=createNS("path");n.appendChild(o);var s=createElementID(),l=createElementID();n.setAttribute("id",l);var p=createNS(1===e.t?"linearGradient":"radialGradient");p.setAttribute("id",s),p.setAttribute("spreadMethod","pad"),p.setAttribute("gradientUnits","userSpaceOnUse"),a=e.g.k.k[0].s?e.g.k.k[0].s.length:e.g.k.k.length;var c=this.stops;for(i=4*e.g.p;i<a;i+=2)(r=createNS("stop")).setAttribute("stop-color","rgb(255,255,255)"),p.appendChild(r),c.push(r);o.setAttribute("gf"===e.ty?"fill":"stroke","url("+getLocationHref()+"#"+s+")"),"gs"===e.ty&&(o.setAttribute("stroke-linecap",lineCapEnum[e.lc||2]),o.setAttribute("stroke-linejoin",lineJoinEnum[e.lj||2]),1===e.lj&&o.setAttribute("stroke-miterlimit",e.ml)),this.of=p,this.ms=n,this.ost=c,this.maskId=l,t.msElem=o}},extendPrototype([DynamicPropertyContainer],SVGGradientFillStyleData),extendPrototype([SVGGradientFillStyleData,DynamicPropertyContainer],SVGGradientStrokeStyleData);var buildShapeString=function(e,t,r,i){if(0===t)return"";var a,n=e.o,o=e.i,s=e.v,l=" M"+i.applyToPointStringified(s[0][0],s[0][1]);for(a=1;a<t;a+=1)l+=" C"+i.applyToPointStringified(n[a-1][0],n[a-1][1])+" "+i.applyToPointStringified(o[a][0],o[a][1])+" "+i.applyToPointStringified(s[a][0],s[a][1]);return r&&t&&(l+=" C"+i.applyToPointStringified(n[a-1][0],n[a-1][1])+" "+i.applyToPointStringified(o[0][0],o[0][1])+" "+i.applyToPointStringified(s[0][0],s[0][1]),l+="z"),l},SVGElementsRenderer=function(){var e=new Matrix,t=new Matrix;function r(e,t,r){(r||t.transform.op._mdf)&&t.transform.container.setAttribute("opacity",t.transform.op.v),(r||t.transform.mProps._mdf)&&t.transform.container.setAttribute("transform",t.transform.mProps.v.to2dCSS())}function i(){}function a(r,i,a){var n,o,s,l,p,c,d,h,u,m,f,y=i.styles.length,g=i.lvl;for(c=0;c<y;c+=1){if(l=i.sh._mdf||a,i.styles[c].lvl<g){for(h=t.reset(),m=g-i.styles[c].lvl,f=i.transformers.length-1;!l&&m>0;)l=i.transformers[f].mProps._mdf||l,m-=1,f-=1;if(l)for(m=g-i.styles[c].lvl,f=i.transformers.length-1;m>0;)u=i.transformers[f].mProps.v.props,h.transform(u[0],u[1],u[2],u[3],u[4],u[5],u[6],u[7],u[8],u[9],u[10],u[11],u[12],u[13],u[14],u[15]),m-=1,f-=1}else h=e;if(o=(d=i.sh.paths)._length,l){for(s="",n=0;n<o;n+=1)(p=d.shapes[n])&&p._length&&(s+=buildShapeString(p,p._length,p.c,h));i.caches[c]=s}else s=i.caches[c];i.styles[c].d+=!0===r.hd?"":s,i.styles[c]._mdf=l||i.styles[c]._mdf}}function n(e,t,r){var i=t.style;(t.c._mdf||r)&&i.pElem.setAttribute("fill","rgb("+bmFloor(t.c.v[0])+","+bmFloor(t.c.v[1])+","+bmFloor(t.c.v[2])+")"),(t.o._mdf||r)&&i.pElem.setAttribute("fill-opacity",t.o.v)}function o(e,t,r){s(e,t,r),l(0,t,r)}function s(e,t,r){var i,a,n,o,s,l=t.gf,p=t.g._hasOpacity,c=t.s.v,d=t.e.v;if(t.o._mdf||r){var h="gf"===e.ty?"fill-opacity":"stroke-opacity";t.style.pElem.setAttribute(h,t.o.v)}if(t.s._mdf||r){var u=1===e.t?"x1":"cx",m="x1"===u?"y1":"cy";l.setAttribute(u,c[0]),l.setAttribute(m,c[1]),p&&!t.g._collapsable&&(t.of.setAttribute(u,c[0]),t.of.setAttribute(m,c[1]))}if(t.g._cmdf||r){i=t.cst;var f=t.g.c;for(n=i.length,a=0;a<n;a+=1)(o=i[a]).setAttribute("offset",f[4*a]+"%"),o.setAttribute("stop-color","rgb("+f[4*a+1]+","+f[4*a+2]+","+f[4*a+3]+")")}if(p&&(t.g._omdf||r)){var y=t.g.o;for(n=(i=t.g._collapsable?t.cst:t.ost).length,a=0;a<n;a+=1)o=i[a],t.g._collapsable||o.setAttribute("offset",y[2*a]+"%"),o.setAttribute("stop-opacity",y[2*a+1])}if(1===e.t)(t.e._mdf||r)&&(l.setAttribute("x2",d[0]),l.setAttribute("y2",d[1]),p&&!t.g._collapsable&&(t.of.setAttribute("x2",d[0]),t.of.setAttribute("y2",d[1])));else if((t.s._mdf||t.e._mdf||r)&&(s=Math.sqrt(Math.pow(c[0]-d[0],2)+Math.pow(c[1]-d[1],2)),l.setAttribute("r",s),p&&!t.g._collapsable&&t.of.setAttribute("r",s)),t.e._mdf||t.h._mdf||t.a._mdf||r){s||(s=Math.sqrt(Math.pow(c[0]-d[0],2)+Math.pow(c[1]-d[1],2)));var g=Math.atan2(d[1]-c[1],d[0]-c[0]),_=t.h.v;_>=1?_=.99:_<=-1&&(_=-.99);var x=s*_,b=Math.cos(g+t.a.v)*x+c[0],v=Math.sin(g+t.a.v)*x+c[1];l.setAttribute("fx",b),l.setAttribute("fy",v),p&&!t.g._collapsable&&(t.of.setAttribute("fx",b),t.of.setAttribute("fy",v))}}function l(e,t,r){var i=t.style,a=t.d;a&&(a._mdf||r)&&a.dashStr&&(i.pElem.setAttribute("stroke-dasharray",a.dashStr),i.pElem.setAttribute("stroke-dashoffset",a.dashoffset[0])),t.c&&(t.c._mdf||r)&&i.pElem.setAttribute("stroke","rgb("+bmFloor(t.c.v[0])+","+bmFloor(t.c.v[1])+","+bmFloor(t.c.v[2])+")"),(t.o._mdf||r)&&i.pElem.setAttribute("stroke-opacity",t.o.v),(t.w._mdf||r)&&(i.pElem.setAttribute("stroke-width",t.w.v),i.msElem&&i.msElem.setAttribute("stroke-width",t.w.v))}return{createRenderFunction:function(e){switch(e.ty){case"fl":return n;case"gf":return s;case"gs":return o;case"st":return l;case"sh":case"el":case"rc":case"sr":return a;case"tr":return r;case"no":return i;default:return null}}}}();function SVGShapeElement(e,t,r){this.shapes=[],this.shapesData=e.shapes,this.stylesList=[],this.shapeModifiers=[],this.itemsData=[],this.processedElements=[],this.animatedContents=[],this.initElement(e,t,r),this.prevViewData=[]}function LetterProps(e,t,r,i,a,n){this.o=e,this.sw=t,this.sc=r,this.fc=i,this.m=a,this.p=n,this._mdf={o:!0,sw:!!t,sc:!!r,fc:!!i,m:!0,p:!0}}function TextProperty(e,t){this._frameId=initialDefaultFrame,this.pv="",this.v="",this.kf=!1,this._isFirstFrame=!0,this._mdf=!1,t.d&&t.d.sid&&(t.d=e.globalData.slotManager.getProp(t.d)),this.data=t,this.elem=e,this.comp=this.elem.comp,this.keysIndex=0,this.canResize=!1,this.minimumFontSize=1,this.effectsSequence=[],this.currentData={ascent:0,boxWidth:this.defaultBoxWidth,f:"",fStyle:"",fWeight:"",fc:"",j:"",justifyOffset:"",l:[],lh:0,lineWidths:[],ls:"",of:"",s:"",sc:"",sw:0,t:0,tr:0,sz:0,ps:null,fillColorAnim:!1,strokeColorAnim:!1,strokeWidthAnim:!1,yOffset:0,finalSize:0,finalText:[],finalLineHeight:0,__complete:!1},this.copyData(this.currentData,this.data.d.k[0].s),this.searchProperty()||this.completeTextData(this.currentData)}extendPrototype([BaseElement,TransformElement,SVGBaseElement,IShapeElement,HierarchyElement,FrameElement,RenderableDOMElement],SVGShapeElement),SVGShapeElement.prototype.initSecondaryElement=function(){},SVGShapeElement.prototype.identityMatrix=new Matrix,SVGShapeElement.prototype.buildExpressionInterface=function(){},SVGShapeElement.prototype.createContent=function(){this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.layerElement,0,[],!0),this.filterUniqueShapes()},SVGShapeElement.prototype.filterUniqueShapes=function(){var e,t,r,i,a=this.shapes.length,n=this.stylesList.length,o=[],s=!1;for(r=0;r<n;r+=1){for(i=this.stylesList[r],s=!1,o.length=0,e=0;e<a;e+=1)-1!==(t=this.shapes[e]).styles.indexOf(i)&&(o.push(t),s=t._isAnimated||s);o.length>1&&s&&this.setShapesAsAnimated(o)}},SVGShapeElement.prototype.setShapesAsAnimated=function(e){var t,r=e.length;for(t=0;t<r;t+=1)e[t].setAsAnimated()},SVGShapeElement.prototype.createStyleElement=function(e,t){var r,i=new SVGStyleData(e,t),a=i.pElem;return"st"===e.ty?r=new SVGStrokeStyleData(this,e,i):"fl"===e.ty?r=new SVGFillStyleData(this,e,i):"gf"===e.ty||"gs"===e.ty?(r=new("gf"===e.ty?SVGGradientFillStyleData:SVGGradientStrokeStyleData)(this,e,i),this.globalData.defs.appendChild(r.gf),r.maskId&&(this.globalData.defs.appendChild(r.ms),this.globalData.defs.appendChild(r.of),a.setAttribute("mask","url("+getLocationHref()+"#"+r.maskId+")"))):"no"===e.ty&&(r=new SVGNoStyleData(this,e,i)),"st"!==e.ty&&"gs"!==e.ty||(a.setAttribute("stroke-linecap",lineCapEnum[e.lc||2]),a.setAttribute("stroke-linejoin",lineJoinEnum[e.lj||2]),a.setAttribute("fill-opacity","0"),1===e.lj&&a.setAttribute("stroke-miterlimit",e.ml)),2===e.r&&a.setAttribute("fill-rule","evenodd"),e.ln&&a.setAttribute("id",e.ln),e.cl&&a.setAttribute("class",e.cl),e.bm&&(a.style["mix-blend-mode"]=getBlendMode(e.bm)),this.stylesList.push(i),this.addToAnimatedContents(e,r),r},SVGShapeElement.prototype.createGroupElement=function(e){var t=new ShapeGroupData;return e.ln&&t.gr.setAttribute("id",e.ln),e.cl&&t.gr.setAttribute("class",e.cl),e.bm&&(t.gr.style["mix-blend-mode"]=getBlendMode(e.bm)),t},SVGShapeElement.prototype.createTransformElement=function(e,t){var r=TransformPropertyFactory.getTransformProperty(this,e,this),i=new SVGTransformData(r,r.o,t);return this.addToAnimatedContents(e,i),i},SVGShapeElement.prototype.createShapeElement=function(e,t,r){var i=4;"rc"===e.ty?i=5:"el"===e.ty?i=6:"sr"===e.ty&&(i=7);var a=new SVGShapeData(t,r,ShapePropertyFactory.getShapeProp(this,e,i,this));return this.shapes.push(a),this.addShapeToModifiers(a),this.addToAnimatedContents(e,a),a},SVGShapeElement.prototype.addToAnimatedContents=function(e,t){for(var r=0,i=this.animatedContents.length;r<i;){if(this.animatedContents[r].element===t)return;r+=1}this.animatedContents.push({fn:SVGElementsRenderer.createRenderFunction(e),element:t,data:e})},SVGShapeElement.prototype.setElementStyles=function(e){var t,r=e.styles,i=this.stylesList.length;for(t=0;t<i;t+=1)this.stylesList[t].closed||r.push(this.stylesList[t])},SVGShapeElement.prototype.reloadShapes=function(){var e;this._isFirstFrame=!0;var t=this.itemsData.length;for(e=0;e<t;e+=1)this.prevViewData[e]=this.itemsData[e];for(this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.layerElement,0,[],!0),this.filterUniqueShapes(),t=this.dynamicProperties.length,e=0;e<t;e+=1)this.dynamicProperties[e].getValue();this.renderModifiers()},SVGShapeElement.prototype.searchShapes=function(e,t,r,i,a,n,o){var s,l,p,c,d,h,u=[].concat(n),m=e.length-1,f=[],y=[];for(s=m;s>=0;s-=1){if((h=this.searchProcessedElement(e[s]))?t[s]=r[h-1]:e[s]._render=o,"fl"===e[s].ty||"st"===e[s].ty||"gf"===e[s].ty||"gs"===e[s].ty||"no"===e[s].ty)h?t[s].style.closed=!1:t[s]=this.createStyleElement(e[s],a),e[s]._render&&t[s].style.pElem.parentNode!==i&&i.appendChild(t[s].style.pElem),f.push(t[s].style);else if("gr"===e[s].ty){if(h)for(p=t[s].it.length,l=0;l<p;l+=1)t[s].prevViewData[l]=t[s].it[l];else t[s]=this.createGroupElement(e[s]);this.searchShapes(e[s].it,t[s].it,t[s].prevViewData,t[s].gr,a+1,u,o),e[s]._render&&t[s].gr.parentNode!==i&&i.appendChild(t[s].gr)}else"tr"===e[s].ty?(h||(t[s]=this.createTransformElement(e[s],i)),c=t[s].transform,u.push(c)):"sh"===e[s].ty||"rc"===e[s].ty||"el"===e[s].ty||"sr"===e[s].ty?(h||(t[s]=this.createShapeElement(e[s],u,a)),this.setElementStyles(t[s])):"tm"===e[s].ty||"rd"===e[s].ty||"ms"===e[s].ty||"pb"===e[s].ty||"zz"===e[s].ty||"op"===e[s].ty?(h?(d=t[s]).closed=!1:((d=ShapeModifiers.getModifier(e[s].ty)).init(this,e[s]),t[s]=d,this.shapeModifiers.push(d)),y.push(d)):"rp"===e[s].ty&&(h?(d=t[s]).closed=!0:(d=ShapeModifiers.getModifier(e[s].ty),t[s]=d,d.init(this,e,s,t),this.shapeModifiers.push(d),o=!1),y.push(d));this.addProcessedElement(e[s],s+1)}for(m=f.length,s=0;s<m;s+=1)f[s].closed=!0;for(m=y.length,s=0;s<m;s+=1)y[s].closed=!0},SVGShapeElement.prototype.renderInnerContent=function(){var e;this.renderModifiers();var t=this.stylesList.length;for(e=0;e<t;e+=1)this.stylesList[e].reset();for(this.renderShape(),e=0;e<t;e+=1)(this.stylesList[e]._mdf||this._isFirstFrame)&&(this.stylesList[e].msElem&&(this.stylesList[e].msElem.setAttribute("d",this.stylesList[e].d),this.stylesList[e].d="M0 0"+this.stylesList[e].d),this.stylesList[e].pElem.setAttribute("d",this.stylesList[e].d||"M0 0"))},SVGShapeElement.prototype.renderShape=function(){var e,t,r=this.animatedContents.length;for(e=0;e<r;e+=1)t=this.animatedContents[e],(this._isFirstFrame||t.element._isAnimated)&&!0!==t.data&&t.fn(t.data,t.element,this._isFirstFrame)},SVGShapeElement.prototype.destroy=function(){this.destroyBaseElement(),this.shapesData=null,this.itemsData=null},LetterProps.prototype.update=function(e,t,r,i,a,n){this._mdf.o=!1,this._mdf.sw=!1,this._mdf.sc=!1,this._mdf.fc=!1,this._mdf.m=!1,this._mdf.p=!1;var o=!1;return this.o!==e&&(this.o=e,this._mdf.o=!0,o=!0),this.sw!==t&&(this.sw=t,this._mdf.sw=!0,o=!0),this.sc!==r&&(this.sc=r,this._mdf.sc=!0,o=!0),this.fc!==i&&(this.fc=i,this._mdf.fc=!0,o=!0),this.m!==a&&(this.m=a,this._mdf.m=!0,o=!0),!n.length||this.p[0]===n[0]&&this.p[1]===n[1]&&this.p[4]===n[4]&&this.p[5]===n[5]&&this.p[12]===n[12]&&this.p[13]===n[13]||(this.p=n,this._mdf.p=!0,o=!0),o},TextProperty.prototype.defaultBoxWidth=[0,0],TextProperty.prototype.copyData=function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},TextProperty.prototype.setCurrentData=function(e){e.__complete||this.completeTextData(e),this.currentData=e,this.currentData.boxWidth=this.currentData.boxWidth||this.defaultBoxWidth,this._mdf=!0},TextProperty.prototype.searchProperty=function(){return this.searchKeyframes()},TextProperty.prototype.searchKeyframes=function(){return this.kf=this.data.d.k.length>1,this.kf&&this.addEffect(this.getKeyframeValue.bind(this)),this.kf},TextProperty.prototype.addEffect=function(e){this.effectsSequence.push(e),this.elem.addDynamicProperty(this)},TextProperty.prototype.getValue=function(e){if(this.elem.globalData.frameId!==this.frameId&&this.effectsSequence.length||e){this.currentData.t=this.data.d.k[this.keysIndex].s.t;var t=this.currentData,r=this.keysIndex;if(this.lock)this.setCurrentData(this.currentData);else{var i;this.lock=!0,this._mdf=!1;var a=this.effectsSequence.length,n=e||this.data.d.k[this.keysIndex].s;for(i=0;i<a;i+=1)n=r!==this.keysIndex?this.effectsSequence[i](n,n.t):this.effectsSequence[i](this.currentData,n.t);t!==n&&this.setCurrentData(n),this.v=this.currentData,this.pv=this.v,this.lock=!1,this.frameId=this.elem.globalData.frameId}}},TextProperty.prototype.getKeyframeValue=function(){for(var e=this.data.d.k,t=this.elem.comp.renderedFrame,r=0,i=e.length;r<=i-1&&!(r===i-1||e[r+1].t>t);)r+=1;return this.keysIndex!==r&&(this.keysIndex=r),this.data.d.k[this.keysIndex].s},TextProperty.prototype.buildFinalText=function(e){for(var t,r,i=[],a=0,n=e.length,o=!1;a<n;)t=e.charCodeAt(a),FontManager.isCombinedCharacter(t)?i[i.length-1]+=e.charAt(a):t>=55296&&t<=56319?(r=e.charCodeAt(a+1))>=56320&&r<=57343?(o||FontManager.isModifier(t,r)?(i[i.length-1]+=e.substr(a,2),o=!1):i.push(e.substr(a,2)),a+=1):i.push(e.charAt(a)):t>56319?(r=e.charCodeAt(a+1),FontManager.isZeroWidthJoiner(t,r)?(o=!0,i[i.length-1]+=e.substr(a,2),a+=1):i.push(e.charAt(a))):FontManager.isZeroWidthJoiner(t)?(i[i.length-1]+=e.charAt(a),o=!0):i.push(e.charAt(a)),a+=1;return i},TextProperty.prototype.completeTextData=function(e){e.__complete=!0;var t,r,i,a,n,o,s,l=this.elem.globalData.fontManager,p=this.data,c=[],d=0,h=p.m.g,u=0,m=0,f=0,y=[],g=0,_=0,x=l.getFontByName(e.f),b=0,v=getFontProperties(x);e.fWeight=v.weight,e.fStyle=v.style,e.finalSize=e.s,e.finalText=this.buildFinalText(e.t),r=e.finalText.length,e.finalLineHeight=e.lh;var C,S=e.tr/1e3*e.finalSize;if(e.sz)for(var $,w,T=!0,k=e.sz[0],E=e.sz[1];T;){$=0,g=0,r=(w=this.buildFinalText(e.t)).length,S=e.tr/1e3*e.finalSize;var A=-1;for(t=0;t<r;t+=1)C=w[t].charCodeAt(0),i=!1," "===w[t]?A=t:13!==C&&3!==C||(g=0,i=!0,$+=e.finalLineHeight||1.2*e.finalSize),l.chars?(s=l.getCharData(w[t],x.fStyle,x.fFamily),b=i?0:s.w*e.finalSize/100):b=l.measureText(w[t],e.f,e.finalSize),g+b>k&&" "!==w[t]?(-1===A?r+=1:t=A,$+=e.finalLineHeight||1.2*e.finalSize,w.splice(t,A===t?1:0,"\r"),A=-1,g=0):(g+=b,g+=S);$+=x.ascent*e.finalSize/100,this.canResize&&e.finalSize>this.minimumFontSize&&E<$?(e.finalSize-=1,e.finalLineHeight=e.finalSize*e.lh/e.s):(e.finalText=w,r=e.finalText.length,T=!1)}g=-S,b=0;var P,I=0;for(t=0;t<r;t+=1)if(i=!1,13===(C=(P=e.finalText[t]).charCodeAt(0))||3===C?(I=0,y.push(g),_=g>_?g:_,g=-2*S,a="",i=!0,f+=1):a=P,l.chars?(s=l.getCharData(P,x.fStyle,l.getFontByName(e.f).fFamily),b=i?0:s.w*e.finalSize/100):b=l.measureText(a,e.f,e.finalSize)," "===P?I+=b+S:(g+=b+S+I,I=0),c.push({l:b,an:b,add:u,n:i,anIndexes:[],val:a,line:f,animatorJustifyOffset:0}),2==h){if(u+=b,""===a||" "===a||t===r-1){for(""!==a&&" "!==a||(u-=b);m<=t;)c[m].an=u,c[m].ind=d,c[m].extra=b,m+=1;d+=1,u=0}}else if(3==h){if(u+=b,""===a||t===r-1){for(""===a&&(u-=b);m<=t;)c[m].an=u,c[m].ind=d,c[m].extra=b,m+=1;u=0,d+=1}}else c[d].ind=d,c[d].extra=0,d+=1;if(e.l=c,_=g>_?g:_,y.push(g),e.sz)e.boxWidth=e.sz[0],e.justifyOffset=0;else switch(e.boxWidth=_,e.j){case 1:e.justifyOffset=-e.boxWidth;break;case 2:e.justifyOffset=-e.boxWidth/2;break;default:e.justifyOffset=0}e.lineWidths=y;var M,D,F,R,j=p.a;o=j.length;var L=[];for(n=0;n<o;n+=1){for((M=j[n]).a.sc&&(e.strokeColorAnim=!0),M.a.sw&&(e.strokeWidthAnim=!0),(M.a.fc||M.a.fh||M.a.fs||M.a.fb)&&(e.fillColorAnim=!0),R=0,F=M.s.b,t=0;t<r;t+=1)(D=c[t]).anIndexes[n]=R,(1==F&&""!==D.val||2==F&&""!==D.val&&" "!==D.val||3==F&&(D.n||" "==D.val||t==r-1)||4==F&&(D.n||t==r-1))&&(1===M.s.rn&&L.push(R),R+=1);p.a[n].s.totalChars=R;var B,O=-1;if(1===M.s.rn)for(t=0;t<r;t+=1)O!=(D=c[t]).anIndexes[n]&&(O=D.anIndexes[n],B=L.splice(Math.floor(Math.random()*L.length),1)[0]),D.anIndexes[n]=B}e.yOffset=e.finalLineHeight||1.2*e.finalSize,e.ls=e.ls||0,e.ascent=x.ascent*e.finalSize/100},TextProperty.prototype.updateDocumentData=function(e,t){t=void 0===t?this.keysIndex:t;var r=this.copyData({},this.data.d.k[t].s);r=this.copyData(r,e),this.data.d.k[t].s=r,this.recalculate(t),this.setCurrentData(r),this.elem.addDynamicProperty(this)},TextProperty.prototype.recalculate=function(e){var t=this.data.d.k[e].s;t.__complete=!1,this.keysIndex=0,this._isFirstFrame=!0,this.getValue(t)},TextProperty.prototype.canResizeFont=function(e){this.canResize=e,this.recalculate(this.keysIndex),this.elem.addDynamicProperty(this)},TextProperty.prototype.setMinimumFontSize=function(e){this.minimumFontSize=Math.floor(e)||1,this.recalculate(this.keysIndex),this.elem.addDynamicProperty(this)};var TextSelectorProp=function(){var e=Math.max,t=Math.min,r=Math.floor;function i(e,t){this._currentTextLength=-1,this.k=!1,this.data=t,this.elem=e,this.comp=e.comp,this.finalS=0,this.finalE=0,this.initDynamicPropertyContainer(e),this.s=PropertyFactory.getProp(e,t.s||{k:0},0,0,this),this.e="e"in t?PropertyFactory.getProp(e,t.e,0,0,this):{v:100},this.o=PropertyFactory.getProp(e,t.o||{k:0},0,0,this),this.xe=PropertyFactory.getProp(e,t.xe||{k:0},0,0,this),this.ne=PropertyFactory.getProp(e,t.ne||{k:0},0,0,this),this.sm=PropertyFactory.getProp(e,t.sm||{k:100},0,0,this),this.a=PropertyFactory.getProp(e,t.a,0,.01,this),this.dynamicProperties.length||this.getValue()}return i.prototype={getMult:function(i){this._currentTextLength!==this.elem.textProperty.currentData.l.length&&this.getValue();var a=0,n=0,o=1,s=1;this.ne.v>0?a=this.ne.v/100:n=-this.ne.v/100,this.xe.v>0?o=1-this.xe.v/100:s=1+this.xe.v/100;var l=BezierFactory.getBezierEasing(a,n,o,s).get,p=0,c=this.finalS,d=this.finalE,h=this.data.sh;if(2===h)p=l(p=d===c?i>=d?1:0:e(0,t(.5/(d-c)+(i-c)/(d-c),1)));else if(3===h)p=l(p=d===c?i>=d?0:1:1-e(0,t(.5/(d-c)+(i-c)/(d-c),1)));else if(4===h)d===c?p=0:(p=e(0,t(.5/(d-c)+(i-c)/(d-c),1)))<.5?p*=2:p=1-2*(p-.5),p=l(p);else if(5===h){if(d===c)p=0;else{var u=d-c,m=-u/2+(i=t(e(0,i+.5-c),d-c)),f=u/2;p=Math.sqrt(1-m*m/(f*f))}p=l(p)}else 6===h?(d===c?p=0:(i=t(e(0,i+.5-c),d-c),p=(1+Math.cos(Math.PI+2*Math.PI*i/(d-c)))/2),p=l(p)):(i>=r(c)&&(p=e(0,t(i-c<0?t(d,1)-(c-i):d-i,1))),p=l(p));if(100!==this.sm.v){var y=.01*this.sm.v;0===y&&(y=1e-8);var g=.5-.5*y;p<g?p=0:(p=(p-g)/y)>1&&(p=1)}return p*this.a.v},getValue:function(e){this.iterateDynamicProperties(),this._mdf=e||this._mdf,this._currentTextLength=this.elem.textProperty.currentData.l.length||0,e&&2===this.data.r&&(this.e.v=this._currentTextLength);var t=2===this.data.r?1:100/this.data.totalChars,r=this.o.v/t,i=this.s.v/t+r,a=this.e.v/t+r;if(i>a){var n=i;i=a,a=n}this.finalS=i,this.finalE=a}},extendPrototype([DynamicPropertyContainer],i),{getTextSelectorProp:function(e,t,r){return new i(e,t)}}}();function TextAnimatorDataProperty(e,t,r){var i={propType:!1},a=PropertyFactory.getProp,n=t.a;this.a={r:n.r?a(e,n.r,0,degToRads,r):i,rx:n.rx?a(e,n.rx,0,degToRads,r):i,ry:n.ry?a(e,n.ry,0,degToRads,r):i,sk:n.sk?a(e,n.sk,0,degToRads,r):i,sa:n.sa?a(e,n.sa,0,degToRads,r):i,s:n.s?a(e,n.s,1,.01,r):i,a:n.a?a(e,n.a,1,0,r):i,o:n.o?a(e,n.o,0,.01,r):i,p:n.p?a(e,n.p,1,0,r):i,sw:n.sw?a(e,n.sw,0,0,r):i,sc:n.sc?a(e,n.sc,1,0,r):i,fc:n.fc?a(e,n.fc,1,0,r):i,fh:n.fh?a(e,n.fh,0,0,r):i,fs:n.fs?a(e,n.fs,0,.01,r):i,fb:n.fb?a(e,n.fb,0,.01,r):i,t:n.t?a(e,n.t,0,0,r):i},this.s=TextSelectorProp.getTextSelectorProp(e,t.s,r),this.s.t=t.s.t}function TextAnimatorProperty(e,t,r){this._isFirstFrame=!0,this._hasMaskedPath=!1,this._frameId=-1,this._textData=e,this._renderType=t,this._elem=r,this._animatorsData=createSizedArray(this._textData.a.length),this._pathData={},this._moreOptions={alignment:{}},this.renderedLetters=[],this.lettersChangedFlag=!1,this.initDynamicPropertyContainer(r)}function ITextElement(){}TextAnimatorProperty.prototype.searchProperties=function(){var e,t,r=this._textData.a.length,i=PropertyFactory.getProp;for(e=0;e<r;e+=1)t=this._textData.a[e],this._animatorsData[e]=new TextAnimatorDataProperty(this._elem,t,this);this._textData.p&&"m"in this._textData.p?(this._pathData={a:i(this._elem,this._textData.p.a,0,0,this),f:i(this._elem,this._textData.p.f,0,0,this),l:i(this._elem,this._textData.p.l,0,0,this),r:i(this._elem,this._textData.p.r,0,0,this),p:i(this._elem,this._textData.p.p,0,0,this),m:this._elem.maskManager.getMaskProperty(this._textData.p.m)},this._hasMaskedPath=!0):this._hasMaskedPath=!1,this._moreOptions.alignment=i(this._elem,this._textData.m.a,1,0,this)},TextAnimatorProperty.prototype.getMeasures=function(e,t){if(this.lettersChangedFlag=t,this._mdf||this._isFirstFrame||t||this._hasMaskedPath&&this._pathData.m._mdf){this._isFirstFrame=!1;var r,i,a,n,o,s,l,p,c,d,h,u,m,f,y,g,_,x,b,v=this._moreOptions.alignment.v,C=this._animatorsData,S=this._textData,$=this.mHelper,w=this._renderType,T=this.renderedLetters.length,k=e.l;if(this._hasMaskedPath){if(b=this._pathData.m,!this._pathData.n||this._pathData._mdf){var E,A=b.v;for(this._pathData.r.v&&(A=A.reverse()),o={tLength:0,segments:[]},n=A._length-1,g=0,a=0;a<n;a+=1)E=bez.buildBezierData(A.v[a],A.v[a+1],[A.o[a][0]-A.v[a][0],A.o[a][1]-A.v[a][1]],[A.i[a+1][0]-A.v[a+1][0],A.i[a+1][1]-A.v[a+1][1]]),o.tLength+=E.segmentLength,o.segments.push(E),g+=E.segmentLength;a=n,b.v.c&&(E=bez.buildBezierData(A.v[a],A.v[0],[A.o[a][0]-A.v[a][0],A.o[a][1]-A.v[a][1]],[A.i[0][0]-A.v[0][0],A.i[0][1]-A.v[0][1]]),o.tLength+=E.segmentLength,o.segments.push(E),g+=E.segmentLength),this._pathData.pi=o}if(o=this._pathData.pi,s=this._pathData.f.v,h=0,d=1,p=0,c=!0,f=o.segments,s<0&&b.v.c)for(o.tLength<Math.abs(s)&&(s=-Math.abs(s)%o.tLength),d=(m=f[h=f.length-1].points).length-1;s<0;)s+=m[d].partialLength,(d-=1)<0&&(d=(m=f[h-=1].points).length-1);u=(m=f[h].points)[d-1],y=(l=m[d]).partialLength}n=k.length,r=0,i=0;var P,I,M,D,F,R=1.2*e.finalSize*.714,j=!0;M=C.length;var L,B,O,N,V,H,z,G,W,U,q,Q,Y=-1,K=s,Z=h,X=d,J=-1,ee="",te=this.defaultPropsArray;if(2===e.j||1===e.j){var re=0,ie=0,ae=2===e.j?-.5:-1,ne=0,oe=!0;for(a=0;a<n;a+=1)if(k[a].n){for(re&&(re+=ie);ne<a;)k[ne].animatorJustifyOffset=re,ne+=1;re=0,oe=!0}else{for(I=0;I<M;I+=1)(P=C[I].a).t.propType&&(oe&&2===e.j&&(ie+=P.t.v*ae),(F=C[I].s.getMult(k[a].anIndexes[I],S.a[I].s.totalChars)).length?re+=P.t.v*F[0]*ae:re+=P.t.v*F*ae);oe=!1}for(re&&(re+=ie);ne<a;)k[ne].animatorJustifyOffset=re,ne+=1}for(a=0;a<n;a+=1){if($.reset(),N=1,k[a].n)r=0,i+=e.yOffset,i+=j?1:0,s=K,j=!1,this._hasMaskedPath&&(d=X,u=(m=f[h=Z].points)[d-1],y=(l=m[d]).partialLength,p=0),ee="",q="",W="",Q="",te=this.defaultPropsArray;else{if(this._hasMaskedPath){if(J!==k[a].line){switch(e.j){case 1:s+=g-e.lineWidths[k[a].line];break;case 2:s+=(g-e.lineWidths[k[a].line])/2}J=k[a].line}Y!==k[a].ind&&(k[Y]&&(s+=k[Y].extra),s+=k[a].an/2,Y=k[a].ind),s+=v[0]*k[a].an*.005;var se=0;for(I=0;I<M;I+=1)(P=C[I].a).p.propType&&((F=C[I].s.getMult(k[a].anIndexes[I],S.a[I].s.totalChars)).length?se+=P.p.v[0]*F[0]:se+=P.p.v[0]*F),P.a.propType&&((F=C[I].s.getMult(k[a].anIndexes[I],S.a[I].s.totalChars)).length?se+=P.a.v[0]*F[0]:se+=P.a.v[0]*F);for(c=!0,this._pathData.a.v&&(s=.5*k[0].an+(g-this._pathData.f.v-.5*k[0].an-.5*k[k.length-1].an)*Y/(n-1),s+=this._pathData.f.v);c;)p+y>=s+se||!m?(_=(s+se-p)/l.partialLength,B=u.point[0]+(l.point[0]-u.point[0])*_,O=u.point[1]+(l.point[1]-u.point[1])*_,$.translate(-v[0]*k[a].an*.005,-v[1]*R*.01),c=!1):m&&(p+=l.partialLength,(d+=1)>=m.length&&(d=0,f[h+=1]?m=f[h].points:b.v.c?(d=0,m=f[h=0].points):(p-=l.partialLength,m=null)),m&&(u=l,y=(l=m[d]).partialLength));L=k[a].an/2-k[a].add,$.translate(-L,0,0)}else L=k[a].an/2-k[a].add,$.translate(-L,0,0),$.translate(-v[0]*k[a].an*.005,-v[1]*R*.01,0);for(I=0;I<M;I+=1)(P=C[I].a).t.propType&&(F=C[I].s.getMult(k[a].anIndexes[I],S.a[I].s.totalChars),0===r&&0===e.j||(this._hasMaskedPath?F.length?s+=P.t.v*F[0]:s+=P.t.v*F:F.length?r+=P.t.v*F[0]:r+=P.t.v*F));for(e.strokeWidthAnim&&(H=e.sw||0),e.strokeColorAnim&&(V=e.sc?[e.sc[0],e.sc[1],e.sc[2]]:[0,0,0]),e.fillColorAnim&&e.fc&&(z=[e.fc[0],e.fc[1],e.fc[2]]),I=0;I<M;I+=1)(P=C[I].a).a.propType&&((F=C[I].s.getMult(k[a].anIndexes[I],S.a[I].s.totalChars)).length?$.translate(-P.a.v[0]*F[0],-P.a.v[1]*F[1],P.a.v[2]*F[2]):$.translate(-P.a.v[0]*F,-P.a.v[1]*F,P.a.v[2]*F));for(I=0;I<M;I+=1)(P=C[I].a).s.propType&&((F=C[I].s.getMult(k[a].anIndexes[I],S.a[I].s.totalChars)).length?$.scale(1+(P.s.v[0]-1)*F[0],1+(P.s.v[1]-1)*F[1],1):$.scale(1+(P.s.v[0]-1)*F,1+(P.s.v[1]-1)*F,1));for(I=0;I<M;I+=1){if(P=C[I].a,F=C[I].s.getMult(k[a].anIndexes[I],S.a[I].s.totalChars),P.sk.propType&&(F.length?$.skewFromAxis(-P.sk.v*F[0],P.sa.v*F[1]):$.skewFromAxis(-P.sk.v*F,P.sa.v*F)),P.r.propType&&(F.length?$.rotateZ(-P.r.v*F[2]):$.rotateZ(-P.r.v*F)),P.ry.propType&&(F.length?$.rotateY(P.ry.v*F[1]):$.rotateY(P.ry.v*F)),P.rx.propType&&(F.length?$.rotateX(P.rx.v*F[0]):$.rotateX(P.rx.v*F)),P.o.propType&&(F.length?N+=(P.o.v*F[0]-N)*F[0]:N+=(P.o.v*F-N)*F),e.strokeWidthAnim&&P.sw.propType&&(F.length?H+=P.sw.v*F[0]:H+=P.sw.v*F),e.strokeColorAnim&&P.sc.propType)for(G=0;G<3;G+=1)F.length?V[G]+=(P.sc.v[G]-V[G])*F[0]:V[G]+=(P.sc.v[G]-V[G])*F;if(e.fillColorAnim&&e.fc){if(P.fc.propType)for(G=0;G<3;G+=1)F.length?z[G]+=(P.fc.v[G]-z[G])*F[0]:z[G]+=(P.fc.v[G]-z[G])*F;P.fh.propType&&(z=F.length?addHueToRGB(z,P.fh.v*F[0]):addHueToRGB(z,P.fh.v*F)),P.fs.propType&&(z=F.length?addSaturationToRGB(z,P.fs.v*F[0]):addSaturationToRGB(z,P.fs.v*F)),P.fb.propType&&(z=F.length?addBrightnessToRGB(z,P.fb.v*F[0]):addBrightnessToRGB(z,P.fb.v*F))}}for(I=0;I<M;I+=1)(P=C[I].a).p.propType&&(F=C[I].s.getMult(k[a].anIndexes[I],S.a[I].s.totalChars),this._hasMaskedPath?F.length?$.translate(0,P.p.v[1]*F[0],-P.p.v[2]*F[1]):$.translate(0,P.p.v[1]*F,-P.p.v[2]*F):F.length?$.translate(P.p.v[0]*F[0],P.p.v[1]*F[1],-P.p.v[2]*F[2]):$.translate(P.p.v[0]*F,P.p.v[1]*F,-P.p.v[2]*F));if(e.strokeWidthAnim&&(W=H<0?0:H),e.strokeColorAnim&&(U="rgb("+Math.round(255*V[0])+","+Math.round(255*V[1])+","+Math.round(255*V[2])+")"),e.fillColorAnim&&e.fc&&(q="rgb("+Math.round(255*z[0])+","+Math.round(255*z[1])+","+Math.round(255*z[2])+")"),this._hasMaskedPath){if($.translate(0,-e.ls),$.translate(0,v[1]*R*.01+i,0),this._pathData.p.v){x=(l.point[1]-u.point[1])/(l.point[0]-u.point[0]);var le=180*Math.atan(x)/Math.PI;l.point[0]<u.point[0]&&(le+=180),$.rotate(-le*Math.PI/180)}$.translate(B,O,0),s-=v[0]*k[a].an*.005,k[a+1]&&Y!==k[a+1].ind&&(s+=k[a].an/2,s+=.001*e.tr*e.finalSize)}else{switch($.translate(r,i,0),e.ps&&$.translate(e.ps[0],e.ps[1]+e.ascent,0),e.j){case 1:$.translate(k[a].animatorJustifyOffset+e.justifyOffset+(e.boxWidth-e.lineWidths[k[a].line]),0,0);break;case 2:$.translate(k[a].animatorJustifyOffset+e.justifyOffset+(e.boxWidth-e.lineWidths[k[a].line])/2,0,0)}$.translate(0,-e.ls),$.translate(L,0,0),$.translate(v[0]*k[a].an*.005,v[1]*R*.01,0),r+=k[a].l+.001*e.tr*e.finalSize}"html"===w?ee=$.toCSS():"svg"===w?ee=$.to2dCSS():te=[$.props[0],$.props[1],$.props[2],$.props[3],$.props[4],$.props[5],$.props[6],$.props[7],$.props[8],$.props[9],$.props[10],$.props[11],$.props[12],$.props[13],$.props[14],$.props[15]],Q=N}T<=a?(D=new LetterProps(Q,W,U,q,ee,te),this.renderedLetters.push(D),T+=1,this.lettersChangedFlag=!0):(D=this.renderedLetters[a],this.lettersChangedFlag=D.update(Q,W,U,q,ee,te)||this.lettersChangedFlag)}}},TextAnimatorProperty.prototype.getValue=function(){this._elem.globalData.frameId!==this._frameId&&(this._frameId=this._elem.globalData.frameId,this.iterateDynamicProperties())},TextAnimatorProperty.prototype.mHelper=new Matrix,TextAnimatorProperty.prototype.defaultPropsArray=[],extendPrototype([DynamicPropertyContainer],TextAnimatorProperty),ITextElement.prototype.initElement=function(e,t,r){this.lettersChangedFlag=!0,this.initFrame(),this.initBaseData(e,t,r),this.textProperty=new TextProperty(this,e.t,this.dynamicProperties),this.textAnimator=new TextAnimatorProperty(e.t,this.renderType,this),this.initTransform(e,t,r),this.initHierarchy(),this.initRenderable(),this.initRendererElement(),this.createContainerElements(),this.createRenderableComponents(),this.createContent(),this.hide(),this.textAnimator.searchProperties(this.dynamicProperties)},ITextElement.prototype.prepareFrame=function(e){this._mdf=!1,this.prepareRenderableFrame(e),this.prepareProperties(e,this.isInRange),(this.textProperty._mdf||this.textProperty._isFirstFrame)&&(this.buildNewText(),this.textProperty._isFirstFrame=!1,this.textProperty._mdf=!1)},ITextElement.prototype.createPathShape=function(e,t){var r,i,a=t.length,n="";for(r=0;r<a;r+=1)"sh"===t[r].ty&&(i=t[r].ks.k,n+=buildShapeString(i,i.i.length,!0,e));return n},ITextElement.prototype.updateDocumentData=function(e,t){this.textProperty.updateDocumentData(e,t)},ITextElement.prototype.canResizeFont=function(e){this.textProperty.canResizeFont(e)},ITextElement.prototype.setMinimumFontSize=function(e){this.textProperty.setMinimumFontSize(e)},ITextElement.prototype.applyTextPropertiesToMatrix=function(e,t,r,i,a){switch(e.ps&&t.translate(e.ps[0],e.ps[1]+e.ascent,0),t.translate(0,-e.ls,0),e.j){case 1:t.translate(e.justifyOffset+(e.boxWidth-e.lineWidths[r]),0,0);break;case 2:t.translate(e.justifyOffset+(e.boxWidth-e.lineWidths[r])/2,0,0)}t.translate(i,a,0)},ITextElement.prototype.buildColor=function(e){return"rgb("+Math.round(255*e[0])+","+Math.round(255*e[1])+","+Math.round(255*e[2])+")"},ITextElement.prototype.emptyProp=new LetterProps,ITextElement.prototype.destroy=function(){};var emptyShapeData={shapes:[]};function SVGTextLottieElement(e,t,r){this.textSpans=[],this.renderType="svg",this.initElement(e,t,r)}function ISolidElement(e,t,r){this.initElement(e,t,r)}function NullElement(e,t,r){this.initFrame(),this.initBaseData(e,t,r),this.initFrame(),this.initTransform(e,t,r),this.initHierarchy()}function SVGRendererBase(){}function ICompElement(){}function SVGCompElement(e,t,r){this.layers=e.layers,this.supports3d=!0,this.completeLayers=!1,this.pendingElements=[],this.elements=this.layers?createSizedArray(this.layers.length):[],this.initElement(e,t,r),this.tm=e.tm?PropertyFactory.getProp(this,e.tm,0,t.frameRate,this):{_placeholder:!0}}function SVGRenderer(e,t){this.animationItem=e,this.layers=null,this.renderedFrame=-1,this.svgElement=createNS("svg");var r="";if(t&&t.title){var i=createNS("title"),a=createElementID();i.setAttribute("id",a),i.textContent=t.title,this.svgElement.appendChild(i),r+=a}if(t&&t.description){var n=createNS("desc"),o=createElementID();n.setAttribute("id",o),n.textContent=t.description,this.svgElement.appendChild(n),r+=" "+o}r&&this.svgElement.setAttribute("aria-labelledby",r);var s=createNS("defs");this.svgElement.appendChild(s);var l=createNS("g");this.svgElement.appendChild(l),this.layerElement=l,this.renderConfig={preserveAspectRatio:t&&t.preserveAspectRatio||"xMidYMid meet",imagePreserveAspectRatio:t&&t.imagePreserveAspectRatio||"xMidYMid slice",contentVisibility:t&&t.contentVisibility||"visible",progressiveLoad:t&&t.progressiveLoad||!1,hideOnTransparent:!(t&&!1===t.hideOnTransparent),viewBoxOnly:t&&t.viewBoxOnly||!1,viewBoxSize:t&&t.viewBoxSize||!1,className:t&&t.className||"",id:t&&t.id||"",focusable:t&&t.focusable,filterSize:{width:t&&t.filterSize&&t.filterSize.width||"100%",height:t&&t.filterSize&&t.filterSize.height||"100%",x:t&&t.filterSize&&t.filterSize.x||"0%",y:t&&t.filterSize&&t.filterSize.y||"0%"},width:t&&t.width,height:t&&t.height,runExpressions:!t||void 0===t.runExpressions||t.runExpressions},this.globalData={_mdf:!1,frameNum:-1,defs:s,renderConfig:this.renderConfig},this.elements=[],this.pendingElements=[],this.destroyed=!1,this.rendererType="svg"}function CVContextData(){var e;for(this.saved=[],this.cArrPos=0,this.cTr=new Matrix,this.cO=1,this.savedOp=createTypedArray("float32",15),e=0;e<15;e+=1)this.saved[e]=createTypedArray("float32",16);this._length=15}function ShapeTransformManager(){this.sequences={},this.sequenceList=[],this.transform_key_count=0}extendPrototype([BaseElement,TransformElement,SVGBaseElement,HierarchyElement,FrameElement,RenderableDOMElement,ITextElement],SVGTextLottieElement),SVGTextLottieElement.prototype.createContent=function(){this.data.singleShape&&!this.globalData.fontManager.chars&&(this.textContainer=createNS("text"))},SVGTextLottieElement.prototype.buildTextContents=function(e){for(var t=0,r=e.length,i=[],a="";t<r;)e[t]===String.fromCharCode(13)||e[t]===String.fromCharCode(3)?(i.push(a),a=""):a+=e[t],t+=1;return i.push(a),i},SVGTextLottieElement.prototype.buildShapeData=function(e,t){if(e.shapes&&e.shapes.length){var r=e.shapes[0];if(r.it){var i=r.it[r.it.length-1];i.s&&(i.s.k[0]=t,i.s.k[1]=t)}}return e},SVGTextLottieElement.prototype.buildNewText=function(){var e,t;this.addDynamicProperty(this);var r=this.textProperty.currentData;this.renderedLetters=createSizedArray(r?r.l.length:0),r.fc?this.layerElement.setAttribute("fill",this.buildColor(r.fc)):this.layerElement.setAttribute("fill","rgba(0,0,0,0)"),r.sc&&(this.layerElement.setAttribute("stroke",this.buildColor(r.sc)),this.layerElement.setAttribute("stroke-width",r.sw)),this.layerElement.setAttribute("font-size",r.finalSize);var i=this.globalData.fontManager.getFontByName(r.f);if(i.fClass)this.layerElement.setAttribute("class",i.fClass);else{this.layerElement.setAttribute("font-family",i.fFamily);var a=r.fWeight,n=r.fStyle;this.layerElement.setAttribute("font-style",n),this.layerElement.setAttribute("font-weight",a)}this.layerElement.setAttribute("aria-label",r.t);var o,s=r.l||[],l=!!this.globalData.fontManager.chars;t=s.length;var p=this.mHelper,c=this.data.singleShape,d=0,h=0,u=!0,m=.001*r.tr*r.finalSize;if(!c||l||r.sz){var f,y=this.textSpans.length;for(e=0;e<t;e+=1){if(this.textSpans[e]||(this.textSpans[e]={span:null,childSpan:null,glyph:null}),!l||!c||0===e){if(o=y>e?this.textSpans[e].span:createNS(l?"g":"text"),y<=e){if(o.setAttribute("stroke-linecap","butt"),o.setAttribute("stroke-linejoin","round"),o.setAttribute("stroke-miterlimit","4"),this.textSpans[e].span=o,l){var g=createNS("g");o.appendChild(g),this.textSpans[e].childSpan=g}this.textSpans[e].span=o,this.layerElement.appendChild(o)}o.style.display="inherit"}if(p.reset(),c&&(s[e].n&&(d=-m,h+=r.yOffset,h+=u?1:0,u=!1),this.applyTextPropertiesToMatrix(r,p,s[e].line,d,h),d+=s[e].l||0,d+=m),l){var _;if(1===(f=this.globalData.fontManager.getCharData(r.finalText[e],i.fStyle,this.globalData.fontManager.getFontByName(r.f).fFamily)).t)_=new SVGCompElement(f.data,this.globalData,this);else{var x=emptyShapeData;f.data&&f.data.shapes&&(x=this.buildShapeData(f.data,r.finalSize)),_=new SVGShapeElement(x,this.globalData,this)}if(this.textSpans[e].glyph){var b=this.textSpans[e].glyph;this.textSpans[e].childSpan.removeChild(b.layerElement),b.destroy()}this.textSpans[e].glyph=_,_._debug=!0,_.prepareFrame(0),_.renderFrame(),this.textSpans[e].childSpan.appendChild(_.layerElement),1===f.t&&this.textSpans[e].childSpan.setAttribute("transform","scale("+r.finalSize/100+","+r.finalSize/100+")")}else c&&o.setAttribute("transform","translate("+p.props[12]+","+p.props[13]+")"),o.textContent=s[e].val,o.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve")}c&&o&&o.setAttribute("d","")}else{var v=this.textContainer,C="start";switch(r.j){case 1:C="end";break;case 2:C="middle";break;default:C="start"}v.setAttribute("text-anchor",C),v.setAttribute("letter-spacing",m);var S=this.buildTextContents(r.finalText);for(t=S.length,h=r.ps?r.ps[1]+r.ascent:0,e=0;e<t;e+=1)(o=this.textSpans[e].span||createNS("tspan")).textContent=S[e],o.setAttribute("x",0),o.setAttribute("y",h),o.style.display="inherit",v.appendChild(o),this.textSpans[e]||(this.textSpans[e]={span:null,glyph:null}),this.textSpans[e].span=o,h+=r.finalLineHeight;this.layerElement.appendChild(v)}for(;e<this.textSpans.length;)this.textSpans[e].span.style.display="none",e+=1;this._sizeChanged=!0},SVGTextLottieElement.prototype.sourceRectAtTime=function(){if(this.prepareFrame(this.comp.renderedFrame-this.data.st),this.renderInnerContent(),this._sizeChanged){this._sizeChanged=!1;var e=this.layerElement.getBBox();this.bbox={top:e.y,left:e.x,width:e.width,height:e.height}}return this.bbox},SVGTextLottieElement.prototype.getValue=function(){var e,t,r=this.textSpans.length;for(this.renderedFrame=this.comp.renderedFrame,e=0;e<r;e+=1)(t=this.textSpans[e].glyph)&&(t.prepareFrame(this.comp.renderedFrame-this.data.st),t._mdf&&(this._mdf=!0))},SVGTextLottieElement.prototype.renderInnerContent=function(){if((!this.data.singleShape||this._mdf)&&(this.textAnimator.getMeasures(this.textProperty.currentData,this.lettersChangedFlag),this.lettersChangedFlag||this.textAnimator.lettersChangedFlag)){var e,t;this._sizeChanged=!0;var r,i,a,n=this.textAnimator.renderedLetters,o=this.textProperty.currentData.l;for(t=o.length,e=0;e<t;e+=1)o[e].n||(r=n[e],i=this.textSpans[e].span,(a=this.textSpans[e].glyph)&&a.renderFrame(),r._mdf.m&&i.setAttribute("transform",r.m),r._mdf.o&&i.setAttribute("opacity",r.o),r._mdf.sw&&i.setAttribute("stroke-width",r.sw),r._mdf.sc&&i.setAttribute("stroke",r.sc),r._mdf.fc&&i.setAttribute("fill",r.fc))}},extendPrototype([IImageElement],ISolidElement),ISolidElement.prototype.createContent=function(){var e=createNS("rect");e.setAttribute("width",this.data.sw),e.setAttribute("height",this.data.sh),e.setAttribute("fill",this.data.sc),this.layerElement.appendChild(e)},NullElement.prototype.prepareFrame=function(e){this.prepareProperties(e,!0)},NullElement.prototype.renderFrame=function(){},NullElement.prototype.getBaseElement=function(){return null},NullElement.prototype.destroy=function(){},NullElement.prototype.sourceRectAtTime=function(){},NullElement.prototype.hide=function(){},extendPrototype([BaseElement,TransformElement,HierarchyElement,FrameElement],NullElement),extendPrototype([BaseRenderer],SVGRendererBase),SVGRendererBase.prototype.createNull=function(e){return new NullElement(e,this.globalData,this)},SVGRendererBase.prototype.createShape=function(e){return new SVGShapeElement(e,this.globalData,this)},SVGRendererBase.prototype.createText=function(e){return new SVGTextLottieElement(e,this.globalData,this)},SVGRendererBase.prototype.createImage=function(e){return new IImageElement(e,this.globalData,this)},SVGRendererBase.prototype.createSolid=function(e){return new ISolidElement(e,this.globalData,this)},SVGRendererBase.prototype.configAnimation=function(e){this.svgElement.setAttribute("xmlns","http://www.w3.org/2000/svg"),this.svgElement.setAttribute("xmlns:xlink","http://www.w3.org/1999/xlink"),this.renderConfig.viewBoxSize?this.svgElement.setAttribute("viewBox",this.renderConfig.viewBoxSize):this.svgElement.setAttribute("viewBox","0 0 "+e.w+" "+e.h),this.renderConfig.viewBoxOnly||(this.svgElement.setAttribute("width",e.w),this.svgElement.setAttribute("height",e.h),this.svgElement.style.width="100%",this.svgElement.style.height="100%",this.svgElement.style.transform="translate3d(0,0,0)",this.svgElement.style.contentVisibility=this.renderConfig.contentVisibility),this.renderConfig.width&&this.svgElement.setAttribute("width",this.renderConfig.width),this.renderConfig.height&&this.svgElement.setAttribute("height",this.renderConfig.height),this.renderConfig.className&&this.svgElement.setAttribute("class",this.renderConfig.className),this.renderConfig.id&&this.svgElement.setAttribute("id",this.renderConfig.id),void 0!==this.renderConfig.focusable&&this.svgElement.setAttribute("focusable",this.renderConfig.focusable),this.svgElement.setAttribute("preserveAspectRatio",this.renderConfig.preserveAspectRatio),this.animationItem.wrapper.appendChild(this.svgElement);var t=this.globalData.defs;this.setupGlobalData(e,t),this.globalData.progressiveLoad=this.renderConfig.progressiveLoad,this.data=e;var r=createNS("clipPath"),i=createNS("rect");i.setAttribute("width",e.w),i.setAttribute("height",e.h),i.setAttribute("x",0),i.setAttribute("y",0);var a=createElementID();r.setAttribute("id",a),r.appendChild(i),this.layerElement.setAttribute("clip-path","url("+getLocationHref()+"#"+a+")"),t.appendChild(r),this.layers=e.layers,this.elements=createSizedArray(e.layers.length)},SVGRendererBase.prototype.destroy=function(){var e;this.animationItem.wrapper&&(this.animationItem.wrapper.innerText=""),this.layerElement=null,this.globalData.defs=null;var t=this.layers?this.layers.length:0;for(e=0;e<t;e+=1)this.elements[e]&&this.elements[e].destroy&&this.elements[e].destroy();this.elements.length=0,this.destroyed=!0,this.animationItem=null},SVGRendererBase.prototype.updateContainerSize=function(){},SVGRendererBase.prototype.findIndexByInd=function(e){var t=0,r=this.layers.length;for(t=0;t<r;t+=1)if(this.layers[t].ind===e)return t;return-1},SVGRendererBase.prototype.buildItem=function(e){var t=this.elements;if(!t[e]&&99!==this.layers[e].ty){t[e]=!0;var r=this.createItem(this.layers[e]);if(t[e]=r,getExpressionsPlugin()&&(0===this.layers[e].ty&&this.globalData.projectInterface.registerComposition(r),r.initExpressions()),this.appendElementInPos(r,e),this.layers[e].tt){var i="tp"in this.layers[e]?this.findIndexByInd(this.layers[e].tp):e-1;if(-1===i)return;if(this.elements[i]&&!0!==this.elements[i]){var a=t[i].getMatte(this.layers[e].tt);r.setMatte(a)}else this.buildItem(i),this.addPendingElement(r)}}},SVGRendererBase.prototype.checkPendingElements=function(){for(;this.pendingElements.length;){var e=this.pendingElements.pop();if(e.checkParenting(),e.data.tt)for(var t=0,r=this.elements.length;t<r;){if(this.elements[t]===e){var i="tp"in e.data?this.findIndexByInd(e.data.tp):t-1,a=this.elements[i].getMatte(this.layers[t].tt);e.setMatte(a);break}t+=1}}},SVGRendererBase.prototype.renderFrame=function(e){if(this.renderedFrame!==e&&!this.destroyed){var t;null===e?e=this.renderedFrame:this.renderedFrame=e,this.globalData.frameNum=e,this.globalData.frameId+=1,this.globalData.projectInterface.currentFrame=e,this.globalData._mdf=!1;var r=this.layers.length;for(this.completeLayers||this.checkLayers(e),t=r-1;t>=0;t-=1)(this.completeLayers||this.elements[t])&&this.elements[t].prepareFrame(e-this.layers[t].st);if(this.globalData._mdf)for(t=0;t<r;t+=1)(this.completeLayers||this.elements[t])&&this.elements[t].renderFrame()}},SVGRendererBase.prototype.appendElementInPos=function(e,t){var r=e.getBaseElement();if(r){for(var i,a=0;a<t;)this.elements[a]&&!0!==this.elements[a]&&this.elements[a].getBaseElement()&&(i=this.elements[a].getBaseElement()),a+=1;i?this.layerElement.insertBefore(r,i):this.layerElement.appendChild(r)}},SVGRendererBase.prototype.hide=function(){this.layerElement.style.display="none"},SVGRendererBase.prototype.show=function(){this.layerElement.style.display="block"},extendPrototype([BaseElement,TransformElement,HierarchyElement,FrameElement,RenderableDOMElement],ICompElement),ICompElement.prototype.initElement=function(e,t,r){this.initFrame(),this.initBaseData(e,t,r),this.initTransform(e,t,r),this.initRenderable(),this.initHierarchy(),this.initRendererElement(),this.createContainerElements(),this.createRenderableComponents(),!this.data.xt&&t.progressiveLoad||this.buildAllItems(),this.hide()},ICompElement.prototype.prepareFrame=function(e){if(this._mdf=!1,this.prepareRenderableFrame(e),this.prepareProperties(e,this.isInRange),this.isInRange||this.data.xt){if(this.tm._placeholder)this.renderedFrame=e/this.data.sr;else{var t=this.tm.v;t===this.data.op&&(t=this.data.op-1),this.renderedFrame=t}var r,i=this.elements.length;for(this.completeLayers||this.checkLayers(this.renderedFrame),r=i-1;r>=0;r-=1)(this.completeLayers||this.elements[r])&&(this.elements[r].prepareFrame(this.renderedFrame-this.layers[r].st),this.elements[r]._mdf&&(this._mdf=!0))}},ICompElement.prototype.renderInnerContent=function(){var e,t=this.layers.length;for(e=0;e<t;e+=1)(this.completeLayers||this.elements[e])&&this.elements[e].renderFrame()},ICompElement.prototype.setElements=function(e){this.elements=e},ICompElement.prototype.getElements=function(){return this.elements},ICompElement.prototype.destroyElements=function(){var e,t=this.layers.length;for(e=0;e<t;e+=1)this.elements[e]&&this.elements[e].destroy()},ICompElement.prototype.destroy=function(){this.destroyElements(),this.destroyBaseElement()},extendPrototype([SVGRendererBase,ICompElement,SVGBaseElement],SVGCompElement),SVGCompElement.prototype.createComp=function(e){return new SVGCompElement(e,this.globalData,this)},extendPrototype([SVGRendererBase],SVGRenderer),SVGRenderer.prototype.createComp=function(e){return new SVGCompElement(e,this.globalData,this)},CVContextData.prototype.duplicate=function(){var e=2*this._length,t=this.savedOp;this.savedOp=createTypedArray("float32",e),this.savedOp.set(t);var r=0;for(r=this._length;r<e;r+=1)this.saved[r]=createTypedArray("float32",16);this._length=e},CVContextData.prototype.reset=function(){this.cArrPos=0,this.cTr.reset(),this.cO=1},CVContextData.prototype.popTransform=function(){var e,t=this.saved[this.cArrPos],r=this.cTr.props;for(e=0;e<16;e+=1)r[e]=t[e];return t},CVContextData.prototype.popOpacity=function(){var e=this.savedOp[this.cArrPos];return this.cO=e,e},CVContextData.prototype.pop=function(){return this.cArrPos-=1,{transform:this.popTransform(),opacity:this.popOpacity()}},CVContextData.prototype.push=function(){var e,t=this.cTr.props;this._length<=this.cArrPos&&this.duplicate();var r=this.saved[this.cArrPos];for(e=0;e<16;e+=1)r[e]=t[e];this.savedOp[this.cArrPos]=this.cO,this.cArrPos+=1},CVContextData.prototype.getTransform=function(){return this.cTr},CVContextData.prototype.getOpacity=function(){return this.cO},CVContextData.prototype.setOpacity=function(e){this.cO=e},ShapeTransformManager.prototype={addTransformSequence:function(e){var t,r=e.length,i="_";for(t=0;t<r;t+=1)i+=e[t].transform.key+"_";var a=this.sequences[i];return a||(a={transforms:[].concat(e),finalTransform:new Matrix,_mdf:!1},this.sequences[i]=a,this.sequenceList.push(a)),a},processSequence:function(e,t){for(var r,i=0,a=e.transforms.length,n=t;i<a&&!t;){if(e.transforms[i].transform.mProps._mdf){n=!0;break}i+=1}if(n)for(e.finalTransform.reset(),i=a-1;i>=0;i-=1)r=e.transforms[i].transform.mProps.v.props,e.finalTransform.transform(r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7],r[8],r[9],r[10],r[11],r[12],r[13],r[14],r[15]);e._mdf=n},processSequences:function(e){var t,r=this.sequenceList.length;for(t=0;t<r;t+=1)this.processSequence(this.sequenceList[t],e)},getNewKey:function(){return this.transform_key_count+=1,"_"+this.transform_key_count}};var lumaLoader=function(){var e="__lottie_element_luma_buffer",t=null,r=null,i=null;function a(){var a,n,o;t||(a=createNS("svg"),n=createNS("filter"),o=createNS("feColorMatrix"),n.setAttribute("id",e),o.setAttribute("type","matrix"),o.setAttribute("color-interpolation-filters","sRGB"),o.setAttribute("values","0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0"),n.appendChild(o),a.appendChild(n),a.setAttribute("id",e+"_svg"),featureSupport.svgLumaHidden&&(a.style.display="none"),i=a,document.body.appendChild(i),t=createTag("canvas"),(r=t.getContext("2d")).filter="url(#"+e+")",r.fillStyle="rgba(0,0,0,0)",r.fillRect(0,0,1,1))}return{load:a,get:function(i){return t||a(),t.width=i.width,t.height=i.height,r.filter="url(#"+e+")",t}}};function createCanvas(e,t){if(featureSupport.offscreenCanvas)return new OffscreenCanvas(e,t);var r=createTag("canvas");return r.width=e,r.height=t,r}var assetLoader={loadLumaCanvas:lumaLoader.load,getLumaCanvas:lumaLoader.get,createCanvas:createCanvas};function CVEffects(){}function CVMaskElement(e,t){var r;this.data=e,this.element=t,this.masksProperties=this.data.masksProperties||[],this.viewData=createSizedArray(this.masksProperties.length);var i=this.masksProperties.length,a=!1;for(r=0;r<i;r+=1)"n"!==this.masksProperties[r].mode&&(a=!0),this.viewData[r]=ShapePropertyFactory.getShapeProp(this.element,this.masksProperties[r],3);this.hasMasks=a,a&&this.element.addRenderableComponent(this)}function CVBaseElement(){}CVEffects.prototype.renderFrame=function(){},CVMaskElement.prototype.renderFrame=function(){if(this.hasMasks){var e,t,r,i,a=this.element.finalTransform.mat,n=this.element.canvasContext,o=this.masksProperties.length;for(n.beginPath(),e=0;e<o;e+=1)if("n"!==this.masksProperties[e].mode){var s;this.masksProperties[e].inv&&(n.moveTo(0,0),n.lineTo(this.element.globalData.compSize.w,0),n.lineTo(this.element.globalData.compSize.w,this.element.globalData.compSize.h),n.lineTo(0,this.element.globalData.compSize.h),n.lineTo(0,0)),i=this.viewData[e].v,t=a.applyToPointArray(i.v[0][0],i.v[0][1],0),n.moveTo(t[0],t[1]);var l=i._length;for(s=1;s<l;s+=1)r=a.applyToTriplePoints(i.o[s-1],i.i[s],i.v[s]),n.bezierCurveTo(r[0],r[1],r[2],r[3],r[4],r[5]);r=a.applyToTriplePoints(i.o[s-1],i.i[0],i.v[0]),n.bezierCurveTo(r[0],r[1],r[2],r[3],r[4],r[5])}this.element.globalData.renderer.save(!0),n.clip()}},CVMaskElement.prototype.getMaskProperty=MaskElement.prototype.getMaskProperty,CVMaskElement.prototype.destroy=function(){this.element=null};var operationsMap={1:"source-in",2:"source-out",3:"source-in",4:"source-out"};function CVShapeData(e,t,r,i){this.styledShapes=[],this.tr=[0,0,0,0,0,0];var a,n=4;"rc"===t.ty?n=5:"el"===t.ty?n=6:"sr"===t.ty&&(n=7),this.sh=ShapePropertyFactory.getShapeProp(e,t,n,e);var o,s=r.length;for(a=0;a<s;a+=1)r[a].closed||(o={transforms:i.addTransformSequence(r[a].transforms),trNodes:[]},this.styledShapes.push(o),r[a].elements.push(o))}function CVShapeElement(e,t,r){this.shapes=[],this.shapesData=e.shapes,this.stylesList=[],this.itemsData=[],this.prevViewData=[],this.shapeModifiers=[],this.processedElements=[],this.transformsManager=new ShapeTransformManager,this.initElement(e,t,r)}function CVTextElement(e,t,r){this.textSpans=[],this.yOffset=0,this.fillColorAnim=!1,this.strokeColorAnim=!1,this.strokeWidthAnim=!1,this.stroke=!1,this.fill=!1,this.justifyOffset=0,this.currentRender=null,this.renderType="canvas",this.values={fill:"rgba(0,0,0,0)",stroke:"rgba(0,0,0,0)",sWidth:0,fValue:""},this.initElement(e,t,r)}function CVImageElement(e,t,r){this.assetData=t.getAssetData(e.refId),this.img=t.imageLoader.getAsset(this.assetData),this.initElement(e,t,r)}function CVSolidElement(e,t,r){this.initElement(e,t,r)}function CanvasRendererBase(e,t){this.animationItem=e,this.renderConfig={clearCanvas:!t||void 0===t.clearCanvas||t.clearCanvas,context:t&&t.context||null,progressiveLoad:t&&t.progressiveLoad||!1,preserveAspectRatio:t&&t.preserveAspectRatio||"xMidYMid meet",imagePreserveAspectRatio:t&&t.imagePreserveAspectRatio||"xMidYMid slice",contentVisibility:t&&t.contentVisibility||"visible",className:t&&t.className||"",id:t&&t.id||""},this.renderConfig.dpr=t&&t.dpr||1,this.animationItem.wrapper&&(this.renderConfig.dpr=t&&t.dpr||window.devicePixelRatio||1),this.renderedFrame=-1,this.globalData={frameNum:-1,_mdf:!1,renderConfig:this.renderConfig,currentGlobalAlpha:-1},this.contextData=new CVContextData,this.elements=[],this.pendingElements=[],this.transformMat=new Matrix,this.completeLayers=!1,this.rendererType="canvas"}function CVCompElement(e,t,r){this.completeLayers=!1,this.layers=e.layers,this.pendingElements=[],this.elements=createSizedArray(this.layers.length),this.initElement(e,t,r),this.tm=e.tm?PropertyFactory.getProp(this,e.tm,0,t.frameRate,this):{_placeholder:!0}}function CanvasRenderer(e,t){this.animationItem=e,this.renderConfig={clearCanvas:!t||void 0===t.clearCanvas||t.clearCanvas,context:t&&t.context||null,progressiveLoad:t&&t.progressiveLoad||!1,preserveAspectRatio:t&&t.preserveAspectRatio||"xMidYMid meet",imagePreserveAspectRatio:t&&t.imagePreserveAspectRatio||"xMidYMid slice",contentVisibility:t&&t.contentVisibility||"visible",className:t&&t.className||"",id:t&&t.id||"",runExpressions:!t||void 0===t.runExpressions||t.runExpressions},this.renderConfig.dpr=t&&t.dpr||1,this.animationItem.wrapper&&(this.renderConfig.dpr=t&&t.dpr||window.devicePixelRatio||1),this.renderedFrame=-1,this.globalData={frameNum:-1,_mdf:!1,renderConfig:this.renderConfig,currentGlobalAlpha:-1},this.contextData=new CVContextData,this.elements=[],this.pendingElements=[],this.transformMat=new Matrix,this.completeLayers=!1,this.rendererType="canvas"}function HBaseElement(){}function HSolidElement(e,t,r){this.initElement(e,t,r)}function HShapeElement(e,t,r){this.shapes=[],this.shapesData=e.shapes,this.stylesList=[],this.shapeModifiers=[],this.itemsData=[],this.processedElements=[],this.animatedContents=[],this.shapesContainer=createNS("g"),this.initElement(e,t,r),this.prevViewData=[],this.currentBBox={x:999999,y:-999999,h:0,w:0}}function HTextElement(e,t,r){this.textSpans=[],this.textPaths=[],this.currentBBox={x:999999,y:-999999,h:0,w:0},this.renderType="svg",this.isMasked=!1,this.initElement(e,t,r)}function HCameraElement(e,t,r){this.initFrame(),this.initBaseData(e,t,r),this.initHierarchy();var i=PropertyFactory.getProp;if(this.pe=i(this,e.pe,0,0,this),e.ks.p.s?(this.px=i(this,e.ks.p.x,1,0,this),this.py=i(this,e.ks.p.y,1,0,this),this.pz=i(this,e.ks.p.z,1,0,this)):this.p=i(this,e.ks.p,1,0,this),e.ks.a&&(this.a=i(this,e.ks.a,1,0,this)),e.ks.or.k.length&&e.ks.or.k[0].to){var a,n=e.ks.or.k.length;for(a=0;a<n;a+=1)e.ks.or.k[a].to=null,e.ks.or.k[a].ti=null}this.or=i(this,e.ks.or,1,degToRads,this),this.or.sh=!0,this.rx=i(this,e.ks.rx,0,degToRads,this),this.ry=i(this,e.ks.ry,0,degToRads,this),this.rz=i(this,e.ks.rz,0,degToRads,this),this.mat=new Matrix,this._prevMat=new Matrix,this._isFirstFrame=!0,this.finalTransform={mProp:this}}function HImageElement(e,t,r){this.assetData=t.getAssetData(e.refId),this.initElement(e,t,r)}function HybridRendererBase(e,t){this.animationItem=e,this.layers=null,this.renderedFrame=-1,this.renderConfig={className:t&&t.className||"",imagePreserveAspectRatio:t&&t.imagePreserveAspectRatio||"xMidYMid slice",hideOnTransparent:!(t&&!1===t.hideOnTransparent),filterSize:{width:t&&t.filterSize&&t.filterSize.width||"400%",height:t&&t.filterSize&&t.filterSize.height||"400%",x:t&&t.filterSize&&t.filterSize.x||"-100%",y:t&&t.filterSize&&t.filterSize.y||"-100%"}},this.globalData={_mdf:!1,frameNum:-1,renderConfig:this.renderConfig},this.pendingElements=[],this.elements=[],this.threeDElements=[],this.destroyed=!1,this.camera=null,this.supports3d=!0,this.rendererType="html"}function HCompElement(e,t,r){this.layers=e.layers,this.supports3d=!e.hasMask,this.completeLayers=!1,this.pendingElements=[],this.elements=this.layers?createSizedArray(this.layers.length):[],this.initElement(e,t,r),this.tm=e.tm?PropertyFactory.getProp(this,e.tm,0,t.frameRate,this):{_placeholder:!0}}function HybridRenderer(e,t){this.animationItem=e,this.layers=null,this.renderedFrame=-1,this.renderConfig={className:t&&t.className||"",imagePreserveAspectRatio:t&&t.imagePreserveAspectRatio||"xMidYMid slice",hideOnTransparent:!(t&&!1===t.hideOnTransparent),filterSize:{width:t&&t.filterSize&&t.filterSize.width||"400%",height:t&&t.filterSize&&t.filterSize.height||"400%",x:t&&t.filterSize&&t.filterSize.x||"-100%",y:t&&t.filterSize&&t.filterSize.y||"-100%"},runExpressions:!t||void 0===t.runExpressions||t.runExpressions},this.globalData={_mdf:!1,frameNum:-1,renderConfig:this.renderConfig},this.pendingElements=[],this.elements=[],this.threeDElements=[],this.destroyed=!1,this.camera=null,this.supports3d=!0,this.rendererType="html"}CVBaseElement.prototype={createElements:function(){},initRendererElement:function(){},createContainerElements:function(){if(this.data.tt>=1){this.buffers=[];var e=this.globalData.canvasContext,t=assetLoader.createCanvas(e.canvas.width,e.canvas.height);this.buffers.push(t);var r=assetLoader.createCanvas(e.canvas.width,e.canvas.height);this.buffers.push(r),this.data.tt>=3&&!document._isProxy&&assetLoader.loadLumaCanvas()}this.canvasContext=this.globalData.canvasContext,this.transformCanvas=this.globalData.transformCanvas,this.renderableEffectsManager=new CVEffects},createContent:function(){},setBlendMode:function(){var e=this.globalData;if(e.blendMode!==this.data.bm){e.blendMode=this.data.bm;var t=getBlendMode(this.data.bm);e.canvasContext.globalCompositeOperation=t}},createRenderableComponents:function(){this.maskManager=new CVMaskElement(this.data,this)},hideElement:function(){this.hidden||this.isInRange&&!this.isTransparent||(this.hidden=!0)},showElement:function(){this.isInRange&&!this.isTransparent&&(this.hidden=!1,this._isFirstFrame=!0,this.maskManager._isFirstFrame=!0)},clearCanvas:function(e){e.clearRect(this.transformCanvas.tx,this.transformCanvas.ty,this.transformCanvas.w*this.transformCanvas.sx,this.transformCanvas.h*this.transformCanvas.sy)},prepareLayer:function(){if(this.data.tt>=1){var e=this.buffers[0].getContext("2d");this.clearCanvas(e),e.drawImage(this.canvasContext.canvas,0,0),this.currentTransform=this.canvasContext.getTransform(),this.canvasContext.setTransform(1,0,0,1,0,0),this.clearCanvas(this.canvasContext),this.canvasContext.setTransform(this.currentTransform)}},exitLayer:function(){if(this.data.tt>=1){var e=this.buffers[1],t=e.getContext("2d");if(this.clearCanvas(t),t.drawImage(this.canvasContext.canvas,0,0),this.canvasContext.setTransform(1,0,0,1,0,0),this.clearCanvas(this.canvasContext),this.canvasContext.setTransform(this.currentTransform),this.comp.getElementById("tp"in this.data?this.data.tp:this.data.ind-1).renderFrame(!0),this.canvasContext.setTransform(1,0,0,1,0,0),this.data.tt>=3&&!document._isProxy){var r=assetLoader.getLumaCanvas(this.canvasContext.canvas);r.getContext("2d").drawImage(this.canvasContext.canvas,0,0),this.clearCanvas(this.canvasContext),this.canvasContext.drawImage(r,0,0)}this.canvasContext.globalCompositeOperation=operationsMap[this.data.tt],this.canvasContext.drawImage(e,0,0),this.canvasContext.globalCompositeOperation="destination-over",this.canvasContext.drawImage(this.buffers[0],0,0),this.canvasContext.setTransform(this.currentTransform),this.canvasContext.globalCompositeOperation="source-over"}},renderFrame:function(e){if(!this.hidden&&!this.data.hd&&(1!==this.data.td||e)){this.renderTransform(),this.renderRenderable(),this.setBlendMode();var t=0===this.data.ty;this.prepareLayer(),this.globalData.renderer.save(t),this.globalData.renderer.ctxTransform(this.finalTransform.mat.props),this.globalData.renderer.ctxOpacity(this.finalTransform.mProp.o.v),this.renderInnerContent(),this.globalData.renderer.restore(t),this.exitLayer(),this.maskManager.hasMasks&&this.globalData.renderer.restore(!0),this._isFirstFrame&&(this._isFirstFrame=!1)}},destroy:function(){this.canvasContext=null,this.data=null,this.globalData=null,this.maskManager.destroy()},mHelper:new Matrix},CVBaseElement.prototype.hide=CVBaseElement.prototype.hideElement,CVBaseElement.prototype.show=CVBaseElement.prototype.showElement,CVShapeData.prototype.setAsAnimated=SVGShapeData.prototype.setAsAnimated,extendPrototype([BaseElement,TransformElement,CVBaseElement,IShapeElement,HierarchyElement,FrameElement,RenderableElement],CVShapeElement),CVShapeElement.prototype.initElement=RenderableDOMElement.prototype.initElement,CVShapeElement.prototype.transformHelper={opacity:1,_opMdf:!1},CVShapeElement.prototype.dashResetter=[],CVShapeElement.prototype.createContent=function(){this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,!0,[])},CVShapeElement.prototype.createStyleElement=function(e,t){var r={data:e,type:e.ty,preTransforms:this.transformsManager.addTransformSequence(t),transforms:[],elements:[],closed:!0===e.hd},i={};if("fl"===e.ty||"st"===e.ty?(i.c=PropertyFactory.getProp(this,e.c,1,255,this),i.c.k||(r.co="rgb("+bmFloor(i.c.v[0])+","+bmFloor(i.c.v[1])+","+bmFloor(i.c.v[2])+")")):"gf"!==e.ty&&"gs"!==e.ty||(i.s=PropertyFactory.getProp(this,e.s,1,null,this),i.e=PropertyFactory.getProp(this,e.e,1,null,this),i.h=PropertyFactory.getProp(this,e.h||{k:0},0,.01,this),i.a=PropertyFactory.getProp(this,e.a||{k:0},0,degToRads,this),i.g=new GradientProperty(this,e.g,this)),i.o=PropertyFactory.getProp(this,e.o,0,.01,this),"st"===e.ty||"gs"===e.ty){if(r.lc=lineCapEnum[e.lc||2],r.lj=lineJoinEnum[e.lj||2],1==e.lj&&(r.ml=e.ml),i.w=PropertyFactory.getProp(this,e.w,0,null,this),i.w.k||(r.wi=i.w.v),e.d){var a=new DashProperty(this,e.d,"canvas",this);i.d=a,i.d.k||(r.da=i.d.dashArray,r.do=i.d.dashoffset[0])}}else r.r=2===e.r?"evenodd":"nonzero";return this.stylesList.push(r),i.style=r,i},CVShapeElement.prototype.createGroupElement=function(){return{it:[],prevViewData:[]}},CVShapeElement.prototype.createTransformElement=function(e){return{transform:{opacity:1,_opMdf:!1,key:this.transformsManager.getNewKey(),op:PropertyFactory.getProp(this,e.o,0,.01,this),mProps:TransformPropertyFactory.getTransformProperty(this,e,this)}}},CVShapeElement.prototype.createShapeElement=function(e){var t=new CVShapeData(this,e,this.stylesList,this.transformsManager);return this.shapes.push(t),this.addShapeToModifiers(t),t},CVShapeElement.prototype.reloadShapes=function(){var e;this._isFirstFrame=!0;var t=this.itemsData.length;for(e=0;e<t;e+=1)this.prevViewData[e]=this.itemsData[e];for(this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,!0,[]),t=this.dynamicProperties.length,e=0;e<t;e+=1)this.dynamicProperties[e].getValue();this.renderModifiers(),this.transformsManager.processSequences(this._isFirstFrame)},CVShapeElement.prototype.addTransformToStyleList=function(e){var t,r=this.stylesList.length;for(t=0;t<r;t+=1)this.stylesList[t].closed||this.stylesList[t].transforms.push(e)},CVShapeElement.prototype.removeTransformFromStyleList=function(){var e,t=this.stylesList.length;for(e=0;e<t;e+=1)this.stylesList[e].closed||this.stylesList[e].transforms.pop()},CVShapeElement.prototype.closeStyles=function(e){var t,r=e.length;for(t=0;t<r;t+=1)e[t].closed=!0},CVShapeElement.prototype.searchShapes=function(e,t,r,i,a){var n,o,s,l,p,c,d=e.length-1,h=[],u=[],m=[].concat(a);for(n=d;n>=0;n-=1){if((l=this.searchProcessedElement(e[n]))?t[n]=r[l-1]:e[n]._shouldRender=i,"fl"===e[n].ty||"st"===e[n].ty||"gf"===e[n].ty||"gs"===e[n].ty)l?t[n].style.closed=!1:t[n]=this.createStyleElement(e[n],m),h.push(t[n].style);else if("gr"===e[n].ty){if(l)for(s=t[n].it.length,o=0;o<s;o+=1)t[n].prevViewData[o]=t[n].it[o];else t[n]=this.createGroupElement(e[n]);this.searchShapes(e[n].it,t[n].it,t[n].prevViewData,i,m)}else"tr"===e[n].ty?(l||(c=this.createTransformElement(e[n]),t[n]=c),m.push(t[n]),this.addTransformToStyleList(t[n])):"sh"===e[n].ty||"rc"===e[n].ty||"el"===e[n].ty||"sr"===e[n].ty?l||(t[n]=this.createShapeElement(e[n])):"tm"===e[n].ty||"rd"===e[n].ty||"pb"===e[n].ty||"zz"===e[n].ty||"op"===e[n].ty?(l?(p=t[n]).closed=!1:((p=ShapeModifiers.getModifier(e[n].ty)).init(this,e[n]),t[n]=p,this.shapeModifiers.push(p)),u.push(p)):"rp"===e[n].ty&&(l?(p=t[n]).closed=!0:(p=ShapeModifiers.getModifier(e[n].ty),t[n]=p,p.init(this,e,n,t),this.shapeModifiers.push(p),i=!1),u.push(p));this.addProcessedElement(e[n],n+1)}for(this.removeTransformFromStyleList(),this.closeStyles(h),d=u.length,n=0;n<d;n+=1)u[n].closed=!0},CVShapeElement.prototype.renderInnerContent=function(){this.transformHelper.opacity=1,this.transformHelper._opMdf=!1,this.renderModifiers(),this.transformsManager.processSequences(this._isFirstFrame),this.renderShape(this.transformHelper,this.shapesData,this.itemsData,!0)},CVShapeElement.prototype.renderShapeTransform=function(e,t){(e._opMdf||t.op._mdf||this._isFirstFrame)&&(t.opacity=e.opacity,t.opacity*=t.op.v,t._opMdf=!0)},CVShapeElement.prototype.drawLayer=function(){var e,t,r,i,a,n,o,s,l,p=this.stylesList.length,c=this.globalData.renderer,d=this.globalData.canvasContext;for(e=0;e<p;e+=1)if(("st"!==(s=(l=this.stylesList[e]).type)&&"gs"!==s||0!==l.wi)&&l.data._shouldRender&&0!==l.coOp&&0!==this.globalData.currentGlobalAlpha){for(c.save(),n=l.elements,"st"===s||"gs"===s?(d.strokeStyle="st"===s?l.co:l.grd,d.lineWidth=l.wi,d.lineCap=l.lc,d.lineJoin=l.lj,d.miterLimit=l.ml||0):d.fillStyle="fl"===s?l.co:l.grd,c.ctxOpacity(l.coOp),"st"!==s&&"gs"!==s&&d.beginPath(),c.ctxTransform(l.preTransforms.finalTransform.props),r=n.length,t=0;t<r;t+=1){for("st"!==s&&"gs"!==s||(d.beginPath(),l.da&&(d.setLineDash(l.da),d.lineDashOffset=l.do)),a=(o=n[t].trNodes).length,i=0;i<a;i+=1)"m"===o[i].t?d.moveTo(o[i].p[0],o[i].p[1]):"c"===o[i].t?d.bezierCurveTo(o[i].pts[0],o[i].pts[1],o[i].pts[2],o[i].pts[3],o[i].pts[4],o[i].pts[5]):d.closePath();"st"!==s&&"gs"!==s||(d.stroke(),l.da&&d.setLineDash(this.dashResetter))}"st"!==s&&"gs"!==s&&d.fill(l.r),c.restore()}},CVShapeElement.prototype.renderShape=function(e,t,r,i){var a,n;for(n=e,a=t.length-1;a>=0;a-=1)"tr"===t[a].ty?(n=r[a].transform,this.renderShapeTransform(e,n)):"sh"===t[a].ty||"el"===t[a].ty||"rc"===t[a].ty||"sr"===t[a].ty?this.renderPath(t[a],r[a]):"fl"===t[a].ty?this.renderFill(t[a],r[a],n):"st"===t[a].ty?this.renderStroke(t[a],r[a],n):"gf"===t[a].ty||"gs"===t[a].ty?this.renderGradientFill(t[a],r[a],n):"gr"===t[a].ty?this.renderShape(n,t[a].it,r[a].it):t[a].ty;i&&this.drawLayer()},CVShapeElement.prototype.renderStyledShape=function(e,t){if(this._isFirstFrame||t._mdf||e.transforms._mdf){var r,i,a,n=e.trNodes,o=t.paths,s=o._length;n.length=0;var l=e.transforms.finalTransform;for(a=0;a<s;a+=1){var p=o.shapes[a];if(p&&p.v){for(i=p._length,r=1;r<i;r+=1)1===r&&n.push({t:"m",p:l.applyToPointArray(p.v[0][0],p.v[0][1],0)}),n.push({t:"c",pts:l.applyToTriplePoints(p.o[r-1],p.i[r],p.v[r])});1===i&&n.push({t:"m",p:l.applyToPointArray(p.v[0][0],p.v[0][1],0)}),p.c&&i&&(n.push({t:"c",pts:l.applyToTriplePoints(p.o[r-1],p.i[0],p.v[0])}),n.push({t:"z"}))}}e.trNodes=n}},CVShapeElement.prototype.renderPath=function(e,t){if(!0!==e.hd&&e._shouldRender){var r,i=t.styledShapes.length;for(r=0;r<i;r+=1)this.renderStyledShape(t.styledShapes[r],t.sh)}},CVShapeElement.prototype.renderFill=function(e,t,r){var i=t.style;(t.c._mdf||this._isFirstFrame)&&(i.co="rgb("+bmFloor(t.c.v[0])+","+bmFloor(t.c.v[1])+","+bmFloor(t.c.v[2])+")"),(t.o._mdf||r._opMdf||this._isFirstFrame)&&(i.coOp=t.o.v*r.opacity)},CVShapeElement.prototype.renderGradientFill=function(e,t,r){var i,a=t.style;if(!a.grd||t.g._mdf||t.s._mdf||t.e._mdf||1!==e.t&&(t.h._mdf||t.a._mdf)){var n,o=this.globalData.canvasContext,s=t.s.v,l=t.e.v;if(1===e.t)i=o.createLinearGradient(s[0],s[1],l[0],l[1]);else{var p=Math.sqrt(Math.pow(s[0]-l[0],2)+Math.pow(s[1]-l[1],2)),c=Math.atan2(l[1]-s[1],l[0]-s[0]),d=t.h.v;d>=1?d=.99:d<=-1&&(d=-.99);var h=p*d,u=Math.cos(c+t.a.v)*h+s[0],m=Math.sin(c+t.a.v)*h+s[1];i=o.createRadialGradient(u,m,0,s[0],s[1],p)}var f=e.g.p,y=t.g.c,g=1;for(n=0;n<f;n+=1)t.g._hasOpacity&&t.g._collapsable&&(g=t.g.o[2*n+1]),i.addColorStop(y[4*n]/100,"rgba("+y[4*n+1]+","+y[4*n+2]+","+y[4*n+3]+","+g+")");a.grd=i}a.coOp=t.o.v*r.opacity},CVShapeElement.prototype.renderStroke=function(e,t,r){var i=t.style,a=t.d;a&&(a._mdf||this._isFirstFrame)&&(i.da=a.dashArray,i.do=a.dashoffset[0]),(t.c._mdf||this._isFirstFrame)&&(i.co="rgb("+bmFloor(t.c.v[0])+","+bmFloor(t.c.v[1])+","+bmFloor(t.c.v[2])+")"),(t.o._mdf||r._opMdf||this._isFirstFrame)&&(i.coOp=t.o.v*r.opacity),(t.w._mdf||this._isFirstFrame)&&(i.wi=t.w.v)},CVShapeElement.prototype.destroy=function(){this.shapesData=null,this.globalData=null,this.canvasContext=null,this.stylesList.length=0,this.itemsData.length=0},extendPrototype([BaseElement,TransformElement,CVBaseElement,HierarchyElement,FrameElement,RenderableElement,ITextElement],CVTextElement),CVTextElement.prototype.tHelper=createTag("canvas").getContext("2d"),CVTextElement.prototype.buildNewText=function(){var e=this.textProperty.currentData;this.renderedLetters=createSizedArray(e.l?e.l.length:0);var t=!1;e.fc?(t=!0,this.values.fill=this.buildColor(e.fc)):this.values.fill="rgba(0,0,0,0)",this.fill=t;var r=!1;e.sc&&(r=!0,this.values.stroke=this.buildColor(e.sc),this.values.sWidth=e.sw);var i,a,n,o,s,l,p,c,d,h,u,m,f=this.globalData.fontManager.getFontByName(e.f),y=e.l,g=this.mHelper;this.stroke=r,this.values.fValue=e.finalSize+"px "+this.globalData.fontManager.getFontByName(e.f).fFamily,a=e.finalText.length;var _=this.data.singleShape,x=.001*e.tr*e.finalSize,b=0,v=0,C=!0,S=0;for(i=0;i<a;i+=1){o=(n=this.globalData.fontManager.getCharData(e.finalText[i],f.fStyle,this.globalData.fontManager.getFontByName(e.f).fFamily))&&n.data||{},g.reset(),_&&y[i].n&&(b=-x,v+=e.yOffset,v+=C?1:0,C=!1),d=(p=o.shapes?o.shapes[0].it:[]).length,g.scale(e.finalSize/100,e.finalSize/100),_&&this.applyTextPropertiesToMatrix(e,g,y[i].line,b,v),u=createSizedArray(d-1);var $=0;for(c=0;c<d;c+=1)if("sh"===p[c].ty){for(l=p[c].ks.k.i.length,h=p[c].ks.k,m=[],s=1;s<l;s+=1)1===s&&m.push(g.applyToX(h.v[0][0],h.v[0][1],0),g.applyToY(h.v[0][0],h.v[0][1],0)),m.push(g.applyToX(h.o[s-1][0],h.o[s-1][1],0),g.applyToY(h.o[s-1][0],h.o[s-1][1],0),g.applyToX(h.i[s][0],h.i[s][1],0),g.applyToY(h.i[s][0],h.i[s][1],0),g.applyToX(h.v[s][0],h.v[s][1],0),g.applyToY(h.v[s][0],h.v[s][1],0));m.push(g.applyToX(h.o[s-1][0],h.o[s-1][1],0),g.applyToY(h.o[s-1][0],h.o[s-1][1],0),g.applyToX(h.i[0][0],h.i[0][1],0),g.applyToY(h.i[0][0],h.i[0][1],0),g.applyToX(h.v[0][0],h.v[0][1],0),g.applyToY(h.v[0][0],h.v[0][1],0)),u[$]=m,$+=1}_&&(b+=y[i].l,b+=x),this.textSpans[S]?this.textSpans[S].elem=u:this.textSpans[S]={elem:u},S+=1}},CVTextElement.prototype.renderInnerContent=function(){var e,t,r,i,a,n,o=this.canvasContext;o.font=this.values.fValue,o.lineCap="butt",o.lineJoin="miter",o.miterLimit=4,this.data.singleShape||this.textAnimator.getMeasures(this.textProperty.currentData,this.lettersChangedFlag);var s,l=this.textAnimator.renderedLetters,p=this.textProperty.currentData.l;t=p.length;var c,d,h=null,u=null,m=null;for(e=0;e<t;e+=1)if(!p[e].n){if((s=l[e])&&(this.globalData.renderer.save(),this.globalData.renderer.ctxTransform(s.p),this.globalData.renderer.ctxOpacity(s.o)),this.fill){for(s&&s.fc?h!==s.fc&&(h=s.fc,o.fillStyle=s.fc):h!==this.values.fill&&(h=this.values.fill,o.fillStyle=this.values.fill),i=(c=this.textSpans[e].elem).length,this.globalData.canvasContext.beginPath(),r=0;r<i;r+=1)for(n=(d=c[r]).length,this.globalData.canvasContext.moveTo(d[0],d[1]),a=2;a<n;a+=6)this.globalData.canvasContext.bezierCurveTo(d[a],d[a+1],d[a+2],d[a+3],d[a+4],d[a+5]);this.globalData.canvasContext.closePath(),this.globalData.canvasContext.fill()}if(this.stroke){for(s&&s.sw?m!==s.sw&&(m=s.sw,o.lineWidth=s.sw):m!==this.values.sWidth&&(m=this.values.sWidth,o.lineWidth=this.values.sWidth),s&&s.sc?u!==s.sc&&(u=s.sc,o.strokeStyle=s.sc):u!==this.values.stroke&&(u=this.values.stroke,o.strokeStyle=this.values.stroke),i=(c=this.textSpans[e].elem).length,this.globalData.canvasContext.beginPath(),r=0;r<i;r+=1)for(n=(d=c[r]).length,this.globalData.canvasContext.moveTo(d[0],d[1]),a=2;a<n;a+=6)this.globalData.canvasContext.bezierCurveTo(d[a],d[a+1],d[a+2],d[a+3],d[a+4],d[a+5]);this.globalData.canvasContext.closePath(),this.globalData.canvasContext.stroke()}s&&this.globalData.renderer.restore()}},extendPrototype([BaseElement,TransformElement,CVBaseElement,HierarchyElement,FrameElement,RenderableElement],CVImageElement),CVImageElement.prototype.initElement=SVGShapeElement.prototype.initElement,CVImageElement.prototype.prepareFrame=IImageElement.prototype.prepareFrame,CVImageElement.prototype.createContent=function(){if(this.img.width&&(this.assetData.w!==this.img.width||this.assetData.h!==this.img.height)){var e=createTag("canvas");e.width=this.assetData.w,e.height=this.assetData.h;var t,r,i=e.getContext("2d"),a=this.img.width,n=this.img.height,o=a/n,s=this.assetData.w/this.assetData.h,l=this.assetData.pr||this.globalData.renderConfig.imagePreserveAspectRatio;o>s&&"xMidYMid slice"===l||o<s&&"xMidYMid slice"!==l?t=(r=n)*s:r=(t=a)/s,i.drawImage(this.img,(a-t)/2,(n-r)/2,t,r,0,0,this.assetData.w,this.assetData.h),this.img=e}},CVImageElement.prototype.renderInnerContent=function(){this.canvasContext.drawImage(this.img,0,0)},CVImageElement.prototype.destroy=function(){this.img=null},extendPrototype([BaseElement,TransformElement,CVBaseElement,HierarchyElement,FrameElement,RenderableElement],CVSolidElement),CVSolidElement.prototype.initElement=SVGShapeElement.prototype.initElement,CVSolidElement.prototype.prepareFrame=IImageElement.prototype.prepareFrame,CVSolidElement.prototype.renderInnerContent=function(){var e=this.canvasContext;e.fillStyle=this.data.sc,e.fillRect(0,0,this.data.sw,this.data.sh)},extendPrototype([BaseRenderer],CanvasRendererBase),CanvasRendererBase.prototype.createShape=function(e){return new CVShapeElement(e,this.globalData,this)},CanvasRendererBase.prototype.createText=function(e){return new CVTextElement(e,this.globalData,this)},CanvasRendererBase.prototype.createImage=function(e){return new CVImageElement(e,this.globalData,this)},CanvasRendererBase.prototype.createSolid=function(e){return new CVSolidElement(e,this.globalData,this)},CanvasRendererBase.prototype.createNull=SVGRenderer.prototype.createNull,CanvasRendererBase.prototype.ctxTransform=function(e){if(1!==e[0]||0!==e[1]||0!==e[4]||1!==e[5]||0!==e[12]||0!==e[13])if(this.renderConfig.clearCanvas){this.transformMat.cloneFromProps(e);var t=this.contextData.getTransform(),r=t.props;this.transformMat.transform(r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7],r[8],r[9],r[10],r[11],r[12],r[13],r[14],r[15]),t.cloneFromProps(this.transformMat.props);var i=t.props;this.canvasContext.setTransform(i[0],i[1],i[4],i[5],i[12],i[13])}else this.canvasContext.transform(e[0],e[1],e[4],e[5],e[12],e[13])},CanvasRendererBase.prototype.ctxOpacity=function(e){var t=this.contextData.getOpacity();if(!this.renderConfig.clearCanvas)return this.canvasContext.globalAlpha*=e<0?0:e,void(this.globalData.currentGlobalAlpha=t);t*=e<0?0:e,this.contextData.setOpacity(t),this.globalData.currentGlobalAlpha!==t&&(this.canvasContext.globalAlpha=t,this.globalData.currentGlobalAlpha=t)},CanvasRendererBase.prototype.reset=function(){this.renderConfig.clearCanvas?this.contextData.reset():this.canvasContext.restore()},CanvasRendererBase.prototype.save=function(e){this.renderConfig.clearCanvas?(e&&this.canvasContext.save(),this.contextData.push()):this.canvasContext.save()},CanvasRendererBase.prototype.restore=function(e){if(this.renderConfig.clearCanvas){e&&(this.canvasContext.restore(),this.globalData.blendMode="source-over");var t=this.contextData.pop(),r=t.transform,i=t.opacity;this.canvasContext.setTransform(r[0],r[1],r[4],r[5],r[12],r[13]),this.globalData.currentGlobalAlpha!==i&&(this.canvasContext.globalAlpha=i,this.globalData.currentGlobalAlpha=i)}else this.canvasContext.restore()},CanvasRendererBase.prototype.configAnimation=function(e){if(this.animationItem.wrapper){this.animationItem.container=createTag("canvas");var t=this.animationItem.container.style;t.width="100%",t.height="100%";var r="0px 0px 0px";t.transformOrigin=r,t.mozTransformOrigin=r,t.webkitTransformOrigin=r,t["-webkit-transform"]=r,t.contentVisibility=this.renderConfig.contentVisibility,this.animationItem.wrapper.appendChild(this.animationItem.container),this.canvasContext=this.animationItem.container.getContext("2d"),this.renderConfig.className&&this.animationItem.container.setAttribute("class",this.renderConfig.className),this.renderConfig.id&&this.animationItem.container.setAttribute("id",this.renderConfig.id)}else this.canvasContext=this.renderConfig.context;this.data=e,this.layers=e.layers,this.transformCanvas={w:e.w,h:e.h,sx:0,sy:0,tx:0,ty:0},this.setupGlobalData(e,document.body),this.globalData.canvasContext=this.canvasContext,this.globalData.renderer=this,this.globalData.isDashed=!1,this.globalData.progressiveLoad=this.renderConfig.progressiveLoad,this.globalData.transformCanvas=this.transformCanvas,this.elements=createSizedArray(e.layers.length),this.updateContainerSize()},CanvasRendererBase.prototype.updateContainerSize=function(e,t){var r,i,a,n;if(this.reset(),e?(r=e,i=t,this.canvasContext.canvas.width=r,this.canvasContext.canvas.height=i):(this.animationItem.wrapper&&this.animationItem.container?(r=this.animationItem.wrapper.offsetWidth,i=this.animationItem.wrapper.offsetHeight):(r=this.canvasContext.canvas.width,i=this.canvasContext.canvas.height),this.canvasContext.canvas.width=r*this.renderConfig.dpr,this.canvasContext.canvas.height=i*this.renderConfig.dpr),-1!==this.renderConfig.preserveAspectRatio.indexOf("meet")||-1!==this.renderConfig.preserveAspectRatio.indexOf("slice")){var o=this.renderConfig.preserveAspectRatio.split(" "),s=o[1]||"meet",l=o[0]||"xMidYMid",p=l.substr(0,4),c=l.substr(4);a=r/i,(n=this.transformCanvas.w/this.transformCanvas.h)>a&&"meet"===s||n<a&&"slice"===s?(this.transformCanvas.sx=r/(this.transformCanvas.w/this.renderConfig.dpr),this.transformCanvas.sy=r/(this.transformCanvas.w/this.renderConfig.dpr)):(this.transformCanvas.sx=i/(this.transformCanvas.h/this.renderConfig.dpr),this.transformCanvas.sy=i/(this.transformCanvas.h/this.renderConfig.dpr)),this.transformCanvas.tx="xMid"===p&&(n<a&&"meet"===s||n>a&&"slice"===s)?(r-this.transformCanvas.w*(i/this.transformCanvas.h))/2*this.renderConfig.dpr:"xMax"===p&&(n<a&&"meet"===s||n>a&&"slice"===s)?(r-this.transformCanvas.w*(i/this.transformCanvas.h))*this.renderConfig.dpr:0,this.transformCanvas.ty="YMid"===c&&(n>a&&"meet"===s||n<a&&"slice"===s)?(i-this.transformCanvas.h*(r/this.transformCanvas.w))/2*this.renderConfig.dpr:"YMax"===c&&(n>a&&"meet"===s||n<a&&"slice"===s)?(i-this.transformCanvas.h*(r/this.transformCanvas.w))*this.renderConfig.dpr:0}else"none"===this.renderConfig.preserveAspectRatio?(this.transformCanvas.sx=r/(this.transformCanvas.w/this.renderConfig.dpr),this.transformCanvas.sy=i/(this.transformCanvas.h/this.renderConfig.dpr),this.transformCanvas.tx=0,this.transformCanvas.ty=0):(this.transformCanvas.sx=this.renderConfig.dpr,this.transformCanvas.sy=this.renderConfig.dpr,this.transformCanvas.tx=0,this.transformCanvas.ty=0);this.transformCanvas.props=[this.transformCanvas.sx,0,0,0,0,this.transformCanvas.sy,0,0,0,0,1,0,this.transformCanvas.tx,this.transformCanvas.ty,0,1],this.ctxTransform(this.transformCanvas.props),this.canvasContext.beginPath(),this.canvasContext.rect(0,0,this.transformCanvas.w,this.transformCanvas.h),this.canvasContext.closePath(),this.canvasContext.clip(),this.renderFrame(this.renderedFrame,!0)},CanvasRendererBase.prototype.destroy=function(){var e;for(this.renderConfig.clearCanvas&&this.animationItem.wrapper&&(this.animationItem.wrapper.innerText=""),e=(this.layers?this.layers.length:0)-1;e>=0;e-=1)this.elements[e]&&this.elements[e].destroy&&this.elements[e].destroy();this.elements.length=0,this.globalData.canvasContext=null,this.animationItem.container=null,this.destroyed=!0},CanvasRendererBase.prototype.renderFrame=function(e,t){if((this.renderedFrame!==e||!0!==this.renderConfig.clearCanvas||t)&&!this.destroyed&&-1!==e){var r;this.renderedFrame=e,this.globalData.frameNum=e-this.animationItem._isFirstFrame,this.globalData.frameId+=1,this.globalData._mdf=!this.renderConfig.clearCanvas||t,this.globalData.projectInterface.currentFrame=e;var i=this.layers.length;for(this.completeLayers||this.checkLayers(e),r=0;r<i;r+=1)(this.completeLayers||this.elements[r])&&this.elements[r].prepareFrame(e-this.layers[r].st);if(this.globalData._mdf){for(!0===this.renderConfig.clearCanvas?this.canvasContext.clearRect(0,0,this.transformCanvas.w,this.transformCanvas.h):this.save(),r=i-1;r>=0;r-=1)(this.completeLayers||this.elements[r])&&this.elements[r].renderFrame();!0!==this.renderConfig.clearCanvas&&this.restore()}}},CanvasRendererBase.prototype.buildItem=function(e){var t=this.elements;if(!t[e]&&99!==this.layers[e].ty){var r=this.createItem(this.layers[e],this,this.globalData);t[e]=r,r.initExpressions()}},CanvasRendererBase.prototype.checkPendingElements=function(){for(;this.pendingElements.length;)this.pendingElements.pop().checkParenting()},CanvasRendererBase.prototype.hide=function(){this.animationItem.container.style.display="none"},CanvasRendererBase.prototype.show=function(){this.animationItem.container.style.display="block"},extendPrototype([CanvasRendererBase,ICompElement,CVBaseElement],CVCompElement),CVCompElement.prototype.renderInnerContent=function(){var e,t=this.canvasContext;for(t.beginPath(),t.moveTo(0,0),t.lineTo(this.data.w,0),t.lineTo(this.data.w,this.data.h),t.lineTo(0,this.data.h),t.lineTo(0,0),t.clip(),e=this.layers.length-1;e>=0;e-=1)(this.completeLayers||this.elements[e])&&this.elements[e].renderFrame()},CVCompElement.prototype.destroy=function(){var e;for(e=this.layers.length-1;e>=0;e-=1)this.elements[e]&&this.elements[e].destroy();this.layers=null,this.elements=null},CVCompElement.prototype.createComp=function(e){return new CVCompElement(e,this.globalData,this)},extendPrototype([CanvasRendererBase],CanvasRenderer),CanvasRenderer.prototype.createComp=function(e){return new CVCompElement(e,this.globalData,this)},HBaseElement.prototype={checkBlendMode:function(){},initRendererElement:function(){this.baseElement=createTag(this.data.tg||"div"),this.data.hasMask?(this.svgElement=createNS("svg"),this.layerElement=createNS("g"),this.maskedElement=this.layerElement,this.svgElement.appendChild(this.layerElement),this.baseElement.appendChild(this.svgElement)):this.layerElement=this.baseElement,styleDiv(this.baseElement)},createContainerElements:function(){this.renderableEffectsManager=new CVEffects,this.transformedElement=this.baseElement,this.maskedElement=this.layerElement,this.data.ln&&this.layerElement.setAttribute("id",this.data.ln),this.data.cl&&this.layerElement.setAttribute("class",this.data.cl),0!==this.data.bm&&this.setBlendMode()},renderElement:function(){var e=this.transformedElement?this.transformedElement.style:{};if(this.finalTransform._matMdf){var t=this.finalTransform.mat.toCSS();e.transform=t,e.webkitTransform=t}this.finalTransform._opMdf&&(e.opacity=this.finalTransform.mProp.o.v)},renderFrame:function(){this.data.hd||this.hidden||(this.renderTransform(),this.renderRenderable(),this.renderElement(),this.renderInnerContent(),this._isFirstFrame&&(this._isFirstFrame=!1))},destroy:function(){this.layerElement=null,this.transformedElement=null,this.matteElement&&(this.matteElement=null),this.maskManager&&(this.maskManager.destroy(),this.maskManager=null)},createRenderableComponents:function(){this.maskManager=new MaskElement(this.data,this,this.globalData)},addEffects:function(){},setMatte:function(){}},HBaseElement.prototype.getBaseElement=SVGBaseElement.prototype.getBaseElement,HBaseElement.prototype.destroyBaseElement=HBaseElement.prototype.destroy,HBaseElement.prototype.buildElementParenting=BaseRenderer.prototype.buildElementParenting,extendPrototype([BaseElement,TransformElement,HBaseElement,HierarchyElement,FrameElement,RenderableDOMElement],HSolidElement),HSolidElement.prototype.createContent=function(){var e;this.data.hasMask?((e=createNS("rect")).setAttribute("width",this.data.sw),e.setAttribute("height",this.data.sh),e.setAttribute("fill",this.data.sc),this.svgElement.setAttribute("width",this.data.sw),this.svgElement.setAttribute("height",this.data.sh)):((e=createTag("div")).style.width=this.data.sw+"px",e.style.height=this.data.sh+"px",e.style.backgroundColor=this.data.sc),this.layerElement.appendChild(e)},extendPrototype([BaseElement,TransformElement,HSolidElement,SVGShapeElement,HBaseElement,HierarchyElement,FrameElement,RenderableElement],HShapeElement),HShapeElement.prototype._renderShapeFrame=HShapeElement.prototype.renderInnerContent,HShapeElement.prototype.createContent=function(){var e;if(this.baseElement.style.fontSize=0,this.data.hasMask)this.layerElement.appendChild(this.shapesContainer),e=this.svgElement;else{e=createNS("svg");var t=this.comp.data?this.comp.data:this.globalData.compSize;e.setAttribute("width",t.w),e.setAttribute("height",t.h),e.appendChild(this.shapesContainer),this.layerElement.appendChild(e)}this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.shapesContainer,0,[],!0),this.filterUniqueShapes(),this.shapeCont=e},HShapeElement.prototype.getTransformedPoint=function(e,t){var r,i=e.length;for(r=0;r<i;r+=1)t=e[r].mProps.v.applyToPointArray(t[0],t[1],0);return t},HShapeElement.prototype.calculateShapeBoundingBox=function(e,t){var r,i,a,n,o,s=e.sh.v,l=e.transformers,p=s._length;if(!(p<=1)){for(r=0;r<p-1;r+=1)i=this.getTransformedPoint(l,s.v[r]),a=this.getTransformedPoint(l,s.o[r]),n=this.getTransformedPoint(l,s.i[r+1]),o=this.getTransformedPoint(l,s.v[r+1]),this.checkBounds(i,a,n,o,t);s.c&&(i=this.getTransformedPoint(l,s.v[r]),a=this.getTransformedPoint(l,s.o[r]),n=this.getTransformedPoint(l,s.i[0]),o=this.getTransformedPoint(l,s.v[0]),this.checkBounds(i,a,n,o,t))}},HShapeElement.prototype.checkBounds=function(e,t,r,i,a){this.getBoundsOfCurve(e,t,r,i);var n=this.shapeBoundingBox;a.x=bmMin(n.left,a.x),a.xMax=bmMax(n.right,a.xMax),a.y=bmMin(n.top,a.y),a.yMax=bmMax(n.bottom,a.yMax)},HShapeElement.prototype.shapeBoundingBox={left:0,right:0,top:0,bottom:0},HShapeElement.prototype.tempBoundingBox={x:0,xMax:0,y:0,yMax:0,width:0,height:0},HShapeElement.prototype.getBoundsOfCurve=function(e,t,r,i){for(var a,n,o,s,l,p,c,d=[[e[0],i[0]],[e[1],i[1]]],h=0;h<2;++h)n=6*e[h]-12*t[h]+6*r[h],a=-3*e[h]+9*t[h]-9*r[h]+3*i[h],o=3*t[h]-3*e[h],n|=0,o|=0,0==(a|=0)&&0===n||(0===a?(s=-o/n)>0&&s<1&&d[h].push(this.calculateF(s,e,t,r,i,h)):(l=n*n-4*o*a)>=0&&((p=(-n+bmSqrt(l))/(2*a))>0&&p<1&&d[h].push(this.calculateF(p,e,t,r,i,h)),(c=(-n-bmSqrt(l))/(2*a))>0&&c<1&&d[h].push(this.calculateF(c,e,t,r,i,h))));this.shapeBoundingBox.left=bmMin.apply(null,d[0]),this.shapeBoundingBox.top=bmMin.apply(null,d[1]),this.shapeBoundingBox.right=bmMax.apply(null,d[0]),this.shapeBoundingBox.bottom=bmMax.apply(null,d[1])},HShapeElement.prototype.calculateF=function(e,t,r,i,a,n){return bmPow(1-e,3)*t[n]+3*bmPow(1-e,2)*e*r[n]+3*(1-e)*bmPow(e,2)*i[n]+bmPow(e,3)*a[n]},HShapeElement.prototype.calculateBoundingBox=function(e,t){var r,i=e.length;for(r=0;r<i;r+=1)e[r]&&e[r].sh?this.calculateShapeBoundingBox(e[r],t):e[r]&&e[r].it?this.calculateBoundingBox(e[r].it,t):e[r]&&e[r].style&&e[r].w&&this.expandStrokeBoundingBox(e[r].w,t)},HShapeElement.prototype.expandStrokeBoundingBox=function(e,t){var r=0;if(e.keyframes){for(var i=0;i<e.keyframes.length;i+=1){var a=e.keyframes[i].s;a>r&&(r=a)}r*=e.mult}else r=e.v*e.mult;t.x-=r,t.xMax+=r,t.y-=r,t.yMax+=r},HShapeElement.prototype.currentBoxContains=function(e){return this.currentBBox.x<=e.x&&this.currentBBox.y<=e.y&&this.currentBBox.width+this.currentBBox.x>=e.x+e.width&&this.currentBBox.height+this.currentBBox.y>=e.y+e.height},HShapeElement.prototype.renderInnerContent=function(){if(this._renderShapeFrame(),!this.hidden&&(this._isFirstFrame||this._mdf)){var e=this.tempBoundingBox,t=999999;if(e.x=t,e.xMax=-t,e.y=t,e.yMax=-t,this.calculateBoundingBox(this.itemsData,e),e.width=e.xMax<e.x?0:e.xMax-e.x,e.height=e.yMax<e.y?0:e.yMax-e.y,this.currentBoxContains(e))return;var r=!1;if(this.currentBBox.w!==e.width&&(this.currentBBox.w=e.width,this.shapeCont.setAttribute("width",e.width),r=!0),this.currentBBox.h!==e.height&&(this.currentBBox.h=e.height,this.shapeCont.setAttribute("height",e.height),r=!0),r||this.currentBBox.x!==e.x||this.currentBBox.y!==e.y){this.currentBBox.w=e.width,this.currentBBox.h=e.height,this.currentBBox.x=e.x,this.currentBBox.y=e.y,this.shapeCont.setAttribute("viewBox",this.currentBBox.x+" "+this.currentBBox.y+" "+this.currentBBox.w+" "+this.currentBBox.h);var i=this.shapeCont.style,a="translate("+this.currentBBox.x+"px,"+this.currentBBox.y+"px)";i.transform=a,i.webkitTransform=a}}},extendPrototype([BaseElement,TransformElement,HBaseElement,HierarchyElement,FrameElement,RenderableDOMElement,ITextElement],HTextElement),HTextElement.prototype.createContent=function(){if(this.isMasked=this.checkMasks(),this.isMasked){this.renderType="svg",this.compW=this.comp.data.w,this.compH=this.comp.data.h,this.svgElement.setAttribute("width",this.compW),this.svgElement.setAttribute("height",this.compH);var e=createNS("g");this.maskedElement.appendChild(e),this.innerElem=e}else this.renderType="html",this.innerElem=this.layerElement;this.checkParenting()},HTextElement.prototype.buildNewText=function(){var e=this.textProperty.currentData;this.renderedLetters=createSizedArray(e.l?e.l.length:0);var t=this.innerElem.style,r=e.fc?this.buildColor(e.fc):"rgba(0,0,0,0)";t.fill=r,t.color=r,e.sc&&(t.stroke=this.buildColor(e.sc),t.strokeWidth=e.sw+"px");var i,a,n=this.globalData.fontManager.getFontByName(e.f);if(!this.globalData.fontManager.chars)if(t.fontSize=e.finalSize+"px",t.lineHeight=e.finalSize+"px",n.fClass)this.innerElem.className=n.fClass;else{t.fontFamily=n.fFamily;var o=e.fWeight,s=e.fStyle;t.fontStyle=s,t.fontWeight=o}var l,p,c,d=e.l;a=d.length;var h,u=this.mHelper,m="",f=0;for(i=0;i<a;i+=1){if(this.globalData.fontManager.chars?(this.textPaths[f]?l=this.textPaths[f]:((l=createNS("path")).setAttribute("stroke-linecap",lineCapEnum[1]),l.setAttribute("stroke-linejoin",lineJoinEnum[2]),l.setAttribute("stroke-miterlimit","4")),this.isMasked||(this.textSpans[f]?c=(p=this.textSpans[f]).children[0]:((p=createTag("div")).style.lineHeight=0,(c=createNS("svg")).appendChild(l),styleDiv(p)))):this.isMasked?l=this.textPaths[f]?this.textPaths[f]:createNS("text"):this.textSpans[f]?(p=this.textSpans[f],l=this.textPaths[f]):(styleDiv(p=createTag("span")),styleDiv(l=createTag("span")),p.appendChild(l)),this.globalData.fontManager.chars){var y,g=this.globalData.fontManager.getCharData(e.finalText[i],n.fStyle,this.globalData.fontManager.getFontByName(e.f).fFamily);if(y=g?g.data:null,u.reset(),y&&y.shapes&&y.shapes.length&&(h=y.shapes[0].it,u.scale(e.finalSize/100,e.finalSize/100),m=this.createPathShape(u,h),l.setAttribute("d",m)),this.isMasked)this.innerElem.appendChild(l);else{if(this.innerElem.appendChild(p),y&&y.shapes){document.body.appendChild(c);var _=c.getBBox();c.setAttribute("width",_.width+2),c.setAttribute("height",_.height+2),c.setAttribute("viewBox",_.x-1+" "+(_.y-1)+" "+(_.width+2)+" "+(_.height+2));var x=c.style,b="translate("+(_.x-1)+"px,"+(_.y-1)+"px)";x.transform=b,x.webkitTransform=b,d[i].yOffset=_.y-1}else c.setAttribute("width",1),c.setAttribute("height",1);p.appendChild(c)}}else if(l.textContent=d[i].val,l.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),this.isMasked)this.innerElem.appendChild(l);else{this.innerElem.appendChild(p);var v=l.style,C="translate3d(0,"+-e.finalSize/1.2+"px,0)";v.transform=C,v.webkitTransform=C}this.isMasked?this.textSpans[f]=l:this.textSpans[f]=p,this.textSpans[f].style.display="block",this.textPaths[f]=l,f+=1}for(;f<this.textSpans.length;)this.textSpans[f].style.display="none",f+=1},HTextElement.prototype.renderInnerContent=function(){var e;if(this.data.singleShape){if(!this._isFirstFrame&&!this.lettersChangedFlag)return;if(this.isMasked&&this.finalTransform._matMdf){this.svgElement.setAttribute("viewBox",-this.finalTransform.mProp.p.v[0]+" "+-this.finalTransform.mProp.p.v[1]+" "+this.compW+" "+this.compH),e=this.svgElement.style;var t="translate("+-this.finalTransform.mProp.p.v[0]+"px,"+-this.finalTransform.mProp.p.v[1]+"px)";e.transform=t,e.webkitTransform=t}}if(this.textAnimator.getMeasures(this.textProperty.currentData,this.lettersChangedFlag),this.lettersChangedFlag||this.textAnimator.lettersChangedFlag){var r,i,a,n,o,s=0,l=this.textAnimator.renderedLetters,p=this.textProperty.currentData.l;for(i=p.length,r=0;r<i;r+=1)p[r].n?s+=1:(n=this.textSpans[r],o=this.textPaths[r],a=l[s],s+=1,a._mdf.m&&(this.isMasked?n.setAttribute("transform",a.m):(n.style.webkitTransform=a.m,n.style.transform=a.m)),n.style.opacity=a.o,a.sw&&a._mdf.sw&&o.setAttribute("stroke-width",a.sw),a.sc&&a._mdf.sc&&o.setAttribute("stroke",a.sc),a.fc&&a._mdf.fc&&(o.setAttribute("fill",a.fc),o.style.color=a.fc));if(this.innerElem.getBBox&&!this.hidden&&(this._isFirstFrame||this._mdf)){var c=this.innerElem.getBBox();if(this.currentBBox.w!==c.width&&(this.currentBBox.w=c.width,this.svgElement.setAttribute("width",c.width)),this.currentBBox.h!==c.height&&(this.currentBBox.h=c.height,this.svgElement.setAttribute("height",c.height)),this.currentBBox.w!==c.width+2||this.currentBBox.h!==c.height+2||this.currentBBox.x!==c.x-1||this.currentBBox.y!==c.y-1){this.currentBBox.w=c.width+2,this.currentBBox.h=c.height+2,this.currentBBox.x=c.x-1,this.currentBBox.y=c.y-1,this.svgElement.setAttribute("viewBox",this.currentBBox.x+" "+this.currentBBox.y+" "+this.currentBBox.w+" "+this.currentBBox.h),e=this.svgElement.style;var d="translate("+this.currentBBox.x+"px,"+this.currentBBox.y+"px)";e.transform=d,e.webkitTransform=d}}}},extendPrototype([BaseElement,FrameElement,HierarchyElement],HCameraElement),HCameraElement.prototype.setup=function(){var e,t,r,i,a=this.comp.threeDElements.length;for(e=0;e<a;e+=1)if("3d"===(t=this.comp.threeDElements[e]).type){r=t.perspectiveElem.style,i=t.container.style;var n=this.pe.v+"px",o="0px 0px 0px",s="matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";r.perspective=n,r.webkitPerspective=n,i.transformOrigin=o,i.mozTransformOrigin=o,i.webkitTransformOrigin=o,r.transform=s,r.webkitTransform=s}},HCameraElement.prototype.createElements=function(){},HCameraElement.prototype.hide=function(){},HCameraElement.prototype.renderFrame=function(){var e,t,r=this._isFirstFrame;if(this.hierarchy)for(t=this.hierarchy.length,e=0;e<t;e+=1)r=this.hierarchy[e].finalTransform.mProp._mdf||r;if(r||this.pe._mdf||this.p&&this.p._mdf||this.px&&(this.px._mdf||this.py._mdf||this.pz._mdf)||this.rx._mdf||this.ry._mdf||this.rz._mdf||this.or._mdf||this.a&&this.a._mdf){if(this.mat.reset(),this.hierarchy)for(e=t=this.hierarchy.length-1;e>=0;e-=1){var i=this.hierarchy[e].finalTransform.mProp;this.mat.translate(-i.p.v[0],-i.p.v[1],i.p.v[2]),this.mat.rotateX(-i.or.v[0]).rotateY(-i.or.v[1]).rotateZ(i.or.v[2]),this.mat.rotateX(-i.rx.v).rotateY(-i.ry.v).rotateZ(i.rz.v),this.mat.scale(1/i.s.v[0],1/i.s.v[1],1/i.s.v[2]),this.mat.translate(i.a.v[0],i.a.v[1],i.a.v[2])}if(this.p?this.mat.translate(-this.p.v[0],-this.p.v[1],this.p.v[2]):this.mat.translate(-this.px.v,-this.py.v,this.pz.v),this.a){var a;a=this.p?[this.p.v[0]-this.a.v[0],this.p.v[1]-this.a.v[1],this.p.v[2]-this.a.v[2]]:[this.px.v-this.a.v[0],this.py.v-this.a.v[1],this.pz.v-this.a.v[2]];var n=Math.sqrt(Math.pow(a[0],2)+Math.pow(a[1],2)+Math.pow(a[2],2)),o=[a[0]/n,a[1]/n,a[2]/n],s=Math.sqrt(o[2]*o[2]+o[0]*o[0]),l=Math.atan2(o[1],s),p=Math.atan2(o[0],-o[2]);this.mat.rotateY(p).rotateX(-l)}this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v),this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]),this.mat.translate(this.globalData.compSize.w/2,this.globalData.compSize.h/2,0),this.mat.translate(0,0,this.pe.v);var c=!this._prevMat.equals(this.mat);if((c||this.pe._mdf)&&this.comp.threeDElements){var d,h,u;for(t=this.comp.threeDElements.length,e=0;e<t;e+=1)if("3d"===(d=this.comp.threeDElements[e]).type){if(c){var m=this.mat.toCSS();(u=d.container.style).transform=m,u.webkitTransform=m}this.pe._mdf&&((h=d.perspectiveElem.style).perspective=this.pe.v+"px",h.webkitPerspective=this.pe.v+"px")}this.mat.clone(this._prevMat)}}this._isFirstFrame=!1},HCameraElement.prototype.prepareFrame=function(e){this.prepareProperties(e,!0)},HCameraElement.prototype.destroy=function(){},HCameraElement.prototype.getBaseElement=function(){return null},extendPrototype([BaseElement,TransformElement,HBaseElement,HSolidElement,HierarchyElement,FrameElement,RenderableElement],HImageElement),HImageElement.prototype.createContent=function(){var e=this.globalData.getAssetsPath(this.assetData),t=new Image;this.data.hasMask?(this.imageElem=createNS("image"),this.imageElem.setAttribute("width",this.assetData.w+"px"),this.imageElem.setAttribute("height",this.assetData.h+"px"),this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink","href",e),this.layerElement.appendChild(this.imageElem),this.baseElement.setAttribute("width",this.assetData.w),this.baseElement.setAttribute("height",this.assetData.h)):this.layerElement.appendChild(t),t.crossOrigin="anonymous",t.src=e,this.data.ln&&this.baseElement.setAttribute("id",this.data.ln)},extendPrototype([BaseRenderer],HybridRendererBase),HybridRendererBase.prototype.buildItem=SVGRenderer.prototype.buildItem,HybridRendererBase.prototype.checkPendingElements=function(){for(;this.pendingElements.length;)this.pendingElements.pop().checkParenting()},HybridRendererBase.prototype.appendElementInPos=function(e,t){var r=e.getBaseElement();if(r){var i=this.layers[t];if(i.ddd&&this.supports3d)this.addTo3dContainer(r,t);else if(this.threeDElements)this.addTo3dContainer(r,t);else{for(var a,n,o=0;o<t;)this.elements[o]&&!0!==this.elements[o]&&this.elements[o].getBaseElement&&(n=this.elements[o],a=(this.layers[o].ddd?this.getThreeDContainerByPos(o):n.getBaseElement())||a),o+=1;a?i.ddd&&this.supports3d||this.layerElement.insertBefore(r,a):i.ddd&&this.supports3d||this.layerElement.appendChild(r)}}},HybridRendererBase.prototype.createShape=function(e){return this.supports3d?new HShapeElement(e,this.globalData,this):new SVGShapeElement(e,this.globalData,this)},HybridRendererBase.prototype.createText=function(e){return this.supports3d?new HTextElement(e,this.globalData,this):new SVGTextLottieElement(e,this.globalData,this)},HybridRendererBase.prototype.createCamera=function(e){return this.camera=new HCameraElement(e,this.globalData,this),this.camera},HybridRendererBase.prototype.createImage=function(e){return this.supports3d?new HImageElement(e,this.globalData,this):new IImageElement(e,this.globalData,this)},HybridRendererBase.prototype.createSolid=function(e){return this.supports3d?new HSolidElement(e,this.globalData,this):new ISolidElement(e,this.globalData,this)},HybridRendererBase.prototype.createNull=SVGRenderer.prototype.createNull,HybridRendererBase.prototype.getThreeDContainerByPos=function(e){for(var t=0,r=this.threeDElements.length;t<r;){if(this.threeDElements[t].startPos<=e&&this.threeDElements[t].endPos>=e)return this.threeDElements[t].perspectiveElem;t+=1}return null},HybridRendererBase.prototype.createThreeDContainer=function(e,t){var r,i,a=createTag("div");styleDiv(a);var n=createTag("div");if(styleDiv(n),"3d"===t){(r=a.style).width=this.globalData.compSize.w+"px",r.height=this.globalData.compSize.h+"px";var o="50% 50%";r.webkitTransformOrigin=o,r.mozTransformOrigin=o,r.transformOrigin=o;var s="matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";(i=n.style).transform=s,i.webkitTransform=s}a.appendChild(n);var l={container:n,perspectiveElem:a,startPos:e,endPos:e,type:t};return this.threeDElements.push(l),l},HybridRendererBase.prototype.build3dContainers=function(){var e,t,r=this.layers.length,i="";for(e=0;e<r;e+=1)this.layers[e].ddd&&3!==this.layers[e].ty?("3d"!==i&&(i="3d",t=this.createThreeDContainer(e,"3d")),t.endPos=Math.max(t.endPos,e)):("2d"!==i&&(i="2d",t=this.createThreeDContainer(e,"2d")),t.endPos=Math.max(t.endPos,e));for(e=(r=this.threeDElements.length)-1;e>=0;e-=1)this.resizerElem.appendChild(this.threeDElements[e].perspectiveElem)},HybridRendererBase.prototype.addTo3dContainer=function(e,t){for(var r=0,i=this.threeDElements.length;r<i;){if(t<=this.threeDElements[r].endPos){for(var a,n=this.threeDElements[r].startPos;n<t;)this.elements[n]&&this.elements[n].getBaseElement&&(a=this.elements[n].getBaseElement()),n+=1;a?this.threeDElements[r].container.insertBefore(e,a):this.threeDElements[r].container.appendChild(e);break}r+=1}},HybridRendererBase.prototype.configAnimation=function(e){var t=createTag("div"),r=this.animationItem.wrapper,i=t.style;i.width=e.w+"px",i.height=e.h+"px",this.resizerElem=t,styleDiv(t),i.transformStyle="flat",i.mozTransformStyle="flat",i.webkitTransformStyle="flat",this.renderConfig.className&&t.setAttribute("class",this.renderConfig.className),r.appendChild(t),i.overflow="hidden";var a=createNS("svg");a.setAttribute("width","1"),a.setAttribute("height","1"),styleDiv(a),this.resizerElem.appendChild(a);var n=createNS("defs");a.appendChild(n),this.data=e,this.setupGlobalData(e,a),this.globalData.defs=n,this.layers=e.layers,this.layerElement=this.resizerElem,this.build3dContainers(),this.updateContainerSize()},HybridRendererBase.prototype.destroy=function(){var e;this.animationItem.wrapper&&(this.animationItem.wrapper.innerText=""),this.animationItem.container=null,this.globalData.defs=null;var t=this.layers?this.layers.length:0;for(e=0;e<t;e+=1)this.elements[e]&&this.elements[e].destroy&&this.elements[e].destroy();this.elements.length=0,this.destroyed=!0,this.animationItem=null},HybridRendererBase.prototype.updateContainerSize=function(){var e,t,r,i,a=this.animationItem.wrapper.offsetWidth,n=this.animationItem.wrapper.offsetHeight,o=a/n;this.globalData.compSize.w/this.globalData.compSize.h>o?(e=a/this.globalData.compSize.w,t=a/this.globalData.compSize.w,r=0,i=(n-this.globalData.compSize.h*(a/this.globalData.compSize.w))/2):(e=n/this.globalData.compSize.h,t=n/this.globalData.compSize.h,r=(a-this.globalData.compSize.w*(n/this.globalData.compSize.h))/2,i=0);var s=this.resizerElem.style;s.webkitTransform="matrix3d("+e+",0,0,0,0,"+t+",0,0,0,0,1,0,"+r+","+i+",0,1)",s.transform=s.webkitTransform},HybridRendererBase.prototype.renderFrame=SVGRenderer.prototype.renderFrame,HybridRendererBase.prototype.hide=function(){this.resizerElem.style.display="none"},HybridRendererBase.prototype.show=function(){this.resizerElem.style.display="block"},HybridRendererBase.prototype.initItems=function(){if(this.buildAllItems(),this.camera)this.camera.setup();else{var e,t=this.globalData.compSize.w,r=this.globalData.compSize.h,i=this.threeDElements.length;for(e=0;e<i;e+=1){var a=this.threeDElements[e].perspectiveElem.style;a.webkitPerspective=Math.sqrt(Math.pow(t,2)+Math.pow(r,2))+"px",a.perspective=a.webkitPerspective}}},HybridRendererBase.prototype.searchExtraCompositions=function(e){var t,r=e.length,i=createTag("div");for(t=0;t<r;t+=1)if(e[t].xt){var a=this.createComp(e[t],i,this.globalData.comp,null);a.initExpressions(),this.globalData.projectInterface.registerComposition(a)}},extendPrototype([HybridRendererBase,ICompElement,HBaseElement],HCompElement),HCompElement.prototype._createBaseContainerElements=HCompElement.prototype.createContainerElements,HCompElement.prototype.createContainerElements=function(){this._createBaseContainerElements(),this.data.hasMask?(this.svgElement.setAttribute("width",this.data.w),this.svgElement.setAttribute("height",this.data.h),this.transformedElement=this.baseElement):this.transformedElement=this.layerElement},HCompElement.prototype.addTo3dContainer=function(e,t){for(var r,i=0;i<t;)this.elements[i]&&this.elements[i].getBaseElement&&(r=this.elements[i].getBaseElement()),i+=1;r?this.layerElement.insertBefore(e,r):this.layerElement.appendChild(e)},HCompElement.prototype.createComp=function(e){return this.supports3d?new HCompElement(e,this.globalData,this):new SVGCompElement(e,this.globalData,this)},extendPrototype([HybridRendererBase],HybridRenderer),HybridRenderer.prototype.createComp=function(e){return this.supports3d?new HCompElement(e,this.globalData,this):new SVGCompElement(e,this.globalData,this)};var CompExpressionInterface=function(e){function t(t){for(var r=0,i=e.layers.length;r<i;){if(e.layers[r].nm===t||e.layers[r].ind===t)return e.elements[r].layerInterface;r+=1}return null}return Object.defineProperty(t,"_name",{value:e.data.nm}),t.layer=t,t.pixelAspect=1,t.height=e.data.h||e.globalData.compSize.h,t.width=e.data.w||e.globalData.compSize.w,t.pixelAspect=1,t.frameDuration=1/e.globalData.frameRate,t.displayStartTime=0,t.numLayers=e.layers.length,t},Expressions=function(){var e={initExpressions:function(e){var t=0,r=[];e.renderer.compInterface=CompExpressionInterface(e.renderer),e.renderer.globalData.projectInterface.registerComposition(e.renderer),e.renderer.globalData.pushExpression=function(){t+=1},e.renderer.globalData.popExpression=function(){0==(t-=1)&&function(){var e,t=r.length;for(e=0;e<t;e+=1)r[e].release();r.length=0}()},e.renderer.globalData.registerExpressionProperty=function(e){-1===r.indexOf(e)&&r.push(e)}}};return e}(),MaskManagerInterface=function(){function e(e,t){this._mask=e,this._data=t}return Object.defineProperty(e.prototype,"maskPath",{get:function(){return this._mask.prop.k&&this._mask.prop.getValue(),this._mask.prop}}),Object.defineProperty(e.prototype,"maskOpacity",{get:function(){return this._mask.op.k&&this._mask.op.getValue(),100*this._mask.op.v}}),function(t){var r,i=createSizedArray(t.viewData.length),a=t.viewData.length;for(r=0;r<a;r+=1)i[r]=new e(t.viewData[r],t.masksProperties[r]);return function(e){for(r=0;r<a;){if(t.masksProperties[r].nm===e)return i[r];r+=1}return null}}}(),ExpressionPropertyInterface=function(){var e={pv:0,v:0,mult:1},t={pv:[0,0,0],v:[0,0,0],mult:1};function r(e,t,r){Object.defineProperty(e,"velocity",{get:function(){return t.getVelocityAtTime(t.comp.currentFrame)}}),e.numKeys=t.keyframes?t.keyframes.length:0,e.key=function(i){if(!e.numKeys)return 0;var a="";a="s"in t.keyframes[i-1]?t.keyframes[i-1].s:"e"in t.keyframes[i-2]?t.keyframes[i-2].e:t.keyframes[i-2].s;var n="unidimensional"===r?new Number(a):Object.assign({},a);return n.time=t.keyframes[i-1].t/t.elem.comp.globalData.frameRate,n.value="unidimensional"===r?a[0]:a,n},e.valueAtTime=t.getValueAtTime,e.speedAtTime=t.getSpeedAtTime,e.velocityAtTime=t.getVelocityAtTime,e.propertyGroup=t.propertyGroup}function i(){return e}return function(a){return a?"unidimensional"===a.propType?function(t){t&&"pv"in t||(t=e);var i=1/t.mult,a=t.pv*i,n=new Number(a);return n.value=a,r(n,t,"unidimensional"),function(){return t.k&&t.getValue(),a=t.v*i,n.value!==a&&((n=new Number(a)).value=a,r(n,t,"unidimensional")),n}}(a):function(e){e&&"pv"in e||(e=t);var i=1/e.mult,a=e.data&&e.data.l||e.pv.length,n=createTypedArray("float32",a),o=createTypedArray("float32",a);return n.value=o,r(n,e,"multidimensional"),function(){e.k&&e.getValue();for(var t=0;t<a;t+=1)o[t]=e.v[t]*i,n[t]=o[t];return n}}(a):i}}(),TransformExpressionInterface=function(e){function t(e){switch(e){case"scale":case"Scale":case"ADBE Scale":case 6:return t.scale;case"rotation":case"Rotation":case"ADBE Rotation":case"ADBE Rotate Z":case 10:return t.rotation;case"ADBE Rotate X":return t.xRotation;case"ADBE Rotate Y":return t.yRotation;case"position":case"Position":case"ADBE Position":case 2:return t.position;case"ADBE Position_0":return t.xPosition;case"ADBE Position_1":return t.yPosition;case"ADBE Position_2":return t.zPosition;case"anchorPoint":case"AnchorPoint":case"Anchor Point":case"ADBE AnchorPoint":case 1:return t.anchorPoint;case"opacity":case"Opacity":case 11:return t.opacity;default:return null}}var r,i,a,n;return Object.defineProperty(t,"rotation",{get:ExpressionPropertyInterface(e.r||e.rz)}),Object.defineProperty(t,"zRotation",{get:ExpressionPropertyInterface(e.rz||e.r)}),Object.defineProperty(t,"xRotation",{get:ExpressionPropertyInterface(e.rx)}),Object.defineProperty(t,"yRotation",{get:ExpressionPropertyInterface(e.ry)}),Object.defineProperty(t,"scale",{get:ExpressionPropertyInterface(e.s)}),e.p?n=ExpressionPropertyInterface(e.p):(r=ExpressionPropertyInterface(e.px),i=ExpressionPropertyInterface(e.py),e.pz&&(a=ExpressionPropertyInterface(e.pz))),Object.defineProperty(t,"position",{get:function(){return e.p?n():[r(),i(),a?a():0]}}),Object.defineProperty(t,"xPosition",{get:ExpressionPropertyInterface(e.px)}),Object.defineProperty(t,"yPosition",{get:ExpressionPropertyInterface(e.py)}),Object.defineProperty(t,"zPosition",{get:ExpressionPropertyInterface(e.pz)}),Object.defineProperty(t,"anchorPoint",{get:ExpressionPropertyInterface(e.a)}),Object.defineProperty(t,"opacity",{get:ExpressionPropertyInterface(e.o)}),Object.defineProperty(t,"skew",{get:ExpressionPropertyInterface(e.sk)}),Object.defineProperty(t,"skewAxis",{get:ExpressionPropertyInterface(e.sa)}),Object.defineProperty(t,"orientation",{get:ExpressionPropertyInterface(e.or)}),t},LayerExpressionInterface=function(){function e(e){var t=new Matrix;return void 0!==e?this._elem.finalTransform.mProp.getValueAtTime(e).clone(t):this._elem.finalTransform.mProp.applyToMatrix(t),t}function t(e,t){var r=this.getMatrix(t);return r.props[12]=0,r.props[13]=0,r.props[14]=0,this.applyPoint(r,e)}function r(e,t){var r=this.getMatrix(t);return this.applyPoint(r,e)}function i(e,t){var r=this.getMatrix(t);return r.props[12]=0,r.props[13]=0,r.props[14]=0,this.invertPoint(r,e)}function a(e,t){var r=this.getMatrix(t);return this.invertPoint(r,e)}function n(e,t){if(this._elem.hierarchy&&this._elem.hierarchy.length){var r,i=this._elem.hierarchy.length;for(r=0;r<i;r+=1)this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(e)}return e.applyToPointArray(t[0],t[1],t[2]||0)}function o(e,t){if(this._elem.hierarchy&&this._elem.hierarchy.length){var r,i=this._elem.hierarchy.length;for(r=0;r<i;r+=1)this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(e)}return e.inversePoint(t)}function s(e){var t=new Matrix;if(t.reset(),this._elem.finalTransform.mProp.applyToMatrix(t),this._elem.hierarchy&&this._elem.hierarchy.length){var r,i=this._elem.hierarchy.length;for(r=0;r<i;r+=1)this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(t);return t.inversePoint(e)}return t.inversePoint(e)}function l(){return[1,1,1,1]}return function(p){var c;function d(e){switch(e){case"ADBE Root Vectors Group":case"Contents":case 2:return d.shapeInterface;case 1:case 6:case"Transform":case"transform":case"ADBE Transform Group":return c;case 4:case"ADBE Effect Parade":case"effects":case"Effects":return d.effect;case"ADBE Text Properties":return d.textInterface;default:return null}}d.getMatrix=e,d.invertPoint=o,d.applyPoint=n,d.toWorld=r,d.toWorldVec=t,d.fromWorld=a,d.fromWorldVec=i,d.toComp=r,d.fromComp=s,d.sampleImage=l,d.sourceRectAtTime=p.sourceRectAtTime.bind(p),d._elem=p;var h=getDescriptor(c=TransformExpressionInterface(p.finalTransform.mProp),"anchorPoint");return Object.defineProperties(d,{hasParent:{get:function(){return p.hierarchy.length}},parent:{get:function(){return p.hierarchy[0].layerInterface}},rotation:getDescriptor(c,"rotation"),scale:getDescriptor(c,"scale"),position:getDescriptor(c,"position"),opacity:getDescriptor(c,"opacity"),anchorPoint:h,anchor_point:h,transform:{get:function(){return c}},active:{get:function(){return p.isInRange}}}),d.startTime=p.data.st,d.index=p.data.ind,d.source=p.data.refId,d.height=0===p.data.ty?p.data.h:100,d.width=0===p.data.ty?p.data.w:100,d.inPoint=p.data.ip/p.comp.globalData.frameRate,d.outPoint=p.data.op/p.comp.globalData.frameRate,d._name=p.data.nm,d.registerMaskInterface=function(e){d.mask=new MaskManagerInterface(e,p)},d.registerEffectsInterface=function(e){d.effect=e},d}}(),propertyGroupFactory=function(e,t){return function(r){return(r=void 0===r?1:r)<=0?e:t(r-1)}},PropertyInterface=function(e,t){var r={_name:e};return function(e){return(e=void 0===e?1:e)<=0?r:t(e-1)}},EffectsExpressionInterface=function(){function e(r,i,a,n){function o(e){for(var t=r.ef,i=0,a=t.length;i<a;){if(e===t[i].nm||e===t[i].mn||e===t[i].ix)return 5===t[i].ty?p[i]:p[i]();i+=1}throw new Error}var s,l=propertyGroupFactory(o,a),p=[],c=r.ef.length;for(s=0;s<c;s+=1)5===r.ef[s].ty?p.push(e(r.ef[s],i.effectElements[s],i.effectElements[s].propertyGroup,n)):p.push(t(i.effectElements[s],r.ef[s].ty,n,l));return"ADBE Color Control"===r.mn&&Object.defineProperty(o,"color",{get:function(){return p[0]()}}),Object.defineProperties(o,{numProperties:{get:function(){return r.np}},_name:{value:r.nm},propertyGroup:{value:l}}),o.enabled=0!==r.en,o.active=o.enabled,o}function t(e,t,r,i){var a=ExpressionPropertyInterface(e.p);return e.p.setGroupProperty&&e.p.setGroupProperty(PropertyInterface("",i)),function(){return 10===t?r.comp.compInterface(e.p.v):a()}}return{createEffectsInterface:function(t,r){if(t.effectsManager){var i,a=[],n=t.data.ef,o=t.effectsManager.effectElements.length;for(i=0;i<o;i+=1)a.push(e(n[i],t.effectsManager.effectElements[i],r,t));var s=t.data.ef||[],l=function(e){for(i=0,o=s.length;i<o;){if(e===s[i].nm||e===s[i].mn||e===s[i].ix)return a[i];i+=1}return null};return Object.defineProperty(l,"numProperties",{get:function(){return s.length}}),l}return null}}}(),ShapePathInterface=function(e,t,r){var i=t.sh;function a(e){return"Shape"===e||"shape"===e||"Path"===e||"path"===e||"ADBE Vector Shape"===e||2===e?a.path:null}var n=propertyGroupFactory(a,r);return i.setGroupProperty(PropertyInterface("Path",n)),Object.defineProperties(a,{path:{get:function(){return i.k&&i.getValue(),i}},shape:{get:function(){return i.k&&i.getValue(),i}},_name:{value:e.nm},ix:{value:e.ix},propertyIndex:{value:e.ix},mn:{value:e.mn},propertyGroup:{value:r}}),a},ShapeExpressionInterface=function(){function e(e,o,h){var u,m=[],f=e?e.length:0;for(u=0;u<f;u+=1)"gr"===e[u].ty?m.push(t(e[u],o[u],h)):"fl"===e[u].ty?m.push(r(e[u],o[u],h)):"st"===e[u].ty?m.push(a(e[u],o[u],h)):"tm"===e[u].ty?m.push(n(e[u],o[u],h)):"tr"===e[u].ty||("el"===e[u].ty?m.push(s(e[u],o[u],h)):"sr"===e[u].ty?m.push(l(e[u],o[u],h)):"sh"===e[u].ty?m.push(ShapePathInterface(e[u],o[u],h)):"rc"===e[u].ty?m.push(p(e[u],o[u],h)):"rd"===e[u].ty?m.push(c(e[u],o[u],h)):"rp"===e[u].ty?m.push(d(e[u],o[u],h)):"gf"===e[u].ty?m.push(i(e[u],o[u],h)):m.push((e[u],o[u],function(){return null})));return m}function t(t,r,i){var a=function(e){switch(e){case"ADBE Vectors Group":case"Contents":case 2:return a.content;default:return a.transform}};a.propertyGroup=propertyGroupFactory(a,i);var n=function(t,r,i){var a,n=function(e){for(var t=0,r=a.length;t<r;){if(a[t]._name===e||a[t].mn===e||a[t].propertyIndex===e||a[t].ix===e||a[t].ind===e)return a[t];t+=1}return"number"==typeof e?a[e-1]:null};n.propertyGroup=propertyGroupFactory(n,i),a=e(t.it,r.it,n.propertyGroup),n.numProperties=a.length;var s=o(t.it[t.it.length-1],r.it[r.it.length-1],n.propertyGroup);return n.transform=s,n.propertyIndex=t.cix,n._name=t.nm,n}(t,r,a.propertyGroup),s=o(t.it[t.it.length-1],r.it[r.it.length-1],a.propertyGroup);return a.content=n,a.transform=s,Object.defineProperty(a,"_name",{get:function(){return t.nm}}),a.numProperties=t.np,a.propertyIndex=t.ix,a.nm=t.nm,a.mn=t.mn,a}function r(e,t,r){function i(e){return"Color"===e||"color"===e?i.color:"Opacity"===e||"opacity"===e?i.opacity:null}return Object.defineProperties(i,{color:{get:ExpressionPropertyInterface(t.c)},opacity:{get:ExpressionPropertyInterface(t.o)},_name:{value:e.nm},mn:{value:e.mn}}),t.c.setGroupProperty(PropertyInterface("Color",r)),t.o.setGroupProperty(PropertyInterface("Opacity",r)),i}function i(e,t,r){function i(e){return"Start Point"===e||"start point"===e?i.startPoint:"End Point"===e||"end point"===e?i.endPoint:"Opacity"===e||"opacity"===e?i.opacity:null}return Object.defineProperties(i,{startPoint:{get:ExpressionPropertyInterface(t.s)},endPoint:{get:ExpressionPropertyInterface(t.e)},opacity:{get:ExpressionPropertyInterface(t.o)},type:{get:function(){return"a"}},_name:{value:e.nm},mn:{value:e.mn}}),t.s.setGroupProperty(PropertyInterface("Start Point",r)),t.e.setGroupProperty(PropertyInterface("End Point",r)),t.o.setGroupProperty(PropertyInterface("Opacity",r)),i}function a(e,t,r){var i,a=propertyGroupFactory(p,r),n=propertyGroupFactory(l,a);function o(r){Object.defineProperty(l,e.d[r].nm,{get:ExpressionPropertyInterface(t.d.dataProps[r].p)})}var s=e.d?e.d.length:0,l={};for(i=0;i<s;i+=1)o(i),t.d.dataProps[i].p.setGroupProperty(n);function p(e){return"Color"===e||"color"===e?p.color:"Opacity"===e||"opacity"===e?p.opacity:"Stroke Width"===e||"stroke width"===e?p.strokeWidth:null}return Object.defineProperties(p,{color:{get:ExpressionPropertyInterface(t.c)},opacity:{get:ExpressionPropertyInterface(t.o)},strokeWidth:{get:ExpressionPropertyInterface(t.w)},dash:{get:function(){return l}},_name:{value:e.nm},mn:{value:e.mn}}),t.c.setGroupProperty(PropertyInterface("Color",a)),t.o.setGroupProperty(PropertyInterface("Opacity",a)),t.w.setGroupProperty(PropertyInterface("Stroke Width",a)),p}function n(e,t,r){function i(t){return t===e.e.ix||"End"===t||"end"===t?i.end:t===e.s.ix?i.start:t===e.o.ix?i.offset:null}var a=propertyGroupFactory(i,r);return i.propertyIndex=e.ix,t.s.setGroupProperty(PropertyInterface("Start",a)),t.e.setGroupProperty(PropertyInterface("End",a)),t.o.setGroupProperty(PropertyInterface("Offset",a)),i.propertyIndex=e.ix,i.propertyGroup=r,Object.defineProperties(i,{start:{get:ExpressionPropertyInterface(t.s)},end:{get:ExpressionPropertyInterface(t.e)},offset:{get:ExpressionPropertyInterface(t.o)},_name:{value:e.nm}}),i.mn=e.mn,i}function o(e,t,r){function i(t){return e.a.ix===t||"Anchor Point"===t?i.anchorPoint:e.o.ix===t||"Opacity"===t?i.opacity:e.p.ix===t||"Position"===t?i.position:e.r.ix===t||"Rotation"===t||"ADBE Vector Rotation"===t?i.rotation:e.s.ix===t||"Scale"===t?i.scale:e.sk&&e.sk.ix===t||"Skew"===t?i.skew:e.sa&&e.sa.ix===t||"Skew Axis"===t?i.skewAxis:null}var a=propertyGroupFactory(i,r);return t.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity",a)),t.transform.mProps.p.setGroupProperty(PropertyInterface("Position",a)),t.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point",a)),t.transform.mProps.s.setGroupProperty(PropertyInterface("Scale",a)),t.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation",a)),t.transform.mProps.sk&&(t.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew",a)),t.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle",a))),t.transform.op.setGroupProperty(PropertyInterface("Opacity",a)),Object.defineProperties(i,{opacity:{get:ExpressionPropertyInterface(t.transform.mProps.o)},position:{get:ExpressionPropertyInterface(t.transform.mProps.p)},anchorPoint:{get:ExpressionPropertyInterface(t.transform.mProps.a)},scale:{get:ExpressionPropertyInterface(t.transform.mProps.s)},rotation:{get:ExpressionPropertyInterface(t.transform.mProps.r)},skew:{get:ExpressionPropertyInterface(t.transform.mProps.sk)},skewAxis:{get:ExpressionPropertyInterface(t.transform.mProps.sa)},_name:{value:e.nm}}),i.ty="tr",i.mn=e.mn,i.propertyGroup=r,i}function s(e,t,r){function i(t){return e.p.ix===t?i.position:e.s.ix===t?i.size:null}var a=propertyGroupFactory(i,r);i.propertyIndex=e.ix;var n="tm"===t.sh.ty?t.sh.prop:t.sh;return n.s.setGroupProperty(PropertyInterface("Size",a)),n.p.setGroupProperty(PropertyInterface("Position",a)),Object.defineProperties(i,{size:{get:ExpressionPropertyInterface(n.s)},position:{get:ExpressionPropertyInterface(n.p)},_name:{value:e.nm}}),i.mn=e.mn,i}function l(e,t,r){function i(t){return e.p.ix===t?i.position:e.r.ix===t?i.rotation:e.pt.ix===t?i.points:e.or.ix===t||"ADBE Vector Star Outer Radius"===t?i.outerRadius:e.os.ix===t?i.outerRoundness:!e.ir||e.ir.ix!==t&&"ADBE Vector Star Inner Radius"!==t?e.is&&e.is.ix===t?i.innerRoundness:null:i.innerRadius}var a=propertyGroupFactory(i,r),n="tm"===t.sh.ty?t.sh.prop:t.sh;return i.propertyIndex=e.ix,n.or.setGroupProperty(PropertyInterface("Outer Radius",a)),n.os.setGroupProperty(PropertyInterface("Outer Roundness",a)),n.pt.setGroupProperty(PropertyInterface("Points",a)),n.p.setGroupProperty(PropertyInterface("Position",a)),n.r.setGroupProperty(PropertyInterface("Rotation",a)),e.ir&&(n.ir.setGroupProperty(PropertyInterface("Inner Radius",a)),n.is.setGroupProperty(PropertyInterface("Inner Roundness",a))),Object.defineProperties(i,{position:{get:ExpressionPropertyInterface(n.p)},rotation:{get:ExpressionPropertyInterface(n.r)},points:{get:ExpressionPropertyInterface(n.pt)},outerRadius:{get:ExpressionPropertyInterface(n.or)},outerRoundness:{get:ExpressionPropertyInterface(n.os)},innerRadius:{get:ExpressionPropertyInterface(n.ir)},innerRoundness:{get:ExpressionPropertyInterface(n.is)},_name:{value:e.nm}}),i.mn=e.mn,i}function p(e,t,r){function i(t){return e.p.ix===t?i.position:e.r.ix===t?i.roundness:e.s.ix===t||"Size"===t||"ADBE Vector Rect Size"===t?i.size:null}var a=propertyGroupFactory(i,r),n="tm"===t.sh.ty?t.sh.prop:t.sh;return i.propertyIndex=e.ix,n.p.setGroupProperty(PropertyInterface("Position",a)),n.s.setGroupProperty(PropertyInterface("Size",a)),n.r.setGroupProperty(PropertyInterface("Rotation",a)),Object.defineProperties(i,{position:{get:ExpressionPropertyInterface(n.p)},roundness:{get:ExpressionPropertyInterface(n.r)},size:{get:ExpressionPropertyInterface(n.s)},_name:{value:e.nm}}),i.mn=e.mn,i}function c(e,t,r){function i(t){return e.r.ix===t||"Round Corners 1"===t?i.radius:null}var a=propertyGroupFactory(i,r),n=t;return i.propertyIndex=e.ix,n.rd.setGroupProperty(PropertyInterface("Radius",a)),Object.defineProperties(i,{radius:{get:ExpressionPropertyInterface(n.rd)},_name:{value:e.nm}}),i.mn=e.mn,i}function d(e,t,r){function i(t){return e.c.ix===t||"Copies"===t?i.copies:e.o.ix===t||"Offset"===t?i.offset:null}var a=propertyGroupFactory(i,r),n=t;return i.propertyIndex=e.ix,n.c.setGroupProperty(PropertyInterface("Copies",a)),n.o.setGroupProperty(PropertyInterface("Offset",a)),Object.defineProperties(i,{copies:{get:ExpressionPropertyInterface(n.c)},offset:{get:ExpressionPropertyInterface(n.o)},_name:{value:e.nm}}),i.mn=e.mn,i}return function(t,r,i){var a;function n(e){if("number"==typeof e)return 0===(e=void 0===e?1:e)?i:a[e-1];for(var t=0,r=a.length;t<r;){if(a[t]._name===e)return a[t];t+=1}return null}return n.propertyGroup=propertyGroupFactory(n,(function(){return i})),a=e(t,r,n.propertyGroup),n.numProperties=a.length,n._name="Contents",n}}(),TextExpressionInterface=function(e){var t;function r(e){return"ADBE Text Document"===e?r.sourceText:null}return Object.defineProperty(r,"sourceText",{get:function(){e.textProperty.getValue();var r=e.textProperty.currentData.t;return t&&r===t.value||((t=new String(r)).value=r||new String(r),Object.defineProperty(t,"style",{get:function(){return{fillColor:e.textProperty.currentData.fc}}})),t}}),r};function _typeof$2(e){return _typeof$2="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof$2(e)}var FootageInterface=(dataInterfaceFactory=function(e){function t(e){return"Outline"===e?t.outlineInterface():null}return t._name="Outline",t.outlineInterface=function(e){var t="",r=e.getFootageData();function i(e){if(r[e])return t=e,"object"===_typeof$2(r=r[e])?i:r;var a=e.indexOf(t);if(-1!==a){var n=parseInt(e.substr(a+t.length),10);return"object"===_typeof$2(r=r[n])?i:r}return""}return function(){return t="",r=e.getFootageData(),i}}(e),t},function(e){function t(e){return"Data"===e?t.dataInterface:null}return t._name="Data",t.dataInterface=dataInterfaceFactory(e),t}),dataInterfaceFactory,interfaces={layer:LayerExpressionInterface,effects:EffectsExpressionInterface,comp:CompExpressionInterface,shape:ShapeExpressionInterface,text:TextExpressionInterface,footage:FootageInterface};function getInterface(e){return interfaces[e]||null}function _typeof$1(e){return _typeof$1="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof$1(e)}function seedRandom(e,t){var r=this,i=256,a="random",n=t.pow(i,6),o=t.pow(2,52),s=2*o,l=i-1;function p(e){var t,r=e.length,a=this,n=0,o=a.i=a.j=0,s=a.S=[];for(r||(e=[r++]);n<i;)s[n]=n++;for(n=0;n<i;n++)s[n]=s[o=l&o+e[n%r]+(t=s[n])],s[o]=t;a.g=function(e){for(var t,r=0,n=a.i,o=a.j,s=a.S;e--;)t=s[n=l&n+1],r=r*i+s[l&(s[n]=s[o=l&o+t])+(s[o]=t)];return a.i=n,a.j=o,r}}function c(e,t){return t.i=e.i,t.j=e.j,t.S=e.S.slice(),t}function d(e,t){var r,i=[],a=_typeof$1(e);if(t&&"object"==a)for(r in e)try{i.push(d(e[r],t-1))}catch(e){}return i.length?i:"string"==a?e:e+"\0"}function h(e,t){for(var r,i=e+"",a=0;a<i.length;)t[l&a]=l&(r^=19*t[l&a])+i.charCodeAt(a++);return u(t)}function u(e){return String.fromCharCode.apply(0,e)}t["seed"+a]=function(l,m,f){var y=[],g=h(d((m=!0===m?{entropy:!0}:m||{}).entropy?[l,u(e)]:null===l?function(){try{var t=new Uint8Array(i);return(r.crypto||r.msCrypto).getRandomValues(t),u(t)}catch(t){var a=r.navigator,n=a&&a.plugins;return[+new Date,r,n,r.screen,u(e)]}}():l,3),y),_=new p(y),x=function(){for(var e=_.g(6),t=n,r=0;e<o;)e=(e+r)*i,t*=i,r=_.g(1);for(;e>=s;)e/=2,t/=2,r>>>=1;return(e+r)/t};return x.int32=function(){return 0|_.g(4)},x.quick=function(){return _.g(4)/4294967296},x.double=x,h(u(_.S),e),(m.pass||f||function(e,r,i,n){return n&&(n.S&&c(n,_),e.state=function(){return c(_,{})}),i?(t[a]=e,r):e})(x,g,"global"in m?m.global:this==t,m.state)},h(t.random(),e)}function initialize$2(e){seedRandom([],e)}var propTypes={SHAPE:"shape"};function _typeof(e){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof(e)}var ExpressionManager=function(){var ob={},Math=BMMath,window=null,document=null,XMLHttpRequest=null,fetch=null,frames=null;function $bm_isInstanceOfArray(e){return e.constructor===Array||e.constructor===Float32Array}function isNumerable(e,t){return"number"===e||"boolean"===e||"string"===e||t instanceof Number}function $bm_neg(e){var t=_typeof(e);if("number"===t||"boolean"===t||e instanceof Number)return-e;if($bm_isInstanceOfArray(e)){var r,i=e.length,a=[];for(r=0;r<i;r+=1)a[r]=-e[r];return a}return e.propType?e.v:-e}initialize$2(BMMath);var easeInBez=BezierFactory.getBezierEasing(.333,0,.833,.833,"easeIn").get,easeOutBez=BezierFactory.getBezierEasing(.167,.167,.667,1,"easeOut").get,easeInOutBez=BezierFactory.getBezierEasing(.33,0,.667,1,"easeInOut").get;function sum(e,t){var r=_typeof(e),i=_typeof(t);if("string"===r||"string"===i)return e+t;if(isNumerable(r,e)&&isNumerable(i,t))return e+t;if($bm_isInstanceOfArray(e)&&isNumerable(i,t))return(e=e.slice(0))[0]+=t,e;if(isNumerable(r,e)&&$bm_isInstanceOfArray(t))return(t=t.slice(0))[0]=e+t[0],t;if($bm_isInstanceOfArray(e)&&$bm_isInstanceOfArray(t)){for(var a=0,n=e.length,o=t.length,s=[];a<n||a<o;)("number"==typeof e[a]||e[a]instanceof Number)&&("number"==typeof t[a]||t[a]instanceof Number)?s[a]=e[a]+t[a]:s[a]=void 0===t[a]?e[a]:e[a]||t[a],a+=1;return s}return 0}var add=sum;function sub(e,t){var r=_typeof(e),i=_typeof(t);if(isNumerable(r,e)&&isNumerable(i,t))return"string"===r&&(e=parseInt(e,10)),"string"===i&&(t=parseInt(t,10)),e-t;if($bm_isInstanceOfArray(e)&&isNumerable(i,t))return(e=e.slice(0))[0]-=t,e;if(isNumerable(r,e)&&$bm_isInstanceOfArray(t))return(t=t.slice(0))[0]=e-t[0],t;if($bm_isInstanceOfArray(e)&&$bm_isInstanceOfArray(t)){for(var a=0,n=e.length,o=t.length,s=[];a<n||a<o;)("number"==typeof e[a]||e[a]instanceof Number)&&("number"==typeof t[a]||t[a]instanceof Number)?s[a]=e[a]-t[a]:s[a]=void 0===t[a]?e[a]:e[a]||t[a],a+=1;return s}return 0}function mul(e,t){var r,i,a,n=_typeof(e),o=_typeof(t);if(isNumerable(n,e)&&isNumerable(o,t))return e*t;if($bm_isInstanceOfArray(e)&&isNumerable(o,t)){for(a=e.length,r=createTypedArray("float32",a),i=0;i<a;i+=1)r[i]=e[i]*t;return r}if(isNumerable(n,e)&&$bm_isInstanceOfArray(t)){for(a=t.length,r=createTypedArray("float32",a),i=0;i<a;i+=1)r[i]=e*t[i];return r}return 0}function div(e,t){var r,i,a,n=_typeof(e),o=_typeof(t);if(isNumerable(n,e)&&isNumerable(o,t))return e/t;if($bm_isInstanceOfArray(e)&&isNumerable(o,t)){for(a=e.length,r=createTypedArray("float32",a),i=0;i<a;i+=1)r[i]=e[i]/t;return r}if(isNumerable(n,e)&&$bm_isInstanceOfArray(t)){for(a=t.length,r=createTypedArray("float32",a),i=0;i<a;i+=1)r[i]=e/t[i];return r}return 0}function mod(e,t){return"string"==typeof e&&(e=parseInt(e,10)),"string"==typeof t&&(t=parseInt(t,10)),e%t}var $bm_sum=sum,$bm_sub=sub,$bm_mul=mul,$bm_div=div,$bm_mod=mod;function clamp(e,t,r){if(t>r){var i=r;r=t,t=i}return Math.min(Math.max(e,t),r)}function radiansToDegrees(e){return e/degToRads}var radians_to_degrees=radiansToDegrees;function degreesToRadians(e){return e*degToRads}var degrees_to_radians=radiansToDegrees,helperLengthArray=[0,0,0,0,0,0];function length(e,t){if("number"==typeof e||e instanceof Number)return t=t||0,Math.abs(e-t);var r;t||(t=helperLengthArray);var i=Math.min(e.length,t.length),a=0;for(r=0;r<i;r+=1)a+=Math.pow(t[r]-e[r],2);return Math.sqrt(a)}function normalize(e){return div(e,length(e))}function rgbToHsl(e){var t,r,i=e[0],a=e[1],n=e[2],o=Math.max(i,a,n),s=Math.min(i,a,n),l=(o+s)/2;if(o===s)t=0,r=0;else{var p=o-s;switch(r=l>.5?p/(2-o-s):p/(o+s),o){case i:t=(a-n)/p+(a<n?6:0);break;case a:t=(n-i)/p+2;break;case n:t=(i-a)/p+4}t/=6}return[t,r,l,e[3]]}function hue2rgb(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function hslToRgb(e){var t,r,i,a=e[0],n=e[1],o=e[2];if(0===n)t=o,i=o,r=o;else{var s=o<.5?o*(1+n):o+n-o*n,l=2*o-s;t=hue2rgb(l,s,a+1/3),r=hue2rgb(l,s,a),i=hue2rgb(l,s,a-1/3)}return[t,r,i,e[3]]}function linear(e,t,r,i,a){if(void 0!==i&&void 0!==a||(i=t,a=r,t=0,r=1),r<t){var n=r;r=t,t=n}if(e<=t)return i;if(e>=r)return a;var o,s=r===t?0:(e-t)/(r-t);if(!i.length)return i+(a-i)*s;var l=i.length,p=createTypedArray("float32",l);for(o=0;o<l;o+=1)p[o]=i[o]+(a[o]-i[o])*s;return p}function random(e,t){if(void 0===t&&(void 0===e?(e=0,t=1):(t=e,e=void 0)),t.length){var r,i=t.length;e||(e=createTypedArray("float32",i));var a=createTypedArray("float32",i),n=BMMath.random();for(r=0;r<i;r+=1)a[r]=e[r]+n*(t[r]-e[r]);return a}return void 0===e&&(e=0),e+BMMath.random()*(t-e)}function createPath(e,t,r,i){var a,n=e.length,o=shapePool.newElement();o.setPathData(!!i,n);var s,l,p=[0,0];for(a=0;a<n;a+=1)s=t&&t[a]?t[a]:p,l=r&&r[a]?r[a]:p,o.setTripleAt(e[a][0],e[a][1],l[0]+e[a][0],l[1]+e[a][1],s[0]+e[a][0],s[1]+e[a][1],a,!0);return o}function initiateExpression(elem,data,property){function noOp(e){return e}if(!elem.globalData.renderConfig.runExpressions)return noOp;var val=data.x,needsVelocity=/velocity(?![\w\d])/.test(val),_needsRandom=-1!==val.indexOf("random"),elemType=elem.data.ty,transform,$bm_transform,content,effect,thisProperty=property;thisProperty.valueAtTime=thisProperty.getValueAtTime,Object.defineProperty(thisProperty,"value",{get:function(){return thisProperty.v}}),elem.comp.frameDuration=1/elem.comp.globalData.frameRate,elem.comp.displayStartTime=0;var inPoint=elem.data.ip/elem.comp.globalData.frameRate,outPoint=elem.data.op/elem.comp.globalData.frameRate,width=elem.data.sw?elem.data.sw:0,height=elem.data.sh?elem.data.sh:0,name=elem.data.nm,loopIn,loop_in,loopOut,loop_out,smooth,toWorld,fromWorld,fromComp,toComp,fromCompToSurface,position,rotation,anchorPoint,scale,thisLayer,thisComp,mask,valueAtTime,velocityAtTime,scoped_bm_rt,expression_function=eval("[function _expression_function(){"+val+";scoped_bm_rt=$bm_rt}]")[0],numKeys=property.kf?data.k.length:0,active=!this.data||!0!==this.data.hd,wiggle=function(e,t){var r,i,a=this.pv.length?this.pv.length:1,n=createTypedArray("float32",a),o=Math.floor(5*time);for(r=0,i=0;r<o;){for(i=0;i<a;i+=1)n[i]+=-t+2*t*BMMath.random();r+=1}var s=5*time,l=s-Math.floor(s),p=createTypedArray("float32",a);if(a>1){for(i=0;i<a;i+=1)p[i]=this.pv[i]+n[i]+(-t+2*t*BMMath.random())*l;return p}return this.pv+n[0]+(-t+2*t*BMMath.random())*l}.bind(this);function loopInDuration(e,t){return loopIn(e,t,!0)}function loopOutDuration(e,t){return loopOut(e,t,!0)}thisProperty.loopIn&&(loopIn=thisProperty.loopIn.bind(thisProperty),loop_in=loopIn),thisProperty.loopOut&&(loopOut=thisProperty.loopOut.bind(thisProperty),loop_out=loopOut),thisProperty.smooth&&(smooth=thisProperty.smooth.bind(thisProperty)),this.getValueAtTime&&(valueAtTime=this.getValueAtTime.bind(this)),this.getVelocityAtTime&&(velocityAtTime=this.getVelocityAtTime.bind(this));var comp=elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface),time,velocity,value,text,textIndex,textTotal,selectorValue;function lookAt(e,t){var r=[t[0]-e[0],t[1]-e[1],t[2]-e[2]],i=Math.atan2(r[0],Math.sqrt(r[1]*r[1]+r[2]*r[2]))/degToRads;return[-Math.atan2(r[1],r[2])/degToRads,i,0]}function easeOut(e,t,r,i,a){return applyEase(easeOutBez,e,t,r,i,a)}function easeIn(e,t,r,i,a){return applyEase(easeInBez,e,t,r,i,a)}function ease(e,t,r,i,a){return applyEase(easeInOutBez,e,t,r,i,a)}function applyEase(e,t,r,i,a,n){void 0===a?(a=r,n=i):t=(t-r)/(i-r),t>1?t=1:t<0&&(t=0);var o=e(t);if($bm_isInstanceOfArray(a)){var s,l=a.length,p=createTypedArray("float32",l);for(s=0;s<l;s+=1)p[s]=(n[s]-a[s])*o+a[s];return p}return(n-a)*o+a}function nearestKey(e){var t,r,i,a=data.k.length;if(data.k.length&&"number"!=typeof data.k[0])if(r=-1,(e*=elem.comp.globalData.frameRate)<data.k[0].t)r=1,i=data.k[0].t;else{for(t=0;t<a-1;t+=1){if(e===data.k[t].t){r=t+1,i=data.k[t].t;break}if(e>data.k[t].t&&e<data.k[t+1].t){e-data.k[t].t>data.k[t+1].t-e?(r=t+2,i=data.k[t+1].t):(r=t+1,i=data.k[t].t);break}}-1===r&&(r=t+1,i=data.k[t].t)}else r=0,i=0;var n={};return n.index=r,n.time=i/elem.comp.globalData.frameRate,n}function key(e){var t,r,i;if(!data.k.length||"number"==typeof data.k[0])throw new Error("The property has no keyframe at index "+e);e-=1,t={time:data.k[e].t/elem.comp.globalData.frameRate,value:[]};var a=Object.prototype.hasOwnProperty.call(data.k[e],"s")?data.k[e].s:data.k[e-1].e;for(i=a.length,r=0;r<i;r+=1)t[r]=a[r],t.value[r]=a[r];return t}function framesToTime(e,t){return t||(t=elem.comp.globalData.frameRate),e/t}function timeToFrames(e,t){return e||0===e||(e=time),t||(t=elem.comp.globalData.frameRate),e*t}function seedRandom(e){BMMath.seedrandom(randSeed+e)}function sourceRectAtTime(){return elem.sourceRectAtTime()}function substring(e,t){return"string"==typeof value?void 0===t?value.substring(e):value.substring(e,t):""}function substr(e,t){return"string"==typeof value?void 0===t?value.substr(e):value.substr(e,t):""}function posterizeTime(e){time=0===e?0:Math.floor(time*e)/e,value=valueAtTime(time)}var index=elem.data.ind,hasParent=!(!elem.hierarchy||!elem.hierarchy.length),parent,randSeed=Math.floor(1e6*Math.random()),globalData=elem.globalData;function executeExpression(e){return value=e,this.frameExpressionId===elem.globalData.frameId&&"textSelector"!==this.propType?value:("textSelector"===this.propType&&(textIndex=this.textIndex,textTotal=this.textTotal,selectorValue=this.selectorValue),thisLayer||(text=elem.layerInterface.text,thisLayer=elem.layerInterface,thisComp=elem.comp.compInterface,toWorld=thisLayer.toWorld.bind(thisLayer),fromWorld=thisLayer.fromWorld.bind(thisLayer),fromComp=thisLayer.fromComp.bind(thisLayer),toComp=thisLayer.toComp.bind(thisLayer),mask=thisLayer.mask?thisLayer.mask.bind(thisLayer):null,fromCompToSurface=fromComp),transform||(transform=elem.layerInterface("ADBE Transform Group"),$bm_transform=transform,transform&&(anchorPoint=transform.anchorPoint)),4!==elemType||content||(content=thisLayer("ADBE Root Vectors Group")),effect||(effect=thisLayer(4)),(hasParent=!(!elem.hierarchy||!elem.hierarchy.length))&&!parent&&(parent=elem.hierarchy[0].layerInterface),time=this.comp.renderedFrame/this.comp.globalData.frameRate,_needsRandom&&seedRandom(randSeed+time),needsVelocity&&(velocity=velocityAtTime(time)),expression_function(),this.frameExpressionId=elem.globalData.frameId,scoped_bm_rt=scoped_bm_rt.propType===propTypes.SHAPE?scoped_bm_rt.v:scoped_bm_rt)}return executeExpression.__preventDeadCodeRemoval=[$bm_transform,anchorPoint,time,velocity,inPoint,outPoint,width,height,name,loop_in,loop_out,smooth,toComp,fromCompToSurface,toWorld,fromWorld,mask,position,rotation,scale,thisComp,numKeys,active,wiggle,loopInDuration,loopOutDuration,comp,lookAt,easeOut,easeIn,ease,nearestKey,key,text,textIndex,textTotal,selectorValue,framesToTime,timeToFrames,sourceRectAtTime,substring,substr,posterizeTime,index,globalData],executeExpression}return ob.initiateExpression=initiateExpression,ob.__preventDeadCodeRemoval=[window,document,XMLHttpRequest,fetch,frames,$bm_neg,add,$bm_sum,$bm_sub,$bm_mul,$bm_div,$bm_mod,clamp,radians_to_degrees,degreesToRadians,degrees_to_radians,normalize,rgbToHsl,hslToRgb,linear,random,createPath],ob}(),expressionHelpers={searchExpressions:function(e,t,r){t.x&&(r.k=!0,r.x=!0,r.initiateExpression=ExpressionManager.initiateExpression,r.effectsSequence.push(r.initiateExpression(e,t,r).bind(r)))},getSpeedAtTime:function(e){var t=this.getValueAtTime(e),r=this.getValueAtTime(e+-.01),i=0;if(t.length){var a;for(a=0;a<t.length;a+=1)i+=Math.pow(r[a]-t[a],2);i=100*Math.sqrt(i)}else i=0;return i},getVelocityAtTime:function(e){if(void 0!==this.vel)return this.vel;var t,r,i=-.001,a=this.getValueAtTime(e),n=this.getValueAtTime(e+i);if(a.length)for(t=createTypedArray("float32",a.length),r=0;r<a.length;r+=1)t[r]=(n[r]-a[r])/i;else t=(n-a)/i;return t},getValueAtTime:function(e){return e*=this.elem.globalData.frameRate,(e-=this.offsetTime)!==this._cachingAtTime.lastFrame&&(this._cachingAtTime.lastIndex=this._cachingAtTime.lastFrame<e?this._cachingAtTime.lastIndex:0,this._cachingAtTime.value=this.interpolateValue(e,this._cachingAtTime),this._cachingAtTime.lastFrame=e),this._cachingAtTime.value},getStaticValueAtTime:function(){return this.pv},setGroupProperty:function(e){this.propertyGroup=e}};function addPropertyDecorator(){function e(e,t,r){if(!this.k||!this.keyframes)return this.pv;e=e?e.toLowerCase():"";var i,a,n,o,s,l=this.comp.renderedFrame,p=this.keyframes,c=p[p.length-1].t;if(l<=c)return this.pv;if(r?a=c-(i=t?Math.abs(c-this.elem.comp.globalData.frameRate*t):Math.max(0,c-this.elem.data.ip)):((!t||t>p.length-1)&&(t=p.length-1),i=c-(a=p[p.length-1-t].t)),"pingpong"===e){if(Math.floor((l-a)/i)%2!=0)return this.getValueAtTime((i-(l-a)%i+a)/this.comp.globalData.frameRate,0)}else{if("offset"===e){var d=this.getValueAtTime(a/this.comp.globalData.frameRate,0),h=this.getValueAtTime(c/this.comp.globalData.frameRate,0),u=this.getValueAtTime(((l-a)%i+a)/this.comp.globalData.frameRate,0),m=Math.floor((l-a)/i);if(this.pv.length){for(o=(s=new Array(d.length)).length,n=0;n<o;n+=1)s[n]=(h[n]-d[n])*m+u[n];return s}return(h-d)*m+u}if("continue"===e){var f=this.getValueAtTime(c/this.comp.globalData.frameRate,0),y=this.getValueAtTime((c-.001)/this.comp.globalData.frameRate,0);if(this.pv.length){for(o=(s=new Array(f.length)).length,n=0;n<o;n+=1)s[n]=f[n]+(f[n]-y[n])*((l-c)/this.comp.globalData.frameRate)/5e-4;return s}return f+(l-c)/.001*(f-y)}}return this.getValueAtTime(((l-a)%i+a)/this.comp.globalData.frameRate,0)}function t(e,t,r){if(!this.k)return this.pv;e=e?e.toLowerCase():"";var i,a,n,o,s,l=this.comp.renderedFrame,p=this.keyframes,c=p[0].t;if(l>=c)return this.pv;if(r?a=c+(i=t?Math.abs(this.elem.comp.globalData.frameRate*t):Math.max(0,this.elem.data.op-c)):((!t||t>p.length-1)&&(t=p.length-1),i=(a=p[t].t)-c),"pingpong"===e){if(Math.floor((c-l)/i)%2==0)return this.getValueAtTime(((c-l)%i+c)/this.comp.globalData.frameRate,0)}else{if("offset"===e){var d=this.getValueAtTime(c/this.comp.globalData.frameRate,0),h=this.getValueAtTime(a/this.comp.globalData.frameRate,0),u=this.getValueAtTime((i-(c-l)%i+c)/this.comp.globalData.frameRate,0),m=Math.floor((c-l)/i)+1;if(this.pv.length){for(o=(s=new Array(d.length)).length,n=0;n<o;n+=1)s[n]=u[n]-(h[n]-d[n])*m;return s}return u-(h-d)*m}if("continue"===e){var f=this.getValueAtTime(c/this.comp.globalData.frameRate,0),y=this.getValueAtTime((c+.001)/this.comp.globalData.frameRate,0);if(this.pv.length){for(o=(s=new Array(f.length)).length,n=0;n<o;n+=1)s[n]=f[n]+(f[n]-y[n])*(c-l)/.001;return s}return f+(f-y)*(c-l)/.001}}return this.getValueAtTime((i-((c-l)%i+c))/this.comp.globalData.frameRate,0)}function r(e,t){if(!this.k)return this.pv;if(e=.5*(e||.4),(t=Math.floor(t||5))<=1)return this.pv;var r,i,a=this.comp.renderedFrame/this.comp.globalData.frameRate,n=a-e,o=t>1?(a+e-n)/(t-1):1,s=0,l=0;for(r=this.pv.length?createTypedArray("float32",this.pv.length):0;s<t;){if(i=this.getValueAtTime(n+s*o),this.pv.length)for(l=0;l<this.pv.length;l+=1)r[l]+=i[l];else r+=i;s+=1}if(this.pv.length)for(l=0;l<this.pv.length;l+=1)r[l]/=t;else r/=t;return r}function i(e){this._transformCachingAtTime||(this._transformCachingAtTime={v:new Matrix});var t=this._transformCachingAtTime.v;if(t.cloneFromProps(this.pre.props),this.appliedTransformations<1){var r=this.a.getValueAtTime(e);t.translate(-r[0]*this.a.mult,-r[1]*this.a.mult,r[2]*this.a.mult)}if(this.appliedTransformations<2){var i=this.s.getValueAtTime(e);t.scale(i[0]*this.s.mult,i[1]*this.s.mult,i[2]*this.s.mult)}if(this.sk&&this.appliedTransformations<3){var a=this.sk.getValueAtTime(e),n=this.sa.getValueAtTime(e);t.skewFromAxis(-a*this.sk.mult,n*this.sa.mult)}if(this.r&&this.appliedTransformations<4){var o=this.r.getValueAtTime(e);t.rotate(-o*this.r.mult)}else if(!this.r&&this.appliedTransformations<4){var s=this.rz.getValueAtTime(e),l=this.ry.getValueAtTime(e),p=this.rx.getValueAtTime(e),c=this.or.getValueAtTime(e);t.rotateZ(-s*this.rz.mult).rotateY(l*this.ry.mult).rotateX(p*this.rx.mult).rotateZ(-c[2]*this.or.mult).rotateY(c[1]*this.or.mult).rotateX(c[0]*this.or.mult)}if(this.data.p&&this.data.p.s){var d=this.px.getValueAtTime(e),h=this.py.getValueAtTime(e);if(this.data.p.z){var u=this.pz.getValueAtTime(e);t.translate(d*this.px.mult,h*this.py.mult,-u*this.pz.mult)}else t.translate(d*this.px.mult,h*this.py.mult,0)}else{var m=this.p.getValueAtTime(e);t.translate(m[0]*this.p.mult,m[1]*this.p.mult,-m[2]*this.p.mult)}return t}function a(){return this.v.clone(new Matrix)}var n=TransformPropertyFactory.getTransformProperty;TransformPropertyFactory.getTransformProperty=function(e,t,r){var o=n(e,t,r);return o.dynamicProperties.length?o.getValueAtTime=i.bind(o):o.getValueAtTime=a.bind(o),o.setGroupProperty=expressionHelpers.setGroupProperty,o};var o=PropertyFactory.getProp;PropertyFactory.getProp=function(i,a,n,s,l){var p=o(i,a,n,s,l);p.kf?p.getValueAtTime=expressionHelpers.getValueAtTime.bind(p):p.getValueAtTime=expressionHelpers.getStaticValueAtTime.bind(p),p.setGroupProperty=expressionHelpers.setGroupProperty,p.loopOut=e,p.loopIn=t,p.smooth=r,p.getVelocityAtTime=expressionHelpers.getVelocityAtTime.bind(p),p.getSpeedAtTime=expressionHelpers.getSpeedAtTime.bind(p),p.numKeys=1===a.a?a.k.length:0,p.propertyIndex=a.ix;var c=0;return 0!==n&&(c=createTypedArray("float32",1===a.a?a.k[0].s.length:a.k.length)),p._cachingAtTime={lastFrame:initialDefaultFrame,lastIndex:0,value:c},expressionHelpers.searchExpressions(i,a,p),p.k&&l.addDynamicProperty(p),p};var s=ShapePropertyFactory.getConstructorFunction(),l=ShapePropertyFactory.getKeyframedConstructorFunction();function p(){}p.prototype={vertices:function(e,t){this.k&&this.getValue();var r,i=this.v;void 0!==t&&(i=this.getValueAtTime(t,0));var a=i._length,n=i[e],o=i.v,s=createSizedArray(a);for(r=0;r<a;r+=1)s[r]="i"===e||"o"===e?[n[r][0]-o[r][0],n[r][1]-o[r][1]]:[n[r][0],n[r][1]];return s},points:function(e){return this.vertices("v",e)},inTangents:function(e){return this.vertices("i",e)},outTangents:function(e){return this.vertices("o",e)},isClosed:function(){return this.v.c},pointOnPath:function(e,t){var r=this.v;void 0!==t&&(r=this.getValueAtTime(t,0)),this._segmentsLength||(this._segmentsLength=bez.getSegmentsLength(r));for(var i,a=this._segmentsLength,n=a.lengths,o=a.totalLength*e,s=0,l=n.length,p=0;s<l;){if(p+n[s].addedLength>o){var c=s,d=r.c&&s===l-1?0:s+1,h=(o-p)/n[s].addedLength;i=bez.getPointInSegment(r.v[c],r.v[d],r.o[c],r.i[d],h,n[s]);break}p+=n[s].addedLength,s+=1}return i||(i=r.c?[r.v[0][0],r.v[0][1]]:[r.v[r._length-1][0],r.v[r._length-1][1]]),i},vectorOnPath:function(e,t,r){1==e?e=this.v.c:0==e&&(e=.999);var i=this.pointOnPath(e,t),a=this.pointOnPath(e+.001,t),n=a[0]-i[0],o=a[1]-i[1],s=Math.sqrt(Math.pow(n,2)+Math.pow(o,2));return 0===s?[0,0]:"tangent"===r?[n/s,o/s]:[-o/s,n/s]},tangentOnPath:function(e,t){return this.vectorOnPath(e,t,"tangent")},normalOnPath:function(e,t){return this.vectorOnPath(e,t,"normal")},setGroupProperty:expressionHelpers.setGroupProperty,getValueAtTime:expressionHelpers.getStaticValueAtTime},extendPrototype([p],s),extendPrototype([p],l),l.prototype.getValueAtTime=function(e){return this._cachingAtTime||(this._cachingAtTime={shapeValue:shapePool.clone(this.pv),lastIndex:0,lastTime:initialDefaultFrame}),e*=this.elem.globalData.frameRate,(e-=this.offsetTime)!==this._cachingAtTime.lastTime&&(this._cachingAtTime.lastIndex=this._cachingAtTime.lastTime<e?this._caching.lastIndex:0,this._cachingAtTime.lastTime=e,this.interpolateShape(e,this._cachingAtTime.shapeValue,this._cachingAtTime)),this._cachingAtTime.shapeValue},l.prototype.initiateExpression=ExpressionManager.initiateExpression;var c=ShapePropertyFactory.getShapeProp;ShapePropertyFactory.getShapeProp=function(e,t,r,i,a){var n=c(e,t,r,i,a);return n.propertyIndex=t.ix,n.lock=!1,3===r?expressionHelpers.searchExpressions(e,t.pt,n):4===r&&expressionHelpers.searchExpressions(e,t.ks,n),n.k&&e.addDynamicProperty(n),n}}function initialize$1(){addPropertyDecorator()}function addDecorator(){TextProperty.prototype.getExpressionValue=function(e,t){var r=this.calculateExpression(t);if(e.t!==r){var i={};return this.copyData(i,e),i.t=r.toString(),i.__complete=!1,i}return e},TextProperty.prototype.searchProperty=function(){var e=this.searchKeyframes(),t=this.searchExpressions();return this.kf=e||t,this.kf},TextProperty.prototype.searchExpressions=function(){return this.data.d.x?(this.calculateExpression=ExpressionManager.initiateExpression.bind(this)(this.elem,this.data.d,this),this.addEffect(this.getExpressionValue.bind(this)),!0):null}}function initialize(){addDecorator()}function SVGComposableEffect(){}SVGComposableEffect.prototype={createMergeNode:function(e,t){var r,i,a=createNS("feMerge");for(a.setAttribute("result",e),i=0;i<t.length;i+=1)(r=createNS("feMergeNode")).setAttribute("in",t[i]),a.appendChild(r),a.appendChild(r);return a}};var linearFilterValue="0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0";function SVGTintFilter(e,t,r,i,a){this.filterManager=t;var n=createNS("feColorMatrix");n.setAttribute("type","matrix"),n.setAttribute("color-interpolation-filters","linearRGB"),n.setAttribute("values",linearFilterValue+" 1 0"),this.linearFilter=n,n.setAttribute("result",i+"_tint_1"),e.appendChild(n),(n=createNS("feColorMatrix")).setAttribute("type","matrix"),n.setAttribute("color-interpolation-filters","sRGB"),n.setAttribute("values","1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"),n.setAttribute("result",i+"_tint_2"),e.appendChild(n),this.matrixFilter=n;var o=this.createMergeNode(i,[a,i+"_tint_1",i+"_tint_2"]);e.appendChild(o)}function SVGFillFilter(e,t,r,i){this.filterManager=t;var a=createNS("feColorMatrix");a.setAttribute("type","matrix"),a.setAttribute("color-interpolation-filters","sRGB"),a.setAttribute("values","1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"),a.setAttribute("result",i),e.appendChild(a),this.matrixFilter=a}function SVGStrokeEffect(e,t,r){this.initialized=!1,this.filterManager=t,this.elem=r,this.paths=[]}function SVGTritoneFilter(e,t,r,i){this.filterManager=t;var a=createNS("feColorMatrix");a.setAttribute("type","matrix"),a.setAttribute("color-interpolation-filters","linearRGB"),a.setAttribute("values","0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"),e.appendChild(a);var n=createNS("feComponentTransfer");n.setAttribute("color-interpolation-filters","sRGB"),n.setAttribute("result",i),this.matrixFilter=n;var o=createNS("feFuncR");o.setAttribute("type","table"),n.appendChild(o),this.feFuncR=o;var s=createNS("feFuncG");s.setAttribute("type","table"),n.appendChild(s),this.feFuncG=s;var l=createNS("feFuncB");l.setAttribute("type","table"),n.appendChild(l),this.feFuncB=l,e.appendChild(n)}function SVGProLevelsFilter(e,t,r,i){this.filterManager=t;var a=this.filterManager.effectElements,n=createNS("feComponentTransfer");(a[10].p.k||0!==a[10].p.v||a[11].p.k||1!==a[11].p.v||a[12].p.k||1!==a[12].p.v||a[13].p.k||0!==a[13].p.v||a[14].p.k||1!==a[14].p.v)&&(this.feFuncR=this.createFeFunc("feFuncR",n)),(a[17].p.k||0!==a[17].p.v||a[18].p.k||1!==a[18].p.v||a[19].p.k||1!==a[19].p.v||a[20].p.k||0!==a[20].p.v||a[21].p.k||1!==a[21].p.v)&&(this.feFuncG=this.createFeFunc("feFuncG",n)),(a[24].p.k||0!==a[24].p.v||a[25].p.k||1!==a[25].p.v||a[26].p.k||1!==a[26].p.v||a[27].p.k||0!==a[27].p.v||a[28].p.k||1!==a[28].p.v)&&(this.feFuncB=this.createFeFunc("feFuncB",n)),(a[31].p.k||0!==a[31].p.v||a[32].p.k||1!==a[32].p.v||a[33].p.k||1!==a[33].p.v||a[34].p.k||0!==a[34].p.v||a[35].p.k||1!==a[35].p.v)&&(this.feFuncA=this.createFeFunc("feFuncA",n)),(this.feFuncR||this.feFuncG||this.feFuncB||this.feFuncA)&&(n.setAttribute("color-interpolation-filters","sRGB"),e.appendChild(n)),(a[3].p.k||0!==a[3].p.v||a[4].p.k||1!==a[4].p.v||a[5].p.k||1!==a[5].p.v||a[6].p.k||0!==a[6].p.v||a[7].p.k||1!==a[7].p.v)&&((n=createNS("feComponentTransfer")).setAttribute("color-interpolation-filters","sRGB"),n.setAttribute("result",i),e.appendChild(n),this.feFuncRComposed=this.createFeFunc("feFuncR",n),this.feFuncGComposed=this.createFeFunc("feFuncG",n),this.feFuncBComposed=this.createFeFunc("feFuncB",n))}function SVGDropShadowEffect(e,t,r,i,a){var n=t.container.globalData.renderConfig.filterSize,o=t.data.fs||n;e.setAttribute("x",o.x||n.x),e.setAttribute("y",o.y||n.y),e.setAttribute("width",o.width||n.width),e.setAttribute("height",o.height||n.height),this.filterManager=t;var s=createNS("feGaussianBlur");s.setAttribute("in","SourceAlpha"),s.setAttribute("result",i+"_drop_shadow_1"),s.setAttribute("stdDeviation","0"),this.feGaussianBlur=s,e.appendChild(s);var l=createNS("feOffset");l.setAttribute("dx","25"),l.setAttribute("dy","0"),l.setAttribute("in",i+"_drop_shadow_1"),l.setAttribute("result",i+"_drop_shadow_2"),this.feOffset=l,e.appendChild(l);var p=createNS("feFlood");p.setAttribute("flood-color","#00ff00"),p.setAttribute("flood-opacity","1"),p.setAttribute("result",i+"_drop_shadow_3"),this.feFlood=p,e.appendChild(p);var c=createNS("feComposite");c.setAttribute("in",i+"_drop_shadow_3"),c.setAttribute("in2",i+"_drop_shadow_2"),c.setAttribute("operator","in"),c.setAttribute("result",i+"_drop_shadow_4"),e.appendChild(c);var d=this.createMergeNode(i,[i+"_drop_shadow_4",a]);e.appendChild(d)}extendPrototype([SVGComposableEffect],SVGTintFilter),SVGTintFilter.prototype.renderFrame=function(e){if(e||this.filterManager._mdf){var t=this.filterManager.effectElements[0].p.v,r=this.filterManager.effectElements[1].p.v,i=this.filterManager.effectElements[2].p.v/100;this.linearFilter.setAttribute("values",linearFilterValue+" "+i+" 0"),this.matrixFilter.setAttribute("values",r[0]-t[0]+" 0 0 0 "+t[0]+" "+(r[1]-t[1])+" 0 0 0 "+t[1]+" "+(r[2]-t[2])+" 0 0 0 "+t[2]+" 0 0 0 1 0")}},SVGFillFilter.prototype.renderFrame=function(e){if(e||this.filterManager._mdf){var t=this.filterManager.effectElements[2].p.v,r=this.filterManager.effectElements[6].p.v;this.matrixFilter.setAttribute("values","0 0 0 0 "+t[0]+" 0 0 0 0 "+t[1]+" 0 0 0 0 "+t[2]+" 0 0 0 "+r+" 0")}},SVGStrokeEffect.prototype.initialize=function(){var e,t,r,i,a=this.elem.layerElement.children||this.elem.layerElement.childNodes;for(1===this.filterManager.effectElements[1].p.v?(i=this.elem.maskManager.masksProperties.length,r=0):i=1+(r=this.filterManager.effectElements[0].p.v-1),(t=createNS("g")).setAttribute("fill","none"),t.setAttribute("stroke-linecap","round"),t.setAttribute("stroke-dashoffset",1);r<i;r+=1)e=createNS("path"),t.appendChild(e),this.paths.push({p:e,m:r});if(3===this.filterManager.effectElements[10].p.v){var n=createNS("mask"),o=createElementID();n.setAttribute("id",o),n.setAttribute("mask-type","alpha"),n.appendChild(t),this.elem.globalData.defs.appendChild(n);var s=createNS("g");for(s.setAttribute("mask","url("+getLocationHref()+"#"+o+")");a[0];)s.appendChild(a[0]);this.elem.layerElement.appendChild(s),this.masker=n,t.setAttribute("stroke","#fff")}else if(1===this.filterManager.effectElements[10].p.v||2===this.filterManager.effectElements[10].p.v){if(2===this.filterManager.effectElements[10].p.v)for(a=this.elem.layerElement.children||this.elem.layerElement.childNodes;a.length;)this.elem.layerElement.removeChild(a[0]);this.elem.layerElement.appendChild(t),this.elem.layerElement.removeAttribute("mask"),t.setAttribute("stroke","#fff")}this.initialized=!0,this.pathMasker=t},SVGStrokeEffect.prototype.renderFrame=function(e){var t;this.initialized||this.initialize();var r,i,a=this.paths.length;for(t=0;t<a;t+=1)if(-1!==this.paths[t].m&&(r=this.elem.maskManager.viewData[this.paths[t].m],i=this.paths[t].p,(e||this.filterManager._mdf||r.prop._mdf)&&i.setAttribute("d",r.lastPath),e||this.filterManager.effectElements[9].p._mdf||this.filterManager.effectElements[4].p._mdf||this.filterManager.effectElements[7].p._mdf||this.filterManager.effectElements[8].p._mdf||r.prop._mdf)){var n;if(0!==this.filterManager.effectElements[7].p.v||100!==this.filterManager.effectElements[8].p.v){var o=.01*Math.min(this.filterManager.effectElements[7].p.v,this.filterManager.effectElements[8].p.v),s=.01*Math.max(this.filterManager.effectElements[7].p.v,this.filterManager.effectElements[8].p.v),l=i.getTotalLength();n="0 0 0 "+l*o+" ";var p,c=l*(s-o),d=1+2*this.filterManager.effectElements[4].p.v*this.filterManager.effectElements[9].p.v*.01,h=Math.floor(c/d);for(p=0;p<h;p+=1)n+="1 "+2*this.filterManager.effectElements[4].p.v*this.filterManager.effectElements[9].p.v*.01+" ";n+="0 "+10*l+" 0 0"}else n="1 "+2*this.filterManager.effectElements[4].p.v*this.filterManager.effectElements[9].p.v*.01;i.setAttribute("stroke-dasharray",n)}if((e||this.filterManager.effectElements[4].p._mdf)&&this.pathMasker.setAttribute("stroke-width",2*this.filterManager.effectElements[4].p.v),(e||this.filterManager.effectElements[6].p._mdf)&&this.pathMasker.setAttribute("opacity",this.filterManager.effectElements[6].p.v),(1===this.filterManager.effectElements[10].p.v||2===this.filterManager.effectElements[10].p.v)&&(e||this.filterManager.effectElements[3].p._mdf)){var u=this.filterManager.effectElements[3].p.v;this.pathMasker.setAttribute("stroke","rgb("+bmFloor(255*u[0])+","+bmFloor(255*u[1])+","+bmFloor(255*u[2])+")")}},SVGTritoneFilter.prototype.renderFrame=function(e){if(e||this.filterManager._mdf){var t=this.filterManager.effectElements[0].p.v,r=this.filterManager.effectElements[1].p.v,i=this.filterManager.effectElements[2].p.v,a=i[0]+" "+r[0]+" "+t[0],n=i[1]+" "+r[1]+" "+t[1],o=i[2]+" "+r[2]+" "+t[2];this.feFuncR.setAttribute("tableValues",a),this.feFuncG.setAttribute("tableValues",n),this.feFuncB.setAttribute("tableValues",o)}},SVGProLevelsFilter.prototype.createFeFunc=function(e,t){var r=createNS(e);return r.setAttribute("type","table"),t.appendChild(r),r},SVGProLevelsFilter.prototype.getTableValue=function(e,t,r,i,a){for(var n,o,s=0,l=Math.min(e,t),p=Math.max(e,t),c=Array.call(null,{length:256}),d=0,h=a-i,u=t-e;s<=256;)o=(n=s/256)<=l?u<0?a:i:n>=p?u<0?i:a:i+h*Math.pow((n-e)/u,1/r),c[d]=o,d+=1,s+=256/255;return c.join(" ")},SVGProLevelsFilter.prototype.renderFrame=function(e){if(e||this.filterManager._mdf){var t,r=this.filterManager.effectElements;this.feFuncRComposed&&(e||r[3].p._mdf||r[4].p._mdf||r[5].p._mdf||r[6].p._mdf||r[7].p._mdf)&&(t=this.getTableValue(r[3].p.v,r[4].p.v,r[5].p.v,r[6].p.v,r[7].p.v),this.feFuncRComposed.setAttribute("tableValues",t),this.feFuncGComposed.setAttribute("tableValues",t),this.feFuncBComposed.setAttribute("tableValues",t)),this.feFuncR&&(e||r[10].p._mdf||r[11].p._mdf||r[12].p._mdf||r[13].p._mdf||r[14].p._mdf)&&(t=this.getTableValue(r[10].p.v,r[11].p.v,r[12].p.v,r[13].p.v,r[14].p.v),this.feFuncR.setAttribute("tableValues",t)),this.feFuncG&&(e||r[17].p._mdf||r[18].p._mdf||r[19].p._mdf||r[20].p._mdf||r[21].p._mdf)&&(t=this.getTableValue(r[17].p.v,r[18].p.v,r[19].p.v,r[20].p.v,r[21].p.v),this.feFuncG.setAttribute("tableValues",t)),this.feFuncB&&(e||r[24].p._mdf||r[25].p._mdf||r[26].p._mdf||r[27].p._mdf||r[28].p._mdf)&&(t=this.getTableValue(r[24].p.v,r[25].p.v,r[26].p.v,r[27].p.v,r[28].p.v),this.feFuncB.setAttribute("tableValues",t)),this.feFuncA&&(e||r[31].p._mdf||r[32].p._mdf||r[33].p._mdf||r[34].p._mdf||r[35].p._mdf)&&(t=this.getTableValue(r[31].p.v,r[32].p.v,r[33].p.v,r[34].p.v,r[35].p.v),this.feFuncA.setAttribute("tableValues",t))}},extendPrototype([SVGComposableEffect],SVGDropShadowEffect),SVGDropShadowEffect.prototype.renderFrame=function(e){if(e||this.filterManager._mdf){if((e||this.filterManager.effectElements[4].p._mdf)&&this.feGaussianBlur.setAttribute("stdDeviation",this.filterManager.effectElements[4].p.v/4),e||this.filterManager.effectElements[0].p._mdf){var t=this.filterManager.effectElements[0].p.v;this.feFlood.setAttribute("flood-color",rgbToHex(Math.round(255*t[0]),Math.round(255*t[1]),Math.round(255*t[2])))}if((e||this.filterManager.effectElements[1].p._mdf)&&this.feFlood.setAttribute("flood-opacity",this.filterManager.effectElements[1].p.v/255),e||this.filterManager.effectElements[2].p._mdf||this.filterManager.effectElements[3].p._mdf){var r=this.filterManager.effectElements[3].p.v,i=(this.filterManager.effectElements[2].p.v-90)*degToRads,a=r*Math.cos(i),n=r*Math.sin(i);this.feOffset.setAttribute("dx",a),this.feOffset.setAttribute("dy",n)}}};var _svgMatteSymbols=[];function SVGMatte3Effect(e,t,r){this.initialized=!1,this.filterManager=t,this.filterElem=e,this.elem=r,r.matteElement=createNS("g"),r.matteElement.appendChild(r.layerElement),r.matteElement.appendChild(r.transformedElement),r.baseElement=r.matteElement}function SVGGaussianBlurEffect(e,t,r,i){e.setAttribute("x","-100%"),e.setAttribute("y","-100%"),e.setAttribute("width","300%"),e.setAttribute("height","300%"),this.filterManager=t;var a=createNS("feGaussianBlur");a.setAttribute("result",i),e.appendChild(a),this.feGaussianBlur=a}return SVGMatte3Effect.prototype.findSymbol=function(e){for(var t=0,r=_svgMatteSymbols.length;t<r;){if(_svgMatteSymbols[t]===e)return _svgMatteSymbols[t];t+=1}return null},SVGMatte3Effect.prototype.replaceInParent=function(e,t){var r=e.layerElement.parentNode;if(r){for(var i,a=r.children,n=0,o=a.length;n<o&&a[n]!==e.layerElement;)n+=1;n<=o-2&&(i=a[n+1]);var s=createNS("use");s.setAttribute("href","#"+t),i?r.insertBefore(s,i):r.appendChild(s)}},SVGMatte3Effect.prototype.setElementAsMask=function(e,t){if(!this.findSymbol(t)){var r=createElementID(),i=createNS("mask");i.setAttribute("id",t.layerId),i.setAttribute("mask-type","alpha"),_svgMatteSymbols.push(t);var a=e.globalData.defs;a.appendChild(i);var n=createNS("symbol");n.setAttribute("id",r),this.replaceInParent(t,r),n.appendChild(t.layerElement),a.appendChild(n);var o=createNS("use");o.setAttribute("href","#"+r),i.appendChild(o),t.data.hd=!1,t.show()}e.setMatte(t.layerId)},SVGMatte3Effect.prototype.initialize=function(){for(var e=this.filterManager.effectElements[0].p.v,t=this.elem.comp.elements,r=0,i=t.length;r<i;)t[r]&&t[r].data.ind===e&&this.setElementAsMask(this.elem,t[r]),r+=1;this.initialized=!0},SVGMatte3Effect.prototype.renderFrame=function(){this.initialized||this.initialize()},SVGGaussianBlurEffect.prototype.renderFrame=function(e){if(e||this.filterManager._mdf){var t=.3*this.filterManager.effectElements[0].p.v,r=this.filterManager.effectElements[1].p.v,i=3==r?0:t,a=2==r?0:t;this.feGaussianBlur.setAttribute("stdDeviation",i+" "+a);var n=1==this.filterManager.effectElements[2].p.v?"wrap":"duplicate";this.feGaussianBlur.setAttribute("edgeMode",n)}},registerRenderer("canvas",CanvasRenderer),registerRenderer("html",HybridRenderer),registerRenderer("svg",SVGRenderer),ShapeModifiers.registerModifier("tm",TrimModifier),ShapeModifiers.registerModifier("pb",PuckerAndBloatModifier),ShapeModifiers.registerModifier("rp",RepeaterModifier),ShapeModifiers.registerModifier("rd",RoundCornersModifier),ShapeModifiers.registerModifier("zz",ZigZagModifier),ShapeModifiers.registerModifier("op",OffsetPathModifier),setExpressionsPlugin(Expressions),setExpressionInterfaces(getInterface),initialize$1(),initialize(),registerEffect(20,SVGTintFilter,!0),registerEffect(21,SVGFillFilter,!0),registerEffect(22,SVGStrokeEffect,!1),registerEffect(23,SVGTritoneFilter,!0),registerEffect(24,SVGProLevelsFilter,!0),registerEffect(25,SVGDropShadowEffect,!0),registerEffect(28,SVGMatte3Effect,!1),registerEffect(29,SVGGaussianBlurEffect,!0),lottie},module.exports=factory())})(lottie$1,lottie$1.exports);var lottie=lottie$1.exports;function _iterableToArrayLimit(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var i,a,n,o,s=[],l=!0,p=!1;try{if(n=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(i=n.call(r)).done)&&(s.push(i.value),s.length!==t);l=!0);}catch(e){p=!0,a=e}finally{try{if(!l&&null!=r.return&&(o=r.return(),Object(o)!==o))return}finally{if(p)throw a}}return s}}function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function _objectSpread2(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){_defineProperty(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _defineProperty(e,t,r){return(t=_toPropertyKey(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}function _objectWithoutProperties(e,t){if(null==e)return{};var r,i,a=_objectWithoutPropertiesLoose(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_unsupportedIterableToArray$1(e,t)||_nonIterableRest()}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _unsupportedIterableToArray$1(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray$1(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray$1(e,t):void 0}}function _arrayLikeToArray$1(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _toPrimitive(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}function _toPropertyKey(e){var t=_toPrimitive(e,"string");return"symbol"==typeof t?t:String(t)}var _excluded$1=["animationData","loop","autoplay","initialSegment","onComplete","onLoopComplete","onEnterFrame","onSegmentStart","onConfigReady","onDataReady","onDataFailed","onLoadedImages","onDOMLoaded","onDestroy","lottieRef","renderer","name","assetsPath","rendererSettings"],useLottie=function(e,t){var r=e.animationData,i=e.loop,a=e.autoplay,n=e.initialSegment,o=e.onComplete,s=e.onLoopComplete,l=e.onEnterFrame,p=e.onSegmentStart,c=e.onConfigReady,d=e.onDataReady,h=e.onDataFailed,u=e.onLoadedImages,m=e.onDOMLoaded,f=e.onDestroy;e.lottieRef,e.renderer,e.name,e.assetsPath,e.rendererSettings;var y=_objectWithoutProperties(e,_excluded$1),g=_slicedToArray(useState(!1),2),_=g[0],x=g[1],b=useRef(),v=useRef(null);return useEffect((function(){var t=function(){var t,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(v.current){null===(t=b.current)||void 0===t||t.destroy();var i=_objectSpread2(_objectSpread2(_objectSpread2({},e),r),{},{container:v.current});return b.current=lottie.loadAnimation(i),x(!!b.current),function(){var e;null===(e=b.current)||void 0===e||e.destroy(),b.current=void 0}}}();return function(){return null==t?void 0:t()}}),[r,i]),useEffect((function(){b.current&&(b.current.autoplay=!!a)}),[a]),useEffect((function(){b.current&&(n?Array.isArray(n)&&n.length&&((b.current.currentRawFrame<n[0]||b.current.currentRawFrame>n[1])&&(b.current.currentRawFrame=n[0]),b.current.setSegment(n[0],n[1])):b.current.resetSegments(!0))}),[n]),useEffect((function(){var e=[{name:"complete",handler:o},{name:"loopComplete",handler:s},{name:"enterFrame",handler:l},{name:"segmentStart",handler:p},{name:"config_ready",handler:c},{name:"data_ready",handler:d},{name:"data_failed",handler:h},{name:"loaded_images",handler:u},{name:"DOMLoaded",handler:m},{name:"destroy",handler:f}].filter((function(e){return null!=e.handler}));if(e.length){var t=e.map((function(e){var t;return null===(t=b.current)||void 0===t||t.addEventListener(e.name,e.handler),function(){var t;null===(t=b.current)||void 0===t||t.removeEventListener(e.name,e.handler)}}));return function(){t.forEach((function(e){return e()}))}}}),[o,s,l,p,c,d,h,u,m,f]),{View:React__default.createElement("div",_objectSpread2({style:t,ref:v},y)),play:function(){var e;null===(e=b.current)||void 0===e||e.play()},stop:function(){var e;null===(e=b.current)||void 0===e||e.stop()},pause:function(){var e;null===(e=b.current)||void 0===e||e.pause()},setSpeed:function(e){var t;null===(t=b.current)||void 0===t||t.setSpeed(e)},goToAndStop:function(e,t){var r;null===(r=b.current)||void 0===r||r.goToAndStop(e,t)},goToAndPlay:function(e,t){var r;null===(r=b.current)||void 0===r||r.goToAndPlay(e,t)},setDirection:function(e){var t;null===(t=b.current)||void 0===t||t.setDirection(e)},playSegments:function(e,t){var r;null===(r=b.current)||void 0===r||r.playSegments(e,t)},setSubframe:function(e){var t;null===(t=b.current)||void 0===t||t.setSubframe(e)},getDuration:function(e){var t;return null===(t=b.current)||void 0===t?void 0:t.getDuration(e)},destroy:function(){var e;null===(e=b.current)||void 0===e||e.destroy(),b.current=void 0},animationContainerRef:v,animationLoaded:_,animationItem:b.current}},v$2="4.10.1",fr$2=24,ip$2=0,op$2=72,w$2=250,h$2=250,nm$1="Comp 1",ddd$2=0,assets$2=[{id:"comp_0",layers:[{ddd:0,ind:1,ty:4,nm:"Capa de formas 12",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:1,k:[{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:24,s:[81.5,370.25,0],e:[445.5,199.25,0],to:[60.6666679382324,-28.5,0],ti:[-60.6666679382324,28.5,0]},{t:48}],ix:2},a:{a:0,k:[0,0,0],ix:1},s:{a:0,k:[43,43,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[28,0],[34.935,-19.483],[31.619,18.821],[33,-14],[57,29],[0,0],[0,0],[0,0]],o:[[-28,0],[-52,29],[-42,-25],[-28.892,12.257],[-57,-29],[0,0],[0,0],[0,0]],v:[[367.75,-97],[277,-75],[155,-82],[35,-82],[-94,-82.326],[-200,-74],[-352.07,320.209],[499.162,354.093]],c:!0},ix:2},nm:"Trazado 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[.9372549019607843,.2549019607843137,.23921568627450981,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Relleno 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transformar"}],nm:"Forma 1",np:3,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:144,st:0,bm:0},{ddd:0,ind:2,ty:4,nm:"Capa de formas 2",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:1,k:[{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:24,s:[-133,374,0],e:[231,203,0],to:[60.6666679382324,-28.5,0],ti:[-60.6666679382324,28.5,0]},{t:48}],ix:2},a:{a:0,k:[0,0,0],ix:1},s:{a:0,k:[43,43,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[28,0],[34.935,-19.483],[31.619,18.821],[33,-14],[57,29],[0,0],[0,0],[0,0]],o:[[-28,0],[-52,29],[-42,-25],[-28.892,12.257],[-57,-29],[0,0],[0,0],[0,0]],v:[[367.75,-97],[277,-75],[155,-82],[35,-82],[-94,-82.326],[-200,-74],[-352.07,320.209],[499.162,354.093]],c:!0},ix:2},nm:"Trazado 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[.9372549019607843,.2549019607843137,.23921568627450981,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Relleno 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transformar"}],nm:"Forma 1",np:3,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:144,st:0,bm:0}]}],layers$2=[{ddd:0,ind:1,ty:4,nm:"Capa de formas 5",sr:1,ks:{o:{a:1,k:[{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:15,s:[100],e:[0]},{t:16}],ix:11},r:{a:0,k:0,ix:10},p:{a:1,k:[{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:0,s:[124.375,-8.75,0],e:[199,156,0],to:[0,28.3333339691162,0],ti:[0,-28.9375,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:12,s:[124.375,97.5,0],e:[199,164.066,0],to:[0,4.54861259460449,0],ti:[0,-2.45892143249512,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:13,s:[124.375,102.54125,0],e:[199,166.125,0],to:[0,13.1843204498291,0],ti:[0,-1.72074222564697,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:14,s:[124.375,103.828125,0],e:[199,168.375,0],to:[0,2.04166674613953,0],ti:[0,-.04166666790843,0]},{t:15}],ix:2},a:{a:0,k:[-1,-182.375,0],ix:1},s:{a:1,k:[{i:{x:[.833,.833,.833],y:[.833,.833,.833]},o:{x:[.167,.167,.167],y:[.167,.167,.167]},n:["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],t:0,s:[31.25,31.25,100],e:[31.25,58.75,100]},{i:{x:[.833,.833,.833],y:[.833,.833,.833]},o:{x:[.167,.167,.167],y:[.167,.167,.167]},n:["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],t:12,s:[31.25,58.75,100],e:[43.75,27.083125,100]},{i:{x:[.833,.833,.833],y:[.833,.833,.833]},o:{x:[.167,.167,.167],y:[.167,.167,.167]},n:["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],t:13,s:[43.75,27.083125,100],e:[65.16125000000001,20,100]},{i:{x:[.833,.833,.833],y:[.833,.833,.833]},o:{x:[.167,.167,.167],y:[.167,.167,.167]},n:["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],t:14,s:[65.16125000000001,20,100],e:[132.5,11.25,100]},{t:15}],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[.938,0],[0,-5.25],[-4.563,.125],[.108,4.624]],o:[[-.813,.125],[0,4.813],[4.563,-.125],[-.125,-5.375]],v:[[-1.344,-193.078],[-8.75,-180.5],[-1.063,-172.313],[6.938,-180.188]],c:!0},ix:2},nm:"Trazado 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[.2549019607843137,.25098039215686274,.25882352941176473,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Relleno 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transformar"}],nm:"Forma 1",np:3,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:60,st:0,bm:0},{ddd:0,ind:8,ty:4,nm:"Capa de formas 3",sr:1,ks:{o:{a:1,k:[{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:46,s:[0],e:[100]},{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:47,s:[100],e:[100]},{t:48}],ix:11},r:{a:0,k:0,ix:10},p:{a:1,k:[{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:47,s:[124.98749999999998,105.15625,0],e:[199.98,158.037,0],to:[0,-.20375619828701,0],ti:[0,17.58864402771,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:48,s:[124.98749999999998,98.77312500000001,0],e:[199.98,-10,0],to:[-28421709430404e-27,-50.4047393798828,0],ti:[0,1.17485654354095,0]},{t:53}],ix:2},a:{a:0,k:[-32,-31,0],ix:1},s:{a:1,k:[{i:{x:[.833,.833,.833],y:[.833,.833,.833]},o:{x:[.167,.167,.167],y:[.167,.167,.167]},n:["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],t:47,s:[-2.5,.625,100],e:[.9375,2.5,100]},{i:{x:[.833,.833,.833],y:[.833,.833,.833]},o:{x:[.167,.167,.167],y:[.167,.167,.167]},n:["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],t:48,s:[.9375,2.5,100],e:[1.25,1.875,100]},{t:53}],ix:6}},ao:0,shapes:[{ty:"gr",it:[{d:1,ty:"el",s:{a:0,k:[308,308],ix:2},p:{a:0,k:[0,0],ix:3},nm:"Trazado elíptico 1",mn:"ADBE Vector Shape - Ellipse",hd:!1},{ty:"fl",c:{a:0,k:[.2549019607843137,.25098039215686274,.25882352941176473,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Relleno 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[-31,-31],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transformar"}],nm:"Elipse 1",np:3,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:60,st:0,bm:0},{ddd:0,ind:9,ty:4,nm:"Capa de formas 4",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[124.375,158.125,0],ix:2},a:{a:0,k:[-32,-31,0],ix:1},s:{a:0,k:[34.375,34.375,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{d:1,ty:"el",s:{a:0,k:[308,308],ix:2},p:{a:0,k:[0,0],ix:3},nm:"Trazado elíptico 1",mn:"ADBE Vector Shape - Ellipse",hd:!1},{ty:"st",c:{a:0,k:[.2549019607843137,.25098039215686274,.25882352941176473,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:10,ix:5},lc:1,lj:1,ml:4,nm:"Trazo 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"tr",p:{a:0,k:[-31,-31],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transformar"}],nm:"Elipse 1",np:3,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"tm",s:{a:1,k:[{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:12,s:[50],e:[100]},{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:24,s:[100],e:[50]},{t:48}],ix:1},e:{a:1,k:[{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:12,s:[50],e:[0]},{i:{x:[.833],y:[.833]},o:{x:[.167],y:[.167]},n:["0p833_0p833_0p167_0p167"],t:24,s:[0],e:[50]},{t:48}],ix:2},o:{a:0,k:180,ix:3},m:1,ix:2,nm:"Recortar trazados 1",mn:"ADBE Vector Filter - Trim",hd:!1}],ip:0,op:60,st:0,bm:0},{ddd:0,ind:10,ty:4,nm:"Capa de formas 1",td:1,sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[124.375,158.125,0],ix:2},a:{a:0,k:[-32,-31,0],ix:1},s:{a:0,k:[31.25,31.25,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{d:1,ty:"el",s:{a:0,k:[308,308],ix:2},p:{a:0,k:[0,0],ix:3},nm:"Trazado elíptico 1",mn:"ADBE Vector Shape - Ellipse",hd:!1},{ty:"fl",c:{a:0,k:[.913725490196,.347995563582,.03941561007,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"Relleno 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[-31,-31],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transformar"}],nm:"Elipse 1",np:3,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:60,st:0,bm:0},{ddd:0,ind:11,ty:0,nm:"Precomp. 1",tt:1,refId:"comp_0",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[125,125,0],ix:2},a:{a:0,k:[200,200,0],ix:1},s:{a:0,k:[62.5,62.5,100],ix:6}},ao:0,w:400,h:400,ip:0,op:144,st:0,bm:0}],animationData$2={v:v$2,fr:fr$2,ip:ip$2,op:op$2,w:w$2,h:h$2,nm:nm$1,ddd:ddd$2,assets:assets$2,layers:layers$2};const LottieSpinner=()=>{const e={animationData:animationData$2,loop:!0,autoplay:!0,style:{height:"200px",width:"200px"}},{View:t}=useLottie(e);return jsx(Fragment,{children:t})},LoadingSpinner=e=>jsx(Container$m,{...e,children:jsx(LottieSpinner,{})}),Container$m=styled.div`
    margin: 0 auto;
    padding: 1rem 2rem 4rem;
`;var v$1="5.7.4",fr$1=120,ip$1=0,op$1=180,w$1=640,h$1=160,nm="Loading Orb",ddd$1=0,assets$1=[{id:"comp_0",layers:[{ddd:0,ind:1,ty:4,nm:"Shape Layer 1",sr:1,ks:{o:{a:1,k:[{i:{x:[.667],y:[1]},o:{x:[.333],y:[0]},t:60,s:[100]},{i:{x:[.667],y:[1]},o:{x:[.333],y:[0]},t:75,s:[50]},{t:100,s:[100]}],ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[79.984,80.047,0],ix:2,l:2},a:{a:0,k:[0,0,0],ix:1,l:2},s:{a:1,k:[{i:{x:[.667,.667,.667],y:[1,1,1]},o:{x:[.333,.333,.333],y:[0,0,0]},t:60,s:[100,100,100]},{i:{x:[.667,.667,.667],y:[1,1,1]},o:{x:[.333,.333,.333],y:[0,0,0]},t:75,s:[150,150,100]},{t:100,s:[100,100,100]}],ix:6,l:2}},ao:0,shapes:[{ty:"gr",it:[{d:1,ty:"el",s:{a:0,k:[100,100],ix:2},p:{a:0,k:[0,0],ix:3},nm:"Ellipse Path 1",mn:"ADBE Vector Shape - Ellipse",hd:!1},{ty:"st",c:{a:0,k:[1,1,1,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:0,ix:5},lc:1,lj:1,ml:4,bm:0,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"fl",c:{a:0,k:[.109803922474,.46274510026,.835294127464,1],ix:4},o:{a:0,k:100,ix:5},r:1,bm:0,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[.016,-.047],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Ellipse 1",np:3,cix:2,bm:0,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:240,st:0,bm:0}]},{id:"comp_1",layers:[{ddd:0,ind:1,ty:4,nm:"Shape Layer 1",sr:1,ks:{o:{a:1,k:[{i:{x:[.667],y:[1]},o:{x:[.333],y:[0]},t:61,s:[100]},{i:{x:[.667],y:[1]},o:{x:[.333],y:[0]},t:76,s:[50]},{t:101,s:[100]}],ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[79.984,80.047,0],ix:2,l:2},a:{a:0,k:[0,0,0],ix:1,l:2},s:{a:1,k:[{i:{x:[.667,.667,.667],y:[1,1,1]},o:{x:[.333,.333,.333],y:[0,0,0]},t:61,s:[100,100,100]},{i:{x:[.667,.667,.667],y:[1,1,1]},o:{x:[.333,.333,.333],y:[0,0,0]},t:76,s:[150,150,100]},{t:101,s:[100,100,100]}],ix:6,l:2}},ao:0,shapes:[{ty:"gr",it:[{d:1,ty:"el",s:{a:0,k:[100,100],ix:2},p:{a:0,k:[0,0],ix:3},nm:"Ellipse Path 1",mn:"ADBE Vector Shape - Ellipse",hd:!1},{ty:"st",c:{a:0,k:[1,1,1,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:0,ix:5},lc:1,lj:1,ml:4,bm:0,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"fl",c:{a:0,k:[.584313750267,.607843160629,.772549033165,1],ix:4},o:{a:0,k:100,ix:5},r:1,bm:0,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[.016,-.047],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Ellipse 1",np:3,cix:2,bm:0,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:240,st:0,bm:0}]},{id:"comp_2",layers:[{ddd:0,ind:1,ty:4,nm:"Shape Layer 1",sr:1,ks:{o:{a:1,k:[{i:{x:[.667],y:[1]},o:{x:[.333],y:[0]},t:59,s:[100]},{i:{x:[.667],y:[1]},o:{x:[.333],y:[0]},t:74,s:[50]},{t:99,s:[100]}],ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[79.984,80.047,0],ix:2,l:2},a:{a:0,k:[0,0,0],ix:1,l:2},s:{a:1,k:[{i:{x:[.667,.667,.667],y:[1,1,1]},o:{x:[.333,.333,.333],y:[0,0,0]},t:59,s:[100,100,100]},{i:{x:[.667,.667,.667],y:[1,1,1]},o:{x:[.333,.333,.333],y:[0,0,0]},t:74,s:[150,150,100]},{t:99,s:[100,100,100]}],ix:6,l:2}},ao:0,shapes:[{ty:"gr",it:[{d:1,ty:"el",s:{a:0,k:[100,100],ix:2},p:{a:0,k:[0,0],ix:3},nm:"Ellipse Path 1",mn:"ADBE Vector Shape - Ellipse",hd:!1},{ty:"st",c:{a:0,k:[1,1,1,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:0,ix:5},lc:1,lj:1,ml:4,bm:0,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"fl",c:{a:0,k:[.341176480055,.662745118141,1,1],ix:4},o:{a:0,k:100,ix:5},r:1,bm:0,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[.016,-.047],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Ellipse 1",np:3,cix:2,bm:0,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:240,st:0,bm:0}]},{id:"comp_3",layers:[{ddd:0,ind:1,ty:4,nm:"Shape Layer 1",sr:1,ks:{o:{a:1,k:[{i:{x:[.667],y:[1]},o:{x:[.333],y:[0]},t:59,s:[100]},{i:{x:[.667],y:[1]},o:{x:[.333],y:[0]},t:74,s:[50]},{t:99,s:[100]}],ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[79.984,80.047,0],ix:2,l:2},a:{a:0,k:[0,0,0],ix:1,l:2},s:{a:1,k:[{i:{x:[.667,.667,.667],y:[1,1,1]},o:{x:[.333,.333,.333],y:[0,0,0]},t:59,s:[100,100,100]},{i:{x:[.667,.667,.667],y:[1,1,1]},o:{x:[.333,.333,.333],y:[0,0,0]},t:74,s:[150,150,100]},{t:99,s:[100,100,100]}],ix:6,l:2}},ao:0,shapes:[{ty:"gr",it:[{d:1,ty:"el",s:{a:0,k:[100,100],ix:2},p:{a:0,k:[0,0],ix:3},nm:"Ellipse Path 1",mn:"ADBE Vector Shape - Ellipse",hd:!1},{ty:"st",c:{a:0,k:[1,1,1,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:0,ix:5},lc:1,lj:1,ml:4,bm:0,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"fl",c:{a:0,k:[.949019610882,.40000000596,.392156869173,1],ix:4},o:{a:0,k:100,ix:5},r:1,bm:0,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[.016,-.047],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Ellipse 1",np:3,cix:2,bm:0,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:240,st:0,bm:0}]},{id:"comp_4",layers:[{ddd:0,ind:1,ty:4,nm:"Shape Layer 1",sr:1,ks:{o:{a:1,k:[{i:{x:[.667],y:[1]},o:{x:[.333],y:[0]},t:59,s:[100]},{i:{x:[.667],y:[1]},o:{x:[.333],y:[0]},t:74,s:[50]},{t:99,s:[100]}],ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[79.984,80.047,0],ix:2,l:2},a:{a:0,k:[0,0,0],ix:1,l:2},s:{a:1,k:[{i:{x:[.667,.667,.667],y:[1,1,1]},o:{x:[.333,.333,.333],y:[0,0,0]},t:59,s:[100,100,100]},{i:{x:[.667,.667,.667],y:[1,1,1]},o:{x:[.333,.333,.333],y:[0,0,0]},t:74,s:[150,150,100]},{t:99,s:[100,100,100]}],ix:6,l:2}},ao:0,shapes:[{ty:"gr",it:[{d:1,ty:"el",s:{a:0,k:[100,100],ix:2},p:{a:0,k:[0,0],ix:3},nm:"Ellipse Path 1",mn:"ADBE Vector Shape - Ellipse",hd:!1},{ty:"st",c:{a:0,k:[1,1,1,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:0,ix:5},lc:1,lj:1,ml:4,bm:0,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"fl",c:{a:0,k:[.937254905701,.254901975393,.239215686917,1],ix:4},o:{a:0,k:100,ix:5},r:1,bm:0,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[.016,-.047],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Ellipse 1",np:3,cix:2,bm:0,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:240,st:0,bm:0}]}],layers$1=[{ddd:0,ind:1,ty:0,nm:"Orb 1",refId:"comp_0",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[80,80,0],ix:2,l:2},a:{a:0,k:[80,80,0],ix:1,l:2},s:{a:0,k:[100,100,100],ix:6,l:2}},ao:0,w:160,h:160,ip:-1,op:181,st:-59,bm:0},{ddd:0,ind:2,ty:0,nm:"Orb 2",refId:"comp_1",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[200,80,0],ix:2,l:2},a:{a:0,k:[80,80,0],ix:1,l:2},s:{a:0,k:[100,100,100],ix:6,l:2}},ao:0,w:160,h:160,ip:0,op:191,st:-49,bm:0},{ddd:0,ind:3,ty:0,nm:"Orb 3",refId:"comp_2",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[320,80,0],ix:2,l:2},a:{a:0,k:[80,80,0],ix:1,l:2},s:{a:0,k:[100,100,100],ix:6,l:2}},ao:0,w:160,h:160,ip:0,op:201,st:-39,bm:0},{ddd:0,ind:4,ty:0,nm:"Orb 4",refId:"comp_3",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[440,80,0],ix:2,l:2},a:{a:0,k:[80,80,0],ix:1,l:2},s:{a:0,k:[100,100,100],ix:6,l:2}},ao:0,w:160,h:160,ip:0,op:211,st:-29,bm:0},{ddd:0,ind:5,ty:0,nm:"Orb 5",refId:"comp_4",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[560,80,0],ix:2,l:2},a:{a:0,k:[80,80,0],ix:1,l:2},s:{a:0,k:[100,100,100],ix:6,l:2}},ao:0,w:160,h:160,ip:0,op:221,st:-19,bm:0}],markers=[],animationData$1={v:v$1,fr:fr$1,ip:ip$1,op:op$1,w:w$1,h:h$1,nm:nm,ddd:ddd$1,assets:assets$1,layers:layers$1,markers:markers};const LottieLoadingDots=()=>{const e={animationData:animationData$1,loop:!0,autoplay:!0,style:{height:"16px",width:"64px"}},{View:t}=useLottie(e);return jsx(Fragment,{children:t})},LoadingDots=e=>jsx(Container$l,{...e,children:jsx(LottieLoadingDots,{})}),Container$l=styled.div`
    margin: 0 auto;
`,BaseTheme={[ThemeContextKeys.colorScheme]:"base",[ThemeContextKeys.textStyleScheme]:"base",[ThemeContextKeys.designTokenScheme]:"base",[ThemeContextKeys.resourceScheme]:"base"},BookingSGTheme={[ThemeContextKeys.colorScheme]:"bookingsg",[ThemeContextKeys.textStyleScheme]:"base",[ThemeContextKeys.designTokenScheme]:"base",[ThemeContextKeys.resourceScheme]:"bookingsg"};var lib={},lodash_clonedeep={exports:{}};!function(e,t){var r="__lodash_hash_undefined__",i=9007199254740991,a="[object Arguments]",n="[object Boolean]",o="[object Date]",s="[object Function]",l="[object GeneratorFunction]",p="[object Map]",c="[object Number]",d="[object Object]",h="[object Promise]",u="[object RegExp]",m="[object Set]",f="[object String]",y="[object Symbol]",g="[object WeakMap]",_="[object ArrayBuffer]",x="[object DataView]",b="[object Float32Array]",v="[object Float64Array]",C="[object Int8Array]",S="[object Int16Array]",$="[object Int32Array]",w="[object Uint8Array]",T="[object Uint8ClampedArray]",k="[object Uint16Array]",E="[object Uint32Array]",A=/\w*$/,P=/^\[object .+?Constructor\]$/,I=/^(?:0|[1-9]\d*)$/,M={};M[a]=M["[object Array]"]=M[_]=M[x]=M[n]=M[o]=M[b]=M[v]=M[C]=M[S]=M[$]=M[p]=M[c]=M[d]=M[u]=M[m]=M[f]=M[y]=M[w]=M[T]=M[k]=M[E]=!0,M["[object Error]"]=M[s]=M[g]=!1;var D="object"==typeof commonjsGlobal&&commonjsGlobal&&commonjsGlobal.Object===Object&&commonjsGlobal,F="object"==typeof self&&self&&self.Object===Object&&self,R=D||F||Function("return this")(),j=t&&!t.nodeType&&t,L=j&&e&&!e.nodeType&&e,B=L&&L.exports===j;function O(e,t){return e.set(t[0],t[1]),e}function N(e,t){return e.add(t),e}function V(e,t,r,i){var a=-1,n=e?e.length:0;for(i&&n&&(r=e[++a]);++a<n;)r=t(r,e[a],a,e);return r}function H(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}function z(e){var t=-1,r=Array(e.size);return e.forEach((function(e,i){r[++t]=[i,e]})),r}function G(e,t){return function(r){return e(t(r))}}function W(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r}var U=Array.prototype,q=Function.prototype,Q=Object.prototype,Y=R["__core-js_shared__"],K=function(){var e=/[^.]+$/.exec(Y&&Y.keys&&Y.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),Z=q.toString,X=Q.hasOwnProperty,J=Q.toString,ee=RegExp("^"+Z.call(X).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),te=B?R.Buffer:void 0,re=R.Symbol,ie=R.Uint8Array,ae=G(Object.getPrototypeOf,Object),ne=Object.create,oe=Q.propertyIsEnumerable,se=U.splice,le=Object.getOwnPropertySymbols,pe=te?te.isBuffer:void 0,ce=G(Object.keys,Object),de=je(R,"DataView"),he=je(R,"Map"),ue=je(R,"Promise"),me=je(R,"Set"),fe=je(R,"WeakMap"),ye=je(Object,"create"),ge=Ve(de),_e=Ve(he),xe=Ve(ue),be=Ve(me),ve=Ve(fe),Ce=re?re.prototype:void 0,Se=Ce?Ce.valueOf:void 0;function $e(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var i=e[t];this.set(i[0],i[1])}}function we(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var i=e[t];this.set(i[0],i[1])}}function Te(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var i=e[t];this.set(i[0],i[1])}}function ke(e){this.__data__=new we(e)}function Ee(e,t){var r=ze(e)||function(e){return function(e){return function(e){return!!e&&"object"==typeof e}(e)&&Ge(e)}(e)&&X.call(e,"callee")&&(!oe.call(e,"callee")||J.call(e)==a)}(e)?function(e,t){for(var r=-1,i=Array(e);++r<e;)i[r]=t(r);return i}(e.length,String):[],i=r.length,n=!!i;for(var o in e)!t&&!X.call(e,o)||n&&("length"==o||Oe(o,i))||r.push(o);return r}function Ae(e,t,r){var i=e[t];X.call(e,t)&&He(i,r)&&(void 0!==r||t in e)||(e[t]=r)}function Pe(e,t){for(var r=e.length;r--;)if(He(e[r][0],t))return r;return-1}function Ie(e,t,r,i,h,g,P){var I;if(i&&(I=g?i(e,h,g,P):i(e)),void 0!==I)return I;if(!qe(e))return e;var D=ze(e);if(D){if(I=function(e){var t=e.length,r=e.constructor(t);t&&"string"==typeof e[0]&&X.call(e,"index")&&(r.index=e.index,r.input=e.input);return r}(e),!t)return function(e,t){var r=-1,i=e.length;t||(t=Array(i));for(;++r<i;)t[r]=e[r];return t}(e,I)}else{var F=Be(e),R=F==s||F==l;if(We(e))return function(e,t){if(t)return e.slice();var r=new e.constructor(e.length);return e.copy(r),r}(e,t);if(F==d||F==a||R&&!g){if(H(e))return g?e:{};if(I=function(e){return"function"!=typeof e.constructor||Ne(e)?{}:(t=ae(e),qe(t)?ne(t):{});var t}(R?{}:e),!t)return function(e,t){return Fe(e,Le(e),t)}(e,function(e,t){return e&&Fe(t,Qe(t),e)}(I,e))}else{if(!M[F])return g?e:{};I=function(e,t,r,i){var a=e.constructor;switch(t){case _:return De(e);case n:case o:return new a(+e);case x:return function(e,t){var r=t?De(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}(e,i);case b:case v:case C:case S:case $:case w:case T:case k:case E:return function(e,t){var r=t?De(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}(e,i);case p:return function(e,t,r){var i=t?r(z(e),!0):z(e);return V(i,O,new e.constructor)}(e,i,r);case c:case f:return new a(e);case u:return function(e){var t=new e.constructor(e.source,A.exec(e));return t.lastIndex=e.lastIndex,t}(e);case m:return function(e,t,r){var i=t?r(W(e),!0):W(e);return V(i,N,new e.constructor)}(e,i,r);case y:return s=e,Se?Object(Se.call(s)):{}}var s}(e,F,Ie,t)}}P||(P=new ke);var j=P.get(e);if(j)return j;if(P.set(e,I),!D)var L=r?function(e){return function(e,t,r){var i=t(e);return ze(e)?i:function(e,t){for(var r=-1,i=t.length,a=e.length;++r<i;)e[a+r]=t[r];return e}(i,r(e))}(e,Qe,Le)}(e):Qe(e);return function(e,t){for(var r=-1,i=e?e.length:0;++r<i&&!1!==t(e[r],r,e););}(L||e,(function(a,n){L&&(a=e[n=a]),Ae(I,n,Ie(a,t,r,i,n,e,P))})),I}function Me(e){return!(!qe(e)||(t=e,K&&K in t))&&(Ue(e)||H(e)?ee:P).test(Ve(e));var t}function De(e){var t=new e.constructor(e.byteLength);return new ie(t).set(new ie(e)),t}function Fe(e,t,r,i){r||(r={});for(var a=-1,n=t.length;++a<n;){var o=t[a],s=i?i(r[o],e[o],o,r,e):void 0;Ae(r,o,void 0===s?e[o]:s)}return r}function Re(e,t){var r,i,a=e.__data__;return("string"==(i=typeof(r=t))||"number"==i||"symbol"==i||"boolean"==i?"__proto__"!==r:null===r)?a["string"==typeof t?"string":"hash"]:a.map}function je(e,t){var r=function(e,t){return null==e?void 0:e[t]}(e,t);return Me(r)?r:void 0}$e.prototype.clear=function(){this.__data__=ye?ye(null):{}},$e.prototype.delete=function(e){return this.has(e)&&delete this.__data__[e]},$e.prototype.get=function(e){var t=this.__data__;if(ye){var i=t[e];return i===r?void 0:i}return X.call(t,e)?t[e]:void 0},$e.prototype.has=function(e){var t=this.__data__;return ye?void 0!==t[e]:X.call(t,e)},$e.prototype.set=function(e,t){return this.__data__[e]=ye&&void 0===t?r:t,this},we.prototype.clear=function(){this.__data__=[]},we.prototype.delete=function(e){var t=this.__data__,r=Pe(t,e);return!(r<0)&&(r==t.length-1?t.pop():se.call(t,r,1),!0)},we.prototype.get=function(e){var t=this.__data__,r=Pe(t,e);return r<0?void 0:t[r][1]},we.prototype.has=function(e){return Pe(this.__data__,e)>-1},we.prototype.set=function(e,t){var r=this.__data__,i=Pe(r,e);return i<0?r.push([e,t]):r[i][1]=t,this},Te.prototype.clear=function(){this.__data__={hash:new $e,map:new(he||we),string:new $e}},Te.prototype.delete=function(e){return Re(this,e).delete(e)},Te.prototype.get=function(e){return Re(this,e).get(e)},Te.prototype.has=function(e){return Re(this,e).has(e)},Te.prototype.set=function(e,t){return Re(this,e).set(e,t),this},ke.prototype.clear=function(){this.__data__=new we},ke.prototype.delete=function(e){return this.__data__.delete(e)},ke.prototype.get=function(e){return this.__data__.get(e)},ke.prototype.has=function(e){return this.__data__.has(e)},ke.prototype.set=function(e,t){var r=this.__data__;if(r instanceof we){var i=r.__data__;if(!he||i.length<199)return i.push([e,t]),this;r=this.__data__=new Te(i)}return r.set(e,t),this};var Le=le?G(le,Object):function(){return[]},Be=function(e){return J.call(e)};function Oe(e,t){return!!(t=null==t?i:t)&&("number"==typeof e||I.test(e))&&e>-1&&e%1==0&&e<t}function Ne(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Q)}function Ve(e){if(null!=e){try{return Z.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function He(e,t){return e===t||e!=e&&t!=t}(de&&Be(new de(new ArrayBuffer(1)))!=x||he&&Be(new he)!=p||ue&&Be(ue.resolve())!=h||me&&Be(new me)!=m||fe&&Be(new fe)!=g)&&(Be=function(e){var t=J.call(e),r=t==d?e.constructor:void 0,i=r?Ve(r):void 0;if(i)switch(i){case ge:return x;case _e:return p;case xe:return h;case be:return m;case ve:return g}return t});var ze=Array.isArray;function Ge(e){return null!=e&&function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=i}(e.length)&&!Ue(e)}var We=pe||function(){return!1};function Ue(e){var t=qe(e)?J.call(e):"";return t==s||t==l}function qe(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function Qe(e){return Ge(e)?Ee(e):function(e){if(!Ne(e))return ce(e);var t=[];for(var r in Object(e))X.call(e,r)&&"constructor"!=r&&t.push(r);return t}(e)}e.exports=function(e){return Ie(e,!0,!0)}}(lodash_clonedeep,lodash_clonedeep.exports);var __spreadArrays=commonjsGlobal&&commonjsGlobal.__spreadArrays||function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var i=Array(e),a=0;for(t=0;t<r;t++)for(var n=arguments[t],o=0,s=n.length;o<s;o++,a++)i[a]=n[o];return i},__importDefault=commonjsGlobal&&commonjsGlobal.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(lib,"__esModule",{value:!0});var getColors=lib.getColors=flatten=lib.flatten=lib.replaceColor=lib.colorify=void 0,lodash_clonedeep_1=__importDefault(lodash_clonedeep.exports);lib.colorify=function(e,t){void 0===e&&(e=[]);for(var r=[],i=0,a=e;i<a.length;i++){var n=a[i];r.push(convertColorToLottieColor(n))}return modifyColors(r,lodash_clonedeep_1.default(t))};var convertColorToLottieColor=function(e){if("string"==typeof e&&e.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i)){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);if(!t)throw new Error("Color can be only hex or rgb array (ex. [10,20,30])");return[Math.round(parseInt(t[1],16)/255*1e3)/1e3,Math.round(parseInt(t[2],16)/255*1e3)/1e3,Math.round(parseInt(t[3],16)/255*1e3)/1e3]}if("object"==typeof e&&3===e.length&&e.every((function(e){return e>=0&&e<=255})))return[Math.round(e[0]/255*1e3)/1e3,Math.round(e[1]/255*1e3)/1e3,Math.round(e[2]/255*1e3)/1e3];if(e)throw new Error("Color can be only hex or rgb array (ex. [10,20,30])")},round=function(e){return Math.round(1e3*e)/1e3};lib.replaceColor=function(e,t,r){var i=convertColorToLottieColor(e),a=convertColorToLottieColor(t);if(!i||!a)throw new Error("Proper colors must be used for both source and target");return function e(t,r,i){if(i.s&&Array.isArray(i.s)&&4===i.s.length)t[0]===i.s[0]&&t[1]===i.s[1]&&t[2]===i.s[2]&&(i.s=__spreadArrays(r,[1]));else if(i.c&&i.c.k)Array.isArray(i.c.k)&&"number"!=typeof i.c.k[0]?e(t,r,i.c.k):t[0]===round(i.c.k[0])&&t[1]===round(i.c.k[1])&&t[2]===round(i.c.k[2])&&(i.c.k=r);else for(var a in i)"object"==typeof i[a]&&e(t,r,i[a]);return i}(i,a,lodash_clonedeep_1.default(r))};var flatten=lib.flatten=function(e,t){var r=convertColorToLottieColor(e);if(!r)throw new Error("Proper colors must be used for target");return function e(t,r){if(r.s&&Array.isArray(r.s)&&4===r.s.length)r.s=__spreadArrays(t,[1]);else if(r.c&&r.c.k)Array.isArray(r.c.k)&&"number"!=typeof r.c.k[0]?e(t,r.c.k):r.c.k=t;else for(var i in r)"object"==typeof r[i]&&e(t,r[i]);return r}(r,lodash_clonedeep_1.default(t))},modifyColors=function(e,t){var r=0;return function e(t,i){for(var a in i.s&&Array.isArray(i.s)&&4===i.s.length?(t[r]&&(i.s=__spreadArrays(t[r],[1])),r++):i.c&&i.c.k&&(Array.isArray(i.c.k)&&"number"!=typeof i.c.k[0]?e(t,i.c.k):(t[r]&&(i.c.k=t[r]),r++)),i)"object"==typeof i[a]&&e(t,i[a]);return i}(e,t)},convertLottieColorToRgb=function(e){return[Math.round(255*e[0]),Math.round(255*e[1]),Math.round(255*e[2])]},convertLottieColorToRgba=function(e){return[Math.round(255*e[0]),Math.round(255*e[1]),Math.round(255*e[2]),e[3]]};getColors=lib.getColors=function(e){var t=[];return function e(r){if(r.s&&Array.isArray(r.s)&&4===r.s.length)t.push(convertLottieColorToRgba(r.s));else if(r.c&&r.c.k)Array.isArray(r.c.k)&&"number"!=typeof r.c.k[0]?e(r.c.k):t.push(convertLottieColorToRgb(r.c.k));else for(var i in r)"object"==typeof r[i]&&e(r[i]);return t}(e),t};var v="4.5.8",fr=30,ip=0,op=60,w=1920,h=1080,ddd=0,assets=[],layers=[{ddd:0,ind:0,ty:3,nm:"position",ks:{o:{a:0,k:0},r:{a:0,k:0},p:{a:0,k:[960,540,0]},a:{a:0,k:[0,0,0]},s:{a:0,k:[100,100,100]}},ao:0,ef:[{ty:5,nm:"Elastic Controller",mn:"Pseudo/MDS Elastic Controller",ix:1,en:1,ef:[{ty:0,nm:"Amplitude",mn:"Pseudo/MDS Elastic Controller-0001",ix:1,v:{a:0,k:80}},{ty:0,nm:"Frequency",mn:"Pseudo/MDS Elastic Controller-0002",ix:2,v:{a:0,k:40}},{ty:0,nm:"Decay",mn:"Pseudo/MDS Elastic Controller-0003",ix:3,v:{a:0,k:50}}]}],ip:0,op:360,st:0,bm:0,sr:1},{ddd:0,ind:1,ty:3,nm:"scale",ks:{o:{a:0,k:0},r:{a:0,k:0},p:{a:0,k:[960,540,0]},a:{a:0,k:[0,0,0]},s:{a:0,k:[100,100,100]}},ao:0,ef:[{ty:5,nm:"Elastic Controller",mn:"Pseudo/MDS Elastic Controller",ix:1,en:1,ef:[{ty:0,nm:"Amplitude",mn:"Pseudo/MDS Elastic Controller-0001",ix:1,v:{a:0,k:100}},{ty:0,nm:"Frequency",mn:"Pseudo/MDS Elastic Controller-0002",ix:2,v:{a:0,k:40}},{ty:0,nm:"Decay",mn:"Pseudo/MDS Elastic Controller-0003",ix:3,v:{a:0,k:50}}]}],ip:0,op:360,st:0,bm:0,sr:1},{ddd:0,ind:2,ty:4,nm:"Shape Layer 8",ks:{o:{a:0,k:100},r:{a:0,k:0},p:{a:1,k:[{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:0,s:[1200,480,0],e:[1200,480,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:1,s:[1200,480,0],e:[1200,480,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.833,y:.718},o:{x:.167,y:.083},n:"0p833_0p718_0p167_0p083",t:2,s:[1200,480,0],e:[1200,475.84,0],to:[0,-.69334012269974,0],ti:[-378956137032493e-28,2.3468861579895,0]},{i:{x:.833,y:.817},o:{x:.167,y:.118},n:"0p833_0p817_0p167_0p118",t:3,s:[1200,475.84,0],e:[1200,465.919,0],to:[378956137032493e-28,-2.3468861579895,0],ti:[378956137032493e-28,3.62661719322205,0]},{i:{x:.833,y:.847},o:{x:.167,y:.153},n:"0p833_0p847_0p167_0p153",t:4,s:[1200,465.919,0],e:[1200,454.08,0],to:[-378956137032493e-28,-3.62661719322205,0],ti:[378956137032493e-28,3.62643098831177,0]},{i:{x:.833,y:.882},o:{x:.167,y:.183},n:"0p833_0p882_0p167_0p183",t:5,s:[1200,454.08,0],e:[1200,444.16,0],to:[-378956137032493e-28,-3.62643098831177,0],ti:[-378956137032493e-28,2.34670925140381,0]},{i:{x:.833,y:.893},o:{x:.167,y:.282},n:"0p833_0p893_0p167_0p282",t:6,s:[1200,444.16,0],e:[1200,440,0],to:[378956137032493e-28,-2.34670925140381,0],ti:[-1.08608823323753e-10,.6474335193634,0]},{i:{x:.833,y:.547},o:{x:.167,y:.375},n:"0p833_0p547_0p167_0p375",t:7,s:[1200,440,0],e:[1200,440.275,0],to:[1.08608823323753e-10,-.6474335193634,0],ti:[-1.76820932895616e-10,-.92485815286636,0]},{i:{x:.833,y:.784},o:{x:.167,y:.102},n:"0p833_0p784_0p167_0p102",t:8,s:[1200,440.275,0],e:[1200,445.549,0],to:[1.76820932895616e-10,.92485815286636,0],ti:[-1.01332865709569e-10,-2.27932786941528,0]},{i:{x:.833,y:.814},o:{x:.167,y:.136},n:"0p833_0p814_0p167_0p136",t:9,s:[1200,445.549,0],e:[1200,453.951,0],to:[1.01332865709569e-10,2.27932786941528,0],ti:[-380471938676852e-25,-3.12636637687683,0]},{i:{x:.833,y:.79},o:{x:.167,y:.151},n:"0p833_0p79_0p167_0p151",t:10,s:[1200,453.951,0],e:[1200,464.307,0],to:[380471938676852e-25,3.12636637687683,0],ti:[2.09941689033322e-10,-4.34142255783081,0]},{i:{x:.833,y:.783},o:{x:.167,y:.138},n:"0p833_0p783_0p167_0p138",t:11,s:[1200,464.307,0],e:[1200,480,0],to:[-2.09941689033322e-10,4.34142255783081,0],ti:[2.14868123293854e-10,-6.80449676513672,0]},{i:{x:.833,y:.864},o:{x:.167,y:.135},n:"0p833_0p864_0p167_0p135",t:12,s:[1200,480,0],e:[1200,505.134,0],to:[-2.14868123293854e-10,6.80449676513672,0],ti:[0,-6.81718730926514,0]},{i:{x:.833,y:.876},o:{x:.167,y:.216},n:"0p833_0p876_0p167_0p216",t:13,s:[1200,505.134,0],e:[1200,520.903,0],to:[0,6.81718730926514,0],ti:[0,-3.90351748466492,0]},{i:{x:.833,y:.9},o:{x:.167,y:.255},n:"0p833_0p9_0p167_0p255",t:14,s:[1200,520.903,0],e:[1200,528.555,0],to:[0,3.90351748466492,0],ti:[0,-1.46778154373169,0]},{i:{x:.833,y:.726},o:{x:.167,y:.489},n:"0p833_0p726_0p167_0p489",t:15,s:[1200,528.555,0],e:[1200,529.71,0],to:[0,1.46778154373169,0],ti:[0,.40835279226303,0]},{i:{x:.833,y:.762},o:{x:.167,y:.12},n:"0p833_0p762_0p167_0p12",t:16,s:[1200,529.71,0],e:[1200,526.105,0],to:[0,-.40835279226303,0],ti:[0,1.71625697612762,0]},{i:{x:.833,y:.813},o:{x:.167,y:.128},n:"0p833_0p813_0p167_0p128",t:17,s:[1200,526.105,0],e:[1200,519.412,0],to:[0,-1.71625697612762,0],ti:[0,2.50040626525879,0]},{i:{x:.833,y:.829},o:{x:.167,y:.15},n:"0p833_0p829_0p167_0p15",t:18,s:[1200,519.412,0],e:[1200,511.103,0],to:[0,-2.50040626525879,0],ti:[0,2.83936166763306,0]},{i:{x:.833,y:.838},o:{x:.167,y:.163},n:"0p833_0p838_0p167_0p163",t:19,s:[1200,511.103,0],e:[1200,502.376,0],to:[0,-2.83936166763306,0],ti:[0,2.82910346984863,0]},{i:{x:.833,y:.844},o:{x:.167,y:.172},n:"0p833_0p844_0p167_0p172",t:20,s:[1200,502.376,0],e:[1200,494.128,0],to:[0,-2.82910346984863,0],ti:[0,2.56953763961792,0]},{i:{x:.833,y:.85},o:{x:.167,y:.179},n:"0p833_0p85_0p167_0p179",t:21,s:[1200,494.128,0],e:[1200,486.959,0],to:[0,-2.56953763961792,0],ti:[0,2.15447521209717,0]},{i:{x:.833,y:.855},o:{x:.167,y:.187},n:"0p833_0p855_0p167_0p187",t:22,s:[1200,486.959,0],e:[1200,481.201,0],to:[0,-2.15447521209717,0],ti:[0,1.66499769687653,0]},{i:{x:.833,y:.862},o:{x:.167,y:.197},n:"0p833_0p862_0p167_0p197",t:23,s:[1200,481.201,0],e:[1200,476.969,0],to:[0,-1.66499769687653,0],ti:[0,1.16583645343781,0]},{i:{x:.833,y:.873},o:{x:.167,y:.211},n:"0p833_0p873_0p167_0p211",t:24,s:[1200,476.969,0],e:[1200,474.206,0],to:[0,-1.16583645343781,0],ti:[0,.70423710346222,0]},{i:{x:.833,y:.894},o:{x:.167,y:.241},n:"0p833_0p894_0p167_0p241",t:25,s:[1200,474.206,0],e:[1200,472.743,0],to:[0,-.70423710346222,0],ti:[0,.31070366501808,0]},{i:{x:.833,y:.835},o:{x:.167,y:.387},n:"0p833_0p835_0p167_0p387",t:26,s:[1200,472.743,0],e:[1200,472.342,0],to:[0,-.31070366501808,0],ti:[0,.00102528964635,0]},{i:{x:.833,y:.72},o:{x:.167,y:.168},n:"0p833_0p72_0p167_0p168",t:27,s:[1200,472.342,0],e:[1200,472.737,0],to:[0,-.00102528964635,0],ti:[0,-.22096036374569,0]},{i:{x:.833,y:.806},o:{x:.167,y:.119},n:"0p833_0p806_0p167_0p119",t:28,s:[1200,472.737,0],e:[1200,473.668,0],to:[0,.22096036374569,0],ti:[0,-.3603213429451,0]},{i:{x:.833,y:.826},o:{x:.167,y:.146},n:"0p833_0p826_0p167_0p146",t:29,s:[1200,473.668,0],e:[1200,474.899,0],to:[0,.3603213429451,0],ti:[0,-.42805504798889,0]},{i:{x:.833,y:.836},o:{x:.167,y:.16},n:"0p833_0p836_0p167_0p16",t:30,s:[1200,474.899,0],e:[1200,476.236,0],to:[0,.42805504798889,0],ti:[0,-.43842709064484,0]},{i:{x:.833,y:.843},o:{x:.167,y:.169},n:"0p833_0p843_0p167_0p169",t:31,s:[1200,476.236,0],e:[1200,477.53,0],to:[0,.43842709064484,0],ti:[0,-.40677306056023,0]},{i:{x:.833,y:.848},o:{x:.167,y:.177},n:"0p833_0p848_0p167_0p177",t:32,s:[1200,477.53,0],e:[1200,478.677,0],to:[0,.40677306056023,0],ti:[0,-.34782794117928,0]},{i:{x:.833,y:.854},o:{x:.167,y:.185},n:"0p833_0p854_0p167_0p185",t:33,s:[1200,478.677,0],e:[1200,479.617,0],to:[0,.34782794117928,0],ti:[0,-.27458295226097,0]},{i:{x:.833,y:.86},o:{x:.167,y:.194},n:"0p833_0p86_0p167_0p194",t:34,s:[1200,479.617,0],e:[1200,480.324,0],to:[0,.27458295226097,0],ti:[0,-.19762142002583,0]},{i:{x:.833,y:.869},o:{x:.167,y:.207},n:"0p833_0p869_0p167_0p207",t:35,s:[1200,480.324,0],e:[1200,480.803,0],to:[0,.19762142002583,0],ti:[0,-.12485805898905,0]},{i:{x:.833,y:.886},o:{x:.167,y:.23},n:"0p833_0p886_0p167_0p23",t:36,s:[1200,480.803,0],e:[1200,481.074,0],to:[0,.12485805898905,0],ti:[0,-.06158968806267,0]},{i:{x:.833,y:.883},o:{x:.167,y:.313},n:"0p833_0p883_0p167_0p313",t:37,s:[1200,481.074,0],e:[1200,481.172,0],to:[0,.06158968806267,0],ti:[0,-.0107651706785,0]},{i:{x:.833,y:.656},o:{x:.167,y:.287},n:"0p833_0p656_0p167_0p287",t:38,s:[1200,481.172,0],e:[1200,481.138,0],to:[0,.0107651706785,0],ti:[0,.026611905545,0]},{i:{x:.833,y:.797},o:{x:.167,y:.11},n:"0p833_0p797_0p167_0p11",t:39,s:[1200,481.138,0],e:[1200,481.012,0],to:[0,-.026611905545,0],ti:[0,.05102128908038,0]},{i:{x:.833,y:.823},o:{x:.167,y:.141},n:"0p833_0p823_0p167_0p141",t:40,s:[1200,481.012,0],e:[1200,480.832,0],to:[0,-.05102128908038,0],ti:[0,.0639628097415,0]},{i:{x:.833,y:.834},o:{x:.167,y:.157},n:"0p833_0p834_0p167_0p157",t:41,s:[1200,480.832,0],e:[1200,480.629,0],to:[0,-.0639628097415,0],ti:[0,.06753350049257,0]},{i:{x:.833,y:.841},o:{x:.167,y:.167},n:"0p833_0p841_0p167_0p167",t:42,s:[1200,480.629,0],e:[1200,480.427,0],to:[0,-.06753350049257,0],ti:[0,.06407137960196,0]},{i:{x:.833,y:.847},o:{x:.167,y:.175},n:"0p833_0p847_0p167_0p175",t:43,s:[1200,480.427,0],e:[1200,480.244,0],to:[0,-.06407137960196,0],ti:[0,.05587866902351,0]},{i:{x:.833,y:.853},o:{x:.167,y:.183},n:"0p833_0p853_0p167_0p183",t:44,s:[1200,480.244,0],e:[1200,480.092,0],to:[0,-.05587866902351,0],ti:[0,.04502673074603,0]},{i:{x:.833,y:.859},o:{x:.167,y:.192},n:"0p833_0p859_0p167_0p192",t:45,s:[1200,480.092,0],e:[1200,479.974,0],to:[0,-.04502673074603,0],ti:[0,.03323682770133,0]},{i:{x:.833,y:.867},o:{x:.167,y:.203},n:"0p833_0p867_0p167_0p203",t:46,s:[1200,479.974,0],e:[1200,479.892,0],to:[0,-.03323682770133,0],ti:[0,.02182591706514,0]},{i:{x:.833,y:.881},o:{x:.167,y:.222},n:"0p833_0p881_0p167_0p222",t:47,s:[1200,479.892,0],e:[1200,479.843,0],to:[0,-.02182591706514,0],ti:[0,.01170385163277,0]},{i:{x:.833,y:.898},o:{x:.167,y:.277},n:"0p833_0p898_0p167_0p277",t:48,s:[1200,479.843,0],e:[1200,479.822,0],to:[0,-.01170385163277,0],ti:[0,.00340767251328,0]},{i:{x:.833,y:.633},o:{x:.167,y:.45},n:"0p833_0p633_0p167_0p45",t:49,s:[1200,479.822,0],e:[1200,479.823,0],to:[0,-.00340767251328,0],ti:[0,-.00284059508704,0]},{i:{x:.833,y:.784},o:{x:.167,y:.108},n:"0p833_0p784_0p167_0p108",t:50,s:[1200,479.823,0],e:[1200,479.839,0],to:[0,.00284059508704,0],ti:[0,-.00706443423405,0]},{i:{x:.833,y:.818},o:{x:.167,y:.136},n:"0p833_0p818_0p167_0p136",t:51,s:[1200,479.839,0],e:[1200,479.865,0],to:[0,.00706443423405,0],ti:[0,-.00946115050465,0]},{i:{x:.833,y:.832},o:{x:.167,y:.154},n:"0p833_0p832_0p167_0p154",t:52,s:[1200,479.865,0],e:[1200,479.896,0],to:[0,.00946115050465,0],ti:[0,-.01033500675112,0]},{i:{x:.833,y:.84},o:{x:.167,y:.165},n:"0p833_0p84_0p167_0p165",t:53,s:[1200,479.896,0],e:[1200,479.927,0],to:[0,.01033500675112,0],ti:[0,-.0100397830829,0]},{i:{x:.833,y:.846},o:{x:.167,y:.173},n:"0p833_0p846_0p167_0p173",t:54,s:[1200,479.927,0],e:[1200,479.956,0],to:[0,.0100397830829,0],ti:[0,-.00893319491297,0]},{i:{x:.833,y:.851},o:{x:.167,y:.181},n:"0p833_0p851_0p167_0p181",t:55,s:[1200,479.956,0],e:[1200,479.981,0],to:[0,.00893319491297,0],ti:[0,-.00734389200807,0]},{i:{x:.833,y:.857},o:{x:.167,y:.189},n:"0p833_0p857_0p167_0p189",t:56,s:[1200,479.981,0],e:[1200,480,0],to:[0,.00734389200807,0],ti:[0,-.00555039569736,0]},{i:{x:.833,y:.864},o:{x:.167,y:.2},n:"0p833_0p864_0p167_0p2",t:57,s:[1200,480,0],e:[1200,480.014,0],to:[0,.00555039569736,0],ti:[0,-.00377047993243,0]},{i:{x:.833,y:.876},o:{x:.167,y:.216},n:"0p833_0p876_0p167_0p216",t:58,s:[1200,480.014,0],e:[1200,480.023,0],to:[0,.00377047993243,0],ti:[0,-.00215897453018,0]},{i:{x:.833,y:.833},o:{x:.167,y:.255},n:"0p833_0p833_0p167_0p255",t:59,s:[1200,480.023,0],e:[1200,480.027,0],to:[0,.00215897453018,0],ti:[0,-.00070539524313,0]},{t:60}]},a:{a:0,k:[240,180,0]},s:{a:1,k:[{i:{x:[.833,.833,.833],y:[.833,.833,.833]},o:{x:[.167,.167,.167],y:[.167,.167,.167]},n:["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],t:0,s:[100,-100,100],e:[100,-100,100]},{i:{x:[.833,.833,.833],y:[.833,.833,.833]},o:{x:[.167,.167,.167],y:[.167,.167,.167]},n:["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],t:1,s:[100,-100,100],e:[100,-100,100]},{i:{x:[.833,.833,.833],y:[.833,.833,.833]},o:{x:[.167,.167,.167],y:[.167,.167,.167]},n:["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],t:2,s:[100,-100,100],e:[100,-100,100]},{i:{x:[.833,.833,.833],y:[.833,.833,.833]},o:{x:[.167,.167,.167],y:[.167,.167,.167]},n:["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],t:3,s:[100,-100,100],e:[100,-100,100]},{i:{x:[.833,.833,.833],y:[.718,.718,.833]},o:{x:[.167,.167,.167],y:[.083,.083,.167]},n:["0p833_0p718_0p167_0p083","0p833_0p718_0p167_0p083","0p833_0p833_0p167_0p167"],t:4,s:[100,-100,100],e:[101.04,-101.04,100]},{i:{x:[.833,.833,.833],y:[.817,.817,.833]},o:{x:[.167,.167,.167],y:[.118,.118,.167]},n:["0p833_0p817_0p167_0p118","0p833_0p817_0p167_0p118","0p833_0p833_0p167_0p167"],t:5,s:[101.04,-101.04,100],e:[103.52,-103.52,100]},{i:{x:[.833,.833,.833],y:[.847,.847,.833]},o:{x:[.167,.167,.167],y:[.153,.153,.167]},n:["0p833_0p847_0p167_0p153","0p833_0p847_0p167_0p153","0p833_0p833_0p167_0p167"],t:6,s:[103.52,-103.52,100],e:[106.48,-106.48,100]},{i:{x:[.833,.833,.833],y:[.882,.882,.833]},o:{x:[.167,.167,.167],y:[.183,.183,.167]},n:["0p833_0p882_0p167_0p183","0p833_0p882_0p167_0p183","0p833_0p833_0p167_0p167"],t:7,s:[106.48,-106.48,100],e:[108.96,-108.96,100]},{i:{x:[.833,.833,.833],y:[.913,.913,.833]},o:{x:[.167,.167,.167],y:[.282,.282,.167]},n:["0p833_0p913_0p167_0p282","0p833_0p913_0p167_0p282","0p833_0p833_0p167_0p167"],t:8,s:[108.96,-108.96,100],e:[110,-110,100]},{i:{x:[.833,.833,.833],y:[3.067,3.067,.833]},o:{x:[.167,.167,.167],y:[1.88,1.88,.167]},n:["0p833_3p067_0p167_1p88","0p833_3p067_0p167_1p88","0p833_0p833_0p167_0p167"],t:9,s:[110,-110,100],e:[110.048,-110.048,100]},{i:{x:[.833,.833,.833],y:[.778,.778,.833]},o:{x:[.167,.167,.167],y:[.08,.08,.167]},n:["0p833_0p778_0p167_0p08","0p833_0p778_0p167_0p08","0p833_0p833_0p167_0p167"],t:10,s:[110.048,-110.048,100],e:[108.803,-108.803,100]},{i:{x:[.833,.833,.833],y:[.812,.812,.833]},o:{x:[.167,.167,.167],y:[.134,.134,.167]},n:["0p833_0p812_0p167_0p134","0p833_0p812_0p167_0p134","0p833_0p833_0p167_0p167"],t:11,s:[108.803,-108.803,100],e:[106.737,-106.737,100]},{i:{x:[.833,.833,.833],y:[.783,.783,.833]},o:{x:[.167,.167,.167],y:[.15,.15,.167]},n:["0p833_0p783_0p167_0p15","0p833_0p783_0p167_0p15","0p833_0p833_0p167_0p167"],t:12,s:[106.737,-106.737,100],e:[104.153,-104.153,100]},{i:{x:[.833,.833,.833],y:[.759,.759,.833]},o:{x:[.167,.167,.167],y:[.135,.135,.167]},n:["0p833_0p759_0p167_0p135","0p833_0p759_0p167_0p135","0p833_0p833_0p167_0p167"],t:13,s:[104.153,-104.153,100],e:[100,-100,100]},{i:{x:[.833,.833,.833],y:[.864,.864,.833]},o:{x:[.167,.167,.167],y:[.127,.127,.167]},n:["0p833_0p864_0p167_0p127","0p833_0p864_0p167_0p127","0p833_0p833_0p167_0p167"],t:14,s:[100,-100,100],e:[92.146,-92.146,100]},{i:{x:[.833,.833,.833],y:[.876,.876,.833]},o:{x:[.167,.167,.167],y:[.216,.216,.167]},n:["0p833_0p876_0p167_0p216","0p833_0p876_0p167_0p216","0p833_0p833_0p167_0p167"],t:15,s:[92.146,-92.146,100],e:[87.218,-87.218,100]},{i:{x:[.833,.833,.833],y:[.904,.904,.833]},o:{x:[.167,.167,.167],y:[.255,.255,.167]},n:["0p833_0p904_0p167_0p255","0p833_0p904_0p167_0p255","0p833_0p833_0p167_0p167"],t:16,s:[87.218,-87.218,100],e:[84.827,-84.827,100]},{i:{x:[.833,.833,.833],y:[1.177,1.177,.833]},o:{x:[.167,.167,.167],y:[.636,.636,.167]},n:["0p833_1p177_0p167_0p636","0p833_1p177_0p167_0p636","0p833_0p833_0p167_0p167"],t:17,s:[84.827,-84.827,100],e:[84.466,-84.466,100]},{i:{x:[.833,.833,.833],y:[.762,.762,.833]},o:{x:[.167,.167,.167],y:[.057,.057,.167]},n:["0p833_0p762_0p167_0p057","0p833_0p762_0p167_0p057","0p833_0p833_0p167_0p167"],t:18,s:[84.466,-84.466,100],e:[85.592,-85.592,100]},{i:{x:[.833,.833,.833],y:[.813,.813,.833]},o:{x:[.167,.167,.167],y:[.128,.128,.167]},n:["0p833_0p813_0p167_0p128","0p833_0p813_0p167_0p128","0p833_0p833_0p167_0p167"],t:19,s:[85.592,-85.592,100],e:[87.684,-87.684,100]},{i:{x:[.833,.833,.833],y:[.829,.829,.833]},o:{x:[.167,.167,.167],y:[.15,.15,.167]},n:["0p833_0p829_0p167_0p15","0p833_0p829_0p167_0p15","0p833_0p833_0p167_0p167"],t:20,s:[87.684,-87.684,100],e:[90.28,-90.28,100]},{i:{x:[.833,.833,.833],y:[.838,.838,.833]},o:{x:[.167,.167,.167],y:[.163,.163,.167]},n:["0p833_0p838_0p167_0p163","0p833_0p838_0p167_0p163","0p833_0p833_0p167_0p167"],t:21,s:[90.28,-90.28,100],e:[93.008,-93.008,100]},{i:{x:[.833,.833,.833],y:[.844,.844,.833]},o:{x:[.167,.167,.167],y:[.172,.172,.167]},n:["0p833_0p844_0p167_0p172","0p833_0p844_0p167_0p172","0p833_0p833_0p167_0p167"],t:22,s:[93.008,-93.008,100],e:[95.585,-95.585,100]},{i:{x:[.833,.833,.833],y:[.85,.85,.833]},o:{x:[.167,.167,.167],y:[.179,.179,.167]},n:["0p833_0p85_0p167_0p179","0p833_0p85_0p167_0p179","0p833_0p833_0p167_0p167"],t:23,s:[95.585,-95.585,100],e:[97.825,-97.825,100]},{i:{x:[.833,.833,.833],y:[.855,.855,.833]},o:{x:[.167,.167,.167],y:[.187,.187,.167]},n:["0p833_0p855_0p167_0p187","0p833_0p855_0p167_0p187","0p833_0p833_0p167_0p167"],t:24,s:[97.825,-97.825,100],e:[99.625,-99.625,100]},{i:{x:[.833,.833,.833],y:[.862,.862,.833]},o:{x:[.167,.167,.167],y:[.197,.197,.167]},n:["0p833_0p862_0p167_0p197","0p833_0p862_0p167_0p197","0p833_0p833_0p167_0p167"],t:25,s:[99.625,-99.625,100],e:[100.947,-100.947,100]},{i:{x:[.833,.833,.833],y:[.873,.873,.833]},o:{x:[.167,.167,.167],y:[.211,.211,.167]},n:["0p833_0p873_0p167_0p211","0p833_0p873_0p167_0p211","0p833_0p833_0p167_0p167"],t:26,s:[100.947,-100.947,100],e:[101.81,-101.81,100]},{i:{x:[.833,.833,.833],y:[.894,.894,.833]},o:{x:[.167,.167,.167],y:[.241,.241,.167]},n:["0p833_0p894_0p167_0p241","0p833_0p894_0p167_0p241","0p833_0p833_0p167_0p167"],t:27,s:[101.81,-101.81,100],e:[102.268,-102.268,100]},{i:{x:[.833,.833,.833],y:[.999,.999,.833]},o:{x:[.167,.167,.167],y:[.387,.387,.167]},n:["0p833_0p999_0p167_0p387","0p833_0p999_0p167_0p387","0p833_0p833_0p167_0p167"],t:28,s:[102.268,-102.268,100],e:[102.393,-102.393,100]},{i:{x:[.833,.833,.833],y:[.72,.72,.833]},o:{x:[.167,.167,.167],y:[-.001,-.001,.167]},n:["0p833_0p72_0p167_-0p001","0p833_0p72_0p167_-0p001","0p833_0p833_0p167_0p167"],t:29,s:[102.393,-102.393,100],e:[102.27,-102.27,100]},{i:{x:[.833,.833,.833],y:[.806,.806,.833]},o:{x:[.167,.167,.167],y:[.119,.119,.167]},n:["0p833_0p806_0p167_0p119","0p833_0p806_0p167_0p119","0p833_0p833_0p167_0p167"],t:30,s:[102.27,-102.27,100],e:[101.979,-101.979,100]},{i:{x:[.833,.833,.833],y:[.826,.826,.833]},o:{x:[.167,.167,.167],y:[.146,.146,.167]},n:["0p833_0p826_0p167_0p146","0p833_0p826_0p167_0p146","0p833_0p833_0p167_0p167"],t:31,s:[101.979,-101.979,100],e:[101.594,-101.594,100]},{i:{x:[.833,.833,.833],y:[.836,.836,.833]},o:{x:[.167,.167,.167],y:[.16,.16,.167]},n:["0p833_0p836_0p167_0p16","0p833_0p836_0p167_0p16","0p833_0p833_0p167_0p167"],t:32,s:[101.594,-101.594,100],e:[101.176,-101.176,100]},{i:{x:[.833,.833,.833],y:[.843,.843,.833]},o:{x:[.167,.167,.167],y:[.169,.169,.167]},n:["0p833_0p843_0p167_0p169","0p833_0p843_0p167_0p169","0p833_0p833_0p167_0p167"],t:33,s:[101.176,-101.176,100],e:[100.772,-100.772,100]},{i:{x:[.833,.833,.833],y:[.848,.848,.833]},o:{x:[.167,.167,.167],y:[.177,.177,.167]},n:["0p833_0p848_0p167_0p177","0p833_0p848_0p167_0p177","0p833_0p833_0p167_0p167"],t:34,s:[100.772,-100.772,100],e:[100.413,-100.413,100]},{i:{x:[.833,.833,.833],y:[.854,.854,.833]},o:{x:[.167,.167,.167],y:[.185,.185,.167]},n:["0p833_0p854_0p167_0p185","0p833_0p854_0p167_0p185","0p833_0p833_0p167_0p167"],t:35,s:[100.413,-100.413,100],e:[100.12,-100.12,100]},{i:{x:[.833,.833,.833],y:[.86,.86,.833]},o:{x:[.167,.167,.167],y:[.194,.194,.167]},n:["0p833_0p86_0p167_0p194","0p833_0p86_0p167_0p194","0p833_0p833_0p167_0p167"],t:36,s:[100.12,-100.12,100],e:[99.899,-99.899,100]},{i:{x:[.833,.833,.833],y:[.869,.869,.833]},o:{x:[.167,.167,.167],y:[.207,.207,.167]},n:["0p833_0p869_0p167_0p207","0p833_0p869_0p167_0p207","0p833_0p833_0p167_0p167"],t:37,s:[99.899,-99.899,100],e:[99.749,-99.749,100]},{i:{x:[.833,.833,.833],y:[.886,.886,.833]},o:{x:[.167,.167,.167],y:[.23,.23,.167]},n:["0p833_0p886_0p167_0p23","0p833_0p886_0p167_0p23","0p833_0p833_0p167_0p167"],t:38,s:[99.749,-99.749,100],e:[99.665,-99.665,100]},{i:{x:[.833,.833,.833],y:[.945,.945,.833]},o:{x:[.167,.167,.167],y:[.313,.313,.167]},n:["0p833_0p945_0p167_0p313","0p833_0p945_0p167_0p313","0p833_0p833_0p167_0p167"],t:39,s:[99.665,-99.665,100],e:[99.634,-99.634,100]},{i:{x:[.833,.833,.833],y:[.608,.608,.833]},o:{x:[.167,.167,.167],y:[-.159,-.159,.167]},n:["0p833_0p608_0p167_-0p159","0p833_0p608_0p167_-0p159","0p833_0p833_0p167_0p167"],t:40,s:[99.634,-99.634,100],e:[99.644,-99.644,100]},{i:{x:[.833,.833,.833],y:[.797,.797,.833]},o:{x:[.167,.167,.167],y:[.106,.106,.167]},n:["0p833_0p797_0p167_0p106","0p833_0p797_0p167_0p106","0p833_0p833_0p167_0p167"],t:41,s:[99.644,-99.644,100],e:[99.684,-99.684,100]},{i:{x:[.833,.833,.833],y:[.823,.823,.833]},o:{x:[.167,.167,.167],y:[.141,.141,.167]},n:["0p833_0p823_0p167_0p141","0p833_0p823_0p167_0p141","0p833_0p833_0p167_0p167"],t:42,s:[99.684,-99.684,100],e:[99.74,-99.74,100]},{i:{x:[.833,.833,.833],y:[.834,.834,.833]},o:{x:[.167,.167,.167],y:[.157,.157,.167]},n:["0p833_0p834_0p167_0p157","0p833_0p834_0p167_0p157","0p833_0p833_0p167_0p167"],t:43,s:[99.74,-99.74,100],e:[99.804,-99.804,100]},{i:{x:[.833,.833,.833],y:[.841,.841,.833]},o:{x:[.167,.167,.167],y:[.167,.167,.167]},n:["0p833_0p841_0p167_0p167","0p833_0p841_0p167_0p167","0p833_0p833_0p167_0p167"],t:44,s:[99.804,-99.804,100],e:[99.867,-99.867,100]},{i:{x:[.833,.833,.833],y:[.847,.847,.833]},o:{x:[.167,.167,.167],y:[.175,.175,.167]},n:["0p833_0p847_0p167_0p175","0p833_0p847_0p167_0p175","0p833_0p833_0p167_0p167"],t:45,s:[99.867,-99.867,100],e:[99.924,-99.924,100]},{i:{x:[.833,.833,.833],y:[.853,.853,.833]},o:{x:[.167,.167,.167],y:[.183,.183,.167]},n:["0p833_0p853_0p167_0p183","0p833_0p853_0p167_0p183","0p833_0p833_0p167_0p167"],t:46,s:[99.924,-99.924,100],e:[99.971,-99.971,100]},{i:{x:[.833,.833,.833],y:[.859,.859,.833]},o:{x:[.167,.167,.167],y:[.192,.192,.167]},n:["0p833_0p859_0p167_0p192","0p833_0p859_0p167_0p192","0p833_0p833_0p167_0p167"],t:47,s:[99.971,-99.971,100],e:[100.008,-100.008,100]},{i:{x:[.833,.833,.833],y:[.867,.867,.833]},o:{x:[.167,.167,.167],y:[.203,.203,.167]},n:["0p833_0p867_0p167_0p203","0p833_0p867_0p167_0p203","0p833_0p833_0p167_0p167"],t:48,s:[100.008,-100.008,100],e:[100.034,-100.034,100]},{i:{x:[.833,.833,.833],y:[.881,.881,.833]},o:{x:[.167,.167,.167],y:[.222,.222,.167]},n:["0p833_0p881_0p167_0p222","0p833_0p881_0p167_0p222","0p833_0p833_0p167_0p167"],t:49,s:[100.034,-100.034,100],e:[100.049,-100.049,100]},{i:{x:[.833,.833,.833],y:[.919,.919,.833]},o:{x:[.167,.167,.167],y:[.277,.277,.167]},n:["0p833_0p919_0p167_0p277","0p833_0p919_0p167_0p277","0p833_0p833_0p167_0p167"],t:50,s:[100.049,-100.049,100],e:[100.056,-100.056,100]},{i:{x:[.833,.833,.833],y:[-.984,-.984,.833]},o:{x:[.167,.167,.167],y:[-2.381,-2.381,.167]},n:["0p833_-0p984_0p167_-2p381","0p833_-0p984_0p167_-2p381","0p833_0p833_0p167_0p167"],t:51,s:[100.056,-100.056,100],e:[100.055,-100.055,100]},{i:{x:[.833,.833,.833],y:[.784,.784,.833]},o:{x:[.167,.167,.167],y:[.087,.087,.167]},n:["0p833_0p784_0p167_0p087","0p833_0p784_0p167_0p087","0p833_0p833_0p167_0p167"],t:52,s:[100.055,-100.055,100],e:[100.05,-100.05,100]},{i:{x:[.833,.833,.833],y:[.818,.818,.833]},o:{x:[.167,.167,.167],y:[.136,.136,.167]},n:["0p833_0p818_0p167_0p136","0p833_0p818_0p167_0p136","0p833_0p833_0p167_0p167"],t:53,s:[100.05,-100.05,100],e:[100.042,-100.042,100]},{i:{x:[.833,.833,.833],y:[.832,.832,.833]},o:{x:[.167,.167,.167],y:[.154,.154,.167]},n:["0p833_0p832_0p167_0p154","0p833_0p832_0p167_0p154","0p833_0p833_0p167_0p167"],t:54,s:[100.042,-100.042,100],e:[100.033,-100.033,100]},{i:{x:[.833,.833,.833],y:[.84,.84,.833]},o:{x:[.167,.167,.167],y:[.165,.165,.167]},n:["0p833_0p84_0p167_0p165","0p833_0p84_0p167_0p165","0p833_0p833_0p167_0p167"],t:55,s:[100.033,-100.033,100],e:[100.023,-100.023,100]},{i:{x:[.833,.833,.833],y:[.846,.846,.833]},o:{x:[.167,.167,.167],y:[.173,.173,.167]},n:["0p833_0p846_0p167_0p173","0p833_0p846_0p167_0p173","0p833_0p833_0p167_0p167"],t:56,s:[100.023,-100.023,100],e:[100.014,-100.014,100]},{i:{x:[.833,.833,.833],y:[.851,.851,.833]},o:{x:[.167,.167,.167],y:[.181,.181,.167]},n:["0p833_0p851_0p167_0p181","0p833_0p851_0p167_0p181","0p833_0p833_0p167_0p167"],t:57,s:[100.014,-100.014,100],e:[100.006,-100.006,100]},{i:{x:[.833,.833,.833],y:[.857,.857,.833]},o:{x:[.167,.167,.167],y:[.189,.189,.167]},n:["0p833_0p857_0p167_0p189","0p833_0p857_0p167_0p189","0p833_0p833_0p167_0p167"],t:58,s:[100.006,-100.006,100],e:[100,-100,100]},{i:{x:[.833,.833,.833],y:[.833,.833,.833]},o:{x:[.167,.167,.167],y:[.2,.2,.167]},n:["0p833_0p833_0p167_0p2","0p833_0p833_0p167_0p2","0p833_0p833_0p167_0p167"],t:59,s:[100,-100,100],e:[99.996,-99.996,100]},{t:60}]}},ao:0,ef:[{ty:5,nm:"Elastic Controller Scale",mn:"Pseudo/MDS Elastic Controller",ix:1,en:1,ef:[{ty:0,nm:"Amplitude",mn:"Pseudo/MDS Elastic Controller-0001",ix:1,v:{a:0,k:100}},{ty:0,nm:"Frequency",mn:"Pseudo/MDS Elastic Controller-0002",ix:2,v:{a:0,k:40}},{ty:0,nm:"Decay",mn:"Pseudo/MDS Elastic Controller-0003",ix:3,v:{a:0,k:40}}]}],shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ks:{a:0,k:{i:[[0,-132.548],[-132.548,0],[0,132.548]],o:[[0,132.548],[132.548,0],[0,-132.548]],v:[[-240,0],[0,240],[240,0]],c:!1}},nm:"Path 1",mn:"ADBE Vector Shape - Group"},{ty:"st",c:{a:0,k:[.39215686274509803,.2627450980392157,.6509803921568628,1]},o:{a:0,k:100},w:{a:1,k:[{i:{x:[.667],y:[1]},o:{x:[.333],y:[0]},n:["0p667_1_0p333_0"],t:2,s:[80],e:[147]},{i:{x:[.667],y:[1]},o:{x:[.333],y:[0]},n:["0p667_1_0p333_0"],t:7,s:[147],e:[80]},{t:17}]},lc:2,lj:1,ml:4,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke"},{ty:"tr",p:{a:0,k:[0,180],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Ellipse 1",np:3,mn:"ADBE Vector Group"},{ty:"tm",s:{a:1,k:[{i:{x:[0],y:[1]},o:{x:[.333],y:[0]},n:["0_1_0p333_0"],t:5,s:[0],e:[99.9]},{t:20}],ix:1},e:{a:1,k:[{i:{x:[0],y:[1]},o:{x:[.333],y:[0]},n:["0_1_0p333_0"],t:2,s:[.1],e:[100]},{t:17}],ix:2},o:{a:0,k:0,ix:3},m:1,ix:2,nm:"Trim Paths 1",mn:"ADBE Vector Filter - Trim"}],ip:0,op:360,st:0,bm:0,sr:1},{ddd:0,ind:3,ty:4,nm:"Shape Layer 10",ks:{o:{a:0,k:100},r:{a:0,k:0},p:{a:1,k:[{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:0,s:[1040,480,0],e:[1040,480,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:1,s:[1040,480,0],e:[1040,480,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:2,s:[1040,480,0],e:[1040,480,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:3,s:[1040,480,0],e:[1040,480,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:4,s:[1040,480,0],e:[1040,480,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:5,s:[1040,480,0],e:[1040,480,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:6,s:[1040,480,0],e:[1040,480,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.833,y:.718},o:{x:.167,y:.083},n:"0p833_0p718_0p167_0p083",t:7,s:[1040,480,0],e:[1040,475.84,0],to:[-378956137032493e-28,-.69334012269974,0],ti:[0,2.3468861579895,0]},{i:{x:.833,y:.817},o:{x:.167,y:.118},n:"0p833_0p817_0p167_0p118",t:8,s:[1040,475.84,0],e:[1040,465.919,0],to:[0,-2.3468861579895,0],ti:[-378956137032493e-28,3.62661719322205,0]},{i:{x:.833,y:.847},o:{x:.167,y:.153},n:"0p833_0p847_0p167_0p153",t:9,s:[1040,465.919,0],e:[1040,454.08,0],to:[378956137032493e-28,-3.62661719322205,0],ti:[0,3.62643098831177,0]},{i:{x:.833,y:.882},o:{x:.167,y:.183},n:"0p833_0p882_0p167_0p183",t:10,s:[1040,454.08,0],e:[1040,444.16,0],to:[0,-3.62643098831177,0],ti:[0,2.34670925140381,0]},{i:{x:.833,y:.893},o:{x:.167,y:.282},n:"0p833_0p893_0p167_0p282",t:11,s:[1040,444.16,0],e:[1040,440,0],to:[0,-2.34670925140381,0],ti:[0,.6474335193634,0]},{i:{x:.833,y:.547},o:{x:.167,y:.375},n:"0p833_0p547_0p167_0p375",t:12,s:[1040,440,0],e:[1040,440.275,0],to:[0,-.6474335193634,0],ti:[0,-.92485815286636,0]},{i:{x:.833,y:.784},o:{x:.167,y:.102},n:"0p833_0p784_0p167_0p102",t:13,s:[1040,440.275,0],e:[1040,445.549,0],to:[0,.92485815286636,0],ti:[0,-2.27932786941528,0]},{i:{x:.833,y:.814},o:{x:.167,y:.136},n:"0p833_0p814_0p167_0p136",t:14,s:[1040,445.549,0],e:[1040,453.951,0],to:[0,2.27932786941528,0],ti:[0,-3.12636637687683,0]},{i:{x:.833,y:.79},o:{x:.167,y:.151},n:"0p833_0p79_0p167_0p151",t:15,s:[1040,453.951,0],e:[1040,464.307,0],to:[0,3.12636637687683,0],ti:[0,-4.34142255783081,0]},{i:{x:.833,y:.783},o:{x:.167,y:.138},n:"0p833_0p783_0p167_0p138",t:16,s:[1040,464.307,0],e:[1040,480,0],to:[0,4.34142255783081,0],ti:[0,-6.80449676513672,0]},{i:{x:.833,y:.864},o:{x:.167,y:.135},n:"0p833_0p864_0p167_0p135",t:17,s:[1040,480,0],e:[1040,505.134,0],to:[0,6.80449676513672,0],ti:[0,-6.81718730926514,0]},{i:{x:.833,y:.876},o:{x:.167,y:.216},n:"0p833_0p876_0p167_0p216",t:18,s:[1040,505.134,0],e:[1040,520.903,0],to:[0,6.81718730926514,0],ti:[0,-3.90351748466492,0]},{i:{x:.833,y:.9},o:{x:.167,y:.255},n:"0p833_0p9_0p167_0p255",t:19,s:[1040,520.903,0],e:[1040,528.555,0],to:[0,3.90351748466492,0],ti:[0,-1.46778154373169,0]},{i:{x:.833,y:.726},o:{x:.167,y:.489},n:"0p833_0p726_0p167_0p489",t:20,s:[1040,528.555,0],e:[1040,529.71,0],to:[0,1.46778154373169,0],ti:[0,.40835279226303,0]},{i:{x:.833,y:.762},o:{x:.167,y:.12},n:"0p833_0p762_0p167_0p12",t:21,s:[1040,529.71,0],e:[1040,526.105,0],to:[0,-.40835279226303,0],ti:[0,1.71625697612762,0]},{i:{x:.833,y:.813},o:{x:.167,y:.128},n:"0p833_0p813_0p167_0p128",t:22,s:[1040,526.105,0],e:[1040,519.412,0],to:[0,-1.71625697612762,0],ti:[0,2.50040626525879,0]},{i:{x:.833,y:.829},o:{x:.167,y:.15},n:"0p833_0p829_0p167_0p15",t:23,s:[1040,519.412,0],e:[1040,511.103,0],to:[0,-2.50040626525879,0],ti:[0,2.83936166763306,0]},{i:{x:.833,y:.838},o:{x:.167,y:.163},n:"0p833_0p838_0p167_0p163",t:24,s:[1040,511.103,0],e:[1040,502.376,0],to:[0,-2.83936166763306,0],ti:[0,2.82910346984863,0]},{i:{x:.833,y:.844},o:{x:.167,y:.172},n:"0p833_0p844_0p167_0p172",t:25,s:[1040,502.376,0],e:[1040,494.128,0],to:[0,-2.82910346984863,0],ti:[0,2.56953763961792,0]},{i:{x:.833,y:.85},o:{x:.167,y:.179},n:"0p833_0p85_0p167_0p179",t:26,s:[1040,494.128,0],e:[1040,486.959,0],to:[0,-2.56953763961792,0],ti:[0,2.15447521209717,0]},{i:{x:.833,y:.855},o:{x:.167,y:.187},n:"0p833_0p855_0p167_0p187",t:27,s:[1040,486.959,0],e:[1040,481.201,0],to:[0,-2.15447521209717,0],ti:[0,1.66499769687653,0]},{i:{x:.833,y:.862},o:{x:.167,y:.197},n:"0p833_0p862_0p167_0p197",t:28,s:[1040,481.201,0],e:[1040,476.969,0],to:[0,-1.66499769687653,0],ti:[0,1.16583645343781,0]},{i:{x:.833,y:.873},o:{x:.167,y:.211},n:"0p833_0p873_0p167_0p211",t:29,s:[1040,476.969,0],e:[1040,474.206,0],to:[0,-1.16583645343781,0],ti:[0,.70423710346222,0]},{i:{x:.833,y:.894},o:{x:.167,y:.241},n:"0p833_0p894_0p167_0p241",t:30,s:[1040,474.206,0],e:[1040,472.743,0],to:[0,-.70423710346222,0],ti:[0,.31070366501808,0]},{i:{x:.833,y:.835},o:{x:.167,y:.387},n:"0p833_0p835_0p167_0p387",t:31,s:[1040,472.743,0],e:[1040,472.342,0],to:[0,-.31070366501808,0],ti:[0,.00102528964635,0]},{i:{x:.833,y:.72},o:{x:.167,y:.168},n:"0p833_0p72_0p167_0p168",t:32,s:[1040,472.342,0],e:[1040,472.737,0],to:[0,-.00102528964635,0],ti:[0,-.22096036374569,0]},{i:{x:.833,y:.806},o:{x:.167,y:.119},n:"0p833_0p806_0p167_0p119",t:33,s:[1040,472.737,0],e:[1040,473.668,0],to:[0,.22096036374569,0],ti:[0,-.3603213429451,0]},{i:{x:.833,y:.826},o:{x:.167,y:.146},n:"0p833_0p826_0p167_0p146",t:34,s:[1040,473.668,0],e:[1040,474.899,0],to:[0,.3603213429451,0],ti:[0,-.42805504798889,0]},{i:{x:.833,y:.836},o:{x:.167,y:.16},n:"0p833_0p836_0p167_0p16",t:35,s:[1040,474.899,0],e:[1040,476.236,0],to:[0,.42805504798889,0],ti:[0,-.43842709064484,0]},{i:{x:.833,y:.843},o:{x:.167,y:.169},n:"0p833_0p843_0p167_0p169",t:36,s:[1040,476.236,0],e:[1040,477.53,0],to:[0,.43842709064484,0],ti:[0,-.40677306056023,0]},{i:{x:.833,y:.848},o:{x:.167,y:.177},n:"0p833_0p848_0p167_0p177",t:37,s:[1040,477.53,0],e:[1040,478.677,0],to:[0,.40677306056023,0],ti:[0,-.34782794117928,0]},{i:{x:.833,y:.854},o:{x:.167,y:.185},n:"0p833_0p854_0p167_0p185",t:38,s:[1040,478.677,0],e:[1040,479.617,0],to:[0,.34782794117928,0],ti:[0,-.27458295226097,0]},{i:{x:.833,y:.86},o:{x:.167,y:.194},n:"0p833_0p86_0p167_0p194",t:39,s:[1040,479.617,0],e:[1040,480.324,0],to:[0,.27458295226097,0],ti:[0,-.19762142002583,0]},{i:{x:.833,y:.869},o:{x:.167,y:.207},n:"0p833_0p869_0p167_0p207",t:40,s:[1040,480.324,0],e:[1040,480.803,0],to:[0,.19762142002583,0],ti:[0,-.12485805898905,0]},{i:{x:.833,y:.886},o:{x:.167,y:.23},n:"0p833_0p886_0p167_0p23",t:41,s:[1040,480.803,0],e:[1040,481.074,0],to:[0,.12485805898905,0],ti:[0,-.06158968806267,0]},{i:{x:.833,y:.883},o:{x:.167,y:.313},n:"0p833_0p883_0p167_0p313",t:42,s:[1040,481.074,0],e:[1040,481.172,0],to:[0,.06158968806267,0],ti:[0,-.0107651706785,0]},{i:{x:.833,y:.656},o:{x:.167,y:.287},n:"0p833_0p656_0p167_0p287",t:43,s:[1040,481.172,0],e:[1040,481.138,0],to:[0,.0107651706785,0],ti:[0,.026611905545,0]},{i:{x:.833,y:.797},o:{x:.167,y:.11},n:"0p833_0p797_0p167_0p11",t:44,s:[1040,481.138,0],e:[1040,481.012,0],to:[0,-.026611905545,0],ti:[0,.05102128908038,0]},{i:{x:.833,y:.823},o:{x:.167,y:.141},n:"0p833_0p823_0p167_0p141",t:45,s:[1040,481.012,0],e:[1040,480.832,0],to:[0,-.05102128908038,0],ti:[0,.0639628097415,0]},{i:{x:.833,y:.834},o:{x:.167,y:.157},n:"0p833_0p834_0p167_0p157",t:46,s:[1040,480.832,0],e:[1040,480.629,0],to:[0,-.0639628097415,0],ti:[0,.06753350049257,0]},{i:{x:.833,y:.841},o:{x:.167,y:.167},n:"0p833_0p841_0p167_0p167",t:47,s:[1040,480.629,0],e:[1040,480.427,0],to:[0,-.06753350049257,0],ti:[0,.06407137960196,0]},{i:{x:.833,y:.847},o:{x:.167,y:.175},n:"0p833_0p847_0p167_0p175",t:48,s:[1040,480.427,0],e:[1040,480.244,0],to:[0,-.06407137960196,0],ti:[0,.05587866902351,0]},{i:{x:.833,y:.853},o:{x:.167,y:.183},n:"0p833_0p853_0p167_0p183",t:49,s:[1040,480.244,0],e:[1040,480.092,0],to:[0,-.05587866902351,0],ti:[0,.04502673074603,0]},{i:{x:.833,y:.859},o:{x:.167,y:.192},n:"0p833_0p859_0p167_0p192",t:50,s:[1040,480.092,0],e:[1040,479.974,0],to:[0,-.04502673074603,0],ti:[0,.03323682770133,0]},{i:{x:.833,y:.867},o:{x:.167,y:.203},n:"0p833_0p867_0p167_0p203",t:51,s:[1040,479.974,0],e:[1040,479.892,0],to:[0,-.03323682770133,0],ti:[0,.02182591706514,0]},{i:{x:.833,y:.881},o:{x:.167,y:.222},n:"0p833_0p881_0p167_0p222",t:52,s:[1040,479.892,0],e:[1040,479.843,0],to:[0,-.02182591706514,0],ti:[0,.01170385163277,0]},{i:{x:.833,y:.898},o:{x:.167,y:.277},n:"0p833_0p898_0p167_0p277",t:53,s:[1040,479.843,0],e:[1040,479.822,0],to:[0,-.01170385163277,0],ti:[0,.00340767251328,0]},{i:{x:.833,y:.633},o:{x:.167,y:.45},n:"0p833_0p633_0p167_0p45",t:54,s:[1040,479.822,0],e:[1040,479.823,0],to:[0,-.00340767251328,0],ti:[0,-.00284059508704,0]},{i:{x:.833,y:.784},o:{x:.167,y:.108},n:"0p833_0p784_0p167_0p108",t:55,s:[1040,479.823,0],e:[1040,479.839,0],to:[0,.00284059508704,0],ti:[0,-.00706443423405,0]},{i:{x:.833,y:.818},o:{x:.167,y:.136},n:"0p833_0p818_0p167_0p136",t:56,s:[1040,479.839,0],e:[1040,479.865,0],to:[0,.00706443423405,0],ti:[0,-.00946115050465,0]},{i:{x:.833,y:.832},o:{x:.167,y:.154},n:"0p833_0p832_0p167_0p154",t:57,s:[1040,479.865,0],e:[1040,479.896,0],to:[0,.00946115050465,0],ti:[0,-.01033500675112,0]},{i:{x:.833,y:.84},o:{x:.167,y:.165},n:"0p833_0p84_0p167_0p165",t:58,s:[1040,479.896,0],e:[1040,479.927,0],to:[0,.01033500675112,0],ti:[0,-.0100397830829,0]},{i:{x:.833,y:.833},o:{x:.167,y:.173},n:"0p833_0p833_0p167_0p173",t:59,s:[1040,479.927,0],e:[1040,479.956,0],to:[0,.0100397830829,0],ti:[0,-.00482279807329,0]},{t:60}]},a:{a:0,k:[80,20,0]},s:{a:1,k:[{i:{x:[.833,.833,.833],y:[.833,.833,.833]},o:{x:[.167,.167,.167],y:[.167,.167,.167]},n:["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],t:0,s:[100,-100,100],e:[100,-100,100]},{i:{x:[.833,.833,.833],y:[.833,.833,.833]},o:{x:[.167,.167,.167],y:[.167,.167,.167]},n:["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],t:1,s:[100,-100,100],e:[100,-100,100]},{i:{x:[.833,.833,.833],y:[.833,.833,.833]},o:{x:[.167,.167,.167],y:[.167,.167,.167]},n:["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],t:2,s:[100,-100,100],e:[100,-100,100]},{i:{x:[.833,.833,.833],y:[.833,.833,.833]},o:{x:[.167,.167,.167],y:[.167,.167,.167]},n:["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],t:3,s:[100,-100,100],e:[100,-100,100]},{i:{x:[.833,.833,.833],y:[.833,.833,.833]},o:{x:[.167,.167,.167],y:[.167,.167,.167]},n:["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],t:4,s:[100,-100,100],e:[100,-100,100]},{i:{x:[.833,.833,.833],y:[.833,.833,.833]},o:{x:[.167,.167,.167],y:[.167,.167,.167]},n:["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],t:5,s:[100,-100,100],e:[100,-100,100]},{i:{x:[.833,.833,.833],y:[.833,.833,.833]},o:{x:[.167,.167,.167],y:[.167,.167,.167]},n:["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],t:6,s:[100,-100,100],e:[100,-100,100]},{i:{x:[.833,.833,.833],y:[.833,.833,.833]},o:{x:[.167,.167,.167],y:[.167,.167,.167]},n:["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],t:7,s:[100,-100,100],e:[100,-100,100]},{i:{x:[.833,.833,.833],y:[.833,.833,.833]},o:{x:[.167,.167,.167],y:[.167,.167,.167]},n:["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],t:8,s:[100,-100,100],e:[100,-100,100]},{i:{x:[.833,.833,.833],y:[.718,.718,.833]},o:{x:[.167,.167,.167],y:[.083,.083,.167]},n:["0p833_0p718_0p167_0p083","0p833_0p718_0p167_0p083","0p833_0p833_0p167_0p167"],t:9,s:[100,-100,100],e:[101.04,-101.04,100]},{i:{x:[.833,.833,.833],y:[.817,.817,.833]},o:{x:[.167,.167,.167],y:[.118,.118,.167]},n:["0p833_0p817_0p167_0p118","0p833_0p817_0p167_0p118","0p833_0p833_0p167_0p167"],t:10,s:[101.04,-101.04,100],e:[103.52,-103.52,100]},{i:{x:[.833,.833,.833],y:[.847,.847,.833]},o:{x:[.167,.167,.167],y:[.153,.153,.167]},n:["0p833_0p847_0p167_0p153","0p833_0p847_0p167_0p153","0p833_0p833_0p167_0p167"],t:11,s:[103.52,-103.52,100],e:[106.48,-106.48,100]},{i:{x:[.833,.833,.833],y:[.882,.882,.833]},o:{x:[.167,.167,.167],y:[.183,.183,.167]},n:["0p833_0p882_0p167_0p183","0p833_0p882_0p167_0p183","0p833_0p833_0p167_0p167"],t:12,s:[106.48,-106.48,100],e:[108.96,-108.96,100]},{i:{x:[.833,.833,.833],y:[.913,.913,.833]},o:{x:[.167,.167,.167],y:[.282,.282,.167]},n:["0p833_0p913_0p167_0p282","0p833_0p913_0p167_0p282","0p833_0p833_0p167_0p167"],t:13,s:[108.96,-108.96,100],e:[110,-110,100]},{i:{x:[.833,.833,.833],y:[3.067,3.067,.833]},o:{x:[.167,.167,.167],y:[1.88,1.88,.167]},n:["0p833_3p067_0p167_1p88","0p833_3p067_0p167_1p88","0p833_0p833_0p167_0p167"],t:14,s:[110,-110,100],e:[110.048,-110.048,100]},{i:{x:[.833,.833,.833],y:[.778,.778,.833]},o:{x:[.167,.167,.167],y:[.08,.08,.167]},n:["0p833_0p778_0p167_0p08","0p833_0p778_0p167_0p08","0p833_0p833_0p167_0p167"],t:15,s:[110.048,-110.048,100],e:[108.803,-108.803,100]},{i:{x:[.833,.833,.833],y:[.812,.812,.833]},o:{x:[.167,.167,.167],y:[.134,.134,.167]},n:["0p833_0p812_0p167_0p134","0p833_0p812_0p167_0p134","0p833_0p833_0p167_0p167"],t:16,s:[108.803,-108.803,100],e:[106.737,-106.737,100]},{i:{x:[.833,.833,.833],y:[.783,.783,.833]},o:{x:[.167,.167,.167],y:[.15,.15,.167]},n:["0p833_0p783_0p167_0p15","0p833_0p783_0p167_0p15","0p833_0p833_0p167_0p167"],t:17,s:[106.737,-106.737,100],e:[104.153,-104.153,100]},{i:{x:[.833,.833,.833],y:[.759,.759,.833]},o:{x:[.167,.167,.167],y:[.135,.135,.167]},n:["0p833_0p759_0p167_0p135","0p833_0p759_0p167_0p135","0p833_0p833_0p167_0p167"],t:18,s:[104.153,-104.153,100],e:[100,-100,100]},{i:{x:[.833,.833,.833],y:[.864,.864,.833]},o:{x:[.167,.167,.167],y:[.127,.127,.167]},n:["0p833_0p864_0p167_0p127","0p833_0p864_0p167_0p127","0p833_0p833_0p167_0p167"],t:19,s:[100,-100,100],e:[92.146,-92.146,100]},{i:{x:[.833,.833,.833],y:[.876,.876,.833]},o:{x:[.167,.167,.167],y:[.216,.216,.167]},n:["0p833_0p876_0p167_0p216","0p833_0p876_0p167_0p216","0p833_0p833_0p167_0p167"],t:20,s:[92.146,-92.146,100],e:[87.218,-87.218,100]},{i:{x:[.833,.833,.833],y:[.904,.904,.833]},o:{x:[.167,.167,.167],y:[.255,.255,.167]},n:["0p833_0p904_0p167_0p255","0p833_0p904_0p167_0p255","0p833_0p833_0p167_0p167"],t:21,s:[87.218,-87.218,100],e:[84.827,-84.827,100]},{i:{x:[.833,.833,.833],y:[1.177,1.177,.833]},o:{x:[.167,.167,.167],y:[.636,.636,.167]},n:["0p833_1p177_0p167_0p636","0p833_1p177_0p167_0p636","0p833_0p833_0p167_0p167"],t:22,s:[84.827,-84.827,100],e:[84.466,-84.466,100]},{i:{x:[.833,.833,.833],y:[.762,.762,.833]},o:{x:[.167,.167,.167],y:[.057,.057,.167]},n:["0p833_0p762_0p167_0p057","0p833_0p762_0p167_0p057","0p833_0p833_0p167_0p167"],t:23,s:[84.466,-84.466,100],e:[85.592,-85.592,100]},{i:{x:[.833,.833,.833],y:[.813,.813,.833]},o:{x:[.167,.167,.167],y:[.128,.128,.167]},n:["0p833_0p813_0p167_0p128","0p833_0p813_0p167_0p128","0p833_0p833_0p167_0p167"],t:24,s:[85.592,-85.592,100],e:[87.684,-87.684,100]},{i:{x:[.833,.833,.833],y:[.829,.829,.833]},o:{x:[.167,.167,.167],y:[.15,.15,.167]},n:["0p833_0p829_0p167_0p15","0p833_0p829_0p167_0p15","0p833_0p833_0p167_0p167"],t:25,s:[87.684,-87.684,100],e:[90.28,-90.28,100]},{i:{x:[.833,.833,.833],y:[.838,.838,.833]},o:{x:[.167,.167,.167],y:[.163,.163,.167]},n:["0p833_0p838_0p167_0p163","0p833_0p838_0p167_0p163","0p833_0p833_0p167_0p167"],t:26,s:[90.28,-90.28,100],e:[93.008,-93.008,100]},{i:{x:[.833,.833,.833],y:[.844,.844,.833]},o:{x:[.167,.167,.167],y:[.172,.172,.167]},n:["0p833_0p844_0p167_0p172","0p833_0p844_0p167_0p172","0p833_0p833_0p167_0p167"],t:27,s:[93.008,-93.008,100],e:[95.585,-95.585,100]},{i:{x:[.833,.833,.833],y:[.85,.85,.833]},o:{x:[.167,.167,.167],y:[.179,.179,.167]},n:["0p833_0p85_0p167_0p179","0p833_0p85_0p167_0p179","0p833_0p833_0p167_0p167"],t:28,s:[95.585,-95.585,100],e:[97.825,-97.825,100]},{i:{x:[.833,.833,.833],y:[.855,.855,.833]},o:{x:[.167,.167,.167],y:[.187,.187,.167]},n:["0p833_0p855_0p167_0p187","0p833_0p855_0p167_0p187","0p833_0p833_0p167_0p167"],t:29,s:[97.825,-97.825,100],e:[99.625,-99.625,100]},{i:{x:[.833,.833,.833],y:[.862,.862,.833]},o:{x:[.167,.167,.167],y:[.197,.197,.167]},n:["0p833_0p862_0p167_0p197","0p833_0p862_0p167_0p197","0p833_0p833_0p167_0p167"],t:30,s:[99.625,-99.625,100],e:[100.947,-100.947,100]},{i:{x:[.833,.833,.833],y:[.873,.873,.833]},o:{x:[.167,.167,.167],y:[.211,.211,.167]},n:["0p833_0p873_0p167_0p211","0p833_0p873_0p167_0p211","0p833_0p833_0p167_0p167"],t:31,s:[100.947,-100.947,100],e:[101.81,-101.81,100]},{i:{x:[.833,.833,.833],y:[.894,.894,.833]},o:{x:[.167,.167,.167],y:[.241,.241,.167]},n:["0p833_0p894_0p167_0p241","0p833_0p894_0p167_0p241","0p833_0p833_0p167_0p167"],t:32,s:[101.81,-101.81,100],e:[102.268,-102.268,100]},{i:{x:[.833,.833,.833],y:[.999,.999,.833]},o:{x:[.167,.167,.167],y:[.387,.387,.167]},n:["0p833_0p999_0p167_0p387","0p833_0p999_0p167_0p387","0p833_0p833_0p167_0p167"],t:33,s:[102.268,-102.268,100],e:[102.393,-102.393,100]},{i:{x:[.833,.833,.833],y:[.72,.72,.833]},o:{x:[.167,.167,.167],y:[-.001,-.001,.167]},n:["0p833_0p72_0p167_-0p001","0p833_0p72_0p167_-0p001","0p833_0p833_0p167_0p167"],t:34,s:[102.393,-102.393,100],e:[102.27,-102.27,100]},{i:{x:[.833,.833,.833],y:[.806,.806,.833]},o:{x:[.167,.167,.167],y:[.119,.119,.167]},n:["0p833_0p806_0p167_0p119","0p833_0p806_0p167_0p119","0p833_0p833_0p167_0p167"],t:35,s:[102.27,-102.27,100],e:[101.979,-101.979,100]},{i:{x:[.833,.833,.833],y:[.826,.826,.833]},o:{x:[.167,.167,.167],y:[.146,.146,.167]},n:["0p833_0p826_0p167_0p146","0p833_0p826_0p167_0p146","0p833_0p833_0p167_0p167"],t:36,s:[101.979,-101.979,100],e:[101.594,-101.594,100]},{i:{x:[.833,.833,.833],y:[.836,.836,.833]},o:{x:[.167,.167,.167],y:[.16,.16,.167]},n:["0p833_0p836_0p167_0p16","0p833_0p836_0p167_0p16","0p833_0p833_0p167_0p167"],t:37,s:[101.594,-101.594,100],e:[101.176,-101.176,100]},{i:{x:[.833,.833,.833],y:[.843,.843,.833]},o:{x:[.167,.167,.167],y:[.169,.169,.167]},n:["0p833_0p843_0p167_0p169","0p833_0p843_0p167_0p169","0p833_0p833_0p167_0p167"],t:38,s:[101.176,-101.176,100],e:[100.772,-100.772,100]},{i:{x:[.833,.833,.833],y:[.848,.848,.833]},o:{x:[.167,.167,.167],y:[.177,.177,.167]},n:["0p833_0p848_0p167_0p177","0p833_0p848_0p167_0p177","0p833_0p833_0p167_0p167"],t:39,s:[100.772,-100.772,100],e:[100.413,-100.413,100]},{i:{x:[.833,.833,.833],y:[.854,.854,.833]},o:{x:[.167,.167,.167],y:[.185,.185,.167]},n:["0p833_0p854_0p167_0p185","0p833_0p854_0p167_0p185","0p833_0p833_0p167_0p167"],t:40,s:[100.413,-100.413,100],e:[100.12,-100.12,100]},{i:{x:[.833,.833,.833],y:[.86,.86,.833]},o:{x:[.167,.167,.167],y:[.194,.194,.167]},n:["0p833_0p86_0p167_0p194","0p833_0p86_0p167_0p194","0p833_0p833_0p167_0p167"],t:41,s:[100.12,-100.12,100],e:[99.899,-99.899,100]},{i:{x:[.833,.833,.833],y:[.869,.869,.833]},o:{x:[.167,.167,.167],y:[.207,.207,.167]},n:["0p833_0p869_0p167_0p207","0p833_0p869_0p167_0p207","0p833_0p833_0p167_0p167"],t:42,s:[99.899,-99.899,100],e:[99.749,-99.749,100]},{i:{x:[.833,.833,.833],y:[.886,.886,.833]},o:{x:[.167,.167,.167],y:[.23,.23,.167]},n:["0p833_0p886_0p167_0p23","0p833_0p886_0p167_0p23","0p833_0p833_0p167_0p167"],t:43,s:[99.749,-99.749,100],e:[99.665,-99.665,100]},{i:{x:[.833,.833,.833],y:[.945,.945,.833]},o:{x:[.167,.167,.167],y:[.313,.313,.167]},n:["0p833_0p945_0p167_0p313","0p833_0p945_0p167_0p313","0p833_0p833_0p167_0p167"],t:44,s:[99.665,-99.665,100],e:[99.634,-99.634,100]},{i:{x:[.833,.833,.833],y:[.608,.608,.833]},o:{x:[.167,.167,.167],y:[-.159,-.159,.167]},n:["0p833_0p608_0p167_-0p159","0p833_0p608_0p167_-0p159","0p833_0p833_0p167_0p167"],t:45,s:[99.634,-99.634,100],e:[99.644,-99.644,100]},{i:{x:[.833,.833,.833],y:[.797,.797,.833]},o:{x:[.167,.167,.167],y:[.106,.106,.167]},n:["0p833_0p797_0p167_0p106","0p833_0p797_0p167_0p106","0p833_0p833_0p167_0p167"],t:46,s:[99.644,-99.644,100],e:[99.684,-99.684,100]},{i:{x:[.833,.833,.833],y:[.823,.823,.833]},o:{x:[.167,.167,.167],y:[.141,.141,.167]},n:["0p833_0p823_0p167_0p141","0p833_0p823_0p167_0p141","0p833_0p833_0p167_0p167"],t:47,s:[99.684,-99.684,100],e:[99.74,-99.74,100]},{i:{x:[.833,.833,.833],y:[.834,.834,.833]},o:{x:[.167,.167,.167],y:[.157,.157,.167]},n:["0p833_0p834_0p167_0p157","0p833_0p834_0p167_0p157","0p833_0p833_0p167_0p167"],t:48,s:[99.74,-99.74,100],e:[99.804,-99.804,100]},{i:{x:[.833,.833,.833],y:[.841,.841,.833]},o:{x:[.167,.167,.167],y:[.167,.167,.167]},n:["0p833_0p841_0p167_0p167","0p833_0p841_0p167_0p167","0p833_0p833_0p167_0p167"],t:49,s:[99.804,-99.804,100],e:[99.867,-99.867,100]},{i:{x:[.833,.833,.833],y:[.847,.847,.833]},o:{x:[.167,.167,.167],y:[.175,.175,.167]},n:["0p833_0p847_0p167_0p175","0p833_0p847_0p167_0p175","0p833_0p833_0p167_0p167"],t:50,s:[99.867,-99.867,100],e:[99.924,-99.924,100]},{i:{x:[.833,.833,.833],y:[.853,.853,.833]},o:{x:[.167,.167,.167],y:[.183,.183,.167]},n:["0p833_0p853_0p167_0p183","0p833_0p853_0p167_0p183","0p833_0p833_0p167_0p167"],t:51,s:[99.924,-99.924,100],e:[99.971,-99.971,100]},{i:{x:[.833,.833,.833],y:[.859,.859,.833]},o:{x:[.167,.167,.167],y:[.192,.192,.167]},n:["0p833_0p859_0p167_0p192","0p833_0p859_0p167_0p192","0p833_0p833_0p167_0p167"],t:52,s:[99.971,-99.971,100],e:[100.008,-100.008,100]},{i:{x:[.833,.833,.833],y:[.867,.867,.833]},o:{x:[.167,.167,.167],y:[.203,.203,.167]},n:["0p833_0p867_0p167_0p203","0p833_0p867_0p167_0p203","0p833_0p833_0p167_0p167"],t:53,s:[100.008,-100.008,100],e:[100.034,-100.034,100]},{i:{x:[.833,.833,.833],y:[.881,.881,.833]},o:{x:[.167,.167,.167],y:[.222,.222,.167]},n:["0p833_0p881_0p167_0p222","0p833_0p881_0p167_0p222","0p833_0p833_0p167_0p167"],t:54,s:[100.034,-100.034,100],e:[100.049,-100.049,100]},{i:{x:[.833,.833,.833],y:[.919,.919,.833]},o:{x:[.167,.167,.167],y:[.277,.277,.167]},n:["0p833_0p919_0p167_0p277","0p833_0p919_0p167_0p277","0p833_0p833_0p167_0p167"],t:55,s:[100.049,-100.049,100],e:[100.056,-100.056,100]},{i:{x:[.833,.833,.833],y:[-.984,-.984,.833]},o:{x:[.167,.167,.167],y:[-2.381,-2.381,.167]},n:["0p833_-0p984_0p167_-2p381","0p833_-0p984_0p167_-2p381","0p833_0p833_0p167_0p167"],t:56,s:[100.056,-100.056,100],e:[100.055,-100.055,100]},{i:{x:[.833,.833,.833],y:[.784,.784,.833]},o:{x:[.167,.167,.167],y:[.087,.087,.167]},n:["0p833_0p784_0p167_0p087","0p833_0p784_0p167_0p087","0p833_0p833_0p167_0p167"],t:57,s:[100.055,-100.055,100],e:[100.05,-100.05,100]},{i:{x:[.833,.833,.833],y:[.818,.818,.833]},o:{x:[.167,.167,.167],y:[.136,.136,.167]},n:["0p833_0p818_0p167_0p136","0p833_0p818_0p167_0p136","0p833_0p833_0p167_0p167"],t:58,s:[100.05,-100.05,100],e:[100.042,-100.042,100]},{i:{x:[.833,.833,.833],y:[.833,.833,.833]},o:{x:[.167,.167,.167],y:[.154,.154,.167]},n:["0p833_0p833_0p167_0p154","0p833_0p833_0p167_0p154","0p833_0p833_0p167_0p167"],t:59,s:[100.042,-100.042,100],e:[100.033,-100.033,100]},{t:60}]}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ks:{a:0,k:{i:[[0,-44.183],[-44.183,0],[0,44.183]],o:[[0,44.183],[44.183,0],[0,-44.183]],v:[[-80,0],[0,80],[80,0]],c:!1}},nm:"Path 1",mn:"ADBE Vector Shape - Group"},{ty:"st",c:{a:0,k:[.39215686274509803,.2627450980392157,.6509803921568628,1]},o:{a:0,k:100},w:{a:1,k:[{i:{x:[.667],y:[1]},o:{x:[.333],y:[0]},n:["0p667_1_0p333_0"],t:7,s:[80],e:[100]},{i:{x:[.667],y:[1]},o:{x:[.333],y:[0]},n:["0p667_1_0p333_0"],t:12,s:[100],e:[80]},{t:22}]},lc:2,lj:1,ml:4,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke"},{ty:"tr",p:{a:0,k:[0,20],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Ellipse 1",np:3,mn:"ADBE Vector Group"},{ty:"tm",s:{a:1,k:[{i:{x:[0],y:[1]},o:{x:[.333],y:[0]},n:["0_1_0p333_0"],t:11,s:[0],e:[99.9]},{t:26}],ix:1},e:{a:1,k:[{i:{x:[0],y:[1]},o:{x:[.333],y:[0]},n:["0_1_0p333_0"],t:7,s:[.1],e:[100]},{t:22}],ix:2},o:{a:0,k:0,ix:3},m:1,ix:2,nm:"Trim Paths 1",mn:"ADBE Vector Filter - Trim"}],ip:0,op:360,st:0,bm:0,sr:1},{ddd:0,ind:4,ty:4,nm:"Shape Layer 9",ks:{o:{a:0,k:100},r:{a:0,k:0},p:{a:1,k:[{i:{x:.833,y:.718},o:{x:.167,y:.167},n:"0p833_0p718_0p167_0p167",t:0,s:[720,480,0],e:[720,484.16,0],to:[189478068516246e-28,.69334012269974,0],ti:[189478068516246e-28,-2.3468861579895,0]},{i:{x:.833,y:.817},o:{x:.167,y:.118},n:"0p833_0p817_0p167_0p118",t:1,s:[720,484.16,0],e:[720,494.081,0],to:[-189478068516246e-28,2.3468861579895,0],ti:[189478068516246e-28,-3.62661719322205,0]},{i:{x:.833,y:.847},o:{x:.167,y:.153},n:"0p833_0p847_0p167_0p153",t:2,s:[720,494.081,0],e:[720,505.92,0],to:[-189478068516246e-28,3.62661719322205,0],ti:[-189478068516246e-28,-3.62643098831177,0]},{i:{x:.833,y:.882},o:{x:.167,y:.183},n:"0p833_0p882_0p167_0p183",t:3,s:[720,505.92,0],e:[720,515.84,0],to:[189478068516246e-28,3.62643098831177,0],ti:[0,-2.34670925140381,0]},{i:{x:.833,y:.893},o:{x:.167,y:.282},n:"0p833_0p893_0p167_0p282",t:4,s:[720,515.84,0],e:[720,520,0],to:[0,2.34670925140381,0],ti:[543044116618763e-25,-.64769965410233,0]},{i:{x:.833,y:.547},o:{x:.167,y:.375},n:"0p833_0p547_0p167_0p375",t:5,s:[720,520,0],e:[720,519.726,0],to:[-543044116618763e-25,.64769965410233,0],ti:[884483597474173e-25,.92460745573044,0]},{i:{x:.833,y:.784},o:{x:.167,y:.102},n:"0p833_0p784_0p167_0p102",t:6,s:[720,519.726,0],e:[720,514.452,0],to:[-884483597474173e-25,-.92460745573044,0],ti:[506664328547846e-25,2.27949190139771,0]},{i:{x:.833,y:.814},o:{x:.167,y:.136},n:"0p833_0p814_0p167_0p136",t:7,s:[720,514.452,0],e:[720,506.049,0],to:[-506664328547846e-25,-2.27949190139771,0],ti:[19004650284038e-24,3.12637186050415,0]},{i:{x:.833,y:.79},o:{x:.167,y:.151},n:"0p833_0p79_0p167_0p151",t:8,s:[720,506.049,0],e:[720,495.694,0],to:[-19004650284038e-24,-3.12637186050415,0],ti:[-1.04970844516661e-10,4.34152460098267,0]},{i:{x:.833,y:.783},o:{x:.167,y:.138},n:"0p833_0p783_0p167_0p138",t:9,s:[720,495.694,0],e:[720,480,0],to:[1.04970844516661e-10,-4.34152460098267,0],ti:[-1.07453011766179e-10,6.80367374420166,0]},{i:{x:.833,y:.864},o:{x:.167,y:.135},n:"0p833_0p864_0p167_0p135",t:10,s:[720,480,0],e:[720,454.872,0],to:[1.07453011766179e-10,-6.80367374420166,0],ti:[0,6.81544876098633,0]},{i:{x:.833,y:.876},o:{x:.167,y:.216},n:"0p833_0p876_0p167_0p216",t:11,s:[720,454.872,0],e:[720,439.107,0],to:[0,-6.81544876098633,0],ti:[0,3.90252184867859,0]},{i:{x:.833,y:.9},o:{x:.167,y:.255},n:"0p833_0p9_0p167_0p255",t:12,s:[720,439.107,0],e:[720,431.457,0],to:[0,-3.90252184867859,0],ti:[0,1.4674072265625,0]},{i:{x:.833,y:.726},o:{x:.167,y:.489},n:"0p833_0p726_0p167_0p489",t:13,s:[720,431.457,0],e:[720,430.303,0],to:[0,-1.4674072265625,0],ti:[0,-.40824863314629,0]},{i:{x:.833,y:.762},o:{x:.167,y:.12},n:"0p833_0p762_0p167_0p12",t:14,s:[720,430.303,0],e:[720,433.906,0],to:[0,.40824863314629,0],ti:[0,-1.71581923961639,0]},{i:{x:.833,y:.813},o:{x:.167,y:.128},n:"0p833_0p813_0p167_0p128",t:15,s:[720,433.906,0],e:[720,440.598,0],to:[0,1.71581923961639,0],ti:[0,-2.49976849555969,0]},{i:{x:.833,y:.829},o:{x:.167,y:.15},n:"0p833_0p829_0p167_0p15",t:16,s:[720,440.598,0],e:[720,448.905,0],to:[0,2.49976849555969,0],ti:[0,-2.83863735198975,0]},{i:{x:.833,y:.838},o:{x:.167,y:.163},n:"0p833_0p838_0p167_0p163",t:17,s:[720,448.905,0],e:[720,457.63,0],to:[0,2.83863735198975,0],ti:[0,-2.82838201522827,0]},{i:{x:.833,y:.844},o:{x:.167,y:.172},n:"0p833_0p844_0p167_0p172",t:18,s:[720,457.63,0],e:[720,465.875,0],to:[0,2.82838201522827,0],ti:[0,-2.56888222694397,0]},{i:{x:.833,y:.85},o:{x:.167,y:.179},n:"0p833_0p85_0p167_0p179",t:19,s:[720,465.875,0],e:[720,473.043,0],to:[0,2.56888222694397,0],ti:[0,-2.15392565727234,0]},{i:{x:.833,y:.855},o:{x:.167,y:.187},n:"0p833_0p855_0p167_0p187",t:20,s:[720,473.043,0],e:[720,478.799,0],to:[0,2.15392565727234,0],ti:[0,-1.66457295417786,0]},{i:{x:.833,y:.862},o:{x:.167,y:.197},n:"0p833_0p862_0p167_0p197",t:21,s:[720,478.799,0],e:[720,483.03,0],to:[0,1.66457295417786,0],ti:[0,-1.16553914546967,0]},{i:{x:.833,y:.873},o:{x:.167,y:.211},n:"0p833_0p873_0p167_0p211",t:22,s:[720,483.03,0],e:[720,485.792,0],to:[0,1.16553914546967,0],ti:[0,-.70405745506287,0]},{i:{x:.833,y:.894},o:{x:.167,y:.241},n:"0p833_0p894_0p167_0p241",t:23,s:[720,485.792,0],e:[720,487.255,0],to:[0,.70405745506287,0],ti:[0,-.31062442064285,0]},{i:{x:.833,y:.835},o:{x:.167,y:.387},n:"0p833_0p835_0p167_0p387",t:24,s:[720,487.255,0],e:[720,487.656,0],to:[0,.31062442064285,0],ti:[0,-.00102502817754,0]},{i:{x:.833,y:.72},o:{x:.167,y:.168},n:"0p833_0p72_0p167_0p168",t:25,s:[720,487.656,0],e:[720,487.261,0],to:[0,.00102502817754,0],ti:[0,.22090400755405,0]},{i:{x:.833,y:.806},o:{x:.167,y:.119},n:"0p833_0p806_0p167_0p119",t:26,s:[720,487.261,0],e:[720,486.33,0],to:[0,-.22090400755405,0],ti:[0,.36022943258286,0]},{i:{x:.833,y:.826},o:{x:.167,y:.146},n:"0p833_0p826_0p167_0p146",t:27,s:[720,486.33,0],e:[720,485.099,0],to:[0,-.36022943258286,0],ti:[0,.42794588208199,0]},{i:{x:.833,y:.836},o:{x:.167,y:.16},n:"0p833_0p836_0p167_0p16",t:28,s:[720,485.099,0],e:[720,483.763,0],to:[0,-.42794588208199,0],ti:[0,.43831527233124,0]},{i:{x:.833,y:.843},o:{x:.167,y:.169},n:"0p833_0p843_0p167_0p169",t:29,s:[720,483.763,0],e:[720,482.47,0],to:[0,-.43831527233124,0],ti:[0,.40666928887367,0]},{i:{x:.833,y:.848},o:{x:.167,y:.177},n:"0p833_0p848_0p167_0p177",t:30,s:[720,482.47,0],e:[720,481.323,0],to:[0,-.40666928887367,0],ti:[0,.34773921966553,0]},{i:{x:.833,y:.854},o:{x:.167,y:.185},n:"0p833_0p854_0p167_0p185",t:31,s:[720,481.323,0],e:[720,480.383,0],to:[0,-.34773921966553,0],ti:[0,.27451291680336,0]},{i:{x:.833,y:.86},o:{x:.167,y:.194},n:"0p833_0p86_0p167_0p194",t:32,s:[720,480.383,0],e:[720,479.676,0],to:[0,-.27451291680336,0],ti:[0,.19757102429867,0]},{i:{x:.833,y:.869},o:{x:.167,y:.207},n:"0p833_0p869_0p167_0p207",t:33,s:[720,479.676,0],e:[720,479.198,0],to:[0,-.19757102429867,0],ti:[0,.12482621520758,0]},{i:{x:.833,y:.886},o:{x:.167,y:.23},n:"0p833_0p886_0p167_0p23",t:34,s:[720,479.198,0],e:[720,478.927,0],to:[0,-.12482621520758,0],ti:[0,.06157397851348,0]},{i:{x:.833,y:.883},o:{x:.167,y:.313},n:"0p833_0p883_0p167_0p313",t:35,s:[720,478.927,0],e:[720,478.828,0],to:[0,-.06157397851348,0],ti:[0,.01076242513955,0]},{i:{x:.833,y:.656},o:{x:.167,y:.287},n:"0p833_0p656_0p167_0p287",t:36,s:[720,478.828,0],e:[720,478.862,0],to:[0,-.01076242513955,0],ti:[0,-.02660511806607,0]},{i:{x:.833,y:.797},o:{x:.167,y:.11},n:"0p833_0p797_0p167_0p11",t:37,s:[720,478.862,0],e:[720,478.988,0],to:[0,.02660511806607,0],ti:[0,-.05100827664137,0]},{i:{x:.833,y:.823},o:{x:.167,y:.141},n:"0p833_0p823_0p167_0p141",t:38,s:[720,478.988,0],e:[720,479.168,0],to:[0,.05100827664137,0],ti:[0,-.06394649296999,0]},{i:{x:.833,y:.834},o:{x:.167,y:.157},n:"0p833_0p834_0p167_0p157",t:39,s:[720,479.168,0],e:[720,479.372,0],to:[0,.06394649296999,0],ti:[0,-.06751627475023,0]},{i:{x:.833,y:.841},o:{x:.167,y:.167},n:"0p833_0p841_0p167_0p167",t:40,s:[720,479.372,0],e:[720,479.573,0],to:[0,.06751627475023,0],ti:[0,-.06405504047871,0]},{i:{x:.833,y:.847},o:{x:.167,y:.175},n:"0p833_0p847_0p167_0p175",t:41,s:[720,479.573,0],e:[720,479.756,0],to:[0,.06405504047871,0],ti:[0,-.05586441606283,0]},{i:{x:.833,y:.853},o:{x:.167,y:.183},n:"0p833_0p853_0p167_0p183",t:42,s:[720,479.756,0],e:[720,479.908,0],to:[0,.05586441606283,0],ti:[0,-.04501524940133,0]},{i:{x:.833,y:.859},o:{x:.167,y:.192},n:"0p833_0p859_0p167_0p192",t:43,s:[720,479.908,0],e:[720,480.026,0],to:[0,.04501524940133,0],ti:[0,-.03322834894061,0]},{i:{x:.833,y:.867},o:{x:.167,y:.203},n:"0p833_0p867_0p167_0p203",t:44,s:[720,480.026,0],e:[720,480.108,0],to:[0,.03322834894061,0],ti:[0,-.02182034961879,0]},{i:{x:.833,y:.881},o:{x:.167,y:.222},n:"0p833_0p881_0p167_0p222",t:45,s:[720,480.108,0],e:[720,480.157,0],to:[0,.02182034961879,0],ti:[0,-.01170086674392,0]},{i:{x:.833,y:.898},o:{x:.167,y:.277},n:"0p833_0p898_0p167_0p277",t:46,s:[720,480.157,0],e:[720,480.178,0],to:[0,.01170086674392,0],ti:[0,-.00340680335648,0]},{i:{x:.833,y:.633},o:{x:.167,y:.45},n:"0p833_0p633_0p167_0p45",t:47,s:[720,480.178,0],e:[720,480.177,0],to:[0,.00340680335648,0],ti:[0,.00283987051807,0]},{i:{x:.833,y:.784},o:{x:.167,y:.108},n:"0p833_0p784_0p167_0p108",t:48,s:[720,480.177,0],e:[720,480.161,0],to:[0,-.00283987051807,0],ti:[0,.00706263212487,0]},{i:{x:.833,y:.818},o:{x:.167,y:.136},n:"0p833_0p818_0p167_0p136",t:49,s:[720,480.161,0],e:[720,480.135,0],to:[0,-.00706263212487,0],ti:[0,.00945873651654,0]},{i:{x:.833,y:.832},o:{x:.167,y:.154},n:"0p833_0p832_0p167_0p154",t:50,s:[720,480.135,0],e:[720,480.104,0],to:[0,-.00945873651654,0],ti:[0,.01033237110823,0]},{i:{x:.833,y:.84},o:{x:.167,y:.165},n:"0p833_0p84_0p167_0p165",t:51,s:[720,480.104,0],e:[720,480.073,0],to:[0,-.01033237110823,0],ti:[0,.01003722194582,0]},{i:{x:.833,y:.846},o:{x:.167,y:.173},n:"0p833_0p846_0p167_0p173",t:52,s:[720,480.073,0],e:[720,480.044,0],to:[0,-.01003722194582,0],ti:[0,.00893091596663,0]},{i:{x:.833,y:.851},o:{x:.167,y:.181},n:"0p833_0p851_0p167_0p181",t:53,s:[720,480.044,0],e:[720,480.019,0],to:[0,-.00893091596663,0],ti:[0,.00734201865271,0]},{i:{x:.833,y:.857},o:{x:.167,y:.189},n:"0p833_0p857_0p167_0p189",t:54,s:[720,480.019,0],e:[720,480,0],to:[0,-.00734201865271,0],ti:[0,.00554898008704,0]},{i:{x:.833,y:.864},o:{x:.167,y:.2},n:"0p833_0p864_0p167_0p2",t:55,s:[720,480,0],e:[720,479.986,0],to:[0,-.00554898008704,0],ti:[0,.00376951810904,0]},{i:{x:.833,y:.876},o:{x:.167,y:.216},n:"0p833_0p876_0p167_0p216",t:56,s:[720,479.986,0],e:[720,479.977,0],to:[0,-.00376951810904,0],ti:[0,.0021584238857,0]},{i:{x:.833,y:.9},o:{x:.167,y:.255},n:"0p833_0p9_0p167_0p255",t:57,s:[720,479.977,0],e:[720,479.973,0],to:[0,-.0021584238857,0],ti:[0,.0008115999517,0]},{i:{x:.833,y:.726},o:{x:.167,y:.489},n:"0p833_0p726_0p167_0p489",t:58,s:[720,479.973,0],e:[720,479.973,0],to:[0,-.0008115999517,0],ti:[0,-.00022579594224,0]},{i:{x:.833,y:.833},o:{x:.167,y:.12},n:"0p833_0p833_0p167_0p12",t:59,s:[720,479.973,0],e:[720,479.975,0],to:[0,.00022579594224,0],ti:[0,-.00033218055614,0]},{t:60}]},a:{a:0,k:[-240,20,0]},s:{a:1,k:[{i:{x:[.833,.833,.833],y:[.833,.833,.833]},o:{x:[.167,.167,.167],y:[.167,.167,.167]},n:["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],t:0,s:[100,100,100],e:[100,100,100]},{i:{x:[.833,.833,.833],y:[.833,.833,.833]},o:{x:[.167,.167,.167],y:[.167,.167,.167]},n:["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],t:1,s:[100,100,100],e:[100,100,100]},{i:{x:[.833,.833,.833],y:[.718,.718,.833]},o:{x:[.167,.167,.167],y:[.083,.083,.167]},n:["0p833_0p718_0p167_0p083","0p833_0p718_0p167_0p083","0p833_0p833_0p167_0p167"],t:2,s:[100,100,100],e:[101.04,101.04,100]},{i:{x:[.833,.833,.833],y:[.817,.817,.833]},o:{x:[.167,.167,.167],y:[.118,.118,.167]},n:["0p833_0p817_0p167_0p118","0p833_0p817_0p167_0p118","0p833_0p833_0p167_0p167"],t:3,s:[101.04,101.04,100],e:[103.52,103.52,100]},{i:{x:[.833,.833,.833],y:[.847,.847,.833]},o:{x:[.167,.167,.167],y:[.153,.153,.167]},n:["0p833_0p847_0p167_0p153","0p833_0p847_0p167_0p153","0p833_0p833_0p167_0p167"],t:4,s:[103.52,103.52,100],e:[106.48,106.48,100]},{i:{x:[.833,.833,.833],y:[.882,.882,.833]},o:{x:[.167,.167,.167],y:[.183,.183,.167]},n:["0p833_0p882_0p167_0p183","0p833_0p882_0p167_0p183","0p833_0p833_0p167_0p167"],t:5,s:[106.48,106.48,100],e:[108.96,108.96,100]},{i:{x:[.833,.833,.833],y:[.913,.913,.833]},o:{x:[.167,.167,.167],y:[.282,.282,.167]},n:["0p833_0p913_0p167_0p282","0p833_0p913_0p167_0p282","0p833_0p833_0p167_0p167"],t:6,s:[108.96,108.96,100],e:[110,110,100]},{i:{x:[.833,.833,.833],y:[3.067,3.067,.833]},o:{x:[.167,.167,.167],y:[1.88,1.88,.167]},n:["0p833_3p067_0p167_1p88","0p833_3p067_0p167_1p88","0p833_0p833_0p167_0p167"],t:7,s:[110,110,100],e:[110.048,110.048,100]},{i:{x:[.833,.833,.833],y:[.778,.778,.833]},o:{x:[.167,.167,.167],y:[.08,.08,.167]},n:["0p833_0p778_0p167_0p08","0p833_0p778_0p167_0p08","0p833_0p833_0p167_0p167"],t:8,s:[110.048,110.048,100],e:[108.803,108.803,100]},{i:{x:[.833,.833,.833],y:[.812,.812,.833]},o:{x:[.167,.167,.167],y:[.134,.134,.167]},n:["0p833_0p812_0p167_0p134","0p833_0p812_0p167_0p134","0p833_0p833_0p167_0p167"],t:9,s:[108.803,108.803,100],e:[106.737,106.737,100]},{i:{x:[.833,.833,.833],y:[.783,.783,.833]},o:{x:[.167,.167,.167],y:[.15,.15,.167]},n:["0p833_0p783_0p167_0p15","0p833_0p783_0p167_0p15","0p833_0p833_0p167_0p167"],t:10,s:[106.737,106.737,100],e:[104.153,104.153,100]},{i:{x:[.833,.833,.833],y:[.759,.759,.833]},o:{x:[.167,.167,.167],y:[.135,.135,.167]},n:["0p833_0p759_0p167_0p135","0p833_0p759_0p167_0p135","0p833_0p833_0p167_0p167"],t:11,s:[104.153,104.153,100],e:[100,100,100]},{i:{x:[.833,.833,.833],y:[.864,.864,.833]},o:{x:[.167,.167,.167],y:[.127,.127,.167]},n:["0p833_0p864_0p167_0p127","0p833_0p864_0p167_0p127","0p833_0p833_0p167_0p167"],t:12,s:[100,100,100],e:[92.146,92.146,100]},{i:{x:[.833,.833,.833],y:[.876,.876,.833]},o:{x:[.167,.167,.167],y:[.216,.216,.167]},n:["0p833_0p876_0p167_0p216","0p833_0p876_0p167_0p216","0p833_0p833_0p167_0p167"],t:13,s:[92.146,92.146,100],e:[87.218,87.218,100]},{i:{x:[.833,.833,.833],y:[.904,.904,.833]},o:{x:[.167,.167,.167],y:[.255,.255,.167]},n:["0p833_0p904_0p167_0p255","0p833_0p904_0p167_0p255","0p833_0p833_0p167_0p167"],t:14,s:[87.218,87.218,100],e:[84.827,84.827,100]},{i:{x:[.833,.833,.833],y:[1.177,1.177,.833]},o:{x:[.167,.167,.167],y:[.636,.636,.167]},n:["0p833_1p177_0p167_0p636","0p833_1p177_0p167_0p636","0p833_0p833_0p167_0p167"],t:15,s:[84.827,84.827,100],e:[84.466,84.466,100]},{i:{x:[.833,.833,.833],y:[.762,.762,.833]},o:{x:[.167,.167,.167],y:[.057,.057,.167]},n:["0p833_0p762_0p167_0p057","0p833_0p762_0p167_0p057","0p833_0p833_0p167_0p167"],t:16,s:[84.466,84.466,100],e:[85.592,85.592,100]},{i:{x:[.833,.833,.833],y:[.813,.813,.833]},o:{x:[.167,.167,.167],y:[.128,.128,.167]},n:["0p833_0p813_0p167_0p128","0p833_0p813_0p167_0p128","0p833_0p833_0p167_0p167"],t:17,s:[85.592,85.592,100],e:[87.684,87.684,100]},{i:{x:[.833,.833,.833],y:[.829,.829,.833]},o:{x:[.167,.167,.167],y:[.15,.15,.167]},n:["0p833_0p829_0p167_0p15","0p833_0p829_0p167_0p15","0p833_0p833_0p167_0p167"],t:18,s:[87.684,87.684,100],e:[90.28,90.28,100]},{i:{x:[.833,.833,.833],y:[.838,.838,.833]},o:{x:[.167,.167,.167],y:[.163,.163,.167]},n:["0p833_0p838_0p167_0p163","0p833_0p838_0p167_0p163","0p833_0p833_0p167_0p167"],t:19,s:[90.28,90.28,100],e:[93.008,93.008,100]},{i:{x:[.833,.833,.833],y:[.844,.844,.833]},o:{x:[.167,.167,.167],y:[.172,.172,.167]},n:["0p833_0p844_0p167_0p172","0p833_0p844_0p167_0p172","0p833_0p833_0p167_0p167"],t:20,s:[93.008,93.008,100],e:[95.585,95.585,100]},{i:{x:[.833,.833,.833],y:[.85,.85,.833]},o:{x:[.167,.167,.167],y:[.179,.179,.167]},n:["0p833_0p85_0p167_0p179","0p833_0p85_0p167_0p179","0p833_0p833_0p167_0p167"],t:21,s:[95.585,95.585,100],e:[97.825,97.825,100]},{i:{x:[.833,.833,.833],y:[.855,.855,.833]},o:{x:[.167,.167,.167],y:[.187,.187,.167]},n:["0p833_0p855_0p167_0p187","0p833_0p855_0p167_0p187","0p833_0p833_0p167_0p167"],t:22,s:[97.825,97.825,100],e:[99.625,99.625,100]},{i:{x:[.833,.833,.833],y:[.862,.862,.833]},o:{x:[.167,.167,.167],y:[.197,.197,.167]},n:["0p833_0p862_0p167_0p197","0p833_0p862_0p167_0p197","0p833_0p833_0p167_0p167"],t:23,s:[99.625,99.625,100],e:[100.947,100.947,100]},{i:{x:[.833,.833,.833],y:[.873,.873,.833]},o:{x:[.167,.167,.167],y:[.211,.211,.167]},n:["0p833_0p873_0p167_0p211","0p833_0p873_0p167_0p211","0p833_0p833_0p167_0p167"],t:24,s:[100.947,100.947,100],e:[101.81,101.81,100]},{i:{x:[.833,.833,.833],y:[.894,.894,.833]},o:{x:[.167,.167,.167],y:[.241,.241,.167]},n:["0p833_0p894_0p167_0p241","0p833_0p894_0p167_0p241","0p833_0p833_0p167_0p167"],t:25,s:[101.81,101.81,100],e:[102.268,102.268,100]},{i:{x:[.833,.833,.833],y:[.999,.999,.833]},o:{x:[.167,.167,.167],y:[.387,.387,.167]},n:["0p833_0p999_0p167_0p387","0p833_0p999_0p167_0p387","0p833_0p833_0p167_0p167"],t:26,s:[102.268,102.268,100],e:[102.393,102.393,100]},{i:{x:[.833,.833,.833],y:[.72,.72,.833]},o:{x:[.167,.167,.167],y:[-.001,-.001,.167]},n:["0p833_0p72_0p167_-0p001","0p833_0p72_0p167_-0p001","0p833_0p833_0p167_0p167"],t:27,s:[102.393,102.393,100],e:[102.27,102.27,100]},{i:{x:[.833,.833,.833],y:[.806,.806,.833]},o:{x:[.167,.167,.167],y:[.119,.119,.167]},n:["0p833_0p806_0p167_0p119","0p833_0p806_0p167_0p119","0p833_0p833_0p167_0p167"],t:28,s:[102.27,102.27,100],e:[101.979,101.979,100]},{i:{x:[.833,.833,.833],y:[.826,.826,.833]},o:{x:[.167,.167,.167],y:[.146,.146,.167]},n:["0p833_0p826_0p167_0p146","0p833_0p826_0p167_0p146","0p833_0p833_0p167_0p167"],t:29,s:[101.979,101.979,100],e:[101.594,101.594,100]},{i:{x:[.833,.833,.833],y:[.836,.836,.833]},o:{x:[.167,.167,.167],y:[.16,.16,.167]},n:["0p833_0p836_0p167_0p16","0p833_0p836_0p167_0p16","0p833_0p833_0p167_0p167"],t:30,s:[101.594,101.594,100],e:[101.176,101.176,100]},{i:{x:[.833,.833,.833],y:[.843,.843,.833]},o:{x:[.167,.167,.167],y:[.169,.169,.167]},n:["0p833_0p843_0p167_0p169","0p833_0p843_0p167_0p169","0p833_0p833_0p167_0p167"],t:31,s:[101.176,101.176,100],e:[100.772,100.772,100]},{i:{x:[.833,.833,.833],y:[.848,.848,.833]},o:{x:[.167,.167,.167],y:[.177,.177,.167]},n:["0p833_0p848_0p167_0p177","0p833_0p848_0p167_0p177","0p833_0p833_0p167_0p167"],t:32,s:[100.772,100.772,100],e:[100.413,100.413,100]},{i:{x:[.833,.833,.833],y:[.854,.854,.833]},o:{x:[.167,.167,.167],y:[.185,.185,.167]},n:["0p833_0p854_0p167_0p185","0p833_0p854_0p167_0p185","0p833_0p833_0p167_0p167"],t:33,s:[100.413,100.413,100],e:[100.12,100.12,100]},{i:{x:[.833,.833,.833],y:[.86,.86,.833]},o:{x:[.167,.167,.167],y:[.194,.194,.167]},n:["0p833_0p86_0p167_0p194","0p833_0p86_0p167_0p194","0p833_0p833_0p167_0p167"],t:34,s:[100.12,100.12,100],e:[99.899,99.899,100]},{i:{x:[.833,.833,.833],y:[.869,.869,.833]},o:{x:[.167,.167,.167],y:[.207,.207,.167]},n:["0p833_0p869_0p167_0p207","0p833_0p869_0p167_0p207","0p833_0p833_0p167_0p167"],t:35,s:[99.899,99.899,100],e:[99.749,99.749,100]},{i:{x:[.833,.833,.833],y:[.886,.886,.833]},o:{x:[.167,.167,.167],y:[.23,.23,.167]},n:["0p833_0p886_0p167_0p23","0p833_0p886_0p167_0p23","0p833_0p833_0p167_0p167"],t:36,s:[99.749,99.749,100],e:[99.665,99.665,100]},{i:{x:[.833,.833,.833],y:[.945,.945,.833]},o:{x:[.167,.167,.167],y:[.313,.313,.167]},n:["0p833_0p945_0p167_0p313","0p833_0p945_0p167_0p313","0p833_0p833_0p167_0p167"],t:37,s:[99.665,99.665,100],e:[99.634,99.634,100]},{i:{x:[.833,.833,.833],y:[.608,.608,.833]},o:{x:[.167,.167,.167],y:[-.159,-.159,.167]},n:["0p833_0p608_0p167_-0p159","0p833_0p608_0p167_-0p159","0p833_0p833_0p167_0p167"],t:38,s:[99.634,99.634,100],e:[99.644,99.644,100]},{i:{x:[.833,.833,.833],y:[.797,.797,.833]},o:{x:[.167,.167,.167],y:[.106,.106,.167]},n:["0p833_0p797_0p167_0p106","0p833_0p797_0p167_0p106","0p833_0p833_0p167_0p167"],t:39,s:[99.644,99.644,100],e:[99.684,99.684,100]},{i:{x:[.833,.833,.833],y:[.823,.823,.833]},o:{x:[.167,.167,.167],y:[.141,.141,.167]},n:["0p833_0p823_0p167_0p141","0p833_0p823_0p167_0p141","0p833_0p833_0p167_0p167"],t:40,s:[99.684,99.684,100],e:[99.74,99.74,100]},{i:{x:[.833,.833,.833],y:[.834,.834,.833]},o:{x:[.167,.167,.167],y:[.157,.157,.167]},n:["0p833_0p834_0p167_0p157","0p833_0p834_0p167_0p157","0p833_0p833_0p167_0p167"],t:41,s:[99.74,99.74,100],e:[99.804,99.804,100]},{i:{x:[.833,.833,.833],y:[.841,.841,.833]},o:{x:[.167,.167,.167],y:[.167,.167,.167]},n:["0p833_0p841_0p167_0p167","0p833_0p841_0p167_0p167","0p833_0p833_0p167_0p167"],t:42,s:[99.804,99.804,100],e:[99.867,99.867,100]},{i:{x:[.833,.833,.833],y:[.847,.847,.833]},o:{x:[.167,.167,.167],y:[.175,.175,.167]},n:["0p833_0p847_0p167_0p175","0p833_0p847_0p167_0p175","0p833_0p833_0p167_0p167"],t:43,s:[99.867,99.867,100],e:[99.924,99.924,100]},{i:{x:[.833,.833,.833],y:[.853,.853,.833]},o:{x:[.167,.167,.167],y:[.183,.183,.167]},n:["0p833_0p853_0p167_0p183","0p833_0p853_0p167_0p183","0p833_0p833_0p167_0p167"],t:44,s:[99.924,99.924,100],e:[99.971,99.971,100]},{i:{x:[.833,.833,.833],y:[.859,.859,.833]},o:{x:[.167,.167,.167],y:[.192,.192,.167]},n:["0p833_0p859_0p167_0p192","0p833_0p859_0p167_0p192","0p833_0p833_0p167_0p167"],t:45,s:[99.971,99.971,100],e:[100.008,100.008,100]},{i:{x:[.833,.833,.833],y:[.867,.867,.833]},o:{x:[.167,.167,.167],y:[.203,.203,.167]},n:["0p833_0p867_0p167_0p203","0p833_0p867_0p167_0p203","0p833_0p833_0p167_0p167"],t:46,s:[100.008,100.008,100],e:[100.034,100.034,100]},{i:{x:[.833,.833,.833],y:[.881,.881,.833]},o:{x:[.167,.167,.167],y:[.222,.222,.167]},n:["0p833_0p881_0p167_0p222","0p833_0p881_0p167_0p222","0p833_0p833_0p167_0p167"],t:47,s:[100.034,100.034,100],e:[100.049,100.049,100]},{i:{x:[.833,.833,.833],y:[.919,.919,.833]},o:{x:[.167,.167,.167],y:[.277,.277,.167]},n:["0p833_0p919_0p167_0p277","0p833_0p919_0p167_0p277","0p833_0p833_0p167_0p167"],t:48,s:[100.049,100.049,100],e:[100.056,100.056,100]},{i:{x:[.833,.833,.833],y:[-.984,-.984,.833]},o:{x:[.167,.167,.167],y:[-2.381,-2.381,.167]},n:["0p833_-0p984_0p167_-2p381","0p833_-0p984_0p167_-2p381","0p833_0p833_0p167_0p167"],t:49,s:[100.056,100.056,100],e:[100.055,100.055,100]},{i:{x:[.833,.833,.833],y:[.784,.784,.833]},o:{x:[.167,.167,.167],y:[.087,.087,.167]},n:["0p833_0p784_0p167_0p087","0p833_0p784_0p167_0p087","0p833_0p833_0p167_0p167"],t:50,s:[100.055,100.055,100],e:[100.05,100.05,100]},{i:{x:[.833,.833,.833],y:[.818,.818,.833]},o:{x:[.167,.167,.167],y:[.136,.136,.167]},n:["0p833_0p818_0p167_0p136","0p833_0p818_0p167_0p136","0p833_0p833_0p167_0p167"],t:51,s:[100.05,100.05,100],e:[100.042,100.042,100]},{i:{x:[.833,.833,.833],y:[.832,.832,.833]},o:{x:[.167,.167,.167],y:[.154,.154,.167]},n:["0p833_0p832_0p167_0p154","0p833_0p832_0p167_0p154","0p833_0p833_0p167_0p167"],t:52,s:[100.042,100.042,100],e:[100.033,100.033,100]},{i:{x:[.833,.833,.833],y:[.84,.84,.833]},o:{x:[.167,.167,.167],y:[.165,.165,.167]},n:["0p833_0p84_0p167_0p165","0p833_0p84_0p167_0p165","0p833_0p833_0p167_0p167"],t:53,s:[100.033,100.033,100],e:[100.023,100.023,100]},{i:{x:[.833,.833,.833],y:[.846,.846,.833]},o:{x:[.167,.167,.167],y:[.173,.173,.167]},n:["0p833_0p846_0p167_0p173","0p833_0p846_0p167_0p173","0p833_0p833_0p167_0p167"],t:54,s:[100.023,100.023,100],e:[100.014,100.014,100]},{i:{x:[.833,.833,.833],y:[.851,.851,.833]},o:{x:[.167,.167,.167],y:[.181,.181,.167]},n:["0p833_0p851_0p167_0p181","0p833_0p851_0p167_0p181","0p833_0p833_0p167_0p167"],t:55,s:[100.014,100.014,100],e:[100.006,100.006,100]},{i:{x:[.833,.833,.833],y:[.857,.857,.833]},o:{x:[.167,.167,.167],y:[.189,.189,.167]},n:["0p833_0p857_0p167_0p189","0p833_0p857_0p167_0p189","0p833_0p833_0p167_0p167"],t:56,s:[100.006,100.006,100],e:[100,100,100]},{i:{x:[.833,.833,.833],y:[.864,.864,.833]},o:{x:[.167,.167,.167],y:[.2,.2,.167]},n:["0p833_0p864_0p167_0p2","0p833_0p864_0p167_0p2","0p833_0p833_0p167_0p167"],t:57,s:[100,100,100],e:[99.996,99.996,100]},{i:{x:[.833,.833,.833],y:[.876,.876,.833]},o:{x:[.167,.167,.167],y:[.216,.216,.167]},n:["0p833_0p876_0p167_0p216","0p833_0p876_0p167_0p216","0p833_0p833_0p167_0p167"],t:58,s:[99.996,99.996,100],e:[99.993,99.993,100]},{i:{x:[.833,.833,.833],y:[.833,.833,.833]},o:{x:[.167,.167,.167],y:[.255,.255,.167]},n:["0p833_0p833_0p167_0p255","0p833_0p833_0p167_0p255","0p833_0p833_0p167_0p167"],t:59,s:[99.993,99.993,100],e:[99.992,99.992,100]},{t:60}]}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ks:{a:0,k:{i:[[0,-88.366],[88.366,0],[0,88.366]],o:[[0,88.366],[-88.366,0],[0,-88.366]],v:[[80,0],[-80,160],[-240,0]],c:!1}},nm:"Path 1",mn:"ADBE Vector Shape - Group"},{ty:"st",c:{a:0,k:[.39215686274509803,.2627450980392157,.6509803921568628,1]},o:{a:0,k:100},w:{a:1,k:[{i:{x:[.667],y:[1]},o:{x:[.333],y:[0]},n:["0p667_1_0p333_0"],t:0,s:[80],e:[147]},{i:{x:[.667],y:[1]},o:{x:[.333],y:[0]},n:["0p667_1_0p333_0"],t:5,s:[147],e:[80]},{t:15}]},lc:2,lj:1,ml:4,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke"},{ty:"tr",p:{a:0,k:[0,20],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Ellipse 1",np:3,mn:"ADBE Vector Group"},{ty:"tm",s:{a:1,k:[{i:{x:[0],y:[1]},o:{x:[.333],y:[0]},n:["0_1_0p333_0"],t:3,s:[0],e:[99.9]},{t:18}],ix:1},e:{a:1,k:[{i:{x:[0],y:[1]},o:{x:[.333],y:[0]},n:["0_1_0p333_0"],t:0,s:[.1],e:[100]},{t:15}],ix:2},o:{a:0,k:0,ix:3},m:1,ix:2,nm:"Trim Paths 1",mn:"ADBE Vector Filter - Trim"}],ip:0,op:360,st:0,bm:0,sr:1},{ddd:0,ind:5,ty:4,nm:"Shape Layer 7",ks:{o:{a:0,k:100},r:{a:0,k:0},p:{a:1,k:[{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:0,s:[880,480,0],e:[880,480,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:1,s:[880,480,0],e:[880,480,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:2,s:[880,480,0],e:[880,480,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:3,s:[880,480,0],e:[880,480,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.833,y:.833},o:{x:.167,y:.167},n:"0p833_0p833_0p167_0p167",t:4,s:[880,480,0],e:[880,480,0],to:[0,0,0],ti:[0,0,0]},{i:{x:.833,y:.718},o:{x:.167,y:.083},n:"0p833_0p718_0p167_0p083",t:5,s:[880,480,0],e:[880,484.16,0],to:[-189478068516246e-28,.69334012269974,0],ti:[189478068516246e-28,-2.3468861579895,0]},{i:{x:.833,y:.817},o:{x:.167,y:.118},n:"0p833_0p817_0p167_0p118",t:6,s:[880,484.16,0],e:[880,494.081,0],to:[-189478068516246e-28,2.3468861579895,0],ti:[-189478068516246e-28,-3.62661719322205,0]},{i:{x:.833,y:.847},o:{x:.167,y:.153},n:"0p833_0p847_0p167_0p153",t:7,s:[880,494.081,0],e:[880,505.92,0],to:[189478068516246e-28,3.62661719322205,0],ti:[-189478068516246e-28,-3.62643098831177,0]},{i:{x:.833,y:.882},o:{x:.167,y:.183},n:"0p833_0p882_0p167_0p183",t:8,s:[880,505.92,0],e:[880,515.84,0],to:[189478068516246e-28,3.62643098831177,0],ti:[0,-2.34670925140381,0]},{i:{x:.833,y:.893},o:{x:.167,y:.282},n:"0p833_0p893_0p167_0p282",t:9,s:[880,515.84,0],e:[880,520,0],to:[0,2.34670925140381,0],ti:[0,-.64769965410233,0]},{i:{x:.833,y:.547},o:{x:.167,y:.375},n:"0p833_0p547_0p167_0p375",t:10,s:[880,520,0],e:[880,519.726,0],to:[0,.64769965410233,0],ti:[0,.92460745573044,0]},{i:{x:.833,y:.784},o:{x:.167,y:.102},n:"0p833_0p784_0p167_0p102",t:11,s:[880,519.726,0],e:[880,514.452,0],to:[0,-.92460745573044,0],ti:[189478068516246e-28,2.27949190139771,0]},{i:{x:.833,y:.814},o:{x:.167,y:.136},n:"0p833_0p814_0p167_0p136",t:12,s:[880,514.452,0],e:[880,506.049,0],to:[-189478068516246e-28,-2.27949190139771,0],ti:[0,3.12637186050415,0]},{i:{x:.833,y:.79},o:{x:.167,y:.151},n:"0p833_0p79_0p167_0p151",t:13,s:[880,506.049,0],e:[880,495.694,0],to:[0,-3.12637186050415,0],ti:[-189478068516246e-28,4.34152460098267,0]},{i:{x:.833,y:.783},o:{x:.167,y:.138},n:"0p833_0p783_0p167_0p138",t:14,s:[880,495.694,0],e:[880,480,0],to:[189478068516246e-28,-4.34152460098267,0],ti:[0,6.80367374420166,0]},{i:{x:.833,y:.864},o:{x:.167,y:.135},n:"0p833_0p864_0p167_0p135",t:15,s:[880,480,0],e:[880,454.872,0],to:[0,-6.80367374420166,0],ti:[0,6.81544876098633,0]},{i:{x:.833,y:.876},o:{x:.167,y:.216},n:"0p833_0p876_0p167_0p216",t:16,s:[880,454.872,0],e:[880,439.107,0],to:[0,-6.81544876098633,0],ti:[0,3.90252184867859,0]},{i:{x:.833,y:.9},o:{x:.167,y:.255},n:"0p833_0p9_0p167_0p255",t:17,s:[880,439.107,0],e:[880,431.457,0],to:[0,-3.90252184867859,0],ti:[0,1.4674072265625,0]},{i:{x:.833,y:.726},o:{x:.167,y:.489},n:"0p833_0p726_0p167_0p489",t:18,s:[880,431.457,0],e:[880,430.303,0],to:[0,-1.4674072265625,0],ti:[0,-.40824863314629,0]},{i:{x:.833,y:.762},o:{x:.167,y:.12},n:"0p833_0p762_0p167_0p12",t:19,s:[880,430.303,0],e:[880,433.906,0],to:[0,.40824863314629,0],ti:[0,-1.71581923961639,0]},{i:{x:.833,y:.813},o:{x:.167,y:.128},n:"0p833_0p813_0p167_0p128",t:20,s:[880,433.906,0],e:[880,440.598,0],to:[0,1.71581923961639,0],ti:[0,-2.49976849555969,0]},{i:{x:.833,y:.829},o:{x:.167,y:.15},n:"0p833_0p829_0p167_0p15",t:21,s:[880,440.598,0],e:[880,448.905,0],to:[0,2.49976849555969,0],ti:[0,-2.83863735198975,0]},{i:{x:.833,y:.838},o:{x:.167,y:.163},n:"0p833_0p838_0p167_0p163",t:22,s:[880,448.905,0],e:[880,457.63,0],to:[0,2.83863735198975,0],ti:[0,-2.82838201522827,0]},{i:{x:.833,y:.844},o:{x:.167,y:.172},n:"0p833_0p844_0p167_0p172",t:23,s:[880,457.63,0],e:[880,465.875,0],to:[0,2.82838201522827,0],ti:[0,-2.56888222694397,0]},{i:{x:.833,y:.85},o:{x:.167,y:.179},n:"0p833_0p85_0p167_0p179",t:24,s:[880,465.875,0],e:[880,473.043,0],to:[0,2.56888222694397,0],ti:[0,-2.15392565727234,0]},{i:{x:.833,y:.855},o:{x:.167,y:.187},n:"0p833_0p855_0p167_0p187",t:25,s:[880,473.043,0],e:[880,478.799,0],to:[0,2.15392565727234,0],ti:[0,-1.66457295417786,0]},{i:{x:.833,y:.862},o:{x:.167,y:.197},n:"0p833_0p862_0p167_0p197",t:26,s:[880,478.799,0],e:[880,483.03,0],to:[0,1.66457295417786,0],ti:[0,-1.16553914546967,0]},{i:{x:.833,y:.873},o:{x:.167,y:.211},n:"0p833_0p873_0p167_0p211",t:27,s:[880,483.03,0],e:[880,485.792,0],to:[0,1.16553914546967,0],ti:[0,-.70405745506287,0]},{i:{x:.833,y:.894},o:{x:.167,y:.241},n:"0p833_0p894_0p167_0p241",t:28,s:[880,485.792,0],e:[880,487.255,0],to:[0,.70405745506287,0],ti:[0,-.31062442064285,0]},{i:{x:.833,y:.835},o:{x:.167,y:.387},n:"0p833_0p835_0p167_0p387",t:29,s:[880,487.255,0],e:[880,487.656,0],to:[0,.31062442064285,0],ti:[0,-.00102502817754,0]},{i:{x:.833,y:.72},o:{x:.167,y:.168},n:"0p833_0p72_0p167_0p168",t:30,s:[880,487.656,0],e:[880,487.261,0],to:[0,.00102502817754,0],ti:[0,.22090400755405,0]},{i:{x:.833,y:.806},o:{x:.167,y:.119},n:"0p833_0p806_0p167_0p119",t:31,s:[880,487.261,0],e:[880,486.33,0],to:[0,-.22090400755405,0],ti:[0,.36022943258286,0]},{i:{x:.833,y:.826},o:{x:.167,y:.146},n:"0p833_0p826_0p167_0p146",t:32,s:[880,486.33,0],e:[880,485.099,0],to:[0,-.36022943258286,0],ti:[0,.42794588208199,0]},{i:{x:.833,y:.836},o:{x:.167,y:.16},n:"0p833_0p836_0p167_0p16",t:33,s:[880,485.099,0],e:[880,483.763,0],to:[0,-.42794588208199,0],ti:[0,.43831527233124,0]},{i:{x:.833,y:.843},o:{x:.167,y:.169},n:"0p833_0p843_0p167_0p169",t:34,s:[880,483.763,0],e:[880,482.47,0],to:[0,-.43831527233124,0],ti:[0,.40666928887367,0]},{i:{x:.833,y:.848},o:{x:.167,y:.177},n:"0p833_0p848_0p167_0p177",t:35,s:[880,482.47,0],e:[880,481.323,0],to:[0,-.40666928887367,0],ti:[0,.34773921966553,0]},{i:{x:.833,y:.854},o:{x:.167,y:.185},n:"0p833_0p854_0p167_0p185",t:36,s:[880,481.323,0],e:[880,480.383,0],to:[0,-.34773921966553,0],ti:[0,.27451291680336,0]},{i:{x:.833,y:.86},o:{x:.167,y:.194},n:"0p833_0p86_0p167_0p194",t:37,s:[880,480.383,0],e:[880,479.676,0],to:[0,-.27451291680336,0],ti:[0,.19757102429867,0]},{i:{x:.833,y:.869},o:{x:.167,y:.207},n:"0p833_0p869_0p167_0p207",t:38,s:[880,479.676,0],e:[880,479.198,0],to:[0,-.19757102429867,0],ti:[0,.12482621520758,0]},{i:{x:.833,y:.886},o:{x:.167,y:.23},n:"0p833_0p886_0p167_0p23",t:39,s:[880,479.198,0],e:[880,478.927,0],to:[0,-.12482621520758,0],ti:[0,.06157397851348,0]},{i:{x:.833,y:.883},o:{x:.167,y:.313},n:"0p833_0p883_0p167_0p313",t:40,s:[880,478.927,0],e:[880,478.828,0],to:[0,-.06157397851348,0],ti:[0,.01076242513955,0]},{i:{x:.833,y:.656},o:{x:.167,y:.287},n:"0p833_0p656_0p167_0p287",t:41,s:[880,478.828,0],e:[880,478.862,0],to:[0,-.01076242513955,0],ti:[0,-.02660511806607,0]},{i:{x:.833,y:.797},o:{x:.167,y:.11},n:"0p833_0p797_0p167_0p11",t:42,s:[880,478.862,0],e:[880,478.988,0],to:[0,.02660511806607,0],ti:[0,-.05100827664137,0]},{i:{x:.833,y:.823},o:{x:.167,y:.141},n:"0p833_0p823_0p167_0p141",t:43,s:[880,478.988,0],e:[880,479.168,0],to:[0,.05100827664137,0],ti:[0,-.06394649296999,0]},{i:{x:.833,y:.834},o:{x:.167,y:.157},n:"0p833_0p834_0p167_0p157",t:44,s:[880,479.168,0],e:[880,479.372,0],to:[0,.06394649296999,0],ti:[0,-.06751627475023,0]},{i:{x:.833,y:.841},o:{x:.167,y:.167},n:"0p833_0p841_0p167_0p167",t:45,s:[880,479.372,0],e:[880,479.573,0],to:[0,.06751627475023,0],ti:[0,-.06405504047871,0]},{i:{x:.833,y:.847},o:{x:.167,y:.175},n:"0p833_0p847_0p167_0p175",t:46,s:[880,479.573,0],e:[880,479.756,0],to:[0,.06405504047871,0],ti:[0,-.05586441606283,0]},{i:{x:.833,y:.853},o:{x:.167,y:.183},n:"0p833_0p853_0p167_0p183",t:47,s:[880,479.756,0],e:[880,479.908,0],to:[0,.05586441606283,0],ti:[0,-.04501524940133,0]},{i:{x:.833,y:.859},o:{x:.167,y:.192},n:"0p833_0p859_0p167_0p192",t:48,s:[880,479.908,0],e:[880,480.026,0],to:[0,.04501524940133,0],ti:[0,-.03322834894061,0]},{i:{x:.833,y:.867},o:{x:.167,y:.203},n:"0p833_0p867_0p167_0p203",t:49,s:[880,480.026,0],e:[880,480.108,0],to:[0,.03322834894061,0],ti:[0,-.02182034961879,0]},{i:{x:.833,y:.881},o:{x:.167,y:.222},n:"0p833_0p881_0p167_0p222",t:50,s:[880,480.108,0],e:[880,480.157,0],to:[0,.02182034961879,0],ti:[0,-.01170086674392,0]},{i:{x:.833,y:.898},o:{x:.167,y:.277},n:"0p833_0p898_0p167_0p277",t:51,s:[880,480.157,0],e:[880,480.178,0],to:[0,.01170086674392,0],ti:[0,-.00340680335648,0]},{i:{x:.833,y:.633},o:{x:.167,y:.45},n:"0p833_0p633_0p167_0p45",t:52,s:[880,480.178,0],e:[880,480.177,0],to:[0,.00340680335648,0],ti:[0,.00283987051807,0]},{i:{x:.833,y:.784},o:{x:.167,y:.108},n:"0p833_0p784_0p167_0p108",t:53,s:[880,480.177,0],e:[880,480.161,0],to:[0,-.00283987051807,0],ti:[0,.00706263212487,0]},{i:{x:.833,y:.818},o:{x:.167,y:.136},n:"0p833_0p818_0p167_0p136",t:54,s:[880,480.161,0],e:[880,480.135,0],to:[0,-.00706263212487,0],ti:[0,.00945873651654,0]},{i:{x:.833,y:.832},o:{x:.167,y:.154},n:"0p833_0p832_0p167_0p154",t:55,s:[880,480.135,0],e:[880,480.104,0],to:[0,-.00945873651654,0],ti:[0,.01033237110823,0]},{i:{x:.833,y:.84},o:{x:.167,y:.165},n:"0p833_0p84_0p167_0p165",t:56,s:[880,480.104,0],e:[880,480.073,0],to:[0,-.01033237110823,0],ti:[0,.01003722194582,0]},{i:{x:.833,y:.846},o:{x:.167,y:.173},n:"0p833_0p846_0p167_0p173",t:57,s:[880,480.073,0],e:[880,480.044,0],to:[0,-.01003722194582,0],ti:[0,.00893091596663,0]},{i:{x:.833,y:.851},o:{x:.167,y:.181},n:"0p833_0p851_0p167_0p181",t:58,s:[880,480.044,0],e:[880,480.019,0],to:[0,-.00893091596663,0],ti:[0,.00734201865271,0]},{i:{x:.833,y:.833},o:{x:.167,y:.189},n:"0p833_0p833_0p167_0p189",t:59,s:[880,480.019,0],e:[880,480,0],to:[0,-.00734201865271,0],ti:[0,.00323267048225,0]},{t:60}]},a:{a:0,k:[-80,180,0]},s:{a:1,k:[{i:{x:[.833,.833,.833],y:[.833,.833,.833]},o:{x:[.167,.167,.167],y:[.167,.167,.167]},n:["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],t:0,s:[100,100,100],e:[100,100,100]},{i:{x:[.833,.833,.833],y:[.833,.833,.833]},o:{x:[.167,.167,.167],y:[.167,.167,.167]},n:["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],t:1,s:[100,100,100],e:[100,100,100]},{i:{x:[.833,.833,.833],y:[.833,.833,.833]},o:{x:[.167,.167,.167],y:[.167,.167,.167]},n:["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],t:2,s:[100,100,100],e:[100,100,100]},{i:{x:[.833,.833,.833],y:[.833,.833,.833]},o:{x:[.167,.167,.167],y:[.167,.167,.167]},n:["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],t:3,s:[100,100,100],e:[100,100,100]},{i:{x:[.833,.833,.833],y:[.833,.833,.833]},o:{x:[.167,.167,.167],y:[.167,.167,.167]},n:["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],t:4,s:[100,100,100],e:[100,100,100]},{i:{x:[.833,.833,.833],y:[.833,.833,.833]},o:{x:[.167,.167,.167],y:[.167,.167,.167]},n:["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],t:5,s:[100,100,100],e:[100,100,100]},{i:{x:[.833,.833,.833],y:[.833,.833,.833]},o:{x:[.167,.167,.167],y:[.167,.167,.167]},n:["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],t:6,s:[100,100,100],e:[100,100,100]},{i:{x:[.833,.833,.833],y:[.718,.718,.833]},o:{x:[.167,.167,.167],y:[.083,.083,.167]},n:["0p833_0p718_0p167_0p083","0p833_0p718_0p167_0p083","0p833_0p833_0p167_0p167"],t:7,s:[100,100,100],e:[101.04,101.04,100]},{i:{x:[.833,.833,.833],y:[.817,.817,.833]},o:{x:[.167,.167,.167],y:[.118,.118,.167]},n:["0p833_0p817_0p167_0p118","0p833_0p817_0p167_0p118","0p833_0p833_0p167_0p167"],t:8,s:[101.04,101.04,100],e:[103.52,103.52,100]},{i:{x:[.833,.833,.833],y:[.847,.847,.833]},o:{x:[.167,.167,.167],y:[.153,.153,.167]},n:["0p833_0p847_0p167_0p153","0p833_0p847_0p167_0p153","0p833_0p833_0p167_0p167"],t:9,s:[103.52,103.52,100],e:[106.48,106.48,100]},{i:{x:[.833,.833,.833],y:[.882,.882,.833]},o:{x:[.167,.167,.167],y:[.183,.183,.167]},n:["0p833_0p882_0p167_0p183","0p833_0p882_0p167_0p183","0p833_0p833_0p167_0p167"],t:10,s:[106.48,106.48,100],e:[108.96,108.96,100]},{i:{x:[.833,.833,.833],y:[.913,.913,.833]},o:{x:[.167,.167,.167],y:[.282,.282,.167]},n:["0p833_0p913_0p167_0p282","0p833_0p913_0p167_0p282","0p833_0p833_0p167_0p167"],t:11,s:[108.96,108.96,100],e:[110,110,100]},{i:{x:[.833,.833,.833],y:[3.067,3.067,.833]},o:{x:[.167,.167,.167],y:[1.88,1.88,.167]},n:["0p833_3p067_0p167_1p88","0p833_3p067_0p167_1p88","0p833_0p833_0p167_0p167"],t:12,s:[110,110,100],e:[110.048,110.048,100]},{i:{x:[.833,.833,.833],y:[.778,.778,.833]},o:{x:[.167,.167,.167],y:[.08,.08,.167]},n:["0p833_0p778_0p167_0p08","0p833_0p778_0p167_0p08","0p833_0p833_0p167_0p167"],t:13,s:[110.048,110.048,100],e:[108.803,108.803,100]},{i:{x:[.833,.833,.833],y:[.812,.812,.833]},o:{x:[.167,.167,.167],y:[.134,.134,.167]},n:["0p833_0p812_0p167_0p134","0p833_0p812_0p167_0p134","0p833_0p833_0p167_0p167"],t:14,s:[108.803,108.803,100],e:[106.737,106.737,100]},{i:{x:[.833,.833,.833],y:[.783,.783,.833]},o:{x:[.167,.167,.167],y:[.15,.15,.167]},n:["0p833_0p783_0p167_0p15","0p833_0p783_0p167_0p15","0p833_0p833_0p167_0p167"],t:15,s:[106.737,106.737,100],e:[104.153,104.153,100]},{i:{x:[.833,.833,.833],y:[.759,.759,.833]},o:{x:[.167,.167,.167],y:[.135,.135,.167]},n:["0p833_0p759_0p167_0p135","0p833_0p759_0p167_0p135","0p833_0p833_0p167_0p167"],t:16,s:[104.153,104.153,100],e:[100,100,100]},{i:{x:[.833,.833,.833],y:[.864,.864,.833]},o:{x:[.167,.167,.167],y:[.127,.127,.167]},n:["0p833_0p864_0p167_0p127","0p833_0p864_0p167_0p127","0p833_0p833_0p167_0p167"],t:17,s:[100,100,100],e:[92.146,92.146,100]},{i:{x:[.833,.833,.833],y:[.876,.876,.833]},o:{x:[.167,.167,.167],y:[.216,.216,.167]},n:["0p833_0p876_0p167_0p216","0p833_0p876_0p167_0p216","0p833_0p833_0p167_0p167"],t:18,s:[92.146,92.146,100],e:[87.218,87.218,100]},{i:{x:[.833,.833,.833],y:[.904,.904,.833]},o:{x:[.167,.167,.167],y:[.255,.255,.167]},n:["0p833_0p904_0p167_0p255","0p833_0p904_0p167_0p255","0p833_0p833_0p167_0p167"],t:19,s:[87.218,87.218,100],e:[84.827,84.827,100]},{i:{x:[.833,.833,.833],y:[1.177,1.177,.833]},o:{x:[.167,.167,.167],y:[.636,.636,.167]},n:["0p833_1p177_0p167_0p636","0p833_1p177_0p167_0p636","0p833_0p833_0p167_0p167"],t:20,s:[84.827,84.827,100],e:[84.466,84.466,100]},{i:{x:[.833,.833,.833],y:[.762,.762,.833]},o:{x:[.167,.167,.167],y:[.057,.057,.167]},n:["0p833_0p762_0p167_0p057","0p833_0p762_0p167_0p057","0p833_0p833_0p167_0p167"],t:21,s:[84.466,84.466,100],e:[85.592,85.592,100]},{i:{x:[.833,.833,.833],y:[.813,.813,.833]},o:{x:[.167,.167,.167],y:[.128,.128,.167]},n:["0p833_0p813_0p167_0p128","0p833_0p813_0p167_0p128","0p833_0p833_0p167_0p167"],t:22,s:[85.592,85.592,100],e:[87.684,87.684,100]},{i:{x:[.833,.833,.833],y:[.829,.829,.833]},o:{x:[.167,.167,.167],y:[.15,.15,.167]},n:["0p833_0p829_0p167_0p15","0p833_0p829_0p167_0p15","0p833_0p833_0p167_0p167"],t:23,s:[87.684,87.684,100],e:[90.28,90.28,100]},{i:{x:[.833,.833,.833],y:[.838,.838,.833]},o:{x:[.167,.167,.167],y:[.163,.163,.167]},n:["0p833_0p838_0p167_0p163","0p833_0p838_0p167_0p163","0p833_0p833_0p167_0p167"],t:24,s:[90.28,90.28,100],e:[93.008,93.008,100]},{i:{x:[.833,.833,.833],y:[.844,.844,.833]},o:{x:[.167,.167,.167],y:[.172,.172,.167]},n:["0p833_0p844_0p167_0p172","0p833_0p844_0p167_0p172","0p833_0p833_0p167_0p167"],t:25,s:[93.008,93.008,100],e:[95.585,95.585,100]},{i:{x:[.833,.833,.833],y:[.85,.85,.833]},o:{x:[.167,.167,.167],y:[.179,.179,.167]},n:["0p833_0p85_0p167_0p179","0p833_0p85_0p167_0p179","0p833_0p833_0p167_0p167"],t:26,s:[95.585,95.585,100],e:[97.825,97.825,100]},{i:{x:[.833,.833,.833],y:[.855,.855,.833]},o:{x:[.167,.167,.167],y:[.187,.187,.167]},n:["0p833_0p855_0p167_0p187","0p833_0p855_0p167_0p187","0p833_0p833_0p167_0p167"],t:27,s:[97.825,97.825,100],e:[99.625,99.625,100]},{i:{x:[.833,.833,.833],y:[.862,.862,.833]},o:{x:[.167,.167,.167],y:[.197,.197,.167]},n:["0p833_0p862_0p167_0p197","0p833_0p862_0p167_0p197","0p833_0p833_0p167_0p167"],t:28,s:[99.625,99.625,100],e:[100.947,100.947,100]},{i:{x:[.833,.833,.833],y:[.873,.873,.833]},o:{x:[.167,.167,.167],y:[.211,.211,.167]},n:["0p833_0p873_0p167_0p211","0p833_0p873_0p167_0p211","0p833_0p833_0p167_0p167"],t:29,s:[100.947,100.947,100],e:[101.81,101.81,100]},{i:{x:[.833,.833,.833],y:[.894,.894,.833]},o:{x:[.167,.167,.167],y:[.241,.241,.167]},n:["0p833_0p894_0p167_0p241","0p833_0p894_0p167_0p241","0p833_0p833_0p167_0p167"],t:30,s:[101.81,101.81,100],e:[102.268,102.268,100]},{i:{x:[.833,.833,.833],y:[.999,.999,.833]},o:{x:[.167,.167,.167],y:[.387,.387,.167]},n:["0p833_0p999_0p167_0p387","0p833_0p999_0p167_0p387","0p833_0p833_0p167_0p167"],t:31,s:[102.268,102.268,100],e:[102.393,102.393,100]},{i:{x:[.833,.833,.833],y:[.72,.72,.833]},o:{x:[.167,.167,.167],y:[-.001,-.001,.167]},n:["0p833_0p72_0p167_-0p001","0p833_0p72_0p167_-0p001","0p833_0p833_0p167_0p167"],t:32,s:[102.393,102.393,100],e:[102.27,102.27,100]},{i:{x:[.833,.833,.833],y:[.806,.806,.833]},o:{x:[.167,.167,.167],y:[.119,.119,.167]},n:["0p833_0p806_0p167_0p119","0p833_0p806_0p167_0p119","0p833_0p833_0p167_0p167"],t:33,s:[102.27,102.27,100],e:[101.979,101.979,100]},{i:{x:[.833,.833,.833],y:[.826,.826,.833]},o:{x:[.167,.167,.167],y:[.146,.146,.167]},n:["0p833_0p826_0p167_0p146","0p833_0p826_0p167_0p146","0p833_0p833_0p167_0p167"],t:34,s:[101.979,101.979,100],e:[101.594,101.594,100]},{i:{x:[.833,.833,.833],y:[.836,.836,.833]},o:{x:[.167,.167,.167],y:[.16,.16,.167]},n:["0p833_0p836_0p167_0p16","0p833_0p836_0p167_0p16","0p833_0p833_0p167_0p167"],t:35,s:[101.594,101.594,100],e:[101.176,101.176,100]},{i:{x:[.833,.833,.833],y:[.843,.843,.833]},o:{x:[.167,.167,.167],y:[.169,.169,.167]},n:["0p833_0p843_0p167_0p169","0p833_0p843_0p167_0p169","0p833_0p833_0p167_0p167"],t:36,s:[101.176,101.176,100],e:[100.772,100.772,100]},{i:{x:[.833,.833,.833],y:[.848,.848,.833]},o:{x:[.167,.167,.167],y:[.177,.177,.167]},n:["0p833_0p848_0p167_0p177","0p833_0p848_0p167_0p177","0p833_0p833_0p167_0p167"],t:37,s:[100.772,100.772,100],e:[100.413,100.413,100]},{i:{x:[.833,.833,.833],y:[.854,.854,.833]},o:{x:[.167,.167,.167],y:[.185,.185,.167]},n:["0p833_0p854_0p167_0p185","0p833_0p854_0p167_0p185","0p833_0p833_0p167_0p167"],t:38,s:[100.413,100.413,100],e:[100.12,100.12,100]},{i:{x:[.833,.833,.833],y:[.86,.86,.833]},o:{x:[.167,.167,.167],y:[.194,.194,.167]},n:["0p833_0p86_0p167_0p194","0p833_0p86_0p167_0p194","0p833_0p833_0p167_0p167"],t:39,s:[100.12,100.12,100],e:[99.899,99.899,100]},{i:{x:[.833,.833,.833],y:[.869,.869,.833]},o:{x:[.167,.167,.167],y:[.207,.207,.167]},n:["0p833_0p869_0p167_0p207","0p833_0p869_0p167_0p207","0p833_0p833_0p167_0p167"],t:40,s:[99.899,99.899,100],e:[99.749,99.749,100]},{i:{x:[.833,.833,.833],y:[.886,.886,.833]},o:{x:[.167,.167,.167],y:[.23,.23,.167]},n:["0p833_0p886_0p167_0p23","0p833_0p886_0p167_0p23","0p833_0p833_0p167_0p167"],t:41,s:[99.749,99.749,100],e:[99.665,99.665,100]},{i:{x:[.833,.833,.833],y:[.945,.945,.833]},o:{x:[.167,.167,.167],y:[.313,.313,.167]},n:["0p833_0p945_0p167_0p313","0p833_0p945_0p167_0p313","0p833_0p833_0p167_0p167"],t:42,s:[99.665,99.665,100],e:[99.634,99.634,100]},{i:{x:[.833,.833,.833],y:[.608,.608,.833]},o:{x:[.167,.167,.167],y:[-.159,-.159,.167]},n:["0p833_0p608_0p167_-0p159","0p833_0p608_0p167_-0p159","0p833_0p833_0p167_0p167"],t:43,s:[99.634,99.634,100],e:[99.644,99.644,100]},{i:{x:[.833,.833,.833],y:[.797,.797,.833]},o:{x:[.167,.167,.167],y:[.106,.106,.167]},n:["0p833_0p797_0p167_0p106","0p833_0p797_0p167_0p106","0p833_0p833_0p167_0p167"],t:44,s:[99.644,99.644,100],e:[99.684,99.684,100]},{i:{x:[.833,.833,.833],y:[.823,.823,.833]},o:{x:[.167,.167,.167],y:[.141,.141,.167]},n:["0p833_0p823_0p167_0p141","0p833_0p823_0p167_0p141","0p833_0p833_0p167_0p167"],t:45,s:[99.684,99.684,100],e:[99.74,99.74,100]},{i:{x:[.833,.833,.833],y:[.834,.834,.833]},o:{x:[.167,.167,.167],y:[.157,.157,.167]},n:["0p833_0p834_0p167_0p157","0p833_0p834_0p167_0p157","0p833_0p833_0p167_0p167"],t:46,s:[99.74,99.74,100],e:[99.804,99.804,100]},{i:{x:[.833,.833,.833],y:[.841,.841,.833]},o:{x:[.167,.167,.167],y:[.167,.167,.167]},n:["0p833_0p841_0p167_0p167","0p833_0p841_0p167_0p167","0p833_0p833_0p167_0p167"],t:47,s:[99.804,99.804,100],e:[99.867,99.867,100]},{i:{x:[.833,.833,.833],y:[.847,.847,.833]},o:{x:[.167,.167,.167],y:[.175,.175,.167]},n:["0p833_0p847_0p167_0p175","0p833_0p847_0p167_0p175","0p833_0p833_0p167_0p167"],t:48,s:[99.867,99.867,100],e:[99.924,99.924,100]},{i:{x:[.833,.833,.833],y:[.853,.853,.833]},o:{x:[.167,.167,.167],y:[.183,.183,.167]},n:["0p833_0p853_0p167_0p183","0p833_0p853_0p167_0p183","0p833_0p833_0p167_0p167"],t:49,s:[99.924,99.924,100],e:[99.971,99.971,100]},{i:{x:[.833,.833,.833],y:[.859,.859,.833]},o:{x:[.167,.167,.167],y:[.192,.192,.167]},n:["0p833_0p859_0p167_0p192","0p833_0p859_0p167_0p192","0p833_0p833_0p167_0p167"],t:50,s:[99.971,99.971,100],e:[100.008,100.008,100]},{i:{x:[.833,.833,.833],y:[.867,.867,.833]},o:{x:[.167,.167,.167],y:[.203,.203,.167]},n:["0p833_0p867_0p167_0p203","0p833_0p867_0p167_0p203","0p833_0p833_0p167_0p167"],t:51,s:[100.008,100.008,100],e:[100.034,100.034,100]},{i:{x:[.833,.833,.833],y:[.881,.881,.833]},o:{x:[.167,.167,.167],y:[.222,.222,.167]},n:["0p833_0p881_0p167_0p222","0p833_0p881_0p167_0p222","0p833_0p833_0p167_0p167"],t:52,s:[100.034,100.034,100],e:[100.049,100.049,100]},{i:{x:[.833,.833,.833],y:[.919,.919,.833]},o:{x:[.167,.167,.167],y:[.277,.277,.167]},n:["0p833_0p919_0p167_0p277","0p833_0p919_0p167_0p277","0p833_0p833_0p167_0p167"],t:53,s:[100.049,100.049,100],e:[100.056,100.056,100]},{i:{x:[.833,.833,.833],y:[-.984,-.984,.833]},o:{x:[.167,.167,.167],y:[-2.381,-2.381,.167]},n:["0p833_-0p984_0p167_-2p381","0p833_-0p984_0p167_-2p381","0p833_0p833_0p167_0p167"],t:54,s:[100.056,100.056,100],e:[100.055,100.055,100]},{i:{x:[.833,.833,.833],y:[.784,.784,.833]},o:{x:[.167,.167,.167],y:[.087,.087,.167]},n:["0p833_0p784_0p167_0p087","0p833_0p784_0p167_0p087","0p833_0p833_0p167_0p167"],t:55,s:[100.055,100.055,100],e:[100.05,100.05,100]},{i:{x:[.833,.833,.833],y:[.818,.818,.833]},o:{x:[.167,.167,.167],y:[.136,.136,.167]},n:["0p833_0p818_0p167_0p136","0p833_0p818_0p167_0p136","0p833_0p833_0p167_0p167"],t:56,s:[100.05,100.05,100],e:[100.042,100.042,100]},{i:{x:[.833,.833,.833],y:[.832,.832,.833]},o:{x:[.167,.167,.167],y:[.154,.154,.167]},n:["0p833_0p832_0p167_0p154","0p833_0p832_0p167_0p154","0p833_0p833_0p167_0p167"],t:57,s:[100.042,100.042,100],e:[100.033,100.033,100]},{i:{x:[.833,.833,.833],y:[.84,.84,.833]},o:{x:[.167,.167,.167],y:[.165,.165,.167]},n:["0p833_0p84_0p167_0p165","0p833_0p84_0p167_0p165","0p833_0p833_0p167_0p167"],t:58,s:[100.033,100.033,100],e:[100.023,100.023,100]},{i:{x:[.833,.833,.833],y:[.833,.833,.833]},o:{x:[.167,.167,.167],y:[.173,.173,.167]},n:["0p833_0p833_0p167_0p173","0p833_0p833_0p167_0p173","0p833_0p833_0p167_0p167"],t:59,s:[100.023,100.023,100],e:[100.014,100.014,100]},{t:60}]}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ks:{a:0,k:{i:[[0,-88.366],[88.366,0],[0,88.366]],o:[[0,88.366],[-88.366,0],[0,-88.366]],v:[[240,0],[80,160],[-80,0]],c:!1}},nm:"Path 1",mn:"ADBE Vector Shape - Group"},{ty:"st",c:{a:0,k:[.39215686274509803,.2627450980392157,.6509803921568628,1]},o:{a:0,k:100},w:{a:1,k:[{i:{x:[.667],y:[1]},o:{x:[.333],y:[0]},n:["0p667_1_0p333_0"],t:5,s:[80],e:[120]},{i:{x:[.667],y:[1]},o:{x:[.333],y:[0]},n:["0p667_1_0p333_0"],t:10,s:[120],e:[80]},{t:20}]},lc:2,lj:1,ml:4,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke"},{ty:"tr",p:{a:0,k:[0,180],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Ellipse 1",np:3,mn:"ADBE Vector Group"},{ty:"tm",s:{a:1,k:[{i:{x:[0],y:[1]},o:{x:[.333],y:[0]},n:["0_1_0p333_0"],t:9,s:[0],e:[99.9]},{t:24}],ix:1},e:{a:1,k:[{i:{x:[0],y:[1]},o:{x:[.333],y:[0]},n:["0_1_0p333_0"],t:5,s:[.1],e:[100]},{t:20}],ix:2},o:{a:0,k:0,ix:3},m:1,ix:2,nm:"Trim Paths 1",mn:"ADBE Vector Filter - Trim"}],ip:0,op:360,st:0,bm:0,sr:1}],animationData={v:v,fr:fr,ip:ip,op:op,w:w,h:h,ddd:ddd,assets:assets,layers:layers};const LottieLoadingDotsSpinner=({color:e=getColors(animationData)[0]})=>{const t={animationData:flatten(e,animationData),loop:!0,autoplay:!0,style:{height:"200px",width:"200px"}},{View:r}=useLottie(t);return jsx(Fragment,{children:r})},LoadingDotsSpinner=({color:e,id:t,"data-testid":r})=>{const i=useTheme(),a=e||Color.Primary({theme:i||BaseTheme});return jsx(Container$k,{"data-testid":r,id:t,children:jsx(LottieLoadingDotsSpinner,{color:a})})},Container$k=styled.div`
    margin: 0 auto;
`;var chevronDown={},ChevronDownIcon;Object.defineProperty(chevronDown,"__esModule",{value:!0});var e$i=require$$0;const r$5=e=>e$i.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:e$i.jsx("path",{d:"M2.62611 5.81312C2.84811 5.59112 3.10478 5.48012 3.39611 5.48012C3.68811 5.48012 3.94511 5.59112 4.16711 5.81312L10.1881 11.8341L16.2301 5.79212C16.4381 5.58412 16.6881 5.48012 16.9801 5.48012C17.2714 5.48012 17.5281 5.59112 17.7501 5.81312C17.9588 6.02179 18.0631 6.27545 18.0631 6.57412C18.0631 6.87279 17.9588 7.12612 17.7501 7.33412L10.8131 14.2721C10.7158 14.3688 10.6151 14.4381 10.5111 14.4801C10.4071 14.5215 10.2994 14.5421 10.1881 14.5421C10.0768 14.5421 9.96911 14.5215 9.86511 14.4801C9.76111 14.4381 9.66044 14.3688 9.56311 14.2721L2.60511 7.31312C2.38244 7.09112 2.27811 6.83779 2.29211 6.55312C2.30611 6.26845 2.41744 6.02179 2.62611 5.81312Z",fill:"currentColor"})});r$5.displayName="ChevronDownIcon",ChevronDownIcon=chevronDown.ChevronDownIcon=r$5;var exclamationCircleFill={},ExclamationCircleFillIcon;Object.defineProperty(exclamationCircleFill,"__esModule",{value:!0});var C$c=require$$0;const e$h=e=>C$c.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:C$c.jsx("path",{d:"M9.99999 10.792C10.236 10.792 10.441 10.705 10.615 10.531C10.7883 10.3577 10.875 10.153 10.875 9.91701V6.70801C10.875 6.47201 10.7883 6.27067 10.615 6.10401C10.441 5.93734 10.236 5.85401 9.99999 5.85401C9.76399 5.85401 9.55899 5.94101 9.38499 6.11501C9.21166 6.28834 9.12499 6.49301 9.12499 6.72901V9.93801C9.12499 10.174 9.21166 10.3753 9.38499 10.542C9.55899 10.7087 9.76399 10.792 9.99999 10.792ZM9.99999 14.188C10.236 14.188 10.441 14.108 10.615 13.948C10.7883 13.788 10.875 13.576 10.875 13.312C10.875 13.076 10.7883 12.8713 10.615 12.698C10.441 12.5247 10.236 12.438 9.99999 12.438C9.76399 12.438 9.55899 12.5247 9.38499 12.698C9.21166 12.8713 9.12499 13.076 9.12499 13.312C9.12499 13.576 9.21166 13.788 9.38499 13.948C9.55899 14.108 9.76399 14.188 9.99999 14.188ZM9.99999 18.333C8.84733 18.333 7.76399 18.1143 6.74999 17.677C5.73599 17.2397 4.85399 16.646 4.10399 15.896C3.35399 15.146 2.76033 14.264 2.32299 13.25C1.88566 12.236 1.66699 11.1527 1.66699 10C1.66699 8.84734 1.88566 7.76401 2.32299 6.75001C2.76033 5.73601 3.35399 4.85401 4.10399 4.10401C4.85399 3.35401 5.73599 2.76034 6.74999 2.32301C7.76399 1.88567 8.84733 1.66701 9.99999 1.66701C11.1527 1.66701 12.236 1.88567 13.25 2.32301C14.264 2.76034 15.146 3.35401 15.896 4.10401C16.646 4.85401 17.2397 5.73601 17.677 6.75001C18.1143 7.76401 18.333 8.84734 18.333 10C18.333 11.1527 18.1143 12.236 17.677 13.25C17.2397 14.264 16.646 15.146 15.896 15.896C15.146 16.646 14.264 17.2397 13.25 17.677C12.236 18.1143 11.1527 18.333 9.99999 18.333Z",fill:"currentColor"})});e$h.displayName="ExclamationCircleFillIcon",ExclamationCircleFillIcon=exclamationCircleFill.ExclamationCircleFillIcon=e$h;const Container$j=styled.div`
    border: 1px solid ${Color.Neutral[5]};
    border-radius: 4px;
    margin-bottom: 2rem;
`,Expandable$1=styled(animated.div)`
    overflow: hidden;
`,NonExpandable=styled.div`
    height: max-content;
`,ChildContainer$1=styled.div`
    border-top: 1px solid ${Color.Neutral[5]};
`,Header$1=styled.div`
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${MediaQuery.MaxWidth.mobileM} {
        padding: 1rem;
    }
`,LabelText=styled(Text.H3)`
    word-wrap: break-word;
    margin-right: 2rem;
    display: block;
    flex: 1;

    ${MediaQuery.MaxWidth.mobileM} {
        ${TextStyleHelper.getTextStyle("BodySmall","semibold")}
        margin-right: 1rem;
    }
`,LabelIcon$1=styled.span`
    margin-left: 0.625rem;
    font-size: 1.5rem;
    vertical-align: middle;

    ${e=>{switch(e.$displayState){case"error":return css`
                    color: ${Color.Validation.Red.Icon(e)};
                `;case"warning":return css`
                    color: ${Color.Validation.Orange.Icon(e)};
                `}}}
`,AlertIcon=styled(ExclamationCircleFillIcon)`
    height: 1.5rem;
    width: 1.5rem;
`,CallToActionContainer=styled.div`
    display: flex;
    ${e=>{if(e.$collapsible)return css`
                margin-right: 2rem;

                ${MediaQuery.MaxWidth.mobileM} {
                    margin-right: 1rem;
                }
            `}}
`,Handle=styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 1rem;
    margin: -1rem;
    display: flex;
    align-items: center;

    ${MediaQuery.MaxWidth.mobileM} {
        margin: -1rem -1rem -1rem 0;
    }
`;styled(Text.H4)`
    color: ${Color.Primary};
`;const HandleIconContainer=styled.div`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: ${Transition.Base};
`,HandleIcon=styled(ChevronDownIcon)`
    color: ${Color.Neutral[3]};
    height: 1.2rem;
    width: 1.2rem;
`,BoxContainer=({children:e,title:t,collapsible:r=!0,expanded:i=!1,callToActionComponent:a,displayState:n="default",className:o,subComponentTestIds:s,...l})=>{const[p,c]=useState(!r||i),d=useResizeDetector(),h=d.ref,u=useSpring({height:p?d.height:0});return jsxs(Container$j,{className:o,"data-testid":l["data-testid"],children:[jsxs(Header$1,{"data-testid":"header",children:[jsxs(LabelText,{id:"title","data-testid":s?.title||"title",weight:"semibold",children:[t,(()=>{switch(n){case"error":case"warning":return jsx(LabelIcon$1,{$displayState:n,"data-testid":s?.displayStateIcon||`${n}-icon`,children:jsx(AlertIcon,{})});default:return null}})()]}),a&&jsx(CallToActionContainer,{$collapsible:r,"data-testid":"call-to-action-container",children:a}),r&&jsx(Handle,{onClick:()=>{c(!p)},type:"button","data-testid":s?.handle||"handle",children:jsx(HandleIconContainer,{$expanded:p,children:jsx(HandleIcon,{})})})]}),r?jsx(Expandable$1,{style:u,"data-testid":"expandable-container",children:jsx(ChildContainer$1,{ref:h,children:e})}):jsx(NonExpandable,{"data-testid":"non-expandable-container",children:jsx(ChildContainer$1,{children:e})})]})};var chevronRight={},ChevronRightIcon;Object.defineProperty(chevronRight,"__esModule",{value:!0});var e$g=require$$0;const r$4=e=>e$g.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:e$g.jsx("path",{d:"M5.979 17.562C5.757 17.34 5.646 17.0833 5.646 16.792C5.646 16.5 5.757 16.243 5.979 16.021L12 10L5.958 3.958C5.75 3.75 5.646 3.5 5.646 3.208C5.646 2.91667 5.757 2.66 5.979 2.438C6.18766 2.22933 6.44133 2.125 6.74 2.125C7.03866 2.125 7.292 2.22933 7.5 2.438L14.438 9.375C14.5347 9.47233 14.604 9.573 14.646 9.677C14.6873 9.781 14.708 9.88867 14.708 10C14.708 10.1113 14.6873 10.219 14.646 10.323C14.604 10.427 14.5347 10.5277 14.438 10.625L7.479 17.583C7.257 17.8057 7.00366 17.91 6.719 17.896C6.43433 17.882 6.18766 17.7707 5.979 17.562Z",fill:"currentColor"})});r$4.displayName="ChevronRightIcon",ChevronRightIcon=chevronRight.ChevronRightIcon=r$4;const Wrapper$m=styled.div`
    position: relative;
    width: 100%;
    z-index: 1;

    margin: 2rem 0;

    ${MediaQuery.MaxWidth.desktopM} {
        margin: 1.5rem 0;
    }

    ${MediaQuery.MaxWidth.tablet} {
        margin: 1rem 0;
    }
`,Content$4=styled.ul`
    display: inline-flex;
    width: 100%;
    flex-wrap: wrap;
    white-space: nowrap;
    margin-left: -0.25rem;
    overflow-x: scroll;
    overflow-y: hidden;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 10+ */
    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    ${MediaQuery.MaxWidth.tablet} {
        flex-wrap: nowrap;
    }
`,Fade$1=styled.div`
    width: 4rem;
    height: 1.75rem;
    top: 0;
    position: absolute;
    pointer-events: none;

    ${e=>{let t;const r="rgba(255,255,255,0.001)";return t="left"===e.$position?`\n\t\t\t\tleft: -2%;\n\t\t\t\tbackground-image: linear-gradient(\n\t\t\t\t\tto right, \n\t\t\t\t\t${e.$backgroundColor||"white"}, \n\t\t\t\t\t${r}\n\t\t\t\t);\n\t\t\t`:`\n\t\t\t\tright: -2%;\n\t\t\t\tbackground-image: linear-gradient(\n\t\t\t\t\tto left,\n\t\t\t\t\t${e.$backgroundColor||"white"},\n\t\t\t\t\t${r}\n\t\t\t\t);\n\t\t\t`,`\n\t\t\t${MediaQuery.MaxWidth.tablet} {\n\t\t\t\t${t}\n\t\t\t}\n\t\t`}};
`,Item$2=styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    line-height: inherit;
    font-size: inherit;
    ${e=>e.$styleProps||""};
`,Caret=styled(ChevronRightIcon)`
    margin: 0.25rem 0.25rem 0.1rem 0.25rem;
    color: ${Color.Neutral[4]};
`,CurrentLabel=styled(Text.BodySmall)`
    margin: 0.25rem !important;
`,PreviousLink=styled(Text.Hyperlink.Small)`
    margin: 0.25rem !important;
`,Breadcrumb=({links:e,fadeColor:t,fadePosition:r="both",itemStyle:i,id:a,...n})=>{const[o,s]=useState(!!r),[l,p]=useState("left"===r||"both"===r),[c,d]=useState("right"===r||"both"===r),h=useRef(null),u=useRef(null);useResizeDetector({onResize:useCallback((()=>{const t=u.current,r=h.current;t&&r&&e&&e.length>1&&window.innerWidth<=MediaWidths$1.tablet&&(t.scrollLeft=t.scrollWidth-r.offsetWidth)}),[e.length]),targetRef:h,refreshMode:"debounce",refreshRate:50});const m=()=>{if(o){s(window.innerWidth<MediaWidths$1.tablet);const e=u.current,t=h.current;e&&t&&e.scrollWidth>t.offsetWidth?(s(!0),p(e.scrollLeft>=1),d(e.scrollWidth-e.scrollLeft>t.offsetWidth)):s(!1)}};if(useEffect((()=>{const e=u.current;return m(),window.addEventListener("resize",m),e&&e.addEventListener("scroll",m),()=>{window.removeEventListener("resize",m),e&&e.removeEventListener("scroll",m)}}),[]),!e)return null;return jsxs(Wrapper$m,{ref:h,id:a||"breadcrumb",...n,children:[jsx("nav",{children:jsx(Content$4,{ref:u,children:e.map(((t,r)=>{let a;return t.children?(a=r!==e.length-1&&t.href?jsx(PreviousLink,{...t,weight:"semibold"}):jsx(CurrentLabel,{weight:"semibold",children:t.children}),jsxs(Item$2,{$styleProps:i,children:[a,r<e.length-1&&jsx(Caret,{})]},r)):null}))})}),o&&(()=>{let e;return e=Array.isArray(t)&&t.length>0?{left:t,right:t}:t||{left:void 0,right:void 0},jsxs(Fragment,{children:[l&&jsx(Fade$1,{$backgroundColor:e.left,$position:"left"}),c&&jsx(Fade$1,{$backgroundColor:e.right,$position:"right"})]})})()]})};var dayjs_min={exports:{}};dayjs_min.exports=function(){var e=1e3,t=6e4,r=36e5,i="millisecond",a="second",n="minute",o="hour",s="day",l="week",p="month",c="quarter",d="year",h="date",u="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,y={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}},g=function(e,t,r){var i=String(e);return!i||i.length>=t?e:""+Array(t+1-i.length).join(r)+e},_={s:g,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),i=Math.floor(r/60),a=r%60;return(t<=0?"+":"-")+g(i,2,"0")+":"+g(a,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var i=12*(r.year()-t.year())+(r.month()-t.month()),a=t.clone().add(i,p),n=r-a<0,o=t.clone().add(i+(n?-1:1),p);return+(-(i+(r-a)/(n?a-o:o-a))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:p,y:d,w:l,d:s,D:h,h:o,m:n,s:a,ms:i,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},x="en",b={};b[x]=y;var v=function(e){return e instanceof w},C=function e(t,r,i){var a;if(!t)return x;if("string"==typeof t){var n=t.toLowerCase();b[n]&&(a=n),r&&(b[n]=r,a=n);var o=t.split("-");if(!a&&o.length>1)return e(o[0])}else{var s=t.name;b[s]=t,a=s}return!i&&a&&(x=a),a||!i&&x},S=function(e,t){if(v(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new w(r)},$=_;$.l=C,$.i=v,$.w=function(e,t){return S(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var w=function(){function y(e){this.$L=C(e.locale,null,!0),this.parse(e)}var g=y.prototype;return g.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if($.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var i=t.match(m);if(i){var a=i[2]-1||0,n=(i[7]||"0").substring(0,3);return r?new Date(Date.UTC(i[1],a,i[3]||1,i[4]||0,i[5]||0,i[6]||0,n)):new Date(i[1],a,i[3]||1,i[4]||0,i[5]||0,i[6]||0,n)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},g.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},g.$utils=function(){return $},g.isValid=function(){return!(this.$d.toString()===u)},g.isSame=function(e,t){var r=S(e);return this.startOf(t)<=r&&r<=this.endOf(t)},g.isAfter=function(e,t){return S(e)<this.startOf(t)},g.isBefore=function(e,t){return this.endOf(t)<S(e)},g.$g=function(e,t,r){return $.u(e)?this[t]:this.set(r,e)},g.unix=function(){return Math.floor(this.valueOf()/1e3)},g.valueOf=function(){return this.$d.getTime()},g.startOf=function(e,t){var r=this,i=!!$.u(t)||t,c=$.p(e),u=function(e,t){var a=$.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return i?a:a.endOf(s)},m=function(e,t){return $.w(r.toDate()[e].apply(r.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},f=this.$W,y=this.$M,g=this.$D,_="set"+(this.$u?"UTC":"");switch(c){case d:return i?u(1,0):u(31,11);case p:return i?u(1,y):u(0,y+1);case l:var x=this.$locale().weekStart||0,b=(f<x?f+7:f)-x;return u(i?g-b:g+(6-b),y);case s:case h:return m(_+"Hours",0);case o:return m(_+"Minutes",1);case n:return m(_+"Seconds",2);case a:return m(_+"Milliseconds",3);default:return this.clone()}},g.endOf=function(e){return this.startOf(e,!1)},g.$set=function(e,t){var r,l=$.p(e),c="set"+(this.$u?"UTC":""),u=(r={},r[s]=c+"Date",r[h]=c+"Date",r[p]=c+"Month",r[d]=c+"FullYear",r[o]=c+"Hours",r[n]=c+"Minutes",r[a]=c+"Seconds",r[i]=c+"Milliseconds",r)[l],m=l===s?this.$D+(t-this.$W):t;if(l===p||l===d){var f=this.clone().set(h,1);f.$d[u](m),f.init(),this.$d=f.set(h,Math.min(this.$D,f.daysInMonth())).$d}else u&&this.$d[u](m);return this.init(),this},g.set=function(e,t){return this.clone().$set(e,t)},g.get=function(e){return this[$.p(e)]()},g.add=function(i,c){var h,u=this;i=Number(i);var m=$.p(c),f=function(e){var t=S(u);return $.w(t.date(t.date()+Math.round(e*i)),u)};if(m===p)return this.set(p,this.$M+i);if(m===d)return this.set(d,this.$y+i);if(m===s)return f(1);if(m===l)return f(7);var y=(h={},h[n]=t,h[o]=r,h[a]=e,h)[m]||1,g=this.$d.getTime()+i*y;return $.w(g,this)},g.subtract=function(e,t){return this.add(-1*e,t)},g.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||u;var i=e||"YYYY-MM-DDTHH:mm:ssZ",a=$.z(this),n=this.$H,o=this.$m,s=this.$M,l=r.weekdays,p=r.months,c=function(e,r,a,n){return e&&(e[r]||e(t,i))||a[r].slice(0,n)},d=function(e){return $.s(n%12||12,e,"0")},h=r.meridiem||function(e,t,r){var i=e<12?"AM":"PM";return r?i.toLowerCase():i},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:$.s(s+1,2,"0"),MMM:c(r.monthsShort,s,p,3),MMMM:c(p,s),D:this.$D,DD:$.s(this.$D,2,"0"),d:String(this.$W),dd:c(r.weekdaysMin,this.$W,l,2),ddd:c(r.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(n),HH:$.s(n,2,"0"),h:d(1),hh:d(2),a:h(n,o,!0),A:h(n,o,!1),m:String(o),mm:$.s(o,2,"0"),s:String(this.$s),ss:$.s(this.$s,2,"0"),SSS:$.s(this.$ms,3,"0"),Z:a};return i.replace(f,(function(e,t){return t||m[e]||a.replace(":","")}))},g.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},g.diff=function(i,h,u){var m,f=$.p(h),y=S(i),g=(y.utcOffset()-this.utcOffset())*t,_=this-y,x=$.m(this,y);return x=(m={},m[d]=x/12,m[p]=x,m[c]=x/3,m[l]=(_-g)/6048e5,m[s]=(_-g)/864e5,m[o]=_/r,m[n]=_/t,m[a]=_/e,m)[f]||_,u?x:$.a(x)},g.daysInMonth=function(){return this.endOf(p).$D},g.$locale=function(){return b[this.$L]},g.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),i=C(e,t,!0);return i&&(r.$L=i),r},g.clone=function(){return $.w(this.$d,this)},g.toDate=function(){return new Date(this.valueOf())},g.toJSON=function(){return this.isValid()?this.toISOString():null},g.toISOString=function(){return this.$d.toISOString()},g.toString=function(){return this.$d.toUTCString()},y}(),T=w.prototype;return S.prototype=T,[["$ms",i],["$s",a],["$m",n],["$H",o],["$W",s],["$M",p],["$y",d],["$D",h]].forEach((function(e){T[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),S.extend=function(e,t){return e.$i||(e(t,w,S),e.$i=!0),S},S.locale=C,S.isDayjs=v,S.unix=function(e){return S(1e3*e)},S.en=b[x],S.Ls=b,S.p={},S}();var dayjs=dayjs_min.exports,CalendarHelper;!function(e){e.generateDays=e=>{const t=e.startOf("month"),r=dayjs(t).startOf("week");return generateFirstDayOfEachWeek(r).map((e=>generateWeek(e)))},e.generateMonths=e=>{const t=[];for(let r=0;r<12;r++){const i=e.month(r);t.push(dayjs(i))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),r=10*Math.floor(t/10),i=e.year(r),a=[i.subtract(1,"year"),i];for(let e=1;e<11;e++)a.push(i.add(e,"year"));return a},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+dayjs(`${t+9}-01-01`).format("YYYY")}}}(CalendarHelper||(CalendarHelper={}));const generateFirstDayOfEachWeek=e=>{const t=[e];for(let r=1;r<6;r++){const i=e.add(r,"week");t.push(i)}return t},generateWeek=e=>{const t=[];for(let r=0;r<7;r++){const i=e.add(r,"day");t.push(i)}return t},Wrapper$l=styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);

    ${e=>{switch(e.$type){case"standalone":return css`
                    row-gap: 0.5rem;
                `;case"input":return css`
                    row-gap: 0.25rem;
                `}}}
`,HeaderCell=styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    user-select: none;
    margin-bottom: 0.625rem;
`,RowDayCell=styled.div`
    grid-column: 1 / -1;
    display: flex;
`,GrowDayCell=styled.div`
    display: flex;
    position: relative;
    height: 2.5rem;
    align-items: center;
    justify-content: center;
    flex: 1;
`,OverflowDisplay=styled.div`
    position: absolute;
    width: 50%;
    height: 100%;

    ${e=>{switch(e.$position){case"left":return css`
                    left: 0;
                `;case"right":return css`
                    right: 0;
                `}}}

    ${e=>{const{$selected:t}=e;if(t)return css`
                border-top: 1px solid ${Color.Accent.Light[4]};
                border-bottom: 1px solid ${Color.Accent.Light[4]};
                background-color: ${Color.Accent.Light[5]};
            `}}
    
    ${e=>{const{$hovered:t,$overlap:r}=e;return t?css`
                border-top: 1px dashed ${Color.Accent.Light[4]};
                border-bottom: 1px dashed ${Color.Accent.Light[4]};
                background-color: ${Color.Accent.Light[6]};
            `:r?css`
                background-color: ${Color.Accent.Light[4]};
            `:void 0}}
`,InteractiveCircle=styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    cursor: pointer;
    position: absolute;

    :hover {
        box-shadow: 0px 0px 4px 1px ${Color.Shadow.Accent};
        border: 1px solid ${Color.Accent.Light[1]};
        background-color: ${Color.Neutral[8]};
    }

    ${e=>{const{$hovered:t,$selected:r}=e;return r?css`
                background: ${Color.Accent.Light[5]};
                border: 1px solid ${Color.Primary};
            `:t?css`
                box-shadow: 0px 0px 4px 1px ${Color.Shadow.Accent};
                border: 1px solid ${Color.Accent.Light[1]};
                background-color: ${Color.Neutral[8]};
            `:void 0}}

    ${e=>{const{$disabled:t,$overlap:r,$variant:i}=e;return r?css`
                border: 1px solid ${Color.Accent.Light[1]};
                background: ${Color.Accent.Light[4]};

                :hover {
                    background: ${Color.Accent.Light[4]};
                }
            `:t?css`
                color: ${Color.Neutral[4]};
                cursor: not-allowed;

                :hover {
                    box-shadow: unset;
                    border: unset;
                    background-color: unset;
                }
            `:"today"===i?css`
                    background: ${Color.Accent.Light[5]};
                `:void 0}}
`,DayLabel=styled(Text.H5)`
    ${e=>{const{$disabled:t,$selected:r,$variant:i}=e;if(t&&r)return css`
                ${TextStyleHelper.getTextStyle("H5","semibold")};
                color: ${Color.Accent.Light[2]};
            `;if(t)return css`
                color: ${Color.Neutral[4]};
            `;if(r)return css`
                ${TextStyleHelper.getTextStyle("H5","semibold")};
                color: ${Color.Primary};
            `;switch(i){case"other-month":return css`
                    color: ${Color.Neutral[4]};
                `;case"today":return css`
                    color: ${Color.Neutral[3]};
                `;case"default":return css`
                    color: ${Color.Neutral[1]};
                `}}}
`;var isBetween$1={exports:{}};isBetween$1.exports=function(e,t,r){t.prototype.isBetween=function(e,t,i,a){var n=r(e),o=r(t),s="("===(a=a||"()")[0],l=")"===a[1];return(s?this.isAfter(n,i):!this.isBefore(n,i))&&(l?this.isBefore(o,i):!this.isAfter(o,i))||(s?this.isBefore(n,i):!this.isAfter(n,i))&&(l?this.isAfter(o,i):!this.isBefore(o,i))}};var isBetween=isBetween$1.exports;dayjs.extend(isBetween);const InternalCalendarDay=({calendarDate:e,currentFocus:t,disabledDates:r,selectedStartDate:i,selectedEndDate:a,onSelect:n,onHover:o,type:s,isNewSelection:l,between:p,variant:c})=>{const d=useMemo((()=>CalendarHelper.generateDays(e)),[e]),[h,u]=useState(""),m=()=>{u(""),o("")},f=(()=>{if(!h||"single"===c)return null;const e=dayjs(h);if(i&&a)if(e.isBefore(i)){if("start"===t)return"full-overlap-start";if("end"===t)return"reset-end"}else if(e.isAfter(a)){if("end"===t)return"full-overlap-end";if("start"===t)return"reset-start"}else if(e.isBetween(i,a,"day","[]")&&![i,a].includes(h)){if("start"===t)return"overlap-start";if("end"===t)return"overlap-end"}if(i&&!a){if(e.isAfter(i)&&"end"===t)return"hover-end"}else if(!i&&a&&e.isBefore(a)&&"start"===t)return"hover-start";return null})(),y=e=>{const n=e.format("YYYY-MM-DD"),o={},s={},c={},d={},u=i&&a&&i===a;return!l&&["reset-start","reset-end"].includes(f)&&[i,a].includes(n)&&(c.$overlap=!0),(e=>{const n=p&&!e.isBetween(p[0],p[1],"day","[]"),o=r&&r.includes(e.format("YYYY-MM-DD")),s="start"===t&&a&&e.isAfter(a)&&l,c="end"===t&&i&&e.isBefore(i)&&l;return n||o||s||c})(e)&&(c.$disabled=!0,d.$disabled=!0),[i,a].includes(n)&&(c.$selected=!0,d.$selected=!0),i&&a&&!u&&e.isBetween(i,a,"day","[]")&&(d.$selected=!0,e.isSame(i)?s.$selected=!0:e.isSame(a)?o.$selected=!0:(o.$selected=!0,s.$selected=!0)),"hover-start"===f&&e.isBetween(a,h,"day","[]")&&(d.$selected=!0,a===n?o.$hovered=!0:h===n?(s.$hovered=!0,c.$hovered=!0):(o.$hovered=!0,s.$hovered=!0)),"hover-end"===f&&e.isBetween(i,h,"day","[]")&&(d.$selected=!0,i===n?s.$hovered=!0:h===n?(o.$hovered=!0,c.$hovered=!0):(o.$hovered=!0,s.$hovered=!0)),"overlap-start"===f&&e.isBetween(a,h,"day","[]")&&(h===n?(s.$overlap=!0,c.$overlap=!0):a===n?(o.$overlap=!0,c.$overlap=!0,c.$hovered=!0):(o.$overlap=!0,s.$overlap=!0)),"overlap-end"===f&&e.isBetween(i,h,"day","[]")&&(h===n?(o.$overlap=!0,c.$overlap=!0):i===n?(s.$overlap=!0,c.$overlap=!0,c.$hovered=!0):(o.$overlap=!0,s.$overlap=!0)),"full-overlap-start"===f&&e.isBetween(a,h,"day","[]")&&(i===n&&u?(o.$hovered=!0,c.$overlap=!0):i===n?(o.$hovered=!0,s.$overlap=!0,c.$overlap=!0):a===n?(o.$overlap=!0,c.$overlap=!0):e.isSame(h)?(s.$hovered=!0,d.$selected=!0,c.$hovered=!0):e.isBetween(i,h,"day","()")&&(o.$hovered=!0,s.$hovered=!0,d.$selected=!0)),"full-overlap-end"===f&&e.isBetween(i,h,"day","[]")&&(a===n&&u?(s.$hovered=!0,c.$overlap=!0):a===n?(o.$overlap=!0,s.$hovered=!0,c.$overlap=!0):i===n?(s.$overlap=!0,c.$overlap=!0):e.isSame(h)?(o.$hovered=!0,d.$selected=!0,c.$hovered=!0):e.isBetween(a,h,"day","()")&&(o.$hovered=!0,s.$hovered=!0,d.$selected=!0)),["full-overlap-end","full-overlap-start"].includes(f)&&e.isBetween(i,a,"day","()")&&(o.$overlap=!0,s.$overlap=!0),{styleLeftProps:o,styleRightProps:s,styleCircleProps:c,styleLabelProps:d}};return jsxs(Wrapper$l,{$type:s,children:[d[0].map(((e,t)=>jsx(HeaderCell,{children:jsx(Text.H6,{weight:"semibold",children:dayjs(e).format("ddd")})},`week-day-${t}`))),d.map(((t,r)=>jsx(RowDayCell,{onMouseLeave:m,children:t.map(((t,r)=>{const i=t.format("YYYY-MM-DD"),{variant:a}=(t=>({variant:e.month()!==t.month()?"other-month":dayjs().isSame(t,"day")?"today":"default"}))(t),{styleLeftProps:s,styleRightProps:l,styleCircleProps:p,styleLabelProps:c}=y(t);return jsxs(GrowDayCell,{children:[jsx(OverflowDisplay,{$position:"left",...s}),jsx(OverflowDisplay,{$position:"right",...l}),jsx(InteractiveCircle,{$variant:a,onClick:()=>((e,t)=>{t||n(e)})(t,p.$disabled),onMouseEnter:()=>((e,t)=>{t||(u(e),o(e))})(i,p.$disabled),...p,children:jsx(DayLabel,{weight:c.$selected?"semibold":"regular",$variant:a,...c,children:t.format("D")})})]},`day-${r}`)}))},r)))]})},Wrapper$k=styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 2.5rem);
    align-content: center;
    justify-content: center;

    ${e=>{switch(e.$type){case"standalone":return css`
                    gap: 0.5rem 2.5rem;
                `;case"input":return css`
                    gap: 0.5rem 2rem;
                `}}}
`,MonthCell=styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 5rem;

    &:hover {
        box-shadow: 0px 0px 4px 1px ${Color.Shadow.Accent};
        border: 1px solid ${Color.Accent.Light[1]};
    }

    ${e=>{if(e.$disabled)return css`
                cursor: not-allowed;

                :hover {
                    box-shadow: unset;
                    border: unset;
                }
            `;switch(e.$variant){case"current-month":return css`
                    background-color: ${Color.Accent.Light[6](e)};
                `;case"selected-month":return css`
                    background-color: ${Color.Accent.Light[5](e)};
                    border: 1px solid ${Color.Primary(e)};
                `}}}
`,CellLabel$1=styled(Text.H5)`
    ${e=>{if(e.$disabled)return css`
                color: ${Color.Neutral[4]};
            `;switch(e.$variant){case"current-month":return css`
                    color: ${Color.Neutral[3](e)};
                `;case"selected-month":return css`
                    ${TextStyleHelper.getTextStyle("H5","semibold")}
                    color: ${Color.Primary(e)};
                `}}}
`,InternalCalendarMonth=({calendarDate:e,currentFocus:t,selectedStartDate:r,selectedEndDate:i,viewCalendarDate:a,type:n,isNewSelection:o,between:s,onMonthSelect:l})=>{const[p,c]=useState([]);useEffect((()=>{h()}),[e]);const d=e=>{const n=e.format("MMMM");return{disabled:(e=>{const a=s&&!e.isBetween(s[0],s[1],"month","[]"),n="start"===t&&i&&e.isAfter(i,"month")&&o,l="end"===t&&r&&e.isBefore(r,"month")&&o;return a||n||l})(e),month:n,variant:a.isSame(e,"month")?"selected-month":dayjs().isSame(e,"month")?"current-month":"default"}},h=()=>{const t=CalendarHelper.generateMonths(dayjs(e));c(t)};return p.length?jsx(Wrapper$k,{$type:n,children:p.map((e=>{const{disabled:t,variant:r,month:i}=d(e);return jsx(MonthCell,{$variant:r,$disabled:t,onClick:()=>((e,t)=>{t||l(e)})(e,t),children:jsx(CellLabel$1,{weight:"regular",$variant:r,$disabled:t,children:i})},i)}))}):null},Wrapper$j=styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-content: center;
    grid-template-columns: repeat(3, 1fr);

    ${e=>{switch(e.$type){case"standalone":return css`
                    grid-template-rows: repeat(4, 4rem);
                    gap: 0.5rem 2rem;
                `;case"input":return css`
                    grid-template-rows: repeat(4, 4.375rem);
                    gap: 0.5rem 1rem;
                `}}}
`,YearCell=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
    cursor: pointer;

    &:hover {
        box-shadow: 0px 0px 4px 1px ${Color.Shadow.Accent};
        border: 1px solid ${Color.Accent.Light[1]};
    }

    ${e=>{if(e.$disabled)return css`
                cursor: not-allowed;

                :hover {
                    box-shadow: unset;
                    border: unset;
                }
            `;switch(e.$variant){case"current-year":return css`
                    background: ${Color.Accent.Light[6](e)};
                `;case"selected-year":return css`
                    background: ${Color.Accent.Light[5](e)};
                    border: 1px solid ${Color.Primary(e)};
                `}}};
`,CellLabel=styled(Text.H5)`
    ${e=>{if(e.$disabled)return css`
                color: ${Color.Neutral[4]};
            `;switch(e.$variant){case"current-year":return css`
                    color: ${Color.Neutral[3](e)};
                `;case"selected-year":return css`
                    ${TextStyleHelper.getTextStyle("H5","semibold")}
                    color: ${Color.Primary(e)};
                `;case"other-decade":return css`
                    color: ${Color.Neutral[4](e)};
                `}}}
`,InternalCalendarYear=({calendarDate:e,currentFocus:t,selectedStartDate:r,selectedEndDate:i,viewCalendarDate:a,type:n,isNewSelection:o,between:s,onYearSelect:l})=>{const[p,c]=useState([]);useEffect((()=>{h()}),[e]);const d=e=>{const n=[0,11].includes(p.indexOf(e)),l=e.year();return{disabled:(e=>{const a=s&&!e.isBetween(s[0],s[1],"year","[]"),n="start"===t&&i&&e.isAfter(i,"year")&&o,l="end"===t&&r&&e.isBefore(r,"year")&&o;return a||n||l})(e),year:l,variant:n?"other-decade":a.isSame(e,"year")?"selected-year":dayjs().isSame(e,"year")?"current-year":"default"}},h=()=>{const t=CalendarHelper.generateDecadeOfYears(dayjs(e));c(t)};return p.length?jsx(Wrapper$j,{$type:n,children:p.map((e=>{const{disabled:t,variant:r,year:i}=d(e);return jsx(YearCell,{$variant:r,$disabled:t,onClick:()=>((e,t)=>{t||l(e)})(e,t),children:jsx(CellLabel,{weight:"regular",$variant:r,$disabled:t,children:i})},i)}))}):null};var chevronLeft={},ChevronLeftIcon;Object.defineProperty(chevronLeft,"__esModule",{value:!0});var e$f=require$$0;const r$3=e=>e$f.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:e$f.jsx("path",{d:"M12.521 17.562L5.58301 10.625C5.48635 10.5277 5.41701 10.427 5.37501 10.323C5.33301 10.219 5.31201 10.1113 5.31201 10C5.31201 9.88867 5.33301 9.781 5.37501 9.677C5.41701 9.573 5.48635 9.47234 5.58301 9.375L12.542 2.417C12.75 2.20834 13.0033 2.104 13.302 2.104C13.6007 2.104 13.854 2.21534 14.062 2.438C14.2847 2.646 14.389 2.90267 14.375 3.208C14.361 3.514 14.25 3.771 14.042 3.979L8.02101 10L14.062 16.042C14.2567 16.236 14.354 16.4893 14.354 16.802C14.354 17.1147 14.2567 17.368 14.062 17.562C13.854 17.7707 13.5973 17.875 13.292 17.875C12.986 17.875 12.729 17.7707 12.521 17.562Z",fill:"currentColor"})});r$3.displayName="ChevronLeftIcon",ChevronLeftIcon=chevronLeft.ChevronLeftIcon=r$3;const iconStyle$1=css`
    color: ${Color.Neutral[3]};
    height: 1rem;
    width: 1rem;
`,ArrowLeft=styled(ChevronLeftIcon)`
    ${iconStyle$1}
`,ArrowRight$2=styled(ChevronRightIcon)`
    ${iconStyle$1}
`,IconChevronDown=styled(ChevronDownIcon)`
    ${iconStyle$1}
    transition: transform 250ms ease-in-out;
    margin-left: 0.625rem;
`,AnimatedDiv$2=styled(animated.div)`
    position: absolute;
    top: calc(100% + 0.5rem);
    left: 0;
    width: 100%;
    max-width: 41rem;
    background: ${Color.Neutral[8]};
    overflow: hidden;
    z-index: 1;
`,Container$i=styled.div`
    position: relative;
    width: 100%;
    padding: 1.5rem 1.25rem;
    display: flex;

    ${e=>{if("input"===e.$type)return css`
                border: 1px solid ${Color.Neutral[5]};
                border-radius: 8px;
            `}}
`,ContentBody=styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`,ToggleZone=styled.div`
    display: flex;
    flex: 1;
    position: relative;
`,OptionsOverlay=styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${Color.Neutral[8]};

    ${e=>{if(!e.$visible)return css`
                display: none;
            `}}
`,Header=styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
`,HeaderInputDropdown=styled.div`
    display: flex;
`,HeaderDropdown=styled.div`
    display: flex;
    margin: 0 auto;
    margin-bottom: 1rem;
`,DropdownButton=styled.button`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;

    :not(:last-of-type) {
        margin-right: 0.5rem;
    }

    ${e=>{switch(e.$type){case"input":return css`
                    :not(:last-of-type) {
                        margin-right: 0;
                    }
                `;case"standalone":return css`
                    ${IconChevronDown} {
                        width: 1.125rem;
                        height: 1.125rem;
                    }
                `}}}

    ${e=>!1===e.$visible?css`
                display: none;
            `:e.$expandedDisplay?css`
                ${IconChevronDown} {
                    transform: rotate(180deg);
                }
            `:void 0}
`,DropdownText=styled.p`
    ${e=>{switch(e.$type){case"standalone":return css`
                    ${TextStyleHelper.getTextStyle("H4","regular")}
                `;case"input":return css`
                    ${TextStyleHelper.getTextStyle("H5","regular")}
                `}}}
`,HeaderArrows=styled.div`
    display: flex;
`,HeaderArrowButton=styled(IconButton)`
    background: transparent;
    margin: auto 0;
    padding: 0.5rem;

    :focus,
    :active {
        background: transparent;
    }
`,ActionButtonSection=styled.div`
    display: flex;
    gap: 8px;
    margin-top: 1.5rem;
`,ActionButton$2=styled(Button.Small)`
    flex: 1;
`,SideArrowButton=styled(IconButton)`
    display: block;
    padding: 1rem;
    background: transparent;
    margin: auto 0;

    :focus,
    :active {
        background: transparent;
    }

    ${ArrowLeft},
    ${ArrowRight$2} {
        width: 1.5rem;
        height: 1.5rem;
    }

    ${e=>"left"===e.$direction?css`
                    margin: auto 0.625rem auto 0; // to counter the padding
                `:css`
                    margin: auto 0 auto 0.625rem; // to counter the padding
                `}
`,Component$b=({disabledDates:e,onYearMonthDisplayChange:t,onCalendarView:r,onSelect:i,onHover:a,onDismiss:n,actionComponent:o,isOpen:s,value:l,endValue:p,currentFocus:c,withButton:d,variant:h,between:u,type:m="standalone",...f},y)=>{const[g,_]=useState(dayjs()),[x,b]=useState("default"),[v,C]=useState(),[S,$]=useState(),[w,T]=useState(),[k,E]=useState(!0),A=useRef(null),P=useRef(null),I=useResizeDetector();useImperativeHandle(y,(()=>({defaultView(){b("default"),r("default")}})),[]),useEffect((()=>{s&&(_(dayjs()),b("default"),"range"===h&&l?.length&&p?.length&&E(!1))}),[s]),useEffect((()=>{const e="end"===c?p:l;T(dayjs(e)),e&&_(dayjs(e))}),[c]),useEffect((()=>{E(!0),l?("input"===o&&_(dayjs(l)),C(l),_(dayjs(l))):C(void 0)}),[l]),useEffect((()=>{E(!0),p?("input"===o&&_(dayjs(p)),$(p)):$(void 0)}),[p]);const M=()=>{switch(x){case"default":T((e=>e.subtract(1,"month"))),_((e=>{const t=e.subtract(1,"month");return N(t),t}));break;case"month-options":_((e=>e.subtract(1,"year")));break;case"year-options":_((e=>e.subtract(10,"year")))}},D=()=>{switch(x){case"default":T((e=>e.add(1,"month"))),_((e=>{const t=e.add(1,"month");return N(t),t}));break;case"month-options":_((e=>e.add(1,"year")));break;case"year-options":_((e=>e.add(10,"year")))}},F=e=>{const t=e.format("YYYY-MM-DD");_(e),T(e),H(t),B(t)},R=e=>{_(e),T(e),N(e)},j=()=>{_(dayjs("end"===c?p:l)),V("reset")},L=e=>{O(e)},B=e=>{i&&i(e)},O=e=>{a&&a(e)},N=e=>{if(t){const r={month:e.month()+1,year:e.year()};t(r)}},V=e=>{n&&n(e)},H=e=>{if(c)switch(c){case"start":default:C(e);break;case"end":$(e)}else C(e)},z=()=>{"month-options"!==x?(b("month-options"),U("month-options"),I.ref.current.focus()):(b("default"),_(w),U("default"))},G=()=>{"default"!==x?(b("default"),_(w),U("default")):(b("year-options"),U("year-options"))},W=()=>{if("year-options"===x){const{beginDecade:e,endDecade:t}=CalendarHelper.getStartEndDecade(g);return`${e} to ${t}`}return dayjs(g).format("YYYY")},U=e=>{r&&r(e)},q=()=>jsxs(Fragment,{children:[jsxs(DropdownButton,{type:"button",tabIndex:-1,$type:m,$expandedDisplay:"month-options"===x,$visible:"default"===x,id:"month-dropdown",onClick:z,children:[jsx(DropdownText,{$type:m,children:dayjs(g).format("MMM")}),jsx(IconChevronDown,{})]}),jsxs(DropdownButton,{type:"button",tabIndex:-1,$type:m,$expandedDisplay:"default"!==x,id:"year-dropdown",onClick:G,children:[jsx(DropdownText,{$type:m,children:W()}),jsx(IconChevronDown,{})]})]}),Q=()=>{switch(x){case"month-options":return jsx(InternalCalendarMonth,{type:m,calendarDate:g,currentFocus:c,selectedStartDate:v,selectedEndDate:S,viewCalendarDate:w,between:u,isNewSelection:k,onMonthSelect:R});case"year-options":return jsx(InternalCalendarYear,{type:m,calendarDate:g,currentFocus:c,selectedStartDate:v,selectedEndDate:S,viewCalendarDate:w,between:u,isNewSelection:k,onYearSelect:R});default:return null}},Y=()=>{switch(m){case"standalone":default:return jsx(HeaderDropdown,{children:q()});case"input":return jsxs(Header,{children:[jsx(HeaderInputDropdown,{children:q()}),jsxs(HeaderArrows,{children:[jsx(HeaderArrowButton,{tabIndex:-1,onClick:M,children:jsx(ArrowLeft,{})}),jsx(HeaderArrowButton,{tabIndex:-1,onClick:D,children:jsx(ArrowRight$2,{})})]})]})}},K=()=>{if("standalone"===m||!d)return;let e=!0;const t=["default"].includes(x);switch(h){case"single":e=!v;break;case"range":e=!v||!S}const r=!!t&&e;return jsxs(ActionButtonSection,{children:[jsx(ActionButton$2,{ref:P,"data-testid":"cancel-button",styleType:"light",onClick:j,children:"Cancel"}),jsx(ActionButton$2,{"data-testid":"done-button",ref:A,onClick:()=>(e=>{e||(_(w),V("confirmed"))})(r),disabled:r,children:"Done"})]})},Z=()=>jsxs(Container$i,{ref:I.ref,tabIndex:-1,"data-id":"calendar-container",$type:m,...f,children:["standalone"===m&&jsx(SideArrowButton,{$direction:"left",onClick:M,children:jsx(ArrowLeft,{})}),jsxs(ContentBody,{children:[Y(),jsxs(ToggleZone,{children:[jsx(InternalCalendarDay,{type:m,calendarDate:g,currentFocus:c,disabledDates:e,selectedStartDate:v,selectedEndDate:S,variant:h,between:u,isNewSelection:k,onSelect:F,onHover:L}),jsx(OptionsOverlay,{$visible:"default"!==x,children:Q()})]}),K()]}),"standalone"===m&&jsx(SideArrowButton,{$direction:"right",onClick:D,children:jsx(ArrowRight$2,{})})]}),X=useSpring({height:s?I.height+64:0});return"input"===m?jsx(AnimatedDiv$2,{style:X,children:Z()}):jsx(Fragment,{children:Z()})},InternalCalendar=React__default.forwardRef(Component$b),Calendar=({className:e,...t})=>jsx(Wrapper$i,{className:e,children:jsx(InternalCalendar,{type:"standalone",...t})}),Wrapper$i=styled.div`
    width: 41rem;
    border: 1px solid ${Color.Neutral[5]};
    border-radius: 12px;
`,StyledCard=styled.div`
    border-radius: 0.5rem;
    background: ${Color.Neutral[8]};
    padding: 1rem 2rem;
    box-shadow: 0 0.125rem 0.5rem rgba(104, 104, 104, 0.25);
`,Card=({children:e,...t})=>{const r=t["data-testid"]||"card";return jsx(StyledCard,{...t,"data-testid":r,children:"string"==typeof e?jsx(Text.Body,{children:e}):e})};var tick={},TickIcon;Object.defineProperty(tick,"__esModule",{value:!0});var e$e=require$$0;const r$2=e=>e$e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:e$e.jsx("path",{d:"M7.97897 14.646C7.86764 14.646 7.75997 14.625 7.65597 14.583C7.55197 14.5417 7.4513 14.4723 7.35397 14.375L3.83297 10.854C3.6663 10.6873 3.58664 10.4757 3.59397 10.219C3.60064 9.96167 3.6873 9.74967 3.85397 9.583C4.02064 9.41634 4.22897 9.333 4.47897 9.333C4.72897 9.333 4.9373 9.41634 5.10397 9.583L8.02097 12.5L14.917 5.604C15.0836 5.43734 15.2883 5.354 15.531 5.354C15.7743 5.354 15.9793 5.43734 16.146 5.604C16.3126 5.77067 16.396 5.97567 16.396 6.219C16.396 6.46167 16.3126 6.66634 16.146 6.833L8.60397 14.375C8.50664 14.4723 8.40597 14.5417 8.30197 14.583C8.19797 14.625 8.0903 14.646 7.97897 14.646Z",fill:"currentColor"})});r$2.displayName="TickIcon",TickIcon=tick.TickIcon=r$2;const Container$h=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    ${e=>{let t,r;if("small"===e.$displaySize)t="1.5rem",r="1.5rem";else t="2rem",r="2rem";return css`
            height: ${t};
            width: ${r};
        `}}

    position: relative;
    border-radius: 4px;
    transition: all 200ms ease-in-out;
    border: 1px solid ${Color.Accent.Light[2]};
    background: transparent;

    ${e=>{let t,r;return e.selected&&(t=Color.Primary(e),r=Color.Primary(e)),e.disabled&&(t=Color.Neutral[6](e),r=Color.Neutral[6](e)),`\n\t\t\tborder: 1px solid ${t};\n\t\t\tbackground: ${r};\n\t\t`}}
`,Input$5=styled.input`
    position: absolute;
    opacity: 0;
    height: 100%;
    width: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
`,Checkmark$1=styled(TickIcon)`
    ${e=>{let t;if("small"===e.$displaySize)t="1.5rem";else t="1.75rem";return css`
            height: ${t};
            width: ${t};
        `}}
    color: ${e=>e.disabled?Color.Neutral[4]:Color.Neutral[8]};
`,Checkbox=({className:e,checked:t,disabled:r,onChange:i,onKeyPress:a,displaySize:n="default",...o})=>{const[s,l]=useState(t);useEffect((()=>{l(t)}),[t]);const p=e=>{if(!r){const t=e;if(!(" "===t.key||"change"===e.type))return;i&&i(e),a&&a(t)}};return jsxs(Container$h,{selected:s,disabled:r,className:e,"data-testid":"checkbox",$displaySize:n,role:"checkbox","aria-checked":s,"aria-labelledby":"checkbox-input",tabIndex:r?-1:0,onKeyDown:p,children:[jsx(Input$5,{id:"checkbox-input","data-testid":"checkbox-input","aria-hidden":"true",type:"checkbox",tabIndex:-1,onChange:p,disabled:r,checked:s,...o}),s&&jsx(Checkmark$1,{id:"checkmark","data-testid":"checkmark",disabled:r,$displaySize:n})]})};var reactResponsive={exports:{}},factory,DateInputHelper;factory=e=>(()=>{var t={"./node_modules/css-mediaquery/index.js":
/*!**********************************************!*\
  !*** ./node_modules/css-mediaquery/index.js ***!
  \**********************************************/(e,t)=>{t.match=function(e,t){return s(e).some((function(e){var r=e.inverse,i="all"===e.type||t.type===e.type;if(i&&r||!i&&!r)return!1;var a=e.expressions.every((function(e){var r=e.feature,i=e.modifier,a=e.value,n=t[r];if(!n)return!1;switch(r){case"orientation":case"scan":return n.toLowerCase()===a.toLowerCase();case"width":case"height":case"device-width":case"device-height":a=c(a),n=c(n);break;case"resolution":a=p(a),n=p(n);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":a=l(a),n=l(n);break;case"grid":case"color":case"color-index":case"monochrome":a=parseInt(a,10)||1,n=parseInt(n,10)||0}switch(i){case"min":return n>=a;case"max":return n<=a;default:return n===a}}));return a&&!r||!a&&r}))},t.parse=s;var r=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,i=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,a=/^(?:(min|max)-)?(.+)/,n=/(em|rem|px|cm|mm|in|pt|pc)?$/,o=/(dpi|dpcm|dppx)?$/;function s(e){return e.split(",").map((function(e){var t=(e=e.trim()).match(r),n=t[1],o=t[2],s=t[3]||"",l={};return l.inverse=!!n&&"not"===n.toLowerCase(),l.type=o?o.toLowerCase():"all",s=s.match(/\([^\)]+\)/g)||[],l.expressions=s.map((function(e){var t=e.match(i),r=t[1].toLowerCase().match(a);return{modifier:r[1],feature:r[2],value:t[2]}})),l}))}function l(e){var t,r=Number(e);return r||(r=(t=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/t[2]),r}function p(e){var t=parseFloat(e);switch(String(e).match(o)[1]){case"dpcm":return t/2.54;case"dppx":return 96*t;default:return t}}function c(e){var t=parseFloat(e);switch(String(e).match(n)[1]){case"em":case"rem":return 16*t;case"cm":return 96*t/2.54;case"mm":return 96*t/2.54/10;case"in":return 96*t;case"pt":return 72*t;case"pc":return 72*t/12;default:return t}}},"./node_modules/hyphenate-style-name/index.js":
/*!****************************************************!*\
  !*** ./node_modules/hyphenate-style-name/index.js ***!
  \****************************************************/(e,t,r)=>{r.r(t),r.d(t,{default:()=>s});var i=/[A-Z]/g,a=/^ms-/,n={};function o(e){return"-"+e.toLowerCase()}const s=function(e){if(n.hasOwnProperty(e))return n[e];var t=e.replace(i,o);return n[e]=a.test(t)?"-"+t:t}},"./node_modules/matchmediaquery/index.js":
/*!***********************************************!*\
  !*** ./node_modules/matchmediaquery/index.js ***!
  \***********************************************/(e,t,r)=>{var i=r(/*! css-mediaquery */"./node_modules/css-mediaquery/index.js").match,a="undefined"!=typeof window?window.matchMedia:null;function n(e,t,r){var n=this;if(a&&!r){var o=a.call(window,e);this.matches=o.matches,this.media=o.media,o.addListener(s)}else this.matches=i(e,t),this.media=e;function s(e){n.matches=e.matches,n.media=e.media}this.addListener=function(e){o&&o.addListener(e)},this.removeListener=function(e){o&&o.removeListener(e)},this.dispose=function(){o&&o.removeListener(s)}}e.exports=function(e,t,r){return new n(e,t,r)}},"./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/e=>{
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach((function(e){i[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},i)).join("")}catch(e){return!1}}()?Object.assign:function(e,a){for(var n,o,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var p in n=Object(arguments[l]))r.call(n,p)&&(s[p]=n[p]);if(t){o=t(n);for(var c=0;c<o.length;c++)i.call(n,o[c])&&(s[o[c]]=n[o[c]])}}return s}},"./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/(e,t,r)=>{var i,a=r(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),n={},o=r(/*! ./lib/has */"./node_modules/prop-types/lib/has.js");function s(e,t,r,s,l){for(var p in e)if(o(e,p)){var c;try{if("function"!=typeof e[p]){var d=Error((s||"React class")+": "+r+" type `"+p+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[p]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw d.name="Invariant Violation",d}c=e[p](t,p,s,r,null,a)}catch(e){c=e}if(!c||c instanceof Error||i((s||"React class")+": type specification of "+r+" `"+p+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof c+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),c instanceof Error&&!(c.message in n)){n[c.message]=!0;var h=l?l():"";i("Failed "+r+" type: "+c.message+(null!=h?h:""))}}}i=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},s.resetWarningCache=function(){n={}},e.exports=s},"./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/(e,t,r)=>{var i,a=r(/*! react-is */"./node_modules/react-is/index.js"),n=r(/*! object-assign */"./node_modules/object-assign/index.js"),o=r(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),s=r(/*! ./lib/has */"./node_modules/prop-types/lib/has.js"),l=r(/*! ./checkPropTypes */"./node_modules/prop-types/checkPropTypes.js");function p(){return null}i=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},e.exports=function(e,t){var r="function"==typeof Symbol&&Symbol.iterator,c="@@iterator",d="<<anonymous>>",h={array:y("array"),bigint:y("bigint"),bool:y("boolean"),func:y("function"),number:y("number"),object:y("object"),string:y("string"),symbol:y("symbol"),any:f(p),arrayOf:function(e){return f((function(t,r,i,a,n){if("function"!=typeof e)return new m("Property `"+n+"` of component `"+i+"` has invalid PropType notation inside arrayOf.");var s=t[r];if(!Array.isArray(s))return new m("Invalid "+a+" `"+n+"` of type `"+x(s)+"` supplied to `"+i+"`, expected an array.");for(var l=0;l<s.length;l++){var p=e(s,l,i,a,n+"["+l+"]",o);if(p instanceof Error)return p}return null}))},element:f((function(t,r,i,a,n){var o=t[r];return e(o)?null:new m("Invalid "+a+" `"+n+"` of type `"+x(o)+"` supplied to `"+i+"`, expected a single ReactElement.")})),elementType:f((function(e,t,r,i,n){var o=e[t];return a.isValidElementType(o)?null:new m("Invalid "+i+" `"+n+"` of type `"+x(o)+"` supplied to `"+r+"`, expected a single ReactElement type.")})),instanceOf:function(e){return f((function(t,r,i,a,n){if(!(t[r]instanceof e)){var o=e.name||d;return new m("Invalid "+a+" `"+n+"` of type `"+((s=t[r]).constructor&&s.constructor.name?s.constructor.name:d)+"` supplied to `"+i+"`, expected instance of `"+o+"`.")}var s;return null}))},node:f((function(e,t,r,i,a){return _(e[t])?null:new m("Invalid "+i+" `"+a+"` supplied to `"+r+"`, expected a ReactNode.")})),objectOf:function(e){return f((function(t,r,i,a,n){if("function"!=typeof e)return new m("Property `"+n+"` of component `"+i+"` has invalid PropType notation inside objectOf.");var l=t[r],p=x(l);if("object"!==p)return new m("Invalid "+a+" `"+n+"` of type `"+p+"` supplied to `"+i+"`, expected an object.");for(var c in l)if(s(l,c)){var d=e(l,c,i,a,n+"."+c,o);if(d instanceof Error)return d}return null}))},oneOf:function(e){return Array.isArray(e)?f((function(t,r,i,a,n){for(var o=t[r],s=0;s<e.length;s++)if(u(o,e[s]))return null;var l=JSON.stringify(e,(function(e,t){return"symbol"===b(t)?String(t):t}));return new m("Invalid "+a+" `"+n+"` of value `"+String(o)+"` supplied to `"+i+"`, expected one of "+l+".")})):(i(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),p)},oneOfType:function(e){if(!Array.isArray(e))return i("Invalid argument supplied to oneOfType, expected an instance of array."),p;for(var t=0;t<e.length;t++){var r=e[t];if("function"!=typeof r)return i("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+v(r)+" at index "+t+"."),p}return f((function(t,r,i,a,n){for(var l=[],p=0;p<e.length;p++){var c=(0,e[p])(t,r,i,a,n,o);if(null==c)return null;c.data&&s(c.data,"expectedType")&&l.push(c.data.expectedType)}return new m("Invalid "+a+" `"+n+"` supplied to `"+i+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return f((function(t,r,i,a,n){var s=t[r],l=x(s);if("object"!==l)return new m("Invalid "+a+" `"+n+"` of type `"+l+"` supplied to `"+i+"`, expected `object`.");for(var p in e){var c=e[p];if("function"!=typeof c)return g(i,a,n,p,b(c));var d=c(s,p,i,a,n+"."+p,o);if(d)return d}return null}))},exact:function(e){return f((function(t,r,i,a,l){var p=t[r],c=x(p);if("object"!==c)return new m("Invalid "+a+" `"+l+"` of type `"+c+"` supplied to `"+i+"`, expected `object`.");var d=n({},t[r],e);for(var h in d){var u=e[h];if(s(e,h)&&"function"!=typeof u)return g(i,a,l,h,b(u));if(!u)return new m("Invalid "+a+" `"+l+"` key `"+h+"` supplied to `"+i+"`.\nBad object: "+JSON.stringify(t[r],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var f=u(p,h,i,a,l+"."+h,o);if(f)return f}return null}))}};function u(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function m(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function f(e){var r={},a=0;function n(n,s,l,p,c,h,u){if(p=p||d,h=h||l,u!==o){if(t){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}if("undefined"!=typeof console){var y=p+":"+l;!r[y]&&a<3&&(i("You are manually calling a React.PropTypes validation function for the `"+h+"` prop on `"+p+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),r[y]=!0,a++)}}return null==s[l]?n?null===s[l]?new m("The "+c+" `"+h+"` is marked as required in `"+p+"`, but its value is `null`."):new m("The "+c+" `"+h+"` is marked as required in `"+p+"`, but its value is `undefined`."):null:e(s,l,p,c,h)}var s=n.bind(null,!1);return s.isRequired=n.bind(null,!0),s}function y(e){return f((function(t,r,i,a,n,o){var s=t[r];return x(s)!==e?new m("Invalid "+a+" `"+n+"` of type `"+b(s)+"` supplied to `"+i+"`, expected `"+e+"`.",{expectedType:e}):null}))}function g(e,t,r,i,a){return new m((e||"React class")+": "+t+" type `"+r+"."+i+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+a+"`.")}function _(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(_);if(null===t||e(t))return!0;var i=function(e){var t=e&&(r&&e[r]||e[c]);if("function"==typeof t)return t}(t);if(!i)return!1;var a,n=i.call(t);if(i!==t.entries){for(;!(a=n.next()).done;)if(!_(a.value))return!1}else for(;!(a=n.next()).done;){var o=a.value;if(o&&!_(o[1]))return!1}return!0;default:return!1}}function x(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function b(e){if(null==e)return""+e;var t=x(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function v(e){var t=b(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return m.prototype=Error.prototype,h.checkPropTypes=l,h.resetWarningCache=l.resetWarningCache,h.PropTypes=h,h}},"./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/(e,t,r)=>{var i=r(/*! react-is */"./node_modules/react-is/index.js");e.exports=r(/*! ./factoryWithTypeCheckers */"./node_modules/prop-types/factoryWithTypeCheckers.js")(i.isElement,!0)},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/e=>{e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"./node_modules/prop-types/lib/has.js":
/*!********************************************!*\
  !*** ./node_modules/prop-types/lib/has.js ***!
  \********************************************/e=>{e.exports=Function.call.bind(Object.prototype.hasOwnProperty)},"./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/(e,t)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,r=e?Symbol.for("react.element"):60103,i=e?Symbol.for("react.portal"):60106,a=e?Symbol.for("react.fragment"):60107,n=e?Symbol.for("react.strict_mode"):60108,o=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,p=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,h=e?Symbol.for("react.suspense"):60113,u=e?Symbol.for("react.suspense_list"):60120,m=e?Symbol.for("react.memo"):60115,f=e?Symbol.for("react.lazy"):60116,y=e?Symbol.for("react.block"):60121,g=e?Symbol.for("react.fundamental"):60117,_=e?Symbol.for("react.responder"):60118,x=e?Symbol.for("react.scope"):60119;function b(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:var u=e.type;switch(u){case p:case c:case a:case o:case n:case h:return u;default:var y=u&&u.$$typeof;switch(y){case l:case d:case f:case m:case s:return y;default:return t}}case i:return t}}}var v=p,C=c,S=l,$=s,w=r,T=d,k=a,E=f,A=m,P=i,I=o,M=n,D=h,F=!1;function R(e){return b(e)===c}t.AsyncMode=v,t.ConcurrentMode=C,t.ContextConsumer=S,t.ContextProvider=$,t.Element=w,t.ForwardRef=T,t.Fragment=k,t.Lazy=E,t.Memo=A,t.Portal=P,t.Profiler=I,t.StrictMode=M,t.Suspense=D,t.isAsyncMode=function(e){return F||(F=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),R(e)||b(e)===p},t.isConcurrentMode=R,t.isContextConsumer=function(e){return b(e)===l},t.isContextProvider=function(e){return b(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return b(e)===d},t.isFragment=function(e){return b(e)===a},t.isLazy=function(e){return b(e)===f},t.isMemo=function(e){return b(e)===m},t.isPortal=function(e){return b(e)===i},t.isProfiler=function(e){return b(e)===o},t.isStrictMode=function(e){return b(e)===n},t.isSuspense=function(e){return b(e)===h},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===a||e===c||e===o||e===n||e===h||e===u||"object"==typeof e&&null!==e&&(e.$$typeof===f||e.$$typeof===m||e.$$typeof===s||e.$$typeof===l||e.$$typeof===d||e.$$typeof===g||e.$$typeof===_||e.$$typeof===x||e.$$typeof===y)},t.typeOf=b}()},"./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/(e,t,r)=>{e.exports=r(/*! ./cjs/react-is.development.js */"./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/shallow-equal/dist/index.esm.js ***!
  \******************************************************/(e,t,r)=>{function i(e,t){if(e===t)return!0;if(!e||!t)return!1;var r=Object.keys(e),i=Object.keys(t),a=r.length;if(i.length!==a)return!1;for(var n=0;n<a;n++){var o=r[n];if(e[o]!==t[o]||!Object.prototype.hasOwnProperty.call(t,o))return!1}return!0}function a(e,t){if(e===t)return!0;if(!e||!t)return!1;var r=e.length;if(t.length!==r)return!1;for(var i=0;i<r;i++)if(e[i]!==t[i])return!1;return!0}r.r(t),r.d(t,{shallowEqualArrays:()=>a,shallowEqualObjects:()=>i})},"./src/Component.ts":
/*!**************************!*\
  !*** ./src/Component.ts ***!
  \**************************/function(e,t,r){var i=this&&this.__rest||function(e,t){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(i=Object.getOwnPropertySymbols(e);a<i.length;a++)t.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(e,i[a])&&(r[i[a]]=e[i[a]])}return r},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var n=a(r(/*! ./useMediaQuery */"./src/useMediaQuery.ts"));t.default=function(e){var t=e.children,r=e.device,a=e.onChange,o=i(e,["children","device","onChange"]),s=(0,n.default)(o,r,a);return"function"==typeof t?t(s):s?t:null}},"./src/Context.ts":
/*!************************!*\
  !*** ./src/Context.ts ***!
  \************************/(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});var i=(0,r(/*! react */"react").createContext)(void 0);t.default=i},"./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/function(e,t,r){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Context=t.toQuery=t.useMediaQuery=t.default=void 0;var a=i(r(/*! ./useMediaQuery */"./src/useMediaQuery.ts"));t.useMediaQuery=a.default;var n=i(r(/*! ./Component */"./src/Component.ts"));t.default=n.default;var o=i(r(/*! ./toQuery */"./src/toQuery.ts"));t.toQuery=o.default;var s=i(r(/*! ./Context */"./src/Context.ts"));t.Context=s.default},"./src/mediaQuery.ts":
/*!***************************!*\
  !*** ./src/mediaQuery.ts ***!
  \***************************/function(e,t,r){var i=this&&this.__assign||function(){return i=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},i.apply(this,arguments)},a=this&&this.__rest||function(e,t){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(i=Object.getOwnPropertySymbols(e);a<i.length;a++)t.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(e,i[a])&&(r[i[a]]=e[i[a]])}return r},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r(/*! prop-types */"./node_modules/prop-types/index.js")),s=o.default.oneOfType([o.default.string,o.default.number]),l={all:o.default.bool,grid:o.default.bool,aural:o.default.bool,braille:o.default.bool,handheld:o.default.bool,print:o.default.bool,projection:o.default.bool,screen:o.default.bool,tty:o.default.bool,tv:o.default.bool,embossed:o.default.bool},p={orientation:o.default.oneOf(["portrait","landscape"]),scan:o.default.oneOf(["progressive","interlace"]),aspectRatio:o.default.string,deviceAspectRatio:o.default.string,height:s,deviceHeight:s,width:s,deviceWidth:s,color:o.default.bool,colorIndex:o.default.bool,monochrome:o.default.bool,resolution:s,type:Object.keys(l)},c=a(p,["type"]),d=i({minAspectRatio:o.default.string,maxAspectRatio:o.default.string,minDeviceAspectRatio:o.default.string,maxDeviceAspectRatio:o.default.string,minHeight:s,maxHeight:s,minDeviceHeight:s,maxDeviceHeight:s,minWidth:s,maxWidth:s,minDeviceWidth:s,maxDeviceWidth:s,minColor:o.default.number,maxColor:o.default.number,minColorIndex:o.default.number,maxColorIndex:o.default.number,minMonochrome:o.default.number,maxMonochrome:o.default.number,minResolution:s,maxResolution:s},c),h=i(i({},l),d);t.default={all:h,types:l,matchers:p,features:d}},"./src/toQuery.ts":
/*!************************!*\
  !*** ./src/toQuery.ts ***!
  \************************/function(e,t,r){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=i(r(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),n=i(r(/*! ./mediaQuery */"./src/mediaQuery.ts"));t.default=function(e){var t=[];return Object.keys(n.default.all).forEach((function(r){var i=e[r];null!=i&&t.push(function(e,t){var r=(0,a.default)(e);return"number"==typeof t&&(t="".concat(t,"px")),!0===t?r:!1===t?"not ".concat(r):"(".concat(r,": ").concat(t,")")}(r,i))})),t.join(" and ")}},"./src/useMediaQuery.ts":
/*!******************************!*\
  !*** ./src/useMediaQuery.ts ***!
  \******************************/function(e,t,r){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(/*! react */"react"),n=i(r(/*! matchmediaquery */"./node_modules/matchmediaquery/index.js")),o=i(r(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),s=r(/*! shallow-equal */"./node_modules/shallow-equal/dist/index.esm.js"),l=i(r(/*! ./toQuery */"./src/toQuery.ts")),p=i(r(/*! ./Context */"./src/Context.ts")),c=function(e){if(e)return Object.keys(e).reduce((function(t,r){return t[(0,o.default)(r)]=e[r],t}),{})},d=function(){var e=(0,a.useRef)(!1);return(0,a.useEffect)((function(){e.current=!0}),[]),e.current},h=function(e){var t=function(){return function(e){return e.query||(0,l.default)(e)}(e)},r=(0,a.useState)(t),i=r[0],n=r[1];return(0,a.useEffect)((function(){var e=t();i!==e&&n(e)}),[e]),i};t.default=function(e,t,r){var i=function(e){var t=(0,a.useContext)(p.default),r=function(){return c(e)||c(t)},i=(0,a.useState)(r),n=i[0],o=i[1];return(0,a.useEffect)((function(){var e=r();(0,s.shallowEqualObjects)(n,e)||o(e)}),[e,t]),n}(t),o=h(e);if(!o)throw new Error("Invalid or missing MediaQuery!");var l=function(e,t){var r=function(){return(0,n.default)(e,t||{},!!t)},i=(0,a.useState)(r),o=i[0],s=i[1],l=d();return(0,a.useEffect)((function(){if(l){var e=r();return s(e),function(){e&&e.dispose()}}}),[e,t]),o}(o,i),u=function(e){var t=(0,a.useState)(e.matches),r=t[0],i=t[1];return(0,a.useEffect)((function(){var t=function(e){i(e.matches)};return e.addListener(t),i(e.matches),function(){e.removeListener(t)}}),[e]),r}(l),m=d();return(0,a.useEffect)((function(){m&&r&&r(u)}),[u]),(0,a.useEffect)((function(){return function(){l&&l.dispose()}}),[]),u}},react:
/*!**************************************************************************************!*\
  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
  \**************************************************************************************/t=>{t.exports=e}},r={};function i(e){var a=r[e];if(void 0!==a)return a.exports;var n=r[e]={exports:{}};return t[e].call(n.exports,n,n.exports,i),n.exports}return i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i("./src/index.ts")})(),reactResponsive.exports=factory(React__default),dayjs.extend(isBetween),function(e){const t=/^\d{4}-\d{2}-\d{2}$/;e.validate=(e,r,i,a)=>{if(!e||!r)return!1;if(dayjs(e).isAfter(r))return!1;if(i&&i.length&&i.some((t=>[e,r].includes(t))))return!1;if(a&&a.length){if(![e,r].every((e=>dayjs(e).isBetween(a[0],a[1],"day","[]"))))return!1;if(!a.every((e=>t.test(e))))return!1}return!0},e.validateSingle=(e,r,i)=>{if(0===e.length)return!1;if(r&&r.length&&r.some((t=>e===t)))return!1;if(i&&i.length&&!dayjs(e).isBetween(i[0],i[1],"day","[]")){if(!dayjs(e).isBetween(i[0],i[1],"day","[]"))return!1;if(!i.every((e=>t.test(e))))return!1}return!0},e.getFormattedRawValue=(e,t)=>{const[r,i,a]=e.split("-"),n=[a,i,r];let o;if(t){const[e,r,i]=t.split("-");o=[i,r,e]}return{start:n,end:o}},e.sleep=(e,t)=>new Promise((r=>{const i=setTimeout(r,e);t.signal.addEventListener("abort",(()=>{clearTimeout(i)}))}))}(DateInputHelper||(DateInputHelper={}));const useEventListener=(e,t,r=window)=>{const i=useRef();useEffect((()=>{i.current=t}),[t]),useEffect((()=>{if(!(r&&r.addEventListener))return;const t=e=>i.current(e);return r.addEventListener(e,t),()=>{r.removeEventListener(e,t)}}),[e,r])},MONTHS_WITH_31_DAYS=[1,3,5,7,8,10,12],MONTHS_WITH_30_DAYS=[4,6,9,11];var DateHelper,SimpleIdGenerator,StringHelper;!function(e){e.clampDay=(t,r,i)=>{const a=parseInt(t),n=parseInt(r),o=parseInt(i);return 0==a?"1":MONTHS_WITH_31_DAYS.includes(n)?Math.min(a,31).toString():MONTHS_WITH_30_DAYS.includes(n)?Math.min(a,30).toString():2===n?e.isLeapYear(o)?Math.min(a,29).toString():Math.min(a,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,r="HH:mm")=>{const i=dayjs(e,r);return dayjs(t,r).diff(i,"minute")}}(DateHelper||(DateHelper={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(SimpleIdGenerator||(SimpleIdGenerator={})),function(e){e.transformWithSpaces=(e,t)=>{const r="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const r=Math.floor(t/9);return e.length>=2*r||1===e.split(" ").length&&e.length>r},e.truncateOneLine=(e,t,r,i)=>{let a=0;t>r&&(a=Math.floor((t-r)/8));const n=i+a;if(n<e.length){const t=Math.floor(n/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e}}(StringHelper||(StringHelper={}));const InputSection$2=styled.div`
    position: relative;
    display: flex;
    align-items: center;
    flex: 1;
    height: 100%;
    left: ${e=>e.$readOnly?"-0.5rem":""};
    pointer-events: ${e=>e.$readOnly?"none;":""};

    ${e=>"start"===e.$variant?css`
                ${VariantInputStyle}
                left: ${e.$readOnly?"0":""};
            `:"range"===e.$variant?css`
                ${VariantInputStyle}
                left: ${e.$readOnly?"0":"1rem"};
            `:void 0}

    @media screen and (max-width: 374px) {
        position: absolute;
        height: 1.625rem;

        ${e=>"start"===e.$variant?css`
                    top: 0.75rem;
                    height: 1.625rem;
                    width: 50%;
                `:"range"===e.$variant?css`
                    bottom: 0.75rem;
                    height: 1.625rem;
                    width: calc(100% - 1rem); // paddingLeft is 1rem
                `:void 0}
    }

    ${MediaQuery.MaxWidth.mobileS} {
        ${e=>{if("start"===e.$variant)return css`
                    width: 75%;
                `}}
    }
`,InputContainer$3=styled.div`
    position: absolute;
    height: 100%;
    display: flex;
    align-items: center;

    ${e=>{if(e.$isHover)return css`
                ${BaseInput}, ${Divider$3} {
                    color: ${Color.Neutral[4]};
                }
            `}}
`,BaseInput=styled.input`
    ${TextStyleHelper.getTextStyle("Body","regular")}
    background: transparent;
    height: 100%;
    border: none;
    text-align: center;
    padding: 0;

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

    :focus,
    :active {
        outline: none;
    }

    ${e=>{if(e.disabled)return css`
                cursor: not-allowed;
            `}}
`,DayInput=styled(BaseInput)`
    width: 2.5rem;
`,MonthInput=styled(BaseInput)`
    width: 2.6rem;
`,YearInput=styled(BaseInput)`
    width: 3.5rem;
`,Divider$3=styled(Text.Body)`
    margin: 0.1rem 0.2rem 0 0.2rem;
    ${e=>{if(e.$hide)return css`
                color: ${Color.Neutral[3](e)};
            `}}
`,Placeholder=styled.div`
    ${TextStyleHelper.getTextStyle("Body","regular")}
    background-color: ${Color.Neutral[8]};
    color: ${Color.Neutral[3]};
    position: absolute;
    display: flex;
    align-items: center;
    width: calc(100% - 0.5rem); // 0.5rem is the focus blur shadow area
    height: calc(100% - 0.5rem); // 0.5rem is the focus blur shadow area
    cursor: pointer;

    ${MediaQuery.MaxWidth.mobileM} {
        width: 100%;

        ${e=>{if("range"===e.$variant)return css`
                        width: calc(100% - 0.5rem);
                    `}}
    }

    ${e=>e.$disabled?css`
                background-color: ${Color.Neutral[6](e)};
                cursor: not-allowed;
            `:e.$isDirty?css`
                display: none;
            `:void 0}
`,VariantInputStyle=css`
    ${DayInput} {
        width: 1.75rem;
    }
    ${DayInput} + ${Divider$3} {
        margin: 0.1rem 0 0 0.25rem;
    }
    ${MonthInput} {
        width: 2.5rem;
    }
    ${MonthInput} + ${Divider$3} {
        margin: 0.1rem 0.25rem 0 0;
    }
    ${YearInput} {
        width: 3rem;
    }
`;var customParseFormat$1={exports:{}};customParseFormat$1.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,i=/\d\d?/,a=/\d*[^-_:/,()\s\d]+/,n={},o=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),r=60*t[1]+(+t[2]||0);return 0===r?0:"+"===t[0]?-r:r}(e)}],p=function(e){var t=n[e];return t&&(t.indexOf?t:t.s.concat(t.f))},c=function(e,t){var r,i=n.meridiem;if(i){for(var a=1;a<=24;a+=1)if(e.indexOf(i(a,0,t))>-1){r=a>12;break}}else r=e===(t?"pm":"PM");return r},d={A:[a,function(e){this.afternoon=c(e,!1)}],a:[a,function(e){this.afternoon=c(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[i,s("seconds")],ss:[i,s("seconds")],m:[i,s("minutes")],mm:[i,s("minutes")],H:[i,s("hours")],h:[i,s("hours")],HH:[i,s("hours")],hh:[i,s("hours")],D:[i,s("day")],DD:[r,s("day")],Do:[a,function(e){var t=n.ordinal,r=e.match(/\d+/);if(this.day=r[0],t)for(var i=1;i<=31;i+=1)t(i).replace(/\[|\]/g,"")===e&&(this.day=i)}],M:[i,s("month")],MM:[r,s("month")],MMM:[a,function(e){var t=p("months"),r=(p("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],MMMM:[a,function(e){var t=p("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[r,function(e){this.year=o(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function h(r){var i,a;i=r,a=n&&n.formats;for(var o=(r=i.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,r,i){var n=i&&i.toUpperCase();return r||a[i]||e[i]||a[n].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,r){return t||r.slice(1)}))}))).match(t),s=o.length,l=0;l<s;l+=1){var p=o[l],c=d[p],h=c&&c[0],u=c&&c[1];o[l]=u?{regex:h,parser:u}:p.replace(/^\[|\]$/g,"")}return function(e){for(var t={},r=0,i=0;r<s;r+=1){var a=o[r];if("string"==typeof a)i+=a.length;else{var n=a.regex,l=a.parser,p=e.slice(i),c=n.exec(p)[0];l.call(t,c),e=e.replace(c,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var r=e.hours;t?r<12&&(e.hours+=12):12===r&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,r){r.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(o=e.parseTwoDigitYear);var i=t.prototype,a=i.parse;i.parse=function(e){var t=e.date,i=e.utc,o=e.args;this.$u=i;var s=o[1];if("string"==typeof s){var l=!0===o[2],p=!0===o[3],c=l||p,d=o[2];p&&(d=o[2]),n=this.$locale(),!l&&d&&(n=r.Ls[d]),this.$d=function(e,t,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var i=h(t)(e),a=i.year,n=i.month,o=i.day,s=i.hours,l=i.minutes,p=i.seconds,c=i.milliseconds,d=i.zone,u=new Date,m=o||(a||n?1:u.getDate()),f=a||u.getFullYear(),y=0;a&&!n||(y=n>0?n-1:u.getMonth());var g=s||0,_=l||0,x=p||0,b=c||0;return d?new Date(Date.UTC(f,y,m,g,_,x,b+60*d.offset*1e3)):r?new Date(Date.UTC(f,y,m,g,_,x,b)):new Date(f,y,m,g,_,x,b)}catch(e){return new Date("")}}(t,s,i),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),c&&t!=this.format(s)&&(this.$d=new Date("")),n={}}else if(s instanceof Array)for(var u=s.length,m=1;m<=u;m+=1){o[1]=s[m-1];var f=r.apply(this,o);if(f.isValid()){this.$d=f.$d,this.$L=f.$L,this.init();break}m===u&&(this.$d=new Date(""))}else a.call(this,e)}}}();var customParseFormat=customParseFormat$1.exports;dayjs.extend(customParseFormat);const StandAloneInput=({action:e,disabled:t,confirmedValue:r,onChange:i,onFocus:a,readOnly:n,names:o,value:s,variant:l,focused:p,focusType:c,isOpen:d})=>{const[h,u]=useState(""),[m,f]=useState(""),[y,g]=useState(""),[_,x]=useState("none"),[b,v]=useState(!1),C=useRef(null),S=useRef(null),$=useRef(null),w=useRef(null),T=useRef(h),k=useRef(m),E=useRef(y),A=useRef(_),P=e=>{T.current=e,u(e)},I=e=>{k.current=e,f(e)},M=e=>{E.current=e,g(e)},D=e=>{A.current=e,x(e)};useEffect((()=>(document.addEventListener("mousedown",F),C.current&&C.current.addEventListener("keydown",R),()=>{document.removeEventListener("mousedown",F),C.current&&C.current.removeEventListener("keydown",R)})),[_]),useEffect((()=>{_===o[0]&&2===h.length&&$.current&&p&&$.current.focus()}),[h]),useEffect((()=>{_===o[1]&&2===m.length&&w.current&&p&&w.current.focus()}),[m]),useEffect((()=>{s||d||v(!1),V(s)}),[s,d]),useEffect((()=>{p&&S.current.focus()}),[p]);const F=e=>{t||n||C&&C.current.contains(e.target)||"none"!==A.current&&D("none")},R=e=>{e.target.name===o[2]&&"Tab"===e.code&&D("none")},j=t=>{if(["hover","unhover"].includes(e))return D(o[0]),void S.current.focus();const r=t.target.name;D(r),t.target.select(),G(r)},L=e=>{const t=e.target.name,r=StringHelper.padValue(e.target.value,!0);switch(t){case o[0]:P(r);break;case o[1]:I(r);case o[2]:}const i=h.length&&m.length&&4===y.length,a=t===o[0];if(i){const e=dayjs(`${y}-${m}-${h}`,"YYYY-MM-DD",!0).isValid(),t=a?r:h,{year:i,month:n,day:o}=H(y,m,t,e);P(o),I(n),e||M(i)}},B=e=>{const t=e.target.name,r=e.target.value.replace(/[^0-9]/g,"");switch(t){case o[0]:P(r),z(r,t);break;case o[1]:I(r),z(r,t);break;case o[2]:M(r),z(r,t)}},O=()=>{v(!0)},N=e=>{"Backspace"!==e.code&&"Backspace"!==e.key||(_===o[1]&&0===m.length&&S.current.focus(),_===o[2]&&0===y.length&&$.current.focus())},V=e=>{if(void 0===e||""===e)P(""),I(""),M("");else{const t=new Date(e);if(!isNaN(t.getTime())){const e=(t.getMonth()+1).toString(),r=t.getFullYear().toString(),i=DateHelper.clampDay(t.getDate().toString(),e,r);P(StringHelper.padValue(i)),I(StringHelper.padValue(e)),M(r)}}},H=(e,t,i,a)=>{let n="",o="",s="";if(a){const r=DateHelper.clampMonth(t);o=StringHelper.padValue(r),s=StringHelper.padValue(DateHelper.clampDay(i,r,e))}else if(!a&&dayjs(r).isValid()){const[e,t,i]=r.split("-");n=e,o=t,s=i}return{year:n,month:o,day:s}},z=(e,t)=>{const r=t.split("-")[1],a={year:y,month:m,day:h};a[r]=e;const n=W(a);i(n)},G=e=>{a(e)},W=e=>{const t=[e.year,e.month,e.day];if(4===e.year.length&&2==e.month.length&&2==e.day.length){let r="";r=t.join("-");const i=dayjs(r,"YYYY-MM-DD",!0).isValid();if(!i){const t=H(e.year,e.month,e.day,i);r=Object.values(t).join("-")}return dayjs(r).isValid()?r:INVALID_VALUE$1}return t.every((e=>""===e))?"":INVALID_VALUE$1};return jsxs(InputSection$2,{$readOnly:n,$variant:l,onClick:()=>{"none"===_&&S.current&&S.current.focus()},onFocus:e=>{const t=e.target.name;["start-day","end-day"].includes(t)&&v(!0)},children:[jsxs(InputContainer$3,{ref:C,$isHover:"hover"===e,children:[jsx(DayInput,{name:o[0],maxLength:2,value:h,ref:S,onFocus:j,onBlur:L,onChange:B,disabled:t,type:"text",inputMode:"numeric",pattern:"[0-9]{2}","data-testid":`${o[0]}-input`,"aria-label":`${o[0]}-input`,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:_!==o[0]||n?"DD":""}),jsx(Divider$3,{$hide:0===h.length,children:"/"}),jsx(MonthInput,{name:o[1],maxLength:2,value:m,ref:$,onFocus:j,onBlur:L,onChange:B,onKeyDown:N,disabled:t,type:"text",inputMode:"numeric",pattern:"[0-9]{2}","data-testid":`${o[1]}-input`,"aria-label":`${o[1]}-input`,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:_!==o[1]||n?"MM":""}),jsx(Divider$3,{$hide:0===m.length,children:"/"}),jsx(YearInput,{name:o[2],maxLength:4,value:y,ref:w,onFocus:j,onBlur:L,onChange:B,onKeyDown:N,disabled:t,type:"text",inputMode:"numeric",pattern:"[0-9]{4}","data-testid":`${o[2]}-input`,"aria-label":`${o[2]}-input`,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:p&&_===o[2]&&!n?"":"YYYY"})]}),(()=>{if(!s&&!n&&!("start"===l&&"start"===c||"range"===l&&"end"===c))switch(l){case"start":case"range":return jsx(Placeholder,{$isDirty:b,$disabled:t,$variant:l,onClick:O,children:"start"===l?"From":"To"});default:return}})()]})},INVALID_VALUE$1="Invalid Date",calendarValue=(e,t)=>e===INVALID_VALUE$1?t.calendar:e&&e.length?e:void 0,dateInputReducer=(e,t)=>{const{type:r,value:i}=t;let a="";switch(i&&i.length?a=i:e.selected&&e.selected.length?a=e.selected:e.confirmed&&(a=e.confirmed),r){case"default":return{...e,currentType:"default"};case"hover":return{...e,hover:i,input:i,currentType:"hover"};case"unhover":return{...e,hover:"",input:e.selected,currentType:"unhover"};case"selected":return{...e,calendar:calendarValue(i,e),hover:"",input:i,selected:i,currentType:"selected"};case"confirmed":return{...e,calendar:calendarValue(a,e),confirmed:a,input:a,selected:a,currentType:"confirmed"};case"reset":return{...e,calendar:calendarValue(e.confirmed,e),confirmed:e.confirmed,input:e.confirmed,selected:e.confirmed,currentType:"reset"};case"invalid":return{...e,calendar:void 0,confirmed:e.confirmed,input:"",selected:"",currentType:"invalid"};default:return e}},INITIAL_INPUT_VALUES={calendar:void 0,confirmed:"",hover:"",input:"",selected:"",currentType:"confirmed"},BaseDesignTokenSet={InputBoxShadow:css`
        inset 0 0 6px 1px ${Color.Shadow.Accent}
    `,InputErrorBoxShadow:css`
        inset 0 0 6px 1px ${Color.Shadow.Red}
    `,ElevationBoxShadow:css`
      0px 2px 8px ${Color.Shadow.Elevation}
 `},DesignTokenSpec={collections:{base:BaseDesignTokenSet},defaultValue:"base"},getThemeDesignToken=e=>t=>{const r=t.theme,i=getCollection(DesignTokenSpec,r[ThemeContextKeys.designTokenScheme]);return r.options?.designToken?getValue(i,e,r.options.designToken):getValue(i,e)},DesignToken={InputBoxShadow:getThemeDesignToken("InputBoxShadow"),InputErrorBoxShadow:getThemeDesignToken("InputErrorBoxShadow"),ElevationBoxShadow:getThemeDesignToken("ElevationBoxShadow")},Container$g=styled.div`
    display: flex;
    position: relative;
    align-items: center;
    border: 1px solid ${Color.Neutral[5]};
    border-radius: 0.25rem;
    background: ${Color.Neutral[8]};
    height: 3rem;
    width: 100%;
    padding: 0.1rem 1rem 0;

    :focus,
    :focus-within {
        border: 1px solid ${Color.Accent.Light[1]};
        box-shadow: ${DesignToken.InputBoxShadow};
    }

    ${e=>{if(e.$readOnly)return css`
                ${ArrowRangeIcon} {
                    left: 43%;
                }
            `}}

    @media screen and (max-width: 374px) {
        ${e=>"range"===e.$variant?css`
                    width: 100%;
                    height: 5.125rem;

                    ${ArrowRangeIcon} {
                        transform: unset;
                        left: ${e.$readOnly?"48%":"57%"};
                        top: 1rem;
                    }
                `:"single"===e.$variant?css`
                    width: 100%;
                `:void 0}
    }

    ${e=>e.$readOnly?css`
                border: none;
                padding-left: 0rem;
                background: transparent !important;

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.$disabled?css`
                background: ${Color.Neutral[6](e)};
                :hover {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${Color.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$error?css`
                border: 1px solid ${Color.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${Color.Validation.Red.Border(e)};
                    box-shadow: ${DesignToken.InputErrorBoxShadow};
                }
            `:void 0}
`,ArrowRangeIcon=styled(IconButton)`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    padding: 0;

    ${MediaQuery.MaxWidth.mobileS} {
        left: 71% !important;
    }
`,ArrowRight$1=styled(ArrowRightIcon)`
    color: ${Color.Neutral[3]};
    cursor: pointer;
    width: 1.125rem;
    height: 1.125rem;
`,IndicateBar=styled.div`
    position: absolute;
    background-color: ${Color.Primary};
    height: 0.125rem;
    width: calc(100% - 50% - 2rem); // paddingX is 2rem,
    transition: left 350ms ease-in-out, opacity 350ms ease-in-out;
    left: 1rem;
    bottom: -0.1rem;

    ${e=>{switch(e.$stickTo){case"top":return css`
                    top: 3rem;
                `;case"bottom":return css`
                    bottom: -0.1rem;
                `}}}

    ${e=>{switch(e.$position){case"start":return css`
                    left: 1rem;
                    opacity: 1;
                `;case"end":return css`
                    left: calc(50% + 1rem);
                    opacity: 1;
                `;case"none":return css`
                    left: 1rem;
                    opacity: 0;
                `}}}

    ${e=>{if(!e.$disableMobile)return css`
                @media screen and (max-width: 374px) {
                    display: none;
                }
            `}}
`,DateInput=({between:e,disabled:t,disabledDates:r,error:i,value:a,valueEnd:n,onChange:o,onBlur:s,onChangeRaw:l,onBlurRaw:p,withButton:c=!0,readOnly:d,id:h,variant:u="single",...m})=>{const[f,y]=useState(!1),[g,_]=useState("calendar"),[x,b]=useState("default"),[v,C]=useState({field:"none",type:"none",count:0}),[S,$]=useState(!1),w=useRef(null),T=useRef(),k=reactResponsive.exports.useMediaQuery({maxWidth:MediaWidths$1.mobileL}),E=c||k,[A,P]=useReducer(dateInputReducer,INITIAL_INPUT_VALUES),[I,M]=useReducer(dateInputReducer,INITIAL_INPUT_VALUES);useEventListener("keydown",(function(e){"Escape"===e.code&&R("reset");if("Enter"===e.code&&"range"===u&&!E){const e=[A.selected,I.selected].every(Boolean);R(e?"confirmed":"reset")}}),w.current),useEffect((()=>{P({type:"confirmed",value:a}),"range"===u&&M({type:"confirmed",value:n})}),[]),useEffect((()=>{P({type:"selected",value:a}),"range"===u&&M({type:"selected",value:n})}),[a,n]),useEffect((()=>{const e=new AbortController;if([A.currentType,I.currentType].includes("unhover")){(async()=>{await DateInputHelper.sleep(250,e),O("default")})()}return()=>{e.abort()}}),[A.currentType,I.currentType]),useEffect((()=>{"single"!==u&&"none"!==v.type&&C((e=>({...v,count:e.count+1})))}),[v.type]);const D=(e,t)=>{if(e===INVALID_VALUE$1||""===e)return void(""===e&&O("selected",e));const r=B(e);O("selected",e),$(!r),_(t),N(r,t,e)},F=e=>{const t=e.split("-")[0];y(!0),C({...v,field:e,type:t})},R=e=>{if(["month-options","year-options"].includes(x))j();else{switch(e){case"reset":O("reset");break;case"confirmed":if(S){O("reset");break}O("confirmed"),L()}C({field:"none",type:"none",count:0}),y(!1)}},j=()=>{T.current.defaultView()},L=e=>{const t=v.type;let r=A.selected,i=I.selected;if(e)switch(t){case"end":i=e;break;case"start":r=e}if(o&&o(r,i),l){const{start:e,end:t}=DateInputHelper.getFormattedRawValue(r,i);l(e,t)}},B=t=>{let i=!0;const a={start:A.selected,end:I.selected};if(a[v.type]=t,"range"===u)switch(v.type){case"start":i=DateInputHelper.validate(t,a.end,r,e);break;case"end":i=DateInputHelper.validate(a.start,t,r,e)}else"single"===u&&(i=DateInputHelper.validateSingle(t,r,e));return i},O=(t,i)=>{let a=v.type,n=!0;switch(["confirmed","reset"].includes(t)&&(a="none",E&&"range"===u&&(n=DateInputHelper.validate(A.selected,I.selected,r,e))),n||(P({type:"reset"}),M({type:"reset"})),a){case"start":if("invalid"===t)return void M({type:t});P({type:t,value:i});break;case"end":if("invalid"===t)return void P({type:t});M({type:t,value:i});break;default:P({type:t,value:i}),"range"===u&&M({type:t,value:i})}},N=(e,t,r)=>{if("range"===u&&!e){const{field:e,type:t}=V();C({field:e,type:t,count:1}),O("invalid")}if(!["month-options","year-options"].includes(x)){if(!E&&"single"===u&&e||!E&&"range"===u&&v.count>=2&&e)return y(!1),O("confirmed"),L(r),void C({field:"none",type:"none",count:0});if(!(v.count>=2)&&"calendar"===t&&"range"===u){const{field:e,type:t}=V();C((r=>({field:e,type:t,count:r.count+1})))}}},V=()=>{const e="start"===v.type?"end":"start";return{field:`${e}-day`,type:e}};return jsxs(Container$g,{ref:w,$disabled:t,$error:i,id:h,"data-testid":m["data-testid"],$readOnly:d,$variant:u,onBlur:e=>{w&&!w.current.contains(e.relatedTarget)&&(O("reset"),C({field:"none",type:"none",count:0}),((e,t)=>{if(s&&s(e.confirmed,t.confirmed),p){const{start:r,end:i}=DateInputHelper.getFormattedRawValue(e.confirmed,t.confirmed);p(r,i)}})(A,I),y(!1),$(!1))},tabIndex:-1,...m,children:[jsx(StandAloneInput,{disabled:t,onChange:e=>D(e,"input"),onFocus:F,readOnly:d,focused:"start"===v.type,names:["start-day","start-month","start-year"],value:A.input,confirmedValue:A.confirmed,variant:"range"===u?"start":"single",action:A.currentType,focusType:v.type,isOpen:f}),(()=>{if("range"===u)return jsxs(Fragment,{children:[jsx(ArrowRangeIcon,{tabIndex:-1,children:jsx(ArrowRight$1,{})}),jsx(StandAloneInput,{disabled:t,onChange:e=>D(e,"input"),onFocus:F,readOnly:d,focused:"end"===v.type,names:["end-day","end-month","end-year"],value:I.input,confirmedValue:I.confirmed,variant:u,action:I.currentType,focusType:v.type,isOpen:f})]})})(),(()=>{if("single"!==u&&!t&&!d)return jsx(IndicateBar,{$position:v.type||"none"})})(),jsx(InternalCalendar,{ref:T,type:"input",disabledDates:r,isOpen:f,withButton:E,actionComponent:g,currentFocus:v.type,value:A.calendar,endValue:I.calendar,between:e,variant:u,onCalendarView:e=>{b(e)},onHover:e=>{e?O("hover",e):O("unhover")},onSelect:e=>D(e,"calendar"),onDismiss:R})]})},ImgPaths={400:{base:"https://assets.life.gov.sg/react-design-system/img/error/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/400@3x.png"},403:{base:"https://assets.life.gov.sg/react-design-system/img/error/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/403@3x.png"},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/404@3x.png"},408:{base:"https://assets.life.gov.sg/react-design-system/img/error/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/408@3x.png"},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@3x.png"},502:{base:"https://assets.life.gov.sg/react-design-system/img/error/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/502@3x.png"},503:{base:"https://assets.life.gov.sg/react-design-system/img/error/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/503@3x.png"},504:{base:"https://assets.life.gov.sg/react-design-system/img/error/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/504@3x.png"},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/confirmation@3x.png"},"insufficient-credits":{base:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit.png",md:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit@3x.png"},inactivity:{base:"https://assets.life.gov.sg/react-design-system/img/error/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/inactivity@3x.png"},"link-error":{base:"https://assets.life.gov.sg/react-design-system/img/error/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/link-error@3x.png"},logout:{base:"https://assets.life.gov.sg/react-design-system/img/error/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/logout@3x.png"},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found@3x.png"},"payment-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful@3x.png"},"transfer-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful@3x.png"},"unsupported-browser":{base:"https://assets.life.gov.sg/react-design-system/img/error/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@3x.png"},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/warning@3x.png"}},imgAttributeHelper=e=>{const{base:t,md:r,lg:i}=e;return{srcSet:`${t} 400w, ${r} 800w, ${i} 1200w`,src:i,sizes:`(max-width: ${MediaWidths$1.mobileL}px) 400px, (max-width: ${MediaWidths$1.tablet}px) 800px, 1200px`}},ERROR_DISPLAY_DATA=new Map([["400",{img:imgAttributeHelper(ImgPaths[400]),title:"400 Bad Request",description:"A generic error state illustration."}],["403",{img:imgAttributeHelper(ImgPaths[403]),title:"403 Forbidden",description:"A generic error state illustration."}],["404",{img:imgAttributeHelper(ImgPaths[404]),title:"404 No Page Found",description:"No page found."}],["408",{img:imgAttributeHelper(ImgPaths[408]),title:"408 Request Timeout",description:"A generic error state illustration."}],["500",{img:imgAttributeHelper(ImgPaths[500]),title:"Error state",description:"A generic error state illustration."}],["502",{img:imgAttributeHelper(ImgPaths[502]),title:"502 Bad Gateway",description:"An error state illustration."}],["503",{img:imgAttributeHelper(ImgPaths[503]),title:"503 Service Unavailable",description:"A generic error state illustration."}],["504",{img:imgAttributeHelper(ImgPaths[504]),title:"504 Gateway Timeout",description:"A generic error state illustration."}],["confirmation",{img:imgAttributeHelper(ImgPaths.confirmation),title:"Confirmation modal",description:"For form-filling instances, to confirm with the user that they want to exit the form and lose their edits."}],["link-error",{img:imgAttributeHelper(ImgPaths["link-error"]),title:"Link Error",description:"When a link is expired."}],["logout",{img:imgAttributeHelper(ImgPaths.logout),title:"Logged-out",description:"When the user has been inactive for a certain period of time, and has been logged out after X minutes."}],["insufficient-credits",{img:imgAttributeHelper(ImgPaths["insufficient-credits"]),title:"Insufficient credits",description:"When the user has insufficient credits for a transaction."}],["inactivity",{img:imgAttributeHelper(ImgPaths.inactivity),title:"Inactive state",description:"When the user has been inactive for a certain period of time, and will be logged out after X minutes."}],["maintenance",{img:imgAttributeHelper(ImgPaths[503]),title:"Service under maintenance",description:"This service is currently unavailable. Please try again later.",renderDescription:e=>jsxs(Fragment,{children:["This service is currently unavailable. Please try again after ",jsx("strong",{children:e.dateString}),"."]})}],["no-item-found",{img:imgAttributeHelper(ImgPaths["no-item-found"]),title:"No items found",description:"For instances where the no items can be found for a particular feature."}],["payment-unsuccessful",{img:imgAttributeHelper(ImgPaths["payment-unsuccessful"]),title:"Payment unsuccessful",description:"When the user’s payment transaction is unsuccessful."}],["transfer-unsuccessful",{img:imgAttributeHelper(ImgPaths["transfer-unsuccessful"]),title:"Transfer unsuccessful",description:"For instances where the user is unsuccessful in transferring credits."}],["unsupported-browser",{img:imgAttributeHelper(ImgPaths["unsupported-browser"]),title:"Error state",description:"A generic error state illustration."}],["partially-supported-browser",{img:imgAttributeHelper(ImgPaths["unsupported-browser"]),title:"Error state",description:"A generic error state illustration."}],["warning",{img:imgAttributeHelper(ImgPaths.warning),title:"Warning states",description:"Generic warning and error state illustrations."}]]),Container$f=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`,Img=styled.img`
    position: relative;
    width: 25rem;
    height: auto;

    ${MediaQuery.MaxWidth.mobileL} {
        width: 20rem;
    }

    ${MediaQuery.MaxWidth.mobileM} {
        width: 18rem;
    }

    ${MediaQuery.MaxWidth.mobileS} {
        width: 15rem;
    }
`,TextContainer$4=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`,Title$2=styled(Text.H1)`
    margin: 2rem 0 1rem;
    letter-spacing: -0.032rem !important;
    text-align: center;
`,DescriptionContainer=styled.div`
    ${TextStyleHelper.getTextStyle("Body","regular")} // Follow styling of Text.Body
    color: ${Color.Neutral[1]}; // Follow styling of Text.Body
    text-align: center;

    strong {
        ${TextStyleHelper.getFontFamily("Body","semibold")}
    }

    a {
        ${TextStyleHelper.getTextStyle("Body","semibold")}
        color: ${Color.Primary};

        :hover,
        :active,
        :focus {
            color: ${Color.Secondary};
        }
    }
`,ActionButton$1=styled(Button.Default)`
    margin: 4rem auto 0;
    width: 21rem;

    ${MediaQuery.MaxWidth.mobileL} {
        width: 100%;
        margin: 2rem auto 0;
    }
`,ErrorDisplay=({type:e,img:t,title:r,description:i,actionButton:a,additionalProps:n,...o})=>{const s=ERROR_DISPLAY_DATA.get(e),l=o["data-testid"]||"error-display",p=()=>{if("maintenance"===e){const e=n;return n&&e.dateString?s.renderDescription(e):i||void 0}return i||void 0};if(!s)return null;const c={...s,...t&&{img:t},...r&&{title:r},...p()&&{description:p()}};return jsxs(Container$f,{...o,"data-testid":l,children:[jsx(Img,{...c.img,alt:""}),jsxs(TextContainer$4,{children:[jsx(Title$2,{"data-testid":`${l}--title`,children:c.title}),jsx(DescriptionContainer,{"data-testid":`${l}--description`,children:"string"==typeof c.description?jsx("p",{children:c.description}):c.description})]}),a&&(()=>{const e={children:"Proceed",...a};return jsx(ActionButton$1,{...e})})()]})},FeedbackRatingData={IMG:"https://assets.life.gov.sg/react-design-system/img/feedback-rating/feedback-rating-banner.png",DEFAULT_BUTTON_LABEL:"Submit",DEFAULT_DESCRIPTION:"Rate your experience"},StarContainerData={MAX_STAR:5};var star={},StarIcon;Object.defineProperty(star,"__esModule",{value:!0});var e$d=require$$0;const C$b=e=>e$d.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:e$d.jsx("path",{d:"M7.33295 14.896L9.99995 13.312L12.688 14.896L11.979 11.896L14.292 9.917L11.229 9.646L9.99995 6.792L8.77095 9.646L5.70795 9.917L8.04195 11.896L7.33295 14.896ZM9.99995 15.062L6.58295 17.104C6.43029 17.1873 6.28095 17.222 6.13495 17.208C5.98962 17.1947 5.86129 17.146 5.74995 17.062C5.63862 16.9793 5.55529 16.865 5.49995 16.719C5.44462 16.573 5.43762 16.4237 5.47895 16.271L6.37495 12.458L3.35395 9.896C3.22929 9.78466 3.15295 9.656 3.12495 9.51C3.09695 9.36466 3.10395 9.22233 3.14595 9.083C3.18729 8.94433 3.26362 8.83 3.37495 8.74C3.48629 8.64933 3.62529 8.597 3.79195 8.583L7.74995 8.229L9.31195 4.604C9.38195 4.45133 9.47929 4.33666 9.60395 4.26C9.72929 4.184 9.86129 4.146 9.99995 4.146C10.1386 4.146 10.2706 4.184 10.396 4.26C10.5206 4.33666 10.618 4.45133 10.688 4.604L12.25 8.25L16.208 8.583C16.3746 8.597 16.5136 8.65266 16.625 8.75C16.7363 8.84733 16.8126 8.96533 16.854 9.104C16.896 9.24266 16.8996 9.38166 16.865 9.521C16.8296 9.65966 16.7496 9.78466 16.625 9.896L13.625 12.458L14.521 16.271C14.5623 16.4237 14.5553 16.573 14.5 16.719C14.4446 16.865 14.3613 16.9793 14.25 17.062C14.1386 17.146 14.0103 17.1947 13.865 17.208C13.719 17.222 13.5696 17.1873 13.417 17.104L9.99995 15.062Z",fill:"currentColor"})});C$b.displayName="StarIcon",StarIcon=star.StarIcon=C$b;var starFill={},StarFillIcon;Object.defineProperty(starFill,"__esModule",{value:!0});var e$c=require$$0;const C$a=e=>e$c.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:e$c.jsx("path",{d:"M9.99995 15.062L6.58295 17.104C6.43029 17.1873 6.28095 17.222 6.13495 17.208C5.98962 17.1947 5.86129 17.146 5.74995 17.062C5.63862 16.9793 5.55529 16.865 5.49995 16.719C5.44462 16.573 5.43762 16.4237 5.47895 16.271L6.37495 12.458L3.35395 9.896C3.22929 9.78466 3.15295 9.656 3.12495 9.51C3.09695 9.36466 3.10395 9.22233 3.14595 9.083C3.18729 8.94433 3.26362 8.83 3.37495 8.74C3.48629 8.64933 3.62529 8.597 3.79195 8.583L7.74995 8.229L9.31195 4.604C9.38195 4.45133 9.47929 4.33666 9.60395 4.26C9.72929 4.184 9.86129 4.146 9.99995 4.146C10.1386 4.146 10.2706 4.184 10.396 4.26C10.5206 4.33666 10.618 4.45133 10.688 4.604L12.25 8.25L16.208 8.583C16.3746 8.597 16.5136 8.65266 16.625 8.75C16.7363 8.84733 16.8126 8.96533 16.854 9.104C16.896 9.24266 16.8996 9.38166 16.865 9.521C16.8296 9.65966 16.7496 9.78466 16.625 9.896L13.625 12.458L14.521 16.271C14.5623 16.4237 14.5553 16.573 14.5 16.719C14.4446 16.865 14.3613 16.9793 14.25 17.062C14.1386 17.146 14.0103 17.1947 13.865 17.208C13.719 17.222 13.5696 17.1873 13.417 17.104L9.99995 15.062Z",fill:"currentColor"})});C$a.displayName="StarFillIcon",StarFillIcon=starFill.StarFillIcon=C$a;const Input$4=styled.input`
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
`,starStyle=css`
    width: 2.75rem;
    height: 2.75rem;
    color: ${Color.Primary};
    ${Input$4}:focus-visible + & {
        outline: 0.125rem solid ${Color.Primary};
        outline-offset: -0.0625rem;
        border-radius: 0.25rem;
    }
`,StarUnfilled=styled(StarIcon)`
    ${starStyle}
`,StarFilled=styled(StarFillIcon)`
    ${starStyle}
`,Label$4=styled.label`
    margin: 0 0.5rem;
    line-height: 0;
    @media screen and (max-width: 38rem) {
        margin: 0 0.5rem;
    }
`,Container$e=styled.div`
    display: flex;
    justify-content: center;
    margin: 0.5rem 1rem;
`,FeedbackRatingStarsContainer=e=>{const{description:t,rating:r,onRatingChange:i}=e,a=e=>{const t=`${e} star${1===e?"":"s"}`;return jsx(e<=r?StarFilled:StarUnfilled,{"aria-label":t})};return jsx(Container$e,{role:"radiogroup","aria-label":t,children:[...Array(StarContainerData.MAX_STAR)].map(((e,t)=>{const n=t+1;return jsxs(Label$4,{children:[jsx(Input$4,{type:"radio",name:"star",checked:n===r,onChange:()=>(e=>{i(e)})(n)}),a(n)]},n)}))})},Image$1=styled.img`
    width: 9.5rem;
    height: 9.5rem;
    margin: 0 1rem;
    @media screen and (max-width: 38rem) {
        width: 5.5rem;
        height: 5.5rem;
        margin: 0;
    }
`,MainContainer=styled.div`
    border-top: 1px solid ${Color.Neutral[5]};
    border-bottom: 1px solid ${Color.Neutral[5]};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 1rem 3rem;
    @media screen and (max-width: 38rem) {
        padding: 2rem 0 1rem;
        flex-direction: column;
    }
`,ChildContainer=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem 1rem;
    width: 100%;
    text-align: center;
    @media screen and (max-width: 38rem) {
        margin: 1rem 1.25rem;
        max-width: calc(100% - 2.5rem);
    }
`,SubmitButton=styled(Button.Default)`
    margin-top: 1rem;
    width: 100%;
`,FeedbackRating=e=>{const{imgSrc:t,buttonLabel:r,description:i,rating:a,className:n,onRatingChange:o,onSubmit:s}=e,l=t??FeedbackRatingData.IMG,p=i??FeedbackRatingData.DEFAULT_DESCRIPTION;return jsxs(MainContainer,{className:n,children:[l&&jsx(Image$1,{src:l,alt:"","aria-label":"banner image",onError:e=>e.currentTarget.style.display="none"}),jsxs(ChildContainer,{children:[jsx(Text.H3,{weight:"semibold",children:p}),jsx(FeedbackRatingStarsContainer,{description:p,rating:a,onRatingChange:o}),jsx(SubmitButton,{disabled:!a,onClick:s,children:r??FeedbackRatingData.DEFAULT_BUTTON_LABEL})]})]})};var cross={},CrossIcon;Object.defineProperty(cross,"__esModule",{value:!0});var e$b=require$$0;const C$9=e=>e$b.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:e$b.jsx("path",{d:"M9.99991 11.229L5.97891 15.25C5.81224 15.4167 5.61091 15.4967 5.37491 15.49C5.13891 15.4827 4.93757 15.3957 4.77091 15.229C4.60424 15.0623 4.52091 14.8577 4.52091 14.615C4.52091 14.3717 4.60424 14.1667 4.77091 14L8.77091 10L4.74991 5.979C4.58324 5.81233 4.50324 5.60767 4.50991 5.365C4.51724 5.12167 4.60424 4.91667 4.77091 4.75C4.93757 4.58333 5.14224 4.5 5.38491 4.5C5.62824 4.5 5.83324 4.58333 5.99991 4.75L9.99991 8.771L14.0209 4.75C14.1876 4.58333 14.3922 4.5 14.6349 4.5C14.8782 4.5 15.0832 4.58333 15.2499 4.75C15.4166 4.91667 15.4999 5.12167 15.4999 5.365C15.4999 5.60767 15.4166 5.81233 15.2499 5.979L11.2289 10L15.2499 14.021C15.4166 14.1877 15.4999 14.389 15.4999 14.625C15.4999 14.861 15.4166 15.0623 15.2499 15.229C15.0832 15.3957 14.8782 15.479 14.6349 15.479C14.3922 15.479 14.1876 15.3957 14.0209 15.229L9.99991 11.229Z",fill:"currentColor"})});C$9.displayName="CrossIcon",CrossIcon=cross.CrossIcon=C$9;const getBackdropFilter=e=>{let t="";return e&&(t+="blur(10px)"),t.length>0?t:"none"},Root=styled.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 0;
    width: 0;
    visibility: hidden;
    z-index: ${e=>e.zIndex||(e.$stacked?99999:99998)};

    ${e=>{if(e.$show)return css`
                height: 100%;
                width: 100vw;
                visibility: visible;
            `}}
`,Wrapper$h=styled.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(5, 1, 1, ${e=>e.$backgroundOpacity});
    backdrop-filter: ${e=>getBackdropFilter(e.$backgroundBlur)};
    transition: opacity 200ms ease;

    ${e=>{let t="";return e.$show?t+=css`
                visibility: visible;
                opacity: 1;
                pointer-events: auto;
                height: 100%;
                width: 100vw;
            `:t+=css`
                visibility: hidden;
                opacity: 0;
                transition-delay: ${e.$disableTransition?"0ms":"400ms"};
                pointer-events: none;
                height: 0;
                width: 0;
            `,e.$disableTransition&&(t+=css`
                transition: none;
            `),t}}
`,Overlay=({show:e=!1,rootId:t,onOverlayClick:r,children:i,backgroundOpacity:a,backgroundBlur:n=!0,disableTransition:o=!1,enableOverlayClick:s=!1,zIndex:l,id:p})=>{const[c,d]=useState(null),[h,u]=useState(),m=useRef(),f=useRef(null),y=i&&React__default.cloneElement(i,{ref:f}),g=p?`lifesg-ds-overlay-root-${p}`:"lifesg-ds-overlay-root";useEffect((()=>{if(e){const e=b();if(_(e),!e){const e=setTimeout((()=>{C("add")}),200);return()=>clearTimeout(e)}}else if(!m.current){const e=setTimeout((()=>{C("remove")}),200);return()=>clearTimeout(e)}}),[e]),useEffect((()=>{d(x());const e=b();return _(e),e||v(),()=>{C("remove")}}),[]);const _=e=>{m.current=e,u(e)},x=()=>document&&t?document.getElementById(t):document?document.body:null,b=()=>document.body.classList.contains(OVERLAY_OPEN_CLASSNAME),v=()=>{if(!document.getElementById(STYLESHEET_ID)){const e=document.createElement("style");e.id=STYLESHEET_ID;const t=document.documentElement.clientWidth,r=window.innerWidth-t;e.innerHTML=`\n\t\t\t\t.${OVERLAY_OPEN_CLASSNAME} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${r}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${OVERLAY_OPEN_CLASSNAME}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},C=e=>{const t=document.body.classList.contains(OVERLAY_OPEN_CLASSNAME);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove(OVERLAY_OPEN_CLASSNAME):document.body.classList.add(OVERLAY_OPEN_CLASSNAME)},S=e=>{const t=f.current?.firstChild;t&&t.contains(e.target)||r&&s&&(e.preventDefault(),r())};return c?ReactDOM.createPortal(jsx(Root,{id:g,"data-testid":g,$show:e,zIndex:l,$stacked:h,children:i&&jsx(Wrapper$h,{"data-testid":"overlay-wrapper",$show:e,$backgroundOpacity:a||(h?.5:.8),$backgroundBlur:n,$disableTransition:o,$enableOverlayClick:s,onClick:S,children:y})}),c):null},STYLESHEET_ID="lifesg-ds-overlay-stylesheet",OVERLAY_OPEN_CLASSNAME="lifesg-ds-overlay-open",FilterContext=React__default.createContext({mode:"default"});var circle={},CircleIcon;Object.defineProperty(circle,"__esModule",{value:!0});var C$8=require$$0;const e$a=e=>C$8.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:C$8.jsx("path",{d:"M10 18C8.90267 18 7.868 17.7917 6.896 17.375C5.924 16.9583 5.07333 16.3853 4.344 15.656C3.61467 14.9267 3.04167 14.076 2.625 13.104C2.20833 12.132 2 11.0973 2 10C2 8.88867 2.20833 7.85033 2.625 6.885C3.04167 5.92033 3.61467 5.07333 4.344 4.344C5.07333 3.61467 5.924 3.04167 6.896 2.625C7.868 2.20833 8.90267 2 10 2C11.1113 2 12.1497 2.20833 13.115 2.625C14.0797 3.04167 14.9267 3.61467 15.656 4.344C16.3853 5.07333 16.9583 5.92033 17.375 6.885C17.7917 7.85033 18 8.88867 18 10C18 11.0973 17.7917 12.132 17.375 13.104C16.9583 14.076 16.3853 14.9267 15.656 15.656C14.9267 16.3853 14.0797 16.9583 13.115 17.375C12.1497 17.7917 11.1113 18 10 18ZM10 16.5C11.8053 16.5 13.34 15.868 14.604 14.604C15.868 13.34 16.5 11.8053 16.5 10C16.5 8.19467 15.868 6.66 14.604 5.396C13.34 4.132 11.8053 3.5 10 3.5C8.19467 3.5 6.66 4.132 5.396 5.396C4.132 6.66 3.5 8.19467 3.5 10C3.5 11.8053 4.132 13.34 5.396 14.604C6.66 15.868 8.19467 16.5 10 16.5Z",fill:"currentColor"})});e$a.displayName="CircleIcon",CircleIcon=circle.CircleIcon=e$a;var circleDot={},CircleDotIcon;Object.defineProperty(circleDot,"__esModule",{value:!0});var C$7=require$$0;const e$9=e=>C$7.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:C$7.jsx("path",{d:"M10 14C11.1113 14 12.0557 13.611 12.833 12.833C13.611 12.0557 14 11.1113 14 10C14 8.88867 13.611 7.94433 12.833 7.167C12.0557 6.389 11.1113 6 10 6C8.88867 6 7.94433 6.389 7.167 7.167C6.389 7.94433 6 8.88867 6 10C6 11.1113 6.389 12.0557 7.167 12.833C7.94433 13.611 8.88867 14 10 14ZM10 18C8.90267 18 7.868 17.7917 6.896 17.375C5.924 16.9583 5.07333 16.3853 4.344 15.656C3.61467 14.9267 3.04167 14.076 2.625 13.104C2.20833 12.132 2 11.0973 2 10C2 8.88867 2.20833 7.85033 2.625 6.885C3.04167 5.92033 3.61467 5.07333 4.344 4.344C5.07333 3.61467 5.924 3.04167 6.896 2.625C7.868 2.20833 8.90267 2 10 2C11.1113 2 12.1497 2.20833 13.115 2.625C14.0797 3.04167 14.9267 3.61467 15.656 4.344C16.3853 5.07333 16.9583 5.92033 17.375 6.885C17.7917 7.85033 18 8.88867 18 10C18 11.0973 17.7917 12.132 17.375 13.104C16.9583 14.076 16.3853 14.9267 15.656 15.656C14.9267 16.3853 14.0797 16.9583 13.115 17.375C12.1497 17.7917 11.1113 18 10 18ZM10 16.5C11.8053 16.5 13.34 15.868 14.604 14.604C15.868 13.34 16.5 11.8053 16.5 10C16.5 8.19467 15.868 6.66 14.604 5.396C13.34 4.132 11.8053 3.5 10 3.5C8.19467 3.5 6.66 4.132 5.396 5.396C4.132 6.66 3.5 8.19467 3.5 10C3.5 11.8053 4.132 13.34 5.396 14.604C6.66 15.868 8.19467 16.5 10 16.5Z",fill:"currentColor"})});e$9.displayName="CircleDotIcon",CircleDotIcon=circleDot.CircleDotIcon=e$9;var square={},SquareIcon;Object.defineProperty(square,"__esModule",{value:!0});var e$8=require$$0;const r$1=e=>e$8.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:e$8.jsx("path",{d:"M4.5 17C4.08333 17 3.72933 16.854 3.438 16.562C3.146 16.2707 3 15.9167 3 15.5V4.5C3 4.08333 3.146 3.72933 3.438 3.438C3.72933 3.146 4.08333 3 4.5 3H15.5C15.9167 3 16.2707 3.146 16.562 3.438C16.854 3.72933 17 4.08333 17 4.5V15.5C17 15.9167 16.854 16.2707 16.562 16.562C16.2707 16.854 15.9167 17 15.5 17H4.5ZM4.5 15.5H15.5V4.5H4.5V15.5Z",fill:"currentColor"})});r$1.displayName="SquareIcon",SquareIcon=square.SquareIcon=r$1;var squareTickFill={},SquareTickFillIcon;Object.defineProperty(squareTickFill,"__esModule",{value:!0});var e$7=require$$0;const C$6=e=>e$7.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:e$7.jsx("path",{d:"M4.25 17.5C3.764 17.5 3.35067 17.33 3.01 16.99C2.67 16.6493 2.5 16.236 2.5 15.75V4.25C2.5 3.764 2.67 3.35067 3.01 3.01C3.35067 2.67 3.764 2.5 4.25 2.5H15.75C16.236 2.5 16.6493 2.67 16.99 3.01C17.33 3.35067 17.5 3.764 17.5 4.25V15.75C17.5 16.236 17.33 16.6493 16.99 16.99C16.6493 17.33 16.236 17.5 15.75 17.5H4.25ZM8.875 13.188C8.98633 13.188 9.094 13.167 9.198 13.125C9.302 13.083 9.40267 13.0137 9.5 12.917L14.125 8.292C14.2917 8.12533 14.375 7.924 14.375 7.688C14.375 7.45133 14.2917 7.24267 14.125 7.062C13.9443 6.89533 13.736 6.812 13.5 6.812C13.264 6.812 13.0627 6.89533 12.896 7.062L8.875 11.083L7.125 9.333C6.95833 9.16633 6.757 9.083 6.521 9.083C6.285 9.083 6.08367 9.16633 5.917 9.333C5.73633 9.51367 5.646 9.722 5.646 9.958C5.646 10.194 5.73633 10.3953 5.917 10.562L8.25 12.917C8.34733 13.0137 8.448 13.083 8.552 13.125C8.656 13.167 8.76367 13.188 8.875 13.188Z",fill:"currentColor"})});C$6.displayName="SquareTickFillIcon",SquareTickFillIcon=squareTickFill.SquareTickFillIcon=C$6;const Wrapper$g=styled.div`
    height: 1.625rem;
    width: 1.625rem;
    margin-right: 0.5rem;

    svg {
        height: 100%;
        width: 100%;

        ${e=>e.$active&&!e.disabled?css`
                    color: ${Color.Primary};
                `:css`
                    color: ${Color.Neutral[4]};
                `};
    }
`,ToggleIcon=({type:e,active:t=!1,disabled:r,className:i})=>{let a;switch(e){case"checkbox":a=jsx(t?SquareTickFillIcon:SquareIcon,{});break;case"radio":a=jsx(t?CircleDotIcon:CircleIcon,{});break;case"tick":a=jsx(TickIcon,{});break;case"cross":a=jsx(CrossIcon,{});break;default:a=null}return jsx(Wrapper$g,{className:i,$active:t,disabled:r,children:a})},FilterItemWrapper=styled.div`
    background-color: ${e=>e.$collapsible?Color.Neutral[7](e):Color.Neutral[8](e)};

    ${MediaQuery.MaxWidth.mobileL} {
        background-color: ${Color.Neutral[7]};
    }
`,Divider$2=styled.div`
    display: ${e=>e.$showDivider?"block":"none"};
    height: 1px;
    background-color: ${Color.Neutral[5]};

    ${MediaQuery.MaxWidth.mobileL} {
        display: ${e=>e.$showMobileDivider?"block":"none"};
        margin: 0 1rem;
    }
`,FilterItemHeader=styled.div`
    display: flex;
    align-items: center;

    background-color: ${Color.Neutral[8]};

    ${MediaQuery.MaxWidth.mobileL} {
        background-color: transparent;
    }
`,FilterItemExpandButton=styled(IconButton)`
    margin: 0 0 0 auto;
`,ChevronIcon$1=styled(ChevronDownIcon)`
    height: 1.125rem;
    width: 1.125rem;
    color: ${Color.Neutral[3]};

    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform 300ms ease-in-out;

    &:hover {
        color: ${Color.Neutral[2]};
    }
`,FilterItemTitle=styled(Text.H4)`
    margin: 1.5rem 0 1.5rem 1.25rem;

    ${MediaQuery.MaxWidth.mobileL} {
        ${TextStyleHelper.getTextStyle("H5","semibold")}
        margin: 1.5rem 1.25rem 0 1.25rem;
    }
`,ExpandableItem=styled(animated.div)`
    overflow: hidden;
`,FilterItemBody=styled.div`
    padding: 1rem 1.25rem;

    ${MediaQuery.MaxWidth.mobileL} {
        padding: 1.5rem 1.25rem;
    }
`,MinimisableContent=styled(animated.div)`
    ${e=>e.$minimisable&&"overflow: hidden;"}
    ${e=>e.$height&&`height: ${e.$height}px;`}
`,FilterItemMinimiseButton=styled(Button.Small)`
    height: fit-content;
    padding: 0;
    margin: 1rem 0 0 0;

    ${MediaQuery.MaxWidth.mobileL} {
        span {
            ${TextStyleHelper.getTextStyle("H6","semibold")}
        }
    }
`,FilterItem=({collapsible:e=!0,minimisable:t=!1,minimisedHeight:r,showDivider:i=!0,showMobileDivider:a=!0,title:n,children:o,...s})=>{const{mode:l}=useContext(FilterContext),p="mobile"===l,[c,d]=useState(!p&&e),[h,u]=useState(t),m=!p&&e,f=useResizeDetector(),y=useResizeDetector(),g=useSpring({height:c?0:f.height}),_=h?r??Math.min(.5*y.height,216):y.height;return jsxs(FilterItemWrapper,{$collapsible:m,children:[jsx(Divider$2,{$showDivider:i,$showMobileDivider:a}),(n||m)&&jsxs(FilterItemHeader,{children:[n&&jsx(FilterItemTitle,{weight:"semibold",children:n}),m&&jsx(FilterItemExpandButton,{focusHighlight:!1,focusOutline:"browser",onClick:()=>{d(!c)},"aria-label":c?"Expand":"Collapse",children:jsx(ChevronIcon$1,{$expanded:!c})})]}),jsx(ExpandableItem,{style:p?void 0:g,children:jsx("div",{ref:f.ref,children:jsxs(FilterItemBody,{...s,children:[jsx(MinimisableContent,{$height:_,$minimisable:t,children:jsx("div",{ref:y.ref,children:jsx("div",{"data-id":"content-container",children:"function"==typeof o?o(l,{minimised:h}):o})})}),t&&jsxs(FilterItemMinimiseButton,{"data-id":"minimise-button",styleType:"link",onClick:()=>{u(!h)},children:["View ",h?"more":"less"]})]})})})]})},Container$d=styled.div`
    position: relative;
    display: inline-flex;
    min-width: 10.375rem;
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem;

    // Content positioning style
    ${e=>{if(!e.$indicator)return css`
                justify-content: center;
            `}}

    // Background, Hover and Border style
    ${e=>"no-border"===e.$styleType?e.$error?css`
                        border-color: ${Color.Validation.Red.Icon};
                        background: ${Color.Neutral[8]};

                        :hover {
                            box-shadow: 0 0 4px 1px ${Color.Shadow.Red};
                        }
                    `:e.$disabled?css`
                        border-color: transparent;
                    `:css`
                        border-color: transparent;

                        :hover {
                            background: ${Color.Accent.Light[6]};
                        }
                    `:e.$disabled&&!e.$selected?css`
                        background: ${Color.Neutral[6]};
                        border-color: ${Color.Neutral[5]};
                    `:e.$disabled&&e.$selected?css`
                        background: ${Color.Neutral[6]};
                        border-color: ${Color.Neutral[4]};
                    `:e.$error?css`
                        background: ${Color.Neutral[8]};
                        border-color: ${Color.Validation.Red.Border};

                        :hover {
                            box-shadow: 0 0 4px 1px ${Color.Shadow.Red};
                        }
                    `:e.$selected?css`
                        background: ${Color.Accent.Light[5]};
                        border-color: ${Color.Primary};

                        :hover {
                            box-shadow: 0 0 4px 1px ${Color.Shadow.Accent};
                        }
                    `:css`
                        background: ${Color.Neutral[8]};
                        border-color: ${Color.Neutral[5]};

                        :hover {
                            box-shadow: 0 0 4px 1px ${Color.Shadow.Accent};
                            border-color: ${Color.Accent.Light[1]};
                        }
                    `}
`,Input$3=styled.input`
    position: absolute;
    height: 100%;
    width: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    top: 0;
    left: 0;

    /* Hide appearance but keep it focusable using keyboard interactions */
    appearance: none;
    background: transparent;
`,TextContainer$3=styled.div`
    display: flex;
    flex-direction: column;
`,Label$3=styled.label`
    ${e=>e.$selected&&!e.$indicator?css`
                ${TextStyleHelper.getTextStyle("H4","semibold")}
            `:css`
                ${TextStyleHelper.getTextStyle("H4","regular")}
            `}

    color: ${Color.Neutral[1]};

    ${e=>e.$disabled?css`
                color: ${Color.Neutral[3](e)};
            `:e.$selected?css`
                color: ${Color.Primary(e)};
            `:void 0}
`,Toggle=({type:e="checkbox",indicator:t,checked:r,styleType:i="default",children:a,disabled:n,error:o,name:s,id:l,className:p,"data-testid":c,onChange:d})=>{const[h,u]=useState(r),[m]=useState(SimpleIdGenerator.generate()),f=l?`${l}-input`:`tg-${m}-input`,y=useRef();useEffect((()=>{u(r)}),[r]);return jsxs(Container$d,{$selected:h,$disabled:n,className:p,$styleType:i,$error:o,$indicator:t,id:l,"data-testid":c,children:[t&&(()=>{let t;switch(e){case"yes":t="tick";break;case"no":t="cross";break;case"checkbox":case"radio":t=e}return jsx(ToggleIcon,{type:t,active:h,disabled:n})})(),jsx(Input$3,{ref:y,name:s,id:f,type:"checkbox"===e?"checkbox":"radio","data-testid":"toggle-input",disabled:n,onChange:t=>{if(!n){switch(e){case"checkbox":h||u((e=>!e));break;case"radio":case"yes":case"no":h||u(!0)}d&&d(t)}},checked:h}),jsx(TextContainer$3,{children:jsx(Label$3,{htmlFor:f,$selected:h,$indicator:t,$disabled:n,"data-testid":"toggle-label",children:a})})]})},StyledFilterItem=styled(FilterItem)`
    padding: 0 0 1rem;

    [data-id="content-container"] {
        position: relative; // to get the item position relative to this parent
        padding: 0.5rem 0.5rem 0;

        ${MediaQuery.MaxWidth.mobileL} {
            padding: 1rem 1.25rem 0.5rem;
        }
    }

    [data-id="minimise-button"] {
        margin: 0.5rem 1.25rem 0;

        ${MediaQuery.MaxWidth.mobileL} {
            margin: 0.5rem 1.25rem 0;
        }
    }
`,Group=styled.div`
    display: flex;
    flex-direction: column;

    ${MediaQuery.MaxWidth.mobileL} {
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1rem;
    }
`,Item$1=styled.label`
    display: flex;
    align-items: flex-start;
    ${e=>!e.$visible&&"display: none;"}

    position: relative;
    width: 100%;
    min-height: 1.5rem;
    padding: 0.5rem;

    cursor: pointer;
    ${TextStyleHelper.getTextStyle("BodySmall","regular")}
    ${e=>e.$selected&&css`
            color: ${Color.Primary};
        `}
`,Input$2=styled.input`
    appearance: none;
`,StyledToggleIcon=styled(ToggleIcon)`
    height: 1.5rem;
    width: 1.5rem;
    flex-shrink: 0;

    ${Input$2}:focus-visible + & {
        outline: 2px solid ${Color.Primary};
        outline-offset: -2px;
        border-radius: 4px;
    }
`,StyledToggle=styled(Toggle)`
    ${e=>!e.$visible&&"visibility: hidden;"}
`,FilterItemCheckbox=({selectedOptions:e,options:t,onSelect:r,labelExtractor:i,valueExtractor:a,...n})=>{const{mode:o}=useContext(FilterContext),[s,l]=useState(e||[]),[p,c]=useState(),[d,h]=useState(t.length),u=useRef(),m=useRef(),f=e=>()=>{const t=[...s],i=s.findIndex((t=>g(t)===g(e)));i>=0?t.splice(i,1):t.push(e),l(t),r?.(t)},y=e=>i?i(e):e.label??e.toString(),g=e=>a?a(e):e.value??e.toString(),_=useCallback((()=>{if(!u.current)return void c(void 0);const e=Array.from(u.current.children);let t=0,r=0,i=-1;for(let a=0;a<e.length;a++){const n=e[a].offsetTop;if(n>i&&(r++,i=n,r>2))break;t=a}h(t),c(r>2?i-8:void 0)}),[]);useEffect((()=>{e!==s&&l(e||[])}),[e]),useEffect((()=>{"default"===o?(()=>{const e=m.current?m.current.offsetTop+m.current.clientHeight:void 0;c(e)})():_()}),[t]),useResizeDetector({handleWidth:"mobile"===o,handleHeight:!1,skipOnMount:!0,refreshMode:"throttle",targetRef:u,onResize:_});return jsx(StyledFilterItem,{minimisable:t.length>5,minimisedHeight:p,...n,children:(e,{minimised:r})=>jsx(Group,{role:"group","aria-label":n.title,ref:u,children:t.map(((t,i)=>"default"===e?((e,t,r)=>{const i=y(e),a=g(e),n=!!s.find((e=>g(e)===a));return jsxs(Item$1,{$visible:!r||t<5,$selected:n,ref:4===t?m:void 0,children:[jsx(Input$2,{type:"checkbox",checked:n,onChange:f(e)}),jsx(StyledToggleIcon,{type:"checkbox",active:n}),i]},a)})(t,i,r):((e,t,r)=>{const i=y(e),a=g(e),n=!!s.find((e=>g(e)===a));return jsx(StyledToggle,{type:"checkbox",checked:n,$visible:!r||p&&t<=d,onChange:f(e),children:i})})(t,i,r)))})})},FilterItemPageContainer=styled.div`
    background-color: ${Color.Neutral[8]};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`;var filter={},FilterIcon;Object.defineProperty(filter,"__esModule",{value:!0});var C$5=require$$0;const e$6=e=>C$5.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:C$5.jsx("path",{d:"M3.375 15.833C3.139 15.833 2.934 15.7463 2.76 15.573C2.58667 15.399 2.5 15.194 2.5 14.958C2.5 14.722 2.58667 14.5173 2.76 14.344C2.934 14.17 3.139 14.083 3.375 14.083H6.792C7.028 14.083 7.23267 14.17 7.406 14.344C7.58 14.5173 7.667 14.722 7.667 14.958C7.667 15.194 7.58 15.399 7.406 15.573C7.23267 15.7463 7.028 15.833 6.792 15.833H3.375ZM3.375 5.917C3.139 5.917 2.934 5.83 2.76 5.656C2.58667 5.48267 2.5 5.278 2.5 5.042C2.5 4.806 2.58667 4.601 2.76 4.427C2.934 4.25367 3.139 4.167 3.375 4.167H9.896C10.132 4.167 10.3367 4.25367 10.51 4.427C10.684 4.601 10.771 4.806 10.771 5.042C10.771 5.278 10.684 5.48267 10.51 5.656C10.3367 5.83 10.132 5.917 9.896 5.917H3.375ZM10.083 17.5C9.847 17.5 9.64233 17.4133 9.469 17.24C9.295 17.066 9.208 16.861 9.208 16.625V13.312C9.208 13.076 9.295 12.8713 9.469 12.698C9.64233 12.5247 9.847 12.438 10.083 12.438C10.3197 12.438 10.5247 12.5247 10.698 12.698C10.8713 12.8713 10.958 13.076 10.958 13.312V14.083H16.625C16.861 14.083 17.066 14.17 17.24 14.344C17.4133 14.5173 17.5 14.722 17.5 14.958C17.5 15.194 17.4133 15.399 17.24 15.573C17.066 15.7463 16.861 15.833 16.625 15.833H10.958V16.625C10.958 16.861 10.8713 17.066 10.698 17.24C10.5247 17.4133 10.3197 17.5 10.083 17.5ZM6.792 12.542C6.556 12.542 6.351 12.455 6.177 12.281C6.00367 12.1077 5.917 11.903 5.917 11.667V10.875H3.375C3.139 10.875 2.934 10.7883 2.76 10.615C2.58667 10.441 2.5 10.236 2.5 10C2.5 9.764 2.58667 9.559 2.76 9.385C2.934 9.21167 3.139 9.125 3.375 9.125H5.917V8.354C5.917 8.118 6.00367 7.91333 6.177 7.74C6.351 7.566 6.556 7.479 6.792 7.479C7.028 7.479 7.23267 7.566 7.406 7.74C7.58 7.91333 7.667 8.118 7.667 8.354V11.667C7.667 11.903 7.58 12.1077 7.406 12.281C7.23267 12.455 7.028 12.542 6.792 12.542ZM10.083 10.875C9.847 10.875 9.64233 10.7883 9.469 10.615C9.295 10.441 9.208 10.236 9.208 10C9.208 9.764 9.295 9.559 9.469 9.385C9.64233 9.21167 9.847 9.125 10.083 9.125H16.625C16.861 9.125 17.066 9.21167 17.24 9.385C17.4133 9.559 17.5 9.764 17.5 10C17.5 10.236 17.4133 10.441 17.24 10.615C17.066 10.7883 16.861 10.875 16.625 10.875H10.083ZM13.208 7.562C12.972 7.562 12.7673 7.47533 12.594 7.302C12.42 7.12867 12.333 6.924 12.333 6.688V3.375C12.333 3.139 12.42 2.934 12.594 2.76C12.7673 2.58667 12.972 2.5 13.208 2.5C13.444 2.5 13.649 2.58667 13.823 2.76C13.9963 2.934 14.083 3.139 14.083 3.375V4.167H16.625C16.861 4.167 17.066 4.25367 17.24 4.427C17.4133 4.601 17.5 4.806 17.5 5.042C17.5 5.278 17.4133 5.48267 17.24 5.656C17.066 5.83 16.861 5.917 16.625 5.917H14.083V6.688C14.083 6.924 13.9963 7.12867 13.823 7.302C13.649 7.47533 13.444 7.562 13.208 7.562Z",fill:"currentColor"})});e$6.displayName="FilterIcon",FilterIcon=filter.FilterIcon=e$6;const DesktopView=styled.div`
    ${MediaQuery.MaxWidth.mobileL} {
        display: none;
    }
`,MobileView=styled.div`
    display: none;
    ${MediaQuery.MaxWidth.mobileL} {
        display: block;
    }
`,DesktopContainer=styled.div`
    background-color: ${Color.Neutral[8]};
    border: 1px solid ${Color.Neutral[5]};
    border-radius: 0.5rem;
    overflow: hidden;
    width: 100%;
`,MobileContainer=styled.div`
    background-color: ${Color.Neutral[7]};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`,FilterBody=styled.div`
    flex: 1;
    width: 100%;
    overflow-y: auto;
`,FilterHeader=styled.div`
    display: flex;
    align-items: center;

    background-color: ${Color.Neutral[8]};

    ${MediaQuery.MaxWidth.mobileL} {
        border-bottom: 1px solid ${Color.Neutral[5]};
    }
`,FilterTitle=styled(Text.H4)`
    flex: 1;
    margin: 1.5rem 0 1rem 1.25rem;

    ${MediaQuery.MaxWidth.mobileL} {
        text-align: center;
        margin: 1.5rem 0;
    }
`,FilterHeaderButton=styled(IconButton)`
    padding: 1.5rem 1.25rem;
    margin-right: auto;
    color: ${Color.Neutral[3]};

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }

    &:hover {
        color: ${Color.Neutral[2]};
    }
`,FilterClearButton=styled(Button.Small)`
    background-color: transparent;
    padding: 1.5rem 1.25rem 1rem 1.25rem;
    height: auto;

    ${MediaQuery.MaxWidth.mobileL} {
        padding: 1.5rem 1.25rem;
    }
`,FilterButton=styled(Button.Default)`
    width: 100%;
    span {
        display: flex;
        align-items: center;
    }
`,StyledFilterIcon=styled(FilterIcon)`
    margin-right: 0.625rem;
`,FilterFooter=styled.div`
    padding: 1.5rem 1.25rem;
    background-color: ${Color.Neutral[8]};
    border-top: 1px solid ${Color.Neutral[5]};
`,FilterDoneButton=styled(Button.Default)`
    width: 100%;
`,FilterItemPage=({onDismiss:e,onDone:t,children:r})=>jsxs(FilterItemPageContainer,{children:[jsx(FilterHeaderButton,{onClick:e,focusOutline:"browser",focusHighlight:!1,"aria-label":"Dismiss",children:jsx(ChevronLeftIcon,{})}),jsx(FilterBody,{children:r}),jsx(FilterFooter,{children:jsx(FilterDoneButton,{onClick:t,children:"Done"})})]}),FilterBase=({toggleFilterButtonLabel:e="Filters",headerTitle:t="Filters",clearButtonDisabled:r=!1,onClear:i,onDismiss:a,onDone:n,children:o,...s})=>{const[l,p]=useState(!1);reactResponsive.exports.useMediaQuery({maxWidth:MediaWidths$1.mobileL},void 0,(e=>{e||d()}));const c=()=>{p(!0)},d=()=>{p(!1),a&&a()},h=()=>{p(!1),n&&n()},u=()=>{i&&i()},m=e=>"function"==typeof o?o(e):o,f=e=>jsxs(FilterHeader,{children:["mobile"===e&&jsx(FilterHeaderButton,{onClick:d,focusOutline:"browser",focusHighlight:!1,"aria-label":"Dismiss",children:jsx(CrossIcon,{})}),jsx(FilterTitle,{weight:"semibold",children:t}),jsx(FilterClearButton,{styleType:"link",onClick:u,disabled:r,children:"Clear"})]});return jsxs("div",{...s,children:[jsx(MobileView,{children:jsx(FilterContext.Provider,{value:{mode:"mobile"},children:jsxs(Fragment,{children:[jsxs(FilterButton,{styleType:"light",onClick:c,children:[jsx(StyledFilterIcon,{})," ",e]}),jsx(Overlay,{show:l,disableTransition:!0,children:jsxs(MobileContainer,{children:[f("mobile"),jsx(FilterBody,{children:m("mobile")}),jsx(FilterFooter,{children:jsx(FilterDoneButton,{onClick:h,children:"Done"})})]})})]})})}),jsx(DesktopView,{children:jsx(FilterContext.Provider,{value:{mode:"default"},children:jsxs(DesktopContainer,{children:[f("default"),m("default")]})})})]})},Filter=Object.assign(FilterBase,{Item:FilterItem,Page:FilterItemPage,Checkbox:FilterItemCheckbox}),Wrapper$f=styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    ${MediaQuery.MaxWidth.tablet} {
        justify-content: flex-start;
        padding: 0;
    }
`,Label$2=styled(Text.H5).attrs({as:"p"})`
    margin-bottom: 1rem;
`,Items=styled.div`
    display: flex;
    align-items: flex-start;
`,AppStoreLink=styled.a`
    &:not(:last-child) {
        margin-right: 2rem;
    }

    img {
        width: auto;
        height: 3rem;
        object-fit: contain;
    }

    ${MediaQuery.MaxWidth.mobileL} {
        &:not(:last-child) {
            margin-right: 1rem;
        }

        img {
            width: auto;
            height: auto;
            object-fit: contain;
        }
    }
`,APP_STORE_ICON$1="https://assets.life.gov.sg/react-design-system/img/download/apple-app-store.png",PLAY_STORE_ICON$1="https://assets.life.gov.sg/react-design-system/img/download/google-play-store.png",DownloadApp=()=>jsxs(Wrapper$f,{"data-testid":"download-app-section",children:[jsx(Label$2,{weight:"semibold",children:"Download the app"}),jsxs(Items,{children:[jsx(AppStoreLink,{href:"https://apps.apple.com/sg/app/moments-of-life/id1383218758",target:"_blank",rel:"noopener noreferrer",id:"footer-download-app-apple",children:jsx("img",{src:APP_STORE_ICON$1,alt:"apple-app-store"})}),jsx(AppStoreLink,{href:"https://play.google.com/store/apps/details?id=sg.gov.app.mol&hl=en_SG",target:"_blank",rel:"noopener noreferrer",id:"footer-download-app-android",children:jsx("img",{src:PLAY_STORE_ICON$1,alt:"google-play-store"})})]})]});var FooterHelper;!function(e){e.getCopyrightInfo=(e=new Date)=>`${`${(new Date).getFullYear()} LifeSG, Government of Singapore.`} Last Updated ${dayjs(e).format("D MMMM YYYY")}`,e.getDisclaimerLinks=e=>({privacy:{href:"https://www.life.gov.sg/privacy-statement",target:"_blank",rel:"noopener",...e&&e.privacy?e.privacy:{},children:"Privacy Statement"},termsOfUse:{href:"https://www.life.gov.sg/terms-of-use",target:"_blank",rel:"noopener",...e&&e.termsOfUse?e.termsOfUse:{},children:"Terms of Use"},reportVulnerability:{href:"https://tech.gov.sg/report_vulnerability",target:"_blank",rel:"noopener",external:!0,...e&&e.reportVulnerability?e.reportVulnerability:{},children:"Report Vulnerability"}})}(FooterHelper||(FooterHelper={}));const Component$a=(e,t)=>{const{children:r,"data-testid":i="container",type:a="flex",...n}=e;return jsx(StyledContainer,{ref:t,"data-testid":i,type:a,...n,children:r})},Container$c=React__default.forwardRef(Component$a),StyledContainer=styled.div`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
    height: auto;
    padding: 0 0.75rem;

    /* Max width restrictions */
    max-width: 1320px;

    ${MediaQuery.MaxWidth.desktopM} {
        max-width: 1140px;
    }

    ${MediaQuery.MaxWidth.tablet} {
        max-width: 720px;
    }

    ${MediaQuery.MaxWidth.mobileL} {
        width: 100%;
        padding: 0;
        max-width: unset;
    }

    ${e=>{switch(e.type){case"grid":return css`
                    column-gap: 2rem;
                    display: grid;
                    grid-template-columns: repeat(12, minmax(0, 1fr));

                    ${MediaQuery.MaxWidth.tablet} {
                        column-gap: 1.5rem;
                        grid-template-columns: repeat(8, minmax(0, 1fr));
                    }

                    ${MediaQuery.MaxWidth.mobileL} {
                        column-gap: 1rem;
                        grid-template-columns: repeat(4, minmax(0, 1fr));
                    }
                `;case"flex-column":return css`
                    display: flex;
                    flex-direction: column;
                `;default:return css`
                    display: flex;
                `}}}
`,Component$9=(e,t)=>{const{children:r,"data-testid":i="section",...a}=e;return jsx(StyledSection,{ref:t,"data-testid":i,...a,children:r})},Section=React__default.forwardRef(Component$9),StyledSection=styled.section`
    display: block;
    position: relative;
    padding: 0 1.5rem;

    // Extra enforcement
    padding-left: 1.5rem !important;
    padding-right: 1.5rem !important;
`,Component$8=(e,t)=>{const{children:r,"data-testid":i="content",className:a,type:n="flex",...o}=e;return jsx(Section,{ref:t,"data-testid":i,className:a,...o,children:jsx(Container$c,{"data-testid":`${i}-container`,type:n,"data-id":"container",children:r})})},Content$3=React__default.forwardRef(Component$8),Layout={Section:Section,Container:Container$c,Content:Content$3},BaseFooter=styled.footer`
    background: ${Color.Neutral[7]};
`,StyledFooterLink=styled(Text.Hyperlink.Small)`
    color: ${Color.Neutral[1]};
`,TopSection=styled(Layout.Content)`
    padding: 4rem 0;
    border-bottom: 1px solid ${Color.Neutral[5]};

    ${MediaQuery.MaxWidth.tablet} {
        padding: 2rem 0;
    }
`,LogoSection=styled.div`
    grid-column: 1 / span 2;

    img {
        height: 4rem;
        width: auto;
    }

    ${MediaQuery.MaxWidth.tablet} {
        grid-column: 1 / span 8;
        margin-bottom: 2rem;
    }

    ${MediaQuery.MaxWidth.mobileL} {
        grid-column: 1 / span 4;
        margin-bottom: 2rem;
    }
`,LinkSection=styled.ul`
    // first col
    grid-column: 3 / span 2;
    list-style-type: none;

    :nth-of-type(2) {
        // 2nd col
        grid-column: 5 / span 2;
    }

    li {
        :not(:last-child) {
            margin-bottom: 0.5rem;
        }

        a {
            display: inline-block;
            vertical-align: top;
            line-height: 1rem;
        }
    }

    ${MediaQuery.MaxWidth.tablet} {
        // first col
        grid-column: 1 / span 4;

        :nth-of-type(2) {
            // 2nd col
            grid-column: 5 / span 4;
        }
    }

    ${MediaQuery.MaxWidth.mobileL} {
        // first col
        grid-column: 1 / span 2;

        :nth-of-type(2) {
            // 2nd col
            grid-column: 3 / span 2;
        }
    }
`,AddonSection=styled.div`
    grid-column: 9 / span 4;

    ${MediaQuery.MaxWidth.tablet} {
        grid-column: 1 / span 8;
        margin-top: 2rem;
    }

    ${MediaQuery.MaxWidth.mobileL} {
        grid-column: 1 / span 4;
    }
`,MobileOnlyBorder=styled.div`
    display: none;

    ${MediaQuery.MaxWidth.tablet} {
        display: block;
        height: 1px;
        background: ${Color.Neutral[6]};
    }
`,BottomSection=styled(Layout.Content)`
    padding: 1.375rem 0;

    ${MediaQuery.MaxWidth.tablet} {
        border-top: none;
        flex-direction: column;
        padding: 1rem 0;
    }
`,BottomSectionContent=styled.div`
    grid-column: 1 / span 6;
    display: flex;

    &:not(:last-child) {
        margin-right: 1rem;
    }

    ${MediaQuery.MaxWidth.tablet} {
        grid-column: 1 / span 8;
        flex-direction: column;
        &:not(:last-child) {
            margin-right: 0;
        }
    }

    ${MediaQuery.MaxWidth.mobileL} {
        grid-column: 1 / span 4;
    }
`,CopyrightSection=styled(BottomSectionContent)`
    grid-column: 7 / span 6;
    justify-content: flex-end;

    ${MediaQuery.MaxWidth.tablet} {
        margin-top: 1rem;
        justify-content: flex-start;
        grid-column: 1 / span 8;
    }

    ${MediaQuery.MaxWidth.mobileL} {
        grid-column: 1 / span 4;
    }
`,DisclaimerTextLink=styled(Text.Hyperlink.Small)`
    ${TextStyleHelper.getTextStyle("XSmall","regular")}
    color: ${Color.Neutral[1]};
    &:not(:last-child) {
        margin-right: 1.5rem;
    }

    svg {
        color: ${Color.Neutral[1]};
        vertical-align: sub;
    }

    &:hover {
        color: ${Color.Neutral[3]};
        svg {
            color: ${Color.Neutral[3]};
        }
    }

    ${MediaQuery.MaxWidth.tablet} {
        margin-bottom: 1rem;
        &:not(:last-child) {
            margin-right: 0;
        }
    }

    ${MediaQuery.MaxWidth.tablet} {
        margin-bottom: 0.625rem;
    }
`,LIFESG_LOGO_SRC="https://assets.life.gov.sg/react-design-system/img/logo/lifesg-primary-logo.svg",Footer=({children:e,links:t,lastUpdated:r,disclaimerLinks:i,showDownloadAddon:a,logoSrc:n,copyrightInfo:o,onFooterLinkClick:s})=>{const l=e=>e.map(((e,t)=>{const{"data-options":r,...i}=e;return jsx("li",{children:jsx(StyledFooterLink,{...i,onClick:t=>((e,t)=>{t.onClick?(e.preventDefault(),t.onClick(e)):s&&(e.preventDefault(),s(t))})(t,e)})},t)}));return jsxs(BaseFooter,{children:[(()=>{let r=null;return e||((t||a)&&(r=jsxs(Fragment,{children:[jsx(LogoSection,{"data-testid":"logo-section",children:jsx("img",{src:n||LIFESG_LOGO_SRC,alt:"LifeSG","data-testid":"logo"})}),t?.[0]&&jsx(LinkSection,{"data-testid":"link-col-1",children:l(t[0])},"link-col-1"),t?.[1]&&jsx(LinkSection,{"data-testid":"link-col-2",children:l(t[1])},"link-col-2"),a&&jsx(AddonSection,{children:jsx(DownloadApp,{})})]})),r?jsx(TopSection,{type:"grid",children:r}):null)})(),jsx(MobileOnlyBorder,{}),jsxs(BottomSection,{type:"grid",children:[jsx(BottomSectionContent,{children:(()=>{const e=FooterHelper.getDisclaimerLinks(i);return Object.keys(e).map((t=>jsx(DisclaimerTextLink,{...e[t]},t)))})()},"disclaimer"),jsx(CopyrightSection,{children:jsx(Text.XSmall,{"data-testid":"copyright-text",children:o||jsxs(Fragment,{children:["©"," ",FooterHelper.getCopyrightInfo(r)]})})},"copyright")]})]})};var iCircleFill={},ICircleFillIcon;Object.defineProperty(iCircleFill,"__esModule",{value:!0});var e$5=require$$0;const C$4=e=>e$5.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:e$5.jsx("path",{d:"M10.0049 1.67001C5.40195 1.67001 1.66992 5.40339 1.66992 10.005C1.66992 14.6093 5.40195 18.34 10.0049 18.34C14.6079 18.34 18.3399 14.6093 18.3399 10.005C18.3399 5.40339 14.6079 1.67001 10.0049 1.67001ZM10.0049 5.36699C10.7845 5.36699 11.4165 5.99897 11.4165 6.77856C11.4165 7.55815 10.7845 8.19013 10.0049 8.19013C9.22533 8.19013 8.59335 7.55815 8.59335 6.77856C8.59335 5.99897 9.22533 5.36699 10.0049 5.36699ZM11.887 13.9036C11.887 14.1264 11.7064 14.3069 11.4837 14.3069H8.52613C8.30341 14.3069 8.12283 14.1264 8.12283 13.9036V13.097C8.12283 12.8743 8.30341 12.6937 8.52613 12.6937H8.92944V10.5428H8.52613C8.30341 10.5428 8.12283 10.3622 8.12283 10.1394V9.33284C8.12283 9.11011 8.30341 8.92953 8.52613 8.92953H10.6771C10.8998 8.92953 11.0804 9.11011 11.0804 9.33284V12.6937H11.4837C11.7064 12.6937 11.887 12.8743 11.887 13.097V13.9036Z",fill:"currentColor"})});C$4.displayName="ICircleFillIcon",ICircleFillIcon=iCircleFill.ICircleFillIcon=C$4;var root$5=_root,now$1=function(){return root$5.Date.now()},now_1=now$1,reWhitespace=/\s/;function trimmedEndIndex$1(e){for(var t=e.length;t--&&reWhitespace.test(e.charAt(t)););return t}var _trimmedEndIndex=trimmedEndIndex$1,trimmedEndIndex=_trimmedEndIndex,reTrimStart=/^\s+/;function baseTrim$1(e){return e?e.slice(0,trimmedEndIndex(e)+1).replace(reTrimStart,""):e}var _baseTrim=baseTrim$1,baseTrim=_baseTrim,isObject$2=isObject_1,isSymbol=isSymbol_1,NAN=NaN,reIsBadHex=/^[-+]0x[0-9a-f]+$/i,reIsBinary=/^0b[01]+$/i,reIsOctal=/^0o[0-7]+$/i,freeParseInt=parseInt;function toNumber$2(e){if("number"==typeof e)return e;if(isSymbol(e))return NAN;if(isObject$2(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=isObject$2(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=baseTrim(e);var r=reIsBinary.test(e);return r||reIsOctal.test(e)?freeParseInt(e.slice(2),r?2:8):reIsBadHex.test(e)?NAN:+e}var toNumber_1=toNumber$2,isObject$1=isObject_1,now=now_1,toNumber$1=toNumber_1,FUNC_ERROR_TEXT="Expected a function",nativeMax$1=Math.max,nativeMin=Math.min;function debounce(e,t,r){var i,a,n,o,s,l,p=0,c=!1,d=!1,h=!0;if("function"!=typeof e)throw new TypeError(FUNC_ERROR_TEXT);function u(t){var r=i,n=a;return i=a=void 0,p=t,o=e.apply(n,r)}function m(e){var r=e-l;return void 0===l||r>=t||r<0||d&&e-p>=n}function f(){var e=now();if(m(e))return y(e);s=setTimeout(f,function(e){var r=t-(e-l);return d?nativeMin(r,n-(e-p)):r}(e))}function y(e){return s=void 0,h&&i?u(e):(i=a=void 0,o)}function g(){var e=now(),r=m(e);if(i=arguments,a=this,l=e,r){if(void 0===s)return function(e){return p=e,s=setTimeout(f,t),c?u(e):o}(l);if(d)return clearTimeout(s),s=setTimeout(f,t),u(l)}return void 0===s&&(s=setTimeout(f,t)),o}return t=toNumber$1(t)||0,isObject$1(r)&&(c=!!r.leading,n=(d="maxWait"in r)?nativeMax$1(toNumber$1(r.maxWait)||0,t):n,h="trailing"in r?!!r.trailing:h),g.cancel=function(){void 0!==s&&clearTimeout(s),p=0,i=l=a=s=void 0},g.flush=function(){return void 0===s?o:y(now())},g}var debounce_1=debounce;const visibilityStyle=(e,t)=>e?`\n\t\t\t${t}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${t}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`,Container$b=styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${e=>visibilityStyle(e.show,e.animationFrom||"bottom")}

    ${MediaQuery.MaxWidth.mobileL} {
        height: calc(
            ${e=>e.verticalHeight?`${e.verticalHeight}px`:"1vh"} * 100
        );

        top: ${e=>e.offsetTop||0}px;
    }
`,Modal$1=({id:e="modal",show:t,animationFrom:r="bottom",children:i,enableOverlayClick:a=!0,rootComponentId:n,zIndex:o,onOverlayClick:s,dismissKeyboardOnShow:l=!0,...p})=>{const[c,d]=useState(),[h,u]=useState();useEffect((()=>window.visualViewport?(f(),window.visualViewport.addEventListener("resize",f),()=>{window.visualViewport.removeEventListener("resize",f)}):(m(),window.addEventListener("resize",m),()=>{window.removeEventListener("resize",m)})),[]),useEffect((()=>{t&&l&&document.activeElement?.blur?.()}),[t]);const m=()=>{const e=.01*window.innerHeight;d(e)},f=()=>{const e=.01*window.visualViewport.height;d(e),u(window.visualViewport.offsetTop)};return jsx(Overlay,{"data-testid":`${e}-overlay`,show:t,enableOverlayClick:a,onOverlayClick:s,id:e,rootId:n,zIndex:o,children:jsx(Container$b,{show:t,animationFrom:r,"data-testid":e,verticalHeight:c,offsetTop:h,...p,children:i})})},Box=styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${Color.Neutral[8]};
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.45);
    border-radius: 0.75rem;
    overflow: hidden;

    ${MediaQuery.MaxWidth.mobileL} {
        width: 90%;
        max-height: 70%;
    }
`,CloseButton$1=styled(IconButton)`
    position: absolute;
    top: 0;
    right: 0;
    padding: 1rem 0.75rem;
    border-top-right-radius: 0.75rem;
    :focus-visible {
        outline: 4px solid ${Color.Accent.Light[1]};
    }
`,CloseIcon$2=styled(CrossIcon)`
    height: 1.5rem;
    width: 1.5rem;
    color: ${Color.Neutral[4]};
`,ModalBox=({id:e="modal-box",children:t,onClose:r,showCloseButton:i=!0,...a})=>jsxs(Box,{"data-testid":e,...a,onClick:e=>{e.stopPropagation()},children:[i&&jsx(CloseButton$1,{type:"button",onClick:r,"data-testid":"close-button",focusHighlight:!1,children:jsx(CloseIcon$2,{})}),t]}),getVisibilityStyle$1=e=>e?css`
            visibility: visible;
            opacity: 1;
            transition: ${Transition.Base};
            z-index: 2;
        `:css`
            visibility: hidden;
            opacity: 0;
            transition: ${Transition.Base};
            z-index: -1;
        `,getBubblePosition=e=>{switch(e){case"top-center":return css`
                top: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 50%;
                -moz-transform: translateX(-50%);
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);
            `;case"top-left":return css`
                top: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 0;
            `;case"top-right":return css`
                top: calc(100% + 12px);
                width: max-content;
                margin: auto;
                right: 0;
            `;case"left":return css`
                bottom: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 0;
            `;case"right":return css`
                bottom: calc(100% + 12px);
                width: max-content;
                margin: auto;
                right: 0;
            `;default:return css`
                bottom: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 50%;
                -moz-transform: translateX(-50%);
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);
            `}},BubbleWrap$1=styled.div`
    max-width: 30rem;
    pointer-events: auto;
    position: absolute;

    ${e=>getVisibilityStyle$1(e.$visible)}
    ${e=>getBubblePosition(e.$offset)}

	${MediaQuery.MaxWidth.mobileL} {
        display: none;
    }
`,MobileModalBox=styled(ModalBox)`
    padding: 3.5rem 1.25rem 2.5rem;
`,HOCWrapper$1=styled.div`
    position: relative;
    width: fit-content;
`,HOCTrigger=styled.button`
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
`,Popover=({children:e,visible:t,onMobileClose:r,...i})=>{const a=i["data-testid"]||"popover",[n,o]=useState("none"),s=useRef(null),l=reactResponsive.exports.useMediaQuery({maxWidth:MediaWidths$1.mobileL}),p=useRef(n);useEffect((()=>(h(),window.addEventListener("resize",debounce_1(c,300)),()=>{window.removeEventListener("resize",debounce_1(c,300))})),[]);const c=()=>{h()},d=()=>{r&&r()},h=()=>{const e=u();var t;e&&(t=e,p.current=t,o(t))},u=()=>{if(s.current){const e=s.current.getBoundingClientRect(),t=24,r=e.y<t,i=window.innerWidth-t;return e.x<t?r?"top-left":"left":e.x+e.width>i?r?"top-right":"right":("top-left"===p.current||"left"===p.current)&&e.x-e.width/2>t||("top-right"===p.current||"right"===p.current)&&e.x+2*e.width<i?r?"top-center":"none":void 0}},m=()=>"string"==typeof e?jsx(Text.BodySmall,{children:e}):e;return jsxs(Fragment,{children:[jsx(BubbleWrap$1,{ref:s,"data-testid":a,$visible:t,$offset:n,...i,children:jsx(Card,{children:m()})}),l&&jsx(Modal$1,{show:t,onOverlayClick:d,children:jsx(MobileModalBox,{onClose:d,children:m()})})]})},withPopover=(e,t)=>r=>{const{onPopoverAppear:i,onPopoverDismiss:a,...n}=r,o=t.trigger||"click",s=n,[l,p]=useState(!1),c=useRef(),d=reactResponsive.exports.useMediaQuery({maxWidth:MediaWidths$1.mobileL});useEffect((()=>{if(!d)return document.addEventListener("mousedown",h),()=>{document.removeEventListener("mousedown",h)}}),[l]);const h=e=>{c&&!c.current.contains(e.target)&&(l&&p(!1),a&&a())};return jsxs(HOCWrapper$1,{id:"popover-hoc-wrapper",ref:c,children:[jsx(HOCTrigger,{id:`popover-hoc-trigger${t["data-testid"]&&`-${t["data-testid"]}`}`,type:"button",onClick:e=>{e.preventDefault(),("click"===o||d)&&(p(!l),!l&&i&&i(),l&&a&&a())},onMouseEnter:()=>{"hover"!==o||d||p(!0)},onMouseLeave:()=>{"hover"===o&&l&&!d&&p(!1)},"aria-label":"popover-button",children:jsx(e,{...s})}),jsx(Popover,{visible:l,id:t.id,"data-testid":t["data-testid"],onMobileClose:()=>{p(!1)},children:t.content})]})},TriggerArea=styled.button`
    padding: 0.25rem 0.5rem 0.25rem 0.25rem;
    border: none;
    background: none;
    cursor: pointer;

    & > svg {
        vertical-align: text-bottom;
        height: 1rem;
        width: 1rem;
        color: ${Color.Primary};
    }
`,AddonWrapper=styled.div`
    display: inline;
    position: relative;
    width: fit-content;
`,AddonTrigger=({addonType:e="popover",icon:t,"data-testid":r,...i})=>jsx(TriggerArea,{"data-testid":r,...i,children:t||jsx(ICircleFillIcon,{id:`${e}-icon`})}),PopoverAddon=({addon:e})=>{const[t,r]=useState(!1),i=useRef(),a=useRef(!1),n=reactResponsive.exports.useMediaQuery({maxWidth:MediaWidths$1.mobileL}),o=e=>{a.current=e,r(e)};useEffect((()=>{if(!n)return document.addEventListener("mousedown",s),()=>{document.removeEventListener("mousedown",s)}}),[]);const s=e=>{i&&!i.current.contains(e.target)&&a.current&&o(!1)};return jsxs(AddonWrapper,{ref:i,id:"addon-popover-wrapper",children:[jsx(Popover,{visible:t,id:e.id,"data-testid":e["data-testid"],onMobileClose:()=>{t&&o(!1)},children:e.content}),jsx(AddonTrigger,{addonType:e.type,icon:e.icon,id:`popover-hoc-trigger${e["data-testid"]&&`-${e["data-testid"]}`}`,onClick:()=>o(!t),"aria-label":"popover-button",type:"button"})]})},Label$1=styled.label`
    ${TextStyleHelper.getTextStyle("H5","semibold")}

    color: ${e=>e.disabled?Color.Neutral[4](e):Color.Neutral[3](e)};
    margin-bottom: 0.5rem;
    display: inline-block;

    #popover-hoc-wrapper {
        display: inline;
    }

    #popover-hoc-button {
        vertical-align: bottom;
    }
`,ErrorMessage=styled(Text.H6)`
    color: ${Color.Validation.Red.Text};
    margin-top: 0.5rem;
    margin-bottom: 0;
    outline: none;
`,Subtitle=styled(Text.BodySmall)`
    color: ${e=>e.disabled?Color.Neutral[4](e):Color.Neutral[3](e)};
`,FormLabel=({children:e,addon:t,subtitle:r,"data-testid":i,...a})=>jsxs(Label$1,{...a,children:[e,t&&t.type&&("popover"===t.type?t&&jsx(PopoverAddon,{addon:t}):null),"string"==typeof r?jsx(Subtitle,{as:"span","data-testid":i?`${i}-subtitle`:"subtitle",...a,children:r}):r]}),FormErrorMessage=e=>jsx(ErrorMessage,{weight:"semibold",...e}),Container$a=styled.div`
    display: flex;
    flex-direction: column;

    &:not(:last-child) {
        margin-bottom: 2rem;
    }
`,FormWrapper=({label:e,errorMessage:t,id:r,disabled:i,children:a,"data-error-testid":n})=>{const o=()=>n||(r?`${r}-error-message`:"error-message"),s=()=>!!t;return jsxs(Container$a,{children:[e&&jsx(FormLabel,"string"==typeof e?{htmlFor:`${r}-base`,"data-testid":r?`${r}-label`:"form-label",disabled:i,children:e}:{htmlFor:`${r}-base`,"data-testid":r?`${r}-label`:"form-label",disabled:i,...e}),(()=>{const e={"aria-invalid":s(),"aria-describedby":s()&&o()};return Children.map(a,(t=>cloneElement(t,e)))})(),t&&jsx(ErrorMessage,{id:o(),weight:"semibold",tabIndex:0,"data-testid":o(),children:t})]})},FormCustomField=({id:e="form-custom-field","data-error-testid":t,children:r,...i})=>jsx(FormWrapper,{id:e,"data-error-testid":t,...i,children:r}),FormDateInput=({label:e,errorMessage:t,id:r="form-date-input","data-error-testid":i,"data-testid":a,...n})=>jsx(FormWrapper,{id:r,label:e,errorMessage:t,"data-error-testid":i,disabled:n.disabled,children:jsx(DateInput,{id:`${r}-base`,"data-testid":a||r,error:!!t,...n})}),InputWrapper=styled.div`
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid ${Color.Neutral[5]};
    border-radius: 4px;
    background: ${Color.Neutral[8]};
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};

    :focus-within {
        border: 1px solid ${Color.Accent.Light[1]};
        box-shadow: ${DesignToken.InputBoxShadow};
    }

    ${e=>e.$readOnly?css`
                border: none;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.disabled?css`
                background: ${Color.Neutral[6](e)};
                cursor: not-allowed;

                :focus-within {
                    border: 1px solid ${Color.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$error?css`
                border: 1px solid ${Color.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${Color.Validation.Red.Border(e)};
                    box-shadow: ${DesignToken.InputErrorBoxShadow};
                }
            `:void 0}
`,InputElement=styled.input`
    ${TextStyleHelper.getTextStyle("Body","regular")}
    color: ${Color.Neutral[1]};

    // overwrite default styles
    background: transparent;
    border: none;
    height: 3rem;
    width: 100%;
    padding: 0;

    :focus,
    :active {
        outline: none;
        border: none;
        box-shadow: none;
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${Color.Neutral[3]};
    }

    ${e=>"number"===e.type?css`
                // Chrome, Safari, Edge, Opera
                ::-webkit-outer-spin-button,
                ::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }

                // Firefox
                -moz-appearance: textfield;
            `:e.disabled?css`
                cursor: not-allowed;
            `:void 0}
`,ClearContainer=styled.button`
    position: relative;
    height: auto;
    padding: 0 1rem;

    margin-right: -1rem; // offset the padding
    cursor: pointer;

    color: ${Color.Neutral[3]};
    background-color: transparent;
    border: none;
`,ClearIcon=styled(CrossIcon)`
    height: 1.25rem;
    width: 1.25rem;
`,Component$7=({value:e,spacing:t,type:r,error:i,disabled:a,readOnly:n,onChange:o,onClear:s,allowClear:l=!1,className:p,...c},d)=>{const h=useRef();useImperativeHandle(d,(()=>h.current),[]);const u=()=>"tel"===r&&t,m=e=>{const t=e.target,r=t.value,i=t.value.replace(/\s/g,"");t.value=i,o(e),t.value=r},f=e?(e=>e?u()?StringHelper.transformWithSpaces(e,t):e:"")(e):e;return jsxs(InputWrapper,{disabled:a,$error:i,$readOnly:n,className:p,children:[jsx(InputElement,{"data-testid":"input",ref:h,disabled:a,value:f,onChange:e=>{o&&(u()?m(e):o(e))},type:r,readOnly:n,...c}),l&&!a&&!n&&!!e&&jsx(ClearContainer,{onClick:()=>{s&&s(),h&&h.current&&h.current.focus()},children:jsx(ClearIcon,{})})]})},Input$1=React__default.forwardRef(Component$7),Component$6=(e,t)=>{const{label:r,errorMessage:i,id:a="form-field","data-error-testid":n,"data-testid":o,...s}=e;return jsx(FormWrapper,{id:a,label:r,errorMessage:i,disabled:s.disabled,"data-error-testid":n,children:jsx(Input$1,{id:`${a}-base`,"data-testid":o||a,ref:t,error:!!i,...s})})},FormInput=React__default.forwardRef(Component$6),Container$9=styled.div`
    display: flex;
    position: relative;
    border: 1px solid ${Color.Neutral[5]};
    border-radius: 4px;
    background: ${Color.Neutral[8]};
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};

    :focus-within {
        border: 1px solid ${Color.Accent.Light[1]};
        box-shadow: ${DesignToken.InputBoxShadow};
    }

    ${e=>e.$readOnly?css`
                border: none;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.disabled?css`
                background: ${Color.Neutral[6](e)};
                :hover {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${Color.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$error?css`
                border: 1px solid ${Color.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${Color.Validation.Red.Border(e)};
                    box-shadow: ${DesignToken.InputErrorBoxShadow};
                }
            `:void 0}
`,MainInput=styled(Input$1)`
    // overwrite default styles
    &&& {
        background: transparent;
        border: none;
        padding: 0 0 1px 0;

        :focus-within {
            outline: none;
            border: none;
            box-shadow: none;
        }
    }
`,AddOnContainer=styled.div`
    position: relative;
    display: flex;
    align-items: center;

    ${TextStyleHelper.getTextStyle("Body","regular")}
    color: ${Color.Neutral[1]};

    /* SVG Icon */
    svg {
        height: 1.5rem;
        width: 1.5rem;
        #path {
            fill: ${Color.Neutral[1]};
        }
    }

    ${e=>{if(e.disabled)return css`
                color: ${Color.Neutral[4](e)};
                svg {
                    #path {
                        fill: ${Color.Neutral[4](e)};
                    }
                }
            `}}

    ${e=>"right"===e.$position?css`
                    margin-left: ${e.$readOnly?"0.25rem":"0.75rem"};
                `:css`
                    margin-right: ${e.$readOnly?"0.25rem":"0.75rem"};
                `};
`;var ListCache$2=_ListCache;function stackClear$1(){this.__data__=new ListCache$2,this.size=0}var _stackClear=stackClear$1;function stackDelete$1(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r}var _stackDelete=stackDelete$1;function stackGet$1(e){return this.__data__.get(e)}var _stackGet=stackGet$1;function stackHas$1(e){return this.__data__.has(e)}var _stackHas=stackHas$1,ListCache$1=_ListCache,Map$2=_Map,MapCache$1=_MapCache,LARGE_ARRAY_SIZE=200;function stackSet$1(e,t){var r=this.__data__;if(r instanceof ListCache$1){var i=r.__data__;if(!Map$2||i.length<LARGE_ARRAY_SIZE-1)return i.push([e,t]),this.size=++r.size,this;r=this.__data__=new MapCache$1(i)}return r.set(e,t),this.size=r.size,this}var _stackSet=stackSet$1,ListCache=_ListCache,stackClear=_stackClear,stackDelete=_stackDelete,stackGet=_stackGet,stackHas=_stackHas,stackSet=_stackSet;function Stack$2(e){var t=this.__data__=new ListCache(e);this.size=t.size}Stack$2.prototype.clear=stackClear,Stack$2.prototype.delete=stackDelete,Stack$2.prototype.get=stackGet,Stack$2.prototype.has=stackHas,Stack$2.prototype.set=stackSet;var _Stack=Stack$2,HASH_UNDEFINED="__lodash_hash_undefined__";function setCacheAdd$1(e){return this.__data__.set(e,HASH_UNDEFINED),this}var _setCacheAdd=setCacheAdd$1;function setCacheHas$1(e){return this.__data__.has(e)}var _setCacheHas=setCacheHas$1,MapCache=_MapCache,setCacheAdd=_setCacheAdd,setCacheHas=_setCacheHas;function SetCache$1(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new MapCache;++t<r;)this.add(e[t])}SetCache$1.prototype.add=SetCache$1.prototype.push=setCacheAdd,SetCache$1.prototype.has=setCacheHas;var _SetCache=SetCache$1;function arraySome$1(e,t){for(var r=-1,i=null==e?0:e.length;++r<i;)if(t(e[r],r,e))return!0;return!1}var _arraySome=arraySome$1;function cacheHas$1(e,t){return e.has(t)}var _cacheHas=cacheHas$1,SetCache=_SetCache,arraySome=_arraySome,cacheHas=_cacheHas,COMPARE_PARTIAL_FLAG$5=1,COMPARE_UNORDERED_FLAG$3=2;function equalArrays$2(e,t,r,i,a,n){var o=r&COMPARE_PARTIAL_FLAG$5,s=e.length,l=t.length;if(s!=l&&!(o&&l>s))return!1;var p=n.get(e),c=n.get(t);if(p&&c)return p==t&&c==e;var d=-1,h=!0,u=r&COMPARE_UNORDERED_FLAG$3?new SetCache:void 0;for(n.set(e,t),n.set(t,e);++d<s;){var m=e[d],f=t[d];if(i)var y=o?i(f,m,d,t,e,n):i(m,f,d,e,t,n);if(void 0!==y){if(y)continue;h=!1;break}if(u){if(!arraySome(t,(function(e,t){if(!cacheHas(u,t)&&(m===e||a(m,e,r,i,n)))return u.push(t)}))){h=!1;break}}else if(m!==f&&!a(m,f,r,i,n)){h=!1;break}}return n.delete(e),n.delete(t),h}var _equalArrays=equalArrays$2,root$4=_root,Uint8Array$2=root$4.Uint8Array,_Uint8Array=Uint8Array$2;function mapToArray$1(e){var t=-1,r=Array(e.size);return e.forEach((function(e,i){r[++t]=[i,e]})),r}var _mapToArray=mapToArray$1;function setToArray$1(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r}var _setToArray=setToArray$1,Symbol$1=_Symbol,Uint8Array$1=_Uint8Array,eq=eq_1,equalArrays$1=_equalArrays,mapToArray=_mapToArray,setToArray=_setToArray,COMPARE_PARTIAL_FLAG$4=1,COMPARE_UNORDERED_FLAG$2=2,boolTag$1="[object Boolean]",dateTag$1="[object Date]",errorTag$1="[object Error]",mapTag$2="[object Map]",numberTag$1="[object Number]",regexpTag$1="[object RegExp]",setTag$2="[object Set]",stringTag$1="[object String]",symbolTag="[object Symbol]",arrayBufferTag$1="[object ArrayBuffer]",dataViewTag$2="[object DataView]",symbolProto=Symbol$1?Symbol$1.prototype:void 0,symbolValueOf=symbolProto?symbolProto.valueOf:void 0;function equalByTag$1(e,t,r,i,a,n,o){switch(r){case dataViewTag$2:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case arrayBufferTag$1:return!(e.byteLength!=t.byteLength||!n(new Uint8Array$1(e),new Uint8Array$1(t)));case boolTag$1:case dateTag$1:case numberTag$1:return eq(+e,+t);case errorTag$1:return e.name==t.name&&e.message==t.message;case regexpTag$1:case stringTag$1:return e==t+"";case mapTag$2:var s=mapToArray;case setTag$2:var l=i&COMPARE_PARTIAL_FLAG$4;if(s||(s=setToArray),e.size!=t.size&&!l)return!1;var p=o.get(e);if(p)return p==t;i|=COMPARE_UNORDERED_FLAG$2,o.set(e,t);var c=equalArrays$1(s(e),s(t),i,a,n,o);return o.delete(e),c;case symbolTag:if(symbolValueOf)return symbolValueOf.call(e)==symbolValueOf.call(t)}return!1}var _equalByTag=equalByTag$1;function arrayPush$2(e,t){for(var r=-1,i=t.length,a=e.length;++r<i;)e[a+r]=t[r];return e}var _arrayPush=arrayPush$2,arrayPush$1=_arrayPush,isArray$5=isArray_1;function baseGetAllKeys$1(e,t,r){var i=t(e);return isArray$5(e)?i:arrayPush$1(i,r(e))}var _baseGetAllKeys=baseGetAllKeys$1;function arrayFilter$1(e,t){for(var r=-1,i=null==e?0:e.length,a=0,n=[];++r<i;){var o=e[r];t(o,r,e)&&(n[a++]=o)}return n}var _arrayFilter=arrayFilter$1;function stubArray$1(){return[]}var stubArray_1=stubArray$1,arrayFilter=_arrayFilter,stubArray=stubArray_1,objectProto$6=Object.prototype,propertyIsEnumerable$1=objectProto$6.propertyIsEnumerable,nativeGetSymbols=Object.getOwnPropertySymbols,getSymbols$1=nativeGetSymbols?function(e){return null==e?[]:(e=Object(e),arrayFilter(nativeGetSymbols(e),(function(t){return propertyIsEnumerable$1.call(e,t)})))}:stubArray,_getSymbols=getSymbols$1;function baseTimes$1(e,t){for(var r=-1,i=Array(e);++r<e;)i[r]=t(r);return i}var _baseTimes=baseTimes$1,baseGetTag$2=_baseGetTag,isObjectLike$3=isObjectLike_1,argsTag$2="[object Arguments]";function baseIsArguments$1(e){return isObjectLike$3(e)&&baseGetTag$2(e)==argsTag$2}var _baseIsArguments=baseIsArguments$1,baseIsArguments=_baseIsArguments,isObjectLike$2=isObjectLike_1,objectProto$5=Object.prototype,hasOwnProperty$5=objectProto$5.hasOwnProperty,propertyIsEnumerable=objectProto$5.propertyIsEnumerable,isArguments$2=baseIsArguments(function(){return arguments}())?baseIsArguments:function(e){return isObjectLike$2(e)&&hasOwnProperty$5.call(e,"callee")&&!propertyIsEnumerable.call(e,"callee")},isArguments_1=isArguments$2,isBuffer$2={exports:{}};function stubFalse(){return!1}var stubFalse_1=stubFalse;!function(e,t){var r=_root,i=stubFalse_1,a=t&&!t.nodeType&&t,n=a&&e&&!e.nodeType&&e,o=n&&n.exports===a?r.Buffer:void 0,s=(o?o.isBuffer:void 0)||i;e.exports=s}(isBuffer$2,isBuffer$2.exports);var MAX_SAFE_INTEGER$1=9007199254740991,reIsUint=/^(?:0|[1-9]\d*)$/;function isIndex$2(e,t){var r=typeof e;return!!(t=null==t?MAX_SAFE_INTEGER$1:t)&&("number"==r||"symbol"!=r&&reIsUint.test(e))&&e>-1&&e%1==0&&e<t}var _isIndex=isIndex$2,MAX_SAFE_INTEGER=9007199254740991;function isLength$3(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=MAX_SAFE_INTEGER}var isLength_1=isLength$3,baseGetTag$1=_baseGetTag,isLength$2=isLength_1,isObjectLike$1=isObjectLike_1,argsTag$1="[object Arguments]",arrayTag$1="[object Array]",boolTag="[object Boolean]",dateTag="[object Date]",errorTag="[object Error]",funcTag="[object Function]",mapTag$1="[object Map]",numberTag="[object Number]",objectTag$2="[object Object]",regexpTag="[object RegExp]",setTag$1="[object Set]",stringTag="[object String]",weakMapTag$1="[object WeakMap]",arrayBufferTag="[object ArrayBuffer]",dataViewTag$1="[object DataView]",float32Tag="[object Float32Array]",float64Tag="[object Float64Array]",int8Tag="[object Int8Array]",int16Tag="[object Int16Array]",int32Tag="[object Int32Array]",uint8Tag="[object Uint8Array]",uint8ClampedTag="[object Uint8ClampedArray]",uint16Tag="[object Uint16Array]",uint32Tag="[object Uint32Array]",typedArrayTags={};function baseIsTypedArray$1(e){return isObjectLike$1(e)&&isLength$2(e.length)&&!!typedArrayTags[baseGetTag$1(e)]}typedArrayTags[float32Tag]=typedArrayTags[float64Tag]=typedArrayTags[int8Tag]=typedArrayTags[int16Tag]=typedArrayTags[int32Tag]=typedArrayTags[uint8Tag]=typedArrayTags[uint8ClampedTag]=typedArrayTags[uint16Tag]=typedArrayTags[uint32Tag]=!0,typedArrayTags[argsTag$1]=typedArrayTags[arrayTag$1]=typedArrayTags[arrayBufferTag]=typedArrayTags[boolTag]=typedArrayTags[dataViewTag$1]=typedArrayTags[dateTag]=typedArrayTags[errorTag]=typedArrayTags[funcTag]=typedArrayTags[mapTag$1]=typedArrayTags[numberTag]=typedArrayTags[objectTag$2]=typedArrayTags[regexpTag]=typedArrayTags[setTag$1]=typedArrayTags[stringTag]=typedArrayTags[weakMapTag$1]=!1;var _baseIsTypedArray=baseIsTypedArray$1;function baseUnary$1(e){return function(t){return e(t)}}var _baseUnary=baseUnary$1,_nodeUtil={exports:{}};!function(e,t){var r=_freeGlobal,i=t&&!t.nodeType&&t,a=i&&e&&!e.nodeType&&e,n=a&&a.exports===i&&r.process,o=function(){try{var e=a&&a.require&&a.require("util").types;return e||n&&n.binding&&n.binding("util")}catch(e){}}();e.exports=o}(_nodeUtil,_nodeUtil.exports);var baseIsTypedArray=_baseIsTypedArray,baseUnary=_baseUnary,nodeUtil=_nodeUtil.exports,nodeIsTypedArray=nodeUtil&&nodeUtil.isTypedArray,isTypedArray$2=nodeIsTypedArray?baseUnary(nodeIsTypedArray):baseIsTypedArray,isTypedArray_1=isTypedArray$2,baseTimes=_baseTimes,isArguments$1=isArguments_1,isArray$4=isArray_1,isBuffer$1=isBuffer$2.exports,isIndex$1=_isIndex,isTypedArray$1=isTypedArray_1,objectProto$4=Object.prototype,hasOwnProperty$4=objectProto$4.hasOwnProperty;function arrayLikeKeys$1(e,t){var r=isArray$4(e),i=!r&&isArguments$1(e),a=!r&&!i&&isBuffer$1(e),n=!r&&!i&&!a&&isTypedArray$1(e),o=r||i||a||n,s=o?baseTimes(e.length,String):[],l=s.length;for(var p in e)!t&&!hasOwnProperty$4.call(e,p)||o&&("length"==p||a&&("offset"==p||"parent"==p)||n&&("buffer"==p||"byteLength"==p||"byteOffset"==p)||isIndex$1(p,l))||s.push(p);return s}var _arrayLikeKeys=arrayLikeKeys$1,objectProto$3=Object.prototype;function isPrototype$1(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||objectProto$3)}var _isPrototype=isPrototype$1;function overArg$1(e,t){return function(r){return e(t(r))}}var _overArg=overArg$1,overArg=_overArg,nativeKeys$1=overArg(Object.keys,Object),_nativeKeys=nativeKeys$1,isPrototype=_isPrototype,nativeKeys=_nativeKeys,objectProto$2=Object.prototype,hasOwnProperty$3=objectProto$2.hasOwnProperty;function baseKeys$1(e){if(!isPrototype(e))return nativeKeys(e);var t=[];for(var r in Object(e))hasOwnProperty$3.call(e,r)&&"constructor"!=r&&t.push(r);return t}var _baseKeys=baseKeys$1,isFunction=isFunction_1,isLength$1=isLength_1;function isArrayLike$3(e){return null!=e&&isLength$1(e.length)&&!isFunction(e)}var isArrayLike_1=isArrayLike$3,arrayLikeKeys=_arrayLikeKeys,baseKeys=_baseKeys,isArrayLike$2=isArrayLike_1;function keys$4(e){return isArrayLike$2(e)?arrayLikeKeys(e):baseKeys(e)}var keys_1=keys$4,baseGetAllKeys=_baseGetAllKeys,getSymbols=_getSymbols,keys$3=keys_1;function getAllKeys$1(e){return baseGetAllKeys(e,keys$3,getSymbols)}var _getAllKeys=getAllKeys$1,getAllKeys=_getAllKeys,COMPARE_PARTIAL_FLAG$3=1,objectProto$1=Object.prototype,hasOwnProperty$2=objectProto$1.hasOwnProperty;function equalObjects$1(e,t,r,i,a,n){var o=r&COMPARE_PARTIAL_FLAG$3,s=getAllKeys(e),l=s.length;if(l!=getAllKeys(t).length&&!o)return!1;for(var p=l;p--;){var c=s[p];if(!(o?c in t:hasOwnProperty$2.call(t,c)))return!1}var d=n.get(e),h=n.get(t);if(d&&h)return d==t&&h==e;var u=!0;n.set(e,t),n.set(t,e);for(var m=o;++p<l;){var f=e[c=s[p]],y=t[c];if(i)var g=o?i(y,f,c,t,e,n):i(f,y,c,e,t,n);if(!(void 0===g?f===y||a(f,y,r,i,n):g)){u=!1;break}m||(m="constructor"==c)}if(u&&!m){var _=e.constructor,x=t.constructor;_==x||!("constructor"in e)||!("constructor"in t)||"function"==typeof _&&_ instanceof _&&"function"==typeof x&&x instanceof x||(u=!1)}return n.delete(e),n.delete(t),u}var _equalObjects=equalObjects$1,getNative$3=_getNative,root$3=_root,DataView$1=getNative$3(root$3,"DataView"),_DataView=DataView$1,getNative$2=_getNative,root$2=_root,Promise$2=getNative$2(root$2,"Promise"),_Promise=Promise$2,getNative$1=_getNative,root$1=_root,Set$2=getNative$1(root$1,"Set"),_Set=Set$2,getNative=_getNative,root=_root,WeakMap$1=getNative(root,"WeakMap"),_WeakMap=WeakMap$1,DataView=_DataView,Map$1=_Map,Promise$1=_Promise,Set$1=_Set,WeakMap=_WeakMap,baseGetTag=_baseGetTag,toSource=_toSource,mapTag="[object Map]",objectTag$1="[object Object]",promiseTag="[object Promise]",setTag="[object Set]",weakMapTag="[object WeakMap]",dataViewTag="[object DataView]",dataViewCtorString=toSource(DataView),mapCtorString=toSource(Map$1),promiseCtorString=toSource(Promise$1),setCtorString=toSource(Set$1),weakMapCtorString=toSource(WeakMap),getTag$1=baseGetTag;(DataView&&getTag$1(new DataView(new ArrayBuffer(1)))!=dataViewTag||Map$1&&getTag$1(new Map$1)!=mapTag||Promise$1&&getTag$1(Promise$1.resolve())!=promiseTag||Set$1&&getTag$1(new Set$1)!=setTag||WeakMap&&getTag$1(new WeakMap)!=weakMapTag)&&(getTag$1=function(e){var t=baseGetTag(e),r=t==objectTag$1?e.constructor:void 0,i=r?toSource(r):"";if(i)switch(i){case dataViewCtorString:return dataViewTag;case mapCtorString:return mapTag;case promiseCtorString:return promiseTag;case setCtorString:return setTag;case weakMapCtorString:return weakMapTag}return t});var _getTag=getTag$1,Stack$1=_Stack,equalArrays=_equalArrays,equalByTag=_equalByTag,equalObjects=_equalObjects,getTag=_getTag,isArray$3=isArray_1,isBuffer=isBuffer$2.exports,isTypedArray=isTypedArray_1,COMPARE_PARTIAL_FLAG$2=1,argsTag="[object Arguments]",arrayTag="[object Array]",objectTag="[object Object]",objectProto=Object.prototype,hasOwnProperty$1=objectProto.hasOwnProperty;function baseIsEqualDeep$1(e,t,r,i,a,n){var o=isArray$3(e),s=isArray$3(t),l=o?arrayTag:getTag(e),p=s?arrayTag:getTag(t),c=(l=l==argsTag?objectTag:l)==objectTag,d=(p=p==argsTag?objectTag:p)==objectTag,h=l==p;if(h&&isBuffer(e)){if(!isBuffer(t))return!1;o=!0,c=!1}if(h&&!c)return n||(n=new Stack$1),o||isTypedArray(e)?equalArrays(e,t,r,i,a,n):equalByTag(e,t,l,r,i,a,n);if(!(r&COMPARE_PARTIAL_FLAG$2)){var u=c&&hasOwnProperty$1.call(e,"__wrapped__"),m=d&&hasOwnProperty$1.call(t,"__wrapped__");if(u||m){var f=u?e.value():e,y=m?t.value():t;return n||(n=new Stack$1),a(f,y,r,i,n)}}return!!h&&(n||(n=new Stack$1),equalObjects(e,t,r,i,a,n))}var _baseIsEqualDeep=baseIsEqualDeep$1,baseIsEqualDeep=_baseIsEqualDeep,isObjectLike=isObjectLike_1;function baseIsEqual$3(e,t,r,i,a){return e===t||(null==e||null==t||!isObjectLike(e)&&!isObjectLike(t)?e!=e&&t!=t:baseIsEqualDeep(e,t,r,i,baseIsEqual$3,a))}var _baseIsEqual=baseIsEqual$3,Stack=_Stack,baseIsEqual$2=_baseIsEqual,COMPARE_PARTIAL_FLAG$1=1,COMPARE_UNORDERED_FLAG$1=2;function baseIsMatch$1(e,t,r,i){var a=r.length,n=a,o=!i;if(null==e)return!n;for(e=Object(e);a--;){var s=r[a];if(o&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++a<n;){var l=(s=r[a])[0],p=e[l],c=s[1];if(o&&s[2]){if(void 0===p&&!(l in e))return!1}else{var d=new Stack;if(i)var h=i(p,c,l,e,t,d);if(!(void 0===h?baseIsEqual$2(c,p,COMPARE_PARTIAL_FLAG$1|COMPARE_UNORDERED_FLAG$1,i,d):h))return!1}}return!0}var _baseIsMatch=baseIsMatch$1,isObject=isObject_1;function isStrictComparable$2(e){return e==e&&!isObject(e)}var _isStrictComparable=isStrictComparable$2,isStrictComparable$1=_isStrictComparable,keys$2=keys_1;function getMatchData$1(e){for(var t=keys$2(e),r=t.length;r--;){var i=t[r],a=e[i];t[r]=[i,a,isStrictComparable$1(a)]}return t}var _getMatchData=getMatchData$1;function matchesStrictComparable$2(e,t){return function(r){return null!=r&&(r[e]===t&&(void 0!==t||e in Object(r)))}}var _matchesStrictComparable=matchesStrictComparable$2,baseIsMatch=_baseIsMatch,getMatchData=_getMatchData,matchesStrictComparable$1=_matchesStrictComparable;function baseMatches$1(e){var t=getMatchData(e);return 1==t.length&&t[0][2]?matchesStrictComparable$1(t[0][0],t[0][1]):function(r){return r===e||baseIsMatch(r,e,t)}}var _baseMatches=baseMatches$1;function baseHasIn$1(e,t){return null!=e&&t in Object(e)}var _baseHasIn=baseHasIn$1,castPath=_castPath,isArguments=isArguments_1,isArray$2=isArray_1,isIndex=_isIndex,isLength=isLength_1,toKey$2=_toKey;function hasPath$1(e,t,r){for(var i=-1,a=(t=castPath(t,e)).length,n=!1;++i<a;){var o=toKey$2(t[i]);if(!(n=null!=e&&r(e,o)))break;e=e[o]}return n||++i!=a?n:!!(a=null==e?0:e.length)&&isLength(a)&&isIndex(o,a)&&(isArray$2(e)||isArguments(e))}var _hasPath=hasPath$1,baseHasIn=_baseHasIn,hasPath=_hasPath;function hasIn$1(e,t){return null!=e&&hasPath(e,t,baseHasIn)}var hasIn_1=hasIn$1,baseIsEqual$1=_baseIsEqual,get=get_1,hasIn=hasIn_1,isKey$1=_isKey,isStrictComparable=_isStrictComparable,matchesStrictComparable=_matchesStrictComparable,toKey$1=_toKey,COMPARE_PARTIAL_FLAG=1,COMPARE_UNORDERED_FLAG=2;function baseMatchesProperty$1(e,t){return isKey$1(e)&&isStrictComparable(t)?matchesStrictComparable(toKey$1(e),t):function(r){var i=get(r,e);return void 0===i&&i===t?hasIn(r,e):baseIsEqual$1(t,i,COMPARE_PARTIAL_FLAG|COMPARE_UNORDERED_FLAG)}}var _baseMatchesProperty=baseMatchesProperty$1;function identity$1(e){return e}var identity_1=identity$1;function baseProperty$1(e){return function(t){return null==t?void 0:t[e]}}var _baseProperty=baseProperty$1,baseGet=_baseGet;function basePropertyDeep$1(e){return function(t){return baseGet(t,e)}}var _basePropertyDeep=basePropertyDeep$1,baseProperty=_baseProperty,basePropertyDeep=_basePropertyDeep,isKey=_isKey,toKey=_toKey;function property$1(e){return isKey(e)?baseProperty(toKey(e)):basePropertyDeep(e)}var property_1=property$1,baseMatches=_baseMatches,baseMatchesProperty=_baseMatchesProperty,identity=identity_1,isArray$1=isArray_1,property=property_1;function baseIteratee$3(e){return"function"==typeof e?e:null==e?identity:"object"==typeof e?isArray$1(e)?baseMatchesProperty(e[0],e[1]):baseMatches(e):property(e)}var _baseIteratee=baseIteratee$3,baseIteratee$2=_baseIteratee,isArrayLike$1=isArrayLike_1,keys$1=keys_1;function createFind$1(e){return function(t,r,i){var a=Object(t);if(!isArrayLike$1(t)){var n=baseIteratee$2(r);t=keys$1(t),r=function(e){return n(a[e],e,a)}}var o=e(t,r,i);return o>-1?a[n?t[o]:o]:void 0}}var _createFind=createFind$1;function baseFindIndex$1(e,t,r,i){for(var a=e.length,n=r+(i?1:-1);i?n--:++n<a;)if(t(e[n],n,e))return n;return-1}var _baseFindIndex=baseFindIndex$1,toNumber=toNumber_1,INFINITY=1/0,MAX_INTEGER=17976931348623157e292;function toFinite$1(e){return e?(e=toNumber(e))===INFINITY||e===-INFINITY?(e<0?-1:1)*MAX_INTEGER:e==e?e:0:0===e?e:0}var toFinite_1=toFinite$1,toFinite=toFinite_1;function toInteger$1(e){var t=toFinite(e),r=t%1;return t==t?r?t-r:t:0}var toInteger_1=toInteger$1,baseFindIndex=_baseFindIndex,baseIteratee$1=_baseIteratee,toInteger=toInteger_1,nativeMax=Math.max;function findIndex$1(e,t,r){var i=null==e?0:e.length;if(!i)return-1;var a=null==r?0:toInteger(r);return a<0&&(a=nativeMax(i+a,0)),baseFindIndex(e,baseIteratee$1(t),a)}var findIndex_1=findIndex$1,createFind=_createFind,findIndex=findIndex_1,find=createFind(findIndex),find_1=find,baseIsEqual=_baseIsEqual;function isEqual(e,t){return baseIsEqual(e,t)}var isEqual_1=isEqual;const Container$8=styled(animated.div)`
    overflow: hidden;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);
`,List=styled.ul`
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    background: transparent;
    max-height: 20rem;
    width: ${e=>e.width||"100%"};
    overflow-y: auto;
    padding: 0.5rem;

    ::-webkit-scrollbar {
        width: 9px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${Color.Neutral[4]};
        border-right: 5px solid ${Color.Neutral[8]};
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
    }

    ${MediaQuery.MaxWidth.mobileL} {
        max-height: 15rem;
    }
`,ListItem=styled.li`
    :hover,
    :focus,
    :active {
        background: ${Color.Accent.Light[5]};
    }
    ${e=>{if(e.checked)return css`
                background: ${Color.Accent.Light[5]};
            `}}
`,ListItemSelector=styled.button`
    display: flex;
    ${e=>e.multiSelect?css`
                padding: 0.5rem 1rem;
            `:css`
                padding: 0 1rem;
                min-height: 3.5rem;
                align-items: center;
            `}
    margin: 0 -0.5rem;
    border: none;
    background: transparent;
    width: 100%;
    cursor: pointer;

    :hover,
    :visited,
    :focus,
    :active {
        outline-color: ${Color.Accent.Light[3]};
    }

    span {
        margin-bottom: 0;
    }
`;styled.div`
    position: relative;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${Color.Neutral[8]};
`;const Label=styled.div`
    ${TextStyleHelper.getTextStyle("Body","regular")}
    color: ${Color.Neutral[1]};
    text-align: left;
    line-height: 1.375rem;
    overflow: hidden;
    ${e=>{if("middle"!==e.truncateType)return css`
                    display: -webkit-box;
                    text-overflow: ellipsis;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                `}}
`,SecondaryLabel=styled.span`
    color: ${Color.Neutral[4]};
    display: inline;
    padding-left: 0.4rem;
`,TruncateContainer=styled.div`
    display: flex;
    flex-direction: column;
`,TruncateFirstLine=styled.div`
    width: 100%;
    height: 1.5rem;
    word-break: break-all;
    overflow: hidden;
`,TruncateSecondLine=styled.div`
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`;styled(Text.Hyperlink.Default)`
    color: ${Color.Neutral[1]} !important;
    padding: 1.25rem 1rem;
    margin-bottom: 0;

    :hover,
    :visited,
    :focus,
    :active {
        outline-color: ${Color.Accent.Light[3]};
        color: ${Color.Neutral[1]};
    }
`;const ListCheckbox=styled(Checkbox)`
    flex: 0 0 1.5rem;
    margin-right: 1rem;
`,SelectAllContainer=styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 1rem 0 0.5rem 0;
`,DropdownCommonButton=styled.button`
    ${TextStyleHelper.getTextStyle("Body","semibold")}
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    ${e=>`\n\t\t\tcolor: ${Color.Primary(e)};\n\t\t`}
`,ResultStateContainer=styled.div`
    width: 100%;
    display: flex;
    padding: 1rem 0.5rem;
    align-items: center;
`,ResultStateText=styled(Text.Body)``,LabelIcon=styled(ExclamationCircleFillIcon)`
    margin-right: 0.625rem;
    height: 1.5rem;
    width: 1.5rem;
    color: ${Color.Validation.Red.Icon};
`;var magnifier={},MagnifierIcon;Object.defineProperty(magnifier,"__esModule",{value:!0});var e$4=require$$0;const C$3=e=>e$4.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:e$4.jsx("path",{d:"M15.688 16.896L11.125 12.333C10.667 12.6803 10.1703 12.941 9.635 13.115C9.10033 13.2883 8.54133 13.375 7.958 13.375C6.44467 13.375 5.15667 12.8507 4.094 11.802C3.03133 10.7533 2.5 9.472 2.5 7.958C2.5 6.44467 3.03133 5.15667 4.094 4.094C5.15667 3.03133 6.44467 2.5 7.958 2.5C9.472 2.5 10.7533 3.03133 11.802 4.094C12.8507 5.15667 13.375 6.44467 13.375 7.958C13.375 8.54133 13.2917 9.10033 13.125 9.635C12.9583 10.1703 12.6943 10.66 12.333 11.104L16.917 15.708C17.0837 15.8747 17.1633 16.0727 17.156 16.302C17.1493 16.5313 17.0627 16.7293 16.896 16.896C16.7293 17.0627 16.528 17.146 16.292 17.146C16.056 17.146 15.8547 17.0627 15.688 16.896ZM7.958 11.625C8.972 11.625 9.83667 11.2673 10.552 10.552C11.2673 9.83667 11.625 8.972 11.625 7.958C11.625 6.93067 11.2707 6.05567 10.562 5.333C9.854 4.611 8.986 4.25 7.958 4.25C6.93067 4.25 6.05567 4.611 5.333 5.333C4.611 6.05567 4.25 6.93067 4.25 7.958C4.25 8.986 4.611 9.854 5.333 10.562C6.05567 11.2707 6.93067 11.625 7.958 11.625Z",fill:"currentColor"})});C$3.displayName="MagnifierIcon",MagnifierIcon=magnifier.MagnifierIcon=C$3;const Container$7=styled.li`
    background: ${Color.Neutral[7]};
    display: flex;
    border-radius: 4px;
    align-items: center;
`,SearchInput=styled.input`
    ${TextStyleHelper.getTextStyle("Body","regular")}
    height: 3rem;
    border: none;
    background: transparent;
    flex: 1;
    padding: 0 0.5rem 0 0;
    width: 100%;

    :focus,
    :active {
        outline: none;
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${Color.Neutral[3]};
    }
`,SearchIcon=styled(MagnifierIcon)`
    height: 1.375rem;
    width: 1.375rem;
    margin: 0 0.5rem;
    color: ${Color.Neutral[3]};
`,CancelButton=styled(IconButton)`
    padding: 0;
    margin: 0 0.5rem;
    color: ${Color.Neutral[3]};
    cursor: pointer;
`,CancelIcon=styled(CrossIcon)`
    height: 1.375rem;
    width: 1.375rem;
    color: ${Color.Neutral[3]};
`,Component$5=(e,t)=>{const{onClear:r,...i}=e;return jsxs(Container$7,{children:[jsx(SearchIcon,{}),jsx(SearchInput,{ref:t,...i}),i.value&&jsx(CancelButton,{"aria-label":"Clear search",focusOutline:"browser",onClick:r,children:jsx(CancelIcon,{})})]},"search")},DropdownSearch=forwardRef(Component$5),DropdownList=({listItems:e,listExtractor:t,valueExtractor:r,onSelectItem:i,listStyleWidth:a,visible:n,enableSearch:o,searchPlaceholder:s="Search",onSearch:l,searchFunction:p,onDismiss:c,multiSelect:d,selectedItems:h,onSelectAll:u,onRetry:m,itemsLoadState:f="success",itemTruncationType:y="end",renderListItem:g,onBlur:_,hideNoResultsDisplay:x,renderCustomCallToAction:b,...v})=>{const[C,S]=useState(0),[$,w]=useState(""),[T,k]=useState(e),[E,A]=useState(0),P=useSpring({height:E}),I=useRef(),M=useRef(),D=useRef([]),F=useRef(),R=useRef(),j=useRef(C),L=useRef(T),B=e=>{j.current=e,S(e)},O=e=>{L.current=e,k(e)};useEffect((()=>(document.addEventListener("keydown",W),()=>{document.removeEventListener("keydown",W)})),[]),useEffect((()=>{z($)}),[$]),useEffect((()=>{w(""),n?(setTimeout((()=>{A(G())})),F&&F.current?(F.current.focus(),B(-1)):D.current[C]&&D.current[C].focus()):A(0)}),[n]),useEffect((()=>{if(n){const e=G();A(e)}}),[T]),useEffect((()=>{O(e),w(""),B(0)}),[e]);const N=e=>t?t(e):e.toString(),V=e=>{const r=t?t(e):e.toString();let i=0;return M&&M.current&&(i=M.current.getBoundingClientRect().width-100),StringHelper.shouldTruncateToTwoLines("string"==typeof r?r:r.title,i)},H=e=>!!find_1(h,(t=>isEqual_1(t,e))),z=t=>{if(""===t)O(e);else if(p){const e=p(t);O(e)}else{const r=e.filter((e=>{const r=N(e),i="object"==typeof r?r.title.toLowerCase():r.toLowerCase();return"object"==typeof r&&r.secondaryLabel?i.includes(t.trim().toLowerCase())||r.secondaryLabel.includes(t.trim().toLowerCase()):i.includes(t.trim().toLowerCase())}));O(r)}},G=()=>(M&&M.current?M.current.getBoundingClientRect().height:0)+(R.current?R.current.getBoundingClientRect().height:0),W=e=>{if(I&&I.current.contains(e.target))switch(e.code){case"ArrowDown":if(j.current<L.current.length-1){const e=j.current+1;D.current[e].focus(),B(e)}break;case"ArrowUp":if(j.current>0){const e=j.current-1;D.current[e].focus(),B(j.current-1)}break;case"Escape":c&&c(!0)}},U=(e,t)=>{e.preventDefault(),i&&i(t,(e=>r?r(e):e)(t))},q=e=>{const t=e.target.value;w(t),l&&l()},Q=()=>{w(""),l&&l()},Y=()=>{m&&m()},K=()=>{_&&_()},Z=e=>{const t=N(e),r="string"==typeof t?t:t.title;return jsxs(TruncateContainer,{"data-testid":"truncate-middle-container",children:[jsx(TruncateFirstLine,{children:r}),jsxs(TruncateSecondLine,{children:[" ",r]})]})},X=e=>{const t=N(e);return"string"==typeof t?jsx(Fragment,{children:t}):jsxs(Fragment,{children:[t.title,t.secondaryLabel&&jsx(SecondaryLabel,{children:t.secondaryLabel})]})},J=()=>{if(!m||m&&"success"===f)return T.map(((e,t)=>jsx(ListItem,{checked:H(e)&&!d,children:jsxs(ListItemSelector,{onClick:t=>{U(t,e)},ref:e=>D.current[t]=e,"data-testid":"list-item",type:"button",tabIndex:n?0:-1,multiSelect:d,onBlur:K,children:[d&&jsx(ListCheckbox,{checked:H(e),displaySize:"small"}),g?g(e,{selected:H(e)}):jsx(Label,{truncateType:y,children:"middle"===y&&V(e)?Z(e):X(e)})]})},((e,t)=>`item_${t}__${r?r(e):e}`)(e,t))))},ee=()=>{if(d&&T.length>0&&!$&&"success"===f)return jsx(SelectAllContainer,{children:jsx(DropdownCommonButton,{onClick:u,children:0===h.length?"Select all":"Unselect all"})},"selectAll")},te=()=>{if(!x&&$&&0===T.length)return jsxs(ResultStateContainer,{"data-testid":"list-no-results",children:[jsx(LabelIcon,{"data-testid":"no-result-icon"}),jsx(ResultStateText,{children:"No results found."})]},"noResults")},re=()=>{if(m&&"loading"===f)return jsxs(ResultStateContainer,{"data-testid":"list-loading",children:[jsx(Spinner,{$buttonStyle:"secondary",size:24}),jsx(ResultStateText,{children:"Loading..."})]},"loading")},ie=()=>{if(m&&"fail"===f)return jsxs(ResultStateContainer,{"data-testid":"list-fail",children:[jsx(LabelIcon,{"data-testid":"load-error-icon"}),jsx(ResultStateText,{children:"Failed to load."}),jsx(DropdownCommonButton,{onClick:Y,children:"Try again."})]},"noResults")};return jsx(Fragment,{children:jsxs(Container$8,{style:P,"data-testid":n?"dropdown-container":"dropdown-container-hidden",ref:I,children:[(()=>{if(n)return jsxs(List,{ref:M,"data-testid":"dropdown-list",width:a,role:"list",...v,children:[(o||p)&&"success"===f?jsx(DropdownSearch,{ref:F,onChange:q,value:$,placeholder:s,"data-testid":"search-input","aria-label":"search-input",tabIndex:n?0:-1,onClear:Q}):null,ee(),te(),re(),ie(),J()]})})(),(()=>{if(n&&b)return jsx("div",{ref:R,"data-testid":"custom-cta",children:b(c,T)})})()]})})},BORDER_RADIUS$2="4px",Wrapper$e=styled.div`
    position: relative;
    min-height: 3rem;
    height: 3rem; // Need this to persist the height when expanding or collapsing list
    width: 100%;

    ${MediaQuery.MaxWidth.tablet} {
        height: auto;
    }
`,Selector$1=styled.button`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    height: 3rem;
    width: 100%;
    border-radius: ${BORDER_RADIUS$2};
    cursor: pointer;
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${Color.Accent.Light[3]};
    }
`,zindexPositionHide=keyframes`
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
`,ElementBoundary$1=styled.div`
    position: relative;
    border: 1px solid ${Color.Neutral[5]};
    border-radius: ${BORDER_RADIUS$2};
    background: ${Color.Neutral[8]};

    :focus-within {
        border: 1px solid ${Color.Accent.Light[1]};
        box-shadow: ${DesignToken.InputBoxShadow};
    }

    ${e=>e.expanded?css`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:css`
                animation: ${zindexPositionHide} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?css`
                background: ${Color.Neutral[6](e)};

                ${Selector$1} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${Color.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$readOnly?css`
                border: none;
                background: transparent !important;

                ${Selector$1} {
                    padding-left: 0rem;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?css`
                border: 1px solid ${Color.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${Color.Validation.Red.Border(e)};
                    box-shadow: ${DesignToken.InputErrorBoxShadow};
                }
            `:void 0}
`,IconContainer$1=styled.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: ${Transition.Base};
    margin-left: 1rem;
`,StyledChevronIcon$1=styled(ChevronDownIcon)`
    color: ${Color.Neutral[3]};
    height: ${TextStyle.Body.fontSize}rem;
    width: ${TextStyle.Body.fontSize}rem;
`,Divider$1=styled.div`
    height: 1px;
    background: ${Color.Neutral[5]};
    margin: 0 0.5rem;
`,LabelContainer$2=styled.div`
    display: flex;
    flex: 1;
`,ValueLabel$1=styled(Text.Body)`
    text-align: left;
    line-height: 1.375rem;
    ${e=>{if("middle"!==e.truncateType)return css`
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                `}}
    overflow: hidden;
`,PlaceholderLabel$1=styled(ValueLabel$1)`
    color: ${Color.Neutral[3]};
`,RangeIcon=styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    padding: 0;
`,Wrapper$d=Wrapper$e,ElementBoundary=styled(ElementBoundary$1)``,DisplayContainer=styled.div`
    position: relative;
    display: flex;
    margin: 0 1rem;
    ${e=>{if(e.$expanded)return css`
                border-bottom: 1px solid ${Color.Neutral[5](e)};
            `}}

    ${e=>e.$readOnly?css`
                border: 0;
                margin: 0;
            `:"right"===e.$position?css`
                        flex-direction: row-reverse;
                        margin: 0 0 0 1rem;
                    `:css`
                        flex-direction: row;
                    `}
`,Selector=styled(Selector$1)`
    padding: 0;
    width: auto;
`,SelectorReadOnly=styled.div`
    height: 3rem;
    display: flex;
    align-items: center;
    padding: 0;
    background: transparent;
    margin-right: 0.75rem;
`,IconContainer=styled.div`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: ${Transition.Base};
    margin: 0 0.75rem;
`,StyledChevronIcon=styled(ChevronDownIcon)`
    color: ${Color.Neutral[3]};
    height: ${TextStyle.Body.fontSize}rem;
    width: ${TextStyle.Body.fontSize}rem;
    vertical-align: bottom;
`,LabelContainer$1=styled.div`
    display: flex;
    flex: 1 1 auto;
`,ValueLabel=styled(Text.Body)`
    text-align: left;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 1px; // align with input
`,PlaceholderLabel=styled(ValueLabel)`
    color: ${Color.Neutral[3]};
`,Divider=styled.div`
    width: 1px;
    background: ${Color.Neutral[5]};

    ${e=>{if(e.$readOnly)return css`
                display: none;
            `}}

    ${e=>"right"===e.$position?css`
                    margin: 1rem 0.75rem;
                `:css`
                    margin: 1rem 0.75rem 1rem 0;
                `}
`,InputGroupListAddon=({addon:e,error:t,onChange:r,readOnly:i,className:a,onBlur:n,...o})=>{const{placeholder:s,options:l,enableSearch:p,searchFunction:c,searchPlaceholder:d,valueExtractor:h,listExtractor:u,displayValueExtractor:m,selectedOption:f,onSelectOption:y,onHideOptions:g,onShowOptions:_,"data-selector-testid":x}=e.attributes,{position:b}=e,[v,C]=useState(f),[S,$]=useState(!1),w=useRef(),T=useRef();useEffect((()=>{C(f)}),[f]),useEffect((()=>(document.addEventListener("mousedown",A),()=>{document.removeEventListener("mousedown",A)})),[]);const k=()=>m?m(v):h?h(v):v.toString(),E=e=>{!e&&g&&g(),e&&_&&_()},A=e=>{if(!o.disabled){if(w&&w.current.contains(e.target))return;$(!1),E(!1),D()}},P=e=>{e.preventDefault(),o.disabled||($(!S),E(!S))},I=(e,t)=>{C(e),$(!1),E(!1),T&&T.current.focus(),y&&y(e,t)},M=e=>{r&&r(e)},D=()=>{n&&n()},F=()=>{$(!1),E(!1),T&&T.current.focus()};return jsx(Wrapper$d,{className:a,children:jsxs(ElementBoundary,{ref:w,disabled:o.disabled,error:t&&!S,expanded:S,$readOnly:i,children:[jsxs(DisplayContainer,{$expanded:S,$readOnly:i,$position:b,children:[i?v?jsx(SelectorReadOnly,{children:jsx(ValueLabel,{"data-testid":"selector-label",children:k()})}):null:jsx(Selector,{ref:T,type:"button",disabled:o.disabled,"data-testid":x||"addon-selector",onClick:P,children:jsxs(Fragment,{children:[jsxs(LabelContainer$1,{children:[s&&!v&&jsx(PlaceholderLabel,{children:s}),v&&jsx(ValueLabel,{"data-testid":"selector-label",children:k()})]}),jsx(IconContainer,{$expanded:S,children:jsx(StyledChevronIcon,{})})]})}),jsx(Divider,{$readOnly:i,$position:b}),jsx(MainInput,{...o,readOnly:i,error:t,onChange:M,"data-testid":o["data-testid"]||"input",onBlur:D})]}),l&&l.length>0?jsx(DropdownList,{listItems:l,selectedItems:f?[f]:[],onSelectItem:I,valueExtractor:h,listExtractor:u,visible:S,enableSearch:p,searchFunction:c,searchPlaceholder:d,"data-testid":"dropdown-list",onBlur:D,onDismiss:F}):null]})})},Component$4=({addon:e,error:t,className:r,...i},a)=>{const n=()=>jsx(Container$9,{disabled:i.disabled,$error:t,$readOnly:i.readOnly,"data-testid":i["data-testid"],className:r,children:jsx(MainInput,{ref:a,...i,"data-testid":"input"})});if(!e)return n();{const{type:a="label",position:o="left"}=e,{allowClear:s}=i;switch(a){case"list":{const a=e.attributes;return a.options&&a.options.length>0?jsx(InputGroupListAddon,{addon:e,error:t,className:r,...i}):n()}case"custom":{const a=e.attributes;return a.children?jsxs(InputWrapper,{$error:t,disabled:i.disabled,$readOnly:i.readOnly,"data-testid":i["data-testid"],$position:o,className:r,children:[jsx(AddOnContainer,{"data-testid":"addon",disabled:i.disabled,$readOnly:i.readOnly,$position:o,children:a.children}),jsx(MainInput,{...i,allowClear:s&&"right"!==o,error:t,"data-testid":"input"})]}):n()}default:{const a=e.attributes;return a.value?jsxs(InputWrapper,{disabled:i.disabled,$error:t,$readOnly:i.readOnly,"data-testid":i["data-testid"],$position:o,className:r,children:[jsx(AddOnContainer,{"data-testid":"addon",disabled:i.disabled,$readOnly:i.readOnly,$position:o,children:a.value}),jsx(MainInput,{...i,allowClear:s&&"right"!==o,error:t,"data-testid":"input"})]}):n()}}}},InputGroup=React__default.forwardRef(Component$4),Component$3=(e,t)=>{const{label:r,errorMessage:i,id:a="form-field-group","data-error-testid":n,"data-testid":o,...s}=e;return jsx(FormWrapper,{id:a,label:r,errorMessage:i,disabled:s.disabled,"data-error-testid":n,children:jsx(InputGroup,{ref:t,id:`${a}-base`,"data-testid":o||a,error:!!i,...s})})},FormInputGroup=React__default.forwardRef(Component$3),InputSelectWrapper=({children:e,show:t,error:r,disabled:i,testId:a,onBlur:n,readOnly:o})=>{const s=useRef(),l=useRef(t);useEffect((()=>(document.addEventListener("mousedown",p),()=>{document.removeEventListener("mousedown",p)})),[n]),useEffect((()=>{l.current=t}),[t]);const p=e=>{if(!i){if(s&&s.current.contains(e.target))return;l.current&&n()}};return jsx(Wrapper$e,{children:jsx(ElementBoundary$1,{ref:s,error:r&&!t,disabled:i,$readOnly:o,expanded:t,"data-testid":a,children:e})})},InputMultiSelect=({selectedOptions:e,placeholder:t="Select",options:r,disabled:i,error:a,"data-testid":n,enableSearch:o=!1,searchFunction:s,searchPlaceholder:l,valueExtractor:p,listExtractor:c,onSelectOptions:d,listStyleWidth:h,onShowOptions:u,onHideOptions:m,onRetry:f,optionsLoadState:y="success",optionTruncationType:g="end",..._})=>{const[x,b]=useState(e||[]),[v,C]=useState(!1),S=useRef();useEffect((()=>{b(e||[])}),[e]);const $=(e,t)=>{const r=[...x],i=findIndex_1(x,(e=>(p?p(e):e)===t));i>-1?r.splice(i,1):r.push(e),b(r),k(!1),S&&S.current.focus(),d&&d(r)},w=()=>{v&&(C(!1),k(!1)),S&&S.current.focus()},T=()=>{x&&x.length>0?(b([]),d([])):(b(r),d(r))},k=e=>{!e&&m&&m(),e&&u&&u()};return jsxs(InputSelectWrapper,{show:v,error:a&&!v,disabled:i,testId:n,onBlur:()=>{C(!1),k(!1)},children:[jsx(Selector$1,{ref:S,type:"button","data-testid":"selector",onClick:e=>{e.preventDefault(),i||(C(!v),k(!v))},..._,children:jsxs(Fragment,{children:[jsx(LabelContainer$2,{children:x&&0!==x.length?jsx(ValueLabel$1,{children:x&&0!=x.length?`${x.length} selected`:t}):jsx(PlaceholderLabel$1,{truncateType:g,children:t})}),jsx(IconContainer$1,{expanded:v,children:jsx(StyledChevronIcon$1,{})})]})}),v&&jsx(Divider$1,{}),r&&r.length>0||f?jsx(DropdownList,{listItems:r,onSelectItem:$,onDismiss:w,valueExtractor:p,listExtractor:c,listStyleWidth:h,visible:v,enableSearch:o,searchFunction:s,searchPlaceholder:l,"data-testid":"dropdown-list",multiSelect:!0,selectedItems:x,onSelectAll:T,onRetry:f,itemsLoadState:y,itemTruncationType:g}):null]})},FormMultiSelect=({label:e,errorMessage:t,id:r="form-multi-select","data-error-testid":i,"data-testid":a,enableSearch:n=!1,...o})=>jsx(FormWrapper,{id:r,label:e,errorMessage:t,"data-error-testid":i,disabled:o.disabled,children:jsx(InputMultiSelect,{id:`${r}-base`,"data-testid":a||r,error:!!t,enableSearch:n,...o})}),InputSelect=({selectedOption:e,placeholder:t="Select",options:r,disabled:i,error:a,"data-testid":n,id:o,enableSearch:s=!1,searchFunction:l,searchPlaceholder:p,valueExtractor:c,valueToStringFunction:d,listExtractor:h,displayValueExtractor:u,onSelectOption:m,listStyleWidth:f,onShowOptions:y,onHideOptions:g,onRetry:_,optionsLoadState:x="success",optionTruncationType:b="end",renderCustomSelectedOption:v,renderListItem:C,hideNoResultsDisplay:S,renderCustomCallToAction:$,...w})=>{const[T,k]=useState(e),[E,A]=useState(!1),P=useRef(),I=useRef();useEffect((()=>{k(e)}),[e]);const M=(e,t)=>{k(e),A(!1),R(!1),P&&P.current.focus(),m&&m(e,t)},D=e=>{E&&(A(!1),R(!1)),e&&P&&P.current.focus()},F=e=>{if("middle"===b){let t=0;return I&&I.current&&(t=I.current.getBoundingClientRect().width),StringHelper.truncateOneLine((e=>"string"==typeof e?e:d(e)||e.toString())(e),t,120,8)}return e},R=e=>{!e&&g&&g(),e&&y&&y()};return jsxs(InputSelectWrapper,{show:E,error:a&&!E,disabled:i,readOnly:w.readOnly,testId:n,onBlur:()=>{A(!1),R(!1)},children:[jsx(Selector$1,{ref:P,type:"button","data-testid":o||"selector",disabled:i,onClick:e=>{e.preventDefault(),i||w.readOnly||(A(!E),R(!E))},...w,children:jsxs(Fragment,{children:[jsx(LabelContainer$2,{ref:I,children:T?v?v(T):jsx(ValueLabel$1,{truncateType:b,children:F(u?u(T):c?c(T):T.toString())}):jsx(PlaceholderLabel$1,{truncateType:b,children:t})}),!w.readOnly&&jsx(IconContainer$1,{expanded:E,children:jsx(StyledChevronIcon$1,{})})]})}),E&&jsx(Divider$1,{}),r&&r.length>0?jsx(DropdownList,{listItems:r,onSelectItem:M,onDismiss:D,valueExtractor:c,listExtractor:h,listStyleWidth:f,visible:E,enableSearch:s,searchPlaceholder:p,searchFunction:l,"data-testid":"dropdown-list",selectedItems:T?[T]:[],onRetry:_,itemsLoadState:x,itemTruncationType:b,renderListItem:C,hideNoResultsDisplay:S,renderCustomCallToAction:$}):null]})},InputRangeSelect=({selectedOptions:e,placeholders:t={from:"Select",to:"Select"},options:r,disabled:i,readOnly:a,error:n,"data-testid":o,id:s,enableSearch:l=!1,searchFunction:p,searchPlaceholder:c,valueExtractor:d,valueToStringFunction:h,listExtractor:u,displayValueExtractor:m,onSelectOption:f,listStyleWidth:y,onShowOptions:g,onHideOptions:_,onRetry:x,optionsLoadState:b={from:"success",to:"success"},optionTruncationType:v="middle",renderCustomSelectedOption:C,renderListItem:S,renderCustomCallToAction:$,...w})=>{const[T,k]=useState(),[E,A]=useState(),P=useRef(),I={from:useRef(),to:useRef()},[M,D]=useState("none");useEffect((()=>{k(e?.from),A(e?.to)}),[e]);const F=(e,t)=>{e.stopPropagation(),e.preventDefault(),i||a||D("from"===t?"from":"to"===t&&T?"to":"from")},R=e=>{const t="from"===e?T:E;return m?m(t):d?d(t):t?.toString()},j=(e,t)=>{if("middle"===v){let r=0;return I[e]&&I[e].current&&(r=I[e].current.getBoundingClientRect().width),StringHelper.truncateOneLine((e=>"string"==typeof e?e:h(e)||e.toString())(t),r,120,8)}return t},L=e=>{!e&&_&&_(),e&&g&&g()},B=e=>{const r="from"===e?T:E;return r?C?C(r):jsx(ValueLabel$1,{truncateType:v,children:j(e,R(e))}):jsx(PlaceholderLabel$1,{truncateType:v,children:j(e,t[e])})},O=e=>jsx(LabelContainer$2,{onClick:t=>F(t,e),style:"to"===e&&a?{marginLeft:"1rem"}:{},ref:I[e],children:B(e)}),N=(e,t)=>{if(e&&e.length>0){const r="from"===t?T:E;return jsx(DropdownList,{listItems:e,onSelectItem:(e,r)=>((e,t,r)=>{"from"===r?k(e):A(e),L(!1),P&&P.current.focus(),f&&f({[r]:e},t),"from"===r?(A(void 0),D("to"),L(!0)):D("none")})(e,r,t),onDismiss:()=>(D("none"),L(!1),P&&P.current.focus(),void(T&&E||(A(void 0),k(void 0)))),valueExtractor:d,listExtractor:u,listStyleWidth:y,visible:"none"!==M,enableSearch:l,searchPlaceholder:c,searchFunction:p,"data-testid":`${t}-dropdown-list`,selectedItems:r?[r]:[],onRetry:x,itemsLoadState:b[t],itemTruncationType:v,renderListItem:S,renderCustomCallToAction:$})}return null};return jsxs(InputSelectWrapper,{show:"none"!==M,"data-testid":w["data-testid"],error:n&&!("none"!==M),disabled:i,readOnly:a,testId:o,onBlur:()=>{L(!1),D("none"),T&&E||(A(void 0),k(void 0))},children:[jsxs(Selector$1,{type:"button","data-testid":s||"selector",disabled:i,ref:P,style:{gap:"1.8rem"},onClick:e=>F(e),...w,children:[O("from"),jsx(RangeIcon,{tabIndex:-1,children:jsx(ArrowRight$1,{})}),O("to")]}),"none"!==M&&jsx(Divider$1,{}),"from"===M?N(r.from,"from"):"to"===M?N(r.to,"to"):jsx(Fragment,{}),jsx(IndicateBar,{$stickTo:"top",$position:"from"===M?"start":"to"===M?"end":"none",$disableMobile:!1})]})},FormSelect=({label:e,errorMessage:t,id:r="form-select","data-error-testid":i,"data-testid":a,enableSearch:n=!1,...o})=>jsx(FormWrapper,{id:r,label:e,errorMessage:t,"data-error-testid":i,disabled:o.disabled,children:jsx(InputSelect,{id:`${r}-base`,"data-testid":a||r,error:!!t,enableSearch:n,...o})}),CounterLabel=styled(Text.H6)`
    text-align: right;

    ${e=>{if(e.disabled)return css`
                color: ${Color.Neutral[4](e)};
            `}}
`,TextareaCounter=({value:e,maxLength:t,disabled:r,renderCustomCounter:i})=>{const[a,n]=useState("");useEffect((()=>{n(o(`${e||""}`))}),[e,t]);const o=e=>{if(i)return i(t,e.toString().length);{const r=t-e.toString().length;return r<=1?`${r} character left`:`${r.toLocaleString()} characters left`}};return jsx(Fragment,{children:React__default.isValidElement(a)?a:jsx(CounterLabel,{"data-testid":"counter-label",weight:"semibold",disabled:r,children:a})})},Wrapper$c=styled.div`
    display: flex;
    flex-direction: column;
`,Element$1=styled.textarea`
    border: 1px solid ${Color.Neutral[5]};
    border-radius: 4px;
    display: block;
    padding: 0.75rem 1rem;
    width: 100%;
    transition: ${Transition.Base};

    ${TextStyleHelper.getTextStyle("Body","regular")}
    color: ${Color.Neutral[1]};
    background: ${Color.Neutral[8]};

    :focus,
    :active {
        outline: none;
        border: 1px solid ${Color.Accent.Light[1]};
        box-shadow: ${DesignToken.InputBoxShadow};
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${Color.Neutral[3]};
    }

    ${e=>e.readOnly?css`
                border: none;
                padding: 0.75rem 0;
                background: transparent !important;

                :focus,
                :active {
                    border: none;
                    box-shadow: none;
                }
            `:e.disabled?css`
                background: ${Color.Neutral[6](e)};
                cursor: not-allowed;

                :focus,
                :active {
                    outline: none;
                    border: 1px solid ${Color.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.error?css`
                border: 1px solid ${Color.Validation.Red.Border(e)};

                :focus,
                :active {
                    border: 1px solid ${Color.Validation.Red.Border(e)};
                    box-shadow: ${DesignToken.InputErrorBoxShadow};
                }
            `:void 0}
`,TextareaBaseComponent=({value:e,disabled:t,error:r,rows:i=5,...a},n)=>jsx(Element$1,{ref:n,disabled:t,value:e,error:r,rows:i,...a}),TextareaBase=React__default.forwardRef(TextareaBaseComponent),TextareaComponent=({value:e,disabled:t,rows:r=5,onChange:i,...a},n)=>{const[o,s]=useState(e);useEffect((()=>{s(e)}),[e]);return jsxs(Wrapper$c,{children:[jsx(Element$1,{ref:n,disabled:t,value:o,rows:r||5,onChange:e=>{const t=e.target.value;a.maxLength&&t.length>a.maxLength||(s(t),e.target.value=t,i&&i(e))},...a}),a.maxLength&&jsx(TextareaCounter,{disabled:t,value:o,maxLength:a.maxLength,renderCustomCounter:a.renderCustomCounter})]})},Textarea=React__default.forwardRef(TextareaComponent),LabelContainer=styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 0.25rem;
`,ErrorMessageContainer=styled.div`
    display: flex;
    flex: 1;
    margin-right: 0.75rem;
`,ErrorMessageLabel=styled(ErrorMessage)`
    margin-top: 0;
`,FormTextareaComponent=(e,t)=>{const{label:r,value:i,errorMessage:a,id:n="form-textarea","data-error-testid":o,"data-testid":s,onChange:l,...p}=e,[c,d]=useState(i);useEffect((()=>{d(i)}),[i]);return jsxs(FormWrapper,{id:n,label:r,disabled:p.disabled,children:[jsx(TextareaBase,{id:`${n}-base`,"data-testid":s||n,value:c,error:!!a,onChange:e=>{const t=e.target.value;p.maxLength&&t.length>p.maxLength||(d(t),e.target.value=t,l&&l(e))},ref:t,...p}),jsxs(LabelContainer,{children:[a&&jsx(ErrorMessageContainer,{children:jsx(ErrorMessageLabel,{weight:"semibold","data-testid":o||(n?`${n}-error-message`:"error-message"),children:a})}),p.maxLength&&jsx(TextareaCounter,{disabled:p.disabled,value:c,maxLength:p.maxLength,renderCustomCounter:p.renderCustomCounter})]})]})},FormTextarea=React__default.forwardRef(FormTextareaComponent);var TimepickerHelper;!function(e){e.getTimeValues=(e,t)=>{const r={hour:"",minute:"",period:"am"};if(!t)return r;try{if("24hr"===e){const i=convertToPlain$1(t,e);r.minute=StringHelper.padValue(i.minute);const a=parseInt(i.hour);0===Math.floor(a/12)?(r.period="am",r.hour=0===a?"12":StringHelper.padValue(a.toString())):(r.period="pm",r.hour=12===a?a.toString():StringHelper.padValue((a-12).toString()))}else{const i=convertToPlain$1(t,e);r.hour=StringHelper.padValue(i.hour),r.minute=StringHelper.padValue(i.minute),r.period="am"===i.period.toLowerCase()?"am":"pm"}return r}catch(e){return r}},e.updateMinutes=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?StringHelper.padValue("0"):"55";const i=Math.floor(r/5),a=(("add"===t?i+1:r%5==0?i-1:i)%12+12)%12;return StringHelper.padValue((5*a).toString())},e.updateHours=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?StringHelper.padValue("1"):"12";const i="add"===t?r+1:r-1;return i<=12&&i>0?StringHelper.padValue(i.toString()):13===i?StringHelper.padValue("1"):"12"},e.convertTo24HourFormat=e=>{const t=parseInt(e.hour);let r;return r="pm"===e.period?12===t?t.toString():(t+12).toString():12===t?"00":e.hour,`${r}:${e.minute}`},e.convertHourTo12HourFormat=e=>{const t=parseInt(e),r=t%12==0?12..toString():(t%12).toString();return StringHelper.padValue(r)},e.formatValue=(e,t)=>{try{const r=convertToPlain$1(e,t),i=StringHelper.padValue(r.hour);let a=`${i}:${StringHelper.padValue(r.minute)}`;return"12hr"===t?(a+=r.period.toLowerCase(),a):a}catch(e){return""}}}(TimepickerHelper||(TimepickerHelper={}));const isValidHour$1=(e,t)=>{const r=parseInt(e);return"24hr"===t?r>=0&&r<=23:r>=1&&r<=12},isValidMinutes$1=e=>{const t=parseInt(e);return t>=0&&t<=59},isValidTimePeriod$1=e=>"am"===e.toLowerCase()||"pm"===e.toLowerCase(),convertToPlain$1=(e,t)=>{const r=e.split(":"),i=new Error("Invalid format");if("12hr"===t){if(2!==r.length||4!==r[1].length)throw i;const e=r[1].substring(0,2),a=r[1].substring(2);if(!isValidHour$1(r[0],t)||!isValidMinutes$1(e)||!isValidTimePeriod$1(a))throw i;return{hour:r[0],minute:e,period:r[1].substring(2)}}if(2!==r.length)throw i;if(!isValidHour$1(r[0],t)||!isValidMinutes$1(r[1]))throw i;return{hour:r[0],minute:r[1]}},BORDER_RADIUS$1="4px",AnimatedDiv$1=styled(animated.div)`
    position: absolute;
    top: 3.5rem;
    left: 0;
    width: 27rem;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
    background: ${Color.Neutral[8]};
    border-radius: ${BORDER_RADIUS$1};
    overflow: hidden;
    z-index: 1;

    ${MediaQuery.MaxWidth.tablet} {
        width: 100%;
    }
`,Container$6=styled.div`
    position: relative;
    width: 100%;
    padding: 0.5rem 1.25rem 1.5rem 1.25rem;
    display: flex;
    flex-direction: column;
`,InputSection$1=styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${MediaQuery.MaxWidth.mobileS} {
        flex-direction: column;
    }
`,ControlSection$1=styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;

    ${MediaQuery.MaxWidth.mobileS} {
        border-top: 1px solid ${Color.Neutral[5]};
        margin-top: 2rem;
        padding-top: 1.5rem;
    }
`,HourMinuteSection$1=styled.div`
    display: flex;
    align-items: center;
    margin-right: 2rem;

    ${MediaQuery.MaxWidth.mobileM} {
        margin-right: 0;
    }
`,TimePeriodSection$1=styled.div`
    display: flex;

    ${MediaQuery.MaxWidth.tablet} {
        flex-direction: column;
    }

    ${MediaQuery.MaxWidth.mobileS} {
        flex-direction: row;
        width: 100%;
    }
`,InputContainer$2=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`,SwitchButton$1=styled(IconButton)`
    width: 5rem;
    padding: 1rem 0;
    color: ${Color.Primary};
`,DividerLabel$1=styled(Text.Body)`
    margin: 0 0.75rem;

    ${MediaQuery.MaxWidth.tablet} {
        margin: 0 0.5rem;
    }

    ${MediaQuery.MaxWidth.mobileS} {
        margin: 0 0.75rem;
    }
`,TimeInput$1=styled.input`
    ${TextStyleHelper.getTextStyle("Body","regular")}
    border-radius: ${BORDER_RADIUS$1};
    height: 3rem;
    width: 5rem;
    text-align: center;
    border: 1px solid ${Color.Neutral[5]};
    background: ${Color.Neutral[8]};
    color: ${Color.Neutral[1]};

    :focus,
    :active {
        outline: none;
        border: 1px solid ${Color.Accent.Light[1]};
        box-shadow: inset 0 0 5px 1px ${Color.Shadow.Accent};
    }

    :focus::placeholder {
        color: transparent;
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

    ${MediaQuery.MaxWidth.mobileS} {
        width: 6rem;
    }
`,TimePeriodToggle$1=styled(Toggle)`
    min-width: 5rem;

    :not(:last-of-type) {
        margin-right: 0.5rem;
    }

    ${MediaQuery.MaxWidth.tablet} {
        :not(:last-of-type) {
            margin-right: 0;
            margin-bottom: 0.5rem;
        }
    }

    ${MediaQuery.MaxWidth.mobileS} {
        width: 50%;
        :not(:last-of-type) {
            margin-right: 0.5rem;
            margin-bottom: 0;
        }
    }
`,ControlButton$1=styled(Button.Small)`
    width: 7rem;

    :not(:last-of-type) {
        margin-right: 0.5rem;
    }

    ${MediaQuery.MaxWidth.tablet} {
        width: 50%;
    }
`;var EInputButtonName$1,EInputName$1,ETimePeriodToggleName$1;!function(e){e.HOUR_UP="hour-up",e.HOUR_DOWN="hour-down",e.MINUTE_UP="minute-up",e.MINUTE_DOWN="minute-down"}(EInputButtonName$1||(EInputButtonName$1={})),function(e){e.HOUR="hour",e.MINUTE="minute"}(EInputName$1||(EInputName$1={})),function(e){e.AM="am",e.PM="pm"}(ETimePeriodToggleName$1||(ETimePeriodToggleName$1={}));const TimepickerDropdown=({id:e,value:t,show:r,format:i,onChange:a,onCancel:n})=>{const o=TimepickerHelper.getTimeValues(i,t),[s,l]=useState(o.hour),[p,c]=useState(o.minute),[d,h]=useState(o.period),u=useRef(),m=useRef(),f=useResizeDetector();useEffect((()=>{if(r&&u.current&&u.current.focus(),r){const{hour:e,minute:r,period:a}=TimepickerHelper.getTimeValues(i,t);l(e),c(r),h(a)}}),[r,t,i]),useEffect((()=>{const e=u.current,t=m.current;return e&&e.addEventListener("keydown",y),t&&t.addEventListener("keydown",y),()=>{e&&e.removeEventListener("keydown",y),t&&t.removeEventListener("keydown",y)}}),[]);const y=e=>{["Digit0","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Tab","Backspace","Delete","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)||["Backspace","0","1","2","3","4","5","6","7","8","9"].includes(e.key)||e.preventDefault()},g=useCallback((e=>{switch(e.currentTarget.name){case EInputButtonName$1.MINUTE_UP:c(TimepickerHelper.updateMinutes(p,"add"));break;case EInputButtonName$1.MINUTE_DOWN:c(TimepickerHelper.updateMinutes(p,"minus"));break;case EInputButtonName$1.HOUR_UP:l(TimepickerHelper.updateHours(s,"add"));break;case EInputButtonName$1.HOUR_DOWN:l(TimepickerHelper.updateHours(s,"minus"))}}),[s,p]),_=e=>{e.target.select()},x=e=>{const t=e.target.value;switch(e.target.name){case EInputName$1.HOUR:t.length<=2&&l(t);break;case EInputName$1.MINUTE:t.length<=2&&c(t)}},b=e=>{const t=parseInt(e.target.value);if(!isNaN(t))switch(e.target.name){case EInputName$1.HOUR:{const r=t>23||t<0?o.hour:TimepickerHelper.convertHourTo12HourFormat(e.target.value);l(r);break}case EInputName$1.MINUTE:{const r=t>59||t<0?o.minute:e.target.value;c(StringHelper.padValue(r));break}}},v=e=>{switch(e.target.name){case ETimePeriodToggleName$1.AM:h("am");break;case ETimePeriodToggleName$1.PM:h("pm")}},C=t=>e?`${e}-${t}`:t,S=useSpring({height:r?f.height+32:0});return jsx(AnimatedDiv$1,{"data-testid":"animated-dropdown-wrapper",style:S,children:jsxs(Container$6,{ref:f.ref,"data-testid":C("timepicker-dropdown"),children:[jsxs(InputSection$1,{children:[jsxs(HourMinuteSection$1,{children:[jsxs(InputContainer$2,{children:[jsx(SwitchButton$1,{"aria-label":"increase hour",name:EInputButtonName$1.HOUR_UP,type:"button",tabIndex:-1,onClick:g,"data-testid":C("hour-increment-button"),children:jsx(ChevronUpIcon,{})}),jsx(TimeInput$1,{"aria-label":"hour",type:"number",name:EInputName$1.HOUR,id:"hour",maxLength:2,pattern:"[0-9]{2}",ref:u,value:s,onFocus:_,onChange:x,onBlur:b,min:1,max:12,placeholder:"HH","data-testid":C("hour-input")}),jsx(SwitchButton$1,{"aria-label":"decrease hour",name:EInputButtonName$1.HOUR_DOWN,type:"button",tabIndex:-1,onClick:g,"data-testid":C("hour-decrement-button"),children:jsx(ChevronDownIcon,{})})]}),jsx(DividerLabel$1,{children:":"}),jsxs(InputContainer$2,{children:[jsx(SwitchButton$1,{"aria-label":"increase minute",name:EInputButtonName$1.MINUTE_UP,type:"button",tabIndex:-1,onClick:g,"data-testid":C("minute-increment-button"),children:jsx(ChevronUpIcon,{})}),jsx(TimeInput$1,{"aria-label":"minute",type:"number",name:EInputName$1.MINUTE,id:"minute",maxLength:2,pattern:"[0-9]{2}",ref:m,value:p,onChange:x,onBlur:b,onFocus:_,min:0,max:59,placeholder:"MM","data-testid":C("minute-input")}),jsx(SwitchButton$1,{"aria-label":"decrease minute",name:EInputButtonName$1.MINUTE_DOWN,type:"button",tabIndex:-1,onClick:g,"data-testid":C("minute-decrement-button"),children:jsx(ChevronDownIcon,{})})]})]}),jsxs(TimePeriodSection$1,{children:[jsx(TimePeriodToggle$1,{checked:"am"===d,name:ETimePeriodToggleName$1.AM,type:"radio",onChange:v,"data-testid":C("am-toggle"),"aria-label":"AM",children:"AM"}),jsx(TimePeriodToggle$1,{checked:"pm"===d,name:ETimePeriodToggleName$1.PM,type:"radio",onChange:v,"data-testid":C("pm-toggle"),"aria-label":"PM",children:"PM"})]})]}),jsxs(ControlSection$1,{children:[jsx(ControlButton$1,{"aria-label":"close selector",type:"button",styleType:"secondary",onClick:n,"data-testid":C("cancel-button"),children:"Cancel"}),jsx(ControlButton$1,{"aria-label":"confirm selection",type:"button",onClick:()=>{let e;e="24hr"===i?TimepickerHelper.convertTo24HourFormat({hour:s,minute:p,period:d}):`${s}:${p}${d}`,a(e)},disabled:""===s||""===p,"data-testid":C("confirm-button"),children:"Confirm"})]})]})})},Wrapper$b=styled.div`
    position: relative;
`,InputSelectorElement=styled.input`
    ${TextStyleHelper.getTextStyle("Body","regular")}
    border: 1px solid ${Color.Neutral[5]};
    border-radius: 4px;
    display: block;
    padding: 0.2rem 1rem 0.3rem 1rem; // Somehow the input text appears lower
    height: 3rem;
    width: 100%;
    background: ${Color.Neutral[8]};
    color: ${Color.Neutral[1]};

    :focus,
    :active {
        outline: none;
    }

    ${e=>e.disabled?css`
                background: ${Color.Neutral[6](e)};
                cursor: not-allowed;
            `:e.error&&!e.focused?css`
                border: 1px solid ${Color.Validation.Red.Border(e)};
            `:e.error&&e.focused?css`
                border: 1px solid ${Color.Validation.Red.Border(e)};
                box-shadow: ${DesignToken.InputErrorBoxShadow};
            `:e.focused?css`
                border: 1px solid ${Color.Accent.Light[1]};
                box-shadow: ${DesignToken.InputBoxShadow};
            `:void 0}
`,Timepicker=({id:e,disabled:t=!1,error:r,value:i,defaultValue:a,placeholder:n,format:o="24hr",onChange:s,onBlur:l,onSelectionCancel:p,...c})=>{const[d,h]=useState(!1),u=useRef();useEffect((()=>(document.addEventListener("mousedown",f),document.addEventListener("keyup",y),()=>{document.removeEventListener("mousedown",f),document.removeEventListener("keyup",y)})),[d]);const m=useCallback((()=>{t||d||h(!0)}),[d]),f=e=>{t||g(e)},y=e=>{if("Tab"===e.code)g(e)},g=e=>{u&&!u.current.contains(e.target)&&d&&(h(!1),l&&l())},_=useCallback((()=>"12hr"===o?"HH:MMam":"HH:MM"),[o,n]);return jsxs(Wrapper$b,{ref:u,id:e,...c,children:[jsx(InputSelectorElement,{onFocus:m,focused:d,readOnly:!0,placeholder:n||_(),value:TimepickerHelper.formatValue(i,o),defaultValue:a,disabled:t,error:r,"data-testid":e?`${e}-timepicker-selector`:"timepicker-selector"}),jsx(TimepickerDropdown,{id:e,show:d,value:i||a,format:o,onCancel:()=>{h(!1),p&&p()},onChange:e=>{h(!1),s&&s(e)}})]})},FormTimepicker=({label:e,errorMessage:t,id:r="form-timepicker","data-error-testid":i,"data-testid":a,...n})=>jsx(FormWrapper,{id:r,label:e,errorMessage:t,disabled:n.disabled,"data-error-testid":i,children:jsx(Timepicker,{id:`${r}-base`,"data-testid":a||r,error:!!t,...n})});var TimeRangePickerHelper;!function(e){e.getTimeValues=(e,t)=>{const r={hour:"",minute:"",period:"am"};if(!t)return r;try{const i=convertToPlain(t,e);return r.hour=StringHelper.padValue(i.hour),r.minute=StringHelper.padValue(i.minute),r.period="am"===i.period.toLowerCase()?"am":"pm",r}catch(e){return r}},e.updateMinutes=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?StringHelper.padValue("0"):"55";const i=Math.floor(r/5),a=(("add"===t?i+1:r%5==0?i-1:i)%12+12)%12;return StringHelper.padValue((5*a).toString())},e.updateHours=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?StringHelper.padValue("1"):"12";const i="add"===t?r+1:r-1;return i<=12&&i>0?StringHelper.padValue(i.toString()):13===i?StringHelper.padValue("1"):"12"},e.convertTo24HourFormat=e=>{const t=parseInt(e.hour);let r;return r="pm"===e.period?12===t?t.toString():(t+12).toString():12===t?"00":e.hour,`${r}:${e.minute}`},e.convertHourTo12HourFormat=e=>{const t=parseInt(e),r=t%12==0?12..toString():(t%12).toString();return StringHelper.padValue(r)},e.formatValue=(e,t)=>{try{const r=convertToPlain(e,t),i=StringHelper.padValue(r.hour);let a=`${i}:${StringHelper.padValue(r.minute)}`;return"12hr"===t?(a+=r.period.toLowerCase(),a):a}catch(e){return""}}}(TimeRangePickerHelper||(TimeRangePickerHelper={}));const isValidHour=(e,t)=>{const r=parseInt(e);return r>=1&&r<=12},isValidMinutes=e=>{const t=parseInt(e);return t>=0&&t<=59},isValidTimePeriod=e=>"am"===e.toLowerCase()||"pm"===e.toLowerCase(),convertToPlain=(e,t)=>{const r=e.split(":"),i=new Error("Invalid format");if("12hr"===t){if(2!==r.length||4!==r[1].length)throw i;const e=r[1].substring(0,2),t=r[1].substring(2);if(!isValidHour(r[0])||!isValidMinutes(e)||!isValidTimePeriod(t))throw i;return{hour:r[0],minute:e,period:r[1].substring(2)}}if(2!==r.length)throw i;if(!isValidHour(r[0])||!isValidMinutes(r[1]))throw i;return{hour:r[0],minute:r[1]}},BORDER_RADIUS="4px",AnimatedDiv=styled(animated.div)`
    position: absolute;
    top: 3.5rem;
    left: 0;
    width: 27rem;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
    background: ${Color.Neutral[8]};
    border-radius: ${BORDER_RADIUS};
    z-index: 1;
    overflow: hidden;

    ${MediaQuery.MaxWidth.tablet} {
        width: 100%;
    }

    ${MediaQuery.MaxWidth.mobileL} {
        width: 20rem;
    }

    ${MediaQuery.MaxWidth.mobileM} {
        width: 19rem;
    }

    ${MediaQuery.MaxWidth.mobileS} {
        width: 15rem;
    }
`,Container$5=styled.div`
    position: relative;
    width: 100%;
    padding: 0.5rem 1.25rem 1.5rem 1.25rem;
    display: flex;
    flex-direction: column;
`,InputSection=styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${MediaQuery.MaxWidth.mobileS} {
        flex-direction: column;
    }
`,ControlSection=styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;

    ${MediaQuery.MaxWidth.mobileS} {
        flex-direction: column;
        margin-top: 2rem;
        padding-top: 1.5rem;
    }
`,HourMinuteSection=styled.div`
    display: flex;
    align-items: center;
    margin-right: 2rem;

    ${MediaQuery.MaxWidth.mobileM} {
        margin-right: 0;
    }
`,TimePeriodSection=styled.div`
    display: flex;

    ${MediaQuery.MaxWidth.tablet} {
        flex-direction: column;
    }

    ${MediaQuery.MaxWidth.mobileS} {
        flex-direction: row;
        width: 100%;
    }
`,InputContainer$1=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`,SwitchButton=styled(IconButton)`
    width: 5rem;
    padding: 1rem 0;
    color: ${Color.Primary};
`,DividerLabel=styled(Text.Body)`
    margin: 0 0.75rem;

    ${MediaQuery.MaxWidth.tablet} {
        margin: 0 0.5rem;
    }

    ${MediaQuery.MaxWidth.mobileS} {
        margin: 0 0.75rem;
    }
`,TimeInput=styled.input`
    ${TextStyleHelper.getTextStyle("Body","regular")}
    border-radius: ${BORDER_RADIUS};
    width: 80px;
    height: 48px;
    text-align: center;
    border: 1px solid ${Color.Neutral[5]};
    background: ${Color.Neutral[8]};
    color: ${Color.Neutral[1]};

    :focus,
    :active {
        outline: none;
        border: 1px solid ${Color.Accent.Light[1]};
        box-shadow: inset 0 0 5px 1px rgba(87, 169, 255, 0.5);
    }

    :focus::placeholder {
        color: transparent;
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

    ${MediaQuery.MaxWidth.mobileS} {
        width: 6rem;
    }
`,TimePeriodToggle=styled(Toggle)`
    min-width: 5rem;
    :not(:last-of-type) {
        margin-right: 0.5rem;
    }

    ${MediaQuery.MaxWidth.tablet} {
        :not(:last-of-type) {
            margin-right: 0;
            margin-bottom: 0.5rem;
        }
    }

    ${MediaQuery.MaxWidth.mobileS} {
        width: 50%;
        :not(:last-of-type) {
            margin-right: 0.5rem;
            margin-bottom: 0;
        }
    }
`,ControlButton=styled(Button.Small)`
    width: 7rem;

    :not(:last-of-type) {
        margin-right: 0.5rem;
    }

    ${MediaQuery.MaxWidth.tablet} {
        width: 50%;
    }
    ${MediaQuery.MaxWidth.mobileS} {
        width: 100%;
        margin-bottom: 1rem;
    }
`;var EInputButtonName,EInputName,ETimePeriodToggleName;!function(e){e.HOUR_UP="hour-up",e.HOUR_DOWN="hour-down",e.MINUTE_UP="minute-up",e.MINUTE_DOWN="minute-down"}(EInputButtonName||(EInputButtonName={})),function(e){e.HOUR="hour",e.MINUTE="minute"}(EInputName||(EInputName={})),function(e){e.AM="am",e.PM="pm"}(ETimePeriodToggleName||(ETimePeriodToggleName={}));const TimeRangePickerDropdown=({id:e,value:t,show:r,format:i,onChange:a,onCancel:n})=>{const o=TimeRangePickerHelper.getTimeValues(i,t),[s,l]=useState(o.hour),[p,c]=useState(o.minute),[d,h]=useState(o.period),u=useRef(),m=useRef(),f=useResizeDetector();useEffect((()=>{if(r&&u.current&&u.current.focus(),r){const{hour:e,minute:r,period:a}=TimeRangePickerHelper.getTimeValues(i,t);l(e),c(r),h(a)}}),[r,t,i]),useEffect((()=>{const e=u.current,t=m.current;return e&&e.addEventListener("keydown",y),t&&t.addEventListener("keydown",y),()=>{e&&e.removeEventListener("keydown",y),t&&t.removeEventListener("keydown",y)}}),[]);const y=e=>{["Digit0","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Tab","Backspace","Delete","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)||["Backspace","0","1","2","3","4","5","6","7","8","9"].includes(e.key)||e.preventDefault()},g=useCallback((e=>{switch(e.currentTarget.name){case EInputButtonName.MINUTE_UP:c(TimeRangePickerHelper.updateMinutes(p,"add"));break;case EInputButtonName.MINUTE_DOWN:c(TimeRangePickerHelper.updateMinutes(p,"minus"));break;case EInputButtonName.HOUR_UP:l(TimeRangePickerHelper.updateHours(s,"add"));break;case EInputButtonName.HOUR_DOWN:l(TimeRangePickerHelper.updateHours(s,"minus"))}}),[s,p]),_=e=>{e.target.select()},x=e=>{const t=e.target.value;switch(e.target.name){case EInputName.HOUR:t.length<=2&&l(t);break;case EInputName.MINUTE:t.length<=2&&c(t)}},b=e=>{const t=parseInt(e.target.value);if(!isNaN(t))switch(e.target.name){case EInputName.HOUR:{const r=t>23||t<0?o.hour:TimeRangePickerHelper.convertHourTo12HourFormat(e.target.value);l(r);break}case EInputName.MINUTE:{const r=t>59||t<0?o.minute:e.target.value;c(StringHelper.padValue(r));break}}},v=e=>{switch(e.target.name){case ETimePeriodToggleName.AM:h("am");break;case ETimePeriodToggleName.PM:h("pm")}},C=t=>e?`${e}-${t}`:t,S=useSpring({height:r?f.height+32:0});return jsx(AnimatedDiv,{"data-testid":"animated-dropdown-wrapper",style:S,children:jsxs(Container$5,{ref:f.ref,"data-testid":C("timepicker-dropdown"),children:[jsxs(InputSection,{children:[jsxs(HourMinuteSection,{children:[jsxs(InputContainer$1,{children:[jsx(SwitchButton,{"aria-label":"increase hour",name:EInputButtonName.HOUR_UP,type:"button",tabIndex:-1,onClick:g,"data-testid":C("hour-increment-button"),children:jsx(ChevronUpIcon,{})}),jsx(TimeInput,{"aria-label":"hour",type:"number",tabIndex:r?0:-1,name:EInputName.HOUR,id:"hour",maxLength:2,pattern:"[0-9]{2}",ref:u,value:s,onFocus:_,onChange:x,onBlur:b,min:1,max:12,placeholder:"HH","data-testid":C("hour-input")}),jsx(SwitchButton,{"aria-label":"decrease hour",name:EInputButtonName.HOUR_DOWN,type:"button",tabIndex:-1,onClick:g,"data-testid":C("hour-decrement-button"),children:jsx(ChevronDownIcon,{})})]}),jsx(DividerLabel,{children:":"}),jsxs(InputContainer$1,{children:[jsx(SwitchButton,{"aria-label":"increase minute",name:EInputButtonName.MINUTE_UP,type:"button",tabIndex:-1,onClick:g,"data-testid":C("minute-increment-button"),children:jsx(ChevronUpIcon,{})}),jsx(TimeInput,{"aria-label":"minute",type:"number",tabIndex:r?0:-1,name:EInputName.MINUTE,id:"minute",maxLength:2,pattern:"[0-9]{2}",ref:m,value:p,onChange:x,onBlur:b,onFocus:_,min:0,max:59,placeholder:"MM","data-testid":C("minute-input")}),jsx(SwitchButton,{"aria-label":"decrease minute",name:EInputButtonName.MINUTE_DOWN,type:"button",tabIndex:-1,onClick:g,"data-testid":C("minute-decrement-button"),children:jsx(ChevronDownIcon,{})})]})]}),(()=>{if(r)return jsxs(TimePeriodSection,{children:[jsx(TimePeriodToggle,{checked:"am"===d,name:ETimePeriodToggleName.AM,type:"radio",onChange:v,"data-testid":C("am-toggle"),"aria-label":"AM",children:"AM"}),jsx(TimePeriodToggle,{checked:"pm"===d,name:ETimePeriodToggleName.PM,type:"radio",onChange:v,"data-testid":C("pm-toggle"),"aria-label":"PM",children:"PM"})]})})()]}),jsxs(ControlSection,{children:[jsx(ControlButton,{tabIndex:r?0:-1,"aria-label":"close selector",type:"button",styleType:"secondary",onClick:n,"data-testid":C("cancel-button"),children:"Cancel"}),jsx(ControlButton,{tabIndex:r?0:-1,"aria-label":"confirm selection",type:"button",onClick:()=>{a(`${s}:${p}${d}`)},disabled:""===s||""===p,"data-testid":C("confirm-button"),children:"Done"})]})]})})},Wrapper$a=styled.div`
    position: relative;
`,TimeContainer=styled.div`
    display: flex;
    align-items: center;
    padding: 11px 16px;
    gap: 8px;
    width: 100%;
    height: 48px;
    border-radius: 4px;
    border: 1px solid ${Color.Neutral[5]};
    :focus,
    :focus-within {
        border: 1px solid ${Color.Accent.Light[1]};
        box-shadow: ${DesignToken.InputBoxShadow};
    }
    ${e=>e.$readOnly?css`
                border: 0;
                padding: 0;
                :focus,
                :focus-within {
                    border: 0px;
                    box-shadow: none;
                }
            `:e.$disabled?css`
                background: ${Color.Neutral[6](e)} !important;
                :hover {
                    cursor: not-allowed;
                }
                :focus-within {
                    border: 0px;
                    box-shadow: none;
                    //    border: 1px solid ${Color.Neutral[5](e)};
                }
            `:e.$error?css`
                border: 1px solid ${Color.Validation.Red.Border(e)};
                :focus-within {
                    border: 1px solid ${Color.Validation.Red.Border(e)};
                    box-shadow: ${DesignToken.InputErrorBoxShadow};
                }
            `:void 0}

    ${MediaQuery.MaxWidth.mobileS} {
        width: 235px;
    }
`,ArrowRangeContainer=styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    padding: 0;
`,ArrowRight=styled(ArrowRightIcon)`
    color: ${Color.Neutral[3]};
    cursor: pointer;
    width: 1.125rem;
    height: 1rem;
`,BottomHighlightStartTime=styled.div`
    position: absolute;
    bottom: -0.1rem;
    height: 2px;
    left: 1rem;
    right: 23rem;
    background-color: ${Color.Primary};

    ${MediaQuery.MaxWidth.tablet} {
        width: 40%;
    }

    ${MediaQuery.MaxWidth.mobileL} {
        /* width: 335px; */
        width: 40%;
    }

    ${MediaQuery.MaxWidth.mobileM} {
        width: 40%;
    }

    ${MediaQuery.MaxWidth.mobileS} {
        width: 40%;
    }
`,BottomHighlightEndTime=styled.div`
    position: absolute;
    bottom: -0.1rem;
    height: 2px;
    left: 16rem;
    right: 7rem;
    background-color: ${Color.Primary};

    ${MediaQuery.MaxWidth.tablet} {
        width: 8rem;
        left: 12rem;
    }

    ${MediaQuery.MaxWidth.mobileL} {
        /* width: 335px; */
        width: 8rem;
        left: 10rem;
    }

    ${MediaQuery.MaxWidth.mobileM} {
        width: 6rem;
        left: 10rem;
    }

    ${MediaQuery.MaxWidth.mobileS} {
        width: 5rem;
        left: 8rem;
    }
`,InputSelectorStartTimeElement=styled.input`
    ${TextStyleHelper.getTextStyle("Body","regular")}

    display: block;
    width: 100%;
    height: 26px;
    background: ${BookingSGColorSet.Neutral[8]};
    color: ${BookingSGColorSet.Neutral[1]};
    border: 0px;
    :focus,
    :active {
        outline: none;
    }
    :disabled {
        background: ${Color.Neutral[6]} !important;
        :hover {
            cursor: not-allowed;
        }
    }
    ${e=>e.$readOnly?css`
                border: none;
                cursor: none;
            `:e.$disabled?css`
                background: ${Color.Neutral[6](e)} !important;
                :hover {
                    cursor: not-allowed;
                }
            `:void 0}
`,InputSelectorEndTimeElement=styled.input`
    ${TextStyleHelper.getTextStyle("Body","regular")}

    display: block;
    width: 100%;
    height: 26px;
    margin-left: 1rem;
    background: ${BookingSGColorSet.Neutral[8]};
    color: ${BookingSGColorSet.Neutral[1]};
    border: 0px;
    :focus,
    :active {
        outline: none;
    }
    :disabled {
        background: ${Color.Neutral[6]} !important;
        :hover {
            cursor: not-allowed;
        }
    }

    ${e=>e.$readOnly?css`
                border: none;
                cursor: none;
            `:e.$disabled?css`
                background: ${Color.Neutral[6](e)} !important;
                :hover {
                    cursor: not-allowed;
                }
            `:void 0}
`,TimeRangePicker=({id:e,disabled:t=!1,error:r,value:i,format:a="12hr",readOnly:n,onChange:o,onBlur:s,...l})=>{const[p,c]=useState(!1),[d,h]=useState(!1),[u,m]=useState(""),[f,y]=useState(""),g=useRef();useEffect((()=>{i&&(m(i.startTime),y(i.endTime))}),[]),useEffect((()=>(document.addEventListener("mousedown",_),document.addEventListener("keyup",x),()=>{document.removeEventListener("mousedown",_),document.removeEventListener("keyup",x)})),[d]);const _=e=>{t||C(e)},x=e=>{if("Tab"===e.code)C(e)},b=()=>{h(!1),c(!1)},v=()=>{c(!1),h(!1),s&&s()},C=e=>{g&&!g.current.contains(e.target)&&(d||v(),p||v())};return jsx(Wrapper$a,{ref:g,id:e,...l,children:jsxs(TimeContainer,{$disabled:t,$error:r,$readOnly:n,children:[jsx(InputSelectorStartTimeElement,{onFocus:()=>{t||n||p||(h(!1),c(!0))},$focused:p,readOnly:!0,placeholder:"From",value:TimeRangePickerHelper.formatValue(u,a),disabled:t,$error:r,"data-testid":l["data-testid"]?`${l["data-testid"]}-timepicker-selector`:"timepicker-selector"}),p&&jsx(BottomHighlightStartTime,{}),jsx(TimeRangePickerDropdown,{id:e,show:p,value:u,format:a,onCancel:b,onChange:e=>{c(!1),h(!0),m(e);o&&o({startTime:e,endTime:f})}}),jsx(ArrowRangeContainer,{children:jsx(ArrowRight,{})}),d&&jsx(BottomHighlightEndTime,{}),jsx(InputSelectorEndTimeElement,{onFocus:()=>{t||n||d||(c(!1),h(!0))},$focused:d,readOnly:!0,placeholder:"To",value:TimeRangePickerHelper.formatValue(f,a),disabled:t,$error:r,"data-testid":l["data-testid"]?`${l["data-testid"]}-timepicker-selector`:"timepicker-selector"}),jsx(TimeRangePickerDropdown,{id:e,show:d,value:f,format:a,onCancel:b,onChange:e=>{h(!1),y(e),""==u&&c(!0);o&&o({startTime:u,endTime:e})}})]})})},FormTimeRangePicker=({label:e,errorMessage:t,id:r="form-timepicker","data-error-testid":i,"data-testid":a,...n})=>jsx(FormWrapper,{id:r,label:e,errorMessage:t,disabled:n.disabled,"data-error-testid":i,children:jsx(TimeRangePicker,{id:`${r}-base`,"data-testid":a||r,error:!!t,...n})}),HashContainer=styled(AddOnContainer)`
    margin-right: 0.25rem;
`,FloorInput=styled(Input$1)`
    // overwrite default styles
    background: transparent;
    border: none;
    /* border: 1px dotted red; */
    padding: 0;
    width: 2.5rem;

    :focus-within {
        outline: none;
        border: none;
        box-shadow: none;
    }

    input {
        text-align: center;
        // Chrome, Safari, Edge, Opera
        ::-webkit-outer-spin-button,
        ::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }

        // Firefox
        -moz-appearance: textfield;
    }
`,UnitInput=styled(FloorInput)`
    // Cheat to balance the placeholder look while ensuring enough width
    margin-left: 0.5rem;
    width: 6rem;

    input {
        text-align: left;
    }
`,UnitNumberDivider=styled(Text.Body)`
    margin: 0 0.25rem;
    ${e=>{if(e.$inactive)return css`
                color: ${Color.Neutral[3]};
            `}}
`,ReadOnlyContainer=styled.div`
    display: flex;
`,ReadOnlyLabel=styled(Text.Body)`
    ${e=>{if(e.$inactive)return css`
                color: ${Color.Neutral[3]};
            `}}
`,UnitNumberInput=({disabled:e,error:t,value:r,onChange:i,onBlur:a,onChangeRaw:n,onBlurRaw:o,readOnly:s,placeholder:l="00-8888",...p})=>{const[c,d]=useState(""),[h,u]=useState(""),[m,f]=useState("none"),y=useRef(null),g=useRef(null),_=useRef(null),x=useRef(c),b=useRef(h),v=useRef(m),C=e=>{x.current=e,d(e)},S=e=>{b.current=e,u(e)},$=e=>{v.current=e,f(e)};useEffect((()=>(document.addEventListener("mousedown",w),y.current&&y.current.addEventListener("keydown",T),()=>{document.removeEventListener("mousedown",w),y.current&&y.current.removeEventListener("keydown",T)})),[m]),useEffect((()=>{"floor"===m&&3===c.length&&_.current&&_.current.focus()}),[c]),useEffect((()=>{M(r)}),[r]);const w=t=>{e||s||y&&y.current.contains(t.target)||"none"!==v.current&&($("none"),F())},T=e=>{"unit"===e.target.name&&"Tab"===e.code&&($("none"),F())},k=e=>{$(e.target.name),e.target.select()},E=e=>{const t=e.target.name,r=e.target.value;"floor"===t?C(I(r)):S(I(r))},A=e=>{const t=e.target.name,r=e.target.value.toLocaleUpperCase().replace(/[^0-9A-Za-z]/,"");"floor"===t?(C(r),D(r,t)):(S(r),D(r,t))},P=e=>{"Backspace"!==e.code&&"Backspace"!==e.key||"unit"===m&&0===h.length&&g.current.focus()},I=e=>/^[0-9]$/.test(e)?StringHelper.padValue(e,!0):e.toLocaleUpperCase(),M=e=>{if(e!==INVALID_VALUE)if(void 0===e||0===e.length)C(""),S("");else{const t=e.split("-");if(2===t.length){const e=t[0],r=t[1];C("floor"===m?e:I(e)),S("unit"===m?r:I(r))}}},D=(e,t)=>{if(!i&&!n)return;const r={floor:x.current,unit:b.current};if(r[t]=e,i){const e=R(r);i(e)}n&&n([r.floor,r.unit])},F=()=>{if(!a&&!o)return;const e={floor:I(x.current),unit:I(b.current)};if(a){const t=R(e);a(t)}o&&o([e.floor,e.unit])},R=e=>{const t=[e.floor,e.unit];return e.floor.length>0&&e.unit.length>0?t.join("-"):t.every((e=>""===e))?"":INVALID_VALUE},j=e=>e.split("-");return jsxs(InputWrapper,{ref:y,onClick:()=>{"none"===m&&g.current&&g.current.focus()},disabled:e,$error:t,$readOnly:s,"data-testid":p["data-testid"],children:[jsx(HashContainer,{"data-testid":"addon",disabled:e,$readOnly:s,children:"#"}),s&&r?(()=>{const e=r.split("-");return jsxs(ReadOnlyContainer,{children:[jsx(ReadOnlyLabel,{children:e[0]}),jsx(UnitNumberDivider,{children:"-"}),jsx(ReadOnlyLabel,{children:e[1]})]})})():jsxs(Fragment,{children:[jsx(FloorInput,{name:"floor",maxLength:3,value:c,ref:g,onFocus:k,onBlur:E,onChange:A,disabled:e,readOnly:s,type:"text",pattern:"[0-9A-Z]{2,3}","data-testid":"floor-input","aria-label":"floor-input",placeholder:"floor"!==m||s?j(l)[0]:""}),jsx(UnitNumberDivider,{$inactive:0===c.length,children:"-"}),jsx(UnitInput,{name:"unit",maxLength:5,value:h,ref:_,onFocus:k,onBlur:E,onChange:A,onKeyDown:P,disabled:e,readOnly:s,type:"text",pattern:"[0-9A-Z]{2,5}","data-testid":"unit-input","aria-label":"unit-input",placeholder:"unit"!==m||s?j(l)[1]:""})]})]})},INVALID_VALUE="Invalid unit number",FormUnitNumberInput=({label:e,errorMessage:t,id:r="form-unit-number-input","data-error-testid":i,"data-testid":a,...n})=>jsx(FormWrapper,{id:r,label:e,errorMessage:t,"data-error-testid":i,disabled:n.disabled,children:jsx(UnitNumberInput,{id:`${r}-base`,"data-testid":a||r,error:!!t,...n})});function arrayReduce$2(e,t,r,i){var a=-1,n=null==e?0:e.length;for(i&&n&&(r=e[++a]);++a<n;)r=t(r,e[a],a,e);return r}var _arrayReduce=arrayReduce$2;function createBaseFor$1(e){return function(t,r,i){for(var a=-1,n=Object(t),o=i(t),s=o.length;s--;){var l=o[e?s:++a];if(!1===r(n[l],l,n))break}return t}}var _createBaseFor=createBaseFor$1,createBaseFor=_createBaseFor,baseFor$1=createBaseFor(),_baseFor=baseFor$1,baseFor=_baseFor,keys=keys_1;function baseForOwn$1(e,t){return e&&baseFor(e,t,keys)}var _baseForOwn=baseForOwn$1,isArrayLike=isArrayLike_1;function createBaseEach$1(e,t){return function(r,i){if(null==r)return r;if(!isArrayLike(r))return e(r,i);for(var a=r.length,n=t?a:-1,o=Object(r);(t?n--:++n<a)&&!1!==i(o[n],n,o););return r}}var _createBaseEach=createBaseEach$1,baseForOwn=_baseForOwn,createBaseEach=_createBaseEach,baseEach$1=createBaseEach(baseForOwn),_baseEach=baseEach$1;function baseReduce$1(e,t,r,i,a){return a(e,(function(e,a,n){r=i?(i=!1,e):t(r,e,a,n)})),r}var _baseReduce=baseReduce$1,arrayReduce$1=_arrayReduce,baseEach=_baseEach,baseIteratee=_baseIteratee,baseReduce=_baseReduce,isArray=isArray_1;function reduce(e,t,r){var i=isArray(e)?arrayReduce$1:baseReduce,a=arguments.length<3;return i(e,baseIteratee(t),r,a,baseEach)}var reduce_1=reduce;const CountryData=[["Afghanistan",["asia"],"af","93"],["Albania",["europe"],"al","355"],["Algeria",["africa","north-africa"],"dz","213"],["Andorra",["europe"],"ad","376"],["Angola",["africa"],"ao","244"],["Antigua and Barbuda",["america","carribean"],"ag","1268"],["Argentina",["america","south-america"],"ar","54","(..) ........"],["Armenia",["asia","ex-ussr"],"am","374",".. ......"],["Aruba",["america","carribean"],"aw","297"],["Australia",["oceania"],"au","61","(..) .... ...."],["Austria",["europe","eu-union"],"at","43"],["Azerbaijan",["asia","ex-ussr"],"az","994","(..) ... .. .."],["Bahamas",["america","carribean"],"bs","1242"],["Bahrain",["middle-east"],"bh","973"],["Bangladesh",["asia"],"bd","880"],["Barbados",["america","carribean"],"bb","1246"],["Belarus",["europe","ex-ussr"],"by","375","(..) ... .. .."],["Belgium",["europe","eu-union"],"be","32","... .. .. .."],["Belize",["america","central-america"],"bz","501"],["Benin",["africa"],"bj","229"],["Bhutan",["asia"],"bt","975"],["Bolivia",["america","south-america"],"bo","591"],["Bosnia and Herzegovina",["europe","ex-yugos"],"ba","387"],["Botswana",["africa"],"bw","267"],["Brazil",["america","south-america"],"br","55","(..) ........."],["British Indian Ocean Territory",["asia"],"io","246"],["Brunei",["asia"],"bn","673"],["Bulgaria",["europe","eu-union"],"bg","359"],["Burkina Faso",["africa"],"bf","226"],["Burundi",["africa"],"bi","257"],["Cambodia",["asia"],"kh","855"],["Cameroon",["africa"],"cm","237"],["Canada",["america","north-america"],"ca","1","(...) ... ...."],["Cape Verde",["africa"],"cv","238"],["Caribbean Netherlands",["america","carribean"],"bq","599",""],["Central African Republic",["africa"],"cf","236"],["Chad",["africa"],"td","235"],["Chile",["america","south-america"],"cl","56"],["China",["asia"],"cn","86",".. ........."],["Colombia",["america","south-america"],"co","57","... ... ...."],["Comoros",["africa"],"km","269"],["Congo",["africa"],"cd","243"],["Congo",["africa"],"cg","242"],["Costa Rica",["america","central-america"],"cr","506",".... ...."],["Côte d’Ivoire",["africa"],"ci","225",".. .. .. .."],["Croatia",["europe","eu-union","ex-yugos"],"hr","385"],["Cuba",["america","carribean"],"cu","53"],["Curaçao",["america","carribean"],"cw","599",""],["Cyprus",["europe","eu-union"],"cy","357",".. ......"],["Czech Republic",["europe","eu-union"],"cz","420","... ... ..."],["Denmark",["europe","eu-union","baltic"],"dk","45",".. .. .. .."],["Djibouti",["africa"],"dj","253"],["Dominica",["america","carribean"],"dm","1767"],["Dominican Republic",["america","carribean"],"do","1",""],["Ecuador",["america","south-america"],"ec","593"],["Egypt",["africa","north-africa"],"eg","20"],["El Salvador",["america","central-america"],"sv","503",".... ...."],["Equatorial Guinea",["africa"],"gq","240"],["Eritrea",["africa"],"er","291"],["Estonia",["europe","eu-union","ex-ussr","baltic"],"ee","372",".... ......"],["Ethiopia",["africa"],"et","251"],["Fiji",["oceania"],"fj","679"],["Finland",["europe","eu-union","baltic"],"fi","358",".. ... .. .."],["France",["europe","eu-union"],"fr","33",". .. .. .. .."],["French Guiana",["america","south-america"],"gf","594"],["French Polynesia",["oceania"],"pf","689"],["Gabon",["africa"],"ga","241"],["Gambia",["africa"],"gm","220"],["Georgia",["asia","ex-ussr"],"ge","995"],["Germany",["europe","eu-union","baltic"],"de","49",".... ........"],["Ghana",["africa"],"gh","233"],["Greece",["europe","eu-union"],"gr","30"],["Grenada",["america","carribean"],"gd","1473"],["Guadeloupe",["america","carribean"],"gp","590","",0],["Guam",["oceania"],"gu","1671"],["Guatemala",["america","central-america"],"gt","502",".... ...."],["Guinea",["africa"],"gn","224"],["Guinea-Bissau",["africa"],"gw","245"],["Guyana",["america","south-america"],"gy","592"],["Haiti",["america","carribean"],"ht","509",".... ...."],["Honduras",["america","central-america"],"hn","504"],["Hong Kong",["asia"],"hk","852",".... ...."],["Hungary",["europe","eu-union"],"hu","36"],["Iceland",["europe"],"is","354","... ...."],["India",["asia"],"in","91","..... ....."],["Indonesia",["asia"],"id","62"],["Iran",["middle-east"],"ir","98","... ... ...."],["Iraq",["middle-east"],"iq","964"],["Ireland",["europe","eu-union"],"ie","353",".. ......."],["Israel",["middle-east"],"il","972","... ... ...."],["Italy",["europe","eu-union"],"it","39","... ......."],["Jamaica",["america","carribean"],"jm","1876"],["Japan",["asia"],"jp","81",".. .... ...."],["Jordan",["middle-east"],"jo","962"],["Kazakhstan",["asia","ex-ussr"],"kz","7","... ... .. .."],["Kenya",["africa"],"ke","254"],["Kiribati",["oceania"],"ki","686"],["Kosovo",["europe","ex-yugos"],"xk","383"],["Kuwait",["middle-east"],"kw","965"],["Kyrgyzstan",["asia","ex-ussr"],"kg","996","... ... ..."],["Laos",["asia"],"la","856"],["Latvia",["europe","eu-union","ex-ussr","baltic"],"lv","371",".. ... ..."],["Lebanon",["middle-east"],"lb","961"],["Lesotho",["africa"],"ls","266"],["Liberia",["africa"],"lr","231"],["Libya",["africa","north-africa"],"ly","218"],["Liechtenstein",["europe"],"li","423"],["Lithuania",["europe","eu-union","ex-ussr","baltic"],"lt","370"],["Luxembourg",["europe","eu-union"],"lu","352"],["Macau",["asia"],"mo","853"],["Macedonia",["europe","ex-yugos"],"mk","389"],["Madagascar",["africa"],"mg","261"],["Malawi",["africa"],"mw","265"],["Malaysia",["asia"],"my","60",".. .... ...."],["Maldives",["asia"],"mv","960"],["Mali",["africa"],"ml","223"],["Malta",["europe","eu-union"],"mt","356"],["Marshall Islands",["oceania"],"mh","692"],["Martinique",["america","carribean"],"mq","596"],["Mauritania",["africa"],"mr","222"],["Mauritius",["africa"],"mu","230"],["Mexico",["america","central-america"],"mx","52","... ... ...."],["Micronesia",["oceania"],"fm","691"],["Moldova",["europe"],"md","373","(..) .. .. .."],["Monaco",["europe"],"mc","377"],["Mongolia",["asia"],"mn","976"],["Montenegro",["europe","ex-yugos"],"me","382"],["Morocco",["africa","north-africa"],"ma","212"],["Mozambique",["africa"],"mz","258"],["Myanmar",["asia"],"mm","95"],["Namibia",["africa"],"na","264"],["Nauru",["africa"],"nr","674"],["Nepal",["asia"],"np","977"],["Netherlands",["europe","eu-union"],"nl","31",".. ........"],["New Caledonia",["oceania"],"nc","687"],["New Zealand",["oceania"],"nz","64","... ... ...."],["Nicaragua",["america","central-america"],"ni","505"],["Niger",["africa"],"ne","227"],["Nigeria",["africa"],"ng","234"],["North Korea",["asia"],"kp","850"],["Norway",["europe","baltic"],"no","47","... .. ..."],["Oman",["middle-east"],"om","968"],["Pakistan",["asia"],"pk","92","... ......."],["Palau",["oceania"],"pw","680"],["Palestine",["middle-east"],"ps","970"],["Panama",["america","central-america"],"pa","507"],["Papua New Guinea",["oceania"],"pg","675"],["Paraguay",["america","south-america"],"py","595"],["Peru",["america","south-america"],"pe","51"],["Philippines",["asia"],"ph","63",".... ......."],["Poland",["europe","eu-union","baltic"],"pl","48","... ... ..."],["Portugal",["europe","eu-union"],"pt","351"],["Puerto Rico",["america","carribean"],"pr","1",""],["Qatar",["middle-east"],"qa","974"],["Réunion",["africa"],"re","262"],["Romania",["europe","eu-union"],"ro","40"],["Russia",["europe","asia","ex-ussr","baltic"],"ru","7","(...) ... .. .."],["Rwanda",["africa"],"rw","250"],["Saint Kitts and Nevis",["america","carribean"],"kn","1869"],["Saint Lucia",["america","carribean"],"lc","1758"],["Saint Vincent and the Grenadines",["america","carribean"],"vc","1784"],["Samoa",["oceania"],"ws","685"],["San Marino",["europe"],"sm","378"],["São Tomé and Príncipe",["africa"],"st","239"],["Saudi Arabia",["middle-east"],"sa","966"],["Senegal",["africa"],"sn","221"],["Serbia",["europe","ex-yugos"],"rs","381"],["Seychelles",["africa"],"sc","248"],["Sierra Leone",["africa"],"sl","232"],["Singapore",["asia"],"sg","65",".... ...."],["Slovakia",["europe","eu-union"],"sk","421"],["Slovenia",["europe","eu-union","ex-yugos"],"si","386"],["Solomon Islands",["oceania"],"sb","677"],["Somalia",["africa"],"so","252"],["South Africa",["africa"],"za","27"],["South Korea",["asia"],"kr","82","... .... ...."],["South Sudan",["africa","north-africa"],"ss","211"],["Spain",["europe","eu-union"],"es","34","... ... ..."],["Sri Lanka",["asia"],"lk","94"],["Sudan",["africa"],"sd","249"],["Suriname",["america","south-america"],"sr","597"],["Swaziland",["africa"],"sz","268"],["Sweden",["europe","eu-union","baltic"],"se","46","(...) ... ..."],["Switzerland",["europe"],"ch","41",".. ... .. .."],["Syria",["middle-east"],"sy","963"],["Taiwan",["asia"],"tw","886"],["Tajikistan",["asia","ex-ussr"],"tj","992"],["Tanzania",["africa"],"tz","255"],["Thailand",["asia"],"th","66"],["Timor-Leste",["asia"],"tl","670"],["Togo",["africa"],"tg","228"],["Tonga",["oceania"],"to","676"],["Trinidad and Tobago",["america","carribean"],"tt","1868"],["Tunisia",["africa","north-africa"],"tn","216"],["Turkey",["europe"],"tr","90","... ... .. .."],["Turkmenistan",["asia","ex-ussr"],"tm","993"],["Tuvalu",["asia"],"tv","688"],["Uganda",["africa"],"ug","256"],["Ukraine",["europe","ex-ussr"],"ua","380","(..) ... .. .."],["United Arab Emirates",["middle-east"],"ae","971"],["United Kingdom",["europe","eu-union"],"gb","44",".... ......"],["United States",["america","north-america"],"us","1","(...) ... ...."],["Uruguay",["america","south-america"],"uy","598"],["Uzbekistan",["asia","ex-ussr"],"uz","998",".. ... .. .."],["Vanuatu",["oceania"],"vu","678"],["Vatican City",["europe"],"va","39",".. .... ...."],["Venezuela",["america","south-america"],"ve","58"],["Vietnam",["asia"],"vn","84"],["Yemen",["middle-east"],"ye","967"],["Zambia",["africa"],"zm","260"],["Zimbabwe",["africa"],"zw","263"]],defaultMask="... ... ... ... ..",prefix="+",getMask=(e,t,r,i)=>r?e+"".padEnd(t.length,".")+" "+r:e+"".padEnd(t.length,".")+" "+i;var PhoneNumberInputHelper;!function(e){e.getCountries=()=>[].concat(...CountryData.map((e=>({name:e[0],regions:e[1],iso2:e[2],countryCode:e[3],format:getMask(prefix,e[3],e[4],defaultMask)})))),e.formatNumber=(e="",t)=>{if(!t)return e;const r=e.replace(/[\s()]+/g,""),{format:i}=t,a=i.split(" ");a.shift();const n=a.join(" ");return reduce_1(n,((e,t)=>{if(0===e.remainingText.length)return e;if("."!==t)return{formattedText:e.formattedText+t,remainingText:e.remainingText};const[r,...i]=e.remainingText;return{formattedText:e.formattedText+r,remainingText:i}}),{formattedText:"",remainingText:r}).formattedText}}(PhoneNumberInputHelper||(PhoneNumberInputHelper={}));const PhoneNumberInput=({onChange:e,value:t,allowClear:r,onClear:i,onBlur:a,error:n,fixedCountry:o=!1,optionPlaceholder:s="Select",optionSearchPlaceholder:l,enableSearch:p,onHideOptions:c,onShowOptions:d,placeholder:h,...u})=>{const[m]=useState(PhoneNumberInputHelper.getCountries()),[f,y]=useState(void 0),[g,_]=useState(""),x=useRef();useEffect((()=>{const e=m.filter((e=>e.countryCode===normaliseCountryCode(t?.countryCode)))[0];y(e),_(PhoneNumberInputHelper.formatNumber(t?.number,e))}),[t]);const b=t=>{e?v(g,t):C(g,t)},v=(t,r)=>{const i=PhoneNumberInputHelper.formatNumber(t,r);e({number:i.replace(/[\s()]+/g,""),countryCode:r&&addPlusPrefix(r.countryCode)})},C=(e,t)=>{_(PhoneNumberInputHelper.formatNumber(e,t)),y(t)};return jsx(InputGroup,{ref:x,value:g,onChange:t=>{const r=t.target.value.replace(/[^0-9]/g,"");e?v(r,f):C(r,f)},allowClear:r&&!!g,onClear:()=>{i?i():_("")},onBlur:a,error:n,placeholder:h,addon:o?{type:"label",attributes:{value:addPlusPrefix(f?.countryCode)}}:{type:"list",attributes:{placeholder:s,options:m,selectedOption:f,enableSearch:p,searchPlaceholder:l,valueExtractor:e=>`+${e.countryCode}`,listExtractor:e=>({title:e.name,secondaryLabel:addPlusPrefix(e.countryCode)}),onSelectOption:b,onHideOptions:c,onShowOptions:d}},inputMode:"numeric",...u})},normaliseCountryCode=e=>e?e.replace("+",""):"",addPlusPrefix=e=>e?e.includes("+")?e:`+${e}`:"",FormPhoneNumberInput=({label:e,errorMessage:t,id:r="form-phone-number-input","data-error-testid":i,"data-testid":a,...n})=>jsx(FormWrapper,{id:r,label:e,errorMessage:t,"data-error-testid":i,disabled:n.disabled,children:jsx(PhoneNumberInput,{id:`${r}-base`,"data-testid":a||r,error:!!t,...n})}),FormRangeSelect=({label:e,errorMessage:t,id:r="form-select","data-error-testid":i,"data-testid":a,enableSearch:n=!1,...o})=>jsx(FormWrapper,{id:r,label:e,errorMessage:t,"data-error-testid":i,disabled:o.disabled,children:jsx(InputRangeSelect,{id:`${r}-base`,"data-testid":a||r,error:!!t,enableSearch:n,...o})}),Form={DateInput:FormDateInput,Input:FormInput,InputGroup:FormInputGroup,Label:FormLabel,MultiSelect:FormMultiSelect,Select:FormSelect,RangeSelect:FormRangeSelect,Textarea:FormTextarea,Timepicker:FormTimepicker,TimeRangePicker:FormTimeRangePicker,CustomField:FormCustomField,UnitNumberInput:FormUnitNumberInput,PhoneNumberInput:FormPhoneNumberInput},Main=styled.button`
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
    padding: 1.5rem 1rem;
    background-color: ${Color.Neutral[8]};
    border: 1px solid transparent;
    border-radius: 0.5rem;
    cursor: pointer;
    max-width: 13rem;
    transition: all 200ms ease;
    ${TextStyleHelper.getTextStyle("Body","semibold")}
    color: ${({$selected:e})=>e&&Color.Primary};
    overflow-wrap: anywhere;

    img {
        min-width: 3.5rem;
        width: 3.5rem;
        height: 3.5rem;
        object-fit: contain;
    }

    ${MediaQuery.MaxWidth.mobileL} {
        padding: 0.5rem 0.25rem;
        gap: 0.25rem;
        ${TextStyleHelper.getTextStyle("BodySmall","semibold")}
    }

    ${e=>e.$error?css`
                background: ${Color.Neutral[8]};
                border: 1px solid ${Color.Validation.Red.Border};

                :hover {
                    box-shadow: 0 0 4px 1px ${Color.Shadow.Red};
                }
            `:e.$selected?css`
                background: ${Color.Accent.Light[5]};
                border: 1px solid ${Color.Primary};

                :hover {
                    box-shadow: 0 0 4px 1px ${Color.Shadow.Accent};
                }
            `:css`
                &:hover {
                    border: 1px solid ${Color.Accent.Light[1]};
                    box-shadow: 0 0 4px 1px ${Color.Shadow.Accent};
                }
            `}

    :disabled {
        &:hover {
            border: 1px solid transparent;
        }
        box-shadow: none;
        img {
            filter: grayscale(100%);
        }
        color: ${Color.Neutral[3]};

        outline: none;
        cursor: not-allowed;
    }
`;var img="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAABQCAYAAACeXX40AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARTSURBVHgB7Z1tUuJAEIY7qMRYWnIE9wR6BD2Be5S9weoN1pusJ1iPwJ5guYH4GeNH2HkppgojYAIhbXrepwoJEMofPHZP9zQxkgJpmh5HUfTdHZ6624EQsiLOp7676+d5fp4kyeDda/5gNBr1siz76Q5/CCHr41ccx+dOyiEejAWcyHflDg+FkDWDiNjtdk8gYQdPTCIf5SON4ALe0cQ5idya78CZ+E8IaRgn4gki4JkQogCK3Y77wdRLtDiNnp6eRkKIEh0hRBEKSFShgEQVCkhUoYBEFQpIVKGARBUKSFShgEQVCkhUoYBEFQpIVNkUokqWZfLy8iJvb2/jx1tbWxLHsWxsbEgIcBpGCQh3e3srr6+vH16Lokh2dnbGN+swAioA+a6vrzERPPN1PP/w8CB5nsvu7q5YhmvAhoFciHzz5JsmTVNxGUosQwEbBmu+WWl3Ho+Pj6VkbSsUsGGqRjSka6Riq1DAhllGJkZAUhuocKtCAUltLNPfs9wTpIAL8M3hOtne3q50PhrTnY7dj4kCzgFrteFwKM/Pz1In3W53vNNRFvYBA+Xm5mYs4bzdilWAVJubn+8B7O3tlTqvzVDAGaAB7KVDAXB/f19rIYCU2uv1JEmSmUUJpMPrVdN1G+FecAGs+5B6i+0SpM79/X2pG/weyI57yIiCw3rUm4Z7wVMgyt3d3c3s1WEtiMiIqFUniIaQO1SYgqfALgVGo+aBVFx3URI6FHACoh4mUD4DRYnlrbGmoYATUPWWKTRwDtaIlncnmoQCyvuqtwwoVJCOyeoELyBkKpN6i2C9iFEpshrBC1h2OHQWEHeZogTvwVwgCVxARLBVdzmqFiUQD+/BbR17zW0jWAHx4deRQhE9yxYwfu3oz10l+lohWAHLSlMGRFE0sBfhhxumoyXeF3oxE6SAiHx1pz+k1nnj9pDODzcUwXusf/FoEcEJiKizruoVUbC4k+LlW7TW9F/BDJHgBFz3uqu4l4zHnxU6fuwrxPVgUAKi4bzuytNf8cAPNpRt0yByhthXDGYcC1EIVyNoCoxUVW3xYBwLQ6hVJqbbThAR0EejJlmmv+iHX0NaDwYhYB0N56bw68FQMC8gxMPar02EtB40LyBSbxurS7RmFg3HWsG0gG1KvbNo6x9PFcwKiOixzJjVV2K6pWMVkwL6atIC1ke3TArY9tRbpMxuSlsxJ2Abq94yWE3F5gS0+kFZ/R6KKQFRdFieMsbYlrXobkbAUJq31ka3zFyaAwKGsomPqrjuS4RowYsTEVX4xXSiCgUkqlBAogoFJKpQQKIKBSSqUECiCgUkqlBAogoFJKpAwIEQokO/k+f5pRCiQBRF/ShN02N38EcIaZjRaPStkyTJlYuCF0JIs1w49wbj/5TnTOxlWYYoeCSErJ+/cRwj8w7HVTAO3BMnjISkAS68fHjw4X+FujXhgbs7cyccCiMiqYeBu126TPsbS77pF/4DuxeyMpdnp3gAAAAASUVORK5CYII=";const ImageWithFallback=({imgSrc:e,alt:t})=>jsx("img",{src:e,alt:t||"",onError:e=>{e.target.onerror=null,e.target.src=img}}),Component$2=({children:e,imgSrc:t,selected:r,error:i,...a},n)=>jsxs(Main,{ref:n,$selected:r,$error:i,...a,children:[jsx(ImageWithFallback,{imgSrc:t}),e]}),ImageButton=React__default.forwardRef(Component$2);var minus={},MinusIcon;Object.defineProperty(minus,"__esModule",{value:!0});var e$3=require$$0;const r=e=>e$3.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:e$3.jsx("path",{d:"M5.04199 10.833C4.80599 10.833 4.60099 10.7463 4.42699 10.573C4.25366 10.399 4.16699 10.194 4.16699 9.958C4.16699 9.722 4.25366 9.51733 4.42699 9.344C4.60099 9.17 4.80599 9.083 5.04199 9.083H14.958C15.194 9.083 15.399 9.17 15.573 9.344C15.7463 9.51733 15.833 9.722 15.833 9.958C15.833 10.194 15.7463 10.399 15.573 10.573C15.399 10.7463 15.194 10.833 14.958 10.833H5.04199Z",fill:"currentColor"})});r.displayName="MinusIcon",MinusIcon=minus.MinusIcon=r;var plus={},PlusIcon;Object.defineProperty(plus,"__esModule",{value:!0});var e$2=require$$0;const C$2=e=>e$2.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:e$2.jsx("path",{d:"M9.99999 15.833C9.76399 15.833 9.55899 15.7463 9.38499 15.573C9.21166 15.399 9.12499 15.194 9.12499 14.958V10.875H5.04199C4.80599 10.875 4.60099 10.7883 4.42699 10.615C4.25366 10.441 4.16699 10.236 4.16699 10C4.16699 9.764 4.25366 9.559 4.42699 9.385C4.60099 9.21167 4.80599 9.125 5.04199 9.125H9.12499V5.042C9.12499 4.806 9.21166 4.601 9.38499 4.427C9.55899 4.25367 9.76399 4.167 9.99999 4.167C10.236 4.167 10.441 4.25367 10.615 4.427C10.7883 4.601 10.875 4.806 10.875 5.042V9.125H14.958C15.194 9.125 15.399 9.21167 15.573 9.385C15.7463 9.559 15.833 9.764 15.833 10C15.833 10.236 15.7463 10.441 15.573 10.615C15.399 10.7883 15.194 10.875 14.958 10.875H10.875V14.958C10.875 15.194 10.7883 15.399 10.615 15.573C10.441 15.7463 10.236 15.833 9.99999 15.833Z",fill:"currentColor"})});C$2.displayName="PlusIcon",PlusIcon=plus.PlusIcon=C$2;const iconStyle=css`
    height: 1.125rem;
    width: 1.125rem;
    color: ${Color.Primary};
`,Container$4=styled.div`
    border-top: 1px solid ${Color.Neutral[5]};
    border-bottom: 1px solid ${Color.Neutral[5]};
`,ItemTitleDefault=styled(Text.H3)`
    color: ${Color.Primary};
    margin-bottom: 0.5rem;
`,ItemTitleSmall=styled(Text.Body)`
    color: ${Color.Primary};
`,ItemIcon=styled(ChevronRightIcon)`
    ${iconStyle}
`,Item=styled.a`
    padding: 1rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 4rem;

    :not(:last-of-type) {
        border-bottom: 1px solid ${Color.Neutral[5]};
    }

    :hover {
        ${ItemTitleDefault},
        ${ItemTitleSmall},
        ${ItemIcon} {
            color: ${Color.PrimaryDark};
        }
    }
`,ItemContent=styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-right: 1rem;
`,Description$2=styled(Text.BodySmall)`
    margin-top: 0.25rem;
`,Expandable=styled(animated.div)`
    overflow: hidden;
`,ExpandableChild=styled.div`
    border-top: 1px solid ${Color.Neutral[5]};
`,ToggleButtonLabel=styled(Text.H5)`
    color: ${Color.Primary};
    margin-right: 0.5rem;
`,ViewMoreIcon=styled(PlusIcon)`
    ${iconStyle}
`,ViewLessIcon=styled(MinusIcon)`
    ${iconStyle}
`,ToggleButton=styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1rem 0;
    border: none;
    background: none;
    cursor: pointer;
    transition: border-width 300ms linear;
    border-top: 1px solid ${Color.Neutral[5]};

    :hover {
        ${ToggleButtonLabel},
        ${ViewMoreIcon},
        ${ViewLessIcon} {
            color: ${Color.PrimaryDark};
        }
    }
`,LinkList=({items:e,maxShown:t,style:r="default",onItemClick:i,...a})=>{const[n,o]=useState(!t||t>=e.length),s=t?e.slice(0,t):e,l=t?e.slice(t):[],p=useResizeDetector(),c=p.ref,d=(e,t)=>{t.onClick?(e.preventDefault(),t.onClick(e)):i&&(e.preventDefault(),i(t,e))},h=()=>{o(!n)},u=(e,t,i,a)=>jsxs(Fragment,{children:[jsxs(ItemContent,{children:[jsx("small"===r?ItemTitleSmall:ItemTitleDefault,{"data-testid":`link-title-${e}`,weight:"semibold",children:t}),i&&jsx(Description$2,{"data-testid":`link-description-${e}`,children:i}),a]}),jsx(ItemIcon,{})]}),m=useSpring({height:n?p.height:0});return jsxs(Container$4,{...a,children:[s.map(((e,t)=>{const{title:r,description:i,secondaryDescription:a,onClick:n,...o}=e;return jsx(Item,{"data-testid":`list-item-shown-${t}`,onClick:t=>d(t,e),...o,children:u(t,r,i,a)},`list-item-shown-${t}`)})),l.length>0&&jsx(Expandable,{style:m,"data-testid":"minimised-content",children:jsx(ExpandableChild,{ref:c,children:l.map(((e,t)=>{const{title:r,description:i,onClick:a,secondaryDescription:n,...o}=e;return jsx(Item,{"data-testid":`list-item-minimised-${t}`,onClick:t=>d(t,e),...o,children:u(t,r,i,n)},`list-item-minimised-${t}`)}))})}),l.length>0&&jsxs(ToggleButton,{type:"button",onClick:h,"data-testid":"toggle-button",$showMinimised:n,children:[jsx(ToggleButtonLabel,{weight:"semibold","data-testid":"toggle-button-label",children:n?"View less":"View more"}),jsx(n?ViewLessIcon:ViewMoreIcon,{})]})]})},GridContainer=styled.div`
    margin-top: 2.5rem;
    display: grid;
    align-items: center;
    width: 100%;

    ${e=>{const{numOfCols:t}=e,r=t.lg||t.md,i=t.sm?t.sm<=2?t.sm:2:void 0,a=t.md||t.sm||2;return css`
            grid-template-columns: repeat(${r||"auto-fill"}, 1fr);
            gap: 2rem 2rem;
            justify-items: stretch;

            ${MediaQuery.MaxWidth.tablet} {
                grid-template-columns: repeat(
                    ${t.md||t.sm||"auto-fill"},
                    minmax(calc(${100/a}% - 2rem), 1fr)
                );
            }

            ${MediaQuery.MaxWidth.mobileL} {
                grid-template-columns: repeat(
                    ${i||"auto-fill"},
                    minmax(calc(${100/(i||1)}% - 2rem), 1fr)
                );
            }
        `}}
`,TileContainer=styled.div`
    position: relative;
    ${e=>{const{startLg:t,colsLg:r,startMd:i,colsMd:a,startSm:n,colsSm:o}=e;return css`
            grid-column: ${t||i||"auto"} / span
                ${r||a||1};

            ${MediaQuery.MaxWidth.tablet} {
                grid-column: ${i||n||"auto"} / span
                    ${a||o||1};
            }

            ${MediaQuery.MaxWidth.mobileL} {
                grid-column: ${n||"auto"} / span ${o||1};
            }
        `}}
`,GridComponent=(e,t)=>{const{children:r,...i}=e;return jsx(GridContainer,{ref:t,...i,children:r})},TileComponent=(e,t)=>{const{children:r,...i}=e;return jsx(TileContainer,{ref:t,...i,children:r})},Masonry={Grid:React__default.forwardRef(GridComponent),Tile:React__default.forwardRef(TileComponent)},Wrapper$9=styled.div`
    background: hsl(0, 0%, 94%);
    padding: 0 0.5rem;

    ${MediaQuery.MaxWidth.mobileL} {
        padding: 0;
    }
`,Masthead=()=>{useEffect((()=>{e()||t()}),[]);const e=()=>document.getElementById(SCRIPT_ID),t=()=>{if(!document.getElementById(SCRIPT_ID)){const e=document.createElement("script");e.id=SCRIPT_ID,e.type="module",e.src=SCRIPT_SRC,document.head.appendChild(e)}};return jsx(Wrapper$9,{dangerouslySetInnerHTML:{__html:"<sgds-masthead></sgds-masthead>"}})},SCRIPT_ID="lifesg-ds-masthead-script",SCRIPT_SRC="https://cdn.jsdelivr.net/npm/@govtechsg/sgds-web-component/Masthead/index.js",Modal=Object.assign(Modal$1,{Box:ModalBox});var menu={},MenuIcon;Object.defineProperty(menu,"__esModule",{value:!0});var C$1=require$$0;const e$1=e=>C$1.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:C$1.jsx("path",{d:"M3.375 15C3.139 15 2.934 14.9133 2.76 14.74C2.58667 14.566 2.5 14.361 2.5 14.125C2.5 13.889 2.58667 13.684 2.76 13.51C2.934 13.3367 3.139 13.25 3.375 13.25H16.625C16.861 13.25 17.066 13.3367 17.24 13.51C17.4133 13.684 17.5 13.889 17.5 14.125C17.5 14.361 17.4133 14.566 17.24 14.74C17.066 14.9133 16.861 15 16.625 15H3.375ZM3.375 10.875C3.139 10.875 2.934 10.7883 2.76 10.615C2.58667 10.441 2.5 10.236 2.5 10C2.5 9.764 2.58667 9.559 2.76 9.385C2.934 9.21167 3.139 9.125 3.375 9.125H16.625C16.861 9.125 17.066 9.21167 17.24 9.385C17.4133 9.559 17.5 9.764 17.5 10C17.5 10.236 17.4133 10.441 17.24 10.615C17.066 10.7883 16.861 10.875 16.625 10.875H3.375ZM3.375 6.75C3.139 6.75 2.934 6.66333 2.76 6.49C2.58667 6.316 2.5 6.111 2.5 5.875C2.5 5.639 2.58667 5.434 2.76 5.26C2.934 5.08667 3.139 5 3.375 5H16.625C16.861 5 17.066 5.08667 17.24 5.26C17.4133 5.434 17.5 5.639 17.5 5.875C17.5 6.111 17.4133 6.316 17.24 6.49C17.066 6.66333 16.861 6.75 16.625 6.75H3.375Z",fill:"currentColor"})});e$1.displayName="MenuIcon",MenuIcon=menu.MenuIcon=e$1;const NAVBAR_HEIGHT={notCompress:6,compress:4},NAVBAR_MOBILE_HEIGHT=3.5,Wrapper$8=styled.div`
    position: ${e=>e.$fixed?"fixed":"relative"};
    background-color: white;
    z-index: 30;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`,Nav=styled.nav`
    height: ${e=>e.$compress?NAVBAR_HEIGHT.compress:NAVBAR_HEIGHT.notCompress}rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    transition: ${Transition.Base};

    ${MediaQuery.MaxWidth.tablet} {
        height: ${NAVBAR_MOBILE_HEIGHT}rem;
    }
`,NavElementsContainer=styled.div`
    display: flex;
    height: 100%;
    margin-left: 5rem;
    flex: 1;
    justify-content: flex-end;
    ${MediaQuery.MaxWidth.tablet} {
        margin-left: 0rem;
    }
`,MobileMenuButton=styled(IconButton)`
    display: none;

    ${MediaQuery.MaxWidth.tablet} {
        display: flex;
        padding: 0 1.5rem;
        margin-right: -1.5rem;
    }
`,MobileMenuIcon=styled(MenuIcon)`
    height: 1.5rem;
    width: 1.5rem;
    color: ${Color.Neutral[1]};
`,NavBrandContainer=styled.div`
    display: flex;
    height: 100%;
    flex-direction: row;
    align-items: center;
    flex-shrink: 0;
`,NavSeparator=styled.div`
    display: flex;
    background-color: ${Color.Neutral[5]};
    height: ${e=>e.$compress?2:2.5}rem;
    width: 1px;
    margin: 0 ${e=>e.$compress?1.125:1.5}rem;

    ${MediaQuery.MaxWidth.tablet} {
        height: 1.5rem;
        margin: 0 1rem;
    }
`,Clickable=styled.a`
    display: flex;
    justify-content: center;

    img {
        width: auto;
        height: ${e=>"primary"===e.$type?e.$compress?1.25:1.625:e.$compress?2:2.5}rem;
        transition: ${Transition.Base};
        object-fit: contain;

        ${MediaQuery.MaxWidth.tablet} {
            height: ${e=>"primary"===e.$type?1:1.5}rem;
        }
    }
`,Brand=({resources:e,compress:t,onClick:r,"data-testid":i="navbar-brand",type:a})=>jsx(Clickable,{role:"link","aria-label":e.brandName+"-app-home-page",onClick:e=>{r&&r(e,a)},$compress:t,tabIndex:0,"data-testid":i,$type:a,children:jsx(ImageWithFallback,{imgSrc:e.logoSrc,alt:e.brandName+"-app-logo"})}),VISIBILITY_STYLE=e=>e?css`
            right: 0;
            transition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);
            transition-delay: 200ms;
        `:css`
        right: -100%;
        transition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);
    `,Wrapper$7=styled.div`
    display: none;

    ${MediaQuery.MaxWidth.tablet} {
        display: flex;
    }
`,Container$3=styled.div`
    position: absolute;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100vh;
    display: block;
    padding: 0 0 1rem;
    background-color: white;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    visibility: ${e=>e.$show?"visible":"hidden"};

    ${e=>VISIBILITY_STYLE(e.$show)}
    ${e=>{const t=`${e.$viewHeight}px`||"1vh";return css`
            height: calc(${t} * 100);
        `}}

	${MediaQuery.MaxWidth.tablet} {
        width: 75%;
    }

    ${MediaQuery.MaxWidth.mobileL} {
        width: 100%;
    }
`,Content$2=styled.div`
    display: flex;
    flex-direction: column;
`,TopBar=styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;
    padding: 2.5rem 1.25rem 2rem;
`,CloseIcon$1=styled(CrossIcon)`
    height: 1.5rem;
    width: 1.5rem;
    margin-right: -0.25rem;
`,CloseButton=styled(IconButton)`
    position: absolute;
    right: -0.25rem;
    bottom: 0.65rem;
    color: ${Color.Neutral[1]};

    :active,
    :focus {
        color: ${Color.Primary};
    }
`,Component$1=(e,t)=>{const{show:r,resources:i,children:a,onClose:n,onBrandClick:o}=e,[s,l]=useState(0),{primary:p,secondary:c}=i;useEffect((()=>(d(),window.addEventListener("resize",d),()=>{window.removeEventListener("resize",d)})),[]);const d=()=>{if(window){const e=.01*window.innerHeight;l(e)}};return jsx(Wrapper$7,{ref:t,"data-testid":"drawer",children:jsx(Container$3,{$show:r,$viewHeight:s,children:jsxs(Content$2,{children:[jsxs(TopBar,{children:[jsxs(NavBrandContainer,{children:[jsx(Brand,{resources:p,compress:!0,onClick:o,"data-testid":"drawer__brand",type:"primary"}),c&&jsxs(Fragment,{children:[jsx(NavSeparator,{}),jsx(Brand,{resources:c,compress:!0,onClick:o,"data-testid":"drawer__brand-secondary",type:"secondary"})]})]}),jsx(CloseButton,{onClick:n,focusHighlight:!1,"aria-label":"Close nav menu",children:jsx(CloseIcon$1,{})})]}),a]})})})},Drawer=React__default.forwardRef(Component$1),Wrapper$6=styled.ul`
    display: flex;
    list-style: none;
    margin-left: 4rem;
    flex-shrink: 0;

    ${MediaQuery.MaxWidth.tablet} {
        display: none;
    }
`,MobileWrapper$2=styled.ul`
    display: none;
    list-style: none;

    ${MediaQuery.MaxWidth.tablet} {
        display: flex;
        flex-direction: column;
        margin-top: 2.5rem;
        width: max-content;
        min-width: 22rem;
        max-width: 24rem;
    }

    ${MediaQuery.MaxWidth.mobileL} {
        width: 100%;
        max-width: unset;
        min-width: unset;
    }
`,ButtonItem=styled.li`
    position: relative;
    display: flex;
    align-items: center;

    :not(:last-of-type) {
        margin-right: 1rem;
    }

    ${MediaQuery.MaxWidth.tablet} {
        width: 100%;
        padding: 0 0 0 1rem;
        justify-content: center;

        :not(:last-of-type) {
            margin-right: 0;
            margin-bottom: 1rem;
        }
    }

    ${MediaQuery.MaxWidth.mobileL} {
        padding: 0 1rem;
    }
`,ActionButton=styled(Button.Small)`
    ${MediaQuery.MaxWidth.tablet} {
        width: 100%;
        padding: 0.685rem 1rem;
    }
`,DownloadAppWrapper=styled.div`
    display: none;

    ${MediaQuery.MaxWidth.tablet} {
        display: flex;
        flex-direction: column;
        margin-top: 2.5rem;
    }
`,DownloadAppTitle=styled(Text.BodySmall)`
    margin-bottom: 0.5rem;
`,DownloadAppImageLinkWrapper=styled.div`
    display: flex;
`,DownloadAppImageLink=styled.a`
    :not(:last-child) {
        margin-right: 1rem;
    }

    img {
        width: auto;
        height: auto;
        object-fit: contain;
    }

    ${MediaQuery.MaxWidth.tablet} {
        img {
            max-width: 11rem;
        }
    }

    ${MediaQuery.MaxWidth.mobileL} {
        img {
            max-width: 100%;
        }
    }
`,APP_STORE_ICON="https://assets.life.gov.sg/react-design-system/img/download/apple-app-store.png",PLAY_STORE_ICON="https://assets.life.gov.sg/react-design-system/img/download/google-play-store.png",NavbarActionButtons=({actionButtons:e,mobile:t=!1,onActionButtonClick:r})=>{const i=e=>{e.stopPropagation()},a=e=>t=>{t.stopPropagation(),"download"===e.type&&window.scrollTo({left:0,top:document.body.scrollHeight,behavior:"smooth"}),r(t,e)},n=(t=!1)=>(t?(e=>{const t=findIndex_1(e,(e=>"download"===e.type));if(t>-1){const r=[...e],i=r.splice(t,1);return[...r,i[0]]}return e})(e):e).map(((e,r)=>{let n;switch(e.type){case"download":n=t?(o=e.args,jsxs(DownloadAppWrapper,{children:[jsx(DownloadAppTitle,{weight:"semibold",children:o&&o.children||"Download the app"}),jsxs(DownloadAppImageLinkWrapper,{children:[jsx(DownloadAppImageLink,{href:"https://apps.apple.com/sg/app/moments-of-life/id1383218758",target:"_blank",rel:"noopener noreferrer","data-testid":"button__app-store",onClick:i,children:jsx("img",{src:APP_STORE_ICON,alt:"apple-app-store"})}),jsx(DownloadAppImageLink,{href:"https://play.google.com/store/apps/details?id=sg.gov.app.mol&hl=en_SG",target:"_blank",rel:"noopener noreferrer","data-testid":"button__play-store",onClick:i,children:jsx("img",{src:PLAY_STORE_ICON,alt:"google-play-store"})})]})]})):jsx(ActionButton,{onClick:a(e),...e.args,"data-testid":"action-button__download",children:"Download the app"});break;case"button":{const i=e.args["data-testid"]?`action-button__${e.args["data-testid"]}`:`action-button__button-${t?"mobile-":""}${r+1}`;n=jsx(ActionButton,{...e.args,onClick:a(e),"data-testid":i});break}case"component":{const t=e.args;n=t&&t.render||null;break}default:n=null}var o;if(n)return jsx(ButtonItem,{children:n},`action-button-${r+1}`)}));if(e&&e.length>0){return jsx(t?MobileWrapper$2:Wrapper$6,{children:n(t)})}return jsx(Fragment,{})},Wrapper$5=styled.ul`
    width: 100%;
    overflow: auto;
    display: flex;
    flex-direction: column;
    margin-top: 0;
    left: 0;
    top: 102%;
    min-width: 15.625rem;
    position: absolute;
    max-height: 20rem;

    background: ${Color.Neutral[8]};
    border-radius: 0 0 0.5rem 0.5rem;
    box-shadow: ${DesignToken.ElevationBoxShadow};
`,MobileWrapper$1=styled.ul`
    display: none;
    list-style: none;

    ${MediaQuery.MaxWidth.tablet} {
        border-left: 0.25rem solid ${Color.Primary};
        display: flex;
        flex-direction: column;
    }
`,Link$1=styled(Text.Hyperlink.Small)`
    ${TextStyleHelper.getTextStyle("H6","regular")};
    width: 100%;
    display: flex;
    position: relative;
    align-items: flex-start;
    text-align: left;
    color: ${Color.Neutral[1]};

    padding: 1px 1rem;

    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    white-space: pre-wrap;

    :active,
    :focus {
        color: ${Color.Primary};
    }
    :hover {
        color: ${Color.Accent.Light[1]};
    }

    ${MediaQuery.MaxWidth.tablet} {
        ${TextStyleHelper.getTextStyle("H5","bold")}
        width: 100%;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        line-height: 1.125rem;
    }
`,MenuItem=styled.li`
    width: 100%;
    position: relative;
    display: flex;
    align-items: flex-start;
    padding: 0.5rem 0;

    :first-child {
        padding-top: 1rem;
    }

    :last-child {
        padding-bottom: 1rem;
    }

    ${MediaQuery.MaxWidth.tablet} {
        padding: 0.625rem 0;

        :first-child {
            padding-top: 0.25rem;
        }

        :last-child {
            padding-bottom: 0.625rem;
        }
    }
`,Menu=({items:e,mobile:t=!1,onItemClick:r})=>{const i=e=>t=>{t.stopPropagation(),r(t,e)},a=(t=!1)=>e.map(((e,r)=>{const{children:a,options:n,...o}=e;return jsx(MenuItem,{children:jsx(Link$1,{"data-testid":t?`link__mobile-${r+1}`:`link__${r+1}`,weight:"bold",...o,onClick:i(e),...n,children:a})},r)}));if(e&&e.length>0){return jsx(t?MobileWrapper$1:Wrapper$5,{children:a(t)})}return jsx(Fragment,{})},Wrapper$4=styled.ul`
    display: flex;
    list-style: none;
    position: relative;

    ${MediaQuery.MaxWidth.tablet} {
        display: none;
    }
`,MobileWrapper=styled.ul`
    display: none;
    list-style: none;

    ${MediaQuery.MaxWidth.tablet} {
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
`,LinkItem=styled.li`
    display: flex;
    margin-left: 1rem;

    :first-child {
        margin-left: 0;
    }
    ${MediaQuery.MaxWidth.tablet} {
        flex-direction: column;
        padding: 0.125rem 0;
        width: 100%;
        margin-left: 0rem;
    }
`,Link=styled(Text.Hyperlink.Small)`
    display: flex;
    position: relative;
    align-items: center;
    text-align: center;
    color: ${Color.Neutral[1]};
    height: 100%;
    padding: 0 0.5rem;

    :active,
    :focus {
        color: ${Color.Neutral[1]};
    }

    ${MediaQuery.MaxWidth.tablet} {
        color: ${Color.Neutral[1]};
        width: 100%;
        padding: 0.5rem 1rem;
        text-align: left;
        align-items: flex-start;
        :hover {
            color: ${Color.Neutral[1]};
        }
    }
`,LinkLabel=styled.div`
    flex: 1;
    margin-top: 0.25rem;

    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    white-space: pre-wrap;
`,LinkIndicator=styled.div`
    position: absolute;
    bottom: 0;
    height: 0.25rem;
    left: 0.5rem;
    right: 0.5rem;
    background-color: ${Color.Primary};

    ${MediaQuery.MaxWidth.tablet} {
        left: 0;
        right: unset;
        top: 0;
        bottom: 0;
        height: 100%;
        width: 0.25rem;
        background-color: ${Color.Primary};
    }
`,LinkIconContainer=styled.div`
    padding-left: 0.5rem;
    margin-right: -0.5rem;
`,ExpandCollapseButton=styled(IconButton)`
    padding: 0.5rem;
    transform: rotate(${e=>e.$selected?0:180}deg);
    transition: transform 300ms ease-in-out;
    margin: auto 0.25rem auto 0;
`,ChevronIcon=styled(ChevronUpIcon)`
    height: 1.25rem;
    width: 1.25rem;
    color: ${Color.Neutral[3]};
    :hover {
        color: ${Color.Neutral[1]};
    }
`,NavbarItems=({items:e,selectedId:t,mobile:r=!1,onItemClick:i})=>{const[a,n]=useState(-1),[o,s]=useState(!1),l=useRef(null);useEffect((()=>{const e=e=>{l.current&&!l.current.contains(e.target)&&p()};return document.addEventListener("click",e,!0),()=>{document.removeEventListener("click",e,!0)}}),[]);const p=()=>{s(!1)},c=(e,t)=>r=>{r.stopPropagation(),n(t),s(!0),i(r,e)},d=(e,t)=>{e.stopPropagation(),i(e,t),s(!1)},h=()=>e.map(((e,i)=>{const n=(e=>{if(e.id===t)return!0;if(e?.subMenu&&e.subMenu.length>=1)return!!e.subMenu.find((e=>e.id===t));return!1})(e),{children:s,options:l,...p}=e,h=r?`link__mobile-${i+1}`:`link__${i+1}`,u=a>=0&&a===i&&o;return jsxs(LinkItem,{children:[jsxs(Link,{"data-testid":h,weight:n?r?"bold":"semibold":"regular",$selected:n,...p,onClick:c(e,i),...l,children:[jsx(LinkLabel,{children:s}),n&&jsx(LinkIndicator,{}),r&&e.subMenu&&jsx(LinkIconContainer,{children:jsx(ExpandCollapseButton,{"data-testid":`${h}-expand-collapse-button`,$selected:u,focusHighlight:!1,focusOutline:"browser","aria-label":u?"Collapse":"Expand",children:jsx(ChevronIcon,{})})})]}),u&&jsx(Menu,{items:e.subMenu,mobile:r,onItemClick:d})]},i)}));if(e&&e.length>0){return jsx(r?MobileWrapper:Wrapper$4,{ref:l,children:h()})}return jsx(Fragment,{})},Component=({items:e,id:t,selectedId:r,compress:i=!1,fixed:a=!0,resources:n=DEFAULT_RESOURCES,hideNavElements:o=!1,drawerDismissalExclusions:s=[],actionButtons:l,onItemClick:p,onActionButtonClick:c,onBrandClick:d,...h},u)=>{const[m,f]=useState(!1),[y,g]=useState(!1),{primary:_=DEFAULT_RESOURCES.primary,secondary:x}=n;useEffect((()=>(C(),window.addEventListener("resize",C),()=>{window.removeEventListener("resize",C)})),[]);const b=()=>{f(!1),setTimeout((()=>{g(!1)}),550)},v=e=>m&&-1===s.indexOf(e),C=()=>{window.innerWidth<=MediaWidths$1.tablet&&m&&b()},S=(e,t)=>{d&&(e.preventDefault(),d(t)),v("brand-click")&&b()},$=(e,t)=>{t.onClick?t.onClick(e):p&&(e.preventDefault(),p(t)),!t?.subMenu&&v("item-click")&&b()},w=(e,t)=>{t.args&&t.args.onClick?t.args.onClick(e):c&&(e.preventDefault(),c(t)),v("item-click")&&b()},T=()=>{f(!0),g(!0)},k=()=>{v("close-button-click")&&b()};return jsxs(Wrapper$8,{ref:u,$fixed:a,id:t||"navbar-wrapper","data-testid":h["data-testid"]||"navbar-wrapper",children:[jsx(Masthead,{}),jsxs(Layout.Content,{children:[jsxs(Nav,{$compress:i,children:[jsxs(NavBrandContainer,{children:[jsx(Brand,{resources:_,compress:i,onClick:S,"data-testid":"main__brand",type:"primary"}),x&&jsxs(Fragment,{children:[jsx(NavSeparator,{$compress:i}),jsx(Brand,{resources:x,compress:i,onClick:S,"data-testid":"main__brand-secondary",type:"secondary"})]})]}),!o&&jsxs(NavElementsContainer,{children:[jsx(NavbarItems,{items:e.desktop,onItemClick:$,selectedId:r}),jsx(NavbarActionButtons,{actionButtons:l&&l.desktop,onActionButtonClick:w}),jsx(MobileMenuButton,{"aria-label":"Open nav menu","data-testid":"button__mobile-menu",onClick:T,focusHighlight:!1,children:jsx(MobileMenuIcon,{})})]})]}),!o&&jsx(Overlay,{show:y,enableOverlayClick:!0,onOverlayClick:k,children:jsxs(Drawer,{show:m,resources:{primary:_,secondary:x},onClose:k,onBrandClick:S,actionButtons:l,children:[jsx(NavbarItems,{items:e.mobile||e.desktop,onItemClick:$,selectedId:r,mobile:!0}),jsx(NavbarActionButtons,{actionButtons:l&&(l?.mobile||l.desktop),onActionButtonClick:w,mobile:!0})]})})]})]})},Navbar=React__default.forwardRef(Component),DEFAULT_RESOURCES={primary:{brandName:"LifeSG",logoSrc:"https://assets.life.gov.sg/lifesg/logo-lifesg.svg"}},NavbarHeight=NAVBAR_HEIGHT,NavbarMobileHeight=NAVBAR_MOBILE_HEIGHT,commonLinkStyle=css`
    color: ${Color.Validation.Orange.Icon};

    svg {
        color: ${Color.Validation.Orange.Icon};
    }

    :hover,
    :active,
    :visited,
    :focus {
        color: ${Color.Validation.Orange.Icon};
        svg {
            color: ${Color.Validation.Orange.Icon};
        }
    }
`,Wrapper$3=styled.div`
    position: ${e=>e.$sticky?"sticky":"relative"};
    left: 0;
    top: 0;
    width: 100%;
    transition: ${Transition.Base};
    background: ${Color.Neutral[2]};
    z-index: 25;
`,Container$2=styled(Layout.Content)`
    display: flex;
`,TextContainer$2=styled.div`
    display: flex;
    flex: 1;
    padding: 1.5rem 0;
`,Content$1=styled.div`
    display: inline-block;
    width: 100%;

    ${TextStyleHelper.getTextStyle("Body","regular")}
    color: ${Color.Neutral[8]};

    p {
        display: inline-block;
    }

    strong {
        ${TextStyleHelper.getFontFamily("Body","semibold")}
        color: ${Color.Neutral[8]};
    }

    a {
        ${TextStyleHelper.getTextStyle("Body","regular")}
        ${commonLinkStyle}
    }
`,ContentLink=styled(Text.Hyperlink.Default)`
    position: relative;

    ${commonLinkStyle}
`,StyledIconButton=styled(IconButton)`
    margin-right: -1.5rem;
    padding-left: 1rem;
    height: max-content;
`,StyledIcon=styled(CrossIcon)`
    height: 1.875rem;
    width: 1.875rem;
    color: ${Color.Neutral[8]};
`,NBComponent=({children:e,visible:t=!0,dismissible:r=!0,sticky:i=!0,onDismiss:a,id:n,forwardedRef:o,...s})=>{const l=s["data-testid"],[p,c]=useState(t);useEffect((()=>{c(t)}),[t]);return p?jsx(Wrapper$3,{ref:o,$sticky:i,...s,children:jsxs(Container$2,{id:formatId("container",n),children:[jsx(TextContainer$2,{children:jsx(Content$1,{"data-testid":formatId("text-content",l),children:e})}),r&&jsx(StyledIconButton,{onClick:()=>{c(!1),r&&a&&a()},id:formatId("dismiss-button",n),"data-testid":formatId("dismiss-button",l),focusHighlight:!1,children:jsx(StyledIcon,{})})]})}):null},NBWithRef=(e,t)=>jsx(NBComponent,{...e,forwardedRef:t}),formatId=(e,t="wrapper")=>`${t}-${e}`,Base=React__default.forwardRef(NBWithRef),NotificationBanner=Object.assign(Base,{Link:ContentLink});
/*! @license DOMPurify 2.4.5 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.4.5/LICENSE */
function _typeof(e){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof(e)}function _setPrototypeOf(e,t){return _setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},_setPrototypeOf(e,t)}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function _construct(e,t,r){return _construct=_isNativeReflectConstruct()?Reflect.construct:function(e,t,r){var i=[null];i.push.apply(i,t);var a=new(Function.bind.apply(e,i));return r&&_setPrototypeOf(a,r.prototype),a},_construct.apply(null,arguments)}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var hasOwnProperty=Object.hasOwnProperty,setPrototypeOf=Object.setPrototypeOf,isFrozen=Object.isFrozen,getPrototypeOf=Object.getPrototypeOf,getOwnPropertyDescriptor=Object.getOwnPropertyDescriptor,freeze=Object.freeze,seal=Object.seal,create=Object.create,_ref="undefined"!=typeof Reflect&&Reflect,apply=_ref.apply,construct=_ref.construct;apply||(apply=function(e,t,r){return e.apply(t,r)}),freeze||(freeze=function(e){return e}),seal||(seal=function(e){return e}),construct||(construct=function(e,t){return _construct(e,_toConsumableArray(t))});var arrayForEach=unapply(Array.prototype.forEach),arrayPop=unapply(Array.prototype.pop),arrayPush=unapply(Array.prototype.push),stringToLowerCase=unapply(String.prototype.toLowerCase),stringToString=unapply(String.prototype.toString),stringMatch=unapply(String.prototype.match),stringReplace=unapply(String.prototype.replace),stringIndexOf=unapply(String.prototype.indexOf),stringTrim=unapply(String.prototype.trim),regExpTest=unapply(RegExp.prototype.test),typeErrorCreate=unconstruct(TypeError);function unapply(e){return function(t){for(var r=arguments.length,i=new Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];return apply(e,t,i)}}function unconstruct(e){return function(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return construct(e,r)}}function addToSet(e,t,r){r=r||stringToLowerCase,setPrototypeOf&&setPrototypeOf(e,null);for(var i=t.length;i--;){var a=t[i];if("string"==typeof a){var n=r(a);n!==a&&(isFrozen(t)||(t[i]=n),a=n)}e[a]=!0}return e}function clone(e){var t,r=create(null);for(t in e)!0===apply(hasOwnProperty,e,[t])&&(r[t]=e[t]);return r}function lookupGetter(e,t){for(;null!==e;){var r=getOwnPropertyDescriptor(e,t);if(r){if(r.get)return unapply(r.get);if("function"==typeof r.value)return unapply(r.value)}e=getPrototypeOf(e)}return function(e){return console.warn("fallback value for",e),null}}var html$1=freeze(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),svg$1=freeze(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),svgFilters=freeze(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),svgDisallowed=freeze(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),mathMl$1=freeze(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),mathMlDisallowed=freeze(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),text=freeze(["#text"]),html=freeze(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),svg=freeze(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),mathMl=freeze(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),xml=freeze(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),MUSTACHE_EXPR=seal(/\{\{[\w\W]*|[\w\W]*\}\}/gm),ERB_EXPR=seal(/<%[\w\W]*|[\w\W]*%>/gm),TMPLIT_EXPR=seal(/\${[\w\W]*}/gm),DATA_ATTR=seal(/^data-[\-\w.\u00B7-\uFFFF]/),ARIA_ATTR=seal(/^aria-[\-\w]+$/),IS_ALLOWED_URI=seal(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),IS_SCRIPT_OR_DATA=seal(/^(?:\w+script|data):/i),ATTR_WHITESPACE=seal(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),DOCTYPE_NAME=seal(/^html$/i),getGlobal=function(){return"undefined"==typeof window?null:window},_createTrustedTypesPolicy=function(e,t){if("object"!==_typeof(e)||"function"!=typeof e.createPolicy)return null;var r=null,i="data-tt-policy-suffix";t.currentScript&&t.currentScript.hasAttribute(i)&&(r=t.currentScript.getAttribute(i));var a="dompurify"+(r?"#"+r:"");try{return e.createPolicy(a,{createHTML:function(e){return e},createScriptURL:function(e){return e}})}catch(e){return console.warn("TrustedTypes policy "+a+" could not be created."),null}};function createDOMPurify(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:getGlobal(),t=function(e){return createDOMPurify(e)};if(t.version="2.4.5",t.removed=[],!e||!e.document||9!==e.document.nodeType)return t.isSupported=!1,t;var r=e.document,i=e.document,a=e.DocumentFragment,n=e.HTMLTemplateElement,o=e.Node,s=e.Element,l=e.NodeFilter,p=e.NamedNodeMap,c=void 0===p?e.NamedNodeMap||e.MozNamedAttrMap:p,d=e.HTMLFormElement,h=e.DOMParser,u=e.trustedTypes,m=s.prototype,f=lookupGetter(m,"cloneNode"),y=lookupGetter(m,"nextSibling"),g=lookupGetter(m,"childNodes"),_=lookupGetter(m,"parentNode");if("function"==typeof n){var x=i.createElement("template");x.content&&x.content.ownerDocument&&(i=x.content.ownerDocument)}var b=_createTrustedTypesPolicy(u,r),v=b?b.createHTML(""):"",C=i,S=C.implementation,$=C.createNodeIterator,w=C.createDocumentFragment,T=C.getElementsByTagName,k=r.importNode,E={};try{E=clone(i).documentMode?i.documentMode:{}}catch(e){}var A={};t.isSupported="function"==typeof _&&S&&void 0!==S.createHTMLDocument&&9!==E;var P,I,M=MUSTACHE_EXPR,D=ERB_EXPR,F=TMPLIT_EXPR,R=DATA_ATTR,j=ARIA_ATTR,L=IS_SCRIPT_OR_DATA,B=ATTR_WHITESPACE,O=IS_ALLOWED_URI,N=null,V=addToSet({},[].concat(_toConsumableArray(html$1),_toConsumableArray(svg$1),_toConsumableArray(svgFilters),_toConsumableArray(mathMl$1),_toConsumableArray(text))),H=null,z=addToSet({},[].concat(_toConsumableArray(html),_toConsumableArray(svg),_toConsumableArray(mathMl),_toConsumableArray(xml))),G=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),W=null,U=null,q=!0,Q=!0,Y=!1,K=!0,Z=!1,X=!1,J=!1,ee=!1,te=!1,re=!1,ie=!1,ae=!0,ne=!1,oe=!0,se=!1,le={},pe=null,ce=addToSet({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),de=null,he=addToSet({},["audio","video","img","source","image","track"]),ue=null,me=addToSet({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),fe="http://www.w3.org/1998/Math/MathML",ye="http://www.w3.org/2000/svg",ge="http://www.w3.org/1999/xhtml",_e=ge,xe=!1,be=null,ve=addToSet({},[fe,ye,ge],stringToString),Ce=["application/xhtml+xml","text/html"],Se=null,$e=i.createElement("form"),we=function(e){return e instanceof RegExp||e instanceof Function},Te=function(e){Se&&Se===e||(e&&"object"===_typeof(e)||(e={}),e=clone(e),P=P=-1===Ce.indexOf(e.PARSER_MEDIA_TYPE)?"text/html":e.PARSER_MEDIA_TYPE,I="application/xhtml+xml"===P?stringToString:stringToLowerCase,N="ALLOWED_TAGS"in e?addToSet({},e.ALLOWED_TAGS,I):V,H="ALLOWED_ATTR"in e?addToSet({},e.ALLOWED_ATTR,I):z,be="ALLOWED_NAMESPACES"in e?addToSet({},e.ALLOWED_NAMESPACES,stringToString):ve,ue="ADD_URI_SAFE_ATTR"in e?addToSet(clone(me),e.ADD_URI_SAFE_ATTR,I):me,de="ADD_DATA_URI_TAGS"in e?addToSet(clone(he),e.ADD_DATA_URI_TAGS,I):he,pe="FORBID_CONTENTS"in e?addToSet({},e.FORBID_CONTENTS,I):ce,W="FORBID_TAGS"in e?addToSet({},e.FORBID_TAGS,I):{},U="FORBID_ATTR"in e?addToSet({},e.FORBID_ATTR,I):{},le="USE_PROFILES"in e&&e.USE_PROFILES,q=!1!==e.ALLOW_ARIA_ATTR,Q=!1!==e.ALLOW_DATA_ATTR,Y=e.ALLOW_UNKNOWN_PROTOCOLS||!1,K=!1!==e.ALLOW_SELF_CLOSE_IN_ATTR,Z=e.SAFE_FOR_TEMPLATES||!1,X=e.WHOLE_DOCUMENT||!1,te=e.RETURN_DOM||!1,re=e.RETURN_DOM_FRAGMENT||!1,ie=e.RETURN_TRUSTED_TYPE||!1,ee=e.FORCE_BODY||!1,ae=!1!==e.SANITIZE_DOM,ne=e.SANITIZE_NAMED_PROPS||!1,oe=!1!==e.KEEP_CONTENT,se=e.IN_PLACE||!1,O=e.ALLOWED_URI_REGEXP||O,_e=e.NAMESPACE||ge,G=e.CUSTOM_ELEMENT_HANDLING||{},e.CUSTOM_ELEMENT_HANDLING&&we(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(G.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&we(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(G.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(G.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Z&&(Q=!1),re&&(te=!0),le&&(N=addToSet({},_toConsumableArray(text)),H=[],!0===le.html&&(addToSet(N,html$1),addToSet(H,html)),!0===le.svg&&(addToSet(N,svg$1),addToSet(H,svg),addToSet(H,xml)),!0===le.svgFilters&&(addToSet(N,svgFilters),addToSet(H,svg),addToSet(H,xml)),!0===le.mathMl&&(addToSet(N,mathMl$1),addToSet(H,mathMl),addToSet(H,xml))),e.ADD_TAGS&&(N===V&&(N=clone(N)),addToSet(N,e.ADD_TAGS,I)),e.ADD_ATTR&&(H===z&&(H=clone(H)),addToSet(H,e.ADD_ATTR,I)),e.ADD_URI_SAFE_ATTR&&addToSet(ue,e.ADD_URI_SAFE_ATTR,I),e.FORBID_CONTENTS&&(pe===ce&&(pe=clone(pe)),addToSet(pe,e.FORBID_CONTENTS,I)),oe&&(N["#text"]=!0),X&&addToSet(N,["html","head","body"]),N.table&&(addToSet(N,["tbody"]),delete W.tbody),freeze&&freeze(e),Se=e)},ke=addToSet({},["mi","mo","mn","ms","mtext"]),Ee=addToSet({},["foreignobject","desc","title","annotation-xml"]),Ae=addToSet({},["title","style","font","a","script"]),Pe=addToSet({},svg$1);addToSet(Pe,svgFilters),addToSet(Pe,svgDisallowed);var Ie=addToSet({},mathMl$1);addToSet(Ie,mathMlDisallowed);var Me=function(e){arrayPush(t.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){try{e.outerHTML=v}catch(t){e.remove()}}},De=function(e,r){try{arrayPush(t.removed,{attribute:r.getAttributeNode(e),from:r})}catch(e){arrayPush(t.removed,{attribute:null,from:r})}if(r.removeAttribute(e),"is"===e&&!H[e])if(te||re)try{Me(r)}catch(e){}else try{r.setAttribute(e,"")}catch(e){}},Fe=function(e){var t,r;if(ee)e="<remove></remove>"+e;else{var a=stringMatch(e,/^[\r\n\t ]+/);r=a&&a[0]}"application/xhtml+xml"===P&&_e===ge&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");var n=b?b.createHTML(e):e;if(_e===ge)try{t=(new h).parseFromString(n,P)}catch(e){}if(!t||!t.documentElement){t=S.createDocument(_e,"template",null);try{t.documentElement.innerHTML=xe?v:n}catch(e){}}var o=t.body||t.documentElement;return e&&r&&o.insertBefore(i.createTextNode(r),o.childNodes[0]||null),_e===ge?T.call(t,X?"html":"body")[0]:X?t.documentElement:o},Re=function(e){return $.call(e.ownerDocument||e,e,l.SHOW_ELEMENT|l.SHOW_COMMENT|l.SHOW_TEXT,null,!1)},je=function(e){return"object"===_typeof(o)?e instanceof o:e&&"object"===_typeof(e)&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},Le=function(e,r,i){A[e]&&arrayForEach(A[e],(function(e){e.call(t,r,i,Se)}))},Be=function(e){var r,i;if(Le("beforeSanitizeElements",e,null),(i=e)instanceof d&&("string"!=typeof i.nodeName||"string"!=typeof i.textContent||"function"!=typeof i.removeChild||!(i.attributes instanceof c)||"function"!=typeof i.removeAttribute||"function"!=typeof i.setAttribute||"string"!=typeof i.namespaceURI||"function"!=typeof i.insertBefore||"function"!=typeof i.hasChildNodes))return Me(e),!0;if(regExpTest(/[\u0080-\uFFFF]/,e.nodeName))return Me(e),!0;var a=I(e.nodeName);if(Le("uponSanitizeElement",e,{tagName:a,allowedTags:N}),e.hasChildNodes()&&!je(e.firstElementChild)&&(!je(e.content)||!je(e.content.firstElementChild))&&regExpTest(/<[/\w]/g,e.innerHTML)&&regExpTest(/<[/\w]/g,e.textContent))return Me(e),!0;if("select"===a&&regExpTest(/<template/i,e.innerHTML))return Me(e),!0;if(!N[a]||W[a]){if(!W[a]&&Ne(a)){if(G.tagNameCheck instanceof RegExp&&regExpTest(G.tagNameCheck,a))return!1;if(G.tagNameCheck instanceof Function&&G.tagNameCheck(a))return!1}if(oe&&!pe[a]){var n=_(e)||e.parentNode,o=g(e)||e.childNodes;if(o&&n)for(var l=o.length-1;l>=0;--l)n.insertBefore(f(o[l],!0),y(e))}return Me(e),!0}return e instanceof s&&!function(e){var t=_(e);t&&t.tagName||(t={namespaceURI:_e,tagName:"template"});var r=stringToLowerCase(e.tagName),i=stringToLowerCase(t.tagName);return!!be[e.namespaceURI]&&(e.namespaceURI===ye?t.namespaceURI===ge?"svg"===r:t.namespaceURI===fe?"svg"===r&&("annotation-xml"===i||ke[i]):Boolean(Pe[r]):e.namespaceURI===fe?t.namespaceURI===ge?"math"===r:t.namespaceURI===ye?"math"===r&&Ee[i]:Boolean(Ie[r]):e.namespaceURI===ge?!(t.namespaceURI===ye&&!Ee[i])&&!(t.namespaceURI===fe&&!ke[i])&&!Ie[r]&&(Ae[r]||!Pe[r]):!("application/xhtml+xml"!==P||!be[e.namespaceURI]))}(e)?(Me(e),!0):"noscript"!==a&&"noembed"!==a||!regExpTest(/<\/no(script|embed)/i,e.innerHTML)?(Z&&3===e.nodeType&&(r=e.textContent,r=stringReplace(r,M," "),r=stringReplace(r,D," "),r=stringReplace(r,F," "),e.textContent!==r&&(arrayPush(t.removed,{element:e.cloneNode()}),e.textContent=r)),Le("afterSanitizeElements",e,null),!1):(Me(e),!0)},Oe=function(e,t,r){if(ae&&("id"===t||"name"===t)&&(r in i||r in $e))return!1;if(Q&&!U[t]&&regExpTest(R,t));else if(q&&regExpTest(j,t));else if(!H[t]||U[t]){if(!(Ne(e)&&(G.tagNameCheck instanceof RegExp&&regExpTest(G.tagNameCheck,e)||G.tagNameCheck instanceof Function&&G.tagNameCheck(e))&&(G.attributeNameCheck instanceof RegExp&&regExpTest(G.attributeNameCheck,t)||G.attributeNameCheck instanceof Function&&G.attributeNameCheck(t))||"is"===t&&G.allowCustomizedBuiltInElements&&(G.tagNameCheck instanceof RegExp&&regExpTest(G.tagNameCheck,r)||G.tagNameCheck instanceof Function&&G.tagNameCheck(r))))return!1}else if(ue[t]);else if(regExpTest(O,stringReplace(r,B,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==stringIndexOf(r,"data:")||!de[e]){if(Y&&!regExpTest(L,stringReplace(r,B,"")));else if(r)return!1}else;return!0},Ne=function(e){return e.indexOf("-")>0},Ve=function(e){var r,i,a,n;Le("beforeSanitizeAttributes",e,null);var o=e.attributes;if(o){var s={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:H};for(n=o.length;n--;){var l=r=o[n],p=l.name,c=l.namespaceURI;if(i="value"===p?r.value:stringTrim(r.value),a=I(p),s.attrName=a,s.attrValue=i,s.keepAttr=!0,s.forceKeepAttr=void 0,Le("uponSanitizeAttribute",e,s),i=s.attrValue,!s.forceKeepAttr&&(De(p,e),s.keepAttr))if(K||!regExpTest(/\/>/i,i)){Z&&(i=stringReplace(i,M," "),i=stringReplace(i,D," "),i=stringReplace(i,F," "));var d=I(e.nodeName);if(Oe(d,a,i)){if(!ne||"id"!==a&&"name"!==a||(De(p,e),i="user-content-"+i),b&&"object"===_typeof(u)&&"function"==typeof u.getAttributeType)if(c);else switch(u.getAttributeType(d,a)){case"TrustedHTML":i=b.createHTML(i);break;case"TrustedScriptURL":i=b.createScriptURL(i)}try{c?e.setAttributeNS(c,p,i):e.setAttribute(p,i),arrayPop(t.removed)}catch(e){}}}else De(p,e)}Le("afterSanitizeAttributes",e,null)}},He=function e(t){var r,i=Re(t);for(Le("beforeSanitizeShadowDOM",t,null);r=i.nextNode();)Le("uponSanitizeShadowNode",r,null),Be(r)||(r.content instanceof a&&e(r.content),Ve(r));Le("afterSanitizeShadowDOM",t,null)};return t.sanitize=function(i){var n,s,l,p,c,d=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if((xe=!i)&&(i="\x3c!--\x3e"),"string"!=typeof i&&!je(i)){if("function"!=typeof i.toString)throw typeErrorCreate("toString is not a function");if("string"!=typeof(i=i.toString()))throw typeErrorCreate("dirty is not a string, aborting")}if(!t.isSupported){if("object"===_typeof(e.toStaticHTML)||"function"==typeof e.toStaticHTML){if("string"==typeof i)return e.toStaticHTML(i);if(je(i))return e.toStaticHTML(i.outerHTML)}return i}if(J||Te(d),t.removed=[],"string"==typeof i&&(se=!1),se){if(i.nodeName){var h=I(i.nodeName);if(!N[h]||W[h])throw typeErrorCreate("root node is forbidden and cannot be sanitized in-place")}}else if(i instanceof o)1===(s=(n=Fe("\x3c!----\x3e")).ownerDocument.importNode(i,!0)).nodeType&&"BODY"===s.nodeName||"HTML"===s.nodeName?n=s:n.appendChild(s);else{if(!te&&!Z&&!X&&-1===i.indexOf("<"))return b&&ie?b.createHTML(i):i;if(!(n=Fe(i)))return te?null:ie?v:""}n&&ee&&Me(n.firstChild);for(var u=Re(se?i:n);l=u.nextNode();)3===l.nodeType&&l===p||Be(l)||(l.content instanceof a&&He(l.content),Ve(l),p=l);if(p=null,se)return i;if(te){if(re)for(c=w.call(n.ownerDocument);n.firstChild;)c.appendChild(n.firstChild);else c=n;return(H.shadowroot||H.shadowrootmod)&&(c=k.call(r,c,!0)),c}var m=X?n.outerHTML:n.innerHTML;return X&&N["!doctype"]&&n.ownerDocument&&n.ownerDocument.doctype&&n.ownerDocument.doctype.name&&regExpTest(DOCTYPE_NAME,n.ownerDocument.doctype.name)&&(m="<!DOCTYPE "+n.ownerDocument.doctype.name+">\n"+m),Z&&(m=stringReplace(m,M," "),m=stringReplace(m,D," "),m=stringReplace(m,F," ")),b&&ie?b.createHTML(m):m},t.setConfig=function(e){Te(e),J=!0},t.clearConfig=function(){Se=null,J=!1},t.isValidAttribute=function(e,t,r){Se||Te({});var i=I(e),a=I(t);return Oe(i,a,r)},t.addHook=function(e,t){"function"==typeof t&&(A[e]=A[e]||[],arrayPush(A[e],t))},t.removeHook=function(e){if(A[e])return arrayPop(A[e])},t.removeHooks=function(e){A[e]&&(A[e]=[])},t.removeAllHooks=function(){A={}},t}var purify=createDOMPurify();const withNotificationBanner=e=>React__default.forwardRef(((t,r)=>jsx(NBComponent,{forwardedRef:r,...t,children:e.length>0?e.map(((e,t)=>{if("text"===e.type){const r=e.otherAttributes,i=purify.sanitize(e.content);return jsx("p",{...r,dangerouslySetInnerHTML:{__html:i}},t)}{const r=e.otherAttributes;return jsx(NotificationBanner.Link,{...r,children:e.content},t)}})):(console.error("[NotificationBannerHOC] Empty data passed"),null)}))),Wrapper$2=styled.div`
    display: flex;
    flex-direction: column;
`,InputContainer=styled.div`
    display: flex;
    flex-direction: row;
    align-self: center;
    gap: 0.5rem;
`,InputField=styled(Input$1)`
    margin-bottom: 0rem !important;
    text-align: center;
    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    input[type="text"] {
        text-align: center;
        -moz-appearance: textfield;
    }
`,CTAButton=styled(Button.Small)`
    margin: 2rem 0rem;
`,OtpInput=({id:e,value:t=[],"data-testid":r,className:i,cooldownDuration:a,actionButtonProps:n,errorMessage:o,numOfInput:s,onChange:l,onCooldownStart:p,onCooldownEnd:c,...d})=>{const{disabled:h,onClick:u,styleType:m="secondary",...f}=n??{},y=useRef([]),g=useRef(l),[_,x]=useState(new Array(s).fill("")),[b,v]=useState(a),[C,S]=useState(new Date);useEffect((()=>(y?.current[0]?.focus(),document.addEventListener("paste",T),()=>document.removeEventListener("paste",T))),[]),useEffect((()=>{if(0!==a){p&&p();const e=A();return()=>e()}}),[C]),useEffect((()=>{g.current=l}),[l]),useEffect((()=>{t.length===s&&x(t)}),[t]);const $=e=>t=>{const r=t.target.value.replace(/[^0-9]/g,"");if(k(r)){const t=[..._];t[e]=r.substring(r.length-1),y.current[e+1]?.focus(),x(t),l&&l(t)}},w=e=>t=>{const{key:r,code:i}=t;if("Backspace"===r||"Backspace"===i){const t=[..._];""!==t[e]?t[e]="":0!==e&&(t[e-1]="",y.current[e-1]?.focus()),x(t),l&&l(t)}},T=e=>{const t=e.clipboardData.getData("text"),r=t.split("");t&&k(t,s)?(x(r),g.current&&g.current(r)):e.preventDefault()},k=(e,t=1)=>!!e&&RegExp(`^[0-9]{${t}}$`).test(e),E=()=>{const e=Date.now(),t=1e3*a;return e<C.valueOf()+t},A=()=>{const e=setInterval((()=>{const t=Date.now(),r=1e3*a,i=Math.ceil((C.valueOf()+r-t)/1e3);v(i),i<=0&&(c&&c(),clearInterval(e))}),1e3);return()=>{clearInterval(e)}},P=(e,t,r)=>r?`${r}-${t}-${e+1}`:`${t}-${e+1}`;return jsxs(Wrapper$2,{id:e,"data-testid":r,className:i,children:[jsx(InputContainer,{children:_.map(((t,i)=>jsx(InputField,{id:P(i,"otp-input",e),"data-testid":P(i,"otp-input",r),ref:e=>y.current[i]=e,type:"text",inputMode:"numeric",value:t,error:!!o,onChange:$(i),onKeyDown:w(i),...d},i)))}),o&&jsx(FormErrorMessage,{children:o}),jsx(CTAButton,{styleType:m,...f,onClick:e=>{x(new Array(s).fill("")),E()||(S(new Date),v(a)),u&&u(e)},disabled:h||E(),children:f.children?f.children:"Resend OTP"+(b?` in ${b} second${b>1?"s":""}`:"")})]})},INDICATOR_BAR_WIDTH_MOBILE=10,INDICATOR_BAR_MARGIN_RIGHT_MOBILE=.5,INDICATOR_BAR_FADE_WIDTH_MOBILE=4,Wrapper$1=styled.div`
    position: relative;
    width: 100%;
    z-index: 1;

    margin: 2rem 0;

    ${MediaQuery.MaxWidth.desktopM} {
        margin: 1.5rem 0;
    }

    ${MediaQuery.MaxWidth.tablet} {
        margin: 1rem 0;
    }
`,Content=styled.nav`
    display: flex;
    flex-basis: 0;
    justify-content: space-between;
    width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 10+ */
    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }
`,Fade=styled.div`
    width: ${INDICATOR_BAR_FADE_WIDTH_MOBILE+"rem"};
    top: 0;
    bottom: 0;
    position: absolute;
    pointer-events: none;

    ${e=>{const{position:t,backgroundColor:r}=e;let i;const a="rgba(255,255,255,0.001)";return i="left"===t?`\n                left: -2%;\n                background-image: linear-gradient(to right, ${r||"white"}, ${a});\n            `:`\n                right: -2%;\n                background-image: linear-gradient(to left, ${r||"white"}, ${a});\n            `,`\n            ${MediaQuery.MaxWidth.tablet} {\n                ${i}\n            }\n        `}};
`;styled(Layout.Content)`
    margin-top: 4.5rem;
    margin-bottom: 3rem;
    display: flex;
    justify-content: space-between;
`;const IndicatorBar=styled.div`
    height: 0.25rem;
    margin-bottom: 0.5rem;
    border-radius: 0.25rem;
    ${e=>{const{highlighted:t}=e;return`\n            background-color: ${(t?Color.Accent.Light[1]:Color.Neutral[6])(e)};\n        `}};

    ${MediaQuery.MaxWidth.mobileL} {
        width: ${INDICATOR_BAR_WIDTH_MOBILE+"rem"};
    }
`,IndicatorTitle=styled(Text.BodySmall)`
    margin-right: 0.5rem;

    ${e=>{const{highlighted:t}=e;return`color: ${(t?Color.Primary:Color.Neutral[4])(e)};`}};
`,Indicator=styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;

    &:not(:last-child) {
        margin-right: ${INDICATOR_BAR_MARGIN_RIGHT_MOBILE+"rem"};
    }
`;function basePropertyOf$1(e){return function(t){return null==e?void 0:e[t]}}var _basePropertyOf=basePropertyOf$1,basePropertyOf=_basePropertyOf,deburredLetters={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"},deburrLetter$1=basePropertyOf(deburredLetters),_deburrLetter=deburrLetter$1,deburrLetter=_deburrLetter,toString$1=toString_1,reLatin=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,rsComboMarksRange$1="\\u0300-\\u036f",reComboHalfMarksRange$1="\\ufe20-\\ufe2f",rsComboSymbolsRange$1="\\u20d0-\\u20ff",rsComboRange$1=rsComboMarksRange$1+reComboHalfMarksRange$1+rsComboSymbolsRange$1,rsCombo$1="["+rsComboRange$1+"]",reComboMark=RegExp(rsCombo$1,"g");function deburr$1(e){return(e=toString$1(e))&&e.replace(reLatin,deburrLetter).replace(reComboMark,"")}var deburr_1=deburr$1,reAsciiWord=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function asciiWords$1(e){return e.match(reAsciiWord)||[]}var _asciiWords=asciiWords$1,reHasUnicodeWord=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function hasUnicodeWord$1(e){return reHasUnicodeWord.test(e)}var _hasUnicodeWord=hasUnicodeWord$1,rsAstralRange="\\ud800-\\udfff",rsComboMarksRange="\\u0300-\\u036f",reComboHalfMarksRange="\\ufe20-\\ufe2f",rsComboSymbolsRange="\\u20d0-\\u20ff",rsComboRange=rsComboMarksRange+reComboHalfMarksRange+rsComboSymbolsRange,rsDingbatRange="\\u2700-\\u27bf",rsLowerRange="a-z\\xdf-\\xf6\\xf8-\\xff",rsMathOpRange="\\xac\\xb1\\xd7\\xf7",rsNonCharRange="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",rsPunctuationRange="\\u2000-\\u206f",rsSpaceRange=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",rsUpperRange="A-Z\\xc0-\\xd6\\xd8-\\xde",rsVarRange="\\ufe0e\\ufe0f",rsBreakRange=rsMathOpRange+rsNonCharRange+rsPunctuationRange+rsSpaceRange,rsApos$1="['’]",rsBreak="["+rsBreakRange+"]",rsCombo="["+rsComboRange+"]",rsDigits="\\d+",rsDingbat="["+rsDingbatRange+"]",rsLower="["+rsLowerRange+"]",rsMisc="[^"+rsAstralRange+rsBreakRange+rsDigits+rsDingbatRange+rsLowerRange+rsUpperRange+"]",rsFitz="\\ud83c[\\udffb-\\udfff]",rsModifier="(?:"+rsCombo+"|"+rsFitz+")",rsNonAstral="[^"+rsAstralRange+"]",rsRegional="(?:\\ud83c[\\udde6-\\uddff]){2}",rsSurrPair="[\\ud800-\\udbff][\\udc00-\\udfff]",rsUpper="["+rsUpperRange+"]",rsZWJ="\\u200d",rsMiscLower="(?:"+rsLower+"|"+rsMisc+")",rsMiscUpper="(?:"+rsUpper+"|"+rsMisc+")",rsOptContrLower="(?:"+rsApos$1+"(?:d|ll|m|re|s|t|ve))?",rsOptContrUpper="(?:"+rsApos$1+"(?:D|LL|M|RE|S|T|VE))?",reOptMod=rsModifier+"?",rsOptVar="["+rsVarRange+"]?",rsOptJoin="(?:"+rsZWJ+"(?:"+[rsNonAstral,rsRegional,rsSurrPair].join("|")+")"+rsOptVar+reOptMod+")*",rsOrdLower="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",rsOrdUpper="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",rsSeq=rsOptVar+reOptMod+rsOptJoin,rsEmoji="(?:"+[rsDingbat,rsRegional,rsSurrPair].join("|")+")"+rsSeq,reUnicodeWord=RegExp([rsUpper+"?"+rsLower+"+"+rsOptContrLower+"(?="+[rsBreak,rsUpper,"$"].join("|")+")",rsMiscUpper+"+"+rsOptContrUpper+"(?="+[rsBreak,rsUpper+rsMiscLower,"$"].join("|")+")",rsUpper+"?"+rsMiscLower+"+"+rsOptContrLower,rsUpper+"+"+rsOptContrUpper,rsOrdUpper,rsOrdLower,rsDigits,rsEmoji].join("|"),"g");function unicodeWords$1(e){return e.match(reUnicodeWord)||[]}var _unicodeWords=unicodeWords$1,asciiWords=_asciiWords,hasUnicodeWord=_hasUnicodeWord,toString=toString_1,unicodeWords=_unicodeWords;function words$1(e,t,r){return e=toString(e),void 0===(t=r?void 0:t)?hasUnicodeWord(e)?unicodeWords(e):asciiWords(e):e.match(t)||[]}var words_1=words$1,arrayReduce=_arrayReduce,deburr=deburr_1,words=words_1,rsApos="['’]",reApos=RegExp(rsApos,"g");function createCompounder$1(e){return function(t){return arrayReduce(words(deburr(t).replace(reApos,"")),e,"")}}var _createCompounder=createCompounder$1,createCompounder=_createCompounder,kebabCase=createCompounder((function(e,t,r){return e+(r?"-":"")+t.toLowerCase()})),kebabCase_1=kebabCase;const ProgressIndicator=({steps:e,currentIndex:t,displayExtractor:r,fadeColor:i,fadePosition:a="both"})=>{const[n,o]=useState(!!a),[s,l]=useState("left"===a||"both"===a),[p,c]=useState("right"===a||"both"===a),d=useRef(null),h=useRef(null);useEffect((()=>{m(),window.addEventListener("resize",m);const e=h.current;return e&&e.addEventListener("scroll",m),()=>{window.removeEventListener("resize",m),e&&e.removeEventListener("scroll",m)}}),[]),useEffect((()=>(u(),window.addEventListener("resize",u),()=>{window.removeEventListener("resize",u)})),[t]);const u=()=>{if(window.innerWidth>MediaWidths.mobileL)return;const e=h.current;if(e){const r=(INDICATOR_BAR_WIDTH_MOBILE+INDICATOR_BAR_MARGIN_RIGHT_MOBILE)*t-INDICATOR_BAR_FADE_WIDTH_MOBILE;e.scrollLeft=16*r}},m=()=>{if(n){o(window.innerWidth<MediaWidths.mobileL);const e=h.current,t=d.current;e&&t&&e.scrollWidth>t.offsetWidth?(o(!0),l(e.scrollLeft>=1),c(e.scrollWidth-e.scrollLeft>t.offsetWidth)):o(!1)}},f=(e,t)=>e<t?"Completed step":e===t?"Current step":"Uncompleted step",y=(e,t)=>kebabCase_1(`${f(e,t)} ${e}`);if(!e.length)return null;return jsxs(Wrapper$1,{ref:d,children:[jsx(Content,{ref:h,children:e.map(((e,i)=>{const a=i<=t,n=i===t?"bold":"regular";return jsxs(Indicator,{"aria-label":f(i,t),id:y(i,t),children:[jsx(IndicatorBar,{highlighted:a}),jsx(IndicatorTitle,{highlighted:a,weight:n,children:(o=e,r?r(o):o.toString())})]},i);var o}))}),n&&jsxs(Fragment,{children:[s&&jsx(Fade,{backgroundColor:i,position:"left"}),p&&jsx(Fade,{backgroundColor:i,position:"right"})]})]})},Container$1=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 1.5rem;
    width: 1.5rem;
    position: relative;
    border-radius: 50%;
    border: 2px solid ${Color.Accent.Light[2]};

    ${e=>{if(e.$disabled)return`\n\t\t\t\tborder: 2px solid ${Color.Neutral[4](e)};\n\t\t\t`}}
`,Input=styled.input`
    position: absolute;
    height: 100%;
    width: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    z-index: 1;

    /* Hide appearance but keep it focusable using keyboard interactions */
    appearance: none;
    background: transparent;
`,Checkmark=styled.div`
    height: 0.75rem;
    width: 0.75rem;
    opacity: ${e=>e.$selected?1:0};
    transition: all 200ms ease-in-out;
    background: ${e=>e.$disabled?Color.Neutral[4](e):Color.Primary(e)};
    border-radius: 50%;
    border: 1px solid transparent;
`,RadioButton=({className:e,checked:t,disabled:r,onChange:i,...a})=>jsxs(Container$1,{$selected:t,$disabled:r,className:e,"data-testid":"radio-button",children:[jsx(Input,{type:"radio","data-testid":"radio-input",onChange:e=>{r||i?.(e)},checked:t,disabled:r,...a}),jsx(Checkmark,{id:"checkmark","data-testid":"checkmark",$disabled:r,$selected:t})]});var starHalf={},StarHalfIcon;Object.defineProperty(starHalf,"__esModule",{value:!0});var e=require$$0;const C=t=>e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:e.jsx("path",{d:"M9.99995 6.792V13.312L12.688 14.896L11.979 11.896L14.292 9.917L11.229 9.646L9.99995 6.792ZM9.99995 15.062L6.58295 17.104C6.43029 17.1873 6.28095 17.222 6.13495 17.208C5.98962 17.1947 5.86129 17.146 5.74995 17.062C5.63862 16.9793 5.55529 16.865 5.49995 16.719C5.44462 16.573 5.43762 16.4237 5.47895 16.271L6.37495 12.458L3.35395 9.896C3.22929 9.78466 3.15295 9.656 3.12495 9.51C3.09695 9.36466 3.10395 9.22233 3.14595 9.083C3.18729 8.94433 3.26362 8.83 3.37495 8.74C3.48629 8.64933 3.62529 8.597 3.79195 8.583L7.74995 8.229L9.31195 4.604C9.38195 4.45133 9.47929 4.33666 9.60395 4.26C9.72929 4.184 9.86129 4.146 9.99995 4.146C10.1386 4.146 10.2706 4.184 10.396 4.26C10.5206 4.33666 10.618 4.45133 10.688 4.604L12.25 8.25L16.208 8.583C16.3746 8.597 16.5136 8.65266 16.625 8.75C16.7363 8.84733 16.8126 8.96533 16.854 9.104C16.896 9.24266 16.8996 9.38166 16.865 9.521C16.8296 9.65966 16.7496 9.78466 16.625 9.896L13.625 12.458L14.521 16.271C14.5623 16.4237 14.5553 16.573 14.5 16.719C14.4446 16.865 14.3613 16.9793 14.25 17.062C14.1386 17.146 14.0103 17.1947 13.865 17.208C13.719 17.222 13.5696 17.1873 13.417 17.104L9.99995 15.062Z",fill:"currentColor"})});C.displayName="StarHalfIcon",StarHalfIcon=starHalf.StarHalfIcon=C;const slideDown=keyframes`
	from {
		opacity: 0;
		transform: translateY(-20%);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
`,SmartAppBannerContainer=styled.div`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    position: fixed;
    margin: 0.5rem 1.25rem;
    ${e=>`top: ${e.$offset}px;`}
    left: 0;
    width: calc(100% - 2.5rem);
    min-height: 5.5rem;
    z-index: 9001;
    background: ${Color.Neutral[8]};
    box-shadow: 0 0.125rem 0.5rem rgba(104, 104, 104, 0.25);
    border-radius: 0.5rem;
    ${e=>{if(e.$isAnimated)return css`
                animation: ${slideDown} 0.3s;
            `}}
`,DismissContainer=styled.div`
    display: flex;
    align-items: center;
    padding: 0.5rem 0.25rem 0.5rem 1rem;
`,DismissButton$1=styled(IconButton)`
    padding: 0;
`,Cross=styled(CrossIcon)`
    color: ${Color.Neutral[1]};
    height: 1.25rem;
    width: 1.25rem;
`,ProceedContainer=styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem 0.5rem 0.25rem;
    cursor: pointer;
`,TextContainer$1=styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: left;
    margin: 0.5rem;
    ${MediaQuery.MaxWidth.mobileM} {
        margin: 0 0.5rem;
    }
`,BannerIcon=styled.img`
    width: 2.65rem;
    height: auto;
    align-self: center;
`,ButtonContainer=styled.div`
    max-width: 30%;
`,StyledButton=styled(Button.Small)`
    padding: 0.5rem;
    height: auto;
    & > span {
        overflow-wrap: anywhere;
        ${TextStyleHelper.getTextStyle("XSmall","semibold")};
    }
`,Title$1=styled(Text.H6)`
    overflow-wrap: anywhere;
    ${MediaQuery.MaxWidth.mobileM} {
        ${TextStyleHelper.getTextStyle("XSmall","semibold")}
    }
`,Description$1=styled(Text.XSmall)`
    overflow-wrap: anywhere;
`,RatingContainer=styled.div`
    margin-top: 0.25rem;
    display: flex;
    align-items: center;
`,starIconStyle=css`
    height: 2rem;
    width: 2rem;
    padding-right: 0.25rem;
    color: #ffc107;
`,Star=styled(StarFillIcon)`
    ${starIconStyle}
`,StarHalf=styled(StarHalfIcon)`
    ${starIconStyle}
`,StarEmpty=styled(StarIcon)`
    ${starIconStyle}
`,APP_ICON="https://assets.life.gov.sg/react-design-system/img/app-icon/app-icon.png",ID="smart-app-banner";function SmartAppBannerComponent(e,t){const{className:r,show:i,href:a,content:n,offset:o=0,icon:s=APP_ICON,animated:l=!1,onDismiss:p,onClick:c}=e,{title:d,message:h,buttonLabel:u,buttonAriaLabel:m,numberOfStars:f}=n,y=e=>{e.stopPropagation(),window.open(a,"_blank","noreferrer"),c?.()};return jsx(Fragment,{children:i&&jsxs(SmartAppBannerContainer,{ref:t,$isAnimated:l,$offset:o,className:r,children:[jsx(DismissContainer,{onClick:p,id:`${ID}-dismiss`,"data-testid":`${ID}-dismiss-container`,children:jsx(DismissButton$1,{"aria-label":"Dismiss",children:jsx(Cross,{})})}),jsxs(ProceedContainer,{onClick:y,id:`${ID}-proceed`,"data-testid":`${ID}-proceed-container`,children:[jsx(BannerIcon,{src:s,alt:"lifesg-app-icon"}),jsxs(TextContainer$1,{children:[jsx(Title$1,{children:d}),jsx(Description$1,{children:h}),(()=>{if(isNaN(f)||f<0)return;const e=[],t=f-Math.floor(f)>=.4;for(let t=0;t<Math.floor(f);t++)e.push(jsx(Star,{},`star${t}`));if(t&&e.push(jsx(StarHalf,{},"halfstar")),e.length<5){const t=5-e.length;for(let r=0;r<t;r++)e.push(jsx(StarEmpty,{},`emptystar${r}`))}return jsx(RatingContainer,{children:e.slice(0,5)})})()]}),jsx(ButtonContainer,{children:jsx(StyledButton,{onClick:y,"aria-label":m,children:u})})]})]})})}const SmartAppBanner=React__default.forwardRef(SmartAppBannerComponent),baseListStyle=e=>`\n\tmargin-bottom: ${e||0}rem;\n`,BASE_MARGIN=3,StyledOrderedList=styled.ol`
    ${e=>baseListStyle(e.bottomMargin)}
    margin-left: ${BASE_MARGIN}rem;

    ${MediaQuery.MaxWidth.tablet} {
        margin-left: 2.5rem;
    }

    // Counter matters
    counter-reset: list;

    li {
        ${e=>TextStyleHelper.getTextStyle(e.size,"regular")}
        position: relative;
        color: ${Color.Neutral[1]};
    }

    ${e=>{const{reversed:t}=e,r=e.counterType||"decimal",i=e.counterSeparator||")";return css`
            li:before {
                content: counter(list, ${r}) "${i}";
                counter-increment: ${t?"list -1":"list"};
                position: absolute;
                left: -2rem;
            }
        `}}

    ${e=>{const{reversed:t,start:r}=e;if(r){return css`
                counter-reset: list ${t?r+1:r-1};
            `}}}

    list-style-position: outside;
    list-style-type: none;

    // nested lists styling
    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }

    ul > li:before {
        content: "";
    }
`,StyledUnorderedList=styled.ul`
    ${e=>baseListStyle(e.bottomMargin)}
    margin-left: 2.5rem;
    list-style-type: ${e=>e.bulletType||"disc"};

    li {
        ${e=>TextStyleHelper.getTextStyle(e.size,"regular")}
        color: ${Color.Neutral[1]};
    }

    counter-reset: list;

    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`,UnorderedList=({size:e="Body",children:t,...r})=>jsx(StyledUnorderedList,{size:e,...r,children:t}),OrderedList=({size:e="Body",children:t,...r})=>jsx(StyledOrderedList,{size:e,...r,children:t}),TextList={Ul:UnorderedList,Ol:OrderedList};var TimeSlotBarHelper;dayjs.extend(customParseFormat),function(e){e.formatHourlyDisplay=e=>dayjs(e,"HH:mm").format("ha"),e.calculateWidth=(e,t,r)=>DateHelper.getTimeDiffInMinutes(e,t)/15*(r/2)}(TimeSlotBarHelper||(TimeSlotBarHelper={}));const CELL_WIDTH=44,Container=styled.div`
    position: relative;
    display: flex;
    align-items: center;
`,ArrowButton=styled(IconButton)`
    z-index: 2;
    position: absolute;
    bottom: 1rem;
    background-color: ${Color.Neutral[8]};
    box-shadow: 0px 2px 8px rgba(104, 104, 104, 0.5);
    border-radius: 50%;
    padding: 0.5rem;
    width: 2rem;
    height: 2rem;

    ${e=>"right"===e.$direction?css`
                  right: 0;
              `:css`
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
`,ArrowIconRight=styled(ChevronRightIcon)`
    width: 1rem;
    height: 1rem;
    color: ${Color.Primary};
`,ArrowIconLeft=styled(ChevronLeftIcon)`
    font-size: 1rem;
    color: ${Color.Primary};
`,TimeSlotBarContainer=styled.div`
    overflow: hidden;
    flex-grow: 1;
    position: relative;
    height: 5rem;
`,TimeMarkerWrapper=styled.div`
    position: relative;
    white-space: nowrap;
    height: 1.25rem;
`,TimeSlotWrapper=styled.div`
    display: flex;
    white-space: nowrap;
`,TimeMarker=styled.div`
    display: inline-block;
    width: ${CELL_WIDTH}px;
    height: ${({isHour:e})=>e?"1.25rem":"0.625rem"};
    position: relative;
    border-left: 1px solid ${Color.Neutral[4]};
`,TimeLabel=styled(Text.XSmall)`
    color: ${Color.Neutral[2]};
    position: absolute;
    bottom: 10%;
    left: 10%;
`,TimeSlot=styled.div`
    position: absolute;
    height: 3.375rem;
    width: ${({$width:e})=>`${e}px`};
    left: ${({$left:e})=>`${e}px`};
    background-color: ${({$bgColor:e})=>e};
    cursor: ${({$clickable:e})=>e?"pointer":"default"};

    ${e=>"stripes"===e.$styleType&&css`
            background: repeating-linear-gradient(
                135deg,
                ${e.$bgColor2||Color.Neutral[5]} 0px,
                ${e.$bgColor2||Color.Neutral[5]} 10px,
                ${e.$bgColor} 10px,
                ${e.$bgColor} 20px
            );
        `}
`,Border=styled.div`
    position: absolute;
    top: 1.25rem;
    height: 3.375rem;
    z-index: 1;
    border-right: 1px solid ${Color.Neutral[4]};
`,CellText=styled(Text.XSmall)`
    color: ${e=>e.$color||Color.Neutral[3](e)};
    position: absolute;
    bottom: 0;
    padding-left: 4px;
    padding-bottom: 4px;
    max-width: ${({$slotWidth:e})=>`calc(${e}px - 8px)`};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`,CELL_DURATION=30,SCROLL_INCREMENT=2.5*CELL_WIDTH,TimeSlotBar=({"data-testid":e,className:t,startTime:r,endTime:i,slots:a,onSlotClick:n,onClick:o,styleAttributes:s})=>{const l=useRef(null),[p,c]=useState(0),[d,h]=useState(0);useEffect((()=>{const e=l.current;return e&&e.addEventListener("scroll",u),()=>{e&&e.removeEventListener("scroll",u)}}),[]);const u=()=>{l.current&&c(l.current.scrollLeft)},m=e=>{l.current&&l.current.scrollBy({left:"left"===e?-SCROLL_INCREMENT:SCROLL_INCREMENT,behavior:"smooth"})};useResizeDetector({onResize:()=>{l.current&&h(l.current.clientWidth)},targetRef:l,refreshMode:"debounce",refreshRate:50});const f=e=>e<=CELL_WIDTH/2,y=t=>{if(e)return`${e}-${t}`};return jsxs(Container,{className:t,children:[jsxs(TimeSlotBarContainer,{"data-testid":e,ref:l,children:[jsx(TimeMarkerWrapper,{"data-testid":y("time-marker-wrapper"),"data-id":"marker-wrapper",children:(()=>{const e=[],t=dayjs(r,"HH:mm"),a=dayjs(i,"HH:mm");for(let r=t;r.isBefore(a);r=r.add(CELL_DURATION,"minute")){const t=0===r.minute();e.push(jsx(TimeMarker,{isHour:t,children:t&&jsx(TimeLabel,{weight:"semibold",children:TimeSlotBarHelper.formatHourlyDisplay(r.format("HH:mm"))})},r.format("HH:mm")))}return e})()}),jsxs(TimeSlotWrapper,{"data-testid":y("time-slot-wrapper"),"data-id":"slot-wrapper",children:[s&&(()=>{const{backgroundColor:e,backgroundColor2:t,styleType:a="default"}=s,n=TimeSlotBarHelper.calculateWidth(r,i,CELL_WIDTH);return jsxs(Fragment,{children:[jsx(Border,{}),jsx(TimeSlot,{"data-testid":y("default-timeslot"),$width:n,$left:0,$styleType:a,$bgColor:e,$bgColor2:t,$clickable:!!o,onClick:o},"default-timeslot"),jsx(Border,{style:{left:`${n}px`}})]})})(),a.map((e=>{const{id:t,startTime:i,endTime:a,label:o,clickable:s=!0,styleAttributes:l}=e,{color:p,styleType:c="default",backgroundColor:d,backgroundColor2:h}=l,u=TimeSlotBarHelper.calculateWidth(i,a,CELL_WIDTH),m=TimeSlotBarHelper.calculateWidth(r,i,CELL_WIDTH);return jsxs(Fragment,{children:[jsx(Border,{style:{left:`${m}px`}}),jsx(TimeSlot,{"data-testid":y(`${t}-timeslot`),$width:u,$left:m,$styleType:c,$bgColor:d,$bgColor2:h,$clickable:s,onClick:()=>s&&n(e),children:o&&jsx(CellText,{$slotWidth:u,$color:p,weight:"semibold",children:f(u)?"...":o})},t),jsx(Border,{style:{left:`${m+u}px`}})]})}))]})]}),jsx(Fragment,{children:p>0&&jsx(ArrowButton,{"data-testid":y("arrow-left"),$direction:"left",focusHighlight:!1,focusOutline:"none",onClick:()=>{m("left")},children:jsx(ArrowIconLeft,{})})}),p+d<TimeSlotBarHelper.calculateWidth(r,i,CELL_WIDTH)?jsx(ArrowButton,{"data-testid":y("arrow-right"),$direction:"right",focusHighlight:!1,focusOutline:"none",onClick:()=>{m("right")},children:jsx(ArrowIconRight,{})}):jsx(Fragment,{})]})},CircleIndicator=styled.div`
    width: 1rem;
    height: 1rem;
    margin-top: 0.5rem;
    border-radius: 50%;
    ${e=>e.$filled?css`
                border: none;
                background-color: ${Color.Accent.Light[1]};
            `:css`
            border: 3.2px solid ${Color.Accent.Light[1]};
            background-color: transparent;
        `}
`,LineIndicator=styled.div`
    width: 0.25rem;
    flex-grow: 1;
    margin-top: 0.5rem;
    border-radius: 2px;
    background-color: ${Color.Accent.Light[1]};
`,TimelineIndicators=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 2rem;
`,TimelineWrapper=styled.div`
    grid-column: ${e=>e.$startCol?e.$startCol:3} / span
        ${e=>e.$colSpan?e.$colSpan:8};

    ${MediaQuery.MaxWidth.tablet} {
        grid-column: span 8;
    }

    ${MediaQuery.MaxWidth.mobileL} {
        grid-column: span 4;
    }
`,TimelineTitle=styled(Text.H3)`
    margin-bottom: 1rem;

    ${MediaQuery.MaxWidth.tablet} {
        margin-bottom: 1.5rem;
    }
`,TimelineItem=styled.div`
    display: flex;
`,TimelineItemContent=styled.div`
    margin-bottom: 2rem;
    width: 100%;
`,TimelineItemTitle=styled(Text.H4)`
    margin-bottom: 0.5rem;
`,TimelinePills=styled(Text.H3)`
    display: flex;
    margin-bottom: 0.5rem;
`,TimelinePill=styled.div`
    border-radius: 1rem;
    padding: 0.125rem 0.5rem;
    margin-right: 0.5rem;

    ${e=>"dark"===e.type?css`
                background-color: ${Color.Neutral[1]};

                & > span {
                    color: ${Color.Neutral[8]};
                }
            `:css`
            background-color: ${Color.Neutral[8]};
            border: 1px solid ${Color.Neutral[5]};

            & > span {
                color: ${Color.Neutral[1]};
            }
        `}
`,Timeline=({items:e,className:t,title:r,startCol:i,colSpan:a,"data-base-indicator-testid":n,"data-testid":o="timeline"})=>{const s=e=>"string"==typeof e?jsx(Text.Body,{className:"timeline-item-content-text",children:e}):jsx(Fragment,{children:e}),l=e=>"string"==typeof e?jsx(TimelineItemTitle,{weight:"semibold",className:"timeline-item-title",children:e}):jsx(Fragment,{children:e}),p=e=>e.slice(0,2).map(((e,t)=>createElement(TimelinePill,{...e,key:`status-pill-${t}`,"data-testid":"status-pill",className:"timeline-status-pill"},jsx(Text.XSmall,{children:e.label}))));return jsxs(TimelineWrapper,{className:t,"data-testid":o,$startCol:i,$colSpan:a,children:[jsx(TimelineTitle,{id:"timeline-title",children:r}),e.map(((e,t)=>{const{title:r,content:i,statuses:a}=e;return jsxs(TimelineItem,{children:[jsxs(TimelineIndicators,{children:[jsx(CircleIndicator,{"data-testid":n?`circleindicator${t+1}_div_${n}`:"circleindicator",$filled:0===t}),jsx(LineIndicator,{})]}),jsxs(TimelineItemContent,{className:"timeline-item-content",children:[l(r),a&&jsx(TimelinePills,{children:p(a)}),s(i)]})]},`timeline-item-${t}`)}))]})},NC=e=>jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:jsx("path",{d:"M9.99999 10.792C10.236 10.792 10.441 10.705 10.615 10.531C10.7883 10.3577 10.875 10.153 10.875 9.91701V6.70801C10.875 6.47201 10.7883 6.27067 10.615 6.10401C10.441 5.93734 10.236 5.85401 9.99999 5.85401C9.76399 5.85401 9.55899 5.94101 9.38499 6.11501C9.21166 6.28834 9.12499 6.49301 9.12499 6.72901V9.93801C9.12499 10.174 9.21166 10.3753 9.38499 10.542C9.55899 10.7087 9.76399 10.792 9.99999 10.792ZM9.99999 14.188C10.236 14.188 10.441 14.108 10.615 13.948C10.7883 13.788 10.875 13.576 10.875 13.312C10.875 13.076 10.7883 12.8713 10.615 12.698C10.441 12.5247 10.236 12.438 9.99999 12.438C9.76399 12.438 9.55899 12.5247 9.38499 12.698C9.21166 12.8713 9.12499 13.076 9.12499 13.312C9.12499 13.576 9.21166 13.788 9.38499 13.948C9.55899 14.108 9.76399 14.188 9.99999 14.188ZM9.99999 18.333C8.84733 18.333 7.76399 18.1143 6.74999 17.677C5.73599 17.2397 4.85399 16.646 4.10399 15.896C3.35399 15.146 2.76033 14.264 2.32299 13.25C1.88566 12.236 1.66699 11.1527 1.66699 10C1.66699 8.84734 1.88566 7.76401 2.32299 6.75001C2.76033 5.73601 3.35399 4.85401 4.10399 4.10401C4.85399 3.35401 5.73599 2.76034 6.74999 2.32301C7.76399 1.88567 8.84733 1.66701 9.99999 1.66701C11.1527 1.66701 12.236 1.88567 13.25 2.32301C14.264 2.76034 15.146 3.35401 15.896 4.10401C16.646 4.85401 17.2397 5.73601 17.677 6.75001C18.1143 7.76401 18.333 8.84734 18.333 10C18.333 11.1527 18.1143 12.236 17.677 13.25C17.2397 14.264 16.646 15.146 15.896 15.896C15.146 16.646 14.264 17.2397 13.25 17.677C12.236 18.1143 11.1527 18.333 9.99999 18.333Z",fill:"currentColor"})});NC.displayName="ExclamationCircleFillIcon";const PC=e=>jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:jsx("path",{d:"M2.354 17.5C2.02067 17.5 1.76734 17.354 1.594 17.062C1.42 16.7707 1.41634 16.4793 1.583 16.188L9.25 2.97899C9.41667 2.68766 9.66667 2.54199 10 2.54199C10.3333 2.54199 10.5833 2.68766 10.75 2.97899L18.417 16.188C18.5837 16.4793 18.58 16.7707 18.406 17.062C18.2327 17.354 17.9793 17.5 17.646 17.5H2.354ZM10.021 8.35399C9.785 8.35399 9.58 8.44099 9.406 8.61499C9.23267 8.78833 9.146 8.99299 9.146 9.22899V11.562C9.146 11.7987 9.23267 12.0037 9.406 12.177C9.58 12.351 9.785 12.438 10.021 12.438C10.257 12.438 10.4617 12.351 10.635 12.177C10.809 12.0037 10.896 11.7987 10.896 11.562V9.22899C10.896 8.99299 10.809 8.78833 10.635 8.61499C10.4617 8.44099 10.257 8.35399 10.021 8.35399ZM10.021 15C10.257 15 10.4617 14.9133 10.635 14.74C10.809 14.566 10.896 14.361 10.896 14.125C10.896 13.889 10.809 13.684 10.635 13.51C10.4617 13.3367 10.257 13.25 10.021 13.25C9.785 13.25 9.58 13.3367 9.406 13.51C9.23267 13.684 9.146 13.889 9.146 14.125C9.146 14.361 9.23267 14.566 9.406 14.74C9.58 14.9133 9.785 15 10.021 15Z",fill:"currentColor"})});PC.displayName="ExclamationTriangleFillIcon";const OC=e=>jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:jsx("path",{d:"M10.0049 1.67001C5.40195 1.67001 1.66992 5.40339 1.66992 10.005C1.66992 14.6093 5.40195 18.34 10.0049 18.34C14.6079 18.34 18.3399 14.6093 18.3399 10.005C18.3399 5.40339 14.6079 1.67001 10.0049 1.67001ZM10.0049 5.36699C10.7845 5.36699 11.4165 5.99897 11.4165 6.77856C11.4165 7.55815 10.7845 8.19013 10.0049 8.19013C9.22533 8.19013 8.59335 7.55815 8.59335 6.77856C8.59335 5.99897 9.22533 5.36699 10.0049 5.36699ZM11.887 13.9036C11.887 14.1264 11.7064 14.3069 11.4837 14.3069H8.52613C8.30341 14.3069 8.12283 14.1264 8.12283 13.9036V13.097C8.12283 12.8743 8.30341 12.6937 8.52613 12.6937H8.92944V10.5428H8.52613C8.30341 10.5428 8.12283 10.3622 8.12283 10.1394V9.33284C8.12283 9.11011 8.30341 8.92953 8.52613 8.92953H10.6771C10.8998 8.92953 11.0804 9.11011 11.0804 9.33284V12.6937H11.4837C11.7064 12.6937 11.887 12.8743 11.887 13.097V13.9036Z",fill:"currentColor"})});OC.displayName="ICircleFillIcon";const me=e=>jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:jsx("path",{d:"M8.87499 11.354L7.12499 9.60401C6.95833 9.43734 6.75333 9.35401 6.50999 9.35401C6.26733 9.35401 6.06266 9.43734 5.89599 9.60401C5.71533 9.78467 5.62499 9.99667 5.62499 10.24C5.62499 10.4827 5.71533 10.6873 5.89599 10.854L8.22899 13.188C8.39566 13.368 8.60066 13.458 8.84399 13.458C9.08666 13.458 9.29833 13.368 9.47899 13.188L14.125 8.54201C14.2917 8.37534 14.375 8.17401 14.375 7.93801C14.375 7.70134 14.2917 7.49967 14.125 7.33301C13.9583 7.16634 13.7533 7.08301 13.51 7.08301C13.2673 7.08301 13.0627 7.16634 12.896 7.33301L8.87499 11.354ZM9.99999 18.333C8.84733 18.333 7.76399 18.1143 6.74999 17.677C5.73599 17.2397 4.85399 16.646 4.10399 15.896C3.35399 15.146 2.76033 14.264 2.32299 13.25C1.88566 12.236 1.66699 11.1527 1.66699 10C1.66699 8.84734 1.88566 7.76401 2.32299 6.75001C2.76033 5.73601 3.35399 4.85401 4.10399 4.10401C4.85399 3.35401 5.73599 2.76034 6.74999 2.32301C7.76399 1.88567 8.84733 1.66701 9.99999 1.66701C11.1527 1.66701 12.236 1.88567 13.25 2.32301C14.264 2.76034 15.146 3.35401 15.896 4.10401C16.646 4.85401 17.2397 5.73601 17.677 6.75001C18.1143 7.76401 18.333 8.84734 18.333 10C18.333 11.1527 18.1143 12.236 17.677 13.25C17.2397 14.264 16.646 15.146 15.896 15.896C15.146 16.646 14.264 17.2397 13.25 17.677C12.236 18.1143 11.1527 18.333 9.99999 18.333Z",fill:"currentColor"})});me.displayName="TickCircleFillIcon";const getValidationColorAttributes=e=>{switch(e.$type){case"success":return Color.Validation.Green;case"warning":return Color.Validation.Orange;case"error":return Color.Validation.Red;case"info":return Color.Validation.Blue;default:return}},Wrapper=styled(animated.div)`
    display: flex;
    position: relative;
    padding: 1rem;
    border-radius: 0.5rem;
    line-height: 0;
    z-index: 10;

    ${e=>css`
            background: ${getValidationColorAttributes(e).Background};
            border: 1px solid ${getValidationColorAttributes(e).Border};
            color: ${getValidationColorAttributes(e).Text};
            svg {
                width: 1.5rem;
                height: 1.5rem;
                margin-right: 0.5rem;
                color: ${getValidationColorAttributes(e).Icon};
            }
        `};
`,TextContainer=styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 2rem 0 0;
    padding-right: 2rem;
    flex: 1;
`,Title=styled(Text.H4)`
    display: flex;

    ${e=>css`
            color: ${getValidationColorAttributes(e).Text};
        `}
`,Description=styled.div`
    display: flex;

    ${e=>css`
            p {
                color: ${getValidationColorAttributes(e).Text};
            }
        `}
`,CloseIcon=styled(CrossIcon)`
    margin-top: 0.2rem;
`,DismissButton=styled(IconButton)`
    padding-top: 0px;
    padding-bottom: 0px;
    margin-left: 5px;
    margin-right: -1rem;
    height: max-content;

    ${e=>css`
            svg {
                color: ${getValidationColorAttributes(e).Text};
                margin-right: -0.5rem !important;
            }
            :hover {
                background: transparent;
            }
        `};
`,Toast=({type:e="success",title:t,label:r,autoDismiss:i,...a})=>{const[n,o]=useState(!1),s=reactResponsive.exports.useMediaQuery({maxWidth:MediaWidths$1.mobileL});useEffect((()=>{o(!0)}),[]),useEffect((()=>{if(i)return setTimeout((()=>{o(!1)}),timer),()=>clearTimeout(timer)}),[i]);const l=useSpring({opacity:n?1:0,transform:n?s?"translateY(0%)":"translateX(0%)":s?"translateY(-1500%)":"translateX(150%)",config:{easing:easings.easeInOutQuart,duration:1e3}});return jsxs(Wrapper,{style:l,$type:e,...a,children:[(()=>{switch(e){case"success":return jsx(me,{});case"warning":return jsx(PC,{});case"error":return jsx(NC,{});case"info":return jsx(OC,{});default:return null}})(),jsxs(TextContainer,{children:[t&&jsx(Title,{$type:e,weight:"semibold",children:t}),r&&jsx(Description,{$type:e,children:jsx(t?Text.BodySmall:Text.Body,{children:r})})]}),jsx(DismissButton,{type:"button",$type:e,onClick:()=>{o(!1)},children:jsx(CloseIcon,{})})]})},timer=4e3,getVisibilityStyle=e=>e?css`
            visibility: "visible";
            opacity: 1;
            transition: ${Transition.Base};
            z-index: 2;
        `:css`
            visibility: "hidden";
            opacity: 0;
            transition: ${Transition.Base};
            z-index: -1;
        `,getBubblePositionStyle=e=>{switch(e){case"left":return css`
                right: calc(100% + 16px);
                width: max-content;
                margin: auto;
                top: 50%;
                -moz-transform: translateY(-50%);
                -webkit-transform: translateY(-50%);
                transform: translateY(-50%);

                ${MediaQuery.MaxWidth.mobileL} {
                    width: auto;
                }
            `;case"right":return css`
                left: calc(100% + 16px);
                width: max-content;
                margin: auto;
                top: 50%;
                -moz-transform: translateY(-50%);
                -webkit-transform: translateY(-50%);
                transform: translateY(-50%);

                ${MediaQuery.MaxWidth.mobileL} {
                    width: auto;
                }
            `;case"bottom":return css`
                top: calc(100% + 16px);
                width: max-content;
                margin: auto;
                left: 50%;
                -moz-transform: translateX(-50%);
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);

                ${MediaQuery.MaxWidth.mobileL} {
                    max-width: 80vw;
                }
            `;default:return css`
                bottom: calc(100% + 16px);
                width: max-content;
                margin: auto;
                left: 50%;
                -moz-transform: translateX(-50%);
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);

                ${MediaQuery.MaxWidth.mobileL} {
                    max-width: 80vw;
                }
            `}},BubbleWrap=styled.div`
    position: absolute;
    max-width: 30rem;
    pointer-events: auto;

    ${e=>getBubblePositionStyle(e.position)}
    ${e=>getVisibilityStyle(e.visible)}
`,Bubble=styled(Card)`
    border-radius: 4px;
    box-shadow: 3px 2px 10px 1px rgba(91, 91, 91, 0.2);
`,Arrow=styled.div`
    position: absolute;
    overflow: hidden;

    ${e=>{switch(e.position){case"top":default:return css`
                    width: 50%;
                    height: 30px;
                    top: 100%;
                    left: 25%;

                    ::before {
                        content: "";
                        position: absolute;
                        background: transparent;
                        left: calc(50% - 3px);
                        width: 2px;
                        height: 8px;
                        box-shadow: 3px 2px 14px 3px rgba(91, 91, 91, 0.5);
                    }

                    ::after {
                        content: "";
                        position: absolute;
                        width: 0;
                        height: 0;
                        top: -10%;
                        left: calc(50% - 10px);
                        border-style: solid;
                        border-width: 16px 8px 0 8px;
                        border-color: ${Color.Neutral[8]} transparent
                            transparent transparent;
                    }
                `;case"right":return css`
                    width: 30px;
                    height: 100%;
                    top: 0;
                    left: -30px;

                    ::before {
                        content: "";
                        position: absolute;
                        background: red;
                        right: 0;
                        top: calc(50% - 3px);
                        width: 8px;
                        height: 2px;
                        box-shadow: 2px 3px 11px 3px rgba(91, 91, 91, 0.5);
                    }

                    ::after {
                        content: "";
                        position: absolute;
                        width: 0;
                        height: 0;
                        top: calc(50% - 10px);
                        right: -10%;
                        border-style: solid;
                        border-width: 8px 16px 8px 0;
                        border-color: transparent ${Color.Neutral[8]}
                            transparent transparent;
                    }
                `;case"left":return css`
                    width: 30px;
                    height: 100%;
                    top: 0;
                    right: -30px;

                    ::before {
                        content: "";
                        position: absolute;
                        background: red;
                        left: 0;
                        top: calc(50% - 3px);
                        width: 8px;
                        height: 2px;
                        box-shadow: 4px 0px 11px 3px rgba(91, 91, 91, 0.5);
                    }

                    ::after {
                        content: "";
                        position: absolute;
                        width: 0;
                        height: 0;
                        top: calc(50% - 10px);
                        left: -10%;
                        border-style: solid;
                        border-width: 8px 0 8px 16px;
                        border-color: transparent transparent transparent
                            ${Color.Neutral[8]};
                    }
                `;case"bottom":return css`
                    width: 50%;
                    height: 30px;
                    bottom: 100%;
                    left: 25%;

                    ::before {
                        content: "";
                        position: absolute;
                        background: transparent;
                        left: calc(50% - 3px);
                        bottom: -10px;
                        width: 2px;
                        height: 8px;
                        box-shadow: 3px -9px 14px 3px rgba(91, 91, 91, 0.5);
                    }

                    ::after {
                        content: "";
                        position: absolute;
                        width: 0;
                        height: 0;
                        bottom: -10%;
                        left: calc(50% - 10px);
                        border-style: solid;
                        border-width: 0 8px 16px 8px;
                        border-color: transparent transparent
                            ${Color.Neutral[8]} transparent;
                    }
                `}}}
`,HOCWrapper=styled.div`
    position: relative;
`,Tooltip=({visible:e,position:t="top",children:r,...i})=>{const a=i["data-testid"]||"tooltip",[n,o]=useState(t),s=useRef(null);useEffect((()=>(p(),window.addEventListener("resize",debounce_1(l,300)),()=>{window.removeEventListener("resize",debounce_1(l,300))})),[]);const l=()=>{p()},p=()=>{if(s.current){const e=s.current.getBoundingClientRect();if(e.x<0)switch(t){case"left":case"top":case"bottom":o("right");break;case"right":o("top")}else if(e.x+e.width>window.outerWidth)switch(t){case"right":case"top":case"bottom":o("left");break;case"left":o("top")}else o(t)}};return jsxs(BubbleWrap,{position:n,"data-testid":a,visible:e,ref:s,...i,children:[jsx(Bubble,{children:"string"==typeof r?jsx(Text.BodySmall,{children:r}):r}),jsx(Arrow,{position:n})]})},withTooltip=(e,t)=>r=>{const{tooltipVisible:i,position:a,...n}=r;return jsxs(HOCWrapper,{children:[jsx(e,{...n}),jsx(Tooltip,{visible:i,position:a,children:t.content})]})};export{Accordion,Alert,BaseTheme,BookingSGTheme,BoxContainer,Breadcrumb,Button,Calendar,Card,Checkbox,Color,DateInput,ErrorDisplay,FeedbackRating,Filter,Footer,Form,IconButton,ImageButton,Input$1 as Input,InputGroup,InputMultiSelect,InputRangeSelect,InputSelect,Layout,LinkList,LoadingDots,LoadingDotsSpinner,LoadingSpinner,Masonry,Masthead,MediaQuery,MediaWidths,Modal,NBComponent,Navbar,NavbarHeight,NavbarMobileHeight,NotificationBanner,OtpInput,Overlay,PhoneNumberInput,Popover,ProgressIndicator,RadioButton,RedirectScope,SmartAppBanner,Text,TextList,TextStyle,TextStyleHelper,Textarea,ThemeContextKeys,TimeRangePicker,TimeSlotBar,Timeline,Timepicker,Toast,Toggle,Tooltip,Transition,withNotificationBanner,withPopover,withTooltip};
//# sourceMappingURL=index.js.map
