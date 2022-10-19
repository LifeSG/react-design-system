import{jsx as e,jsxs as t}from"react/jsx-runtime";import*as n from"react";import r,{cloneElement as i,useRef as o,useState as a,isValidElement as s,createRef as l,PureComponent as u,useEffect as c,useLayoutEffect as d,forwardRef as h,useCallback as p,useContext as f,useMemo as g}from"react";import{findDOMNode as m,unstable_batchedUpdates as y}from"react-dom";import v,{keyframes as b,css as w}from"styled-components";var _,S;!function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r)=>{let i=0;t>n&&(i=Math.floor((t-n)/8));const o=r+i;if(o<e.length){const t=Math.floor(o/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e}}(_||(_={})),function(e){e.getTimeValues=(e,t)=>{const n={hour:"",minute:"",period:"am"};if(!t)return n;try{if("24hr"===e){const r=k(t,e);n.minute=_.padValue(r.minute);const i=parseInt(r.hour);0===Math.floor(i/12)?(n.period="am",n.hour=0===i?"12":_.padValue(i.toString())):(n.period="pm",n.hour=12===i?i.toString():_.padValue((i-12).toString()))}else{const r=k(t,e);n.hour=_.padValue(r.hour),n.minute=_.padValue(r.minute),n.period="am"===r.period.toLowerCase()?"am":"pm"}return n}catch(e){return n}},e.updateMinutes=(e,t)=>{const n=parseInt(e);if(isNaN(n))return"add"===t?_.padValue("0"):"55";const r=Math.floor(n/5),i=(("add"===t?r+1:n%5==0?r-1:r)%12+12)%12;return _.padValue((5*i).toString())},e.updateHours=(e,t)=>{const n=parseInt(e);if(isNaN(n))return"add"===t?_.padValue("1"):"12";const r="add"===t?n+1:n-1;return r<=12&&r>0?_.padValue(r.toString()):13===r?_.padValue("1"):"12"},e.convertTo24HourFormat=e=>{const t=parseInt(e.hour);let n;return n="pm"===e.period?12===t?t.toString():(t+12).toString():12===t?"00":e.hour,`${n}:${e.minute}`},e.convertHourTo12HourFormat=e=>{const t=parseInt(e),n=t%12==0?12..toString():(t%12).toString();return _.padValue(n)},e.formatValue=(e,t)=>{try{const n=k(e,t),r=_.padValue(n.hour);let i=`${r}:${_.padValue(n.minute)}`;return"12hr"===t?(i+=n.period.toLowerCase(),i):i}catch(e){return""}}}(S||(S={}));const $=(e,t)=>{const n=parseInt(e);return"24hr"===t?n>=0&&n<=23:n>=1&&n<=12},x=e=>{const t=parseInt(e);return t>=0&&t<=59},k=(e,t)=>{const n=e.split(":"),r=new Error("Invalid format");if("12hr"===t){if(2!==n.length||4!==n[1].length)throw r;const e=n[1].substring(0,2),o=n[1].substring(2);if(!$(n[0],t)||!x(e)||"am"!==(i=o).toLowerCase()&&"pm"!==i.toLowerCase())throw r;return{hour:n[0],minute:e,period:n[1].substring(2)}}if(2!==n.length)throw r;if(!$(n[0],t)||!x(n[1]))throw r;return{hour:n[0],minute:n[1]};var i};var F=function(e,t){return F=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},F(e,t)};var O=function(){return O=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},O.apply(this,arguments)};var C="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var H=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},P="object"==typeof C&&C&&C.Object===Object&&C,B="object"==typeof self&&self&&self.Object===Object&&self,D=P||B||Function("return this")(),E=D,z=function(){return E.Date.now()},M=/\s/;var A=function(e){for(var t=e.length;t--&&M.test(e.charAt(t)););return t},I=/^\s+/;var N=function(e){return e?e.slice(0,A(e)+1).replace(I,""):e},j=D.Symbol,T=j,R=Object.prototype,V=R.hasOwnProperty,L=R.toString,W=T?T.toStringTag:void 0;var U=function(e){var t=V.call(e,W),n=e[W];try{e[W]=void 0;var r=!0}catch(e){}var i=L.call(e);return r&&(t?e[W]=n:delete e[W]),i},q=Object.prototype.toString;var Q=U,G=function(e){return q.call(e)},X=j?j.toStringTag:void 0;var Z=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":X&&X in Object(e)?Q(e):G(e)},Y=function(e){return null!=e&&"object"==typeof e};var J=N,K=H,ee=function(e){return"symbol"==typeof e||Y(e)&&"[object Symbol]"==Z(e)},te=/^[-+]0x[0-9a-f]+$/i,ne=/^0b[01]+$/i,re=/^0o[0-7]+$/i,ie=parseInt;var oe=H,ae=z,se=function(e){if("number"==typeof e)return e;if(ee(e))return NaN;if(K(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=K(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=J(e);var n=ne.test(e);return n||re.test(e)?ie(e.slice(2),n?2:8):te.test(e)?NaN:+e},le=Math.max,ue=Math.min;var ce=function(e,t,n){var r,i,o,a,s,l,u=0,c=!1,d=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var n=r,o=i;return r=i=void 0,u=t,a=e.apply(o,n)}function f(e){return u=e,s=setTimeout(m,t),c?p(e):a}function g(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-u>=o}function m(){var e=ae();if(g(e))return y(e);s=setTimeout(m,function(e){var n=t-(e-l);return d?ue(n,o-(e-u)):n}(e))}function y(e){return s=void 0,h&&r?p(e):(r=i=void 0,a)}function v(){var e=ae(),n=g(e);if(r=arguments,i=this,l=e,n){if(void 0===s)return f(l);if(d)return clearTimeout(s),s=setTimeout(m,t),p(l)}return void 0===s&&(s=setTimeout(m,t)),a}return t=se(t)||0,oe(n)&&(c=!!n.leading,o=(d="maxWait"in n)?le(se(n.maxWait)||0,t):o,h="trailing"in n?!!n.trailing:h),v.cancel=function(){void 0!==s&&clearTimeout(s),u=0,r=l=i=s=void 0},v.flush=function(){return void 0===s?a:y(ae())},v},de=ce,he=H;var pe=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return he(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),de(e,t,{leading:r,maxWait:t,trailing:i})},fe=function(e,t,n,r){switch(t){case"debounce":return ce(e,n,r);case"throttle":return pe(e,n,r);default:return e}},ge=function(e){return"function"==typeof e},me=function(){return"undefined"==typeof window},ye=function(e){return e instanceof Element||e instanceof HTMLDocument},ve=function(e,t,n,r){return function(i){var o=i.width,a=i.height;t((function(t){return t.width===o&&t.height===a||t.width===o&&!r||t.height===a&&!n?t:(e&&ge(e)&&e(o,a),{width:o,height:a})}))}};!function(e){function t(t){var n=e.call(this,t)||this;n.cancelHandler=function(){n.resizeHandler&&n.resizeHandler.cancel&&(n.resizeHandler.cancel(),n.resizeHandler=null)},n.attachObserver=function(){var e=n.props,t=e.targetRef,r=e.observerOptions;if(!me()){t&&t.current&&(n.targetRef.current=t.current);var i=n.getElement();i&&(n.observableElement&&n.observableElement===i||(n.observableElement=i,n.resizeObserver.observe(i,r)))}},n.getElement=function(){var e=n.props,t=e.querySelector,r=e.targetDomEl;if(me())return null;if(t)return document.querySelector(t);if(r&&ye(r))return r;if(n.targetRef&&ye(n.targetRef.current))return n.targetRef.current;var i=m(n);if(!i)return null;switch(n.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return i;default:return i.parentElement}},n.createResizeHandler=function(e){var t=n.props,r=t.handleWidth,i=void 0===r||r,o=t.handleHeight,a=void 0===o||o,s=t.onResize;if(i||a){var l=ve(s,n.setState.bind(n),i,a);e.forEach((function(e){var t=e&&e.contentRect||{},r=t.width,i=t.height;!n.skipOnMount&&!me()&&l({width:r,height:i}),n.skipOnMount=!1}))}},n.getRenderType=function(){var e=n.props,t=e.render,r=e.children;return ge(t)?"renderProp":ge(r)?"childFunction":s(r)?"child":Array.isArray(r)?"childArray":"parent"};var r=t.skipOnMount,i=t.refreshMode,o=t.refreshRate,a=void 0===o?1e3:o,u=t.refreshOptions;return n.state={width:void 0,height:void 0},n.skipOnMount=r,n.targetRef=l(),n.observableElement=null,me()||(n.resizeHandler=fe(n.createResizeHandler,i,a,u),n.resizeObserver=new window.ResizeObserver(n.resizeHandler)),n}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}F(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){me()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,r=t.render,o=t.children,a=t.nodeType,s=void 0===a?"div":a,l=this.state,u={width:l.width,height:l.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return r&&r(u);case"childFunction":return(e=o)(u);case"child":if((e=o).type&&"string"==typeof e.type){var c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(u,["targetRef"]);return i(e,c)}return i(e,u);case"childArray":return(e=o).map((function(e){return!!e&&i(e,u)}));default:return n.createElement(s,null)}}}(u);var be=me()?c:d;let we=Ae();const _e=e=>De(e,we);let Se=Ae();_e.write=e=>De(e,Se);let $e=Ae();_e.onStart=e=>De(e,$e);let xe=Ae();_e.onFrame=e=>De(e,xe);let ke=Ae();_e.onFinish=e=>De(e,ke);let Fe=[];_e.setTimeout=(e,t)=>{let n=_e.now()+t,r=()=>{let e=Fe.findIndex((e=>e.cancel==r));~e&&Fe.splice(e,1),Pe-=~e?1:0},i={time:n,handler:e,cancel:r};return Fe.splice(Oe(n),0,i),Pe+=1,Ee(),i};let Oe=e=>~(~Fe.findIndex((t=>t.time>e))||~Fe.length);_e.cancel=e=>{$e.delete(e),xe.delete(e),we.delete(e),Se.delete(e),ke.delete(e)},_e.sync=e=>{Be=!0,_e.batchedUpdates(e),Be=!1},_e.throttle=e=>{let t;function n(){try{e(...t)}finally{t=null}}function r(...e){t=e,_e.onStart(n)}return r.handler=e,r.cancel=()=>{$e.delete(n),t=null},r};let Ce="undefined"!=typeof window?window.requestAnimationFrame:()=>{};_e.use=e=>Ce=e,_e.now="undefined"!=typeof performance?()=>performance.now():Date.now,_e.batchedUpdates=e=>e(),_e.catch=console.error,_e.frameLoop="always",_e.advance=()=>{"demand"!==_e.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):Me()};let He=-1,Pe=0,Be=!1;function De(e,t){Be?(t.delete(e),e(0)):(t.add(e),Ee())}function Ee(){He<0&&(He=0,"demand"!==_e.frameLoop&&Ce(ze))}function ze(){~He&&(Ce(ze),_e.batchedUpdates(Me))}function Me(){let e=He;He=_e.now();let t=Oe(He);t&&(Ie(Fe.splice(0,t),(e=>e.handler())),Pe-=t),$e.flush(),we.flush(e?Math.min(64,He-e):16.667),xe.flush(),Se.flush(),ke.flush(),Pe||(He=-1)}function Ae(){let e=new Set,t=e;return{add(n){Pe+=t!=e||e.has(n)?0:1,e.add(n)},delete:n=>(Pe-=t==e&&e.has(n)?1:0,e.delete(n)),flush(n){t.size&&(e=new Set,Pe-=t.size,Ie(t,(t=>t(n)&&e.add(t))),Pe+=e.size,t=e)}}}function Ie(e,t){e.forEach((e=>{try{t(e)}catch(e){_e.catch(e)}}))}function Ne(){}const je={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function Te(e,t){if(je.arr(e)){if(!je.arr(t)||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}return e===t}const Re=(e,t)=>e.forEach(t);function Ve(e,t,n){if(je.arr(e))for(let r=0;r<e.length;r++)t.call(n,e[r],`${r}`);else for(const r in e)e.hasOwnProperty(r)&&t.call(n,e[r],r)}const Le=e=>je.und(e)?[]:je.arr(e)?e:[e];function We(e,t){if(e.size){const n=Array.from(e);e.clear(),Re(n,t)}}const Ue=(e,...t)=>We(e,(e=>e(...t))),qe=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent);let Qe,Ge,Xe=null,Ze=!1,Ye=Ne;var Je=Object.freeze({__proto__:null,get createStringInterpolator(){return Qe},get to(){return Ge},get colors(){return Xe},get skipAnimation(){return Ze},get willAdvance(){return Ye},assign:e=>{e.to&&(Ge=e.to),e.now&&(_e.now=e.now),void 0!==e.colors&&(Xe=e.colors),null!=e.skipAnimation&&(Ze=e.skipAnimation),e.createStringInterpolator&&(Qe=e.createStringInterpolator),e.requestAnimationFrame&&_e.use(e.requestAnimationFrame),e.batchedUpdates&&(_e.batchedUpdates=e.batchedUpdates),e.willAdvance&&(Ye=e.willAdvance),e.frameLoop&&(_e.frameLoop=e.frameLoop)}});const Ke=new Set;let et=[],tt=[],nt=0;const rt={get idle(){return!Ke.size&&!et.length},start(e){nt>e.priority?(Ke.add(e),_e.onStart(it)):(ot(e),_e(st))},advance:st,sort(e){if(nt)_e.onFrame((()=>rt.sort(e)));else{const t=et.indexOf(e);~t&&(et.splice(t,1),at(e))}},clear(){et=[],Ke.clear()}};function it(){Ke.forEach(ot),Ke.clear(),_e(st)}function ot(e){et.includes(e)||at(e)}function at(e){et.splice(function(e,t){const n=e.findIndex(t);return n<0?e.length:n}(et,(t=>t.priority>e.priority)),0,e)}function st(e){const t=tt;for(let n=0;n<et.length;n++){const r=et[n];nt=r.priority,r.idle||(Ye(r),r.advance(e),r.idle||t.push(r))}return nt=0,tt=et,tt.length=0,et=t,et.length>0}const lt="[-+]?\\d*\\.?\\d+";function ut(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}const ct=new RegExp("rgb"+ut(lt,lt,lt)),dt=new RegExp("rgba"+ut(lt,lt,lt,lt)),ht=new RegExp("hsl"+ut(lt,"[-+]?\\d*\\.?\\d+%","[-+]?\\d*\\.?\\d+%")),pt=new RegExp("hsla"+ut(lt,"[-+]?\\d*\\.?\\d+%","[-+]?\\d*\\.?\\d+%",lt)),ft=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,gt=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,mt=/^#([0-9a-fA-F]{6})$/,yt=/^#([0-9a-fA-F]{8})$/;function vt(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function bt(e,t,n){const r=n<.5?n*(1+t):n+t-n*t,i=2*n-r,o=vt(i,r,e+1/3),a=vt(i,r,e),s=vt(i,r,e-1/3);return Math.round(255*o)<<24|Math.round(255*a)<<16|Math.round(255*s)<<8}function wt(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function _t(e){return(parseFloat(e)%360+360)%360/360}function St(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function $t(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function xt(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=mt.exec(e))?parseInt(t[1]+"ff",16)>>>0:Xe&&void 0!==Xe[e]?Xe[e]:(t=ct.exec(e))?(wt(t[1])<<24|wt(t[2])<<16|wt(t[3])<<8|255)>>>0:(t=dt.exec(e))?(wt(t[1])<<24|wt(t[2])<<16|wt(t[3])<<8|St(t[4]))>>>0:(t=ft.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=yt.exec(e))?parseInt(t[1],16)>>>0:(t=gt.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=ht.exec(e))?(255|bt(_t(t[1]),$t(t[2]),$t(t[3])))>>>0:(t=pt.exec(e))?(bt(_t(t[1]),$t(t[2]),$t(t[3]))|St(t[4]))>>>0:null}(e);return null===t?e:(t=t||0,`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)}const kt=(e,t,n)=>{if(je.fun(e))return e;if(je.arr(e))return kt({range:e,output:t,extrapolate:n});if(je.str(e.output[0]))return Qe(e);const r=e,i=r.output,o=r.range||[0,1],a=r.extrapolateLeft||r.extrapolate||"extend",s=r.extrapolateRight||r.extrapolate||"extend",l=r.easing||(e=>e);return e=>{const t=function(e,t){for(var n=1;n<t.length-1&&!(t[n]>=e);++n);return n-1}(e,o);return function(e,t,n,r,i,o,a,s,l){let u=l?l(e):e;if(u<t){if("identity"===a)return u;"clamp"===a&&(u=t)}if(u>n){if("identity"===s)return u;"clamp"===s&&(u=n)}if(r===i)return r;if(t===n)return e<=t?r:i;t===-1/0?u=-u:n===1/0?u-=t:u=(u-t)/(n-t);u=o(u),r===-1/0?u=-u:i===1/0?u+=r:u=u*(i-r)+r;return u}(e,o[t],o[t+1],i[t],i[t+1],l,a,s,r.map)}};function Ft(){return Ft=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ft.apply(this,arguments)}const Ot=Symbol.for("FluidValue.get"),Ct=Symbol.for("FluidValue.observers"),Ht=e=>Boolean(e&&e[Ot]),Pt=e=>e&&e[Ot]?e[Ot]():e,Bt=e=>e[Ct]||null;function Dt(e,t){let n=e[Ct];n&&n.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}class Et{constructor(e){if(this[Ot]=void 0,this[Ct]=void 0,!e&&!(e=this.get))throw Error("Unknown getter");zt(this,e)}}const zt=(e,t)=>It(e,Ot,t);function Mt(e,t){if(e[Ot]){let n=e[Ct];n||It(e,Ct,n=new Set),n.has(t)||(n.add(t),e.observerAdded&&e.observerAdded(n.size,t))}return t}function At(e,t){let n=e[Ct];if(n&&n.has(t)){const r=n.size-1;r?n.delete(t):e[Ct]=null,e.observerRemoved&&e.observerRemoved(r,t)}}const It=(e,t,n)=>Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0}),Nt=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,jt=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,Tt=new RegExp(`(${Nt.source})(%|[a-z]+)`,"i"),Rt=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,Vt=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,Lt=e=>{const[t,n]=Wt(e);if(!t||qe())return e;const r=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(r)return r.trim();if(n&&n.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(n);return t||e}return n&&Vt.test(n)?Lt(n):n||e},Wt=e=>{const t=Vt.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]};let Ut;const qt=(e,t,n,r,i)=>`rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,Qt=e=>{Ut||(Ut=Xe?new RegExp(`(${Object.keys(Xe).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>Pt(e).replace(Vt,Lt).replace(jt,xt).replace(Ut,xt))),n=t.map((e=>e.match(Nt).map(Number))),r=n[0].map(((e,t)=>n.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>kt(Ft({},e,{output:t}))));return e=>{var n;const i=!Tt.test(t[0])&&(null==(n=t.find((e=>Tt.test(e))))?void 0:n.replace(Nt,""));let o=0;return t[0].replace(Nt,(()=>`${r[o++](e)}${i||""}`)).replace(Rt,qt)}},Gt="react-spring: ",Xt=e=>{const t=e;let n=!1;if("function"!=typeof t)throw new TypeError(`${Gt}once requires a function parameter`);return(...e)=>{n||(t(...e),n=!0)}},Zt=Xt(console.warn);const Yt=Xt(console.warn);function Jt(e){return je.str(e)&&("#"==e[0]||/\d/.test(e)||!qe()&&Vt.test(e)||e in(Xe||{}))}const Kt="undefined"!=typeof window&&window.document&&window.document.createElement?n.useLayoutEffect:n.useEffect;function en(){const e=a()[1],t=(()=>{const e=o(!1);return Kt((()=>(e.current=!0,()=>{e.current=!1})),[]),e})();return()=>{t.current&&e(Math.random())}}const tn=e=>c(e,nn),nn=[];function rn(e){const t=o();return c((()=>{t.current=e})),t.current}const on=Symbol.for("Animated:node"),an=e=>e&&e[on],sn=(e,t)=>{return n=e,r=on,i=t,Object.defineProperty(n,r,{value:i,writable:!0,configurable:!0});var n,r,i},ln=e=>e&&e[on]&&e[on].getPayload();class un{constructor(){this.payload=void 0,sn(this,this)}getPayload(){return this.payload||[]}}class cn extends un{constructor(e){super(),this.done=!0,this.elapsedTime=void 0,this.lastPosition=void 0,this.lastVelocity=void 0,this.v0=void 0,this.durationProgress=0,this._value=e,je.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new cn(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return je.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,je.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}}class dn extends cn{constructor(e){super(0),this._string=null,this._toString=void 0,this._toString=kt({output:[e,e]})}static create(e){return new dn(e)}getValue(){let e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(je.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=kt({output:[this.getValue(),e]})),this._value=0,super.reset()}}const hn={dependencies:null};class pn extends un{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return Ve(this.source,((n,r)=>{var i;(i=n)&&i[on]===i?t[r]=n.getValue(e):Ht(n)?t[r]=Pt(n):e||(t[r]=n)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&Re(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return Ve(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){hn.dependencies&&Ht(e)&&hn.dependencies.add(e);const t=ln(e);t&&Re(t,(e=>this.add(e)))}}class fn extends pn{constructor(e){super(e)}static create(e){return new fn(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,n)=>t.setValue(e[n]))).some(Boolean):(super.setValue(e.map(gn)),!0)}}function gn(e){return(Jt(e)?dn:cn).create(e)}function mn(e){const t=an(e);return t?t.constructor:je.arr(e)?fn:Jt(e)?dn:cn}function yn(){return yn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},yn.apply(this,arguments)}const vn=(e,t)=>{const r=!je.fun(e)||e.prototype&&e.prototype.isReactComponent;return h(((i,a)=>{const s=o(null),l=r&&p((e=>{s.current=function(e,t){e&&(je.fun(e)?e(t):e.current=t);return t}(a,e)}),[a]),[u,d]=function(e,t){const n=new Set;hn.dependencies=n,e.style&&(e=yn({},e,{style:t.createAnimatedStyle(e.style)}));return e=new pn(e),hn.dependencies=null,[e,n]}(i,t),h=en(),f=()=>{const e=s.current;if(r&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,u.getValue(!0)))&&h()},g=new bn(f,d),m=o();Kt((()=>(m.current=g,Re(d,(e=>Mt(e,g))),()=>{m.current&&(Re(m.current.deps,(e=>At(e,m.current))),_e.cancel(m.current.update))}))),c(f,[]),tn((()=>()=>{const e=m.current;Re(e.deps,(t=>At(t,e)))}));const y=t.getComponentProps(u.getValue());return n.createElement(e,yn({},y,{ref:l}))}))};class bn{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&_e.write(this.update)}}const wn=Symbol.for("AnimatedComponent"),_n=e=>je.str(e)?e:e&&je.str(e.displayName)?e.displayName:je.fun(e)&&e.name||null;function Sn(){return Sn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Sn.apply(this,arguments)}function $n(e,...t){return je.fun(e)?e(...t):e}const xn=(e,t)=>!0===e||!!(t&&e&&(je.fun(e)?e(t):Le(e).includes(t))),kn=(e,t)=>je.obj(e)?t&&e[t]:e,Fn=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,On=e=>e,Cn=(e,t=On)=>{let n=Hn;e.default&&!0!==e.default&&(e=e.default,n=Object.keys(e));const r={};for(const i of n){const n=t(e[i],i);je.und(n)||(r[i]=n)}return r},Hn=["config","onProps","onStart","onChange","onPause","onResume","onRest"],Pn={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function Bn(e){const t=function(e){const t={};let n=0;if(Ve(e,((e,r)=>{Pn[r]||(t[r]=e,n++)})),n)return t}(e);if(t){const n={to:t};return Ve(e,((e,r)=>r in t||(n[r]=e))),n}return Sn({},e)}function Dn(e){return e=Pt(e),je.arr(e)?e.map(Dn):Jt(e)?Je.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function En(e){for(const t in e)return!0;return!1}function zn(e){return je.fun(e)||je.arr(e)&&je.obj(e[0])}function Mn(e,t){var n;null==(n=e.ref)||n.delete(e),null==t||t.delete(e)}function An(e,t){var n;t&&e.ref!==t&&(null==(n=e.ref)||n.delete(e),t.add(e),e.ref=t)}const In=1.70158,Nn=1.525*In,jn=2*Math.PI/3,Tn=2*Math.PI/4.5,Rn=e=>{const t=7.5625,n=2.75;return e<1/n?t*e*e:e<2/n?t*(e-=1.5/n)*e+.75:e<2.5/n?t*(e-=2.25/n)*e+.9375:t*(e-=2.625/n)*e+.984375},Vn=Sn({},{tension:170,friction:26},{mass:1,damping:1,easing:{linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>2.70158*e*e*e-In*e*e,easeOutBack:e=>1+2.70158*Math.pow(e-1,3)+In*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-Nn)/2:(Math.pow(2*e-2,2)*((Nn+1)*(2*e-2)+Nn)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*jn),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*jn)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*Tn)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*Tn)/2+1,easeInBounce:e=>1-Rn(1-e),easeOutBounce:Rn,easeInOutBounce:e=>e<.5?(1-Rn(1-2*e))/2:(1+Rn(2*e-1))/2}.linear,clamp:!1});class Ln{constructor(){this.tension=void 0,this.friction=void 0,this.frequency=void 0,this.damping=void 0,this.mass=void 0,this.velocity=0,this.restVelocity=void 0,this.precision=void 0,this.progress=void 0,this.duration=void 0,this.easing=void 0,this.clamp=void 0,this.bounce=void 0,this.decay=void 0,this.round=void 0,Object.assign(this,Vn)}}function Wn(e,t){if(je.und(t.decay)){const n=!je.und(t.tension)||!je.und(t.friction);!n&&je.und(t.frequency)&&je.und(t.damping)&&je.und(t.mass)||(e.duration=void 0,e.decay=void 0),n&&(e.frequency=void 0)}else e.duration=void 0}const Un=[];class qn{constructor(){this.changed=!1,this.values=Un,this.toValues=null,this.fromValues=Un,this.to=void 0,this.from=void 0,this.config=new Ln,this.immediate=!1}}function Qn(e,{key:t,props:n,defaultProps:r,state:i,actions:o}){return new Promise(((a,s)=>{var l;let u,c,d=xn(null!=(l=n.cancel)?l:null==r?void 0:r.cancel,t);if(d)f();else{je.und(n.pause)||(i.paused=xn(n.pause,t));let e=null==r?void 0:r.pause;!0!==e&&(e=i.paused||xn(e,t)),u=$n(n.delay||0,t),e?(i.resumeQueue.add(p),o.pause()):(o.resume(),p())}function h(){i.resumeQueue.add(p),i.timeouts.delete(c),c.cancel(),u=c.time-_e.now()}function p(){u>0&&!Je.skipAnimation?(i.delayed=!0,c=_e.setTimeout(f,u),i.pauseQueue.add(h),i.timeouts.add(c)):f()}function f(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(h),i.timeouts.delete(c),e<=(i.cancelId||0)&&(d=!0);try{o.start(Sn({},n,{callId:e,cancel:d}),a)}catch(e){s(e)}}}))}const Gn=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?Yn(e.get()):t.every((e=>e.noop))?Xn(e.get()):Zn(e.get(),t.every((e=>e.finished))),Xn=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),Zn=(e,t,n=!1)=>({value:e,finished:t,cancelled:n}),Yn=e=>({value:e,cancelled:!0,finished:!1});function Jn(e,t,n,r){const{callId:i,parentId:o,onRest:a}=t,{asyncTo:s,promise:l}=n;return o||e!==s||t.reset?n.promise=(async()=>{n.asyncId=i,n.asyncTo=e;const u=Cn(t,((e,t)=>"onRest"===t?void 0:e));let c,d;const h=new Promise(((e,t)=>(c=e,d=t))),p=e=>{const t=i<=(n.cancelId||0)&&Yn(r)||i!==n.asyncId&&Zn(r,!1);if(t)throw e.result=t,d(e),e},f=(e,t)=>{const o=new er,a=new tr;return(async()=>{if(Je.skipAnimation)throw Kn(n),a.result=Zn(r,!1),d(a),a;p(o);const s=je.obj(e)?Sn({},e):Sn({},t,{to:e});s.parentId=i,Ve(u,((e,t)=>{je.und(s[t])&&(s[t]=e)}));const l=await r.start(s);return p(o),n.paused&&await new Promise((e=>{n.resumeQueue.add(e)})),l})()};let g;if(Je.skipAnimation)return Kn(n),Zn(r,!1);try{let t;t=je.arr(e)?(async e=>{for(const t of e)await f(t)})(e):Promise.resolve(e(f,r.stop.bind(r))),await Promise.all([t.then(c),h]),g=Zn(r.get(),!0,!1)}catch(e){if(e instanceof er)g=e.result;else{if(!(e instanceof tr))throw e;g=e.result}}finally{i==n.asyncId&&(n.asyncId=o,n.asyncTo=o?s:void 0,n.promise=o?l:void 0)}return je.fun(a)&&_e.batchedUpdates((()=>{a(g,r,r.item)})),g})():l}function Kn(e,t){We(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}class er extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."),this.result=void 0}}class tr extends Error{constructor(){super("SkipAnimationSignal"),this.result=void 0}}const nr=e=>e instanceof ir;let rr=1;class ir extends Et{constructor(...e){super(...e),this.id=rr++,this.key=void 0,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=an(this);return e&&e.getValue()}to(...e){return Je.to(this,e)}interpolate(...e){return Zt(`${Gt}The "interpolate" function is deprecated in v9 (use "to" instead)`),Je.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){Dt(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||rt.sort(this),Dt(this,{type:"priority",parent:this,priority:e})}}const or=Symbol.for("SpringPhase"),ar=e=>(1&e[or])>0,sr=e=>(2&e[or])>0,lr=e=>(4&e[or])>0,ur=(e,t)=>t?e[or]|=3:e[or]&=-3,cr=(e,t)=>t?e[or]|=4:e[or]&=-5;class dr extends ir{constructor(e,t){if(super(),this.key=void 0,this.animation=new qn,this.queue=void 0,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!je.und(e)||!je.und(t)){const n=je.obj(e)?Sn({},e):Sn({},t,{from:e});je.und(n.default)&&(n.default=!0),this.start(n)}}get idle(){return!(sr(this)||this._state.asyncTo)||lr(this)}get goal(){return Pt(this.animation.to)}get velocity(){const e=an(this);return e instanceof cn?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return ar(this)}get isAnimating(){return sr(this)}get isPaused(){return lr(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,n=!1;const r=this.animation;let{config:i,toValues:o}=r;const a=ln(r.to);!a&&Ht(r.to)&&(o=Le(Pt(r.to))),r.values.forEach(((s,l)=>{if(s.done)return;const u=s.constructor==dn?1:a?a[l].lastPosition:o[l];let c=r.immediate,d=u;if(!c){if(d=s.lastPosition,i.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const n=r.fromValues[l],o=null!=s.v0?s.v0:s.v0=je.arr(i.velocity)?i.velocity[l]:i.velocity;let a;if(je.und(i.duration))if(i.decay){const e=!0===i.decay?.998:i.decay,r=Math.exp(-(1-e)*t);d=n+o/(1-e)*(1-r),c=Math.abs(s.lastPosition-d)<.1,a=o*r}else{a=null==s.lastVelocity?o:s.lastVelocity;const t=i.precision||(n==u?.005:Math.min(1,.001*Math.abs(u-n))),r=i.restVelocity||t/10,l=i.clamp?0:i.bounce,h=!je.und(l),p=n==u?s.v0>0:n<u;let f,g=!1;const m=1,y=Math.ceil(e/m);for(let e=0;e<y&&(f=Math.abs(a)>r,f||(c=Math.abs(u-d)<=t,!c));++e){h&&(g=d==u||d>u==p,g&&(a=-a*l,d=u));a+=(1e-6*-i.tension*(d-u)+.001*-i.friction*a)/i.mass*m,d+=a*m}}else{let r=1;i.duration>0&&(this._memoizedDuration!==i.duration&&(this._memoizedDuration=i.duration,s.durationProgress>0&&(s.elapsedTime=i.duration*s.durationProgress,t=s.elapsedTime+=e)),r=(i.progress||0)+t/this._memoizedDuration,r=r>1?1:r<0?0:r,s.durationProgress=r),d=n+i.easing(r)*(u-n),a=(d-s.lastPosition)/e,c=1==r}s.lastVelocity=a,Number.isNaN(d)&&(console.warn("Got NaN while animating:",this),c=!0)}a&&!a[l].done&&(c=!1),c?s.done=!0:t=!1,s.setValue(d,i.round)&&(n=!0)}));const s=an(this),l=s.getValue();if(t){const e=Pt(r.to);l===e&&!n||i.decay?n&&i.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else n&&this._onChange(l)}set(e){return _e.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(sr(this)){const{to:e,config:t}=this.animation;_e.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let n;return je.und(e)?(n=this.queue||[],this.queue=[]):n=[je.obj(e)?e:Sn({},t,{to:e})],Promise.all(n.map((e=>this._update(e)))).then((e=>Gn(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),Kn(this._state,e&&this._lastCallId),_e.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:n,from:r}=e;n=je.obj(n)?n[t]:n,(null==n||zn(n))&&(n=void 0),r=je.obj(r)?r[t]:r,null==r&&(r=void 0);const i={to:n,from:r};return ar(this)||(e.reverse&&([n,r]=[r,n]),r=Pt(r),je.und(r)?an(this)||this._set(n):this._set(r)),i}_update(e,t){let n=Sn({},e);const{key:r,defaultProps:i}=this;n.default&&Object.assign(i,Cn(n,((e,t)=>/^on/.test(t)?kn(e,r):e))),vr(this,n,"onProps"),br(this,"onProps",n,this);const o=this._prepareNode(n);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const a=this._state;return Qn(++this._lastCallId,{key:r,props:n,defaultProps:i,state:a,actions:{pause:()=>{lr(this)||(cr(this,!0),Ue(a.pauseQueue),br(this,"onPause",Zn(this,hr(this,this.animation.to)),this))},resume:()=>{lr(this)&&(cr(this,!1),sr(this)&&this._resume(),Ue(a.resumeQueue),br(this,"onResume",Zn(this,hr(this,this.animation.to)),this))},start:this._merge.bind(this,o)}}).then((e=>{if(n.loop&&e.finished&&(!t||!e.noop)){const e=pr(n);if(e)return this._update(e,!0)}return e}))}_merge(e,t,n){if(t.cancel)return this.stop(!0),n(Yn(this));const r=!je.und(e.to),i=!je.und(e.from);if(r||i){if(!(t.callId>this._lastToId))return n(Yn(this));this._lastToId=t.callId}const{key:o,defaultProps:a,animation:s}=this,{to:l,from:u}=s;let{to:c=l,from:d=u}=e;!i||r||t.default&&!je.und(c)||(c=d),t.reverse&&([c,d]=[d,c]);const h=!Te(d,u);h&&(s.from=d),d=Pt(d);const p=!Te(c,l);p&&this._focus(c);const f=zn(t.to),{config:g}=s,{decay:m,velocity:y}=g;(r||i)&&(g.velocity=0),t.config&&!f&&function(e,t,n){n&&(Wn(n=Sn({},n),t),t=Sn({},n,t)),Wn(e,t),Object.assign(e,t);for(const t in Vn)null==e[t]&&(e[t]=Vn[t]);let{mass:r,frequency:i,damping:o}=e;je.und(i)||(i<.01&&(i=.01),o<0&&(o=0),e.tension=Math.pow(2*Math.PI/i,2)*r,e.friction=4*Math.PI*o*r/i)}(g,$n(t.config,o),t.config!==a.config?$n(a.config,o):void 0);let v=an(this);if(!v||je.und(c))return n(Zn(this,!0));const b=je.und(t.reset)?i&&!t.default:!je.und(d)&&xn(t.reset,o),w=b?d:this.get(),_=Dn(c),S=je.num(_)||je.arr(_)||Jt(_),$=!f&&(!S||xn(a.immediate||t.immediate,o));if(p){const e=mn(c);if(e!==v.constructor){if(!$)throw Error(`Cannot animate between ${v.constructor.name} and ${e.name}, as the "to" prop suggests`);v=this._set(_)}}const x=v.constructor;let k=Ht(c),F=!1;if(!k){const e=b||!ar(this)&&h;(p||e)&&(F=Te(Dn(w),_),k=!F),(Te(s.immediate,$)||$)&&Te(g.decay,m)&&Te(g.velocity,y)||(k=!0)}if(F&&sr(this)&&(s.changed&&!b?k=!0:k||this._stop(l)),!f&&((k||Ht(l))&&(s.values=v.getPayload(),s.toValues=Ht(c)?null:x==dn?[1]:Le(_)),s.immediate!=$&&(s.immediate=$,$||b||this._set(l)),k)){const{onRest:e}=s;Re(yr,(e=>vr(this,t,e)));const r=Zn(this,hr(this,l));Ue(this._pendingCalls,r),this._pendingCalls.add(n),s.changed&&_e.batchedUpdates((()=>{s.changed=!b,null==e||e(r,this),b?$n(a.onRest,r):null==s.onStart||s.onStart(r,this)}))}b&&this._set(w),f?n(Jn(t.to,t,this._state,this)):k?this._start():sr(this)&&!p?this._pendingCalls.add(n):n(Xn(w))}_focus(e){const t=this.animation;e!==t.to&&(Bt(this)&&this._detach(),t.to=e,Bt(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;Ht(t)&&(Mt(t,this),nr(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;Ht(e)&&At(e,this)}_set(e,t=!0){const n=Pt(e);if(!je.und(n)){const e=an(this);if(!e||!Te(n,e.getValue())){const r=mn(n);e&&e.constructor==r?e.setValue(n):sn(this,r.create(n)),e&&_e.batchedUpdates((()=>{this._onChange(n,t)}))}}return an(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,br(this,"onStart",Zn(this,hr(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),$n(this.animation.onChange,e,this)),$n(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;an(this).reset(Pt(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),sr(this)||(ur(this,!0),lr(this)||this._resume())}_resume(){Je.skipAnimation?this.finish():rt.start(this)}_stop(e,t){if(sr(this)){ur(this,!1);const n=this.animation;Re(n.values,(e=>{e.done=!0})),n.toValues&&(n.onChange=n.onPause=n.onResume=void 0),Dt(this,{type:"idle",parent:this});const r=t?Yn(this.get()):Zn(this.get(),hr(this,null!=e?e:n.to));Ue(this._pendingCalls,r),n.changed&&(n.changed=!1,br(this,"onRest",r,this))}}}function hr(e,t){const n=Dn(t);return Te(Dn(e.get()),n)}function pr(e,t=e.loop,n=e.to){let r=$n(t);if(r){const i=!0!==r&&Bn(r),o=(i||e).reverse,a=!i||i.reset;return fr(Sn({},e,{loop:t,default:!1,pause:void 0,to:!o||zn(n)?n:void 0,from:a?e.from:void 0,reset:a},i))}}function fr(e){const{to:t,from:n}=e=Bn(e),r=new Set;return je.obj(t)&&mr(t,r),je.obj(n)&&mr(n,r),e.keys=r.size?Array.from(r):null,e}function gr(e){const t=fr(e);return je.und(t.default)&&(t.default=Cn(t)),t}function mr(e,t){Ve(e,((e,n)=>null!=e&&t.add(n)))}const yr=["onStart","onRest","onChange","onPause","onResume"];function vr(e,t,n){e.animation[n]=t[n]!==Fn(t,n)?kn(t[n],e.key):void 0}function br(e,t,...n){var r,i,o,a;null==(r=(i=e.animation)[t])||r.call(i,...n),null==(o=(a=e.defaultProps)[t])||o.call(a,...n)}const wr=["onStart","onChange","onRest"];let _r=1;class Sr{constructor(e,t){this.id=_r++,this.springs={},this.queue=[],this.ref=void 0,this._flush=void 0,this._initialProps=void 0,this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._item=void 0,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start(Sn({default:!0},e))}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,n)=>e[n]=t.get())),e}set(e){for(const t in e){const n=e[t];je.und(n)||this.springs[t].set(n)}}update(e){return e&&this.queue.push(fr(e)),this}start(e){let{queue:t}=this;return e?t=Le(e).map(fr):this.queue=[],this._flush?this._flush(this,t):(Hr(this,t),$r(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const n=this.springs;Re(Le(t),(t=>n[t].stop(!!e)))}else Kn(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(je.und(e))this.start({pause:!0});else{const t=this.springs;Re(Le(e),(e=>t[e].pause()))}return this}resume(e){if(je.und(e))this.start({pause:!1});else{const t=this.springs;Re(Le(e),(e=>t[e].resume()))}return this}each(e){Ve(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:n}=this._events,r=this._active.size>0,i=this._changed.size>0;(r&&!this._started||i&&!this._started)&&(this._started=!0,We(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const o=!r&&this._started,a=i||o&&n.size?this.get():null;i&&t.size&&We(t,(([e,t])=>{t.value=a,e(t,this,this._item)})),o&&(this._started=!1,We(n,(([e,t])=>{t.value=a,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}_e.onFrame(this._onFrame)}}function $r(e,t){return Promise.all(t.map((t=>xr(e,t)))).then((t=>Gn(e,t)))}async function xr(e,t,n){const{keys:r,to:i,from:o,loop:a,onRest:s,onResolve:l}=t,u=je.obj(t.default)&&t.default;a&&(t.loop=!1),!1===i&&(t.to=null),!1===o&&(t.from=null);const c=je.arr(i)||je.fun(i)?i:void 0;c?(t.to=void 0,t.onRest=void 0,u&&(u.onRest=void 0)):Re(wr,(n=>{const r=t[n];if(je.fun(r)){const i=e._events[n];t[n]=({finished:e,cancelled:t})=>{const n=i.get(r);n?(e||(n.finished=!1),t&&(n.cancelled=!0)):i.set(r,{value:null,finished:e||!1,cancelled:t||!1})},u&&(u[n]=t[n])}}));const d=e._state;t.pause===!d.paused?(d.paused=t.pause,Ue(t.pause?d.pauseQueue:d.resumeQueue)):d.paused&&(t.pause=!0);const h=(r||Object.keys(e.springs)).map((n=>e.springs[n].start(t))),p=!0===t.cancel||!0===Fn(t,"cancel");(c||p&&d.asyncId)&&h.push(Qn(++e._lastAsyncId,{props:t,state:d,actions:{pause:Ne,resume:Ne,start(t,n){p?(Kn(d,e._lastAsyncId),n(Yn(e))):(t.onRest=s,n(Jn(c,t,d,e)))}}})),d.paused&&await new Promise((e=>{d.resumeQueue.add(e)}));const f=Gn(e,await Promise.all(h));if(a&&f.finished&&(!n||!f.noop)){const n=pr(t,a,i);if(n)return Hr(e,[n]),xr(e,n,!0)}return l&&_e.batchedUpdates((()=>l(f,e,e.item))),f}function kr(e,t){const n=Sn({},e.springs);return t&&Re(Le(t),(e=>{je.und(e.keys)&&(e=fr(e)),je.obj(e.to)||(e=Sn({},e,{to:void 0})),Cr(n,e,(e=>Or(e)))})),Fr(e,n),n}function Fr(e,t){Ve(t,((t,n)=>{e.springs[n]||(e.springs[n]=t,Mt(t,e))}))}function Or(e,t){const n=new dr;return n.key=e,t&&Mt(n,t),n}function Cr(e,t,n){t.keys&&Re(t.keys,(r=>{(e[r]||(e[r]=n(r)))._prepareNode(t)}))}function Hr(e,t){Re(t,(t=>{Cr(e.springs,t,(t=>Or(t,e)))}))}const Pr=["children"],Br=e=>{let{children:t}=e,r=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,Pr);const i=f(Dr),s=r.pause||!!i.pause,l=r.immediate||!!i.immediate;r=function(e,t){const[n]=a((()=>({inputs:t,result:e()}))),r=o(),i=r.current;let s=i;s?Boolean(t&&s.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}(t,s.inputs))||(s={inputs:t,result:e()}):s=n;return c((()=>{r.current=s,i==n&&(n.inputs=n.result=void 0)}),[s]),s.result}((()=>({pause:s,immediate:l})),[s,l]);const{Provider:u}=Dr;return n.createElement(u,{value:r},t)},Dr=(Er=Br,zr={},Object.assign(Er,n.createContext(zr)),Er.Provider._context=Er,Er.Consumer._context=Er,Er);var Er,zr;Br.Provider=Dr.Provider,Br.Consumer=Dr.Consumer;const Mr=()=>{const e=[],t=function(t){Yt(`${Gt}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const r=[];return Re(e,((e,i)=>{if(je.und(t))r.push(e.start());else{const o=n(t,e,i);o&&r.push(e.start(o))}})),r};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const n=e.indexOf(t);~n&&e.splice(n,1)},t.pause=function(){return Re(e,(e=>e.pause(...arguments))),this},t.resume=function(){return Re(e,(e=>e.resume(...arguments))),this},t.set=function(t){Re(e,(e=>e.set(t)))},t.start=function(t){const n=[];return Re(e,((e,r)=>{if(je.und(t))n.push(e.start());else{const i=this._getProps(t,e,r);i&&n.push(e.start(i))}})),n},t.stop=function(){return Re(e,(e=>e.stop(...arguments))),this},t.update=function(t){return Re(e,((e,n)=>e.update(this._getProps(t,e,n)))),this};const n=function(e,t,n){return je.fun(e)?e(n,t):e};return t._getProps=n,t};function Ar(e,t,n){const r=je.fun(t)&&t;r&&!n&&(n=[]);const i=g((()=>r||3==arguments.length?Mr():void 0),[]),a=o(0),s=en(),l=g((()=>({ctrls:[],queue:[],flush(e,t){const n=kr(e,t);return a.current>0&&!l.queue.length&&!Object.keys(n).some((t=>!e.springs[t]))?$r(e,t):new Promise((r=>{Fr(e,n),l.queue.push((()=>{r($r(e,t))})),s()}))}})),[]),u=o([...l.ctrls]),c=[],d=rn(e)||0;function h(e,n){for(let i=e;i<n;i++){const e=u.current[i]||(u.current[i]=new Sr(null,l.flush)),n=r?r(i,e):t[i];n&&(c[i]=gr(n))}}g((()=>{Re(u.current.slice(e,d),(e=>{Mn(e,i),e.stop(!0)})),u.current.length=e,h(d,e)}),[e]),g((()=>{h(0,Math.min(d,e))}),n);const p=u.current.map(((e,t)=>kr(e,c[t]))),m=f(Br),y=rn(m),v=m!==y&&En(m);Kt((()=>{a.current++,l.ctrls=u.current;const{queue:e}=l;e.length&&(l.queue=[],Re(e,(e=>e()))),Re(u.current,((e,t)=>{null==i||i.add(e),v&&e.start({default:m});const n=c[t];n&&(An(e,n.ref),e.ref?e.queue.push(n):e.start(n))}))})),tn((()=>()=>{Re(l.ctrls,(e=>e.stop(!0)))}));const b=p.map((e=>Sn({},e)));return i?[b,i]:b}let Ir;!function(e){e.MOUNT="mount",e.ENTER="enter",e.UPDATE="update",e.LEAVE="leave"}(Ir||(Ir={}));class Nr extends ir{constructor(e,t){super(),this.key=void 0,this.idle=!0,this.calc=void 0,this._active=new Set,this.source=e,this.calc=kt(...t);const n=this._get(),r=mn(n);sn(this,r.create(n))}advance(e){const t=this._get();Te(t,this.get())||(an(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&Tr(this._active)&&Rr(this)}_get(){const e=je.arr(this.source)?this.source.map(Pt):Le(Pt(this.source));return this.calc(...e)}_start(){this.idle&&!Tr(this._active)&&(this.idle=!1,Re(ln(this),(e=>{e.done=!1})),Je.skipAnimation?(_e.batchedUpdates((()=>this.advance())),Rr(this)):rt.start(this))}_attach(){let e=1;Re(Le(this.source),(t=>{Ht(t)&&Mt(t,this),nr(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){Re(Le(this.source),(e=>{Ht(e)&&At(e,this)})),this._active.clear(),Rr(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=Le(this.source).reduce(((e,t)=>Math.max(e,(nr(t)?t.priority:0)+1)),0))}}function jr(e){return!1!==e.idle}function Tr(e){return!e.size||Array.from(e).every(jr)}function Rr(e){e.idle||(e.idle=!0,Re(ln(e),(e=>{e.done=!0})),Dt(e,{type:"idle",parent:e}))}function Vr(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}Je.assign({createStringInterpolator:Qt,to:(e,t)=>new Nr(e,t)});const Lr=["style","children","scrollTop","scrollLeft"],Wr=/^--/;function Ur(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||Wr.test(e)||Qr.hasOwnProperty(e)&&Qr[e]?(""+t).trim():t+"px"}const qr={};let Qr={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0};const Gr=["Webkit","Ms","Moz","O"];Qr=Object.keys(Qr).reduce(((e,t)=>(Gr.forEach((n=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(n,t)]=e[t])),e)),Qr);const Xr=["x","y","z"],Zr=/^(matrix|translate|scale|rotate|skew)/,Yr=/^(translate)/,Jr=/^(rotate|skew)/,Kr=(e,t)=>je.num(e)&&0!==e?e+t:e,ei=(e,t)=>je.arr(e)?e.every((e=>ei(e,t))):je.num(e)?e===t:parseFloat(e)===t;class ti extends pn{constructor(e){let{x:t,y:n,z:r}=e,i=Vr(e,Xr);const o=[],a=[];(t||n||r)&&(o.push([t||0,n||0,r||0]),a.push((e=>[`translate3d(${e.map((e=>Kr(e,"px"))).join(",")})`,ei(e,0)]))),Ve(i,((e,t)=>{if("transform"===t)o.push([e||""]),a.push((e=>[e,""===e]));else if(Zr.test(t)){if(delete i[t],je.und(e))return;const n=Yr.test(t)?"px":Jr.test(t)?"deg":"";o.push(Le(e)),a.push("rotate3d"===t?([e,t,r,i])=>[`rotate3d(${e},${t},${r},${Kr(i,n)})`,ei(i,0)]:e=>[`${t}(${e.map((e=>Kr(e,n))).join(",")})`,ei(e,t.startsWith("scale")?1:0)])}})),o.length&&(i.transform=new ni(o,a)),super(i)}}class ni extends Et{constructor(e,t){super(),this._value=null,this.inputs=e,this.transforms=t}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return Re(this.inputs,((n,r)=>{const i=Pt(n[0]),[o,a]=this.transforms[r](je.arr(i)?i:n.map(Pt));e+=" "+o,t=t&&a})),t?"none":e}observerAdded(e){1==e&&Re(this.inputs,(e=>Re(e,(e=>Ht(e)&&Mt(e,this)))))}observerRemoved(e){0==e&&Re(this.inputs,(e=>Re(e,(e=>Ht(e)&&At(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),Dt(this,e)}}const ri=["scrollTop","scrollLeft"];Je.assign({batchedUpdates:y,createStringInterpolator:Qt,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});const ii=((e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:n=(e=>new pn(e)),getComponentProps:r=(e=>e)}={})=>{const i={applyAnimatedValues:t,createAnimatedStyle:n,getComponentProps:r},o=e=>{const t=_n(e)||"Anonymous";return(e=je.str(e)?o[e]||(o[e]=vn(e,i)):e[wn]||(e[wn]=vn(e,i))).displayName=`Animated(${t})`,e};return Ve(e,((t,n)=>{je.arr(e)&&(n=_n(t)),o[n]=o(t)})),{animated:o}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const n="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,r=t,{style:i,children:o,scrollTop:a,scrollLeft:s}=r,l=Vr(r,Lr),u=Object.values(l),c=Object.keys(l).map((t=>n||e.hasAttribute(t)?t:qr[t]||(qr[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==o&&(e.textContent=o);for(let t in i)if(i.hasOwnProperty(t)){const n=Ur(t,i[t]);Wr.test(t)?e.style.setProperty(t,n):e.style[t]=n}c.forEach(((t,n)=>{e.setAttribute(t,u[n])})),void 0!==a&&(e.scrollTop=a),void 0!==s&&(e.scrollLeft=s)},createAnimatedStyle:e=>new ti(e),getComponentProps:e=>Vr(e,ri)}),oi=ii.animated;var ai="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},si=Array.isArray,li="object"==typeof ai&&ai&&ai.Object===Object&&ai,ui="object"==typeof self&&self&&self.Object===Object&&self,ci=li||ui||Function("return this")(),di=ci.Symbol,hi=di,pi=Object.prototype,fi=pi.hasOwnProperty,gi=pi.toString,mi=hi?hi.toStringTag:void 0;var yi=function(e){var t=fi.call(e,mi),n=e[mi];try{e[mi]=void 0;var r=!0}catch(e){}var i=gi.call(e);return r&&(t?e[mi]=n:delete e[mi]),i},vi=Object.prototype.toString;var bi=yi,wi=function(e){return vi.call(e)},_i=di?di.toStringTag:void 0;var Si=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":_i&&_i in Object(e)?bi(e):wi(e)};var $i=Si,xi=function(e){return null!=e&&"object"==typeof e};var ki=function(e){return"symbol"==typeof e||xi(e)&&"[object Symbol]"==$i(e)},Fi=si,Oi=ki,Ci=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Hi=/^\w*$/;var Pi=function(e,t){if(Fi(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!Oi(e))||(Hi.test(e)||!Ci.test(e)||null!=t&&e in Object(t))};var Bi=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Di=Si,Ei=Bi;var zi,Mi=function(e){if(!Ei(e))return!1;var t=Di(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},Ai=ci["__core-js_shared__"],Ii=(zi=/[^.]+$/.exec(Ai&&Ai.keys&&Ai.keys.IE_PROTO||""))?"Symbol(src)_1."+zi:"";var Ni=function(e){return!!Ii&&Ii in e},ji=Function.prototype.toString;var Ti=Mi,Ri=Ni,Vi=Bi,Li=function(e){if(null!=e){try{return ji.call(e)}catch(e){}try{return e+""}catch(e){}}return""},Wi=/^\[object .+?Constructor\]$/,Ui=Function.prototype,qi=Object.prototype,Qi=Ui.toString,Gi=qi.hasOwnProperty,Xi=RegExp("^"+Qi.call(Gi).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Zi=function(e){return!(!Vi(e)||Ri(e))&&(Ti(e)?Xi:Wi).test(Li(e))},Yi=function(e,t){return null==e?void 0:e[t]};var Ji=function(e,t){var n=Yi(e,t);return Zi(n)?n:void 0},Ki=Ji(Object,"create"),eo=Ki;var to=function(){this.__data__=eo?eo(null):{},this.size=0};var no=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},ro=Ki,io=Object.prototype.hasOwnProperty;var oo=function(e){var t=this.__data__;if(ro){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return io.call(t,e)?t[e]:void 0},ao=Ki,so=Object.prototype.hasOwnProperty;var lo=Ki;var uo=to,co=no,ho=oo,po=function(e){var t=this.__data__;return ao?void 0!==t[e]:so.call(t,e)},fo=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=lo&&void 0===t?"__lodash_hash_undefined__":t,this};function go(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}go.prototype.clear=uo,go.prototype.delete=co,go.prototype.get=ho,go.prototype.has=po,go.prototype.set=fo;var mo=go;var yo=function(){this.__data__=[],this.size=0};var vo=function(e,t){return e===t||e!=e&&t!=t};var bo=function(e,t){for(var n=e.length;n--;)if(vo(e[n][0],t))return n;return-1},wo=bo,_o=Array.prototype.splice;var So=bo;var $o=bo;var xo=bo;var ko=yo,Fo=function(e){var t=this.__data__,n=wo(t,e);return!(n<0)&&(n==t.length-1?t.pop():_o.call(t,n,1),--this.size,!0)},Oo=function(e){var t=this.__data__,n=So(t,e);return n<0?void 0:t[n][1]},Co=function(e){return $o(this.__data__,e)>-1},Ho=function(e,t){var n=this.__data__,r=xo(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function Po(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Po.prototype.clear=ko,Po.prototype.delete=Fo,Po.prototype.get=Oo,Po.prototype.has=Co,Po.prototype.set=Ho;var Bo=Po,Do=Ji(ci,"Map"),Eo=mo,zo=Bo,Mo=Do;var Ao=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Io=function(e,t){var n=e.__data__;return Ao(t)?n["string"==typeof t?"string":"hash"]:n.map},No=Io;var jo=Io;var To=Io;var Ro=Io;var Vo=function(){this.size=0,this.__data__={hash:new Eo,map:new(Mo||zo),string:new Eo}},Lo=function(e){var t=No(this,e).delete(e);return this.size-=t?1:0,t},Wo=function(e){return jo(this,e).get(e)},Uo=function(e){return To(this,e).has(e)},qo=function(e,t){var n=Ro(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function Qo(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Qo.prototype.clear=Vo,Qo.prototype.delete=Lo,Qo.prototype.get=Wo,Qo.prototype.has=Uo,Qo.prototype.set=qo;var Go=Qo;function Xo(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(Xo.Cache||Go),n}Xo.Cache=Go;var Zo=Xo;var Yo=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Jo=/\\(\\)?/g,Ko=function(e){var t=Zo(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Yo,(function(e,n,r,i){t.push(r?i.replace(Jo,"$1"):n||e)})),t}));var ea=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},ta=si,na=ki,ra=di?di.prototype:void 0,ia=ra?ra.toString:void 0;var oa=function e(t){if("string"==typeof t)return t;if(ta(t))return ea(t,e)+"";if(na(t))return ia?ia.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n},aa=oa;var sa=si,la=Pi,ua=Ko,ca=function(e){return null==e?"":aa(e)};var da=ki;var ha=function(e,t){return sa(e)?e:la(e,t)?[e]:ua(ca(e))},pa=function(e){if("string"==typeof e||da(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var fa=function(e,t){for(var n=0,r=(t=ha(t,e)).length;null!=e&&n<r;)e=e[pa(t[n++])];return n&&n==r?e:void 0};var ga=function(e,t,n){var r=null==e?void 0:fa(e,t);return void 0===r?n:r};const ma=(e,t,n)=>t?ga(n,t)||ga(e,t):n||e,ya=(e,t)=>{const n=t||e.defaultValue;return ga(e.collections,n)};var va;!function(e){e.colorScheme="colorScheme",e.layout="layout",e.textStyleScheme="textStyleScheme"}(va||(va={}));const ba={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#465A88",2:"#556D99",3:"#8D8DBF"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#9F82D9",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"}}}},defaultValue:"base"},wa=e=>t=>{const n=t.theme,r=ya(ba,n[va.colorScheme]);return n.options&&n.options.color?ma(r,e,n.options.color):ma(r,e)},_a={Brand:{1:wa("Brand.1"),2:wa("Brand.2"),3:wa("Brand.3"),4:wa("Brand.4"),5:wa("Brand.5"),6:wa("Brand.6")},Primary:wa("Primary"),PrimaryDark:wa("PrimaryDark"),Secondary:wa("Secondary"),Accent:{Light:{1:wa("Accent.Light.1"),2:wa("Accent.Light.2"),3:wa("Accent.Light.3"),4:wa("Accent.Light.4"),5:wa("Accent.Light.5"),6:wa("Accent.Light.6")},Dark:{1:wa("Accent.Dark.1"),2:wa("Accent.Dark.2"),3:wa("Accent.Dark.3")}},Neutral:{1:wa("Neutral.1"),2:wa("Neutral.2"),3:wa("Neutral.3"),4:wa("Neutral.4"),5:wa("Neutral.5"),6:wa("Neutral.6"),7:wa("Neutral.7"),8:wa("Neutral.8")},Validation:{Green:{Text:wa("Validation.Green.Text"),Icon:wa("Validation.Green.Icon"),Border:wa("Validation.Green.Border"),Background:wa("Validation.Green.Background")},Orange:{Text:wa("Validation.Orange.Text"),Icon:wa("Validation.Orange.Icon"),Border:wa("Validation.Orange.Border"),Background:wa("Validation.Orange.Background"),Badge:wa("Validation.Orange.Badge")},Red:{Text:wa("Validation.Red.Text"),Icon:wa("Validation.Red.Icon"),Border:wa("Validation.Red.Border"),Background:wa("Validation.Red.Background")}}},Sa=v.svg`
    height: 1rem;
    width: 1rem;
    vertical-align: text-top;
    color: ${_a.Primary};
`,$a=t=>e(Sa,{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",viewBox:"0 0 16 16",...t,children:e("path",{fill:"currentColor",d:"M8.706 14.603l6.075-6.075c.294-.29.294-.765 0-1.06L8.706 1.398c-.29-.294-.765-.294-1.06 0l-.693.694c-.3.297-.294.78.013 1.072L10.73 6.75H1.75c-.416 0-.75.334-.75.75v1c0 .416.334.75.75.75h8.981l-3.765 3.587c-.304.291-.31.775-.013 1.072l.694.694c.29.294.765.294 1.06 0z",transform:"translate(-2384.000000, -760.000000) translate(2253.000000, 692.000000) translate(16.000000, 64.000000) translate(115.000000, 4.000000) translate(0.000000, 0.000000)"})}),xa=t=>e(Sa,{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:e("path",{fill:"currentColor",d:"M23.8785 5.13337C24.0563 4.95554 24.3408 4.95554 24.5186 5.13337L26.8666 7.48184C27.0444 7.65572 27.0444 7.9442 26.8666 8.11808L19.3082 15.6819C19.1304 15.8558 19.1304 16.1442 19.3082 16.3221L26.8666 23.8819C27.0444 24.0558 27.0444 24.3443 26.8666 24.5182L24.5186 26.8666C24.3408 27.0445 24.0563 27.0445 23.8785 26.8666L16.32 19.3068C16.1422 19.129 15.8578 19.129 15.68 19.3068L8.12148 26.8666C7.94368 27.0445 7.65919 27.0445 7.48139 26.8666L5.13335 24.5182C4.95555 24.3443 4.95555 24.0558 5.13335 23.8819L12.6918 16.3221C12.8696 16.1442 12.8696 15.8558 12.6918 15.6819L5.13335 8.11808C4.95555 7.9442 4.95555 7.65572 5.13335 7.48184L7.48139 5.13337C7.65919 4.95554 7.94368 4.95554 8.12148 5.13337L15.68 12.6932C15.8578 12.871 16.1422 12.871 16.32 12.6932L23.8785 5.13337Z"})}),ka=t=>e(Sa,{width:"1rem",height:"1rem",viewBox:"0 0 40 40",xmlns:"http://www.w3.org/2000/svg",...t,children:e("path",{fill:"currentColor",id:"path",d:"M20\n\t\t8.639c-.934\n\t\t0-1.742.342-2.43 1.03-.684.684-1.03 1.495-1.03 2.429 0 .931.346 1.742 1.03 2.426.688.688 1.496 1.03 2.43 1.03.931 0 1.742-.342 2.43-1.03.684-.684 1.026-1.495 1.026-2.426 0-.934-.342-1.745-1.026-2.43-.688-.687-1.499-1.03-2.43-1.03m4.61 20.91v-1.976a.959.959 0 0 0-.287-.7.959.959 0 0 0-.7-.286h-.99v-8.232a.954.954 0 0 0-.287-.7.945.945 0 0 0-.7-.29h-5.269a.95.95 0 0 0-.7.29.954.954 0 0 0-.286.7v1.976c0 .271.095.506.286.7a.959.959 0 0 0 .7.287h.99v5.269h-.99a.959.959 0 0 0-.7.286.959.959 0 0 0-.286.7v1.977c0 .274.095.505.286.7a.959.959 0 0 0 .7.286h7.246a.959.959 0 0 0 .7-.287.959.959 0 0 0 .286-.7M20 2.5c3.15 0 6.068.788 8.75 2.365a17.67 17.67 0 0 1 6.385 6.386C36.71 13.933 37.5 16.848 37.5 20c0 3.15-.79 6.068-2.365 8.751a17.71 17.71 0 0 1-6.385 6.385C26.068 36.712 23.15 37.5 20 37.5c-3.153 0-6.068-.788-8.75-2.363a17.71 17.71 0 0 1-6.385-6.385c-1.575-2.683-2.365-5.6-2.365-8.75 0-3.154.79-6.069 2.365-8.751a17.67 17.67 0 0 1 6.385-6.386C13.932 3.288 16.847 2.5 20 2.5",fillRule:"nonzero"})}),Fa=t=>e(Sa,{xmlns:"http://www.w3.org/2000/svg",width:"2rem",height:"2rem",viewBox:"0 0 64 64",id:"play-icon",...t,children:e("path",{fill:"currentColor",fillRule:"nonzero",d:"M52.762 37.237 20.474 53.38A5.856 5.856 0 0 1 12 48.143V15.856a5.856 5.856 0 0 1 8.474-5.238l32.288 16.144a5.856 5.856 0 0 1 0 10.475z"})}),Oa=t=>e(Sa,{xmlns:"http://www.w3.org/2000/svg",width:"2rem",height:"2rem",viewBox:"0 0 32 32",...t,children:e("path",{id:"path",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd",d:"M7.60986 7.60986C5.86994 9.34977 5 11.445 5 13.8956C5 16.3462 5.86994 18.4414 7.60986 20.1813C9.34977 21.9212 11.445 22.7911 13.8956 22.7911C15.6355 22.7911 17.2345 22.3133 18.6926 21.3576L24.2063 26.8713C24.3044 26.9571 24.4146 27 24.5372 27C24.6597 27 24.77 26.9571 24.868 26.8713L26.8713 24.868C26.9571 24.77 27 24.6597 27 24.5372C27 24.4146 26.9571 24.3044 26.8713 24.2063L21.3576 18.6926C22.3133 17.2345 22.7911 15.6355 22.7911 13.8956C22.7911 11.445 21.9212 9.34977 20.1813 7.60986C18.4414 5.86994 16.3462 5 13.8956 5C11.445 5 9.34977 5.86994 7.60986 7.60986ZM9.59484 18.178C8.4063 16.9894 7.81205 15.562 7.81205 13.8956C7.81205 12.2292 8.4063 10.8017 9.59484 9.61321C10.7834 8.42468 12.2169 7.83042 13.8956 7.83042C15.5742 7.83042 17.0047 8.42162 18.1872 9.60403C19.3696 10.7864 19.9608 12.2169 19.9608 13.8956C19.9608 15.5742 19.3696 17.0047 18.1872 18.1872C17.0047 19.3696 15.5742 19.9608 13.8956 19.9608C12.2169 19.9608 10.7834 19.3665 9.59484 18.178Z"})}),Ca=({type:t,...n})=>{switch(t){case"arrow-right":return e($a,{...n});case"info":return e(ka,{...n});case"cross":return e(xa,{...n});case"play":return e(Fa,{...n});case"search":return e(Oa,{...n});default:{const r=`sgds-icon sgds-icon-${t}`,i=n.className?`${r} ${n.className}`:r;return e(Ha,{...n,className:i})}}},Ha=v.span`
    font-size: 1rem;
`,Pa={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Ba=e=>Object.keys(Pa).reduce(((t,n)=>{const r=Pa[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),Da=Ba("max-width"),Ea=(Ba("min-width"),v.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`),za=b`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Ma=v.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||_a.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${za} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Aa=v(Ma)`
    animation-delay: -0.45s;
