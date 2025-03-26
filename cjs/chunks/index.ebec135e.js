"use strict";var e=require("react/jsx-runtime"),t=require("react"),r=require("react-dom"),n=require("@lifesg/react-icons/chevron-up"),i=require("styled-components"),o=require("@lifesg/react-icons/external"),a=require("@lifesg/react-icons/arrow-right"),s=require("@lifesg/react-icons/exclamation-circle-fill"),l=require("@lifesg/react-icons/exclamation-triangle-fill"),c=require("@lifesg/react-icons/i-circle-fill"),d=require("@lifesg/react-icons/tick-circle-fill"),u=require("@lifesg/react-icons"),f=require("@lifesg/react-icons/chevron-down"),h=require("@lifesg/react-icons/chevron-right"),p=require("@lifesg/react-icons/chevron-left"),g=require("@floating-ui/react"),m=require("@lifesg/react-icons/cross"),b=require("@lifesg/react-icons/star"),v=require("@lifesg/react-icons/star-fill"),y=require("@lifesg/react-icons/cloud-arrow-up-fill"),x=require("@lifesg/react-icons/magnifier"),w=require("@lifesg/react-icons/eye"),$=require("@lifesg/react-icons/eye-slash"),C=require("@lifesg/react-icons/exclamation-triangle"),S=require("@lifesg/react-icons/square"),j=require("@lifesg/react-icons/square-tick-fill"),k=require("@lifesg/react-icons/tick"),D=require("@lifesg/react-icons/caret-right"),T=require("@lifesg/react-icons/minus-square-fill"),E=require("@lifesg/react-icons/circle"),O=require("@lifesg/react-icons/circle-dot"),I=require("@lifesg/react-icons/bin"),F=require("@lifesg/react-icons/pencil"),M=require("@lifesg/react-icons/drag-handle"),_=require("@lifesg/react-icons/minus"),A=require("@lifesg/react-icons/plus"),B=require("@lifesg/react-icons/menu"),R=require("@lifesg/react-icons/chevron-2-left"),z=require("@lifesg/react-icons/chevron-2-right"),P=require("@lifesg/react-icons/chevron-line-left"),L=require("@lifesg/react-icons/chevron-line-right"),N=require("@lifesg/react-icons/ellipsis-horizontal"),H=require("@lifesg/react-icons/star-half");function W(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function V(e){if(e&&"object"==typeof e&&"default"in e)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(r){if("default"!==r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})}})),t.default=e,Object.freeze(t)}var Y=V(t),U=W(r),K=W(i);const q=Y.default.createContext(!1);function X(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}function G(e,t,r,n){return new(r||(r=Promise))((function(i,o){function a(e){try{l(n.next(e))}catch(e){o(e)}}function s(e){try{l(n.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}l((n=n.apply(e,t||[])).next())}))}function Z(e,t){var r,n,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(s){return function(l){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;o&&(o=0,s[0]&&(a=0)),a;)try{if(r=1,n&&(i=2&s[0]?n.return:s[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,s[1])).done)return i;switch(n=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,n=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){a.label=s[1];break}if(6===s[0]&&a.label<i[1]){a.label=i[1],i=s;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(s);break}i[2]&&a.ops.pop(),a.trys.pop();continue}s=t.call(e,a)}catch(e){s=[6,e],n=0}finally{r=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,l])}}}function Q(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,o=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=o.next()).done;)a.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=o.return)&&r.call(o)}finally{if(i)throw i.error}}return a}function J(e,t,r){if(r||2===arguments.length)for(var n,i=0,o=t.length;i<o;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return e.concat(n||Array.prototype.slice.call(t))}"function"==typeof SuppressedError&&SuppressedError;var ee=function(e,t){return ee=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},ee(e,t)};var te=function(){return te=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},te.apply(this,arguments)};var re="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var ne=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},ie="object"==typeof re&&re&&re.Object===Object&&re,oe="object"==typeof self&&self&&self.Object===Object&&self,ae=ie||oe||Function("return this")(),se=ae,le=function(){return se.Date.now()},ce=/\s/;var de=function(e){for(var t=e.length;t--&&ce.test(e.charAt(t)););return t},ue=/^\s+/;var fe=function(e){return e?e.slice(0,de(e)+1).replace(ue,""):e},he=ae.Symbol,pe=he,ge=Object.prototype,me=ge.hasOwnProperty,be=ge.toString,ve=pe?pe.toStringTag:void 0;var ye=function(e){var t=me.call(e,ve),r=e[ve];try{e[ve]=void 0;var n=!0}catch(e){}var i=be.call(e);return n&&(t?e[ve]=r:delete e[ve]),i},xe=Object.prototype.toString;var we=ye,$e=function(e){return xe.call(e)},Ce=he?he.toStringTag:void 0;var Se=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Ce&&Ce in Object(e)?we(e):$e(e)},je=function(e){return null!=e&&"object"==typeof e};var ke=fe,De=ne,Te=function(e){return"symbol"==typeof e||je(e)&&"[object Symbol]"==Se(e)},Ee=/^[-+]0x[0-9a-f]+$/i,Oe=/^0b[01]+$/i,Ie=/^0o[0-7]+$/i,Fe=parseInt;var Me=ne,_e=le,Ae=function(e){if("number"==typeof e)return e;if(Te(e))return NaN;if(De(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=De(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=ke(e);var r=Oe.test(e);return r||Ie.test(e)?Fe(e.slice(2),r?2:8):Ee.test(e)?NaN:+e},Be=Math.max,Re=Math.min;var ze=function(e,t,r){var n,i,o,a,s,l,c=0,d=!1,u=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var r=n,o=i;return n=i=void 0,c=t,a=e.apply(o,r)}function p(e){var r=e-l;return void 0===l||r>=t||r<0||u&&e-c>=o}function g(){var e=_e();if(p(e))return m(e);s=setTimeout(g,function(e){var r=t-(e-l);return u?Re(r,o-(e-c)):r}(e))}function m(e){return s=void 0,f&&n?h(e):(n=i=void 0,a)}function b(){var e=_e(),r=p(e);if(n=arguments,i=this,l=e,r){if(void 0===s)return function(e){return c=e,s=setTimeout(g,t),d?h(e):a}(l);if(u)return clearTimeout(s),s=setTimeout(g,t),h(l)}return void 0===s&&(s=setTimeout(g,t)),a}return t=Ae(t)||0,Me(r)&&(d=!!r.leading,o=(u="maxWait"in r)?Be(Ae(r.maxWait)||0,t):o,f="trailing"in r?!!r.trailing:f),b.cancel=function(){void 0!==s&&clearTimeout(s),c=0,n=l=i=s=void 0},b.flush=function(){return void 0===s?a:m(_e())},b},Pe=ze,Le=ne;var Ne=function(e,t,r){var n=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Le(r)&&(n="leading"in r?!!r.leading:n,i="trailing"in r?!!r.trailing:i),Pe(e,t,{leading:n,maxWait:t,trailing:i})},He=function(e,t,r,n){switch(t){case"debounce":return ze(e,r,n);case"throttle":return Ne(e,r,n);default:return e}},We=function(e){return"function"==typeof e},Ve=function(){return"undefined"==typeof window},Ye=function(e){return e instanceof Element||e instanceof HTMLDocument},Ue=function(e,t,r,n){return function(i){var o=i.width,a=i.height;t((function(t){return t.width===o&&t.height===a||t.width===o&&!n||t.height===a&&!r?t:(e&&We(e)&&e(o,a),{width:o,height:a})}))}};!function(e){function n(n){var i=e.call(this,n)||this;i.cancelHandler=function(){i.resizeHandler&&i.resizeHandler.cancel&&(i.resizeHandler.cancel(),i.resizeHandler=null)},i.attachObserver=function(){var e=i.props,t=e.targetRef,r=e.observerOptions;if(!Ve()){t&&t.current&&(i.targetRef.current=t.current);var n=i.getElement();n&&(i.observableElement&&i.observableElement===n||(i.observableElement=n,i.resizeObserver.observe(n,r)))}},i.getElement=function(){var e=i.props,t=e.querySelector,n=e.targetDomEl;if(Ve())return null;if(t)return document.querySelector(t);if(n&&Ye(n))return n;if(i.targetRef&&Ye(i.targetRef.current))return i.targetRef.current;var o=r.findDOMNode(i);if(!o)return null;switch(i.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return o;default:return o.parentElement}},i.createResizeHandler=function(e){var t=i.props,r=t.handleWidth,n=void 0===r||r,o=t.handleHeight,a=void 0===o||o,s=t.onResize;if(n||a){var l=Ue(s,i.setState.bind(i),n,a);e.forEach((function(e){var t=e&&e.contentRect||{},r=t.width,n=t.height;!i.skipOnMount&&!Ve()&&l({width:r,height:n}),i.skipOnMount=!1}))}},i.getRenderType=function(){var e=i.props,r=e.render,n=e.children;return We(r)?"renderProp":We(n)?"childFunction":t.isValidElement(n)?"child":Array.isArray(n)?"childArray":"parent"};var o=n.skipOnMount,a=n.refreshMode,s=n.refreshRate,l=void 0===s?1e3:s,c=n.refreshOptions;return i.state={width:void 0,height:void 0},i.skipOnMount=o,i.targetRef=t.createRef(),i.observableElement=null,Ve()||(i.resizeHandler=He(i.createResizeHandler,a,l,c),i.resizeObserver=new window.ResizeObserver(i.resizeHandler)),i}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}ee(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)})(n,e),n.prototype.componentDidMount=function(){this.attachObserver()},n.prototype.componentDidUpdate=function(){this.attachObserver()},n.prototype.componentWillUnmount=function(){Ve()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},n.prototype.render=function(){var e,r=this.props,n=r.render,i=r.children,o=r.nodeType,a=void 0===o?"div":o,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return n&&n(l);case"childFunction":return(e=i)(l);case"child":if((e=i).type&&"string"==typeof e.type){var c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}(l,["targetRef"]);return t.cloneElement(e,c)}return t.cloneElement(e,l);case"childArray":return(e=i).map((function(e){return!!e&&t.cloneElement(e,l)}));default:return Y.createElement(a,null)}}}(t.PureComponent);var Ke=Ve()?t.useEffect:t.useLayoutEffect;function qe(e){void 0===e&&(e={});var r=e.skipOnMount,n=void 0!==r&&r,i=e.refreshMode,o=e.refreshRate,a=void 0===o?1e3:o,s=e.refreshOptions,l=e.handleWidth,c=void 0===l||l,d=e.handleHeight,u=void 0===d||d,f=e.targetRef,h=e.observerOptions,p=e.onResize,g=t.useRef(n),m=t.useRef(null),b=null!=f?f:m,v=t.useRef(),y=t.useState({width:void 0,height:void 0}),x=y[0],w=y[1];return Ke((function(){if(!Ve()){var e=Ue(p,w,c,u);v.current=He((function(t){(c||u)&&t.forEach((function(t){var r=t&&t.contentRect||{},n=r.width,i=r.height;!g.current&&!Ve()&&e({width:n,height:i}),g.current=!1}))}),i,a,s);var t=new window.ResizeObserver(v.current);return b.current&&t.observe(b.current,h),function(){t.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[i,a,s,c,u,p,h,b.current]),te({ref:b},x)}var Xe=Object.defineProperty,Ge={};((e,t)=>{for(var r in t)Xe(e,r,{get:t[r],enumerable:!0})})(Ge,{assign:()=>Et,colors:()=>kt,createStringInterpolator:()=>$t,skipAnimation:()=>Dt,to:()=>Ct,willAdvance:()=>Tt});var Ze=ht(),Qe=e=>ct(e,Ze),Je=ht();Qe.write=e=>ct(e,Je);var et=ht();Qe.onStart=e=>ct(e,et);var tt=ht();Qe.onFrame=e=>ct(e,tt);var rt=ht();Qe.onFinish=e=>ct(e,rt);var nt=[];Qe.setTimeout=(e,t)=>{const r=Qe.now()+t,n=()=>{const e=nt.findIndex((e=>e.cancel==n));~e&&nt.splice(e,1),st-=~e?1:0},i={time:r,handler:e,cancel:n};return nt.splice(it(r),0,i),st+=1,dt(),i};var it=e=>~(~nt.findIndex((t=>t.time>e))||~nt.length);Qe.cancel=e=>{et.delete(e),tt.delete(e),rt.delete(e),Ze.delete(e),Je.delete(e)},Qe.sync=e=>{lt=!0,Qe.batchedUpdates(e),lt=!1},Qe.throttle=e=>{let t;function r(){try{e(...t)}finally{t=null}}function n(...e){t=e,Qe.onStart(r)}return n.handler=e,n.cancel=()=>{et.delete(r),t=null},n};var ot="undefined"!=typeof window?window.requestAnimationFrame:()=>{};Qe.use=e=>ot=e,Qe.now="undefined"!=typeof performance?()=>performance.now():Date.now,Qe.batchedUpdates=e=>e(),Qe.catch=console.error,Qe.frameLoop="always",Qe.advance=()=>{"demand"!==Qe.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):ft()};var at=-1,st=0,lt=!1;function ct(e,t){lt?(t.delete(e),e(0)):(t.add(e),dt())}function dt(){at<0&&(at=0,"demand"!==Qe.frameLoop&&ot(ut))}function ut(){~at&&(ot(ut),Qe.batchedUpdates(ft))}function ft(){const e=at;at=Qe.now();const t=it(at);t&&(pt(nt.splice(0,t),(e=>e.handler())),st-=t),st?(et.flush(),Ze.flush(e?Math.min(64,at-e):16.667),tt.flush(),Je.flush(),rt.flush()):at=-1}function ht(){let e=new Set,t=e;return{add(r){st+=t!=e||e.has(r)?0:1,e.add(r)},delete:r=>(st-=t==e&&e.has(r)?1:0,e.delete(r)),flush(r){t.size&&(e=new Set,st-=t.size,pt(t,(t=>t(r)&&e.add(t))),st+=e.size,t=e)}}}function pt(e,t){e.forEach((e=>{try{t(e)}catch(e){Qe.catch(e)}}))}function gt(){}var mt={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function bt(e,t){if(mt.arr(e)){if(!mt.arr(t)||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}return e===t}var vt=(e,t)=>e.forEach(t);function yt(e,t,r){if(mt.arr(e))for(let n=0;n<e.length;n++)t.call(r,e[n],`${n}`);else for(const n in e)e.hasOwnProperty(n)&&t.call(r,e[n],n)}var xt=e=>mt.und(e)?[]:mt.arr(e)?e:[e];function wt(e,t){if(e.size){const r=Array.from(e);e.clear(),vt(r,t)}}var $t,Ct,St=(e,...t)=>wt(e,(e=>e(...t))),jt=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),kt=null,Dt=!1,Tt=gt,Et=e=>{e.to&&(Ct=e.to),e.now&&(Qe.now=e.now),void 0!==e.colors&&(kt=e.colors),null!=e.skipAnimation&&(Dt=e.skipAnimation),e.createStringInterpolator&&($t=e.createStringInterpolator),e.requestAnimationFrame&&Qe.use(e.requestAnimationFrame),e.batchedUpdates&&(Qe.batchedUpdates=e.batchedUpdates),e.willAdvance&&(Tt=e.willAdvance),e.frameLoop&&(Qe.frameLoop=e.frameLoop)},Ot=new Set,It=[],Ft=[],Mt=0,_t={get idle(){return!Ot.size&&!It.length},start(e){Mt>e.priority?(Ot.add(e),Qe.onStart(At)):(Bt(e),Qe(zt))},advance:zt,sort(e){if(Mt)Qe.onFrame((()=>_t.sort(e)));else{const t=It.indexOf(e);~t&&(It.splice(t,1),Rt(e))}},clear(){It=[],Ot.clear()}};function At(){Ot.forEach(Bt),Ot.clear(),Qe(zt)}function Bt(e){It.includes(e)||Rt(e)}function Rt(e){It.splice(function(e,t){const r=e.findIndex(t);return r<0?e.length:r}(It,(t=>t.priority>e.priority)),0,e)}function zt(e){const t=Ft;for(let r=0;r<It.length;r++){const n=It[r];Mt=n.priority,n.idle||(Tt(n),n.advance(e),n.idle||t.push(n))}return Mt=0,(Ft=It).length=0,(It=t).length>0}var Pt="[-+]?\\d*\\.?\\d+",Lt=Pt+"%";function Nt(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var Ht=new RegExp("rgb"+Nt(Pt,Pt,Pt)),Wt=new RegExp("rgba"+Nt(Pt,Pt,Pt,Pt)),Vt=new RegExp("hsl"+Nt(Pt,Lt,Lt)),Yt=new RegExp("hsla"+Nt(Pt,Lt,Lt,Pt)),Ut=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Kt=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,qt=/^#([0-9a-fA-F]{6})$/,Xt=/^#([0-9a-fA-F]{8})$/;function Gt(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function Zt(e,t,r){const n=r<.5?r*(1+t):r+t-r*t,i=2*r-n,o=Gt(i,n,e+1/3),a=Gt(i,n,e),s=Gt(i,n,e-1/3);return Math.round(255*o)<<24|Math.round(255*a)<<16|Math.round(255*s)<<8}function Qt(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function Jt(e){return(parseFloat(e)%360+360)%360/360}function er(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function tr(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function rr(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=qt.exec(e))?parseInt(t[1]+"ff",16)>>>0:kt&&void 0!==kt[e]?kt[e]:(t=Ht.exec(e))?(Qt(t[1])<<24|Qt(t[2])<<16|Qt(t[3])<<8|255)>>>0:(t=Wt.exec(e))?(Qt(t[1])<<24|Qt(t[2])<<16|Qt(t[3])<<8|er(t[4]))>>>0:(t=Ut.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=Xt.exec(e))?parseInt(t[1],16)>>>0:(t=Kt.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=Vt.exec(e))?(255|Zt(Jt(t[1]),tr(t[2]),tr(t[3])))>>>0:(t=Yt.exec(e))?(Zt(Jt(t[1]),tr(t[2]),tr(t[3]))|er(t[4]))>>>0:null}(e);if(null===t)return e;t=t||0;return`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`}var nr=(e,t,r)=>{if(mt.fun(e))return e;if(mt.arr(e))return nr({range:e,output:t,extrapolate:r});if(mt.str(e.output[0]))return $t(e);const n=e,i=n.output,o=n.range||[0,1],a=n.extrapolateLeft||n.extrapolate||"extend",s=n.extrapolateRight||n.extrapolate||"extend",l=n.easing||(e=>e);return e=>{const t=function(e,t){for(var r=1;r<t.length-1&&!(t[r]>=e);++r);return r-1}(e,o);return function(e,t,r,n,i,o,a,s,l){let c=l?l(e):e;if(c<t){if("identity"===a)return c;"clamp"===a&&(c=t)}if(c>r){if("identity"===s)return c;"clamp"===s&&(c=r)}if(n===i)return n;if(t===r)return e<=t?n:i;t===-1/0?c=-c:r===1/0?c-=t:c=(c-t)/(r-t);c=o(c),n===-1/0?c=-c:i===1/0?c+=n:c=c*(i-n)+n;return c}(e,o[t],o[t+1],i[t],i[t+1],l,a,s,n.map)}};var ir=1.70158,or=1.525*ir,ar=ir+1,sr=2*Math.PI/3,lr=2*Math.PI/4.5,cr=e=>{const t=7.5625,r=2.75;return e<1/r?t*e*e:e<2/r?t*(e-=1.5/r)*e+.75:e<2.5/r?t*(e-=2.25/r)*e+.9375:t*(e-=2.625/r)*e+.984375},dr={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>ar*e*e*e-ir*e*e,easeOutBack:e=>1+ar*Math.pow(e-1,3)+ir*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-or)/2:(Math.pow(2*e-2,2)*((or+1)*(2*e-2)+or)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*sr),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*sr)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*lr)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*lr)/2+1,easeInBounce:e=>1-cr(1-e),easeOutBounce:cr,easeInOutBounce:e=>e<.5?(1-cr(1-2*e))/2:(1+cr(2*e-1))/2,steps:(e,t="end")=>r=>{const n=(r="end"===t?Math.min(r,.999):Math.max(r,.001))*e,i="end"===t?Math.floor(n):Math.ceil(n);return o=0,a=1,s=i/e,Math.min(Math.max(s,o),a);var o,a,s}},ur=Symbol.for("FluidValue.get"),fr=Symbol.for("FluidValue.observers"),hr=e=>Boolean(e&&e[ur]),pr=e=>e&&e[ur]?e[ur]():e,gr=e=>e[fr]||null;function mr(e,t){const r=e[fr];r&&r.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}var br=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");vr(this,e)}},vr=(e,t)=>$r(e,ur,t);function yr(e,t){if(e[ur]){let r=e[fr];r||$r(e,fr,r=new Set),r.has(t)||(r.add(t),e.observerAdded&&e.observerAdded(r.size,t))}return t}function xr(e,t){const r=e[fr];if(r&&r.has(t)){const n=r.size-1;n?r.delete(t):e[fr]=null,e.observerRemoved&&e.observerRemoved(n,t)}}var wr,$r=(e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}),Cr=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,Sr=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,jr=new RegExp(`(${Cr.source})(%|[a-z]+)`,"i"),kr=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,Dr=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,Tr=e=>{const[t,r]=Er(e);if(!t||jt())return e;const n=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(n)return n.trim();if(r&&r.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(r);return t||e}return r&&Dr.test(r)?Tr(r):r||e},Er=e=>{const t=Dr.exec(e);if(!t)return[,];const[,r,n]=t;return[r,n]},Or=(e,t,r,n,i)=>`rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${i})`,Ir=e=>{wr||(wr=kt?new RegExp(`(${Object.keys(kt).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>pr(e).replace(Dr,Tr).replace(Sr,rr).replace(wr,rr))),r=t.map((e=>e.match(Cr).map(Number))),n=r[0].map(((e,t)=>r.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))),i=n.map((t=>nr({...e,output:t})));return e=>{const r=!jr.test(t[0])&&t.find((e=>jr.test(e)))?.replace(Cr,"");let n=0;return t[0].replace(Cr,(()=>`${i[n++](e)}${r||""}`)).replace(kr,Or)}},Fr="react-spring: ",Mr=e=>{const t=e;let r=!1;if("function"!=typeof t)throw new TypeError(`${Fr}once requires a function parameter`);return(...e)=>{r||(t(...e),r=!0)}},_r=Mr(console.warn);var Ar=Mr(console.warn);function Br(e){return mt.str(e)&&("#"==e[0]||/\d/.test(e)||!jt()&&Dr.test(e)||e in(kt||{}))}var Rr=jt()?t.useEffect:t.useLayoutEffect,zr=()=>{const e=t.useRef(!1);return Rr((()=>(e.current=!0,()=>{e.current=!1})),[]),e};function Pr(){const e=t.useState()[1],r=zr();return()=>{r.current&&e(Math.random())}}var Lr=e=>t.useEffect(e,Nr),Nr=[];function Hr(e){const r=t.useRef();return t.useEffect((()=>{r.current=e})),r.current}var Wr=Symbol.for("Animated:node"),Vr=e=>e&&e[Wr],Yr=(e,t)=>{return r=e,n=Wr,i=t,Object.defineProperty(r,n,{value:i,writable:!0,configurable:!0});var r,n,i},Ur=e=>e&&e[Wr]&&e[Wr].getPayload(),Kr=class{constructor(){Yr(this,this)}getPayload(){return this.payload||[]}},qr=class extends Kr{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,mt.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new qr(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return mt.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,mt.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},Xr=class extends qr{constructor(e){super(0),this._string=null,this._toString=nr({output:[e,e]})}static create(e){return new Xr(e)}getValue(){const e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(mt.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=nr({output:[this.getValue(),e]})),this._value=0,super.reset()}},Gr={dependencies:null},Zr=class extends Kr{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return yt(this.source,((r,n)=>{var i;(i=r)&&i[Wr]===i?t[n]=r.getValue(e):hr(r)?t[n]=pr(r):e||(t[n]=r)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&vt(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return yt(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){Gr.dependencies&&hr(e)&&Gr.dependencies.add(e);const t=Ur(e);t&&vt(t,(e=>this.add(e)))}},Qr=class extends Zr{constructor(e){super(e)}static create(e){return new Qr(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,r)=>t.setValue(e[r]))).some(Boolean):(super.setValue(e.map(Jr)),!0)}};function Jr(e){return(Br(e)?Xr:qr).create(e)}function en(e){const t=Vr(e);return t?t.constructor:mt.arr(e)?Qr:Br(e)?Xr:qr}var tn=(e,r)=>{const n=!mt.fun(e)||e.prototype&&e.prototype.isReactComponent;return t.forwardRef(((i,o)=>{const a=t.useRef(null),s=n&&t.useCallback((e=>{a.current=function(e,t){e&&(mt.fun(e)?e(t):e.current=t);return t}(o,e)}),[o]),[l,c]=function(e,t){const r=new Set;Gr.dependencies=r,e.style&&(e={...e,style:t.createAnimatedStyle(e.style)});return e=new Zr(e),Gr.dependencies=null,[e,r]}(i,r),d=Pr(),u=()=>{const e=a.current;if(n&&!e)return;!1===(!!e&&r.applyAnimatedValues(e,l.getValue(!0)))&&d()},f=new rn(u,c),h=t.useRef();Rr((()=>(h.current=f,vt(c,(e=>yr(e,f))),()=>{h.current&&(vt(h.current.deps,(e=>xr(e,h.current))),Qe.cancel(h.current.update))}))),t.useEffect(u,[]),Lr((()=>()=>{const e=h.current;vt(e.deps,(t=>xr(t,e)))}));const p=r.getComponentProps(l.getValue());return Y.createElement(e,{...p,ref:s})}))},rn=class{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&Qe.write(this.update)}};var nn=Symbol.for("AnimatedComponent"),on=e=>mt.str(e)?e:e&&mt.str(e.displayName)?e.displayName:mt.fun(e)&&e.name||null;function an(e,...t){return mt.fun(e)?e(...t):e}var sn=(e,t)=>!0===e||!!(t&&e&&(mt.fun(e)?e(t):xt(e).includes(t))),ln=(e,t)=>mt.obj(e)?t&&e[t]:e,cn=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,dn=e=>e,un=(e,t=dn)=>{let r=fn;e.default&&!0!==e.default&&(e=e.default,r=Object.keys(e));const n={};for(const i of r){const r=t(e[i],i);mt.und(r)||(n[i]=r)}return n},fn=["config","onProps","onStart","onChange","onPause","onResume","onRest"],hn={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function pn(e){const t=function(e){const t={};let r=0;if(yt(e,((e,n)=>{hn[n]||(t[n]=e,r++)})),r)return t}(e);if(t){const r={to:t};return yt(e,((e,n)=>n in t||(r[n]=e))),r}return{...e}}function gn(e){return e=pr(e),mt.arr(e)?e.map(gn):Br(e)?Ge.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function mn(e){return mt.fun(e)||mt.arr(e)&&mt.obj(e[0])}var bn={tension:170,friction:26,mass:1,damping:1,easing:dr.linear,clamp:!1},vn=class{constructor(){this.velocity=0,Object.assign(this,bn)}};function yn(e,t){if(mt.und(t.decay)){const r=!mt.und(t.tension)||!mt.und(t.friction);!r&&mt.und(t.frequency)&&mt.und(t.damping)&&mt.und(t.mass)||(e.duration=void 0,e.decay=void 0),r&&(e.frequency=void 0)}else e.duration=void 0}var xn=[],wn=class{constructor(){this.changed=!1,this.values=xn,this.toValues=null,this.fromValues=xn,this.config=new vn,this.immediate=!1}};function $n(e,{key:t,props:r,defaultProps:n,state:i,actions:o}){return new Promise(((a,s)=>{let l,c,d=sn(r.cancel??n?.cancel,t);if(d)h();else{mt.und(r.pause)||(i.paused=sn(r.pause,t));let e=n?.pause;!0!==e&&(e=i.paused||sn(e,t)),l=an(r.delay||0,t),e?(i.resumeQueue.add(f),o.pause()):(o.resume(),f())}function u(){i.resumeQueue.add(f),i.timeouts.delete(c),c.cancel(),l=c.time-Qe.now()}function f(){l>0&&!Ge.skipAnimation?(i.delayed=!0,c=Qe.setTimeout(h,l),i.pauseQueue.add(u),i.timeouts.add(c)):h()}function h(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(u),i.timeouts.delete(c),e<=(i.cancelId||0)&&(d=!0);try{o.start({...r,callId:e,cancel:d},a)}catch(e){s(e)}}}))}var Cn=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?kn(e.get()):t.every((e=>e.noop))?Sn(e.get()):jn(e.get(),t.every((e=>e.finished))),Sn=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),jn=(e,t,r=!1)=>({value:e,finished:t,cancelled:r}),kn=e=>({value:e,cancelled:!0,finished:!1});function Dn(e,t,r,n){const{callId:i,parentId:o,onRest:a}=t,{asyncTo:s,promise:l}=r;return o||e!==s||t.reset?r.promise=(async()=>{r.asyncId=i,r.asyncTo=e;const c=un(t,((e,t)=>"onRest"===t?void 0:e));let d,u;const f=new Promise(((e,t)=>(d=e,u=t))),h=e=>{const t=i<=(r.cancelId||0)&&kn(n)||i!==r.asyncId&&jn(n,!1);if(t)throw e.result=t,u(e),e},p=(e,t)=>{const o=new En,a=new On;return(async()=>{if(Ge.skipAnimation)throw Tn(r),a.result=jn(n,!1),u(a),a;h(o);const s=mt.obj(e)?{...e}:{...t,to:e};s.parentId=i,yt(c,((e,t)=>{mt.und(s[t])&&(s[t]=e)}));const l=await n.start(s);return h(o),r.paused&&await new Promise((e=>{r.resumeQueue.add(e)})),l})()};let g;if(Ge.skipAnimation)return Tn(r),jn(n,!1);try{let t;t=mt.arr(e)?(async e=>{for(const t of e)await p(t)})(e):Promise.resolve(e(p,n.stop.bind(n))),await Promise.all([t.then(d),f]),g=jn(n.get(),!0,!1)}catch(e){if(e instanceof En)g=e.result;else{if(!(e instanceof On))throw e;g=e.result}}finally{i==r.asyncId&&(r.asyncId=o,r.asyncTo=o?s:void 0,r.promise=o?l:void 0)}return mt.fun(a)&&Qe.batchedUpdates((()=>{a(g,n,n.item)})),g})():l}function Tn(e,t){wt(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}var En=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},On=class extends Error{constructor(){super("SkipAnimationSignal")}},In=e=>e instanceof Mn,Fn=1,Mn=class extends br{constructor(){super(...arguments),this.id=Fn++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=Vr(this);return e&&e.getValue()}to(...e){return Ge.to(this,e)}interpolate(...e){return _r(`${Fr}The "interpolate" function is deprecated in v9 (use "to" instead)`),Ge.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){mr(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||_t.sort(this),mr(this,{type:"priority",parent:this,priority:e})}},_n=Symbol.for("SpringPhase"),An=e=>(1&e[_n])>0,Bn=e=>(2&e[_n])>0,Rn=e=>(4&e[_n])>0,zn=(e,t)=>t?e[_n]|=3:e[_n]&=-3,Pn=(e,t)=>t?e[_n]|=4:e[_n]&=-5,Ln=class extends Mn{constructor(e,t){if(super(),this.animation=new wn,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!mt.und(e)||!mt.und(t)){const r=mt.obj(e)?{...e}:{...t,from:e};mt.und(r.default)&&(r.default=!0),this.start(r)}}get idle(){return!(Bn(this)||this._state.asyncTo)||Rn(this)}get goal(){return pr(this.animation.to)}get velocity(){const e=Vr(this);return e instanceof qr?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return An(this)}get isAnimating(){return Bn(this)}get isPaused(){return Rn(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,r=!1;const n=this.animation;let{toValues:i}=n;const{config:o}=n,a=Ur(n.to);!a&&hr(n.to)&&(i=xt(pr(n.to))),n.values.forEach(((s,l)=>{if(s.done)return;const c=s.constructor==Xr?1:a?a[l].lastPosition:i[l];let d=n.immediate,u=c;if(!d){if(u=s.lastPosition,o.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const r=n.fromValues[l],i=null!=s.v0?s.v0:s.v0=mt.arr(o.velocity)?o.velocity[l]:o.velocity;let a;const f=o.precision||(r==c?.005:Math.min(1,.001*Math.abs(c-r)));if(mt.und(o.duration))if(o.decay){const e=!0===o.decay?.998:o.decay,n=Math.exp(-(1-e)*t);u=r+i/(1-e)*(1-n),d=Math.abs(s.lastPosition-u)<=f,a=i*n}else{a=null==s.lastVelocity?i:s.lastVelocity;const t=o.restVelocity||f/10,n=o.clamp?0:o.bounce,l=!mt.und(n),h=r==c?s.v0>0:r<c;let p,g=!1;const m=1,b=Math.ceil(e/m);for(let e=0;e<b&&(p=Math.abs(a)>t,p||(d=Math.abs(c-u)<=f,!d));++e){l&&(g=u==c||u>c==h,g&&(a=-a*n,u=c));a+=(1e-6*-o.tension*(u-c)+.001*-o.friction*a)/o.mass*m,u+=a*m}}else{let n=1;o.duration>0&&(this._memoizedDuration!==o.duration&&(this._memoizedDuration=o.duration,s.durationProgress>0&&(s.elapsedTime=o.duration*s.durationProgress,t=s.elapsedTime+=e)),n=(o.progress||0)+t/this._memoizedDuration,n=n>1?1:n<0?0:n,s.durationProgress=n),u=r+o.easing(n)*(c-r),a=(u-s.lastPosition)/e,d=1==n}s.lastVelocity=a,Number.isNaN(u)&&(console.warn("Got NaN while animating:",this),d=!0)}a&&!a[l].done&&(d=!1),d?s.done=!0:t=!1,s.setValue(u,o.round)&&(r=!0)}));const s=Vr(this),l=s.getValue();if(t){const e=pr(n.to);l===e&&!r||o.decay?r&&o.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else r&&this._onChange(l)}set(e){return Qe.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(Bn(this)){const{to:e,config:t}=this.animation;Qe.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let r;return mt.und(e)?(r=this.queue||[],this.queue=[]):r=[mt.obj(e)?e:{...t,to:e}],Promise.all(r.map((e=>this._update(e)))).then((e=>Cn(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),Tn(this._state,e&&this._lastCallId),Qe.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:r,from:n}=e;r=mt.obj(r)?r[t]:r,(null==r||mn(r))&&(r=void 0),n=mt.obj(n)?n[t]:n,null==n&&(n=void 0);const i={to:r,from:n};return An(this)||(e.reverse&&([r,n]=[n,r]),n=pr(n),mt.und(n)?Vr(this)||this._set(r):this._set(n)),i}_update({...e},t){const{key:r,defaultProps:n}=this;e.default&&Object.assign(n,un(e,((e,t)=>/^on/.test(t)?ln(e,r):e))),Kn(this,e,"onProps"),qn(this,"onProps",e,this);const i=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const o=this._state;return $n(++this._lastCallId,{key:r,props:e,defaultProps:n,state:o,actions:{pause:()=>{Rn(this)||(Pn(this,!0),St(o.pauseQueue),qn(this,"onPause",jn(this,Nn(this,this.animation.to)),this))},resume:()=>{Rn(this)&&(Pn(this,!1),Bn(this)&&this._resume(),St(o.resumeQueue),qn(this,"onResume",jn(this,Nn(this,this.animation.to)),this))},start:this._merge.bind(this,i)}}).then((r=>{if(e.loop&&r.finished&&(!t||!r.noop)){const t=Hn(e);if(t)return this._update(t,!0)}return r}))}_merge(e,t,r){if(t.cancel)return this.stop(!0),r(kn(this));const n=!mt.und(e.to),i=!mt.und(e.from);if(n||i){if(!(t.callId>this._lastToId))return r(kn(this));this._lastToId=t.callId}const{key:o,defaultProps:a,animation:s}=this,{to:l,from:c}=s;let{to:d=l,from:u=c}=e;!i||n||t.default&&!mt.und(d)||(d=u),t.reverse&&([d,u]=[u,d]);const f=!bt(u,c);f&&(s.from=u),u=pr(u);const h=!bt(d,l);h&&this._focus(d);const p=mn(t.to),{config:g}=s,{decay:m,velocity:b}=g;(n||i)&&(g.velocity=0),t.config&&!p&&function(e,t,r){r&&(yn(r={...r},t),t={...r,...t}),yn(e,t),Object.assign(e,t);for(const t in bn)null==e[t]&&(e[t]=bn[t]);let{frequency:n,damping:i}=e;const{mass:o}=e;mt.und(n)||(n<.01&&(n=.01),i<0&&(i=0),e.tension=Math.pow(2*Math.PI/n,2)*o,e.friction=4*Math.PI*i*o/n)}(g,an(t.config,o),t.config!==a.config?an(a.config,o):void 0);let v=Vr(this);if(!v||mt.und(d))return r(jn(this,!0));const y=mt.und(t.reset)?i&&!t.default:!mt.und(u)&&sn(t.reset,o),x=y?u:this.get(),w=gn(d),$=mt.num(w)||mt.arr(w)||Br(w),C=!p&&(!$||sn(a.immediate||t.immediate,o));if(h){const e=en(d);if(e!==v.constructor){if(!C)throw Error(`Cannot animate between ${v.constructor.name} and ${e.name}, as the "to" prop suggests`);v=this._set(w)}}const S=v.constructor;let j=hr(d),k=!1;if(!j){const e=y||!An(this)&&f;(h||e)&&(k=bt(gn(x),w),j=!k),(bt(s.immediate,C)||C)&&bt(g.decay,m)&&bt(g.velocity,b)||(j=!0)}if(k&&Bn(this)&&(s.changed&&!y?j=!0:j||this._stop(l)),!p&&((j||hr(l))&&(s.values=v.getPayload(),s.toValues=hr(d)?null:S==Xr?[1]:xt(w)),s.immediate!=C&&(s.immediate=C,C||y||this._set(l)),j)){const{onRest:e}=s;vt(Un,(e=>Kn(this,t,e)));const n=jn(this,Nn(this,l));St(this._pendingCalls,n),this._pendingCalls.add(r),s.changed&&Qe.batchedUpdates((()=>{s.changed=!y,e?.(n,this),y?an(a.onRest,n):s.onStart?.(n,this)}))}y&&this._set(x),p?r(Dn(t.to,t,this._state,this)):j?this._start():Bn(this)&&!h?this._pendingCalls.add(r):r(Sn(x))}_focus(e){const t=this.animation;e!==t.to&&(gr(this)&&this._detach(),t.to=e,gr(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;hr(t)&&(yr(t,this),In(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;hr(e)&&xr(e,this)}_set(e,t=!0){const r=pr(e);if(!mt.und(r)){const e=Vr(this);if(!e||!bt(r,e.getValue())){const n=en(r);e&&e.constructor==n?e.setValue(r):Yr(this,n.create(r)),e&&Qe.batchedUpdates((()=>{this._onChange(r,t)}))}}return Vr(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,qn(this,"onStart",jn(this,Nn(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),an(this.animation.onChange,e,this)),an(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;Vr(this).reset(pr(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),Bn(this)||(zn(this,!0),Rn(this)||this._resume())}_resume(){Ge.skipAnimation?this.finish():_t.start(this)}_stop(e,t){if(Bn(this)){zn(this,!1);const r=this.animation;vt(r.values,(e=>{e.done=!0})),r.toValues&&(r.onChange=r.onPause=r.onResume=void 0),mr(this,{type:"idle",parent:this});const n=t?kn(this.get()):jn(this.get(),Nn(this,e??r.to));St(this._pendingCalls,n),r.changed&&(r.changed=!1,qn(this,"onRest",n,this))}}};function Nn(e,t){const r=gn(t);return bt(gn(e.get()),r)}function Hn(e,t=e.loop,r=e.to){const n=an(t);if(n){const i=!0!==n&&pn(n),o=(i||e).reverse,a=!i||i.reset;return Wn({...e,loop:t,default:!1,pause:void 0,to:!o||mn(r)?r:void 0,from:a?e.from:void 0,reset:a,...i})}}function Wn(e){const{to:t,from:r}=e=pn(e),n=new Set;return mt.obj(t)&&Yn(t,n),mt.obj(r)&&Yn(r,n),e.keys=n.size?Array.from(n):null,e}function Vn(e){const t=Wn(e);return mt.und(t.default)&&(t.default=un(t)),t}function Yn(e,t){yt(e,((e,r)=>null!=e&&t.add(r)))}var Un=["onStart","onRest","onChange","onPause","onResume"];function Kn(e,t,r){e.animation[r]=t[r]!==cn(t,r)?ln(t[r],e.key):void 0}function qn(e,t,...r){e.animation[t]?.(...r),e.defaultProps[t]?.(...r)}var Xn=["onStart","onChange","onRest"],Gn=1,Zn=class{constructor(e,t){this.id=Gn++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,r)=>e[r]=t.get())),e}set(e){for(const t in e){const r=e[t];mt.und(r)||this.springs[t].set(r)}}update(e){return e&&this.queue.push(Wn(e)),this}start(e){let{queue:t}=this;return e?t=xt(e).map(Wn):this.queue=[],this._flush?this._flush(this,t):(ii(this,t),Qn(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const r=this.springs;vt(xt(t),(t=>r[t].stop(!!e)))}else Tn(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(mt.und(e))this.start({pause:!0});else{const t=this.springs;vt(xt(e),(e=>t[e].pause()))}return this}resume(e){if(mt.und(e))this.start({pause:!1});else{const t=this.springs;vt(xt(e),(e=>t[e].resume()))}return this}each(e){yt(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:r}=this._events,n=this._active.size>0,i=this._changed.size>0;(n&&!this._started||i&&!this._started)&&(this._started=!0,wt(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const o=!n&&this._started,a=i||o&&r.size?this.get():null;i&&t.size&&wt(t,(([e,t])=>{t.value=a,e(t,this,this._item)})),o&&(this._started=!1,wt(r,(([e,t])=>{t.value=a,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}Qe.onFrame(this._onFrame)}};function Qn(e,t){return Promise.all(t.map((t=>Jn(e,t)))).then((t=>Cn(e,t)))}async function Jn(e,t,r){const{keys:n,to:i,from:o,loop:a,onRest:s,onResolve:l}=t,c=mt.obj(t.default)&&t.default;a&&(t.loop=!1),!1===i&&(t.to=null),!1===o&&(t.from=null);const d=mt.arr(i)||mt.fun(i)?i:void 0;d?(t.to=void 0,t.onRest=void 0,c&&(c.onRest=void 0)):vt(Xn,(r=>{const n=t[r];if(mt.fun(n)){const i=e._events[r];t[r]=({finished:e,cancelled:t})=>{const r=i.get(n);r?(e||(r.finished=!1),t&&(r.cancelled=!0)):i.set(n,{value:null,finished:e||!1,cancelled:t||!1})},c&&(c[r]=t[r])}}));const u=e._state;t.pause===!u.paused?(u.paused=t.pause,St(t.pause?u.pauseQueue:u.resumeQueue)):u.paused&&(t.pause=!0);const f=(n||Object.keys(e.springs)).map((r=>e.springs[r].start(t))),h=!0===t.cancel||!0===cn(t,"cancel");(d||h&&u.asyncId)&&f.push($n(++e._lastAsyncId,{props:t,state:u,actions:{pause:gt,resume:gt,start(t,r){h?(Tn(u,e._lastAsyncId),r(kn(e))):(t.onRest=s,r(Dn(d,t,u,e)))}}})),u.paused&&await new Promise((e=>{u.resumeQueue.add(e)}));const p=Cn(e,await Promise.all(f));if(a&&p.finished&&(!r||!p.noop)){const r=Hn(t,a,i);if(r)return ii(e,[r]),Jn(e,r,!0)}return l&&Qe.batchedUpdates((()=>l(p,e,e.item))),p}function ei(e,t){const r={...e.springs};return t&&vt(xt(t),(e=>{mt.und(e.keys)&&(e=Wn(e)),mt.obj(e.to)||(e={...e,to:void 0}),ni(r,e,(e=>ri(e)))})),ti(e,r),r}function ti(e,t){yt(t,((t,r)=>{e.springs[r]||(e.springs[r]=t,yr(t,e))}))}function ri(e,t){const r=new Ln;return r.key=e,t&&yr(r,t),r}function ni(e,t,r){t.keys&&vt(t.keys,(n=>{(e[n]||(e[n]=r(n)))._prepareNode(t)}))}function ii(e,t){vt(t,(t=>{ni(e.springs,t,(t=>ri(t,e)))}))}var oi,ai,si=({children:e,...r})=>{const n=t.useContext(li),i=r.pause||!!n.pause,o=r.immediate||!!n.immediate;r=function(e,r){const[n]=t.useState((()=>({inputs:r,result:e()}))),i=t.useRef(),o=i.current;let a=o;if(a){const t=Boolean(r&&a.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}(r,a.inputs));t||(a={inputs:r,result:e()})}else a=n;return t.useEffect((()=>{i.current=a,o==n&&(n.inputs=n.result=void 0)}),[a]),a.result}((()=>({pause:i,immediate:o})),[i,o]);const{Provider:a}=li;return Y.createElement(a,{value:r},e)},li=(oi=si,ai={},Object.assign(oi,Y.createContext(ai)),oi.Provider._context=oi,oi.Consumer._context=oi,oi);si.Provider=li.Provider,si.Consumer=li.Consumer;var ci=()=>{const e=[],t=function(t){Ar(`${Fr}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const n=[];return vt(e,((e,i)=>{if(mt.und(t))n.push(e.start());else{const o=r(t,e,i);o&&n.push(e.start(o))}})),n};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const r=e.indexOf(t);~r&&e.splice(r,1)},t.pause=function(){return vt(e,(e=>e.pause(...arguments))),this},t.resume=function(){return vt(e,(e=>e.resume(...arguments))),this},t.set=function(t){vt(e,((e,r)=>{const n=mt.fun(t)?t(r,e):t;n&&e.set(n)}))},t.start=function(t){const r=[];return vt(e,((e,n)=>{if(mt.und(t))r.push(e.start());else{const i=this._getProps(t,e,n);i&&r.push(e.start(i))}})),r},t.stop=function(){return vt(e,(e=>e.stop(...arguments))),this},t.update=function(t){return vt(e,((e,r)=>e.update(this._getProps(t,e,r)))),this};const r=function(e,t,r){return mt.fun(e)?e(r,t):e};return t._getProps=r,t};function di(e,r){const n=mt.fun(e),[[i],o]=function(e,r,n){const i=mt.fun(r)&&r;i&&!n&&(n=[]);const o=t.useMemo((()=>i||3==arguments.length?ci():void 0),[]),a=t.useRef(0),s=Pr(),l=t.useMemo((()=>({ctrls:[],queue:[],flush(e,t){const r=ei(e,t);return a.current>0&&!l.queue.length&&!Object.keys(r).some((t=>!e.springs[t]))?Qn(e,t):new Promise((n=>{ti(e,r),l.queue.push((()=>{n(Qn(e,t))})),s()}))}})),[]),c=t.useRef([...l.ctrls]),d=[],u=Hr(e)||0;function f(e,t){for(let n=e;n<t;n++){const e=c.current[n]||(c.current[n]=new Zn(null,l.flush)),t=i?i(n,e):r[n];t&&(d[n]=Vn(t))}}t.useMemo((()=>{vt(c.current.slice(e,u),(e=>{!function(e,t){e.ref?.delete(e),t?.delete(e)}(e,o),e.stop(!0)})),c.current.length=e,f(u,e)}),[e]),t.useMemo((()=>{f(0,Math.min(u,e))}),n);const h=c.current.map(((e,t)=>ei(e,d[t]))),p=t.useContext(si),g=Hr(p),m=p!==g&&function(e){for(const t in e)return!0;return!1}(p);Rr((()=>{a.current++,l.ctrls=c.current;const{queue:e}=l;e.length&&(l.queue=[],vt(e,(e=>e()))),vt(c.current,((e,t)=>{o?.add(e),m&&e.start({default:p});const r=d[t];r&&(function(e,t){t&&e.ref!==t&&(e.ref?.delete(e),t.add(e),e.ref=t)}(e,r.ref),e.ref?e.queue.push(r):e.start(r))}))})),Lr((()=>()=>{vt(l.ctrls,(e=>e.stop(!0)))}));const b=h.map((e=>({...e})));return o?[b,o]:b}(1,n?e:[e],n?r||[]:r);return n||2==arguments.length?[i,o]:i}var ui=class extends Mn{constructor(e,t){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=nr(...t);const r=this._get(),n=en(r);Yr(this,n.create(r))}advance(e){const t=this._get();bt(t,this.get())||(Vr(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&hi(this._active)&&pi(this)}_get(){const e=mt.arr(this.source)?this.source.map(pr):xt(pr(this.source));return this.calc(...e)}_start(){this.idle&&!hi(this._active)&&(this.idle=!1,vt(Ur(this),(e=>{e.done=!1})),Ge.skipAnimation?(Qe.batchedUpdates((()=>this.advance())),pi(this)):_t.start(this))}_attach(){let e=1;vt(xt(this.source),(t=>{hr(t)&&yr(t,this),In(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){vt(xt(this.source),(e=>{hr(e)&&xr(e,this)})),this._active.clear(),pi(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=xt(this.source).reduce(((e,t)=>Math.max(e,(In(t)?t.priority:0)+1)),0))}};function fi(e){return!1!==e.idle}function hi(e){return!e.size||Array.from(e).every(fi)}function pi(e){e.idle||(e.idle=!0,vt(Ur(e),(e=>{e.done=!0})),mr(e,{type:"idle",parent:e}))}Ge.assign({createStringInterpolator:Ir,to:(e,t)=>new ui(e,t)});var gi=/^--/;function mi(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||gi.test(e)||vi.hasOwnProperty(e)&&vi[e]?(""+t).trim():t+"px"}var bi={};var vi={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},yi=["Webkit","Ms","Moz","O"];vi=Object.keys(vi).reduce(((e,t)=>(yi.forEach((r=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(r,t)]=e[t])),e)),vi);var xi=/^(matrix|translate|scale|rotate|skew)/,wi=/^(translate)/,$i=/^(rotate|skew)/,Ci=(e,t)=>mt.num(e)&&0!==e?e+t:e,Si=(e,t)=>mt.arr(e)?e.every((e=>Si(e,t))):mt.num(e)?e===t:parseFloat(e)===t,ji=class extends Zr{constructor({x:e,y:t,z:r,...n}){const i=[],o=[];(e||t||r)&&(i.push([e||0,t||0,r||0]),o.push((e=>[`translate3d(${e.map((e=>Ci(e,"px"))).join(",")})`,Si(e,0)]))),yt(n,((e,t)=>{if("transform"===t)i.push([e||""]),o.push((e=>[e,""===e]));else if(xi.test(t)){if(delete n[t],mt.und(e))return;const r=wi.test(t)?"px":$i.test(t)?"deg":"";i.push(xt(e)),o.push("rotate3d"===t?([e,t,n,i])=>[`rotate3d(${e},${t},${n},${Ci(i,r)})`,Si(i,0)]:e=>[`${t}(${e.map((e=>Ci(e,r))).join(",")})`,Si(e,t.startsWith("scale")?1:0)])}})),i.length&&(n.transform=new ki(i,o)),super(n)}},ki=class extends br{constructor(e,t){super(),this.inputs=e,this.transforms=t,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return vt(this.inputs,((r,n)=>{const i=pr(r[0]),[o,a]=this.transforms[n](mt.arr(i)?i:r.map(pr));e+=" "+o,t=t&&a})),t?"none":e}observerAdded(e){1==e&&vt(this.inputs,(e=>vt(e,(e=>hr(e)&&yr(e,this)))))}observerRemoved(e){0==e&&vt(this.inputs,(e=>vt(e,(e=>hr(e)&&xr(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),mr(this,e)}};Ge.assign({batchedUpdates:r.unstable_batchedUpdates,createStringInterpolator:Ir,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});var Di=((e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:r=(e=>new Zr(e)),getComponentProps:n=(e=>e)}={})=>{const i={applyAnimatedValues:t,createAnimatedStyle:r,getComponentProps:n},o=e=>{const t=on(e)||"Anonymous";return(e=mt.str(e)?o[e]||(o[e]=tn(e,i)):e[nn]||(e[nn]=tn(e,i))).displayName=`Animated(${t})`,e};return yt(e,((t,r)=>{mt.arr(e)&&(r=on(t)),o[r]=o(t)})),{animated:o}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const r="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,{style:n,children:i,scrollTop:o,scrollLeft:a,viewBox:s,...l}=t,c=Object.values(l),d=Object.keys(l).map((t=>r||e.hasAttribute(t)?t:bi[t]||(bi[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==i&&(e.textContent=i);for(const t in n)if(n.hasOwnProperty(t)){const r=mi(t,n[t]);gi.test(t)?e.style.setProperty(t,r):e.style[t]=r}d.forEach(((t,r)=>{e.setAttribute(t,c[r])})),void 0!==o&&(e.scrollTop=o),void 0!==a&&(e.scrollLeft=a),void 0!==s&&e.setAttribute("viewBox",s)},createAnimatedStyle:e=>new ji(e),getComponentProps:({scrollTop:e,scrollLeft:t,...r})=>r}),Ti=Di.animated,Ei="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function Oi(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ii=Array.isArray,Fi="object"==typeof Ei&&Ei&&Ei.Object===Object&&Ei,Mi=Fi,_i="object"==typeof self&&self&&self.Object===Object&&self,Ai=Mi||_i||Function("return this")(),Bi=Ai.Symbol,Ri=Bi,zi=Object.prototype,Pi=zi.hasOwnProperty,Li=zi.toString,Ni=Ri?Ri.toStringTag:void 0;var Hi=function(e){var t=Pi.call(e,Ni),r=e[Ni];try{e[Ni]=void 0;var n=!0}catch(e){}var i=Li.call(e);return n&&(t?e[Ni]=r:delete e[Ni]),i},Wi=Object.prototype.toString;var Vi=Hi,Yi=function(e){return Wi.call(e)},Ui=Bi?Bi.toStringTag:void 0;var Ki=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Ui&&Ui in Object(e)?Vi(e):Yi(e)};var qi=function(e){return null!=e&&"object"==typeof e},Xi=Ki,Gi=qi;var Zi=function(e){return"symbol"==typeof e||Gi(e)&&"[object Symbol]"==Xi(e)},Qi=Ii,Ji=Zi,eo=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,to=/^\w*$/;var ro=function(e,t){if(Qi(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!Ji(e))||(to.test(e)||!eo.test(e)||null!=t&&e in Object(t))};var no=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},io=Ki,oo=no;var ao,so=function(e){if(!oo(e))return!1;var t=io(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},lo=Ai["__core-js_shared__"],co=(ao=/[^.]+$/.exec(lo&&lo.keys&&lo.keys.IE_PROTO||""))?"Symbol(src)_1."+ao:"";var uo=function(e){return!!co&&co in e},fo=Function.prototype.toString;var ho=function(e){if(null!=e){try{return fo.call(e)}catch(e){}try{return e+""}catch(e){}}return""},po=so,go=uo,mo=no,bo=ho,vo=/^\[object .+?Constructor\]$/,yo=Function.prototype,xo=Object.prototype,wo=yo.toString,$o=xo.hasOwnProperty,Co=RegExp("^"+wo.call($o).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var So=function(e,t){return null==e?void 0:e[t]},jo=function(e){return!(!mo(e)||go(e))&&(po(e)?Co:vo).test(bo(e))},ko=So;var Do=function(e,t){var r=ko(e,t);return jo(r)?r:void 0},To=Do(Object,"create"),Eo=To;var Oo=function(){this.__data__=Eo?Eo(null):{},this.size=0};var Io=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Fo=To,Mo=Object.prototype.hasOwnProperty;var _o=function(e){var t=this.__data__;if(Fo){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return Mo.call(t,e)?t[e]:void 0},Ao=To,Bo=Object.prototype.hasOwnProperty;var Ro=function(e){var t=this.__data__;return Ao?void 0!==t[e]:Bo.call(t,e)},zo=To;var Po=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=zo&&void 0===t?"__lodash_hash_undefined__":t,this},Lo=Oo,No=Io,Ho=_o,Wo=Ro,Vo=Po;function Yo(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Yo.prototype.clear=Lo,Yo.prototype.delete=No,Yo.prototype.get=Ho,Yo.prototype.has=Wo,Yo.prototype.set=Vo;var Uo=Yo;var Ko=function(){this.__data__=[],this.size=0};var qo=function(e,t){return e===t||e!=e&&t!=t},Xo=qo;var Go=function(e,t){for(var r=e.length;r--;)if(Xo(e[r][0],t))return r;return-1},Zo=Go,Qo=Array.prototype.splice;var Jo=function(e){var t=this.__data__,r=Zo(t,e);return!(r<0)&&(r==t.length-1?t.pop():Qo.call(t,r,1),--this.size,!0)},ea=Go;var ta=function(e){var t=this.__data__,r=ea(t,e);return r<0?void 0:t[r][1]},ra=Go;var na=function(e){return ra(this.__data__,e)>-1},ia=Go;var oa=function(e,t){var r=this.__data__,n=ia(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},aa=Ko,sa=Jo,la=ta,ca=na,da=oa;function ua(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}ua.prototype.clear=aa,ua.prototype.delete=sa,ua.prototype.get=la,ua.prototype.has=ca,ua.prototype.set=da;var fa=ua,ha=Do(Ai,"Map"),pa=Uo,ga=fa,ma=ha;var ba=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var va=function(e,t){var r=e.__data__;return ba(t)?r["string"==typeof t?"string":"hash"]:r.map},ya=va;var xa=function(e){var t=ya(this,e).delete(e);return this.size-=t?1:0,t},wa=va;var $a=function(e){return wa(this,e).get(e)},Ca=va;var Sa=function(e){return Ca(this,e).has(e)},ja=va;var ka=function(e,t){var r=ja(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},Da=function(){this.size=0,this.__data__={hash:new pa,map:new(ma||ga),string:new pa}},Ta=xa,Ea=$a,Oa=Sa,Ia=ka;function Fa(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Fa.prototype.clear=Da,Fa.prototype.delete=Ta,Fa.prototype.get=Ea,Fa.prototype.has=Oa,Fa.prototype.set=Ia;var Ma=Fa,_a=Ma;function Aa(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],o=r.cache;if(o.has(i))return o.get(i);var a=e.apply(this,n);return r.cache=o.set(i,a)||o,a};return r.cache=new(Aa.Cache||_a),r}Aa.Cache=_a;var Ba=Aa;var Ra=function(e){var t=Ba(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t},za=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Pa=/\\(\\)?/g,La=Ra((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(za,(function(e,r,n,i){t.push(n?i.replace(Pa,"$1"):r||e)})),t}));var Na=function(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i},Ha=Ii,Wa=Zi,Va=Bi?Bi.prototype:void 0,Ya=Va?Va.toString:void 0;var Ua=function e(t){if("string"==typeof t)return t;if(Ha(t))return Na(t,e)+"";if(Wa(t))return Ya?Ya.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},Ka=Ua;var qa=function(e){return null==e?"":Ka(e)},Xa=Ii,Ga=ro,Za=La,Qa=qa;var Ja=function(e,t){return Xa(e)?e:Ga(e,t)?[e]:Za(Qa(e))},es=Zi;var ts=function(e){if("string"==typeof e||es(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},rs=Ja,ns=ts;var is=function(e,t){for(var r=0,n=(t=rs(t,e)).length;null!=e&&r<n;)e=e[ns(t[r++])];return r&&r==n?e:void 0},os=is;var as=function(e,t,r){var n=null==e?void 0:os(e,t);return void 0===n?r:n},ss=Oi(as);const ls=(e,t,r)=>ss(r,t)||ss(e,t),cs=(e,t)=>{const r=t||e.defaultValue;return ss(e.collections,r)},ds={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},us=e=>t=>{var r;const n=t.theme,i=cs(ds,null==n?void 0:n.borderScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.border)?`${ls(i,e,n.overrides.border)}px`:`${i[e]}px`},fs={"width-005":us("width-005"),"width-010":us("width-010"),"width-020":us("width-020"),"width-040":us("width-040"),solid:(hs="solid",e=>{var t;const r=e.theme,n=cs(ds,null==r?void 0:r.borderScheme),i=(null===(t=null==r?void 0:r.overrides)||void 0===t?void 0:t.border)?ls(n,hs,r.overrides.border):n[hs];return"function"==typeof i?i(e):i})};var hs;const ps={collections:{lifesg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},bookingsg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},rbs:{"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},mylegacy:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ccube:{"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},pa:{"brand-10":"#89000B","brand-20":"#B0000E","brand-30":"#C4000F","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"}},defaultValue:"lifesg"},gs=e=>t=>{var r;const n=t.theme,i=cs(ps,null==n?void 0:n.colourScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.primitiveColour)?ls(i,e,n.overrides.primitiveColour):i[e]},ms={"brand-10":gs("brand-10"),"brand-20":gs("brand-20"),"brand-30":gs("brand-30"),"brand-40":gs("brand-40"),"brand-50":gs("brand-50"),"brand-60":gs("brand-60"),"brand-70":gs("brand-70"),"brand-80":gs("brand-80"),"brand-90":gs("brand-90"),"brand-95":gs("brand-95"),"brand-100":gs("brand-100"),"primary-10":gs("primary-10"),"primary-20":gs("primary-20"),"primary-30":gs("primary-30"),"primary-40":gs("primary-40"),"primary-50":gs("primary-50"),"primary-60":gs("primary-60"),"primary-70":gs("primary-70"),"primary-80":gs("primary-80"),"primary-90":gs("primary-90"),"primary-95":gs("primary-95"),"primary-100":gs("primary-100"),"secondary-10":gs("secondary-10"),"secondary-20":gs("secondary-20"),"secondary-30":gs("secondary-30"),"secondary-40":gs("secondary-40"),"secondary-50":gs("secondary-50"),"secondary-60":gs("secondary-60"),"secondary-70":gs("secondary-70"),"secondary-80":gs("secondary-80"),"secondary-90":gs("secondary-90"),"secondary-95":gs("secondary-95"),"secondary-100":gs("secondary-100"),"neutral-10":gs("neutral-10"),"neutral-20":gs("neutral-20"),"neutral-30":gs("neutral-30"),"neutral-40":gs("neutral-40"),"neutral-50":gs("neutral-50"),"neutral-60":gs("neutral-60"),"neutral-70":gs("neutral-70"),"neutral-80":gs("neutral-80"),"neutral-90":gs("neutral-90"),"neutral-95":gs("neutral-95"),"neutral-100":gs("neutral-100"),"success-10":gs("success-10"),"success-20":gs("success-20"),"success-30":gs("success-30"),"success-40":gs("success-40"),"success-50":gs("success-50"),"success-60":gs("success-60"),"success-70":gs("success-70"),"success-80":gs("success-80"),"success-90":gs("success-90"),"success-95":gs("success-95"),"success-100":gs("success-100"),"warning-10":gs("warning-10"),"warning-20":gs("warning-20"),"warning-30":gs("warning-30"),"warning-40":gs("warning-40"),"warning-50":gs("warning-50"),"warning-60":gs("warning-60"),"warning-70":gs("warning-70"),"warning-80":gs("warning-80"),"warning-90":gs("warning-90"),"warning-95":gs("warning-95"),"warning-100":gs("warning-100"),"error-10":gs("error-10"),"error-20":gs("error-20"),"error-30":gs("error-30"),"error-40":gs("error-40"),"error-50":gs("error-50"),"error-60":gs("error-60"),"error-70":gs("error-70"),"error-80":gs("error-80"),"error-90":gs("error-90"),"error-95":gs("error-95"),"error-100":gs("error-100"),"info-10":gs("info-10"),"info-20":gs("info-20"),"info-30":gs("info-30"),"info-40":gs("info-40"),"info-50":gs("info-50"),"info-60":gs("info-60"),"info-70":gs("info-70"),"info-80":gs("info-80"),"info-90":gs("info-90"),"info-95":gs("info-95"),"info-100":gs("info-100"),white:gs("white"),black:gs("black"),"primary-inverse":gs("primary-inverse")},bs={text:gs("neutral-20"),"text-subtle":gs("neutral-30"),"text-subtler":gs("neutral-50"),"text-subtlest":gs("neutral-60"),"text-primary":gs("primary-50"),"text-hover":gs("primary-40"),"text-selected":gs("primary-50"),"text-selected-hover":gs("primary-40"),"text-disabled":gs("neutral-50"),"text-disabled-subtle":gs("neutral-60"),"text-disabled-subtlest":gs("neutral-80"),"text-selected-disabled":gs("neutral-20"),"text-success":gs("success-40"),"text-warning":gs("warning-40"),"text-error":gs("error-40"),"text-info":gs("info-40"),"text-inverse":gs("white"),icon:gs("neutral-50"),"icon-subtle":gs("neutral-60"),"icon-strongest":gs("neutral-20"),"icon-primary":gs("primary-50"),"icon-primary-subtle":gs("primary-60"),"icon-primary-subtlest":gs("primary-70"),"icon-hover":gs("primary-40"),"icon-selected":gs("primary-50"),"icon-selected-hover":gs("primary-40"),"icon-disabled":gs("neutral-50"),"icon-disabled-subtle":gs("neutral-60"),"icon-selected-disabled":gs("neutral-60"),"icon-success":gs("success-50"),"icon-warning":gs("warning-60"),"icon-error":gs("error-50"),"icon-error-strong":gs("error-40"),"icon-info":gs("info-50"),"icon-inverse":gs("white"),"icon-primary-inverse":gs("primary-inverse"),border:gs("neutral-90"),"border-strong":gs("neutral-70"),"border-stronger":gs("neutral-50"),"border-primary":gs("primary-50"),"border-primary-subtle":gs("primary-60"),"border-hover":gs("primary-90"),"border-hover-strong":gs("primary-60"),"border-selected":gs("primary-50"),"border-selected-subtle":gs("primary-70"),"border-selected-subtlest":gs("primary-90"),"border-selected-hover":gs("primary-40"),"border-focus":gs("primary-60"),"border-focus-strong":gs("primary-50"),"border-disabled":gs("neutral-90"),"border-selected-disabled":gs("neutral-70"),"border-success":gs("success-60"),"border-warning":gs("warning-60"),"border-error":gs("error-60"),"border-error-focus":gs("error-60"),"border-error-focus-strong":gs("error-40"),"border-error-strong":gs("error-40"),"border-info":gs("info-60"),bg:gs("white"),"bg-strong":gs("neutral-100"),"bg-stronger":gs("neutral-95"),"bg-strongest":gs("neutral-90"),"bg-hover":gs("primary-95"),"bg-hover-strong":gs("primary-90"),"bg-hover-subtle":gs("primary-100"),"bg-hover-neutral":gs("neutral-100"),"bg-hover-neutral-strong":gs("neutral-90"),"bg-selected":gs("primary-95"),"bg-selected-hover":gs("primary-90"),"bg-selected-strong":gs("primary-90"),"bg-selected-stronger":gs("primary-70"),"bg-selected-strongest":gs("primary-50"),"bg-selected-strongest-hover":gs("primary-40"),"bg-disabled":gs("neutral-95"),"bg-selected-disabled":gs("neutral-95"),"bg-selected-stronger-disabled":gs("neutral-70"),"bg-success":gs("success-100"),"bg-success-hover":gs("success-95"),"bg-success-strong":gs("success-50"),"bg-success-strong-hover":gs("success-40"),"bg-warning":gs("warning-100"),"bg-warning-hover":gs("warning-95"),"bg-warning-strong":gs("warning-50"),"bg-warning-strong-hover":gs("warning-40"),"bg-info":gs("info-100"),"bg-info-hover":gs("info-95"),"bg-info-strong":gs("info-50"),"bg-info-strong-hover":gs("info-40"),"bg-error":gs("error-100"),"bg-error-hover":gs("error-95"),"bg-error-strong":gs("error-50"),"bg-error-strong-hover":gs("error-40"),"bg-inverse":gs("neutral-20"),"bg-inverse-subtle":gs("neutral-30"),"bg-inverse-subtler":gs("neutral-50"),"bg-inverse-subtlest":gs("neutral-60"),"bg-inverse-hover":gs("neutral-40"),"bg-primary":gs("primary-50"),"bg-primary-subtle":gs("primary-60"),"bg-primary-subtler":gs("primary-95"),"bg-primary-subtlest":gs("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":gs("primary-40"),"bg-primary-subtlest-hover":gs("primary-90"),"bg-primary-subtlest-selected":gs("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:gs("primary-50"),"hyperlink-hover":gs("primary-40"),"hyperlink-visited":gs("primary-40"),"hyperlink-inverse":gs("primary-inverse"),"focus-ring":gs("black"),"focus-ring-inverse":gs("white")},vs={collections:{lifesg:bs,bookingsg:bs,rbs:bs,mylegacy:bs,ccube:bs,pa:{text:gs("neutral-30"),"text-subtle":gs("neutral-40"),"text-subtler":gs("neutral-50"),"text-subtlest":gs("neutral-70"),"text-primary":gs("neutral-10"),"text-hover":gs("neutral-70"),"text-selected":gs("neutral-20"),"text-selected-hover":gs("neutral-10"),"text-disabled":gs("neutral-50"),"text-disabled-subtle":gs("neutral-60"),"text-disabled-subtlest":gs("neutral-80"),"text-selected-disabled":gs("neutral-40"),"text-success":gs("success-40"),"text-warning":gs("warning-40"),"text-error":gs("brand-30"),"text-info":gs("neutral-40"),"text-inverse":gs("neutral-100"),icon:gs("neutral-40"),"icon-subtle":gs("neutral-50"),"icon-strongest":gs("neutral-10"),"icon-primary":gs("neutral-10"),"icon-primary-subtle":gs("neutral-30"),"icon-primary-subtlest":gs("neutral-60"),"icon-hover":gs("neutral-70"),"icon-selected":gs("brand-20"),"icon-selected-hover":gs("brand-10"),"icon-disabled":gs("neutral-50"),"icon-disabled-subtle":gs("neutral-60"),"icon-selected-disabled":gs("neutral-40"),"icon-success":gs("success-40"),"icon-warning":gs("warning-60"),"icon-error":gs("brand-30"),"icon-error-strong":gs("brand-10"),"icon-info":gs("neutral-40"),"icon-inverse":gs("neutral-100"),"icon-primary-inverse":"#F9B371",border:gs("neutral-90"),"border-strong":gs("neutral-30"),"border-stronger":gs("neutral-20"),"border-primary":gs("neutral-40"),"border-primary-subtle":gs("neutral-60"),"border-hover":gs("neutral-80"),"border-hover-strong":gs("neutral-10"),"border-selected":gs("neutral-20"),"border-selected-subtle":gs("neutral-40"),"border-selected-subtlest":gs("neutral-70"),"border-selected-hover":gs("neutral-10"),"border-focus":gs("brand-60"),"border-focus-strong":gs("brand-40"),"border-disabled":gs("neutral-90"),"border-selected-disabled":gs("neutral-80"),"border-success":gs("success-40"),"border-warning":gs("warning-60"),"border-error":gs("brand-30"),"border-error-focus":gs("brand-20"),"border-error-focus-strong":gs("brand-10"),"border-error-strong":gs("brand-20"),"border-info":gs("neutral-40"),bg:gs("neutral-100"),"bg-strong":gs("neutral-95"),"bg-stronger":gs("neutral-90"),"bg-strongest":gs("neutral-80"),"bg-hover":gs("brand-90"),"bg-hover-strong":gs("brand-80"),"bg-hover-subtle":gs("neutral-90"),"bg-hover-neutral":gs("neutral-90"),"bg-hover-neutral-strong":gs("neutral-90"),"bg-selected":gs("brand-50"),"bg-selected-hover":gs("brand-70"),"bg-selected-strong":gs("brand-90"),"bg-selected-stronger":gs("brand-40"),"bg-selected-strongest":gs("brand-20"),"bg-selected-strongest-hover":gs("brand-10"),"bg-disabled":gs("neutral-90"),"bg-selected-disabled":gs("neutral-90"),"bg-selected-stronger-disabled":gs("neutral-80"),"bg-success":gs("success-100"),"bg-success-hover":gs("success-95"),"bg-success-strong":gs("success-50"),"bg-success-strong-hover":gs("success-40"),"bg-warning":gs("warning-100"),"bg-warning-hover":gs("warning-95"),"bg-warning-strong":gs("warning-50"),"bg-warning-strong-hover":gs("warning-40"),"bg-info":gs("neutral-95"),"bg-info-hover":gs("info-95"),"bg-info-strong":gs("info-50"),"bg-info-strong-hover":gs("info-40"),"bg-error":gs("brand-100"),"bg-error-hover":gs("error-95"),"bg-error-strong":gs("error-50"),"bg-error-strong-hover":gs("error-40"),"bg-inverse":gs("neutral-40"),"bg-inverse-subtle":gs("neutral-60"),"bg-inverse-subtler":gs("neutral-70"),"bg-inverse-subtlest":gs("neutral-80"),"bg-inverse-hover":gs("neutral-30"),"bg-primary":gs("brand-20"),"bg-primary-subtle":gs("brand-60"),"bg-primary-subtler":gs("brand-80"),"bg-primary-subtlest":gs("brand-100"),"bg-available":gs("success-60"),"bg-primary-hover":gs("brand-10"),"bg-primary-subtlest-hover":gs("brand-80"),"bg-primary-subtlest-selected":gs("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:gs("neutral-10"),"hyperlink-hover":gs("neutral-40"),"hyperlink-visited":gs("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":gs("black"),"focus-ring-inverse":gs("white")}},defaultValue:"lifesg"},ys=e=>t=>{var r;const n=t.theme,i=cs(vs,null==n?void 0:n.colourScheme),o=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.semanticColour)?ls(i,e,n.overrides.semanticColour):i[e];return"function"==typeof o?o(t):o},xs={text:ys("text"),"text-subtle":ys("text-subtle"),"text-subtler":ys("text-subtler"),"text-subtlest":ys("text-subtlest"),"text-primary":ys("text-primary"),"text-hover":ys("text-hover"),"text-selected":ys("text-selected"),"text-selected-hover":ys("text-selected-hover"),"text-disabled":ys("text-disabled"),"text-disabled-subtle":ys("text-disabled-subtle"),"text-disabled-subtlest":ys("text-disabled-subtlest"),"text-selected-disabled":ys("text-selected-disabled"),"text-success":ys("text-success"),"text-warning":ys("text-warning"),"text-error":ys("text-error"),"text-info":ys("text-info"),"text-inverse":ys("text-inverse"),icon:ys("icon"),"icon-subtle":ys("icon-subtle"),"icon-strongest":ys("icon-strongest"),"icon-primary":ys("icon-primary"),"icon-primary-subtle":ys("icon-primary-subtle"),"icon-primary-subtlest":ys("icon-primary-subtlest"),"icon-hover":ys("icon-hover"),"icon-selected":ys("icon-selected"),"icon-selected-hover":ys("icon-selected-hover"),"icon-disabled":ys("icon-disabled"),"icon-disabled-subtle":ys("icon-disabled-subtle"),"icon-selected-disabled":ys("icon-selected-disabled"),"icon-success":ys("icon-success"),"icon-warning":ys("icon-warning"),"icon-error":ys("icon-error"),"icon-error-strong":ys("icon-error-strong"),"icon-info":ys("icon-info"),"icon-inverse":ys("icon-inverse"),"icon-primary-inverse":ys("icon-primary-inverse"),border:ys("border"),"border-strong":ys("border-strong"),"border-stronger":ys("border-stronger"),"border-primary":ys("border-primary"),"border-primary-subtle":ys("border-primary-subtle"),"border-hover":ys("border-hover"),"border-hover-strong":ys("border-hover-strong"),"border-selected":ys("border-selected"),"border-selected-subtle":ys("border-selected-subtle"),"border-selected-subtlest":ys("border-selected-subtlest"),"border-selected-hover":ys("border-selected-hover"),"border-focus":ys("border-focus"),"border-focus-strong":ys("border-focus-strong"),"border-disabled":ys("border-disabled"),"border-selected-disabled":ys("border-selected-disabled"),"border-success":ys("border-success"),"border-warning":ys("border-warning"),"border-error":ys("border-error"),"border-error-focus":ys("border-error-focus"),"border-error-focus-strong":ys("border-error-focus-strong"),"border-error-strong":ys("border-error-strong"),"border-info":ys("border-info"),bg:ys("bg"),"bg-strong":ys("bg-strong"),"bg-stronger":ys("bg-stronger"),"bg-strongest":ys("bg-strongest"),"bg-hover":ys("bg-hover"),"bg-hover-strong":ys("bg-hover-strong"),"bg-hover-subtle":ys("bg-hover-subtle"),"bg-hover-neutral":ys("bg-hover-neutral"),"bg-hover-neutral-strong":ys("bg-hover-neutral-strong"),"bg-selected":ys("bg-selected"),"bg-selected-hover":ys("bg-selected-hover"),"bg-selected-strong":ys("bg-selected-strong"),"bg-selected-stronger":ys("bg-selected-stronger"),"bg-selected-strongest":ys("bg-selected-strongest"),"bg-selected-strongest-hover":ys("bg-selected-strongest-hover"),"bg-disabled":ys("bg-disabled"),"bg-selected-disabled":ys("bg-selected-disabled"),"bg-selected-stronger-disabled":ys("bg-selected-stronger-disabled"),"bg-success":ys("bg-success"),"bg-success-hover":ys("bg-success-hover"),"bg-success-strong":ys("bg-success-strong"),"bg-success-strong-hover":ys("bg-success-strong-hover"),"bg-warning":ys("bg-warning"),"bg-warning-hover":ys("bg-warning-hover"),"bg-warning-strong":ys("bg-warning-strong"),"bg-warning-strong-hover":ys("bg-warning-strong-hover"),"bg-info":ys("bg-info"),"bg-info-hover":ys("bg-info-hover"),"bg-info-strong":ys("bg-info-strong"),"bg-info-strong-hover":ys("bg-info-strong-hover"),"bg-error":ys("bg-error"),"bg-error-hover":ys("bg-error-hover"),"bg-error-strong":ys("bg-error-strong"),"bg-error-strong-hover":ys("bg-error-strong-hover"),"bg-inverse":ys("bg-inverse"),"bg-inverse-subtle":ys("bg-inverse-subtle"),"bg-inverse-subtler":ys("bg-inverse-subtler"),"bg-inverse-subtlest":ys("bg-inverse-subtlest"),"bg-inverse-hover":ys("bg-inverse-hover"),"bg-primary":ys("bg-primary"),"bg-primary-subtle":ys("bg-primary-subtle"),"bg-primary-subtler":ys("bg-primary-subtler"),"bg-primary-subtlest":ys("bg-primary-subtlest"),"bg-available":ys("bg-available"),"bg-primary-hover":ys("bg-primary-hover"),"bg-primary-subtlest-hover":ys("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":ys("bg-primary-subtlest-selected"),"overlay-strong":ys("overlay-strong"),"overlay-subtle":ys("overlay-subtle"),hyperlink:ys("hyperlink"),"hyperlink-hover":ys("hyperlink-hover"),"hyperlink-visited":ys("hyperlink-visited"),"hyperlink-inverse":ys("hyperlink-inverse"),"focus-ring":ys("focus-ring"),"focus-ring-inverse":ys("focus-ring-inverse")},ws={collections:{default:{solid:e=>t=>{var r,n,o;const{thickness:a,radius:s,colour:l}=e||{},c=null!==(r="function"==typeof a?a(t):a)&&void 0!==r?r:fs["width-010"](t),d=null!==(n="function"==typeof s?s(t):s)&&void 0!==n?n:0,u=null!==(o="function"==typeof l?l(t):l)&&void 0!==o?o:xs.border(t),f=fs.solid;return i.css`
            border: ${c} ${f} ${u};
            border-radius: ${d};
        `},"dashed-default":e=>t=>{var r,n,o;const{thickness:a,radius:s,colour:l}=e||{},c=null!==(r="function"==typeof a?a(t):a)&&void 0!==r?r:fs["width-010"](t),d=null!==(n="function"==typeof s?s(t):s)&&void 0!==n?n:0,u=null!==(o="function"==typeof l?l(t):l)&&void 0!==o?o:xs.border(t),f=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${d}' ry='${d}' stroke='${u}' stroke-width='${c}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return i.css`
            background-image: url("data:image/svg+xml,${f}");
            border-radius: ${d};
        `}}},defaultValue:"default"},$s=e=>1===e.length&&"theme"in e[0],Cs=e=>(...t)=>r=>{const n=$s(t)?[]:t,i=$s(t)?t[0]:r,o=i.theme;return(0,cs(ws,null==o?void 0:o.borderScheme)[e])(...n)(i)},Ss={solid:Cs("solid"),"dashed-default":Cs("dashed-default")},js={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},ks=e=>t=>{var r;const n=t.theme,i=cs(js,null==n?void 0:n.breakpointScheme);let o;return o=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.breakpoint)?ls(i,e,n.overrides.breakpoint):i[e],o},Ds={"xxs-min":ks("xxs-min"),"xxs-max":ks("xxs-max"),"xs-min":ks("xs-min"),"xs-max":ks("xs-max"),"sm-min":ks("sm-min"),"sm-max":ks("sm-max"),"md-min":ks("md-min"),"md-max":ks("md-max"),"lg-min":ks("lg-min"),"lg-max":ks("lg-max"),"xl-min":ks("xl-min"),"xl-max":ks("xl-max"),"xxl-min":ks("xxl-min"),"xxs-column":ks("xxs-column"),"xs-column":ks("xs-column"),"sm-column":ks("sm-column"),"md-column":ks("md-column"),"lg-column":ks("lg-column"),"xl-column":ks("xl-column"),"xxl-column":ks("xxl-column"),"xxs-gutter":ks("xxs-gutter"),"xs-gutter":ks("xs-gutter"),"sm-gutter":ks("sm-gutter"),"md-gutter":ks("md-gutter"),"lg-gutter":ks("lg-gutter"),"xl-gutter":ks("xl-gutter"),"xxl-gutter":ks("xxl-gutter"),"xxs-margin":ks("xxs-margin"),"xs-margin":ks("xs-margin"),"sm-margin":ks("sm-margin"),"md-margin":ks("md-margin"),"lg-margin":ks("lg-margin"),"xl-margin":ks("xl-margin"),"xxl-margin":ks("xxl-margin")},Ts=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((t,r)=>(t[r]=((e,t)=>{const r=Ds["max-width"===e?`${t}-max`:`${t}-min`];return t=>{const n=r(t);return`@media screen and (${e}: ${n}px)`}})(e,r),t)),{}),Es={MaxWidth:Ts("max-width"),MinWidth:Ts("min-width")},Os={collections:{default:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},bookingsg:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},pa:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1.375rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.5rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0.014rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"}},defaultValue:"default"},Is=e=>t=>{var r;const n=t.theme,i=cs(Os,null==n?void 0:n.fontScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.fontSpec)?ls(i,e,n.overrides.fontSpec):i[e]},Fs={"heading-size-xxl":Is("heading-size-xxl"),"heading-size-xl":Is("heading-size-xl"),"heading-size-lg":Is("heading-size-lg"),"heading-size-md":Is("heading-size-md"),"heading-size-sm":Is("heading-size-sm"),"heading-size-xs":Is("heading-size-xs"),"heading-lh-xxl":Is("heading-lh-xxl"),"heading-lh-xl":Is("heading-lh-xl"),"heading-lh-lg":Is("heading-lh-lg"),"heading-lh-md":Is("heading-lh-md"),"heading-lh-sm":Is("heading-lh-sm"),"heading-lh-xs":Is("heading-lh-xs"),"heading-ls-xxl":Is("heading-ls-xxl"),"heading-ls-xl":Is("heading-ls-xl"),"heading-ls-lg":Is("heading-ls-lg"),"heading-ls-md":Is("heading-ls-md"),"heading-ls-sm":Is("heading-ls-sm"),"heading-ls-xs":Is("heading-ls-xs"),"weight-light":Is("weight-light"),"weight-regular":Is("weight-regular"),"weight-semibold":Is("weight-semibold"),"weight-bold":Is("weight-bold"),"font-family":Is("font-family"),"body-size-baseline":Is("body-size-baseline"),"body-size-md":Is("body-size-md"),"body-size-sm":Is("body-size-sm"),"body-size-xs":Is("body-size-xs"),"body-lh-baseline":Is("body-lh-baseline"),"body-lh-md":Is("body-lh-md"),"body-lh-sm":Is("body-lh-sm"),"body-lh-xs":Is("body-lh-xs"),"body-ls-baseline":Is("body-ls-baseline"),"body-ls-md":Is("body-ls-md"),"body-ls-sm":Is("body-ls-sm"),"body-ls-xs":Is("body-ls-xs"),"form-label-size":Is("form-label-size"),"form-description-size":Is("form-description-size"),"form-label-lh":Is("form-label-lh"),"form-description-lh":Is("form-description-lh"),"form-label-ls":Is("form-label-ls"),"form-description-ls":Is("form-description-ls")},Ms=(e,t,r,n,o)=>{const{disableLigatures:a}=o||{};return i.css`
        font-family: ${Is("font-family")};
        font-size: ${Is(e)};
        font-weight: ${Is(t)};
        line-height: ${Is(r)};
        letter-spacing: ${Is(n)};

        font-variant: ${a?"no-common-ligatures":"normal"};
    `},_s=(e={})=>({"heading-xxl-light":Ms("heading-size-xxl","weight-light","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-regular":Ms("heading-size-xxl","weight-regular","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-semibold":Ms("heading-size-xxl","weight-semibold","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-bold":Ms("heading-size-xxl","weight-bold","heading-lh-xxl","heading-ls-xxl",e),"heading-xl-light":Ms("heading-size-xl","weight-light","heading-lh-xl","heading-ls-xl",e),"heading-xl-regular":Ms("heading-size-xl","weight-regular","heading-lh-xl","heading-ls-xl",e),"heading-xl-semibold":Ms("heading-size-xl","weight-semibold","heading-lh-xl","heading-ls-xl",e),"heading-xl-bold":Ms("heading-size-xl","weight-bold","heading-lh-xl","heading-ls-xl",e),"heading-lg-light":Ms("heading-size-lg","weight-light","heading-lh-lg","heading-ls-lg",e),"heading-lg-regular":Ms("heading-size-lg","weight-regular","heading-lh-lg","heading-ls-lg",e),"heading-lg-semibold":Ms("heading-size-lg","weight-semibold","heading-lh-lg","heading-ls-lg",e),"heading-lg-bold":Ms("heading-size-lg","weight-bold","heading-lh-lg","heading-ls-lg",e),"heading-md-light":Ms("heading-size-md","weight-light","heading-lh-md","heading-ls-md",e),"heading-md-regular":Ms("heading-size-md","weight-regular","heading-lh-md","heading-ls-md",e),"heading-md-semibold":Ms("heading-size-md","weight-semibold","heading-lh-md","heading-ls-md",e),"heading-md-bold":Ms("heading-size-md","weight-bold","heading-lh-md","heading-ls-md",e),"heading-sm-light":Ms("heading-size-sm","weight-light","heading-lh-sm","heading-ls-sm",e),"heading-sm-regular":Ms("heading-size-sm","weight-regular","heading-lh-sm","heading-ls-sm",e),"heading-sm-semibold":Ms("heading-size-sm","weight-semibold","heading-lh-sm","heading-ls-sm",e),"heading-sm-bold":Ms("heading-size-sm","weight-bold","heading-lh-sm","heading-ls-sm",e),"heading-xs-light":Ms("heading-size-xs","weight-light","heading-lh-xs","heading-ls-xs",e),"heading-xs-regular":Ms("heading-size-xs","weight-regular","heading-lh-xs","heading-ls-xs",e),"heading-xs-semibold":Ms("heading-size-xs","weight-semibold","heading-lh-xs","heading-ls-xs",e),"heading-xs-bold":Ms("heading-size-xs","weight-bold","heading-lh-xs","heading-ls-xs",e),"body-baseline-light":Ms("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline",e),"body-baseline-regular":Ms("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline",e),"body-baseline-semibold":Ms("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline",e),"body-baseline-bold":Ms("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline",e),"body-md-light":Ms("body-size-md","weight-light","body-lh-md","body-ls-md",e),"body-md-regular":Ms("body-size-md","weight-regular","body-lh-md","body-ls-md",e),"body-md-semibold":Ms("body-size-md","weight-semibold","body-lh-md","body-ls-md",e),"body-md-bold":Ms("body-size-md","weight-bold","body-lh-md","body-ls-md",e),"body-sm-light":Ms("body-size-sm","weight-light","body-lh-sm","body-ls-sm",e),"body-sm-regular":Ms("body-size-sm","weight-regular","body-lh-sm","body-ls-sm",e),"body-sm-semibold":Ms("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm",e),"body-sm-bold":Ms("body-size-sm","weight-bold","body-lh-sm","body-ls-sm",e),"body-xs-light":Ms("body-size-xs","weight-light","body-lh-xs","body-ls-xs",e),"body-xs-regular":Ms("body-size-xs","weight-regular","body-lh-xs","body-ls-xs",e),"body-xs-semibold":Ms("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs",e),"body-xs-bold":Ms("body-size-xs","weight-bold","body-lh-xs","body-ls-xs",e),"form-label":Ms("form-label-size","weight-semibold","form-label-lh","form-label-ls",e),"form-description":Ms("form-description-size","weight-regular","form-description-lh","form-description-ls",e)}),As={collections:{default:_s(),bookingsg:_s({disableLigatures:!0}),pa:_s({disableLigatures:!0})},defaultValue:"default"},Bs=e=>t=>{var r;const n=t.theme,i=cs(As,null==n?void 0:n.fontScheme),o=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.font)?ls(i,e,n.overrides.font):i[e];return"function"==typeof o?o(t):o},Rs={"heading-xxl-light":Bs("heading-xxl-light"),"heading-xxl-regular":Bs("heading-xxl-regular"),"heading-xxl-semibold":Bs("heading-xxl-semibold"),"heading-xxl-bold":Bs("heading-xxl-bold"),"heading-xl-light":Bs("heading-xl-light"),"heading-xl-regular":Bs("heading-xl-regular"),"heading-xl-semibold":Bs("heading-xl-semibold"),"heading-xl-bold":Bs("heading-xl-bold"),"heading-lg-light":Bs("heading-lg-light"),"heading-lg-regular":Bs("heading-lg-regular"),"heading-lg-semibold":Bs("heading-lg-semibold"),"heading-lg-bold":Bs("heading-lg-bold"),"heading-md-light":Bs("heading-md-light"),"heading-md-regular":Bs("heading-md-regular"),"heading-md-semibold":Bs("heading-md-semibold"),"heading-md-bold":Bs("heading-md-bold"),"heading-sm-light":Bs("heading-sm-light"),"heading-sm-regular":Bs("heading-sm-regular"),"heading-sm-semibold":Bs("heading-sm-semibold"),"heading-sm-bold":Bs("heading-sm-bold"),"heading-xs-light":Bs("heading-xs-light"),"heading-xs-regular":Bs("heading-xs-regular"),"heading-xs-semibold":Bs("heading-xs-semibold"),"heading-xs-bold":Bs("heading-xs-bold"),"body-baseline-light":Bs("body-baseline-light"),"body-baseline-regular":Bs("body-baseline-regular"),"body-baseline-semibold":Bs("body-baseline-semibold"),"body-baseline-bold":Bs("body-baseline-bold"),"body-md-light":Bs("body-md-light"),"body-md-regular":Bs("body-md-regular"),"body-md-semibold":Bs("body-md-semibold"),"body-md-bold":Bs("body-md-bold"),"body-sm-light":Bs("body-sm-light"),"body-sm-regular":Bs("body-sm-regular"),"body-sm-semibold":Bs("body-sm-semibold"),"body-sm-bold":Bs("body-sm-bold"),"body-xs-light":Bs("body-xs-light"),"body-xs-regular":Bs("body-xs-regular"),"body-xs-semibold":Bs("body-xs-semibold"),"body-xs-bold":Bs("body-xs-bold"),"form-label":Bs("form-label"),"form-description":Bs("form-description")},zs={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},Ps=e=>t=>{var r;const n=t.theme,i=cs(zs,null==n?void 0:n.motionScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.motion)?ls(i,e,n.overrides.motion):i[e]},Ls={"duration-150":Ps("duration-150"),"duration-250":Ps("duration-250"),"duration-350":Ps("duration-350"),"duration-500":Ps("duration-500"),"duration-800":Ps("duration-800"),"duration-1000":Ps("duration-1000"),"ease-default":Ps("ease-default"),"ease-standard":Ps("ease-standard"),"ease-entrance":Ps("ease-entrance"),"ease-exit":Ps("ease-exit")},Ns={collections:{default:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"default"},Hs=e=>t=>{var r;const n=t.theme,i=cs(Ns,null==n?void 0:n.radiusScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.radius)?`${ls(i,e,n.overrides.radius)}px`:`${i[e]}px`},Ws={none:Hs("none"),xs:Hs("xs"),sm:Hs("sm"),md:Hs("md"),lg:Hs("lg"),full:Hs("full")},Vs={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},Ys=e=>t=>{var r;const n=t.theme,i=cs(Vs,null==n?void 0:n.spacingScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.spacing)?`${ls(i,e,n.overrides.spacing)}px`:`${i[e]}px`},Us={"spacing-0":Ys("spacing-0"),"spacing-4":Ys("spacing-4"),"spacing-8":Ys("spacing-8"),"spacing-12":Ys("spacing-12"),"spacing-16":Ys("spacing-16"),"spacing-20":Ys("spacing-20"),"spacing-24":Ys("spacing-24"),"spacing-32":Ys("spacing-32"),"spacing-40":Ys("spacing-40"),"spacing-48":Ys("spacing-48"),"spacing-64":Ys("spacing-64"),"spacing-72":Ys("spacing-72"),"layout-xs":Ys("layout-xs"),"layout-sm":Ys("layout-sm"),"layout-md":Ys("layout-md"),"layout-lg":Ys("layout-lg"),"layout-xl":Ys("layout-xl"),"layout-xxl":Ys("layout-xxl"),"layout-xxxl":Ys("layout-xxxl")},Ks=Object.assign(Object.assign({},xs),{Primitive:ms}),qs=Object.assign(Object.assign({},Rs),{Spec:Fs}),Xs=Ls,Gs=Object.assign(Object.assign({},fs),{Util:Ss}),Zs=Us,Qs=Ws,Js=Ds,el=Es,tl={colourScheme:"lifesg",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"lifesg",_v2:{colorScheme:"base",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"base"}},rl=K.default.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${Zs["spacing-24"]};
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

        ${({$highlight:e})=>e&&i.css`
                background-color: ${Ks["bg-hover-neutral"]};
            `}
    }
`,nl=Y.default.forwardRef(((t,r)=>{var{children:n,focusHighlight:i=!0,focusOutline:o="none",type:a="button"}=t,s=X(t,["children","focusHighlight","focusOutline","type"]);return e.jsx(rl,Object.assign({ref:r,$outline:o,$highlight:i,type:a},s,{children:n}))})),il=e=>i.css`
    display: -webkit-box;
    -webkit-line-clamp: ${e};
    -webkit-box-orient: vertical;
    overflow: hidden;
`,ol=(e,t,r=!1)=>{const n=`${e}-${t}`;return i.css`
        ${qs[n]}
        ${r?"margin-bottom: 1.05em;":"margin-bottom: 0;"}
    `},al=e=>{if(e)return i.css`
            ${il(e)}
        `},sl=(e,t)=>i.css`
    ${ol(e,t.weight||"regular",t.paragraph)}
    ${((e=!1,t=!1,r)=>t?i.css`
            display: block;
            ${al(r)}
        `:e?i.css`
            display: inline;
        `:i.css`
            display: block;
            ${al(r)}
        `)(t.inline,t.paragraph,t.maxLines)}
    color: ${Ks.text};
`;exports.Typography=void 0,function(t){const r=(e,t,r)=>{const n=K.default(e).attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${e=>sl(t,e)}
        `;return n.displayName=`Typography.${r}`,n};t.HeadingXXL=r("h1","heading-xxl","HeadingXXL"),t.HeadingXL=r("h2","heading-xl","HeadingXL"),t.HeadingLG=r("h3","heading-lg","HeadingLG"),t.HeadingMD=r("h4","heading-md","HeadingMD"),t.HeadingSM=r("h5","heading-sm","HeadingSM"),t.HeadingXS=r("h6","heading-xs","HeadingXS");const n=(e,t)=>{const r=K.default.p.attrs((({inline:e})=>({as:e?"span":void 0})))`
            ${t=>sl(e,t)}
        `;return r.displayName=`Typography.${t}`,r};t.BodyBL=n("body-baseline","BodyBL"),t.BodyMD=n("body-md","BodyMD"),t.BodySM=n("body-sm","BodySM"),t.BodyXS=n("body-xs","BodyXS");const o=(t,r)=>{const n=K.default.a`
            ${e=>i.css`
                ${ol(t,e.weight||"regular")}
                color: ${Ks.hyperlink};
                text-decoration: none;

                :hover,
                :active,
                :focus {
                    color: ${Ks["text-hover"]};
                }
            `}
        `,o=t=>{var{external:r=!1,children:i}=t,o=X(t,["external","children"]);return e.jsxs(n,Object.assign({},o,{children:[i,r&&e.jsx(ll,{})]}))};return o.displayName=`Typography.${r}`,o};t.LinkBL=o("body-baseline","LinkBL"),t.LinkMD=o("body-md","LinkMD"),t.LinkSM=o("body-sm","LinkSM"),t.LinkXS=o("body-xs","LinkXS")}(exports.Typography||(exports.Typography={}));const ll=K.default(o.ExternalIcon)`
    height: 1lh;
    width: 1em;
    margin-left: 0.4em;
    vertical-align: middle;
`,cl=K.default.div`
    background-color: ${Ks.bg} !important;
    border-top: ${Gs["width-010"]} ${Gs.solid} ${Ks.border};
    padding: ${e=>e.$isCollapsed?"0 0 1rem":"0"};

    ${el.MaxWidth.sm} {
        padding: ${e=>e.$isCollapsed?".25rem 0 1.05rem":"0.5rem 0"};
    }
`,dl=K.default.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    cursor: ${e=>e.$isCollapsed?"pointer":"unset"};
`,ul=e=>i.css`
    flex: 1;
    margin: 1rem 2rem ${e?.5:1}rem 0;
    transition: all ${Xs["duration-250"]} ${Xs["ease-standard"]};
`,fl=K.default(exports.Typography.HeadingSM)`
    ${e=>ul(e.$isCollapsed)}
`,hl=K.default(exports.Typography.HeadingXS)`
    ${e=>ul(e.$isCollapsed)}
`,pl=K.default(nl)`
    height: 3.25rem;
    width: 3.25rem;
    padding: 1rem;
    transform: rotate(${e=>e.$isCollapsed?0:180}deg);
    transition: transform ${Xs["duration-250"]} ${Xs["ease-default"]};
    margin: auto -1rem auto 0;
`,gl=K.default(n.ChevronUpIcon)`
    height: 1.25rem;
    width: 1.25rem;
    color: ${Ks["icon-primary"]};
`,ml=K.default(Ti.div)`
    overflow: hidden;
`,bl=K.default.div`
    display: inline-block;
    padding-right: 4rem;

    ${el.MaxWidth.lg} {
        padding-right: 0;
    }
`;const vl=t.forwardRef((function(r,n){var{title:i,children:o,expanded:a,type:s="default",collapsible:l=!0}=r,c=X(r,["title","children","expanded","type","collapsible"]);const d=t.useRef(null),u=t.useContext(q),[f,h]=t.useState(!l||(null!=a?a:u)),[p,g]=t.useState(!1),m=c["data-testid"]||"accordion-item",b=qe(),v=b.ref;t.useImperativeHandle(n,(()=>Object.assign(d.current,{expand(){h(!0)},collapse(){h(!1)},isExpanded:()=>f})),[f]),t.useEffect((()=>{p&&h(!l||u)}),[u]),t.useEffect((()=>{p&&h(!!a)}),[a]),t.useEffect((()=>{g(!0)}),[]);const y={height:f?b.height:0},x=di(y);return e.jsxs(cl,{"data-testid":m,className:c.className,$isCollapsed:f,ref:d,children:[e.jsxs(dl,{$isCollapsed:l,onClick:l?e=>{e.preventDefault(),h((e=>!e))}:void 0,children:["string"!=typeof i?i:"small"===s?e.jsx(hl,{weight:"bold","data-testid":`${m}-title`,$isCollapsed:f,children:i}):e.jsx(fl,{weight:"bold","data-testid":`${m}-title`,$isCollapsed:f,children:i}),l&&e.jsx(pl,{"data-testid":`${m}-expand-collapse-button`,$isCollapsed:f,focusHighlight:!1,focusOutline:"browser","aria-label":f?"Collapse":"Expand",children:e.jsx(gl,{})})]}),e.jsx(ml,{style:p?x:y,$isCollapsed:f,"data-testid":`${m}-expandable-container`,children:e.jsx(bl,{ref:v,id:"content-container",children:o})})]})})),yl=K.default.div`
    display: inline-block;
    position: relative;
    width: ${({$size:e})=>e?`${e}px`:"1em"};
    height: ${({$size:e})=>e?`${e}px`:"1em"};
    color: ${e=>e.$color||"currentColor"};
`,xl=i.keyframes`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,wl=K.default.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    top: 1px;
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    border-width: 2px;
    border-style: solid;
    border-radius: 50%;
    border-color: currentColor transparent transparent transparent;
    animation: ${xl} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,$l=K.default(wl)`
    animation-delay: -0.45s;
`,Cl=K.default(wl)`
    animation-delay: -0.3s;
`,Sl=K.default(wl)`
    animation-delay: -0.15s;
`,jl=({color:t,className:r,size:n})=>e.jsxs(yl,{className:r,$size:n,$color:t,"data-testid":"component-loading-spinner",children:[e.jsx(wl,{id:"inner1"}),e.jsx($l,{id:"inner2"}),e.jsx(Cl,{id:"inner3"}),e.jsx(Sl,{id:"inner4"})]}),kl=K.default.button`
    padding: ${Zs["spacing-8"]} ${Zs["spacing-16"]};
    min-width: 4rem;
    border: ${Gs["width-010"]} ${Gs.solid} transparent;
    border-radius: ${Qs.sm};
    transition: all ${Xs["duration-250"]} ${Xs["ease-default"]};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return i.css`
                    background-color: ${Ks.Primitive.white};
                    border-color: ${e.$buttonIsDanger?Ks["border-error-strong"]:Ks["border-primary"]};

                    color: ${e.$buttonIsDanger?Ks["text-error"]:Ks["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${Ks["bg-hover-neutral"]};
                    }
                `;case"light":return i.css`
                    background-color: ${Ks.bg};
                    border-color: ${Ks.border};

                    color: ${e.$buttonIsDanger?Ks["text-error"]:Ks["text-primary"]};

                    &:hover,
                    &:active {
                        background-color: ${Ks["bg-hover-neutral"]};
                    }
                `;case"link":return i.css`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?Ks["text-error"]:Ks["text-primary"]};
                    &:hover,
                    &:active {
                        background-color: ${Ks["bg-hover-neutral"]};
                    }
                `;case"disabled":return i.css`
                    background-color: ${Ks["bg-disabled"]};

                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${Ks["text-disabled"]};
                `;default:return i.css`
                    background-color: ${e.$buttonIsDanger?Ks["bg-error-strong"]:Ks["bg-primary"]};

                    ${el.MaxWidth.md} {
                        width: 100%;
                    }

                    color: ${Ks["text-inverse"]};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?Ks["bg-error-strong-hover"]:Ks["bg-primary-hover"]};
                    }
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>{switch(e.$buttonSizeStyle){case"small":return i.css`
                    height: 2.5rem;
                    ${qs["body-md-semibold"]}

                    ${el.MaxWidth.xxs} {
                        height: auto;
                    }
                `;case"large":return i.css`
                    height: 4rem;
                    ${qs["heading-md-semibold"]}

                    ${el.MaxWidth.xxs} {
                        height: auto;
                    }
                `;default:return i.css`
                    height: 3rem;
                    ${qs["heading-xs-semibold"]}

                    ${el.MaxWidth.xxs} {
                        height: auto;
                    }
                `}}}
`,Dl=K.default(jl)`
    margin-right: 0.5rem;
`,Tl=(t,r)=>{const{children:n,disabled:i=!1,loading:o=!1,styleType:a="default",danger:s=!1}=t,l=X(t,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":a,$buttonSizeStyle:"default",$buttonIsDanger:s};return e.jsxs(kl,Object.assign({ref:r,"data-testid":l["data-testid"]||"button",disabled:i},c,l,{children:[o&&e.jsx(Dl,{}),e.jsx("span",{children:n})]}))};Tl.displayName="Button.Default";const El=(t,r)=>{const{children:n,disabled:i=!1,loading:o=!1,styleType:a="default",danger:s=!1}=t,l=X(t,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":a,$buttonSizeStyle:"small",$buttonIsDanger:s};return e.jsxs(kl,Object.assign({ref:r,"data-testid":l["data-testid"]||"button",disabled:i},c,l,{children:[o&&e.jsx(Dl,{}),e.jsx("span",{children:n})]}))};El.displayName="Button.Small";const Ol=(t,r)=>{const{children:n,disabled:i=!1,loading:o=!1,styleType:a="default",danger:s=!1}=t,l=X(t,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":a,$buttonSizeStyle:"large",$buttonIsDanger:s};return e.jsxs(kl,Object.assign({ref:r,"data-testid":l["data-testid"]||"button",disabled:i},c,l,{children:[o&&e.jsx(Dl,{}),e.jsx("span",{children:n})]}))};Ol.displayName="Button.Large";const Il={Default:Y.default.forwardRef(Tl),Small:Y.default.forwardRef(El),Large:Y.default.forwardRef(Ol)},Fl=K.default.div`
    width: 100%;
    border-bottom: ${Gs["width-010"]} ${Gs.solid} ${Ks.border};
`,Ml=K.default.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding-bottom: 1rem;

    ${el.MaxWidth.sm} {
        justify-content: flex-end;
    }

    ${e=>{if(!e.$showTitleInMobile&&!e.$hasExpandAll)return i.css`
                ${el.MaxWidth.sm} {
                    display: none;
                }
            `}}
`,_l=K.default(exports.Typography.HeadingMD)`
    display: flex;
    align-self: flex-start;
    flex: 1;
    ${el.MaxWidth.sm} {
        text-align: left;
    }

    ${e=>{if(!e.$showInMobile)return i.css`
                ${el.MaxWidth.sm} {
                    display: none;
                    visibility: hidden;
                }
            `}}
`,Al=K.default(Il.Small)`
    padding: 1.75rem 1rem; // larger clickable area
    margin: -1rem -1rem -1rem 0px;
    white-space: nowrap;
`,Bl=Object.assign((({children:r,title:n,enableExpandAll:i=!0,initialDisplay:o="expand-all",showTitleInMobile:a=!1,className:s})=>{const[l,c]=t.useState("expand-all"===o),d=e=>{e.preventDefault(),c((e=>!e))};return e.jsx(q.Provider,{value:l,children:e.jsxs(Fl,{className:s,children:[n||i?e.jsxs(Ml,{$showTitleInMobile:a,$hasExpandAll:i,children:[n&&e.jsx(_l,{weight:"bold",$showInMobile:a,"data-testid":"accordion-title",children:n}),i&&e.jsx(Al,{"data-testid":"accordion-expand-collapse-button",onClick:d,styleType:"link",type:"button",children:l?"Hide all":"Show all"})]}):null,r]})})}),{Item:vl}),Rl=e=>{const{textSize:t}=e||{};return i.css`
        // Text styling
        ${t&&qs[`${t}-regular`]}

        strong {
            font-weight: ${qs.Spec["weight-semibold"]};
            ${t&&qs[`${t}-semibold`]};
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-weight: ${qs.Spec["weight-semibold"]};
            ${t&&qs[`${t}-semibold`]}
            color: ${Ks.hyperlink};
            text-decoration: none;

            svg {
                color: ${Ks["icon-primary"]};
                height: 1lh;
                width: 1em;
                margin-left: 0.4rem;
                vertical-align: middle;
            }

            :hover,
            :active,
            :visited,
            :focus {
                color: ${Ks["hyperlink-hover"]};

                svg {
                    color: ${Ks["icon-hover"]};
                }
            }
        }

        // List styling
        ul,
        ol {
            margin: 0;
            padding: 0;
            margin-left: 2.5rem;
        }

        ol {
            list-style: decimal;
        }

        ul {
            list-style: disc;
        }
    `},zl=K.default.div`
    padding: ${Zs["spacing-8"]} ${Zs["spacing-16"]};
    display: flex;

    ${e=>{let t,r;switch(e.$type){case"error":t=Ks["bg-error"](e),r=Ks["border-error"](e);break;case"success":t=Ks["bg-success"](e),r=Ks["border-success"](e);break;case"warning":default:t=Ks["bg-warning"](e),r=Ks["border-warning"](e);break;case"info":t=Ks["bg-info"](e),r=Ks["border-info"](e);break;case"description":t=Ks["bg-strong"](e),r=Ks["border-strong"](e)}return i.css`
            background: ${t};
            border-left: ${Gs["width-020"]} ${Gs.solid}
                ${r};
        `}}

    color: ${Ks.text};
    ${e=>"small"===e.$sizeType?Rl({textSize:"body-sm"}):Rl({textSize:"body-md"})}
`,Pl=K.default.div`
    display: flex;
    align-items: center;
    height: 1lh;
    margin-right: ${Zs["spacing-8"]};

    ${e=>{let t;const r="small"===e.$sizeType?"1.25rem":"1.5rem";switch(e.$type){case"error":t=Ks["icon-error"](e);break;case"success":t=Ks["icon-success"](e);break;case"warning":default:t=Ks["icon-warning"](e);break;case"info":t=Ks["icon-info"](e);break;case"description":t=Ks["icon-subtle"](e)}return i.css`
            svg {
                color: ${t};
                width: ${r};
                height: ${r};
            }
        `}}
`,Ll=K.default(exports.Typography.LinkSM)`
    ${e=>"small"===e.$sizeType?i.css`
                ${qs["body-sm-semibold"]}
                margin-top: ${Zs["spacing-4"]};
            `:i.css`
                ${qs["body-md-semibold"]}
                margin-top: ${Zs["spacing-8"]};
            `}
    display: flex;
    align-items: center;
    align-self: flex-start;

    svg {
        height: 1rem;
        width: 1rem;
        margin-left: ${Zs["spacing-4"]};
    }
`,Nl=K.default.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-wrap: anywhere;
`,Hl=K.default.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    ${e=>{if(e.$showMore&&e.$hasActionLink)return i.css`
                margin-bottom: ${Zs["spacing-8"]};
            `}}
    ${e=>{const t="linear-gradient(to bottom, black 50%, transparent 100%)";if(!e.$showMore&&e.$maxCollapsedHeight)return`\n                max-height: ${e.$maxCollapsedHeight}px;\n\t\t\t\toverflow: hidden;\n                -webkit-mask-image: ${t};\n                mask-image: ${t};\n\t\t\t`}}
`,Wl=K.default.button`
    ${e=>"small"===e.$sizeType?i.css`
                ${qs["body-sm-semibold"]}
            `:i.css`
                ${qs["body-md-semibold"]}
            `}

    display: flex;
    align-items: center;
    align-self: flex-start;
    gap: ${Zs["spacing-4"]};
    margin-top: ${Zs["spacing-8"]};

    cursor: pointer;
    user-select: none;
    border: none;
    background: transparent;

    color: ${Ks["text-primary"]};
`,Vl=K.default(u.ChevronDownIcon)`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${Xs["duration-350"]} ${Xs["ease-standard"]};
`,Yl=r=>{var{type:n,className:i,children:o,actionLink:u,actionLinkIcon:f,sizeType:h="default",showIcon:p=!1,customIcon:g,maxCollapsedHeight:m}=r,b=X(r,["type","className","children","actionLink","actionLinkIcon","sizeType","showIcon","customIcon","maxCollapsedHeight"]);const[v,y]=t.useState(!1),[x,w]=t.useState(!1),{height:$,ref:C}=qe();t.useEffect((()=>{S()}),[m,$]);const S=()=>{y(!m),w(j())},j=()=>!(!$||!m)&&$>m;return e.jsxs(zl,{className:i,$type:n,$sizeType:h,"data-testid":b["data-testid"],children:[p&&e.jsx(Pl,{$sizeType:h,$type:n,children:(()=>{if(n&&g)return g;switch(n){case"success":return e.jsx(d.TickCircleFillIcon,{});case"warning":return e.jsx(l.ExclamationTriangleFillIcon,{});case"error":return e.jsx(s.ExclamationCircleFillIcon,{});case"info":case"description":return e.jsx(c.ICircleFillIcon,{});default:return null}})()}),e.jsxs(Nl,{children:[e.jsxs(Hl,{$maxCollapsedHeight:j()?m:void 0,$showMore:v,$hasActionLink:!!u,children:[e.jsx("div",{ref:C,children:o}),u?e.jsxs(Ll,Object.assign({"data-testid":"action-link",$type:n,$sizeType:h},u,{children:[u.children,f||e.jsx(a.ArrowRightIcon,{})]})):null]}),x&&e.jsxs(Wl,{$sizeType:h,$type:n,type:"button",onClick:()=>y(!v),children:["Show ",v?"less":"more",e.jsx(Vl,{$expanded:v})]})]})]})},Ul=t.lazy((()=>G(void 0,void 0,void 0,(function*(){return{default:(yield Promise.resolve().then((function(){return require("./lottie-animation.bdb3190e.js")}))).LottieSpinner}})))),Kl=()=>e.jsx("div",{style:{height:"200px",width:"200px"}}),ql=K.default.div`
    margin: 0 auto;
    padding: ${Zs["spacing-32"]} ${Zs["spacing-16"]};
`,Xl=t.lazy((()=>G(void 0,void 0,void 0,(function*(){return{default:(yield Promise.resolve().then((function(){return require("./lottie-animation.0a963754.js")}))).LottieLoadingDots}})))),Gl=r=>e.jsx(Ql,Object.assign({},r,{children:e.jsx(t.Suspense,{fallback:e.jsx(Zl,{}),children:e.jsx(Xl,{})})})),Zl=()=>e.jsx("div",{style:{height:"16px",width:"64px"}}),Ql=K.default.div`
    margin: 0 auto;
`,Jl=t.lazy((()=>G(void 0,void 0,void 0,(function*(){return{default:(yield Promise.resolve().then((function(){return require("./lottie-animation.f7c2111c.js")}))).LottieLoadingDotsSpinner}})))),ec=r=>{var{color:n}=r,o=X(r,["color"]);const a=i.useTheme(),s=n||Ks["icon-primary"]({theme:a});return e.jsx(rc,Object.assign({},o,{children:e.jsx(t.Suspense,{fallback:e.jsx(tc,{}),children:e.jsx(Jl,{color:s})})}))},tc=()=>e.jsx("div",{style:{height:"200px",width:"200px"}}),rc=K.default.div`
    margin: 0 auto;
`;var nc,ic={exports:{}};nc=e=>(()=>{var t={"./node_modules/css-mediaquery/index.js":
/*!**********************************************!*\
	  !*** ./node_modules/css-mediaquery/index.js ***!
	  \**********************************************/(e,t)=>{t.match=function(e,t){return s(e).some((function(e){var r=e.inverse,n="all"===e.type||t.type===e.type;if(n&&r||!n&&!r)return!1;var i=e.expressions.every((function(e){var r=e.feature,n=e.modifier,i=e.value,o=t[r];if(!o)return!1;switch(r){case"orientation":case"scan":return o.toLowerCase()===i.toLowerCase();case"width":case"height":case"device-width":case"device-height":i=d(i),o=d(o);break;case"resolution":i=c(i),o=c(o);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":i=l(i),o=l(o);break;case"grid":case"color":case"color-index":case"monochrome":i=parseInt(i,10)||1,o=parseInt(o,10)||0}switch(n){case"min":return o>=i;case"max":return o<=i;default:return o===i}}));return i&&!r||!i&&r}))},t.parse=s;var r=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,n=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,i=/^(?:(min|max)-)?(.+)/,o=/(em|rem|px|cm|mm|in|pt|pc)?$/,a=/(dpi|dpcm|dppx)?$/;function s(e){return e.split(",").map((function(e){var t=(e=e.trim()).match(r),o=t[1],a=t[2],s=t[3]||"",l={};return l.inverse=!!o&&"not"===o.toLowerCase(),l.type=a?a.toLowerCase():"all",s=s.match(/\([^\)]+\)/g)||[],l.expressions=s.map((function(e){var t=e.match(n),r=t[1].toLowerCase().match(i);return{modifier:r[1],feature:r[2],value:t[2]}})),l}))}function l(e){var t,r=Number(e);return r||(r=(t=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/t[2]),r}function c(e){var t=parseFloat(e);switch(String(e).match(a)[1]){case"dpcm":return t/2.54;case"dppx":return 96*t;default:return t}}function d(e){var t=parseFloat(e);switch(String(e).match(o)[1]){case"em":case"rem":return 16*t;case"cm":return 96*t/2.54;case"mm":return 96*t/2.54/10;case"in":return 96*t;case"pt":return 72*t;case"pc":return 72*t/12;default:return t}}},"./node_modules/hyphenate-style-name/index.js":
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
var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;var n=Object.getOwnPropertyNames(t).map((function(e){return t[e]}));if("0123456789"!==n.join(""))return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach((function(e){i[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},i)).join("")}catch(e){return!1}}()?Object.assign:function(e,i){for(var o,a,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var c in o=Object(arguments[l]))r.call(o,c)&&(s[c]=o[c]);if(t){a=t(o);for(var d=0;d<a.length;d++)n.call(o,a[d])&&(s[a[d]]=o[a[d]])}}return s}},"./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
	  !*** ./node_modules/prop-types/checkPropTypes.js ***!
	  \***************************************************/(e,t,r)=>{var n,i=r(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),o={},a=r(/*! ./lib/has */"./node_modules/prop-types/lib/has.js");function s(e,t,r,s,l){for(var c in e)if(a(e,c)){var d;try{if("function"!=typeof e[c]){var u=Error((s||"React class")+": "+r+" type `"+c+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[c]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw u.name="Invariant Violation",u}d=e[c](t,c,s,r,null,i)}catch(e){d=e}if(!d||d instanceof Error||n((s||"React class")+": type specification of "+r+" `"+c+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof d+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),d instanceof Error&&!(d.message in o)){o[d.message]=!0;var f=l?l():"";n("Failed "+r+" type: "+d.message+(null!=f?f:""))}}}n=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},s.resetWarningCache=function(){o={}},e.exports=s},"./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
	  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
	  \************************************************************/(e,t,r)=>{var n,i=r(/*! react-is */"./node_modules/react-is/index.js"),o=r(/*! object-assign */"./node_modules/object-assign/index.js"),a=r(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),s=r(/*! ./lib/has */"./node_modules/prop-types/lib/has.js"),l=r(/*! ./checkPropTypes */"./node_modules/prop-types/checkPropTypes.js");function c(){return null}n=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},e.exports=function(e,t){var r="function"==typeof Symbol&&Symbol.iterator,d="@@iterator",u="<<anonymous>>",f={array:m("array"),bigint:m("bigint"),bool:m("boolean"),func:m("function"),number:m("number"),object:m("object"),string:m("string"),symbol:m("symbol"),any:g(c),arrayOf:function(e){return g((function(t,r,n,i,o){if("function"!=typeof e)return new p("Property `"+o+"` of component `"+n+"` has invalid PropType notation inside arrayOf.");var s=t[r];if(!Array.isArray(s))return new p("Invalid "+i+" `"+o+"` of type `"+y(s)+"` supplied to `"+n+"`, expected an array.");for(var l=0;l<s.length;l++){var c=e(s,l,n,i,o+"["+l+"]",a);if(c instanceof Error)return c}return null}))},element:g((function(t,r,n,i,o){var a=t[r];return e(a)?null:new p("Invalid "+i+" `"+o+"` of type `"+y(a)+"` supplied to `"+n+"`, expected a single ReactElement.")})),elementType:g((function(e,t,r,n,o){var a=e[t];return i.isValidElementType(a)?null:new p("Invalid "+n+" `"+o+"` of type `"+y(a)+"` supplied to `"+r+"`, expected a single ReactElement type.")})),instanceOf:function(e){return g((function(t,r,n,i,o){if(!(t[r]instanceof e)){var a=e.name||u;return new p("Invalid "+i+" `"+o+"` of type `"+((s=t[r]).constructor&&s.constructor.name?s.constructor.name:u)+"` supplied to `"+n+"`, expected instance of `"+a+"`.")}var s;return null}))},node:g((function(e,t,r,n,i){return v(e[t])?null:new p("Invalid "+n+" `"+i+"` supplied to `"+r+"`, expected a ReactNode.")})),objectOf:function(e){return g((function(t,r,n,i,o){if("function"!=typeof e)return new p("Property `"+o+"` of component `"+n+"` has invalid PropType notation inside objectOf.");var l=t[r],c=y(l);if("object"!==c)return new p("Invalid "+i+" `"+o+"` of type `"+c+"` supplied to `"+n+"`, expected an object.");for(var d in l)if(s(l,d)){var u=e(l,d,n,i,o+"."+d,a);if(u instanceof Error)return u}return null}))},oneOf:function(e){return Array.isArray(e)?g((function(t,r,n,i,o){for(var a=t[r],s=0;s<e.length;s++)if(h(a,e[s]))return null;var l=JSON.stringify(e,(function(e,t){return"symbol"===x(t)?String(t):t}));return new p("Invalid "+i+" `"+o+"` of value `"+String(a)+"` supplied to `"+n+"`, expected one of "+l+".")})):(n(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),c)},oneOfType:function(e){if(!Array.isArray(e))return n("Invalid argument supplied to oneOfType, expected an instance of array."),c;for(var t=0;t<e.length;t++){var r=e[t];if("function"!=typeof r)return n("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+w(r)+" at index "+t+"."),c}return g((function(t,r,n,i,o){for(var l=[],c=0;c<e.length;c++){var d=(0,e[c])(t,r,n,i,o,a);if(null==d)return null;d.data&&s(d.data,"expectedType")&&l.push(d.data.expectedType)}return new p("Invalid "+i+" `"+o+"` supplied to `"+n+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return g((function(t,r,n,i,o){var s=t[r],l=y(s);if("object"!==l)return new p("Invalid "+i+" `"+o+"` of type `"+l+"` supplied to `"+n+"`, expected `object`.");for(var c in e){var d=e[c];if("function"!=typeof d)return b(n,i,o,c,x(d));var u=d(s,c,n,i,o+"."+c,a);if(u)return u}return null}))},exact:function(e){return g((function(t,r,n,i,l){var c=t[r],d=y(c);if("object"!==d)return new p("Invalid "+i+" `"+l+"` of type `"+d+"` supplied to `"+n+"`, expected `object`.");var u=o({},t[r],e);for(var f in u){var h=e[f];if(s(e,f)&&"function"!=typeof h)return b(n,i,l,f,x(h));if(!h)return new p("Invalid "+i+" `"+l+"` key `"+f+"` supplied to `"+n+"`.\nBad object: "+JSON.stringify(t[r],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var g=h(c,f,n,i,l+"."+f,a);if(g)return g}return null}))}};function h(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function p(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function g(e){var r={},i=0;function o(o,s,l,c,d,f,h){if(c=c||u,f=f||l,h!==a){if(t){var g=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw g.name="Invariant Violation",g}if("undefined"!=typeof console){var m=c+":"+l;!r[m]&&i<3&&(n("You are manually calling a React.PropTypes validation function for the `"+f+"` prop on `"+c+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),r[m]=!0,i++)}}return null==s[l]?o?null===s[l]?new p("The "+d+" `"+f+"` is marked as required in `"+c+"`, but its value is `null`."):new p("The "+d+" `"+f+"` is marked as required in `"+c+"`, but its value is `undefined`."):null:e(s,l,c,d,f)}var s=o.bind(null,!1);return s.isRequired=o.bind(null,!0),s}function m(e){return g((function(t,r,n,i,o,a){var s=t[r];return y(s)!==e?new p("Invalid "+i+" `"+o+"` of type `"+x(s)+"` supplied to `"+n+"`, expected `"+e+"`.",{expectedType:e}):null}))}function b(e,t,r,n,i){return new p((e||"React class")+": "+t+" type `"+r+"."+n+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+i+"`.")}function v(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(v);if(null===t||e(t))return!0;var n=function(e){var t=e&&(r&&e[r]||e[d]);if("function"==typeof t)return t}(t);if(!n)return!1;var i,o=n.call(t);if(n!==t.entries){for(;!(i=o.next()).done;)if(!v(i.value))return!1}else for(;!(i=o.next()).done;){var a=i.value;if(a&&!v(a[1]))return!1}return!0;default:return!1}}function y(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function x(e){if(null==e)return""+e;var t=y(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function w(e){var t=x(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return p.prototype=Error.prototype,f.checkPropTypes=l,f.resetWarningCache=l.resetWarningCache,f.PropTypes=f,f}},"./node_modules/prop-types/index.js":
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
	  \***********************************************************/(e,t)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,r=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,i=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,d=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,f=e?Symbol.for("react.suspense"):60113,h=e?Symbol.for("react.suspense_list"):60120,p=e?Symbol.for("react.memo"):60115,g=e?Symbol.for("react.lazy"):60116,m=e?Symbol.for("react.block"):60121,b=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,y=e?Symbol.for("react.scope"):60119;function x(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:var h=e.type;switch(h){case c:case d:case i:case a:case o:case f:return h;default:var m=h&&h.$$typeof;switch(m){case l:case u:case g:case p:case s:return m;default:return t}}case n:return t}}}var w=c,$=d,C=l,S=s,j=r,k=u,D=i,T=g,E=p,O=n,I=a,F=o,M=f,_=!1;function A(e){return x(e)===d}t.AsyncMode=w,t.ConcurrentMode=$,t.ContextConsumer=C,t.ContextProvider=S,t.Element=j,t.ForwardRef=k,t.Fragment=D,t.Lazy=T,t.Memo=E,t.Portal=O,t.Profiler=I,t.StrictMode=F,t.Suspense=M,t.isAsyncMode=function(e){return _||(_=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),A(e)||x(e)===c},t.isConcurrentMode=A,t.isContextConsumer=function(e){return x(e)===l},t.isContextProvider=function(e){return x(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return x(e)===u},t.isFragment=function(e){return x(e)===i},t.isLazy=function(e){return x(e)===g},t.isMemo=function(e){return x(e)===p},t.isPortal=function(e){return x(e)===n},t.isProfiler=function(e){return x(e)===a},t.isStrictMode=function(e){return x(e)===o},t.isSuspense=function(e){return x(e)===f},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===d||e===a||e===o||e===f||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===p||e.$$typeof===s||e.$$typeof===l||e.$$typeof===u||e.$$typeof===b||e.$$typeof===v||e.$$typeof===y||e.$$typeof===m)},t.typeOf=x}()},"./node_modules/react-is/index.js":
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
	  \***************************/function(e,t,r){var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},n.apply(this,arguments)},i=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=o(r(/*! prop-types */"./node_modules/prop-types/index.js")),s=a.default.oneOfType([a.default.string,a.default.number]),l={all:a.default.bool,grid:a.default.bool,aural:a.default.bool,braille:a.default.bool,handheld:a.default.bool,print:a.default.bool,projection:a.default.bool,screen:a.default.bool,tty:a.default.bool,tv:a.default.bool,embossed:a.default.bool},c={orientation:a.default.oneOf(["portrait","landscape"]),scan:a.default.oneOf(["progressive","interlace"]),aspectRatio:a.default.string,deviceAspectRatio:a.default.string,height:s,deviceHeight:s,width:s,deviceWidth:s,color:a.default.bool,colorIndex:a.default.bool,monochrome:a.default.bool,resolution:s,type:Object.keys(l)},d=i(c,["type"]),u=n({minAspectRatio:a.default.string,maxAspectRatio:a.default.string,minDeviceAspectRatio:a.default.string,maxDeviceAspectRatio:a.default.string,minHeight:s,maxHeight:s,minDeviceHeight:s,maxDeviceHeight:s,minWidth:s,maxWidth:s,minDeviceWidth:s,maxDeviceWidth:s,minColor:a.default.number,maxColor:a.default.number,minColorIndex:a.default.number,maxColorIndex:a.default.number,minMonochrome:a.default.number,maxMonochrome:a.default.number,minResolution:s,maxResolution:s},d),f=n(n({},l),u);t.default={all:f,types:l,matchers:c,features:u}},"./src/toQuery.ts":
/*!************************!*\
	  !*** ./src/toQuery.ts ***!
	  \************************/function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=n(r(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),o=n(r(/*! ./mediaQuery */"./src/mediaQuery.ts"));t.default=function(e){var t=[];return Object.keys(o.default.all).forEach((function(r){var n=e[r];null!=n&&t.push(function(e,t){var r=(0,i.default)(e);return"number"==typeof t&&(t="".concat(t,"px")),!0===t?r:!1===t?"not ".concat(r):"(".concat(r,": ").concat(t,")")}(r,n))})),t.join(" and ")}},"./src/useMediaQuery.ts":
/*!******************************!*\
	  !*** ./src/useMediaQuery.ts ***!
	  \******************************/function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(/*! react */"react"),o=n(r(/*! matchmediaquery */"./node_modules/matchmediaquery/index.js")),a=n(r(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),s=r(/*! shallow-equal */"./node_modules/shallow-equal/dist/index.esm.js"),l=n(r(/*! ./toQuery */"./src/toQuery.ts")),c=n(r(/*! ./Context */"./src/Context.ts")),d=function(e){if(e)return Object.keys(e).reduce((function(t,r){return t[(0,a.default)(r)]=e[r],t}),{})},u=function(){var e=(0,i.useRef)(!1);return(0,i.useEffect)((function(){e.current=!0}),[]),e.current},f=function(e){var t=function(){return function(e){return e.query||(0,l.default)(e)}(e)},r=(0,i.useState)(t),n=r[0],o=r[1];return(0,i.useEffect)((function(){var e=t();n!==e&&o(e)}),[e]),n};t.default=function(e,t,r){var n=function(e){var t=(0,i.useContext)(c.default),r=function(){return d(e)||d(t)},n=(0,i.useState)(r),o=n[0],a=n[1];return(0,i.useEffect)((function(){var e=r();(0,s.shallowEqualObjects)(o,e)||a(e)}),[e,t]),o}(t),a=f(e);if(!a)throw new Error("Invalid or missing MediaQuery!");var l=function(e,t){var r=function(){return(0,o.default)(e,t||{},!!t)},n=(0,i.useState)(r),a=n[0],s=n[1],l=u();return(0,i.useEffect)((function(){if(l){var e=r();return s(e),function(){e&&e.dispose()}}}),[e,t]),a}(a,n),h=function(e){var t=(0,i.useState)(e.matches),r=t[0],n=t[1];return(0,i.useEffect)((function(){var t=function(e){n(e.matches)};return e.addListener(t),n(e.matches),function(){e.removeListener(t)}}),[e]),r}(l),p=u();return(0,i.useEffect)((function(){p&&r&&r(h)}),[h]),(0,i.useEffect)((function(){return function(){l&&l.dispose()}}),[]),h}},react:
/*!**************************************************************************************!*\
	  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
	  \**************************************************************************************/t=>{t.exports=e}},r={};function n(e){var i=r[e];if(void 0!==i)return i.exports;var o=r[e]={exports:{}};return t[e].call(o.exports,o,o.exports,n),o.exports}return n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n("./src/index.ts")})();var oc=ic.exports=nc(Y.default);const ac=K.default.div`
    border: ${Gs["width-010"]} ${Gs.solid} ${Ks.border};
    border-radius: ${Qs.sm};
    margin-bottom: ${Zs["spacing-32"]};
`,sc=K.default(Ti.div)`
    overflow: hidden;
`,lc=K.default.div`
    height: max-content;
`,cc=K.default.div`
    border-top: ${Gs["width-010"]} ${Gs.solid} ${Ks.border};
`,dc=K.default.div`
    padding: ${Zs["spacing-16"]} ${Zs["spacing-32"]};
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${el.MaxWidth.sm} {
        padding: ${Zs["spacing-16"]} ${Zs["spacing-20"]};
        display: block;
    }

    ${e=>{if(e.$interactive)return i.css`
                cursor: pointer;
            `}}
`,uc=K.default.div`
    ${qs["heading-sm-semibold"]}
    color: ${Ks.text};
    word-wrap: break-word;
    overflow-wrap: anywhere;
    display: flex;
    align-items: center;
    margin-right: ${Zs["spacing-16"]};
`,fc=K.default.div`
    display: flex;
`,hc=K.default.span`
    display: flex;
    align-items: center;
    margin-right: ${Zs["spacing-40"]};

    ${el.MaxWidth.sm} {
        margin-right: 0;
    }

    ${e=>{switch(e.$displayState){case"error":return i.css`
                    color: ${Ks["icon-error"]};
                `;case"warning":return i.css`
                    color: ${Ks["icon-warning"]};
                `}}}
`,pc=K.default(s.ExclamationCircleFillIcon)`
    height: ${qs.Spec["heading-size-sm"]};
    width: ${qs.Spec["heading-size-sm"]};
`,gc=K.default.div`
    display: flex;
    margin-left: auto;
    ${el.MaxWidth.sm} {
        flex-direction: column;
    }
    ${e=>{if(e.$collapsible)return i.css`
                margin-right: ${Zs["spacing-40"]};
                ${el.MaxWidth.sm} {
                    margin-right: 0;
                    margin-top: ${Zs["spacing-16"]};
                }
            `}}
`,mc=K.default.button`
    background: transparent;
    border: none;
    cursor: pointer;
    padding: ${Zs["spacing-16"]};
    margin: -${Zs["spacing-16"]};
    display: flex;
    align-items: center;

    ${el.MaxWidth.sm} {
        margin: -${Zs["spacing-16"]} -${Zs["spacing-16"]} -${Zs["spacing-16"]} 0;
        margin-left: auto;
    }
`,bc=K.default.div`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: ${Xs["duration-250"]} ${Xs["ease-default"]};
`,vc=K.default(f.ChevronDownIcon)`
    color: ${Ks.icon};
    height: ${qs.Spec["heading-size-sm"]};
    width: ${qs.Spec["heading-size-sm"]};
`;var yc={exports:{}};yc.exports=function(){var e=1e3,t=6e4,r=36e5,n="millisecond",i="second",o="minute",a="hour",s="day",l="week",c="month",d="quarter",u="year",f="date",h="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}},b=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},v={s:b,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),i=r%60;return(t<=0?"+":"-")+b(n,2,"0")+":"+b(i,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),i=t.clone().add(n,c),o=r-i<0,a=t.clone().add(n+(o?-1:1),c);return+(-(n+(r-i)/(o?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:u,w:l,d:s,D:f,h:a,m:o,s:i,ms:n,Q:d}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},y="en",x={};x[y]=m;var w="$isDayjsObject",$=function(e){return e instanceof k||!(!e||!e[w])},C=function e(t,r,n){var i;if(!t)return y;if("string"==typeof t){var o=t.toLowerCase();x[o]&&(i=o),r&&(x[o]=r,i=o);var a=t.split("-");if(!i&&a.length>1)return e(a[0])}else{var s=t.name;x[s]=t,i=s}return!n&&i&&(y=i),i||!n&&y},S=function(e,t){if($(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new k(r)},j=v;j.l=C,j.i=$,j.w=function(e,t){return S(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var k=function(){function m(e){this.$L=C(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var b=m.prototype;return b.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(j.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(p);if(n){var i=n[2]-1||0,o=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)}}return new Date(t)}(e),this.init()},b.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},b.$utils=function(){return j},b.isValid=function(){return!(this.$d.toString()===h)},b.isSame=function(e,t){var r=S(e);return this.startOf(t)<=r&&r<=this.endOf(t)},b.isAfter=function(e,t){return S(e)<this.startOf(t)},b.isBefore=function(e,t){return this.endOf(t)<S(e)},b.$g=function(e,t,r){return j.u(e)?this[t]:this.set(r,e)},b.unix=function(){return Math.floor(this.valueOf()/1e3)},b.valueOf=function(){return this.$d.getTime()},b.startOf=function(e,t){var r=this,n=!!j.u(t)||t,d=j.p(e),h=function(e,t){var i=j.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?i:i.endOf(s)},p=function(e,t){return j.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},g=this.$W,m=this.$M,b=this.$D,v="set"+(this.$u?"UTC":"");switch(d){case u:return n?h(1,0):h(31,11);case c:return n?h(1,m):h(0,m+1);case l:var y=this.$locale().weekStart||0,x=(g<y?g+7:g)-y;return h(n?b-x:b+(6-x),m);case s:case f:return p(v+"Hours",0);case a:return p(v+"Minutes",1);case o:return p(v+"Seconds",2);case i:return p(v+"Milliseconds",3);default:return this.clone()}},b.endOf=function(e){return this.startOf(e,!1)},b.$set=function(e,t){var r,l=j.p(e),d="set"+(this.$u?"UTC":""),h=(r={},r[s]=d+"Date",r[f]=d+"Date",r[c]=d+"Month",r[u]=d+"FullYear",r[a]=d+"Hours",r[o]=d+"Minutes",r[i]=d+"Seconds",r[n]=d+"Milliseconds",r)[l],p=l===s?this.$D+(t-this.$W):t;if(l===c||l===u){var g=this.clone().set(f,1);g.$d[h](p),g.init(),this.$d=g.set(f,Math.min(this.$D,g.daysInMonth())).$d}else h&&this.$d[h](p);return this.init(),this},b.set=function(e,t){return this.clone().$set(e,t)},b.get=function(e){return this[j.p(e)]()},b.add=function(n,d){var f,h=this;n=Number(n);var p=j.p(d),g=function(e){var t=S(h);return j.w(t.date(t.date()+Math.round(e*n)),h)};if(p===c)return this.set(c,this.$M+n);if(p===u)return this.set(u,this.$y+n);if(p===s)return g(1);if(p===l)return g(7);var m=(f={},f[o]=t,f[a]=r,f[i]=e,f)[p]||1,b=this.$d.getTime()+n*m;return j.w(b,this)},b.subtract=function(e,t){return this.add(-1*e,t)},b.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||h;var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=j.z(this),o=this.$H,a=this.$m,s=this.$M,l=r.weekdays,c=r.months,d=r.meridiem,u=function(e,r,i,o){return e&&(e[r]||e(t,n))||i[r].slice(0,o)},f=function(e){return j.s(o%12||12,e,"0")},p=d||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(g,(function(e,n){return n||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return j.s(t.$y,4,"0");case"M":return s+1;case"MM":return j.s(s+1,2,"0");case"MMM":return u(r.monthsShort,s,c,3);case"MMMM":return u(c,s);case"D":return t.$D;case"DD":return j.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return u(r.weekdaysMin,t.$W,l,2);case"ddd":return u(r.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(o);case"HH":return j.s(o,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return p(o,a,!0);case"A":return p(o,a,!1);case"m":return String(a);case"mm":return j.s(a,2,"0");case"s":return String(t.$s);case"ss":return j.s(t.$s,2,"0");case"SSS":return j.s(t.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},b.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},b.diff=function(n,f,h){var p,g=this,m=j.p(f),b=S(n),v=(b.utcOffset()-this.utcOffset())*t,y=this-b,x=function(){return j.m(g,b)};switch(m){case u:p=x()/12;break;case c:p=x();break;case d:p=x()/3;break;case l:p=(y-v)/6048e5;break;case s:p=(y-v)/864e5;break;case a:p=y/r;break;case o:p=y/t;break;case i:p=y/e;break;default:p=y}return h?p:j.a(p)},b.daysInMonth=function(){return this.endOf(c).$D},b.$locale=function(){return x[this.$L]},b.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=C(e,t,!0);return n&&(r.$L=n),r},b.clone=function(){return j.w(this.$d,this)},b.toDate=function(){return new Date(this.valueOf())},b.toJSON=function(){return this.isValid()?this.toISOString():null},b.toISOString=function(){return this.$d.toISOString()},b.toString=function(){return this.$d.toUTCString()},m}(),D=k.prototype;return S.prototype=D,[["$ms",n],["$s",i],["$m",o],["$H",a],["$W",s],["$M",c],["$y",u],["$D",f]].forEach((function(e){D[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),S.extend=function(e,t){return e.$i||(e(t,k,S),e.$i=!0),S},S.locale=C,S.isDayjs=$,S.unix=function(e){return S(1e3*e)},S.en=x[y],S.Ls=x,S.p={},S}();var xc=Oi(yc.exports),wc={exports:{}};wc.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,n=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),r=60*t[1]+(+t[2]||0);return 0===r?0:"+"===t[0]?-r:r}(e)}],c=function(e){var t=o[e];return t&&(t.indexOf?t:t.s.concat(t.f))},d=function(e,t){var r,n=o.meridiem;if(n){for(var i=1;i<=24;i+=1)if(e.indexOf(n(i,0,t))>-1){r=i>12;break}}else r=e===(t?"pm":"PM");return r},u={A:[i,function(e){this.afternoon=d(e,!1)}],a:[i,function(e){this.afternoon=d(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[r,s("day")],Do:[i,function(e){var t=o.ordinal,r=e.match(/\d+/);if(this.day=r[0],t)for(var n=1;n<=31;n+=1)t(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[r,s("month")],MMM:[i,function(e){var t=c("months"),r=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],MMMM:[i,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[r,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function f(r){var n,i;n=r,i=o&&o.formats;for(var a=(r=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,r,n){var o=n&&n.toUpperCase();return r||i[n]||e[n]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,r){return t||r.slice(1)}))}))).match(t),s=a.length,l=0;l<s;l+=1){var c=a[l],d=u[c],f=d&&d[0],h=d&&d[1];a[l]=h?{regex:f,parser:h}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},r=0,n=0;r<s;r+=1){var i=a[r];if("string"==typeof i)n+=i.length;else{var o=i.regex,l=i.parser,c=e.slice(n),d=o.exec(c)[0];l.call(t,d),e=e.replace(d,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var r=e.hours;t?r<12&&(e.hours+=12):12===r&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,r){r.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var n=t.prototype,i=n.parse;n.parse=function(e){var t=e.date,n=e.utc,a=e.args;this.$u=n;var s=a[1];if("string"==typeof s){var l=!0===a[2],c=!0===a[3],d=l||c,u=a[2];c&&(u=a[2]),o=this.$locale(),!l&&u&&(o=r.Ls[u]),this.$d=function(e,t,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var n=f(t)(e),i=n.year,o=n.month,a=n.day,s=n.hours,l=n.minutes,c=n.seconds,d=n.milliseconds,u=n.zone,h=new Date,p=a||(i||o?1:h.getDate()),g=i||h.getFullYear(),m=0;i&&!o||(m=o>0?o-1:h.getMonth());var b=s||0,v=l||0,y=c||0,x=d||0;return u?new Date(Date.UTC(g,m,p,b,v,y,x+60*u.offset*1e3)):r?new Date(Date.UTC(g,m,p,b,v,y,x)):new Date(g,m,p,b,v,y,x)}catch(e){return new Date("")}}(t,s,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),d&&t!=this.format(s)&&(this.$d=new Date("")),o={}}else if(s instanceof Array)for(var h=s.length,p=1;p<=h;p+=1){a[1]=s[p-1];var g=r.apply(this,a);if(g.isValid()){this.$d=g.$d,this.$L=g.$L,this.init();break}p===h&&(this.$d=new Date(""))}else i.call(this,e)}}}();var $c=Oi(wc.exports),Cc={exports:{}};Cc.exports=function(e,t,r){t.prototype.isBetween=function(e,t,n,i){var o=r(e),a=r(t),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(o,n):!this.isBefore(o,n))&&(l?this.isBefore(a,n):!this.isAfter(a,n))||(s?this.isBefore(o,n):!this.isAfter(o,n))&&(l?this.isAfter(a,n):!this.isBefore(a,n))}};var Sc=Oi(Cc.exports),jc={exports:{}};jc.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var kc=Oi(jc.exports),Dc={exports:{}};Dc.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var Tc,Ec,Oc=Oi(Dc.exports),Ic={exports:{}};Ic.exports=(Tc={year:0,month:1,day:2,hour:3,minute:4,second:5},Ec={},function(e,t,r){var n,i=function(e,t,r){void 0===r&&(r={});var n=new Date(e),i=function(e,t){void 0===t&&(t={});var r=t.timeZoneName||"short",n=e+"|"+r,i=Ec[n];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:r}),Ec[n]=i),i}(t,r);return i.formatToParts(n)},o=function(e,t){for(var n=i(e,t),o=[],a=0;a<n.length;a+=1){var s=n[a],l=s.type,c=s.value,d=Tc[l];d>=0&&(o[d]=parseInt(c,10))}var u=o[3],f=24===u?0:u,h=o[0]+"-"+o[1]+"-"+o[2]+" "+f+":"+o[4]+":"+o[5]+":000",p=+e;return(r.utc(h).valueOf()-(p-=p%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=n);var i=this.utcOffset(),o=this.toDate(),a=o.toLocaleString("en-US",{timeZone:e}),s=Math.round((o-new Date(a))/1e3/60),l=r(a,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-s,!0);if(t){var c=l.utcOffset();l=l.add(i-c,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var t=this.$x.$timezone||r.tz.guess(),n=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var n=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,e,t).tz(this.$x.$timezone,!0)},r.tz=function(e,t,i){var a=i&&t,s=i||t||n,l=o(+r(),s);if("string"!=typeof e)return r(e).tz(s);var c=function(e,t,r){var n=e-60*t*1e3,i=o(n,r);if(t===i)return[n,t];var a=o(n-=60*(i-t)*1e3,r);return i===a?[n,i]:[e-60*Math.min(i,a)*1e3,Math.max(i,a)]}(r.utc(e,a).valueOf(),l,s),d=c[0],u=c[1],f=r(d).utcOffset(u);return f.$x.$timezone=s,f},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function(e){n=e}});var Fc,Mc=Oi(Ic.exports);xc.extend(Sc),xc.extend(Oc),xc.extend(kc),xc.extend($c),xc.extend(Mc),function(e){e.generateDays=e=>{const t=e.startOf("month"),r=xc(t).startOf("week");return _c(r).map((e=>Ac(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Ac(t)},e.generateMonths=e=>{const t=[];for(let r=0;r<12;r++){const n=e.month(r);t.push(xc(n))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),r=10*Math.floor(t/10),n=e.year(r),i=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)i.push(n.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+xc(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=xc(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,r,n="day")=>!t&&!r||(t&&r?e.isBetween(t,r,n,"[]"):t?e.isSameOrAfter(t,n):e.isSameOrBefore(r,n)),e.isPreviousMonthWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"month"),r,void 0,"month"),e.isPreviousYearWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"year"),r,void 0,"year"),e.isPreviousDecadeWithinRange=(t,r)=>{const{beginDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).subtract(1,"year"),r,void 0,"year")},e.isNextMonthWithinRange=(t,r)=>e.isWithinRange(t.add(1,"month"),void 0,r,"month"),e.isNextYearWithinRange=(t,r)=>e.isWithinRange(t.add(1,"year"),void 0,r,"year"),e.isNextDecadeWithinRange=(t,r)=>{const{endDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).add(1,"year"),void 0,r,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,r,n,i)=>{const o=e.isWithinRange(t,n?xc(n):void 0,i?xc(i):void 0),a=r&&r.includes(t.format("YYYY-MM-DD"));return!o||!!a}}(Fc||(Fc={}));const _c=e=>{const t=[e];for(let r=1;r<6;r++){const n=e.add(r,"week");t.push(n)}return t},Ac=e=>{const t=[];for(let r=0;r<7;r++){const n=e.add(r,"day");t.push(n)}return t},Bc=[1,3,5,7,8,10,12],Rc=[4,6,9,11];var zc,Pc,Lc,Nc;!function(e){e.clampDay=(t,r,n)=>{const i=parseInt(t),o=parseInt(r),a=parseInt(n);return 0==i?"1":Bc.includes(o)?Math.min(i,31).toString():Rc.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,r="HH:mm")=>{const n=xc(e,r);return xc(t,r).diff(n,"minute")},e.toDayjs=e=>e?xc(e):xc(),e.addMinutesToTime=(e,t,r="HH:mm")=>xc(e,r).add(t,"minutes").format(r),e.isSame=(e,t,r="day")=>xc(e).isSame(xc(t),r)}(zc||(zc={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:r,minDate:n,maxDate:i}=t;return!!(e&&r&&r.length&&r.includes(e))||(!(!n||!xc(e).isBefore(n,"day"))||!(!i||!xc(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(xc(e).isValid())return e}return""}}(Pc||(Pc={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Lc||(Lc={})),function(e){e.transformWithSpaces=(e,t)=>{const r="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const r=Math.floor(t/9);return e.length>=2*r||1===e.split(" ").length&&e.length>r},e.truncateOneLine=(e,t,r,n,i=8)=>{let o=0;t>r&&(o=Math.floor((t-r)/i));const a=n+o;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,r,n=1.2)=>{const i=Math.floor(2*t/(.6*r))*(2/n);if(e.length<=i)return e;const o=Math.floor(.6*i),a=Math.floor(.2*i);return`${e.substring(0,o)}...${e.substring(e.length-a)}`},e.getTextWidth=(t,r)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=r;return n.measureText(t).width},e.maskValue=(e,r)=>{if(!e)return e;const{maskRange:n,unmaskRange:i,maskChar:o="•",maskRegex:a,maskTransformer:s}=r;if(s)return s(e);if(a)return e.replace(a,o);if(n){const{startIndex:r,endIndex:i}=t(n[0],n[1]);return e.substring(0,r)+o.repeat(e.substring(r,i+1).length)+e.substring(i+1)}if(i){const{startIndex:r,endIndex:n}=t(i[0],i[1]);return o.repeat(e.substring(0,r).length)+e.substring(r,n+1)+o.repeat(e.substring(n+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(Nc||(Nc={}));function Hc(e){const r=t.useRef(null);return t.useLayoutEffect((()=>{r.current=e}),[e]),t.useCallback(((...e)=>{var t;return null===(t=r.current)||void 0===t?void 0:t.call(r,...e)}),[])}const Wc=(e,r,n="window",i)=>{const o=t.useRef();t.useEffect((()=>{o.current=r}),[r]),t.useEffect((()=>{let t;switch(n){case"window":t=window;break;case"document":t=document;break;default:t=n}if(!t||!t.addEventListener)return;const r=e=>{var t;return null===(t=o.current)||void 0===t?void 0:t.call(o,e)};return t.addEventListener(e,r,i),()=>{null==t||t.removeEventListener(e,r,i)}}),[e,n])},Vc="undefined"!=typeof window?t.useLayoutEffect:t.useEffect,Yc=()=>{const[e,r]=t.useState(!1);return t.useEffect((()=>{r(!0)}),[]),e};function Uc({ref:e,formatter:t}){return()=>{var r;const n=e.current;if(!n)return;const i=n.value,o=t(i),a=null!==(r=n.selectionEnd)&&void 0!==r?r:0,s=i.substring(0,a),l=t(s),c=s.length-l.length,d=Math.max(0,a-c);return{nextValue:o,updateCaretPosition:()=>{n.value=o,n.setSelectionRange(d,d)}}}}const Kc=e=>{const r=(e=>{const r=t.useRef(e),n=t.useRef();return t.useEffect((()=>{n.current=r.current,r.current=e}),[e]),n.current})(e);return r!==e},qc=e=>{const[r,n]=t.useState(e),i=t.useRef(e);return[r,t.useCallback((e=>{i.current=e,n(e)}),[]),i]},Xc=K.default.div`
    position: relative;
    width: 100%;
    z-index: 1;
    margin: ${Zs["spacing-32"]} 0;

    ${el.MaxWidth.xl} {
        margin: ${Zs["spacing-24"]} 0;
    }

    ${el.MaxWidth.lg} {
        margin: ${Zs["spacing-16"]} 0;
    }
`,Gc=K.default.ul`
    display: inline-flex;
    width: 100%;
    flex-wrap: wrap;
    white-space: nowrap;
    margin-left: -${Zs["spacing-8"]};
    font-size: ${qs.Spec["body-size-md"]};
    overflow-x: scroll;
    overflow-y: hidden;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 10+ */
    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    ${el.MaxWidth.lg} {
        flex-wrap: nowrap;
    }
`,Zc=K.default.div`
    width: ${Zs["spacing-64"]};
    height: calc(1lh + ${Zs["spacing-4"]});
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;

    ${e=>{let t;const r="rgba(255,255,255,0.001)";return t="left"===e.$position?`\n\t\t\t\tleft: -2%;\n\t\t\t\tbackground-image: linear-gradient(\n\t\t\t\t\tto right, \n\t\t\t\t\t${e.$backgroundColor||"white"}, \n\t\t\t\t\t${r}\n\t\t\t\t);\n\t\t\t`:`\n\t\t\t\tright: -2%;\n\t\t\t\tbackground-image: linear-gradient(\n\t\t\t\t\tto left,\n\t\t\t\t\t${e.$backgroundColor||"white"},\n\t\t\t\t\t${r}\n\t\t\t\t);\n\t\t\t`,i.css`
            ${el.MaxWidth.lg} {
                ${t}
            }
        `}};
`,Qc=K.default.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    line-height: inherit;
    font-size: inherit;
    ${e=>e.$styleProps||""};
`,Jc=K.default(h.ChevronRightIcon)`
    margin: ${Zs["spacing-8"]};
    height: 1em;
    width: 1em;
    color: ${Ks["icon-subtle"]};
`,ed=K.default(exports.Typography.BodyMD)`
    margin: ${Zs["spacing-8"]} !important;
`,td=K.default(exports.Typography.LinkMD)`
    margin: ${Zs["spacing-8"]} !important;
`,rd=K.default(kl)`
    flex-direction: ${e=>"right"===e.$buttonIconPosition?"row-reverse":"row"};
    gap: 0.5rem;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`,nd=(t,r)=>{const{children:n,disabled:i=!1,styleType:o="default",danger:a=!1,icon:s,iconPosition:l="left",loading:c=!1}=t,d=X(t,["children","disabled","styleType","danger","icon","iconPosition","loading"]),u={$buttonIconPosition:l,$buttonStyle:i?"disabled":o,$buttonSizeStyle:"default",$buttonIsDanger:a};return e.jsxs(rd,Object.assign({ref:r,"data-testid":d["data-testid"]||"button-with-icon",disabled:i},u,d,{children:[c?e.jsx(jl,{}):s,e.jsx("span",{children:n})]}))};nd.displayName="ButtonWithIcon.Default";const id=(t,r)=>{const{children:n,disabled:i=!1,styleType:o="default",danger:a=!1,icon:s,iconPosition:l="left",loading:c=!1}=t,d=X(t,["children","disabled","styleType","danger","icon","iconPosition","loading"]),u={$buttonIconPosition:l,$buttonStyle:i?"disabled":o,$buttonSizeStyle:"small",$buttonIsDanger:a};return e.jsxs(rd,Object.assign({ref:r,"data-testid":d["data-testid"]||"button-with-icon",disabled:i},u,d,{children:[c?e.jsx(jl,{}):s,e.jsx("span",{children:n})]}))};id.displayName="ButtonWithIcon.Small";const od={Default:Y.default.forwardRef(nd),Small:Y.default.forwardRef(id)},ad=K.default.div`
    --vertical-inset: ${Zs["spacing-24"]};
    --horizontal-inset: ${Zs["spacing-20"]};
    --header-bottom-spacing: ${Zs["spacing-4"]};

    border: ${Gs["width-010"]} ${Gs.solid} ${Ks.border};
    border-radius: ${Qs.sm};
    overflow: hidden;

    width: ${e=>e.$width}px;
    max-width: 41rem;
    min-width: 21rem;

    ${el.MaxWidth.sm} {
        min-width: 17.5rem;
    }
`,sd=i.css`
    color: ${Ks.icon};
    height: 1rem;
    width: 1rem;
`,ld=K.default(p.ChevronLeftIcon)`
    ${sd}
`,cd=K.default(h.ChevronRightIcon)`
    ${sd}
`,dd=K.default(f.ChevronDownIcon)`
    ${sd}
    transition: transform 250ms ease-in-out;
    margin-left: 0.5rem;
`,ud=K.default.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    padding-top: var(--vertical-inset);
    padding-bottom: var(--vertical-inset);
`,fd=K.default.div`
    display: flex;
    flex: 1;
    position: relative;
`,hd=K.default.div`
    isolation: isolate;
    width: 100%;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,pd=K.default.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${Ks.bg};

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);

    ${e=>{if(!e.$visible)return i.css`
                display: none;
            `}}
`,gd=K.default.div`
    display: flex;
    justify-content: space-between;

    padding-left: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-right: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-bottom: var(--header-bottom-spacing);
`,md=K.default.div`
    display: flex;
`,bd=K.default.button`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;

    ${e=>!1===e.$visible?i.css`
                display: none;
            `:e.$expanded?i.css`
                ${dd} {
                    transform: rotate(180deg);
                }
            `:void 0};
`,vd=K.default.span`
    ${qs["body-md-regular"]}
    color: ${Ks.text};
`,yd=K.default.div`
    display: flex;
`,xd=K.default(nl)`
    margin: auto 0;
    padding: 0.75rem;

    :disabled {
        cursor: not-allowed;
    }
`,wd=K.default.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,$d=K.default(Il.Small)`
    flex: 1;
`,Cd=K.default.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 2.5rem);
    align-content: center;
    justify-content: center;

    gap: 0.5rem 0;
`,Sd=K.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${Qs.md};
    margin: 0 0.5rem;
    transition: ${Xs["duration-150"]} ${Xs["ease-default"]};

    // default styles
    ${qs["body-md-regular"]}
    border-radius: ${Qs.md};
    border: ${Gs["width-010"]} ${Gs.solid} transparent;
    background-clip: border-box;
    color: ${Ks.text};
    cursor: default;

    // cursor style
    ${e=>e.$interactive?i.css`
                cursor: pointer;
            `:e.$disabledDisplay?i.css`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:e,$interactive:t,$disabledDisplay:r})=>"selected-month"===e?i.css`
                background: ${Ks["bg-selected"]};
                border-color: ${Ks["border-selected"]};
                color: ${Ks["text-selected"]};
                font-weight: ${qs.Spec["weight-semibold"]};

                ${t&&i.css`
                    &:hover {
                        background: ${Ks["bg-selected-hover"]};
                        border-color: ${Ks["border-selected-hover"]};
                        color: ${Ks["text-selected-hover"]};
                    }
                `}
            `:"current-month"===e?i.css`
                color: ${Ks["text-primary"]};
                font-weight: ${qs.Spec["weight-semibold"]};
            `:r?i.css`
                color: ${Ks["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:t})=>{if(t)return"selected-month"===e?i.css`
                &:hover {
                    background: ${Ks["bg-selected-hover"]};
                    border-color: ${Ks["border-selected-hover"]};
                    color: ${Ks["text-selected-hover"]};
                    font-weight: ${qs.Spec["weight-semibold"]};
                }
            `:i.css`
            &:hover {
                background: ${Ks["bg-hover"]};
                color: ${Ks["text-hover"]};
                font-weight: ${qs.Spec["weight-semibold"]};
            }
        `}}
`,jd=({calendarDate:r,currentFocus:n,selectedStartDate:i,selectedEndDate:o,viewCalendarDate:a,isNewSelection:s,minDate:l,maxDate:c,allowDisabledSelection:d,onMonthSelect:u})=>{const f=t.useMemo((()=>Fc.generateMonths(xc(r))),[r]),h=e=>{const t="start"===n&&o&&e.isAfter(o,"month")&&s,r="end"===n&&i&&e.isBefore(i,"month")&&s;return!(!t&&!r)},p=e=>{const t=e.format("MMMM"),r=(n=e,!Fc.isWithinRange(n,l?xc(l):void 0,c?xc(c):void 0,"month"));var n;const i=a.isSame(e,"month")?"selected-month":xc().isSame(e,"month")?"current-month":"default";return{disabledDisplay:r||h(e),interactive:!r||d,month:t,variant:i}};return f.length?e.jsx(Cd,{children:f.map((t=>{const{disabledDisplay:r,interactive:n,variant:i,month:o}=p(t);return e.jsx(Sd,{$variant:i,$disabledDisplay:r,$interactive:n,onClick:()=>((e,t)=>{t||u(e)})(t,!n),children:o},o)}))}):null},kd=K.default.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-content: center;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
`,Dd=K.default.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0.5rem;
    transition: ${Xs["duration-150"]} ${Xs["ease-default"]};
    padding: 0.5rem;

    // default styles
    ${qs["body-md-regular"]}
    border-radius: ${Qs.md};
    border: ${Gs["width-010"]} ${Gs.solid} transparent;
    background-clip: border-box;
    color: ${Ks.text};
    cursor: default;

    // cursor style
    ${({$interactive:e,$disabledDisplay:t})=>e?i.css`
                cursor: pointer;
            `:t?i.css`
                cursor: not-allowed;
            `:void 0}

    // background, border and text styles
    ${({$variant:e,$interactive:t,$disabledDisplay:r})=>"selected-year"===e?i.css`
                background: ${Ks["bg-selected"]};
                border-color: ${Ks["border-selected"]};
                color: ${Ks["text-selected"]};
                font-weight: ${qs.Spec["weight-semibold"]};

                ${t&&i.css`
                    &:hover {
                        background: ${Ks["bg-selected-hover"]};
                        border-color: ${Ks["border-selected-hover"]};
                        color: ${Ks["text-selected-hover"]};
                    }
                `}
            `:"current-year"===e?i.css`
                color: ${Ks["text-primary"]};
                font-weight: ${qs.Spec["weight-semibold"]};
            `:"other-decade"===e||r?i.css`
                color: ${Ks["text-disabled-subtlest"]};
            `:void 0}

    // hover styles
    ${({$variant:e,$interactive:t})=>{if(t)return"selected-year"===e?i.css`
                &:hover {
                    background: ${Ks["bg-selected-hover"]};
                    border-color: ${Ks["border-selected-hover"]};
                    color: ${Ks["text-selected-hover"]};
                    font-weight: ${qs.Spec["weight-semibold"]};
                }
            `:i.css`
            &:hover {
                background: ${Ks["bg-hover"]};
                color: ${Ks["text-hover"]};
                font-weight: ${qs.Spec["weight-semibold"]};
            }
        `}}
`,Td=({calendarDate:r,currentFocus:n,selectedStartDate:i,selectedEndDate:o,viewCalendarDate:a,isNewSelection:s,minDate:l,maxDate:c,allowDisabledSelection:d,onYearSelect:u})=>{const f=t.useMemo((()=>Fc.generateDecadeOfYears(xc(r))),[r]),h=e=>{const t="start"===n&&o&&e.isAfter(o,"year")&&s,r="end"===n&&i&&e.isBefore(i,"year")&&s;return!(!t&&!r)},p=e=>{const t=[0,11].includes(f.indexOf(e)),r=e.year(),n=(i=e,!Fc.isWithinRange(i,l?xc(l):void 0,c?xc(c):void 0,"year"));var i;const o=t?"other-decade":a.isSame(e,"year")?"selected-year":xc().isSame(e,"year")?"current-year":"default";return{disabledDisplay:n||h(e),interactive:!n||d,year:r,variant:o}};return f.length?e.jsx(kd,{children:f.map((t=>{const{disabledDisplay:r,interactive:n,variant:i,year:o}=p(t);return e.jsx(Dd,{$variant:i,$disabledDisplay:r,$interactive:!!n,onClick:()=>((e,t)=>{t||u(e)})(t,!n),children:o},o)}))}):null},Ed=Y.default.forwardRef(((r,n)=>{var{children:i,initialCalendarDate:o,minDate:a,maxDate:s,currentFocus:l,selectedStartDate:c,selectedEndDate:d,selectWithinRange:u,dynamicHeight:f=!1,allowDisabledSelection:h,onCalendarDateChange:p,withButton:g,doneButtonDisabled:m,onDismiss:b,showNavigationHeader:v=!0,getLeftArrowDate:y,getRightArrowDate:x,isLeftArrowDisabled:w,isRightArrowDisabled:$,getMonthHeaderLabel:C,getYearHeaderLabel:S}=r,j=X(r,["children","initialCalendarDate","minDate","maxDate","currentFocus","selectedStartDate","selectedEndDate","selectWithinRange","dynamicHeight","allowDisabledSelection","onCalendarDateChange","withButton","doneButtonDisabled","onDismiss","showNavigationHeader","getLeftArrowDate","getRightArrowDate","isLeftArrowDisabled","isRightArrowDisabled","getMonthHeaderLabel","getYearHeaderLabel"]);const[k,D]=t.useState(zc.toDayjs(o)),[T,E]=t.useState(zc.toDayjs(o)),[O,I]=t.useState("default"),F=t.useRef(null),M=t.useRef(null),_=t.useRef(null);t.useImperativeHandle(n,(()=>({defaultView(){I("default")},resetView(){const e=zc.toDayjs(o);D(e),E(e),I("default")},setCalendarDate(e){const t=zc.toDayjs(e);D(t),E(t)}}))),t.useEffect((()=>{const e=zc.toDayjs(o);D(e),E(e)}),[o]),t.useEffect((()=>{N(T)}),[T]);const A=()=>{var e;"month-options"!==O?(I("month-options"),null===(e=_.current)||void 0===e||e.focus()):(I("default"),D(T))},B=()=>{"default"!==O?(I("default"),D(T)):I("year-options")},R=()=>{var e;null===(e=_.current)||void 0===e||e.focus();const t=y?y(k):k.subtract(1,"month");switch(O){case"default":E(t),D(t);break;case"month-options":D((e=>e.subtract(1,"year")));break;case"year-options":D((e=>e.subtract(10,"year")))}},z=()=>{var e;null===(e=_.current)||void 0===e||e.focus();const t=x?x(k):k.add(1,"month");switch(O){case"default":E(t),D(t);break;case"month-options":D((e=>e.add(1,"year")));break;case"year-options":D((e=>e.add(10,"year")))}},P=e=>{D(e),E(e),g||I("default")},L=()=>{const e=zc.toDayjs(o);D(e),E(e),"default"===O?H("reset"):I("default")},N=e=>{p&&p(e)},H=e=>{b&&b(e)},W=()=>{if(!a||h)return!1;const e=xc(a);return"month-options"===O?!Fc.isPreviousYearWithinRange(k,e):"year-options"===O?!Fc.isPreviousDecadeWithinRange(k,e):w?w(k):!Fc.isPreviousMonthWithinRange(k,e)},V=()=>{if(!s||h)return!1;const e=xc(s);return"month-options"===O?!Fc.isNextYearWithinRange(k,e):"year-options"===O?!Fc.isNextDecadeWithinRange(k,e):$?$(k):!Fc.isNextMonthWithinRange(k,e)},Y=()=>{if("year-options"===O){const{beginDecade:e,endDecade:t}=Fc.getStartEndDecade(k);return`${e} to ${t}`}return S?S(k):k.format("YYYY")},U=()=>{const t=C?C(k):k.format("MMM");return e.jsxs(e.Fragment,{children:[e.jsxs(bd,{type:"button",tabIndex:-1,$expanded:"month-options"===O,$visible:"default"===O,id:"month-dropdown",onClick:A,children:[e.jsx(vd,{children:t}),e.jsx(dd,{})]}),e.jsxs(bd,{type:"button",tabIndex:-1,$expanded:"default"!==O,id:"year-dropdown",onClick:B,children:[e.jsx(vd,{children:Y()}),e.jsx(dd,{})]})]})},K=()=>{switch(O){case"month-options":return e.jsx(jd,{calendarDate:k,currentFocus:l,minDate:a,maxDate:s,selectedStartDate:c,selectedEndDate:d,viewCalendarDate:T,isNewSelection:!!u,onMonthSelect:P,allowDisabledSelection:h});case"year-options":return e.jsx(Td,{calendarDate:k,currentFocus:l,minDate:a,maxDate:s,selectedStartDate:c,selectedEndDate:d,viewCalendarDate:T,isNewSelection:!!u,onYearSelect:P,allowDisabledSelection:h});default:return null}};return e.jsxs(ud,Object.assign({ref:_,"data-id":"calendar-container","data-testid":"calendar-container"},j,{children:[v&&e.jsxs(gd,{"data-id":"calendar-header","data-testid":"calendar-header",children:[e.jsx(md,{children:U()}),e.jsxs(yd,{children:[e.jsx(xd,{"aria-label":"Previous month","data-testid":"left-arrow-btn",disabled:W(),focusHighlight:!1,tabIndex:-1,onClick:R,children:e.jsx(ld,{})}),e.jsx(xd,{"aria-label":"Next month","data-testid":"right-arrow-btn",disabled:V(),focusHighlight:!1,tabIndex:-1,onClick:z,children:e.jsx(cd,{})})]})]}),e.jsx(fd,{children:(()=>{const t="function"==typeof i?i({calendarDate:T,currentView:O}):i;return f?e.jsxs(e.Fragment,{children:["default"===O&&t,K()]}):e.jsxs(e.Fragment,{children:[e.jsx(hd,{children:t}),e.jsx(pd,{$visible:"default"!==O,children:K()})]})})()}),(()=>{if(!g)return;const t=!!("default"===O)&&m;return e.jsxs(wd,{children:[e.jsx($d,{ref:M,"data-testid":"cancel-button",styleType:"light",type:"button",onClick:L,children:"Cancel"}),e.jsx($d,{"data-testid":"done-button",ref:F,type:"button",onClick:()=>{t||(D(T),"default"===O?H("confirmed"):I("default"))},disabled:t,children:"Done"})]})})()]}))})),Od=K.default.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 0.25rem;
`,Id=K.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    pointer-events: none;
    user-select: none;

    ${qs["body-sm-semibold"]};
    color: ${Ks.text};
`,Fd=K.default.div`
    grid-column: 1 / -1;
    display: flex;
`,Md=e=>{let t=Ks.bg,r="transparent";switch(e.$type){case"hover-subtle":t=Ks["bg-hover"],r=Ks["bg-hover"];break;case"hover":t=Ks["bg-hover-strong"],r=Ks["bg-hover-strong"];break;case"hover-outline":t=Ks["bg-hover-subtle"],r=Ks["border-hover"];break;case"selected-outline":t=Ks["bg-selected"],r=Ks["border-selected"];break;case"selected-outline-subtle":t=Ks["bg-selected"],r=Ks["border-selected-subtle"];break;case"selected-hover":t=Ks["bg-selected-hover"];break;case"selected-hover-outline":t=Ks["bg-selected-hover"],r=Ks["border-selected-hover"]}return{color:t,borderColor:r}},_d=K.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 2.5rem;
`,Ad=K.default.div`
    position: absolute;
    height: 2.5rem;
    width: 50%;
    transition: ${Xs["duration-150"]} ${Xs["ease-default"]};
    border: ${Gs["width-010"]} ${Gs.solid} transparent;
    border-left: none;
    border-right: none;

    ${e=>{if(!e.$type)return;const{color:t,borderColor:r}=Md(e);return i.css`
            background-color: ${t};
            background-clip: border-box;
            border-top-color: ${r};
            border-bottom-color: ${r};
        `}}
`,Bd=K.default(Ad)`
    left: 0;
`,Rd=K.default(Ad)`
    right: 0;
`,zd=K.default.div`
    position: absolute;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    transition: ${Xs["duration-150"]} ${Xs["ease-default"]};

    border: ${Gs["width-010"]} ${Gs.solid} transparent;
    border-radius: ${Qs.md};

    ${e=>{if(e.$type){const{color:t,borderColor:r}=Md(e);return i.css`
                background-color: ${t};
                background-clip: content-box;
                border-color: ${r};
            `}}}
`,Pd=K.default(zd)`
    right: calc(50% - 1.25rem);
    clip-path: inset(-3px 1.25rem -3px -3px);
`,Ld=K.default(zd)`
    left: calc(50% - 1.25rem);
    clip-path: inset(-3px -3px -3px 1.25rem);
`,Nd=K.default.div`
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 2;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;
    ${qs["body-md-regular"]}
    transition: ${Xs["duration-150"]} ${Xs["ease-default"]};

    cursor: ${e=>e.$interactive?"pointer":null===e.$interactive?"default":"not-allowed"};

    ${e=>{const{$disabled:t,$type:r}=e;if(t)return"hidden"===r?i.css`
                    visibility: hidden;
                `:i.css`
                color: ${Ks["text-disabled-subtlest"]};
            `;switch(r){case"selected":return i.css`
                    font-weight: ${qs.Spec["weight-semibold"]};
                    color: ${Ks["text-selected"]};
                `;case"selected-hover":return i.css`
                    font-weight: ${qs.Spec["weight-semibold"]};
                    color: ${Ks["text-selected-hover"]};
                `;case"current":return i.css`
                    font-weight: ${qs.Spec["weight-semibold"]};
                    color: ${Ks["text-primary"]};
                `;case"hover":return i.css`
                    font-weight: ${qs.Spec["weight-semibold"]};
                    color: ${Ks["text-hover"]};
                `;case"unavailable":return i.css`
                    color: ${Ks["text-disabled-subtlest"]};
                `;case"hidden":return i.css`
                    visibility: hidden;
                `;default:return i.css`
                    color: ${Ks.text};
                `}}}
`,Hd=K.default.div`
    position: absolute;
    width: 4px;
    height: 4px;
    background-color: currentColor;
    border-radius: 50%;
    bottom: 4px;
`,Wd=({bgLeft:t,bgRight:r,circleLeft:n,circleRight:i,labelType:o,disabled:a,interactive:s,currentDateIndicator:l,date:c,onSelect:d,onHover:u,onHoverEnd:f})=>{const h=xc().isSame(c,"day");return e.jsxs(_d,{children:[e.jsx(Bd,{$type:t}),e.jsx(Pd,{$type:n}),e.jsx(Rd,{$type:r}),e.jsx(Ld,{$type:i}),e.jsxs(Nd,{$type:o,$disabled:a,$interactive:s,onClick:()=>{d(c)},onMouseEnter:()=>{u(c)},onMouseLeave:()=>{f&&f(c)},children:[c.date(),l&&h&&e.jsx(Hd,{$disabled:a})]})]})},Vd=({date:t,calendarDate:r,startDate:n,endDate:i,currentFocus:o,hoverDate:a,minDate:s,maxDate:l,disabledDates:c,allowDisabledSelection:d,isNewSelection:u,showActiveMonthDaysOnly:f,onSelect:h,onHover:p})=>{const g=Fc.isDisabledDay(t,c,s,l),m=!g||d,b=()=>{const e=xc(a),t=e.isBefore(i,"day"),r=e.isAfter(n,"day");let s,l,c,d;return"start"===o&&i&&t&&(n&&r?(c=a,d=i):(s=a,l=n||i)),"end"===o&&n&&r&&(i&&t?(c=n,d=a):(s=i||n,l=a)),{hoverStart:s,hoverEnd:l,overlapStart:c,overlapEnd:d}},v={date:t,calendarDate:r,disabled:g,interactive:m,currentDateIndicator:!0,onSelect:()=>{h(t,!m)},onHover:()=>{p(t.format("YYYY-MM-DD"),!m)}};return e.jsx(Wd,Object.assign({},v,(()=>{const e={};if(r.month()!==t.month())e.labelType=f?"hidden":"unavailable";else if(xc().isSame(t,"day")&&!g)e.labelType="current";else if(u){const r="end"===o&&n&&t.isBefore(n),a="start"===o&&i&&t.isAfter(i);(r||a)&&(e.labelType="unavailable")}return e})(),(()=>{const e={},o=t.isSame(n,"day"),a=t.isSame(i,"day");return f&&r.month()!==t.month()?(e.labelType="hidden",e):((n&&o||i&&a)&&(e.labelType="selected",e.circleLeft="selected-outline",e.circleRight="selected-outline"),n&&i&&t.isBetween(n,i,"day","[]")&&(e.labelType="selected",o||(e.bgLeft="selected-outline-subtle"),a||(e.bgRight="selected-outline-subtle")),e)})(),(()=>{if(!a)return{};const e={},r=t.isSame(a,"day"),{hoverStart:o,hoverEnd:s,overlapStart:l,overlapEnd:c}=b();if(r){const r=t.isSame(n,"day"),o=t.isSame(i,"day");r||o?(e.labelType="selected-hover",e.circleLeft="selected-hover-outline",e.circleRight="selected-hover-outline"):(e.labelType="hover",e.circleLeft="hover",e.circleRight="hover")}if(o&&s){if(t.isBetween(o,s,"day","[]")){const r=t.isSame(o,"day"),n=t.isSame(s,"day");r||(e.labelType="hover",e.bgLeft="hover-outline"),n||(e.labelType="hover",e.bgRight="hover-outline")}return e}return l&&c?(t.isBetween(l,c,"day","[]")&&r&&(e.labelType="selected-hover",e.circleLeft="selected-hover",e.circleRight="selected-hover"),e):e})()))};xc.extend(Sc);const Yd=({calendarDate:r,currentFocus:n,disabledDates:i,selectedStartDate:o,selectedEndDate:a,onSelect:s,onHover:l,isNewSelection:c,minDate:d,maxDate:u,allowDisabledSelection:f,showActiveMonthDaysOnly:h})=>{const p=t.useMemo((()=>Fc.generateDays(r)),[r]),[g,m]=t.useState(""),b=(e,t)=>{t&&!f||s(e)},v=(e,t)=>{t&&!f||(m(e),l(e))},y=()=>{m(""),l("")};return e.jsxs(Od,{"data-testid":"calendar-content",children:[p[0].map(((t,r)=>e.jsx(Id,{children:xc(t).format("ddd")},`week-day-${r}`))),p.map(((t,s)=>e.jsx(Fd,{onMouseLeave:y,children:t.map(((t,s)=>e.jsx(Vd,{date:t,calendarDate:r,startDate:o,endDate:a,hoverDate:g,currentFocus:n,minDate:d,maxDate:u,disabledDates:i,allowDisabledSelection:f,isNewSelection:c,showActiveMonthDaysOnly:h,onSelect:b,onHover:v},`day-${s}`)))},s)))]})},Ud=({date:t,calendarDate:r,selectedDate:n,hoverDate:i,minDate:o,maxDate:a,disabledDates:s,allowDisabledSelection:l,numberOfDays:c=1,onSelect:d,onHover:u})=>{const f=Fc.isDisabledDay(t,s,o,a),h=!f||l,{start:p,end:g}=n?Fc.getFixedRangeStartEnd(zc.toDayjs(n),c):{start:void 0,end:void 0},{start:m,end:b}=i?Fc.getFixedRangeStartEnd(zc.toDayjs(i),c):{start:void 0,end:void 0},v=!!n&&t.isBetween(p,g,"day","[]"),y=!!i&&t.isBetween(m,b,"day","[]"),x=v&&t.isSame(p,"day")||y&&t.isSame(m,"day"),w=v&&t.isSame(g,"day")||y&&t.isSame(b,"day"),$=(e,t,r,n)=>{r?e.circleLeft=t:e.bgLeft=t,n?e.circleRight=t:e.bgRight=t},C={date:t,calendarDate:r,disabled:f,interactive:h,currentDateIndicator:!0,onSelect:()=>{d(t,!h)},onHover:()=>{u(t.format("YYYY-MM-DD"),!h)}};return e.jsx(Wd,Object.assign({},C,(()=>{const e={};return v||y?e.labelType="selected":r.month()!==t.month()?e.labelType="unavailable":xc().isSame(t,"day")&&!f&&(e.labelType="current"),e})(),(()=>{const e={},r=t.format("YYYY-MM-DD");return y&&$(e,"hover",r===m,r===b),v&&$(e,"selected-outline",r===p,r===g),v&&y&&($(e,"selected-hover-outline",x,w),r===m&&r!==p&&(e.circleLeft="selected-hover")),e})()))},Kd=({calendarDate:r,disabledDates:n,selectedStartDate:i,onSelect:o,onHover:a,minDate:s,maxDate:l,allowDisabledSelection:c,numberOfDays:d})=>{const u=t.useMemo((()=>Fc.generateDays(r)),[r]),[f,h]=t.useState(""),p=(e,t)=>{t&&!c||(o(e),e&&!xc(e).isSame(e,"month")&&h(""))},g=(e,t)=>{t&&!c||(h(e),a(e))},m=()=>{h(""),a("")};return e.jsxs(Od,{"data-testid":"calendar-content",children:[u[0].map(((t,r)=>e.jsx(Id,{children:xc(t).format("ddd")},`week-day-${r}`))),u.map(((t,o)=>e.jsx(Fd,{onMouseLeave:m,children:t.map(((t,o)=>e.jsx(Ud,{date:t,calendarDate:r,selectedDate:i,hoverDate:f,minDate:s,maxDate:l,disabledDates:n,allowDisabledSelection:c,onSelect:p,onHover:g,numberOfDays:d},`day-${o}`)))},o)))]})},qd=K.default.div`
    width: 100%;
    background: ${Ks.bg};
`,Xd=({date:t,calendarDate:r,selectedDate:n,hoverDate:i,minDate:o,maxDate:a,disabledDates:s,allowDisabledSelection:l,showActiveMonthDaysOnly:c,onSelect:d,onHover:u})=>{const f=Fc.isDisabledDay(t,s,o,a),h=!f||l,p={date:t,calendarDate:r,disabled:f,interactive:h,currentDateIndicator:!0,onSelect:()=>{d(t,!h)},onHover:()=>{u(t.format("YYYY-MM-DD"),!h)}};return e.jsx(Wd,Object.assign({},p,(()=>{const e={};r.month()!==t.month()?e.labelType=c?"hidden":"unavailable":xc().isSame(t,"day")&&!f&&(e.labelType="current");const o=t.isSame(n,"day"),a=t.isSame(i,"day");return o&&a?(e.labelType="selected-hover",e.circleLeft="selected-hover-outline",e.circleRight="selected-hover-outline"):o?(e.labelType="selected",e.circleLeft="selected-outline",e.circleRight="selected-outline"):a&&(e.labelType="hover",e.circleLeft="hover-subtle",e.circleRight="hover-subtle"),e})()))};xc.extend(Sc);const Gd=({calendarDate:r,disabledDates:n,selectedDate:i,onSelect:o,onHover:a,minDate:s,maxDate:l,allowDisabledSelection:c,showActiveMonthDaysOnly:d})=>{const u=t.useMemo((()=>Fc.generateDays(r)),[r]),[f,h]=t.useState(""),p=(e,t)=>{t&&!c||o(e)},g=(e,t)=>{t&&!c||(h(e),a(e))},m=()=>{h(""),a("")};return e.jsxs(Od,{"data-testid":"calendar-content",children:[u[0].map(((t,r)=>e.jsx(Id,{children:xc(t).format("ddd")},`week-day-${r}`))),u.map(((t,o)=>e.jsx(Fd,{onMouseLeave:m,children:t.map(((t,o)=>e.jsx(Xd,{date:t,calendarDate:r,selectedDate:i,hoverDate:f,minDate:s,maxDate:l,disabledDates:n,allowDisabledSelection:c,showActiveMonthDaysOnly:d,onSelect:p,onHover:g},`day-${o}`)))},o)))]})},Zd=({date:t,calendarDate:r,selectedDate:n,hoverDate:i,minDate:o,maxDate:a,disabledDates:s,allowDisabledSelection:l,onSelect:c,onHover:d})=>{const u=Fc.isDisabledDay(t,s,o,a),f=!u||l,{start:h,end:p}=Fc.getWeekStartEnd(zc.toDayjs(n)),{start:g,end:m}=Fc.getWeekStartEnd(zc.toDayjs(i)),b=n&&t.isBetween(h,p,"day","[]"),v=i&&t.isBetween(g,m,"day","[]"),y=b&&t.isSame(h)||v&&t.isSame(g),x=b&&t.isSame(p)||v&&t.isSame(m),w={date:t,calendarDate:r,disabled:u,interactive:f,currentDateIndicator:!0,onSelect:()=>{c(t,!f)},onHover:()=>{d(t.format("YYYY-MM-DD"),!f)}};return e.jsx(Wd,Object.assign({},w,(()=>{const e={};return r.month()!==t.month()?e.labelType="unavailable":xc().isSame(t,"day")&&!u&&(e.labelType="current"),e})(),(()=>{const e={};let t,r;return b&&v?(t="selected-hover-outline",r="selected-hover"):b?(t="selected-outline",r="selected"):v&&(t="hover",r="hover"),t&&(e.labelType=r,y?e.circleLeft=t:e.bgLeft=t,x?e.circleRight=t:e.bgRight=t),e})()))},Qd=({calendarDate:r,disabledDates:n,selectedStartDate:i,onSelect:o,onHover:a,minDate:s,maxDate:l,allowDisabledSelection:c})=>{const d=t.useMemo((()=>Fc.generateDays(r)),[r]),[u,f]=t.useState(""),h=(e,t)=>{if(t&&!c)return;const r=e.startOf("week");o(r),e&&!xc(e).isSame(r,"month")&&f("")},p=(e,t)=>{t&&!c||(f(e),a(e))},g=()=>{f(""),a("")};return e.jsxs(Od,{"data-testid":"calendar-content",children:[d[0].map(((t,r)=>e.jsx(Id,{children:xc(t).format("ddd")},`week-day-${r}`))),d.map(((t,o)=>e.jsx(Fd,{onMouseLeave:g,children:t.map(((t,o)=>e.jsx(Zd,{date:t,calendarDate:r,selectedDate:i,hoverDate:u,minDate:s,maxDate:l,disabledDates:n,allowDisabledSelection:c,onSelect:h,onHover:p},`day-${o}`)))},o)))]})},Jd=Y.default.forwardRef((({disabledDates:r,onYearMonthDisplayChange:n,onSelect:i,onHover:o,onDismiss:a,value:s,endValue:l,currentFocus:c,withButton:d,variant:u,minDate:f,maxDate:h,allowDisabledSelection:p,selectWithinRange:g=!0,initialCalendarDate:m,numberOfDays:b,showActiveMonthDaysOnly:v=!1},y)=>{const x=t.useRef(null),w=t.useRef(void 0);t.useImperativeHandle(y,(()=>({reset(){var e;null===(e=x.current)||void 0===e||e.resetView()},setCalendarDate(e){var t;null===(t=x.current)||void 0===t||t.setCalendarDate(e)}})));const $=e=>{var t;const r=e.format("YYYY-MM-DD");null===(t=x.current)||void 0===t||t.setCalendarDate(r),S(r)},C=e=>{j(e)},S=e=>{i&&i(e)},j=e=>{o&&o(e)},k=e=>{if(n){const t={month:e.month()+1,year:e.year()};n(t)}};return e.jsx(qd,{children:e.jsx(Ed,{ref:x,withButton:d,doneButtonDisabled:(()=>{if(!d)return;let e=!0;switch(u){case"single":e=!1;break;case"range":case"fixed-range":e=!!s!=!!l;break;case"week":e=!s&&!l}return e})(),onDismiss:a,minDate:f,maxDate:h,selectWithinRange:g,currentFocus:c,selectedStartDate:s,selectedEndDate:l,allowDisabledSelection:p,onCalendarDateChange:e=>{w.current&&w.current.isSame(e,"month")||k(e),w.current=e},initialCalendarDate:m,children:({calendarDate:t})=>(t=>{switch(u){case"week":return e.jsx(Qd,{calendarDate:t,disabledDates:r,selectedStartDate:s,minDate:f,maxDate:h,allowDisabledSelection:p,onSelect:$,onHover:C});case"fixed-range":return e.jsx(Kd,{calendarDate:t,disabledDates:r,selectedStartDate:s,minDate:f,maxDate:h,allowDisabledSelection:p,onSelect:$,onHover:C,numberOfDays:b});case"single":return e.jsx(Gd,{calendarDate:t,disabledDates:r,selectedDate:s,minDate:f,maxDate:h,allowDisabledSelection:p,showActiveMonthDaysOnly:v,onSelect:$,onHover:C});default:return e.jsx(Yd,{calendarDate:t,currentFocus:c,disabledDates:r,selectedStartDate:s,selectedEndDate:l,minDate:f,maxDate:h,isNewSelection:g,allowDisabledSelection:p,showActiveMonthDaysOnly:v,onSelect:$,onHover:C})}})(t)})})})),eu=Y.default.forwardRef(((t,r)=>{var{width:n}=t,i=X(t,["width"]);return e.jsx(ad,{$width:n,"data-testid":"calendar-dropdown",children:e.jsx(Jd,Object.assign({ref:r},i))})})),tu=K.default.div`
    --vertical-inset: ${Zs["spacing-24"]};
    --horizontal-inset: ${Zs["spacing-32"]};
    --header-bottom-spacing: ${Zs["spacing-8"]};

    width: 41rem;

    ${e=>{if(e.$hasBorder)return i.css`
                border: ${Gs["width-010"]} ${Gs.solid} ${Ks.border};
                border-radius: ${Qs.lg};
                overflow: hidden;
            `}}
`,ru=K.default.div`
    border-radius: ${Qs.md};
    background: ${Ks.bg};
    padding: ${Zs["spacing-16"]} ${Zs["spacing-32"]};
    box-shadow: 0 2px 8px rgba(104, 104, 104, 0.25);
`,nu=t=>{var{children:r}=t,n=X(t,["children"]);const i=n["data-testid"]||"card";return e.jsx(ru,Object.assign({},n,{"data-testid":i,children:"string"==typeof r?e.jsx(exports.Typography.BodyBL,{children:r}):r}))},iu=i.keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,ou=K.default.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    ${e=>i.css`
        height: ${"small"===e.$displaySize?"1.5rem":"2rem"};
        width: ${"small"===e.$displaySize?"1.5rem":"2rem"};
    `}
`,au=i.css`
    animation: ${Xs["duration-150"]} ${Xs["ease-default"]} ${iu};
    width: 100%;
    height: 100%;
    transition: color ${Xs["duration-150"]} ${Xs["ease-default"]};
`,su=K.default(u.SquareIcon)`
    ${au}
    color: ${Ks["icon-primary-subtlest"]};
`,lu=K.default(u.SquareFillIcon)`
    ${au}
    color: ${Ks["icon-disabled-subtle"]};
`,cu=K.default(u.SquareTickFillIcon)`
    ${au}
    color: ${e=>e.$disabled?Ks["icon-disabled-subtle"](e):Ks["icon-selected"](e)};
`,du=K.default(u.MinusSquareFillIcon)`
    ${au}
    color: ${e=>e.$disabled?Ks["icon-disabled-subtle"](e):Ks["icon-selected"](e)};
`,uu=K.default.input`
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};

    &:hover
        + ${su},
        &:hover
        + ${cu},
        &:hover
        + ${du} {
        color: ${e=>!e.disabled&&Ks["icon-hover"](e)};
    }
`,fu=r=>{var{className:n,checked:i,disabled:o,indeterminate:a,onChange:s,onKeyPress:l,displaySize:c="default"}=r,d=X(r,["className","checked","disabled","indeterminate","onChange","onKeyPress","displaySize"]);const u=t.useRef(null);t.useEffect((()=>{u.current&&(u.current.indeterminate=null!=a&&a)}),[a]);const f=e=>{if(!o){const t=e;if(!(" "===t.key||"change"===e.type))return;s&&s(e),l&&l(t)}};return e.jsxs(ou,{className:n,"data-testid":"checkbox",role:"checkbox","aria-checked":a?"mixed":i,"aria-labelledby":"checkbox-input",tabIndex:o?-1:0,onKeyDown:f,$displaySize:c,$disabled:o,$unchecked:!(a||i||o),children:[e.jsx(uu,Object.assign({id:"checkbox-input","data-testid":"checkbox-input","aria-hidden":"true",type:"checkbox",checked:i,ref:u,tabIndex:-1,onChange:f,disabled:o},d)),a?e.jsx(du,{$disabled:o,"data-testid":"indeterminate"}):i?e.jsx(cu,{$disabled:o,"data-testid":"checkmark"}):o?e.jsx(lu,{"data-testid":"empty-disabled-checkbox"}):e.jsx(su,{$disabled:o,"data-testid":"empty-checkbox"})]})};var hu=Ai,pu=/\s/;var gu=function(e){for(var t=e.length;t--&&pu.test(e.charAt(t)););return t},mu=/^\s+/;var bu=function(e){return e?e.slice(0,gu(e)+1).replace(mu,""):e},vu=no,yu=Zi,xu=/^[-+]0x[0-9a-f]+$/i,wu=/^0b[01]+$/i,$u=/^0o[0-7]+$/i,Cu=parseInt;var Su=function(e){if("number"==typeof e)return e;if(yu(e))return NaN;if(vu(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=vu(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=bu(e);var r=wu.test(e);return r||$u.test(e)?Cu(e.slice(2),r?2:8):xu.test(e)?NaN:+e},ju=no,ku=function(){return hu.Date.now()},Du=Su,Tu=Math.max,Eu=Math.min;var Ou=function(e,t,r){var n,i,o,a,s,l,c=0,d=!1,u=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var r=n,o=i;return n=i=void 0,c=t,a=e.apply(o,r)}function p(e){var r=e-l;return void 0===l||r>=t||r<0||u&&e-c>=o}function g(){var e=ku();if(p(e))return m(e);s=setTimeout(g,function(e){var r=t-(e-l);return u?Eu(r,o-(e-c)):r}(e))}function m(e){return s=void 0,f&&n?h(e):(n=i=void 0,a)}function b(){var e=ku(),r=p(e);if(n=arguments,i=this,l=e,r){if(void 0===s)return function(e){return c=e,s=setTimeout(g,t),d?h(e):a}(l);if(u)return clearTimeout(s),s=setTimeout(g,t),h(l)}return void 0===s&&(s=setTimeout(g,t)),a}return t=Du(t)||0,ju(r)&&(d=!!r.leading,o=(u="maxWait"in r)?Tu(Du(r.maxWait)||0,t):o,f="trailing"in r?!!r.trailing:f),b.cancel=function(){void 0!==s&&clearTimeout(s),c=0,n=l=i=s=void 0},b.flush=function(){return void 0===s?a:m(ku())},b},Iu=Oi(Ou),Fu=Ou,Mu=no;var _u,Au,Bu=Oi((function(e,t,r){var n=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Mu(r)&&(n="leading"in r?!!r.leading:n,i="trailing"in r?!!r.trailing:i),Fu(e,t,{leading:n,maxWait:t,trailing:i})})),Ru=new Map,zu=new WeakMap,Pu=0,Lu=void 0;function Nu(e){return Object.keys(e).sort().filter((t=>void 0!==e[t])).map((t=>`${t}_${"root"===t?function(e){return e?(zu.has(e)||(Pu+=1,zu.set(e,Pu.toString())),zu.get(e)):"0"}(e.root):e[t]}`)).toString()}function Hu(e,t,r={},n=Lu){if(void 0===window.IntersectionObserver&&void 0!==n){const i=e.getBoundingClientRect();return t(n,{isIntersecting:n,target:e,intersectionRatio:"number"==typeof r.threshold?r.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),()=>{}}const{id:i,observer:o,elements:a}=function(e){const t=Nu(e);let r=Ru.get(t);if(!r){const n=new Map;let i;const o=new IntersectionObserver((t=>{t.forEach((t=>{var r;const o=t.isIntersecting&&i.some((e=>t.intersectionRatio>=e));e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=o),null==(r=n.get(t.target))||r.forEach((e=>{e(o,t)}))}))}),e);i=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:o,elements:n},Ru.set(t,r)}return r}(r),s=a.get(e)||[];return a.has(e)||a.set(e,s),s.push(t),o.observe(e),function(){s.splice(s.indexOf(t),1),0===s.length&&(a.delete(e),o.unobserve(e)),0===a.size&&(o.disconnect(),Ru.delete(i))}}function Wu({threshold:e,delay:t,trackVisibility:r,rootMargin:n,root:i,triggerOnce:o,skip:a,initialInView:s,fallbackInView:l,onChange:c}={}){var d;const[u,f]=Y.useState(null),h=Y.useRef(),[p,g]=Y.useState({inView:!!s,entry:void 0});h.current=c,Y.useEffect((()=>{if(a||!u)return;let s;return s=Hu(u,((e,t)=>{g({inView:e,entry:t}),h.current&&h.current(e,t),t.isIntersecting&&o&&s&&(s(),s=void 0)}),{root:i,rootMargin:n,threshold:e,trackVisibility:r,delay:t},l),()=>{s&&s()}}),[Array.isArray(e)?e.toString():e,u,i,n,o,a,r,l,t]);const m=null==(d=p.entry)?void 0:d.target,b=Y.useRef();u||!m||o||a||b.current===m||(b.current=m,g({inView:!!s,entry:void 0}));const v=[f,p.inView,p.entry];return v.ref=v[0],v.inView=v[1],v.entry=v[2],v}!function(e){e.AM="AM",e.PM="PM"}(_u||(_u={})),function(e){e.roundToNearestHour=(e,t)=>{const r=xc(e,"HH:mm");return(0===r.minute()?r:t?r.minute(0).add(1,"hour"):r.minute(0)).format("HH:mm")},e.generateHourlyIntervals=(e,t,r="ha")=>{const n="HH:mm";let i=xc(e,n),o=xc(t,n);i.isSame(o)&&(o=o.add(1,"day"));const a=[];for(;i.isBefore(o);)a.push(i.format(r)),i=i.add(1,"hour");return a},e.getTimeValues=(e,t)=>{const r={hour:"",minute:"",period:_u.AM};if(!t)return r;try{if("24hr"===e){const n=Uu(t,e);r.minute=Nc.padValue(n.minute);const i=parseInt(n.hour);0===Math.floor(i/12)?(r.period=_u.AM,r.hour=0===i?"12":Nc.padValue(i.toString())):(r.period=_u.PM,r.hour=12===i?i.toString():Nc.padValue((i-12).toString()))}else{const{hour:n,minute:i,period:o=""}=Uu(t,e);r.hour=Nc.padValue(n),r.minute=Nc.padValue(i),r.period="am"===o.toLowerCase()?_u.AM:_u.PM}return r}catch(e){return r}},e.updateMinutes=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?Nc.padValue("0"):"55";const n=Math.floor(r/5),i=(("add"===t?n+1:r%5==0?n-1:n)%12+12)%12;return Nc.padValue((5*i).toString())},e.updateHours=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?Nc.padValue("1"):"12";const n="add"===t?r+1:r-1;return n<=12&&n>0?Nc.padValue(n.toString()):13===n?Nc.padValue("1"):"12"},e.convertTo24HourFormat=e=>{const t=parseInt(e.hour);let r;return r=e.period===_u.PM?12===t?t.toString():(t+12).toString():12===t?"00":e.hour,`${r}:${e.minute}`},e.convertHourTo12HourFormat=e=>{const t=parseInt(e),r=t%12==0?12..toString():(t%12).toString();return Nc.padValue(r)},e.formatDisplayValue=(e,t)=>{try{const{hour:r,minute:n,period:i=""}=Uu(e,t),o=Nc.padValue(r);let a=`${o}:${Nc.padValue(n)}`;return"12hr"===t?(a+=i.toLowerCase(),a):a}catch(e){return""}},e.toMinutesSeconds=e=>({minutes:Math.floor(e/60),seconds:e%60}),e.to24Hour=e=>{if((null==e?void 0:e.includes("am"))||(null==e?void 0:e.includes("pm"))){const[t,r]=e.split(/(am|pm)/i),[n,i]=t.split(":").map(Number);let o=n;return"pm"===r&&o<12&&(o+=12),"am"===r&&12===o&&(o=0),Ku(o,i)}return e},e.generateTimings=(t,r="12hr",n,i)=>{const o=[];let a=0,s=1440-t;for(n&&(a=e.timeToMinutes(n)),i&&(s=e.timeToMinutes(i));a<=s;){let e=Math.floor(a/60);const n=a%60;if("12hr"===r){const t=e>=12?"pm":"am";e%=12,e=e||12;const r=Ku(e,n,t);o.push(r)}else{const t=Ku(e,n);o.push(t)}a+=t}return o},e.parseInput=(e,t="12hr")=>{if(""===e||void 0===e)return e;const r=e.trim().toLowerCase(),n=/^(?:(\d{1,2})([:.])?(\d{2})?)?(a|p|am|pm)?$/.exec(r);if(!n)return;let i=parseInt(n[1]||"0",10);const o=parseInt(n[3]||"0",10);let a=n[4];if(void 0===n[1]||i>24||o>59)return;if("a"===a?a="am":"p"===a&&(a="pm"),"24hr"===t)return"pm"===a&&i<12?i+=12:("am"===a&&12===i||24===i)&&(i=0),Ku(i,o);a?0===i||24===i?(a="am",i=12):i>12&&(a="pm",i-=12):(a=0===i||24===i||i>6&&i<12?"am":"pm",i=i%12||12);return Ku(i,o,a)},e.findClosestFlooredTime=(t,r)=>{if(!t)return t;const n=e.timeToMinutes(t);let i="",o=1/0;for(const t of r){const r=e.timeToMinutes(t)-n;if(r<=0&&Math.abs(r)<o)o=Math.abs(r),i=t;else if(r>0)break}return i},e.timeToMinutes=e=>{const[t,r]=e.toLowerCase().split(/(am|pm)/),[n,i]=t.split(":").map(Number);let o=n;return"pm"===r&&12!==o&&(o+=12),"am"===r&&12===o&&(o=0),60*o+i}}(Au||(Au={}));const Vu=(e,t)=>{const r=parseInt(e);return"24hr"===t?r>=0&&r<=23:r>=1&&r<=12},Yu=e=>{const t=parseInt(e);return t>=0&&t<=59},Uu=(e,t)=>{const r=e?e.split(":"):[],n=new Error("Invalid format");if("12hr"===t){if(2!==r.length||4!==r[1].length)throw n;const e=r[1].substring(0,2),o=r[1].substring(2);if(!Vu(r[0],t)||!Yu(e)||"am"!==(i=o).toLowerCase()&&"pm"!==i.toLowerCase())throw n;return{hour:r[0],minute:e,period:r[1].substring(2)}}if(2!==r.length)throw n;if(!Vu(r[0],t)||!Yu(r[1]))throw n;return{hour:r[0],minute:r[1]};var i},Ku=(e,t,r)=>r?`${e}:${t.toString().padStart(2,"0")}${r}`:`${e.toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}`,qu=K.default.div`
    width: 100%;
`,Xu=K.default.div`
    ${qs["body-baseline-regular"]}
    display: flex;
    align-items: center;
    padding: ${Zs["spacing-8"]} ${Zs["spacing-16"]};
    border-radius: ${Qs.sm};
    color: ${Ks["text-primary"]};
    border: ${Gs["width-010"]} ${Gs.solid};
    border-color: ${Ks["border-primary"]};
    background-color: ${Ks.bg};

    ${el.MaxWidth.sm} {
        padding: ${Zs["spacing-16"]};
    }

    ${e=>{if(e.$warn)return i.css`
                color: ${Ks["text-error"]};
                border-color: ${Ks["border-error"]};
            `}}
`,Gu=K.default(Xu)`
    position: relative;
    opacity: ${e=>e.$visible?1:0};
`,Zu=K.default(Xu)`
    position: fixed;
    z-index: 10;

    ${e=>{const{$top:t,$left:r,$right:n,$warn:o}=e;return i.css`
            /* style object will be converted to px */
            ${{top:t,left:r,right:n}}

            box-shadow: 0px 0px 4px 1px rgb(from ${o?Ks["border-error"]:Ks["border-primary-subtle"]} r g b / 50%);

            ${el.MaxWidth.sm} {
                left: 0;
                right: 0;
                border-radius: 0;
                border-left: none;
                border-right: none;
                box-shadow: none;
            }
        `}}
`,Qu=K.default.div`
    font-weight: ${qs.Spec["weight-bold"]};
    margin-left: ${Zs["spacing-8"]};
    margin-right: ${Zs["spacing-24"]};

    ${el.MaxWidth.sm} {
        margin-right: ${Zs["spacing-48"]};
    }
`,Ju=K.default.div`
    font-weight: ${qs.Spec["weight-semibold"]};
    margin-left: auto;
`,ef=K.default(u.ClockIcon)`
    color: ${e=>e.$warn?Ks["icon-error"]:Ks["icon-primary"]};
`,tf=(e,t)=>t||Date.now()+1e3*(null!=e?e:0),rf=e=>Math.max(Math.round(e/1e3),0),nf=t=>r=>{switch(t){case"maintenance":{const t=r;return e.jsxs(e.Fragment,{children:["This service is currently unavailable. Please try again after ",e.jsx("strong",{children:t.dateString}),"."]})}case"inactivity":{const t=r,n=Math.floor(t.secondsLeft/60),i=t.secondsLeft%60;return e.jsxs(e.Fragment,{children:["You’ve been inactive for a while. To protect your privacy, you’ll be logged out in ",n," minutes"," ",i," seconds.",e.jsx("br",{}),e.jsx("br",{}),"If you wish to stay on this page, let us know now."]})}}};exports.ErrorDisplayHelper=void 0,(exports.ErrorDisplayHelper||(exports.ErrorDisplayHelper={})).imgAttributeHelper=(e,t)=>{const{base:r,md:n,lg:i,width:o,height:a}=e;return{srcSet:`${r} 400w, ${n} 800w, ${i} 1200w`,src:i,sizes:`(max-width: ${Js["sm-max"]({theme:t})}px) 400px, (max-width: ${Js["lg-max"]({theme:t})}px) 800px, 1200px`,width:o,height:a}};const{imgAttributeHelper:of}=exports.ErrorDisplayHelper,af={400:{base:"https://assets.life.gov.sg/react-design-system/img/error/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/400@3x.png",width:400,height:280},403:{base:"https://assets.life.gov.sg/react-design-system/img/error/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/403@3x.png",width:400,height:280},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/404@3x.png",width:400,height:280},408:{base:"https://assets.life.gov.sg/react-design-system/img/error/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/408@3x.png",width:400,height:280},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@3x.png",width:400,height:280},502:{base:"https://assets.life.gov.sg/react-design-system/img/error/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/502@3x.png",width:400,height:280},503:{base:"https://assets.life.gov.sg/react-design-system/img/error/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/503@3x.png",width:400,height:280},504:{base:"https://assets.life.gov.sg/react-design-system/img/error/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/504@3x.png",width:400,height:280},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/confirmation@3x.png",width:400,height:280},"insufficient-credits":{base:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit.png",md:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit@3x.png",width:400,height:280},inactivity:{base:"https://assets.life.gov.sg/react-design-system/img/error/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/inactivity@3x.png",width:400,height:280},"link-error":{base:"https://assets.life.gov.sg/react-design-system/img/error/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/link-error@3x.png",width:400,height:280},logout:{base:"https://assets.life.gov.sg/react-design-system/img/error/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/logout@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found@3x.png",width:400,height:280},"payment-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful@3x.png",width:400,height:281},"transfer-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful@3x.png",width:400,height:280},"unsupported-browser":{base:"https://assets.life.gov.sg/react-design-system/img/error/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@3x.png",width:400,height:280},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/warning@3x.png",width:400,height:280}},sf={400:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400@3x.png",width:400,height:215},403:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403@3x.png",width:400,height:254},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404@3x.png",width:400,height:319},408:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408@3x.png",width:400,height:330},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@3x.png",width:400,height:232},502:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502@3x.png",width:400,height:215},503:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503@3x.png",width:400,height:191},504:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504@3x.png",width:400,height:261},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation@3x.png",width:400,height:280},"insufficient-credits":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit@3x.png",width:400,height:280},inactivity:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity@3x.png",width:400,height:276},"link-error":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error@3x.png",width:400,height:280},logout:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found@3x.png",width:400,height:290},"payment-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful@3x.png",width:400,height:280},"transfer-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful@3x.png",width:400,height:280},"unsupported-browser":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@3x.png",width:400,height:232},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning@3x.png",width:400,height:280}},lf=Object.assign(Object.assign({},af),{400:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/400@3x.png",width:400,height:280},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@3x.png",width:400,height:280},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@3x.png",width:400,height:280},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/confirmation@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@3x.png",width:400,height:280},"unsupported-browser":{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@3x.png",width:400,height:280},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/warning@3x.png",width:400,height:280}}),cf=Object.assign(Object.assign({},af),{400:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/400@3x.png",width:400,height:280},403:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/403@3x.png",width:400,height:280},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/404@3x.png",width:400,height:280},408:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/408@3x.png",width:400,height:280},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/generic-error@3x.png",width:400,height:280},502:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/502@3x.png",width:400,height:280},503:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/503@3x.png",width:400,height:280},504:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/504@3x.png",width:400,height:280},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/confirmation@3x.png",width:400,height:280},inactivity:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/inactivity@3x.png",width:400,height:280},"link-error":{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/link-error@3x.png",width:400,height:280},logout:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/logout@3x.png",width:400,height:280},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/warning@3x.png",width:400,height:280},"payment-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/payment-unsuccessful@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/no-item-found@3x.png",width:400,height:280}}),df=(e,t)=>new Map([["400",{img:of(e[400],t),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["403",{img:of(e[403],t),title:"Error loading page",description:"You may not have permission to view this page. If someone gave you this link, let them know about this error."}],["404",{img:of(e[404],t),title:"Page not found",description:"If you entered or pasted the URL, check that it’s correct. If someone gave you this link, let them know about this error."}],["408",{img:of(e[408],t),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["500",{img:of(e[500],t),title:"Something went wrong",description:"We're working on a fix for the problem. Please try again later."}],["502",{img:of(e[502],t),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["503",{img:of(e[503],t),title:"Service under maintenance",description:"This service is currently unavailable. Please try again later."}],["504",{img:of(e[504],t),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["confirmation",{img:of(e.confirmation,t),title:"Leave and lose changes?",description:"You have unsaved changes. If you leave this page, you will lose the changes you’ve made."}],["link-error",{img:of(e["link-error"],t),title:"Link has expired",description:"If you entered or pasted the URL, check that it’s correct. If someone gave you this link, let them know it has expired."}],["logout",{img:of(e.logout,t),title:"You’ve been logged out",description:"It looks like you’ve left, so we logged you out to protect your privacy."}],["insufficient-credits",{img:of(e["insufficient-credits"],t),title:"Insufficient credits",description:"You do not have enough credits to make this transaction."}],["inactivity",{img:of(e.inactivity,t),title:"Are you still there?",description:"You’ve been inactive for a while. To protect your privacy, you’ll be logged out soon.\n\nIf you wish to stay on this page, let us know now.",renderDescription:nf("inactivity")}],["maintenance",{img:of(e[503],t),title:"Service under maintenance",description:"This service is currently unavailable. Please try again later.",renderDescription:nf("maintenance")}],["no-item-found",{img:of(e["no-item-found"],t),title:"No results found",description:"Try adjusting your search or filters to find what you’re looking for."}],["payment-unsuccessful",{img:of(e["payment-unsuccessful"],t),title:"Unsuccessful payment",description:"Your payment was unsuccessful. Please try again."}],["transfer-unsuccessful",{img:of(e["transfer-unsuccessful"],t),title:"Unsuccessful transfer",description:"Your transfer was unsuccessful. Please try again."}],["unsupported-browser",{img:of(e["unsupported-browser"],t),title:"Browser not supported",description:"Download the latest version of Chrome, Edge, Firefox or Safari."}],["partially-supported-browser",{img:of(e["unsupported-browser"],t),title:"Browser version not supported",description:"Update to the latest version of Chrome, Edge, Firefox or Safari."}],["warning",{img:of(e.warning,t),title:"Are you sure?",description:"You will lose your progress."}]]),uf=K.default.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`,ff=K.default.img`
    position: relative;
    width: 400px;
    height: auto;

    ${el.MaxWidth.sm} {
        width: 320px;
    }

    ${el.MaxWidth.xs} {
        width: 288px;
    }

    ${el.MaxWidth.xxs} {
        width: 240px;
    }
`,hf=K.default.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 656px;
    white-space: pre-wrap;
`,pf=K.default(exports.Typography.HeadingMD)`
    margin: ${Zs["spacing-32"]} 0 ${Zs["spacing-16"]};
    text-align: center;
`,gf=K.default.div`
    color: ${Ks.text};
    text-align: center;

    ${Rl({textSize:"body-baseline"})}
`,mf=K.default(Il.Default)`
    margin: ${Zs["spacing-32"]} auto 0;
    width: 21rem;

    ${el.MaxWidth.sm} {
        width: 100%;
    }
`,bf=t=>{var{type:r,img:n,title:o,description:a,actionButton:s,additionalProps:l,imageOnly:c,illustrationScheme:d}=t,u=X(t,["type","img","title","description","actionButton","additionalProps","imageOnly","illustrationScheme"]);const f=i.useTheme(),h=((e,t,r)=>{switch(t){case"bookingsg":return df(sf,r).get(e);case"ccube":return df(lf,r).get(e);case"mylegacy":return df(cf,r).get(e);default:return df(af,r).get(e)}})(r,d||(f||tl).resourceScheme,f),p=u["data-testid"]||"error-display",g=()=>{var e,t;switch(r){case"maintenance":{const t=l;return l&&t.dateString?null===(e=null==h?void 0:h.renderDescription)||void 0===e?void 0:e.call(h,t):a||void 0}case"inactivity":{const e=l;return l&&e.secondsLeft?null===(t=null==h?void 0:h.renderDescription)||void 0===t?void 0:t.call(h,e):a||void 0}default:return a||void 0}};if(!h)return null;const m=Object.assign(Object.assign(Object.assign(Object.assign({},h),n&&{img:n}),o&&{title:o}),g()&&{description:g()});return e.jsxs(uf,Object.assign({},u,{"data-testid":p,children:[e.jsx(ff,Object.assign({},m.img,{alt:"","data-id":"error-display-image"})),!c&&(m.title||m.description?e.jsxs(hf,{children:[m.title&&("string"==typeof m.title?e.jsx(pf,{"data-testid":`${p}--title`,"data-id":"error-display-title",weight:"semibold",children:m.title}):m.title),m.description&&e.jsx(gf,{"data-testid":`${p}--description`,"data-id":"error-display-description",children:"string"==typeof m.description?e.jsx("p",{children:m.description}):m.description})]}):null),s&&(()=>{const t=Object.assign({children:"Proceed"},s);return e.jsx(mf,Object.assign({},t))})()]}))},vf=i.css`
    outline-offset: -1px;
    outline: ${Gs["width-020"]} ${Gs.solid} ${Ks["border-focus"]};
`,yf=i.css`
    outline-color: ${Ks["border-focus"]};
`,xf=i.css`
    outline-color: ${Ks["border-disabled"]};
`,wf=i.css`
    outline-color: ${Ks["border-error-focus"]};
`,$f=K.default.div`
    border: ${Gs["width-010"]} ${Gs.solid} ${Ks.border};
    border-radius: ${Qs.sm};
    background: ${Ks.bg};

    :focus-within {
        ${vf}
    }
    ${e=>e.$focused&&vf}

    ${e=>e.$readOnly?i.css`
                border-color: transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${yf}
                }
                ${e.$focused&&yf}
            `:e.$disabled?i.css`
                background: ${Ks["bg-disabled"]};
                cursor: not-allowed;

                :focus-within {
                    ${xf}
                }
                ${e.$focused&&xf}
            `:e.$error?i.css`
                border-color: ${Ks["border-error"]};

                :focus-within {
                    ${wf}
                }
                ${e.$focused&&wf}
            `:void 0}
`,Cf=K.default($f)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 ${Zs["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,Sf=K.default.input`
    ${e=>"small"===e.$variant?qs["body-md-regular"]:qs["body-baseline-regular"]}
    color: ${Ks.text};
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    :disabled {
        color: ${Ks["text-subtler"]};

        :hover {
            cursor: not-allowed;
        }
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${Ks["text-subtler"]};
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
`,jf=K.default.button`
    background: transparent;
    border: none;
    outline: none;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: ${Gs["width-010"]} ${Gs.solid}
            ${Ks["border-focus"]};
        border-radius: ${Qs.sm};
    }
`,kf=Ks.border,Df=Ks.text,Tf=K.default.div`
    overflow: auto;
    display: flex;
    flex-direction: column;
    border: ${Gs["width-010"]} ${Gs.solid} ${kf};
    border-radius: ${Qs.md};

    // Hide scrollbar
    ::-webkit-scrollbar {
        display: none;
    }
    * {
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }
`,Ef=K.default.div`
    flex: 1;
`,Of=K.default.table`
    th:last-child,
    td:last-child {
        padding-right: 1.5rem;
    }
    th:first-child,
    td:first-child {
        padding-left: 1.5rem;
    }
    text-align: left;
    border-collapse: separate;
    border-spacing: 0;
    width: 100%;

    ${e=>{if(e.$stickyHeader)return i.css`
                thead {
                    position: sticky;
                    top: 0;
                    z-index: 20;
                }
            `}};
`,If=K.default.tbody`
    tr:last-child {
        td {
            border-bottom: ${e=>e.$showLastRowBottomBorder?`${Gs["width-010"]} ${Gs.solid} ${kf}`:"none"};
        }
    }
`,Ff=K.default.div`
    bottom: 0;
    ${e=>{if(e.$fixed){const t=e.$left?`${e.$left}px`:"0",r=e.$width?`${e.$width}px`:"100%";return i.css`
                position: fixed;
                left: ${t};
                width: ${r};
            `}return i.css`
                position: sticky;
                left: 0;
            `}};
`,Mf=K.default(jf)`
    ${qs["body-md-semibold"]}
    cursor: pointer;
    color: ${Ks["text-primary"]};
    transition: ${Xs["duration-150"]} ${Xs["ease-default"]};
    padding: 0.75rem;
    margin: -0.75rem 0;

    :hover {
        color: ${Ks["text-hover"]};
    }
`,_f=K.default.div`
    overflow: hidden;
    display: flex;
    ${e=>e.$float&&i.css`
            transform: translateX(-0.5%) translateY(-2rem);
            border-radius: ${Qs.sm};
            box-shadow: 0 0 4px 0 rgba(40, 40, 40, 0.25);
            width: 101%;
            border: ${Gs["width-010"]} ${Gs.solid} ${kf};
        `}
    align-items: center;
    height: 3.5rem;
    padding: 1rem;
    border-top: ${Gs["width-010"]} ${Gs.solid} ${kf};
    border-radius: 0 0 ${Qs.sm} ${Qs.sm};
    background-color: ${Ks["bg-selected"]};
    transition: all 300ms ease;
`,Af=K.default.tr`
    background-color: ${Ks["bg-stronger"]};
    height: 6rem;
    border-bottom: ${Gs["width-010"]} ${Gs.solid} ${kf};
`,Bf=K.default.th`
    padding: ${e=>e.$isCheckbox?"1.25rem 0.5rem 1.25rem 1.5rem":"1.25rem 1rem"};
    text-align: left;
    cursor: ${e=>e.$clickable?"pointer":"default"};
    vertical-align: middle;
    color: ${Df};
    border-bottom: ${Gs["width-010"]} ${Gs.solid} ${kf};
    ${e=>{if(e.$isCheckbox)return i.css`
                width: 4rem;
            `}};
`,Rf=K.default.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
        color: ${Df};
        margin-left: 0.5rem;
    }
`,zf=K.default.tr`
    background-color: ${e=>e.$isSelected?i.css`
                ${Ks["bg-selected"]};
            `:e.$alternating?i.css`
                ${Ks["bg-strong"]};
            `:i.css`
                ${Ks.bg};
            `};
    border-top: ${Gs["width-010"]} ${Gs.solid} ${kf};
    &:hover {
        ${e=>{if(e.$isSelectable)return i.css`
                    background-color: ${Ks["bg-hover-strong"]};
                `}};
    }
`,Pf=K.default.td`
    padding: ${e=>e.$isCheckbox?"1.25rem 0.5rem 1.25rem 1.5rem":"1.25rem 1rem"};
    vertical-align: middle;
    color: ${Df};
    border-bottom: ${Gs["width-010"]} ${Gs.solid} ${kf};
`,Lf=K.default(exports.Typography.BodyBL)`
    ${il(2)}
    text-overflow: ellipsis;
`,Nf=K.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,Hf=K.default.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 0;
`,Wf=K.default(exports.Typography.HeadingSM)`
    margin-top: 2rem;
    margin-bottom: 1rem;
`,Vf=K.default.td`
    padding: 4rem 0;
`,Yf=e=>"small"===e?2.5:3,Uf=K.default.div`
    position: relative;
    width: 100%;
    ${e=>{const t=Yf(e.$variant);return i.css`
            min-height: ${t}rem;
            height: ${t}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`,Kf=i.css`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${Zs["spacing-16"]};
    // exclude top and bottom borders
    height: calc(${e=>Yf(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${Qs.sm};
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${Ks["border-focus"]};
    }
`,qf=K.default.button`
    ${Kf}
    cursor: pointer;
`,Xf=K.default.div`
    ${Kf}
`,Gf=i.keyframes`
	from {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 2;
	}

	to {
		position: relative;
        width: 100%;
	}
`,Zf=K.default.div`
    position: relative;
    border: ${Gs["width-010"]} ${Gs.solid} ${Ks.border};
    border-radius: ${Qs.sm};
    background: ${Ks.bg};
    overflow: hidden;

    :focus-within {
        border-color: ${Ks["border-focus"]};
        box-shadow: 0px 0px 4px 0px
            rgb(from ${Ks["border-focus"]} r g b / 50%) inset; // TODO: confirm shadow
    }

    ${e=>e.expanded?i.css`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:i.css`
                animation: ${Gf} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?i.css`
                background: ${Ks["bg-disabled"]};

                ${qf} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border-color: ${Ks.border};
                    box-shadow: none;
                }
            `:e.$readOnly?i.css`
                border: none;
                background: transparent !important;

                ${qf} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?i.css`
                border-color: ${Ks["border-error"]};

                :focus-within {
                    border-color: ${Ks["border-error"]};
                    box-shadow: 0px 0px 4px 0px
                        rgb(from ${Ks["border-error"]} r g b / 50%) inset; // TODO: confirm shadow
                }
            `:void 0}
`;K.default.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: transform ${Xs["duration-250"]} ${Xs["ease-default"]};
    margin-left: ${Zs["spacing-16"]};
`,K.default(f.ChevronDownIcon)`
    color: ${Ks.icon};
`;const Qf=K.default.div`
    height: 1px;
    background: ${Ks.border};
    margin: 0 ${Zs["spacing-8"]};
`,Jf=K.default.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return i.css`
                color: ${Ks["text-disabled"]};
            `}}
`,eh=K.default.div`
    ${e=>"small"===e.$variant?qs["body-md-regular"]:qs["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.truncateType)return i.css`
                    ${il(1)}
                `}}
    overflow: hidden;
`,th=K.default(eh)`
    color: ${Ks["text-subtler"]};
`,rh=({children:r,show:n,error:i,disabled:o,testId:a,onBlur:s,readOnly:l,className:c,variant:d})=>{const u=t.useRef(null);return Wc("mousedown",(function(e){if(!o){if(u&&u.current.contains(e.target))return;n&&s()}}),"document"),e.jsx(Uf,{className:c,$variant:d,children:e.jsx(Zf,{ref:u,error:i&&!n,disabled:o,$readOnly:l,expanded:n,"data-testid":a,children:r})})};var nh;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(nh||(nh={}));const ih=()=>{const[e,r]=t.useState(void 0),n=g.useFloatingTree();return t.useEffect((()=>{if(!n)return void r(void 0);const e=e=>{r(e.zIndex)};return n.events.on(nh.Change,e),n.events.emit(nh.Ready),()=>n.events.off(nh.Change,e)}),[n]),e},oh=K.default.div`
    display: flex;
    flex-direction: column;
`,ah=e=>"right"===e?"bottom-end":"bottom-start",sh=({enabled:r,isOpen:n,onOpen:o,onClose:a,onDismiss:s,renderElement:l,renderDropdown:c,customZIndex:d,clickToToggle:u=!1,offset:f=0,alignment:h="left",fitAvailableHeight:p})=>{var m;const b=i.useTheme(),v=Js["sm-max"]({theme:b}),y=t.useRef(null),x=t.useRef(null),{width:w=0}=qe({targetRef:y,handleHeight:!1}),$={name:"center",fn:({x:e,rects:t})=>{const r=0===e||e+t.floating.width===window.innerWidth,n=window.innerWidth<v;return{x:r&&n?(window.innerWidth-t.floating.width)/2:e}}},{refs:C,floatingStyles:S,context:j}=g.useFloating({open:n,onOpenChange:(e,t,r)=>{"escape-key"===r?null==s||s():e&&!n?null==o||o():!e&&n&&(null==a||a(r))},whileElementsMounted:g.autoUpdate,placement:ah(h),middleware:[g.offset(f),g.flip(),g.shift({limiter:g.limitShift()}),g.size({apply({availableHeight:e}){x.current&&Object.assign(x.current.style,{maxHeight:p?`${e}px`:void 0,overflowY:p?"hidden":void 0})}}),$]}),k=ih(),{isMounted:D,styles:T}=g.useTransitionStyles(j,{initial:{opacity:0},open:{opacity:1},duration:300}),E=g.useClick(j,{enabled:r,toggle:u}),O=g.useDismiss(j,{enabled:r}),{getReferenceProps:I,getFloatingProps:F}=g.useInteractions([E,O]);return e.jsxs(e.Fragment,{children:[e.jsx("div",Object.assign({ref:e=>{y.current=e,C.setReference(e)}},I(),{children:l()})),D&&e.jsx(g.FloatingPortal,{children:e.jsx(g.FloatingFocusManager,{context:j,modal:!1,initialFocus:x,returnFocus:!1,children:e.jsx("div",Object.assign({ref:C.setFloating,style:Object.assign(Object.assign({},S),{zIndex:null!==(m=null!=d?d:k)&&void 0!==m?m:50})},F(),{children:e.jsx(oh,{ref:x,style:Object.assign({},T),inert:T.opacity<1?"":void 0,children:c({elementWidth:w})})}))})})]})},lh=K.default.div`
    display: flex;
    align-items: center;
    position: relative;

    flex: 1;
`,ch=K.default.div`
    display: flex;
    align-items: center;

    ${e=>{if(e.$hover)return i.css`
                ${dh}, ${ph} {
                    color: ${Ks["text-subtler"]};
                }
            `}}
`,dh=K.default(Sf)`
    background: transparent;
    text-align: center;
`,uh=K.default(dh)`
    width: 2rem;
    margin-right: ${Zs["spacing-4"]};
`,fh=K.default(dh)`
    width: 2.5rem;
`,hh=K.default(dh)`
    width: 3rem;
    margin-left: ${Zs["spacing-4"]};
`,ph=K.default.span`
    ${qs["body-baseline-regular"]}
    ${e=>{if(e.$inactive)return i.css`
                color: ${Ks.text};
            `}}
`,gh=K.default.div`
    ${qs["body-baseline-regular"]}
    background-color: ${Ks.bg};
    color: ${Ks["text-subtler"]};
    position: absolute;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    ${e=>e.$disabled?i.css`
                background-color: ${Ks["bg-disabled"]};
                cursor: not-allowed;
            `:e.$hide?i.css`
                display: none;
            `:void 0}
`;xc.extend($c);const mh=Y.default.forwardRef((({disabled:r,readOnly:n,names:i,value:o,focused:a,hoverValue:s,placeholder:l,label:c,onChange:d,onFocus:u,onBlur:f,hideInputKeyboard:h},p)=>{const g=h?"none":"numeric",[m,b,v]=qc(""),[y,x,w]=qc(""),[$,C,S]=qc(""),[j,k]=t.useState("none"),[D,T]=t.useState(!1),E=t.useRef(null),O=t.useRef(null),I=t.useRef(null),F=t.useRef(null),[M,_,A]=N(s);t.useEffect((()=>{var e;const[t="",r="",n=""]=N(o);b(t),x(r),C(n),t||r||n||!E.current||!E.current.contains(document.activeElement)||null===(e=O.current)||void 0===e||e.focus()}),[o]),t.useEffect((()=>{var e;a||k("none"),a&&(T(!0),E.current&&!E.current.contains(document.activeElement)&&(null===(e=O.current)||void 0===e||e.focus()))}),[a]),t.useImperativeHandle(p,(()=>({ref:E,resetPlaceholder(){T(!1)},resetInput(){const[e="",t="",r=""]=N(o);b(e),x(t),C(r)}})),[o]);const B=e=>{var t;e.preventDefault(),null===(t=O.current)||void 0===t||t.focus()},R=e=>{e.target.select();const t=e.target.name;k(t)},z=e=>{const[t,r,n]=i,o={[t]:v.current,[r]:w.current,[n]:S.current},a=e.target.name,s=o[a],l=a!==n?Nc.padValue(s,!0):s;switch(a){case t:o[t]=l,b(l);break;case r:o[r]=l,x(l)}const c=`${o[n]}-${o[r]}-${o[t]}`,u=xc(c,"YYYY-MM-DD",!0).isValid(),h=!o[t]&&!o[r]&&!o[n];u&&s!==l&&d(c),E.current&&!E.current.contains(e.relatedTarget)&&(k("none"),null==f||f(h||u))},P=e=>{var t,r;if(s)return;const n=e.target.name,o=e.target.value.replace(/[^0-9]/g,""),a={day:m,month:y,year:$};switch(n){case i[0]:a.day=o,b(o),2===o.length&&(null===(t=I.current)||void 0===t||t.focus());break;case i[1]:a.month=o,x(o),2===o.length&&(null===(r=F.current)||void 0===r||r.focus());break;case i[2]:a.year=o,C(o)}if(!a.day&&!a.month&&!a.year)return void d("");const l=`${a.year}-${a.month}-${a.day}`;xc(l,"YYYY-MM-DD",!0).isValid()&&d(l)},L=e=>{var t,r;"Backspace"!==e.code&&"Backspace"!==e.key||(j===i[1]&&0===y.length&&(null===(t=O.current)||void 0===t||t.focus()),j===i[2]&&0===$.length&&(null===(r=I.current)||void 0===r||r.focus()))};function N(e){if(e){const t=xc(new Date(e));return t.isValid()?[Nc.padValue(t.date().toString()),Nc.padValue((t.month()+1).toString()),t.year().toString()]:[void 0,void 0,void 0]}return[void 0,void 0,void 0]}return e.jsxs(lh,{role:"group","aria-label":c,onClick:()=>{var e;r||n||(T(!0),E.current&&!E.current.contains(document.activeElement)&&(null===(e=O.current)||void 0===e||e.focus()))},onFocus:e=>{r||(T(!0),a||null==u||u(e))},children:[e.jsxs(ch,{ref:E,$hover:!!s,children:[e.jsx(uh,{ref:O,name:i[0],maxLength:2,value:null!=M?M:m,onFocus:R,onBlur:z,onChange:P,type:"text",inputMode:g,pattern:"[0-9]{2}","data-testid":`${i[0]}-input`,"aria-label":"day",disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:j!==i[0]||n?"DD":""}),e.jsx(ph,{$inactive:0===m.length,children:"/"}),e.jsx(fh,{ref:I,name:i[1],maxLength:2,value:null!=_?_:y,onFocus:R,onBlur:z,onChange:P,onKeyDown:L,type:"text",inputMode:g,pattern:"[0-9]{2}","data-testid":`${i[1]}-input`,"aria-label":"month",disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:j!==i[1]||n?"MM":""}),e.jsx(ph,{$inactive:0===y.length,children:"/"}),e.jsx(hh,{ref:F,name:i[2],maxLength:4,value:null!=A?A:$,onFocus:R,onBlur:z,onChange:P,onKeyDown:L,type:"text",inputMode:g,pattern:"[0-9]{4}","data-testid":`${i[2]}-input`,"aria-label":"year",disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:j!==i[2]||n?"YYYY":""})]}),(()=>{if(!o&&!n&&l)return e.jsx(gh,{$hide:D,$disabled:r,onMouseDown:B,children:l})})()]})})),bh=K.default(Cf)`
    height: 3rem;
`,vh=r=>{var{minDate:n,maxDate:i,disabled:o,disabledDates:a,error:s,hideInputKeyboard:l,value:c,onChange:d,onFocus:u,onBlur:f,onYearMonthDisplayChange:h,withButton:p=!0,readOnly:g,id:m,allowDisabledSelection:b,zIndex:v}=r,y=X(r,["minDate","maxDate","disabled","disabledDates","error","hideInputKeyboard","value","onChange","onFocus","onBlur","onYearMonthDisplayChange","withButton","readOnly","id","allowDisabledSelection","zIndex"]);const[x,w]=t.useState(Pc.sanitizeInput(c)),[$,C]=t.useState(Pc.sanitizeInput(c)),[S,j]=t.useState(void 0),[k,D]=t.useState(!1),[T,E]=t.useState(!1),O=t.useRef(null),I=t.useRef(null);t.useEffect((()=>{const e=Pc.sanitizeInput(c);w(e),C(e)}),[c]);const F=e=>{!b&&Pc.isDateDisabled(e,{disabledDates:a,minDate:n,maxDate:i})||(C(e),p||(z(e),w(e),e&&D(!1)))},M=e=>{var t;C(e),p||(z(e),w(e),e&&(null===(t=O.current)||void 0===t||t.focus(),D(!1)),S&&j(void 0))},_=()=>{g||o||(D(!0),T||(E(!0),u&&u()))},A=e=>{var t;T&&!k&&O.current&&!O.current.contains(e.relatedTarget)&&(null===(t=I.current)||void 0===t||t.resetInput(),C(x),E(!1),P())},B=e=>{j(e)},R=e=>{var t;switch(e){case"reset":C(x);break;case"confirmed":w($),z($)}null===(t=O.current)||void 0===t||t.focus(),D(!1)},z=e=>{d&&d(e)},P=()=>{f&&f()};return e.jsx(sh,{enabled:!g&&!o,isOpen:k,renderElement:()=>e.jsx(bh,Object.assign({tabIndex:-1,ref:O,onBlur:A,onFocus:_,$disabled:o,$readOnly:g,$focused:T,$error:s,id:m,"data-testid":y["data-testid"]},y,{children:e.jsx(mh,{ref:I,disabled:o,onChange:F,readOnly:g,focused:k,names:["start-day","start-month","start-year"],value:$,hoverValue:S,hideInputKeyboard:l})})),renderDropdown:({elementWidth:t})=>e.jsx(eu,{variant:"single",initialCalendarDate:$,withButton:p,value:$,disabledDates:a,minDate:n,maxDate:i,allowDisabledSelection:b,onHover:B,onSelect:M,onDismiss:R,onYearMonthDisplayChange:h,width:t}),onClose:()=>{var e;null===(e=I.current)||void 0===e||e.resetInput(),C(x),D(!1),E(!1),P()},onDismiss:()=>{var e,t;null===(e=I.current)||void 0===e||e.resetInput(),null===(t=O.current)||void 0===t||t.focus(),C(x),D(!1)},customZIndex:v,offset:16})},yh=K.default.button`
    align-items: center;
    border-radius: 0.25rem;
    cursor: pointer;
    display: flex;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$sizeType){case"large":return i.css`
                    height: 4rem;
                    width: 4rem;

                    img,
                    svg {
                        height: 1.625rem;
                        width: 1.625rem;
                    }
                `;case"small":return i.css`
                    height: 2.5rem;
                    width: 2.5rem;

                    img,
                    svg {
                        height: 1rem;
                        width: 1rem;
                    }
                `;default:return i.css`
                    height: 3rem;
                    width: 3rem;

                    img,
                    svg {
                        height: 1.125rem;
                        width: 1.125rem;
                    }
                `}}}

    ${e=>{switch(e.$styleType){case"secondary":return i.css`
                    background-color: ${Ks.bg};
                    border: ${Gs["width-010"]} ${Gs.solid}
                        ${Ks["border-primary"]};
                    color: ${Ks["text-primary"]};

                    :hover {
                        background-color: ${Ks["bg-hover-neutral"]};
                    }
                `;case"light":return i.css`
                    background-color: ${Ks.bg};
                    border: ${Gs["width-010"]} ${Gs.solid}
                        ${Ks.border};
                    color: ${Ks["text-primary"]};

                    :hover {
                        background-color: ${Ks["bg-hover-neutral"]};
                    }
                `;default:return i.css`
                    background-color: ${Ks["bg-primary"]};
                    border: none;
                    color: ${Ks["text-inverse"]};

                    :hover {
                        background-color: ${Ks["bg-primary-hover"]};
                    }
                `}}}

    &:disabled {
        background-color: ${Ks["bg-disabled"]};
        border: ${Gs["width-010"]} ${Gs.solid}
            ${Ks["border-disabled"]};
        color: ${Ks["text-disabled"]};
        cursor: not-allowed;
    }
`,xh=Y.default.forwardRef(((t,r)=>{var{"data-testid":n,styleType:i="primary",children:o,sizeType:a="default",type:s="button"}=t,l=X(t,["data-testid","styleType","children","sizeType","type"]);return e.jsx(yh,Object.assign({"data-testid":n||"iconButton",ref:r,type:s,$sizeType:a,$styleType:i},l,{children:o}))})),wh=K.default(xh)`
    margin: ${Zs["spacing-8"]};
`,$h=K.default.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    background-color: ${Ks["bg-strong"]};
    border-radius: ${Qs.sm};
`,Ch=K.default(Il.Default)`
    color: ${e=>e.$enableDateClick?Ks["text-primary"]:Ks.text};
    white-space: nowrap;
    display: inline-block;
    text-wrap: auto;
    text-align: center;
    margin: 0;
    padding: 0;
    background: transparent;
    height: unset;
    cursor: default;

    ${e=>{if(e.$enableDateClick)return i.css`
                :hover {
                    cursor: pointer;
                    text-decoration: underline;
                    text-underline-position: under;
                }
            `}}
`,Sh=r=>{var{selectedDate:n,minDate:i,maxDate:o,loading:a,showDateAsShortForm:s,showCurrentDateAsToday:l,onLeftArrowClick:c,onRightArrowClick:d,onCalendarDateSelect:u}=r,f=X(r,["selectedDate","minDate","maxDate","loading","showDateAsShortForm","showCurrentDateAsToday","onLeftArrowClick","onRightArrowClick","onCalendarDateSelect"]);const h=zc.toDayjs(n),p=zc.toDayjs(n).format(s?"D MMM YYYY":"D MMMM YYYY").toString(),g=zc.isSame(n,xc())&&l?"Today":h.format(s?"ddd":"dddd"),[m,b]=t.useState(!1),v=e=>{u&&u(e),b(!m)},y=()=>{b(!1),c(n)},x=()=>{b(!1),d(n)};return e.jsx(sh,{enabled:!a,isOpen:m,renderElement:()=>e.jsxs($h,Object.assign({},f,{children:[e.jsx(wh,{"data-testid":"date-navigator-left-arrow-btn",disabled:a||!!i&&(Fc.isDisabledDay(h,void 0,i)||zc.isSame(h,i)),"aria-label":"Previous day",onClick:y,styleType:"light",sizeType:"small",children:e.jsx(ld,{})}),e.jsx(Ch,{onClick:()=>!!u&&!a&&b(!m),$enableDateClick:!!u&&!a,"data-testid":"date-navigator-date-text",styleType:"link",disabled:!u||a,children:`${p}, ${g}`}),e.jsx(wh,{"data-testid":"date-navigator-right-arrow-btn",disabled:a||!!o&&(Fc.isDisabledDay(h,void 0,void 0,o)||zc.isSame(h,o)),"aria-label":"Next day",onClick:x,styleType:"light",sizeType:"small",children:e.jsx(cd,{})})]})),renderDropdown:({elementWidth:t})=>e.jsx(eu,{variant:"single",initialCalendarDate:n,value:n,minDate:i,maxDate:o,onSelect:v,width:t}),onDismiss:()=>b(!1),onClose:()=>b(!1),offset:8})},jh=K.default.div`
    position: relative;
    height: 100%;
    display: flex;
    flex: 1;

    ${e=>{if(e.$wrap)return i.css`
                /* Parent container need to provide space */
                flex-wrap: wrap;

                [data-id="range-container-elem1-container"],
                [data-id="range-container-elem2-container"] {
                    // 100% - Icon size - 2padding
                    max-width: calc(
                        100% - ${qs.Spec["body-size-baseline"]} -
                            ${Zs["spacing-16"]}
                    );
                    flex: unset;
                }

                [data-id="range-container-elem2-container"] {
                    margin-top: ${Zs["spacing-8"]};
                }
            `}}
`,kh=K.default.div`
    width: 100%; // Force next flex item to break to next line
`,Dh=K.default.div`
    display: flex;
    flex: 1;
    align-items: center;
`,Th=K.default(u.ArrowRightIcon)`
    color: ${Ks.icon};
    width: ${qs.Spec["body-size-baseline"]};
    height: ${qs.Spec["body-size-baseline"]};
    flex-shrink: 0;
    margin: 0 ${Zs["spacing-8"]};
    align-self: center;
`,Eh=K.default.div`
    position: absolute;
    background: ${e=>e.$error?Ks["border-error-focus-strong"]:Ks["border-focus-strong"]};
    height: 2px;
    // half - half padding - half icon width
    width: calc(
        50% - ${Zs["spacing-8"]} - (${qs.Spec["body-size-baseline"]} / 2)
    );
    transition: left ${Xs["duration-350"]} ${Xs["ease-standard"]},
        opacity ${Xs["duration-350"]} ${Xs["ease-standard"]};
    left: 0;
    bottom: 0;

    ${e=>{switch(e.$position){case"start":return i.css`
                    opacity: 1;
                `;case"end":return i.css`
                    left: calc(50% + ${Zs["spacing-16"]});
                    opacity: 1;
                `;case"none":return i.css`
                    opacity: 0;
                `}}}

    ${e=>{if(e.$wrap)return i.css`
                display: none;
            `}}
`,Oh=({children:t,currentActive:r,error:n,className:i,wrap:o})=>{const[a,s]=t;return e.jsxs(jh,{className:i,$wrap:o,children:[e.jsx(Dh,{"data-id":"range-container-elem1-container",children:a}),e.jsx(Th,{}),o&&e.jsx(kh,{}),e.jsx(Dh,{"data-id":"range-container-elem2-container",children:s}),e.jsx(Eh,{"data-id":"range-container-indicator",$position:r,$error:n,$wrap:o})]})},Ih=(e,t,r)=>{const n=[];e&&n.push(`[${e}]`),n.push(t,r),console.log(...n)},Fh=K.default(Cf)`
    ${e=>e.$wrap&&i.css`
            padding: ${Zs["spacing-12"]} ${Zs["spacing-16"]};
        `}
`,Mh=K.default.div`
    display: flex;
    align-items: center;
    height: calc(3rem - 2px); // exclude top and bottom borders
    width: 100%;

    ${e=>e.$wrap&&i.css`
            height: fit-content;
        `}
`,_h={initialStart:"",initialEnd:"",selectedStart:"",selectedEnd:"",currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1,focused:!1},Ah=r=>{var{minDate:n,maxDate:i,disabled:o,disabledDates:a,error:s,hideInputKeyboard:l,value:c,valueEnd:d,onChange:u,onFocus:f,onBlur:h,onYearMonthDisplayChange:p,withButton:g=!0,variant:m="range",numberOfDays:b=7,readOnly:v,id:y,allowDisabledSelection:x,zIndex:w}=r,$=X(r,["minDate","maxDate","disabled","disabledDates","error","hideInputKeyboard","value","valueEnd","onChange","onFocus","onBlur","onYearMonthDisplayChange","withButton","variant","numberOfDays","readOnly","id","allowDisabledSelection","zIndex"]);const[C,S]=t.useState(),[j,k]=t.useState(void 0),[D,T]=t.useState(!1),[E,O]=t.useState(!1),I="week"===m,F="fixed-range"===m,[{selectedStart:M,selectedEnd:_,currentFocus:A,calendarOpen:B,isStartDirty:R,isEndDirty:z,focused:P},L]=(({initialState:e,reducers:r,name:n,debug:i})=>{const[o,a]=t.useReducer(((e,t)=>r[t.type]?r[t.type](e,t.payload):e),e);return[o,Object.fromEntries(Object.keys(r).map((e=>[e,t=>{i&&Ih(n,e,t),a({type:e,payload:t})}])))]})({name:"date-range-input",initialState:_h,reducers:{blur:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1,focused:!1}),dismiss:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),changeStart:(e,t)=>Object.assign(Object.assign({},e),{selectedStart:t,isStartDirty:!0}),changeEnd:(e,t)=>Object.assign(Object.assign({},e),{selectedEnd:t,isEndDirty:!0}),reselectStart:e=>Object.assign(Object.assign({},e),{selectedStart:"",currentFocus:"start"}),reselectEnd:e=>Object.assign(Object.assign({},e),{selectedEnd:"",currentFocus:"end"}),focus:(e,t)=>Object.assign(Object.assign({},e),{currentFocus:I?"none":F?"start":t,calendarOpen:!v,focused:!0}),cancel:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1}),done:(e,t)=>Object.assign(Object.assign({},e),{selectedStart:t.start,selectedEnd:t.end,initialStart:t.start,initialEnd:t.end,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),resetStart:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart}),resetEnd:e=>Object.assign(Object.assign({},e),{selectedEnd:e.initialEnd}),resetRange:(e,t)=>Object.assign(Object.assign({},e),{initialStart:t.start,selectedStart:t.start,initialEnd:t.end,selectedEnd:t.end})}}),N=t.useRef(!1),H=t.useRef(null),W=t.useRef(null),V=t.useRef(null),Y=t.useRef(null),U=(({maxWidth:e,targetRef:r})=>{const[n,i]=t.useState(!1);return qe({targetRef:r,refreshMode:"throttle",refreshRate:300,handleHeight:!1,onResize:t.useCallback((t=>{i(t<=e)}),[e])}),n})({maxWidth:320,targetRef:H});t.useEffect((()=>{L.resetRange({start:Pc.sanitizeInput(c),end:Pc.sanitizeInput(d)})}),[c,d]),t.useEffect((()=>{"start"===A?S(M):"end"===A&&S(_)}),[A]);const K=e=>{var t,r,n;"Enter"!==e.code||g||(M&&_?(L.done({start:M,end:_}),null==u||u(M,_)):(L.dismiss(),null===(t=H.current)||void 0===t||t.focus(),null===(r=V.current)||void 0===r||r.resetPlaceholder(),null===(n=Y.current)||void 0===n||n.resetPlaceholder()))},q=e=>{var t;if(le(e))return void(N.current=!0);if(L.changeStart(e),null===(t=W.current)||void 0===t||t.setCalendarDate(e),N.current=!1,!e)return void(g||_||!z||(L.resetRange({start:"",end:""}),null==u||u("","")));if(!_)return void L.focus("end");if(xc(e).isAfter(_,"day"))L.reselectEnd();else{if(z)return g?void 0:(L.done({start:e,end:_}),void(null==u||u(e,_)));L.focus("end")}},G=e=>{var t,r;if(le(e))return void(N.current=!0);if(xc(e).isBefore(M,"day"))return L.changeStart(e),null===(t=W.current)||void 0===t||t.setCalendarDate(e),void L.reselectEnd();if(L.changeEnd(e),null===(r=W.current)||void 0===r||r.setCalendarDate(e),e){if(M)return g?void 0:(L.done({start:M,end:e}),void(null==u||u(M,e)));L.focus("start")}else g||M||!R||(L.resetRange({start:"",end:""}),null==u||u("",""))},Z=e=>{var t;if(le(e))return void(N.current=!0);if(L.changeStart(e),null===(t=W.current)||void 0===t||t.setCalendarDate(e),N.current=!1,!e)return void(g?L.changeEnd(""):(L.resetRange({start:"",end:""}),null==u||u("","")));const r=xc(e).format("YYYY-MM-DD"),n=xc(r).add(b-1,"day").format("YYYY-MM-DD");return L.changeStart(r),L.changeEnd(n),N.current=!1,g?void 0:(L.done({start:r,end:n}),void(null==u||u(r,n)))},Q=()=>{v||o||P||(L.focus("start"),null==f||f())},J=e=>{var t,r;P&&!B&&H.current&&H.current.contains(e.relatedTarget)&&(L.blur(),T(!1),O(!1),null===(t=V.current)||void 0===t||t.resetPlaceholder(),null===(r=Y.current)||void 0===r||r.resetPlaceholder(),null==h||h())},ee=e=>t=>{t.stopPropagation(),v||(L.focus(e),te(),re(),P||null==f||f())},te=()=>{if(I){const e=zc.toDayjs(M).startOf("week").format("YYYY-MM-DD");T(!0),O(!0),S(e)}},re=()=>{F&&(O(!0),S(M))},ne=e=>{var t;e&&!N.current||(L.resetStart(),null===(t=V.current)||void 0===t||t.resetInput())},ie=e=>{var t;e&&!N.current||(L.resetEnd(),null===(t=Y.current)||void 0===t||t.resetInput())},oe=e=>{switch(m){case"week":(e=>{const t=xc(e).startOf("week").format("YYYY-MM-DD"),r=xc(e).endOf("week").format("YYYY-MM-DD");if(L.changeStart(t),L.changeEnd(r),N.current=!1,!g)L.done({start:t,end:r}),null==u||u(t,r)})(e);break;case"fixed-range":Z(e);break;default:"start"===A?q(e):"end"===A&&G(e)}},ae=e=>{var t;switch(null===(t=H.current)||void 0===t||t.focus(),e){case"reset":L.cancel();break;case"confirmed":L.done({start:M,end:_}),null==u||u(M,_)}},se=e=>{k(e)},le=e=>!x&&e&&Pc.isDateDisabled(e,{disabledDates:a,minDate:n,maxDate:i}),ce=e=>{let t={start:void 0,end:void 0};switch(m){case"range":t={start:"start"===A?j:void 0,end:"end"===A?j:void 0};break;case"week":if(!j)return;t={start:xc(j).startOf("week").format("YYYY-MM-DD"),end:xc(j).endOf("week").format("YYYY-MM-DD")};break;case"fixed-range":if(!j)return;t={start:xc(j).format("YYYY-MM-DD"),end:xc(j).add(b-1,"day").format("YYYY-MM-DD")}}return t[e]};return e.jsx(sh,{enabled:!v&&!o,isOpen:B,onClose:()=>{var e,t;L.blur(),T(!1),O(!1),null===(e=V.current)||void 0===e||e.resetPlaceholder(),null===(t=Y.current)||void 0===t||t.resetPlaceholder(),null==h||h()},onDismiss:()=>{var e,t,r;L.dismiss(),null===(e=H.current)||void 0===e||e.focus(),null===(t=V.current)||void 0===t||t.resetPlaceholder(),null===(r=Y.current)||void 0===r||r.resetPlaceholder()},renderElement:()=>e.jsx(Fh,Object.assign({ref:H,tabIndex:-1,onFocus:Q,onBlur:J,$focused:P,$disabled:o,$readOnly:v,$error:s,$wrap:U,id:y,"data-testid":$["data-testid"],onKeyDown:K},$,{children:e.jsxs(Oh,{currentActive:A,wrap:U,error:s,children:[e.jsx(Mh,{$wrap:U,children:e.jsx(mh,{ref:V,placeholder:"From",names:["start-day","start-month","start-year"],value:M,disabled:o,readOnly:D||v,focused:"start"===A,hoverValue:ce("start"),onChange:F?Z:q,onFocus:ee("start"),onBlur:ne,hideInputKeyboard:l})}),e.jsx(Mh,{$wrap:U,children:e.jsx(mh,{ref:Y,placeholder:"To",names:["end-day","end-month","end-year"],value:_,disabled:o,readOnly:E||v,focused:"end"===A,hoverValue:ce("end"),onChange:G,onFocus:ee("end"),onBlur:ie,hideInputKeyboard:l})})]})})),renderDropdown:({elementWidth:t})=>e.jsx(eu,{ref:W,variant:m,initialCalendarDate:C,withButton:g,value:M,endValue:_,selectWithinRange:R||z,currentFocus:A,disabledDates:a,minDate:n,maxDate:i,allowDisabledSelection:x,onSelect:oe,onDismiss:ae,onHover:se,onYearMonthDisplayChange:p,numberOfDays:b,width:t}),customZIndex:w,offset:16})},Bh=K.default.div`
    position: relative;

    ${e=>{const{$xxlStart:t,$xxlSpan:r,$xlStart:n,$xlSpan:o,$lgStart:a,$lgSpan:s,$mdStart:l,$mdSpan:c,$smStart:d,$smSpan:u,$xsStart:f,$xsSpan:h,$xxsStart:p,$xxsSpan:g}=e;return i.css`
            grid-column: ${t||"auto"} / span ${r||1};

            ${Es.MaxWidth.xl} {
                grid-column: ${n||"auto"} / span ${o||1};
            }

            ${Es.MaxWidth.lg} {
                grid-column: ${a||"auto"} / span ${s||1};
            }

            ${Es.MaxWidth.md} {
                grid-column: ${l||"auto"} / span ${c||1};
            }

            ${Es.MaxWidth.sm} {
                grid-column: ${d||"auto"} / span ${u||1};
            }

            ${Es.MaxWidth.xs} {
                grid-column: ${f||"auto"} / span ${h||1};
            }

            ${Es.MaxWidth.xxs} {
                grid-column: ${p||"auto"} / span ${g||1};
            }
        `}}
`,Rh=Y.default.forwardRef(((t,r)=>{const n=i.useTheme(),{xxlCols:o,xlCols:a,lgCols:s,mdCols:l,smCols:c,xsCols:d,xxsCols:u}=t,f=X(t,["xxlCols","xlCols","lgCols","mdCols","smCols","xsCols","xxsCols"]),h=(e,t,r)=>{if(!e)return{start:void 0,span:void 0};if("development"===process.env.NODE_ENV&&("number"==typeof e&&e>t?console.warn(`Warning: ${r}Cols exceeds maximum (${t}): ${e}`):Array.isArray(e)&&(e[0]>t+1||e[1]>t+1)&&console.warn(`Warning: ${r}Cols array exceeds maximum (${t}): [${e[0]}, ${e[1]}]`)),Array.isArray(e)){const[r,n]=e;if(-1===n)return{start:r,span:t-r+1};return{start:r,span:Math.min(n-r,t)}}return{start:void 0,span:Math.min(e,t)}};return e.jsx(Bh,Object.assign({ref:r},(()=>{const e=Ds["xxl-column"]({theme:n}),t=Ds["xl-column"]({theme:n}),r=Ds["lg-column"]({theme:n}),i=Ds["md-column"]({theme:n}),f=Ds["sm-column"]({theme:n}),p=Ds["xs-column"]({theme:n}),g=Ds["xxs-column"]({theme:n}),m=h(o||a||s||l||c||d||u,e,"xxl"),b=h(a||s||l||c||d||u,t,"xl"),v=h(s||l||c||d||u,r,"lg"),y=h(l||c||d||u,i,"md"),x=h(c||d||u,f,"sm"),w=h(d||u,p,"xs"),$=h(u,g,"xxs");return{$xxlStart:m.start,$xxlSpan:m.span,$xlStart:b.start,$xlSpan:b.span,$lgStart:v.start,$lgSpan:v.span,$mdStart:y.start,$mdSpan:y.span,$smStart:x.start,$smSpan:x.span,$xsStart:w.start,$xsSpan:w.span,$xxsStart:$.start,$xxsSpan:$.span}})(),f))})),zh={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Ph=e=>Object.keys(zh).reduce(((t,r)=>{const n=zh[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),Lh={MaxWidth:Ph("max-width"),MinWidth:Ph("min-width")},Nh=zh,Hh=K.default.div`
    position: relative;
    ${e=>{const{$desktopStart:t,$desktopSpan:r,$tabletStart:n,$tabletSpan:o,$mobileStart:a,$mobileSpan:s}=e;return i.css`
            grid-column: ${t||"auto"} / span ${r||1};

            ${Lh.MaxWidth.tablet} {
                grid-column: ${n||"auto"} / span
                    ${o||1};
            }

            ${Lh.MaxWidth.mobileL} {
                grid-column: ${a||"auto"} / span
                    ${s||1};
            }
        `}}
`,Wh=Y.default.forwardRef(((t,r)=>{const{mobileCols:n,tabletCols:i,desktopCols:o}=t,a=X(t,["mobileCols","tabletCols","desktopCols"]);return e.jsx(Hh,Object.assign({ref:r},(()=>{const e=i||n,t=n,r=Vh(o||i||n),a=Vh(e),s=Vh(t);return{$desktopSpan:r.span,$desktopStart:r.start,$mobileSpan:s.span,$mobileStart:s.start,$tabletSpan:a.span,$tabletStart:a.start}})(),a))})),Vh=e=>{if(Array.isArray(e)&&e.length>1){const[t,r]=e,n=t<=r?t:r,i=t<=r?r:t;let o;return o=i===n?1:i-n,{start:n,span:o}}return"number"==typeof e?{start:void 0,span:e}:{start:void 0,span:void 0}},Yh=()=>e=>{let t;t="function"==typeof e.$color?e.$color(e):e.$color||Ks.border(e);const r=encodeURIComponent(t),n=e.$thickness||1,o=n+1;return i.css`
        background-color: transparent;
        height: ${n}px;
        background-repeat: repeat-x;
        background-image: url('data:image/svg+xml,<svg width="8" height="${n}" viewBox="0 0 8 1" xmlns="http://www.w3.org/2000/svg"><line x1="2" y1="1" x2="6" y2="1" stroke="${r}" stroke-width="${o}" stroke-dasharray="4 4" /></svg>');
    `},Uh=K.default.hr`
    width: 100%;
    margin: 0;
    border: none;
    ${e=>{switch(e.$lineStyle){case"dashed":return i.css`
                    ${Yh}
                `;case"solid":return i.css`
                    height: ${e.$thickness}px;
                    background-color: ${e.$color||Ks.border};
                `}}}
`,Kh=t=>{var{thickness:r=1,lineStyle:n="solid",layoutType:i="flex",color:o,className:a,xxsCols:s,xsCols:l,smCols:c,mdCols:d,lgCols:u,xlCols:f,xxlCols:h,mobileCols:p,tabletCols:g,desktopCols:m}=t,b=X(t,["thickness","lineStyle","layoutType","color","className","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","mobileCols","tabletCols","desktopCols"]);const v=void 0!==p||void 0!==g||void 0!==m;switch(i){case"flex":return e.jsx(Uh,Object.assign({className:a,$thickness:r,$lineStyle:n,$color:o},b));case"grid":return v?e.jsx(Wh,Object.assign({className:a,mobileCols:p,tabletCols:g,desktopCols:m},b,{children:e.jsx(Uh,{$thickness:r,$lineStyle:n,$color:o})})):e.jsx(Rh,Object.assign({className:a},(()=>{const e=s||[1,-1],t=l||e,r=c||t,n=d||r,i=u||n,o=f||i;return{xxlCols:h||o,xlCols:o,lgCols:i,mdCols:n,smCols:r,xsCols:t,xxsCols:e}})(),b,{children:e.jsx(Uh,{$thickness:r,$lineStyle:n,$color:o})}))}},qh=K.default.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 0;
    width: 0;
    visibility: hidden;
    z-index: ${e=>e.$zIndex};

    ${e=>{if(e.$show)return i.css`
                height: 100%;
                width: 100vw;
                visibility: visible;
            `}}
`,Xh=K.default.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${e=>e.$stacked?Ks["overlay-subtle"]:Ks["overlay-strong"]};
    backdrop-filter: ${e=>(e=>{let t="";return e&&(t+="blur(10px)"),t.length>0?t:"none"})(e.$backgroundBlur)};
    transition: opacity 200ms ease;

    ${e=>{let t="";return e.$show?t+=i.css`
                visibility: visible;
                opacity: 1;
                pointer-events: auto;
                height: 100%;
                width: 100vw;
            `:t+=i.css`
                visibility: hidden;
                opacity: 0;
                transition-delay: ${e.$disableTransition?"0ms":"400ms"};
                pointer-events: none;
                height: 0;
                width: 0;
            `,e.$disableTransition&&(t+=i.css`
                transition: none;
            `),t}}
`,Gh=({show:r=!1,rootId:n,onOverlayClick:i,children:o,backgroundOpacity:a,backgroundBlur:s=!0,disableTransition:l=!1,enableOverlayClick:c=!1,zIndex:d,id:u})=>{const[f,h]=t.useState(null),[p,m]=t.useState(),[b]=t.useState((()=>Lc.generate())),v=g.useFloatingNodeId(),y=t.useRef(),x=t.useRef(null),w=o&&Y.default.cloneElement(o,{ref:x}),$=u?`lifesg-ds-overlay-root-${u}`:"lifesg-ds-overlay-root",C=null!=d?d:p?99999:99998;(e=>{const r=g.useFloatingTree();t.useEffect((()=>{if(!r)return;const t={zIndex:e};r.events.emit(nh.Change,t)}),[r,e]),t.useEffect((()=>{if(!r)return;const t=()=>{const t={zIndex:e};r.events.emit(nh.Change,t)};return null==r||r.events.on(nh.Ready,t),()=>null==r?void 0:r.events.off(nh.Ready,t)}),[r,e])})(C),t.useEffect((()=>(D(),h(j()),()=>{I(),E().length<1&&T("remove")})),[]),t.useEffect((()=>{if(r){const e=k();S(e),O();const t=setTimeout((()=>{T("add")}),200);return()=>clearTimeout(t)}{I();const e=setTimeout((()=>{E().length<1&&T("remove")}),200);return()=>clearTimeout(e)}}),[r]);const S=e=>{y.current=e,m(e)},j=()=>document&&n?document.getElementById(n):document?document.body:null,k=()=>E().length>0,D=()=>{if(!document.getElementById(Qh)){const e=document.createElement("style");e.id=Qh;const t=document.documentElement.clientWidth,r=window.innerWidth-t;e.innerHTML=`\n\t\t\t\t.${Jh} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${r}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${Jh}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},T=e=>{const t=document.body.classList.contains(Jh);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove(Jh):document.body.classList.add(Jh)},E=()=>{const e=document.body.dataset.lifesgDsOverlayOrder;return e?e.split(","):[]},O=()=>{const e=E();document.body.dataset.lifesgDsOverlayOrder=[...e,b].join(",")},I=()=>{const e=E();document.body.dataset.lifesgDsOverlayOrder=e.filter((e=>e!==b)).join(",")},F=e=>{var t;const r=null===(t=x.current)||void 0===t?void 0:t.firstChild;r&&r.contains(e.target)||i&&c&&(e.preventDefault(),i())};return f?U.default.createPortal(e.jsx(qh,{id:$,"data-testid":$,$show:r,$zIndex:C,children:o&&e.jsx(g.FloatingNode,{id:v,children:e.jsx(Xh,{"data-testid":"overlay-wrapper",$show:r,$stacked:p,$backgroundBlur:s,$disableTransition:l,onClick:F,children:w})})}),f):null},Zh=t=>e.jsx(g.FloatingTree,{children:e.jsx(Gh,Object.assign({},t))}),Qh="lifesg-ds-overlay-stylesheet",Jh="lifesg-ds-overlay-open",ep=K.default.div`
    position: fixed;
    top: 0;

    display: flex;
    flex-direction: column;
    height: 100%;

    background-color: ${Ks.bg};
    box-shadow: 0px 2px 12px
        rgb(from ${Ks.Primitive["neutral-50"]} r g b / 25%);

    visibility: ${e=>e.$show?"visible":"hidden"};
    ${e=>e.$show?i.css`
            right: 0;
            transition: all ${Xs["duration-800"]} ${Xs["ease-exit"]};
        `:i.css`
        right: -100%;
        transition: all ${Xs["duration-800"]} ${Xs["ease-default"]};
    `}

    width: 40%;
    border-top-left-radius: ${Qs.md};
    border-bottom-left-radius: ${Qs.md};
    overflow: hidden;

    ${el.MaxWidth.xl} {
        width: 50%;
        min-width: 700px;
    }

    ${el.MaxWidth.lg} {
        width: 100%;
        min-width: unset;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
`,tp=K.default.div`
    top: 0;

    display: flex;
    align-items: center;
    gap: ${Zs["spacing-16"]};
    padding: ${Zs["spacing-32"]} ${Zs["spacing-16"]}
        ${Zs["spacing-16"]};
    background-color: ${Ks.bg};
    border-bottom: ${Gs["width-010"]} ${Gs.solid} ${Ks.border};

    ${el.MaxWidth.lg} {
        gap: ${Zs["spacing-8"]};
        padding: ${Zs["spacing-32"]} ${Zs["spacing-20"]}
            ${Zs["spacing-16"]};
    }
`,rp=K.default(nl)`
    color: ${Ks.icon};
    padding: 0;
    order: -1; // show button on the left of the header
    :active,
    :focus {
        color: ${Ks["icon-hover"]};
    }

    svg {
        height: 2rem;
        width: 2rem;
    }
`,np=K.default(exports.Typography.HeadingMD)`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`,ip=K.default.div`
    flex: 1;
    overflow-y: auto;
`,op=({className:t,progress:r,color:n,"data-testid":i})=>e.jsx(ap,{className:t,$innerWidth:r,$color:n,"data-testid":i,children:e.jsx("progress",{value:100*r,max:100})}),ap=K.default.div`
    position: relative;
    width: 100%;
    height: 8px;
    background: transparent;

    progress {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
    }

    ${e=>{const{$color:t}=e;let r;return r=t&&"string"==typeof t?t:t?t(e):Ks["icon-primary-subtle"](e),i.css`
            border: ${Gs["width-010"]} ${Gs.solid} ${r};
            border-radius: ${Qs.sm};

            :after {
                content: "";
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                border-radius: inherit;
                background: ${r};
                width: ${100*e.$innerWidth}%;
            }
        `}}
`,sp=K.default.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${e=>{return t=e.show,r=e.animationFrom||"bottom",t?`\n\t\t\t${r}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${r}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var t,r}}

    ${el.MaxWidth.sm} {
        height: calc(
            ${e=>e.verticalHeight?`${e.verticalHeight}px`:"1vh"} * 100
        );

        top: ${e=>e.offsetTop||0}px;
    }
`,lp=r=>{var{id:n="modal",show:i,animationFrom:o="bottom",children:a,enableOverlayClick:s=!0,rootComponentId:l,zIndex:c,onOverlayClick:d,dismissKeyboardOnShow:u=!0}=r,f=X(r,["id","show","animationFrom","children","enableOverlayClick","rootComponentId","zIndex","onOverlayClick","dismissKeyboardOnShow"]);const[h,p]=t.useState(),[g,m]=t.useState();t.useEffect((()=>window.visualViewport?(v(),window.visualViewport.addEventListener("resize",v),()=>{var e;null===(e=window.visualViewport)||void 0===e||e.removeEventListener("resize",v)}):(b(),window.addEventListener("resize",b),()=>{window.removeEventListener("resize",b)})),[]),t.useEffect((()=>{var e,t;i&&u&&(null===(t=null===(e=document.activeElement)||void 0===e?void 0:e.blur)||void 0===t||t.call(e))}),[i]);const b=()=>{const e=.01*window.innerHeight;p(e)},v=()=>{if(window.visualViewport){const e=.01*window.visualViewport.height;p(e),m(window.visualViewport.offsetTop)}};return e.jsx(Zh,{"data-testid":`${n}-overlay`,show:i,enableOverlayClick:s,onOverlayClick:d,id:n,rootId:l,zIndex:c,children:e.jsx(sp,Object.assign({show:i,animationFrom:o,"data-testid":n,verticalHeight:h,offsetTop:g},f,{children:a}))})},cp=K.default.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${Ks.bg};
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.45);
    border-radius: 0.75rem;
    overflow: hidden;

    ${el.MaxWidth.md} {
        width: 90%;
        max-height: 70%;
    }
`,dp=K.default(nl)`
    position: absolute;
    top: var(--close-button-top-inset, ${Zs["spacing-16"]});
    right: var(--close-button-right-inset, ${Zs["spacing-16"]});
    padding: 0;
    color: ${Ks.icon};

    svg {
        height: 2rem;
        width: 2rem;
    }

    ${el.MaxWidth.sm} {
        right: var(--close-button-right-inset, ${Zs["spacing-20"]});
    }
`,up=t=>{var{id:r="modal-box",children:n,onClose:i,showCloseButton:o=!0}=t,a=X(t,["id","children","onClose","showCloseButton"]);return e.jsxs(cp,Object.assign({"data-testid":r},a,{onClick:e=>{e.stopPropagation()},children:[o&&e.jsx(dp,{onClick:i,"data-testid":"close-button",focusHighlight:!1,focusOutline:"browser",children:e.jsx(m.CrossIcon,{})}),n]}))},fp=Object.assign(lp,{Box:up}),hp=i.css`
    ${e=>`\n        ${el.MaxWidth.sm(e)},\n        (orientation: landscape) and (max-height: ${Js["sm-max"](e)}px)\n    `}
`,pp=i.css`
    ${e=>`\n        @media (orientation: landscape) and (max-height: ${Js["sm-max"](e)}px)\n    `}
`,gp=K.default.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    ${e=>i.css`
            ${Gs.Util["dashed-default"]({radius:Qs.sm,thickness:Gs["width-040"],colour:e.$disabled?Ks["border-disabled"]:Ks.border})}

            background-color: ${e.$disabled?Ks["bg-disabled"]:Ks.bg};
        `}
    height: 14.125rem;
`,mp=K.default(Il.Default)`
    width: fit-content;
    margin: 0 ${Zs["spacing-20"]};

    :disabled {
        border-color: ${Ks["border-strong"]};
    }
`,bp=K.default(xh)`
    position: absolute;
    top: ${Zs["spacing-16"]};
    right: ${Zs["spacing-16"]};

    :disabled {
        border-color: ${Ks["border-strong"]};
    }
`,vp=K.default.img`
    display: block;
    object-fit: contain;
    object-position: center;
    width: calc(100% - (3rem + ${Zs["spacing-16"]}) * 2);
    height: 100%;
`,yp=K.default.div`
    background: ${Ks["bg-primary-subtlest"]};
    border: ${Gs["width-010"]} ${Gs.solid} ${Ks.border};
    border-radius: ${Qs.sm};
    margin: 0 ${Zs["spacing-20"]};
    padding: ${Zs["spacing-16"]};
    display: flex;
    gap: ${Zs["spacing-16"]};
    flex: 1;
    flex-direction: column;
    align-items: center;
`,xp=K.default(exports.Typography.BodySM)`
    margin-top: ${Zs["spacing-16"]};
`,wp=K.default(fp)`
    /* increase specificity as the styles are overwritten */
    && {
        height: 100%;
        overflow-y: auto;
    }
`,$p=K.default.div`
    width: 100%;
    margin: auto;
    padding: ${Zs["layout-xxl"]} ${Zs["layout-sm"]};

    ${hp} {
        padding: 0;
        width: 100%;
        height: 100%;
    }
`,Cp=K.default(fp.Box)`
    width: 100%;
    height: 29rem;
    max-width: 672px;
    max-height: none;
    margin: 0 auto;
    padding: ${Zs["spacing-16"]};

    ${hp} {
        display: flex;
        flex-direction: column;
        max-width: none;
        height: 100%;
        border-radius: 0;
        padding: 0;

        --close-button-top-inset: ${Zs["spacing-8"]};
        --close-button-right-inset: ${Zs["spacing-20"]};
    }
`,Sp=K.default.h2`
    ${qs["body-baseline-semibold"]}
    color: ${Ks.text};
    margin-bottom: ${Zs["spacing-16"]};
    text-align: center;

    ${hp} {
        ${qs["body-md-semibold"]}
        margin: ${Zs["spacing-12"]} 0;
    }
`,jp=K.default.div`
    width: 100%;
    height: 20rem;
    border-radius: ${Qs.lg};
    overflow: hidden;

    ${hp} {
        border-radius: 0;
        flex: 1;
    }

    ${pp} {
        background: ${Ks["bg-strong"]};
    }
`,kp=K.default.div`
    position: relative;
    width: 100%;
    height: 100%;
    background: ${Ks["bg-stronger"]};
    margin: auto;

    ${hp} {
        aspect-ratio: 4/3;
    }
    ${el.MaxWidth.sm} {
        width: 100%;
        height: auto;
    }
    ${pp} {
        width: auto;
        height: 100%;
    }
`,Dp=K.default.div`
    position: absolute;
    left: 50%;
    top: calc(75% - 1px);
    width: 300px;
    height: 2px;
    transform: translateX(-50%);
    background-color: ${Ks["border-strong"]};
    pointer-events: none;

    ${hp} {
        width: calc(100% - ${Zs["spacing-40"]});
        max-width: 300px;
        left: 50%;
    }
`,Tp=K.default.div`
    display: flex;
    justify-content: space-between;
    margin-top: ${Zs["spacing-16"]};

    ${el.MaxWidth.sm} {
        flex-direction: column-reverse;
        margin: ${Zs["spacing-16"]} ${Zs["spacing-24"]}
            ${Zs["spacing-48"]};
        gap: ${Zs["spacing-16"]};
    }

    ${pp} {
        flex-direction: row;
        margin: ${Zs["spacing-16"]} ${Zs["spacing-20"]};
    }
`,Ep=K.default(Il.Default)`
    width: 8.5rem;
    ${el.MaxWidth.sm} {
        width: 100%;
    }
    ${pp} {
        height: 2.5rem;
    }
`,Op=K.default.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`,Ip=K.default.canvas`
    cursor: crosshair;
`,Fp=t.lazy((()=>G(void 0,void 0,void 0,(function*(){return{default:(yield Promise.resolve().then((function(){return require("./e-signature-canvas.630742b0.js")}))).ESignatureCanvas}})))),Mp=r=>{const{description:n,id:o,loadingProgress:a,loadingLabel:s="Uploading...",onChange:l,value:c,disabled:d}=r,f=X(r,["description","id","loadingProgress","loadingLabel","onChange","value","disabled"]),[h,p]=t.useState(!1),g=t.useRef(null),[m,b]=t.useState(c),v=i.useTheme(),y=Js["sm-max"]({theme:v}),x=oc.useMediaQuery({maxWidth:y}),w=oc.useMediaQuery({maxHeight:y,orientation:"landscape"}),$=()=>{var e;null===(e=g.current)||void 0===e||e.clear()},C=()=>{if(g.current){const e=g.current.export();b(e),p(!1),null==l||l(e)}};t.useEffect((()=>{b(c)}),[c]);return e.jsxs("div",Object.assign({},f,{children:[e.jsx(gp,{$disabled:d,children:"number"==typeof a?e.jsxs(yp,{children:[s&&e.jsx(exports.Typography.BodyMD,{children:s}),e.jsx(op,{progress:null!=a?a:0,"data-testid":`${o||"e-signature"}-progress-bar`})]}):m?e.jsxs(e.Fragment,{children:[e.jsx(vp,{src:m,alt:"Signature preview"}),e.jsx(bp,{styleType:"light",onClick:()=>p(!0),id:o,"aria-label":"Edit signature",disabled:d,children:e.jsx(u.PencilIcon,{})})]}):e.jsx(mp,{type:"button",styleType:"secondary","aria-label":"Add signature",id:o,onClick:()=>p(!0),disabled:d,children:"Add signature"})}),e.jsx(wp,{"data-testid":"signature-modal",show:h,children:e.jsx($p,{children:e.jsxs(Cp,{onClose:()=>p(!1),children:[e.jsx(Sp,{children:"Signature"}),e.jsx(jp,{children:e.jsxs(kp,{children:[e.jsx(Dp,{}),e.jsx(t.Suspense,{fallback:null,children:h&&e.jsx(Fp,{ref:g,baseImageDataURL:m})})]})}),e.jsxs(Tp,{children:[e.jsx(Ep,{as:w?od.Small:od.Default,type:"button",styleType:x&&!w?"light":"link",icon:e.jsx(u.EraserIcon,{}),onClick:$,children:"Clear"}),e.jsx(Ep,{as:w?Il.Small:Il.Default,type:"button",onClick:C,children:"Save"})]})]})})}),n?e.jsx(xp,{children:n}):null]}))},_p="https://assets.life.gov.sg/react-design-system/img/feedback-rating/feedback-rating-banner.png",Ap="Submit",Bp="Rate your experience",Rp=5,zp=K.default.input`
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
`,Pp=i.css`
    width: 2.75rem;
    height: 2.75rem;
    color: ${Ks["icon-primary"]};
    ${zp}:focus-visible + & {
        outline: ${Gs["width-020"]} ${Gs.solid}
            ${Ks["icon-primary"]};
        outline-offset: -1px;
        border-radius: ${Qs.sm};
    }
`,Lp=K.default(b.StarIcon)`
    ${Pp}
`,Np=K.default(v.StarFillIcon)`
    ${Pp}
`,Hp=K.default.label`
    margin: 0 ${Zs["spacing-8"]};
    line-height: 0;
    display: flex;
    align-items: center;
    ${el.MaxWidth.md} {
        margin: 0 ${Zs["spacing-8"]};
    }
`,Wp=K.default.div`
    display: flex;
    justify-content: center;
    margin: ${Zs["spacing-8"]} ${Zs["spacing-16"]};
`,Vp=t=>{const{description:r,rating:n,onRatingChange:i}=t,o=t=>{const r=`${t} star${1===t?"":"s"}`;return t<=n?e.jsx(Np,{"aria-label":r}):e.jsx(Lp,{"aria-label":r})};return e.jsx(Wp,{role:"radiogroup","aria-label":r,children:[...Array(Rp)].map(((t,r)=>{const a=r+1;return e.jsxs(Hp,{children:[e.jsx(zp,{type:"radio",name:"star",checked:a===n,onChange:()=>(e=>{i(e)})(a)}),o(a)]},a)}))})},Yp=K.default.img`
    width: 9.5rem;
    height: 9.5rem;
    margin: 0 1rem;
    ${el.MaxWidth.md} {
        width: 5.5rem;
        height: 5.5rem;
        margin: 0;
    }
`,Up=K.default.div`
    border-top: 1px solid ${Ks.border};
    border-bottom: 1px solid ${Ks.border};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 1rem 3rem;
    ${el.MaxWidth.md} {
        padding: 2rem 0 1rem;
        flex-direction: column;
    }
`,Kp=K.default.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem 1rem;
    width: 100%;
    text-align: center;
    ${el.MaxWidth.md} {
        margin: 1rem 1.25rem;
        max-width: calc(100% - 2.5rem);
    }
`,qp=K.default(Il.Default)`
    margin-top: 1rem;
    width: 100%;
`,Xp=K.default.div`
    position: relative;
    display: flex;
    flex-direction: column;

    ${e=>{if(e.$border)return i.css`
                ${Gs.Util["dashed-default"]({radius:Qs.sm,thickness:Gs["width-040"],colour:Ks.border})}
                padding: ${Zs["spacing-32"]};

                ${el.MaxWidth.sm} {
                    padding: ${Zs["spacing-32"]} ${Zs["spacing-20"]};
                }
            `}}
`,Gp=K.default.div`
    display: flex;
    flex-direction: column;
    margin-bottom: ${Zs["spacing-32"]};
`,Zp=K.default.p`
    ${qs["heading-xs-regular"]}
    color: ${Ks.text};
    margin-bottom: ${Zs["spacing-8"]};
`,Qp=K.default.div`
    ${Rl({textSize:"heading-xs"})}
    color: ${Ks.text};
`,Jp=K.default.p`
    ${qs["body-md-regular"]}
    color: ${Ks["text-subtler"]};
`,eg=K.default.div`
    ${Rl({textSize:"body-md"})}
    color: ${Ks["text-subtler"]};
`,tg=K.default.ul`
    list-style-type: none;
`;var rg;!function(e){e.formatFileSizeDisplay=e=>{if(!e||0===e)return"0 KB";const t=Math.floor(Math.log(e)/Math.log(1024));return`${Number(e/Math.pow(1024,t)).toFixed(0)} ${["B","KB","MB","GB","TB","PB","EB","ZB","YB"][t]}`},e.isSupportedImageType=e=>["image/avif","image/gif","image/jpeg","image/png","image/svg+xml","image/webp"].includes(e)}(rg||(rg={}));const ng=({src:t,alt:r,className:n,"data-testid":i})=>e.jsx("img",{src:t,alt:r||"",className:n,"data-testid":i,onError:e=>{e.target.onerror=null,e.target.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAABQCAYAAACeXX40AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARTSURBVHgB7Z1tUuJAEIY7qMRYWnIE9wR6BD2Be5S9weoN1pusJ1iPwJ5guYH4GeNH2HkppgojYAIhbXrepwoJEMofPHZP9zQxkgJpmh5HUfTdHZ6624EQsiLOp7676+d5fp4kyeDda/5gNBr1siz76Q5/CCHr41ccx+dOyiEejAWcyHflDg+FkDWDiNjtdk8gYQdPTCIf5SON4ALe0cQ5idya78CZ+E8IaRgn4gki4JkQogCK3Y77wdRLtDiNnp6eRkKIEh0hRBEKSFShgEQVCkhUoYBEFQpIVKGARBUKSFShgEQVCkhUoYBEFQpIVNkUokqWZfLy8iJvb2/jx1tbWxLHsWxsbEgIcBpGCQh3e3srr6+vH16Lokh2dnbGN+swAioA+a6vrzERPPN1PP/w8CB5nsvu7q5YhmvAhoFciHzz5JsmTVNxGUosQwEbBmu+WWl3Ho+Pj6VkbSsUsGGqRjSka6Riq1DAhllGJkZAUhuocKtCAUltLNPfs9wTpIAL8M3hOtne3q50PhrTnY7dj4kCzgFrteFwKM/Pz1In3W53vNNRFvYBA+Xm5mYs4bzdilWAVJubn+8B7O3tlTqvzVDAGaAB7KVDAXB/f19rIYCU2uv1JEmSmUUJpMPrVdN1G+FecAGs+5B6i+0SpM79/X2pG/weyI57yIiCw3rUm4Z7wVMgyt3d3c3s1WEtiMiIqFUniIaQO1SYgqfALgVGo+aBVFx3URI6FHACoh4mUD4DRYnlrbGmoYATUPWWKTRwDtaIlncnmoQCyvuqtwwoVJCOyeoELyBkKpN6i2C9iFEpshrBC1h2OHQWEHeZogTvwVwgCVxARLBVdzmqFiUQD+/BbR17zW0jWAHx4deRQhE9yxYwfu3oz10l+lohWAHLSlMGRFE0sBfhhxumoyXeF3oxE6SAiHx1pz+k1nnj9pDODzcUwXusf/FoEcEJiKizruoVUbC4k+LlW7TW9F/BDJHgBFz3uqu4l4zHnxU6fuwrxPVgUAKi4bzuytNf8cAPNpRt0yByhthXDGYcC1EIVyNoCoxUVW3xYBwLQ6hVJqbbThAR0EejJlmmv+iHX0NaDwYhYB0N56bw68FQMC8gxMPar02EtB40LyBSbxurS7RmFg3HWsG0gG1KvbNo6x9PFcwKiOixzJjVV2K6pWMVkwL6atIC1ke3TArY9tRbpMxuSlsxJ2Abq94yWE3F5gS0+kFZ/R6KKQFRdFieMsbYlrXobkbAUJq31ka3zFyaAwKGsomPqrjuS4RowYsTEVX4xXSiCgUkqlBAogoFJKpQQKIKBSSqUECiCgUkqlBAogoFJKpAwIEQokO/k+f5pRCiQBRF/ShN02N38EcIaZjRaPStkyTJlYuCF0JIs1w49wbj/5TnTOxlWYYoeCSErJ+/cRwj8w7HVTAO3BMnjISkAS68fHjw4X+FujXhgbs7cyccCiMiqYeBu126TPsbS77pF/4DuxeyMpdnp3gAAAAASUVORK5CYII="}}),ig=K.default.li`
    display: flex;
    align-items: center;

    width: 100%;
    border: none;

    :not(:last-child) {
        margin-bottom: ${Zs["spacing-16"]};
    }
`,og=K.default.div`
    display: flex;
    align-items: center;

    width: 100%;
    padding: ${Zs["spacing-16"]} ${Zs["spacing-32"]};
    cursor: pointer;

    background: ${Ks["bg-primary-subtlest"]};
    border: ${Gs["width-010"]} ${Gs.solid} ${Ks.border};
    border-radius: ${Qs.sm};

    ${el.MaxWidth.lg} {
        padding: ${Zs["spacing-16"]};
    }

    :hover {
        background: ${Ks["bg-hover"]};
    }
`,ag=K.default.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${el.MaxWidth.lg} {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }

    ${e=>{if(e.$hasThumbnail)return i.css`
                ${el.MaxWidth.lg} {
                    flex-direction: row;
                    align-items: center;
                }
            `}}
`,sg=K.default.div`
    display: flex;
    flex: 1;
    flex-direction: column;

    width: 100%;

    overflow-wrap: break-word;
    word-break: break-all;
    white-space: normal;
`,lg=K.default.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${el.MaxWidth.lg} {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }
`,cg=K.default.div`
    display: flex;
    justify-content: flex-end;

    width: 5rem;
    margin-left: ${Zs["spacing-8"]};

    ${qs["body-md-regular"]}
    color: ${Ks.text};

    ${el.MaxWidth.lg} {
        justify-content: flex-start;

        width: 100%;
        margin-left: 0;
        margin-top: ${Zs["spacing-8"]};

        ${il(2)}
    }
`,dg=K.default.div`
    ${qs["body-md-regular"]}
    color: ${Ks.text};

    ${el.MaxWidth.lg} {
        ${il(2)}
    }
`;K.default(dg)`
    ${qs["body-md-regular"]}
    margin-top: ${Zs["spacing-4"]};
`;const ug=K.default.div`
    ${qs["body-sm-semibold"]}
    color: ${Ks["text-error"]};
`,fg=K.default(ug)`
    margin-top: ${Zs["spacing-4"]};
    ${el.MaxWidth.lg} {
        display: none;
        visibility: hidden;
    }
`,hg=K.default(ug)`
    display: none;
    visibility: hidden;
    ${el.MaxWidth.lg} {
        display: block;
        visibility: visible;
        margin-top: ${Zs["spacing-8"]};
    }
`,pg=K.default(jl)`
    color: ${Ks["icon-primary"]};
`,gg=K.default.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    margin-left: ${Zs["spacing-32"]};

    ${el.MaxWidth.lg} {
        margin-left: ${Zs["spacing-16"]};
    }
`,mg=K.default(xh)`
    min-width: unset;

    :not(:last-child) {
        margin-right: ${Zs["spacing-16"]};
    }
`,bg=K.default.div`
    width: auto;
    margin-right: ${Zs["spacing-32"]};

    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: center;

    ${el.MaxWidth.lg} {
        margin-right: ${Zs["spacing-16"]};
    }
`,vg=K.default(ng)`
    border-radius: ${Qs.sm};
    border: ${Gs["width-010"]} ${Gs.solid} ${Ks.border};

    width: 96px;
    height: 96px;
    aspect-ratio: 1;
    object-fit: cover;

    ${el.MaxWidth.lg} {
        width: 64px;
        height: 64px;
    }
`,yg=t.memo((({fileItem:r,onDownload:n})=>{const{id:o,name:a,size:s,errorMessage:l,thumbnailImageDataUrl:c,truncateText:d=!0,ready:f=!0}=r,[h,p]=t.useState(!1),[g,m]=t.useState(!1),b=rg.formatFileSizeDisplay(s),v=i.useTheme(),y=Js["sm-max"]({theme:v}),x=oc.useMediaQuery({maxWidth:y}),[w,$]=t.useState(),C=t.useRef(null);t.useEffect((()=>{C.current&&$(x?S(a):a)}),[a,x]);const S=e=>{if(!d)return e;const t=C&&C.current?C.current.getBoundingClientRect().width:0;return Nc.truncateTwoLines(e,t,16,1.5)},j=()=>e.jsxs(e.Fragment,{children:[e.jsx(dg,{ref:C,children:w}),g&&e.jsx(fg,{children:l||"Something went wrong"})]});return e.jsx(ig,{"data-testid":o,children:e.jsxs(og,{onClick:()=>G(void 0,void 0,void 0,(function*(){if(f&&!h){p(!0);try{m(!1),yield n(r)}catch(e){m(!0)}finally{p(!1)}}})),children:[(()=>{let t;var r;return c?(r=c,t=e.jsxs(e.Fragment,{children:[e.jsx(bg,{"data-testid":`${o}-thumbnail`,children:e.jsx(vg,{"data-testid":`${o}-thumbnail-image`,src:r})}),e.jsxs(lg,{children:[e.jsx(sg,{children:j()}),e.jsx(cg,{children:b||"-"}),g&&e.jsx(hg,{children:l||"Something went wrong"})]})]})):t=e.jsxs(e.Fragment,{children:[e.jsx(sg,{children:j()}),e.jsx(cg,{children:b||"-"}),g&&e.jsx(hg,{children:l||"Something went wrong"})]}),e.jsx(ag,{$hasThumbnail:!!c,children:t})})(),e.jsx(gg,{children:e.jsx(mg,{"data-testid":`${o}-download-button`,type:"button",styleType:"light",sizeType:"small","aria-label":`download ${a}`,children:h||!f?e.jsx(pg,{size:16,"aria-hidden":!0}):e.jsx(u.DownloadIcon,{"aria-hidden":!0})})})]})})})),xg={activeId:void 0,setActiveId:()=>{}},wg=t.createContext(xg);var $g,Cg={exports:{}},Sg={exports:{}},jg={};var kg,Dg,Tg,Eg,Og,Ig,Fg,Mg,_g,Ag,Bg,Rg,zg,Pg,Lg={};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Ng(){return Dg||(Dg=1,"production"===process.env.NODE_ENV?Sg.exports=function(){if($g)return jg;$g=1;var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,o=e?Symbol.for("react.profiler"):60114,a=e?Symbol.for("react.provider"):60109,s=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,u=e?Symbol.for("react.suspense"):60113,f=e?Symbol.for("react.suspense_list"):60120,h=e?Symbol.for("react.memo"):60115,p=e?Symbol.for("react.lazy"):60116,g=e?Symbol.for("react.block"):60121,m=e?Symbol.for("react.fundamental"):60117,b=e?Symbol.for("react.responder"):60118,v=e?Symbol.for("react.scope"):60119;function y(e){if("object"==typeof e&&null!==e){var f=e.$$typeof;switch(f){case t:switch(e=e.type){case l:case c:case n:case o:case i:case u:return e;default:switch(e=e&&e.$$typeof){case s:case d:case p:case h:case a:return e;default:return f}}case r:return f}}}function x(e){return y(e)===c}return jg.AsyncMode=l,jg.ConcurrentMode=c,jg.ContextConsumer=s,jg.ContextProvider=a,jg.Element=t,jg.ForwardRef=d,jg.Fragment=n,jg.Lazy=p,jg.Memo=h,jg.Portal=r,jg.Profiler=o,jg.StrictMode=i,jg.Suspense=u,jg.isAsyncMode=function(e){return x(e)||y(e)===l},jg.isConcurrentMode=x,jg.isContextConsumer=function(e){return y(e)===s},jg.isContextProvider=function(e){return y(e)===a},jg.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},jg.isForwardRef=function(e){return y(e)===d},jg.isFragment=function(e){return y(e)===n},jg.isLazy=function(e){return y(e)===p},jg.isMemo=function(e){return y(e)===h},jg.isPortal=function(e){return y(e)===r},jg.isProfiler=function(e){return y(e)===o},jg.isStrictMode=function(e){return y(e)===i},jg.isSuspense=function(e){return y(e)===u},jg.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===n||e===c||e===o||e===i||e===u||e===f||"object"==typeof e&&null!==e&&(e.$$typeof===p||e.$$typeof===h||e.$$typeof===a||e.$$typeof===s||e.$$typeof===d||e.$$typeof===m||e.$$typeof===b||e.$$typeof===v||e.$$typeof===g)},jg.typeOf=y,jg}():Sg.exports=(kg||(kg=1,"production"!==process.env.NODE_ENV&&function(){var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,o=e?Symbol.for("react.profiler"):60114,a=e?Symbol.for("react.provider"):60109,s=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,u=e?Symbol.for("react.suspense"):60113,f=e?Symbol.for("react.suspense_list"):60120,h=e?Symbol.for("react.memo"):60115,p=e?Symbol.for("react.lazy"):60116,g=e?Symbol.for("react.block"):60121,m=e?Symbol.for("react.fundamental"):60117,b=e?Symbol.for("react.responder"):60118,v=e?Symbol.for("react.scope"):60119;function y(e){if("object"==typeof e&&null!==e){var f=e.$$typeof;switch(f){case t:var g=e.type;switch(g){case l:case c:case n:case o:case i:case u:return g;default:var m=g&&g.$$typeof;switch(m){case s:case d:case p:case h:case a:return m;default:return f}}case r:return f}}}var x=l,w=c,$=s,C=a,S=t,j=d,k=n,D=p,T=h,E=r,O=o,I=i,F=u,M=!1;function _(e){return y(e)===c}Lg.AsyncMode=x,Lg.ConcurrentMode=w,Lg.ContextConsumer=$,Lg.ContextProvider=C,Lg.Element=S,Lg.ForwardRef=j,Lg.Fragment=k,Lg.Lazy=D,Lg.Memo=T,Lg.Portal=E,Lg.Profiler=O,Lg.StrictMode=I,Lg.Suspense=F,Lg.isAsyncMode=function(e){return M||(M=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),_(e)||y(e)===l},Lg.isConcurrentMode=_,Lg.isContextConsumer=function(e){return y(e)===s},Lg.isContextProvider=function(e){return y(e)===a},Lg.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},Lg.isForwardRef=function(e){return y(e)===d},Lg.isFragment=function(e){return y(e)===n},Lg.isLazy=function(e){return y(e)===p},Lg.isMemo=function(e){return y(e)===h},Lg.isPortal=function(e){return y(e)===r},Lg.isProfiler=function(e){return y(e)===o},Lg.isStrictMode=function(e){return y(e)===i},Lg.isSuspense=function(e){return y(e)===u},Lg.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===n||e===c||e===o||e===i||e===u||e===f||"object"==typeof e&&null!==e&&(e.$$typeof===p||e.$$typeof===h||e.$$typeof===a||e.$$typeof===s||e.$$typeof===d||e.$$typeof===m||e.$$typeof===b||e.$$typeof===v||e.$$typeof===g)},Lg.typeOf=y}()),Lg)),Sg.exports}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/function Hg(){if(Eg)return Tg;Eg=1;var e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;return Tg=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;var n=Object.getOwnPropertyNames(t).map((function(e){return t[e]}));if("0123456789"!==n.join(""))return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach((function(e){i[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},i)).join("")}catch(e){return!1}}()?Object.assign:function(n,i){for(var o,a,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(n),l=1;l<arguments.length;l++){for(var c in o=Object(arguments[l]))t.call(o,c)&&(s[c]=o[c]);if(e){a=e(o);for(var d=0;d<a.length;d++)r.call(o,a[d])&&(s[a[d]]=o[a[d]])}}return s},Tg}function Wg(){if(Ig)return Og;Ig=1;return Og="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}function Vg(){return Mg?Fg:(Mg=1,Fg=Function.call.bind(Object.prototype.hasOwnProperty))}if("production"!==process.env.NODE_ENV){var Yg=Ng();Cg.exports=function(){if(Rg)return Bg;Rg=1;var e=Ng(),t=Hg(),r=Wg(),n=Vg(),i=function(){if(Ag)return _g;Ag=1;var e=function(){};if("production"!==process.env.NODE_ENV){var t=Wg(),r={},n=Vg();e=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}}function i(i,o,a,s,l){if("production"!==process.env.NODE_ENV)for(var c in i)if(n(i,c)){var d;try{if("function"!=typeof i[c]){var u=Error((s||"React class")+": "+a+" type `"+c+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof i[c]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw u.name="Invariant Violation",u}d=i[c](o,c,s,a,null,t)}catch(e){d=e}if(!d||d instanceof Error||e((s||"React class")+": type specification of "+a+" `"+c+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof d+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),d instanceof Error&&!(d.message in r)){r[d.message]=!0;var f=l?l():"";e("Failed "+a+" type: "+d.message+(null!=f?f:""))}}}return i.resetWarningCache=function(){"production"!==process.env.NODE_ENV&&(r={})},_g=i}(),o=function(){};function a(){return null}return"production"!==process.env.NODE_ENV&&(o=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}),Bg=function(s,l){var c="function"==typeof Symbol&&Symbol.iterator,d="@@iterator",u="<<anonymous>>",f={array:m("array"),bigint:m("bigint"),bool:m("boolean"),func:m("function"),number:m("number"),object:m("object"),string:m("string"),symbol:m("symbol"),any:g(a),arrayOf:function(e){return g((function(t,n,i,o,a){if("function"!=typeof e)return new p("Property `"+a+"` of component `"+i+"` has invalid PropType notation inside arrayOf.");var s=t[n];if(!Array.isArray(s))return new p("Invalid "+o+" `"+a+"` of type `"+y(s)+"` supplied to `"+i+"`, expected an array.");for(var l=0;l<s.length;l++){var c=e(s,l,i,o,a+"["+l+"]",r);if(c instanceof Error)return c}return null}))},element:g((function(e,t,r,n,i){var o=e[t];return s(o)?null:new p("Invalid "+n+" `"+i+"` of type `"+y(o)+"` supplied to `"+r+"`, expected a single ReactElement.")})),elementType:g((function(t,r,n,i,o){var a=t[r];return e.isValidElementType(a)?null:new p("Invalid "+i+" `"+o+"` of type `"+y(a)+"` supplied to `"+n+"`, expected a single ReactElement type.")})),instanceOf:function(e){return g((function(t,r,n,i,o){if(!(t[r]instanceof e)){var a=e.name||u;return new p("Invalid "+i+" `"+o+"` of type `"+((s=t[r]).constructor&&s.constructor.name?s.constructor.name:u)+"` supplied to `"+n+"`, expected instance of `"+a+"`.")}var s;return null}))},node:g((function(e,t,r,n,i){return v(e[t])?null:new p("Invalid "+n+" `"+i+"` supplied to `"+r+"`, expected a ReactNode.")})),objectOf:function(e){return g((function(t,i,o,a,s){if("function"!=typeof e)return new p("Property `"+s+"` of component `"+o+"` has invalid PropType notation inside objectOf.");var l=t[i],c=y(l);if("object"!==c)return new p("Invalid "+a+" `"+s+"` of type `"+c+"` supplied to `"+o+"`, expected an object.");for(var d in l)if(n(l,d)){var u=e(l,d,o,a,s+"."+d,r);if(u instanceof Error)return u}return null}))},oneOf:function(e){return Array.isArray(e)?g((function(t,r,n,i,o){for(var a=t[r],s=0;s<e.length;s++)if(h(a,e[s]))return null;var l=JSON.stringify(e,(function(e,t){return"symbol"===x(t)?String(t):t}));return new p("Invalid "+i+" `"+o+"` of value `"+String(a)+"` supplied to `"+n+"`, expected one of "+l+".")})):("production"!==process.env.NODE_ENV&&o(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),a)},oneOfType:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&o("Invalid argument supplied to oneOfType, expected an instance of array."),a;for(var t=0;t<e.length;t++){var i=e[t];if("function"!=typeof i)return o("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+w(i)+" at index "+t+"."),a}return g((function(t,i,o,a,s){for(var l=[],c=0;c<e.length;c++){var d=(0,e[c])(t,i,o,a,s,r);if(null==d)return null;d.data&&n(d.data,"expectedType")&&l.push(d.data.expectedType)}return new p("Invalid "+a+" `"+s+"` supplied to `"+o+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return g((function(t,n,i,o,a){var s=t[n],l=y(s);if("object"!==l)return new p("Invalid "+o+" `"+a+"` of type `"+l+"` supplied to `"+i+"`, expected `object`.");for(var c in e){var d=e[c];if("function"!=typeof d)return b(i,o,a,c,x(d));var u=d(s,c,i,o,a+"."+c,r);if(u)return u}return null}))},exact:function(e){return g((function(i,o,a,s,l){var c=i[o],d=y(c);if("object"!==d)return new p("Invalid "+s+" `"+l+"` of type `"+d+"` supplied to `"+a+"`, expected `object`.");var u=t({},i[o],e);for(var f in u){var h=e[f];if(n(e,f)&&"function"!=typeof h)return b(a,s,l,f,x(h));if(!h)return new p("Invalid "+s+" `"+l+"` key `"+f+"` supplied to `"+a+"`.\nBad object: "+JSON.stringify(i[o],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var g=h(c,f,a,s,l+"."+f,r);if(g)return g}return null}))}};function h(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function p(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function g(e){if("production"!==process.env.NODE_ENV)var t={},n=0;function i(i,a,s,c,d,f,h){if(c=c||u,f=f||s,h!==r){if(l){var g=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw g.name="Invariant Violation",g}if("production"!==process.env.NODE_ENV&&"undefined"!=typeof console){var m=c+":"+s;!t[m]&&n<3&&(o("You are manually calling a React.PropTypes validation function for the `"+f+"` prop on `"+c+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),t[m]=!0,n++)}}return null==a[s]?i?null===a[s]?new p("The "+d+" `"+f+"` is marked as required in `"+c+"`, but its value is `null`."):new p("The "+d+" `"+f+"` is marked as required in `"+c+"`, but its value is `undefined`."):null:e(a,s,c,d,f)}var a=i.bind(null,!1);return a.isRequired=i.bind(null,!0),a}function m(e){return g((function(t,r,n,i,o,a){var s=t[r];return y(s)!==e?new p("Invalid "+i+" `"+o+"` of type `"+x(s)+"` supplied to `"+n+"`, expected `"+e+"`.",{expectedType:e}):null}))}function b(e,t,r,n,i){return new p((e||"React class")+": "+t+" type `"+r+"."+n+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+i+"`.")}function v(e){switch(typeof e){case"number":case"string":case"undefined":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(v);if(null===e||s(e))return!0;var t=function(e){var t=e&&(c&&e[c]||e[d]);if("function"==typeof t)return t}(e);if(!t)return!1;var r,n=t.call(e);if(t!==e.entries){for(;!(r=n.next()).done;)if(!v(r.value))return!1}else for(;!(r=n.next()).done;){var i=r.value;if(i&&!v(i[1]))return!1}return!0;default:return!1}}function y(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function x(e){if(null==e)return""+e;var t=y(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function w(e){var t=x(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return p.prototype=Error.prototype,f.checkPropTypes=i,f.resetWarningCache=i.resetWarningCache,f.PropTypes=f,f},Bg}()(Yg.isElement,!0)}else Cg.exports=function(){if(Pg)return zg;Pg=1;var e=Wg();function t(){}function r(){}return r.resetWarningCache=t,zg=function(){function n(t,r,n,i,o,a){if(a!==e){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function i(){return n}n.isRequired=n;var o={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:i,element:n,elementType:n,instanceOf:i,node:n,objectOf:i,oneOf:i,oneOfType:i,shape:i,exact:i,checkPropTypes:r,resetWarningCache:t};return o.PropTypes=o,o}}()();var Ug=Oi(Cg.exports),Kg=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function qg(e,t){var r=function(e){var t=e.name;if(t&&-1!==t.lastIndexOf(".")&&!e.type){var r=t.split(".").pop().toLowerCase(),n=Kg.get(r);n&&Object.defineProperty(e,"type",{value:n,writable:!1,configurable:!1,enumerable:!0})}return e}(e);if("string"!=typeof r.path){var n=e.webkitRelativePath;Object.defineProperty(r,"path",{value:"string"==typeof t?t:"string"==typeof n&&n.length>0?n:e.name,writable:!1,configurable:!1,enumerable:!0})}return r}var Xg=[".DS_Store","Thumbs.db"];function Gg(e){return"object"==typeof e&&null!==e}function Zg(e){return tm(e.target.files).map((function(e){return qg(e)}))}function Qg(e){return G(this,void 0,void 0,(function(){return Z(this,(function(t){switch(t.label){case 0:return[4,Promise.all(e.map((function(e){return e.getFile()})))];case 1:return[2,t.sent().map((function(e){return qg(e)}))]}}))}))}function Jg(e,t){return G(this,void 0,void 0,(function(){var r;return Z(this,(function(n){switch(n.label){case 0:return e.items?(r=tm(e.items).filter((function(e){return"file"===e.kind})),"drop"!==t?[2,r]:[4,Promise.all(r.map(rm))]):[3,2];case 1:return[2,em(nm(n.sent()))];case 2:return[2,em(tm(e.files).map((function(e){return qg(e)})))]}}))}))}function em(e){return e.filter((function(e){return-1===Xg.indexOf(e.name)}))}function tm(e){if(null===e)return[];for(var t=[],r=0;r<e.length;r++){var n=e[r];t.push(n)}return t}function rm(e){if("function"!=typeof e.webkitGetAsEntry)return im(e);var t=e.webkitGetAsEntry();return t&&t.isDirectory?am(t):im(e)}function nm(e){return e.reduce((function(e,t){return J(J([],Q(e),!1),Q(Array.isArray(t)?nm(t):[t]),!1)}),[])}function im(e){var t=e.getAsFile();if(!t)return Promise.reject("".concat(e," is not a File"));var r=qg(t);return Promise.resolve(r)}function om(e){return G(this,void 0,void 0,(function(){return Z(this,(function(t){return[2,e.isDirectory?am(e):sm(e)]}))}))}function am(e){var t=e.createReader();return new Promise((function(e,r){var n=[];!function i(){var o=this;t.readEntries((function(t){return G(o,void 0,void 0,(function(){var o,a,s;return Z(this,(function(l){switch(l.label){case 0:if(t.length)return[3,5];l.label=1;case 1:return l.trys.push([1,3,,4]),[4,Promise.all(n)];case 2:return o=l.sent(),e(o),[3,4];case 3:return a=l.sent(),r(a),[3,4];case 4:return[3,6];case 5:s=Promise.all(t.map(om)),n.push(s),i(),l.label=6;case 6:return[2]}}))}))}),(function(e){r(e)}))}()}))}function sm(e){return G(this,void 0,void 0,(function(){return Z(this,(function(t){return[2,new Promise((function(t,r){e.file((function(r){var n=qg(r,e.fullPath);t(n)}),(function(e){r(e)}))}))]}))}))}var lm=function(e,t){if(e&&t){var r=Array.isArray(t)?t:t.split(","),n=e.name||"",i=(e.type||"").toLowerCase(),o=i.replace(/\/.*$/,"");return r.some((function(e){var t=e.trim().toLowerCase();return"."===t.charAt(0)?n.toLowerCase().endsWith(t):t.endsWith("/*")?o===t.replace(/\/.*$/,""):i===t}))}return!0};function cm(e){return function(e){if(Array.isArray(e))return gm(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||pm(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function dm(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function um(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?dm(Object(r),!0).forEach((function(t){fm(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):dm(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function fm(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function hm(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,i,o=[],a=!0,s=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);a=!0);}catch(e){s=!0,i=e}finally{try{a||null==r.return||r.return()}finally{if(s)throw i}}return o}(e,t)||pm(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function pm(e,t){if(e){if("string"==typeof e)return gm(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?gm(e,t):void 0}}function gm(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var mm=function(e){e=Array.isArray(e)&&1===e.length?e[0]:e;var t=Array.isArray(e)?"one of ".concat(e.join(", ")):e;return{code:"file-invalid-type",message:"File type must be ".concat(t)}},bm=function(e){return{code:"file-too-large",message:"File is larger than ".concat(e," ").concat(1===e?"byte":"bytes")}},vm=function(e){return{code:"file-too-small",message:"File is smaller than ".concat(e," ").concat(1===e?"byte":"bytes")}},ym={code:"too-many-files",message:"Too many files"};function xm(e,t){var r="application/x-moz-file"===e.type||lm(e,t);return[r,r?null:mm(t)]}function wm(e,t,r){if($m(e.size))if($m(t)&&$m(r)){if(e.size>r)return[!1,bm(r)];if(e.size<t)return[!1,vm(t)]}else{if($m(t)&&e.size<t)return[!1,vm(t)];if($m(r)&&e.size>r)return[!1,bm(r)]}return[!0,null]}function $m(e){return null!=e}function Cm(e){return"function"==typeof e.isPropagationStopped?e.isPropagationStopped():void 0!==e.cancelBubble&&e.cancelBubble}function Sm(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,(function(e){return"Files"===e||"application/x-moz-file"===e})):!!e.target&&!!e.target.files}function jm(e){e.preventDefault()}function km(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return t.some((function(t){return!Cm(e)&&t&&t.apply(void 0,[e].concat(n)),Cm(e)}))}}function Dm(e){return"audio/*"===e||"video/*"===e||"image/*"===e||"text/*"===e||/\w+\/[-+.\w]+/g.test(e)}function Tm(e){return/^.*\.[\w]+$/.test(e)}var Em=["children"],Om=["open"],Im=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],Fm=["refKey","onChange","onClick"];function Mm(e){return function(e){if(Array.isArray(e))return Bm(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Am(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,i,o=[],a=!0,s=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);a=!0);}catch(e){s=!0,i=e}finally{try{a||null==r.return||r.return()}finally{if(s)throw i}}return o}(e,t)||Am(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Am(e,t){if(e){if("string"==typeof e)return Bm(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Bm(e,t):void 0}}function Bm(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Rm(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function zm(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Rm(Object(r),!0).forEach((function(t){Pm(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Rm(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Pm(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Lm(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var Nm=t.forwardRef((function(e,r){var n=e.children,i=Vm(Lm(e,Em)),o=i.open,a=Lm(i,Om);return t.useImperativeHandle(r,(function(){return{open:o}}),[o]),Y.default.createElement(t.Fragment,null,n(zm(zm({},a),{},{open:o})))}));Nm.displayName="Dropzone";var Hm={disabled:!1,getFilesFromEvent:function(e){return G(this,void 0,void 0,(function(){return Z(this,(function(t){return Gg(e)&&Gg(e.dataTransfer)?[2,Jg(e.dataTransfer,e.type)]:function(e){return Gg(e)&&Gg(e.target)}(e)?[2,Zg(e)]:Array.isArray(e)&&e.every((function(e){return"getFile"in e&&"function"==typeof e.getFile}))?[2,Qg(e)]:[2,[]]}))}))},maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};Nm.defaultProps=Hm,Nm.propTypes={children:Ug.func,accept:Ug.objectOf(Ug.arrayOf(Ug.string)),multiple:Ug.bool,preventDropOnDocument:Ug.bool,noClick:Ug.bool,noKeyboard:Ug.bool,noDrag:Ug.bool,noDragEventsBubbling:Ug.bool,minSize:Ug.number,maxSize:Ug.number,maxFiles:Ug.number,disabled:Ug.bool,getFilesFromEvent:Ug.func,onFileDialogCancel:Ug.func,onFileDialogOpen:Ug.func,useFsAccessApi:Ug.bool,autoFocus:Ug.bool,onDragEnter:Ug.func,onDragLeave:Ug.func,onDragOver:Ug.func,onDrop:Ug.func,onDropAccepted:Ug.func,onDropRejected:Ug.func,onError:Ug.func,validator:Ug.func};var Wm={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function Vm(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=zm(zm({},Hm),e),n=r.accept,i=r.disabled,o=r.getFilesFromEvent,a=r.maxSize,s=r.minSize,l=r.multiple,c=r.maxFiles,d=r.onDragEnter,u=r.onDragLeave,f=r.onDragOver,h=r.onDrop,p=r.onDropAccepted,g=r.onDropRejected,m=r.onFileDialogCancel,b=r.onFileDialogOpen,v=r.useFsAccessApi,y=r.autoFocus,x=r.preventDropOnDocument,w=r.noClick,$=r.noKeyboard,C=r.noDrag,S=r.noDragEventsBubbling,j=r.onError,k=r.validator,D=t.useMemo((function(){return function(e){if($m(e))return Object.entries(e).reduce((function(e,t){var r=hm(t,2),n=r[0],i=r[1];return[].concat(cm(e),[n],cm(i))}),[]).filter((function(e){return Dm(e)||Tm(e)})).join(",")}(n)}),[n]),T=t.useMemo((function(){return function(e){return $m(e)?[{description:"Files",accept:Object.entries(e).filter((function(e){var t=hm(e,2),r=t[0],n=t[1],i=!0;return Dm(r)||(console.warn('Skipped "'.concat(r,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),i=!1),Array.isArray(n)&&n.every(Tm)||(console.warn('Skipped "'.concat(r,'" because an invalid file extension was provided.')),i=!1),i})).reduce((function(e,t){var r=hm(t,2),n=r[0],i=r[1];return um(um({},e),{},fm({},n,i))}),{})}]:e}(n)}),[n]),E=t.useMemo((function(){return"function"==typeof b?b:Um}),[b]),O=t.useMemo((function(){return"function"==typeof m?m:Um}),[m]),I=t.useRef(null),F=t.useRef(null),M=_m(t.useReducer(Ym,Wm),2),_=M[0],A=M[1],B=_.isFocused,R=_.isFileDialogActive,z=t.useRef("undefined"!=typeof window&&window.isSecureContext&&v&&"showOpenFilePicker"in window),P=function(){!z.current&&R&&setTimeout((function(){F.current&&(F.current.files.length||(A({type:"closeDialog"}),O()))}),300)};t.useEffect((function(){return window.addEventListener("focus",P,!1),function(){window.removeEventListener("focus",P,!1)}}),[F,R,O,z]);var L=t.useRef([]),N=function(e){I.current&&I.current.contains(e.target)||(e.preventDefault(),L.current=[])};t.useEffect((function(){return x&&(document.addEventListener("dragover",jm,!1),document.addEventListener("drop",N,!1)),function(){x&&(document.removeEventListener("dragover",jm),document.removeEventListener("drop",N))}}),[I,x]),t.useEffect((function(){return!i&&y&&I.current&&I.current.focus(),function(){}}),[I,y,i]);var H=t.useCallback((function(e){j?j(e):console.error(e)}),[j]),W=t.useCallback((function(e){e.preventDefault(),e.persist(),re(e),L.current=[].concat(Mm(L.current),[e.target]),Sm(e)&&Promise.resolve(o(e)).then((function(t){if(!Cm(e)||S){var r=t.length,n=r>0&&function(e){var t=e.files,r=e.accept,n=e.minSize,i=e.maxSize,o=e.multiple,a=e.maxFiles,s=e.validator;return!(!o&&t.length>1||o&&a>=1&&t.length>a)&&t.every((function(e){var t=hm(xm(e,r),1)[0],o=hm(wm(e,n,i),1)[0],a=s?s(e):null;return t&&o&&!a}))}({files:t,accept:D,minSize:s,maxSize:a,multiple:l,maxFiles:c,validator:k});A({isDragAccept:n,isDragReject:r>0&&!n,isDragActive:!0,type:"setDraggedFiles"}),d&&d(e)}})).catch((function(e){return H(e)}))}),[o,d,H,S,D,s,a,l,c,k]),V=t.useCallback((function(e){e.preventDefault(),e.persist(),re(e);var t=Sm(e);if(t&&e.dataTransfer)try{e.dataTransfer.dropEffect="copy"}catch(e){}return t&&f&&f(e),!1}),[f,S]),Y=t.useCallback((function(e){e.preventDefault(),e.persist(),re(e);var t=L.current.filter((function(e){return I.current&&I.current.contains(e)})),r=t.indexOf(e.target);-1!==r&&t.splice(r,1),L.current=t,t.length>0||(A({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),Sm(e)&&u&&u(e))}),[I,u,S]),U=t.useCallback((function(e,t){var r=[],n=[];e.forEach((function(e){var t=_m(xm(e,D),2),i=t[0],o=t[1],l=_m(wm(e,s,a),2),c=l[0],d=l[1],u=k?k(e):null;if(i&&c&&!u)r.push(e);else{var f=[o,d];u&&(f=f.concat(u)),n.push({file:e,errors:f.filter((function(e){return e}))})}})),(!l&&r.length>1||l&&c>=1&&r.length>c)&&(r.forEach((function(e){n.push({file:e,errors:[ym]})})),r.splice(0)),A({acceptedFiles:r,fileRejections:n,type:"setFiles"}),h&&h(r,n,t),n.length>0&&g&&g(n,t),r.length>0&&p&&p(r,t)}),[A,l,D,s,a,c,h,p,g,k]),K=t.useCallback((function(e){e.preventDefault(),e.persist(),re(e),L.current=[],Sm(e)&&Promise.resolve(o(e)).then((function(t){Cm(e)&&!S||U(t,e)})).catch((function(e){return H(e)})),A({type:"reset"})}),[o,U,H,S]),q=t.useCallback((function(){if(z.current){A({type:"openDialog"}),E();var e={multiple:l,types:T};window.showOpenFilePicker(e).then((function(e){return o(e)})).then((function(e){U(e,null),A({type:"closeDialog"})})).catch((function(e){var t;(t=e)instanceof DOMException&&("AbortError"===t.name||t.code===t.ABORT_ERR)?(O(e),A({type:"closeDialog"})):!function(e){return e instanceof DOMException&&("SecurityError"===e.name||e.code===e.SECURITY_ERR)}(e)?H(e):(z.current=!1,F.current?(F.current.value=null,F.current.click()):H(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided.")))}))}else F.current&&(A({type:"openDialog"}),E(),F.current.value=null,F.current.click())}),[A,E,O,v,U,H,T,l]),X=t.useCallback((function(e){I.current&&I.current.isEqualNode(e.target)&&(" "!==e.key&&"Enter"!==e.key&&32!==e.keyCode&&13!==e.keyCode||(e.preventDefault(),q()))}),[I,q]),G=t.useCallback((function(){A({type:"focus"})}),[]),Z=t.useCallback((function(){A({type:"blur"})}),[]),Q=t.useCallback((function(){w||(!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.navigator.userAgent;return function(e){return-1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident/")}(e)||function(e){return-1!==e.indexOf("Edge/")}(e)}()?q():setTimeout(q,0))}),[w,q]),J=function(e){return i?null:e},ee=function(e){return $?null:J(e)},te=function(e){return C?null:J(e)},re=function(e){S&&e.stopPropagation()},ne=t.useMemo((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,r=void 0===t?"ref":t,n=e.role,o=e.onKeyDown,a=e.onFocus,s=e.onBlur,l=e.onClick,c=e.onDragEnter,d=e.onDragOver,u=e.onDragLeave,f=e.onDrop,h=Lm(e,Im);return zm(zm(Pm({onKeyDown:ee(km(o,X)),onFocus:ee(km(a,G)),onBlur:ee(km(s,Z)),onClick:J(km(l,Q)),onDragEnter:te(km(c,W)),onDragOver:te(km(d,V)),onDragLeave:te(km(u,Y)),onDrop:te(km(f,K)),role:"string"==typeof n&&""!==n?n:"presentation"},r,I),i||$?{}:{tabIndex:0}),h)}}),[I,X,G,Z,Q,W,V,Y,K,$,C,i]),ie=t.useCallback((function(e){e.stopPropagation()}),[]),oe=t.useMemo((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,r=void 0===t?"ref":t,n=e.onChange,i=e.onClick,o=Lm(e,Fm);return zm(zm({},Pm({accept:D,multiple:l,type:"file",style:{display:"none"},onChange:J(km(n,K)),onClick:J(km(i,ie)),tabIndex:-1},r,F)),o)}}),[F,n,l,K,i]);return zm(zm({},_),{},{isFocused:B&&!i,getRootProps:ne,getInputProps:oe,rootRef:I,inputRef:F,open:J(q)})}function Ym(e,t){switch(t.type){case"focus":return zm(zm({},e),{},{isFocused:!0});case"blur":return zm(zm({},e),{},{isFocused:!1});case"openDialog":return zm(zm({},Wm),{},{isFileDialogActive:!0});case"closeDialog":return zm(zm({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return zm(zm({},e),{},{isDragActive:t.isDragActive,isDragAccept:t.isDragAccept,isDragReject:t.isDragReject});case"setFiles":return zm(zm({},e),{},{acceptedFiles:t.acceptedFiles,fileRejections:t.fileRejections});case"reset":return zm({},Wm);default:return e}}function Um(){}const Km=K.default.div`
    position: relative;
    display: flex;
    flex-direction: column;

    ${e=>{if(e.$border)return i.css`
                ${Gs.Util["dashed-default"]({radius:Qs.sm,thickness:Gs["width-040"],colour:Ks.border})}
                padding: ${Zs["spacing-32"]};

                ${el.MaxWidth.sm} {
                    padding: ${Zs["spacing-32"]} ${Zs["spacing-20"]};
                }
            `}}
`,qm=K.default.input`
    display: none;
`,Xm=K.default.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background: ${Ks["bg-primary-subtler"]};
    ${Gs.Util["dashed-default"]({radius:Qs.sm,thickness:Gs["width-040"],colour:Ks["border-primary"]})}

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`,Gm=K.default(exports.Typography.BodyMD)`
    color: ${Ks["text-primary"]};
    text-align: center;
`,Zm=K.default(y.CloudArrowUpFillIcon)`
    color: ${Ks["icon-primary"]};
    height: 4rem;
    width: 4rem;
`,Qm=t.forwardRef((({children:r,accept:n,capture:i,multiple:o,id:a,className:s,name:l,border:c,disabled:d,onChange:u,"data-testid":f},h)=>{const p=t.useRef(null),{getRootProps:g,isDragActive:m}=Vm({onDrop:u,noClick:!0,disabled:d});t.useImperativeHandle(h,(()=>Object.assign(Object.assign({},p.current),{openFileDialog:()=>{p.current&&(p.current.value="",p.current.click())}})));return e.jsxs(Km,Object.assign({id:a,"data-testid":f||"dropzone",$border:c,className:s},g(),{children:[e.jsx(qm,{type:"file",name:l,ref:p,tabIndex:-1,"aria-hidden":!0,accept:n,capture:i,multiple:o,"data-testid":f?`${f}-input`:"dropzone-input",onChange:e=>{e.target.files&&u(Array.from(e.target.files))}}),r,m&&e.jsxs(Xm,{children:[e.jsx(Zm,{}),e.jsx(Gm,{weight:"semibold",children:"Drop files here"})]})]}))}));const Jm="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement;function eb(e){const t=Object.prototype.toString.call(e);return"[object Window]"===t||"[object global]"===t}function tb(e){return"nodeType"in e}function rb(e){var t,r;return e?eb(e)?e:tb(e)&&null!=(t=null==(r=e.ownerDocument)?void 0:r.defaultView)?t:window:window}function nb(e){const{Document:t}=rb(e);return e instanceof t}function ib(e){return!eb(e)&&e instanceof rb(e).HTMLElement}function ob(e){return e instanceof rb(e).SVGElement}function ab(e){return e?eb(e)?e.document:tb(e)?nb(e)?e:ib(e)||ob(e)?e.ownerDocument:document:document:document}const sb=Jm?t.useLayoutEffect:t.useEffect;function lb(e){const r=t.useRef(e);return sb((()=>{r.current=e})),t.useCallback((function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return null==r.current?void 0:r.current(...t)}),[])}function cb(e,r){void 0===r&&(r=[e]);const n=t.useRef(e);return sb((()=>{n.current!==e&&(n.current=e)}),r),n}function db(e,r){const n=t.useRef();return t.useMemo((()=>{const t=e(n.current);return n.current=t,t}),[...r])}function ub(e){const r=lb(e),n=t.useRef(null),i=t.useCallback((e=>{e!==n.current&&(null==r||r(e,n.current)),n.current=e}),[]);return[n,i]}function fb(e){const r=t.useRef();return t.useEffect((()=>{r.current=e}),[e]),r.current}let hb={};function pb(e,r){return t.useMemo((()=>{if(r)return r;const t=null==hb[e]?0:hb[e]+1;return hb[e]=t,e+"-"+t}),[e,r])}function gb(e){return function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return n.reduce(((t,r)=>{const n=Object.entries(r);for(const[r,i]of n){const n=t[r];null!=n&&(t[r]=n+e*i)}return t}),{...t})}}const mb=gb(1),bb=gb(-1);function vb(e){if(!e)return!1;const{KeyboardEvent:t}=rb(e.target);return t&&e instanceof t}function yb(e){if(function(e){if(!e)return!1;const{TouchEvent:t}=rb(e.target);return t&&e instanceof t}(e)){if(e.touches&&e.touches.length){const{clientX:t,clientY:r}=e.touches[0];return{x:t,y:r}}if(e.changedTouches&&e.changedTouches.length){const{clientX:t,clientY:r}=e.changedTouches[0];return{x:t,y:r}}}return function(e){return"clientX"in e&&"clientY"in e}(e)?{x:e.clientX,y:e.clientY}:null}const xb=Object.freeze({Translate:{toString(e){if(!e)return;const{x:t,y:r}=e;return"translate3d("+(t?Math.round(t):0)+"px, "+(r?Math.round(r):0)+"px, 0)"}},Scale:{toString(e){if(!e)return;const{scaleX:t,scaleY:r}=e;return"scaleX("+t+") scaleY("+r+")"}},Transform:{toString(e){if(e)return[xb.Translate.toString(e),xb.Scale.toString(e)].join(" ")}},Transition:{toString(e){let{property:t,duration:r,easing:n}=e;return t+" "+r+"ms "+n}}}),wb="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function $b(e){return e.matches(wb)?e:e.querySelector(wb)}const Cb={display:"none"};function Sb(e){let{id:t,value:r}=e;return Y.default.createElement("div",{id:t,style:Cb},r)}function jb(e){let{id:t,announcement:r,ariaLiveType:n="assertive"}=e;return Y.default.createElement("div",{id:t,style:{position:"fixed",width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"},role:"status","aria-live":n,"aria-atomic":!0},r)}const kb=t.createContext(null);const Db={draggable:"\n    To pick up a draggable item, press the space bar.\n    While dragging, use the arrow keys to move the item.\n    Press space again to drop the item in its new position, or press escape to cancel.\n  "},Tb={onDragStart(e){let{active:t}=e;return"Picked up draggable item "+t.id+"."},onDragOver(e){let{active:t,over:r}=e;return r?"Draggable item "+t.id+" was moved over droppable area "+r.id+".":"Draggable item "+t.id+" is no longer over a droppable area."},onDragEnd(e){let{active:t,over:r}=e;return r?"Draggable item "+t.id+" was dropped over droppable area "+r.id:"Draggable item "+t.id+" was dropped."},onDragCancel(e){let{active:t}=e;return"Dragging was cancelled. Draggable item "+t.id+" was dropped."}};function Eb(e){let{announcements:n=Tb,container:i,hiddenTextDescribedById:o,screenReaderInstructions:a=Db}=e;const{announce:s,announcement:l}=function(){const[e,r]=t.useState("");return{announce:t.useCallback((e=>{null!=e&&r(e)}),[]),announcement:e}}(),c=pb("DndLiveRegion"),[d,u]=t.useState(!1);if(t.useEffect((()=>{u(!0)}),[]),function(e){const r=t.useContext(kb);t.useEffect((()=>{if(!r)throw new Error("useDndMonitor must be used within a children of <DndContext>");return r(e)}),[e,r])}(t.useMemo((()=>({onDragStart(e){let{active:t}=e;s(n.onDragStart({active:t}))},onDragMove(e){let{active:t,over:r}=e;n.onDragMove&&s(n.onDragMove({active:t,over:r}))},onDragOver(e){let{active:t,over:r}=e;s(n.onDragOver({active:t,over:r}))},onDragEnd(e){let{active:t,over:r}=e;s(n.onDragEnd({active:t,over:r}))},onDragCancel(e){let{active:t,over:r}=e;s(n.onDragCancel({active:t,over:r}))}})),[s,n])),!d)return null;const f=Y.default.createElement(Y.default.Fragment,null,Y.default.createElement(Sb,{id:o,value:a.draggable}),Y.default.createElement(jb,{id:c,announcement:l}));return i?r.createPortal(f,i):f}var Ob;function Ib(){}function Fb(e,r){return t.useMemo((()=>({sensor:e,options:null!=r?r:{}})),[e,r])}!function(e){e.DragStart="dragStart",e.DragMove="dragMove",e.DragEnd="dragEnd",e.DragCancel="dragCancel",e.DragOver="dragOver",e.RegisterDroppable="registerDroppable",e.SetDroppableDisabled="setDroppableDisabled",e.UnregisterDroppable="unregisterDroppable"}(Ob||(Ob={}));const Mb=Object.freeze({x:0,y:0});function _b(e,t){let{data:{value:r}}=e,{data:{value:n}}=t;return r-n}function Ab(e,t){let{data:{value:r}}=e,{data:{value:n}}=t;return n-r}function Bb(e){let{left:t,top:r,height:n,width:i}=e;return[{x:t,y:r},{x:t+i,y:r},{x:t,y:r+n},{x:t+i,y:r+n}]}function Rb(e,t){if(!e||0===e.length)return null;const[r]=e;return t?r[t]:r}function zb(e,t){const r=Math.max(t.top,e.top),n=Math.max(t.left,e.left),i=Math.min(t.left+t.width,e.left+e.width),o=Math.min(t.top+t.height,e.top+e.height),a=i-n,s=o-r;if(n<i&&r<o){const r=t.width*t.height,n=e.width*e.height,i=a*s;return Number((i/(r+n-i)).toFixed(4))}return 0}const Pb=e=>{let{collisionRect:t,droppableRects:r,droppableContainers:n}=e;const i=[];for(const e of n){const{id:n}=e,o=r.get(n);if(o){const r=zb(o,t);r>0&&i.push({id:n,data:{droppableContainer:e,value:r}})}}return i.sort(Ab)};function Lb(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:Mb}function Nb(e){return function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return n.reduce(((t,r)=>({...t,top:t.top+e*r.y,bottom:t.bottom+e*r.y,left:t.left+e*r.x,right:t.right+e*r.x})),{...t})}}const Hb=Nb(1);const Wb={ignoreTransform:!1};function Vb(e,t){void 0===t&&(t=Wb);let r=e.getBoundingClientRect();if(t.ignoreTransform){const{transform:t,transformOrigin:n}=rb(e).getComputedStyle(e);t&&(r=function(e,t,r){const n=function(e){if(e.startsWith("matrix3d(")){const t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}if(e.startsWith("matrix(")){const t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}(t);if(!n)return e;const{scaleX:i,scaleY:o,x:a,y:s}=n,l=e.left-a-(1-i)*parseFloat(r),c=e.top-s-(1-o)*parseFloat(r.slice(r.indexOf(" ")+1)),d=i?e.width/i:e.width,u=o?e.height/o:e.height;return{width:d,height:u,top:c,right:l+d,bottom:c+u,left:l}}(r,t,n))}const{top:n,left:i,width:o,height:a,bottom:s,right:l}=r;return{top:n,left:i,width:o,height:a,bottom:s,right:l}}function Yb(e){return Vb(e,{ignoreTransform:!0})}function Ub(e,t){const r=[];return e?function n(i){if(null!=t&&r.length>=t)return r;if(!i)return r;if(nb(i)&&null!=i.scrollingElement&&!r.includes(i.scrollingElement))return r.push(i.scrollingElement),r;if(!ib(i)||ob(i))return r;if(r.includes(i))return r;const o=rb(e).getComputedStyle(i);return i!==e&&function(e,t){void 0===t&&(t=rb(e).getComputedStyle(e));const r=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some((e=>{const n=t[e];return"string"==typeof n&&r.test(n)}))}(i,o)&&r.push(i),function(e,t){return void 0===t&&(t=rb(e).getComputedStyle(e)),"fixed"===t.position}(i,o)?r:n(i.parentNode)}(e):r}function Kb(e){const[t]=Ub(e,1);return null!=t?t:null}function qb(e){return Jm&&e?eb(e)?e:tb(e)?nb(e)||e===ab(e).scrollingElement?window:ib(e)?e:null:null:null}function Xb(e){return eb(e)?e.scrollX:e.scrollLeft}function Gb(e){return eb(e)?e.scrollY:e.scrollTop}function Zb(e){return{x:Xb(e),y:Gb(e)}}var Qb;function Jb(e){return!(!Jm||!e)&&e===document.scrollingElement}function ev(e){const t={x:0,y:0},r=Jb(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},n={x:e.scrollWidth-r.width,y:e.scrollHeight-r.height};return{isTop:e.scrollTop<=t.y,isLeft:e.scrollLeft<=t.x,isBottom:e.scrollTop>=n.y,isRight:e.scrollLeft>=n.x,maxScroll:n,minScroll:t}}!function(e){e[e.Forward=1]="Forward",e[e.Backward=-1]="Backward"}(Qb||(Qb={}));const tv={x:.2,y:.2};function rv(e,t,r,n,i){let{top:o,left:a,right:s,bottom:l}=r;void 0===n&&(n=10),void 0===i&&(i=tv);const{isTop:c,isBottom:d,isLeft:u,isRight:f}=ev(e),h={x:0,y:0},p={x:0,y:0},g=t.height*i.y,m=t.width*i.x;return!c&&o<=t.top+g?(h.y=Qb.Backward,p.y=n*Math.abs((t.top+g-o)/g)):!d&&l>=t.bottom-g&&(h.y=Qb.Forward,p.y=n*Math.abs((t.bottom-g-l)/g)),!f&&s>=t.right-m?(h.x=Qb.Forward,p.x=n*Math.abs((t.right-m-s)/m)):!u&&a<=t.left+m&&(h.x=Qb.Backward,p.x=n*Math.abs((t.left+m-a)/m)),{direction:h,speed:p}}function nv(e){if(e===document.scrollingElement){const{innerWidth:e,innerHeight:t}=window;return{top:0,left:0,right:e,bottom:t,width:e,height:t}}const{top:t,left:r,right:n,bottom:i}=e.getBoundingClientRect();return{top:t,left:r,right:n,bottom:i,width:e.clientWidth,height:e.clientHeight}}function iv(e){return e.reduce(((e,t)=>mb(e,Zb(t))),Mb)}const ov=[["x",["left","right"],function(e){return e.reduce(((e,t)=>e+Xb(t)),0)}],["y",["top","bottom"],function(e){return e.reduce(((e,t)=>e+Gb(t)),0)}]];class av{constructor(e,t){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;const r=Ub(t),n=iv(r);this.rect={...e},this.width=e.width,this.height=e.height;for(const[e,t,i]of ov)for(const o of t)Object.defineProperty(this,o,{get:()=>{const t=i(r),a=n[e]-t;return this.rect[o]+a},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}}class sv{constructor(e){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach((e=>{var t;return null==(t=this.target)?void 0:t.removeEventListener(...e)}))},this.target=e}add(e,t,r){var n;null==(n=this.target)||n.addEventListener(e,t,r),this.listeners.push([e,t,r])}}function lv(e,t){const r=Math.abs(e.x),n=Math.abs(e.y);return"number"==typeof t?Math.sqrt(r**2+n**2)>t:"x"in t&&"y"in t?r>t.x&&n>t.y:"x"in t?r>t.x:"y"in t&&n>t.y}var cv,dv;function uv(e){e.preventDefault()}function fv(e){e.stopPropagation()}!function(e){e.Click="click",e.DragStart="dragstart",e.Keydown="keydown",e.ContextMenu="contextmenu",e.Resize="resize",e.SelectionChange="selectionchange",e.VisibilityChange="visibilitychange"}(cv||(cv={})),function(e){e.Space="Space",e.Down="ArrowDown",e.Right="ArrowRight",e.Left="ArrowLeft",e.Up="ArrowUp",e.Esc="Escape",e.Enter="Enter"}(dv||(dv={}));const hv={start:[dv.Space,dv.Enter],cancel:[dv.Esc],end:[dv.Space,dv.Enter]},pv=(e,t)=>{let{currentCoordinates:r}=t;switch(e.code){case dv.Right:return{...r,x:r.x+25};case dv.Left:return{...r,x:r.x-25};case dv.Down:return{...r,y:r.y+25};case dv.Up:return{...r,y:r.y-25}}};let gv=class{constructor(e){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=e;const{event:{target:t}}=e;this.props=e,this.listeners=new sv(ab(t)),this.windowListeners=new sv(rb(t)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(cv.Resize,this.handleCancel),this.windowListeners.add(cv.VisibilityChange,this.handleCancel),setTimeout((()=>this.listeners.add(cv.Keydown,this.handleKeyDown)))}handleStart(){const{activeNode:e,onStart:t}=this.props,r=e.node.current;r&&function(e,t){if(void 0===t&&(t=Vb),!e)return;const{top:r,left:n,bottom:i,right:o}=t(e);Kb(e)&&(i<=0||o<=0||r>=window.innerHeight||n>=window.innerWidth)&&e.scrollIntoView({block:"center",inline:"center"})}(r),t(Mb)}handleKeyDown(e){if(vb(e)){const{active:t,context:r,options:n}=this.props,{keyboardCodes:i=hv,coordinateGetter:o=pv,scrollBehavior:a="smooth"}=n,{code:s}=e;if(i.end.includes(s))return void this.handleEnd(e);if(i.cancel.includes(s))return void this.handleCancel(e);const{collisionRect:l}=r.current,c=l?{x:l.left,y:l.top}:Mb;this.referenceCoordinates||(this.referenceCoordinates=c);const d=o(e,{active:t,context:r.current,currentCoordinates:c});if(d){const t=bb(d,c),n={x:0,y:0},{scrollableAncestors:i}=r.current;for(const r of i){const i=e.code,{isTop:o,isRight:s,isLeft:l,isBottom:c,maxScroll:u,minScroll:f}=ev(r),h=nv(r),p={x:Math.min(i===dv.Right?h.right-h.width/2:h.right,Math.max(i===dv.Right?h.left:h.left+h.width/2,d.x)),y:Math.min(i===dv.Down?h.bottom-h.height/2:h.bottom,Math.max(i===dv.Down?h.top:h.top+h.height/2,d.y))},g=i===dv.Right&&!s||i===dv.Left&&!l,m=i===dv.Down&&!c||i===dv.Up&&!o;if(g&&p.x!==d.x){const e=r.scrollLeft+t.x,o=i===dv.Right&&e<=u.x||i===dv.Left&&e>=f.x;if(o&&!t.y)return void r.scrollTo({left:e,behavior:a});n.x=o?r.scrollLeft-e:i===dv.Right?r.scrollLeft-u.x:r.scrollLeft-f.x,n.x&&r.scrollBy({left:-n.x,behavior:a});break}if(m&&p.y!==d.y){const e=r.scrollTop+t.y,o=i===dv.Down&&e<=u.y||i===dv.Up&&e>=f.y;if(o&&!t.x)return void r.scrollTo({top:e,behavior:a});n.y=o?r.scrollTop-e:i===dv.Down?r.scrollTop-u.y:r.scrollTop-f.y,n.y&&r.scrollBy({top:-n.y,behavior:a});break}}this.handleMove(e,mb(bb(d,this.referenceCoordinates),n))}}}handleMove(e,t){const{onMove:r}=this.props;e.preventDefault(),r(t)}handleEnd(e){const{onEnd:t}=this.props;e.preventDefault(),this.detach(),t()}handleCancel(e){const{onCancel:t}=this.props;e.preventDefault(),this.detach(),t()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}};function mv(e){return Boolean(e&&"distance"in e)}function bv(e){return Boolean(e&&"delay"in e)}gv.activators=[{eventName:"onKeyDown",handler:(e,t,r)=>{let{keyboardCodes:n=hv,onActivation:i}=t,{active:o}=r;const{code:a}=e.nativeEvent;if(n.start.includes(a)){const t=o.activatorNode.current;return(!t||e.target===t)&&(e.preventDefault(),null==i||i({event:e.nativeEvent}),!0)}return!1}}];class vv{constructor(e,t,r){var n;void 0===r&&(r=function(e){const{EventTarget:t}=rb(e);return e instanceof t?e:ab(e)}(e.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=e,this.events=t;const{event:i}=e,{target:o}=i;this.props=e,this.events=t,this.document=ab(o),this.documentListeners=new sv(this.document),this.listeners=new sv(r),this.windowListeners=new sv(rb(o)),this.initialCoordinates=null!=(n=yb(i))?n:Mb,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){const{events:e,props:{options:{activationConstraint:t,bypassActivationConstraint:r}}}=this;if(this.listeners.add(e.move.name,this.handleMove,{passive:!1}),this.listeners.add(e.end.name,this.handleEnd),this.windowListeners.add(cv.Resize,this.handleCancel),this.windowListeners.add(cv.DragStart,uv),this.windowListeners.add(cv.VisibilityChange,this.handleCancel),this.windowListeners.add(cv.ContextMenu,uv),this.documentListeners.add(cv.Keydown,this.handleKeydown),t){if(null!=r&&r({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(bv(t))return void(this.timeoutId=setTimeout(this.handleStart,t.delay));if(mv(t))return}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),null!==this.timeoutId&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handleStart(){const{initialCoordinates:e}=this,{onStart:t}=this.props;e&&(this.activated=!0,this.documentListeners.add(cv.Click,fv,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(cv.SelectionChange,this.removeTextSelection),t(e))}handleMove(e){var t;const{activated:r,initialCoordinates:n,props:i}=this,{onMove:o,options:{activationConstraint:a}}=i;if(!n)return;const s=null!=(t=yb(e))?t:Mb,l=bb(n,s);if(!r&&a){if(mv(a)){if(null!=a.tolerance&&lv(l,a.tolerance))return this.handleCancel();if(lv(l,a.distance))return this.handleStart()}return bv(a)&&lv(l,a.tolerance)?this.handleCancel():void 0}e.cancelable&&e.preventDefault(),o(s)}handleEnd(){const{onEnd:e}=this.props;this.detach(),e()}handleCancel(){const{onCancel:e}=this.props;this.detach(),e()}handleKeydown(e){e.code===dv.Esc&&this.handleCancel()}removeTextSelection(){var e;null==(e=this.document.getSelection())||e.removeAllRanges()}}const yv={move:{name:"pointermove"},end:{name:"pointerup"}};class xv extends vv{constructor(e){const{event:t}=e,r=ab(t.target);super(e,yv,r)}}xv.activators=[{eventName:"onPointerDown",handler:(e,t)=>{let{nativeEvent:r}=e,{onActivation:n}=t;return!(!r.isPrimary||0!==r.button)&&(null==n||n({event:r}),!0)}}];const wv={move:{name:"mousemove"},end:{name:"mouseup"}};var $v;!function(e){e[e.RightClick=2]="RightClick"}($v||($v={}));let Cv=class extends vv{constructor(e){super(e,wv,ab(e.event.target))}};Cv.activators=[{eventName:"onMouseDown",handler:(e,t)=>{let{nativeEvent:r}=e,{onActivation:n}=t;return r.button!==$v.RightClick&&(null==n||n({event:r}),!0)}}];const Sv={move:{name:"touchmove"},end:{name:"touchend"}};class jv extends vv{constructor(e){super(e,Sv)}static setup(){return window.addEventListener(Sv.move.name,e,{capture:!1,passive:!1}),function(){window.removeEventListener(Sv.move.name,e)};function e(){}}}var kv,Dv;function Tv(e){let{acceleration:r,activator:n=kv.Pointer,canScroll:i,draggingRect:o,enabled:a,interval:s=5,order:l=Dv.TreeOrder,pointerCoordinates:c,scrollableAncestors:d,scrollableAncestorRects:u,delta:f,threshold:h}=e;const p=function(e){let{delta:t,disabled:r}=e;const n=fb(t);return db((e=>{if(r||!n||!e)return Ev;const i={x:Math.sign(t.x-n.x),y:Math.sign(t.y-n.y)};return{x:{[Qb.Backward]:e.x[Qb.Backward]||-1===i.x,[Qb.Forward]:e.x[Qb.Forward]||1===i.x},y:{[Qb.Backward]:e.y[Qb.Backward]||-1===i.y,[Qb.Forward]:e.y[Qb.Forward]||1===i.y}}}),[r,t,n])}({delta:f,disabled:!a}),[g,m]=function(){const e=t.useRef(null);return[t.useCallback(((t,r)=>{e.current=setInterval(t,r)}),[]),t.useCallback((()=>{null!==e.current&&(clearInterval(e.current),e.current=null)}),[])]}(),b=t.useRef({x:0,y:0}),v=t.useRef({x:0,y:0}),y=t.useMemo((()=>{switch(n){case kv.Pointer:return c?{top:c.y,bottom:c.y,left:c.x,right:c.x}:null;case kv.DraggableRect:return o}}),[n,o,c]),x=t.useRef(null),w=t.useCallback((()=>{const e=x.current;if(!e)return;const t=b.current.x*v.current.x,r=b.current.y*v.current.y;e.scrollBy(t,r)}),[]),$=t.useMemo((()=>l===Dv.TreeOrder?[...d].reverse():d),[l,d]);t.useEffect((()=>{if(a&&d.length&&y){for(const e of $){if(!1===(null==i?void 0:i(e)))continue;const t=d.indexOf(e),n=u[t];if(!n)continue;const{direction:o,speed:a}=rv(e,n,y,r,h);for(const e of["x","y"])p[e][o[e]]||(a[e]=0,o[e]=0);if(a.x>0||a.y>0)return m(),x.current=e,g(w,s),b.current=a,void(v.current=o)}b.current={x:0,y:0},v.current={x:0,y:0},m()}else m()}),[r,w,i,m,a,s,JSON.stringify(y),JSON.stringify(p),g,d,$,u,JSON.stringify(h)])}jv.activators=[{eventName:"onTouchStart",handler:(e,t)=>{let{nativeEvent:r}=e,{onActivation:n}=t;const{touches:i}=r;return!(i.length>1)&&(null==n||n({event:r}),!0)}}],function(e){e[e.Pointer=0]="Pointer",e[e.DraggableRect=1]="DraggableRect"}(kv||(kv={})),function(e){e[e.TreeOrder=0]="TreeOrder",e[e.ReversedTreeOrder=1]="ReversedTreeOrder"}(Dv||(Dv={}));const Ev={x:{[Qb.Backward]:!1,[Qb.Forward]:!1},y:{[Qb.Backward]:!1,[Qb.Forward]:!1}};var Ov,Iv;!function(e){e[e.Always=0]="Always",e[e.BeforeDragging=1]="BeforeDragging",e[e.WhileDragging=2]="WhileDragging"}(Ov||(Ov={})),function(e){e.Optimized="optimized"}(Iv||(Iv={}));const Fv=new Map;function Mv(e,t){return db((r=>e?r||("function"==typeof t?t(e):e):null),[t,e])}function _v(e){let{callback:r,disabled:n}=e;const i=lb(r),o=t.useMemo((()=>{if(n||"undefined"==typeof window||void 0===window.ResizeObserver)return;const{ResizeObserver:e}=window;return new e(i)}),[n]);return t.useEffect((()=>()=>null==o?void 0:o.disconnect()),[o]),o}function Av(e){return new av(Vb(e),e)}function Bv(e,r,n){void 0===r&&(r=Av);const[i,o]=t.useReducer((function(t){if(!e)return null;var i;if(!1===e.isConnected)return null!=(i=null!=t?t:n)?i:null;const o=r(e);if(JSON.stringify(t)===JSON.stringify(o))return t;return o}),null),a=function(e){let{callback:r,disabled:n}=e;const i=lb(r),o=t.useMemo((()=>{if(n||"undefined"==typeof window||void 0===window.MutationObserver)return;const{MutationObserver:e}=window;return new e(i)}),[i,n]);return t.useEffect((()=>()=>null==o?void 0:o.disconnect()),[o]),o}({callback(t){if(e)for(const r of t){const{type:t,target:n}=r;if("childList"===t&&n instanceof HTMLElement&&n.contains(e)){o();break}}}}),s=_v({callback:o});return sb((()=>{o(),e?(null==s||s.observe(e),null==a||a.observe(document.body,{childList:!0,subtree:!0})):(null==s||s.disconnect(),null==a||a.disconnect())}),[e]),i}const Rv=[];function zv(e,r){void 0===r&&(r=[]);const n=t.useRef(null);return t.useEffect((()=>{n.current=null}),r),t.useEffect((()=>{const t=e!==Mb;t&&!n.current&&(n.current=e),!t&&n.current&&(n.current=null)}),[e]),n.current?bb(e,n.current):Mb}function Pv(e){return t.useMemo((()=>e?function(e){const t=e.innerWidth,r=e.innerHeight;return{top:0,left:0,right:t,bottom:r,width:t,height:r}}(e):null),[e])}const Lv=[];function Nv(e){let{measure:r}=e;const[n,i]=t.useState(null),o=t.useCallback((e=>{for(const{target:t}of e)if(ib(t)){i((e=>{const n=r(t);return e?{...e,width:n.width,height:n.height}:n}));break}}),[r]),a=_v({callback:o}),s=t.useCallback((e=>{const t=function(e){if(!e)return null;if(e.children.length>1)return e;const t=e.children[0];return ib(t)?t:e}(e);null==a||a.disconnect(),t&&(null==a||a.observe(t)),i(t?r(t):null)}),[r,a]),[l,c]=ub(s);return t.useMemo((()=>({nodeRef:l,rect:n,setRef:c})),[n,l,c])}const Hv=[{sensor:xv,options:{}},{sensor:gv,options:{}}],Wv={current:{}},Vv={draggable:{measure:Yb},droppable:{measure:Yb,strategy:Ov.WhileDragging,frequency:Iv.Optimized},dragOverlay:{measure:Vb}};class Yv extends Map{get(e){var t;return null!=e&&null!=(t=super.get(e))?t:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter((e=>{let{disabled:t}=e;return!t}))}getNodeFor(e){var t,r;return null!=(t=null==(r=this.get(e))?void 0:r.node.current)?t:void 0}}const Uv={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new Yv,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:Ib},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:Vv,measureDroppableContainers:Ib,windowRect:null,measuringScheduled:!1},Kv={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:Ib,draggableNodes:new Map,over:null,measureDroppableContainers:Ib},qv=t.createContext(Kv),Xv=t.createContext(Uv);function Gv(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new Yv}}}function Zv(e,t){switch(t.type){case Ob.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case Ob.DragMove:return e.draggable.active?{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}}:e;case Ob.DragEnd:case Ob.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case Ob.RegisterDroppable:{const{element:r}=t,{id:n}=r,i=new Yv(e.droppable.containers);return i.set(n,r),{...e,droppable:{...e.droppable,containers:i}}}case Ob.SetDroppableDisabled:{const{id:r,key:n,disabled:i}=t,o=e.droppable.containers.get(r);if(!o||n!==o.key)return e;const a=new Yv(e.droppable.containers);return a.set(r,{...o,disabled:i}),{...e,droppable:{...e.droppable,containers:a}}}case Ob.UnregisterDroppable:{const{id:r,key:n}=t,i=e.droppable.containers.get(r);if(!i||n!==i.key)return e;const o=new Yv(e.droppable.containers);return o.delete(r),{...e,droppable:{...e.droppable,containers:o}}}default:return e}}function Qv(e){let{disabled:r}=e;const{active:n,activatorEvent:i,draggableNodes:o}=t.useContext(qv),a=fb(i),s=fb(null==n?void 0:n.id);return t.useEffect((()=>{if(!r&&!i&&a&&null!=s){if(!vb(a))return;if(document.activeElement===a.target)return;const e=o.get(s);if(!e)return;const{activatorNode:t,node:r}=e;if(!t.current&&!r.current)return;requestAnimationFrame((()=>{for(const e of[t.current,r.current]){if(!e)continue;const t=$b(e);if(t){t.focus();break}}}))}}),[i,r,o,s,a]),null}const Jv=t.createContext({...Mb,scaleX:1,scaleY:1});var ey;!function(e){e[e.Uninitialized=0]="Uninitialized",e[e.Initializing=1]="Initializing",e[e.Initialized=2]="Initialized"}(ey||(ey={}));const ty=t.memo((function(e){var n,i,o,a;let{id:s,accessibility:l,autoScroll:c=!0,children:d,sensors:u=Hv,collisionDetection:f=Pb,measuring:h,modifiers:p,...g}=e;const m=t.useReducer(Zv,void 0,Gv),[b,v]=m,[y,x]=function(){const[e]=t.useState((()=>new Set)),r=t.useCallback((t=>(e.add(t),()=>e.delete(t))),[e]);return[t.useCallback((t=>{let{type:r,event:n}=t;e.forEach((e=>{var t;return null==(t=e[r])?void 0:t.call(e,n)}))}),[e]),r]}(),[w,$]=t.useState(ey.Uninitialized),C=w===ey.Initialized,{draggable:{active:S,nodes:j,translate:k},droppable:{containers:D}}=b,T=S?j.get(S):null,E=t.useRef({initial:null,translated:null}),O=t.useMemo((()=>{var e;return null!=S?{id:S,data:null!=(e=null==T?void 0:T.data)?e:Wv,rect:E}:null}),[S,T]),I=t.useRef(null),[F,M]=t.useState(null),[_,A]=t.useState(null),B=cb(g,Object.values(g)),R=pb("DndDescribedBy",s),z=t.useMemo((()=>D.getEnabled()),[D]),P=function(e){return t.useMemo((()=>({draggable:{...Vv.draggable,...null==e?void 0:e.draggable},droppable:{...Vv.droppable,...null==e?void 0:e.droppable},dragOverlay:{...Vv.dragOverlay,...null==e?void 0:e.dragOverlay}})),[null==e?void 0:e.draggable,null==e?void 0:e.droppable,null==e?void 0:e.dragOverlay])}(h),{droppableRects:L,measureDroppableContainers:N,measuringScheduled:H}=function(e,r){let{dragging:n,dependencies:i,config:o}=r;const[a,s]=t.useState(null),{frequency:l,measure:c,strategy:d}=o,u=t.useRef(e),f=function(){switch(d){case Ov.Always:return!1;case Ov.BeforeDragging:return n;default:return!n}}(),h=cb(f),p=t.useCallback((function(e){void 0===e&&(e=[]),h.current||s((t=>null===t?e:t.concat(e.filter((e=>!t.includes(e))))))}),[h]),g=t.useRef(null),m=db((t=>{if(f&&!n)return Fv;if(!t||t===Fv||u.current!==e||null!=a){const t=new Map;for(let r of e){if(!r)continue;if(a&&a.length>0&&!a.includes(r.id)&&r.rect.current){t.set(r.id,r.rect.current);continue}const e=r.node.current,n=e?new av(c(e),e):null;r.rect.current=n,n&&t.set(r.id,n)}return t}return t}),[e,a,n,f,c]);return t.useEffect((()=>{u.current=e}),[e]),t.useEffect((()=>{f||p()}),[n,f]),t.useEffect((()=>{a&&a.length>0&&s(null)}),[JSON.stringify(a)]),t.useEffect((()=>{f||"number"!=typeof l||null!==g.current||(g.current=setTimeout((()=>{p(),g.current=null}),l))}),[l,f,p,...i]),{droppableRects:m,measureDroppableContainers:p,measuringScheduled:null!=a}}(z,{dragging:C,dependencies:[k.x,k.y],config:P.droppable}),W=function(e,t){const r=null!==t?e.get(t):void 0,n=r?r.node.current:null;return db((e=>{var r;return null===t?null:null!=(r=null!=n?n:e)?r:null}),[n,t])}(j,S),V=t.useMemo((()=>_?yb(_):null),[_]),U=function(){const e=!1===(null==F?void 0:F.autoScrollEnabled),t="object"==typeof c?!1===c.enabled:!1===c,r=C&&!e&&!t;if("object"==typeof c)return{...c,enabled:r};return{enabled:r}}(),K=function(e,t){return Mv(e,t)}(W,P.draggable.measure);!function(e){let{activeNode:r,measure:n,initialRect:i,config:o=!0}=e;const a=t.useRef(!1),{x:s,y:l}="boolean"==typeof o?{x:o,y:o}:o;sb((()=>{if(!s&&!l||!r)return void(a.current=!1);if(a.current||!i)return;const e=null==r?void 0:r.node.current;if(!e||!1===e.isConnected)return;const t=Lb(n(e),i);if(s||(t.x=0),l||(t.y=0),a.current=!0,Math.abs(t.x)>0||Math.abs(t.y)>0){const r=Kb(e);r&&r.scrollBy({top:t.y,left:t.x})}}),[r,s,l,i,n])}({activeNode:S?j.get(S):null,config:U.layoutShiftCompensation,initialRect:K,measure:P.draggable.measure});const q=Bv(W,P.draggable.measure,K),X=Bv(W?W.parentElement:null),G=t.useRef({activatorEvent:null,active:null,activeNode:W,collisionRect:null,collisions:null,droppableRects:L,draggableNodes:j,draggingNode:null,draggingNodeRect:null,droppableContainers:D,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),Z=D.getNodeFor(null==(n=G.current.over)?void 0:n.id),Q=Nv({measure:P.dragOverlay.measure}),J=null!=(i=Q.nodeRef.current)?i:W,ee=C?null!=(o=Q.rect)?o:q:null,te=Boolean(Q.nodeRef.current&&Q.rect),re=Lb(ne=te?null:q,Mv(ne));var ne;const ie=Pv(J?rb(J):null),oe=function(e){const r=t.useRef(e),n=db((t=>e?t&&t!==Rv&&e&&r.current&&e.parentNode===r.current.parentNode?t:Ub(e):Rv),[e]);return t.useEffect((()=>{r.current=e}),[e]),n}(C?null!=Z?Z:W:null),ae=function(e,r){void 0===r&&(r=Vb);const[n]=e,i=Pv(n?rb(n):null),[o,a]=t.useReducer((function(){return e.length?e.map((e=>Jb(e)?i:new av(r(e),e))):Lv}),Lv),s=_v({callback:a});return e.length>0&&o===Lv&&a(),sb((()=>{e.length?e.forEach((e=>null==s?void 0:s.observe(e))):(null==s||s.disconnect(),a())}),[e]),o}(oe),se=function(e,t){let{transform:r,...n}=t;return null!=e&&e.length?e.reduce(((e,t)=>t({transform:e,...n})),r):r}(p,{transform:{x:k.x-re.x,y:k.y-re.y,scaleX:1,scaleY:1},activatorEvent:_,active:O,activeNodeRect:q,containerNodeRect:X,draggingNodeRect:ee,over:G.current.over,overlayNodeRect:Q.rect,scrollableAncestors:oe,scrollableAncestorRects:ae,windowRect:ie}),le=V?mb(V,k):null,ce=function(e){const[r,n]=t.useState(null),i=t.useRef(e),o=t.useCallback((e=>{const t=qb(e.target);t&&n((e=>e?(e.set(t,Zb(t)),new Map(e)):null))}),[]);return t.useEffect((()=>{const t=i.current;if(e!==t){r(t);const a=e.map((e=>{const t=qb(e);return t?(t.addEventListener("scroll",o,{passive:!0}),[t,Zb(t)]):null})).filter((e=>null!=e));n(a.length?new Map(a):null),i.current=e}return()=>{r(e),r(t)};function r(e){e.forEach((e=>{const t=qb(e);null==t||t.removeEventListener("scroll",o)}))}}),[o,e]),t.useMemo((()=>e.length?r?Array.from(r.values()).reduce(((e,t)=>mb(e,t)),Mb):iv(e):Mb),[e,r])}(oe),de=zv(ce),ue=zv(ce,[q]),fe=mb(se,de),he=ee?Hb(ee,se):null,pe=O&&he?f({active:O,collisionRect:he,droppableRects:L,droppableContainers:z,pointerCoordinates:le}):null,ge=Rb(pe,"id"),[me,be]=t.useState(null),ve=function(e,t,r){return{...e,scaleX:t&&r?t.width/r.width:1,scaleY:t&&r?t.height/r.height:1}}(te?se:mb(se,ue),null!=(a=null==me?void 0:me.rect)?a:null,q),ye=t.useCallback(((e,t)=>{let{sensor:n,options:i}=t;if(null==I.current)return;const o=j.get(I.current);if(!o)return;const a=e.nativeEvent,s=new n({active:I.current,activeNode:o,event:a,options:i,context:G,onStart(e){const t=I.current;if(null==t)return;const n=j.get(t);if(!n)return;const{onDragStart:i}=B.current,o={active:{id:t,data:n.data,rect:E}};r.unstable_batchedUpdates((()=>{null==i||i(o),$(ey.Initializing),v({type:Ob.DragStart,initialCoordinates:e,active:t}),y({type:"onDragStart",event:o})}))},onMove(e){v({type:Ob.DragMove,coordinates:e})},onEnd:l(Ob.DragEnd),onCancel:l(Ob.DragCancel)});function l(e){return async function(){const{active:t,collisions:n,over:i,scrollAdjustedTranslate:o}=G.current;let s=null;if(t&&o){const{cancelDrop:r}=B.current;if(s={activatorEvent:a,active:t,collisions:n,delta:o,over:i},e===Ob.DragEnd&&"function"==typeof r){await Promise.resolve(r(s))&&(e=Ob.DragCancel)}}I.current=null,r.unstable_batchedUpdates((()=>{v({type:e}),$(ey.Uninitialized),be(null),M(null),A(null);const t=e===Ob.DragEnd?"onDragEnd":"onDragCancel";if(s){const e=B.current[t];null==e||e(s),y({type:t,event:s})}}))}}r.unstable_batchedUpdates((()=>{M(s),A(e.nativeEvent)}))}),[j]),xe=t.useCallback(((e,t)=>(r,n)=>{const i=r.nativeEvent,o=j.get(n);if(null!==I.current||!o||i.dndKit||i.defaultPrevented)return;const a={active:o};!0===e(r,t.options,a)&&(i.dndKit={capturedBy:t.sensor},I.current=n,ye(r,t))}),[j,ye]),we=function(e,r){return t.useMemo((()=>e.reduce(((e,t)=>{const{sensor:n}=t;return[...e,...n.activators.map((e=>({eventName:e.eventName,handler:r(e.handler,t)})))]}),[])),[e,r])}(u,xe);!function(e){t.useEffect((()=>{if(!Jm)return;const t=e.map((e=>{let{sensor:t}=e;return null==t.setup?void 0:t.setup()}));return()=>{for(const e of t)null==e||e()}}),e.map((e=>{let{sensor:t}=e;return t})))}(u),sb((()=>{q&&w===ey.Initializing&&$(ey.Initialized)}),[q,w]),t.useEffect((()=>{const{onDragMove:e}=B.current,{active:t,activatorEvent:n,collisions:i,over:o}=G.current;if(!t||!n)return;const a={active:t,activatorEvent:n,collisions:i,delta:{x:fe.x,y:fe.y},over:o};r.unstable_batchedUpdates((()=>{null==e||e(a),y({type:"onDragMove",event:a})}))}),[fe.x,fe.y]),t.useEffect((()=>{const{active:e,activatorEvent:t,collisions:n,droppableContainers:i,scrollAdjustedTranslate:o}=G.current;if(!e||null==I.current||!t||!o)return;const{onDragOver:a}=B.current,s=i.get(ge),l=s&&s.rect.current?{id:s.id,rect:s.rect.current,data:s.data,disabled:s.disabled}:null,c={active:e,activatorEvent:t,collisions:n,delta:{x:o.x,y:o.y},over:l};r.unstable_batchedUpdates((()=>{be(l),null==a||a(c),y({type:"onDragOver",event:c})}))}),[ge]),sb((()=>{G.current={activatorEvent:_,active:O,activeNode:W,collisionRect:he,collisions:pe,droppableRects:L,draggableNodes:j,draggingNode:J,draggingNodeRect:ee,droppableContainers:D,over:me,scrollableAncestors:oe,scrollAdjustedTranslate:fe},E.current={initial:ee,translated:he}}),[O,W,pe,he,j,J,ee,L,D,me,oe,fe]),Tv({...U,delta:k,draggingRect:he,pointerCoordinates:le,scrollableAncestors:oe,scrollableAncestorRects:ae});const $e=t.useMemo((()=>({active:O,activeNode:W,activeNodeRect:q,activatorEvent:_,collisions:pe,containerNodeRect:X,dragOverlay:Q,draggableNodes:j,droppableContainers:D,droppableRects:L,over:me,measureDroppableContainers:N,scrollableAncestors:oe,scrollableAncestorRects:ae,measuringConfiguration:P,measuringScheduled:H,windowRect:ie})),[O,W,q,_,pe,X,Q,j,D,L,me,N,oe,ae,P,H,ie]),Ce=t.useMemo((()=>({activatorEvent:_,activators:we,active:O,activeNodeRect:q,ariaDescribedById:{draggable:R},dispatch:v,draggableNodes:j,over:me,measureDroppableContainers:N})),[_,we,O,q,v,R,j,me,N]);return Y.default.createElement(kb.Provider,{value:x},Y.default.createElement(qv.Provider,{value:Ce},Y.default.createElement(Xv.Provider,{value:$e},Y.default.createElement(Jv.Provider,{value:ve},d)),Y.default.createElement(Qv,{disabled:!1===(null==l?void 0:l.restoreFocus)})),Y.default.createElement(Eb,{...l,hiddenTextDescribedById:R}))})),ry=t.createContext(null),ny="button",iy="Droppable";function oy(e){let{id:r,data:n,disabled:i=!1,attributes:o}=e;const a=pb(iy),{activators:s,activatorEvent:l,active:c,activeNodeRect:d,ariaDescribedById:u,draggableNodes:f,over:h}=t.useContext(qv),{role:p=ny,roleDescription:g="draggable",tabIndex:m=0}=null!=o?o:{},b=(null==c?void 0:c.id)===r,v=t.useContext(b?Jv:ry),[y,x]=ub(),[w,$]=ub(),C=function(e,r){return t.useMemo((()=>e.reduce(((e,t)=>{let{eventName:n,handler:i}=t;return e[n]=e=>{i(e,r)},e}),{})),[e,r])}(s,r),S=cb(n);sb((()=>(f.set(r,{id:r,key:a,node:y,activatorNode:w,data:S}),()=>{const e=f.get(r);e&&e.key===a&&f.delete(r)})),[f,r]);return{active:c,activatorEvent:l,activeNodeRect:d,attributes:t.useMemo((()=>({role:p,tabIndex:m,"aria-disabled":i,"aria-pressed":!(!b||p!==ny)||void 0,"aria-roledescription":g,"aria-describedby":u.draggable})),[i,p,m,b,g,u.draggable]),isDragging:b,listeners:i?void 0:C,node:y,over:h,setNodeRef:x,setActivatorNodeRef:$,transform:v}}const ay="Droppable",sy={timeout:25};function ly(e,t,r){const n=e.slice();return n.splice(r<0?n.length+r:r,0,n.splice(t,1)[0]),n}function cy(e,t){return e.reduce(((e,r,n)=>{const i=t.get(r);return i&&(e[n]=i),e}),Array(e.length))}function dy(e){return null!==e&&e>=0}const uy=e=>{let{rects:t,activeIndex:r,overIndex:n,index:i}=e;const o=ly(t,n,r),a=t[i],s=o[i];return s&&a?{x:s.left-a.left,y:s.top-a.top,scaleX:s.width/a.width,scaleY:s.height/a.height}:null},fy={scaleX:1,scaleY:1},hy=e=>{var t;let{activeIndex:r,activeNodeRect:n,index:i,rects:o,overIndex:a}=e;const s=null!=(t=o[r])?t:n;if(!s)return null;if(i===r){const e=o[a];return e?{x:0,y:r<a?e.top+e.height-(s.top+s.height):e.top-s.top,...fy}:null}const l=function(e,t,r){const n=e[t],i=e[t-1],o=e[t+1];if(!n)return 0;if(r<t)return i?n.top-(i.top+i.height):o?o.top-(n.top+n.height):0;return o?o.top-(n.top+n.height):i?n.top-(i.top+i.height):0}(o,i,r);return i>r&&i<=a?{x:0,y:-s.height-l,...fy}:i<r&&i>=a?{x:0,y:s.height+l,...fy}:{x:0,y:0,...fy}};const py="Sortable",gy=Y.default.createContext({activeIndex:-1,containerId:py,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:uy,disabled:{draggable:!1,droppable:!1}});function my(e){let{children:r,id:n,items:i,strategy:o=uy,disabled:a=!1}=e;const{active:s,dragOverlay:l,droppableRects:c,over:d,measureDroppableContainers:u}=t.useContext(Xv),f=pb(py,n),h=Boolean(null!==l.rect),p=t.useMemo((()=>i.map((e=>"object"==typeof e&&"id"in e?e.id:e))),[i]),g=null!=s,m=s?p.indexOf(s.id):-1,b=d?p.indexOf(d.id):-1,v=t.useRef(p),y=!function(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}(p,v.current),x=-1!==b&&-1===m||y,w=function(e){return"boolean"==typeof e?{draggable:e,droppable:e}:e}(a);sb((()=>{y&&g&&u(p)}),[y,p,g,u]),t.useEffect((()=>{v.current=p}),[p]);const $=t.useMemo((()=>({activeIndex:m,containerId:f,disabled:w,disableTransforms:x,items:p,overIndex:b,useDragOverlay:h,sortedRects:cy(p,c),strategy:o})),[m,f,w.draggable,w.droppable,x,p,b,c,h,o]);return Y.default.createElement(gy.Provider,{value:$},r)}const by=e=>{let{id:t,items:r,activeIndex:n,overIndex:i}=e;return ly(r,n,i).indexOf(t)},vy=e=>{let{containerId:t,isSorting:r,wasDragging:n,index:i,items:o,newIndex:a,previousItems:s,previousContainerId:l,transition:c}=e;return!(!c||!n)&&((s===o||i!==a)&&(!!r||a!==i&&t===l))},yy={duration:200,easing:"ease"},xy="transform",wy=xb.Transition.toString({property:xy,duration:0,easing:"linear"}),$y={roleDescription:"sortable"};function Cy(e){let{animateLayoutChanges:r=vy,attributes:n,disabled:i,data:o,getNewIndex:a=by,id:s,strategy:l,resizeObserverConfig:c,transition:d=yy}=e;const{items:u,containerId:f,activeIndex:h,disabled:p,disableTransforms:g,sortedRects:m,overIndex:b,useDragOverlay:v,strategy:y}=t.useContext(gy),x=function(e,t){var r,n;if("boolean"==typeof e)return{draggable:e,droppable:!1};return{draggable:null!=(r=null==e?void 0:e.draggable)?r:t.draggable,droppable:null!=(n=null==e?void 0:e.droppable)?n:t.droppable}}(i,p),w=u.indexOf(s),$=t.useMemo((()=>({sortable:{containerId:f,index:w,items:u},...o})),[f,o,w,u]),C=t.useMemo((()=>u.slice(u.indexOf(s))),[u,s]),{rect:S,node:j,isOver:k,setNodeRef:D}=function(e){let{data:r,disabled:n=!1,id:i,resizeObserverConfig:o}=e;const a=pb(ay),{active:s,dispatch:l,over:c,measureDroppableContainers:d}=t.useContext(qv),u=t.useRef({disabled:n}),f=t.useRef(!1),h=t.useRef(null),p=t.useRef(null),{disabled:g,updateMeasurementsFor:m,timeout:b}={...sy,...o},v=cb(null!=m?m:i),y=_v({callback:t.useCallback((()=>{f.current?(null!=p.current&&clearTimeout(p.current),p.current=setTimeout((()=>{d(Array.isArray(v.current)?v.current:[v.current]),p.current=null}),b)):f.current=!0}),[b]),disabled:g||!s}),x=t.useCallback(((e,t)=>{y&&(t&&(y.unobserve(t),f.current=!1),e&&y.observe(e))}),[y]),[w,$]=ub(x),C=cb(r);return t.useEffect((()=>{y&&w.current&&(y.disconnect(),f.current=!1,y.observe(w.current))}),[w,y]),sb((()=>(l({type:Ob.RegisterDroppable,element:{id:i,key:a,disabled:n,node:w,rect:h,data:C}}),()=>l({type:Ob.UnregisterDroppable,key:a,id:i}))),[i]),t.useEffect((()=>{n!==u.current.disabled&&(l({type:Ob.SetDroppableDisabled,id:i,key:a,disabled:n}),u.current.disabled=n)}),[i,a,n,l]),{active:s,rect:h,isOver:(null==c?void 0:c.id)===i,node:w,over:c,setNodeRef:$}}({id:s,data:$,disabled:x.droppable,resizeObserverConfig:{updateMeasurementsFor:C,...c}}),{active:T,activatorEvent:E,activeNodeRect:O,attributes:I,setNodeRef:F,listeners:M,isDragging:_,over:A,setActivatorNodeRef:B,transform:R}=oy({id:s,data:$,attributes:{...$y,...n},disabled:x.draggable}),z=function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return t.useMemo((()=>e=>{r.forEach((t=>t(e)))}),r)}(D,F),P=Boolean(T),L=P&&!g&&dy(h)&&dy(b),N=!v&&_,H=N&&L?R:null,W=L?null!=H?H:(null!=l?l:y)({rects:m,activeNodeRect:O,activeIndex:h,overIndex:b,index:w}):null,V=dy(h)&&dy(b)?a({id:s,items:u,activeIndex:h,overIndex:b}):w,Y=null==T?void 0:T.id,U=t.useRef({activeId:Y,items:u,newIndex:V,containerId:f}),K=u!==U.current.items,q=r({active:T,containerId:f,isDragging:_,isSorting:P,id:s,index:w,items:u,newIndex:U.current.newIndex,previousItems:U.current.items,previousContainerId:U.current.containerId,transition:d,wasDragging:null!=U.current.activeId}),X=function(e){let{disabled:r,index:n,node:i,rect:o}=e;const[a,s]=t.useState(null),l=t.useRef(n);return sb((()=>{if(!r&&n!==l.current&&i.current){const e=o.current;if(e){const t=Vb(i.current,{ignoreTransform:!0}),r={x:e.left-t.left,y:e.top-t.top,scaleX:e.width/t.width,scaleY:e.height/t.height};(r.x||r.y)&&s(r)}}n!==l.current&&(l.current=n)}),[r,n,i,o]),t.useEffect((()=>{a&&s(null)}),[a]),a}({disabled:!q,index:w,node:j,rect:S});return t.useEffect((()=>{P&&U.current.newIndex!==V&&(U.current.newIndex=V),f!==U.current.containerId&&(U.current.containerId=f),u!==U.current.items&&(U.current.items=u)}),[P,V,f,u]),t.useEffect((()=>{if(Y===U.current.activeId)return;if(Y&&!U.current.activeId)return void(U.current.activeId=Y);const e=setTimeout((()=>{U.current.activeId=Y}),50);return()=>clearTimeout(e)}),[Y]),{active:T,activeIndex:h,attributes:I,data:$,rect:S,index:w,newIndex:V,items:u,isOver:k,isSorting:P,isDragging:_,listeners:M,node:j,overIndex:b,over:A,setNodeRef:z,setActivatorNodeRef:B,setDroppableNodeRef:D,setDraggableNodeRef:F,transform:null!=X?X:W,transition:function(){if(X||K&&U.current.newIndex===w)return wy;if(N&&!vb(E)||!d)return;if(P||q)return xb.Transition.toString({...d,property:xy});return}()}}function Sy(e){if(!e)return!1;const t=e.data.current;return!!(t&&"sortable"in t&&"object"==typeof t.sortable&&"containerId"in t.sortable&&"items"in t.sortable&&"index"in t.sortable)}const jy=[dv.Down,dv.Right,dv.Up,dv.Left],ky=(e,t)=>{let{context:{active:r,collisionRect:n,droppableRects:i,droppableContainers:o,over:a,scrollableAncestors:s}}=t;if(jy.includes(e.code)){if(e.preventDefault(),!r||!n)return;const t=[];o.getEnabled().forEach((r=>{if(!r||null!=r&&r.disabled)return;const o=i.get(r.id);if(o)switch(e.code){case dv.Down:n.top<o.top&&t.push(r);break;case dv.Up:n.top>o.top&&t.push(r);break;case dv.Left:n.left>o.left&&t.push(r);break;case dv.Right:n.left<o.left&&t.push(r)}}));const l=(e=>{let{collisionRect:t,droppableRects:r,droppableContainers:n}=e;const i=Bb(t),o=[];for(const e of n){const{id:t}=e,n=r.get(t);if(n){const r=Bb(n),a=i.reduce(((e,t,n)=>{return e+(i=r[n],o=t,Math.sqrt(Math.pow(i.x-o.x,2)+Math.pow(i.y-o.y,2)));var i,o}),0),s=Number((a/4).toFixed(4));o.push({id:t,data:{droppableContainer:e,value:s}})}}return o.sort(_b)})({active:r,collisionRect:n,droppableRects:i,droppableContainers:t,pointerCoordinates:null});let c=Rb(l,"id");if(c===(null==a?void 0:a.id)&&l.length>1&&(c=l[1].id),null!=c){const e=o.get(r.id),t=o.get(c),a=t?i.get(t.id):null,l=null==t?void 0:t.node.current;if(l&&a&&e&&t){const r=Ub(l).some(((e,t)=>s[t]!==e)),i=Dy(e,t),o=function(e,t){if(!Sy(e)||!Sy(t))return!1;if(!Dy(e,t))return!1;return e.data.current.sortable.index<t.data.current.sortable.index}(e,t),c=r||!i?{x:0,y:0}:{x:o?n.width-a.width:0,y:o?n.height-a.height:0},d={x:a.left,y:a.top};return c.x&&c.y?d:bb(d,c)}}}};function Dy(e,t){return!(!Sy(e)||!Sy(t))&&e.data.current.sortable.containerId===t.data.current.sortable.containerId}class Ty extends Cv{}Ty.activators=[{eventName:"onMouseDown",handler:({nativeEvent:e})=>Ey(e.target)}];function Ey(e){let t=e;for(;t;){if(t.dataset&&t.dataset.noDnd)return!1;t=t.parentElement}return!0}(class extends gv{}).activators=[{eventName:"onKeyDown",handler:({nativeEvent:e})=>Ey(e.target)}];const Oy=K.default.div`
    max-width: 30rem;
    padding: 0 1rem;
    pointer-events: auto;
`,Iy=K.default(nu)`
    color: ${Ks.text};
    ${Rl({textSize:"body-md"})}

    ${el.MaxWidth.sm} {
        display: none;
    }
`,Fy=K.default(up)`
    padding: 3.5rem 1.25rem 2.5rem;
`,My=K.default.div`
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    color: ${Ks.text};
    ${Rl({textSize:"body-md"})}
`,_y=t=>{var{children:r,visible:n,onMobileClose:o}=t,a=X(t,["children","visible","onMobileClose"]);const s=a["data-testid"]||"popover",l=i.useTheme(),c=Js["sm-max"]({theme:l}),d=oc.useMediaQuery({maxWidth:c}),u=()=>{o&&o()},f=()=>"string"==typeof r?e.jsx(exports.Typography.BodyMD,{children:r}):r;return e.jsxs(e.Fragment,{children:[n&&e.jsx(Oy,Object.assign({"data-testid":s},a,{children:e.jsx(Iy,{children:f()})})),d&&e.jsx(lp,{show:null!=n&&n,onOverlayClick:u,children:e.jsx(Fy,{onClose:u,children:e.jsx(My,{children:f()})})})]})},Ay=K.default.div`
    display: inline;
    width: fit-content;
    cursor: pointer;
    position: relative;
`,By=r=>{var n,o,{children:a,popoverContent:s,trigger:l="click",position:c="top",zIndex:d,rootNode:u,customOffset:f,delay:h,onPopoverAppear:p,onPopoverDismiss:m}=r,b=X(r,["children","popoverContent","trigger","position","zIndex","rootNode","customOffset","delay","onPopoverAppear","onPopoverDismiss"]);const[v,y]=t.useState(!1),x=t.useRef(null),w=t.useRef(null),$=i.useTheme(),C=Js["sm-max"]({theme:$}),S=oc.useMediaQuery({maxWidth:C}),{refs:j,floatingStyles:k,context:D}=g.useFloating({open:v,placement:c,whileElementsMounted:g.autoUpdate,middleware:[g.offset(null!=f?f:16),g.flip(),g.shift({limiter:g.limitShift()})],onOpenChange:e=>{y(e),v!==e&&B(e)}}),T=ih(),E=S?"click":l,O=g.useClick(D,{ignoreMouse:"hover"===E}),I=g.useDismiss(D),F=g.useHover(D,{enabled:"hover"===E,delay:{open:null!==(n=null==h?void 0:h.open)&&void 0!==n?n:0,close:null!==(o=null==h?void 0:h.close)&&void 0!==o?o:500}}),{getReferenceProps:M,getFloatingProps:_}=g.useInteractions([O,I,F]),A=()=>{y(!1),B(!1)},B=e=>{e&&p&&p(),!e&&m&&m()};return e.jsxs(e.Fragment,{children:[e.jsx(Ay,Object.assign({ref:e=>{x.current=e,j.setReference(e)}},M({onClick:e=>{e.stopPropagation(),e.preventDefault()}}),b,{children:a})),v&&e.jsx(g.FloatingPortal,{root:u,children:e.jsx(g.FloatingFocusManager,{context:D,children:e.jsx("div",Object.assign({ref:e=>{w.current=e,j.setFloating(e)},style:Object.assign(Object.assign({},k),{outline:"none",zIndex:null!=d?d:T})},_(),{children:"function"==typeof s?s():e.jsx(_y,{visible:!0,onMobileClose:A,children:s})}))})})]})},Ry=e=>{switch(e){case"underline":return"text-decoration: underline 1px;";case"underline-dashed":return"text-decoration: underline dashed 1px;"}},zy=K.default.span`
    color: ${Ks["text-primary"]};
    font-weight: 600;
    text-underline-position: under;

    ${({$defaultStyle:e})=>Ry(e)}

    &:hover,
    &:focus-visible {
        color: ${Ks["text-hover"]};
        ${({$hoverStyle:e})=>Ry(e)}
    }

    svg {
        height: 1lh; // align vertically
        width: 1em; // scale icon with font size
        vertical-align: top;
    }
`,Py=K.default.span`
    ${e=>!e.$standalone&&"margin-left: 0.25rem;"}
`,Ly=t=>{var{ariaLabel:r,content:n,icon:i,underlineStyle:o="default",underlineHoverStyle:a="default"}=t,s=X(t,["ariaLabel","content","icon","underlineStyle","underlineHoverStyle"]);const l=!!n;return e.jsx(By,Object.assign({},s,{children:e.jsxs(zy,{role:"button","aria-haspopup":"dialog",tabIndex:0,$defaultStyle:o,$hoverStyle:a,"aria-label":null!=r?r:l?void 0:"More info",children:[n,i&&e.jsx(Py,{$standalone:!l,children:i})]})}))},Ny=K.default.div`
    padding-left: ${Zs["spacing-4"]};
    display: inline;
`,Hy=({addon:t,rootNode:r})=>{const{content:n,type:i,icon:o,id:a,zIndex:s,"data-testid":l}=t;return e.jsx(Ny,{children:e.jsx(Ly,{trigger:"click",id:a,"data-testid":l,popoverContent:n,rootNode:r,zIndex:s,icon:null!=o?o:e.jsx(c.ICircleFillIcon,{"data-testid":`${i}-icon`}),ariaLabel:"More info"})})},Wy=K.default.label`
    color: ${Ks["text-subtle"]};
    margin-bottom: ${Zs["spacing-8"]};
    display: inline-block;

    ${qs["form-label"]}
    ${Rl()}
    font-weight: ${qs.Spec["weight-semibold"]};
`,Vy=K.default.p`
    ${qs["body-sm-semibold"]}
    color: ${Ks["text-error"]};
    margin-top: ${Zs["spacing-8"]};
    margin-bottom: 0;
    outline: none;
`,Yy=K.default.span`
    ${qs["form-description"]}
    color: ${Ks["text-subtler"]};
    display: block;
`,Uy=t=>{var{children:r,addon:n,subtitle:i,"data-testid":o}=t,a=X(t,["children","addon","subtitle","data-testid"]);return e.jsxs(Wy,Object.assign({},a,{children:[r,n&&n.type&&("popover"===(null==n?void 0:n.type)?e.jsx(Hy,{addon:n}):null),"string"==typeof i?e.jsx(Yy,Object.assign({"data-testid":o?`${o}-subtitle`:"subtitle"},a,{children:i})):i]}))},Ky=t=>e.jsx(Vy,Object.assign({},t)),qy=i.css`
    display: flex;
    flex-direction: column;

    &:not(:last-child) {
        margin-bottom: ${Zs["spacing-32"]};
    }
`,Xy=K.default.div`
    ${qy}
`,Gy=K.default(Rh)`
    ${qy}
`,Zy=K.default(Wh)`
    ${qy}
`,Qy=({label:r,errorMessage:n,id:i,disabled:o,children:a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,"data-error-testid":v})=>{const y=!s&&(l||c||d)?"v2-grid":!s&&(u||f||h||p||g||m||b)?"grid":s||"flex",x=()=>v||(i?`${i}-error-message`:"error-message"),w=()=>!!n;const $=(e=>{switch(e){case"v2-grid":return Zy;case"grid":return Gy;case"flex":return Xy}})(y);return e.jsxs($,Object.assign({},(e=>{switch(e){case"v2-grid":return{mobileCols:l,tabletCols:c,desktopCols:d};case"grid":return{xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b};case"flex":return}})(y),{children:[r&&("string"==typeof r?e.jsx(Uy,{htmlFor:`${i}-base`,"data-testid":i?`${i}-label`:"form-label",disabled:o,children:r}):e.jsx(Uy,Object.assign({htmlFor:`${i}-base`,"data-testid":i?`${i}-label`:"form-label",disabled:o},r))),(()=>{const e={"aria-invalid":w(),"aria-describedby":w()&&x()};return t.Children.map(a,(r=>t.cloneElement(r,e)))})(),n&&e.jsx(Vy,{id:x(),tabIndex:0,"data-testid":x(),children:n})]}))};function Jy(e,t){return Jy=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},Jy(e,t)}function ex(e){return e&&e.stopPropagation&&e.stopPropagation(),e&&e.preventDefault&&e.preventDefault(),!1}function tx(e){return null==e?[]:Array.isArray(e)?e.slice():[e]}function rx(e){return null!==e&&1===e.length?e[0]:e.slice()}function nx(e){Object.keys(e).forEach((t=>{"undefined"!=typeof document&&document.addEventListener(t,e[t],!1)}))}function ix(e,t){return ox(function(e,t){let r=e;return r<=t.min&&(r=t.min),r>=t.max&&(r=t.max),r}(e,t),t)}function ox(e,t){const r=(e-t.min)%t.step;let n=e-r;return 2*Math.abs(r)>=t.step&&(n+=r>0?t.step:-t.step),parseFloat(n.toFixed(5))}let ax=function(e){function t(t){var r;(r=e.call(this,t)||this).onKeyUp=()=>{r.onEnd()},r.onMouseUp=()=>{r.onEnd(r.getMouseEventMap())},r.onTouchEnd=e=>{e.preventDefault(),r.onEnd(r.getTouchEventMap())},r.onBlur=()=>{r.setState({index:-1},r.onEnd(r.getKeyDownEventMap()))},r.onMouseMove=e=>{r.setState({pending:!0});const t=r.getMousePosition(e),n=r.getDiffPosition(t[0]),i=r.getValueFromPosition(n);r.move(i)},r.onTouchMove=e=>{if(e.touches.length>1)return;r.setState({pending:!0});const t=r.getTouchPosition(e);if(void 0===r.isScrolling){const e=t[0]-r.startPosition[0],n=t[1]-r.startPosition[1];r.isScrolling=Math.abs(n)>Math.abs(e)}if(r.isScrolling)return void r.setState({index:-1});const n=r.getDiffPosition(t[0]),i=r.getValueFromPosition(n);r.move(i)},r.onKeyDown=e=>{if(!(e.ctrlKey||e.shiftKey||e.altKey||e.metaKey))switch(r.setState({pending:!0}),e.key){case"ArrowLeft":case"ArrowDown":case"Left":case"Down":e.preventDefault(),r.moveDownByStep();break;case"ArrowRight":case"ArrowUp":case"Right":case"Up":e.preventDefault(),r.moveUpByStep();break;case"Home":e.preventDefault(),r.move(r.props.min);break;case"End":e.preventDefault(),r.move(r.props.max);break;case"PageDown":e.preventDefault(),r.moveDownByStep(r.props.pageFn(r.props.step));break;case"PageUp":e.preventDefault(),r.moveUpByStep(r.props.pageFn(r.props.step))}},r.onSliderMouseDown=e=>{if(!r.props.disabled&&2!==e.button){if(r.setState({pending:!0}),!r.props.snapDragDisabled){const t=r.getMousePosition(e);r.forceValueFromPosition(t[0],(e=>{r.start(e,t[0]),nx(r.getMouseEventMap())}))}ex(e)}},r.onSliderClick=e=>{if(!r.props.disabled&&r.props.onSliderClick&&!r.hasMoved){const t=r.getMousePosition(e),n=ix(r.calcValue(r.calcOffsetFromPosition(t[0])),r.props);r.props.onSliderClick(n)}},r.createOnKeyDown=e=>t=>{r.props.disabled||(r.start(e),nx(r.getKeyDownEventMap()),ex(t))},r.createOnMouseDown=e=>t=>{if(r.props.disabled||2===t.button)return;r.setState({pending:!0});const n=r.getMousePosition(t);r.start(e,n[0]),nx(r.getMouseEventMap()),ex(t)},r.createOnTouchStart=e=>t=>{if(r.props.disabled||t.touches.length>1)return;r.setState({pending:!0});const n=r.getTouchPosition(t);r.startPosition=n,r.isScrolling=void 0,r.start(e,n[0]),nx(r.getTouchEventMap()),function(e){e.stopPropagation&&e.stopPropagation()}(t)},r.handleResize=()=>{const e=window.setTimeout((()=>{r.pendingResizeTimeouts.shift(),r.resize()}),0);r.pendingResizeTimeouts.push(e)},r.renderThumb=(e,t)=>{const n=r.props.thumbClassName+" "+r.props.thumbClassName+"-"+t+" "+(r.state.index===t?r.props.thumbActiveClassName:""),i={ref:e=>{r["thumb"+t]=e},key:r.props.thumbClassName+"-"+t,className:n,style:e,onMouseDown:r.createOnMouseDown(t),onTouchStart:r.createOnTouchStart(t),onFocus:r.createOnKeyDown(t),tabIndex:0,role:"slider","aria-orientation":r.props.orientation,"aria-valuenow":r.state.value[t],"aria-valuemin":r.props.min,"aria-valuemax":r.props.max,"aria-label":Array.isArray(r.props.ariaLabel)?r.props.ariaLabel[t]:r.props.ariaLabel,"aria-labelledby":Array.isArray(r.props.ariaLabelledby)?r.props.ariaLabelledby[t]:r.props.ariaLabelledby,"aria-disabled":r.props.disabled},o={index:t,value:rx(r.state.value),valueNow:r.state.value[t]};return r.props.ariaValuetext&&(i["aria-valuetext"]="string"==typeof r.props.ariaValuetext?r.props.ariaValuetext:r.props.ariaValuetext(o)),r.props.renderThumb(i,o)},r.renderTrack=(e,t,n)=>{const i={key:r.props.trackClassName+"-"+e,className:r.props.trackClassName+" "+r.props.trackClassName+"-"+e,style:r.buildTrackStyle(t,r.state.upperBound-n)},o={index:e,value:rx(r.state.value)};return r.props.renderTrack(i,o)};let n=tx(t.value);n.length||(n=tx(t.defaultValue)),r.pendingResizeTimeouts=[];const i=[];for(let e=0;e<n.length;e+=1)n[e]=ix(n[e],t),i.push(e);return r.resizeObserver=null,r.resizeElementRef=Y.default.createRef(),r.state={index:-1,upperBound:0,sliderLength:0,value:n,zIndices:i},r}!function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Jy(e,t)}(t,e);var r=t.prototype;return r.componentDidMount=function(){"undefined"!=typeof window&&(this.resizeObserver=new ResizeObserver(this.handleResize),this.resizeObserver.observe(this.resizeElementRef.current),this.resize())},t.getDerivedStateFromProps=function(e,t){const r=tx(e.value);return r.length?t.pending?null:{value:r.map((t=>ix(t,e)))}:null},r.componentDidUpdate=function(){0===this.state.upperBound&&this.resize()},r.componentWillUnmount=function(){this.clearPendingResizeTimeouts(),this.resizeObserver&&this.resizeObserver.disconnect()},r.onEnd=function(e){e&&function(e){Object.keys(e).forEach((t=>{"undefined"!=typeof document&&document.removeEventListener(t,e[t],!1)}))}(e),this.hasMoved&&this.fireChangeEvent("onAfterChange"),this.setState({pending:!1}),this.hasMoved=!1},r.getValue=function(){return rx(this.state.value)},r.getClosestIndex=function(e){let t=Number.MAX_VALUE,r=-1;const{value:n}=this.state,i=n.length;for(let o=0;o<i;o+=1){const i=this.calcOffset(n[o]),a=Math.abs(e-i);a<t&&(t=a,r=o)}return r},r.getMousePosition=function(e){return[e["page"+this.axisKey()],e["page"+this.orthogonalAxisKey()]]},r.getTouchPosition=function(e){const t=e.touches[0];return[t["page"+this.axisKey()],t["page"+this.orthogonalAxisKey()]]},r.getKeyDownEventMap=function(){return{keydown:this.onKeyDown,keyup:this.onKeyUp,focusout:this.onBlur}},r.getMouseEventMap=function(){return{mousemove:this.onMouseMove,mouseup:this.onMouseUp}},r.getTouchEventMap=function(){return{touchmove:this.onTouchMove,touchend:this.onTouchEnd}},r.getValueFromPosition=function(e){const t=e/(this.state.sliderLength-this.state.thumbSize)*(this.props.max-this.props.min);return ix(this.state.startValue+t,this.props)},r.getDiffPosition=function(e){let t=e-this.state.startPosition;return this.props.invert&&(t*=-1),t},r.resize=function(){const{slider:e,thumb0:t}=this;if(!e||!t)return;const r=this.sizeKey(),n=e.getBoundingClientRect(),i=e[r],o=n[this.posMaxKey()],a=n[this.posMinKey()],s=t.getBoundingClientRect()[r.replace("client","").toLowerCase()],l=i-s,c=Math.abs(o-a);this.state.upperBound===l&&this.state.sliderLength===c&&this.state.thumbSize===s||this.setState({upperBound:l,sliderLength:c,thumbSize:s})},r.calcOffset=function(e){const t=this.props.max-this.props.min;return 0===t?0:(e-this.props.min)/t*this.state.upperBound},r.calcValue=function(e){return e/this.state.upperBound*(this.props.max-this.props.min)+this.props.min},r.calcOffsetFromPosition=function(e){const{slider:t}=this,r=t.getBoundingClientRect(),n=r[this.posMaxKey()],i=r[this.posMinKey()];let o=e-(window["page"+this.axisKey()+"Offset"]+(this.props.invert?n:i));return this.props.invert&&(o=this.state.sliderLength-o),o-=this.state.thumbSize/2,o},r.forceValueFromPosition=function(e,t){const r=this.calcOffsetFromPosition(e),n=this.getClosestIndex(r),i=ix(this.calcValue(r),this.props),o=this.state.value.slice();o[n]=i;for(let e=0;e<o.length-1;e+=1)if(o[e+1]-o[e]<this.props.minDistance)return;this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0,this.setState({value:o},(()=>{t(n),this.fireChangeEvent("onChange")}))},r.clearPendingResizeTimeouts=function(){do{const e=this.pendingResizeTimeouts.shift();clearTimeout(e)}while(this.pendingResizeTimeouts.length)},r.start=function(e,t){const r=this["thumb"+e];r&&r.focus();const{zIndices:n}=this.state;n.splice(n.indexOf(e),1),n.push(e),this.setState((r=>({startValue:r.value[e],startPosition:void 0!==t?t:r.startPosition,index:e,zIndices:n})))},r.moveUpByStep=function(e){void 0===e&&(e=this.props.step);const t=this.state.value[this.state.index],r=ix(this.props.invert&&"horizontal"===this.props.orientation?t-e:t+e,this.props);this.move(Math.min(r,this.props.max))},r.moveDownByStep=function(e){void 0===e&&(e=this.props.step);const t=this.state.value[this.state.index],r=ix(this.props.invert&&"horizontal"===this.props.orientation?t+e:t-e,this.props);this.move(Math.max(r,this.props.min))},r.move=function(e){const t=this.state.value.slice(),{index:r}=this.state,{length:n}=t,i=t[r];if(e===i)return;this.hasMoved||this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0;const{pearling:o,max:a,min:s,minDistance:l}=this.props;if(!o){if(r>0){const n=t[r-1];e<n+l&&(e=n+l)}if(r<n-1){const n=t[r+1];e>n-l&&(e=n-l)}}t[r]=e,o&&n>1&&(e>i?(this.pushSucceeding(t,l,r),function(e,t,r,n){for(let i=0;i<e;i+=1){const o=n-i*r;t[e-1-i]>o&&(t[e-1-i]=o)}}(n,t,l,a)):e<i&&(this.pushPreceding(t,l,r),function(e,t,r,n){for(let i=0;i<e;i+=1){const e=n+i*r;t[i]<e&&(t[i]=e)}}(n,t,l,s))),this.setState({value:t},this.fireChangeEvent.bind(this,"onChange"))},r.pushSucceeding=function(e,t,r){let n,i;for(n=r,i=e[n]+t;null!==e[n+1]&&i>e[n+1];n+=1,i=e[n]+t)e[n+1]=ox(i,this.props)},r.pushPreceding=function(e,t,r){for(let n=r,i=e[n]-t;null!==e[n-1]&&i<e[n-1];n-=1,i=e[n]-t)e[n-1]=ox(i,this.props)},r.axisKey=function(){return"vertical"===this.props.orientation?"Y":"X"},r.orthogonalAxisKey=function(){return"vertical"===this.props.orientation?"X":"Y"},r.posMinKey=function(){return"vertical"===this.props.orientation?this.props.invert?"bottom":"top":this.props.invert?"right":"left"},r.posMaxKey=function(){return"vertical"===this.props.orientation?this.props.invert?"top":"bottom":this.props.invert?"left":"right"},r.sizeKey=function(){return"vertical"===this.props.orientation?"clientHeight":"clientWidth"},r.fireChangeEvent=function(e){this.props[e]&&this.props[e](rx(this.state.value),this.state.index)},r.buildThumbStyle=function(e,t){const r={position:"absolute",touchAction:"none",willChange:this.state.index>=0?this.posMinKey():void 0,zIndex:this.state.zIndices.indexOf(t)+1};return r[this.posMinKey()]=e+"px",r},r.buildTrackStyle=function(e,t){const r={position:"absolute",willChange:this.state.index>=0?this.posMinKey()+","+this.posMaxKey():void 0};return r[this.posMinKey()]=e,r[this.posMaxKey()]=t,r},r.buildMarkStyle=function(e){var t;return(t={position:"absolute"})[this.posMinKey()]=e,t},r.renderThumbs=function(e){const{length:t}=e,r=[];for(let n=0;n<t;n+=1)r[n]=this.buildThumbStyle(e[n],n);const n=[];for(let e=0;e<t;e+=1)n[e]=this.renderThumb(r[e],e);return n},r.renderTracks=function(e){const t=[],r=e.length-1;t.push(this.renderTrack(0,0,e[0]));for(let n=0;n<r;n+=1)t.push(this.renderTrack(n+1,e[n],e[n+1]));return t.push(this.renderTrack(r+1,e[r],this.state.upperBound)),t},r.renderMarks=function(){let{marks:e}=this.props;const t=this.props.max-this.props.min+1;return"boolean"==typeof e?e=Array.from({length:t}).map(((e,t)=>t)):"number"==typeof e&&(e=Array.from({length:t}).map(((e,t)=>t)).filter((t=>t%e==0))),e.map(parseFloat).sort(((e,t)=>e-t)).map((e=>{const t=this.calcOffset(e),r={key:e,className:this.props.markClassName,style:this.buildMarkStyle(t)};return this.props.renderMark(r)}))},r.render=function(){const e=[],{value:t}=this.state,r=t.length;for(let n=0;n<r;n+=1)e[n]=this.calcOffset(t[n],n);const n=this.props.withTracks?this.renderTracks(e):null,i=this.renderThumbs(e),o=this.props.marks?this.renderMarks():null;return Y.default.createElement("div",{ref:e=>{this.slider=e,this.resizeElementRef.current=e},style:{position:"relative"},className:this.props.className+(this.props.disabled?" disabled":""),onMouseDown:this.onSliderMouseDown,onClick:this.onSliderClick},n,i,o)},t}(Y.default.Component);ax.displayName="ReactSlider",ax.defaultProps={min:0,max:100,step:1,pageFn:e=>10*e,minDistance:0,defaultValue:0,orientation:"horizontal",className:"slider",thumbClassName:"thumb",thumbActiveClassName:"active",trackClassName:"track",markClassName:"mark",withTracks:!0,pearling:!1,disabled:!1,snapDragDisabled:!1,invert:!1,marks:[],renderThumb:e=>Y.default.createElement("div",e),renderTrack:e=>Y.default.createElement("div",e),renderMark:e=>Y.default.createElement("span",e)};var sx=ax;const lx=K.default.div`
    isolation: isolate;
`,cx=K.default.div`
    margin-top: ${Zs["spacing-8"]};
    display: flex;
    justify-content: space-between;
    gap: ${Zs["spacing-8"]};
`,dx=K.default.div`
    margin-bottom: ${Zs["spacing-8"]};
`,ux=K.default(exports.Typography.BodyBL)`
    overflow-wrap: anywhere;
`,fx=K.default(sx)`
    height: 0.875rem;
`,hx=K.default.div`
    height: 2.5rem;
    width: 2.5rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    ${e=>e.$disabled?i.css`
                cursor: not-allowed;
            `:e.$readOnly?void 0:i.css`
                cursor: grab;
                :active {
                    cursor: grabbing;
                }
            `}

    :after {
        content: "";
        display: block;
        height: 0.875rem;
        width: 0.875rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        background-color: ${Ks.bg};
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);
        border: ${Gs["width-010"]} ${Gs.solid}
            ${e=>e.$disabled?Ks["border-selected-disabled"]:Ks["border-strong"]};
        border-radius: 50%;
    }
`,px=K.default.div`
    height: 0.875rem;
    width: 0.875rem;
    position: relative;
    outline: none;

    :focus ${hx}:after {
        outline-offset: -1px;
        outline: ${Gs["width-040"]} ${Gs.solid}
            ${Ks["border-selected"]};
    }
`,gx=K.default.div`
    height: 0.25rem;
    top: 50%;
    transform: translateY(-50%);
    border-radius: ${Qs.full};

    background: ${e=>e.$color&&"function"==typeof e.$color?e.$color(e):e.$color||Ks["border-strong"](e)};
`,mx=r=>{var{value:n,min:i=0,max:o=100,step:a=1,minRange:s,numOfThumbs:l=2,colors:c,disabled:d,readOnly:u,ariaLabels:f,showSliderLabels:h,sliderLabelPrefix:p,sliderLabelSuffix:g,showIndicatorLabel:m,indicatorLabelPrefix:b,indicatorLabelSuffix:v,renderSliderLabel:y,onChange:x,onChangeEnd:w}=r,$=X(r,["value","min","max","step","minRange","numOfThumbs","colors","disabled","readOnly","ariaLabels","showSliderLabels","sliderLabelPrefix","sliderLabelSuffix","showIndicatorLabel","indicatorLabelPrefix","indicatorLabelSuffix","renderSliderLabel","onChange","onChangeEnd"]);const[C,S]=t.useState(k()),j=function(){const e=function(){const e=d||u?Ks["border-disabled"]:Ks["border-strong"],t=d||u?Ks["border-selected-disabled"]:Ks["border-selected"];if(1===l)return[t,e];const r=[];r.push(e);for(let e=0;e<l-1;e++)r.push(t);return r.push(e),r}();return new Array(l+1).fill(0).map(((t,r)=>(null==c?void 0:c[r])||e[r]))}();t.useEffect((()=>{n!==C&&S(k())}),[n]);function k(){if(n&&n.length===l)return n;const e=[];for(let t=0;t<l;t++)e.push(i+a*t);return e}const D=t=>y?y(t):e.jsxs(ux,{children:[p,t,g]});return e.jsxs(lx,Object.assign({},$,{children:[m&&e.jsx(dx,{children:(()=>{let t="";if(1===C.length)t=`${C[0]}`;else if(2===C.length)t=`${C[0]} - ${C[1]}`;else if(C.length>2){t=`${Math.min(...C)} - ${Math.max(...C)}`}return e.jsxs(ux,{children:[b,t,v]})})()}),e.jsx(fx,{step:a,min:i,max:o,value:C,disabled:d||u,onChange:(e,t)=>{if("number"==typeof e){const t=[e];S(t),null==x||x(t)}else{if(t>-1&&C[t]===e[t])return;const r=[...e];S(r),null==x||x(r)}},onAfterChange:e=>{if("number"==typeof e){const t=[e];S(t),null==w||w(t)}else{const t=[...e];S(t),null==w||w(t)}},minDistance:s,ariaLabel:f,renderThumb:(t,r)=>e.jsx(px,Object.assign({"data-testid":`slider-thumb-${r.index}`},t,{tabIndex:d?void 0:t.tabIndex,children:e.jsx(hx,{$disabled:d,$readOnly:u})})),renderTrack:(t,r)=>e.jsx(gx,Object.assign({"data-testid":`slider-track-${r.index}`},t,{$color:j[r.index]}))}),h&&e.jsxs(cx,{children:[e.jsx("div",{children:D(i)}),e.jsx("div",{children:D(o)})]})]}))},bx=K.default.div`
    display: flex;
    margin-bottom: ${Zs["spacing-16"]};
    align-items: baseline;
`,vx=K.default.div`
    margin: 0 0.5rem;
`,yx=K.default.div`
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: flex-end;
    padding: 0 0.4375rem;
`,xx=K.default.div`
    flex: 1;
    border-radius: ${Qs.sm} ${Qs.sm} 0 0;
    border: 0.5px solid transparent; // space between bars
    background-clip: content-box;

    ${e=>{let t=Ks["bg-strongest"];return e.$disabled&&e.$selected?t=Ks["bg-selected-stronger-disabled"]:e.$disabled?t=Ks["bg-disabled"]:e.$selected&&(t=Ks["bg-selected-stronger"]),i.css`
            background-color: ${t};
        `}}
`,wx=K.default(mx)`
    margin-top: -0.3125rem;
`,$x=r=>{var{bins:n=[],interval:i,disabled:o,readOnly:a,value:s,showRangeLabels:l,rangeLabelPrefix:c,rangeLabelSuffix:d,ariaLabels:u,onChange:f,onChangeEnd:h,renderEmptyView:p,renderRangeLabel:g}=r,m=X(r,["bins","interval","disabled","readOnly","value","showRangeLabels","rangeLabelPrefix","rangeLabelSuffix","ariaLabels","onChange","onChangeEnd","renderEmptyView","renderRangeLabel"]);const b=n.map((e=>e.count)),v=Math.max(...b),y=n.map((e=>e.minValue)),x=Math.max(...y),w=Math.min(...y),[$,C]=t.useState(D()),S=t.useMemo((()=>{const e=[...n].sort(((e,t)=>e.minValue-t.minValue)),t=(x-w)/i+1,r=[];for(let n=0;n<t;n++){const t=e.find((e=>e.minValue===w+i*n));t?r.push(t):r.push({count:0,minValue:w+i*n})}return r}),[n,i]);t.useEffect((()=>{s!==$&&C(D())}),[s]);const j=e=>{const[t,r]=e,n=[t,r];C(n),null==f||f(n)},k=e=>{const[t,r]=e,n=[t,r];C(n),null==h||h(n)};function D(){return null!=s?s:[w,w+i]}const T=t=>g?g(t):e.jsxs(exports.Typography.BodyBL,{children:[c,t,d]});return e.jsxs("div",Object.assign({},m,{children:[l&&e.jsxs(bx,{children:[T($[0]),e.jsx(vx,{children:"-"}),T($[1])]}),S.every((e=>0===e.count))&&p?p():e.jsxs(e.Fragment,{children:[e.jsx(yx,{children:S.map(((t,r)=>{const n=t.count/v;return e.jsx(xx,{style:{height:n?`calc(calc(100% - 0.25rem) * ${n} + 0.25rem)`:0},$selected:t.minValue>=$[0]&&t.minValue<$[1],$disabled:o||a},r)}))}),e.jsx(wx,{min:w,max:x+i,step:i,minRange:i,numOfThumbs:2,value:$,disabled:o,readOnly:a,ariaLabels:u,onChange:j,onChangeEnd:k})]})]}))},Cx=K.default(Sf)`
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders

    ${e=>"no-border"!==e.$styleType&&i.css`
            padding-left: ${Zs["spacing-16"]};
            padding-right: ${e.$showClear?0:Zs["spacing-16"]};
        `}
`,Sx=K.default(jf)`
    height: auto;
    padding: ${Zs["spacing-12"]} ${Zs["spacing-16"]};

    cursor: pointer;
    color: ${Ks.icon};

    ${e=>"no-border"===e.$styleType&&i.css`
            margin-right: -${Zs["spacing-12"]};
        `}
`,jx=K.default(m.CrossIcon)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`,kx=K.default.div`
    display: flex;
    width: 100%;
`,Dx=K.default($f)`
    display: flex;
    align-items: center;
    width: 100%;
`,Tx=Y.default.forwardRef(((r,n)=>{var{value:i,spacing:o,type:a,error:s,disabled:l,readOnly:c,onChange:d,onClear:u,allowClear:f=!1,className:h,styleType:p="bordered"}=r,g=X(r,["value","spacing","type","error","disabled","readOnly","onChange","onClear","allowClear","className","styleType"]);const m=((e,t)=>"tel"===e&&!!t)(a,o),b=t.useRef(null);t.useImperativeHandle(n,(()=>b.current),[]);const v=Uc({ref:b,formatter:e=>m?Nc.transformWithSpaces(e,o):e}),y=e=>{d&&(m?w(e):d(e))},x=()=>{u&&u(),b&&b.current&&b.current.focus()},w=e=>{const t=v();if(!t)return;const{nextValue:r,updateCaretPosition:n}=t,i=r.replace(/\s/g,"");e.target.value=i,null==d||d(e),n()},$=i?(e=>e?m?Nc.transformWithSpaces(e,o):e:"")(i):i,C=f&&!l&&!c&&!!i,S=()=>e.jsxs(e.Fragment,{children:[e.jsx(Cx,Object.assign({"data-testid":"input",ref:b,disabled:l,value:$,onChange:y,type:a,readOnly:c,$showClear:C,$styleType:p},g)),C&&e.jsx(Sx,{onClick:x,type:"button",$styleType:p,children:e.jsx(jx,{"aria-hidden":!0})})]});return e.jsx(e.Fragment,{children:"no-border"===p?e.jsx(kx,{className:h,children:S()}):e.jsx(Dx,{$disabled:l,$error:s,$readOnly:c,className:h,children:S()})})})),Ex=Y.default.forwardRef(((t,r)=>{const{label:n,errorMessage:i,id:o="form-field","data-error-testid":a,"data-testid":s,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:f,xsCols:h,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v}=t,y=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(Qy,{id:o,label:n,errorMessage:i,disabled:y.disabled,"data-error-testid":a,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:f,xsCols:h,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v,children:e.jsx(Tx,Object.assign({id:`${o}-base`,"data-testid":s||o,ref:r,error:!!i},y))})}));var Ox=fa;var Ix=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r};var Fx=function(e){return this.__data__.get(e)};var Mx=function(e){return this.__data__.has(e)},_x=fa,Ax=ha,Bx=Ma;var Rx=function(e,t){var r=this.__data__;if(r instanceof _x){var n=r.__data__;if(!Ax||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new Bx(n)}return r.set(e,t),this.size=r.size,this},zx=fa,Px=function(){this.__data__=new Ox,this.size=0},Lx=Ix,Nx=Fx,Hx=Mx,Wx=Rx;function Vx(e){var t=this.__data__=new zx(e);this.size=t.size}Vx.prototype.clear=Px,Vx.prototype.delete=Lx,Vx.prototype.get=Nx,Vx.prototype.has=Hx,Vx.prototype.set=Wx;var Yx=Vx;var Ux=Ma,Kx=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},qx=function(e){return this.__data__.has(e)};function Xx(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new Ux;++t<r;)this.add(e[t])}Xx.prototype.add=Xx.prototype.push=Kx,Xx.prototype.has=qx;var Gx=function(e,t){return e.has(t)},Zx=Xx,Qx=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1},Jx=Gx;var ew=function(e,t,r,n,i,o){var a=1&r,s=e.length,l=t.length;if(s!=l&&!(a&&l>s))return!1;var c=o.get(e),d=o.get(t);if(c&&d)return c==t&&d==e;var u=-1,f=!0,h=2&r?new Zx:void 0;for(o.set(e,t),o.set(t,e);++u<s;){var p=e[u],g=t[u];if(n)var m=a?n(g,p,u,t,e,o):n(p,g,u,e,t,o);if(void 0!==m){if(m)continue;f=!1;break}if(h){if(!Qx(t,(function(e,t){if(!Jx(h,t)&&(p===e||i(p,e,r,n,o)))return h.push(t)}))){f=!1;break}}else if(p!==g&&!i(p,g,r,n,o)){f=!1;break}}return o.delete(e),o.delete(t),f};var tw=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r};var rw=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r},nw=Ai.Uint8Array,iw=qo,ow=ew,aw=tw,sw=rw,lw=Bi?Bi.prototype:void 0,cw=lw?lw.valueOf:void 0;var dw=function(e,t,r,n,i,o,a){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!o(new nw(e),new nw(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return iw(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var s=aw;case"[object Set]":var l=1&n;if(s||(s=sw),e.size!=t.size&&!l)return!1;var c=a.get(e);if(c)return c==t;n|=2,a.set(e,t);var d=ow(s(e),s(t),n,i,o,a);return a.delete(e),d;case"[object Symbol]":if(cw)return cw.call(e)==cw.call(t)}return!1};var uw=function(e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];return e},fw=Ii;var hw=function(e,t,r){var n=t(e);return fw(e)?n:uw(n,r(e))};var pw=function(e,t){for(var r=-1,n=null==e?0:e.length,i=0,o=[];++r<n;){var a=e[r];t(a,r,e)&&(o[i++]=a)}return o},gw=function(){return[]},mw=Object.prototype.propertyIsEnumerable,bw=Object.getOwnPropertySymbols,vw=bw?function(e){return null==e?[]:(e=Object(e),pw(bw(e),(function(t){return mw.call(e,t)})))}:gw;var yw=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n},xw=Ki,ww=qi;var $w=function(e){return ww(e)&&"[object Arguments]"==xw(e)},Cw=qi,Sw=Object.prototype,jw=Sw.hasOwnProperty,kw=Sw.propertyIsEnumerable,Dw=$w(function(){return arguments}())?$w:function(e){return Cw(e)&&jw.call(e,"callee")&&!kw.call(e,"callee")},Tw={exports:{}};var Ew=function(){return!1};!function(e,t){var r=Ai,n=Ew,i=t&&!t.nodeType&&t,o=i&&e&&!e.nodeType&&e,a=o&&o.exports===i?r.Buffer:void 0,s=(a?a.isBuffer:void 0)||n;e.exports=s}(Tw,Tw.exports);var Ow=Tw.exports,Iw=/^(?:0|[1-9]\d*)$/;var Fw=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&Iw.test(e))&&e>-1&&e%1==0&&e<t};var Mw=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},_w=Ki,Aw=Mw,Bw=qi,Rw={};Rw["[object Float32Array]"]=Rw["[object Float64Array]"]=Rw["[object Int8Array]"]=Rw["[object Int16Array]"]=Rw["[object Int32Array]"]=Rw["[object Uint8Array]"]=Rw["[object Uint8ClampedArray]"]=Rw["[object Uint16Array]"]=Rw["[object Uint32Array]"]=!0,Rw["[object Arguments]"]=Rw["[object Array]"]=Rw["[object ArrayBuffer]"]=Rw["[object Boolean]"]=Rw["[object DataView]"]=Rw["[object Date]"]=Rw["[object Error]"]=Rw["[object Function]"]=Rw["[object Map]"]=Rw["[object Number]"]=Rw["[object Object]"]=Rw["[object RegExp]"]=Rw["[object Set]"]=Rw["[object String]"]=Rw["[object WeakMap]"]=!1;var zw=function(e){return Bw(e)&&Aw(e.length)&&!!Rw[_w(e)]};var Pw=function(e){return function(t){return e(t)}},Lw={exports:{}};!function(e,t){var r=Fi,n=t&&!t.nodeType&&t,i=n&&e&&!e.nodeType&&e,o=i&&i.exports===n&&r.process,a=function(){try{var e=i&&i.require&&i.require("util").types;return e||o&&o.binding&&o.binding("util")}catch(e){}}();e.exports=a}(Lw,Lw.exports);var Nw=Lw.exports,Hw=zw,Ww=Pw,Vw=Nw&&Nw.isTypedArray,Yw=Vw?Ww(Vw):Hw,Uw=yw,Kw=Dw,qw=Ii,Xw=Ow,Gw=Fw,Zw=Yw,Qw=Object.prototype.hasOwnProperty;var Jw=function(e,t){var r=qw(e),n=!r&&Kw(e),i=!r&&!n&&Xw(e),o=!r&&!n&&!i&&Zw(e),a=r||n||i||o,s=a?Uw(e.length,String):[],l=s.length;for(var c in e)!t&&!Qw.call(e,c)||a&&("length"==c||i&&("offset"==c||"parent"==c)||o&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||Gw(c,l))||s.push(c);return s},e$=Object.prototype;var t$=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||e$)};var r$=function(e,t){return function(r){return e(t(r))}}(Object.keys,Object),n$=t$,i$=r$,o$=Object.prototype.hasOwnProperty;var a$=function(e){if(!n$(e))return i$(e);var t=[];for(var r in Object(e))o$.call(e,r)&&"constructor"!=r&&t.push(r);return t},s$=so,l$=Mw;var c$=function(e){return null!=e&&l$(e.length)&&!s$(e)},d$=Jw,u$=a$,f$=c$;var h$=function(e){return f$(e)?d$(e):u$(e)},p$=hw,g$=vw,m$=h$;var b$=function(e){return p$(e,m$,g$)},v$=Object.prototype.hasOwnProperty;var y$=function(e,t,r,n,i,o){var a=1&r,s=b$(e),l=s.length;if(l!=b$(t).length&&!a)return!1;for(var c=l;c--;){var d=s[c];if(!(a?d in t:v$.call(t,d)))return!1}var u=o.get(e),f=o.get(t);if(u&&f)return u==t&&f==e;var h=!0;o.set(e,t),o.set(t,e);for(var p=a;++c<l;){var g=e[d=s[c]],m=t[d];if(n)var b=a?n(m,g,d,t,e,o):n(g,m,d,e,t,o);if(!(void 0===b?g===m||i(g,m,r,n,o):b)){h=!1;break}p||(p="constructor"==d)}if(h&&!p){var v=e.constructor,y=t.constructor;v==y||!("constructor"in e)||!("constructor"in t)||"function"==typeof v&&v instanceof v&&"function"==typeof y&&y instanceof y||(h=!1)}return o.delete(e),o.delete(t),h},x$=Do(Ai,"DataView"),w$=ha,$$=Do(Ai,"Promise"),C$=Do(Ai,"Set"),S$=Do(Ai,"WeakMap"),j$=Ki,k$=ho,D$="[object Map]",T$="[object Promise]",E$="[object Set]",O$="[object WeakMap]",I$="[object DataView]",F$=k$(x$),M$=k$(w$),_$=k$($$),A$=k$(C$),B$=k$(S$),R$=j$;(x$&&R$(new x$(new ArrayBuffer(1)))!=I$||w$&&R$(new w$)!=D$||$$&&R$($$.resolve())!=T$||C$&&R$(new C$)!=E$||S$&&R$(new S$)!=O$)&&(R$=function(e){var t=j$(e),r="[object Object]"==t?e.constructor:void 0,n=r?k$(r):"";if(n)switch(n){case F$:return I$;case M$:return D$;case _$:return T$;case A$:return E$;case B$:return O$}return t});var z$=R$,P$=Yx,L$=ew,N$=dw,H$=y$,W$=z$,V$=Ii,Y$=Ow,U$=Yw,K$="[object Arguments]",q$="[object Array]",X$="[object Object]",G$=Object.prototype.hasOwnProperty;var Z$=function(e,t,r,n,i,o){var a=V$(e),s=V$(t),l=a?q$:W$(e),c=s?q$:W$(t),d=(l=l==K$?X$:l)==X$,u=(c=c==K$?X$:c)==X$,f=l==c;if(f&&Y$(e)){if(!Y$(t))return!1;a=!0,d=!1}if(f&&!d)return o||(o=new P$),a||U$(e)?L$(e,t,r,n,i,o):N$(e,t,l,r,n,i,o);if(!(1&r)){var h=d&&G$.call(e,"__wrapped__"),p=u&&G$.call(t,"__wrapped__");if(h||p){var g=h?e.value():e,m=p?t.value():t;return o||(o=new P$),i(g,m,r,n,o)}}return!!f&&(o||(o=new P$),H$(e,t,r,n,i,o))},Q$=qi;var J$=function e(t,r,n,i,o){return t===r||(null==t||null==r||!Q$(t)&&!Q$(r)?t!=t&&r!=r:Z$(t,r,n,i,e,o))},eC=Yx,tC=J$;var rC=function(e,t,r,n){var i=r.length,o=i,a=!n;if(null==e)return!o;for(e=Object(e);i--;){var s=r[i];if(a&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++i<o;){var l=(s=r[i])[0],c=e[l],d=s[1];if(a&&s[2]){if(void 0===c&&!(l in e))return!1}else{var u=new eC;if(n)var f=n(c,d,l,e,t,u);if(!(void 0===f?tC(d,c,3,n,u):f))return!1}}return!0},nC=no;var iC=function(e){return e==e&&!nC(e)},oC=iC,aC=h$;var sC=function(e){for(var t=aC(e),r=t.length;r--;){var n=t[r],i=e[n];t[r]=[n,i,oC(i)]}return t};var lC=function(e,t){return function(r){return null!=r&&(r[e]===t&&(void 0!==t||e in Object(r)))}},cC=rC,dC=sC,uC=lC;var fC=function(e,t){return null!=e&&t in Object(e)},hC=Ja,pC=Dw,gC=Ii,mC=Fw,bC=Mw,vC=ts;var yC=function(e,t,r){for(var n=-1,i=(t=hC(t,e)).length,o=!1;++n<i;){var a=vC(t[n]);if(!(o=null!=e&&r(e,a)))break;e=e[a]}return o||++n!=i?o:!!(i=null==e?0:e.length)&&bC(i)&&mC(a,i)&&(gC(e)||pC(e))},xC=fC,wC=yC;var $C=J$,CC=as,SC=function(e,t){return null!=e&&wC(e,t,xC)},jC=ro,kC=iC,DC=lC,TC=ts;var EC=function(e){return function(t){return null==t?void 0:t[e]}},OC=is;var IC=EC,FC=function(e){return function(t){return OC(t,e)}},MC=ro,_C=ts;var AC=function(e){var t=dC(e);return 1==t.length&&t[0][2]?uC(t[0][0],t[0][1]):function(r){return r===e||cC(r,e,t)}},BC=function(e,t){return jC(e)&&kC(t)?DC(TC(e),t):function(r){var n=CC(r,e);return void 0===n&&n===t?SC(r,e):$C(t,n,3)}},RC=function(e){return e},zC=Ii,PC=function(e){return MC(e)?IC(_C(e)):FC(e)};var LC=function(e){return"function"==typeof e?e:null==e?RC:"object"==typeof e?zC(e)?BC(e[0],e[1]):AC(e):PC(e)},NC=LC,HC=c$,WC=h$;var VC=function(e){return function(t,r,n){var i=Object(t);if(!HC(t)){var o=NC(r);t=WC(t),r=function(e){return o(i[e],e,i)}}var a=e(t,r,n);return a>-1?i[o?t[a]:a]:void 0}};var YC=Su,UC=1/0;var KC=function(e){return e?(e=YC(e))===UC||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var qC=function(e,t,r,n){for(var i=e.length,o=r+(n?1:-1);n?o--:++o<i;)if(t(e[o],o,e))return o;return-1},XC=LC,GC=function(e){var t=KC(e),r=t%1;return t==t?r?t-r:t:0},ZC=Math.max;var QC=function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var i=null==r?0:GC(r);return i<0&&(i=ZC(n+i,0)),qC(e,XC(t),i)},JC=Oi(QC),eS=Oi(VC(QC)),tS=J$;var rS=Oi((function(e,t){return tS(e,t)}));const nS=K.default(Ti.div)`
    overflow: hidden;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);
`,iS=K.default.ul`
    border-bottom-left-radius: ${Qs.sm};
    border-bottom-right-radius: ${Qs.sm};
    background: transparent;
    max-height: 20rem;
    width: ${e=>e.width||"100%"};
    overflow-y: auto;
    padding: ${Zs["spacing-8"]};
    list-style-type: none;

    ::-webkit-scrollbar {
        width: 14px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${Ks["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: 9999px;
        background-clip: padding-box;
    }

    ${el.MaxWidth.sm} {
        max-height: 15rem;
    }
`,oS=K.default.li`
    :hover,
    :focus,
    :active {
        background: ${Ks["bg-hover"]};
    }
    ${e=>{if(e.$checked)return i.css`
                background: ${Ks["bg-selected"]};
                :hover,
                :focus,
                :active {
                    background: ${Ks["bg-selected-hover"]};
                }
            `}}
`,aS=K.default.button`
    display: flex;
    ${e=>e.$multiSelect?i.css`
                padding: ${Zs["spacing-8"]} ${Zs["spacing-16"]};
            `:i.css`
                padding: 15px ${Zs["spacing-16"]}; // TODO: confirm vertical spacing
                align-items: center;
            `}
    margin: 0 -${Zs["spacing-8"]};
    border: none;
    background: transparent;
    width: 100%;
    cursor: pointer;

    :hover,
    :visited,
    :focus,
    :active {
        outline-color: ${Ks["border-focus"]};
    }

    span {
        margin-bottom: 0;
    }
`,sS=i.css`
    overflow: hidden;
    display: -webkit-inline-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${e=>e.$maxLines||2};
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
`,lS=K.default.div`
    ${e=>"small"===e.$variant?qs["body-md-regular"]:qs["body-baseline-regular"]}
    color: ${Ks.text};
    width: 100%;

    ${e=>"end"===e.$truncateType&&sS}
`,cS=K.default.div`
    color: ${Ks["text-subtlest"]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&sS}

    ${e=>"next-line"===e.$labelDisplayType?i.css`
                    ${qs["body-md-semibold"]}
                `:i.css`
                    ${qs["body-baseline-regular"]}
                `}
`,dS=K.default.div`
    text-align: left;
    width: 100%;

    ${e=>{switch(e.$labelDisplayType){case"next-line":return i.css`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return i.css`
                    ${lS} {
                        display: inline;
                    }

                    ${cS} {
                        display: inline;
                        margin-left: ${Zs["spacing-8"]};
                    }
                `}}}
`,uS=K.default.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    word-break: break-all;
    overflow: hidden;
`,fS=K.default.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,hS=K.default(fu)`
    flex-shrink: 0;
    margin-right: ${Zs["spacing-16"]};
`,pS=K.default.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: ${Zs["spacing-16"]} 0 ${Zs["spacing-8"]} 0;
`,gS=K.default.button`
    ${e=>"small"===e.$variant?qs["body-md-semibold"]:qs["body-baseline-semibold"]}
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    color: ${Ks["text-primary"]};
`,mS=K.default.div`
    width: 100%;
    display: flex;
    padding: 15px ${Zs["spacing-16"]}; // TODO: confirm vertical padding
    align-items: center;

    ${e=>"small"===e.$variant?qs["body-md-regular"]:qs["body-baseline-regular"]}
`,bS=K.default(s.ExclamationCircleFillIcon)`
    height: 1em;
    width: 1em;
    margin-right: ${Zs["spacing-4"]};
    color: ${Ks["icon-error"]};
`,vS=K.default(jl)`
    margin-right: ${Zs["spacing-4"]};
    color: ${Ks.icon};
`,yS=e=>"small"===e?1:1.375,xS=e=>i.css`
        height: ${yS(e)}rem;
        width: ${yS(e)}rem;
    `,wS=K.default.li`
    background: ${Ks["bg-strong"]};
    display: flex;
    border-radius: ${Qs.sm};
    align-items: center;
`,$S=K.default(Sf)`
    height: ${e=>"small"===e.$variant?2.5:3}rem;
    flex: 1;
    padding: 0 ${Zs["spacing-8"]} 0 0;
    width: 100%;
`,CS=K.default(x.MagnifierIcon)`
    ${e=>xS(e.$variant)}
    margin: 0 ${Zs["spacing-8"]};
    color: ${Ks.icon};
`,SS=K.default(nl)`
    ${e=>xS(e.$variant)}
    padding: 0;
    margin: 0 ${Zs["spacing-8"]};
    color: ${Ks.icon};
    cursor: pointer;
    ${e=>{if("small"===e.$variant)return i.css`
                svg {
                    ${xS(e.$variant)}
                }
            `}}
`,jS=t.forwardRef(((t,r)=>{const{onClear:n}=t,i=X(t,["onClear"]);return e.jsxs(wS,{children:[e.jsx(CS,{$variant:t.variant}),e.jsx($S,Object.assign({ref:r,$variant:t.variant},i)),i.value&&e.jsx(SS,{"aria-label":"Clear search",focusOutline:"browser",onClick:n,$variant:t.variant,children:e.jsx(u.CrossIcon,{})})]},"search")})),kS=r=>{var{listItems:n,listExtractor:i,valueExtractor:o,onSelectItem:a,listStyleWidth:s,visible:l,enableSearch:c,searchPlaceholder:d="Search",onSearch:u,searchFunction:f,onDismiss:h,disableItemFocus:p,multiSelect:g,selectedItems:m,onSelectAll:b,onRetry:v,itemsLoadState:y="success",itemTruncationType:x="end",itemMaxLines:w=2,labelDisplayType:$="inline",renderListItem:C,onBlur:S,hideNoResultsDisplay:j,renderCustomCallToAction:k,variant:D="default"}=r,T=X(r,["listItems","listExtractor","valueExtractor","onSelectItem","listStyleWidth","visible","enableSearch","searchPlaceholder","onSearch","searchFunction","onDismiss","disableItemFocus","multiSelect","selectedItems","onSelectAll","onRetry","itemsLoadState","itemTruncationType","itemMaxLines","labelDisplayType","renderListItem","onBlur","hideNoResultsDisplay","renderCustomCallToAction","variant"]);const[E,O]=t.useState(0),[I,F]=t.useState(""),[M,_]=t.useState(null!=n?n:[]),[A,B]=t.useState(0),R=di({height:A}),z=t.useRef(null),P=t.useRef(null),L=t.useRef([]),N=t.useRef(null),H=t.useRef(null),W=t.useRef(E),V=t.useRef(M),Y=e=>{W.current=e,O(e)},U=e=>{V.current=e,_(e)};t.useEffect((()=>(document.addEventListener("keydown",J),()=>{document.removeEventListener("keydown",J)})),[]),t.useEffect((()=>{Z(I)}),[I]),t.useEffect((()=>{if(F(""),l){if(setTimeout((()=>{B(Q())})),p)return;N&&N.current?(N.current.focus(),Y(-1)):L.current[E]&&L.current[E].focus()}else B(0)}),[l]),t.useEffect((()=>{if(l){const e=Q();B(e)}}),[M,y]),t.useEffect((()=>{U(null!=n?n:[]),F(""),Y(0)}),[n]);const K=e=>{const t=i?i(e):null==e?void 0:e.toString();return"object"==typeof t?{title:t.title,secondaryLabel:t.secondaryLabel}:{title:null!=t?t:""}},q=e=>{if("inline"!==$)return!1;let t=0;P&&P.current&&(t=P.current.getBoundingClientRect().width-60);return Nc.getTextWidth(e,"1.125rem 'Open Sans'")>t*w},G=e=>!!eS(m,(t=>rS(t,e))),Z=e=>{if(""===e)U(null!=n?n:[]);else if(f){const t=f(e);U(t)}else{const t=null==n?void 0:n.filter((t=>{const{title:r,secondaryLabel:n}=K(t),i=e.trim().toLowerCase();return r.includes(i)||n&&n.includes(i)}));U(null!=t?t:[])}},Q=()=>(P&&P.current?P.current.getBoundingClientRect().height:0)+(H.current?H.current.getBoundingClientRect().height:0),J=e=>{var t,r;if(z&&z.current.contains(e.target))switch(e.code){case"ArrowDown":if(W.current<V.current.length-1){const e=W.current+1;null===(t=L.current[e])||void 0===t||t.focus(),Y(e)}break;case"ArrowUp":if(W.current>0){const e=W.current-1;null===(r=L.current[e])||void 0===r||r.focus(),Y(W.current-1)}break;case"Escape":h&&h(!0)}},ee=(e,t)=>{e.preventDefault(),a&&a(t,(e=>o?o(e):e)(t))},te=e=>{const t=e.target.value;F(t),u&&u()},re=()=>{var e;F(""),null===(e=N.current)||void 0===e||e.focus(),u&&u()},ne=()=>{v&&v()},ie=()=>{S&&S()},oe=t=>e.jsxs(e.Fragment,{children:[e.jsx(uS,{$maxLines:w,"aria-hidden":!0,children:t}),e.jsx(fS,{$maxLines:w,"aria-hidden":!0,children:t})]}),ae=t=>{const{title:r,secondaryLabel:n}=K(t),i=q(r),o=n&&q(n),a=i||o?"next-line":$;return e.jsxs(dS,{$labelDisplayType:a,children:[e.jsx(lS,{$truncateType:x,$maxLines:w,$variant:D,"aria-label":r,children:"middle"===x&&i?oe(r):r}),n&&e.jsx(cS,{$truncateType:x,$maxLines:w,$labelDisplayType:$,"aria-label":n,children:"middle"===x&&o?oe(n):n})]})},se=()=>{if(!v||"success"===y)return M.map(((t,r)=>e.jsx(oS,{$checked:G(t)&&!g,children:e.jsxs(aS,{$hasNextLineLabel:"next-line"===$&&M.length>0&&i&&"string"!=typeof i(M[0]),onClick:e=>{ee(e,t)},ref:e=>L.current[r]=e,"data-testid":"list-item",type:"button",tabIndex:l?0:-1,$multiSelect:g,onBlur:ie,$variant:D,children:[g&&e.jsx(hS,{checked:G(t),displaySize:"small"}),C?C(t,{selected:G(t)}):ae(t)]})},((e,t)=>`item_${t}__${o?o(e):e}`)(t,r))))},le=()=>{if(m&&g&&M.length>0&&!I&&"success"===y)return e.jsx(pS,{children:e.jsx(gS,{onClick:b,type:"button",$variant:D,children:0===m.length?"Select all":"Clear all"})},"selectAll")},ce=()=>{if(!j&&(I||!c)&&0===M.length&&"success"===y)return e.jsxs(mS,{"data-testid":"list-no-results",$variant:D,children:[e.jsx(bS,{"data-testid":"no-result-icon",$variant:D}),"No results found."]},"noResults")},de=()=>{if(v&&"loading"===y)return e.jsxs(mS,{"data-testid":"list-loading",$variant:D,children:[e.jsx(vS,{}),"Loading..."]},"loading")},ue=()=>{if(v&&"fail"===y)return e.jsxs(mS,{"data-testid":"list-fail",$variant:D,children:[e.jsx(bS,{"data-testid":"load-error-icon",$variant:D}),"Failed to load. ",e.jsx(gS,{onClick:ne,type:"button",$variant:D,children:"Try again."})]},"noResults")};return e.jsx(e.Fragment,{children:e.jsxs(nS,{style:R,"data-testid":l?"dropdown-container":"dropdown-container-hidden",ref:z,children:[(()=>{if(l)return e.jsxs(iS,Object.assign({ref:P,"data-testid":"dropdown-list",width:s,role:"list"},T,{children:[(c||f)&&"success"===y?e.jsx(jS,{ref:N,onChange:te,value:I,placeholder:d,"data-testid":"search-input","aria-label":"search-input",tabIndex:l?0:-1,onClear:re,variant:D}):null,le(),ce(),de(),ue(),se()]}))})(),(()=>{if(l&&k)return e.jsx("div",{ref:H,"data-testid":"custom-cta",children:k(h,M)})})()]})})},DS=K.default.div`
    position: relative;
    display: flex;
    align-items: center;
    ${e=>{if(e.$expanded)return i.css`
                border-bottom: ${Gs["width-010"]} ${Gs.solid}
                    ${Ks.border};
            `}}

    ${e=>e.$readOnly?i.css`
                border: 0;
                margin: 0;
            `:"right"===e.$position?i.css`
                        flex-direction: row-reverse;
                        margin: 0 ${Zs["spacing-16"]};
                    `:i.css`
                        flex-direction: row;
                        margin: 0 ${Zs["spacing-16"]};
                    `}
`,TS=K.default(qf)`
    padding: 0;
    width: auto;
`,ES=K.default.div`
    padding: 10px 0; // TODO: confirm vertical spacing
    display: flex;
    align-items: center;
    padding: 0;
    background: transparent;
    margin-right: ${Zs["spacing-12"]};
`,OS=K.default.div`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: ${Xs["duration-250"]} ${Xs["ease-default"]};
    margin: 0 ${Zs["spacing-12"]};
    display: flex;
    align-items: center;
`,IS=K.default(f.ChevronDownIcon)`
    color: ${Ks.icon};
    height: ${qs.Spec["body-size-baseline"]};
    width: ${qs.Spec["body-size-baseline"]};
`,FS=K.default.div`
    display: flex;
    flex: 1 1 auto;
`,MS=K.default(exports.Typography.BodyBL)`
    text-align: left;
    ${il(2)}
    text-overflow: ellipsis;
`,_S=K.default(MS)`
    color: ${Ks["text-subtler"]};
`,AS=K.default.div`
    width: 1px;
    background: ${Ks.border};
    flex-shrink: 0;
    height: 1.25rem;

    ${e=>{if(e.$readOnly)return i.css`
                display: none;
            `}}

    ${e=>"right"===e.$position?i.css`
                    margin: 0 ${Zs["spacing-12"]};
                `:i.css`
                    margin: 0 ${Zs["spacing-12"]} 0 0;
                `}
`,BS=K.default($f)`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0 ${Zs["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,RS=K.default($f)`
    display: flex;
    position: relative;
    width: 100%;
    padding: 0 ${Zs["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,zS=K.default(Tx)``,PS=K.default.div`
    position: relative;
    display: flex;
    align-items: center;

    ${qs["body-baseline-regular"]}
    color: ${Ks.text};

    /* SVG Icon */
    svg {
        height: 1em;
        width: 1em;
    }

    ${e=>{if(e.$disabled)return i.css`
                color: ${Ks["text-subtler"]};
            `}}

    ${e=>"right"===e.$position?i.css`
                    margin-left: ${e.$readOnly?Zs["spacing-4"]:Zs["spacing-12"]};
                `:i.css`
                    margin-right: ${e.$readOnly?Zs["spacing-4"]:Zs["spacing-12"]};
                `};
`,LS=Y.default.forwardRef(((r,n)=>{var{addon:i,error:o,onChange:a,readOnly:s,className:l,onBlur:c}=r,d=X(r,["addon","error","onChange","readOnly","className","onBlur"]);const{placeholder:u,options:f,enableSearch:h,searchFunction:p,searchPlaceholder:g,valueExtractor:m,listExtractor:b,displayValueExtractor:v,selectedOption:y,onSelectOption:x,onHideOptions:w,onShowOptions:$,"data-selector-testid":C}=i.attributes,{position:S}=i,[j,k]=t.useState(y),[D,T]=t.useState(!1),E=t.useRef(null);t.useEffect((()=>{k(y)}),[y]);const O=()=>{if(j)return v?v(j):m?m(j):j.toString()},I=e=>{!e&&w&&w(),e&&$&&$()},F=e=>{e.preventDefault(),d.disabled||(T(!D),I(!D))},M=(e,t)=>{var r;k(e),T(!1),I(!1),E&&(null===(r=E.current)||void 0===r||r.focus()),x&&x(e,t)},_=e=>{a&&a(e)},A=()=>{c&&c()},B=()=>{var e;T(!1),I(!1),E&&(null===(e=E.current)||void 0===e||e.focus())};return e.jsxs(rh,{className:l,show:D,error:o&&!D,disabled:d.disabled,readOnly:s,onBlur:()=>{T(!1),I(!1),A()},children:[e.jsxs(DS,{$expanded:D,$readOnly:s,$position:S,children:[s?j?e.jsx(ES,{children:e.jsx(MS,{"data-testid":"selector-label",children:O()})}):null:e.jsx(TS,{ref:E,type:"button",disabled:d.disabled,"data-testid":C||"addon-selector",onClick:F,children:e.jsxs(e.Fragment,{children:[e.jsxs(FS,{children:[u&&!j&&e.jsx(_S,{children:u}),j&&e.jsx(MS,{"data-testid":"selector-label",children:O()})]}),e.jsx(OS,{$expanded:D,children:e.jsx(IS,{})})]})}),e.jsx(AS,{$readOnly:s,$position:S}),e.jsx(zS,Object.assign({ref:n},d,{readOnly:s,error:o,onChange:_,"data-testid":d["data-testid"]||"input",onBlur:A,styleType:"no-border"}))]}),f&&f.length>0?e.jsx(kS,{listItems:f,selectedItems:y?[y]:[],onSelectItem:M,valueExtractor:m,listExtractor:b,visible:D,enableSearch:h,searchFunction:p,searchPlaceholder:g,"data-testid":"dropdown-list",onBlur:A,onDismiss:B}):e.jsx(e.Fragment,{})]})})),NS=Y.default.forwardRef(((t,r)=>{var{addon:n,error:i,className:o}=t,a=X(t,["addon","error","className"]);const s=()=>e.jsx(RS,{$disabled:a.disabled,$error:i,$readOnly:a.readOnly,"data-testid":a["data-testid"],className:o,children:e.jsx(zS,Object.assign({ref:r},a,{"data-testid":"input",styleType:"no-border"}))});if(!n)return s();{const{type:t="label",position:l="left"}=n,{allowClear:c}=a;switch(t){case"list":{const t=n.attributes;return t.options&&t.options.length>0?e.jsx(LS,Object.assign({ref:r,addon:n,error:i,className:o},a)):s()}case"custom":{const t=n.attributes;return t.children?e.jsxs(BS,{$error:i,$disabled:a.disabled,$readOnly:a.readOnly,"data-testid":a["data-testid"],$position:l,className:o,children:[e.jsx(PS,{"data-testid":"addon",$disabled:a.disabled,$readOnly:a.readOnly,$position:l,children:t.children}),e.jsx(zS,Object.assign({ref:r},a,{allowClear:c&&"right"!==l,error:i,"data-testid":"input",styleType:"no-border"}))]}):s()}default:{const t=n.attributes;return t.value?e.jsxs(BS,{$disabled:a.disabled,$error:i,$readOnly:a.readOnly,"data-testid":a["data-testid"],$position:l,className:o,children:[e.jsx(PS,{"data-testid":"addon",$disabled:a.disabled,$readOnly:a.readOnly,$position:l,children:t.value}),e.jsx(zS,Object.assign({ref:r},a,{allowClear:c&&"right"!==l,error:i,"data-testid":"input",styleType:"no-border"}))]}):s()}}}})),HS=Y.default.forwardRef(((t,r)=>{const{label:n,errorMessage:i,id:o="form-field-group","data-error-testid":a,"data-testid":s,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:f,xsCols:h,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v}=t,y=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(Qy,{id:o,label:n,errorMessage:i,disabled:y.disabled,"data-error-testid":a,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:f,xsCols:h,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v,children:e.jsx(NS,Object.assign({ref:r,id:`${o}-base`,"data-testid":s||o,error:!!i},y))})})),WS=K.default(NS)`
    padding: 0 0 0 ${({readOnly:e})=>e?"0":Zs["spacing-16"]};
    input {
        cursor: ${({readOnly:e,$isDisabled:t})=>e&&!t?"pointer":"initial"};
    }
`,VS=K.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: ${({$isDisabled:e})=>e?"initial":"pointer"};
    color: ${({$isDisabled:e,$inactiveColor:t=Ks.icon,$activeColor:r=Ks["icon-primary"]})=>e?t:r};
    padding: ${Zs["spacing-12"]} ${Zs["spacing-16"]};

    svg {
        height: 1em;
        width: 1em;
    }
`,YS=K.default.div`
    display: flex;
    align-items: center;
    height: 3rem;
`,US=K.default(exports.Typography.BodyBL)`
    color: ${Ks["text-subtler"]};
`,KS=K.default(jl)`
    margin-right: ${Zs["spacing-8"]};
    color: ${Ks.icon};
`,qS=K.default.span`
    color: ${Ks["text-primary"]};
    text-decoration: underline;
    font-weight: ${qs.Spec["weight-semibold"]};
`,XS=K.default.span`
    display: flex;
    align-items: center;
    margin-right: ${Zs["spacing-8"]};
`,GS=K.default(C.ExclamationTriangleIcon)`
    color: ${Ks["icon-warning"]};
    margin-right: ${Zs["spacing-8"]};
    height: 1em;
    width: 1em;
`,ZS=K.default.span`
    color: ${Ks["text-warning"]};
`,QS=K.default(jf)`
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: none;
    background: transparent;
    cursor: pointer;

    ${qs["body-baseline-regular"]}

    :hover, :active, :focus {
        ${qS} {
            color: ${Ks["text-hover"]};
        }
    }
`;var JS={exports:{}};
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */!function(e,t){(function(){var r,n="Expected a function",i="__lodash_hash_undefined__",o="__lodash_placeholder__",a=16,s=32,l=64,c=128,d=256,u=1/0,f=9007199254740991,h=NaN,p=4294967295,g=[["ary",c],["bind",1],["bindKey",2],["curry",8],["curryRight",a],["flip",512],["partial",s],["partialRight",l],["rearg",d]],m="[object Arguments]",b="[object Array]",v="[object Boolean]",y="[object Date]",x="[object Error]",w="[object Function]",$="[object GeneratorFunction]",C="[object Map]",S="[object Number]",j="[object Object]",k="[object Promise]",D="[object RegExp]",T="[object Set]",E="[object String]",O="[object Symbol]",I="[object WeakMap]",F="[object ArrayBuffer]",M="[object DataView]",_="[object Float32Array]",A="[object Float64Array]",B="[object Int8Array]",R="[object Int16Array]",z="[object Int32Array]",P="[object Uint8Array]",L="[object Uint8ClampedArray]",N="[object Uint16Array]",H="[object Uint32Array]",W=/\b__p \+= '';/g,V=/\b(__p \+=) '' \+/g,Y=/(__e\(.*?\)|\b__t\)) \+\n'';/g,U=/&(?:amp|lt|gt|quot|#39);/g,K=/[&<>"']/g,q=RegExp(U.source),X=RegExp(K.source),G=/<%-([\s\S]+?)%>/g,Z=/<%([\s\S]+?)%>/g,Q=/<%=([\s\S]+?)%>/g,J=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ee=/^\w*$/,te=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,re=/[\\^$.*+?()[\]{}|]/g,ne=RegExp(re.source),ie=/^\s+/,oe=/\s/,ae=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,se=/\{\n\/\* \[wrapped with (.+)\] \*/,le=/,? & /,ce=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,de=/[()=,{}\[\]\/\s]/,ue=/\\(\\)?/g,fe=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,he=/\w*$/,pe=/^[-+]0x[0-9a-f]+$/i,ge=/^0b[01]+$/i,me=/^\[object .+?Constructor\]$/,be=/^0o[0-7]+$/i,ve=/^(?:0|[1-9]\d*)$/,ye=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,xe=/($^)/,we=/['\n\r\u2028\u2029\\]/g,$e="\\ud800-\\udfff",Ce="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",Se="\\u2700-\\u27bf",je="a-z\\xdf-\\xf6\\xf8-\\xff",ke="A-Z\\xc0-\\xd6\\xd8-\\xde",De="\\ufe0e\\ufe0f",Te="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Ee="['’]",Oe="["+$e+"]",Ie="["+Te+"]",Fe="["+Ce+"]",Me="\\d+",_e="["+Se+"]",Ae="["+je+"]",Be="[^"+$e+Te+Me+Se+je+ke+"]",Re="\\ud83c[\\udffb-\\udfff]",ze="[^"+$e+"]",Pe="(?:\\ud83c[\\udde6-\\uddff]){2}",Le="[\\ud800-\\udbff][\\udc00-\\udfff]",Ne="["+ke+"]",He="\\u200d",We="(?:"+Ae+"|"+Be+")",Ve="(?:"+Ne+"|"+Be+")",Ye="(?:['’](?:d|ll|m|re|s|t|ve))?",Ue="(?:['’](?:D|LL|M|RE|S|T|VE))?",Ke="(?:"+Fe+"|"+Re+")"+"?",qe="["+De+"]?",Xe=qe+Ke+("(?:"+He+"(?:"+[ze,Pe,Le].join("|")+")"+qe+Ke+")*"),Ge="(?:"+[_e,Pe,Le].join("|")+")"+Xe,Ze="(?:"+[ze+Fe+"?",Fe,Pe,Le,Oe].join("|")+")",Qe=RegExp(Ee,"g"),Je=RegExp(Fe,"g"),et=RegExp(Re+"(?="+Re+")|"+Ze+Xe,"g"),tt=RegExp([Ne+"?"+Ae+"+"+Ye+"(?="+[Ie,Ne,"$"].join("|")+")",Ve+"+"+Ue+"(?="+[Ie,Ne+We,"$"].join("|")+")",Ne+"?"+We+"+"+Ye,Ne+"+"+Ue,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Me,Ge].join("|"),"g"),rt=RegExp("["+He+$e+Ce+De+"]"),nt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,it=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],ot=-1,at={};at[_]=at[A]=at[B]=at[R]=at[z]=at[P]=at[L]=at[N]=at[H]=!0,at[m]=at[b]=at[F]=at[v]=at[M]=at[y]=at[x]=at[w]=at[C]=at[S]=at[j]=at[D]=at[T]=at[E]=at[I]=!1;var st={};st[m]=st[b]=st[F]=st[M]=st[v]=st[y]=st[_]=st[A]=st[B]=st[R]=st[z]=st[C]=st[S]=st[j]=st[D]=st[T]=st[E]=st[O]=st[P]=st[L]=st[N]=st[H]=!0,st[x]=st[w]=st[I]=!1;var lt={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},ct=parseFloat,dt=parseInt,ut="object"==typeof Ei&&Ei&&Ei.Object===Object&&Ei,ft="object"==typeof self&&self&&self.Object===Object&&self,ht=ut||ft||Function("return this")(),pt=t&&!t.nodeType&&t,gt=pt&&e&&!e.nodeType&&e,mt=gt&&gt.exports===pt,bt=mt&&ut.process,vt=function(){try{var e=gt&&gt.require&&gt.require("util").types;return e||bt&&bt.binding&&bt.binding("util")}catch(e){}}(),yt=vt&&vt.isArrayBuffer,xt=vt&&vt.isDate,wt=vt&&vt.isMap,$t=vt&&vt.isRegExp,Ct=vt&&vt.isSet,St=vt&&vt.isTypedArray;function jt(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}function kt(e,t,r,n){for(var i=-1,o=null==e?0:e.length;++i<o;){var a=e[i];t(n,a,r(a),e)}return n}function Dt(e,t){for(var r=-1,n=null==e?0:e.length;++r<n&&!1!==t(e[r],r,e););return e}function Tt(e,t){for(var r=null==e?0:e.length;r--&&!1!==t(e[r],r,e););return e}function Et(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(!t(e[r],r,e))return!1;return!0}function Ot(e,t){for(var r=-1,n=null==e?0:e.length,i=0,o=[];++r<n;){var a=e[r];t(a,r,e)&&(o[i++]=a)}return o}function It(e,t){return!!(null==e?0:e.length)&&Nt(e,t,0)>-1}function Ft(e,t,r){for(var n=-1,i=null==e?0:e.length;++n<i;)if(r(t,e[n]))return!0;return!1}function Mt(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i}function _t(e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];return e}function At(e,t,r,n){var i=-1,o=null==e?0:e.length;for(n&&o&&(r=e[++i]);++i<o;)r=t(r,e[i],i,e);return r}function Bt(e,t,r,n){var i=null==e?0:e.length;for(n&&i&&(r=e[--i]);i--;)r=t(r,e[i],i,e);return r}function Rt(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1}var zt=Yt("length");function Pt(e,t,r){var n;return r(e,(function(e,r,i){if(t(e,r,i))return n=r,!1})),n}function Lt(e,t,r,n){for(var i=e.length,o=r+(n?1:-1);n?o--:++o<i;)if(t(e[o],o,e))return o;return-1}function Nt(e,t,r){return t==t?function(e,t,r){var n=r-1,i=e.length;for(;++n<i;)if(e[n]===t)return n;return-1}(e,t,r):Lt(e,Wt,r)}function Ht(e,t,r,n){for(var i=r-1,o=e.length;++i<o;)if(n(e[i],t))return i;return-1}function Wt(e){return e!=e}function Vt(e,t){var r=null==e?0:e.length;return r?qt(e,t)/r:h}function Yt(e){return function(t){return null==t?r:t[e]}}function Ut(e){return function(t){return null==e?r:e[t]}}function Kt(e,t,r,n,i){return i(e,(function(e,i,o){r=n?(n=!1,e):t(r,e,i,o)})),r}function qt(e,t){for(var n,i=-1,o=e.length;++i<o;){var a=t(e[i]);a!==r&&(n=n===r?a:n+a)}return n}function Xt(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}function Gt(e){return e?e.slice(0,hr(e)+1).replace(ie,""):e}function Zt(e){return function(t){return e(t)}}function Qt(e,t){return Mt(t,(function(t){return e[t]}))}function Jt(e,t){return e.has(t)}function er(e,t){for(var r=-1,n=e.length;++r<n&&Nt(t,e[r],0)>-1;);return r}function tr(e,t){for(var r=e.length;r--&&Nt(t,e[r],0)>-1;);return r}var rr=Ut({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),nr=Ut({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});function ir(e){return"\\"+lt[e]}function or(e){return rt.test(e)}function ar(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r}function sr(e,t){return function(r){return e(t(r))}}function lr(e,t){for(var r=-1,n=e.length,i=0,a=[];++r<n;){var s=e[r];s!==t&&s!==o||(e[r]=o,a[i++]=r)}return a}function cr(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r}function dr(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=[e,e]})),r}function ur(e){return or(e)?function(e){var t=et.lastIndex=0;for(;et.test(e);)++t;return t}(e):zt(e)}function fr(e){return or(e)?function(e){return e.match(et)||[]}(e):function(e){return e.split("")}(e)}function hr(e){for(var t=e.length;t--&&oe.test(e.charAt(t)););return t}var pr=Ut({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"});var gr=function e(t){var oe=(t=null==t?ht:gr.defaults(ht.Object(),t,gr.pick(ht,it))).Array,$e=t.Date,Ce=t.Error,Se=t.Function,je=t.Math,ke=t.Object,De=t.RegExp,Te=t.String,Ee=t.TypeError,Oe=oe.prototype,Ie=Se.prototype,Fe=ke.prototype,Me=t["__core-js_shared__"],_e=Ie.toString,Ae=Fe.hasOwnProperty,Be=0,Re=function(){var e=/[^.]+$/.exec(Me&&Me.keys&&Me.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),ze=Fe.toString,Pe=_e.call(ke),Le=ht._,Ne=De("^"+_e.call(Ae).replace(re,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),He=mt?t.Buffer:r,We=t.Symbol,Ve=t.Uint8Array,Ye=He?He.allocUnsafe:r,Ue=sr(ke.getPrototypeOf,ke),Ke=ke.create,qe=Fe.propertyIsEnumerable,Xe=Oe.splice,Ge=We?We.isConcatSpreadable:r,Ze=We?We.iterator:r,et=We?We.toStringTag:r,rt=function(){try{var e=fo(ke,"defineProperty");return e({},"",{}),e}catch(e){}}(),lt=t.clearTimeout!==ht.clearTimeout&&t.clearTimeout,ut=$e&&$e.now!==ht.Date.now&&$e.now,ft=t.setTimeout!==ht.setTimeout&&t.setTimeout,pt=je.ceil,gt=je.floor,bt=ke.getOwnPropertySymbols,vt=He?He.isBuffer:r,zt=t.isFinite,Ut=Oe.join,mr=sr(ke.keys,ke),br=je.max,vr=je.min,yr=$e.now,xr=t.parseInt,wr=je.random,$r=Oe.reverse,Cr=fo(t,"DataView"),Sr=fo(t,"Map"),jr=fo(t,"Promise"),kr=fo(t,"Set"),Dr=fo(t,"WeakMap"),Tr=fo(ke,"create"),Er=Dr&&new Dr,Or={},Ir=zo(Cr),Fr=zo(Sr),Mr=zo(jr),_r=zo(kr),Ar=zo(Dr),Br=We?We.prototype:r,Rr=Br?Br.valueOf:r,zr=Br?Br.toString:r;function Pr(e){if(ts(e)&&!Va(e)&&!(e instanceof Wr)){if(e instanceof Hr)return e;if(Ae.call(e,"__wrapped__"))return Po(e)}return new Hr(e)}var Lr=function(){function e(){}return function(t){if(!es(t))return{};if(Ke)return Ke(t);e.prototype=t;var n=new e;return e.prototype=r,n}}();function Nr(){}function Hr(e,t){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=r}function Wr(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=p,this.__views__=[]}function Vr(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Yr(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Ur(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Kr(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new Ur;++t<r;)this.add(e[t])}function qr(e){var t=this.__data__=new Yr(e);this.size=t.size}function Xr(e,t){var r=Va(e),n=!r&&Wa(e),i=!r&&!n&&qa(e),o=!r&&!n&&!i&&cs(e),a=r||n||i||o,s=a?Xt(e.length,Te):[],l=s.length;for(var c in e)!t&&!Ae.call(e,c)||a&&("length"==c||i&&("offset"==c||"parent"==c)||o&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||yo(c,l))||s.push(c);return s}function Gr(e){var t=e.length;return t?e[qn(0,t-1)]:r}function Zr(e,t){return Ao(Ei(e),sn(t,0,e.length))}function Qr(e){return Ao(Ei(e))}function Jr(e,t,n){(n!==r&&!La(e[t],n)||n===r&&!(t in e))&&on(e,t,n)}function en(e,t,n){var i=e[t];Ae.call(e,t)&&La(i,n)&&(n!==r||t in e)||on(e,t,n)}function tn(e,t){for(var r=e.length;r--;)if(La(e[r][0],t))return r;return-1}function rn(e,t,r,n){return fn(e,(function(e,i,o){t(n,e,r(e),o)})),n}function nn(e,t){return e&&Oi(t,Is(t),e)}function on(e,t,r){"__proto__"==t&&rt?rt(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}function an(e,t){for(var n=-1,i=t.length,o=oe(i),a=null==e;++n<i;)o[n]=a?r:ks(e,t[n]);return o}function sn(e,t,n){return e==e&&(n!==r&&(e=e<=n?e:n),t!==r&&(e=e>=t?e:t)),e}function ln(e,t,n,i,o,a){var s,l=1&t,c=2&t,d=4&t;if(n&&(s=o?n(e,i,o,a):n(e)),s!==r)return s;if(!es(e))return e;var u=Va(e);if(u){if(s=function(e){var t=e.length,r=new e.constructor(t);t&&"string"==typeof e[0]&&Ae.call(e,"index")&&(r.index=e.index,r.input=e.input);return r}(e),!l)return Ei(e,s)}else{var f=go(e),h=f==w||f==$;if(qa(e))return Ci(e,l);if(f==j||f==m||h&&!o){if(s=c||h?{}:bo(e),!l)return c?function(e,t){return Oi(e,po(e),t)}(e,function(e,t){return e&&Oi(t,Fs(t),e)}(s,e)):function(e,t){return Oi(e,ho(e),t)}(e,nn(s,e))}else{if(!st[f])return o?e:{};s=function(e,t,r){var n=e.constructor;switch(t){case F:return Si(e);case v:case y:return new n(+e);case M:return function(e,t){var r=t?Si(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}(e,r);case _:case A:case B:case R:case z:case P:case L:case N:case H:return ji(e,r);case C:return new n;case S:case E:return new n(e);case D:return function(e){var t=new e.constructor(e.source,he.exec(e));return t.lastIndex=e.lastIndex,t}(e);case T:return new n;case O:return i=e,Rr?ke(Rr.call(i)):{}}var i}(e,f,l)}}a||(a=new qr);var p=a.get(e);if(p)return p;a.set(e,s),as(e)?e.forEach((function(r){s.add(ln(r,t,n,r,e,a))})):rs(e)&&e.forEach((function(r,i){s.set(i,ln(r,t,n,i,e,a))}));var g=u?r:(d?c?io:no:c?Fs:Is)(e);return Dt(g||e,(function(r,i){g&&(r=e[i=r]),en(s,i,ln(r,t,n,i,e,a))})),s}function cn(e,t,n){var i=n.length;if(null==e)return!i;for(e=ke(e);i--;){var o=n[i],a=t[o],s=e[o];if(s===r&&!(o in e)||!a(s))return!1}return!0}function dn(e,t,i){if("function"!=typeof e)throw new Ee(n);return Io((function(){e.apply(r,i)}),t)}function un(e,t,r,n){var i=-1,o=It,a=!0,s=e.length,l=[],c=t.length;if(!s)return l;r&&(t=Mt(t,Zt(r))),n?(o=Ft,a=!1):t.length>=200&&(o=Jt,a=!1,t=new Kr(t));e:for(;++i<s;){var d=e[i],u=null==r?d:r(d);if(d=n||0!==d?d:0,a&&u==u){for(var f=c;f--;)if(t[f]===u)continue e;l.push(d)}else o(t,u,n)||l.push(d)}return l}Pr.templateSettings={escape:G,evaluate:Z,interpolate:Q,variable:"",imports:{_:Pr}},Pr.prototype=Nr.prototype,Pr.prototype.constructor=Pr,Hr.prototype=Lr(Nr.prototype),Hr.prototype.constructor=Hr,Wr.prototype=Lr(Nr.prototype),Wr.prototype.constructor=Wr,Vr.prototype.clear=function(){this.__data__=Tr?Tr(null):{},this.size=0},Vr.prototype.delete=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Vr.prototype.get=function(e){var t=this.__data__;if(Tr){var n=t[e];return n===i?r:n}return Ae.call(t,e)?t[e]:r},Vr.prototype.has=function(e){var t=this.__data__;return Tr?t[e]!==r:Ae.call(t,e)},Vr.prototype.set=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Tr&&t===r?i:t,this},Yr.prototype.clear=function(){this.__data__=[],this.size=0},Yr.prototype.delete=function(e){var t=this.__data__,r=tn(t,e);return!(r<0)&&(r==t.length-1?t.pop():Xe.call(t,r,1),--this.size,!0)},Yr.prototype.get=function(e){var t=this.__data__,n=tn(t,e);return n<0?r:t[n][1]},Yr.prototype.has=function(e){return tn(this.__data__,e)>-1},Yr.prototype.set=function(e,t){var r=this.__data__,n=tn(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},Ur.prototype.clear=function(){this.size=0,this.__data__={hash:new Vr,map:new(Sr||Yr),string:new Vr}},Ur.prototype.delete=function(e){var t=co(this,e).delete(e);return this.size-=t?1:0,t},Ur.prototype.get=function(e){return co(this,e).get(e)},Ur.prototype.has=function(e){return co(this,e).has(e)},Ur.prototype.set=function(e,t){var r=co(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},Kr.prototype.add=Kr.prototype.push=function(e){return this.__data__.set(e,i),this},Kr.prototype.has=function(e){return this.__data__.has(e)},qr.prototype.clear=function(){this.__data__=new Yr,this.size=0},qr.prototype.delete=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r},qr.prototype.get=function(e){return this.__data__.get(e)},qr.prototype.has=function(e){return this.__data__.has(e)},qr.prototype.set=function(e,t){var r=this.__data__;if(r instanceof Yr){var n=r.__data__;if(!Sr||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new Ur(n)}return r.set(e,t),this.size=r.size,this};var fn=Mi(xn),hn=Mi(wn,!0);function pn(e,t){var r=!0;return fn(e,(function(e,n,i){return r=!!t(e,n,i)})),r}function gn(e,t,n){for(var i=-1,o=e.length;++i<o;){var a=e[i],s=t(a);if(null!=s&&(l===r?s==s&&!ls(s):n(s,l)))var l=s,c=a}return c}function mn(e,t){var r=[];return fn(e,(function(e,n,i){t(e,n,i)&&r.push(e)})),r}function bn(e,t,r,n,i){var o=-1,a=e.length;for(r||(r=vo),i||(i=[]);++o<a;){var s=e[o];t>0&&r(s)?t>1?bn(s,t-1,r,n,i):_t(i,s):n||(i[i.length]=s)}return i}var vn=_i(),yn=_i(!0);function xn(e,t){return e&&vn(e,t,Is)}function wn(e,t){return e&&yn(e,t,Is)}function $n(e,t){return Ot(t,(function(t){return Za(e[t])}))}function Cn(e,t){for(var n=0,i=(t=yi(t,e)).length;null!=e&&n<i;)e=e[Ro(t[n++])];return n&&n==i?e:r}function Sn(e,t,r){var n=t(e);return Va(e)?n:_t(n,r(e))}function jn(e){return null==e?e===r?"[object Undefined]":"[object Null]":et&&et in ke(e)?function(e){var t=Ae.call(e,et),n=e[et];try{e[et]=r;var i=!0}catch(e){}var o=ze.call(e);i&&(t?e[et]=n:delete e[et]);return o}(e):function(e){return ze.call(e)}(e)}function kn(e,t){return e>t}function Dn(e,t){return null!=e&&Ae.call(e,t)}function Tn(e,t){return null!=e&&t in ke(e)}function En(e,t,n){for(var i=n?Ft:It,o=e[0].length,a=e.length,s=a,l=oe(a),c=1/0,d=[];s--;){var u=e[s];s&&t&&(u=Mt(u,Zt(t))),c=vr(u.length,c),l[s]=!n&&(t||o>=120&&u.length>=120)?new Kr(s&&u):r}u=e[0];var f=-1,h=l[0];e:for(;++f<o&&d.length<c;){var p=u[f],g=t?t(p):p;if(p=n||0!==p?p:0,!(h?Jt(h,g):i(d,g,n))){for(s=a;--s;){var m=l[s];if(!(m?Jt(m,g):i(e[s],g,n)))continue e}h&&h.push(g),d.push(p)}}return d}function On(e,t,n){var i=null==(e=To(e,t=yi(t,e)))?e:e[Ro(Go(t))];return null==i?r:jt(i,e,n)}function In(e){return ts(e)&&jn(e)==m}function Fn(e,t,n,i,o){return e===t||(null==e||null==t||!ts(e)&&!ts(t)?e!=e&&t!=t:function(e,t,n,i,o,a){var s=Va(e),l=Va(t),c=s?b:go(e),d=l?b:go(t),u=(c=c==m?j:c)==j,f=(d=d==m?j:d)==j,h=c==d;if(h&&qa(e)){if(!qa(t))return!1;s=!0,u=!1}if(h&&!u)return a||(a=new qr),s||cs(e)?to(e,t,n,i,o,a):function(e,t,r,n,i,o,a){switch(r){case M:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case F:return!(e.byteLength!=t.byteLength||!o(new Ve(e),new Ve(t)));case v:case y:case S:return La(+e,+t);case x:return e.name==t.name&&e.message==t.message;case D:case E:return e==t+"";case C:var s=ar;case T:var l=1&n;if(s||(s=cr),e.size!=t.size&&!l)return!1;var c=a.get(e);if(c)return c==t;n|=2,a.set(e,t);var d=to(s(e),s(t),n,i,o,a);return a.delete(e),d;case O:if(Rr)return Rr.call(e)==Rr.call(t)}return!1}(e,t,c,n,i,o,a);if(!(1&n)){var p=u&&Ae.call(e,"__wrapped__"),g=f&&Ae.call(t,"__wrapped__");if(p||g){var w=p?e.value():e,$=g?t.value():t;return a||(a=new qr),o(w,$,n,i,a)}}if(!h)return!1;return a||(a=new qr),function(e,t,n,i,o,a){var s=1&n,l=no(e),c=l.length,d=no(t),u=d.length;if(c!=u&&!s)return!1;var f=c;for(;f--;){var h=l[f];if(!(s?h in t:Ae.call(t,h)))return!1}var p=a.get(e),g=a.get(t);if(p&&g)return p==t&&g==e;var m=!0;a.set(e,t),a.set(t,e);var b=s;for(;++f<c;){var v=e[h=l[f]],y=t[h];if(i)var x=s?i(y,v,h,t,e,a):i(v,y,h,e,t,a);if(!(x===r?v===y||o(v,y,n,i,a):x)){m=!1;break}b||(b="constructor"==h)}if(m&&!b){var w=e.constructor,$=t.constructor;w==$||!("constructor"in e)||!("constructor"in t)||"function"==typeof w&&w instanceof w&&"function"==typeof $&&$ instanceof $||(m=!1)}return a.delete(e),a.delete(t),m}(e,t,n,i,o,a)}(e,t,n,i,Fn,o))}function Mn(e,t,n,i){var o=n.length,a=o,s=!i;if(null==e)return!a;for(e=ke(e);o--;){var l=n[o];if(s&&l[2]?l[1]!==e[l[0]]:!(l[0]in e))return!1}for(;++o<a;){var c=(l=n[o])[0],d=e[c],u=l[1];if(s&&l[2]){if(d===r&&!(c in e))return!1}else{var f=new qr;if(i)var h=i(d,u,c,e,t,f);if(!(h===r?Fn(u,d,3,i,f):h))return!1}}return!0}function _n(e){return!(!es(e)||(t=e,Re&&Re in t))&&(Za(e)?Ne:me).test(zo(e));var t}function An(e){return"function"==typeof e?e:null==e?nl:"object"==typeof e?Va(e)?Nn(e[0],e[1]):Ln(e):fl(e)}function Bn(e){if(!So(e))return mr(e);var t=[];for(var r in ke(e))Ae.call(e,r)&&"constructor"!=r&&t.push(r);return t}function Rn(e){if(!es(e))return function(e){var t=[];if(null!=e)for(var r in ke(e))t.push(r);return t}(e);var t=So(e),r=[];for(var n in e)("constructor"!=n||!t&&Ae.call(e,n))&&r.push(n);return r}function zn(e,t){return e<t}function Pn(e,t){var r=-1,n=Ua(e)?oe(e.length):[];return fn(e,(function(e,i,o){n[++r]=t(e,i,o)})),n}function Ln(e){var t=uo(e);return 1==t.length&&t[0][2]?ko(t[0][0],t[0][1]):function(r){return r===e||Mn(r,e,t)}}function Nn(e,t){return wo(e)&&jo(t)?ko(Ro(e),t):function(n){var i=ks(n,e);return i===r&&i===t?Ds(n,e):Fn(t,i,3)}}function Hn(e,t,n,i,o){e!==t&&vn(t,(function(a,s){if(o||(o=new qr),es(a))!function(e,t,n,i,o,a,s){var l=Eo(e,n),c=Eo(t,n),d=s.get(c);if(d)return void Jr(e,n,d);var u=a?a(l,c,n+"",e,t,s):r,f=u===r;if(f){var h=Va(c),p=!h&&qa(c),g=!h&&!p&&cs(c);u=c,h||p||g?Va(l)?u=l:Ka(l)?u=Ei(l):p?(f=!1,u=Ci(c,!0)):g?(f=!1,u=ji(c,!0)):u=[]:is(c)||Wa(c)?(u=l,Wa(l)?u=bs(l):es(l)&&!Za(l)||(u=bo(c))):f=!1}f&&(s.set(c,u),o(u,c,i,a,s),s.delete(c));Jr(e,n,u)}(e,t,s,n,Hn,i,o);else{var l=i?i(Eo(e,s),a,s+"",e,t,o):r;l===r&&(l=a),Jr(e,s,l)}}),Fs)}function Wn(e,t){var n=e.length;if(n)return yo(t+=t<0?n:0,n)?e[t]:r}function Vn(e,t,r){t=t.length?Mt(t,(function(e){return Va(e)?function(t){return Cn(t,1===e.length?e[0]:e)}:e})):[nl];var n=-1;t=Mt(t,Zt(lo()));var i=Pn(e,(function(e,r,i){var o=Mt(t,(function(t){return t(e)}));return{criteria:o,index:++n,value:e}}));return function(e,t){var r=e.length;for(e.sort(t);r--;)e[r]=e[r].value;return e}(i,(function(e,t){return function(e,t,r){var n=-1,i=e.criteria,o=t.criteria,a=i.length,s=r.length;for(;++n<a;){var l=ki(i[n],o[n]);if(l)return n>=s?l:l*("desc"==r[n]?-1:1)}return e.index-t.index}(e,t,r)}))}function Yn(e,t,r){for(var n=-1,i=t.length,o={};++n<i;){var a=t[n],s=Cn(e,a);r(s,a)&&Jn(o,yi(a,e),s)}return o}function Un(e,t,r,n){var i=n?Ht:Nt,o=-1,a=t.length,s=e;for(e===t&&(t=Ei(t)),r&&(s=Mt(e,Zt(r)));++o<a;)for(var l=0,c=t[o],d=r?r(c):c;(l=i(s,d,l,n))>-1;)s!==e&&Xe.call(s,l,1),Xe.call(e,l,1);return e}function Kn(e,t){for(var r=e?t.length:0,n=r-1;r--;){var i=t[r];if(r==n||i!==o){var o=i;yo(i)?Xe.call(e,i,1):ui(e,i)}}return e}function qn(e,t){return e+gt(wr()*(t-e+1))}function Xn(e,t){var r="";if(!e||t<1||t>f)return r;do{t%2&&(r+=e),(t=gt(t/2))&&(e+=e)}while(t);return r}function Gn(e,t){return Fo(Do(e,t,nl),e+"")}function Zn(e){return Gr(Ls(e))}function Qn(e,t){var r=Ls(e);return Ao(r,sn(t,0,r.length))}function Jn(e,t,n,i){if(!es(e))return e;for(var o=-1,a=(t=yi(t,e)).length,s=a-1,l=e;null!=l&&++o<a;){var c=Ro(t[o]),d=n;if("__proto__"===c||"constructor"===c||"prototype"===c)return e;if(o!=s){var u=l[c];(d=i?i(u,c,l):r)===r&&(d=es(u)?u:yo(t[o+1])?[]:{})}en(l,c,d),l=l[c]}return e}var ei=Er?function(e,t){return Er.set(e,t),e}:nl,ti=rt?function(e,t){return rt(e,"toString",{configurable:!0,enumerable:!1,value:el(t),writable:!0})}:nl;function ri(e){return Ao(Ls(e))}function ni(e,t,r){var n=-1,i=e.length;t<0&&(t=-t>i?0:i+t),(r=r>i?i:r)<0&&(r+=i),i=t>r?0:r-t>>>0,t>>>=0;for(var o=oe(i);++n<i;)o[n]=e[n+t];return o}function ii(e,t){var r;return fn(e,(function(e,n,i){return!(r=t(e,n,i))})),!!r}function oi(e,t,r){var n=0,i=null==e?n:e.length;if("number"==typeof t&&t==t&&i<=2147483647){for(;n<i;){var o=n+i>>>1,a=e[o];null!==a&&!ls(a)&&(r?a<=t:a<t)?n=o+1:i=o}return i}return ai(e,t,nl,r)}function ai(e,t,n,i){var o=0,a=null==e?0:e.length;if(0===a)return 0;for(var s=(t=n(t))!=t,l=null===t,c=ls(t),d=t===r;o<a;){var u=gt((o+a)/2),f=n(e[u]),h=f!==r,p=null===f,g=f==f,m=ls(f);if(s)var b=i||g;else b=d?g&&(i||h):l?g&&h&&(i||!p):c?g&&h&&!p&&(i||!m):!p&&!m&&(i?f<=t:f<t);b?o=u+1:a=u}return vr(a,4294967294)}function si(e,t){for(var r=-1,n=e.length,i=0,o=[];++r<n;){var a=e[r],s=t?t(a):a;if(!r||!La(s,l)){var l=s;o[i++]=0===a?0:a}}return o}function li(e){return"number"==typeof e?e:ls(e)?h:+e}function ci(e){if("string"==typeof e)return e;if(Va(e))return Mt(e,ci)+"";if(ls(e))return zr?zr.call(e):"";var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function di(e,t,r){var n=-1,i=It,o=e.length,a=!0,s=[],l=s;if(r)a=!1,i=Ft;else if(o>=200){var c=t?null:Xi(e);if(c)return cr(c);a=!1,i=Jt,l=new Kr}else l=t?[]:s;e:for(;++n<o;){var d=e[n],u=t?t(d):d;if(d=r||0!==d?d:0,a&&u==u){for(var f=l.length;f--;)if(l[f]===u)continue e;t&&l.push(u),s.push(d)}else i(l,u,r)||(l!==s&&l.push(u),s.push(d))}return s}function ui(e,t){return null==(e=To(e,t=yi(t,e)))||delete e[Ro(Go(t))]}function fi(e,t,r,n){return Jn(e,t,r(Cn(e,t)),n)}function hi(e,t,r,n){for(var i=e.length,o=n?i:-1;(n?o--:++o<i)&&t(e[o],o,e););return r?ni(e,n?0:o,n?o+1:i):ni(e,n?o+1:0,n?i:o)}function pi(e,t){var r=e;return r instanceof Wr&&(r=r.value()),At(t,(function(e,t){return t.func.apply(t.thisArg,_t([e],t.args))}),r)}function gi(e,t,r){var n=e.length;if(n<2)return n?di(e[0]):[];for(var i=-1,o=oe(n);++i<n;)for(var a=e[i],s=-1;++s<n;)s!=i&&(o[i]=un(o[i]||a,e[s],t,r));return di(bn(o,1),t,r)}function mi(e,t,n){for(var i=-1,o=e.length,a=t.length,s={};++i<o;){var l=i<a?t[i]:r;n(s,e[i],l)}return s}function bi(e){return Ka(e)?e:[]}function vi(e){return"function"==typeof e?e:nl}function yi(e,t){return Va(e)?e:wo(e,t)?[e]:Bo(vs(e))}var xi=Gn;function wi(e,t,n){var i=e.length;return n=n===r?i:n,!t&&n>=i?e:ni(e,t,n)}var $i=lt||function(e){return ht.clearTimeout(e)};function Ci(e,t){if(t)return e.slice();var r=e.length,n=Ye?Ye(r):new e.constructor(r);return e.copy(n),n}function Si(e){var t=new e.constructor(e.byteLength);return new Ve(t).set(new Ve(e)),t}function ji(e,t){var r=t?Si(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}function ki(e,t){if(e!==t){var n=e!==r,i=null===e,o=e==e,a=ls(e),s=t!==r,l=null===t,c=t==t,d=ls(t);if(!l&&!d&&!a&&e>t||a&&s&&c&&!l&&!d||i&&s&&c||!n&&c||!o)return 1;if(!i&&!a&&!d&&e<t||d&&n&&o&&!i&&!a||l&&n&&o||!s&&o||!c)return-1}return 0}function Di(e,t,r,n){for(var i=-1,o=e.length,a=r.length,s=-1,l=t.length,c=br(o-a,0),d=oe(l+c),u=!n;++s<l;)d[s]=t[s];for(;++i<a;)(u||i<o)&&(d[r[i]]=e[i]);for(;c--;)d[s++]=e[i++];return d}function Ti(e,t,r,n){for(var i=-1,o=e.length,a=-1,s=r.length,l=-1,c=t.length,d=br(o-s,0),u=oe(d+c),f=!n;++i<d;)u[i]=e[i];for(var h=i;++l<c;)u[h+l]=t[l];for(;++a<s;)(f||i<o)&&(u[h+r[a]]=e[i++]);return u}function Ei(e,t){var r=-1,n=e.length;for(t||(t=oe(n));++r<n;)t[r]=e[r];return t}function Oi(e,t,n,i){var o=!n;n||(n={});for(var a=-1,s=t.length;++a<s;){var l=t[a],c=i?i(n[l],e[l],l,n,e):r;c===r&&(c=e[l]),o?on(n,l,c):en(n,l,c)}return n}function Ii(e,t){return function(r,n){var i=Va(r)?kt:rn,o=t?t():{};return i(r,e,lo(n,2),o)}}function Fi(e){return Gn((function(t,n){var i=-1,o=n.length,a=o>1?n[o-1]:r,s=o>2?n[2]:r;for(a=e.length>3&&"function"==typeof a?(o--,a):r,s&&xo(n[0],n[1],s)&&(a=o<3?r:a,o=1),t=ke(t);++i<o;){var l=n[i];l&&e(t,l,i,a)}return t}))}function Mi(e,t){return function(r,n){if(null==r)return r;if(!Ua(r))return e(r,n);for(var i=r.length,o=t?i:-1,a=ke(r);(t?o--:++o<i)&&!1!==n(a[o],o,a););return r}}function _i(e){return function(t,r,n){for(var i=-1,o=ke(t),a=n(t),s=a.length;s--;){var l=a[e?s:++i];if(!1===r(o[l],l,o))break}return t}}function Ai(e){return function(t){var n=or(t=vs(t))?fr(t):r,i=n?n[0]:t.charAt(0),o=n?wi(n,1).join(""):t.slice(1);return i[e]()+o}}function Bi(e){return function(t){return At(Zs(Ws(t).replace(Qe,"")),e,"")}}function Ri(e){return function(){var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r=Lr(e.prototype),n=e.apply(r,t);return es(n)?n:r}}function zi(e){return function(t,n,i){var o=ke(t);if(!Ua(t)){var a=lo(n,3);t=Is(t),n=function(e){return a(o[e],e,o)}}var s=e(t,n,i);return s>-1?o[a?t[s]:s]:r}}function Pi(e){return ro((function(t){var i=t.length,o=i,a=Hr.prototype.thru;for(e&&t.reverse();o--;){var s=t[o];if("function"!=typeof s)throw new Ee(n);if(a&&!l&&"wrapper"==ao(s))var l=new Hr([],!0)}for(o=l?o:i;++o<i;){var c=ao(s=t[o]),d="wrapper"==c?oo(s):r;l=d&&$o(d[0])&&424==d[1]&&!d[4].length&&1==d[9]?l[ao(d[0])].apply(l,d[3]):1==s.length&&$o(s)?l[c]():l.thru(s)}return function(){var e=arguments,r=e[0];if(l&&1==e.length&&Va(r))return l.plant(r).value();for(var n=0,o=i?t[n].apply(this,e):r;++n<i;)o=t[n].call(this,o);return o}}))}function Li(e,t,n,i,o,a,s,l,d,u){var f=t&c,h=1&t,p=2&t,g=24&t,m=512&t,b=p?r:Ri(e);return function c(){for(var v=arguments.length,y=oe(v),x=v;x--;)y[x]=arguments[x];if(g)var w=so(c),$=function(e,t){for(var r=e.length,n=0;r--;)e[r]===t&&++n;return n}(y,w);if(i&&(y=Di(y,i,o,g)),a&&(y=Ti(y,a,s,g)),v-=$,g&&v<u){var C=lr(y,w);return Ki(e,t,Li,c.placeholder,n,y,C,l,d,u-v)}var S=h?n:this,j=p?S[e]:e;return v=y.length,l?y=function(e,t){var n=e.length,i=vr(t.length,n),o=Ei(e);for(;i--;){var a=t[i];e[i]=yo(a,n)?o[a]:r}return e}(y,l):m&&v>1&&y.reverse(),f&&d<v&&(y.length=d),this&&this!==ht&&this instanceof c&&(j=b||Ri(j)),j.apply(S,y)}}function Ni(e,t){return function(r,n){return function(e,t,r,n){return xn(e,(function(e,i,o){t(n,r(e),i,o)})),n}(r,e,t(n),{})}}function Hi(e,t){return function(n,i){var o;if(n===r&&i===r)return t;if(n!==r&&(o=n),i!==r){if(o===r)return i;"string"==typeof n||"string"==typeof i?(n=ci(n),i=ci(i)):(n=li(n),i=li(i)),o=e(n,i)}return o}}function Wi(e){return ro((function(t){return t=Mt(t,Zt(lo())),Gn((function(r){var n=this;return e(t,(function(e){return jt(e,n,r)}))}))}))}function Vi(e,t){var n=(t=t===r?" ":ci(t)).length;if(n<2)return n?Xn(t,e):t;var i=Xn(t,pt(e/ur(t)));return or(t)?wi(fr(i),0,e).join(""):i.slice(0,e)}function Yi(e){return function(t,n,i){return i&&"number"!=typeof i&&xo(t,n,i)&&(n=i=r),t=hs(t),n===r?(n=t,t=0):n=hs(n),function(e,t,r,n){for(var i=-1,o=br(pt((t-e)/(r||1)),0),a=oe(o);o--;)a[n?o:++i]=e,e+=r;return a}(t,n,i=i===r?t<n?1:-1:hs(i),e)}}function Ui(e){return function(t,r){return"string"==typeof t&&"string"==typeof r||(t=ms(t),r=ms(r)),e(t,r)}}function Ki(e,t,n,i,o,a,c,d,u,f){var h=8&t;t|=h?s:l,4&(t&=~(h?l:s))||(t&=-4);var p=[e,t,o,h?a:r,h?c:r,h?r:a,h?r:c,d,u,f],g=n.apply(r,p);return $o(e)&&Oo(g,p),g.placeholder=i,Mo(g,e,t)}function qi(e){var t=je[e];return function(e,r){if(e=ms(e),(r=null==r?0:vr(ps(r),292))&&zt(e)){var n=(vs(e)+"e").split("e");return+((n=(vs(t(n[0]+"e"+(+n[1]+r)))+"e").split("e"))[0]+"e"+(+n[1]-r))}return t(e)}}var Xi=kr&&1/cr(new kr([,-0]))[1]==u?function(e){return new kr(e)}:ll;function Gi(e){return function(t){var r=go(t);return r==C?ar(t):r==T?dr(t):function(e,t){return Mt(t,(function(t){return[t,e[t]]}))}(t,e(t))}}function Zi(e,t,i,u,f,h,p,g){var m=2&t;if(!m&&"function"!=typeof e)throw new Ee(n);var b=u?u.length:0;if(b||(t&=-97,u=f=r),p=p===r?p:br(ps(p),0),g=g===r?g:ps(g),b-=f?f.length:0,t&l){var v=u,y=f;u=f=r}var x=m?r:oo(e),w=[e,t,i,u,f,v,y,h,p,g];if(x&&function(e,t){var r=e[1],n=t[1],i=r|n,a=i<131,s=n==c&&8==r||n==c&&r==d&&e[7].length<=t[8]||384==n&&t[7].length<=t[8]&&8==r;if(!a&&!s)return e;1&n&&(e[2]=t[2],i|=1&r?0:4);var l=t[3];if(l){var u=e[3];e[3]=u?Di(u,l,t[4]):l,e[4]=u?lr(e[3],o):t[4]}(l=t[5])&&(u=e[5],e[5]=u?Ti(u,l,t[6]):l,e[6]=u?lr(e[5],o):t[6]);(l=t[7])&&(e[7]=l);n&c&&(e[8]=null==e[8]?t[8]:vr(e[8],t[8]));null==e[9]&&(e[9]=t[9]);e[0]=t[0],e[1]=i}(w,x),e=w[0],t=w[1],i=w[2],u=w[3],f=w[4],!(g=w[9]=w[9]===r?m?0:e.length:br(w[9]-b,0))&&24&t&&(t&=-25),t&&1!=t)$=8==t||t==a?function(e,t,n){var i=Ri(e);return function o(){for(var a=arguments.length,s=oe(a),l=a,c=so(o);l--;)s[l]=arguments[l];var d=a<3&&s[0]!==c&&s[a-1]!==c?[]:lr(s,c);return(a-=d.length)<n?Ki(e,t,Li,o.placeholder,r,s,d,r,r,n-a):jt(this&&this!==ht&&this instanceof o?i:e,this,s)}}(e,t,g):t!=s&&33!=t||f.length?Li.apply(r,w):function(e,t,r,n){var i=1&t,o=Ri(e);return function t(){for(var a=-1,s=arguments.length,l=-1,c=n.length,d=oe(c+s),u=this&&this!==ht&&this instanceof t?o:e;++l<c;)d[l]=n[l];for(;s--;)d[l++]=arguments[++a];return jt(u,i?r:this,d)}}(e,t,i,u);else var $=function(e,t,r){var n=1&t,i=Ri(e);return function t(){return(this&&this!==ht&&this instanceof t?i:e).apply(n?r:this,arguments)}}(e,t,i);return Mo((x?ei:Oo)($,w),e,t)}function Qi(e,t,n,i){return e===r||La(e,Fe[n])&&!Ae.call(i,n)?t:e}function Ji(e,t,n,i,o,a){return es(e)&&es(t)&&(a.set(t,e),Hn(e,t,r,Ji,a),a.delete(t)),e}function eo(e){return is(e)?r:e}function to(e,t,n,i,o,a){var s=1&n,l=e.length,c=t.length;if(l!=c&&!(s&&c>l))return!1;var d=a.get(e),u=a.get(t);if(d&&u)return d==t&&u==e;var f=-1,h=!0,p=2&n?new Kr:r;for(a.set(e,t),a.set(t,e);++f<l;){var g=e[f],m=t[f];if(i)var b=s?i(m,g,f,t,e,a):i(g,m,f,e,t,a);if(b!==r){if(b)continue;h=!1;break}if(p){if(!Rt(t,(function(e,t){if(!Jt(p,t)&&(g===e||o(g,e,n,i,a)))return p.push(t)}))){h=!1;break}}else if(g!==m&&!o(g,m,n,i,a)){h=!1;break}}return a.delete(e),a.delete(t),h}function ro(e){return Fo(Do(e,r,Yo),e+"")}function no(e){return Sn(e,Is,ho)}function io(e){return Sn(e,Fs,po)}var oo=Er?function(e){return Er.get(e)}:ll;function ao(e){for(var t=e.name+"",r=Or[t],n=Ae.call(Or,t)?r.length:0;n--;){var i=r[n],o=i.func;if(null==o||o==e)return i.name}return t}function so(e){return(Ae.call(Pr,"placeholder")?Pr:e).placeholder}function lo(){var e=Pr.iteratee||il;return e=e===il?An:e,arguments.length?e(arguments[0],arguments[1]):e}function co(e,t){var r,n,i=e.__data__;return("string"==(n=typeof(r=t))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?i["string"==typeof t?"string":"hash"]:i.map}function uo(e){for(var t=Is(e),r=t.length;r--;){var n=t[r],i=e[n];t[r]=[n,i,jo(i)]}return t}function fo(e,t){var n=function(e,t){return null==e?r:e[t]}(e,t);return _n(n)?n:r}var ho=bt?function(e){return null==e?[]:(e=ke(e),Ot(bt(e),(function(t){return qe.call(e,t)})))}:gl,po=bt?function(e){for(var t=[];e;)_t(t,ho(e)),e=Ue(e);return t}:gl,go=jn;function mo(e,t,r){for(var n=-1,i=(t=yi(t,e)).length,o=!1;++n<i;){var a=Ro(t[n]);if(!(o=null!=e&&r(e,a)))break;e=e[a]}return o||++n!=i?o:!!(i=null==e?0:e.length)&&Ja(i)&&yo(a,i)&&(Va(e)||Wa(e))}function bo(e){return"function"!=typeof e.constructor||So(e)?{}:Lr(Ue(e))}function vo(e){return Va(e)||Wa(e)||!!(Ge&&e&&e[Ge])}function yo(e,t){var r=typeof e;return!!(t=null==t?f:t)&&("number"==r||"symbol"!=r&&ve.test(e))&&e>-1&&e%1==0&&e<t}function xo(e,t,r){if(!es(r))return!1;var n=typeof t;return!!("number"==n?Ua(r)&&yo(t,r.length):"string"==n&&t in r)&&La(r[t],e)}function wo(e,t){if(Va(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!ls(e))||(ee.test(e)||!J.test(e)||null!=t&&e in ke(t))}function $o(e){var t=ao(e),r=Pr[t];if("function"!=typeof r||!(t in Wr.prototype))return!1;if(e===r)return!0;var n=oo(r);return!!n&&e===n[0]}(Cr&&go(new Cr(new ArrayBuffer(1)))!=M||Sr&&go(new Sr)!=C||jr&&go(jr.resolve())!=k||kr&&go(new kr)!=T||Dr&&go(new Dr)!=I)&&(go=function(e){var t=jn(e),n=t==j?e.constructor:r,i=n?zo(n):"";if(i)switch(i){case Ir:return M;case Fr:return C;case Mr:return k;case _r:return T;case Ar:return I}return t});var Co=Me?Za:ml;function So(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Fe)}function jo(e){return e==e&&!es(e)}function ko(e,t){return function(n){return null!=n&&(n[e]===t&&(t!==r||e in ke(n)))}}function Do(e,t,n){return t=br(t===r?e.length-1:t,0),function(){for(var r=arguments,i=-1,o=br(r.length-t,0),a=oe(o);++i<o;)a[i]=r[t+i];i=-1;for(var s=oe(t+1);++i<t;)s[i]=r[i];return s[t]=n(a),jt(e,this,s)}}function To(e,t){return t.length<2?e:Cn(e,ni(t,0,-1))}function Eo(e,t){if(("constructor"!==t||"function"!=typeof e[t])&&"__proto__"!=t)return e[t]}var Oo=_o(ei),Io=ft||function(e,t){return ht.setTimeout(e,t)},Fo=_o(ti);function Mo(e,t,r){var n=t+"";return Fo(e,function(e,t){var r=t.length;if(!r)return e;var n=r-1;return t[n]=(r>1?"& ":"")+t[n],t=t.join(r>2?", ":" "),e.replace(ae,"{\n/* [wrapped with "+t+"] */\n")}(n,function(e,t){return Dt(g,(function(r){var n="_."+r[0];t&r[1]&&!It(e,n)&&e.push(n)})),e.sort()}(function(e){var t=e.match(se);return t?t[1].split(le):[]}(n),r)))}function _o(e){var t=0,n=0;return function(){var i=yr(),o=16-(i-n);if(n=i,o>0){if(++t>=800)return arguments[0]}else t=0;return e.apply(r,arguments)}}function Ao(e,t){var n=-1,i=e.length,o=i-1;for(t=t===r?i:t;++n<t;){var a=qn(n,o),s=e[a];e[a]=e[n],e[n]=s}return e.length=t,e}var Bo=function(e){var t=_a(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(te,(function(e,r,n,i){t.push(n?i.replace(ue,"$1"):r||e)})),t}));function Ro(e){if("string"==typeof e||ls(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function zo(e){if(null!=e){try{return _e.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function Po(e){if(e instanceof Wr)return e.clone();var t=new Hr(e.__wrapped__,e.__chain__);return t.__actions__=Ei(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}var Lo=Gn((function(e,t){return Ka(e)?un(e,bn(t,1,Ka,!0)):[]})),No=Gn((function(e,t){var n=Go(t);return Ka(n)&&(n=r),Ka(e)?un(e,bn(t,1,Ka,!0),lo(n,2)):[]})),Ho=Gn((function(e,t){var n=Go(t);return Ka(n)&&(n=r),Ka(e)?un(e,bn(t,1,Ka,!0),r,n):[]}));function Wo(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var i=null==r?0:ps(r);return i<0&&(i=br(n+i,0)),Lt(e,lo(t,3),i)}function Vo(e,t,n){var i=null==e?0:e.length;if(!i)return-1;var o=i-1;return n!==r&&(o=ps(n),o=n<0?br(i+o,0):vr(o,i-1)),Lt(e,lo(t,3),o,!0)}function Yo(e){return(null==e?0:e.length)?bn(e,1):[]}function Uo(e){return e&&e.length?e[0]:r}var Ko=Gn((function(e){var t=Mt(e,bi);return t.length&&t[0]===e[0]?En(t):[]})),qo=Gn((function(e){var t=Go(e),n=Mt(e,bi);return t===Go(n)?t=r:n.pop(),n.length&&n[0]===e[0]?En(n,lo(t,2)):[]})),Xo=Gn((function(e){var t=Go(e),n=Mt(e,bi);return(t="function"==typeof t?t:r)&&n.pop(),n.length&&n[0]===e[0]?En(n,r,t):[]}));function Go(e){var t=null==e?0:e.length;return t?e[t-1]:r}var Zo=Gn(Qo);function Qo(e,t){return e&&e.length&&t&&t.length?Un(e,t):e}var Jo=ro((function(e,t){var r=null==e?0:e.length,n=an(e,t);return Kn(e,Mt(t,(function(e){return yo(e,r)?+e:e})).sort(ki)),n}));function ea(e){return null==e?e:$r.call(e)}var ta=Gn((function(e){return di(bn(e,1,Ka,!0))})),ra=Gn((function(e){var t=Go(e);return Ka(t)&&(t=r),di(bn(e,1,Ka,!0),lo(t,2))})),na=Gn((function(e){var t=Go(e);return t="function"==typeof t?t:r,di(bn(e,1,Ka,!0),r,t)}));function ia(e){if(!e||!e.length)return[];var t=0;return e=Ot(e,(function(e){if(Ka(e))return t=br(e.length,t),!0})),Xt(t,(function(t){return Mt(e,Yt(t))}))}function oa(e,t){if(!e||!e.length)return[];var n=ia(e);return null==t?n:Mt(n,(function(e){return jt(t,r,e)}))}var aa=Gn((function(e,t){return Ka(e)?un(e,t):[]})),sa=Gn((function(e){return gi(Ot(e,Ka))})),la=Gn((function(e){var t=Go(e);return Ka(t)&&(t=r),gi(Ot(e,Ka),lo(t,2))})),ca=Gn((function(e){var t=Go(e);return t="function"==typeof t?t:r,gi(Ot(e,Ka),r,t)})),da=Gn(ia);var ua=Gn((function(e){var t=e.length,n=t>1?e[t-1]:r;return n="function"==typeof n?(e.pop(),n):r,oa(e,n)}));function fa(e){var t=Pr(e);return t.__chain__=!0,t}function ha(e,t){return t(e)}var pa=ro((function(e){var t=e.length,n=t?e[0]:0,i=this.__wrapped__,o=function(t){return an(t,e)};return!(t>1||this.__actions__.length)&&i instanceof Wr&&yo(n)?((i=i.slice(n,+n+(t?1:0))).__actions__.push({func:ha,args:[o],thisArg:r}),new Hr(i,this.__chain__).thru((function(e){return t&&!e.length&&e.push(r),e}))):this.thru(o)}));var ga=Ii((function(e,t,r){Ae.call(e,r)?++e[r]:on(e,r,1)}));var ma=zi(Wo),ba=zi(Vo);function va(e,t){return(Va(e)?Dt:fn)(e,lo(t,3))}function ya(e,t){return(Va(e)?Tt:hn)(e,lo(t,3))}var xa=Ii((function(e,t,r){Ae.call(e,r)?e[r].push(t):on(e,r,[t])}));var wa=Gn((function(e,t,r){var n=-1,i="function"==typeof t,o=Ua(e)?oe(e.length):[];return fn(e,(function(e){o[++n]=i?jt(t,e,r):On(e,t,r)})),o})),$a=Ii((function(e,t,r){on(e,r,t)}));function Ca(e,t){return(Va(e)?Mt:Pn)(e,lo(t,3))}var Sa=Ii((function(e,t,r){e[r?0:1].push(t)}),(function(){return[[],[]]}));var ja=Gn((function(e,t){if(null==e)return[];var r=t.length;return r>1&&xo(e,t[0],t[1])?t=[]:r>2&&xo(t[0],t[1],t[2])&&(t=[t[0]]),Vn(e,bn(t,1),[])})),ka=ut||function(){return ht.Date.now()};function Da(e,t,n){return t=n?r:t,t=e&&null==t?e.length:t,Zi(e,c,r,r,r,r,t)}function Ta(e,t){var i;if("function"!=typeof t)throw new Ee(n);return e=ps(e),function(){return--e>0&&(i=t.apply(this,arguments)),e<=1&&(t=r),i}}var Ea=Gn((function(e,t,r){var n=1;if(r.length){var i=lr(r,so(Ea));n|=s}return Zi(e,n,t,r,i)})),Oa=Gn((function(e,t,r){var n=3;if(r.length){var i=lr(r,so(Oa));n|=s}return Zi(t,n,e,r,i)}));function Ia(e,t,i){var o,a,s,l,c,d,u=0,f=!1,h=!1,p=!0;if("function"!=typeof e)throw new Ee(n);function g(t){var n=o,i=a;return o=a=r,u=t,l=e.apply(i,n)}function m(e){var n=e-d;return d===r||n>=t||n<0||h&&e-u>=s}function b(){var e=ka();if(m(e))return v(e);c=Io(b,function(e){var r=t-(e-d);return h?vr(r,s-(e-u)):r}(e))}function v(e){return c=r,p&&o?g(e):(o=a=r,l)}function y(){var e=ka(),n=m(e);if(o=arguments,a=this,d=e,n){if(c===r)return function(e){return u=e,c=Io(b,t),f?g(e):l}(d);if(h)return $i(c),c=Io(b,t),g(d)}return c===r&&(c=Io(b,t)),l}return t=ms(t)||0,es(i)&&(f=!!i.leading,s=(h="maxWait"in i)?br(ms(i.maxWait)||0,t):s,p="trailing"in i?!!i.trailing:p),y.cancel=function(){c!==r&&$i(c),u=0,o=d=a=c=r},y.flush=function(){return c===r?l:v(ka())},y}var Fa=Gn((function(e,t){return dn(e,1,t)})),Ma=Gn((function(e,t,r){return dn(e,ms(t)||0,r)}));function _a(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new Ee(n);var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],o=r.cache;if(o.has(i))return o.get(i);var a=e.apply(this,n);return r.cache=o.set(i,a)||o,a};return r.cache=new(_a.Cache||Ur),r}function Aa(e){if("function"!=typeof e)throw new Ee(n);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}_a.Cache=Ur;var Ba=xi((function(e,t){var r=(t=1==t.length&&Va(t[0])?Mt(t[0],Zt(lo())):Mt(bn(t,1),Zt(lo()))).length;return Gn((function(n){for(var i=-1,o=vr(n.length,r);++i<o;)n[i]=t[i].call(this,n[i]);return jt(e,this,n)}))})),Ra=Gn((function(e,t){var n=lr(t,so(Ra));return Zi(e,s,r,t,n)})),za=Gn((function(e,t){var n=lr(t,so(za));return Zi(e,l,r,t,n)})),Pa=ro((function(e,t){return Zi(e,d,r,r,r,t)}));function La(e,t){return e===t||e!=e&&t!=t}var Na=Ui(kn),Ha=Ui((function(e,t){return e>=t})),Wa=In(function(){return arguments}())?In:function(e){return ts(e)&&Ae.call(e,"callee")&&!qe.call(e,"callee")},Va=oe.isArray,Ya=yt?Zt(yt):function(e){return ts(e)&&jn(e)==F};function Ua(e){return null!=e&&Ja(e.length)&&!Za(e)}function Ka(e){return ts(e)&&Ua(e)}var qa=vt||ml,Xa=xt?Zt(xt):function(e){return ts(e)&&jn(e)==y};function Ga(e){if(!ts(e))return!1;var t=jn(e);return t==x||"[object DOMException]"==t||"string"==typeof e.message&&"string"==typeof e.name&&!is(e)}function Za(e){if(!es(e))return!1;var t=jn(e);return t==w||t==$||"[object AsyncFunction]"==t||"[object Proxy]"==t}function Qa(e){return"number"==typeof e&&e==ps(e)}function Ja(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=f}function es(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}function ts(e){return null!=e&&"object"==typeof e}var rs=wt?Zt(wt):function(e){return ts(e)&&go(e)==C};function ns(e){return"number"==typeof e||ts(e)&&jn(e)==S}function is(e){if(!ts(e)||jn(e)!=j)return!1;var t=Ue(e);if(null===t)return!0;var r=Ae.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&_e.call(r)==Pe}var os=$t?Zt($t):function(e){return ts(e)&&jn(e)==D};var as=Ct?Zt(Ct):function(e){return ts(e)&&go(e)==T};function ss(e){return"string"==typeof e||!Va(e)&&ts(e)&&jn(e)==E}function ls(e){return"symbol"==typeof e||ts(e)&&jn(e)==O}var cs=St?Zt(St):function(e){return ts(e)&&Ja(e.length)&&!!at[jn(e)]};var ds=Ui(zn),us=Ui((function(e,t){return e<=t}));function fs(e){if(!e)return[];if(Ua(e))return ss(e)?fr(e):Ei(e);if(Ze&&e[Ze])return function(e){for(var t,r=[];!(t=e.next()).done;)r.push(t.value);return r}(e[Ze]());var t=go(e);return(t==C?ar:t==T?cr:Ls)(e)}function hs(e){return e?(e=ms(e))===u||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}function ps(e){var t=hs(e),r=t%1;return t==t?r?t-r:t:0}function gs(e){return e?sn(ps(e),0,p):0}function ms(e){if("number"==typeof e)return e;if(ls(e))return h;if(es(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=es(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Gt(e);var r=ge.test(e);return r||be.test(e)?dt(e.slice(2),r?2:8):pe.test(e)?h:+e}function bs(e){return Oi(e,Fs(e))}function vs(e){return null==e?"":ci(e)}var ys=Fi((function(e,t){if(So(t)||Ua(t))Oi(t,Is(t),e);else for(var r in t)Ae.call(t,r)&&en(e,r,t[r])})),xs=Fi((function(e,t){Oi(t,Fs(t),e)})),ws=Fi((function(e,t,r,n){Oi(t,Fs(t),e,n)})),$s=Fi((function(e,t,r,n){Oi(t,Is(t),e,n)})),Cs=ro(an);var Ss=Gn((function(e,t){e=ke(e);var n=-1,i=t.length,o=i>2?t[2]:r;for(o&&xo(t[0],t[1],o)&&(i=1);++n<i;)for(var a=t[n],s=Fs(a),l=-1,c=s.length;++l<c;){var d=s[l],u=e[d];(u===r||La(u,Fe[d])&&!Ae.call(e,d))&&(e[d]=a[d])}return e})),js=Gn((function(e){return e.push(r,Ji),jt(_s,r,e)}));function ks(e,t,n){var i=null==e?r:Cn(e,t);return i===r?n:i}function Ds(e,t){return null!=e&&mo(e,t,Tn)}var Ts=Ni((function(e,t,r){null!=t&&"function"!=typeof t.toString&&(t=ze.call(t)),e[t]=r}),el(nl)),Es=Ni((function(e,t,r){null!=t&&"function"!=typeof t.toString&&(t=ze.call(t)),Ae.call(e,t)?e[t].push(r):e[t]=[r]}),lo),Os=Gn(On);function Is(e){return Ua(e)?Xr(e):Bn(e)}function Fs(e){return Ua(e)?Xr(e,!0):Rn(e)}var Ms=Fi((function(e,t,r){Hn(e,t,r)})),_s=Fi((function(e,t,r,n){Hn(e,t,r,n)})),As=ro((function(e,t){var r={};if(null==e)return r;var n=!1;t=Mt(t,(function(t){return t=yi(t,e),n||(n=t.length>1),t})),Oi(e,io(e),r),n&&(r=ln(r,7,eo));for(var i=t.length;i--;)ui(r,t[i]);return r}));var Bs=ro((function(e,t){return null==e?{}:function(e,t){return Yn(e,t,(function(t,r){return Ds(e,r)}))}(e,t)}));function Rs(e,t){if(null==e)return{};var r=Mt(io(e),(function(e){return[e]}));return t=lo(t),Yn(e,r,(function(e,r){return t(e,r[0])}))}var zs=Gi(Is),Ps=Gi(Fs);function Ls(e){return null==e?[]:Qt(e,Is(e))}var Ns=Bi((function(e,t,r){return t=t.toLowerCase(),e+(r?Hs(t):t)}));function Hs(e){return Gs(vs(e).toLowerCase())}function Ws(e){return(e=vs(e))&&e.replace(ye,rr).replace(Je,"")}var Vs=Bi((function(e,t,r){return e+(r?"-":"")+t.toLowerCase()})),Ys=Bi((function(e,t,r){return e+(r?" ":"")+t.toLowerCase()})),Us=Ai("toLowerCase");var Ks=Bi((function(e,t,r){return e+(r?"_":"")+t.toLowerCase()}));var qs=Bi((function(e,t,r){return e+(r?" ":"")+Gs(t)}));var Xs=Bi((function(e,t,r){return e+(r?" ":"")+t.toUpperCase()})),Gs=Ai("toUpperCase");function Zs(e,t,n){return e=vs(e),(t=n?r:t)===r?function(e){return nt.test(e)}(e)?function(e){return e.match(tt)||[]}(e):function(e){return e.match(ce)||[]}(e):e.match(t)||[]}var Qs=Gn((function(e,t){try{return jt(e,r,t)}catch(e){return Ga(e)?e:new Ce(e)}})),Js=ro((function(e,t){return Dt(t,(function(t){t=Ro(t),on(e,t,Ea(e[t],e))})),e}));function el(e){return function(){return e}}var tl=Pi(),rl=Pi(!0);function nl(e){return e}function il(e){return An("function"==typeof e?e:ln(e,1))}var ol=Gn((function(e,t){return function(r){return On(r,e,t)}})),al=Gn((function(e,t){return function(r){return On(e,r,t)}}));function sl(e,t,r){var n=Is(t),i=$n(t,n);null!=r||es(t)&&(i.length||!n.length)||(r=t,t=e,e=this,i=$n(t,Is(t)));var o=!(es(r)&&"chain"in r&&!r.chain),a=Za(e);return Dt(i,(function(r){var n=t[r];e[r]=n,a&&(e.prototype[r]=function(){var t=this.__chain__;if(o||t){var r=e(this.__wrapped__);return(r.__actions__=Ei(this.__actions__)).push({func:n,args:arguments,thisArg:e}),r.__chain__=t,r}return n.apply(e,_t([this.value()],arguments))})})),e}function ll(){}var cl=Wi(Mt),dl=Wi(Et),ul=Wi(Rt);function fl(e){return wo(e)?Yt(Ro(e)):function(e){return function(t){return Cn(t,e)}}(e)}var hl=Yi(),pl=Yi(!0);function gl(){return[]}function ml(){return!1}var bl=Hi((function(e,t){return e+t}),0),vl=qi("ceil"),yl=Hi((function(e,t){return e/t}),1),xl=qi("floor");var wl,$l=Hi((function(e,t){return e*t}),1),Cl=qi("round"),Sl=Hi((function(e,t){return e-t}),0);return Pr.after=function(e,t){if("function"!=typeof t)throw new Ee(n);return e=ps(e),function(){if(--e<1)return t.apply(this,arguments)}},Pr.ary=Da,Pr.assign=ys,Pr.assignIn=xs,Pr.assignInWith=ws,Pr.assignWith=$s,Pr.at=Cs,Pr.before=Ta,Pr.bind=Ea,Pr.bindAll=Js,Pr.bindKey=Oa,Pr.castArray=function(){if(!arguments.length)return[];var e=arguments[0];return Va(e)?e:[e]},Pr.chain=fa,Pr.chunk=function(e,t,n){t=(n?xo(e,t,n):t===r)?1:br(ps(t),0);var i=null==e?0:e.length;if(!i||t<1)return[];for(var o=0,a=0,s=oe(pt(i/t));o<i;)s[a++]=ni(e,o,o+=t);return s},Pr.compact=function(e){for(var t=-1,r=null==e?0:e.length,n=0,i=[];++t<r;){var o=e[t];o&&(i[n++]=o)}return i},Pr.concat=function(){var e=arguments.length;if(!e)return[];for(var t=oe(e-1),r=arguments[0],n=e;n--;)t[n-1]=arguments[n];return _t(Va(r)?Ei(r):[r],bn(t,1))},Pr.cond=function(e){var t=null==e?0:e.length,r=lo();return e=t?Mt(e,(function(e){if("function"!=typeof e[1])throw new Ee(n);return[r(e[0]),e[1]]})):[],Gn((function(r){for(var n=-1;++n<t;){var i=e[n];if(jt(i[0],this,r))return jt(i[1],this,r)}}))},Pr.conforms=function(e){return function(e){var t=Is(e);return function(r){return cn(r,e,t)}}(ln(e,1))},Pr.constant=el,Pr.countBy=ga,Pr.create=function(e,t){var r=Lr(e);return null==t?r:nn(r,t)},Pr.curry=function e(t,n,i){var o=Zi(t,8,r,r,r,r,r,n=i?r:n);return o.placeholder=e.placeholder,o},Pr.curryRight=function e(t,n,i){var o=Zi(t,a,r,r,r,r,r,n=i?r:n);return o.placeholder=e.placeholder,o},Pr.debounce=Ia,Pr.defaults=Ss,Pr.defaultsDeep=js,Pr.defer=Fa,Pr.delay=Ma,Pr.difference=Lo,Pr.differenceBy=No,Pr.differenceWith=Ho,Pr.drop=function(e,t,n){var i=null==e?0:e.length;return i?ni(e,(t=n||t===r?1:ps(t))<0?0:t,i):[]},Pr.dropRight=function(e,t,n){var i=null==e?0:e.length;return i?ni(e,0,(t=i-(t=n||t===r?1:ps(t)))<0?0:t):[]},Pr.dropRightWhile=function(e,t){return e&&e.length?hi(e,lo(t,3),!0,!0):[]},Pr.dropWhile=function(e,t){return e&&e.length?hi(e,lo(t,3),!0):[]},Pr.fill=function(e,t,n,i){var o=null==e?0:e.length;return o?(n&&"number"!=typeof n&&xo(e,t,n)&&(n=0,i=o),function(e,t,n,i){var o=e.length;for((n=ps(n))<0&&(n=-n>o?0:o+n),(i=i===r||i>o?o:ps(i))<0&&(i+=o),i=n>i?0:gs(i);n<i;)e[n++]=t;return e}(e,t,n,i)):[]},Pr.filter=function(e,t){return(Va(e)?Ot:mn)(e,lo(t,3))},Pr.flatMap=function(e,t){return bn(Ca(e,t),1)},Pr.flatMapDeep=function(e,t){return bn(Ca(e,t),u)},Pr.flatMapDepth=function(e,t,n){return n=n===r?1:ps(n),bn(Ca(e,t),n)},Pr.flatten=Yo,Pr.flattenDeep=function(e){return(null==e?0:e.length)?bn(e,u):[]},Pr.flattenDepth=function(e,t){return(null==e?0:e.length)?bn(e,t=t===r?1:ps(t)):[]},Pr.flip=function(e){return Zi(e,512)},Pr.flow=tl,Pr.flowRight=rl,Pr.fromPairs=function(e){for(var t=-1,r=null==e?0:e.length,n={};++t<r;){var i=e[t];n[i[0]]=i[1]}return n},Pr.functions=function(e){return null==e?[]:$n(e,Is(e))},Pr.functionsIn=function(e){return null==e?[]:$n(e,Fs(e))},Pr.groupBy=xa,Pr.initial=function(e){return(null==e?0:e.length)?ni(e,0,-1):[]},Pr.intersection=Ko,Pr.intersectionBy=qo,Pr.intersectionWith=Xo,Pr.invert=Ts,Pr.invertBy=Es,Pr.invokeMap=wa,Pr.iteratee=il,Pr.keyBy=$a,Pr.keys=Is,Pr.keysIn=Fs,Pr.map=Ca,Pr.mapKeys=function(e,t){var r={};return t=lo(t,3),xn(e,(function(e,n,i){on(r,t(e,n,i),e)})),r},Pr.mapValues=function(e,t){var r={};return t=lo(t,3),xn(e,(function(e,n,i){on(r,n,t(e,n,i))})),r},Pr.matches=function(e){return Ln(ln(e,1))},Pr.matchesProperty=function(e,t){return Nn(e,ln(t,1))},Pr.memoize=_a,Pr.merge=Ms,Pr.mergeWith=_s,Pr.method=ol,Pr.methodOf=al,Pr.mixin=sl,Pr.negate=Aa,Pr.nthArg=function(e){return e=ps(e),Gn((function(t){return Wn(t,e)}))},Pr.omit=As,Pr.omitBy=function(e,t){return Rs(e,Aa(lo(t)))},Pr.once=function(e){return Ta(2,e)},Pr.orderBy=function(e,t,n,i){return null==e?[]:(Va(t)||(t=null==t?[]:[t]),Va(n=i?r:n)||(n=null==n?[]:[n]),Vn(e,t,n))},Pr.over=cl,Pr.overArgs=Ba,Pr.overEvery=dl,Pr.overSome=ul,Pr.partial=Ra,Pr.partialRight=za,Pr.partition=Sa,Pr.pick=Bs,Pr.pickBy=Rs,Pr.property=fl,Pr.propertyOf=function(e){return function(t){return null==e?r:Cn(e,t)}},Pr.pull=Zo,Pr.pullAll=Qo,Pr.pullAllBy=function(e,t,r){return e&&e.length&&t&&t.length?Un(e,t,lo(r,2)):e},Pr.pullAllWith=function(e,t,n){return e&&e.length&&t&&t.length?Un(e,t,r,n):e},Pr.pullAt=Jo,Pr.range=hl,Pr.rangeRight=pl,Pr.rearg=Pa,Pr.reject=function(e,t){return(Va(e)?Ot:mn)(e,Aa(lo(t,3)))},Pr.remove=function(e,t){var r=[];if(!e||!e.length)return r;var n=-1,i=[],o=e.length;for(t=lo(t,3);++n<o;){var a=e[n];t(a,n,e)&&(r.push(a),i.push(n))}return Kn(e,i),r},Pr.rest=function(e,t){if("function"!=typeof e)throw new Ee(n);return Gn(e,t=t===r?t:ps(t))},Pr.reverse=ea,Pr.sampleSize=function(e,t,n){return t=(n?xo(e,t,n):t===r)?1:ps(t),(Va(e)?Zr:Qn)(e,t)},Pr.set=function(e,t,r){return null==e?e:Jn(e,t,r)},Pr.setWith=function(e,t,n,i){return i="function"==typeof i?i:r,null==e?e:Jn(e,t,n,i)},Pr.shuffle=function(e){return(Va(e)?Qr:ri)(e)},Pr.slice=function(e,t,n){var i=null==e?0:e.length;return i?(n&&"number"!=typeof n&&xo(e,t,n)?(t=0,n=i):(t=null==t?0:ps(t),n=n===r?i:ps(n)),ni(e,t,n)):[]},Pr.sortBy=ja,Pr.sortedUniq=function(e){return e&&e.length?si(e):[]},Pr.sortedUniqBy=function(e,t){return e&&e.length?si(e,lo(t,2)):[]},Pr.split=function(e,t,n){return n&&"number"!=typeof n&&xo(e,t,n)&&(t=n=r),(n=n===r?p:n>>>0)?(e=vs(e))&&("string"==typeof t||null!=t&&!os(t))&&!(t=ci(t))&&or(e)?wi(fr(e),0,n):e.split(t,n):[]},Pr.spread=function(e,t){if("function"!=typeof e)throw new Ee(n);return t=null==t?0:br(ps(t),0),Gn((function(r){var n=r[t],i=wi(r,0,t);return n&&_t(i,n),jt(e,this,i)}))},Pr.tail=function(e){var t=null==e?0:e.length;return t?ni(e,1,t):[]},Pr.take=function(e,t,n){return e&&e.length?ni(e,0,(t=n||t===r?1:ps(t))<0?0:t):[]},Pr.takeRight=function(e,t,n){var i=null==e?0:e.length;return i?ni(e,(t=i-(t=n||t===r?1:ps(t)))<0?0:t,i):[]},Pr.takeRightWhile=function(e,t){return e&&e.length?hi(e,lo(t,3),!1,!0):[]},Pr.takeWhile=function(e,t){return e&&e.length?hi(e,lo(t,3)):[]},Pr.tap=function(e,t){return t(e),e},Pr.throttle=function(e,t,r){var i=!0,o=!0;if("function"!=typeof e)throw new Ee(n);return es(r)&&(i="leading"in r?!!r.leading:i,o="trailing"in r?!!r.trailing:o),Ia(e,t,{leading:i,maxWait:t,trailing:o})},Pr.thru=ha,Pr.toArray=fs,Pr.toPairs=zs,Pr.toPairsIn=Ps,Pr.toPath=function(e){return Va(e)?Mt(e,Ro):ls(e)?[e]:Ei(Bo(vs(e)))},Pr.toPlainObject=bs,Pr.transform=function(e,t,r){var n=Va(e),i=n||qa(e)||cs(e);if(t=lo(t,4),null==r){var o=e&&e.constructor;r=i?n?new o:[]:es(e)&&Za(o)?Lr(Ue(e)):{}}return(i?Dt:xn)(e,(function(e,n,i){return t(r,e,n,i)})),r},Pr.unary=function(e){return Da(e,1)},Pr.union=ta,Pr.unionBy=ra,Pr.unionWith=na,Pr.uniq=function(e){return e&&e.length?di(e):[]},Pr.uniqBy=function(e,t){return e&&e.length?di(e,lo(t,2)):[]},Pr.uniqWith=function(e,t){return t="function"==typeof t?t:r,e&&e.length?di(e,r,t):[]},Pr.unset=function(e,t){return null==e||ui(e,t)},Pr.unzip=ia,Pr.unzipWith=oa,Pr.update=function(e,t,r){return null==e?e:fi(e,t,vi(r))},Pr.updateWith=function(e,t,n,i){return i="function"==typeof i?i:r,null==e?e:fi(e,t,vi(n),i)},Pr.values=Ls,Pr.valuesIn=function(e){return null==e?[]:Qt(e,Fs(e))},Pr.without=aa,Pr.words=Zs,Pr.wrap=function(e,t){return Ra(vi(t),e)},Pr.xor=sa,Pr.xorBy=la,Pr.xorWith=ca,Pr.zip=da,Pr.zipObject=function(e,t){return mi(e||[],t||[],en)},Pr.zipObjectDeep=function(e,t){return mi(e||[],t||[],Jn)},Pr.zipWith=ua,Pr.entries=zs,Pr.entriesIn=Ps,Pr.extend=xs,Pr.extendWith=ws,sl(Pr,Pr),Pr.add=bl,Pr.attempt=Qs,Pr.camelCase=Ns,Pr.capitalize=Hs,Pr.ceil=vl,Pr.clamp=function(e,t,n){return n===r&&(n=t,t=r),n!==r&&(n=(n=ms(n))==n?n:0),t!==r&&(t=(t=ms(t))==t?t:0),sn(ms(e),t,n)},Pr.clone=function(e){return ln(e,4)},Pr.cloneDeep=function(e){return ln(e,5)},Pr.cloneDeepWith=function(e,t){return ln(e,5,t="function"==typeof t?t:r)},Pr.cloneWith=function(e,t){return ln(e,4,t="function"==typeof t?t:r)},Pr.conformsTo=function(e,t){return null==t||cn(e,t,Is(t))},Pr.deburr=Ws,Pr.defaultTo=function(e,t){return null==e||e!=e?t:e},Pr.divide=yl,Pr.endsWith=function(e,t,n){e=vs(e),t=ci(t);var i=e.length,o=n=n===r?i:sn(ps(n),0,i);return(n-=t.length)>=0&&e.slice(n,o)==t},Pr.eq=La,Pr.escape=function(e){return(e=vs(e))&&X.test(e)?e.replace(K,nr):e},Pr.escapeRegExp=function(e){return(e=vs(e))&&ne.test(e)?e.replace(re,"\\$&"):e},Pr.every=function(e,t,n){var i=Va(e)?Et:pn;return n&&xo(e,t,n)&&(t=r),i(e,lo(t,3))},Pr.find=ma,Pr.findIndex=Wo,Pr.findKey=function(e,t){return Pt(e,lo(t,3),xn)},Pr.findLast=ba,Pr.findLastIndex=Vo,Pr.findLastKey=function(e,t){return Pt(e,lo(t,3),wn)},Pr.floor=xl,Pr.forEach=va,Pr.forEachRight=ya,Pr.forIn=function(e,t){return null==e?e:vn(e,lo(t,3),Fs)},Pr.forInRight=function(e,t){return null==e?e:yn(e,lo(t,3),Fs)},Pr.forOwn=function(e,t){return e&&xn(e,lo(t,3))},Pr.forOwnRight=function(e,t){return e&&wn(e,lo(t,3))},Pr.get=ks,Pr.gt=Na,Pr.gte=Ha,Pr.has=function(e,t){return null!=e&&mo(e,t,Dn)},Pr.hasIn=Ds,Pr.head=Uo,Pr.identity=nl,Pr.includes=function(e,t,r,n){e=Ua(e)?e:Ls(e),r=r&&!n?ps(r):0;var i=e.length;return r<0&&(r=br(i+r,0)),ss(e)?r<=i&&e.indexOf(t,r)>-1:!!i&&Nt(e,t,r)>-1},Pr.indexOf=function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var i=null==r?0:ps(r);return i<0&&(i=br(n+i,0)),Nt(e,t,i)},Pr.inRange=function(e,t,n){return t=hs(t),n===r?(n=t,t=0):n=hs(n),function(e,t,r){return e>=vr(t,r)&&e<br(t,r)}(e=ms(e),t,n)},Pr.invoke=Os,Pr.isArguments=Wa,Pr.isArray=Va,Pr.isArrayBuffer=Ya,Pr.isArrayLike=Ua,Pr.isArrayLikeObject=Ka,Pr.isBoolean=function(e){return!0===e||!1===e||ts(e)&&jn(e)==v},Pr.isBuffer=qa,Pr.isDate=Xa,Pr.isElement=function(e){return ts(e)&&1===e.nodeType&&!is(e)},Pr.isEmpty=function(e){if(null==e)return!0;if(Ua(e)&&(Va(e)||"string"==typeof e||"function"==typeof e.splice||qa(e)||cs(e)||Wa(e)))return!e.length;var t=go(e);if(t==C||t==T)return!e.size;if(So(e))return!Bn(e).length;for(var r in e)if(Ae.call(e,r))return!1;return!0},Pr.isEqual=function(e,t){return Fn(e,t)},Pr.isEqualWith=function(e,t,n){var i=(n="function"==typeof n?n:r)?n(e,t):r;return i===r?Fn(e,t,r,n):!!i},Pr.isError=Ga,Pr.isFinite=function(e){return"number"==typeof e&&zt(e)},Pr.isFunction=Za,Pr.isInteger=Qa,Pr.isLength=Ja,Pr.isMap=rs,Pr.isMatch=function(e,t){return e===t||Mn(e,t,uo(t))},Pr.isMatchWith=function(e,t,n){return n="function"==typeof n?n:r,Mn(e,t,uo(t),n)},Pr.isNaN=function(e){return ns(e)&&e!=+e},Pr.isNative=function(e){if(Co(e))throw new Ce("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");return _n(e)},Pr.isNil=function(e){return null==e},Pr.isNull=function(e){return null===e},Pr.isNumber=ns,Pr.isObject=es,Pr.isObjectLike=ts,Pr.isPlainObject=is,Pr.isRegExp=os,Pr.isSafeInteger=function(e){return Qa(e)&&e>=-9007199254740991&&e<=f},Pr.isSet=as,Pr.isString=ss,Pr.isSymbol=ls,Pr.isTypedArray=cs,Pr.isUndefined=function(e){return e===r},Pr.isWeakMap=function(e){return ts(e)&&go(e)==I},Pr.isWeakSet=function(e){return ts(e)&&"[object WeakSet]"==jn(e)},Pr.join=function(e,t){return null==e?"":Ut.call(e,t)},Pr.kebabCase=Vs,Pr.last=Go,Pr.lastIndexOf=function(e,t,n){var i=null==e?0:e.length;if(!i)return-1;var o=i;return n!==r&&(o=(o=ps(n))<0?br(i+o,0):vr(o,i-1)),t==t?function(e,t,r){for(var n=r+1;n--;)if(e[n]===t)return n;return n}(e,t,o):Lt(e,Wt,o,!0)},Pr.lowerCase=Ys,Pr.lowerFirst=Us,Pr.lt=ds,Pr.lte=us,Pr.max=function(e){return e&&e.length?gn(e,nl,kn):r},Pr.maxBy=function(e,t){return e&&e.length?gn(e,lo(t,2),kn):r},Pr.mean=function(e){return Vt(e,nl)},Pr.meanBy=function(e,t){return Vt(e,lo(t,2))},Pr.min=function(e){return e&&e.length?gn(e,nl,zn):r},Pr.minBy=function(e,t){return e&&e.length?gn(e,lo(t,2),zn):r},Pr.stubArray=gl,Pr.stubFalse=ml,Pr.stubObject=function(){return{}},Pr.stubString=function(){return""},Pr.stubTrue=function(){return!0},Pr.multiply=$l,Pr.nth=function(e,t){return e&&e.length?Wn(e,ps(t)):r},Pr.noConflict=function(){return ht._===this&&(ht._=Le),this},Pr.noop=ll,Pr.now=ka,Pr.pad=function(e,t,r){e=vs(e);var n=(t=ps(t))?ur(e):0;if(!t||n>=t)return e;var i=(t-n)/2;return Vi(gt(i),r)+e+Vi(pt(i),r)},Pr.padEnd=function(e,t,r){e=vs(e);var n=(t=ps(t))?ur(e):0;return t&&n<t?e+Vi(t-n,r):e},Pr.padStart=function(e,t,r){e=vs(e);var n=(t=ps(t))?ur(e):0;return t&&n<t?Vi(t-n,r)+e:e},Pr.parseInt=function(e,t,r){return r||null==t?t=0:t&&(t=+t),xr(vs(e).replace(ie,""),t||0)},Pr.random=function(e,t,n){if(n&&"boolean"!=typeof n&&xo(e,t,n)&&(t=n=r),n===r&&("boolean"==typeof t?(n=t,t=r):"boolean"==typeof e&&(n=e,e=r)),e===r&&t===r?(e=0,t=1):(e=hs(e),t===r?(t=e,e=0):t=hs(t)),e>t){var i=e;e=t,t=i}if(n||e%1||t%1){var o=wr();return vr(e+o*(t-e+ct("1e-"+((o+"").length-1))),t)}return qn(e,t)},Pr.reduce=function(e,t,r){var n=Va(e)?At:Kt,i=arguments.length<3;return n(e,lo(t,4),r,i,fn)},Pr.reduceRight=function(e,t,r){var n=Va(e)?Bt:Kt,i=arguments.length<3;return n(e,lo(t,4),r,i,hn)},Pr.repeat=function(e,t,n){return t=(n?xo(e,t,n):t===r)?1:ps(t),Xn(vs(e),t)},Pr.replace=function(){var e=arguments,t=vs(e[0]);return e.length<3?t:t.replace(e[1],e[2])},Pr.result=function(e,t,n){var i=-1,o=(t=yi(t,e)).length;for(o||(o=1,e=r);++i<o;){var a=null==e?r:e[Ro(t[i])];a===r&&(i=o,a=n),e=Za(a)?a.call(e):a}return e},Pr.round=Cl,Pr.runInContext=e,Pr.sample=function(e){return(Va(e)?Gr:Zn)(e)},Pr.size=function(e){if(null==e)return 0;if(Ua(e))return ss(e)?ur(e):e.length;var t=go(e);return t==C||t==T?e.size:Bn(e).length},Pr.snakeCase=Ks,Pr.some=function(e,t,n){var i=Va(e)?Rt:ii;return n&&xo(e,t,n)&&(t=r),i(e,lo(t,3))},Pr.sortedIndex=function(e,t){return oi(e,t)},Pr.sortedIndexBy=function(e,t,r){return ai(e,t,lo(r,2))},Pr.sortedIndexOf=function(e,t){var r=null==e?0:e.length;if(r){var n=oi(e,t);if(n<r&&La(e[n],t))return n}return-1},Pr.sortedLastIndex=function(e,t){return oi(e,t,!0)},Pr.sortedLastIndexBy=function(e,t,r){return ai(e,t,lo(r,2),!0)},Pr.sortedLastIndexOf=function(e,t){if(null==e?0:e.length){var r=oi(e,t,!0)-1;if(La(e[r],t))return r}return-1},Pr.startCase=qs,Pr.startsWith=function(e,t,r){return e=vs(e),r=null==r?0:sn(ps(r),0,e.length),t=ci(t),e.slice(r,r+t.length)==t},Pr.subtract=Sl,Pr.sum=function(e){return e&&e.length?qt(e,nl):0},Pr.sumBy=function(e,t){return e&&e.length?qt(e,lo(t,2)):0},Pr.template=function(e,t,n){var i=Pr.templateSettings;n&&xo(e,t,n)&&(t=r),e=vs(e),t=ws({},t,i,Qi);var o,a,s=ws({},t.imports,i.imports,Qi),l=Is(s),c=Qt(s,l),d=0,u=t.interpolate||xe,f="__p += '",h=De((t.escape||xe).source+"|"+u.source+"|"+(u===Q?fe:xe).source+"|"+(t.evaluate||xe).source+"|$","g"),p="//# sourceURL="+(Ae.call(t,"sourceURL")?(t.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++ot+"]")+"\n";e.replace(h,(function(t,r,n,i,s,l){return n||(n=i),f+=e.slice(d,l).replace(we,ir),r&&(o=!0,f+="' +\n__e("+r+") +\n'"),s&&(a=!0,f+="';\n"+s+";\n__p += '"),n&&(f+="' +\n((__t = ("+n+")) == null ? '' : __t) +\n'"),d=l+t.length,t})),f+="';\n";var g=Ae.call(t,"variable")&&t.variable;if(g){if(de.test(g))throw new Ce("Invalid `variable` option passed into `_.template`")}else f="with (obj) {\n"+f+"\n}\n";f=(a?f.replace(W,""):f).replace(V,"$1").replace(Y,"$1;"),f="function("+(g||"obj")+") {\n"+(g?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(o?", __e = _.escape":"")+(a?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+f+"return __p\n}";var m=Qs((function(){return Se(l,p+"return "+f).apply(r,c)}));if(m.source=f,Ga(m))throw m;return m},Pr.times=function(e,t){if((e=ps(e))<1||e>f)return[];var r=p,n=vr(e,p);t=lo(t),e-=p;for(var i=Xt(n,t);++r<e;)t(r);return i},Pr.toFinite=hs,Pr.toInteger=ps,Pr.toLength=gs,Pr.toLower=function(e){return vs(e).toLowerCase()},Pr.toNumber=ms,Pr.toSafeInteger=function(e){return e?sn(ps(e),-9007199254740991,f):0===e?e:0},Pr.toString=vs,Pr.toUpper=function(e){return vs(e).toUpperCase()},Pr.trim=function(e,t,n){if((e=vs(e))&&(n||t===r))return Gt(e);if(!e||!(t=ci(t)))return e;var i=fr(e),o=fr(t);return wi(i,er(i,o),tr(i,o)+1).join("")},Pr.trimEnd=function(e,t,n){if((e=vs(e))&&(n||t===r))return e.slice(0,hr(e)+1);if(!e||!(t=ci(t)))return e;var i=fr(e);return wi(i,0,tr(i,fr(t))+1).join("")},Pr.trimStart=function(e,t,n){if((e=vs(e))&&(n||t===r))return e.replace(ie,"");if(!e||!(t=ci(t)))return e;var i=fr(e);return wi(i,er(i,fr(t))).join("")},Pr.truncate=function(e,t){var n=30,i="...";if(es(t)){var o="separator"in t?t.separator:o;n="length"in t?ps(t.length):n,i="omission"in t?ci(t.omission):i}var a=(e=vs(e)).length;if(or(e)){var s=fr(e);a=s.length}if(n>=a)return e;var l=n-ur(i);if(l<1)return i;var c=s?wi(s,0,l).join(""):e.slice(0,l);if(o===r)return c+i;if(s&&(l+=c.length-l),os(o)){if(e.slice(l).search(o)){var d,u=c;for(o.global||(o=De(o.source,vs(he.exec(o))+"g")),o.lastIndex=0;d=o.exec(u);)var f=d.index;c=c.slice(0,f===r?l:f)}}else if(e.indexOf(ci(o),l)!=l){var h=c.lastIndexOf(o);h>-1&&(c=c.slice(0,h))}return c+i},Pr.unescape=function(e){return(e=vs(e))&&q.test(e)?e.replace(U,pr):e},Pr.uniqueId=function(e){var t=++Be;return vs(e)+t},Pr.upperCase=Xs,Pr.upperFirst=Gs,Pr.each=va,Pr.eachRight=ya,Pr.first=Uo,sl(Pr,(wl={},xn(Pr,(function(e,t){Ae.call(Pr.prototype,t)||(wl[t]=e)})),wl),{chain:!1}),Pr.VERSION="4.17.21",Dt(["bind","bindKey","curry","curryRight","partial","partialRight"],(function(e){Pr[e].placeholder=Pr})),Dt(["drop","take"],(function(e,t){Wr.prototype[e]=function(n){n=n===r?1:br(ps(n),0);var i=this.__filtered__&&!t?new Wr(this):this.clone();return i.__filtered__?i.__takeCount__=vr(n,i.__takeCount__):i.__views__.push({size:vr(n,p),type:e+(i.__dir__<0?"Right":"")}),i},Wr.prototype[e+"Right"]=function(t){return this.reverse()[e](t).reverse()}})),Dt(["filter","map","takeWhile"],(function(e,t){var r=t+1,n=1==r||3==r;Wr.prototype[e]=function(e){var t=this.clone();return t.__iteratees__.push({iteratee:lo(e,3),type:r}),t.__filtered__=t.__filtered__||n,t}})),Dt(["head","last"],(function(e,t){var r="take"+(t?"Right":"");Wr.prototype[e]=function(){return this[r](1).value()[0]}})),Dt(["initial","tail"],(function(e,t){var r="drop"+(t?"":"Right");Wr.prototype[e]=function(){return this.__filtered__?new Wr(this):this[r](1)}})),Wr.prototype.compact=function(){return this.filter(nl)},Wr.prototype.find=function(e){return this.filter(e).head()},Wr.prototype.findLast=function(e){return this.reverse().find(e)},Wr.prototype.invokeMap=Gn((function(e,t){return"function"==typeof e?new Wr(this):this.map((function(r){return On(r,e,t)}))})),Wr.prototype.reject=function(e){return this.filter(Aa(lo(e)))},Wr.prototype.slice=function(e,t){e=ps(e);var n=this;return n.__filtered__&&(e>0||t<0)?new Wr(n):(e<0?n=n.takeRight(-e):e&&(n=n.drop(e)),t!==r&&(n=(t=ps(t))<0?n.dropRight(-t):n.take(t-e)),n)},Wr.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},Wr.prototype.toArray=function(){return this.take(p)},xn(Wr.prototype,(function(e,t){var n=/^(?:filter|find|map|reject)|While$/.test(t),i=/^(?:head|last)$/.test(t),o=Pr[i?"take"+("last"==t?"Right":""):t],a=i||/^find/.test(t);o&&(Pr.prototype[t]=function(){var t=this.__wrapped__,s=i?[1]:arguments,l=t instanceof Wr,c=s[0],d=l||Va(t),u=function(e){var t=o.apply(Pr,_t([e],s));return i&&f?t[0]:t};d&&n&&"function"==typeof c&&1!=c.length&&(l=d=!1);var f=this.__chain__,h=!!this.__actions__.length,p=a&&!f,g=l&&!h;if(!a&&d){t=g?t:new Wr(this);var m=e.apply(t,s);return m.__actions__.push({func:ha,args:[u],thisArg:r}),new Hr(m,f)}return p&&g?e.apply(this,s):(m=this.thru(u),p?i?m.value()[0]:m.value():m)})})),Dt(["pop","push","shift","sort","splice","unshift"],(function(e){var t=Oe[e],r=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",n=/^(?:pop|shift)$/.test(e);Pr.prototype[e]=function(){var e=arguments;if(n&&!this.__chain__){var i=this.value();return t.apply(Va(i)?i:[],e)}return this[r]((function(r){return t.apply(Va(r)?r:[],e)}))}})),xn(Wr.prototype,(function(e,t){var r=Pr[t];if(r){var n=r.name+"";Ae.call(Or,n)||(Or[n]=[]),Or[n].push({name:t,func:r})}})),Or[Li(r,2).name]=[{name:"wrapper",func:r}],Wr.prototype.clone=function(){var e=new Wr(this.__wrapped__);return e.__actions__=Ei(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=Ei(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=Ei(this.__views__),e},Wr.prototype.reverse=function(){if(this.__filtered__){var e=new Wr(this);e.__dir__=-1,e.__filtered__=!0}else(e=this.clone()).__dir__*=-1;return e},Wr.prototype.value=function(){var e=this.__wrapped__.value(),t=this.__dir__,r=Va(e),n=t<0,i=r?e.length:0,o=function(e,t,r){var n=-1,i=r.length;for(;++n<i;){var o=r[n],a=o.size;switch(o.type){case"drop":e+=a;break;case"dropRight":t-=a;break;case"take":t=vr(t,e+a);break;case"takeRight":e=br(e,t-a)}}return{start:e,end:t}}(0,i,this.__views__),a=o.start,s=o.end,l=s-a,c=n?s:a-1,d=this.__iteratees__,u=d.length,f=0,h=vr(l,this.__takeCount__);if(!r||!n&&i==l&&h==l)return pi(e,this.__actions__);var p=[];e:for(;l--&&f<h;){for(var g=-1,m=e[c+=t];++g<u;){var b=d[g],v=b.iteratee,y=b.type,x=v(m);if(2==y)m=x;else if(!x){if(1==y)continue e;break e}}p[f++]=m}return p},Pr.prototype.at=pa,Pr.prototype.chain=function(){return fa(this)},Pr.prototype.commit=function(){return new Hr(this.value(),this.__chain__)},Pr.prototype.next=function(){this.__values__===r&&(this.__values__=fs(this.value()));var e=this.__index__>=this.__values__.length;return{done:e,value:e?r:this.__values__[this.__index__++]}},Pr.prototype.plant=function(e){for(var t,n=this;n instanceof Nr;){var i=Po(n);i.__index__=0,i.__values__=r,t?o.__wrapped__=i:t=i;var o=i;n=n.__wrapped__}return o.__wrapped__=e,t},Pr.prototype.reverse=function(){var e=this.__wrapped__;if(e instanceof Wr){var t=e;return this.__actions__.length&&(t=new Wr(this)),(t=t.reverse()).__actions__.push({func:ha,args:[ea],thisArg:r}),new Hr(t,this.__chain__)}return this.thru(ea)},Pr.prototype.toJSON=Pr.prototype.valueOf=Pr.prototype.value=function(){return pi(this.__wrapped__,this.__actions__)},Pr.prototype.first=Pr.prototype.head,Ze&&(Pr.prototype[Ze]=function(){return this}),Pr}();gt?((gt.exports=gr)._=gr,pt._=gr):ht._=gr}).call(Ei)}(JS,JS.exports);var ej=JS.exports;const tj=Y.default.forwardRef(((r,n)=>{var{value:i,readOnly:o,"data-testid":a,maskRange:s,unmaskRange:l,maskRegex:c,maskTransformer:d,iconMask:u=e.jsx($.EyeSlashIcon,{}),iconUnmask:f=e.jsx(w.EyeIcon,{}),iconActiveColor:h,iconInactiveColor:p,maskChar:g="•",error:m,disableMask:b,transformInput:v,loadState:y,onMask:x,onUnmask:C,onChange:S,onFocus:j,onBlur:k,onTryAgain:D}=r,T=X(r,["value","readOnly","data-testid","maskRange","unmaskRange","maskRegex","maskTransformer","iconMask","iconUnmask","iconActiveColor","iconInactiveColor","maskChar","error","disableMask","transformInput","loadState","onMask","onUnmask","onChange","onFocus","onBlur","onTryAgain"]);const E=o&&ej.isEmpty(i),[O,I]=t.useState(!b),[F,M]=t.useState(i||"");t.useEffect((()=>{M(i||"")}),[i]);const _=e=>{P(!1),j&&j(e)},A=e=>{P(!0),k&&k(e)},B=e=>{let t=e.target.value;switch(v){case"uppercase":t=t.toUpperCase();break;case"lowercase":t=t.toLowerCase()}M(t),e.target.value=t,S&&S(e)},R=()=>{o&&D&&D()},z=()=>{P(!O)},P=e=>{I(e),e?x&&x():C&&C()},L=()=>!(null==F?void 0:F.toString().length)||b,N=()=>{if(E)return e.jsx(e.Fragment,{});const t=L();return e.jsx(VS,{"data-testid":"icon-"+(O?"masked":"unmasked"),onClick:t?void 0:z,$isDisabled:t,$inactiveColor:p,$activeColor:h,children:O?f:u})};return e.jsx("div",{"aria-busy":"loading"===y,"aria-live":"polite",children:(()=>{if(o)switch(y){case"fail":return e.jsxs(QS,{onClick:R,"data-testid":"try-again-button",children:[e.jsxs(XS,{children:[e.jsx(GS,{}),e.jsx(ZS,{children:"Error"})]}),e.jsx(qS,{children:"Try again?"})]});case"loading":return e.jsxs(YS,{children:[e.jsx(KS,{}),e.jsx(US,{children:"Retrieving..."})]})}return e.jsx(WS,Object.assign({ref:n,"data-testid":`${a||"masked-input"}${O?"-masked":"-unmasked"}`,addon:{type:"custom",attributes:{children:N()},position:"right"},onFocus:o?void 0:_,onBlur:o?void 0:A,onClick:o?z:void 0,onChange:B,value:E?"-":O&&!b?Nc.maskValue(F,{maskChar:g,maskRange:s,unmaskRange:l,maskRegex:c,maskTransformer:d}):F,readOnly:o,error:m,$isDisabled:L()},T))})()})})),rj=Y.default.forwardRef(((t,r)=>{const{label:n,errorMessage:i,id:o="form-field-masked-input","data-error-testid":a,"data-testid":s,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u}=t,f=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e.jsx(Qy,{id:o,label:n,errorMessage:i,disabled:f.disabled,"data-error-testid":a,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,children:e.jsx(tj,Object.assign({ref:r,id:`${o}-base`,"data-testid":s||o,error:!!i},f))})})),nj=K.default.div`
    font-weight: ${e=>e.$bold?qs.Spec["weight-semibold"]:qs.Spec["weight-regular"]};
    color: ${e=>e.$selected?Ks["text-selected"]:Ks.text};
    width: 100%;

    ${e=>"end"===e.$truncateType&&il(e.$maxLines||2)}
    overflow-wrap: break-word;
`,ij=K.default.div`
    color: ${Ks["text-subtlest"]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&il(e.$maxLines||2)}
    overflow-wrap: break-word;

    ${e=>"next-line"===e.$labelDisplayType?i.css`
                    ${qs["body-md-semibold"]}
                `:i.css`
                    ${qs["body-baseline-regular"]}
                `}
`,oj=K.default.span`
    font-weight: ${qs.Spec["weight-semibold"]};
`,aj=K.default.div`
    text-align: left;
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;

    ${e=>"small"===e.$variant?qs["body-md-regular"]:qs["body-baseline-regular"]}

    ${e=>{switch(e.$labelDisplayType){case"next-line":return i.css`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return i.css`
                    ${nj} {
                        display: inline;
                    }

                    ${ij} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,sj=K.default.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    word-break: break-all;
    overflow: hidden;
`,lj=K.default.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,cj=({bold:r,displayType:n="inline",label:o,searchTerm:a,maxLines:s=2,selected:l,sublabel:c,truncationType:d="middle",variant:u="default"})=>{const f=i.useTheme(),h="small"===u?qs.Spec["body-size-md"]({theme:f}):qs.Spec["body-size-baseline"]({theme:f}),p=qs.Spec["font-family"]({theme:f}),{ref:g,width:m}=qe(),b=t.useCallback((e=>{if("inline"!==n||!m)return!1;return Nc.getTextWidth(e,`${h} '${p}'`)>m*s-50}),[m,n,h,p,s]),v=t.useMemo((()=>b(o)),[b,o]),y=t.useMemo((()=>c&&b(c)),[b,c]),x=v||y?"next-line":n,w=t=>{if(!a)return t;const r=a.toLowerCase().trim(),n=t.toLowerCase().indexOf(r),i=n+a.length;return-1===n?t:e.jsxs(e.Fragment,{children:[o.slice(0,n),e.jsx(oj,{$variant:u,children:o.slice(n,i)}),o.slice(i)]})},$=t=>e.jsxs(e.Fragment,{children:[e.jsx(sj,{$maxLines:s,"aria-hidden":!0,children:w(t)}),e.jsx(lj,{$maxLines:s,"aria-hidden":!0,children:w(t)})]});return e.jsxs(aj,{ref:g,$labelDisplayType:x,$variant:u,children:[e.jsx(nj,{"aria-label":o,$bold:r,$maxLines:s,$selected:l,$truncateType:d,children:"middle"===d&&v?$(o):w(o)}),c&&e.jsx(ij,{"aria-label":c,$maxLines:s,$truncateType:d,$labelDisplayType:n,children:"middle"===d&&y?$(c):c})]})},dj=0,uj=1,fj=2,hj=4;function pj(e){return()=>e}function gj(e){e()}function mj(e,t){return r=>e(t(r))}function bj(e,t){return()=>e(t)}function vj(e,t){return r=>e(t,r)}function yj(e){return void 0!==e}function xj(){}function wj(e,t){return t(e),e}function $j(e,t){return t(e)}function Cj(...e){return e}function Sj(e,t){return e(uj,t)}function jj(e,t){e(dj,t)}function kj(e){e(fj)}function Dj(e){return e(hj)}function Tj(e,t){return Sj(e,vj(t,dj))}function Ej(e,t){const r=e(uj,(e=>{r(),t(e)}));return r}function Oj(e){let t,r;return n=>i=>{t=i,r&&clearTimeout(r),r=setTimeout((()=>{n(t)}),e)}}function Ij(e,t){return e===t}function Fj(e=Ij){let t;return r=>n=>{e(t,n)||(t=n,r(n))}}function Mj(e){return t=>r=>{e(r)&&t(r)}}function _j(e){return t=>mj(t,e)}function Aj(e){return t=>()=>{t(e)}}function Bj(e,...t){const r=function(...e){return t=>e.reduceRight($j,t)}(...t);return(t,n)=>{switch(t){case fj:return void kj(e);case uj:return Sj(e,r(n))}}}function Rj(e,t){return r=>n=>{r(t=e(t,n))}}function zj(e){return t=>r=>{e>0?e--:t(r)}}function Pj(e){let t,r=null;return n=>i=>{r=i,!t&&(t=setTimeout((()=>{t=void 0,n(r)}),e))}}function Lj(...e){const t=new Array(e.length);let r=0,n=null;const i=Math.pow(2,e.length)-1;return e.forEach(((e,o)=>{const a=Math.pow(2,o);Sj(e,(e=>{const s=r;r|=a,t[o]=e,s!==i&&r===i&&n&&(n(),n=null)}))})),e=>o=>{const a=()=>{e([o].concat(t))};r===i?a():n=a}}function Nj(e){let t=e;const r=Wj();return(e,n)=>{switch(e){case dj:t=n;break;case uj:n(t);break;case hj:return t}return r(e,n)}}function Hj(e,t){return wj(Nj(t),(t=>Tj(e,t)))}function Wj(){const e=[];return(t,r)=>{switch(t){case dj:return void e.slice().forEach((e=>{e(r)}));case fj:return void e.splice(0,e.length);case uj:return e.push(r),()=>{const t=e.indexOf(r);t>-1&&e.splice(t,1)}}}}function Vj(e){return wj(Wj(),(t=>Tj(e,t)))}function Yj(e,t=[],{singleton:r}={singleton:!0}){return{constructor:e,dependencies:t,id:Uj(),singleton:r}}const Uj=()=>Symbol();function Kj(...e){const t=Wj(),r=new Array(e.length);let n=0;const i=Math.pow(2,e.length)-1;return e.forEach(((e,o)=>{const a=Math.pow(2,o);Sj(e,(e=>{r[o]=e,n|=a,n===i&&jj(t,r)}))})),function(e,o){switch(e){case fj:return void kj(t);case uj:return n===i&&o(r),Sj(t,o)}}}function qj(e,t=Ij){return Bj(e,Fj(t))}function Xj(...e){return function(t,r){switch(t){case fj:return;case uj:return function(...e){return()=>{e.map(gj)}}(...e.map((e=>Sj(e,r))))}}}var Gj=(e=>(e[e.DEBUG=0]="DEBUG",e[e.INFO=1]="INFO",e[e.WARN=2]="WARN",e[e.ERROR=3]="ERROR",e))(Gj||{});const Zj={0:"debug",3:"error",1:"log",2:"warn"},Qj=Yj((()=>{const e=Nj(3);return{log:Nj(((t,r,n=1)=>{var i;n>=(null!=(i=(typeof globalThis>"u"?window:globalThis).VIRTUOSO_LOG_LEVEL)?i:Dj(e))&&console[Zj[n]]("%creact-virtuoso: %c%s %o","color: #0253b3; font-weight: bold","color: initial",t,r)})),logLevel:e}}),[],{singleton:!0});function Jj(e,t,r){return ek(e,t,r).callbackRef}function ek(e,t,r){const n=Y.default.useRef(null);let i=e=>{};if(typeof ResizeObserver<"u"){const o=Y.default.useMemo((()=>new ResizeObserver((t=>{const n=()=>{const r=t[0].target;null!==r.offsetParent&&e(r)};r?n():requestAnimationFrame(n)}))),[e]);i=e=>{e&&t?(o.observe(e),n.current=e):(n.current&&o.unobserve(n.current),n.current=null)}}return{callbackRef:i,ref:n}}function tk(e,t,r,n,i,o,a,s,l){const c=Y.default.useCallback((r=>{const l=function(e,t,r,n){const i=e.length;if(0===i)return null;const o=[];for(let a=0;a<i;a++){const i=e.item(a);if(void 0===i.dataset.index)continue;const s=parseInt(i.dataset.index),l=parseFloat(i.dataset.knownSize),c=t(i,r);if(0===c&&n("Zero-sized element, this should not happen",{child:i},Gj.ERROR),c===l)continue;const d=o[o.length-1];0===o.length||d.size!==c||d.endIndex!==s-1?o.push({endIndex:s,size:c,startIndex:s}):o[o.length-1].endIndex++}return o}(r.children,t,s?"offsetWidth":"offsetHeight",i);let c=r.parentElement;for(;!c.dataset.virtuosoScroller;)c=c.parentElement;const d="window"===c.lastElementChild.dataset.viewportType,u=a?s?a.scrollLeft:a.scrollTop:d?s?window.pageXOffset||document.documentElement.scrollLeft:window.pageYOffset||document.documentElement.scrollTop:s?c.scrollLeft:c.scrollTop,f=a?s?a.scrollWidth:a.scrollHeight:d?s?document.documentElement.scrollWidth:document.documentElement.scrollHeight:s?c.scrollWidth:c.scrollHeight,h=a?s?a.offsetWidth:a.offsetHeight:d?s?window.innerWidth:window.innerHeight:s?c.offsetWidth:c.offsetHeight;n({scrollHeight:f,scrollTop:Math.max(u,0),viewportHeight:h}),null==o||o(s?rk("column-gap",getComputedStyle(r).columnGap,i):rk("row-gap",getComputedStyle(r).rowGap,i)),null!==l&&e(l)}),[e,t,i,o,a,n]);return ek(c,r,l)}function rk(e,t,r){return"normal"!==t&&!(null!=t&&t.endsWith("px"))&&r(`${e} was not resolved to pixel value correctly`,t,Gj.WARN),"normal"===t?0:parseInt(null!=t?t:"0",10)}function nk(e,t,r){const n=Y.default.useRef(null),i=Y.default.useCallback((r=>{if(null==r||!r.offsetParent)return;const i=r.getBoundingClientRect(),o=i.width;let a,s;if(t){const e=t.getBoundingClientRect(),r=i.top-e.top;s=e.height-Math.max(0,r),a=r+t.scrollTop}else s=window.innerHeight-Math.max(0,i.top),a=i.top+window.pageYOffset;n.current={offsetTop:a,visibleHeight:s,visibleWidth:o},e(n.current)}),[e,t]),{callbackRef:o,ref:a}=ek(i,!0,r),s=Y.default.useCallback((()=>{i(a.current)}),[i,a]);return Y.default.useEffect((()=>{if(t){t.addEventListener("scroll",s);const e=new ResizeObserver((()=>{requestAnimationFrame(s)}));return e.observe(t),()=>{t.removeEventListener("scroll",s),e.unobserve(t)}}return window.addEventListener("scroll",s),window.addEventListener("resize",s),()=>{window.removeEventListener("scroll",s),window.removeEventListener("resize",s)}}),[s,t]),o}const ik=Yj((()=>{const e=Wj(),t=Wj(),r=Nj(0),n=Wj(),i=Nj(0),o=Wj(),a=Wj(),s=Nj(0),l=Nj(0),c=Nj(0),d=Nj(0),u=Wj(),f=Wj(),h=Nj(!1),p=Nj(!1),g=Nj(!1);return Tj(Bj(e,_j((({scrollTop:e})=>e))),t),Tj(Bj(e,_j((({scrollHeight:e})=>e))),a),Tj(t,i),{deviation:r,fixedFooterHeight:c,fixedHeaderHeight:l,footerHeight:d,headerHeight:s,horizontalDirection:p,scrollBy:f,scrollContainerState:e,scrollHeight:a,scrollingInProgress:h,scrollTo:u,scrollTop:t,skipAnimationFrameInResizeObserver:g,smoothScrollTargetReached:n,statefulScrollTop:i,viewportHeight:o}}),[],{singleton:!0}),ok={lvl:0};function ak(e,t){const r=e.length;if(0===r)return[];let{index:n,value:i}=t(e[0]);const o=[];for(let a=1;a<r;a++){const{index:r,value:s}=t(e[a]);o.push({end:r-1,start:n,value:i}),n=r,i=s}return o.push({end:1/0,start:n,value:i}),o}function sk(e){return e===ok}function lk(e,t){if(!sk(e))return t===e.k?e.v:t<e.k?lk(e.l,t):lk(e.r,t)}function ck(e,t,r="k"){if(sk(e))return[-1/0,void 0];if(Number(e[r])===t)return[e.k,e.v];if(Number(e[r])<t){const n=ck(e.r,t,r);return n[0]===-1/0?[e.k,e.v]:n}return ck(e.l,t,r)}function dk(e,t,r){return sk(e)?wk(t,r,1):t===e.k?bk(e,{k:t,v:r}):t<e.k?$k(bk(e,{l:dk(e.l,t,r)})):$k(bk(e,{r:dk(e.r,t,r)}))}function uk(){return ok}function fk(e,t,r){if(sk(e))return[];return function(e){return ak(e,(({k:e,v:t})=>({index:e,value:t})))}(gk(e,ck(e,t)[0],r))}function hk(e,t){if(sk(e))return ok;const{k:r,l:n,r:i}=e;if(t===r){if(sk(n))return i;if(sk(i))return n;{const[t,r]=xk(n);return mk(bk(e,{k:t,l:vk(n),v:r}))}}return mk(bk(e,t<r?{l:hk(n,t)}:{r:hk(i,t)}))}function pk(e){return sk(e)?[]:[...pk(e.l),{k:e.k,v:e.v},...pk(e.r)]}function gk(e,t,r){if(sk(e))return[];const{k:n,l:i,r:o,v:a}=e;let s=[];return n>t&&(s=s.concat(gk(i,t,r))),n>=t&&n<=r&&s.push({k:n,v:a}),n<=r&&(s=s.concat(gk(o,t,r))),s}function mk(e){const{l:t,lvl:r,r:n}=e;if(n.lvl>=r-1&&t.lvl>=r-1)return e;if(r>n.lvl+1){if(yk(t))return Ck(bk(e,{lvl:r-1}));if(!sk(t)&&!sk(t.r))return bk(t.r,{l:bk(t,{r:t.r.l}),lvl:r,r:bk(e,{l:t.r.r,lvl:r-1})});throw new Error("Unexpected empty nodes")}if(yk(e))return Sk(bk(e,{lvl:r-1}));if(sk(n)||sk(n.l))throw new Error("Unexpected empty nodes");{const t=n.l,i=yk(t)?n.lvl-1:n.lvl;return bk(t,{l:bk(e,{lvl:r-1,r:t.l}),lvl:t.lvl+1,r:Sk(bk(n,{l:t.r,lvl:i}))})}}function bk(e,t){return wk(void 0!==t.k?t.k:e.k,void 0!==t.v?t.v:e.v,void 0!==t.lvl?t.lvl:e.lvl,void 0!==t.l?t.l:e.l,void 0!==t.r?t.r:e.r)}function vk(e){return sk(e.r)?e.l:mk(bk(e,{r:vk(e.r)}))}function yk(e){return sk(e)||e.lvl>e.r.lvl}function xk(e){return sk(e.r)?[e.k,e.v]:xk(e.r)}function wk(e,t,r,n=ok,i=ok){return{k:e,l:n,lvl:r,r:i,v:t}}function $k(e){return Sk(Ck(e))}function Ck(e){const{l:t}=e;return sk(t)||t.lvl!==e.lvl?e:bk(t,{r:bk(e,{l:t.r})})}function Sk(e){const{lvl:t,r:r}=e;return sk(r)||sk(r.r)||r.lvl!==t||r.r.lvl!==t?e:bk(r,{l:bk(e,{r:r.l}),lvl:t+1})}function jk(e,t){return!(!e||e.startIndex!==t.startIndex||e.endIndex!==t.endIndex)}function kk(e,t){return!(!e||e[0]!==t[0]||e[1]!==t[1])}const Dk=Yj((()=>({recalcInProgress:Nj(!1)})),[],{singleton:!0});function Tk(e,t,r){return e[Ek(e,t,r)]}function Ek(e,t,r,n=0){let i=e.length-1;for(;n<=i;){const o=Math.floor((n+i)/2),a=r(e[o],t);if(0===a)return o;if(-1===a){if(i-n<2)return o-1;i=o-1}else{if(i===n)return o;n=o+1}}throw new Error(`Failed binary finding record in array - ${e.join(",")}, searched for ${t}`)}function Ok(e,t){return Math.round(e.getBoundingClientRect()[t])}function Ik(e){return!sk(e.groupOffsetTree)}function Fk({index:e},t){return t===e?0:t<e?-1:1}function Mk({offset:e},t){return t===e?0:t<e?-1:1}function _k(e,t,r){if(0===t.length)return 0;const{index:n,offset:i,size:o}=Tk(t,e,Fk),a=e-n,s=o*a+(a-1)*r+i;return s>0?s+r:s}function Ak(e,t){if(!Ik(t))return e;let r=0;for(;t.groupIndices[r]<=e+r;)r++;return e+r}function Bk(e,t,r){if(function(e){return typeof e.groupIndex<"u"}(e))return t.groupIndices[e.groupIndex]+1;{let n=Ak("LAST"===e.index?r:e.index,t);return n=Math.max(0,n,Math.min(r,n)),n}}function Rk(e,t,r,n=0){return n>0&&(t=Math.max(t,Tk(e,n,Fk).offset)),ak(function(e,t,r,n){const i=Ek(e,t,n),o=Ek(e,r,n,i);return e.slice(i,o+1)}(e,t,r,Mk),Nk)}function zk(e,[t,r,n,i]){t.length>0&&n("received item sizes",t,Gj.DEBUG);const o=e.sizeTree;let a=o,s=0;if(r.length>0&&sk(o)&&2===t.length){const e=t[0].size,n=t[1].size;a=r.reduce(((t,r)=>dk(dk(t,r,e),r+1,n)),a)}else[a,s]=function(e,t){let r=sk(e)?0:1/0;for(const n of t){const{endIndex:t,size:i,startIndex:o}=n;if(r=Math.min(r,o),sk(e)){e=dk(e,0,i);continue}const a=fk(e,o-1,t+1);if(a.some(Hk(n)))continue;let s=!1,l=!1;for(const{end:r,start:n,value:o}of a)s?(t>=n||i===o)&&(e=hk(e,n)):(l=o!==i,s=!0),r>t&&t>=n&&o!==i&&(e=dk(e,t+1,o));l&&(e=dk(e,o,i))}return[e,r]}(a,t);if(a===o)return e;const{lastIndex:l,lastOffset:c,lastSize:d,offsetTree:u}=Lk(e.offsetTree,s,a,i);return{groupIndices:r,groupOffsetTree:r.reduce(((e,t)=>dk(e,t,_k(t,u,i))),uk()),lastIndex:l,lastOffset:c,lastSize:d,offsetTree:u,sizeTree:a}}function Pk(e,t){let r=0,n=0;for(;r<e;)r+=t[n+1]-t[n]-1,n++;return n-(r===e?0:1)}function Lk(e,t,r,n){let i=e,o=0,a=0,s=0,l=0;if(0!==t){l=Ek(i,t-1,Fk),s=i[l].offset;const e=ck(r,t-1);o=e[0],a=e[1],i.length&&i[l].size===ck(r,t)[1]&&(l-=1),i=i.slice(0,l+1)}else i=[];for(const{start:e,value:l}of fk(r,t,1/0)){const t=e-o,r=t*a+s+t*n;i.push({index:e,offset:r,size:l}),o=e,s=r,a=l}return{lastIndex:o,lastOffset:s,lastSize:a,offsetTree:i}}function Nk(e){return{index:e.index,value:e}}function Hk(e){const{endIndex:t,size:r,startIndex:n}=e;return e=>e.start===n&&(e.end===t||e.end===1/0)&&e.value===r}const Wk={offsetHeight:"height",offsetWidth:"width"},Vk=Yj((([{log:e},{recalcInProgress:t}])=>{const r=Wj(),n=Wj(),i=Hj(n,0),o=Wj(),a=Wj(),s=Nj(0),l=Nj([]),c=Nj(void 0),d=Nj(void 0),u=Nj(((e,t)=>Ok(e,Wk[t]))),f=Nj(void 0),h=Nj(0),p={groupIndices:[],groupOffsetTree:uk(),lastIndex:0,lastOffset:0,lastSize:0,offsetTree:[],sizeTree:uk()},g=Hj(Bj(r,Lj(l,e,h),Rj(zk,p),Fj()),p),m=Hj(Bj(l,Fj(),Rj(((e,t)=>({current:t,prev:e.current})),{current:[],prev:[]}),_j((({prev:e})=>e))),[]);Tj(Bj(l,Mj((e=>e.length>0)),Lj(g,h),_j((([e,t,r])=>{const n=e.reduce(((e,n,i)=>dk(e,n,_k(n,t.offsetTree,r)||i)),uk());return{...t,groupIndices:e,groupOffsetTree:n}}))),g),Tj(Bj(n,Lj(g),Mj((([e,{lastIndex:t}])=>e<t)),_j((([e,{lastIndex:t,lastSize:r}])=>[{endIndex:t,size:r,startIndex:e}]))),r),Tj(c,d);const b=Hj(Bj(c,_j((e=>void 0===e))),!0);Tj(Bj(d,Mj((e=>void 0!==e&&sk(Dj(g).sizeTree))),_j((e=>[{endIndex:0,size:e,startIndex:0}]))),r);const v=Vj(Bj(r,Lj(g),Rj((({sizes:e},[t,r])=>({changed:r!==e,sizes:r})),{changed:!1,sizes:p}),_j((e=>e.changed))));Sj(Bj(s,Rj(((e,t)=>({diff:e.prev-t,prev:t})),{diff:0,prev:0}),_j((e=>e.diff))),(e=>{const{groupIndices:r}=Dj(g);if(e>0)jj(t,!0),jj(o,e+Pk(e,r));else if(e<0){const t=Dj(m);t.length>0&&(e-=Pk(-e,t)),jj(a,e)}})),Sj(Bj(s,Lj(e)),(([e,t])=>{e<0&&t("`firstItemIndex` prop should not be set to less than zero. If you don't know the total count, just use a very high value",{firstItemIndex:s},Gj.ERROR)}));const y=Vj(o);Tj(Bj(o,Lj(g),_j((([e,t])=>{const r=t.groupIndices.length>0,n=[],i=t.lastSize;if(r){const r=lk(t.sizeTree,0);let o=0,a=0;for(;o<e;){const e=t.groupIndices[a],s=t.groupIndices.length===a+1?1/0:t.groupIndices[a+1]-e-1;n.push({endIndex:e,size:r,startIndex:e}),n.push({endIndex:e+1+s-1,size:i,startIndex:e+1}),a++,o+=s+1}const s=pk(t.sizeTree);return o!==e&&s.shift(),s.reduce(((t,{k:r,v:n})=>{let i=t.ranges;return 0!==t.prevSize&&(i=[...t.ranges,{endIndex:r+e-1,size:t.prevSize,startIndex:t.prevIndex}]),{prevIndex:r+e,prevSize:n,ranges:i}}),{prevIndex:e,prevSize:0,ranges:n}).ranges}return pk(t.sizeTree).reduce(((t,{k:r,v:n})=>({prevIndex:r+e,prevSize:n,ranges:[...t.ranges,{endIndex:r+e-1,size:t.prevSize,startIndex:t.prevIndex}]})),{prevIndex:0,prevSize:i,ranges:[]}).ranges}))),r);const x=Vj(Bj(a,Lj(g,h),_j((([e,{offsetTree:t},r])=>_k(-e,t,r)))));return Tj(Bj(a,Lj(g,h),_j((([e,t,r])=>{if(t.groupIndices.length>0){if(sk(t.sizeTree))return t;let n=uk();const i=Dj(m);let o=0,a=0,s=0;for(;o<-e;){s=i[a];const e=i[a+1]-s-1;a++,o+=e+1}if(n=pk(t.sizeTree).reduce(((t,{k:r,v:n})=>dk(t,Math.max(0,r+e),n)),n),o!==-e){n=dk(n,0,lk(t.sizeTree,s));n=dk(n,1,ck(t.sizeTree,1-e)[1])}return{...t,sizeTree:n,...Lk(t.offsetTree,0,n,r)}}{const n=pk(t.sizeTree).reduce(((t,{k:r,v:n})=>dk(t,Math.max(0,r+e),n)),uk());return{...t,sizeTree:n,...Lk(t.offsetTree,0,n,r)}}}))),g),{beforeUnshiftWith:y,data:f,defaultItemSize:d,firstItemIndex:s,fixedItemSize:c,gap:h,groupIndices:l,itemSize:u,listRefresh:v,shiftWith:a,shiftWithOffset:x,sizeRanges:r,sizes:g,statefulTotalCount:i,totalCount:n,trackItemSizes:b,unshiftWith:o}}),Cj(Qj,Dk),{singleton:!0});function Yk(e){return e.reduce(((e,t)=>(e.groupIndices.push(e.totalCount),e.totalCount+=t+1,e)),{groupIndices:[],totalCount:0})}const Uk=Yj((([{groupIndices:e,sizes:t,totalCount:r},{headerHeight:n,scrollTop:i}])=>{const o=Wj(),a=Wj(),s=Vj(Bj(o,_j(Yk)));return Tj(Bj(s,_j((e=>e.totalCount))),r),Tj(Bj(s,_j((e=>e.groupIndices))),e),Tj(Bj(Kj(i,t,n),Mj((([e,t])=>Ik(t))),_j((([e,t,r])=>ck(t.groupOffsetTree,Math.max(e-r,0),"v")[0])),Fj(),_j((e=>[e]))),a),{groupCounts:o,topItemsIndexes:a}}),Cj(Vk,ik)),Kk=Yj((([{log:e}])=>{const t=Nj(!1),r=Vj(Bj(t,Mj((e=>e)),Fj()));return Sj(t,(t=>{t&&Dj(e)("props updated",{},Gj.DEBUG)})),{didMount:r,propsReady:t}}),Cj(Qj),{singleton:!0}),qk=typeof document<"u"&&"scrollBehavior"in document.documentElement.style;function Xk(e){const t="number"==typeof e?{index:e}:e;return t.align||(t.align="start"),(!t.behavior||!qk)&&(t.behavior="auto"),t.offset||(t.offset=0),t}const Gk=Yj((([{gap:e,listRefresh:t,sizes:r,totalCount:n},{fixedFooterHeight:i,fixedHeaderHeight:o,footerHeight:a,headerHeight:s,scrollingInProgress:l,scrollTo:c,smoothScrollTargetReached:d,viewportHeight:u},{log:f}])=>{const h=Wj(),p=Wj(),g=Nj(0);let m=null,b=null,v=null;function y(){m&&(m(),m=null),v&&(v(),v=null),b&&(clearTimeout(b),b=null),jj(l,!1)}return Tj(Bj(h,Lj(r,u,n,g,s,a,f),Lj(e,o,i),_j((([[e,r,n,i,o,a,s,c],u,f,g])=>{const x=Xk(e),{align:w,behavior:$,offset:C}=x,S=i-1,j=Bk(x,r,S);let k=_k(j,r.offsetTree,u)+a;"end"===w?(k+=f+ck(r.sizeTree,j)[1]-n+g,j===S&&(k+=s)):"center"===w?k+=(f+ck(r.sizeTree,j)[1]-n+g)/2:k-=o,C&&(k+=C);const D=t=>{y(),t?(c("retrying to scroll to",{location:e},Gj.DEBUG),jj(h,e)):(jj(p,!0),c("list did not change, scroll successful",{},Gj.DEBUG))};if(y(),"smooth"===$){let e=!1;v=Sj(t,(t=>{e=e||t})),m=Ej(d,(()=>{D(e)}))}else m=Ej(Bj(t,function(e){return t=>{const r=setTimeout((()=>{t(!1)}),e);return e=>{e&&(t(!0),clearTimeout(r))}}}(150)),D);return b=setTimeout((()=>{y()}),1200),jj(l,!0),c("scrolling from index to",{behavior:$,index:j,top:k},Gj.DEBUG),{behavior:$,top:k}}))),c),{scrollTargetReached:p,scrollToIndex:h,topListHeight:g}}),Cj(Vk,ik,Qj),{singleton:!0});function Zk(e,t){0==e?t():requestAnimationFrame((()=>{Zk(e-1,t)}))}function Qk(e,t){const r=t-1;return"number"==typeof e?e:"LAST"===e.index?r:e.index}const Jk=Yj((([{defaultItemSize:e,listRefresh:t,sizes:r},{scrollTop:n},{scrollTargetReached:i,scrollToIndex:o},{didMount:a}])=>{const s=Nj(!0),l=Nj(0),c=Nj(!0);return Tj(Bj(a,Lj(l),Mj((([e,t])=>!!t)),Aj(!1)),s),Tj(Bj(a,Lj(l),Mj((([e,t])=>!!t)),Aj(!1)),c),Sj(Bj(Kj(t,a),Lj(s,r,e,c),Mj((([[,e],t,{sizeTree:r},n,i])=>e&&(!sk(r)||yj(n))&&!t&&!i)),Lj(l)),(([,e])=>{Ej(i,(()=>{jj(c,!0)})),Zk(4,(()=>{Ej(n,(()=>{jj(s,!0)})),jj(o,e)}))})),{initialItemFinalLocationReached:c,initialTopMostItemIndex:l,scrolledToInitialItem:s}}),Cj(Vk,ik,Gk,Kk),{singleton:!0});function eD(e,t){return Math.abs(e-t)<1.01}const tD="up",rD="down",nD={atBottom:!1,notAtBottomBecause:"NOT_SHOWING_LAST_ITEM",state:{offsetBottom:0,scrollHeight:0,scrollTop:0,viewportHeight:0}},iD=Yj((([{footerHeight:e,headerHeight:t,scrollBy:r,scrollContainerState:n,scrollTop:i,viewportHeight:o}])=>{const a=Nj(!1),s=Nj(!0),l=Wj(),c=Wj(),d=Nj(4),u=Nj(0),f=Hj(Bj(Xj(Bj(qj(i),zj(1),Aj(!0)),Bj(qj(i),zj(1),Aj(!1),Oj(100))),Fj()),!1),h=Hj(Bj(Xj(Bj(r,Aj(!0)),Bj(r,Aj(!1),Oj(200))),Fj()),!1);Tj(Bj(Kj(qj(i),qj(u)),_j((([e,t])=>e<=t)),Fj()),s),Tj(Bj(s,Pj(50)),c);const p=Vj(Bj(Kj(n,qj(o),qj(t),qj(e),qj(d)),Rj(((e,[{scrollHeight:t,scrollTop:r},n,i,o,a])=>{const s={scrollHeight:t,scrollTop:r,viewportHeight:n};if(r+n-t>-a){let t,n;return r>e.state.scrollTop?(t="SCROLLED_DOWN",n=e.state.scrollTop-r):(t="SIZE_DECREASED",n=e.state.scrollTop-r||e.scrollTopDelta),{atBottom:!0,atBottomBecause:t,scrollTopDelta:n,state:s}}let l;return l=s.scrollHeight>e.state.scrollHeight?"SIZE_INCREASED":n<e.state.viewportHeight?"VIEWPORT_HEIGHT_DECREASING":r<e.state.scrollTop?"SCROLLING_UPWARDS":"NOT_FULLY_SCROLLED_TO_LAST_ITEM_BOTTOM",{atBottom:!1,notAtBottomBecause:l,state:s}}),nD),Fj(((e,t)=>e&&e.atBottom===t.atBottom)))),g=Hj(Bj(n,Rj(((e,{scrollHeight:t,scrollTop:r,viewportHeight:n})=>{if(eD(e.scrollHeight,t))return{changed:!1,jump:0,scrollHeight:t,scrollTop:r};{const i=t-(r+n)<1;return e.scrollTop!==r&&i?{changed:!0,jump:e.scrollTop-r,scrollHeight:t,scrollTop:r}:{changed:!0,jump:0,scrollHeight:t,scrollTop:r}}}),{changed:!1,jump:0,scrollHeight:0,scrollTop:0}),Mj((e=>e.changed)),_j((e=>e.jump))),0);Tj(Bj(p,_j((e=>e.atBottom))),a),Tj(Bj(a,Pj(50)),l);const m=Nj(rD);Tj(Bj(n,_j((({scrollTop:e})=>e)),Fj(),Rj(((e,t)=>Dj(h)?{direction:e.direction,prevScrollTop:t}:{direction:t<e.prevScrollTop?tD:rD,prevScrollTop:t}),{direction:rD,prevScrollTop:0}),_j((e=>e.direction))),m),Tj(Bj(n,Pj(50),Aj("none")),m);const b=Nj(0);return Tj(Bj(f,Mj((e=>!e)),Aj(0)),b),Tj(Bj(i,Pj(100),Lj(f),Mj((([e,t])=>!!t)),Rj((([e,t],[r])=>[t,r]),[0,0]),_j((([e,t])=>t-e))),b),{atBottomState:p,atBottomStateChange:l,atBottomThreshold:d,atTopStateChange:c,atTopThreshold:u,isAtBottom:a,isAtTop:s,isScrolling:f,lastJumpDueToItemResize:g,scrollDirection:m,scrollVelocity:b}}),Cj(ik)),oD="top",aD="bottom",sD="none";function lD(e,t,r){return"number"==typeof e?r===tD&&t===oD||r===rD&&t===aD?e:0:r===tD?t===oD?e.main:e.reverse:t===aD?e.main:e.reverse}function cD(e,t){var r;return"number"==typeof e?e:null!=(r=e[t])?r:0}const dD=Yj((([{deviation:e,fixedHeaderHeight:t,headerHeight:r,scrollTop:n,viewportHeight:i}])=>{const o=Wj(),a=Nj(0),s=Nj(0),l=Nj(0),c=Hj(Bj(Kj(qj(n),qj(i),qj(r),qj(o,kk),qj(l),qj(a),qj(t),qj(e),qj(s)),_j((([e,t,r,[n,i],o,a,s,l,c])=>{const d=e-l,u=a+s,f=Math.max(r-d,0);let h=sD;const p=cD(c,oD),g=cD(c,aD);return n-=l,i+=r+s,(n+=r+s)>e+u-p&&(h=tD),(i-=l)<e-f+t+g&&(h=rD),h!==sD?[Math.max(d-r-lD(o,oD,h)-p,0),d-f-s+t+lD(o,aD,h)+g]:null})),Mj((e=>null!=e)),Fj(kk)),[0,0]);return{increaseViewportBy:s,listBoundary:o,overscan:l,topListHeight:a,visibleRange:c}}),Cj(ik),{singleton:!0});const uD={bottom:0,firstItemIndex:0,items:[],offsetBottom:0,offsetTop:0,top:0,topItems:[],topListHeight:0,totalCount:0};function fD(e,t,r,n,i,o){const{lastIndex:a,lastOffset:s,lastSize:l}=i;let c=0,d=0;if(e.length>0){c=e[0].offset;const t=e[e.length-1];d=t.offset+t.size}const u=r-a,f=c,h=s+u*l+(u-1)*n-d;return{bottom:d,firstItemIndex:o,items:pD(e,i,o),offsetBottom:h,offsetTop:c,top:f,topItems:pD(t,i,o),topListHeight:t.reduce(((e,t)=>t.size+e),0),totalCount:r}}function hD(e,t,r,n,i,o){let a=0;if(r.groupIndices.length>0)for(const t of r.groupIndices){if(t-a>=e)break;a++}const s=e+a,l=Qk(t,s);return fD(Array.from({length:s}).map(((e,t)=>({data:o[t+l],index:t+l,offset:0,size:0}))),[],s,i,r,n)}function pD(e,t,r){if(0===e.length)return[];if(!Ik(t))return e.map((e=>({...e,index:e.index+r,originalIndex:e.index})));const n=e[0].index,i=e[e.length-1].index,o=[],a=fk(t.groupOffsetTree,n,i);let s,l=0;for(const n of e){let e;(!s||s.end<n.index)&&(s=a.shift(),l=t.groupIndices.indexOf(s.start)),e=n.index===s.start?{index:l,type:"group"}:{groupIndex:l,index:n.index-(l+1)+r},o.push({...e,data:n.data,offset:n.offset,originalIndex:n.index,size:n.size})}return o}const gD=Yj((([{data:e,firstItemIndex:t,gap:r,sizes:n,totalCount:i},o,{listBoundary:a,topListHeight:s,visibleRange:l},{initialTopMostItemIndex:c,scrolledToInitialItem:d},{topListHeight:u},f,{didMount:h},{recalcInProgress:p}])=>{const g=Nj([]),m=Nj(0),b=Wj();Tj(o.topItemsIndexes,g);const v=Hj(Bj(Kj(h,p,qj(l,kk),qj(i),qj(n),qj(c),d,qj(g),qj(t),qj(r),e),Mj((([e,t,,r,,,,,,,n])=>{const i=n&&n.length!==r;return e&&!t&&!i})),_j((([,,[e,t],r,n,i,o,a,s,l,c])=>{const d=n,{offsetTree:u,sizeTree:f}=d,h=Dj(m);if(0===r)return{...uD,totalCount:r};if(0===e&&0===t)return 0===h?{...uD,totalCount:r}:hD(h,i,n,s,l,c||[]);if(sk(f))return h>0?null:fD(function(e,t,r){if(Ik(t)){const n=Ak(e,t);return[{index:ck(t.groupOffsetTree,n)[0],offset:0,size:0},{data:null==r?void 0:r[0],index:n,offset:0,size:0}]}return[{data:null==r?void 0:r[0],index:e,offset:0,size:0}]}(Qk(i,r),d,c),[],r,l,d,s);const p=[];if(a.length>0){const e=a[0],t=a[a.length-1];let r=0;for(const n of fk(f,e,t)){const i=n.value,o=Math.max(n.start,e),a=Math.min(n.end,t);for(let e=o;e<=a;e++)p.push({data:null==c?void 0:c[e],index:e,offset:r,size:i}),r+=i}}if(!o)return fD([],p,r,l,d,s);const g=a.length>0?a[a.length-1]+1:0,b=Rk(u,e,t,g);if(0===b.length)return null;const v=r-1;return fD(wj([],(r=>{for(const n of b){const i=n.value;let o=i.offset,a=n.start;const s=i.size;if(i.offset<e){a+=Math.floor((e-i.offset+l)/(s+l));const t=a-n.start;o+=t*s+t*l}a<g&&(o+=(g-a)*s,a=g);const d=Math.min(n.end,v);for(let e=a;e<=d&&!(o>=t);e++)r.push({data:null==c?void 0:c[e],index:e,offset:o,size:s}),o+=s+l}})),p,r,l,d,s)})),Mj((e=>null!==e)),Fj()),uD);Tj(Bj(e,Mj(yj),_j((e=>null==e?void 0:e.length))),i),Tj(Bj(v,_j((e=>e.topListHeight))),u),Tj(u,s),Tj(Bj(v,_j((e=>[e.top,e.bottom]))),a),Tj(Bj(v,_j((e=>e.items))),b);const y=Vj(Bj(v,Mj((({items:e})=>e.length>0)),Lj(i,e),Mj((([{items:e},t])=>e[e.length-1].originalIndex===t-1)),_j((([,e,t])=>[e-1,t])),Fj(kk),_j((([e])=>e)))),x=Vj(Bj(v,Pj(200),Mj((({items:e,topItems:t})=>e.length>0&&e[0].originalIndex===t.length)),_j((({items:e})=>e[0].index)),Fj())),w=Vj(Bj(v,Mj((({items:e})=>e.length>0)),_j((({items:e})=>{let t=0,r=e.length-1;for(;"group"===e[t].type&&t<r;)t++;for(;"group"===e[r].type&&r>t;)r--;return{endIndex:e[r].index,startIndex:e[t].index}})),Fj(jk)));return{endReached:y,initialItemCount:m,itemsRendered:b,listState:v,rangeChanged:w,startReached:x,topItemsIndexes:g,...f}}),Cj(Vk,Uk,dD,Jk,Gk,iD,Kk,Dk),{singleton:!0}),mD=Yj((([{fixedFooterHeight:e,fixedHeaderHeight:t,footerHeight:r,headerHeight:n},{listState:i}])=>{const o=Wj(),a=Hj(Bj(Kj(r,e,n,t,i),_j((([e,t,r,n,i])=>e+t+r+n+i.offsetBottom+i.bottom))),0);return Tj(qj(a),o),{totalListHeight:a,totalListHeightChanged:o}}),Cj(ik,gD),{singleton:!0}),bD=Yj((([{viewportHeight:e},{totalListHeight:t}])=>{const r=Nj(!1),n=Hj(Bj(Kj(r,e,t),Mj((([e])=>e)),_j((([,e,t])=>Math.max(0,e-t))),Pj(0),Fj()),0);return{alignToBottom:r,paddingTopAddition:n}}),Cj(ik,mD),{singleton:!0});function vD(e){return!!e&&("smooth"===e?"smooth":"auto")}const yD=Yj((([{listRefresh:e,totalCount:t},{atBottomState:r,isAtBottom:n},{scrollToIndex:i},{scrolledToInitialItem:o},{didMount:a,propsReady:s},{log:l},{scrollingInProgress:c}])=>{const d=Nj(!1),u=Wj();let f=null;function h(e){jj(i,{align:"end",behavior:e,index:"LAST"})}function p(e){const t=Ej(r,(t=>{e&&!t.atBottom&&"SIZE_INCREASED"===t.notAtBottomBecause&&!f&&(Dj(l)("scrolling to bottom due to increased size",{},Gj.DEBUG),h("auto"))}));setTimeout(t,100)}return Sj(Bj(Kj(Bj(qj(t),zj(1)),a),Lj(qj(d),n,o,c),_j((([[e,t],r,n,i,o])=>{let a=t&&i,s="auto";return a&&(s=((e,t)=>"function"==typeof e?vD(e(t)):t&&vD(e))(r,n||o),a=a&&!!s),{followOutputBehavior:s,shouldFollow:a,totalCount:e}})),Mj((({shouldFollow:e})=>e))),(({followOutputBehavior:t,totalCount:r})=>{f&&(f(),f=null),f=Ej(e,(()=>{Dj(l)("following output to ",{totalCount:r},Gj.DEBUG),h(t),f=null}))})),Sj(Bj(Kj(qj(d),t,s),Mj((([e,,t])=>e&&t)),Rj((({value:e},[,t])=>({refreshed:e===t,value:t})),{refreshed:!1,value:0}),Mj((({refreshed:e})=>e)),Lj(d,t)),(([,e])=>{Dj(o)&&p(!1!==e)})),Sj(u,(()=>{p(!1!==Dj(d))})),Sj(Kj(qj(d),r),(([e,t])=>{e&&!t.atBottom&&"VIEWPORT_HEIGHT_DECREASING"===t.notAtBottomBecause&&h("auto")})),{autoscrollToBottom:u,followOutput:d}}),Cj(Vk,iD,Gk,Jk,Kk,Qj,ik)),xD=Yj((([{data:e,firstItemIndex:t,gap:r,sizes:n},{initialTopMostItemIndex:i},{initialItemCount:o,listState:a},{didMount:s}])=>(Tj(Bj(s,Lj(o),Mj((([,e])=>0!==e)),Lj(i,n,t,r,e),_j((([[,e],t,r,n,i,o=[]])=>hD(e,t,r,n,i,o)))),a),{})),Cj(Vk,Jk,gD,Kk),{singleton:!0}),wD=Yj((([{didMount:e},{scrollTo:t},{listState:r}])=>{const n=Nj(0);return Sj(Bj(e,Lj(n),Mj((([,e])=>0!==e)),_j((([,e])=>({top:e})))),(e=>{Ej(Bj(r,zj(1),Mj((e=>e.items.length>1))),(()=>{requestAnimationFrame((()=>{jj(t,e)}))}))})),{initialScrollTop:n}}),Cj(Kk,ik,gD),{singleton:!0}),$D=({itemBottom:e,itemTop:t,locationParams:{align:r,behavior:n,...i},viewportBottom:o,viewportTop:a})=>t<a?{...i,align:null!=r?r:"start",behavior:n}:e>o?{...i,align:null!=r?r:"end",behavior:n}:null,CD=Yj((([{gap:e,sizes:t,totalCount:r},{fixedFooterHeight:n,fixedHeaderHeight:i,headerHeight:o,scrollingInProgress:a,scrollTop:s,viewportHeight:l},{scrollToIndex:c}])=>{const d=Wj();return Tj(Bj(d,Lj(t,l,r,o,i,n,s),Lj(e),_j((([[e,t,r,n,i,o,s,l],c])=>{const{align:d,behavior:u,calculateViewLocation:f=$D,done:h,...p}=e,g=Bk(e,t,n-1),m=_k(g,t.offsetTree,c)+i+o,b=f({itemBottom:m+ck(t.sizeTree,g)[1],itemTop:m,locationParams:{align:d,behavior:u,...p},viewportBottom:l+r-s,viewportTop:l+o});return b?h&&Ej(Bj(a,Mj((e=>!e)),zj(Dj(a)?1:2)),h):h&&h(),b})),Mj((e=>null!==e))),c),{scrollIntoView:d}}),Cj(Vk,ik,Gk,gD,Qj),{singleton:!0}),SD=Yj((([{scrollVelocity:e}])=>{const t=Nj(!1),r=Wj(),n=Nj(!1);return Tj(Bj(e,Lj(n,t,r),Mj((([e,t])=>!!t)),_j((([e,t,r,n])=>{const{enter:i,exit:o}=t;if(r){if(o(e,n))return!1}else if(i(e,n))return!0;return r})),Fj()),t),Sj(Bj(Kj(t,e,r),Lj(n)),(([[e,t,r],n])=>{e&&n&&n.change&&n.change(t,r)})),{isSeeking:t,scrollSeekConfiguration:n,scrollSeekRangeChanged:r,scrollVelocity:e}}),Cj(iD),{singleton:!0}),jD=Yj((([{scrollContainerState:e,scrollTo:t}])=>{const r=Wj(),n=Wj(),i=Wj(),o=Nj(!1),a=Nj(void 0);return Tj(Bj(Kj(r,n),_j((([{scrollHeight:e,scrollTop:t,viewportHeight:r},{offsetTop:n}])=>({scrollHeight:e,scrollTop:Math.max(0,t-n),viewportHeight:r})))),e),Tj(Bj(t,Lj(n),_j((([e,{offsetTop:t}])=>({...e,top:e.top+t})))),i),{customScrollParent:a,useWindowScroll:o,windowScrollContainerState:r,windowScrollTo:i,windowViewportRect:n}}),Cj(ik)),kD=Yj((([{sizeRanges:e,sizes:t},{headerHeight:r,scrollTop:n},{initialTopMostItemIndex:i},{didMount:o},{useWindowScroll:a,windowScrollContainerState:s,windowViewportRect:l}])=>{const c=Wj(),d=Nj(void 0),u=Nj(null),f=Nj(null);return Tj(s,u),Tj(l,f),Sj(Bj(c,Lj(t,n,a,u,f,r)),(([e,t,r,n,i,o,a])=>{const s=function(e){return pk(e).map((({k:e,v:t},r,n)=>{const i=n[r+1];return{endIndex:i?i.k-1:1/0,size:t,startIndex:e}}))}(t.sizeTree);n&&null!==i&&null!==o&&(r=i.scrollTop-o.offsetTop),e({ranges:s,scrollTop:r-=a})})),Tj(Bj(d,Mj(yj),_j(DD)),i),Tj(Bj(o,Lj(d),Mj((([,e])=>void 0!==e)),Fj(),_j((([,e])=>e.ranges))),e),{getState:c,restoreStateFrom:d}}),Cj(Vk,ik,Jk,Kk,jD));function DD(e){return{align:"start",index:0,offset:e.scrollTop}}const TD=Yj((([{topItemsIndexes:e}])=>{const t=Nj(0);return Tj(Bj(t,Mj((e=>e>=0)),_j((e=>Array.from({length:e}).map(((e,t)=>t))))),e),{topItemCount:t}}),Cj(gD));function ED(e){let t,r=!1;return()=>(r||(r=!0,t=e()),t)}const OD=ED((()=>/iP(ad|od|hone)/i.test(navigator.userAgent)&&/WebKit/i.test(navigator.userAgent))),ID=Yj((([{deviation:e,scrollBy:t,scrollingInProgress:r,scrollTop:n},{isAtBottom:i,isScrolling:o,lastJumpDueToItemResize:a,scrollDirection:s},{listState:l},{beforeUnshiftWith:c,gap:d,shiftWithOffset:u,sizes:f},{log:h},{recalcInProgress:p}])=>{const g=Vj(Bj(l,Lj(a),Rj((([,e,t,r],[{bottom:n,items:i,offsetBottom:o,totalCount:a},s])=>{const l=n+o;let c=0;return t===a&&e.length>0&&i.length>0&&(0===i[0].originalIndex&&0===e[0].originalIndex||(c=l-r,0!==c&&(c+=s))),[c,i,a,l]}),[0,[],0,0]),Mj((([e])=>0!==e)),Lj(n,s,r,i,h,p),Mj((([,e,t,r,,,n])=>!n&&!r&&0!==e&&t===tD)),_j((([[e],,,,,t])=>(t("Upward scrolling compensation",{amount:e},Gj.DEBUG),e)))));function m(r){r>0?(jj(t,{behavior:"auto",top:-r}),jj(e,0)):(jj(e,0),jj(t,{behavior:"auto",top:-r}))}return Sj(Bj(g,Lj(e,o)),(([t,r,n])=>{n&&OD()?jj(e,r-t):m(-t)})),Sj(Bj(Kj(Hj(o,!1),e,p),Mj((([e,t,r])=>!e&&!r&&0!==t)),_j((([e,t])=>t)),Pj(1)),m),Tj(Bj(u,_j((e=>({top:-e})))),t),Sj(Bj(c,Lj(f,d),_j((([e,{groupIndices:t,lastSize:r,sizeTree:n},i])=>{function o(e){return e*(r+i)}if(0===t.length)return o(e);{let r=0;const i=lk(n,0);let a=0,s=0;for(;a<e;){a++,r+=i;let n=t.length===s+1?1/0:t[s+1]-t[s]-1;a+n>e&&(r-=i,n=e-a+1),a+=n,r+=o(n),s++}return r}}))),(r=>{jj(e,r),requestAnimationFrame((()=>{jj(t,{top:r}),requestAnimationFrame((()=>{jj(e,0),jj(p,!1)}))}))})),{deviation:e}}),Cj(ik,iD,gD,Vk,Qj,Dk)),FD=Yj((([e,t,r,n,i,o,a,s,l,c])=>({...e,...t,...r,...n,...i,...o,...a,...s,...l,...c})),Cj(dD,xD,Kk,SD,mD,wD,bD,jD,CD,Qj)),MD=Yj((([{data:e,defaultItemSize:t,firstItemIndex:r,fixedItemSize:n,gap:i,groupIndices:o,itemSize:a,sizeRanges:s,sizes:l,statefulTotalCount:c,totalCount:d,trackItemSizes:u},{initialItemFinalLocationReached:f,initialTopMostItemIndex:h,scrolledToInitialItem:p},g,m,b,{listState:v,topItemsIndexes:y,...x},{scrollToIndex:w},$,{topItemCount:C},{groupCounts:S},j])=>(Tj(x.rangeChanged,j.scrollSeekRangeChanged),Tj(Bj(j.windowViewportRect,_j((e=>e.visibleHeight))),g.viewportHeight),{data:e,defaultItemHeight:t,firstItemIndex:r,fixedItemHeight:n,gap:i,groupCounts:S,initialItemFinalLocationReached:f,initialTopMostItemIndex:h,scrolledToInitialItem:p,sizeRanges:s,topItemCount:C,topItemsIndexes:y,totalCount:d,...b,groupIndices:o,itemSize:a,listState:v,scrollToIndex:w,statefulTotalCount:c,trackItemSizes:u,...x,...j,...g,sizes:l,...m})),Cj(Vk,Jk,ik,kD,yD,gD,Gk,ID,TD,Uk,FD));function _D(e,t){const r={},n={};let i=0;const o=e.length;for(;i<o;)n[e[i]]=1,i+=1;for(const e in t)Object.hasOwn(n,e)||(r[e]=t[e]);return r}const AD=typeof document<"u"?Y.default.useLayoutEffect:Y.default.useEffect;function BD(t,r,n){const i=Object.keys(r.required||{}),o=Object.keys(r.optional||{}),a=Object.keys(r.methods||{}),s=Object.keys(r.events||{}),l=Y.default.createContext({});function c(e,t){e.propsReady&&jj(e.propsReady,!1);for(const n of i){jj(e[r.required[n]],t[n])}for(const n of o)if(n in t){jj(e[r.optional[n]],t[n])}e.propsReady&&jj(e.propsReady,!0)}function d(e){return s.reduce(((t,n)=>(t[n]=function(e){let t,r;const n=()=>null==t?void 0:t();return function(i,o){switch(i){case uj:return o?r===o?void 0:(n(),r=o,t=Sj(e,o),t):(n(),xj);case fj:return n(),void(r=null)}}}(e[r.events[n]]),t)),{})}const u=Y.default.forwardRef(((u,f)=>{const{children:h,...p}=u,[g]=Y.default.useState((()=>wj(function(e){const t=new Map,r=({constructor:e,dependencies:n,id:i,singleton:o})=>{if(o&&t.has(i))return t.get(i);const a=e(n.map((e=>r(e))));return o&&t.set(i,a),a};return r(e)}(t),(e=>{c(e,p)})))),[m]=Y.default.useState(bj(d,g));AD((()=>{for(const e of s)e in p&&Sj(m[e],p[e]);return()=>{Object.values(m).map(kj)}}),[p,m,g]),AD((()=>{c(g,p)})),Y.default.useImperativeHandle(f,pj(function(e){return a.reduce(((t,n)=>(t[n]=t=>{jj(e[r.methods[n]],t)},t)),{})}(g)));const b=n;return e.jsx(l.Provider,{value:g,children:n?e.jsx(b,{..._D([...i,...o,...s],p),children:h}):h})})),f=Y.default.version.startsWith("18")?e=>{const t=Y.default.useContext(l)[e],r=Y.default.useCallback((e=>Sj(t,e)),[t]);return Y.default.useSyncExternalStore(r,(()=>Dj(t)),(()=>Dj(t)))}:e=>{const t=Y.default.useContext(l)[e],[r,n]=Y.default.useState(bj(Dj,t));return AD((()=>Sj(t,(e=>{e!==r&&n(pj(e))}))),[t,r]),r};return{Component:u,useEmitter:(e,t)=>{const r=Y.default.useContext(l)[e];AD((()=>Sj(r,t)),[t,r])},useEmitterValue:f,usePublisher:e=>Y.default.useCallback(vj(jj,Y.default.useContext(l)[e]),[e])}}const RD=Y.default.createContext(void 0),zD=Y.default.createContext(void 0),PD=typeof document<"u"?Y.default.useLayoutEffect:Y.default.useEffect;function LD(e,t,r,n=xj,i,o){const a=Y.default.useRef(null),s=Y.default.useRef(null),l=Y.default.useRef(null),c=Y.default.useCallback((r=>{const n=r.target,i=n===window||n===document,a=o?i?window.pageXOffset||document.documentElement.scrollLeft:n.scrollLeft:i?window.pageYOffset||document.documentElement.scrollTop:n.scrollTop,c=o?i?document.documentElement.scrollWidth:n.scrollWidth:i?document.documentElement.scrollHeight:n.scrollHeight,d=o?i?window.innerWidth:n.offsetWidth:i?window.innerHeight:n.offsetHeight,u=()=>{e({scrollHeight:c,scrollTop:Math.max(a,0),viewportHeight:d})};r.suppressFlushSync?u():U.default.flushSync(u),null!==s.current&&(a===s.current||a<=0||a===c-d)&&(s.current=null,t(!0),l.current&&(clearTimeout(l.current),l.current=null))}),[e,t]);return Y.default.useEffect((()=>{const e=i||a.current;return n(i||a.current),c({suppressFlushSync:!0,target:e}),e.addEventListener("scroll",c,{passive:!0}),()=>{n(null),e.removeEventListener("scroll",c)}}),[a,c,r,n,i]),{scrollByCallback:function(e){o&&(e={behavior:e.behavior,left:e.top}),a.current.scrollBy(e)},scrollerRef:a,scrollToCallback:function(r){const n=a.current;if(!n||(o?"offsetWidth"in n&&0===n.offsetWidth:"offsetHeight"in n&&0===n.offsetHeight))return;const i="smooth"===r.behavior;let c,d,u;n===window?(d=Math.max(Ok(document.documentElement,o?"width":"height"),o?document.documentElement.scrollWidth:document.documentElement.scrollHeight),c=o?window.innerWidth:window.innerHeight,u=o?document.documentElement.scrollLeft:document.documentElement.scrollTop):(d=n[o?"scrollWidth":"scrollHeight"],c=Ok(n,o?"width":"height"),u=n[o?"scrollLeft":"scrollTop"]);const f=d-c;if(r.top=Math.ceil(Math.max(Math.min(f,r.top),0)),eD(c,d)||r.top===u)return e({scrollHeight:d,scrollTop:u,viewportHeight:c}),void(i&&t(!0));i?(s.current=r.top,l.current&&clearTimeout(l.current),l.current=setTimeout((()=>{l.current=null,s.current=null,t(!0)}),1e3)):s.current=null,o&&(r={behavior:r.behavior,left:r.top}),n.scrollTo(r)}}}const ND="-webkit-sticky",HD="sticky",WD=ED((()=>{if(typeof document>"u")return HD;const e=document.createElement("div");return e.style.position=ND,e.style.position===ND?ND:HD}));function VD(e){return e}const YD=Yj((()=>{const e=Nj((e=>`Item ${e}`)),t=Nj(null),r=Nj((e=>`Group ${e}`)),n=Nj({}),i=Nj(VD),o=Nj("div"),a=Nj(xj),s=(e,t=null)=>Hj(Bj(n,_j((t=>t[e])),Fj()),t);return{components:n,computeItemKey:i,context:t,EmptyPlaceholder:s("EmptyPlaceholder"),FooterComponent:s("Footer"),GroupComponent:s("Group","div"),groupContent:r,HeaderComponent:s("Header"),HeaderFooterTag:o,ItemComponent:s("Item","div"),itemContent:e,ListComponent:s("List","div"),ScrollerComponent:s("Scroller","div"),scrollerRef:a,ScrollSeekPlaceholder:s("ScrollSeekPlaceholder"),TopItemListComponent:s("TopItemList")}})),UD=Yj((([e,t])=>({...e,...t})),Cj(MD,YD)),KD=({height:t})=>e.jsx("div",{style:{height:t}}),qD={overflowAnchor:"none",position:WD(),zIndex:1},XD={overflowAnchor:"none"},GD={...XD,display:"inline-block",height:"100%"},ZD=Y.default.memo((function({showTopList:r=!1}){const n=pT("listState"),i=gT("sizeRanges"),o=pT("useWindowScroll"),a=pT("customScrollParent"),s=gT("windowScrollContainerState"),l=gT("scrollContainerState"),c=a||o?s:l,d=pT("itemContent"),u=pT("context"),f=pT("groupContent"),h=pT("trackItemSizes"),p=pT("itemSize"),g=pT("log"),m=gT("gap"),b=pT("horizontalDirection"),{callbackRef:v}=tk(i,p,h,r?xj:c,g,m,a,b,pT("skipAnimationFrameInResizeObserver")),[y,x]=Y.default.useState(0);hT("deviation",(e=>{y!==e&&x(e)}));const w=pT("EmptyPlaceholder"),$=pT("ScrollSeekPlaceholder")||KD,C=pT("ListComponent"),S=pT("ItemComponent"),j=pT("GroupComponent"),k=pT("computeItemKey"),D=pT("isSeeking"),T=pT("groupIndices").length>0,E=pT("alignToBottom"),O=pT("initialItemFinalLocationReached"),I=r?{}:{boxSizing:"border-box",...b?{display:"inline-block",height:"100%",marginLeft:0!==y?y:E?"auto":0,paddingLeft:n.offsetTop,paddingRight:n.offsetBottom,whiteSpace:"nowrap"}:{marginTop:0!==y?y:E?"auto":0,paddingBottom:n.offsetBottom,paddingTop:n.offsetTop},...O?{}:{visibility:"hidden"}};return!r&&0===n.totalCount&&w?e.jsx(w,{...rT(w,u)}):e.jsx(C,{...rT(C,u),"data-testid":r?"virtuoso-top-item-list":"virtuoso-item-list",ref:v,style:I,children:(r?n.topItems:n.items).map((e=>{const r=e.originalIndex,i=k(r+n.firstItemIndex,e.data,u);return D?t.createElement($,{...rT($,u),height:e.size,index:e.index,key:i,type:e.type||"item",..."group"===e.type?{}:{groupIndex:e.groupIndex}}):"group"===e.type?t.createElement(j,{...rT(j,u),"data-index":r,"data-item-index":e.index,"data-known-size":e.size,key:i,style:qD},f(e.index,u)):t.createElement(S,{...rT(S,u),...nT(S,e.data),"data-index":r,"data-item-group-index":e.groupIndex,"data-item-index":e.index,"data-known-size":e.size,key:i,style:b?GD:XD},T?d(e.index,e.groupIndex,e.data,u):d(e.index,e.data,u))}))})})),QD={height:"100%",outline:"none",overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},JD={outline:"none",overflowX:"auto",position:"relative"},eT=e=>({height:"100%",position:"absolute",top:0,width:"100%",...e?{display:"flex",flexDirection:"column"}:{}}),tT={position:WD(),top:0,width:"100%",zIndex:1};function rT(e,t){if("string"!=typeof e)return{context:t}}function nT(e,t){return{item:"string"==typeof e?void 0:t}}const iT=Y.default.memo((function(){const t=pT("HeaderComponent"),r=gT("headerHeight"),n=pT("HeaderFooterTag"),i=Jj(Y.default.useMemo((()=>e=>{r(Ok(e,"height"))}),[r]),!0,pT("skipAnimationFrameInResizeObserver")),o=pT("context");return t?e.jsx(n,{ref:i,children:e.jsx(t,{...rT(t,o)})}):null})),oT=Y.default.memo((function(){const t=pT("FooterComponent"),r=gT("footerHeight"),n=pT("HeaderFooterTag"),i=Jj(Y.default.useMemo((()=>e=>{r(Ok(e,"height"))}),[r]),!0,pT("skipAnimationFrameInResizeObserver")),o=pT("context");return t?e.jsx(n,{ref:i,children:e.jsx(t,{...rT(t,o)})}):null}));function aT({useEmitter:t,useEmitterValue:r,usePublisher:n}){return Y.default.memo((function({children:i,style:o,...a}){const s=n("scrollContainerState"),l=r("ScrollerComponent"),c=n("smoothScrollTargetReached"),d=r("scrollerRef"),u=r("context"),f=r("horizontalDirection")||!1,{scrollByCallback:h,scrollerRef:p,scrollToCallback:g}=LD(s,c,l,d,void 0,f);return t("scrollTo",g),t("scrollBy",h),e.jsx(l,{"data-testid":"virtuoso-scroller","data-virtuoso-scroller":!0,ref:p,style:{...f?JD:QD,...o},tabIndex:0,...a,...rT(l,u),children:i})}))}function sT({useEmitter:t,useEmitterValue:r,usePublisher:n}){return Y.default.memo((function({children:i,style:o,...a}){const s=n("windowScrollContainerState"),l=r("ScrollerComponent"),c=n("smoothScrollTargetReached"),d=r("totalListHeight"),u=r("deviation"),f=r("customScrollParent"),h=r("context"),{scrollByCallback:p,scrollerRef:g,scrollToCallback:m}=LD(s,c,l,xj,f);return PD((()=>(g.current=f||window,()=>{g.current=null})),[g,f]),t("windowScrollTo",m),t("scrollBy",p),e.jsx(l,{"data-virtuoso-scroller":!0,style:{position:"relative",...o,...0!==d?{height:d+u}:{}},...a,...rT(l,h),children:i})}))}const lT=({children:t})=>{const r=Y.default.useContext(RD),n=gT("viewportHeight"),i=gT("fixedItemHeight"),o=pT("alignToBottom"),a=pT("horizontalDirection"),s=Jj(Y.default.useMemo((()=>mj(n,(e=>Ok(e,a?"width":"height")))),[n,a]),!0,pT("skipAnimationFrameInResizeObserver"));return Y.default.useEffect((()=>{r&&(n(r.viewportHeight),i(r.itemHeight))}),[r,n,i]),e.jsx("div",{"data-viewport-type":"element",ref:s,style:eT(o),children:t})},cT=({children:t})=>{const r=Y.default.useContext(RD),n=gT("windowViewportRect"),i=gT("fixedItemHeight"),o=pT("customScrollParent"),a=nk(n,o,pT("skipAnimationFrameInResizeObserver")),s=pT("alignToBottom");return Y.default.useEffect((()=>{r&&(i(r.itemHeight),n({offsetTop:0,visibleHeight:r.viewportHeight,visibleWidth:100}))}),[r,n,i]),e.jsx("div",{"data-viewport-type":"window",ref:a,style:eT(s),children:t})},dT=({children:t})=>{const r=pT("TopItemListComponent")||"div",n=pT("headerHeight"),i={...tT,marginTop:`${n}px`},o=pT("context");return e.jsx(r,{style:i,...rT(r,o),children:t})},uT=Y.default.memo((function(t){const r=pT("useWindowScroll"),n=pT("topItemsIndexes").length>0,i=pT("customScrollParent"),o=pT("context"),a=i||r?bT:mT,s=i||r?cT:lT;return e.jsxs(a,{...t,...rT(a,o),children:[n&&e.jsx(dT,{children:e.jsx(ZD,{showTopList:!0})}),e.jsxs(s,{children:[e.jsx(iT,{}),e.jsx(ZD,{}),e.jsx(oT,{})]})]})})),{Component:fT,useEmitter:hT,useEmitterValue:pT,usePublisher:gT}=BD(UD,{events:{atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",endReached:"endReached",groupIndices:"groupIndices",isScrolling:"isScrolling",itemsRendered:"itemsRendered",rangeChanged:"rangeChanged",startReached:"startReached",totalListHeightChanged:"totalListHeightChanged"},methods:{autoscrollToBottom:"autoscrollToBottom",getState:"getState",scrollBy:"scrollBy",scrollIntoView:"scrollIntoView",scrollTo:"scrollTo",scrollToIndex:"scrollToIndex"},optional:{alignToBottom:"alignToBottom",atBottomThreshold:"atBottomThreshold",atTopThreshold:"atTopThreshold",components:"components",computeItemKey:"computeItemKey",context:"context",customScrollParent:"customScrollParent",data:"data",defaultItemHeight:"defaultItemHeight",firstItemIndex:"firstItemIndex",fixedItemHeight:"fixedItemHeight",followOutput:"followOutput",groupContent:"groupContent",groupCounts:"groupCounts",headerFooterTag:"HeaderFooterTag",horizontalDirection:"horizontalDirection",increaseViewportBy:"increaseViewportBy",initialItemCount:"initialItemCount",initialScrollTop:"initialScrollTop",initialTopMostItemIndex:"initialTopMostItemIndex",itemContent:"itemContent",itemSize:"itemSize",logLevel:"logLevel",overscan:"overscan",restoreStateFrom:"restoreStateFrom",scrollerRef:"scrollerRef",scrollSeekConfiguration:"scrollSeekConfiguration",skipAnimationFrameInResizeObserver:"skipAnimationFrameInResizeObserver",topItemCount:"topItemCount",totalCount:"totalCount",useWindowScroll:"useWindowScroll"},required:{}},uT),mT=aT({useEmitter:hT,useEmitterValue:pT,usePublisher:gT}),bT=sT({useEmitter:hT,useEmitterValue:pT,usePublisher:gT}),vT=fT,yT={bottom:0,itemHeight:0,items:[],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},xT={bottom:0,itemHeight:0,items:[{index:0}],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},{ceil:wT,floor:$T,max:CT,min:ST,round:jT}=Math;function kT(e,t,r){return Array.from({length:t-e+1}).map(((t,n)=>({data:null===r?null:r[n+e],index:n+e})))}function DT(e,t){return e&&e.width===t.width&&e.height===t.height}function TT(e,t){return e&&e.column===t.column&&e.row===t.row}const ET=Yj((([{increaseViewportBy:e,listBoundary:t,overscan:r,visibleRange:n},{footerHeight:i,headerHeight:o,scrollBy:a,scrollContainerState:s,scrollTo:l,scrollTop:c,smoothScrollTargetReached:d,viewportHeight:u},f,h,{didMount:p,propsReady:g},{customScrollParent:m,useWindowScroll:b,windowScrollContainerState:v,windowScrollTo:y,windowViewportRect:x},w])=>{const $=Nj(0),C=Nj(0),S=Nj(yT),j=Nj({height:0,width:0}),k=Nj({height:0,width:0}),D=Wj(),T=Wj(),E=Nj(0),O=Nj(null),I=Nj({column:0,row:0}),F=Wj(),M=Wj(),_=Nj(!1),A=Nj(0),B=Nj(!0),R=Nj(!1),z=Nj(!1);Sj(Bj(p,Lj(A),Mj((([e,t])=>!!t))),(()=>{jj(B,!1)})),Sj(Bj(Kj(p,B,k,j,A,R),Mj((([e,t,r,n,,i])=>e&&!t&&0!==r.height&&0!==n.height&&!i))),(([,,,,e])=>{jj(R,!0),Zk(1,(()=>{jj(D,e)})),Ej(Bj(c),(()=>{jj(t,[0,0]),jj(B,!0)}))})),Tj(Bj(M,Mj((e=>null!=e&&e.scrollTop>0)),Aj(0)),C),Sj(Bj(p,Lj(M),Mj((([,e])=>null!=e))),(([,e])=>{e&&(jj(j,e.viewport),jj(k,e.item),jj(I,e.gap),e.scrollTop>0&&(jj(_,!0),Ej(Bj(c,zj(1)),(e=>{jj(_,!1)})),jj(l,{top:e.scrollTop})))})),Tj(Bj(j,_j((({height:e})=>e))),u),Tj(Bj(Kj(qj(j,DT),qj(k,DT),qj(I,((e,t)=>e&&e.column===t.column&&e.row===t.row)),qj(c)),_j((([e,t,r,n])=>({gap:r,item:t,scrollTop:n,viewport:e})))),F),Tj(Bj(Kj(qj($),n,qj(I,TT),qj(k,DT),qj(j,DT),qj(O),qj(C),qj(_),qj(B),qj(A)),Mj((([,,,,,,,e])=>!e)),_j((([e,[t,r],n,i,o,a,s,,l,c])=>{const{column:d,row:u}=n,{height:f,width:h}=i,{width:p}=o;if(0===s&&(0===e||0===p))return yT;if(0===h){const t=Qk(c,e);return function(e){return{...xT,items:e}}(kT(t,t+Math.max(s-1,0),a))}const g=OT(p,h,d);let m,b;l?0===t&&0===r&&s>0?(m=0,b=s-1):(m=g*$T((t+u)/(f+u)),b=g*wT((r+u)/(f+u))-1,b=ST(e-1,CT(b,g-1)),m=ST(b,CT(0,m))):(m=0,b=-1);const v=kT(m,b,a),{bottom:y,top:x}=IT(o,n,i,v),w=wT(e/g);return{bottom:y,itemHeight:f,items:v,itemWidth:h,offsetBottom:w*f+(w-1)*u-y,offsetTop:x,top:x}}))),S),Tj(Bj(O,Mj((e=>null!==e)),_j((e=>e.length))),$),Tj(Bj(Kj(j,k,S,I),Mj((([e,t,{items:r}])=>r.length>0&&0!==t.height&&0!==e.height)),_j((([e,t,{items:r},n])=>{const{bottom:i,top:o}=IT(e,n,t,r);return[o,i]})),Fj(kk)),t);const P=Nj(!1);Tj(Bj(c,Lj(P),_j((([e,t])=>t||0!==e))),P);const L=Vj(Bj(Kj(S,$),Mj((([{items:e}])=>e.length>0)),Lj(P),Mj((([[e,t],r])=>{const n=e.items[e.items.length-1].index===t-1;return(r||e.bottom>0&&e.itemHeight>0&&0===e.offsetBottom&&e.items.length===t)&&n})),_j((([[,e]])=>e-1)),Fj())),N=Vj(Bj(qj(S),Mj((({items:e})=>e.length>0&&0===e[0].index)),Aj(0),Fj())),H=Vj(Bj(qj(S),Lj(_),Mj((([{items:e},t])=>e.length>0&&!t)),_j((([{items:e}])=>({endIndex:e[e.length-1].index,startIndex:e[0].index}))),Fj(jk),Pj(0)));Tj(H,h.scrollSeekRangeChanged),Tj(Bj(D,Lj(j,k,$,I),_j((([e,t,r,n,i])=>{const o=Xk(e),{align:a,behavior:s,offset:l}=o;let c=o.index;"LAST"===c&&(c=n-1),c=CT(0,c,ST(n-1,c));let d=FT(t,i,r,c);return"end"===a?d=jT(d-t.height+r.height):"center"===a&&(d=jT(d-t.height/2+r.height/2)),l&&(d+=l),{behavior:s,top:d}}))),l);const W=Hj(Bj(S,_j((e=>e.offsetBottom+e.bottom))),0);return Tj(Bj(x,_j((e=>({height:e.visibleHeight,width:e.visibleWidth})))),j),{customScrollParent:m,data:O,deviation:E,footerHeight:i,gap:I,headerHeight:o,increaseViewportBy:e,initialItemCount:C,itemDimensions:k,overscan:r,restoreStateFrom:M,scrollBy:a,scrollContainerState:s,scrollHeight:T,scrollTo:l,scrollToIndex:D,scrollTop:c,smoothScrollTargetReached:d,totalCount:$,useWindowScroll:b,viewportDimensions:j,windowScrollContainerState:v,windowScrollTo:y,windowViewportRect:x,...h,gridState:S,horizontalDirection:z,initialTopMostItemIndex:A,totalListHeight:W,...f,endReached:L,propsReady:g,rangeChanged:H,startReached:N,stateChanged:F,stateRestoreInProgress:_,...w}}),Cj(dD,ik,iD,SD,Kk,jD,Qj));function OT(e,t,r){return CT(1,$T((e+r)/($T(t)+r)))}function IT(e,t,r,n){const{height:i}=r;if(void 0===i||0===n.length)return{bottom:0,top:0};const o=FT(e,t,r,n[0].index);return{bottom:FT(e,t,r,n[n.length-1].index)+i,top:o}}function FT(e,t,r,n){const i=OT(e.width,r.width,t.column),o=$T(n/i),a=o*r.height+CT(0,o-1)*t.row;return a>0?a+t.row:a}const MT=Yj((()=>{const e=Nj((e=>`Item ${e}`)),t=Nj({}),r=Nj(null),n=Nj("virtuoso-grid-item"),i=Nj("virtuoso-grid-list"),o=Nj(VD),a=Nj("div"),s=Nj(xj),l=(e,r=null)=>Hj(Bj(t,_j((t=>t[e])),Fj()),r),c=Nj(!1),d=Nj(!1);return Tj(qj(d),c),{components:t,computeItemKey:o,context:r,FooterComponent:l("Footer"),HeaderComponent:l("Header"),headerFooterTag:a,itemClassName:n,ItemComponent:l("Item","div"),itemContent:e,listClassName:i,ListComponent:l("List","div"),readyStateChanged:c,reportReadyState:d,ScrollerComponent:l("Scroller","div"),scrollerRef:s,ScrollSeekPlaceholder:l("ScrollSeekPlaceholder","div")}})),_T=Yj((([e,t])=>({...e,...t})),Cj(ET,MT)),AT=Y.default.memo((function(){const r=WT("gridState"),n=WT("listClassName"),i=WT("itemClassName"),o=WT("itemContent"),a=WT("computeItemKey"),s=WT("isSeeking"),l=VT("scrollHeight"),c=WT("ItemComponent"),d=WT("ListComponent"),u=WT("ScrollSeekPlaceholder"),f=WT("context"),h=VT("itemDimensions"),p=VT("gap"),g=WT("log"),m=WT("stateRestoreInProgress"),b=VT("reportReadyState"),v=Jj(Y.default.useMemo((()=>e=>{const t=e.parentElement.parentElement.scrollHeight;l(t);const r=e.firstChild;if(r){const{height:e,width:t}=r.getBoundingClientRect();h({height:e,width:t})}p({column:KT("column-gap",getComputedStyle(e).columnGap,g),row:KT("row-gap",getComputedStyle(e).rowGap,g)})}),[l,h,p,g]),!0,!1);return PD((()=>{r.itemHeight>0&&r.itemWidth>0&&b(!0)}),[r]),m?null:e.jsx(d,{className:n,ref:v,...rT(d,f),"data-testid":"virtuoso-item-list",style:{paddingBottom:r.offsetBottom,paddingTop:r.offsetTop},children:r.items.map((n=>{const l=a(n.index,n.data,f);return s?e.jsx(u,{...rT(u,f),height:r.itemHeight,index:n.index,width:r.itemWidth},l):t.createElement(c,{...rT(c,f),className:i,"data-index":n.index,key:l},o(n.index,n.data,f))}))})})),BT=Y.default.memo((function(){const t=WT("HeaderComponent"),r=VT("headerHeight"),n=WT("headerFooterTag"),i=Jj(Y.default.useMemo((()=>e=>{r(Ok(e,"height"))}),[r]),!0,!1),o=WT("context");return t?e.jsx(n,{ref:i,children:e.jsx(t,{...rT(t,o)})}):null})),RT=Y.default.memo((function(){const t=WT("FooterComponent"),r=VT("footerHeight"),n=WT("headerFooterTag"),i=Jj(Y.default.useMemo((()=>e=>{r(Ok(e,"height"))}),[r]),!0,!1),o=WT("context");return t?e.jsx(n,{ref:i,children:e.jsx(t,{...rT(t,o)})}):null})),zT=({children:t})=>{const r=Y.default.useContext(zD),n=VT("itemDimensions"),i=VT("viewportDimensions"),o=Jj(Y.default.useMemo((()=>e=>{i(e.getBoundingClientRect())}),[i]),!0,!1);return Y.default.useEffect((()=>{r&&(i({height:r.viewportHeight,width:r.viewportWidth}),n({height:r.itemHeight,width:r.itemWidth}))}),[r,i,n]),e.jsx("div",{ref:o,style:eT(!1),children:t})},PT=({children:t})=>{const r=Y.default.useContext(zD),n=VT("windowViewportRect"),i=VT("itemDimensions"),o=WT("customScrollParent"),a=nk(n,o,!1);return Y.default.useEffect((()=>{r&&(i({height:r.itemHeight,width:r.itemWidth}),n({offsetTop:0,visibleHeight:r.viewportHeight,visibleWidth:r.viewportWidth}))}),[r,n,i]),e.jsx("div",{ref:a,style:eT(!1),children:t})},LT=Y.default.memo((function({...t}){const r=WT("useWindowScroll"),n=WT("customScrollParent"),i=n||r?UT:YT,o=n||r?PT:zT,a=WT("context");return e.jsx(i,{...t,...rT(i,a),children:e.jsxs(o,{children:[e.jsx(BT,{}),e.jsx(AT,{}),e.jsx(RT,{})]})})})),{Component:NT,useEmitter:HT,useEmitterValue:WT,usePublisher:VT}=BD(_T,{events:{atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",endReached:"endReached",isScrolling:"isScrolling",rangeChanged:"rangeChanged",readyStateChanged:"readyStateChanged",startReached:"startReached",stateChanged:"stateChanged"},methods:{scrollBy:"scrollBy",scrollTo:"scrollTo",scrollToIndex:"scrollToIndex"},optional:{components:"components",computeItemKey:"computeItemKey",context:"context",customScrollParent:"customScrollParent",data:"data",headerFooterTag:"headerFooterTag",increaseViewportBy:"increaseViewportBy",initialItemCount:"initialItemCount",initialTopMostItemIndex:"initialTopMostItemIndex",itemClassName:"itemClassName",itemContent:"itemContent",listClassName:"listClassName",logLevel:"logLevel",overscan:"overscan",restoreStateFrom:"restoreStateFrom",scrollerRef:"scrollerRef",scrollSeekConfiguration:"scrollSeekConfiguration",totalCount:"totalCount",useWindowScroll:"useWindowScroll"}},LT),YT=aT({useEmitter:HT,useEmitterValue:WT,usePublisher:VT}),UT=sT({useEmitter:HT,useEmitterValue:WT,usePublisher:VT});function KT(e,t,r){return"normal"!==t&&!(null!=t&&t.endsWith("px"))&&r(`${e} was not resolved to pixel value correctly`,t,Gj.WARN),"normal"===t?0:parseInt(null!=t?t:"0",10)}const qT=Y.default.createContext({focusedIndex:-1,setFocusedIndex:()=>{}}),XT=({children:r})=>{const[n,i]=t.useState(-1);return e.jsx(qT.Provider,{value:{focusedIndex:n,setFocusedIndex:i},children:r})},GT=K.default.div`
    overflow: hidden;
    border: ${Gs["width-010"]} ${Gs.solid} ${Ks.border};
    border-radius: ${Qs.sm};
    background: ${Ks.bg};

    min-width: 23rem;
    ${e=>e.$width&&`width: ${e.$width}px;`}
    max-height: 27rem;
    overflow-y: auto;

    ${e=>"small"===e.$variant?qs["body-md-regular"]:qs["body-baseline-regular"]}

    ${el.MaxWidth.sm} {
        min-width: unset;
        width: calc(100vw - ${Js["sm-margin"]} * 2);
        max-height: 15rem;
    }

    ${el.MaxWidth.xs} {
        width: calc(100vw - ${Js["xs-margin"]} * 2);
    }

    ${el.MaxWidth.xxs} {
        width: calc(100vw - ${Js["xxs-margin"]} * 2);
    }

    ::-webkit-scrollbar {
        width: 14px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${Ks["bg-inverse-subtlest"]};
        border: 5px solid transparent;
        border-radius: 9999px;
        background-clip: padding-box;
    }
`,ZT=K.default.div`
    background: transparent;
    padding: ${Zs["spacing-8"]};
`,QT=K.default.ul`
    list-style-type: none;
`,JT=K.default.li`
    display: flex;
    align-items: flex-start;
    gap: ${Zs["spacing-8"]};
    padding: ${Zs["spacing-12"]} ${Zs["spacing-8"]};
    cursor: pointer;

    outline: none;

    ${e=>e.$active&&e.$selected?i.css`
                background: ${Ks["bg-hover"]};
            `:e.$active?i.css`
                background: ${Ks["bg-hover-subtle"]};
            `:void 0}
`,eE=K.default(k.TickIcon)`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
    color: ${Ks["icon-selected"]};
`,tE=K.default.div`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
`,rE=K.default(j.SquareTickFillIcon)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Ks["icon-selected"]};
`,nE=K.default(S.SquareIcon)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Ks["icon-primary-subtlest"]};
`,iE=K.default.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`,oE=K.default(jf)`
    cursor: pointer;
    overflow: hidden;
    color: ${Ks["text-primary"]};
    font-size: inherit;
`,aE=K.default(oE)`
    ${qs["body-baseline-semibold"]}
`,sE=K.default(oE)`
    ${qs["body-md-semibold"]}
    padding: ${Zs["spacing-8"]} ${Zs["spacing-8"]};
`,lE=K.default.div`
    width: 100%;
    display: flex;
    padding: ${Zs["spacing-12"]} ${Zs["spacing-16"]};
    align-items: center;
`,cE=K.default(s.ExclamationCircleFillIcon)`
    margin-right: ${Zs["spacing-4"]};
    color: ${Ks["icon-error"]};
    height: 1em;
    width: 1em;
`,dE=K.default(jl)`
    margin-right: ${Zs["spacing-8"]};
    color: ${Ks.icon};
`,uE=K.default.div`
    background: ${Ks["bg-strong"]};
    border-radius: ${Qs.sm};
    display: flex;
    align-items: center;

    ${e=>"small"===e.$variant?qs["body-md-regular"]:qs["body-baseline-regular"]}
`,fE=K.default.label`
    flex: 1;
    display: flex;
    align-items: center;
    gap: ${Zs["spacing-8"]};
    padding: ${e=>"small"===e.$variant?i.css`
                  ${Zs["spacing-8"]} ${Zs["spacing-16"]}
              `:i.css`10px ${Zs["spacing-16"]}`};
`,hE=K.default(Sf)`
    flex: 1;
`,pE=K.default(x.MagnifierIcon)`
    color: ${Ks.icon};
    flex-shrink: 0;
    height: 1em;
    width: 1em;
`,gE=K.default(nl)`
    flex-shrink: 0;
    align-self: stretch;
    box-sizing: content-box;
    padding: ${Zs["spacing-8"]};
    margin-left: -${Zs["spacing-8"]};
    color: ${Ks.icon};
    cursor: pointer;
    font-size: inherit;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`,mE=t.forwardRef(((t,r)=>{var{value:n,variant:i,onClear:o}=t,a=X(t,["value","variant","onClear"]);return e.jsxs(uE,{$variant:i,children:[e.jsxs(fE,{$variant:i,children:[e.jsx(pE,{"aria-hidden":!0}),e.jsx(hE,Object.assign({ref:r,value:n,$variant:i},a))]}),n&&e.jsx(gE,{"aria-label":"Clear search",focusOutline:"browser",onClick:o,children:e.jsx(m.CrossIcon,{"aria-hidden":!0})})]})})),bE=({listItems:r,multiSelect:n,selectedItems:i,disableItemFocus:o,itemsLoadState:a="success",itemTruncationType:s="end",itemMaxLines:l=2,labelDisplayType:c="inline",variant:d="default",listboxId:u,width:f,topScrollItem:h,onSelectItem:p,onSelectAll:g,onDismiss:m,onRetry:b,valueExtractor:v,listExtractor:y,renderListItem:x,renderCustomCallToAction:w,enableSearch:$,hideNoResultsDisplay:C,searchPlaceholder:S="Search",searchFunction:j,onSearch:k})=>{const{focusedIndex:D,setFocusedIndex:T}=t.useContext(qT),[E,O]=t.useState(""),[I,F]=t.useState(null!=r?r:[]),M=Kc(a),_=Yc(),A=t.useRef(null),B=t.useRef(null),R=t.useRef([]),z=t.useRef(null),P=t.useRef(null),L=e=>{const t=y?y(e):null==e?void 0:e.toString();return"object"==typeof t?{title:t.title,secondaryLabel:t.secondaryLabel}:{title:null!=t?t:""}},N=t.useCallback((e=>!!eS(i,(t=>rS(t,e)))),[i]),H=Hc((()=>null==j?void 0:j(E))),W=Hc((()=>null==r?void 0:r.filter((e=>{const{title:t,secondaryLabel:r}=L(e),n=E.trim().toLowerCase();return t.includes(n)||r&&r.includes(n)})))),V=(e,t)=>{T(t),null==p||p(e,(e=>v?v(e):e)(e))},Y=e=>{const t=e.target.value;O(t),null==k||k()},U=()=>{var e;O(""),null===(e=z.current)||void 0===e||e.focus(),null==k||k()},K=()=>{null==b||b()};Wc("keydown",(e=>{var t,r;switch(e.code){case"ArrowDown":if(e.preventDefault(),D<I.length-1){const e=D+1;null===(t=R.current[e])||void 0===t||t.focus(),T(e)}break;case"ArrowUp":if(e.preventDefault(),D>0){const e=D-1;null===(r=R.current[e])||void 0===r||r.focus(),T(e)}else 0===D&&z.current&&(z.current.focus(),T(-1));break;case"Space":case"Enter":document.activeElement===R.current[D]&&(e.preventDefault(),I[D]&&V(I[D],D))}})),t.useEffect((()=>{var e;if(!h)return void(null===(e=P.current)||void 0===e||e.scrollTo({top:0}));const t=setTimeout((()=>{if(!r)return;const e=r.indexOf(h);P.current&&-1!==e&&(P.current.scrollToIndex({index:e}),T(e))}),0);return()=>clearTimeout(t)}),[R,r,T,h]),t.useEffect((()=>{var e,t,n;if(_)return;if(o||!r)return;const i=r.findIndex((e=>N(e)));z.current?(T(-1),setTimeout((()=>{var e;return null===(e=z.current)||void 0===e?void 0:e.focus()}),200)):D>0?(null===(e=P.current)||void 0===e||e.scrollToIndex({index:D,align:"center"}),setTimeout((()=>{var e;return null===(e=R.current[D])||void 0===e?void 0:e.focus()}),200)):-1!==i?(null===(t=P.current)||void 0===t||t.scrollToIndex({index:i,align:"center"}),T(i),setTimeout((()=>{var e;return null===(e=R.current[i])||void 0===e?void 0:e.focus()}),200)):(null===(n=P.current)||void 0===n||n.scrollToIndex({index:0}),T(0),setTimeout((()=>{var e;return null===(e=R.current[0])||void 0===e?void 0:e.focus()}),200))}),[N,o,D,r,_,T]),t.useEffect((()=>{_&&M&&(o||"success"===a&&z.current&&(T(-1),z.current.focus()))}),[_,M,a,T,o]),t.useEffect((()=>{var e;F(null!==(e=""===E?r:j?H():W())&&void 0!==e?e:[])}),[H,W,r,j,E]);const q=t=>n?t?e.jsx(rE,{"aria-hidden":!0}):e.jsx(nE,{"aria-hidden":!0}):t?e.jsx(eE,{"aria-hidden":!0}):e.jsx(tE,{}),X=(t,r)=>{const{title:n,secondaryLabel:i}=L(t);return e.jsx(cj,{displayType:c,label:n,maxLines:l,selected:r,sublabel:i,truncationType:s,variant:d})},G=(t,r)=>{if(!b||"success"===a){const i=N(t),o=r===D;return e.jsx(JT,{"aria-selected":i,"aria-multiselectable":n,"data-testid":"list-item",onClick:()=>V(t,r),onMouseEnter:()=>(e=>{T(e)})(r),ref:e=>{R.current[r]=e},role:"option",tabIndex:o?0:-1,$active:o,$selected:i,children:x?x(t,{selected:i}):e.jsxs(e.Fragment,{children:[q(i),X(t,i)]})},((e,t)=>`item_${t}__${v?v(e):e}`)(t,r))}},Z=()=>{if(($||j)&&"success"===a)return e.jsx(mE,{ref:z,onChange:Y,value:E,placeholder:S,"data-testid":"search-input","aria-label":"Enter text to search",onClear:U,variant:d})},Q=()=>{if(i&&n&&I.length>0&&!E&&"success"===a)return e.jsx(iE,{children:e.jsx(sE,{onClick:g,type:"button",$variant:d,children:0===i.length?"Select all":"Clear all"})})},J=()=>{if(!C&&(E||!$)&&0===I.length&&"success"===a)return e.jsxs(lE,{"data-testid":"list-no-results",children:[e.jsx(cE,{"data-testid":"no-result-icon"}),"No results found."]})},ee=()=>{if(b&&"loading"===a)return e.jsxs(lE,{"data-testid":"list-loading",children:[e.jsx(dE,{}),"Loading..."]})},te=()=>{if(b&&"fail"===a)return e.jsxs(lE,{"data-testid":"list-fail",children:[e.jsx(cE,{"data-testid":"load-error-icon"}),"Failed to load. ",e.jsx(aE,{onClick:K,type:"button",$variant:d,children:"Try again."})]})};return e.jsxs(GT,{"data-testid":"dropdown-container",ref:A,$width:f,$variant:d,children:[e.jsxs(ZT,{ref:B,"data-testid":"dropdown-list",children:[Z(),Q(),J(),ee(),te(),e.jsx(QT,{role:"listbox",id:u,children:e.jsx(vT,Object.assign({ref:P,style:{height:"100%"},data:I,customScrollParent:null!==(re=A.current)&&void 0!==re?re:void 0,itemContent:(e,t)=>G(t,e)},"test"===process.env.NODE_ENV?{initialItemCount:I.length,key:I.length}:{}))})]}),(()=>{if(w)return e.jsx("div",{"data-testid":"custom-cta",children:w(m,I)})})()]});var re},vE=K.default(jf)`
    display: flex;
    align-items: center;
    gap: ${Zs["spacing-8"]};
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders
    padding: ${Zs["spacing-16"]};

    ${e=>"small"===e.$variant?qs["body-md-regular"]:qs["body-baseline-regular"]}

    :disabled {
        cursor: not-allowed;
    }
`,yE=K.default.div`
    display: flex;
    align-items: center;
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${Xs["duration-250"]} ${Xs["ease-default"]};

    svg {
        color: ${Ks.icon};
        height: 1em;
        width: 1em;
    }
`,xE=t.forwardRef((({children:t,disabled:r,expanded:n,listboxId:i,popupRole:o,readOnly:a,variant:s},l)=>e.jsxs(vE,{ref:l,type:"button","aria-expanded":n,"aria-haspopup":o,"data-testid":"selector",disabled:r,"aria-controls":i,$variant:s,children:[t,!a&&e.jsx(yE,{$expanded:n,$variant:s,children:e.jsx(f.ChevronDownIcon,{"aria-hidden":!0})})]})));var wE=Symbol.for("immer-nothing"),$E=Symbol.for("immer-draftable"),CE=Symbol.for("immer-state"),SE="production"!==process.env.NODE_ENV?[function(e){return`The plugin for '${e}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e}()\` when initializing your application.`},function(e){return`produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e}'`},"This object has been frozen and should not be mutated",function(e){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+e},"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.","Immer forbids circular references","The first or second argument to `produce` must be a function","The third argument to `produce` must be a function or undefined","First argument to `createDraft` must be a plain object, an array, or an immerable object","First argument to `finishDraft` must be a draft returned by `createDraft`",function(e){return`'current' expects a draft, got: ${e}`},"Object.defineProperty() cannot be used on an Immer draft","Object.setPrototypeOf() cannot be used on an Immer draft","Immer only supports deleting array indices","Immer only supports setting array indices and the 'length' property",function(e){return`'original' expects a draft, got: ${e}`}]:[];function jE(e,...t){if("production"!==process.env.NODE_ENV){const r=SE[e],n="function"==typeof r?r.apply(null,t):r;throw new Error(`[Immer] ${n}`)}throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var kE=Object.getPrototypeOf;function DE(e){return!!e&&!!e[CE]}function TE(e){return!!e&&(OE(e)||Array.isArray(e)||!!e[$E]||!!e.constructor?.[$E]||AE(e)||BE(e))}var EE=Object.prototype.constructor.toString();function OE(e){if(!e||"object"!=typeof e)return!1;const t=kE(e);if(null===t)return!0;const r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object||"function"==typeof r&&Function.toString.call(r)===EE}function IE(e,t){0===FE(e)?Reflect.ownKeys(e).forEach((r=>{t(r,e[r],e)})):e.forEach(((r,n)=>t(n,r,e)))}function FE(e){const t=e[CE];return t?t.type_:Array.isArray(e)?1:AE(e)?2:BE(e)?3:0}function ME(e,t){return 2===FE(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function _E(e,t,r){const n=FE(e);2===n?e.set(t,r):3===n?e.add(r):e[t]=r}function AE(e){return e instanceof Map}function BE(e){return e instanceof Set}function RE(e){return e.copy_||e.base_}function zE(e,t){if(AE(e))return new Map(e);if(BE(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const r=OE(e);if(!0===t||"class_only"===t&&!r){const t=Object.getOwnPropertyDescriptors(e);delete t[CE];let r=Reflect.ownKeys(t);for(let n=0;n<r.length;n++){const i=r[n],o=t[i];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(t[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:e[i]})}return Object.create(kE(e),t)}{const t=kE(e);if(null!==t&&r)return{...e};const n=Object.create(t);return Object.assign(n,e)}}function PE(e,t=!1){return NE(e)||DE(e)||!TE(e)||(FE(e)>1&&(e.set=e.add=e.clear=e.delete=LE),Object.freeze(e),t&&Object.entries(e).forEach((([e,t])=>PE(t,!0)))),e}function LE(){jE(2)}function NE(e){return Object.isFrozen(e)}var HE,WE={};function VE(e){const t=WE[e];return t||jE(0,e),t}function YE(){return HE}function UE(e,t){t&&(VE("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function KE(e){qE(e),e.drafts_.forEach(GE),e.drafts_=null}function qE(e){e===HE&&(HE=e.parent_)}function XE(e){return HE={drafts_:[],parent_:HE,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function GE(e){const t=e[CE];0===t.type_||1===t.type_?t.revoke_():t.revoked_=!0}function ZE(e,t){t.unfinalizedDrafts_=t.drafts_.length;const r=t.drafts_[0];return void 0!==e&&e!==r?(r[CE].modified_&&(KE(t),jE(4)),TE(e)&&(e=QE(t,e),t.parent_||eO(t,e)),t.patches_&&VE("Patches").generateReplacementPatches_(r[CE].base_,e,t.patches_,t.inversePatches_)):e=QE(t,r,[]),KE(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==wE?e:void 0}function QE(e,t,r){if(NE(t))return t;const n=t[CE];if(!n)return IE(t,((i,o)=>JE(e,n,t,i,o,r))),t;if(n.scope_!==e)return t;if(!n.modified_)return eO(e,n.base_,!0),n.base_;if(!n.finalized_){n.finalized_=!0,n.scope_.unfinalizedDrafts_--;const t=n.copy_;let i=t,o=!1;3===n.type_&&(i=new Set(t),t.clear(),o=!0),IE(i,((i,a)=>JE(e,n,t,i,a,r,o))),eO(e,t,!1),r&&e.patches_&&VE("Patches").generatePatches_(n,r,e.patches_,e.inversePatches_)}return n.copy_}function JE(e,t,r,n,i,o,a){if("production"!==process.env.NODE_ENV&&i===r&&jE(5),DE(i)){const a=QE(e,i,o&&t&&3!==t.type_&&!ME(t.assigned_,n)?o.concat(n):void 0);if(_E(r,n,a),!DE(a))return;e.canAutoFreeze_=!1}else a&&r.add(i);if(TE(i)&&!NE(i)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;QE(e,i),t&&t.scope_.parent_||"symbol"==typeof n||!Object.prototype.propertyIsEnumerable.call(r,n)||eO(e,i)}}function eO(e,t,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&PE(t,r)}var tO={get(e,t){if(t===CE)return e;const r=RE(e);if(!ME(r,t))return function(e,t,r){const n=iO(t,r);return n?"value"in n?n.value:n.get?.call(e.draft_):void 0}(e,r,t);const n=r[t];return e.finalized_||!TE(n)?n:n===nO(e.base_,t)?(aO(e),e.copy_[t]=sO(n,e)):n},has:(e,t)=>t in RE(e),ownKeys:e=>Reflect.ownKeys(RE(e)),set(e,t,r){const n=iO(RE(e),t);if(n?.set)return n.set.call(e.draft_,r),!0;if(!e.modified_){const n=nO(RE(e),t),i=n?.[CE];if(i&&i.base_===r)return e.copy_[t]=r,e.assigned_[t]=!1,!0;if(function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}(r,n)&&(void 0!==r||ME(e.base_,t)))return!0;aO(e),oO(e)}return e.copy_[t]===r&&(void 0!==r||t in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=r,e.assigned_[t]=!0),!0},deleteProperty:(e,t)=>(void 0!==nO(e.base_,t)||t in e.base_?(e.assigned_[t]=!1,aO(e),oO(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0),getOwnPropertyDescriptor(e,t){const r=RE(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n?{writable:!0,configurable:1!==e.type_||"length"!==t,enumerable:n.enumerable,value:r[t]}:n},defineProperty(){jE(11)},getPrototypeOf:e=>kE(e.base_),setPrototypeOf(){jE(12)}},rO={};function nO(e,t){const r=e[CE];return(r?RE(r):e)[t]}function iO(e,t){if(!(t in e))return;let r=kE(e);for(;r;){const e=Object.getOwnPropertyDescriptor(r,t);if(e)return e;r=kE(r)}}function oO(e){e.modified_||(e.modified_=!0,e.parent_&&oO(e.parent_))}function aO(e){e.copy_||(e.copy_=zE(e.base_,e.scope_.immer_.useStrictShallowCopy_))}IE(tO,((e,t)=>{rO[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),rO.deleteProperty=function(e,t){return"production"!==process.env.NODE_ENV&&isNaN(parseInt(t))&&jE(13),rO.set.call(this,e,t,void 0)},rO.set=function(e,t,r){return"production"!==process.env.NODE_ENV&&"length"!==t&&isNaN(parseInt(t))&&jE(14),tO.set.call(this,e[0],t,r,e[0])};function sO(e,t){const r=AE(e)?VE("MapSet").proxyMap_(e,t):BE(e)?VE("MapSet").proxySet_(e,t):function(e,t){const r=Array.isArray(e),n={type_:r?1:0,scope_:t?t.scope_:YE(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=n,o=tO;r&&(i=[n],o=rO);const{revoke:a,proxy:s}=Proxy.revocable(i,o);return n.draft_=s,n.revoke_=a,s}(e,t);return(t?t.scope_:YE()).drafts_.push(r),r}function lO(e){if(!TE(e)||NE(e))return e;const t=e[CE];let r;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,r=zE(e,t.scope_.immer_.useStrictShallowCopy_)}else r=zE(e,!0);return IE(r,((e,t)=>{_E(r,e,lO(t))})),t&&(t.finalized_=!1),r}var cO=new class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,t,r)=>{if("function"==typeof e&&"function"!=typeof t){const r=t;t=e;const n=this;return function(e=r,...i){return n.produce(e,(e=>t.call(this,e,...i)))}}let n;if("function"!=typeof t&&jE(6),void 0!==r&&"function"!=typeof r&&jE(7),TE(e)){const i=XE(this),o=sO(e,void 0);let a=!0;try{n=t(o),a=!1}finally{a?KE(i):qE(i)}return UE(i,r),ZE(n,i)}if(!e||"object"!=typeof e){if(n=t(e),void 0===n&&(n=e),n===wE&&(n=void 0),this.autoFreeze_&&PE(n,!0),r){const t=[],i=[];VE("Patches").generateReplacementPatches_(e,n,t,i),r(t,i)}return n}jE(1,e)},this.produceWithPatches=(e,t)=>{if("function"==typeof e)return(t,...r)=>this.produceWithPatches(t,(t=>e(t,...r)));let r,n;const i=this.produce(e,t,((e,t)=>{r=e,n=t}));return[i,r,n]},"boolean"==typeof e?.autoFreeze&&this.setAutoFreeze(e.autoFreeze),"boolean"==typeof e?.useStrictShallowCopy&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){TE(e)||jE(8),DE(e)&&(e=function(e){DE(e)||jE(10,e);return lO(e)}(e));const t=XE(this),r=sO(e,void 0);return r[CE].isManual_=!0,qE(t),r}finishDraft(e,t){const r=e&&e[CE];r&&r.isManual_||jE(9);const{scope_:n}=r;return UE(n,t),ZE(void 0,n)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){const n=t[r];if(0===n.path.length&&"replace"===n.op){e=n.value;break}}r>-1&&(t=t.slice(r+1));const n=VE("Patches").applyPatches_;return DE(e)?n(e,t):this.produce(e,(e=>n(e,t)))}},dO=cO.produce;cO.produceWithPatches.bind(cO),cO.setAutoFreeze.bind(cO),cO.setUseStrictShallowCopy.bind(cO),cO.applyPatches.bind(cO),cO.createDraft.bind(cO),cO.finishDraft.bind(cO);var uO=a$,fO=z$,hO=Dw,pO=Ii,gO=c$,mO=Ow,bO=t$,vO=Yw,yO=Object.prototype.hasOwnProperty;var xO=function(e){if(null==e)return!0;if(gO(e)&&(pO(e)||"string"==typeof e||"function"==typeof e.splice||mO(e)||vO(e)||hO(e)))return!e.length;var t=fO(e);if("[object Map]"==t||"[object Set]"==t)return!e.size;if(bO(e))return!uO(e).length;for(var r in e)if(yO.call(e,r))return!1;return!0},wO=Oi(xO);const $O=(e,t,r)=>{const n=dO(e,(e=>{for(let n=e.length-1;n>=0;n--){const i=e[n],o=SO(i.keyPath);if(i.checked=t.has(o),i.hasSubItems&&r&&!0!==i.checked){const t=i.subItemIndexes.map((t=>e[t])),r=t.every((e=>!0===e.checked)),n=t.some((e=>!1!==e.checked));r?i.checked=!0:n&&(i.checked="mixed")}}}));return n},CO=(e,t)=>{const[r,...n]=t;if(wO(e)||wO(r))return;const i=e.find((e=>e.key===r));return i&&n.length?CO(i.subItems,n):i},SO=e=>e.join(","),jO=e=>new Set(e.map((e=>e.join(",")))),kO=K.default.li`
    display: ${e=>e.$visible?"flex":"none"};
`,DO=K.default.div`
    flex: 1;
    display: flex;
    align-items: flex-start;
    gap: ${Zs["spacing-8"]};
    padding: ${Zs["spacing-12"]} ${Zs["spacing-8"]};
    cursor: ${e=>e.$toggleable?"default":"pointer"};
    overflow: hidden; // required for label to truncate properly

    outline: none;

    ${e=>e.$active&&i.css`
            background: ${Ks["bg-hover"]};
        `}
`,TO=K.default.div`
    height: 1px;
    width: calc((1lh + ${Zs["spacing-8"]}) * ${e=>e.$level});
`,EO=K.default.div`
    width: 1lh;
    height: 1lh;
    color: ${Ks["icon-primary"]};
    cursor: pointer;

    svg {
        width: 1lh;
        height: 1lh;
        transition: transform ${Xs["duration-350"]}
            ${Xs["ease-standard"]};

        ${e=>{if(e.$expanded)return i.css`
                    transform: rotate(90deg);
                `}}
    }
`,OO=K.default.div`
    width: 1lh;
    height: 1lh;
    margin-right: ${Zs["spacing-8"]};
`,IO=K.default.div`
    flex-shrink: 0;
    height: 1lh;
    width: ${e=>e.$hasNestedSiblings?"1lh":Zs["spacing-16"]};

    display: flex;
    justify-content: center;
`,FO=K.default(T.MinusSquareFillIcon)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Ks["icon-selected"]};
`,MO=({listItems:r,multiSelect:n=!1,selectedKeyPaths:i,itemsLoadState:o="success",itemTruncationType:a="end",itemMaxLines:s=2,variant:l="default",listboxId:c,width:d,mode:u="default",selectableCategory:f,onSelectItem:h,onSelectAll:p,onRetry:g,enableSearch:m,hideNoResultsDisplay:b,searchPlaceholder:v="Search",onSearch:y})=>{const x=n||f,[w,$]=t.useState(""),C=w.toLowerCase().trim(),[S,j]=t.useState(!1),k=t.useRef(null),T=t.useRef(null),E=t.useRef([]),O=t.useRef(null),I=Yc(),[F,M]=t.useState([]),[_,A]=t.useState([]),B=S?_:F,R=t.useMemo((()=>{let e=0;for(const t of F)t.level>e&&(e=t.level);return e}),[F]),[z,P]=t.useState(0),[L,N]=t.useState([]),[H,W]=t.useState(0),V=e=>{const t=e.target.value;$(t),""===t?j(!1):t.trim().length>=3&&j(!0),null==y||y()},Y=()=>{var e;$(""),j(!1),null===(e=O.current)||void 0===e||e.focus(),null==y||y()},U=()=>{null==g||g()},K=()=>{if(0===i.size){const e=[],t=[];F.forEach((r=>{r.hasSubItems||(e.push(r.keyPath),t.push(r))})),null==p||p(e,t)}else null==p||p([],[])},q=Hc(((e,t)=>((e,t,r,n,i)=>{const o=[],a=(e,s)=>{const l=[],c=e.some((e=>{var t;return null===(t=e.subItems)||void 0===t?void 0:t.length}));return e.forEach(((d,u)=>{var f,h;const p=s?s.level+1:0,g=s?[...s.keyPath,d.key]:[d.key],m=SO(g),b={item:d,index:o.length,indexInParent:u,parentSetSize:e.length,keyPath:g,parentIndex:s?s.index:-1,parentKeyPath:s?s.keyPath:[],level:p,visible:0===p||i||(null==s?void 0:s.expanded)||!1,expanded:i,checked:t.has(m),hasSubItems:!!(null===(f=d.subItems)||void 0===f?void 0:f.length),subItemIndexes:[],hasNestedSiblings:c,matched:!!n&&-1!==d.label.toLowerCase().indexOf(n),hasMatchedSubItems:!1};if(l.push(b),o.push(b),null===(h=d.subItems)||void 0===h?void 0:h.length){const e=a(d.subItems,b);if(r&&!0!==b.checked){const t=e.every((e=>!0===e.checked)),r=e.some((e=>!1!==e.checked));t?b.checked=!0:r&&(b.checked="mixed")}b.hasMatchedSubItems=e.some((e=>e.matched||e.hasMatchedSubItems)),b.subItemIndexes=e.map((e=>e.index))}})),l};return a(e,void 0),o})(e,i,n,C,t))),X=Hc((e=>{return i.size?(t=q(e,!1),dO(t,(e=>{const t=e.filter((e=>!0===e.checked));for(const r of t){let t=r.parentIndex;for(;t>=0;){const r=e[t];r.visible=!0,r.expanded=!0;for(const t of r.subItemIndexes)e[t].visible=!0;t=r.parentIndex}}}))):(e=>dO(e,(e=>{const t=e.findIndex((e=>e.hasSubItems));if(t<0)return;let r=t,n=0;for(let t=r;t<e.length;t++){const i=e[t].keyPath.length;if(i>n)n=i;else if(i<n)break;r=t,e[t].visible=!0,e[t].expanded=!0}for(let t=0;t<e.length;t++){const n=e[t],i=n.keyPath.slice(0,-1),o=e[r].keyPath.slice(0,i.length);rS(i,o)&&(n.visible=!0)}return e})))(q(e,!1));var t})),G=Hc((e=>{const t=e=>{const r=[];for(const n of e){if(-1!==n.label.toLowerCase().indexOf(C))r.push(n);else if(n.subItems){const e=t(n.subItems);if(e.length>0){r.push(Object.assign(Object.assign({},n),{subItems:e}));continue}}}return r};return t(e)})),Z=Hc((()=>{M((e=>$O(e,i,n))),S&&A((e=>$O(e,i,n)))})),Q=(e,t,r)=>{const n=((e,t,r)=>dO(e,(e=>{e[t].expanded=r;const n=e[t].keyPath;for(let i=t+1;i<e.length;i++){const t=e[i],o=e[t.parentIndex],a=t.keyPath.slice(0,n.length);if(!rS(n,a))break;t.visible=r&&o.expanded&&o.visible}})))(B,e,t);P(e),W(r),S?A(n):M(n)};Wc("keydown",(e=>{var t,r;switch(e.code){case"ArrowDown":{e.preventDefault();const r=((e,t,r)=>{for(let n=r;n<e.length;n++)if(t(e[n]))return e[n]})(B,(e=>e.visible),z+1);r&&(W((e=>e+1)),P(r.index),null===(t=E.current[r.index])||void 0===t||t.focus());break}case"ArrowUp":{e.preventDefault();const t=((e,t,r)=>{for(let n=r;n>=0;n--)if(t(e[n]))return e[n]})(B,(e=>e.visible),z-1);t?(W((e=>e-1)),P(t.index),null===(r=E.current[t.index])||void 0===r||r.focus()):0===H&&O.current&&(O.current.focus(),W(-1),P(-1));break}case"ArrowRight":e.preventDefault(),Q(z,!0,H);break;case"ArrowLeft":e.preventDefault(),Q(z,!1,H);break;case"Space":if(document.activeElement===E.current[z]){e.preventDefault();const t=B[z];if(t.hasSubItems&&!x)return;null==h||h(t)}}})),t.useEffect((()=>{let e=[];"default"===u?e=X(r):"expand"===u?e=q(r,!0):"collapse"===u&&(e=q(r,!1)),M(e)}),[q,X,r,u]),t.useEffect((()=>{N(B.filter((e=>e.visible)))}),[S,B]),t.useEffect((()=>{Z()}),[n,i,Z]),t.useEffect((()=>{if(S&&w.trim().length>=3){const e=G(r),t=(e=>dO(e,(e=>{for(const t of e)if(t.matched&&(t.visible=!0),t.hasMatchedSubItems){t.visible=!0,t.expanded=!0;for(const r of t.subItemIndexes)e[r].visible=!0}})))(q(e,!1));A(t)}}),[G,q,r,S,w]),t.useEffect((()=>{I||(O.current?(P(-1),W(-1),setTimeout((()=>{var e;return null===(e=O.current)||void 0===e?void 0:e.focus()}),200)):E.current[z]?setTimeout((()=>{var e;return null===(e=E.current[z])||void 0===e?void 0:e.focus()}),200):(P(0),W(0),setTimeout((()=>{var e;return null===(e=E.current[0])||void 0===e?void 0:e.focus()}),200)))}),[z,H,I]);const J=()=>{if(m&&"success"===o)return e.jsx(mE,{ref:O,onChange:V,value:w,placeholder:v,"data-testid":"search-input","aria-label":"Enter text to search",onClear:Y,variant:l})},ee=()=>{if(n&&!S&&F.length>0&&"success"===o)return e.jsx(iE,{children:e.jsx(sE,{onClick:K,type:"button",$variant:l,children:0===i.size?"Select all":"Clear all"})})},te=()=>{if(!b&&S&&0===_.length&&"success"===o)return e.jsxs(lE,{"data-testid":"list-no-results",children:[e.jsx(cE,{"data-testid":"no-result-icon"}),"No results found."]})},re=()=>{if(g&&"loading"===o)return e.jsxs(lE,{"data-testid":"list-loading",children:[e.jsx(Dl,{}),"Loading..."]})},ne=()=>{if(g&&"fail"===o)return e.jsxs(lE,{"data-testid":"list-fail",children:[e.jsx(cE,{"data-testid":"load-error-icon"}),"Failed to load. ",e.jsx(aE,{onClick:U,type:"button",$variant:l,children:"Try again."})]})},ie=t=>{if(n)switch(t.checked){case"mixed":return e.jsx(FO,{"aria-hidden":!0});case!0:return e.jsx(rE,{"aria-hidden":!0});default:return e.jsx(nE,{"aria-hidden":!0})}if(!t.hasSubItems)return e.jsx(IO,{$hasNestedSiblings:t.hasNestedSiblings||0===t.level,children:t.checked&&e.jsx(eE,{"aria-hidden":!0})})},oe=(t,r)=>{const{level:i,visible:o,expanded:l,keyPath:c,checked:d,hasSubItems:u,indexInParent:f,parentSetSize:p}=t,g=t.index,m=H===r,b=u&&!x;return e.jsxs(kO,{$visible:o,children:[R>0&&e.jsx(TO,{$level:i}),R>0&&!u&&n&&e.jsx(OO,{}),e.jsxs(DO,{"aria-checked":d,"aria-selected":!!d,"aria-expanded":u?l:void 0,"aria-level":i+1,"aria-posinset":f+1,"aria-setsize":p,"data-testid":"list-item",onClick:e=>{e.stopPropagation(),b?Q(g,!l,r):((e,t)=>{W(t),P(e),null==h||h(B[e])})(g,r)},onMouseEnter:()=>((e,t)=>{P(t.index),W(e)})(r,t),ref:e=>E.current[t.index]=e,role:"treeitem",tabIndex:m?0:-1,$active:m,$toggleable:b,children:[u&&e.jsx(EO,{"data-testid":"toggle-category-button",onClick:e=>{e.stopPropagation(),Q(g,!l,r)},$expanded:l,children:e.jsx(D.CaretRightIcon,{})}),ie(t),e.jsx(cj,{bold:u,searchTerm:S?C:void 0,label:t.item.label,selected:!!d,truncationType:a,maxLines:s})]})]},`[${c.join("---")}]`)};return e.jsx(GT,{"data-testid":"dropdown-container",ref:k,$width:d,$variant:l,children:e.jsxs(ZT,{"data-testid":"nested-dropdown-list",children:[J(),ee(),te(),re(),ne(),e.jsx("div",{"aria-multiselectable":n,id:c,ref:T,role:"tree",children:e.jsx(vT,Object.assign({style:{height:"100%"},customScrollParent:null!==(ae=k.current)&&void 0!==ae?ae:void 0,data:L,itemContent:(e,t)=>oe(t,e)},"test"===process.env.NODE_ENV?{initialItemCount:L.length,key:L.length}:{}))})]})});var ae},_O=({selectedOptions:r,placeholder:n="Select",options:i,disabled:o,error:a,className:s,"data-testid":l,id:c,enableSearch:d=!1,searchFunction:u,searchPlaceholder:f,valueExtractor:h,listExtractor:p,onSelectOptions:g,onShowOptions:m,onHideOptions:b,onRetry:v,optionsLoadState:y="success",optionTruncationType:x="end",renderListItem:w,hideNoResultsDisplay:$,renderCustomCallToAction:C,onBlur:S,variant:j="default",readOnly:k,alignment:D,dropdownZIndex:T})=>{const[E,O]=t.useState(r||[]),[I,F]=t.useState(!1),[M,_]=t.useState(!1),[A]=t.useState((()=>Lc.generate())),B=t.useRef(null),R=t.useRef(null);t.useEffect((()=>{O(r||[])}),[r]);const z=()=>{E&&E.length>0?(O([]),V([])):(O(i),V(i))},P=(e,t)=>{const r=[...E],n=JC(E,(e=>(h?h(e):e)===t));n>-1?r.splice(n,1):r.push(e),O(r),V(r)},L=()=>{I&&(F(!1),W(!1))},N=()=>{M||I||_(!0)},H=e=>{M&&!I&&B.current&&!B.current.contains(e.relatedTarget)&&(_(!1),null==S||S())},W=e=>{!e&&b&&b(),e&&m&&m()},V=e=>{g&&g(e)};return e.jsx(XT,{children:e.jsx(sh,{enabled:!k&&!o,isOpen:I,renderElement:()=>e.jsx($f,{className:s,"data-testid":l,id:c,ref:B,tabIndex:-1,onFocus:N,onBlur:H,$focused:M,$disabled:o,$readOnly:k,$error:a,children:e.jsx(xE,{ref:R,disabled:o,expanded:I,listboxId:A,popupRole:"listbox",readOnly:k,variant:j,children:e.jsx(Jf,{$disabled:o,children:E&&0!==E.length?e.jsx(eh,{$variant:j,children:i&&E.length===i.length?"All selected":`${E.length} selected`}):e.jsx(th,{truncateType:x,$variant:j,children:n})})})}),renderDropdown:({elementWidth:t})=>e.jsx(bE,{listboxId:A,listItems:i,onSelectItem:P,onDismiss:L,valueExtractor:h,listExtractor:p,enableSearch:d,searchFunction:u,searchPlaceholder:f,multiSelect:!0,selectedItems:E,onSelectAll:z,onRetry:v,itemsLoadState:y,itemTruncationType:x,renderListItem:w,hideNoResultsDisplay:$,renderCustomCallToAction:C,variant:j,width:t}),onOpen:()=>{F(!0),W(!0),_(!0)},onClose:e=>{F(!1),W(!1),"click"!==e&&(_(!1),null==S||S())},onDismiss:()=>{var e;null===(e=R.current)||void 0===e||e.focus(),F(!1),W(!1)},clickToToggle:!0,offset:8,alignment:D,fitAvailableHeight:!0,customZIndex:T})})},AO=(e,t)=>{const[r,...n]=t;if(wO(e)||!r)return;const i=e.find((e=>e.key===r));return i?n.length?AO(i.subItems,n):i:void 0},BO=(e,t)=>{const r=[];for(const n of e)n.subItems?r.push(...BO(n.subItems,[...t,n.key])):r.push({value:n.value,label:n.label,keyPath:[...t,n.key]});return r},RO=({placeholder:r="Select",options:n,disabled:i,error:o,className:a,"data-testid":s,id:l,selectedKeyPaths:c,mode:d,valueToStringFunction:u,enableSearch:f,searchPlaceholder:h,hideNoResultsDisplay:p,readOnly:g,onSearch:m,onSelectOptions:b,onShowOptions:v,onHideOptions:y,onRetry:x,onBlur:w,optionsLoadState:$="success",optionTruncationType:C="end",variant:S="default",alignment:j,dropdownZIndex:k})=>{const D=n,[T,E]=t.useState(c?jO(c):new Set),[O,I]=t.useState([]),[F,M]=t.useState(!1),[_,A]=t.useState(!1),[B]=t.useState((()=>Lc.generate())),R=t.useRef(null),z=t.useRef(null),P=t.useRef(null);t.useEffect((()=>{const e=c||[],t=((e,t)=>{const r=[];for(let n=0;n<t.length;n++){const i=t[n],o=AO(e,i);o&&r.push({value:o.value,label:o.label,keyPath:i})}return r})(D,e);E(jO(e)),I(t)}),[c,D]);const L=(e,t)=>{const r=t.map((e=>({keyPath:e.keyPath,label:e.item.label,value:e.item.value})));E(jO(e)),I(r),K(e,r)},N=e=>{const t=q(e),r=t.map((e=>e.keyPath));I(t),E(jO(r)),K(r,t)},H=()=>{_||F||A(!0)},W=e=>{_&&!F&&R.current&&!R.current.contains(e.relatedTarget)&&(A(!1),null==w||w())},V=()=>{if(O.length>1)return`${O.length} selected`;const{label:e,value:t}=O[0];return u?u(t):e},Y=e=>{if("middle"===C){let t=0;return P&&P.current&&(t=P.current.getBoundingClientRect().width),Nc.truncateOneLine(e,t,120,6)}return e},U=e=>{!e&&y&&y(),e&&v&&v()},K=(e,t)=>{if(b){const r=t.map((e=>e.value));b(e,r)}},q=e=>{if(!0===e.checked)return O.filter((t=>{const r=t.keyPath.slice(0,e.keyPath.length);return!rS(e.keyPath,r)}));{const t=[...O],r=e.hasSubItems?((e,t)=>{const r=AO(e,t);return r&&r.subItems?BO(r.subItems,t):[]})(D,e.keyPath):[{value:e.item.value,label:e.item.label,keyPath:e.keyPath}];return r.forEach((e=>{O.find((t=>rS(t.keyPath,e.keyPath)))||t.push(e)})),t}};return e.jsx(sh,{enabled:!g&&!i,isOpen:F,renderElement:()=>e.jsx($f,{className:a,"data-testid":s,id:l,ref:R,tabIndex:-1,onFocus:H,onBlur:W,$focused:_,$disabled:i,$readOnly:g,$error:o,children:e.jsx(xE,{ref:z,disabled:i,expanded:F,listboxId:B,popupRole:"tree",readOnly:g,variant:S,children:e.jsx(Jf,{ref:P,$disabled:i,children:wO(O)?e.jsx(th,{truncateType:C,children:r}):e.jsx(eh,{truncateType:C,children:Y(V())})})})}),renderDropdown:({elementWidth:t})=>e.jsx(MO,{listboxId:B,listItems:D,multiSelect:!0,selectedKeyPaths:T,itemsLoadState:$,itemTruncationType:C,enableSearch:f,searchPlaceholder:h,hideNoResultsDisplay:p,onSelectItem:N,onSelectAll:L,onRetry:x,onSearch:m,variant:S,mode:d,width:t}),onOpen:()=>{M(!0),U(!0),A(!0)},onClose:e=>{M(!1),U(!1),"click"!==e&&(A(!1),null==w||w())},onDismiss:()=>{var e;null===(e=z.current)||void 0===e||e.focus(),M(!1),U(!1)},clickToToggle:!0,offset:8,alignment:j,fitAvailableHeight:!0,customZIndex:k})},zO=({placeholder:r="Select",options:n,disabled:i,error:o,className:a,"data-testid":s,id:l,selectedKeyPath:c,mode:d,valueToStringFunction:u,enableSearch:f,searchPlaceholder:h,selectableCategory:p,hideNoResultsDisplay:g,readOnly:m,onBlur:b,onSearch:v,onSelectOption:y,onShowOptions:x,onHideOptions:w,onRetry:$,optionsLoadState:C="success",optionTruncationType:S="end",variant:j="default",alignment:k,dropdownZIndex:D})=>{const T=n,[E,O]=t.useState(c?jO([c]):new Set),[I,F]=t.useState(),[M,_]=t.useState(!1),[A,B]=t.useState(!1),[R]=t.useState((()=>Lc.generate())),z=t.useRef(null),P=t.useRef(null),L=t.useRef(null);t.useEffect((()=>{O(c?jO([c]):new Set);const e=CO(T,c||[]);F(null!=e?e:void 0)}),[c,T]);const N=e=>{var t;const{keyPath:r,item:{label:n,value:i}}=e;O(jO([r])),F({label:n,value:i}),_(!1),U(!1),null===(t=P.current)||void 0===t||t.focus(),null==y||y(r,i)},H=()=>{A||M||B(!0)},W=e=>{A&&!M&&z.current&&!z.current.contains(e.relatedTarget)&&(B(!1),null==b||b())},V=()=>{if(!I)return"";const{label:e,value:t}=I;return u?u(t):e},Y=e=>{if("middle"===S){let t=0;return L&&L.current&&(t=L.current.getBoundingClientRect().width),Nc.truncateOneLine(e,t,120,6)}return e},U=e=>{!e&&w&&w(),e&&x&&x()};return e.jsx(sh,{enabled:!m&&!i,isOpen:M,renderElement:()=>e.jsx($f,{className:a,"data-testid":s,id:l,ref:z,tabIndex:-1,onFocus:H,onBlur:W,$focused:A,$disabled:i,$readOnly:m,$error:o,children:e.jsx(xE,{ref:P,disabled:i,expanded:M,listboxId:R,popupRole:"tree",readOnly:m,variant:j,children:e.jsx(Jf,{ref:L,$disabled:i,children:wO(I)?e.jsx(th,{truncateType:S,children:r}):e.jsx(eh,{truncateType:S,children:Y(V())})})})}),renderDropdown:({elementWidth:t})=>e.jsx(MO,{listboxId:R,listItems:T,selectedKeyPaths:E,selectableCategory:p,itemsLoadState:C,itemTruncationType:S,enableSearch:f,searchPlaceholder:h,hideNoResultsDisplay:g,onSelectItem:N,onRetry:$,onSearch:v,variant:j,mode:d,width:t}),onOpen:()=>{_(!0),U(!0),B(!0)},onClose:e=>{_(!1),U(!1),"click"!==e&&(B(!1),null==b||b())},onDismiss:()=>{var e;null===(e=P.current)||void 0===e||e.focus(),_(!1),U(!1)},clickToToggle:!0,offset:8,alignment:k,fitAvailableHeight:!0,customZIndex:D})};var PO=function(e,t,r,n){var i=-1,o=null==e?0:e.length;for(n&&o&&(r=e[++i]);++i<o;)r=t(r,e[i],i,e);return r};var LO=function(e){return function(t,r,n){for(var i=-1,o=Object(t),a=n(t),s=a.length;s--;){var l=a[e?s:++i];if(!1===r(o[l],l,o))break}return t}},NO=LO(),HO=h$;var WO=c$;var VO=function(e,t){return function(r,n){if(null==r)return r;if(!WO(r))return e(r,n);for(var i=r.length,o=t?i:-1,a=Object(r);(t?o--:++o<i)&&!1!==n(a[o],o,a););return r}}((function(e,t){return e&&NO(e,t,HO)}));var YO=PO,UO=VO,KO=LC,qO=function(e,t,r,n,i){return i(e,(function(e,i,o){r=n?(n=!1,e):t(r,e,i,o)})),r},XO=Ii;var GO=Oi((function(e,t,r){var n=XO(e)?YO:qO,i=arguments.length<3;return n(e,KO(t),r,i,UO)}));const ZO=[["Afghanistan",["asia"],"af","93"],["Albania",["europe"],"al","355"],["Algeria",["africa","north-africa"],"dz","213"],["Andorra",["europe"],"ad","376"],["Angola",["africa"],"ao","244"],["Antigua and Barbuda",["america","carribean"],"ag","1268"],["Argentina",["america","south-america"],"ar","54","(..) ........"],["Armenia",["asia","ex-ussr"],"am","374",".. ......"],["Aruba",["america","carribean"],"aw","297"],["Australia",["oceania"],"au","61","(..) .... ...."],["Austria",["europe","eu-union"],"at","43"],["Azerbaijan",["asia","ex-ussr"],"az","994","(..) ... .. .."],["Bahamas",["america","carribean"],"bs","1242"],["Bahrain",["middle-east"],"bh","973"],["Bangladesh",["asia"],"bd","880"],["Barbados",["america","carribean"],"bb","1246"],["Belarus",["europe","ex-ussr"],"by","375","(..) ... .. .."],["Belgium",["europe","eu-union"],"be","32","... .. .. .."],["Belize",["america","central-america"],"bz","501"],["Benin",["africa"],"bj","229"],["Bhutan",["asia"],"bt","975"],["Bolivia",["america","south-america"],"bo","591"],["Bosnia and Herzegovina",["europe","ex-yugos"],"ba","387"],["Botswana",["africa"],"bw","267"],["Brazil",["america","south-america"],"br","55","(..) ........."],["British Indian Ocean Territory",["asia"],"io","246"],["Brunei",["asia"],"bn","673"],["Bulgaria",["europe","eu-union"],"bg","359"],["Burkina Faso",["africa"],"bf","226"],["Burundi",["africa"],"bi","257"],["Cambodia",["asia"],"kh","855"],["Cameroon",["africa"],"cm","237"],["Canada",["america","north-america"],"ca","1","(...) ... ...."],["Cape Verde",["africa"],"cv","238"],["Caribbean Netherlands",["america","carribean"],"bq","599",""],["Central African Republic",["africa"],"cf","236"],["Chad",["africa"],"td","235"],["Chile",["america","south-america"],"cl","56"],["China",["asia"],"cn","86",".. ........."],["Colombia",["america","south-america"],"co","57","... ... ...."],["Comoros",["africa"],"km","269"],["Congo",["africa"],"cd","243"],["Congo",["africa"],"cg","242"],["Costa Rica",["america","central-america"],"cr","506",".... ...."],["Côte d’Ivoire",["africa"],"ci","225",".. .. .. .."],["Croatia",["europe","eu-union","ex-yugos"],"hr","385"],["Cuba",["america","carribean"],"cu","53"],["Curaçao",["america","carribean"],"cw","599",""],["Cyprus",["europe","eu-union"],"cy","357",".. ......"],["Czech Republic",["europe","eu-union"],"cz","420","... ... ..."],["Denmark",["europe","eu-union","baltic"],"dk","45",".. .. .. .."],["Djibouti",["africa"],"dj","253"],["Dominica",["america","carribean"],"dm","1767"],["Dominican Republic",["america","carribean"],"do","1",""],["Ecuador",["america","south-america"],"ec","593"],["Egypt",["africa","north-africa"],"eg","20"],["El Salvador",["america","central-america"],"sv","503",".... ...."],["Equatorial Guinea",["africa"],"gq","240"],["Eritrea",["africa"],"er","291"],["Estonia",["europe","eu-union","ex-ussr","baltic"],"ee","372",".... ......"],["Ethiopia",["africa"],"et","251"],["Fiji",["oceania"],"fj","679"],["Finland",["europe","eu-union","baltic"],"fi","358",".. ... .. .."],["France",["europe","eu-union"],"fr","33",". .. .. .. .."],["French Guiana",["america","south-america"],"gf","594"],["French Polynesia",["oceania"],"pf","689"],["Gabon",["africa"],"ga","241"],["Gambia",["africa"],"gm","220"],["Georgia",["asia","ex-ussr"],"ge","995"],["Germany",["europe","eu-union","baltic"],"de","49",".... ........"],["Ghana",["africa"],"gh","233"],["Greece",["europe","eu-union"],"gr","30"],["Grenada",["america","carribean"],"gd","1473"],["Guadeloupe",["america","carribean"],"gp","590","",0],["Guam",["oceania"],"gu","1671"],["Guatemala",["america","central-america"],"gt","502",".... ...."],["Guinea",["africa"],"gn","224"],["Guinea-Bissau",["africa"],"gw","245"],["Guyana",["america","south-america"],"gy","592"],["Haiti",["america","carribean"],"ht","509",".... ...."],["Honduras",["america","central-america"],"hn","504"],["Hong Kong",["asia"],"hk","852",".... ...."],["Hungary",["europe","eu-union"],"hu","36"],["Iceland",["europe"],"is","354","... ...."],["India",["asia"],"in","91","..... ....."],["Indonesia",["asia"],"id","62"],["Iran",["middle-east"],"ir","98","... ... ...."],["Iraq",["middle-east"],"iq","964"],["Ireland",["europe","eu-union"],"ie","353",".. ......."],["Israel",["middle-east"],"il","972","... ... ...."],["Italy",["europe","eu-union"],"it","39","... ......."],["Jamaica",["america","carribean"],"jm","1876"],["Japan",["asia"],"jp","81",".. .... ...."],["Jordan",["middle-east"],"jo","962"],["Kazakhstan",["asia","ex-ussr"],"kz","7","... ... .. .."],["Kenya",["africa"],"ke","254"],["Kiribati",["oceania"],"ki","686"],["Kosovo",["europe","ex-yugos"],"xk","383"],["Kuwait",["middle-east"],"kw","965"],["Kyrgyzstan",["asia","ex-ussr"],"kg","996","... ... ..."],["Laos",["asia"],"la","856"],["Latvia",["europe","eu-union","ex-ussr","baltic"],"lv","371",".. ... ..."],["Lebanon",["middle-east"],"lb","961"],["Lesotho",["africa"],"ls","266"],["Liberia",["africa"],"lr","231"],["Libya",["africa","north-africa"],"ly","218"],["Liechtenstein",["europe"],"li","423"],["Lithuania",["europe","eu-union","ex-ussr","baltic"],"lt","370"],["Luxembourg",["europe","eu-union"],"lu","352"],["Macau",["asia"],"mo","853"],["Macedonia",["europe","ex-yugos"],"mk","389"],["Madagascar",["africa"],"mg","261"],["Malawi",["africa"],"mw","265"],["Malaysia",["asia"],"my","60",".. .... ...."],["Maldives",["asia"],"mv","960"],["Mali",["africa"],"ml","223"],["Malta",["europe","eu-union"],"mt","356"],["Marshall Islands",["oceania"],"mh","692"],["Martinique",["america","carribean"],"mq","596"],["Mauritania",["africa"],"mr","222"],["Mauritius",["africa"],"mu","230"],["Mexico",["america","central-america"],"mx","52","... ... ...."],["Micronesia",["oceania"],"fm","691"],["Moldova",["europe"],"md","373","(..) .. .. .."],["Monaco",["europe"],"mc","377"],["Mongolia",["asia"],"mn","976"],["Montenegro",["europe","ex-yugos"],"me","382"],["Morocco",["africa","north-africa"],"ma","212"],["Mozambique",["africa"],"mz","258"],["Myanmar",["asia"],"mm","95"],["Namibia",["africa"],"na","264"],["Nauru",["africa"],"nr","674"],["Nepal",["asia"],"np","977"],["Netherlands",["europe","eu-union"],"nl","31",".. ........"],["New Caledonia",["oceania"],"nc","687"],["New Zealand",["oceania"],"nz","64","... ... ...."],["Nicaragua",["america","central-america"],"ni","505"],["Niger",["africa"],"ne","227"],["Nigeria",["africa"],"ng","234"],["North Korea",["asia"],"kp","850"],["Norway",["europe","baltic"],"no","47","... .. ..."],["Oman",["middle-east"],"om","968"],["Pakistan",["asia"],"pk","92","... ......."],["Palau",["oceania"],"pw","680"],["Palestine",["middle-east"],"ps","970"],["Panama",["america","central-america"],"pa","507"],["Papua New Guinea",["oceania"],"pg","675"],["Paraguay",["america","south-america"],"py","595"],["Peru",["america","south-america"],"pe","51"],["Philippines",["asia"],"ph","63",".... ......."],["Poland",["europe","eu-union","baltic"],"pl","48","... ... ..."],["Portugal",["europe","eu-union"],"pt","351"],["Puerto Rico",["america","carribean"],"pr","1",""],["Qatar",["middle-east"],"qa","974"],["Réunion",["africa"],"re","262"],["Romania",["europe","eu-union"],"ro","40"],["Russia",["europe","asia","ex-ussr","baltic"],"ru","7","(...) ... .. .."],["Rwanda",["africa"],"rw","250"],["Saint Kitts and Nevis",["america","carribean"],"kn","1869"],["Saint Lucia",["america","carribean"],"lc","1758"],["Saint Vincent and the Grenadines",["america","carribean"],"vc","1784"],["Samoa",["oceania"],"ws","685"],["San Marino",["europe"],"sm","378"],["São Tomé and Príncipe",["africa"],"st","239"],["Saudi Arabia",["middle-east"],"sa","966"],["Senegal",["africa"],"sn","221"],["Serbia",["europe","ex-yugos"],"rs","381"],["Seychelles",["africa"],"sc","248"],["Sierra Leone",["africa"],"sl","232"],["Singapore",["asia"],"sg","65",".... ...."],["Slovakia",["europe","eu-union"],"sk","421"],["Slovenia",["europe","eu-union","ex-yugos"],"si","386"],["Solomon Islands",["oceania"],"sb","677"],["Somalia",["africa"],"so","252"],["South Africa",["africa"],"za","27"],["South Korea",["asia"],"kr","82","... .... ...."],["South Sudan",["africa","north-africa"],"ss","211"],["Spain",["europe","eu-union"],"es","34","... ... ..."],["Sri Lanka",["asia"],"lk","94"],["Sudan",["africa"],"sd","249"],["Suriname",["america","south-america"],"sr","597"],["Swaziland",["africa"],"sz","268"],["Sweden",["europe","eu-union","baltic"],"se","46","(...) ... ..."],["Switzerland",["europe"],"ch","41",".. ... .. .."],["Syria",["middle-east"],"sy","963"],["Taiwan",["asia"],"tw","886"],["Tajikistan",["asia","ex-ussr"],"tj","992"],["Tanzania",["africa"],"tz","255"],["Thailand",["asia"],"th","66"],["Timor-Leste",["asia"],"tl","670"],["Togo",["africa"],"tg","228"],["Tonga",["oceania"],"to","676"],["Trinidad and Tobago",["america","carribean"],"tt","1868"],["Tunisia",["africa","north-africa"],"tn","216"],["Turkey",["europe"],"tr","90","... ... .. .."],["Turkmenistan",["asia","ex-ussr"],"tm","993"],["Tuvalu",["asia"],"tv","688"],["Uganda",["africa"],"ug","256"],["Ukraine",["europe","ex-ussr"],"ua","380","(..) ... .. .."],["United Arab Emirates",["middle-east"],"ae","971"],["United Kingdom",["europe","eu-union"],"gb","44",".... ......"],["United States",["america","north-america"],"us","1","(...) ... ...."],["Uruguay",["america","south-america"],"uy","598"],["Uzbekistan",["asia","ex-ussr"],"uz","998",".. ... .. .."],["Vanuatu",["oceania"],"vu","678"],["Vatican City",["europe"],"va","39",".. .... ...."],["Venezuela",["america","south-america"],"ve","58"],["Vietnam",["asia"],"vn","84"],["Yemen",["middle-east"],"ye","967"],["Zambia",["africa"],"zm","260"],["Zimbabwe",["africa"],"zw","263"]],QO=(e,t,r,n)=>r?e+"".padEnd(t.length,".")+" "+r:e+"".padEnd(t.length,".")+" "+n;var JO;!function(e){e.getCountries=()=>[].concat(...ZO.map((e=>({name:e[0],regions:e[1],iso2:e[2],countryCode:e[3],format:QO("+",e[3],e[4],"... ... ... ... ..")})))),e.formatNumber=(e="",t)=>{if(!t)return e;const r=e.replace(/[\s()]+/g,""),{format:n}=t,i=n.split(" ");i.shift();const o=i.join(" ");return GO(o,((e,t)=>{if(0===e.remainingText.length)return e;if("."!==t)return{formattedText:e.formattedText+t,remainingText:e.remainingText};const r=e.remainingText.slice(0,1),n=e.remainingText.slice(1);return{formattedText:e.formattedText+r,remainingText:n}}),{formattedText:"",remainingText:r}).formattedText}}(JO||(JO={}));const eI=r=>{var{onChange:n,value:i,allowClear:o,onClear:a,onBlur:s,error:l,fixedCountry:c=!1,optionPlaceholder:d="Select",optionSearchPlaceholder:u,enableSearch:f,onHideOptions:h,onShowOptions:p,placeholder:g,autoComplete:m}=r,b=X(r,["onChange","value","allowClear","onClear","onBlur","error","fixedCountry","optionPlaceholder","optionSearchPlaceholder","enableSearch","onHideOptions","onShowOptions","placeholder","autoComplete"]);const[v]=t.useState(JO.getCountries()),[y,x]=t.useState(void 0),[w,$]=t.useState(""),C=t.useRef(null),S=Uc({ref:C,formatter:e=>JO.formatNumber(e.replace(/[^0-9]/g,""),y)});t.useEffect((()=>{const e=v.filter((e=>e.countryCode===tI(null==i?void 0:i.countryCode)))[0];x(e),$(JO.formatNumber(null==i?void 0:i.number,e))}),[i]);const j=e=>{D(w,e),n&&k(w,e)},k=(e,t)=>{const r=JO.formatNumber(e,t);null==n||n({number:r.replace(/[\s()]+/g,""),countryCode:t&&rI(t.countryCode)})},D=(e,t)=>{$(JO.formatNumber(e,t)),x(t)};return e.jsx(NS,Object.assign({ref:C,value:w,onChange:()=>{const e=S();if(!e)return;const{nextValue:t,updateCaretPosition:r}=e;r(),D(t,y),n&&k(t,y)},allowClear:o&&!!w,onClear:()=>{a?a():$("")},onBlur:s,error:l,placeholder:g,addon:c?{type:"label",attributes:{value:rI(null==y?void 0:y.countryCode)}}:{type:"list",attributes:{placeholder:d,options:v,selectedOption:y,enableSearch:f,searchPlaceholder:u,valueExtractor:e=>`+${e.countryCode}`,listExtractor:e=>({title:e.name,secondaryLabel:rI(e.countryCode)}),onSelectOption:j,onHideOptions:h,onShowOptions:p}},inputMode:"numeric",autoComplete:m},b))},tI=e=>e?e.replace("+",""):"",rI=e=>e?e.includes("+")?e:`+${e}`:"",nI=({className:r,"data-testid":n,selectedOption:i,minimumCharacters:o=3,fetchOptions:a,placeholder:s="Enter here...",readOnly:l=!1,disabled:c=!1,error:d,valueExtractor:u,listExtractor:f,displayValueExtractor:h,onSelectOption:p})=>{const[g,m]=t.useState((()=>i?z(i):"")),[b,v]=t.useState((()=>i?z(i):"")),[y,x]=t.useState([]),[w,$]=t.useState(!0),[C,S]=t.useState(!1),[j,k]=t.useState(!!i),[D,T]=t.useState(i),E=t.useRef(a),O=e=>G(void 0,void 0,void 0,(function*(){S(!1),$(!0);try{const t=yield E.current(e);v(e),x(t),$(!1)}catch(e){S(!0)}})),I=t.useCallback(Iu((e=>O(e)),500,{leading:!1,trailing:!0}),[]);t.useEffect((()=>{E.current=a}),[a]),t.useEffect((()=>{g&&g.length>=o&&g!==b?I(g):I.cancel(),""===g&&D&&(p&&p(void 0,void 0),_(),T(void 0)),i&&g!==z(i)&&k(!1)}),[g,i]),t.useEffect((()=>{m(i?z(i):""),_(i),T(i)}),[i]);const F=e=>{m(e.target.value)},M=(e,t)=>{p&&p(e,t)},_=e=>{v(e?z(e):""),k(!!e),x([]),$(!0)},A=()=>{m(""),p&&p(void 0,void 0),_()},B=()=>{j||D?(_(D),m(z(D)),p&&p(D,P(D)),T(D)):A()},R=()=>!!g&&g.length>=o&&!j,z=e=>e?h?h(e):e.toString():"",P=e=>{if(e)return u?u(e):e},L=()=>e.jsx(Tx,{type:"text",value:g,onChange:F,placeholder:s,readOnly:l,disabled:c,allowClear:!0,onClear:A,styleType:"no-border",onBlur:g.length<o?B:void 0});return e.jsxs(rh,{className:r,show:R(),error:d&&!R(),disabled:c,readOnly:l,testId:n,onBlur:B,children:[l?e.jsx(e.Fragment,{children:L()}):e.jsx(Xf,{children:L()}),!l&&R()&&e.jsx(Qf,{}),e.jsx(kS,{listItems:y,onSelectItem:M,valueExtractor:u,listExtractor:f,itemsLoadState:C?"fail":w?"loading":"success",visible:R(),disableItemFocus:!0,onRetry:()=>O(g),itemTruncationType:"end",itemMaxLines:1,labelDisplayType:"next-line"})]})},iI=K.default.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
`,oI=K.default(Sx)`
    position: absolute;
    right: 0;
    padding-left: ${Zs["spacing-8"]};
    margin-right: 0;
`,aI=K.default(qf)`
    // space for clear icon
    padding-right: calc(1.25rem + ${Zs["spacing-16"]});
`,sI=r=>{var{selectedOptions:n,placeholders:i={from:"Select",to:"Select"},options:o,disabled:a,className:s,readOnly:l,error:c,"data-testid":d,id:u,enableSearch:f=!1,searchFunction:h,searchPlaceholder:p,valueExtractor:g,valueToStringFunction:m,listExtractor:b,displayValueExtractor:v,onSelectOption:y,listStyleWidth:x,onShowOptions:w,onHideOptions:$,onRetry:C,optionsLoadState:S={from:"success",to:"success"},optionTruncationType:j="middle",renderCustomSelectedOption:k,renderListItem:D,renderCustomCallToAction:T}=r,E=X(r,["selectedOptions","placeholders","options","disabled","className","readOnly","error","data-testid","id","enableSearch","searchFunction","searchPlaceholder","valueExtractor","valueToStringFunction","listExtractor","displayValueExtractor","onSelectOption","listStyleWidth","onShowOptions","onHideOptions","onRetry","optionsLoadState","optionTruncationType","renderCustomSelectedOption","renderListItem","renderCustomCallToAction"]);const[O,I]=t.useState(),[F,M]=t.useState(),_=t.useRef(null),A={from:t.useRef(null),to:t.useRef(null)},[B,R]=t.useState("none");t.useEffect((()=>{I(null==n?void 0:n.from),M(null==n?void 0:n.to)}),[n]);const z=e=>t=>{t.stopPropagation(),t.preventDefault(),a||l||R("from"===e?"from":"to"===e&&O?"to":"from")},P=e=>{var t;const r="from"===e?O:F;if(!r)return"";if(v)return v(r);if(g){const e=g(r);return m?m(e):null!==(t=null==e?void 0:e.toString())&&void 0!==t?t:""}return r.toString()},L=(e,t)=>{if("middle"===j){let r=0;return A[e]&&A[e].current&&(r=A[e].current.getBoundingClientRect().width),Nc.truncateOneLine(t,r,120,8)}return t},N=e=>{!e&&$&&$(),e&&w&&w()},H=t=>{const r="from"===t?O:F;return r?k?k(r):e.jsx(eh,{truncateType:j,children:L(t,P(t))}):e.jsx(th,{truncateType:j,children:L(t,i[t]||"")})},W=t=>e.jsx(Jf,{onClick:z(t),ref:A[t],$disabled:a,children:H(t)});return e.jsxs(rh,{show:"none"!==B,error:c&&!("none"!==B),disabled:a,readOnly:l,testId:d,onBlur:()=>{N(!1),R("none"),O&&F||(M(void 0),I(void 0))},className:s,children:[e.jsxs(iI,{children:[e.jsx(aI,Object.assign({type:"button","data-testid":u||"selector",disabled:a,ref:_,onClick:z()},E,{children:e.jsxs(Oh,{currentActive:(()=>{switch(B){case"from":return"start";case"to":return"end";case"none":return B}})(),children:[W("from"),W("to")]})})),"none"===B&&O&&F&&!l&&!a&&e.jsx(oI,{onClick:e=>{e.stopPropagation(),I(void 0),M(void 0),y&&y({from:void 0,to:void 0},void 0)},type:"button","aria-label":"Clear",children:e.jsx(jx,{"aria-hidden":!0})})]}),"none"!==B&&e.jsx(Qf,{}),(()=>{if("none"===B)return null;const t=o[B];if(t&&t.length>0){const r="from"===B?O:F;return e.jsx(kS,{listItems:t,onSelectItem:(e,t)=>((e,t,r)=>{var n;"from"===r?I(e):M(e),N(!1),_&&(null===(n=_.current)||void 0===n||n.focus()),y&&y({[r]:e},t),"from"===r?(M(void 0),R("to"),N(!0)):R("none")})(e,t,B),onDismiss:()=>(()=>{var e;R("none"),N(!1),_&&(null===(e=_.current)||void 0===e||e.focus()),O&&F||(M(void 0),I(void 0))})(),valueExtractor:g,listExtractor:b,listStyleWidth:x,visible:!0,enableSearch:f,searchPlaceholder:p,searchFunction:h,"data-testid":`${B}-dropdown-list`,selectedItems:r?[r]:[],onRetry:C,itemsLoadState:S[B],itemTruncationType:j,renderListItem:D,renderCustomCallToAction:T})}return null})()]})},lI=({selectedOption:r,placeholder:n="Select",options:i,disabled:o,error:a,className:s,"data-testid":l,id:c,enableSearch:d=!1,searchFunction:u,searchPlaceholder:f,valueExtractor:h,valueToStringFunction:p,listExtractor:g,displayValueExtractor:m,onSelectOption:b,onShowOptions:v,onHideOptions:y,onRetry:x,optionsLoadState:w="success",optionTruncationType:$="end",renderCustomSelectedOption:C,renderListItem:S,hideNoResultsDisplay:j,renderCustomCallToAction:k,onBlur:D,variant:T="default",readOnly:E,alignment:O,dropdownZIndex:I})=>{const[F,M]=t.useState(r),[_,A]=t.useState(!1),[B,R]=t.useState(!1),[z]=t.useState((()=>Lc.generate())),P=t.useRef(null),L=t.useRef(null),N=t.useRef(null);t.useEffect((()=>{M(r)}),[r]);const H=(e,t)=>{var r;null===(r=L.current)||void 0===r||r.focus(),M(e),A(!1),q(!1),null==b||b(e,t)},W=()=>{_&&(A(!1),q(!1))},V=()=>{B||_||R(!0)},Y=e=>{B&&!_&&P.current&&!P.current.contains(e.relatedTarget)&&(R(!1),null==D||D())},U=()=>{var e;if(!F)return"";if(m)return m(F);if(h){const t=h(F);return p?p(t):null!==(e=null==t?void 0:t.toString())&&void 0!==e?e:""}return F.toString()},K=e=>{if("middle"===$){let t=0;return N&&N.current&&(t=N.current.getBoundingClientRect().width),Nc.truncateOneLine(e,t,120,8)}return e},q=e=>{e?null==v||v():null==y||y()};return e.jsx(XT,{children:e.jsx(sh,{enabled:!E&&!o,isOpen:_,renderElement:()=>e.jsx($f,{className:s,"data-testid":l,id:c,ref:P,tabIndex:-1,onFocus:V,onBlur:Y,$focused:B,$disabled:o,$readOnly:E,$error:a,children:e.jsx(xE,{ref:L,disabled:o,expanded:_,listboxId:z,popupRole:"listbox",readOnly:E,variant:T,children:e.jsx(Jf,{ref:N,$disabled:o,children:F?C?C(F):e.jsx(eh,{truncateType:$,$variant:T,children:K(U())}):e.jsx(th,{truncateType:$,$variant:T,children:n})})})}),renderDropdown:({elementWidth:t})=>e.jsx(bE,{listboxId:z,listItems:i,onSelectItem:H,onDismiss:W,valueExtractor:h,listExtractor:g,enableSearch:d,searchPlaceholder:f,searchFunction:u,selectedItems:F?[F]:[],onRetry:x,itemsLoadState:w,itemTruncationType:$,renderListItem:S,hideNoResultsDisplay:j,renderCustomCallToAction:k,variant:T,width:t}),onOpen:()=>{A(!0),q(!0),R(!0)},onClose:e=>{A(!1),q(!1),"click"!==e&&(R(!1),null==D||D())},onDismiss:()=>{var e;null===(e=L.current)||void 0===e||e.focus(),A(!1),q(!1)},clickToToggle:!0,offset:8,alignment:O,fitAvailableHeight:!0,customZIndex:I})})},cI=K.default.div`
    overflow: hidden;
    border: ${Gs["width-010"]} ${Gs.solid} ${Ks.border};
    border-radius: ${Qs.sm};
    background: ${Ks.bg};
    padding: ${Zs["spacing-16"]};
    min-width: 23rem;

    ${el.MaxWidth.sm} {
        min-width: unset;
        width: calc(100vw - ${Js["sm-margin"]} * 2);
        max-height: 15rem;
    }

    ${el.MaxWidth.xs} {
        width: calc(100vw - ${Js["xs-margin"]} * 2);
    }

    ${el.MaxWidth.xxs} {
        width: calc(100vw - ${Js["xxs-margin"]} * 2);
    }
`,dI=K.default.div`
    display: flex;
    align-items: baseline;
`,uI=K.default.div`
    margin: 0 0.5rem;
`,fI=K.default.div`
    ${e=>"small"===e.$variant?qs["body-md-regular"]:qs["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.truncateType)return i.css`
                    ${il(1)}
                `}}
    overflow: hidden;
`,hI=K.default(fI)`
    color: ${Ks["text-subtler"]};
`,pI=r=>{var{alignment:n="left",className:i,disabled:o,dropdownZIndex:a,error:s,histogramSlider:l,id:c,onBlur:d,onChange:u,onChangeEnd:f,optionTruncationType:h="end",placeholder:p="Select",rangeLabelPrefix:g,rangeLabelSuffix:m,readOnly:b,renderRangeLabel:v,value:y}=r,x=X(r,["alignment","className","disabled","dropdownZIndex","error","histogramSlider","id","onBlur","onChange","onChangeEnd","optionTruncationType","placeholder","rangeLabelPrefix","rangeLabelSuffix","readOnly","renderRangeLabel","value"]);const{interval:w,bins:$=[],renderEmptyView:C,ariaLabels:S}=l,[j,k]=t.useState(H()),[D,T]=t.useState(!1),[E,O]=t.useState(!1),[I]=t.useState((()=>Lc.generate())),F=$.map((e=>e.minValue)),M=Math.min(...F),_=t.useRef(null),A=t.useRef(null),B=t.useRef(null),R=x["data-testid"]||"select-histogram";t.useEffect((()=>{y!==j&&k(H())}),[y]);const z=e=>{k(e),null==u||u(e)},P=e=>{k(e),null==f||f(e)},L=()=>{E||D||O(!0)},N=e=>{E&&!D&&_.current&&!_.current.contains(e.relatedTarget)&&(O(!1),null==d||d())};function H(){return null!=y?y:[M,M+w]}const W=t=>v?v(t):e.jsxs(exports.Typography.BodyBL,{children:[g,t,m]});return e.jsx(XT,{children:e.jsx(sh,{enabled:!b&&!o,isOpen:D,renderElement:()=>e.jsx($f,{className:i,"data-testid":R,id:c,ref:_,tabIndex:-1,onFocus:L,onBlur:N,$focused:E,$disabled:o,$readOnly:b,$error:s,children:e.jsx(xE,{ref:A,disabled:o,expanded:D,listboxId:I,popupRole:"dialog",readOnly:b,variant:"default",children:e.jsx(Jf,{ref:B,$disabled:o,children:F&&0!==F.length?e.jsxs(dI,{children:[W(j[0]),e.jsx(uI,{children:"-"}),W(j[1])]}):e.jsx(hI,{truncateType:h,$variant:"default",children:p})})})}),renderDropdown:({elementWidth:t})=>e.jsx(cI,{style:{width:t},children:e.jsx($x,{interval:w,value:j,bins:$,onChange:z,onChangeEnd:P,showRangeLabels:!1,renderEmptyView:C,ariaLabels:S})}),onOpen:()=>{T(!0)},onClose:()=>{T(!1)},onDismiss:()=>{var e;null===(e=A.current)||void 0===e||e.focus(),T(!1)},clickToToggle:!0,offset:8,alignment:n,fitAvailableHeight:!0,customZIndex:a})})},gI=r=>{var{value:n,ariaLabel:i,onChange:o,onChangeEnd:a}=r,s=X(r,["value","ariaLabel","onChange","onChangeEnd"]);const[l,c]=t.useState(d());t.useEffect((()=>{n!==l[0]&&c(d())}),[n]);function d(){return null!=n?[n]:[0]}return e.jsx(mx,Object.assign({},s,{value:l,numOfThumbs:1,onChange:e=>{const[t]=e;c([t]),null==o||o(t)},onChangeEnd:e=>{const[t]=e;c([t]),null==a||a(t)},ariaLabels:i?[i]:void 0}))},mI=K.default.p`
    text-align: right;
    ${qs["body-sm-semibold"]}
    color: ${Ks["text-subtler"]};
`,bI=({value:r,maxLength:n,renderCustomCounter:i})=>{const[o,a]=t.useState("");t.useEffect((()=>{a(s(`${r||""}`))}),[r,n]);const s=e=>{if(i)return i(n,e.toString().length);{const t=n-e.toString().length;return 1===t?`${t} character left`:`${t.toLocaleString()} characters left`}};return e.jsx(e.Fragment,{children:Y.default.isValidElement(o)?o:e.jsx(mI,{"data-testid":"counter-label",children:o})})},vI=K.default.div`
    display: flex;
    flex-direction: column;
`,yI=K.default.textarea`
    border: ${Gs["width-010"]} ${Gs.solid} ${Ks.border};
    border-radius: ${Qs.sm};
    background: ${Ks.bg};
    outline: none;
    overflow: hidden;

    display: block;
    padding: ${Zs["spacing-12"]} ${Zs["spacing-16"]};
    width: 100%;

    ${qs["body-baseline-regular"]}
    color: ${Ks.text};

    :focus,
    :active {
        outline-offset: -1px;
        outline: ${Gs["width-020"]} ${Gs.solid}
            ${Ks["border-focus"]};
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${Ks["text-subtler"]};
    }

    ${e=>e.readOnly?i.css`
                border-color: transparent;
                background: transparent !important;

                :focus,
                :active {
                    outline-color: ${Ks["border-focus"]};
                }
            `:e.disabled?i.css`
                background: ${Ks["bg-disabled"]};
                cursor: not-allowed;

                :focus,
                :active {
                    outline-color: ${Ks["border-disabled"]};
                }
            `:e.$error?i.css`
                border-color: ${Ks["border-error"]};

                :focus,
                :active {
                    outline-color: ${Ks["border-error-focus"]};
                }
            `:void 0}
`,xI=Y.default.forwardRef(((r,n)=>{var{value:i,disabled:o,error:a,rows:s=5,prefix:l,transformValue:c,onChange:d,maxLength:u}=r,f=X(r,["value","disabled","error","rows","prefix","transformValue","onChange","maxLength"]);const[h,p]=t.useState(i);t.useEffect((()=>{p(i)}),[i]);return e.jsx(yI,Object.assign({ref:n,disabled:o,value:l?l+(null!=h?h:""):h,onChange:e=>{let t=e.target.value;if(l){t.startsWith(l)||(t=l+t.trimStart()),t.length<l.length&&(t=l);if((e.target.selectionStart||0)<l.length)return void e.preventDefault();const r=t.slice(l.length),n=c?c(r):r;if(p(n),e.target.value=l+n,d){const t=Object.assign(Object.assign({},e),{target:Object.assign(Object.assign({},e.target),{value:n})});d(t)}}else{const r=c?c(null!=t?t:""):t;p(r),e.target.value=r,d&&d(e)}},onKeyDown:e=>{if(!l)return;const{selectionStart:t}=e.currentTarget;"Backspace"===e.key&&t<=l.length&&e.preventDefault(),"ArrowLeft"===e.key&&t<=l.length&&e.preventDefault(),"Home"===e.key&&(e.preventDefault(),requestAnimationFrame((()=>{e.currentTarget.setSelectionRange(l.length,l.length)})))},$error:a,rows:s,maxLength:l&&u?l.length+u:u},f))})),wI=Y.default.forwardRef(((r,n)=>{var{value:i,disabled:o,rows:a=5,onChange:s,transformValue:l,prefix:c,maxLength:d,renderCustomCounter:u}=r,f=X(r,["value","disabled","rows","onChange","transformValue","prefix","maxLength","renderCustomCounter"]);const[h,p]=t.useState(i);t.useEffect((()=>{p(i)}),[i]);return e.jsxs(vI,{children:[e.jsx(xI,Object.assign({ref:n,disabled:o,value:h,rows:a||5,onChange:e=>{const t=e.target.value;p(t),s&&s(e)},prefix:c,transformValue:l,maxLength:d},f)),d&&e.jsx(bI,{value:h,maxLength:d,renderCustomCounter:u})]})})),$I=K.default.div`
    display: flex;
    justify-content: flex-end;
    margin-top: ${Zs["spacing-4"]};
`,CI=K.default.div`
    display: flex;
    flex: 1;
    margin-right: ${Zs["spacing-12"]};
`,SI=K.default(Vy)`
    margin-top: 0;
`,jI=Y.default.forwardRef(((r,n)=>{const{label:i,value:o,errorMessage:a,id:s="form-textarea","data-error-testid":l,"data-testid":c,onChange:d,layoutType:u,mobileCols:f,tabletCols:h,desktopCols:p,xxsCols:g,xsCols:m,smCols:b,mdCols:v,lgCols:y,xlCols:x,xxlCols:w,transformValue:$,prefix:C=""}=r,S=X(r,["label","value","errorMessage","id","data-error-testid","data-testid","onChange","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","transformValue","prefix"]),[j,k]=t.useState(o);t.useEffect((()=>{k(o)}),[o]);return e.jsxs(Qy,{id:s,label:i,disabled:S.disabled,layoutType:u,mobileCols:f,tabletCols:h,desktopCols:p,xxsCols:g,xsCols:m,smCols:b,mdCols:v,lgCols:y,xlCols:x,xxlCols:w,children:[e.jsx(xI,Object.assign({id:`${s}-base`,"data-testid":c||s,value:j,error:!!a,onChange:e=>{const t=e.target.value;k(t),d&&d(e)},ref:n,prefix:C,transformValue:$},S)),a||S.maxLength?e.jsxs($I,{children:[a&&e.jsx(CI,{children:e.jsx(SI,{"data-testid":l||(s?`${s}-error-message`:"error-message"),children:a})}),S.maxLength&&e.jsx(bI,{value:j,maxLength:S.maxLength,renderCustomCounter:S.renderCustomCounter})]}):e.jsx(e.Fragment,{})]})})),kI=K.default.div`
    position: relative;
`,DI=K.default(Cf)`
    height: 3rem;
    gap: ${Zs["spacing-8"]};
`,TI=K.default(Sf)`
    display: block;
    width: 100%;
    flex: 1;
`,EI=K.default.div`
    height: 1.625rem;
    width: 1.625rem;
    margin-right: 0.5rem;
    flex-shrink: 0;

    svg {
        height: 100%;
        width: 100%;
    }

    ${e=>e.$disabled?e.$active?i.css`
                    color: ${Ks["icon-selected-disabled"]};
                `:i.css`
                    color: ${Ks["icon-disabled-subtle"]};
                `:e.$active?i.css`
                color: ${Ks["icon-selected"]};
            `:i.css`
            color: ${Ks["icon-subtle"]};
        `};
`,OI=i.css`
    margin-bottom: ${e=>e.$bottomMargin||0}rem;

    // Counter matters
    counter-reset: list;

    li {
        font-weight: ${qs.Spec["weight-regular"]};
        ${e=>e.$size&&qs[`${e.$size}-regular`]}
        color: ${Ks.text};
    }

    // nested lists styling
    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`,II=K.default.ol`
    ${OI}

    margin-left: 3rem;

    ${el.MaxWidth.lg} {
        margin-left: 2.5rem;
    }

    li {
        position: relative;
    }

    ${e=>{const{reversed:t}=e,r=e.$counterType||"decimal",n=e.$counterSeparator||")";return i.css`
            li:before {
                content: counter(list, ${r}) "${n}";
                counter-increment: ${t?"list -1":"list"};
                position: absolute;
                left: -2rem;
            }
        `}}

    ${e=>{const{reversed:t,start:r}=e;if(r){const e=t?r+1:r-1;return i.css`
                counter-reset: list ${e};
            `}}}

    list-style-position: outside;
    list-style-type: none;

    ul > li:before {
        content: "";
    }
`,FI=K.default.ul`
    ${OI}

    margin-left: 2.5rem;
    list-style-type: ${e=>e.$bulletType||"disc"};
`,MI=t=>{var{size:r,bulletType:n,bottomMargin:i,children:o}=t,a=X(t,["size","bulletType","bottomMargin","children"]);return e.jsx(FI,Object.assign({$size:r,$bulletType:n,$bottomMargin:i},a,{children:o}))};MI.displayName="TextList.Ul";const _I=t=>{var{size:r,counterType:n,counterSeparator:i,bottomMargin:o,children:a}=t,s=X(t,["size","counterType","counterSeparator","bottomMargin","children"]);return e.jsx(II,Object.assign({$size:r,$counterType:n,$counterSeparator:i,$bottomMargin:o},s,{children:a}))};_I.displayName="TextList.Ol";const AI=MI,BI=K.default.div`
    position: relative;
    display: inline-flex;
    min-width: 10.375rem;
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    overflow: hidden;
    flex-direction: column;
    height: fit-content;
    background: ${Ks.bg};

    ${e=>{if(!e.$indicator)return i.css`
                justify-content: center;
            `}}

    // Container min width to fit content
    ${e=>{if(e.$useContentWidth)return i.css`
                min-width: unset;
            `}}

    // apply container border and header background color
    ${e=>"no-border"===e.$styleType?e.$error?e.$disabled?i.css`
                            border-color: ${Ks["border-error"]};
                        `:i.css`
                            border-color: ${Ks["border-error"]};

                            &:has(${NI}:hover) {
                                background: ${Ks["bg-hover-subtle"]};
                            }
                        `:e.$disabled?e.$selected?i.css`
                            border: none;
                            background: ${Ks["bg-selected-disabled"]};
                        `:i.css`
                            border: none;
                        `:e.$selected?i.css`
                        border: none;
                        background: ${Ks["bg-selected"]};

                        &:has(${NI}:hover) {
                            background: ${Ks["bg-selected-hover"]};

                            & ${zI} {
                                color: ${Ks["text-selected-hover"]};
                            }

                            & ${GI} {
                                color: ${Ks["icon-selected-hover"]};
                            }
                        }
                    `:i.css`
                    border: none;

                    &:has(${NI}:hover) {
                        background: ${Ks["bg-hover-subtle"]};
                    }
                `:e.$error?e.$disabled?i.css`
                            border-color: ${Ks["border-error"]};
                        `:i.css`
                            border-color: ${Ks["border-error"]};

                            &:has(${NI}:hover) {
                                background: ${Ks["bg-hover-subtle"]};
                            }
                        `:e.$disabled?e.$selected?i.css`
                            border-color: ${Ks["border-selected-disabled"]};
                            background: ${Ks["bg-selected-disabled"]};
                        `:i.css`
                            border-color: ${Ks["border-disabled"]};
                            background: ${Ks["bg-disabled"]};
                        `:e.$selected?i.css`
                        border-color: ${Ks["border-selected"]};
                        background: ${Ks["bg-selected"]};

                        &:has(${NI}:hover) {
                            background: ${Ks["bg-selected-hover"]};

                            & ${zI} {
                                color: ${Ks["text-selected-hover"]};
                            }

                            & ${GI} {
                                color: ${Ks["icon-selected-hover"]};
                            }
                        }
                    `:i.css`
                    border-color: ${Ks.border};

                    &:has(${NI}:hover) {
                        background: ${Ks["bg-hover-subtle"]};
                    }
                `}
`,RI=K.default.input`
    position: absolute;
    height: 100%;
    width: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    top: 0;
    left: 0;

    /* Hide appearance but keep it focusable using keyboard interactions */
    appearance: none;
    background: transparent;
    border: none;
`,zI=K.default.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
    width: 100%;
    overflow: hidden;

    // apply header container text color
    ${e=>e.$disabled?e.$selected?i.css`
                    color: ${Ks["text-selected-disabled"]};
                `:i.css`
                    color: ${Ks["text-disabled"]};
                `:e.$selected?i.css`
                color: ${Ks["text-selected"]};
            `:i.css`
            color: ${Ks.text};
        `}
`,PI=K.default.label`
    ${qs["body-baseline-regular"]}
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
    -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.desktop)&&void 0!==r?r:"none"}};
    ${el.MaxWidth.lg} {
        -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.tablet)&&void 0!==r?r:"none"}};
    }
    ${el.MaxWidth.sm} {
        -webkit-line-clamp: ${e=>{var t,r;return null!==(r=null===(t=e.$maxLines)||void 0===t?void 0:t.mobile)&&void 0!==r?r:"none"}};
    }
`,LI=K.default.div`
    ${qs["body-md-regular"]}
    margin-top: 0.5rem;

    z-index: 1; // forces sublabel to render above the input
    pointer-events: none; // to allow click events to be passed to the input

    strong,
    b {
        ${qs["body-md-semibold"]}
    }
`,NI=K.default.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`,HI=K.default.div`
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
    padding: ${e=>e.$addPadding?"0.6875rem 0rem 0.6875rem 1rem":"0.6875rem 1rem"};
`,WI=K.default.button`
    color: ${e=>e.$disabled?Ks["text-disabled"]:Ks["text-error"]};
    white-space: nowrap;
    ${qs["body-md-semibold"]}
    height: fit-content;
    padding: 0.6875rem 1rem 0.6875rem 0.5rem;
    border: none;
    background: none;

    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
`,VI=K.default.button`
    color: ${e=>e.disabled?Ks["text-disabled"]:Ks["text-primary"]};
    ${qs["body-baseline-semibold"]}
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border: none;
    background-color: ${Ks.bg};
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    padding: 0 1rem 0.6875rem 1rem;
    padding-top: ${e=>e.$paddingTopRequired?"0.6875rem":"0rem"};
    width: 100%;

    svg {
        width: 1em;
        height: 1em;
        margin-left: 0.5rem;
    }
`,YI=K.default.div`
    width: 100%;
    color: ${e=>e.$disabled?Ks["text-disabled"]:Ks["text-error"]};
    border: none;
    background: ${Ks.bg};
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem 0.5rem 1rem;
`,UI=K.default(Yl)`
    width: 100%;
    user-select: none;
`,KI=K.default.div`
    padding: 0 1rem;
    padding-top: 0.6875rem;
    padding-bottom: ${e=>e.$isFinalItem?"0.6875rem":"0.5rem"};
    background-color: ${Ks.bg};
    ${Rl({textSize:"body-md"})}

    ${e=>e.$disabled?i.css`
                color: ${Ks["text-disabled"]};
            `:e.$selected?i.css`
                color: ${Ks["text-selected"]};
            `:i.css`
                color: ${Ks.text};
            `}
`,qI=K.default(exports.Typography.BodyMD)`
    color: ${e=>e.$disabled?Ks["text-disabled"]:Ks["text-error"]};
`,XI=K.default(AI)`
    color: ${e=>e.$disabled?Ks["text-disabled"]:Ks["text-error"]};
`,GI=K.default((({type:t,active:r=!1,disabled:n,className:i})=>{let o;switch(t){case"checkbox":o=r?e.jsx(j.SquareTickFillIcon,{}):e.jsx(S.SquareIcon,{});break;case"radio":o=r?e.jsx(O.CircleDotIcon,{}):e.jsx(E.CircleIcon,{});break;case"tick":o=e.jsx(k.TickIcon,{});break;case"cross":o=e.jsx(m.CrossIcon,{});break;default:o=null}return e.jsx(EI,{className:i,$active:r,$disabled:n,children:o})}))`
    ${e=>e.$disabled?e.$selected?i.css`
                    color: ${Ks["icon-selected-disabled"]};
                `:i.css`
                    color: ${Ks["icon-disabled-subtle"]};
                `:e.$selected?i.css`
                color: ${Ks["icon-selected"]};
            `:i.css`
            color: ${Ks["icon-subtle"]};
        `};
`,ZI=({type:r="checkbox",indicator:i,checked:o,styleType:a="default",children:s,childrenMaxLines:l,subLabel:c,disabled:d,error:u,name:h,id:p,className:g,compositeSection:m,removable:b,onRemove:v,"data-testid":y,onChange:x,useContentWidth:w})=>{const{collapsible:$=!0,errors:C,children:S,initialExpanded:j}=m||{},[k,D]=t.useState(o),[T,E]=t.useState(!!j),O=t.useMemo((()=>{const e=Array.isArray(C)&&(null==C?void 0:C.length)>0,t=!Array.isArray(C)&&!!C;return e||t}),[C]),[I]=t.useState(Lc.generate()),F=p?`${p}`:`tg-${I}`,M=t.useRef(null);t.useEffect((()=>{D(o)}),[o]),t.useEffect((()=>{k&&E(null==j||j)}),[k]);const _=e=>{if(!d){if(x)return void x(e);switch(r){case"checkbox":D((e=>!e));break;case"radio":case"yes":case"no":k||D(!0)}}},A=()=>{d||E(!T)},B=()=>{d||!v||v()},R=()=>{let t;switch(r){case"yes":t="tick";break;case"no":t="cross";break;case"checkbox":case"radio":t=r}return e.jsx(GI,{type:t,active:k,disabled:d,$selected:k,$disabled:d})},z=()=>{if(!c)return null;let t;return t="function"==typeof c?c():c,e.jsx(LI,{"data-id":"toggle-sublabel",children:t})},P=()=>{const t=!T&&!O;return $&&e.jsxs(VI,{$paddingTopRequired:t,disabled:d,onClick:A,"data-testid":T?"collapse-button":"expand-button",children:[T?"Show less":"Show more",T?e.jsx(n.ChevronUpIcon,{"aria-hidden":!0}):e.jsx(f.ChevronDownIcon,{"aria-hidden":!0})]})},L=t=>e.jsxs(e.Fragment,{children:[e.jsx(qI,{weight:"semibold",$disabled:d,children:"Error"}),e.jsx(XI,{$disabled:d,children:null==t?void 0:t.map(((t,r)=>e.jsx("li",{id:`${F}-error-list-item-${r}`,children:e.jsx(qI,{weight:"semibold",$disabled:d,children:t})},r)))})]});return e.jsxs(BI,{$selected:k,$disabled:d,className:g,$styleType:a,$error:u,$indicator:i,$useContentWidth:w,id:p,"data-testid":y,children:[e.jsxs(NI,{id:`${F}-header-container`,$disabled:d,$error:u,$selected:k,$indicator:i,$styleType:a,children:[e.jsxs(HI,{$addPadding:b,children:[e.jsx(RI,{ref:M,name:h,id:`${F}-input`,type:"checkbox"===r?"checkbox":"radio","data-testid":"toggle-input",disabled:d,onChange:_,checked:k}),i&&R(),e.jsxs(zI,{$selected:k,$disabled:d,children:[e.jsx(PI,{htmlFor:`${F}-input`,"data-testid":`${F}-toggle-label`,$maxLines:l,children:s}),c&&z()]})]}),b&&e.jsx(WI,{type:"button",$disabled:d,onClick:B,id:`${F}-remove-button`,children:"Remove"})]}),S&&e.jsxs("div",{children:[(!$||T)&&e.jsx(KI,{"data-id":"toggle-composite-children",$isFinalItem:!$,$disabled:d,children:S}),$&&!T&&O&&e.jsx(YI,{$disabled:d,onClick:A,id:`${F}-error-alert`,children:e.jsx(UI,{type:d?"description":"error",className:g,showIcon:!0,children:Array.isArray(C)?L(C):C})}),P()]})]})},QI=K.default(Ti.div)`
    position: absolute;
    top: calc(3rem + ${Zs["spacing-8"]});
    left: 0;
    overflow: hidden;
    z-index: 1;

    ${el.MaxWidth.xxs} {
        max-width: 100%;
    }
`,JI=K.default.div`
    position: relative;
    width: 100%;
    padding: ${Zs["spacing-8"]} ${Zs["spacing-20"]}
        ${Zs["spacing-24"]} ${Zs["spacing-20"]};
    display: flex;
    flex-direction: column;
    background: ${Ks.bg};
    border: ${Gs["width-010"]} ${Gs.solid} ${Ks.border};
    border-radius: ${Qs.sm};
`,eF=K.default.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${el.MaxWidth.xxs} {
        flex-direction: column;
        width: 100%;
    }
`,tF=K.default.div`
    display: flex;
    justify-content: flex-end;
    margin-top: ${Zs["spacing-16"]};
    gap: ${Zs["spacing-8"]} ${Zs["spacing-16"]};

    ${el.MaxWidth.xxs} {
        flex-direction: column-reverse; // FIXME: this breaks tab focus
        margin-top: ${Zs["spacing-32"]};
    }
`,rF=K.default.div`
    display: flex;
    align-items: center;
    margin-right: ${Zs["spacing-32"]};

    ${el.MaxWidth.xxs} {
        margin-right: 0;
        width: 100%;
    }
`,nF=K.default.div`
    display: flex;
    gap: ${Zs["spacing-8"]};

    ${el.MaxWidth.lg} {
        flex-direction: column;
    }

    ${el.MaxWidth.xxs} {
        flex-direction: row;
        width: 100%;
    }
`,iF=K.default.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${el.MaxWidth.xxs} {
        width: 6rem;
    }
`,oF=K.default(nl)`
    width: 5rem;
    padding: ${Zs["spacing-16"]} 0;
    color: ${Ks.icon};

    svg {
        height: 1rem;
        width: 1rem;
    }

    &:hover {
        color: ${Ks["icon-hover"]};
    }
`,aF=K.default(exports.Typography.BodyBL)`
    flex-shrink: 0;
    width: 1.5rem;
    text-align: center;
`,sF=K.default($f)`
    height: calc(3rem - 2px);
    width: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    ${el.MaxWidth.xxs} {
        width: 100%;
    }
`,lF=K.default(Sf)`
    text-align: center;
    width: 100%;

    :focus::placeholder {
        color: transparent;
    }
`,cF=K.default(ZI)`
    min-width: 5rem;
    flex: 1;
`,dF=K.default(Il.Small)`
    width: 7rem;

    ${el.MaxWidth.sm} {
        flex: 1;
    }

    ${el.MaxWidth.xxs} {
        width: 100%;
    }
`;var uF,fF,hF;!function(e){e.HOUR_UP="hour-up",e.HOUR_DOWN="hour-down",e.MINUTE_UP="minute-up",e.MINUTE_DOWN="minute-down"}(uF||(uF={})),function(e){e.HOUR="hour",e.MINUTE="minute"}(fF||(fF={})),function(e){e.AM="am",e.PM="pm"}(hF||(hF={}));const pF=({id:r,value:i,show:o,format:a,onChange:s,onCancel:l})=>{var c;const d=Au.getTimeValues(a,i),[u,h]=t.useState(d.hour),[p,g]=t.useState(d.minute),[m,b]=t.useState(d.period),v=t.useRef(null),y=t.useRef(null),x=qe();t.useEffect((()=>{if(o&&v.current&&v.current.focus(),o){const{hour:e,minute:t,period:r}=Au.getTimeValues(a,i);h(e),g(t),b(r)}}),[o,i,a]),t.useEffect((()=>{const e=v.current,t=y.current;return e&&e.addEventListener("keydown",w),t&&t.addEventListener("keydown",w),()=>{e&&e.removeEventListener("keydown",w),t&&t.removeEventListener("keydown",w)}}),[]);const w=e=>{["Digit0","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Tab","Backspace","Delete","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)||["Backspace","0","1","2","3","4","5","6","7","8","9"].includes(e.key)||e.preventDefault()},$=t.useCallback((e=>{switch(e.currentTarget.name){case uF.MINUTE_UP:g(Au.updateMinutes(p,"add"));break;case uF.MINUTE_DOWN:g(Au.updateMinutes(p,"minus"));break;case uF.HOUR_UP:h(Au.updateHours(u,"add"));break;case uF.HOUR_DOWN:h(Au.updateHours(u,"minus"))}}),[u,p]),C=e=>{e.target.select()},S=e=>{const t=e.target.value;switch(e.target.name){case fF.HOUR:t.length<=2&&h(t);break;case fF.MINUTE:t.length<=2&&g(t)}},j=e=>{const t=parseInt(e.target.value);if(!isNaN(t))switch(e.target.name){case fF.HOUR:{const r=t>23||t<0?d.hour:Au.convertHourTo12HourFormat(e.target.value);h(r);break}case fF.MINUTE:{const r=t>59||t<0?d.minute:e.target.value;g(Nc.padValue(r));break}}},k=e=>{switch(e.target.name){case hF.AM:b(_u.AM);break;case hF.PM:b(_u.PM)}},D=e=>r?`${r}-${e}`:e,T=di({opacity:o?1:0,height:o?(null!==(c=x.height)&&void 0!==c?c:0)+32+2:0});return e.jsx(QI,{"data-testid":"animated-dropdown-wrapper",style:T,children:e.jsxs(JI,{ref:x.ref,"data-testid":D("timepicker-dropdown"),inert:o?void 0:"",children:[e.jsxs(eF,{children:[e.jsxs(rF,{children:[e.jsxs(iF,{children:[e.jsx(oF,{"aria-label":"increase hour",name:uF.HOUR_UP,tabIndex:-1,onClick:$,"data-testid":D("hour-increment-button"),children:e.jsx(n.ChevronUpIcon,{})}),e.jsx(sF,{children:e.jsx(lF,{"aria-label":"hour",type:"number",name:fF.HOUR,id:"hour",maxLength:2,pattern:"[0-9]{2}",ref:v,value:u,onFocus:C,onChange:S,onBlur:j,min:1,max:12,placeholder:"HH","data-testid":D("hour-input")})}),e.jsx(oF,{"aria-label":"decrease hour",name:uF.HOUR_DOWN,tabIndex:-1,onClick:$,"data-testid":D("hour-decrement-button"),children:e.jsx(f.ChevronDownIcon,{})})]}),e.jsx(aF,{children:":"}),e.jsxs(iF,{children:[e.jsx(oF,{"aria-label":"increase minute",name:uF.MINUTE_UP,tabIndex:-1,onClick:$,"data-testid":D("minute-increment-button"),children:e.jsx(n.ChevronUpIcon,{})}),e.jsx(sF,{children:e.jsx(lF,{"aria-label":"minute",type:"number",name:fF.MINUTE,id:"minute",maxLength:2,pattern:"[0-9]{2}",ref:y,value:p,onChange:S,onBlur:j,onFocus:C,min:0,max:59,placeholder:"MM","data-testid":D("minute-input")})}),e.jsx(oF,{"aria-label":"decrease minute",name:uF.MINUTE_DOWN,tabIndex:-1,onClick:$,"data-testid":D("minute-decrement-button"),children:e.jsx(f.ChevronDownIcon,{})})]})]}),e.jsxs(nF,{children:[e.jsx(cF,{checked:m===_u.AM,name:hF.AM,type:"radio",onChange:k,"data-testid":D("am-toggle"),"aria-label":"AM",children:"AM"}),e.jsx(cF,{checked:m===_u.PM,name:hF.PM,type:"radio",onChange:k,"data-testid":D("pm-toggle"),"aria-label":"PM",children:"PM"})]})]}),e.jsxs(tF,{children:[e.jsx(dF,{"aria-label":"close selector",type:"button",styleType:"secondary",onClick:l,"data-testid":D("cancel-button"),children:"Cancel"}),e.jsx(dF,{"aria-label":"confirm selection",type:"button",onClick:()=>{let e;e="24hr"===a?Au.convertTo24HourFormat({hour:u,minute:p,period:m}):`${u}:${p}${m}`,s(e)},disabled:""===u||""===p,"data-testid":D("confirm-button"),children:"Done"})]})]})})},gF=r=>{var{id:n,disabled:i=!1,error:o,value:a,format:s="24hr",readOnly:l,onChange:c,onFocus:d,onBlur:u}=r,f=X(r,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur"]);const[h,p]=t.useState(!1),[g,m]=t.useState(!1),[b,v]=t.useState(""),[y,x]=t.useState(""),w=t.useRef(null);t.useEffect((()=>{a&&(v(a.start),x(a.end))}),[a]),Wc("mousedown",(function(e){i||j(e)}),"document"),Wc("keyup",(function(e){if("Tab"===e.code)j(e)}),"document");const $=()=>{S()},C=()=>{h||g||d&&d()},S=()=>{p(!1),m(!1),u&&u()},j=e=>{w.current&&!w.current.contains(e.target)&&(g||h)&&S()};return e.jsx(kI,Object.assign({ref:w,id:n},f,{children:e.jsxs(DI,{$disabled:i,$error:o,$readOnly:l,children:[e.jsxs(Oh,{error:o,currentActive:h?"start":g?"end":"none",children:[e.jsx(TI,{onFocus:()=>{i||l||h||(m(!1),p(!0),C())},readOnly:!0,placeholder:"From",value:Au.formatDisplayValue(b,s),disabled:i,"data-testid":f["data-testid"]?`${f["data-testid"]}-timepicker-selector`:"timepicker-selector"}),e.jsx(TI,{onFocus:()=>{i||l||g||(p(!1),m(!0),C())},readOnly:!0,placeholder:"To",value:Au.formatDisplayValue(y,s),disabled:i,"data-testid":f["data-testid"]?`${f["data-testid"]}-timepicker-selector`:"timepicker-selector"})]}),e.jsx(pF,{id:n,show:h,value:b,format:s,onCancel:$,onChange:e=>{p(!1),m(!0),v(e);c&&c({start:e,end:y})}}),e.jsx(pF,{id:n,show:g,value:y,format:s,onCancel:$,onChange:e=>{m(!1),x(e);c&&c({start:b,end:e}),""==b?p(!0):u&&u()}})]})}))},mF=K.default(Cf)`
    height: 3rem;
    gap: ${Zs["spacing-8"]};
    // space for clear icon
    padding-right: calc(1.25rem + ${Zs["spacing-20"]});
`,bF=r=>{var{id:n,disabled:i=!1,error:o,value:a,format:s="12hr",readOnly:l,onChange:c,onFocus:d,onBlur:u,alignment:f="left",dropdownZIndex:h,startLimit:p,endLimit:g,interval:m=15}=r,b=X(r,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur","alignment","dropdownZIndex","startLimit","endLimit","interval"]);const[v]=t.useState((()=>Lc.generate())),[y,x]=t.useState(null),[w,$]=t.useState(!1),[C,S]=t.useState(""),[j,k]=t.useState(""),[D,T]=t.useState(""),[E,O]=t.useState(""),[I,F]=t.useState(""),M=t.useRef(null),_=t.useRef(null),A=t.useRef(null),B=t.useMemo((()=>Au.generateTimings(m,s,p,g)),[m,s,p,g]),R=t.useMemo((()=>{if(""===E)return B;const e=Au.findClosestFlooredTime(E,B);return e?B.slice(B.indexOf(e)):[]}),[B,E]),z=t.useCallback((e=>Au.parseInput(e,s)),[s]);t.useEffect((()=>{var e,t;if(a){const r=null!==(e=z(a.start))&&void 0!==e?e:"",n=null!==(t=z(a.end))&&void 0!==t?t:"";k(r),T(n),O(r),F(n)}}),[a,z]),t.useEffect((()=>{if(o)return void $(!1);const e=z(j),t=z(D);if(void 0===e)S("Invalid start time");else if(void 0===t)S("Invalid end time");else{if(!(""!==e&&""!==t&&Au.to24Hour(t)<Au.to24Hour(e)))return S(""),void(document.activeElement!==_.current&&document.activeElement!==A.current||$(!0));S("End time must be after start time")}$(!1)}),[j,D,z,o]);const P=e=>{i||l||(y||w||null==d||d(),x(e),$(!0))},L=e=>{var t;i||l||(x(e),$(!0),null===(t=("start"===e?_:A).current)||void 0===t||t.select())};function N(e){var t;switch(e.code){case"Enter":"start"===y?H(j):"end"===y&&(w&&W(D),null===(t=A.current)||void 0===t||t.blur());break;case"Tab":V(j,D,{})}}const H=e=>{V(e,D,{goToNextInput:!0})},W=e=>{V(j,e,{triggerOnBlur:!0})},V=(e,t,{goToNextInput:r,triggerOnBlur:n})=>{var i,o,a;const s=null!==(i=z(e))&&void 0!==i?i:E,l=null!==(o=z(t))&&void 0!==o?o:I;k(s),T(l);s===E&&l===I||null==c||c({start:s,end:l}),r&&void 0!==z(e)&&(x("end"),null===(a=A.current)||void 0===a||a.select()),n&&(x(null),$(!1),null==u||u()),O(s),F(l)},Y=e=>{e.stopPropagation(),k(""),T(""),O(""),F("");null==c||c({start:"",end:""}),x(null),$(!1)},U=e=>{M.current&&!M.current.contains(e.relatedTarget)&&y&&!w&&V(j,D,{triggerOnBlur:!0})},K=()=>{if(!l&&!i&&((null==j?void 0:j.length)>0||(null==D?void 0:D.length)>0))return e.jsx(oI,{onClick:Y,type:"button","aria-label":"Clear",children:e.jsx(jx,{"aria-hidden":!0})})};return e.jsxs(kI,Object.assign({id:n},b,{children:[e.jsx(XT,{children:e.jsx(sh,{enabled:!l&&!i,isOpen:w,renderElement:()=>e.jsxs(mF,{ref:M,$disabled:i,$error:o||!!C,$readOnly:l,onBlur:U,children:[e.jsxs(Oh,{error:o||!!C,currentActive:null===y?"none":y,children:[e.jsx(TI,{ref:_,onFocus:()=>P("start"),placeholder:"start"===y?"hh:mm":"From",onChange:e=>k(e.target.value),value:j,disabled:i,readOnly:l,"data-testid":b["data-testid"]?`${b["data-testid"]}-timepicker-selector`:"timepicker-selector",onClick:()=>L("start"),onKeyDown:N,autoComplete:"off","aria-label":"Start time input",type:"text",role:"combobox","aria-expanded":w,"aria-controls":v,"aria-autocomplete":"list"}),e.jsx(TI,{ref:A,onFocus:()=>P("end"),placeholder:"end"===y?"hh:mm":"To",onChange:e=>T(e.target.value),value:D,disabled:i,readOnly:l,"data-testid":b["data-testid"]?`${b["data-testid"]}-timepicker-selector`:"timepicker-selector",onClick:()=>L("end"),onKeyDown:N,autoComplete:"off","aria-label":"End time input",type:"text",role:"combobox","aria-expanded":w,"aria-controls":v,"aria-autocomplete":"list"})]}),K()]}),renderDropdown:()=>{if(w)return"start"===y?e.jsx(bE,{listItems:B,onSelectItem:H,selectedItems:[j],disableItemFocus:!0,topScrollItem:Au.findClosestFlooredTime(z(j),B),listboxId:v}):e.jsx(bE,{listItems:R,onSelectItem:W,selectedItems:[D],disableItemFocus:!0,topScrollItem:Au.findClosestFlooredTime(z(D),R),listboxId:v})},onClose:e=>{"outside-press"===e?(x(null),$(!1),null==u||u()):V(j,D,{triggerOnBlur:!0})},onDismiss:()=>{var e;null===(e=("start"===y?_:A).current)||void 0===e||e.focus(),$(!1)},offset:8,alignment:f,fitAvailableHeight:!0,customZIndex:h})}),!o&&C&&e.jsx(Vy,{id:n?`${n}-error-message`:"error-message",tabIndex:0,"data-testid":n?`${n}-error-message`:"error-message",children:C})]}))},vF=t=>{var{variant:r="dial"}=t,n=X(t,["variant"]);return"combobox"===r?e.jsx(bF,Object.assign({},n)):e.jsx(gF,Object.assign({},n))};K.default.div`
    position: relative;
`;const yF=K.default(Sf)`
    height: calc(3rem - 2px); // exclude top and bottom borders
`,xF=r=>{var{id:n,disabled:i=!1,readOnly:o=!1,error:a,value:s,placeholder:l,format:c="24hr",onChange:d,onFocus:u,onBlur:f}=r,h=X(r,["id","disabled","readOnly","error","value","placeholder","format","onChange","onFocus","onBlur"]);const[p,g]=t.useState(!1),m=t.useRef(null);Wc("mousedown",(function(e){i||o||y(e)}),"document"),Wc("keyup",(function(e){if("Tab"===e.code)y(e)}),"document");const b=()=>{i||o||p||(g(!0),u&&u())};const v=()=>{g(!1),f&&f()},y=e=>{m.current&&!m.current.contains(e.target)&&p&&v()},x=t.useCallback((()=>"12hr"===c?"HH:MMam":"HH:MM"),[c,l]);return e.jsxs(Cf,Object.assign({ref:m,id:n,$readOnly:o,$disabled:i,$error:a},h,{children:[e.jsx(yF,{onFocus:b,focused:p,readOnly:!0,placeholder:l||x(),value:Au.formatDisplayValue(s,c),disabled:i,"data-testid":n?`${n}-timepicker-selector`:"timepicker-selector"}),e.jsx(pF,{id:n,show:p,value:s,format:c,onCancel:()=>{v()},onChange:e=>{d&&d(e),v()}})]}))},wF=K.default(PS)`
    margin-right: 0.5rem;
`,$F=K.default(Tx)`
    width: 2.5rem;

    input {
        text-align: center;
    }
`,CF=K.default($F)`
    // Cheat to balance the placeholder look while ensuring enough width
    margin-left: 0.5rem;
    width: 6rem;

    input {
        text-align: left;
    }
`,SF=K.default(exports.Typography.BodyBL)`
    margin: 0 0.25rem;
    ${e=>{if(e.$inactive)return i.css`
                color: ${Ks["text-disabled"]};
            `}}
`,jF=K.default.div`
    display: flex;
    align-items: center;
    height: calc(3rem - 2px); // exclude top and bottom borders
`,kF=K.default(exports.Typography.BodyBL)``,DF=r=>{var{disabled:n,error:i,value:o,onChange:a,onBlur:s,onChangeRaw:l,onBlurRaw:c,readOnly:d,placeholder:u="00-8888",autoComplete:f}=r,h=X(r,["disabled","error","value","onChange","onBlur","onChangeRaw","onBlurRaw","readOnly","placeholder","autoComplete"]);const[p,g]=t.useState(""),[m,b]=t.useState(""),[v,y]=t.useState("none"),x=t.useRef(null),w=t.useRef(null),$=t.useRef(null),C=t.useRef(p),S=t.useRef(m),j=t.useRef(v),k=e=>e.toLocaleUpperCase().replace(/[^0-9A-Za-z]/g,""),D=Uc({ref:w,formatter:k}),T=Uc({ref:$,formatter:k}),E=e=>{C.current=e,g(e)},O=e=>{S.current=e,b(e)},I=e=>{j.current=e,y(e)};t.useEffect((()=>{"floor"===v&&3===p.length&&$.current&&$.current.focus()}),[p]),t.useEffect((()=>{R(o)}),[o]);const F=e=>{I(e.target.name),e.target.select()},M=e=>{const t=e.target.name,r=e.target.value,n=B(r);"floor"===t?(E(n),n!==p&&z(n,t)):"unit"===t&&(O(n),n!==m&&z(n,t))},_=e=>{const t=e.target.name;if("floor"===t){const e=D();if(!e)return;const{nextValue:r,updateCaretPosition:n}=e;n(),E(r),z(r,t)}else if("unit"===t){const e=T();if(!e)return;const{nextValue:r,updateCaretPosition:n}=e;n(),O(r),z(r,t)}},A=e=>{var t;"Backspace"!==e.code&&"Backspace"!==e.key||"unit"===v&&0===m.length&&(null===(t=w.current)||void 0===t||t.focus())},B=e=>/^[0-9]$/.test(e)?Nc.padValue(e,!0):e.toLocaleUpperCase(),R=e=>{if(e!==TF)if(void 0===e||0===e.length)E(""),O("");else{const t=e.split("-");if(2===t.length){const e=t[0],r=t[1];E("floor"===v?e:B(e)),O("unit"===v?r:B(r))}}},z=(e,t)=>{if(!a&&!l)return;const r={floor:C.current,unit:S.current};if(r[t]=e,a){const e=L(r);a(e)}l&&l([r.floor,r.unit])},P=()=>{if(!s&&!c)return;const e={floor:B(C.current),unit:B(S.current)};if(s){const t=L(e);s(t)}c&&c([e.floor,e.unit])},L=e=>{const t=[e.floor,e.unit];return e.floor.length>0&&e.unit.length>0?t.join("-"):t.every((e=>""===e))?"":TF},N=e=>e.split("-");return e.jsxs(Cf,Object.assign({},h,{ref:x,onClick:()=>{"none"===v&&w.current&&w.current.focus()},$disabled:n,$error:i,$readOnly:d,tabIndex:-1,onBlur:e=>{x.current&&x.current.contains(e.relatedTarget)||"none"!==j.current&&(I("none"),P())},children:[e.jsx(wF,{"data-testid":"addon",$disabled:n,$readOnly:d,children:"#"}),d&&o?(t=>{const r=t.split("-");return e.jsxs(jF,{children:[e.jsx(kF,{children:r[0]}),e.jsx(SF,{children:"-"}),e.jsx(kF,{children:r[1]})]})})(o):e.jsxs(e.Fragment,{children:[e.jsx($F,{name:"floor",maxLength:3,value:p,ref:w,onFocus:F,onBlur:M,onChange:_,disabled:n,readOnly:d,type:"text",pattern:"[0-9A-Z]{2,3}","data-testid":"floor-input","aria-label":"floor-input",placeholder:"floor"!==v||d?N(u)[0]:"",autoComplete:f,styleType:"no-border"}),e.jsx(SF,{$inactive:0===p.length,children:"-"}),e.jsx(CF,{name:"unit",maxLength:5,value:m,ref:$,onFocus:F,onBlur:M,onChange:_,onKeyDown:A,disabled:n,readOnly:d,type:"text",pattern:"[0-9A-Z]{2,5}","data-testid":"unit-input","aria-label":"unit-input",placeholder:"unit"!==v||d?N(u)[1]:"",autoComplete:f,styleType:"no-border"})]})]}))},TF="Invalid unit number",EF={DateInput:t=>{var{label:r,errorMessage:n,id:i="form-date-input","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(Qy,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e.jsx(vh,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n},v))})},DateRangeInput:t=>{var{label:r,errorMessage:n,id:i="form-date-range-input","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(Qy,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e.jsx(Ah,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n},v))})},ESignature:t=>{const{label:r,errorMessage:n,id:i="form-field","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(Qy,{id:i,label:r,errorMessage:n,"data-error-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e.jsx(Mp,Object.assign({id:`${i}-base`,"data-testid":a||i},v))})},HistogramSlider:t=>{var{label:r,errorMessage:n,id:i="form-histogram-slider","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(Qy,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e.jsx($x,Object.assign({id:`${i}-base`,"data-testid":a||i},v))})},Input:Ex,InputGroup:HS,MaskedInput:rj,Label:Uy,MultiSelect:t=>{var{label:r,errorMessage:n,id:i="form-multi-select","data-error-testid":o,"data-testid":a,enableSearch:s=!1,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:f,xsCols:h,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v,variant:y}=t,x=X(t,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","variant"]);return e.jsx(Qy,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:x.disabled,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:f,xsCols:h,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v,children:e.jsx(_O,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n,enableSearch:s,variant:y},x))})},NestedSelect:t=>{var{label:r,errorMessage:n,id:i="form-nested-select","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(Qy,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e.jsx(zO,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n},v))})},NestedMultiSelect:t=>{var{label:r,errorMessage:n,id:i="form-nested-multi-select","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(Qy,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e.jsx(RO,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n},v))})},Select:t=>{var{label:r,errorMessage:n,id:i="form-select","data-error-testid":o,"data-testid":a,enableSearch:s=!1,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:f,xsCols:h,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v,variant:y}=t,x=X(t,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","variant"]);return e.jsx(Qy,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:x.disabled,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:f,xsCols:h,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v,children:e.jsx(lI,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n,enableSearch:s,variant:y},x))})},SelectHistogram:t=>{var{label:r,errorMessage:n,id:i="form-select-histogram","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,histogramSlider:v}=t,y=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","histogramSlider"]);return e.jsx(Qy,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:y.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e.jsx(pI,Object.assign({histogramSlider:v,error:!!n,"data-testid":a||i,id:`${i}-base`},y))})},Slider:t=>{var{label:r,errorMessage:n,id:i="form-slider","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(Qy,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e.jsx(gI,Object.assign({id:`${i}-base`,"data-testid":a||i},v))})},RangeSlider:t=>{var{label:r,errorMessage:n,id:i="form-range-slider","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(Qy,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e.jsx(mx,Object.assign({id:`${i}-base`,"data-testid":a||i},v))})},RangeSelect:t=>{var{label:r,errorMessage:n,id:i="form-select","data-error-testid":o,"data-testid":a,enableSearch:s=!1,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:f,xsCols:h,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v}=t,y=X(t,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(Qy,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:y.disabled,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:f,xsCols:h,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v,children:e.jsx(sI,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n,enableSearch:s},y))})},Textarea:jI,Timepicker:t=>{var{label:r,errorMessage:n,id:i="form-timepicker","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(Qy,{id:i,label:r,errorMessage:n,disabled:v.disabled,"data-error-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e.jsx(xF,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n},v))})},TimeRangePicker:t=>{var{label:r,errorMessage:n,id:i="form-timepicker","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(Qy,{id:i,label:r,errorMessage:n,disabled:v.disabled,"data-error-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e.jsx(vF,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n},v))})},CustomField:t=>{var{id:r="form-custom-field","data-error-testid":n,children:i}=t,o=X(t,["id","data-error-testid","children"]);return e.jsx(Qy,Object.assign({id:r,"data-error-testid":n},o,{children:i}))},UnitNumberInput:t=>{var{label:r,errorMessage:n,id:i="form-unit-number-input","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(Qy,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e.jsx(DF,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n},v))})},PhoneNumberInput:t=>{var{label:r,errorMessage:n,id:i="form-phone-number-input","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(Qy,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e.jsx(eI,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n},v))})},PredictiveTextInput:t=>{var{label:r,errorMessage:n,id:i="form-predictive-text","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(Qy,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e.jsx(nI,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n},v))})}},OF=K.default.li`
    display: flex;
    flex-direction: column;
    padding: ${Zs["spacing-32"]} 0;
    background: transparent;

    :not(:last-child) {
        border-bottom: ${Gs["width-010"]} ${Gs.solid} ${Ks.border};
    }
`,IF=K.default.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: ${Zs["spacing-16"]};
    width: 100%;
`,FF=K.default.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`,MF=K.default.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: ${Zs["spacing-16"]};

    ${el.MaxWidth.sm} {
        flex-direction: column;
        justify-content: flex-start;
    }
`,_F=K.default(exports.Typography.BodyMD)`
    display: flex;
    flex: 1;
    margin-right: ${Zs["spacing-16"]};

    ${el.MaxWidth.sm} {
        margin-right: 0;
        margin-bottom: ${Zs["spacing-8"]};
    }
`,AF=K.default(exports.Typography.BodyMD)``,BF=K.default.div`
    display: flex;
    ${el.MaxWidth.sm} {
        flex-direction: column;
    }

    ${e=>{if(e.$thumbnail)return i.css`
                margin-left: calc(
                    96px + ${Zs["spacing-32"]}
                ); // thumbnail width + right margin

                ${el.MaxWidth.sm} {
                    margin-left: 0;
                }
            `}}
`,RF=K.default(Il.Small)`
    width: 7.5rem;
    :not(:last-of-type) {
        margin-right: ${Zs["spacing-16"]};
    }

    ${el.MaxWidth.sm} {
        width: 100%;
        :not(:last-of-type) {
            margin-bottom: ${Zs["spacing-16"]};
        }
    }
`,zF=({thumbnailImageDataUrl:t,"data-testid":r,renderReplaceButton:n,onReplaceClick:i})=>e.jsxs(PF,{"data-testid":r,children:[e.jsx(LF,{"data-testid":r?`${r}-image`:void 0,src:t}),n&&e.jsx(NF,{type:"button",onClick:()=>{i&&i()},children:"Replace"})]}),PF=K.default.div`
    width: auto;
    margin-right: ${Zs["spacing-32"]};
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: center;
`,LF=K.default(ng)`
    width: 96px;
    height: 96px;
    aspect-ratio: 1;
    border-radius: ${Qs.sm};
    border: ${Gs["width-010"]} ${Gs.solid} ${Ks.border};
    object-fit: cover;

    ${el.MaxWidth.sm} {
        width: 64px;
        height: 64px;
    }
`,NF=K.default.button`
    width: 100%;
    height: 1.625rem;
    margin-top: ${Zs["spacing-8"]};
    border: none;
    background: transparent;
    cursor: pointer;

    ${qs["body-md-semibold"]}
    color: ${Ks["text-primary"]};

    :hover {
        color: ${Ks["text-hover"]};
    }
`,HF=({fileItem:r,fileDescriptionMaxLength:n,wrapperWidth:i,onSave:o,onCancel:a,onBlur:s})=>{const{id:l,name:c,size:d,truncateText:u=!0,thumbnailImageDataUrl:f}=r,[h,p]=t.useState(),[g,m]=t.useState(""),b=t.useRef(null),v=t.useRef(null);t.useEffect((()=>{p(y(c))}),[i]),t.useEffect((()=>{m(r.description||"")}),[r]);const y=e=>{if(!u)return e;const t=v&&v.current?v.current.getBoundingClientRect().width:0;return Nc.truncateOneLine(e,t,t/2,t/2/8,16)};return e.jsxs(OF,{"data-testid":`${l}-edit-display`,children:[e.jsxs(IF,{children:[f&&e.jsx(zF,{thumbnailImageDataUrl:f}),e.jsxs(FF,{children:[e.jsxs(MF,{ref:v,children:[e.jsx(_F,{weight:"semibold",children:h}),e.jsx(AF,{children:rg.formatFileSizeDisplay(d)})]}),e.jsx(EF.Textarea,{ref:b,id:`${l}-description-textarea`,"data-testid":`${l}-textarea`,value:g,maxLength:n,onChange:e=>{m(e.target.value)},onBlur:e=>{s(e.target.value)},rows:3,label:{children:"Photo description",subtitle:"Describe this photo to users who may not be able to see the image."}})]})]}),e.jsxs(BF,{$thumbnail:!!f,children:[e.jsx(RF,{"data-testid":`${l}-save-button`,type:"button",disabled:0===g.trim().length,onClick:()=>{b.current&&o(b.current.value.trim())},children:"Save"}),e.jsx(RF,{type:"button",styleType:"secondary","data-testid":`${l}-cancel-button`,onClick:a,children:"Cancel"})]})]})},WF=K.default.li`
    display: flex;
    align-items: center;
    width: 100%;
    border: none;

    :not(:last-child) {
        margin-bottom: ${Zs["spacing-16"]};
    }

    ${e=>e.$disabled&&"none"===e.$focusType?i.css`
                cursor: not-allowed;
            `:e.$sortable&&"self"===e.$focusType?i.css`
                cursor: grabbing;
                // Following recommendation by the library for touch events
                // https://docs.dndkit.com/api-documentation/sensors/touch#recommendations
                touch-action: manipulation;
            `:e.$sortable?i.css`
                :hover {
                    cursor: grab;
                }
                // Following recommendation by the library for touch events
                // https://docs.dndkit.com/api-documentation/sensors/touch#recommendations
                touch-action: manipulation;
            `:void 0}
`,VF=K.default(M.DragHandleIcon)`
    margin-right: ${Zs["spacing-16"]};
    height: 1.5rem;
    width: 1.5rem;
    color: ${Ks.icon};

    ${e=>e.$active?i.css`
                color: ${Ks["icon-primary"]};
            `:e.$disabled?i.css`
                color: ${Ks["icon-disabled"]};
            `:void 0};
`,YF=K.default.div`
    background: ${Ks["bg-primary-subtlest"]};
    border: ${Gs["width-010"]} ${Gs.solid} ${Ks.border};
    border-radius: ${Qs.sm};
    padding: ${Zs["spacing-16"]} ${Zs["spacing-32"]};
    display: flex;
    align-items: center;
    width: 100%;

    ${el.MaxWidth.sm} {
        padding: ${Zs["spacing-16"]};
    }

    ${e=>e.$focused?i.css`
                border-color: ${Ks["border-focus"]};
                box-shadow: 0 0 4px 1px
                    rgb(from ${Ks["border-focus"]} r g b / 50%);
            `:e.$disabled?i.css`
                border-color: ${Ks["border-disabled"]};
            `:e.$error?i.css`
                background: ${Ks["bg-error"]};
                border-color: ${Ks["border-error"]};
            `:void 0}

    ${e=>{if(!e.$error&&(e.$loading||e.$editable))return i.css`
                ${el.MaxWidth.sm} {
                    flex-direction: column;
                    align-items: flex-start;
                }
            `}}
`,UF=K.default.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${el.MaxWidth.sm} {
        flex-direction: column;
        width: 100%;
        align-items: flex-start;
    }

    ${e=>{if(e.$hasThumbnail)return i.css`
                ${el.MaxWidth.sm} {
                    flex-direction: row;
                    align-items: center;
                }
            `}}
`,KF=K.default.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 100%;
`,qF=K.default.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${el.MaxWidth.sm} {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }
`,XF=K.default.div`
    display: flex;
    width: 5rem;
    margin-left: ${Zs["spacing-8"]};
    justify-content: flex-end;

    ${el.MaxWidth.sm} {
        ${e=>e.$hideInMobile?i.css`
                    display: none;
                    visibility: hidden;
                `:i.css`
                    width: 100%;
                    margin-left: 0;
                    margin-top: ${Zs["spacing-8"]};
                    justify-content: flex-start;
                `}
    }
`,GF=K.default(exports.Typography.BodyMD)``,ZF=K.default(GF)`
    margin-top: ${Zs["spacing-4"]};
`,QF=K.default(exports.Typography.BodySM)`
    color: ${Ks["text-error"]};
`,JF=K.default(QF)`
    margin-top: ${Zs["spacing-4"]};
    ${el.MaxWidth.sm} {
        display: none;
        visibility: hidden;
    }
`,eM=K.default(QF)`
    display: none;
    visibility: hidden;
    ${el.MaxWidth.sm} {
        display: block;
        visibility: visible;
        margin-top: ${Zs["spacing-8"]};
    }
`,tM=K.default.div`
    width: 6rem;
    margin-left: ${Zs["spacing-32"]};
    display: flex;
    justify-content: flex-end;
    align-items: center;

    ${el.MaxWidth.sm} {
        width: fit-content;

        ${e=>e.$loading&&!e.$error?i.css`
                    margin-left: 0;
                    margin-top: ${Zs["spacing-16"]};
                    width: 100%;
                `:e.$editable&&!e.$error?i.css`
                    margin-left: 0;
                    margin-top: ${Zs["spacing-16"]};
                    align-self: flex-end;
                `:void 0}
    }
`,rM=K.default(xh)`
    min-width: unset;

    :not(:last-child) {
        margin-right: ${Zs["spacing-16"]};
    }
`,nM=K.default(nl)`
    height: 2.5rem;
    width: 2.5rem;
    padding: unset;
    svg {
        height: 1.5rem;
        width: 1.5rem;
        color: ${Ks.icon};
    }
`,iM=t.memo((({fileItem:r,editable:n,sortable:i,wrapperWidth:o,disabled:a,readOnly:s,onDelete:l,onEditClick:c})=>{const{id:d,name:u,size:f,description:h,progress:p=1,errorMessage:g,thumbnailImageDataUrl:b,truncateText:v=!0}=r,[y,x]=t.useState(),{activeId:w}=t.useContext(wg),{attributes:$,listeners:C,setNodeRef:S,transform:j,transition:k}=Cy({id:d}),D=t.useRef(null),T={transform:xb.Translate.toString(j),transition:k},E=Object.assign(Object.assign({style:T},$),C),O=p<1,M=rg.formatFileSizeDisplay(f),_=w?w===d?"self":"others":"none";t.useEffect((()=>{x(z(u))}),[o]);const A=()=>{l()},B=()=>{c&&c()},R=e=>{i&&e.stopPropagation()},z=e=>{if(!v)return e;const t=D&&D.current?D.current.getBoundingClientRect().width:0;return Nc.truncateOneLine(e,t,t/2,t/2/8,16)},P=()=>a||!!w,L=()=>!!i&&!s,N=()=>e.jsxs(e.Fragment,{children:[e.jsx(GF,{weight:h?"semibold":"regular",children:y}),h&&e.jsx(ZF,{children:h})]});return e.jsxs(WF,Object.assign({id:d,ref:S,$sortable:L(),$disabled:P(),$focusType:_},L()?E:{},{children:[L()&&e.jsx(VF,{"data-testid":`${d}-drag-handle`,$disabled:P(),$active:"self"===_}),e.jsxs(YF,{$focused:"self"===_,$error:!!g,$loading:O,$disabled:P(),$editable:n,children:[(()=>{let t;return t=g?e.jsxs(e.Fragment,{children:[e.jsxs(KF,{ref:D,children:[N(),g&&e.jsx(JF,{weight:"semibold",children:g})]}),e.jsx(XF,{children:e.jsx(GF,{children:M})}),g&&e.jsx(eM,{weight:"semibold",children:g})]}):b?(t=>e.jsxs(e.Fragment,{children:[e.jsx(zF,{thumbnailImageDataUrl:t,"data-testid":`${d}-thumbnail`}),e.jsxs(qF,{children:[e.jsx(KF,{ref:D,children:N()}),e.jsx(XF,{children:e.jsx(GF,{children:M})})]})]}))(b):e.jsxs(e.Fragment,{children:[e.jsx(KF,{ref:D,children:N()}),e.jsx(XF,{$hideInMobile:O,children:e.jsx(GF,{children:M})})]}),e.jsx(UF,{$hasThumbnail:!!b,children:t})})(),!s&&(()=>{let t;return t=g?e.jsx(nM,{onClick:A,"data-testid":`${d}-error-delete-button`,"aria-label":`delete-${u}`,children:e.jsx(m.CrossIcon,{"aria-hidden":!0})}):O?e.jsx(op,{progress:p,"data-testid":`${d}-progress-bar`}):e.jsxs(e.Fragment,{children:[n&&e.jsx(rM,{"data-testid":`${d}-edit-button`,"data-no-dnd":"true",type:"button",styleType:"light",sizeType:"small","aria-label":`edit ${u}`,disabled:P(),onClick:B,onKeyDown:R,children:e.jsx(F.PencilIcon,{"aria-hidden":!0})},"edit"),e.jsx(rM,{"data-testid":`${d}-delete-button`,"data-no-dnd":"true",type:"button",styleType:"light",sizeType:"small","aria-label":`delete ${u}`,disabled:P(),onClick:A,onKeyDown:R,children:e.jsx(I.BinIcon,{"aria-hidden":!0})},"delete")]}),e.jsx(tM,{$editable:n,$error:!!g,$loading:O,children:t})})()]})]}))})),oM=K.default.ul`
    list-style-type: none;
    margin-bottom: ${e=>e.$readOnly?"0":Zs["spacing-32"]};
`,aM=K.default.li`
    border-top: ${Gs["width-010"]} ${Gs.solid} ${Ks.border};
    border-bottom: ${Gs["width-010"]} ${Gs.solid} ${Ks.border};

    :not(:last-child) {
        margin-bottom: ${Zs["spacing-32"]};
    }

    :not(:first-child) {
        margin-top: ${Zs["spacing-32"]};
    }

    ul {
        list-style-type: none;
    }
`,sM=({fileItems:r,editableFileItems:n,fileDescriptionMaxLength:i,sortable:o,disabled:a,readOnly:s,onItemUpdate:l,onItemDelete:c,onSort:d})=>{const[u,f]=t.useState({}),{setActiveId:h}=t.useContext(wg),{width:p=0,ref:g}=qe(),m=t.useRef({}),b=function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return t.useMemo((()=>[...r].filter((e=>null!=e))),[...r])}(Fb(Ty,{activationConstraint:{distance:8}}),Fb(jv,{activationConstraint:{delay:150,tolerance:5}}),Fb(gv,{coordinateGetter:ky})),v=e=>{delete m.current[e]};t.useEffect((()=>{f(T(r))}),[r]);const y=e=>t=>{E(e.id,"display"),v(e.id);const r=Object.assign(Object.assign({},e),{description:t});l(r)},x=e=>t=>{m.current[e.id]=t},w=e=>()=>{e.description&&0!==e.description.length?E(e.id,"display"):c(e),v(e.id)},$=e=>()=>{E(e.id,"edit")},C=e=>()=>{c(e)},S=e=>{if(d&&r){const{active:t,over:n}=e;if(n&&t.id!==n.id){const e=r.findIndex((e=>e.id===t.id)),i=r.findIndex((e=>e.id===n.id)),o=ly(r,e,i);d(o)}}h(void 0)},j=e=>{const{active:t}=e;h(t.id)},k=e=>n&&rg.isSupportedImageType(e.type),D=e=>!e.errorMessage&&!s&&!("number"==typeof e.progress&&e.progress<1)&&k(e)&&!e.description,T=e=>{if(!e||0===e.length)return{};const t={};for(const r of e)r.errorMessage?t[r.id]="error":u[r.id]?t[r.id]=u[r.id]:t[r.id]=D(r)?"edit":"display";return t},E=(e,t)=>{f((r=>Object.assign(Object.assign({},r),{[e]:t})))},O=()=>r&&r.length>1&&o&&Object.values(u).every((e=>"display"===e)),I=()=>{const t=((e,t)=>{if(!e||0===e.length)return[];const r=[];for(const n of e)if("edit"===t[n.id]){const e=r[r.length-1];Array.isArray(e)?e.push(n):r.push([n])}else r.push(n);return r})(r,u);return 0===t.length?null:t.map(((t,r)=>Array.isArray(t)?((t,r)=>{const n=t.map((t=>{const r=Object.assign({},t);return void 0!==m.current[t.id]&&(r.description=m.current[t.id]),e.jsx(HF,{fileItem:r,wrapperWidth:p,fileDescriptionMaxLength:i,onSave:y(t),onCancel:w(t),onBlur:x(t)},t.id)}));return e.jsx(aM,{children:e.jsx("ul",{children:n})},`editable-${r}`)})(t,r):e.jsx(iM,{fileItem:t,editable:k(t),wrapperWidth:p,sortable:O(),disabled:a,readOnly:s,onDelete:C(t),onEditClick:$(t)},t.id)))};return r&&0!==r.length?a||s||!O()?e.jsx(oM,{$readOnly:s,ref:g,children:I()}):e.jsx(ty,{sensors:b,onDragEnd:S,onDragStart:j,children:e.jsx(my,{items:r,strategy:hy,children:e.jsx(oM,{$readOnly:s,ref:g,children:I()})})}):null},lM=K.default.div`
    display: flex;
    flex-direction: column;
    margin-bottom: ${Zs["spacing-32"]};
    gap: ${Zs["spacing-8"]};
`,cM=K.default(exports.Typography.BodyBL)``,dM=K.default.div`
    color: ${Ks.text};
    ${Rl({textSize:"body-baseline"})}
`,uM=K.default(exports.Typography.BodyMD)`
    color: ${Ks["text-subtler"]};
`,fM=K.default.div`
    color: ${Ks.text};
    ${Rl({textSize:"body-md"})}
`,hM=K.default(Yl)`
    margin-bottom: ${Zs["spacing-32"]};
`,pM=K.default.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    ${el.MaxWidth.sm} {
        align-items: flex-start;
    }
`,gM=K.default(Il.Small)`
    width: 10rem;

    ${el.MaxWidth.sm} {
        width: 100%;
    }
`,mM=K.default.label`
    ${qs["body-md-semibold"]}
    color: ${Ks["text-subtler"]};
    margin-top: ${Zs["spacing-8"]};
    width: 10rem;
    text-align: center;
    ${el.MaxWidth.sm} {
        display: none;
        visibility: hidden;
    }
`,bM=K.default(Yl)`
    margin-bottom: ${Zs["spacing-32"]};
`,vM=Y.default.createContext({mode:"default",rootNode:{current:null}});var yM=Oi((function(e){return null==e}));const xM=K.default.div`
    background-color: ${e=>e.$collapsible?Ks["bg-strong"]:Ks.bg};
    ${el.MaxWidth.lg} {
        background-color: ${Ks["bg-strong"]};
    }
`,wM=K.default.div`
    display: ${e=>e.$showDivider?"block":"none"};
    height: 1px;
    background-color: ${Ks.border};

    ${el.MaxWidth.lg} {
        display: ${e=>e.$showMobileDivider?"block":"none"};
        margin: 0 ${Zs["spacing-16"]};
    }
`,$M=K.default.div`
    display: flex;
    align-items: center;

    background-color: ${Ks.bg};

    ${el.MaxWidth.lg} {
        background-color: transparent;
    }
`,CM=K.default(nl)`
    margin: 0 0 0 auto;

    color: ${Ks.icon};
    &:hover {
        color: ${Ks["icon-hover"]};
    }
`,SM=K.default(f.ChevronDownIcon)`
    height: ${qs.Spec["body-size-baseline"]};
    width: ${qs.Spec["body-size-baseline"]};

    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${Xs["duration-350"]} ${Xs["ease-standard"]};
`,jM=K.default.p`
    ${qs["heading-xs-semibold"]}
    color: ${Ks.text};

    margin: ${Zs["spacing-24"]} 0 ${Zs["spacing-24"]}
        ${Zs["spacing-20"]};

    ${el.MaxWidth.lg} {
        ${qs["body-md-semibold"]}
        color: ${Ks["text-subtle"]};

        margin: ${Zs["spacing-24"]} ${Zs["spacing-20"]} 0
            ${Zs["spacing-20"]};
    }
`,kM=K.default(Ti.div)`
    overflow: hidden;
`,DM=K.default.div`
    padding: ${Zs["spacing-24"]} ${Zs["spacing-20"]};
`,TM=K.default(Ti.div)`
    ${e=>e.$minimisable&&"overflow: hidden;"}
    ${e=>e.$height&&`height: ${e.$height}px;`}
`,EM=K.default(Il.Small)`
    height: fit-content;
    padding: 0;
    margin: ${Zs["spacing-16"]} 0 0 0;
`,OM=r=>{var n,{collapsible:i=!0,initialExpanded:o=!1,expanded:a,onExpandChange:s,minimisable:l=!1,minimisedHeight:c,showDivider:d=!0,showMobileDivider:u=!0,title:f,addon:h,children:p}=r,g=X(r,["collapsible","initialExpanded","expanded","onExpandChange","minimisable","minimisedHeight","showDivider","showMobileDivider","title","addon","children"]);const{mode:m,rootNode:b}=t.useContext(vM),v="mobile"===m,[y,x]=t.useState(T()),[w,$]=t.useState(l),C=!v&&i,S=qe(),j=qe(),k=di({height:y?S.height:0}),D=w?null!=c?c:Math.min(.5*(null!==(n=j.height)&&void 0!==n?n:0),216):j.height;t.useEffect((()=>{x(T())}),[i,a]);function T(){return!!v||(yM(a)?!i||o:a)}return e.jsxs(xM,{$collapsible:C,children:[e.jsx(wM,{$showDivider:d,$showMobileDivider:u}),(f||C)&&e.jsxs($M,{children:[f&&e.jsxs(jM,{children:[f," ",h&&("popover"===(null==h?void 0:h.type)?e.jsx(Hy,{addon:h,rootNode:v?b:void 0}):null)]}),C&&e.jsx(CM,{focusHighlight:!1,focusOutline:"browser",onClick:()=>{const e=!y;yM(a)&&x(e),s&&s(e)},"aria-label":y?"Collapse":"Expand",children:e.jsx(SM,{$expanded:y})})]}),e.jsx(kM,{"data-testid":"expandable-container","data-expanded":y,style:k,children:e.jsx("div",{ref:S.ref,children:e.jsxs(DM,Object.assign({},g,{children:[e.jsx(TM,{"data-testid":"minimisable-container",$height:D,$minimisable:l,children:e.jsx("div",{ref:j.ref,children:e.jsx("div",{"data-id":"content-container",children:"function"==typeof p?p(m,{minimised:w}):p})})}),l&&e.jsxs(EM,{"data-id":"minimise-button",styleType:"link",type:"button",onClick:()=>{$(!w)},children:["View ",w?"more":"less"]})]}))})})]})};OM.displayName="Filter.Item";const IM=K.default(OM)`
    padding: 0 0 ${Zs["spacing-16"]};

    [data-id="content-container"] {
        position: relative; // to get the item position relative to this parent
        padding: ${Zs["spacing-8"]} ${Zs["spacing-8"]} 0;

        ${el.MaxWidth.lg} {
            padding: ${Zs["spacing-16"]} ${Zs["spacing-20"]}
                ${Zs["spacing-8"]};
        }
    }

    [data-id="minimise-button"] {
        margin: ${Zs["spacing-8"]} ${Zs["spacing-20"]} 0;
    }
`,FM=K.default.div`
    display: flex;
    flex-direction: column;

    ${el.MaxWidth.lg} {
        flex-direction: row;
        flex-wrap: wrap;
        gap: ${Zs["spacing-16"]};
    }
`,MM=K.default.label`
    display: flex;
    align-items: flex-start;
    ${e=>!e.$visible&&"display: none;"}

    position: relative;
    width: 100%;
    min-height: 1.5rem;
    padding: ${Zs["spacing-8"]} ${Zs["spacing-12"]};

    cursor: pointer;
    ${qs["body-md-regular"]}
    color: ${Ks.text};
    ${e=>e.$selected&&i.css`
            color: ${Ks["text-selected"]};
        `}

    ${el.MaxWidth.lg} {
        padding: ${Zs["spacing-8"]};
    }
`,_M=K.default(fu)`
    flex-shrink: 0;
    margin-right: ${Zs["spacing-8"]};
`,AM=K.default(ZI)`
    ${e=>!e.$visible&&"visibility: hidden;"}
`,BM=K.default(Il.Small)`
    height: fit-content;
    padding: 0;
    margin: ${Zs["spacing-16"]} 0 ${Zs["spacing-8"]}
        ${Zs["spacing-12"]};

    ${el.MaxWidth.lg} {
        margin: 0 0 ${Zs["spacing-16"]} 0;
    }
`,RM=r=>{var{selectedOptions:n,options:i,onSelect:o,labelExtractor:a,valueExtractor:s,useToggleContentWidth:l}=r,c=X(r,["selectedOptions","options","onSelect","labelExtractor","valueExtractor","useToggleContentWidth"]);const{mode:d}=t.useContext(vM),[u,f]=t.useState(n||[]),[h,p]=t.useState(),[g,m]=t.useState(i.length),b=t.useRef(null),v=t.useRef(null),y=e=>()=>{const t=[...u],r=u.findIndex((t=>$(t)===$(e)));r>=0?t.splice(r,1):t.push(e),f(t),null==o||o(t)},x=()=>{const e=u.length?[]:i;f(e),null==o||o(e)},w=e=>{var t;return a?a(e):null!==(t=e.label)&&void 0!==t?t:null==e?void 0:e.toString()},$=e=>{var t;return s?s(e):null!==(t=e.value)&&void 0!==t?t:null==e?void 0:e.toString()},C=t.useCallback((()=>{if(!b.current)return void p(void 0);const e=Array.from(b.current.children);let t=0,r=0,n=-1;for(let i=0;i<e.length;i++){const o=e[i].offsetTop;if(o>n&&(r++,n=o,r>2))break;t=i}m(t),p(r>2?n-8:void 0)}),[]);t.useEffect((()=>{n!==u&&f(n||[])}),[n]),t.useEffect((()=>{"default"===d?(()=>{const e=v.current?v.current.offsetTop+v.current.clientHeight:void 0;p(e)})():C()}),[i]),qe({handleWidth:"mobile"===d,handleHeight:!1,skipOnMount:!0,refreshMode:"throttle",targetRef:b,onResize:C});return e.jsx(IM,Object.assign({minimisable:i.length>5,minimisedHeight:h},c,{children:(t,{minimised:r})=>e.jsxs(e.Fragment,{children:[i.length<3?null:e.jsx(BM,{styleType:"link",type:"button",onClick:x,children:u.length?"Clear all":"Select all"}),e.jsx(FM,{role:"group","aria-label":c.title,ref:b,children:i.map(((n,i)=>"default"===t?((t,r,n)=>{const i=w(t),o=$(t),a=!!u.find((e=>$(e)===o));return e.jsxs(MM,{$visible:!n||r<5,$selected:a,ref:4===r?v:void 0,children:[e.jsx(_M,{displaySize:"small",checked:a,onChange:y(t)}),i]},o)})(n,i,r):((t,r,n)=>{const i=w(t),o=$(t),a=!!u.find((e=>$(e)===o));return e.jsx(AM,{type:"checkbox",checked:a,$visible:!n||!!h&&r<=g,onChange:y(t),useContentWidth:l,children:i},o)})(n,i,r)))})]})}))};RM.displayName="Filter.Checkbox";const zM=K.default.div`
    background-color: ${Ks.bg};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`,PM=K.default.div`
    background-color: ${Ks.bg};
    border: ${Gs["width-010"]} ${Gs.solid} ${Ks.border};
    border-radius: ${Qs.md};
    overflow: hidden;
    width: 100%;
`,LM=K.default.div`
    background-color: ${Ks["bg-strong"]};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`,NM=K.default.div`
    background-color: ${Ks.bg};
    height: 100%;
    width: 100%;
`,HM=K.default.div`
    flex: 1;
    width: 100%;
    overflow-y: auto;
`,WM=K.default.div`
    display: flex;
    align-items: center;

    background-color: ${Ks.bg};

    ${el.MaxWidth.lg} {
        border-bottom: ${Gs["width-010"]} ${Gs.solid}
            ${Ks.border};
    }
`,VM=K.default(exports.Typography.HeadingXS).attrs({as:"p"})`
    flex: 1;
    margin: ${Zs["spacing-24"]} 0 ${Zs["spacing-24"]}
        ${Zs["spacing-20"]};

    ${el.MaxWidth.lg} {
        text-align: center;
        margin: ${Zs["spacing-24"]} 0;
    }
`,YM=K.default(nl)`
    padding: ${Zs["spacing-24"]} ${Zs["spacing-20"]};
    margin-right: auto;
    color: ${Ks.icon};

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }

    &:hover {
        color: ${Ks["icon-hover"]};
    }
`,UM=K.default(Il.Small)`
    background-color: transparent;
    padding-right: ${Zs["spacing-20"]};
    padding-left: ${Zs["spacing-20"]};
    height: 100%;

    ${el.MaxWidth.lg} {
        padding: ${Zs["spacing-24"]} ${Zs["spacing-20"]};
    }
`,KM=K.default(od.Default)`
    width: 100%;
`,qM=K.default.div`
    padding: ${Zs["spacing-24"]} ${Zs["spacing-20"]};
    background-color: ${Ks.bg};
    border-top: ${Gs["width-010"]} ${Gs.solid} ${Ks.border};
`,XM=K.default(Il.Default)`
    width: 100%;
`,GM=({onDismiss:t,onDone:r,children:n})=>e.jsxs(zM,{children:[e.jsx(YM,{onClick:t,focusOutline:"browser",focusHighlight:!1,"aria-label":"Dismiss",children:e.jsx(p.ChevronLeftIcon,{})}),e.jsx(HM,{children:n}),e.jsx(qM,{children:e.jsx(XM,{onClick:r,type:"button",children:"Done"})})]});GM.displayName="Filter.Page";const ZM=r=>{var{toggleFilterButtonLabel:n="Filters",toggleFilterButtonStyle:o="light",headerTitle:a="Filters",clearButtonDisabled:s=!1,onClear:l,onDismiss:c,onDone:d,children:f}=r,h=X(r,["toggleFilterButtonLabel","toggleFilterButtonStyle","headerTitle","clearButtonDisabled","onClear","onDismiss","onDone","children"]);const[p,g]=t.useState(!1),m=t.useRef(null),b=t.useRef(null),v=i.useTheme(),y=Js["lg-max"]({theme:v}),x=oc.useMediaQuery({maxWidth:y});t.useEffect((()=>{x||$()}),[x]);const w=()=>{g(!0)},$=()=>{g(!1),c&&c()},C=()=>{g(!1),d&&d()},S=()=>{l&&l()},j=e=>"function"==typeof f?f(e):f,k=t=>e.jsxs(WM,{children:["mobile"===t&&e.jsx(YM,{onClick:$,focusOutline:"browser",focusHighlight:!1,"aria-label":"Dismiss",children:e.jsx(u.CrossIcon,{})}),e.jsx(VM,{weight:"semibold",children:a}),e.jsx(UM,{styleType:"link",type:"button",onClick:S,disabled:s,children:"Clear"})]});return e.jsx("div",Object.assign({},h,{children:x?e.jsx(vM.Provider,{value:{mode:"mobile",rootNode:m},children:e.jsxs(e.Fragment,{children:[e.jsx(KM,{"data-testid":"filter-show-button",styleType:o,onClick:w,type:"button",icon:e.jsx(u.FilterIcon,{}),children:n}),e.jsx(Zh,{show:p,disableTransition:!0,children:e.jsx(NM,{"data-id":"filter-mobile","data-testid":"filter-mobile",children:e.jsxs(LM,{ref:m,children:[k("mobile"),e.jsx(HM,{children:j("mobile")}),e.jsx(qM,{children:e.jsx(XM,{onClick:C,type:"button",children:"Done"})})]})})})]})}):e.jsx(vM.Provider,{value:{mode:"default",rootNode:b},children:e.jsxs(PM,{"data-id":"filter-desktop","data-testid":"filter-desktop",ref:b,children:[k("default"),j("default")]})})}))};ZM.displayName="Filter";const QM=Object.assign(ZM,{Item:OM,Page:GM,Checkbox:RM}),JM=K.default.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    ${el.MaxWidth.lg} {
        justify-content: flex-start;
        padding: 0;
    }
`,e_=K.default(exports.Typography.BodyMD)`
    margin-bottom: ${Zs["spacing-16"]};
`,t_=K.default.div`
    display: flex;
    align-items: flex-start;
`,r_=K.default.a`
    &:not(:last-child) {
        margin-right: ${Zs["spacing-32"]};
    }

    img {
        width: auto;
        height: 3rem;
        object-fit: contain;
    }

    ${el.MaxWidth.sm} {
        &:not(:last-child) {
            margin-right: ${Zs["spacing-16"]};
        }

        img {
            width: 100%;
            height: auto;
            object-fit: contain;
        }
    }
`,n_=()=>e.jsxs(JM,{"data-testid":"download-app-section",children:[e.jsx(e_,{weight:"semibold",children:"Download the app"}),e.jsxs(t_,{children:[e.jsx(r_,{href:"https://apps.apple.com/sg/app/moments-of-life/id1383218758",target:"_blank",rel:"noopener noreferrer",id:"footer-download-app-apple",children:e.jsx("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/apple-app-store.png",alt:"apple-app-store"})}),e.jsx(r_,{href:"https://play.google.com/store/apps/details?id=sg.gov.app.mol&hl=en_SG",target:"_blank",rel:"noopener noreferrer",id:"footer-download-app-android",children:e.jsx("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/google-play-store.png",alt:"google-play-store"})})]})]}),i_={privacy:{href:"https://www.life.gov.sg/privacy-statement",target:"_blank",rel:"noopener"},termsOfUse:{href:"https://www.life.gov.sg/terms-of-use",target:"_blank",rel:"noopener"},reportVulnerability:{href:"https://tech.gov.sg/report_vulnerability",target:"_blank",rel:"noopener",external:!0}},o_={privacy:{href:"https://assets.life.gov.sg/bookingsg/BSG_Privacy_Policy.pdf",target:"_blank",rel:"noopener"},termsOfUse:{href:"https://assets.life.gov.sg/bookingsg/BSG_Terms_of_Use.pdf",target:"_blank",rel:"noopener"},reportVulnerability:{href:"https://tech.gov.sg/report_vulnerability",target:"_blank",rel:"noopener",external:!0}},a_={privacy:{href:"https://mylegacy.life.gov.sg/privacy-statement",target:"_blank",rel:"noopener"},termsOfUse:{href:"https://mylegacy.life.gov.sg/terms-of-use",target:"_blank",rel:"noopener"},reportVulnerability:{href:"https://tech.gov.sg/report_vulnerability",target:"_blank",rel:"noopener",external:!0}};var s_;!function(e){e.getCopyrightInfo=(e=new Date,r)=>{const n=t(r);return`${`${(new Date).getFullYear()} ${n}`} Last Updated ${xc(e).format("D MMMM YYYY")}`};const t=e=>{switch(e){case"bookingsg":return"BookingSG, Government of Singapore.";case"mylegacy":return"MyLegacy@LifeSG, Government of Singapore.";case"ccube":return"Citizen Collective Common, Government of Singapore.";default:return"LifeSG, Government of Singapore."}};e.getFooterLogo=e=>{switch(e){case"bookingsg":return"https://home.booking.gov.sg/images/bookingsg/footer.svg";case"mylegacy":return"https://mylegacy.life.gov.sg/images/site-logo.png";case"ccube":return"https://assets.life.gov.sg/ccube/logo-ccube.svg";default:return"https://assets.life.gov.sg/react-design-system/img/logo/lifesg-primary-logo.svg"}},e.getDisclaimerLinks=(e,t)=>{const r=(e=>{switch(e){case"bookingsg":return o_;case"mylegacy":return a_;default:return i_}})(e);return{privacy:Object.assign(Object.assign(Object.assign({},r.privacy),t&&t.privacy?t.privacy:{}),{children:"Privacy Statement"}),termsOfUse:Object.assign(Object.assign(Object.assign({},r.termsOfUse),t&&t.termsOfUse?t.termsOfUse:{}),{children:"Terms of Use"}),reportVulnerability:Object.assign(Object.assign(Object.assign({},r.reportVulnerability),t&&t.reportVulnerability?t.reportVulnerability:{}),{children:"Report Vulnerability"})}}}(s_||(s_={}));const l_=K.default.div`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
    height: auto;

    ${e=>e.$stretch?i.css`
                padding: 0 ${Js["xxl-margin"]}px;
            `:i.css`
                padding: 0 ${Js["xxl-margin"]}px;
                max-width: 1440px;

                ${el.MaxWidth.xl} {
                    padding: 0 ${Js["xl-margin"]}px;
                }

                ${el.MaxWidth.lg} {
                    padding: 0 ${Js["lg-margin"]}px;
                }

                ${el.MaxWidth.md} {
                    padding: 0 ${Js["md-margin"]}px;
                }

                ${el.MaxWidth.sm} {
                    padding: 0 ${Js["sm-margin"]}px;
                }

                ${el.MaxWidth.xs} {
                    padding: 0 ${Js["xs-margin"]}px;
                }

                ${el.MaxWidth.xxs} {
                    padding: 0 ${Js["xxs-margin"]}px;
                }
            `}

    ${e=>{switch(e.$type){case"grid":return i.css`
                    column-gap: ${Js["xxl-gutter"]}px;
                    display: grid;
                    grid-template-columns: repeat(
                        ${Js["xxl-column"]},
                        minmax(0, 1fr)
                    );

                    ${el.MaxWidth.xl} {
                        column-gap: ${Js["xl-gutter"]}px;
                        grid-template-columns: repeat(
                            ${Js["xl-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${el.MaxWidth.lg} {
                        column-gap: ${Js["lg-gutter"]}px;
                        grid-template-columns: repeat(
                            ${Js["lg-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${el.MaxWidth.md} {
                        column-gap: ${Js["md-gutter"]}px;
                        grid-template-columns: repeat(
                            ${Js["md-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${el.MaxWidth.sm} {
                        column-gap: ${Js["sm-gutter"]}px;
                        grid-template-columns: repeat(
                            ${Js["sm-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${el.MaxWidth.xs} {
                        column-gap: ${Js["xs-gutter"]}px;
                        grid-template-columns: repeat(
                            ${Js["xs-column"]},
                            minmax(0, 1fr)
                        );
                    }

                    ${el.MaxWidth.xxs} {
                        column-gap: ${Js["xxs-gutter"]}px;
                        grid-template-columns: repeat(
                            ${Js["xxs-column"]},
                            minmax(0, 1fr)
                        );
                    }
                `;case"flex-column":return i.css`
                    display: flex;
                    flex-direction: column;
                `;default:return i.css`
                    display: flex;
                `}}}
`,c_=Y.default.forwardRef(((t,r)=>{const{children:n,"data-testid":i="container",type:o="flex",stretch:a=!1}=t,s=X(t,["children","data-testid","type","stretch"]);return e.jsx(l_,Object.assign({ref:r,"data-testid":i,$type:o,$stretch:a},s,{children:n}))})),d_=Y.default.forwardRef(((t,r)=>{const{children:n,"data-testid":i="section",stretch:o=!1}=t,a=X(t,["children","data-testid","stretch"]);return e.jsx(u_,Object.assign({ref:r,"data-testid":i,$stretch:o},a,{children:n}))})),u_=K.default.section`
    display: block;
    position: relative;
`,f_=Y.default.forwardRef(((t,r)=>{const{children:n,"data-testid":i="content",className:o,type:a="flex",stretch:s=!1}=t,l=X(t,["children","data-testid","className","type","stretch"]);return e.jsx(d_,Object.assign({ref:r,"data-testid":i,className:o,stretch:s},l,{children:e.jsx(c_,{"data-testid":`${i}-container`,type:a,"data-id":"container",stretch:s,children:n})}))})),h_={Section:d_,Container:c_,Content:f_,ColDiv:Rh},p_=K.default.footer`
    background: ${Ks["bg-strong"]};
`,g_=K.default(exports.Typography.LinkSM)`
    color: ${Ks.text};
`,m_=K.default(Kh)`
    width: 100%;
`,b_=K.default(h_.Content)`
    padding: ${Zs["spacing-64"]} 0;

    ${el.MaxWidth.lg} {
        padding: ${Zs["spacing-32"]} 0;
    }
`,v_=K.default.div`
    grid-column: 1 / span 2;

    img {
        max-height: 4rem;
        max-width: 100%;
        object-fit: contain;
    }

    ${el.MaxWidth.lg} {
        grid-column: 1 / span 12;
        margin-bottom: ${Zs["spacing-32"]};
    }

    ${el.MaxWidth.md} {
        grid-column: 1 / span 8;
        margin-bottom: ${Zs["spacing-32"]};
    }
`,y_=K.default.ul`
    // first col
    grid-column: 3 / span 4;
    list-style-type: none;

    :nth-of-type(2) {
        // 2nd col
        grid-column: 7 / span 4;
    }

    li {
        :not(:last-child) {
            margin-bottom: ${Zs["spacing-8"]};
        }

        a {
            display: inline-block;
        }
    }

    ${el.MaxWidth.lg} {
        // first col
        grid-column: 1 / span 6;

        :nth-of-type(2) {
            // 2nd col
            grid-column: 7 / span 6;
        }
    }

    ${el.MaxWidth.md} {
        // first col
        grid-column: 1 / span 4;

        :nth-of-type(2) {
            // 2nd col
            grid-column: 5 / span 4;
        }
    }
`,x_=K.default.div`
    grid-column: 13 / span 6;

    ${el.MaxWidth.lg} {
        grid-column: 1 / span 12;
        margin-top: ${Zs["spacing-32"]};
    }

    ${el.MaxWidth.md} {
        grid-column: 1 / span 8;
    }
`,w_=K.default(h_.Content)`
    padding: ${Zs["spacing-20"]} 0;

    ${el.MaxWidth.lg} {
        border-top: none;
        flex-direction: column;
        padding: ${Zs["spacing-16"]} 0;
    }
`,$_=K.default.div`
    grid-column: 1 / span 6;
    display: flex;

    &:not(:last-child) {
        margin-right: ${Zs["spacing-16"]};
    }

    ${el.MaxWidth.lg} {
        grid-column: 1 / span 12;
        flex-direction: column;
        &:not(:last-child) {
            margin-right: 0;
        }
    }

    ${el.MaxWidth.md} {
        grid-column: 1 / span 8;
    }
`,C_=K.default($_)`
    grid-column: 7 / span 6;
    justify-content: flex-end;

    ${el.MaxWidth.lg} {
        margin-top: ${Zs["spacing-16"]};
        justify-content: flex-start;
        grid-column: 1 / span 12;
    }

    ${el.MaxWidth.md} {
        grid-column: 1 / span 8;
    }
`,S_=K.default(exports.Typography.LinkXS)`
    color: ${Ks.text};
    &:not(:last-child) {
        margin-right: ${Zs["spacing-16"]};
    }

    svg {
        color: ${Ks.icon};
    }

    &:hover {
        color: ${Ks["text-subtler"]};
        svg {
            color: ${Ks["icon-subtle"]};
        }
    }

    ${el.MaxWidth.lg} {
        margin-bottom: ${Zs["spacing-12"]};
        &:not(:last-child) {
            margin-right: 0;
        }
    }

    ${el.MaxWidth.lg} {
        margin-bottom: ${Zs["spacing-8"]};
    }
`;var j_=function(e,t){return Number(e.toFixed(t))},k_=function(e,t,r){r&&"function"==typeof r&&r(e,t)},D_={easeOut:function(e){return-Math.cos(e*Math.PI)/2+.5},linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:(4-2*e)*e-1},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}},T_=function(e){"number"==typeof e&&cancelAnimationFrame(e)},E_=function(e){e.mounted&&(T_(e.animation),e.animate=!1,e.animation=null,e.velocity=null)};function O_(e,t,r,n){if(e.mounted){var i=(new Date).getTime();E_(e),e.animation=function(){if(!e.mounted)return T_(e.animation);var o=(new Date).getTime()-i,a=o/r,s=(0,D_[t])(a);o>=r?(n(1),e.animation=null):e.animation&&(n(s),requestAnimationFrame(e.animation))},requestAnimationFrame(e.animation)}}function I_(e,t,r,n){var i=function(e){var t=e.scale,r=e.positionX,n=e.positionY;return!(Number.isNaN(t)||Number.isNaN(r)||Number.isNaN(n))}(t);if(e.mounted&&i){var o=e.setTransformState,a=e.transformState,s=a.scale,l=a.positionX,c=a.positionY,d=t.scale-s,u=t.positionX-l,f=t.positionY-c;0===r?o(t.scale,t.positionX,t.positionY):O_(e,n,r,(function(e){o(s+d*e,l+u*e,c+f*e)}))}}var F_=function(e,t){var r=e.wrapperComponent,n=e.contentComponent,i=e.setup.centerZoomedOut;if(!r||!n)throw new Error("Components are not mounted");var o=function(e,t,r){var n=e.offsetWidth,i=e.offsetHeight,o=t.offsetWidth*r,a=t.offsetHeight*r;return{wrapperWidth:n,wrapperHeight:i,newContentWidth:o,newDiffWidth:n-o,newContentHeight:a,newDiffHeight:i-a}}(r,n,t),a=o.wrapperWidth,s=o.wrapperHeight,l=function(e,t,r,n,i,o,a){var s=e>t?r*(a?1:.5):0,l=n>i?o*(a?1:.5):0;return{minPositionX:e-t-s,maxPositionX:s,minPositionY:n-i-l,maxPositionY:l}}(a,o.newContentWidth,o.newDiffWidth,s,o.newContentHeight,o.newDiffHeight,Boolean(i));return l},M_=function(e,t,r,n){return j_(n?e<t?t:e>r?r:e:e,2)},__=function(e,t){var r=F_(e,t);return e.bounds=r,r};function A_(e,t,r,n,i,o,a){var s=r.minPositionX,l=r.minPositionY,c=r.maxPositionX,d=r.maxPositionY,u=0,f=0;return a&&(u=i,f=o),{x:M_(e,s-u,c+u,n),y:M_(t,l-f,d+f,n)}}function B_(e,t,r,n,i,o){var a=e.transformState,s=a.scale,l=a.positionX,c=a.positionY,d=n-s;return"number"!=typeof t||"number"!=typeof r?(console.error("Mouse X and Y position were not provided!"),{x:l,y:c}):A_(l-t*d,c-r*d,i,o,0,0,null)}function R_(e,t,r,n,i){var o=t-(i?n:0);return!Number.isNaN(r)&&e>=r?r:!Number.isNaN(t)&&e<=o?o:e}var z_=function(e,t){var r=e.setup.panning.excluded,n=e.isInitialized,i=e.wrapperComponent,o=t.target,a="shadowRoot"in o&&"composedPath"in t?t.composedPath().some((function(e){return e instanceof Element&&(null==i?void 0:i.contains(e))})):null==i?void 0:i.contains(o);return!!(n&&o&&a)&&!vA(o,r)},P_=function(e){var t=e.isInitialized,r=e.isPanning,n=e.setup.panning.disabled;return!(!t||!r||n)};function L_(e,t,r,n,i){var o=e.setup.limitToBounds,a=e.wrapperComponent,s=e.bounds,l=e.transformState,c=l.scale,d=l.positionX,u=l.positionY;if(null!==a&&null!==s&&(t!==d||r!==u)){var f=A_(t,r,s,o,n,i,a),h=f.x,p=f.y;e.setTransformState(c,h,p)}}var N_=function(e,t){var r=e.setup,n=e.transformState.scale,i=r.minScale,o=r.disablePadding;return t>0&&n>=i&&!o?t:0},H_=function(e){var t=e.mounted,r=e.setup,n=r.disabled,i=r.velocityAnimation,o=e.transformState.scale;return!(i.disabled&&!(o>1)&&n&&!t)},W_=function(e){var t=e.mounted,r=e.velocity,n=e.bounds,i=e.setup,o=i.disabled,a=i.velocityAnimation,s=e.transformState.scale;return!(a.disabled&&!(s>1)&&o&&!t)&&!(!r||!n)};function V_(e,t,r,n,i,o,a,s,l,c){if(i){var d;if(t>a&&r>a)return(d=a+(e-a)*c)>l?l:d<a?a:d;if(t<o&&r<o)return(d=o+(e-o)*c)<s?s:d>o?o:d}return n?t:M_(e,o,a,i)}function Y_(e,t){if(H_(e)){var r=e.lastMousePosition,n=e.velocityTime,i=e.setup,o=e.wrapperComponent,a=i.velocityAnimation.equalToMove,s=Date.now();if(r&&n&&o){var l=function(e,t){return t?Math.min(1,e.offsetWidth/window.innerWidth):1}(o,a),c=t.x-r.x,d=t.y-r.y,u=c/l,f=d/l,h=s-n,p=c*c+d*d,g=Math.sqrt(p)/h;e.velocity={velocityX:u,velocityY:f,total:g}}e.lastMousePosition=t,e.velocityTime=s}}function U_(e,t){var r=e.transformState.scale;E_(e),__(e,r),void 0!==window.TouchEvent&&t instanceof TouchEvent?function(e,t){var r=t.touches,n=e.transformState,i=n.positionX,o=n.positionY;if(e.isPanning=!0,1===r.length){var a=r[0].clientX,s=r[0].clientY;e.startCoords={x:a-i,y:s-o}}}(e,t):function(e,t){var r=e.transformState,n=r.positionX,i=r.positionY;e.isPanning=!0;var o=t.clientX,a=t.clientY;e.startCoords={x:o-n,y:a-i}}(e,t)}function K_(e){var t=e.transformState.scale,r=e.setup,n=r.minScale,i=r.alignmentAnimation,o=i.disabled,a=i.sizeX,s=i.sizeY,l=i.animationTime,c=i.animationType;if(!(o||t<n||!a&&!s)){var d=function(e){var t=e.transformState,r=t.positionX,n=t.positionY,i=t.scale,o=e.setup,a=o.disabled,s=o.limitToBounds,l=o.centerZoomedOut,c=e.wrapperComponent;if(!a&&c&&e.bounds){var d=e.bounds,u=d.maxPositionX,f=d.minPositionX,h=d.maxPositionY,p=d.minPositionY,g=r>u||r<f,m=n>h||n<p,b=B_(e,r>u?c.offsetWidth:e.setup.minPositionX||0,n>h?c.offsetHeight:e.setup.minPositionY||0,i,e.bounds,s||l),v=b.x,y=b.y;return{scale:i,positionX:g?v:r,positionY:m?y:n}}}(e);d&&I_(e,d,l,c)}}function q_(e,t,r){var n=e.startCoords,i=e.setup.alignmentAnimation,o=i.sizeX,a=i.sizeY;if(n){var s=function(e,t,r){var n=e.startCoords,i=e.transformState,o=e.setup.panning,a=o.lockAxisX,s=o.lockAxisY,l=i.positionX,c=i.positionY;if(!n)return{x:l,y:c};var d=t-n.x,u=r-n.y;return{x:a?l:d,y:s?c:u}}(e,t,r),l=s.x,c=s.y,d=N_(e,o),u=N_(e,a);Y_(e,{x:l,y:c}),L_(e,l,c,d,u)}}function X_(e){if(e.isPanning){var t=e.setup.panning.velocityDisabled,r=e.velocity,n=e.wrapperComponent,i=e.contentComponent;e.isPanning=!1,e.animate=!1,e.animation=null;var o=null==n?void 0:n.getBoundingClientRect(),a=null==i?void 0:i.getBoundingClientRect(),s=(null==o?void 0:o.width)||0,l=(null==o?void 0:o.height)||0,c=(null==a?void 0:a.width)||0,d=(null==a?void 0:a.height)||0,u=s<c||l<d;!t&&r&&(null==r?void 0:r.total)>.1&&u?function(e){var t=e.velocity,r=e.bounds,n=e.setup,i=e.wrapperComponent;if(W_(e)&&t&&r&&i){var o=t.velocityX,a=t.velocityY,s=t.total,l=r.maxPositionX,c=r.minPositionX,d=r.maxPositionY,u=r.minPositionY,f=n.limitToBounds,h=n.alignmentAnimation,p=n.zoomAnimation,g=n.panning,m=g.lockAxisY,b=g.lockAxisX,v=p.animationType,y=h.sizeX,x=h.sizeY,w=h.velocityAlignmentTime,$=function(e,t){var r=e.setup.velocityAnimation,n=r.equalToMove,i=r.animationTime,o=r.sensitivity;return n?i*t*o:i}(e,s),C=Math.max($,w),S=N_(e,y),j=N_(e,x),k=S*i.offsetWidth/100,D=j*i.offsetHeight/100,T=l+k,E=c-k,O=d+D,I=u-D,F=e.transformState,M=(new Date).getTime();O_(e,v,C,(function(t){var r=e.transformState,n=r.scale,i=r.positionX,s=r.positionY,p=((new Date).getTime()-M)/w,g=1-(0,D_[h.animationType])(Math.min(1,p)),v=1-t,y=i+o*v,x=s+a*v,$=V_(y,F.positionX,i,b,f,c,l,E,T,g),C=V_(x,F.positionY,s,m,f,u,d,I,O,g);i===y&&s===x||e.setTransformState(n,$,C)}))}}(e):K_(e)}}function G_(e,t,r,n){var i=e.setup,o=i.minScale,a=i.maxScale,s=i.limitToBounds,l=R_(j_(t,2),o,a,0,!1),c=B_(e,r,n,l,__(e,l),s);return{scale:l,positionX:c.x,positionY:c.y}}function Z_(e,t,r){var n=e.transformState.scale,i=e.wrapperComponent,o=e.setup,a=o.minScale,s=o.limitToBounds,l=o.zoomAnimation,c=l.disabled,d=l.animationTime,u=l.animationType,f=c||n>=a;if((n>=1||s)&&K_(e),!f&&i&&e.mounted){var h=G_(e,a,t||i.offsetWidth/2,r||i.offsetHeight/2);h&&I_(e,h,d,u)}}var Q_=function(){return Q_=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},Q_.apply(this,arguments)};function J_(e,t,r){if(r||2===arguments.length)for(var n,i=0,o=t.length;i<o;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return e.concat(n||Array.prototype.slice.call(t))}var eA=1,tA=0,rA=0,nA={disabled:!1,minPositionX:null,maxPositionX:null,minPositionY:null,maxPositionY:null,minScale:1,maxScale:8,limitToBounds:!0,centerZoomedOut:!1,centerOnInit:!1,disablePadding:!1,smooth:!0,wheel:{step:.2,disabled:!1,smoothStep:.001,wheelDisabled:!1,touchPadDisabled:!1,activationKeys:[],excluded:[]},panning:{disabled:!1,velocityDisabled:!1,lockAxisX:!1,lockAxisY:!1,allowLeftClickPan:!0,allowMiddleClickPan:!0,allowRightClickPan:!0,wheelPanning:!1,activationKeys:[],excluded:[]},pinch:{step:5,disabled:!1,excluded:[]},doubleClick:{disabled:!1,step:.7,mode:"zoomIn",animationType:"easeOut",animationTime:200,excluded:[]},zoomAnimation:{disabled:!1,size:.4,animationTime:200,animationType:"easeOut"},alignmentAnimation:{disabled:!1,sizeX:100,sizeY:100,animationTime:200,velocityAlignmentTime:400,animationType:"easeOut"},velocityAnimation:{disabled:!1,sensitivity:1,animationTime:400,animationType:"easeOut",equalToMove:!0}},iA=function(e){var t,r,n,i;return{previousScale:null!==(t=e.initialScale)&&void 0!==t?t:eA,scale:null!==(r=e.initialScale)&&void 0!==r?r:eA,positionX:null!==(n=e.initialPositionX)&&void 0!==n?n:tA,positionY:null!==(i=e.initialPositionY)&&void 0!==i?i:rA}},oA=function(e){var t=Q_({},nA);return Object.keys(e).forEach((function(r){var n=void 0!==e[r];if(void 0!==nA[r]&&n){var i=Object.prototype.toString.call(nA[r]),o="[object Object]"===i,a="[object Array]"===i;t[r]=o?Q_(Q_({},nA[r]),e[r]):a?J_(J_([],nA[r],!0),e[r],!0):e[r]}})),t},aA=function(e,t,r){var n=e.transformState.scale,i=e.wrapperComponent,o=e.setup,a=o.maxScale,s=o.minScale,l=o.zoomAnimation,c=o.smooth,d=l.size;if(!i)throw new Error("Wrapper is not mounted");var u=c?n*Math.exp(t*r):n+t*r;return R_(j_(u,3),s,a,d,!1)};function sA(e,t,r,n,i){var o=e.wrapperComponent,a=e.transformState,s=a.scale,l=a.positionX,c=a.positionY;if(!o)return console.error("No WrapperComponent found");var d=(o.offsetWidth/2-l)/s,u=(o.offsetHeight/2-c)/s,f=G_(e,aA(e,t,r),d,u);if(!f)return console.error("Error during zoom event. New transformation state was not calculated.");I_(e,f,n,i)}function lA(e,t,r,n){var i=e.setup,o=e.wrapperComponent,a=i.limitToBounds,s=iA(e.props),l=e.transformState,c=l.scale,d=l.positionX,u=l.positionY;if(o){var f=F_(e,s.scale),h=A_(s.positionX,s.positionY,f,a,0,0,o),p={scale:s.scale,positionX:h.x,positionY:h.y};c===s.scale&&d===s.positionX&&u===s.positionY||(null==n||n(),I_(e,p,t,r))}}var cA=function(e){return function(t,r,n){void 0===t&&(t=.5),void 0===r&&(r=300),void 0===n&&(n="easeOut"),sA(e,1,t,r,n)}},dA=function(e){return function(t,r,n){void 0===t&&(t=.5),void 0===r&&(r=300),void 0===n&&(n="easeOut"),sA(e,-1,t,r,n)}},uA=function(e){return function(t,r,n,i,o){void 0===i&&(i=300),void 0===o&&(o="easeOut");var a=e.transformState,s=a.positionX,l=a.positionY,c=a.scale,d=e.wrapperComponent,u=e.contentComponent;if(!e.setup.disabled&&d&&u){var f={positionX:Number.isNaN(t)?s:t,positionY:Number.isNaN(r)?l:r,scale:Number.isNaN(n)?c:n};I_(e,f,i,o)}}},fA=function(e){return function(t,r){void 0===t&&(t=200),void 0===r&&(r="easeOut"),lA(e,t,r)}},hA=function(e){return function(t,r,n){void 0===r&&(r=200),void 0===n&&(n="easeOut");var i=e.transformState,o=e.wrapperComponent,a=e.contentComponent;if(o&&a){var s=xA(t||i.scale,o,a);I_(e,s,r,n)}}},pA=function(e){return function(t,r,n,i){void 0===n&&(n=600),void 0===i&&(i="easeOut"),E_(e);var o=e.wrapperComponent,a="string"==typeof t?document.getElementById(t):t;if(o&&a&&o.contains(a)){var s=function(e,t,r){var n=e.wrapperComponent,i=e.contentComponent,o=e.transformState,a=e.setup,s=a.limitToBounds,l=a.minScale,c=a.maxScale;if(!n||!i)return o;var d,u,f,h,p,g,m,b,v=n.getBoundingClientRect(),y=t.getBoundingClientRect(),x=(d=n,u=i,f=o,h=t.getBoundingClientRect(),p=d.getBoundingClientRect(),g=u.getBoundingClientRect(),m=p.x*f.scale,b=p.y*f.scale,{x:(h.x-g.x+m)/f.scale,y:(h.y-g.y+b)/f.scale}),w=x.x,$=x.y,C=y.width/o.scale,S=y.height/o.scale,j=n.offsetWidth/C,k=n.offsetHeight/S,D=R_(r||Math.min(j,k),l,c,0,!1),T=(v.width-C*D)/2,E=(v.height-S*D)/2,O=A_((v.left-w)*D+T,(v.top-$)*D+E,F_(e,D),s,0,0,n);return{positionX:O.x,positionY:O.y,scale:D}}(e,a,r);I_(e,s,n,i)}}},gA=function(e){return{instance:e,zoomIn:cA(e),zoomOut:dA(e),setTransform:uA(e),resetTransform:fA(e),centerView:hA(e),zoomToElement:pA(e)}},mA=function(e){var t={};return Object.assign(t,function(e){return{instance:e,state:e.transformState}}(e)),Object.assign(t,gA(e)),t};function bA(){try{return{get passive(){return!0,!1}}}catch(e){return!1}}var vA=function(e,t){return t.some((function(t){return e.matches("".concat(t,", .").concat(t,", ").concat(t," *, .").concat(t," *"))}))},yA=function(e){e&&clearTimeout(e)},xA=function(e,t,r){var n=r.offsetWidth*e,i=r.offsetHeight*e;return{scale:e,positionX:(t.offsetWidth-n)/2,positionY:(t.offsetHeight-i)/2}};function wA(e,t,r){var n=t.getBoundingClientRect(),i=0,o=0;if("clientX"in e)i=(e.clientX-n.left)/r,o=(e.clientY-n.top)/r;else{var a=e.touches[0];i=(a.clientX-n.left)/r,o=(a.clientY-n.top)/r}return(Number.isNaN(i)||Number.isNaN(o))&&console.error("No mouse or touch offset found"),{x:i,y:o}}var $A=function(e){return Math.sqrt(Math.pow(e.touches[0].pageX-e.touches[1].pageX,2)+Math.pow(e.touches[0].pageY-e.touches[1].pageY,2))},CA=function(e,t){var r=e.props,n=r.onWheel,i=r.onZoom,o=e.contentComponent,a=e.setup,s=e.transformState.scale,l=a.limitToBounds,c=a.centerZoomedOut,d=a.zoomAnimation,u=a.wheel,f=a.disablePadding,h=a.smooth,p=d.size,g=d.disabled,m=u.step,b=u.smoothStep;if(!o)throw new Error("Component not mounted");t.preventDefault(),t.stopPropagation();var v=function(e,t){var r=function(e){return e?e.deltaY<0?1:-1:0}(e),n=function(e,t){return"number"==typeof e?e:t}(t,r);return n}(t,null),y=function(e,t,r,n,i){var o=e.transformState.scale,a=e.wrapperComponent,s=e.setup,l=s.maxScale,c=s.minScale,d=s.zoomAnimation,u=s.disablePadding,f=d.size,h=d.disabled;if(!a)throw new Error("Wrapper is not mounted");var p=o+t*r;if(i)return p;var g=!n&&!h;return R_(j_(p,3),c,l,f,g&&!u)}(e,v,h?b*Math.abs(t.deltaY):m,!t.ctrlKey);if(s!==y){var x=__(e,y),w=wA(t,o,s),$=l&&(g||0===p||c||f),C=B_(e,w.x,w.y,y,x,$),S=C.x,j=C.y;e.previousWheelEvent=t,e.setTransformState(y,S,j),k_(mA(e),t,n),k_(mA(e),t,i)}},SA=function(e,t){var r=e.props,n=r.onWheelStop,i=r.onZoomStop;yA(e.wheelAnimationTimer),e.wheelAnimationTimer=setTimeout((function(){e.mounted&&(Z_(e,t.x,t.y),e.wheelAnimationTimer=null)}),100);var o=function(e,t){var r=e.previousWheelEvent,n=e.transformState.scale,i=e.setup,o=i.maxScale,a=i.minScale;return!!r&&(n<o||n>a||Math.sign(r.deltaY)!==Math.sign(t.deltaY)||r.deltaY>0&&r.deltaY<t.deltaY||r.deltaY<0&&r.deltaY>t.deltaY||Math.sign(r.deltaY)!==Math.sign(t.deltaY))}(e,t);o&&(yA(e.wheelStopEventTimer),e.wheelStopEventTimer=setTimeout((function(){e.mounted&&(e.wheelStopEventTimer=null,k_(mA(e),t,n),k_(mA(e),t,i))}),160))},jA=function(e,t){var r=e.contentComponent,n=e.pinchStartDistance,i=e.transformState.scale,o=e.setup,a=o.limitToBounds,s=o.centerZoomedOut,l=o.zoomAnimation,c=l.disabled,d=l.size;if(null!==n&&r){var u=function(e,t,r){var n=r.getBoundingClientRect(),i=e.touches,o=j_(i[0].clientX-n.left,5),a=j_(i[0].clientY-n.top,5);return{x:(o+j_(i[1].clientX-n.left,5))/2/t,y:(a+j_(i[1].clientY-n.top,5))/2/t}}(t,i,r);if(Number.isFinite(u.x)&&Number.isFinite(u.y)){var f=$A(t),h=function(e,t){var r=e.pinchStartScale,n=e.pinchStartDistance,i=e.setup,o=i.maxScale,a=i.minScale,s=i.zoomAnimation,l=i.disablePadding,c=s.size,d=s.disabled;if(!r||null===n||!t)throw new Error("Pinch touches distance was not provided");return t<0?e.transformState.scale:R_(j_(t/n*r,2),a,o,c,!d&&!l)}(e,f);if(h!==i){var p=__(e,h),g=a&&(c||0===d||s),m=B_(e,u.x,u.y,h,p,g),b=m.x,v=m.y;e.pinchMidpoint=u,e.lastDistance=f,e.setTransformState(h,b,v)}}}},kA=function(e,t){var r=e.props.onZoomStop,n=e.setup.doubleClick.animationTime;yA(e.doubleClickStopEventTimer),e.doubleClickStopEventTimer=setTimeout((function(){e.doubleClickStopEventTimer=null,k_(mA(e),t,r)}),n)};function DA(e,t){var r=e.setup,n=e.doubleClickStopEventTimer,i=e.transformState,o=e.contentComponent,a=i.scale,s=e.props,l=s.onZoomStart,c=s.onZoom,d=r.doubleClick,u=d.disabled,f=d.mode,h=d.step,p=d.animationTime,g=d.animationType;if(!u&&!n){if("reset"===f)return function(e,t){var r=e.props,n=r.onZoomStart,i=r.onZoom,o=e.setup.doubleClick,a=o.animationTime,s=o.animationType;k_(mA(e),t,n),lA(e,a,s,(function(){return k_(mA(e),t,i)})),kA(e,t)}(e,t);if(!o)return console.error("No ContentComponent found");var m=function(e,t){return"toggle"===e?1===t?1:-1:"zoomOut"===e?-1:1}(f,e.transformState.scale),b=aA(e,m,h);if(a!==b){k_(mA(e),t,l);var v=wA(t,o,a),y=G_(e,b,v.x,v.y);if(!y)return console.error("Error during zoom event. New transformation state was not calculated.");k_(mA(e),t,c),I_(e,y,p,g),kA(e,t)}}}var TA=function(e){var t=this;this.mounted=!0,this.onChangeCallbacks=new Set,this.onInitCallbacks=new Set,this.wrapperComponent=null,this.contentComponent=null,this.isInitialized=!1,this.bounds=null,this.previousWheelEvent=null,this.wheelStopEventTimer=null,this.wheelAnimationTimer=null,this.isPanning=!1,this.isWheelPanning=!1,this.startCoords=null,this.lastTouch=null,this.distance=null,this.lastDistance=null,this.pinchStartDistance=null,this.pinchStartScale=null,this.pinchMidpoint=null,this.doubleClickStopEventTimer=null,this.velocity=null,this.velocityTime=null,this.lastMousePosition=null,this.animate=!1,this.animation=null,this.maxBounds=null,this.pressedKeys={},this.mount=function(){t.initializeWindowEvents()},this.unmount=function(){t.cleanupWindowEvents()},this.update=function(e){t.props=e,__(t,t.transformState.scale),t.setup=oA(e)},this.initializeWindowEvents=function(){var e,r,n=bA(),i=null===(e=t.wrapperComponent)||void 0===e?void 0:e.ownerDocument,o=null==i?void 0:i.defaultView;null===(r=t.wrapperComponent)||void 0===r||r.addEventListener("wheel",t.onWheelPanning,n),null==o||o.addEventListener("mousedown",t.onPanningStart,n),null==o||o.addEventListener("mousemove",t.onPanning,n),null==o||o.addEventListener("mouseup",t.onPanningStop,n),null==i||i.addEventListener("mouseleave",t.clearPanning,n),null==o||o.addEventListener("keyup",t.setKeyUnPressed,n),null==o||o.addEventListener("keydown",t.setKeyPressed,n)},this.cleanupWindowEvents=function(){var e,r,n=bA(),i=null===(e=t.wrapperComponent)||void 0===e?void 0:e.ownerDocument,o=null==i?void 0:i.defaultView;null==o||o.removeEventListener("mousedown",t.onPanningStart,n),null==o||o.removeEventListener("mousemove",t.onPanning,n),null==o||o.removeEventListener("mouseup",t.onPanningStop,n),null==i||i.removeEventListener("mouseleave",t.clearPanning,n),null==o||o.removeEventListener("keyup",t.setKeyUnPressed,n),null==o||o.removeEventListener("keydown",t.setKeyPressed,n),document.removeEventListener("mouseleave",t.clearPanning,n),E_(t),null===(r=t.observer)||void 0===r||r.disconnect()},this.handleInitializeWrapperEvents=function(e){var r=bA();e.addEventListener("wheel",t.onWheelZoom,r),e.addEventListener("dblclick",t.onDoubleClick,r),e.addEventListener("touchstart",t.onTouchPanningStart,r),e.addEventListener("touchmove",t.onTouchPanning,r),e.addEventListener("touchend",t.onTouchPanningStop,r)},this.handleInitialize=function(e){var r=t.setup.centerOnInit;t.applyTransformation(),t.onInitCallbacks.forEach((function(e){return e(mA(t))})),r&&(t.setCenter(),t.observer=new ResizeObserver((function(){var r,n=e.offsetWidth,i=e.offsetHeight;(n>0||i>0)&&(t.onInitCallbacks.forEach((function(e){return e(mA(t))})),t.setCenter(),null===(r=t.observer)||void 0===r||r.disconnect())})),setTimeout((function(){var e;null===(e=t.observer)||void 0===e||e.disconnect()}),5e3),t.observer.observe(e))},this.onWheelZoom=function(e){if(!t.setup.disabled){var r=function(e,t){var r=e.setup.wheel,n=r.disabled,i=r.wheelDisabled,o=r.touchPadDisabled,a=r.excluded,s=e.isInitialized,l=e.isPanning,c=t.target;return!(!s||l||n||!c||i&&!t.ctrlKey||o&&t.ctrlKey||vA(c,a))}(t,e);r&&t.isPressingKeys(t.setup.wheel.activationKeys)&&(function(e,t){var r=e.props,n=r.onWheelStart,i=r.onZoomStart;e.wheelStopEventTimer||(E_(e),k_(mA(e),t,n),k_(mA(e),t,i))}(t,e),CA(t,e),SA(t,e))}},this.onWheelPanning=function(e){var r=t.setup,n=r.disabled,i=r.wheel,o=r.panning;if(t.wrapperComponent&&t.contentComponent&&!n&&i.wheelDisabled&&!o.disabled&&o.wheelPanning&&!e.ctrlKey){e.preventDefault(),e.stopPropagation();var a=t.transformState,s=a.positionX,l=a.positionY,c=s-e.deltaX,d=l-e.deltaY,u=o.lockAxisX?s:c,f=o.lockAxisY?l:d,h=t.setup.alignmentAnimation,p=h.sizeX,g=h.sizeY,m=N_(t,p),b=N_(t,g);u===s&&f===l||L_(t,u,f,m,b)}},this.onPanningStart=function(e){var r=t.setup.disabled,n=t.props.onPanningStart;r||z_(t,e)&&t.isPressingKeys(t.setup.panning.activationKeys)&&(0!==e.button||t.setup.panning.allowLeftClickPan)&&(1!==e.button||t.setup.panning.allowMiddleClickPan)&&(2!==e.button||t.setup.panning.allowRightClickPan)&&(e.preventDefault(),e.stopPropagation(),E_(t),U_(t,e),k_(mA(t),e,n))},this.onPanning=function(e){var r=t.setup.disabled,n=t.props.onPanning;r||P_(t)&&t.isPressingKeys(t.setup.panning.activationKeys)&&(e.preventDefault(),e.stopPropagation(),q_(t,e.clientX,e.clientY),k_(mA(t),e,n))},this.onPanningStop=function(e){var r=t.props.onPanningStop;t.isPanning&&(X_(t),k_(mA(t),e,r))},this.onPinchStart=function(e){var r=t.setup.disabled,n=t.props,i=n.onPinchingStart,o=n.onZoomStart;if(!r){var a=function(e,t){var r=e.setup.pinch,n=r.disabled,i=r.excluded,o=e.isInitialized,a=t.target;return!(!o||n||!a||vA(a,i))}(t,e);a&&(function(e,t){var r=$A(t);e.pinchStartDistance=r,e.lastDistance=r,e.pinchStartScale=e.transformState.scale,e.isPanning=!1,E_(e)}(t,e),E_(t),k_(mA(t),e,i),k_(mA(t),e,o))}},this.onPinch=function(e){var r=t.setup.disabled,n=t.props,i=n.onPinching,o=n.onZoom;if(!r){var a=function(e){var t=e.setup.pinch.disabled,r=e.isInitialized,n=e.pinchStartDistance;return!(!r||t||!n)}(t);a&&(e.preventDefault(),e.stopPropagation(),jA(t,e),k_(mA(t),e,i),k_(mA(t),e,o))}},this.onPinchStop=function(e){var r,n,i=t.props,o=i.onPinchingStop,a=i.onZoomStop;t.pinchStartScale&&(n=(r=t).pinchMidpoint,r.velocity=null,r.lastDistance=null,r.pinchMidpoint=null,r.pinchStartScale=null,r.pinchStartDistance=null,Z_(r,null==n?void 0:n.x,null==n?void 0:n.y),k_(mA(t),e,o),k_(mA(t),e,a))},this.onTouchPanningStart=function(e){var r=t.setup.disabled,n=t.props.onPanningStart;if(!r&&z_(t,e))if(t.lastTouch&&+new Date-t.lastTouch<200&&1===e.touches.length)t.onDoubleClick(e);else{t.lastTouch=+new Date,E_(t);var i=e.touches,o=1===i.length,a=2===i.length;o&&(E_(t),U_(t,e),k_(mA(t),e,n)),a&&t.onPinchStart(e)}},this.onTouchPanning=function(e){var r=t.setup.disabled,n=t.props.onPanning;if(t.isPanning&&1===e.touches.length){if(r)return;if(!P_(t))return;e.preventDefault(),e.stopPropagation();var i=e.touches[0];q_(t,i.clientX,i.clientY),k_(mA(t),e,n)}else e.touches.length>1&&t.onPinch(e)},this.onTouchPanningStop=function(e){t.onPanningStop(e),t.onPinchStop(e)},this.onDoubleClick=function(e){if(!t.setup.disabled){var r=function(e,t){var r=e.isInitialized,n=e.setup,i=e.wrapperComponent,o=n.doubleClick,a=o.disabled,s=o.excluded,l=t.target,c=null==i?void 0:i.contains(l);return!(!(r&&l&&c)||a||vA(l,s))}(t,e);r&&DA(t,e)}},this.clearPanning=function(e){t.isPanning&&t.onPanningStop(e)},this.setKeyPressed=function(e){t.pressedKeys[e.key]=!0},this.setKeyUnPressed=function(e){t.pressedKeys[e.key]=!1},this.isPressingKeys=function(e){return!e.length||Boolean(e.find((function(e){return t.pressedKeys[e]})))},this.setTransformState=function(e,r,n){var i=t.props.onTransformed;if(Number.isNaN(e)||Number.isNaN(r)||Number.isNaN(n))console.error("Detected NaN set state values");else{e!==t.transformState.scale&&(t.transformState.previousScale=t.transformState.scale,t.transformState.scale=e),t.transformState.positionX=r,t.transformState.positionY=n,t.applyTransformation();var o=mA(t);t.onChangeCallbacks.forEach((function(e){return e(o)})),k_(o,{scale:e,positionX:r,positionY:n},i)}},this.setCenter=function(){if(t.wrapperComponent&&t.contentComponent){var e=xA(t.transformState.scale,t.wrapperComponent,t.contentComponent);t.setTransformState(e.scale,e.positionX,e.positionY)}},this.handleTransformStyles=function(e,r,n){return t.props.customTransform?t.props.customTransform(e,r,n):function(e,t,r){return"translate(".concat(e,"px, ").concat(t,"px) scale(").concat(r,")")}(e,r,n)},this.applyTransformation=function(){if(t.mounted&&t.contentComponent){var e=t.transformState,r=e.scale,n=e.positionX,i=e.positionY,o=t.handleTransformStyles(n,i,r);t.contentComponent.style.transform=o}},this.getContext=function(){return mA(t)},this.onChange=function(e){return t.onChangeCallbacks.has(e)||t.onChangeCallbacks.add(e),function(){t.onChangeCallbacks.delete(e)}},this.onInit=function(e){return t.onInitCallbacks.has(e)||t.onInitCallbacks.add(e),function(){t.onInitCallbacks.delete(e)}},this.init=function(e,r){t.cleanupWindowEvents(),t.wrapperComponent=e,t.contentComponent=r,__(t,t.transformState.scale),t.handleInitializeWrapperEvents(e),t.handleInitialize(r),t.initializeWindowEvents(),t.isInitialized=!0;var n=mA(t);k_(n,void 0,t.props.onInit)},this.props=e,this.setup=oA(this.props),this.transformState=iA(this.props)},EA=Y.default.createContext(null),OA=Y.default.forwardRef((function(e,r){var n=t.useRef(new TA(e)).current,i=function(e,t){return"function"==typeof e?e(t):e}(e.children,gA(n));return t.useImperativeHandle(r,(function(){return gA(n)}),[n]),t.useEffect((function(){n.update(e)}),[n,e]),Y.default.createElement(EA.Provider,{value:n},i)}));Y.default.forwardRef((function(e,r){var n,i=t.useRef(null),o=t.useContext(EA);return t.useEffect((function(){return o.onChange((function(e){if(i.current){i.current.style.transform=o.handleTransformStyles(0,0,1/e.instance.transformState.scale)}}))}),[o]),Y.default.createElement("div",Q_({},e,{ref:(n=[i,r],function(e){n.forEach((function(t){"function"==typeof t?t(e):null!=t&&(t.current=e)}))})}))}));var IA="transform-component-module_wrapper__SPB86",FA="transform-component-module_content__FBWxo";!function(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===r&&n.firstChild?n.insertBefore(i,n.firstChild):n.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}(".transform-component-module_wrapper__SPB86 {\n  position: relative;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  overflow: hidden;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Safari */\n  -khtml-user-select: none; /* Konqueror HTML */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none;\n  margin: 0;\n  padding: 0;\n}\n.transform-component-module_content__FBWxo {\n  display: flex;\n  flex-wrap: wrap;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin: 0;\n  padding: 0;\n  transform-origin: 0% 0%;\n}\n.transform-component-module_content__FBWxo img {\n  pointer-events: none;\n}\n");var MA=function(e){var r=e.children,n=e.wrapperClass,i=void 0===n?"":n,o=e.contentClass,a=void 0===o?"":o,s=e.wrapperStyle,l=e.contentStyle,c=e.wrapperProps,d=void 0===c?{}:c,u=e.contentProps,f=void 0===u?{}:u,h=t.useContext(EA),p=h.init,g=h.cleanupWindowEvents,m=t.useRef(null),b=t.useRef(null);return t.useEffect((function(){var e=m.current,t=b.current;return null!==e&&null!==t&&p&&(null==p||p(e,t)),function(){null==g||g()}}),[]),Y.default.createElement("div",Q_({},d,{ref:m,className:"react-transform-wrapper ".concat(IA," ").concat(i),style:s}),Y.default.createElement("div",Q_({},f,{ref:b,className:"react-transform-component ".concat(FA," ").concat(a),style:l}),r))};const _A=K.default.div`
    background-color: ${Ks["bg-stronger"]};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;

    svg {
        min-width: 48px;
        width: 18%;
        height: auto;
        color: ${Ks["icon-subtle"]};
    }
`,AA=t=>e.jsx(_A,Object.assign({},t,{children:e.jsx(u.PlaceholderImageIcon,{})})),BA=K.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,RA=K.default.img`
    height: 100%;
    width: 100%;
    object-fit: ${e=>e.$fit||"contain"};
`,zA=K.default(AA)`
    width: 100%;
    height: 100%;
`,PA=({src:r,className:n,alt:i,fit:o,placeholder:a,retrieveImageDimension:s,setDimension:l})=>{const[c,d]=t.useState(!0),[u,f]=t.useState();t.useEffect((()=>{d(!0),f(void 0);const e=new Image;e.src=r,e.onload=()=>{s&&l&&l({src:r,width:e.width,height:e.height}),d(!1)},e.onerror=e=>{d(!1),f(e)}}),[r]);return e.jsx(BA,{className:n,children:u?null!=a?a:e.jsx(zA,{}):c?e.jsx(Gl,{}):e.jsx(RA,{src:r,alt:i,$fit:o})})},LA=K.default(nl)`
    padding: 0;
    border-radius: 100%;
    background: ${Ks.bg};
    color: ${Ks["icon-primary"]};
    height: 2.5rem;
    width: 2.5rem;

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }
`,NA=K.default(LA)`
    position: absolute;
    top: ${Zs["spacing-48"]};
    right: ${Zs["spacing-48"]};
    z-index: 5;

    ${el.MaxWidth.sm} {
        top: ${Zs["spacing-20"]};
        right: ${Zs["spacing-20"]};
    }
`,HA=K.default(LA)`
    position: absolute;
    top: ${Zs["spacing-48"]};
    right: calc(
        2.5rem + ${Zs["spacing-48"]} + ${Zs["spacing-16"]}
    ); // close button + space from screen + gap between buttons
    z-index: 5;

    ${el.MaxWidth.sm} {
        top: ${Zs["spacing-20"]};
        right: calc(
            2.5rem + ${Zs["spacing-20"]} + ${Zs["spacing-16"]}
        );
    }
`,WA=K.default(LA)`
    z-index: 4;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    ${e=>"left"===e.$position&&i.css`
            left: ${Zs["spacing-48"]};
            ${el.MaxWidth.sm} {
                left: ${Zs["spacing-20"]};
            }
        `}

    ${e=>"right"===e.$position&&i.css`
            right: ${Zs["spacing-48"]};
            ${el.MaxWidth.sm} {
                right: ${Zs["spacing-20"]};
            }
        `}
`,VA=K.default.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`,YA=K.default.div`
    user-select: none;
    position: relative;
    display: block;
    overflow: hidden;
    width: 100%;
    height: 100%;
`,UA=K.default.div`
    display: block;
    user-select: none;
    height: 100%;
    overflow: hidden;
    touch-action: pan-y;
`,KA=K.default.div`
    display: flex;
    transition: all 450ms ease-out 0s;
    position: relative;
    text-align: center;
    user-select: none;
    width: 100%;
    height: 100%;
`,qA=K.default.div`
    flex: 0 0 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    .react-transform-wrapper {
        height: 100%;
        width: 100%;
    }
    .react-transform-component {
        height: 100%;
        width: 100%;
    }
`,XA=K.default(PA)`
    height: 100%;
    width: 100%;
`,GA=K.default(AA)`
    width: 60vw;
    height: auto;
    max-height: 100%;
    aspect-ratio: 4 / 3;
`,ZA=K.default.div`
    display: flex;
    justify-content: center;
    padding: ${Zs["spacing-16"]};
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    z-index: 3;
`,QA=K.default(exports.Typography.BodyXS)`
    display: inline-flex;
    padding: ${Zs["spacing-4"]} ${Zs["spacing-16"]};
    justify-content: center;
    align-items: center;
    border-radius: ${Qs.full};
    background-color: ${Ks.bg};
    text-align: center;
`,JA=K.default.div`
    flex-shrink: 0;
    display: flex;
    overflow: auto;
    background-color: ${Ks["bg-inverse"]};
    padding: ${Zs["spacing-24"]} ${Zs["spacing-16"]};

    ${el.MaxWidth.sm} {
        padding: ${Zs["spacing-16"]} ${Zs["spacing-20"]};
    }
`,eB=K.default.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    gap: ${Zs["spacing-16"]};
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
`,tB=K.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    width: 100px;

    ${el.MaxWidth.sm} {
        height: 64px;
        width: 64px;
    }
`,rB=K.default.div`
    cursor: pointer;
    background-color: ${Ks["bg-inverse"]};
    border-radius: ${Qs.md};
    border: ${Gs.solid} transparent;
    box-sizing: content-box;

    flex-shrink: 0;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 92px;
    width: 92px;

    ${el.MaxWidth.sm} {
        height: 60px;
        width: 60px;
    }

    ${e=>e.$active?i.css`
                  border-width: ${Gs["width-040"]};
                  border-color: ${Ks["border-selected"]};

                  ${el.MaxWidth.sm} {
                      border-width: ${Gs["width-020"]};
                  }

                  :hover {
                      border-color: ${Ks["border-selected-hover"]};
                  }
              `:i.css`
                  border-width: ${Gs["width-010"]};

                  :hover {
                      border-color: ${Ks["border-hover"]};
                  }
              `};
`,nB=K.default(PA)`
    height: 100%;
    width: 100%;
`,iB=(r,n)=>{var{items:i,initialActiveItemIndex:o,hideThumbnail:a=!1,hideNavigation:s=!1,hideCounter:l=!1,hideMagnifier:c=!1,onClose:d}=r,f=X(r,["items","initialActiveItemIndex","hideThumbnail","hideNavigation","hideCounter","hideMagnifier","onClose"]);const[h,p]=t.useState(null!=o?o:0),[g,m]=t.useState({}),[b,v]=t.useState(1),[y,x]=t.useState(),[w,$]=t.useState(),C=t.useRef(null),S=t.useRef([]),j=t.useRef([]),k=y&&w?y-w:0;t.useImperativeHandle(n,(()=>({currentItemIndex:h,setCurrentItem:F,goToPrevItem:O,goToNextItem:I}))),Wc("keydown",(function(e){"ArrowRight"===e.key?I():"ArrowLeft"===e.key?O():"Escape"===e.key&&d&&d()}),"document"),t.useEffect((()=>{var e,t;null===(t=null===(e=S.current)||void 0===e?void 0:e[h])||void 0===t||t.scrollIntoView({behavior:"smooth",inline:"center"}),v(1)}),[h]);const D=e=>{v(e.state.scale)};const T=({src:e,height:t,width:r})=>{m((n=>Object.assign(Object.assign({},n),{[e]:{height:t,width:r}})))},E=()=>{const e=g[i[h].src];if(C.current&&e){const{clientHeight:t,clientWidth:r}=C.current,{width:n,height:i}=e,o=i/n<t/r;return n<r&&i<t?o?r/n:t/i:o?t/(i/(n/r)):r/(n/(i/t))}},O=()=>{var e,t;null===(t=null===(e=j.current)||void 0===e?void 0:e[h])||void 0===t||t.resetTransform(),p((e=>0===e?i.length-1:e-1))},I=()=>{var e,t;null===(t=null===(e=j.current)||void 0===e?void 0:e[h])||void 0===t||t.resetTransform(),p((e=>e===i.length-1?0:e+1))},F=e=>{var t,r;null===(r=null===(t=j.current)||void 0===t?void 0:t[h])||void 0===r||r.resetTransform(),p(e)};return e.jsxs(fp,Object.assign({},f,{"data-testid":"image-carousel-modal",children:[e.jsx(NA,{"aria-label":"Close image carousel",onClick:d,focusHighlight:!1,children:e.jsx(u.CrossIcon,{"aria-hidden":!0})}),!c&&e.jsx(HA,{"aria-label":1===b?"Zoom in":"Zoom out",onClick:()=>{var e,t,r,n;if(1===b){const r=E();null===(t=null===(e=j.current)||void 0===e?void 0:e[h])||void 0===t||t.centerView(r),v(null!=r?r:1)}else v(1),null===(n=null===(r=j.current)||void 0===r?void 0:r[h])||void 0===n||n.resetTransform()},focusHighlight:!1,children:1===b?e.jsx(u.MagnifierPlusIcon,{"aria-hidden":!0}):e.jsx(u.MagnifierMinusIcon,{"aria-hidden":!0})}),e.jsxs(VA,{children:[e.jsxs(YA,{children:[!s&&e.jsxs(e.Fragment,{children:[e.jsx(WA,{"aria-label":"View previous image","data-testid":"prev-btn",$position:"left",onClick:O,children:e.jsx(u.ChevronLeftIcon,{"aria-hidden":!0})}),e.jsx(WA,{"aria-label":"View next image","data-testid":"forward-btn",$position:"right",onClick:I,children:e.jsx(u.ChevronRightIcon,{"aria-hidden":!0})})]}),e.jsx(UA,{ref:C,onTouchStart:e=>{b<=1&&x(e.touches[0].clientX)},onTouchMove:e=>{!y||b>1||$(e.touches[0].clientX)},onTouchEnd:()=>{C.current&&(Math.abs(k)>C.current.offsetWidth/3&&(k>0?I():O()),x(void 0),$(void 0))},children:e.jsx(KA,{style:{transform:`translateX(calc(${100*-h}% - ${k}px))`},children:i.map(((t,r)=>{var n;return e.jsx(qA,{"data-testid":"slide-item",children:e.jsx(OA,{ref:e=>j.current[r]=e,panning:{disabled:b<=1},initialScale:1,onZoom:D,onZoomStop:D,onWheel:D,children:e.jsx(MA,{children:e.jsx(XA,{src:t.src,alt:null!==(n=t.alt)&&void 0!==n?n:`Image ${r+1}`,placeholder:e.jsx(GA,{}),fit:"scale-down",retrieveImageDimension:!0,setDimension:T})})})},r)}))})}),!l&&e.jsx(ZA,{children:e.jsx(QA,{weight:"semibold",children:`${h+1}/${i.length}`})})]}),!a&&e.jsx(JA,{children:e.jsx(eB,{children:i.map(((t,r)=>{var n;const i=null!==(n=t.thumbnailSrc)&&void 0!==n?n:t.src;return e.jsx(tB,{children:e.jsx(rB,{"data-testid":"thumbnail-item",$active:r===h,onClick:()=>F(r),ref:e=>S.current[r]=e,children:e.jsx(nB,{src:i,alt:`Thumbnail ${r+1}`,fit:"cover"})})},r)}))})})]})]}))},oB=t.forwardRef(iB),aB=K.default.button`
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
    padding: 1.5rem 1rem;
    background-color: ${Ks.bg};
    border: ${Gs["width-010"]} ${Gs.solid} transparent;
    border-radius: ${Qs.md};
    cursor: pointer;
    max-width: 13rem;
    transition: all ${Xs["duration-250"]} ${Xs["ease-default"]};
    ${qs["body-baseline-semibold"]}
    color: ${({$selected:e})=>e?Ks["text-primary"]:Ks.text};
    overflow-wrap: anywhere;

    img {
        min-width: 3.5rem;
        width: 3.5rem;
        height: 3.5rem;
        object-fit: contain;
    }

    ${el.MaxWidth.sm} {
        padding: 0.5rem 0.25rem;
        gap: 0.25rem;
        ${qs["body-md-semibold"]}
    }

    ${e=>e.$error?i.css`
                background: ${Ks.bg};
                border: ${Gs["width-010"]} ${Gs.solid}
                    ${Ks["border-error"]};
            `:e.$selected?i.css`
                background: ${Ks["bg-selected"]};
                border: ${Gs["width-010"]} ${Gs.solid}
                    ${Ks["border-selected"]};

                &:hover {
                    background: ${Ks["bg-selected-hover"]};
                    border: ${Gs["width-010"]} ${Gs.solid}
                        ${Ks["border-selected-hover"]};
                }
            `:i.css`
                &:hover {
                    border: ${Gs["width-010"]} ${Gs.solid}
                        ${Ks["border-hover-strong"]};
                }
            `}

    :disabled {
        &:hover {
            border: ${Gs["width-010"]} ${Gs.solid} transparent;
        }
        box-shadow: none;
        img {
            filter: grayscale(100%);
        }
        color: ${Ks["text-disabled"]};

        outline: none;
        cursor: not-allowed;
    }
`,sB=Y.default.forwardRef(((t,r)=>{var{children:n,imgSrc:i,selected:o,error:a,type:s="button"}=t,l=X(t,["children","imgSrc","selected","error","type"]);return e.jsxs(aB,Object.assign({ref:r,$selected:o,$error:a,type:s},l,{children:[e.jsx(ng,{src:i}),n]}))})),lB=i.css`
    height: 1.125rem;
    width: 1.125rem;
    color: ${Ks["icon-primary"]};
`,cB=K.default.div`
    border-top: ${Gs["width-010"]} ${Gs.solid} ${Ks.border};
    border-bottom: ${Gs["width-010"]} ${Gs.solid} ${Ks.border};
`,dB=K.default(exports.Typography.HeadingSM).attrs({as:"div"})`
    color: ${Ks["text-primary"]};
    margin-bottom: 0.5rem;
`,uB=K.default(exports.Typography.HeadingXS).attrs({as:"div"})`
    color: ${Ks["text-primary"]};
`,fB=K.default(h.ChevronRightIcon)`
    ${lB}
`,hB=K.default.a`
    padding: 1rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 4rem;

    :not(:last-of-type) {
        border-bottom: ${Gs["width-010"]} ${Gs.solid} ${Ks.border};
    }

    :hover {
        ${dB},
        ${uB},
        ${fB} {
            color: ${Ks["text-hover"]};
        }
    }
`,pB=K.default.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-right: 1rem;
`,gB=K.default(exports.Typography.BodyMD)`
    margin-top: 0.25rem;
`,mB=K.default(Ti.div)`
    overflow: hidden;
`,bB=K.default.div`
    border-top: ${Gs["width-010"]} ${Gs.solid} ${Ks.border};
`,vB=K.default(exports.Typography.BodyMD).attrs({as:"span"})`
    color: ${Ks["text-primary"]};
    margin-right: 1rem;
`,yB=K.default(A.PlusIcon)`
    ${lB}
`,xB=K.default(_.MinusIcon)`
    ${lB}
`,wB=K.default.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1rem 0;
    border: none;
    background: none;
    cursor: pointer;
    border-top: ${Gs["width-010"]} ${Gs.solid} ${Ks.border};

    :hover {
        ${vB},
        ${yB},
        ${xB} {
            color: ${Ks["text-hover"]};
        }
    }
`,$B=K.default.div`
    ${e=>Rl({textSize:e.$textSize})}
    ${e=>e.color&&i.css`
            color: ${e.color};
        `}
`,CB=t.forwardRef(((t,r)=>{const{baseTextColor:n,baseTextSize:i,inline:o}=t,a=X(t,["baseTextColor","baseTextSize","inline"]);return e.jsx($B,Object.assign({ref:r,as:o?"span":"div",$textSize:i,$textColor:n},a))})),SB=K.default.div`
    margin-top: 2.5rem;
    display: grid;
    align-items: center;
    width: 100%;

    ${e=>{const{numOfCols:t}=e,r=t.lg||t.md,n=t.sm?t.sm<=2?t.sm:2:void 0,o=t.md||t.sm||2;return i.css`
            grid-template-columns: repeat(${r||"auto-fill"}, 1fr);
            gap: 2rem 2rem;
            justify-items: stretch;

            ${Lh.MaxWidth.tablet} {
                grid-template-columns: repeat(
                    ${t.md||t.sm||"auto-fill"},
                    minmax(calc(${100/o}% - 2rem), 1fr)
                );
            }

            ${Lh.MaxWidth.mobileL} {
                grid-template-columns: repeat(
                    ${n||"auto-fill"},
                    minmax(calc(${100/(n||1)}% - 2rem), 1fr)
                );
            }
        `}}
`,jB=K.default.div`
    position: relative;
    ${e=>{const{startLg:t,colsLg:r,startMd:n,colsMd:o,startSm:a,colsSm:s}=e;return i.css`
            grid-column: ${t||n||"auto"} / span
                ${r||o||1};

            ${Lh.MaxWidth.tablet} {
                grid-column: ${n||a||"auto"} / span
                    ${o||s||1};
            }

            ${Lh.MaxWidth.mobileL} {
                grid-column: ${a||"auto"} / span ${s||1};
            }
        `}}
`,kB={Grid:Y.default.forwardRef(((t,r)=>{const{children:n}=t,i=X(t,["children"]);return e.jsx(SB,Object.assign({ref:r},i,{children:n}))})),Tile:Y.default.forwardRef(((t,r)=>{const{children:n}=t,i=X(t,["children"]);return e.jsx(jB,Object.assign({ref:r},i,{children:n}))}))},DB=K.default.div`
    background: hsl(0, 0%, 94%);
    padding: 0 0.5rem;

    ${el.MaxWidth.sm} {
        padding: 0;
    }
`,TB=()=>{t.useEffect((()=>{r()||n()}),[]);const r=()=>document.getElementById(EB),n=()=>{if(!document.getElementById(EB)){const e=document.createElement("script");e.id=EB,e.type="module",e.src=OB,document.head.appendChild(e)}};return e.jsx(DB,{dangerouslySetInnerHTML:{__html:"<sgds-masthead></sgds-masthead>"}})},EB="lifesg-ds-masthead-script",OB="https://cdn.jsdelivr.net/npm/@govtechsg/sgds-web-component/Masthead/index.js",IB={notCompress:6,compress:4},FB=K.default.div`
    position: ${e=>e.$fixed?"sticky":"relative"};
    background-color: white;
    z-index: 30;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`,MB=K.default.nav`
    height: ${e=>e.$compress?IB.compress:IB.notCompress}rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    transition: ${Xs["duration-350"]} ${Xs["ease-standard"]};

    ${el.MaxWidth.lg} {
        height: ${3.5}rem;
    }
`,_B=K.default.div`
    display: flex;
    height: 100%;
    margin-left: ${e=>e.$hideNavBranding?"0":"5rem"};
    flex: 1;
    justify-content: flex-end;

    ${el.MaxWidth.lg} {
        margin-left: 0rem;
    }
`,AB=K.default(nl)`
    display: none;

    ${el.MaxWidth.lg} {
        display: flex;
        padding: 0 1.5rem;
        margin-right: -1.5rem;
    }
`,BB=K.default(B.MenuIcon)`
    height: 1.5rem;
    width: 1.5rem;
    color: ${Ks.icon};
`,RB=K.default.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-shrink: 0;

    height: ${e=>e.$compress?1.5:2}rem;

    ${el.MaxWidth.lg} {
        height: 1.5rem;
    }

    ${el.MaxWidth.xxs} {
        height: 1.25rem;
    }
`,zB=K.default.div`
    display: flex;
    background-color: ${Ks.border};
    height: 100%;
    width: 2px;
    margin: 0 ${e=>e.$compress?1:1.5}rem;

    ${el.MaxWidth.lg} {
        margin: 0 1rem;
    }

    ${el.MaxWidth.sm} {
        margin: 0 0.75rem;
    }
`,PB=K.default.a`
    display: flex;
    justify-content: center;
    height: 100%;

    img {
        width: auto;
        height: 100%;
        transition: ${Xs["duration-150"]} ${Xs["ease-default"]};
        object-fit: contain;
    }
`,LB=({resources:t,onClick:r,"data-id":n,"data-testid":i="navbar-brand",type:o})=>e.jsx(PB,{role:"link",onClick:e=>{r&&r(e,o)},tabIndex:0,"data-id":n,"data-testid":i,$type:o,children:e.jsx(ng,{src:t.logoSrc,alt:t.brandName})}),NB=K.default.div`
    display: none;

    ${el.MaxWidth.lg} {
        display: flex;
    }
`,HB=K.default.div`
    position: absolute;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100vh;
    display: block;
    padding: 0 0 ${Zs["spacing-16"]};
    background-color: white;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    visibility: ${e=>e.$show?"visible":"hidden"};

    ${e=>e.$show?i.css`
            right: 0;
            transition: all 300ms ${Xs["ease-entrance"]};
            transition-delay: 200ms;
        `:i.css`
        right: -100%;
        transition: all 300ms ${Xs["ease-exit"]};
    `}
    ${e=>{const t=`${e.$viewHeight}px`||"1vh";return i.css`
            height: calc(${t} * 100);
        `}}

	${el.MaxWidth.lg} {
        width: 75%;
    }

    ${el.MaxWidth.sm} {
        width: 100%;
    }
`,WB=K.default.div`
    display: flex;
    flex-direction: column;
`,VB=K.default.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: ${Zs["spacing-40"]} ${Zs["spacing-20"]}
        ${Zs["spacing-32"]};
`,YB=K.default(m.CrossIcon)`
    height: 1.5rem;
    width: 1.5rem;
`,UB=K.default(nl)`
    position: absolute;
    right: -${Zs["spacing-4"]};
    color: ${Ks.icon};

    :active,
    :focus {
        color: ${Ks["icon-hover"]};
    }

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }
`,KB=Y.default.forwardRef(((r,n)=>{const{show:i,resources:o={},children:a,hideNavBranding:s,onClose:l,onBrandClick:c}=r,[d,u]=t.useState(0),{primary:f,secondary:h}=o;t.useEffect((()=>(p(),window.addEventListener("resize",p),()=>{window.removeEventListener("resize",p)})),[]);const p=()=>{if(window){const e=.01*window.innerHeight;u(e)}};return e.jsx(NB,{ref:n,"data-testid":"drawer",children:e.jsx(HB,{$show:i,$viewHeight:d,children:e.jsxs(WB,{children:[e.jsxs(VB,{children:[e.jsx(RB,{"data-id":"drawer-brand-container",children:!s&&e.jsxs(e.Fragment,{children:[f&&e.jsx(LB,{resources:f,compress:!0,onClick:c,"data-id":"drawer-brand-primary","data-testid":"drawer__brand",type:"primary"}),h&&e.jsxs(e.Fragment,{children:[e.jsx(zB,{}),e.jsx(LB,{resources:h,compress:!0,onClick:c,"data-id":"drawer-brand-secondary","data-testid":"drawer__brand-secondary",type:"secondary"})]})]})}),e.jsx(UB,{onClick:l,focusHighlight:!1,"aria-label":"Close nav menu",children:e.jsx(YB,{})})]}),a]})})})})),qB=K.default.ul`
    display: flex;
    list-style: none;
    margin-left: ${Zs["spacing-64"]};
    flex-shrink: 0;

    ${el.MaxWidth.lg} {
        display: none;
    }
`,XB=K.default.ul`
    display: none;

    ${el.MaxWidth.lg} {
        display: flex;
        list-style: none;
        margin-left: ${Zs["spacing-64"]};
        flex-shrink: 0;
    }
`,GB=K.default.ul`
    display: none;
    list-style: none;

    ${el.MaxWidth.lg} {
        display: flex;
        flex-direction: column;
        margin-top: ${Zs["spacing-40"]};
        width: max-content;
        min-width: 22rem;
        max-width: 24rem;
    }

    ${el.MaxWidth.sm} {
        width: 100%;
        max-width: unset;
        min-width: unset;
    }
`,ZB=K.default.li`
    position: relative;
    display: flex;
    align-items: center;

    :not(:last-of-type) {
        margin-right: ${Zs["spacing-16"]};
    }

    ${el.MaxWidth.lg} {
        width: 100%;
        padding: 0 0 0 ${Zs["spacing-16"]};
        justify-content: center;

        :not(:last-of-type) {
            margin-right: 0;
            margin-bottom: ${e=>e.$mobile?Zs["spacing-16"]:"0"};
        }
    }

    ${el.MaxWidth.sm} {
        ${e=>{if(e.$mobile)return i.css`
                    padding: 0 ${Zs["spacing-16"]};
                `}}
    }
`,QB=K.default(Il.Small)`
    ${el.MaxWidth.lg} {
        width: 100%;
    }
`,JB=K.default.div`
    display: none;

    ${el.MaxWidth.lg} {
        display: flex;
        flex-direction: column;
        margin-top: ${Zs["spacing-40"]};
    }
`,eR=K.default(exports.Typography.BodyMD)`
    margin-bottom: ${Zs["spacing-8"]};
`,tR=K.default.div`
    display: flex;
`,rR=K.default.a`
    :not(:last-child) {
        margin-right: ${Zs["spacing-16"]};
    }

    img {
        width: auto;
        height: auto;
        object-fit: contain;
    }

    ${el.MaxWidth.lg} {
        img {
            max-width: 11rem;
        }
    }

    ${el.MaxWidth.sm} {
        img {
            max-width: 100%;
        }
    }
`,nR=({actionButtons:t,mobile:r=!1,onActionButtonClick:n})=>{const i=e=>{e.stopPropagation()},o=e=>t=>{t.stopPropagation(),"download"===e.type&&window.scrollTo({left:0,top:document.body.scrollHeight,behavior:"smooth"}),n(t,e)},a=(t,r)=>{const n=t?(e=>{const t=JC(e,(e=>"download"===e.type));if(t>-1){const r=[...e],n=r.splice(t,1);return[...r,n[0]]}return e})(r):r;return n.map(((r,n)=>{let a;switch(r.type){case"download":a=t?(s=r.args,e.jsxs(JB,{children:[e.jsx(eR,{weight:"semibold",children:s&&s.children||"Download the app"}),e.jsxs(tR,{children:[e.jsx(rR,{href:"https://apps.apple.com/sg/app/moments-of-life/id1383218758",target:"_blank",rel:"noopener noreferrer","data-testid":"button__app-store",onClick:i,children:e.jsx("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/apple-app-store.png",alt:"apple-app-store"})}),e.jsx(rR,{href:"https://play.google.com/store/apps/details?id=sg.gov.app.mol&hl=en_SG",target:"_blank",rel:"noopener noreferrer","data-testid":"button__play-store",onClick:i,children:e.jsx("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/google-play-store.png",alt:"google-play-store"})})]})]})):e.jsx(QB,Object.assign({},r.args,{type:"button",onClick:o(r),"data-testid":"action-button__download",children:"Download the app"}));break;case"button":{const i=r.args["data-testid"]?`action-button__${r.args["data-testid"]}`:`action-button__button-${t?"mobile-":""}${n+1}`;a=e.jsx(QB,Object.assign({},r.args,{type:"button",onClick:o(r),"data-testid":i}));break}case"component":{const e=r.args;a=e&&e.render||null;break}default:a=null}var s;if(a)return e.jsx(ZB,{$mobile:t,children:a},`action-button-${n+1}`)}))};if(t){const n=(null==t?void 0:t.mobile)||t.desktop,i=n.filter((e=>!!e.uncollapsible)),o=n.filter((e=>!e.uncollapsible));return r?e.jsx(e.Fragment,{children:o.length>0&&e.jsx(GB,{children:a(r,o)})}):e.jsxs(e.Fragment,{children:[i.length>0&&e.jsx(XB,{children:a(!1,i)}),t.desktop.length>0&&e.jsx(qB,{children:a(r,t.desktop)})]})}return e.jsx(e.Fragment,{})};var iR;!function(e){e.isNavItemCommon=e=>!!e.onClick,e.isNavItemLink=e=>{const t=e;return!t.itemType||"link"===t.itemType}}(iR||(iR={}));const oR=K.default.ul`
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 0;
    top: 100%;

    min-width: 15.625rem;
    width: 100%;
    max-height: 20rem;
    overflow: auto;

    padding: ${Zs["spacing-8"]} 0;

    background: ${Ks.bg};
    border-radius: ${Qs.md};
    box-shadow: 0px 2px 8px 0px
        rgb(from ${Ks.Primitive["neutral-50"]} r g b / 25%);
`,aR=K.default.ul`
    display: none;
    list-style: none;

    ${el.MaxWidth.lg} {
        border-left: ${Gs["width-040"]} solid ${Ks["border-selected"]};
        display: flex;
        flex-direction: column;
    }
`,sR=K.default(exports.Typography.LinkBL)`
    width: 100%;
    position: relative;
    text-align: left;
    color: ${Ks.text};

    margin: 0 ${Zs["spacing-8"]};

    // use border, as padding still shows an extra line after the ellipsis
    border: ${Gs.solid} transparent;
    border-width: ${Zs["spacing-12"]} ${Zs["spacing-8"]};

    border-radius: ${Qs.md};

    ${il(2)}
    white-space: pre-wrap;

    :hover,
    :active,
    :focus {
        background-color: ${Ks["bg-hover"]};
        color: ${Ks.text};
    }

    ${el.MaxWidth.lg} {
        ${qs["body-md-regular"]}
    }
`,lR=K.default.li`
    width: 100%;
    position: relative;
    display: flex;
    align-items: flex-start;
`,cR=({items:t,mobile:r=!1,onItemClick:n})=>{const i=e=>t=>{t.stopPropagation(),n(t,e)},o=(r=!1)=>t.map(((t,n)=>{const{children:o,options:a}=t,s=X(t,["children","options"]),l=r?`link__mobile-${n+1}`:`link__${n+1}`;return e.jsx(lR,{children:e.jsx(sR,Object.assign({"data-testid":l},s,{onClick:i(t)},a,{children:o}))},n)}));if(t&&t.length>0){const t=r?aR:oR;return e.jsx(t,{children:o(r)})}return e.jsx(e.Fragment,{})},dR=K.default.ul`
    display: flex;
    list-style: none;
    position: relative;

    ${e=>e.$alignLeft&&"margin-right: auto;"}

    ${el.MaxWidth.lg} {
        display: none;
    }
`,uR=K.default.ul`
    display: none;
    list-style: none;

    ${el.MaxWidth.lg} {
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
`,fR=K.default.li`
    display: flex;
    margin-left: 1rem;

    :first-child {
        // negative margin to preserve touch target size for link
        margin-left: ${e=>e.$hiddenBranding?"-0.5rem":"0"};
    }

    ${el.MaxWidth.lg} {
        flex-direction: column;
        padding: 0.125rem 0;
        width: 100%;
        margin-left: 0rem;
    }
`,hR=K.default(exports.Typography.LinkMD)`
    display: flex;
    position: relative;
    align-items: center;
    text-align: center;
    color: ${Ks.text};
    height: 100%;
    padding: 0 0.5rem;

    :active,
    :focus,
    :hover {
        color: ${e=>e.$selected?Ks["text-selected-hover"]:Ks["text-hover"]};
    }

    ${el.MaxWidth.lg} {
        width: 100%;
        padding: 0.5rem 1rem;
        text-align: left;
        align-items: flex-start;
    }
`,pR=K.default.div`
    flex: 1;
    margin-top: 0.25rem;

    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    white-space: pre-wrap;
`,gR=K.default.div`
    position: absolute;
    bottom: 0;
    height: 0.25rem;
    left: 0.5rem;
    right: 0.5rem;
    background-color: ${Ks["border-selected"]};

    :hover {
        ${e=>e.$selected&&Ks["border-selected-hover"]};
    }

    ${el.MaxWidth.lg} {
        left: 0;
        right: unset;
        top: 0;
        bottom: 0;
        height: 100%;
        width: 0.25rem;
    }
`,mR=K.default.div`
    padding-left: 0.5rem;
    margin-right: -0.5rem;
`,bR=K.default(nl)`
    padding: 0.5rem;
    transform: rotate(${e=>e.$selected?0:180}deg);
    transition: transform 300ms ease-in-out;
    margin: auto 0.25rem auto 0;
`,vR=K.default(n.ChevronUpIcon)`
    height: 1.25rem;
    width: 1.25rem;
    color: ${Ks.icon};
    :hover {
        ${e=>e.$selected?Ks["icon-selected-hover"]:Ks["icon-hover"]};
    }
`,yR=({items:r,selectedId:n,mobile:i=!1,hideNavBranding:o,onItemClick:a})=>{const[s,l]=t.useState(-1),[c,d]=t.useState(!1),u=t.useRef(null);t.useEffect((()=>{const e=e=>{u.current&&!u.current.contains(e.target)&&f()};return document.addEventListener("click",e,!0),()=>{document.removeEventListener("click",e,!0)}}),[]);const f=()=>{d(!1)},h=(e,t)=>r=>{r.stopPropagation(),l(t),d(!0),a(r,e)},p=(e,t)=>{e.stopPropagation(),a(e,t),d(!1)},g=()=>r.map(((t,r)=>{if("component"===t.itemType){const n=t&&t.children||null;return e.jsx("li",{children:n},r)}{const a=(e=>{if(e.id===n)return!0;if(e.subMenu&&e.subMenu.length>=1)return!!e.subMenu.find((e=>e.id===n));return!1})(t),{children:l,options:d}=t,u=X(t,["children","options"]),f=a?i?"bold":"semibold":"regular",g=i?`link__mobile-${r+1}`:`link__${r+1}`,m=s>=0&&s===r&&c;return e.jsxs(fR,{$hiddenBranding:o,children:[e.jsxs(hR,Object.assign({"data-testid":g,weight:f,$selected:a},u,{onClick:h(t,r)},d,{children:[e.jsx(pR,{children:l}),a&&e.jsx(gR,{"data-testid":`${g}-indicator`,$selected:a}),i&&t.subMenu&&e.jsx(mR,{children:e.jsx(bR,{"data-testid":`${g}-expand-collapse-button`,$selected:m,focusHighlight:!1,focusOutline:"browser","aria-label":m?"Collapse":"Expand",children:e.jsx(vR,{$selected:a})})})]})),m&&t.subMenu&&e.jsx(cR,{items:t.subMenu,mobile:i,onItemClick:p})]},r)}}));return r&&r.length>0?i?e.jsx(uR,{ref:u,children:g()}):e.jsx(dR,{ref:u,$alignLeft:o,children:g()}):e.jsx(e.Fragment,{})},xR={primary:{brandName:"LifeSG",logoSrc:"https://assets.life.gov.sg/lifesg/logo-lifesg.svg"}},wR={primary:{brandName:"BookingSG",logoSrc:"https://www.booking.gov.sg/logo.svg"}},$R={primary:{brandName:"CCube",logoSrc:"https://assets.life.gov.sg/ccube/logo-ccube.svg"}},CR={primary:{brandName:"MyLegacy",logoSrc:"https://mylegacy.life.gov.sg/images/site-logo.png"}},SR=t.forwardRef(((r,n)=>{var{items:o,className:a,id:s,selectedId:l,compress:c=!1,fixed:d=!0,resources:u,hideNavElements:f=!1,hideNavBranding:h=!1,drawerDismissalExclusions:p=[],actionButtons:g,onItemClick:m,onActionButtonClick:b,onBrandClick:v,masthead:y=!0,layout:x="default"}=r,w=X(r,["items","className","id","selectedId","compress","fixed","resources","hideNavElements","hideNavBranding","drawerDismissalExclusions","actionButtons","onItemClick","onActionButtonClick","onBrandClick","masthead","layout"]);const[$,C]=t.useState(!1),[S,j]=t.useState(!1),k="stretch"===x,D=t.useRef(null),T=i.useTheme(),E=(e=>{switch(e){case"bookingsg":return wR;case"mylegacy":return CR;case"ccube":return $R;default:return xR}})(null==T?void 0:T.resourceScheme),O=Js["lg-max"]({theme:T}),I=(null==u?void 0:u.primary)||E.primary,F=null==u?void 0:u.secondary;t.useImperativeHandle(n,(()=>Object.assign(D.current,{dismissDrawer:()=>{M()}})),[$]),t.useEffect((()=>(A(),window.addEventListener("resize",A),()=>{window.removeEventListener("resize",A)})),[]);const M=()=>{C(!1),setTimeout((()=>{j(!1)}),550)},_=e=>$&&-1===p.indexOf(e),A=()=>{window.innerWidth<=O&&$&&M()},B=(e,t)=>{v&&(e.preventDefault(),v(t)),_("brand-click")&&M()},R=(e,t)=>{iR.isNavItemCommon(t)&&t.onClick?t.onClick(e):m&&(e.preventDefault(),m(t)),iR.isNavItemLink(t)&&!t.subMenu&&_("item-click")&&M()},z=(e,t)=>{var r;"button"!==t.type&&"download"!==t.type||!(null===(r=t.args)||void 0===r?void 0:r.onClick)?b&&(e.preventDefault(),b(t)):t.args.onClick(e),_("item-click")&&M()},P=()=>{C(!0),j(!0)},L=()=>{_("close-button-click")&&M()},N=()=>{const t=o.mobile||o.desktop;return t&&t.length>0||g&&(e=>{const t=e.mobile||e.desktop;return!!t&&t.length&&t.some((e=>!e.uncollapsible))})(g)?e.jsx(AB,{"aria-label":"Open nav menu","data-testid":"button__mobile-menu",onClick:P,focusHighlight:!1,children:e.jsx(BB,{})}):null};return e.jsxs(FB,{ref:D,$fixed:d,className:a,id:s||"navbar-wrapper","data-testid":w["data-testid"]||"navbar-wrapper",children:[y&&e.jsx(TB,{}),e.jsxs(h_.Content,{stretch:k,children:[e.jsxs(MB,{$compress:c,children:[!h&&e.jsxs(RB,{$compress:c,"data-id":"brand-container",children:[I&&e.jsx(LB,{resources:I,onClick:B,"data-id":"brand-primary","data-testid":"main__brand",type:"primary"}),F&&e.jsxs(e.Fragment,{children:[e.jsx(zB,{$compress:c}),e.jsx(LB,{resources:F,onClick:B,"data-id":"brand-secondary","data-testid":"main__brand-secondary",type:"secondary"})]})]}),!f&&e.jsxs(_B,{$hideNavBranding:h,children:[e.jsx(yR,{items:o.desktop,onItemClick:R,selectedId:l,hideNavBranding:h}),e.jsx(nR,{actionButtons:g,onActionButtonClick:z}),N()]})]}),!f&&e.jsx(Zh,{show:S,enableOverlayClick:!0,onOverlayClick:L,children:e.jsxs(KB,{show:$,resources:{primary:I,secondary:F},onClose:L,onBrandClick:B,actionButtons:g,hideNavBranding:h,children:[e.jsx(yR,{items:o.mobile||o.desktop,onItemClick:R,selectedId:l,mobile:!0}),e.jsx(nR,{actionButtons:g,onActionButtonClick:z,mobile:!0})]})})]})]})})),jR=IB,kR=i.css`
    color: ${Ks["hyperlink-inverse"]};

    svg {
        color: ${Ks["icon-primary-inverse"]};
    }

    :hover,
    :active,
    :visited,
    :focus {
        color: ${Ks["hyperlink-inverse"]};
        svg {
            color: ${Ks["icon-primary-inverse"]};
        }
    }
`,DR=K.default.div`
    position: ${e=>e.$sticky?"sticky":"relative"};
    left: 0;
    top: 0;
    width: 100%;
    transition: all ${Xs["duration-800"]} ${Xs["ease-default"]};
    background: ${Ks["bg-inverse-subtle"]};
    z-index: 25;
    cursor: ${e=>e.$clickable?"pointer":"default"};
`,TR=K.default(h_.Content)`
    display: flex;
`,ER=K.default.div`
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1.5rem 0;
`,OR=K.default.div`
    display: inline-block;
    width: 100%;

    ${qs["body-baseline-regular"]}
    color: ${Ks["text-inverse"]};

    p {
        display: inline-block;
    }

    strong {
        ${qs["body-baseline-semibold"]}
        color: ${Ks["text-inverse"]};
    }

    a {
        ${qs["body-baseline-regular"]}
        ${kR}
    }

    ${e=>{const t="linear-gradient(to bottom, black 50%, transparent 100%)";if(e.$maxCollapsedHeight)return i.css`
                max-height: ${e.$maxCollapsedHeight}px;
                overflow: hidden;
                -webkit-mask-image: ${t};
                mask-image: ${t};
            `}}
`,IR=K.default(exports.Typography.LinkBL)`
    position: relative;

    ${kR}
`,FR=K.default(nl)`
    margin-right: -1.5rem;
    padding-left: 1rem;
    height: max-content;
`,MR=K.default(m.CrossIcon)`
    height: 1.875rem;
    width: 1.875rem;
    color: ${Ks["icon-inverse"]};
`,_R=K.default.button`
    display: flex;
    align-items: center;
    gap: 0.25rem;

    margin-top: 0.5rem;

    border: none;
    background: transparent;
    color: ${Ks["hyperlink-inverse"]};
    ${qs["body-md-semibold"]};

    cursor: pointer;
`,AR=K.default.button`
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`,BR=r=>{var{children:n,visible:i=!0,dismissible:o=!0,sticky:a=!0,onDismiss:s,id:l,forwardedRef:c,maxCollapsedHeight:d,onClick:u,actionButton:f}=r,h=X(r,["children","visible","dismissible","sticky","onDismiss","id","forwardedRef","maxCollapsedHeight","onClick","actionButton"]);const p=h["data-testid"],[g,m]=t.useState(i),{height:b=0,ref:v}=qe();t.useEffect((()=>{m(i)}),[i]);const y=e=>{e.stopPropagation(),m(!1),o&&s&&s()},x=e=>{(null==f?void 0:f.onClick)&&(e.stopPropagation(),f.onClick(e))};if(!g)return null;return e.jsxs(DR,Object.assign({ref:c,$sticky:a,$clickable:!!u,onClick:u},h,{children:[e.jsxs(TR,{id:RR("container",l),children:[e.jsxs(ER,{children:[e.jsx(OR,{"data-testid":RR("text-content",p),$maxCollapsedHeight:d&&b>d?d:void 0,children:e.jsx("div",{ref:v,children:n})}),f?e.jsx(_R,Object.assign({id:RR("action-button",l),"data-testid":RR("action-button",p),type:"button"},f,{onClick:x,children:f.children})):null]}),o&&e.jsx(FR,{onClick:y,id:RR("dismiss-button",l),"data-testid":RR("dismiss-button",p),focusHighlight:!1,type:"button","aria-label":"Dismiss notification",children:e.jsx(MR,{"aria-hidden":!0})})]}),u&&e.jsx(AR,{"aria-label":"Clickable banner",type:"button"})]}))},RR=(e,t="wrapper")=>`${t}-${e}`,zR=Y.default.forwardRef(((t,r)=>e.jsx(BR,Object.assign({},t,{forwardedRef:r}))));zR.displayName="NotificationBanner";const PR=Object.assign(zR,{Link:IR});var LR={exports:{}};
/*! @license DOMPurify 2.5.5 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.5.5/LICENSE */LR.exports=function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,r){return t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},t(e,r)}function r(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function n(e,i,o){return n=r()?Reflect.construct:function(e,r,n){var i=[null];i.push.apply(i,r);var o=new(Function.bind.apply(e,i));return n&&t(o,n.prototype),o},n.apply(null,arguments)}function i(e){return o(e)||a(e)||s(e)||c()}function o(e){if(Array.isArray(e))return l(e)}function a(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function s(e,t){if(e){if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(e,t):void 0}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var d=Object.hasOwnProperty,u=Object.setPrototypeOf,f=Object.isFrozen,h=Object.getPrototypeOf,p=Object.getOwnPropertyDescriptor,g=Object.freeze,m=Object.seal,b=Object.create,v="undefined"!=typeof Reflect&&Reflect,y=v.apply,x=v.construct;y||(y=function(e,t,r){return e.apply(t,r)}),g||(g=function(e){return e}),m||(m=function(e){return e}),x||(x=function(e,t){return n(e,i(t))});var w=F(Array.prototype.forEach),$=F(Array.prototype.pop),C=F(Array.prototype.push),S=F(String.prototype.toLowerCase),j=F(String.prototype.toString),k=F(String.prototype.match),D=F(String.prototype.replace),T=F(String.prototype.indexOf),E=F(String.prototype.trim),O=F(RegExp.prototype.test),I=M(TypeError);function F(e){return function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return y(e,t,n)}}function M(e){return function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return x(e,r)}}function _(e,t,r){var n;r=null!==(n=r)&&void 0!==n?n:S,u&&u(e,null);for(var i=t.length;i--;){var o=t[i];if("string"==typeof o){var a=r(o);a!==o&&(f(t)||(t[i]=a),o=a)}e[o]=!0}return e}function A(e){var t,r=b(null);for(t in e)!0===y(d,e,[t])&&(r[t]=e[t]);return r}function B(e,t){for(;null!==e;){var r=p(e,t);if(r){if(r.get)return F(r.get);if("function"==typeof r.value)return F(r.value)}e=h(e)}function n(e){return console.warn("fallback value for",e),null}return n}var R=g(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),z=g(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),P=g(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),L=g(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),N=g(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),H=g(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),W=g(["#text"]),V=g(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),Y=g(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),U=g(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),K=g(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),q=m(/\{\{[\w\W]*|[\w\W]*\}\}/gm),X=m(/<%[\w\W]*|[\w\W]*%>/gm),G=m(/\${[\w\W]*}/gm),Z=m(/^data-[\-\w.\u00B7-\uFFFF]/),Q=m(/^aria-[\-\w]+$/),J=m(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),ee=m(/^(?:\w+script|data):/i),te=m(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),re=m(/^html$/i),ne=m(/^[a-z][.\w]*(-[.\w]+)+$/i),ie=function(){return"undefined"==typeof window?null:window},oe=function(t,r){if("object"!==e(t)||"function"!=typeof t.createPolicy)return null;var n=null,i="data-tt-policy-suffix";r.currentScript&&r.currentScript.hasAttribute(i)&&(n=r.currentScript.getAttribute(i));var o="dompurify"+(n?"#"+n:"");try{return t.createPolicy(o,{createHTML:function(e){return e},createScriptURL:function(e){return e}})}catch(e){return console.warn("TrustedTypes policy "+o+" could not be created."),null}};function ae(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie(),r=function(e){return ae(e)};if(r.version="2.5.5",r.removed=[],!t||!t.document||9!==t.document.nodeType)return r.isSupported=!1,r;var n=t.document,o=t.document,a=t.DocumentFragment,s=t.HTMLTemplateElement,l=t.Node,c=t.Element,d=t.NodeFilter,u=t.NamedNodeMap,f=void 0===u?t.NamedNodeMap||t.MozNamedAttrMap:u,h=t.HTMLFormElement,p=t.DOMParser,m=t.trustedTypes,b=c.prototype,v=B(b,"cloneNode"),y=B(b,"nextSibling"),x=B(b,"childNodes"),F=B(b,"parentNode");if("function"==typeof s){var M=o.createElement("template");M.content&&M.content.ownerDocument&&(o=M.content.ownerDocument)}var se=oe(m,n),le=se?se.createHTML(""):"",ce=o,de=ce.implementation,ue=ce.createNodeIterator,fe=ce.createDocumentFragment,he=ce.getElementsByTagName,pe=n.importNode,ge={};try{ge=A(o).documentMode?o.documentMode:{}}catch(e){}var me={};r.isSupported="function"==typeof F&&de&&void 0!==de.createHTMLDocument&&9!==ge;var be,ve,ye=q,xe=X,we=G,$e=Z,Ce=Q,Se=ee,je=te,ke=ne,De=J,Te=null,Ee=_({},[].concat(i(R),i(z),i(P),i(N),i(W))),Oe=null,Ie=_({},[].concat(i(V),i(Y),i(U),i(K))),Fe=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Me=null,_e=null,Ae=!0,Be=!0,Re=!1,ze=!0,Pe=!1,Le=!0,Ne=!1,He=!1,We=!1,Ve=!1,Ye=!1,Ue=!1,Ke=!0,qe=!1,Xe="user-content-",Ge=!0,Ze=!1,Qe={},Je=null,et=_({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),tt=null,rt=_({},["audio","video","img","source","image","track"]),nt=null,it=_({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),ot="http://www.w3.org/1998/Math/MathML",at="http://www.w3.org/2000/svg",st="http://www.w3.org/1999/xhtml",lt=st,ct=!1,dt=null,ut=_({},[ot,at,st],j),ft=["application/xhtml+xml","text/html"],ht="text/html",pt=null,gt=o.createElement("form"),mt=function(e){return e instanceof RegExp||e instanceof Function},bt=function(t){pt&&pt===t||(t&&"object"===e(t)||(t={}),t=A(t),be=be=-1===ft.indexOf(t.PARSER_MEDIA_TYPE)?ht:t.PARSER_MEDIA_TYPE,ve="application/xhtml+xml"===be?j:S,Te="ALLOWED_TAGS"in t?_({},t.ALLOWED_TAGS,ve):Ee,Oe="ALLOWED_ATTR"in t?_({},t.ALLOWED_ATTR,ve):Ie,dt="ALLOWED_NAMESPACES"in t?_({},t.ALLOWED_NAMESPACES,j):ut,nt="ADD_URI_SAFE_ATTR"in t?_(A(it),t.ADD_URI_SAFE_ATTR,ve):it,tt="ADD_DATA_URI_TAGS"in t?_(A(rt),t.ADD_DATA_URI_TAGS,ve):rt,Je="FORBID_CONTENTS"in t?_({},t.FORBID_CONTENTS,ve):et,Me="FORBID_TAGS"in t?_({},t.FORBID_TAGS,ve):{},_e="FORBID_ATTR"in t?_({},t.FORBID_ATTR,ve):{},Qe="USE_PROFILES"in t&&t.USE_PROFILES,Ae=!1!==t.ALLOW_ARIA_ATTR,Be=!1!==t.ALLOW_DATA_ATTR,Re=t.ALLOW_UNKNOWN_PROTOCOLS||!1,ze=!1!==t.ALLOW_SELF_CLOSE_IN_ATTR,Pe=t.SAFE_FOR_TEMPLATES||!1,Le=!1!==t.SAFE_FOR_XML,Ne=t.WHOLE_DOCUMENT||!1,Ve=t.RETURN_DOM||!1,Ye=t.RETURN_DOM_FRAGMENT||!1,Ue=t.RETURN_TRUSTED_TYPE||!1,We=t.FORCE_BODY||!1,Ke=!1!==t.SANITIZE_DOM,qe=t.SANITIZE_NAMED_PROPS||!1,Ge=!1!==t.KEEP_CONTENT,Ze=t.IN_PLACE||!1,De=t.ALLOWED_URI_REGEXP||De,lt=t.NAMESPACE||st,Fe=t.CUSTOM_ELEMENT_HANDLING||{},t.CUSTOM_ELEMENT_HANDLING&&mt(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(Fe.tagNameCheck=t.CUSTOM_ELEMENT_HANDLING.tagNameCheck),t.CUSTOM_ELEMENT_HANDLING&&mt(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(Fe.attributeNameCheck=t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),t.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(Fe.allowCustomizedBuiltInElements=t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Pe&&(Be=!1),Ye&&(Ve=!0),Qe&&(Te=_({},i(W)),Oe=[],!0===Qe.html&&(_(Te,R),_(Oe,V)),!0===Qe.svg&&(_(Te,z),_(Oe,Y),_(Oe,K)),!0===Qe.svgFilters&&(_(Te,P),_(Oe,Y),_(Oe,K)),!0===Qe.mathMl&&(_(Te,N),_(Oe,U),_(Oe,K))),t.ADD_TAGS&&(Te===Ee&&(Te=A(Te)),_(Te,t.ADD_TAGS,ve)),t.ADD_ATTR&&(Oe===Ie&&(Oe=A(Oe)),_(Oe,t.ADD_ATTR,ve)),t.ADD_URI_SAFE_ATTR&&_(nt,t.ADD_URI_SAFE_ATTR,ve),t.FORBID_CONTENTS&&(Je===et&&(Je=A(Je)),_(Je,t.FORBID_CONTENTS,ve)),Ge&&(Te["#text"]=!0),Ne&&_(Te,["html","head","body"]),Te.table&&(_(Te,["tbody"]),delete Me.tbody),g&&g(t),pt=t)},vt=_({},["mi","mo","mn","ms","mtext"]),yt=_({},["foreignobject","annotation-xml"]),xt=_({},["title","style","font","a","script"]),wt=_({},z);_(wt,P),_(wt,L);var $t=_({},N);_($t,H);var Ct=function(e){var t=F(e);t&&t.tagName||(t={namespaceURI:lt,tagName:"template"});var r=S(e.tagName),n=S(t.tagName);return!!dt[e.namespaceURI]&&(e.namespaceURI===at?t.namespaceURI===st?"svg"===r:t.namespaceURI===ot?"svg"===r&&("annotation-xml"===n||vt[n]):Boolean(wt[r]):e.namespaceURI===ot?t.namespaceURI===st?"math"===r:t.namespaceURI===at?"math"===r&&yt[n]:Boolean($t[r]):e.namespaceURI===st?!(t.namespaceURI===at&&!yt[n])&&!(t.namespaceURI===ot&&!vt[n])&&!$t[r]&&(xt[r]||!wt[r]):!("application/xhtml+xml"!==be||!dt[e.namespaceURI]))},St=function(e){C(r.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){try{e.outerHTML=le}catch(t){e.remove()}}},jt=function(e,t){try{C(r.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){C(r.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!Oe[e])if(Ve||Ye)try{St(t)}catch(e){}else try{t.setAttribute(e,"")}catch(e){}},kt=function(e){var t,r;if(We)e="<remove></remove>"+e;else{var n=k(e,/^[\r\n\t ]+/);r=n&&n[0]}"application/xhtml+xml"===be&&lt===st&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");var i=se?se.createHTML(e):e;if(lt===st)try{t=(new p).parseFromString(i,be)}catch(e){}if(!t||!t.documentElement){t=de.createDocument(lt,"template",null);try{t.documentElement.innerHTML=ct?le:i}catch(e){}}var a=t.body||t.documentElement;return e&&r&&a.insertBefore(o.createTextNode(r),a.childNodes[0]||null),lt===st?he.call(t,Ne?"html":"body")[0]:Ne?t.documentElement:a},Dt=function(e){return ue.call(e.ownerDocument||e,e,d.SHOW_ELEMENT|d.SHOW_COMMENT|d.SHOW_TEXT|d.SHOW_PROCESSING_INSTRUCTION|d.SHOW_CDATA_SECTION,null,!1)},Tt=function(e){return e instanceof h&&("string"!=typeof e.nodeName||"string"!=typeof e.textContent||"function"!=typeof e.removeChild||!(e.attributes instanceof f)||"function"!=typeof e.removeAttribute||"function"!=typeof e.setAttribute||"string"!=typeof e.namespaceURI||"function"!=typeof e.insertBefore||"function"!=typeof e.hasChildNodes)},Et=function(t){return"object"===e(l)?t instanceof l:t&&"object"===e(t)&&"number"==typeof t.nodeType&&"string"==typeof t.nodeName},Ot=function(e,t,n){me[e]&&w(me[e],(function(e){e.call(r,t,n,pt)}))},It=function(e){var t;if(Ot("beforeSanitizeElements",e,null),Tt(e))return St(e),!0;if(O(/[\u0080-\uFFFF]/,e.nodeName))return St(e),!0;var n=ve(e.nodeName);if(Ot("uponSanitizeElement",e,{tagName:n,allowedTags:Te}),e.hasChildNodes()&&!Et(e.firstElementChild)&&(!Et(e.content)||!Et(e.content.firstElementChild))&&O(/<[/\w]/g,e.innerHTML)&&O(/<[/\w]/g,e.textContent))return St(e),!0;if("select"===n&&O(/<template/i,e.innerHTML))return St(e),!0;if(7===e.nodeType)return St(e),!0;if(Le&&8===e.nodeType&&O(/<[/\w]/g,e.data))return St(e),!0;if(!Te[n]||Me[n]){if(!Me[n]&&Mt(n)){if(Fe.tagNameCheck instanceof RegExp&&O(Fe.tagNameCheck,n))return!1;if(Fe.tagNameCheck instanceof Function&&Fe.tagNameCheck(n))return!1}if(Ge&&!Je[n]){var i=F(e)||e.parentNode,o=x(e)||e.childNodes;if(o&&i)for(var a=o.length-1;a>=0;--a){var s=v(o[a],!0);s.__removalCount=(e.__removalCount||0)+1,i.insertBefore(s,y(e))}}return St(e),!0}return e instanceof c&&!Ct(e)?(St(e),!0):"noscript"!==n&&"noembed"!==n&&"noframes"!==n||!O(/<\/no(script|embed|frames)/i,e.innerHTML)?(Pe&&3===e.nodeType&&(t=e.textContent,t=D(t,ye," "),t=D(t,xe," "),t=D(t,we," "),e.textContent!==t&&(C(r.removed,{element:e.cloneNode()}),e.textContent=t)),Ot("afterSanitizeElements",e,null),!1):(St(e),!0)},Ft=function(e,t,r){if(Ke&&("id"===t||"name"===t)&&(r in o||r in gt))return!1;if(Be&&!_e[t]&&O($e,t));else if(Ae&&O(Ce,t));else if(!Oe[t]||_e[t]){if(!(Mt(e)&&(Fe.tagNameCheck instanceof RegExp&&O(Fe.tagNameCheck,e)||Fe.tagNameCheck instanceof Function&&Fe.tagNameCheck(e))&&(Fe.attributeNameCheck instanceof RegExp&&O(Fe.attributeNameCheck,t)||Fe.attributeNameCheck instanceof Function&&Fe.attributeNameCheck(t))||"is"===t&&Fe.allowCustomizedBuiltInElements&&(Fe.tagNameCheck instanceof RegExp&&O(Fe.tagNameCheck,r)||Fe.tagNameCheck instanceof Function&&Fe.tagNameCheck(r))))return!1}else if(nt[t]);else if(O(De,D(r,je,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==T(r,"data:")||!tt[e])if(Re&&!O(Se,D(r,je,"")));else if(r)return!1;return!0},Mt=function(e){return"annotation-xml"!==e&&k(e,ke)},_t=function(t){var n,i,o,a;Ot("beforeSanitizeAttributes",t,null);var s=t.attributes;if(s){var l={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:Oe};for(a=s.length;a--;){var c=n=s[a],d=c.name,u=c.namespaceURI;if(i="value"===d?n.value:E(n.value),o=ve(d),l.attrName=o,l.attrValue=i,l.keepAttr=!0,l.forceKeepAttr=void 0,Ot("uponSanitizeAttribute",t,l),i=l.attrValue,!l.forceKeepAttr&&(jt(d,t),l.keepAttr))if(ze||!O(/\/>/i,i))if(Le&&O(/((--!?|])>)|<\/(style|title)/i,i))jt(d,t);else{Pe&&(i=D(i,ye," "),i=D(i,xe," "),i=D(i,we," "));var f=ve(t.nodeName);if(Ft(f,o,i)){if(!qe||"id"!==o&&"name"!==o||(jt(d,t),i=Xe+i),se&&"object"===e(m)&&"function"==typeof m.getAttributeType)if(u);else switch(m.getAttributeType(f,o)){case"TrustedHTML":i=se.createHTML(i);break;case"TrustedScriptURL":i=se.createScriptURL(i)}try{u?t.setAttributeNS(u,d,i):t.setAttribute(d,i),Tt(t)?St(t):$(r.removed)}catch(e){}}}else jt(d,t)}Ot("afterSanitizeAttributes",t,null)}},At=function e(t){var r,n=Dt(t);for(Ot("beforeSanitizeShadowDOM",t,null);r=n.nextNode();)Ot("uponSanitizeShadowNode",r,null),It(r)||(r.content instanceof a&&e(r.content),_t(r));Ot("afterSanitizeShadowDOM",t,null)};return r.sanitize=function(i){var o,s,c,d,u,f=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if((ct=!i)&&(i="\x3c!--\x3e"),"string"!=typeof i&&!Et(i)){if("function"!=typeof i.toString)throw I("toString is not a function");if("string"!=typeof(i=i.toString()))throw I("dirty is not a string, aborting")}if(!r.isSupported){if("object"===e(t.toStaticHTML)||"function"==typeof t.toStaticHTML){if("string"==typeof i)return t.toStaticHTML(i);if(Et(i))return t.toStaticHTML(i.outerHTML)}return i}if(He||bt(f),r.removed=[],"string"==typeof i&&(Ze=!1),Ze){if(i.nodeName){var h=ve(i.nodeName);if(!Te[h]||Me[h])throw I("root node is forbidden and cannot be sanitized in-place")}}else if(i instanceof l)1===(s=(o=kt("\x3c!----\x3e")).ownerDocument.importNode(i,!0)).nodeType&&"BODY"===s.nodeName||"HTML"===s.nodeName?o=s:o.appendChild(s);else{if(!Ve&&!Pe&&!Ne&&-1===i.indexOf("<"))return se&&Ue?se.createHTML(i):i;if(!(o=kt(i)))return Ve?null:Ue?le:""}o&&We&&St(o.firstChild);for(var p=Dt(Ze?i:o);c=p.nextNode();)3===c.nodeType&&c===d||It(c)||(c.content instanceof a&&At(c.content),_t(c),d=c);if(d=null,Ze)return i;if(Ve){if(Ye)for(u=fe.call(o.ownerDocument);o.firstChild;)u.appendChild(o.firstChild);else u=o;return(Oe.shadowroot||Oe.shadowrootmod)&&(u=pe.call(n,u,!0)),u}var g=Ne?o.outerHTML:o.innerHTML;return Ne&&Te["!doctype"]&&o.ownerDocument&&o.ownerDocument.doctype&&o.ownerDocument.doctype.name&&O(re,o.ownerDocument.doctype.name)&&(g="<!DOCTYPE "+o.ownerDocument.doctype.name+">\n"+g),Pe&&(g=D(g,ye," "),g=D(g,xe," "),g=D(g,we," ")),se&&Ue?se.createHTML(g):g},r.setConfig=function(e){bt(e),He=!0},r.clearConfig=function(){pt=null,He=!1},r.isValidAttribute=function(e,t,r){pt||bt({});var n=ve(e),i=ve(t);return Ft(n,i,r)},r.addHook=function(e,t){"function"==typeof t&&(me[e]=me[e]||[],C(me[e],t))},r.removeHook=function(e){if(me[e])return $(me[e])},r.removeHooks=function(e){me[e]&&(me[e]=[])},r.removeAllHooks=function(){me={}},r}var se=ae();return se}();var NR=Oi(LR.exports);const HR=K.default.div`
    display: flex;
    flex-direction: column;
`,WR=K.default.div`
    display: flex;
    flex-direction: row;
    align-self: center;
    gap: ${Zs["spacing-8"]};
`,VR=K.default(Tx)`
    margin-bottom: 0rem !important;

    input {
        text-align: center;

        ${el.MaxWidth.xs} {
            padding: 0 ${Zs["spacing-8"]};
        }
    }
`,YR=K.default(Il.Small)`
    margin: ${Zs["spacing-32"]} 0;
`,UR=K.default.nav`
    display: flex;
`,KR=K.default.div`
    display: flex;
    align-items: center;
    align-self: flex-start;
    overflow: auto;

    ${el.MaxWidth.lg} {
        align-self: center;
    }
`,qR=K.default.div`
    display: inline-flex;
    padding: 0.125rem;
    align-items: center;
`,XR=K.default(nl)`
    display: flex;
    padding: 0.625rem;
    justify-content: center;
    align-items: center;
    border-radius: ${Qs.sm};
    color: ${Ks["icon-primary"]};
    outline: none;

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    &:disabled {
        color: ${Ks["icon-disabled-subtle"]};
        cursor: not-allowed;
    }

    &:hover,
    &:focus-visible {
        background-color: ${Ks["bg-hover"]};
    }
`,GR=K.default(nl)`
    display: flex;
    padding: 0.625rem;
    justify-content: center;
    align-items: center;
    border-radius: ${Qs.sm};
    color: ${Ks["icon-primary"]};
    outline: none;

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    &:disabled {
        color: ${Ks["icon-disabled-subtle"]};
        cursor: not-allowed;
    }

    &:not(:disabled):hover,
    &:not(:disabled):focus-visible {
        background: ${Ks["bg-hover"]};
    }

    ${e=>"left"===e.$position?i.css`
                margin-right: 0.625rem;
                margin-left: 0rem;
            `:i.css`
                margin-right: 0rem;
                margin-left: 0.625rem;
            `}

    ${el.MaxWidth.xxs} {
        margin-right: 0rem;
        margin-left: 0rem;
    }
`,ZR=K.default.button`
    background: ${e=>e.$selected?Ks["bg-primary"]:Ks.bg};
    border: ${Gs["width-010"]} ${Gs.solid}
        ${e=>i.css`
                ${e.$selected?Ks["bg-primary"]:Ks.border}
            `};
    color: ${e=>e.$selected?Ks["text-inverse"]:Ks.text};

    min-width: 2.5rem;
    text-align: center;
    padding: 0.4rem 0.5rem;
    border-radius: ${Qs.sm};
    margin: 0.25rem;
    cursor: pointer;
    box-shadow: none;
    outline: none;

    ${e=>e.$selected?i.css`
                  ${qs["body-baseline-bold"]};

                  &:hover,
                  &:focus-visible {
                      border-color: ${Ks["bg-selected-strongest-hover"]};
                      background-color: ${Ks["bg-selected-strongest-hover"]};
                      color: ${Ks["text-inverse"]};
                  }
              `:i.css`
                  ${qs["body-baseline-regular"]};

                  &:hover,
                  &:focus-visible {
                      border-color: ${Ks["bg-hover"]};
                      background-color: ${Ks["bg-hover"]};
                      color: ${Ks["text-hover"]};
                      ${qs["body-baseline-semibold"]};
                  }
              `}
`;K.default(nl)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${Ks["icon-primary"]};
    padding: 0.4rem 0.5rem;
    border-radius: ${Qs.sm};
    white-space: nowrap;
    outline: none;

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    :hover,
    :focus-visible {
        svg {
            color: ${Ks["icon-hover"]};
        }
    }
`;const QR=K.default.div`
    display: flex;
    cursor: pointer;
    min-width: 2.5rem;
    height: 2.5rem;
    border-radius: ${Qs.sm};
    justify-content: center;
    align-items: center;
    position: relative;
`,JR=K.default.div`
    display: flex;
    justify-content: center;
    margin: 0.625rem;
    align-items: center;
    color: ${Ks.text};

    display: flex;
    justify-content: center;
`,ez=K.default(exports.Typography.BodyBL)`
    white-space: nowrap;
`,tz=K.default(exports.Typography.BodyBL)`
    white-space: nowrap;
    margin: 0 1rem;
`,rz=K.default(Tx)`
    ${qs["body-baseline-regular"]};
    justify-content: center;
    width: 3.5rem;
    height: 2.5rem;
    border-radius: ${Qs.sm};
    border: ${Gs["width-010"]} ${Gs.solid} ${Ks.border};
    padding: 0.5rem 0.5rem;

    input {
        text-align: center;

        ::placeholder {
            ${qs["body-xs-regular"]}
        }
    }
`,nz=K.default.div`
    ${qs["body-xs-regular"]}
    background-color: ${Ks["bg-hover"]};
    border: none;
    border-radius: ${Qs.sm};
    color: ${Ks["text-hover"]};
    align-items: center;
    position: fixed;
    display: flex;
    justify-content: center;
    margin-top: 6rem;
    padding: 0.25rem 0.75rem;
`,iz=K.default.div`
    width: 9.2rem;
    margin-left: 0.5rem;
`,oz=Y.default.forwardRef((({id:r,"data-testid":n,className:o,pageSize:a=10,totalItems:s,activePage:l,pageSizeOptions:c=az,showFirstAndLastNav:d,showPageSizeChanger:u=!1,onPageChange:f,onPageSizeChange:g},m)=>{const b=i.useTheme(),v=Js["sm-max"]({theme:b}),y=oc.useMediaQuery({maxWidth:v}),[x,w]=t.useState(!1),[$,C]=t.useState(!1),[S,j]=t.useState(""),[k,D]=t.useState(c[0]),[T,E]=t.useState(!y&&u&&k?k.value:a),O=Math.ceil(s/T),I=1===l,F=l===O,M=l>1?()=>U(1):void 0,_=l<O?()=>U(O):void 0,A=l>1?()=>U(l-1):void 0,B=l<O?()=>U(parseInt(l.toString())+1):void 0,H=e=>e?()=>J():()=>Z(),W=e=>e?()=>ee():()=>Q();t.useEffect((()=>{l&&V(l)}),[l]),t.useEffect((()=>{E(a),D(c.find((e=>e.value===a)))}),[a]);const V=e=>{j(e.toString())},Y=()=>{w(!1),C(!1)},U=e=>{f&&(f(e),V(e))},K=()=>{const e=Math.min(O,l+5);U(e),V(e),w(!0),C(!1)},q=()=>{const e=Math.max(1,l-5);U(e),V(e),w(!1),C(!0)},X=e=>{const t=e.target.value;if(void 0===t||0===t.length)j("");else if(/^[0-9]+$/.test(t)){const e=parseInt(t.replace(/[^0-9]/g,""));V(Math.max(1,Math.min(O,e)))}else j(t.replace(/[^0-9]/g,""))},G=e=>{e.preventDefault(),S&&(null==f||f(parseInt(S)))},Z=()=>{w(!0)},Q=()=>{w(!1)},J=()=>{C(!0)},ee=()=>{C(!1)},te=(t,r,n)=>e.jsxs(QR,{children:[e.jsx(XR,{focusHighlight:!1,focusOutline:"browser","aria-label":t?"Previous 5 pages":"Next 5 pages",onMouseOver:H(t),onMouseOut:W(t),onFocus:H(t),onBlur:W(t),onClick:t?q:K,children:t&&$?e.jsx(R.Chevron2LeftIcon,{"aria-hidden":!0}):r&&x?e.jsx(z.Chevron2RightIcon,{"aria-hidden":!0}):e.jsx(N.EllipsisHorizontalIcon,{"aria-hidden":!0})}),t&&$&&e.jsx(nz,{children:"Previous 5 pages"}),r&&x&&e.jsx(nz,{children:"Next 5 pages"})]},n);return e.jsxs(UR,{className:o,ref:m,id:r||"pagination-wrapper","data-testid":n||"pagination","aria-label":"Pagination",children:[e.jsx(KR,{children:e.jsxs(qR,{children:[d&&e.jsx(GR,{onClick:M,disabled:I,focusHighlight:!1,$position:"left","aria-label":"First page",focusOutline:"browser",children:e.jsx(P.ChevronLineLeftIcon,{"aria-hidden":!0})}),e.jsx(GR,{onClick:A,disabled:I,focusHighlight:!1,$position:"left","aria-label":"Previous page",focusOutline:"browser",children:e.jsx(p.ChevronLeftIcon,{"aria-hidden":!0})}),y?e.jsxs(JR,{children:[e.jsx("form",{onSubmit:G,children:e.jsx(rz,{value:S,onChange:X,autoComplete:"off",type:"numeric",id:(r||"pagination")+"-input","data-testid":(n||"pagination")+"-input"})}),e.jsx(tz,{children:"/"}),e.jsx(ez,{children:O})]}):[...Array(O)].map(((t,r)=>{const n=r+1,i=O-5,o=l===n;if(O<=7)return e.jsx(ZR,{onClick:()=>U(n),$selected:o,"aria-label":"Page "+n,"aria-current":!!o&&"page",onMouseOver:Y,onFocus:Y,children:n},n);const a=l+1>5&&2===n,s=l-1<=i&&n===O-1-1;return a||s?te(a,s,n):n<=5&&l+1<=5||n<=1||n===l||n<=l+1&&n>=l-1-1||n>i&&l-1>i||n>O-1?e.jsx(ZR,{onClick:()=>U(n),$selected:o,"aria-label":"Page "+n,"aria-current":!!o&&"page",onMouseOver:Y,onFocus:Y,children:n},n):null})),e.jsx(GR,{onClick:B,disabled:F,focusHighlight:!1,$position:"right","aria-label":"Next page",focusOutline:"browser",children:e.jsx(h.ChevronRightIcon,{"aria-hidden":!0})}),d&&e.jsx(GR,{onClick:_,disabled:F,focusHighlight:!1,$position:"right","aria-label":"Last page",focusOutline:"browser",children:e.jsx(L.ChevronLineRightIcon,{"aria-hidden":!0})})]})}),u&&!y&&e.jsx(iz,{children:e.jsx(lI,{options:c,valueExtractor:e=>e.value,listExtractor:e=>e.label,displayValueExtractor:e=>e.label,selectedOption:k,onSelectOption:e=>{D(e);const t=e.value,r=Math.ceil(s/t);E(t);g&&g(l>=r?r:l,t)}})})]})})),az=[{value:10,label:"10 / page"},{value:20,label:"20 / page"},{value:30,label:"30 / page"}],sz=K.default.div`
    border-radius: 1rem;
    padding: 0.125rem 0.5rem;
    width: fit-content;
    max-width: 100%;
    ${qs["body-xs-semibold"]}
    display: flex;
    align-items: center;
    gap: 0.25rem;

    svg {
        flex-shrink: 0;
    }

    ${e=>{let t,r,n;if("solid"===e.$type)switch(n=Ks["text-inverse"],e.$color){case"grey":t=Ks["bg-inverse-subtler"];break;case"green":t=Ks["bg-success-strong"];break;case"yellow":t=Ks["bg-warning-strong"];break;case"red":t=Ks["bg-error-strong"];break;case"blue":t=Ks["bg-info-strong"];break;default:t=Ks["bg-inverse"]}else switch(e.$color){case"grey":t=Ks["bg-stronger"],r=Ks["border-strong"],n=Ks["text-subtler"];break;case"green":t=Ks["bg-success"],r=Ks["border-success"],n=Ks["text-success"];break;case"yellow":t=Ks["bg-warning"],r=Ks["border-warning"],n=Ks["text-warning"];break;case"red":t=Ks["bg-error"],r=Ks["border-error"],n=Ks["text-error"];break;case"blue":t=Ks["bg-info"],r=Ks["border-info"],n=Ks["text-info"];break;default:t=Ks.bg,r=Ks.border,n=Ks.text}return i.css`
            background: ${t};
            border: ${Gs["width-010"]} ${Gs.solid} ${r};
            color: ${n};
        `}}
`,lz=K.default.div`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-align: left;
`,cz=t=>{var{type:r,colorType:n="black",children:i,icon:o}=t,a=X(t,["type","colorType","children","icon"]);return e.jsxs(sz,Object.assign({$type:r,$color:n},a,{children:[o,e.jsx(lz,{children:i})]}))},dz=(e,t,r)=>t?ss(r,t)||ss(e,t):r||e,uz=(e,t)=>{const r=t||e.defaultValue;return ss(e.collections,r)};var fz;exports.V2_ThemeContextKeys=void 0,(fz=exports.V2_ThemeContextKeys||(exports.V2_ThemeContextKeys={})).colorScheme="colorScheme",fz.layout="layout",fz.textStyleScheme="textStyleScheme",fz.designTokenScheme="designTokenScheme",fz.resourceScheme="resourceScheme";const hz={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},pz=e=>t=>{var r;const n=(null===(r=t.theme)||void 0===r?void 0:r._v2)||t.theme,i=uz(hz,null==n?void 0:n[exports.V2_ThemeContextKeys.colorScheme]);return n.options&&n.options.color?dz(i,e,n.options.color):dz(i,e)},gz={Brand:{1:pz("Brand.1"),2:pz("Brand.2"),3:pz("Brand.3"),4:pz("Brand.4"),5:pz("Brand.5"),6:pz("Brand.6")},Primary:pz("Primary"),PrimaryDark:pz("PrimaryDark"),Secondary:pz("Secondary"),Accent:{Light:{1:pz("Accent.Light.1"),2:pz("Accent.Light.2"),3:pz("Accent.Light.3"),4:pz("Accent.Light.4"),5:pz("Accent.Light.5"),6:pz("Accent.Light.6")},Dark:{1:pz("Accent.Dark.1"),2:pz("Accent.Dark.2"),3:pz("Accent.Dark.3")}},Neutral:{1:pz("Neutral.1"),2:pz("Neutral.2"),3:pz("Neutral.3"),4:pz("Neutral.4"),5:pz("Neutral.5"),6:pz("Neutral.6"),7:pz("Neutral.7"),8:pz("Neutral.8")},Validation:{Green:{Text:pz("Validation.Green.Text"),Icon:pz("Validation.Green.Icon"),Border:pz("Validation.Green.Border"),Background:pz("Validation.Green.Background")},Orange:{Text:pz("Validation.Orange.Text"),Icon:pz("Validation.Orange.Icon"),Border:pz("Validation.Orange.Border"),Background:pz("Validation.Orange.Background"),Badge:pz("Validation.Orange.Badge")},Red:{Text:pz("Validation.Red.Text"),Icon:pz("Validation.Red.Icon"),Border:pz("Validation.Red.Border"),Background:pz("Validation.Red.Background")},Blue:{Text:pz("Validation.Blue.Text"),Icon:pz("Validation.Blue.Icon"),Border:pz("Validation.Blue.Border"),Background:pz("Validation.Blue.Background")}},Shadow:{Accent:pz("Shadow.Accent"),Red:pz("Shadow.Red"),Elevation:pz("Shadow.Elevation")}},mz={OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"},bz={D1:{fontFamily:mz.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:mz.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:mz.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:mz.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:mz.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:mz.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:mz.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:mz.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:mz.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:mz.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:mz.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:mz.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:mz.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:mz.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},vz={D1:{fontFamily:mz.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056,fontVariant:"no-common-ligatures"},D2:{fontFamily:mz.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032,fontVariant:"no-common-ligatures"},D3:{fontFamily:mz.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},D4:{fontFamily:mz.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},DBody:{fontFamily:mz.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75,fontVariant:"no-common-ligatures"},H1:{fontFamily:mz.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032,fontVariant:"no-common-ligatures"},H2:{fontFamily:mz.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},H3:{fontFamily:mz.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H4:{fontFamily:mz.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H5:{fontFamily:mz.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,fontVariant:"no-common-ligatures"},H6:{fontFamily:mz.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012,fontVariant:"no-common-ligatures"},Body:{fontFamily:mz.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75,fontVariant:"no-common-ligatures"},BodySmall:{fontFamily:mz.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014,fontVariant:"no-common-ligatures"},XSmall:{fontFamily:mz.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012,fontVariant:"no-common-ligatures"}},yz={collections:{base:bz,oneservice:{D1:{fontFamily:mz.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:mz.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:mz.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:mz.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:mz.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:mz.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:mz.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:mz.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:mz.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:mz.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:mz.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:mz.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:mz.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:mz.OpenSans.Regular,fontSize:.75,lineHeight:1.125}},plusJakartaSans:vz},defaultValue:"base"},xz=e=>t=>{var r;const n=(null===(r=t.theme)||void 0===r?void 0:r._v2)||t.theme,i=uz(yz,null==n?void 0:n[exports.V2_ThemeContextKeys.textStyleScheme]);return n.options&&n.options.textStyle?dz(i,e,n.options.textStyle):dz(i,e)},wz={D1:{fontFamily:xz("D1.fontFamily"),fontSize:xz("D1.fontSize"),fontWeight:xz("D1.fontWeight"),lineHeight:xz("D1.lineHeight"),letterSpacing:xz("D1.letterSpacing"),fontVariant:xz("D1.fontVariant")},D2:{fontFamily:xz("D2.fontFamily"),fontSize:xz("D2.fontSize"),fontWeight:xz("D2.fontWeight"),lineHeight:xz("D2.lineHeight"),letterSpacing:xz("D2.letterSpacing"),fontVariant:xz("D2.fontVariant")},D3:{fontFamily:xz("D3.fontFamily"),fontSize:xz("D3.fontSize"),fontWeight:xz("D3.fontWeight"),lineHeight:xz("D3.lineHeight"),letterSpacing:xz("D3.letterSpacing"),fontVariant:xz("D3.fontVariant")},D4:{fontFamily:xz("D4.fontFamily"),fontSize:xz("D4.fontSize"),fontWeight:xz("D4.fontWeight"),lineHeight:xz("D4.lineHeight"),letterSpacing:xz("D4.letterSpacing"),fontVariant:xz("D4.fontVariant")},DBody:{fontFamily:xz("DBody.fontFamily"),fontSize:xz("DBody.fontSize"),fontWeight:xz("DBody.fontWeight"),lineHeight:xz("DBody.lineHeight"),letterSpacing:xz("DBody.letterSpacing"),fontVariant:xz("DBody.fontVariant")},H1:{fontFamily:xz("H1.fontFamily"),fontSize:xz("H1.fontSize"),fontWeight:xz("H1.fontWeight"),lineHeight:xz("H1.lineHeight"),letterSpacing:xz("H1.letterSpacing"),fontVariant:xz("H1.fontVariant")},H2:{fontFamily:xz("H2.fontFamily"),fontSize:xz("H2.fontSize"),fontWeight:xz("H2.fontWeight"),lineHeight:xz("H2.lineHeight"),letterSpacing:xz("H2.letterSpacing"),fontVariant:xz("H2.fontVariant")},H3:{fontFamily:xz("H3.fontFamily"),fontSize:xz("H3.fontSize"),fontWeight:xz("H3.fontWeight"),lineHeight:xz("H3.lineHeight"),letterSpacing:xz("H3.letterSpacing"),fontVariant:xz("H3.fontVariant")},H4:{fontFamily:xz("H4.fontFamily"),fontSize:xz("H4.fontSize"),fontWeight:xz("H4.fontWeight"),lineHeight:xz("H4.lineHeight"),letterSpacing:xz("H4.letterSpacing"),fontVariant:xz("H4.fontVariant")},H5:{fontFamily:xz("H5.fontFamily"),fontSize:xz("H5.fontSize"),fontWeight:xz("H5.fontWeight"),lineHeight:xz("H5.lineHeight"),letterSpacing:xz("H5.letterSpacing"),fontVariant:xz("H5.fontVariant")},H6:{fontFamily:xz("H6.fontFamily"),fontSize:xz("H6.fontSize"),fontWeight:xz("H6.fontWeight"),lineHeight:xz("H6.lineHeight"),letterSpacing:xz("H6.letterSpacing"),fontVariant:xz("H6.fontVariant")},Body:{fontFamily:xz("Body.fontFamily"),fontSize:xz("Body.fontSize"),fontWeight:xz("Body.fontWeight"),lineHeight:xz("Body.lineHeight"),letterSpacing:xz("Body.letterSpacing"),fontVariant:xz("Body.fontVariant")},BodySmall:{fontFamily:xz("BodySmall.fontFamily"),fontSize:xz("BodySmall.fontSize"),fontWeight:xz("BodySmall.fontWeight"),lineHeight:xz("BodySmall.lineHeight"),letterSpacing:xz("BodySmall.letterSpacing"),fontVariant:xz("BodySmall.fontVariant")},XSmall:{fontFamily:xz("XSmall.fontFamily"),fontSize:xz("XSmall.fontSize"),fontWeight:xz("XSmall.fontWeight"),lineHeight:xz("XSmall.lineHeight"),letterSpacing:xz("XSmall.letterSpacing"),fontVariant:xz("XSmall.fontVariant")}},$z=[mz.OpenSans,mz.PlusJakartaSans],Cz=(e,t)=>{switch(t){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},Sz=(e,t)=>r=>{var n,o,a,s,l;const c=null===(o=(n=wz[e]).fontFamily)||void 0===o?void 0:o.call(n,r),d=null===(s=(a=wz[e]).fontWeight)||void 0===s?void 0:s.call(a,r),u=$z.find((e=>Object.values(e).includes(c)));return u?i.css`
                font-family: ${Cz(u,t)||Cz(u,d)||c};
                font-weight: normal !important;
            `:i.css`
            font-family: ${c};
            font-weight: ${null!==(l=jz(t)||d)&&void 0!==l?l:"normal"};
        `},jz=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},kz=e=>{if(e)return i.css`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},Dz={getFontFamily:Sz,getTextStyle:(e,t,r=!1)=>n=>{var o,a,s;const l=wz[e],c=(null===(o=l.fontSize)||void 0===o?void 0:o.call(l,n))||1;return i.css`
            ${Sz(e,t)}
            font-size: ${c}rem !important;
            line-height: ${l.lineHeight}rem !important;
            letter-spacing: ${(null===(a=l.letterSpacing)||void 0===a?void 0:a.call(l,n))||0}rem !important;
            font-variant: ${(null===(s=l.fontVariant)||void 0===s?void 0:s.call(l,n))||"normal"};
            ${(()=>{const e=r?1.05:0;return i.css`
                margin-bottom: ${c*e}rem;
            `})()}
        `},getDisplayStyle:(e=!1,t=!1,r=void 0)=>t?i.css`
            display: block;
            ${kz(r)}
        `:e?i.css`
            display: inline;
        `:i.css`
            display: block;
            ${kz(r)}
        `};var Tz;exports.V2_Text=void 0,(Tz=exports.V2_Text||(exports.V2_Text={})).D1=K.default.h1`
        ${e=>i.css`
                ${Dz.getTextStyle("D1",e.weight,e.paragraph)}
                color: ${gz.Neutral[1]};
                ${Dz.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,Tz.D2=K.default.h1`
        ${e=>i.css`
                ${Dz.getTextStyle("D2",e.weight,e.paragraph)}
                color: ${gz.Neutral[1]};
                ${Dz.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,Tz.D3=K.default.h1`
        ${e=>i.css`
                ${Dz.getTextStyle("D3",e.weight,e.paragraph)}
                color: ${gz.Neutral[1]};
                ${Dz.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,Tz.D4=K.default.h1`
        ${e=>i.css`
                ${Dz.getTextStyle("D4",e.weight,e.paragraph)}
                color: ${gz.Neutral[1]};
                ${Dz.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,Tz.DBody=K.default.h1`
        ${e=>i.css`
                ${Dz.getTextStyle("DBody",e.weight,e.paragraph)}
                color: ${gz.Neutral[1]};
                ${Dz.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,Tz.H1=K.default.h1`
        ${e=>i.css`
                ${Dz.getTextStyle("H1",e.weight,e.paragraph)}
                color: ${gz.Neutral[1]};
                ${Dz.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,Tz.H2=K.default.h2`
        ${e=>i.css`
                ${Dz.getTextStyle("H2",e.weight,e.paragraph)}
                color: ${gz.Neutral[1]};
                ${Dz.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,Tz.H3=K.default.h3`
        ${e=>i.css`
                ${Dz.getTextStyle("H3",e.weight,e.paragraph)}
                color: ${gz.Neutral[1]};
                ${Dz.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,Tz.H4=K.default.h4`
        ${e=>i.css`
                ${Dz.getTextStyle("H4",e.weight,e.paragraph)}
                color: ${gz.Neutral[1]};
                ${Dz.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,Tz.H5=K.default.h5`
        ${e=>i.css`
                ${Dz.getTextStyle("H5",e.weight,e.paragraph)}
                color: ${gz.Neutral[1]};
                ${Dz.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,Tz.H6=K.default.h6`
        ${e=>i.css`
                ${Dz.getTextStyle("H6",e.weight,e.paragraph)}
                color: ${gz.Neutral[1]};
                ${Dz.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,Tz.Body=K.default.p`
        ${e=>i.css`
                ${Dz.getTextStyle("Body",e.weight,e.paragraph)}
                color: ${gz.Neutral[1]};
                ${Dz.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,Tz.BodySmall=K.default.p`
        ${e=>i.css`
                ${Dz.getTextStyle("BodySmall",e.weight,e.paragraph)}
                color: ${gz.Neutral[1]};
                ${Dz.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,Tz.XSmall=K.default.span`
        ${e=>i.css`
                ${Dz.getTextStyle("XSmall",e.weight,e.paragraph)}
                color: ${gz.Neutral[1]};
                ${Dz.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,Tz.Hyperlink={Default:e=>Iz(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>Iz(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))};const Ez=K.default.a`
    ${e=>i.css`
            ${Dz.getTextStyle(e.textStyle,e.weight)}
            color: ${gz.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${gz.Secondary};

                svg {
                    color: ${gz.Secondary};
                }
            }
        `}
`,Oz=K.default(o.ExternalIcon)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,Iz=t=>{var{external:r=!1,children:n}=t,i=X(t,["external","children"]);return e.jsxs(Ez,Object.assign({},i,{children:[n,r&&e.jsx(Oz,{})]}))},Fz={Base:"all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",Custom:e=>`all ${e}ms cubic-bezier(0.21, 0.79, 0.53, 1)`},Mz=K.default.div`
    max-width: 30rem;
    pointer-events: auto;
    position: absolute;

    ${e=>e.$visible?i.css`
            visibility: visible;
            opacity: 1;
            transition: ${Fz.Base};
            z-index: 50;
        `:i.css`
            visibility: hidden;
            opacity: 0;
            transition: ${Fz.Base};
            z-index: -1;
        `}
    ${e=>(e=>{switch(e){case"top-center":return i.css`
                top: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 50%;
                -moz-transform: translateX(-50%);
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);
            `;case"top-left":return i.css`
                top: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 0;
            `;case"top-right":return i.css`
                top: calc(100% + 12px);
                width: max-content;
                margin: auto;
                right: 0;
            `;case"left":return i.css`
                bottom: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 0;
            `;case"right":return i.css`
                bottom: calc(100% + 12px);
                width: max-content;
                margin: auto;
                right: 0;
            `;default:return i.css`
                bottom: calc(100% + 12px);
                width: max-content;
                margin: auto;
                left: 50%;
                -moz-transform: translateX(-50%);
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);
            `}})(e.$offset)}

	${Lh.MaxWidth.mobileL} {
        display: none;
    }
`,_z=K.default(up)`
    padding: 3.5rem 1.25rem 2.5rem;
`,Az=K.default.div`
    position: relative;
    width: fit-content;
`,Bz=K.default.button`
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
`,Rz=K.default.div`
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }
`,zz=r=>{var{children:n,visible:i,onMobileClose:o}=r,a=X(r,["children","visible","onMobileClose"]);const s=a["data-testid"]||"popover",[l,c]=t.useState("none"),d=t.useRef(null),u=oc.useMediaQuery({maxWidth:zh.mobileL}),f=t.useRef(l);t.useEffect((()=>(g(),window.addEventListener("resize",Iu(h,300)),()=>{window.removeEventListener("resize",Iu(h,300))})),[]);const h=()=>{g()},p=()=>{o&&o()},g=()=>{const e=m();var t;e&&(t=e,f.current=t,c(t))},m=()=>{if(d.current){const e=d.current.getBoundingClientRect(),t=24,r=e.y<t,n=window.innerWidth-t;return e.x<t?r?"top-left":"left":e.x+e.width>n?r?"top-right":"right":("top-left"===f.current||"left"===f.current)&&e.x-e.width/2>t||("top-right"===f.current||"right"===f.current)&&e.x+2*e.width<n?r?"top-center":"none":r?"top-center":void 0}},b=()=>"string"==typeof n?e.jsx(exports.V2_Text.BodySmall,{children:n}):n;return e.jsxs(e.Fragment,{children:[e.jsx(Mz,Object.assign({ref:d,"data-testid":s,$visible:i,$offset:l},a,{children:e.jsx(nu,{children:b()})})),u&&e.jsx(lp,{show:null!=i&&i,onOverlayClick:p,children:e.jsx(_z,{onClose:p,children:e.jsx(Rz,{children:b()})})})]})},Pz=K.default.div`
    position: relative;
    width: 100%;

    margin: 2rem 0;

    ${el.MaxWidth.xl} {
        margin: 1.5rem 0;
    }

    ${el.MaxWidth.lg} {
        margin: 1rem 0;
    }
`,Lz=K.default.div`
    display: flex;
    flex-basis: 0;
    justify-content: space-between;
    width: 100%;
`,Nz=K.default.div`
    height: 0.25rem;
    margin-bottom: 0.5rem;
    border-radius: 0.25rem;
    ${e=>{const{highlighted:t}=e;return`\n            background-color: ${(t?Ks["bg-primary-subtle"]:Ks["bg-disabled"])(e)};\n        `}};
`,Hz=K.default(exports.Typography.BodyMD)`
    overflow-wrap: anywhere;
    ${e=>{const{highlighted:t}=e;return`color: ${(t?Ks["text-primary"]:Ks["text-disabled"])(e)};`}};
`,Wz=K.default(exports.Typography.BodyMD)`
    overflow-wrap: anywhere;
    color: ${Ks.text};
`,Vz=K.default.div`
    display: flex;
    flex-direction: column;
    flex: 1;

    &:not(:last-child) {
        margin-right: ${"0.5rem"};
    }
`;var Yz=function(e){return function(t){return null==e?void 0:e[t]}},Uz=Yz({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),Kz=qa,qz=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Xz=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");var Gz=function(e){return(e=Kz(e))&&e.replace(qz,Uz).replace(Xz,"")},Zz=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;var Qz=function(e){return e.match(Zz)||[]},Jz=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;var eP=function(e){return Jz.test(e)},tP="\\ud800-\\udfff",rP="\\u2700-\\u27bf",nP="a-z\\xdf-\\xf6\\xf8-\\xff",iP="A-Z\\xc0-\\xd6\\xd8-\\xde",oP="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",aP="["+oP+"]",sP="\\d+",lP="["+rP+"]",cP="["+nP+"]",dP="[^"+tP+oP+sP+rP+nP+iP+"]",uP="(?:\\ud83c[\\udde6-\\uddff]){2}",fP="[\\ud800-\\udbff][\\udc00-\\udfff]",hP="["+iP+"]",pP="(?:"+cP+"|"+dP+")",gP="(?:"+hP+"|"+dP+")",mP="(?:['’](?:d|ll|m|re|s|t|ve))?",bP="(?:['’](?:D|LL|M|RE|S|T|VE))?",vP="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",yP="[\\ufe0e\\ufe0f]?",xP=yP+vP+("(?:\\u200d(?:"+["[^"+tP+"]",uP,fP].join("|")+")"+yP+vP+")*"),wP="(?:"+[lP,uP,fP].join("|")+")"+xP,$P=RegExp([hP+"?"+cP+"+"+mP+"(?="+[aP,hP,"$"].join("|")+")",gP+"+"+bP+"(?="+[aP,hP+pP,"$"].join("|")+")",hP+"?"+pP+"+"+mP,hP+"+"+bP,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",sP,wP].join("|"),"g");var CP=Qz,SP=eP,jP=qa,kP=function(e){return e.match($P)||[]};var DP=PO,TP=Gz,EP=function(e,t,r){return e=jP(e),void 0===(t=r?void 0:t)?SP(e)?kP(e):CP(e):e.match(t)||[]},OP=RegExp("['’]","g");var IP=Oi(function(e){return function(t){return DP(EP(TP(t).replace(OP,"")),e,"")}}((function(e,t,r){return e+(r?"-":"")+t.toLowerCase()})));const FP=K.default.div`
    display: flex;
    justify-content: center;
    align-items: center;
    ${e=>"small"===e.$displaySize?i.css`
                height: 1.5rem;
                width: 1.5rem;
            `:i.css`
                height: 2rem;
                width: 2rem;
            `}
    position: relative;
`,MP=K.default(u.CircleIcon)`
    height: 100%;
    width: 100%;
    color: ${e=>e.$disabled?Ks["icon-disabled-subtle"](e):Ks["icon-subtle"](e)};
    transition: ${Xs["duration-150"]} ${Xs["ease-default"]};
`,_P=K.default(u.CircleDotIcon)`
    height: 100%;
    width: 100%;
    color: ${e=>e.$disabled?Ks["icon-selected-disabled"](e):Ks["icon-selected"](e)};

    transition: ${Xs["duration-150"]} ${Xs["ease-default"]};
`,AP=K.default.input`
    position: absolute;
    height: 100%;
    width: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    z-index: 1;

    appearance: none;
    background: transparent;
    border: none;

    &:hover + ${MP}, &:hover + ${_P} {
        color: ${e=>!e.disabled&&Ks["icon-hover"](e)};
    }
`,BP=K.default.div`
    display: flex;
    position: ${e=>e.$fixed?"fixed":"relative"};
    width: fit-content;
`,RP=K.default.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    width: 8.5rem;
    border: ${Gs["width-010"]} ${Gs.solid} ${Ks.border};
    background-color: ${Ks["bg-primary-subtlest"]};
    padding: 0.5rem 0 1.5rem 0;
`,zP=K.default(RP)`
    height: 100vh;
    left: 0;
    top: 0;
    ${el.MaxWidth.sm} {
        display: none;
        visibility: hidden;
    }
`,PP=K.default(RP)`
    display: none;
    visibility: hidden;
    ${el.MaxWidth.sm} {
        display: none; // NOTE: Since mobile view not supported yet
    }
`,LP=K.default(Ti.ul)`
    display: flex;
    flex-direction: column;
    overflow: auto;
    left: 8.5rem;
    top: 0;
    width: 15rem;
    z-index: 10;
    padding: 1rem 0.5rem;
    background-color: ${Ks["bg-primary-subtlest"]};
    border-top-right-radius: ${Qs.md};
    border-bottom-right-radius: ${Qs.md};
    border: ${Gs["width-010"]} ${Gs.solid} ${Ks.border};

    ${e=>e.$showDrawer?i.css`
                  box-shadow: 0 0 4px
                      rgb(from ${Ks.Primitive["neutral-20"]} r g b / 25%);
              `:i.css`
                  border: 0;
                  padding: 0;
              `};
`,NP=K.default.li`
    width: 100%;
`,HP=K.default.span`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.25rem 1rem;
    border-radius: ${Qs.md};
    color: ${Ks["icon-primary"]};
    transition: ${Xs["duration-250"]} ${Xs["ease-default"]};

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }
`,WP=K.default(exports.Typography.BodyXS)`
    ${il(2)}
    margin-top: 0.25rem;
    transition: ${Xs["duration-250"]} ${Xs["ease-default"]};
`,VP=K.default(jf)`
    width: 100%;
    margin-top: 1rem;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:hover,
    &:focus {
        ${HP} {
            background-color: ${Ks["bg-hover"]};
        }

        ${WP} {
            ${qs["body-xs-semibold"]}
            color: ${Ks["text-hover"]};
        }
    }

    ${e=>e.$highlight&&i.css`
            ${HP} {
                background-color: ${Ks["bg-hover"]};
            }

            ${WP} {
                ${qs["body-xs-semibold"]}
                color: ${Ks["text-selected"]};
            }
        `}
`,YP=t.createContext({selectedItem:void 0,currentItem:void 0,previouslySelectedItemId:void 0,setCurrentItem:()=>{},setPreviouslySelectedItemId:()=>{},setSelectedItem:()=>{}}),UP=K.default.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    list-style: none;
`,KP=K.default.li`
    margin-top: 1rem;
    width: 6.5rem;
    height: 1px;
    background-color: ${Ks.border};
`,qP=K.default(Ti.li)``,XP=K.default(jf)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: ${Qs.md};

    ${qs["body-md-semibold"]}
    color: ${Ks.text};

    ${e=>e.$noChildren?i.css`
                  :hover,
                  :focus {
                      background: ${Ks["bg-hover"]};
                      color: ${Ks["text-hover"]};
                  }
              `:i.css`
                  :hover,
                  :focus {
                      background: ${Ks["bg-hover-strong"]};
                  }
              `}
`,GP=K.default(Ti.div)`
    margin: 0.125rem 0 0.125rem 0.5rem;
    overflow: hidden;
`,ZP=K.default(n.ChevronUpIcon)`
    flex-shrink: 0;
    color: ${Ks.icon};
    transform: rotate(${e=>e.$expanded?0:180}deg);
    transition: transform ${Xs["duration-150"]} ${Xs["ease-default"]};
`,QP=K.default.span`
    ${il(2)}
    text-align: left;
`,JP=K.default(Ti.ul)``,eL=K.default.li``,tL=K.default(jf)`
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: ${Qs.md};

    ${qs["body-md-regular"]}
    color: ${Ks.text};
    ${il(2)}
    text-align: left;

    :hover,
    :focus {
        background-color: ${Ks["bg-hover"]};
        color: ${Ks["text-hover"]};
    }
`,rL=Object.assign((r=>{var{fixed:n=!0,children:i}=r,o=X(r,["fixed","children"]);const a=t.useRef(null),[s,l]=t.useState(void 0),[c,d]=t.useState(void 0),[u,f]=t.useState(void 0),[h,p]=t.useState(!1),g=t.useMemo((()=>({currentItem:s,selectedItem:c,previouslySelectedItemId:u,setCurrentItem:l,setSelectedItem:d,setPreviouslySelectedItemId:f})),[s,c,u,l,d,f]),m=di({width:h?240:0,borderRightWidth:h?1:0,borderTopWidth:h?1:0,borderBottomWidth:h?1:0,borderLeftWidth:0});return Wc("click",(e=>{a.current&&!a.current.contains(e.target)&&(d({itemId:u||(c?c.itemId:void 0),content:void 0}),f(void 0),l(void 0))}),"window",!0),t.useEffect((()=>{p(!!(null==c?void 0:c.content)||!!(null==s?void 0:s.content))}),[s,c]),e.jsx(YP.Provider,{value:g,children:e.jsxs(BP,Object.assign({$fixed:n},o,{ref:a,onMouseLeave:()=>{l(void 0)},children:[e.jsx(zP,{children:i}),e.jsx(LP,{style:m,$showDrawer:h,"data-testid":"sidenav-drawer",children:s&&s.content||c&&c.content}),e.jsx(PP,{})]}))})}),{Group:t=>{var{separator:r,children:n}=t,i=X(t,["separator","children"]);return e.jsxs(UP,Object.assign({},i,{children:[n,r&&e.jsx(KP,{"data-testid":"divider"})]}))},Item:r=>{var{children:n,icon:i,title:o,onClick:a}=r,s=X(r,["children","icon","title","onClick"]);const l=s.id||o.toLowerCase().replaceAll(" ","-"),{currentItem:c,previouslySelectedItemId:d,selectedItem:u,setCurrentItem:f,setPreviouslySelectedItemId:h,setSelectedItem:p}=t.useContext(YP);t.useEffect((()=>{s.selected&&p({itemId:l,content:void 0})}),[s.selected]);return e.jsx(NP,{children:e.jsxs(VP,Object.assign({type:"button",onClick:()=>{h((()=>{if(n&&u)return d||u.itemId})()),f({itemId:l,content:n}),p({itemId:l,content:n}),a&&!n&&a(l)},onMouseEnter:()=>{f({itemId:l,content:n})}},s,{$highlight:!!u&&u.itemId===l||!!c&&c.itemId===l,children:[e.jsx(HP,{children:i}),e.jsx(WP,{children:o})]}))})},DrawerItem:r=>{var{id:n,title:i,onClick:o,children:a}=r,s=X(r,["id","title","onClick","children"]);const[l,c]=t.useState(!0),[d,u]=t.useState(!1),{currentItem:f,setSelectedItem:h,setPreviouslySelectedItemId:p,setCurrentItem:g}=t.useContext(YP),m=di({from:{opacity:0},to:{opacity:1}}),b=qe(),v=b.ref,y=di({height:a&&l?b.height:0});return e.jsxs(qP,Object.assign({onMouseEnter:()=>{u(!0)},onMouseLeave:()=>{u(!1)}},s,{style:m,children:[e.jsxs(XP,{type:"button",onClick:()=>{a?c(!l):(h({itemId:null==f?void 0:f.itemId,content:void 0}),g(void 0),p(void 0),o&&o(n))},$highlight:d&&l,$noChildren:!a,children:[e.jsx(QP,{children:i}),a&&e.jsx(ZP,{"aria-hidden":!0,$expanded:l})]}),e.jsx(GP,{style:y,children:e.jsx(JP,{ref:v,children:a})})]}))},DrawerSubitem:r=>{var{id:n,title:i,onClick:o}=r,a=X(r,["id","title","onClick"]);const{currentItem:s,setSelectedItem:l,setCurrentItem:c,setPreviouslySelectedItemId:d}=t.useContext(YP);return e.jsx(eL,Object.assign({},a,{children:e.jsx(tL,{type:"button",onClick:()=>{o&&o(n),l({itemId:null==s?void 0:s.itemId,content:void 0}),c(void 0),d(void 0)},children:i})}))}}),nL=i.keyframes`
	from {
		opacity: 0;
		transform: translateY(-20%);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
`,iL=K.default.div`
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
    background: ${Ks.bg};
    box-shadow: 0 0.125rem 0.5rem rgba(104, 104, 104, 0.25);
    border-radius: ${Qs.md};
    ${e=>{if(e.$isAnimated)return i.css`
                animation: ${nL} 0.3s;
            `}}
`,oL=K.default.div`
    display: flex;
    align-items: center;
    padding: 0.5rem 0.25rem 0.5rem 1rem;
`,aL=K.default(nl)`
    padding: 0;
`,sL=K.default(m.CrossIcon)`
    color: ${Ks.icon};
    height: 1.25rem;
    width: 1.25rem;
`,lL=K.default.div`
    flex: 1;
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem 0.5rem 0.25rem;
    cursor: pointer;
`,cL=K.default.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: left;
    margin: 0.5rem;
    ${el.MaxWidth.xs} {
        margin: 0 0.5rem;
    }
`,dL=K.default.img`
    width: 2.65rem;
    height: auto;
    align-self: center;
`,uL=K.default.div`
    max-width: 30%;
`,fL=K.default(Il.Small)`
    padding: 0.5rem;
    height: auto;
    & > span {
        overflow-wrap: anywhere;
        ${qs["body-xs-semibold"]}
    }
`,hL=K.default(exports.Typography.BodySM)`
    font-weight: ${qs.Spec["weight-bold"]};
    overflow-wrap: anywhere;
    ${el.MaxWidth.xs} {
        ${qs["body-xs-bold"]}
    }
`,pL=K.default(exports.Typography.BodyXS)`
    overflow-wrap: anywhere;
`,gL=K.default.div`
    margin-top: 0.25rem;
    display: flex;
    align-items: center;
`,mL=i.css`
    height: 2rem;
    width: 2rem;
    padding-right: 0.25rem;
    color: #ffc107;
`,bL=K.default(v.StarFillIcon)`
    ${mL}
`,vL=K.default(H.StarHalfIcon)`
    ${mL}
`,yL=K.default(b.StarIcon)`
    ${mL}
`,xL="https://assets.life.gov.sg/react-design-system/img/app-icon/app-icon.png",wL="smart-app-banner";const $L=Y.default.forwardRef((function(t,r){const{className:n,show:i,href:o,content:a,offset:s=0,icon:l=xL,animated:c=!1,onDismiss:d,onClick:u}=t,{title:f,message:h,buttonLabel:p,buttonAriaLabel:g,numberOfStars:m}=a,b=e=>{e.stopPropagation(),window.open(o,"_blank","noreferrer"),null==u||u()};return e.jsx(e.Fragment,{children:i&&e.jsxs(iL,{ref:r,$isAnimated:c,$offset:s,className:n,children:[e.jsx(oL,{onClick:d,id:`${wL}-dismiss`,"data-testid":`${wL}-dismiss-container`,children:e.jsx(aL,{"aria-label":"Dismiss",children:e.jsx(sL,{})})}),e.jsxs(lL,{onClick:b,id:`${wL}-proceed`,"data-testid":`${wL}-proceed-container`,children:[e.jsx(dL,{src:l,alt:"lifesg-app-icon"}),e.jsxs(cL,{children:[e.jsx(hL,{children:f}),e.jsx(pL,{children:h}),(()=>{if(isNaN(m)||m<0)return;const t=[],r=m-Math.floor(m)>=.4;for(let r=0;r<Math.floor(m);r++)t.push(e.jsx(bL,{},`star${r}`));if(r&&t.push(e.jsx(vL,{},"halfstar")),t.length<5){const r=5-t.length;for(let n=0;n<r;n++)t.push(e.jsx(yL,{},`emptystar${n}`))}return e.jsx(gL,{children:t.slice(0,5)})})()]}),e.jsx(uL,{children:e.jsx(fL,{type:"button",onClick:b,"aria-label":g,children:p})})]})]})})})),CL=Y.default.createContext({currentActiveIndex:0,tabLinks:[],setCurrentActiveIndex:()=>{}}),SL=K.default.div`
    position: relative;
    width: 100%;
`,jL=K.default.div`
    width: 64px;
    height: 100%;
    top: 0;
    position: absolute;
    pointer-events: none;
    display: flex;
    align-items: center;

    ${e=>{let t;const r="rgba(255,255,255,0.001)";return t="left"===e.$position?`\n                left: 0;\n                background-image: linear-gradient(\n                    to right,\n                    ${e.$backgroundColor||(e.$showIndicator?"white, white":"white")},\n                    ${r}\n                );\n            `:`\n                right: 0;\n                background-image: linear-gradient(\n                    to left,\n                    ${e.$backgroundColor||(e.$showIndicator?"white, white":"white")},\n                    ${r}\n                );\n            `,i.css`
            ${el.MaxWidth.lg} {
                ${t}
            }
        `}};
`,kL=K.default.div`
    position: relative;
    width: 100%;
    height: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 10+ */
    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }
`,DL=K.default(nl)`
    display: none;

    ${el.MaxWidth.lg} {
        display: flex;
        height: 100%;
        width: 100%;
        padding: unset;
        align-items: center;

        ${e=>"left"===e.$position?i.css`
                    justify-content: left;
                    padding-left: ${Zs["spacing-8"]};
                `:i.css`
                    justify-content: right;
                    padding-right: ${Zs["spacing-8"]};
                `}

        svg {
            color: ${Ks.icon};
        }
    }
`,TL=t.forwardRef(((r,n)=>{var{children:i,fadeColor:o,fadePosition:a="both",showIndicator:s=!1,onResize:l}=r,c=X(r,["children","fadeColor","fadePosition","showIndicator","onResize"]);const[d,u]=t.useState("left"===a||"both"===a),[f,g]=t.useState("right"===a||"both"===a),m=t.useRef(null),b=t.useRef(null),v=Bu(y,50);function y(){const e=m.current,t=b.current;e&&t&&t.scrollWidth>e.offsetWidth?(g(Math.round(t.scrollLeft)<t.scrollWidth-t.offsetWidth),u(t.scrollLeft>=1)):(g(!1),u(!1))}function x(){y(),l&&l({content:b.current,wrapper:m.current})}qe({onResize:x,targetRef:m,refreshMode:"debounce",refreshRate:50}),t.useImperativeHandle(n,(()=>({resize(){x()}}))),t.useEffect((()=>{const e=b.current;return y(),e&&e.addEventListener("scroll",v),()=>{e&&e.removeEventListener("scroll",v)}}),[]);return e.jsxs(SL,Object.assign({ref:m},c,{children:[e.jsx(kL,{ref:b,children:i}),(()=>{let t;return t=Array.isArray(o)&&o.length>0?{left:o,right:o}:o||{left:void 0,right:void 0},e.jsxs(e.Fragment,{children:[d&&e.jsx(jL,{$backgroundColor:t.left,$position:"left",$showIndicator:s,"data-id":"left-fade",children:s&&e.jsx(DL,{$position:"left","data-id":"left-fade-indicator-button",children:e.jsx(p.ChevronLeftIcon,{})})}),f&&e.jsx(jL,{$backgroundColor:t.right,$position:"right",$showIndicator:s,"data-id":"right-fade",children:s&&e.jsx(DL,{$position:"right","data-id":"right-fade-indicator-button",children:e.jsx(h.ChevronRightIcon,{})})})]})})()]}))})),EL=K.default.ul`
    display: inline-flex;
    width: 100%;
    list-style-type: none;

    ${e=>{if(e.$fullWidthIndicatorLine)return i.css`
                ::after {
                    content: "";
                    height: inherit;
                    flex-grow: 1;
                    /* follows the border in ChainItem */
                    border-bottom: ${Gs["width-040"]} ${Gs.solid}
                        ${Ks.border};
                }
            `}}
`,OL=K.default.li`
    display: flex;
    flex-shrink: 0;
    border-bottom: ${Gs["width-040"]} ${Gs.solid} ${Ks.border};

    ${e=>{if(e.$active)return i.css`
                border-color: ${Ks["border-primary"]};
            `}}

    ${el.MaxWidth.sm} {
        flex: 1;
        justify-content: center;
    }
`,IL=K.default.button`
    position: relative;
    padding: ${Zs["spacing-16"]} ${Zs["spacing-16"]}
        ${Zs["spacing-20"]};
    border: none;
    background: none;
    cursor: pointer;
`,FL=K.default(exports.Typography.BodyBL)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, calc(-50% - 0.125rem)); // Based on testing
    color: ${Ks["text-subtler"]};
    opacity: 1;

    ${e=>{if(e.$active)return i.css`
                opacity: 0;
            `}}
`,ML=K.default(exports.Typography.BodyBL)`
    color: ${Ks["text-primary"]};
    opacity: 0;
    ${e=>{if(e.$active)return i.css`
                opacity: 1;
            `}}
`,_L=K.default(TL)`
    [data-id="left-fade-indicator-button"],
    [data-id="right-fade-indicator-button"] {
        margin-bottom: ${Zs["spacing-4"]};
    }
`,AL=({controlledMode:r,"data-testid":n,onTabClick:o,fullWidthIndicatorLine:a})=>{const{setCurrentActiveIndex:s,currentActiveIndex:l,tabLinks:c}=t.useContext(CL),d=i.useTheme(),u=Js["md-max"]({theme:d}),f=oc.useMediaQuery({maxWidth:u}),h=Js["lg-max"]({theme:d}),p=t.useRef(null),g=e=>t=>{t.preventDefault(),r||s(e),o&&o(c[e].title,e)},m=e=>f&&e.length>20?`${e.substring(0,20)}...`:e;return e.jsx(_L,{onResize:({content:e,wrapper:t})=>{e&&t&&window.innerWidth<=h&&p.current&&(e.scrollLeft=p.current.getBoundingClientRect().left)},"data-testid":n,children:e.jsx(EL,{role:"tablist",$fullWidthIndicatorLine:a,children:c.map(((t,r)=>{const i=l===r;return e.jsx(OL,{role:"none",$active:i,ref:i?p:null,children:e.jsxs(IL,{role:"tab",type:"button","aria-selected":i,onClick:g(r),"data-testid":`${n}-link-${r}`,children:[e.jsx(FL,{$active:i,weight:"regular",children:m(t.title)}),e.jsx(ML,{$active:i,weight:"semibold","aria-hidden":"true",children:m(t.title)})]})},r)}))})})},BL=K.default.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`,RL=Object.assign((r=>{var{children:n,currentActive:i,initialActive:o=0,onTabClick:a,"data-testid":s,fullWidthIndicatorLine:l}=r,c=X(r,["children","currentActive","initialActive","onTabClick","data-testid","fullWidthIndicatorLine"]);const[d,u]=t.useState(i||o),[f,h]=t.useState([]);t.useEffect((()=>{const e=t.Children.toArray(n).filter(Boolean);p(e)}),[n]),t.useEffect((()=>{"number"==typeof i&&u(i)}),[i]);const p=e=>{const t=e.map((e=>({title:e.props.title})));h(t)};return e.jsx(BL,Object.assign({"data-testid":s},c,{children:e.jsxs(CL.Provider,{value:{tabLinks:f,currentActiveIndex:d,setCurrentActiveIndex:u},children:[e.jsx(AL,{controlledMode:"number"==typeof i,onTabClick:a,"data-testid":`${s}-tabs`,fullWidthIndicatorLine:l}),t.Children.toArray(n).filter(Boolean).map(((e,r)=>t.cloneElement(e,{key:r,index:r})))]})}))}),{Item:r=>{var{index:n,children:i}=r,o=X(r,["index","children"]);const{currentActiveIndex:a}=t.useContext(CL);return a===n?e.jsx("div",Object.assign({role:"tabpanel"},o,{children:i})):null}}),zL=K.default.div`
    border-radius: 4px;
    padding: 0.125rem 0.5rem;
    width: fit-content;
    max-width: 100%;
    ${qs["body-xs-semibold"]}
    transition: all 200ms ease;
    cursor: ${({$interactive:e})=>e?"pointer":"default"};
    display: flex;
    align-items: center;
    gap: 0.25rem;

    svg {
        flex-shrink: 0;
    }

    ${e=>{let t,r,n,o,a;if("solid"===e.$type)switch(n=Ks["text-inverse"],e.$color){case"grey":t=Ks["bg-inverse-subtler"],o=Ks["bg-inverse-hover"];break;case"green":t=Ks["bg-success-strong"],o=Ks["bg-success-strong-hover"];break;case"yellow":t=Ks["bg-warning-strong"],o=Ks["bg-warning-strong-hover"];break;case"red":t=Ks["bg-error-strong"],o=Ks["bg-error-strong-hover"];break;case"blue":t=Ks["bg-info-strong"],o=Ks["bg-info-strong-hover"];break;default:t=Ks["bg-inverse"],o=Ks["bg-inverse-hover"]}else switch(e.$color){case"grey":t=Ks["bg-strong"],r=Ks["border-strong"],n=Ks["text-subtle"],o=Ks["bg-hover-neutral-strong"];break;case"green":t=Ks["bg-success"],r=Ks["border-success"],n=Ks["text-success"],o=Ks["bg-success-hover"];break;case"yellow":t=Ks["bg-warning"],r=Ks["border-warning"],n=Ks["text-warning"],o=Ks["bg-warning-hover"];break;case"red":t=Ks["bg-error"],r=Ks["border-error"],n=Ks["text-error"],o=Ks["bg-error-hover"];break;case"blue":t=Ks["bg-info"],r=Ks["border-info"],n=Ks["text-info"],o=Ks["bg-info-hover"];break;default:t=Ks.bg,r=Ks.border,n=Ks.text,o=Ks["bg-hover-neutral"]}return i.css`
            background: ${t};
            border: ${Gs["width-010"]} ${Gs.solid} ${r};
            color: ${n};
            @media (hover: hover) {
                &:hover {
                    ${e.$interactive&&o&&`background: ${o(e)};`}
                    ${e.$interactive&&a}
                }
            }
        `}}

    ${el.MaxWidth.lg} {
        ${({$interactive:e})=>{if(e)return i.css`
                    ${qs["body-md-semibold"]}
                    padding: calc(0.5rem - 1px) 1rem;
                `}}
    }
`,PL=K.default.div`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-align: left;
`;var LL;xc.extend($c),function(e){e.formatHourlyDisplay=e=>xc(e,"HH:mm").format("ha"),e.calculateWidth=(e,t,r)=>zc.getTimeDiffInMinutes(e,t)/15*(r/2)}(LL||(LL={}));const NL=1.25,HL=e=>"minified"===e?12:40,WL=e=>"minified"===e?12:40,VL=K.default.div`
    position: relative;
    display: flex;
    align-items: center;
`,YL=K.default(nl)`
    z-index: 2;
    position: absolute;
    bottom: ${({$variant:e})=>"default"===e?"0.25rem":"0rem"};
    background-color: ${Ks.bg};
    box-shadow: 0px 2px 8px
        rgb(from ${Ks.Primitive["neutral-50"]} r g b / 50%);
    border-radius: 50%;
    padding: 0.5rem;
    width: 2rem;
    height: 2rem;

    ${e=>"right"===e.$direction?i.css`
                  right: 0;
              `:i.css`
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
`,UL=K.default(h.ChevronRightIcon)`
    width: 1rem;
    height: 1rem;
    color: ${Ks["icon-primary"]};
`,KL=K.default(p.ChevronLeftIcon)`
    font-size: 1rem;
    color: ${Ks["icon-primary"]};
`,qL=K.default.div`
    overflow: hidden;
    flex-grow: 1;
    position: relative;
    height: ${({$variant:e})=>`${20+WL(e)}px`};
`,XL=K.default.div`
    position: relative;
    white-space: nowrap;
    height: ${NL}rem;
`,GL=K.default.div`
    display: flex;
    white-space: nowrap;
`,ZL=K.default.div`
    display: inline-block;
    width: ${({$variant:e})=>`${HL(e)}px`};
    position: relative;
    border-left: ${Gs["width-010"]} ${Gs.solid}
        ${Ks["border-stronger"]};
    ${e=>{let t=0;switch(e.$variant){case"default":t=e.$isLongMarker?NL:.625;break;case"minified":t=e.$isLongMarker?NL:0;break;default:t=0}return i.css`
            height: ${t}rem;
        `}}
`,QL=K.default(exports.Typography.BodyXS)`
    color: ${Ks["text-subtle"]};
    position: absolute;
    bottom: 10%;
    left: 10%;
`,JL=K.default.div`
    ${e=>"vertical"===e.$type?i.css`
                display: flex;
                flex-grow: 1;
                align-items: center;
                justify-content: center;
                width: 100%;
                margin: 1px 0px;
            `:i.css`
                position: absolute;
                height: ${WL(e.$variant)}px;
                width: ${e.$width}px;
                left: ${e.$left}px;
            `}
    background-color: ${({$bgColor:e})=>e};
    cursor: ${({$clickable:e})=>e?"pointer":"default"};

    ${e=>"stripes"===e.$styleType&&i.css`
            background: repeating-linear-gradient(
                135deg,
                ${e.$bgColor2||Ks["bg-strongest"]} 0px,
                ${e.$bgColor2||Ks["bg-strongest"]} 10px,
                ${e.$bgColor||Ks["bg-stronger"]} 10px,
                ${e.$bgColor||Ks["bg-stronger"]} 20px
            );
        `}
`,eN=K.default.div`
    position: absolute;
    top: ${NL}rem;
    height: ${({$variant:e})=>`${WL(e)}px`};
    z-index: 1;
    border-right: ${Gs["width-010"]} ${Gs.solid}
        ${Ks["border-stronger"]};
`,tN=K.default(exports.Typography.BodyXS)`
    color: ${e=>e.$color||Ks.text(e)};
    position: absolute;
    bottom: 0;
    padding-left: 4px;
    padding-bottom: 4px;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`,rN=K.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    user-select: none;
    margin-bottom: ${Zs["spacing-8"]};
    flex: 1;
`,nN=K.default(exports.Typography.BodyXS)`
    ${e=>e.$disabled&&i.css`
            color: ${Ks["text-disabled-subtlest"]};
        `}
`,iN=K.default.div`
    grid-column: 2 / -1;
    display: flex;
`,oN=K.default.div`
    width: 100%;
    display: grid;
    grid-template-columns: auto repeat(7, 1fr);
    column-gap: ${Zs["spacing-4"]};
`,aN=K.default(Ti.div)`
    grid-column: 2 / -1;
    overflow: hidden;
`,sN=K.default.div`
    display: flex;
    gap: ${Zs["spacing-4"]};
    transition: all ${Xs["duration-250"]} ${Xs["ease-default"]};
    overflow: hidden;
`,lN=K.default.div`
    display: flex;
    flex-direction: column;
    grid-row: 3 / auto;
    gap: ${Zs["spacing-4"]};
    width: 1.375rem;
    transition: all ${Xs["duration-250"]} ${Xs["ease-default"]};
    overflow: hidden;

    ${e=>e.$height&&`height: ${e.$height}px;`}
`,cN=K.default.div`
    min-height: 3.75rem;
    :last-child {
        min-height: 0;
    }
`,dN=K.default.div`
    ${qs["body-xs-bold"]}
    color: ${Ks["text-subtler"]};
    text-align: center;
    line-height: 12px; // align with cell on the same row
    :first-line {
        font-size: ${qs.Spec["body-size-sm"]};
    }
`,uN=K.default.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: ${Zs["spacing-4"]};
`,fN=K.default.div`
    grid-row: 4;
    grid-column: 1 / -1;
    display: flex;
    margin-top: ${Zs["spacing-8"]};
`,hN=K.default(Il.Small)`
    width: 100%;
    height: 2.5rem;
    span {
        display: flex;
        align-items: center;
        gap: ${Zs["spacing-8"]};
    }
`,pN=K.default(u.ChevronUpIcon)`
    transform: rotate(${e=>e.$isExpanded?0:180}deg);
    transition: transform ${Xs["duration-250"]} ${Xs["ease-default"]};
`,gN=K.default(JL)`
    ${e=>{if("vertical"===e.$type)return i.css`
                max-width: 200px;
                height: ${e.$height}px;
                min-height: ${e.$height}px;
                margin: 0;
                border-radius: ${Qs.xs};
            `}}

    ${e=>e.$halfFill?i.css`
                background: linear-gradient(
                        to ${e.$halfFill},
                        ${"stripes"===e.$styleType?"transparent":e.$bgColor}
                            50%,
                        ${Ks["bg-strongest"]} 0%
                    )
                    ${"stripes"===e.$styleType&&`, repeating-linear-gradient(\n                            135deg,\n                            ${e.$bgColor2||Ks["bg-strongest"]} 0px,\n                            ${e.$bgColor2||Ks["bg-strongest"]} 10px,\n                            ${e.$bgColor||Ks["bg-stronger"]} 10px,\n                            ${e.$bgColor||Ks["bg-stronger"]} 20px\n                        )`};
            `:i.css`
                background-color: ${e.$bgColor};
            `}
`;var mN=Zi;var bN=function(e,t,r){for(var n=-1,i=e.length;++n<i;){var o=e[n],a=t(o);if(null!=a&&(void 0===s?a==a&&!mN(a):r(a,s)))var s=a,l=o}return l};var vN=bN,yN=LC,xN=function(e,t){return e<t};var wN=Oi((function(e,t){return e&&e.length?vN(e,yN(t),xN):void 0}));var $N=bN,CN=function(e,t){return e>t},SN=LC;var jN=Oi((function(e,t){return e&&e.length?$N(e,SN(t),CN):void 0}));const kN=({calendarDate:r,disabledDates:n,selectedDate:i,onSelect:o,minDate:a,maxDate:s,startTime:l,endTime:c,maxVisibleCellHeight:d,slots:u,interval:f=30,variant:h="flexible",enableSelection:p=!0,onSlotClick:g})=>{var m,b,v,y;const x="YYYY-MM-DD",[w,$]=t.useState(!1),[C,S]=t.useState(),j=t.useMemo((()=>Fc.generateDaysForCurrentWeek(r)),[r]),k=Object.values(null!=u?u:{}).flat(),D=null!==(b=null!=l?l:null===(m=wN(k,"startTime"))||void 0===m?void 0:m.startTime)&&void 0!==b?b:"00:00",T=null!==(y=null!=c?c:null===(v=jN(k,"endTime"))||void 0===v?void 0:v.endTime)&&void 0!==y?y:"24:00",E=Math.ceil(zc.getTimeDiffInMinutes(D,T)/f),{height:O=0,ref:I}=qe(),F=d?O<d||w?O:d:O,M=di({height:F}),_=t.useMemo((()=>{if(u){const e={};return Object.entries(u).forEach((([t,r])=>{const n=function(e){const t=Array(E).fill({});return e.forEach((e=>{const r=Math.max(0,zc.getTimeDiffInMinutes(D,e.startTime)/f),n=Math.min(E,zc.getTimeDiffInMinutes(D,e.endTime)/f),i=Math.ceil(n)-Math.floor(r);switch(h){case"fixed":t[Math.floor(r)]=Object.assign(Object.assign({},e),{cellLength:n-r});break;case"flexible":for(let o=0;o<i;o++){const a=zc.addMinutesToTime(D,Math.floor(r+o)*f),s=zc.addMinutesToTime(a,f);let l;wO(t[Math.floor(r+o)])?0===o&&r%1!=0?l="top":o===i-1&&n%1!=0&&(l="bottom"):l=void 0,t[Math.floor(r+o)]=Object.assign(Object.assign({},e),{id:`${e.id}-${o}`,startTime:a,endTime:s,cellLength:1,halfFill:l})}}})),t}(r);e[t]=function(e){var t,r,n,i;let o=0;switch(h){case"fixed":for(e=e.reduce(((e,t)=>{const r=e.length>0?e[e.length-1]:e[0];return wO(t)&&wO(r)?e:[...e,t]}),[{}]);o<e.length;){if(wO(e[o])){const a=null!==(r=null===(t=e[o-1])||void 0===t?void 0:t.endTime)&&void 0!==r?r:D,s=null!==(i=null===(n=e[o+1])||void 0===n?void 0:n.startTime)&&void 0!==i?i:T;if(a!==s){const t=zc.getTimeDiffInMinutes(a,s)/f;e[o]=Object.assign(Object.assign({},P(o)),{startTime:a,endTime:s,cellLength:t})}}o++}break;case"flexible":for(;o<e.length;)wO(e[o])?(e[o]=P(o),o++):o+=e[o].cellLength}return e.filter((e=>!wO(e)&&e.cellLength>0))}(n)})),e}return{}}),[u]),A=e=>{S(e)},B=()=>{S(void 0)},R=e=>{e.preventDefault(),$((e=>!e))},z=e=>{var t;const r=Fc.isWithinRange(e,a?xc(a):void 0,s?xc(s):void 0),i=null!==(t=n&&n.includes(e.format(x)))&&void 0!==t&&t;return!r||i};function P(e,t=1){return{id:`${e.toString()}-${(new Date).getTime()}`,startTime:"",endTime:"",clickable:!1,styleAttributes:{backgroundColor:Ks["bg-stronger"]},cellLength:t}}return e.jsxs(oN,{children:[e.jsx(iN,{children:j.map(((t,r)=>{const n=(e=>{const t=e.format(x),r=z(e),n={},o=p&&!r;r&&(n.disabled=!0),n.interactive=p?o:null;const a=o&&C&&e.isSame(C,"day"),s=[i].includes(t);return s&&a?(n.labelType="selected-hover",n.circleLeft="selected-hover-outline",n.circleRight="selected-hover-outline"):s?(n.labelType="selected",n.circleLeft="selected-outline",n.circleRight="selected-outline"):a&&(n.labelType="hover",n.circleLeft="hover-subtle",n.circleRight="hover-subtle"),n})(t);return e.jsx(Wd,Object.assign({date:t,calendarDate:xc(i),onSelect:()=>{((e,t)=>{!t&&p&&o(e)})(t,!n.interactive)},onHover:A,onHoverEnd:B},n),`day-${r}`)}))}),e.jsx(iN,{children:j.map(((t,r)=>e.jsx(rN,{children:e.jsx(nN,{weight:"semibold",$disabled:z(t),children:xc(t).format("ddd")})},`week-day-${r}`)))}),(()=>{let t=!1;const r=e=>{const r=xc(D,"HH:mm").add(4*e*f,"minutes"),n=r.format("h"),i=r.format("mm"),o=r.format("a");let a=`${n}${"00"!==i?` ${i}`:""}`;return t||"pm"!==o||"00"!==i||(a+=` ${o}`,t=!0),a};return e.jsx(lN,{$height:F,children:Array(Math.ceil(E/4)).fill(void 0).map(((t,n)=>e.jsx(cN,{children:e.jsx(dN,{children:r(n)})},`time-${n}`)))})})(),e.jsx(aN,{style:M,children:e.jsx(sN,{ref:I,children:j.map(((t,r)=>{var n;const i=t.format(x),o=null!==(n=_[i])&&void 0!==n?n:Array("flexible"===h?E:1).fill(void 0).map(((e,t)=>P(t,"fixed"===h?E:void 0)));return e.jsx(uN,{children:o.map((t=>{const{id:r,clickable:n=!0,styleAttributes:o,cellLength:a,halfFill:s}=t,{styleType:l="default",backgroundColor:c,backgroundColor2:d}=o;return e.jsx(gN,{$type:"vertical",$variant:"default",$styleType:l,$bgColor:c,$bgColor2:d,$halfFill:s,$clickable:n,$height:"fixed"===h?12*a+4*(a-1):12,onClick:()=>n&&((e,t)=>{g&&g(e,t)})(i,t)},r)}))},`wrapper-${r}`)}))},`week-cell-${r.format(x)}`)}),(()=>{if(d&&I.current&&!(O&&O<d))return e.jsx(fN,{children:e.jsxs(hN,{"data-testid":"time-bar-expand-collapse-button",styleType:"light",onClick:R,children:[e.jsx(pN,{$isExpanded:w}),(w?"Hide":"Show")+" later times"]})})})()]})},DN=K.default.div`
    --header-bottom-spacing: 0.5rem;

    ${el.MaxWidth.sm} {
        --header-horizontal-inset: 1.25rem;
    }

    min-width: 18.5rem;
`,TN="YYYY-MM-DD",EN=K.default.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    user-select: none;
    margin-bottom: 0.188rem;
`,ON=K.default.div`
    ${qs["body-xs-semibold"]}
    color:${Ks.text};

    ${e=>e.$disabled&&i.css`
            color: ${Ks["text-disabled-subtlest"]};
        `};
`,IN=K.default.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
`,FN=K.default.div`
    grid-column: 1 / -1;
    display: flex;
    min-height: 7.625rem;
`,MN=K.default.div`
    ${qs["body-xs-semibold"]}
    margin: 1rem 0rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 2.5rem;
    color: ${Ks.text};
    span {
        display: block;
    }
`,_N=K.default.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 1px;
`;xc.extend(Sc);const AN="YYYY-MM-DD",BN={id:"1",startTime:"",endTime:"",clickable:!1,styleAttributes:{color:"",styleType:"stripes",backgroundColor:Ks["bg-stronger"],backgroundColor2:Ks["bg-strongest"]}},RN=({calendarDate:r,disabledDates:n,selectedDate:i,onSelect:o,minDate:a,maxDate:s,slots:l,enableSelection:c=!0,onSlotClick:d})=>{const u=t.useMemo((()=>Fc.generateDaysForCurrentWeek(r)),[r]),[f,h]=t.useState(),p=e=>{h(e)},g=()=>{h(void 0)},m=e=>{const t=e.format(AN),r=(e=>{const t=Fc.isWithinRange(e,a?xc(a):void 0,s?xc(s):void 0),r=!!n&&n.includes(e.format(AN));return!t||r})(e),o=c&&!r,l=o&&f&&e.isSame(f,"day"),d=[i].includes(t),u={labelType:"available",interactive:c?o:null};return r&&(u.disabled=!0,u.labelType="unavailable"),d&&l?(u.labelType="selected-hover",u.circleLeft="selected-hover-outline",u.circleRight="selected-hover-outline"):d?(u.labelType="selected",u.circleLeft="selected-outline",u.circleRight="selected-outline"):l&&(u.labelType="hover",u.circleLeft="hover-subtle",u.circleRight="hover-subtle"),u};return e.jsxs(IN,{children:[u.map(((t,r)=>{const n=m(t);return e.jsxs(EN,{children:[e.jsx(Wd,Object.assign({date:t,calendarDate:xc(i),onSelect:()=>{((e,t)=>{!t&&c&&o(e)})(t,!n.interactive)},onHover:p,onHoverEnd:g},n),`day-${r}`),e.jsx(ON,{$disabled:n.disabled,children:xc(t).format("ddd")})]},`week-day-${r}`)})),e.jsx(FN,{children:u.map(((t,r)=>{const n=t.format(AN),i=l&&(l[n]?l[n]:[BN]);return e.jsx(_N,{children:i&&i.map((t=>{const{id:r,startTime:i,endTime:o,clickable:a=!0,styleAttributes:s}=t,{color:l,styleType:c="default",backgroundColor:u,backgroundColor2:f}=s;return e.jsx(JL,{$type:"vertical",$variant:"default",$styleType:c,$bgColor:u,$bgColor2:f,$clickable:a,onClick:()=>a&&((e,t)=>{null==d||d(e,t)})(n,t),children:e.jsxs(MN,{style:{color:l},children:[e.jsx("span",{children:Fc.convertTo12HourFormat(i)}),o&&i&&e.jsx("span",{children:"-"}),e.jsx("span",{children:Fc.convertTo12HourFormat(o)})]})},r)}))},`wrapper-${r}`)}))},`week-cell-${r.format(AN)}`)]})},zN=K.default.div`
    --header-bottom-spacing: 0.5rem;

    ${el.MaxWidth.sm} {
        --header-horizontal-inset: 1.25rem;
    }

    min-width: 18.5rem;
`,PN="YYYY-MM-DD",LN=K.default.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;

    ${e=>{switch(e.$variant){case"current":case"upcoming-active":return i.css`
                    border: 4px solid ${Ks["icon-primary-subtle"]};
                `;case"upcoming-inactive":return i.css`
                    border: 4px solid ${Ks["icon-subtle"]};
                `;case"disabled":return i.css`
                    background-color: ${Ks["icon-disabled-subtle"]};
                `;case"completed":return i.css`
                    background-color: ${Ks["icon-success"]};
                    svg {
                        color: ${Ks["icon-inverse"]};
                    }
                `;case"error":return i.css`
                    width: 1.8rem;
                    height: 1.8rem;
                    margin: -0.15rem 0 -0.15rem -0.15rem;

                    svg {
                        color: ${Ks["icon-error"]};
                        height: 100%;
                        width: 100%;
                    }
                `}}}
`,NN=K.default.div`
    width: 4px;
    flex-grow: 1;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    border-radius: 2px;

    ${e=>{switch(e.$variant){case"current":case"upcoming-active":return i.css`
                    background-color: ${Ks["icon-primary-subtle"]};
                `;case"upcoming-inactive":return i.css`
                    background-color: ${Ks["icon-subtle"]};
                `;case"disabled":return i.css`
                    background-color: ${Ks["icon-disabled-subtle"]};
                `;case"completed":return i.css`
                    background-color: ${Ks["icon-success"]};
                `;case"error":return i.css`
                    margin-left: -0.15rem;
                    background-color: ${Ks["icon-error"]};
                `}}}
`,HN=K.default.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 1rem;
`,WN=K.default.div`
    grid-column: ${e=>e.$startCol?e.$startCol:3} / span
        ${e=>e.$colSpan?e.$colSpan:8};

    ${el.MaxWidth.lg} {
        grid-column: span 8;
    }

    ${el.MaxWidth.sm} {
        grid-column: span 8;
    }
`,VN=K.default(exports.Typography.HeadingSM).attrs({as:"div"})`
    margin-bottom: 1rem;

    ${el.MaxWidth.md} {
        margin-bottom: 1.5rem;
    }
`,YN=K.default(exports.Typography.HeadingXS).attrs({as:"div"})`
    margin-top: -0.125rem;
    margin-bottom: 0.5rem;
`,UN=K.default.div`
    display: flex;

    :last-of-type ${NN} {
        margin-bottom: 0;
    }
`,KN=K.default.div`
    margin-bottom: 2rem;
    width: 100%;
`,qN=K.default.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 0.5rem;
    gap: 0.5rem;
`,XN=K.default(cz)`
    padding: 0.125rem 0.5rem;
`,GN=["#FFE6BB","#D8EFEB","#E6EAFE","#FAE4E5","#D3EEFC"],ZN=252,QN=i.keyframes`
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
`,JN=K.default(xh)`
    color: ${Ks.icon};
    svg {
        ${e=>{if(e.$loading)return i.css`
                    animation: ${QN} 4s linear infinite;
                `}}
    }
`,eH=K.default.div`
    display: flex;
    padding-bottom: ${Zs["spacing-16"]};
    justify-content: space-between;
    gap: ${Zs["spacing-8"]};
`,tH=K.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${Zs["spacing-8"]};
`,rH=K.default(exports.Typography.BodySM)`
    color: ${Ks["text-subtler"]};
`,nH=K.default(Sh)`
    width: 400px;
`,iH=t=>{var{selectedDate:r,loading:n,tableContainerRef:i,totalRecords:o,onPreviousDayClick:a,onNextDayClick:s,onRefresh:l,onCalendarDateSelect:c}=t,d=X(t,["selectedDate","loading","tableContainerRef","totalRecords","onPreviousDayClick","onNextDayClick","onRefresh","onCalendarDateSelect"]);const f=()=>{i.current&&(i.current.scrollTop=0)},h=()=>{l&&(f(),l())};return e.jsxs(eH,{children:[e.jsx(nH,Object.assign({selectedDate:r,loading:n},d,{onRightArrowClick:e=>{f(),s(e)},onLeftArrowClick:e=>{f(),a(e)},onCalendarDateSelect:c})),void 0===o?e.jsx(e.Fragment,{}):e.jsxs(tH,{children:[e.jsxs(rH,{"data-testid":"timetable-records-results",weight:"semibold",children:[o," results found"]}),l&&e.jsx(JN,{"data-testid":"timetable-records-refresh-btn",styleType:"light",sizeType:"small",disabled:n,onClick:h,$loading:n,children:e.jsx(u.RefreshIcon,{})})]})]})},oH=K.default.div`
    display: flex;
    width: 100%;
`,aH=K.default.div`
    border-bottom: ${Gs["width-010"]} ${Gs.solid} ${Ks.border};
    ${e=>{if(e.$isOnTheHour)return i.css`
                box-shadow: inset -0.5px 0px ${Ks["border-primary"]};
            `}}
`,sH=K.default.div`
    display: flex;
    margin-bottom: 2px;
    height: 65px;
`,lH=K.default.div`
    width: 2px;
    height: 100%;
`,cH=K.default.div`
    height: 100%;
    width: ${({$width:e})=>`${e}px`};
    border-radius: ${Qs.sm};
    box-sizing: border-box;
    padding: ${Zs["spacing-4"]};
    ${({$status:e,$bgColour:t,$isClickable:r})=>{switch(e){case"blocked":return i.css`
                    background: repeating-linear-gradient(
                        135deg,
                        ${Ks["bg-stronger"]} 0px 6px,
                        ${Ks["bg-strongest"]} 6px 12px
                    );
                    &:hover {
                        cursor: ${r?"pointer":"not-allowed"};
                    }
                `;case"filled":return i.css`
                    background: ${t};
                    &:hover {
                        cursor: ${r?"pointer":"default"};
                    }
                `;case"disabled":return i.css`
                    background: ${Ks["bg-disabled"]};
                    &:hover {
                        cursor: ${r?"pointer":"not-allowed"};
                    }
                `;default:return i.css`
                    &:hover {
                        background-color: ${r?Ks["bg-hover-subtle"]:""};
                        cursor: ${r?"pointer":"default"};
                    }
                `}}}
`,dH=K.default(exports.Typography.BodySM)`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`,uH=K.default(exports.Typography.BodyXS)`
    color: ${Ks["text-subtler"]};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`,fH=({containerRef:t,children:r,customPopover:n})=>{if(!n)return r;const i={position:"bottom-start",rootNode:t,customOffset:n.offset,children:r,trigger:n.trigger,delay:n.delay,popoverContent:n.content};return e.jsx(By,Object.assign({},i))},hH=Y.default.memo((({id:t,startTime:r,endTime:n,title:i,subtitle:o,status:a,intervalWidth:s,rowBarColor:l,containerRef:c,customPopover:d,onClick:u})=>{const f=0===xc(n,"HH:mm").get("minutes"),h=zc.getTimeDiffInMinutes(r,n)/15*s-2,p=!!u||d&&"click"===d.trigger;return e.jsx(fH,{containerRef:c,customPopover:d,children:e.jsx(aH,{"data-testid":"block-container",$isOnTheHour:f,children:e.jsxs(sH,{children:[e.jsxs(cH,{$width:h,$status:a,$bgColour:l,$isClickable:p,onClick:e=>{u&&u({id:t,startTime:r,endTime:n,status:a,title:i,subtitle:o,customPopover:d},e)},children:[i&&e.jsx(dH,{weight:"semibold",children:i}),o&&e.jsx(uH,{weight:"bold",children:o})]}),e.jsx(lH,{})]})},"block-container-key")})})),pH=({id:r,timetableMinTime:n,timetableMaxTime:i,rowMinTime:o=n,rowMaxTime:a=i,rowCells:s,rowBarColor:l,intervalWidth:c,containerRef:d,outOfRangeCellPopover:u})=>{const f=t.useMemo((()=>{const e=[];xc(n,"HH:mm").isBefore(xc(o,"HH:mm"))&&e.push({id:r,startTime:n,endTime:o,status:"blocked",customPopover:u});const t=[...s].sort(((e,t)=>{const r=xc(e.startTime,"HH:mm"),n=xc(t.startTime,"HH:mm");return r.isBefore(n)?-1:r.isAfter(n)?1:0}));return t.forEach(((t,n)=>{var i;const{endTime:o}=t;e.push(t);const l=xc((null===(i=s[n+1])||void 0===i?void 0:i.startTime)||a,"HH:mm");let c=xc(o,"HH:mm");for(;c.isBefore(l);)if(d=l,c.get("hour")!=d.get("hour")){const t=c.add(1,"hour").startOf("hour");e.push({id:r,startTime:c.format("HH:mm").toString(),endTime:t.format("HH:mm").toString(),status:"disabled"}),c=t}else e.push({id:r,startTime:c.format("HH:mm").toString(),endTime:l.format("HH:mm").toString(),status:"disabled"}),c=l;var d})),xc(i,"HH:mm").isAfter(xc(a,"HH:mm"))&&e.push({id:r,startTime:a,endTime:i,status:"blocked",customPopover:u}),e}),[r,n,i,o,a,s,u]);return e.jsx(oH,{"data-testid":"timetable-row",children:f.map(((t,r)=>e.jsx(hH,Object.assign({},t,{intervalWidth:c,rowBarColor:l,containerRef:d}),`${r}-row-cell-key`)))})},gH=K.default.div``,mH=K.default.div`
    display: grid;
    overflow: scroll;
    position: relative;
    grid-template-columns: ${ZN}px auto;
`,bH=K.default.div`
    display: grid;
    overflow: scroll;
    position: relative;
    grid-template-columns: ${ZN}px fit-content(100%);
    padding-bottom: ${e=>e.$allRecordsLoaded?"0":"128px"};
    ${e=>{if(e.$loading)return i.css`
                :hover {
                    cursor: not-allowed;
                    padding-bottom: 0;
                }
            `}}
`,vH=K.default.div`
    position: sticky;
    top: 0;
    left: 0;
    background-color: ${Ks.bg};
    width: ${ZN}px;
    z-index: 2;
    border-bottom: ${Gs["width-010"]} ${Gs.solid} ${Ks.border};
    ${e=>e.$isScrolledX||e.$isScrolledY?i.css`
                box-shadow: 2px 2px 8px
                    rgb(from ${Ks.Primitive["neutral-20"]} r g b / 25%);
                clip-path: inset(
                    0 ${e.$isScrolledX?"-0.12px":"0"}
                        ${e.$isScrolledY?"-0.12px":"0"} 0
                );
                transition: box-shadow 0.5s ease-in-out,
                    clip-path 0.5s ease-in-out;
            `:i.css`
                box-shadow: none;
                clip-path: inset(0);
                transition: box-shadow 0.5s ease-in-out,
                    clip-path 0.5s ease-in-out;
            `};
`,yH=K.default.div`
    display: grid;
    position: sticky;
    grid-column: 1 / 2;
    left: 0;
    z-index: 1;
    background-color: ${Ks.bg};
    grid-template-rows: repeat(${e=>e.$numOfRows}, ${68}px);
`,xH=K.default.div`
    display: grid;
    position: sticky;
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    top: 0;
    z-index: 1;
    background-color: ${Ks.bg};
    grid-template-columns: repeat(${e=>e.$numOfColumns}, 1fr);
    width: 100%;
    border-bottom: ${Gs["width-010"]} ${Gs.solid} ${Ks.border};
    transition: all 0.5s ease-in-out;
    ${e=>{if(e.$isScrolled)return i.css`
                box-shadow: 2px 2px 8px
                    rgb(from ${Ks.Primitive["neutral-20"]} r g b / 25%);
            `}};
`,wH=K.default.div`
    min-width: ${84}px;
    align-content: end;
    margin-bottom: ${Zs["spacing-4"]};
`,$H=K.default(exports.Typography.BodySM)`
    color: ${Ks["text-subtler"]};
`,CH=K.default.div`
    display: grid;
    grid-template-rows: repeat(${e=>e.$numOfRows}, ${68}px);
`,SH=K.default.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    position: sticky;
    left: 0;
    background-color: ${Ks.bg};
    width: ${ZN}px;
    height: ${68}px;
    text-align: right;
    padding: 0 ${Zs["spacing-16"]} 0 ${Zs["spacing-32"]};
    border-bottom: ${Gs["width-010"]} ${Gs.solid} ${Ks.border};
    border-left: ${Gs["width-010"]} ${Gs.solid}
        ${Ks["border-primary"]};
    transition: all 0.5s ease-in-out;
    ${e=>e.$isScrolled?i.css`
                box-shadow: 2px 2px 8px
                    rgb(from ${Ks.Primitive["neutral-20"]} r g b / 25%);
            `:i.css`
                box-shadow: inset -0.5px 0px ${Ks["border-primary"]};
            `};
`,jH=K.default(exports.Typography.BodyMD)`
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
    white-space: nowrap;
    color: ${Ks["text-primary"]};
    :hover {
        cursor: ${e=>e.$isClickable?"pointer":"default"};
    }
`,kH=K.default(exports.Typography.BodyXS)`
    display: inline-flex;
    gap: ${Zs["spacing-4"]};
    align-items: center;
    color: ${Ks["text-subtler"]};
    ${e=>{if(!e.$show)return i.css`
                display: none;
            `}}
`,DH=K.default(ec)`
    display: flex;
    align-items: center;
    justify-content: center;
    grid-column: ${e=>e.$isEmptyContent?"1 / -1":"2 / -1"};
    grid-row: 2;
    width: 100%;
    height: 100%;
`,TH=K.default(bf)`
    grid-column: 1 / -1;
    grid-row: 2;
    padding: ${Zs["spacing-72"]} 0;
`,EH=K.default.div`
    display: flex;
    border-bottom: ${Gs["width-010"]} ${Gs.solid} ${Ks.border};
`,OH=K.default.div`
    border-right: ${Gs["width-005"]} ${Gs.solid}
        ${Ks["border-primary"]};
    width: ${e=>`${e.$width}px`};
    height: 100%;
    padding: ${Zs["spacing-20"]} ${Zs["spacing-12"]};
`,IH=i.keyframes`
  0% {
        background-position: -468px 0;
    }
    100% {
        background-position: 468px 0;
    }
`,FH=K.default.div`
    height: 28px;
    width: 100%;
    background: linear-gradient(
        to right,
        ${Ks.Primitive["neutral-95"]} 8%,
        ${Ks.Primitive["neutral-100"]} 18%,
        ${Ks.Primitive["neutral-95"]} 33%
    );
    background-size: 800px 104px;
    animation: ${IH} 1.5s forwards infinite;
`,MH=K.default(By)`
    max-width: 24rem !important;
    :hover {
        cursor: default;
    }
`,_H=e=>{const t={success:{Background:"bg-success",Border:"border-success",Text:"text-success",Icon:"icon-success"},warning:{Background:"bg-warning",Border:"border-warning",Text:"text-warning",Icon:"icon-warning"},error:{Background:"bg-error",Border:"border-error",Text:"text-error",Icon:"icon-error"},info:{Background:"bg-info",Border:"border-info",Text:"text-info",Icon:"icon-info"}}[e.$type];return{Background:Ks[t.Background],Border:Ks[t.Border],Text:Ks[t.Text],Icon:Ks[t.Icon]}},AH=K.default(Ti.div)`
    display: flex;
    flex-direction: row;
    position: ${e=>e.$fixed?"fixed":"relative"};
    margin: ${e=>e.$fixed?"1rem":0};
    top: 0;
    right: 0;
    padding: 1rem;
    border-radius: 0.5rem;
    z-index: 10;
    align-items: center;
    gap: 2rem;

    ${el.MaxWidth.lg} {
        left: 0;
    }

    ${e=>i.css`
            background: ${_H(e).Background};
            border: 1px solid ${_H(e).Border};
            color: ${_H(e).Text};
        `};
`,BH=K.default.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    flex: 1;
    justify-content: space-between;

    ${el.MaxWidth.sm} {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        gap: 0.75rem;
    }
`,RH=K.default.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    ${e=>i.css`
            & > svg {
                flex-shrink: 0;
                width: 1.5rem;
                height: 1.5rem;
                margin-top: 0.0625rem;
                margin-right: 0.5rem;
                color: ${_H(e).Icon};
            }
        `};
`,zH=K.default.div`
    display: flex;
    flex-direction: column;
`,PH=K.default(exports.Typography.HeadingXS)`
    display: flex;

    ${e=>i.css`
            color: ${_H(e).Text};
        `}
`,LH=K.default.div`
    ${e=>i.css`
            p {
                color: ${_H(e).Text};
            }
        `}
`,NH=K.default(Il.Small)`
    align-self: center;
    margin-left: auto;
    height: auto;
    width: fit-content;
    flex-shrink: 0;

    ${el.MaxWidth.sm} {
        align-self: flex-start;
        margin-left: 2rem;
    }
`,HH=K.default(nl)`
    padding: 0.75rem;
    margin: -0.75rem;
    align-self: stretch;

    ${e=>i.css`
            svg {
                width: 1.5rem;
                height: 1.5rem;
                color: ${_H(e).Text};
            }
            :hover {
                background: transparent;
            }
            ${el.MaxWidth.sm} {
                align-self: center;
            }
        `};
`,WH=4e3,VH=K.default.div`
    position: absolute;
    max-width: 30rem;
    pointer-events: auto;

    ${e=>(e=>{switch(e){case"left":return i.css`
                right: calc(100% + 16px);
                width: max-content;
                margin: auto;
                top: 50%;
                -moz-transform: translateY(-50%);
                -webkit-transform: translateY(-50%);
                transform: translateY(-50%);

                ${Lh.MaxWidth.mobileL} {
                    width: auto;
                }
            `;case"right":return i.css`
                left: calc(100% + 16px);
                width: max-content;
                margin: auto;
                top: 50%;
                -moz-transform: translateY(-50%);
                -webkit-transform: translateY(-50%);
                transform: translateY(-50%);

                ${Lh.MaxWidth.mobileL} {
                    width: auto;
                }
            `;case"bottom":return i.css`
                top: calc(100% + 16px);
                width: max-content;
                margin: auto;
                left: 50%;
                -moz-transform: translateX(-50%);
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);

                ${Lh.MaxWidth.mobileL} {
                    max-width: 80vw;
                }
            `;default:return i.css`
                bottom: calc(100% + 16px);
                width: max-content;
                margin: auto;
                left: 50%;
                -moz-transform: translateX(-50%);
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);

                ${Lh.MaxWidth.mobileL} {
                    max-width: 80vw;
                }
            `}})(e.position)}
    ${e=>e.visible?i.css`
            visibility: "visible";
            opacity: 1;
            transition: ${Fz.Base};
            z-index: 2;
        `:i.css`
            visibility: "hidden";
            opacity: 0;
            transition: ${Fz.Base};
            z-index: -1;
        `}
`,YH=K.default(nu)`
    border-radius: 4px;
    box-shadow: 3px 2px 10px 1px rgba(91, 91, 91, 0.2);
`,UH=K.default.div`
    position: absolute;
    overflow: hidden;

    ${e=>{switch(e.position){case"top":default:return i.css`
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
                        border-color: ${gz.Neutral[8]} transparent
                            transparent transparent;
                    }
                `;case"right":return i.css`
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
                        border-color: transparent ${gz.Neutral[8]}
                            transparent transparent;
                    }
                `;case"left":return i.css`
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
                            ${gz.Neutral[8]};
                    }
                `;case"bottom":return i.css`
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
                            ${gz.Neutral[8]} transparent;
                    }
                `}}}
`,KH=K.default.div`
    position: relative;
`,qH=r=>{var{visible:n,position:i="top",children:o}=r,a=X(r,["visible","position","children"]);const s=a["data-testid"]||"tooltip",[l,c]=t.useState(i),d=t.useRef(null);t.useEffect((()=>(f(),window.addEventListener("resize",Iu(u,300)),()=>{window.removeEventListener("resize",Iu(u,300))})),[]);const u=()=>{f()},f=()=>{if(d.current){const e=d.current.getBoundingClientRect();if(e.x<0)switch(i){case"left":case"top":case"bottom":c("right");break;case"right":c("top")}else if(e.x+e.width>window.outerWidth)switch(i){case"right":case"top":case"bottom":c("left");break;case"left":c("top")}else c(i)}};return e.jsxs(VH,Object.assign({position:l,"data-testid":s,visible:n,ref:d},a,{children:[e.jsx(YH,{children:"string"==typeof o?e.jsx(exports.V2_Text.BodySmall,{children:o}):o}),e.jsx(UH,{position:l})]}))},XH=i.css`
    grid-column: ${e=>e.$stretch?"1 / -1":"span 8"};

    ${el.MaxWidth.sm} {
        grid-column: 1 / -1;
    }
`,GH=K.default(h_.Content)`
    background: ${({$background:e})=>e?Ks["bg-strong"]:"transparent"};
    padding-top: 2rem;
    padding-bottom: 2rem;
`,ZH=K.default(exports.Typography.HeadingSM)`
    margin-bottom: 1rem;
    ${XH}
`,QH=K.default(exports.Typography.BodyBL)`
    margin-bottom: 2rem;
    ${XH}
`,JH=K.default.div`
    ${XH}
`,eW=K.default.ul`
    ${XH}
    column-gap: 2rem;
    row-gap: 2rem;
    display: grid;
    grid-template-columns: repeat(8, minmax(0, 1fr));

    ${el.MaxWidth.lg} {
        column-gap: 1.5rem;
    }

    ${el.MaxWidth.sm} {
        column-gap: 1rem;
    }

    :not(:last-child) {
        margin-bottom: 2rem;
    }
`,tW=Y.default.forwardRef(((t,r)=>{var{stretch:n}=t,i=X(t,["stretch"]);return e.jsx(eW,Object.assign({ref:r,$stretch:n},i))})),rW=K.default.li`
    display: flex;
    flex-direction: column;

    ${e=>{switch(e.$widthStyle){case"half":return i.css`
                    grid-column: auto / span 4;
                `;case"full":return i.css`
                    grid-column: auto / span 8;
                `}}}

    ${el.MaxWidth.lg} {
        grid-column: 1 / -1;
    }

    overflow-wrap: break-word;
`,nW=K.default.div`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    color: ${Ks["icon-primary"]};
    margin-left: 0.5rem;

    svg {
        width: ${qs.Spec["body-size-baseline"]};
        height: ${qs.Spec["body-size-baseline"]};
    }
`,iW=K.default.button`
    ${qs["body-baseline-regular"]}
    color: ${Ks.text};
    border: none;
    background: transparent;
    padding: 0;
    display: flex;
    cursor: pointer;
    align-items: center;
    overflow-wrap: anywhere;
    text-align: left;

    span {
        overflow-wrap: anywhere;
        text-align: left;
    }
`,oW=K.default.span`
    color: ${Ks["text-disabled"]};
`,aW=K.default(jl)`
    margin-right: 0.5rem;
    color: ${Ks["text-disabled"]};
`,sW=K.default(C.ExclamationTriangleIcon)`
    color: ${Ks["icon-warning"]};
    margin-right: 0.5rem;
    height: ${qs.Spec["body-size-baseline"]};
    width: ${qs.Spec["body-size-baseline"]};
`,lW=K.default.span`
    color: ${Ks["text-warning"]};
`,cW=K.default.span`
    ${qs["body-baseline-semibold"]}
    color: ${Ks.hyperlink};
    text-decoration: underline;
    margin-left: 0.5rem;
`,dW=K.default(Yl)`
    margin-top: 0.5rem;
`,uW=({label:r,value:n,displayWidth:i="full",maskState:o,maskLoadingState:a,maskChar:s="•",maskRange:l,unmaskRange:c,maskRegex:d,disableMaskUnmask:u,alert:f,maskTransformer:h,onMask:p,onUnmask:g,onTryAgain:m})=>{const[b,v]=t.useState(o);t.useEffect((()=>{v(o)}),[o]);const y=()=>{switch("fail"===a&&m&&m(),b){case"masked":g&&g(),v("unmasked");break;case"unmasked":p&&p(),v("masked")}},x=()=>"string"!=typeof n?n:"masked"===b?Nc.maskValue(n,{maskChar:s,maskRange:l,unmaskRange:c,maskRegex:d,maskTransformer:h}):n,C=()=>{switch(a){case"fail":return e.jsxs(e.Fragment,{children:[e.jsx(sW,{}),e.jsx(lW,{children:"Error"}),e.jsx(cW,{children:"Try again?"})]});case"loading":return e.jsxs(e.Fragment,{children:[e.jsx(aW,{}),e.jsx(oW,{children:"Retrieving..."})]});default:return e.jsxs(e.Fragment,{children:[x(),e.jsx(nW,{children:"masked"===b?e.jsx(w.EyeIcon,{"data-testid":"masked-icon"}):e.jsx($.EyeSlashIcon,{"data-testid":"unmasked-icon"})})]})}};return e.jsxs(rW,{$widthStyle:i,children:[e.jsx(Uy,{children:r}),"string"!=typeof n?n:b?u?e.jsx(exports.Typography.BodyBL,{children:x()}):e.jsx(iW,{"data-testid":"clickable-label",onClick:y,"aria-busy":"loading"===a,"aria-live":"polite",type:"button",children:C()}):e.jsx(exports.Typography.BodyBL,{children:n}),f&&e.jsx(dW,Object.assign({sizeType:"small"},f))]})},fW=Object.assign((t=>{var{items:r,title:n,description:i,topSection:o,bottomSection:a,children:s,background:l=!0,stretch:c,onMask:d,onUnmask:u,onTryAgain:f}=t,h=X(t,["items","title","description","topSection","bottomSection","children","background","stretch","onMask","onUnmask","onTryAgain"]);const p=e=>()=>{d&&d(e)},g=e=>()=>{u&&u(e)},m=e=>()=>{f&&f(e)},b=()=>{if(r&&r.length>0){const t=r.map(((t,r)=>e.jsx(uW,Object.assign({},t,{onMask:p(t),onUnmask:g(t),onTryAgain:m(t)}),r)));return e.jsx(eW,{$stretch:c,children:t})}return null};return e.jsx(GH,Object.assign({$background:l},h,{type:"grid",children:s||e.jsxs(e.Fragment,{children:[n&&e.jsx(ZH,{weight:"semibold",$stretch:c,children:n}),i&&e.jsx(QH,{$stretch:c,children:i}),o&&e.jsx(JH,{"data-id":"top-section",$stretch:c,children:o}),b(),a&&e.jsx(JH,{"data-id":"bottom-section",$stretch:c,children:a})]})}))}),{ItemSection:tW,Item:uW}),hW={collections:{base:{InputBoxShadow:i.css`
        inset 0 0 4px 0px ${gz.Shadow.Accent}
    `,InputErrorBoxShadow:i.css`
        inset 0 0 4px 0px ${gz.Shadow.Red}
    `,ElevationBoxShadow:i.css`
      0px 2px 8px ${gz.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:i.css`
        inset 0 0 3px 0px ${gz.Shadow.Accent}
    `,InputErrorBoxShadow:i.css`
        inset 0 0 3px 0px ${gz.Shadow.Red}
    `,ElevationBoxShadow:i.css`
      0px 2px 8px ${gz.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},pW=e=>t=>{var r,n;const i=(null===(r=t.theme)||void 0===r?void 0:r._v2)||t.theme,o=uz(hW,null==i?void 0:i[exports.V2_ThemeContextKeys.designTokenScheme]);return(null===(n=i.options)||void 0===n?void 0:n.designToken)?dz(o,e,i.options.designToken):dz(o,e)},gW={InputBoxShadow:pW("InputBoxShadow"),InputErrorBoxShadow:pW("InputErrorBoxShadow"),ElevationBoxShadow:pW("ElevationBoxShadow"),Table:{Header:pW("Table.Header"),Cell:{Primary:pW("Table.Cell.Primary"),Secondary:pW("Table.Cell.Secondary"),Selected:pW("Table.Cell.Selected"),Hover:pW("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:pW("Button.Danger.BackgroundColor"),Hover:pW("Button.Danger.Hover"),Primary:pW("Button.Danger.Primary"),Border:pW("Button.Danger.Border")}}},mW=Y.default.forwardRef(((t,r)=>{const{children:n,"data-testid":i="container",type:o="flex",stretch:a=!1}=t,s=X(t,["children","data-testid","type","stretch"]);return e.jsx(bW,Object.assign({ref:r,"data-testid":i,$type:o,$stretch:a},s,{children:n}))})),bW=K.default.div`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
    height: auto;

    ${e=>e.$stretch?i.css`
                padding: 0 3rem;
            `:i.css`
                padding: 0 0.75rem;
                /* Max width restrictions */
                max-width: 1320px;

                ${Lh.MaxWidth.desktopM} {
                    max-width: 1140px;
                }
            `}
    ${Lh.MaxWidth.tablet} {
        max-width: 720px;
    }
    ${Lh.MaxWidth.mobileL} {
        width: 100%;
        padding: 0;
        max-width: unset;
    }

    ${e=>{switch(e.$type){case"grid":return i.css`
                    column-gap: 2rem;
                    display: grid;
                    grid-template-columns: repeat(12, minmax(0, 1fr));

                    ${Lh.MaxWidth.tablet} {
                        column-gap: 1.5rem;
                        grid-template-columns: repeat(8, minmax(0, 1fr));
                    }

                    ${Lh.MaxWidth.mobileL} {
                        column-gap: 1rem;
                        grid-template-columns: repeat(4, minmax(0, 1fr));
                    }
                `;case"flex-column":return i.css`
                    display: flex;
                    flex-direction: column;
                `;default:return i.css`
                    display: flex;
                `}}}
`,vW=Y.default.forwardRef(((t,r)=>{const{children:n,"data-testid":i="section",stretch:o=!1}=t,a=X(t,["children","data-testid","stretch"]);return e.jsx(yW,Object.assign({ref:r,"data-testid":i,$stretch:o},a,{children:n}))})),yW=K.default.section`
    display: block;
    position: relative;
    ${e=>e.$stretch?i.css`
                ${Lh.MaxWidth.tablet} {
                    padding: 0 1.5rem;

                    // Extra enforcement
                    padding-left: 1.5rem !important;
                    padding-right: 1.5rem !important;
                }
            `:i.css`
                padding: 0 1.5rem;

                // Extra enforcement
                padding-left: 1.5rem !important;
                padding-right: 1.5rem !important;
            `}
`,xW=Y.default.forwardRef(((t,r)=>{const{children:n,"data-testid":i="content",className:o,type:a="flex",stretch:s=!1}=t,l=X(t,["children","data-testid","className","type","stretch"]);return e.jsx(vW,Object.assign({ref:r,"data-testid":i,className:o,stretch:s},l,{children:e.jsx(mW,{"data-testid":`${i}-container`,type:a,"data-id":"container",stretch:s,children:n})}))})),wW={Section:vW,Container:mW,Content:xW,ColDiv:Wh};var $W;exports.RedirectScope=void 0,($W=exports.RedirectScope||(exports.RedirectScope={}))[$W.Subpage=0]="Subpage",$W[$W.Domain=1]="Domain";const CW=e=>`\n\tmargin-bottom: ${e||0}rem;\n`,SW=K.default.ol`
    ${e=>CW(e.bottomMargin)}
    margin-left: ${3}rem;

    ${Lh.MaxWidth.tablet} {
        margin-left: 2.5rem;
    }

    // Counter matters
    counter-reset: list;

    li {
        ${e=>Dz.getTextStyle(e.size,"regular")}
        position: relative;
        color: ${gz.Neutral[1]};
    }

    ${e=>{const{reversed:t}=e,r=e.counterType||"decimal",n=e.counterSeparator||")";return i.css`
            li:before {
                content: counter(list, ${r}) "${n}";
                counter-increment: ${t?"list -1":"list"};
                position: absolute;
                left: -2rem;
            }
        `}}

    ${e=>{const{reversed:t,start:r}=e;if(r){const e=t?r+1:r-1;return i.css`
                counter-reset: list ${e};
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
`,jW=K.default.ul`
    ${e=>CW(e.bottomMargin)}
    margin-left: 2.5rem;
    list-style-type: ${e=>e.bulletType||"disc"};

    li {
        ${e=>Dz.getTextStyle(e.size,"regular")}
        color: ${gz.Neutral[1]};
    }

    counter-reset: list;

    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`,kW={Ul:t=>{var{size:r="Body",children:n}=t,i=X(t,["size","children"]);return e.jsx(jW,Object.assign({size:r},i,{children:n}))},Ol:t=>{var{size:r="Body",children:n}=t,i=X(t,["size","children"]);return e.jsx(SW,Object.assign({size:r},i,{children:n}))}},DW={[exports.V2_ThemeContextKeys.colorScheme]:"base",[exports.V2_ThemeContextKeys.textStyleScheme]:"base",[exports.V2_ThemeContextKeys.designTokenScheme]:"base",[exports.V2_ThemeContextKeys.resourceScheme]:"base"},TW={[exports.V2_ThemeContextKeys.colorScheme]:"bookingsg",[exports.V2_ThemeContextKeys.textStyleScheme]:"base",[exports.V2_ThemeContextKeys.designTokenScheme]:"base",[exports.V2_ThemeContextKeys.resourceScheme]:"bookingsg"},EW={[exports.V2_ThemeContextKeys.colorScheme]:"rbs",[exports.V2_ThemeContextKeys.textStyleScheme]:"base",[exports.V2_ThemeContextKeys.designTokenScheme]:"rbs",[exports.V2_ThemeContextKeys.resourceScheme]:"rbs"},OW={[exports.V2_ThemeContextKeys.colorScheme]:"mylegacy",[exports.V2_ThemeContextKeys.textStyleScheme]:"base",[exports.V2_ThemeContextKeys.designTokenScheme]:"base",[exports.V2_ThemeContextKeys.resourceScheme]:"mylegacy"},IW={[exports.V2_ThemeContextKeys.colorScheme]:"ccube",[exports.V2_ThemeContextKeys.textStyleScheme]:"base",[exports.V2_ThemeContextKeys.designTokenScheme]:"base",[exports.V2_ThemeContextKeys.resourceScheme]:"ccube"},FW={[exports.V2_ThemeContextKeys.colorScheme]:"oneservice",[exports.V2_ThemeContextKeys.textStyleScheme]:"oneservice",[exports.V2_ThemeContextKeys.designTokenScheme]:"base",[exports.V2_ThemeContextKeys.resourceScheme]:"base"};exports.Accordion=Bl,exports.Alert=Yl,exports.BookingSGTheme={colourScheme:"bookingsg",fontScheme:"bookingsg",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"bookingsg",_v2:{colorScheme:"bookingsg",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"bookingsg"}},exports.Border=Gs,exports.BoxContainer=r=>{var{children:n,title:o,collapsible:a=!0,expanded:s=!1,callToActionComponent:l,displayState:c="default",subComponentTestIds:d,clickableHeader:u}=r,f=X(r,["children","title","collapsible","expanded","callToActionComponent","displayState","subComponentTestIds","clickableHeader"]);const[h,p]=t.useState(!a||s),g=qe(),m=g.ref,b=i.useTheme(),v=Js["sm-max"]({theme:b}),y=oc.useMediaQuery({maxWidth:v}),x=u&&a,w=e=>{e.stopPropagation(),p(!h)},$=di({height:h?g.height:0}),C=()=>a&&e.jsx(mc,{onClick:w,type:"button","aria-label":h?"Collapse":"Expand","data-testid":(null==d?void 0:d.handle)||"handle",children:e.jsx(bc,{$expanded:h,children:e.jsx(vc,{"aria-hidden":!0})})});return e.jsxs(ac,Object.assign({},f,{children:[e.jsxs(dc,{"data-testid":"header",onClick:x?w:void 0,$interactive:x,children:[e.jsxs(fc,{children:[e.jsx(uc,{"data-testid":(null==d?void 0:d.title)||"title",children:o}),(()=>{switch(c){case"error":case"warning":return e.jsx(hc,{$displayState:c,"data-testid":(null==d?void 0:d.displayStateIcon)||`${c}-icon`,children:e.jsx(pc,{})});default:return null}})(),y&&C()]}),l&&e.jsx(gc,{$collapsible:a,"data-testid":"call-to-action-container",children:l}),!y&&C()]}),a?e.jsx(sc,{style:$,"data-testid":"expandable-container",children:e.jsx(cc,{ref:m,children:n})}):e.jsx(lc,{"data-testid":"non-expandable-container",children:e.jsx(cc,{children:n})})]}))},exports.Breadcrumb=r=>{var{links:n,fadeColor:o,fadePosition:a="both",itemStyle:s,id:l}=r,c=X(r,["links","fadeColor","fadePosition","itemStyle","id"]);const[d,u]=t.useState(!1),[f,h]=t.useState(!1),[p,g]=t.useState(!1),m="left"===a||"both"===a,b="right"===a||"both"===a,v=t.useRef(null),y=t.useRef(null),x=i.useTheme(),w=Js["lg-max"]({theme:x}),$=Hc((()=>{const e=y.current,t=v.current;e&&t&&n&&n.length>1&&window.innerWidth<=w&&(e.scrollLeft=e.scrollWidth-t.offsetWidth)})),C=Hc((()=>{const e=window.innerWidth<=w;u(e);const t=y.current,r=v.current;if(t&&r&&e&&t.scrollWidth>r.offsetWidth)return h(t.scrollLeft>=1),void g(t.scrollWidth-t.scrollLeft-1>r.offsetWidth);h(!1),g(!1)}));if(Wc("resize",C),Wc("scroll",C,y.current),Vc((()=>{$(),C()}),[$,C]),qe({onResize:$,targetRef:v,refreshMode:"debounce",refreshRate:50,skipOnMount:!0}),!n)return null;return e.jsxs(Xc,Object.assign({ref:v,id:l||"breadcrumb"},c,{children:[e.jsx("nav",{children:e.jsx(Gc,{ref:y,children:n.map(((t,r)=>{let i;return t.children?(i=r!==n.length-1&&t.href?e.jsx(td,Object.assign({},t,{weight:"semibold"})):e.jsx(ed,{weight:"semibold",children:t.children}),e.jsxs(Qc,{$styleProps:s,children:[i,r<n.length-1&&e.jsx(Jc,{})]},r)):null}))})}),d&&(()=>{let t;return t=Array.isArray(o)&&o.length>0?{left:o,right:o}:o||{left:void 0,right:void 0},e.jsxs(e.Fragment,{children:[f&&m&&e.jsx(Zc,{$backgroundColor:t.left,$position:"left"}),p&&b&&e.jsx(Zc,{$backgroundColor:t.right,$position:"right"})]})})()]}))},exports.Breakpoint=Js,exports.Button=Il,exports.ButtonWithIcon=od,exports.CCubeTheme={colourScheme:"ccube",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"ccube",_v2:{colorScheme:"ccube",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"ccube"}},exports.Calendar=r=>{var{className:n,styleType:i="bordered",value:o,onSelect:a}=r,s=X(r,["className","styleType","value","onSelect"]);const[l,c]=t.useState(o);return t.useEffect((()=>{c(o)}),[o]),e.jsx(tu,{className:n,$hasBorder:"bordered"===i,children:e.jsx(Jd,Object.assign({value:l,initialCalendarDate:l,onSelect:e=>{c(e),null==a||a(e)}},s))})},exports.Card=nu,exports.Checkbox=fu,exports.Colour=Ks,exports.Component=iB,exports.CountdownTimer=r=>{var{className:n,align:o="right",timer:a,timestamp:s,notifyTimer:l,offset:c,mobileOffset:d,show:u,fixed:f=!0,"data-testid":h,onFinish:p,onNotify:g,onTick:m}=r,b=X(r,["className","align","timer","timestamp","notifyTimer","offset","mobileOffset","show","fixed","data-testid","onFinish","onNotify","onTick"]);const v=t.useRef(null),y=t.useRef(!1),[x,w]=t.useState(0),[$,C]=t.useState(0),[S,j]=t.useState(0),[k,D]=t.useState(!1),[T]=((e,r,n)=>{const[i,o]=t.useState((()=>{const t=tf(e,r)-Date.now();return rf(t)}));t.useEffect((()=>{if(!n)return;const t=tf(e,r),i=a(t);return()=>clearTimeout(i)}),[r,n,e]);const a=e=>{const t=()=>{const r=e-Date.now(),n=r%1e3,i=rf(r);if(o(i),0!==i)return setTimeout(t,n>500?n:n+1e3)};return t()};return[i]})(a,s,k),{ref:E,inView:O}=Wu({threshold:1,rootMargin:-1*x+"px 0px 0px 0px",initialInView:!0}),I=!f||O,F="number"==typeof l&&T<=l,M=i.useTheme(),_=Js["sm-max"]({theme:M}),A=oc.useMediaQuery({maxWidth:_});t.useEffect((()=>{D(u)}),[u]),t.useEffect((()=>{0===T?P():"number"==typeof l&&T<=l&&(R(),z())}),[T]),t.useEffect((()=>{const e=function(){var e,t;const r=null!==(e=null==c?void 0:c.top)&&void 0!==e?e:168,n=null!==(t=null==d?void 0:d.top)&&void 0!==t?t:80,i=A?n:r;return i}();w(e)}),[A,null==c?void 0:c.top,null==d?void 0:d.top]),t.useEffect((()=>{if(v.current){const e=Bu(B,300);return B(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}}),[v.current]),t.useEffect((()=>{y.current=!1}),[a,u]);const B=()=>{if(!v.current)return;const e=v.current.getBoundingClientRect();j(e.x),C(e.right)},R=()=>{m&&m(T)},z=()=>{g&&!y.current&&(y.current=!0,g())},P=()=>{D(!1),p&&p()};const L=()=>{const{minutes:t,seconds:r}=Au.toMinutesSeconds(T),n=1!==t?"mins":"min",i=1!==r?"secs":"sec";return e.jsxs(e.Fragment,{children:[e.jsx(ef,{$warn:F}),e.jsx(Qu,{children:"Time left:"}),e.jsxs(Ju,{children:[t," ",n," ",String(r).padStart(2,"0")," ",i]})]})};return k||0===T?e.jsxs(qu,Object.assign({className:n},b,{children:[e.jsx("div",{ref:E}),e.jsx(Gu,{"data-testid":h,"data-id":"countdown-wrapper",ref:v,inert:I?void 0:"",$visible:I,$warn:F,children:L()}),v.current&&!I&&(()=>{var t,r;const n=null!==(t=null==c?void 0:c.left)&&void 0!==t?t:"left"===o?S:void 0,i=null!==(r=null==c?void 0:c.right)&&void 0!==r?r:"right"===o?Math.floor(document.body.clientWidth-$):void 0;return e.jsx(Zu,{"data-testid":h,"data-id":"fixed-countdown-wrapper",$warn:F,$top:x,$left:n,$right:i,children:L()})})()]})):e.jsx(e.Fragment,{})},exports.DataTable=r=>{var{id:n,headers:i,rows:o,className:a,sortIndicators:s,alternatingRows:l,loadState:c="success",enableMultiSelect:d,selectedIds:f,disabledIds:h,enableActionBar:p,enableSelectAll:g,enableStickyHeader:m,emptyView:b,actionBarContent:v,renderCustomEmptyView:y,onHeaderClick:x,onSelect:w,onSelectAll:$,onClearSelectionClick:C}=r,S=X(r,["id","headers","rows","className","sortIndicators","alternatingRows","loadState","enableMultiSelect","selectedIds","disabledIds","enableActionBar","enableSelectAll","enableStickyHeader","emptyView","actionBarContent","renderCustomEmptyView","onHeaderClick","onSelect","onSelectAll","onClearSelectionClick"]);const j=t.useRef(null),k=t.useRef(null),D=t.useRef(null),T=t.useRef(null),E=t.useRef(null),[O,I]=t.useState(!1),[F,M]=t.useState(!1),[_,A]=t.useState(!1),[B,R]=t.useState(!1),[z,P]=t.useState(!1),{ref:L,inView:N}=Wu(),H=t.useCallback((()=>{if(!E.current||!T.current)return;const e=E.current.scrollHeight>E.current.clientHeight;I(e),e?T.current.style.transform="translateY(0)":Z()}),[]);t.useEffect((()=>{H()}),[]),qe({onResize:H});Wc("scroll",(()=>{requestAnimationFrame((()=>{O?G():Z()})),E.current&&A(E.current.getBoundingClientRect().bottom<=window.innerHeight)}),"window"),t.useEffect((()=>{Q()}),[o]);const W=()=>(null==f?void 0:f.length)===(null==o?void 0:o.length),V=e=>!!(null==f?void 0:f.includes(e)),Y=e=>!!l&&e%2==1,U=e=>!!(null==h?void 0:h.includes(e)),K=e=>{if(S["data-testid"])return`${S["data-testid"]}-${e}`},q=()=>i.length+(d?1:0),G=()=>{if(!E.current)return;const e=E.current.getBoundingClientRect();R(e.bottom>window.innerHeight+30&&e.top<window.innerHeight-200)},Z=()=>{if(!(j.current&&k.current&&E.current&&T.current&&D.current))return;const e=k.current.getBoundingClientRect();if(e.top>window.innerHeight){const t=e.bottom-window.innerHeight,r=j.current.getBoundingClientRect().height-D.current.clientHeight-32,n=Math.min(t,r);T.current.style.transform=`translateY(-${n}px)`}else T.current.style.transform="translateY(0)"},Q=()=>{j.current&&E.current&&P(j.current.clientHeight+(p?56:0)<E.current.clientHeight)},J=t=>{const{fieldKey:r,label:n,clickable:i=!1,style:o}="string"==typeof t?{fieldKey:t,label:t,style:void 0}:t;return e.jsx(Bf,{"data-testid":K(`header-${r}`),$clickable:i,onClick:()=>i&&(null==x?void 0:x(r)),style:o,$isCheckbox:!1,children:e.jsxs(Rf,{children:["string"==typeof n?e.jsx(exports.Typography.BodyBL,{weight:"bold",children:n}):n,ee(r)]})},r)},ee=t=>{const r=null==s?void 0:s[t];return r?"asc"===r?e.jsx(u.ArrowUpIcon,{"data-testid":K(`header-${t}-arrowup`)}):e.jsx(u.ArrowDownIcon,{"data-testid":K(`header-${t}-arrowdown`)}):e.jsx(e.Fragment,{})},te=()=>e.jsx(Bf,{"data-testid":K("header-selection"),$clickable:!1,$isCheckbox:!0,children:e.jsx(Nf,{children:g&&e.jsx(fu,{checked:W(),indeterminate:!!f&&0!==f.length&&!W(),onClick:()=>{$&&$(W())}})})}),re=(t,r)=>{const n="string"!=typeof t?t.style:void 0,i="string"==typeof t?t:t.fieldKey,o=r.id.toString(),a=r[i],s=`${o}-${i}`;return e.jsx(Pf,{"data-testid":K(`row-${s}`),style:n,$isCheckbox:!1,children:"string"==typeof a||"number"==typeof a?e.jsx(Lf,{children:a}):"function"==typeof a?a(r,{isSelected:V(o)}):a},s)},ne=t=>e.jsx(Pf,{"data-testid":K(`row-${t}-selection`),$isCheckbox:!0,children:e.jsx(Nf,{children:e.jsx(fu,{checked:V(t),onClick:()=>{w&&w(t,!V(t))},disabled:U(t)})})}),ie=()=>e.jsx(bf,Object.assign({type:"no-item-found"},b,{title:(null==b?void 0:b.title)?"string"==typeof b.title?e.jsx(Wf,{weight:"bold",children:b.title}):b.title:e.jsx(Wf,{weight:"bold",children:"No <items> found"}),description:(null==b?void 0:b.description)?b.description:"No matching rows"}));return e.jsxs(Tf,{id:n||"table-wrapper","data-testid":S["data-testid"]||"table",className:a,ref:E,onScroll:()=>{O&&E.current&&M(E.current.scrollTop+E.current.clientHeight>=E.current.scrollHeight)},children:[e.jsx(Ef,{children:e.jsxs(Of,{$end:_,$scrollable:O,ref:j,$stickyHeader:m,children:[e.jsx("thead",{ref:D,children:e.jsxs(Af,{children:[d&&te(),i.map(J)]})}),e.jsx(If,{$showLastRowBottomBorder:z,children:"success"===c?!o||o.length<1?e.jsx("tr",{children:e.jsx(Vf,{colSpan:q(),children:y?y():ie()})}):e.jsx(e.Fragment,{children:null==o?void 0:o.map(((t,r)=>e.jsxs(zf,{"data-testid":K(`row-${t.id.toString()}`),$alternating:Y(r),$isSelectable:d,$isSelected:V(t.id.toString()),children:[d&&ne(t.id.toString()),i.map((e=>re(e,t)))]},t.id.toString())))}):e.jsx("tr",{children:e.jsx("td",{colSpan:q(),children:e.jsx(Hf,{children:"loading"===c&&e.jsx(ec,{})})})})})]})}),p&&f&&f.length>0&&(()=>{var t,r,n,i;const o=null!==(t=null==f?void 0:f.length)&&void 0!==t?t:0;return e.jsx(Ff,{ref:T,$fixed:B,$left:null===(n=null===(r=null==j?void 0:j.current)||void 0===r?void 0:r.getBoundingClientRect())||void 0===n?void 0:n.left,$width:null===(i=null==j?void 0:j.current)||void 0===i?void 0:i.clientWidth,children:e.jsxs(_f,{$float:(O?!F:!N)||B,$scrollable:O,children:[e.jsx(exports.Typography.BodyMD,{weight:"semibold",children:`${o} item${o>1?"s":""} selected`}),e.jsx(Mf,{type:"button",onClick:C,children:"Clear selection"}),v]})})})(),e.jsx("div",{ref:e=>{k.current=e,L(e)}})]})},exports.DateInput=vh,exports.DateNavigator=Sh,exports.DateRangeInput=Ah,exports.Divider=Kh,exports.Drawer=r=>{var{children:n,heading:i,show:o,onClose:a,onOverlayClick:s}=r,l=X(r,["children","heading","show","onClose","onOverlayClick"]);const[c,d]=t.useState(o),[u]=t.useState((()=>Lc.generate())),f=t.useRef(null);t.useEffect((()=>{if(!o){const e=setTimeout((()=>d(!1)),500);return()=>clearTimeout(e)}d(!0)}),[o]);return e.jsx(Zh,{show:c,enableOverlayClick:!0,onOverlayClick:s,children:e.jsxs(ep,Object.assign({$show:o,"data-testid":"drawer",onClick:e=>{e.stopPropagation()},role:"dialog","aria-labelledby":u,onTransitionEnd:e=>{var t;"visibility"===e.propertyName&&o&&(null===(t=f.current)||void 0===t||t.focus())}},l,{children:[e.jsxs(tp,{children:[e.jsx(np,{id:u,ref:f,tabIndex:-1,weight:"bold",children:i}),e.jsx(rp,{"aria-label":"Close drawer",onClick:a,focusHighlight:!1,children:e.jsx(m.CrossIcon,{"aria-hidden":!0})})]}),e.jsx(ip,{children:n})]}))})},exports.ESignature=Mp,exports.ErrorDisplay=bf,exports.FeedbackRating=t=>{const{imgSrc:r,buttonLabel:n,description:i,rating:o,onRatingChange:a,onSubmit:s}=t,l=X(t,["imgSrc","buttonLabel","description","rating","onRatingChange","onSubmit"]),c=null!=r?r:_p,d=null!=i?i:Bp;return e.jsxs(Up,Object.assign({},l,{children:[c&&e.jsx(Yp,{"data-testid":"feedback-banner-image",src:c,alt:"",onError:e=>e.currentTarget.style.display="none"}),e.jsxs(Kp,{children:[e.jsx(exports.Typography.HeadingSM,{as:"div",weight:"semibold",children:d}),e.jsx(Vp,{description:d,rating:o,onRatingChange:a}),e.jsx(qp,{disabled:!o,onClick:s,type:"button",children:null!=n?n:Ap})]})]}))},exports.FileDownload=({id:t,fileItems:r,title:n,description:i,onDownload:o,"data-testid":a,className:s,styleType:l="bordered"})=>{const c=e=>G(void 0,void 0,void 0,(function*(){o&&(yield o(e))}));return e.jsxs(Xp,{id:t?`${t}-file-download`:"file-download",className:s,"data-testid":a,$border:"bordered"===l,children:[(n||i)&&e.jsxs(Gp,{children:[n?"string"==typeof n?e.jsx(Zp,{children:n}):e.jsx(Qp,{children:n}):null,i?"string"==typeof i?e.jsx(Jp,{children:i}):e.jsx(eg,{children:i}):null]}),e.jsx(tg,{children:r&&r.length>0&&r.map((t=>e.jsx(yg,{fileItem:t,onDownload:c},t.id)))})]})},exports.FileUpload=({styleType:r="bordered",fileItems:n,title:i,description:o,maxFiles:a,warning:s,className:l,name:c,id:d,"data-testid":u,accept:f,capture:h,multiple:p,disabled:g,sortable:m=!1,fileDescriptionMaxLength:b,editableFileItems:v=!1,errorMessage:y,readOnly:x,onChange:w,onDelete:$,onEdit:C,onSort:S})=>{const j=t.useRef(null),[k,D]=t.useState(),T=()=>!(!a||!n)&&n.length>=a;return e.jsx(wg.Provider,{value:{activeId:k,setActiveId:D},children:e.jsxs(Qm,{ref:j,onChange:e=>{!g&&w&&w(e)},id:d?`${d}-dropzone`:"dropzone",accept:f,capture:h,border:"bordered"===r,className:l,"data-testid":u,name:c,multiple:p,disabled:g||T()||x,children:[!(!i&&!o)&&e.jsxs(lM,{children:[i?"string"==typeof i?e.jsx(cM,{children:i}):e.jsx(dM,{children:i}):null,o?"string"==typeof o?e.jsx(uM,{children:o}):e.jsx(fM,{children:o}):null]}),!!s&&e.jsx(hM,{type:"warning",children:s}),e.jsx(sM,{fileItems:n,editableFileItems:v,fileDescriptionMaxLength:b,sortable:m,disabled:g,readOnly:x,onItemDelete:e=>{$&&$(e)},onItemUpdate:e=>{C&&C(e)},onSort:e=>{S&&S(e)}}),y&&e.jsx(bM,{type:"error",children:y}),!x&&e.jsxs(pM,{children:[e.jsx(gM,{type:"button",styleType:"secondary",disabled:!!k||g||T(),onClick:e=>{g||(e.preventDefault(),j.current&&j.current.openFileDialog())},children:"Upload files"}),e.jsx(mM,{children:"or drop them here"})]})]})})},exports.Filter=QM,exports.Font=qs,exports.Footer=t=>{var{children:r,links:n,lastUpdated:o,disclaimerLinks:a,showDownloadAddon:s,logoSrc:l,copyrightInfo:c,onFooterLinkClick:d,layout:u="default"}=t,f=X(t,["children","links","lastUpdated","disclaimerLinks","showDownloadAddon","logoSrc","copyrightInfo","onFooterLinkClick","layout"]);const h="stretch"===u,p=i.useTheme(),g=t=>t.map(((t,r)=>{const n=X(t,["data-options"]);return e.jsx("li",{children:e.jsx(g_,Object.assign({},n,{onClick:e=>((e,t)=>{t.onClick?(e.preventDefault(),t.onClick(e)):d&&(e.preventDefault(),d(t))})(e,t)}))},r)}));return e.jsxs(p_,Object.assign({},f,{children:[(()=>{let t=null;return r||((n||s)&&(t=e.jsxs(e.Fragment,{children:[e.jsx(v_,{"data-testid":"logo-section",children:e.jsx("img",{src:l||s_.getFooterLogo(null==p?void 0:p.resourceScheme),alt:"LifeSG","data-testid":"logo"})}),(null==n?void 0:n[0])&&e.jsx(y_,{"data-testid":"link-col-1",children:g(n[0])},"link-col-1"),(null==n?void 0:n[1])&&e.jsx(y_,{"data-testid":"link-col-2",children:g(n[1])},"link-col-2"),s&&e.jsx(x_,{children:e.jsx(n_,{})})]})),t?e.jsxs(e.Fragment,{children:[e.jsx(b_,{type:"grid",stretch:h,children:t}),e.jsx(m_,{})]}):null)})(),e.jsxs(w_,{type:"grid",stretch:h,children:[e.jsx($_,{children:(()=>{const t=s_.getDisclaimerLinks(null==p?void 0:p.resourceScheme,a);return Object.keys(t).map((r=>e.jsx(S_,Object.assign({},t[r]),r)))})()},"disclaimer"),e.jsx(C_,{children:e.jsx(exports.Typography.BodyXS,{"data-testid":"copyright-text",children:c||e.jsxs(e.Fragment,{children:["©"," ",s_.getCopyrightInfo(o,null==p?void 0:p.resourceScheme)]})})},"copyright")]})]}))},exports.Form=EF,exports.FullscreenImageCarousel=oB,exports.HistogramSlider=$x,exports.IconButton=xh,exports.ImageButton=sB,exports.Input=Tx,exports.InputGroup=NS,exports.InputMultiSelect=_O,exports.InputNestedMultiSelect=RO,exports.InputNestedSelect=zO,exports.InputRangeSelect=sI,exports.InputRangeSlider=mx,exports.InputSelect=lI,exports.InputSlider=gI,exports.Layout=h_,exports.LifeSGTheme=tl,exports.LinkList=r=>{var{items:n,maxShown:i,style:o="default",onItemClick:a}=r,s=X(r,["items","maxShown","style","onItemClick"]);const[l,c]=t.useState(!i||i>=n.length),d=i?n.slice(0,i):n,u=i?n.slice(i):[],f=qe(),h=f.ref,p=(e,t)=>{t.onClick?(e.preventDefault(),t.onClick(e)):a&&(e.preventDefault(),a(t,e))},g=()=>{c(!l)},m=(t,r,n,i)=>{const a="small"===o?uB:dB;return e.jsxs(e.Fragment,{children:[e.jsxs(pB,{children:[e.jsx(a,{"data-testid":`link-title-${t}`,weight:"semibold",children:r}),n&&e.jsx(gB,{"data-testid":`link-description-${t}`,children:n}),i]}),e.jsx(fB,{})]})},b=di({height:l?f.height:0});return e.jsxs(cB,Object.assign({},s,{children:[d.map(((t,r)=>{const{title:n,description:i,secondaryDescription:o,onClick:a}=t,s=X(t,["title","description","secondaryDescription","onClick"]);return e.jsx(hB,Object.assign({"data-testid":`list-item-shown-${r}`,onClick:e=>p(e,t)},s,{children:m(r,n,i,o)}),`list-item-shown-${r}`)})),u.length>0&&e.jsx(mB,{style:b,"data-testid":"minimised-content",children:e.jsx(bB,{ref:h,children:u.map(((t,r)=>{const{title:n,description:i,onClick:o,secondaryDescription:a}=t,s=X(t,["title","description","onClick","secondaryDescription"]);return e.jsx(hB,Object.assign({"data-testid":`list-item-minimised-${r}`,onClick:e=>p(e,t)},s,{children:m(r,n,i,a)}),`list-item-minimised-${r}`)}))})}),u.length>0&&e.jsxs(wB,{type:"button",onClick:g,"data-testid":"toggle-button",$showMinimised:l,children:[e.jsx(vB,{weight:"semibold","data-testid":"toggle-button-label",children:l?"View less":"View more"}),l?e.jsx(xB,{}):e.jsx(yB,{})]})]}))},exports.LoadingDots=Gl,exports.LoadingDotsSpinner=ec,exports.LoadingSpinner=r=>e.jsx(ql,Object.assign({},r,{children:e.jsx(t.Suspense,{fallback:e.jsx(Kl,{}),children:e.jsx(Ul,{})})})),exports.Markup=CB,exports.MaskedInput=tj,exports.Masonry=kB,exports.Masthead=TB,exports.MediaQuery=el,exports.Modal=fp,exports.Motion=Xs,exports.MyLegacyTheme={colourScheme:"mylegacy",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"mylegacy",_v2:{colorScheme:"mylegacy",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"mylegacy"}},exports.NBComponent=BR,exports.Navbar=SR,exports.NavbarHeight=jR,exports.NavbarMobileHeight=3.5,exports.NotificationBanner=PR,exports.OtpInput=r=>{var{id:n,value:i=[],"data-testid":o,className:a,cooldownDuration:s,actionButtonProps:l,errorMessage:c,numOfInput:d,onChange:u,onCooldownStart:f,onCooldownEnd:h}=r,p=X(r,["id","value","data-testid","className","cooldownDuration","actionButtonProps","errorMessage","numOfInput","onChange","onCooldownStart","onCooldownEnd"]);const g=null!=l?l:{},{disabled:m,onClick:b,styleType:v="secondary"}=g,y=X(g,["disabled","onClick","styleType"]),x=t.useRef([]),w=t.useRef(u),[$,C]=t.useState(new Array(d).fill("")),[S,j]=t.useState(s),[k,D]=t.useState(new Date);t.useEffect((()=>{var e;return null===(e=null==x?void 0:x.current[0])||void 0===e||e.focus(),document.addEventListener("paste",O),()=>document.removeEventListener("paste",O)}),[]),t.useEffect((()=>{if(0!==s){f&&f();const e=M();return()=>e()}}),[k]),t.useEffect((()=>{w.current=u}),[u]),t.useEffect((()=>{i.length===d&&C(i)}),[i]);const T=e=>t=>{var r;const n=t.target.value.replace(/[^0-9]/g,"");if(I(n)){const t=[...$];t[e]=n.substring(n.length-1),null===(r=x.current[e+1])||void 0===r||r.focus(),C(t),u&&u(t)}},E=e=>t=>{var r;const{key:n,code:i}=t;if("Backspace"===n||"Backspace"===i){const t=[...$];""!==t[e]?t[e]="":0!==e&&(t[e-1]="",null===(r=x.current[e-1])||void 0===r||r.focus()),C(t),u&&u(t)}},O=e=>{if(!e.clipboardData)return;const t=e.clipboardData.getData("text"),r=t.split("");t&&I(t,d)?(C(r),w.current&&w.current(r)):e.preventDefault()},I=(e,t=1)=>!!e&&RegExp(`^[0-9]{${t}}$`).test(e),F=()=>{const e=Date.now(),t=1e3*s;return e<k.valueOf()+t},M=()=>{const e=setInterval((()=>{const t=Date.now(),r=1e3*s,n=Math.ceil((k.valueOf()+r-t)/1e3);j(n),n<=0&&(h&&h(),clearInterval(e))}),1e3);return()=>{clearInterval(e)}},_=(e,t,r)=>r?`${r}-${t}-${e+1}`:`${t}-${e+1}`;return e.jsxs(HR,{id:n,"data-testid":o,className:a,children:[e.jsx(WR,{children:$.map(((t,r)=>e.jsx(VR,Object.assign({id:_(r,"otp-input",n),"data-testid":_(r,"otp-input",o),"aria-label":`Enter OTP character ${r+1}`,ref:e=>x.current[r]=e,type:"text",inputMode:"numeric",value:t,error:!!c,onChange:T(r),onKeyDown:E(r),autoComplete:"off"},p),r)))}),c&&e.jsx(Ky,{children:c}),e.jsx(YR,Object.assign({styleType:v,type:"button"},y,{onClick:e=>{C(new Array(d).fill("")),F()||(D(new Date),j(s)),b&&b(e)},disabled:m||F(),children:y.children?y.children:"Resend OTP"+(S?` in ${S} second${S>1?"s":""}`:"")}))]})},exports.Overlay=Zh,exports.PATheme={colourScheme:"pa",fontScheme:"pa",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"pa"},exports.Pagination=oz,exports.PhoneNumberInput=eI,exports.Pill=cz,exports.Popover=zz,exports.PopoverInline=Ly,exports.PopoverTrigger=By,exports.PopoverV2=_y,exports.PredictiveTextInput=nI,exports.ProgressIndicator=t=>{var{steps:r,currentIndex:n,displayExtractor:o,fadeColor:a,fadePosition:s}=t,l=X(t,["steps","currentIndex","displayExtractor","fadeColor","fadePosition"]);const c=i.useTheme(),d=Js["lg-max"]({theme:c}),u=oc.useMediaQuery({maxWidth:d}),f=e=>{var t;return o?o(e):null!==(t=null==e?void 0:e.toString())&&void 0!==t?t:""},h=(e,t)=>IP(`${((e,t)=>e<t?"Completed step":e===t?"Current step":"Uncompleted step")(e,t)} ${e}`);if(!r.length)return null;return e.jsxs(Pz,Object.assign({},l,{children:[e.jsx(Lz,{children:r.map(((t,r)=>{const i=r<=n;return e.jsx(Vz,{id:h(r,n),children:e.jsx(Nz,{highlighted:i})},r)}))}),e.jsx(Lz,{children:u?e.jsxs(Vz,{id:h(n,n),children:[e.jsxs(Wz,{weight:"semibold",id:`${h(n,n)}-counter`,children:["Step ",n+1," of ",r.length]}),e.jsx(Wz,{weight:"regular",id:`${h(n,n)}-title`,children:f(r[n])})]},n):r.map(((t,r)=>{const i=r<=n,o=r===n,a=o?"bold":"regular";return e.jsx(Vz,{id:`${h(r,n)}-title`,children:e.jsx(Hz,{highlighted:i,weight:a,"aria-current":o,children:f(t)})},r)}))})]}))},exports.RBSTheme={colourScheme:"rbs",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"rbs",_v2:{colorScheme:"rbs",textStyleScheme:"base",designTokenScheme:"rbs",resourceScheme:"rbs"}},exports.RadioButton=t=>{var{className:r,checked:n,disabled:i,displaySize:o="default",onChange:a}=t,s=X(t,["className","checked","disabled","displaySize","onChange"]);return e.jsxs(FP,{$selected:n,$disabled:i,className:r,$displaySize:o,"data-testid":"radio-button",children:[e.jsx(AP,Object.assign({type:"radio","data-testid":"radio-input",onChange:e=>{i||null==a||a(e)},checked:n,disabled:i},s)),n?e.jsx(_P,{"data-testid":"radio-checked",$disabled:i}):e.jsx(MP,{"data-testid":"radio-unchecked",$disabled:i})]})},exports.Radius=Qs,exports.SelectHistogram=pI,exports.Sidenav=rL,exports.SignatureCanvas=Ip,exports.SignatureCanvasContainer=Op,exports.SmartAppBanner=$L,exports.Spacing=Zs,exports.Tab=RL,exports.Tag=t=>{var{type:r,colorType:n="black",children:i,interactive:o=!1,icon:a,iconPosition:s="left"}=t,l=X(t,["type","colorType","children","interactive","icon","iconPosition"]);return e.jsxs(zL,Object.assign({as:o?"button":"div",$type:r,$color:n,$interactive:o},l,{children:["left"===s&&a,e.jsx(PL,{children:i}),"right"===s&&a]}))},exports.Textarea=wI,exports.TimeRangePicker=vF,exports.TimeSlotBar=({"data-testid":r,className:n,variant:i="default",startTime:o,endTime:a,slots:s,onSlotClick:l,onClick:c,styleAttributes:d})=>{const u=t.useRef(null),[f,h]=t.useState(0),[p,g]=t.useState(0),m=HL(i),b=2.5*m;t.useEffect((()=>{const e=u.current;return e&&e.addEventListener("scroll",v),()=>{e&&e.removeEventListener("scroll",v)}}),[]);const v=()=>{u.current&&h(u.current.scrollLeft)},y=e=>{u.current&&u.current.scrollBy({left:"left"===e?-b:b,behavior:"smooth"})};qe({onResize:()=>{u.current&&g(u.current.clientWidth)},targetRef:u,refreshMode:"debounce",refreshRate:50});const x=e=>e<=m/2,w=e=>{if(r)return`${r}-${e}`},$=(e,t,r)=>{const n=0===e.minute();if("default"===r)return n;return n&&(t?e.hour()%2==0:e.hour()%2==1)};return e.jsxs(VL,{className:n,children:[e.jsxs(qL,{"data-testid":r,ref:u,$variant:i,children:[e.jsx(XL,{"data-testid":w("time-marker-wrapper"),"data-id":"marker-wrapper",children:(()=>{const t=[],r=xc(o,"HH:mm"),n=xc(a,"HH:mm"),s=r.hour()%2==0;for(let o=r;o.isBefore(n);o=o.add(30,"minute")){const r=$(o,s,i);t.push(e.jsx(ZL,{$isLongMarker:r,$variant:i,children:r&&e.jsx(QL,{weight:"semibold",children:LL.formatHourlyDisplay(o.format("HH:mm"))})},o.format("HH:mm")))}return t})()}),e.jsxs(GL,{"data-testid":w("time-slot-wrapper"),"data-id":"slot-wrapper",children:[(()=>{if(!d)return;const{backgroundColor:t,backgroundColor2:r,styleType:n="default"}=d,s=LL.calculateWidth(o,a,m),l=!!c&&"default"===i;return e.jsxs(e.Fragment,{children:[e.jsx(eN,{$variant:i}),e.jsx(JL,{"data-testid":w("default-timeslot"),$width:s,$variant:i,$left:0,$styleType:n,$bgColor:t,$bgColor2:r,$clickable:l,onClick:l?c:void 0},"default-timeslot")]})})(),s.map((t=>{const{id:r,startTime:n,endTime:s,label:c,clickable:d=!0,styleAttributes:u}=t,{color:f,styleType:h="default",backgroundColor:p,backgroundColor2:g}=u,b=LL.calculateWidth(n,s,m),v=LL.calculateWidth(o,n,m),y=d&&"default"===i;return e.jsxs("div",{children:[e.jsx(eN,{$variant:i,style:{left:`${v}px`}}),e.jsx(JL,{"data-testid":w(`${r}-timeslot`),$width:b,$left:v,$styleType:h,$variant:i,$bgColor:p,$bgColor2:g,$clickable:y,onClick:()=>y&&l(t),children:c&&"default"===i&&e.jsx(tN,{$slotWidth:b,$color:f,weight:"semibold",children:x(b)?"...":c})}),a!==s&&e.jsx(eN,{$variant:i,style:{left:`${v+b}px`}})]},r)}))]})]}),e.jsx(e.Fragment,{children:f>0&&e.jsx(YL,{"data-testid":w("arrow-left"),$direction:"left",$variant:i,focusHighlight:!1,focusOutline:"none",onClick:()=>{y("left")},children:e.jsx(KL,{})})}),f+p<LL.calculateWidth(o,a,m)?e.jsx(YL,{"data-testid":w("arrow-right"),$direction:"right",$variant:i,focusHighlight:!1,focusOutline:"none",onClick:()=>{y("right")},children:e.jsx(UL,{})}):e.jsx(e.Fragment,{})]})},exports.TimeSlotBarWeek=r=>{var{disabledDates:n,onWeekDisplayChange:i,onChange:o,value:a,minDate:s,maxDate:l,startTime:c,endTime:d,slots:u,interval:f,variant:h,maxVisibleCellHeight:p,showNavigationHeader:g=!0,enableSelection:m,onSlotClick:b,currentCalendarDate:v}=r,y=X(r,["disabledDates","onWeekDisplayChange","onChange","value","minDate","maxDate","startTime","endTime","slots","interval","variant","maxVisibleCellHeight","showNavigationHeader","enableSelection","onSlotClick","currentCalendarDate"]);const[x,w]=t.useState(a),$=t.useRef(null),C=t.useRef(void 0);t.useEffect((()=>{w(a)}),[a]);const S=e=>{const t=e.format(TN);w(t),o&&o(t)},j=(e,t)=>{b&&b(e,t)},k=e=>{if(i){const t={week:{firstDayOfWeek:e.startOf("week").format(TN),lastDayOfWeek:e.endOf("week").format(TN)},month:e.month()+1,year:e.year()};i(t)}};return e.jsx(DN,Object.assign({},y,{children:e.jsx(Ed,{ref:$,dynamicHeight:!0,initialCalendarDate:zc.toDayjs(x||v).endOf("week").format(TN),selectedStartDate:x,getLeftArrowDate:e=>e.subtract(1,"week"),getRightArrowDate:e=>e.add(1,"week"),isLeftArrowDisabled:e=>!!s&&xc(e).subtract(1,"week").isBefore(s,"week"),isRightArrowDisabled:e=>!!l&&xc(e).add(1,"week").isAfter(l,"week"),onCalendarDateChange:e=>{C.current&&C.current.isSame(e,"week")||k(e),C.current=e},showNavigationHeader:g,minDate:s,maxDate:l,getMonthHeaderLabel:e=>xc(e).endOf("week").format("MMM"),getYearHeaderLabel:e=>xc(e).endOf("week").format("YYYY"),children:({calendarDate:t})=>(t=>e.jsx(kN,{calendarDate:t,disabledDates:n,selectedDate:x,minDate:s,maxDate:l,startTime:c,endTime:d,onSelect:S,slots:u,interval:f,variant:h,maxVisibleCellHeight:p,enableSelection:m,onSlotClick:j}))(t)})}))},exports.TimeSlotWeekView=r=>{var{disabledDates:n,onWeekDisplayChange:i,onChange:o,value:a,minDate:s,maxDate:l,slots:c,showNavigationHeader:d=!0,enableSelection:u,onSlotClick:f,currentCalendarDate:h}=r,p=X(r,["disabledDates","onWeekDisplayChange","onChange","value","minDate","maxDate","slots","showNavigationHeader","enableSelection","onSlotClick","currentCalendarDate"]);const[g,m]=t.useState(a),b=t.useRef(null),v=t.useRef(void 0);t.useEffect((()=>{m(a)}),[a]);const y=e=>{const t=e.format(PN);m(t),o&&o(t)},x=(e,t)=>{f&&f(e,t)},w=e=>{if(i){const t={week:{firstDayOfWeek:e.startOf("week").format(PN),lastDayOfWeek:e.endOf("week").format(PN)},month:e.month()+1,year:e.year()};i(t)}};return e.jsx(zN,Object.assign({},p,{children:e.jsx(Ed,{ref:b,dynamicHeight:!0,initialCalendarDate:zc.toDayjs(g||h).endOf("week").format(PN),selectedStartDate:g,getLeftArrowDate:e=>e.subtract(1,"week"),getRightArrowDate:e=>e.add(1,"week"),isLeftArrowDisabled:e=>!!s&&xc(e).subtract(1,"week").isBefore(s,"week"),isRightArrowDisabled:e=>!!l&&xc(e).add(1,"week").isAfter(l,"week"),onCalendarDateChange:e=>{v.current&&v.current.isSame(e,"week")||w(e),v.current=e},showNavigationHeader:d,minDate:s,maxDate:l,getMonthHeaderLabel:e=>xc(e).endOf("week").format("MMM"),getYearHeaderLabel:e=>xc(e).endOf("week").format("YYYY"),children:({calendarDate:t})=>e.jsx(RN,{calendarDate:t,disabledDates:n,selectedDate:g,minDate:s,maxDate:l,onSelect:y,slots:c,enableSelection:u,onSlotClick:x})})}))},exports.TimeTable=r=>{var{date:n,emptyContentMessage:i,rowData:o,loading:a,minTime:s="00:00",maxTime:l="23:00",minDate:c,maxDate:d,totalRecords:u,showCurrentDateAsToday:f,showDateAsShortForm:h,onPage:p,onRefresh:g,onNextDayClick:m,onPreviousDayClick:b,onCalendarDateSelect:v}=r,y=X(r,["date","emptyContentMessage","rowData","loading","minTime","maxTime","minDate","maxDate","totalRecords","showCurrentDateAsToday","showDateAsShortForm","onPage","onRefresh","onNextDayClick","onPreviousDayClick","onCalendarDateSelect"]);const x=y["data-testid"]||"timetable",w=Au.roundToNearestHour(s),$=Au.roundToNearestHour(l,!0),C=Au.generateHourlyIntervals(w,$),S=0===u||ej.isEmpty(o),j=S||o.length===u,k=t.useRef(null),D=t.useRef(null),[T,E]=t.useState(!1),[O,I]=t.useState(!1),[F,M]=t.useState(0),[_,A]=t.useState(!1);t.useEffect((()=>{const e=ej.throttle((()=>{if(k.current&&(E(k.current.scrollLeft>0),I(k.current.scrollTop>0)),_||!k.current)return;const{scrollTop:e,clientHeight:t,scrollHeight:r}=k.current;Math.ceil(e+t)>=r-1&&!j&&p&&!a&&(A(!0),p())}),100),t=k.current;return t&&t.addEventListener("scroll",e),()=>{t&&t.removeEventListener("scroll",e)}}),[j,_,a,p]),t.useEffect((()=>{A(!1)}),[o]);qe({onResize:()=>{if(k.current){const e=Math.ceil(60*C.length/15),t=(k.current.clientWidth-ZN)/e;M(t>21?t:21)}},targetRef:k,refreshMode:"debounce",refreshRate:50});const B=(()=>{let e=0;const t=GN.length;return()=>{const r=GN[e];return e=(e+1)%t,r}})(),R=({wrapper:e,children:t})=>e(t),z=()=>{if(!a&&_)return e.jsx(SH,{$isScrolled:T,children:e.jsx(FH,{})})},P=()=>{if(!a&&_)return e.jsx(EH,{"data-testid":"lazy-loader",children:C.map(((t,r)=>e.jsx(OH,{$width:4*F,children:e.jsx(FH,{})},`lazy-load-cell-${r}`)))})};return S?e.jsxs(gH,Object.assign({},y,{"data-testid":x,children:[e.jsx(iH,{selectedDate:n,loading:a||_,tableContainerRef:k,minDate:c,maxDate:d,totalRecords:u,showCurrentDateAsToday:f,showDateAsShortForm:h,onPreviousDayClick:b,onNextDayClick:m,onRefresh:g,onCalendarDateSelect:v}),e.jsx(mH,{className:"empty-container",children:a?e.jsx(DH,{$isEmptyContent:S}):e.jsx(TH,{type:"no-item-found",description:i})})]})):e.jsxs(gH,Object.assign({},y,{"data-testid":x,children:[e.jsx(iH,{"data-id":"timetable-date-navigator",selectedDate:n,loading:a||_,tableContainerRef:k,minDate:c,maxDate:d,totalRecords:u,showCurrentDateAsToday:f,showDateAsShortForm:h,onPreviousDayClick:b,onNextDayClick:m,onRefresh:g,onCalendarDateSelect:v}),e.jsxs(bH,{"data-id":"timetable-container","data-testid":"timetable-container",ref:k,$loading:a,$allRecordsLoaded:j||!p,children:[e.jsx(vH,{$isScrolledY:O,$isScrolledX:T}),e.jsx(yH,{$numOfRows:o.length,$isScrolled:T,"data-testid":"row-header-column-id",children:e.jsxs(e.Fragment,{children:[o.map(((r,n)=>e.jsx(R,{wrapper:e=>((e,r)=>{if(!e.rowHeaderPopover)return r;const n={position:"bottom-start",rootNode:k,customOffset:e.rowHeaderPopover.offset,children:r,trigger:e.rowHeaderPopover.trigger,delay:e.rowHeaderPopover.delay,popoverContent:e.rowHeaderPopover.content};return t.createElement(MH,Object.assign({},n,{key:`${e.id}-popover-trigger`,zIndex:2}),r)})(r,e),children:e.jsxs(SH,{$isScrolled:T,children:[e.jsx(jH,{$isClickable:!!r.onRowNameClick,onClick:e=>((e,t)=>{e.onRowNameClick&&e.onRowNameClick(e,t)})(r,e),weight:"semibold","data-testid":`${r.id}-row-header-title`,children:r.name}),e.jsx(kH,{weight:"bold",$show:!!r.subtitle,"data-testid":`${r.id}-row-header-subtitle`,children:r.subtitle})]},`${r.id}-row-header`)},n))),z()]})}),e.jsx(xH,{$numOfColumns:C.length,$isScrolled:O,children:C.map((t=>e.jsx(wH,{"data-testid":`${t}-column`,children:e.jsx($H,{weight:"semibold",children:t})},`${t}-column-key`)))}),a?e.jsx(DH,{$isEmptyContent:S}):e.jsxs(CH,{"data-testid":"content-container-id",ref:D,$numOfRows:o.length,children:[o.map(((t,r)=>e.jsx(pH,Object.assign({timetableMinTime:w,timetableMaxTime:$,rowBarColor:B(),intervalWidth:F,containerRef:D},t),`${r}-row-bar`))),P()]})]})]}))},exports.Timeline=({items:r,className:n,id:i,title:o,startCol:a,colSpan:s,"data-base-indicator-testid":l,"data-testid":c="timeline"})=>{const d=t=>"string"==typeof t?e.jsx(exports.Typography.BodyMD,{className:"timeline-item-content-text",children:t}):e.jsx(e.Fragment,{children:t}),f=t=>"string"==typeof t?e.jsx(YN,{weight:"semibold",className:"timeline-item-title",children:t}):e.jsx(e.Fragment,{children:t}),h=e=>e.slice(0,2).map(((e,r)=>t.createElement(XN,Object.assign({},e,{type:e.type,key:`status-pill-${r}`,"data-testid":"status-pill",className:"timeline-status-pill"}),e.children))),p=t=>{switch(t){case"completed":return e.jsx(u.TickIcon,{});case"error":return e.jsx(u.ExclamationCircleFillIcon,{});default:return null}};return e.jsxs(WN,{className:n,id:i,"data-testid":c,$startCol:a,$colSpan:s,children:[e.jsx(VN,{"data-testid":"timeline-title",weight:"bold",children:o}),r.map(((t,r)=>{const{title:n,content:i,statuses:o,variant:a}=t,s=l?`circleindicator${r+1}_div_${l}`:"circleindicator",c=a||(0===r?"current":"upcoming-active");return e.jsxs(UN,{children:[e.jsxs(HN,{children:[e.jsx(LN,{"data-testid":s,$variant:c,children:p(c)}),e.jsx(NN,{$variant:c})]}),e.jsxs(KN,{className:"timeline-item-content",children:[f(n),o&&e.jsx(qN,{children:h(o)}),d(i)]})]},`timeline-item-${r}`)}))]})},exports.Timepicker=xF,exports.Toast=r=>{var{type:n="success",title:o,label:a,autoDismiss:s,autoDismissTime:l=WH,onDismiss:c,fixed:d=!0,actionButton:f}=r,h=X(r,["type","title","label","autoDismiss","autoDismissTime","onDismiss","fixed","actionButton"]);const[p,g]=t.useState(!1),m=i.useTheme(),b=Js["lg-max"]({theme:m}),v=oc.useMediaQuery({maxWidth:b});t.useEffect((()=>{g(!0)}),[]),t.useEffect((()=>{if(!s)return;const e=setTimeout((()=>{g(!1)}),l);return()=>clearTimeout(e)}),[s]);const y=di({opacity:p?1:0,transform:p?v?"translateY(0%)":"translateX(0%)":v?"translateY(-1500%)":"translateX(150%)",config:{easing:dr.easeInOutQuart,duration:1e3},onRest:()=>{p||null==c||c()}});return e.jsxs(AH,Object.assign({style:y,$type:n,$fixed:d},h,{children:[e.jsxs(BH,{children:[e.jsxs(RH,{$type:n,children:[(()=>{switch(n){case"success":return e.jsx(u.TickCircleFillIcon,{});case"warning":return e.jsx(u.ExclamationTriangleFillIcon,{});case"error":return e.jsx(u.ExclamationCircleFillIcon,{});case"info":return e.jsx(u.ICircleFillIcon,{});default:return null}})(),e.jsxs(zH,{children:[o&&(Y.default.isValidElement(o)?o:e.jsx(PH,{$type:n,weight:"semibold",children:o})),a&&e.jsx(LH,{$type:n,children:Y.default.isValidElement(a)?a:o?e.jsx(exports.Typography.BodyMD,{children:a}):e.jsx(exports.Typography.BodyBL,{children:a})})]})]}),f&&e.jsx(NH,{styleType:"light",onClick:f.onClick,children:f.label})]}),e.jsx(HH,{$type:n,onClick:()=>{g(!1)},children:e.jsx(u.CrossIcon,{})})]}))},exports.Toggle=ZI,exports.Tooltip=qH,exports.UneditableSection=fW,exports.UnitNumberInput=DF,exports.V2_BaseTheme=DW,exports.V2_BookingSGTheme=TW,exports.V2_CCubeTheme=IW,exports.V2_Color=gz,exports.V2_DesignToken=gW,exports.V2_Layout=wW,exports.V2_MediaQuery=Lh,exports.V2_MediaWidths=Nh,exports.V2_MyLegacyTheme=OW,exports.V2_OneServiceTheme=FW,exports.V2_RBSTheme=EW,exports.V2_TextList=kW,exports.V2_TextStyle=wz,exports.V2_TextStyleHelper=Dz,exports.V2_Transition=Fz,exports.__awaiter=G,exports.commonjsGlobal=Ei,exports.getAugmentedNamespace=function(e){if(e.__esModule)return e;var t=e.default;if("function"==typeof t){var r=function e(){return this instanceof e?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:function(){return e[t]}})})),r},exports.withNotificationBanner=t=>Y.default.forwardRef(((r,n)=>e.jsx(BR,Object.assign({forwardedRef:n},r,{children:t.length>0?t.map(((t,r)=>{if("text"===t.type){const n=t.otherAttributes,i=NR.sanitize(t.content);return e.jsx("p",Object.assign({},n,{dangerouslySetInnerHTML:{__html:i}}),r)}{const n=t.otherAttributes;return e.jsx(PR.Link,Object.assign({},n,{children:t.content}),r)}})):(console.error("[NotificationBannerHOC] Empty data passed"),null)})))),exports.withPopover=(r,n)=>i=>{const{onPopoverAppear:o,onPopoverDismiss:a}=i,s=X(i,["onPopoverAppear","onPopoverDismiss"]),l=n.trigger||"click",c=s,[d,u]=t.useState(!1),f=t.useRef(null),h=oc.useMediaQuery({maxWidth:zh.mobileL});t.useEffect((()=>{if(!h)return document.addEventListener("mousedown",p),()=>{document.removeEventListener("mousedown",p)}}),[d]);const p=e=>{f&&!f.current.contains(e.target)&&(d&&u(!1),a&&a())};return e.jsxs(Az,{id:"popover-hoc-wrapper",ref:f,children:[e.jsx(Bz,{id:`popover-hoc-trigger${n["data-testid"]&&`-${n["data-testid"]}`}`,type:"button",onClick:e=>{e.preventDefault(),("click"===l||h)&&(u(!d),!d&&o&&o(),d&&a&&a())},onMouseEnter:()=>{"hover"!==l||h||u(!0)},onMouseLeave:()=>{"hover"===l&&d&&!h&&u(!1)},"aria-label":"popover-button",children:e.jsx(r,Object.assign({},c))}),e.jsx(zz,{visible:d,id:n.id,"data-testid":n["data-testid"],onMobileClose:()=>{u(!1)},children:n.content})]})},exports.withTooltip=(t,r)=>n=>{const{tooltipVisible:i,position:o}=n,a=X(n,["tooltipVisible","position"]);return e.jsxs(KH,{children:[e.jsx(t,Object.assign({},a)),e.jsx(qH,{visible:i,position:o,children:r.content})]})};
//# sourceMappingURL=index.ebec135e.js.map
