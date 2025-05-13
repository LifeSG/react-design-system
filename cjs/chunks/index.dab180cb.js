"use strict";var e=require("react/jsx-runtime"),t=require("react"),r=require("react-dom"),n=require("@lifesg/react-icons/chevron-up"),i=require("styled-components"),o=require("@lifesg/react-icons/external"),a=require("@lifesg/react-icons/arrow-right"),s=require("@lifesg/react-icons/exclamation-circle-fill"),l=require("@lifesg/react-icons/exclamation-triangle-fill"),c=require("@lifesg/react-icons/i-circle-fill"),d=require("@lifesg/react-icons/tick-circle-fill"),u=require("@lifesg/react-icons"),f=require("@lifesg/react-icons/chevron-down"),h=require("@lifesg/react-icons/chevron-right"),p=require("@lifesg/react-icons/chevron-left"),g=require("@floating-ui/react"),m=require("@lifesg/react-icons/cross"),b=require("@lifesg/react-icons/star"),v=require("@lifesg/react-icons/star-fill"),y=require("@lifesg/react-icons/cloud-arrow-up-fill"),x=require("@lifesg/react-icons/magnifier"),w=require("@lifesg/react-icons/eye"),$=require("@lifesg/react-icons/eye-slash"),C=require("@lifesg/react-icons/exclamation-triangle"),S=require("@lifesg/react-icons/square"),j=require("@lifesg/react-icons/square-tick-fill"),k=require("@lifesg/react-icons/tick"),D=require("@lifesg/react-icons/caret-right"),T=require("@lifesg/react-icons/minus-square-fill"),E=require("@lifesg/react-icons/circle"),O=require("@lifesg/react-icons/circle-dot"),F=require("@lifesg/react-icons/bin"),I=require("@lifesg/react-icons/pencil"),_=require("@lifesg/react-icons/drag-handle"),M=require("@lifesg/react-icons/minus"),A=require("@lifesg/react-icons/plus"),B=require("@lifesg/react-icons/menu"),R=require("@lifesg/react-icons/chevron-2-left"),z=require("@lifesg/react-icons/chevron-2-right"),P=require("@lifesg/react-icons/chevron-line-left"),L=require("@lifesg/react-icons/chevron-line-right"),N=require("@lifesg/react-icons/ellipsis-horizontal"),H=require("@lifesg/react-icons/star-half");function W(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function V(e){if(e&&"object"==typeof e&&"default"in e)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(r){if("default"!==r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})}})),t.default=e,Object.freeze(t)}var Y=V(t),U=W(r),K=W(i);const q=Y.default.createContext(!1);function X(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}function G(e,t,r,n){return new(r||(r=Promise))((function(i,o){function a(e){try{l(n.next(e))}catch(e){o(e)}}function s(e){try{l(n.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}l((n=n.apply(e,t||[])).next())}))}function Z(e,t){var r,n,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(s){return function(l){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;o&&(o=0,s[0]&&(a=0)),a;)try{if(r=1,n&&(i=2&s[0]?n.return:s[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,s[1])).done)return i;switch(n=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,n=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){a.label=s[1];break}if(6===s[0]&&a.label<i[1]){a.label=i[1],i=s;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(s);break}i[2]&&a.ops.pop(),a.trys.pop();continue}s=t.call(e,a)}catch(e){s=[6,e],n=0}finally{r=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,l])}}}function Q(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,o=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=o.next()).done;)a.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=o.return)&&r.call(o)}finally{if(i)throw i.error}}return a}function J(e,t,r){if(r||2===arguments.length)for(var n,i=0,o=t.length;i<o;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return e.concat(n||Array.prototype.slice.call(t))}"function"==typeof SuppressedError&&SuppressedError;var ee=function(e,t){return ee=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},ee(e,t)};var te=function(){return te=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},te.apply(this,arguments)};var re="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var ne=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},ie="object"==typeof re&&re&&re.Object===Object&&re,oe="object"==typeof self&&self&&self.Object===Object&&self,ae=ie||oe||Function("return this")(),se=ae,le=function(){return se.Date.now()},ce=/\s/;var de=function(e){for(var t=e.length;t--&&ce.test(e.charAt(t)););return t},ue=/^\s+/;var fe=function(e){return e?e.slice(0,de(e)+1).replace(ue,""):e},he=ae.Symbol,pe=he,ge=Object.prototype,me=ge.hasOwnProperty,be=ge.toString,ve=pe?pe.toStringTag:void 0;var ye=function(e){var t=me.call(e,ve),r=e[ve];try{e[ve]=void 0;var n=!0}catch(e){}var i=be.call(e);return n&&(t?e[ve]=r:delete e[ve]),i},xe=Object.prototype.toString;var we=ye,$e=function(e){return xe.call(e)},Ce=he?he.toStringTag:void 0;var Se=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Ce&&Ce in Object(e)?we(e):$e(e)},je=function(e){return null!=e&&"object"==typeof e};var ke=fe,De=ne,Te=function(e){return"symbol"==typeof e||je(e)&&"[object Symbol]"==Se(e)},Ee=/^[-+]0x[0-9a-f]+$/i,Oe=/^0b[01]+$/i,Fe=/^0o[0-7]+$/i,Ie=parseInt;var _e=ne,Me=le,Ae=function(e){if("number"==typeof e)return e;if(Te(e))return NaN;if(De(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=De(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=ke(e);var r=Oe.test(e);return r||Fe.test(e)?Ie(e.slice(2),r?2:8):Ee.test(e)?NaN:+e},Be=Math.max,Re=Math.min;var ze=function(e,t,r){var n,i,o,a,s,l,c=0,d=!1,u=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var r=n,o=i;return n=i=void 0,c=t,a=e.apply(o,r)}function p(e){var r=e-l;return void 0===l||r>=t||r<0||u&&e-c>=o}function g(){var e=Me();if(p(e))return m(e);s=setTimeout(g,function(e){var r=t-(e-l);return u?Re(r,o-(e-c)):r}(e))}function m(e){return s=void 0,f&&n?h(e):(n=i=void 0,a)}function b(){var e=Me(),r=p(e);if(n=arguments,i=this,l=e,r){if(void 0===s)return function(e){return c=e,s=setTimeout(g,t),d?h(e):a}(l);if(u)return clearTimeout(s),s=setTimeout(g,t),h(l)}return void 0===s&&(s=setTimeout(g,t)),a}return t=Ae(t)||0,_e(r)&&(d=!!r.leading,o=(u="maxWait"in r)?Be(Ae(r.maxWait)||0,t):o,f="trailing"in r?!!r.trailing:f),b.cancel=function(){void 0!==s&&clearTimeout(s),c=0,n=l=i=s=void 0},b.flush=function(){return void 0===s?a:m(Me())},b},Pe=ze,Le=ne;var Ne=function(e,t,r){var n=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Le(r)&&(n="leading"in r?!!r.leading:n,i="trailing"in r?!!r.trailing:i),Pe(e,t,{leading:n,maxWait:t,trailing:i})},He=function(e,t,r,n){switch(t){case"debounce":return ze(e,r,n);case"throttle":return Ne(e,r,n);default:return e}},We=function(e){return"function"==typeof e},Ve=function(){return"undefined"==typeof window},Ye=function(e){return e instanceof Element||e instanceof HTMLDocument},Ue=function(e,t,r,n){return function(i){var o=i.width,a=i.height;t((function(t){return t.width===o&&t.height===a||t.width===o&&!n||t.height===a&&!r?t:(e&&We(e)&&e(o,a),{width:o,height:a})}))}};!function(e){function n(n){var i=e.call(this,n)||this;i.cancelHandler=function(){i.resizeHandler&&i.resizeHandler.cancel&&(i.resizeHandler.cancel(),i.resizeHandler=null)},i.attachObserver=function(){var e=i.props,t=e.targetRef,r=e.observerOptions;if(!Ve()){t&&t.current&&(i.targetRef.current=t.current);var n=i.getElement();n&&(i.observableElement&&i.observableElement===n||(i.observableElement=n,i.resizeObserver.observe(n,r)))}},i.getElement=function(){var e=i.props,t=e.querySelector,n=e.targetDomEl;if(Ve())return null;if(t)return document.querySelector(t);if(n&&Ye(n))return n;if(i.targetRef&&Ye(i.targetRef.current))return i.targetRef.current;var o=r.findDOMNode(i);if(!o)return null;switch(i.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return o;default:return o.parentElement}},i.createResizeHandler=function(e){var t=i.props,r=t.handleWidth,n=void 0===r||r,o=t.handleHeight,a=void 0===o||o,s=t.onResize;if(n||a){var l=Ue(s,i.setState.bind(i),n,a);e.forEach((function(e){var t=e&&e.contentRect||{},r=t.width,n=t.height;!i.skipOnMount&&!Ve()&&l({width:r,height:n}),i.skipOnMount=!1}))}},i.getRenderType=function(){var e=i.props,r=e.render,n=e.children;return We(r)?"renderProp":We(n)?"childFunction":t.isValidElement(n)?"child":Array.isArray(n)?"childArray":"parent"};var o=n.skipOnMount,a=n.refreshMode,s=n.refreshRate,l=void 0===s?1e3:s,c=n.refreshOptions;return i.state={width:void 0,height:void 0},i.skipOnMount=o,i.targetRef=t.createRef(),i.observableElement=null,Ve()||(i.resizeHandler=He(i.createResizeHandler,a,l,c),i.resizeObserver=new window.ResizeObserver(i.resizeHandler)),i}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}ee(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)})(n,e),n.prototype.componentDidMount=function(){this.attachObserver()},n.prototype.componentDidUpdate=function(){this.attachObserver()},n.prototype.componentWillUnmount=function(){Ve()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},n.prototype.render=function(){var e,r=this.props,n=r.render,i=r.children,o=r.nodeType,a=void 0===o?"div":o,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return n&&n(l);case"childFunction":return(e=i)(l);case"child":if((e=i).type&&"string"==typeof e.type){var c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}(l,["targetRef"]);return t.cloneElement(e,c)}return t.cloneElement(e,l);case"childArray":return(e=i).map((function(e){return!!e&&t.cloneElement(e,l)}));default:return Y.createElement(a,null)}}}(t.PureComponent);var Ke=Ve()?t.useEffect:t.useLayoutEffect;function qe(e){void 0===e&&(e={});var r=e.skipOnMount,n=void 0!==r&&r,i=e.refreshMode,o=e.refreshRate,a=void 0===o?1e3:o,s=e.refreshOptions,l=e.handleWidth,c=void 0===l||l,d=e.handleHeight,u=void 0===d||d,f=e.targetRef,h=e.observerOptions,p=e.onResize,g=t.useRef(n),m=t.useRef(null),b=null!=f?f:m,v=t.useRef(),y=t.useState({width:void 0,height:void 0}),x=y[0],w=y[1];return Ke((function(){if(!Ve()){var e=Ue(p,w,c,u);v.current=He((function(t){(c||u)&&t.forEach((function(t){var r=t&&t.contentRect||{},n=r.width,i=r.height;!g.current&&!Ve()&&e({width:n,height:i}),g.current=!1}))}),i,a,s);var t=new window.ResizeObserver(v.current);return b.current&&t.observe(b.current,h),function(){t.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[i,a,s,c,u,p,h,b.current]),te({ref:b},x)}var Xe=Object.defineProperty,Ge={};((e,t)=>{for(var r in t)Xe(e,r,{get:t[r],enumerable:!0})})(Ge,{assign:()=>Et,colors:()=>kt,createStringInterpolator:()=>$t,skipAnimation:()=>Dt,to:()=>Ct,willAdvance:()=>Tt});var Ze=ht(),Qe=e=>ct(e,Ze),Je=ht();Qe.write=e=>ct(e,Je);var et=ht();Qe.onStart=e=>ct(e,et);var tt=ht();Qe.onFrame=e=>ct(e,tt);var rt=ht();Qe.onFinish=e=>ct(e,rt);var nt=[];Qe.setTimeout=(e,t)=>{const r=Qe.now()+t,n=()=>{const e=nt.findIndex((e=>e.cancel==n));~e&&nt.splice(e,1),st-=~e?1:0},i={time:r,handler:e,cancel:n};return nt.splice(it(r),0,i),st+=1,dt(),i};var it=e=>~(~nt.findIndex((t=>t.time>e))||~nt.length);Qe.cancel=e=>{et.delete(e),tt.delete(e),rt.delete(e),Ze.delete(e),Je.delete(e)},Qe.sync=e=>{lt=!0,Qe.batchedUpdates(e),lt=!1},Qe.throttle=e=>{let t;function r(){try{e(...t)}finally{t=null}}function n(...e){t=e,Qe.onStart(r)}return n.handler=e,n.cancel=()=>{et.delete(r),t=null},n};var ot="undefined"!=typeof window?window.requestAnimationFrame:()=>{};Qe.use=e=>ot=e,Qe.now="undefined"!=typeof performance?()=>performance.now():Date.now,Qe.batchedUpdates=e=>e(),Qe.catch=console.error,Qe.frameLoop="always",Qe.advance=()=>{"demand"!==Qe.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):ft()};var at=-1,st=0,lt=!1;function ct(e,t){lt?(t.delete(e),e(0)):(t.add(e),dt())}function dt(){at<0&&(at=0,"demand"!==Qe.frameLoop&&ot(ut))}function ut(){~at&&(ot(ut),Qe.batchedUpdates(ft))}function ft(){const e=at;at=Qe.now();const t=it(at);t&&(pt(nt.splice(0,t),(e=>e.handler())),st-=t),st?(et.flush(),Ze.flush(e?Math.min(64,at-e):16.667),tt.flush(),Je.flush(),rt.flush()):at=-1}function ht(){let e=new Set,t=e;return{add(r){st+=t!=e||e.has(r)?0:1,e.add(r)},delete:r=>(st-=t==e&&e.has(r)?1:0,e.delete(r)),flush(r){t.size&&(e=new Set,st-=t.size,pt(t,(t=>t(r)&&e.add(t))),st+=e.size,t=e)}}}function pt(e,t){e.forEach((e=>{try{t(e)}catch(e){Qe.catch(e)}}))}function gt(){}var mt={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function bt(e,t){if(mt.arr(e)){if(!mt.arr(t)||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}return e===t}var vt=(e,t)=>e.forEach(t);function yt(e,t,r){if(mt.arr(e))for(let n=0;n<e.length;n++)t.call(r,e[n],`${n}`);else for(const n in e)e.hasOwnProperty(n)&&t.call(r,e[n],n)}var xt=e=>mt.und(e)?[]:mt.arr(e)?e:[e];function wt(e,t){if(e.size){const r=Array.from(e);e.clear(),vt(r,t)}}var $t,Ct,St=(e,...t)=>wt(e,(e=>e(...t))),jt=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),kt=null,Dt=!1,Tt=gt,Et=e=>{e.to&&(Ct=e.to),e.now&&(Qe.now=e.now),void 0!==e.colors&&(kt=e.colors),null!=e.skipAnimation&&(Dt=e.skipAnimation),e.createStringInterpolator&&($t=e.createStringInterpolator),e.requestAnimationFrame&&Qe.use(e.requestAnimationFrame),e.batchedUpdates&&(Qe.batchedUpdates=e.batchedUpdates),e.willAdvance&&(Tt=e.willAdvance),e.frameLoop&&(Qe.frameLoop=e.frameLoop)},Ot=new Set,Ft=[],It=[],_t=0,Mt={get idle(){return!Ot.size&&!Ft.length},start(e){_t>e.priority?(Ot.add(e),Qe.onStart(At)):(Bt(e),Qe(zt))},advance:zt,sort(e){if(_t)Qe.onFrame((()=>Mt.sort(e)));else{const t=Ft.indexOf(e);~t&&(Ft.splice(t,1),Rt(e))}},clear(){Ft=[],Ot.clear()}};function At(){Ot.forEach(Bt),Ot.clear(),Qe(zt)}function Bt(e){Ft.includes(e)||Rt(e)}function Rt(e){Ft.splice(function(e,t){const r=e.findIndex(t);return r<0?e.length:r}(Ft,(t=>t.priority>e.priority)),0,e)}function zt(e){const t=It;for(let r=0;r<Ft.length;r++){const n=Ft[r];_t=n.priority,n.idle||(Tt(n),n.advance(e),n.idle||t.push(n))}return _t=0,(It=Ft).length=0,(Ft=t).length>0}var Pt="[-+]?\\d*\\.?\\d+",Lt=Pt+"%";function Nt(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var Ht=new RegExp("rgb"+Nt(Pt,Pt,Pt)),Wt=new RegExp("rgba"+Nt(Pt,Pt,Pt,Pt)),Vt=new RegExp("hsl"+Nt(Pt,Lt,Lt)),Yt=new RegExp("hsla"+Nt(Pt,Lt,Lt,Pt)),Ut=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Kt=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,qt=/^#([0-9a-fA-F]{6})$/,Xt=/^#([0-9a-fA-F]{8})$/;function Gt(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function Zt(e,t,r){const n=r<.5?r*(1+t):r+t-r*t,i=2*r-n,o=Gt(i,n,e+1/3),a=Gt(i,n,e),s=Gt(i,n,e-1/3);return Math.round(255*o)<<24|Math.round(255*a)<<16|Math.round(255*s)<<8}function Qt(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function Jt(e){return(parseFloat(e)%360+360)%360/360}function er(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function tr(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function rr(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=qt.exec(e))?parseInt(t[1]+"ff",16)>>>0:kt&&void 0!==kt[e]?kt[e]:(t=Ht.exec(e))?(Qt(t[1])<<24|Qt(t[2])<<16|Qt(t[3])<<8|255)>>>0:(t=Wt.exec(e))?(Qt(t[1])<<24|Qt(t[2])<<16|Qt(t[3])<<8|er(t[4]))>>>0:(t=Ut.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=Xt.exec(e))?parseInt(t[1],16)>>>0:(t=Kt.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=Vt.exec(e))?(255|Zt(Jt(t[1]),tr(t[2]),tr(t[3])))>>>0:(t=Yt.exec(e))?(Zt(Jt(t[1]),tr(t[2]),tr(t[3]))|er(t[4]))>>>0:null}(e);if(null===t)return e;t=t||0;return`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`}var nr=(e,t,r)=>{if(mt.fun(e))return e;if(mt.arr(e))return nr({range:e,output:t,extrapolate:r});if(mt.str(e.output[0]))return $t(e);const n=e,i=n.output,o=n.range||[0,1],a=n.extrapolateLeft||n.extrapolate||"extend",s=n.extrapolateRight||n.extrapolate||"extend",l=n.easing||(e=>e);return e=>{const t=function(e,t){for(var r=1;r<t.length-1&&!(t[r]>=e);++r);return r-1}(e,o);return function(e,t,r,n,i,o,a,s,l){let c=l?l(e):e;if(c<t){if("identity"===a)return c;"clamp"===a&&(c=t)}if(c>r){if("identity"===s)return c;"clamp"===s&&(c=r)}if(n===i)return n;if(t===r)return e<=t?n:i;t===-1/0?c=-c:r===1/0?c-=t:c=(c-t)/(r-t);c=o(c),n===-1/0?c=-c:i===1/0?c+=n:c=c*(i-n)+n;return c}(e,o[t],o[t+1],i[t],i[t+1],l,a,s,n.map)}};var ir=1.70158,or=1.525*ir,ar=ir+1,sr=2*Math.PI/3,lr=2*Math.PI/4.5,cr=e=>{const t=7.5625,r=2.75;return e<1/r?t*e*e:e<2/r?t*(e-=1.5/r)*e+.75:e<2.5/r?t*(e-=2.25/r)*e+.9375:t*(e-=2.625/r)*e+.984375},dr={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>ar*e*e*e-ir*e*e,easeOutBack:e=>1+ar*Math.pow(e-1,3)+ir*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-or)/2:(Math.pow(2*e-2,2)*((or+1)*(2*e-2)+or)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*sr),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*sr)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*lr)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*lr)/2+1,easeInBounce:e=>1-cr(1-e),easeOutBounce:cr,easeInOutBounce:e=>e<.5?(1-cr(1-2*e))/2:(1+cr(2*e-1))/2,steps:(e,t="end")=>r=>{const n=(r="end"===t?Math.min(r,.999):Math.max(r,.001))*e,i="end"===t?Math.floor(n):Math.ceil(n);return o=0,a=1,s=i/e,Math.min(Math.max(s,o),a);var o,a,s}},ur=Symbol.for("FluidValue.get"),fr=Symbol.for("FluidValue.observers"),hr=e=>Boolean(e&&e[ur]),pr=e=>e&&e[ur]?e[ur]():e,gr=e=>e[fr]||null;function mr(e,t){const r=e[fr];r&&r.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}var br=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");vr(this,e)}},vr=(e,t)=>$r(e,ur,t);function yr(e,t){if(e[ur]){let r=e[fr];r||$r(e,fr,r=new Set),r.has(t)||(r.add(t),e.observerAdded&&e.observerAdded(r.size,t))}return t}function xr(e,t){const r=e[fr];if(r&&r.has(t)){const n=r.size-1;n?r.delete(t):e[fr]=null,e.observerRemoved&&e.observerRemoved(n,t)}}var wr,$r=(e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}),Cr=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,Sr=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,jr=new RegExp(`(${Cr.source})(%|[a-z]+)`,"i"),kr=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,Dr=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,Tr=e=>{const[t,r]=Er(e);if(!t||jt())return e;const n=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(n)return n.trim();if(r&&r.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(r);return t||e}return r&&Dr.test(r)?Tr(r):r||e},Er=e=>{const t=Dr.exec(e);if(!t)return[,];const[,r,n]=t;return[r,n]},Or=(e,t,r,n,i)=>`rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${i})`,Fr=e=>{wr||(wr=kt?new RegExp(`(${Object.keys(kt).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>pr(e).replace(Dr,Tr).replace(Sr,rr).replace(wr,rr))),r=t.map((e=>e.match(Cr).map(Number))),n=r[0].map(((e,t)=>r.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))),i=n.map((t=>nr({...e,output:t})));return e=>{const r=!jr.test(t[0])&&t.find((e=>jr.test(e)))?.replace(Cr,"");let n=0;return t[0].replace(Cr,(()=>`${i[n++](e)}${r||""}`)).replace(kr,Or)}},Ir="react-spring: ",_r=e=>{const t=e;let r=!1;if("function"!=typeof t)throw new TypeError(`${Ir}once requires a function parameter`);return(...e)=>{r||(t(...e),r=!0)}},Mr=_r(console.warn);var Ar=_r(console.warn);function Br(e){return mt.str(e)&&("#"==e[0]||/\d/.test(e)||!jt()&&Dr.test(e)||e in(kt||{}))}var Rr=jt()?t.useEffect:t.useLayoutEffect;function zr(){const e=t.useState()[1],r=(()=>{const e=t.useRef(!1);return Rr((()=>(e.current=!0,()=>{e.current=!1})),[]),e})();return()=>{r.current&&e(Math.random())}}var Pr=e=>t.useEffect(e,Lr),Lr=[];function Nr(e){const r=t.useRef();return t.useEffect((()=>{r.current=e})),r.current}var Hr=Symbol.for("Animated:node"),Wr=e=>e&&e[Hr],Vr=(e,t)=>{return r=e,n=Hr,i=t,Object.defineProperty(r,n,{value:i,writable:!0,configurable:!0});var r,n,i},Yr=e=>e&&e[Hr]&&e[Hr].getPayload(),Ur=class{constructor(){Vr(this,this)}getPayload(){return this.payload||[]}},Kr=class extends Ur{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,mt.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new Kr(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return mt.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,mt.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},qr=class extends Kr{constructor(e){super(0),this._string=null,this._toString=nr({output:[e,e]})}static create(e){return new qr(e)}getValue(){const e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(mt.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=nr({output:[this.getValue(),e]})),this._value=0,super.reset()}},Xr={dependencies:null},Gr=class extends Ur{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return yt(this.source,((r,n)=>{var i;(i=r)&&i[Hr]===i?t[n]=r.getValue(e):hr(r)?t[n]=pr(r):e||(t[n]=r)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&vt(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return yt(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){Xr.dependencies&&hr(e)&&Xr.dependencies.add(e);const t=Yr(e);t&&vt(t,(e=>this.add(e)))}},Zr=class extends Gr{constructor(e){super(e)}static create(e){return new Zr(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,r)=>t.setValue(e[r]))).some(Boolean):(super.setValue(e.map(Qr)),!0)}};function Qr(e){return(Br(e)?qr:Kr).create(e)}function Jr(e){const t=Wr(e);return t?t.constructor:mt.arr(e)?Zr:Br(e)?qr:Kr}var en=(e,r)=>{const n=!mt.fun(e)||e.prototype&&e.prototype.isReactComponent;return t.forwardRef(((i,o)=>{const a=t.useRef(null),s=n&&t.useCallback((e=>{a.current=function(e,t){e&&(mt.fun(e)?e(t):e.current=t);return t}(o,e)}),[o]),[l,c]=function(e,t){const r=new Set;Xr.dependencies=r,e.style&&(e={...e,style:t.createAnimatedStyle(e.style)});return e=new Gr(e),Xr.dependencies=null,[e,r]}(i,r),d=zr(),u=()=>{const e=a.current;if(n&&!e)return;!1===(!!e&&r.applyAnimatedValues(e,l.getValue(!0)))&&d()},f=new tn(u,c),h=t.useRef();Rr((()=>(h.current=f,vt(c,(e=>yr(e,f))),()=>{h.current&&(vt(h.current.deps,(e=>xr(e,h.current))),Qe.cancel(h.current.update))}))),t.useEffect(u,[]),Pr((()=>()=>{const e=h.current;vt(e.deps,(t=>xr(t,e)))}));const p=r.getComponentProps(l.getValue());return Y.createElement(e,{...p,ref:s})}))},tn=class{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&Qe.write(this.update)}};var rn=Symbol.for("AnimatedComponent"),nn=e=>mt.str(e)?e:e&&mt.str(e.displayName)?e.displayName:mt.fun(e)&&e.name||null;function on(e,...t){return mt.fun(e)?e(...t):e}var an=(e,t)=>!0===e||!!(t&&e&&(mt.fun(e)?e(t):xt(e).includes(t))),sn=(e,t)=>mt.obj(e)?t&&e[t]:e,ln=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,cn=e=>e,dn=(e,t=cn)=>{let r=un;e.default&&!0!==e.default&&(e=e.default,r=Object.keys(e));const n={};for(const i of r){const r=t(e[i],i);mt.und(r)||(n[i]=r)}return n},un=["config","onProps","onStart","onChange","onPause","onResume","onRest"],fn={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function hn(e){const t=function(e){const t={};let r=0;if(yt(e,((e,n)=>{fn[n]||(t[n]=e,r++)})),r)return t}(e);if(t){const r={to:t};return yt(e,((e,n)=>n in t||(r[n]=e))),r}return{...e}}function pn(e){return e=pr(e),mt.arr(e)?e.map(pn):Br(e)?Ge.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function gn(e){return mt.fun(e)||mt.arr(e)&&mt.obj(e[0])}var mn={tension:170,friction:26,mass:1,damping:1,easing:dr.linear,clamp:!1},bn=class{constructor(){this.velocity=0,Object.assign(this,mn)}};function vn(e,t){if(mt.und(t.decay)){const r=!mt.und(t.tension)||!mt.und(t.friction);!r&&mt.und(t.frequency)&&mt.und(t.damping)&&mt.und(t.mass)||(e.duration=void 0,e.decay=void 0),r&&(e.frequency=void 0)}else e.duration=void 0}var yn=[],xn=class{constructor(){this.changed=!1,this.values=yn,this.toValues=null,this.fromValues=yn,this.config=new bn,this.immediate=!1}};function wn(e,{key:t,props:r,defaultProps:n,state:i,actions:o}){return new Promise(((a,s)=>{let l,c,d=an(r.cancel??n?.cancel,t);if(d)h();else{mt.und(r.pause)||(i.paused=an(r.pause,t));let e=n?.pause;!0!==e&&(e=i.paused||an(e,t)),l=on(r.delay||0,t),e?(i.resumeQueue.add(f),o.pause()):(o.resume(),f())}function u(){i.resumeQueue.add(f),i.timeouts.delete(c),c.cancel(),l=c.time-Qe.now()}function f(){l>0&&!Ge.skipAnimation?(i.delayed=!0,c=Qe.setTimeout(h,l),i.pauseQueue.add(u),i.timeouts.add(c)):h()}function h(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(u),i.timeouts.delete(c),e<=(i.cancelId||0)&&(d=!0);try{o.start({...r,callId:e,cancel:d},a)}catch(e){s(e)}}}))}var $n=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?jn(e.get()):t.every((e=>e.noop))?Cn(e.get()):Sn(e.get(),t.every((e=>e.finished))),Cn=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),Sn=(e,t,r=!1)=>({value:e,finished:t,cancelled:r}),jn=e=>({value:e,cancelled:!0,finished:!1});function kn(e,t,r,n){const{callId:i,parentId:o,onRest:a}=t,{asyncTo:s,promise:l}=r;return o||e!==s||t.reset?r.promise=(async()=>{r.asyncId=i,r.asyncTo=e;const c=dn(t,((e,t)=>"onRest"===t?void 0:e));let d,u;const f=new Promise(((e,t)=>(d=e,u=t))),h=e=>{const t=i<=(r.cancelId||0)&&jn(n)||i!==r.asyncId&&Sn(n,!1);if(t)throw e.result=t,u(e),e},p=(e,t)=>{const o=new Tn,a=new En;return(async()=>{if(Ge.skipAnimation)throw Dn(r),a.result=Sn(n,!1),u(a),a;h(o);const s=mt.obj(e)?{...e}:{...t,to:e};s.parentId=i,yt(c,((e,t)=>{mt.und(s[t])&&(s[t]=e)}));const l=await n.start(s);return h(o),r.paused&&await new Promise((e=>{r.resumeQueue.add(e)})),l})()};let g;if(Ge.skipAnimation)return Dn(r),Sn(n,!1);try{let t;t=mt.arr(e)?(async e=>{for(const t of e)await p(t)})(e):Promise.resolve(e(p,n.stop.bind(n))),await Promise.all([t.then(d),f]),g=Sn(n.get(),!0,!1)}catch(e){if(e instanceof Tn)g=e.result;else{if(!(e instanceof En))throw e;g=e.result}}finally{i==r.asyncId&&(r.asyncId=o,r.asyncTo=o?s:void 0,r.promise=o?l:void 0)}return mt.fun(a)&&Qe.batchedUpdates((()=>{a(g,n,n.item)})),g})():l}function Dn(e,t){wt(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}var Tn=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},En=class extends Error{constructor(){super("SkipAnimationSignal")}},On=e=>e instanceof In,Fn=1,In=class extends br{constructor(){super(...arguments),this.id=Fn++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=Wr(this);return e&&e.getValue()}to(...e){return Ge.to(this,e)}interpolate(...e){return Mr(`${Ir}The "interpolate" function is deprecated in v9 (use "to" instead)`),Ge.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){mr(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||Mt.sort(this),mr(this,{type:"priority",parent:this,priority:e})}},_n=Symbol.for("SpringPhase"),Mn=e=>(1&e[_n])>0,An=e=>(2&e[_n])>0,Bn=e=>(4&e[_n])>0,Rn=(e,t)=>t?e[_n]|=3:e[_n]&=-3,zn=(e,t)=>t?e[_n]|=4:e[_n]&=-5,Pn=class extends In{constructor(e,t){if(super(),this.animation=new xn,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!mt.und(e)||!mt.und(t)){const r=mt.obj(e)?{...e}:{...t,from:e};mt.und(r.default)&&(r.default=!0),this.start(r)}}get idle(){return!(An(this)||this._state.asyncTo)||Bn(this)}get goal(){return pr(this.animation.to)}get velocity(){const e=Wr(this);return e instanceof Kr?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return Mn(this)}get isAnimating(){return An(this)}get isPaused(){return Bn(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,r=!1;const n=this.animation;let{toValues:i}=n;const{config:o}=n,a=Yr(n.to);!a&&hr(n.to)&&(i=xt(pr(n.to))),n.values.forEach(((s,l)=>{if(s.done)return;const c=s.constructor==qr?1:a?a[l].lastPosition:i[l];let d=n.immediate,u=c;if(!d){if(u=s.lastPosition,o.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const r=n.fromValues[l],i=null!=s.v0?s.v0:s.v0=mt.arr(o.velocity)?o.velocity[l]:o.velocity;let a;const f=o.precision||(r==c?.005:Math.min(1,.001*Math.abs(c-r)));if(mt.und(o.duration))if(o.decay){const e=!0===o.decay?.998:o.decay,n=Math.exp(-(1-e)*t);u=r+i/(1-e)*(1-n),d=Math.abs(s.lastPosition-u)<=f,a=i*n}else{a=null==s.lastVelocity?i:s.lastVelocity;const t=o.restVelocity||f/10,n=o.clamp?0:o.bounce,l=!mt.und(n),h=r==c?s.v0>0:r<c;let p,g=!1;const m=1,b=Math.ceil(e/m);for(let e=0;e<b&&(p=Math.abs(a)>t,p||(d=Math.abs(c-u)<=f,!d));++e){l&&(g=u==c||u>c==h,g&&(a=-a*n,u=c));a+=(1e-6*-o.tension*(u-c)+.001*-o.friction*a)/o.mass*m,u+=a*m}}else{let n=1;o.duration>0&&(this._memoizedDuration!==o.duration&&(this._memoizedDuration=o.duration,s.durationProgress>0&&(s.elapsedTime=o.duration*s.durationProgress,t=s.elapsedTime+=e)),n=(o.progress||0)+t/this._memoizedDuration,n=n>1?1:n<0?0:n,s.durationProgress=n),u=r+o.easing(n)*(c-r),a=(u-s.lastPosition)/e,d=1==n}s.lastVelocity=a,Number.isNaN(u)&&(console.warn("Got NaN while animating:",this),d=!0)}a&&!a[l].done&&(d=!1),d?s.done=!0:t=!1,s.setValue(u,o.round)&&(r=!0)}));const s=Wr(this),l=s.getValue();if(t){const e=pr(n.to);l===e&&!r||o.decay?r&&o.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else r&&this._onChange(l)}set(e){return Qe.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(An(this)){const{to:e,config:t}=this.animation;Qe.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let r;return mt.und(e)?(r=this.queue||[],this.queue=[]):r=[mt.obj(e)?e:{...t,to:e}],Promise.all(r.map((e=>this._update(e)))).then((e=>$n(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),Dn(this._state,e&&this._lastCallId),Qe.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:r,from:n}=e;r=mt.obj(r)?r[t]:r,(null==r||gn(r))&&(r=void 0),n=mt.obj(n)?n[t]:n,null==n&&(n=void 0);const i={to:r,from:n};return Mn(this)||(e.reverse&&([r,n]=[n,r]),n=pr(n),mt.und(n)?Wr(this)||this._set(r):this._set(n)),i}_update({...e},t){const{key:r,defaultProps:n}=this;e.default&&Object.assign(n,dn(e,((e,t)=>/^on/.test(t)?sn(e,r):e))),Un(this,e,"onProps"),Kn(this,"onProps",e,this);const i=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const o=this._state;return wn(++this._lastCallId,{key:r,props:e,defaultProps:n,state:o,actions:{pause:()=>{Bn(this)||(zn(this,!0),St(o.pauseQueue),Kn(this,"onPause",Sn(this,Ln(this,this.animation.to)),this))},resume:()=>{Bn(this)&&(zn(this,!1),An(this)&&this._resume(),St(o.resumeQueue),Kn(this,"onResume",Sn(this,Ln(this,this.animation.to)),this))},start:this._merge.bind(this,i)}}).then((r=>{if(e.loop&&r.finished&&(!t||!r.noop)){const t=Nn(e);if(t)return this._update(t,!0)}return r}))}_merge(e,t,r){if(t.cancel)return this.stop(!0),r(jn(this));const n=!mt.und(e.to),i=!mt.und(e.from);if(n||i){if(!(t.callId>this._lastToId))return r(jn(this));this._lastToId=t.callId}const{key:o,defaultProps:a,animation:s}=this,{to:l,from:c}=s;let{to:d=l,from:u=c}=e;!i||n||t.default&&!mt.und(d)||(d=u),t.reverse&&([d,u]=[u,d]);const f=!bt(u,c);f&&(s.from=u),u=pr(u);const h=!bt(d,l);h&&this._focus(d);const p=gn(t.to),{config:g}=s,{decay:m,velocity:b}=g;(n||i)&&(g.velocity=0),t.config&&!p&&function(e,t,r){r&&(vn(r={...r},t),t={...r,...t}),vn(e,t),Object.assign(e,t);for(const t in mn)null==e[t]&&(e[t]=mn[t]);let{frequency:n,damping:i}=e;const{mass:o}=e;mt.und(n)||(n<.01&&(n=.01),i<0&&(i=0),e.tension=Math.pow(2*Math.PI/n,2)*o,e.friction=4*Math.PI*i*o/n)}(g,on(t.config,o),t.config!==a.config?on(a.config,o):void 0);let v=Wr(this);if(!v||mt.und(d))return r(Sn(this,!0));const y=mt.und(t.reset)?i&&!t.default:!mt.und(u)&&an(t.reset,o),x=y?u:this.get(),w=pn(d),$=mt.num(w)||mt.arr(w)||Br(w),C=!p&&(!$||an(a.immediate||t.immediate,o));if(h){const e=Jr(d);if(e!==v.constructor){if(!C)throw Error(`Cannot animate between ${v.constructor.name} and ${e.name}, as the "to" prop suggests`);v=this._set(w)}}const S=v.constructor;let j=hr(d),k=!1;if(!j){const e=y||!Mn(this)&&f;(h||e)&&(k=bt(pn(x),w),j=!k),(bt(s.immediate,C)||C)&&bt(g.decay,m)&&bt(g.velocity,b)||(j=!0)}if(k&&An(this)&&(s.changed&&!y?j=!0:j||this._stop(l)),!p&&((j||hr(l))&&(s.values=v.getPayload(),s.toValues=hr(d)?null:S==qr?[1]:xt(w)),s.immediate!=C&&(s.immediate=C,C||y||this._set(l)),j)){const{onRest:e}=s;vt(Yn,(e=>Un(this,t,e)));const n=Sn(this,Ln(this,l));St(this._pendingCalls,n),this._pendingCalls.add(r),s.changed&&Qe.batchedUpdates((()=>{s.changed=!y,e?.(n,this),y?on(a.onRest,n):s.onStart?.(n,this)}))}y&&this._set(x),p?r(kn(t.to,t,this._state,this)):j?this._start():An(this)&&!h?this._pendingCalls.add(r):r(Cn(x))}_focus(e){const t=this.animation;e!==t.to&&(gr(this)&&this._detach(),t.to=e,gr(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;hr(t)&&(yr(t,this),On(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;hr(e)&&xr(e,this)}_set(e,t=!0){const r=pr(e);if(!mt.und(r)){const e=Wr(this);if(!e||!bt(r,e.getValue())){const n=Jr(r);e&&e.constructor==n?e.setValue(r):Vr(this,n.create(r)),e&&Qe.batchedUpdates((()=>{this._onChange(r,t)}))}}return Wr(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,Kn(this,"onStart",Sn(this,Ln(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),on(this.animation.onChange,e,this)),on(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;Wr(this).reset(pr(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),An(this)||(Rn(this,!0),Bn(this)||this._resume())}_resume(){Ge.skipAnimation?this.finish():Mt.start(this)}_stop(e,t){if(An(this)){Rn(this,!1);const r=this.animation;vt(r.values,(e=>{e.done=!0})),r.toValues&&(r.onChange=r.onPause=r.onResume=void 0),mr(this,{type:"idle",parent:this});const n=t?jn(this.get()):Sn(this.get(),Ln(this,e??r.to));St(this._pendingCalls,n),r.changed&&(r.changed=!1,Kn(this,"onRest",n,this))}}};function Ln(e,t){const r=pn(t);return bt(pn(e.get()),r)}function Nn(e,t=e.loop,r=e.to){const n=on(t);if(n){const i=!0!==n&&hn(n),o=(i||e).reverse,a=!i||i.reset;return Hn({...e,loop:t,default:!1,pause:void 0,to:!o||gn(r)?r:void 0,from:a?e.from:void 0,reset:a,...i})}}function Hn(e){const{to:t,from:r}=e=hn(e),n=new Set;return mt.obj(t)&&Vn(t,n),mt.obj(r)&&Vn(r,n),e.keys=n.size?Array.from(n):null,e}function Wn(e){const t=Hn(e);return mt.und(t.default)&&(t.default=dn(t)),t}function Vn(e,t){yt(e,((e,r)=>null!=e&&t.add(r)))}var Yn=["onStart","onRest","onChange","onPause","onResume"];function Un(e,t,r){e.animation[r]=t[r]!==ln(t,r)?sn(t[r],e.key):void 0}function Kn(e,t,...r){e.animation[t]?.(...r),e.defaultProps[t]?.(...r)}var qn=["onStart","onChange","onRest"],Xn=1,Gn=class{constructor(e,t){this.id=Xn++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,r)=>e[r]=t.get())),e}set(e){for(const t in e){const r=e[t];mt.und(r)||this.springs[t].set(r)}}update(e){return e&&this.queue.push(Hn(e)),this}start(e){let{queue:t}=this;return e?t=xt(e).map(Hn):this.queue=[],this._flush?this._flush(this,t):(ni(this,t),Zn(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const r=this.springs;vt(xt(t),(t=>r[t].stop(!!e)))}else Dn(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(mt.und(e))this.start({pause:!0});else{const t=this.springs;vt(xt(e),(e=>t[e].pause()))}return this}resume(e){if(mt.und(e))this.start({pause:!1});else{const t=this.springs;vt(xt(e),(e=>t[e].resume()))}return this}each(e){yt(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:r}=this._events,n=this._active.size>0,i=this._changed.size>0;(n&&!this._started||i&&!this._started)&&(this._started=!0,wt(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const o=!n&&this._started,a=i||o&&r.size?this.get():null;i&&t.size&&wt(t,(([e,t])=>{t.value=a,e(t,this,this._item)})),o&&(this._started=!1,wt(r,(([e,t])=>{t.value=a,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}Qe.onFrame(this._onFrame)}};function Zn(e,t){return Promise.all(t.map((t=>Qn(e,t)))).then((t=>$n(e,t)))}async function Qn(e,t,r){const{keys:n,to:i,from:o,loop:a,onRest:s,onResolve:l}=t,c=mt.obj(t.default)&&t.default;a&&(t.loop=!1),!1===i&&(t.to=null),!1===o&&(t.from=null);const d=mt.arr(i)||mt.fun(i)?i:void 0;d?(t.to=void 0,t.onRest=void 0,c&&(c.onRest=void 0)):vt(qn,(r=>{const n=t[r];if(mt.fun(n)){const i=e._events[r];t[r]=({finished:e,cancelled:t})=>{const r=i.get(n);r?(e||(r.finished=!1),t&&(r.cancelled=!0)):i.set(n,{value:null,finished:e||!1,cancelled:t||!1})},c&&(c[r]=t[r])}}));const u=e._state;t.pause===!u.paused?(u.paused=t.pause,St(t.pause?u.pauseQueue:u.resumeQueue)):u.paused&&(t.pause=!0);const f=(n||Object.keys(e.springs)).map((r=>e.springs[r].start(t))),h=!0===t.cancel||!0===ln(t,"cancel");(d||h&&u.asyncId)&&f.push(wn(++e._lastAsyncId,{props:t,state:u,actions:{pause:gt,resume:gt,start(t,r){h?(Dn(u,e._lastAsyncId),r(jn(e))):(t.onRest=s,r(kn(d,t,u,e)))}}})),u.paused&&await new Promise((e=>{u.resumeQueue.add(e)}));const p=$n(e,await Promise.all(f));if(a&&p.finished&&(!r||!p.noop)){const r=Nn(t,a,i);if(r)return ni(e,[r]),Qn(e,r,!0)}return l&&Qe.batchedUpdates((()=>l(p,e,e.item))),p}function Jn(e,t){const r={...e.springs};return t&&vt(xt(t),(e=>{mt.und(e.keys)&&(e=Hn(e)),mt.obj(e.to)||(e={...e,to:void 0}),ri(r,e,(e=>ti(e)))})),ei(e,r),r}function ei(e,t){yt(t,((t,r)=>{e.springs[r]||(e.springs[r]=t,yr(t,e))}))}function ti(e,t){const r=new Pn;return r.key=e,t&&yr(r,t),r}function ri(e,t,r){t.keys&&vt(t.keys,(n=>{(e[n]||(e[n]=r(n)))._prepareNode(t)}))}function ni(e,t){vt(t,(t=>{ri(e.springs,t,(t=>ti(t,e)))}))}var ii,oi,ai=({children:e,...r})=>{const n=t.useContext(si),i=r.pause||!!n.pause,o=r.immediate||!!n.immediate;r=function(e,r){const[n]=t.useState((()=>({inputs:r,result:e()}))),i=t.useRef(),o=i.current;let a=o;if(a){const t=Boolean(r&&a.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}(r,a.inputs));t||(a={inputs:r,result:e()})}else a=n;return t.useEffect((()=>{i.current=a,o==n&&(n.inputs=n.result=void 0)}),[a]),a.result}((()=>({pause:i,immediate:o})),[i,o]);const{Provider:a}=si;return Y.createElement(a,{value:r},e)},si=(ii=ai,oi={},Object.assign(ii,Y.createContext(oi)),ii.Provider._context=ii,ii.Consumer._context=ii,ii);ai.Provider=si.Provider,ai.Consumer=si.Consumer;var li=()=>{const e=[],t=function(t){Ar(`${Ir}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const n=[];return vt(e,((e,i)=>{if(mt.und(t))n.push(e.start());else{const o=r(t,e,i);o&&n.push(e.start(o))}})),n};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const r=e.indexOf(t);~r&&e.splice(r,1)},t.pause=function(){return vt(e,(e=>e.pause(...arguments))),this},t.resume=function(){return vt(e,(e=>e.resume(...arguments))),this},t.set=function(t){vt(e,((e,r)=>{const n=mt.fun(t)?t(r,e):t;n&&e.set(n)}))},t.start=function(t){const r=[];return vt(e,((e,n)=>{if(mt.und(t))r.push(e.start());else{const i=this._getProps(t,e,n);i&&r.push(e.start(i))}})),r},t.stop=function(){return vt(e,(e=>e.stop(...arguments))),this},t.update=function(t){return vt(e,((e,r)=>e.update(this._getProps(t,e,r)))),this};const r=function(e,t,r){return mt.fun(e)?e(r,t):e};return t._getProps=r,t};function ci(e,r){const n=mt.fun(e),[[i],o]=function(e,r,n){const i=mt.fun(r)&&r;i&&!n&&(n=[]);const o=t.useMemo((()=>i||3==arguments.length?li():void 0),[]),a=t.useRef(0),s=zr(),l=t.useMemo((()=>({ctrls:[],queue:[],flush(e,t){const r=Jn(e,t);return a.current>0&&!l.queue.length&&!Object.keys(r).some((t=>!e.springs[t]))?Zn(e,t):new Promise((n=>{ei(e,r),l.queue.push((()=>{n(Zn(e,t))})),s()}))}})),[]),c=t.useRef([...l.ctrls]),d=[],u=Nr(e)||0;function f(e,t){for(let n=e;n<t;n++){const e=c.current[n]||(c.current[n]=new Gn(null,l.flush)),t=i?i(n,e):r[n];t&&(d[n]=Wn(t))}}t.useMemo((()=>{vt(c.current.slice(e,u),(e=>{!function(e,t){e.ref?.delete(e),t?.delete(e)}(e,o),e.stop(!0)})),c.current.length=e,f(u,e)}),[e]),t.useMemo((()=>{f(0,Math.min(u,e))}),n);const h=c.current.map(((e,t)=>Jn(e,d[t]))),p=t.useContext(ai),g=Nr(p),m=p!==g&&function(e){for(const t in e)return!0;return!1}(p);Rr((()=>{a.current++,l.ctrls=c.current;const{queue:e}=l;e.length&&(l.queue=[],vt(e,(e=>e()))),vt(c.current,((e,t)=>{o?.add(e),m&&e.start({default:p});const r=d[t];r&&(function(e,t){t&&e.ref!==t&&(e.ref?.delete(e),t.add(e),e.ref=t)}(e,r.ref),e.ref?e.queue.push(r):e.start(r))}))})),Pr((()=>()=>{vt(l.ctrls,(e=>e.stop(!0)))}));const b=h.map((e=>({...e})));return o?[b,o]:b}(1,n?e:[e],n?r||[]:r);return n||2==arguments.length?[i,o]:i}var di=class extends In{constructor(e,t){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=nr(...t);const r=this._get(),n=Jr(r);Vr(this,n.create(r))}advance(e){const t=this._get();bt(t,this.get())||(Wr(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&fi(this._active)&&hi(this)}_get(){const e=mt.arr(this.source)?this.source.map(pr):xt(pr(this.source));return this.calc(...e)}_start(){this.idle&&!fi(this._active)&&(this.idle=!1,vt(Yr(this),(e=>{e.done=!1})),Ge.skipAnimation?(Qe.batchedUpdates((()=>this.advance())),hi(this)):Mt.start(this))}_attach(){let e=1;vt(xt(this.source),(t=>{hr(t)&&yr(t,this),On(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){vt(xt(this.source),(e=>{hr(e)&&xr(e,this)})),this._active.clear(),hi(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=xt(this.source).reduce(((e,t)=>Math.max(e,(On(t)?t.priority:0)+1)),0))}};function ui(e){return!1!==e.idle}function fi(e){return!e.size||Array.from(e).every(ui)}function hi(e){e.idle||(e.idle=!0,vt(Yr(e),(e=>{e.done=!0})),mr(e,{type:"idle",parent:e}))}Ge.assign({createStringInterpolator:Fr,to:(e,t)=>new di(e,t)});var pi=/^--/;function gi(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||pi.test(e)||bi.hasOwnProperty(e)&&bi[e]?(""+t).trim():t+"px"}var mi={};var bi={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},vi=["Webkit","Ms","Moz","O"];bi=Object.keys(bi).reduce(((e,t)=>(vi.forEach((r=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(r,t)]=e[t])),e)),bi);var yi=/^(matrix|translate|scale|rotate|skew)/,xi=/^(translate)/,wi=/^(rotate|skew)/,$i=(e,t)=>mt.num(e)&&0!==e?e+t:e,Ci=(e,t)=>mt.arr(e)?e.every((e=>Ci(e,t))):mt.num(e)?e===t:parseFloat(e)===t,Si=class extends Gr{constructor({x:e,y:t,z:r,...n}){const i=[],o=[];(e||t||r)&&(i.push([e||0,t||0,r||0]),o.push((e=>[`translate3d(${e.map((e=>$i(e,"px"))).join(",")})`,Ci(e,0)]))),yt(n,((e,t)=>{if("transform"===t)i.push([e||""]),o.push((e=>[e,""===e]));else if(yi.test(t)){if(delete n[t],mt.und(e))return;const r=xi.test(t)?"px":wi.test(t)?"deg":"";i.push(xt(e)),o.push("rotate3d"===t?([e,t,n,i])=>[`rotate3d(${e},${t},${n},${$i(i,r)})`,Ci(i,0)]:e=>[`${t}(${e.map((e=>$i(e,r))).join(",")})`,Ci(e,t.startsWith("scale")?1:0)])}})),i.length&&(n.transform=new ji(i,o)),super(n)}},ji=class extends br{constructor(e,t){super(),this.inputs=e,this.transforms=t,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return vt(this.inputs,((r,n)=>{const i=pr(r[0]),[o,a]=this.transforms[n](mt.arr(i)?i:r.map(pr));e+=" "+o,t=t&&a})),t?"none":e}observerAdded(e){1==e&&vt(this.inputs,(e=>vt(e,(e=>hr(e)&&yr(e,this)))))}observerRemoved(e){0==e&&vt(this.inputs,(e=>vt(e,(e=>hr(e)&&xr(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),mr(this,e)}};Ge.assign({batchedUpdates:r.unstable_batchedUpdates,createStringInterpolator:Fr,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});var ki=((e,{applyAnimatedValues:t=()=>!1,createAnimatedStyle:r=e=>new Gr(e),getComponentProps:n=e=>e}={})=>{const i={applyAnimatedValues:t,createAnimatedStyle:r,getComponentProps:n},o=e=>{const t=nn(e)||"Anonymous";return(e=mt.str(e)?o[e]||(o[e]=en(e,i)):e[rn]||(e[rn]=en(e,i))).displayName=`Animated(${t})`,e};return yt(e,((t,r)=>{mt.arr(e)&&(r=nn(t)),o[r]=o(t)})),{animated:o}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const r="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,{style:n,children:i,scrollTop:o,scrollLeft:a,viewBox:s,...l}=t,c=Object.values(l),d=Object.keys(l).map((t=>r||e.hasAttribute(t)?t:mi[t]||(mi[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==i&&(e.textContent=i);for(const t in n)if(n.hasOwnProperty(t)){const r=gi(t,n[t]);pi.test(t)?e.style.setProperty(t,r):e.style[t]=r}d.forEach(((t,r)=>{e.setAttribute(t,c[r])})),void 0!==o&&(e.scrollTop=o),void 0!==a&&(e.scrollLeft=a),void 0!==s&&e.setAttribute("viewBox",s)},createAnimatedStyle:e=>new Si(e),getComponentProps:({scrollTop:e,scrollLeft:t,...r})=>r}),Di=ki.animated,Ti="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function Ei(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Oi=Array.isArray,Fi="object"==typeof Ti&&Ti&&Ti.Object===Object&&Ti,Ii=Fi,_i="object"==typeof self&&self&&self.Object===Object&&self,Mi=Ii||_i||Function("return this")(),Ai=Mi.Symbol,Bi=Ai,Ri=Object.prototype,zi=Ri.hasOwnProperty,Pi=Ri.toString,Li=Bi?Bi.toStringTag:void 0;var Ni=function(e){var t=zi.call(e,Li),r=e[Li];try{e[Li]=void 0;var n=!0}catch(e){}var i=Pi.call(e);return n&&(t?e[Li]=r:delete e[Li]),i},Hi=Object.prototype.toString;var Wi=Ni,Vi=function(e){return Hi.call(e)},Yi=Ai?Ai.toStringTag:void 0;var Ui=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Yi&&Yi in Object(e)?Wi(e):Vi(e)};var Ki=function(e){return null!=e&&"object"==typeof e},qi=Ui,Xi=Ki;var Gi=function(e){return"symbol"==typeof e||Xi(e)&&"[object Symbol]"==qi(e)},Zi=Oi,Qi=Gi,Ji=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,eo=/^\w*$/;var to=function(e,t){if(Zi(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!Qi(e))||(eo.test(e)||!Ji.test(e)||null!=t&&e in Object(t))};var ro=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},no=Ui,io=ro;var oo,ao=function(e){if(!io(e))return!1;var t=no(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},so=Mi["__core-js_shared__"],lo=(oo=/[^.]+$/.exec(so&&so.keys&&so.keys.IE_PROTO||""))?"Symbol(src)_1."+oo:"";var co=function(e){return!!lo&&lo in e},uo=Function.prototype.toString;var fo=function(e){if(null!=e){try{return uo.call(e)}catch(e){}try{return e+""}catch(e){}}return""},ho=ao,po=co,go=ro,mo=fo,bo=/^\[object .+?Constructor\]$/,vo=Function.prototype,yo=Object.prototype,xo=vo.toString,wo=yo.hasOwnProperty,$o=RegExp("^"+xo.call(wo).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Co=function(e,t){return null==e?void 0:e[t]},So=function(e){return!(!go(e)||po(e))&&(ho(e)?$o:bo).test(mo(e))},jo=Co;var ko=function(e,t){var r=jo(e,t);return So(r)?r:void 0},Do=ko(Object,"create"),To=Do;var Eo=function(){this.__data__=To?To(null):{},this.size=0};var Oo=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Fo=Do,Io=Object.prototype.hasOwnProperty;var _o=function(e){var t=this.__data__;if(Fo){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return Io.call(t,e)?t[e]:void 0},Mo=Do,Ao=Object.prototype.hasOwnProperty;var Bo=function(e){var t=this.__data__;return Mo?void 0!==t[e]:Ao.call(t,e)},Ro=Do;var zo=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=Ro&&void 0===t?"__lodash_hash_undefined__":t,this},Po=Eo,Lo=Oo,No=_o,Ho=Bo,Wo=zo;function Vo(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Vo.prototype.clear=Po,Vo.prototype.delete=Lo,Vo.prototype.get=No,Vo.prototype.has=Ho,Vo.prototype.set=Wo;var Yo=Vo;var Uo=function(){this.__data__=[],this.size=0};var Ko=function(e,t){return e===t||e!=e&&t!=t},qo=Ko;var Xo=function(e,t){for(var r=e.length;r--;)if(qo(e[r][0],t))return r;return-1},Go=Xo,Zo=Array.prototype.splice;var Qo=function(e){var t=this.__data__,r=Go(t,e);return!(r<0)&&(r==t.length-1?t.pop():Zo.call(t,r,1),--this.size,!0)},Jo=Xo;var ea=function(e){var t=this.__data__,r=Jo(t,e);return r<0?void 0:t[r][1]},ta=Xo;var ra=function(e){return ta(this.__data__,e)>-1},na=Xo;var ia=function(e,t){var r=this.__data__,n=na(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},oa=Uo,aa=Qo,sa=ea,la=ra,ca=ia;function da(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}da.prototype.clear=oa,da.prototype.delete=aa,da.prototype.get=sa,da.prototype.has=la,da.prototype.set=ca;var ua=da,fa=ko(Mi,"Map"),ha=Yo,pa=ua,ga=fa;var ma=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var ba=function(e,t){var r=e.__data__;return ma(t)?r["string"==typeof t?"string":"hash"]:r.map},va=ba;var ya=function(e){var t=va(this,e).delete(e);return this.size-=t?1:0,t},xa=ba;var wa=function(e){return xa(this,e).get(e)},$a=ba;var Ca=function(e){return $a(this,e).has(e)},Sa=ba;var ja=function(e,t){var r=Sa(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},ka=function(){this.size=0,this.__data__={hash:new ha,map:new(ga||pa),string:new ha}},Da=ya,Ta=wa,Ea=Ca,Oa=ja;function Fa(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Fa.prototype.clear=ka,Fa.prototype.delete=Da,Fa.prototype.get=Ta,Fa.prototype.has=Ea,Fa.prototype.set=Oa;var Ia=Fa,_a=Ia;function Ma(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],o=r.cache;if(o.has(i))return o.get(i);var a=e.apply(this,n);return r.cache=o.set(i,a)||o,a};return r.cache=new(Ma.Cache||_a),r}Ma.Cache=_a;var Aa=Ma;var Ba=function(e){var t=Aa(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t},Ra=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,za=/\\(\\)?/g,Pa=Ba((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Ra,(function(e,r,n,i){t.push(n?i.replace(za,"$1"):r||e)})),t}));var La=function(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i},Na=Oi,Ha=Gi,Wa=Ai?Ai.prototype:void 0,Va=Wa?Wa.toString:void 0;var Ya=function e(t){if("string"==typeof t)return t;if(Na(t))return La(t,e)+"";if(Ha(t))return Va?Va.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},Ua=Ya;var Ka=function(e){return null==e?"":Ua(e)},qa=Oi,Xa=to,Ga=Pa,Za=Ka;var Qa=function(e,t){return qa(e)?e:Xa(e,t)?[e]:Ga(Za(e))},Ja=Gi;var es=function(e){if("string"==typeof e||Ja(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},ts=Qa,rs=es;var ns=function(e,t){for(var r=0,n=(t=ts(t,e)).length;null!=e&&r<n;)e=e[rs(t[r++])];return r&&r==n?e:void 0},is=ns;var os=function(e,t,r){var n=null==e?void 0:is(e,t);return void 0===n?r:n},as=Ei(os);const ss=(e,t,r)=>as(r,t)||as(e,t),ls=(e,t)=>{const r=t||e.defaultValue;return as(e.collections,r)},cs={collections:{default:{"width-005":.5,"width-010":1,"width-020":2,"width-040":4,solid:"solid"}},defaultValue:"default"},ds=e=>t=>{var r;const n=t.theme,i=ls(cs,null==n?void 0:n.borderScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.border)?`${ss(i,e,n.overrides.border)}px`:`${i[e]}px`},us={"width-005":ds("width-005"),"width-010":ds("width-010"),"width-020":ds("width-020"),"width-040":ds("width-040"),solid:(fs="solid",e=>{var t;const r=e.theme,n=ls(cs,null==r?void 0:r.borderScheme),i=(null===(t=null==r?void 0:r.overrides)||void 0===t?void 0:t.border)?ss(n,fs,r.overrides.border):n[fs];return"function"==typeof i?i(e):i})};var fs;const hs={collections:{lifesg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#001731","primary-20":"#002752","primary-30":"#003874","primary-40":"#004D9F","primary-50":"#1768BE","primary-60":"#3C91EC","primary-70":"#6CB4FF","primary-80":"#A5CDFF","primary-90":"#CFE1FE","primary-95":"#E8F0FE","primary-100":"#F7F9FF","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},bookingsg:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#1A122C","primary-20":"#2F1F4D","primary-30":"#422D6E","primary-40":"#5B3D97","primary-50":"#7654BC","primary-60":"#9A82CD","primary-70":"#B7A7D8","primary-80":"#CFC5E5","primary-90":"#E3DDF0","primary-95":"#F0EDF7","primary-100":"#F9F8FC","secondary-10":"#0E1723","secondary-20":"#18293D","secondary-30":"#233A57","secondary-40":"#305078","secondary-50":"#4B6A8F","secondary-60":"#7B91A9","secondary-70":"#A1B1C3","secondary-80":"#C1CBD7","secondary-90":"#DBE1E8","secondary-95":"#EBEFF2","secondary-100":"#F7F8FA","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},rbs:{"brand-10":"#0E123A","brand-20":"#191E65","brand-30":"#232B90","brand-40":"#303BC5","brand-50":"#494CFF","brand-60":"#AD6EFF","brand-70":"#AEA4FF","brand-80":"#C5C4FF","brand-90":"#DDDCFF","brand-95":"#EDECFF","brand-100":"#F8F8FF","primary-10":"#10152B","primary-20":"#1C254B","primary-30":"#28356C","primary-40":"#38489A","primary-50":"#4D5AD7","primary-60":"#7487F2","primary-70":"#9AAAFC","primary-80":"#BDC7FD","primary-90":"#DADFFB","primary-95":"#ECEEFE","primary-100":"#F7F8FF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},mylegacy:{"brand-10":"#2C0C0B","brand-20":"#4C1513","brand-30":"#6C1D1B","brand-40":"#922825","brand-50":"#BF3431","brand-60":"#F15D5A","brand-70":"#F69491","brand-80":"#FABAB7","brand-90":"#FCD7D2","brand-95":"#FFEBE7","brand-100":"#FFF6F4","primary-10":"#0011924","primary-20":"#032B40","primary-30":"#043D5A","primary-40":"#05547B","primary-50":"#096EA1","primary-60":"#2098D3","primary-70":"#5CB9E8","primary-80":"#8BD3F6","primary-90":"#BEE6FA","primary-95":"#E2F2FA","primary-100":"#F4FAFC","secondary-10":"#131529","secondary-20":"#222547","secondary-30":"#2F3565","secondary-40":"#42498B","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},ccube:{"brand-10":"#1F1221","brand-20":"#371F3B","brand-30":"#4E2C53","brand-40":"#6B3E73","brand-50":"#8D5197","brand-60":"#FF3399","brand-70":"#FF88C4","brand-80":"#FFB3D9","brand-90":"#FFD4E9","brand-95":"#FFE8F3","brand-100":"#FFD6EB","primary-10":"#1F1221","primary-20":"#371F3B","primary-30":"#4E2C53","primary-40":"#6B3E73","primary-50":"#8D5197","primary-60":"#B07DB7","primary-70":"#C7A3CC","primary-80":"#D9C2DD","primary-90":"#E9DBEB","primary-95":"#F3ECF4","primary-100":"#FAF7FA","secondary-10":"#2D091B","secondary-20":"#4D0F2E","secondary-30":"#6B1540","secondary-40":"#931D58","secondary-50":"#C02673","secondary-60":"#FF409F","secondary-70":"#FF88C4","secondary-80":"#FFB3D9","secondary-90":"#FFD4E9","secondary-95":"#FFE8F3","secondary-100":"#FFF8FC","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},oneservice:{"brand-10":"#001A19","brand-20":"#002D2B","brand-30":"#00413D","brand-40":"#005954","brand-50":"#00756F","brand-60":"#03A098","brand-70":"#55BFBA","brand-80":"#92D6D2","brand-90":"#BFE7E5","brand-95":"#DDF2F1","brand-100":"#F4FBFA","primary-10":"#09191D","primary-20":"#102B34","primary-30":"#173D49","primary-40":"#205666","primary-50":"#2A7086","primary-60":"#2A7086","primary-70":"#8CB6C2","primary-80":"#B2CED6","primary-90":"#D1E2E7","primary-95":"#E8F0F3","primary-100":"#F9F8FC","secondary-10":"#001731","secondary-20":"#002752","secondary-30":"#003874","secondary-40":"#004D9F","secondary-50":"#5B62A7","secondary-60":"#858CBD","secondary-70":"#A8ADCF","secondary-80":"#C6C9E0","secondary-90":"#DDDFEC","secondary-95":"#EDEEF5","secondary-100":"#F8F8FB","neutral-10":"#161616","neutral-20":"#282828","neutral-30":"#393939","neutral-40":"#4E4E4E","neutral-50":"#686868","neutral-60":"#8E8E8E","neutral-70":"#AFAFB0","neutral-80":"#C7CACA","neutral-90":"#DDE1E2","neutral-95":"#EDEFEF","neutral-100":"#F9F9F9","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"},pa:{"brand-10":"#881317","brand-20":"#B5191E","brand-30":"#B5040A","brand-40":"#D0333F","brand-50":"#DC666F","brand-60":"#E28087","brand-70":"#E7999F","brand-80":"#EDB3B7","brand-90":"#F3CCCF","brand-95":"#F9E6E7","brand-100":"#FCF2F3","primary-10":"#000000","primary-20":"#191919","primary-30":"#333333","primary-40":"#4D4D4D","primary-50":"#666666","primary-60":"#808080","primary-70":"#999999","primary-80":"#B3B3B3","primary-90":"#E6E6E6","primary-95":"#F7F7F7","primary-100":"#FFFFFF","secondary-10":"#19151D","secondary-20":"#2B2533","secondary-30":"#3E3649","secondary-40":"#564A64","secondary-50":"#6F637D","secondary-60":"#948B9F","secondary-70":"#B3ACBB","secondary-80":"#CCC8D2","secondary-90":"#E1DEE4","secondary-95":"#EFEEF1","secondary-100":"#F9F8F9","neutral-10":"#000000","neutral-20":"#191919","neutral-30":"#333333","neutral-40":"#4D4D4D","neutral-50":"#666666","neutral-60":"#808080","neutral-70":"#999999","neutral-80":"#B3B3B3","neutral-90":"#E6E6E6","neutral-95":"#F7F7F7","neutral-100":"#FFFFFF","success-10":"#081A0F","success-20":"#0E2D1B","success-30":"#154126","success-40":"#1C5A34","success-50":"#257645","success-60":"#44A068","success-70":"#64C189","success-80":"#80DCA5","success-90":"#B4ECCB","success-95":"#D5F6E2","success-100":"#EFFCF4","warning-10":"#221302","warning-20":"#3B2204","warning-30":"#543106","warning-40":"#744408","warning-50":"#98590C","warning-60":"#D07A13","warning-70":"#E4A244","warning-80":"#F5C26C","warning-90":"#FADBA6","warning-95":"#FCECD4","warning-100":"#FDF7F0","error-10":"#330505","error-20":"#550808","error-30":"#750C0C","error-40":"#9E130F","error-50":"#CB2213","error-60":"#DE6C6C","error-70":"#E89B9B","error-80":"#EFBEBE","error-90":"#F5D9D9","error-95":"#F9ECEC","error-100":"#FCF7F7","info-10":"#021824","info-20":"#032B3F","info-30":"#053D59","info-40":"#065478","info-50":"#176E9B","info-60":"#5296BE","info-70":"#82B5DA","info-80":"#ACCFE7","info-90":"#CCE3F1","info-95":"#E3F1F8","info-100":"#F4FAFD",white:"#FFFFFF",black:"#000000","primary-inverse":"#FEAB10"}},defaultValue:"lifesg"},ps=e=>t=>{var r;const n=t.theme,i=ls(hs,null==n?void 0:n.colourScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.primitiveColour)?ss(i,e,n.overrides.primitiveColour):i[e]},gs={"brand-10":ps("brand-10"),"brand-20":ps("brand-20"),"brand-30":ps("brand-30"),"brand-40":ps("brand-40"),"brand-50":ps("brand-50"),"brand-60":ps("brand-60"),"brand-70":ps("brand-70"),"brand-80":ps("brand-80"),"brand-90":ps("brand-90"),"brand-95":ps("brand-95"),"brand-100":ps("brand-100"),"primary-10":ps("primary-10"),"primary-20":ps("primary-20"),"primary-30":ps("primary-30"),"primary-40":ps("primary-40"),"primary-50":ps("primary-50"),"primary-60":ps("primary-60"),"primary-70":ps("primary-70"),"primary-80":ps("primary-80"),"primary-90":ps("primary-90"),"primary-95":ps("primary-95"),"primary-100":ps("primary-100"),"secondary-10":ps("secondary-10"),"secondary-20":ps("secondary-20"),"secondary-30":ps("secondary-30"),"secondary-40":ps("secondary-40"),"secondary-50":ps("secondary-50"),"secondary-60":ps("secondary-60"),"secondary-70":ps("secondary-70"),"secondary-80":ps("secondary-80"),"secondary-90":ps("secondary-90"),"secondary-95":ps("secondary-95"),"secondary-100":ps("secondary-100"),"neutral-10":ps("neutral-10"),"neutral-20":ps("neutral-20"),"neutral-30":ps("neutral-30"),"neutral-40":ps("neutral-40"),"neutral-50":ps("neutral-50"),"neutral-60":ps("neutral-60"),"neutral-70":ps("neutral-70"),"neutral-80":ps("neutral-80"),"neutral-90":ps("neutral-90"),"neutral-95":ps("neutral-95"),"neutral-100":ps("neutral-100"),"success-10":ps("success-10"),"success-20":ps("success-20"),"success-30":ps("success-30"),"success-40":ps("success-40"),"success-50":ps("success-50"),"success-60":ps("success-60"),"success-70":ps("success-70"),"success-80":ps("success-80"),"success-90":ps("success-90"),"success-95":ps("success-95"),"success-100":ps("success-100"),"warning-10":ps("warning-10"),"warning-20":ps("warning-20"),"warning-30":ps("warning-30"),"warning-40":ps("warning-40"),"warning-50":ps("warning-50"),"warning-60":ps("warning-60"),"warning-70":ps("warning-70"),"warning-80":ps("warning-80"),"warning-90":ps("warning-90"),"warning-95":ps("warning-95"),"warning-100":ps("warning-100"),"error-10":ps("error-10"),"error-20":ps("error-20"),"error-30":ps("error-30"),"error-40":ps("error-40"),"error-50":ps("error-50"),"error-60":ps("error-60"),"error-70":ps("error-70"),"error-80":ps("error-80"),"error-90":ps("error-90"),"error-95":ps("error-95"),"error-100":ps("error-100"),"info-10":ps("info-10"),"info-20":ps("info-20"),"info-30":ps("info-30"),"info-40":ps("info-40"),"info-50":ps("info-50"),"info-60":ps("info-60"),"info-70":ps("info-70"),"info-80":ps("info-80"),"info-90":ps("info-90"),"info-95":ps("info-95"),"info-100":ps("info-100"),white:ps("white"),black:ps("black"),"primary-inverse":ps("primary-inverse")},ms={text:ps("neutral-20"),"text-subtle":ps("neutral-30"),"text-subtler":ps("neutral-50"),"text-subtlest":ps("neutral-60"),"text-primary":ps("primary-50"),"text-hover":ps("primary-40"),"text-selected":ps("primary-50"),"text-selected-hover":ps("primary-40"),"text-disabled":ps("neutral-50"),"text-disabled-subtle":ps("neutral-60"),"text-disabled-subtlest":ps("neutral-80"),"text-selected-disabled":ps("neutral-20"),"text-success":ps("success-40"),"text-warning":ps("warning-40"),"text-error":ps("error-40"),"text-info":ps("info-40"),"text-inverse":ps("white"),icon:ps("neutral-50"),"icon-subtle":ps("neutral-60"),"icon-strongest":ps("neutral-20"),"icon-primary":ps("primary-50"),"icon-primary-subtle":ps("primary-60"),"icon-primary-subtlest":ps("primary-70"),"icon-hover":ps("primary-40"),"icon-selected":ps("primary-50"),"icon-selected-hover":ps("primary-40"),"icon-disabled":ps("neutral-50"),"icon-disabled-subtle":ps("neutral-60"),"icon-selected-disabled":ps("neutral-60"),"icon-success":ps("success-50"),"icon-warning":ps("warning-60"),"icon-error":ps("error-50"),"icon-error-strong":ps("error-40"),"icon-info":ps("info-50"),"icon-inverse":ps("white"),"icon-primary-inverse":ps("primary-inverse"),border:ps("neutral-90"),"border-strong":ps("neutral-70"),"border-stronger":ps("neutral-50"),"border-primary":ps("primary-50"),"border-primary-subtle":ps("primary-60"),"border-hover":ps("primary-90"),"border-hover-strong":ps("primary-60"),"border-selected":ps("primary-50"),"border-selected-subtle":ps("primary-70"),"border-selected-subtlest":ps("primary-90"),"border-selected-hover":ps("primary-40"),"border-focus":ps("primary-60"),"border-focus-strong":ps("primary-50"),"border-disabled":ps("neutral-90"),"border-selected-disabled":ps("neutral-70"),"border-success":ps("success-60"),"border-warning":ps("warning-60"),"border-error":ps("error-60"),"border-error-focus":ps("error-60"),"border-error-focus-strong":ps("error-40"),"border-error-strong":ps("error-40"),"border-info":ps("info-60"),bg:ps("white"),"bg-strong":ps("neutral-100"),"bg-stronger":ps("neutral-95"),"bg-strongest":ps("neutral-90"),"bg-hover":ps("primary-95"),"bg-hover-strong":ps("primary-90"),"bg-hover-subtle":ps("primary-100"),"bg-hover-neutral":ps("neutral-100"),"bg-hover-neutral-strong":ps("neutral-90"),"bg-selected":ps("primary-95"),"bg-selected-hover":ps("primary-90"),"bg-selected-strong":ps("primary-90"),"bg-selected-stronger":ps("primary-70"),"bg-selected-strongest":ps("primary-50"),"bg-selected-strongest-hover":ps("primary-40"),"bg-disabled":ps("neutral-95"),"bg-selected-disabled":ps("neutral-95"),"bg-selected-stronger-disabled":ps("neutral-70"),"bg-success":ps("success-100"),"bg-success-hover":ps("success-95"),"bg-success-strong":ps("success-50"),"bg-success-strong-hover":ps("success-40"),"bg-warning":ps("warning-100"),"bg-warning-hover":ps("warning-95"),"bg-warning-strong":ps("warning-50"),"bg-warning-strong-hover":ps("warning-40"),"bg-info":ps("info-100"),"bg-info-hover":ps("info-95"),"bg-info-strong":ps("info-50"),"bg-info-strong-hover":ps("info-40"),"bg-error":ps("error-100"),"bg-error-hover":ps("error-95"),"bg-error-strong":ps("error-50"),"bg-error-strong-hover":ps("error-40"),"bg-inverse":ps("neutral-20"),"bg-inverse-subtle":ps("neutral-30"),"bg-inverse-subtler":ps("neutral-50"),"bg-inverse-subtlest":ps("neutral-60"),"bg-inverse-hover":ps("neutral-40"),"bg-primary":ps("primary-50"),"bg-primary-subtle":ps("primary-60"),"bg-primary-subtler":ps("primary-95"),"bg-primary-subtlest":ps("primary-100"),"bg-available":"#6DD0A1","bg-primary-hover":ps("primary-40"),"bg-primary-subtlest-hover":ps("primary-90"),"bg-primary-subtlest-selected":ps("primary-90"),"overlay-strong":"rgba(40, 40, 40, 0.85)","overlay-subtle":"rgba(40, 40, 40, 0.20)",hyperlink:ps("primary-50"),"hyperlink-hover":ps("primary-40"),"hyperlink-visited":ps("primary-40"),"hyperlink-inverse":ps("primary-inverse"),"focus-ring":ps("black"),"focus-ring-inverse":ps("white")},bs={collections:{lifesg:ms,bookingsg:ms,rbs:ms,mylegacy:ms,ccube:ms,oneservice:ms,pa:{text:ps("neutral-30"),"text-subtle":ps("neutral-40"),"text-subtler":ps("neutral-50"),"text-subtlest":ps("neutral-70"),"text-primary":ps("neutral-10"),"text-hover":ps("neutral-70"),"text-selected":ps("neutral-20"),"text-selected-hover":ps("neutral-10"),"text-disabled":ps("neutral-50"),"text-disabled-subtle":ps("neutral-60"),"text-disabled-subtlest":ps("neutral-80"),"text-selected-disabled":ps("neutral-40"),"text-success":ps("success-40"),"text-warning":ps("warning-40"),"text-error":ps("brand-30"),"text-info":ps("neutral-40"),"text-inverse":ps("neutral-100"),icon:ps("neutral-40"),"icon-subtle":ps("neutral-50"),"icon-strongest":ps("neutral-10"),"icon-primary":ps("neutral-10"),"icon-primary-subtle":ps("neutral-30"),"icon-primary-subtlest":ps("neutral-60"),"icon-hover":ps("neutral-70"),"icon-selected":ps("brand-20"),"icon-selected-hover":ps("brand-10"),"icon-disabled":ps("neutral-50"),"icon-disabled-subtle":ps("neutral-60"),"icon-selected-disabled":ps("neutral-40"),"icon-success":ps("success-40"),"icon-warning":ps("warning-60"),"icon-error":ps("brand-30"),"icon-error-strong":ps("brand-10"),"icon-info":ps("neutral-40"),"icon-inverse":ps("neutral-100"),"icon-primary-inverse":"#F9B371",border:ps("neutral-90"),"border-strong":ps("neutral-30"),"border-stronger":ps("neutral-20"),"border-primary":ps("neutral-40"),"border-primary-subtle":ps("neutral-60"),"border-hover":ps("neutral-80"),"border-hover-strong":ps("neutral-10"),"border-selected":ps("brand-20"),"border-selected-subtle":ps("neutral-40"),"border-selected-subtlest":ps("neutral-70"),"border-selected-hover":ps("neutral-10"),"border-focus":ps("neutral-20"),"border-focus-strong":ps("neutral-10"),"border-disabled":ps("neutral-90"),"border-selected-disabled":ps("neutral-80"),"border-success":ps("success-40"),"border-warning":ps("warning-60"),"border-error":ps("brand-30"),"border-error-focus":ps("brand-20"),"border-error-focus-strong":ps("brand-10"),"border-error-strong":ps("brand-20"),"border-info":ps("neutral-40"),bg:ps("neutral-100"),"bg-strong":ps("neutral-95"),"bg-stronger":ps("neutral-90"),"bg-strongest":ps("neutral-80"),"bg-hover":ps("brand-90"),"bg-hover-strong":ps("brand-80"),"bg-hover-subtle":ps("neutral-90"),"bg-hover-neutral":ps("neutral-90"),"bg-hover-neutral-strong":ps("neutral-90"),"bg-selected":ps("brand-100"),"bg-selected-hover":ps("brand-30"),"bg-selected-strong":ps("brand-50"),"bg-selected-stronger":ps("brand-40"),"bg-selected-strongest":ps("brand-20"),"bg-selected-strongest-hover":ps("brand-10"),"bg-disabled":ps("neutral-90"),"bg-selected-disabled":ps("neutral-90"),"bg-selected-stronger-disabled":ps("neutral-80"),"bg-success":ps("success-100"),"bg-success-hover":ps("success-95"),"bg-success-strong":ps("success-50"),"bg-success-strong-hover":ps("success-40"),"bg-warning":ps("warning-100"),"bg-warning-hover":ps("warning-95"),"bg-warning-strong":ps("warning-50"),"bg-warning-strong-hover":ps("warning-40"),"bg-info":ps("neutral-95"),"bg-info-hover":ps("info-95"),"bg-info-strong":ps("info-50"),"bg-info-strong-hover":ps("info-40"),"bg-error":ps("brand-100"),"bg-error-hover":ps("error-95"),"bg-error-strong":ps("error-50"),"bg-error-strong-hover":ps("error-40"),"bg-inverse":ps("neutral-40"),"bg-inverse-subtle":ps("neutral-60"),"bg-inverse-subtler":ps("neutral-70"),"bg-inverse-subtlest":ps("neutral-80"),"bg-inverse-hover":ps("neutral-30"),"bg-primary":ps("brand-20"),"bg-primary-subtle":ps("brand-60"),"bg-primary-subtler":ps("brand-80"),"bg-primary-subtlest":ps("brand-100"),"bg-available":ps("success-60"),"bg-primary-hover":ps("brand-10"),"bg-primary-subtlest-hover":ps("brand-80"),"bg-primary-subtlest-selected":ps("brand-40"),"overlay-strong":"rgba(25, 25, 25, 0.95)","overlay-subtle":"rgba(25, 25, 25, 0.20)",hyperlink:ps("neutral-10"),"hyperlink-hover":ps("neutral-40"),"hyperlink-visited":ps("neutral-50"),"hyperlink-inverse":"#F8AE68","focus-ring":ps("black"),"focus-ring-inverse":ps("white")}},defaultValue:"lifesg"},vs=e=>t=>{var r;const n=t.theme,i=ls(bs,null==n?void 0:n.colourScheme),o=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.semanticColour)?ss(i,e,n.overrides.semanticColour):i[e];return"function"==typeof o?o(t):o},ys={text:vs("text"),"text-subtle":vs("text-subtle"),"text-subtler":vs("text-subtler"),"text-subtlest":vs("text-subtlest"),"text-primary":vs("text-primary"),"text-hover":vs("text-hover"),"text-selected":vs("text-selected"),"text-selected-hover":vs("text-selected-hover"),"text-disabled":vs("text-disabled"),"text-disabled-subtle":vs("text-disabled-subtle"),"text-disabled-subtlest":vs("text-disabled-subtlest"),"text-selected-disabled":vs("text-selected-disabled"),"text-success":vs("text-success"),"text-warning":vs("text-warning"),"text-error":vs("text-error"),"text-info":vs("text-info"),"text-inverse":vs("text-inverse"),icon:vs("icon"),"icon-subtle":vs("icon-subtle"),"icon-strongest":vs("icon-strongest"),"icon-primary":vs("icon-primary"),"icon-primary-subtle":vs("icon-primary-subtle"),"icon-primary-subtlest":vs("icon-primary-subtlest"),"icon-hover":vs("icon-hover"),"icon-selected":vs("icon-selected"),"icon-selected-hover":vs("icon-selected-hover"),"icon-disabled":vs("icon-disabled"),"icon-disabled-subtle":vs("icon-disabled-subtle"),"icon-selected-disabled":vs("icon-selected-disabled"),"icon-success":vs("icon-success"),"icon-warning":vs("icon-warning"),"icon-error":vs("icon-error"),"icon-error-strong":vs("icon-error-strong"),"icon-info":vs("icon-info"),"icon-inverse":vs("icon-inverse"),"icon-primary-inverse":vs("icon-primary-inverse"),border:vs("border"),"border-strong":vs("border-strong"),"border-stronger":vs("border-stronger"),"border-primary":vs("border-primary"),"border-primary-subtle":vs("border-primary-subtle"),"border-hover":vs("border-hover"),"border-hover-strong":vs("border-hover-strong"),"border-selected":vs("border-selected"),"border-selected-subtle":vs("border-selected-subtle"),"border-selected-subtlest":vs("border-selected-subtlest"),"border-selected-hover":vs("border-selected-hover"),"border-focus":vs("border-focus"),"border-focus-strong":vs("border-focus-strong"),"border-disabled":vs("border-disabled"),"border-selected-disabled":vs("border-selected-disabled"),"border-success":vs("border-success"),"border-warning":vs("border-warning"),"border-error":vs("border-error"),"border-error-focus":vs("border-error-focus"),"border-error-focus-strong":vs("border-error-focus-strong"),"border-error-strong":vs("border-error-strong"),"border-info":vs("border-info"),bg:vs("bg"),"bg-strong":vs("bg-strong"),"bg-stronger":vs("bg-stronger"),"bg-strongest":vs("bg-strongest"),"bg-hover":vs("bg-hover"),"bg-hover-strong":vs("bg-hover-strong"),"bg-hover-subtle":vs("bg-hover-subtle"),"bg-hover-neutral":vs("bg-hover-neutral"),"bg-hover-neutral-strong":vs("bg-hover-neutral-strong"),"bg-selected":vs("bg-selected"),"bg-selected-hover":vs("bg-selected-hover"),"bg-selected-strong":vs("bg-selected-strong"),"bg-selected-stronger":vs("bg-selected-stronger"),"bg-selected-strongest":vs("bg-selected-strongest"),"bg-selected-strongest-hover":vs("bg-selected-strongest-hover"),"bg-disabled":vs("bg-disabled"),"bg-selected-disabled":vs("bg-selected-disabled"),"bg-selected-stronger-disabled":vs("bg-selected-stronger-disabled"),"bg-success":vs("bg-success"),"bg-success-hover":vs("bg-success-hover"),"bg-success-strong":vs("bg-success-strong"),"bg-success-strong-hover":vs("bg-success-strong-hover"),"bg-warning":vs("bg-warning"),"bg-warning-hover":vs("bg-warning-hover"),"bg-warning-strong":vs("bg-warning-strong"),"bg-warning-strong-hover":vs("bg-warning-strong-hover"),"bg-info":vs("bg-info"),"bg-info-hover":vs("bg-info-hover"),"bg-info-strong":vs("bg-info-strong"),"bg-info-strong-hover":vs("bg-info-strong-hover"),"bg-error":vs("bg-error"),"bg-error-hover":vs("bg-error-hover"),"bg-error-strong":vs("bg-error-strong"),"bg-error-strong-hover":vs("bg-error-strong-hover"),"bg-inverse":vs("bg-inverse"),"bg-inverse-subtle":vs("bg-inverse-subtle"),"bg-inverse-subtler":vs("bg-inverse-subtler"),"bg-inverse-subtlest":vs("bg-inverse-subtlest"),"bg-inverse-hover":vs("bg-inverse-hover"),"bg-primary":vs("bg-primary"),"bg-primary-subtle":vs("bg-primary-subtle"),"bg-primary-subtler":vs("bg-primary-subtler"),"bg-primary-subtlest":vs("bg-primary-subtlest"),"bg-available":vs("bg-available"),"bg-primary-hover":vs("bg-primary-hover"),"bg-primary-subtlest-hover":vs("bg-primary-subtlest-hover"),"bg-primary-subtlest-selected":vs("bg-primary-subtlest-selected"),"overlay-strong":vs("overlay-strong"),"overlay-subtle":vs("overlay-subtle"),hyperlink:vs("hyperlink"),"hyperlink-hover":vs("hyperlink-hover"),"hyperlink-visited":vs("hyperlink-visited"),"hyperlink-inverse":vs("hyperlink-inverse"),"focus-ring":vs("focus-ring"),"focus-ring-inverse":vs("focus-ring-inverse")},xs={collections:{default:{solid:e=>t=>{var r,n,o;const{thickness:a,radius:s,colour:l}=e||{},c=null!==(r="function"==typeof a?a(t):a)&&void 0!==r?r:us["width-010"](t),d=null!==(n="function"==typeof s?s(t):s)&&void 0!==n?n:0,u=null!==(o="function"==typeof l?l(t):l)&&void 0!==o?o:ys.border(t),f=us.solid;return i.css`
            border: ${c} ${f} ${u};
            border-radius: ${d};
        `},"dashed-default":e=>t=>{var r,n,o;const{thickness:a,radius:s,colour:l}=e||{},c=null!==(r="function"==typeof a?a(t):a)&&void 0!==r?r:us["width-010"](t),d=null!==(n="function"==typeof s?s(t):s)&&void 0!==n?n:0,u=null!==(o="function"==typeof l?l(t):l)&&void 0!==o?o:ys.border(t),f=encodeURIComponent(`<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' fill='none' rx='${d}' ry='${d}' stroke='${u}' stroke-width='${c}' stroke-dasharray='4, 8' stroke-dashoffset='0' stroke-linecap='square'/></svg>`);return i.css`
            background-image: url("data:image/svg+xml,${f}");
            border-radius: ${d};
        `}}},defaultValue:"default"},ws=e=>1===e.length&&"theme"in e[0],$s=e=>(...t)=>r=>{const n=ws(t)?[]:t,i=ws(t)?t[0]:r,o=i.theme;return(0,ls(xs,null==o?void 0:o.borderScheme)[e])(...n)(i)},Cs={solid:$s("solid"),"dashed-default":$s("dashed-default")},Ss={collections:{default:{"xxs-min":0,"xxs-max":320,"xs-min":321,"xs-max":375,"sm-min":376,"sm-max":420,"md-min":421,"md-max":767,"lg-min":768,"lg-max":1023,"xl-min":1024,"xl-max":1440,"xxl-min":1441,"xxs-column":8,"xs-column":8,"sm-column":8,"md-column":8,"lg-column":12,"xl-column":12,"xxl-column":12,"xxs-gutter":16,"xs-gutter":16,"sm-gutter":16,"md-gutter":16,"lg-gutter":32,"xl-gutter":32,"xxl-gutter":32,"xxs-margin":24,"xs-margin":24,"sm-margin":24,"md-margin":24,"lg-margin":48,"xl-margin":48,"xxl-margin":48}},defaultValue:"default"},js=e=>t=>{var r;const n=t.theme,i=ls(Ss,null==n?void 0:n.breakpointScheme);let o;return o=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.breakpoint)?ss(i,e,n.overrides.breakpoint):i[e],o},ks={"xxs-min":js("xxs-min"),"xxs-max":js("xxs-max"),"xs-min":js("xs-min"),"xs-max":js("xs-max"),"sm-min":js("sm-min"),"sm-max":js("sm-max"),"md-min":js("md-min"),"md-max":js("md-max"),"lg-min":js("lg-min"),"lg-max":js("lg-max"),"xl-min":js("xl-min"),"xl-max":js("xl-max"),"xxl-min":js("xxl-min"),"xxs-column":js("xxs-column"),"xs-column":js("xs-column"),"sm-column":js("sm-column"),"md-column":js("md-column"),"lg-column":js("lg-column"),"xl-column":js("xl-column"),"xxl-column":js("xxl-column"),"xxs-gutter":js("xxs-gutter"),"xs-gutter":js("xs-gutter"),"sm-gutter":js("sm-gutter"),"md-gutter":js("md-gutter"),"lg-gutter":js("lg-gutter"),"xl-gutter":js("xl-gutter"),"xxl-gutter":js("xxl-gutter"),"xxs-margin":js("xxs-margin"),"xs-margin":js("xs-margin"),"sm-margin":js("sm-margin"),"md-margin":js("md-margin"),"lg-margin":js("lg-margin"),"xl-margin":js("xl-margin"),"xxl-margin":js("xxl-margin")},Ds=e=>("max-width"===e?["xxs","xs","sm","md","lg","xl"]:["xxs","xs","sm","md","lg","xl","xxl"]).reduce(((t,r)=>(t[r]=((e,t)=>{const r=ks["max-width"===e?`${t}-max`:`${t}-min`];return t=>{const n=r(t);return`@media screen and (${e}: ${n}px)`}})(e,r),t)),{}),Ts={MaxWidth:Ds("max-width"),MinWidth:Ds("min-width")},Es={collections:{default:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.625rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Open Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.625rem","body-lh-md":"1.5rem","body-lh-sm":"1.625rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},bookingsg:{"heading-size-xxl":"3rem","heading-size-xl":"2.5rem","heading-size-lg":"2rem","heading-size-md":"1.625rem","heading-size-sm":"1.375rem","heading-size-xs":"1.125rem","heading-lh-xxl":"3.5rem","heading-lh-xl":"3rem","heading-lh-lg":"2.5rem","heading-lh-md":"2.25rem","heading-lh-sm":"1.75rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.056rem","heading-ls-xl":"-0.032rem","heading-ls-lg":"-0.032rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Plus Jakarta Sans","body-size-baseline":"1.125rem","body-size-md":"1rem","body-size-sm":"0.875rem","body-size-xs":"0.75rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.6rem","body-lh-xs":"1.2rem","body-ls-baseline":"0rem","body-ls-md":"0.014rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"},pa:{"heading-size-xxl":"2.5rem","heading-size-xl":"2rem","heading-size-lg":"1.75rem","heading-size-md":"1.5rem","heading-size-sm":"1.25rem","heading-size-xs":"1rem","heading-lh-xxl":"3rem","heading-lh-xl":"2.5rem","heading-lh-lg":"2.25rem","heading-lh-md":"2rem","heading-lh-sm":"2rem","heading-lh-xs":"1.75rem","heading-ls-xxl":"-0.032rem","heading-ls-xl":"0rem","heading-ls-lg":"0rem","heading-ls-md":"0rem","heading-ls-sm":"0rem","heading-ls-xs":"0rem","weight-light":"300","weight-regular":"400","weight-semibold":"600","weight-bold":"700","font-family":"Lato","body-size-baseline":"1rem","body-size-md":"0.875rem","body-size-sm":"0.75rem","body-size-xs":"0.625rem","body-lh-baseline":"1.75rem","body-lh-md":"1.5rem","body-lh-sm":"1.25rem","body-lh-xs":"1.25rem","body-ls-baseline":"0rem","body-ls-md":"0.012rem","body-ls-sm":"0.012rem","body-ls-xs":"0.012rem","form-label-size":"1rem","form-description-size":"0.875rem","form-label-lh":"1.5rem","form-description-lh":"1.6rem","form-label-ls":"0.014rem","form-description-ls":"0.012rem"}},defaultValue:"default"},Os=e=>t=>{var r;const n=t.theme,i=ls(Es,null==n?void 0:n.fontScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.fontSpec)?ss(i,e,n.overrides.fontSpec):i[e]},Fs={"heading-size-xxl":Os("heading-size-xxl"),"heading-size-xl":Os("heading-size-xl"),"heading-size-lg":Os("heading-size-lg"),"heading-size-md":Os("heading-size-md"),"heading-size-sm":Os("heading-size-sm"),"heading-size-xs":Os("heading-size-xs"),"heading-lh-xxl":Os("heading-lh-xxl"),"heading-lh-xl":Os("heading-lh-xl"),"heading-lh-lg":Os("heading-lh-lg"),"heading-lh-md":Os("heading-lh-md"),"heading-lh-sm":Os("heading-lh-sm"),"heading-lh-xs":Os("heading-lh-xs"),"heading-ls-xxl":Os("heading-ls-xxl"),"heading-ls-xl":Os("heading-ls-xl"),"heading-ls-lg":Os("heading-ls-lg"),"heading-ls-md":Os("heading-ls-md"),"heading-ls-sm":Os("heading-ls-sm"),"heading-ls-xs":Os("heading-ls-xs"),"weight-light":Os("weight-light"),"weight-regular":Os("weight-regular"),"weight-semibold":Os("weight-semibold"),"weight-bold":Os("weight-bold"),"font-family":Os("font-family"),"body-size-baseline":Os("body-size-baseline"),"body-size-md":Os("body-size-md"),"body-size-sm":Os("body-size-sm"),"body-size-xs":Os("body-size-xs"),"body-lh-baseline":Os("body-lh-baseline"),"body-lh-md":Os("body-lh-md"),"body-lh-sm":Os("body-lh-sm"),"body-lh-xs":Os("body-lh-xs"),"body-ls-baseline":Os("body-ls-baseline"),"body-ls-md":Os("body-ls-md"),"body-ls-sm":Os("body-ls-sm"),"body-ls-xs":Os("body-ls-xs"),"form-label-size":Os("form-label-size"),"form-description-size":Os("form-description-size"),"form-label-lh":Os("form-label-lh"),"form-description-lh":Os("form-description-lh"),"form-label-ls":Os("form-label-ls"),"form-description-ls":Os("form-description-ls")},Is=(e,t,r,n,o)=>{const{disableLigatures:a}=o||{};return i.css`
        font-family: ${Os("font-family")};
        font-size: ${Os(e)};
        font-weight: ${Os(t)};
        line-height: ${Os(r)};
        letter-spacing: ${Os(n)};

        font-variant: ${a?"no-common-ligatures":"normal"};
    `},_s=(e={})=>({"heading-xxl-light":Is("heading-size-xxl","weight-light","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-regular":Is("heading-size-xxl","weight-regular","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-semibold":Is("heading-size-xxl","weight-semibold","heading-lh-xxl","heading-ls-xxl",e),"heading-xxl-bold":Is("heading-size-xxl","weight-bold","heading-lh-xxl","heading-ls-xxl",e),"heading-xl-light":Is("heading-size-xl","weight-light","heading-lh-xl","heading-ls-xl",e),"heading-xl-regular":Is("heading-size-xl","weight-regular","heading-lh-xl","heading-ls-xl",e),"heading-xl-semibold":Is("heading-size-xl","weight-semibold","heading-lh-xl","heading-ls-xl",e),"heading-xl-bold":Is("heading-size-xl","weight-bold","heading-lh-xl","heading-ls-xl",e),"heading-lg-light":Is("heading-size-lg","weight-light","heading-lh-lg","heading-ls-lg",e),"heading-lg-regular":Is("heading-size-lg","weight-regular","heading-lh-lg","heading-ls-lg",e),"heading-lg-semibold":Is("heading-size-lg","weight-semibold","heading-lh-lg","heading-ls-lg",e),"heading-lg-bold":Is("heading-size-lg","weight-bold","heading-lh-lg","heading-ls-lg",e),"heading-md-light":Is("heading-size-md","weight-light","heading-lh-md","heading-ls-md",e),"heading-md-regular":Is("heading-size-md","weight-regular","heading-lh-md","heading-ls-md",e),"heading-md-semibold":Is("heading-size-md","weight-semibold","heading-lh-md","heading-ls-md",e),"heading-md-bold":Is("heading-size-md","weight-bold","heading-lh-md","heading-ls-md",e),"heading-sm-light":Is("heading-size-sm","weight-light","heading-lh-sm","heading-ls-sm",e),"heading-sm-regular":Is("heading-size-sm","weight-regular","heading-lh-sm","heading-ls-sm",e),"heading-sm-semibold":Is("heading-size-sm","weight-semibold","heading-lh-sm","heading-ls-sm",e),"heading-sm-bold":Is("heading-size-sm","weight-bold","heading-lh-sm","heading-ls-sm",e),"heading-xs-light":Is("heading-size-xs","weight-light","heading-lh-xs","heading-ls-xs",e),"heading-xs-regular":Is("heading-size-xs","weight-regular","heading-lh-xs","heading-ls-xs",e),"heading-xs-semibold":Is("heading-size-xs","weight-semibold","heading-lh-xs","heading-ls-xs",e),"heading-xs-bold":Is("heading-size-xs","weight-bold","heading-lh-xs","heading-ls-xs",e),"body-baseline-light":Is("body-size-baseline","weight-light","body-lh-baseline","body-ls-baseline",e),"body-baseline-regular":Is("body-size-baseline","weight-regular","body-lh-baseline","body-ls-baseline",e),"body-baseline-semibold":Is("body-size-baseline","weight-semibold","body-lh-baseline","body-ls-baseline",e),"body-baseline-bold":Is("body-size-baseline","weight-bold","body-lh-baseline","body-ls-baseline",e),"body-md-light":Is("body-size-md","weight-light","body-lh-md","body-ls-md",e),"body-md-regular":Is("body-size-md","weight-regular","body-lh-md","body-ls-md",e),"body-md-semibold":Is("body-size-md","weight-semibold","body-lh-md","body-ls-md",e),"body-md-bold":Is("body-size-md","weight-bold","body-lh-md","body-ls-md",e),"body-sm-light":Is("body-size-sm","weight-light","body-lh-sm","body-ls-sm",e),"body-sm-regular":Is("body-size-sm","weight-regular","body-lh-sm","body-ls-sm",e),"body-sm-semibold":Is("body-size-sm","weight-semibold","body-lh-sm","body-ls-sm",e),"body-sm-bold":Is("body-size-sm","weight-bold","body-lh-sm","body-ls-sm",e),"body-xs-light":Is("body-size-xs","weight-light","body-lh-xs","body-ls-xs",e),"body-xs-regular":Is("body-size-xs","weight-regular","body-lh-xs","body-ls-xs",e),"body-xs-semibold":Is("body-size-xs","weight-semibold","body-lh-xs","body-ls-xs",e),"body-xs-bold":Is("body-size-xs","weight-bold","body-lh-xs","body-ls-xs",e),"form-label":Is("form-label-size","weight-semibold","form-label-lh","form-label-ls",e),"form-description":Is("form-description-size","weight-regular","form-description-lh","form-description-ls",e)}),Ms=_s({disableLigatures:!0}),As={collections:{default:_s(),bookingsg:Ms,pa:_s({disableLigatures:!0})},defaultValue:"default"},Bs=e=>t=>{var r;const n=t.theme,i=ls(As,null==n?void 0:n.fontScheme),o=(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.font)?ss(i,e,n.overrides.font):i[e];return"function"==typeof o?o(t):o},Rs={"heading-xxl-light":Bs("heading-xxl-light"),"heading-xxl-regular":Bs("heading-xxl-regular"),"heading-xxl-semibold":Bs("heading-xxl-semibold"),"heading-xxl-bold":Bs("heading-xxl-bold"),"heading-xl-light":Bs("heading-xl-light"),"heading-xl-regular":Bs("heading-xl-regular"),"heading-xl-semibold":Bs("heading-xl-semibold"),"heading-xl-bold":Bs("heading-xl-bold"),"heading-lg-light":Bs("heading-lg-light"),"heading-lg-regular":Bs("heading-lg-regular"),"heading-lg-semibold":Bs("heading-lg-semibold"),"heading-lg-bold":Bs("heading-lg-bold"),"heading-md-light":Bs("heading-md-light"),"heading-md-regular":Bs("heading-md-regular"),"heading-md-semibold":Bs("heading-md-semibold"),"heading-md-bold":Bs("heading-md-bold"),"heading-sm-light":Bs("heading-sm-light"),"heading-sm-regular":Bs("heading-sm-regular"),"heading-sm-semibold":Bs("heading-sm-semibold"),"heading-sm-bold":Bs("heading-sm-bold"),"heading-xs-light":Bs("heading-xs-light"),"heading-xs-regular":Bs("heading-xs-regular"),"heading-xs-semibold":Bs("heading-xs-semibold"),"heading-xs-bold":Bs("heading-xs-bold"),"body-baseline-light":Bs("body-baseline-light"),"body-baseline-regular":Bs("body-baseline-regular"),"body-baseline-semibold":Bs("body-baseline-semibold"),"body-baseline-bold":Bs("body-baseline-bold"),"body-md-light":Bs("body-md-light"),"body-md-regular":Bs("body-md-regular"),"body-md-semibold":Bs("body-md-semibold"),"body-md-bold":Bs("body-md-bold"),"body-sm-light":Bs("body-sm-light"),"body-sm-regular":Bs("body-sm-regular"),"body-sm-semibold":Bs("body-sm-semibold"),"body-sm-bold":Bs("body-sm-bold"),"body-xs-light":Bs("body-xs-light"),"body-xs-regular":Bs("body-xs-regular"),"body-xs-semibold":Bs("body-xs-semibold"),"body-xs-bold":Bs("body-xs-bold"),"form-label":Bs("form-label"),"form-description":Bs("form-description")},zs={collections:{default:{"duration-150":"150ms","duration-250":"250ms","duration-350":"350ms","duration-500":"500ms","duration-800":"800ms","duration-1000":"1000ms","ease-default":"cubic-bezier(0.45, 0.05, 0.55, 0.95)","ease-standard":"cubic-bezier(0.86, 0, 0.07, 1)","ease-entrance":"cubic-bezier(0.18, 0.13, 0, 1)","ease-exit":"cubic-bezier(1, 0, 0.8, 0.85)"}},defaultValue:"default"},Ps=e=>t=>{var r;const n=t.theme,i=ls(zs,null==n?void 0:n.motionScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.motion)?ss(i,e,n.overrides.motion):i[e]},Ls={"duration-150":Ps("duration-150"),"duration-250":Ps("duration-250"),"duration-350":Ps("duration-350"),"duration-500":Ps("duration-500"),"duration-800":Ps("duration-800"),"duration-1000":Ps("duration-1000"),"ease-default":Ps("ease-default"),"ease-standard":Ps("ease-standard"),"ease-entrance":Ps("ease-entrance"),"ease-exit":Ps("ease-exit")},Ns={collections:{default:{none:0,xs:2,sm:4,md:8,lg:12,full:9999}},defaultValue:"default"},Hs=e=>t=>{var r;const n=t.theme,i=ls(Ns,null==n?void 0:n.radiusScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.radius)?`${ss(i,e,n.overrides.radius)}px`:`${i[e]}px`},Ws={none:Hs("none"),xs:Hs("xs"),sm:Hs("sm"),md:Hs("md"),lg:Hs("lg"),full:Hs("full")},Vs={collections:{default:{"spacing-0":0,"spacing-4":4,"spacing-8":8,"spacing-12":12,"spacing-16":16,"spacing-20":20,"spacing-24":24,"spacing-32":32,"spacing-40":40,"spacing-48":48,"spacing-64":64,"spacing-72":72,"layout-xs":8,"layout-sm":16,"layout-md":24,"layout-lg":32,"layout-xl":48,"layout-xxl":64,"layout-xxxl":128}},defaultValue:"default"},Ys=e=>t=>{var r;const n=t.theme,i=ls(Vs,null==n?void 0:n.spacingScheme);return(null===(r=null==n?void 0:n.overrides)||void 0===r?void 0:r.spacing)?`${ss(i,e,n.overrides.spacing)}px`:`${i[e]}px`},Us={"spacing-0":Ys("spacing-0"),"spacing-4":Ys("spacing-4"),"spacing-8":Ys("spacing-8"),"spacing-12":Ys("spacing-12"),"spacing-16":Ys("spacing-16"),"spacing-20":Ys("spacing-20"),"spacing-24":Ys("spacing-24"),"spacing-32":Ys("spacing-32"),"spacing-40":Ys("spacing-40"),"spacing-48":Ys("spacing-48"),"spacing-64":Ys("spacing-64"),"spacing-72":Ys("spacing-72"),"layout-xs":Ys("layout-xs"),"layout-sm":Ys("layout-sm"),"layout-md":Ys("layout-md"),"layout-lg":Ys("layout-lg"),"layout-xl":Ys("layout-xl"),"layout-xxl":Ys("layout-xxl"),"layout-xxxl":Ys("layout-xxxl")},Ks=Object.assign(Object.assign({},ys),{Primitive:gs}),qs=Object.assign(Object.assign({},Rs),{Spec:Fs}),Xs=Ls,Gs=Object.assign(Object.assign({},us),{Util:Cs}),Zs=Us,Qs=Ws,Js=ks,el=Ts,tl={colourScheme:"lifesg",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"lifesg",_v2:{colorScheme:"base",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"base"}},rl=K.default.button`
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
`,ml=K.default(Di.div)`
    overflow: hidden;
`,bl=K.default.div`
    display: inline-block;
    padding-right: 4rem;

    ${el.MaxWidth.lg} {
        padding-right: 0;
    }
`;const vl=t.forwardRef((function(r,n){var{title:i,children:o,expanded:a,type:s="default",collapsible:l=!0}=r,c=X(r,["title","children","expanded","type","collapsible"]);const d=t.useRef(null),u=t.useContext(q),[f,h]=t.useState(!l||(null!=a?a:u)),[p,g]=t.useState(!1),m=c["data-testid"]||"accordion-item",b=qe(),v=b.ref;t.useImperativeHandle(n,(()=>Object.assign(d.current,{expand(){h(!0)},collapse(){h(!1)},isExpanded:()=>f})),[f]),t.useEffect((()=>{p&&h(!l||u)}),[u]),t.useEffect((()=>{p&&h(!!a)}),[a]),t.useEffect((()=>{g(!0)}),[]);const y={height:f?b.height:0},x=ci(y);return e.jsxs(cl,{"data-testid":m,className:c.className,$isCollapsed:f,ref:d,children:[e.jsxs(dl,{$isCollapsed:l,onClick:l?e=>{e.preventDefault(),h((e=>!e))}:void 0,children:["string"!=typeof i?i:"small"===s?e.jsx(hl,{weight:"bold","data-testid":`${m}-title`,$isCollapsed:f,children:i}):e.jsx(fl,{weight:"bold","data-testid":`${m}-title`,$isCollapsed:f,children:i}),l&&e.jsx(pl,{"data-testid":`${m}-expand-collapse-button`,$isCollapsed:f,focusHighlight:!1,focusOutline:"browser","aria-label":f?"Collapse":"Expand",children:e.jsx(gl,{})})]}),e.jsx(ml,{style:p?x:y,$isCollapsed:f,"data-testid":`${m}-expandable-container`,children:e.jsx(bl,{ref:v,id:"content-container",children:o})})]})})),yl=K.default.div`
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
`,jl=({color:t,className:r,size:n})=>e.jsxs(yl,{className:r,$size:n,$color:t,"data-testid":"component-loading-spinner",children:[e.jsx(wl,{id:"inner1"}),e.jsx($l,{id:"inner2"}),e.jsx(Cl,{id:"inner3"}),e.jsx(Sl,{id:"inner4"})]}),kl={collections:{default:{Button:{"button-radius":Ws.sm,"button-default-colour-bg":ys["bg-primary"],"button-default-colour-bg-hover":ys["bg-primary-hover"],"button-default-colour-text":ys["text-inverse"],"button-secondary-colour-border":ys["border-primary"],"button-secondary-colour-text":ys["text-primary"],"button-light-colour-text":ys["text-primary"],"button-link-colour-text":ys["text-primary"]}},pa:{Button:{"button-radius":Ws.full,"button-default-colour-bg":ys["bg-primary"],"button-default-colour-bg-hover":ys["bg-primary-hover"],"button-default-colour-text":ys["text-inverse"],"button-secondary-colour-border":ys["border-primary"],"button-secondary-colour-text":ys["text-primary"],"button-light-colour-text":ys["text-primary"],"button-link-colour-text":ys["text-primary"]}}},defaultValue:"default"},Dl=(e,t)=>r=>{var n,i;const o=r.theme,a=ls(kl,null==o?void 0:o.componentScheme);return Tl((null===(i=null===(n=null==o?void 0:o.componentOverrides)||void 0===n?void 0:n[e])||void 0===i?void 0:i[t])||a[e][t],r)},Tl=(e,t)=>{switch(typeof e){case"function":return e(t);case"number":return e+"px";case"string":return e}},El=Dl("Button","button-radius"),Ol=Dl("Button","button-default-colour-bg"),Fl=Dl("Button","button-default-colour-bg-hover"),Il=Dl("Button","button-default-colour-text"),_l=Dl("Button","button-secondary-colour-border"),Ml=Dl("Button","button-secondary-colour-text"),Al=Dl("Button","button-light-colour-text"),Bl=Dl("Button","button-link-colour-text"),Rl=K.default.button`
    padding: ${Zs["spacing-8"]} ${Zs["spacing-16"]};
    min-width: 4rem;
    border: ${Gs["width-010"]} ${Gs.solid} transparent;
    transition: all ${Xs["duration-250"]} ${Xs["ease-default"]};
    border-radius: ${El};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    // -----------------------------------------------------------------------------
    // BUTTON STYLE + TEXT COLOR
    // -----------------------------------------------------------------------------
    ${e=>{switch(e.$buttonStyle){case"secondary":return i.css`
                    background-color: ${Ks.Primitive.white};
                    border-color: ${e.$buttonIsDanger?Ks["border-error-strong"]:_l};

                    color: ${e.$buttonIsDanger?Ks["text-error"]:Ml};

                    &:hover,
                    &:active {
                        background-color: ${Ks["bg-hover-neutral"]};
                    }
                `;case"light":return i.css`
                    background-color: ${Ks.bg};
                    border-color: ${Ks.border};

                    color: ${e.$buttonIsDanger?Ks["text-error"]:Al};

                    &:hover,
                    &:active {
                        background-color: ${Ks["bg-hover-neutral"]};
                    }
                `;case"link":return i.css`
                    background-color: transparent;

                    color: ${e.$buttonIsDanger?Ks["text-error"]:Bl};
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
                    background-color: ${e.$buttonIsDanger?Ks["bg-error-strong"]:Ol};};

                    ${el.MaxWidth.sm} {
                        width: 100%;
                    }

                    color: ${Il}};

                    &:hover,
                    &:active {
                        background-color: ${e.$buttonIsDanger?Ks["bg-error-strong-hover"]:Fl}
                        };
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
`,zl=K.default(jl)`
    margin-right: 0.5rem;
`,Pl=(t,r)=>{const{children:n,disabled:i=!1,loading:o=!1,styleType:a="default",danger:s=!1}=t,l=X(t,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":a,$buttonSizeStyle:"default",$buttonIsDanger:s};return e.jsxs(Rl,Object.assign({ref:r,"data-testid":l["data-testid"]||"button",disabled:i},c,l,{children:[o&&e.jsx(zl,{}),e.jsx("span",{children:n})]}))};Pl.displayName="Button.Default";const Ll=(t,r)=>{const{children:n,disabled:i=!1,loading:o=!1,styleType:a="default",danger:s=!1}=t,l=X(t,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":a,$buttonSizeStyle:"small",$buttonIsDanger:s};return e.jsxs(Rl,Object.assign({ref:r,"data-testid":l["data-testid"]||"button",disabled:i},c,l,{children:[o&&e.jsx(zl,{}),e.jsx("span",{children:n})]}))};Ll.displayName="Button.Small";const Nl=(t,r)=>{const{children:n,disabled:i=!1,loading:o=!1,styleType:a="default",danger:s=!1}=t,l=X(t,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":a,$buttonSizeStyle:"large",$buttonIsDanger:s};return e.jsxs(Rl,Object.assign({ref:r,"data-testid":l["data-testid"]||"button",disabled:i},c,l,{children:[o&&e.jsx(zl,{}),e.jsx("span",{children:n})]}))};Nl.displayName="Button.Large";const Hl={Default:Y.default.forwardRef(Pl),Small:Y.default.forwardRef(Ll),Large:Y.default.forwardRef(Nl)},Wl=K.default.div`
    width: 100%;
    border-bottom: ${Gs["width-010"]} ${Gs.solid} ${Ks.border};
`,Vl=K.default.div`
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
`,Yl=K.default(exports.Typography.HeadingMD)`
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
`,Ul=K.default(Hl.Small)`
    padding: 1.75rem 1rem; // larger clickable area
    margin: -1rem -1rem -1rem 0px;
    white-space: nowrap;
`,Kl=Object.assign((({children:r,title:n,enableExpandAll:i=!0,initialDisplay:o="expand-all",showTitleInMobile:a=!1,className:s})=>{const[l,c]=t.useState("expand-all"===o),d=e=>{e.preventDefault(),c((e=>!e))};return e.jsx(q.Provider,{value:l,children:e.jsxs(Wl,{className:s,children:[n||i?e.jsxs(Vl,{$showTitleInMobile:a,$hasExpandAll:i,children:[n&&e.jsx(Yl,{weight:"bold",$showInMobile:a,"data-testid":"accordion-title",children:n}),i&&e.jsx(Ul,{"data-testid":"accordion-expand-collapse-button",onClick:d,styleType:"link",type:"button",children:l?"Hide all":"Show all"})]}):null,r]})})}),{Item:vl}),ql=e=>{const{textSize:t}=e||{};return i.css`
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
    `},Xl=K.default.div`
    padding: ${Zs["spacing-8"]} ${Zs["spacing-16"]};
    display: flex;

    ${e=>{let t,r;switch(e.$type){case"error":t=Ks["bg-error"](e),r=Ks["border-error"](e);break;case"success":t=Ks["bg-success"](e),r=Ks["border-success"](e);break;case"warning":default:t=Ks["bg-warning"](e),r=Ks["border-warning"](e);break;case"info":t=Ks["bg-info"](e),r=Ks["border-info"](e);break;case"description":t=Ks["bg-strong"](e),r=Ks["border-strong"](e)}return i.css`
            background: ${t};
            border-left: ${Gs["width-020"]} ${Gs.solid}
                ${r};
        `}}

    color: ${Ks.text};
    ${e=>"small"===e.$sizeType?ql({textSize:"body-sm"}):ql({textSize:"body-md"})}
`,Gl=K.default.div`
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
`,Zl=K.default(exports.Typography.LinkSM)`
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
`,Ql=K.default.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-wrap: anywhere;
`,Jl=K.default.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    ${e=>{if(e.$showMore&&e.$hasActionLink)return i.css`
                margin-bottom: ${Zs["spacing-8"]};
            `}}
    ${e=>{const t="linear-gradient(to bottom, black 50%, transparent 100%)";if(!e.$showMore&&e.$maxCollapsedHeight)return`\n                max-height: ${e.$maxCollapsedHeight}px;\n\t\t\t\toverflow: hidden;\n                -webkit-mask-image: ${t};\n                mask-image: ${t};\n\t\t\t`}}
`,ec=K.default.button`
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
`,tc=K.default(u.ChevronDownIcon)`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${Xs["duration-350"]} ${Xs["ease-standard"]};
`,rc=r=>{var{type:n,className:i,children:o,actionLink:u,actionLinkIcon:f,sizeType:h="default",showIcon:p=!1,customIcon:g,maxCollapsedHeight:m}=r,b=X(r,["type","className","children","actionLink","actionLinkIcon","sizeType","showIcon","customIcon","maxCollapsedHeight"]);const[v,y]=t.useState(!1),[x,w]=t.useState(!1),{height:$,ref:C}=qe();t.useEffect((()=>{S()}),[m,$]);const S=()=>{y(!m),w(j())},j=()=>!(!$||!m)&&$>m;return e.jsxs(Xl,{className:i,$type:n,$sizeType:h,"data-testid":b["data-testid"],children:[p&&e.jsx(Gl,{$sizeType:h,$type:n,children:(()=>{if(n&&g)return g;switch(n){case"success":return e.jsx(d.TickCircleFillIcon,{});case"warning":return e.jsx(l.ExclamationTriangleFillIcon,{});case"error":return e.jsx(s.ExclamationCircleFillIcon,{});case"info":case"description":return e.jsx(c.ICircleFillIcon,{});default:return null}})()}),e.jsxs(Ql,{children:[e.jsxs(Jl,{$maxCollapsedHeight:j()?m:void 0,$showMore:v,$hasActionLink:!!u,children:[e.jsx("div",{ref:C,children:o}),u?e.jsxs(Zl,Object.assign({"data-testid":"action-link",$type:n,$sizeType:h},u,{children:[u.children,f||e.jsx(a.ArrowRightIcon,{})]})):null]}),x&&e.jsxs(ec,{$sizeType:h,$type:n,type:"button",onClick:()=>y(!v),children:["Show ",v?"less":"more",e.jsx(tc,{$expanded:v})]})]})]})},nc=t.lazy((()=>G(void 0,void 0,void 0,(function*(){return{default:(yield Promise.resolve().then((function(){return require("./lottie-animation.c6bfb373.js")}))).LottieSpinner}})))),ic=r=>e.jsx(ac,Object.assign({},r,{children:e.jsx(t.Suspense,{fallback:e.jsx(oc,{}),children:e.jsx(nc,{})})})),oc=()=>e.jsx("div",{style:{height:"200px",width:"200px"}}),ac=K.default.div`
    margin: 0 auto;
    padding: ${Zs["spacing-32"]} ${Zs["spacing-16"]};
`,sc=t.lazy((()=>G(void 0,void 0,void 0,(function*(){return{default:(yield Promise.resolve().then((function(){return require("./lottie-animation.dc6070a3.js")}))).LottieLoadingDots}})))),lc=r=>e.jsx(dc,Object.assign({},r,{children:e.jsx(t.Suspense,{fallback:e.jsx(cc,{}),children:e.jsx(sc,{})})})),cc=()=>e.jsx("div",{style:{height:"16px",width:"64px"}}),dc=K.default.div`
    margin: 0 auto;
`,uc=t.lazy((()=>G(void 0,void 0,void 0,(function*(){return{default:(yield Promise.resolve().then((function(){return require("./lottie-animation.f675672b.js")}))).LottieLoadingDotsSpinner}})))),fc=r=>{var{color:n}=r,o=X(r,["color"]);const a=i.useTheme(),s=n||Ks["icon-primary"]({theme:a});return e.jsx(pc,Object.assign({},o,{children:e.jsx(t.Suspense,{fallback:e.jsx(hc,{}),children:e.jsx(uc,{color:s})})}))},hc=()=>e.jsx("div",{style:{height:"200px",width:"200px"}}),pc=K.default.div`
    margin: 0 auto;
`;var gc,mc={exports:{}};gc=e=>(()=>{var t={"./node_modules/css-mediaquery/index.js":
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
	  \************************************************************/(e,t,r)=>{var n,i=r(/*! react-is */"./node_modules/react-is/index.js"),o=r(/*! object-assign */"./node_modules/object-assign/index.js"),a=r(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),s=r(/*! ./lib/has */"./node_modules/prop-types/lib/has.js"),l=r(/*! ./checkPropTypes */"./node_modules/prop-types/checkPropTypes.js");function c(){return null}n=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},e.exports=function(e,t){var r="function"==typeof Symbol&&Symbol.iterator,d="<<anonymous>>",u={array:g("array"),bigint:g("bigint"),bool:g("boolean"),func:g("function"),number:g("number"),object:g("object"),string:g("string"),symbol:g("symbol"),any:p(c),arrayOf:function(e){return p((function(t,r,n,i,o){if("function"!=typeof e)return new h("Property `"+o+"` of component `"+n+"` has invalid PropType notation inside arrayOf.");var s=t[r];if(!Array.isArray(s))return new h("Invalid "+i+" `"+o+"` of type `"+v(s)+"` supplied to `"+n+"`, expected an array.");for(var l=0;l<s.length;l++){var c=e(s,l,n,i,o+"["+l+"]",a);if(c instanceof Error)return c}return null}))},element:p((function(t,r,n,i,o){var a=t[r];return e(a)?null:new h("Invalid "+i+" `"+o+"` of type `"+v(a)+"` supplied to `"+n+"`, expected a single ReactElement.")})),elementType:p((function(e,t,r,n,o){var a=e[t];return i.isValidElementType(a)?null:new h("Invalid "+n+" `"+o+"` of type `"+v(a)+"` supplied to `"+r+"`, expected a single ReactElement type.")})),instanceOf:function(e){return p((function(t,r,n,i,o){if(!(t[r]instanceof e)){var a=e.name||d;return new h("Invalid "+i+" `"+o+"` of type `"+((s=t[r]).constructor&&s.constructor.name?s.constructor.name:d)+"` supplied to `"+n+"`, expected instance of `"+a+"`.")}var s;return null}))},node:p((function(e,t,r,n,i){return b(e[t])?null:new h("Invalid "+n+" `"+i+"` supplied to `"+r+"`, expected a ReactNode.")})),objectOf:function(e){return p((function(t,r,n,i,o){if("function"!=typeof e)return new h("Property `"+o+"` of component `"+n+"` has invalid PropType notation inside objectOf.");var l=t[r],c=v(l);if("object"!==c)return new h("Invalid "+i+" `"+o+"` of type `"+c+"` supplied to `"+n+"`, expected an object.");for(var d in l)if(s(l,d)){var u=e(l,d,n,i,o+"."+d,a);if(u instanceof Error)return u}return null}))},oneOf:function(e){return Array.isArray(e)?p((function(t,r,n,i,o){for(var a=t[r],s=0;s<e.length;s++)if(f(a,e[s]))return null;var l=JSON.stringify(e,(function(e,t){return"symbol"===y(t)?String(t):t}));return new h("Invalid "+i+" `"+o+"` of value `"+String(a)+"` supplied to `"+n+"`, expected one of "+l+".")})):(n(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),c)},oneOfType:function(e){if(!Array.isArray(e))return n("Invalid argument supplied to oneOfType, expected an instance of array."),c;for(var t=0;t<e.length;t++){var r=e[t];if("function"!=typeof r)return n("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+x(r)+" at index "+t+"."),c}return p((function(t,r,n,i,o){for(var l=[],c=0;c<e.length;c++){var d=(0,e[c])(t,r,n,i,o,a);if(null==d)return null;d.data&&s(d.data,"expectedType")&&l.push(d.data.expectedType)}return new h("Invalid "+i+" `"+o+"` supplied to `"+n+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return p((function(t,r,n,i,o){var s=t[r],l=v(s);if("object"!==l)return new h("Invalid "+i+" `"+o+"` of type `"+l+"` supplied to `"+n+"`, expected `object`.");for(var c in e){var d=e[c];if("function"!=typeof d)return m(n,i,o,c,y(d));var u=d(s,c,n,i,o+"."+c,a);if(u)return u}return null}))},exact:function(e){return p((function(t,r,n,i,l){var c=t[r],d=v(c);if("object"!==d)return new h("Invalid "+i+" `"+l+"` of type `"+d+"` supplied to `"+n+"`, expected `object`.");var u=o({},t[r],e);for(var f in u){var p=e[f];if(s(e,f)&&"function"!=typeof p)return m(n,i,l,f,y(p));if(!p)return new h("Invalid "+i+" `"+l+"` key `"+f+"` supplied to `"+n+"`.\nBad object: "+JSON.stringify(t[r],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var g=p(c,f,n,i,l+"."+f,a);if(g)return g}return null}))}};function f(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function h(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function p(e){var r={},i=0;function o(o,s,l,c,u,f,p){if(c=c||d,f=f||l,p!==a){if(t){var g=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw g.name="Invariant Violation",g}if("undefined"!=typeof console){var m=c+":"+l;!r[m]&&i<3&&(n("You are manually calling a React.PropTypes validation function for the `"+f+"` prop on `"+c+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),r[m]=!0,i++)}}return null==s[l]?o?null===s[l]?new h("The "+u+" `"+f+"` is marked as required in `"+c+"`, but its value is `null`."):new h("The "+u+" `"+f+"` is marked as required in `"+c+"`, but its value is `undefined`."):null:e(s,l,c,u,f)}var s=o.bind(null,!1);return s.isRequired=o.bind(null,!0),s}function g(e){return p((function(t,r,n,i,o,a){var s=t[r];return v(s)!==e?new h("Invalid "+i+" `"+o+"` of type `"+y(s)+"` supplied to `"+n+"`, expected `"+e+"`.",{expectedType:e}):null}))}function m(e,t,r,n,i){return new h((e||"React class")+": "+t+" type `"+r+"."+n+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+i+"`.")}function b(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(b);if(null===t||e(t))return!0;var n=function(e){var t=e&&(r&&e[r]||e["@@iterator"]);if("function"==typeof t)return t}(t);if(!n)return!1;var i,o=n.call(t);if(n!==t.entries){for(;!(i=o.next()).done;)if(!b(i.value))return!1}else for(;!(i=o.next()).done;){var a=i.value;if(a&&!b(a[1]))return!1}return!0;default:return!1}}function v(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function y(e){if(null==e)return""+e;var t=v(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function x(e){var t=y(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return h.prototype=Error.prototype,u.checkPropTypes=l,u.resetWarningCache=l.resetWarningCache,u.PropTypes=u,u}},"./node_modules/prop-types/index.js":
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
	  \***********************************************************/(e,t)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,r=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,i=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,d=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,f=e?Symbol.for("react.suspense"):60113,h=e?Symbol.for("react.suspense_list"):60120,p=e?Symbol.for("react.memo"):60115,g=e?Symbol.for("react.lazy"):60116,m=e?Symbol.for("react.block"):60121,b=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,y=e?Symbol.for("react.scope"):60119;function x(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:var h=e.type;switch(h){case c:case d:case i:case a:case o:case f:return h;default:var m=h&&h.$$typeof;switch(m){case l:case u:case g:case p:case s:return m;default:return t}}case n:return t}}}var w=c,$=d,C=l,S=s,j=r,k=u,D=i,T=g,E=p,O=n,F=a,I=o,_=f,M=!1;function A(e){return x(e)===d}t.AsyncMode=w,t.ConcurrentMode=$,t.ContextConsumer=C,t.ContextProvider=S,t.Element=j,t.ForwardRef=k,t.Fragment=D,t.Lazy=T,t.Memo=E,t.Portal=O,t.Profiler=F,t.StrictMode=I,t.Suspense=_,t.isAsyncMode=function(e){return M||(M=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),A(e)||x(e)===c},t.isConcurrentMode=A,t.isContextConsumer=function(e){return x(e)===l},t.isContextProvider=function(e){return x(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return x(e)===u},t.isFragment=function(e){return x(e)===i},t.isLazy=function(e){return x(e)===g},t.isMemo=function(e){return x(e)===p},t.isPortal=function(e){return x(e)===n},t.isProfiler=function(e){return x(e)===a},t.isStrictMode=function(e){return x(e)===o},t.isSuspense=function(e){return x(e)===f},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===d||e===a||e===o||e===f||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===p||e.$$typeof===s||e.$$typeof===l||e.$$typeof===u||e.$$typeof===b||e.$$typeof===v||e.$$typeof===y||e.$$typeof===m)},t.typeOf=x}()},"./node_modules/react-is/index.js":
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
	  \**************************************************************************************/t=>{t.exports=e}},r={};function n(e){var i=r[e];if(void 0!==i)return i.exports;var o=r[e]={exports:{}};return t[e].call(o.exports,o,o.exports,n),o.exports}return n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n("./src/index.ts")})();var bc=mc.exports=gc(Y.default);const vc=K.default.div`
    border: ${Gs["width-010"]} ${Gs.solid} ${Ks.border};
    border-radius: ${Qs.sm};
    margin-bottom: ${Zs["spacing-32"]};
`,yc=K.default(Di.div)`
    overflow: hidden;
`,xc=K.default.div`
    height: max-content;
`,wc=K.default.div`
    border-top: ${Gs["width-010"]} ${Gs.solid} ${Ks.border};
`,$c=K.default.div`
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
`,Cc=K.default.div`
    ${qs["heading-sm-semibold"]}
    color: ${Ks.text};
    word-wrap: break-word;
    overflow-wrap: anywhere;
    display: flex;
    align-items: center;
    margin-right: ${Zs["spacing-16"]};
`,Sc=K.default.div`
    display: flex;
`,jc=K.default.span`
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
`,kc=K.default(s.ExclamationCircleFillIcon)`
    height: ${qs.Spec["heading-size-sm"]};
    width: ${qs.Spec["heading-size-sm"]};
`,Dc=K.default.div`
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
`,Tc=K.default.button`
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
`,Ec=K.default.div`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: ${Xs["duration-250"]} ${Xs["ease-default"]};
`,Oc=K.default(f.ChevronDownIcon)`
    color: ${Ks.icon};
    height: ${qs.Spec["heading-size-sm"]};
    width: ${qs.Spec["heading-size-sm"]};
`;var Fc={exports:{}};Fc.exports=function(){var e=1e3,t=6e4,r=36e5,n="millisecond",i="second",o="minute",a="hour",s="day",l="week",c="month",d="quarter",u="year",f="date",h="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}},b=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},v={s:b,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),i=r%60;return(t<=0?"+":"-")+b(n,2,"0")+":"+b(i,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),i=t.clone().add(n,c),o=r-i<0,a=t.clone().add(n+(o?-1:1),c);return+(-(n+(r-i)/(o?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:u,w:l,d:s,D:f,h:a,m:o,s:i,ms:n,Q:d}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},y="en",x={};x[y]=m;var w="$isDayjsObject",$=function(e){return e instanceof k||!(!e||!e[w])},C=function e(t,r,n){var i;if(!t)return y;if("string"==typeof t){var o=t.toLowerCase();x[o]&&(i=o),r&&(x[o]=r,i=o);var a=t.split("-");if(!i&&a.length>1)return e(a[0])}else{var s=t.name;x[s]=t,i=s}return!n&&i&&(y=i),i||!n&&y},S=function(e,t){if($(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new k(r)},j=v;j.l=C,j.i=$,j.w=function(e,t){return S(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var k=function(){function m(e){this.$L=C(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var b=m.prototype;return b.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(j.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(p);if(n){var i=n[2]-1||0,o=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,o)}}return new Date(t)}(e),this.init()},b.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},b.$utils=function(){return j},b.isValid=function(){return!(this.$d.toString()===h)},b.isSame=function(e,t){var r=S(e);return this.startOf(t)<=r&&r<=this.endOf(t)},b.isAfter=function(e,t){return S(e)<this.startOf(t)},b.isBefore=function(e,t){return this.endOf(t)<S(e)},b.$g=function(e,t,r){return j.u(e)?this[t]:this.set(r,e)},b.unix=function(){return Math.floor(this.valueOf()/1e3)},b.valueOf=function(){return this.$d.getTime()},b.startOf=function(e,t){var r=this,n=!!j.u(t)||t,d=j.p(e),h=function(e,t){var i=j.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?i:i.endOf(s)},p=function(e,t){return j.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},g=this.$W,m=this.$M,b=this.$D,v="set"+(this.$u?"UTC":"");switch(d){case u:return n?h(1,0):h(31,11);case c:return n?h(1,m):h(0,m+1);case l:var y=this.$locale().weekStart||0,x=(g<y?g+7:g)-y;return h(n?b-x:b+(6-x),m);case s:case f:return p(v+"Hours",0);case a:return p(v+"Minutes",1);case o:return p(v+"Seconds",2);case i:return p(v+"Milliseconds",3);default:return this.clone()}},b.endOf=function(e){return this.startOf(e,!1)},b.$set=function(e,t){var r,l=j.p(e),d="set"+(this.$u?"UTC":""),h=(r={},r[s]=d+"Date",r[f]=d+"Date",r[c]=d+"Month",r[u]=d+"FullYear",r[a]=d+"Hours",r[o]=d+"Minutes",r[i]=d+"Seconds",r[n]=d+"Milliseconds",r)[l],p=l===s?this.$D+(t-this.$W):t;if(l===c||l===u){var g=this.clone().set(f,1);g.$d[h](p),g.init(),this.$d=g.set(f,Math.min(this.$D,g.daysInMonth())).$d}else h&&this.$d[h](p);return this.init(),this},b.set=function(e,t){return this.clone().$set(e,t)},b.get=function(e){return this[j.p(e)]()},b.add=function(n,d){var f,h=this;n=Number(n);var p=j.p(d),g=function(e){var t=S(h);return j.w(t.date(t.date()+Math.round(e*n)),h)};if(p===c)return this.set(c,this.$M+n);if(p===u)return this.set(u,this.$y+n);if(p===s)return g(1);if(p===l)return g(7);var m=(f={},f[o]=t,f[a]=r,f[i]=e,f)[p]||1,b=this.$d.getTime()+n*m;return j.w(b,this)},b.subtract=function(e,t){return this.add(-1*e,t)},b.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||h;var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=j.z(this),o=this.$H,a=this.$m,s=this.$M,l=r.weekdays,c=r.months,d=r.meridiem,u=function(e,r,i,o){return e&&(e[r]||e(t,n))||i[r].slice(0,o)},f=function(e){return j.s(o%12||12,e,"0")},p=d||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(g,(function(e,n){return n||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return j.s(t.$y,4,"0");case"M":return s+1;case"MM":return j.s(s+1,2,"0");case"MMM":return u(r.monthsShort,s,c,3);case"MMMM":return u(c,s);case"D":return t.$D;case"DD":return j.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return u(r.weekdaysMin,t.$W,l,2);case"ddd":return u(r.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(o);case"HH":return j.s(o,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return p(o,a,!0);case"A":return p(o,a,!1);case"m":return String(a);case"mm":return j.s(a,2,"0");case"s":return String(t.$s);case"ss":return j.s(t.$s,2,"0");case"SSS":return j.s(t.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},b.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},b.diff=function(n,f,h){var p,g=this,m=j.p(f),b=S(n),v=(b.utcOffset()-this.utcOffset())*t,y=this-b,x=function(){return j.m(g,b)};switch(m){case u:p=x()/12;break;case c:p=x();break;case d:p=x()/3;break;case l:p=(y-v)/6048e5;break;case s:p=(y-v)/864e5;break;case a:p=y/r;break;case o:p=y/t;break;case i:p=y/e;break;default:p=y}return h?p:j.a(p)},b.daysInMonth=function(){return this.endOf(c).$D},b.$locale=function(){return x[this.$L]},b.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=C(e,t,!0);return n&&(r.$L=n),r},b.clone=function(){return j.w(this.$d,this)},b.toDate=function(){return new Date(this.valueOf())},b.toJSON=function(){return this.isValid()?this.toISOString():null},b.toISOString=function(){return this.$d.toISOString()},b.toString=function(){return this.$d.toUTCString()},m}(),D=k.prototype;return S.prototype=D,[["$ms",n],["$s",i],["$m",o],["$H",a],["$W",s],["$M",c],["$y",u],["$D",f]].forEach((function(e){D[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),S.extend=function(e,t){return e.$i||(e(t,k,S),e.$i=!0),S},S.locale=C,S.isDayjs=$,S.unix=function(e){return S(1e3*e)},S.en=x[y],S.Ls=x,S.p={},S}();var Ic=Ei(Fc.exports),_c={exports:{}};_c.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d\d/,n=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),r=60*t[1]+(+t[2]||0);return 0===r?0:"+"===t[0]?-r:r}(e)}],c=function(e){var t=o[e];return t&&(t.indexOf?t:t.s.concat(t.f))},d=function(e,t){var r,n=o.meridiem;if(n){for(var i=1;i<=24;i+=1)if(e.indexOf(n(i,0,t))>-1){r=i>12;break}}else r=e===(t?"pm":"PM");return r},u={A:[i,function(e){this.afternoon=d(e,!1)}],a:[i,function(e){this.afternoon=d(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[r,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[n,s("seconds")],ss:[n,s("seconds")],m:[n,s("minutes")],mm:[n,s("minutes")],H:[n,s("hours")],h:[n,s("hours")],HH:[n,s("hours")],hh:[n,s("hours")],D:[n,s("day")],DD:[r,s("day")],Do:[i,function(e){var t=o.ordinal,r=e.match(/\d+/);if(this.day=r[0],t)for(var n=1;n<=31;n+=1)t(n).replace(/\[|\]/g,"")===e&&(this.day=n)}],M:[n,s("month")],MM:[r,s("month")],MMM:[i,function(e){var t=c("months"),r=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],MMMM:[i,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[r,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function f(r){var n,i;n=r,i=o&&o.formats;for(var a=(r=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,r,n){var o=n&&n.toUpperCase();return r||i[n]||e[n]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,r){return t||r.slice(1)}))}))).match(t),s=a.length,l=0;l<s;l+=1){var c=a[l],d=u[c],f=d&&d[0],h=d&&d[1];a[l]=h?{regex:f,parser:h}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},r=0,n=0;r<s;r+=1){var i=a[r];if("string"==typeof i)n+=i.length;else{var o=i.regex,l=i.parser,c=e.slice(n),d=o.exec(c)[0];l.call(t,d),e=e.replace(d,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var r=e.hours;t?r<12&&(e.hours+=12):12===r&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,r){r.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var n=t.prototype,i=n.parse;n.parse=function(e){var t=e.date,n=e.utc,a=e.args;this.$u=n;var s=a[1];if("string"==typeof s){var l=!0===a[2],c=!0===a[3],d=l||c,u=a[2];c&&(u=a[2]),o=this.$locale(),!l&&u&&(o=r.Ls[u]),this.$d=function(e,t,r){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var n=f(t)(e),i=n.year,o=n.month,a=n.day,s=n.hours,l=n.minutes,c=n.seconds,d=n.milliseconds,u=n.zone,h=new Date,p=a||(i||o?1:h.getDate()),g=i||h.getFullYear(),m=0;i&&!o||(m=o>0?o-1:h.getMonth());var b=s||0,v=l||0,y=c||0,x=d||0;return u?new Date(Date.UTC(g,m,p,b,v,y,x+60*u.offset*1e3)):r?new Date(Date.UTC(g,m,p,b,v,y,x)):new Date(g,m,p,b,v,y,x)}catch(e){return new Date("")}}(t,s,n),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),d&&t!=this.format(s)&&(this.$d=new Date("")),o={}}else if(s instanceof Array)for(var h=s.length,p=1;p<=h;p+=1){a[1]=s[p-1];var g=r.apply(this,a);if(g.isValid()){this.$d=g.$d,this.$L=g.$L,this.init();break}p===h&&(this.$d=new Date(""))}else i.call(this,e)}}}();var Mc=Ei(_c.exports),Ac={exports:{}};Ac.exports=function(e,t,r){t.prototype.isBetween=function(e,t,n,i){var o=r(e),a=r(t),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(o,n):!this.isBefore(o,n))&&(l?this.isBefore(a,n):!this.isAfter(a,n))||(s?this.isBefore(o,n):!this.isAfter(o,n))&&(l?this.isAfter(a,n):!this.isBefore(a,n))}};var Bc=Ei(Ac.exports),Rc={exports:{}};Rc.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var zc=Ei(Rc.exports),Pc={exports:{}};Pc.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var Lc,Nc,Hc=Ei(Pc.exports),Wc={exports:{}};Wc.exports=(Lc={year:0,month:1,day:2,hour:3,minute:4,second:5},Nc={},function(e,t,r){var n,i=function(e,t,r){void 0===r&&(r={});var n=new Date(e),i=function(e,t){void 0===t&&(t={});var r=t.timeZoneName||"short",n=e+"|"+r,i=Nc[n];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:r}),Nc[n]=i),i}(t,r);return i.formatToParts(n)},o=function(e,t){for(var n=i(e,t),o=[],a=0;a<n.length;a+=1){var s=n[a],l=s.type,c=s.value,d=Lc[l];d>=0&&(o[d]=parseInt(c,10))}var u=o[3],f=24===u?0:u,h=o[0]+"-"+o[1]+"-"+o[2]+" "+f+":"+o[4]+":"+o[5]+":000",p=+e;return(r.utc(h).valueOf()-(p-=p%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=n);var i=this.utcOffset(),o=this.toDate(),a=o.toLocaleString("en-US",{timeZone:e}),s=Math.round((o-new Date(a))/1e3/60),l=r(a,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-s,!0);if(t){var c=l.utcOffset();l=l.add(i-c,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var t=this.$x.$timezone||r.tz.guess(),n=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var s=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var n=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,e,t).tz(this.$x.$timezone,!0)},r.tz=function(e,t,i){var a=i&&t,s=i||t||n,l=o(+r(),s);if("string"!=typeof e)return r(e).tz(s);var c=function(e,t,r){var n=e-60*t*1e3,i=o(n,r);if(t===i)return[n,t];var a=o(n-=60*(i-t)*1e3,r);return i===a?[n,i]:[e-60*Math.min(i,a)*1e3,Math.max(i,a)]}(r.utc(e,a).valueOf(),l,s),d=c[0],u=c[1],f=r(d).utcOffset(u);return f.$x.$timezone=s,f},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function(e){n=e}});var Vc,Yc=Ei(Wc.exports);Ic.extend(Bc),Ic.extend(Hc),Ic.extend(zc),Ic.extend(Mc),Ic.extend(Yc),function(e){e.generateDays=e=>{const t=e.startOf("month"),r=Ic(t).startOf("week");return Uc(r).map((e=>Kc(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return Kc(t)},e.generateMonths=e=>{const t=[];for(let r=0;r<12;r++){const n=e.month(r);t.push(Ic(n))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),r=10*Math.floor(t/10),n=e.year(r),i=[n.subtract(1,"year"),n];for(let e=1;e<11;e++)i.push(n.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+Ic(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=Ic(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,r,n="day")=>!t&&!r||(t&&r?e.isBetween(t,r,n,"[]"):t?e.isSameOrAfter(t,n):e.isSameOrBefore(r,n)),e.isPreviousMonthWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"month"),r,void 0,"month"),e.isPreviousYearWithinRange=(t,r)=>e.isWithinRange(t.subtract(1,"year"),r,void 0,"year"),e.isPreviousDecadeWithinRange=(t,r)=>{const{beginDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).subtract(1,"year"),r,void 0,"year")},e.isNextMonthWithinRange=(t,r)=>e.isWithinRange(t.add(1,"month"),void 0,r,"month"),e.isNextYearWithinRange=(t,r)=>e.isWithinRange(t.add(1,"year"),void 0,r,"year"),e.isNextDecadeWithinRange=(t,r)=>{const{endDecade:n}=e.getStartEndDecade(t);return e.isWithinRange(t.year(n).add(1,"year"),void 0,r,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,r,n,i)=>{const o=e.isWithinRange(t,n?Ic(n):void 0,i?Ic(i):void 0),a=r&&r.includes(t.format("YYYY-MM-DD"));return!o||!!a}}(Vc||(Vc={}));const Uc=e=>{const t=[e];for(let r=1;r<6;r++){const n=e.add(r,"week");t.push(n)}return t},Kc=e=>{const t=[];for(let r=0;r<7;r++){const n=e.add(r,"day");t.push(n)}return t},qc=[1,3,5,7,8,10,12],Xc=[4,6,9,11];var Gc,Zc,Qc,Jc;!function(e){e.clampDay=(t,r,n)=>{const i=parseInt(t),o=parseInt(r),a=parseInt(n);return 0==i?"1":qc.includes(o)?Math.min(i,31).toString():Xc.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,r="HH:mm")=>{const n=Ic(e,r);return Ic(t,r).diff(n,"minute")},e.toDayjs=e=>e?Ic(e):Ic(),e.addMinutesToTime=(e,t,r="HH:mm")=>Ic(e,r).add(t,"minutes").format(r),e.isSame=(e,t,r="day")=>Ic(e).isSame(Ic(t),r)}(Gc||(Gc={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:r,minDate:n,maxDate:i}=t;return!!(e&&r&&r.length&&r.includes(e))||(!(!n||!Ic(e).isBefore(n,"day"))||!(!i||!Ic(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(Ic(e).isValid())return e}return""}}(Zc||(Zc={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(Qc||(Qc={})),function(e){e.transformWithSpaces=(e,t)=>{const r="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(r,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const r=Math.floor(t/9);return e.length>=2*r||1===e.split(" ").length&&e.length>r},e.truncateOneLine=(e,t,r,n,i=8)=>{let o=0;t>r&&(o=Math.floor((t-r)/i));const a=n+o;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,r,n=1.2)=>{const i=Math.floor(2*t/(.6*r))*(2/n);if(e.length<=i)return e;const o=Math.floor(.6*i),a=Math.floor(.2*i);return`${e.substring(0,o)}...${e.substring(e.length-a)}`},e.getTextWidth=(t,r)=>{if("undefined"==typeof document)return 0;const n=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");n.font=r;return n.measureText(t).width},e.maskValue=(e,r)=>{if(!e)return e;const{maskRange:n,unmaskRange:i,maskChar:o="•",maskRegex:a,maskTransformer:s}=r;if(s)return s(e);if(a)return e.replace(a,o);if(n){const{startIndex:r,endIndex:i}=t(n[0],n[1]);return e.substring(0,r)+o.repeat(e.substring(r,i+1).length)+e.substring(i+1)}if(i){const{startIndex:r,endIndex:n}=t(i[0],i[1]);return o.repeat(e.substring(0,r).length)+e.substring(r,n+1)+o.repeat(e.substring(n+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(Jc||(Jc={}));function ed(e){const r=t.useRef(null);return t.useLayoutEffect((()=>{r.current=e}),[e]),t.useCallback(((...e)=>{var t;return null===(t=r.current)||void 0===t?void 0:t.call(r,...e)}),[])}const td=(e,r,n="window",i)=>{const o=t.useRef();t.useEffect((()=>{o.current=r}),[r]),t.useEffect((()=>{let t;switch(n){case"window":t=window;break;case"document":t=document;break;default:t=n}if(!t||!t.addEventListener)return;const r=e=>{var t;return null===(t=o.current)||void 0===t?void 0:t.call(o,e)};return t.addEventListener(e,r,i),()=>{null==t||t.removeEventListener(e,r,i)}}),[e,n])},rd="undefined"!=typeof window?t.useLayoutEffect:t.useEffect,nd=()=>{const[e,r]=t.useState(!1);return t.useEffect((()=>{r(!0)}),[]),e};function id({ref:e,formatter:t}){return()=>{var r;const n=e.current;if(!n)return;const i=n.value,o=t(i),a=null!==(r=n.selectionEnd)&&void 0!==r?r:0,s=i.substring(0,a),l=t(s),c=s.length-l.length,d=Math.max(0,a-c);return{nextValue:o,updateCaretPosition:()=>{n.value=o,n.setSelectionRange(d,d)}}}}const od=e=>{const r=(e=>{const r=t.useRef(e),n=t.useRef();return t.useEffect((()=>{n.current=r.current,r.current=e}),[e]),n.current})(e);return r!==e},ad=e=>{const[r,n]=t.useState(e),i=t.useRef(e);return[r,t.useCallback((e=>{i.current=e,n(e)}),[]),i]},sd=K.default.div`
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
`,ld=K.default.ul`
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
`,cd=K.default.div`
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
`,dd=K.default.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    line-height: inherit;
    font-size: inherit;
    ${e=>e.$styleProps||""};
`,ud=K.default(h.ChevronRightIcon)`
    margin: ${Zs["spacing-8"]};
    height: 1em;
    width: 1em;
    color: ${Ks["icon-subtle"]};
`,fd=K.default(exports.Typography.BodyMD)`
    margin: ${Zs["spacing-8"]} !important;
`,hd=K.default(exports.Typography.LinkMD)`
    margin: ${Zs["spacing-8"]} !important;
`,pd=K.default(Rl)`
    flex-direction: ${e=>"right"===e.$buttonIconPosition?"row-reverse":"row"};
    gap: 0.5rem;

    svg {
        flex-shrink: 0;
        height: 1em;
        width: 1em;
    }
`,gd=(t,r)=>{const{children:n,disabled:i=!1,styleType:o="default",danger:a=!1,icon:s,iconPosition:l="left",loading:c=!1}=t,d=X(t,["children","disabled","styleType","danger","icon","iconPosition","loading"]),u={$buttonIconPosition:l,$buttonStyle:i?"disabled":o,$buttonSizeStyle:"default",$buttonIsDanger:a};return e.jsxs(pd,Object.assign({ref:r,"data-testid":d["data-testid"]||"button-with-icon",disabled:i},u,d,{children:[c?e.jsx(jl,{}):s,e.jsx("span",{children:n})]}))};gd.displayName="ButtonWithIcon.Default";const md=(t,r)=>{const{children:n,disabled:i=!1,styleType:o="default",danger:a=!1,icon:s,iconPosition:l="left",loading:c=!1}=t,d=X(t,["children","disabled","styleType","danger","icon","iconPosition","loading"]),u={$buttonIconPosition:l,$buttonStyle:i?"disabled":o,$buttonSizeStyle:"small",$buttonIsDanger:a};return e.jsxs(pd,Object.assign({ref:r,"data-testid":d["data-testid"]||"button-with-icon",disabled:i},u,d,{children:[c?e.jsx(jl,{}):s,e.jsx("span",{children:n})]}))};md.displayName="ButtonWithIcon.Small";const bd={Default:Y.default.forwardRef(gd),Small:Y.default.forwardRef(md)},vd=K.default.div`
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
`,yd=i.css`
    color: ${Ks.icon};
    height: 1rem;
    width: 1rem;
`,xd=K.default(p.ChevronLeftIcon)`
    ${yd}
`,wd=K.default(h.ChevronRightIcon)`
    ${yd}
`,$d=K.default(f.ChevronDownIcon)`
    ${yd}
    transition: transform 250ms ease-in-out;
    margin-left: 0.5rem;
`,Cd=K.default.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

    padding-top: var(--vertical-inset);
    padding-bottom: var(--vertical-inset);
`,Sd=K.default.div`
    display: flex;
    flex: 1;
    position: relative;
`,jd=K.default.div`
    isolation: isolate;
    width: 100%;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,kd=K.default.div`
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
`,Dd=K.default.div`
    display: flex;
    justify-content: space-between;

    padding-left: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-right: var(--header-horizontal-inset, var(--horizontal-inset));
    padding-bottom: var(--header-bottom-spacing);
`,Td=K.default.div`
    display: flex;
`,Ed=K.default.button`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;

    ${e=>!1===e.$visible?i.css`
                display: none;
            `:e.$expanded?i.css`
                ${$d} {
                    transform: rotate(180deg);
                }
            `:void 0};
`,Od=K.default.span`
    ${qs["body-md-regular"]}
    color: ${Ks.text};
`,Fd=K.default.div`
    display: flex;
`,Id=K.default(nl)`
    margin: auto 0;
    padding: 0.75rem;

    :disabled {
        cursor: not-allowed;
    }
`,_d=K.default.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;

    padding-left: var(--horizontal-inset);
    padding-right: var(--horizontal-inset);
`,Md=K.default(Hl.Small)`
    flex: 1;
`,Ad=K.default.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 2.5rem);
    align-content: center;
    justify-content: center;

    gap: 0.5rem 0;
`,Bd=K.default.div`
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
`,Rd=({calendarDate:r,currentFocus:n,selectedStartDate:i,selectedEndDate:o,viewCalendarDate:a,isNewSelection:s,minDate:l,maxDate:c,allowDisabledSelection:d,onMonthSelect:u})=>{const f=t.useMemo((()=>Vc.generateMonths(Ic(r))),[r]),h=e=>{const t="start"===n&&o&&e.isAfter(o,"month")&&s,r="end"===n&&i&&e.isBefore(i,"month")&&s;return!(!t&&!r)},p=e=>{const t=e.format("MMMM"),r=(n=e,!Vc.isWithinRange(n,l?Ic(l):void 0,c?Ic(c):void 0,"month"));var n;const i=a.isSame(e,"month")?"selected-month":Ic().isSame(e,"month")?"current-month":"default";return{disabledDisplay:r||h(e),interactive:!r||d,month:t,variant:i}};return f.length?e.jsx(Ad,{children:f.map((t=>{const{disabledDisplay:r,interactive:n,variant:i,month:o}=p(t);return e.jsx(Bd,{$variant:i,$disabledDisplay:r,$interactive:n,onClick:()=>((e,t)=>{t||u(e)})(t,!n),children:o},o)}))}):null},zd=K.default.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-content: center;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
`,Pd=K.default.div`
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
`,Ld=({calendarDate:r,currentFocus:n,selectedStartDate:i,selectedEndDate:o,viewCalendarDate:a,isNewSelection:s,minDate:l,maxDate:c,allowDisabledSelection:d,onYearSelect:u})=>{const f=t.useMemo((()=>Vc.generateDecadeOfYears(Ic(r))),[r]),h=e=>{const t="start"===n&&o&&e.isAfter(o,"year")&&s,r="end"===n&&i&&e.isBefore(i,"year")&&s;return!(!t&&!r)},p=e=>{const t=[0,11].includes(f.indexOf(e)),r=e.year(),n=(i=e,!Vc.isWithinRange(i,l?Ic(l):void 0,c?Ic(c):void 0,"year"));var i;const o=t?"other-decade":a.isSame(e,"year")?"selected-year":Ic().isSame(e,"year")?"current-year":"default";return{disabledDisplay:n||h(e),interactive:!n||d,year:r,variant:o}};return f.length?e.jsx(zd,{children:f.map((t=>{const{disabledDisplay:r,interactive:n,variant:i,year:o}=p(t);return e.jsx(Pd,{$variant:i,$disabledDisplay:r,$interactive:!!n,onClick:()=>((e,t)=>{t||u(e)})(t,!n),children:o},o)}))}):null},Nd=Y.default.forwardRef(((r,n)=>{var{children:i,initialCalendarDate:o,minDate:a,maxDate:s,currentFocus:l,selectedStartDate:c,selectedEndDate:d,selectWithinRange:u,dynamicHeight:f=!1,allowDisabledSelection:h,onCalendarDateChange:p,withButton:g,doneButtonDisabled:m,onDismiss:b,showNavigationHeader:v=!0,getLeftArrowDate:y,getRightArrowDate:x,isLeftArrowDisabled:w,isRightArrowDisabled:$,getMonthHeaderLabel:C,getYearHeaderLabel:S}=r,j=X(r,["children","initialCalendarDate","minDate","maxDate","currentFocus","selectedStartDate","selectedEndDate","selectWithinRange","dynamicHeight","allowDisabledSelection","onCalendarDateChange","withButton","doneButtonDisabled","onDismiss","showNavigationHeader","getLeftArrowDate","getRightArrowDate","isLeftArrowDisabled","isRightArrowDisabled","getMonthHeaderLabel","getYearHeaderLabel"]);const[k,D]=t.useState(Gc.toDayjs(o)),[T,E]=t.useState(Gc.toDayjs(o)),[O,F]=t.useState("default"),I=t.useRef(null),_=t.useRef(null),M=t.useRef(null);t.useImperativeHandle(n,(()=>({defaultView(){F("default")},resetView(){const e=Gc.toDayjs(o);D(e),E(e),F("default")},setCalendarDate(e){const t=Gc.toDayjs(e);D(t),E(t)}}))),t.useEffect((()=>{const e=Gc.toDayjs(o);D(e),E(e)}),[o]),t.useEffect((()=>{N(T)}),[T]);const A=()=>{var e;"month-options"!==O?(F("month-options"),null===(e=M.current)||void 0===e||e.focus()):(F("default"),D(T))},B=()=>{"default"!==O?(F("default"),D(T)):F("year-options")},R=()=>{var e;null===(e=M.current)||void 0===e||e.focus();const t=y?y(k):k.subtract(1,"month");switch(O){case"default":E(t),D(t);break;case"month-options":D((e=>e.subtract(1,"year")));break;case"year-options":D((e=>e.subtract(10,"year")))}},z=()=>{var e;null===(e=M.current)||void 0===e||e.focus();const t=x?x(k):k.add(1,"month");switch(O){case"default":E(t),D(t);break;case"month-options":D((e=>e.add(1,"year")));break;case"year-options":D((e=>e.add(10,"year")))}},P=e=>{D(e),E(e),g||F("default")},L=()=>{const e=Gc.toDayjs(o);D(e),E(e),"default"===O?H("reset"):F("default")},N=e=>{p&&p(e)},H=e=>{b&&b(e)},W=()=>{if(!a||h)return!1;const e=Ic(a);return"month-options"===O?!Vc.isPreviousYearWithinRange(k,e):"year-options"===O?!Vc.isPreviousDecadeWithinRange(k,e):w?w(k):!Vc.isPreviousMonthWithinRange(k,e)},V=()=>{if(!s||h)return!1;const e=Ic(s);return"month-options"===O?!Vc.isNextYearWithinRange(k,e):"year-options"===O?!Vc.isNextDecadeWithinRange(k,e):$?$(k):!Vc.isNextMonthWithinRange(k,e)},Y=()=>{if("year-options"===O){const{beginDecade:e,endDecade:t}=Vc.getStartEndDecade(k);return`${e} to ${t}`}return S?S(k):k.format("YYYY")},U=()=>{const t=C?C(k):k.format("MMM");return e.jsxs(e.Fragment,{children:[e.jsxs(Ed,{type:"button",tabIndex:-1,$expanded:"month-options"===O,$visible:"default"===O,id:"month-dropdown",onClick:A,children:[e.jsx(Od,{children:t}),e.jsx($d,{})]}),e.jsxs(Ed,{type:"button",tabIndex:-1,$expanded:"default"!==O,id:"year-dropdown",onClick:B,children:[e.jsx(Od,{children:Y()}),e.jsx($d,{})]})]})},K=()=>{switch(O){case"month-options":return e.jsx(Rd,{calendarDate:k,currentFocus:l,minDate:a,maxDate:s,selectedStartDate:c,selectedEndDate:d,viewCalendarDate:T,isNewSelection:!!u,onMonthSelect:P,allowDisabledSelection:h});case"year-options":return e.jsx(Ld,{calendarDate:k,currentFocus:l,minDate:a,maxDate:s,selectedStartDate:c,selectedEndDate:d,viewCalendarDate:T,isNewSelection:!!u,onYearSelect:P,allowDisabledSelection:h});default:return null}};return e.jsxs(Cd,Object.assign({ref:M,"data-id":"calendar-container","data-testid":"calendar-container"},j,{children:[v&&e.jsxs(Dd,{"data-id":"calendar-header","data-testid":"calendar-header",children:[e.jsx(Td,{children:U()}),e.jsxs(Fd,{children:[e.jsx(Id,{"aria-label":"Previous month","data-testid":"left-arrow-btn",disabled:W(),focusHighlight:!1,tabIndex:-1,onClick:R,children:e.jsx(xd,{})}),e.jsx(Id,{"aria-label":"Next month","data-testid":"right-arrow-btn",disabled:V(),focusHighlight:!1,tabIndex:-1,onClick:z,children:e.jsx(wd,{})})]})]}),e.jsx(Sd,{children:(()=>{const t="function"==typeof i?i({calendarDate:T,currentView:O}):i;return f?e.jsxs(e.Fragment,{children:["default"===O&&t,K()]}):e.jsxs(e.Fragment,{children:[e.jsx(jd,{children:t}),e.jsx(kd,{$visible:"default"!==O,children:K()})]})})()}),(()=>{if(!g)return;const t=!!("default"===O)&&m;return e.jsxs(_d,{children:[e.jsx(Md,{ref:_,"data-testid":"cancel-button",styleType:"light",type:"button",onClick:L,children:"Cancel"}),e.jsx(Md,{"data-testid":"done-button",ref:I,type:"button",onClick:()=>{t||(D(T),"default"===O?H("confirmed"):F("default"))},disabled:t,children:"Done"})]})})()]}))})),Hd=K.default.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 0.25rem;
`,Wd=K.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    pointer-events: none;
    user-select: none;

    ${qs["body-sm-semibold"]};
    color: ${Ks.text};
`,Vd=K.default.div`
    grid-column: 1 / -1;
    display: flex;
`,Yd=e=>{let t=Ks.bg,r="transparent";switch(e.$type){case"hover-subtle":t=Ks["bg-hover"],r=Ks["bg-hover"];break;case"hover":t=Ks["bg-hover-strong"],r=Ks["bg-hover-strong"];break;case"hover-outline":t=Ks["bg-hover-subtle"],r=Ks["border-hover"];break;case"selected-outline":t=Ks["bg-selected"],r=Ks["border-selected"];break;case"selected-outline-subtle":t=Ks["bg-selected"],r=Ks["border-selected-subtle"];break;case"selected-hover":t=Ks["bg-selected-hover"];break;case"selected-hover-outline":t=Ks["bg-selected-hover"],r=Ks["border-selected-hover"]}return{color:t,borderColor:r}},Ud=K.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 2.5rem;
`,Kd=K.default.div`
    position: absolute;
    height: 2.5rem;
    width: 50%;
    transition: ${Xs["duration-150"]} ${Xs["ease-default"]};
    border: ${Gs["width-010"]} ${Gs.solid} transparent;
    border-left: none;
    border-right: none;

    ${e=>{if(!e.$type)return;const{color:t,borderColor:r}=Yd(e);return i.css`
            background-color: ${t};
            background-clip: border-box;
            border-top-color: ${r};
            border-bottom-color: ${r};
        `}}
`,qd=K.default(Kd)`
    left: 0;
`,Xd=K.default(Kd)`
    right: 0;
`,Gd=K.default.div`
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

    ${e=>{if(e.$type){const{color:t,borderColor:r}=Yd(e);return i.css`
                background-color: ${t};
                background-clip: content-box;
                border-color: ${r};
            `}}}
`,Zd=K.default(Gd)`
    right: calc(50% - 1.25rem);
    clip-path: inset(-3px 1.25rem -3px -3px);
`,Qd=K.default(Gd)`
    left: calc(50% - 1.25rem);
    clip-path: inset(-3px -3px -3px 1.25rem);
`,Jd=K.default.div`
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
`,eu=K.default.div`
    position: absolute;
    width: 4px;
    height: 4px;
    background-color: currentColor;
    border-radius: 50%;
    bottom: 4px;
`,tu=({bgLeft:t,bgRight:r,circleLeft:n,circleRight:i,labelType:o,disabled:a,interactive:s,currentDateIndicator:l,date:c,onSelect:d,onHover:u,onHoverEnd:f})=>{const h=Ic().isSame(c,"day");return e.jsxs(Ud,{children:[e.jsx(qd,{$type:t}),e.jsx(Zd,{$type:n}),e.jsx(Xd,{$type:r}),e.jsx(Qd,{$type:i}),e.jsxs(Jd,{$type:o,$disabled:a,$interactive:s,onClick:()=>{d(c)},onMouseEnter:()=>{u(c)},onMouseLeave:()=>{f&&f(c)},children:[c.date(),l&&h&&e.jsx(eu,{$disabled:a})]})]})},ru=({date:t,calendarDate:r,startDate:n,endDate:i,currentFocus:o,hoverDate:a,minDate:s,maxDate:l,disabledDates:c,allowDisabledSelection:d,isNewSelection:u,showActiveMonthDaysOnly:f,onSelect:h,onHover:p})=>{const g=Vc.isDisabledDay(t,c,s,l),m=!g||d,b=()=>{const e=Ic(a),t=e.isBefore(i,"day"),r=e.isAfter(n,"day");let s,l,c,d;return"start"===o&&i&&t&&(n&&r?(c=a,d=i):(s=a,l=n||i)),"end"===o&&n&&r&&(i&&t?(c=n,d=a):(s=i||n,l=a)),{hoverStart:s,hoverEnd:l,overlapStart:c,overlapEnd:d}},v={date:t,calendarDate:r,disabled:g,interactive:m,currentDateIndicator:!0,onSelect:()=>{h(t,!m)},onHover:()=>{p(t.format("YYYY-MM-DD"),!m)}};return e.jsx(tu,Object.assign({},v,(()=>{const e={};if(r.month()!==t.month())e.labelType=f?"hidden":"unavailable";else if(Ic().isSame(t,"day")&&!g)e.labelType="current";else if(u){const r="end"===o&&n&&t.isBefore(n),a="start"===o&&i&&t.isAfter(i);(r||a)&&(e.labelType="unavailable")}return e})(),(()=>{const e={},o=t.isSame(n,"day"),a=t.isSame(i,"day");return f&&r.month()!==t.month()?(e.labelType="hidden",e):((n&&o||i&&a)&&(e.labelType="selected",e.circleLeft="selected-outline",e.circleRight="selected-outline"),n&&i&&t.isBetween(n,i,"day","[]")&&(e.labelType="selected",o||(e.bgLeft="selected-outline-subtle"),a||(e.bgRight="selected-outline-subtle")),e)})(),(()=>{if(!a)return{};const e={},r=t.isSame(a,"day"),{hoverStart:o,hoverEnd:s,overlapStart:l,overlapEnd:c}=b();if(r){const r=t.isSame(n,"day"),o=t.isSame(i,"day");r||o?(e.labelType="selected-hover",e.circleLeft="selected-hover-outline",e.circleRight="selected-hover-outline"):(e.labelType="hover",e.circleLeft="hover",e.circleRight="hover")}if(o&&s){if(t.isBetween(o,s,"day","[]")){const r=t.isSame(o,"day"),n=t.isSame(s,"day");r||(e.labelType="hover",e.bgLeft="hover-outline"),n||(e.labelType="hover",e.bgRight="hover-outline")}return e}return l&&c?(t.isBetween(l,c,"day","[]")&&r&&(e.labelType="selected-hover",e.circleLeft="selected-hover",e.circleRight="selected-hover"),e):e})()))};Ic.extend(Bc);const nu=({calendarDate:r,currentFocus:n,disabledDates:i,selectedStartDate:o,selectedEndDate:a,onSelect:s,onHover:l,isNewSelection:c,minDate:d,maxDate:u,allowDisabledSelection:f,showActiveMonthDaysOnly:h})=>{const p=t.useMemo((()=>Vc.generateDays(r)),[r]),[g,m]=t.useState(""),b=(e,t)=>{t&&!f||s(e)},v=(e,t)=>{t&&!f||(m(e),l(e))},y=()=>{m(""),l("")};return e.jsxs(Hd,{"data-testid":"calendar-content",children:[p[0].map(((t,r)=>e.jsx(Wd,{children:Ic(t).format("ddd")},`week-day-${r}`))),p.map(((t,s)=>e.jsx(Vd,{onMouseLeave:y,children:t.map(((t,s)=>e.jsx(ru,{date:t,calendarDate:r,startDate:o,endDate:a,hoverDate:g,currentFocus:n,minDate:d,maxDate:u,disabledDates:i,allowDisabledSelection:f,isNewSelection:c,showActiveMonthDaysOnly:h,onSelect:b,onHover:v},`day-${s}`)))},s)))]})},iu=({date:t,calendarDate:r,selectedDate:n,hoverDate:i,minDate:o,maxDate:a,disabledDates:s,allowDisabledSelection:l,numberOfDays:c=1,onSelect:d,onHover:u})=>{const f=Vc.isDisabledDay(t,s,o,a),h=!f||l,{start:p,end:g}=n?Vc.getFixedRangeStartEnd(Gc.toDayjs(n),c):{start:void 0,end:void 0},{start:m,end:b}=i?Vc.getFixedRangeStartEnd(Gc.toDayjs(i),c):{start:void 0,end:void 0},v=!!n&&t.isBetween(p,g,"day","[]"),y=!!i&&t.isBetween(m,b,"day","[]"),x=v&&t.isSame(p,"day")||y&&t.isSame(m,"day"),w=v&&t.isSame(g,"day")||y&&t.isSame(b,"day"),$=(e,t,r,n)=>{r?e.circleLeft=t:e.bgLeft=t,n?e.circleRight=t:e.bgRight=t},C={date:t,calendarDate:r,disabled:f,interactive:h,currentDateIndicator:!0,onSelect:()=>{d(t,!h)},onHover:()=>{u(t.format("YYYY-MM-DD"),!h)}};return e.jsx(tu,Object.assign({},C,(()=>{const e={};return v||y?e.labelType="selected":r.month()!==t.month()?e.labelType="unavailable":Ic().isSame(t,"day")&&!f&&(e.labelType="current"),e})(),(()=>{const e={},r=t.format("YYYY-MM-DD");return y&&$(e,"hover",r===m,r===b),v&&$(e,"selected-outline",r===p,r===g),v&&y&&($(e,"selected-hover-outline",x,w),r===m&&r!==p&&(e.circleLeft="selected-hover")),e})()))},ou=({calendarDate:r,disabledDates:n,selectedStartDate:i,onSelect:o,onHover:a,minDate:s,maxDate:l,allowDisabledSelection:c,numberOfDays:d})=>{const u=t.useMemo((()=>Vc.generateDays(r)),[r]),[f,h]=t.useState(""),p=(e,t)=>{t&&!c||(o(e),e&&!Ic(e).isSame(e,"month")&&h(""))},g=(e,t)=>{t&&!c||(h(e),a(e))},m=()=>{h(""),a("")};return e.jsxs(Hd,{"data-testid":"calendar-content",children:[u[0].map(((t,r)=>e.jsx(Wd,{children:Ic(t).format("ddd")},`week-day-${r}`))),u.map(((t,o)=>e.jsx(Vd,{onMouseLeave:m,children:t.map(((t,o)=>e.jsx(iu,{date:t,calendarDate:r,selectedDate:i,hoverDate:f,minDate:s,maxDate:l,disabledDates:n,allowDisabledSelection:c,onSelect:p,onHover:g,numberOfDays:d},`day-${o}`)))},o)))]})},au=K.default.div`
    width: 100%;
    background: ${Ks.bg};
`,su=({date:t,calendarDate:r,selectedDate:n,hoverDate:i,minDate:o,maxDate:a,disabledDates:s,allowDisabledSelection:l,showActiveMonthDaysOnly:c,onSelect:d,onHover:u})=>{const f=Vc.isDisabledDay(t,s,o,a),h=!f||l,p={date:t,calendarDate:r,disabled:f,interactive:h,currentDateIndicator:!0,onSelect:()=>{d(t,!h)},onHover:()=>{u(t.format("YYYY-MM-DD"),!h)}};return e.jsx(tu,Object.assign({},p,(()=>{const e={};r.month()!==t.month()?e.labelType=c?"hidden":"unavailable":Ic().isSame(t,"day")&&!f&&(e.labelType="current");const o=t.isSame(n,"day"),a=t.isSame(i,"day");return o&&a?(e.labelType="selected-hover",e.circleLeft="selected-hover-outline",e.circleRight="selected-hover-outline"):o?(e.labelType="selected",e.circleLeft="selected-outline",e.circleRight="selected-outline"):a&&(e.labelType="hover",e.circleLeft="hover-subtle",e.circleRight="hover-subtle"),e})()))};Ic.extend(Bc);const lu=({calendarDate:r,disabledDates:n,selectedDate:i,onSelect:o,onHover:a,minDate:s,maxDate:l,allowDisabledSelection:c,showActiveMonthDaysOnly:d})=>{const u=t.useMemo((()=>Vc.generateDays(r)),[r]),[f,h]=t.useState(""),p=(e,t)=>{t&&!c||o(e)},g=(e,t)=>{t&&!c||(h(e),a(e))},m=()=>{h(""),a("")};return e.jsxs(Hd,{"data-testid":"calendar-content",children:[u[0].map(((t,r)=>e.jsx(Wd,{children:Ic(t).format("ddd")},`week-day-${r}`))),u.map(((t,o)=>e.jsx(Vd,{onMouseLeave:m,children:t.map(((t,o)=>e.jsx(su,{date:t,calendarDate:r,selectedDate:i,hoverDate:f,minDate:s,maxDate:l,disabledDates:n,allowDisabledSelection:c,showActiveMonthDaysOnly:d,onSelect:p,onHover:g},`day-${o}`)))},o)))]})},cu=({date:t,calendarDate:r,selectedDate:n,hoverDate:i,minDate:o,maxDate:a,disabledDates:s,allowDisabledSelection:l,onSelect:c,onHover:d})=>{const u=Vc.isDisabledDay(t,s,o,a),f=!u||l,{start:h,end:p}=Vc.getWeekStartEnd(Gc.toDayjs(n)),{start:g,end:m}=Vc.getWeekStartEnd(Gc.toDayjs(i)),b=n&&t.isBetween(h,p,"day","[]"),v=i&&t.isBetween(g,m,"day","[]"),y=b&&t.isSame(h)||v&&t.isSame(g),x=b&&t.isSame(p)||v&&t.isSame(m),w={date:t,calendarDate:r,disabled:u,interactive:f,currentDateIndicator:!0,onSelect:()=>{c(t,!f)},onHover:()=>{d(t.format("YYYY-MM-DD"),!f)}};return e.jsx(tu,Object.assign({},w,(()=>{const e={};return r.month()!==t.month()?e.labelType="unavailable":Ic().isSame(t,"day")&&!u&&(e.labelType="current"),e})(),(()=>{const e={};let t,r;return b&&v?(t="selected-hover-outline",r="selected-hover"):b?(t="selected-outline",r="selected"):v&&(t="hover",r="hover"),t&&(e.labelType=r,y?e.circleLeft=t:e.bgLeft=t,x?e.circleRight=t:e.bgRight=t),e})()))},du=({calendarDate:r,disabledDates:n,selectedStartDate:i,onSelect:o,onHover:a,minDate:s,maxDate:l,allowDisabledSelection:c})=>{const d=t.useMemo((()=>Vc.generateDays(r)),[r]),[u,f]=t.useState(""),h=(e,t)=>{if(t&&!c)return;const r=e.startOf("week");o(r),e&&!Ic(e).isSame(r,"month")&&f("")},p=(e,t)=>{t&&!c||(f(e),a(e))},g=()=>{f(""),a("")};return e.jsxs(Hd,{"data-testid":"calendar-content",children:[d[0].map(((t,r)=>e.jsx(Wd,{children:Ic(t).format("ddd")},`week-day-${r}`))),d.map(((t,o)=>e.jsx(Vd,{onMouseLeave:g,children:t.map(((t,o)=>e.jsx(cu,{date:t,calendarDate:r,selectedDate:i,hoverDate:u,minDate:s,maxDate:l,disabledDates:n,allowDisabledSelection:c,onSelect:h,onHover:p},`day-${o}`)))},o)))]})},uu=Y.default.forwardRef((({disabledDates:r,onYearMonthDisplayChange:n,onSelect:i,onHover:o,onDismiss:a,value:s,endValue:l,currentFocus:c,withButton:d,variant:u,minDate:f,maxDate:h,allowDisabledSelection:p,selectWithinRange:g=!0,initialCalendarDate:m,numberOfDays:b,showActiveMonthDaysOnly:v=!1},y)=>{const x=t.useRef(null),w=t.useRef(void 0);t.useImperativeHandle(y,(()=>({reset(){var e;null===(e=x.current)||void 0===e||e.resetView()},setCalendarDate(e){var t;null===(t=x.current)||void 0===t||t.setCalendarDate(e)}})));const $=e=>{var t;const r=e.format("YYYY-MM-DD");null===(t=x.current)||void 0===t||t.setCalendarDate(r),S(r)},C=e=>{j(e)},S=e=>{i&&i(e)},j=e=>{o&&o(e)},k=e=>{if(n){const t={month:e.month()+1,year:e.year()};n(t)}};return e.jsx(au,{children:e.jsx(Nd,{ref:x,withButton:d,doneButtonDisabled:(()=>{if(!d)return;let e=!0;switch(u){case"single":e=!1;break;case"range":case"fixed-range":e=!!s!=!!l;break;case"week":e=!s&&!l}return e})(),onDismiss:a,minDate:f,maxDate:h,selectWithinRange:g,currentFocus:c,selectedStartDate:s,selectedEndDate:l,allowDisabledSelection:p,onCalendarDateChange:e=>{w.current&&w.current.isSame(e,"month")||k(e),w.current=e},initialCalendarDate:m,children:({calendarDate:t})=>(t=>{switch(u){case"week":return e.jsx(du,{calendarDate:t,disabledDates:r,selectedStartDate:s,minDate:f,maxDate:h,allowDisabledSelection:p,onSelect:$,onHover:C});case"fixed-range":return e.jsx(ou,{calendarDate:t,disabledDates:r,selectedStartDate:s,minDate:f,maxDate:h,allowDisabledSelection:p,onSelect:$,onHover:C,numberOfDays:b});case"single":return e.jsx(lu,{calendarDate:t,disabledDates:r,selectedDate:s,minDate:f,maxDate:h,allowDisabledSelection:p,showActiveMonthDaysOnly:v,onSelect:$,onHover:C});default:return e.jsx(nu,{calendarDate:t,currentFocus:c,disabledDates:r,selectedStartDate:s,selectedEndDate:l,minDate:f,maxDate:h,isNewSelection:g,allowDisabledSelection:p,showActiveMonthDaysOnly:v,onSelect:$,onHover:C})}})(t)})})})),fu=Y.default.forwardRef(((t,r)=>{var{width:n}=t,i=X(t,["width"]);return e.jsx(vd,{$width:n,"data-testid":"calendar-dropdown",children:e.jsx(uu,Object.assign({ref:r},i))})})),hu=K.default.div`
    --vertical-inset: ${Zs["spacing-24"]};
    --horizontal-inset: ${Zs["spacing-32"]};
    --header-bottom-spacing: ${Zs["spacing-8"]};

    width: 41rem;

    ${e=>{if(e.$hasBorder)return i.css`
                border: ${Gs["width-010"]} ${Gs.solid} ${Ks.border};
                border-radius: ${Qs.lg};
                overflow: hidden;
            `}}
`,pu=K.default.div`
    border-radius: ${Qs.md};
    background: ${Ks.bg};
    padding: ${Zs["spacing-16"]} ${Zs["spacing-32"]};
    box-shadow: 0 2px 8px rgba(104, 104, 104, 0.25);
`,gu=t=>{var{children:r}=t,n=X(t,["children"]);const i=n["data-testid"]||"card";return e.jsx(pu,Object.assign({},n,{"data-testid":i,children:"string"==typeof r?e.jsx(exports.Typography.BodyBL,{children:r}):r}))},mu=i.keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,bu=K.default.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    ${e=>i.css`
        height: ${"small"===e.$displaySize?"1.5rem":"2rem"};
        width: ${"small"===e.$displaySize?"1.5rem":"2rem"};
    `}
`,vu=i.css`
    animation: ${Xs["duration-150"]} ${Xs["ease-default"]} ${mu};
    width: 100%;
    height: 100%;
    transition: color ${Xs["duration-150"]} ${Xs["ease-default"]};
`,yu=K.default(u.SquareIcon)`
    ${vu}
    color: ${Ks["icon-primary-subtlest"]};
`,xu=K.default(u.SquareFillIcon)`
    ${vu}
    color: ${Ks["icon-disabled-subtle"]};
`,wu=K.default(u.SquareTickFillIcon)`
    ${vu}
    color: ${e=>e.$disabled?Ks["icon-disabled-subtle"](e):Ks["icon-selected"](e)};
`,$u=K.default(u.MinusSquareFillIcon)`
    ${vu}
    color: ${e=>e.$disabled?Ks["icon-disabled-subtle"](e):Ks["icon-selected"](e)};
`,Cu=K.default.input`
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};

    &:hover
        + ${yu},
        &:hover
        + ${wu},
        &:hover
        + ${$u} {
        color: ${e=>!e.disabled&&Ks["icon-hover"](e)};
    }
`,Su=r=>{var{className:n,checked:i,disabled:o,indeterminate:a,onChange:s,onKeyPress:l,displaySize:c="default"}=r,d=X(r,["className","checked","disabled","indeterminate","onChange","onKeyPress","displaySize"]);const u=t.useRef(null);t.useEffect((()=>{u.current&&(u.current.indeterminate=null!=a&&a)}),[a]);const f=e=>{if(!o){const t=e;if(!(" "===t.key||"change"===e.type))return;s&&s(e),l&&l(t)}};return e.jsxs(bu,{className:n,"data-testid":"checkbox",role:"checkbox","aria-checked":a?"mixed":i,"aria-labelledby":"checkbox-input",tabIndex:o?-1:0,onKeyDown:f,$displaySize:c,$disabled:o,$unchecked:!(a||i||o),children:[e.jsx(Cu,Object.assign({id:"checkbox-input","data-testid":"checkbox-input","aria-hidden":"true",type:"checkbox",checked:i,ref:u,tabIndex:-1,onChange:f,disabled:o},d)),a?e.jsx($u,{$disabled:o,"data-testid":"indeterminate"}):i?e.jsx(wu,{$disabled:o,"data-testid":"checkmark"}):o?e.jsx(xu,{"data-testid":"empty-disabled-checkbox"}):e.jsx(yu,{$disabled:o,"data-testid":"empty-checkbox"})]})};var ju=Mi,ku=/\s/;var Du=function(e){for(var t=e.length;t--&&ku.test(e.charAt(t)););return t},Tu=/^\s+/;var Eu=function(e){return e?e.slice(0,Du(e)+1).replace(Tu,""):e},Ou=ro,Fu=Gi,Iu=/^[-+]0x[0-9a-f]+$/i,_u=/^0b[01]+$/i,Mu=/^0o[0-7]+$/i,Au=parseInt;var Bu=function(e){if("number"==typeof e)return e;if(Fu(e))return NaN;if(Ou(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Ou(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Eu(e);var r=_u.test(e);return r||Mu.test(e)?Au(e.slice(2),r?2:8):Iu.test(e)?NaN:+e},Ru=ro,zu=function(){return ju.Date.now()},Pu=Bu,Lu=Math.max,Nu=Math.min;var Hu=function(e,t,r){var n,i,o,a,s,l,c=0,d=!1,u=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var r=n,o=i;return n=i=void 0,c=t,a=e.apply(o,r)}function p(e){var r=e-l;return void 0===l||r>=t||r<0||u&&e-c>=o}function g(){var e=zu();if(p(e))return m(e);s=setTimeout(g,function(e){var r=t-(e-l);return u?Nu(r,o-(e-c)):r}(e))}function m(e){return s=void 0,f&&n?h(e):(n=i=void 0,a)}function b(){var e=zu(),r=p(e);if(n=arguments,i=this,l=e,r){if(void 0===s)return function(e){return c=e,s=setTimeout(g,t),d?h(e):a}(l);if(u)return clearTimeout(s),s=setTimeout(g,t),h(l)}return void 0===s&&(s=setTimeout(g,t)),a}return t=Pu(t)||0,Ru(r)&&(d=!!r.leading,o=(u="maxWait"in r)?Lu(Pu(r.maxWait)||0,t):o,f="trailing"in r?!!r.trailing:f),b.cancel=function(){void 0!==s&&clearTimeout(s),c=0,n=l=i=s=void 0},b.flush=function(){return void 0===s?a:m(zu())},b},Wu=Ei(Hu),Vu=Hu,Yu=ro;var Uu,Ku,qu=function(e,t,r){var n=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Yu(r)&&(n="leading"in r?!!r.leading:n,i="trailing"in r?!!r.trailing:i),Vu(e,t,{leading:n,maxWait:t,trailing:i})},Xu=Ei(qu),Gu=new Map,Zu=new WeakMap,Qu=0;function Ju(e){return Object.keys(e).sort().filter((t=>void 0!==e[t])).map((t=>`${t}_${"root"===t?function(e){return e?(Zu.has(e)||(Qu+=1,Zu.set(e,Qu.toString())),Zu.get(e)):"0"}(e.root):e[t]}`)).toString()}function ef(e,t,r={},n=undefined){if(void 0===window.IntersectionObserver&&void 0!==n){const i=e.getBoundingClientRect();return t(n,{isIntersecting:n,target:e,intersectionRatio:"number"==typeof r.threshold?r.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),()=>{}}const{id:i,observer:o,elements:a}=function(e){const t=Ju(e);let r=Gu.get(t);if(!r){const n=new Map;let i;const o=new IntersectionObserver((t=>{t.forEach((t=>{var r;const o=t.isIntersecting&&i.some((e=>t.intersectionRatio>=e));e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=o),null==(r=n.get(t.target))||r.forEach((e=>{e(o,t)}))}))}),e);i=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:o,elements:n},Gu.set(t,r)}return r}(r),s=a.get(e)||[];return a.has(e)||a.set(e,s),s.push(t),o.observe(e),function(){s.splice(s.indexOf(t),1),0===s.length&&(a.delete(e),o.unobserve(e)),0===a.size&&(o.disconnect(),Gu.delete(i))}}function tf({threshold:e,delay:t,trackVisibility:r,rootMargin:n,root:i,triggerOnce:o,skip:a,initialInView:s,fallbackInView:l,onChange:c}={}){var d;const[u,f]=Y.useState(null),h=Y.useRef(),[p,g]=Y.useState({inView:!!s,entry:void 0});h.current=c,Y.useEffect((()=>{if(a||!u)return;let s;return s=ef(u,((e,t)=>{g({inView:e,entry:t}),h.current&&h.current(e,t),t.isIntersecting&&o&&s&&(s(),s=void 0)}),{root:i,rootMargin:n,threshold:e,trackVisibility:r,delay:t},l),()=>{s&&s()}}),[Array.isArray(e)?e.toString():e,u,i,n,o,a,r,l,t]);const m=null==(d=p.entry)?void 0:d.target,b=Y.useRef();u||!m||o||a||b.current===m||(b.current=m,g({inView:!!s,entry:void 0}));const v=[f,p.inView,p.entry];return v.ref=v[0],v.inView=v[1],v.entry=v[2],v}!function(e){e.AM="AM",e.PM="PM"}(Uu||(Uu={})),function(e){e.roundToNearestInterval=(e,t,r)=>{const[n,i]=e.split(":"),o=parseInt(n,10),a=parseInt(i,10);if(isNaN(o)||isNaN(a)||a<0||a>=60)throw new Error("Invalid time format");const s=60*o+a,l=s%t,c=0===l?s:r?s+(t-l):s-l,d=c%60;return`${Math.floor(c/60).toString().padStart(2,"0")}:${d.toString().padStart(2,"0")}`},e.generateHourlyIntervals=(e,t,r="ha")=>{const n="HH:mm";let i=Ic(e,n),o=Ic(t,n);i.isSame(o)&&(o=o.add(1,"day"));const a=[];for(;i.isBefore(o);)a.push(i.format(r)),i=i.add(1,"hour");return a},e.getTimeValues=(e,t)=>{const r={hour:"",minute:"",period:Uu.AM};if(!t)return r;try{if("24hr"===e){const n=of(t,e);r.minute=Jc.padValue(n.minute);const i=parseInt(n.hour);0===Math.floor(i/12)?(r.period=Uu.AM,r.hour=0===i?"12":Jc.padValue(i.toString())):(r.period=Uu.PM,r.hour=12===i?i.toString():Jc.padValue((i-12).toString()))}else{const{hour:n,minute:i,period:o=""}=of(t,e);r.hour=Jc.padValue(n),r.minute=Jc.padValue(i),r.period="am"===o.toLowerCase()?Uu.AM:Uu.PM}return r}catch(e){return r}},e.updateMinutes=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?Jc.padValue("0"):"55";const n=Math.floor(r/5),i=(("add"===t?n+1:r%5==0?n-1:n)%12+12)%12;return Jc.padValue((5*i).toString())},e.updateHours=(e,t)=>{const r=parseInt(e);if(isNaN(r))return"add"===t?Jc.padValue("1"):"12";const n="add"===t?r+1:r-1;return n<=12&&n>0?Jc.padValue(n.toString()):13===n?Jc.padValue("1"):"12"},e.convertTo24HourFormat=e=>{const t=parseInt(e.hour);let r;return r=e.period===Uu.PM?12===t?t.toString():(t+12).toString():12===t?"00":e.hour,`${r}:${e.minute}`},e.convertHourTo12HourFormat=e=>{const t=parseInt(e),r=t%12==0?12..toString():(t%12).toString();return Jc.padValue(r)},e.formatDisplayValue=(e,t)=>{try{const{hour:r,minute:n,period:i=""}=of(e,t),o=Jc.padValue(r);let a=`${o}:${Jc.padValue(n)}`;return"12hr"===t?(a+=i.toLowerCase(),a):a}catch(e){return""}},e.toMinutesSeconds=e=>({minutes:Math.floor(e/60),seconds:e%60}),e.to24Hour=e=>{if((null==e?void 0:e.includes("am"))||(null==e?void 0:e.includes("pm"))){const[t,r]=e.split(/(am|pm)/i),[n,i]=t.split(":").map(Number);let o=n;return"pm"===r&&o<12&&(o+=12),"am"===r&&12===o&&(o=0),af(o,i)}return e},e.generateTimings=(t,r="12hr",n,i)=>{const o=[];let a=0,s=1440-t;for(n&&(a=e.timeToMinutes(n)),i&&(s=e.timeToMinutes(i));a<=s;){let e=Math.floor(a/60);const n=a%60;if("12hr"===r){const t=e>=12?"pm":"am";e%=12,e=e||12;const r=af(e,n,t);o.push(r)}else{const t=af(e,n);o.push(t)}a+=t}return o},e.parseInput=(e,t="12hr")=>{if(""===e||void 0===e)return e;const r=e.trim().toLowerCase(),n=/^(?:(\d{1,2})([:.])?(\d{2})?)?(a|p|am|pm)?$/.exec(r);if(!n)return;let i=parseInt(n[1]||"0",10);const o=parseInt(n[3]||"0",10);let a=n[4];if(void 0===n[1]||i>24||o>59)return;if("a"===a?a="am":"p"===a&&(a="pm"),"24hr"===t)return"pm"===a&&i<12?i+=12:("am"===a&&12===i||24===i)&&(i=0),af(i,o);a?0===i||24===i?(a="am",i=12):i>12&&(a="pm",i-=12):(a=0===i||24===i||i>6&&i<12?"am":"pm",i=i%12||12);return af(i,o,a)},e.findClosestFlooredTime=(t,r)=>{if(!t)return t;const n=e.timeToMinutes(t);let i="",o=1/0;for(const t of r){const r=e.timeToMinutes(t)-n;if(r<=0&&Math.abs(r)<o)o=Math.abs(r),i=t;else if(r>0)break}return i},e.timeToMinutes=e=>{const[t,r]=e.toLowerCase().split(/(am|pm)/),[n,i]=t.split(":").map(Number);let o=n;return"pm"===r&&12!==o&&(o+=12),"am"===r&&12===o&&(o=0),60*o+i}}(Ku||(Ku={}));const rf=(e,t)=>{const r=parseInt(e);return"24hr"===t?r>=0&&r<=23:r>=1&&r<=12},nf=e=>{const t=parseInt(e);return t>=0&&t<=59},of=(e,t)=>{const r=e?e.split(":"):[],n=new Error("Invalid format");if("12hr"===t){if(2!==r.length||4!==r[1].length)throw n;const e=r[1].substring(0,2),o=r[1].substring(2);if(!rf(r[0],t)||!nf(e)||"am"!==(i=o).toLowerCase()&&"pm"!==i.toLowerCase())throw n;return{hour:r[0],minute:e,period:r[1].substring(2)}}if(2!==r.length)throw n;if(!rf(r[0],t)||!nf(r[1]))throw n;return{hour:r[0],minute:r[1]};var i},af=(e,t,r)=>r?`${e}:${t.toString().padStart(2,"0")}${r}`:`${e.toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}`,sf=K.default.div`
    width: 100%;
`,lf=K.default.div`
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
`,cf=K.default(lf)`
    position: relative;
    opacity: ${e=>e.$visible?1:0};
`,df=K.default(lf)`
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
`,uf=K.default.div`
    font-weight: ${qs.Spec["weight-bold"]};
    margin-left: ${Zs["spacing-8"]};
    margin-right: ${Zs["spacing-24"]};

    ${el.MaxWidth.sm} {
        margin-right: ${Zs["spacing-48"]};
    }
`,ff=K.default.div`
    font-weight: ${qs.Spec["weight-semibold"]};
    margin-left: auto;
`,hf=K.default(u.ClockIcon)`
    color: ${e=>e.$warn?Ks["icon-error"]:Ks["icon-primary"]};
`,pf=(e,t)=>t||Date.now()+1e3*(null!=e?e:0),gf=e=>Math.max(Math.round(e/1e3),0),mf=t=>r=>{switch(t){case"maintenance":{const t=r;return e.jsxs(e.Fragment,{children:["This service is currently unavailable. Please try again after ",e.jsx("strong",{children:t.dateString}),"."]})}case"inactivity":{const t=r,n=Math.floor(t.secondsLeft/60),i=t.secondsLeft%60;return e.jsxs(e.Fragment,{children:["You’ve been inactive for a while. To protect your privacy, you’ll be logged out in ",n," minutes"," ",i," seconds.",e.jsx("br",{}),e.jsx("br",{}),"If you wish to stay on this page, let us know now."]})}}};exports.ErrorDisplayHelper=void 0,(exports.ErrorDisplayHelper||(exports.ErrorDisplayHelper={})).imgAttributeHelper=(e,t)=>{const{base:r,md:n,lg:i,width:o,height:a}=e;return{srcSet:`${r} 400w, ${n} 800w, ${i} 1200w`,src:i,sizes:`(max-width: ${Js["sm-max"]({theme:t})}px) 400px, (max-width: ${Js["lg-max"]({theme:t})}px) 800px, 1200px`,width:o,height:a}};const{imgAttributeHelper:bf}=exports.ErrorDisplayHelper,vf={400:{base:"https://assets.life.gov.sg/react-design-system/img/error/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/400@3x.png",width:400,height:280},403:{base:"https://assets.life.gov.sg/react-design-system/img/error/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/403@3x.png",width:400,height:280},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/404@3x.png",width:400,height:280},408:{base:"https://assets.life.gov.sg/react-design-system/img/error/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/408@3x.png",width:400,height:280},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@3x.png",width:400,height:280},502:{base:"https://assets.life.gov.sg/react-design-system/img/error/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/502@3x.png",width:400,height:280},503:{base:"https://assets.life.gov.sg/react-design-system/img/error/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/503@3x.png",width:400,height:280},504:{base:"https://assets.life.gov.sg/react-design-system/img/error/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/504@3x.png",width:400,height:280},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/confirmation@3x.png",width:400,height:280},"insufficient-credits":{base:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit.png",md:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit@3x.png",width:400,height:280},inactivity:{base:"https://assets.life.gov.sg/react-design-system/img/error/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/inactivity@3x.png",width:400,height:280},"link-error":{base:"https://assets.life.gov.sg/react-design-system/img/error/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/link-error@3x.png",width:400,height:280},logout:{base:"https://assets.life.gov.sg/react-design-system/img/error/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/logout@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found@3x.png",width:400,height:280},"payment-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful@3x.png",width:400,height:281},"transfer-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful@3x.png",width:400,height:280},"unsupported-browser":{base:"https://assets.life.gov.sg/react-design-system/img/error/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@3x.png",width:400,height:280},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/warning@3x.png",width:400,height:280}},yf={400:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400@3x.png",width:400,height:215},403:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403@3x.png",width:400,height:254},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404@3x.png",width:400,height:319},408:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408@3x.png",width:400,height:330},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@3x.png",width:400,height:232},502:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502@3x.png",width:400,height:215},503:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503@3x.png",width:400,height:191},504:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504@3x.png",width:400,height:261},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation@3x.png",width:400,height:280},"insufficient-credits":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit@3x.png",width:400,height:280},inactivity:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity@3x.png",width:400,height:276},"link-error":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error@3x.png",width:400,height:280},logout:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found@3x.png",width:400,height:290},"payment-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful@3x.png",width:400,height:280},"transfer-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful@3x.png",width:400,height:280},"unsupported-browser":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@3x.png",width:400,height:232},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning@3x.png",width:400,height:280}},xf=Object.assign(Object.assign({},vf),{400:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/400@3x.png",width:400,height:280},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@3x.png",width:400,height:280},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@3x.png",width:400,height:280},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/confirmation@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@3x.png",width:400,height:280},"unsupported-browser":{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@3x.png",width:400,height:280},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/warning@3x.png",width:400,height:280}}),wf=Object.assign(Object.assign({},vf),{400:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/400@3x.png",width:400,height:280},403:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/403@3x.png",width:400,height:280},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/404@3x.png",width:400,height:280},408:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/408@3x.png",width:400,height:280},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/generic-error@3x.png",width:400,height:280},502:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/502@3x.png",width:400,height:280},503:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/503@3x.png",width:400,height:280},504:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/504@3x.png",width:400,height:280},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/confirmation@3x.png",width:400,height:280},inactivity:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/inactivity@3x.png",width:400,height:280},"link-error":{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/link-error@3x.png",width:400,height:280},logout:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/logout@3x.png",width:400,height:280},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/warning@3x.png",width:400,height:280},"payment-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/payment-unsuccessful@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/no-item-found@3x.png",width:400,height:280}}),$f=(e,t)=>new Map([["400",{img:bf(e[400],t),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["403",{img:bf(e[403],t),title:"Error loading page",description:"You may not have permission to view this page. If someone gave you this link, let them know about this error."}],["404",{img:bf(e[404],t),title:"Page not found",description:"If you entered or pasted the URL, check that it’s correct. If someone gave you this link, let them know about this error."}],["408",{img:bf(e[408],t),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["500",{img:bf(e[500],t),title:"Something went wrong",description:"We're working on a fix for the problem. Please try again later."}],["502",{img:bf(e[502],t),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["503",{img:bf(e[503],t),title:"Service under maintenance",description:"This service is currently unavailable. Please try again later."}],["504",{img:bf(e[504],t),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["confirmation",{img:bf(e.confirmation,t),title:"Leave and lose changes?",description:"You have unsaved changes. If you leave this page, you will lose the changes you’ve made."}],["link-error",{img:bf(e["link-error"],t),title:"Link has expired",description:"If you entered or pasted the URL, check that it’s correct. If someone gave you this link, let them know it has expired."}],["logout",{img:bf(e.logout,t),title:"You’ve been logged out",description:"It looks like you’ve left, so we logged you out to protect your privacy."}],["insufficient-credits",{img:bf(e["insufficient-credits"],t),title:"Insufficient credits",description:"You do not have enough credits to make this transaction."}],["inactivity",{img:bf(e.inactivity,t),title:"Are you still there?",description:"You’ve been inactive for a while. To protect your privacy, you’ll be logged out soon.\n\nIf you wish to stay on this page, let us know now.",renderDescription:mf("inactivity")}],["maintenance",{img:bf(e[503],t),title:"Service under maintenance",description:"This service is currently unavailable. Please try again later.",renderDescription:mf("maintenance")}],["no-item-found",{img:bf(e["no-item-found"],t),title:"No results found",description:"Try adjusting your search or filters to find what you’re looking for."}],["payment-unsuccessful",{img:bf(e["payment-unsuccessful"],t),title:"Unsuccessful payment",description:"Your payment was unsuccessful. Please try again."}],["transfer-unsuccessful",{img:bf(e["transfer-unsuccessful"],t),title:"Unsuccessful transfer",description:"Your transfer was unsuccessful. Please try again."}],["unsupported-browser",{img:bf(e["unsupported-browser"],t),title:"Browser not supported",description:"Download the latest version of Chrome, Edge, Firefox or Safari."}],["partially-supported-browser",{img:bf(e["unsupported-browser"],t),title:"Browser version not supported",description:"Update to the latest version of Chrome, Edge, Firefox or Safari."}],["warning",{img:bf(e.warning,t),title:"Are you sure?",description:"You will lose your progress."}]]),Cf=K.default.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`,Sf=K.default.img`
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
`,jf=K.default.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 656px;
    white-space: pre-wrap;
`,kf=K.default(exports.Typography.HeadingMD)`
    margin: ${Zs["spacing-32"]} 0 ${Zs["spacing-16"]};
    text-align: center;
`,Df=K.default.div`
    color: ${Ks.text};
    text-align: center;

    ${ql({textSize:"body-baseline"})}
`,Tf=K.default(Hl.Default)`
    margin: ${Zs["spacing-32"]} auto 0;
    width: 21rem;

    ${el.MaxWidth.sm} {
        width: 100%;
    }
`,Ef=t=>{var{type:r,img:n,title:o,description:a,actionButton:s,additionalProps:l,imageOnly:c,illustrationScheme:d}=t,u=X(t,["type","img","title","description","actionButton","additionalProps","imageOnly","illustrationScheme"]);const f=i.useTheme(),h=((e,t,r)=>{switch(t){case"bookingsg":return $f(yf,r).get(e);case"ccube":return $f(xf,r).get(e);case"mylegacy":return $f(wf,r).get(e);default:return $f(vf,r).get(e)}})(r,d||(f||tl).resourceScheme,f),p=u["data-testid"]||"error-display",g=()=>{var e,t;switch(r){case"maintenance":{const t=l;return l&&t.dateString?null===(e=null==h?void 0:h.renderDescription)||void 0===e?void 0:e.call(h,t):a||void 0}case"inactivity":{const e=l;return l&&e.secondsLeft?null===(t=null==h?void 0:h.renderDescription)||void 0===t?void 0:t.call(h,e):a||void 0}default:return a||void 0}};if(!h)return null;const m=Object.assign(Object.assign(Object.assign(Object.assign({},h),n&&{img:n}),o&&{title:o}),g()&&{description:g()});return e.jsxs(Cf,Object.assign({},u,{"data-testid":p,children:[e.jsx(Sf,Object.assign({},m.img,{alt:"","data-id":"error-display-image"})),!c&&(m.title||m.description?e.jsxs(jf,{children:[m.title&&("string"==typeof m.title?e.jsx(kf,{"data-testid":`${p}--title`,"data-id":"error-display-title",weight:"semibold",children:m.title}):m.title),m.description&&e.jsx(Df,{"data-testid":`${p}--description`,"data-id":"error-display-description",children:"string"==typeof m.description?e.jsx("p",{children:m.description}):m.description})]}):null),s&&(()=>{const t=Object.assign({children:"Proceed"},s);return e.jsx(Tf,Object.assign({},t))})()]}))},Of=i.css`
    outline-offset: -1px;
    outline: ${Gs["width-020"]} ${Gs.solid} ${Ks["border-focus"]};
`,Ff=i.css`
    outline-color: ${Ks["border-focus"]};
`,If=i.css`
    outline-color: ${Ks["border-disabled"]};
`,_f=i.css`
    outline-color: ${Ks["border-error-focus"]};
`,Mf=K.default.div`
    border: ${Gs["width-010"]} ${Gs.solid} ${Ks.border};
    border-radius: ${Qs.sm};
    background: ${Ks.bg};

    :focus-within {
        ${Of}
    }
    ${e=>e.$focused&&Of}

    ${e=>e.$readOnly?i.css`
                border-color: transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${Ff}
                }
                ${e.$focused&&Ff}
            `:e.$disabled?i.css`
                background: ${Ks["bg-disabled"]};
                cursor: not-allowed;

                :focus-within {
                    ${If}
                }
                ${e.$focused&&If}
            `:e.$error?i.css`
                border-color: ${Ks["border-error"]};

                :focus-within {
                    ${_f}
                }
                ${e.$focused&&_f}
            `:void 0}
`,Af=K.default(Mf)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 ${Zs["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,Bf=K.default.input`
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
`,Rf=K.default.button`
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
`,zf=Ks.border,Pf=Ks.text,Lf=K.default.div`
    overflow: auto;
    display: flex;
    flex-direction: column;
    border: ${Gs["width-010"]} ${Gs.solid} ${zf};
    border-radius: ${Qs.md};

    // Hide scrollbar
    ::-webkit-scrollbar {
        display: none;
    }
    * {
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }
`,Nf=K.default.div`
    flex: 1;
`,Hf=K.default.table`
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
`,Wf=K.default.tbody`
    tr:last-child {
        td {
            border-bottom: ${e=>e.$showLastRowBottomBorder?`${Gs["width-010"]} ${Gs.solid} ${zf}`:"none"};
        }
    }
`,Vf=K.default.div`
    bottom: 0;
    ${e=>{if(e.$fixed){const t=e.$left?`${e.$left}px`:"0",r=e.$width?`${e.$width}px`:"100%";return i.css`
                position: fixed;
                left: ${t};
                width: ${r};
            `}return i.css`
                position: sticky;
                left: 0;
            `}};
`,Yf=K.default(Rf)`
    ${qs["body-md-semibold"]}
    cursor: pointer;
    color: ${Ks["text-primary"]};
    transition: ${Xs["duration-150"]} ${Xs["ease-default"]};
    padding: 0.75rem;
    margin: -0.75rem 0;

    :hover {
        color: ${Ks["text-hover"]};
    }
`,Uf=K.default.div`
    overflow: hidden;
    display: flex;
    ${e=>e.$float&&i.css`
            transform: translateX(-0.5%) translateY(-2rem);
            border-radius: ${Qs.sm};
            box-shadow: 0 0 4px 0 rgba(40, 40, 40, 0.25);
            width: 101%;
            border: ${Gs["width-010"]} ${Gs.solid} ${zf};
        `}
    align-items: center;
    height: 3.5rem;
    padding: 1rem;
    border-top: ${Gs["width-010"]} ${Gs.solid} ${zf};
    border-radius: 0 0 ${Qs.sm} ${Qs.sm};
    background-color: ${Ks["bg-selected"]};
    transition: all 300ms ease;
`,Kf=K.default.tr`
    background-color: ${Ks["bg-stronger"]};
    height: 6rem;
    border-bottom: ${Gs["width-010"]} ${Gs.solid} ${zf};
`,qf=K.default.th`
    padding: ${e=>e.$isCheckbox?"1.25rem 0.5rem 1.25rem 1.5rem":"1.25rem 1rem"};
    text-align: left;
    cursor: ${e=>e.$clickable?"pointer":"default"};
    vertical-align: middle;
    color: ${Pf};
    border-bottom: ${Gs["width-010"]} ${Gs.solid} ${zf};
    ${e=>{if(e.$isCheckbox)return i.css`
                width: 4rem;
            `}};
`,Xf=K.default.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
        color: ${Pf};
        margin-left: 0.5rem;
    }
`,Gf=K.default.tr`
    background-color: ${e=>e.$isSelected?i.css`
                ${Ks["bg-selected"]};
            `:e.$alternating?i.css`
                ${Ks["bg-strong"]};
            `:i.css`
                ${Ks.bg};
            `};
    border-top: ${Gs["width-010"]} ${Gs.solid} ${zf};
    &:hover {
        ${e=>{if(e.$isSelectable)return i.css`
                    background-color: ${Ks["bg-hover-strong"]};
                `}};
    }
`,Zf=K.default.td`
    padding: ${e=>e.$isCheckbox?"1.25rem 0.5rem 1.25rem 1.5rem":"1.25rem 1rem"};
    vertical-align: middle;
    color: ${Pf};
    border-bottom: ${Gs["width-010"]} ${Gs.solid} ${zf};
`,Qf=K.default(exports.Typography.BodyBL)`
    ${il(2)}
    text-overflow: ellipsis;
`,Jf=K.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,eh=K.default.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 0;
`,th=K.default(exports.Typography.HeadingSM)`
    margin-top: 2rem;
    margin-bottom: 1rem;
`,rh=K.default.td`
    padding: 4rem 0;
`,nh=e=>"small"===e?2.5:3,ih=K.default.div`
    position: relative;
    width: 100%;
    ${e=>{const t=nh(e.$variant);return i.css`
            min-height: ${t}rem;
            height: ${t}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`,oh=i.css`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${Zs["spacing-16"]};
    // exclude top and bottom borders
    height: calc(${e=>nh(e.$variant)}rem - 2px);
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
`,ah=K.default.button`
    ${oh}
    cursor: pointer;
`,sh=K.default.div`
    ${oh}
`,lh=i.keyframes`
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
`,ch=K.default.div`
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
                animation: ${lh} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?i.css`
                background: ${Ks["bg-disabled"]};

                ${ah} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border-color: ${Ks.border};
                    box-shadow: none;
                }
            `:e.$readOnly?i.css`
                border: none;
                background: transparent !important;

                ${ah} {
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
`;const dh=K.default.div`
    height: 1px;
    background: ${Ks.border};
    margin: 0 ${Zs["spacing-8"]};
`,uh=K.default.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return i.css`
                color: ${Ks["text-disabled"]};
            `}}
`,fh=K.default.div`
    ${e=>"small"===e.$variant?qs["body-md-regular"]:qs["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.truncateType)return i.css`
                    ${il(1)}
                `}}
    overflow: hidden;
`,hh=K.default(fh)`
    color: ${Ks["text-subtler"]};
`,ph=({children:r,show:n,error:i,disabled:o,testId:a,onBlur:s,readOnly:l,className:c,variant:d})=>{const u=t.useRef(null);return td("mousedown",(function(e){if(!o){if(u&&u.current.contains(e.target))return;n&&s()}}),"document"),e.jsx(ih,{className:c,$variant:d,children:e.jsx(ch,{ref:u,error:i&&!n,disabled:o,$readOnly:l,expanded:n,"data-testid":a,children:r})})};var gh;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(gh||(gh={}));const mh=()=>{const[e,r]=t.useState(void 0),n=g.useFloatingTree();return t.useEffect((()=>{if(!n)return void r(void 0);const e=e=>{r(e.zIndex)};return n.events.on(gh.Change,e),n.events.emit(gh.Ready),()=>n.events.off(gh.Change,e)}),[n]),e},bh=K.default.div`
    display: flex;
    flex-direction: column;
`,vh=e=>"right"===e?"bottom-end":"bottom-start",yh=({enabled:r,isOpen:n,onOpen:o,onClose:a,onDismiss:s,renderElement:l,renderDropdown:c,customZIndex:d,clickToToggle:u=!1,offset:f=0,alignment:h="left",fitAvailableHeight:p})=>{var m;const b=i.useTheme(),v=Js["sm-max"]({theme:b}),y=t.useRef(null),x=t.useRef(null),{width:w=0}=qe({targetRef:y,handleHeight:!1}),$={name:"center",fn:({x:e,rects:t})=>{const r=0===e||e+t.floating.width===window.innerWidth,n=window.innerWidth<v;return{x:r&&n?(window.innerWidth-t.floating.width)/2:e}}},{refs:C,floatingStyles:S,context:j}=g.useFloating({open:n,onOpenChange:(e,t,r)=>{"escape-key"===r?null==s||s():e&&!n?null==o||o():!e&&n&&(null==a||a(r))},whileElementsMounted:g.autoUpdate,placement:vh(h),middleware:[g.offset(f),g.flip(),g.shift({limiter:g.limitShift()}),g.size({apply({availableHeight:e}){x.current&&Object.assign(x.current.style,{maxHeight:p?`${e}px`:void 0,overflowY:p?"hidden":void 0})}}),$]}),k=mh(),{isMounted:D,styles:T}=g.useTransitionStyles(j,{initial:{opacity:0},open:{opacity:1},duration:300}),E=g.useClick(j,{enabled:r,toggle:u}),O=g.useDismiss(j,{enabled:r}),{getReferenceProps:F,getFloatingProps:I}=g.useInteractions([E,O]);return e.jsxs(e.Fragment,{children:[e.jsx("div",Object.assign({ref:e=>{y.current=e,C.setReference(e)}},F(),{children:l()})),D&&e.jsx(g.FloatingPortal,{children:e.jsx(g.FloatingFocusManager,{context:j,modal:!1,initialFocus:x,returnFocus:!1,children:e.jsx("div",Object.assign({ref:C.setFloating,style:Object.assign(Object.assign({},S),{zIndex:null!==(m=null!=d?d:k)&&void 0!==m?m:50})},I(),{children:e.jsx(bh,{ref:x,style:Object.assign({},T),inert:T.opacity<1?"":void 0,children:c({elementWidth:w})})}))})})]})},xh=K.default.div`
    display: flex;
    align-items: center;
    position: relative;

    flex: 1;
`,wh=K.default.div`
    display: flex;
    align-items: center;

    ${e=>{if(e.$hover)return i.css`
                ${$h}, ${kh} {
                    color: ${Ks["text-subtler"]};
                }
            `}}
`,$h=K.default(Bf)`
    background: transparent;
    text-align: center;
`,Ch=K.default($h)`
    width: 2rem;
    margin-right: ${Zs["spacing-4"]};
`,Sh=K.default($h)`
    width: 2.5rem;
`,jh=K.default($h)`
    width: 3rem;
    margin-left: ${Zs["spacing-4"]};
`,kh=K.default.span`
    ${qs["body-baseline-regular"]}
    ${e=>{if(e.$inactive)return i.css`
                color: ${Ks.text};
            `}}
`,Dh=K.default.div`
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
`;Ic.extend(Mc);const Th=Y.default.forwardRef((({disabled:r,readOnly:n,names:i,value:o,focused:a,hoverValue:s,placeholder:l,label:c,onChange:d,onFocus:u,onBlur:f,hideInputKeyboard:h},p)=>{const g=h?"none":"numeric",[m,b,v]=ad(""),[y,x,w]=ad(""),[$,C,S]=ad(""),[j,k]=t.useState("none"),[D,T]=t.useState(!1),E=t.useRef(null),O=t.useRef(null),F=t.useRef(null),I=t.useRef(null),[_,M,A]=N(s);t.useEffect((()=>{var e;const[t="",r="",n=""]=N(o);b(t),x(r),C(n),t||r||n||!E.current||!E.current.contains(document.activeElement)||null===(e=O.current)||void 0===e||e.focus()}),[o]),t.useEffect((()=>{var e;a||k("none"),a&&(T(!0),E.current&&!E.current.contains(document.activeElement)&&(null===(e=O.current)||void 0===e||e.focus()))}),[a]),t.useImperativeHandle(p,(()=>({ref:E,resetPlaceholder(){T(!1)},resetInput(){const[e="",t="",r=""]=N(o);b(e),x(t),C(r)}})),[o]);const B=e=>{var t;e.preventDefault(),null===(t=O.current)||void 0===t||t.focus()},R=e=>{e.target.select();const t=e.target.name;k(t)},z=e=>{const[t,r,n]=i,o={[t]:v.current,[r]:w.current,[n]:S.current},a=e.target.name,s=o[a],l=a!==n?Jc.padValue(s,!0):s;switch(a){case t:o[t]=l,b(l);break;case r:o[r]=l,x(l)}const c=`${o[n]}-${o[r]}-${o[t]}`,u=Ic(c,"YYYY-MM-DD",!0).isValid(),h=!o[t]&&!o[r]&&!o[n];u&&s!==l&&d(c),E.current&&!E.current.contains(e.relatedTarget)&&(k("none"),null==f||f(h||u))},P=e=>{var t,r;if(s)return;const n=e.target.name,o=e.target.value.replace(/[^0-9]/g,""),a={day:m,month:y,year:$};switch(n){case i[0]:a.day=o,b(o),2===o.length&&(null===(t=F.current)||void 0===t||t.focus());break;case i[1]:a.month=o,x(o),2===o.length&&(null===(r=I.current)||void 0===r||r.focus());break;case i[2]:a.year=o,C(o)}if(!a.day&&!a.month&&!a.year)return void d("");const l=`${a.year}-${a.month}-${a.day}`;Ic(l,"YYYY-MM-DD",!0).isValid()&&d(l)},L=e=>{var t,r;"Backspace"!==e.code&&"Backspace"!==e.key||(j===i[1]&&0===y.length&&(null===(t=O.current)||void 0===t||t.focus()),j===i[2]&&0===$.length&&(null===(r=F.current)||void 0===r||r.focus()))};function N(e){if(e){const t=Ic(new Date(e));return t.isValid()?[Jc.padValue(t.date().toString()),Jc.padValue((t.month()+1).toString()),t.year().toString()]:[void 0,void 0,void 0]}return[void 0,void 0,void 0]}return e.jsxs(xh,{role:"group","aria-label":c,onClick:()=>{var e;r||n||(T(!0),E.current&&!E.current.contains(document.activeElement)&&(null===(e=O.current)||void 0===e||e.focus()))},onFocus:e=>{r||(T(!0),a||null==u||u(e))},children:[e.jsxs(wh,{ref:E,$hover:!!s,children:[e.jsx(Ch,{ref:O,name:i[0],maxLength:2,value:null!=_?_:m,onFocus:R,onBlur:z,onChange:P,type:"text",inputMode:g,pattern:"[0-9]{2}","data-testid":`${i[0]}-input`,"aria-label":"day",disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:j!==i[0]||n?"DD":""}),e.jsx(kh,{$inactive:0===m.length,children:"/"}),e.jsx(Sh,{ref:F,name:i[1],maxLength:2,value:null!=M?M:y,onFocus:R,onBlur:z,onChange:P,onKeyDown:L,type:"text",inputMode:g,pattern:"[0-9]{2}","data-testid":`${i[1]}-input`,"aria-label":"month",disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:j!==i[1]||n?"MM":""}),e.jsx(kh,{$inactive:0===y.length,children:"/"}),e.jsx(jh,{ref:I,name:i[2],maxLength:4,value:null!=A?A:$,onFocus:R,onBlur:z,onChange:P,onKeyDown:L,type:"text",inputMode:g,pattern:"[0-9]{4}","data-testid":`${i[2]}-input`,"aria-label":"year",disabled:r,readOnly:n,tabIndex:n?-1:0,autoComplete:"off",placeholder:j!==i[2]||n?"YYYY":""})]}),(()=>{if(!o&&!n&&l)return e.jsx(Dh,{$hide:D,$disabled:r,onMouseDown:B,children:l})})()]})})),Eh=K.default(Af)`
    height: 3rem;
`,Oh=r=>{var{minDate:n,maxDate:i,disabled:o,disabledDates:a,error:s,hideInputKeyboard:l,value:c,onChange:d,onFocus:u,onBlur:f,onYearMonthDisplayChange:h,withButton:p=!0,readOnly:g,id:m,allowDisabledSelection:b,zIndex:v}=r,y=X(r,["minDate","maxDate","disabled","disabledDates","error","hideInputKeyboard","value","onChange","onFocus","onBlur","onYearMonthDisplayChange","withButton","readOnly","id","allowDisabledSelection","zIndex"]);const[x,w]=t.useState(Zc.sanitizeInput(c)),[$,C]=t.useState(Zc.sanitizeInput(c)),[S,j]=t.useState(void 0),[k,D]=t.useState(!1),[T,E]=t.useState(!1),O=t.useRef(null),F=t.useRef(null);t.useEffect((()=>{const e=Zc.sanitizeInput(c);w(e),C(e)}),[c]);const I=e=>{!b&&Zc.isDateDisabled(e,{disabledDates:a,minDate:n,maxDate:i})||(C(e),p||(z(e),w(e),e&&D(!1)))},_=e=>{var t;C(e),p||(z(e),w(e),e&&(null===(t=O.current)||void 0===t||t.focus(),D(!1)),S&&j(void 0))},M=()=>{g||o||(D(!0),T||(E(!0),u&&u()))},A=e=>{var t;T&&!k&&O.current&&!O.current.contains(e.relatedTarget)&&(null===(t=F.current)||void 0===t||t.resetInput(),C(x),E(!1),P())},B=e=>{j(e)},R=e=>{var t;switch(e){case"reset":C(x);break;case"confirmed":w($),z($)}null===(t=O.current)||void 0===t||t.focus(),D(!1)},z=e=>{d&&d(e)},P=()=>{f&&f()};return e.jsx(yh,{enabled:!g&&!o,isOpen:k,renderElement:()=>e.jsx(Eh,Object.assign({tabIndex:-1,ref:O,onBlur:A,onFocus:M,$disabled:o,$readOnly:g,$focused:T,$error:s,id:m,"data-testid":y["data-testid"]},y,{children:e.jsx(Th,{ref:F,disabled:o,onChange:I,readOnly:g,focused:k,names:["start-day","start-month","start-year"],value:$,hoverValue:S,hideInputKeyboard:l})})),renderDropdown:({elementWidth:t})=>e.jsx(fu,{variant:"single",initialCalendarDate:$,withButton:p,value:$,disabledDates:a,minDate:n,maxDate:i,allowDisabledSelection:b,onHover:B,onSelect:_,onDismiss:R,onYearMonthDisplayChange:h,width:t}),onClose:()=>{var e;null===(e=F.current)||void 0===e||e.resetInput(),C(x),D(!1),E(!1),P()},onDismiss:()=>{var e,t;null===(e=F.current)||void 0===e||e.resetInput(),null===(t=O.current)||void 0===t||t.focus(),C(x),D(!1)},customZIndex:v,offset:16})},Fh=K.default.button`
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
`,Ih=Y.default.forwardRef(((t,r)=>{var{"data-testid":n,styleType:i="primary",children:o,sizeType:a="default",type:s="button"}=t,l=X(t,["data-testid","styleType","children","sizeType","type"]);return e.jsx(Fh,Object.assign({"data-testid":n||"iconButton",ref:r,type:s,$sizeType:a,$styleType:i},l,{children:o}))})),_h=K.default(Ih)`
    margin: ${Zs["spacing-8"]};
`,Mh=K.default.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    background-color: ${Ks["bg-strong"]};
    border-radius: ${Qs.sm};
`,Ah=K.default(Hl.Default)`
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
`,Bh=r=>{var{selectedDate:n,minDate:i,maxDate:o,loading:a,showDateAsShortForm:s,showCurrentDateAsToday:l,onLeftArrowClick:c,onRightArrowClick:d,onCalendarDateSelect:u}=r,f=X(r,["selectedDate","minDate","maxDate","loading","showDateAsShortForm","showCurrentDateAsToday","onLeftArrowClick","onRightArrowClick","onCalendarDateSelect"]);const h=Gc.toDayjs(n),p=Gc.toDayjs(n).format(s?"D MMM YYYY":"D MMMM YYYY").toString(),g=Gc.isSame(n,Ic())&&l?"Today":h.format(s?"ddd":"dddd"),[m,b]=t.useState(!1),v=e=>{u&&u(e),b(!m)},y=()=>{b(!1),c(n)},x=()=>{b(!1),d(n)};return e.jsx(yh,{enabled:!a,isOpen:m,renderElement:()=>e.jsxs(Mh,Object.assign({},f,{children:[e.jsx(_h,{"data-testid":"date-navigator-left-arrow-btn",disabled:a||!!i&&(Vc.isDisabledDay(h,void 0,i)||Gc.isSame(h,i)),"aria-label":"Previous day",onClick:y,styleType:"light",sizeType:"small",children:e.jsx(xd,{})}),e.jsx(Ah,{onClick:()=>!!u&&!a&&b(!m),$enableDateClick:!!u&&!a,"data-testid":"date-navigator-date-text",styleType:"link",disabled:!u||a,children:`${p}, ${g}`}),e.jsx(_h,{"data-testid":"date-navigator-right-arrow-btn",disabled:a||!!o&&(Vc.isDisabledDay(h,void 0,void 0,o)||Gc.isSame(h,o)),"aria-label":"Next day",onClick:x,styleType:"light",sizeType:"small",children:e.jsx(wd,{})})]})),renderDropdown:({elementWidth:t})=>e.jsx(fu,{variant:"single",initialCalendarDate:n,value:n,minDate:i,maxDate:o,onSelect:v,width:t}),onDismiss:()=>b(!1),onClose:()=>b(!1),offset:8})},Rh=K.default.div`
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
`,zh=K.default.div`
    width: 100%; // Force next flex item to break to next line
`,Ph=K.default.div`
    display: flex;
    flex: 1;
    align-items: center;
`,Lh=K.default(u.ArrowRightIcon)`
    color: ${Ks.icon};
    width: ${qs.Spec["body-size-baseline"]};
    height: ${qs.Spec["body-size-baseline"]};
    flex-shrink: 0;
    margin: 0 ${Zs["spacing-8"]};
    align-self: center;
`,Nh=K.default.div`
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
`,Hh=({children:t,currentActive:r,error:n,className:i,wrap:o})=>{const[a,s]=t;return e.jsxs(Rh,{className:i,$wrap:o,children:[e.jsx(Ph,{"data-id":"range-container-elem1-container",children:a}),e.jsx(Lh,{}),o&&e.jsx(zh,{}),e.jsx(Ph,{"data-id":"range-container-elem2-container",children:s}),e.jsx(Nh,{"data-id":"range-container-indicator",$position:r,$error:n,$wrap:o})]})},Wh=(e,t,r)=>{const n=[];e&&n.push(`[${e}]`),n.push(t,r),console.log(...n)},Vh=K.default(Af)`
    ${e=>e.$wrap&&i.css`
            padding: ${Zs["spacing-12"]} ${Zs["spacing-16"]};
        `}
`,Yh=K.default.div`
    display: flex;
    align-items: center;
    height: calc(3rem - 2px); // exclude top and bottom borders
    width: 100%;

    ${e=>e.$wrap&&i.css`
            height: fit-content;
        `}
`,Uh={initialStart:"",initialEnd:"",selectedStart:"",selectedEnd:"",currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1,focused:!1},Kh=r=>{var{minDate:n,maxDate:i,disabled:o,disabledDates:a,error:s,hideInputKeyboard:l,value:c,valueEnd:d,onChange:u,onFocus:f,onBlur:h,onYearMonthDisplayChange:p,withButton:g=!0,variant:m="range",numberOfDays:b=7,readOnly:v,id:y,allowDisabledSelection:x,zIndex:w}=r,$=X(r,["minDate","maxDate","disabled","disabledDates","error","hideInputKeyboard","value","valueEnd","onChange","onFocus","onBlur","onYearMonthDisplayChange","withButton","variant","numberOfDays","readOnly","id","allowDisabledSelection","zIndex"]);const[C,S]=t.useState(),[j,k]=t.useState(void 0),[D,T]=t.useState(!1),[E,O]=t.useState(!1),F="week"===m,I="fixed-range"===m,[{selectedStart:_,selectedEnd:M,currentFocus:A,calendarOpen:B,isStartDirty:R,isEndDirty:z,focused:P},L]=(({initialState:e,reducers:r,name:n,debug:i})=>{const[o,a]=t.useReducer(((e,t)=>r[t.type]?r[t.type](e,t.payload):e),e);return[o,Object.fromEntries(Object.keys(r).map((e=>[e,t=>{i&&Wh(n,e,t),a({type:e,payload:t})}])))]})({name:"date-range-input",initialState:Uh,reducers:{blur:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1,focused:!1}),dismiss:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),changeStart:(e,t)=>Object.assign(Object.assign({},e),{selectedStart:t,isStartDirty:!0}),changeEnd:(e,t)=>Object.assign(Object.assign({},e),{selectedEnd:t,isEndDirty:!0}),reselectStart:e=>Object.assign(Object.assign({},e),{selectedStart:"",currentFocus:"start"}),reselectEnd:e=>Object.assign(Object.assign({},e),{selectedEnd:"",currentFocus:"end"}),focus:(e,t)=>Object.assign(Object.assign({},e),{currentFocus:F?"none":I?"start":t,calendarOpen:!v,focused:!0}),cancel:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1}),done:(e,t)=>Object.assign(Object.assign({},e),{selectedStart:t.start,selectedEnd:t.end,initialStart:t.start,initialEnd:t.end,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),resetStart:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart}),resetEnd:e=>Object.assign(Object.assign({},e),{selectedEnd:e.initialEnd}),resetRange:(e,t)=>Object.assign(Object.assign({},e),{initialStart:t.start,selectedStart:t.start,initialEnd:t.end,selectedEnd:t.end})}}),N=t.useRef(!1),H=t.useRef(null),W=t.useRef(null),V=t.useRef(null),Y=t.useRef(null),U=(({maxWidth:e,targetRef:r})=>{const[n,i]=t.useState(!1);return qe({targetRef:r,refreshMode:"throttle",refreshRate:300,handleHeight:!1,onResize:t.useCallback((t=>{i(t<=e)}),[e])}),n})({maxWidth:320,targetRef:H});t.useEffect((()=>{L.resetRange({start:Zc.sanitizeInput(c),end:Zc.sanitizeInput(d)})}),[c,d]),t.useEffect((()=>{"start"===A?S(_):"end"===A&&S(M)}),[A]);const K=e=>{var t,r,n;"Enter"!==e.code||g||(_&&M?(L.done({start:_,end:M}),null==u||u(_,M)):(L.dismiss(),null===(t=H.current)||void 0===t||t.focus(),null===(r=V.current)||void 0===r||r.resetPlaceholder(),null===(n=Y.current)||void 0===n||n.resetPlaceholder()))},q=e=>{var t;if(le(e))return void(N.current=!0);if(L.changeStart(e),null===(t=W.current)||void 0===t||t.setCalendarDate(e),N.current=!1,!e)return void(g||M||!z||(L.resetRange({start:"",end:""}),null==u||u("","")));if(!M)return void L.focus("end");if(Ic(e).isAfter(M,"day"))L.reselectEnd();else{if(z)return g?void 0:(L.done({start:e,end:M}),void(null==u||u(e,M)));L.focus("end")}},G=e=>{var t,r;if(le(e))return void(N.current=!0);if(Ic(e).isBefore(_,"day"))return L.changeStart(e),null===(t=W.current)||void 0===t||t.setCalendarDate(e),void L.reselectEnd();if(L.changeEnd(e),null===(r=W.current)||void 0===r||r.setCalendarDate(e),e){if(_)return g?void 0:(L.done({start:_,end:e}),void(null==u||u(_,e)));L.focus("start")}else g||_||!R||(L.resetRange({start:"",end:""}),null==u||u("",""))},Z=e=>{var t;if(le(e))return void(N.current=!0);if(L.changeStart(e),null===(t=W.current)||void 0===t||t.setCalendarDate(e),N.current=!1,!e)return void(g?L.changeEnd(""):(L.resetRange({start:"",end:""}),null==u||u("","")));const r=Ic(e).format("YYYY-MM-DD"),n=Ic(r).add(b-1,"day").format("YYYY-MM-DD");return L.changeStart(r),L.changeEnd(n),N.current=!1,g?void 0:(L.done({start:r,end:n}),void(null==u||u(r,n)))},Q=()=>{v||o||P||(L.focus("start"),null==f||f())},J=e=>{var t,r;P&&!B&&H.current&&H.current.contains(e.relatedTarget)&&(L.blur(),T(!1),O(!1),null===(t=V.current)||void 0===t||t.resetPlaceholder(),null===(r=Y.current)||void 0===r||r.resetPlaceholder(),null==h||h())},ee=e=>t=>{t.stopPropagation(),v||(L.focus(e),te(),re(),P||null==f||f())},te=()=>{if(F){const e=Gc.toDayjs(_).startOf("week").format("YYYY-MM-DD");T(!0),O(!0),S(e)}},re=()=>{I&&(O(!0),S(_))},ne=e=>{var t;e&&!N.current||(L.resetStart(),null===(t=V.current)||void 0===t||t.resetInput())},ie=e=>{var t;e&&!N.current||(L.resetEnd(),null===(t=Y.current)||void 0===t||t.resetInput())},oe=e=>{switch(m){case"week":(e=>{const t=Ic(e).startOf("week").format("YYYY-MM-DD"),r=Ic(e).endOf("week").format("YYYY-MM-DD");if(L.changeStart(t),L.changeEnd(r),N.current=!1,!g)L.done({start:t,end:r}),null==u||u(t,r)})(e);break;case"fixed-range":Z(e);break;default:"start"===A?q(e):"end"===A&&G(e)}},ae=e=>{var t;switch(null===(t=H.current)||void 0===t||t.focus(),e){case"reset":L.cancel();break;case"confirmed":L.done({start:_,end:M}),null==u||u(_,M)}},se=e=>{k(e)},le=e=>!x&&e&&Zc.isDateDisabled(e,{disabledDates:a,minDate:n,maxDate:i}),ce=e=>{let t={start:void 0,end:void 0};switch(m){case"range":t={start:"start"===A?j:void 0,end:"end"===A?j:void 0};break;case"week":if(!j)return;t={start:Ic(j).startOf("week").format("YYYY-MM-DD"),end:Ic(j).endOf("week").format("YYYY-MM-DD")};break;case"fixed-range":if(!j)return;t={start:Ic(j).format("YYYY-MM-DD"),end:Ic(j).add(b-1,"day").format("YYYY-MM-DD")}}return t[e]};return e.jsx(yh,{enabled:!v&&!o,isOpen:B,onClose:()=>{var e,t;L.blur(),T(!1),O(!1),null===(e=V.current)||void 0===e||e.resetPlaceholder(),null===(t=Y.current)||void 0===t||t.resetPlaceholder(),null==h||h()},onDismiss:()=>{var e,t,r;L.dismiss(),null===(e=H.current)||void 0===e||e.focus(),null===(t=V.current)||void 0===t||t.resetPlaceholder(),null===(r=Y.current)||void 0===r||r.resetPlaceholder()},renderElement:()=>e.jsx(Vh,Object.assign({ref:H,tabIndex:-1,onFocus:Q,onBlur:J,$focused:P,$disabled:o,$readOnly:v,$error:s,$wrap:U,id:y,"data-testid":$["data-testid"],onKeyDown:K},$,{children:e.jsxs(Hh,{currentActive:A,wrap:U,error:s,children:[e.jsx(Yh,{$wrap:U,children:e.jsx(Th,{ref:V,placeholder:"From",names:["start-day","start-month","start-year"],value:_,disabled:o,readOnly:D||v,focused:"start"===A,hoverValue:ce("start"),onChange:I?Z:q,onFocus:ee("start"),onBlur:ne,hideInputKeyboard:l})}),e.jsx(Yh,{$wrap:U,children:e.jsx(Th,{ref:Y,placeholder:"To",names:["end-day","end-month","end-year"],value:M,disabled:o,readOnly:E||v,focused:"end"===A,hoverValue:ce("end"),onChange:G,onFocus:ee("end"),onBlur:ie,hideInputKeyboard:l})})]})})),renderDropdown:({elementWidth:t})=>e.jsx(fu,{ref:W,variant:m,initialCalendarDate:C,withButton:g,value:_,endValue:M,selectWithinRange:R||z,currentFocus:A,disabledDates:a,minDate:n,maxDate:i,allowDisabledSelection:x,onSelect:oe,onDismiss:ae,onHover:se,onYearMonthDisplayChange:p,numberOfDays:b,width:t}),customZIndex:w,offset:16})},qh=K.default.div`
    position: relative;

    ${e=>{const{$xxlStart:t,$xxlSpan:r,$xlStart:n,$xlSpan:o,$lgStart:a,$lgSpan:s,$mdStart:l,$mdSpan:c,$smStart:d,$smSpan:u,$xsStart:f,$xsSpan:h,$xxsStart:p,$xxsSpan:g}=e;return i.css`
            grid-column: ${t||"auto"} / span ${r||1};

            ${Ts.MaxWidth.xl} {
                grid-column: ${n||"auto"} / span ${o||1};
            }

            ${Ts.MaxWidth.lg} {
                grid-column: ${a||"auto"} / span ${s||1};
            }

            ${Ts.MaxWidth.md} {
                grid-column: ${l||"auto"} / span ${c||1};
            }

            ${Ts.MaxWidth.sm} {
                grid-column: ${d||"auto"} / span ${u||1};
            }

            ${Ts.MaxWidth.xs} {
                grid-column: ${f||"auto"} / span ${h||1};
            }

            ${Ts.MaxWidth.xxs} {
                grid-column: ${p||"auto"} / span ${g||1};
            }
        `}}
`,Xh=Y.default.forwardRef(((t,r)=>{const n=i.useTheme(),{xxlCols:o,xlCols:a,lgCols:s,mdCols:l,smCols:c,xsCols:d,xxsCols:u}=t,f=X(t,["xxlCols","xlCols","lgCols","mdCols","smCols","xsCols","xxsCols"]),h=(e,t,r)=>{if(!e)return{start:void 0,span:void 0};if("development"===process.env.NODE_ENV&&("number"==typeof e&&e>t?console.warn(`Warning: ${r}Cols exceeds maximum (${t}): ${e}`):Array.isArray(e)&&(e[0]>t+1||e[1]>t+1)&&console.warn(`Warning: ${r}Cols array exceeds maximum (${t}): [${e[0]}, ${e[1]}]`)),Array.isArray(e)){const[r,n]=e;if(-1===n)return{start:r,span:t-r+1};return{start:r,span:Math.min(n-r,t)}}return{start:void 0,span:Math.min(e,t)}};return e.jsx(qh,Object.assign({ref:r},(()=>{const e=ks["xxl-column"]({theme:n}),t=ks["xl-column"]({theme:n}),r=ks["lg-column"]({theme:n}),i=ks["md-column"]({theme:n}),f=ks["sm-column"]({theme:n}),p=ks["xs-column"]({theme:n}),g=ks["xxs-column"]({theme:n}),m=h(o||a||s||l||c||d||u,e,"xxl"),b=h(a||s||l||c||d||u,t,"xl"),v=h(s||l||c||d||u,r,"lg"),y=h(l||c||d||u,i,"md"),x=h(c||d||u,f,"sm"),w=h(d||u,p,"xs"),$=h(u,g,"xxs");return{$xxlStart:m.start,$xxlSpan:m.span,$xlStart:b.start,$xlSpan:b.span,$lgStart:v.start,$lgSpan:v.span,$mdStart:y.start,$mdSpan:y.span,$smStart:x.start,$smSpan:x.span,$xsStart:w.start,$xsSpan:w.span,$xxsStart:$.start,$xxsSpan:$.span}})(),f))})),Gh={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},Zh=e=>Object.keys(Gh).reduce(((t,r)=>{const n=Gh[r];return t[r]=`@media screen and (${e}: ${n}px)`,t}),{}),Qh={MaxWidth:Zh("max-width"),MinWidth:Zh("min-width")},Jh=Gh,ep=K.default.div`
    position: relative;
    ${e=>{const{$desktopStart:t,$desktopSpan:r,$tabletStart:n,$tabletSpan:o,$mobileStart:a,$mobileSpan:s}=e;return i.css`
            grid-column: ${t||"auto"} / span ${r||1};

            ${Qh.MaxWidth.tablet} {
                grid-column: ${n||"auto"} / span
                    ${o||1};
            }

            ${Qh.MaxWidth.mobileL} {
                grid-column: ${a||"auto"} / span
                    ${s||1};
            }
        `}}
`,tp=Y.default.forwardRef(((t,r)=>{const{mobileCols:n,tabletCols:i,desktopCols:o}=t,a=X(t,["mobileCols","tabletCols","desktopCols"]);return e.jsx(ep,Object.assign({ref:r},(()=>{const e=i||n,t=n,r=rp(o||i||n),a=rp(e),s=rp(t);return{$desktopSpan:r.span,$desktopStart:r.start,$mobileSpan:s.span,$mobileStart:s.start,$tabletSpan:a.span,$tabletStart:a.start}})(),a))})),rp=e=>{if(Array.isArray(e)&&e.length>1){const[t,r]=e,n=t<=r?t:r,i=t<=r?r:t;let o;return o=i===n?1:i-n,{start:n,span:o}}return"number"==typeof e?{start:void 0,span:e}:{start:void 0,span:void 0}},np=()=>e=>{let t;t="function"==typeof e.$color?e.$color(e):e.$color||Ks.border(e);const r=encodeURIComponent(t),n=e.$thickness||1,o=n+1;return i.css`
        background-color: transparent;
        height: ${n}px;
        background-repeat: repeat-x;
        background-image: url('data:image/svg+xml,<svg width="8" height="${n}" viewBox="0 0 8 1" xmlns="http://www.w3.org/2000/svg"><line x1="2" y1="1" x2="6" y2="1" stroke="${r}" stroke-width="${o}" stroke-dasharray="4 4" /></svg>');
    `},ip=K.default.hr`
    width: 100%;
    margin: 0;
    border: none;
    ${e=>{switch(e.$lineStyle){case"dashed":return i.css`
                    ${np}
                `;case"solid":return i.css`
                    height: ${e.$thickness}px;
                    background-color: ${e.$color||Ks.border};
                `}}}
`,op=t=>{var{thickness:r=1,lineStyle:n="solid",layoutType:i="flex",color:o,className:a,xxsCols:s,xsCols:l,smCols:c,mdCols:d,lgCols:u,xlCols:f,xxlCols:h,mobileCols:p,tabletCols:g,desktopCols:m}=t,b=X(t,["thickness","lineStyle","layoutType","color","className","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","mobileCols","tabletCols","desktopCols"]);const v=void 0!==p||void 0!==g||void 0!==m;switch(i){case"flex":return e.jsx(ip,Object.assign({className:a,$thickness:r,$lineStyle:n,$color:o},b));case"grid":return v?e.jsx(tp,Object.assign({className:a,mobileCols:p,tabletCols:g,desktopCols:m},b,{children:e.jsx(ip,{$thickness:r,$lineStyle:n,$color:o})})):e.jsx(Xh,Object.assign({className:a},(()=>{const e=s||[1,-1],t=l||e,r=c||t,n=d||r,i=u||n,o=f||i;return{xxlCols:h||o,xlCols:o,lgCols:i,mdCols:n,smCols:r,xsCols:t,xxsCols:e}})(),b,{children:e.jsx(ip,{$thickness:r,$lineStyle:n,$color:o})}))}},ap=K.default.div`
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
`,sp=K.default.div`
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
`,lp=({show:r=!1,rootId:n,onOverlayClick:i,children:o,backgroundOpacity:a,backgroundBlur:s=!0,disableTransition:l=!1,enableOverlayClick:c=!1,zIndex:d,id:u})=>{const[f,h]=t.useState(null),[p,m]=t.useState(),[b]=t.useState((()=>Qc.generate())),v=g.useFloatingNodeId(),y=t.useRef(),x=t.useRef(null),w=o&&Y.default.cloneElement(o,{ref:x}),$=u?`lifesg-ds-overlay-root-${u}`:"lifesg-ds-overlay-root",C=null!=d?d:p?99999:99998;(e=>{const r=g.useFloatingTree();t.useEffect((()=>{if(!r)return;const t={zIndex:e};r.events.emit(gh.Change,t)}),[r,e]),t.useEffect((()=>{if(!r)return;const t=()=>{const t={zIndex:e};r.events.emit(gh.Change,t)};return null==r||r.events.on(gh.Ready,t),()=>null==r?void 0:r.events.off(gh.Ready,t)}),[r,e])})(C),t.useEffect((()=>(D(),h(j()),()=>{F(),E().length<1&&T("remove")})),[]),t.useEffect((()=>{if(r){const e=k();S(e),O();const t=setTimeout((()=>{T("add")}),200);return()=>clearTimeout(t)}{F();const e=setTimeout((()=>{E().length<1&&T("remove")}),200);return()=>clearTimeout(e)}}),[r]);const S=e=>{y.current=e,m(e)},j=()=>document&&n?document.getElementById(n):document?document.body:null,k=()=>E().length>0,D=()=>{if(!document.getElementById(dp)){const e=document.createElement("style");e.id=dp;const t=document.documentElement.clientWidth,r=window.innerWidth-t;e.innerHTML=`\n\t\t\t\t.${up} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${r}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${up}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},T=e=>{const t=document.body.classList.contains(up);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove(up):document.body.classList.add(up)},E=()=>{const e=document.body.dataset.lifesgDsOverlayOrder;return e?e.split(","):[]},O=()=>{const e=E();document.body.dataset.lifesgDsOverlayOrder=[...e,b].join(",")},F=()=>{const e=E();document.body.dataset.lifesgDsOverlayOrder=e.filter((e=>e!==b)).join(",")},I=e=>{var t;const r=null===(t=x.current)||void 0===t?void 0:t.firstChild;r&&r.contains(e.target)||i&&c&&(e.preventDefault(),i())};return f?U.default.createPortal(e.jsx(ap,{id:$,"data-testid":$,$show:r,$zIndex:C,children:o&&e.jsx(g.FloatingNode,{id:v,children:e.jsx(sp,{"data-testid":"overlay-wrapper",$show:r,$stacked:p,$backgroundBlur:s,$disableTransition:l,onClick:I,children:w})})}),f):null},cp=t=>e.jsx(g.FloatingTree,{children:e.jsx(lp,Object.assign({},t))}),dp="lifesg-ds-overlay-stylesheet",up="lifesg-ds-overlay-open",fp=K.default.div`
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
`,hp=K.default.div`
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
`,pp=K.default(nl)`
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
`,gp=K.default(exports.Typography.HeadingMD)`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`,mp=K.default.div`
    flex: 1;
    overflow-y: auto;
`,bp=({className:t,progress:r,color:n,"data-testid":i})=>e.jsx(vp,{className:t,$innerWidth:r,$color:n,"data-testid":i,children:e.jsx("progress",{value:100*r,max:100})}),vp=K.default.div`
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
`,yp=K.default.div`
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
`,xp=r=>{var{id:n="modal",show:i,animationFrom:o="bottom",children:a,enableOverlayClick:s=!0,rootComponentId:l,zIndex:c,onOverlayClick:d,dismissKeyboardOnShow:u=!0}=r,f=X(r,["id","show","animationFrom","children","enableOverlayClick","rootComponentId","zIndex","onOverlayClick","dismissKeyboardOnShow"]);const[h,p]=t.useState(),[g,m]=t.useState();t.useEffect((()=>window.visualViewport?(v(),window.visualViewport.addEventListener("resize",v),()=>{var e;null===(e=window.visualViewport)||void 0===e||e.removeEventListener("resize",v)}):(b(),window.addEventListener("resize",b),()=>{window.removeEventListener("resize",b)})),[]),t.useEffect((()=>{var e,t;i&&u&&(null===(t=null===(e=document.activeElement)||void 0===e?void 0:e.blur)||void 0===t||t.call(e))}),[i]);const b=()=>{const e=.01*window.innerHeight;p(e)},v=()=>{if(window.visualViewport){const e=.01*window.visualViewport.height;p(e),m(window.visualViewport.offsetTop)}};return e.jsx(cp,{"data-testid":`${n}-overlay`,show:i,enableOverlayClick:s,onOverlayClick:d,id:n,rootId:l,zIndex:c,children:e.jsx(yp,Object.assign({show:i,animationFrom:o,"data-testid":n,verticalHeight:h,offsetTop:g},f,{children:a}))})},wp=K.default.div`
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
`,$p=K.default(nl)`
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
`,Cp=t=>{var{id:r="modal-box",children:n,onClose:i,showCloseButton:o=!0}=t,a=X(t,["id","children","onClose","showCloseButton"]);return e.jsxs(wp,Object.assign({"data-testid":r},a,{onClick:e=>{e.stopPropagation()},children:[o&&e.jsx($p,{onClick:i,"data-testid":"close-button",focusHighlight:!1,focusOutline:"browser",children:e.jsx(m.CrossIcon,{})}),n]}))},Sp=Object.assign(xp,{Box:Cp}),jp=i.css`
    ${e=>`\n        ${el.MaxWidth.sm(e)},\n        (orientation: landscape) and (max-height: ${Js["sm-max"](e)}px)\n    `}
`,kp=i.css`
    ${e=>`\n        @media (orientation: landscape) and (max-height: ${Js["sm-max"](e)}px)\n    `}
`,Dp=K.default.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    ${e=>i.css`
            ${Gs.Util["dashed-default"]({radius:Qs.sm,thickness:Gs["width-040"],colour:e.$disabled?Ks["border-disabled"]:Ks.border})}

            background-color: ${e.$disabled?Ks["bg-disabled"]:Ks.bg};
        `}
    height: 14.125rem;
`,Tp=K.default(Hl.Default)`
    width: fit-content;
    margin: 0 ${Zs["spacing-20"]};

    :disabled {
        border-color: ${Ks["border-strong"]};
    }
`,Ep=K.default(Ih)`
    position: absolute;
    top: ${Zs["spacing-16"]};
    right: ${Zs["spacing-16"]};

    :disabled {
        border-color: ${Ks["border-strong"]};
    }
`,Op=K.default.img`
    display: block;
    object-fit: contain;
    object-position: center;
    width: calc(100% - (3rem + ${Zs["spacing-16"]}) * 2);
    height: 100%;
`,Fp=K.default.div`
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
`,Ip=K.default(exports.Typography.BodySM)`
    margin-top: ${Zs["spacing-16"]};
`,_p=K.default(Sp)`
    /* increase specificity as the styles are overwritten */
    && {
        height: 100%;
        overflow-y: auto;
    }
`,Mp=K.default.div`
    width: 100%;
    margin: auto;
    padding: ${Zs["layout-xxl"]} ${Zs["layout-sm"]};

    ${jp} {
        padding: 0;
        width: 100%;
        height: 100%;
    }
`,Ap=K.default(Sp.Box)`
    width: 100%;
    height: 29rem;
    max-width: 672px;
    max-height: none;
    margin: 0 auto;
    padding: ${Zs["spacing-16"]};

    ${jp} {
        display: flex;
        flex-direction: column;
        max-width: none;
        height: 100%;
        border-radius: 0;
        padding: 0;

        --close-button-top-inset: ${Zs["spacing-8"]};
        --close-button-right-inset: ${Zs["spacing-20"]};
    }
`,Bp=K.default.h2`
    ${qs["body-baseline-semibold"]}
    color: ${Ks.text};
    margin-bottom: ${Zs["spacing-16"]};
    text-align: center;

    ${jp} {
        ${qs["body-md-semibold"]}
        margin: ${Zs["spacing-12"]} 0;
    }
`,Rp=K.default.div`
    width: 100%;
    height: 20rem;
    border-radius: ${Qs.lg};
    overflow: hidden;

    ${jp} {
        border-radius: 0;
        flex: 1;
    }

    ${kp} {
        background: ${Ks["bg-strong"]};
    }
`,zp=K.default.div`
    position: relative;
    width: 100%;
    height: 100%;
    background: ${Ks["bg-stronger"]};
    margin: auto;

    ${jp} {
        aspect-ratio: 4/3;
    }
    ${el.MaxWidth.sm} {
        width: 100%;
        height: auto;
    }
    ${kp} {
        width: auto;
        height: 100%;
    }
`,Pp=K.default.div`
    position: absolute;
    left: 50%;
    top: calc(75% - 1px);
    width: 300px;
    height: 2px;
    transform: translateX(-50%);
    background-color: ${Ks["border-strong"]};
    pointer-events: none;

    ${jp} {
        width: calc(100% - ${Zs["spacing-40"]});
        max-width: 300px;
        left: 50%;
    }
`,Lp=K.default.div`
    display: flex;
    justify-content: space-between;
    margin-top: ${Zs["spacing-16"]};

    ${el.MaxWidth.sm} {
        flex-direction: column-reverse;
        margin: ${Zs["spacing-16"]} ${Zs["spacing-24"]}
            ${Zs["spacing-48"]};
        gap: ${Zs["spacing-16"]};
    }

    ${kp} {
        flex-direction: row;
        margin: ${Zs["spacing-16"]} ${Zs["spacing-20"]};
    }
`,Np=K.default(Hl.Default)`
    width: 8.5rem;
    ${el.MaxWidth.sm} {
        width: 100%;
    }
    ${kp} {
        height: 2.5rem;
    }
`,Hp=K.default.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`,Wp=K.default.canvas`
    cursor: crosshair;
`,Vp=t.lazy((()=>G(void 0,void 0,void 0,(function*(){return{default:(yield Promise.resolve().then((function(){return require("./e-signature-canvas.da73056e.js")}))).ESignatureCanvas}})))),Yp=r=>{const{description:n,id:o,loadingProgress:a,loadingLabel:s="Uploading...",onChange:l,value:c,disabled:d}=r,f=X(r,["description","id","loadingProgress","loadingLabel","onChange","value","disabled"]),[h,p]=t.useState(!1),g=t.useRef(null),[m,b]=t.useState(c),v=i.useTheme(),y=Js["sm-max"]({theme:v}),x=bc.useMediaQuery({maxWidth:y}),w=bc.useMediaQuery({maxHeight:y,orientation:"landscape"}),$=()=>{var e;null===(e=g.current)||void 0===e||e.clear()},C=()=>{if(g.current){const e=g.current.export();b(e),p(!1),null==l||l(e)}};t.useEffect((()=>{b(c)}),[c]);return e.jsxs("div",Object.assign({},f,{children:[e.jsx(Dp,{$disabled:d,children:"number"==typeof a?e.jsxs(Fp,{children:[s&&e.jsx(exports.Typography.BodyMD,{children:s}),e.jsx(bp,{progress:null!=a?a:0,"data-testid":`${o||"e-signature"}-progress-bar`})]}):m?e.jsxs(e.Fragment,{children:[e.jsx(Op,{src:m,alt:"Signature preview"}),e.jsx(Ep,{styleType:"light",onClick:()=>p(!0),id:o,"aria-label":"Edit signature",disabled:d,children:e.jsx(u.PencilIcon,{})})]}):e.jsx(Tp,{type:"button",styleType:"secondary","aria-label":"Add signature",id:o,onClick:()=>p(!0),disabled:d,children:"Add signature"})}),e.jsx(_p,{"data-testid":"signature-modal",show:h,children:e.jsx(Mp,{children:e.jsxs(Ap,{onClose:()=>p(!1),children:[e.jsx(Bp,{children:"Signature"}),e.jsx(Rp,{children:e.jsxs(zp,{children:[e.jsx(Pp,{}),e.jsx(t.Suspense,{fallback:null,children:h&&e.jsx(Vp,{ref:g,baseImageDataURL:m})})]})}),e.jsxs(Lp,{children:[e.jsx(Np,{as:w?bd.Small:bd.Default,type:"button",styleType:x&&!w?"light":"link",icon:e.jsx(u.EraserIcon,{}),onClick:$,children:"Clear"}),e.jsx(Np,{as:w?Hl.Small:Hl.Default,type:"button",onClick:C,children:"Save"})]})]})})}),n?e.jsx(Ip,{children:n}):null]}))},Up="https://assets.life.gov.sg/react-design-system/img/feedback-rating/feedback-rating-banner.png",Kp="Submit",qp="Rate your experience",Xp=5,Gp=K.default.input`
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
`,Zp=i.css`
    width: 2.75rem;
    height: 2.75rem;
    color: ${Ks["icon-primary"]};
    ${Gp}:focus-visible + & {
        outline: ${Gs["width-020"]} ${Gs.solid}
            ${Ks["icon-primary"]};
        outline-offset: -1px;
        border-radius: ${Qs.sm};
    }
`,Qp=K.default(b.StarIcon)`
    ${Zp}
`,Jp=K.default(v.StarFillIcon)`
    ${Zp}
`,eg=K.default.label`
    margin: 0 ${Zs["spacing-8"]};
    line-height: 0;
    display: flex;
    align-items: center;
    ${el.MaxWidth.md} {
        margin: 0 ${Zs["spacing-8"]};
    }
`,tg=K.default.div`
    display: flex;
    justify-content: center;
    margin: ${Zs["spacing-8"]} ${Zs["spacing-16"]};
`,rg=t=>{const{description:r,rating:n,onRatingChange:i}=t,o=t=>{const r=`${t} star${1===t?"":"s"}`;return t<=n?e.jsx(Jp,{"aria-label":r}):e.jsx(Qp,{"aria-label":r})};return e.jsx(tg,{role:"radiogroup","aria-label":r,children:[...Array(Xp)].map(((t,r)=>{const a=r+1;return e.jsxs(eg,{children:[e.jsx(Gp,{type:"radio",name:"star",checked:a===n,onChange:()=>(e=>{i(e)})(a)}),o(a)]},a)}))})},ng=K.default.img`
    width: 9.5rem;
    height: 9.5rem;
    margin: 0 1rem;
    ${el.MaxWidth.md} {
        width: 5.5rem;
        height: 5.5rem;
        margin: 0;
    }
`,ig=K.default.div`
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
`,og=K.default.div`
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
`,ag=K.default(Hl.Default)`
    margin-top: 1rem;
    width: 100%;
`,sg=K.default.div`
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
`,lg=K.default.div`
    display: flex;
    flex-direction: column;
    margin-bottom: ${Zs["spacing-32"]};
`,cg=K.default.p`
    ${qs["heading-xs-regular"]}
    color: ${Ks.text};
    margin-bottom: ${Zs["spacing-8"]};
`,dg=K.default.div`
    ${ql({textSize:"heading-xs"})}
    color: ${Ks.text};
`,ug=K.default.p`
    ${qs["body-md-regular"]}
    color: ${Ks["text-subtler"]};
`,fg=K.default.div`
    ${ql({textSize:"body-md"})}
    color: ${Ks["text-subtler"]};
`,hg=K.default.ul`
    list-style-type: none;
`;var pg;!function(e){e.formatFileSizeDisplay=e=>{if(!e||0===e)return"0 KB";const t=Math.floor(Math.log(e)/Math.log(1024));return`${Number(e/Math.pow(1024,t)).toFixed(0)} ${["B","KB","MB","GB","TB","PB","EB","ZB","YB"][t]}`},e.isSupportedImageType=e=>["image/avif","image/gif","image/jpeg","image/png","image/svg+xml","image/webp"].includes(e)}(pg||(pg={}));const gg=({src:t,alt:r,className:n,"data-testid":i})=>e.jsx("img",{src:t,alt:r||"",className:n,"data-testid":i,onError:e=>{e.target.onerror=null,e.target.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAABQCAYAAACeXX40AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARTSURBVHgB7Z1tUuJAEIY7qMRYWnIE9wR6BD2Be5S9weoN1pusJ1iPwJ5guYH4GeNH2HkppgojYAIhbXrepwoJEMofPHZP9zQxkgJpmh5HUfTdHZ6624EQsiLOp7676+d5fp4kyeDda/5gNBr1siz76Q5/CCHr41ccx+dOyiEejAWcyHflDg+FkDWDiNjtdk8gYQdPTCIf5SON4ALe0cQ5idya78CZ+E8IaRgn4gki4JkQogCK3Y77wdRLtDiNnp6eRkKIEh0hRBEKSFShgEQVCkhUoYBEFQpIVKGARBUKSFShgEQVCkhUoYBEFQpIVNkUokqWZfLy8iJvb2/jx1tbWxLHsWxsbEgIcBpGCQh3e3srr6+vH16Lokh2dnbGN+swAioA+a6vrzERPPN1PP/w8CB5nsvu7q5YhmvAhoFciHzz5JsmTVNxGUosQwEbBmu+WWl3Ho+Pj6VkbSsUsGGqRjSka6Riq1DAhllGJkZAUhuocKtCAUltLNPfs9wTpIAL8M3hOtne3q50PhrTnY7dj4kCzgFrteFwKM/Pz1In3W53vNNRFvYBA+Xm5mYs4bzdilWAVJubn+8B7O3tlTqvzVDAGaAB7KVDAXB/f19rIYCU2uv1JEmSmUUJpMPrVdN1G+FecAGs+5B6i+0SpM79/X2pG/weyI57yIiCw3rUm4Z7wVMgyt3d3c3s1WEtiMiIqFUniIaQO1SYgqfALgVGo+aBVFx3URI6FHACoh4mUD4DRYnlrbGmoYATUPWWKTRwDtaIlncnmoQCyvuqtwwoVJCOyeoELyBkKpN6i2C9iFEpshrBC1h2OHQWEHeZogTvwVwgCVxARLBVdzmqFiUQD+/BbR17zW0jWAHx4deRQhE9yxYwfu3oz10l+lohWAHLSlMGRFE0sBfhhxumoyXeF3oxE6SAiHx1pz+k1nnj9pDODzcUwXusf/FoEcEJiKizruoVUbC4k+LlW7TW9F/BDJHgBFz3uqu4l4zHnxU6fuwrxPVgUAKi4bzuytNf8cAPNpRt0yByhthXDGYcC1EIVyNoCoxUVW3xYBwLQ6hVJqbbThAR0EejJlmmv+iHX0NaDwYhYB0N56bw68FQMC8gxMPar02EtB40LyBSbxurS7RmFg3HWsG0gG1KvbNo6x9PFcwKiOixzJjVV2K6pWMVkwL6atIC1ke3TArY9tRbpMxuSlsxJ2Abq94yWE3F5gS0+kFZ/R6KKQFRdFieMsbYlrXobkbAUJq31ka3zFyaAwKGsomPqrjuS4RowYsTEVX4xXSiCgUkqlBAogoFJKpQQKIKBSSqUECiCgUkqlBAogoFJKpAwIEQokO/k+f5pRCiQBRF/ShN02N38EcIaZjRaPStkyTJlYuCF0JIs1w49wbj/5TnTOxlWYYoeCSErJ+/cRwj8w7HVTAO3BMnjISkAS68fHjw4X+FujXhgbs7cyccCiMiqYeBu126TPsbS77pF/4DuxeyMpdnp3gAAAAASUVORK5CYII="}}),mg=K.default.li`
    display: flex;
    align-items: center;

    width: 100%;
    border: none;

    :not(:last-child) {
        margin-bottom: ${Zs["spacing-16"]};
    }
`,bg=K.default.div`
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
`,vg=K.default.div`
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
`,yg=K.default.div`
    display: flex;
    flex: 1;
    flex-direction: column;

    width: 100%;

    overflow-wrap: break-word;
    word-break: break-all;
    white-space: normal;
`,xg=K.default.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${el.MaxWidth.lg} {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }
`,wg=K.default.div`
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
`,$g=K.default.div`
    ${qs["body-md-regular"]}
    color: ${Ks.text};

    ${el.MaxWidth.lg} {
        ${il(2)}
    }
`;K.default($g)`
    ${qs["body-md-regular"]}
    margin-top: ${Zs["spacing-4"]};
`;const Cg=K.default.div`
    ${qs["body-sm-semibold"]}
    color: ${Ks["text-error"]};
`,Sg=K.default(Cg)`
    margin-top: ${Zs["spacing-4"]};
    ${el.MaxWidth.lg} {
        display: none;
        visibility: hidden;
    }
`,jg=K.default(Cg)`
    display: none;
    visibility: hidden;
    ${el.MaxWidth.lg} {
        display: block;
        visibility: visible;
        margin-top: ${Zs["spacing-8"]};
    }
`,kg=K.default(jl)`
    color: ${Ks["icon-primary"]};
`,Dg=K.default.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    margin-left: ${Zs["spacing-32"]};

    ${el.MaxWidth.lg} {
        margin-left: ${Zs["spacing-16"]};
    }
`,Tg=K.default(Ih)`
    min-width: unset;

    :not(:last-child) {
        margin-right: ${Zs["spacing-16"]};
    }
`,Eg=K.default.div`
    width: auto;
    margin-right: ${Zs["spacing-32"]};

    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: center;

    ${el.MaxWidth.lg} {
        margin-right: ${Zs["spacing-16"]};
    }
`,Og=K.default(gg)`
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
`,Fg=t.memo((({fileItem:r,onDownload:n})=>{const{id:o,name:a,size:s,errorMessage:l,thumbnailImageDataUrl:c,truncateText:d=!0,ready:f=!0}=r,[h,p]=t.useState(!1),[g,m]=t.useState(!1),b=pg.formatFileSizeDisplay(s),v=i.useTheme(),y=Js["sm-max"]({theme:v}),x=bc.useMediaQuery({maxWidth:y}),[w,$]=t.useState(),C=t.useRef(null);t.useEffect((()=>{C.current&&$(x?S(a):a)}),[a,x]);const S=e=>{if(!d)return e;const t=C&&C.current?C.current.getBoundingClientRect().width:0;return Jc.truncateTwoLines(e,t,16,1.5)},j=()=>e.jsxs(e.Fragment,{children:[e.jsx($g,{ref:C,children:w}),g&&e.jsx(Sg,{children:l||"Something went wrong"})]});return e.jsx(mg,{"data-testid":o,children:e.jsxs(bg,{onClick:()=>G(void 0,void 0,void 0,(function*(){if(f&&!h){p(!0);try{m(!1),yield n(r)}catch(e){m(!0)}finally{p(!1)}}})),children:[(()=>{let t;var r;return c?(r=c,t=e.jsxs(e.Fragment,{children:[e.jsx(Eg,{"data-testid":`${o}-thumbnail`,children:e.jsx(Og,{"data-testid":`${o}-thumbnail-image`,src:r})}),e.jsxs(xg,{children:[e.jsx(yg,{children:j()}),e.jsx(wg,{children:b||"-"}),g&&e.jsx(jg,{children:l||"Something went wrong"})]})]})):t=e.jsxs(e.Fragment,{children:[e.jsx(yg,{children:j()}),e.jsx(wg,{children:b||"-"}),g&&e.jsx(jg,{children:l||"Something went wrong"})]}),e.jsx(vg,{$hasThumbnail:!!c,children:t})})(),e.jsx(Dg,{children:e.jsx(Tg,{"data-testid":`${o}-download-button`,type:"button",styleType:"light",sizeType:"small","aria-label":`download ${a}`,children:h||!f?e.jsx(kg,{size:16,"aria-hidden":!0}):e.jsx(u.DownloadIcon,{"aria-hidden":!0})})})]})})})),Ig={activeId:void 0,setActiveId:()=>{}},_g=t.createContext(Ig);var Mg,Ag={exports:{}},Bg={exports:{}},Rg={};var zg,Pg,Lg,Ng,Hg,Wg,Vg,Yg,Ug,Kg,qg,Xg,Gg,Zg,Qg={};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Jg(){return Pg||(Pg=1,"production"===process.env.NODE_ENV?Bg.exports=function(){if(Mg)return Rg;Mg=1;var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,o=e?Symbol.for("react.profiler"):60114,a=e?Symbol.for("react.provider"):60109,s=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,u=e?Symbol.for("react.suspense"):60113,f=e?Symbol.for("react.suspense_list"):60120,h=e?Symbol.for("react.memo"):60115,p=e?Symbol.for("react.lazy"):60116,g=e?Symbol.for("react.block"):60121,m=e?Symbol.for("react.fundamental"):60117,b=e?Symbol.for("react.responder"):60118,v=e?Symbol.for("react.scope"):60119;function y(e){if("object"==typeof e&&null!==e){var f=e.$$typeof;switch(f){case t:switch(e=e.type){case l:case c:case n:case o:case i:case u:return e;default:switch(e=e&&e.$$typeof){case s:case d:case p:case h:case a:return e;default:return f}}case r:return f}}}function x(e){return y(e)===c}return Rg.AsyncMode=l,Rg.ConcurrentMode=c,Rg.ContextConsumer=s,Rg.ContextProvider=a,Rg.Element=t,Rg.ForwardRef=d,Rg.Fragment=n,Rg.Lazy=p,Rg.Memo=h,Rg.Portal=r,Rg.Profiler=o,Rg.StrictMode=i,Rg.Suspense=u,Rg.isAsyncMode=function(e){return x(e)||y(e)===l},Rg.isConcurrentMode=x,Rg.isContextConsumer=function(e){return y(e)===s},Rg.isContextProvider=function(e){return y(e)===a},Rg.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},Rg.isForwardRef=function(e){return y(e)===d},Rg.isFragment=function(e){return y(e)===n},Rg.isLazy=function(e){return y(e)===p},Rg.isMemo=function(e){return y(e)===h},Rg.isPortal=function(e){return y(e)===r},Rg.isProfiler=function(e){return y(e)===o},Rg.isStrictMode=function(e){return y(e)===i},Rg.isSuspense=function(e){return y(e)===u},Rg.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===n||e===c||e===o||e===i||e===u||e===f||"object"==typeof e&&null!==e&&(e.$$typeof===p||e.$$typeof===h||e.$$typeof===a||e.$$typeof===s||e.$$typeof===d||e.$$typeof===m||e.$$typeof===b||e.$$typeof===v||e.$$typeof===g)},Rg.typeOf=y,Rg}():Bg.exports=(zg||(zg=1,"production"!==process.env.NODE_ENV&&function(){var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,o=e?Symbol.for("react.profiler"):60114,a=e?Symbol.for("react.provider"):60109,s=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,u=e?Symbol.for("react.suspense"):60113,f=e?Symbol.for("react.suspense_list"):60120,h=e?Symbol.for("react.memo"):60115,p=e?Symbol.for("react.lazy"):60116,g=e?Symbol.for("react.block"):60121,m=e?Symbol.for("react.fundamental"):60117,b=e?Symbol.for("react.responder"):60118,v=e?Symbol.for("react.scope"):60119;function y(e){if("object"==typeof e&&null!==e){var f=e.$$typeof;switch(f){case t:var g=e.type;switch(g){case l:case c:case n:case o:case i:case u:return g;default:var m=g&&g.$$typeof;switch(m){case s:case d:case p:case h:case a:return m;default:return f}}case r:return f}}}var x=l,w=c,$=s,C=a,S=t,j=d,k=n,D=p,T=h,E=r,O=o,F=i,I=u,_=!1;function M(e){return y(e)===c}Qg.AsyncMode=x,Qg.ConcurrentMode=w,Qg.ContextConsumer=$,Qg.ContextProvider=C,Qg.Element=S,Qg.ForwardRef=j,Qg.Fragment=k,Qg.Lazy=D,Qg.Memo=T,Qg.Portal=E,Qg.Profiler=O,Qg.StrictMode=F,Qg.Suspense=I,Qg.isAsyncMode=function(e){return _||(_=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),M(e)||y(e)===l},Qg.isConcurrentMode=M,Qg.isContextConsumer=function(e){return y(e)===s},Qg.isContextProvider=function(e){return y(e)===a},Qg.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},Qg.isForwardRef=function(e){return y(e)===d},Qg.isFragment=function(e){return y(e)===n},Qg.isLazy=function(e){return y(e)===p},Qg.isMemo=function(e){return y(e)===h},Qg.isPortal=function(e){return y(e)===r},Qg.isProfiler=function(e){return y(e)===o},Qg.isStrictMode=function(e){return y(e)===i},Qg.isSuspense=function(e){return y(e)===u},Qg.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===n||e===c||e===o||e===i||e===u||e===f||"object"==typeof e&&null!==e&&(e.$$typeof===p||e.$$typeof===h||e.$$typeof===a||e.$$typeof===s||e.$$typeof===d||e.$$typeof===m||e.$$typeof===b||e.$$typeof===v||e.$$typeof===g)},Qg.typeOf=y}()),Qg)),Bg.exports}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/function em(){if(Ng)return Lg;Ng=1;var e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;return Lg=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;var n=Object.getOwnPropertyNames(t).map((function(e){return t[e]}));if("0123456789"!==n.join(""))return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach((function(e){i[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},i)).join("")}catch(e){return!1}}()?Object.assign:function(n,i){for(var o,a,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(n),l=1;l<arguments.length;l++){for(var c in o=Object(arguments[l]))t.call(o,c)&&(s[c]=o[c]);if(e){a=e(o);for(var d=0;d<a.length;d++)r.call(o,a[d])&&(s[a[d]]=o[a[d]])}}return s},Lg}function tm(){if(Wg)return Hg;Wg=1;return Hg="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}function rm(){return Yg?Vg:(Yg=1,Vg=Function.call.bind(Object.prototype.hasOwnProperty))}if("production"!==process.env.NODE_ENV){var nm=Jg();Ag.exports=function(){if(Xg)return qg;Xg=1;var e=Jg(),t=em(),r=tm(),n=rm(),i=function(){if(Kg)return Ug;Kg=1;var e=function(){};if("production"!==process.env.NODE_ENV){var t=tm(),r={},n=rm();e=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}}function i(i,o,a,s,l){if("production"!==process.env.NODE_ENV)for(var c in i)if(n(i,c)){var d;try{if("function"!=typeof i[c]){var u=Error((s||"React class")+": "+a+" type `"+c+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof i[c]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw u.name="Invariant Violation",u}d=i[c](o,c,s,a,null,t)}catch(e){d=e}if(!d||d instanceof Error||e((s||"React class")+": type specification of "+a+" `"+c+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof d+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),d instanceof Error&&!(d.message in r)){r[d.message]=!0;var f=l?l():"";e("Failed "+a+" type: "+d.message+(null!=f?f:""))}}}return i.resetWarningCache=function(){"production"!==process.env.NODE_ENV&&(r={})},Ug=i}(),o=function(){};function a(){return null}return"production"!==process.env.NODE_ENV&&(o=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}),qg=function(s,l){var c="function"==typeof Symbol&&Symbol.iterator,d="<<anonymous>>",u={array:g("array"),bigint:g("bigint"),bool:g("boolean"),func:g("function"),number:g("number"),object:g("object"),string:g("string"),symbol:g("symbol"),any:p(a),arrayOf:function(e){return p((function(t,n,i,o,a){if("function"!=typeof e)return new h("Property `"+a+"` of component `"+i+"` has invalid PropType notation inside arrayOf.");var s=t[n];if(!Array.isArray(s))return new h("Invalid "+o+" `"+a+"` of type `"+v(s)+"` supplied to `"+i+"`, expected an array.");for(var l=0;l<s.length;l++){var c=e(s,l,i,o,a+"["+l+"]",r);if(c instanceof Error)return c}return null}))},element:p((function(e,t,r,n,i){var o=e[t];return s(o)?null:new h("Invalid "+n+" `"+i+"` of type `"+v(o)+"` supplied to `"+r+"`, expected a single ReactElement.")})),elementType:p((function(t,r,n,i,o){var a=t[r];return e.isValidElementType(a)?null:new h("Invalid "+i+" `"+o+"` of type `"+v(a)+"` supplied to `"+n+"`, expected a single ReactElement type.")})),instanceOf:function(e){return p((function(t,r,n,i,o){if(!(t[r]instanceof e)){var a=e.name||d;return new h("Invalid "+i+" `"+o+"` of type `"+((s=t[r]).constructor&&s.constructor.name?s.constructor.name:d)+"` supplied to `"+n+"`, expected instance of `"+a+"`.")}var s;return null}))},node:p((function(e,t,r,n,i){return b(e[t])?null:new h("Invalid "+n+" `"+i+"` supplied to `"+r+"`, expected a ReactNode.")})),objectOf:function(e){return p((function(t,i,o,a,s){if("function"!=typeof e)return new h("Property `"+s+"` of component `"+o+"` has invalid PropType notation inside objectOf.");var l=t[i],c=v(l);if("object"!==c)return new h("Invalid "+a+" `"+s+"` of type `"+c+"` supplied to `"+o+"`, expected an object.");for(var d in l)if(n(l,d)){var u=e(l,d,o,a,s+"."+d,r);if(u instanceof Error)return u}return null}))},oneOf:function(e){return Array.isArray(e)?p((function(t,r,n,i,o){for(var a=t[r],s=0;s<e.length;s++)if(f(a,e[s]))return null;var l=JSON.stringify(e,(function(e,t){return"symbol"===y(t)?String(t):t}));return new h("Invalid "+i+" `"+o+"` of value `"+String(a)+"` supplied to `"+n+"`, expected one of "+l+".")})):("production"!==process.env.NODE_ENV&&o(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),a)},oneOfType:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&o("Invalid argument supplied to oneOfType, expected an instance of array."),a;for(var t=0;t<e.length;t++){var i=e[t];if("function"!=typeof i)return o("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+x(i)+" at index "+t+"."),a}return p((function(t,i,o,a,s){for(var l=[],c=0;c<e.length;c++){var d=(0,e[c])(t,i,o,a,s,r);if(null==d)return null;d.data&&n(d.data,"expectedType")&&l.push(d.data.expectedType)}return new h("Invalid "+a+" `"+s+"` supplied to `"+o+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return p((function(t,n,i,o,a){var s=t[n],l=v(s);if("object"!==l)return new h("Invalid "+o+" `"+a+"` of type `"+l+"` supplied to `"+i+"`, expected `object`.");for(var c in e){var d=e[c];if("function"!=typeof d)return m(i,o,a,c,y(d));var u=d(s,c,i,o,a+"."+c,r);if(u)return u}return null}))},exact:function(e){return p((function(i,o,a,s,l){var c=i[o],d=v(c);if("object"!==d)return new h("Invalid "+s+" `"+l+"` of type `"+d+"` supplied to `"+a+"`, expected `object`.");var u=t({},i[o],e);for(var f in u){var p=e[f];if(n(e,f)&&"function"!=typeof p)return m(a,s,l,f,y(p));if(!p)return new h("Invalid "+s+" `"+l+"` key `"+f+"` supplied to `"+a+"`.\nBad object: "+JSON.stringify(i[o],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var g=p(c,f,a,s,l+"."+f,r);if(g)return g}return null}))}};function f(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function h(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function p(e){if("production"!==process.env.NODE_ENV)var t={},n=0;function i(i,a,s,c,u,f,p){if(c=c||d,f=f||s,p!==r){if(l){var g=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw g.name="Invariant Violation",g}if("production"!==process.env.NODE_ENV&&"undefined"!=typeof console){var m=c+":"+s;!t[m]&&n<3&&(o("You are manually calling a React.PropTypes validation function for the `"+f+"` prop on `"+c+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),t[m]=!0,n++)}}return null==a[s]?i?null===a[s]?new h("The "+u+" `"+f+"` is marked as required in `"+c+"`, but its value is `null`."):new h("The "+u+" `"+f+"` is marked as required in `"+c+"`, but its value is `undefined`."):null:e(a,s,c,u,f)}var a=i.bind(null,!1);return a.isRequired=i.bind(null,!0),a}function g(e){return p((function(t,r,n,i,o,a){var s=t[r];return v(s)!==e?new h("Invalid "+i+" `"+o+"` of type `"+y(s)+"` supplied to `"+n+"`, expected `"+e+"`.",{expectedType:e}):null}))}function m(e,t,r,n,i){return new h((e||"React class")+": "+t+" type `"+r+"."+n+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+i+"`.")}function b(e){switch(typeof e){case"number":case"string":case"undefined":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(b);if(null===e||s(e))return!0;var t=function(e){var t=e&&(c&&e[c]||e["@@iterator"]);if("function"==typeof t)return t}(e);if(!t)return!1;var r,n=t.call(e);if(t!==e.entries){for(;!(r=n.next()).done;)if(!b(r.value))return!1}else for(;!(r=n.next()).done;){var i=r.value;if(i&&!b(i[1]))return!1}return!0;default:return!1}}function v(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function y(e){if(null==e)return""+e;var t=v(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function x(e){var t=y(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return h.prototype=Error.prototype,u.checkPropTypes=i,u.resetWarningCache=i.resetWarningCache,u.PropTypes=u,u},qg}()(nm.isElement,!0)}else Ag.exports=function(){if(Zg)return Gg;Zg=1;var e=tm();function t(){}function r(){}return r.resetWarningCache=t,Gg=function(){function n(t,r,n,i,o,a){if(a!==e){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function i(){return n}n.isRequired=n;var o={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:i,element:n,elementType:n,instanceOf:i,node:n,objectOf:i,oneOf:i,oneOfType:i,shape:i,exact:i,checkPropTypes:r,resetWarningCache:t};return o.PropTypes=o,o}}()();var im=Ei(Ag.exports),om=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function am(e,t){var r=function(e){var t=e.name;if(t&&-1!==t.lastIndexOf(".")&&!e.type){var r=t.split(".").pop().toLowerCase(),n=om.get(r);n&&Object.defineProperty(e,"type",{value:n,writable:!1,configurable:!1,enumerable:!0})}return e}(e);if("string"!=typeof r.path){var n=e.webkitRelativePath;Object.defineProperty(r,"path",{value:"string"==typeof t?t:"string"==typeof n&&n.length>0?n:e.name,writable:!1,configurable:!1,enumerable:!0})}return r}var sm=[".DS_Store","Thumbs.db"];function lm(e){return"object"==typeof e&&null!==e}function cm(e){return hm(e.target.files).map((function(e){return am(e)}))}function dm(e){return G(this,void 0,void 0,(function(){return Z(this,(function(t){switch(t.label){case 0:return[4,Promise.all(e.map((function(e){return e.getFile()})))];case 1:return[2,t.sent().map((function(e){return am(e)}))]}}))}))}function um(e,t){return G(this,void 0,void 0,(function(){var r;return Z(this,(function(n){switch(n.label){case 0:return e.items?(r=hm(e.items).filter((function(e){return"file"===e.kind})),"drop"!==t?[2,r]:[4,Promise.all(r.map(pm))]):[3,2];case 1:return[2,fm(gm(n.sent()))];case 2:return[2,fm(hm(e.files).map((function(e){return am(e)})))]}}))}))}function fm(e){return e.filter((function(e){return-1===sm.indexOf(e.name)}))}function hm(e){if(null===e)return[];for(var t=[],r=0;r<e.length;r++){var n=e[r];t.push(n)}return t}function pm(e){if("function"!=typeof e.webkitGetAsEntry)return mm(e);var t=e.webkitGetAsEntry();return t&&t.isDirectory?vm(t):mm(e)}function gm(e){return e.reduce((function(e,t){return J(J([],Q(e),!1),Q(Array.isArray(t)?gm(t):[t]),!1)}),[])}function mm(e){var t=e.getAsFile();if(!t)return Promise.reject("".concat(e," is not a File"));var r=am(t);return Promise.resolve(r)}function bm(e){return G(this,void 0,void 0,(function(){return Z(this,(function(t){return[2,e.isDirectory?vm(e):ym(e)]}))}))}function vm(e){var t=e.createReader();return new Promise((function(e,r){var n=[];!function i(){var o=this;t.readEntries((function(t){return G(o,void 0,void 0,(function(){var o,a,s;return Z(this,(function(l){switch(l.label){case 0:if(t.length)return[3,5];l.label=1;case 1:return l.trys.push([1,3,,4]),[4,Promise.all(n)];case 2:return o=l.sent(),e(o),[3,4];case 3:return a=l.sent(),r(a),[3,4];case 4:return[3,6];case 5:s=Promise.all(t.map(bm)),n.push(s),i(),l.label=6;case 6:return[2]}}))}))}),(function(e){r(e)}))}()}))}function ym(e){return G(this,void 0,void 0,(function(){return Z(this,(function(t){return[2,new Promise((function(t,r){e.file((function(r){var n=am(r,e.fullPath);t(n)}),(function(e){r(e)}))}))]}))}))}function xm(e){return function(e){if(Array.isArray(e))return km(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||jm(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function wm(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function $m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?wm(Object(r),!0).forEach((function(t){Cm(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):wm(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Cm(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Sm(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,i,o=[],a=!0,s=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);a=!0);}catch(e){s=!0,i=e}finally{try{a||null==r.return||r.return()}finally{if(s)throw i}}return o}(e,t)||jm(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function jm(e,t){if(e){if("string"==typeof e)return km(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?km(e,t):void 0}}function km(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var Dm=function(e){e=Array.isArray(e)&&1===e.length?e[0]:e;var t=Array.isArray(e)?"one of ".concat(e.join(", ")):e;return{code:"file-invalid-type",message:"File type must be ".concat(t)}},Tm=function(e){return{code:"file-too-large",message:"File is larger than ".concat(e," ").concat(1===e?"byte":"bytes")}},Em=function(e){return{code:"file-too-small",message:"File is smaller than ".concat(e," ").concat(1===e?"byte":"bytes")}},Om={code:"too-many-files",message:"Too many files"};function Fm(e,t){var r="application/x-moz-file"===e.type||function(e,t){if(e&&t){var r=Array.isArray(t)?t:t.split(","),n=e.name||"",i=(e.type||"").toLowerCase(),o=i.replace(/\/.*$/,"");return r.some((function(e){var t=e.trim().toLowerCase();return"."===t.charAt(0)?n.toLowerCase().endsWith(t):t.endsWith("/*")?o===t.replace(/\/.*$/,""):i===t}))}return!0}(e,t);return[r,r?null:Dm(t)]}function Im(e,t,r){if(_m(e.size))if(_m(t)&&_m(r)){if(e.size>r)return[!1,Tm(r)];if(e.size<t)return[!1,Em(t)]}else{if(_m(t)&&e.size<t)return[!1,Em(t)];if(_m(r)&&e.size>r)return[!1,Tm(r)]}return[!0,null]}function _m(e){return null!=e}function Mm(e){return"function"==typeof e.isPropagationStopped?e.isPropagationStopped():void 0!==e.cancelBubble&&e.cancelBubble}function Am(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,(function(e){return"Files"===e||"application/x-moz-file"===e})):!!e.target&&!!e.target.files}function Bm(e){e.preventDefault()}function Rm(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return t.some((function(t){return!Mm(e)&&t&&t.apply(void 0,[e].concat(n)),Mm(e)}))}}function zm(e){return"audio/*"===e||"video/*"===e||"image/*"===e||"text/*"===e||/\w+\/[-+.\w]+/g.test(e)}function Pm(e){return/^.*\.[\w]+$/.test(e)}var Lm=["children"],Nm=["open"],Hm=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],Wm=["refKey","onChange","onClick"];function Vm(e){return function(e){if(Array.isArray(e))return Km(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Um(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Ym(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,i,o=[],a=!0,s=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);a=!0);}catch(e){s=!0,i=e}finally{try{a||null==r.return||r.return()}finally{if(s)throw i}}return o}(e,t)||Um(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Um(e,t){if(e){if("string"==typeof e)return Km(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Km(e,t):void 0}}function Km(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function qm(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Xm(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?qm(Object(r),!0).forEach((function(t){Gm(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):qm(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Gm(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Zm(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var Qm=t.forwardRef((function(e,r){var n=e.children,i=tb(Zm(e,Lm)),o=i.open,a=Zm(i,Nm);return t.useImperativeHandle(r,(function(){return{open:o}}),[o]),Y.default.createElement(t.Fragment,null,n(Xm(Xm({},a),{},{open:o})))}));Qm.displayName="Dropzone";var Jm={disabled:!1,getFilesFromEvent:function(e){return G(this,void 0,void 0,(function(){return Z(this,(function(t){return lm(e)&&lm(e.dataTransfer)?[2,um(e.dataTransfer,e.type)]:function(e){return lm(e)&&lm(e.target)}(e)?[2,cm(e)]:Array.isArray(e)&&e.every((function(e){return"getFile"in e&&"function"==typeof e.getFile}))?[2,dm(e)]:[2,[]]}))}))},maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};Qm.defaultProps=Jm,Qm.propTypes={children:im.func,accept:im.objectOf(im.arrayOf(im.string)),multiple:im.bool,preventDropOnDocument:im.bool,noClick:im.bool,noKeyboard:im.bool,noDrag:im.bool,noDragEventsBubbling:im.bool,minSize:im.number,maxSize:im.number,maxFiles:im.number,disabled:im.bool,getFilesFromEvent:im.func,onFileDialogCancel:im.func,onFileDialogOpen:im.func,useFsAccessApi:im.bool,autoFocus:im.bool,onDragEnter:im.func,onDragLeave:im.func,onDragOver:im.func,onDrop:im.func,onDropAccepted:im.func,onDropRejected:im.func,onError:im.func,validator:im.func};var eb={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function tb(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Xm(Xm({},Jm),e),n=r.accept,i=r.disabled,o=r.getFilesFromEvent,a=r.maxSize,s=r.minSize,l=r.multiple,c=r.maxFiles,d=r.onDragEnter,u=r.onDragLeave,f=r.onDragOver,h=r.onDrop,p=r.onDropAccepted,g=r.onDropRejected,m=r.onFileDialogCancel,b=r.onFileDialogOpen,v=r.useFsAccessApi,y=r.autoFocus,x=r.preventDropOnDocument,w=r.noClick,$=r.noKeyboard,C=r.noDrag,S=r.noDragEventsBubbling,j=r.onError,k=r.validator,D=t.useMemo((function(){return function(e){if(_m(e))return Object.entries(e).reduce((function(e,t){var r=Sm(t,2),n=r[0],i=r[1];return[].concat(xm(e),[n],xm(i))}),[]).filter((function(e){return zm(e)||Pm(e)})).join(",")}(n)}),[n]),T=t.useMemo((function(){return function(e){return _m(e)?[{description:"Files",accept:Object.entries(e).filter((function(e){var t=Sm(e,2),r=t[0],n=t[1],i=!0;return zm(r)||(console.warn('Skipped "'.concat(r,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),i=!1),Array.isArray(n)&&n.every(Pm)||(console.warn('Skipped "'.concat(r,'" because an invalid file extension was provided.')),i=!1),i})).reduce((function(e,t){var r=Sm(t,2),n=r[0],i=r[1];return $m($m({},e),{},Cm({},n,i))}),{})}]:e}(n)}),[n]),E=t.useMemo((function(){return"function"==typeof b?b:nb}),[b]),O=t.useMemo((function(){return"function"==typeof m?m:nb}),[m]),F=t.useRef(null),I=t.useRef(null),_=Ym(t.useReducer(rb,eb),2),M=_[0],A=_[1],B=M.isFocused,R=M.isFileDialogActive,z=t.useRef("undefined"!=typeof window&&window.isSecureContext&&v&&"showOpenFilePicker"in window),P=function(){!z.current&&R&&setTimeout((function(){I.current&&(I.current.files.length||(A({type:"closeDialog"}),O()))}),300)};t.useEffect((function(){return window.addEventListener("focus",P,!1),function(){window.removeEventListener("focus",P,!1)}}),[I,R,O,z]);var L=t.useRef([]),N=function(e){F.current&&F.current.contains(e.target)||(e.preventDefault(),L.current=[])};t.useEffect((function(){return x&&(document.addEventListener("dragover",Bm,!1),document.addEventListener("drop",N,!1)),function(){x&&(document.removeEventListener("dragover",Bm),document.removeEventListener("drop",N))}}),[F,x]),t.useEffect((function(){return!i&&y&&F.current&&F.current.focus(),function(){}}),[F,y,i]);var H=t.useCallback((function(e){j?j(e):console.error(e)}),[j]),W=t.useCallback((function(e){e.preventDefault(),e.persist(),re(e),L.current=[].concat(Vm(L.current),[e.target]),Am(e)&&Promise.resolve(o(e)).then((function(t){if(!Mm(e)||S){var r=t.length,n=r>0&&function(e){var t=e.files,r=e.accept,n=e.minSize,i=e.maxSize,o=e.multiple,a=e.maxFiles,s=e.validator;return!(!o&&t.length>1||o&&a>=1&&t.length>a)&&t.every((function(e){var t=Sm(Fm(e,r),1)[0],o=Sm(Im(e,n,i),1)[0],a=s?s(e):null;return t&&o&&!a}))}({files:t,accept:D,minSize:s,maxSize:a,multiple:l,maxFiles:c,validator:k});A({isDragAccept:n,isDragReject:r>0&&!n,isDragActive:!0,type:"setDraggedFiles"}),d&&d(e)}})).catch((function(e){return H(e)}))}),[o,d,H,S,D,s,a,l,c,k]),V=t.useCallback((function(e){e.preventDefault(),e.persist(),re(e);var t=Am(e);if(t&&e.dataTransfer)try{e.dataTransfer.dropEffect="copy"}catch(e){}return t&&f&&f(e),!1}),[f,S]),Y=t.useCallback((function(e){e.preventDefault(),e.persist(),re(e);var t=L.current.filter((function(e){return F.current&&F.current.contains(e)})),r=t.indexOf(e.target);-1!==r&&t.splice(r,1),L.current=t,t.length>0||(A({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),Am(e)&&u&&u(e))}),[F,u,S]),U=t.useCallback((function(e,t){var r=[],n=[];e.forEach((function(e){var t=Ym(Fm(e,D),2),i=t[0],o=t[1],l=Ym(Im(e,s,a),2),c=l[0],d=l[1],u=k?k(e):null;if(i&&c&&!u)r.push(e);else{var f=[o,d];u&&(f=f.concat(u)),n.push({file:e,errors:f.filter((function(e){return e}))})}})),(!l&&r.length>1||l&&c>=1&&r.length>c)&&(r.forEach((function(e){n.push({file:e,errors:[Om]})})),r.splice(0)),A({acceptedFiles:r,fileRejections:n,type:"setFiles"}),h&&h(r,n,t),n.length>0&&g&&g(n,t),r.length>0&&p&&p(r,t)}),[A,l,D,s,a,c,h,p,g,k]),K=t.useCallback((function(e){e.preventDefault(),e.persist(),re(e),L.current=[],Am(e)&&Promise.resolve(o(e)).then((function(t){Mm(e)&&!S||U(t,e)})).catch((function(e){return H(e)})),A({type:"reset"})}),[o,U,H,S]),q=t.useCallback((function(){if(z.current){A({type:"openDialog"}),E();var e={multiple:l,types:T};window.showOpenFilePicker(e).then((function(e){return o(e)})).then((function(e){U(e,null),A({type:"closeDialog"})})).catch((function(e){var t;(t=e)instanceof DOMException&&("AbortError"===t.name||t.code===t.ABORT_ERR)?(O(e),A({type:"closeDialog"})):!function(e){return e instanceof DOMException&&("SecurityError"===e.name||e.code===e.SECURITY_ERR)}(e)?H(e):(z.current=!1,I.current?(I.current.value=null,I.current.click()):H(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided.")))}))}else I.current&&(A({type:"openDialog"}),E(),I.current.value=null,I.current.click())}),[A,E,O,v,U,H,T,l]),X=t.useCallback((function(e){F.current&&F.current.isEqualNode(e.target)&&(" "!==e.key&&"Enter"!==e.key&&32!==e.keyCode&&13!==e.keyCode||(e.preventDefault(),q()))}),[F,q]),G=t.useCallback((function(){A({type:"focus"})}),[]),Z=t.useCallback((function(){A({type:"blur"})}),[]),Q=t.useCallback((function(){w||(!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.navigator.userAgent;return function(e){return-1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident/")}(e)||function(e){return-1!==e.indexOf("Edge/")}(e)}()?q():setTimeout(q,0))}),[w,q]),J=function(e){return i?null:e},ee=function(e){return $?null:J(e)},te=function(e){return C?null:J(e)},re=function(e){S&&e.stopPropagation()},ne=t.useMemo((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,r=void 0===t?"ref":t,n=e.role,o=e.onKeyDown,a=e.onFocus,s=e.onBlur,l=e.onClick,c=e.onDragEnter,d=e.onDragOver,u=e.onDragLeave,f=e.onDrop,h=Zm(e,Hm);return Xm(Xm(Gm({onKeyDown:ee(Rm(o,X)),onFocus:ee(Rm(a,G)),onBlur:ee(Rm(s,Z)),onClick:J(Rm(l,Q)),onDragEnter:te(Rm(c,W)),onDragOver:te(Rm(d,V)),onDragLeave:te(Rm(u,Y)),onDrop:te(Rm(f,K)),role:"string"==typeof n&&""!==n?n:"presentation"},r,F),i||$?{}:{tabIndex:0}),h)}}),[F,X,G,Z,Q,W,V,Y,K,$,C,i]),ie=t.useCallback((function(e){e.stopPropagation()}),[]),oe=t.useMemo((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,r=void 0===t?"ref":t,n=e.onChange,i=e.onClick,o=Zm(e,Wm);return Xm(Xm({},Gm({accept:D,multiple:l,type:"file",style:{display:"none"},onChange:J(Rm(n,K)),onClick:J(Rm(i,ie)),tabIndex:-1},r,I)),o)}}),[I,n,l,K,i]);return Xm(Xm({},M),{},{isFocused:B&&!i,getRootProps:ne,getInputProps:oe,rootRef:F,inputRef:I,open:J(q)})}function rb(e,t){switch(t.type){case"focus":return Xm(Xm({},e),{},{isFocused:!0});case"blur":return Xm(Xm({},e),{},{isFocused:!1});case"openDialog":return Xm(Xm({},eb),{},{isFileDialogActive:!0});case"closeDialog":return Xm(Xm({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return Xm(Xm({},e),{},{isDragActive:t.isDragActive,isDragAccept:t.isDragAccept,isDragReject:t.isDragReject});case"setFiles":return Xm(Xm({},e),{},{acceptedFiles:t.acceptedFiles,fileRejections:t.fileRejections});case"reset":return Xm({},eb);default:return e}}function nb(){}const ib=K.default.div`
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
`,ob=K.default.input`
    display: none;
`,ab=K.default.div`
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
`,sb=K.default(exports.Typography.BodyMD)`
    color: ${Ks["text-primary"]};
    text-align: center;
`,lb=K.default(y.CloudArrowUpFillIcon)`
    color: ${Ks["icon-primary"]};
    height: 4rem;
    width: 4rem;
`,cb=t.forwardRef((({children:r,accept:n,capture:i,multiple:o,id:a,className:s,name:l,border:c,disabled:d,onChange:u,"data-testid":f},h)=>{const p=t.useRef(null),{getRootProps:g,isDragActive:m}=tb({onDrop:u,noClick:!0,disabled:d});t.useImperativeHandle(h,(()=>Object.assign(Object.assign({},p.current),{openFileDialog:()=>{p.current&&(p.current.value="",p.current.click())}})));return e.jsxs(ib,Object.assign({id:a,"data-testid":f||"dropzone",$border:c,className:s},g(),{children:[e.jsx(ob,{type:"file",name:l,ref:p,tabIndex:-1,"aria-hidden":!0,accept:n,capture:i,multiple:o,"data-testid":f?`${f}-input`:"dropzone-input",onChange:e=>{e.target.files&&u(Array.from(e.target.files))}}),r,m&&e.jsxs(ab,{children:[e.jsx(lb,{}),e.jsx(sb,{weight:"semibold",children:"Drop files here"})]})]}))}));const db="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement;function ub(e){const t=Object.prototype.toString.call(e);return"[object Window]"===t||"[object global]"===t}function fb(e){return"nodeType"in e}function hb(e){var t,r;return e?ub(e)?e:fb(e)&&null!=(t=null==(r=e.ownerDocument)?void 0:r.defaultView)?t:window:window}function pb(e){const{Document:t}=hb(e);return e instanceof t}function gb(e){return!ub(e)&&e instanceof hb(e).HTMLElement}function mb(e){return e instanceof hb(e).SVGElement}function bb(e){return e?ub(e)?e.document:fb(e)?pb(e)?e:gb(e)||mb(e)?e.ownerDocument:document:document:document}const vb=db?t.useLayoutEffect:t.useEffect;function yb(e){const r=t.useRef(e);return vb((()=>{r.current=e})),t.useCallback((function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return null==r.current?void 0:r.current(...t)}),[])}function xb(e,r){void 0===r&&(r=[e]);const n=t.useRef(e);return vb((()=>{n.current!==e&&(n.current=e)}),r),n}function wb(e,r){const n=t.useRef();return t.useMemo((()=>{const t=e(n.current);return n.current=t,t}),[...r])}function $b(e){const r=yb(e),n=t.useRef(null),i=t.useCallback((e=>{e!==n.current&&(null==r||r(e,n.current)),n.current=e}),[]);return[n,i]}function Cb(e){const r=t.useRef();return t.useEffect((()=>{r.current=e}),[e]),r.current}let Sb={};function jb(e,r){return t.useMemo((()=>{if(r)return r;const t=null==Sb[e]?0:Sb[e]+1;return Sb[e]=t,e+"-"+t}),[e,r])}function kb(e){return function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return n.reduce(((t,r)=>{const n=Object.entries(r);for(const[r,i]of n){const n=t[r];null!=n&&(t[r]=n+e*i)}return t}),{...t})}}const Db=kb(1),Tb=kb(-1);function Eb(e){if(!e)return!1;const{KeyboardEvent:t}=hb(e.target);return t&&e instanceof t}function Ob(e){if(function(e){if(!e)return!1;const{TouchEvent:t}=hb(e.target);return t&&e instanceof t}(e)){if(e.touches&&e.touches.length){const{clientX:t,clientY:r}=e.touches[0];return{x:t,y:r}}if(e.changedTouches&&e.changedTouches.length){const{clientX:t,clientY:r}=e.changedTouches[0];return{x:t,y:r}}}return function(e){return"clientX"in e&&"clientY"in e}(e)?{x:e.clientX,y:e.clientY}:null}const Fb=Object.freeze({Translate:{toString(e){if(!e)return;const{x:t,y:r}=e;return"translate3d("+(t?Math.round(t):0)+"px, "+(r?Math.round(r):0)+"px, 0)"}},Scale:{toString(e){if(!e)return;const{scaleX:t,scaleY:r}=e;return"scaleX("+t+") scaleY("+r+")"}},Transform:{toString(e){if(e)return[Fb.Translate.toString(e),Fb.Scale.toString(e)].join(" ")}},Transition:{toString(e){let{property:t,duration:r,easing:n}=e;return t+" "+r+"ms "+n}}}),Ib="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function _b(e){return e.matches(Ib)?e:e.querySelector(Ib)}const Mb={display:"none"};function Ab(e){let{id:t,value:r}=e;return Y.default.createElement("div",{id:t,style:Mb},r)}function Bb(e){let{id:t,announcement:r,ariaLiveType:n="assertive"}=e;return Y.default.createElement("div",{id:t,style:{position:"fixed",width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"},role:"status","aria-live":n,"aria-atomic":!0},r)}const Rb=t.createContext(null);const zb={draggable:"\n    To pick up a draggable item, press the space bar.\n    While dragging, use the arrow keys to move the item.\n    Press space again to drop the item in its new position, or press escape to cancel.\n  "},Pb={onDragStart(e){let{active:t}=e;return"Picked up draggable item "+t.id+"."},onDragOver(e){let{active:t,over:r}=e;return r?"Draggable item "+t.id+" was moved over droppable area "+r.id+".":"Draggable item "+t.id+" is no longer over a droppable area."},onDragEnd(e){let{active:t,over:r}=e;return r?"Draggable item "+t.id+" was dropped over droppable area "+r.id:"Draggable item "+t.id+" was dropped."},onDragCancel(e){let{active:t}=e;return"Dragging was cancelled. Draggable item "+t.id+" was dropped."}};function Lb(e){let{announcements:n=Pb,container:i,hiddenTextDescribedById:o,screenReaderInstructions:a=zb}=e;const{announce:s,announcement:l}=function(){const[e,r]=t.useState("");return{announce:t.useCallback((e=>{null!=e&&r(e)}),[]),announcement:e}}(),c=jb("DndLiveRegion"),[d,u]=t.useState(!1);if(t.useEffect((()=>{u(!0)}),[]),function(e){const r=t.useContext(Rb);t.useEffect((()=>{if(!r)throw new Error("useDndMonitor must be used within a children of <DndContext>");return r(e)}),[e,r])}(t.useMemo((()=>({onDragStart(e){let{active:t}=e;s(n.onDragStart({active:t}))},onDragMove(e){let{active:t,over:r}=e;n.onDragMove&&s(n.onDragMove({active:t,over:r}))},onDragOver(e){let{active:t,over:r}=e;s(n.onDragOver({active:t,over:r}))},onDragEnd(e){let{active:t,over:r}=e;s(n.onDragEnd({active:t,over:r}))},onDragCancel(e){let{active:t,over:r}=e;s(n.onDragCancel({active:t,over:r}))}})),[s,n])),!d)return null;const f=Y.default.createElement(Y.default.Fragment,null,Y.default.createElement(Ab,{id:o,value:a.draggable}),Y.default.createElement(Bb,{id:c,announcement:l}));return i?r.createPortal(f,i):f}var Nb;function Hb(){}function Wb(e,r){return t.useMemo((()=>({sensor:e,options:null!=r?r:{}})),[e,r])}!function(e){e.DragStart="dragStart",e.DragMove="dragMove",e.DragEnd="dragEnd",e.DragCancel="dragCancel",e.DragOver="dragOver",e.RegisterDroppable="registerDroppable",e.SetDroppableDisabled="setDroppableDisabled",e.UnregisterDroppable="unregisterDroppable"}(Nb||(Nb={}));const Vb=Object.freeze({x:0,y:0});function Yb(e,t){let{data:{value:r}}=e,{data:{value:n}}=t;return r-n}function Ub(e,t){let{data:{value:r}}=e,{data:{value:n}}=t;return n-r}function Kb(e){let{left:t,top:r,height:n,width:i}=e;return[{x:t,y:r},{x:t+i,y:r},{x:t,y:r+n},{x:t+i,y:r+n}]}function qb(e,t){if(!e||0===e.length)return null;const[r]=e;return t?r[t]:r}function Xb(e,t){const r=Math.max(t.top,e.top),n=Math.max(t.left,e.left),i=Math.min(t.left+t.width,e.left+e.width),o=Math.min(t.top+t.height,e.top+e.height),a=i-n,s=o-r;if(n<i&&r<o){const r=t.width*t.height,n=e.width*e.height,i=a*s;return Number((i/(r+n-i)).toFixed(4))}return 0}const Gb=e=>{let{collisionRect:t,droppableRects:r,droppableContainers:n}=e;const i=[];for(const e of n){const{id:n}=e,o=r.get(n);if(o){const r=Xb(o,t);r>0&&i.push({id:n,data:{droppableContainer:e,value:r}})}}return i.sort(Ub)};function Zb(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:Vb}function Qb(e){return function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return n.reduce(((t,r)=>({...t,top:t.top+e*r.y,bottom:t.bottom+e*r.y,left:t.left+e*r.x,right:t.right+e*r.x})),{...t})}}const Jb=Qb(1);const ev={ignoreTransform:!1};function tv(e,t){void 0===t&&(t=ev);let r=e.getBoundingClientRect();if(t.ignoreTransform){const{transform:t,transformOrigin:n}=hb(e).getComputedStyle(e);t&&(r=function(e,t,r){const n=function(e){if(e.startsWith("matrix3d(")){const t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}if(e.startsWith("matrix(")){const t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}(t);if(!n)return e;const{scaleX:i,scaleY:o,x:a,y:s}=n,l=e.left-a-(1-i)*parseFloat(r),c=e.top-s-(1-o)*parseFloat(r.slice(r.indexOf(" ")+1)),d=i?e.width/i:e.width,u=o?e.height/o:e.height;return{width:d,height:u,top:c,right:l+d,bottom:c+u,left:l}}(r,t,n))}const{top:n,left:i,width:o,height:a,bottom:s,right:l}=r;return{top:n,left:i,width:o,height:a,bottom:s,right:l}}function rv(e){return tv(e,{ignoreTransform:!0})}function nv(e,t){const r=[];return e?function n(i){if(null!=t&&r.length>=t)return r;if(!i)return r;if(pb(i)&&null!=i.scrollingElement&&!r.includes(i.scrollingElement))return r.push(i.scrollingElement),r;if(!gb(i)||mb(i))return r;if(r.includes(i))return r;const o=hb(e).getComputedStyle(i);return i!==e&&function(e,t){void 0===t&&(t=hb(e).getComputedStyle(e));const r=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some((e=>{const n=t[e];return"string"==typeof n&&r.test(n)}))}(i,o)&&r.push(i),function(e,t){return void 0===t&&(t=hb(e).getComputedStyle(e)),"fixed"===t.position}(i,o)?r:n(i.parentNode)}(e):r}function iv(e){const[t]=nv(e,1);return null!=t?t:null}function ov(e){return db&&e?ub(e)?e:fb(e)?pb(e)||e===bb(e).scrollingElement?window:gb(e)?e:null:null:null}function av(e){return ub(e)?e.scrollX:e.scrollLeft}function sv(e){return ub(e)?e.scrollY:e.scrollTop}function lv(e){return{x:av(e),y:sv(e)}}var cv;function dv(e){return!(!db||!e)&&e===document.scrollingElement}function uv(e){const t={x:0,y:0},r=dv(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},n={x:e.scrollWidth-r.width,y:e.scrollHeight-r.height};return{isTop:e.scrollTop<=t.y,isLeft:e.scrollLeft<=t.x,isBottom:e.scrollTop>=n.y,isRight:e.scrollLeft>=n.x,maxScroll:n,minScroll:t}}!function(e){e[e.Forward=1]="Forward",e[e.Backward=-1]="Backward"}(cv||(cv={}));const fv={x:.2,y:.2};function hv(e,t,r,n,i){let{top:o,left:a,right:s,bottom:l}=r;void 0===n&&(n=10),void 0===i&&(i=fv);const{isTop:c,isBottom:d,isLeft:u,isRight:f}=uv(e),h={x:0,y:0},p={x:0,y:0},g=t.height*i.y,m=t.width*i.x;return!c&&o<=t.top+g?(h.y=cv.Backward,p.y=n*Math.abs((t.top+g-o)/g)):!d&&l>=t.bottom-g&&(h.y=cv.Forward,p.y=n*Math.abs((t.bottom-g-l)/g)),!f&&s>=t.right-m?(h.x=cv.Forward,p.x=n*Math.abs((t.right-m-s)/m)):!u&&a<=t.left+m&&(h.x=cv.Backward,p.x=n*Math.abs((t.left+m-a)/m)),{direction:h,speed:p}}function pv(e){if(e===document.scrollingElement){const{innerWidth:e,innerHeight:t}=window;return{top:0,left:0,right:e,bottom:t,width:e,height:t}}const{top:t,left:r,right:n,bottom:i}=e.getBoundingClientRect();return{top:t,left:r,right:n,bottom:i,width:e.clientWidth,height:e.clientHeight}}function gv(e){return e.reduce(((e,t)=>Db(e,lv(t))),Vb)}const mv=[["x",["left","right"],function(e){return e.reduce(((e,t)=>e+av(t)),0)}],["y",["top","bottom"],function(e){return e.reduce(((e,t)=>e+sv(t)),0)}]];class bv{constructor(e,t){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;const r=nv(t),n=gv(r);this.rect={...e},this.width=e.width,this.height=e.height;for(const[e,t,i]of mv)for(const o of t)Object.defineProperty(this,o,{get:()=>{const t=i(r),a=n[e]-t;return this.rect[o]+a},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}}class vv{constructor(e){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach((e=>{var t;return null==(t=this.target)?void 0:t.removeEventListener(...e)}))},this.target=e}add(e,t,r){var n;null==(n=this.target)||n.addEventListener(e,t,r),this.listeners.push([e,t,r])}}function yv(e,t){const r=Math.abs(e.x),n=Math.abs(e.y);return"number"==typeof t?Math.sqrt(r**2+n**2)>t:"x"in t&&"y"in t?r>t.x&&n>t.y:"x"in t?r>t.x:"y"in t&&n>t.y}var xv,wv;function $v(e){e.preventDefault()}function Cv(e){e.stopPropagation()}!function(e){e.Click="click",e.DragStart="dragstart",e.Keydown="keydown",e.ContextMenu="contextmenu",e.Resize="resize",e.SelectionChange="selectionchange",e.VisibilityChange="visibilitychange"}(xv||(xv={})),function(e){e.Space="Space",e.Down="ArrowDown",e.Right="ArrowRight",e.Left="ArrowLeft",e.Up="ArrowUp",e.Esc="Escape",e.Enter="Enter"}(wv||(wv={}));const Sv={start:[wv.Space,wv.Enter],cancel:[wv.Esc],end:[wv.Space,wv.Enter]},jv=(e,t)=>{let{currentCoordinates:r}=t;switch(e.code){case wv.Right:return{...r,x:r.x+25};case wv.Left:return{...r,x:r.x-25};case wv.Down:return{...r,y:r.y+25};case wv.Up:return{...r,y:r.y-25}}};let kv=class{constructor(e){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=e;const{event:{target:t}}=e;this.props=e,this.listeners=new vv(bb(t)),this.windowListeners=new vv(hb(t)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(xv.Resize,this.handleCancel),this.windowListeners.add(xv.VisibilityChange,this.handleCancel),setTimeout((()=>this.listeners.add(xv.Keydown,this.handleKeyDown)))}handleStart(){const{activeNode:e,onStart:t}=this.props,r=e.node.current;r&&function(e,t){if(void 0===t&&(t=tv),!e)return;const{top:r,left:n,bottom:i,right:o}=t(e);iv(e)&&(i<=0||o<=0||r>=window.innerHeight||n>=window.innerWidth)&&e.scrollIntoView({block:"center",inline:"center"})}(r),t(Vb)}handleKeyDown(e){if(Eb(e)){const{active:t,context:r,options:n}=this.props,{keyboardCodes:i=Sv,coordinateGetter:o=jv,scrollBehavior:a="smooth"}=n,{code:s}=e;if(i.end.includes(s))return void this.handleEnd(e);if(i.cancel.includes(s))return void this.handleCancel(e);const{collisionRect:l}=r.current,c=l?{x:l.left,y:l.top}:Vb;this.referenceCoordinates||(this.referenceCoordinates=c);const d=o(e,{active:t,context:r.current,currentCoordinates:c});if(d){const t=Tb(d,c),n={x:0,y:0},{scrollableAncestors:i}=r.current;for(const r of i){const i=e.code,{isTop:o,isRight:s,isLeft:l,isBottom:c,maxScroll:u,minScroll:f}=uv(r),h=pv(r),p={x:Math.min(i===wv.Right?h.right-h.width/2:h.right,Math.max(i===wv.Right?h.left:h.left+h.width/2,d.x)),y:Math.min(i===wv.Down?h.bottom-h.height/2:h.bottom,Math.max(i===wv.Down?h.top:h.top+h.height/2,d.y))},g=i===wv.Right&&!s||i===wv.Left&&!l,m=i===wv.Down&&!c||i===wv.Up&&!o;if(g&&p.x!==d.x){const e=r.scrollLeft+t.x,o=i===wv.Right&&e<=u.x||i===wv.Left&&e>=f.x;if(o&&!t.y)return void r.scrollTo({left:e,behavior:a});n.x=o?r.scrollLeft-e:i===wv.Right?r.scrollLeft-u.x:r.scrollLeft-f.x,n.x&&r.scrollBy({left:-n.x,behavior:a});break}if(m&&p.y!==d.y){const e=r.scrollTop+t.y,o=i===wv.Down&&e<=u.y||i===wv.Up&&e>=f.y;if(o&&!t.x)return void r.scrollTo({top:e,behavior:a});n.y=o?r.scrollTop-e:i===wv.Down?r.scrollTop-u.y:r.scrollTop-f.y,n.y&&r.scrollBy({top:-n.y,behavior:a});break}}this.handleMove(e,Db(Tb(d,this.referenceCoordinates),n))}}}handleMove(e,t){const{onMove:r}=this.props;e.preventDefault(),r(t)}handleEnd(e){const{onEnd:t}=this.props;e.preventDefault(),this.detach(),t()}handleCancel(e){const{onCancel:t}=this.props;e.preventDefault(),this.detach(),t()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}};function Dv(e){return Boolean(e&&"distance"in e)}function Tv(e){return Boolean(e&&"delay"in e)}kv.activators=[{eventName:"onKeyDown",handler:(e,t,r)=>{let{keyboardCodes:n=Sv,onActivation:i}=t,{active:o}=r;const{code:a}=e.nativeEvent;if(n.start.includes(a)){const t=o.activatorNode.current;return(!t||e.target===t)&&(e.preventDefault(),null==i||i({event:e.nativeEvent}),!0)}return!1}}];class Ev{constructor(e,t,r){var n;void 0===r&&(r=function(e){const{EventTarget:t}=hb(e);return e instanceof t?e:bb(e)}(e.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=e,this.events=t;const{event:i}=e,{target:o}=i;this.props=e,this.events=t,this.document=bb(o),this.documentListeners=new vv(this.document),this.listeners=new vv(r),this.windowListeners=new vv(hb(o)),this.initialCoordinates=null!=(n=Ob(i))?n:Vb,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){const{events:e,props:{options:{activationConstraint:t,bypassActivationConstraint:r}}}=this;if(this.listeners.add(e.move.name,this.handleMove,{passive:!1}),this.listeners.add(e.end.name,this.handleEnd),this.windowListeners.add(xv.Resize,this.handleCancel),this.windowListeners.add(xv.DragStart,$v),this.windowListeners.add(xv.VisibilityChange,this.handleCancel),this.windowListeners.add(xv.ContextMenu,$v),this.documentListeners.add(xv.Keydown,this.handleKeydown),t){if(null!=r&&r({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(Tv(t))return void(this.timeoutId=setTimeout(this.handleStart,t.delay));if(Dv(t))return}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),null!==this.timeoutId&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handleStart(){const{initialCoordinates:e}=this,{onStart:t}=this.props;e&&(this.activated=!0,this.documentListeners.add(xv.Click,Cv,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(xv.SelectionChange,this.removeTextSelection),t(e))}handleMove(e){var t;const{activated:r,initialCoordinates:n,props:i}=this,{onMove:o,options:{activationConstraint:a}}=i;if(!n)return;const s=null!=(t=Ob(e))?t:Vb,l=Tb(n,s);if(!r&&a){if(Dv(a)){if(null!=a.tolerance&&yv(l,a.tolerance))return this.handleCancel();if(yv(l,a.distance))return this.handleStart()}return Tv(a)&&yv(l,a.tolerance)?this.handleCancel():void 0}e.cancelable&&e.preventDefault(),o(s)}handleEnd(){const{onEnd:e}=this.props;this.detach(),e()}handleCancel(){const{onCancel:e}=this.props;this.detach(),e()}handleKeydown(e){e.code===wv.Esc&&this.handleCancel()}removeTextSelection(){var e;null==(e=this.document.getSelection())||e.removeAllRanges()}}const Ov={move:{name:"pointermove"},end:{name:"pointerup"}};class Fv extends Ev{constructor(e){const{event:t}=e,r=bb(t.target);super(e,Ov,r)}}Fv.activators=[{eventName:"onPointerDown",handler:(e,t)=>{let{nativeEvent:r}=e,{onActivation:n}=t;return!(!r.isPrimary||0!==r.button)&&(null==n||n({event:r}),!0)}}];const Iv={move:{name:"mousemove"},end:{name:"mouseup"}};var _v;!function(e){e[e.RightClick=2]="RightClick"}(_v||(_v={}));let Mv=class extends Ev{constructor(e){super(e,Iv,bb(e.event.target))}};Mv.activators=[{eventName:"onMouseDown",handler:(e,t)=>{let{nativeEvent:r}=e,{onActivation:n}=t;return r.button!==_v.RightClick&&(null==n||n({event:r}),!0)}}];const Av={move:{name:"touchmove"},end:{name:"touchend"}};class Bv extends Ev{constructor(e){super(e,Av)}static setup(){return window.addEventListener(Av.move.name,e,{capture:!1,passive:!1}),function(){window.removeEventListener(Av.move.name,e)};function e(){}}}var Rv,zv;function Pv(e){let{acceleration:r,activator:n=Rv.Pointer,canScroll:i,draggingRect:o,enabled:a,interval:s=5,order:l=zv.TreeOrder,pointerCoordinates:c,scrollableAncestors:d,scrollableAncestorRects:u,delta:f,threshold:h}=e;const p=function(e){let{delta:t,disabled:r}=e;const n=Cb(t);return wb((e=>{if(r||!n||!e)return Lv;const i={x:Math.sign(t.x-n.x),y:Math.sign(t.y-n.y)};return{x:{[cv.Backward]:e.x[cv.Backward]||-1===i.x,[cv.Forward]:e.x[cv.Forward]||1===i.x},y:{[cv.Backward]:e.y[cv.Backward]||-1===i.y,[cv.Forward]:e.y[cv.Forward]||1===i.y}}}),[r,t,n])}({delta:f,disabled:!a}),[g,m]=function(){const e=t.useRef(null);return[t.useCallback(((t,r)=>{e.current=setInterval(t,r)}),[]),t.useCallback((()=>{null!==e.current&&(clearInterval(e.current),e.current=null)}),[])]}(),b=t.useRef({x:0,y:0}),v=t.useRef({x:0,y:0}),y=t.useMemo((()=>{switch(n){case Rv.Pointer:return c?{top:c.y,bottom:c.y,left:c.x,right:c.x}:null;case Rv.DraggableRect:return o}}),[n,o,c]),x=t.useRef(null),w=t.useCallback((()=>{const e=x.current;if(!e)return;const t=b.current.x*v.current.x,r=b.current.y*v.current.y;e.scrollBy(t,r)}),[]),$=t.useMemo((()=>l===zv.TreeOrder?[...d].reverse():d),[l,d]);t.useEffect((()=>{if(a&&d.length&&y){for(const e of $){if(!1===(null==i?void 0:i(e)))continue;const t=d.indexOf(e),n=u[t];if(!n)continue;const{direction:o,speed:a}=hv(e,n,y,r,h);for(const e of["x","y"])p[e][o[e]]||(a[e]=0,o[e]=0);if(a.x>0||a.y>0)return m(),x.current=e,g(w,s),b.current=a,void(v.current=o)}b.current={x:0,y:0},v.current={x:0,y:0},m()}else m()}),[r,w,i,m,a,s,JSON.stringify(y),JSON.stringify(p),g,d,$,u,JSON.stringify(h)])}Bv.activators=[{eventName:"onTouchStart",handler:(e,t)=>{let{nativeEvent:r}=e,{onActivation:n}=t;const{touches:i}=r;return!(i.length>1)&&(null==n||n({event:r}),!0)}}],function(e){e[e.Pointer=0]="Pointer",e[e.DraggableRect=1]="DraggableRect"}(Rv||(Rv={})),function(e){e[e.TreeOrder=0]="TreeOrder",e[e.ReversedTreeOrder=1]="ReversedTreeOrder"}(zv||(zv={}));const Lv={x:{[cv.Backward]:!1,[cv.Forward]:!1},y:{[cv.Backward]:!1,[cv.Forward]:!1}};var Nv,Hv;!function(e){e[e.Always=0]="Always",e[e.BeforeDragging=1]="BeforeDragging",e[e.WhileDragging=2]="WhileDragging"}(Nv||(Nv={})),function(e){e.Optimized="optimized"}(Hv||(Hv={}));const Wv=new Map;function Vv(e,t){return wb((r=>e?r||("function"==typeof t?t(e):e):null),[t,e])}function Yv(e){let{callback:r,disabled:n}=e;const i=yb(r),o=t.useMemo((()=>{if(n||"undefined"==typeof window||void 0===window.ResizeObserver)return;const{ResizeObserver:e}=window;return new e(i)}),[n]);return t.useEffect((()=>()=>null==o?void 0:o.disconnect()),[o]),o}function Uv(e){return new bv(tv(e),e)}function Kv(e,r,n){void 0===r&&(r=Uv);const[i,o]=t.useReducer((function(t){if(!e)return null;var i;if(!1===e.isConnected)return null!=(i=null!=t?t:n)?i:null;const o=r(e);if(JSON.stringify(t)===JSON.stringify(o))return t;return o}),null),a=function(e){let{callback:r,disabled:n}=e;const i=yb(r),o=t.useMemo((()=>{if(n||"undefined"==typeof window||void 0===window.MutationObserver)return;const{MutationObserver:e}=window;return new e(i)}),[i,n]);return t.useEffect((()=>()=>null==o?void 0:o.disconnect()),[o]),o}({callback(t){if(e)for(const r of t){const{type:t,target:n}=r;if("childList"===t&&n instanceof HTMLElement&&n.contains(e)){o();break}}}}),s=Yv({callback:o});return vb((()=>{o(),e?(null==s||s.observe(e),null==a||a.observe(document.body,{childList:!0,subtree:!0})):(null==s||s.disconnect(),null==a||a.disconnect())}),[e]),i}const qv=[];function Xv(e,r){void 0===r&&(r=[]);const n=t.useRef(null);return t.useEffect((()=>{n.current=null}),r),t.useEffect((()=>{const t=e!==Vb;t&&!n.current&&(n.current=e),!t&&n.current&&(n.current=null)}),[e]),n.current?Tb(e,n.current):Vb}function Gv(e){return t.useMemo((()=>e?function(e){const t=e.innerWidth,r=e.innerHeight;return{top:0,left:0,right:t,bottom:r,width:t,height:r}}(e):null),[e])}const Zv=[];function Qv(e){let{measure:r}=e;const[n,i]=t.useState(null),o=t.useCallback((e=>{for(const{target:t}of e)if(gb(t)){i((e=>{const n=r(t);return e?{...e,width:n.width,height:n.height}:n}));break}}),[r]),a=Yv({callback:o}),s=t.useCallback((e=>{const t=function(e){if(!e)return null;if(e.children.length>1)return e;const t=e.children[0];return gb(t)?t:e}(e);null==a||a.disconnect(),t&&(null==a||a.observe(t)),i(t?r(t):null)}),[r,a]),[l,c]=$b(s);return t.useMemo((()=>({nodeRef:l,rect:n,setRef:c})),[n,l,c])}const Jv=[{sensor:Fv,options:{}},{sensor:kv,options:{}}],ey={current:{}},ty={draggable:{measure:rv},droppable:{measure:rv,strategy:Nv.WhileDragging,frequency:Hv.Optimized},dragOverlay:{measure:tv}};class ry extends Map{get(e){var t;return null!=e&&null!=(t=super.get(e))?t:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter((e=>{let{disabled:t}=e;return!t}))}getNodeFor(e){var t,r;return null!=(t=null==(r=this.get(e))?void 0:r.node.current)?t:void 0}}const ny={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new ry,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:Hb},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:ty,measureDroppableContainers:Hb,windowRect:null,measuringScheduled:!1},iy={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:Hb,draggableNodes:new Map,over:null,measureDroppableContainers:Hb},oy=t.createContext(iy),ay=t.createContext(ny);function sy(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new ry}}}function ly(e,t){switch(t.type){case Nb.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case Nb.DragMove:return e.draggable.active?{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}}:e;case Nb.DragEnd:case Nb.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case Nb.RegisterDroppable:{const{element:r}=t,{id:n}=r,i=new ry(e.droppable.containers);return i.set(n,r),{...e,droppable:{...e.droppable,containers:i}}}case Nb.SetDroppableDisabled:{const{id:r,key:n,disabled:i}=t,o=e.droppable.containers.get(r);if(!o||n!==o.key)return e;const a=new ry(e.droppable.containers);return a.set(r,{...o,disabled:i}),{...e,droppable:{...e.droppable,containers:a}}}case Nb.UnregisterDroppable:{const{id:r,key:n}=t,i=e.droppable.containers.get(r);if(!i||n!==i.key)return e;const o=new ry(e.droppable.containers);return o.delete(r),{...e,droppable:{...e.droppable,containers:o}}}default:return e}}function cy(e){let{disabled:r}=e;const{active:n,activatorEvent:i,draggableNodes:o}=t.useContext(oy),a=Cb(i),s=Cb(null==n?void 0:n.id);return t.useEffect((()=>{if(!r&&!i&&a&&null!=s){if(!Eb(a))return;if(document.activeElement===a.target)return;const e=o.get(s);if(!e)return;const{activatorNode:t,node:r}=e;if(!t.current&&!r.current)return;requestAnimationFrame((()=>{for(const e of[t.current,r.current]){if(!e)continue;const t=_b(e);if(t){t.focus();break}}}))}}),[i,r,o,s,a]),null}const dy=t.createContext({...Vb,scaleX:1,scaleY:1});var uy;!function(e){e[e.Uninitialized=0]="Uninitialized",e[e.Initializing=1]="Initializing",e[e.Initialized=2]="Initialized"}(uy||(uy={}));const fy=t.memo((function(e){var n,i,o,a;let{id:s,accessibility:l,autoScroll:c=!0,children:d,sensors:u=Jv,collisionDetection:f=Gb,measuring:h,modifiers:p,...g}=e;const m=t.useReducer(ly,void 0,sy),[b,v]=m,[y,x]=function(){const[e]=t.useState((()=>new Set)),r=t.useCallback((t=>(e.add(t),()=>e.delete(t))),[e]);return[t.useCallback((t=>{let{type:r,event:n}=t;e.forEach((e=>{var t;return null==(t=e[r])?void 0:t.call(e,n)}))}),[e]),r]}(),[w,$]=t.useState(uy.Uninitialized),C=w===uy.Initialized,{draggable:{active:S,nodes:j,translate:k},droppable:{containers:D}}=b,T=S?j.get(S):null,E=t.useRef({initial:null,translated:null}),O=t.useMemo((()=>{var e;return null!=S?{id:S,data:null!=(e=null==T?void 0:T.data)?e:ey,rect:E}:null}),[S,T]),F=t.useRef(null),[I,_]=t.useState(null),[M,A]=t.useState(null),B=xb(g,Object.values(g)),R=jb("DndDescribedBy",s),z=t.useMemo((()=>D.getEnabled()),[D]),P=function(e){return t.useMemo((()=>({draggable:{...ty.draggable,...null==e?void 0:e.draggable},droppable:{...ty.droppable,...null==e?void 0:e.droppable},dragOverlay:{...ty.dragOverlay,...null==e?void 0:e.dragOverlay}})),[null==e?void 0:e.draggable,null==e?void 0:e.droppable,null==e?void 0:e.dragOverlay])}(h),{droppableRects:L,measureDroppableContainers:N,measuringScheduled:H}=function(e,r){let{dragging:n,dependencies:i,config:o}=r;const[a,s]=t.useState(null),{frequency:l,measure:c,strategy:d}=o,u=t.useRef(e),f=function(){switch(d){case Nv.Always:return!1;case Nv.BeforeDragging:return n;default:return!n}}(),h=xb(f),p=t.useCallback((function(e){void 0===e&&(e=[]),h.current||s((t=>null===t?e:t.concat(e.filter((e=>!t.includes(e))))))}),[h]),g=t.useRef(null),m=wb((t=>{if(f&&!n)return Wv;if(!t||t===Wv||u.current!==e||null!=a){const t=new Map;for(let r of e){if(!r)continue;if(a&&a.length>0&&!a.includes(r.id)&&r.rect.current){t.set(r.id,r.rect.current);continue}const e=r.node.current,n=e?new bv(c(e),e):null;r.rect.current=n,n&&t.set(r.id,n)}return t}return t}),[e,a,n,f,c]);return t.useEffect((()=>{u.current=e}),[e]),t.useEffect((()=>{f||p()}),[n,f]),t.useEffect((()=>{a&&a.length>0&&s(null)}),[JSON.stringify(a)]),t.useEffect((()=>{f||"number"!=typeof l||null!==g.current||(g.current=setTimeout((()=>{p(),g.current=null}),l))}),[l,f,p,...i]),{droppableRects:m,measureDroppableContainers:p,measuringScheduled:null!=a}}(z,{dragging:C,dependencies:[k.x,k.y],config:P.droppable}),W=function(e,t){const r=null!==t?e.get(t):void 0,n=r?r.node.current:null;return wb((e=>{var r;return null===t?null:null!=(r=null!=n?n:e)?r:null}),[n,t])}(j,S),V=t.useMemo((()=>M?Ob(M):null),[M]),U=function(){const e=!1===(null==I?void 0:I.autoScrollEnabled),t="object"==typeof c?!1===c.enabled:!1===c,r=C&&!e&&!t;if("object"==typeof c)return{...c,enabled:r};return{enabled:r}}(),K=function(e,t){return Vv(e,t)}(W,P.draggable.measure);!function(e){let{activeNode:r,measure:n,initialRect:i,config:o=!0}=e;const a=t.useRef(!1),{x:s,y:l}="boolean"==typeof o?{x:o,y:o}:o;vb((()=>{if(!s&&!l||!r)return void(a.current=!1);if(a.current||!i)return;const e=null==r?void 0:r.node.current;if(!e||!1===e.isConnected)return;const t=Zb(n(e),i);if(s||(t.x=0),l||(t.y=0),a.current=!0,Math.abs(t.x)>0||Math.abs(t.y)>0){const r=iv(e);r&&r.scrollBy({top:t.y,left:t.x})}}),[r,s,l,i,n])}({activeNode:S?j.get(S):null,config:U.layoutShiftCompensation,initialRect:K,measure:P.draggable.measure});const q=Kv(W,P.draggable.measure,K),X=Kv(W?W.parentElement:null),G=t.useRef({activatorEvent:null,active:null,activeNode:W,collisionRect:null,collisions:null,droppableRects:L,draggableNodes:j,draggingNode:null,draggingNodeRect:null,droppableContainers:D,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),Z=D.getNodeFor(null==(n=G.current.over)?void 0:n.id),Q=Qv({measure:P.dragOverlay.measure}),J=null!=(i=Q.nodeRef.current)?i:W,ee=C?null!=(o=Q.rect)?o:q:null,te=Boolean(Q.nodeRef.current&&Q.rect),re=Zb(ne=te?null:q,Vv(ne));var ne;const ie=Gv(J?hb(J):null),oe=function(e){const r=t.useRef(e),n=wb((t=>e?t&&t!==qv&&e&&r.current&&e.parentNode===r.current.parentNode?t:nv(e):qv),[e]);return t.useEffect((()=>{r.current=e}),[e]),n}(C?null!=Z?Z:W:null),ae=function(e,r){void 0===r&&(r=tv);const[n]=e,i=Gv(n?hb(n):null),[o,a]=t.useReducer((function(){return e.length?e.map((e=>dv(e)?i:new bv(r(e),e))):Zv}),Zv),s=Yv({callback:a});return e.length>0&&o===Zv&&a(),vb((()=>{e.length?e.forEach((e=>null==s?void 0:s.observe(e))):(null==s||s.disconnect(),a())}),[e]),o}(oe),se=function(e,t){let{transform:r,...n}=t;return null!=e&&e.length?e.reduce(((e,t)=>t({transform:e,...n})),r):r}(p,{transform:{x:k.x-re.x,y:k.y-re.y,scaleX:1,scaleY:1},activatorEvent:M,active:O,activeNodeRect:q,containerNodeRect:X,draggingNodeRect:ee,over:G.current.over,overlayNodeRect:Q.rect,scrollableAncestors:oe,scrollableAncestorRects:ae,windowRect:ie}),le=V?Db(V,k):null,ce=function(e){const[r,n]=t.useState(null),i=t.useRef(e),o=t.useCallback((e=>{const t=ov(e.target);t&&n((e=>e?(e.set(t,lv(t)),new Map(e)):null))}),[]);return t.useEffect((()=>{const t=i.current;if(e!==t){r(t);const a=e.map((e=>{const t=ov(e);return t?(t.addEventListener("scroll",o,{passive:!0}),[t,lv(t)]):null})).filter((e=>null!=e));n(a.length?new Map(a):null),i.current=e}return()=>{r(e),r(t)};function r(e){e.forEach((e=>{const t=ov(e);null==t||t.removeEventListener("scroll",o)}))}}),[o,e]),t.useMemo((()=>e.length?r?Array.from(r.values()).reduce(((e,t)=>Db(e,t)),Vb):gv(e):Vb),[e,r])}(oe),de=Xv(ce),ue=Xv(ce,[q]),fe=Db(se,de),he=ee?Jb(ee,se):null,pe=O&&he?f({active:O,collisionRect:he,droppableRects:L,droppableContainers:z,pointerCoordinates:le}):null,ge=qb(pe,"id"),[me,be]=t.useState(null),ve=function(e,t,r){return{...e,scaleX:t&&r?t.width/r.width:1,scaleY:t&&r?t.height/r.height:1}}(te?se:Db(se,ue),null!=(a=null==me?void 0:me.rect)?a:null,q),ye=t.useCallback(((e,t)=>{let{sensor:n,options:i}=t;if(null==F.current)return;const o=j.get(F.current);if(!o)return;const a=e.nativeEvent,s=new n({active:F.current,activeNode:o,event:a,options:i,context:G,onStart(e){const t=F.current;if(null==t)return;const n=j.get(t);if(!n)return;const{onDragStart:i}=B.current,o={active:{id:t,data:n.data,rect:E}};r.unstable_batchedUpdates((()=>{null==i||i(o),$(uy.Initializing),v({type:Nb.DragStart,initialCoordinates:e,active:t}),y({type:"onDragStart",event:o})}))},onMove(e){v({type:Nb.DragMove,coordinates:e})},onEnd:l(Nb.DragEnd),onCancel:l(Nb.DragCancel)});function l(e){return async function(){const{active:t,collisions:n,over:i,scrollAdjustedTranslate:o}=G.current;let s=null;if(t&&o){const{cancelDrop:r}=B.current;if(s={activatorEvent:a,active:t,collisions:n,delta:o,over:i},e===Nb.DragEnd&&"function"==typeof r){await Promise.resolve(r(s))&&(e=Nb.DragCancel)}}F.current=null,r.unstable_batchedUpdates((()=>{v({type:e}),$(uy.Uninitialized),be(null),_(null),A(null);const t=e===Nb.DragEnd?"onDragEnd":"onDragCancel";if(s){const e=B.current[t];null==e||e(s),y({type:t,event:s})}}))}}r.unstable_batchedUpdates((()=>{_(s),A(e.nativeEvent)}))}),[j]),xe=t.useCallback(((e,t)=>(r,n)=>{const i=r.nativeEvent,o=j.get(n);if(null!==F.current||!o||i.dndKit||i.defaultPrevented)return;const a={active:o};!0===e(r,t.options,a)&&(i.dndKit={capturedBy:t.sensor},F.current=n,ye(r,t))}),[j,ye]),we=function(e,r){return t.useMemo((()=>e.reduce(((e,t)=>{const{sensor:n}=t;return[...e,...n.activators.map((e=>({eventName:e.eventName,handler:r(e.handler,t)})))]}),[])),[e,r])}(u,xe);!function(e){t.useEffect((()=>{if(!db)return;const t=e.map((e=>{let{sensor:t}=e;return null==t.setup?void 0:t.setup()}));return()=>{for(const e of t)null==e||e()}}),e.map((e=>{let{sensor:t}=e;return t})))}(u),vb((()=>{q&&w===uy.Initializing&&$(uy.Initialized)}),[q,w]),t.useEffect((()=>{const{onDragMove:e}=B.current,{active:t,activatorEvent:n,collisions:i,over:o}=G.current;if(!t||!n)return;const a={active:t,activatorEvent:n,collisions:i,delta:{x:fe.x,y:fe.y},over:o};r.unstable_batchedUpdates((()=>{null==e||e(a),y({type:"onDragMove",event:a})}))}),[fe.x,fe.y]),t.useEffect((()=>{const{active:e,activatorEvent:t,collisions:n,droppableContainers:i,scrollAdjustedTranslate:o}=G.current;if(!e||null==F.current||!t||!o)return;const{onDragOver:a}=B.current,s=i.get(ge),l=s&&s.rect.current?{id:s.id,rect:s.rect.current,data:s.data,disabled:s.disabled}:null,c={active:e,activatorEvent:t,collisions:n,delta:{x:o.x,y:o.y},over:l};r.unstable_batchedUpdates((()=>{be(l),null==a||a(c),y({type:"onDragOver",event:c})}))}),[ge]),vb((()=>{G.current={activatorEvent:M,active:O,activeNode:W,collisionRect:he,collisions:pe,droppableRects:L,draggableNodes:j,draggingNode:J,draggingNodeRect:ee,droppableContainers:D,over:me,scrollableAncestors:oe,scrollAdjustedTranslate:fe},E.current={initial:ee,translated:he}}),[O,W,pe,he,j,J,ee,L,D,me,oe,fe]),Pv({...U,delta:k,draggingRect:he,pointerCoordinates:le,scrollableAncestors:oe,scrollableAncestorRects:ae});const $e=t.useMemo((()=>({active:O,activeNode:W,activeNodeRect:q,activatorEvent:M,collisions:pe,containerNodeRect:X,dragOverlay:Q,draggableNodes:j,droppableContainers:D,droppableRects:L,over:me,measureDroppableContainers:N,scrollableAncestors:oe,scrollableAncestorRects:ae,measuringConfiguration:P,measuringScheduled:H,windowRect:ie})),[O,W,q,M,pe,X,Q,j,D,L,me,N,oe,ae,P,H,ie]),Ce=t.useMemo((()=>({activatorEvent:M,activators:we,active:O,activeNodeRect:q,ariaDescribedById:{draggable:R},dispatch:v,draggableNodes:j,over:me,measureDroppableContainers:N})),[M,we,O,q,v,R,j,me,N]);return Y.default.createElement(Rb.Provider,{value:x},Y.default.createElement(oy.Provider,{value:Ce},Y.default.createElement(ay.Provider,{value:$e},Y.default.createElement(dy.Provider,{value:ve},d)),Y.default.createElement(cy,{disabled:!1===(null==l?void 0:l.restoreFocus)})),Y.default.createElement(Lb,{...l,hiddenTextDescribedById:R}))})),hy=t.createContext(null),py="button";function gy(e){let{id:r,data:n,disabled:i=!1,attributes:o}=e;const a=jb("Droppable"),{activators:s,activatorEvent:l,active:c,activeNodeRect:d,ariaDescribedById:u,draggableNodes:f,over:h}=t.useContext(oy),{role:p=py,roleDescription:g="draggable",tabIndex:m=0}=null!=o?o:{},b=(null==c?void 0:c.id)===r,v=t.useContext(b?dy:hy),[y,x]=$b(),[w,$]=$b(),C=function(e,r){return t.useMemo((()=>e.reduce(((e,t)=>{let{eventName:n,handler:i}=t;return e[n]=e=>{i(e,r)},e}),{})),[e,r])}(s,r),S=xb(n);vb((()=>(f.set(r,{id:r,key:a,node:y,activatorNode:w,data:S}),()=>{const e=f.get(r);e&&e.key===a&&f.delete(r)})),[f,r]);return{active:c,activatorEvent:l,activeNodeRect:d,attributes:t.useMemo((()=>({role:p,tabIndex:m,"aria-disabled":i,"aria-pressed":!(!b||p!==py)||void 0,"aria-roledescription":g,"aria-describedby":u.draggable})),[i,p,m,b,g,u.draggable]),isDragging:b,listeners:i?void 0:C,node:y,over:h,setNodeRef:x,setActivatorNodeRef:$,transform:v}}const my={timeout:25};function by(e,t,r){const n=e.slice();return n.splice(r<0?n.length+r:r,0,n.splice(t,1)[0]),n}function vy(e,t){return e.reduce(((e,r,n)=>{const i=t.get(r);return i&&(e[n]=i),e}),Array(e.length))}function yy(e){return null!==e&&e>=0}const xy=e=>{let{rects:t,activeIndex:r,overIndex:n,index:i}=e;const o=by(t,n,r),a=t[i],s=o[i];return s&&a?{x:s.left-a.left,y:s.top-a.top,scaleX:s.width/a.width,scaleY:s.height/a.height}:null},wy={scaleX:1,scaleY:1},$y=e=>{var t;let{activeIndex:r,activeNodeRect:n,index:i,rects:o,overIndex:a}=e;const s=null!=(t=o[r])?t:n;if(!s)return null;if(i===r){const e=o[a];return e?{x:0,y:r<a?e.top+e.height-(s.top+s.height):e.top-s.top,...wy}:null}const l=function(e,t,r){const n=e[t],i=e[t-1],o=e[t+1];if(!n)return 0;if(r<t)return i?n.top-(i.top+i.height):o?o.top-(n.top+n.height):0;return o?o.top-(n.top+n.height):i?n.top-(i.top+i.height):0}(o,i,r);return i>r&&i<=a?{x:0,y:-s.height-l,...wy}:i<r&&i>=a?{x:0,y:s.height+l,...wy}:{x:0,y:0,...wy}};const Cy="Sortable",Sy=Y.default.createContext({activeIndex:-1,containerId:Cy,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:xy,disabled:{draggable:!1,droppable:!1}});function jy(e){let{children:r,id:n,items:i,strategy:o=xy,disabled:a=!1}=e;const{active:s,dragOverlay:l,droppableRects:c,over:d,measureDroppableContainers:u}=t.useContext(ay),f=jb(Cy,n),h=Boolean(null!==l.rect),p=t.useMemo((()=>i.map((e=>"object"==typeof e&&"id"in e?e.id:e))),[i]),g=null!=s,m=s?p.indexOf(s.id):-1,b=d?p.indexOf(d.id):-1,v=t.useRef(p),y=!function(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}(p,v.current),x=-1!==b&&-1===m||y,w=function(e){return"boolean"==typeof e?{draggable:e,droppable:e}:e}(a);vb((()=>{y&&g&&u(p)}),[y,p,g,u]),t.useEffect((()=>{v.current=p}),[p]);const $=t.useMemo((()=>({activeIndex:m,containerId:f,disabled:w,disableTransforms:x,items:p,overIndex:b,useDragOverlay:h,sortedRects:vy(p,c),strategy:o})),[m,f,w.draggable,w.droppable,x,p,b,c,h,o]);return Y.default.createElement(Sy.Provider,{value:$},r)}const ky=e=>{let{id:t,items:r,activeIndex:n,overIndex:i}=e;return by(r,n,i).indexOf(t)},Dy=e=>{let{containerId:t,isSorting:r,wasDragging:n,index:i,items:o,newIndex:a,previousItems:s,previousContainerId:l,transition:c}=e;return!(!c||!n)&&((s===o||i!==a)&&(!!r||a!==i&&t===l))},Ty={duration:200,easing:"ease"},Ey="transform",Oy=Fb.Transition.toString({property:Ey,duration:0,easing:"linear"}),Fy={roleDescription:"sortable"};function Iy(e){let{animateLayoutChanges:r=Dy,attributes:n,disabled:i,data:o,getNewIndex:a=ky,id:s,strategy:l,resizeObserverConfig:c,transition:d=Ty}=e;const{items:u,containerId:f,activeIndex:h,disabled:p,disableTransforms:g,sortedRects:m,overIndex:b,useDragOverlay:v,strategy:y}=t.useContext(Sy),x=function(e,t){var r,n;if("boolean"==typeof e)return{draggable:e,droppable:!1};return{draggable:null!=(r=null==e?void 0:e.draggable)?r:t.draggable,droppable:null!=(n=null==e?void 0:e.droppable)?n:t.droppable}}(i,p),w=u.indexOf(s),$=t.useMemo((()=>({sortable:{containerId:f,index:w,items:u},...o})),[f,o,w,u]),C=t.useMemo((()=>u.slice(u.indexOf(s))),[u,s]),{rect:S,node:j,isOver:k,setNodeRef:D}=function(e){let{data:r,disabled:n=!1,id:i,resizeObserverConfig:o}=e;const a=jb("Droppable"),{active:s,dispatch:l,over:c,measureDroppableContainers:d}=t.useContext(oy),u=t.useRef({disabled:n}),f=t.useRef(!1),h=t.useRef(null),p=t.useRef(null),{disabled:g,updateMeasurementsFor:m,timeout:b}={...my,...o},v=xb(null!=m?m:i),y=Yv({callback:t.useCallback((()=>{f.current?(null!=p.current&&clearTimeout(p.current),p.current=setTimeout((()=>{d(Array.isArray(v.current)?v.current:[v.current]),p.current=null}),b)):f.current=!0}),[b]),disabled:g||!s}),x=t.useCallback(((e,t)=>{y&&(t&&(y.unobserve(t),f.current=!1),e&&y.observe(e))}),[y]),[w,$]=$b(x),C=xb(r);return t.useEffect((()=>{y&&w.current&&(y.disconnect(),f.current=!1,y.observe(w.current))}),[w,y]),vb((()=>(l({type:Nb.RegisterDroppable,element:{id:i,key:a,disabled:n,node:w,rect:h,data:C}}),()=>l({type:Nb.UnregisterDroppable,key:a,id:i}))),[i]),t.useEffect((()=>{n!==u.current.disabled&&(l({type:Nb.SetDroppableDisabled,id:i,key:a,disabled:n}),u.current.disabled=n)}),[i,a,n,l]),{active:s,rect:h,isOver:(null==c?void 0:c.id)===i,node:w,over:c,setNodeRef:$}}({id:s,data:$,disabled:x.droppable,resizeObserverConfig:{updateMeasurementsFor:C,...c}}),{active:T,activatorEvent:E,activeNodeRect:O,attributes:F,setNodeRef:I,listeners:_,isDragging:M,over:A,setActivatorNodeRef:B,transform:R}=gy({id:s,data:$,attributes:{...Fy,...n},disabled:x.draggable}),z=function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return t.useMemo((()=>e=>{r.forEach((t=>t(e)))}),r)}(D,I),P=Boolean(T),L=P&&!g&&yy(h)&&yy(b),N=!v&&M,H=N&&L?R:null,W=L?null!=H?H:(null!=l?l:y)({rects:m,activeNodeRect:O,activeIndex:h,overIndex:b,index:w}):null,V=yy(h)&&yy(b)?a({id:s,items:u,activeIndex:h,overIndex:b}):w,Y=null==T?void 0:T.id,U=t.useRef({activeId:Y,items:u,newIndex:V,containerId:f}),K=u!==U.current.items,q=r({active:T,containerId:f,isDragging:M,isSorting:P,id:s,index:w,items:u,newIndex:U.current.newIndex,previousItems:U.current.items,previousContainerId:U.current.containerId,transition:d,wasDragging:null!=U.current.activeId}),X=function(e){let{disabled:r,index:n,node:i,rect:o}=e;const[a,s]=t.useState(null),l=t.useRef(n);return vb((()=>{if(!r&&n!==l.current&&i.current){const e=o.current;if(e){const t=tv(i.current,{ignoreTransform:!0}),r={x:e.left-t.left,y:e.top-t.top,scaleX:e.width/t.width,scaleY:e.height/t.height};(r.x||r.y)&&s(r)}}n!==l.current&&(l.current=n)}),[r,n,i,o]),t.useEffect((()=>{a&&s(null)}),[a]),a}({disabled:!q,index:w,node:j,rect:S});return t.useEffect((()=>{P&&U.current.newIndex!==V&&(U.current.newIndex=V),f!==U.current.containerId&&(U.current.containerId=f),u!==U.current.items&&(U.current.items=u)}),[P,V,f,u]),t.useEffect((()=>{if(Y===U.current.activeId)return;if(Y&&!U.current.activeId)return void(U.current.activeId=Y);const e=setTimeout((()=>{U.current.activeId=Y}),50);return()=>clearTimeout(e)}),[Y]),{active:T,activeIndex:h,attributes:F,data:$,rect:S,index:w,newIndex:V,items:u,isOver:k,isSorting:P,isDragging:M,listeners:_,node:j,overIndex:b,over:A,setNodeRef:z,setActivatorNodeRef:B,setDroppableNodeRef:D,setDraggableNodeRef:I,transform:null!=X?X:W,transition:function(){if(X||K&&U.current.newIndex===w)return Oy;if(N&&!Eb(E)||!d)return;if(P||q)return Fb.Transition.toString({...d,property:Ey});return}()}}function _y(e){if(!e)return!1;const t=e.data.current;return!!(t&&"sortable"in t&&"object"==typeof t.sortable&&"containerId"in t.sortable&&"items"in t.sortable&&"index"in t.sortable)}const My=[wv.Down,wv.Right,wv.Up,wv.Left],Ay=(e,t)=>{let{context:{active:r,collisionRect:n,droppableRects:i,droppableContainers:o,over:a,scrollableAncestors:s}}=t;if(My.includes(e.code)){if(e.preventDefault(),!r||!n)return;const t=[];o.getEnabled().forEach((r=>{if(!r||null!=r&&r.disabled)return;const o=i.get(r.id);if(o)switch(e.code){case wv.Down:n.top<o.top&&t.push(r);break;case wv.Up:n.top>o.top&&t.push(r);break;case wv.Left:n.left>o.left&&t.push(r);break;case wv.Right:n.left<o.left&&t.push(r)}}));const l=(e=>{let{collisionRect:t,droppableRects:r,droppableContainers:n}=e;const i=Kb(t),o=[];for(const e of n){const{id:t}=e,n=r.get(t);if(n){const r=Kb(n),a=i.reduce(((e,t,n)=>{return e+(i=r[n],o=t,Math.sqrt(Math.pow(i.x-o.x,2)+Math.pow(i.y-o.y,2)));var i,o}),0),s=Number((a/4).toFixed(4));o.push({id:t,data:{droppableContainer:e,value:s}})}}return o.sort(Yb)})({active:r,collisionRect:n,droppableRects:i,droppableContainers:t,pointerCoordinates:null});let c=qb(l,"id");if(c===(null==a?void 0:a.id)&&l.length>1&&(c=l[1].id),null!=c){const e=o.get(r.id),t=o.get(c),a=t?i.get(t.id):null,l=null==t?void 0:t.node.current;if(l&&a&&e&&t){const r=nv(l).some(((e,t)=>s[t]!==e)),i=By(e,t),o=function(e,t){if(!_y(e)||!_y(t))return!1;if(!By(e,t))return!1;return e.data.current.sortable.index<t.data.current.sortable.index}(e,t),c=r||!i?{x:0,y:0}:{x:o?n.width-a.width:0,y:o?n.height-a.height:0},d={x:a.left,y:a.top};return c.x&&c.y?d:Tb(d,c)}}}};function By(e,t){return!(!_y(e)||!_y(t))&&e.data.current.sortable.containerId===t.data.current.sortable.containerId}class Ry extends Mv{}Ry.activators=[{eventName:"onMouseDown",handler:({nativeEvent:e})=>zy(e.target)}];function zy(e){let t=e;for(;t;){if(t.dataset&&t.dataset.noDnd)return!1;t=t.parentElement}return!0}(class extends kv{}).activators=[{eventName:"onKeyDown",handler:({nativeEvent:e})=>zy(e.target)}];const Py=K.default.div`
    max-width: 30rem;
    padding: 0 1rem;
    pointer-events: auto;
`,Ly=K.default(gu)`
    color: ${Ks.text};
    ${ql({textSize:"body-md"})}

    ${el.MaxWidth.sm} {
        display: none;
    }
`,Ny=K.default(Cp)`
    padding: 3.5rem 1.25rem 2.5rem;
`,Hy=K.default.div`
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    color: ${Ks.text};
    ${ql({textSize:"body-md"})}
`,Wy=t=>{var{children:r,visible:n,onMobileClose:o}=t,a=X(t,["children","visible","onMobileClose"]);const s=a["data-testid"]||"popover",l=i.useTheme(),c=Js["sm-max"]({theme:l}),d=bc.useMediaQuery({maxWidth:c}),u=()=>{o&&o()},f=()=>"string"==typeof r?e.jsx(exports.Typography.BodyMD,{children:r}):r;return e.jsxs(e.Fragment,{children:[n&&e.jsx(Py,Object.assign({"data-testid":s},a,{children:e.jsx(Ly,{children:f()})})),d&&e.jsx(xp,{show:null!=n&&n,onOverlayClick:u,children:e.jsx(Ny,{onClose:u,children:e.jsx(Hy,{children:f()})})})]})},Vy=K.default.div`
    display: inline;
    width: fit-content;
    cursor: pointer;
    position: relative;
`,Yy=r=>{var n,o,{children:a,popoverContent:s,trigger:l="click",position:c="top",zIndex:d,rootNode:u,customOffset:f,delay:h,onPopoverAppear:p,onPopoverDismiss:m}=r,b=X(r,["children","popoverContent","trigger","position","zIndex","rootNode","customOffset","delay","onPopoverAppear","onPopoverDismiss"]);const[v,y]=t.useState(!1),x=t.useRef(null),w=t.useRef(null),$=i.useTheme(),C=Js["sm-max"]({theme:$}),S=bc.useMediaQuery({maxWidth:C}),{refs:j,floatingStyles:k,context:D}=g.useFloating({open:v,placement:c,whileElementsMounted:g.autoUpdate,middleware:[g.offset(null!=f?f:16),g.flip(),g.shift({limiter:g.limitShift()})],onOpenChange:e=>{y(e),v!==e&&B(e)}}),T=mh(),E=S?"click":l,O=g.useClick(D,{ignoreMouse:"hover"===E}),F=g.useDismiss(D),I=g.useHover(D,{enabled:"hover"===E,delay:{open:null!==(n=null==h?void 0:h.open)&&void 0!==n?n:0,close:null!==(o=null==h?void 0:h.close)&&void 0!==o?o:500}}),{getReferenceProps:_,getFloatingProps:M}=g.useInteractions([O,F,I]),A=()=>{y(!1),B(!1)},B=e=>{e&&p&&p(),!e&&m&&m()};return e.jsxs(e.Fragment,{children:[e.jsx(Vy,Object.assign({ref:e=>{x.current=e,j.setReference(e)}},_({onClick:e=>{e.stopPropagation(),e.preventDefault()}}),b,{children:a})),v&&e.jsx(g.FloatingPortal,{root:u,children:e.jsx(g.FloatingFocusManager,{context:D,children:e.jsx("div",Object.assign({ref:e=>{w.current=e,j.setFloating(e)},style:Object.assign(Object.assign({},k),{outline:"none",zIndex:null!=d?d:T})},M(),{children:"function"==typeof s?s():e.jsx(Wy,{visible:!0,onMobileClose:A,children:s})}))})})]})},Uy=e=>{switch(e){case"underline":return"text-decoration: underline 1px;";case"underline-dashed":return"text-decoration: underline dashed 1px;"}},Ky=K.default.span`
    color: ${Ks["text-primary"]};
    font-weight: 600;
    text-underline-position: under;

    ${({$defaultStyle:e})=>Uy(e)}

    &:hover,
    &:focus-visible {
        color: ${Ks["text-hover"]};
        ${({$hoverStyle:e})=>Uy(e)}
    }

    svg {
        height: 1lh; // align vertically
        width: 1em; // scale icon with font size
        vertical-align: top;
    }
`,qy=K.default.span`
    ${e=>!e.$standalone&&"margin-left: 0.25rem;"}
`,Xy=t=>{var{ariaLabel:r,content:n,icon:i,underlineStyle:o="default",underlineHoverStyle:a="default"}=t,s=X(t,["ariaLabel","content","icon","underlineStyle","underlineHoverStyle"]);const l=!!n;return e.jsx(Yy,Object.assign({},s,{children:e.jsxs(Ky,{role:"button","aria-haspopup":"dialog",tabIndex:0,$defaultStyle:o,$hoverStyle:a,"aria-label":null!=r?r:l?void 0:"More info",children:[n,i&&e.jsx(qy,{$standalone:!l,children:i})]})}))},Gy=K.default.div`
    padding-left: ${Zs["spacing-4"]};
    display: inline;
`,Zy=({addon:t,rootNode:r})=>{const{content:n,type:i,icon:o,id:a,zIndex:s,"data-testid":l}=t;return e.jsx(Gy,{children:e.jsx(Xy,{trigger:"click",id:a,"data-testid":l,popoverContent:n,rootNode:r,zIndex:s,icon:null!=o?o:e.jsx(c.ICircleFillIcon,{"data-testid":`${i}-icon`}),ariaLabel:"More info"})})},Qy=K.default.label`
    color: ${Ks["text-subtle"]};
    margin-bottom: ${Zs["spacing-8"]};
    display: inline-block;

    ${qs["form-label"]}
    ${ql()}
    font-weight: ${qs.Spec["weight-semibold"]};
`,Jy=K.default.p`
    ${qs["body-sm-semibold"]}
    color: ${Ks["text-error"]};
    margin-top: ${Zs["spacing-8"]};
    margin-bottom: 0;
    outline: none;
`,ex=K.default.span`
    ${qs["form-description"]}
    color: ${Ks["text-subtler"]};
    display: block;
`,tx=t=>{var{children:r,addon:n,subtitle:i,"data-testid":o}=t,a=X(t,["children","addon","subtitle","data-testid"]);return e.jsxs(Qy,Object.assign({},a,{children:[r,n&&n.type&&("popover"===(null==n?void 0:n.type)?e.jsx(Zy,{addon:n}):null),"string"==typeof i?e.jsx(ex,Object.assign({"data-testid":o?`${o}-subtitle`:"subtitle"},a,{children:i})):i]}))},rx=t=>e.jsx(Jy,Object.assign({},t)),nx=i.css`
    display: flex;
    flex-direction: column;

    &:not(:last-child) {
        margin-bottom: ${Zs["spacing-32"]};
    }
`,ix=K.default.div`
    ${nx}
`,ox=K.default(Xh)`
    ${nx}
`,ax=K.default(tp)`
    ${nx}
`,sx=({label:r,errorMessage:n,id:i,disabled:o,children:a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,"data-error-testid":v})=>{const y=!s&&(l||c||d)?"v2-grid":!s&&(u||f||h||p||g||m||b)?"grid":s||"flex",x=()=>v||(i?`${i}-error-message`:"error-message"),w=()=>!!n;const $=(e=>{switch(e){case"v2-grid":return ax;case"grid":return ox;case"flex":return ix}})(y);return e.jsxs($,Object.assign({},(e=>{switch(e){case"v2-grid":return{mobileCols:l,tabletCols:c,desktopCols:d};case"grid":return{xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b};case"flex":return}})(y),{children:[r&&("string"==typeof r?e.jsx(tx,{htmlFor:`${i}-base`,"data-testid":i?`${i}-label`:"form-label",disabled:o,children:r}):e.jsx(tx,Object.assign({htmlFor:`${i}-base`,"data-testid":i?`${i}-label`:"form-label",disabled:o},r))),(()=>{const e={"aria-invalid":w(),"aria-describedby":w()&&x()};return t.Children.map(a,(r=>t.cloneElement(r,e)))})(),n&&e.jsx(Jy,{id:x(),tabIndex:0,"data-testid":x(),children:n})]}))};function lx(e,t){return lx=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},lx(e,t)}function cx(e){return e&&e.stopPropagation&&e.stopPropagation(),e&&e.preventDefault&&e.preventDefault(),!1}function dx(e){return null==e?[]:Array.isArray(e)?e.slice():[e]}function ux(e){return null!==e&&1===e.length?e[0]:e.slice()}function fx(e){Object.keys(e).forEach((t=>{"undefined"!=typeof document&&document.addEventListener(t,e[t],!1)}))}function hx(e,t){return px(function(e,t){let r=e;return r<=t.min&&(r=t.min),r>=t.max&&(r=t.max),r}(e,t),t)}function px(e,t){const r=(e-t.min)%t.step;let n=e-r;return 2*Math.abs(r)>=t.step&&(n+=r>0?t.step:-t.step),parseFloat(n.toFixed(5))}let gx=function(e){function t(t){var r;(r=e.call(this,t)||this).onKeyUp=()=>{r.onEnd()},r.onMouseUp=()=>{r.onEnd(r.getMouseEventMap())},r.onTouchEnd=e=>{e.preventDefault(),r.onEnd(r.getTouchEventMap())},r.onBlur=()=>{r.setState({index:-1},r.onEnd(r.getKeyDownEventMap()))},r.onMouseMove=e=>{r.setState({pending:!0});const t=r.getMousePosition(e),n=r.getDiffPosition(t[0]),i=r.getValueFromPosition(n);r.move(i)},r.onTouchMove=e=>{if(e.touches.length>1)return;r.setState({pending:!0});const t=r.getTouchPosition(e);if(void 0===r.isScrolling){const e=t[0]-r.startPosition[0],n=t[1]-r.startPosition[1];r.isScrolling=Math.abs(n)>Math.abs(e)}if(r.isScrolling)return void r.setState({index:-1});const n=r.getDiffPosition(t[0]),i=r.getValueFromPosition(n);r.move(i)},r.onKeyDown=e=>{if(!(e.ctrlKey||e.shiftKey||e.altKey||e.metaKey))switch(r.setState({pending:!0}),e.key){case"ArrowLeft":case"ArrowDown":case"Left":case"Down":e.preventDefault(),r.moveDownByStep();break;case"ArrowRight":case"ArrowUp":case"Right":case"Up":e.preventDefault(),r.moveUpByStep();break;case"Home":e.preventDefault(),r.move(r.props.min);break;case"End":e.preventDefault(),r.move(r.props.max);break;case"PageDown":e.preventDefault(),r.moveDownByStep(r.props.pageFn(r.props.step));break;case"PageUp":e.preventDefault(),r.moveUpByStep(r.props.pageFn(r.props.step))}},r.onSliderMouseDown=e=>{if(!r.props.disabled&&2!==e.button){if(r.setState({pending:!0}),!r.props.snapDragDisabled){const t=r.getMousePosition(e);r.forceValueFromPosition(t[0],(e=>{r.start(e,t[0]),fx(r.getMouseEventMap())}))}cx(e)}},r.onSliderClick=e=>{if(!r.props.disabled&&r.props.onSliderClick&&!r.hasMoved){const t=r.getMousePosition(e),n=hx(r.calcValue(r.calcOffsetFromPosition(t[0])),r.props);r.props.onSliderClick(n)}},r.createOnKeyDown=e=>t=>{r.props.disabled||(r.start(e),fx(r.getKeyDownEventMap()),cx(t))},r.createOnMouseDown=e=>t=>{if(r.props.disabled||2===t.button)return;r.setState({pending:!0});const n=r.getMousePosition(t);r.start(e,n[0]),fx(r.getMouseEventMap()),cx(t)},r.createOnTouchStart=e=>t=>{if(r.props.disabled||t.touches.length>1)return;r.setState({pending:!0});const n=r.getTouchPosition(t);r.startPosition=n,r.isScrolling=void 0,r.start(e,n[0]),fx(r.getTouchEventMap()),function(e){e.stopPropagation&&e.stopPropagation()}(t)},r.handleResize=()=>{const e=window.setTimeout((()=>{r.pendingResizeTimeouts.shift(),r.resize()}),0);r.pendingResizeTimeouts.push(e)},r.renderThumb=(e,t)=>{const n=r.props.thumbClassName+" "+r.props.thumbClassName+"-"+t+" "+(r.state.index===t?r.props.thumbActiveClassName:""),i={ref:e=>{r["thumb"+t]=e},key:r.props.thumbClassName+"-"+t,className:n,style:e,onMouseDown:r.createOnMouseDown(t),onTouchStart:r.createOnTouchStart(t),onFocus:r.createOnKeyDown(t),tabIndex:0,role:"slider","aria-orientation":r.props.orientation,"aria-valuenow":r.state.value[t],"aria-valuemin":r.props.min,"aria-valuemax":r.props.max,"aria-label":Array.isArray(r.props.ariaLabel)?r.props.ariaLabel[t]:r.props.ariaLabel,"aria-labelledby":Array.isArray(r.props.ariaLabelledby)?r.props.ariaLabelledby[t]:r.props.ariaLabelledby,"aria-disabled":r.props.disabled},o={index:t,value:ux(r.state.value),valueNow:r.state.value[t]};return r.props.ariaValuetext&&(i["aria-valuetext"]="string"==typeof r.props.ariaValuetext?r.props.ariaValuetext:r.props.ariaValuetext(o)),r.props.renderThumb(i,o)},r.renderTrack=(e,t,n)=>{const i={key:r.props.trackClassName+"-"+e,className:r.props.trackClassName+" "+r.props.trackClassName+"-"+e,style:r.buildTrackStyle(t,r.state.upperBound-n)},o={index:e,value:ux(r.state.value)};return r.props.renderTrack(i,o)};let n=dx(t.value);n.length||(n=dx(t.defaultValue)),r.pendingResizeTimeouts=[];const i=[];for(let e=0;e<n.length;e+=1)n[e]=hx(n[e],t),i.push(e);return r.resizeObserver=null,r.resizeElementRef=Y.default.createRef(),r.state={index:-1,upperBound:0,sliderLength:0,value:n,zIndices:i},r}!function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,lx(e,t)}(t,e);var r=t.prototype;return r.componentDidMount=function(){"undefined"!=typeof window&&(this.resizeObserver=new ResizeObserver(this.handleResize),this.resizeObserver.observe(this.resizeElementRef.current),this.resize())},t.getDerivedStateFromProps=function(e,t){const r=dx(e.value);return r.length?t.pending?null:{value:r.map((t=>hx(t,e)))}:null},r.componentDidUpdate=function(){0===this.state.upperBound&&this.resize()},r.componentWillUnmount=function(){this.clearPendingResizeTimeouts(),this.resizeObserver&&this.resizeObserver.disconnect()},r.onEnd=function(e){e&&function(e){Object.keys(e).forEach((t=>{"undefined"!=typeof document&&document.removeEventListener(t,e[t],!1)}))}(e),this.hasMoved&&this.fireChangeEvent("onAfterChange"),this.setState({pending:!1}),this.hasMoved=!1},r.getValue=function(){return ux(this.state.value)},r.getClosestIndex=function(e){let t=Number.MAX_VALUE,r=-1;const{value:n}=this.state,i=n.length;for(let o=0;o<i;o+=1){const i=this.calcOffset(n[o]),a=Math.abs(e-i);a<t&&(t=a,r=o)}return r},r.getMousePosition=function(e){return[e["page"+this.axisKey()],e["page"+this.orthogonalAxisKey()]]},r.getTouchPosition=function(e){const t=e.touches[0];return[t["page"+this.axisKey()],t["page"+this.orthogonalAxisKey()]]},r.getKeyDownEventMap=function(){return{keydown:this.onKeyDown,keyup:this.onKeyUp,focusout:this.onBlur}},r.getMouseEventMap=function(){return{mousemove:this.onMouseMove,mouseup:this.onMouseUp}},r.getTouchEventMap=function(){return{touchmove:this.onTouchMove,touchend:this.onTouchEnd}},r.getValueFromPosition=function(e){const t=e/(this.state.sliderLength-this.state.thumbSize)*(this.props.max-this.props.min);return hx(this.state.startValue+t,this.props)},r.getDiffPosition=function(e){let t=e-this.state.startPosition;return this.props.invert&&(t*=-1),t},r.resize=function(){const{slider:e,thumb0:t}=this;if(!e||!t)return;const r=this.sizeKey(),n=e.getBoundingClientRect(),i=e[r],o=n[this.posMaxKey()],a=n[this.posMinKey()],s=t.getBoundingClientRect()[r.replace("client","").toLowerCase()],l=i-s,c=Math.abs(o-a);this.state.upperBound===l&&this.state.sliderLength===c&&this.state.thumbSize===s||this.setState({upperBound:l,sliderLength:c,thumbSize:s})},r.calcOffset=function(e){const t=this.props.max-this.props.min;return 0===t?0:(e-this.props.min)/t*this.state.upperBound},r.calcValue=function(e){return e/this.state.upperBound*(this.props.max-this.props.min)+this.props.min},r.calcOffsetFromPosition=function(e){const{slider:t}=this,r=t.getBoundingClientRect(),n=r[this.posMaxKey()],i=r[this.posMinKey()];let o=e-(window["page"+this.axisKey()+"Offset"]+(this.props.invert?n:i));return this.props.invert&&(o=this.state.sliderLength-o),o-=this.state.thumbSize/2,o},r.forceValueFromPosition=function(e,t){const r=this.calcOffsetFromPosition(e),n=this.getClosestIndex(r),i=hx(this.calcValue(r),this.props),o=this.state.value.slice();o[n]=i;for(let e=0;e<o.length-1;e+=1)if(o[e+1]-o[e]<this.props.minDistance)return;this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0,this.setState({value:o},(()=>{t(n),this.fireChangeEvent("onChange")}))},r.clearPendingResizeTimeouts=function(){do{const e=this.pendingResizeTimeouts.shift();clearTimeout(e)}while(this.pendingResizeTimeouts.length)},r.start=function(e,t){const r=this["thumb"+e];r&&r.focus();const{zIndices:n}=this.state;n.splice(n.indexOf(e),1),n.push(e),this.setState((r=>({startValue:r.value[e],startPosition:void 0!==t?t:r.startPosition,index:e,zIndices:n})))},r.moveUpByStep=function(e){void 0===e&&(e=this.props.step);const t=this.state.value[this.state.index],r=hx(this.props.invert&&"horizontal"===this.props.orientation?t-e:t+e,this.props);this.move(Math.min(r,this.props.max))},r.moveDownByStep=function(e){void 0===e&&(e=this.props.step);const t=this.state.value[this.state.index],r=hx(this.props.invert&&"horizontal"===this.props.orientation?t+e:t-e,this.props);this.move(Math.max(r,this.props.min))},r.move=function(e){const t=this.state.value.slice(),{index:r}=this.state,{length:n}=t,i=t[r];if(e===i)return;this.hasMoved||this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0;const{pearling:o,max:a,min:s,minDistance:l}=this.props;if(!o){if(r>0){const n=t[r-1];e<n+l&&(e=n+l)}if(r<n-1){const n=t[r+1];e>n-l&&(e=n-l)}}t[r]=e,o&&n>1&&(e>i?(this.pushSucceeding(t,l,r),function(e,t,r,n){for(let i=0;i<e;i+=1){const o=n-i*r;t[e-1-i]>o&&(t[e-1-i]=o)}}(n,t,l,a)):e<i&&(this.pushPreceding(t,l,r),function(e,t,r,n){for(let i=0;i<e;i+=1){const e=n+i*r;t[i]<e&&(t[i]=e)}}(n,t,l,s))),this.setState({value:t},this.fireChangeEvent.bind(this,"onChange"))},r.pushSucceeding=function(e,t,r){let n,i;for(n=r,i=e[n]+t;null!==e[n+1]&&i>e[n+1];n+=1,i=e[n]+t)e[n+1]=px(i,this.props)},r.pushPreceding=function(e,t,r){for(let n=r,i=e[n]-t;null!==e[n-1]&&i<e[n-1];n-=1,i=e[n]-t)e[n-1]=px(i,this.props)},r.axisKey=function(){return"vertical"===this.props.orientation?"Y":"X"},r.orthogonalAxisKey=function(){return"vertical"===this.props.orientation?"X":"Y"},r.posMinKey=function(){return"vertical"===this.props.orientation?this.props.invert?"bottom":"top":this.props.invert?"right":"left"},r.posMaxKey=function(){return"vertical"===this.props.orientation?this.props.invert?"top":"bottom":this.props.invert?"left":"right"},r.sizeKey=function(){return"vertical"===this.props.orientation?"clientHeight":"clientWidth"},r.fireChangeEvent=function(e){this.props[e]&&this.props[e](ux(this.state.value),this.state.index)},r.buildThumbStyle=function(e,t){const r={position:"absolute",touchAction:"none",willChange:this.state.index>=0?this.posMinKey():void 0,zIndex:this.state.zIndices.indexOf(t)+1};return r[this.posMinKey()]=e+"px",r},r.buildTrackStyle=function(e,t){const r={position:"absolute",willChange:this.state.index>=0?this.posMinKey()+","+this.posMaxKey():void 0};return r[this.posMinKey()]=e,r[this.posMaxKey()]=t,r},r.buildMarkStyle=function(e){var t;return(t={position:"absolute"})[this.posMinKey()]=e,t},r.renderThumbs=function(e){const{length:t}=e,r=[];for(let n=0;n<t;n+=1)r[n]=this.buildThumbStyle(e[n],n);const n=[];for(let e=0;e<t;e+=1)n[e]=this.renderThumb(r[e],e);return n},r.renderTracks=function(e){const t=[],r=e.length-1;t.push(this.renderTrack(0,0,e[0]));for(let n=0;n<r;n+=1)t.push(this.renderTrack(n+1,e[n],e[n+1]));return t.push(this.renderTrack(r+1,e[r],this.state.upperBound)),t},r.renderMarks=function(){let{marks:e}=this.props;const t=this.props.max-this.props.min+1;return"boolean"==typeof e?e=Array.from({length:t}).map(((e,t)=>t)):"number"==typeof e&&(e=Array.from({length:t}).map(((e,t)=>t)).filter((t=>t%e==0))),e.map(parseFloat).sort(((e,t)=>e-t)).map((e=>{const t=this.calcOffset(e),r={key:e,className:this.props.markClassName,style:this.buildMarkStyle(t)};return this.props.renderMark(r)}))},r.render=function(){const e=[],{value:t}=this.state,r=t.length;for(let n=0;n<r;n+=1)e[n]=this.calcOffset(t[n],n);const n=this.props.withTracks?this.renderTracks(e):null,i=this.renderThumbs(e),o=this.props.marks?this.renderMarks():null;return Y.default.createElement("div",{ref:e=>{this.slider=e,this.resizeElementRef.current=e},style:{position:"relative"},className:this.props.className+(this.props.disabled?" disabled":""),onMouseDown:this.onSliderMouseDown,onClick:this.onSliderClick},n,i,o)},t}(Y.default.Component);gx.displayName="ReactSlider",gx.defaultProps={min:0,max:100,step:1,pageFn:e=>10*e,minDistance:0,defaultValue:0,orientation:"horizontal",className:"slider",thumbClassName:"thumb",thumbActiveClassName:"active",trackClassName:"track",markClassName:"mark",withTracks:!0,pearling:!1,disabled:!1,snapDragDisabled:!1,invert:!1,marks:[],renderThumb:e=>Y.default.createElement("div",e),renderTrack:e=>Y.default.createElement("div",e),renderMark:e=>Y.default.createElement("span",e)};var mx=gx;const bx=K.default.div`
    isolation: isolate;
`,vx=K.default.div`
    margin-top: ${Zs["spacing-8"]};
    display: flex;
    justify-content: space-between;
    gap: ${Zs["spacing-8"]};
`,yx=K.default.div`
    margin-bottom: ${Zs["spacing-8"]};
`,xx=K.default(exports.Typography.BodyBL)`
    overflow-wrap: anywhere;
`,wx=K.default(mx)`
    height: 0.875rem;
`,$x=K.default.div`
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
`,Cx=K.default.div`
    height: 0.875rem;
    width: 0.875rem;
    position: relative;
    outline: none;

    :focus ${$x}:after {
        outline-offset: -1px;
        outline: ${Gs["width-040"]} ${Gs.solid}
            ${Ks["border-selected"]};
    }
`,Sx=K.default.div`
    height: 0.25rem;
    top: 50%;
    transform: translateY(-50%);
    border-radius: ${Qs.full};

    background: ${e=>e.$color&&"function"==typeof e.$color?e.$color(e):e.$color||Ks["border-strong"](e)};
`,jx=r=>{var{value:n,min:i=0,max:o=100,step:a=1,minRange:s,numOfThumbs:l=2,colors:c,disabled:d,readOnly:u,ariaLabels:f,showSliderLabels:h,sliderLabelPrefix:p,sliderLabelSuffix:g,showIndicatorLabel:m,indicatorLabelPrefix:b,indicatorLabelSuffix:v,renderSliderLabel:y,onChange:x,onChangeEnd:w}=r,$=X(r,["value","min","max","step","minRange","numOfThumbs","colors","disabled","readOnly","ariaLabels","showSliderLabels","sliderLabelPrefix","sliderLabelSuffix","showIndicatorLabel","indicatorLabelPrefix","indicatorLabelSuffix","renderSliderLabel","onChange","onChangeEnd"]);const[C,S]=t.useState(k()),j=function(){const e=function(){const e=d||u?Ks["border-disabled"]:Ks["border-strong"],t=d||u?Ks["border-selected-disabled"]:Ks["border-selected"];if(1===l)return[t,e];const r=[];r.push(e);for(let e=0;e<l-1;e++)r.push(t);return r.push(e),r}();return new Array(l+1).fill(0).map(((t,r)=>(null==c?void 0:c[r])||e[r]))}();t.useEffect((()=>{n!==C&&S(k())}),[n]);function k(){if(n&&n.length===l)return n;const e=[];for(let t=0;t<l;t++)e.push(i+a*t);return e}const D=t=>y?y(t):e.jsxs(xx,{children:[p,t,g]});return e.jsxs(bx,Object.assign({},$,{children:[m&&e.jsx(yx,{children:(()=>{let t="";if(1===C.length)t=`${C[0]}`;else if(2===C.length)t=`${C[0]} - ${C[1]}`;else if(C.length>2){t=`${Math.min(...C)} - ${Math.max(...C)}`}return e.jsxs(xx,{children:[b,t,v]})})()}),e.jsx(wx,{step:a,min:i,max:o,value:C,disabled:d||u,onChange:(e,t)=>{if("number"==typeof e){const t=[e];S(t),null==x||x(t)}else{if(t>-1&&C[t]===e[t])return;const r=[...e];S(r),null==x||x(r)}},onAfterChange:e=>{if("number"==typeof e){const t=[e];S(t),null==w||w(t)}else{const t=[...e];S(t),null==w||w(t)}},minDistance:s,ariaLabel:f,renderThumb:(t,r)=>e.jsx(Cx,Object.assign({"data-testid":`slider-thumb-${r.index}`},t,{tabIndex:d?void 0:t.tabIndex,children:e.jsx($x,{$disabled:d,$readOnly:u})})),renderTrack:(t,r)=>e.jsx(Sx,Object.assign({"data-testid":`slider-track-${r.index}`},t,{$color:j[r.index]}))}),h&&e.jsxs(vx,{children:[e.jsx("div",{children:D(i)}),e.jsx("div",{children:D(o)})]})]}))},kx=K.default.div`
    display: flex;
    margin-bottom: ${Zs["spacing-16"]};
    align-items: baseline;
`,Dx=K.default.div`
    margin: 0 0.5rem;
`,Tx=K.default.div`
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: flex-end;
    padding: 0 0.4375rem;
`,Ex=K.default.div`
    flex: 1;
    border-radius: ${Qs.sm} ${Qs.sm} 0 0;
    border: 0.5px solid transparent; // space between bars
    background-clip: content-box;

    ${e=>{let t=Ks["bg-strongest"];return e.$disabled&&e.$selected?t=Ks["bg-selected-stronger-disabled"]:e.$disabled?t=Ks["bg-disabled"]:e.$selected&&(t=Ks["bg-selected-stronger"]),i.css`
            background-color: ${t};
        `}}
`,Ox=K.default(jx)`
    margin-top: -0.3125rem;
`,Fx=r=>{var{bins:n=[],interval:i,disabled:o,readOnly:a,value:s,showRangeLabels:l,rangeLabelPrefix:c,rangeLabelSuffix:d,ariaLabels:u,onChange:f,onChangeEnd:h,renderEmptyView:p,renderRangeLabel:g}=r,m=X(r,["bins","interval","disabled","readOnly","value","showRangeLabels","rangeLabelPrefix","rangeLabelSuffix","ariaLabels","onChange","onChangeEnd","renderEmptyView","renderRangeLabel"]);const b=n.map((e=>e.count)),v=Math.max(...b),y=n.map((e=>e.minValue)),x=Math.max(...y),w=Math.min(...y),[$,C]=t.useState(D()),S=t.useMemo((()=>{const e=[...n].sort(((e,t)=>e.minValue-t.minValue)),t=(x-w)/i+1,r=[];for(let n=0;n<t;n++){const t=e.find((e=>e.minValue===w+i*n));t?r.push(t):r.push({count:0,minValue:w+i*n})}return r}),[n,i]);t.useEffect((()=>{s!==$&&C(D())}),[s]);const j=e=>{const[t,r]=e,n=[t,r];C(n),null==f||f(n)},k=e=>{const[t,r]=e,n=[t,r];C(n),null==h||h(n)};function D(){return null!=s?s:[w,w+i]}const T=t=>g?g(t):e.jsxs(exports.Typography.BodyBL,{children:[c,t,d]});return e.jsxs("div",Object.assign({},m,{children:[l&&e.jsxs(kx,{children:[T($[0]),e.jsx(Dx,{children:"-"}),T($[1])]}),S.every((e=>0===e.count))&&p?p():e.jsxs(e.Fragment,{children:[e.jsx(Tx,{children:S.map(((t,r)=>{const n=t.count/v;return e.jsx(Ex,{style:{height:n?`calc(calc(100% - 0.25rem) * ${n} + 0.25rem)`:0},$selected:t.minValue>=$[0]&&t.minValue<$[1],$disabled:o||a},r)}))}),e.jsx(Ox,{min:w,max:x+i,step:i,minRange:i,numOfThumbs:2,value:$,disabled:o,readOnly:a,ariaLabels:u,onChange:j,onChangeEnd:k})]})]}))},Ix=K.default(Bf)`
    width: 100%;
    height: calc(3rem - 2px); // exclude top and bottom borders

    ${e=>"no-border"!==e.$styleType&&i.css`
            padding-left: ${Zs["spacing-16"]};
            padding-right: ${e.$showClear?0:Zs["spacing-16"]};
        `}
`,_x=K.default(Rf)`
    height: auto;
    padding: ${Zs["spacing-12"]} ${Zs["spacing-16"]};

    cursor: pointer;
    color: ${Ks.icon};

    ${e=>"no-border"===e.$styleType&&i.css`
            margin-right: -${Zs["spacing-12"]};
        `}
`,Mx=K.default(m.CrossIcon)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`,Ax=K.default.div`
    display: flex;
    width: 100%;
`,Bx=K.default(Mf)`
    display: flex;
    align-items: center;
    width: 100%;
`,Rx=Y.default.forwardRef(((r,n)=>{var{value:i,spacing:o,type:a,error:s,disabled:l,readOnly:c,onChange:d,onClear:u,allowClear:f=!1,className:h,styleType:p="bordered"}=r,g=X(r,["value","spacing","type","error","disabled","readOnly","onChange","onClear","allowClear","className","styleType"]);const m=((e,t)=>"tel"===e&&!!t)(a,o),b=t.useRef(null);t.useImperativeHandle(n,(()=>b.current),[]);const v=id({ref:b,formatter:e=>m?Jc.transformWithSpaces(e,o):e}),y=e=>{d&&(m?w(e):d(e))},x=()=>{u&&u(),b&&b.current&&b.current.focus()},w=e=>{const t=v();if(!t)return;const{nextValue:r,updateCaretPosition:n}=t,i=r.replace(/\s/g,"");e.target.value=i,null==d||d(e),n()},$=i?(e=>e?m?Jc.transformWithSpaces(e,o):e:"")(i):i,C=f&&!l&&!c&&!!i,S=()=>e.jsxs(e.Fragment,{children:[e.jsx(Ix,Object.assign({"data-testid":"input",ref:b,disabled:l,value:$,onChange:y,type:a,readOnly:c,$showClear:C,$styleType:p},g)),C&&e.jsx(_x,{onClick:x,type:"button",$styleType:p,children:e.jsx(Mx,{"aria-hidden":!0})})]});return e.jsx(e.Fragment,{children:"no-border"===p?e.jsx(Ax,{className:h,children:S()}):e.jsx(Bx,{$disabled:l,$error:s,$readOnly:c,className:h,children:S()})})})),zx=Y.default.forwardRef(((t,r)=>{const{label:n,errorMessage:i,id:o="form-field","data-error-testid":a,"data-testid":s,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:f,xsCols:h,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v}=t,y=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(sx,{id:o,label:n,errorMessage:i,disabled:y.disabled,"data-error-testid":a,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:f,xsCols:h,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v,children:e.jsx(Rx,Object.assign({id:`${o}-base`,"data-testid":s||o,ref:r,error:!!i},y))})}));var Px=ua;var Lx=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r};var Nx=function(e){return this.__data__.get(e)};var Hx=function(e){return this.__data__.has(e)},Wx=ua,Vx=fa,Yx=Ia;var Ux=function(e,t){var r=this.__data__;if(r instanceof Wx){var n=r.__data__;if(!Vx||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new Yx(n)}return r.set(e,t),this.size=r.size,this},Kx=ua,qx=function(){this.__data__=new Px,this.size=0},Xx=Lx,Gx=Nx,Zx=Hx,Qx=Ux;function Jx(e){var t=this.__data__=new Kx(e);this.size=t.size}Jx.prototype.clear=qx,Jx.prototype.delete=Xx,Jx.prototype.get=Gx,Jx.prototype.has=Zx,Jx.prototype.set=Qx;var ew=Jx;var tw=Ia,rw=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},nw=function(e){return this.__data__.has(e)};function iw(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new tw;++t<r;)this.add(e[t])}iw.prototype.add=iw.prototype.push=rw,iw.prototype.has=nw;var ow=function(e,t){return e.has(t)},aw=iw,sw=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1},lw=ow;var cw=function(e,t,r,n,i,o){var a=1&r,s=e.length,l=t.length;if(s!=l&&!(a&&l>s))return!1;var c=o.get(e),d=o.get(t);if(c&&d)return c==t&&d==e;var u=-1,f=!0,h=2&r?new aw:void 0;for(o.set(e,t),o.set(t,e);++u<s;){var p=e[u],g=t[u];if(n)var m=a?n(g,p,u,t,e,o):n(p,g,u,e,t,o);if(void 0!==m){if(m)continue;f=!1;break}if(h){if(!sw(t,(function(e,t){if(!lw(h,t)&&(p===e||i(p,e,r,n,o)))return h.push(t)}))){f=!1;break}}else if(p!==g&&!i(p,g,r,n,o)){f=!1;break}}return o.delete(e),o.delete(t),f};var dw=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r};var uw=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r},fw=Mi.Uint8Array,hw=Ko,pw=cw,gw=dw,mw=uw,bw=Ai?Ai.prototype:void 0,vw=bw?bw.valueOf:void 0;var yw=function(e,t,r,n,i,o,a){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!o(new fw(e),new fw(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return hw(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var s=gw;case"[object Set]":var l=1&n;if(s||(s=mw),e.size!=t.size&&!l)return!1;var c=a.get(e);if(c)return c==t;n|=2,a.set(e,t);var d=pw(s(e),s(t),n,i,o,a);return a.delete(e),d;case"[object Symbol]":if(vw)return vw.call(e)==vw.call(t)}return!1};var xw=function(e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];return e},ww=Oi;var $w=function(e,t,r){var n=t(e);return ww(e)?n:xw(n,r(e))};var Cw=function(e,t){for(var r=-1,n=null==e?0:e.length,i=0,o=[];++r<n;){var a=e[r];t(a,r,e)&&(o[i++]=a)}return o},Sw=function(){return[]},jw=Object.prototype.propertyIsEnumerable,kw=Object.getOwnPropertySymbols,Dw=kw?function(e){return null==e?[]:(e=Object(e),Cw(kw(e),(function(t){return jw.call(e,t)})))}:Sw;var Tw=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n},Ew=Ui,Ow=Ki;var Fw=function(e){return Ow(e)&&"[object Arguments]"==Ew(e)},Iw=Ki,_w=Object.prototype,Mw=_w.hasOwnProperty,Aw=_w.propertyIsEnumerable,Bw=Fw(function(){return arguments}())?Fw:function(e){return Iw(e)&&Mw.call(e,"callee")&&!Aw.call(e,"callee")},Rw={exports:{}};var zw=function(){return!1};!function(e,t){var r=Mi,n=zw,i=t&&!t.nodeType&&t,o=i&&e&&!e.nodeType&&e,a=o&&o.exports===i?r.Buffer:void 0,s=(a?a.isBuffer:void 0)||n;e.exports=s}(Rw,Rw.exports);var Pw=Rw.exports,Lw=/^(?:0|[1-9]\d*)$/;var Nw=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&Lw.test(e))&&e>-1&&e%1==0&&e<t};var Hw=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},Ww=Ui,Vw=Hw,Yw=Ki,Uw={};Uw["[object Float32Array]"]=Uw["[object Float64Array]"]=Uw["[object Int8Array]"]=Uw["[object Int16Array]"]=Uw["[object Int32Array]"]=Uw["[object Uint8Array]"]=Uw["[object Uint8ClampedArray]"]=Uw["[object Uint16Array]"]=Uw["[object Uint32Array]"]=!0,Uw["[object Arguments]"]=Uw["[object Array]"]=Uw["[object ArrayBuffer]"]=Uw["[object Boolean]"]=Uw["[object DataView]"]=Uw["[object Date]"]=Uw["[object Error]"]=Uw["[object Function]"]=Uw["[object Map]"]=Uw["[object Number]"]=Uw["[object Object]"]=Uw["[object RegExp]"]=Uw["[object Set]"]=Uw["[object String]"]=Uw["[object WeakMap]"]=!1;var Kw=function(e){return Yw(e)&&Vw(e.length)&&!!Uw[Ww(e)]};var qw=function(e){return function(t){return e(t)}},Xw={exports:{}};!function(e,t){var r=Fi,n=t&&!t.nodeType&&t,i=n&&e&&!e.nodeType&&e,o=i&&i.exports===n&&r.process,a=function(){try{var e=i&&i.require&&i.require("util").types;return e||o&&o.binding&&o.binding("util")}catch(e){}}();e.exports=a}(Xw,Xw.exports);var Gw=Xw.exports,Zw=Kw,Qw=qw,Jw=Gw&&Gw.isTypedArray,e$=Jw?Qw(Jw):Zw,t$=Tw,r$=Bw,n$=Oi,i$=Pw,o$=Nw,a$=e$,s$=Object.prototype.hasOwnProperty;var l$=function(e,t){var r=n$(e),n=!r&&r$(e),i=!r&&!n&&i$(e),o=!r&&!n&&!i&&a$(e),a=r||n||i||o,s=a?t$(e.length,String):[],l=s.length;for(var c in e)!t&&!s$.call(e,c)||a&&("length"==c||i&&("offset"==c||"parent"==c)||o&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||o$(c,l))||s.push(c);return s},c$=Object.prototype;var d$=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||c$)};var u$=function(e,t){return function(r){return e(t(r))}},f$=u$(Object.keys,Object),h$=d$,p$=f$,g$=Object.prototype.hasOwnProperty;var m$=function(e){if(!h$(e))return p$(e);var t=[];for(var r in Object(e))g$.call(e,r)&&"constructor"!=r&&t.push(r);return t},b$=ao,v$=Hw;var y$=function(e){return null!=e&&v$(e.length)&&!b$(e)},x$=l$,w$=m$,$$=y$;var C$=function(e){return $$(e)?x$(e):w$(e)},S$=$w,j$=Dw,k$=C$;var D$=function(e){return S$(e,k$,j$)},T$=Object.prototype.hasOwnProperty;var E$=function(e,t,r,n,i,o){var a=1&r,s=D$(e),l=s.length;if(l!=D$(t).length&&!a)return!1;for(var c=l;c--;){var d=s[c];if(!(a?d in t:T$.call(t,d)))return!1}var u=o.get(e),f=o.get(t);if(u&&f)return u==t&&f==e;var h=!0;o.set(e,t),o.set(t,e);for(var p=a;++c<l;){var g=e[d=s[c]],m=t[d];if(n)var b=a?n(m,g,d,t,e,o):n(g,m,d,e,t,o);if(!(void 0===b?g===m||i(g,m,r,n,o):b)){h=!1;break}p||(p="constructor"==d)}if(h&&!p){var v=e.constructor,y=t.constructor;v==y||!("constructor"in e)||!("constructor"in t)||"function"==typeof v&&v instanceof v&&"function"==typeof y&&y instanceof y||(h=!1)}return o.delete(e),o.delete(t),h},O$=ko(Mi,"DataView"),F$=fa,I$=ko(Mi,"Promise"),_$=ko(Mi,"Set"),M$=ko(Mi,"WeakMap"),A$=Ui,B$=fo,R$="[object Map]",z$="[object Promise]",P$="[object Set]",L$="[object WeakMap]",N$="[object DataView]",H$=B$(O$),W$=B$(F$),V$=B$(I$),Y$=B$(_$),U$=B$(M$),K$=A$;(O$&&K$(new O$(new ArrayBuffer(1)))!=N$||F$&&K$(new F$)!=R$||I$&&K$(I$.resolve())!=z$||_$&&K$(new _$)!=P$||M$&&K$(new M$)!=L$)&&(K$=function(e){var t=A$(e),r="[object Object]"==t?e.constructor:void 0,n=r?B$(r):"";if(n)switch(n){case H$:return N$;case W$:return R$;case V$:return z$;case Y$:return P$;case U$:return L$}return t});var q$=K$,X$=ew,G$=cw,Z$=yw,Q$=E$,J$=q$,eC=Oi,tC=Pw,rC=e$,nC="[object Arguments]",iC="[object Array]",oC="[object Object]",aC=Object.prototype.hasOwnProperty;var sC=function(e,t,r,n,i,o){var a=eC(e),s=eC(t),l=a?iC:J$(e),c=s?iC:J$(t),d=(l=l==nC?oC:l)==oC,u=(c=c==nC?oC:c)==oC,f=l==c;if(f&&tC(e)){if(!tC(t))return!1;a=!0,d=!1}if(f&&!d)return o||(o=new X$),a||rC(e)?G$(e,t,r,n,i,o):Z$(e,t,l,r,n,i,o);if(!(1&r)){var h=d&&aC.call(e,"__wrapped__"),p=u&&aC.call(t,"__wrapped__");if(h||p){var g=h?e.value():e,m=p?t.value():t;return o||(o=new X$),i(g,m,r,n,o)}}return!!f&&(o||(o=new X$),Q$(e,t,r,n,i,o))},lC=Ki;var cC=function e(t,r,n,i,o){return t===r||(null==t||null==r||!lC(t)&&!lC(r)?t!=t&&r!=r:sC(t,r,n,i,e,o))},dC=ew,uC=cC;var fC=function(e,t,r,n){var i=r.length,o=i,a=!n;if(null==e)return!o;for(e=Object(e);i--;){var s=r[i];if(a&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++i<o;){var l=(s=r[i])[0],c=e[l],d=s[1];if(a&&s[2]){if(void 0===c&&!(l in e))return!1}else{var u=new dC;if(n)var f=n(c,d,l,e,t,u);if(!(void 0===f?uC(d,c,3,n,u):f))return!1}}return!0},hC=ro;var pC=function(e){return e==e&&!hC(e)},gC=pC,mC=C$;var bC=function(e){for(var t=mC(e),r=t.length;r--;){var n=t[r],i=e[n];t[r]=[n,i,gC(i)]}return t};var vC=function(e,t){return function(r){return null!=r&&(r[e]===t&&(void 0!==t||e in Object(r)))}},yC=fC,xC=bC,wC=vC;var $C=function(e,t){return null!=e&&t in Object(e)},CC=Qa,SC=Bw,jC=Oi,kC=Nw,DC=Hw,TC=es;var EC=function(e,t,r){for(var n=-1,i=(t=CC(t,e)).length,o=!1;++n<i;){var a=TC(t[n]);if(!(o=null!=e&&r(e,a)))break;e=e[a]}return o||++n!=i?o:!!(i=null==e?0:e.length)&&DC(i)&&kC(a,i)&&(jC(e)||SC(e))},OC=$C,FC=EC;var IC=cC,_C=os,MC=function(e,t){return null!=e&&FC(e,t,OC)},AC=to,BC=pC,RC=vC,zC=es;var PC=function(e){return function(t){return null==t?void 0:t[e]}},LC=ns;var NC=PC,HC=function(e){return function(t){return LC(t,e)}},WC=to,VC=es;var YC=function(e){var t=xC(e);return 1==t.length&&t[0][2]?wC(t[0][0],t[0][1]):function(r){return r===e||yC(r,e,t)}},UC=function(e,t){return AC(e)&&BC(t)?RC(zC(e),t):function(r){var n=_C(r,e);return void 0===n&&n===t?MC(r,e):IC(t,n,3)}},KC=function(e){return e},qC=Oi,XC=function(e){return WC(e)?NC(VC(e)):HC(e)};var GC=function(e){return"function"==typeof e?e:null==e?KC:"object"==typeof e?qC(e)?UC(e[0],e[1]):YC(e):XC(e)},ZC=GC,QC=y$,JC=C$;var eS=function(e){return function(t,r,n){var i=Object(t);if(!QC(t)){var o=ZC(r);t=JC(t),r=function(e){return o(i[e],e,i)}}var a=e(t,r,n);return a>-1?i[o?t[a]:a]:void 0}};var tS=Bu,rS=1/0;var nS=function(e){return e?(e=tS(e))===rS||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var iS=function(e,t,r,n){for(var i=e.length,o=r+(n?1:-1);n?o--:++o<i;)if(t(e[o],o,e))return o;return-1},oS=GC,aS=function(e){var t=nS(e),r=t%1;return t==t?r?t-r:t:0},sS=Math.max;var lS=function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var i=null==r?0:aS(r);return i<0&&(i=sS(n+i,0)),iS(e,oS(t),i)},cS=Ei(lS),dS=Ei(eS(lS)),uS=cC;var fS=Ei((function(e,t){return uS(e,t)}));const hS=K.default(Di.div)`
    overflow: hidden;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);
`,pS=K.default.ul`
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
`,gS=K.default.li`
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
`,mS=K.default.button`
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
`,bS=i.css`
    overflow: hidden;
    display: -webkit-inline-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${e=>e.$maxLines||2};
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
`,vS=K.default.div`
    ${e=>"small"===e.$variant?qs["body-md-regular"]:qs["body-baseline-regular"]}
    color: ${Ks.text};
    width: 100%;

    ${e=>"end"===e.$truncateType&&bS}
`,yS=K.default.div`
    color: ${Ks["text-subtlest"]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&bS}

    ${e=>"next-line"===e.$labelDisplayType?i.css`
                    ${qs["body-md-semibold"]}
                `:i.css`
                    ${qs["body-baseline-regular"]}
                `}
`,xS=K.default.div`
    text-align: left;
    width: 100%;

    ${e=>{switch(e.$labelDisplayType){case"next-line":return i.css`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return i.css`
                    ${vS} {
                        display: inline;
                    }

                    ${yS} {
                        display: inline;
                        margin-left: ${Zs["spacing-8"]};
                    }
                `}}}
`,wS=K.default.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    word-break: break-all;
    overflow: hidden;
`,$S=K.default.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,CS=K.default(Su)`
    flex-shrink: 0;
    margin-right: ${Zs["spacing-16"]};
`,SS=K.default.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: ${Zs["spacing-16"]} 0 ${Zs["spacing-8"]} 0;
`,jS=K.default.button`
    ${e=>"small"===e.$variant?qs["body-md-semibold"]:qs["body-baseline-semibold"]}
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    color: ${Ks["text-primary"]};
`,kS=K.default.div`
    width: 100%;
    display: flex;
    padding: 15px ${Zs["spacing-16"]}; // TODO: confirm vertical padding
    align-items: center;

    ${e=>"small"===e.$variant?qs["body-md-regular"]:qs["body-baseline-regular"]}
`,DS=K.default(s.ExclamationCircleFillIcon)`
    height: 1em;
    width: 1em;
    margin-right: ${Zs["spacing-4"]};
    color: ${Ks["icon-error"]};
`,TS=K.default(jl)`
    margin-right: ${Zs["spacing-4"]};
    color: ${Ks.icon};
`,ES=e=>"small"===e?1:1.375,OS=e=>i.css`
        height: ${ES(e)}rem;
        width: ${ES(e)}rem;
    `,FS=K.default.li`
    background: ${Ks["bg-strong"]};
    display: flex;
    border-radius: ${Qs.sm};
    align-items: center;
`,IS=K.default(Bf)`
    height: ${e=>"small"===e.$variant?2.5:3}rem;
    flex: 1;
    padding: 0 ${Zs["spacing-8"]} 0 0;
    width: 100%;
`,_S=K.default(x.MagnifierIcon)`
    ${e=>OS(e.$variant)}
    margin: 0 ${Zs["spacing-8"]};
    color: ${Ks.icon};
`,MS=K.default(nl)`
    ${e=>OS(e.$variant)}
    padding: 0;
    margin: 0 ${Zs["spacing-8"]};
    color: ${Ks.icon};
    cursor: pointer;
    ${e=>{if("small"===e.$variant)return i.css`
                svg {
                    ${OS(e.$variant)}
                }
            `}}
`,AS=t.forwardRef(((t,r)=>{const{onClear:n}=t,i=X(t,["onClear"]);return e.jsxs(FS,{children:[e.jsx(_S,{$variant:t.variant}),e.jsx(IS,Object.assign({ref:r,$variant:t.variant},i)),i.value&&e.jsx(MS,{"aria-label":"Clear search",focusOutline:"browser",onClick:n,$variant:t.variant,children:e.jsx(u.CrossIcon,{})})]},"search")})),BS=r=>{var{listItems:n,listExtractor:i,valueExtractor:o,onSelectItem:a,listStyleWidth:s,visible:l,enableSearch:c,searchPlaceholder:d="Search",onSearch:u,searchFunction:f,onDismiss:h,disableItemFocus:p,multiSelect:g,selectedItems:m,onSelectAll:b,onRetry:v,itemsLoadState:y="success",itemTruncationType:x="end",itemMaxLines:w=2,labelDisplayType:$="inline",renderListItem:C,onBlur:S,hideNoResultsDisplay:j,renderCustomCallToAction:k,variant:D="default"}=r,T=X(r,["listItems","listExtractor","valueExtractor","onSelectItem","listStyleWidth","visible","enableSearch","searchPlaceholder","onSearch","searchFunction","onDismiss","disableItemFocus","multiSelect","selectedItems","onSelectAll","onRetry","itemsLoadState","itemTruncationType","itemMaxLines","labelDisplayType","renderListItem","onBlur","hideNoResultsDisplay","renderCustomCallToAction","variant"]);const[E,O]=t.useState(0),[F,I]=t.useState(""),[_,M]=t.useState(null!=n?n:[]),[A,B]=t.useState(0),R=ci({height:A}),z=t.useRef(null),P=t.useRef(null),L=t.useRef([]),N=t.useRef(null),H=t.useRef(null),W=t.useRef(E),V=t.useRef(_),Y=e=>{W.current=e,O(e)},U=e=>{V.current=e,M(e)};t.useEffect((()=>(document.addEventListener("keydown",J),()=>{document.removeEventListener("keydown",J)})),[]),t.useEffect((()=>{Z(F)}),[F]),t.useEffect((()=>{if(I(""),l){if(setTimeout((()=>{B(Q())})),p)return;N&&N.current?(N.current.focus(),Y(-1)):L.current[E]&&L.current[E].focus()}else B(0)}),[l]),t.useEffect((()=>{if(l){const e=Q();B(e)}}),[_,y]),t.useEffect((()=>{U(null!=n?n:[]),I(""),Y(0)}),[n]);const K=e=>{const t=i?i(e):null==e?void 0:e.toString();return"object"==typeof t?{title:t.title,secondaryLabel:t.secondaryLabel}:{title:null!=t?t:""}},q=e=>{if("inline"!==$)return!1;let t=0;P&&P.current&&(t=P.current.getBoundingClientRect().width-60);return Jc.getTextWidth(e,"1.125rem 'Open Sans'")>t*w},G=e=>!!dS(m,(t=>fS(t,e))),Z=e=>{if(""===e)U(null!=n?n:[]);else if(f){const t=f(e);U(t)}else{const t=null==n?void 0:n.filter((t=>{const{title:r,secondaryLabel:n}=K(t),i=e.trim().toLowerCase();return r.includes(i)||n&&n.includes(i)}));U(null!=t?t:[])}},Q=()=>(P&&P.current?P.current.getBoundingClientRect().height:0)+(H.current?H.current.getBoundingClientRect().height:0),J=e=>{var t,r;if(z&&z.current.contains(e.target))switch(e.code){case"ArrowDown":if(W.current<V.current.length-1){const e=W.current+1;null===(t=L.current[e])||void 0===t||t.focus(),Y(e)}break;case"ArrowUp":if(W.current>0){const e=W.current-1;null===(r=L.current[e])||void 0===r||r.focus(),Y(W.current-1)}break;case"Escape":h&&h(!0)}},ee=(e,t)=>{e.preventDefault(),a&&a(t,(e=>o?o(e):e)(t))},te=e=>{const t=e.target.value;I(t),u&&u()},re=()=>{var e;I(""),null===(e=N.current)||void 0===e||e.focus(),u&&u()},ne=()=>{v&&v()},ie=()=>{S&&S()},oe=t=>e.jsxs(e.Fragment,{children:[e.jsx(wS,{$maxLines:w,"aria-hidden":!0,children:t}),e.jsx($S,{$maxLines:w,"aria-hidden":!0,children:t})]}),ae=t=>{const{title:r,secondaryLabel:n}=K(t),i=q(r),o=n&&q(n),a=i||o?"next-line":$;return e.jsxs(xS,{$labelDisplayType:a,children:[e.jsx(vS,{$truncateType:x,$maxLines:w,$variant:D,"aria-label":r,children:"middle"===x&&i?oe(r):r}),n&&e.jsx(yS,{$truncateType:x,$maxLines:w,$labelDisplayType:$,"aria-label":n,children:"middle"===x&&o?oe(n):n})]})},se=()=>{if(!v||"success"===y)return _.map(((t,r)=>e.jsx(gS,{$checked:G(t)&&!g,children:e.jsxs(mS,{$hasNextLineLabel:"next-line"===$&&_.length>0&&i&&"string"!=typeof i(_[0]),onClick:e=>{ee(e,t)},ref:e=>L.current[r]=e,"data-testid":"list-item",type:"button",tabIndex:l?0:-1,$multiSelect:g,onBlur:ie,$variant:D,children:[g&&e.jsx(CS,{checked:G(t),displaySize:"small"}),C?C(t,{selected:G(t)}):ae(t)]})},((e,t)=>`item_${t}__${o?o(e):e}`)(t,r))))},le=()=>{if(m&&g&&_.length>0&&!F&&"success"===y)return e.jsx(SS,{children:e.jsx(jS,{onClick:b,type:"button",$variant:D,children:0===m.length?"Select all":"Clear all"})},"selectAll")},ce=()=>{if(!j&&(F||!c)&&0===_.length&&"success"===y)return e.jsxs(kS,{"data-testid":"list-no-results",$variant:D,children:[e.jsx(DS,{"data-testid":"no-result-icon",$variant:D}),"No results found."]},"noResults")},de=()=>{if(v&&"loading"===y)return e.jsxs(kS,{"data-testid":"list-loading",$variant:D,children:[e.jsx(TS,{}),"Loading..."]},"loading")},ue=()=>{if(v&&"fail"===y)return e.jsxs(kS,{"data-testid":"list-fail",$variant:D,children:[e.jsx(DS,{"data-testid":"load-error-icon",$variant:D}),"Failed to load. ",e.jsx(jS,{onClick:ne,type:"button",$variant:D,children:"Try again."})]},"noResults")};return e.jsx(e.Fragment,{children:e.jsxs(hS,{style:R,"data-testid":l?"dropdown-container":"dropdown-container-hidden",ref:z,children:[(()=>{if(l)return e.jsxs(pS,Object.assign({ref:P,"data-testid":"dropdown-list",width:s,role:"list"},T,{children:[(c||f)&&"success"===y?e.jsx(AS,{ref:N,onChange:te,value:F,placeholder:d,"data-testid":"search-input","aria-label":"search-input",tabIndex:l?0:-1,onClear:re,variant:D}):null,le(),ce(),de(),ue(),se()]}))})(),(()=>{if(l&&k)return e.jsx("div",{ref:H,"data-testid":"custom-cta",children:k(h,_)})})()]})})},RS=K.default.div`
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
`,zS=K.default(ah)`
    padding: 0;
    width: auto;
`,PS=K.default.div`
    padding: 10px 0; // TODO: confirm vertical spacing
    display: flex;
    align-items: center;
    padding: 0;
    background: transparent;
    margin-right: ${Zs["spacing-12"]};
`,LS=K.default.div`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: ${Xs["duration-250"]} ${Xs["ease-default"]};
    margin: 0 ${Zs["spacing-12"]};
    display: flex;
    align-items: center;
`,NS=K.default(f.ChevronDownIcon)`
    color: ${Ks.icon};
    height: ${qs.Spec["body-size-baseline"]};
    width: ${qs.Spec["body-size-baseline"]};
`,HS=K.default.div`
    display: flex;
    flex: 1 1 auto;
`,WS=K.default(exports.Typography.BodyBL)`
    text-align: left;
    ${il(2)}
    text-overflow: ellipsis;
`,VS=K.default(WS)`
    color: ${Ks["text-subtler"]};
`,YS=K.default.div`
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
`,US=K.default(Mf)`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0 ${Zs["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,KS=K.default(Mf)`
    display: flex;
    position: relative;
    width: 100%;
    padding: 0 ${Zs["spacing-16"]};
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,qS=K.default(Rx)``,XS=K.default.div`
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
`,GS=Y.default.forwardRef(((r,n)=>{var{addon:i,error:o,onChange:a,readOnly:s,className:l,onBlur:c}=r,d=X(r,["addon","error","onChange","readOnly","className","onBlur"]);const{placeholder:u,options:f,enableSearch:h,searchFunction:p,searchPlaceholder:g,valueExtractor:m,listExtractor:b,displayValueExtractor:v,selectedOption:y,onSelectOption:x,onHideOptions:w,onShowOptions:$,"data-selector-testid":C}=i.attributes,{position:S}=i,[j,k]=t.useState(y),[D,T]=t.useState(!1),E=t.useRef(null);t.useEffect((()=>{k(y)}),[y]);const O=()=>{if(j)return v?v(j):m?m(j):j.toString()},F=e=>{!e&&w&&w(),e&&$&&$()},I=e=>{e.preventDefault(),d.disabled||(T(!D),F(!D))},_=(e,t)=>{var r;k(e),T(!1),F(!1),E&&(null===(r=E.current)||void 0===r||r.focus()),x&&x(e,t)},M=e=>{a&&a(e)},A=()=>{c&&c()},B=()=>{var e;T(!1),F(!1),E&&(null===(e=E.current)||void 0===e||e.focus())};return e.jsxs(ph,{className:l,show:D,error:o&&!D,disabled:d.disabled,readOnly:s,onBlur:()=>{T(!1),F(!1),A()},children:[e.jsxs(RS,{$expanded:D,$readOnly:s,$position:S,children:[s?j?e.jsx(PS,{children:e.jsx(WS,{"data-testid":"selector-label",children:O()})}):null:e.jsx(zS,{ref:E,type:"button",disabled:d.disabled,"data-testid":C||"addon-selector",onClick:I,children:e.jsxs(e.Fragment,{children:[e.jsxs(HS,{children:[u&&!j&&e.jsx(VS,{children:u}),j&&e.jsx(WS,{"data-testid":"selector-label",children:O()})]}),e.jsx(LS,{$expanded:D,children:e.jsx(NS,{})})]})}),e.jsx(YS,{$readOnly:s,$position:S}),e.jsx(qS,Object.assign({ref:n},d,{readOnly:s,error:o,onChange:M,"data-testid":d["data-testid"]||"input",onBlur:A,styleType:"no-border"}))]}),f&&f.length>0?e.jsx(BS,{listItems:f,selectedItems:y?[y]:[],onSelectItem:_,valueExtractor:m,listExtractor:b,visible:D,enableSearch:h,searchFunction:p,searchPlaceholder:g,"data-testid":"dropdown-list",onBlur:A,onDismiss:B}):e.jsx(e.Fragment,{})]})})),ZS=Y.default.forwardRef(((t,r)=>{var{addon:n,error:i,className:o}=t,a=X(t,["addon","error","className"]);const s=()=>e.jsx(KS,{$disabled:a.disabled,$error:i,$readOnly:a.readOnly,"data-testid":a["data-testid"],className:o,children:e.jsx(qS,Object.assign({ref:r},a,{"data-testid":"input",styleType:"no-border"}))});if(!n)return s();{const{type:t="label",position:l="left"}=n,{allowClear:c}=a;switch(t){case"list":{const t=n.attributes;return t.options&&t.options.length>0?e.jsx(GS,Object.assign({ref:r,addon:n,error:i,className:o},a)):s()}case"custom":{const t=n.attributes;return t.children?e.jsxs(US,{$error:i,$disabled:a.disabled,$readOnly:a.readOnly,"data-testid":a["data-testid"],$position:l,className:o,children:[e.jsx(XS,{"data-testid":"addon",$disabled:a.disabled,$readOnly:a.readOnly,$position:l,children:t.children}),e.jsx(qS,Object.assign({ref:r},a,{allowClear:c&&"right"!==l,error:i,"data-testid":"input",styleType:"no-border"}))]}):s()}default:{const t=n.attributes;return t.value?e.jsxs(US,{$disabled:a.disabled,$error:i,$readOnly:a.readOnly,"data-testid":a["data-testid"],$position:l,className:o,children:[e.jsx(XS,{"data-testid":"addon",$disabled:a.disabled,$readOnly:a.readOnly,$position:l,children:t.value}),e.jsx(qS,Object.assign({ref:r},a,{allowClear:c&&"right"!==l,error:i,"data-testid":"input",styleType:"no-border"}))]}):s()}}}})),QS=Y.default.forwardRef(((t,r)=>{const{label:n,errorMessage:i,id:o="form-field-group","data-error-testid":a,"data-testid":s,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:f,xsCols:h,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v}=t,y=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(sx,{id:o,label:n,errorMessage:i,disabled:y.disabled,"data-error-testid":a,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:f,xsCols:h,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v,children:e.jsx(ZS,Object.assign({ref:r,id:`${o}-base`,"data-testid":s||o,error:!!i},y))})})),JS=K.default(ZS)`
    padding: 0 0 0 ${({readOnly:e})=>e?"0":Zs["spacing-16"]};
    input {
        cursor: ${({readOnly:e,$isDisabled:t})=>e&&!t?"pointer":"initial"};
    }
`,ej=K.default.div`
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
`,tj=K.default.div`
    display: flex;
    align-items: center;
    height: 3rem;
`,rj=K.default(exports.Typography.BodyBL)`
    color: ${Ks["text-subtler"]};
`,nj=K.default(jl)`
    margin-right: ${Zs["spacing-8"]};
    color: ${Ks.icon};
`,ij=K.default.span`
    color: ${Ks["text-primary"]};
    text-decoration: underline;
    font-weight: ${qs.Spec["weight-semibold"]};
`,oj=K.default.span`
    display: flex;
    align-items: center;
    margin-right: ${Zs["spacing-8"]};
`,aj=K.default(C.ExclamationTriangleIcon)`
    color: ${Ks["icon-warning"]};
    margin-right: ${Zs["spacing-8"]};
    height: 1em;
    width: 1em;
`,sj=K.default.span`
    color: ${Ks["text-warning"]};
`,lj=K.default(Rf)`
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
        ${ij} {
            color: ${Ks["text-hover"]};
        }
    }
`;var cj={exports:{}};
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */!function(e,t){(function(){var r,n="Expected a function",i="__lodash_hash_undefined__",o="__lodash_placeholder__",a=16,s=32,l=64,c=128,d=256,u=1/0,f=9007199254740991,h=NaN,p=4294967295,g=[["ary",c],["bind",1],["bindKey",2],["curry",8],["curryRight",a],["flip",512],["partial",s],["partialRight",l],["rearg",d]],m="[object Arguments]",b="[object Array]",v="[object Boolean]",y="[object Date]",x="[object Error]",w="[object Function]",$="[object GeneratorFunction]",C="[object Map]",S="[object Number]",j="[object Object]",k="[object Promise]",D="[object RegExp]",T="[object Set]",E="[object String]",O="[object Symbol]",F="[object WeakMap]",I="[object ArrayBuffer]",_="[object DataView]",M="[object Float32Array]",A="[object Float64Array]",B="[object Int8Array]",R="[object Int16Array]",z="[object Int32Array]",P="[object Uint8Array]",L="[object Uint8ClampedArray]",N="[object Uint16Array]",H="[object Uint32Array]",W=/\b__p \+= '';/g,V=/\b(__p \+=) '' \+/g,Y=/(__e\(.*?\)|\b__t\)) \+\n'';/g,U=/&(?:amp|lt|gt|quot|#39);/g,K=/[&<>"']/g,q=RegExp(U.source),X=RegExp(K.source),G=/<%-([\s\S]+?)%>/g,Z=/<%([\s\S]+?)%>/g,Q=/<%=([\s\S]+?)%>/g,J=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ee=/^\w*$/,te=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,re=/[\\^$.*+?()[\]{}|]/g,ne=RegExp(re.source),ie=/^\s+/,oe=/\s/,ae=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,se=/\{\n\/\* \[wrapped with (.+)\] \*/,le=/,? & /,ce=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,de=/[()=,{}\[\]\/\s]/,ue=/\\(\\)?/g,fe=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,he=/\w*$/,pe=/^[-+]0x[0-9a-f]+$/i,ge=/^0b[01]+$/i,me=/^\[object .+?Constructor\]$/,be=/^0o[0-7]+$/i,ve=/^(?:0|[1-9]\d*)$/,ye=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,xe=/($^)/,we=/['\n\r\u2028\u2029\\]/g,$e="\\ud800-\\udfff",Ce="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",Se="\\u2700-\\u27bf",je="a-z\\xdf-\\xf6\\xf8-\\xff",ke="A-Z\\xc0-\\xd6\\xd8-\\xde",De="\\ufe0e\\ufe0f",Te="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Ee="['’]",Oe="["+$e+"]",Fe="["+Te+"]",Ie="["+Ce+"]",_e="\\d+",Me="["+Se+"]",Ae="["+je+"]",Be="[^"+$e+Te+_e+Se+je+ke+"]",Re="\\ud83c[\\udffb-\\udfff]",ze="[^"+$e+"]",Pe="(?:\\ud83c[\\udde6-\\uddff]){2}",Le="[\\ud800-\\udbff][\\udc00-\\udfff]",Ne="["+ke+"]",He="\\u200d",We="(?:"+Ae+"|"+Be+")",Ve="(?:"+Ne+"|"+Be+")",Ye="(?:['’](?:d|ll|m|re|s|t|ve))?",Ue="(?:['’](?:D|LL|M|RE|S|T|VE))?",Ke="(?:"+Ie+"|"+Re+")"+"?",qe="["+De+"]?",Xe=qe+Ke+("(?:"+He+"(?:"+[ze,Pe,Le].join("|")+")"+qe+Ke+")*"),Ge="(?:"+[Me,Pe,Le].join("|")+")"+Xe,Ze="(?:"+[ze+Ie+"?",Ie,Pe,Le,Oe].join("|")+")",Qe=RegExp(Ee,"g"),Je=RegExp(Ie,"g"),et=RegExp(Re+"(?="+Re+")|"+Ze+Xe,"g"),tt=RegExp([Ne+"?"+Ae+"+"+Ye+"(?="+[Fe,Ne,"$"].join("|")+")",Ve+"+"+Ue+"(?="+[Fe,Ne+We,"$"].join("|")+")",Ne+"?"+We+"+"+Ye,Ne+"+"+Ue,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",_e,Ge].join("|"),"g"),rt=RegExp("["+He+$e+Ce+De+"]"),nt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,it=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],ot=-1,at={};at[M]=at[A]=at[B]=at[R]=at[z]=at[P]=at[L]=at[N]=at[H]=!0,at[m]=at[b]=at[I]=at[v]=at[_]=at[y]=at[x]=at[w]=at[C]=at[S]=at[j]=at[D]=at[T]=at[E]=at[F]=!1;var st={};st[m]=st[b]=st[I]=st[_]=st[v]=st[y]=st[M]=st[A]=st[B]=st[R]=st[z]=st[C]=st[S]=st[j]=st[D]=st[T]=st[E]=st[O]=st[P]=st[L]=st[N]=st[H]=!0,st[x]=st[w]=st[F]=!1;var lt={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},ct=parseFloat,dt=parseInt,ut="object"==typeof Ti&&Ti&&Ti.Object===Object&&Ti,ft="object"==typeof self&&self&&self.Object===Object&&self,ht=ut||ft||Function("return this")(),pt=t&&!t.nodeType&&t,gt=pt&&e&&!e.nodeType&&e,mt=gt&&gt.exports===pt,bt=mt&&ut.process,vt=function(){try{var e=gt&&gt.require&&gt.require("util").types;return e||bt&&bt.binding&&bt.binding("util")}catch(e){}}(),yt=vt&&vt.isArrayBuffer,xt=vt&&vt.isDate,wt=vt&&vt.isMap,$t=vt&&vt.isRegExp,Ct=vt&&vt.isSet,St=vt&&vt.isTypedArray;function jt(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}function kt(e,t,r,n){for(var i=-1,o=null==e?0:e.length;++i<o;){var a=e[i];t(n,a,r(a),e)}return n}function Dt(e,t){for(var r=-1,n=null==e?0:e.length;++r<n&&!1!==t(e[r],r,e););return e}function Tt(e,t){for(var r=null==e?0:e.length;r--&&!1!==t(e[r],r,e););return e}function Et(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(!t(e[r],r,e))return!1;return!0}function Ot(e,t){for(var r=-1,n=null==e?0:e.length,i=0,o=[];++r<n;){var a=e[r];t(a,r,e)&&(o[i++]=a)}return o}function Ft(e,t){return!!(null==e?0:e.length)&&Nt(e,t,0)>-1}function It(e,t,r){for(var n=-1,i=null==e?0:e.length;++n<i;)if(r(t,e[n]))return!0;return!1}function _t(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i}function Mt(e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];return e}function At(e,t,r,n){var i=-1,o=null==e?0:e.length;for(n&&o&&(r=e[++i]);++i<o;)r=t(r,e[i],i,e);return r}function Bt(e,t,r,n){var i=null==e?0:e.length;for(n&&i&&(r=e[--i]);i--;)r=t(r,e[i],i,e);return r}function Rt(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1}var zt=Yt("length");function Pt(e,t,r){var n;return r(e,(function(e,r,i){if(t(e,r,i))return n=r,!1})),n}function Lt(e,t,r,n){for(var i=e.length,o=r+(n?1:-1);n?o--:++o<i;)if(t(e[o],o,e))return o;return-1}function Nt(e,t,r){return t==t?function(e,t,r){var n=r-1,i=e.length;for(;++n<i;)if(e[n]===t)return n;return-1}(e,t,r):Lt(e,Wt,r)}function Ht(e,t,r,n){for(var i=r-1,o=e.length;++i<o;)if(n(e[i],t))return i;return-1}function Wt(e){return e!=e}function Vt(e,t){var r=null==e?0:e.length;return r?qt(e,t)/r:h}function Yt(e){return function(t){return null==t?r:t[e]}}function Ut(e){return function(t){return null==e?r:e[t]}}function Kt(e,t,r,n,i){return i(e,(function(e,i,o){r=n?(n=!1,e):t(r,e,i,o)})),r}function qt(e,t){for(var n,i=-1,o=e.length;++i<o;){var a=t(e[i]);a!==r&&(n=n===r?a:n+a)}return n}function Xt(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}function Gt(e){return e?e.slice(0,hr(e)+1).replace(ie,""):e}function Zt(e){return function(t){return e(t)}}function Qt(e,t){return _t(t,(function(t){return e[t]}))}function Jt(e,t){return e.has(t)}function er(e,t){for(var r=-1,n=e.length;++r<n&&Nt(t,e[r],0)>-1;);return r}function tr(e,t){for(var r=e.length;r--&&Nt(t,e[r],0)>-1;);return r}var rr=Ut({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),nr=Ut({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});function ir(e){return"\\"+lt[e]}function or(e){return rt.test(e)}function ar(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r}function sr(e,t){return function(r){return e(t(r))}}function lr(e,t){for(var r=-1,n=e.length,i=0,a=[];++r<n;){var s=e[r];s!==t&&s!==o||(e[r]=o,a[i++]=r)}return a}function cr(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r}function dr(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=[e,e]})),r}function ur(e){return or(e)?function(e){var t=et.lastIndex=0;for(;et.test(e);)++t;return t}(e):zt(e)}function fr(e){return or(e)?function(e){return e.match(et)||[]}(e):function(e){return e.split("")}(e)}function hr(e){for(var t=e.length;t--&&oe.test(e.charAt(t)););return t}var pr=Ut({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"});var gr=function e(t){var oe=(t=null==t?ht:gr.defaults(ht.Object(),t,gr.pick(ht,it))).Array,$e=t.Date,Ce=t.Error,Se=t.Function,je=t.Math,ke=t.Object,De=t.RegExp,Te=t.String,Ee=t.TypeError,Oe=oe.prototype,Fe=Se.prototype,Ie=ke.prototype,_e=t["__core-js_shared__"],Me=Fe.toString,Ae=Ie.hasOwnProperty,Be=0,Re=function(){var e=/[^.]+$/.exec(_e&&_e.keys&&_e.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),ze=Ie.toString,Pe=Me.call(ke),Le=ht._,Ne=De("^"+Me.call(Ae).replace(re,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),He=mt?t.Buffer:r,We=t.Symbol,Ve=t.Uint8Array,Ye=He?He.allocUnsafe:r,Ue=sr(ke.getPrototypeOf,ke),Ke=ke.create,qe=Ie.propertyIsEnumerable,Xe=Oe.splice,Ge=We?We.isConcatSpreadable:r,Ze=We?We.iterator:r,et=We?We.toStringTag:r,rt=function(){try{var e=fo(ke,"defineProperty");return e({},"",{}),e}catch(e){}}(),lt=t.clearTimeout!==ht.clearTimeout&&t.clearTimeout,ut=$e&&$e.now!==ht.Date.now&&$e.now,ft=t.setTimeout!==ht.setTimeout&&t.setTimeout,pt=je.ceil,gt=je.floor,bt=ke.getOwnPropertySymbols,vt=He?He.isBuffer:r,zt=t.isFinite,Ut=Oe.join,mr=sr(ke.keys,ke),br=je.max,vr=je.min,yr=$e.now,xr=t.parseInt,wr=je.random,$r=Oe.reverse,Cr=fo(t,"DataView"),Sr=fo(t,"Map"),jr=fo(t,"Promise"),kr=fo(t,"Set"),Dr=fo(t,"WeakMap"),Tr=fo(ke,"create"),Er=Dr&&new Dr,Or={},Fr=zo(Cr),Ir=zo(Sr),_r=zo(jr),Mr=zo(kr),Ar=zo(Dr),Br=We?We.prototype:r,Rr=Br?Br.valueOf:r,zr=Br?Br.toString:r;function Pr(e){if(ts(e)&&!Va(e)&&!(e instanceof Wr)){if(e instanceof Hr)return e;if(Ae.call(e,"__wrapped__"))return Po(e)}return new Hr(e)}var Lr=function(){function e(){}return function(t){if(!es(t))return{};if(Ke)return Ke(t);e.prototype=t;var n=new e;return e.prototype=r,n}}();function Nr(){}function Hr(e,t){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=r}function Wr(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=p,this.__views__=[]}function Vr(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Yr(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Ur(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Kr(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new Ur;++t<r;)this.add(e[t])}function qr(e){var t=this.__data__=new Yr(e);this.size=t.size}function Xr(e,t){var r=Va(e),n=!r&&Wa(e),i=!r&&!n&&qa(e),o=!r&&!n&&!i&&cs(e),a=r||n||i||o,s=a?Xt(e.length,Te):[],l=s.length;for(var c in e)!t&&!Ae.call(e,c)||a&&("length"==c||i&&("offset"==c||"parent"==c)||o&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||yo(c,l))||s.push(c);return s}function Gr(e){var t=e.length;return t?e[qn(0,t-1)]:r}function Zr(e,t){return Ao(Ei(e),sn(t,0,e.length))}function Qr(e){return Ao(Ei(e))}function Jr(e,t,n){(n!==r&&!La(e[t],n)||n===r&&!(t in e))&&on(e,t,n)}function en(e,t,n){var i=e[t];Ae.call(e,t)&&La(i,n)&&(n!==r||t in e)||on(e,t,n)}function tn(e,t){for(var r=e.length;r--;)if(La(e[r][0],t))return r;return-1}function rn(e,t,r,n){return fn(e,(function(e,i,o){t(n,e,r(e),o)})),n}function nn(e,t){return e&&Oi(t,Fs(t),e)}function on(e,t,r){"__proto__"==t&&rt?rt(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}function an(e,t){for(var n=-1,i=t.length,o=oe(i),a=null==e;++n<i;)o[n]=a?r:ks(e,t[n]);return o}function sn(e,t,n){return e==e&&(n!==r&&(e=e<=n?e:n),t!==r&&(e=e>=t?e:t)),e}function ln(e,t,n,i,o,a){var s,l=1&t,c=2&t,d=4&t;if(n&&(s=o?n(e,i,o,a):n(e)),s!==r)return s;if(!es(e))return e;var u=Va(e);if(u){if(s=function(e){var t=e.length,r=new e.constructor(t);t&&"string"==typeof e[0]&&Ae.call(e,"index")&&(r.index=e.index,r.input=e.input);return r}(e),!l)return Ei(e,s)}else{var f=go(e),h=f==w||f==$;if(qa(e))return Ci(e,l);if(f==j||f==m||h&&!o){if(s=c||h?{}:bo(e),!l)return c?function(e,t){return Oi(e,po(e),t)}(e,function(e,t){return e&&Oi(t,Is(t),e)}(s,e)):function(e,t){return Oi(e,ho(e),t)}(e,nn(s,e))}else{if(!st[f])return o?e:{};s=function(e,t,r){var n=e.constructor;switch(t){case I:return Si(e);case v:case y:return new n(+e);case _:return function(e,t){var r=t?Si(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}(e,r);case M:case A:case B:case R:case z:case P:case L:case N:case H:return ji(e,r);case C:return new n;case S:case E:return new n(e);case D:return function(e){var t=new e.constructor(e.source,he.exec(e));return t.lastIndex=e.lastIndex,t}(e);case T:return new n;case O:return i=e,Rr?ke(Rr.call(i)):{}}var i}(e,f,l)}}a||(a=new qr);var p=a.get(e);if(p)return p;a.set(e,s),as(e)?e.forEach((function(r){s.add(ln(r,t,n,r,e,a))})):rs(e)&&e.forEach((function(r,i){s.set(i,ln(r,t,n,i,e,a))}));var g=u?r:(d?c?io:no:c?Is:Fs)(e);return Dt(g||e,(function(r,i){g&&(r=e[i=r]),en(s,i,ln(r,t,n,i,e,a))})),s}function cn(e,t,n){var i=n.length;if(null==e)return!i;for(e=ke(e);i--;){var o=n[i],a=t[o],s=e[o];if(s===r&&!(o in e)||!a(s))return!1}return!0}function dn(e,t,i){if("function"!=typeof e)throw new Ee(n);return Fo((function(){e.apply(r,i)}),t)}function un(e,t,r,n){var i=-1,o=Ft,a=!0,s=e.length,l=[],c=t.length;if(!s)return l;r&&(t=_t(t,Zt(r))),n?(o=It,a=!1):t.length>=200&&(o=Jt,a=!1,t=new Kr(t));e:for(;++i<s;){var d=e[i],u=null==r?d:r(d);if(d=n||0!==d?d:0,a&&u==u){for(var f=c;f--;)if(t[f]===u)continue e;l.push(d)}else o(t,u,n)||l.push(d)}return l}Pr.templateSettings={escape:G,evaluate:Z,interpolate:Q,variable:"",imports:{_:Pr}},Pr.prototype=Nr.prototype,Pr.prototype.constructor=Pr,Hr.prototype=Lr(Nr.prototype),Hr.prototype.constructor=Hr,Wr.prototype=Lr(Nr.prototype),Wr.prototype.constructor=Wr,Vr.prototype.clear=function(){this.__data__=Tr?Tr(null):{},this.size=0},Vr.prototype.delete=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Vr.prototype.get=function(e){var t=this.__data__;if(Tr){var n=t[e];return n===i?r:n}return Ae.call(t,e)?t[e]:r},Vr.prototype.has=function(e){var t=this.__data__;return Tr?t[e]!==r:Ae.call(t,e)},Vr.prototype.set=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Tr&&t===r?i:t,this},Yr.prototype.clear=function(){this.__data__=[],this.size=0},Yr.prototype.delete=function(e){var t=this.__data__,r=tn(t,e);return!(r<0)&&(r==t.length-1?t.pop():Xe.call(t,r,1),--this.size,!0)},Yr.prototype.get=function(e){var t=this.__data__,n=tn(t,e);return n<0?r:t[n][1]},Yr.prototype.has=function(e){return tn(this.__data__,e)>-1},Yr.prototype.set=function(e,t){var r=this.__data__,n=tn(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this},Ur.prototype.clear=function(){this.size=0,this.__data__={hash:new Vr,map:new(Sr||Yr),string:new Vr}},Ur.prototype.delete=function(e){var t=co(this,e).delete(e);return this.size-=t?1:0,t},Ur.prototype.get=function(e){return co(this,e).get(e)},Ur.prototype.has=function(e){return co(this,e).has(e)},Ur.prototype.set=function(e,t){var r=co(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this},Kr.prototype.add=Kr.prototype.push=function(e){return this.__data__.set(e,i),this},Kr.prototype.has=function(e){return this.__data__.has(e)},qr.prototype.clear=function(){this.__data__=new Yr,this.size=0},qr.prototype.delete=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r},qr.prototype.get=function(e){return this.__data__.get(e)},qr.prototype.has=function(e){return this.__data__.has(e)},qr.prototype.set=function(e,t){var r=this.__data__;if(r instanceof Yr){var n=r.__data__;if(!Sr||n.length<199)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new Ur(n)}return r.set(e,t),this.size=r.size,this};var fn=_i(xn),hn=_i(wn,!0);function pn(e,t){var r=!0;return fn(e,(function(e,n,i){return r=!!t(e,n,i)})),r}function gn(e,t,n){for(var i=-1,o=e.length;++i<o;){var a=e[i],s=t(a);if(null!=s&&(l===r?s==s&&!ls(s):n(s,l)))var l=s,c=a}return c}function mn(e,t){var r=[];return fn(e,(function(e,n,i){t(e,n,i)&&r.push(e)})),r}function bn(e,t,r,n,i){var o=-1,a=e.length;for(r||(r=vo),i||(i=[]);++o<a;){var s=e[o];t>0&&r(s)?t>1?bn(s,t-1,r,n,i):Mt(i,s):n||(i[i.length]=s)}return i}var vn=Mi(),yn=Mi(!0);function xn(e,t){return e&&vn(e,t,Fs)}function wn(e,t){return e&&yn(e,t,Fs)}function $n(e,t){return Ot(t,(function(t){return Za(e[t])}))}function Cn(e,t){for(var n=0,i=(t=yi(t,e)).length;null!=e&&n<i;)e=e[Ro(t[n++])];return n&&n==i?e:r}function Sn(e,t,r){var n=t(e);return Va(e)?n:Mt(n,r(e))}function jn(e){return null==e?e===r?"[object Undefined]":"[object Null]":et&&et in ke(e)?function(e){var t=Ae.call(e,et),n=e[et];try{e[et]=r;var i=!0}catch(e){}var o=ze.call(e);i&&(t?e[et]=n:delete e[et]);return o}(e):function(e){return ze.call(e)}(e)}function kn(e,t){return e>t}function Dn(e,t){return null!=e&&Ae.call(e,t)}function Tn(e,t){return null!=e&&t in ke(e)}function En(e,t,n){for(var i=n?It:Ft,o=e[0].length,a=e.length,s=a,l=oe(a),c=1/0,d=[];s--;){var u=e[s];s&&t&&(u=_t(u,Zt(t))),c=vr(u.length,c),l[s]=!n&&(t||o>=120&&u.length>=120)?new Kr(s&&u):r}u=e[0];var f=-1,h=l[0];e:for(;++f<o&&d.length<c;){var p=u[f],g=t?t(p):p;if(p=n||0!==p?p:0,!(h?Jt(h,g):i(d,g,n))){for(s=a;--s;){var m=l[s];if(!(m?Jt(m,g):i(e[s],g,n)))continue e}h&&h.push(g),d.push(p)}}return d}function On(e,t,n){var i=null==(e=To(e,t=yi(t,e)))?e:e[Ro(Go(t))];return null==i?r:jt(i,e,n)}function Fn(e){return ts(e)&&jn(e)==m}function In(e,t,n,i,o){return e===t||(null==e||null==t||!ts(e)&&!ts(t)?e!=e&&t!=t:function(e,t,n,i,o,a){var s=Va(e),l=Va(t),c=s?b:go(e),d=l?b:go(t),u=(c=c==m?j:c)==j,f=(d=d==m?j:d)==j,h=c==d;if(h&&qa(e)){if(!qa(t))return!1;s=!0,u=!1}if(h&&!u)return a||(a=new qr),s||cs(e)?to(e,t,n,i,o,a):function(e,t,r,n,i,o,a){switch(r){case _:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case I:return!(e.byteLength!=t.byteLength||!o(new Ve(e),new Ve(t)));case v:case y:case S:return La(+e,+t);case x:return e.name==t.name&&e.message==t.message;case D:case E:return e==t+"";case C:var s=ar;case T:var l=1&n;if(s||(s=cr),e.size!=t.size&&!l)return!1;var c=a.get(e);if(c)return c==t;n|=2,a.set(e,t);var d=to(s(e),s(t),n,i,o,a);return a.delete(e),d;case O:if(Rr)return Rr.call(e)==Rr.call(t)}return!1}(e,t,c,n,i,o,a);if(!(1&n)){var p=u&&Ae.call(e,"__wrapped__"),g=f&&Ae.call(t,"__wrapped__");if(p||g){var w=p?e.value():e,$=g?t.value():t;return a||(a=new qr),o(w,$,n,i,a)}}if(!h)return!1;return a||(a=new qr),function(e,t,n,i,o,a){var s=1&n,l=no(e),c=l.length,d=no(t),u=d.length;if(c!=u&&!s)return!1;var f=c;for(;f--;){var h=l[f];if(!(s?h in t:Ae.call(t,h)))return!1}var p=a.get(e),g=a.get(t);if(p&&g)return p==t&&g==e;var m=!0;a.set(e,t),a.set(t,e);var b=s;for(;++f<c;){var v=e[h=l[f]],y=t[h];if(i)var x=s?i(y,v,h,t,e,a):i(v,y,h,e,t,a);if(!(x===r?v===y||o(v,y,n,i,a):x)){m=!1;break}b||(b="constructor"==h)}if(m&&!b){var w=e.constructor,$=t.constructor;w==$||!("constructor"in e)||!("constructor"in t)||"function"==typeof w&&w instanceof w&&"function"==typeof $&&$ instanceof $||(m=!1)}return a.delete(e),a.delete(t),m}(e,t,n,i,o,a)}(e,t,n,i,In,o))}function _n(e,t,n,i){var o=n.length,a=o,s=!i;if(null==e)return!a;for(e=ke(e);o--;){var l=n[o];if(s&&l[2]?l[1]!==e[l[0]]:!(l[0]in e))return!1}for(;++o<a;){var c=(l=n[o])[0],d=e[c],u=l[1];if(s&&l[2]){if(d===r&&!(c in e))return!1}else{var f=new qr;if(i)var h=i(d,u,c,e,t,f);if(!(h===r?In(u,d,3,i,f):h))return!1}}return!0}function Mn(e){return!(!es(e)||(t=e,Re&&Re in t))&&(Za(e)?Ne:me).test(zo(e));var t}function An(e){return"function"==typeof e?e:null==e?nl:"object"==typeof e?Va(e)?Nn(e[0],e[1]):Ln(e):fl(e)}function Bn(e){if(!So(e))return mr(e);var t=[];for(var r in ke(e))Ae.call(e,r)&&"constructor"!=r&&t.push(r);return t}function Rn(e){if(!es(e))return function(e){var t=[];if(null!=e)for(var r in ke(e))t.push(r);return t}(e);var t=So(e),r=[];for(var n in e)("constructor"!=n||!t&&Ae.call(e,n))&&r.push(n);return r}function zn(e,t){return e<t}function Pn(e,t){var r=-1,n=Ua(e)?oe(e.length):[];return fn(e,(function(e,i,o){n[++r]=t(e,i,o)})),n}function Ln(e){var t=uo(e);return 1==t.length&&t[0][2]?ko(t[0][0],t[0][1]):function(r){return r===e||_n(r,e,t)}}function Nn(e,t){return wo(e)&&jo(t)?ko(Ro(e),t):function(n){var i=ks(n,e);return i===r&&i===t?Ds(n,e):In(t,i,3)}}function Hn(e,t,n,i,o){e!==t&&vn(t,(function(a,s){if(o||(o=new qr),es(a))!function(e,t,n,i,o,a,s){var l=Eo(e,n),c=Eo(t,n),d=s.get(c);if(d)return void Jr(e,n,d);var u=a?a(l,c,n+"",e,t,s):r,f=u===r;if(f){var h=Va(c),p=!h&&qa(c),g=!h&&!p&&cs(c);u=c,h||p||g?Va(l)?u=l:Ka(l)?u=Ei(l):p?(f=!1,u=Ci(c,!0)):g?(f=!1,u=ji(c,!0)):u=[]:is(c)||Wa(c)?(u=l,Wa(l)?u=bs(l):es(l)&&!Za(l)||(u=bo(c))):f=!1}f&&(s.set(c,u),o(u,c,i,a,s),s.delete(c));Jr(e,n,u)}(e,t,s,n,Hn,i,o);else{var l=i?i(Eo(e,s),a,s+"",e,t,o):r;l===r&&(l=a),Jr(e,s,l)}}),Is)}function Wn(e,t){var n=e.length;if(n)return yo(t+=t<0?n:0,n)?e[t]:r}function Vn(e,t,r){t=t.length?_t(t,(function(e){return Va(e)?function(t){return Cn(t,1===e.length?e[0]:e)}:e})):[nl];var n=-1;t=_t(t,Zt(lo()));var i=Pn(e,(function(e,r,i){var o=_t(t,(function(t){return t(e)}));return{criteria:o,index:++n,value:e}}));return function(e,t){var r=e.length;for(e.sort(t);r--;)e[r]=e[r].value;return e}(i,(function(e,t){return function(e,t,r){var n=-1,i=e.criteria,o=t.criteria,a=i.length,s=r.length;for(;++n<a;){var l=ki(i[n],o[n]);if(l)return n>=s?l:l*("desc"==r[n]?-1:1)}return e.index-t.index}(e,t,r)}))}function Yn(e,t,r){for(var n=-1,i=t.length,o={};++n<i;){var a=t[n],s=Cn(e,a);r(s,a)&&Jn(o,yi(a,e),s)}return o}function Un(e,t,r,n){var i=n?Ht:Nt,o=-1,a=t.length,s=e;for(e===t&&(t=Ei(t)),r&&(s=_t(e,Zt(r)));++o<a;)for(var l=0,c=t[o],d=r?r(c):c;(l=i(s,d,l,n))>-1;)s!==e&&Xe.call(s,l,1),Xe.call(e,l,1);return e}function Kn(e,t){for(var r=e?t.length:0,n=r-1;r--;){var i=t[r];if(r==n||i!==o){var o=i;yo(i)?Xe.call(e,i,1):ui(e,i)}}return e}function qn(e,t){return e+gt(wr()*(t-e+1))}function Xn(e,t){var r="";if(!e||t<1||t>f)return r;do{t%2&&(r+=e),(t=gt(t/2))&&(e+=e)}while(t);return r}function Gn(e,t){return Io(Do(e,t,nl),e+"")}function Zn(e){return Gr(Ls(e))}function Qn(e,t){var r=Ls(e);return Ao(r,sn(t,0,r.length))}function Jn(e,t,n,i){if(!es(e))return e;for(var o=-1,a=(t=yi(t,e)).length,s=a-1,l=e;null!=l&&++o<a;){var c=Ro(t[o]),d=n;if("__proto__"===c||"constructor"===c||"prototype"===c)return e;if(o!=s){var u=l[c];(d=i?i(u,c,l):r)===r&&(d=es(u)?u:yo(t[o+1])?[]:{})}en(l,c,d),l=l[c]}return e}var ei=Er?function(e,t){return Er.set(e,t),e}:nl,ti=rt?function(e,t){return rt(e,"toString",{configurable:!0,enumerable:!1,value:el(t),writable:!0})}:nl;function ri(e){return Ao(Ls(e))}function ni(e,t,r){var n=-1,i=e.length;t<0&&(t=-t>i?0:i+t),(r=r>i?i:r)<0&&(r+=i),i=t>r?0:r-t>>>0,t>>>=0;for(var o=oe(i);++n<i;)o[n]=e[n+t];return o}function ii(e,t){var r;return fn(e,(function(e,n,i){return!(r=t(e,n,i))})),!!r}function oi(e,t,r){var n=0,i=null==e?n:e.length;if("number"==typeof t&&t==t&&i<=2147483647){for(;n<i;){var o=n+i>>>1,a=e[o];null!==a&&!ls(a)&&(r?a<=t:a<t)?n=o+1:i=o}return i}return ai(e,t,nl,r)}function ai(e,t,n,i){var o=0,a=null==e?0:e.length;if(0===a)return 0;for(var s=(t=n(t))!=t,l=null===t,c=ls(t),d=t===r;o<a;){var u=gt((o+a)/2),f=n(e[u]),h=f!==r,p=null===f,g=f==f,m=ls(f);if(s)var b=i||g;else b=d?g&&(i||h):l?g&&h&&(i||!p):c?g&&h&&!p&&(i||!m):!p&&!m&&(i?f<=t:f<t);b?o=u+1:a=u}return vr(a,4294967294)}function si(e,t){for(var r=-1,n=e.length,i=0,o=[];++r<n;){var a=e[r],s=t?t(a):a;if(!r||!La(s,l)){var l=s;o[i++]=0===a?0:a}}return o}function li(e){return"number"==typeof e?e:ls(e)?h:+e}function ci(e){if("string"==typeof e)return e;if(Va(e))return _t(e,ci)+"";if(ls(e))return zr?zr.call(e):"";var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function di(e,t,r){var n=-1,i=Ft,o=e.length,a=!0,s=[],l=s;if(r)a=!1,i=It;else if(o>=200){var c=t?null:Xi(e);if(c)return cr(c);a=!1,i=Jt,l=new Kr}else l=t?[]:s;e:for(;++n<o;){var d=e[n],u=t?t(d):d;if(d=r||0!==d?d:0,a&&u==u){for(var f=l.length;f--;)if(l[f]===u)continue e;t&&l.push(u),s.push(d)}else i(l,u,r)||(l!==s&&l.push(u),s.push(d))}return s}function ui(e,t){return null==(e=To(e,t=yi(t,e)))||delete e[Ro(Go(t))]}function fi(e,t,r,n){return Jn(e,t,r(Cn(e,t)),n)}function hi(e,t,r,n){for(var i=e.length,o=n?i:-1;(n?o--:++o<i)&&t(e[o],o,e););return r?ni(e,n?0:o,n?o+1:i):ni(e,n?o+1:0,n?i:o)}function pi(e,t){var r=e;return r instanceof Wr&&(r=r.value()),At(t,(function(e,t){return t.func.apply(t.thisArg,Mt([e],t.args))}),r)}function gi(e,t,r){var n=e.length;if(n<2)return n?di(e[0]):[];for(var i=-1,o=oe(n);++i<n;)for(var a=e[i],s=-1;++s<n;)s!=i&&(o[i]=un(o[i]||a,e[s],t,r));return di(bn(o,1),t,r)}function mi(e,t,n){for(var i=-1,o=e.length,a=t.length,s={};++i<o;){var l=i<a?t[i]:r;n(s,e[i],l)}return s}function bi(e){return Ka(e)?e:[]}function vi(e){return"function"==typeof e?e:nl}function yi(e,t){return Va(e)?e:wo(e,t)?[e]:Bo(vs(e))}var xi=Gn;function wi(e,t,n){var i=e.length;return n=n===r?i:n,!t&&n>=i?e:ni(e,t,n)}var $i=lt||function(e){return ht.clearTimeout(e)};function Ci(e,t){if(t)return e.slice();var r=e.length,n=Ye?Ye(r):new e.constructor(r);return e.copy(n),n}function Si(e){var t=new e.constructor(e.byteLength);return new Ve(t).set(new Ve(e)),t}function ji(e,t){var r=t?Si(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}function ki(e,t){if(e!==t){var n=e!==r,i=null===e,o=e==e,a=ls(e),s=t!==r,l=null===t,c=t==t,d=ls(t);if(!l&&!d&&!a&&e>t||a&&s&&c&&!l&&!d||i&&s&&c||!n&&c||!o)return 1;if(!i&&!a&&!d&&e<t||d&&n&&o&&!i&&!a||l&&n&&o||!s&&o||!c)return-1}return 0}function Di(e,t,r,n){for(var i=-1,o=e.length,a=r.length,s=-1,l=t.length,c=br(o-a,0),d=oe(l+c),u=!n;++s<l;)d[s]=t[s];for(;++i<a;)(u||i<o)&&(d[r[i]]=e[i]);for(;c--;)d[s++]=e[i++];return d}function Ti(e,t,r,n){for(var i=-1,o=e.length,a=-1,s=r.length,l=-1,c=t.length,d=br(o-s,0),u=oe(d+c),f=!n;++i<d;)u[i]=e[i];for(var h=i;++l<c;)u[h+l]=t[l];for(;++a<s;)(f||i<o)&&(u[h+r[a]]=e[i++]);return u}function Ei(e,t){var r=-1,n=e.length;for(t||(t=oe(n));++r<n;)t[r]=e[r];return t}function Oi(e,t,n,i){var o=!n;n||(n={});for(var a=-1,s=t.length;++a<s;){var l=t[a],c=i?i(n[l],e[l],l,n,e):r;c===r&&(c=e[l]),o?on(n,l,c):en(n,l,c)}return n}function Fi(e,t){return function(r,n){var i=Va(r)?kt:rn,o=t?t():{};return i(r,e,lo(n,2),o)}}function Ii(e){return Gn((function(t,n){var i=-1,o=n.length,a=o>1?n[o-1]:r,s=o>2?n[2]:r;for(a=e.length>3&&"function"==typeof a?(o--,a):r,s&&xo(n[0],n[1],s)&&(a=o<3?r:a,o=1),t=ke(t);++i<o;){var l=n[i];l&&e(t,l,i,a)}return t}))}function _i(e,t){return function(r,n){if(null==r)return r;if(!Ua(r))return e(r,n);for(var i=r.length,o=t?i:-1,a=ke(r);(t?o--:++o<i)&&!1!==n(a[o],o,a););return r}}function Mi(e){return function(t,r,n){for(var i=-1,o=ke(t),a=n(t),s=a.length;s--;){var l=a[e?s:++i];if(!1===r(o[l],l,o))break}return t}}function Ai(e){return function(t){var n=or(t=vs(t))?fr(t):r,i=n?n[0]:t.charAt(0),o=n?wi(n,1).join(""):t.slice(1);return i[e]()+o}}function Bi(e){return function(t){return At(Zs(Ws(t).replace(Qe,"")),e,"")}}function Ri(e){return function(){var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r=Lr(e.prototype),n=e.apply(r,t);return es(n)?n:r}}function zi(e){return function(t,n,i){var o=ke(t);if(!Ua(t)){var a=lo(n,3);t=Fs(t),n=function(e){return a(o[e],e,o)}}var s=e(t,n,i);return s>-1?o[a?t[s]:s]:r}}function Pi(e){return ro((function(t){var i=t.length,o=i,a=Hr.prototype.thru;for(e&&t.reverse();o--;){var s=t[o];if("function"!=typeof s)throw new Ee(n);if(a&&!l&&"wrapper"==ao(s))var l=new Hr([],!0)}for(o=l?o:i;++o<i;){var c=ao(s=t[o]),d="wrapper"==c?oo(s):r;l=d&&$o(d[0])&&424==d[1]&&!d[4].length&&1==d[9]?l[ao(d[0])].apply(l,d[3]):1==s.length&&$o(s)?l[c]():l.thru(s)}return function(){var e=arguments,r=e[0];if(l&&1==e.length&&Va(r))return l.plant(r).value();for(var n=0,o=i?t[n].apply(this,e):r;++n<i;)o=t[n].call(this,o);return o}}))}function Li(e,t,n,i,o,a,s,l,d,u){var f=t&c,h=1&t,p=2&t,g=24&t,m=512&t,b=p?r:Ri(e);return function c(){for(var v=arguments.length,y=oe(v),x=v;x--;)y[x]=arguments[x];if(g)var w=so(c),$=function(e,t){for(var r=e.length,n=0;r--;)e[r]===t&&++n;return n}(y,w);if(i&&(y=Di(y,i,o,g)),a&&(y=Ti(y,a,s,g)),v-=$,g&&v<u){var C=lr(y,w);return Ki(e,t,Li,c.placeholder,n,y,C,l,d,u-v)}var S=h?n:this,j=p?S[e]:e;return v=y.length,l?y=function(e,t){var n=e.length,i=vr(t.length,n),o=Ei(e);for(;i--;){var a=t[i];e[i]=yo(a,n)?o[a]:r}return e}(y,l):m&&v>1&&y.reverse(),f&&d<v&&(y.length=d),this&&this!==ht&&this instanceof c&&(j=b||Ri(j)),j.apply(S,y)}}function Ni(e,t){return function(r,n){return function(e,t,r,n){return xn(e,(function(e,i,o){t(n,r(e),i,o)})),n}(r,e,t(n),{})}}function Hi(e,t){return function(n,i){var o;if(n===r&&i===r)return t;if(n!==r&&(o=n),i!==r){if(o===r)return i;"string"==typeof n||"string"==typeof i?(n=ci(n),i=ci(i)):(n=li(n),i=li(i)),o=e(n,i)}return o}}function Wi(e){return ro((function(t){return t=_t(t,Zt(lo())),Gn((function(r){var n=this;return e(t,(function(e){return jt(e,n,r)}))}))}))}function Vi(e,t){var n=(t=t===r?" ":ci(t)).length;if(n<2)return n?Xn(t,e):t;var i=Xn(t,pt(e/ur(t)));return or(t)?wi(fr(i),0,e).join(""):i.slice(0,e)}function Yi(e){return function(t,n,i){return i&&"number"!=typeof i&&xo(t,n,i)&&(n=i=r),t=hs(t),n===r?(n=t,t=0):n=hs(n),function(e,t,r,n){for(var i=-1,o=br(pt((t-e)/(r||1)),0),a=oe(o);o--;)a[n?o:++i]=e,e+=r;return a}(t,n,i=i===r?t<n?1:-1:hs(i),e)}}function Ui(e){return function(t,r){return"string"==typeof t&&"string"==typeof r||(t=ms(t),r=ms(r)),e(t,r)}}function Ki(e,t,n,i,o,a,c,d,u,f){var h=8&t;t|=h?s:l,4&(t&=~(h?l:s))||(t&=-4);var p=[e,t,o,h?a:r,h?c:r,h?r:a,h?r:c,d,u,f],g=n.apply(r,p);return $o(e)&&Oo(g,p),g.placeholder=i,_o(g,e,t)}function qi(e){var t=je[e];return function(e,r){if(e=ms(e),(r=null==r?0:vr(ps(r),292))&&zt(e)){var n=(vs(e)+"e").split("e");return+((n=(vs(t(n[0]+"e"+(+n[1]+r)))+"e").split("e"))[0]+"e"+(+n[1]-r))}return t(e)}}var Xi=kr&&1/cr(new kr([,-0]))[1]==u?function(e){return new kr(e)}:ll;function Gi(e){return function(t){var r=go(t);return r==C?ar(t):r==T?dr(t):function(e,t){return _t(t,(function(t){return[t,e[t]]}))}(t,e(t))}}function Zi(e,t,i,u,f,h,p,g){var m=2&t;if(!m&&"function"!=typeof e)throw new Ee(n);var b=u?u.length:0;if(b||(t&=-97,u=f=r),p=p===r?p:br(ps(p),0),g=g===r?g:ps(g),b-=f?f.length:0,t&l){var v=u,y=f;u=f=r}var x=m?r:oo(e),w=[e,t,i,u,f,v,y,h,p,g];if(x&&function(e,t){var r=e[1],n=t[1],i=r|n,a=i<131,s=n==c&&8==r||n==c&&r==d&&e[7].length<=t[8]||384==n&&t[7].length<=t[8]&&8==r;if(!a&&!s)return e;1&n&&(e[2]=t[2],i|=1&r?0:4);var l=t[3];if(l){var u=e[3];e[3]=u?Di(u,l,t[4]):l,e[4]=u?lr(e[3],o):t[4]}(l=t[5])&&(u=e[5],e[5]=u?Ti(u,l,t[6]):l,e[6]=u?lr(e[5],o):t[6]);(l=t[7])&&(e[7]=l);n&c&&(e[8]=null==e[8]?t[8]:vr(e[8],t[8]));null==e[9]&&(e[9]=t[9]);e[0]=t[0],e[1]=i}(w,x),e=w[0],t=w[1],i=w[2],u=w[3],f=w[4],!(g=w[9]=w[9]===r?m?0:e.length:br(w[9]-b,0))&&24&t&&(t&=-25),t&&1!=t)$=8==t||t==a?function(e,t,n){var i=Ri(e);return function o(){for(var a=arguments.length,s=oe(a),l=a,c=so(o);l--;)s[l]=arguments[l];var d=a<3&&s[0]!==c&&s[a-1]!==c?[]:lr(s,c);return(a-=d.length)<n?Ki(e,t,Li,o.placeholder,r,s,d,r,r,n-a):jt(this&&this!==ht&&this instanceof o?i:e,this,s)}}(e,t,g):t!=s&&33!=t||f.length?Li.apply(r,w):function(e,t,r,n){var i=1&t,o=Ri(e);return function t(){for(var a=-1,s=arguments.length,l=-1,c=n.length,d=oe(c+s),u=this&&this!==ht&&this instanceof t?o:e;++l<c;)d[l]=n[l];for(;s--;)d[l++]=arguments[++a];return jt(u,i?r:this,d)}}(e,t,i,u);else var $=function(e,t,r){var n=1&t,i=Ri(e);return function t(){return(this&&this!==ht&&this instanceof t?i:e).apply(n?r:this,arguments)}}(e,t,i);return _o((x?ei:Oo)($,w),e,t)}function Qi(e,t,n,i){return e===r||La(e,Ie[n])&&!Ae.call(i,n)?t:e}function Ji(e,t,n,i,o,a){return es(e)&&es(t)&&(a.set(t,e),Hn(e,t,r,Ji,a),a.delete(t)),e}function eo(e){return is(e)?r:e}function to(e,t,n,i,o,a){var s=1&n,l=e.length,c=t.length;if(l!=c&&!(s&&c>l))return!1;var d=a.get(e),u=a.get(t);if(d&&u)return d==t&&u==e;var f=-1,h=!0,p=2&n?new Kr:r;for(a.set(e,t),a.set(t,e);++f<l;){var g=e[f],m=t[f];if(i)var b=s?i(m,g,f,t,e,a):i(g,m,f,e,t,a);if(b!==r){if(b)continue;h=!1;break}if(p){if(!Rt(t,(function(e,t){if(!Jt(p,t)&&(g===e||o(g,e,n,i,a)))return p.push(t)}))){h=!1;break}}else if(g!==m&&!o(g,m,n,i,a)){h=!1;break}}return a.delete(e),a.delete(t),h}function ro(e){return Io(Do(e,r,Yo),e+"")}function no(e){return Sn(e,Fs,ho)}function io(e){return Sn(e,Is,po)}var oo=Er?function(e){return Er.get(e)}:ll;function ao(e){for(var t=e.name+"",r=Or[t],n=Ae.call(Or,t)?r.length:0;n--;){var i=r[n],o=i.func;if(null==o||o==e)return i.name}return t}function so(e){return(Ae.call(Pr,"placeholder")?Pr:e).placeholder}function lo(){var e=Pr.iteratee||il;return e=e===il?An:e,arguments.length?e(arguments[0],arguments[1]):e}function co(e,t){var r,n,i=e.__data__;return("string"==(n=typeof(r=t))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?i["string"==typeof t?"string":"hash"]:i.map}function uo(e){for(var t=Fs(e),r=t.length;r--;){var n=t[r],i=e[n];t[r]=[n,i,jo(i)]}return t}function fo(e,t){var n=function(e,t){return null==e?r:e[t]}(e,t);return Mn(n)?n:r}var ho=bt?function(e){return null==e?[]:(e=ke(e),Ot(bt(e),(function(t){return qe.call(e,t)})))}:gl,po=bt?function(e){for(var t=[];e;)Mt(t,ho(e)),e=Ue(e);return t}:gl,go=jn;function mo(e,t,r){for(var n=-1,i=(t=yi(t,e)).length,o=!1;++n<i;){var a=Ro(t[n]);if(!(o=null!=e&&r(e,a)))break;e=e[a]}return o||++n!=i?o:!!(i=null==e?0:e.length)&&Ja(i)&&yo(a,i)&&(Va(e)||Wa(e))}function bo(e){return"function"!=typeof e.constructor||So(e)?{}:Lr(Ue(e))}function vo(e){return Va(e)||Wa(e)||!!(Ge&&e&&e[Ge])}function yo(e,t){var r=typeof e;return!!(t=null==t?f:t)&&("number"==r||"symbol"!=r&&ve.test(e))&&e>-1&&e%1==0&&e<t}function xo(e,t,r){if(!es(r))return!1;var n=typeof t;return!!("number"==n?Ua(r)&&yo(t,r.length):"string"==n&&t in r)&&La(r[t],e)}function wo(e,t){if(Va(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!ls(e))||(ee.test(e)||!J.test(e)||null!=t&&e in ke(t))}function $o(e){var t=ao(e),r=Pr[t];if("function"!=typeof r||!(t in Wr.prototype))return!1;if(e===r)return!0;var n=oo(r);return!!n&&e===n[0]}(Cr&&go(new Cr(new ArrayBuffer(1)))!=_||Sr&&go(new Sr)!=C||jr&&go(jr.resolve())!=k||kr&&go(new kr)!=T||Dr&&go(new Dr)!=F)&&(go=function(e){var t=jn(e),n=t==j?e.constructor:r,i=n?zo(n):"";if(i)switch(i){case Fr:return _;case Ir:return C;case _r:return k;case Mr:return T;case Ar:return F}return t});var Co=_e?Za:ml;function So(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Ie)}function jo(e){return e==e&&!es(e)}function ko(e,t){return function(n){return null!=n&&(n[e]===t&&(t!==r||e in ke(n)))}}function Do(e,t,n){return t=br(t===r?e.length-1:t,0),function(){for(var r=arguments,i=-1,o=br(r.length-t,0),a=oe(o);++i<o;)a[i]=r[t+i];i=-1;for(var s=oe(t+1);++i<t;)s[i]=r[i];return s[t]=n(a),jt(e,this,s)}}function To(e,t){return t.length<2?e:Cn(e,ni(t,0,-1))}function Eo(e,t){if(("constructor"!==t||"function"!=typeof e[t])&&"__proto__"!=t)return e[t]}var Oo=Mo(ei),Fo=ft||function(e,t){return ht.setTimeout(e,t)},Io=Mo(ti);function _o(e,t,r){var n=t+"";return Io(e,function(e,t){var r=t.length;if(!r)return e;var n=r-1;return t[n]=(r>1?"& ":"")+t[n],t=t.join(r>2?", ":" "),e.replace(ae,"{\n/* [wrapped with "+t+"] */\n")}(n,function(e,t){return Dt(g,(function(r){var n="_."+r[0];t&r[1]&&!Ft(e,n)&&e.push(n)})),e.sort()}(function(e){var t=e.match(se);return t?t[1].split(le):[]}(n),r)))}function Mo(e){var t=0,n=0;return function(){var i=yr(),o=16-(i-n);if(n=i,o>0){if(++t>=800)return arguments[0]}else t=0;return e.apply(r,arguments)}}function Ao(e,t){var n=-1,i=e.length,o=i-1;for(t=t===r?i:t;++n<t;){var a=qn(n,o),s=e[a];e[a]=e[n],e[n]=s}return e.length=t,e}var Bo=function(e){var t=Ma(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(te,(function(e,r,n,i){t.push(n?i.replace(ue,"$1"):r||e)})),t}));function Ro(e){if("string"==typeof e||ls(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function zo(e){if(null!=e){try{return Me.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function Po(e){if(e instanceof Wr)return e.clone();var t=new Hr(e.__wrapped__,e.__chain__);return t.__actions__=Ei(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}var Lo=Gn((function(e,t){return Ka(e)?un(e,bn(t,1,Ka,!0)):[]})),No=Gn((function(e,t){var n=Go(t);return Ka(n)&&(n=r),Ka(e)?un(e,bn(t,1,Ka,!0),lo(n,2)):[]})),Ho=Gn((function(e,t){var n=Go(t);return Ka(n)&&(n=r),Ka(e)?un(e,bn(t,1,Ka,!0),r,n):[]}));function Wo(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var i=null==r?0:ps(r);return i<0&&(i=br(n+i,0)),Lt(e,lo(t,3),i)}function Vo(e,t,n){var i=null==e?0:e.length;if(!i)return-1;var o=i-1;return n!==r&&(o=ps(n),o=n<0?br(i+o,0):vr(o,i-1)),Lt(e,lo(t,3),o,!0)}function Yo(e){return(null==e?0:e.length)?bn(e,1):[]}function Uo(e){return e&&e.length?e[0]:r}var Ko=Gn((function(e){var t=_t(e,bi);return t.length&&t[0]===e[0]?En(t):[]})),qo=Gn((function(e){var t=Go(e),n=_t(e,bi);return t===Go(n)?t=r:n.pop(),n.length&&n[0]===e[0]?En(n,lo(t,2)):[]})),Xo=Gn((function(e){var t=Go(e),n=_t(e,bi);return(t="function"==typeof t?t:r)&&n.pop(),n.length&&n[0]===e[0]?En(n,r,t):[]}));function Go(e){var t=null==e?0:e.length;return t?e[t-1]:r}var Zo=Gn(Qo);function Qo(e,t){return e&&e.length&&t&&t.length?Un(e,t):e}var Jo=ro((function(e,t){var r=null==e?0:e.length,n=an(e,t);return Kn(e,_t(t,(function(e){return yo(e,r)?+e:e})).sort(ki)),n}));function ea(e){return null==e?e:$r.call(e)}var ta=Gn((function(e){return di(bn(e,1,Ka,!0))})),ra=Gn((function(e){var t=Go(e);return Ka(t)&&(t=r),di(bn(e,1,Ka,!0),lo(t,2))})),na=Gn((function(e){var t=Go(e);return t="function"==typeof t?t:r,di(bn(e,1,Ka,!0),r,t)}));function ia(e){if(!e||!e.length)return[];var t=0;return e=Ot(e,(function(e){if(Ka(e))return t=br(e.length,t),!0})),Xt(t,(function(t){return _t(e,Yt(t))}))}function oa(e,t){if(!e||!e.length)return[];var n=ia(e);return null==t?n:_t(n,(function(e){return jt(t,r,e)}))}var aa=Gn((function(e,t){return Ka(e)?un(e,t):[]})),sa=Gn((function(e){return gi(Ot(e,Ka))})),la=Gn((function(e){var t=Go(e);return Ka(t)&&(t=r),gi(Ot(e,Ka),lo(t,2))})),ca=Gn((function(e){var t=Go(e);return t="function"==typeof t?t:r,gi(Ot(e,Ka),r,t)})),da=Gn(ia);var ua=Gn((function(e){var t=e.length,n=t>1?e[t-1]:r;return n="function"==typeof n?(e.pop(),n):r,oa(e,n)}));function fa(e){var t=Pr(e);return t.__chain__=!0,t}function ha(e,t){return t(e)}var pa=ro((function(e){var t=e.length,n=t?e[0]:0,i=this.__wrapped__,o=function(t){return an(t,e)};return!(t>1||this.__actions__.length)&&i instanceof Wr&&yo(n)?((i=i.slice(n,+n+(t?1:0))).__actions__.push({func:ha,args:[o],thisArg:r}),new Hr(i,this.__chain__).thru((function(e){return t&&!e.length&&e.push(r),e}))):this.thru(o)}));var ga=Fi((function(e,t,r){Ae.call(e,r)?++e[r]:on(e,r,1)}));var ma=zi(Wo),ba=zi(Vo);function va(e,t){return(Va(e)?Dt:fn)(e,lo(t,3))}function ya(e,t){return(Va(e)?Tt:hn)(e,lo(t,3))}var xa=Fi((function(e,t,r){Ae.call(e,r)?e[r].push(t):on(e,r,[t])}));var wa=Gn((function(e,t,r){var n=-1,i="function"==typeof t,o=Ua(e)?oe(e.length):[];return fn(e,(function(e){o[++n]=i?jt(t,e,r):On(e,t,r)})),o})),$a=Fi((function(e,t,r){on(e,r,t)}));function Ca(e,t){return(Va(e)?_t:Pn)(e,lo(t,3))}var Sa=Fi((function(e,t,r){e[r?0:1].push(t)}),(function(){return[[],[]]}));var ja=Gn((function(e,t){if(null==e)return[];var r=t.length;return r>1&&xo(e,t[0],t[1])?t=[]:r>2&&xo(t[0],t[1],t[2])&&(t=[t[0]]),Vn(e,bn(t,1),[])})),ka=ut||function(){return ht.Date.now()};function Da(e,t,n){return t=n?r:t,t=e&&null==t?e.length:t,Zi(e,c,r,r,r,r,t)}function Ta(e,t){var i;if("function"!=typeof t)throw new Ee(n);return e=ps(e),function(){return--e>0&&(i=t.apply(this,arguments)),e<=1&&(t=r),i}}var Ea=Gn((function(e,t,r){var n=1;if(r.length){var i=lr(r,so(Ea));n|=s}return Zi(e,n,t,r,i)})),Oa=Gn((function(e,t,r){var n=3;if(r.length){var i=lr(r,so(Oa));n|=s}return Zi(t,n,e,r,i)}));function Fa(e,t,i){var o,a,s,l,c,d,u=0,f=!1,h=!1,p=!0;if("function"!=typeof e)throw new Ee(n);function g(t){var n=o,i=a;return o=a=r,u=t,l=e.apply(i,n)}function m(e){var n=e-d;return d===r||n>=t||n<0||h&&e-u>=s}function b(){var e=ka();if(m(e))return v(e);c=Fo(b,function(e){var r=t-(e-d);return h?vr(r,s-(e-u)):r}(e))}function v(e){return c=r,p&&o?g(e):(o=a=r,l)}function y(){var e=ka(),n=m(e);if(o=arguments,a=this,d=e,n){if(c===r)return function(e){return u=e,c=Fo(b,t),f?g(e):l}(d);if(h)return $i(c),c=Fo(b,t),g(d)}return c===r&&(c=Fo(b,t)),l}return t=ms(t)||0,es(i)&&(f=!!i.leading,s=(h="maxWait"in i)?br(ms(i.maxWait)||0,t):s,p="trailing"in i?!!i.trailing:p),y.cancel=function(){c!==r&&$i(c),u=0,o=d=a=c=r},y.flush=function(){return c===r?l:v(ka())},y}var Ia=Gn((function(e,t){return dn(e,1,t)})),_a=Gn((function(e,t,r){return dn(e,ms(t)||0,r)}));function Ma(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new Ee(n);var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],o=r.cache;if(o.has(i))return o.get(i);var a=e.apply(this,n);return r.cache=o.set(i,a)||o,a};return r.cache=new(Ma.Cache||Ur),r}function Aa(e){if("function"!=typeof e)throw new Ee(n);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}Ma.Cache=Ur;var Ba=xi((function(e,t){var r=(t=1==t.length&&Va(t[0])?_t(t[0],Zt(lo())):_t(bn(t,1),Zt(lo()))).length;return Gn((function(n){for(var i=-1,o=vr(n.length,r);++i<o;)n[i]=t[i].call(this,n[i]);return jt(e,this,n)}))})),Ra=Gn((function(e,t){var n=lr(t,so(Ra));return Zi(e,s,r,t,n)})),za=Gn((function(e,t){var n=lr(t,so(za));return Zi(e,l,r,t,n)})),Pa=ro((function(e,t){return Zi(e,d,r,r,r,t)}));function La(e,t){return e===t||e!=e&&t!=t}var Na=Ui(kn),Ha=Ui((function(e,t){return e>=t})),Wa=Fn(function(){return arguments}())?Fn:function(e){return ts(e)&&Ae.call(e,"callee")&&!qe.call(e,"callee")},Va=oe.isArray,Ya=yt?Zt(yt):function(e){return ts(e)&&jn(e)==I};function Ua(e){return null!=e&&Ja(e.length)&&!Za(e)}function Ka(e){return ts(e)&&Ua(e)}var qa=vt||ml,Xa=xt?Zt(xt):function(e){return ts(e)&&jn(e)==y};function Ga(e){if(!ts(e))return!1;var t=jn(e);return t==x||"[object DOMException]"==t||"string"==typeof e.message&&"string"==typeof e.name&&!is(e)}function Za(e){if(!es(e))return!1;var t=jn(e);return t==w||t==$||"[object AsyncFunction]"==t||"[object Proxy]"==t}function Qa(e){return"number"==typeof e&&e==ps(e)}function Ja(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=f}function es(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}function ts(e){return null!=e&&"object"==typeof e}var rs=wt?Zt(wt):function(e){return ts(e)&&go(e)==C};function ns(e){return"number"==typeof e||ts(e)&&jn(e)==S}function is(e){if(!ts(e)||jn(e)!=j)return!1;var t=Ue(e);if(null===t)return!0;var r=Ae.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&Me.call(r)==Pe}var os=$t?Zt($t):function(e){return ts(e)&&jn(e)==D};var as=Ct?Zt(Ct):function(e){return ts(e)&&go(e)==T};function ss(e){return"string"==typeof e||!Va(e)&&ts(e)&&jn(e)==E}function ls(e){return"symbol"==typeof e||ts(e)&&jn(e)==O}var cs=St?Zt(St):function(e){return ts(e)&&Ja(e.length)&&!!at[jn(e)]};var ds=Ui(zn),us=Ui((function(e,t){return e<=t}));function fs(e){if(!e)return[];if(Ua(e))return ss(e)?fr(e):Ei(e);if(Ze&&e[Ze])return function(e){for(var t,r=[];!(t=e.next()).done;)r.push(t.value);return r}(e[Ze]());var t=go(e);return(t==C?ar:t==T?cr:Ls)(e)}function hs(e){return e?(e=ms(e))===u||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}function ps(e){var t=hs(e),r=t%1;return t==t?r?t-r:t:0}function gs(e){return e?sn(ps(e),0,p):0}function ms(e){if("number"==typeof e)return e;if(ls(e))return h;if(es(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=es(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Gt(e);var r=ge.test(e);return r||be.test(e)?dt(e.slice(2),r?2:8):pe.test(e)?h:+e}function bs(e){return Oi(e,Is(e))}function vs(e){return null==e?"":ci(e)}var ys=Ii((function(e,t){if(So(t)||Ua(t))Oi(t,Fs(t),e);else for(var r in t)Ae.call(t,r)&&en(e,r,t[r])})),xs=Ii((function(e,t){Oi(t,Is(t),e)})),ws=Ii((function(e,t,r,n){Oi(t,Is(t),e,n)})),$s=Ii((function(e,t,r,n){Oi(t,Fs(t),e,n)})),Cs=ro(an);var Ss=Gn((function(e,t){e=ke(e);var n=-1,i=t.length,o=i>2?t[2]:r;for(o&&xo(t[0],t[1],o)&&(i=1);++n<i;)for(var a=t[n],s=Is(a),l=-1,c=s.length;++l<c;){var d=s[l],u=e[d];(u===r||La(u,Ie[d])&&!Ae.call(e,d))&&(e[d]=a[d])}return e})),js=Gn((function(e){return e.push(r,Ji),jt(Ms,r,e)}));function ks(e,t,n){var i=null==e?r:Cn(e,t);return i===r?n:i}function Ds(e,t){return null!=e&&mo(e,t,Tn)}var Ts=Ni((function(e,t,r){null!=t&&"function"!=typeof t.toString&&(t=ze.call(t)),e[t]=r}),el(nl)),Es=Ni((function(e,t,r){null!=t&&"function"!=typeof t.toString&&(t=ze.call(t)),Ae.call(e,t)?e[t].push(r):e[t]=[r]}),lo),Os=Gn(On);function Fs(e){return Ua(e)?Xr(e):Bn(e)}function Is(e){return Ua(e)?Xr(e,!0):Rn(e)}var _s=Ii((function(e,t,r){Hn(e,t,r)})),Ms=Ii((function(e,t,r,n){Hn(e,t,r,n)})),As=ro((function(e,t){var r={};if(null==e)return r;var n=!1;t=_t(t,(function(t){return t=yi(t,e),n||(n=t.length>1),t})),Oi(e,io(e),r),n&&(r=ln(r,7,eo));for(var i=t.length;i--;)ui(r,t[i]);return r}));var Bs=ro((function(e,t){return null==e?{}:function(e,t){return Yn(e,t,(function(t,r){return Ds(e,r)}))}(e,t)}));function Rs(e,t){if(null==e)return{};var r=_t(io(e),(function(e){return[e]}));return t=lo(t),Yn(e,r,(function(e,r){return t(e,r[0])}))}var zs=Gi(Fs),Ps=Gi(Is);function Ls(e){return null==e?[]:Qt(e,Fs(e))}var Ns=Bi((function(e,t,r){return t=t.toLowerCase(),e+(r?Hs(t):t)}));function Hs(e){return Gs(vs(e).toLowerCase())}function Ws(e){return(e=vs(e))&&e.replace(ye,rr).replace(Je,"")}var Vs=Bi((function(e,t,r){return e+(r?"-":"")+t.toLowerCase()})),Ys=Bi((function(e,t,r){return e+(r?" ":"")+t.toLowerCase()})),Us=Ai("toLowerCase");var Ks=Bi((function(e,t,r){return e+(r?"_":"")+t.toLowerCase()}));var qs=Bi((function(e,t,r){return e+(r?" ":"")+Gs(t)}));var Xs=Bi((function(e,t,r){return e+(r?" ":"")+t.toUpperCase()})),Gs=Ai("toUpperCase");function Zs(e,t,n){return e=vs(e),(t=n?r:t)===r?function(e){return nt.test(e)}(e)?function(e){return e.match(tt)||[]}(e):function(e){return e.match(ce)||[]}(e):e.match(t)||[]}var Qs=Gn((function(e,t){try{return jt(e,r,t)}catch(e){return Ga(e)?e:new Ce(e)}})),Js=ro((function(e,t){return Dt(t,(function(t){t=Ro(t),on(e,t,Ea(e[t],e))})),e}));function el(e){return function(){return e}}var tl=Pi(),rl=Pi(!0);function nl(e){return e}function il(e){return An("function"==typeof e?e:ln(e,1))}var ol=Gn((function(e,t){return function(r){return On(r,e,t)}})),al=Gn((function(e,t){return function(r){return On(e,r,t)}}));function sl(e,t,r){var n=Fs(t),i=$n(t,n);null!=r||es(t)&&(i.length||!n.length)||(r=t,t=e,e=this,i=$n(t,Fs(t)));var o=!(es(r)&&"chain"in r&&!r.chain),a=Za(e);return Dt(i,(function(r){var n=t[r];e[r]=n,a&&(e.prototype[r]=function(){var t=this.__chain__;if(o||t){var r=e(this.__wrapped__);return(r.__actions__=Ei(this.__actions__)).push({func:n,args:arguments,thisArg:e}),r.__chain__=t,r}return n.apply(e,Mt([this.value()],arguments))})})),e}function ll(){}var cl=Wi(_t),dl=Wi(Et),ul=Wi(Rt);function fl(e){return wo(e)?Yt(Ro(e)):function(e){return function(t){return Cn(t,e)}}(e)}var hl=Yi(),pl=Yi(!0);function gl(){return[]}function ml(){return!1}var bl=Hi((function(e,t){return e+t}),0),vl=qi("ceil"),yl=Hi((function(e,t){return e/t}),1),xl=qi("floor");var wl,$l=Hi((function(e,t){return e*t}),1),Cl=qi("round"),Sl=Hi((function(e,t){return e-t}),0);return Pr.after=function(e,t){if("function"!=typeof t)throw new Ee(n);return e=ps(e),function(){if(--e<1)return t.apply(this,arguments)}},Pr.ary=Da,Pr.assign=ys,Pr.assignIn=xs,Pr.assignInWith=ws,Pr.assignWith=$s,Pr.at=Cs,Pr.before=Ta,Pr.bind=Ea,Pr.bindAll=Js,Pr.bindKey=Oa,Pr.castArray=function(){if(!arguments.length)return[];var e=arguments[0];return Va(e)?e:[e]},Pr.chain=fa,Pr.chunk=function(e,t,n){t=(n?xo(e,t,n):t===r)?1:br(ps(t),0);var i=null==e?0:e.length;if(!i||t<1)return[];for(var o=0,a=0,s=oe(pt(i/t));o<i;)s[a++]=ni(e,o,o+=t);return s},Pr.compact=function(e){for(var t=-1,r=null==e?0:e.length,n=0,i=[];++t<r;){var o=e[t];o&&(i[n++]=o)}return i},Pr.concat=function(){var e=arguments.length;if(!e)return[];for(var t=oe(e-1),r=arguments[0],n=e;n--;)t[n-1]=arguments[n];return Mt(Va(r)?Ei(r):[r],bn(t,1))},Pr.cond=function(e){var t=null==e?0:e.length,r=lo();return e=t?_t(e,(function(e){if("function"!=typeof e[1])throw new Ee(n);return[r(e[0]),e[1]]})):[],Gn((function(r){for(var n=-1;++n<t;){var i=e[n];if(jt(i[0],this,r))return jt(i[1],this,r)}}))},Pr.conforms=function(e){return function(e){var t=Fs(e);return function(r){return cn(r,e,t)}}(ln(e,1))},Pr.constant=el,Pr.countBy=ga,Pr.create=function(e,t){var r=Lr(e);return null==t?r:nn(r,t)},Pr.curry=function e(t,n,i){var o=Zi(t,8,r,r,r,r,r,n=i?r:n);return o.placeholder=e.placeholder,o},Pr.curryRight=function e(t,n,i){var o=Zi(t,a,r,r,r,r,r,n=i?r:n);return o.placeholder=e.placeholder,o},Pr.debounce=Fa,Pr.defaults=Ss,Pr.defaultsDeep=js,Pr.defer=Ia,Pr.delay=_a,Pr.difference=Lo,Pr.differenceBy=No,Pr.differenceWith=Ho,Pr.drop=function(e,t,n){var i=null==e?0:e.length;return i?ni(e,(t=n||t===r?1:ps(t))<0?0:t,i):[]},Pr.dropRight=function(e,t,n){var i=null==e?0:e.length;return i?ni(e,0,(t=i-(t=n||t===r?1:ps(t)))<0?0:t):[]},Pr.dropRightWhile=function(e,t){return e&&e.length?hi(e,lo(t,3),!0,!0):[]},Pr.dropWhile=function(e,t){return e&&e.length?hi(e,lo(t,3),!0):[]},Pr.fill=function(e,t,n,i){var o=null==e?0:e.length;return o?(n&&"number"!=typeof n&&xo(e,t,n)&&(n=0,i=o),function(e,t,n,i){var o=e.length;for((n=ps(n))<0&&(n=-n>o?0:o+n),(i=i===r||i>o?o:ps(i))<0&&(i+=o),i=n>i?0:gs(i);n<i;)e[n++]=t;return e}(e,t,n,i)):[]},Pr.filter=function(e,t){return(Va(e)?Ot:mn)(e,lo(t,3))},Pr.flatMap=function(e,t){return bn(Ca(e,t),1)},Pr.flatMapDeep=function(e,t){return bn(Ca(e,t),u)},Pr.flatMapDepth=function(e,t,n){return n=n===r?1:ps(n),bn(Ca(e,t),n)},Pr.flatten=Yo,Pr.flattenDeep=function(e){return(null==e?0:e.length)?bn(e,u):[]},Pr.flattenDepth=function(e,t){return(null==e?0:e.length)?bn(e,t=t===r?1:ps(t)):[]},Pr.flip=function(e){return Zi(e,512)},Pr.flow=tl,Pr.flowRight=rl,Pr.fromPairs=function(e){for(var t=-1,r=null==e?0:e.length,n={};++t<r;){var i=e[t];n[i[0]]=i[1]}return n},Pr.functions=function(e){return null==e?[]:$n(e,Fs(e))},Pr.functionsIn=function(e){return null==e?[]:$n(e,Is(e))},Pr.groupBy=xa,Pr.initial=function(e){return(null==e?0:e.length)?ni(e,0,-1):[]},Pr.intersection=Ko,Pr.intersectionBy=qo,Pr.intersectionWith=Xo,Pr.invert=Ts,Pr.invertBy=Es,Pr.invokeMap=wa,Pr.iteratee=il,Pr.keyBy=$a,Pr.keys=Fs,Pr.keysIn=Is,Pr.map=Ca,Pr.mapKeys=function(e,t){var r={};return t=lo(t,3),xn(e,(function(e,n,i){on(r,t(e,n,i),e)})),r},Pr.mapValues=function(e,t){var r={};return t=lo(t,3),xn(e,(function(e,n,i){on(r,n,t(e,n,i))})),r},Pr.matches=function(e){return Ln(ln(e,1))},Pr.matchesProperty=function(e,t){return Nn(e,ln(t,1))},Pr.memoize=Ma,Pr.merge=_s,Pr.mergeWith=Ms,Pr.method=ol,Pr.methodOf=al,Pr.mixin=sl,Pr.negate=Aa,Pr.nthArg=function(e){return e=ps(e),Gn((function(t){return Wn(t,e)}))},Pr.omit=As,Pr.omitBy=function(e,t){return Rs(e,Aa(lo(t)))},Pr.once=function(e){return Ta(2,e)},Pr.orderBy=function(e,t,n,i){return null==e?[]:(Va(t)||(t=null==t?[]:[t]),Va(n=i?r:n)||(n=null==n?[]:[n]),Vn(e,t,n))},Pr.over=cl,Pr.overArgs=Ba,Pr.overEvery=dl,Pr.overSome=ul,Pr.partial=Ra,Pr.partialRight=za,Pr.partition=Sa,Pr.pick=Bs,Pr.pickBy=Rs,Pr.property=fl,Pr.propertyOf=function(e){return function(t){return null==e?r:Cn(e,t)}},Pr.pull=Zo,Pr.pullAll=Qo,Pr.pullAllBy=function(e,t,r){return e&&e.length&&t&&t.length?Un(e,t,lo(r,2)):e},Pr.pullAllWith=function(e,t,n){return e&&e.length&&t&&t.length?Un(e,t,r,n):e},Pr.pullAt=Jo,Pr.range=hl,Pr.rangeRight=pl,Pr.rearg=Pa,Pr.reject=function(e,t){return(Va(e)?Ot:mn)(e,Aa(lo(t,3)))},Pr.remove=function(e,t){var r=[];if(!e||!e.length)return r;var n=-1,i=[],o=e.length;for(t=lo(t,3);++n<o;){var a=e[n];t(a,n,e)&&(r.push(a),i.push(n))}return Kn(e,i),r},Pr.rest=function(e,t){if("function"!=typeof e)throw new Ee(n);return Gn(e,t=t===r?t:ps(t))},Pr.reverse=ea,Pr.sampleSize=function(e,t,n){return t=(n?xo(e,t,n):t===r)?1:ps(t),(Va(e)?Zr:Qn)(e,t)},Pr.set=function(e,t,r){return null==e?e:Jn(e,t,r)},Pr.setWith=function(e,t,n,i){return i="function"==typeof i?i:r,null==e?e:Jn(e,t,n,i)},Pr.shuffle=function(e){return(Va(e)?Qr:ri)(e)},Pr.slice=function(e,t,n){var i=null==e?0:e.length;return i?(n&&"number"!=typeof n&&xo(e,t,n)?(t=0,n=i):(t=null==t?0:ps(t),n=n===r?i:ps(n)),ni(e,t,n)):[]},Pr.sortBy=ja,Pr.sortedUniq=function(e){return e&&e.length?si(e):[]},Pr.sortedUniqBy=function(e,t){return e&&e.length?si(e,lo(t,2)):[]},Pr.split=function(e,t,n){return n&&"number"!=typeof n&&xo(e,t,n)&&(t=n=r),(n=n===r?p:n>>>0)?(e=vs(e))&&("string"==typeof t||null!=t&&!os(t))&&!(t=ci(t))&&or(e)?wi(fr(e),0,n):e.split(t,n):[]},Pr.spread=function(e,t){if("function"!=typeof e)throw new Ee(n);return t=null==t?0:br(ps(t),0),Gn((function(r){var n=r[t],i=wi(r,0,t);return n&&Mt(i,n),jt(e,this,i)}))},Pr.tail=function(e){var t=null==e?0:e.length;return t?ni(e,1,t):[]},Pr.take=function(e,t,n){return e&&e.length?ni(e,0,(t=n||t===r?1:ps(t))<0?0:t):[]},Pr.takeRight=function(e,t,n){var i=null==e?0:e.length;return i?ni(e,(t=i-(t=n||t===r?1:ps(t)))<0?0:t,i):[]},Pr.takeRightWhile=function(e,t){return e&&e.length?hi(e,lo(t,3),!1,!0):[]},Pr.takeWhile=function(e,t){return e&&e.length?hi(e,lo(t,3)):[]},Pr.tap=function(e,t){return t(e),e},Pr.throttle=function(e,t,r){var i=!0,o=!0;if("function"!=typeof e)throw new Ee(n);return es(r)&&(i="leading"in r?!!r.leading:i,o="trailing"in r?!!r.trailing:o),Fa(e,t,{leading:i,maxWait:t,trailing:o})},Pr.thru=ha,Pr.toArray=fs,Pr.toPairs=zs,Pr.toPairsIn=Ps,Pr.toPath=function(e){return Va(e)?_t(e,Ro):ls(e)?[e]:Ei(Bo(vs(e)))},Pr.toPlainObject=bs,Pr.transform=function(e,t,r){var n=Va(e),i=n||qa(e)||cs(e);if(t=lo(t,4),null==r){var o=e&&e.constructor;r=i?n?new o:[]:es(e)&&Za(o)?Lr(Ue(e)):{}}return(i?Dt:xn)(e,(function(e,n,i){return t(r,e,n,i)})),r},Pr.unary=function(e){return Da(e,1)},Pr.union=ta,Pr.unionBy=ra,Pr.unionWith=na,Pr.uniq=function(e){return e&&e.length?di(e):[]},Pr.uniqBy=function(e,t){return e&&e.length?di(e,lo(t,2)):[]},Pr.uniqWith=function(e,t){return t="function"==typeof t?t:r,e&&e.length?di(e,r,t):[]},Pr.unset=function(e,t){return null==e||ui(e,t)},Pr.unzip=ia,Pr.unzipWith=oa,Pr.update=function(e,t,r){return null==e?e:fi(e,t,vi(r))},Pr.updateWith=function(e,t,n,i){return i="function"==typeof i?i:r,null==e?e:fi(e,t,vi(n),i)},Pr.values=Ls,Pr.valuesIn=function(e){return null==e?[]:Qt(e,Is(e))},Pr.without=aa,Pr.words=Zs,Pr.wrap=function(e,t){return Ra(vi(t),e)},Pr.xor=sa,Pr.xorBy=la,Pr.xorWith=ca,Pr.zip=da,Pr.zipObject=function(e,t){return mi(e||[],t||[],en)},Pr.zipObjectDeep=function(e,t){return mi(e||[],t||[],Jn)},Pr.zipWith=ua,Pr.entries=zs,Pr.entriesIn=Ps,Pr.extend=xs,Pr.extendWith=ws,sl(Pr,Pr),Pr.add=bl,Pr.attempt=Qs,Pr.camelCase=Ns,Pr.capitalize=Hs,Pr.ceil=vl,Pr.clamp=function(e,t,n){return n===r&&(n=t,t=r),n!==r&&(n=(n=ms(n))==n?n:0),t!==r&&(t=(t=ms(t))==t?t:0),sn(ms(e),t,n)},Pr.clone=function(e){return ln(e,4)},Pr.cloneDeep=function(e){return ln(e,5)},Pr.cloneDeepWith=function(e,t){return ln(e,5,t="function"==typeof t?t:r)},Pr.cloneWith=function(e,t){return ln(e,4,t="function"==typeof t?t:r)},Pr.conformsTo=function(e,t){return null==t||cn(e,t,Fs(t))},Pr.deburr=Ws,Pr.defaultTo=function(e,t){return null==e||e!=e?t:e},Pr.divide=yl,Pr.endsWith=function(e,t,n){e=vs(e),t=ci(t);var i=e.length,o=n=n===r?i:sn(ps(n),0,i);return(n-=t.length)>=0&&e.slice(n,o)==t},Pr.eq=La,Pr.escape=function(e){return(e=vs(e))&&X.test(e)?e.replace(K,nr):e},Pr.escapeRegExp=function(e){return(e=vs(e))&&ne.test(e)?e.replace(re,"\\$&"):e},Pr.every=function(e,t,n){var i=Va(e)?Et:pn;return n&&xo(e,t,n)&&(t=r),i(e,lo(t,3))},Pr.find=ma,Pr.findIndex=Wo,Pr.findKey=function(e,t){return Pt(e,lo(t,3),xn)},Pr.findLast=ba,Pr.findLastIndex=Vo,Pr.findLastKey=function(e,t){return Pt(e,lo(t,3),wn)},Pr.floor=xl,Pr.forEach=va,Pr.forEachRight=ya,Pr.forIn=function(e,t){return null==e?e:vn(e,lo(t,3),Is)},Pr.forInRight=function(e,t){return null==e?e:yn(e,lo(t,3),Is)},Pr.forOwn=function(e,t){return e&&xn(e,lo(t,3))},Pr.forOwnRight=function(e,t){return e&&wn(e,lo(t,3))},Pr.get=ks,Pr.gt=Na,Pr.gte=Ha,Pr.has=function(e,t){return null!=e&&mo(e,t,Dn)},Pr.hasIn=Ds,Pr.head=Uo,Pr.identity=nl,Pr.includes=function(e,t,r,n){e=Ua(e)?e:Ls(e),r=r&&!n?ps(r):0;var i=e.length;return r<0&&(r=br(i+r,0)),ss(e)?r<=i&&e.indexOf(t,r)>-1:!!i&&Nt(e,t,r)>-1},Pr.indexOf=function(e,t,r){var n=null==e?0:e.length;if(!n)return-1;var i=null==r?0:ps(r);return i<0&&(i=br(n+i,0)),Nt(e,t,i)},Pr.inRange=function(e,t,n){return t=hs(t),n===r?(n=t,t=0):n=hs(n),function(e,t,r){return e>=vr(t,r)&&e<br(t,r)}(e=ms(e),t,n)},Pr.invoke=Os,Pr.isArguments=Wa,Pr.isArray=Va,Pr.isArrayBuffer=Ya,Pr.isArrayLike=Ua,Pr.isArrayLikeObject=Ka,Pr.isBoolean=function(e){return!0===e||!1===e||ts(e)&&jn(e)==v},Pr.isBuffer=qa,Pr.isDate=Xa,Pr.isElement=function(e){return ts(e)&&1===e.nodeType&&!is(e)},Pr.isEmpty=function(e){if(null==e)return!0;if(Ua(e)&&(Va(e)||"string"==typeof e||"function"==typeof e.splice||qa(e)||cs(e)||Wa(e)))return!e.length;var t=go(e);if(t==C||t==T)return!e.size;if(So(e))return!Bn(e).length;for(var r in e)if(Ae.call(e,r))return!1;return!0},Pr.isEqual=function(e,t){return In(e,t)},Pr.isEqualWith=function(e,t,n){var i=(n="function"==typeof n?n:r)?n(e,t):r;return i===r?In(e,t,r,n):!!i},Pr.isError=Ga,Pr.isFinite=function(e){return"number"==typeof e&&zt(e)},Pr.isFunction=Za,Pr.isInteger=Qa,Pr.isLength=Ja,Pr.isMap=rs,Pr.isMatch=function(e,t){return e===t||_n(e,t,uo(t))},Pr.isMatchWith=function(e,t,n){return n="function"==typeof n?n:r,_n(e,t,uo(t),n)},Pr.isNaN=function(e){return ns(e)&&e!=+e},Pr.isNative=function(e){if(Co(e))throw new Ce("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");return Mn(e)},Pr.isNil=function(e){return null==e},Pr.isNull=function(e){return null===e},Pr.isNumber=ns,Pr.isObject=es,Pr.isObjectLike=ts,Pr.isPlainObject=is,Pr.isRegExp=os,Pr.isSafeInteger=function(e){return Qa(e)&&e>=-9007199254740991&&e<=f},Pr.isSet=as,Pr.isString=ss,Pr.isSymbol=ls,Pr.isTypedArray=cs,Pr.isUndefined=function(e){return e===r},Pr.isWeakMap=function(e){return ts(e)&&go(e)==F},Pr.isWeakSet=function(e){return ts(e)&&"[object WeakSet]"==jn(e)},Pr.join=function(e,t){return null==e?"":Ut.call(e,t)},Pr.kebabCase=Vs,Pr.last=Go,Pr.lastIndexOf=function(e,t,n){var i=null==e?0:e.length;if(!i)return-1;var o=i;return n!==r&&(o=(o=ps(n))<0?br(i+o,0):vr(o,i-1)),t==t?function(e,t,r){for(var n=r+1;n--;)if(e[n]===t)return n;return n}(e,t,o):Lt(e,Wt,o,!0)},Pr.lowerCase=Ys,Pr.lowerFirst=Us,Pr.lt=ds,Pr.lte=us,Pr.max=function(e){return e&&e.length?gn(e,nl,kn):r},Pr.maxBy=function(e,t){return e&&e.length?gn(e,lo(t,2),kn):r},Pr.mean=function(e){return Vt(e,nl)},Pr.meanBy=function(e,t){return Vt(e,lo(t,2))},Pr.min=function(e){return e&&e.length?gn(e,nl,zn):r},Pr.minBy=function(e,t){return e&&e.length?gn(e,lo(t,2),zn):r},Pr.stubArray=gl,Pr.stubFalse=ml,Pr.stubObject=function(){return{}},Pr.stubString=function(){return""},Pr.stubTrue=function(){return!0},Pr.multiply=$l,Pr.nth=function(e,t){return e&&e.length?Wn(e,ps(t)):r},Pr.noConflict=function(){return ht._===this&&(ht._=Le),this},Pr.noop=ll,Pr.now=ka,Pr.pad=function(e,t,r){e=vs(e);var n=(t=ps(t))?ur(e):0;if(!t||n>=t)return e;var i=(t-n)/2;return Vi(gt(i),r)+e+Vi(pt(i),r)},Pr.padEnd=function(e,t,r){e=vs(e);var n=(t=ps(t))?ur(e):0;return t&&n<t?e+Vi(t-n,r):e},Pr.padStart=function(e,t,r){e=vs(e);var n=(t=ps(t))?ur(e):0;return t&&n<t?Vi(t-n,r)+e:e},Pr.parseInt=function(e,t,r){return r||null==t?t=0:t&&(t=+t),xr(vs(e).replace(ie,""),t||0)},Pr.random=function(e,t,n){if(n&&"boolean"!=typeof n&&xo(e,t,n)&&(t=n=r),n===r&&("boolean"==typeof t?(n=t,t=r):"boolean"==typeof e&&(n=e,e=r)),e===r&&t===r?(e=0,t=1):(e=hs(e),t===r?(t=e,e=0):t=hs(t)),e>t){var i=e;e=t,t=i}if(n||e%1||t%1){var o=wr();return vr(e+o*(t-e+ct("1e-"+((o+"").length-1))),t)}return qn(e,t)},Pr.reduce=function(e,t,r){var n=Va(e)?At:Kt,i=arguments.length<3;return n(e,lo(t,4),r,i,fn)},Pr.reduceRight=function(e,t,r){var n=Va(e)?Bt:Kt,i=arguments.length<3;return n(e,lo(t,4),r,i,hn)},Pr.repeat=function(e,t,n){return t=(n?xo(e,t,n):t===r)?1:ps(t),Xn(vs(e),t)},Pr.replace=function(){var e=arguments,t=vs(e[0]);return e.length<3?t:t.replace(e[1],e[2])},Pr.result=function(e,t,n){var i=-1,o=(t=yi(t,e)).length;for(o||(o=1,e=r);++i<o;){var a=null==e?r:e[Ro(t[i])];a===r&&(i=o,a=n),e=Za(a)?a.call(e):a}return e},Pr.round=Cl,Pr.runInContext=e,Pr.sample=function(e){return(Va(e)?Gr:Zn)(e)},Pr.size=function(e){if(null==e)return 0;if(Ua(e))return ss(e)?ur(e):e.length;var t=go(e);return t==C||t==T?e.size:Bn(e).length},Pr.snakeCase=Ks,Pr.some=function(e,t,n){var i=Va(e)?Rt:ii;return n&&xo(e,t,n)&&(t=r),i(e,lo(t,3))},Pr.sortedIndex=function(e,t){return oi(e,t)},Pr.sortedIndexBy=function(e,t,r){return ai(e,t,lo(r,2))},Pr.sortedIndexOf=function(e,t){var r=null==e?0:e.length;if(r){var n=oi(e,t);if(n<r&&La(e[n],t))return n}return-1},Pr.sortedLastIndex=function(e,t){return oi(e,t,!0)},Pr.sortedLastIndexBy=function(e,t,r){return ai(e,t,lo(r,2),!0)},Pr.sortedLastIndexOf=function(e,t){if(null==e?0:e.length){var r=oi(e,t,!0)-1;if(La(e[r],t))return r}return-1},Pr.startCase=qs,Pr.startsWith=function(e,t,r){return e=vs(e),r=null==r?0:sn(ps(r),0,e.length),t=ci(t),e.slice(r,r+t.length)==t},Pr.subtract=Sl,Pr.sum=function(e){return e&&e.length?qt(e,nl):0},Pr.sumBy=function(e,t){return e&&e.length?qt(e,lo(t,2)):0},Pr.template=function(e,t,n){var i=Pr.templateSettings;n&&xo(e,t,n)&&(t=r),e=vs(e),t=ws({},t,i,Qi);var o,a,s=ws({},t.imports,i.imports,Qi),l=Fs(s),c=Qt(s,l),d=0,u=t.interpolate||xe,f="__p += '",h=De((t.escape||xe).source+"|"+u.source+"|"+(u===Q?fe:xe).source+"|"+(t.evaluate||xe).source+"|$","g"),p="//# sourceURL="+(Ae.call(t,"sourceURL")?(t.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++ot+"]")+"\n";e.replace(h,(function(t,r,n,i,s,l){return n||(n=i),f+=e.slice(d,l).replace(we,ir),r&&(o=!0,f+="' +\n__e("+r+") +\n'"),s&&(a=!0,f+="';\n"+s+";\n__p += '"),n&&(f+="' +\n((__t = ("+n+")) == null ? '' : __t) +\n'"),d=l+t.length,t})),f+="';\n";var g=Ae.call(t,"variable")&&t.variable;if(g){if(de.test(g))throw new Ce("Invalid `variable` option passed into `_.template`")}else f="with (obj) {\n"+f+"\n}\n";f=(a?f.replace(W,""):f).replace(V,"$1").replace(Y,"$1;"),f="function("+(g||"obj")+") {\n"+(g?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(o?", __e = _.escape":"")+(a?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+f+"return __p\n}";var m=Qs((function(){return Se(l,p+"return "+f).apply(r,c)}));if(m.source=f,Ga(m))throw m;return m},Pr.times=function(e,t){if((e=ps(e))<1||e>f)return[];var r=p,n=vr(e,p);t=lo(t),e-=p;for(var i=Xt(n,t);++r<e;)t(r);return i},Pr.toFinite=hs,Pr.toInteger=ps,Pr.toLength=gs,Pr.toLower=function(e){return vs(e).toLowerCase()},Pr.toNumber=ms,Pr.toSafeInteger=function(e){return e?sn(ps(e),-9007199254740991,f):0===e?e:0},Pr.toString=vs,Pr.toUpper=function(e){return vs(e).toUpperCase()},Pr.trim=function(e,t,n){if((e=vs(e))&&(n||t===r))return Gt(e);if(!e||!(t=ci(t)))return e;var i=fr(e),o=fr(t);return wi(i,er(i,o),tr(i,o)+1).join("")},Pr.trimEnd=function(e,t,n){if((e=vs(e))&&(n||t===r))return e.slice(0,hr(e)+1);if(!e||!(t=ci(t)))return e;var i=fr(e);return wi(i,0,tr(i,fr(t))+1).join("")},Pr.trimStart=function(e,t,n){if((e=vs(e))&&(n||t===r))return e.replace(ie,"");if(!e||!(t=ci(t)))return e;var i=fr(e);return wi(i,er(i,fr(t))).join("")},Pr.truncate=function(e,t){var n=30,i="...";if(es(t)){var o="separator"in t?t.separator:o;n="length"in t?ps(t.length):n,i="omission"in t?ci(t.omission):i}var a=(e=vs(e)).length;if(or(e)){var s=fr(e);a=s.length}if(n>=a)return e;var l=n-ur(i);if(l<1)return i;var c=s?wi(s,0,l).join(""):e.slice(0,l);if(o===r)return c+i;if(s&&(l+=c.length-l),os(o)){if(e.slice(l).search(o)){var d,u=c;for(o.global||(o=De(o.source,vs(he.exec(o))+"g")),o.lastIndex=0;d=o.exec(u);)var f=d.index;c=c.slice(0,f===r?l:f)}}else if(e.indexOf(ci(o),l)!=l){var h=c.lastIndexOf(o);h>-1&&(c=c.slice(0,h))}return c+i},Pr.unescape=function(e){return(e=vs(e))&&q.test(e)?e.replace(U,pr):e},Pr.uniqueId=function(e){var t=++Be;return vs(e)+t},Pr.upperCase=Xs,Pr.upperFirst=Gs,Pr.each=va,Pr.eachRight=ya,Pr.first=Uo,sl(Pr,(wl={},xn(Pr,(function(e,t){Ae.call(Pr.prototype,t)||(wl[t]=e)})),wl),{chain:!1}),Pr.VERSION="4.17.21",Dt(["bind","bindKey","curry","curryRight","partial","partialRight"],(function(e){Pr[e].placeholder=Pr})),Dt(["drop","take"],(function(e,t){Wr.prototype[e]=function(n){n=n===r?1:br(ps(n),0);var i=this.__filtered__&&!t?new Wr(this):this.clone();return i.__filtered__?i.__takeCount__=vr(n,i.__takeCount__):i.__views__.push({size:vr(n,p),type:e+(i.__dir__<0?"Right":"")}),i},Wr.prototype[e+"Right"]=function(t){return this.reverse()[e](t).reverse()}})),Dt(["filter","map","takeWhile"],(function(e,t){var r=t+1,n=1==r||3==r;Wr.prototype[e]=function(e){var t=this.clone();return t.__iteratees__.push({iteratee:lo(e,3),type:r}),t.__filtered__=t.__filtered__||n,t}})),Dt(["head","last"],(function(e,t){var r="take"+(t?"Right":"");Wr.prototype[e]=function(){return this[r](1).value()[0]}})),Dt(["initial","tail"],(function(e,t){var r="drop"+(t?"":"Right");Wr.prototype[e]=function(){return this.__filtered__?new Wr(this):this[r](1)}})),Wr.prototype.compact=function(){return this.filter(nl)},Wr.prototype.find=function(e){return this.filter(e).head()},Wr.prototype.findLast=function(e){return this.reverse().find(e)},Wr.prototype.invokeMap=Gn((function(e,t){return"function"==typeof e?new Wr(this):this.map((function(r){return On(r,e,t)}))})),Wr.prototype.reject=function(e){return this.filter(Aa(lo(e)))},Wr.prototype.slice=function(e,t){e=ps(e);var n=this;return n.__filtered__&&(e>0||t<0)?new Wr(n):(e<0?n=n.takeRight(-e):e&&(n=n.drop(e)),t!==r&&(n=(t=ps(t))<0?n.dropRight(-t):n.take(t-e)),n)},Wr.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},Wr.prototype.toArray=function(){return this.take(p)},xn(Wr.prototype,(function(e,t){var n=/^(?:filter|find|map|reject)|While$/.test(t),i=/^(?:head|last)$/.test(t),o=Pr[i?"take"+("last"==t?"Right":""):t],a=i||/^find/.test(t);o&&(Pr.prototype[t]=function(){var t=this.__wrapped__,s=i?[1]:arguments,l=t instanceof Wr,c=s[0],d=l||Va(t),u=function(e){var t=o.apply(Pr,Mt([e],s));return i&&f?t[0]:t};d&&n&&"function"==typeof c&&1!=c.length&&(l=d=!1);var f=this.__chain__,h=!!this.__actions__.length,p=a&&!f,g=l&&!h;if(!a&&d){t=g?t:new Wr(this);var m=e.apply(t,s);return m.__actions__.push({func:ha,args:[u],thisArg:r}),new Hr(m,f)}return p&&g?e.apply(this,s):(m=this.thru(u),p?i?m.value()[0]:m.value():m)})})),Dt(["pop","push","shift","sort","splice","unshift"],(function(e){var t=Oe[e],r=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",n=/^(?:pop|shift)$/.test(e);Pr.prototype[e]=function(){var e=arguments;if(n&&!this.__chain__){var i=this.value();return t.apply(Va(i)?i:[],e)}return this[r]((function(r){return t.apply(Va(r)?r:[],e)}))}})),xn(Wr.prototype,(function(e,t){var r=Pr[t];if(r){var n=r.name+"";Ae.call(Or,n)||(Or[n]=[]),Or[n].push({name:t,func:r})}})),Or[Li(r,2).name]=[{name:"wrapper",func:r}],Wr.prototype.clone=function(){var e=new Wr(this.__wrapped__);return e.__actions__=Ei(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=Ei(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=Ei(this.__views__),e},Wr.prototype.reverse=function(){if(this.__filtered__){var e=new Wr(this);e.__dir__=-1,e.__filtered__=!0}else(e=this.clone()).__dir__*=-1;return e},Wr.prototype.value=function(){var e=this.__wrapped__.value(),t=this.__dir__,r=Va(e),n=t<0,i=r?e.length:0,o=function(e,t,r){var n=-1,i=r.length;for(;++n<i;){var o=r[n],a=o.size;switch(o.type){case"drop":e+=a;break;case"dropRight":t-=a;break;case"take":t=vr(t,e+a);break;case"takeRight":e=br(e,t-a)}}return{start:e,end:t}}(0,i,this.__views__),a=o.start,s=o.end,l=s-a,c=n?s:a-1,d=this.__iteratees__,u=d.length,f=0,h=vr(l,this.__takeCount__);if(!r||!n&&i==l&&h==l)return pi(e,this.__actions__);var p=[];e:for(;l--&&f<h;){for(var g=-1,m=e[c+=t];++g<u;){var b=d[g],v=b.iteratee,y=b.type,x=v(m);if(2==y)m=x;else if(!x){if(1==y)continue e;break e}}p[f++]=m}return p},Pr.prototype.at=pa,Pr.prototype.chain=function(){return fa(this)},Pr.prototype.commit=function(){return new Hr(this.value(),this.__chain__)},Pr.prototype.next=function(){this.__values__===r&&(this.__values__=fs(this.value()));var e=this.__index__>=this.__values__.length;return{done:e,value:e?r:this.__values__[this.__index__++]}},Pr.prototype.plant=function(e){for(var t,n=this;n instanceof Nr;){var i=Po(n);i.__index__=0,i.__values__=r,t?o.__wrapped__=i:t=i;var o=i;n=n.__wrapped__}return o.__wrapped__=e,t},Pr.prototype.reverse=function(){var e=this.__wrapped__;if(e instanceof Wr){var t=e;return this.__actions__.length&&(t=new Wr(this)),(t=t.reverse()).__actions__.push({func:ha,args:[ea],thisArg:r}),new Hr(t,this.__chain__)}return this.thru(ea)},Pr.prototype.toJSON=Pr.prototype.valueOf=Pr.prototype.value=function(){return pi(this.__wrapped__,this.__actions__)},Pr.prototype.first=Pr.prototype.head,Ze&&(Pr.prototype[Ze]=function(){return this}),Pr}();gt?((gt.exports=gr)._=gr,pt._=gr):ht._=gr}).call(Ti)}(cj,cj.exports);var dj=cj.exports;const uj=Y.default.forwardRef(((r,n)=>{var{value:i,readOnly:o,"data-testid":a,maskRange:s,unmaskRange:l,maskRegex:c,maskTransformer:d,iconMask:u=e.jsx($.EyeSlashIcon,{}),iconUnmask:f=e.jsx(w.EyeIcon,{}),iconActiveColor:h,iconInactiveColor:p,maskChar:g="•",error:m,disableMask:b,transformInput:v,loadState:y,onMask:x,onUnmask:C,onChange:S,onFocus:j,onBlur:k,onTryAgain:D}=r,T=X(r,["value","readOnly","data-testid","maskRange","unmaskRange","maskRegex","maskTransformer","iconMask","iconUnmask","iconActiveColor","iconInactiveColor","maskChar","error","disableMask","transformInput","loadState","onMask","onUnmask","onChange","onFocus","onBlur","onTryAgain"]);const E=o&&dj.isEmpty(i),[O,F]=t.useState(!b),[I,_]=t.useState(i||"");t.useEffect((()=>{_(i||"")}),[i]);const M=e=>{P(!1),j&&j(e)},A=e=>{P(!0),k&&k(e)},B=e=>{let t=e.target.value;switch(v){case"uppercase":t=t.toUpperCase();break;case"lowercase":t=t.toLowerCase()}_(t),e.target.value=t,S&&S(e)},R=()=>{o&&D&&D()},z=()=>{P(!O)},P=e=>{F(e),e?x&&x():C&&C()},L=()=>!(null==I?void 0:I.toString().length)||b,N=()=>{if(E)return e.jsx(e.Fragment,{});const t=L();return e.jsx(ej,{"data-testid":"icon-"+(O?"masked":"unmasked"),onClick:t?void 0:z,$isDisabled:t,$inactiveColor:p,$activeColor:h,children:O?f:u})};return e.jsx("div",{"aria-busy":"loading"===y,"aria-live":"polite",children:(()=>{if(o)switch(y){case"fail":return e.jsxs(lj,{onClick:R,"data-testid":"try-again-button",children:[e.jsxs(oj,{children:[e.jsx(aj,{}),e.jsx(sj,{children:"Error"})]}),e.jsx(ij,{children:"Try again?"})]});case"loading":return e.jsxs(tj,{children:[e.jsx(nj,{}),e.jsx(rj,{children:"Retrieving..."})]})}return e.jsx(JS,Object.assign({ref:n,"data-testid":`${a||"masked-input"}${O?"-masked":"-unmasked"}`,addon:{type:"custom",attributes:{children:N()},position:"right"},onFocus:o?void 0:M,onBlur:o?void 0:A,onClick:o?z:void 0,onChange:B,value:E?"-":O&&!b?Jc.maskValue(I,{maskChar:g,maskRange:s,unmaskRange:l,maskRegex:c,maskTransformer:d}):I,readOnly:o,error:m,$isDisabled:L()},T))})()})})),fj=Y.default.forwardRef(((t,r)=>{const{label:n,errorMessage:i,id:o="form-field-masked-input","data-error-testid":a,"data-testid":s,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u}=t,f=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e.jsx(sx,{id:o,label:n,errorMessage:i,disabled:f.disabled,"data-error-testid":a,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,children:e.jsx(uj,Object.assign({ref:r,id:`${o}-base`,"data-testid":s||o,error:!!i},f))})})),hj=K.default.div`
    font-weight: ${e=>e.$bold?qs.Spec["weight-semibold"]:qs.Spec["weight-regular"]};
    color: ${e=>e.$selected?Ks["text-selected"]:Ks.text};
    width: 100%;

    ${e=>"end"===e.$truncateType&&il(e.$maxLines||2)}
    overflow-wrap: break-word;
`,pj=K.default.div`
    color: ${Ks["text-subtlest"]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&il(e.$maxLines||2)}
    overflow-wrap: break-word;

    ${e=>"next-line"===e.$labelDisplayType?i.css`
                    ${qs["body-md-semibold"]}
                `:i.css`
                    ${qs["body-baseline-regular"]}
                `}
`,gj=K.default.span`
    font-weight: ${qs.Spec["weight-semibold"]};
`,mj=K.default.div`
    text-align: left;
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;

    ${e=>"small"===e.$variant?qs["body-md-regular"]:qs["body-baseline-regular"]}

    ${e=>{switch(e.$labelDisplayType){case"next-line":return i.css`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return i.css`
                    ${hj} {
                        display: inline;
                    }

                    ${pj} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,bj=K.default.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    word-break: break-all;
    overflow: hidden;
`,vj=K.default.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1lh;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,yj=({bold:r,displayType:n="inline",label:o,searchTerm:a,maxLines:s=2,selected:l,sublabel:c,truncationType:d="middle",variant:u="default"})=>{const f=i.useTheme(),h="small"===u?qs.Spec["body-size-md"]({theme:f}):qs.Spec["body-size-baseline"]({theme:f}),p=qs.Spec["font-family"]({theme:f}),{ref:g,width:m}=qe(),b=t.useCallback((e=>{if("inline"!==n||!m)return!1;return Jc.getTextWidth(e,`${h} '${p}'`)>m*s-50}),[m,n,h,p,s]),v=t.useMemo((()=>b(o)),[b,o]),y=t.useMemo((()=>c&&b(c)),[b,c]),x=v||y?"next-line":n,w=t=>{if(!a)return t;const r=a.toLowerCase().trim(),n=t.toLowerCase().indexOf(r),i=n+a.length;return-1===n?t:e.jsxs(e.Fragment,{children:[o.slice(0,n),e.jsx(gj,{$variant:u,children:o.slice(n,i)}),o.slice(i)]})},$=t=>e.jsxs(e.Fragment,{children:[e.jsx(bj,{$maxLines:s,"aria-hidden":!0,children:w(t)}),e.jsx(vj,{$maxLines:s,"aria-hidden":!0,children:w(t)})]});return e.jsxs(mj,{ref:g,$labelDisplayType:x,$variant:u,children:[e.jsx(hj,{"aria-label":o,$bold:r,$maxLines:s,$selected:l,$truncateType:d,children:"middle"===d&&v?$(o):w(o)}),c&&e.jsx(pj,{"aria-label":c,$maxLines:s,$truncateType:d,$labelDisplayType:n,children:"middle"===d&&y?$(c):c})]})};function xj(e){return()=>e}function wj(e){e()}function $j(e,t){return r=>e(t(r))}function Cj(e,t){return()=>e(t)}function Sj(e,t){return r=>e(t,r)}function jj(e){return void 0!==e}function kj(){}function Dj(e,t){return t(e),e}function Tj(e,t){return t(e)}function Ej(...e){return e}function Oj(e,t){return e(1,t)}function Fj(e,t){e(0,t)}function Ij(e){e(2)}function _j(e){return e(4)}function Mj(e,t){return Oj(e,Sj(t,0))}function Aj(e,t){const r=e(1,(e=>{r(),t(e)}));return r}function Bj(e){let t,r;return n=>i=>{t=i,r&&clearTimeout(r),r=setTimeout((()=>{n(t)}),e)}}function Rj(e,t){return e===t}function zj(e=Rj){let t;return r=>n=>{e(t,n)||(t=n,r(n))}}function Pj(e){return t=>r=>{e(r)&&t(r)}}function Lj(e){return t=>$j(t,e)}function Nj(e){return t=>()=>{t(e)}}function Hj(e,...t){const r=function(...e){return t=>e.reduceRight(Tj,t)}(...t);return(t,n)=>{switch(t){case 2:return void Ij(e);case 1:return Oj(e,r(n))}}}function Wj(e,t){return r=>n=>{r(t=e(t,n))}}function Vj(e){return t=>r=>{e>0?e--:t(r)}}function Yj(e){let t,r=null;return n=>i=>{r=i,!t&&(t=setTimeout((()=>{t=void 0,n(r)}),e))}}function Uj(...e){const t=new Array(e.length);let r=0,n=null;const i=Math.pow(2,e.length)-1;return e.forEach(((e,o)=>{const a=Math.pow(2,o);Oj(e,(e=>{const s=r;r|=a,t[o]=e,s!==i&&r===i&&n&&(n(),n=null)}))})),e=>o=>{const a=()=>{e([o].concat(t))};r===i?a():n=a}}function Kj(e){let t=e;const r=Xj();return(e,n)=>{switch(e){case 0:t=n;break;case 1:n(t);break;case 4:return t}return r(e,n)}}function qj(e,t){return Dj(Kj(t),(t=>Mj(e,t)))}function Xj(){const e=[];return(t,r)=>{switch(t){case 0:return void e.slice().forEach((e=>{e(r)}));case 2:return void e.splice(0,e.length);case 1:return e.push(r),()=>{const t=e.indexOf(r);t>-1&&e.splice(t,1)}}}}function Gj(e){return Dj(Xj(),(t=>Mj(e,t)))}function Zj(e,t=[],{singleton:r}={singleton:!0}){return{constructor:e,dependencies:t,id:Qj(),singleton:r}}const Qj=()=>Symbol();function Jj(...e){const t=Xj(),r=new Array(e.length);let n=0;const i=Math.pow(2,e.length)-1;return e.forEach(((e,o)=>{const a=Math.pow(2,o);Oj(e,(e=>{r[o]=e,n|=a,n===i&&Fj(t,r)}))})),function(e,o){switch(e){case 2:return void Ij(t);case 1:return n===i&&o(r),Oj(t,o)}}}function ek(e,t=Rj){return Hj(e,zj(t))}function tk(...e){return function(t,r){switch(t){case 2:return;case 1:return function(...e){return()=>{e.map(wj)}}(...e.map((e=>Oj(e,r))))}}}var rk=(e=>(e[e.DEBUG=0]="DEBUG",e[e.INFO=1]="INFO",e[e.WARN=2]="WARN",e[e.ERROR=3]="ERROR",e))(rk||{});const nk={0:"debug",3:"error",1:"log",2:"warn"},ik=Zj((()=>{const e=Kj(3);return{log:Kj(((t,r,n=1)=>{var i;n>=(null!=(i=(typeof globalThis>"u"?window:globalThis).VIRTUOSO_LOG_LEVEL)?i:_j(e))&&console[nk[n]]("%creact-virtuoso: %c%s %o","color: #0253b3; font-weight: bold","color: initial",t,r)})),logLevel:e}}),[],{singleton:!0});function ok(e,t,r){return ak(e,t,r).callbackRef}function ak(e,t,r){const n=Y.default.useRef(null);let i=e=>{};if(typeof ResizeObserver<"u"){const o=Y.default.useMemo((()=>new ResizeObserver((t=>{const n=()=>{const r=t[0].target;null!==r.offsetParent&&e(r)};r?n():requestAnimationFrame(n)}))),[e]);i=e=>{e&&t?(o.observe(e),n.current=e):(n.current&&o.unobserve(n.current),n.current=null)}}return{callbackRef:i,ref:n}}function sk(e,t,r,n,i,o,a,s,l){const c=Y.default.useCallback((r=>{const l=function(e,t,r,n){const i=e.length;if(0===i)return null;const o=[];for(let a=0;a<i;a++){const i=e.item(a);if(void 0===i.dataset.index)continue;const s=parseInt(i.dataset.index),l=parseFloat(i.dataset.knownSize),c=t(i,r);if(0===c&&n("Zero-sized element, this should not happen",{child:i},rk.ERROR),c===l)continue;const d=o[o.length-1];0===o.length||d.size!==c||d.endIndex!==s-1?o.push({endIndex:s,size:c,startIndex:s}):o[o.length-1].endIndex++}return o}(r.children,t,s?"offsetWidth":"offsetHeight",i);let c=r.parentElement;for(;!c.dataset.virtuosoScroller;)c=c.parentElement;const d="window"===c.lastElementChild.dataset.viewportType,u=a?s?a.scrollLeft:a.scrollTop:d?s?window.pageXOffset||document.documentElement.scrollLeft:window.pageYOffset||document.documentElement.scrollTop:s?c.scrollLeft:c.scrollTop,f=a?s?a.scrollWidth:a.scrollHeight:d?s?document.documentElement.scrollWidth:document.documentElement.scrollHeight:s?c.scrollWidth:c.scrollHeight,h=a?s?a.offsetWidth:a.offsetHeight:d?s?window.innerWidth:window.innerHeight:s?c.offsetWidth:c.offsetHeight;n({scrollHeight:f,scrollTop:Math.max(u,0),viewportHeight:h}),null==o||o(s?lk("column-gap",getComputedStyle(r).columnGap,i):lk("row-gap",getComputedStyle(r).rowGap,i)),null!==l&&e(l)}),[e,t,i,o,a,n]);return ak(c,r,l)}function lk(e,t,r){return"normal"!==t&&!(null!=t&&t.endsWith("px"))&&r(`${e} was not resolved to pixel value correctly`,t,rk.WARN),"normal"===t?0:parseInt(null!=t?t:"0",10)}function ck(e,t,r){const n=Y.default.useRef(null),i=Y.default.useCallback((r=>{if(null==r||!r.offsetParent)return;const i=r.getBoundingClientRect(),o=i.width;let a,s;if(t){const e=t.getBoundingClientRect(),r=i.top-e.top;s=e.height-Math.max(0,r),a=r+t.scrollTop}else s=window.innerHeight-Math.max(0,i.top),a=i.top+window.pageYOffset;n.current={offsetTop:a,visibleHeight:s,visibleWidth:o},e(n.current)}),[e,t]),{callbackRef:o,ref:a}=ak(i,!0,r),s=Y.default.useCallback((()=>{i(a.current)}),[i,a]);return Y.default.useEffect((()=>{if(t){t.addEventListener("scroll",s);const e=new ResizeObserver((()=>{requestAnimationFrame(s)}));return e.observe(t),()=>{t.removeEventListener("scroll",s),e.unobserve(t)}}return window.addEventListener("scroll",s),window.addEventListener("resize",s),()=>{window.removeEventListener("scroll",s),window.removeEventListener("resize",s)}}),[s,t]),o}const dk=Zj((()=>{const e=Xj(),t=Xj(),r=Kj(0),n=Xj(),i=Kj(0),o=Xj(),a=Xj(),s=Kj(0),l=Kj(0),c=Kj(0),d=Kj(0),u=Xj(),f=Xj(),h=Kj(!1),p=Kj(!1),g=Kj(!1);return Mj(Hj(e,Lj((({scrollTop:e})=>e))),t),Mj(Hj(e,Lj((({scrollHeight:e})=>e))),a),Mj(t,i),{deviation:r,fixedFooterHeight:c,fixedHeaderHeight:l,footerHeight:d,headerHeight:s,horizontalDirection:p,scrollBy:f,scrollContainerState:e,scrollHeight:a,scrollingInProgress:h,scrollTo:u,scrollTop:t,skipAnimationFrameInResizeObserver:g,smoothScrollTargetReached:n,statefulScrollTop:i,viewportHeight:o}}),[],{singleton:!0}),uk={lvl:0};function fk(e,t){const r=e.length;if(0===r)return[];let{index:n,value:i}=t(e[0]);const o=[];for(let a=1;a<r;a++){const{index:r,value:s}=t(e[a]);o.push({end:r-1,start:n,value:i}),n=r,i=s}return o.push({end:1/0,start:n,value:i}),o}function hk(e){return e===uk}function pk(e,t){if(!hk(e))return t===e.k?e.v:t<e.k?pk(e.l,t):pk(e.r,t)}function gk(e,t,r="k"){if(hk(e))return[-1/0,void 0];if(Number(e[r])===t)return[e.k,e.v];if(Number(e[r])<t){const n=gk(e.r,t,r);return n[0]===-1/0?[e.k,e.v]:n}return gk(e.l,t,r)}function mk(e,t,r){return hk(e)?Dk(t,r,1):t===e.k?Ck(e,{k:t,v:r}):t<e.k?Tk(Ck(e,{l:mk(e.l,t,r)})):Tk(Ck(e,{r:mk(e.r,t,r)}))}function bk(){return uk}function vk(e,t,r){if(hk(e))return[];return function(e){return fk(e,(({k:e,v:t})=>({index:e,value:t})))}(wk(e,gk(e,t)[0],r))}function yk(e,t){if(hk(e))return uk;const{k:r,l:n,r:i}=e;if(t===r){if(hk(n))return i;if(hk(i))return n;{const[t,r]=kk(n);return $k(Ck(e,{k:t,l:Sk(n),v:r}))}}return $k(Ck(e,t<r?{l:yk(n,t)}:{r:yk(i,t)}))}function xk(e){return hk(e)?[]:[...xk(e.l),{k:e.k,v:e.v},...xk(e.r)]}function wk(e,t,r){if(hk(e))return[];const{k:n,l:i,r:o,v:a}=e;let s=[];return n>t&&(s=s.concat(wk(i,t,r))),n>=t&&n<=r&&s.push({k:n,v:a}),n<=r&&(s=s.concat(wk(o,t,r))),s}function $k(e){const{l:t,lvl:r,r:n}=e;if(n.lvl>=r-1&&t.lvl>=r-1)return e;if(r>n.lvl+1){if(jk(t))return Ek(Ck(e,{lvl:r-1}));if(!hk(t)&&!hk(t.r))return Ck(t.r,{l:Ck(t,{r:t.r.l}),lvl:r,r:Ck(e,{l:t.r.r,lvl:r-1})});throw new Error("Unexpected empty nodes")}if(jk(e))return Ok(Ck(e,{lvl:r-1}));if(hk(n)||hk(n.l))throw new Error("Unexpected empty nodes");{const t=n.l,i=jk(t)?n.lvl-1:n.lvl;return Ck(t,{l:Ck(e,{lvl:r-1,r:t.l}),lvl:t.lvl+1,r:Ok(Ck(n,{l:t.r,lvl:i}))})}}function Ck(e,t){return Dk(void 0!==t.k?t.k:e.k,void 0!==t.v?t.v:e.v,void 0!==t.lvl?t.lvl:e.lvl,void 0!==t.l?t.l:e.l,void 0!==t.r?t.r:e.r)}function Sk(e){return hk(e.r)?e.l:$k(Ck(e,{r:Sk(e.r)}))}function jk(e){return hk(e)||e.lvl>e.r.lvl}function kk(e){return hk(e.r)?[e.k,e.v]:kk(e.r)}function Dk(e,t,r,n=uk,i=uk){return{k:e,l:n,lvl:r,r:i,v:t}}function Tk(e){return Ok(Ek(e))}function Ek(e){const{l:t}=e;return hk(t)||t.lvl!==e.lvl?e:Ck(t,{r:Ck(e,{l:t.r})})}function Ok(e){const{lvl:t,r:r}=e;return hk(r)||hk(r.r)||r.lvl!==t||r.r.lvl!==t?e:Ck(r,{l:Ck(e,{r:r.l}),lvl:t+1})}function Fk(e,t){return!(!e||e.startIndex!==t.startIndex||e.endIndex!==t.endIndex)}function Ik(e,t){return!(!e||e[0]!==t[0]||e[1]!==t[1])}const _k=Zj((()=>({recalcInProgress:Kj(!1)})),[],{singleton:!0});function Mk(e,t,r){return e[Ak(e,t,r)]}function Ak(e,t,r,n=0){let i=e.length-1;for(;n<=i;){const o=Math.floor((n+i)/2),a=r(e[o],t);if(0===a)return o;if(-1===a){if(i-n<2)return o-1;i=o-1}else{if(i===n)return o;n=o+1}}throw new Error(`Failed binary finding record in array - ${e.join(",")}, searched for ${t}`)}function Bk(e,t){return Math.round(e.getBoundingClientRect()[t])}function Rk(e){return!hk(e.groupOffsetTree)}function zk({index:e},t){return t===e?0:t<e?-1:1}function Pk({offset:e},t){return t===e?0:t<e?-1:1}function Lk(e,t,r){if(0===t.length)return 0;const{index:n,offset:i,size:o}=Mk(t,e,zk),a=e-n,s=o*a+(a-1)*r+i;return s>0?s+r:s}function Nk(e,t){if(!Rk(t))return e;let r=0;for(;t.groupIndices[r]<=e+r;)r++;return e+r}function Hk(e,t,r){if(function(e){return typeof e.groupIndex<"u"}(e))return t.groupIndices[e.groupIndex]+1;{let n=Nk("LAST"===e.index?r:e.index,t);return n=Math.max(0,n,Math.min(r,n)),n}}function Wk(e,t,r,n=0){return n>0&&(t=Math.max(t,Mk(e,n,zk).offset)),fk(function(e,t,r,n){const i=Ak(e,t,n),o=Ak(e,r,n,i);return e.slice(i,o+1)}(e,t,r,Pk),Kk)}function Vk(e,[t,r,n,i]){t.length>0&&n("received item sizes",t,rk.DEBUG);const o=e.sizeTree;let a=o,s=0;if(r.length>0&&hk(o)&&2===t.length){const e=t[0].size,n=t[1].size;a=r.reduce(((t,r)=>mk(mk(t,r,e),r+1,n)),a)}else[a,s]=function(e,t){let r=hk(e)?0:1/0;for(const n of t){const{endIndex:t,size:i,startIndex:o}=n;if(r=Math.min(r,o),hk(e)){e=mk(e,0,i);continue}const a=vk(e,o-1,t+1);if(a.some(qk(n)))continue;let s=!1,l=!1;for(const{end:r,start:n,value:o}of a)s?(t>=n||i===o)&&(e=yk(e,n)):(l=o!==i,s=!0),r>t&&t>=n&&o!==i&&(e=mk(e,t+1,o));l&&(e=mk(e,o,i))}return[e,r]}(a,t);if(a===o)return e;const{lastIndex:l,lastOffset:c,lastSize:d,offsetTree:u}=Uk(e.offsetTree,s,a,i);return{groupIndices:r,groupOffsetTree:r.reduce(((e,t)=>mk(e,t,Lk(t,u,i))),bk()),lastIndex:l,lastOffset:c,lastSize:d,offsetTree:u,sizeTree:a}}function Yk(e,t){let r=0,n=0;for(;r<e;)r+=t[n+1]-t[n]-1,n++;return n-(r===e?0:1)}function Uk(e,t,r,n){let i=e,o=0,a=0,s=0,l=0;if(0!==t){l=Ak(i,t-1,zk),s=i[l].offset;const e=gk(r,t-1);o=e[0],a=e[1],i.length&&i[l].size===gk(r,t)[1]&&(l-=1),i=i.slice(0,l+1)}else i=[];for(const{start:e,value:l}of vk(r,t,1/0)){const t=e-o,r=t*a+s+t*n;i.push({index:e,offset:r,size:l}),o=e,s=r,a=l}return{lastIndex:o,lastOffset:s,lastSize:a,offsetTree:i}}function Kk(e){return{index:e.index,value:e}}function qk(e){const{endIndex:t,size:r,startIndex:n}=e;return e=>e.start===n&&(e.end===t||e.end===1/0)&&e.value===r}const Xk={offsetHeight:"height",offsetWidth:"width"},Gk=Zj((([{log:e},{recalcInProgress:t}])=>{const r=Xj(),n=Xj(),i=qj(n,0),o=Xj(),a=Xj(),s=Kj(0),l=Kj([]),c=Kj(void 0),d=Kj(void 0),u=Kj(((e,t)=>Bk(e,Xk[t]))),f=Kj(void 0),h=Kj(0),p={groupIndices:[],groupOffsetTree:bk(),lastIndex:0,lastOffset:0,lastSize:0,offsetTree:[],sizeTree:bk()},g=qj(Hj(r,Uj(l,e,h),Wj(Vk,p),zj()),p),m=qj(Hj(l,zj(),Wj(((e,t)=>({current:t,prev:e.current})),{current:[],prev:[]}),Lj((({prev:e})=>e))),[]);Mj(Hj(l,Pj((e=>e.length>0)),Uj(g,h),Lj((([e,t,r])=>{const n=e.reduce(((e,n,i)=>mk(e,n,Lk(n,t.offsetTree,r)||i)),bk());return{...t,groupIndices:e,groupOffsetTree:n}}))),g),Mj(Hj(n,Uj(g),Pj((([e,{lastIndex:t}])=>e<t)),Lj((([e,{lastIndex:t,lastSize:r}])=>[{endIndex:t,size:r,startIndex:e}]))),r),Mj(c,d);const b=qj(Hj(c,Lj((e=>void 0===e))),!0);Mj(Hj(d,Pj((e=>void 0!==e&&hk(_j(g).sizeTree))),Lj((e=>[{endIndex:0,size:e,startIndex:0}]))),r);const v=Gj(Hj(r,Uj(g),Wj((({sizes:e},[t,r])=>({changed:r!==e,sizes:r})),{changed:!1,sizes:p}),Lj((e=>e.changed))));Oj(Hj(s,Wj(((e,t)=>({diff:e.prev-t,prev:t})),{diff:0,prev:0}),Lj((e=>e.diff))),(e=>{const{groupIndices:r}=_j(g);if(e>0)Fj(t,!0),Fj(o,e+Yk(e,r));else if(e<0){const t=_j(m);t.length>0&&(e-=Yk(-e,t)),Fj(a,e)}})),Oj(Hj(s,Uj(e)),(([e,t])=>{e<0&&t("`firstItemIndex` prop should not be set to less than zero. If you don't know the total count, just use a very high value",{firstItemIndex:s},rk.ERROR)}));const y=Gj(o);Mj(Hj(o,Uj(g),Lj((([e,t])=>{const r=t.groupIndices.length>0,n=[],i=t.lastSize;if(r){const r=pk(t.sizeTree,0);let o=0,a=0;for(;o<e;){const e=t.groupIndices[a],s=t.groupIndices.length===a+1?1/0:t.groupIndices[a+1]-e-1;n.push({endIndex:e,size:r,startIndex:e}),n.push({endIndex:e+1+s-1,size:i,startIndex:e+1}),a++,o+=s+1}const s=xk(t.sizeTree);return o!==e&&s.shift(),s.reduce(((t,{k:r,v:n})=>{let i=t.ranges;return 0!==t.prevSize&&(i=[...t.ranges,{endIndex:r+e-1,size:t.prevSize,startIndex:t.prevIndex}]),{prevIndex:r+e,prevSize:n,ranges:i}}),{prevIndex:e,prevSize:0,ranges:n}).ranges}return xk(t.sizeTree).reduce(((t,{k:r,v:n})=>({prevIndex:r+e,prevSize:n,ranges:[...t.ranges,{endIndex:r+e-1,size:t.prevSize,startIndex:t.prevIndex}]})),{prevIndex:0,prevSize:i,ranges:[]}).ranges}))),r);const x=Gj(Hj(a,Uj(g,h),Lj((([e,{offsetTree:t},r])=>Lk(-e,t,r)))));return Mj(Hj(a,Uj(g,h),Lj((([e,t,r])=>{if(t.groupIndices.length>0){if(hk(t.sizeTree))return t;let n=bk();const i=_j(m);let o=0,a=0,s=0;for(;o<-e;){s=i[a];const e=i[a+1]-s-1;a++,o+=e+1}if(n=xk(t.sizeTree).reduce(((t,{k:r,v:n})=>mk(t,Math.max(0,r+e),n)),n),o!==-e){n=mk(n,0,pk(t.sizeTree,s));n=mk(n,1,gk(t.sizeTree,1-e)[1])}return{...t,sizeTree:n,...Uk(t.offsetTree,0,n,r)}}{const n=xk(t.sizeTree).reduce(((t,{k:r,v:n})=>mk(t,Math.max(0,r+e),n)),bk());return{...t,sizeTree:n,...Uk(t.offsetTree,0,n,r)}}}))),g),{beforeUnshiftWith:y,data:f,defaultItemSize:d,firstItemIndex:s,fixedItemSize:c,gap:h,groupIndices:l,itemSize:u,listRefresh:v,shiftWith:a,shiftWithOffset:x,sizeRanges:r,sizes:g,statefulTotalCount:i,totalCount:n,trackItemSizes:b,unshiftWith:o}}),Ej(ik,_k),{singleton:!0});function Zk(e){return e.reduce(((e,t)=>(e.groupIndices.push(e.totalCount),e.totalCount+=t+1,e)),{groupIndices:[],totalCount:0})}const Qk=Zj((([{groupIndices:e,sizes:t,totalCount:r},{headerHeight:n,scrollTop:i}])=>{const o=Xj(),a=Xj(),s=Gj(Hj(o,Lj(Zk)));return Mj(Hj(s,Lj((e=>e.totalCount))),r),Mj(Hj(s,Lj((e=>e.groupIndices))),e),Mj(Hj(Jj(i,t,n),Pj((([e,t])=>Rk(t))),Lj((([e,t,r])=>gk(t.groupOffsetTree,Math.max(e-r,0),"v")[0])),zj(),Lj((e=>[e]))),a),{groupCounts:o,topItemsIndexes:a}}),Ej(Gk,dk)),Jk=Zj((([{log:e}])=>{const t=Kj(!1),r=Gj(Hj(t,Pj((e=>e)),zj()));return Oj(t,(t=>{t&&_j(e)("props updated",{},rk.DEBUG)})),{didMount:r,propsReady:t}}),Ej(ik),{singleton:!0}),eD=typeof document<"u"&&"scrollBehavior"in document.documentElement.style;function tD(e){const t="number"==typeof e?{index:e}:e;return t.align||(t.align="start"),(!t.behavior||!eD)&&(t.behavior="auto"),t.offset||(t.offset=0),t}const rD=Zj((([{gap:e,listRefresh:t,sizes:r,totalCount:n},{fixedFooterHeight:i,fixedHeaderHeight:o,footerHeight:a,headerHeight:s,scrollingInProgress:l,scrollTo:c,smoothScrollTargetReached:d,viewportHeight:u},{log:f}])=>{const h=Xj(),p=Xj(),g=Kj(0);let m=null,b=null,v=null;function y(){m&&(m(),m=null),v&&(v(),v=null),b&&(clearTimeout(b),b=null),Fj(l,!1)}return Mj(Hj(h,Uj(r,u,n,g,s,a,f),Uj(e,o,i),Lj((([[e,r,n,i,o,a,s,c],u,f,g])=>{const x=tD(e),{align:w,behavior:$,offset:C}=x,S=i-1,j=Hk(x,r,S);let k=Lk(j,r.offsetTree,u)+a;"end"===w?(k+=f+gk(r.sizeTree,j)[1]-n+g,j===S&&(k+=s)):"center"===w?k+=(f+gk(r.sizeTree,j)[1]-n+g)/2:k-=o,C&&(k+=C);const D=t=>{y(),t?(c("retrying to scroll to",{location:e},rk.DEBUG),Fj(h,e)):(Fj(p,!0),c("list did not change, scroll successful",{},rk.DEBUG))};if(y(),"smooth"===$){let e=!1;v=Oj(t,(t=>{e=e||t})),m=Aj(d,(()=>{D(e)}))}else m=Aj(Hj(t,function(e){return t=>{const r=setTimeout((()=>{t(!1)}),e);return e=>{e&&(t(!0),clearTimeout(r))}}}(150)),D);return b=setTimeout((()=>{y()}),1200),Fj(l,!0),c("scrolling from index to",{behavior:$,index:j,top:k},rk.DEBUG),{behavior:$,top:k}}))),c),{scrollTargetReached:p,scrollToIndex:h,topListHeight:g}}),Ej(Gk,dk,ik),{singleton:!0});function nD(e,t){0==e?t():requestAnimationFrame((()=>{nD(e-1,t)}))}function iD(e,t){const r=t-1;return"number"==typeof e?e:"LAST"===e.index?r:e.index}const oD=Zj((([{defaultItemSize:e,listRefresh:t,sizes:r},{scrollTop:n},{scrollTargetReached:i,scrollToIndex:o},{didMount:a}])=>{const s=Kj(!0),l=Kj(0),c=Kj(!0);return Mj(Hj(a,Uj(l),Pj((([e,t])=>!!t)),Nj(!1)),s),Mj(Hj(a,Uj(l),Pj((([e,t])=>!!t)),Nj(!1)),c),Oj(Hj(Jj(t,a),Uj(s,r,e,c),Pj((([[,e],t,{sizeTree:r},n,i])=>e&&(!hk(r)||jj(n))&&!t&&!i)),Uj(l)),(([,e])=>{Aj(i,(()=>{Fj(c,!0)})),nD(4,(()=>{Aj(n,(()=>{Fj(s,!0)})),Fj(o,e)}))})),{initialItemFinalLocationReached:c,initialTopMostItemIndex:l,scrolledToInitialItem:s}}),Ej(Gk,dk,rD,Jk),{singleton:!0});function aD(e,t){return Math.abs(e-t)<1.01}const sD="up",lD="down",cD={atBottom:!1,notAtBottomBecause:"NOT_SHOWING_LAST_ITEM",state:{offsetBottom:0,scrollHeight:0,scrollTop:0,viewportHeight:0}},dD=Zj((([{footerHeight:e,headerHeight:t,scrollBy:r,scrollContainerState:n,scrollTop:i,viewportHeight:o}])=>{const a=Kj(!1),s=Kj(!0),l=Xj(),c=Xj(),d=Kj(4),u=Kj(0),f=qj(Hj(tk(Hj(ek(i),Vj(1),Nj(!0)),Hj(ek(i),Vj(1),Nj(!1),Bj(100))),zj()),!1),h=qj(Hj(tk(Hj(r,Nj(!0)),Hj(r,Nj(!1),Bj(200))),zj()),!1);Mj(Hj(Jj(ek(i),ek(u)),Lj((([e,t])=>e<=t)),zj()),s),Mj(Hj(s,Yj(50)),c);const p=Gj(Hj(Jj(n,ek(o),ek(t),ek(e),ek(d)),Wj(((e,[{scrollHeight:t,scrollTop:r},n,i,o,a])=>{const s={scrollHeight:t,scrollTop:r,viewportHeight:n};if(r+n-t>-a){let t,n;return r>e.state.scrollTop?(t="SCROLLED_DOWN",n=e.state.scrollTop-r):(t="SIZE_DECREASED",n=e.state.scrollTop-r||e.scrollTopDelta),{atBottom:!0,atBottomBecause:t,scrollTopDelta:n,state:s}}let l;return l=s.scrollHeight>e.state.scrollHeight?"SIZE_INCREASED":n<e.state.viewportHeight?"VIEWPORT_HEIGHT_DECREASING":r<e.state.scrollTop?"SCROLLING_UPWARDS":"NOT_FULLY_SCROLLED_TO_LAST_ITEM_BOTTOM",{atBottom:!1,notAtBottomBecause:l,state:s}}),cD),zj(((e,t)=>e&&e.atBottom===t.atBottom)))),g=qj(Hj(n,Wj(((e,{scrollHeight:t,scrollTop:r,viewportHeight:n})=>{if(aD(e.scrollHeight,t))return{changed:!1,jump:0,scrollHeight:t,scrollTop:r};{const i=t-(r+n)<1;return e.scrollTop!==r&&i?{changed:!0,jump:e.scrollTop-r,scrollHeight:t,scrollTop:r}:{changed:!0,jump:0,scrollHeight:t,scrollTop:r}}}),{changed:!1,jump:0,scrollHeight:0,scrollTop:0}),Pj((e=>e.changed)),Lj((e=>e.jump))),0);Mj(Hj(p,Lj((e=>e.atBottom))),a),Mj(Hj(a,Yj(50)),l);const m=Kj(lD);Mj(Hj(n,Lj((({scrollTop:e})=>e)),zj(),Wj(((e,t)=>_j(h)?{direction:e.direction,prevScrollTop:t}:{direction:t<e.prevScrollTop?sD:lD,prevScrollTop:t}),{direction:lD,prevScrollTop:0}),Lj((e=>e.direction))),m),Mj(Hj(n,Yj(50),Nj("none")),m);const b=Kj(0);return Mj(Hj(f,Pj((e=>!e)),Nj(0)),b),Mj(Hj(i,Yj(100),Uj(f),Pj((([e,t])=>!!t)),Wj((([e,t],[r])=>[t,r]),[0,0]),Lj((([e,t])=>t-e))),b),{atBottomState:p,atBottomStateChange:l,atBottomThreshold:d,atTopStateChange:c,atTopThreshold:u,isAtBottom:a,isAtTop:s,isScrolling:f,lastJumpDueToItemResize:g,scrollDirection:m,scrollVelocity:b}}),Ej(dk)),uD="top",fD="bottom",hD="none";function pD(e,t,r){return"number"==typeof e?r===sD&&t===uD||r===lD&&t===fD?e:0:r===sD?t===uD?e.main:e.reverse:t===fD?e.main:e.reverse}function gD(e,t){var r;return"number"==typeof e?e:null!=(r=e[t])?r:0}const mD=Zj((([{deviation:e,fixedHeaderHeight:t,headerHeight:r,scrollTop:n,viewportHeight:i}])=>{const o=Xj(),a=Kj(0),s=Kj(0),l=Kj(0),c=qj(Hj(Jj(ek(n),ek(i),ek(r),ek(o,Ik),ek(l),ek(a),ek(t),ek(e),ek(s)),Lj((([e,t,r,[n,i],o,a,s,l,c])=>{const d=e-l,u=a+s,f=Math.max(r-d,0);let h=hD;const p=gD(c,uD),g=gD(c,fD);return n-=l,i+=r+s,(n+=r+s)>e+u-p&&(h=sD),(i-=l)<e-f+t+g&&(h=lD),h!==hD?[Math.max(d-r-pD(o,uD,h)-p,0),d-f-s+t+pD(o,fD,h)+g]:null})),Pj((e=>null!=e)),zj(Ik)),[0,0]);return{increaseViewportBy:s,listBoundary:o,overscan:l,topListHeight:a,visibleRange:c}}),Ej(dk),{singleton:!0});const bD={bottom:0,firstItemIndex:0,items:[],offsetBottom:0,offsetTop:0,top:0,topItems:[],topListHeight:0,totalCount:0};function vD(e,t,r,n,i,o){const{lastIndex:a,lastOffset:s,lastSize:l}=i;let c=0,d=0;if(e.length>0){c=e[0].offset;const t=e[e.length-1];d=t.offset+t.size}const u=r-a,f=c,h=s+u*l+(u-1)*n-d;return{bottom:d,firstItemIndex:o,items:xD(e,i,o),offsetBottom:h,offsetTop:c,top:f,topItems:xD(t,i,o),topListHeight:t.reduce(((e,t)=>t.size+e),0),totalCount:r}}function yD(e,t,r,n,i,o){let a=0;if(r.groupIndices.length>0)for(const t of r.groupIndices){if(t-a>=e)break;a++}const s=e+a,l=iD(t,s);return vD(Array.from({length:s}).map(((e,t)=>({data:o[t+l],index:t+l,offset:0,size:0}))),[],s,i,r,n)}function xD(e,t,r){if(0===e.length)return[];if(!Rk(t))return e.map((e=>({...e,index:e.index+r,originalIndex:e.index})));const n=e[0].index,i=e[e.length-1].index,o=[],a=vk(t.groupOffsetTree,n,i);let s,l=0;for(const n of e){let e;(!s||s.end<n.index)&&(s=a.shift(),l=t.groupIndices.indexOf(s.start)),e=n.index===s.start?{index:l,type:"group"}:{groupIndex:l,index:n.index-(l+1)+r},o.push({...e,data:n.data,offset:n.offset,originalIndex:n.index,size:n.size})}return o}const wD=Zj((([{data:e,firstItemIndex:t,gap:r,sizes:n,totalCount:i},o,{listBoundary:a,topListHeight:s,visibleRange:l},{initialTopMostItemIndex:c,scrolledToInitialItem:d},{topListHeight:u},f,{didMount:h},{recalcInProgress:p}])=>{const g=Kj([]),m=Kj(0),b=Xj();Mj(o.topItemsIndexes,g);const v=qj(Hj(Jj(h,p,ek(l,Ik),ek(i),ek(n),ek(c),d,ek(g),ek(t),ek(r),e),Pj((([e,t,,r,,,,,,,n])=>{const i=n&&n.length!==r;return e&&!t&&!i})),Lj((([,,[e,t],r,n,i,o,a,s,l,c])=>{const d=n,{offsetTree:u,sizeTree:f}=d,h=_j(m);if(0===r)return{...bD,totalCount:r};if(0===e&&0===t)return 0===h?{...bD,totalCount:r}:yD(h,i,n,s,l,c||[]);if(hk(f))return h>0?null:vD(function(e,t,r){if(Rk(t)){const n=Nk(e,t);return[{index:gk(t.groupOffsetTree,n)[0],offset:0,size:0},{data:null==r?void 0:r[0],index:n,offset:0,size:0}]}return[{data:null==r?void 0:r[0],index:e,offset:0,size:0}]}(iD(i,r),d,c),[],r,l,d,s);const p=[];if(a.length>0){const e=a[0],t=a[a.length-1];let r=0;for(const n of vk(f,e,t)){const i=n.value,o=Math.max(n.start,e),a=Math.min(n.end,t);for(let e=o;e<=a;e++)p.push({data:null==c?void 0:c[e],index:e,offset:r,size:i}),r+=i}}if(!o)return vD([],p,r,l,d,s);const g=a.length>0?a[a.length-1]+1:0,b=Wk(u,e,t,g);if(0===b.length)return null;const v=r-1;return vD(Dj([],(r=>{for(const n of b){const i=n.value;let o=i.offset,a=n.start;const s=i.size;if(i.offset<e){a+=Math.floor((e-i.offset+l)/(s+l));const t=a-n.start;o+=t*s+t*l}a<g&&(o+=(g-a)*s,a=g);const d=Math.min(n.end,v);for(let e=a;e<=d&&!(o>=t);e++)r.push({data:null==c?void 0:c[e],index:e,offset:o,size:s}),o+=s+l}})),p,r,l,d,s)})),Pj((e=>null!==e)),zj()),bD);Mj(Hj(e,Pj(jj),Lj((e=>null==e?void 0:e.length))),i),Mj(Hj(v,Lj((e=>e.topListHeight))),u),Mj(u,s),Mj(Hj(v,Lj((e=>[e.top,e.bottom]))),a),Mj(Hj(v,Lj((e=>e.items))),b);const y=Gj(Hj(v,Pj((({items:e})=>e.length>0)),Uj(i,e),Pj((([{items:e},t])=>e[e.length-1].originalIndex===t-1)),Lj((([,e,t])=>[e-1,t])),zj(Ik),Lj((([e])=>e)))),x=Gj(Hj(v,Yj(200),Pj((({items:e,topItems:t})=>e.length>0&&e[0].originalIndex===t.length)),Lj((({items:e})=>e[0].index)),zj())),w=Gj(Hj(v,Pj((({items:e})=>e.length>0)),Lj((({items:e})=>{let t=0,r=e.length-1;for(;"group"===e[t].type&&t<r;)t++;for(;"group"===e[r].type&&r>t;)r--;return{endIndex:e[r].index,startIndex:e[t].index}})),zj(Fk)));return{endReached:y,initialItemCount:m,itemsRendered:b,listState:v,rangeChanged:w,startReached:x,topItemsIndexes:g,...f}}),Ej(Gk,Qk,mD,oD,rD,dD,Jk,_k),{singleton:!0}),$D=Zj((([{fixedFooterHeight:e,fixedHeaderHeight:t,footerHeight:r,headerHeight:n},{listState:i}])=>{const o=Xj(),a=qj(Hj(Jj(r,e,n,t,i),Lj((([e,t,r,n,i])=>e+t+r+n+i.offsetBottom+i.bottom))),0);return Mj(ek(a),o),{totalListHeight:a,totalListHeightChanged:o}}),Ej(dk,wD),{singleton:!0}),CD=Zj((([{viewportHeight:e},{totalListHeight:t}])=>{const r=Kj(!1),n=qj(Hj(Jj(r,e,t),Pj((([e])=>e)),Lj((([,e,t])=>Math.max(0,e-t))),Yj(0),zj()),0);return{alignToBottom:r,paddingTopAddition:n}}),Ej(dk,$D),{singleton:!0});function SD(e){return!!e&&("smooth"===e?"smooth":"auto")}const jD=Zj((([{listRefresh:e,totalCount:t},{atBottomState:r,isAtBottom:n},{scrollToIndex:i},{scrolledToInitialItem:o},{didMount:a,propsReady:s},{log:l},{scrollingInProgress:c}])=>{const d=Kj(!1),u=Xj();let f=null;function h(e){Fj(i,{align:"end",behavior:e,index:"LAST"})}function p(e){const t=Aj(r,(t=>{e&&!t.atBottom&&"SIZE_INCREASED"===t.notAtBottomBecause&&!f&&(_j(l)("scrolling to bottom due to increased size",{},rk.DEBUG),h("auto"))}));setTimeout(t,100)}return Oj(Hj(Jj(Hj(ek(t),Vj(1)),a),Uj(ek(d),n,o,c),Lj((([[e,t],r,n,i,o])=>{let a=t&&i,s="auto";return a&&(s=((e,t)=>"function"==typeof e?SD(e(t)):t&&SD(e))(r,n||o),a=a&&!!s),{followOutputBehavior:s,shouldFollow:a,totalCount:e}})),Pj((({shouldFollow:e})=>e))),(({followOutputBehavior:t,totalCount:r})=>{f&&(f(),f=null),f=Aj(e,(()=>{_j(l)("following output to ",{totalCount:r},rk.DEBUG),h(t),f=null}))})),Oj(Hj(Jj(ek(d),t,s),Pj((([e,,t])=>e&&t)),Wj((({value:e},[,t])=>({refreshed:e===t,value:t})),{refreshed:!1,value:0}),Pj((({refreshed:e})=>e)),Uj(d,t)),(([,e])=>{_j(o)&&p(!1!==e)})),Oj(u,(()=>{p(!1!==_j(d))})),Oj(Jj(ek(d),r),(([e,t])=>{e&&!t.atBottom&&"VIEWPORT_HEIGHT_DECREASING"===t.notAtBottomBecause&&h("auto")})),{autoscrollToBottom:u,followOutput:d}}),Ej(Gk,dD,rD,oD,Jk,ik,dk)),kD=Zj((([{data:e,firstItemIndex:t,gap:r,sizes:n},{initialTopMostItemIndex:i},{initialItemCount:o,listState:a},{didMount:s}])=>(Mj(Hj(s,Uj(o),Pj((([,e])=>0!==e)),Uj(i,n,t,r,e),Lj((([[,e],t,r,n,i,o=[]])=>yD(e,t,r,n,i,o)))),a),{})),Ej(Gk,oD,wD,Jk),{singleton:!0}),DD=Zj((([{didMount:e},{scrollTo:t},{listState:r}])=>{const n=Kj(0);return Oj(Hj(e,Uj(n),Pj((([,e])=>0!==e)),Lj((([,e])=>({top:e})))),(e=>{Aj(Hj(r,Vj(1),Pj((e=>e.items.length>1))),(()=>{requestAnimationFrame((()=>{Fj(t,e)}))}))})),{initialScrollTop:n}}),Ej(Jk,dk,wD),{singleton:!0}),TD=({itemBottom:e,itemTop:t,locationParams:{align:r,behavior:n,...i},viewportBottom:o,viewportTop:a})=>t<a?{...i,align:null!=r?r:"start",behavior:n}:e>o?{...i,align:null!=r?r:"end",behavior:n}:null,ED=Zj((([{gap:e,sizes:t,totalCount:r},{fixedFooterHeight:n,fixedHeaderHeight:i,headerHeight:o,scrollingInProgress:a,scrollTop:s,viewportHeight:l},{scrollToIndex:c}])=>{const d=Xj();return Mj(Hj(d,Uj(t,l,r,o,i,n,s),Uj(e),Lj((([[e,t,r,n,i,o,s,l],c])=>{const{align:d,behavior:u,calculateViewLocation:f=TD,done:h,...p}=e,g=Hk(e,t,n-1),m=Lk(g,t.offsetTree,c)+i+o,b=f({itemBottom:m+gk(t.sizeTree,g)[1],itemTop:m,locationParams:{align:d,behavior:u,...p},viewportBottom:l+r-s,viewportTop:l+o});return b?h&&Aj(Hj(a,Pj((e=>!e)),Vj(_j(a)?1:2)),h):h&&h(),b})),Pj((e=>null!==e))),c),{scrollIntoView:d}}),Ej(Gk,dk,rD,wD,ik),{singleton:!0}),OD=Zj((([{scrollVelocity:e}])=>{const t=Kj(!1),r=Xj(),n=Kj(!1);return Mj(Hj(e,Uj(n,t,r),Pj((([e,t])=>!!t)),Lj((([e,t,r,n])=>{const{enter:i,exit:o}=t;if(r){if(o(e,n))return!1}else if(i(e,n))return!0;return r})),zj()),t),Oj(Hj(Jj(t,e,r),Uj(n)),(([[e,t,r],n])=>{e&&n&&n.change&&n.change(t,r)})),{isSeeking:t,scrollSeekConfiguration:n,scrollSeekRangeChanged:r,scrollVelocity:e}}),Ej(dD),{singleton:!0}),FD=Zj((([{scrollContainerState:e,scrollTo:t}])=>{const r=Xj(),n=Xj(),i=Xj(),o=Kj(!1),a=Kj(void 0);return Mj(Hj(Jj(r,n),Lj((([{scrollHeight:e,scrollTop:t,viewportHeight:r},{offsetTop:n}])=>({scrollHeight:e,scrollTop:Math.max(0,t-n),viewportHeight:r})))),e),Mj(Hj(t,Uj(n),Lj((([e,{offsetTop:t}])=>({...e,top:e.top+t})))),i),{customScrollParent:a,useWindowScroll:o,windowScrollContainerState:r,windowScrollTo:i,windowViewportRect:n}}),Ej(dk)),ID=Zj((([{sizeRanges:e,sizes:t},{headerHeight:r,scrollTop:n},{initialTopMostItemIndex:i},{didMount:o},{useWindowScroll:a,windowScrollContainerState:s,windowViewportRect:l}])=>{const c=Xj(),d=Kj(void 0),u=Kj(null),f=Kj(null);return Mj(s,u),Mj(l,f),Oj(Hj(c,Uj(t,n,a,u,f,r)),(([e,t,r,n,i,o,a])=>{const s=function(e){return xk(e).map((({k:e,v:t},r,n)=>{const i=n[r+1];return{endIndex:i?i.k-1:1/0,size:t,startIndex:e}}))}(t.sizeTree);n&&null!==i&&null!==o&&(r=i.scrollTop-o.offsetTop),e({ranges:s,scrollTop:r-=a})})),Mj(Hj(d,Pj(jj),Lj(_D)),i),Mj(Hj(o,Uj(d),Pj((([,e])=>void 0!==e)),zj(),Lj((([,e])=>e.ranges))),e),{getState:c,restoreStateFrom:d}}),Ej(Gk,dk,oD,Jk,FD));function _D(e){return{align:"start",index:0,offset:e.scrollTop}}const MD=Zj((([{topItemsIndexes:e}])=>{const t=Kj(0);return Mj(Hj(t,Pj((e=>e>=0)),Lj((e=>Array.from({length:e}).map(((e,t)=>t))))),e),{topItemCount:t}}),Ej(wD));function AD(e){let t,r=!1;return()=>(r||(r=!0,t=e()),t)}const BD=AD((()=>/iP(ad|od|hone)/i.test(navigator.userAgent)&&/WebKit/i.test(navigator.userAgent))),RD=Zj((([{deviation:e,scrollBy:t,scrollingInProgress:r,scrollTop:n},{isAtBottom:i,isScrolling:o,lastJumpDueToItemResize:a,scrollDirection:s},{listState:l},{beforeUnshiftWith:c,gap:d,shiftWithOffset:u,sizes:f},{log:h},{recalcInProgress:p}])=>{const g=Gj(Hj(l,Uj(a),Wj((([,e,t,r],[{bottom:n,items:i,offsetBottom:o,totalCount:a},s])=>{const l=n+o;let c=0;return t===a&&e.length>0&&i.length>0&&(0===i[0].originalIndex&&0===e[0].originalIndex||(c=l-r,0!==c&&(c+=s))),[c,i,a,l]}),[0,[],0,0]),Pj((([e])=>0!==e)),Uj(n,s,r,i,h,p),Pj((([,e,t,r,,,n])=>!n&&!r&&0!==e&&t===sD)),Lj((([[e],,,,,t])=>(t("Upward scrolling compensation",{amount:e},rk.DEBUG),e)))));function m(r){r>0?(Fj(t,{behavior:"auto",top:-r}),Fj(e,0)):(Fj(e,0),Fj(t,{behavior:"auto",top:-r}))}return Oj(Hj(g,Uj(e,o)),(([t,r,n])=>{n&&BD()?Fj(e,r-t):m(-t)})),Oj(Hj(Jj(qj(o,!1),e,p),Pj((([e,t,r])=>!e&&!r&&0!==t)),Lj((([e,t])=>t)),Yj(1)),m),Mj(Hj(u,Lj((e=>({top:-e})))),t),Oj(Hj(c,Uj(f,d),Lj((([e,{groupIndices:t,lastSize:r,sizeTree:n},i])=>{function o(e){return e*(r+i)}if(0===t.length)return o(e);{let r=0;const i=pk(n,0);let a=0,s=0;for(;a<e;){a++,r+=i;let n=t.length===s+1?1/0:t[s+1]-t[s]-1;a+n>e&&(r-=i,n=e-a+1),a+=n,r+=o(n),s++}return r}}))),(r=>{Fj(e,r),requestAnimationFrame((()=>{Fj(t,{top:r}),requestAnimationFrame((()=>{Fj(e,0),Fj(p,!1)}))}))})),{deviation:e}}),Ej(dk,dD,wD,Gk,ik,_k)),zD=Zj((([e,t,r,n,i,o,a,s,l,c])=>({...e,...t,...r,...n,...i,...o,...a,...s,...l,...c})),Ej(mD,kD,Jk,OD,$D,DD,CD,FD,ED,ik)),PD=Zj((([{data:e,defaultItemSize:t,firstItemIndex:r,fixedItemSize:n,gap:i,groupIndices:o,itemSize:a,sizeRanges:s,sizes:l,statefulTotalCount:c,totalCount:d,trackItemSizes:u},{initialItemFinalLocationReached:f,initialTopMostItemIndex:h,scrolledToInitialItem:p},g,m,b,{listState:v,topItemsIndexes:y,...x},{scrollToIndex:w},$,{topItemCount:C},{groupCounts:S},j])=>(Mj(x.rangeChanged,j.scrollSeekRangeChanged),Mj(Hj(j.windowViewportRect,Lj((e=>e.visibleHeight))),g.viewportHeight),{data:e,defaultItemHeight:t,firstItemIndex:r,fixedItemHeight:n,gap:i,groupCounts:S,initialItemFinalLocationReached:f,initialTopMostItemIndex:h,scrolledToInitialItem:p,sizeRanges:s,topItemCount:C,topItemsIndexes:y,totalCount:d,...b,groupIndices:o,itemSize:a,listState:v,scrollToIndex:w,statefulTotalCount:c,trackItemSizes:u,...x,...j,...g,sizes:l,...m})),Ej(Gk,oD,dk,ID,jD,wD,rD,RD,MD,Qk,zD));function LD(e,t){const r={},n={};let i=0;const o=e.length;for(;i<o;)n[e[i]]=1,i+=1;for(const e in t)Object.hasOwn(n,e)||(r[e]=t[e]);return r}const ND=typeof document<"u"?Y.default.useLayoutEffect:Y.default.useEffect;function HD(t,r,n){const i=Object.keys(r.required||{}),o=Object.keys(r.optional||{}),a=Object.keys(r.methods||{}),s=Object.keys(r.events||{}),l=Y.default.createContext({});function c(e,t){e.propsReady&&Fj(e.propsReady,!1);for(const n of i){Fj(e[r.required[n]],t[n])}for(const n of o)if(n in t){Fj(e[r.optional[n]],t[n])}e.propsReady&&Fj(e.propsReady,!0)}function d(e){return s.reduce(((t,n)=>(t[n]=function(e){let t,r;const n=()=>null==t?void 0:t();return function(i,o){switch(i){case 1:return o?r===o?void 0:(n(),r=o,t=Oj(e,o),t):(n(),kj);case 2:return n(),void(r=null)}}}(e[r.events[n]]),t)),{})}const u=Y.default.forwardRef(((u,f)=>{const{children:h,...p}=u,[g]=Y.default.useState((()=>Dj(function(e){const t=new Map,r=({constructor:e,dependencies:n,id:i,singleton:o})=>{if(o&&t.has(i))return t.get(i);const a=e(n.map((e=>r(e))));return o&&t.set(i,a),a};return r(e)}(t),(e=>{c(e,p)})))),[m]=Y.default.useState(Cj(d,g));ND((()=>{for(const e of s)e in p&&Oj(m[e],p[e]);return()=>{Object.values(m).map(Ij)}}),[p,m,g]),ND((()=>{c(g,p)})),Y.default.useImperativeHandle(f,xj(function(e){return a.reduce(((t,n)=>(t[n]=t=>{Fj(e[r.methods[n]],t)},t)),{})}(g)));const b=n;return e.jsx(l.Provider,{value:g,children:n?e.jsx(b,{...LD([...i,...o,...s],p),children:h}):h})})),f=Y.default.version.startsWith("18")?e=>{const t=Y.default.useContext(l)[e],r=Y.default.useCallback((e=>Oj(t,e)),[t]);return Y.default.useSyncExternalStore(r,(()=>_j(t)),(()=>_j(t)))}:e=>{const t=Y.default.useContext(l)[e],[r,n]=Y.default.useState(Cj(_j,t));return ND((()=>Oj(t,(e=>{e!==r&&n(xj(e))}))),[t,r]),r};return{Component:u,useEmitter:(e,t)=>{const r=Y.default.useContext(l)[e];ND((()=>Oj(r,t)),[t,r])},useEmitterValue:f,usePublisher:e=>Y.default.useCallback(Sj(Fj,Y.default.useContext(l)[e]),[e])}}const WD=Y.default.createContext(void 0),VD=Y.default.createContext(void 0),YD=typeof document<"u"?Y.default.useLayoutEffect:Y.default.useEffect;function UD(e,t,r,n=kj,i,o){const a=Y.default.useRef(null),s=Y.default.useRef(null),l=Y.default.useRef(null),c=Y.default.useCallback((r=>{const n=r.target,i=n===window||n===document,a=o?i?window.pageXOffset||document.documentElement.scrollLeft:n.scrollLeft:i?window.pageYOffset||document.documentElement.scrollTop:n.scrollTop,c=o?i?document.documentElement.scrollWidth:n.scrollWidth:i?document.documentElement.scrollHeight:n.scrollHeight,d=o?i?window.innerWidth:n.offsetWidth:i?window.innerHeight:n.offsetHeight,u=()=>{e({scrollHeight:c,scrollTop:Math.max(a,0),viewportHeight:d})};r.suppressFlushSync?u():U.default.flushSync(u),null!==s.current&&(a===s.current||a<=0||a===c-d)&&(s.current=null,t(!0),l.current&&(clearTimeout(l.current),l.current=null))}),[e,t]);return Y.default.useEffect((()=>{const e=i||a.current;return n(i||a.current),c({suppressFlushSync:!0,target:e}),e.addEventListener("scroll",c,{passive:!0}),()=>{n(null),e.removeEventListener("scroll",c)}}),[a,c,r,n,i]),{scrollByCallback:function(e){o&&(e={behavior:e.behavior,left:e.top}),a.current.scrollBy(e)},scrollerRef:a,scrollToCallback:function(r){const n=a.current;if(!n||(o?"offsetWidth"in n&&0===n.offsetWidth:"offsetHeight"in n&&0===n.offsetHeight))return;const i="smooth"===r.behavior;let c,d,u;n===window?(d=Math.max(Bk(document.documentElement,o?"width":"height"),o?document.documentElement.scrollWidth:document.documentElement.scrollHeight),c=o?window.innerWidth:window.innerHeight,u=o?document.documentElement.scrollLeft:document.documentElement.scrollTop):(d=n[o?"scrollWidth":"scrollHeight"],c=Bk(n,o?"width":"height"),u=n[o?"scrollLeft":"scrollTop"]);const f=d-c;if(r.top=Math.ceil(Math.max(Math.min(f,r.top),0)),aD(c,d)||r.top===u)return e({scrollHeight:d,scrollTop:u,viewportHeight:c}),void(i&&t(!0));i?(s.current=r.top,l.current&&clearTimeout(l.current),l.current=setTimeout((()=>{l.current=null,s.current=null,t(!0)}),1e3)):s.current=null,o&&(r={behavior:r.behavior,left:r.top}),n.scrollTo(r)}}}const KD="-webkit-sticky",qD="sticky",XD=AD((()=>{if(typeof document>"u")return qD;const e=document.createElement("div");return e.style.position=KD,e.style.position===KD?KD:qD}));function GD(e){return e}const ZD=Zj((()=>{const e=Kj((e=>`Item ${e}`)),t=Kj(null),r=Kj((e=>`Group ${e}`)),n=Kj({}),i=Kj(GD),o=Kj("div"),a=Kj(kj),s=(e,t=null)=>qj(Hj(n,Lj((t=>t[e])),zj()),t);return{components:n,computeItemKey:i,context:t,EmptyPlaceholder:s("EmptyPlaceholder"),FooterComponent:s("Footer"),GroupComponent:s("Group","div"),groupContent:r,HeaderComponent:s("Header"),HeaderFooterTag:o,ItemComponent:s("Item","div"),itemContent:e,ListComponent:s("List","div"),ScrollerComponent:s("Scroller","div"),scrollerRef:a,ScrollSeekPlaceholder:s("ScrollSeekPlaceholder"),TopItemListComponent:s("TopItemList")}})),QD=Zj((([e,t])=>({...e,...t})),Ej(PD,ZD)),JD=({height:t})=>e.jsx("div",{style:{height:t}}),eT={overflowAnchor:"none",position:XD(),zIndex:1},tT={overflowAnchor:"none"},rT={...tT,display:"inline-block",height:"100%"},nT=Y.default.memo((function({showTopList:r=!1}){const n=xT("listState"),i=wT("sizeRanges"),o=xT("useWindowScroll"),a=xT("customScrollParent"),s=wT("windowScrollContainerState"),l=wT("scrollContainerState"),c=a||o?s:l,d=xT("itemContent"),u=xT("context"),f=xT("groupContent"),h=xT("trackItemSizes"),p=xT("itemSize"),g=xT("log"),m=wT("gap"),b=xT("horizontalDirection"),{callbackRef:v}=sk(i,p,h,r?kj:c,g,m,a,b,xT("skipAnimationFrameInResizeObserver")),[y,x]=Y.default.useState(0);yT("deviation",(e=>{y!==e&&x(e)}));const w=xT("EmptyPlaceholder"),$=xT("ScrollSeekPlaceholder")||JD,C=xT("ListComponent"),S=xT("ItemComponent"),j=xT("GroupComponent"),k=xT("computeItemKey"),D=xT("isSeeking"),T=xT("groupIndices").length>0,E=xT("alignToBottom"),O=xT("initialItemFinalLocationReached"),F=r?{}:{boxSizing:"border-box",...b?{display:"inline-block",height:"100%",marginLeft:0!==y?y:E?"auto":0,paddingLeft:n.offsetTop,paddingRight:n.offsetBottom,whiteSpace:"nowrap"}:{marginTop:0!==y?y:E?"auto":0,paddingBottom:n.offsetBottom,paddingTop:n.offsetTop},...O?{}:{visibility:"hidden"}};return!r&&0===n.totalCount&&w?e.jsx(w,{...lT(w,u)}):e.jsx(C,{...lT(C,u),"data-testid":r?"virtuoso-top-item-list":"virtuoso-item-list",ref:v,style:F,children:(r?n.topItems:n.items).map((e=>{const r=e.originalIndex,i=k(r+n.firstItemIndex,e.data,u);return D?t.createElement($,{...lT($,u),height:e.size,index:e.index,key:i,type:e.type||"item",..."group"===e.type?{}:{groupIndex:e.groupIndex}}):"group"===e.type?t.createElement(j,{...lT(j,u),"data-index":r,"data-item-index":e.index,"data-known-size":e.size,key:i,style:eT},f(e.index,u)):t.createElement(S,{...lT(S,u),...cT(S,e.data),"data-index":r,"data-item-group-index":e.groupIndex,"data-item-index":e.index,"data-known-size":e.size,key:i,style:b?rT:tT},T?d(e.index,e.groupIndex,e.data,u):d(e.index,e.data,u))}))})})),iT={height:"100%",outline:"none",overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},oT={outline:"none",overflowX:"auto",position:"relative"},aT=e=>({height:"100%",position:"absolute",top:0,width:"100%",...e?{display:"flex",flexDirection:"column"}:{}}),sT={position:XD(),top:0,width:"100%",zIndex:1};function lT(e,t){if("string"!=typeof e)return{context:t}}function cT(e,t){return{item:"string"==typeof e?void 0:t}}const dT=Y.default.memo((function(){const t=xT("HeaderComponent"),r=wT("headerHeight"),n=xT("HeaderFooterTag"),i=ok(Y.default.useMemo((()=>e=>{r(Bk(e,"height"))}),[r]),!0,xT("skipAnimationFrameInResizeObserver")),o=xT("context");return t?e.jsx(n,{ref:i,children:e.jsx(t,{...lT(t,o)})}):null})),uT=Y.default.memo((function(){const t=xT("FooterComponent"),r=wT("footerHeight"),n=xT("HeaderFooterTag"),i=ok(Y.default.useMemo((()=>e=>{r(Bk(e,"height"))}),[r]),!0,xT("skipAnimationFrameInResizeObserver")),o=xT("context");return t?e.jsx(n,{ref:i,children:e.jsx(t,{...lT(t,o)})}):null}));function fT({useEmitter:t,useEmitterValue:r,usePublisher:n}){return Y.default.memo((function({children:i,style:o,...a}){const s=n("scrollContainerState"),l=r("ScrollerComponent"),c=n("smoothScrollTargetReached"),d=r("scrollerRef"),u=r("context"),f=r("horizontalDirection")||!1,{scrollByCallback:h,scrollerRef:p,scrollToCallback:g}=UD(s,c,l,d,void 0,f);return t("scrollTo",g),t("scrollBy",h),e.jsx(l,{"data-testid":"virtuoso-scroller","data-virtuoso-scroller":!0,ref:p,style:{...f?oT:iT,...o},tabIndex:0,...a,...lT(l,u),children:i})}))}function hT({useEmitter:t,useEmitterValue:r,usePublisher:n}){return Y.default.memo((function({children:i,style:o,...a}){const s=n("windowScrollContainerState"),l=r("ScrollerComponent"),c=n("smoothScrollTargetReached"),d=r("totalListHeight"),u=r("deviation"),f=r("customScrollParent"),h=r("context"),{scrollByCallback:p,scrollerRef:g,scrollToCallback:m}=UD(s,c,l,kj,f);return YD((()=>(g.current=f||window,()=>{g.current=null})),[g,f]),t("windowScrollTo",m),t("scrollBy",p),e.jsx(l,{"data-virtuoso-scroller":!0,style:{position:"relative",...o,...0!==d?{height:d+u}:{}},...a,...lT(l,h),children:i})}))}const pT=({children:t})=>{const r=Y.default.useContext(WD),n=wT("viewportHeight"),i=wT("fixedItemHeight"),o=xT("alignToBottom"),a=xT("horizontalDirection"),s=ok(Y.default.useMemo((()=>$j(n,(e=>Bk(e,a?"width":"height")))),[n,a]),!0,xT("skipAnimationFrameInResizeObserver"));return Y.default.useEffect((()=>{r&&(n(r.viewportHeight),i(r.itemHeight))}),[r,n,i]),e.jsx("div",{"data-viewport-type":"element",ref:s,style:aT(o),children:t})},gT=({children:t})=>{const r=Y.default.useContext(WD),n=wT("windowViewportRect"),i=wT("fixedItemHeight"),o=xT("customScrollParent"),a=ck(n,o,xT("skipAnimationFrameInResizeObserver")),s=xT("alignToBottom");return Y.default.useEffect((()=>{r&&(i(r.itemHeight),n({offsetTop:0,visibleHeight:r.viewportHeight,visibleWidth:100}))}),[r,n,i]),e.jsx("div",{"data-viewport-type":"window",ref:a,style:aT(s),children:t})},mT=({children:t})=>{const r=xT("TopItemListComponent")||"div",n=xT("headerHeight"),i={...sT,marginTop:`${n}px`},o=xT("context");return e.jsx(r,{style:i,...lT(r,o),children:t})},bT=Y.default.memo((function(t){const r=xT("useWindowScroll"),n=xT("topItemsIndexes").length>0,i=xT("customScrollParent"),o=xT("context"),a=i||r?CT:$T,s=i||r?gT:pT;return e.jsxs(a,{...t,...lT(a,o),children:[n&&e.jsx(mT,{children:e.jsx(nT,{showTopList:!0})}),e.jsxs(s,{children:[e.jsx(dT,{}),e.jsx(nT,{}),e.jsx(uT,{})]})]})})),{Component:vT,useEmitter:yT,useEmitterValue:xT,usePublisher:wT}=HD(QD,{events:{atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",endReached:"endReached",groupIndices:"groupIndices",isScrolling:"isScrolling",itemsRendered:"itemsRendered",rangeChanged:"rangeChanged",startReached:"startReached",totalListHeightChanged:"totalListHeightChanged"},methods:{autoscrollToBottom:"autoscrollToBottom",getState:"getState",scrollBy:"scrollBy",scrollIntoView:"scrollIntoView",scrollTo:"scrollTo",scrollToIndex:"scrollToIndex"},optional:{alignToBottom:"alignToBottom",atBottomThreshold:"atBottomThreshold",atTopThreshold:"atTopThreshold",components:"components",computeItemKey:"computeItemKey",context:"context",customScrollParent:"customScrollParent",data:"data",defaultItemHeight:"defaultItemHeight",firstItemIndex:"firstItemIndex",fixedItemHeight:"fixedItemHeight",followOutput:"followOutput",groupContent:"groupContent",groupCounts:"groupCounts",headerFooterTag:"HeaderFooterTag",horizontalDirection:"horizontalDirection",increaseViewportBy:"increaseViewportBy",initialItemCount:"initialItemCount",initialScrollTop:"initialScrollTop",initialTopMostItemIndex:"initialTopMostItemIndex",itemContent:"itemContent",itemSize:"itemSize",logLevel:"logLevel",overscan:"overscan",restoreStateFrom:"restoreStateFrom",scrollerRef:"scrollerRef",scrollSeekConfiguration:"scrollSeekConfiguration",skipAnimationFrameInResizeObserver:"skipAnimationFrameInResizeObserver",topItemCount:"topItemCount",totalCount:"totalCount",useWindowScroll:"useWindowScroll"},required:{}},bT),$T=fT({useEmitter:yT,useEmitterValue:xT,usePublisher:wT}),CT=hT({useEmitter:yT,useEmitterValue:xT,usePublisher:wT}),ST=vT,jT={bottom:0,itemHeight:0,items:[],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},kT={bottom:0,itemHeight:0,items:[{index:0}],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},{ceil:DT,floor:TT,max:ET,min:OT,round:FT}=Math;function IT(e,t,r){return Array.from({length:t-e+1}).map(((t,n)=>({data:null===r?null:r[n+e],index:n+e})))}function _T(e,t){return e&&e.width===t.width&&e.height===t.height}function MT(e,t){return e&&e.column===t.column&&e.row===t.row}const AT=Zj((([{increaseViewportBy:e,listBoundary:t,overscan:r,visibleRange:n},{footerHeight:i,headerHeight:o,scrollBy:a,scrollContainerState:s,scrollTo:l,scrollTop:c,smoothScrollTargetReached:d,viewportHeight:u},f,h,{didMount:p,propsReady:g},{customScrollParent:m,useWindowScroll:b,windowScrollContainerState:v,windowScrollTo:y,windowViewportRect:x},w])=>{const $=Kj(0),C=Kj(0),S=Kj(jT),j=Kj({height:0,width:0}),k=Kj({height:0,width:0}),D=Xj(),T=Xj(),E=Kj(0),O=Kj(null),F=Kj({column:0,row:0}),I=Xj(),_=Xj(),M=Kj(!1),A=Kj(0),B=Kj(!0),R=Kj(!1),z=Kj(!1);Oj(Hj(p,Uj(A),Pj((([e,t])=>!!t))),(()=>{Fj(B,!1)})),Oj(Hj(Jj(p,B,k,j,A,R),Pj((([e,t,r,n,,i])=>e&&!t&&0!==r.height&&0!==n.height&&!i))),(([,,,,e])=>{Fj(R,!0),nD(1,(()=>{Fj(D,e)})),Aj(Hj(c),(()=>{Fj(t,[0,0]),Fj(B,!0)}))})),Mj(Hj(_,Pj((e=>null!=e&&e.scrollTop>0)),Nj(0)),C),Oj(Hj(p,Uj(_),Pj((([,e])=>null!=e))),(([,e])=>{e&&(Fj(j,e.viewport),Fj(k,e.item),Fj(F,e.gap),e.scrollTop>0&&(Fj(M,!0),Aj(Hj(c,Vj(1)),(e=>{Fj(M,!1)})),Fj(l,{top:e.scrollTop})))})),Mj(Hj(j,Lj((({height:e})=>e))),u),Mj(Hj(Jj(ek(j,_T),ek(k,_T),ek(F,((e,t)=>e&&e.column===t.column&&e.row===t.row)),ek(c)),Lj((([e,t,r,n])=>({gap:r,item:t,scrollTop:n,viewport:e})))),I),Mj(Hj(Jj(ek($),n,ek(F,MT),ek(k,_T),ek(j,_T),ek(O),ek(C),ek(M),ek(B),ek(A)),Pj((([,,,,,,,e])=>!e)),Lj((([e,[t,r],n,i,o,a,s,,l,c])=>{const{column:d,row:u}=n,{height:f,width:h}=i,{width:p}=o;if(0===s&&(0===e||0===p))return jT;if(0===h){const t=iD(c,e);return function(e){return{...kT,items:e}}(IT(t,t+Math.max(s-1,0),a))}const g=BT(p,h,d);let m,b;l?0===t&&0===r&&s>0?(m=0,b=s-1):(m=g*TT((t+u)/(f+u)),b=g*DT((r+u)/(f+u))-1,b=OT(e-1,ET(b,g-1)),m=OT(b,ET(0,m))):(m=0,b=-1);const v=IT(m,b,a),{bottom:y,top:x}=RT(o,n,i,v),w=DT(e/g);return{bottom:y,itemHeight:f,items:v,itemWidth:h,offsetBottom:w*f+(w-1)*u-y,offsetTop:x,top:x}}))),S),Mj(Hj(O,Pj((e=>null!==e)),Lj((e=>e.length))),$),Mj(Hj(Jj(j,k,S,F),Pj((([e,t,{items:r}])=>r.length>0&&0!==t.height&&0!==e.height)),Lj((([e,t,{items:r},n])=>{const{bottom:i,top:o}=RT(e,n,t,r);return[o,i]})),zj(Ik)),t);const P=Kj(!1);Mj(Hj(c,Uj(P),Lj((([e,t])=>t||0!==e))),P);const L=Gj(Hj(Jj(S,$),Pj((([{items:e}])=>e.length>0)),Uj(P),Pj((([[e,t],r])=>{const n=e.items[e.items.length-1].index===t-1;return(r||e.bottom>0&&e.itemHeight>0&&0===e.offsetBottom&&e.items.length===t)&&n})),Lj((([[,e]])=>e-1)),zj())),N=Gj(Hj(ek(S),Pj((({items:e})=>e.length>0&&0===e[0].index)),Nj(0),zj())),H=Gj(Hj(ek(S),Uj(M),Pj((([{items:e},t])=>e.length>0&&!t)),Lj((([{items:e}])=>({endIndex:e[e.length-1].index,startIndex:e[0].index}))),zj(Fk),Yj(0)));Mj(H,h.scrollSeekRangeChanged),Mj(Hj(D,Uj(j,k,$,F),Lj((([e,t,r,n,i])=>{const o=tD(e),{align:a,behavior:s,offset:l}=o;let c=o.index;"LAST"===c&&(c=n-1),c=ET(0,c,OT(n-1,c));let d=zT(t,i,r,c);return"end"===a?d=FT(d-t.height+r.height):"center"===a&&(d=FT(d-t.height/2+r.height/2)),l&&(d+=l),{behavior:s,top:d}}))),l);const W=qj(Hj(S,Lj((e=>e.offsetBottom+e.bottom))),0);return Mj(Hj(x,Lj((e=>({height:e.visibleHeight,width:e.visibleWidth})))),j),{customScrollParent:m,data:O,deviation:E,footerHeight:i,gap:F,headerHeight:o,increaseViewportBy:e,initialItemCount:C,itemDimensions:k,overscan:r,restoreStateFrom:_,scrollBy:a,scrollContainerState:s,scrollHeight:T,scrollTo:l,scrollToIndex:D,scrollTop:c,smoothScrollTargetReached:d,totalCount:$,useWindowScroll:b,viewportDimensions:j,windowScrollContainerState:v,windowScrollTo:y,windowViewportRect:x,...h,gridState:S,horizontalDirection:z,initialTopMostItemIndex:A,totalListHeight:W,...f,endReached:L,propsReady:g,rangeChanged:H,startReached:N,stateChanged:I,stateRestoreInProgress:M,...w}}),Ej(mD,dk,dD,OD,Jk,FD,ik));function BT(e,t,r){return ET(1,TT((e+r)/(TT(t)+r)))}function RT(e,t,r,n){const{height:i}=r;if(void 0===i||0===n.length)return{bottom:0,top:0};const o=zT(e,t,r,n[0].index);return{bottom:zT(e,t,r,n[n.length-1].index)+i,top:o}}function zT(e,t,r,n){const i=BT(e.width,r.width,t.column),o=TT(n/i),a=o*r.height+ET(0,o-1)*t.row;return a>0?a+t.row:a}const PT=Zj((()=>{const e=Kj((e=>`Item ${e}`)),t=Kj({}),r=Kj(null),n=Kj("virtuoso-grid-item"),i=Kj("virtuoso-grid-list"),o=Kj(GD),a=Kj("div"),s=Kj(kj),l=(e,r=null)=>qj(Hj(t,Lj((t=>t[e])),zj()),r),c=Kj(!1),d=Kj(!1);return Mj(ek(d),c),{components:t,computeItemKey:o,context:r,FooterComponent:l("Footer"),HeaderComponent:l("Header"),headerFooterTag:a,itemClassName:n,ItemComponent:l("Item","div"),itemContent:e,listClassName:i,ListComponent:l("List","div"),readyStateChanged:c,reportReadyState:d,ScrollerComponent:l("Scroller","div"),scrollerRef:s,ScrollSeekPlaceholder:l("ScrollSeekPlaceholder","div")}})),LT=Zj((([e,t])=>({...e,...t})),Ej(AT,PT)),NT=Y.default.memo((function(){const r=XT("gridState"),n=XT("listClassName"),i=XT("itemClassName"),o=XT("itemContent"),a=XT("computeItemKey"),s=XT("isSeeking"),l=GT("scrollHeight"),c=XT("ItemComponent"),d=XT("ListComponent"),u=XT("ScrollSeekPlaceholder"),f=XT("context"),h=GT("itemDimensions"),p=GT("gap"),g=XT("log"),m=XT("stateRestoreInProgress"),b=GT("reportReadyState"),v=ok(Y.default.useMemo((()=>e=>{const t=e.parentElement.parentElement.scrollHeight;l(t);const r=e.firstChild;if(r){const{height:e,width:t}=r.getBoundingClientRect();h({height:e,width:t})}p({column:JT("column-gap",getComputedStyle(e).columnGap,g),row:JT("row-gap",getComputedStyle(e).rowGap,g)})}),[l,h,p,g]),!0,!1);return YD((()=>{r.itemHeight>0&&r.itemWidth>0&&b(!0)}),[r]),m?null:e.jsx(d,{className:n,ref:v,...lT(d,f),"data-testid":"virtuoso-item-list",style:{paddingBottom:r.offsetBottom,paddingTop:r.offsetTop},children:r.items.map((n=>{const l=a(n.index,n.data,f);return s?e.jsx(u,{...lT(u,f),height:r.itemHeight,index:n.index,width:r.itemWidth},l):t.createElement(c,{...lT(c,f),className:i,"data-index":n.index,key:l},o(n.index,n.data,f))}))})})),HT=Y.default.memo((function(){const t=XT("HeaderComponent"),r=GT("headerHeight"),n=XT("headerFooterTag"),i=ok(Y.default.useMemo((()=>e=>{r(Bk(e,"height"))}),[r]),!0,!1),o=XT("context");return t?e.jsx(n,{ref:i,children:e.jsx(t,{...lT(t,o)})}):null})),WT=Y.default.memo((function(){const t=XT("FooterComponent"),r=GT("footerHeight"),n=XT("headerFooterTag"),i=ok(Y.default.useMemo((()=>e=>{r(Bk(e,"height"))}),[r]),!0,!1),o=XT("context");return t?e.jsx(n,{ref:i,children:e.jsx(t,{...lT(t,o)})}):null})),VT=({children:t})=>{const r=Y.default.useContext(VD),n=GT("itemDimensions"),i=GT("viewportDimensions"),o=ok(Y.default.useMemo((()=>e=>{i(e.getBoundingClientRect())}),[i]),!0,!1);return Y.default.useEffect((()=>{r&&(i({height:r.viewportHeight,width:r.viewportWidth}),n({height:r.itemHeight,width:r.itemWidth}))}),[r,i,n]),e.jsx("div",{ref:o,style:aT(!1),children:t})},YT=({children:t})=>{const r=Y.default.useContext(VD),n=GT("windowViewportRect"),i=GT("itemDimensions"),o=XT("customScrollParent"),a=ck(n,o,!1);return Y.default.useEffect((()=>{r&&(i({height:r.itemHeight,width:r.itemWidth}),n({offsetTop:0,visibleHeight:r.viewportHeight,visibleWidth:r.viewportWidth}))}),[r,n,i]),e.jsx("div",{ref:a,style:aT(!1),children:t})},UT=Y.default.memo((function({...t}){const r=XT("useWindowScroll"),n=XT("customScrollParent"),i=n||r?QT:ZT,o=n||r?YT:VT,a=XT("context");return e.jsx(i,{...t,...lT(i,a),children:e.jsxs(o,{children:[e.jsx(HT,{}),e.jsx(NT,{}),e.jsx(WT,{})]})})})),{Component:KT,useEmitter:qT,useEmitterValue:XT,usePublisher:GT}=HD(LT,{events:{atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",endReached:"endReached",isScrolling:"isScrolling",rangeChanged:"rangeChanged",readyStateChanged:"readyStateChanged",startReached:"startReached",stateChanged:"stateChanged"},methods:{scrollBy:"scrollBy",scrollTo:"scrollTo",scrollToIndex:"scrollToIndex"},optional:{components:"components",computeItemKey:"computeItemKey",context:"context",customScrollParent:"customScrollParent",data:"data",headerFooterTag:"headerFooterTag",increaseViewportBy:"increaseViewportBy",initialItemCount:"initialItemCount",initialTopMostItemIndex:"initialTopMostItemIndex",itemClassName:"itemClassName",itemContent:"itemContent",listClassName:"listClassName",logLevel:"logLevel",overscan:"overscan",restoreStateFrom:"restoreStateFrom",scrollerRef:"scrollerRef",scrollSeekConfiguration:"scrollSeekConfiguration",totalCount:"totalCount",useWindowScroll:"useWindowScroll"}},UT),ZT=fT({useEmitter:qT,useEmitterValue:XT,usePublisher:GT}),QT=hT({useEmitter:qT,useEmitterValue:XT,usePublisher:GT});function JT(e,t,r){return"normal"!==t&&!(null!=t&&t.endsWith("px"))&&r(`${e} was not resolved to pixel value correctly`,t,rk.WARN),"normal"===t?0:parseInt(null!=t?t:"0",10)}const eE=Y.default.createContext({focusedIndex:-1,setFocusedIndex:()=>{}}),tE=({children:r})=>{const[n,i]=t.useState(-1);return e.jsx(eE.Provider,{value:{focusedIndex:n,setFocusedIndex:i},children:r})},rE=K.default.div`
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
`,nE=K.default.div`
    background: transparent;
    padding: ${Zs["spacing-8"]};
`,iE=K.default.ul`
    list-style-type: none;
`,oE=K.default.li`
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
`,aE=K.default(k.TickIcon)`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
    color: ${Ks["icon-selected"]};
`,sE=K.default.div`
    flex-shrink: 0;
    height: 1lh;
    width: 1rem;
`,lE=K.default(j.SquareTickFillIcon)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Ks["icon-selected"]};
`,cE=K.default(S.SquareIcon)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Ks["icon-primary-subtlest"]};
`,dE=K.default.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`,uE=K.default(Rf)`
    cursor: pointer;
    overflow: hidden;
    color: ${Ks["text-primary"]};
    font-size: inherit;
`,fE=K.default(uE)`
    ${qs["body-baseline-semibold"]}
`,hE=K.default(uE)`
    ${qs["body-md-semibold"]}
    padding: ${Zs["spacing-8"]} ${Zs["spacing-8"]};
`,pE=K.default.div`
    width: 100%;
    display: flex;
    padding: ${Zs["spacing-12"]} ${Zs["spacing-16"]};
    align-items: center;
`,gE=K.default(s.ExclamationCircleFillIcon)`
    margin-right: ${Zs["spacing-4"]};
    color: ${Ks["icon-error"]};
    height: 1em;
    width: 1em;
`,mE=K.default(jl)`
    margin-right: ${Zs["spacing-8"]};
    color: ${Ks.icon};
`,bE=K.default.div`
    background: ${Ks["bg-strong"]};
    border-radius: ${Qs.sm};
    display: flex;
    align-items: center;

    ${e=>"small"===e.$variant?qs["body-md-regular"]:qs["body-baseline-regular"]}
`,vE=K.default.label`
    flex: 1;
    display: flex;
    align-items: center;
    gap: ${Zs["spacing-8"]};
    padding: ${e=>"small"===e.$variant?i.css`
                  ${Zs["spacing-8"]} ${Zs["spacing-16"]}
              `:i.css`10px ${Zs["spacing-16"]}`};
`,yE=K.default(Bf)`
    flex: 1;
`,xE=K.default(x.MagnifierIcon)`
    color: ${Ks.icon};
    flex-shrink: 0;
    height: 1em;
    width: 1em;
`,wE=K.default(nl)`
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
`,$E=t.forwardRef(((t,r)=>{var{value:n,variant:i,onClear:o}=t,a=X(t,["value","variant","onClear"]);return e.jsxs(bE,{$variant:i,children:[e.jsxs(vE,{$variant:i,children:[e.jsx(xE,{"aria-hidden":!0}),e.jsx(yE,Object.assign({ref:r,value:n,$variant:i},a))]}),n&&e.jsx(wE,{"aria-label":"Clear search",focusOutline:"browser",onClick:o,children:e.jsx(m.CrossIcon,{"aria-hidden":!0})})]})})),CE=({listItems:r,multiSelect:n,selectedItems:i,disableItemFocus:o,itemsLoadState:a="success",itemTruncationType:s="end",itemMaxLines:l=2,labelDisplayType:c="inline",variant:d="default",listboxId:u,width:f,topScrollItem:h,onSelectItem:p,onSelectAll:g,onDismiss:m,onRetry:b,valueExtractor:v,listExtractor:y,renderListItem:x,renderCustomCallToAction:w,enableSearch:$,hideNoResultsDisplay:C,searchPlaceholder:S="Search",searchFunction:j,onSearch:k})=>{const{focusedIndex:D,setFocusedIndex:T}=t.useContext(eE),[E,O]=t.useState(""),[F,I]=t.useState(null!=r?r:[]),_=od(a),M=nd(),A=t.useRef(null),B=t.useRef(null),R=t.useRef([]),z=t.useRef(null),P=t.useRef(null),L=e=>{const t=y?y(e):null==e?void 0:e.toString();return"object"==typeof t?{title:t.title,secondaryLabel:t.secondaryLabel}:{title:null!=t?t:""}},N=t.useCallback((e=>!!dS(i,(t=>fS(t,e)))),[i]),H=ed((()=>null==j?void 0:j(E))),W=ed((()=>null==r?void 0:r.filter((e=>{const{title:t,secondaryLabel:r}=L(e),n=E.trim().toLowerCase();return t.includes(n)||r&&r.includes(n)})))),V=(e,t)=>{T(t),null==p||p(e,(e=>v?v(e):e)(e))},Y=e=>{const t=e.target.value;O(t),null==k||k()},U=()=>{var e;O(""),null===(e=z.current)||void 0===e||e.focus(),null==k||k()},K=()=>{null==b||b()};td("keydown",(e=>{var t,r;switch(e.code){case"ArrowDown":if(e.preventDefault(),D<F.length-1){const e=D+1;null===(t=R.current[e])||void 0===t||t.focus(),T(e)}break;case"ArrowUp":if(e.preventDefault(),D>0){const e=D-1;null===(r=R.current[e])||void 0===r||r.focus(),T(e)}else 0===D&&z.current&&(z.current.focus(),T(-1));break;case"Space":case"Enter":document.activeElement===R.current[D]&&(e.preventDefault(),F[D]&&V(F[D],D))}})),t.useEffect((()=>{var e;if(!h)return void(null===(e=P.current)||void 0===e||e.scrollTo({top:0}));const t=setTimeout((()=>{if(!r)return;const e=r.indexOf(h);P.current&&-1!==e&&(P.current.scrollToIndex({index:e}),T(e))}),0);return()=>clearTimeout(t)}),[R,r,T,h]),t.useEffect((()=>{var e,t,n;if(M)return;if(o||!r)return;const i=r.findIndex((e=>N(e)));z.current?(T(-1),setTimeout((()=>{var e;return null===(e=z.current)||void 0===e?void 0:e.focus()}),200)):D>0?(null===(e=P.current)||void 0===e||e.scrollToIndex({index:D,align:"center"}),setTimeout((()=>{var e;return null===(e=R.current[D])||void 0===e?void 0:e.focus()}),200)):-1!==i?(null===(t=P.current)||void 0===t||t.scrollToIndex({index:i,align:"center"}),T(i),setTimeout((()=>{var e;return null===(e=R.current[i])||void 0===e?void 0:e.focus()}),200)):(null===(n=P.current)||void 0===n||n.scrollToIndex({index:0}),T(0),setTimeout((()=>{var e;return null===(e=R.current[0])||void 0===e?void 0:e.focus()}),200))}),[N,o,D,r,M,T]),t.useEffect((()=>{M&&_&&(o||"success"===a&&z.current&&(T(-1),z.current.focus()))}),[M,_,a,T,o]),t.useEffect((()=>{var e;I(null!==(e=""===E?r:j?H():W())&&void 0!==e?e:[])}),[H,W,r,j,E]);const q=t=>n?t?e.jsx(lE,{"aria-hidden":!0}):e.jsx(cE,{"aria-hidden":!0}):t?e.jsx(aE,{"aria-hidden":!0}):e.jsx(sE,{}),X=(t,r)=>{const{title:n,secondaryLabel:i}=L(t);return e.jsx(yj,{displayType:c,label:n,maxLines:l,selected:r,sublabel:i,truncationType:s,variant:d})},G=(t,r)=>{if(!b||"success"===a){const i=N(t),o=r===D;return e.jsx(oE,{"aria-selected":i,"aria-multiselectable":n,"data-testid":"list-item",onClick:()=>V(t,r),onMouseEnter:()=>(e=>{T(e)})(r),ref:e=>{R.current[r]=e},role:"option",tabIndex:o?0:-1,$active:o,$selected:i,children:x?x(t,{selected:i}):e.jsxs(e.Fragment,{children:[q(i),X(t,i)]})},((e,t)=>`item_${t}__${v?v(e):e}`)(t,r))}},Z=()=>{if(($||j)&&"success"===a)return e.jsx($E,{ref:z,onChange:Y,value:E,placeholder:S,"data-testid":"search-input","aria-label":"Enter text to search",onClear:U,variant:d})},Q=()=>{if(i&&n&&F.length>0&&!E&&"success"===a)return e.jsx(dE,{children:e.jsx(hE,{onClick:g,type:"button",$variant:d,children:0===i.length?"Select all":"Clear all"})})},J=()=>{if(!C&&(E||!$)&&0===F.length&&"success"===a)return e.jsxs(pE,{"data-testid":"list-no-results",children:[e.jsx(gE,{"data-testid":"no-result-icon"}),"No results found."]})},ee=()=>{if(b&&"loading"===a)return e.jsxs(pE,{"data-testid":"list-loading",children:[e.jsx(mE,{}),"Loading..."]})},te=()=>{if(b&&"fail"===a)return e.jsxs(pE,{"data-testid":"list-fail",children:[e.jsx(gE,{"data-testid":"load-error-icon"}),"Failed to load. ",e.jsx(fE,{onClick:K,type:"button",$variant:d,children:"Try again."})]})},re=()=>{var t;const r="test"===process.env.NODE_ENV;return e.jsx(iE,{role:"listbox",id:u,children:e.jsx(ST,Object.assign({ref:P,style:{height:"100%"},data:F,customScrollParent:null!==(t=A.current)&&void 0!==t?t:void 0,itemContent:(e,t)=>G(t,e)},r?{initialItemCount:F.length}:{}),r?F.length:void 0)})};return e.jsxs(rE,{"data-testid":"dropdown-container",ref:A,$width:f,$variant:d,children:[e.jsxs(nE,{ref:B,"data-testid":"dropdown-list",children:[Z(),Q(),J(),ee(),te(),re()]}),(()=>{if(w)return e.jsx("div",{"data-testid":"custom-cta",children:w(m,F)})})()]})},SE=K.default(Rf)`
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
`,jE=K.default.div`
    display: flex;
    align-items: center;
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${Xs["duration-250"]} ${Xs["ease-default"]};

    svg {
        color: ${Ks.icon};
        height: 1em;
        width: 1em;
    }
`,kE=t.forwardRef((({children:t,disabled:r,expanded:n,listboxId:i,popupRole:o,readOnly:a,variant:s},l)=>e.jsxs(SE,{ref:l,type:"button","aria-expanded":n,"aria-haspopup":o,"data-testid":"selector",disabled:r,"aria-controls":i,$variant:s,children:[t,!a&&e.jsx(jE,{$expanded:n,$variant:s,children:e.jsx(f.ChevronDownIcon,{"aria-hidden":!0})})]})));var DE=Symbol.for("immer-nothing"),TE=Symbol.for("immer-draftable"),EE=Symbol.for("immer-state"),OE="production"!==process.env.NODE_ENV?[function(e){return`The plugin for '${e}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e}()\` when initializing your application.`},function(e){return`produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e}'`},"This object has been frozen and should not be mutated",function(e){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+e},"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.","Immer forbids circular references","The first or second argument to `produce` must be a function","The third argument to `produce` must be a function or undefined","First argument to `createDraft` must be a plain object, an array, or an immerable object","First argument to `finishDraft` must be a draft returned by `createDraft`",function(e){return`'current' expects a draft, got: ${e}`},"Object.defineProperty() cannot be used on an Immer draft","Object.setPrototypeOf() cannot be used on an Immer draft","Immer only supports deleting array indices","Immer only supports setting array indices and the 'length' property",function(e){return`'original' expects a draft, got: ${e}`}]:[];function FE(e,...t){if("production"!==process.env.NODE_ENV){const r=OE[e],n="function"==typeof r?r.apply(null,t):r;throw new Error(`[Immer] ${n}`)}throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var IE=Object.getPrototypeOf;function _E(e){return!!e&&!!e[EE]}function ME(e){return!!e&&(BE(e)||Array.isArray(e)||!!e[TE]||!!e.constructor?.[TE]||NE(e)||HE(e))}var AE=Object.prototype.constructor.toString();function BE(e){if(!e||"object"!=typeof e)return!1;const t=IE(e);if(null===t)return!0;const r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object||"function"==typeof r&&Function.toString.call(r)===AE}function RE(e,t){0===zE(e)?Reflect.ownKeys(e).forEach((r=>{t(r,e[r],e)})):e.forEach(((r,n)=>t(n,r,e)))}function zE(e){const t=e[EE];return t?t.type_:Array.isArray(e)?1:NE(e)?2:HE(e)?3:0}function PE(e,t){return 2===zE(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function LE(e,t,r){const n=zE(e);2===n?e.set(t,r):3===n?e.add(r):e[t]=r}function NE(e){return e instanceof Map}function HE(e){return e instanceof Set}function WE(e){return e.copy_||e.base_}function VE(e,t){if(NE(e))return new Map(e);if(HE(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const r=BE(e);if(!0===t||"class_only"===t&&!r){const t=Object.getOwnPropertyDescriptors(e);delete t[EE];let r=Reflect.ownKeys(t);for(let n=0;n<r.length;n++){const i=r[n],o=t[i];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(t[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:e[i]})}return Object.create(IE(e),t)}{const t=IE(e);if(null!==t&&r)return{...e};const n=Object.create(t);return Object.assign(n,e)}}function YE(e,t=!1){return KE(e)||_E(e)||!ME(e)||(zE(e)>1&&(e.set=e.add=e.clear=e.delete=UE),Object.freeze(e),t&&Object.entries(e).forEach((([e,t])=>YE(t,!0)))),e}function UE(){FE(2)}function KE(e){return Object.isFrozen(e)}var qE,XE={};function GE(e){const t=XE[e];return t||FE(0,e),t}function ZE(){return qE}function QE(e,t){t&&(GE("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function JE(e){eO(e),e.drafts_.forEach(rO),e.drafts_=null}function eO(e){e===qE&&(qE=e.parent_)}function tO(e){return qE={drafts_:[],parent_:qE,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function rO(e){const t=e[EE];0===t.type_||1===t.type_?t.revoke_():t.revoked_=!0}function nO(e,t){t.unfinalizedDrafts_=t.drafts_.length;const r=t.drafts_[0];return void 0!==e&&e!==r?(r[EE].modified_&&(JE(t),FE(4)),ME(e)&&(e=iO(t,e),t.parent_||aO(t,e)),t.patches_&&GE("Patches").generateReplacementPatches_(r[EE].base_,e,t.patches_,t.inversePatches_)):e=iO(t,r,[]),JE(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==DE?e:void 0}function iO(e,t,r){if(KE(t))return t;const n=t[EE];if(!n)return RE(t,((i,o)=>oO(e,n,t,i,o,r))),t;if(n.scope_!==e)return t;if(!n.modified_)return aO(e,n.base_,!0),n.base_;if(!n.finalized_){n.finalized_=!0,n.scope_.unfinalizedDrafts_--;const t=n.copy_;let i=t,o=!1;3===n.type_&&(i=new Set(t),t.clear(),o=!0),RE(i,((i,a)=>oO(e,n,t,i,a,r,o))),aO(e,t,!1),r&&e.patches_&&GE("Patches").generatePatches_(n,r,e.patches_,e.inversePatches_)}return n.copy_}function oO(e,t,r,n,i,o,a){if("production"!==process.env.NODE_ENV&&i===r&&FE(5),_E(i)){const a=iO(e,i,o&&t&&3!==t.type_&&!PE(t.assigned_,n)?o.concat(n):void 0);if(LE(r,n,a),!_E(a))return;e.canAutoFreeze_=!1}else a&&r.add(i);if(ME(i)&&!KE(i)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;iO(e,i),t&&t.scope_.parent_||"symbol"==typeof n||!Object.prototype.propertyIsEnumerable.call(r,n)||aO(e,i)}}function aO(e,t,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&YE(t,r)}var sO={get(e,t){if(t===EE)return e;const r=WE(e);if(!PE(r,t))return function(e,t,r){const n=dO(t,r);return n?"value"in n?n.value:n.get?.call(e.draft_):void 0}(e,r,t);const n=r[t];return e.finalized_||!ME(n)?n:n===cO(e.base_,t)?(fO(e),e.copy_[t]=hO(n,e)):n},has:(e,t)=>t in WE(e),ownKeys:e=>Reflect.ownKeys(WE(e)),set(e,t,r){const n=dO(WE(e),t);if(n?.set)return n.set.call(e.draft_,r),!0;if(!e.modified_){const n=cO(WE(e),t),i=n?.[EE];if(i&&i.base_===r)return e.copy_[t]=r,e.assigned_[t]=!1,!0;if(function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}(r,n)&&(void 0!==r||PE(e.base_,t)))return!0;fO(e),uO(e)}return e.copy_[t]===r&&(void 0!==r||t in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=r,e.assigned_[t]=!0),!0},deleteProperty:(e,t)=>(void 0!==cO(e.base_,t)||t in e.base_?(e.assigned_[t]=!1,fO(e),uO(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0),getOwnPropertyDescriptor(e,t){const r=WE(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n?{writable:!0,configurable:1!==e.type_||"length"!==t,enumerable:n.enumerable,value:r[t]}:n},defineProperty(){FE(11)},getPrototypeOf:e=>IE(e.base_),setPrototypeOf(){FE(12)}},lO={};function cO(e,t){const r=e[EE];return(r?WE(r):e)[t]}function dO(e,t){if(!(t in e))return;let r=IE(e);for(;r;){const e=Object.getOwnPropertyDescriptor(r,t);if(e)return e;r=IE(r)}}function uO(e){e.modified_||(e.modified_=!0,e.parent_&&uO(e.parent_))}function fO(e){e.copy_||(e.copy_=VE(e.base_,e.scope_.immer_.useStrictShallowCopy_))}RE(sO,((e,t)=>{lO[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),lO.deleteProperty=function(e,t){return"production"!==process.env.NODE_ENV&&isNaN(parseInt(t))&&FE(13),lO.set.call(this,e,t,void 0)},lO.set=function(e,t,r){return"production"!==process.env.NODE_ENV&&"length"!==t&&isNaN(parseInt(t))&&FE(14),sO.set.call(this,e[0],t,r,e[0])};function hO(e,t){const r=NE(e)?GE("MapSet").proxyMap_(e,t):HE(e)?GE("MapSet").proxySet_(e,t):function(e,t){const r=Array.isArray(e),n={type_:r?1:0,scope_:t?t.scope_:ZE(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=n,o=sO;r&&(i=[n],o=lO);const{revoke:a,proxy:s}=Proxy.revocable(i,o);return n.draft_=s,n.revoke_=a,s}(e,t);return(t?t.scope_:ZE()).drafts_.push(r),r}function pO(e){if(!ME(e)||KE(e))return e;const t=e[EE];let r;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,r=VE(e,t.scope_.immer_.useStrictShallowCopy_)}else r=VE(e,!0);return RE(r,((e,t)=>{LE(r,e,pO(t))})),t&&(t.finalized_=!1),r}var gO=new class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,t,r)=>{if("function"==typeof e&&"function"!=typeof t){const r=t;t=e;const n=this;return function(e=r,...i){return n.produce(e,(e=>t.call(this,e,...i)))}}let n;if("function"!=typeof t&&FE(6),void 0!==r&&"function"!=typeof r&&FE(7),ME(e)){const i=tO(this),o=hO(e,void 0);let a=!0;try{n=t(o),a=!1}finally{a?JE(i):eO(i)}return QE(i,r),nO(n,i)}if(!e||"object"!=typeof e){if(n=t(e),void 0===n&&(n=e),n===DE&&(n=void 0),this.autoFreeze_&&YE(n,!0),r){const t=[],i=[];GE("Patches").generateReplacementPatches_(e,n,t,i),r(t,i)}return n}FE(1,e)},this.produceWithPatches=(e,t)=>{if("function"==typeof e)return(t,...r)=>this.produceWithPatches(t,(t=>e(t,...r)));let r,n;const i=this.produce(e,t,((e,t)=>{r=e,n=t}));return[i,r,n]},"boolean"==typeof e?.autoFreeze&&this.setAutoFreeze(e.autoFreeze),"boolean"==typeof e?.useStrictShallowCopy&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){ME(e)||FE(8),_E(e)&&(e=function(e){_E(e)||FE(10,e);return pO(e)}(e));const t=tO(this),r=hO(e,void 0);return r[EE].isManual_=!0,eO(t),r}finishDraft(e,t){const r=e&&e[EE];r&&r.isManual_||FE(9);const{scope_:n}=r;return QE(n,t),nO(void 0,n)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){const n=t[r];if(0===n.path.length&&"replace"===n.op){e=n.value;break}}r>-1&&(t=t.slice(r+1));const n=GE("Patches").applyPatches_;return _E(e)?n(e,t):this.produce(e,(e=>n(e,t)))}},mO=gO.produce;gO.produceWithPatches.bind(gO),gO.setAutoFreeze.bind(gO),gO.setUseStrictShallowCopy.bind(gO),gO.applyPatches.bind(gO),gO.createDraft.bind(gO),gO.finishDraft.bind(gO);var bO=m$,vO=q$,yO=Bw,xO=Oi,wO=y$,$O=Pw,CO=d$,SO=e$,jO=Object.prototype.hasOwnProperty;var kO=function(e){if(null==e)return!0;if(wO(e)&&(xO(e)||"string"==typeof e||"function"==typeof e.splice||$O(e)||SO(e)||yO(e)))return!e.length;var t=vO(e);if("[object Map]"==t||"[object Set]"==t)return!e.size;if(CO(e))return!bO(e).length;for(var r in e)if(jO.call(e,r))return!1;return!0},DO=Ei(kO);const TO=(e,t,r)=>{const n=mO(e,(e=>{for(let n=e.length-1;n>=0;n--){const i=e[n],o=OO(i.keyPath);if(i.checked=t.has(o),i.hasSubItems&&r&&!0!==i.checked){const t=i.subItemIndexes.map((t=>e[t])),r=t.every((e=>!0===e.checked)),n=t.some((e=>!1!==e.checked));r?i.checked=!0:n&&(i.checked="mixed")}}}));return n},EO=(e,t)=>{const[r,...n]=t;if(DO(e)||DO(r))return;const i=e.find((e=>e.key===r));return i&&n.length?EO(i.subItems,n):i},OO=e=>e.join(","),FO=e=>new Set(e.map((e=>e.join(",")))),IO=K.default.li`
    display: ${e=>e.$visible?"flex":"none"};
`,_O=K.default.div`
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
`,MO=K.default.div`
    height: 1px;
    width: calc((1lh + ${Zs["spacing-8"]}) * ${e=>e.$level});
`,AO=K.default.div`
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
`,BO=K.default.div`
    width: 1lh;
    height: 1lh;
    margin-right: ${Zs["spacing-8"]};
`,RO=K.default.div`
    flex-shrink: 0;
    height: 1lh;
    width: ${e=>e.$hasNestedSiblings?"1lh":Zs["spacing-16"]};

    display: flex;
    justify-content: center;
`,zO=K.default(T.MinusSquareFillIcon)`
    flex-shrink: 0;
    height: 1lh;
    width: 1lh;
    color: ${Ks["icon-selected"]};
`,PO=({listItems:r,multiSelect:n=!1,selectedKeyPaths:i,itemsLoadState:o="success",itemTruncationType:a="end",itemMaxLines:s=2,variant:l="default",listboxId:c,width:d,mode:u="default",selectableCategory:f,onSelectItem:h,onSelectAll:p,onRetry:g,enableSearch:m,hideNoResultsDisplay:b,searchPlaceholder:v="Search",onSearch:y})=>{const x=n||f,[w,$]=t.useState(""),C=w.toLowerCase().trim(),[S,j]=t.useState(!1),k=t.useRef(null),T=t.useRef(null),E=t.useRef([]),O=t.useRef(null),F=nd(),[I,_]=t.useState([]),[M,A]=t.useState([]),B=S?M:I,R=t.useMemo((()=>{let e=0;for(const t of I)t.level>e&&(e=t.level);return e}),[I]),[z,P]=t.useState(0),[L,N]=t.useState([]),[H,W]=t.useState(0),V=e=>{const t=e.target.value;$(t),""===t?j(!1):t.trim().length>=3&&j(!0),null==y||y()},Y=()=>{var e;$(""),j(!1),null===(e=O.current)||void 0===e||e.focus(),null==y||y()},U=()=>{null==g||g()},K=()=>{if(0===i.size){const e=[],t=[];I.forEach((r=>{r.hasSubItems||(e.push(r.keyPath),t.push(r))})),null==p||p(e,t)}else null==p||p([],[])},q=ed(((e,t)=>((e,t,r,n,i)=>{const o=[],a=(e,s)=>{const l=[],c=e.some((e=>{var t;return null===(t=e.subItems)||void 0===t?void 0:t.length}));return e.forEach(((d,u)=>{var f,h;const p=s?s.level+1:0,g=s?[...s.keyPath,d.key]:[d.key],m=OO(g),b={item:d,index:o.length,indexInParent:u,parentSetSize:e.length,keyPath:g,parentIndex:s?s.index:-1,parentKeyPath:s?s.keyPath:[],level:p,visible:0===p||i||(null==s?void 0:s.expanded)||!1,expanded:i,checked:t.has(m),hasSubItems:!!(null===(f=d.subItems)||void 0===f?void 0:f.length),subItemIndexes:[],hasNestedSiblings:c,matched:!!n&&-1!==d.label.toLowerCase().indexOf(n),hasMatchedSubItems:!1};if(l.push(b),o.push(b),null===(h=d.subItems)||void 0===h?void 0:h.length){const e=a(d.subItems,b);if(r&&!0!==b.checked){const t=e.every((e=>!0===e.checked)),r=e.some((e=>!1!==e.checked));t?b.checked=!0:r&&(b.checked="mixed")}b.hasMatchedSubItems=e.some((e=>e.matched||e.hasMatchedSubItems)),b.subItemIndexes=e.map((e=>e.index))}})),l};return a(e,void 0),o})(e,i,n,C,t))),X=ed((e=>{return i.size?(t=q(e,!1),mO(t,(e=>{const t=e.filter((e=>!0===e.checked));for(const r of t){let t=r.parentIndex;for(;t>=0;){const r=e[t];r.visible=!0,r.expanded=!0;for(const t of r.subItemIndexes)e[t].visible=!0;t=r.parentIndex}}}))):(e=>mO(e,(e=>{const t=e.findIndex((e=>e.hasSubItems));if(t<0)return;let r=t,n=0;for(let t=r;t<e.length;t++){const i=e[t].keyPath.length;if(i>n)n=i;else if(i<n)break;r=t,e[t].visible=!0,e[t].expanded=!0}for(let t=0;t<e.length;t++){const n=e[t],i=n.keyPath.slice(0,-1),o=e[r].keyPath.slice(0,i.length);fS(i,o)&&(n.visible=!0)}return e})))(q(e,!1));var t})),G=ed((e=>{const t=e=>{const r=[];for(const n of e){if(-1!==n.label.toLowerCase().indexOf(C))r.push(n);else if(n.subItems){const e=t(n.subItems);if(e.length>0){r.push(Object.assign(Object.assign({},n),{subItems:e}));continue}}}return r};return t(e)})),Z=ed((()=>{_((e=>TO(e,i,n))),S&&A((e=>TO(e,i,n)))})),Q=(e,t,r)=>{const n=((e,t,r)=>mO(e,(e=>{e[t].expanded=r;const n=e[t].keyPath;for(let i=t+1;i<e.length;i++){const t=e[i],o=e[t.parentIndex],a=t.keyPath.slice(0,n.length);if(!fS(n,a))break;t.visible=r&&o.expanded&&o.visible}})))(B,e,t);P(e),W(r),S?A(n):_(n)};td("keydown",(e=>{var t,r;switch(e.code){case"ArrowDown":{e.preventDefault();const r=((e,t,r)=>{for(let n=r;n<e.length;n++)if(t(e[n]))return e[n]})(B,(e=>e.visible),z+1);r&&(W((e=>e+1)),P(r.index),null===(t=E.current[r.index])||void 0===t||t.focus());break}case"ArrowUp":{e.preventDefault();const t=((e,t,r)=>{for(let n=r;n>=0;n--)if(t(e[n]))return e[n]})(B,(e=>e.visible),z-1);t?(W((e=>e-1)),P(t.index),null===(r=E.current[t.index])||void 0===r||r.focus()):0===H&&O.current&&(O.current.focus(),W(-1),P(-1));break}case"ArrowRight":e.preventDefault(),Q(z,!0,H);break;case"ArrowLeft":e.preventDefault(),Q(z,!1,H);break;case"Space":if(document.activeElement===E.current[z]){e.preventDefault();const t=B[z];if(t.hasSubItems&&!x)return;null==h||h(t)}}})),t.useEffect((()=>{let e=[];"default"===u?e=X(r):"expand"===u?e=q(r,!0):"collapse"===u&&(e=q(r,!1)),_(e)}),[q,X,r,u]),t.useEffect((()=>{N(B.filter((e=>e.visible)))}),[S,B]),t.useEffect((()=>{Z()}),[n,i,Z]),t.useEffect((()=>{if(S&&w.trim().length>=3){const e=G(r),t=(e=>mO(e,(e=>{for(const t of e)if(t.matched&&(t.visible=!0),t.hasMatchedSubItems){t.visible=!0,t.expanded=!0;for(const r of t.subItemIndexes)e[r].visible=!0}})))(q(e,!1));A(t)}}),[G,q,r,S,w]),t.useEffect((()=>{F||(O.current?(P(-1),W(-1),setTimeout((()=>{var e;return null===(e=O.current)||void 0===e?void 0:e.focus()}),200)):E.current[z]?setTimeout((()=>{var e;return null===(e=E.current[z])||void 0===e?void 0:e.focus()}),200):(P(0),W(0),setTimeout((()=>{var e;return null===(e=E.current[0])||void 0===e?void 0:e.focus()}),200)))}),[z,H,F]);const J=()=>{if(m&&"success"===o)return e.jsx($E,{ref:O,onChange:V,value:w,placeholder:v,"data-testid":"search-input","aria-label":"Enter text to search",onClear:Y,variant:l})},ee=()=>{if(n&&!S&&I.length>0&&"success"===o)return e.jsx(dE,{children:e.jsx(hE,{onClick:K,type:"button",$variant:l,children:0===i.size?"Select all":"Clear all"})})},te=()=>{if(!b&&S&&0===M.length&&"success"===o)return e.jsxs(pE,{"data-testid":"list-no-results",children:[e.jsx(gE,{"data-testid":"no-result-icon"}),"No results found."]})},re=()=>{if(g&&"loading"===o)return e.jsxs(pE,{"data-testid":"list-loading",children:[e.jsx(zl,{}),"Loading..."]})},ne=()=>{if(g&&"fail"===o)return e.jsxs(pE,{"data-testid":"list-fail",children:[e.jsx(gE,{"data-testid":"load-error-icon"}),"Failed to load. ",e.jsx(fE,{onClick:U,type:"button",$variant:l,children:"Try again."})]})},ie=t=>{if(n)switch(t.checked){case"mixed":return e.jsx(zO,{"aria-hidden":!0});case!0:return e.jsx(lE,{"aria-hidden":!0});default:return e.jsx(cE,{"aria-hidden":!0})}if(!t.hasSubItems)return e.jsx(RO,{$hasNestedSiblings:t.hasNestedSiblings||0===t.level,children:t.checked&&e.jsx(aE,{"aria-hidden":!0})})},oe=(t,r)=>{const{level:i,visible:o,expanded:l,keyPath:c,checked:d,hasSubItems:u,indexInParent:f,parentSetSize:p}=t,g=t.index,m=H===r,b=u&&!x;return e.jsxs(IO,{$visible:o,children:[R>0&&e.jsx(MO,{$level:i}),R>0&&!u&&n&&e.jsx(BO,{}),e.jsxs(_O,{"aria-checked":d,"aria-selected":!!d,"aria-expanded":u?l:void 0,"aria-level":i+1,"aria-posinset":f+1,"aria-setsize":p,"data-testid":"list-item",onClick:e=>{e.stopPropagation(),b?Q(g,!l,r):((e,t)=>{W(t),P(e),null==h||h(B[e])})(g,r)},onMouseEnter:()=>((e,t)=>{P(t.index),W(e)})(r,t),ref:e=>E.current[t.index]=e,role:"treeitem",tabIndex:m?0:-1,$active:m,$toggleable:b,children:[u&&e.jsx(AO,{"data-testid":"toggle-category-button",onClick:e=>{e.stopPropagation(),Q(g,!l,r)},$expanded:l,children:e.jsx(D.CaretRightIcon,{})}),ie(t),e.jsx(yj,{bold:u,searchTerm:S?C:void 0,label:t.item.label,selected:!!d,truncationType:a,maxLines:s})]})]},`[${c.join("---")}]`)},ae=()=>{var t;const r="test"===process.env.NODE_ENV;return e.jsx("div",{"aria-multiselectable":n,id:c,ref:T,role:"tree",children:e.jsx(ST,Object.assign({style:{height:"100%"},customScrollParent:null!==(t=k.current)&&void 0!==t?t:void 0,data:L,itemContent:(e,t)=>oe(t,e)},r?{initialItemCount:L.length}:{}),r?L.length:void 0)})};return e.jsx(rE,{"data-testid":"dropdown-container",ref:k,$width:d,$variant:l,children:e.jsxs(nE,{"data-testid":"nested-dropdown-list",children:[J(),ee(),te(),re(),ne(),ae()]})})},LO=({selectedOptions:r,placeholder:n="Select",options:i,disabled:o,error:a,className:s,"data-testid":l,id:c,enableSearch:d=!1,searchFunction:u,searchPlaceholder:f,valueExtractor:h,listExtractor:p,onSelectOptions:g,onShowOptions:m,onHideOptions:b,onRetry:v,optionsLoadState:y="success",optionTruncationType:x="end",renderListItem:w,hideNoResultsDisplay:$,renderCustomCallToAction:C,onBlur:S,variant:j="default",readOnly:k,alignment:D,dropdownZIndex:T})=>{const[E,O]=t.useState(r||[]),[F,I]=t.useState(!1),[_,M]=t.useState(!1),[A]=t.useState((()=>Qc.generate())),B=t.useRef(null),R=t.useRef(null);t.useEffect((()=>{O(r||[])}),[r]);const z=()=>{E&&E.length>0?(O([]),V([])):(O(i),V(i))},P=(e,t)=>{const r=[...E],n=cS(E,(e=>(h?h(e):e)===t));n>-1?r.splice(n,1):r.push(e),O(r),V(r)},L=()=>{F&&(I(!1),W(!1))},N=()=>{_||F||M(!0)},H=e=>{_&&!F&&B.current&&!B.current.contains(e.relatedTarget)&&(M(!1),null==S||S())},W=e=>{!e&&b&&b(),e&&m&&m()},V=e=>{g&&g(e)};return e.jsx(tE,{children:e.jsx(yh,{enabled:!k&&!o,isOpen:F,renderElement:()=>e.jsx(Mf,{className:s,"data-testid":l,id:c,ref:B,tabIndex:-1,onFocus:N,onBlur:H,$focused:_,$disabled:o,$readOnly:k,$error:a,children:e.jsx(kE,{ref:R,disabled:o,expanded:F,listboxId:A,popupRole:"listbox",readOnly:k,variant:j,children:e.jsx(uh,{$disabled:o,children:E&&0!==E.length?e.jsx(fh,{$variant:j,children:i&&E.length===i.length?"All selected":`${E.length} selected`}):e.jsx(hh,{truncateType:x,$variant:j,children:n})})})}),renderDropdown:({elementWidth:t})=>e.jsx(CE,{listboxId:A,listItems:i,onSelectItem:P,onDismiss:L,valueExtractor:h,listExtractor:p,enableSearch:d,searchFunction:u,searchPlaceholder:f,multiSelect:!0,selectedItems:E,onSelectAll:z,onRetry:v,itemsLoadState:y,itemTruncationType:x,renderListItem:w,hideNoResultsDisplay:$,renderCustomCallToAction:C,variant:j,width:t}),onOpen:()=>{I(!0),W(!0),M(!0)},onClose:e=>{I(!1),W(!1),"click"!==e&&(M(!1),null==S||S())},onDismiss:()=>{var e;null===(e=R.current)||void 0===e||e.focus(),I(!1),W(!1)},clickToToggle:!0,offset:8,alignment:D,fitAvailableHeight:!0,customZIndex:T})})},NO=(e,t)=>{const[r,...n]=t;if(DO(e)||!r)return;const i=e.find((e=>e.key===r));return i?n.length?NO(i.subItems,n):i:void 0},HO=(e,t)=>{const r=[];for(const n of e)n.subItems?r.push(...HO(n.subItems,[...t,n.key])):r.push({value:n.value,label:n.label,keyPath:[...t,n.key]});return r},WO=({placeholder:r="Select",options:n,disabled:i,error:o,className:a,"data-testid":s,id:l,selectedKeyPaths:c,mode:d,valueToStringFunction:u,enableSearch:f,searchPlaceholder:h,hideNoResultsDisplay:p,readOnly:g,onSearch:m,onSelectOptions:b,onShowOptions:v,onHideOptions:y,onRetry:x,onBlur:w,optionsLoadState:$="success",optionTruncationType:C="end",variant:S="default",alignment:j,dropdownZIndex:k})=>{const D=n,[T,E]=t.useState(c?FO(c):new Set),[O,F]=t.useState([]),[I,_]=t.useState(!1),[M,A]=t.useState(!1),[B]=t.useState((()=>Qc.generate())),R=t.useRef(null),z=t.useRef(null),P=t.useRef(null);t.useEffect((()=>{const e=c||[],t=((e,t)=>{const r=[];for(let n=0;n<t.length;n++){const i=t[n],o=NO(e,i);o&&r.push({value:o.value,label:o.label,keyPath:i})}return r})(D,e);E(FO(e)),F(t)}),[c,D]);const L=(e,t)=>{const r=t.map((e=>({keyPath:e.keyPath,label:e.item.label,value:e.item.value})));E(FO(e)),F(r),K(e,r)},N=e=>{const t=q(e),r=t.map((e=>e.keyPath));F(t),E(FO(r)),K(r,t)},H=()=>{M||I||A(!0)},W=e=>{M&&!I&&R.current&&!R.current.contains(e.relatedTarget)&&(A(!1),null==w||w())},V=()=>{if(O.length>1)return`${O.length} selected`;const{label:e,value:t}=O[0];return u?u(t):e},Y=e=>{if("middle"===C){let t=0;return P&&P.current&&(t=P.current.getBoundingClientRect().width),Jc.truncateOneLine(e,t,120,6)}return e},U=e=>{!e&&y&&y(),e&&v&&v()},K=(e,t)=>{if(b){const r=t.map((e=>e.value));b(e,r)}},q=e=>{if(!0===e.checked)return O.filter((t=>{const r=t.keyPath.slice(0,e.keyPath.length);return!fS(e.keyPath,r)}));{const t=[...O],r=e.hasSubItems?((e,t)=>{const r=NO(e,t);return r&&r.subItems?HO(r.subItems,t):[]})(D,e.keyPath):[{value:e.item.value,label:e.item.label,keyPath:e.keyPath}];return r.forEach((e=>{O.find((t=>fS(t.keyPath,e.keyPath)))||t.push(e)})),t}};return e.jsx(yh,{enabled:!g&&!i,isOpen:I,renderElement:()=>e.jsx(Mf,{className:a,"data-testid":s,id:l,ref:R,tabIndex:-1,onFocus:H,onBlur:W,$focused:M,$disabled:i,$readOnly:g,$error:o,children:e.jsx(kE,{ref:z,disabled:i,expanded:I,listboxId:B,popupRole:"tree",readOnly:g,variant:S,children:e.jsx(uh,{ref:P,$disabled:i,children:DO(O)?e.jsx(hh,{truncateType:C,children:r}):e.jsx(fh,{truncateType:C,children:Y(V())})})})}),renderDropdown:({elementWidth:t})=>e.jsx(PO,{listboxId:B,listItems:D,multiSelect:!0,selectedKeyPaths:T,itemsLoadState:$,itemTruncationType:C,enableSearch:f,searchPlaceholder:h,hideNoResultsDisplay:p,onSelectItem:N,onSelectAll:L,onRetry:x,onSearch:m,variant:S,mode:d,width:t}),onOpen:()=>{_(!0),U(!0),A(!0)},onClose:e=>{_(!1),U(!1),"click"!==e&&(A(!1),null==w||w())},onDismiss:()=>{var e;null===(e=z.current)||void 0===e||e.focus(),_(!1),U(!1)},clickToToggle:!0,offset:8,alignment:j,fitAvailableHeight:!0,customZIndex:k})},VO=({placeholder:r="Select",options:n,disabled:i,error:o,className:a,"data-testid":s,id:l,selectedKeyPath:c,mode:d,valueToStringFunction:u,enableSearch:f,searchPlaceholder:h,selectableCategory:p,hideNoResultsDisplay:g,readOnly:m,onBlur:b,onSearch:v,onSelectOption:y,onShowOptions:x,onHideOptions:w,onRetry:$,optionsLoadState:C="success",optionTruncationType:S="end",variant:j="default",alignment:k,dropdownZIndex:D})=>{const T=n,[E,O]=t.useState(c?FO([c]):new Set),[F,I]=t.useState(),[_,M]=t.useState(!1),[A,B]=t.useState(!1),[R]=t.useState((()=>Qc.generate())),z=t.useRef(null),P=t.useRef(null),L=t.useRef(null);t.useEffect((()=>{O(c?FO([c]):new Set);const e=EO(T,c||[]);I(null!=e?e:void 0)}),[c,T]);const N=e=>{var t;const{keyPath:r,item:{label:n,value:i}}=e;O(FO([r])),I({label:n,value:i}),M(!1),U(!1),null===(t=P.current)||void 0===t||t.focus(),null==y||y(r,i)},H=()=>{A||_||B(!0)},W=e=>{A&&!_&&z.current&&!z.current.contains(e.relatedTarget)&&(B(!1),null==b||b())},V=()=>{if(!F)return"";const{label:e,value:t}=F;return u?u(t):e},Y=e=>{if("middle"===S){let t=0;return L&&L.current&&(t=L.current.getBoundingClientRect().width),Jc.truncateOneLine(e,t,120,6)}return e},U=e=>{!e&&w&&w(),e&&x&&x()};return e.jsx(yh,{enabled:!m&&!i,isOpen:_,renderElement:()=>e.jsx(Mf,{className:a,"data-testid":s,id:l,ref:z,tabIndex:-1,onFocus:H,onBlur:W,$focused:A,$disabled:i,$readOnly:m,$error:o,children:e.jsx(kE,{ref:P,disabled:i,expanded:_,listboxId:R,popupRole:"tree",readOnly:m,variant:j,children:e.jsx(uh,{ref:L,$disabled:i,children:DO(F)?e.jsx(hh,{truncateType:S,children:r}):e.jsx(fh,{truncateType:S,children:Y(V())})})})}),renderDropdown:({elementWidth:t})=>e.jsx(PO,{listboxId:R,listItems:T,selectedKeyPaths:E,selectableCategory:p,itemsLoadState:C,itemTruncationType:S,enableSearch:f,searchPlaceholder:h,hideNoResultsDisplay:g,onSelectItem:N,onRetry:$,onSearch:v,variant:j,mode:d,width:t}),onOpen:()=>{M(!0),U(!0),B(!0)},onClose:e=>{M(!1),U(!1),"click"!==e&&(B(!1),null==b||b())},onDismiss:()=>{var e;null===(e=P.current)||void 0===e||e.focus(),M(!1),U(!1)},clickToToggle:!0,offset:8,alignment:k,fitAvailableHeight:!0,customZIndex:D})};var YO=function(e,t,r,n){var i=-1,o=null==e?0:e.length;for(n&&o&&(r=e[++i]);++i<o;)r=t(r,e[i],i,e);return r};var UO=function(e){return function(t,r,n){for(var i=-1,o=Object(t),a=n(t),s=a.length;s--;){var l=a[e?s:++i];if(!1===r(o[l],l,o))break}return t}},KO=UO(),qO=C$;var XO=y$;var GO=function(e,t){return function(r,n){if(null==r)return r;if(!XO(r))return e(r,n);for(var i=r.length,o=t?i:-1,a=Object(r);(t?o--:++o<i)&&!1!==n(a[o],o,a););return r}}((function(e,t){return e&&KO(e,t,qO)}));var ZO=YO,QO=GO,JO=GC,eF=function(e,t,r,n,i){return i(e,(function(e,i,o){r=n?(n=!1,e):t(r,e,i,o)})),r},tF=Oi;var rF=function(e,t,r){var n=tF(e)?ZO:eF,i=arguments.length<3;return n(e,JO(t),r,i,QO)},nF=Ei(rF);const iF=[["Afghanistan",["asia"],"af","93"],["Albania",["europe"],"al","355"],["Algeria",["africa","north-africa"],"dz","213"],["Andorra",["europe"],"ad","376"],["Angola",["africa"],"ao","244"],["Antigua and Barbuda",["america","carribean"],"ag","1268"],["Argentina",["america","south-america"],"ar","54","(..) ........"],["Armenia",["asia","ex-ussr"],"am","374",".. ......"],["Aruba",["america","carribean"],"aw","297"],["Australia",["oceania"],"au","61","(..) .... ...."],["Austria",["europe","eu-union"],"at","43"],["Azerbaijan",["asia","ex-ussr"],"az","994","(..) ... .. .."],["Bahamas",["america","carribean"],"bs","1242"],["Bahrain",["middle-east"],"bh","973"],["Bangladesh",["asia"],"bd","880"],["Barbados",["america","carribean"],"bb","1246"],["Belarus",["europe","ex-ussr"],"by","375","(..) ... .. .."],["Belgium",["europe","eu-union"],"be","32","... .. .. .."],["Belize",["america","central-america"],"bz","501"],["Benin",["africa"],"bj","229"],["Bhutan",["asia"],"bt","975"],["Bolivia",["america","south-america"],"bo","591"],["Bosnia and Herzegovina",["europe","ex-yugos"],"ba","387"],["Botswana",["africa"],"bw","267"],["Brazil",["america","south-america"],"br","55","(..) ........."],["British Indian Ocean Territory",["asia"],"io","246"],["Brunei",["asia"],"bn","673"],["Bulgaria",["europe","eu-union"],"bg","359"],["Burkina Faso",["africa"],"bf","226"],["Burundi",["africa"],"bi","257"],["Cambodia",["asia"],"kh","855"],["Cameroon",["africa"],"cm","237"],["Canada",["america","north-america"],"ca","1","(...) ... ...."],["Cape Verde",["africa"],"cv","238"],["Caribbean Netherlands",["america","carribean"],"bq","599",""],["Central African Republic",["africa"],"cf","236"],["Chad",["africa"],"td","235"],["Chile",["america","south-america"],"cl","56"],["China",["asia"],"cn","86",".. ........."],["Colombia",["america","south-america"],"co","57","... ... ...."],["Comoros",["africa"],"km","269"],["Congo",["africa"],"cd","243"],["Congo",["africa"],"cg","242"],["Costa Rica",["america","central-america"],"cr","506",".... ...."],["Côte d’Ivoire",["africa"],"ci","225",".. .. .. .."],["Croatia",["europe","eu-union","ex-yugos"],"hr","385"],["Cuba",["america","carribean"],"cu","53"],["Curaçao",["america","carribean"],"cw","599",""],["Cyprus",["europe","eu-union"],"cy","357",".. ......"],["Czech Republic",["europe","eu-union"],"cz","420","... ... ..."],["Denmark",["europe","eu-union","baltic"],"dk","45",".. .. .. .."],["Djibouti",["africa"],"dj","253"],["Dominica",["america","carribean"],"dm","1767"],["Dominican Republic",["america","carribean"],"do","1",""],["Ecuador",["america","south-america"],"ec","593"],["Egypt",["africa","north-africa"],"eg","20"],["El Salvador",["america","central-america"],"sv","503",".... ...."],["Equatorial Guinea",["africa"],"gq","240"],["Eritrea",["africa"],"er","291"],["Estonia",["europe","eu-union","ex-ussr","baltic"],"ee","372",".... ......"],["Ethiopia",["africa"],"et","251"],["Fiji",["oceania"],"fj","679"],["Finland",["europe","eu-union","baltic"],"fi","358",".. ... .. .."],["France",["europe","eu-union"],"fr","33",". .. .. .. .."],["French Guiana",["america","south-america"],"gf","594"],["French Polynesia",["oceania"],"pf","689"],["Gabon",["africa"],"ga","241"],["Gambia",["africa"],"gm","220"],["Georgia",["asia","ex-ussr"],"ge","995"],["Germany",["europe","eu-union","baltic"],"de","49",".... ........"],["Ghana",["africa"],"gh","233"],["Greece",["europe","eu-union"],"gr","30"],["Grenada",["america","carribean"],"gd","1473"],["Guadeloupe",["america","carribean"],"gp","590","",0],["Guam",["oceania"],"gu","1671"],["Guatemala",["america","central-america"],"gt","502",".... ...."],["Guinea",["africa"],"gn","224"],["Guinea-Bissau",["africa"],"gw","245"],["Guyana",["america","south-america"],"gy","592"],["Haiti",["america","carribean"],"ht","509",".... ...."],["Honduras",["america","central-america"],"hn","504"],["Hong Kong",["asia"],"hk","852",".... ...."],["Hungary",["europe","eu-union"],"hu","36"],["Iceland",["europe"],"is","354","... ...."],["India",["asia"],"in","91","..... ....."],["Indonesia",["asia"],"id","62"],["Iran",["middle-east"],"ir","98","... ... ...."],["Iraq",["middle-east"],"iq","964"],["Ireland",["europe","eu-union"],"ie","353",".. ......."],["Israel",["middle-east"],"il","972","... ... ...."],["Italy",["europe","eu-union"],"it","39","... ......."],["Jamaica",["america","carribean"],"jm","1876"],["Japan",["asia"],"jp","81",".. .... ...."],["Jordan",["middle-east"],"jo","962"],["Kazakhstan",["asia","ex-ussr"],"kz","7","... ... .. .."],["Kenya",["africa"],"ke","254"],["Kiribati",["oceania"],"ki","686"],["Kosovo",["europe","ex-yugos"],"xk","383"],["Kuwait",["middle-east"],"kw","965"],["Kyrgyzstan",["asia","ex-ussr"],"kg","996","... ... ..."],["Laos",["asia"],"la","856"],["Latvia",["europe","eu-union","ex-ussr","baltic"],"lv","371",".. ... ..."],["Lebanon",["middle-east"],"lb","961"],["Lesotho",["africa"],"ls","266"],["Liberia",["africa"],"lr","231"],["Libya",["africa","north-africa"],"ly","218"],["Liechtenstein",["europe"],"li","423"],["Lithuania",["europe","eu-union","ex-ussr","baltic"],"lt","370"],["Luxembourg",["europe","eu-union"],"lu","352"],["Macau",["asia"],"mo","853"],["Macedonia",["europe","ex-yugos"],"mk","389"],["Madagascar",["africa"],"mg","261"],["Malawi",["africa"],"mw","265"],["Malaysia",["asia"],"my","60",".. .... ...."],["Maldives",["asia"],"mv","960"],["Mali",["africa"],"ml","223"],["Malta",["europe","eu-union"],"mt","356"],["Marshall Islands",["oceania"],"mh","692"],["Martinique",["america","carribean"],"mq","596"],["Mauritania",["africa"],"mr","222"],["Mauritius",["africa"],"mu","230"],["Mexico",["america","central-america"],"mx","52","... ... ...."],["Micronesia",["oceania"],"fm","691"],["Moldova",["europe"],"md","373","(..) .. .. .."],["Monaco",["europe"],"mc","377"],["Mongolia",["asia"],"mn","976"],["Montenegro",["europe","ex-yugos"],"me","382"],["Morocco",["africa","north-africa"],"ma","212"],["Mozambique",["africa"],"mz","258"],["Myanmar",["asia"],"mm","95"],["Namibia",["africa"],"na","264"],["Nauru",["africa"],"nr","674"],["Nepal",["asia"],"np","977"],["Netherlands",["europe","eu-union"],"nl","31",".. ........"],["New Caledonia",["oceania"],"nc","687"],["New Zealand",["oceania"],"nz","64","... ... ...."],["Nicaragua",["america","central-america"],"ni","505"],["Niger",["africa"],"ne","227"],["Nigeria",["africa"],"ng","234"],["North Korea",["asia"],"kp","850"],["Norway",["europe","baltic"],"no","47","... .. ..."],["Oman",["middle-east"],"om","968"],["Pakistan",["asia"],"pk","92","... ......."],["Palau",["oceania"],"pw","680"],["Palestine",["middle-east"],"ps","970"],["Panama",["america","central-america"],"pa","507"],["Papua New Guinea",["oceania"],"pg","675"],["Paraguay",["america","south-america"],"py","595"],["Peru",["america","south-america"],"pe","51"],["Philippines",["asia"],"ph","63",".... ......."],["Poland",["europe","eu-union","baltic"],"pl","48","... ... ..."],["Portugal",["europe","eu-union"],"pt","351"],["Puerto Rico",["america","carribean"],"pr","1",""],["Qatar",["middle-east"],"qa","974"],["Réunion",["africa"],"re","262"],["Romania",["europe","eu-union"],"ro","40"],["Russia",["europe","asia","ex-ussr","baltic"],"ru","7","(...) ... .. .."],["Rwanda",["africa"],"rw","250"],["Saint Kitts and Nevis",["america","carribean"],"kn","1869"],["Saint Lucia",["america","carribean"],"lc","1758"],["Saint Vincent and the Grenadines",["america","carribean"],"vc","1784"],["Samoa",["oceania"],"ws","685"],["San Marino",["europe"],"sm","378"],["São Tomé and Príncipe",["africa"],"st","239"],["Saudi Arabia",["middle-east"],"sa","966"],["Senegal",["africa"],"sn","221"],["Serbia",["europe","ex-yugos"],"rs","381"],["Seychelles",["africa"],"sc","248"],["Sierra Leone",["africa"],"sl","232"],["Singapore",["asia"],"sg","65",".... ...."],["Slovakia",["europe","eu-union"],"sk","421"],["Slovenia",["europe","eu-union","ex-yugos"],"si","386"],["Solomon Islands",["oceania"],"sb","677"],["Somalia",["africa"],"so","252"],["South Africa",["africa"],"za","27"],["South Korea",["asia"],"kr","82","... .... ...."],["South Sudan",["africa","north-africa"],"ss","211"],["Spain",["europe","eu-union"],"es","34","... ... ..."],["Sri Lanka",["asia"],"lk","94"],["Sudan",["africa"],"sd","249"],["Suriname",["america","south-america"],"sr","597"],["Swaziland",["africa"],"sz","268"],["Sweden",["europe","eu-union","baltic"],"se","46","(...) ... ..."],["Switzerland",["europe"],"ch","41",".. ... .. .."],["Syria",["middle-east"],"sy","963"],["Taiwan",["asia"],"tw","886"],["Tajikistan",["asia","ex-ussr"],"tj","992"],["Tanzania",["africa"],"tz","255"],["Thailand",["asia"],"th","66"],["Timor-Leste",["asia"],"tl","670"],["Togo",["africa"],"tg","228"],["Tonga",["oceania"],"to","676"],["Trinidad and Tobago",["america","carribean"],"tt","1868"],["Tunisia",["africa","north-africa"],"tn","216"],["Turkey",["europe"],"tr","90","... ... .. .."],["Turkmenistan",["asia","ex-ussr"],"tm","993"],["Tuvalu",["asia"],"tv","688"],["Uganda",["africa"],"ug","256"],["Ukraine",["europe","ex-ussr"],"ua","380","(..) ... .. .."],["United Arab Emirates",["middle-east"],"ae","971"],["United Kingdom",["europe","eu-union"],"gb","44",".... ......"],["United States",["america","north-america"],"us","1","(...) ... ...."],["Uruguay",["america","south-america"],"uy","598"],["Uzbekistan",["asia","ex-ussr"],"uz","998",".. ... .. .."],["Vanuatu",["oceania"],"vu","678"],["Vatican City",["europe"],"va","39",".. .... ...."],["Venezuela",["america","south-america"],"ve","58"],["Vietnam",["asia"],"vn","84"],["Yemen",["middle-east"],"ye","967"],["Zambia",["africa"],"zm","260"],["Zimbabwe",["africa"],"zw","263"]],oF=(e,t,r,n)=>r?e+"".padEnd(t.length,".")+" "+r:e+"".padEnd(t.length,".")+" "+n;var aF;!function(e){e.getCountries=()=>[].concat(...iF.map((e=>({name:e[0],regions:e[1],iso2:e[2],countryCode:e[3],format:oF("+",e[3],e[4],"... ... ... ... ..")})))),e.formatNumber=(e="",t)=>{if(!t)return e;const r=e.replace(/[\s()]+/g,""),{format:n}=t,i=n.split(" ");i.shift();const o=i.join(" ");return nF(o,((e,t)=>{if(0===e.remainingText.length)return e;if("."!==t)return{formattedText:e.formattedText+t,remainingText:e.remainingText};const r=e.remainingText.slice(0,1),n=e.remainingText.slice(1);return{formattedText:e.formattedText+r,remainingText:n}}),{formattedText:"",remainingText:r}).formattedText}}(aF||(aF={}));const sF=r=>{var{onChange:n,value:i,allowClear:o,onClear:a,onBlur:s,error:l,fixedCountry:c=!1,optionPlaceholder:d="Select",optionSearchPlaceholder:u,enableSearch:f,onHideOptions:h,onShowOptions:p,placeholder:g,autoComplete:m}=r,b=X(r,["onChange","value","allowClear","onClear","onBlur","error","fixedCountry","optionPlaceholder","optionSearchPlaceholder","enableSearch","onHideOptions","onShowOptions","placeholder","autoComplete"]);const[v]=t.useState(aF.getCountries()),[y,x]=t.useState(void 0),[w,$]=t.useState(""),C=t.useRef(null),S=id({ref:C,formatter:e=>aF.formatNumber(e.replace(/[^0-9]/g,""),y)});t.useEffect((()=>{const e=v.filter((e=>e.countryCode===lF(null==i?void 0:i.countryCode)))[0];x(e),$(aF.formatNumber(null==i?void 0:i.number,e))}),[i]);const j=e=>{D(w,e),n&&k(w,e)},k=(e,t)=>{const r=aF.formatNumber(e,t);null==n||n({number:r.replace(/[\s()]+/g,""),countryCode:t&&cF(t.countryCode)})},D=(e,t)=>{$(aF.formatNumber(e,t)),x(t)};return e.jsx(ZS,Object.assign({ref:C,value:w,onChange:()=>{const e=S();if(!e)return;const{nextValue:t,updateCaretPosition:r}=e;r(),D(t,y),n&&k(t,y)},allowClear:o&&!!w,onClear:()=>{a?a():$("")},onBlur:s,error:l,placeholder:g,addon:c?{type:"label",attributes:{value:cF(null==y?void 0:y.countryCode)}}:{type:"list",attributes:{placeholder:d,options:v,selectedOption:y,enableSearch:f,searchPlaceholder:u,valueExtractor:e=>`+${e.countryCode}`,listExtractor:e=>({title:e.name,secondaryLabel:cF(e.countryCode)}),onSelectOption:j,onHideOptions:h,onShowOptions:p}},inputMode:"numeric",autoComplete:m},b))},lF=e=>e?e.replace("+",""):"",cF=e=>e?e.includes("+")?e:`+${e}`:"",dF=({className:r,"data-testid":n,selectedOption:i,minimumCharacters:o=3,fetchOptions:a,placeholder:s="Enter here...",readOnly:l=!1,disabled:c=!1,error:d,valueExtractor:u,listExtractor:f,displayValueExtractor:h,onSelectOption:p})=>{const[g,m]=t.useState((()=>i?z(i):"")),[b,v]=t.useState((()=>i?z(i):"")),[y,x]=t.useState([]),[w,$]=t.useState(!0),[C,S]=t.useState(!1),[j,k]=t.useState(!!i),[D,T]=t.useState(i),E=t.useRef(a),O=e=>G(void 0,void 0,void 0,(function*(){S(!1),$(!0);try{const t=yield E.current(e);v(e),x(t),$(!1)}catch(e){S(!0)}})),F=t.useCallback(Wu((e=>O(e)),500,{leading:!1,trailing:!0}),[]);t.useEffect((()=>{E.current=a}),[a]),t.useEffect((()=>{g&&g.length>=o&&g!==b?F(g):F.cancel(),""===g&&D&&(p&&p(void 0,void 0),M(),T(void 0)),i&&g!==z(i)&&k(!1)}),[g,i]),t.useEffect((()=>{m(i?z(i):""),M(i),T(i)}),[i]);const I=e=>{m(e.target.value)},_=(e,t)=>{p&&p(e,t)},M=e=>{v(e?z(e):""),k(!!e),x([]),$(!0)},A=()=>{m(""),p&&p(void 0,void 0),M()},B=()=>{j||D?(M(D),m(z(D)),p&&p(D,P(D)),T(D)):A()},R=()=>!!g&&g.length>=o&&!j,z=e=>e?h?h(e):e.toString():"",P=e=>{if(e)return u?u(e):e},L=()=>e.jsx(Rx,{type:"text",value:g,onChange:I,placeholder:s,readOnly:l,disabled:c,allowClear:!0,onClear:A,styleType:"no-border",onBlur:g.length<o?B:void 0});return e.jsxs(ph,{className:r,show:R(),error:d&&!R(),disabled:c,readOnly:l,testId:n,onBlur:B,children:[l?e.jsx(e.Fragment,{children:L()}):e.jsx(sh,{children:L()}),!l&&R()&&e.jsx(dh,{}),e.jsx(BS,{listItems:y,onSelectItem:_,valueExtractor:u,listExtractor:f,itemsLoadState:C?"fail":w?"loading":"success",visible:R(),disableItemFocus:!0,onRetry:()=>O(g),itemTruncationType:"end",itemMaxLines:1,labelDisplayType:"next-line"})]})},uF=K.default.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
`,fF=K.default(_x)`
    position: absolute;
    right: 0;
    padding-left: ${Zs["spacing-8"]};
    margin-right: 0;
`,hF=K.default(ah)`
    // space for clear icon
    padding-right: calc(1.25rem + ${Zs["spacing-16"]});
`,pF=r=>{var{selectedOptions:n,placeholders:i={from:"Select",to:"Select"},options:o,disabled:a,className:s,readOnly:l,error:c,"data-testid":d,id:u,enableSearch:f=!1,searchFunction:h,searchPlaceholder:p,valueExtractor:g,valueToStringFunction:m,listExtractor:b,displayValueExtractor:v,onSelectOption:y,listStyleWidth:x,onShowOptions:w,onHideOptions:$,onRetry:C,optionsLoadState:S={from:"success",to:"success"},optionTruncationType:j="middle",renderCustomSelectedOption:k,renderListItem:D,renderCustomCallToAction:T}=r,E=X(r,["selectedOptions","placeholders","options","disabled","className","readOnly","error","data-testid","id","enableSearch","searchFunction","searchPlaceholder","valueExtractor","valueToStringFunction","listExtractor","displayValueExtractor","onSelectOption","listStyleWidth","onShowOptions","onHideOptions","onRetry","optionsLoadState","optionTruncationType","renderCustomSelectedOption","renderListItem","renderCustomCallToAction"]);const[O,F]=t.useState(),[I,_]=t.useState(),M=t.useRef(null),A={from:t.useRef(null),to:t.useRef(null)},[B,R]=t.useState("none");t.useEffect((()=>{F(null==n?void 0:n.from),_(null==n?void 0:n.to)}),[n]);const z=e=>t=>{t.stopPropagation(),t.preventDefault(),a||l||R("from"===e?"from":"to"===e&&O?"to":"from")},P=e=>{var t;const r="from"===e?O:I;if(!r)return"";if(v)return v(r);if(g){const e=g(r);return m?m(e):null!==(t=null==e?void 0:e.toString())&&void 0!==t?t:""}return r.toString()},L=(e,t)=>{if("middle"===j){let r=0;return A[e]&&A[e].current&&(r=A[e].current.getBoundingClientRect().width),Jc.truncateOneLine(t,r,120,8)}return t},N=e=>{!e&&$&&$(),e&&w&&w()},H=t=>{const r="from"===t?O:I;return r?k?k(r):e.jsx(fh,{truncateType:j,children:L(t,P(t))}):e.jsx(hh,{truncateType:j,children:L(t,i[t]||"")})},W=t=>e.jsx(uh,{onClick:z(t),ref:A[t],$disabled:a,children:H(t)});return e.jsxs(ph,{show:"none"!==B,error:c&&!("none"!==B),disabled:a,readOnly:l,testId:d,onBlur:()=>{N(!1),R("none"),O&&I||(_(void 0),F(void 0))},className:s,children:[e.jsxs(uF,{children:[e.jsx(hF,Object.assign({type:"button","data-testid":u||"selector",disabled:a,ref:M,onClick:z()},E,{children:e.jsxs(Hh,{currentActive:(()=>{switch(B){case"from":return"start";case"to":return"end";case"none":return B}})(),children:[W("from"),W("to")]})})),"none"===B&&O&&I&&!l&&!a&&e.jsx(fF,{onClick:e=>{e.stopPropagation(),F(void 0),_(void 0),y&&y({from:void 0,to:void 0},void 0)},type:"button","aria-label":"Clear",children:e.jsx(Mx,{"aria-hidden":!0})})]}),"none"!==B&&e.jsx(dh,{}),(()=>{if("none"===B)return null;const t=o[B];if(t&&t.length>0){const r="from"===B?O:I;return e.jsx(BS,{listItems:t,onSelectItem:(e,t)=>((e,t,r)=>{var n;"from"===r?F(e):_(e),N(!1),M&&(null===(n=M.current)||void 0===n||n.focus()),y&&y({[r]:e},t),"from"===r?(_(void 0),R("to"),N(!0)):R("none")})(e,t,B),onDismiss:()=>(()=>{var e;R("none"),N(!1),M&&(null===(e=M.current)||void 0===e||e.focus()),O&&I||(_(void 0),F(void 0))})(),valueExtractor:g,listExtractor:b,listStyleWidth:x,visible:!0,enableSearch:f,searchPlaceholder:p,searchFunction:h,"data-testid":`${B}-dropdown-list`,selectedItems:r?[r]:[],onRetry:C,itemsLoadState:S[B],itemTruncationType:j,renderListItem:D,renderCustomCallToAction:T})}return null})()]})},gF=({selectedOption:r,placeholder:n="Select",options:i,disabled:o,error:a,className:s,"data-testid":l,id:c,enableSearch:d=!1,searchFunction:u,searchPlaceholder:f,valueExtractor:h,valueToStringFunction:p,listExtractor:g,displayValueExtractor:m,onSelectOption:b,onShowOptions:v,onHideOptions:y,onRetry:x,optionsLoadState:w="success",optionTruncationType:$="end",renderCustomSelectedOption:C,renderListItem:S,hideNoResultsDisplay:j,renderCustomCallToAction:k,onBlur:D,variant:T="default",readOnly:E,alignment:O,dropdownZIndex:F})=>{const[I,_]=t.useState(r),[M,A]=t.useState(!1),[B,R]=t.useState(!1),[z]=t.useState((()=>Qc.generate())),P=t.useRef(null),L=t.useRef(null),N=t.useRef(null);t.useEffect((()=>{_(r)}),[r]);const H=(e,t)=>{var r;null===(r=L.current)||void 0===r||r.focus(),_(e),A(!1),q(!1),null==b||b(e,t)},W=()=>{M&&(A(!1),q(!1))},V=()=>{B||M||R(!0)},Y=e=>{B&&!M&&P.current&&!P.current.contains(e.relatedTarget)&&(R(!1),null==D||D())},U=()=>{var e;if(!I)return"";if(m)return m(I);if(h){const t=h(I);return p?p(t):null!==(e=null==t?void 0:t.toString())&&void 0!==e?e:""}return I.toString()},K=e=>{if("middle"===$){let t=0;return N&&N.current&&(t=N.current.getBoundingClientRect().width),Jc.truncateOneLine(e,t,120,8)}return e},q=e=>{e?null==v||v():null==y||y()};return e.jsx(tE,{children:e.jsx(yh,{enabled:!E&&!o,isOpen:M,renderElement:()=>e.jsx(Mf,{className:s,"data-testid":l,id:c,ref:P,tabIndex:-1,onFocus:V,onBlur:Y,$focused:B,$disabled:o,$readOnly:E,$error:a,children:e.jsx(kE,{ref:L,disabled:o,expanded:M,listboxId:z,popupRole:"listbox",readOnly:E,variant:T,children:e.jsx(uh,{ref:N,$disabled:o,children:I?C?C(I):e.jsx(fh,{truncateType:$,$variant:T,children:K(U())}):e.jsx(hh,{truncateType:$,$variant:T,children:n})})})}),renderDropdown:({elementWidth:t})=>e.jsx(CE,{listboxId:z,listItems:i,onSelectItem:H,onDismiss:W,valueExtractor:h,listExtractor:g,enableSearch:d,searchPlaceholder:f,searchFunction:u,selectedItems:I?[I]:[],onRetry:x,itemsLoadState:w,itemTruncationType:$,renderListItem:S,hideNoResultsDisplay:j,renderCustomCallToAction:k,variant:T,width:t}),onOpen:()=>{A(!0),q(!0),R(!0)},onClose:e=>{A(!1),q(!1),"click"!==e&&(R(!1),null==D||D())},onDismiss:()=>{var e;null===(e=L.current)||void 0===e||e.focus(),A(!1),q(!1)},clickToToggle:!0,offset:8,alignment:O,fitAvailableHeight:!0,customZIndex:F})})},mF=K.default.div`
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
`,bF=K.default.div`
    display: flex;
    align-items: baseline;
`,vF=K.default.div`
    margin: 0 0.5rem;
`,yF=K.default.div`
    ${e=>"small"===e.$variant?qs["body-md-regular"]:qs["body-baseline-regular"]}
    text-align: left;
    ${e=>{if("middle"!==e.truncateType)return i.css`
                    ${il(1)}
                `}}
    overflow: hidden;
`,xF=K.default(yF)`
    color: ${Ks["text-subtler"]};
`,wF=r=>{var{alignment:n="left",className:i,disabled:o,dropdownZIndex:a,error:s,histogramSlider:l,id:c,onBlur:d,onChange:u,onChangeEnd:f,optionTruncationType:h="end",placeholder:p="Select",rangeLabelPrefix:g,rangeLabelSuffix:m,readOnly:b,renderRangeLabel:v,value:y}=r,x=X(r,["alignment","className","disabled","dropdownZIndex","error","histogramSlider","id","onBlur","onChange","onChangeEnd","optionTruncationType","placeholder","rangeLabelPrefix","rangeLabelSuffix","readOnly","renderRangeLabel","value"]);const{interval:w,bins:$=[],renderEmptyView:C,ariaLabels:S}=l,[j,k]=t.useState(H()),[D,T]=t.useState(!1),[E,O]=t.useState(!1),[F]=t.useState((()=>Qc.generate())),I=$.map((e=>e.minValue)),_=Math.min(...I),M=t.useRef(null),A=t.useRef(null),B=t.useRef(null),R=x["data-testid"]||"select-histogram";t.useEffect((()=>{y!==j&&k(H())}),[y]);const z=e=>{k(e),null==u||u(e)},P=e=>{k(e),null==f||f(e)},L=()=>{E||D||O(!0)},N=e=>{E&&!D&&M.current&&!M.current.contains(e.relatedTarget)&&(O(!1),null==d||d())};function H(){return null!=y?y:[_,_+w]}const W=t=>v?v(t):e.jsxs(exports.Typography.BodyBL,{children:[g,t,m]});return e.jsx(tE,{children:e.jsx(yh,{enabled:!b&&!o,isOpen:D,renderElement:()=>e.jsx(Mf,{className:i,"data-testid":R,id:c,ref:M,tabIndex:-1,onFocus:L,onBlur:N,$focused:E,$disabled:o,$readOnly:b,$error:s,children:e.jsx(kE,{ref:A,disabled:o,expanded:D,listboxId:F,popupRole:"dialog",readOnly:b,variant:"default",children:e.jsx(uh,{ref:B,$disabled:o,children:I&&0!==I.length?e.jsxs(bF,{children:[W(j[0]),e.jsx(vF,{children:"-"}),W(j[1])]}):e.jsx(xF,{truncateType:h,$variant:"default",children:p})})})}),renderDropdown:({elementWidth:t})=>e.jsx(mF,{style:{width:t},children:e.jsx(Fx,{interval:w,value:j,bins:$,onChange:z,onChangeEnd:P,showRangeLabels:!1,renderEmptyView:C,ariaLabels:S})}),onOpen:()=>{T(!0)},onClose:()=>{T(!1)},onDismiss:()=>{var e;null===(e=A.current)||void 0===e||e.focus(),T(!1)},clickToToggle:!0,offset:8,alignment:n,fitAvailableHeight:!0,customZIndex:a})})},$F=r=>{var{value:n,ariaLabel:i,onChange:o,onChangeEnd:a}=r,s=X(r,["value","ariaLabel","onChange","onChangeEnd"]);const[l,c]=t.useState(d());t.useEffect((()=>{n!==l[0]&&c(d())}),[n]);function d(){return null!=n?[n]:[0]}return e.jsx(jx,Object.assign({},s,{value:l,numOfThumbs:1,onChange:e=>{const[t]=e;c([t]),null==o||o(t)},onChangeEnd:e=>{const[t]=e;c([t]),null==a||a(t)},ariaLabels:i?[i]:void 0}))},CF=K.default.p`
    text-align: right;
    ${qs["body-sm-semibold"]}
    color: ${Ks["text-subtler"]};
`,SF=({value:r,maxLength:n,renderCustomCounter:i})=>{const[o,a]=t.useState("");t.useEffect((()=>{a(s(`${r||""}`))}),[r,n]);const s=e=>{if(i)return i(n,e.toString().length);{const t=n-e.toString().length;return 1===t?`${t} character left`:`${t.toLocaleString()} characters left`}};return e.jsx(e.Fragment,{children:Y.default.isValidElement(o)?o:e.jsx(CF,{"data-testid":"counter-label",children:o})})},jF=K.default.div`
    display: flex;
    flex-direction: column;
`,kF=K.default.textarea`
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
`,DF=Y.default.forwardRef(((r,n)=>{var{value:i,disabled:o,error:a,rows:s=5,prefix:l,transformValue:c,onChange:d,maxLength:u}=r,f=X(r,["value","disabled","error","rows","prefix","transformValue","onChange","maxLength"]);const[h,p]=t.useState(i);t.useEffect((()=>{p(i)}),[i]);return e.jsx(kF,Object.assign({ref:n,disabled:o,value:l?l+(null!=h?h:""):h,onChange:e=>{let t=e.target.value;if(l){t.startsWith(l)||(t=l+t.trimStart()),t.length<l.length&&(t=l);if((e.target.selectionStart||0)<l.length)return void e.preventDefault();const r=t.slice(l.length),n=c?c(r):r;if(p(n),e.target.value=l+n,d){const t=Object.assign(Object.assign({},e),{target:Object.assign(Object.assign({},e.target),{value:n})});d(t)}}else{const r=c?c(null!=t?t:""):t;p(r),e.target.value=r,d&&d(e)}},onKeyDown:e=>{if(!l)return;const{selectionStart:t}=e.currentTarget;"Backspace"===e.key&&t<=l.length&&e.preventDefault(),"ArrowLeft"===e.key&&t<=l.length&&e.preventDefault(),"Home"===e.key&&(e.preventDefault(),requestAnimationFrame((()=>{e.currentTarget.setSelectionRange(l.length,l.length)})))},$error:a,rows:s,maxLength:l&&u?l.length+u:u},f))})),TF=Y.default.forwardRef(((r,n)=>{var{value:i,disabled:o,rows:a=5,onChange:s,transformValue:l,prefix:c,maxLength:d,renderCustomCounter:u}=r,f=X(r,["value","disabled","rows","onChange","transformValue","prefix","maxLength","renderCustomCounter"]);const[h,p]=t.useState(i);t.useEffect((()=>{p(i)}),[i]);return e.jsxs(jF,{children:[e.jsx(DF,Object.assign({ref:n,disabled:o,value:h,rows:a||5,onChange:e=>{const t=e.target.value;p(t),s&&s(e)},prefix:c,transformValue:l,maxLength:d},f)),d&&e.jsx(SF,{value:h,maxLength:d,renderCustomCounter:u})]})})),EF=K.default.div`
    display: flex;
    justify-content: flex-end;
    margin-top: ${Zs["spacing-4"]};
`,OF=K.default.div`
    display: flex;
    flex: 1;
    margin-right: ${Zs["spacing-12"]};
`,FF=K.default(Jy)`
    margin-top: 0;
`,IF=Y.default.forwardRef(((r,n)=>{const{label:i,value:o,errorMessage:a,id:s="form-textarea","data-error-testid":l,"data-testid":c,onChange:d,layoutType:u,mobileCols:f,tabletCols:h,desktopCols:p,xxsCols:g,xsCols:m,smCols:b,mdCols:v,lgCols:y,xlCols:x,xxlCols:w,transformValue:$,prefix:C=""}=r,S=X(r,["label","value","errorMessage","id","data-error-testid","data-testid","onChange","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","transformValue","prefix"]),[j,k]=t.useState(o);t.useEffect((()=>{k(o)}),[o]);return e.jsxs(sx,{id:s,label:i,disabled:S.disabled,layoutType:u,mobileCols:f,tabletCols:h,desktopCols:p,xxsCols:g,xsCols:m,smCols:b,mdCols:v,lgCols:y,xlCols:x,xxlCols:w,children:[e.jsx(DF,Object.assign({id:`${s}-base`,"data-testid":c||s,value:j,error:!!a,onChange:e=>{const t=e.target.value;k(t),d&&d(e)},ref:n,prefix:C,transformValue:$},S)),a||S.maxLength?e.jsxs(EF,{children:[a&&e.jsx(OF,{children:e.jsx(FF,{"data-testid":l||(s?`${s}-error-message`:"error-message"),children:a})}),S.maxLength&&e.jsx(SF,{value:j,maxLength:S.maxLength,renderCustomCounter:S.renderCustomCounter})]}):e.jsx(e.Fragment,{})]})})),_F=K.default.div`
    position: relative;
`,MF=K.default(Af)`
    height: 3rem;
    gap: ${Zs["spacing-8"]};
`,AF=K.default(Bf)`
    display: block;
    width: 100%;
    flex: 1;
`,BF=K.default.div`
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
`,RF=i.css`
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
`,zF=K.default.ol`
    ${RF}

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
`,PF=K.default.ul`
    ${RF}

    margin-left: 2.5rem;
    list-style-type: ${e=>e.$bulletType||"disc"};
`,LF=t=>{var{size:r,bulletType:n,bottomMargin:i,children:o}=t,a=X(t,["size","bulletType","bottomMargin","children"]);return e.jsx(PF,Object.assign({$size:r,$bulletType:n,$bottomMargin:i},a,{children:o}))};LF.displayName="TextList.Ul";const NF=t=>{var{size:r,counterType:n,counterSeparator:i,bottomMargin:o,children:a}=t,s=X(t,["size","counterType","counterSeparator","bottomMargin","children"]);return e.jsx(zF,Object.assign({$size:r,$counterType:n,$counterSeparator:i,$bottomMargin:o},s,{children:a}))};NF.displayName="TextList.Ol";const HF={Ul:LF,Ol:NF},WF=K.default.div`
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

                            &:has(${qF}:hover) {
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

                        &:has(${qF}:hover) {
                            background: ${Ks["bg-selected-hover"]};

                            & ${YF} {
                                color: ${Ks["text-selected-hover"]};
                            }

                            & ${nI} {
                                color: ${Ks["icon-selected-hover"]};
                            }
                        }
                    `:i.css`
                    border: none;

                    &:has(${qF}:hover) {
                        background: ${Ks["bg-hover-subtle"]};
                    }
                `:e.$error?e.$disabled?i.css`
                            border-color: ${Ks["border-error"]};
                        `:i.css`
                            border-color: ${Ks["border-error"]};

                            &:has(${qF}:hover) {
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

                        &:has(${qF}:hover) {
                            background: ${Ks["bg-selected-hover"]};

                            & ${YF} {
                                color: ${Ks["text-selected-hover"]};
                            }

                            & ${nI} {
                                color: ${Ks["icon-selected-hover"]};
                            }
                        }
                    `:i.css`
                    border-color: ${Ks.border};

                    &:has(${qF}:hover) {
                        background: ${Ks["bg-hover-subtle"]};
                    }
                `}
`,VF=K.default.input`
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
`,YF=K.default.div`
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
`,UF=K.default.label`
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
`,KF=K.default.div`
    ${qs["body-md-regular"]}
    margin-top: 0.5rem;

    z-index: 1; // forces sublabel to render above the input
    pointer-events: none; // to allow click events to be passed to the input

    strong,
    b {
        ${qs["body-md-semibold"]}
    }
`,qF=K.default.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`,XF=K.default.div`
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
    padding: ${e=>e.$addPadding?"0.6875rem 0rem 0.6875rem 1rem":"0.6875rem 1rem"};
`,GF=K.default.button`
    color: ${e=>e.$disabled?Ks["text-disabled"]:Ks["text-error"]};
    white-space: nowrap;
    ${qs["body-md-semibold"]}
    height: fit-content;
    padding: 0.6875rem 1rem 0.6875rem 0.5rem;
    border: none;
    background: none;

    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
`,ZF=K.default.button`
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
`,QF=K.default.div`
    width: 100%;
    color: ${e=>e.$disabled?Ks["text-disabled"]:Ks["text-error"]};
    border: none;
    background: ${Ks.bg};
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem 0.5rem 1rem;
`,JF=K.default(rc)`
    width: 100%;
    user-select: none;
`,eI=K.default.div`
    padding: 0 1rem;
    padding-top: 0.6875rem;
    padding-bottom: ${e=>e.$isFinalItem?"0.6875rem":"0.5rem"};
    background-color: ${Ks.bg};
    ${ql({textSize:"body-md"})}

    ${e=>e.$disabled?i.css`
                color: ${Ks["text-disabled"]};
            `:e.$selected?i.css`
                color: ${Ks["text-selected"]};
            `:i.css`
                color: ${Ks.text};
            `}
`,tI=K.default(exports.Typography.BodyMD)`
    color: ${e=>e.$disabled?Ks["text-disabled"]:Ks["text-error"]};
`,rI=K.default(HF.Ul)`
    color: ${e=>e.$disabled?Ks["text-disabled"]:Ks["text-error"]};
`,nI=K.default((({type:t,active:r=!1,disabled:n,className:i})=>{let o;switch(t){case"checkbox":o=r?e.jsx(j.SquareTickFillIcon,{}):e.jsx(S.SquareIcon,{});break;case"radio":o=r?e.jsx(O.CircleDotIcon,{}):e.jsx(E.CircleIcon,{});break;case"tick":o=e.jsx(k.TickIcon,{});break;case"cross":o=e.jsx(m.CrossIcon,{});break;default:o=null}return e.jsx(BF,{className:i,$active:r,$disabled:n,children:o})}))`
    ${e=>e.$disabled?e.$selected?i.css`
                    color: ${Ks["icon-selected-disabled"]};
                `:i.css`
                    color: ${Ks["icon-disabled-subtle"]};
                `:e.$selected?i.css`
                color: ${Ks["icon-selected"]};
            `:i.css`
            color: ${Ks["icon-subtle"]};
        `};
`,iI=({type:r="checkbox",indicator:i,checked:o,styleType:a="default",children:s,childrenMaxLines:l,subLabel:c,disabled:d,error:u,name:h,id:p,className:g,compositeSection:m,removable:b,onRemove:v,"data-testid":y,onChange:x,useContentWidth:w})=>{const{collapsible:$=!0,errors:C,children:S,initialExpanded:j}=m||{},[k,D]=t.useState(o),[T,E]=t.useState(!!j),O=t.useMemo((()=>{const e=Array.isArray(C)&&(null==C?void 0:C.length)>0,t=!Array.isArray(C)&&!!C;return e||t}),[C]),[F]=t.useState(Qc.generate()),I=p?`${p}`:`tg-${F}`,_=t.useRef(null);t.useEffect((()=>{D(o)}),[o]),t.useEffect((()=>{k&&E(null==j||j)}),[k]);const M=e=>{if(!d){if(x)return void x(e);switch(r){case"checkbox":D((e=>!e));break;case"radio":case"yes":case"no":k||D(!0)}}},A=()=>{d||E(!T)},B=()=>{d||!v||v()},R=()=>{let t;switch(r){case"yes":t="tick";break;case"no":t="cross";break;case"checkbox":case"radio":t=r}return e.jsx(nI,{type:t,active:k,disabled:d,$selected:k,$disabled:d})},z=()=>{if(!c)return null;let t;return t="function"==typeof c?c():c,e.jsx(KF,{"data-id":"toggle-sublabel",children:t})},P=()=>{const t=!T&&!O;return $&&e.jsxs(ZF,{$paddingTopRequired:t,disabled:d,onClick:A,"data-testid":T?"collapse-button":"expand-button",children:[T?"Show less":"Show more",T?e.jsx(n.ChevronUpIcon,{"aria-hidden":!0}):e.jsx(f.ChevronDownIcon,{"aria-hidden":!0})]})},L=t=>e.jsxs(e.Fragment,{children:[e.jsx(tI,{weight:"semibold",$disabled:d,children:"Error"}),e.jsx(rI,{$disabled:d,children:null==t?void 0:t.map(((t,r)=>e.jsx("li",{id:`${I}-error-list-item-${r}`,children:e.jsx(tI,{weight:"semibold",$disabled:d,children:t})},r)))})]});return e.jsxs(WF,{$selected:k,$disabled:d,className:g,$styleType:a,$error:u,$indicator:i,$useContentWidth:w,id:p,"data-testid":y,children:[e.jsxs(qF,{id:`${I}-header-container`,$disabled:d,$error:u,$selected:k,$indicator:i,$styleType:a,children:[e.jsxs(XF,{$addPadding:b,children:[e.jsx(VF,{ref:_,name:h,id:`${I}-input`,type:"checkbox"===r?"checkbox":"radio","data-testid":"toggle-input",disabled:d,onChange:M,checked:k}),i&&R(),e.jsxs(YF,{$selected:k,$disabled:d,children:[e.jsx(UF,{htmlFor:`${I}-input`,"data-testid":`${I}-toggle-label`,$maxLines:l,children:s}),c&&z()]})]}),b&&e.jsx(GF,{type:"button",$disabled:d,onClick:B,id:`${I}-remove-button`,children:"Remove"})]}),S&&e.jsxs("div",{children:[(!$||T)&&e.jsx(eI,{"data-id":"toggle-composite-children",$isFinalItem:!$,$disabled:d,children:S}),$&&!T&&O&&e.jsx(QF,{$disabled:d,onClick:A,id:`${I}-error-alert`,children:e.jsx(JF,{type:d?"description":"error",className:g,showIcon:!0,children:Array.isArray(C)?L(C):C})}),P()]})]})},oI=K.default(Di.div)`
    position: absolute;
    top: calc(3rem + ${Zs["spacing-8"]});
    left: 0;
    overflow: hidden;
    z-index: 1;

    ${el.MaxWidth.xxs} {
        max-width: 100%;
    }
`,aI=K.default.div`
    position: relative;
    width: 100%;
    padding: ${Zs["spacing-8"]} ${Zs["spacing-20"]}
        ${Zs["spacing-24"]} ${Zs["spacing-20"]};
    display: flex;
    flex-direction: column;
    background: ${Ks.bg};
    border: ${Gs["width-010"]} ${Gs.solid} ${Ks.border};
    border-radius: ${Qs.sm};
`,sI=K.default.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${el.MaxWidth.xxs} {
        flex-direction: column;
        width: 100%;
    }
`,lI=K.default.div`
    display: flex;
    justify-content: flex-end;
    margin-top: ${Zs["spacing-16"]};
    gap: ${Zs["spacing-8"]} ${Zs["spacing-16"]};

    ${el.MaxWidth.xxs} {
        flex-direction: column-reverse; // FIXME: this breaks tab focus
        margin-top: ${Zs["spacing-32"]};
    }
`,cI=K.default.div`
    display: flex;
    align-items: center;
    margin-right: ${Zs["spacing-32"]};

    ${el.MaxWidth.xxs} {
        margin-right: 0;
        width: 100%;
    }
`,dI=K.default.div`
    display: flex;
    gap: ${Zs["spacing-8"]};

    ${el.MaxWidth.lg} {
        flex-direction: column;
    }

    ${el.MaxWidth.xxs} {
        flex-direction: row;
        width: 100%;
    }
`,uI=K.default.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${el.MaxWidth.xxs} {
        width: 6rem;
    }
`,fI=K.default(nl)`
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
`,hI=K.default(exports.Typography.BodyBL)`
    flex-shrink: 0;
    width: 1.5rem;
    text-align: center;
`,pI=K.default(Mf)`
    height: calc(3rem - 2px);
    width: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    ${el.MaxWidth.xxs} {
        width: 100%;
    }
`,gI=K.default(Bf)`
    text-align: center;
    width: 100%;

    :focus::placeholder {
        color: transparent;
    }
`,mI=K.default(iI)`
    min-width: 5rem;
    flex: 1;
`,bI=K.default(Hl.Small)`
    width: 7rem;

    ${el.MaxWidth.sm} {
        flex: 1;
    }

    ${el.MaxWidth.xxs} {
        width: 100%;
    }
`;var vI,yI,xI;!function(e){e.HOUR_UP="hour-up",e.HOUR_DOWN="hour-down",e.MINUTE_UP="minute-up",e.MINUTE_DOWN="minute-down"}(vI||(vI={})),function(e){e.HOUR="hour",e.MINUTE="minute"}(yI||(yI={})),function(e){e.AM="am",e.PM="pm"}(xI||(xI={}));const wI=({id:r,value:i,show:o,format:a,onChange:s,onCancel:l})=>{var c;const d=Ku.getTimeValues(a,i),[u,h]=t.useState(d.hour),[p,g]=t.useState(d.minute),[m,b]=t.useState(d.period),v=t.useRef(null),y=t.useRef(null),x=qe();t.useEffect((()=>{if(o&&v.current&&v.current.focus(),o){const{hour:e,minute:t,period:r}=Ku.getTimeValues(a,i);h(e),g(t),b(r)}}),[o,i,a]),t.useEffect((()=>{const e=v.current,t=y.current;return e&&e.addEventListener("keydown",w),t&&t.addEventListener("keydown",w),()=>{e&&e.removeEventListener("keydown",w),t&&t.removeEventListener("keydown",w)}}),[]);const w=e=>{["Digit0","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Tab","Backspace","Delete","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)||["Backspace","0","1","2","3","4","5","6","7","8","9"].includes(e.key)||e.preventDefault()},$=t.useCallback((e=>{switch(e.currentTarget.name){case vI.MINUTE_UP:g(Ku.updateMinutes(p,"add"));break;case vI.MINUTE_DOWN:g(Ku.updateMinutes(p,"minus"));break;case vI.HOUR_UP:h(Ku.updateHours(u,"add"));break;case vI.HOUR_DOWN:h(Ku.updateHours(u,"minus"))}}),[u,p]),C=e=>{e.target.select()},S=e=>{const t=e.target.value;switch(e.target.name){case yI.HOUR:t.length<=2&&h(t);break;case yI.MINUTE:t.length<=2&&g(t)}},j=e=>{const t=parseInt(e.target.value);if(!isNaN(t))switch(e.target.name){case yI.HOUR:{const r=t>23||t<0?d.hour:Ku.convertHourTo12HourFormat(e.target.value);h(r);break}case yI.MINUTE:{const r=t>59||t<0?d.minute:e.target.value;g(Jc.padValue(r));break}}},k=e=>{switch(e.target.name){case xI.AM:b(Uu.AM);break;case xI.PM:b(Uu.PM)}},D=e=>r?`${r}-${e}`:e,T=ci({opacity:o?1:0,height:o?(null!==(c=x.height)&&void 0!==c?c:0)+32+2:0});return e.jsx(oI,{"data-testid":"animated-dropdown-wrapper",style:T,children:e.jsxs(aI,{ref:x.ref,"data-testid":D("timepicker-dropdown"),inert:o?void 0:"",children:[e.jsxs(sI,{children:[e.jsxs(cI,{children:[e.jsxs(uI,{children:[e.jsx(fI,{"aria-label":"increase hour",name:vI.HOUR_UP,tabIndex:-1,onClick:$,"data-testid":D("hour-increment-button"),children:e.jsx(n.ChevronUpIcon,{})}),e.jsx(pI,{children:e.jsx(gI,{"aria-label":"hour",type:"number",name:yI.HOUR,id:"hour",maxLength:2,pattern:"[0-9]{2}",ref:v,value:u,onFocus:C,onChange:S,onBlur:j,min:1,max:12,placeholder:"HH","data-testid":D("hour-input")})}),e.jsx(fI,{"aria-label":"decrease hour",name:vI.HOUR_DOWN,tabIndex:-1,onClick:$,"data-testid":D("hour-decrement-button"),children:e.jsx(f.ChevronDownIcon,{})})]}),e.jsx(hI,{children:":"}),e.jsxs(uI,{children:[e.jsx(fI,{"aria-label":"increase minute",name:vI.MINUTE_UP,tabIndex:-1,onClick:$,"data-testid":D("minute-increment-button"),children:e.jsx(n.ChevronUpIcon,{})}),e.jsx(pI,{children:e.jsx(gI,{"aria-label":"minute",type:"number",name:yI.MINUTE,id:"minute",maxLength:2,pattern:"[0-9]{2}",ref:y,value:p,onChange:S,onBlur:j,onFocus:C,min:0,max:59,placeholder:"MM","data-testid":D("minute-input")})}),e.jsx(fI,{"aria-label":"decrease minute",name:vI.MINUTE_DOWN,tabIndex:-1,onClick:$,"data-testid":D("minute-decrement-button"),children:e.jsx(f.ChevronDownIcon,{})})]})]}),e.jsxs(dI,{children:[e.jsx(mI,{checked:m===Uu.AM,name:xI.AM,type:"radio",onChange:k,"data-testid":D("am-toggle"),"aria-label":"AM",children:"AM"}),e.jsx(mI,{checked:m===Uu.PM,name:xI.PM,type:"radio",onChange:k,"data-testid":D("pm-toggle"),"aria-label":"PM",children:"PM"})]})]}),e.jsxs(lI,{children:[e.jsx(bI,{"aria-label":"close selector",type:"button",styleType:"secondary",onClick:l,"data-testid":D("cancel-button"),children:"Cancel"}),e.jsx(bI,{"aria-label":"confirm selection",type:"button",onClick:()=>{let e;e="24hr"===a?Ku.convertTo24HourFormat({hour:u,minute:p,period:m}):`${u}:${p}${m}`,s(e)},disabled:""===u||""===p,"data-testid":D("confirm-button"),children:"Done"})]})]})})},$I=r=>{var{id:n,disabled:i=!1,error:o,value:a,format:s="24hr",readOnly:l,onChange:c,onFocus:d,onBlur:u}=r,f=X(r,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur"]);const[h,p]=t.useState(!1),[g,m]=t.useState(!1),[b,v]=t.useState(""),[y,x]=t.useState(""),w=t.useRef(null);t.useEffect((()=>{a&&(v(a.start),x(a.end))}),[a]),td("mousedown",(function(e){i||j(e)}),"document"),td("keyup",(function(e){if("Tab"===e.code)j(e)}),"document");const $=()=>{S()},C=()=>{h||g||d&&d()},S=()=>{p(!1),m(!1),u&&u()},j=e=>{w.current&&!w.current.contains(e.target)&&(g||h)&&S()};return e.jsx(_F,Object.assign({ref:w,id:n},f,{children:e.jsxs(MF,{$disabled:i,$error:o,$readOnly:l,children:[e.jsxs(Hh,{error:o,currentActive:h?"start":g?"end":"none",children:[e.jsx(AF,{onFocus:()=>{i||l||h||(m(!1),p(!0),C())},readOnly:!0,placeholder:"From",value:Ku.formatDisplayValue(b,s),disabled:i,"data-testid":f["data-testid"]?`${f["data-testid"]}-timepicker-selector`:"timepicker-selector"}),e.jsx(AF,{onFocus:()=>{i||l||g||(p(!1),m(!0),C())},readOnly:!0,placeholder:"To",value:Ku.formatDisplayValue(y,s),disabled:i,"data-testid":f["data-testid"]?`${f["data-testid"]}-timepicker-selector`:"timepicker-selector"})]}),e.jsx(wI,{id:n,show:h,value:b,format:s,onCancel:$,onChange:e=>{p(!1),m(!0),v(e);c&&c({start:e,end:y})}}),e.jsx(wI,{id:n,show:g,value:y,format:s,onCancel:$,onChange:e=>{m(!1),x(e);c&&c({start:b,end:e}),""==b?p(!0):u&&u()}})]})}))},CI=K.default(Af)`
    height: 3rem;
    gap: ${Zs["spacing-8"]};
    // space for clear icon
    padding-right: calc(1.25rem + ${Zs["spacing-20"]});
`,SI=r=>{var{id:n,disabled:i=!1,error:o,value:a,format:s="12hr",readOnly:l,onChange:c,onFocus:d,onBlur:u,alignment:f="left",dropdownZIndex:h,startLimit:p,endLimit:g,interval:m=15}=r,b=X(r,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur","alignment","dropdownZIndex","startLimit","endLimit","interval"]);const[v]=t.useState((()=>Qc.generate())),[y,x]=t.useState(null),[w,$]=t.useState(!1),[C,S]=t.useState(""),[j,k]=t.useState(""),[D,T]=t.useState(""),[E,O]=t.useState(""),[F,I]=t.useState(""),_=t.useRef(null),M=t.useRef(null),A=t.useRef(null),B=t.useMemo((()=>Ku.generateTimings(m,s,p,g)),[m,s,p,g]),R=t.useMemo((()=>{if(""===E)return B;const e=Ku.findClosestFlooredTime(E,B);return e?B.slice(B.indexOf(e)):[]}),[B,E]),z=t.useCallback((e=>Ku.parseInput(e,s)),[s]);t.useEffect((()=>{var e,t;if(a){const r=null!==(e=z(a.start))&&void 0!==e?e:"",n=null!==(t=z(a.end))&&void 0!==t?t:"";k(r),T(n),O(r),I(n)}}),[a,z]),t.useEffect((()=>{if(o)return void $(!1);const e=z(j),t=z(D);if(void 0===e)S("Invalid start time");else if(void 0===t)S("Invalid end time");else{if(!(""!==e&&""!==t&&Ku.to24Hour(t)<Ku.to24Hour(e)))return S(""),void(document.activeElement!==M.current&&document.activeElement!==A.current||$(!0));S("End time must be after start time")}$(!1)}),[j,D,z,o]);const P=e=>{i||l||(y||w||null==d||d(),x(e),$(!0))},L=e=>{var t;i||l||(x(e),$(!0),null===(t=("start"===e?M:A).current)||void 0===t||t.select())};function N(e){var t;switch(e.code){case"Enter":"start"===y?H(j):"end"===y&&(w&&W(D),null===(t=A.current)||void 0===t||t.blur());break;case"Tab":V(j,D,{})}}const H=e=>{V(e,D,{goToNextInput:!0})},W=e=>{V(j,e,{triggerOnBlur:!0})},V=(e,t,{goToNextInput:r,triggerOnBlur:n})=>{var i,o,a;const s=null!==(i=z(e))&&void 0!==i?i:E,l=null!==(o=z(t))&&void 0!==o?o:F;k(s),T(l);s===E&&l===F||null==c||c({start:s,end:l}),r&&void 0!==z(e)&&(x("end"),null===(a=A.current)||void 0===a||a.select()),n&&(x(null),$(!1),null==u||u()),O(s),I(l)},Y=e=>{e.stopPropagation(),k(""),T(""),O(""),I("");null==c||c({start:"",end:""}),x(null),$(!1)},U=e=>{_.current&&!_.current.contains(e.relatedTarget)&&y&&!w&&V(j,D,{triggerOnBlur:!0})},K=()=>{if(!l&&!i&&((null==j?void 0:j.length)>0||(null==D?void 0:D.length)>0))return e.jsx(fF,{onClick:Y,type:"button","aria-label":"Clear",children:e.jsx(Mx,{"aria-hidden":!0})})};return e.jsxs(_F,Object.assign({id:n},b,{children:[e.jsx(tE,{children:e.jsx(yh,{enabled:!l&&!i,isOpen:w,renderElement:()=>e.jsxs(CI,{ref:_,$disabled:i,$error:o||!!C,$readOnly:l,onBlur:U,children:[e.jsxs(Hh,{error:o||!!C,currentActive:null===y?"none":y,children:[e.jsx(AF,{ref:M,onFocus:()=>P("start"),placeholder:"start"===y?"hh:mm":"From",onChange:e=>k(e.target.value),value:j,disabled:i,readOnly:l,"data-testid":b["data-testid"]?`${b["data-testid"]}-timepicker-selector`:"timepicker-selector",onClick:()=>L("start"),onKeyDown:N,autoComplete:"off","aria-label":"Start time input",type:"text",role:"combobox","aria-expanded":w,"aria-controls":v,"aria-autocomplete":"list"}),e.jsx(AF,{ref:A,onFocus:()=>P("end"),placeholder:"end"===y?"hh:mm":"To",onChange:e=>T(e.target.value),value:D,disabled:i,readOnly:l,"data-testid":b["data-testid"]?`${b["data-testid"]}-timepicker-selector`:"timepicker-selector",onClick:()=>L("end"),onKeyDown:N,autoComplete:"off","aria-label":"End time input",type:"text",role:"combobox","aria-expanded":w,"aria-controls":v,"aria-autocomplete":"list"})]}),K()]}),renderDropdown:()=>{if(w)return"start"===y?e.jsx(CE,{listItems:B,onSelectItem:H,selectedItems:[j],disableItemFocus:!0,topScrollItem:Ku.findClosestFlooredTime(z(j),B),listboxId:v}):e.jsx(CE,{listItems:R,onSelectItem:W,selectedItems:[D],disableItemFocus:!0,topScrollItem:Ku.findClosestFlooredTime(z(D),R),listboxId:v})},onClose:e=>{"outside-press"===e?(x(null),$(!1),null==u||u()):V(j,D,{triggerOnBlur:!0})},onDismiss:()=>{var e;null===(e=("start"===y?M:A).current)||void 0===e||e.focus(),$(!1)},offset:8,alignment:f,fitAvailableHeight:!0,customZIndex:h})}),!o&&C&&e.jsx(Jy,{id:n?`${n}-error-message`:"error-message",tabIndex:0,"data-testid":n?`${n}-error-message`:"error-message",children:C})]}))},jI=t=>{var{variant:r="dial"}=t,n=X(t,["variant"]);return"combobox"===r?e.jsx(SI,Object.assign({},n)):e.jsx($I,Object.assign({},n))};K.default.div`
    position: relative;
`;const kI=K.default(Bf)`
    height: calc(3rem - 2px); // exclude top and bottom borders
`,DI=r=>{var{id:n,disabled:i=!1,readOnly:o=!1,error:a,value:s,placeholder:l,format:c="24hr",onChange:d,onFocus:u,onBlur:f}=r,h=X(r,["id","disabled","readOnly","error","value","placeholder","format","onChange","onFocus","onBlur"]);const[p,g]=t.useState(!1),m=t.useRef(null);td("mousedown",(function(e){i||o||y(e)}),"document"),td("keyup",(function(e){if("Tab"===e.code)y(e)}),"document");const b=()=>{i||o||p||(g(!0),u&&u())};const v=()=>{g(!1),f&&f()},y=e=>{m.current&&!m.current.contains(e.target)&&p&&v()},x=t.useCallback((()=>"12hr"===c?"HH:MMam":"HH:MM"),[c,l]);return e.jsxs(Af,Object.assign({ref:m,id:n,$readOnly:o,$disabled:i,$error:a},h,{children:[e.jsx(kI,{onFocus:b,focused:p,readOnly:!0,placeholder:l||x(),value:Ku.formatDisplayValue(s,c),disabled:i,"data-testid":n?`${n}-timepicker-selector`:"timepicker-selector"}),e.jsx(wI,{id:n,show:p,value:s,format:c,onCancel:()=>{v()},onChange:e=>{d&&d(e),v()}})]}))},TI=K.default(XS)`
    margin-right: 0.5rem;
`,EI=K.default(Rx)`
    width: 2.5rem;

    input {
        text-align: center;
    }
`,OI=K.default(EI)`
    // Cheat to balance the placeholder look while ensuring enough width
    margin-left: 0.5rem;
    width: 6rem;

    input {
        text-align: left;
    }
`,FI=K.default(exports.Typography.BodyBL)`
    margin: 0 0.25rem;
    ${e=>{if(e.$inactive)return i.css`
                color: ${Ks["text-disabled"]};
            `}}
`,II=K.default.div`
    display: flex;
    align-items: center;
    height: calc(3rem - 2px); // exclude top and bottom borders
`,_I=K.default(exports.Typography.BodyBL)``,MI=r=>{var{disabled:n,error:i,value:o,onChange:a,onBlur:s,onChangeRaw:l,onBlurRaw:c,readOnly:d,placeholder:u="00-8888",autoComplete:f}=r,h=X(r,["disabled","error","value","onChange","onBlur","onChangeRaw","onBlurRaw","readOnly","placeholder","autoComplete"]);const[p,g]=t.useState(""),[m,b]=t.useState(""),[v,y]=t.useState("none"),x=t.useRef(null),w=t.useRef(null),$=t.useRef(null),C=t.useRef(p),S=t.useRef(m),j=t.useRef(v),k=e=>e.toLocaleUpperCase().replace(/[^0-9A-Za-z]/g,""),D=id({ref:w,formatter:k}),T=id({ref:$,formatter:k}),E=e=>{C.current=e,g(e)},O=e=>{S.current=e,b(e)},F=e=>{j.current=e,y(e)};t.useEffect((()=>{"floor"===v&&3===p.length&&$.current&&$.current.focus()}),[p]),t.useEffect((()=>{R(o)}),[o]);const I=e=>{F(e.target.name),e.target.select()},_=e=>{const t=e.target.name,r=e.target.value,n=B(r);"floor"===t?(E(n),n!==p&&z(n,t)):"unit"===t&&(O(n),n!==m&&z(n,t))},M=e=>{const t=e.target.name;if("floor"===t){const e=D();if(!e)return;const{nextValue:r,updateCaretPosition:n}=e;n(),E(r),z(r,t)}else if("unit"===t){const e=T();if(!e)return;const{nextValue:r,updateCaretPosition:n}=e;n(),O(r),z(r,t)}},A=e=>{var t;"Backspace"!==e.code&&"Backspace"!==e.key||"unit"===v&&0===m.length&&(null===(t=w.current)||void 0===t||t.focus())},B=e=>/^[0-9]$/.test(e)?Jc.padValue(e,!0):e.toLocaleUpperCase(),R=e=>{if(e!==AI)if(void 0===e||0===e.length)E(""),O("");else{const t=e.split("-");if(2===t.length){const e=t[0],r=t[1];E("floor"===v?e:B(e)),O("unit"===v?r:B(r))}}},z=(e,t)=>{if(!a&&!l)return;const r={floor:C.current,unit:S.current};if(r[t]=e,a){const e=L(r);a(e)}l&&l([r.floor,r.unit])},P=()=>{if(!s&&!c)return;const e={floor:B(C.current),unit:B(S.current)};if(s){const t=L(e);s(t)}c&&c([e.floor,e.unit])},L=e=>{const t=[e.floor,e.unit];return e.floor.length>0&&e.unit.length>0?t.join("-"):t.every((e=>""===e))?"":AI},N=e=>e.split("-");return e.jsxs(Af,Object.assign({},h,{ref:x,onClick:()=>{"none"===v&&w.current&&w.current.focus()},$disabled:n,$error:i,$readOnly:d,tabIndex:-1,onBlur:e=>{x.current&&x.current.contains(e.relatedTarget)||"none"!==j.current&&(F("none"),P())},children:[e.jsx(TI,{"data-testid":"addon",$disabled:n,$readOnly:d,children:"#"}),d&&o?(t=>{const r=t.split("-");return e.jsxs(II,{children:[e.jsx(_I,{children:r[0]}),e.jsx(FI,{children:"-"}),e.jsx(_I,{children:r[1]})]})})(o):e.jsxs(e.Fragment,{children:[e.jsx(EI,{name:"floor",maxLength:3,value:p,ref:w,onFocus:I,onBlur:_,onChange:M,disabled:n,readOnly:d,type:"text",pattern:"[0-9A-Z]{2,3}","data-testid":"floor-input","aria-label":"floor-input",placeholder:"floor"!==v||d?N(u)[0]:"",autoComplete:f,styleType:"no-border"}),e.jsx(FI,{$inactive:0===p.length,children:"-"}),e.jsx(OI,{name:"unit",maxLength:5,value:m,ref:$,onFocus:I,onBlur:_,onChange:M,onKeyDown:A,disabled:n,readOnly:d,type:"text",pattern:"[0-9A-Z]{2,5}","data-testid":"unit-input","aria-label":"unit-input",placeholder:"unit"!==v||d?N(u)[1]:"",autoComplete:f,styleType:"no-border"})]})]}))},AI="Invalid unit number",BI={DateInput:t=>{var{label:r,errorMessage:n,id:i="form-date-input","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(sx,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e.jsx(Oh,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n},v))})},DateRangeInput:t=>{var{label:r,errorMessage:n,id:i="form-date-range-input","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(sx,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e.jsx(Kh,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n},v))})},ESignature:t=>{const{label:r,errorMessage:n,id:i="form-field","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(sx,{id:i,label:r,errorMessage:n,"data-error-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e.jsx(Yp,Object.assign({id:`${i}-base`,"data-testid":a||i},v))})},HistogramSlider:t=>{var{label:r,errorMessage:n,id:i="form-histogram-slider","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(sx,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e.jsx(Fx,Object.assign({id:`${i}-base`,"data-testid":a||i},v))})},Input:zx,InputGroup:QS,MaskedInput:fj,Label:tx,MultiSelect:t=>{var{label:r,errorMessage:n,id:i="form-multi-select","data-error-testid":o,"data-testid":a,enableSearch:s=!1,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:f,xsCols:h,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v,variant:y}=t,x=X(t,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","variant"]);return e.jsx(sx,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:x.disabled,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:f,xsCols:h,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v,children:e.jsx(LO,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n,enableSearch:s,variant:y},x))})},NestedSelect:t=>{var{label:r,errorMessage:n,id:i="form-nested-select","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(sx,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e.jsx(VO,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n},v))})},NestedMultiSelect:t=>{var{label:r,errorMessage:n,id:i="form-nested-multi-select","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(sx,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e.jsx(WO,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n},v))})},Select:t=>{var{label:r,errorMessage:n,id:i="form-select","data-error-testid":o,"data-testid":a,enableSearch:s=!1,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:f,xsCols:h,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v,variant:y}=t,x=X(t,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","variant"]);return e.jsx(sx,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:x.disabled,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:f,xsCols:h,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v,children:e.jsx(gF,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n,enableSearch:s,variant:y},x))})},SelectHistogram:t=>{var{label:r,errorMessage:n,id:i="form-select-histogram","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,histogramSlider:v}=t,y=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols","histogramSlider"]);return e.jsx(sx,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:y.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e.jsx(wF,Object.assign({histogramSlider:v,error:!!n,"data-testid":a||i,id:`${i}-base`},y))})},Slider:t=>{var{label:r,errorMessage:n,id:i="form-slider","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(sx,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e.jsx($F,Object.assign({id:`${i}-base`,"data-testid":a||i},v))})},RangeSlider:t=>{var{label:r,errorMessage:n,id:i="form-range-slider","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(sx,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e.jsx(jx,Object.assign({id:`${i}-base`,"data-testid":a||i},v))})},RangeSelect:t=>{var{label:r,errorMessage:n,id:i="form-select","data-error-testid":o,"data-testid":a,enableSearch:s=!1,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:f,xsCols:h,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v}=t,y=X(t,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(sx,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:y.disabled,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,xxsCols:f,xsCols:h,smCols:p,mdCols:g,lgCols:m,xlCols:b,xxlCols:v,children:e.jsx(pF,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n,enableSearch:s},y))})},Textarea:IF,Timepicker:t=>{var{label:r,errorMessage:n,id:i="form-timepicker","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(sx,{id:i,label:r,errorMessage:n,disabled:v.disabled,"data-error-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e.jsx(DI,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n},v))})},TimeRangePicker:t=>{var{label:r,errorMessage:n,id:i="form-timepicker","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(sx,{id:i,label:r,errorMessage:n,disabled:v.disabled,"data-error-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e.jsx(jI,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n},v))})},CustomField:t=>{var{id:r="form-custom-field","data-error-testid":n,children:i}=t,o=X(t,["id","data-error-testid","children"]);return e.jsx(sx,Object.assign({id:r,"data-error-testid":n},o,{children:i}))},UnitNumberInput:t=>{var{label:r,errorMessage:n,id:i="form-unit-number-input","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(sx,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e.jsx(MI,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n},v))})},PhoneNumberInput:t=>{var{label:r,errorMessage:n,id:i="form-phone-number-input","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(sx,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e.jsx(sF,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n},v))})},PredictiveTextInput:t=>{var{label:r,errorMessage:n,id:i="form-predictive-text","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b}=t,v=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","xxsCols","xsCols","smCols","mdCols","lgCols","xlCols","xxlCols"]);return e.jsx(sx,{id:i,label:r,errorMessage:n,"data-error-testid":o,disabled:v.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,xxsCols:u,xsCols:f,smCols:h,mdCols:p,lgCols:g,xlCols:m,xxlCols:b,children:e.jsx(dF,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!n},v))})}},RI=K.default.li`
    display: flex;
    flex-direction: column;
    padding: ${Zs["spacing-32"]} 0;
    background: transparent;

    :not(:last-child) {
        border-bottom: ${Gs["width-010"]} ${Gs.solid} ${Ks.border};
    }
`,zI=K.default.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: ${Zs["spacing-16"]};
    width: 100%;
`,PI=K.default.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`,LI=K.default.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: ${Zs["spacing-16"]};

    ${el.MaxWidth.sm} {
        flex-direction: column;
        justify-content: flex-start;
    }
`,NI=K.default(exports.Typography.BodyMD)`
    display: flex;
    flex: 1;
    margin-right: ${Zs["spacing-16"]};

    ${el.MaxWidth.sm} {
        margin-right: 0;
        margin-bottom: ${Zs["spacing-8"]};
    }
`,HI=K.default(exports.Typography.BodyMD)``,WI=K.default.div`
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
`,VI=K.default(Hl.Small)`
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
`,YI=({thumbnailImageDataUrl:t,"data-testid":r,renderReplaceButton:n,onReplaceClick:i})=>e.jsxs(UI,{"data-testid":r,children:[e.jsx(KI,{"data-testid":r?`${r}-image`:void 0,src:t}),n&&e.jsx(qI,{type:"button",onClick:()=>{i&&i()},children:"Replace"})]}),UI=K.default.div`
    width: auto;
    margin-right: ${Zs["spacing-32"]};
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: center;
`,KI=K.default(gg)`
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
`,qI=K.default.button`
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
`,XI=({fileItem:r,fileDescriptionMaxLength:n,wrapperWidth:i,onSave:o,onCancel:a,onBlur:s})=>{const{id:l,name:c,size:d,truncateText:u=!0,thumbnailImageDataUrl:f}=r,[h,p]=t.useState(),[g,m]=t.useState(""),b=t.useRef(null),v=t.useRef(null);t.useEffect((()=>{p(y(c))}),[i]),t.useEffect((()=>{m(r.description||"")}),[r]);const y=e=>{if(!u)return e;const t=v&&v.current?v.current.getBoundingClientRect().width:0;return Jc.truncateOneLine(e,t,t/2,t/2/8,16)};return e.jsxs(RI,{"data-testid":`${l}-edit-display`,children:[e.jsxs(zI,{children:[f&&e.jsx(YI,{thumbnailImageDataUrl:f}),e.jsxs(PI,{children:[e.jsxs(LI,{ref:v,children:[e.jsx(NI,{weight:"semibold",children:h}),e.jsx(HI,{children:pg.formatFileSizeDisplay(d)})]}),e.jsx(BI.Textarea,{ref:b,id:`${l}-description-textarea`,"data-testid":`${l}-textarea`,value:g,maxLength:n,onChange:e=>{m(e.target.value)},onBlur:e=>{s(e.target.value)},rows:3,label:{children:"Photo description",subtitle:"Describe this photo to users who may not be able to see the image."}})]})]}),e.jsxs(WI,{$thumbnail:!!f,children:[e.jsx(VI,{"data-testid":`${l}-save-button`,type:"button",disabled:0===g.trim().length,onClick:()=>{b.current&&o(b.current.value.trim())},children:"Save"}),e.jsx(VI,{type:"button",styleType:"secondary","data-testid":`${l}-cancel-button`,onClick:a,children:"Cancel"})]})]})},GI=K.default.li`
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
`,ZI=K.default(_.DragHandleIcon)`
    margin-right: ${Zs["spacing-16"]};
    height: 1.5rem;
    width: 1.5rem;
    color: ${Ks.icon};

    ${e=>e.$active?i.css`
                color: ${Ks["icon-primary"]};
            `:e.$disabled?i.css`
                color: ${Ks["icon-disabled"]};
            `:void 0};
`,QI=K.default.div`
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
`,JI=K.default.div`
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
`,e_=K.default.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 100%;
`,t_=K.default.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${el.MaxWidth.sm} {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }
`,r_=K.default.div`
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
`,n_=K.default(exports.Typography.BodyMD)``,i_=K.default(n_)`
    margin-top: ${Zs["spacing-4"]};
`,o_=K.default(exports.Typography.BodySM)`
    color: ${Ks["text-error"]};
`,a_=K.default(o_)`
    margin-top: ${Zs["spacing-4"]};
    ${el.MaxWidth.sm} {
        display: none;
        visibility: hidden;
    }
`,s_=K.default(o_)`
    display: none;
    visibility: hidden;
    ${el.MaxWidth.sm} {
        display: block;
        visibility: visible;
        margin-top: ${Zs["spacing-8"]};
    }
`,l_=K.default.div`
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
`,c_=K.default(Ih)`
    min-width: unset;

    :not(:last-child) {
        margin-right: ${Zs["spacing-16"]};
    }
`,d_=K.default(nl)`
    height: 2.5rem;
    width: 2.5rem;
    padding: unset;
    svg {
        height: 1.5rem;
        width: 1.5rem;
        color: ${Ks.icon};
    }
`,u_=t.memo((({fileItem:r,editable:n,sortable:i,wrapperWidth:o,disabled:a,readOnly:s,onDelete:l,onEditClick:c})=>{const{id:d,name:u,size:f,description:h,progress:p=1,errorMessage:g,thumbnailImageDataUrl:b,truncateText:v=!0}=r,[y,x]=t.useState(),{activeId:w}=t.useContext(_g),{attributes:$,listeners:C,setNodeRef:S,transform:j,transition:k}=Iy({id:d}),D=t.useRef(null),T={transform:Fb.Translate.toString(j),transition:k},E=Object.assign(Object.assign({style:T},$),C),O=p<1,_=pg.formatFileSizeDisplay(f),M=w?w===d?"self":"others":"none";t.useEffect((()=>{x(z(u))}),[o]);const A=()=>{l()},B=()=>{c&&c()},R=e=>{i&&e.stopPropagation()},z=e=>{if(!v)return e;const t=D&&D.current?D.current.getBoundingClientRect().width:0;return Jc.truncateOneLine(e,t,t/2,t/2/8,16)},P=()=>a||!!w,L=()=>!!i&&!s,N=()=>e.jsxs(e.Fragment,{children:[e.jsx(n_,{weight:h?"semibold":"regular",children:y}),h&&e.jsx(i_,{children:h})]});return e.jsxs(GI,Object.assign({id:d,ref:S,$sortable:L(),$disabled:P(),$focusType:M},L()?E:{},{children:[L()&&e.jsx(ZI,{"data-testid":`${d}-drag-handle`,$disabled:P(),$active:"self"===M}),e.jsxs(QI,{$focused:"self"===M,$error:!!g,$loading:O,$disabled:P(),$editable:n,children:[(()=>{let t;return t=g?e.jsxs(e.Fragment,{children:[e.jsxs(e_,{ref:D,children:[N(),g&&e.jsx(a_,{weight:"semibold",children:g})]}),e.jsx(r_,{children:e.jsx(n_,{children:_})}),g&&e.jsx(s_,{weight:"semibold",children:g})]}):b?(t=>e.jsxs(e.Fragment,{children:[e.jsx(YI,{thumbnailImageDataUrl:t,"data-testid":`${d}-thumbnail`}),e.jsxs(t_,{children:[e.jsx(e_,{ref:D,children:N()}),e.jsx(r_,{children:e.jsx(n_,{children:_})})]})]}))(b):e.jsxs(e.Fragment,{children:[e.jsx(e_,{ref:D,children:N()}),e.jsx(r_,{$hideInMobile:O,children:e.jsx(n_,{children:_})})]}),e.jsx(JI,{$hasThumbnail:!!b,children:t})})(),!s&&(()=>{let t;return t=g?e.jsx(d_,{onClick:A,"data-testid":`${d}-error-delete-button`,"aria-label":`delete-${u}`,children:e.jsx(m.CrossIcon,{"aria-hidden":!0})}):O?e.jsx(bp,{progress:p,"data-testid":`${d}-progress-bar`}):e.jsxs(e.Fragment,{children:[n&&e.jsx(c_,{"data-testid":`${d}-edit-button`,"data-no-dnd":"true",type:"button",styleType:"light",sizeType:"small","aria-label":`edit ${u}`,disabled:P(),onClick:B,onKeyDown:R,children:e.jsx(I.PencilIcon,{"aria-hidden":!0})},"edit"),e.jsx(c_,{"data-testid":`${d}-delete-button`,"data-no-dnd":"true",type:"button",styleType:"light",sizeType:"small","aria-label":`delete ${u}`,disabled:P(),onClick:A,onKeyDown:R,children:e.jsx(F.BinIcon,{"aria-hidden":!0})},"delete")]}),e.jsx(l_,{$editable:n,$error:!!g,$loading:O,children:t})})()]})]}))})),f_=K.default.ul`
    list-style-type: none;
    margin-bottom: ${e=>e.$readOnly?"0":Zs["spacing-32"]};
`,h_=K.default.li`
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
`,p_=({fileItems:r,editableFileItems:n,fileDescriptionMaxLength:i,sortable:o,disabled:a,readOnly:s,onItemUpdate:l,onItemDelete:c,onSort:d})=>{const[u,f]=t.useState({}),{setActiveId:h}=t.useContext(_g),{width:p=0,ref:g}=qe(),m=t.useRef({}),b=function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return t.useMemo((()=>[...r].filter((e=>null!=e))),[...r])}(Wb(Ry,{activationConstraint:{distance:8}}),Wb(Bv,{activationConstraint:{delay:150,tolerance:5}}),Wb(kv,{coordinateGetter:Ay})),v=e=>{delete m.current[e]};t.useEffect((()=>{f(T(r))}),[r]);const y=e=>t=>{E(e.id,"display"),v(e.id);const r=Object.assign(Object.assign({},e),{description:t});l(r)},x=e=>t=>{m.current[e.id]=t},w=e=>()=>{e.description&&0!==e.description.length?E(e.id,"display"):c(e),v(e.id)},$=e=>()=>{E(e.id,"edit")},C=e=>()=>{c(e)},S=e=>{if(d&&r){const{active:t,over:n}=e;if(n&&t.id!==n.id){const e=r.findIndex((e=>e.id===t.id)),i=r.findIndex((e=>e.id===n.id)),o=by(r,e,i);d(o)}}h(void 0)},j=e=>{const{active:t}=e;h(t.id)},k=e=>n&&pg.isSupportedImageType(e.type),D=e=>!e.errorMessage&&!s&&!("number"==typeof e.progress&&e.progress<1)&&k(e)&&!e.description,T=e=>{if(!e||0===e.length)return{};const t={};for(const r of e)r.errorMessage?t[r.id]="error":u[r.id]?t[r.id]=u[r.id]:t[r.id]=D(r)?"edit":"display";return t},E=(e,t)=>{f((r=>Object.assign(Object.assign({},r),{[e]:t})))},O=()=>r&&r.length>1&&o&&Object.values(u).every((e=>"display"===e)),F=()=>{const t=((e,t)=>{if(!e||0===e.length)return[];const r=[];for(const n of e)if("edit"===t[n.id]){const e=r[r.length-1];Array.isArray(e)?e.push(n):r.push([n])}else r.push(n);return r})(r,u);return 0===t.length?null:t.map(((t,r)=>Array.isArray(t)?((t,r)=>{const n=t.map((t=>{const r=Object.assign({},t);return void 0!==m.current[t.id]&&(r.description=m.current[t.id]),e.jsx(XI,{fileItem:r,wrapperWidth:p,fileDescriptionMaxLength:i,onSave:y(t),onCancel:w(t),onBlur:x(t)},t.id)}));return e.jsx(h_,{children:e.jsx("ul",{children:n})},`editable-${r}`)})(t,r):e.jsx(u_,{fileItem:t,editable:k(t),wrapperWidth:p,sortable:O(),disabled:a,readOnly:s,onDelete:C(t),onEditClick:$(t)},t.id)))};return r&&0!==r.length?a||s||!O()?e.jsx(f_,{$readOnly:s,ref:g,children:F()}):e.jsx(fy,{sensors:b,onDragEnd:S,onDragStart:j,children:e.jsx(jy,{items:r,strategy:$y,children:e.jsx(f_,{$readOnly:s,ref:g,children:F()})})}):null},g_=K.default.div`
    display: flex;
    flex-direction: column;
    margin-bottom: ${Zs["spacing-32"]};
    gap: ${Zs["spacing-8"]};
`,m_=K.default(exports.Typography.BodyBL)``,b_=K.default.div`
    color: ${Ks.text};
    ${ql({textSize:"body-baseline"})}
`,v_=K.default(exports.Typography.BodyMD)`
    color: ${Ks["text-subtler"]};
`,y_=K.default.div`
    color: ${Ks.text};
    ${ql({textSize:"body-md"})}
`,x_=K.default(rc)`
    margin-bottom: ${Zs["spacing-32"]};
`,w_=K.default.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    ${el.MaxWidth.sm} {
        align-items: flex-start;
    }
`,$_=K.default(Hl.Small)`
    width: 10rem;

    ${el.MaxWidth.sm} {
        width: 100%;
    }
`,C_=K.default.label`
    ${qs["body-md-semibold"]}
    color: ${Ks["text-subtler"]};
    margin-top: ${Zs["spacing-8"]};
    width: 10rem;
    text-align: center;
    ${el.MaxWidth.sm} {
        display: none;
        visibility: hidden;
    }
`,S_=K.default(rc)`
    margin-bottom: ${Zs["spacing-32"]};
`,j_=Y.default.createContext({mode:"default",rootNode:{current:null}});var k_=Ei((function(e){return null==e}));const D_=K.default.div`
    background-color: ${e=>e.$collapsible?Ks["bg-strong"]:Ks.bg};
    ${el.MaxWidth.lg} {
        background-color: ${Ks["bg-strong"]};
    }
`,T_=K.default.div`
    display: ${e=>e.$showDivider?"block":"none"};
    height: 1px;
    background-color: ${Ks.border};

    ${el.MaxWidth.lg} {
        display: ${e=>e.$showMobileDivider?"block":"none"};
        margin: 0 ${Zs["spacing-16"]};
    }
`,E_=K.default.div`
    display: flex;
    align-items: center;

    background-color: ${Ks.bg};

    ${el.MaxWidth.lg} {
        background-color: transparent;
    }
`,O_=K.default(nl)`
    margin: 0 0 0 auto;

    color: ${Ks.icon};
    &:hover {
        color: ${Ks["icon-hover"]};
    }
`,F_=K.default(f.ChevronDownIcon)`
    height: ${qs.Spec["body-size-baseline"]};
    width: ${qs.Spec["body-size-baseline"]};

    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform ${Xs["duration-350"]} ${Xs["ease-standard"]};
`,I_=K.default.p`
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
`,__=K.default(Di.div)`
    overflow: hidden;
`,M_=K.default.div`
    padding: ${Zs["spacing-24"]} ${Zs["spacing-20"]};
`,A_=K.default(Di.div)`
    ${e=>e.$minimisable&&"overflow: hidden;"}
    ${e=>e.$height&&`height: ${e.$height}px;`}
`,B_=K.default(Hl.Small)`
    height: fit-content;
    padding: 0;
    margin: ${Zs["spacing-16"]} 0 0 0;
`,R_=r=>{var n,{collapsible:i=!0,initialExpanded:o=!1,expanded:a,onExpandChange:s,minimisable:l=!1,minimisedHeight:c,showDivider:d=!0,showMobileDivider:u=!0,title:f,addon:h,children:p}=r,g=X(r,["collapsible","initialExpanded","expanded","onExpandChange","minimisable","minimisedHeight","showDivider","showMobileDivider","title","addon","children"]);const{mode:m,rootNode:b}=t.useContext(j_),v="mobile"===m,[y,x]=t.useState(T()),[w,$]=t.useState(l),C=!v&&i,S=qe(),j=qe(),k=ci({height:y?S.height:0}),D=w?null!=c?c:Math.min(.5*(null!==(n=j.height)&&void 0!==n?n:0),216):j.height;t.useEffect((()=>{x(T())}),[i,a]);function T(){return!!v||(k_(a)?!i||o:a)}return e.jsxs(D_,{$collapsible:C,children:[e.jsx(T_,{$showDivider:d,$showMobileDivider:u}),(f||C)&&e.jsxs(E_,{children:[f&&e.jsxs(I_,{children:[f," ",h&&("popover"===(null==h?void 0:h.type)?e.jsx(Zy,{addon:h,rootNode:v?b:void 0}):null)]}),C&&e.jsx(O_,{focusHighlight:!1,focusOutline:"browser",onClick:()=>{const e=!y;k_(a)&&x(e),s&&s(e)},"aria-label":y?"Collapse":"Expand",children:e.jsx(F_,{$expanded:y})})]}),e.jsx(__,{"data-testid":"expandable-container","data-expanded":y,style:k,children:e.jsx("div",{ref:S.ref,children:e.jsxs(M_,Object.assign({},g,{children:[e.jsx(A_,{"data-testid":"minimisable-container",$height:D,$minimisable:l,children:e.jsx("div",{ref:j.ref,children:e.jsx("div",{"data-id":"content-container",children:"function"==typeof p?p(m,{minimised:w}):p})})}),l&&e.jsxs(B_,{"data-id":"minimise-button",styleType:"link",type:"button",onClick:()=>{$(!w)},children:["View ",w?"more":"less"]})]}))})})]})};R_.displayName="Filter.Item";const z_=K.default(R_)`
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
`,P_=K.default.div`
    display: flex;
    flex-direction: column;

    ${el.MaxWidth.lg} {
        flex-direction: row;
        flex-wrap: wrap;
        gap: ${Zs["spacing-16"]};
    }
`,L_=K.default.label`
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
`,N_=K.default(Su)`
    flex-shrink: 0;
    margin-right: ${Zs["spacing-8"]};
`,H_=K.default(iI)`
    ${e=>!e.$visible&&"visibility: hidden;"}
`,W_=K.default(Hl.Small)`
    height: fit-content;
    padding: 0;
    margin: ${Zs["spacing-16"]} 0 ${Zs["spacing-8"]}
        ${Zs["spacing-12"]};

    ${el.MaxWidth.lg} {
        margin: 0 0 ${Zs["spacing-16"]} 0;
    }
`,V_=r=>{var{selectedOptions:n,options:i,onSelect:o,labelExtractor:a,valueExtractor:s,useToggleContentWidth:l}=r,c=X(r,["selectedOptions","options","onSelect","labelExtractor","valueExtractor","useToggleContentWidth"]);const{mode:d}=t.useContext(j_),[u,f]=t.useState(n||[]),[h,p]=t.useState(),[g,m]=t.useState(i.length),b=t.useRef(null),v=t.useRef(null),y=e=>()=>{const t=[...u],r=u.findIndex((t=>$(t)===$(e)));r>=0?t.splice(r,1):t.push(e),f(t),null==o||o(t)},x=()=>{const e=u.length?[]:i;f(e),null==o||o(e)},w=e=>{var t;return a?a(e):null!==(t=e.label)&&void 0!==t?t:null==e?void 0:e.toString()},$=e=>{var t;return s?s(e):null!==(t=e.value)&&void 0!==t?t:null==e?void 0:e.toString()},C=t.useCallback((()=>{if(!b.current)return void p(void 0);const e=Array.from(b.current.children);let t=0,r=0,n=-1;for(let i=0;i<e.length;i++){const o=e[i].offsetTop;if(o>n&&(r++,n=o,r>2))break;t=i}m(t),p(r>2?n-8:void 0)}),[]);t.useEffect((()=>{n!==u&&f(n||[])}),[n]),t.useEffect((()=>{"default"===d?(()=>{const e=v.current?v.current.offsetTop+v.current.clientHeight:void 0;p(e)})():C()}),[i]),qe({handleWidth:"mobile"===d,handleHeight:!1,skipOnMount:!0,refreshMode:"throttle",targetRef:b,onResize:C});return e.jsx(z_,Object.assign({minimisable:i.length>5,minimisedHeight:h},c,{children:(t,{minimised:r})=>e.jsxs(e.Fragment,{children:[i.length<3?null:e.jsx(W_,{styleType:"link",type:"button",onClick:x,children:u.length?"Clear all":"Select all"}),e.jsx(P_,{role:"group","aria-label":c.title,ref:b,children:i.map(((n,i)=>"default"===t?((t,r,n)=>{const i=w(t),o=$(t),a=!!u.find((e=>$(e)===o));return e.jsxs(L_,{$visible:!n||r<5,$selected:a,ref:4===r?v:void 0,children:[e.jsx(N_,{displaySize:"small",checked:a,onChange:y(t)}),i]},o)})(n,i,r):((t,r,n)=>{const i=w(t),o=$(t),a=!!u.find((e=>$(e)===o));return e.jsx(H_,{type:"checkbox",checked:a,$visible:!n||!!h&&r<=g,onChange:y(t),useContentWidth:l,children:i},o)})(n,i,r)))})]})}))};V_.displayName="Filter.Checkbox";const Y_=K.default.div`
    background-color: ${Ks.bg};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`,U_=K.default.div`
    background-color: ${Ks.bg};
    border: ${Gs["width-010"]} ${Gs.solid} ${Ks.border};
    border-radius: ${Qs.md};
    overflow: hidden;
    width: 100%;
`,K_=K.default.div`
    background-color: ${Ks["bg-strong"]};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`,q_=K.default.div`
    background-color: ${Ks.bg};
    height: 100%;
    width: 100%;
`,X_=K.default.div`
    flex: 1;
    width: 100%;
    overflow-y: auto;
`,G_=K.default.div`
    display: flex;
    align-items: center;

    background-color: ${Ks.bg};

    ${el.MaxWidth.lg} {
        border-bottom: ${Gs["width-010"]} ${Gs.solid}
            ${Ks.border};
    }
`,Z_=K.default(exports.Typography.HeadingXS).attrs({as:"p"})`
    flex: 1;
    margin: ${Zs["spacing-24"]} 0 ${Zs["spacing-24"]}
        ${Zs["spacing-20"]};

    ${el.MaxWidth.lg} {
        text-align: center;
        margin: ${Zs["spacing-24"]} 0;
    }
`,Q_=K.default(nl)`
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
`,J_=K.default(Hl.Small)`
    background-color: transparent;
    padding-right: ${Zs["spacing-20"]};
    padding-left: ${Zs["spacing-20"]};
    height: 100%;

    ${el.MaxWidth.lg} {
        padding: ${Zs["spacing-24"]} ${Zs["spacing-20"]};
    }
`,eM=K.default(bd.Default)`
    width: 100%;
`,tM=K.default.div`
    padding: ${Zs["spacing-24"]} ${Zs["spacing-20"]};
    background-color: ${Ks.bg};
    border-top: ${Gs["width-010"]} ${Gs.solid} ${Ks.border};
`,rM=K.default(Hl.Default)`
    width: 100%;
`,nM=({onDismiss:t,onDone:r,children:n})=>e.jsxs(Y_,{children:[e.jsx(Q_,{onClick:t,focusOutline:"browser",focusHighlight:!1,"aria-label":"Dismiss",children:e.jsx(p.ChevronLeftIcon,{})}),e.jsx(X_,{children:n}),e.jsx(tM,{children:e.jsx(rM,{onClick:r,type:"button",children:"Done"})})]});nM.displayName="Filter.Page";const iM=r=>{var{toggleFilterButtonLabel:n="Filters",toggleFilterButtonStyle:o="light",headerTitle:a="Filters",clearButtonDisabled:s=!1,onClear:l,onDismiss:c,onDone:d,children:f}=r,h=X(r,["toggleFilterButtonLabel","toggleFilterButtonStyle","headerTitle","clearButtonDisabled","onClear","onDismiss","onDone","children"]);const[p,g]=t.useState(!1),m=t.useRef(null),b=t.useRef(null),v=i.useTheme(),y=Js["lg-max"]({theme:v}),x=bc.useMediaQuery({maxWidth:y});t.useEffect((()=>{x||$()}),[x]);const w=()=>{g(!0)},$=()=>{g(!1),c&&c()},C=()=>{g(!1),d&&d()},S=()=>{l&&l()},j=e=>"function"==typeof f?f(e):f,k=t=>e.jsxs(G_,{children:["mobile"===t&&e.jsx(Q_,{onClick:$,focusOutline:"browser",focusHighlight:!1,"aria-label":"Dismiss",children:e.jsx(u.CrossIcon,{})}),e.jsx(Z_,{weight:"semibold",children:a}),e.jsx(J_,{styleType:"link",type:"button",onClick:S,disabled:s,children:"Clear"})]});return e.jsx("div",Object.assign({},h,{children:x?e.jsx(j_.Provider,{value:{mode:"mobile",rootNode:m},children:e.jsxs(e.Fragment,{children:[e.jsx(eM,{"data-testid":"filter-show-button",styleType:o,onClick:w,type:"button",icon:e.jsx(u.FilterIcon,{}),children:n}),e.jsx(cp,{show:p,disableTransition:!0,children:e.jsx(q_,{"data-id":"filter-mobile","data-testid":"filter-mobile",children:e.jsxs(K_,{ref:m,children:[k("mobile"),e.jsx(X_,{children:j("mobile")}),e.jsx(tM,{children:e.jsx(rM,{onClick:C,type:"button",children:"Done"})})]})})})]})}):e.jsx(j_.Provider,{value:{mode:"default",rootNode:b},children:e.jsxs(U_,{"data-id":"filter-desktop","data-testid":"filter-desktop",ref:b,children:[k("default"),j("default")]})})}))};iM.displayName="Filter";const oM=Object.assign(iM,{Item:R_,Page:nM,Checkbox:V_}),aM=K.default.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    ${el.MaxWidth.lg} {
        justify-content: flex-start;
        padding: 0;
    }
`,sM=K.default(exports.Typography.BodyMD)`
    margin-bottom: ${Zs["spacing-16"]};
`,lM=K.default.div`
    display: flex;
    align-items: flex-start;
`,cM=K.default.a`
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
`,dM=()=>e.jsxs(aM,{"data-testid":"download-app-section",children:[e.jsx(sM,{weight:"semibold",children:"Download the app"}),e.jsxs(lM,{children:[e.jsx(cM,{href:"https://apps.apple.com/sg/app/moments-of-life/id1383218758",target:"_blank",rel:"noopener noreferrer",id:"footer-download-app-apple",children:e.jsx("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/apple-app-store.png",alt:"apple-app-store"})}),e.jsx(cM,{href:"https://play.google.com/store/apps/details?id=sg.gov.app.mol&hl=en_SG",target:"_blank",rel:"noopener noreferrer",id:"footer-download-app-android",children:e.jsx("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/google-play-store.png",alt:"google-play-store"})})]})]}),uM={privacy:{href:"https://www.life.gov.sg/privacy-statement",target:"_blank",rel:"noopener"},termsOfUse:{href:"https://www.life.gov.sg/terms-of-use",target:"_blank",rel:"noopener"},reportVulnerability:{href:"https://tech.gov.sg/report_vulnerability",target:"_blank",rel:"noopener",external:!0}},fM={privacy:{href:"https://assets.life.gov.sg/bookingsg/BSG_Privacy_Policy.pdf",target:"_blank",rel:"noopener"},termsOfUse:{href:"https://assets.life.gov.sg/bookingsg/BSG_Terms_of_Use.pdf",target:"_blank",rel:"noopener"},reportVulnerability:{href:"https://tech.gov.sg/report_vulnerability",target:"_blank",rel:"noopener",external:!0}},hM={privacy:{href:"https://mylegacy.life.gov.sg/privacy-statement",target:"_blank",rel:"noopener"},termsOfUse:{href:"https://mylegacy.life.gov.sg/terms-of-use",target:"_blank",rel:"noopener"},reportVulnerability:{href:"https://tech.gov.sg/report_vulnerability",target:"_blank",rel:"noopener",external:!0}};var pM;!function(e){e.getCopyrightInfo=(e=new Date,r)=>{const n=t(r);return`${`${(new Date).getFullYear()} ${n}`} Last Updated ${Ic(e).format("D MMMM YYYY")}`};const t=e=>{switch(e){case"bookingsg":return"BookingSG, Government of Singapore.";case"mylegacy":return"MyLegacy@LifeSG, Government of Singapore.";case"ccube":return"Citizen Collective Common, Government of Singapore.";default:return"LifeSG, Government of Singapore."}};e.getFooterLogo=e=>{switch(e){case"bookingsg":return"https://home.booking.gov.sg/images/bookingsg/footer.svg";case"mylegacy":return"https://mylegacy.life.gov.sg/images/site-logo.png";case"ccube":return"https://assets.life.gov.sg/ccube/logo-ccube.svg";default:return"https://assets.life.gov.sg/react-design-system/img/logo/lifesg-primary-logo.svg"}},e.getDisclaimerLinks=(e,t)=>{const r=(e=>{switch(e){case"bookingsg":return fM;case"mylegacy":return hM;default:return uM}})(e);return{privacy:Object.assign(Object.assign(Object.assign({},r.privacy),t&&t.privacy?t.privacy:{}),{children:"Privacy Statement"}),termsOfUse:Object.assign(Object.assign(Object.assign({},r.termsOfUse),t&&t.termsOfUse?t.termsOfUse:{}),{children:"Terms of Use"}),reportVulnerability:Object.assign(Object.assign(Object.assign({},r.reportVulnerability),t&&t.reportVulnerability?t.reportVulnerability:{}),{children:"Report Vulnerability"})}}}(pM||(pM={}));const gM=K.default.div`
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
`,mM=Y.default.forwardRef(((t,r)=>{const{children:n,"data-testid":i="container",type:o="flex",stretch:a=!1}=t,s=X(t,["children","data-testid","type","stretch"]);return e.jsx(gM,Object.assign({ref:r,"data-testid":i,$type:o,$stretch:a},s,{children:n}))})),bM=Y.default.forwardRef(((t,r)=>{const{children:n,"data-testid":i="section",stretch:o=!1}=t,a=X(t,["children","data-testid","stretch"]);return e.jsx(vM,Object.assign({ref:r,"data-testid":i,$stretch:o},a,{children:n}))})),vM=K.default.section`
    display: block;
    position: relative;
`,yM=Y.default.forwardRef(((t,r)=>{const{children:n,"data-testid":i="content",className:o,type:a="flex",stretch:s=!1}=t,l=X(t,["children","data-testid","className","type","stretch"]);return e.jsx(bM,Object.assign({ref:r,"data-testid":i,className:o,stretch:s},l,{children:e.jsx(mM,{"data-testid":`${i}-container`,type:a,"data-id":"container",stretch:s,children:n})}))})),xM={Section:bM,Container:mM,Content:yM,ColDiv:Xh},wM=K.default.footer`
    background: ${Ks["bg-strong"]};
`,$M=K.default(exports.Typography.LinkSM)`
    color: ${Ks.text};
`,CM=K.default(op)`
    width: 100%;
`,SM=K.default(xM.Content)`
    padding: ${Zs["spacing-64"]} 0;

    ${el.MaxWidth.lg} {
        padding: ${Zs["spacing-32"]} 0;
    }
`,jM=K.default.div`
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
`,kM=K.default.ul`
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
`,DM=K.default.div`
    grid-column: 13 / span 6;

    ${el.MaxWidth.lg} {
        grid-column: 1 / span 12;
        margin-top: ${Zs["spacing-32"]};
    }

    ${el.MaxWidth.md} {
        grid-column: 1 / span 8;
    }
`,TM=K.default(xM.Content)`
    padding: ${Zs["spacing-20"]} 0;

    ${el.MaxWidth.lg} {
        border-top: none;
        flex-direction: column;
        padding: ${Zs["spacing-16"]} 0;
    }
`,EM=K.default.div`
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
`,OM=K.default(EM)`
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
`,FM=K.default(exports.Typography.LinkXS)`
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
`;var IM=function(e,t){return Number(e.toFixed(t))},_M=function(e,t,r){r&&"function"==typeof r&&r(e,t)},MM={easeOut:function(e){return-Math.cos(e*Math.PI)/2+.5},linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:(4-2*e)*e-1},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}},AM=function(e){"number"==typeof e&&cancelAnimationFrame(e)},BM=function(e){e.mounted&&(AM(e.animation),e.animate=!1,e.animation=null,e.velocity=null)};function RM(e,t,r,n){if(e.mounted){var i=(new Date).getTime();BM(e),e.animation=function(){if(!e.mounted)return AM(e.animation);var o=(new Date).getTime()-i,a=(0,MM[t])(o/r);o>=r?(n(1),e.animation=null):e.animation&&(n(a),requestAnimationFrame(e.animation))},requestAnimationFrame(e.animation)}}function zM(e,t,r,n){var i=function(e){var t=e.scale,r=e.positionX,n=e.positionY;return!(Number.isNaN(t)||Number.isNaN(r)||Number.isNaN(n))}(t);if(e.mounted&&i){var o=e.setTransformState,a=e.transformState,s=a.scale,l=a.positionX,c=a.positionY,d=t.scale-s,u=t.positionX-l,f=t.positionY-c;0===r?o(t.scale,t.positionX,t.positionY):RM(e,n,r,(function(e){o(s+d*e,l+u*e,c+f*e)}))}}var PM=function(e,t){var r=e.wrapperComponent,n=e.contentComponent,i=e.setup.centerZoomedOut;if(!r||!n)throw new Error("Components are not mounted");var o=function(e,t,r){var n=e.offsetWidth,i=e.offsetHeight,o=t.offsetWidth*r,a=t.offsetHeight*r;return{wrapperWidth:n,wrapperHeight:i,newContentWidth:o,newDiffWidth:n-o,newContentHeight:a,newDiffHeight:i-a}}(r,n,t),a=o.wrapperWidth,s=o.wrapperHeight,l=function(e,t,r,n,i,o,a){var s=e>t?r*(a?1:.5):0,l=n>i?o*(a?1:.5):0;return{minPositionX:e-t-s,maxPositionX:s,minPositionY:n-i-l,maxPositionY:l}}(a,o.newContentWidth,o.newDiffWidth,s,o.newContentHeight,o.newDiffHeight,Boolean(i));return l},LM=function(e,t,r,n){return IM(n?e<t?t:e>r?r:e:e,2)},NM=function(e,t){var r=PM(e,t);return e.bounds=r,r};function HM(e,t,r,n,i,o,a){var s=r.minPositionX,l=r.minPositionY,c=r.maxPositionX,d=r.maxPositionY,u=0,f=0;return a&&(u=i,f=o),{x:LM(e,s-u,c+u,n),y:LM(t,l-f,d+f,n)}}function WM(e,t,r,n,i,o){var a=e.transformState,s=a.scale,l=a.positionX,c=a.positionY,d=n-s;return"number"!=typeof t||"number"!=typeof r?(console.error("Mouse X and Y position were not provided!"),{x:l,y:c}):HM(l-t*d,c-r*d,i,o,0,0,null)}function VM(e,t,r,n,i){var o=t-(i?n:0);return!Number.isNaN(r)&&e>=r?r:!Number.isNaN(t)&&e<=o?o:e}var YM=function(e,t){var r=e.setup.panning.excluded,n=e.isInitialized,i=e.wrapperComponent,o=t.target,a="shadowRoot"in o&&"composedPath"in t?t.composedPath().some((function(e){return e instanceof Element&&(null==i?void 0:i.contains(e))})):null==i?void 0:i.contains(o);return!!(n&&o&&a)&&!CA(o,r)},UM=function(e){var t=e.isInitialized,r=e.isPanning,n=e.setup.panning.disabled;return!(!t||!r||n)};function KM(e,t,r,n,i){var o=e.setup.limitToBounds,a=e.wrapperComponent,s=e.bounds,l=e.transformState,c=l.scale,d=l.positionX,u=l.positionY;if(null!==a&&null!==s&&(t!==d||r!==u)){var f=HM(t,r,s,o,n,i,a),h=f.x,p=f.y;e.setTransformState(c,h,p)}}var qM=function(e,t){var r=e.setup,n=e.transformState.scale,i=r.minScale,o=r.disablePadding;return t>0&&n>=i&&!o?t:0};function XM(e,t,r,n,i,o,a,s,l,c){if(i){var d;if(t>a&&r>a)return(d=a+(e-a)*c)>l?l:d<a?a:d;if(t<o&&r<o)return(d=o+(e-o)*c)<s?s:d>o?o:d}return n?t:LM(e,o,a,i)}function GM(e,t){var r=function(e){var t=e.mounted,r=e.setup,n=r.disabled,i=r.velocityAnimation,o=e.transformState.scale;return!(i.disabled&&!(o>1)&&n&&!t)}(e);if(r){var n=e.lastMousePosition,i=e.velocityTime,o=e.setup,a=e.wrapperComponent,s=o.velocityAnimation.equalToMove,l=Date.now();if(n&&i&&a){var c=function(e,t){return t?Math.min(1,e.offsetWidth/window.innerWidth):1}(a,s),d=t.x-n.x,u=t.y-n.y,f=d/c,h=u/c,p=l-i,g=d*d+u*u,m=Math.sqrt(g)/p;e.velocity={velocityX:f,velocityY:h,total:m}}e.lastMousePosition=t,e.velocityTime=l}}function ZM(e,t){var r=e.transformState.scale;BM(e),NM(e,r),void 0!==window.TouchEvent&&t instanceof TouchEvent?function(e,t){var r=t.touches,n=e.transformState,i=n.positionX,o=n.positionY;if(e.isPanning=!0,1===r.length){var a=r[0].clientX,s=r[0].clientY;e.startCoords={x:a-i,y:s-o}}}(e,t):function(e,t){var r=e.transformState,n=r.positionX,i=r.positionY;e.isPanning=!0;var o=t.clientX,a=t.clientY;e.startCoords={x:o-n,y:a-i}}(e,t)}function QM(e){var t=e.transformState.scale,r=e.setup,n=r.minScale,i=r.alignmentAnimation,o=i.disabled,a=i.sizeX,s=i.sizeY,l=i.animationTime,c=i.animationType;if(!(o||t<n||!a&&!s)){var d=function(e){var t=e.transformState,r=t.positionX,n=t.positionY,i=t.scale,o=e.setup,a=o.disabled,s=o.limitToBounds,l=o.centerZoomedOut,c=e.wrapperComponent;if(!a&&c&&e.bounds){var d=e.bounds,u=d.maxPositionX,f=d.minPositionX,h=d.maxPositionY,p=d.minPositionY,g=r>u||r<f,m=n>h||n<p,b=WM(e,r>u?c.offsetWidth:e.setup.minPositionX||0,n>h?c.offsetHeight:e.setup.minPositionY||0,i,e.bounds,s||l),v=b.x,y=b.y;return{scale:i,positionX:g?v:r,positionY:m?y:n}}}(e);d&&zM(e,d,l,c)}}function JM(e,t,r){var n=e.startCoords,i=e.setup.alignmentAnimation,o=i.sizeX,a=i.sizeY;if(n){var s=function(e,t,r){var n=e.startCoords,i=e.transformState,o=e.setup.panning,a=o.lockAxisX,s=o.lockAxisY,l=i.positionX,c=i.positionY;if(!n)return{x:l,y:c};var d=t-n.x,u=r-n.y;return{x:a?l:d,y:s?c:u}}(e,t,r),l=s.x,c=s.y,d=qM(e,o),u=qM(e,a);GM(e,{x:l,y:c}),KM(e,l,c,d,u)}}function eA(e){if(e.isPanning){var t=e.setup.panning.velocityDisabled,r=e.velocity,n=e.wrapperComponent,i=e.contentComponent;e.isPanning=!1,e.animate=!1,e.animation=null;var o=null==n?void 0:n.getBoundingClientRect(),a=null==i?void 0:i.getBoundingClientRect(),s=(null==o?void 0:o.width)||0,l=(null==o?void 0:o.height)||0,c=(null==a?void 0:a.width)||0,d=(null==a?void 0:a.height)||0,u=s<c||l<d;!t&&r&&(null==r?void 0:r.total)>.1&&u?function(e){var t=e.velocity,r=e.bounds,n=e.setup,i=e.wrapperComponent,o=function(e){var t=e.mounted,r=e.velocity,n=e.bounds,i=e.setup,o=i.disabled,a=i.velocityAnimation,s=e.transformState.scale;return!(a.disabled&&!(s>1)&&o&&!t||!r||!n)}(e);if(o&&t&&r&&i){var a=t.velocityX,s=t.velocityY,l=t.total,c=r.maxPositionX,d=r.minPositionX,u=r.maxPositionY,f=r.minPositionY,h=n.limitToBounds,p=n.alignmentAnimation,g=n.zoomAnimation,m=n.panning,b=m.lockAxisY,v=m.lockAxisX,y=g.animationType,x=p.sizeX,w=p.sizeY,$=p.velocityAlignmentTime,C=function(e,t){var r=e.setup.velocityAnimation,n=r.equalToMove,i=r.animationTime,o=r.sensitivity;return n?i*t*o:i}(e,l),S=Math.max(C,$),j=qM(e,x),k=qM(e,w),D=j*i.offsetWidth/100,T=k*i.offsetHeight/100,E=c+D,O=d-D,F=u+T,I=f-T,_=e.transformState,M=(new Date).getTime();RM(e,y,S,(function(t){var r=e.transformState,n=r.scale,i=r.positionX,o=r.positionY,l=((new Date).getTime()-M)/$,g=1-(0,MM[p.animationType])(Math.min(1,l)),m=1-t,y=i+a*m,x=o+s*m,w=XM(y,_.positionX,i,v,h,d,c,O,E,g),C=XM(x,_.positionY,o,b,h,f,u,I,F,g);i===y&&o===x||e.setTransformState(n,w,C)}))}}(e):QM(e)}}function tA(e,t,r,n){var i=e.setup,o=i.minScale,a=i.maxScale,s=i.limitToBounds,l=VM(IM(t,2),o,a,0,!1),c=WM(e,r,n,l,NM(e,l),s);return{scale:l,positionX:c.x,positionY:c.y}}function rA(e,t,r){var n=e.transformState.scale,i=e.wrapperComponent,o=e.setup,a=o.minScale,s=o.limitToBounds,l=o.zoomAnimation,c=l.disabled,d=l.animationTime,u=l.animationType,f=c||n>=a;if((n>=1||s)&&QM(e),!f&&i&&e.mounted){var h=tA(e,a,t||i.offsetWidth/2,r||i.offsetHeight/2);h&&zM(e,h,d,u)}}var nA=function(){return nA=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},nA.apply(this,arguments)};function iA(e,t,r){if(r||2===arguments.length)for(var n,i=0,o=t.length;i<o;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return e.concat(n||Array.prototype.slice.call(t))}var oA=1,aA=0,sA=0,lA={disabled:!1,minPositionX:null,maxPositionX:null,minPositionY:null,maxPositionY:null,minScale:1,maxScale:8,limitToBounds:!0,centerZoomedOut:!1,centerOnInit:!1,disablePadding:!1,smooth:!0,wheel:{step:.2,disabled:!1,smoothStep:.001,wheelDisabled:!1,touchPadDisabled:!1,activationKeys:[],excluded:[]},panning:{disabled:!1,velocityDisabled:!1,lockAxisX:!1,lockAxisY:!1,allowLeftClickPan:!0,allowMiddleClickPan:!0,allowRightClickPan:!0,wheelPanning:!1,activationKeys:[],excluded:[]},pinch:{step:5,disabled:!1,excluded:[]},doubleClick:{disabled:!1,step:.7,mode:"zoomIn",animationType:"easeOut",animationTime:200,excluded:[]},zoomAnimation:{disabled:!1,size:.4,animationTime:200,animationType:"easeOut"},alignmentAnimation:{disabled:!1,sizeX:100,sizeY:100,animationTime:200,velocityAlignmentTime:400,animationType:"easeOut"},velocityAnimation:{disabled:!1,sensitivity:1,animationTime:400,animationType:"easeOut",equalToMove:!0}},cA=function(e){var t,r,n,i;return{previousScale:null!==(t=e.initialScale)&&void 0!==t?t:oA,scale:null!==(r=e.initialScale)&&void 0!==r?r:oA,positionX:null!==(n=e.initialPositionX)&&void 0!==n?n:aA,positionY:null!==(i=e.initialPositionY)&&void 0!==i?i:sA}},dA=function(e){var t=nA({},lA);return Object.keys(e).forEach((function(r){var n=void 0!==e[r];if(void 0!==lA[r]&&n){var i=Object.prototype.toString.call(lA[r]),o="[object Object]"===i,a="[object Array]"===i;t[r]=o?nA(nA({},lA[r]),e[r]):a?iA(iA([],lA[r],!0),e[r],!0):e[r]}})),t},uA=function(e,t,r){var n=e.transformState.scale,i=e.wrapperComponent,o=e.setup,a=o.maxScale,s=o.minScale,l=o.zoomAnimation,c=o.smooth,d=l.size;if(!i)throw new Error("Wrapper is not mounted");var u=c?n*Math.exp(t*r):n+t*r;return VM(IM(u,3),s,a,d,!1)};function fA(e,t,r,n,i){var o=e.wrapperComponent,a=e.transformState,s=a.scale,l=a.positionX,c=a.positionY;if(!o)return console.error("No WrapperComponent found");var d=(o.offsetWidth/2-l)/s,u=(o.offsetHeight/2-c)/s,f=tA(e,uA(e,t,r),d,u);if(!f)return console.error("Error during zoom event. New transformation state was not calculated.");zM(e,f,n,i)}function hA(e,t,r,n){var i=e.setup,o=e.wrapperComponent,a=i.limitToBounds,s=cA(e.props),l=e.transformState,c=l.scale,d=l.positionX,u=l.positionY;if(o){var f=PM(e,s.scale),h=HM(s.positionX,s.positionY,f,a,0,0,o),p={scale:s.scale,positionX:h.x,positionY:h.y};c===s.scale&&d===s.positionX&&u===s.positionY||(null==n||n(),zM(e,p,t,r))}}var pA=function(e){return function(t,r,n){void 0===t&&(t=.5),void 0===r&&(r=300),void 0===n&&(n="easeOut"),fA(e,1,t,r,n)}},gA=function(e){return function(t,r,n){void 0===t&&(t=.5),void 0===r&&(r=300),void 0===n&&(n="easeOut"),fA(e,-1,t,r,n)}},mA=function(e){return function(t,r,n,i,o){void 0===i&&(i=300),void 0===o&&(o="easeOut");var a=e.transformState,s=a.positionX,l=a.positionY,c=a.scale,d=e.wrapperComponent,u=e.contentComponent;if(!e.setup.disabled&&d&&u){var f={positionX:Number.isNaN(t)?s:t,positionY:Number.isNaN(r)?l:r,scale:Number.isNaN(n)?c:n};zM(e,f,i,o)}}},bA=function(e){return function(t,r){void 0===t&&(t=200),void 0===r&&(r="easeOut"),hA(e,t,r)}},vA=function(e){return function(t,r,n){void 0===r&&(r=200),void 0===n&&(n="easeOut");var i=e.transformState,o=e.wrapperComponent,a=e.contentComponent;if(o&&a){var s=jA(t||i.scale,o,a);zM(e,s,r,n)}}},yA=function(e){return function(t,r,n,i){void 0===n&&(n=600),void 0===i&&(i="easeOut"),BM(e);var o=e.wrapperComponent,a="string"==typeof t?document.getElementById(t):t;if(o&&a&&o.contains(a)){var s=function(e,t,r){var n=e.wrapperComponent,i=e.contentComponent,o=e.transformState,a=e.setup,s=a.limitToBounds,l=a.minScale,c=a.maxScale;if(!n||!i)return o;var d,u,f,h,p,g,m,b,v=n.getBoundingClientRect(),y=t.getBoundingClientRect(),x=(d=n,u=i,f=o,h=t.getBoundingClientRect(),p=d.getBoundingClientRect(),g=u.getBoundingClientRect(),m=p.x*f.scale,b=p.y*f.scale,{x:(h.x-g.x+m)/f.scale,y:(h.y-g.y+b)/f.scale}),w=x.x,$=x.y,C=y.width/o.scale,S=y.height/o.scale,j=n.offsetWidth/C,k=n.offsetHeight/S,D=VM(r||Math.min(j,k),l,c,0,!1),T=(v.width-C*D)/2,E=(v.height-S*D)/2,O=HM((v.left-w)*D+T,(v.top-$)*D+E,PM(e,D),s,0,0,n);return{positionX:O.x,positionY:O.y,scale:D}}(e,a,r);zM(e,s,n,i)}}},xA=function(e){return{instance:e,zoomIn:pA(e),zoomOut:gA(e),setTransform:mA(e),resetTransform:bA(e),centerView:vA(e),zoomToElement:yA(e)}},wA=function(e){var t={};return Object.assign(t,function(e){return{instance:e,state:e.transformState}}(e)),Object.assign(t,xA(e)),t};function $A(){try{return{get passive(){return!1}}}catch(e){return!1}}var CA=function(e,t){return t.some((function(t){return e.matches("".concat(t,", .").concat(t,", ").concat(t," *, .").concat(t," *"))}))},SA=function(e){e&&clearTimeout(e)},jA=function(e,t,r){var n=r.offsetWidth*e,i=r.offsetHeight*e;return{scale:e,positionX:(t.offsetWidth-n)/2,positionY:(t.offsetHeight-i)/2}};function kA(e,t,r){var n=t.getBoundingClientRect(),i=0,o=0;if("clientX"in e)i=(e.clientX-n.left)/r,o=(e.clientY-n.top)/r;else{var a=e.touches[0];i=(a.clientX-n.left)/r,o=(a.clientY-n.top)/r}return(Number.isNaN(i)||Number.isNaN(o))&&console.error("No mouse or touch offset found"),{x:i,y:o}}var DA=function(e){return Math.sqrt(Math.pow(e.touches[0].pageX-e.touches[1].pageX,2)+Math.pow(e.touches[0].pageY-e.touches[1].pageY,2))},TA=function(e,t){var r=e.props,n=r.onWheel,i=r.onZoom,o=e.contentComponent,a=e.setup,s=e.transformState.scale,l=a.limitToBounds,c=a.centerZoomedOut,d=a.zoomAnimation,u=a.wheel,f=a.disablePadding,h=a.smooth,p=d.size,g=d.disabled,m=u.step,b=u.smoothStep;if(!o)throw new Error("Component not mounted");t.preventDefault(),t.stopPropagation();var v=function(e,t){var r=function(e){return e?e.deltaY<0?1:-1:0}(e),n=function(e,t){return"number"==typeof e?e:t}(t,r);return n}(t,null),y=function(e,t,r,n,i){var o=e.transformState.scale,a=e.wrapperComponent,s=e.setup,l=s.maxScale,c=s.minScale,d=s.zoomAnimation,u=s.disablePadding,f=d.size,h=d.disabled;if(!a)throw new Error("Wrapper is not mounted");var p=o+t*r;if(i)return p;var g=!n&&!h;return VM(IM(p,3),c,l,f,g&&!u)}(e,v,h?b*Math.abs(t.deltaY):m,!t.ctrlKey);if(s!==y){var x=NM(e,y),w=kA(t,o,s),$=l&&(g||0===p||c||f),C=WM(e,w.x,w.y,y,x,$),S=C.x,j=C.y;e.previousWheelEvent=t,e.setTransformState(y,S,j),_M(wA(e),t,n),_M(wA(e),t,i)}},EA=function(e,t){var r=e.props,n=r.onWheelStop,i=r.onZoomStop;SA(e.wheelAnimationTimer),e.wheelAnimationTimer=setTimeout((function(){e.mounted&&(rA(e,t.x,t.y),e.wheelAnimationTimer=null)}),100);var o=function(e,t){var r=e.previousWheelEvent,n=e.transformState.scale,i=e.setup,o=i.maxScale,a=i.minScale;return!!r&&(n<o||n>a||Math.sign(r.deltaY)!==Math.sign(t.deltaY)||r.deltaY>0&&r.deltaY<t.deltaY||r.deltaY<0&&r.deltaY>t.deltaY||Math.sign(r.deltaY)!==Math.sign(t.deltaY))}(e,t);o&&(SA(e.wheelStopEventTimer),e.wheelStopEventTimer=setTimeout((function(){e.mounted&&(e.wheelStopEventTimer=null,_M(wA(e),t,n),_M(wA(e),t,i))}),160))},OA=function(e,t){var r=e.contentComponent,n=e.pinchStartDistance,i=e.transformState.scale,o=e.setup,a=o.limitToBounds,s=o.centerZoomedOut,l=o.zoomAnimation,c=l.disabled,d=l.size;if(null!==n&&r){var u=function(e,t,r){var n=r.getBoundingClientRect(),i=e.touches,o=IM(i[0].clientX-n.left,5),a=IM(i[0].clientY-n.top,5);return{x:(o+IM(i[1].clientX-n.left,5))/2/t,y:(a+IM(i[1].clientY-n.top,5))/2/t}}(t,i,r);if(Number.isFinite(u.x)&&Number.isFinite(u.y)){var f=DA(t),h=function(e,t){var r=e.pinchStartScale,n=e.pinchStartDistance,i=e.setup,o=i.maxScale,a=i.minScale,s=i.zoomAnimation,l=i.disablePadding,c=s.size,d=s.disabled;if(!r||null===n||!t)throw new Error("Pinch touches distance was not provided");return t<0?e.transformState.scale:VM(IM(t/n*r,2),a,o,c,!d&&!l)}(e,f);if(h!==i){var p=NM(e,h),g=a&&(c||0===d||s),m=WM(e,u.x,u.y,h,p,g),b=m.x,v=m.y;e.pinchMidpoint=u,e.lastDistance=f,e.setTransformState(h,b,v)}}}},FA=function(e,t){var r=e.props.onZoomStop,n=e.setup.doubleClick.animationTime;SA(e.doubleClickStopEventTimer),e.doubleClickStopEventTimer=setTimeout((function(){e.doubleClickStopEventTimer=null,_M(wA(e),t,r)}),n)};function IA(e,t){var r=e.setup,n=e.doubleClickStopEventTimer,i=e.transformState,o=e.contentComponent,a=i.scale,s=e.props,l=s.onZoomStart,c=s.onZoom,d=r.doubleClick,u=d.disabled,f=d.mode,h=d.step,p=d.animationTime,g=d.animationType;if(!u&&!n){if("reset"===f)return function(e,t){var r=e.props,n=r.onZoomStart,i=r.onZoom,o=e.setup.doubleClick,a=o.animationTime,s=o.animationType;_M(wA(e),t,n),hA(e,a,s,(function(){return _M(wA(e),t,i)})),FA(e,t)}(e,t);if(!o)return console.error("No ContentComponent found");var m=function(e,t){return"toggle"===e?1===t?1:-1:"zoomOut"===e?-1:1}(f,e.transformState.scale),b=uA(e,m,h);if(a!==b){_M(wA(e),t,l);var v=kA(t,o,a),y=tA(e,b,v.x,v.y);if(!y)return console.error("Error during zoom event. New transformation state was not calculated.");_M(wA(e),t,c),zM(e,y,p,g),FA(e,t)}}}var _A=function(e){var t=this;this.mounted=!0,this.onChangeCallbacks=new Set,this.onInitCallbacks=new Set,this.wrapperComponent=null,this.contentComponent=null,this.isInitialized=!1,this.bounds=null,this.previousWheelEvent=null,this.wheelStopEventTimer=null,this.wheelAnimationTimer=null,this.isPanning=!1,this.isWheelPanning=!1,this.startCoords=null,this.lastTouch=null,this.distance=null,this.lastDistance=null,this.pinchStartDistance=null,this.pinchStartScale=null,this.pinchMidpoint=null,this.doubleClickStopEventTimer=null,this.velocity=null,this.velocityTime=null,this.lastMousePosition=null,this.animate=!1,this.animation=null,this.maxBounds=null,this.pressedKeys={},this.mount=function(){t.initializeWindowEvents()},this.unmount=function(){t.cleanupWindowEvents()},this.update=function(e){t.props=e,NM(t,t.transformState.scale),t.setup=dA(e)},this.initializeWindowEvents=function(){var e,r,n=$A(),i=null===(e=t.wrapperComponent)||void 0===e?void 0:e.ownerDocument,o=null==i?void 0:i.defaultView;null===(r=t.wrapperComponent)||void 0===r||r.addEventListener("wheel",t.onWheelPanning,n),null==o||o.addEventListener("mousedown",t.onPanningStart,n),null==o||o.addEventListener("mousemove",t.onPanning,n),null==o||o.addEventListener("mouseup",t.onPanningStop,n),null==i||i.addEventListener("mouseleave",t.clearPanning,n),null==o||o.addEventListener("keyup",t.setKeyUnPressed,n),null==o||o.addEventListener("keydown",t.setKeyPressed,n)},this.cleanupWindowEvents=function(){var e,r,n=$A(),i=null===(e=t.wrapperComponent)||void 0===e?void 0:e.ownerDocument,o=null==i?void 0:i.defaultView;null==o||o.removeEventListener("mousedown",t.onPanningStart,n),null==o||o.removeEventListener("mousemove",t.onPanning,n),null==o||o.removeEventListener("mouseup",t.onPanningStop,n),null==i||i.removeEventListener("mouseleave",t.clearPanning,n),null==o||o.removeEventListener("keyup",t.setKeyUnPressed,n),null==o||o.removeEventListener("keydown",t.setKeyPressed,n),document.removeEventListener("mouseleave",t.clearPanning,n),BM(t),null===(r=t.observer)||void 0===r||r.disconnect()},this.handleInitializeWrapperEvents=function(e){var r=$A();e.addEventListener("wheel",t.onWheelZoom,r),e.addEventListener("dblclick",t.onDoubleClick,r),e.addEventListener("touchstart",t.onTouchPanningStart,r),e.addEventListener("touchmove",t.onTouchPanning,r),e.addEventListener("touchend",t.onTouchPanningStop,r)},this.handleInitialize=function(e){var r=t.setup.centerOnInit;t.applyTransformation(),t.onInitCallbacks.forEach((function(e){return e(wA(t))})),r&&(t.setCenter(),t.observer=new ResizeObserver((function(){var r,n=e.offsetWidth,i=e.offsetHeight;(n>0||i>0)&&(t.onInitCallbacks.forEach((function(e){return e(wA(t))})),t.setCenter(),null===(r=t.observer)||void 0===r||r.disconnect())})),setTimeout((function(){var e;null===(e=t.observer)||void 0===e||e.disconnect()}),5e3),t.observer.observe(e))},this.onWheelZoom=function(e){if(!t.setup.disabled){var r=function(e,t){var r=e.setup.wheel,n=r.disabled,i=r.wheelDisabled,o=r.touchPadDisabled,a=r.excluded,s=e.isInitialized,l=e.isPanning,c=t.target;return!(!s||l||n||!c||i&&!t.ctrlKey||o&&t.ctrlKey||CA(c,a))}(t,e);r&&t.isPressingKeys(t.setup.wheel.activationKeys)&&(function(e,t){var r=e.props,n=r.onWheelStart,i=r.onZoomStart;e.wheelStopEventTimer||(BM(e),_M(wA(e),t,n),_M(wA(e),t,i))}(t,e),TA(t,e),EA(t,e))}},this.onWheelPanning=function(e){var r=t.setup,n=r.disabled,i=r.wheel,o=r.panning;if(t.wrapperComponent&&t.contentComponent&&!n&&i.wheelDisabled&&!o.disabled&&o.wheelPanning&&!e.ctrlKey){e.preventDefault(),e.stopPropagation();var a=t.transformState,s=a.positionX,l=a.positionY,c=s-e.deltaX,d=l-e.deltaY,u=o.lockAxisX?s:c,f=o.lockAxisY?l:d,h=t.setup.alignmentAnimation,p=h.sizeX,g=h.sizeY,m=qM(t,p),b=qM(t,g);u===s&&f===l||KM(t,u,f,m,b)}},this.onPanningStart=function(e){var r=t.setup.disabled,n=t.props.onPanningStart;r||YM(t,e)&&t.isPressingKeys(t.setup.panning.activationKeys)&&(0!==e.button||t.setup.panning.allowLeftClickPan)&&(1!==e.button||t.setup.panning.allowMiddleClickPan)&&(2!==e.button||t.setup.panning.allowRightClickPan)&&(e.preventDefault(),e.stopPropagation(),BM(t),ZM(t,e),_M(wA(t),e,n))},this.onPanning=function(e){var r=t.setup.disabled,n=t.props.onPanning;r||UM(t)&&t.isPressingKeys(t.setup.panning.activationKeys)&&(e.preventDefault(),e.stopPropagation(),JM(t,e.clientX,e.clientY),_M(wA(t),e,n))},this.onPanningStop=function(e){var r=t.props.onPanningStop;t.isPanning&&(eA(t),_M(wA(t),e,r))},this.onPinchStart=function(e){var r=t.setup.disabled,n=t.props,i=n.onPinchingStart,o=n.onZoomStart;if(!r){var a=function(e,t){var r=e.setup.pinch,n=r.disabled,i=r.excluded,o=e.isInitialized,a=t.target;return!(!o||n||!a||CA(a,i))}(t,e);a&&(function(e,t){var r=DA(t);e.pinchStartDistance=r,e.lastDistance=r,e.pinchStartScale=e.transformState.scale,e.isPanning=!1,BM(e)}(t,e),BM(t),_M(wA(t),e,i),_M(wA(t),e,o))}},this.onPinch=function(e){var r=t.setup.disabled,n=t.props,i=n.onPinching,o=n.onZoom;if(!r){var a=function(e){var t=e.setup.pinch.disabled,r=e.isInitialized,n=e.pinchStartDistance;return!(!r||t||!n)}(t);a&&(e.preventDefault(),e.stopPropagation(),OA(t,e),_M(wA(t),e,i),_M(wA(t),e,o))}},this.onPinchStop=function(e){var r,n,i=t.props,o=i.onPinchingStop,a=i.onZoomStop;t.pinchStartScale&&(n=(r=t).pinchMidpoint,r.velocity=null,r.lastDistance=null,r.pinchMidpoint=null,r.pinchStartScale=null,r.pinchStartDistance=null,rA(r,null==n?void 0:n.x,null==n?void 0:n.y),_M(wA(t),e,o),_M(wA(t),e,a))},this.onTouchPanningStart=function(e){var r=t.setup.disabled,n=t.props.onPanningStart;if(!r&&YM(t,e))if(t.lastTouch&&+new Date-t.lastTouch<200&&1===e.touches.length)t.onDoubleClick(e);else{t.lastTouch=+new Date,BM(t);var i=e.touches,o=1===i.length,a=2===i.length;o&&(BM(t),ZM(t,e),_M(wA(t),e,n)),a&&t.onPinchStart(e)}},this.onTouchPanning=function(e){var r=t.setup.disabled,n=t.props.onPanning;if(t.isPanning&&1===e.touches.length){if(r)return;if(!UM(t))return;e.preventDefault(),e.stopPropagation();var i=e.touches[0];JM(t,i.clientX,i.clientY),_M(wA(t),e,n)}else e.touches.length>1&&t.onPinch(e)},this.onTouchPanningStop=function(e){t.onPanningStop(e),t.onPinchStop(e)},this.onDoubleClick=function(e){if(!t.setup.disabled){var r=function(e,t){var r=e.isInitialized,n=e.setup,i=e.wrapperComponent,o=n.doubleClick,a=o.disabled,s=o.excluded,l=t.target,c=null==i?void 0:i.contains(l);return!(!(r&&l&&c)||a||CA(l,s))}(t,e);r&&IA(t,e)}},this.clearPanning=function(e){t.isPanning&&t.onPanningStop(e)},this.setKeyPressed=function(e){t.pressedKeys[e.key]=!0},this.setKeyUnPressed=function(e){t.pressedKeys[e.key]=!1},this.isPressingKeys=function(e){return!e.length||Boolean(e.find((function(e){return t.pressedKeys[e]})))},this.setTransformState=function(e,r,n){var i=t.props.onTransformed;if(Number.isNaN(e)||Number.isNaN(r)||Number.isNaN(n))console.error("Detected NaN set state values");else{e!==t.transformState.scale&&(t.transformState.previousScale=t.transformState.scale,t.transformState.scale=e),t.transformState.positionX=r,t.transformState.positionY=n,t.applyTransformation();var o=wA(t);t.onChangeCallbacks.forEach((function(e){return e(o)})),_M(o,{scale:e,positionX:r,positionY:n},i)}},this.setCenter=function(){if(t.wrapperComponent&&t.contentComponent){var e=jA(t.transformState.scale,t.wrapperComponent,t.contentComponent);t.setTransformState(e.scale,e.positionX,e.positionY)}},this.handleTransformStyles=function(e,r,n){return t.props.customTransform?t.props.customTransform(e,r,n):function(e,t,r){return"translate(".concat(e,"px, ").concat(t,"px) scale(").concat(r,")")}(e,r,n)},this.applyTransformation=function(){if(t.mounted&&t.contentComponent){var e=t.transformState,r=e.scale,n=e.positionX,i=e.positionY,o=t.handleTransformStyles(n,i,r);t.contentComponent.style.transform=o}},this.getContext=function(){return wA(t)},this.onChange=function(e){return t.onChangeCallbacks.has(e)||t.onChangeCallbacks.add(e),function(){t.onChangeCallbacks.delete(e)}},this.onInit=function(e){return t.onInitCallbacks.has(e)||t.onInitCallbacks.add(e),function(){t.onInitCallbacks.delete(e)}},this.init=function(e,r){t.cleanupWindowEvents(),t.wrapperComponent=e,t.contentComponent=r,NM(t,t.transformState.scale),t.handleInitializeWrapperEvents(e),t.handleInitialize(r),t.initializeWindowEvents(),t.isInitialized=!0;var n=wA(t);_M(n,void 0,t.props.onInit)},this.props=e,this.setup=dA(this.props),this.transformState=cA(this.props)},MA=Y.default.createContext(null),AA=Y.default.forwardRef((function(e,r){var n=t.useRef(new _A(e)).current,i=function(e,t){return"function"==typeof e?e(t):e}(e.children,xA(n));return t.useImperativeHandle(r,(function(){return xA(n)}),[n]),t.useEffect((function(){n.update(e)}),[n,e]),Y.default.createElement(MA.Provider,{value:n},i)}));Y.default.forwardRef((function(e,r){var n,i=t.useRef(null),o=t.useContext(MA);return t.useEffect((function(){return o.onChange((function(e){if(i.current){i.current.style.transform=o.handleTransformStyles(0,0,1/e.instance.transformState.scale)}}))}),[o]),Y.default.createElement("div",nA({},e,{ref:(n=[i,r],function(e){n.forEach((function(t){"function"==typeof t?t(e):null!=t&&(t.current=e)}))})}))}));var BA="transform-component-module_wrapper__SPB86",RA="transform-component-module_content__FBWxo";!function(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===r&&n.firstChild?n.insertBefore(i,n.firstChild):n.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}(".transform-component-module_wrapper__SPB86 {\n  position: relative;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  overflow: hidden;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Safari */\n  -khtml-user-select: none; /* Konqueror HTML */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none;\n  margin: 0;\n  padding: 0;\n}\n.transform-component-module_content__FBWxo {\n  display: flex;\n  flex-wrap: wrap;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin: 0;\n  padding: 0;\n  transform-origin: 0% 0%;\n}\n.transform-component-module_content__FBWxo img {\n  pointer-events: none;\n}\n");var zA=function(e){var r=e.children,n=e.wrapperClass,i=void 0===n?"":n,o=e.contentClass,a=void 0===o?"":o,s=e.wrapperStyle,l=e.contentStyle,c=e.wrapperProps,d=void 0===c?{}:c,u=e.contentProps,f=void 0===u?{}:u,h=t.useContext(MA),p=h.init,g=h.cleanupWindowEvents,m=t.useRef(null),b=t.useRef(null);return t.useEffect((function(){var e=m.current,t=b.current;return null!==e&&null!==t&&p&&(null==p||p(e,t)),function(){null==g||g()}}),[]),Y.default.createElement("div",nA({},d,{ref:m,className:"react-transform-wrapper ".concat(BA," ").concat(i),style:s}),Y.default.createElement("div",nA({},f,{ref:b,className:"react-transform-component ".concat(RA," ").concat(a),style:l}),r))};const PA=K.default.div`
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
`,LA=t=>e.jsx(PA,Object.assign({},t,{children:e.jsx(u.PlaceholderImageIcon,{})})),NA=K.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,HA=K.default.img`
    height: 100%;
    width: 100%;
    object-fit: ${e=>e.$fit||"contain"};
`,WA=K.default(LA)`
    width: 100%;
    height: 100%;
`,VA=({src:r,className:n,alt:i,fit:o,placeholder:a,retrieveImageDimension:s,setDimension:l})=>{const[c,d]=t.useState(!0),[u,f]=t.useState();t.useEffect((()=>{d(!0),f(void 0);const e=new Image;e.src=r,e.onload=()=>{s&&l&&l({src:r,width:e.width,height:e.height}),d(!1)},e.onerror=e=>{d(!1),f(e)}}),[r]);return e.jsx(NA,{className:n,children:u?null!=a?a:e.jsx(WA,{}):c?e.jsx(lc,{}):e.jsx(HA,{src:r,alt:i,$fit:o})})},YA=K.default(nl)`
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
`,UA=K.default(YA)`
    position: absolute;
    top: ${Zs["spacing-48"]};
    right: ${Zs["spacing-48"]};
    z-index: 5;

    ${el.MaxWidth.sm} {
        top: ${Zs["spacing-20"]};
        right: ${Zs["spacing-20"]};
    }
`,KA=K.default(YA)`
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
`,qA=K.default(YA)`
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
`,XA=K.default.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`,GA=K.default.div`
    user-select: none;
    position: relative;
    display: block;
    overflow: hidden;
    width: 100%;
    height: 100%;
`,ZA=K.default.div`
    display: block;
    user-select: none;
    height: 100%;
    overflow: hidden;
    touch-action: pan-y;
`,QA=K.default.div`
    display: flex;
    transition: all 450ms ease-out 0s;
    position: relative;
    text-align: center;
    user-select: none;
    width: 100%;
    height: 100%;
`,JA=K.default.div`
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
`,eB=K.default(VA)`
    height: 100%;
    width: 100%;
`,tB=K.default(LA)`
    width: 60vw;
    height: auto;
    max-height: 100%;
    aspect-ratio: 4 / 3;
`,rB=K.default.div`
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
`,nB=K.default(exports.Typography.BodyXS)`
    display: inline-flex;
    padding: ${Zs["spacing-4"]} ${Zs["spacing-16"]};
    justify-content: center;
    align-items: center;
    border-radius: ${Qs.full};
    background-color: ${Ks.bg};
    text-align: center;
`,iB=K.default.div`
    flex-shrink: 0;
    display: flex;
    overflow: auto;
    background-color: ${Ks["bg-inverse"]};
    padding: ${Zs["spacing-24"]} ${Zs["spacing-16"]};

    ${el.MaxWidth.sm} {
        padding: ${Zs["spacing-16"]} ${Zs["spacing-20"]};
    }
`,oB=K.default.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    gap: ${Zs["spacing-16"]};
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
`,aB=K.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    width: 100px;

    ${el.MaxWidth.sm} {
        height: 64px;
        width: 64px;
    }
`,sB=K.default.div`
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
`,lB=K.default(VA)`
    height: 100%;
    width: 100%;
`,cB=(r,n)=>{var{items:i,initialActiveItemIndex:o,hideThumbnail:a=!1,hideNavigation:s=!1,hideCounter:l=!1,hideMagnifier:c=!1,onClose:d}=r,f=X(r,["items","initialActiveItemIndex","hideThumbnail","hideNavigation","hideCounter","hideMagnifier","onClose"]);const[h,p]=t.useState(null!=o?o:0),[g,m]=t.useState({}),[b,v]=t.useState(1),[y,x]=t.useState(),[w,$]=t.useState(),C=t.useRef(null),S=t.useRef([]),j=t.useRef([]),k=y&&w?y-w:0;t.useImperativeHandle(n,(()=>({currentItemIndex:h,setCurrentItem:I,goToPrevItem:O,goToNextItem:F}))),td("keydown",(function(e){"ArrowRight"===e.key?F():"ArrowLeft"===e.key?O():"Escape"===e.key&&d&&d()}),"document"),t.useEffect((()=>{var e,t;null===(t=null===(e=S.current)||void 0===e?void 0:e[h])||void 0===t||t.scrollIntoView({behavior:"smooth",inline:"center"}),v(1)}),[h]);const D=e=>{v(e.state.scale)};const T=({src:e,height:t,width:r})=>{m((n=>Object.assign(Object.assign({},n),{[e]:{height:t,width:r}})))},E=()=>{const e=g[i[h].src];if(C.current&&e){const{clientHeight:t,clientWidth:r}=C.current,{width:n,height:i}=e,o=i/n<t/r;return n<r&&i<t?o?r/n:t/i:o?t/(i/(n/r)):r/(n/(i/t))}},O=()=>{var e,t;null===(t=null===(e=j.current)||void 0===e?void 0:e[h])||void 0===t||t.resetTransform(),p((e=>0===e?i.length-1:e-1))},F=()=>{var e,t;null===(t=null===(e=j.current)||void 0===e?void 0:e[h])||void 0===t||t.resetTransform(),p((e=>e===i.length-1?0:e+1))},I=e=>{var t,r;null===(r=null===(t=j.current)||void 0===t?void 0:t[h])||void 0===r||r.resetTransform(),p(e)};return e.jsxs(Sp,Object.assign({},f,{"data-testid":"image-carousel-modal",children:[e.jsx(UA,{"aria-label":"Close image carousel",onClick:d,focusHighlight:!1,children:e.jsx(u.CrossIcon,{"aria-hidden":!0})}),!c&&e.jsx(KA,{"aria-label":1===b?"Zoom in":"Zoom out",onClick:()=>{var e,t,r,n;if(1===b){const r=E();null===(t=null===(e=j.current)||void 0===e?void 0:e[h])||void 0===t||t.centerView(r),v(null!=r?r:1)}else v(1),null===(n=null===(r=j.current)||void 0===r?void 0:r[h])||void 0===n||n.resetTransform()},focusHighlight:!1,children:1===b?e.jsx(u.MagnifierPlusIcon,{"aria-hidden":!0}):e.jsx(u.MagnifierMinusIcon,{"aria-hidden":!0})}),e.jsxs(XA,{children:[e.jsxs(GA,{children:[!s&&e.jsxs(e.Fragment,{children:[e.jsx(qA,{"aria-label":"View previous image","data-testid":"prev-btn",$position:"left",onClick:O,children:e.jsx(u.ChevronLeftIcon,{"aria-hidden":!0})}),e.jsx(qA,{"aria-label":"View next image","data-testid":"forward-btn",$position:"right",onClick:F,children:e.jsx(u.ChevronRightIcon,{"aria-hidden":!0})})]}),e.jsx(ZA,{ref:C,onTouchStart:e=>{b<=1&&x(e.touches[0].clientX)},onTouchMove:e=>{!y||b>1||$(e.touches[0].clientX)},onTouchEnd:()=>{C.current&&(Math.abs(k)>C.current.offsetWidth/3&&(k>0?F():O()),x(void 0),$(void 0))},children:e.jsx(QA,{style:{transform:`translateX(calc(${100*-h}% - ${k}px))`},children:i.map(((t,r)=>{var n;return e.jsx(JA,{"data-testid":"slide-item",children:e.jsx(AA,{ref:e=>j.current[r]=e,panning:{disabled:b<=1},initialScale:1,onZoom:D,onZoomStop:D,onWheel:D,children:e.jsx(zA,{children:e.jsx(eB,{src:t.src,alt:null!==(n=t.alt)&&void 0!==n?n:`Image ${r+1}`,placeholder:e.jsx(tB,{}),fit:"scale-down",retrieveImageDimension:!0,setDimension:T})})})},r)}))})}),!l&&e.jsx(rB,{children:e.jsx(nB,{weight:"semibold",children:`${h+1}/${i.length}`})})]}),!a&&e.jsx(iB,{children:e.jsx(oB,{children:i.map(((t,r)=>{var n;const i=null!==(n=t.thumbnailSrc)&&void 0!==n?n:t.src;return e.jsx(aB,{children:e.jsx(sB,{"data-testid":"thumbnail-item",$active:r===h,onClick:()=>I(r),ref:e=>S.current[r]=e,children:e.jsx(lB,{src:i,alt:`Thumbnail ${r+1}`,fit:"cover"})})},r)}))})})]})]}))},dB=t.forwardRef(cB),uB=K.default.button`
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
`,fB=Y.default.forwardRef(((t,r)=>{var{children:n,imgSrc:i,selected:o,error:a,type:s="button"}=t,l=X(t,["children","imgSrc","selected","error","type"]);return e.jsxs(uB,Object.assign({ref:r,$selected:o,$error:a,type:s},l,{children:[e.jsx(gg,{src:i}),n]}))})),hB=i.css`
    height: 1.125rem;
    width: 1.125rem;
    color: ${Ks["icon-primary"]};
`,pB=K.default.div`
    border-top: ${Gs["width-010"]} ${Gs.solid} ${Ks.border};
    border-bottom: ${Gs["width-010"]} ${Gs.solid} ${Ks.border};
`,gB=K.default(exports.Typography.HeadingSM).attrs({as:"div"})`
    color: ${Ks["text-primary"]};
    margin-bottom: 0.5rem;
`,mB=K.default(exports.Typography.HeadingXS).attrs({as:"div"})`
    color: ${Ks["text-primary"]};
`,bB=K.default(h.ChevronRightIcon)`
    ${hB}
`,vB=K.default.a`
    padding: 1rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 4rem;

    :not(:last-of-type) {
        border-bottom: ${Gs["width-010"]} ${Gs.solid} ${Ks.border};
    }

    :hover {
        ${gB},
        ${mB},
        ${bB} {
            color: ${Ks["text-hover"]};
        }
    }
`,yB=K.default.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-right: 1rem;
`,xB=K.default(exports.Typography.BodyMD)`
    margin-top: 0.25rem;
`,wB=K.default(Di.div)`
    overflow: hidden;
`,$B=K.default.div`
    border-top: ${Gs["width-010"]} ${Gs.solid} ${Ks.border};
`,CB=K.default(exports.Typography.BodyMD).attrs({as:"span"})`
    color: ${Ks["text-primary"]};
    margin-right: 1rem;
`,SB=K.default(A.PlusIcon)`
    ${hB}
`,jB=K.default(M.MinusIcon)`
    ${hB}
`,kB=K.default.button`
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
        ${CB},
        ${SB},
        ${jB} {
            color: ${Ks["text-hover"]};
        }
    }
`,DB=K.default.div`
    ${e=>ql({textSize:e.$textSize})}
    ${e=>e.color&&i.css`
            color: ${e.color};
        `}
`,TB=t.forwardRef(((t,r)=>{const{baseTextColor:n,baseTextSize:i,inline:o}=t,a=X(t,["baseTextColor","baseTextSize","inline"]);return e.jsx(DB,Object.assign({ref:r,as:o?"span":"div",$textSize:i,$textColor:n},a))})),EB=K.default.div`
    margin-top: 2.5rem;
    display: grid;
    align-items: center;
    width: 100%;

    ${e=>{const{numOfCols:t}=e,r=t.lg||t.md,n=t.sm?t.sm<=2?t.sm:2:void 0,o=t.md||t.sm||2;return i.css`
            grid-template-columns: repeat(${r||"auto-fill"}, 1fr);
            gap: 2rem 2rem;
            justify-items: stretch;

            ${Qh.MaxWidth.tablet} {
                grid-template-columns: repeat(
                    ${t.md||t.sm||"auto-fill"},
                    minmax(calc(${100/o}% - 2rem), 1fr)
                );
            }

            ${Qh.MaxWidth.mobileL} {
                grid-template-columns: repeat(
                    ${n||"auto-fill"},
                    minmax(calc(${100/(n||1)}% - 2rem), 1fr)
                );
            }
        `}}
`,OB=K.default.div`
    position: relative;
    ${e=>{const{startLg:t,colsLg:r,startMd:n,colsMd:o,startSm:a,colsSm:s}=e;return i.css`
            grid-column: ${t||n||"auto"} / span
                ${r||o||1};

            ${Qh.MaxWidth.tablet} {
                grid-column: ${n||a||"auto"} / span
                    ${o||s||1};
            }

            ${Qh.MaxWidth.mobileL} {
                grid-column: ${a||"auto"} / span ${s||1};
            }
        `}}
`,FB={Grid:Y.default.forwardRef(((t,r)=>{const{children:n}=t,i=X(t,["children"]);return e.jsx(EB,Object.assign({ref:r},i,{children:n}))})),Tile:Y.default.forwardRef(((t,r)=>{const{children:n}=t,i=X(t,["children"]);return e.jsx(OB,Object.assign({ref:r},i,{children:n}))}))},IB=K.default.div`
    background: hsl(0, 0%, 94%);
    padding: 0 0.5rem;

    ${el.MaxWidth.sm} {
        padding: 0;
    }
`,_B=()=>{t.useEffect((()=>{r()||n()}),[]);const r=()=>document.getElementById(MB),n=()=>{if(!document.getElementById(MB)){const e=document.createElement("script");e.id=MB,e.type="module",e.src=AB,document.head.appendChild(e)}};return e.jsx(IB,{dangerouslySetInnerHTML:{__html:"<sgds-masthead></sgds-masthead>"}})},MB="lifesg-ds-masthead-script",AB="https://cdn.jsdelivr.net/npm/@govtechsg/sgds-web-component/Masthead/index.js",BB={notCompress:6,compress:4},RB=K.default.div`
    position: ${e=>e.$fixed?"sticky":"relative"};
    background-color: white;
    z-index: 30;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`,zB=K.default.nav`
    height: ${e=>e.$compress?BB.compress:BB.notCompress}rem;
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
`,PB=K.default.div`
    display: flex;
    height: 100%;
    margin-left: ${e=>e.$hideNavBranding?"0":"5rem"};
    flex: 1;
    justify-content: flex-end;

    ${el.MaxWidth.lg} {
        margin-left: 0rem;
    }
`,LB=K.default(nl)`
    display: none;

    ${el.MaxWidth.lg} {
        display: flex;
        padding: 0 1.5rem;
        margin-right: -1.5rem;
    }
`,NB=K.default(B.MenuIcon)`
    height: 1.5rem;
    width: 1.5rem;
    color: ${Ks.icon};
`,HB=K.default.div`
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
`,WB=K.default.div`
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
`,VB=K.default.a`
    display: flex;
    justify-content: center;
    height: 100%;

    img {
        width: auto;
        height: 100%;
        transition: ${Xs["duration-150"]} ${Xs["ease-default"]};
        object-fit: contain;
    }
`,YB=({resources:t,onClick:r,"data-id":n,"data-testid":i="navbar-brand",type:o})=>e.jsx(VB,{role:"link",onClick:e=>{r&&r(e,o)},tabIndex:0,"data-id":n,"data-testid":i,$type:o,children:e.jsx(gg,{src:t.logoSrc,alt:t.brandName})}),UB=K.default.div`
    display: none;

    ${el.MaxWidth.lg} {
        display: flex;
    }
`,KB=K.default.div`
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
`,qB=K.default.div`
    display: flex;
    flex-direction: column;
`,XB=K.default.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: ${Zs["spacing-40"]} ${Zs["spacing-20"]}
        ${Zs["spacing-32"]};
`,GB=K.default(m.CrossIcon)`
    height: 1.5rem;
    width: 1.5rem;
`,ZB=K.default(nl)`
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
`,QB=Y.default.forwardRef(((r,n)=>{const{show:i,resources:o={},children:a,hideNavBranding:s,onClose:l,onBrandClick:c}=r,[d,u]=t.useState(0),{primary:f,secondary:h}=o;t.useEffect((()=>(p(),window.addEventListener("resize",p),()=>{window.removeEventListener("resize",p)})),[]);const p=()=>{if(window){const e=.01*window.innerHeight;u(e)}};return e.jsx(UB,{ref:n,"data-testid":"drawer",children:e.jsx(KB,{$show:i,$viewHeight:d,children:e.jsxs(qB,{children:[e.jsxs(XB,{children:[e.jsx(HB,{"data-id":"drawer-brand-container",children:!s&&e.jsxs(e.Fragment,{children:[f&&e.jsx(YB,{resources:f,compress:!0,onClick:c,"data-id":"drawer-brand-primary","data-testid":"drawer__brand",type:"primary"}),h&&e.jsxs(e.Fragment,{children:[e.jsx(WB,{}),e.jsx(YB,{resources:h,compress:!0,onClick:c,"data-id":"drawer-brand-secondary","data-testid":"drawer__brand-secondary",type:"secondary"})]})]})}),e.jsx(ZB,{onClick:l,focusHighlight:!1,"aria-label":"Close nav menu",children:e.jsx(GB,{})})]}),a]})})})})),JB=K.default.ul`
    display: flex;
    list-style: none;
    margin-left: ${Zs["spacing-64"]};
    flex-shrink: 0;

    ${el.MaxWidth.lg} {
        display: none;
    }
`,eR=K.default.ul`
    display: none;

    ${el.MaxWidth.lg} {
        display: flex;
        list-style: none;
        margin-left: ${Zs["spacing-64"]};
        flex-shrink: 0;
    }
`,tR=K.default.ul`
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
`,rR=K.default.li`
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
`,nR=K.default(Hl.Small)`
    ${el.MaxWidth.lg} {
        width: 100%;
    }
`,iR=K.default.div`
    display: none;

    ${el.MaxWidth.lg} {
        display: flex;
        flex-direction: column;
        margin-top: ${Zs["spacing-40"]};
    }
`,oR=K.default(exports.Typography.BodyMD)`
    margin-bottom: ${Zs["spacing-8"]};
`,aR=K.default.div`
    display: flex;
`,sR=K.default.a`
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
`,lR=({actionButtons:t,mobile:r=!1,onActionButtonClick:n})=>{const i=e=>{e.stopPropagation()},o=e=>t=>{t.stopPropagation(),"download"===e.type&&window.scrollTo({left:0,top:document.body.scrollHeight,behavior:"smooth"}),n(t,e)},a=(t,r)=>{const n=t?(e=>{const t=cS(e,(e=>"download"===e.type));if(t>-1){const r=[...e],n=r.splice(t,1);return[...r,n[0]]}return e})(r):r;return n.map(((r,n)=>{let a;switch(r.type){case"download":a=t?(s=r.args,e.jsxs(iR,{children:[e.jsx(oR,{weight:"semibold",children:s&&s.children||"Download the app"}),e.jsxs(aR,{children:[e.jsx(sR,{href:"https://apps.apple.com/sg/app/moments-of-life/id1383218758",target:"_blank",rel:"noopener noreferrer","data-testid":"button__app-store",onClick:i,children:e.jsx("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/apple-app-store.png",alt:"apple-app-store"})}),e.jsx(sR,{href:"https://play.google.com/store/apps/details?id=sg.gov.app.mol&hl=en_SG",target:"_blank",rel:"noopener noreferrer","data-testid":"button__play-store",onClick:i,children:e.jsx("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/google-play-store.png",alt:"google-play-store"})})]})]})):e.jsx(nR,Object.assign({},r.args,{type:"button",onClick:o(r),"data-testid":"action-button__download",children:"Download the app"}));break;case"button":{const i=r.args["data-testid"]?`action-button__${r.args["data-testid"]}`:`action-button__button-${t?"mobile-":""}${n+1}`;a=e.jsx(nR,Object.assign({},r.args,{type:"button",onClick:o(r),"data-testid":i}));break}case"component":{const e=r.args;a=e&&e.render||null;break}default:a=null}var s;if(a)return e.jsx(rR,{$mobile:t,children:a},`action-button-${n+1}`)}))};if(t){const n=(null==t?void 0:t.mobile)||t.desktop,i=n.filter((e=>!!e.uncollapsible)),o=n.filter((e=>!e.uncollapsible));return r?e.jsx(e.Fragment,{children:o.length>0&&e.jsx(tR,{children:a(r,o)})}):e.jsxs(e.Fragment,{children:[i.length>0&&e.jsx(eR,{children:a(!1,i)}),t.desktop.length>0&&e.jsx(JB,{children:a(r,t.desktop)})]})}return e.jsx(e.Fragment,{})};var cR;!function(e){e.isNavItemCommon=e=>!!e.onClick,e.isNavItemLink=e=>{const t=e;return!t.itemType||"link"===t.itemType}}(cR||(cR={}));const dR=K.default.ul`
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
`,uR=K.default.ul`
    display: none;
    list-style: none;

    ${el.MaxWidth.lg} {
        border-left: ${Gs["width-040"]} solid ${Ks["border-selected"]};
        display: flex;
        flex-direction: column;
    }
`,fR=K.default(exports.Typography.LinkBL)`
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
`,hR=K.default.li`
    width: 100%;
    position: relative;
    display: flex;
    align-items: flex-start;
`,pR=({items:t,mobile:r=!1,onItemClick:n})=>{const i=e=>t=>{t.stopPropagation(),n(t,e)},o=(r=!1)=>t.map(((t,n)=>{const{children:o,options:a}=t,s=X(t,["children","options"]),l=r?`link__mobile-${n+1}`:`link__${n+1}`;return e.jsx(hR,{children:e.jsx(fR,Object.assign({"data-testid":l},s,{onClick:i(t)},a,{children:o}))},n)}));if(t&&t.length>0){const t=r?uR:dR;return e.jsx(t,{children:o(r)})}return e.jsx(e.Fragment,{})},gR=K.default.ul`
    display: flex;
    list-style: none;
    position: relative;

    ${e=>e.$alignLeft&&"margin-right: auto;"}

    ${el.MaxWidth.lg} {
        display: none;
    }
`,mR=K.default.ul`
    display: none;
    list-style: none;

    ${el.MaxWidth.lg} {
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
`,bR=K.default.li`
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
`,vR=K.default(exports.Typography.LinkMD)`
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
`,yR=K.default.div`
    flex: 1;
    margin-top: 0.25rem;

    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    white-space: pre-wrap;
`,xR=K.default.div`
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
`,wR=K.default.div`
    padding-left: 0.5rem;
    margin-right: -0.5rem;
`,$R=K.default(nl)`
    padding: 0.5rem;
    transform: rotate(${e=>e.$selected?0:180}deg);
    transition: transform 300ms ease-in-out;
    margin: auto 0.25rem auto 0;
`,CR=K.default(n.ChevronUpIcon)`
    height: 1.25rem;
    width: 1.25rem;
    color: ${Ks.icon};
    :hover {
        ${e=>e.$selected?Ks["icon-selected-hover"]:Ks["icon-hover"]};
    }
`,SR=({items:r,selectedId:n,mobile:i=!1,hideNavBranding:o,onItemClick:a})=>{const[s,l]=t.useState(-1),[c,d]=t.useState(!1),u=t.useRef(null);t.useEffect((()=>{const e=e=>{u.current&&!u.current.contains(e.target)&&f()};return document.addEventListener("click",e,!0),()=>{document.removeEventListener("click",e,!0)}}),[]);const f=()=>{d(!1)},h=(e,t)=>r=>{r.stopPropagation(),l(t),d(!0),a(r,e)},p=(e,t)=>{e.stopPropagation(),a(e,t),d(!1)},g=()=>r.map(((t,r)=>{if("component"===t.itemType){const n=t&&t.children||null;return e.jsx("li",{children:n},r)}{const a=(e=>{if(e.id===n)return!0;if(e.subMenu&&e.subMenu.length>=1)return!!e.subMenu.find((e=>e.id===n));return!1})(t),{children:l,options:d}=t,u=X(t,["children","options"]),f=a?i?"bold":"semibold":"regular",g=i?`link__mobile-${r+1}`:`link__${r+1}`,m=s>=0&&s===r&&c;return e.jsxs(bR,{$hiddenBranding:o,children:[e.jsxs(vR,Object.assign({"data-testid":g,weight:f,$selected:a},u,{onClick:h(t,r)},d,{children:[e.jsx(yR,{children:l}),a&&e.jsx(xR,{"data-testid":`${g}-indicator`,$selected:a}),i&&t.subMenu&&e.jsx(wR,{children:e.jsx($R,{"data-testid":`${g}-expand-collapse-button`,$selected:m,focusHighlight:!1,focusOutline:"browser","aria-label":m?"Collapse":"Expand",children:e.jsx(CR,{$selected:a})})})]})),m&&t.subMenu&&e.jsx(pR,{items:t.subMenu,mobile:i,onItemClick:p})]},r)}}));return r&&r.length>0?i?e.jsx(mR,{ref:u,children:g()}):e.jsx(gR,{ref:u,$alignLeft:o,children:g()}):e.jsx(e.Fragment,{})},jR={primary:{brandName:"LifeSG",logoSrc:"https://assets.life.gov.sg/lifesg/logo-lifesg.svg"}},kR={primary:{brandName:"BookingSG",logoSrc:"https://www.booking.gov.sg/logo.svg"}},DR={primary:{brandName:"CCube",logoSrc:"https://assets.life.gov.sg/ccube/logo-ccube.svg"}},TR={primary:{brandName:"MyLegacy",logoSrc:"https://mylegacy.life.gov.sg/images/site-logo.png"}},ER=t.forwardRef(((r,n)=>{var{items:o,className:a,id:s,selectedId:l,compress:c=!1,fixed:d=!0,resources:u,hideNavElements:f=!1,hideNavBranding:h=!1,drawerDismissalExclusions:p=[],actionButtons:g,onItemClick:m,onActionButtonClick:b,onBrandClick:v,masthead:y=!0,layout:x="default"}=r,w=X(r,["items","className","id","selectedId","compress","fixed","resources","hideNavElements","hideNavBranding","drawerDismissalExclusions","actionButtons","onItemClick","onActionButtonClick","onBrandClick","masthead","layout"]);const[$,C]=t.useState(!1),[S,j]=t.useState(!1),k="stretch"===x,D=t.useRef(null),T=i.useTheme(),E=(e=>{switch(e){case"bookingsg":return kR;case"mylegacy":return TR;case"ccube":return DR;default:return jR}})(null==T?void 0:T.resourceScheme),O=Js["lg-max"]({theme:T}),F=(null==u?void 0:u.primary)||E.primary,I=null==u?void 0:u.secondary;t.useImperativeHandle(n,(()=>Object.assign(D.current,{dismissDrawer:()=>{_()}})),[$]),t.useEffect((()=>(A(),window.addEventListener("resize",A),()=>{window.removeEventListener("resize",A)})),[]);const _=()=>{C(!1),setTimeout((()=>{j(!1)}),550)},M=e=>$&&-1===p.indexOf(e),A=()=>{window.innerWidth<=O&&$&&_()},B=(e,t)=>{v&&(e.preventDefault(),v(t)),M("brand-click")&&_()},R=(e,t)=>{cR.isNavItemCommon(t)&&t.onClick?t.onClick(e):m&&(e.preventDefault(),m(t)),cR.isNavItemLink(t)&&!t.subMenu&&M("item-click")&&_()},z=(e,t)=>{var r;"button"!==t.type&&"download"!==t.type||!(null===(r=t.args)||void 0===r?void 0:r.onClick)?b&&(e.preventDefault(),b(t)):t.args.onClick(e),M("item-click")&&_()},P=()=>{C(!0),j(!0)},L=()=>{M("close-button-click")&&_()},N=()=>{const t=o.mobile||o.desktop;return t&&t.length>0||g&&(e=>{const t=e.mobile||e.desktop;return!!t&&t.length&&t.some((e=>!e.uncollapsible))})(g)?e.jsx(LB,{"aria-label":"Open nav menu","data-testid":"button__mobile-menu",onClick:P,focusHighlight:!1,children:e.jsx(NB,{})}):null};return e.jsxs(RB,{ref:D,$fixed:d,className:a,id:s||"navbar-wrapper","data-testid":w["data-testid"]||"navbar-wrapper",children:[y&&e.jsx(_B,{}),e.jsxs(xM.Content,{stretch:k,children:[e.jsxs(zB,{$compress:c,children:[!h&&e.jsxs(HB,{$compress:c,"data-id":"brand-container",children:[F&&e.jsx(YB,{resources:F,onClick:B,"data-id":"brand-primary","data-testid":"main__brand",type:"primary"}),I&&e.jsxs(e.Fragment,{children:[e.jsx(WB,{$compress:c}),e.jsx(YB,{resources:I,onClick:B,"data-id":"brand-secondary","data-testid":"main__brand-secondary",type:"secondary"})]})]}),!f&&e.jsxs(PB,{$hideNavBranding:h,children:[e.jsx(SR,{items:o.desktop,onItemClick:R,selectedId:l,hideNavBranding:h}),e.jsx(lR,{actionButtons:g,onActionButtonClick:z}),N()]})]}),!f&&e.jsx(cp,{show:S,enableOverlayClick:!0,onOverlayClick:L,children:e.jsxs(QB,{show:$,resources:{primary:F,secondary:I},onClose:L,onBrandClick:B,actionButtons:g,hideNavBranding:h,children:[e.jsx(SR,{items:o.mobile||o.desktop,onItemClick:R,selectedId:l,mobile:!0}),e.jsx(lR,{actionButtons:g,onActionButtonClick:z,mobile:!0})]})})]})]})})),OR=BB,FR=i.css`
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
`,IR=K.default.div`
    position: ${e=>e.$sticky?"sticky":"relative"};
    left: 0;
    top: 0;
    width: 100%;
    transition: all ${Xs["duration-800"]} ${Xs["ease-default"]};
    background: ${Ks["bg-inverse-subtle"]};
    z-index: 25;
    cursor: ${e=>e.$clickable?"pointer":"default"};
`,_R=K.default(xM.Content)`
    display: flex;
`,MR=K.default.div`
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1.5rem 0;
`,AR=K.default.div`
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
        ${FR}
    }

    ${e=>{const t="linear-gradient(to bottom, black 50%, transparent 100%)";if(e.$maxCollapsedHeight)return i.css`
                max-height: ${e.$maxCollapsedHeight}px;
                overflow: hidden;
                -webkit-mask-image: ${t};
                mask-image: ${t};
            `}}
`,BR=K.default(exports.Typography.LinkBL)`
    position: relative;

    ${FR}
`,RR=K.default(nl)`
    margin-right: -1.5rem;
    padding-left: 1rem;
    height: max-content;
`,zR=K.default(m.CrossIcon)`
    height: 1.875rem;
    width: 1.875rem;
    color: ${Ks["icon-inverse"]};
`,PR=K.default.button`
    display: flex;
    align-items: center;
    gap: 0.25rem;

    margin-top: 0.5rem;

    border: none;
    background: transparent;
    color: ${Ks["hyperlink-inverse"]};
    ${qs["body-md-semibold"]};

    cursor: pointer;
`,LR=K.default.button`
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`,NR=r=>{var{children:n,visible:i=!0,dismissible:o=!0,sticky:a=!0,onDismiss:s,id:l,forwardedRef:c,maxCollapsedHeight:d,onClick:u,actionButton:f}=r,h=X(r,["children","visible","dismissible","sticky","onDismiss","id","forwardedRef","maxCollapsedHeight","onClick","actionButton"]);const p=h["data-testid"],[g,m]=t.useState(i),{height:b=0,ref:v}=qe();t.useEffect((()=>{m(i)}),[i]);const y=e=>{e.stopPropagation(),m(!1),o&&s&&s()},x=e=>{(null==f?void 0:f.onClick)&&(e.stopPropagation(),f.onClick(e))};if(!g)return null;return e.jsxs(IR,Object.assign({ref:c,$sticky:a,$clickable:!!u,onClick:u},h,{children:[e.jsxs(_R,{id:HR("container",l),children:[e.jsxs(MR,{children:[e.jsx(AR,{"data-testid":HR("text-content",p),$maxCollapsedHeight:d&&b>d?d:void 0,children:e.jsx("div",{ref:v,children:n})}),f?e.jsx(PR,Object.assign({id:HR("action-button",l),"data-testid":HR("action-button",p),type:"button"},f,{onClick:x,children:f.children})):null]}),o&&e.jsx(RR,{onClick:y,id:HR("dismiss-button",l),"data-testid":HR("dismiss-button",p),focusHighlight:!1,type:"button","aria-label":"Dismiss notification",children:e.jsx(zR,{"aria-hidden":!0})})]}),u&&e.jsx(LR,{"aria-label":"Clickable banner",type:"button"})]}))},HR=(e,t="wrapper")=>`${t}-${e}`,WR=Y.default.forwardRef(((t,r)=>e.jsx(NR,Object.assign({},t,{forwardedRef:r}))));WR.displayName="NotificationBanner";const VR=Object.assign(WR,{Link:BR}),{entries:YR,setPrototypeOf:UR,isFrozen:KR,getPrototypeOf:qR,getOwnPropertyDescriptor:XR}=Object;
/*! @license DOMPurify 3.2.5 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.5/LICENSE */let{freeze:GR,seal:ZR,create:QR}=Object,{apply:JR,construct:ez}="undefined"!=typeof Reflect&&Reflect;GR||(GR=function(e){return e}),ZR||(ZR=function(e){return e}),JR||(JR=function(e,t,r){return e.apply(t,r)}),ez||(ez=function(e,t){return new e(...t)});const tz=mz(Array.prototype.forEach),rz=mz(Array.prototype.lastIndexOf),nz=mz(Array.prototype.pop),iz=mz(Array.prototype.push),oz=mz(Array.prototype.splice),az=mz(String.prototype.toLowerCase),sz=mz(String.prototype.toString),lz=mz(String.prototype.match),cz=mz(String.prototype.replace),dz=mz(String.prototype.indexOf),uz=mz(String.prototype.trim),fz=mz(Object.prototype.hasOwnProperty),hz=mz(RegExp.prototype.test),pz=(gz=TypeError,function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return ez(gz,t)});var gz;function mz(e){return function(t){t instanceof RegExp&&(t.lastIndex=0);for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return JR(e,t,n)}}function bz(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:az;UR&&UR(e,null);let n=t.length;for(;n--;){let i=t[n];if("string"==typeof i){const e=r(i);e!==i&&(KR(t)||(t[n]=e),i=e)}e[i]=!0}return e}function vz(e){for(let t=0;t<e.length;t++){fz(e,t)||(e[t]=null)}return e}function yz(e){const t=QR(null);for(const[r,n]of YR(e)){fz(e,r)&&(Array.isArray(n)?t[r]=vz(n):n&&"object"==typeof n&&n.constructor===Object?t[r]=yz(n):t[r]=n)}return t}function xz(e,t){for(;null!==e;){const r=XR(e,t);if(r){if(r.get)return mz(r.get);if("function"==typeof r.value)return mz(r.value)}e=qR(e)}return function(){return null}}const wz=GR(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),$z=GR(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Cz=GR(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Sz=GR(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),jz=GR(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),kz=GR(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Dz=GR(["#text"]),Tz=GR(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),Ez=GR(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Oz=GR(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Fz=GR(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Iz=ZR(/\{\{[\w\W]*|[\w\W]*\}\}/gm),_z=ZR(/<%[\w\W]*|[\w\W]*%>/gm),Mz=ZR(/\$\{[\w\W]*/gm),Az=ZR(/^data-[\-\w.\u00B7-\uFFFF]+$/),Bz=ZR(/^aria-[\-\w]+$/),Rz=ZR(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),zz=ZR(/^(?:\w+script|data):/i),Pz=ZR(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Lz=ZR(/^html$/i),Nz=ZR(/^[a-z][.\w]*(-[.\w]+)+$/i);var Hz=Object.freeze({__proto__:null,ARIA_ATTR:Bz,ATTR_WHITESPACE:Pz,CUSTOM_ELEMENT:Nz,DATA_ATTR:Az,DOCTYPE_NAME:Lz,ERB_EXPR:_z,IS_ALLOWED_URI:Rz,IS_SCRIPT_OR_DATA:zz,MUSTACHE_EXPR:Iz,TMPLIT_EXPR:Mz});const Wz=1,Vz=3,Yz=7,Uz=8,Kz=9,qz=function(){return"undefined"==typeof window?null:window};var Xz=function e(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:qz();const r=t=>e(t);if(r.version="3.2.5",r.removed=[],!t||!t.document||t.document.nodeType!==Kz||!t.Element)return r.isSupported=!1,r;let{document:n}=t;const i=n,o=i.currentScript,{DocumentFragment:a,HTMLTemplateElement:s,Node:l,Element:c,NodeFilter:d,NamedNodeMap:u=t.NamedNodeMap||t.MozNamedAttrMap,HTMLFormElement:f,DOMParser:h,trustedTypes:p}=t,g=c.prototype,m=xz(g,"cloneNode"),b=xz(g,"remove"),v=xz(g,"nextSibling"),y=xz(g,"childNodes"),x=xz(g,"parentNode");if("function"==typeof s){const e=n.createElement("template");e.content&&e.content.ownerDocument&&(n=e.content.ownerDocument)}let w,$="";const{implementation:C,createNodeIterator:S,createDocumentFragment:j,getElementsByTagName:k}=n,{importNode:D}=i;let T={afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]};r.isSupported="function"==typeof YR&&"function"==typeof x&&C&&void 0!==C.createHTMLDocument;const{MUSTACHE_EXPR:E,ERB_EXPR:O,TMPLIT_EXPR:F,DATA_ATTR:I,ARIA_ATTR:_,IS_SCRIPT_OR_DATA:M,ATTR_WHITESPACE:A,CUSTOM_ELEMENT:B}=Hz;let{IS_ALLOWED_URI:R}=Hz,z=null;const P=bz({},[...wz,...$z,...Cz,...jz,...Dz]);let L=null;const N=bz({},[...Tz,...Ez,...Oz,...Fz]);let H=Object.seal(QR(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),W=null,V=null,Y=!0,U=!0,K=!1,q=!0,X=!1,G=!0,Z=!1,Q=!1,J=!1,ee=!1,te=!1,re=!1,ne=!0,ie=!1,oe=!0,ae=!1,se={},le=null;const ce=bz({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let de=null;const ue=bz({},["audio","video","img","source","image","track"]);let fe=null;const he=bz({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),pe="http://www.w3.org/1998/Math/MathML",ge="http://www.w3.org/2000/svg",me="http://www.w3.org/1999/xhtml";let be=me,ve=!1,ye=null;const xe=bz({},[pe,ge,me],sz);let we=bz({},["mi","mo","mn","ms","mtext"]),$e=bz({},["annotation-xml"]);const Ce=bz({},["title","style","font","a","script"]);let Se=null;const je=["application/xhtml+xml","text/html"];let ke=null,De=null;const Te=n.createElement("form"),Ee=function(e){return e instanceof RegExp||e instanceof Function},Oe=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!De||De!==e){if(e&&"object"==typeof e||(e={}),e=yz(e),Se=-1===je.indexOf(e.PARSER_MEDIA_TYPE)?"text/html":e.PARSER_MEDIA_TYPE,ke="application/xhtml+xml"===Se?sz:az,z=fz(e,"ALLOWED_TAGS")?bz({},e.ALLOWED_TAGS,ke):P,L=fz(e,"ALLOWED_ATTR")?bz({},e.ALLOWED_ATTR,ke):N,ye=fz(e,"ALLOWED_NAMESPACES")?bz({},e.ALLOWED_NAMESPACES,sz):xe,fe=fz(e,"ADD_URI_SAFE_ATTR")?bz(yz(he),e.ADD_URI_SAFE_ATTR,ke):he,de=fz(e,"ADD_DATA_URI_TAGS")?bz(yz(ue),e.ADD_DATA_URI_TAGS,ke):ue,le=fz(e,"FORBID_CONTENTS")?bz({},e.FORBID_CONTENTS,ke):ce,W=fz(e,"FORBID_TAGS")?bz({},e.FORBID_TAGS,ke):{},V=fz(e,"FORBID_ATTR")?bz({},e.FORBID_ATTR,ke):{},se=!!fz(e,"USE_PROFILES")&&e.USE_PROFILES,Y=!1!==e.ALLOW_ARIA_ATTR,U=!1!==e.ALLOW_DATA_ATTR,K=e.ALLOW_UNKNOWN_PROTOCOLS||!1,q=!1!==e.ALLOW_SELF_CLOSE_IN_ATTR,X=e.SAFE_FOR_TEMPLATES||!1,G=!1!==e.SAFE_FOR_XML,Z=e.WHOLE_DOCUMENT||!1,ee=e.RETURN_DOM||!1,te=e.RETURN_DOM_FRAGMENT||!1,re=e.RETURN_TRUSTED_TYPE||!1,J=e.FORCE_BODY||!1,ne=!1!==e.SANITIZE_DOM,ie=e.SANITIZE_NAMED_PROPS||!1,oe=!1!==e.KEEP_CONTENT,ae=e.IN_PLACE||!1,R=e.ALLOWED_URI_REGEXP||Rz,be=e.NAMESPACE||me,we=e.MATHML_TEXT_INTEGRATION_POINTS||we,$e=e.HTML_INTEGRATION_POINTS||$e,H=e.CUSTOM_ELEMENT_HANDLING||{},e.CUSTOM_ELEMENT_HANDLING&&Ee(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(H.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&Ee(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(H.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(H.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),X&&(U=!1),te&&(ee=!0),se&&(z=bz({},Dz),L=[],!0===se.html&&(bz(z,wz),bz(L,Tz)),!0===se.svg&&(bz(z,$z),bz(L,Ez),bz(L,Fz)),!0===se.svgFilters&&(bz(z,Cz),bz(L,Ez),bz(L,Fz)),!0===se.mathMl&&(bz(z,jz),bz(L,Oz),bz(L,Fz))),e.ADD_TAGS&&(z===P&&(z=yz(z)),bz(z,e.ADD_TAGS,ke)),e.ADD_ATTR&&(L===N&&(L=yz(L)),bz(L,e.ADD_ATTR,ke)),e.ADD_URI_SAFE_ATTR&&bz(fe,e.ADD_URI_SAFE_ATTR,ke),e.FORBID_CONTENTS&&(le===ce&&(le=yz(le)),bz(le,e.FORBID_CONTENTS,ke)),oe&&(z["#text"]=!0),Z&&bz(z,["html","head","body"]),z.table&&(bz(z,["tbody"]),delete W.tbody),e.TRUSTED_TYPES_POLICY){if("function"!=typeof e.TRUSTED_TYPES_POLICY.createHTML)throw pz('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if("function"!=typeof e.TRUSTED_TYPES_POLICY.createScriptURL)throw pz('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');w=e.TRUSTED_TYPES_POLICY,$=w.createHTML("")}else void 0===w&&(w=function(e,t){if("object"!=typeof e||"function"!=typeof e.createPolicy)return null;let r=null;const n="data-tt-policy-suffix";t&&t.hasAttribute(n)&&(r=t.getAttribute(n));const i="dompurify"+(r?"#"+r:"");try{return e.createPolicy(i,{createHTML:e=>e,createScriptURL:e=>e})}catch(e){return console.warn("TrustedTypes policy "+i+" could not be created."),null}}(p,o)),null!==w&&"string"==typeof $&&($=w.createHTML(""));GR&&GR(e),De=e}},Fe=bz({},[...$z,...Cz,...Sz]),Ie=bz({},[...jz,...kz]),_e=function(e){iz(r.removed,{element:e});try{x(e).removeChild(e)}catch(t){b(e)}},Me=function(e,t){try{iz(r.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){iz(r.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e)if(ee||te)try{_e(t)}catch(e){}else try{t.setAttribute(e,"")}catch(e){}},Ae=function(e){let t=null,r=null;if(J)e="<remove></remove>"+e;else{const t=lz(e,/^[\r\n\t ]+/);r=t&&t[0]}"application/xhtml+xml"===Se&&be===me&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");const i=w?w.createHTML(e):e;if(be===me)try{t=(new h).parseFromString(i,Se)}catch(e){}if(!t||!t.documentElement){t=C.createDocument(be,"template",null);try{t.documentElement.innerHTML=ve?$:i}catch(e){}}const o=t.body||t.documentElement;return e&&r&&o.insertBefore(n.createTextNode(r),o.childNodes[0]||null),be===me?k.call(t,Z?"html":"body")[0]:Z?t.documentElement:o},Be=function(e){return S.call(e.ownerDocument||e,e,d.SHOW_ELEMENT|d.SHOW_COMMENT|d.SHOW_TEXT|d.SHOW_PROCESSING_INSTRUCTION|d.SHOW_CDATA_SECTION,null)},Re=function(e){return e instanceof f&&("string"!=typeof e.nodeName||"string"!=typeof e.textContent||"function"!=typeof e.removeChild||!(e.attributes instanceof u)||"function"!=typeof e.removeAttribute||"function"!=typeof e.setAttribute||"string"!=typeof e.namespaceURI||"function"!=typeof e.insertBefore||"function"!=typeof e.hasChildNodes)},ze=function(e){return"function"==typeof l&&e instanceof l};function Pe(e,t,n){tz(e,(e=>{e.call(r,t,n,De)}))}const Le=function(e){let t=null;if(Pe(T.beforeSanitizeElements,e,null),Re(e))return _e(e),!0;const n=ke(e.nodeName);if(Pe(T.uponSanitizeElement,e,{tagName:n,allowedTags:z}),e.hasChildNodes()&&!ze(e.firstElementChild)&&hz(/<[/\w!]/g,e.innerHTML)&&hz(/<[/\w!]/g,e.textContent))return _e(e),!0;if(e.nodeType===Yz)return _e(e),!0;if(G&&e.nodeType===Uz&&hz(/<[/\w]/g,e.data))return _e(e),!0;if(!z[n]||W[n]){if(!W[n]&&He(n)){if(H.tagNameCheck instanceof RegExp&&hz(H.tagNameCheck,n))return!1;if(H.tagNameCheck instanceof Function&&H.tagNameCheck(n))return!1}if(oe&&!le[n]){const t=x(e)||e.parentNode,r=y(e)||e.childNodes;if(r&&t){for(let n=r.length-1;n>=0;--n){const i=m(r[n],!0);i.__removalCount=(e.__removalCount||0)+1,t.insertBefore(i,v(e))}}}return _e(e),!0}return e instanceof c&&!function(e){let t=x(e);t&&t.tagName||(t={namespaceURI:be,tagName:"template"});const r=az(e.tagName),n=az(t.tagName);return!!ye[e.namespaceURI]&&(e.namespaceURI===ge?t.namespaceURI===me?"svg"===r:t.namespaceURI===pe?"svg"===r&&("annotation-xml"===n||we[n]):Boolean(Fe[r]):e.namespaceURI===pe?t.namespaceURI===me?"math"===r:t.namespaceURI===ge?"math"===r&&$e[n]:Boolean(Ie[r]):e.namespaceURI===me?!(t.namespaceURI===ge&&!$e[n])&&!(t.namespaceURI===pe&&!we[n])&&!Ie[r]&&(Ce[r]||!Fe[r]):!("application/xhtml+xml"!==Se||!ye[e.namespaceURI]))}(e)?(_e(e),!0):"noscript"!==n&&"noembed"!==n&&"noframes"!==n||!hz(/<\/no(script|embed|frames)/i,e.innerHTML)?(X&&e.nodeType===Vz&&(t=e.textContent,tz([E,O,F],(e=>{t=cz(t,e," ")})),e.textContent!==t&&(iz(r.removed,{element:e.cloneNode()}),e.textContent=t)),Pe(T.afterSanitizeElements,e,null),!1):(_e(e),!0)},Ne=function(e,t,r){if(ne&&("id"===t||"name"===t)&&(r in n||r in Te))return!1;if(U&&!V[t]&&hz(I,t));else if(Y&&hz(_,t));else if(!L[t]||V[t]){if(!(He(e)&&(H.tagNameCheck instanceof RegExp&&hz(H.tagNameCheck,e)||H.tagNameCheck instanceof Function&&H.tagNameCheck(e))&&(H.attributeNameCheck instanceof RegExp&&hz(H.attributeNameCheck,t)||H.attributeNameCheck instanceof Function&&H.attributeNameCheck(t))||"is"===t&&H.allowCustomizedBuiltInElements&&(H.tagNameCheck instanceof RegExp&&hz(H.tagNameCheck,r)||H.tagNameCheck instanceof Function&&H.tagNameCheck(r))))return!1}else if(fe[t]);else if(hz(R,cz(r,A,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==dz(r,"data:")||!de[e]){if(K&&!hz(M,cz(r,A,"")));else if(r)return!1}else;return!0},He=function(e){return"annotation-xml"!==e&&lz(e,B)},We=function(e){Pe(T.beforeSanitizeAttributes,e,null);const{attributes:t}=e;if(!t||Re(e))return;const n={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:L,forceKeepAttr:void 0};let i=t.length;for(;i--;){const o=t[i],{name:a,namespaceURI:s,value:l}=o,c=ke(a);let d="value"===a?l:uz(l);if(n.attrName=c,n.attrValue=d,n.keepAttr=!0,n.forceKeepAttr=void 0,Pe(T.uponSanitizeAttribute,e,n),d=n.attrValue,!ie||"id"!==c&&"name"!==c||(Me(a,e),d="user-content-"+d),G&&hz(/((--!?|])>)|<\/(style|title)/i,d)){Me(a,e);continue}if(n.forceKeepAttr)continue;if(Me(a,e),!n.keepAttr)continue;if(!q&&hz(/\/>/i,d)){Me(a,e);continue}X&&tz([E,O,F],(e=>{d=cz(d,e," ")}));const u=ke(e.nodeName);if(Ne(u,c,d)){if(w&&"object"==typeof p&&"function"==typeof p.getAttributeType)if(s);else switch(p.getAttributeType(u,c)){case"TrustedHTML":d=w.createHTML(d);break;case"TrustedScriptURL":d=w.createScriptURL(d)}try{s?e.setAttributeNS(s,a,d):e.setAttribute(a,d),Re(e)?_e(e):nz(r.removed)}catch(e){}}}Pe(T.afterSanitizeAttributes,e,null)},Ve=function e(t){let r=null;const n=Be(t);for(Pe(T.beforeSanitizeShadowDOM,t,null);r=n.nextNode();)Pe(T.uponSanitizeShadowNode,r,null),Le(r),We(r),r.content instanceof a&&e(r.content);Pe(T.afterSanitizeShadowDOM,t,null)};return r.sanitize=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=null,o=null,s=null,c=null;if(ve=!e,ve&&(e="\x3c!--\x3e"),"string"!=typeof e&&!ze(e)){if("function"!=typeof e.toString)throw pz("toString is not a function");if("string"!=typeof(e=e.toString()))throw pz("dirty is not a string, aborting")}if(!r.isSupported)return e;if(Q||Oe(t),r.removed=[],"string"==typeof e&&(ae=!1),ae){if(e.nodeName){const t=ke(e.nodeName);if(!z[t]||W[t])throw pz("root node is forbidden and cannot be sanitized in-place")}}else if(e instanceof l)n=Ae("\x3c!----\x3e"),o=n.ownerDocument.importNode(e,!0),o.nodeType===Wz&&"BODY"===o.nodeName||"HTML"===o.nodeName?n=o:n.appendChild(o);else{if(!ee&&!X&&!Z&&-1===e.indexOf("<"))return w&&re?w.createHTML(e):e;if(n=Ae(e),!n)return ee?null:re?$:""}n&&J&&_e(n.firstChild);const d=Be(ae?e:n);for(;s=d.nextNode();)Le(s),We(s),s.content instanceof a&&Ve(s.content);if(ae)return e;if(ee){if(te)for(c=j.call(n.ownerDocument);n.firstChild;)c.appendChild(n.firstChild);else c=n;return(L.shadowroot||L.shadowrootmode)&&(c=D.call(i,c,!0)),c}let u=Z?n.outerHTML:n.innerHTML;return Z&&z["!doctype"]&&n.ownerDocument&&n.ownerDocument.doctype&&n.ownerDocument.doctype.name&&hz(Lz,n.ownerDocument.doctype.name)&&(u="<!DOCTYPE "+n.ownerDocument.doctype.name+">\n"+u),X&&tz([E,O,F],(e=>{u=cz(u,e," ")})),w&&re?w.createHTML(u):u},r.setConfig=function(){Oe(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),Q=!0},r.clearConfig=function(){De=null,Q=!1},r.isValidAttribute=function(e,t,r){De||Oe({});const n=ke(e),i=ke(t);return Ne(n,i,r)},r.addHook=function(e,t){"function"==typeof t&&iz(T[e],t)},r.removeHook=function(e,t){if(void 0!==t){const r=rz(T[e],t);return-1===r?void 0:oz(T[e],r,1)[0]}return nz(T[e])},r.removeHooks=function(e){T[e]=[]},r.removeAllHooks=function(){T={afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}},r}();const Gz=K.default.div`
    display: flex;
    flex-direction: column;
`,Zz=K.default.div`
    display: flex;
    flex-direction: row;
    align-self: center;
    gap: ${Zs["spacing-8"]};
`,Qz=K.default(Rx)`
    margin-bottom: 0rem !important;

    input {
        text-align: center;

        ${el.MaxWidth.xs} {
            padding: 0 ${Zs["spacing-8"]};
        }
    }
`,Jz=K.default(Hl.Small)`
    margin: ${Zs["spacing-32"]} 0;
`,eP=K.default.nav`
    display: flex;
`,tP=K.default.div`
    display: flex;
    align-items: center;
    align-self: flex-start;
    overflow: auto;

    ${el.MaxWidth.lg} {
        align-self: center;
    }
`,rP=K.default.div`
    display: inline-flex;
    padding: 0.125rem;
    align-items: center;
`,nP=K.default(nl)`
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
`,iP=K.default(nl)`
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
`,oP=K.default.button`
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
`;const aP=K.default.div`
    display: flex;
    cursor: pointer;
    min-width: 2.5rem;
    height: 2.5rem;
    border-radius: ${Qs.sm};
    justify-content: center;
    align-items: center;
    position: relative;
`,sP=K.default.div`
    display: flex;
    justify-content: center;
    margin: 0.625rem;
    align-items: center;
    color: ${Ks.text};

    display: flex;
    justify-content: center;
`,lP=K.default(exports.Typography.BodyBL)`
    white-space: nowrap;
`,cP=K.default(exports.Typography.BodyBL)`
    white-space: nowrap;
    margin: 0 1rem;
`,dP=K.default(Rx)`
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
`,uP=K.default.div`
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
`,fP=K.default.div`
    width: 9.2rem;
    margin-left: 0.5rem;
`,hP=Y.default.forwardRef((({id:r,"data-testid":n,className:o,pageSize:a=10,totalItems:s,activePage:l,pageSizeOptions:c=pP,showFirstAndLastNav:d,showPageSizeChanger:u=!1,onPageChange:f,onPageSizeChange:g},m)=>{const b=i.useTheme(),v=Js["sm-max"]({theme:b}),y=bc.useMediaQuery({maxWidth:v}),[x,w]=t.useState(!1),[$,C]=t.useState(!1),[S,j]=t.useState(""),[k,D]=t.useState(c[0]),[T,E]=t.useState(!y&&u&&k?k.value:a),O=Math.ceil(s/T),F=1===l,I=l===O,_=l>1?()=>U(1):void 0,M=l<O?()=>U(O):void 0,A=l>1?()=>U(l-1):void 0,B=l<O?()=>U(parseInt(l.toString())+1):void 0,H=e=>e?()=>J():()=>Z(),W=e=>e?()=>ee():()=>Q();t.useEffect((()=>{l&&V(l)}),[l]),t.useEffect((()=>{E(a),D(c.find((e=>e.value===a)))}),[a]);const V=e=>{j(e.toString())},Y=()=>{w(!1),C(!1)},U=e=>{f&&(f(e),V(e))},K=()=>{const e=Math.min(O,l+5);U(e),V(e),w(!0),C(!1)},q=()=>{const e=Math.max(1,l-5);U(e),V(e),w(!1),C(!0)},X=e=>{const t=e.target.value;if(void 0===t||0===t.length)j("");else if(/^[0-9]+$/.test(t)){const e=parseInt(t.replace(/[^0-9]/g,""));V(Math.max(1,Math.min(O,e)))}else j(t.replace(/[^0-9]/g,""))},G=e=>{e.preventDefault(),S&&(null==f||f(parseInt(S)))},Z=()=>{w(!0)},Q=()=>{w(!1)},J=()=>{C(!0)},ee=()=>{C(!1)},te=(t,r,n)=>e.jsxs(aP,{children:[e.jsx(nP,{focusHighlight:!1,focusOutline:"browser","aria-label":t?"Previous 5 pages":"Next 5 pages",onMouseOver:H(t),onMouseOut:W(t),onFocus:H(t),onBlur:W(t),onClick:t?q:K,children:t&&$?e.jsx(R.Chevron2LeftIcon,{"aria-hidden":!0}):r&&x?e.jsx(z.Chevron2RightIcon,{"aria-hidden":!0}):e.jsx(N.EllipsisHorizontalIcon,{"aria-hidden":!0})}),t&&$&&e.jsx(uP,{children:"Previous 5 pages"}),r&&x&&e.jsx(uP,{children:"Next 5 pages"})]},n);return e.jsxs(eP,{className:o,ref:m,id:r||"pagination-wrapper","data-testid":n||"pagination","aria-label":"Pagination",children:[e.jsx(tP,{children:e.jsxs(rP,{children:[d&&e.jsx(iP,{onClick:_,disabled:F,focusHighlight:!1,$position:"left","aria-label":"First page",focusOutline:"browser",children:e.jsx(P.ChevronLineLeftIcon,{"aria-hidden":!0})}),e.jsx(iP,{onClick:A,disabled:F,focusHighlight:!1,$position:"left","aria-label":"Previous page",focusOutline:"browser",children:e.jsx(p.ChevronLeftIcon,{"aria-hidden":!0})}),y?e.jsxs(sP,{children:[e.jsx("form",{onSubmit:G,children:e.jsx(dP,{value:S,onChange:X,autoComplete:"off",type:"numeric",id:(r||"pagination")+"-input","data-testid":(n||"pagination")+"-input"})}),e.jsx(cP,{children:"/"}),e.jsx(lP,{children:O})]}):[...Array(O)].map(((t,r)=>{const n=r+1,i=O-5,o=l===n;if(O<=7)return e.jsx(oP,{onClick:()=>U(n),$selected:o,"aria-label":"Page "+n,"aria-current":!!o&&"page",onMouseOver:Y,onFocus:Y,children:n},n);const a=l+1>5&&2===n,s=l-1<=i&&n===O-1-1;return a||s?te(a,s,n):n<=5&&l+1<=5||n<=1||n===l||n<=l+1&&n>=l-1-1||n>i&&l-1>i||n>O-1?e.jsx(oP,{onClick:()=>U(n),$selected:o,"aria-label":"Page "+n,"aria-current":!!o&&"page",onMouseOver:Y,onFocus:Y,children:n},n):null})),e.jsx(iP,{onClick:B,disabled:I,focusHighlight:!1,$position:"right","aria-label":"Next page",focusOutline:"browser",children:e.jsx(h.ChevronRightIcon,{"aria-hidden":!0})}),d&&e.jsx(iP,{onClick:M,disabled:I,focusHighlight:!1,$position:"right","aria-label":"Last page",focusOutline:"browser",children:e.jsx(L.ChevronLineRightIcon,{"aria-hidden":!0})})]})}),u&&!y&&e.jsx(fP,{children:e.jsx(gF,{options:c,valueExtractor:e=>e.value,listExtractor:e=>e.label,displayValueExtractor:e=>e.label,selectedOption:k,onSelectOption:e=>{D(e);const t=e.value,r=Math.ceil(s/t);E(t);g&&g(l>=r?r:l,t)}})})]})})),pP=[{value:10,label:"10 / page"},{value:20,label:"20 / page"},{value:30,label:"30 / page"}],gP=K.default.div`
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
`,mP=K.default.div`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-align: left;
`,bP=t=>{var{type:r,colorType:n="black",children:i,icon:o}=t,a=X(t,["type","colorType","children","icon"]);return e.jsxs(gP,Object.assign({$type:r,$color:n},a,{children:[o,e.jsx(mP,{children:i})]}))},vP=(e,t,r)=>t?as(r,t)||as(e,t):r||e,yP=(e,t)=>{const r=t||e.defaultValue;return as(e.collections,r)};var xP;exports.V2_ThemeContextKeys=void 0,(xP=exports.V2_ThemeContextKeys||(exports.V2_ThemeContextKeys={})).colorScheme="colorScheme",xP.layout="layout",xP.textStyleScheme="textStyleScheme",xP.designTokenScheme="designTokenScheme",xP.resourceScheme="resourceScheme";const wP={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},$P=e=>t=>{var r;const n=(null===(r=t.theme)||void 0===r?void 0:r._v2)||t.theme,i=yP(wP,null==n?void 0:n[exports.V2_ThemeContextKeys.colorScheme]);return n.options&&n.options.color?vP(i,e,n.options.color):vP(i,e)},CP={Brand:{1:$P("Brand.1"),2:$P("Brand.2"),3:$P("Brand.3"),4:$P("Brand.4"),5:$P("Brand.5"),6:$P("Brand.6")},Primary:$P("Primary"),PrimaryDark:$P("PrimaryDark"),Secondary:$P("Secondary"),Accent:{Light:{1:$P("Accent.Light.1"),2:$P("Accent.Light.2"),3:$P("Accent.Light.3"),4:$P("Accent.Light.4"),5:$P("Accent.Light.5"),6:$P("Accent.Light.6")},Dark:{1:$P("Accent.Dark.1"),2:$P("Accent.Dark.2"),3:$P("Accent.Dark.3")}},Neutral:{1:$P("Neutral.1"),2:$P("Neutral.2"),3:$P("Neutral.3"),4:$P("Neutral.4"),5:$P("Neutral.5"),6:$P("Neutral.6"),7:$P("Neutral.7"),8:$P("Neutral.8")},Validation:{Green:{Text:$P("Validation.Green.Text"),Icon:$P("Validation.Green.Icon"),Border:$P("Validation.Green.Border"),Background:$P("Validation.Green.Background")},Orange:{Text:$P("Validation.Orange.Text"),Icon:$P("Validation.Orange.Icon"),Border:$P("Validation.Orange.Border"),Background:$P("Validation.Orange.Background"),Badge:$P("Validation.Orange.Badge")},Red:{Text:$P("Validation.Red.Text"),Icon:$P("Validation.Red.Icon"),Border:$P("Validation.Red.Border"),Background:$P("Validation.Red.Background")},Blue:{Text:$P("Validation.Blue.Text"),Icon:$P("Validation.Blue.Icon"),Border:$P("Validation.Blue.Border"),Background:$P("Validation.Blue.Background")}},Shadow:{Accent:$P("Shadow.Accent"),Red:$P("Shadow.Red"),Elevation:$P("Shadow.Elevation")}},SP={OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"},jP={D1:{fontFamily:SP.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:SP.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:SP.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:SP.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:SP.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:SP.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:SP.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:SP.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:SP.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:SP.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:SP.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:SP.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:SP.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:SP.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},kP={D1:{fontFamily:SP.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056,fontVariant:"no-common-ligatures"},D2:{fontFamily:SP.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032,fontVariant:"no-common-ligatures"},D3:{fontFamily:SP.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},D4:{fontFamily:SP.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},DBody:{fontFamily:SP.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75,fontVariant:"no-common-ligatures"},H1:{fontFamily:SP.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032,fontVariant:"no-common-ligatures"},H2:{fontFamily:SP.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},H3:{fontFamily:SP.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H4:{fontFamily:SP.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H5:{fontFamily:SP.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,fontVariant:"no-common-ligatures"},H6:{fontFamily:SP.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012,fontVariant:"no-common-ligatures"},Body:{fontFamily:SP.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75,fontVariant:"no-common-ligatures"},BodySmall:{fontFamily:SP.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014,fontVariant:"no-common-ligatures"},XSmall:{fontFamily:SP.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012,fontVariant:"no-common-ligatures"}},DP={collections:{base:jP,oneservice:{D1:{fontFamily:SP.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:SP.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:SP.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:SP.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:SP.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:SP.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:SP.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:SP.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:SP.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:SP.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:SP.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:SP.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:SP.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:SP.OpenSans.Regular,fontSize:.75,lineHeight:1.125}},plusJakartaSans:kP},defaultValue:"base"},TP=e=>t=>{var r;const n=(null===(r=t.theme)||void 0===r?void 0:r._v2)||t.theme,i=yP(DP,null==n?void 0:n[exports.V2_ThemeContextKeys.textStyleScheme]);return n.options&&n.options.textStyle?vP(i,e,n.options.textStyle):vP(i,e)},EP={D1:{fontFamily:TP("D1.fontFamily"),fontSize:TP("D1.fontSize"),fontWeight:TP("D1.fontWeight"),lineHeight:TP("D1.lineHeight"),letterSpacing:TP("D1.letterSpacing"),fontVariant:TP("D1.fontVariant")},D2:{fontFamily:TP("D2.fontFamily"),fontSize:TP("D2.fontSize"),fontWeight:TP("D2.fontWeight"),lineHeight:TP("D2.lineHeight"),letterSpacing:TP("D2.letterSpacing"),fontVariant:TP("D2.fontVariant")},D3:{fontFamily:TP("D3.fontFamily"),fontSize:TP("D3.fontSize"),fontWeight:TP("D3.fontWeight"),lineHeight:TP("D3.lineHeight"),letterSpacing:TP("D3.letterSpacing"),fontVariant:TP("D3.fontVariant")},D4:{fontFamily:TP("D4.fontFamily"),fontSize:TP("D4.fontSize"),fontWeight:TP("D4.fontWeight"),lineHeight:TP("D4.lineHeight"),letterSpacing:TP("D4.letterSpacing"),fontVariant:TP("D4.fontVariant")},DBody:{fontFamily:TP("DBody.fontFamily"),fontSize:TP("DBody.fontSize"),fontWeight:TP("DBody.fontWeight"),lineHeight:TP("DBody.lineHeight"),letterSpacing:TP("DBody.letterSpacing"),fontVariant:TP("DBody.fontVariant")},H1:{fontFamily:TP("H1.fontFamily"),fontSize:TP("H1.fontSize"),fontWeight:TP("H1.fontWeight"),lineHeight:TP("H1.lineHeight"),letterSpacing:TP("H1.letterSpacing"),fontVariant:TP("H1.fontVariant")},H2:{fontFamily:TP("H2.fontFamily"),fontSize:TP("H2.fontSize"),fontWeight:TP("H2.fontWeight"),lineHeight:TP("H2.lineHeight"),letterSpacing:TP("H2.letterSpacing"),fontVariant:TP("H2.fontVariant")},H3:{fontFamily:TP("H3.fontFamily"),fontSize:TP("H3.fontSize"),fontWeight:TP("H3.fontWeight"),lineHeight:TP("H3.lineHeight"),letterSpacing:TP("H3.letterSpacing"),fontVariant:TP("H3.fontVariant")},H4:{fontFamily:TP("H4.fontFamily"),fontSize:TP("H4.fontSize"),fontWeight:TP("H4.fontWeight"),lineHeight:TP("H4.lineHeight"),letterSpacing:TP("H4.letterSpacing"),fontVariant:TP("H4.fontVariant")},H5:{fontFamily:TP("H5.fontFamily"),fontSize:TP("H5.fontSize"),fontWeight:TP("H5.fontWeight"),lineHeight:TP("H5.lineHeight"),letterSpacing:TP("H5.letterSpacing"),fontVariant:TP("H5.fontVariant")},H6:{fontFamily:TP("H6.fontFamily"),fontSize:TP("H6.fontSize"),fontWeight:TP("H6.fontWeight"),lineHeight:TP("H6.lineHeight"),letterSpacing:TP("H6.letterSpacing"),fontVariant:TP("H6.fontVariant")},Body:{fontFamily:TP("Body.fontFamily"),fontSize:TP("Body.fontSize"),fontWeight:TP("Body.fontWeight"),lineHeight:TP("Body.lineHeight"),letterSpacing:TP("Body.letterSpacing"),fontVariant:TP("Body.fontVariant")},BodySmall:{fontFamily:TP("BodySmall.fontFamily"),fontSize:TP("BodySmall.fontSize"),fontWeight:TP("BodySmall.fontWeight"),lineHeight:TP("BodySmall.lineHeight"),letterSpacing:TP("BodySmall.letterSpacing"),fontVariant:TP("BodySmall.fontVariant")},XSmall:{fontFamily:TP("XSmall.fontFamily"),fontSize:TP("XSmall.fontSize"),fontWeight:TP("XSmall.fontWeight"),lineHeight:TP("XSmall.lineHeight"),letterSpacing:TP("XSmall.letterSpacing"),fontVariant:TP("XSmall.fontVariant")}},OP=[SP.OpenSans,SP.PlusJakartaSans],FP=(e,t)=>{switch(t){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},IP=(e,t)=>r=>{var n,o,a,s,l;const c=null===(o=(n=EP[e]).fontFamily)||void 0===o?void 0:o.call(n,r),d=null===(s=(a=EP[e]).fontWeight)||void 0===s?void 0:s.call(a,r),u=OP.find((e=>Object.values(e).includes(c)));return u?i.css`
                font-family: ${FP(u,t)||FP(u,d)||c};
                font-weight: normal !important;
            `:i.css`
            font-family: ${c};
            font-weight: ${null!==(l=_P(t)||d)&&void 0!==l?l:"normal"};
        `},_P=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},MP=e=>{if(e)return i.css`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},AP={getFontFamily:IP,getTextStyle:(e,t,r=!1)=>n=>{var o,a,s;const l=EP[e],c=(null===(o=l.fontSize)||void 0===o?void 0:o.call(l,n))||1;return i.css`
            ${IP(e,t)}
            font-size: ${c}rem !important;
            line-height: ${l.lineHeight}rem !important;
            letter-spacing: ${(null===(a=l.letterSpacing)||void 0===a?void 0:a.call(l,n))||0}rem !important;
            font-variant: ${(null===(s=l.fontVariant)||void 0===s?void 0:s.call(l,n))||"normal"};
            ${(()=>{const e=r?1.05:0;return i.css`
                margin-bottom: ${c*e}rem;
            `})()}
        `},getDisplayStyle:(e=!1,t=!1,r=void 0)=>t?i.css`
            display: block;
            ${MP(r)}
        `:e?i.css`
            display: inline;
        `:i.css`
            display: block;
            ${MP(r)}
        `};var BP;exports.V2_Text=void 0,(BP=exports.V2_Text||(exports.V2_Text={})).D1=K.default.h1`
        ${e=>i.css`
                ${AP.getTextStyle("D1",e.weight,e.paragraph)}
                color: ${CP.Neutral[1]};
                ${AP.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,BP.D2=K.default.h1`
        ${e=>i.css`
                ${AP.getTextStyle("D2",e.weight,e.paragraph)}
                color: ${CP.Neutral[1]};
                ${AP.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,BP.D3=K.default.h1`
        ${e=>i.css`
                ${AP.getTextStyle("D3",e.weight,e.paragraph)}
                color: ${CP.Neutral[1]};
                ${AP.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,BP.D4=K.default.h1`
        ${e=>i.css`
                ${AP.getTextStyle("D4",e.weight,e.paragraph)}
                color: ${CP.Neutral[1]};
                ${AP.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,BP.DBody=K.default.h1`
        ${e=>i.css`
                ${AP.getTextStyle("DBody",e.weight,e.paragraph)}
                color: ${CP.Neutral[1]};
                ${AP.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,BP.H1=K.default.h1`
        ${e=>i.css`
                ${AP.getTextStyle("H1",e.weight,e.paragraph)}
                color: ${CP.Neutral[1]};
                ${AP.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,BP.H2=K.default.h2`
        ${e=>i.css`
                ${AP.getTextStyle("H2",e.weight,e.paragraph)}
                color: ${CP.Neutral[1]};
                ${AP.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,BP.H3=K.default.h3`
        ${e=>i.css`
                ${AP.getTextStyle("H3",e.weight,e.paragraph)}
                color: ${CP.Neutral[1]};
                ${AP.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,BP.H4=K.default.h4`
        ${e=>i.css`
                ${AP.getTextStyle("H4",e.weight,e.paragraph)}
                color: ${CP.Neutral[1]};
                ${AP.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,BP.H5=K.default.h5`
        ${e=>i.css`
                ${AP.getTextStyle("H5",e.weight,e.paragraph)}
                color: ${CP.Neutral[1]};
                ${AP.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,BP.H6=K.default.h6`
        ${e=>i.css`
                ${AP.getTextStyle("H6",e.weight,e.paragraph)}
                color: ${CP.Neutral[1]};
                ${AP.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,BP.Body=K.default.p`
        ${e=>i.css`
                ${AP.getTextStyle("Body",e.weight,e.paragraph)}
                color: ${CP.Neutral[1]};
                ${AP.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,BP.BodySmall=K.default.p`
        ${e=>i.css`
                ${AP.getTextStyle("BodySmall",e.weight,e.paragraph)}
                color: ${CP.Neutral[1]};
                ${AP.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,BP.XSmall=K.default.span`
        ${e=>i.css`
                ${AP.getTextStyle("XSmall",e.weight,e.paragraph)}
                color: ${CP.Neutral[1]};
                ${AP.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,BP.Hyperlink={Default:e=>PP(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>PP(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))};const RP=K.default.a`
    ${e=>i.css`
            ${AP.getTextStyle(e.textStyle,e.weight)}
            color: ${CP.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${CP.Secondary};

                svg {
                    color: ${CP.Secondary};
                }
            }
        `}
`,zP=K.default(o.ExternalIcon)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,PP=t=>{var{external:r=!1,children:n}=t,i=X(t,["external","children"]);return e.jsxs(RP,Object.assign({},i,{children:[n,r&&e.jsx(zP,{})]}))},LP={Base:"all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",Custom:e=>`all ${e}ms cubic-bezier(0.21, 0.79, 0.53, 1)`},NP=K.default.div`
    max-width: 30rem;
    pointer-events: auto;
    position: absolute;

    ${e=>e.$visible?i.css`
            visibility: visible;
            opacity: 1;
            transition: ${LP.Base};
            z-index: 50;
        `:i.css`
            visibility: hidden;
            opacity: 0;
            transition: ${LP.Base};
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

	${Qh.MaxWidth.mobileL} {
        display: none;
    }
`,HP=K.default(Cp)`
    padding: 3.5rem 1.25rem 2.5rem;
`,WP=K.default.div`
    position: relative;
    width: fit-content;
`,VP=K.default.button`
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
`,YP=K.default.div`
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }
`,UP=r=>{var{children:n,visible:i,onMobileClose:o}=r,a=X(r,["children","visible","onMobileClose"]);const s=a["data-testid"]||"popover",[l,c]=t.useState("none"),d=t.useRef(null),u=bc.useMediaQuery({maxWidth:Gh.mobileL}),f=t.useRef(l);t.useEffect((()=>(g(),window.addEventListener("resize",Wu(h,300)),()=>{window.removeEventListener("resize",Wu(h,300))})),[]);const h=()=>{g()},p=()=>{o&&o()},g=()=>{const e=m();var t;e&&(t=e,f.current=t,c(t))},m=()=>{if(d.current){const e=d.current.getBoundingClientRect(),t=24,r=e.y<t,n=window.innerWidth-t;return e.x<t?r?"top-left":"left":e.x+e.width>n?r?"top-right":"right":("top-left"===f.current||"left"===f.current)&&e.x-e.width/2>t||("top-right"===f.current||"right"===f.current)&&e.x+2*e.width<n?r?"top-center":"none":r?"top-center":void 0}},b=()=>"string"==typeof n?e.jsx(exports.V2_Text.BodySmall,{children:n}):n;return e.jsxs(e.Fragment,{children:[e.jsx(NP,Object.assign({ref:d,"data-testid":s,$visible:i,$offset:l},a,{children:e.jsx(gu,{children:b()})})),u&&e.jsx(xp,{show:null!=i&&i,onOverlayClick:p,children:e.jsx(HP,{onClose:p,children:e.jsx(YP,{children:b()})})})]})},KP=K.default.div`
    position: relative;
    width: 100%;

    margin: 2rem 0;

    ${el.MaxWidth.xl} {
        margin: 1.5rem 0;
    }

    ${el.MaxWidth.lg} {
        margin: 1rem 0;
    }
`,qP=K.default.div`
    display: flex;
    flex-basis: 0;
    justify-content: space-between;
    width: 100%;
`,XP=K.default.div`
    height: 0.25rem;
    margin-bottom: 0.5rem;
    border-radius: 0.25rem;
    ${e=>{const{highlighted:t}=e;return`\n            background-color: ${(t?Ks["bg-primary-subtle"]:Ks["bg-disabled"])(e)};\n        `}};
`,GP=K.default(exports.Typography.BodyMD)`
    overflow-wrap: anywhere;
    ${e=>{const{highlighted:t}=e;return`color: ${(t?Ks["text-primary"]:Ks["text-disabled"])(e)};`}};
`,ZP=K.default(exports.Typography.BodyMD)`
    overflow-wrap: anywhere;
    color: ${Ks.text};
`,QP=K.default.div`
    display: flex;
    flex-direction: column;
    flex: 1;

    &:not(:last-child) {
        margin-right: ${"0.5rem"};
    }
`;var JP=function(e){return function(t){return null==e?void 0:e[t]}},eL=JP({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),tL=Ka,rL=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,nL=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");var iL=function(e){return(e=tL(e))&&e.replace(rL,eL).replace(nL,"")},oL=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;var aL=function(e){return e.match(oL)||[]},sL=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;var lL=function(e){return sL.test(e)},cL="\\ud800-\\udfff",dL="\\u2700-\\u27bf",uL="a-z\\xdf-\\xf6\\xf8-\\xff",fL="A-Z\\xc0-\\xd6\\xd8-\\xde",hL="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",pL="["+hL+"]",gL="\\d+",mL="["+dL+"]",bL="["+uL+"]",vL="[^"+cL+hL+gL+dL+uL+fL+"]",yL="(?:\\ud83c[\\udde6-\\uddff]){2}",xL="[\\ud800-\\udbff][\\udc00-\\udfff]",wL="["+fL+"]",$L="(?:"+bL+"|"+vL+")",CL="(?:"+wL+"|"+vL+")",SL="(?:['’](?:d|ll|m|re|s|t|ve))?",jL="(?:['’](?:D|LL|M|RE|S|T|VE))?",kL="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",DL="[\\ufe0e\\ufe0f]?",TL=DL+kL+("(?:\\u200d(?:"+["[^"+cL+"]",yL,xL].join("|")+")"+DL+kL+")*"),EL="(?:"+[mL,yL,xL].join("|")+")"+TL,OL=RegExp([wL+"?"+bL+"+"+SL+"(?="+[pL,wL,"$"].join("|")+")",CL+"+"+jL+"(?="+[pL,wL+$L,"$"].join("|")+")",wL+"?"+$L+"+"+SL,wL+"+"+jL,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",gL,EL].join("|"),"g");var FL=aL,IL=lL,_L=Ka,ML=function(e){return e.match(OL)||[]};var AL=YO,BL=iL,RL=function(e,t,r){return e=_L(e),void 0===(t=r?void 0:t)?IL(e)?ML(e):FL(e):e.match(t)||[]},zL=RegExp("['’]","g");var PL=Ei(function(e){return function(t){return AL(RL(BL(t).replace(zL,"")),e,"")}}((function(e,t,r){return e+(r?"-":"")+t.toLowerCase()})));const LL=K.default.div`
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
`,NL=K.default(u.CircleIcon)`
    height: 100%;
    width: 100%;
    color: ${e=>e.$disabled?Ks["icon-disabled-subtle"](e):Ks["icon-subtle"](e)};
    transition: ${Xs["duration-150"]} ${Xs["ease-default"]};
`,HL=K.default(u.CircleDotIcon)`
    height: 100%;
    width: 100%;
    color: ${e=>e.$disabled?Ks["icon-selected-disabled"](e):Ks["icon-selected"](e)};

    transition: ${Xs["duration-150"]} ${Xs["ease-default"]};
`,WL=K.default.input`
    position: absolute;
    height: 100%;
    width: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    z-index: 1;

    appearance: none;
    background: transparent;
    border: none;

    &:hover + ${NL}, &:hover + ${HL} {
        color: ${e=>!e.disabled&&Ks["icon-hover"](e)};
    }
`,VL=K.default.div`
    display: flex;
    position: ${e=>e.$fixed?"fixed":"relative"};
    width: fit-content;
`,YL=K.default.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    width: 8.5rem;
    border: ${Gs["width-010"]} ${Gs.solid} ${Ks.border};
    background-color: ${Ks["bg-primary-subtlest"]};
    padding: 0.5rem 0 1.5rem 0;
`,UL=K.default(YL)`
    height: 100vh;
    left: 0;
    top: 0;
    ${el.MaxWidth.sm} {
        display: none;
        visibility: hidden;
    }
`,KL=K.default(YL)`
    display: none;
    visibility: hidden;
    ${el.MaxWidth.sm} {
        display: none; // NOTE: Since mobile view not supported yet
    }
`,qL=K.default(Di.ul)`
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
`,XL=K.default.li`
    width: 100%;
`,GL=K.default.span`
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
`,ZL=K.default(exports.Typography.BodyXS)`
    ${il(2)}
    margin-top: 0.25rem;
    transition: ${Xs["duration-250"]} ${Xs["ease-default"]};
`,QL=K.default(Rf)`
    width: 100%;
    margin-top: 1rem;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:hover,
    &:focus {
        ${GL} {
            background-color: ${Ks["bg-hover"]};
        }

        ${ZL} {
            ${qs["body-xs-semibold"]}
            color: ${Ks["text-hover"]};
        }
    }

    ${e=>e.$highlight&&i.css`
            ${GL} {
                background-color: ${Ks["bg-hover"]};
            }

            ${ZL} {
                ${qs["body-xs-semibold"]}
                color: ${Ks["text-selected"]};
            }
        `}
`,JL=t.createContext({selectedItem:void 0,currentItem:void 0,previouslySelectedItemId:void 0,setCurrentItem:()=>{},setPreviouslySelectedItemId:()=>{},setSelectedItem:()=>{}}),eN=K.default.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    list-style: none;
`,tN=K.default.li`
    margin-top: 1rem;
    width: 6.5rem;
    height: 1px;
    background-color: ${Ks.border};
`,rN=K.default(Di.li)``,nN=K.default(Rf)`
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
`,iN=K.default(Di.div)`
    margin: 0.125rem 0 0.125rem 0.5rem;
    overflow: hidden;
`,oN=K.default(n.ChevronUpIcon)`
    flex-shrink: 0;
    color: ${Ks.icon};
    transform: rotate(${e=>e.$expanded?0:180}deg);
    transition: transform ${Xs["duration-150"]} ${Xs["ease-default"]};
`,aN=K.default.span`
    ${il(2)}
    text-align: left;
`,sN=K.default(Di.ul)``,lN=K.default.li``,cN=K.default(Rf)`
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
`,dN=Object.assign((r=>{var{fixed:n=!0,children:i}=r,o=X(r,["fixed","children"]);const a=t.useRef(null),[s,l]=t.useState(void 0),[c,d]=t.useState(void 0),[u,f]=t.useState(void 0),[h,p]=t.useState(!1),g=t.useMemo((()=>({currentItem:s,selectedItem:c,previouslySelectedItemId:u,setCurrentItem:l,setSelectedItem:d,setPreviouslySelectedItemId:f})),[s,c,u,l,d,f]),m=ci({width:h?240:0,borderRightWidth:h?1:0,borderTopWidth:h?1:0,borderBottomWidth:h?1:0,borderLeftWidth:0});return td("click",(e=>{a.current&&!a.current.contains(e.target)&&(d({itemId:u||(c?c.itemId:void 0),content:void 0}),f(void 0),l(void 0))}),"window",!0),t.useEffect((()=>{p(!!(null==c?void 0:c.content)||!!(null==s?void 0:s.content))}),[s,c]),e.jsx(JL.Provider,{value:g,children:e.jsxs(VL,Object.assign({$fixed:n},o,{ref:a,onMouseLeave:()=>{l(void 0)},children:[e.jsx(UL,{children:i}),e.jsx(qL,{style:m,$showDrawer:h,"data-testid":"sidenav-drawer",children:s&&s.content||c&&c.content}),e.jsx(KL,{})]}))})}),{Group:t=>{var{separator:r,children:n}=t,i=X(t,["separator","children"]);return e.jsxs(eN,Object.assign({},i,{children:[n,r&&e.jsx(tN,{"data-testid":"divider"})]}))},Item:r=>{var{children:n,icon:i,title:o,onClick:a}=r,s=X(r,["children","icon","title","onClick"]);const l=s.id||o.toLowerCase().replaceAll(" ","-"),{currentItem:c,previouslySelectedItemId:d,selectedItem:u,setCurrentItem:f,setPreviouslySelectedItemId:h,setSelectedItem:p}=t.useContext(JL);t.useEffect((()=>{s.selected&&p({itemId:l,content:void 0})}),[s.selected]);return e.jsx(XL,{children:e.jsxs(QL,Object.assign({type:"button",onClick:()=>{h((()=>{if(n&&u)return d||u.itemId})()),f({itemId:l,content:n}),p({itemId:l,content:n}),a&&!n&&a(l)},onMouseEnter:()=>{f({itemId:l,content:n})}},s,{$highlight:!!u&&u.itemId===l||!!c&&c.itemId===l,children:[e.jsx(GL,{children:i}),e.jsx(ZL,{children:o})]}))})},DrawerItem:r=>{var{id:n,title:i,onClick:o,children:a}=r,s=X(r,["id","title","onClick","children"]);const[l,c]=t.useState(!0),[d,u]=t.useState(!1),{currentItem:f,setSelectedItem:h,setPreviouslySelectedItemId:p,setCurrentItem:g}=t.useContext(JL),m=ci({from:{opacity:0},to:{opacity:1}}),b=qe(),v=b.ref,y=ci({height:a&&l?b.height:0});return e.jsxs(rN,Object.assign({onMouseEnter:()=>{u(!0)},onMouseLeave:()=>{u(!1)}},s,{style:m,children:[e.jsxs(nN,{type:"button",onClick:()=>{a?c(!l):(h({itemId:null==f?void 0:f.itemId,content:void 0}),g(void 0),p(void 0),o&&o(n))},$highlight:d&&l,$noChildren:!a,children:[e.jsx(aN,{children:i}),a&&e.jsx(oN,{"aria-hidden":!0,$expanded:l})]}),e.jsx(iN,{style:y,children:e.jsx(sN,{ref:v,children:a})})]}))},DrawerSubitem:r=>{var{id:n,title:i,onClick:o}=r,a=X(r,["id","title","onClick"]);const{currentItem:s,setSelectedItem:l,setCurrentItem:c,setPreviouslySelectedItemId:d}=t.useContext(JL);return e.jsx(lN,Object.assign({},a,{children:e.jsx(cN,{type:"button",onClick:()=>{o&&o(n),l({itemId:null==s?void 0:s.itemId,content:void 0}),c(void 0),d(void 0)},children:i})}))}}),uN=i.keyframes`
	from {
		opacity: 0;
		transform: translateY(-20%);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
`,fN=K.default.div`
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
                animation: ${uN} 0.3s;
            `}}
`,hN=K.default.div`
    display: flex;
    align-items: center;
    padding: 0.5rem 0.25rem 0.5rem 1rem;
`,pN=K.default(nl)`
    padding: 0;
`,gN=K.default(m.CrossIcon)`
    color: ${Ks.icon};
    height: 1.25rem;
    width: 1.25rem;
`,mN=K.default.div`
    flex: 1;
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem 0.5rem 0.25rem;
    cursor: pointer;
`,bN=K.default.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: left;
    margin: 0.5rem;
    ${el.MaxWidth.xs} {
        margin: 0 0.5rem;
    }
`,vN=K.default.img`
    width: 2.65rem;
    height: auto;
    align-self: center;
`,yN=K.default.div`
    max-width: 30%;
`,xN=K.default(Hl.Small)`
    padding: 0.5rem;
    height: auto;
    & > span {
        overflow-wrap: anywhere;
        ${qs["body-xs-semibold"]}
    }
`,wN=K.default(exports.Typography.BodySM)`
    font-weight: ${qs.Spec["weight-bold"]};
    overflow-wrap: anywhere;
    ${el.MaxWidth.xs} {
        ${qs["body-xs-bold"]}
    }
`,$N=K.default(exports.Typography.BodyXS)`
    overflow-wrap: anywhere;
`,CN=K.default.div`
    margin-top: 0.25rem;
    display: flex;
    align-items: center;
`,SN=i.css`
    height: 2rem;
    width: 2rem;
    padding-right: 0.25rem;
    color: #ffc107;
`,jN=K.default(v.StarFillIcon)`
    ${SN}
`,kN=K.default(H.StarHalfIcon)`
    ${SN}
`,DN=K.default(b.StarIcon)`
    ${SN}
`,TN="https://assets.life.gov.sg/react-design-system/img/app-icon/app-icon.png",EN="smart-app-banner";const ON=Y.default.forwardRef((function(t,r){const{className:n,show:i,href:o,content:a,offset:s=0,icon:l=TN,animated:c=!1,onDismiss:d,onClick:u}=t,{title:f,message:h,buttonLabel:p,buttonAriaLabel:g,numberOfStars:m}=a,b=e=>{e.stopPropagation(),window.open(o,"_blank","noreferrer"),null==u||u()};return e.jsx(e.Fragment,{children:i&&e.jsxs(fN,{ref:r,$isAnimated:c,$offset:s,className:n,children:[e.jsx(hN,{onClick:d,id:`${EN}-dismiss`,"data-testid":`${EN}-dismiss-container`,children:e.jsx(pN,{"aria-label":"Dismiss",children:e.jsx(gN,{})})}),e.jsxs(mN,{onClick:b,id:`${EN}-proceed`,"data-testid":`${EN}-proceed-container`,children:[e.jsx(vN,{src:l,alt:"lifesg-app-icon"}),e.jsxs(bN,{children:[e.jsx(wN,{children:f}),e.jsx($N,{children:h}),(()=>{if(isNaN(m)||m<0)return;const t=[],r=m-Math.floor(m)>=.4;for(let r=0;r<Math.floor(m);r++)t.push(e.jsx(jN,{},`star${r}`));if(r&&t.push(e.jsx(kN,{},"halfstar")),t.length<5){const r=5-t.length;for(let n=0;n<r;n++)t.push(e.jsx(DN,{},`emptystar${n}`))}return e.jsx(CN,{children:t.slice(0,5)})})()]}),e.jsx(yN,{children:e.jsx(xN,{type:"button",onClick:b,"aria-label":g,children:p})})]})]})})})),FN=Y.default.createContext({currentActiveIndex:0,tabLinks:[],setCurrentActiveIndex:()=>{}}),IN=K.default.div`
    position: relative;
    width: 100%;
`,_N=K.default.div`
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
`,MN=K.default.div`
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
`,AN=K.default(nl)`
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
`,BN=t.forwardRef(((r,n)=>{var{children:i,fadeColor:o,fadePosition:a="both",showIndicator:s=!1,onResize:l}=r,c=X(r,["children","fadeColor","fadePosition","showIndicator","onResize"]);const[d,u]=t.useState("left"===a||"both"===a),[f,g]=t.useState("right"===a||"both"===a),m=t.useRef(null),b=t.useRef(null),v=Xu(y,50);function y(){const e=m.current,t=b.current;e&&t&&t.scrollWidth>e.offsetWidth?(g(Math.round(t.scrollLeft)<t.scrollWidth-t.offsetWidth),u(t.scrollLeft>=1)):(g(!1),u(!1))}function x(){y(),l&&l({content:b.current,wrapper:m.current})}qe({onResize:x,targetRef:m,refreshMode:"debounce",refreshRate:50}),t.useImperativeHandle(n,(()=>({resize(){x()}}))),t.useEffect((()=>{const e=b.current;return y(),e&&e.addEventListener("scroll",v),()=>{e&&e.removeEventListener("scroll",v)}}),[]);return e.jsxs(IN,Object.assign({ref:m},c,{children:[e.jsx(MN,{ref:b,children:i}),(()=>{let t;return t=Array.isArray(o)&&o.length>0?{left:o,right:o}:o||{left:void 0,right:void 0},e.jsxs(e.Fragment,{children:[d&&e.jsx(_N,{$backgroundColor:t.left,$position:"left",$showIndicator:s,"data-id":"left-fade",children:s&&e.jsx(AN,{$position:"left","data-id":"left-fade-indicator-button",children:e.jsx(p.ChevronLeftIcon,{})})}),f&&e.jsx(_N,{$backgroundColor:t.right,$position:"right",$showIndicator:s,"data-id":"right-fade",children:s&&e.jsx(AN,{$position:"right","data-id":"right-fade-indicator-button",children:e.jsx(h.ChevronRightIcon,{})})})]})})()]}))})),RN=K.default.ul`
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
`,zN=K.default.li`
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
`,PN=K.default.button`
    position: relative;
    padding: ${Zs["spacing-16"]} ${Zs["spacing-16"]}
        ${Zs["spacing-20"]};
    border: none;
    background: none;
    cursor: pointer;
`,LN=K.default(exports.Typography.BodyBL)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, calc(-50% - 0.125rem)); // Based on testing
    color: ${Ks["text-subtler"]};
    opacity: 1;

    ${e=>{if(e.$active)return i.css`
                opacity: 0;
            `}}
`,NN=K.default(exports.Typography.BodyBL)`
    color: ${Ks["text-primary"]};
    opacity: 0;
    ${e=>{if(e.$active)return i.css`
                opacity: 1;
            `}}
`,HN=K.default(BN)`
    [data-id="left-fade-indicator-button"],
    [data-id="right-fade-indicator-button"] {
        margin-bottom: ${Zs["spacing-4"]};
    }
`,WN=({controlledMode:r,"data-testid":n,onTabClick:o,fullWidthIndicatorLine:a})=>{const{setCurrentActiveIndex:s,currentActiveIndex:l,tabLinks:c}=t.useContext(FN),d=i.useTheme(),u=Js["md-max"]({theme:d}),f=bc.useMediaQuery({maxWidth:u}),h=Js["lg-max"]({theme:d}),p=t.useRef(null),g=e=>t=>{t.preventDefault(),r||s(e),o&&o(c[e].title,e)},m=e=>f&&e.length>20?`${e.substring(0,20)}...`:e;return e.jsx(HN,{onResize:({content:e,wrapper:t})=>{e&&t&&window.innerWidth<=h&&p.current&&(e.scrollLeft=p.current.getBoundingClientRect().left)},"data-testid":n,children:e.jsx(RN,{role:"tablist",$fullWidthIndicatorLine:a,children:c.map(((t,r)=>{const i=l===r;return e.jsx(zN,{role:"none",$active:i,ref:i?p:null,children:e.jsxs(PN,{role:"tab",type:"button","aria-selected":i,onClick:g(r),"data-testid":`${n}-link-${r}`,children:[e.jsx(LN,{$active:i,weight:"regular",children:m(t.title)}),e.jsx(NN,{$active:i,weight:"semibold","aria-hidden":"true",children:m(t.title)})]})},r)}))})})},VN=K.default.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`,YN=Object.assign((r=>{var{children:n,currentActive:i,initialActive:o=0,onTabClick:a,"data-testid":s,fullWidthIndicatorLine:l}=r,c=X(r,["children","currentActive","initialActive","onTabClick","data-testid","fullWidthIndicatorLine"]);const[d,u]=t.useState(i||o),[f,h]=t.useState([]);t.useEffect((()=>{const e=t.Children.toArray(n).filter(Boolean);p(e)}),[n]),t.useEffect((()=>{"number"==typeof i&&u(i)}),[i]);const p=e=>{const t=e.map((e=>({title:e.props.title})));h(t)};return e.jsx(VN,Object.assign({"data-testid":s},c,{children:e.jsxs(FN.Provider,{value:{tabLinks:f,currentActiveIndex:d,setCurrentActiveIndex:u},children:[e.jsx(WN,{controlledMode:"number"==typeof i,onTabClick:a,"data-testid":`${s}-tabs`,fullWidthIndicatorLine:l}),t.Children.toArray(n).filter(Boolean).map(((e,r)=>t.cloneElement(e,{key:r,index:r})))]})}))}),{Item:r=>{var{index:n,children:i}=r,o=X(r,["index","children"]);const{currentActiveIndex:a}=t.useContext(FN);return a===n?e.jsx("div",Object.assign({role:"tabpanel"},o,{children:i})):null}}),UN=K.default.div`
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
`,KN=K.default.div`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-align: left;
`;var qN;Ic.extend(Mc),function(e){e.formatHourlyDisplay=e=>Ic(e,"HH:mm").format("ha"),e.calculateWidth=(e,t,r)=>Gc.getTimeDiffInMinutes(e,t)/15*(r/2)}(qN||(qN={}));const XN=1.25,GN=e=>"minified"===e?12:40,ZN=e=>"minified"===e?12:40,QN=K.default.div`
    position: relative;
    display: flex;
    align-items: center;
`,JN=K.default(nl)`
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
`,eH=K.default(h.ChevronRightIcon)`
    width: 1rem;
    height: 1rem;
    color: ${Ks["icon-primary"]};
`,tH=K.default(p.ChevronLeftIcon)`
    font-size: 1rem;
    color: ${Ks["icon-primary"]};
`,rH=K.default.div`
    overflow: hidden;
    flex-grow: 1;
    position: relative;
    height: ${({$variant:e})=>`${20+ZN(e)}px`};
`,nH=K.default.div`
    position: relative;
    white-space: nowrap;
    height: ${XN}rem;
`,iH=K.default.div`
    display: flex;
    white-space: nowrap;
`,oH=K.default.div`
    display: inline-block;
    width: ${({$variant:e})=>`${GN(e)}px`};
    position: relative;
    border-left: ${Gs["width-010"]} ${Gs.solid}
        ${Ks["border-stronger"]};
    ${e=>{let t=0;switch(e.$variant){case"default":t=e.$isLongMarker?XN:.625;break;case"minified":t=e.$isLongMarker?XN:0;break;default:t=0}return i.css`
            height: ${t}rem;
        `}}
`,aH=K.default(exports.Typography.BodyXS)`
    color: ${Ks["text-subtle"]};
    position: absolute;
    bottom: 10%;
    left: 10%;
`,sH=K.default.div`
    ${e=>"vertical"===e.$type?i.css`
                display: flex;
                flex-grow: 1;
                align-items: center;
                justify-content: center;
                width: 100%;
                margin: 1px 0px;
            `:i.css`
                position: absolute;
                height: ${ZN(e.$variant)}px;
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
`,lH=K.default.div`
    position: absolute;
    top: ${XN}rem;
    height: ${({$variant:e})=>`${ZN(e)}px`};
    z-index: 1;
    border-right: ${Gs["width-010"]} ${Gs.solid}
        ${Ks["border-stronger"]};
`,cH=K.default(exports.Typography.BodyXS)`
    color: ${e=>e.$color||Ks.text(e)};
    position: absolute;
    bottom: 0;
    padding-left: 4px;
    padding-bottom: 4px;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`,dH=K.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    user-select: none;
    margin-bottom: ${Zs["spacing-8"]};
    flex: 1;
`,uH=K.default(exports.Typography.BodyXS)`
    ${e=>e.$disabled&&i.css`
            color: ${Ks["text-disabled-subtlest"]};
        `}
`,fH=K.default.div`
    grid-column: 2 / -1;
    display: flex;
`,hH=K.default.div`
    width: 100%;
    display: grid;
    grid-template-columns: auto repeat(7, 1fr);
    column-gap: ${Zs["spacing-4"]};
`,pH=K.default(Di.div)`
    grid-column: 2 / -1;
    overflow: hidden;
`,gH=K.default.div`
    display: flex;
    gap: ${Zs["spacing-4"]};
    transition: all ${Xs["duration-250"]} ${Xs["ease-default"]};
    overflow: hidden;
`,mH=K.default.div`
    display: flex;
    flex-direction: column;
    grid-row: 3 / auto;
    gap: ${Zs["spacing-4"]};
    width: 1.375rem;
    transition: all ${Xs["duration-250"]} ${Xs["ease-default"]};
    overflow: hidden;

    ${e=>e.$height&&`height: ${e.$height}px;`}
`,bH=K.default.div`
    min-height: 3.75rem;
    :last-child {
        min-height: 0;
    }
`,vH=K.default.div`
    ${qs["body-xs-bold"]}
    color: ${Ks["text-subtler"]};
    text-align: center;
    line-height: 12px; // align with cell on the same row
    :first-line {
        font-size: ${qs.Spec["body-size-sm"]};
    }
`,yH=K.default.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: ${Zs["spacing-4"]};
`,xH=K.default.div`
    grid-row: 4;
    grid-column: 1 / -1;
    display: flex;
    margin-top: ${Zs["spacing-8"]};
`,wH=K.default(Hl.Small)`
    width: 100%;
    height: 2.5rem;
    span {
        display: flex;
        align-items: center;
        gap: ${Zs["spacing-8"]};
    }
`,$H=K.default(u.ChevronUpIcon)`
    transform: rotate(${e=>e.$isExpanded?0:180}deg);
    transition: transform ${Xs["duration-250"]} ${Xs["ease-default"]};
`,CH=K.default(sH)`
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
`;var SH=Gi;var jH=function(e,t,r){for(var n=-1,i=e.length;++n<i;){var o=e[n],a=t(o);if(null!=a&&(void 0===s?a==a&&!SH(a):r(a,s)))var s=a,l=o}return l};var kH=jH,DH=GC,TH=function(e,t){return e<t};var EH=Ei((function(e,t){return e&&e.length?kH(e,DH(t),TH):void 0}));var OH=jH,FH=function(e,t){return e>t},IH=GC;var _H=Ei((function(e,t){return e&&e.length?OH(e,IH(t),FH):void 0}));const MH=({calendarDate:r,disabledDates:n,selectedDate:i,onSelect:o,minDate:a,maxDate:s,startTime:l,endTime:c,maxVisibleCellHeight:d,slots:u,interval:f=30,variant:h="flexible",enableSelection:p=!0,onSlotClick:g})=>{var m,b,v,y;const x="YYYY-MM-DD",[w,$]=t.useState(!1),[C,S]=t.useState(),j=t.useMemo((()=>Vc.generateDaysForCurrentWeek(r)),[r]),k=Object.values(null!=u?u:{}).flat(),D=null!==(b=null!=l?l:null===(m=EH(k,"startTime"))||void 0===m?void 0:m.startTime)&&void 0!==b?b:"00:00",T=null!==(y=null!=c?c:null===(v=_H(k,"endTime"))||void 0===v?void 0:v.endTime)&&void 0!==y?y:"24:00",E=Math.ceil(Gc.getTimeDiffInMinutes(D,T)/f),{height:O=0,ref:F}=qe(),I=d?O<d||w?O:d:O,_=ci({height:I}),M=t.useMemo((()=>{if(u){const e={};return Object.entries(u).forEach((([t,r])=>{const n=function(e){const t=Array(E).fill({});return e.forEach((e=>{const r=Math.max(0,Gc.getTimeDiffInMinutes(D,e.startTime)/f),n=Math.min(E,Gc.getTimeDiffInMinutes(D,e.endTime)/f),i=Math.ceil(n)-Math.floor(r);switch(h){case"fixed":t[Math.floor(r)]=Object.assign(Object.assign({},e),{cellLength:n-r});break;case"flexible":for(let o=0;o<i;o++){const a=Gc.addMinutesToTime(D,Math.floor(r+o)*f),s=Gc.addMinutesToTime(a,f);let l;DO(t[Math.floor(r+o)])?0===o&&r%1!=0?l="top":o===i-1&&n%1!=0&&(l="bottom"):l=void 0,t[Math.floor(r+o)]=Object.assign(Object.assign({},e),{id:`${e.id}-${o}`,startTime:a,endTime:s,cellLength:1,halfFill:l})}}})),t}(r);e[t]=function(e){var t,r,n,i;let o=0;switch(h){case"fixed":for(e=e.reduce(((e,t)=>{const r=e.length>0?e[e.length-1]:e[0];return DO(t)&&DO(r)?e:[...e,t]}),[{}]);o<e.length;){if(DO(e[o])){const a=null!==(r=null===(t=e[o-1])||void 0===t?void 0:t.endTime)&&void 0!==r?r:D,s=null!==(i=null===(n=e[o+1])||void 0===n?void 0:n.startTime)&&void 0!==i?i:T;if(a!==s){const t=Gc.getTimeDiffInMinutes(a,s)/f;e[o]=Object.assign(Object.assign({},P(o)),{startTime:a,endTime:s,cellLength:t})}}o++}break;case"flexible":for(;o<e.length;)DO(e[o])?(e[o]=P(o),o++):o+=e[o].cellLength}return e.filter((e=>!DO(e)&&e.cellLength>0))}(n)})),e}return{}}),[u]),A=e=>{S(e)},B=()=>{S(void 0)},R=e=>{e.preventDefault(),$((e=>!e))},z=e=>{var t;const r=Vc.isWithinRange(e,a?Ic(a):void 0,s?Ic(s):void 0),i=null!==(t=n&&n.includes(e.format(x)))&&void 0!==t&&t;return!r||i};function P(e,t=1){return{id:`${e.toString()}-${(new Date).getTime()}`,startTime:"",endTime:"",clickable:!1,styleAttributes:{backgroundColor:Ks["bg-stronger"]},cellLength:t}}return e.jsxs(hH,{children:[e.jsx(fH,{children:j.map(((t,r)=>{const n=(e=>{const t=e.format(x),r=z(e),n={},o=p&&!r;r&&(n.disabled=!0),n.interactive=p?o:null;const a=o&&C&&e.isSame(C,"day"),s=[i].includes(t);return s&&a?(n.labelType="selected-hover",n.circleLeft="selected-hover-outline",n.circleRight="selected-hover-outline"):s?(n.labelType="selected",n.circleLeft="selected-outline",n.circleRight="selected-outline"):a&&(n.labelType="hover",n.circleLeft="hover-subtle",n.circleRight="hover-subtle"),n})(t);return e.jsx(tu,Object.assign({date:t,calendarDate:Ic(i),onSelect:()=>{((e,t)=>{!t&&p&&o(e)})(t,!n.interactive)},onHover:A,onHoverEnd:B},n),`day-${r}`)}))}),e.jsx(fH,{children:j.map(((t,r)=>e.jsx(dH,{children:e.jsx(uH,{weight:"semibold",$disabled:z(t),children:Ic(t).format("ddd")})},`week-day-${r}`)))}),(()=>{let t=!1;const r=e=>{const r=Ic(D,"HH:mm").add(4*e*f,"minutes"),n=r.format("h"),i=r.format("mm"),o=r.format("a");let a=`${n}${"00"!==i?` ${i}`:""}`;return t||"pm"!==o||"00"!==i||(a+=` ${o}`,t=!0),a};return e.jsx(mH,{$height:I,children:Array(Math.ceil(E/4)).fill(void 0).map(((t,n)=>e.jsx(bH,{children:e.jsx(vH,{children:r(n)})},`time-${n}`)))})})(),e.jsx(pH,{style:_,children:e.jsx(gH,{ref:F,children:j.map(((t,r)=>{var n;const i=t.format(x),o=null!==(n=M[i])&&void 0!==n?n:Array("flexible"===h?E:1).fill(void 0).map(((e,t)=>P(t,"fixed"===h?E:void 0)));return e.jsx(yH,{children:o.map((t=>{const{id:r,clickable:n=!0,styleAttributes:o,cellLength:a,halfFill:s}=t,{styleType:l="default",backgroundColor:c,backgroundColor2:d}=o;return e.jsx(CH,{$type:"vertical",$variant:"default",$styleType:l,$bgColor:c,$bgColor2:d,$halfFill:s,$clickable:n,$height:"fixed"===h?12*a+4*(a-1):12,onClick:()=>n&&((e,t)=>{g&&g(e,t)})(i,t)},r)}))},`wrapper-${r}`)}))},`week-cell-${r.format(x)}`)}),(()=>{if(d&&F.current&&!(O&&O<d))return e.jsx(xH,{children:e.jsxs(wH,{"data-testid":"time-bar-expand-collapse-button",styleType:"light",onClick:R,children:[e.jsx($H,{$isExpanded:w}),(w?"Hide":"Show")+" later times"]})})})()]})},AH=K.default.div`
    --header-bottom-spacing: 0.5rem;

    ${el.MaxWidth.sm} {
        --header-horizontal-inset: 1.25rem;
    }

    min-width: 18.5rem;
`,BH="YYYY-MM-DD",RH=K.default.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    user-select: none;
    margin-bottom: 0.188rem;
`,zH=K.default.div`
    ${qs["body-xs-semibold"]}
    color:${Ks.text};

    ${e=>e.$disabled&&i.css`
            color: ${Ks["text-disabled-subtlest"]};
        `};
`,PH=K.default.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
`,LH=K.default.div`
    grid-column: 1 / -1;
    display: flex;
    min-height: 7.625rem;
`,NH=K.default.div`
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
`,HH=K.default.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 1px;
`;Ic.extend(Bc);const WH="YYYY-MM-DD",VH={id:"1",startTime:"",endTime:"",clickable:!1,styleAttributes:{color:"",styleType:"stripes",backgroundColor:Ks["bg-stronger"],backgroundColor2:Ks["bg-strongest"]}},YH=({calendarDate:r,disabledDates:n,selectedDate:i,onSelect:o,minDate:a,maxDate:s,slots:l,enableSelection:c=!0,onSlotClick:d})=>{const u=t.useMemo((()=>Vc.generateDaysForCurrentWeek(r)),[r]),[f,h]=t.useState(),p=e=>{h(e)},g=()=>{h(void 0)},m=e=>{const t=e.format(WH),r=(e=>{const t=Vc.isWithinRange(e,a?Ic(a):void 0,s?Ic(s):void 0),r=!!n&&n.includes(e.format(WH));return!t||r})(e),o=c&&!r,l=o&&f&&e.isSame(f,"day"),d=[i].includes(t),u={labelType:"available",interactive:c?o:null};return r&&(u.disabled=!0,u.labelType="unavailable"),d&&l?(u.labelType="selected-hover",u.circleLeft="selected-hover-outline",u.circleRight="selected-hover-outline"):d?(u.labelType="selected",u.circleLeft="selected-outline",u.circleRight="selected-outline"):l&&(u.labelType="hover",u.circleLeft="hover-subtle",u.circleRight="hover-subtle"),u};return e.jsxs(PH,{children:[u.map(((t,r)=>{const n=m(t);return e.jsxs(RH,{children:[e.jsx(tu,Object.assign({date:t,calendarDate:Ic(i),onSelect:()=>{((e,t)=>{!t&&c&&o(e)})(t,!n.interactive)},onHover:p,onHoverEnd:g},n),`day-${r}`),e.jsx(zH,{$disabled:n.disabled,children:Ic(t).format("ddd")})]},`week-day-${r}`)})),e.jsx(LH,{children:u.map(((t,r)=>{const n=t.format(WH),i=l&&(l[n]?l[n]:[VH]);return e.jsx(HH,{children:i&&i.map((t=>{const{id:r,startTime:i,endTime:o,clickable:a=!0,styleAttributes:s}=t,{color:l,styleType:c="default",backgroundColor:u,backgroundColor2:f}=s;return e.jsx(sH,{$type:"vertical",$variant:"default",$styleType:c,$bgColor:u,$bgColor2:f,$clickable:a,onClick:()=>a&&((e,t)=>{null==d||d(e,t)})(n,t),children:e.jsxs(NH,{style:{color:l},children:[e.jsx("span",{children:Vc.convertTo12HourFormat(i)}),o&&i&&e.jsx("span",{children:"-"}),e.jsx("span",{children:Vc.convertTo12HourFormat(o)})]})},r)}))},`wrapper-${r}`)}))},`week-cell-${r.format(WH)}`)]})},UH=K.default.div`
    --header-bottom-spacing: 0.5rem;

    ${el.MaxWidth.sm} {
        --header-horizontal-inset: 1.25rem;
    }

    min-width: 18.5rem;
`,KH="YYYY-MM-DD",qH=K.default.div`
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
`,XH=K.default.div`
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
`,GH=K.default.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 1rem;
`,ZH=K.default.div`
    grid-column: ${e=>e.$startCol?e.$startCol:3} / span
        ${e=>e.$colSpan?e.$colSpan:8};

    ${el.MaxWidth.lg} {
        grid-column: span 8;
    }

    ${el.MaxWidth.sm} {
        grid-column: span 8;
    }
`,QH=K.default(exports.Typography.HeadingSM).attrs({as:"div"})`
    margin-bottom: 1rem;

    ${el.MaxWidth.lg} {
        margin-bottom: 1.5rem;
    }
`,JH=K.default(exports.Typography.HeadingXS).attrs({as:"div"})`
    margin-top: -0.125rem;
    margin-bottom: 0.5rem;
`,eW=K.default.div`
    display: flex;

    :last-of-type ${XH} {
        margin-bottom: 0;
    }
`,tW=K.default.div`
    margin-bottom: 2rem;
    width: 100%;
`,rW=K.default.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 0.5rem;
    gap: 0.5rem;
`,nW=K.default(bP)`
    padding: 0.125rem 0.5rem;
`,iW=["#FFE6BB","#D8EFEB","#E6EAFE","#FAE4E5","#D3EEFC"],oW=15,aW=252,sW=["#FFF2DD","#EBF7F5","#F2F4FE","#FCF1F2","#E9F6FD"],lW=i.keyframes`
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
`,cW=K.default(Ih)`
    color: ${Ks.icon};
    svg {
        ${e=>{if(e.$loading)return i.css`
                    animation: ${lW} 4s linear infinite;
                `}}
    }
`,dW=K.default.div`
    display: flex;
    padding-bottom: ${Zs["spacing-16"]};
    justify-content: space-between;
    gap: ${Zs["spacing-8"]};
`,uW=K.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${Zs["spacing-8"]};
`,fW=K.default(exports.Typography.BodySM)`
    color: ${Ks["text-subtler"]};
`,hW=K.default(Bh)`
    width: 400px;
`,pW=t=>{var{selectedDate:r,loading:n,tableContainerRef:i,totalRecords:o,onPreviousDayClick:a,onNextDayClick:s,onRefresh:l,onCalendarDateSelect:c}=t,d=X(t,["selectedDate","loading","tableContainerRef","totalRecords","onPreviousDayClick","onNextDayClick","onRefresh","onCalendarDateSelect"]);const f=()=>{i.current&&(i.current.scrollTop=0)},h=()=>{l&&(f(),l())};return e.jsxs(dW,{children:[e.jsx(hW,Object.assign({selectedDate:r,loading:n},d,{onRightArrowClick:e=>{f(),s(e)},onLeftArrowClick:e=>{f(),a(e)},onCalendarDateSelect:c})),void 0===o?e.jsx(e.Fragment,{}):e.jsxs(uW,{children:[e.jsxs(fW,{"data-testid":"timetable-records-results",weight:"semibold",children:[o," results found"]}),l&&e.jsx(cW,{"data-testid":"timetable-records-refresh-btn",styleType:"light",sizeType:"small",disabled:n,onClick:h,$loading:n,children:e.jsx(u.RefreshIcon,{})})]})]})},gW=K.default.div`
    display: flex;
    width: 100%;
`,mW=K.default.div`
    border-bottom: ${Gs["width-010"]} ${Gs.solid} ${Ks.border};
    ${e=>{if(e.$isOnTheHour)return i.css`
                box-shadow: inset -0.5px 0px ${Ks["border-primary"]};
            `}}
`,bW=K.default.div`
    display: flex;
    margin-bottom: 2px;
    height: 65px;
`,vW=K.default.div`
    width: 2px;
    height: 100%;
`,yW=K.default.div`
    height: 100%;
    width: ${({$width:e})=>`${e}px`};
    border-radius: ${Qs.sm};
    box-sizing: border-box;
    padding: ${Zs["spacing-4"]};
    ${({$status:e,$mainColor:t,$isClickable:r,$altColor:n})=>{switch(e){case"blocked":return i.css`
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
                `;case"pending":return i.css`
                    background: repeating-linear-gradient(
                        135deg,
                        ${t} 0px 6px,
                        ${n} 6px 12px
                    );
                    &:hover {
                        cursor: ${r?"pointer":"not-allowed"};
                    }
                `;default:return i.css`
                    &:hover {
                        background-color: ${r?Ks["bg-hover-subtle"]:""};
                        cursor: ${r?"pointer":"default"};
                    }
                `}}}
`,xW=K.default(exports.Typography.BodySM)`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`,wW=K.default(exports.Typography.BodyXS)`
    color: ${Ks["text-subtler"]};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`,$W=({containerRef:t,children:r,customPopover:n})=>{if(!n)return r;const i={position:"bottom-start",rootNode:t,customOffset:n.offset,children:r,trigger:n.trigger,delay:n.delay,popoverContent:n.content};return e.jsx(Yy,Object.assign({},i))},CW=Y.default.memo((({id:t,startTime:r,endTime:n,title:i,subtitle:o,status:a,intervalWidth:s,rowBarColor:l,containerRef:c,customPopover:d,roundedStartTime:u=r,roundedEndTime:f=n,onClick:h})=>{const p=0===Ic(f,"HH:mm").get("minutes"),g=Gc.getTimeDiffInMinutes(u,f)/oW*s-2,m=!!h||d&&"click"===d.trigger;return e.jsx($W,{containerRef:c,customPopover:d,children:e.jsx(mW,{"data-testid":"block-container",$isOnTheHour:p,children:e.jsxs(bW,{children:[e.jsxs(yW,{$width:g,$status:a,$mainColor:l.mainColor,$altColor:l.alternateColor,$isClickable:m,onClick:e=>{h&&h({id:t,startTime:r,endTime:n,status:a,title:i,subtitle:o,customPopover:d},e)},children:[i&&e.jsx(xW,{weight:"semibold",children:i}),o&&e.jsx(wW,{weight:"bold",children:o})]}),e.jsx(vW,{})]})},"block-container-key")})})),SW=({id:r,timetableMinTime:n,timetableMaxTime:i,rowMinTime:o,rowMaxTime:a,rowCells:s,rowBarColor:l,intervalWidth:c,containerRef:d,outOfRangeCellPopover:u})=>{const f=o?Ku.roundToNearestInterval(o,oW):n,h=a?Ku.roundToNearestInterval(a,oW,!0):i,p=t.useMemo((()=>{const e=[];f&&Ic(n,"HH:mm").isBefore(Ic(f,"HH:mm"))&&e.push({id:r,startTime:n,endTime:f,status:"blocked",customPopover:u});const t=[...s].sort(((e,t)=>{const r=Ic(e.startTime,"HH:mm"),n=Ic(t.startTime,"HH:mm");return r.isBefore(n)?-1:r.isAfter(n)?1:0}));let l;return t.forEach(((t,n)=>{var i;const{startTime:o,endTime:a}=t;let c=Ku.roundToNearestInterval(o,oW);l&&Ic(c,"HH:mm").isBefore(Ic(l,"HH:mm"))&&(c=Ku.roundToNearestInterval(o,oW,!0));const d=Ku.roundToNearestInterval(a,oW,!0);e.push(Object.assign(Object.assign({},t),{roundedStartTime:c,roundedEndTime:d}));const u=(null===(i=s[n+1])||void 0===i?void 0:i.startTime)||h,f=Ic(Ku.roundToNearestInterval(u,oW),"HH:mm");let p=Ic(d,"HH:mm");for(;p.isBefore(f);)if(g=f,p.get("hour")!=g.get("hour")){const t=p.add(1,"hour").startOf("hour");e.push({id:r,startTime:p.format("HH:mm").toString(),endTime:t.format("HH:mm").toString(),status:"disabled"}),p=t}else e.push({id:r,startTime:p.format("HH:mm").toString(),endTime:f.format("HH:mm").toString(),status:"disabled"}),p=f;var g;l=p.format("HH:mm").toString()})),h&&Ic(i,"HH:mm").isAfter(Ic(h,"HH:mm"))&&e.push({id:r,startTime:h,endTime:i,status:"blocked",customPopover:u}),0!==t.length||o||a||e.push({id:r,startTime:n,endTime:i,status:"blocked",customPopover:u}),e}),[f,n,s,h,i,o,a,r,u]);return e.jsx(gW,{"data-testid":"timetable-row",children:p.map(((t,r)=>e.jsx(CW,Object.assign({},t,{intervalWidth:c,rowBarColor:l,containerRef:d}),`${r}-row-cell-key`)))})},jW=K.default.div``,kW=K.default.div`
    display: grid;
    overflow: scroll;
    position: relative;
    grid-template-columns: ${aW}px auto;
`,DW=K.default.div`
    display: grid;
    overflow: scroll;
    position: relative;
    grid-template-columns: ${aW}px fit-content(100%);
    padding-bottom: ${e=>e.$allRecordsLoaded?"0":"128px"};
    ${e=>{if(e.$loading)return i.css`
                :hover {
                    cursor: not-allowed;
                    padding-bottom: 0;
                }
            `}}
`,TW=K.default.div`
    position: sticky;
    top: 0;
    left: 0;
    background-color: ${Ks.bg};
    width: ${aW}px;
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
`,EW=K.default.div`
    display: grid;
    position: sticky;
    grid-column: 1 / 2;
    left: 0;
    z-index: 1;
    background-color: ${Ks.bg};
    grid-template-rows: repeat(${e=>e.$numOfRows}, ${68}px);
`,OW=K.default.div`
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
`,FW=K.default.div`
    min-width: ${84}px;
    align-content: end;
    margin-bottom: ${Zs["spacing-4"]};
`,IW=K.default(exports.Typography.BodySM)`
    color: ${Ks["text-subtler"]};
`,_W=K.default.div`
    display: grid;
    grid-template-rows: repeat(${e=>e.$numOfRows}, ${68}px);
`,MW=K.default.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    position: sticky;
    left: 0;
    background-color: ${Ks.bg};
    width: ${aW}px;
    height: ${68}px;
    text-align: right;
    padding: 0 ${Zs["spacing-16"]} 0 ${Zs["spacing-32"]};
    border-bottom: ${Gs["width-010"]} ${Gs.solid} ${Ks.border};
    border-left: ${Gs["width-010"]} ${Gs.solid} ${Ks.border};
    transition: all 0.5s ease-in-out;
    ${e=>e.$isScrolled?i.css`
                box-shadow: 2px 2px 8px
                    rgb(from ${Ks.Primitive["neutral-20"]} r g b / 25%);
            `:i.css`
                box-shadow: inset -0.5px 0px ${Ks["border-primary"]};
            `};
`,AW=K.default(exports.Typography.BodyMD)`
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
    white-space: nowrap;
    color: ${Ks["text-primary"]};
    :hover {
        cursor: ${e=>e.$isClickable?"pointer":"default"};
    }
`,BW=K.default(exports.Typography.BodyXS)`
    display: inline-flex;
    gap: ${Zs["spacing-4"]};
    align-items: center;
    color: ${Ks["text-subtler"]};
    ${e=>{if(!e.$show)return i.css`
                display: none;
            `}}
`,RW=K.default(fc)`
    display: flex;
    align-items: center;
    justify-content: center;
    grid-column: ${e=>e.$isEmptyContent?"1 / -1":"2 / -1"};
    grid-row: 2;
    width: 100%;
    height: 100%;
`,zW=K.default(Ef)`
    grid-column: 1 / -1;
    grid-row: 2;
    padding: ${Zs["spacing-72"]} 0;
`,PW=K.default.div`
    display: flex;
    border-bottom: ${Gs["width-010"]} ${Gs.solid} ${Ks.border};
`,LW=K.default.div`
    border-right: ${Gs["width-005"]} ${Gs.solid}
        ${Ks["border-primary"]};
    width: ${e=>`${e.$width}px`};
    height: 100%;
    padding: ${Zs["spacing-20"]} ${Zs["spacing-12"]};
`,NW=i.keyframes`
  0% {
        background-position: -468px 0;
    }
    100% {
        background-position: 468px 0;
    }
`,HW=K.default.div`
    height: 28px;
    width: 100%;
    background: linear-gradient(
        to right,
        ${Ks.Primitive["neutral-95"]} 8%,
        ${Ks.Primitive["neutral-100"]} 18%,
        ${Ks.Primitive["neutral-95"]} 33%
    );
    background-size: 800px 104px;
    animation: ${NW} 1.5s forwards infinite;
`,WW=K.default(Yy)`
    max-width: 24rem !important;
    :hover {
        cursor: default;
    }
`,VW=e=>{const t={success:{Background:"bg-success",Border:"border-success",Text:"text-success",Icon:"icon-success"},warning:{Background:"bg-warning",Border:"border-warning",Text:"text-warning",Icon:"icon-warning"},error:{Background:"bg-error",Border:"border-error",Text:"text-error",Icon:"icon-error"},info:{Background:"bg-info",Border:"border-info",Text:"text-info",Icon:"icon-info"}}[e.$type];return{Background:Ks[t.Background],Border:Ks[t.Border],Text:Ks[t.Text],Icon:Ks[t.Icon]}},YW=K.default(Di.div)`
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
            background: ${VW(e).Background};
            border: 1px solid ${VW(e).Border};
            color: ${VW(e).Text};
        `};
`,UW=K.default.div`
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
`,KW=K.default.div`
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
                color: ${VW(e).Icon};
            }
        `};
`,qW=K.default.div`
    display: flex;
    flex-direction: column;
`,XW=K.default(exports.Typography.HeadingXS)`
    display: flex;

    ${e=>i.css`
            color: ${VW(e).Text};
        `}
`,GW=K.default.div`
    ${e=>i.css`
            p {
                color: ${VW(e).Text};
            }
        `}
`,ZW=K.default(Hl.Small)`
    align-self: center;
    margin-left: auto;
    height: auto;
    width: fit-content;
    flex-shrink: 0;

    ${el.MaxWidth.sm} {
        align-self: flex-start;
        margin-left: 2rem;
    }
`,QW=K.default(nl)`
    padding: 0.75rem;
    margin: -0.75rem;
    align-self: stretch;

    ${e=>i.css`
            svg {
                width: 1.5rem;
                height: 1.5rem;
                color: ${VW(e).Text};
            }
            :hover {
                background: transparent;
            }
            ${el.MaxWidth.sm} {
                align-self: center;
            }
        `};
`,JW=4e3,eV=K.default.div`
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

                ${Qh.MaxWidth.mobileL} {
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

                ${Qh.MaxWidth.mobileL} {
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

                ${Qh.MaxWidth.mobileL} {
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

                ${Qh.MaxWidth.mobileL} {
                    max-width: 80vw;
                }
            `}})(e.position)}
    ${e=>e.visible?i.css`
            visibility: "visible";
            opacity: 1;
            transition: ${LP.Base};
            z-index: 2;
        `:i.css`
            visibility: "hidden";
            opacity: 0;
            transition: ${LP.Base};
            z-index: -1;
        `}
`,tV=K.default(gu)`
    border-radius: 4px;
    box-shadow: 3px 2px 10px 1px rgba(91, 91, 91, 0.2);
`,rV=K.default.div`
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
                        border-color: ${CP.Neutral[8]} transparent
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
                        border-color: transparent ${CP.Neutral[8]}
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
                            ${CP.Neutral[8]};
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
                            ${CP.Neutral[8]} transparent;
                    }
                `}}}
`,nV=K.default.div`
    position: relative;
`,iV=r=>{var{visible:n,position:i="top",children:o}=r,a=X(r,["visible","position","children"]);const s=a["data-testid"]||"tooltip",[l,c]=t.useState(i),d=t.useRef(null);t.useEffect((()=>(f(),window.addEventListener("resize",Wu(u,300)),()=>{window.removeEventListener("resize",Wu(u,300))})),[]);const u=()=>{f()},f=()=>{if(d.current){const e=d.current.getBoundingClientRect();if(e.x<0)switch(i){case"left":case"top":case"bottom":c("right");break;case"right":c("top")}else if(e.x+e.width>window.outerWidth)switch(i){case"right":case"top":case"bottom":c("left");break;case"left":c("top")}else c(i)}};return e.jsxs(eV,Object.assign({position:l,"data-testid":s,visible:n,ref:d},a,{children:[e.jsx(tV,{children:"string"==typeof o?e.jsx(exports.V2_Text.BodySmall,{children:o}):o}),e.jsx(rV,{position:l})]}))},oV=i.css`
    grid-column: ${e=>e.$stretch?"1 / -1":"span 8"};

    ${el.MaxWidth.sm} {
        grid-column: 1 / -1;
    }
`,aV=K.default(xM.Content)`
    background: ${({$background:e})=>e?Ks["bg-strong"]:"transparent"};
    padding-top: 2rem;
    padding-bottom: 2rem;
`,sV=K.default(exports.Typography.HeadingSM)`
    margin-bottom: 1rem;
    ${oV}
`,lV=K.default(exports.Typography.BodyBL)`
    margin-bottom: 2rem;
    ${oV}
`,cV=K.default.div`
    ${oV}
`,dV=K.default.ul`
    ${oV}
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
`,uV=Y.default.forwardRef(((t,r)=>{var{stretch:n}=t,i=X(t,["stretch"]);return e.jsx(dV,Object.assign({ref:r,$stretch:n},i))})),fV=K.default.li`
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
`,hV=K.default.div`
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
`,pV=K.default.button`
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
`,gV=K.default.span`
    color: ${Ks["text-disabled"]};
`,mV=K.default(jl)`
    margin-right: 0.5rem;
    color: ${Ks["text-disabled"]};
`,bV=K.default(C.ExclamationTriangleIcon)`
    color: ${Ks["icon-warning"]};
    margin-right: 0.5rem;
    height: ${qs.Spec["body-size-baseline"]};
    width: ${qs.Spec["body-size-baseline"]};
`,vV=K.default.span`
    color: ${Ks["text-warning"]};
`,yV=K.default.span`
    ${qs["body-baseline-semibold"]}
    color: ${Ks.hyperlink};
    text-decoration: underline;
    margin-left: 0.5rem;
`,xV=K.default(rc)`
    margin-top: 0.5rem;
`,wV=({label:r,value:n,displayWidth:i="full",maskState:o,maskLoadingState:a,maskChar:s="•",maskRange:l,unmaskRange:c,maskRegex:d,disableMaskUnmask:u,alert:f,maskTransformer:h,onMask:p,onUnmask:g,onTryAgain:m})=>{const[b,v]=t.useState(o);t.useEffect((()=>{v(o)}),[o]);const y=()=>{switch("fail"===a&&m&&m(),b){case"masked":g&&g(),v("unmasked");break;case"unmasked":p&&p(),v("masked")}},x=()=>"string"!=typeof n?n:"masked"===b?Jc.maskValue(n,{maskChar:s,maskRange:l,unmaskRange:c,maskRegex:d,maskTransformer:h}):n,C=()=>{switch(a){case"fail":return e.jsxs(e.Fragment,{children:[e.jsx(bV,{}),e.jsx(vV,{children:"Error"}),e.jsx(yV,{children:"Try again?"})]});case"loading":return e.jsxs(e.Fragment,{children:[e.jsx(mV,{}),e.jsx(gV,{children:"Retrieving..."})]});default:return e.jsxs(e.Fragment,{children:[x(),e.jsx(hV,{children:"masked"===b?e.jsx(w.EyeIcon,{"data-testid":"masked-icon"}):e.jsx($.EyeSlashIcon,{"data-testid":"unmasked-icon"})})]})}};return e.jsxs(fV,{$widthStyle:i,children:[e.jsx(tx,{children:r}),"string"!=typeof n?n:b?u?e.jsx(exports.Typography.BodyBL,{children:x()}):e.jsx(pV,{"data-testid":"clickable-label",onClick:y,"aria-busy":"loading"===a,"aria-live":"polite",type:"button",children:C()}):e.jsx(exports.Typography.BodyBL,{children:n}),f&&e.jsx(xV,Object.assign({sizeType:"small"},f))]})},$V=Object.assign((t=>{var{items:r,title:n,description:i,topSection:o,bottomSection:a,children:s,background:l=!0,stretch:c,onMask:d,onUnmask:u,onTryAgain:f}=t,h=X(t,["items","title","description","topSection","bottomSection","children","background","stretch","onMask","onUnmask","onTryAgain"]);const p=e=>()=>{d&&d(e)},g=e=>()=>{u&&u(e)},m=e=>()=>{f&&f(e)},b=()=>{if(r&&r.length>0){const t=r.map(((t,r)=>e.jsx(wV,Object.assign({},t,{onMask:p(t),onUnmask:g(t),onTryAgain:m(t)}),r)));return e.jsx(dV,{$stretch:c,children:t})}return null};return e.jsx(aV,Object.assign({$background:l},h,{type:"grid",children:s||e.jsxs(e.Fragment,{children:[n&&e.jsx(sV,{weight:"semibold",$stretch:c,children:n}),i&&e.jsx(lV,{$stretch:c,children:i}),o&&e.jsx(cV,{"data-id":"top-section",$stretch:c,children:o}),b(),a&&e.jsx(cV,{"data-id":"bottom-section",$stretch:c,children:a})]})}))}),{ItemSection:uV,Item:wV}),CV={collections:{base:{InputBoxShadow:i.css`
        inset 0 0 4px 0px ${CP.Shadow.Accent}
    `,InputErrorBoxShadow:i.css`
        inset 0 0 4px 0px ${CP.Shadow.Red}
    `,ElevationBoxShadow:i.css`
      0px 2px 8px ${CP.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:i.css`
        inset 0 0 3px 0px ${CP.Shadow.Accent}
    `,InputErrorBoxShadow:i.css`
        inset 0 0 3px 0px ${CP.Shadow.Red}
    `,ElevationBoxShadow:i.css`
      0px 2px 8px ${CP.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},SV=e=>t=>{var r,n;const i=(null===(r=t.theme)||void 0===r?void 0:r._v2)||t.theme,o=yP(CV,null==i?void 0:i[exports.V2_ThemeContextKeys.designTokenScheme]);return(null===(n=i.options)||void 0===n?void 0:n.designToken)?vP(o,e,i.options.designToken):vP(o,e)},jV={InputBoxShadow:SV("InputBoxShadow"),InputErrorBoxShadow:SV("InputErrorBoxShadow"),ElevationBoxShadow:SV("ElevationBoxShadow"),Table:{Header:SV("Table.Header"),Cell:{Primary:SV("Table.Cell.Primary"),Secondary:SV("Table.Cell.Secondary"),Selected:SV("Table.Cell.Selected"),Hover:SV("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:SV("Button.Danger.BackgroundColor"),Hover:SV("Button.Danger.Hover"),Primary:SV("Button.Danger.Primary"),Border:SV("Button.Danger.Border")}}},kV=Y.default.forwardRef(((t,r)=>{const{children:n,"data-testid":i="container",type:o="flex",stretch:a=!1}=t,s=X(t,["children","data-testid","type","stretch"]);return e.jsx(DV,Object.assign({ref:r,"data-testid":i,$type:o,$stretch:a},s,{children:n}))})),DV=K.default.div`
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

                ${Qh.MaxWidth.desktopM} {
                    max-width: 1140px;
                }
            `}
    ${Qh.MaxWidth.tablet} {
        max-width: 720px;
    }
    ${Qh.MaxWidth.mobileL} {
        width: 100%;
        padding: 0;
        max-width: unset;
    }

    ${e=>{switch(e.$type){case"grid":return i.css`
                    column-gap: 2rem;
                    display: grid;
                    grid-template-columns: repeat(12, minmax(0, 1fr));

                    ${Qh.MaxWidth.tablet} {
                        column-gap: 1.5rem;
                        grid-template-columns: repeat(8, minmax(0, 1fr));
                    }

                    ${Qh.MaxWidth.mobileL} {
                        column-gap: 1rem;
                        grid-template-columns: repeat(4, minmax(0, 1fr));
                    }
                `;case"flex-column":return i.css`
                    display: flex;
                    flex-direction: column;
                `;default:return i.css`
                    display: flex;
                `}}}
`,TV=Y.default.forwardRef(((t,r)=>{const{children:n,"data-testid":i="section",stretch:o=!1}=t,a=X(t,["children","data-testid","stretch"]);return e.jsx(EV,Object.assign({ref:r,"data-testid":i,$stretch:o},a,{children:n}))})),EV=K.default.section`
    display: block;
    position: relative;
    ${e=>e.$stretch?i.css`
                ${Qh.MaxWidth.tablet} {
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
`,OV=Y.default.forwardRef(((t,r)=>{const{children:n,"data-testid":i="content",className:o,type:a="flex",stretch:s=!1}=t,l=X(t,["children","data-testid","className","type","stretch"]);return e.jsx(TV,Object.assign({ref:r,"data-testid":i,className:o,stretch:s},l,{children:e.jsx(kV,{"data-testid":`${i}-container`,type:a,"data-id":"container",stretch:s,children:n})}))})),FV={Section:TV,Container:kV,Content:OV,ColDiv:tp};var IV;exports.RedirectScope=void 0,(IV=exports.RedirectScope||(exports.RedirectScope={}))[IV.Subpage=0]="Subpage",IV[IV.Domain=1]="Domain";const _V=e=>`\n\tmargin-bottom: ${e||0}rem;\n`,MV=K.default.ol`
    ${e=>_V(e.bottomMargin)}
    margin-left: ${3}rem;

    ${Qh.MaxWidth.tablet} {
        margin-left: 2.5rem;
    }

    // Counter matters
    counter-reset: list;

    li {
        ${e=>AP.getTextStyle(e.size,"regular")}
        position: relative;
        color: ${CP.Neutral[1]};
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
`,AV=K.default.ul`
    ${e=>_V(e.bottomMargin)}
    margin-left: 2.5rem;
    list-style-type: ${e=>e.bulletType||"disc"};

    li {
        ${e=>AP.getTextStyle(e.size,"regular")}
        color: ${CP.Neutral[1]};
    }

    counter-reset: list;

    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`,BV={Ul:t=>{var{size:r="Body",children:n}=t,i=X(t,["size","children"]);return e.jsx(AV,Object.assign({size:r},i,{children:n}))},Ol:t=>{var{size:r="Body",children:n}=t,i=X(t,["size","children"]);return e.jsx(MV,Object.assign({size:r},i,{children:n}))}},RV={[exports.V2_ThemeContextKeys.colorScheme]:"base",[exports.V2_ThemeContextKeys.textStyleScheme]:"base",[exports.V2_ThemeContextKeys.designTokenScheme]:"base",[exports.V2_ThemeContextKeys.resourceScheme]:"base"},zV={[exports.V2_ThemeContextKeys.colorScheme]:"bookingsg",[exports.V2_ThemeContextKeys.textStyleScheme]:"base",[exports.V2_ThemeContextKeys.designTokenScheme]:"base",[exports.V2_ThemeContextKeys.resourceScheme]:"bookingsg"},PV={[exports.V2_ThemeContextKeys.colorScheme]:"rbs",[exports.V2_ThemeContextKeys.textStyleScheme]:"base",[exports.V2_ThemeContextKeys.designTokenScheme]:"rbs",[exports.V2_ThemeContextKeys.resourceScheme]:"rbs"},LV={[exports.V2_ThemeContextKeys.colorScheme]:"mylegacy",[exports.V2_ThemeContextKeys.textStyleScheme]:"base",[exports.V2_ThemeContextKeys.designTokenScheme]:"base",[exports.V2_ThemeContextKeys.resourceScheme]:"mylegacy"},NV={[exports.V2_ThemeContextKeys.colorScheme]:"ccube",[exports.V2_ThemeContextKeys.textStyleScheme]:"base",[exports.V2_ThemeContextKeys.designTokenScheme]:"base",[exports.V2_ThemeContextKeys.resourceScheme]:"ccube"},HV={[exports.V2_ThemeContextKeys.colorScheme]:"oneservice",[exports.V2_ThemeContextKeys.textStyleScheme]:"oneservice",[exports.V2_ThemeContextKeys.designTokenScheme]:"base",[exports.V2_ThemeContextKeys.resourceScheme]:"base"};exports.Accordion=Kl,exports.Alert=rc,exports.BookingSGTheme={colourScheme:"bookingsg",fontScheme:"bookingsg",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"bookingsg",_v2:{colorScheme:"bookingsg",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"bookingsg"}},exports.Border=Gs,exports.BoxContainer=r=>{var{children:n,title:o,collapsible:a=!0,expanded:s=!1,callToActionComponent:l,displayState:c="default",subComponentTestIds:d,clickableHeader:u}=r,f=X(r,["children","title","collapsible","expanded","callToActionComponent","displayState","subComponentTestIds","clickableHeader"]);const[h,p]=t.useState(!a||s),g=qe(),m=g.ref,b=i.useTheme(),v=Js["sm-max"]({theme:b}),y=bc.useMediaQuery({maxWidth:v}),x=u&&a,w=e=>{e.stopPropagation(),p(!h)},$=ci({height:h?g.height:0}),C=()=>a&&e.jsx(Tc,{onClick:w,type:"button","aria-label":h?"Collapse":"Expand","data-testid":(null==d?void 0:d.handle)||"handle",children:e.jsx(Ec,{$expanded:h,children:e.jsx(Oc,{"aria-hidden":!0})})});return e.jsxs(vc,Object.assign({},f,{children:[e.jsxs($c,{"data-testid":"header",onClick:x?w:void 0,$interactive:x,children:[e.jsxs(Sc,{children:[e.jsx(Cc,{"data-testid":(null==d?void 0:d.title)||"title",children:o}),(()=>{switch(c){case"error":case"warning":return e.jsx(jc,{$displayState:c,"data-testid":(null==d?void 0:d.displayStateIcon)||`${c}-icon`,children:e.jsx(kc,{})});default:return null}})(),y&&C()]}),l&&e.jsx(Dc,{$collapsible:a,"data-testid":"call-to-action-container",children:l}),!y&&C()]}),a?e.jsx(yc,{style:$,"data-testid":"expandable-container",children:e.jsx(wc,{ref:m,children:n})}):e.jsx(xc,{"data-testid":"non-expandable-container",children:e.jsx(wc,{children:n})})]}))},exports.Breadcrumb=r=>{var{links:n,fadeColor:o,fadePosition:a="both",itemStyle:s,id:l}=r,c=X(r,["links","fadeColor","fadePosition","itemStyle","id"]);const[d,u]=t.useState(!1),[f,h]=t.useState(!1),[p,g]=t.useState(!1),m="left"===a||"both"===a,b="right"===a||"both"===a,v=t.useRef(null),y=t.useRef(null),x=i.useTheme(),w=Js["lg-max"]({theme:x}),$=ed((()=>{const e=y.current,t=v.current;e&&t&&n&&n.length>1&&window.innerWidth<=w&&(e.scrollLeft=e.scrollWidth-t.offsetWidth)})),C=ed((()=>{const e=window.innerWidth<=w;u(e);const t=y.current,r=v.current;if(t&&r&&e&&t.scrollWidth>r.offsetWidth)return h(t.scrollLeft>=1),void g(t.scrollWidth-t.scrollLeft-1>r.offsetWidth);h(!1),g(!1)}));if(td("resize",C),td("scroll",C,y.current),rd((()=>{$(),C()}),[$,C]),qe({onResize:$,targetRef:v,refreshMode:"debounce",refreshRate:50,skipOnMount:!0}),!n)return null;return e.jsxs(sd,Object.assign({ref:v,id:l||"breadcrumb"},c,{children:[e.jsx("nav",{children:e.jsx(ld,{ref:y,children:n.map(((t,r)=>{let i;return t.children?(i=r!==n.length-1&&t.href?e.jsx(hd,Object.assign({},t,{weight:"semibold"})):e.jsx(fd,{weight:"semibold",children:t.children}),e.jsxs(dd,{$styleProps:s,children:[i,r<n.length-1&&e.jsx(ud,{})]},r)):null}))})}),d&&(()=>{let t;return t=Array.isArray(o)&&o.length>0?{left:o,right:o}:o||{left:void 0,right:void 0},e.jsxs(e.Fragment,{children:[f&&m&&e.jsx(cd,{$backgroundColor:t.left,$position:"left"}),p&&b&&e.jsx(cd,{$backgroundColor:t.right,$position:"right"})]})})()]}))},exports.Breakpoint=Js,exports.Button=Hl,exports.ButtonWithIcon=bd,exports.CCubeTheme={colourScheme:"ccube",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"ccube",_v2:{colorScheme:"ccube",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"ccube"}},exports.Calendar=r=>{var{className:n,styleType:i="bordered",value:o,onSelect:a}=r,s=X(r,["className","styleType","value","onSelect"]);const[l,c]=t.useState(o);return t.useEffect((()=>{c(o)}),[o]),e.jsx(hu,{className:n,$hasBorder:"bordered"===i,children:e.jsx(uu,Object.assign({value:l,initialCalendarDate:l,onSelect:e=>{c(e),null==a||a(e)}},s))})},exports.Card=gu,exports.Checkbox=Su,exports.Colour=Ks,exports.Component=cB,exports.CountdownTimer=r=>{var{className:n,align:o="right",timer:a,timestamp:s,notifyTimer:l,offset:c,mobileOffset:d,show:u,fixed:f=!0,"data-testid":h,onFinish:p,onNotify:g,onTick:m}=r,b=X(r,["className","align","timer","timestamp","notifyTimer","offset","mobileOffset","show","fixed","data-testid","onFinish","onNotify","onTick"]);const v=t.useRef(null),y=t.useRef(!1),[x,w]=t.useState(0),[$,C]=t.useState(0),[S,j]=t.useState(0),[k,D]=t.useState(!1),[T]=((e,r,n)=>{const[i,o]=t.useState((()=>{const t=pf(e,r)-Date.now();return gf(t)}));t.useEffect((()=>{if(!n)return;const t=pf(e,r),i=a(t);return()=>clearTimeout(i)}),[r,n,e]);const a=e=>{const t=()=>{const r=e-Date.now(),n=r%1e3,i=gf(r);if(o(i),0!==i)return setTimeout(t,n>500?n:n+1e3)};return t()};return[i]})(a,s,k),{ref:E,inView:O}=tf({threshold:1,rootMargin:-1*x+"px 0px 0px 0px",initialInView:!0}),F=!f||O,I="number"==typeof l&&T<=l,_=i.useTheme(),M=Js["sm-max"]({theme:_}),A=bc.useMediaQuery({maxWidth:M});t.useEffect((()=>{D(u)}),[u]),t.useEffect((()=>{0===T?P():"number"==typeof l&&T<=l&&(R(),z())}),[T]),t.useEffect((()=>{const e=function(){var e,t;const r=null!==(e=null==c?void 0:c.top)&&void 0!==e?e:168,n=null!==(t=null==d?void 0:d.top)&&void 0!==t?t:80,i=A?n:r;return i}();w(e)}),[A,null==c?void 0:c.top,null==d?void 0:d.top]),t.useEffect((()=>{if(v.current){const e=Xu(B,300);return B(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}}),[v.current]),t.useEffect((()=>{y.current=!1}),[a,u]);const B=()=>{if(!v.current)return;const e=v.current.getBoundingClientRect();j(e.x),C(e.right)},R=()=>{m&&m(T)},z=()=>{g&&!y.current&&(y.current=!0,g())},P=()=>{D(!1),p&&p()};const L=()=>{const{minutes:t,seconds:r}=Ku.toMinutesSeconds(T),n=1!==t?"mins":"min",i=1!==r?"secs":"sec";return e.jsxs(e.Fragment,{children:[e.jsx(hf,{$warn:I}),e.jsx(uf,{children:"Time left:"}),e.jsxs(ff,{children:[t," ",n," ",String(r).padStart(2,"0")," ",i]})]})};return k||0===T?e.jsxs(sf,Object.assign({className:n},b,{children:[e.jsx("div",{ref:E}),e.jsx(cf,{"data-testid":h,"data-id":"countdown-wrapper",ref:v,inert:F?void 0:"",$visible:F,$warn:I,children:L()}),v.current&&!F&&(()=>{var t,r;const n=null!==(t=null==c?void 0:c.left)&&void 0!==t?t:"left"===o?S:void 0,i=null!==(r=null==c?void 0:c.right)&&void 0!==r?r:"right"===o?Math.floor(document.body.clientWidth-$):void 0;return e.jsx(df,{"data-testid":h,"data-id":"fixed-countdown-wrapper",$warn:I,$top:x,$left:n,$right:i,children:L()})})()]})):e.jsx(e.Fragment,{})},exports.DataTable=r=>{var{id:n,headers:i,rows:o,className:a,sortIndicators:s,alternatingRows:l,loadState:c="success",enableMultiSelect:d,selectedIds:f,disabledIds:h,enableActionBar:p,enableSelectAll:g,enableStickyHeader:m,emptyView:b,actionBarContent:v,renderCustomEmptyView:y,onHeaderClick:x,onSelect:w,onSelectAll:$,onClearSelectionClick:C}=r,S=X(r,["id","headers","rows","className","sortIndicators","alternatingRows","loadState","enableMultiSelect","selectedIds","disabledIds","enableActionBar","enableSelectAll","enableStickyHeader","emptyView","actionBarContent","renderCustomEmptyView","onHeaderClick","onSelect","onSelectAll","onClearSelectionClick"]);const j=t.useRef(null),k=t.useRef(null),D=t.useRef(null),T=t.useRef(null),E=t.useRef(null),[O,F]=t.useState(!1),[I,_]=t.useState(!1),[M,A]=t.useState(!1),[B,R]=t.useState(!1),[z,P]=t.useState(!1),{ref:L,inView:N}=tf(),H=t.useCallback((()=>{if(!E.current||!T.current)return;const e=E.current.scrollHeight>E.current.clientHeight;F(e),e?T.current.style.transform="translateY(0)":Z()}),[]);t.useEffect((()=>{H()}),[]),qe({onResize:H});td("scroll",(()=>{requestAnimationFrame((()=>{O?G():Z()})),E.current&&A(E.current.getBoundingClientRect().bottom<=window.innerHeight)}),"window"),t.useEffect((()=>{Q()}),[o]);const W=()=>(null==f?void 0:f.length)===(null==o?void 0:o.length),V=e=>!!(null==f?void 0:f.includes(e)),Y=e=>!!l&&e%2==1,U=e=>!!(null==h?void 0:h.includes(e)),K=e=>{if(S["data-testid"])return`${S["data-testid"]}-${e}`},q=()=>i.length+(d?1:0),G=()=>{if(!E.current)return;const e=E.current.getBoundingClientRect();R(e.bottom>window.innerHeight+30&&e.top<window.innerHeight-200)},Z=()=>{if(!(j.current&&k.current&&E.current&&T.current&&D.current))return;const e=k.current.getBoundingClientRect();if(e.top>window.innerHeight){const t=e.bottom-window.innerHeight,r=j.current.getBoundingClientRect().height-D.current.clientHeight-32,n=Math.min(t,r);T.current.style.transform=`translateY(-${n}px)`}else T.current.style.transform="translateY(0)"},Q=()=>{j.current&&E.current&&P(j.current.clientHeight+(p?56:0)<E.current.clientHeight)},J=t=>{const{fieldKey:r,label:n,clickable:i=!1,style:o}="string"==typeof t?{fieldKey:t,label:t,style:void 0}:t;return e.jsx(qf,{"data-testid":K(`header-${r}`),$clickable:i,onClick:()=>i&&(null==x?void 0:x(r)),style:o,$isCheckbox:!1,children:e.jsxs(Xf,{children:["string"==typeof n?e.jsx(exports.Typography.BodyBL,{weight:"bold",children:n}):n,ee(r)]})},r)},ee=t=>{const r=null==s?void 0:s[t];return r?"asc"===r?e.jsx(u.ArrowUpIcon,{"data-testid":K(`header-${t}-arrowup`)}):e.jsx(u.ArrowDownIcon,{"data-testid":K(`header-${t}-arrowdown`)}):e.jsx(e.Fragment,{})},te=()=>e.jsx(qf,{"data-testid":K("header-selection"),$clickable:!1,$isCheckbox:!0,children:e.jsx(Jf,{children:g&&e.jsx(Su,{checked:W(),indeterminate:!!f&&0!==f.length&&!W(),onClick:()=>{$&&$(W())}})})}),re=(t,r)=>{const n="string"!=typeof t?t.style:void 0,i="string"==typeof t?t:t.fieldKey,o=r.id.toString(),a=r[i],s=`${o}-${i}`;return e.jsx(Zf,{"data-testid":K(`row-${s}`),style:n,$isCheckbox:!1,children:"string"==typeof a||"number"==typeof a?e.jsx(Qf,{children:a}):"function"==typeof a?a(r,{isSelected:V(o)}):a},s)},ne=t=>e.jsx(Zf,{"data-testid":K(`row-${t}-selection`),$isCheckbox:!0,children:e.jsx(Jf,{children:e.jsx(Su,{checked:V(t),onClick:()=>{w&&w(t,!V(t))},disabled:U(t)})})}),ie=()=>e.jsx(Ef,Object.assign({type:"no-item-found"},b,{title:(null==b?void 0:b.title)?"string"==typeof b.title?e.jsx(th,{weight:"bold",children:b.title}):b.title:e.jsx(th,{weight:"bold",children:"No <items> found"}),description:(null==b?void 0:b.description)?b.description:"No matching rows"}));return e.jsxs(Lf,{id:n||"table-wrapper","data-testid":S["data-testid"]||"table",className:a,ref:E,onScroll:()=>{O&&E.current&&_(E.current.scrollTop+E.current.clientHeight>=E.current.scrollHeight)},children:[e.jsx(Nf,{children:e.jsxs(Hf,{$end:M,$scrollable:O,ref:j,$stickyHeader:m,children:[e.jsx("thead",{ref:D,children:e.jsxs(Kf,{children:[d&&te(),i.map(J)]})}),e.jsx(Wf,{$showLastRowBottomBorder:z,children:"success"===c?!o||o.length<1?e.jsx("tr",{children:e.jsx(rh,{colSpan:q(),children:y?y():ie()})}):e.jsx(e.Fragment,{children:null==o?void 0:o.map(((t,r)=>e.jsxs(Gf,{"data-testid":K(`row-${t.id.toString()}`),$alternating:Y(r),$isSelectable:d,$isSelected:V(t.id.toString()),children:[d&&ne(t.id.toString()),i.map((e=>re(e,t)))]},t.id.toString())))}):e.jsx("tr",{children:e.jsx("td",{colSpan:q(),children:e.jsx(eh,{children:"loading"===c&&e.jsx(fc,{})})})})})]})}),p&&f&&f.length>0&&(()=>{var t,r,n,i;const o=null!==(t=null==f?void 0:f.length)&&void 0!==t?t:0;return e.jsx(Vf,{ref:T,$fixed:B,$left:null===(n=null===(r=null==j?void 0:j.current)||void 0===r?void 0:r.getBoundingClientRect())||void 0===n?void 0:n.left,$width:null===(i=null==j?void 0:j.current)||void 0===i?void 0:i.clientWidth,children:e.jsxs(Uf,{$float:(O?!I:!N)||B,$scrollable:O,children:[e.jsx(exports.Typography.BodyMD,{weight:"semibold",children:`${o} item${o>1?"s":""} selected`}),e.jsx(Yf,{type:"button",onClick:C,children:"Clear selection"}),v]})})})(),e.jsx("div",{ref:e=>{k.current=e,L(e)}})]})},exports.DateInput=Oh,exports.DateNavigator=Bh,exports.DateRangeInput=Kh,exports.Divider=op,exports.Drawer=r=>{var{children:n,heading:i,show:o,onClose:a,onOverlayClick:s}=r,l=X(r,["children","heading","show","onClose","onOverlayClick"]);const[c,d]=t.useState(o),[u]=t.useState((()=>Qc.generate())),f=t.useRef(null);t.useEffect((()=>{if(!o){const e=setTimeout((()=>d(!1)),500);return()=>clearTimeout(e)}d(!0)}),[o]);return e.jsx(cp,{show:c,enableOverlayClick:!0,onOverlayClick:s,children:e.jsxs(fp,Object.assign({$show:o,"data-testid":"drawer",onClick:e=>{e.stopPropagation()},role:"dialog","aria-labelledby":u,onTransitionEnd:e=>{var t;"visibility"===e.propertyName&&o&&(null===(t=f.current)||void 0===t||t.focus())}},l,{children:[e.jsxs(hp,{children:[e.jsx(gp,{id:u,ref:f,tabIndex:-1,weight:"bold",children:i}),e.jsx(pp,{"aria-label":"Close drawer",onClick:a,focusHighlight:!1,children:e.jsx(m.CrossIcon,{"aria-hidden":!0})})]}),e.jsx(mp,{children:n})]}))})},exports.ESignature=Yp,exports.ErrorDisplay=Ef,exports.FeedbackRating=t=>{const{imgSrc:r,buttonLabel:n,description:i,rating:o,onRatingChange:a,onSubmit:s}=t,l=X(t,["imgSrc","buttonLabel","description","rating","onRatingChange","onSubmit"]),c=null!=r?r:Up,d=null!=i?i:qp;return e.jsxs(ig,Object.assign({},l,{children:[c&&e.jsx(ng,{"data-testid":"feedback-banner-image",src:c,alt:"",onError:e=>e.currentTarget.style.display="none"}),e.jsxs(og,{children:[e.jsx(exports.Typography.HeadingSM,{as:"div",weight:"semibold",children:d}),e.jsx(rg,{description:d,rating:o,onRatingChange:a}),e.jsx(ag,{disabled:!o,onClick:s,type:"button",children:null!=n?n:Kp})]})]}))},exports.FileDownload=({id:t,fileItems:r,title:n,description:i,onDownload:o,"data-testid":a,className:s,styleType:l="bordered"})=>{const c=e=>G(void 0,void 0,void 0,(function*(){o&&(yield o(e))}));return e.jsxs(sg,{id:t?`${t}-file-download`:"file-download",className:s,"data-testid":a,$border:"bordered"===l,children:[(n||i)&&e.jsxs(lg,{children:[n?"string"==typeof n?e.jsx(cg,{children:n}):e.jsx(dg,{children:n}):null,i?"string"==typeof i?e.jsx(ug,{children:i}):e.jsx(fg,{children:i}):null]}),e.jsx(hg,{children:r&&r.length>0&&r.map((t=>e.jsx(Fg,{fileItem:t,onDownload:c},t.id)))})]})},exports.FileUpload=({styleType:r="bordered",fileItems:n,title:i,description:o,maxFiles:a,warning:s,className:l,name:c,id:d,"data-testid":u,accept:f,capture:h,multiple:p,disabled:g,sortable:m=!1,fileDescriptionMaxLength:b,editableFileItems:v=!1,errorMessage:y,readOnly:x,onChange:w,onDelete:$,onEdit:C,onSort:S})=>{const j=t.useRef(null),[k,D]=t.useState(),T=()=>!(!a||!n)&&n.length>=a;return e.jsx(_g.Provider,{value:{activeId:k,setActiveId:D},children:e.jsxs(cb,{ref:j,onChange:e=>{!g&&w&&w(e)},id:d?`${d}-dropzone`:"dropzone",accept:f,capture:h,border:"bordered"===r,className:l,"data-testid":u,name:c,multiple:p,disabled:g||T()||x,children:[!(!i&&!o)&&e.jsxs(g_,{children:[i?"string"==typeof i?e.jsx(m_,{children:i}):e.jsx(b_,{children:i}):null,o?"string"==typeof o?e.jsx(v_,{children:o}):e.jsx(y_,{children:o}):null]}),!!s&&e.jsx(x_,{type:"warning",children:s}),e.jsx(p_,{fileItems:n,editableFileItems:v,fileDescriptionMaxLength:b,sortable:m,disabled:g,readOnly:x,onItemDelete:e=>{$&&$(e)},onItemUpdate:e=>{C&&C(e)},onSort:e=>{S&&S(e)}}),y&&e.jsx(S_,{type:"error",children:y}),!x&&e.jsxs(w_,{children:[e.jsx($_,{type:"button",styleType:"secondary",disabled:!!k||g||T(),onClick:e=>{g||(e.preventDefault(),j.current&&j.current.openFileDialog())},children:"Upload files"}),e.jsx(C_,{children:"or drop them here"})]})]})})},exports.Filter=oM,exports.Font=qs,exports.Footer=t=>{var{children:r,links:n,lastUpdated:o,disclaimerLinks:a,showDownloadAddon:s,logoSrc:l,copyrightInfo:c,onFooterLinkClick:d,layout:u="default"}=t,f=X(t,["children","links","lastUpdated","disclaimerLinks","showDownloadAddon","logoSrc","copyrightInfo","onFooterLinkClick","layout"]);const h="stretch"===u,p=i.useTheme(),g=t=>t.map(((t,r)=>{const n=X(t,["data-options"]);return e.jsx("li",{children:e.jsx($M,Object.assign({},n,{onClick:e=>((e,t)=>{t.onClick?(e.preventDefault(),t.onClick(e)):d&&(e.preventDefault(),d(t))})(e,t)}))},r)}));return e.jsxs(wM,Object.assign({},f,{children:[(()=>{let t=null;return r||((n||s)&&(t=e.jsxs(e.Fragment,{children:[e.jsx(jM,{"data-testid":"logo-section",children:e.jsx("img",{src:l||pM.getFooterLogo(null==p?void 0:p.resourceScheme),alt:"LifeSG","data-testid":"logo"})}),(null==n?void 0:n[0])&&e.jsx(kM,{"data-testid":"link-col-1",children:g(n[0])},"link-col-1"),(null==n?void 0:n[1])&&e.jsx(kM,{"data-testid":"link-col-2",children:g(n[1])},"link-col-2"),s&&e.jsx(DM,{children:e.jsx(dM,{})})]})),t?e.jsxs(e.Fragment,{children:[e.jsx(SM,{type:"grid",stretch:h,children:t}),e.jsx(CM,{})]}):null)})(),e.jsxs(TM,{type:"grid",stretch:h,children:[e.jsx(EM,{children:(()=>{const t=pM.getDisclaimerLinks(null==p?void 0:p.resourceScheme,a);return Object.keys(t).map((r=>e.jsx(FM,Object.assign({},t[r]),r)))})()},"disclaimer"),e.jsx(OM,{children:e.jsx(exports.Typography.BodyXS,{"data-testid":"copyright-text",children:c||e.jsxs(e.Fragment,{children:["©"," ",pM.getCopyrightInfo(o,null==p?void 0:p.resourceScheme)]})})},"copyright")]})]}))},exports.Form=BI,exports.FullscreenImageCarousel=dB,exports.HistogramSlider=Fx,exports.IconButton=Ih,exports.ImageButton=fB,exports.Input=Rx,exports.InputGroup=ZS,exports.InputMultiSelect=LO,exports.InputNestedMultiSelect=WO,exports.InputNestedSelect=VO,exports.InputRangeSelect=pF,exports.InputRangeSlider=jx,exports.InputSelect=gF,exports.InputSlider=$F,exports.Layout=xM,exports.LifeSGTheme=tl,exports.LinkList=r=>{var{items:n,maxShown:i,style:o="default",onItemClick:a}=r,s=X(r,["items","maxShown","style","onItemClick"]);const[l,c]=t.useState(!i||i>=n.length),d=i?n.slice(0,i):n,u=i?n.slice(i):[],f=qe(),h=f.ref,p=(e,t)=>{t.onClick?(e.preventDefault(),t.onClick(e)):a&&(e.preventDefault(),a(t,e))},g=()=>{c(!l)},m=(t,r,n,i)=>{const a="small"===o?mB:gB;return e.jsxs(e.Fragment,{children:[e.jsxs(yB,{children:[e.jsx(a,{"data-testid":`link-title-${t}`,weight:"semibold",children:r}),n&&e.jsx(xB,{"data-testid":`link-description-${t}`,children:n}),i]}),e.jsx(bB,{})]})},b=ci({height:l?f.height:0});return e.jsxs(pB,Object.assign({},s,{children:[d.map(((t,r)=>{const{title:n,description:i,secondaryDescription:o,onClick:a}=t,s=X(t,["title","description","secondaryDescription","onClick"]);return e.jsx(vB,Object.assign({"data-testid":`list-item-shown-${r}`,onClick:e=>p(e,t)},s,{children:m(r,n,i,o)}),`list-item-shown-${r}`)})),u.length>0&&e.jsx(wB,{style:b,"data-testid":"minimised-content",children:e.jsx($B,{ref:h,children:u.map(((t,r)=>{const{title:n,description:i,onClick:o,secondaryDescription:a}=t,s=X(t,["title","description","onClick","secondaryDescription"]);return e.jsx(vB,Object.assign({"data-testid":`list-item-minimised-${r}`,onClick:e=>p(e,t)},s,{children:m(r,n,i,a)}),`list-item-minimised-${r}`)}))})}),u.length>0&&e.jsxs(kB,{type:"button",onClick:g,"data-testid":"toggle-button",$showMinimised:l,children:[e.jsx(CB,{weight:"semibold","data-testid":"toggle-button-label",children:l?"View less":"View more"}),l?e.jsx(jB,{}):e.jsx(SB,{})]})]}))},exports.LoadingDots=lc,exports.LoadingDotsSpinner=fc,exports.LoadingSpinner=ic,exports.Markup=TB,exports.MaskedInput=uj,exports.Masonry=FB,exports.Masthead=_B,exports.MediaQuery=el,exports.Modal=Sp,exports.Motion=Xs,exports.MyLegacyTheme={colourScheme:"mylegacy",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"mylegacy",_v2:{colorScheme:"mylegacy",textStyleScheme:"base",designTokenScheme:"base",resourceScheme:"mylegacy"}},exports.NBComponent=NR,exports.Navbar=ER,exports.NavbarHeight=OR,exports.NavbarMobileHeight=3.5,exports.NotificationBanner=VR,exports.OneServiceTheme={colourScheme:"oneservice",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"oneservice"},exports.OtpInput=r=>{var{id:n,value:i=[],"data-testid":o,className:a,cooldownDuration:s,actionButtonProps:l,errorMessage:c,numOfInput:d,onChange:u,onCooldownStart:f,onCooldownEnd:h}=r,p=X(r,["id","value","data-testid","className","cooldownDuration","actionButtonProps","errorMessage","numOfInput","onChange","onCooldownStart","onCooldownEnd"]);const g=null!=l?l:{},{disabled:m,onClick:b,styleType:v="secondary"}=g,y=X(g,["disabled","onClick","styleType"]),x=t.useRef([]),w=t.useRef(u),[$,C]=t.useState(new Array(d).fill("")),[S,j]=t.useState(s),[k,D]=t.useState(new Date);t.useEffect((()=>{var e;return null===(e=null==x?void 0:x.current[0])||void 0===e||e.focus(),document.addEventListener("paste",O),()=>document.removeEventListener("paste",O)}),[]),t.useEffect((()=>{if(0!==s){f&&f();const e=_();return()=>e()}}),[k]),t.useEffect((()=>{w.current=u}),[u]),t.useEffect((()=>{i.length===d&&C(i)}),[i]);const T=e=>t=>{var r;const n=t.target.value.replace(/[^0-9]/g,"");if(F(n)){const t=[...$];t[e]=n.substring(n.length-1),null===(r=x.current[e+1])||void 0===r||r.focus(),C(t),u&&u(t)}},E=e=>t=>{var r;const{key:n,code:i}=t;if("Backspace"===n||"Backspace"===i){const t=[...$];""!==t[e]?t[e]="":0!==e&&(t[e-1]="",null===(r=x.current[e-1])||void 0===r||r.focus()),C(t),u&&u(t)}},O=e=>{if(!e.clipboardData)return;const t=e.clipboardData.getData("text"),r=t.split("");t&&F(t,d)?(C(r),w.current&&w.current(r)):e.preventDefault()},F=(e,t=1)=>!!e&&RegExp(`^[0-9]{${t}}$`).test(e),I=()=>{const e=Date.now(),t=1e3*s;return e<k.valueOf()+t},_=()=>{const e=setInterval((()=>{const t=Date.now(),r=1e3*s,n=Math.ceil((k.valueOf()+r-t)/1e3);j(n),n<=0&&(h&&h(),clearInterval(e))}),1e3);return()=>{clearInterval(e)}},M=(e,t,r)=>r?`${r}-${t}-${e+1}`:`${t}-${e+1}`;return e.jsxs(Gz,{id:n,"data-testid":o,className:a,children:[e.jsx(Zz,{children:$.map(((t,r)=>e.jsx(Qz,Object.assign({id:M(r,"otp-input",n),"data-testid":M(r,"otp-input",o),"aria-label":`Enter OTP character ${r+1}`,ref:e=>x.current[r]=e,type:"text",inputMode:"numeric",value:t,error:!!c,onChange:T(r),onKeyDown:E(r),autoComplete:"off"},p),r)))}),c&&e.jsx(rx,{children:c}),e.jsx(Jz,Object.assign({styleType:v,type:"button"},y,{onClick:e=>{C(new Array(d).fill("")),I()||(D(new Date),j(s)),b&&b(e)},disabled:m||I(),children:y.children?y.children:"Resend OTP"+(S?` in ${S} second${S>1?"s":""}`:"")}))]})},exports.Overlay=cp,exports.PATheme={colourScheme:"pa",fontScheme:"pa",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"pa",componentScheme:"pa"},exports.Pagination=hP,exports.PhoneNumberInput=sF,exports.Pill=bP,exports.Popover=UP,exports.PopoverInline=Xy,exports.PopoverTrigger=Yy,exports.PopoverV2=Wy,exports.PredictiveTextInput=dF,exports.ProgressIndicator=t=>{var{steps:r,currentIndex:n,displayExtractor:o,fadeColor:a,fadePosition:s}=t,l=X(t,["steps","currentIndex","displayExtractor","fadeColor","fadePosition"]);const c=i.useTheme(),d=Js["lg-max"]({theme:c}),u=bc.useMediaQuery({maxWidth:d}),f=e=>{var t;return o?o(e):null!==(t=null==e?void 0:e.toString())&&void 0!==t?t:""},h=(e,t)=>PL(`${((e,t)=>e<t?"Completed step":e===t?"Current step":"Uncompleted step")(e,t)} ${e}`);if(!r.length)return null;return e.jsxs(KP,Object.assign({},l,{children:[e.jsx(qP,{children:r.map(((t,r)=>{const i=r<=n;return e.jsx(QP,{id:h(r,n),children:e.jsx(XP,{highlighted:i})},r)}))}),e.jsx(qP,{children:u?e.jsxs(QP,{id:h(n,n),children:[e.jsxs(ZP,{weight:"semibold",id:`${h(n,n)}-counter`,children:["Step ",n+1," of ",r.length]}),e.jsx(ZP,{weight:"regular",id:`${h(n,n)}-title`,children:f(r[n])})]},n):r.map(((t,r)=>{const i=r<=n,o=r===n,a=o?"bold":"regular";return e.jsx(QP,{id:`${h(r,n)}-title`,children:e.jsx(GP,{highlighted:i,weight:a,"aria-current":o,children:f(t)})},r)}))})]}))},exports.RBSTheme={colourScheme:"rbs",fontScheme:"default",motionScheme:"default",borderScheme:"default",spacingScheme:"default",radiusScheme:"default",breakpointScheme:"default",resourceScheme:"rbs",_v2:{colorScheme:"rbs",textStyleScheme:"base",designTokenScheme:"rbs",resourceScheme:"rbs"}},exports.RadioButton=t=>{var{className:r,checked:n,disabled:i,displaySize:o="default",onChange:a}=t,s=X(t,["className","checked","disabled","displaySize","onChange"]);return e.jsxs(LL,{$selected:n,$disabled:i,className:r,$displaySize:o,"data-testid":"radio-button",children:[e.jsx(WL,Object.assign({type:"radio","data-testid":"radio-input",onChange:e=>{i||null==a||a(e)},checked:n,disabled:i},s)),n?e.jsx(HL,{"data-testid":"radio-checked",$disabled:i}):e.jsx(NL,{"data-testid":"radio-unchecked",$disabled:i})]})},exports.Radius=Qs,exports.SelectHistogram=wF,exports.Sidenav=dN,exports.SignatureCanvas=Wp,exports.SignatureCanvasContainer=Hp,exports.SmartAppBanner=ON,exports.Spacing=Zs,exports.Tab=YN,exports.Tag=t=>{var{type:r,colorType:n="black",children:i,interactive:o=!1,icon:a,iconPosition:s="left"}=t,l=X(t,["type","colorType","children","interactive","icon","iconPosition"]);return e.jsxs(UN,Object.assign({as:o?"button":"div",$type:r,$color:n,$interactive:o},l,{children:["left"===s&&a,e.jsx(KN,{children:i}),"right"===s&&a]}))},exports.TextList=HF,exports.Textarea=TF,exports.ThemedLoadingSpinner=t=>{const r=i.useTheme();return"lifesg"===(null==r?void 0:r.resourceScheme)?e.jsx(ic,Object.assign({},t)):e.jsx(fc,Object.assign({},t))},exports.TimeRangePicker=jI,exports.TimeSlotBar=({"data-testid":r,className:n,variant:i="default",startTime:o,endTime:a,slots:s,onSlotClick:l,onClick:c,styleAttributes:d})=>{const u=t.useRef(null),[f,h]=t.useState(0),[p,g]=t.useState(0),m=GN(i),b=2.5*m;t.useEffect((()=>{const e=u.current;return e&&e.addEventListener("scroll",v),()=>{e&&e.removeEventListener("scroll",v)}}),[]);const v=()=>{u.current&&h(u.current.scrollLeft)},y=e=>{u.current&&u.current.scrollBy({left:"left"===e?-b:b,behavior:"smooth"})};qe({onResize:()=>{u.current&&g(u.current.clientWidth)},targetRef:u,refreshMode:"debounce",refreshRate:50});const x=e=>e<=m/2,w=e=>{if(r)return`${r}-${e}`},$=(e,t,r)=>{const n=0===e.minute();if("default"===r)return n;return n&&(t?e.hour()%2==0:e.hour()%2==1)};return e.jsxs(QN,{className:n,children:[e.jsxs(rH,{"data-testid":r,ref:u,$variant:i,children:[e.jsx(nH,{"data-testid":w("time-marker-wrapper"),"data-id":"marker-wrapper",children:(()=>{const t=[],r=Ic(o,"HH:mm"),n=Ic(a,"HH:mm"),s=r.hour()%2==0;for(let o=r;o.isBefore(n);o=o.add(30,"minute")){const r=$(o,s,i);t.push(e.jsx(oH,{$isLongMarker:r,$variant:i,children:r&&e.jsx(aH,{weight:"semibold",children:qN.formatHourlyDisplay(o.format("HH:mm"))})},o.format("HH:mm")))}return t})()}),e.jsxs(iH,{"data-testid":w("time-slot-wrapper"),"data-id":"slot-wrapper",children:[(()=>{if(!d)return;const{backgroundColor:t,backgroundColor2:r,styleType:n="default"}=d,s=qN.calculateWidth(o,a,m),l=!!c&&"default"===i;return e.jsxs(e.Fragment,{children:[e.jsx(lH,{$variant:i}),e.jsx(sH,{"data-testid":w("default-timeslot"),$width:s,$variant:i,$left:0,$styleType:n,$bgColor:t,$bgColor2:r,$clickable:l,onClick:l?c:void 0},"default-timeslot")]})})(),s.map((t=>{const{id:r,startTime:n,endTime:s,label:c,clickable:d=!0,styleAttributes:u}=t,{color:f,styleType:h="default",backgroundColor:p,backgroundColor2:g}=u,b=qN.calculateWidth(n,s,m),v=qN.calculateWidth(o,n,m),y=d&&"default"===i;return e.jsxs("div",{children:[e.jsx(lH,{$variant:i,style:{left:`${v}px`}}),e.jsx(sH,{"data-testid":w(`${r}-timeslot`),$width:b,$left:v,$styleType:h,$variant:i,$bgColor:p,$bgColor2:g,$clickable:y,onClick:()=>y&&l(t),children:c&&"default"===i&&e.jsx(cH,{$slotWidth:b,$color:f,weight:"semibold",children:x(b)?"...":c})}),a!==s&&e.jsx(lH,{$variant:i,style:{left:`${v+b}px`}})]},r)}))]})]}),e.jsx(e.Fragment,{children:f>0&&e.jsx(JN,{"data-testid":w("arrow-left"),$direction:"left",$variant:i,focusHighlight:!1,focusOutline:"none",onClick:()=>{y("left")},children:e.jsx(tH,{})})}),f+p<qN.calculateWidth(o,a,m)?e.jsx(JN,{"data-testid":w("arrow-right"),$direction:"right",$variant:i,focusHighlight:!1,focusOutline:"none",onClick:()=>{y("right")},children:e.jsx(eH,{})}):e.jsx(e.Fragment,{})]})},exports.TimeSlotBarWeek=r=>{var{disabledDates:n,onWeekDisplayChange:i,onChange:o,value:a,minDate:s,maxDate:l,startTime:c,endTime:d,slots:u,interval:f,variant:h,maxVisibleCellHeight:p,showNavigationHeader:g=!0,enableSelection:m,onSlotClick:b,currentCalendarDate:v}=r,y=X(r,["disabledDates","onWeekDisplayChange","onChange","value","minDate","maxDate","startTime","endTime","slots","interval","variant","maxVisibleCellHeight","showNavigationHeader","enableSelection","onSlotClick","currentCalendarDate"]);const[x,w]=t.useState(a),$=t.useRef(null),C=t.useRef(void 0);t.useEffect((()=>{w(a)}),[a]);const S=e=>{const t=e.format(BH);w(t),o&&o(t)},j=(e,t)=>{b&&b(e,t)},k=e=>{if(i){const t={week:{firstDayOfWeek:e.startOf("week").format(BH),lastDayOfWeek:e.endOf("week").format(BH)},month:e.month()+1,year:e.year()};i(t)}};return e.jsx(AH,Object.assign({},y,{children:e.jsx(Nd,{ref:$,dynamicHeight:!0,initialCalendarDate:Gc.toDayjs(x||v).endOf("week").format(BH),selectedStartDate:x,getLeftArrowDate:e=>e.subtract(1,"week"),getRightArrowDate:e=>e.add(1,"week"),isLeftArrowDisabled:e=>!!s&&Ic(e).subtract(1,"week").isBefore(s,"week"),isRightArrowDisabled:e=>!!l&&Ic(e).add(1,"week").isAfter(l,"week"),onCalendarDateChange:e=>{C.current&&C.current.isSame(e,"week")||k(e),C.current=e},showNavigationHeader:g,minDate:s,maxDate:l,getMonthHeaderLabel:e=>Ic(e).endOf("week").format("MMM"),getYearHeaderLabel:e=>Ic(e).endOf("week").format("YYYY"),children:({calendarDate:t})=>(t=>e.jsx(MH,{calendarDate:t,disabledDates:n,selectedDate:x,minDate:s,maxDate:l,startTime:c,endTime:d,onSelect:S,slots:u,interval:f,variant:h,maxVisibleCellHeight:p,enableSelection:m,onSlotClick:j}))(t)})}))},exports.TimeSlotWeekView=r=>{var{disabledDates:n,onWeekDisplayChange:i,onChange:o,value:a,minDate:s,maxDate:l,slots:c,showNavigationHeader:d=!0,enableSelection:u,onSlotClick:f,currentCalendarDate:h}=r,p=X(r,["disabledDates","onWeekDisplayChange","onChange","value","minDate","maxDate","slots","showNavigationHeader","enableSelection","onSlotClick","currentCalendarDate"]);const[g,m]=t.useState(a),b=t.useRef(null),v=t.useRef(void 0);t.useEffect((()=>{m(a)}),[a]);const y=e=>{const t=e.format(KH);m(t),o&&o(t)},x=(e,t)=>{f&&f(e,t)},w=e=>{if(i){const t={week:{firstDayOfWeek:e.startOf("week").format(KH),lastDayOfWeek:e.endOf("week").format(KH)},month:e.month()+1,year:e.year()};i(t)}};return e.jsx(UH,Object.assign({},p,{children:e.jsx(Nd,{ref:b,dynamicHeight:!0,initialCalendarDate:Gc.toDayjs(g||h).endOf("week").format(KH),selectedStartDate:g,getLeftArrowDate:e=>e.subtract(1,"week"),getRightArrowDate:e=>e.add(1,"week"),isLeftArrowDisabled:e=>!!s&&Ic(e).subtract(1,"week").isBefore(s,"week"),isRightArrowDisabled:e=>!!l&&Ic(e).add(1,"week").isAfter(l,"week"),onCalendarDateChange:e=>{v.current&&v.current.isSame(e,"week")||w(e),v.current=e},showNavigationHeader:d,minDate:s,maxDate:l,getMonthHeaderLabel:e=>Ic(e).endOf("week").format("MMM"),getYearHeaderLabel:e=>Ic(e).endOf("week").format("YYYY"),children:({calendarDate:t})=>e.jsx(YH,{calendarDate:t,disabledDates:n,selectedDate:g,minDate:s,maxDate:l,onSelect:y,slots:c,enableSelection:u,onSlotClick:x})})}))},exports.TimeTable=r=>{var{date:n,emptyContentMessage:i,rowData:o,loading:a,minTime:s="00:00",maxTime:l="23:00",minDate:c,maxDate:d,totalRecords:u,showCurrentDateAsToday:f,showDateAsShortForm:h,onPage:p,onRefresh:g,onNextDayClick:m,onPreviousDayClick:b,onCalendarDateSelect:v}=r,y=X(r,["date","emptyContentMessage","rowData","loading","minTime","maxTime","minDate","maxDate","totalRecords","showCurrentDateAsToday","showDateAsShortForm","onPage","onRefresh","onNextDayClick","onPreviousDayClick","onCalendarDateSelect"]);const x=y["data-testid"]||"timetable",w=Ku.roundToNearestInterval(s,60),$=Ku.roundToNearestInterval(l,60,!0),C=Ku.generateHourlyIntervals(w,$),S=0===u||dj.isEmpty(o),j=S||o.length===u,k=t.useRef(null),D=t.useRef(null),[T,E]=t.useState(!1),[O,F]=t.useState(!1),[I,_]=t.useState(0),[M,A]=t.useState(!1);t.useEffect((()=>{const e=dj.throttle((()=>{if(k.current&&(E(k.current.scrollLeft>0),F(k.current.scrollTop>0)),M||!k.current)return;const{scrollTop:e,clientHeight:t,scrollHeight:r}=k.current;Math.ceil(e+t)>=r-1&&!j&&p&&!a&&(A(!0),p())}),100),t=k.current;return t&&t.addEventListener("scroll",e),()=>{t&&t.removeEventListener("scroll",e)}}),[j,M,a,p]),t.useEffect((()=>{A(!1)}),[o]);qe({onResize:()=>{if(k.current){const e=Math.ceil(60*C.length/oW),t=(k.current.clientWidth-aW)/e;_(t>21?t:21)}},targetRef:k,refreshMode:"debounce",refreshRate:50});const B=(()=>{let e=0;const t=iW.length;return()=>{const r=iW[e],n=sW[e];return e=(e+1)%t,{mainColor:r,alternateColor:n}}})(),R=({wrapper:e,children:t})=>e(t),z=()=>{if(!a&&M)return e.jsx(MW,{$isScrolled:T,children:e.jsx(HW,{})})},P=()=>{if(!a&&M)return e.jsx(PW,{"data-testid":"lazy-loader",children:C.map(((t,r)=>e.jsx(LW,{$width:4*I,children:e.jsx(HW,{})},`lazy-load-cell-${r}`)))})};return S?e.jsxs(jW,Object.assign({},y,{"data-testid":x,children:[e.jsx(pW,{selectedDate:n,loading:a||M,tableContainerRef:k,minDate:c,maxDate:d,totalRecords:u,showCurrentDateAsToday:f,showDateAsShortForm:h,onPreviousDayClick:b,onNextDayClick:m,onRefresh:g,onCalendarDateSelect:v}),e.jsx(kW,{className:"empty-container",children:a?e.jsx(RW,{$isEmptyContent:S}):e.jsx(zW,{type:"no-item-found",description:i})})]})):e.jsxs(jW,Object.assign({},y,{"data-testid":x,children:[e.jsx(pW,{"data-id":"timetable-date-navigator",selectedDate:n,loading:a||M,tableContainerRef:k,minDate:c,maxDate:d,totalRecords:u,showCurrentDateAsToday:f,showDateAsShortForm:h,onPreviousDayClick:b,onNextDayClick:m,onRefresh:g,onCalendarDateSelect:v}),e.jsxs(DW,{"data-id":"timetable-container","data-testid":"timetable-container",ref:k,$loading:a,$allRecordsLoaded:j||!p,children:[e.jsx(TW,{$isScrolledY:O,$isScrolledX:T}),e.jsx(EW,{$numOfRows:o.length,$isScrolled:T,"data-testid":"row-header-column-id",children:e.jsxs(e.Fragment,{children:[o.map(((r,n)=>e.jsx(R,{wrapper:e=>((e,r)=>{if(!e.rowHeaderPopover)return r;const n={position:"bottom-start",rootNode:k,customOffset:e.rowHeaderPopover.offset,children:r,trigger:e.rowHeaderPopover.trigger,delay:e.rowHeaderPopover.delay,popoverContent:e.rowHeaderPopover.content};return t.createElement(WW,Object.assign({},n,{key:`${e.id}-popover-trigger`,zIndex:2}),r)})(r,e),children:e.jsxs(MW,{$isScrolled:T,children:[e.jsx(AW,{$isClickable:!!r.onRowNameClick,onClick:e=>((e,t)=>{e.onRowNameClick&&e.onRowNameClick(e,t)})(r,e),weight:"semibold","data-testid":`${r.id}-row-header-title`,children:r.name}),e.jsx(BW,{weight:"bold",$show:!!r.subtitle,"data-testid":`${r.id}-row-header-subtitle`,children:r.subtitle})]},`${r.id}-row-header`)},n))),z()]})}),e.jsx(OW,{$numOfColumns:C.length,$isScrolled:O,children:C.map((t=>e.jsx(FW,{"data-testid":`${t}-column`,children:e.jsx(IW,{weight:"semibold",children:t})},`${t}-column-key`)))}),a?e.jsx(RW,{$isEmptyContent:S}):e.jsxs(_W,{"data-testid":"content-container-id",ref:D,$numOfRows:o.length,children:[o.map(((t,r)=>e.jsx(SW,Object.assign({timetableMinTime:w,timetableMaxTime:$,rowBarColor:B(),intervalWidth:I,containerRef:D},t),`${r}-row-bar`))),P()]})]})]}))},exports.Timeline=({items:r,className:n,id:i,title:o,startCol:a,colSpan:s,"data-base-indicator-testid":l,"data-testid":c="timeline"})=>{const d=t=>"string"==typeof t?e.jsx(exports.Typography.BodyMD,{className:"timeline-item-content-text",children:t}):e.jsx(e.Fragment,{children:t}),f=t=>"string"==typeof t?e.jsx(JH,{weight:"semibold",className:"timeline-item-title",children:t}):e.jsx(e.Fragment,{children:t}),h=e=>e.slice(0,2).map(((e,r)=>t.createElement(nW,Object.assign({},e,{type:e.type,key:`status-pill-${r}`,"data-testid":"status-pill",className:"timeline-status-pill"}),e.children))),p=t=>{switch(t){case"completed":return e.jsx(u.TickIcon,{});case"error":return e.jsx(u.ExclamationCircleFillIcon,{});default:return null}};return e.jsxs(ZH,{className:n,id:i,"data-testid":c,$startCol:a,$colSpan:s,children:[e.jsx(QH,{"data-testid":"timeline-title",weight:"bold",children:o}),r.map(((t,r)=>{const{title:n,content:i,statuses:o,variant:a}=t,s=l?`circleindicator${r+1}_div_${l}`:"circleindicator",c=a||(0===r?"current":"upcoming-active");return e.jsxs(eW,{children:[e.jsxs(GH,{children:[e.jsx(qH,{"data-testid":s,$variant:c,children:p(c)}),e.jsx(XH,{$variant:c})]}),e.jsxs(tW,{className:"timeline-item-content",children:[f(n),o&&e.jsx(rW,{children:h(o)}),d(i)]})]},`timeline-item-${r}`)}))]})},exports.Timepicker=DI,exports.Toast=r=>{var{type:n="success",title:o,label:a,autoDismiss:s,autoDismissTime:l=JW,onDismiss:c,fixed:d=!0,actionButton:f}=r,h=X(r,["type","title","label","autoDismiss","autoDismissTime","onDismiss","fixed","actionButton"]);const[p,g]=t.useState(!1),m=i.useTheme(),b=Js["lg-max"]({theme:m}),v=bc.useMediaQuery({maxWidth:b});t.useEffect((()=>{g(!0)}),[]),t.useEffect((()=>{if(!s)return;const e=setTimeout((()=>{g(!1)}),l);return()=>clearTimeout(e)}),[s]);const y=ci({opacity:p?1:0,transform:p?v?"translateY(0%)":"translateX(0%)":v?"translateY(-1500%)":"translateX(150%)",config:{easing:dr.easeInOutQuart,duration:1e3},onRest:()=>{p||null==c||c()}});return e.jsxs(YW,Object.assign({style:y,$type:n,$fixed:d},h,{children:[e.jsxs(UW,{children:[e.jsxs(KW,{$type:n,children:[(()=>{switch(n){case"success":return e.jsx(u.TickCircleFillIcon,{});case"warning":return e.jsx(u.ExclamationTriangleFillIcon,{});case"error":return e.jsx(u.ExclamationCircleFillIcon,{});case"info":return e.jsx(u.ICircleFillIcon,{});default:return null}})(),e.jsxs(qW,{children:[o&&(Y.default.isValidElement(o)?o:e.jsx(XW,{$type:n,weight:"semibold",children:o})),a&&e.jsx(GW,{$type:n,children:Y.default.isValidElement(a)?a:o?e.jsx(exports.Typography.BodyMD,{children:a}):e.jsx(exports.Typography.BodyBL,{children:a})})]})]}),f&&e.jsx(ZW,{styleType:"light",onClick:f.onClick,children:f.label})]}),e.jsx(QW,{$type:n,onClick:()=>{g(!1)},children:e.jsx(u.CrossIcon,{})})]}))},exports.Toggle=iI,exports.Tooltip=iV,exports.UneditableSection=$V,exports.UnitNumberInput=MI,exports.V2_BaseTheme=RV,exports.V2_BookingSGTheme=zV,exports.V2_CCubeTheme=NV,exports.V2_Color=CP,exports.V2_DesignToken=jV,exports.V2_Layout=FV,exports.V2_MediaQuery=Qh,exports.V2_MediaWidths=Jh,exports.V2_MyLegacyTheme=LV,exports.V2_OneServiceTheme=HV,exports.V2_RBSTheme=PV,exports.V2_TextList=BV,exports.V2_TextStyle=EP,exports.V2_TextStyleHelper=AP,exports.V2_Transition=LP,exports.__awaiter=G,exports.commonjsGlobal=Ti,exports.getAugmentedNamespace=function(e){if(e.__esModule)return e;var t=e.default;if("function"==typeof t){var r=function e(){return this instanceof e?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:function(){return e[t]}})})),r},exports.withNotificationBanner=t=>Y.default.forwardRef(((r,n)=>e.jsx(NR,Object.assign({forwardedRef:n},r,{children:t.length>0?t.map(((t,r)=>{if("text"===t.type){const n=t.otherAttributes,i=Xz.sanitize(t.content);return e.jsx("p",Object.assign({},n,{dangerouslySetInnerHTML:{__html:i}}),r)}{const n=t.otherAttributes;return e.jsx(VR.Link,Object.assign({},n,{children:t.content}),r)}})):(console.error("[NotificationBannerHOC] Empty data passed"),null)})))),exports.withPopover=(r,n)=>i=>{const{onPopoverAppear:o,onPopoverDismiss:a}=i,s=X(i,["onPopoverAppear","onPopoverDismiss"]),l=n.trigger||"click",c=s,[d,u]=t.useState(!1),f=t.useRef(null),h=bc.useMediaQuery({maxWidth:Gh.mobileL});t.useEffect((()=>{if(!h)return document.addEventListener("mousedown",p),()=>{document.removeEventListener("mousedown",p)}}),[d]);const p=e=>{f&&!f.current.contains(e.target)&&(d&&u(!1),a&&a())};return e.jsxs(WP,{id:"popover-hoc-wrapper",ref:f,children:[e.jsx(VP,{id:`popover-hoc-trigger${n["data-testid"]&&`-${n["data-testid"]}`}`,type:"button",onClick:e=>{e.preventDefault(),("click"===l||h)&&(u(!d),!d&&o&&o(),d&&a&&a())},onMouseEnter:()=>{"hover"!==l||h||u(!0)},onMouseLeave:()=>{"hover"===l&&d&&!h&&u(!1)},"aria-label":"popover-button",children:e.jsx(r,Object.assign({},c))}),e.jsx(UP,{visible:d,id:n.id,"data-testid":n["data-testid"],onMobileClose:()=>{u(!1)},children:n.content})]})},exports.withTooltip=(t,r)=>n=>{const{tooltipVisible:i,position:o}=n,a=X(n,["tooltipVisible","position"]);return e.jsxs(nV,{children:[e.jsx(t,Object.assign({},a)),e.jsx(iV,{visible:i,position:o,children:r.content})]})};
//# sourceMappingURL=index.dab180cb.js.map