`,Ia=v(Ma)`
    animation-delay: -0.3s;
`,Na=v(Ma)`
    animation-delay: -0.15s;
`,ja={Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},Ta={collections:{base:{D1:{fontFamily:ja.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:ja.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:ja.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:ja.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:ja.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:ja.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:ja.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:ja.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:ja.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:ja.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:ja.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:ja.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:ja.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:ja.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}}},defaultValue:"base"},Ra=e=>t=>{const n=t.theme,r=ya(Ta,n[va.textStyleScheme]);return n.options&&n.options.textStyle?ma(r,e,n.options.textStyle):ma(r,e)},Va={D1:{fontFamily:Ra("D1.fontFamily"),fontSize:Ra("D1.fontSize"),fontWeight:Ra("D1.fontWeight"),lineHeight:Ra("D1.lineHeight"),letterSpacing:Ra("D1.letterSpacing")},D2:{fontFamily:Ra("D2.fontFamily"),fontSize:Ra("D2.fontSize"),fontWeight:Ra("D2.fontWeight"),lineHeight:Ra("D2.lineHeight"),letterSpacing:Ra("D2.letterSpacing")},D3:{fontFamily:Ra("D3.fontFamily"),fontSize:Ra("D3.fontSize"),fontWeight:Ra("D3.fontWeight"),lineHeight:Ra("D3.lineHeight"),letterSpacing:Ra("D3.letterSpacing")},D4:{fontFamily:Ra("D4.fontFamily"),fontSize:Ra("D4.fontSize"),fontWeight:Ra("D4.fontWeight"),lineHeight:Ra("D4.lineHeight"),letterSpacing:Ra("D4.letterSpacing")},DBody:{fontFamily:Ra("DBody.fontFamily"),fontSize:Ra("DBody.fontSize"),fontWeight:Ra("DBody.fontWeight"),lineHeight:Ra("DBody.lineHeight"),letterSpacing:Ra("DBody.letterSpacing")},H1:{fontFamily:Ra("H1.fontFamily"),fontSize:Ra("H1.fontSize"),fontWeight:Ra("H1.fontWeight"),lineHeight:Ra("H1.lineHeight"),letterSpacing:Ra("H1.letterSpacing")},H2:{fontFamily:Ra("H2.fontFamily"),fontSize:Ra("H2.fontSize"),fontWeight:Ra("H2.fontWeight"),lineHeight:Ra("H2.lineHeight"),letterSpacing:Ra("H2.letterSpacing")},H3:{fontFamily:Ra("H3.fontFamily"),fontSize:Ra("H3.fontSize"),fontWeight:Ra("H3.fontWeight"),lineHeight:Ra("H3.lineHeight"),letterSpacing:Ra("H3.letterSpacing")},H4:{fontFamily:Ra("H4.fontFamily"),fontSize:Ra("H4.fontSize"),fontWeight:Ra("H4.fontWeight"),lineHeight:Ra("H4.lineHeight"),letterSpacing:Ra("H4.letterSpacing")},H5:{fontFamily:Ra("H5.fontFamily"),fontSize:Ra("H5.fontSize"),fontWeight:Ra("H5.fontWeight"),lineHeight:Ra("H5.lineHeight"),letterSpacing:Ra("H5.letterSpacing")},H6:{fontFamily:Ra("H6.fontFamily"),fontSize:Ra("H6.fontSize"),fontWeight:Ra("H6.fontWeight"),lineHeight:Ra("H6.lineHeight"),letterSpacing:Ra("H6.letterSpacing")},Body:{fontFamily:Ra("Body.fontFamily"),fontSize:Ra("Body.fontSize"),fontWeight:Ra("Body.fontWeight"),lineHeight:Ra("Body.lineHeight"),letterSpacing:Ra("Body.letterSpacing")},BodySmall:{fontFamily:Ra("BodySmall.fontFamily"),fontSize:Ra("BodySmall.fontSize"),fontWeight:Ra("BodySmall.fontWeight"),lineHeight:Ra("BodySmall.lineHeight"),letterSpacing:Ra("BodySmall.letterSpacing")},XSmall:{fontFamily:Ra("XSmall.fontFamily"),fontSize:Ra("XSmall.fontSize"),fontWeight:Ra("XSmall.fontWeight"),lineHeight:Ra("XSmall.lineHeight"),letterSpacing:Ra("XSmall.letterSpacing")}},La=e=>{switch(e){case 700:case"bold":return ja.Bold;case 600:case"semibold":return ja.Semibold;case 300:case"light":return ja.Light;case 400:case"regular":return ja.Regular;default:return""}},Wa=(e,t)=>n=>{const r=Va[e].fontFamily(n),i=Va[e].fontWeight(n);return Object.values(ja).includes(r)?w`
                font-family: ${La(t)||La(i)||r};
                font-weight: normal !important;
            `:w`
            font-family: ${r};
            font-weight: ${(Ua(t)||i)??"normal"};
        `},Ua=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},qa=(e,t,n=!1)=>r=>{const i=Va[e],o=i.fontSize(r);return w`
            ${Wa(e,t)}
            font-size: ${o}rem !important;
            line-height: ${i.lineHeight}rem !important;
            letter-spacing: ${i.letterSpacing(r)||0}rem !important;
            ${w`
                margin-bottom: ${o*(n?1.05:0)}rem;
            `}
        `},Qa=(e=!1,t=!1)=>t?w`
            display: block;
        `:e?w`
            display: inline;
        `:w`
            display: block;
        `;var Ga;!function(e){e.D1=v.h1`
        ${e=>w`
                ${qa("D1",e.weight,e.paragraph)}
                color: ${_a.Neutral[1]};
                ${Qa(e.inline,e.paragraph)}
            `}
    `,e.D2=v.h1`
        ${e=>w`
                ${qa("D2",e.weight,e.paragraph)}
                color: ${_a.Neutral[1]};
                ${Qa(e.inline,e.paragraph)}
            `}
    `,e.D3=v.h1`
        ${e=>w`
                ${qa("D3",e.weight,e.paragraph)}
                color: ${_a.Neutral[1]};
                ${Qa(e.inline,e.paragraph)}
            `}
    `,e.D4=v.h1`
        ${e=>w`
                ${qa("D4",e.weight,e.paragraph)}
                color: ${_a.Neutral[1]};
                ${Qa(e.inline,e.paragraph)}
            `}
    `,e.DBody=v.h1`
        ${e=>w`
                ${qa("DBody",e.weight,e.paragraph)}
                color: ${_a.Neutral[1]};
                ${Qa(e.inline,e.paragraph)}
            `}
    `,e.H1=v.h1`
        ${e=>w`
                ${qa("H1",e.weight,e.paragraph)}
                color: ${_a.Neutral[1]};
                ${Qa(e.inline,e.paragraph)}
            `}
    `,e.H2=v.h2`
        ${e=>w`
                ${qa("H2",e.weight,e.paragraph)}
                color: ${_a.Neutral[1]};
                ${Qa(e.inline,e.paragraph)}
            `}
    `,e.H3=v.h3`
        ${e=>w`
                ${qa("H3",e.weight,e.paragraph)}
                color: ${_a.Neutral[1]};
                ${Qa(e.inline,e.paragraph)}
            `}
    `,e.H4=v.h4`
        ${e=>w`
                ${qa("H4",e.weight,e.paragraph)}
                color: ${_a.Neutral[1]};
                ${Qa(e.inline,e.paragraph)}
            `}
    `,e.H5=v.h5`
        ${e=>w`
                ${qa("H5",e.weight,e.paragraph)}
                color: ${_a.Neutral[1]};
                ${Qa(e.inline,e.paragraph)}
            `}
    `,e.H6=v.h6`
        ${e=>w`
                ${qa("H6",e.weight,e.paragraph)}
                color: ${_a.Neutral[1]};
                ${Qa(e.inline,e.paragraph)}
            `}
    `,e.Body=v.p`
        ${e=>w`
                ${qa("Body",e.weight,e.paragraph)}
                color: ${_a.Neutral[1]};
                ${Qa(e.inline,e.paragraph)}
            `}
    `,e.BodySmall=v.p`
        ${e=>w`
                ${qa("BodySmall",e.weight,e.paragraph)}
                color: ${_a.Neutral[1]};
                ${Qa(e.inline,e.paragraph)}
            `}
    `,e.XSmall=v.span`
        ${e=>w`
                ${qa("XSmall",e.weight,e.paragraph)}
                color: ${_a.Neutral[1]};
                ${Qa(e.inline,e.paragraph)}
            `}
    `,e.Hyperlink={Default:e=>Ya({...e,textStyle:"Body"}),Small:e=>Ya({...e,textStyle:"BodySmall"})}}(Ga||(Ga={}));const Xa=v.a`
    ${e=>w`
            ${qa(e.textStyle,e.weight)}
            color: ${_a.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${_a.Secondary};
            }
        `}
`,Za=v(Ca)`
    margin-left: 0.4rem;
`,Ya=({external:n=!1,children:r,...i})=>t(Xa,{...i,children:[r,n&&e(Za,{type:"external"})]});var Ja;!function(e){e[e.Subpage=0]="Subpage",e[e.Domain=1]="Domain"}(Ja||(Ja={}));const Ka=v.button`
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
    ${e=>{switch(e.$buttonStyle){case"secondary":return w`
                    background-color: ${_a.Neutral[8](e)};
                    border: 1px solid ${_a.Primary(e)};

                    span {
                        color: ${_a.Primary(e)};
                    }
                `;case"light":return w`
                    background-color: ${_a.Neutral[8](e)};
                    border: 1px solid ${_a.Neutral[5](e)};

                    span {
                        color: ${_a.Primary(e)};
                    }
                `;case"disabled":return w`
                    background-color: ${_a.Neutral[6](e)};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    span {
                        color: ${_a.Neutral[3](e)};
                    }
                `;case"link":return w`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${_a.Primary};
                    :hover,
                    :active,
                    :focus {
                        span {
                            color: ${_a.Secondary};
                        }
                    }
                `;default:return w`
                    background-color: ${_a.Primary(e)};
                    border: 1px solid transparent;

                    ${Da.mobileL} {
                        width: 100%;
                    }

                    span {
                        color: ${_a.Neutral[8](e)};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?w`
                    height: 2.5rem;
                    span {
                        ${qa("H5","semibold")}
                    }

                    ${Da.mobileS} {
                        height: auto;
                    }
                `:w`
                    height: 3rem;
                    span {
                        ${qa("H4","semibold")}
                    }

                    ${Da.mobileS} {
                        height: auto;
                    }
                `}
`,es=v((({color:n,className:r,size:i=18})=>t(Ea,{className:r,$size:i,$color:n,children:[e(Ma,{id:"inner1",$size:i-2,$borderWidth:2}),e(Aa,{id:"inner2",$size:i-2,$borderWidth:2}),e(Ia,{id:"inner3",$size:i-2,$borderWidth:2}),e(Na,{id:"inner4",$size:i-2,$borderWidth:2})]})))`
    margin-right: 0.5rem;
    ${e=>{let t;switch(e.$buttonStyle){case"secondary":case"light":case"link":t=_a.Primary(e);break;case"disabled":t=_a.Neutral[3](e);break;default:t=_a.Neutral[8](e)}return w`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,ts={Default:r.forwardRef(((n,r)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default",...l}=n,u={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"default"};return t(Ka,{ref:r,"data-testid":l["data-testid"]||"button",disabled:o,...u,...l,children:[a&&e(es,{...u}),e("span",{children:i})]})})),Small:r.forwardRef(((n,r)=>{const{children:i,disabled:o=!1,loading:a=!1,styleType:s="default",...l}=n,u={$buttonStyle:o?"disabled":s,$buttonSizeStyle:"small"};return t(Ka,{ref:r,"data-testid":l["data-testid"]||"button",disabled:o,...u,...l,children:[a&&e(es,{...u,size:16}),e("span",{children:i})]})}))},ns=v.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
    background-color: ${_a.Neutral[8]};
    border: none;
    cursor: pointer;

    img {
        height: 1rem;
        width: 1rem;
    }

    &:focus {
        outline: none;
        background-color: ${_a.Neutral[7]};
    }
`,rs=r.forwardRef((({children:t,iconType:n,...r},i)=>{let o;if(t)o=t;else{if(!n)return console.error("IconButton - Did not specify a valid children or iconType prop"),null;o=e(Ca,{type:n})}return e(ns,{ref:i,...r,children:o})})),is=v.div`
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.6875rem 1rem;
    height: 3rem;
    min-width: 5rem;
    border-radius: 4px;
    border: 1px solid ${_a.Primary};
    background: ${_a.Neutral[8]};
    cursor: pointer;

    :hover {
        box-shadow: 0 0 4px 1px rgba(87, 169, 255, 0.5);
    }

    ${e=>e.disabled&&!e.$selected?w`
                background: ${_a.Neutral[6](e)};
                border: 1px solid ${_a.Neutral[6](e)};
                cursor: not-allowed;

                :hover {
                    box-shadow: none;
                }
            `:e.disabled&&e.$selected?w`
                background: ${_a.Neutral[6](e)};
                border: 1px solid ${_a.Neutral[4](e)};
                cursor: not-allowed;

                :hover {
                    box-shadow: none;
                }
            `:e.$selected?w`
                background: ${_a.Accent.Light[5](e)};
                padding: 0.6875rem 0.912rem; // Bold font takes bigger width
            `:0==e.$selected?w`
                border: 1px solid ${_a.Neutral[5](e)};
            `:void 0}
`,os=v.input`
    position: absolute;
    height: 100%;
    width: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};

    /* Hide appearance but keep it focusable using keyboard interactions */
    appearance: none;
    background: transparent;
`,as=v.span`
    ${e=>w`
            ${qa("H4",e.$weight)}
        `}
    color: ${_a.Neutral[1]};
    text-align: center;

    ${e=>e.disabled?w`
                color: ${_a.Neutral[3](e)};
            `:e.$selected?w`
                color: ${_a.Primary(e)};
            `:void 0}
`,ss=v(oi.div)`
    position: absolute;
    top: 3.5rem;
    left: 0;
    width: 27rem;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
    background: ${_a.Neutral[8]};
    border-radius: ${"4px"};
    overflow: hidden;
    z-index: 1;

    ${Da.tablet} {
        width: 100%;
    }
`,ls=v.div`
    position: relative;
    width: 100%;
    padding: 0.5rem 1.25rem 1.5rem 1.25rem;
    display: flex;
    flex-direction: column;
`,us=v.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${Da.mobileS} {
        flex-direction: column;
    }
`,cs=v.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;

    ${Da.mobileS} {
        border-top: 1px solid ${_a.Neutral[5]};
        margin-top: 2rem;
        padding-top: 1.5rem;
    }
`,ds=v.div`
    display: flex;
    align-items: center;
    margin-right: 2rem;

    ${Da.mobileM} {
        margin-right: 0;
    }
`,hs=v.div`
    display: flex;

    ${Da.tablet} {
        flex-direction: column;
    }

    ${Da.mobileS} {
        flex-direction: row;
        width: 100%;
    }
`,ps=v.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`,fs=v(rs)`
    width: 5rem;
    padding: 1rem 0;
`,gs=v(Ga.Body)`
    margin: 0 0.75rem;

    ${Da.tablet} {
        margin: 0 0.5rem;
    }

    ${Da.mobileS} {
        margin: 0 0.75rem;
    }
`,ms=v.input`
    ${qa("Body","regular")}
    border-radius: ${"4px"};
    height: 3rem;
    width: 5rem;
    text-align: center;
    border: 1px solid ${_a.Neutral[5]};
    background: ${_a.Neutral[8]};
    color: ${_a.Neutral[1]};

    :focus,
    :active {
        outline: none;
        border: 1px solid ${_a.Accent.Light[1]};
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

    ${Da.mobileS} {
        width: 6rem;
    }
`,ys=v((({disabled:n,checked:r,onChange:i,type:s="checkbox",children:l,className:u,...d})=>{const[h,f]=a(r),g=o();c((()=>{f(r)}),[r]);const m=p((e=>{n||("radio"!==s||h||f(!0),"checkbox"===s&&f((e=>!e)),i&&i(e))}),[]);return t(is,{$selected:h,disabled:n,role:"checkbox","aria-checked":h,className:u,children:[e(os,{ref:g,type:"checkbox","data-testid":"toggle-button-input",disabled:n,onChange:m,checked:h,...d}),e(as,{$weight:h?"bold":"regular",$selected:h,disabled:n,"data-testid":"toggle-button-label",children:l})]})}))`
    :not(:last-of-type) {
        margin-right: 0.5rem;
    }

    ${Da.tablet} {
        :not(:last-of-type) {
            margin-right: 0;
            margin-bottom: 0.5rem;
        }
    }

    ${Da.mobileS} {
        width: 50%;
        :not(:last-of-type) {
            margin-right: 0.5rem;
            margin-bottom: 0;
        }
    }
`,vs=v(ts.Small)`
    width: 7rem;

    :not(:last-of-type) {
        margin-right: 0.5rem;
    }

    ${Da.tablet} {
        width: 50%;
    }
`;var bs,ws,_s;!function(e){e.HOUR_UP="hour-up",e.HOUR_DOWN="hour-down",e.MINUTE_UP="minute-up",e.MINUTE_DOWN="minute-down"}(bs||(bs={})),function(e){e.HOUR="hour",e.MINUTE="minute"}(ws||(ws={})),function(e){e.AM="am",e.PM="pm"}(_s||(_s={}));const Ss=({id:n,value:r,show:i,format:s,onChange:l,onCancel:u})=>{const d=S.getTimeValues(s,r),[h,f]=a(d.hour),[g,m]=a(d.minute),[y,v]=a(d.period),b=o(),w=o(),$=function(e){void 0===e&&(e={});var t=e.skipOnMount,n=void 0!==t&&t,r=e.refreshMode,i=e.refreshRate,s=void 0===i?1e3:i,l=e.refreshOptions,u=e.handleWidth,c=void 0===u||u,d=e.handleHeight,h=void 0===d||d,p=e.targetRef,f=e.observerOptions,g=e.onResize,m=o(n),y=o(null),v=null!=p?p:y,b=o(),w=a({width:void 0,height:void 0}),_=w[0],S=w[1];return be((function(){if(!me()){var e=ve(g,S,c,h);b.current=fe((function(t){(c||h)&&t.forEach((function(t){var n=t&&t.contentRect||{},r=n.width,i=n.height;!m.current&&!me()&&e({width:r,height:i}),m.current=!1}))}),r,s,l);var t=new window.ResizeObserver(b.current);return v.current&&t.observe(v.current,f),function(){t.disconnect();var e=b.current;e&&e.cancel&&e.cancel()}}}),[r,s,l,c,h,g,f,v.current]),O({ref:v},_)}();c((()=>{if(i&&b.current&&b.current.focus(),i){const{hour:e,minute:t,period:n}=S.getTimeValues(s,r);f(e),m(t),v(n)}}),[i,r,s]),c((()=>{const e=b.current,t=w.current;return e&&e.addEventListener("keydown",x),t&&t.addEventListener("keydown",x),()=>{e&&e.removeEventListener("keydown",x),t&&t.removeEventListener("keydown",x)}}),[]);const x=e=>{["Digit0","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Tab","Backspace","Delete","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)||["Backspace","0","1","2","3","4","5","6","7","8","9"].includes(e.key)||e.preventDefault()},k=p((e=>{switch(e.currentTarget.name){case bs.MINUTE_UP:m(S.updateMinutes(g,"add"));break;case bs.MINUTE_DOWN:m(S.updateMinutes(g,"minus"));break;case bs.HOUR_UP:f(S.updateHours(h,"add"));break;case bs.HOUR_DOWN:f(S.updateHours(h,"minus"))}}),[h,g]),F=e=>{e.target.select()},C=e=>{const t=e.target.value;switch(e.target.name){case ws.HOUR:t.length<=2&&f(t);break;case ws.MINUTE:t.length<=2&&m(t)}},H=e=>{const t=parseInt(e.target.value);if(!isNaN(t))switch(e.target.name){case ws.HOUR:{const n=t>23||t<0?d.hour:S.convertHourTo12HourFormat(e.target.value);f(n);break}case ws.MINUTE:{const n=t>59||t<0?d.minute:e.target.value;m(_.padValue(n));break}}},P=e=>{switch(e.target.name){case _s.AM:v("am");break;case _s.PM:v("pm")}},B=e=>n?`${n}-${e}`:e,D=function(e,t){const n=je.fun(e),[[r],i]=Ar(1,n?e:[e],n?t||[]:t);return n||2==arguments.length?[r,i]:r}({height:i?$.height+32:0});return e(ss,{"data-testid":"animated-dropdown-wrapper",style:D,children:t(ls,{ref:$.ref,"data-testid":B("timepicker-dropdown"),children:[t(us,{children:[t(ds,{children:[t(ps,{children:[e(fs,{name:bs.HOUR_UP,type:"button",tabIndex:-1,onClick:k,"data-testid":B("hour-increment-button"),children:e(Ca,{type:"chevron-up"})}),e(ms,{type:"number",name:ws.HOUR,id:"hour",maxLength:2,pattern:"[0-9]{2}",ref:b,value:h,onFocus:F,onChange:C,onBlur:H,min:1,max:12,placeholder:"HH","data-testid":B("hour-input")}),e(fs,{name:bs.HOUR_DOWN,type:"button",tabIndex:-1,onClick:k,"data-testid":B("hour-decrement-button"),children:e(Ca,{type:"chevron-down"})})]}),e(gs,{children:":"}),t(ps,{children:[e(fs,{name:bs.MINUTE_UP,type:"button",tabIndex:-1,onClick:k,"data-testid":B("minute-increment-button"),children:e(Ca,{type:"chevron-up"})}),e(ms,{type:"number",name:ws.MINUTE,id:"minute",maxLength:2,pattern:"[0-9]{2}",ref:w,value:g,onChange:C,onBlur:H,onFocus:F,min:0,max:59,placeholder:"MM","data-testid":B("minute-input")}),e(fs,{name:bs.MINUTE_DOWN,type:"button",tabIndex:-1,onClick:k,"data-testid":B("minute-decrement-button"),children:e(Ca,{type:"chevron-down"})})]})]}),t(hs,{children:[e(ys,{checked:"am"===y,name:_s.AM,type:"radio",onChange:P,"data-testid":B("am-toggle"),children:"AM"}),e(ys,{checked:"pm"===y,name:_s.PM,type:"radio",onChange:P,"data-testid":B("pm-toggle"),children:"PM"})]})]}),t(cs,{children:[e(vs,{type:"button",styleType:"secondary",onClick:u,"data-testid":B("cancel-button"),children:"Cancel"}),e(vs,{type:"button",onClick:()=>{let e;e="24hr"===s?S.convertTo24HourFormat({hour:h,minute:g,period:y}):`${h}:${g}${y}`,l(e)},disabled:""===h||""===g,"data-testid":B("confirm-button"),children:"Confirm"})]})]})})},$s=v.div`
    position: relative;
`,xs=v.input`
    ${qa("Body","regular")}
    border: 1px solid ${_a.Neutral[5]};
    border-radius: 4px;
    display: block;
    padding: 0.2rem 1rem 0.3rem 1rem; // Somehow the input text appears lower
    height: 3rem;
    width: 100%;
    background: ${_a.Neutral[8]};
    color: ${_a.Neutral[1]};

    :focus,
    :active {
        outline: none;
    }

    ${e=>e.disabled?w`
                background: ${_a.Neutral[6](e)};
                cursor: not-allowed;
            `:e.error&&!e.focused?w`
                border: 1px solid ${_a.Validation.Red.Border(e)};
            `:e.error&&e.focused?w`
                border: 1px solid ${_a.Validation.Red.Border(e)};
                box-shadow: inset 0 0 4px 1px rgba(221, 102, 102, 0.8);
            `:e.focused?w`
                border: 1px solid ${_a.Accent.Light[1]};
                box-shadow: inset 0 0 5px 1px rgba(87, 169, 255, 0.5);
            `:void 0}
`,ks=({id:n,disabled:r=!1,error:i,value:s,defaultValue:l,placeholder:u,format:d="24hr",onChange:h,onBlur:f,onSelectionCancel:g,...m})=>{const[y,v]=a(!1),b=o();c((()=>(document.addEventListener("mousedown",_),document.addEventListener("keyup",$),()=>{document.removeEventListener("mousedown",_),document.removeEventListener("keyup",$)})),[y]);const w=p((()=>{r||y||v(!0)}),[y]),_=e=>{r||x(e)},$=e=>{if("Tab"===e.code)x(e)},x=e=>{b&&!b.current.contains(e.target)&&y&&(v(!1),f&&f())},k=p((()=>"12hr"===d?"HH:MMam":"HH:MM"),[d,u]);return t($s,{ref:b,id:n,...m,children:[e(xs,{onFocus:w,focused:y,readOnly:!0,placeholder:u||k(),value:S.formatValue(s,d),defaultValue:l,disabled:r,error:i,"data-testid":n?`${n}-timepicker-selector`:"timepicker-selector"}),e(Ss,{id:n,show:y,value:s||l,format:d,onCancel:()=>{v(!1),g&&g()},onChange:e=>{v(!1),h&&h(e)}})]})};export{ks as Timepicker};
//# sourceMappingURL=index.js.map
