"use strict";var e=require("react/jsx-runtime"),t=require("react"),n=require("react-dom"),r=require("@lifesg/react-icons/chevron-up"),i=require("styled-components"),o=require("@lifesg/react-icons/external"),a=require("@lifesg/react-icons/arrow-right"),s=require("@lifesg/react-icons/exclamation-circle-fill"),l=require("@lifesg/react-icons/exclamation-triangle-fill"),c=require("@lifesg/react-icons/i-circle-fill"),d=require("@lifesg/react-icons/tick-circle-fill"),u=require("@lifesg/react-icons"),f=require("@lifesg/react-icons/chevron-down"),h=require("@lifesg/react-icons/chevron-right"),p=require("@lifesg/react-icons/chevron-left"),g=require("@floating-ui/react"),m=require("@lifesg/react-icons/cross"),b=require("@lifesg/react-icons/star"),v=require("@lifesg/react-icons/star-fill"),y=require("@lifesg/react-icons/cloud-arrow-up-fill"),x=require("@lifesg/react-icons/magnifier"),w=require("@lifesg/react-icons/eye"),$=require("@lifesg/react-icons/eye-slash"),j=require("@lifesg/react-icons/exclamation-triangle"),S=require("@lifesg/react-icons/square"),k=require("@lifesg/react-icons/square-tick-fill"),C=require("@lifesg/react-icons/tick"),O=require("@lifesg/react-icons/caret-right"),T=require("@lifesg/react-icons/minus-square-fill"),D=require("@lifesg/react-icons/circle"),I=require("@lifesg/react-icons/circle-dot"),E=require("@lifesg/react-icons/bin"),_=require("@lifesg/react-icons/pencil"),M=require("@lifesg/react-icons/drag-handle"),R=require("@lifesg/react-icons/minus"),A=require("@lifesg/react-icons/plus"),N=require("@lifesg/react-icons/menu"),B=require("@lifesg/react-icons/chevron-2-left"),F=require("@lifesg/react-icons/chevron-2-right"),L=require("@lifesg/react-icons/chevron-line-left"),P=require("@lifesg/react-icons/chevron-line-right"),z=require("@lifesg/react-icons/ellipsis-horizontal"),H=require("@lifesg/react-icons/star-half");function W(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function V(e){if(e&&"object"==typeof e&&"default"in e)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(n){if("default"!==n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}})),t.default=e,Object.freeze(t)}var Y=V(t),U=W(n),K=W(i);const q=Y.default.createContext(!1);function X(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function G(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{l(r.next(e))}catch(e){o(e)}}function s(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}l((r=r.apply(e,t||[])).next())}))}function Z(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(s){return function(l){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,s[0]&&(a=0)),a;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,r=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){a.label=s[1];break}if(6===s[0]&&a.label<i[1]){a.label=i[1],i=s;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(s);break}i[2]&&a.ops.pop(),a.trys.pop();continue}s=t.call(e,a)}catch(e){s=[6,e],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,l])}}}function Q(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,o=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)a.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return a}function J(e,t,n){if(n||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}"function"==typeof SuppressedError&&SuppressedError;var ee=function(e,t){return ee=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},ee(e,t)};var te=function(){return te=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},te.apply(this,arguments)};var ne="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var re=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},ie="object"==typeof ne&&ne&&ne.Object===Object&&ne,oe="object"==typeof self&&self&&self.Object===Object&&self,ae=ie||oe||Function("return this")(),se=ae,le=function(){return se.Date.now()},ce=/\s/;var de=function(e){for(var t=e.length;t--&&ce.test(e.charAt(t)););return t},ue=/^\s+/;var fe=function(e){return e?e.slice(0,de(e)+1).replace(ue,""):e},he=ae.Symbol,pe=he,ge=Object.prototype,me=ge.hasOwnProperty,be=ge.toString,ve=pe?pe.toStringTag:void 0;var ye=function(e){var t=me.call(e,ve),n=e[ve];try{e[ve]=void 0;var r=!0}catch(e){}var i=be.call(e);return r&&(t?e[ve]=n:delete e[ve]),i},xe=Object.prototype.toString;var we=ye,$e=function(e){return xe.call(e)},je=he?he.toStringTag:void 0;var Se=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":je&&je in Object(e)?we(e):$e(e)},ke=function(e){return null!=e&&"object"==typeof e};var Ce=fe,Oe=re,Te=function(e){return"symbol"==typeof e||ke(e)&&"[object Symbol]"==Se(e)},De=/^[-+]0x[0-9a-f]+$/i,Ie=/^0b[01]+$/i,Ee=/^0o[0-7]+$/i,_e=parseInt;var Me=re,Re=le,Ae=function(e){if("number"==typeof e)return e;if(Te(e))return NaN;if(Oe(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Oe(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Ce(e);var n=Ie.test(e);return n||Ee.test(e)?_e(e.slice(2),n?2:8):De.test(e)?NaN:+e},Ne=Math.max,Be=Math.min;var Fe=function(e,t,n){var r,i,o,a,s,l,c=0,d=!1,u=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var n=r,o=i;return r=i=void 0,c=t,a=e.apply(o,n)}function p(e){var n=e-l;return void 0===l||n>=t||n<0||u&&e-c>=o}function g(){var e=Re();if(p(e))return m(e);s=setTimeout(g,function(e){var n=t-(e-l);return u?Be(n,o-(e-c)):n}(e))}function m(e){return s=void 0,f&&r?h(e):(r=i=void 0,a)}function b(){var e=Re(),n=p(e);if(r=arguments,i=this,l=e,n){if(void 0===s)return function(e){return c=e,s=setTimeout(g,t),d?h(e):a}(l);if(u)return clearTimeout(s),s=setTimeout(g,t),h(l)}return void 0===s&&(s=setTimeout(g,t)),a}return t=Ae(t)||0,Me(n)&&(d=!!n.leading,o=(u="maxWait"in n)?Ne(Ae(n.maxWait)||0,t):o,f="trailing"in n?!!n.trailing:f),b.cancel=function(){void 0!==s&&clearTimeout(s),c=0,r=l=i=s=void 0},b.flush=function(){return void 0===s?a:m(Re())},b},Le=Fe,Pe=re;var ze=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Pe(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),Le(e,t,{leading:r,maxWait:t,trailing:i})},He=function(e,t,n,r){switch(t){case"debounce":return Fe(e,n,r);case"throttle":return ze(e,n,r);default:return e}},We=function(e){return"function"==typeof e},Ve=function(){return"undefined"==typeof window},Ye=function(e){return e instanceof Element||e instanceof HTMLDocument},Ue=function(e,t,n,r){return function(i){var o=i.width,a=i.height;t((function(t){return t.width===o&&t.height===a||t.width===o&&!r||t.height===a&&!n?t:(e&&We(e)&&e(o,a),{width:o,height:a})}))}};!function(e){function r(r){var i=e.call(this,r)||this;i.cancelHandler=function(){i.resizeHandler&&i.resizeHandler.cancel&&(i.resizeHandler.cancel(),i.resizeHandler=null)},i.attachObserver=function(){var e=i.props,t=e.targetRef,n=e.observerOptions;if(!Ve()){t&&t.current&&(i.targetRef.current=t.current);var r=i.getElement();r&&(i.observableElement&&i.observableElement===r||(i.observableElement=r,i.resizeObserver.observe(r,n)))}},i.getElement=function(){var e=i.props,t=e.querySelector,r=e.targetDomEl;if(Ve())return null;if(t)return document.querySelector(t);if(r&&Ye(r))return r;if(i.targetRef&&Ye(i.targetRef.current))return i.targetRef.current;var o=n.findDOMNode(i);if(!o)return null;switch(i.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return o;default:return o.parentElement}},i.createResizeHandler=function(e){var t=i.props,n=t.handleWidth,r=void 0===n||n,o=t.handleHeight,a=void 0===o||o,s=t.onResize;if(r||a){var l=Ue(s,i.setState.bind(i),r,a);e.forEach((function(e){var t=e&&e.contentRect||{},n=t.width,r=t.height;!i.skipOnMount&&!Ve()&&l({width:n,height:r}),i.skipOnMount=!1}))}},i.getRenderType=function(){var e=i.props,n=e.render,r=e.children;return We(n)?"renderProp":We(r)?"childFunction":t.isValidElement(r)?"child":Array.isArray(r)?"childArray":"parent"};var o=r.skipOnMount,a=r.refreshMode,s=r.refreshRate,l=void 0===s?1e3:s,c=r.refreshOptions;return i.state={width:void 0,height:void 0},i.skipOnMount=o,i.targetRef=t.createRef(),i.observableElement=null,Ve()||(i.resizeHandler=He(i.createResizeHandler,a,l,c),i.resizeObserver=new window.ResizeObserver(i.resizeHandler)),i}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}ee(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)})(r,e),r.prototype.componentDidMount=function(){this.attachObserver()},r.prototype.componentDidUpdate=function(){this.attachObserver()},r.prototype.componentWillUnmount=function(){Ve()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},r.prototype.render=function(){var e,n=this.props,r=n.render,i=n.children,o=n.nodeType,a=void 0===o?"div":o,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return r&&r(l);case"childFunction":return(e=i)(l);case"child":if((e=i).type&&"string"==typeof e.type){var c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(l,["targetRef"]);return t.cloneElement(e,c)}return t.cloneElement(e,l);case"childArray":return(e=i).map((function(e){return!!e&&t.cloneElement(e,l)}));default:return Y.createElement(a,null)}}}(t.PureComponent);var Ke=Ve()?t.useEffect:t.useLayoutEffect;function qe(e){void 0===e&&(e={});var n=e.skipOnMount,r=void 0!==n&&n,i=e.refreshMode,o=e.refreshRate,a=void 0===o?1e3:o,s=e.refreshOptions,l=e.handleWidth,c=void 0===l||l,d=e.handleHeight,u=void 0===d||d,f=e.targetRef,h=e.observerOptions,p=e.onResize,g=t.useRef(r),m=t.useRef(null),b=null!=f?f:m,v=t.useRef(),y=t.useState({width:void 0,height:void 0}),x=y[0],w=y[1];return Ke((function(){if(!Ve()){var e=Ue(p,w,c,u);v.current=He((function(t){(c||u)&&t.forEach((function(t){var n=t&&t.contentRect||{},r=n.width,i=n.height;!g.current&&!Ve()&&e({width:r,height:i}),g.current=!1}))}),i,a,s);var t=new window.ResizeObserver(v.current);return b.current&&t.observe(b.current,h),function(){t.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[i,a,s,c,u,p,h,b.current]),te({ref:b},x)}var Xe=Object.defineProperty,Ge={};((e,t)=>{for(var n in t)Xe(e,n,{get:t[n],enumerable:!0})})(Ge,{assign:()=>Dt,colors:()=>Ct,createStringInterpolator:()=>$t,skipAnimation:()=>Ot,to:()=>jt,willAdvance:()=>Tt});var Ze=ht(),Qe=e=>ct(e,Ze),Je=ht();Qe.write=e=>ct(e,Je);var et=ht();Qe.onStart=e=>ct(e,et);var tt=ht();Qe.onFrame=e=>ct(e,tt);var nt=ht();Qe.onFinish=e=>ct(e,nt);var rt=[];Qe.setTimeout=(e,t)=>{const n=Qe.now()+t,r=()=>{const e=rt.findIndex((e=>e.cancel==r));~e&&rt.splice(e,1),st-=~e?1:0},i={time:n,handler:e,cancel:r};return rt.splice(it(n),0,i),st+=1,dt(),i};var it=e=>~(~rt.findIndex((t=>t.time>e))||~rt.length);Qe.cancel=e=>{et.delete(e),tt.delete(e),nt.delete(e),Ze.delete(e),Je.delete(e)},Qe.sync=e=>{lt=!0,Qe.batchedUpdates(e),lt=!1},Qe.throttle=e=>{let t;function n(){try{e(...t)}finally{t=null}}function r(...e){t=e,Qe.onStart(n)}return r.handler=e,r.cancel=()=>{et.delete(n),t=null},r};var ot="undefined"!=typeof window?window.requestAnimationFrame:()=>{};Qe.use=e=>ot=e,Qe.now="undefined"!=typeof performance?()=>performance.now():Date.now,Qe.batchedUpdates=e=>e(),Qe.catch=console.error,Qe.frameLoop="always",Qe.advance=()=>{"demand"!==Qe.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):ft()};var at=-1,st=0,lt=!1;function ct(e,t){lt?(t.delete(e),e(0)):(t.add(e),dt())}function dt(){at<0&&(at=0,"demand"!==Qe.frameLoop&&ot(ut))}function ut(){~at&&(ot(ut),Qe.batchedUpdates(ft))}function ft(){const e=at;at=Qe.now();const t=it(at);t&&(pt(rt.splice(0,t),(e=>e.handler())),st-=t),st?(et.flush(),Ze.flush(e?Math.min(64,at-e):16.667),tt.flush(),Je.flush(),nt.flush()):at=-1}function ht(){let e=new Set,t=e;return{add(n){st+=t!=e||e.has(n)?0:1,e.add(n)},delete:n=>(st-=t==e&&e.has(n)?1:0,e.delete(n)),flush(n){t.size&&(e=new Set,st-=t.size,pt(t,(t=>t(n)&&e.add(t))),st+=e.size,t=e)}}}function pt(e,t){e.forEach((e=>{try{t(e)}catch(e){Qe.catch(e)}}))}function gt(){}var mt={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function bt(e,t){if(mt.arr(e)){if(!mt.arr(t)||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}return e===t}var vt=(e,t)=>e.forEach(t);function yt(e,t,n){if(mt.arr(e))for(let r=0;r<e.length;r++)t.call(n,e[r],`${r}`);else for(const r in e)e.hasOwnProperty(r)&&t.call(n,e[r],r)}var xt=e=>mt.und(e)?[]:mt.arr(e)?e:[e];function wt(e,t){if(e.size){const n=Array.from(e);e.clear(),vt(n,t)}}var $t,jt,St=(e,...t)=>wt(e,(e=>e(...t))),kt=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),Ct=null,Ot=!1,Tt=gt,Dt=e=>{e.to&&(jt=e.to),e.now&&(Qe.now=e.now),void 0!==e.colors&&(Ct=e.colors),null!=e.skipAnimation&&(Ot=e.skipAnimation),e.createStringInterpolator&&($t=e.createStringInterpolator),e.requestAnimationFrame&&Qe.use(e.requestAnimationFrame),e.batchedUpdates&&(Qe.batchedUpdates=e.batchedUpdates),e.willAdvance&&(Tt=e.willAdvance),e.frameLoop&&(Qe.frameLoop=e.frameLoop)},It=new Set,Et=[],_t=[],Mt=0,Rt={get idle(){return!It.size&&!Et.length},start(e){Mt>e.priority?(It.add(e),Qe.onStart(At)):(Nt(e),Qe(Ft))},advance:Ft,sort(e){if(Mt)Qe.onFrame((()=>Rt.sort(e)));else{const t=Et.indexOf(e);~t&&(Et.splice(t,1),Bt(e))}},clear(){Et=[],It.clear()}};function At(){It.forEach(Nt),It.clear(),Qe(Ft)}function Nt(e){Et.includes(e)||Bt(e)}function Bt(e){Et.splice(function(e,t){const n=e.findIndex(t);return n<0?e.length:n}(Et,(t=>t.priority>e.priority)),0,e)}function Ft(e){const t=_t;for(let n=0;n<Et.length;n++){const r=Et[n];Mt=r.priority,r.idle||(Tt(r),r.advance(e),r.idle||t.push(r))}return Mt=0,(_t=Et).length=0,(Et=t).length>0}var Lt="[-+]?\\d*\\.?\\d+",Pt=Lt+"%";function zt(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var Ht=new RegExp("rgb"+zt(Lt,Lt,Lt)),Wt=new RegExp("rgba"+zt(Lt,Lt,Lt,Lt)),Vt=new RegExp("hsl"+zt(Lt,Pt,Pt)),Yt=new RegExp("hsla"+zt(Lt,Pt,Pt,Lt)),Ut=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Kt=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,qt=/^#([0-9a-fA-F]{6})$/,Xt=/^#([0-9a-fA-F]{8})$/;function Gt(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Zt(e,t,n){const r=n<.5?n*(1+t):n+t-n*t,i=2*n-r,o=Gt(i,r,e+1/3),a=Gt(i,r,e),s=Gt(i,r,e-1/3);return Math.round(255*o)<<24|Math.round(255*a)<<16|Math.round(255*s)<<8}function Qt(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function Jt(e){return(parseFloat(e)%360+360)%360/360}function en(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function tn(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function nn(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=qt.exec(e))?parseInt(t[1]+"ff",16)>>>0:Ct&&void 0!==Ct[e]?Ct[e]:(t=Ht.exec(e))?(Qt(t[1])<<24|Qt(t[2])<<16|Qt(t[3])<<8|255)>>>0:(t=Wt.exec(e))?(Qt(t[1])<<24|Qt(t[2])<<16|Qt(t[3])<<8|en(t[4]))>>>0:(t=Ut.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=Xt.exec(e))?parseInt(t[1],16)>>>0:(t=Kt.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=Vt.exec(e))?(255|Zt(Jt(t[1]),tn(t[2]),tn(t[3])))>>>0:(t=Yt.exec(e))?(Zt(Jt(t[1]),tn(t[2]),tn(t[3]))|en(t[4]))>>>0:null}(e);if(null===t)return e;t=t||0;return`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`}var rn=(e,t,n)=>{if(mt.fun(e))return e;if(mt.arr(e))return rn({range:e,output:t,extrapolate:n});if(mt.str(e.output[0]))return $t(e);const r=e,i=r.output,o=r.range||[0,1],a=r.extrapolateLeft||r.extrapolate||"extend",s=r.extrapolateRight||r.extrapolate||"extend",l=r.easing||(e=>e);return e=>{const t=function(e,t){for(var n=1;n<t.length-1&&!(t[n]>=e);++n);return n-1}(e,o);return function(e,t,n,r,i,o,a,s,l){let c=l?l(e):e;if(c<t){if("identity"===a)return c;"clamp"===a&&(c=t)}if(c>n){if("identity"===s)return c;"clamp"===s&&(c=n)}if(r===i)return r;if(t===n)return e<=t?r:i;t===-1/0?c=-c:n===1/0?c-=t:c=(c-t)/(n-t);c=o(c),r===-1/0?c=-c:i===1/0?c+=r:c=c*(i-r)+r;return c}(e,o[t],o[t+1],i[t],i[t+1],l,a,s,r.map)}};var on=1.70158,an=1.525*on,sn=on+1,ln=2*Math.PI/3,cn=2*Math.PI/4.5,dn=e=>{const t=7.5625,n=2.75;return e<1/n?t*e*e:e<2/n?t*(e-=1.5/n)*e+.75:e<2.5/n?t*(e-=2.25/n)*e+.9375:t*(e-=2.625/n)*e+.984375},un={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>sn*e*e*e-on*e*e,easeOutBack:e=>1+sn*Math.pow(e-1,3)+on*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-an)/2:(Math.pow(2*e-2,2)*((an+1)*(2*e-2)+an)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*ln),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*ln)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*cn)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*cn)/2+1,easeInBounce:e=>1-dn(1-e),easeOutBounce:dn,easeInOutBounce:e=>e<.5?(1-dn(1-2*e))/2:(1+dn(2*e-1))/2,steps:(e,t="end")=>n=>{const r=(n="end"===t?Math.min(n,.999):Math.max(n,.001))*e,i="end"===t?Math.floor(r):Math.ceil(r);return o=0,a=1,s=i/e,Math.min(Math.max(s,o),a);var o,a,s}},fn=Symbol.for("FluidValue.get"),hn=Symbol.for("FluidValue.observers"),pn=e=>Boolean(e&&e[fn]),gn=e=>e&&e[fn]?e[fn]():e,mn=e=>e[hn]||null;function bn(e,t){const n=e[hn];n&&n.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}var vn=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");yn(this,e)}},yn=(e,t)=>jn(e,fn,t);function xn(e,t){if(e[fn]){let n=e[hn];n||jn(e,hn,n=new Set),n.has(t)||(n.add(t),e.observerAdded&&e.observerAdded(n.size,t))}return t}function wn(e,t){const n=e[hn];if(n&&n.has(t)){const r=n.size-1;r?n.delete(t):e[hn]=null,e.observerRemoved&&e.observerRemoved(r,t)}}var $n,jn=(e,t,n)=>Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0}),Sn=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,kn=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,Cn=new RegExp(`(${Sn.source})(%|[a-z]+)`,"i"),On=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,Tn=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,Dn=e=>{const[t,n]=In(e);if(!t||kt())return e;const r=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(r)return r.trim();if(n&&n.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(n);return t||e}return n&&Tn.test(n)?Dn(n):n||e},In=e=>{const t=Tn.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]},En=(e,t,n,r,i)=>`rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,_n=e=>{$n||($n=Ct?new RegExp(`(${Object.keys(Ct).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>gn(e).replace(Tn,Dn).replace(kn,nn).replace($n,nn))),n=t.map((e=>e.match(Sn).map(Number))),r=n[0].map(((e,t)=>n.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))),i=r.map((t=>rn({...e,output:t})));return e=>{const n=!Cn.test(t[0])&&t.find((e=>Cn.test(e)))?.replace(Sn,"");let r=0;return t[0].replace(Sn,(()=>`${i[r++](e)}${n||""}`)).replace(On,En)}},Mn="react-spring: ",Rn=e=>{const t=e;let n=!1;if("function"!=typeof t)throw new TypeError(`${Mn}once requires a function parameter`);return(...e)=>{n||(t(...e),n=!0)}},An=Rn(console.warn);var Nn=Rn(console.warn);function Bn(e){return mt.str(e)&&("#"==e[0]||/\d/.test(e)||!kt()&&Tn.test(e)||e in(Ct||{}))}var Fn=kt()?t.useEffect:t.useLayoutEffect,Ln=()=>{const e=t.useRef(!1);return Fn((()=>(e.current=!0,()=>{e.current=!1})),[]),e};function Pn(){const e=t.useState()[1],n=Ln();return()=>{n.current&&e(Math.random())}}var zn=e=>t.useEffect(e,Hn),Hn=[];function Wn(e){const n=t.useRef();return t.useEffect((()=>{n.current=e})),n.current}var Vn=Symbol.for("Animated:node"),Yn=e=>e&&e[Vn],Un=(e,t)=>{return n=e,r=Vn,i=t,Object.defineProperty(n,r,{value:i,writable:!0,configurable:!0});var n,r,i},Kn=e=>e&&e[Vn]&&e[Vn].getPayload(),qn=class{constructor(){Un(this,this)}getPayload(){return this.payload||[]}},Xn=class extends qn{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,mt.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new Xn(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return mt.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,mt.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},Gn=class extends Xn{constructor(e){super(0),this._string=null,this._toString=rn({output:[e,e]})}static create(e){return new Gn(e)}getValue(){const e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(mt.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=rn({output:[this.getValue(),e]})),this._value=0,super.reset()}},Zn={dependencies:null},Qn=class extends qn{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return yt(this.source,((n,r)=>{var i;(i=n)&&i[Vn]===i?t[r]=n.getValue(e):pn(n)?t[r]=gn(n):e||(t[r]=n)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&vt(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return yt(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){Zn.dependencies&&pn(e)&&Zn.dependencies.add(e);const t=Kn(e);t&&vt(t,(e=>this.add(e)))}},Jn=class extends Qn{constructor(e){super(e)}static create(e){return new Jn(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,n)=>t.setValue(e[n]))).some(Boolean):(super.setValue(e.map(er)),!0)}};function er(e){return(Bn(e)?Gn:Xn).create(e)}function tr(e){const t=Yn(e);return t?t.constructor:mt.arr(e)?Jn:Bn(e)?Gn:Xn}var nr=(e,n)=>{const r=!mt.fun(e)||e.prototype&&e.prototype.isReactComponent;return t.forwardRef(((i,o)=>{const a=t.useRef(null),s=r&&t.useCallback((e=>{a.current=function(e,t){e&&(mt.fun(e)?e(t):e.current=t);return t}(o,e)}),[o]),[l,c]=function(e,t){const n=new Set;Zn.dependencies=n,e.style&&(e={...e,style:t.createAnimatedStyle(e.style)});return e=new Qn(e),Zn.dependencies=null,[e,n]}(i,n),d=Pn(),u=()=>{const e=a.current;if(r&&!e)return;!1===(!!e&&n.applyAnimatedValues(e,l.getValue(!0)))&&d()},f=new rr(u,c),h=t.useRef();Fn((()=>(h.current=f,vt(c,(e=>xn(e,f))),()=>{h.current&&(vt(h.current.deps,(e=>wn(e,h.current))),Qe.cancel(h.current.update))}))),t.useEffect(u,[]),zn((()=>()=>{const e=h.current;vt(e.deps,(t=>wn(t,e)))}));const p=n.getComponentProps(l.getValue());return Y.createElement(e,{...p,ref:s})}))},rr=class{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&Qe.write(this.update)}};var ir=Symbol.for("AnimatedComponent"),or=e=>mt.str(e)?e:e&&mt.str(e.displayName)?e.displayName:mt.fun(e)&&e.name||null;function ar(e,...t){return mt.fun(e)?e(...t):e}var sr=(e,t)=>!0===e||!!(t&&e&&(mt.fun(e)?e(t):xt(e).includes(t))),lr=(e,t)=>mt.obj(e)?t&&e[t]:e,cr=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,dr=e=>e,ur=(e,t=dr)=>{let n=fr;e.default&&!0!==e.default&&(e=e.default,n=Object.keys(e));const r={};for(const i of n){const n=t(e[i],i);mt.und(n)||(r[i]=n)}return r},fr=["config","onProps","onStart","onChange","onPause","onResume","onRest"],hr={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function pr(e){const t=function(e){const t={};let n=0;if(yt(e,((e,r)=>{hr[r]||(t[r]=e,n++)})),n)return t}(e);if(t){const n={to:t};return yt(e,((e,r)=>r in t||(n[r]=e))),n}return{...e}}function gr(e){return e=gn(e),mt.arr(e)?e.map(gr):Bn(e)?Ge.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function mr(e){return mt.fun(e)||mt.arr(e)&&mt.obj(e[0])}var br={tension:170,friction:26,mass:1,damping:1,easing:un.linear,clamp:!1},vr=class{constructor(){this.velocity=0,Object.assign(this,br)}};function yr(e,t){if(mt.und(t.decay)){const n=!mt.und(t.tension)||!mt.und(t.friction);!n&&mt.und(t.frequency)&&mt.und(t.damping)&&mt.und(t.mass)||(e.duration=void 0,e.decay=void 0),n&&(e.frequency=void 0)}else e.duration=void 0}var xr=[],wr=class{constructor(){this.changed=!1,this.values=xr,this.toValues=null,this.fromValues=xr,this.config=new vr,this.immediate=!1}};function $r(e,{key:t,props:n,defaultProps:r,state:i,actions:o}){return new Promise(((a,s)=>{let l,c,d=sr(n.cancel??r?.cancel,t);if(d)h();else{mt.und(n.pause)||(i.paused=sr(n.pause,t));let e=r?.pause;!0!==e&&(e=i.paused||sr(e,t)),l=ar(n.delay||0,t),e?(i.resumeQueue.add(f),o.pause()):(o.resume(),f())}function u(){i.resumeQueue.add(f),i.timeouts.delete(c),c.cancel(),l=c.time-Qe.now()}function f(){l>0&&!Ge.skipAnimation?(i.delayed=!0,c=Qe.setTimeout(h,l),i.pauseQueue.add(u),i.timeouts.add(c)):h()}function h(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(u),i.timeouts.delete(c),e<=(i.cancelId||0)&&(d=!0);try{o.start({...n,callId:e,cancel:d},a)}catch(e){s(e)}}}))}var jr=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?Cr(e.get()):t.every((e=>e.noop))?Sr(e.get()):kr(e.get(),t.every((e=>e.finished))),Sr=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),kr=(e,t,n=!1)=>({value:e,finished:t,cancelled:n}),Cr=e=>({value:e,cancelled:!0,finished:!1});function Or(e,t,n,r){const{callId:i,parentId:o,onRest:a}=t,{asyncTo:s,promise:l}=n;return o||e!==s||t.reset?n.promise=(async()=>{n.asyncId=i,n.asyncTo=e;const c=ur(t,((e,t)=>"onRest"===t?void 0:e));let d,u;const f=new Promise(((e,t)=>(d=e,u=t))),h=e=>{const t=i<=(n.cancelId||0)&&Cr(r)||i!==n.asyncId&&kr(r,!1);if(t)throw e.result=t,u(e),e},p=(e,t)=>{const o=new Dr,a=new Ir;return(async()=>{if(Ge.skipAnimation)throw Tr(n),a.result=kr(r,!1),u(a),a;h(o);const s=mt.obj(e)?{...e}:{...t,to:e};s.parentId=i,yt(c,((e,t)=>{mt.und(s[t])&&(s[t]=e)}));const l=await r.start(s);return h(o),n.paused&&await new Promise((e=>{n.resumeQueue.add(e)})),l})()};let g;if(Ge.skipAnimation)return Tr(n),kr(r,!1);try{let t;t=mt.arr(e)?(async e=>{for(const t of e)await p(t)})(e):Promise.resolve(e(p,r.stop.bind(r))),await Promise.all([t.then(d),f]),g=kr(r.get(),!0,!1)}catch(e){if(e instanceof Dr)g=e.result;else{if(!(e instanceof Ir))throw e;g=e.result}}finally{i==n.asyncId&&(n.asyncId=o,n.asyncTo=o?s:void 0,n.promise=o?l:void 0)}return mt.fun(a)&&Qe.batchedUpdates((()=>{a(g,r,r.item)})),g})():l}function Tr(e,t){wt(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}var Dr=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},Ir=class extends Error{constructor(){super("SkipAnimationSignal")}},Er=e=>e instanceof Mr,_r=1,Mr=class extends vn{constructor(){super(...arguments),this.id=_r++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=Yn(this);return e&&e.getValue()}to(...e){return Ge.to(this,e)}interpolate(...e){return An(`${Mn}The "interpolate" function is deprecated in v9 (use "to" instead)`),Ge.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){bn(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||Rt.sort(this),bn(this,{type:"priority",parent:this,priority:e})}},Rr=Symbol.for("SpringPhase"),Ar=e=>(1&e[Rr])>0,Nr=e=>(2&e[Rr])>0,Br=e=>(4&e[Rr])>0,Fr=(e,t)=>t?e[Rr]|=3:e[Rr]&=-3,Lr=(e,t)=>t?e[Rr]|=4:e[Rr]&=-5,Pr=class extends Mr{constructor(e,t){if(super(),this.animation=new wr,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!mt.und(e)||!mt.und(t)){const n=mt.obj(e)?{...e}:{...t,from:e};mt.und(n.default)&&(n.default=!0),this.start(n)}}get idle(){return!(Nr(this)||this._state.asyncTo)||Br(this)}get goal(){return gn(this.animation.to)}get velocity(){const e=Yn(this);return e instanceof Xn?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return Ar(this)}get isAnimating(){return Nr(this)}get isPaused(){return Br(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,n=!1;const r=this.animation;let{toValues:i}=r;const{config:o}=r,a=Kn(r.to);!a&&pn(r.to)&&(i=xt(gn(r.to))),r.values.forEach(((s,l)=>{if(s.done)return;const c=s.constructor==Gn?1:a?a[l].lastPosition:i[l];let d=r.immediate,u=c;if(!d){if(u=s.lastPosition,o.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const n=r.fromValues[l],i=null!=s.v0?s.v0:s.v0=mt.arr(o.velocity)?o.velocity[l]:o.velocity;let a;const f=o.precision||(n==c?.005:Math.min(1,.001*Math.abs(c-n)));if(mt.und(o.duration))if(o.decay){const e=!0===o.decay?.998:o.decay,r=Math.exp(-(1-e)*t);u=n+i/(1-e)*(1-r),d=Math.abs(s.lastPosition-u)<=f,a=i*r}else{a=null==s.lastVelocity?i:s.lastVelocity;const t=o.restVelocity||f/10,r=o.clamp?0:o.bounce,l=!mt.und(r),h=n==c?s.v0>0:n<c;let p,g=!1;const m=1,b=Math.ceil(e/m);for(let e=0;e<b&&(p=Math.abs(a)>t,p||(d=Math.abs(c-u)<=f,!d));++e){l&&(g=u==c||u>c==h,g&&(a=-a*r,u=c));a+=(1e-6*-o.tension*(u-c)+.001*-o.friction*a)/o.mass*m,u+=a*m}}else{let r=1;o.duration>0&&(this._memoizedDuration!==o.duration&&(this._memoizedDuration=o.duration,s.durationProgress>0&&(s.elapsedTime=o.duration*s.durationProgress,t=s.elapsedTime+=e)),r=(o.progress||0)+t/this._memoizedDuration,r=r>1?1:r<0?0:r,s.durationProgress=r),u=n+o.easing(r)*(c-n),a=(u-s.lastPosition)/e,d=1==r}s.lastVelocity=a,Number.isNaN(u)&&(console.warn("Got NaN while animating:",this),d=!0)}a&&!a[l].done&&(d=!1),d?s.done=!0:t=!1,s.setValue(u,o.round)&&(n=!0)}));const s=Yn(this),l=s.getValue();if(t){const e=gn(r.to);l===e&&!n||o.decay?n&&o.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else n&&this._onChange(l)}set(e){return Qe.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(Nr(this)){const{to:e,config:t}=this.animation;Qe.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let n;return mt.und(e)?(n=this.queue||[],this.queue=[]):n=[mt.obj(e)?e:{...t,to:e}],Promise.all(n.map((e=>this._update(e)))).then((e=>jr(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),Tr(this._state,e&&this._lastCallId),Qe.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:n,from:r}=e;n=mt.obj(n)?n[t]:n,(null==n||mr(n))&&(n=void 0),r=mt.obj(r)?r[t]:r,null==r&&(r=void 0);const i={to:n,from:r};return Ar(this)||(e.reverse&&([n,r]=[r,n]),r=gn(r),mt.und(r)?Yn(this)||this._set(n):this._set(r)),i}_update({...e},t){const{key:n,defaultProps:r}=this;e.default&&Object.assign(r,ur(e,((e,t)=>/^on/.test(t)?lr(e,n):e))),Kr(this,e,"onProps"),qr(this,"onProps",e,this);const i=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const o=this._state;return $r(++this._lastCallId,{key:n,props:e,defaultProps:r,state:o,actions:{pause:()=>{Br(this)||(Lr(this,!0),St(o.pauseQueue),qr(this,"onPause",kr(this,zr(this,this.animation.to)),this))},resume:()=>{Br(this)&&(Lr(this,!1),Nr(this)&&this._resume(),St(o.resumeQueue),qr(this,"onResume",kr(this,zr(this,this.animation.to)),this))},start:this._merge.bind(this,i)}}).then((n=>{if(e.loop&&n.finished&&(!t||!n.noop)){const t=Hr(e);if(t)return this._update(t,!0)}return n}))}_merge(e,t,n){if(t.cancel)return this.stop(!0),n(Cr(this));const r=!mt.und(e.to),i=!mt.und(e.from);if(r||i){if(!(t.callId>this._lastToId))return n(Cr(this));this._lastToId=t.callId}const{key:o,defaultProps:a,animation:s}=this,{to:l,from:c}=s;let{to:d=l,from:u=c}=e;!i||r||t.default&&!mt.und(d)||(d=u),t.reverse&&([d,u]=[u,d]);const f=!bt(u,c);f&&(s.from=u),u=gn(u);const h=!bt(d,l);h&&this._focus(d);const p=mr(t.to),{config:g}=s,{decay:m,velocity:b}=g;(r||i)&&(g.velocity=0),t.config&&!p&&function(e,t,n){n&&(yr(n={...n},t),t={...n,...t}),yr(e,t),Object.assign(e,t);for(const t in br)null==e[t]&&(e[t]=br[t]);let{frequency:r,damping:i}=e;const{mass:o}=e;mt.und(r)||(r<.01&&(r=.01),i<0&&(i=0),e.tension=Math.pow(2*Math.PI/r,2)*o,e.friction=4*Math.PI*i*o/r)}(g,ar(t.config,o),t.config!==a.config?ar(a.config,o):void 0);let v=Yn(this);if(!v||mt.und(d))return n(kr(this,!0));const y=mt.und(t.reset)?i&&!t.default:!mt.und(u)&&sr(t.reset,o),x=y?u:this.get(),w=gr(d),$=mt.num(w)||mt.arr(w)||Bn(w),j=!p&&(!$||sr(a.immediate||t.immediate,o));if(h){const e=tr(d);if(e!==v.constructor){if(!j)throw Error(`Cannot animate between ${v.constructor.name} and ${e.name}, as the "to" prop suggests`);v=this._set(w)}}const S=v.constructor;let k=pn(d),C=!1;if(!k){const e=y||!Ar(this)&&f;(h||e)&&(C=bt(gr(x),w),k=!C),(bt(s.immediate,j)||j)&&bt(g.decay,m)&&bt(g.velocity,b)||(k=!0)}if(C&&Nr(this)&&(s.changed&&!y?k=!0:k||this._stop(l)),!p&&((k||pn(l))&&(s.values=v.getPayload(),s.toValues=pn(d)?null:S==Gn?[1]:xt(w)),s.immediate!=j&&(s.immediate=j,j||y||this._set(l)),k)){const{onRest:e}=s;vt(Ur,(e=>Kr(this,t,e)));const r=kr(this,zr(this,l));St(this._pendingCalls,r),this._pendingCalls.add(n),s.changed&&Qe.batchedUpdates((()=>{s.changed=!y,e?.(r,this),y?ar(a.onRest,r):s.onStart?.(r,this)}))}y&&this._set(x),p?n(Or(t.to,t,this._state,this)):k?this._start():Nr(this)&&!h?this._pendingCalls.add(n):n(Sr(x))}_focus(e){const t=this.animation;e!==t.to&&(mn(this)&&this._detach(),t.to=e,mn(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;pn(t)&&(xn(t,this),Er(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;pn(e)&&wn(e,this)}_set(e,t=!0){const n=gn(e);if(!mt.und(n)){const e=Yn(this);if(!e||!bt(n,e.getValue())){const r=tr(n);e&&e.constructor==r?e.setValue(n):Un(this,r.create(n)),e&&Qe.batchedUpdates((()=>{this._onChange(n,t)}))}}return Yn(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,qr(this,"onStart",kr(this,zr(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),ar(this.animation.onChange,e,this)),ar(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;Yn(this).reset(gn(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),Nr(this)||(Fr(this,!0),Br(this)||this._resume())}_resume(){Ge.skipAnimation?this.finish():Rt.start(this)}_stop(e,t){if(Nr(this)){Fr(this,!1);const n=this.animation;vt(n.values,(e=>{e.done=!0})),n.toValues&&(n.onChange=n.onPause=n.onResume=void 0),bn(this,{type:"idle",parent:this});const r=t?Cr(this.get()):kr(this.get(),zr(this,e??n.to));St(this._pendingCalls,r),n.changed&&(n.changed=!1,qr(this,"onRest",r,this))}}};function zr(e,t){const n=gr(t);return bt(gr(e.get()),n)}function Hr(e,t=e.loop,n=e.to){const r=ar(t);if(r){const i=!0!==r&&pr(r),o=(i||e).reverse,a=!i||i.reset;return Wr({...e,loop:t,default:!1,pause:void 0,to:!o||mr(n)?n:void 0,from:a?e.from:void 0,reset:a,...i})}}function Wr(e){const{to:t,from:n}=e=pr(e),r=new Set;return mt.obj(t)&&Yr(t,r),mt.obj(n)&&Yr(n,r),e.keys=r.size?Array.from(r):null,e}function Vr(e){const t=Wr(e);return mt.und(t.default)&&(t.default=ur(t)),t}function Yr(e,t){yt(e,((e,n)=>null!=e&&t.add(n)))}var Ur=["onStart","onRest","onChange","onPause","onResume"];function Kr(e,t,n){e.animation[n]=t[n]!==cr(t,n)?lr(t[n],e.key):void 0}function qr(e,t,...n){e.animation[t]?.(...n),e.defaultProps[t]?.(...n)}var Xr=["onStart","onChange","onRest"],Gr=1,Zr=class{constructor(e,t){this.id=Gr++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,n)=>e[n]=t.get())),e}set(e){for(const t in e){const n=e[t];mt.und(n)||this.springs[t].set(n)}}update(e){return e&&this.queue.push(Wr(e)),this}start(e){let{queue:t}=this;return e?t=xt(e).map(Wr):this.queue=[],this._flush?this._flush(this,t):(ii(this,t),Qr(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const n=this.springs;vt(xt(t),(t=>n[t].stop(!!e)))}else Tr(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(mt.und(e))this.start({pause:!0});else{const t=this.springs;vt(xt(e),(e=>t[e].pause()))}return this}resume(e){if(mt.und(e))this.start({pause:!1});else{const t=this.springs;vt(xt(e),(e=>t[e].resume()))}return this}each(e){yt(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:n}=this._events,r=this._active.size>0,i=this._changed.size>0;(r&&!this._started||i&&!this._started)&&(this._started=!0,wt(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const o=!r&&this._started,a=i||o&&n.size?this.get():null;i&&t.size&&wt(t,(([e,t])=>{t.value=a,e(t,this,this._item)})),o&&(this._started=!1,wt(n,(([e,t])=>{t.value=a,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}Qe.onFrame(this._onFrame)}};function Qr(e,t){return Promise.all(t.map((t=>Jr(e,t)))).then((t=>jr(e,t)))}async function Jr(e,t,n){const{keys:r,to:i,from:o,loop:a,onRest:s,onResolve:l}=t,c=mt.obj(t.default)&&t.default;a&&(t.loop=!1),!1===i&&(t.to=null),!1===o&&(t.from=null);const d=mt.arr(i)||mt.fun(i)?i:void 0;d?(t.to=void 0,t.onRest=void 0,c&&(c.onRest=void 0)):vt(Xr,(n=>{const r=t[n];if(mt.fun(r)){const i=e._events[n];t[n]=({finished:e,cancelled:t})=>{const n=i.get(r);n?(e||(n.finished=!1),t&&(n.cancelled=!0)):i.set(r,{value:null,finished:e||!1,cancelled:t||!1})},c&&(c[n]=t[n])}}));const u=e._state;t.pause===!u.paused?(u.paused=t.pause,St(t.pause?u.pauseQueue:u.resumeQueue)):u.paused&&(t.pause=!0);const f=(r||Object.keys(e.springs)).map((n=>e.springs[n].start(t))),h=!0===t.cancel||!0===cr(t,"cancel");(d||h&&u.asyncId)&&f.push($r(++e._lastAsyncId,{props:t,state:u,actions:{pause:gt,resume:gt,start(t,n){h?(Tr(u,e._lastAsyncId),n(Cr(e))):(t.onRest=s,n(Or(d,t,u,e)))}}})),u.paused&&await new Promise((e=>{u.resumeQueue.add(e)}));const p=jr(e,await Promise.all(f));if(a&&p.finished&&(!n||!p.noop)){const n=Hr(t,a,i);if(n)return ii(e,[n]),Jr(e,n,!0)}return l&&Qe.batchedUpdates((()=>l(p,e,e.item))),p}function ei(e,t){const n={...e.springs};return t&&vt(xt(t),(e=>{mt.und(e.keys)&&(e=Wr(e)),mt.obj(e.to)||(e={...e,to:void 0}),ri(n,e,(e=>ni(e)))})),ti(e,n),n}function ti(e,t){yt(t,((t,n)=>{e.springs[n]||(e.springs[n]=t,xn(t,e))}))}function ni(e,t){const n=new Pr;return n.key=e,t&&xn(n,t),n}function ri(e,t,n){t.keys&&vt(t.keys,(r=>{(e[r]||(e[r]=n(r)))._prepareNode(t)}))}function ii(e,t){vt(t,(t=>{ri(e.springs,t,(t=>ni(t,e)))}))}var oi,ai,si=({children:e,...n})=>{const r=t.useContext(li),i=n.pause||!!r.pause,o=n.immediate||!!r.immediate;n=function(e,n){const[r]=t.useState((()=>({inputs:n,result:e()}))),i=t.useRef(),o=i.current;let a=o;if(a){const t=Boolean(n&&a.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}(n,a.inputs));t||(a={inputs:n,result:e()})}else a=r;return t.useEffect((()=>{i.current=a,o==r&&(r.inputs=r.result=void 0)}),[a]),a.result}((()=>({pause:i,immediate:o})),[i,o]);const{Provider:a}=li;return Y.createElement(a,{value:n},e)},li=(oi=si,ai={},Object.assign(oi,Y.createContext(ai)),oi.Provider._context=oi,oi.Consumer._context=oi,oi);si.Provider=li.Provider,si.Consumer=li.Consumer;var ci=()=>{const e=[],t=function(t){Nn(`${Mn}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const r=[];return vt(e,((e,i)=>{if(mt.und(t))r.push(e.start());else{const o=n(t,e,i);o&&r.push(e.start(o))}})),r};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const n=e.indexOf(t);~n&&e.splice(n,1)},t.pause=function(){return vt(e,(e=>e.pause(...arguments))),this},t.resume=function(){return vt(e,(e=>e.resume(...arguments))),this},t.set=function(t){vt(e,((e,n)=>{const r=mt.fun(t)?t(n,e):t;r&&e.set(r)}))},t.start=function(t){const n=[];return vt(e,((e,r)=>{if(mt.und(t))n.push(e.start());else{const i=this._getProps(t,e,r);i&&n.push(e.start(i))}})),n},t.stop=function(){return vt(e,(e=>e.stop(...arguments))),this},t.update=function(t){return vt(e,((e,n)=>e.update(this._getProps(t,e,n)))),this};const n=function(e,t,n){return mt.fun(e)?e(n,t):e};return t._getProps=n,t};function di(e,n){const r=mt.fun(e),[[i],o]=function(e,n,r){const i=mt.fun(n)&&n;i&&!r&&(r=[]);const o=t.useMemo((()=>i||3==arguments.length?ci():void 0),[]),a=t.useRef(0),s=Pn(),l=t.useMemo((()=>({ctrls:[],queue:[],flush(e,t){const n=ei(e,t);return a.current>0&&!l.queue.length&&!Object.keys(n).some((t=>!e.springs[t]))?Qr(e,t):new Promise((r=>{ti(e,n),l.queue.push((()=>{r(Qr(e,t))})),s()}))}})),[]),c=t.useRef([...l.ctrls]),d=[],u=Wn(e)||0;function f(e,t){for(let r=e;r<t;r++){const e=c.current[r]||(c.current[r]=new Zr(null,l.flush)),t=i?i(r,e):n[r];t&&(d[r]=Vr(t))}}t.useMemo((()=>{vt(c.current.slice(e,u),(e=>{!function(e,t){e.ref?.delete(e),t?.delete(e)}(e,o),e.stop(!0)})),c.current.length=e,f(u,e)}),[e]),t.useMemo((()=>{f(0,Math.min(u,e))}),r);const h=c.current.map(((e,t)=>ei(e,d[t]))),p=t.useContext(si),g=Wn(p),m=p!==g&&function(e){for(const t in e)return!0;return!1}(p);Fn((()=>{a.current++,l.ctrls=c.current;const{queue:e}=l;e.length&&(l.queue=[],vt(e,(e=>e()))),vt(c.current,((e,t)=>{o?.add(e),m&&e.start({default:p});const n=d[t];n&&(function(e,t){t&&e.ref!==t&&(e.ref?.delete(e),t.add(e),e.ref=t)}(e,n.ref),e.ref?e.queue.push(n):e.start(n))}))})),zn((()=>()=>{vt(l.ctrls,(e=>e.stop(!0)))}));const b=h.map((e=>({...e})));return o?[b,o]:b}(1,r?e:[e],r?n||[]:n);return r||2==arguments.length?[i,o]:i}var ui=class extends Mr{constructor(e,t){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=rn(...t);const n=this._get(),r=tr(n);Un(this,r.create(n))}advance(e){const t=this._get();bt(t,this.get())||(Yn(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&hi(this._active)&&pi(this)}_get(){const e=mt.arr(this.source)?this.source.map(gn):xt(gn(this.source));return this.calc(...e)}_start(){this.idle&&!hi(this._active)&&(this.idle=!1,vt(Kn(this),(e=>{e.done=!1})),Ge.skipAnimation?(Qe.batchedUpdates((()=>this.advance())),pi(this)):Rt.start(this))}_attach(){let e=1;vt(xt(this.source),(t=>{pn(t)&&xn(t,this),Er(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){vt(xt(this.source),(e=>{pn(e)&&wn(e,this)})),this._active.clear(),pi(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=xt(this.source).reduce(((e,t)=>Math.max(e,(Er(t)?t.priority:0)+1)),0))}};function fi(e){return!1!==e.idle}function hi(e){return!e.size||Array.from(e).every(fi)}function pi(e){e.idle||(e.idle=!0,vt(Kn(e),(e=>{e.done=!0})),bn(e,{type:"idle",parent:e}))}Ge.assign({createStringInterpolator:_n,to:(e,t)=>new ui(e,t)});var gi=/^--/;function mi(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||gi.test(e)||vi.hasOwnProperty(e)&&vi[e]?(""+t).trim():t+"px"}var bi={};var vi={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},yi=["Webkit","Ms","Moz","O"];vi=Object.keys(vi).reduce(((e,t)=>(yi.forEach((n=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(n,t)]=e[t])),e)),vi);var xi=/^(matrix|translate|scale|rotate|skew)/,wi=/^(translate)/,$i=/^(rotate|skew)/,ji=(e,t)=>mt.num(e)&&0!==e?e+t:e,Si=(e,t)=>mt.arr(e)?e.every((e=>Si(e,t))):mt.num(e)?e===t:parseFloat(e)===t,ki=class extends Qn{constructor({x:e,y:t,z:n,...r}){const i=[],o=[];(e||t||n)&&(i.push([e||0,t||0,n||0]),o.push((e=>[`translate3d(${e.map((e=>ji(e,"px"))).join(",")})`,Si(e,0)]))),yt(r,((e,t)=>{if("transform"===t)i.push([e||""]),o.push((e=>[e,""===e]));else if(xi.test(t)){if(delete r[t],mt.und(e))return;const n=wi.test(t)?"px":$i.test(t)?"deg":"";i.push(xt(e)),o.push("rotate3d"===t?([e,t,r,i])=>[`rotate3d(${e},${t},${r},${ji(i,n)})`,Si(i,0)]:e=>[`${t}(${e.map((e=>ji(e,n))).join(",")})`,Si(e,t.startsWith("scale")?1:0)])}})),i.length&&(r.transform=new Ci(i,o)),super(r)}},Ci=class extends vn{constructor(e,t){super(),this.inputs=e,this.transforms=t,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return vt(this.inputs,((n,r)=>{const i=gn(n[0]),[o,a]=this.transforms[r](mt.arr(i)?i:n.map(gn));e+=" "+o,t=t&&a})),t?"none":e}observerAdded(e){1==e&&vt(this.inputs,(e=>vt(e,(e=>pn(e)&&xn(e,this)))))}observerRemoved(e){0==e&&vt(this.inputs,(e=>vt(e,(e=>pn(e)&&wn(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),bn(this,e)}};Ge.assign({batchedUpdates:n.unstable_batchedUpdates,createStringInterpolator:_n,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});var Oi=((e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:n=(e=>new Qn(e)),getComponentProps:r=(e=>e)}={})=>{const i={applyAnimatedValues:t,createAnimatedStyle:n,getComponentProps:r},o=e=>{const t=or(e)||"Anonymous";return(e=mt.str(e)?o[e]||(o[e]=nr(e,i)):e[ir]||(e[ir]=nr(e,i))).displayName=`Animated(${t})`,e};return yt(e,((t,n)=>{mt.arr(e)&&(n=or(t)),o[n]=o(t)})),{animated:o}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const n="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,{style:r,children:i,scrollTop:o,scrollLeft:a,viewBox:s,...l}=t,c=Object.values(l),d=Object.keys(l).map((t=>n||e.hasAttribute(t)?t:bi[t]||(bi[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==i&&(e.textContent=i);for(const t in r)if(r.hasOwnProperty(t)){const n=mi(t,r[t]);gi.test(t)?e.style.setProperty(t,n):e.style[t]=n}d.forEach(((t,n)=>{e.setAttribute(t,c[n])})),void 0!==o&&(e.scrollTop=o),void 0!==a&&(e.scrollLeft=a),void 0!==s&&e.setAttribute("viewBox",s)},createAnimatedStyle:e=>new ki(e),getComponentProps:({scrollTop:e,scrollLeft:t,...n})=>n}),Ti=Oi.animated;var Di="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function Ii(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ei=Array.isArray,_i="object"==typeof Di&&Di&&Di.Object===Object&&Di,Mi=_i,Ri="object"==typeof self&&self&&self.Object===Object&&self,Ai=Mi||Ri||Function("return this")(),Ni=Ai.Symbol,Bi=Ni,Fi=Object.prototype,Li=Fi.hasOwnProperty,Pi=Fi.toString,zi=Bi?Bi.toStringTag:void 0;var Hi=function(e){var t=Li.call(e,zi),n=e[zi];try{e[zi]=void 0;var r=!0}catch(e){}var i=Pi.call(e);return r&&(t?e[zi]=n:delete e[zi]),i},Wi=Object.prototype.toString;var Vi=Hi,Yi=function(e){return Wi.call(e)},Ui=Ni?Ni.toStringTag:void 0;var Ki=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Ui&&Ui in Object(e)?Vi(e):Yi(e)};var qi=function(e){return null!=e&&"object"==typeof e},Xi=Ki,Gi=qi;var Zi=function(e){return"symbol"==typeof e||Gi(e)&&"[object Symbol]"==Xi(e)},Qi=Ei,Ji=Zi,eo=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,to=/^\w*$/;var no=function(e,t){if(Qi(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!Ji(e))||(to.test(e)||!eo.test(e)||null!=t&&e in Object(t))};var ro=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},io=Ki,oo=ro;var ao,so=function(e){if(!oo(e))return!1;var t=io(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},lo=Ai["__core-js_shared__"],co=(ao=/[^.]+$/.exec(lo&&lo.keys&&lo.keys.IE_PROTO||""))?"Symbol(src)_1."+ao:"";var uo=function(e){return!!co&&co in e},fo=Function.prototype.toString;var ho=function(e){if(null!=e){try{return fo.call(e)}catch(e){}try{return e+""}catch(e){}}return""},po=so,go=uo,mo=ro,bo=ho,vo=/^\[object .+?Constructor\]$/,yo=Function.prototype,xo=Object.prototype,wo=yo.toString,$o=xo.hasOwnProperty,jo=RegExp("^"+wo.call($o).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var So=function(e){return!(!mo(e)||go(e))&&(po(e)?jo:vo).test(bo(e))},ko=function(e,t){return null==e?void 0:e[t]};var Co=function(e,t){var n=ko(e,t);return So(n)?n:void 0},Oo=Co(Object,"create"),To=Oo;var Do=function(){this.__data__=To?To(null):{},this.size=0};var Io=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Eo=Oo,_o=Object.prototype.hasOwnProperty;var Mo=function(e){var t=this.__data__;if(Eo){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return _o.call(t,e)?t[e]:void 0},Ro=Oo,Ao=Object.prototype.hasOwnProperty;var No=Oo;var Bo=Do,Fo=Io,Lo=Mo,Po=function(e){var t=this.__data__;return Ro?void 0!==t[e]:Ao.call(t,e)},zo=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=No&&void 0===t?"__lodash_hash_undefined__":t,this};function Ho(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ho.prototype.clear=Bo,Ho.prototype.delete=Fo,Ho.prototype.get=Lo,Ho.prototype.has=Po,Ho.prototype.set=zo;var Wo=Ho;var Vo=function(){this.__data__=[],this.size=0};var Yo=function(e,t){return e===t||e!=e&&t!=t},Uo=Yo;var Ko=function(e,t){for(var n=e.length;n--;)if(Uo(e[n][0],t))return n;return-1},qo=Ko,Xo=Array.prototype.splice;var Go=Ko;var Zo=Ko;var Qo=Ko;var Jo=Vo,ea=function(e){var t=this.__data__,n=qo(t,e);return!(n<0)&&(n==t.length-1?t.pop():Xo.call(t,n,1),--this.size,!0)},ta=function(e){var t=this.__data__,n=Go(t,e);return n<0?void 0:t[n][1]},na=function(e){return Zo(this.__data__,e)>-1},ra=function(e,t){var n=this.__data__,r=Qo(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function ia(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ia.prototype.clear=Jo,ia.prototype.delete=ea,ia.prototype.get=ta,ia.prototype.has=na,ia.prototype.set=ra;var oa=ia,aa=Co(Ai,"Map"),sa=Wo,la=oa,ca=aa;var da=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var ua=function(e,t){var n=e.__data__;return da(t)?n["string"==typeof t?"string":"hash"]:n.map},fa=ua;var ha=ua;var pa=ua;var ga=ua;var ma=function(){this.size=0,this.__data__={hash:new sa,map:new(ca||la),string:new sa}},ba=function(e){var t=fa(this,e).delete(e);return this.size-=t?1:0,t},va=function(e){return ha(this,e).get(e)},ya=function(e){return pa(this,e).has(e)},xa=function(e,t){var n=ga(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function wa(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}wa.prototype.clear=ma,wa.prototype.delete=ba,wa.prototype.get=va,wa.prototype.has=ya,wa.prototype.set=xa;var $a=wa,ja=$a;function Sa(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(Sa.Cache||ja),n}Sa.Cache=ja;var ka=Sa;var Ca=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Oa=/\\(\\)?/g,Ta=function(e){var t=ka(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Ca,(function(e,n,r,i){t.push(r?i.replace(Oa,"$1"):n||e)})),t}));var Da=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},Ia=Ei,Ea=Zi,_a=Ni?Ni.prototype:void 0,Ma=_a?_a.toString:void 0;var Ra=function e(t){if("string"==typeof t)return t;if(Ia(t))return Da(t,e)+"";if(Ea(t))return Ma?Ma.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},Aa=Ra;var Na=function(e){return null==e?"":Aa(e)},Ba=Ei,Fa=no,La=Ta,Pa=Na;var za=function(e,t){return Ba(e)?e:Fa(e,t)?[e]:La(Pa(e))},Ha=Zi;var Wa=function(e){if("string"==typeof e||Ha(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},Va=za,Ya=Wa;var Ua=function(e,t){for(var n=0,r=(t=Va(t,e)).length;null!=e&&n<r;)e=e[Ya(t[n++])];return n&&n==r?e:void 0},Ka=Ua;var qa=function(e,t,n){var r=null==e?void 0:Ka(e,t);return void 0===r?n:r},Xa=Ii(qa);const Ga=(e,t,n)=>t?Xa(n,t)||Xa(e,t):n||e,Za=(e,t)=>{const n=t||e.defaultValue;return Xa(e.collections,n)};var Qa;exports.ThemeContextKeys=void 0,(Qa=exports.ThemeContextKeys||(exports.ThemeContextKeys={})).colorScheme="colorScheme",Qa.layout="layout",Qa.textStyleScheme="textStyleScheme",Qa.designTokenScheme="designTokenScheme",Qa.resourceScheme="resourceScheme";const Ja={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},es=e=>t=>{const n=t.theme,r=Za(Ja,n[exports.ThemeContextKeys.colorScheme]);return n.options&&n.options.color?Ga(r,e,n.options.color):Ga(r,e)},ts={Brand:{1:es("Brand.1"),2:es("Brand.2"),3:es("Brand.3"),4:es("Brand.4"),5:es("Brand.5"),6:es("Brand.6")},Primary:es("Primary"),PrimaryDark:es("PrimaryDark"),Secondary:es("Secondary"),Accent:{Light:{1:es("Accent.Light.1"),2:es("Accent.Light.2"),3:es("Accent.Light.3"),4:es("Accent.Light.4"),5:es("Accent.Light.5"),6:es("Accent.Light.6")},Dark:{1:es("Accent.Dark.1"),2:es("Accent.Dark.2"),3:es("Accent.Dark.3")}},Neutral:{1:es("Neutral.1"),2:es("Neutral.2"),3:es("Neutral.3"),4:es("Neutral.4"),5:es("Neutral.5"),6:es("Neutral.6"),7:es("Neutral.7"),8:es("Neutral.8")},Validation:{Green:{Text:es("Validation.Green.Text"),Icon:es("Validation.Green.Icon"),Border:es("Validation.Green.Border"),Background:es("Validation.Green.Background")},Orange:{Text:es("Validation.Orange.Text"),Icon:es("Validation.Orange.Icon"),Border:es("Validation.Orange.Border"),Background:es("Validation.Orange.Background"),Badge:es("Validation.Orange.Badge")},Red:{Text:es("Validation.Red.Text"),Icon:es("Validation.Red.Icon"),Border:es("Validation.Red.Border"),Background:es("Validation.Red.Background")},Blue:{Text:es("Validation.Blue.Text"),Icon:es("Validation.Blue.Icon"),Border:es("Validation.Blue.Border"),Background:es("Validation.Blue.Background")}},Shadow:{Accent:es("Shadow.Accent"),Red:es("Shadow.Red"),Elevation:es("Shadow.Elevation")}},ns={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},rs=e=>Object.keys(ns).reduce(((t,n)=>{const r=ns[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),is={MaxWidth:rs("max-width"),MinWidth:rs("min-width")},os=ns,as=K.default.button`
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

        ${({$highlight:e})=>e&&i.css`
                background-color: ${ts.Neutral[7]};
            `}
    }
`,ss=Y.default.forwardRef(((t,n)=>{var{children:r,focusHighlight:i=!0,focusOutline:o="none",type:a="button"}=t,s=X(t,["children","focusHighlight","focusOutline","type"]);return e.jsx(as,Object.assign({ref:n,$outline:o,$highlight:i,type:a},s,{children:r}))})),ls={OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"},cs={D1:{fontFamily:ls.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:ls.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:ls.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:ls.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:ls.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:ls.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:ls.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:ls.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:ls.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:ls.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:ls.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:ls.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:ls.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:ls.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},ds={D1:{fontFamily:ls.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056,fontVariant:"no-common-ligatures"},D2:{fontFamily:ls.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032,fontVariant:"no-common-ligatures"},D3:{fontFamily:ls.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},D4:{fontFamily:ls.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},DBody:{fontFamily:ls.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75,fontVariant:"no-common-ligatures"},H1:{fontFamily:ls.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032,fontVariant:"no-common-ligatures"},H2:{fontFamily:ls.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25,fontVariant:"no-common-ligatures"},H3:{fontFamily:ls.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H4:{fontFamily:ls.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75,fontVariant:"no-common-ligatures"},H5:{fontFamily:ls.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,fontVariant:"no-common-ligatures"},H6:{fontFamily:ls.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012,fontVariant:"no-common-ligatures"},Body:{fontFamily:ls.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75,fontVariant:"no-common-ligatures"},BodySmall:{fontFamily:ls.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014,fontVariant:"no-common-ligatures"},XSmall:{fontFamily:ls.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012,fontVariant:"no-common-ligatures"}},us={collections:{base:cs,oneservice:{D1:{fontFamily:ls.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:ls.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:ls.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:ls.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:ls.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:ls.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:ls.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:ls.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:ls.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:ls.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:ls.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:ls.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:ls.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:ls.OpenSans.Regular,fontSize:.75,lineHeight:1.125}},plusJakartaSans:ds},defaultValue:"base"},fs=e=>t=>{const n=t.theme,r=Za(us,n[exports.ThemeContextKeys.textStyleScheme]);return n.options&&n.options.textStyle?Ga(r,e,n.options.textStyle):Ga(r,e)},hs={D1:{fontFamily:fs("D1.fontFamily"),fontSize:fs("D1.fontSize"),fontWeight:fs("D1.fontWeight"),lineHeight:fs("D1.lineHeight"),letterSpacing:fs("D1.letterSpacing"),fontVariant:fs("D1.fontVariant")},D2:{fontFamily:fs("D2.fontFamily"),fontSize:fs("D2.fontSize"),fontWeight:fs("D2.fontWeight"),lineHeight:fs("D2.lineHeight"),letterSpacing:fs("D2.letterSpacing"),fontVariant:fs("D2.fontVariant")},D3:{fontFamily:fs("D3.fontFamily"),fontSize:fs("D3.fontSize"),fontWeight:fs("D3.fontWeight"),lineHeight:fs("D3.lineHeight"),letterSpacing:fs("D3.letterSpacing"),fontVariant:fs("D3.fontVariant")},D4:{fontFamily:fs("D4.fontFamily"),fontSize:fs("D4.fontSize"),fontWeight:fs("D4.fontWeight"),lineHeight:fs("D4.lineHeight"),letterSpacing:fs("D4.letterSpacing"),fontVariant:fs("D4.fontVariant")},DBody:{fontFamily:fs("DBody.fontFamily"),fontSize:fs("DBody.fontSize"),fontWeight:fs("DBody.fontWeight"),lineHeight:fs("DBody.lineHeight"),letterSpacing:fs("DBody.letterSpacing"),fontVariant:fs("DBody.fontVariant")},H1:{fontFamily:fs("H1.fontFamily"),fontSize:fs("H1.fontSize"),fontWeight:fs("H1.fontWeight"),lineHeight:fs("H1.lineHeight"),letterSpacing:fs("H1.letterSpacing"),fontVariant:fs("H1.fontVariant")},H2:{fontFamily:fs("H2.fontFamily"),fontSize:fs("H2.fontSize"),fontWeight:fs("H2.fontWeight"),lineHeight:fs("H2.lineHeight"),letterSpacing:fs("H2.letterSpacing"),fontVariant:fs("H2.fontVariant")},H3:{fontFamily:fs("H3.fontFamily"),fontSize:fs("H3.fontSize"),fontWeight:fs("H3.fontWeight"),lineHeight:fs("H3.lineHeight"),letterSpacing:fs("H3.letterSpacing"),fontVariant:fs("H3.fontVariant")},H4:{fontFamily:fs("H4.fontFamily"),fontSize:fs("H4.fontSize"),fontWeight:fs("H4.fontWeight"),lineHeight:fs("H4.lineHeight"),letterSpacing:fs("H4.letterSpacing"),fontVariant:fs("H4.fontVariant")},H5:{fontFamily:fs("H5.fontFamily"),fontSize:fs("H5.fontSize"),fontWeight:fs("H5.fontWeight"),lineHeight:fs("H5.lineHeight"),letterSpacing:fs("H5.letterSpacing"),fontVariant:fs("H5.fontVariant")},H6:{fontFamily:fs("H6.fontFamily"),fontSize:fs("H6.fontSize"),fontWeight:fs("H6.fontWeight"),lineHeight:fs("H6.lineHeight"),letterSpacing:fs("H6.letterSpacing"),fontVariant:fs("H6.fontVariant")},Body:{fontFamily:fs("Body.fontFamily"),fontSize:fs("Body.fontSize"),fontWeight:fs("Body.fontWeight"),lineHeight:fs("Body.lineHeight"),letterSpacing:fs("Body.letterSpacing"),fontVariant:fs("Body.fontVariant")},BodySmall:{fontFamily:fs("BodySmall.fontFamily"),fontSize:fs("BodySmall.fontSize"),fontWeight:fs("BodySmall.fontWeight"),lineHeight:fs("BodySmall.lineHeight"),letterSpacing:fs("BodySmall.letterSpacing"),fontVariant:fs("BodySmall.fontVariant")},XSmall:{fontFamily:fs("XSmall.fontFamily"),fontSize:fs("XSmall.fontSize"),fontWeight:fs("XSmall.fontWeight"),lineHeight:fs("XSmall.lineHeight"),letterSpacing:fs("XSmall.letterSpacing"),fontVariant:fs("XSmall.fontVariant")}},ps=[ls.OpenSans,ls.PlusJakartaSans],gs=(e,t)=>{switch(t){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},ms=(e,t)=>n=>{var r;const o=hs[e].fontFamily(n),a=hs[e].fontWeight(n),s=ps.find((e=>Object.values(e).includes(o)));return s?i.css`
                font-family: ${gs(s,t)||gs(s,a)||o};
                font-weight: normal !important;
            `:i.css`
            font-family: ${o};
            font-weight: ${null!==(r=bs(t)||a)&&void 0!==r?r:"normal"};
        `},bs=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},vs=e=>{if(e>0)return i.css`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},ys={getFontFamily:ms,getTextStyle:(e,t,n=!1)=>r=>{const o=hs[e],a=o.fontSize(r);return i.css`
            ${ms(e,t)}
            font-size: ${a}rem !important;
            line-height: ${o.lineHeight}rem !important;
            letter-spacing: ${o.letterSpacing(r)||0}rem !important;
            font-variant: ${o.fontVariant(r)||"normal"};
            ${(()=>{const e=n?1.05:0;return i.css`
                margin-bottom: ${a*e}rem;
            `})()}
        `},getDisplayStyle:(e=!1,t=!1,n=void 0)=>t?i.css`
            display: block;
            ${vs(n)}
        `:e?i.css`
            display: inline;
        `:i.css`
            display: block;
            ${vs(n)}
        `};var xs;exports.Text=void 0,(xs=exports.Text||(exports.Text={})).D1=K.default.h1`
        ${e=>i.css`
                ${ys.getTextStyle("D1",e.weight,e.paragraph)}
                color: ${ts.Neutral[1]};
                ${ys.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,xs.D2=K.default.h1`
        ${e=>i.css`
                ${ys.getTextStyle("D2",e.weight,e.paragraph)}
                color: ${ts.Neutral[1]};
                ${ys.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,xs.D3=K.default.h1`
        ${e=>i.css`
                ${ys.getTextStyle("D3",e.weight,e.paragraph)}
                color: ${ts.Neutral[1]};
                ${ys.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,xs.D4=K.default.h1`
        ${e=>i.css`
                ${ys.getTextStyle("D4",e.weight,e.paragraph)}
                color: ${ts.Neutral[1]};
                ${ys.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,xs.DBody=K.default.h1`
        ${e=>i.css`
                ${ys.getTextStyle("DBody",e.weight,e.paragraph)}
                color: ${ts.Neutral[1]};
                ${ys.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,xs.H1=K.default.h1`
        ${e=>i.css`
                ${ys.getTextStyle("H1",e.weight,e.paragraph)}
                color: ${ts.Neutral[1]};
                ${ys.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,xs.H2=K.default.h2`
        ${e=>i.css`
                ${ys.getTextStyle("H2",e.weight,e.paragraph)}
                color: ${ts.Neutral[1]};
                ${ys.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,xs.H3=K.default.h3`
        ${e=>i.css`
                ${ys.getTextStyle("H3",e.weight,e.paragraph)}
                color: ${ts.Neutral[1]};
                ${ys.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,xs.H4=K.default.h4`
        ${e=>i.css`
                ${ys.getTextStyle("H4",e.weight,e.paragraph)}
                color: ${ts.Neutral[1]};
                ${ys.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,xs.H5=K.default.h5`
        ${e=>i.css`
                ${ys.getTextStyle("H5",e.weight,e.paragraph)}
                color: ${ts.Neutral[1]};
                ${ys.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,xs.H6=K.default.h6`
        ${e=>i.css`
                ${ys.getTextStyle("H6",e.weight,e.paragraph)}
                color: ${ts.Neutral[1]};
                ${ys.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,xs.Body=K.default.p`
        ${e=>i.css`
                ${ys.getTextStyle("Body",e.weight,e.paragraph)}
                color: ${ts.Neutral[1]};
                ${ys.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,xs.BodySmall=K.default.p`
        ${e=>i.css`
                ${ys.getTextStyle("BodySmall",e.weight,e.paragraph)}
                color: ${ts.Neutral[1]};
                ${ys.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,xs.XSmall=K.default.span`
        ${e=>i.css`
                ${ys.getTextStyle("XSmall",e.weight,e.paragraph)}
                color: ${ts.Neutral[1]};
                ${ys.getDisplayStyle(e.inline,e.paragraph,e.maxLines)}
            `}
    `,xs.Hyperlink={Default:e=>js(Object.assign(Object.assign({},e),{textStyle:"Body"})),Small:e=>js(Object.assign(Object.assign({},e),{textStyle:"BodySmall"}))};const ws=K.default.a`
    ${e=>i.css`
            ${ys.getTextStyle(e.textStyle,e.weight)}
            color: ${ts.Primary};
            text-decoration: none;

            :hover,
            :active,
            :focus {
                color: ${ts.Secondary};

                svg {
                    color: ${ts.Secondary};
                }
            }
        `}
`,$s=K.default(o.ExternalIcon)`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    vertical-align: middle;
`,js=t=>{var{external:n=!1,children:r}=t,i=X(t,["external","children"]);return e.jsxs(ws,Object.assign({},i,{children:[r,n&&e.jsx($s,{})]}))},Ss={Base:"all 300ms cubic-bezier(0.21, 0.79, 0.53, 1)",Custom:e=>`all ${e}ms cubic-bezier(0.21, 0.79, 0.53, 1)`},ks=K.default.div`
    background-color: ${ts.Neutral[8]} !important;
    border-top: 1px solid ${ts.Neutral[6]};
    padding: ${e=>e.$isCollapsed?"0 0 1rem":"0"};

    ${is.MaxWidth.mobileL} {
        padding: ${e=>e.$isCollapsed?".25rem 0 1.05rem":"0.5rem 0"};
    }
`,Cs=K.default.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    cursor: ${e=>e.$isCollapsed?"pointer":"unset"};
`,Os=e=>i.css`
    flex: 1;
    margin: 1rem 2rem ${e?.5:1}rem 0;
    transition: ${Ss.Base};
`,Ts=K.default(exports.Text.H3)`
    ${e=>Os(e.$isCollapsed)}
`,Ds=K.default(exports.Text.H4)`
    ${e=>Os(e.$isCollapsed)}
`,Is=K.default(ss)`
    height: 3.25rem;
    width: 3.25rem;
    padding: 1rem;
    transform: rotate(${e=>e.$isCollapsed?0:180}deg);
    transition: transform 300ms ease-in-out;
    margin: auto -1rem auto 0;
`,Es=K.default(r.ChevronUpIcon)`
    height: 1.25rem;
    width: 1.25rem;
    color: ${ts.Primary};
`,_s=K.default(Ti.div)`
    overflow: hidden;
`,Ms=K.default.div`
    display: inline-block;
    padding-right: 4rem;

    ${is.MaxWidth.tablet} {
        padding-right: 0;
    }
`;const Rs=t.forwardRef((function(n,r){var{title:i,children:o,expanded:a,type:s="default",collapsible:l=!0}=n,c=X(n,["title","children","expanded","type","collapsible"]);const d=t.useRef(),u=t.useContext(q),[f,h]=t.useState(!l||(null!=a?a:u)),[p,g]=t.useState(!1),m=c["data-testid"]||"accordion-item",b=qe(),v=b.ref;t.useImperativeHandle(r,(()=>Object.assign(d.current,{expand(){h(!0)},collapse(){h(!1)},isExpanded:()=>f})),[f]),t.useEffect((()=>{p&&h(!l||u)}),[u]),t.useEffect((()=>{p&&h(a)}),[a]),t.useEffect((()=>{g(!0)}),[]);const y={height:f?b.height:0},x=di(y);return e.jsxs(ks,Object.assign({"data-testid":m,className:c.className,$isCollapsed:f,ref:d},{children:[e.jsxs(Cs,Object.assign({$isCollapsed:l,onClick:l?e=>{e.preventDefault(),h((e=>!e))}:void 0},{children:["string"!=typeof i?i:"small"===s?e.jsx(Ds,Object.assign({"data-testid":`${m}-title`,$isCollapsed:f},{children:i})):e.jsx(Ts,Object.assign({"data-testid":`${m}-title`,$isCollapsed:f},{children:i})),l&&e.jsx(Is,Object.assign({"data-testid":`${m}-expand-collapse-button`,$isCollapsed:f,focusHighlight:!1,focusOutline:"browser","aria-label":f?"Collapse":"Expand"},{children:e.jsx(Es,{})}))]})),e.jsx(_s,Object.assign({style:p?x:y,$isCollapsed:f,"data-testid":`${m}-expandable-container`},{children:e.jsx(Ms,Object.assign({ref:v,id:"content-container"},{children:o}))}))]}))})),As={collections:{base:{InputBoxShadow:i.css`
        inset 0 0 4px 0px ${ts.Shadow.Accent}
    `,InputErrorBoxShadow:i.css`
        inset 0 0 4px 0px ${ts.Shadow.Red}
    `,ElevationBoxShadow:i.css`
      0px 2px 8px ${ts.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F9F6FF",Hover:"#E8E1F5"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}},rbs:{InputBoxShadow:i.css`
        inset 0 0 3px 0px ${ts.Shadow.Accent}
    `,InputErrorBoxShadow:i.css`
        inset 0 0 3px 0px ${ts.Shadow.Red}
    `,ElevationBoxShadow:i.css`
      0px 2px 8px ${ts.Shadow.Elevation}
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},Ns=e=>t=>{var n;const r=t.theme,i=Za(As,r[exports.ThemeContextKeys.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?Ga(i,e,r.options.designToken):Ga(i,e)},Bs={InputBoxShadow:Ns("InputBoxShadow"),InputErrorBoxShadow:Ns("InputErrorBoxShadow"),ElevationBoxShadow:Ns("ElevationBoxShadow"),Table:{Header:Ns("Table.Header"),Cell:{Primary:Ns("Table.Cell.Primary"),Secondary:Ns("Table.Cell.Secondary"),Selected:Ns("Table.Cell.Selected"),Hover:Ns("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:Ns("Button.Danger.BackgroundColor"),Hover:Ns("Button.Danger.Hover"),Primary:Ns("Button.Danger.Primary"),Border:Ns("Button.Danger.Border")}}},Fs=K.default.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`,Ls=i.keyframes`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Ps=K.default.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
    margin: ${e=>e.$borderWidth}px;
    border-width: ${e=>e.$borderWidth}px;
    border-style: solid;
    border-radius: 50%;
    border-color: ${e=>e.$color||ts.Neutral[8](e)}
        transparent transparent transparent;
    animation: ${Ls} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,zs=K.default(Ps)`
    animation-delay: -0.45s;
`,Hs=K.default(Ps)`
    animation-delay: -0.3s;
`,Ws=K.default(Ps)`
    animation-delay: -0.15s;
`,Vs=({color:t,className:n,size:r=18})=>e.jsxs(Fs,Object.assign({className:n,$size:r,$color:t,"data-testid":"component-loading-spinner"},{children:[e.jsx(Ps,{id:"inner1",$size:r-2,$borderWidth:2,$color:t}),e.jsx(zs,{id:"inner2",$size:r-2,$borderWidth:2,$color:t}),e.jsx(Hs,{id:"inner3",$size:r-2,$borderWidth:2,$color:t}),e.jsx(Ws,{id:"inner4",$size:r-2,$borderWidth:2,$color:t})]}));var Ys;exports.RedirectScope=void 0,(Ys=exports.RedirectScope||(exports.RedirectScope={}))[Ys.Subpage=0]="Subpage",Ys[Ys.Domain=1]="Domain";const Us=K.default.button`
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
    ${e=>{switch(e.$buttonStyle){case"secondary":return i.css`
                    background-color: ${ts.Neutral[8]};
                    border: 1px solid
                        ${e.$buttonIsDanger?Bs.Button.Danger.Border:ts.Primary};

                    color: ${e.$buttonIsDanger?Bs.Button.Danger.Primary:ts.Primary};
                `;case"light":return i.css`
                    background-color: ${ts.Neutral[8]};
                    border: 1px solid ${ts.Neutral[5]};

                    color: ${e.$buttonIsDanger?Bs.Button.Danger.Primary:ts.Primary};
                `;case"disabled":return i.css`
                    background-color: ${ts.Neutral[6]};
                    border: 1px solid transparent;
                    cursor: not-allowed;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${ts.Neutral[3]};
                `;case"link":return i.css`
                    background-color: transparent;
                    border: none;
                    border-radius: unset;

                    &:hover {
                        box-shadow: none;
                    }

                    color: ${e.$buttonIsDanger?Bs.Button.Danger.Primary:ts.Primary};
                    :hover,
                    :active,
                    :focus {
                        color: ${e.$buttonIsDanger?Bs.Button.Danger.Hover:ts.Secondary};
                    }
                `;default:return i.css`
                    background-color: ${e.$buttonIsDanger?Bs.Button.Danger.BackgroundColor:ts.Primary};
                    border: 1px solid transparent;

                    ${is.MaxWidth.mobileL} {
                        width: 100%;
                    }

                    color: ${ts.Neutral[8]};
                `}}}

    // -----------------------------------------------------------------------------
	// BUTTON SIZE + TEXT SIZE
	// -----------------------------------------------------------------------------
	${e=>"small"===e.$buttonSizeStyle?i.css`
                    height: 2.5rem;
                    ${ys.getTextStyle("H5","semibold")}

                    ${is.MaxWidth.mobileS} {
                        height: auto;
                    }
                `:i.css`
                    height: 3rem;
                    ${ys.getTextStyle("H4","semibold")}

                    ${is.MaxWidth.mobileS} {
                        height: auto;
                    }
                `}
`,Ks=K.default(Vs)`
    ${e=>{let t=e.$buttonIsDanger?Bs.Button.Danger.Primary:ts.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=ts.Neutral[3](e);break;default:t=ts.Neutral[8](e)}return i.css`
            margin-right: ${e.$buttonWithIcon?0:"0.5rem"};

            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,qs={Default:Y.default.forwardRef(((t,n)=>{const{children:r,disabled:i=!1,loading:o=!1,styleType:a="default",danger:s=!1}=t,l=X(t,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":a,$buttonSizeStyle:"default",$buttonIsDanger:s};return e.jsxs(Us,Object.assign({ref:n,"data-testid":l["data-testid"]||"button",disabled:i},c,l,{children:[o&&e.jsx(Ks,Object.assign({},c)),e.jsx("span",{children:r})]}))})),Small:Y.default.forwardRef(((t,n)=>{const{children:r,disabled:i=!1,loading:o=!1,styleType:a="default",danger:s=!1}=t,l=X(t,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":a,$buttonSizeStyle:"small",$buttonIsDanger:s};return e.jsxs(Us,Object.assign({ref:n,"data-testid":l["data-testid"]||"button",disabled:i},c,l,{children:[o&&e.jsx(Ks,Object.assign({},c,{size:16})),e.jsx("span",{children:r})]}))}))},Xs=K.default.div`
    width: 100%;
    border-bottom: 1px solid ${ts.Neutral[6]};
`,Gs=K.default.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding-bottom: 1rem;

    ${is.MaxWidth.mobileL} {
        justify-content: flex-end;
    }

    ${e=>{if(!e.$showTitleInMobile&&!e.$hasExpandAll)return i.css`
                ${is.MaxWidth.mobileL} {
                    display: none;
                }
            `}}
`,Zs=K.default(exports.Text.H2)`
    display: flex;
    align-self: flex-start;
    flex: 1;
    ${is.MaxWidth.mobileL} {
        text-align: left;
    }

    ${e=>{if(!e.$showInMobile)return i.css`
                ${is.MaxWidth.mobileL} {
                    display: none;
                    visibility: hidden;
                }
            `}}
`,Qs=K.default(qs.Small)`
    padding: 1.75rem 1rem; // larger clickable area
    margin: -1rem -1rem -1rem 0px;
    white-space: nowrap;
`,Js=Object.assign((({children:n,title:r,enableExpandAll:i=!0,initialDisplay:o="expand-all",showTitleInMobile:a=!1,className:s})=>{const[l,c]=t.useState("expand-all"===o),d=e=>{e.preventDefault(),c((e=>!e))};return e.jsx(q.Provider,Object.assign({value:l},{children:e.jsxs(Xs,Object.assign({className:s},{children:[r||i?e.jsxs(Gs,Object.assign({$showTitleInMobile:a,$hasExpandAll:i},{children:[r&&e.jsx(Zs,Object.assign({$showInMobile:a,"data-testid":"accordion-title"},{children:r})),i&&e.jsx(Qs,Object.assign({"data-testid":"accordion-expand-collapse-button",onClick:d,styleType:"link",type:"button"},{children:l?"Hide all":"Show all"}))]})):null,n]}))}))}),{Item:Rs}),el=e=>{const{textSize:t}=e||{};return i.css`
        // Text styling
        ${t&&ys.getTextStyle(t,"regular")}

        strong {
            font-family: ${ls.OpenSans.Semibold};
            ${t&&ys.getTextStyle(t,"semibold")}
        }

        p {
            margin: 0;
        }

        // Link styling
        a {
            font-family: ${ls.OpenSans.Semibold};
            ${t&&ys.getTextStyle(t,"semibold")}
            color: ${ts.Primary};
            text-decoration: none;

            svg {
                color: ${ts.Primary};
                height: 1rem;
                width: 1rem;
                margin-left: 0.4rem;
                vertical-align: baseline;
            }

            :hover,
            :active,
            :visited,
            :focus {
                color: ${ts.Secondary};

                svg {
                    color: ${ts.Secondary};
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
    `},tl=K.default.div`
    padding: 0.5rem 1rem 0.5rem 0.875rem;
    display: flex;

    ${e=>{let t,n;switch(e.$type){case"error":t=ts.Validation.Red.Background(e),n=ts.Validation.Red.Border(e);break;case"success":t=ts.Validation.Green.Background(e),n=ts.Validation.Green.Border(e);break;case"warning":default:t=ts.Validation.Orange.Background(e),n=ts.Validation.Orange.Border(e);break;case"info":t=ts.Validation.Blue.Background(e),n=ts.Validation.Blue.Border(e);break;case"description":t=ts.Neutral[7](e),n=ts.Neutral[4](e)}return i.css`
            background: ${t};
            border-left: 2px solid ${n};
        `}}

    color: ${ts.Neutral[1]};
    ${e=>"small"===e.$sizeType?el({textSize:"H6"}):el({textSize:"BodySmall"})}
`,nl=K.default.div`
    display: flex;
    margin-right: 0.5rem;

    // adds extra spacing to align the small icon with text
    ${e=>"small"===e.$sizeType&&i.css`
            align-items: center;
            height: 1lh;
        `}

    ${e=>{let t;const n="small"===e.$sizeType?"1.25rem":"1.5rem";switch(e.$type){case"error":t=ts.Validation.Red.Icon(e);break;case"success":t=ts.Validation.Green.Icon(e);break;case"warning":default:t=ts.Validation.Orange.Icon(e);break;case"info":t=ts.Validation.Blue.Icon(e);break;case"description":t=ts.Neutral[4](e)}return i.css`
            svg {
                color: ${t};
                width: ${n};
                height: ${n};
            }
        `}}
`,rl=K.default(exports.Text.Hyperlink.Small)`
    ${e=>"small"===e.$sizeType?i.css`
                ${ys.getTextStyle("H6","semibold")}
                margin-top: 0.25rem;
            `:i.css`
                ${ys.getTextStyle("H5","semibold")}
                margin-top: 0.5rem;
            `}
    display: flex;
    align-items: center;
    align-self: flex-start;
    color: ${ts.Primary};

    svg {
        height: 1rem;
        width: 1rem;
        margin-left: 0.25rem;
        color: ${ts.Primary};
    }
`,il=K.default.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-wrap: anywhere;
`,ol=K.default.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    ${e=>{if(e.$showMore&&e.$hasActionLink)return"\n            margin-bottom: 0.5rem;\n        "}}
    ${e=>{const t="linear-gradient(to bottom, black 50%, transparent 100%)";if(!e.$showMore&&e.$maxCollapsedHeight)return`\n                max-height: ${e.$maxCollapsedHeight}px;\n\t\t\t\toverflow: hidden;\n                -webkit-mask-image: ${t};\n                mask-image: ${t};\n\t\t\t`}}
`,al=K.default.button`
    ${e=>"small"===e.$sizeType?i.css`
                ${ys.getTextStyle("H6","semibold")}
            `:i.css`
                ${ys.getTextStyle("H5","semibold")}
            `}

    display: flex;
    align-items: center;
    align-self: flex-start;
    gap: 0.25rem;
    margin-top: 0.5rem;

    cursor: pointer;
    user-select: none;
    border: none;
    background: transparent;

    color: ${ts.Primary};
`,sl=K.default(u.ChevronDownIcon)`
    transform: rotate(${e=>e.$expanded?-180:0}deg);
    transition: transform 300ms ease-in-out;
`,ll=n=>{var{type:r,className:i,children:o,actionLink:u,actionLinkIcon:f,sizeType:h="default",showIcon:p=!1,customIcon:g,maxCollapsedHeight:m}=n,b=X(n,["type","className","children","actionLink","actionLinkIcon","sizeType","showIcon","customIcon","maxCollapsedHeight"]);const[v,y]=t.useState(!1),[x,w]=t.useState(!1),{height:$,ref:j}=qe();t.useEffect((()=>{S()}),[m,$]);const S=()=>{y(!m),w(k())},k=()=>!!m&&$>m;return e.jsxs(tl,Object.assign({className:i,$type:r,$sizeType:h,"data-testid":b["data-testid"]},{children:[p&&e.jsx(nl,Object.assign({$sizeType:h,$type:r},{children:(()=>{if(r&&g)return g;switch(r){case"success":return e.jsx(d.TickCircleFillIcon,{});case"warning":return e.jsx(l.ExclamationTriangleFillIcon,{});case"error":return e.jsx(s.ExclamationCircleFillIcon,{});case"info":case"description":return e.jsx(c.ICircleFillIcon,{});default:return null}})()})),e.jsxs(il,{children:[e.jsxs(ol,Object.assign({$maxCollapsedHeight:k()?m:void 0,$showMore:v,$hasActionLink:!!u},{children:[e.jsx("div",Object.assign({ref:j},{children:o})),u&&e.jsxs(rl,Object.assign({"data-testid":"action-link",$type:r,$sizeType:h},u,{children:[u.children,f||e.jsx(a.ArrowRightIcon,{})]}))]})),x&&e.jsxs(al,Object.assign({$sizeType:h,$type:r,type:"button",onClick:()=>y(!v)},{children:["Show ",v?"less":"more",e.jsx(sl,{$expanded:v})]}))]})]}))},cl=t.lazy((()=>G(void 0,void 0,void 0,(function*(){return{default:(yield Promise.resolve().then((function(){return require("./lottie-animation.b9d011a0.js")}))).LottieSpinner}})))),dl=()=>e.jsx("div",{style:{height:"200px",width:"200px"}}),ul=K.default.div`
    margin: 0 auto;
    padding: 2rem 1rem;
`,fl=t.lazy((()=>G(void 0,void 0,void 0,(function*(){return{default:(yield Promise.resolve().then((function(){return require("./lottie-animation.bb23723c.js")}))).LottieLoadingDots}})))),hl=n=>e.jsx(gl,Object.assign({},n,{children:e.jsx(t.Suspense,Object.assign({fallback:e.jsx(pl,{})},{children:e.jsx(fl,{})}))})),pl=()=>e.jsx("div",{style:{height:"16px",width:"64px"}}),gl=K.default.div`
    margin: 0 auto;
`,ml={[exports.ThemeContextKeys.colorScheme]:"base",[exports.ThemeContextKeys.textStyleScheme]:"base",[exports.ThemeContextKeys.designTokenScheme]:"base",[exports.ThemeContextKeys.resourceScheme]:"base"},bl={[exports.ThemeContextKeys.colorScheme]:"bookingsg",[exports.ThemeContextKeys.textStyleScheme]:"base",[exports.ThemeContextKeys.designTokenScheme]:"base",[exports.ThemeContextKeys.resourceScheme]:"bookingsg"},vl={[exports.ThemeContextKeys.colorScheme]:"rbs",[exports.ThemeContextKeys.textStyleScheme]:"base",[exports.ThemeContextKeys.designTokenScheme]:"rbs",[exports.ThemeContextKeys.resourceScheme]:"rbs"},yl={[exports.ThemeContextKeys.colorScheme]:"mylegacy",[exports.ThemeContextKeys.textStyleScheme]:"base",[exports.ThemeContextKeys.designTokenScheme]:"base",[exports.ThemeContextKeys.resourceScheme]:"mylegacy"},xl={[exports.ThemeContextKeys.colorScheme]:"ccube",[exports.ThemeContextKeys.textStyleScheme]:"base",[exports.ThemeContextKeys.designTokenScheme]:"base",[exports.ThemeContextKeys.resourceScheme]:"ccube"},wl={[exports.ThemeContextKeys.colorScheme]:"oneservice",[exports.ThemeContextKeys.textStyleScheme]:"oneservice",[exports.ThemeContextKeys.designTokenScheme]:"base",[exports.ThemeContextKeys.resourceScheme]:"base"},$l=t.lazy((()=>G(void 0,void 0,void 0,(function*(){return{default:(yield Promise.resolve().then((function(){return require("./lottie-animation.3b0576e8.js")}))).LottieLoadingDotsSpinner}})))),jl=n=>{var{color:r}=n,o=X(n,["color"]);const a=i.useTheme(),s=r||ts.Primary({theme:a||ml});return e.jsx(kl,Object.assign({},o,{children:e.jsx(t.Suspense,Object.assign({fallback:e.jsx(Sl,{})},{children:e.jsx($l,{color:s})}))}))},Sl=()=>e.jsx("div",{style:{height:"200px",width:"200px"}}),kl=K.default.div`
    margin: 0 auto;
`;var Cl,Ol={exports:{}};Cl=e=>(()=>{var t={"./node_modules/css-mediaquery/index.js":
/*!**********************************************!*\
	  !*** ./node_modules/css-mediaquery/index.js ***!
	  \**********************************************/(e,t)=>{t.match=function(e,t){return s(e).some((function(e){var n=e.inverse,r="all"===e.type||t.type===e.type;if(r&&n||!r&&!n)return!1;var i=e.expressions.every((function(e){var n=e.feature,r=e.modifier,i=e.value,o=t[n];if(!o)return!1;switch(n){case"orientation":case"scan":return o.toLowerCase()===i.toLowerCase();case"width":case"height":case"device-width":case"device-height":i=d(i),o=d(o);break;case"resolution":i=c(i),o=c(o);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":i=l(i),o=l(o);break;case"grid":case"color":case"color-index":case"monochrome":i=parseInt(i,10)||1,o=parseInt(o,10)||0}switch(r){case"min":return o>=i;case"max":return o<=i;default:return o===i}}));return i&&!n||!i&&n}))},t.parse=s;var n=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,r=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,i=/^(?:(min|max)-)?(.+)/,o=/(em|rem|px|cm|mm|in|pt|pc)?$/,a=/(dpi|dpcm|dppx)?$/;function s(e){return e.split(",").map((function(e){var t=(e=e.trim()).match(n),o=t[1],a=t[2],s=t[3]||"",l={};return l.inverse=!!o&&"not"===o.toLowerCase(),l.type=a?a.toLowerCase():"all",s=s.match(/\([^\)]+\)/g)||[],l.expressions=s.map((function(e){var t=e.match(r),n=t[1].toLowerCase().match(i);return{modifier:n[1],feature:n[2],value:t[2]}})),l}))}function l(e){var t,n=Number(e);return n||(n=(t=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/t[2]),n}function c(e){var t=parseFloat(e);switch(String(e).match(a)[1]){case"dpcm":return t/2.54;case"dppx":return 96*t;default:return t}}function d(e){var t=parseFloat(e);switch(String(e).match(o)[1]){case"em":case"rem":return 16*t;case"cm":return 96*t/2.54;case"mm":return 96*t/2.54/10;case"in":return 96*t;case"pt":return 72*t;case"pc":return 72*t/12;default:return t}}},"./node_modules/hyphenate-style-name/index.js":
/*!****************************************************!*\
	  !*** ./node_modules/hyphenate-style-name/index.js ***!
	  \****************************************************/(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var r=/[A-Z]/g,i=/^ms-/,o={};function a(e){return"-"+e.toLowerCase()}const s=function(e){if(o.hasOwnProperty(e))return o[e];var t=e.replace(r,a);return o[e]=i.test(t)?"-"+t:t}},"./node_modules/matchmediaquery/index.js":
/*!***********************************************!*\
	  !*** ./node_modules/matchmediaquery/index.js ***!
	  \***********************************************/(e,t,n)=>{var r=n(/*! css-mediaquery */"./node_modules/css-mediaquery/index.js").match,i="undefined"!=typeof window?window.matchMedia:null;function o(e,t,n){var o=this;if(i&&!n){var a=i.call(window,e);this.matches=a.matches,this.media=a.media,a.addListener(s)}else this.matches=r(e,t),this.media=e;function s(e){o.matches=e.matches,o.media=e.media}this.addListener=function(e){a&&a.addListener(e)},this.removeListener=function(e){a&&a.removeListener(e)},this.dispose=function(){a&&a.removeListener(s)}}e.exports=function(e,t,n){return new o(e,t,n)}},"./node_modules/object-assign/index.js":
/*!*********************************************!*\
	  !*** ./node_modules/object-assign/index.js ***!
	  \*********************************************/e=>{
/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map((function(e){return t[e]}));if("0123456789"!==r.join(""))return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach((function(e){i[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},i)).join("")}catch(e){return!1}}()?Object.assign:function(e,i){for(var o,a,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var c in o=Object(arguments[l]))n.call(o,c)&&(s[c]=o[c]);if(t){a=t(o);for(var d=0;d<a.length;d++)r.call(o,a[d])&&(s[a[d]]=o[a[d]])}}return s}},"./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
	  !*** ./node_modules/prop-types/checkPropTypes.js ***!
	  \***************************************************/(e,t,n)=>{var r,i=n(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),o={},a=n(/*! ./lib/has */"./node_modules/prop-types/lib/has.js");function s(e,t,n,s,l){for(var c in e)if(a(e,c)){var d;try{if("function"!=typeof e[c]){var u=Error((s||"React class")+": "+n+" type `"+c+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[c]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw u.name="Invariant Violation",u}d=e[c](t,c,s,n,null,i)}catch(e){d=e}if(!d||d instanceof Error||r((s||"React class")+": type specification of "+n+" `"+c+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof d+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),d instanceof Error&&!(d.message in o)){o[d.message]=!0;var f=l?l():"";r("Failed "+n+" type: "+d.message+(null!=f?f:""))}}}r=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},s.resetWarningCache=function(){o={}},e.exports=s},"./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
	  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
	  \************************************************************/(e,t,n)=>{var r,i=n(/*! react-is */"./node_modules/react-is/index.js"),o=n(/*! object-assign */"./node_modules/object-assign/index.js"),a=n(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),s=n(/*! ./lib/has */"./node_modules/prop-types/lib/has.js"),l=n(/*! ./checkPropTypes */"./node_modules/prop-types/checkPropTypes.js");function c(){return null}r=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},e.exports=function(e,t){var n="function"==typeof Symbol&&Symbol.iterator,d="@@iterator",u="<<anonymous>>",f={array:m("array"),bigint:m("bigint"),bool:m("boolean"),func:m("function"),number:m("number"),object:m("object"),string:m("string"),symbol:m("symbol"),any:g(c),arrayOf:function(e){return g((function(t,n,r,i,o){if("function"!=typeof e)return new p("Property `"+o+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var s=t[n];if(!Array.isArray(s))return new p("Invalid "+i+" `"+o+"` of type `"+y(s)+"` supplied to `"+r+"`, expected an array.");for(var l=0;l<s.length;l++){var c=e(s,l,r,i,o+"["+l+"]",a);if(c instanceof Error)return c}return null}))},element:g((function(t,n,r,i,o){var a=t[n];return e(a)?null:new p("Invalid "+i+" `"+o+"` of type `"+y(a)+"` supplied to `"+r+"`, expected a single ReactElement.")})),elementType:g((function(e,t,n,r,o){var a=e[t];return i.isValidElementType(a)?null:new p("Invalid "+r+" `"+o+"` of type `"+y(a)+"` supplied to `"+n+"`, expected a single ReactElement type.")})),instanceOf:function(e){return g((function(t,n,r,i,o){if(!(t[n]instanceof e)){var a=e.name||u;return new p("Invalid "+i+" `"+o+"` of type `"+((s=t[n]).constructor&&s.constructor.name?s.constructor.name:u)+"` supplied to `"+r+"`, expected instance of `"+a+"`.")}var s;return null}))},node:g((function(e,t,n,r,i){return v(e[t])?null:new p("Invalid "+r+" `"+i+"` supplied to `"+n+"`, expected a ReactNode.")})),objectOf:function(e){return g((function(t,n,r,i,o){if("function"!=typeof e)return new p("Property `"+o+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var l=t[n],c=y(l);if("object"!==c)return new p("Invalid "+i+" `"+o+"` of type `"+c+"` supplied to `"+r+"`, expected an object.");for(var d in l)if(s(l,d)){var u=e(l,d,r,i,o+"."+d,a);if(u instanceof Error)return u}return null}))},oneOf:function(e){return Array.isArray(e)?g((function(t,n,r,i,o){for(var a=t[n],s=0;s<e.length;s++)if(h(a,e[s]))return null;var l=JSON.stringify(e,(function(e,t){return"symbol"===x(t)?String(t):t}));return new p("Invalid "+i+" `"+o+"` of value `"+String(a)+"` supplied to `"+r+"`, expected one of "+l+".")})):(r(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),c)},oneOfType:function(e){if(!Array.isArray(e))return r("Invalid argument supplied to oneOfType, expected an instance of array."),c;for(var t=0;t<e.length;t++){var n=e[t];if("function"!=typeof n)return r("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+w(n)+" at index "+t+"."),c}return g((function(t,n,r,i,o){for(var l=[],c=0;c<e.length;c++){var d=(0,e[c])(t,n,r,i,o,a);if(null==d)return null;d.data&&s(d.data,"expectedType")&&l.push(d.data.expectedType)}return new p("Invalid "+i+" `"+o+"` supplied to `"+r+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return g((function(t,n,r,i,o){var s=t[n],l=y(s);if("object"!==l)return new p("Invalid "+i+" `"+o+"` of type `"+l+"` supplied to `"+r+"`, expected `object`.");for(var c in e){var d=e[c];if("function"!=typeof d)return b(r,i,o,c,x(d));var u=d(s,c,r,i,o+"."+c,a);if(u)return u}return null}))},exact:function(e){return g((function(t,n,r,i,l){var c=t[n],d=y(c);if("object"!==d)return new p("Invalid "+i+" `"+l+"` of type `"+d+"` supplied to `"+r+"`, expected `object`.");var u=o({},t[n],e);for(var f in u){var h=e[f];if(s(e,f)&&"function"!=typeof h)return b(r,i,l,f,x(h));if(!h)return new p("Invalid "+i+" `"+l+"` key `"+f+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var g=h(c,f,r,i,l+"."+f,a);if(g)return g}return null}))}};function h(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function p(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function g(e){var n={},i=0;function o(o,s,l,c,d,f,h){if(c=c||u,f=f||l,h!==a){if(t){var g=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw g.name="Invariant Violation",g}if("undefined"!=typeof console){var m=c+":"+l;!n[m]&&i<3&&(r("You are manually calling a React.PropTypes validation function for the `"+f+"` prop on `"+c+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),n[m]=!0,i++)}}return null==s[l]?o?null===s[l]?new p("The "+d+" `"+f+"` is marked as required in `"+c+"`, but its value is `null`."):new p("The "+d+" `"+f+"` is marked as required in `"+c+"`, but its value is `undefined`."):null:e(s,l,c,d,f)}var s=o.bind(null,!1);return s.isRequired=o.bind(null,!0),s}function m(e){return g((function(t,n,r,i,o,a){var s=t[n];return y(s)!==e?new p("Invalid "+i+" `"+o+"` of type `"+x(s)+"` supplied to `"+r+"`, expected `"+e+"`.",{expectedType:e}):null}))}function b(e,t,n,r,i){return new p((e||"React class")+": "+t+" type `"+n+"."+r+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+i+"`.")}function v(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(v);if(null===t||e(t))return!0;var r=function(e){var t=e&&(n&&e[n]||e[d]);if("function"==typeof t)return t}(t);if(!r)return!1;var i,o=r.call(t);if(r!==t.entries){for(;!(i=o.next()).done;)if(!v(i.value))return!1}else for(;!(i=o.next()).done;){var a=i.value;if(a&&!v(a[1]))return!1}return!0;default:return!1}}function y(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function x(e){if(null==e)return""+e;var t=y(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function w(e){var t=x(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return p.prototype=Error.prototype,f.checkPropTypes=l,f.resetWarningCache=l.resetWarningCache,f.PropTypes=f,f}},"./node_modules/prop-types/index.js":
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
	  \***********************************************************/(e,t)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,n=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,i=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,d=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,f=e?Symbol.for("react.suspense"):60113,h=e?Symbol.for("react.suspense_list"):60120,p=e?Symbol.for("react.memo"):60115,g=e?Symbol.for("react.lazy"):60116,m=e?Symbol.for("react.block"):60121,b=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,y=e?Symbol.for("react.scope"):60119;function x(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:var h=e.type;switch(h){case c:case d:case i:case a:case o:case f:return h;default:var m=h&&h.$$typeof;switch(m){case l:case u:case g:case p:case s:return m;default:return t}}case r:return t}}}var w=c,$=d,j=l,S=s,k=n,C=u,O=i,T=g,D=p,I=r,E=a,_=o,M=f,R=!1;function A(e){return x(e)===d}t.AsyncMode=w,t.ConcurrentMode=$,t.ContextConsumer=j,t.ContextProvider=S,t.Element=k,t.ForwardRef=C,t.Fragment=O,t.Lazy=T,t.Memo=D,t.Portal=I,t.Profiler=E,t.StrictMode=_,t.Suspense=M,t.isAsyncMode=function(e){return R||(R=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),A(e)||x(e)===c},t.isConcurrentMode=A,t.isContextConsumer=function(e){return x(e)===l},t.isContextProvider=function(e){return x(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return x(e)===u},t.isFragment=function(e){return x(e)===i},t.isLazy=function(e){return x(e)===g},t.isMemo=function(e){return x(e)===p},t.isPortal=function(e){return x(e)===r},t.isProfiler=function(e){return x(e)===a},t.isStrictMode=function(e){return x(e)===o},t.isSuspense=function(e){return x(e)===f},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===d||e===a||e===o||e===f||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===p||e.$$typeof===s||e.$$typeof===l||e.$$typeof===u||e.$$typeof===b||e.$$typeof===v||e.$$typeof===y||e.$$typeof===m)},t.typeOf=x}()},"./node_modules/react-is/index.js":
/*!****************************************!*\
	  !*** ./node_modules/react-is/index.js ***!
	  \****************************************/(e,t,n)=>{e.exports=n(/*! ./cjs/react-is.development.js */"./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":
/*!******************************************************!*\
	  !*** ./node_modules/shallow-equal/dist/index.esm.js ***!
	  \******************************************************/(e,t,n)=>{function r(e,t){if(e===t)return!0;if(!e||!t)return!1;var n=Object.keys(e),r=Object.keys(t),i=n.length;if(r.length!==i)return!1;for(var o=0;o<i;o++){var a=n[o];if(e[a]!==t[a]||!Object.prototype.hasOwnProperty.call(t,a))return!1}return!0}function i(e,t){if(e===t)return!0;if(!e||!t)return!1;var n=e.length;if(t.length!==n)return!1;for(var r=0;r<n;r++)if(e[r]!==t[r])return!1;return!0}n.r(t),n.d(t,{shallowEqualArrays:()=>i,shallowEqualObjects:()=>r})},"./src/Component.ts":
/*!**************************!*\
	  !*** ./src/Component.ts ***!
	  \**************************/function(e,t,n){var r=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=i(n(/*! ./useMediaQuery */"./src/useMediaQuery.ts"));t.default=function(e){var t=e.children,n=e.device,i=e.onChange,a=r(e,["children","device","onChange"]),s=(0,o.default)(a,n,i);return"function"==typeof t?t(s):s?t:null}},"./src/Context.ts":
/*!************************!*\
	  !*** ./src/Context.ts ***!
	  \************************/(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var r=(0,n(/*! react */"react").createContext)(void 0);t.default=r},"./src/index.ts":
/*!**********************!*\
	  !*** ./src/index.ts ***!
	  \**********************/function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Context=t.toQuery=t.useMediaQuery=t.default=void 0;var i=r(n(/*! ./useMediaQuery */"./src/useMediaQuery.ts"));t.useMediaQuery=i.default;var o=r(n(/*! ./Component */"./src/Component.ts"));t.default=o.default;var a=r(n(/*! ./toQuery */"./src/toQuery.ts"));t.toQuery=a.default;var s=r(n(/*! ./Context */"./src/Context.ts"));t.Context=s.default},"./src/mediaQuery.ts":
/*!***************************!*\
	  !*** ./src/mediaQuery.ts ***!
	  \***************************/function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},r.apply(this,arguments)},i=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=o(n(/*! prop-types */"./node_modules/prop-types/index.js")),s=a.default.oneOfType([a.default.string,a.default.number]),l={all:a.default.bool,grid:a.default.bool,aural:a.default.bool,braille:a.default.bool,handheld:a.default.bool,print:a.default.bool,projection:a.default.bool,screen:a.default.bool,tty:a.default.bool,tv:a.default.bool,embossed:a.default.bool},c={orientation:a.default.oneOf(["portrait","landscape"]),scan:a.default.oneOf(["progressive","interlace"]),aspectRatio:a.default.string,deviceAspectRatio:a.default.string,height:s,deviceHeight:s,width:s,deviceWidth:s,color:a.default.bool,colorIndex:a.default.bool,monochrome:a.default.bool,resolution:s,type:Object.keys(l)},d=i(c,["type"]),u=r({minAspectRatio:a.default.string,maxAspectRatio:a.default.string,minDeviceAspectRatio:a.default.string,maxDeviceAspectRatio:a.default.string,minHeight:s,maxHeight:s,minDeviceHeight:s,maxDeviceHeight:s,minWidth:s,maxWidth:s,minDeviceWidth:s,maxDeviceWidth:s,minColor:a.default.number,maxColor:a.default.number,minColorIndex:a.default.number,maxColorIndex:a.default.number,minMonochrome:a.default.number,maxMonochrome:a.default.number,minResolution:s,maxResolution:s},d),f=r(r({},l),u);t.default={all:f,types:l,matchers:c,features:u}},"./src/toQuery.ts":
/*!************************!*\
	  !*** ./src/toQuery.ts ***!
	  \************************/function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(n(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),o=r(n(/*! ./mediaQuery */"./src/mediaQuery.ts"));t.default=function(e){var t=[];return Object.keys(o.default.all).forEach((function(n){var r=e[n];null!=r&&t.push(function(e,t){var n=(0,i.default)(e);return"number"==typeof t&&(t="".concat(t,"px")),!0===t?n:!1===t?"not ".concat(n):"(".concat(n,": ").concat(t,")")}(n,r))})),t.join(" and ")}},"./src/useMediaQuery.ts":
/*!******************************!*\
	  !*** ./src/useMediaQuery.ts ***!
	  \******************************/function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=n(/*! react */"react"),o=r(n(/*! matchmediaquery */"./node_modules/matchmediaquery/index.js")),a=r(n(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),s=n(/*! shallow-equal */"./node_modules/shallow-equal/dist/index.esm.js"),l=r(n(/*! ./toQuery */"./src/toQuery.ts")),c=r(n(/*! ./Context */"./src/Context.ts")),d=function(e){if(e)return Object.keys(e).reduce((function(t,n){return t[(0,a.default)(n)]=e[n],t}),{})},u=function(){var e=(0,i.useRef)(!1);return(0,i.useEffect)((function(){e.current=!0}),[]),e.current},f=function(e){var t=function(){return function(e){return e.query||(0,l.default)(e)}(e)},n=(0,i.useState)(t),r=n[0],o=n[1];return(0,i.useEffect)((function(){var e=t();r!==e&&o(e)}),[e]),r};t.default=function(e,t,n){var r=function(e){var t=(0,i.useContext)(c.default),n=function(){return d(e)||d(t)},r=(0,i.useState)(n),o=r[0],a=r[1];return(0,i.useEffect)((function(){var e=n();(0,s.shallowEqualObjects)(o,e)||a(e)}),[e,t]),o}(t),a=f(e);if(!a)throw new Error("Invalid or missing MediaQuery!");var l=function(e,t){var n=function(){return(0,o.default)(e,t||{},!!t)},r=(0,i.useState)(n),a=r[0],s=r[1],l=u();return(0,i.useEffect)((function(){if(l){var e=n();return s(e),function(){e&&e.dispose()}}}),[e,t]),a}(a,r),h=function(e){var t=(0,i.useState)(e.matches),n=t[0],r=t[1];return(0,i.useEffect)((function(){var t=function(e){r(e.matches)};return e.addListener(t),r(e.matches),function(){e.removeListener(t)}}),[e]),n}(l),p=u();return(0,i.useEffect)((function(){p&&n&&n(h)}),[h]),(0,i.useEffect)((function(){return function(){l&&l.dispose()}}),[]),h}},react:
/*!**************************************************************************************!*\
	  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
	  \**************************************************************************************/t=>{t.exports=e}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var o=n[e]={exports:{}};return t[e].call(o.exports,o,o.exports,r),o.exports}return r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r("./src/index.ts")})();var Tl=Ol.exports=Cl(Y.default);const Dl=K.default.div`
    border: 1px solid ${ts.Neutral[5]};
    border-radius: 4px;
    margin-bottom: 2rem;
`,Il=K.default(Ti.div)`
    overflow: hidden;
`,El=K.default.div`
    height: max-content;
`,_l=K.default.div`
    border-top: 1px solid ${ts.Neutral[5]};
`,Ml=K.default.div`
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${is.MaxWidth.mobileL} {
        padding: 1rem 1.25rem;
        display: block;
    }

    ${e=>{if(e.$interactive)return i.css`
                cursor: pointer;
            `}}
`,Rl=K.default(exports.Text.H3)`
    word-wrap: break-word;
    overflow-wrap: anywhere;
    display: flex;
    align-items: center;
    margin-right: 1rem;
`,Al=K.default.div`
    display: flex;
`,Nl=K.default.span`
    font-size: 1.5rem;
    vertical-align: middle;
    display: flex;
    align-items: center;
    margin-right: 2.5rem;

    ${is.MaxWidth.mobileL} {
        margin-right: 0rem;
    }

    ${e=>{switch(e.$displayState){case"error":return i.css`
                    color: ${ts.Validation.Red.Icon(e)};
                `;case"warning":return i.css`
                    color: ${ts.Validation.Orange.Icon(e)};
                `}}}
`,Bl=K.default(s.ExclamationCircleFillIcon)`
    height: 1.375rem;
    width: 1.375rem;
`,Fl=K.default.div`
    display: flex;
    margin-left: auto;
    ${is.MaxWidth.mobileL} {
        flex-direction: column;
    }
    ${e=>{if(e.$collapsible)return i.css`
                margin-right: 2.5rem;
                ${is.MaxWidth.mobileL} {
                    margin-right: 0rem;
                    margin-top: 1rem;
                }
            `}}
`,Ll=K.default.button`
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 1rem;
    margin: -1rem;
    display: flex;
    align-items: center;

    ${is.MaxWidth.mobileL} {
        margin: -1rem -1rem -1rem 0;
        margin-left: auto;
    }
`;K.default(exports.Text.H4)`
    color: ${ts.Primary};
`;const Pl=K.default.div`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: ${Ss.Base};
`,zl=K.default(f.ChevronDownIcon)`
    color: ${ts.Neutral[3]};
    height: 1.375rem;
    width: 1.375rem;
`;var Hl={exports:{}};Hl.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",i="second",o="minute",a="hour",s="day",l="week",c="month",d="quarter",u="year",f="date",h="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},b=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},v={s:b,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+b(r,2,"0")+":"+b(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,c),o=n-i<0,a=t.clone().add(r+(o?-1:1),c);return+(-(r+(n-i)/(o?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:u,w:l,d:s,D:f,h:a,m:o,s:i,ms:r,Q:d}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},y="en",x={};x[y]=m;var w="$isDayjsObject",$=function(e){return e instanceof C||!(!e||!e[w])},j=function e(t,n,r){var i;if(!t)return y;if("string"==typeof t){var o=t.toLowerCase();x[o]&&(i=o),n&&(x[o]=n,i=o);var a=t.split("-");if(!i&&a.length>1)return e(a[0])}else{var s=t.name;x[s]=t,i=s}return!r&&i&&(y=i),i||!r&&y},S=function(e,t){if($(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new C(n)},k=v;k.l=j,k.i=$,k.w=function(e,t){return S(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var C=function(){function m(e){this.$L=j(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var b=m.prototype;return b.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(k.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(p);if(r){var i=r[2]-1||0,o=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)}}return new Date(t)}(e),this.init()},b.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},b.$utils=function(){return k},b.isValid=function(){return!(this.$d.toString()===h)},b.isSame=function(e,t){var n=S(e);return this.startOf(t)<=n&&n<=this.endOf(t)},b.isAfter=function(e,t){return S(e)<this.startOf(t)},b.isBefore=function(e,t){return this.endOf(t)<S(e)},b.$g=function(e,t,n){return k.u(e)?this[t]:this.set(n,e)},b.unix=function(){return Math.floor(this.valueOf()/1e3)},b.valueOf=function(){return this.$d.getTime()},b.startOf=function(e,t){var n=this,r=!!k.u(t)||t,d=k.p(e),h=function(e,t){var i=k.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?i:i.endOf(s)},p=function(e,t){return k.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},g=this.$W,m=this.$M,b=this.$D,v="set"+(this.$u?"UTC":"");switch(d){case u:return r?h(1,0):h(31,11);case c:return r?h(1,m):h(0,m+1);case l:var y=this.$locale().weekStart||0,x=(g<y?g+7:g)-y;return h(r?b-x:b+(6-x),m);case s:case f:return p(v+"Hours",0);case a:return p(v+"Minutes",1);case o:return p(v+"Seconds",2);case i:return p(v+"Milliseconds",3);default:return this.clone()}},b.endOf=function(e){return this.startOf(e,!1)},b.$set=function(e,t){var n,l=k.p(e),d="set"+(this.$u?"UTC":""),h=(n={},n[s]=d+"Date",n[f]=d+"Date",n[c]=d+"Month",n[u]=d+"FullYear",n[a]=d+"Hours",n[o]=d+"Minutes",n[i]=d+"Seconds",n[r]=d+"Milliseconds",n)[l],p=l===s?this.$D+(t-this.$W):t;if(l===c||l===u){var g=this.clone().set(f,1);g.$d[h](p),g.init(),this.$d=g.set(f,Math.min(this.$D,g.daysInMonth())).$d}else h&&this.$d[h](p);return this.init(),this},b.set=function(e,t){return this.clone().$set(e,t)},b.get=function(e){return this[k.p(e)]()},b.add=function(r,d){var f,h=this;r=Number(r);var p=k.p(d),g=function(e){var t=S(h);return k.w(t.date(t.date()+Math.round(e*r)),h)};if(p===c)return this.set(c,this.$M+r);if(p===u)return this.set(u,this.$y+r);if(p===s)return g(1);if(p===l)return g(7);var m=(f={},f[o]=t,f[a]=n,f[i]=e,f)[p]||1,b=this.$d.getTime()+r*m;return k.w(b,this)},b.subtract=function(e,t){return this.add(-1*e,t)},b.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var r=e||"YYYY-MM-DDTHH:mm:ssZ",i=k.z(this),o=this.$H,a=this.$m,s=this.$M,l=n.weekdays,c=n.months,d=n.meridiem,u=function(e,n,i,o){return e&&(e[n]||e(t,r))||i[n].slice(0,o)},f=function(e){return k.s(o%12||12,e,"0")},p=d||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(g,(function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return k.s(t.$y,4,"0");case"M":return s+1;case"MM":return k.s(s+1,2,"0");case"MMM":return u(n.monthsShort,s,c,3);case"MMMM":return u(c,s);case"D":return t.$D;case"DD":return k.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return u(n.weekdaysMin,t.$W,l,2);case"ddd":return u(n.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(o);case"HH":return k.s(o,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return p(o,a,!0);case"A":return p(o,a,!1);case"m":return String(a);case"mm":return k.s(a,2,"0");case"s":return String(t.$s);case"ss":return k.s(t.$s,2,"0");case"SSS":return k.s(t.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},b.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},b.diff=function(r,f,h){var p,g=this,m=k.p(f),b=S(r),v=(b.utcOffset()-this.utcOffset())*t,y=this-b,x=function(){return k.m(g,b)};switch(m){case u:p=x()/12;break;case c:p=x();break;case d:p=x()/3;break;case l:p=(y-v)/6048e5;break;case s:p=(y-v)/864e5;break;case a:p=y/n;break;case o:p=y/t;break;case i:p=y/e;break;default:p=y}return h?p:k.a(p)},b.daysInMonth=function(){return this.endOf(c).$D},b.$locale=function(){return x[this.$L]},b.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=j(e,t,!0);return r&&(n.$L=r),n},b.clone=function(){return k.w(this.$d,this)},b.toDate=function(){return new Date(this.valueOf())},b.toJSON=function(){return this.isValid()?this.toISOString():null},b.toISOString=function(){return this.$d.toISOString()},b.toString=function(){return this.$d.toUTCString()},m}(),O=C.prototype;return S.prototype=O,[["$ms",r],["$s",i],["$m",o],["$H",a],["$W",s],["$M",c],["$y",u],["$D",f]].forEach((function(e){O[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),S.extend=function(e,t){return e.$i||(e(t,C,S),e.$i=!0),S},S.locale=j,S.isDayjs=$,S.unix=function(e){return S(1e3*e)},S.en=x[y],S.Ls=x,S.p={},S}();var Wl=Ii(Hl.exports),Vl={exports:{}};Vl.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},a=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],c=function(e){var t=o[e];return t&&(t.indexOf?t:t.s.concat(t.f))},d=function(e,t){var n,r=o.meridiem;if(r){for(var i=1;i<=24;i+=1)if(e.indexOf(r(i,0,t))>-1){n=i>12;break}}else n=e===(t?"pm":"PM");return n},u={A:[i,function(e){this.afternoon=d(e,!1)}],a:[i,function(e){this.afternoon=d(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[r,s("seconds")],ss:[r,s("seconds")],m:[r,s("minutes")],mm:[r,s("minutes")],H:[r,s("hours")],h:[r,s("hours")],HH:[r,s("hours")],hh:[r,s("hours")],D:[r,s("day")],DD:[n,s("day")],Do:[i,function(e){var t=o.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],M:[r,s("month")],MM:[n,s("month")],MMM:[i,function(e){var t=c("months"),n=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[n,function(e){this.year=a(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function f(n){var r,i;r=n,i=o&&o.formats;for(var a=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var o=r&&r.toUpperCase();return n||i[r]||e[r]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),s=a.length,l=0;l<s;l+=1){var c=a[l],d=u[c],f=d&&d[0],h=d&&d[1];a[l]=h?{regex:f,parser:h}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<s;n+=1){var i=a[n];if("string"==typeof i)r+=i.length;else{var o=i.regex,l=i.parser,c=e.slice(r),d=o.exec(c)[0];l.call(t,d),e=e.replace(d,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(a=e.parseTwoDigitYear);var r=t.prototype,i=r.parse;r.parse=function(e){var t=e.date,r=e.utc,a=e.args;this.$u=r;var s=a[1];if("string"==typeof s){var l=!0===a[2],c=!0===a[3],d=l||c,u=a[2];c&&(u=a[2]),o=this.$locale(),!l&&u&&(o=n.Ls[u]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=f(t)(e),i=r.year,o=r.month,a=r.day,s=r.hours,l=r.minutes,c=r.seconds,d=r.milliseconds,u=r.zone,h=new Date,p=a||(i||o?1:h.getDate()),g=i||h.getFullYear(),m=0;i&&!o||(m=o>0?o-1:h.getMonth());var b=s||0,v=l||0,y=c||0,x=d||0;return u?new Date(Date.UTC(g,m,p,b,v,y,x+60*u.offset*1e3)):n?new Date(Date.UTC(g,m,p,b,v,y,x)):new Date(g,m,p,b,v,y,x)}catch(e){return new Date("")}}(t,s,r),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),d&&t!=this.format(s)&&(this.$d=new Date("")),o={}}else if(s instanceof Array)for(var h=s.length,p=1;p<=h;p+=1){a[1]=s[p-1];var g=n.apply(this,a);if(g.isValid()){this.$d=g.$d,this.$L=g.$L,this.init();break}p===h&&(this.$d=new Date(""))}else i.call(this,e)}}}();var Yl=Ii(Vl.exports),Ul={exports:{}};Ul.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,i){var o=n(e),a=n(t),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(o,r):!this.isBefore(o,r))&&(l?this.isBefore(a,r):!this.isAfter(a,r))||(s?this.isBefore(o,r):!this.isAfter(o,r))&&(l?this.isAfter(a,r):!this.isBefore(a,r))}};var Kl=Ii(Ul.exports),ql={exports:{}};ql.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var Xl=Ii(ql.exports),Gl={exports:{}};Gl.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var Zl,Ql,Jl=Ii(Gl.exports),ec={exports:{}};ec.exports=(Zl={year:0,month:1,day:2,hour:3,minute:4,second:5},Ql={},function(e,t,n){var r,i=function(e,t,n){void 0===n&&(n={});var r=new Date(e),i=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,i=Ql[r];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),Ql[r]=i),i}(t,n);return i.formatToParts(r)},o=function(e,t){for(var r=i(e,t),o=[],a=0;a<r.length;a+=1){var s=r[a],l=s.type,c=s.value,d=Zl[l];d>=0&&(o[d]=parseInt(c,10))}var u=o[3],f=24===u?0:u,h=o[0]+"-"+o[1]+"-"+o[2]+" "+f+":"+o[4]+":"+o[5]+":000",p=+e;return(n.utc(h).valueOf()-(p-=p%1e3))/6e4},a=t.prototype;a.tz=function(e,t){void 0===e&&(e=r);var i=this.utcOffset(),o=this.toDate(),a=o.toLocaleString("en-US",{timeZone:e}),s=Math.round((o-new Date(a))/1e3/60),l=n(a,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(o.getTimezoneOffset()/15)-s,!0);if(t){var c=l.utcOffset();l=l.add(i-c,"minute")}return l.$x.$timezone=e,l},a.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var s=a.startOf;a.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,i){var a=i&&t,s=i||t||r,l=o(+n(),s);if("string"!=typeof e)return n(e).tz(s);var c=function(e,t,n){var r=e-60*t*1e3,i=o(r,n);if(t===i)return[r,t];var a=o(r-=60*(i-t)*1e3,n);return i===a?[r,i]:[e-60*Math.min(i,a)*1e3,Math.max(i,a)]}(n.utc(e,a).valueOf(),l,s),d=c[0],u=c[1],f=n(d).utcOffset(u);return f.$x.$timezone=s,f},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}});var tc,nc=Ii(ec.exports);Wl.extend(Kl),Wl.extend(Jl),Wl.extend(Xl),Wl.extend(Yl),Wl.extend(nc),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=Wl(t).startOf("week");return rc(n).map((e=>ic(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return ic(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(Wl(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),i=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)i.push(r.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+Wl(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=Wl(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,n,r,i)=>{const o=e.isWithinRange(t,r?Wl(r):void 0,i?Wl(i):void 0),a=n&&n.includes(t.format("YYYY-MM-DD"));return!o||!!a}}(tc||(tc={}));const rc=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},ic=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},oc=[1,3,5,7,8,10,12],ac=[4,6,9,11];var sc,lc,cc,dc;!function(e){e.clampDay=(t,n,r)=>{const i=parseInt(t),o=parseInt(n),a=parseInt(r);return 0==i?"1":oc.includes(o)?Math.min(i,31).toString():ac.includes(o)?Math.min(i,30).toString():2===o?e.isLeapYear(a)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=Wl(e,n);return Wl(t,n).diff(r,"minute")},e.toDayjs=e=>e?Wl(e):Wl(),e.addMinutesToTime=(e,t,n="HH:mm")=>Wl(e,n).add(t,"minutes").format(n),e.isSame=(e,t,n="day")=>Wl(e).isSame(Wl(t),n)}(sc||(sc={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:n,minDate:r,maxDate:i}=t;return!!(n&&n.length&&n.includes(e))||(!(!r||!Wl(e).isBefore(r,"day"))||!(!i||!Wl(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(Wl(e).isValid())return e}return""}}(lc||(lc={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(cc||(cc={})),function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,i=8)=>{let o=0;t>n&&(o=Math.floor((t-n)/i));const a=r+o;if(a<e.length){const t=Math.floor(a/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,n,r=1.2)=>{const i=Math.floor(2*t/(.6*n))*(2/r);if(e.length<=i)return e;const o=Math.floor(.6*i),a=Math.floor(.2*i);return`${e.substring(0,o)}...${e.substring(e.length-a)}`},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width},e.maskValue=(e,n)=>{if(!e)return e;const{maskRange:r,unmaskRange:i,maskChar:o="•",maskRegex:a,maskTransformer:s}=n;if(s)return s(e);if(a)return e.replace(a,o);if(r){const{startIndex:n,endIndex:i}=t(r[0],r[1]);return e.substring(0,n)+o.repeat(e.substring(n,i+1).length)+e.substring(i+1)}if(i){const{startIndex:n,endIndex:r}=t(i[0],i[1]);return o.repeat(e.substring(0,n).length)+e.substring(n,r+1)+o.repeat(e.substring(r+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(dc||(dc={}));function uc(e){const n=t.useRef(null);return t.useLayoutEffect((()=>{n.current=e}),[e]),t.useCallback(((...e)=>n.current(...e)),[])}const fc=(e,n,r="window",i)=>{const o=t.useRef();t.useEffect((()=>{o.current=n}),[n]),t.useEffect((()=>{let t;switch(r){case"window":t=window;break;case"document":t=document;break;default:t=r}if(!(t&&t.addEventListener))return;const n=e=>o.current(e);return t.addEventListener(e,n,i),()=>{t.removeEventListener(e,n,i)}}),[e,r])},hc="undefined"!=typeof window?t.useLayoutEffect:t.useEffect,pc=()=>{const[e,n]=t.useState(!1);return t.useEffect((()=>{n(!0)}),[]),e};function gc({ref:e,formatter:t}){return()=>{const n=e.current,r=n.value,i=t(r),o=r.substring(0,n.selectionEnd),a=t(o),s=o.length-a.length,l=Math.max(0,n.selectionEnd-s);return{nextValue:i,updateCaretPosition:()=>{n.value=i,n.setSelectionRange(l,l)}}}}const mc=e=>{const n=(e=>{const n=t.useRef(e),r=t.useRef();return t.useEffect((()=>{r.current=n.current,n.current=e}),[e]),r.current})(e);return n!==e},bc=e=>{const[n,r]=t.useState(e),i=t.useRef(e);return[n,t.useCallback((e=>{i.current=e,r(e)}),[]),i]},vc=K.default.div`
    position: relative;
    width: 100%;
    z-index: 1;

    margin: 2rem 0;

    ${is.MaxWidth.desktopM} {
        margin: 1.5rem 0;
    }

    ${is.MaxWidth.tablet} {
        margin: 1rem 0;
    }
`,yc=K.default.ul`
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

    ${is.MaxWidth.tablet} {
        flex-wrap: nowrap;
    }
`,xc=K.default.div`
    width: 4rem;
    height: 1.75rem;
    top: 0;
    position: absolute;
    pointer-events: none;

    ${e=>{let t;const n="rgba(255,255,255,0.001)";return t="left"===e.$position?`\n\t\t\t\tleft: -2%;\n\t\t\t\tbackground-image: linear-gradient(\n\t\t\t\t\tto right, \n\t\t\t\t\t${e.$backgroundColor||"white"}, \n\t\t\t\t\t${n}\n\t\t\t\t);\n\t\t\t`:`\n\t\t\t\tright: -2%;\n\t\t\t\tbackground-image: linear-gradient(\n\t\t\t\t\tto left,\n\t\t\t\t\t${e.$backgroundColor||"white"},\n\t\t\t\t\t${n}\n\t\t\t\t);\n\t\t\t`,`\n\t\t\t${is.MaxWidth.tablet} {\n\t\t\t\t${t}\n\t\t\t}\n\t\t`}};
`,wc=K.default.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    line-height: inherit;
    font-size: inherit;
    ${e=>e.$styleProps||""};
`,$c=K.default(h.ChevronRightIcon)`
    margin: 0.25rem 0.25rem 0.1rem 0.25rem;
    color: ${ts.Neutral[4]};
`,jc=K.default(exports.Text.BodySmall)`
    margin: 0.25rem !important;
`,Sc=K.default(exports.Text.Hyperlink.Small)`
    margin: 0.25rem !important;
`,kc=K.default(Us)`
    flex-direction: ${e=>"right"===e.$buttonIconPosition?"row-reverse":"row"};
    gap: 0.5rem;

    svg {
        flex-shrink: 0;
    }

    ${e=>"small"===e.$buttonSizeStyle?i.css`
                    svg {
                        height: 1rem;
                        width: 1rem;
                    }
                `:i.css`
                    svg {
                        height: 1.125rem;
                        width: 1.125rem;
                    }
                `}
`,Cc={Default:Y.default.forwardRef(((t,n)=>{const{children:r,disabled:i=!1,styleType:o="default",danger:a=!1,icon:s,iconPosition:l="left",loading:c=!1}=t,d=X(t,["children","disabled","styleType","danger","icon","iconPosition","loading"]),u={$buttonIconPosition:l,$buttonStyle:i?"disabled":o,$buttonSizeStyle:"default",$buttonIsDanger:a,$buttonWithIcon:!0};return e.jsxs(kc,Object.assign({ref:n,"data-testid":d["data-testid"]||"button-with-icon",disabled:i},u,d,{children:[c?e.jsx(Ks,Object.assign({},u)):s,e.jsx("span",{children:r})]}))})),Small:Y.default.forwardRef(((t,n)=>{const{children:r,disabled:i=!1,styleType:o="default",danger:a=!1,icon:s,iconPosition:l="left",loading:c=!1}=t,d=X(t,["children","disabled","styleType","danger","icon","iconPosition","loading"]),u={$buttonIconPosition:l,$buttonStyle:i?"disabled":o,$buttonSizeStyle:"small",$buttonIsDanger:a,$buttonWithIcon:!0};return e.jsxs(kc,Object.assign({ref:n,"data-testid":d["data-testid"]||"button-with-icon",disabled:i},u,d,{children:[c?e.jsx(Ks,Object.assign({},u,{size:16})):s,e.jsx("span",{children:r})]}))}))},Oc=K.default.div`
    width: ${e=>e.$width}px;
    max-width: 41rem;
    min-width: 21rem;

    ${is.MaxWidth.mobileL} {
        min-width: 17.5rem;
    }
`,Tc=i.css`
    color: ${ts.Neutral[3]};
    height: 1rem;
    width: 1rem;
`,Dc=K.default(p.ChevronLeftIcon)`
    ${Tc}
`,Ic=K.default(h.ChevronRightIcon)`
    ${Tc}
`,Ec=K.default(f.ChevronDownIcon)`
    ${Tc}
    transition: transform 250ms ease-in-out;
    margin-left: 0.5rem;
`,_c=K.default.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
`,Mc=K.default.div`
    display: flex;
    flex: 1;
    position: relative;
`,Rc=K.default.div`
    isolation: isolate;
    width: 100%;
`,Ac=K.default.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${ts.Neutral[8]};

    ${e=>{if(!e.$visible)return i.css`
                display: none;
            `}}
`,Nc=K.default.div`
    display: flex;
    justify-content: space-between;
    margin: 0 0 0.5rem 0;
`,Bc=K.default.div`
    display: flex;
`,Fc=K.default.button`
    border: none;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: transparent;
    cursor: pointer;

    ${e=>!1===e.$visible?i.css`
                display: none;
            `:e.$expanded?i.css`
                ${Ec} {
                    transform: rotate(180deg);
                }
            `:void 0}
`,Lc=K.default.p`
    ${ys.getTextStyle("H5","regular")}
`,Pc=K.default.div`
    display: flex;
`,zc=K.default(ss)`
    margin: auto 0;
    padding: 0.75rem;

    :disabled {
        cursor: not-allowed;
    }
`,Hc=K.default.div`
    display: flex;
    gap: 0.5rem;
    margin-top: 1.5rem;
`,Wc=K.default(qs.Small)`
    flex: 1;
`,Vc=K.default.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 2.5rem);
    align-content: center;
    justify-content: center;

    ${e=>{switch(e.$type){case"standalone":return i.css`
                    gap: 0.5rem 2.5rem;
                `;case"input":return i.css`
                    gap: 0.5rem 1rem;
                `}}}
`,Yc=K.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: default;
    border-radius: 5rem;
    margin: 0 0.5rem;

    ${e=>e.$interactive?i.css`
                cursor: pointer;
                &:hover {
                    box-shadow: 0px 0px 4px 1px ${ts.Shadow.Accent};
                    border: 1px solid ${ts.Accent.Light[1]};
                }
            `:e.$disabledDisplay?i.css`
                cursor: not-allowed;
            `:void 0}

    ${e=>{switch(e.$variant){case"current-month":return i.css`
                    background-color: ${ts.Accent.Light[6](e)};
                `;case"selected-month":return i.css`
                    background-color: ${ts.Accent.Light[5](e)};
                    border: 1px solid ${ts.Primary(e)};
                `}}}
`,Uc=K.default(exports.Text.H5)`
    ${e=>{if(e.$disabledDisplay)return i.css`
                color: ${ts.Neutral[4]};
            `;switch(e.$variant){case"current-month":return i.css`
                    color: ${ts.Neutral[3](e)};
                `;case"selected-month":return i.css`
                    ${ys.getTextStyle("H5","semibold")}
                    color: ${ts.Primary(e)};
                `}}}
`,Kc=({calendarDate:n,currentFocus:r,selectedStartDate:i,selectedEndDate:o,viewCalendarDate:a,type:s,isNewSelection:l,minDate:c,maxDate:d,allowDisabledSelection:u,onMonthSelect:f})=>{const h=t.useMemo((()=>tc.generateMonths(Wl(n))),[n]),p=e=>{const t="start"===r&&o&&e.isAfter(o,"month")&&l,n="end"===r&&i&&e.isBefore(i,"month")&&l;return t||n},g=e=>{const t=e.format("MMMM"),n=(r=e,!tc.isWithinRange(r,c?Wl(c):void 0,d?Wl(d):void 0,"month"));var r;const i=a.isSame(e,"month")?"selected-month":Wl().isSame(e,"month")?"current-month":"default";return{disabledDisplay:n||p(e),interactive:!n||u,month:t,variant:i}};return h.length?e.jsx(Vc,Object.assign({$type:s},{children:h.map((t=>{const{disabledDisplay:n,interactive:r,variant:i,month:o}=g(t);return e.jsx(Yc,Object.assign({$variant:i,$disabledDisplay:n,$interactive:r,onClick:()=>((e,t)=>{t||f(e)})(t,!r)},{children:e.jsx(Uc,Object.assign({weight:"regular",$variant:i,$disabledDisplay:n},{children:o}))}),o)}))})):null},qc=K.default.div`
    width: 100%;
    height: 100%;
    display: grid;
    align-content: center;
    grid-template-columns: repeat(3, 1fr);

    ${e=>{switch(e.$type){case"standalone":return i.css`
                    grid-template-rows: repeat(4, 4rem);
                    gap: 0.5rem 2.5rem;
                `;case"input":return i.css`
                    grid-template-rows: repeat(4, 4.375rem);
                    gap: 0.5rem 1rem;
                `}}}
`,Xc=K.default.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: default;
    border-radius: 0.5rem;
    margin: 0 0.5rem;

    ${e=>e.$interactive?i.css`
                cursor: pointer;
                &:hover {
                    box-shadow: 0px 0px 4px 1px ${ts.Shadow.Accent};
                    border: 1px solid ${ts.Accent.Light[1]};
                }
            `:e.$disabledDisplay?i.css`
                cursor: not-allowed;
            `:void 0}

    ${e=>{switch(e.$variant){case"current-year":return i.css`
                    background: ${ts.Accent.Light[6](e)};
                `;case"selected-year":return i.css`
                    background: ${ts.Accent.Light[5](e)};
                    border: 1px solid ${ts.Primary(e)};
                `}}};
`,Gc=K.default(exports.Text.H5)`
    ${e=>{if(e.$disabledDisplay)return i.css`
                color: ${ts.Neutral[4]};
            `;switch(e.$variant){case"current-year":return i.css`
                    color: ${ts.Neutral[3](e)};
                `;case"selected-year":return i.css`
                    ${ys.getTextStyle("H5","semibold")}
                    color: ${ts.Primary(e)};
                `;case"other-decade":return i.css`
                    color: ${ts.Neutral[4](e)};
                `}}}
`,Zc=({calendarDate:n,currentFocus:r,selectedStartDate:i,selectedEndDate:o,viewCalendarDate:a,type:s,isNewSelection:l,minDate:c,maxDate:d,allowDisabledSelection:u,onYearSelect:f})=>{const h=t.useMemo((()=>tc.generateDecadeOfYears(Wl(n))),[n]),p=e=>{const t="start"===r&&o&&e.isAfter(o,"year")&&l,n="end"===r&&i&&e.isBefore(i,"year")&&l;return t||n},g=e=>{const t=[0,11].includes(h.indexOf(e)),n=e.year(),r=(i=e,!tc.isWithinRange(i,c?Wl(c):void 0,d?Wl(d):void 0,"year"));var i;const o=t?"other-decade":a.isSame(e,"year")?"selected-year":Wl().isSame(e,"year")?"current-year":"default";return{disabledDisplay:r||p(e),interactive:!r||u,year:n,variant:o}};return h.length?e.jsx(qc,Object.assign({$type:s},{children:h.map((t=>{const{disabledDisplay:n,interactive:r,variant:i,year:o}=g(t);return e.jsx(Xc,Object.assign({$variant:i,$disabledDisplay:n,$interactive:r,onClick:()=>((e,t)=>{t||f(e)})(t,!r)},{children:e.jsx(Gc,Object.assign({weight:"regular",$variant:i,$disabledDisplay:n,$interactive:r},{children:o}))}),o)}))})):null},Qc=Y.default.forwardRef(((n,r)=>{var{children:i,initialCalendarDate:o,type:a,minDate:s,maxDate:l,currentFocus:c,selectedStartDate:d,selectedEndDate:u,selectWithinRange:f,dynamicHeight:h=!1,allowDisabledSelection:p,onCalendarDateChange:g,withButton:m,doneButtonDisabled:b,onDismiss:v,showNavigationHeader:y=!0,getLeftArrowDate:x,getRightArrowDate:w,isLeftArrowDisabled:$,isRightArrowDisabled:j,getMonthHeaderLabel:S,getYearHeaderLabel:k}=n,C=X(n,["children","initialCalendarDate","type","minDate","maxDate","currentFocus","selectedStartDate","selectedEndDate","selectWithinRange","dynamicHeight","allowDisabledSelection","onCalendarDateChange","withButton","doneButtonDisabled","onDismiss","showNavigationHeader","getLeftArrowDate","getRightArrowDate","isLeftArrowDisabled","isRightArrowDisabled","getMonthHeaderLabel","getYearHeaderLabel"]);const[O,T]=t.useState(sc.toDayjs(o)),[D,I]=t.useState(sc.toDayjs(o)),[E,_]=t.useState("default"),M=t.useRef(null),R=t.useRef(null),A=t.useRef();t.useImperativeHandle(r,(()=>({defaultView(){_("default")},resetView(){const e=sc.toDayjs(o);T(e),I(e),_("default")},setCalendarDate(e){const t=sc.toDayjs(e);T(t),I(t)}}))),t.useEffect((()=>{const e=sc.toDayjs(o);T(e),I(e)}),[o]),t.useEffect((()=>{H(D)}),[D]);const N=()=>{"month-options"!==E?(_("month-options"),A.current.focus()):(_("default"),T(D))},B=()=>{"default"!==E?(_("default"),T(D)):_("year-options")},F=()=>{A.current.focus();const e=x?x(O):O.subtract(1,"month");switch(E){case"default":I(e),T(e);break;case"month-options":T((e=>e.subtract(1,"year")));break;case"year-options":T((e=>e.subtract(10,"year")))}},L=()=>{A.current.focus();const e=w?w(O):O.add(1,"month");switch(E){case"default":I(e),T(e);break;case"month-options":T((e=>e.add(1,"year")));break;case"year-options":T((e=>e.add(10,"year")))}},P=e=>{T(e),I(e),m||_("default")},z=()=>{const e=sc.toDayjs(o);T(e),I(e),"default"===E?W("reset"):_("default")},H=e=>{g&&g(e)},W=e=>{v&&v(e)},V=()=>{if(!s||p)return!1;const e=Wl(s);return"month-options"===E?!tc.isPreviousYearWithinRange(O,e):"year-options"===E?!tc.isPreviousDecadeWithinRange(O,e):$?$(O):!tc.isPreviousMonthWithinRange(O,e)},Y=()=>{if(!l||p)return!1;const e=Wl(l);return"month-options"===E?!tc.isNextYearWithinRange(O,e):"year-options"===E?!tc.isNextDecadeWithinRange(O,e):j?j(O):!tc.isNextMonthWithinRange(O,e)},U=()=>{if("year-options"===E){const{beginDecade:e,endDecade:t}=tc.getStartEndDecade(O);return`${e} to ${t}`}return k?k(O):O.format("YYYY")},K=()=>{const t=S?S(O):O.format("MMM");return e.jsxs(e.Fragment,{children:[e.jsxs(Fc,Object.assign({type:"button",tabIndex:-1,$expanded:"month-options"===E,$visible:"default"===E,id:"month-dropdown",onClick:N},{children:[e.jsx(Lc,{children:t}),e.jsx(Ec,{})]})),e.jsxs(Fc,Object.assign({type:"button",tabIndex:-1,$expanded:"default"!==E,id:"year-dropdown",onClick:B},{children:[e.jsx(Lc,{children:U()}),e.jsx(Ec,{})]}))]})},q=()=>{switch(E){case"month-options":return e.jsx(Kc,{type:a,calendarDate:O,currentFocus:c,minDate:s,maxDate:l,selectedStartDate:d,selectedEndDate:u,viewCalendarDate:D,isNewSelection:f,onMonthSelect:P,allowDisabledSelection:p});case"year-options":return e.jsx(Zc,{type:a,calendarDate:O,currentFocus:c,minDate:s,maxDate:l,selectedStartDate:d,selectedEndDate:u,viewCalendarDate:D,isNewSelection:f,onYearSelect:P,allowDisabledSelection:p});default:return null}};return e.jsxs(_c,Object.assign({ref:A,"data-id":"calendar-container","data-testid":"calendar-container"},C,{children:[y&&e.jsxs(Nc,Object.assign({"data-id":"calendar-header","data-testid":"calendar-header"},{children:[e.jsx(Bc,{children:K()}),e.jsxs(Pc,{children:[e.jsx(zc,Object.assign({"aria-label":"Previous month","data-testid":"left-arrow-btn",disabled:V(),focusHighlight:!1,tabIndex:-1,onClick:F},{children:e.jsx(Dc,{})})),e.jsx(zc,Object.assign({"aria-label":"Next month","data-testid":"right-arrow-btn",disabled:Y(),focusHighlight:!1,tabIndex:-1,onClick:L},{children:e.jsx(Ic,{})}))]})]})),e.jsx(Mc,{children:(()=>{const t="function"==typeof i?i({calendarDate:D,currentView:E}):i;return h?e.jsxs(e.Fragment,{children:["default"===E&&t,q()]}):e.jsxs(e.Fragment,{children:[e.jsx(Rc,{children:t}),e.jsx(Ac,Object.assign({$visible:"default"!==E},{children:q()}))]})})()}),(()=>{if(!m)return;const t=!!("default"===E)&&b;return e.jsxs(Hc,{children:[e.jsx(Wc,Object.assign({ref:R,"data-testid":"cancel-button",styleType:"light",type:"button",onClick:z},{children:"Cancel"})),e.jsx(Wc,Object.assign({"data-testid":"done-button",ref:M,type:"button",onClick:()=>{t||(T(D),"default"===E?W("confirmed"):_("default"))},disabled:t},{children:"Done"}))]})})()]}))})),Jc=K.default.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 0.25rem;
`,ed=K.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    pointer-events: none;
    user-select: none;
`,td=K.default.div`
    grid-column: 1 / -1;
    display: flex;
`,nd=K.default.div`
    display: flex;
    position: relative;
    height: 2.5rem;
    align-items: center;
    justify-content: center;
    flex: 1;
`,rd=K.default.div`
    position: absolute;
    width: 50%;
    height: 100%;

    ${e=>{switch(e.$position){case"left":return i.css`
                    left: 0;
                `;case"right":return i.css`
                    right: 0;
                `}}}
`,id=K.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    cursor: default;
    position: absolute;
`,od=K.default(exports.Text.H5)`
    ${e=>{const{$disabledDisplay:t,$selected:n,$variant:r}=e;if(t&&n)return i.css`
                ${ys.getTextStyle("H5","semibold")};
                color: ${ts.Accent.Light[2]};
            `;if(t)return i.css`
                color: ${ts.Neutral[4]};
            `;if(n)return i.css`
                ${ys.getTextStyle("H5","semibold")};
                color: ${ts.Primary};
            `;switch(r){case"other-month":return i.css`
                    color: ${ts.Neutral[4]};
                `;case"today":return i.css`
                    color: ${ts.Neutral[3]};
                `;case"default":return i.css`
                    color: ${ts.Neutral[1]};
                `}}}
`;K.default(rd)`
    ${e=>{const{$selected:t}=e;if(t)return i.css`
                border-top: 1px solid ${ts.Accent.Light[4]};
                border-bottom: 1px solid ${ts.Accent.Light[4]};
                background-color: ${ts.Accent.Light[5]};
            `}}

    ${e=>{const{$hovered:t,$overlap:n}=e;return t?i.css`
                border-top: 1px dashed ${ts.Accent.Light[4]};
                border-bottom: 1px dashed ${ts.Accent.Light[4]};
                background-color: ${ts.Accent.Light[6]};
            `:n?i.css`
                background-color: ${ts.Accent.Light[4]};
            `:void 0}}
`;const ad=K.default(id)`
    ${e=>{const{$hovered:t,$selected:n}=e;return n?i.css`
                background: ${ts.Accent.Light[5]};
                border: 1px solid ${ts.Primary};
            `:t?i.css`
                box-shadow: 0px 0px 4px 1px ${ts.Shadow.Accent};
                border: 1px solid ${ts.Accent.Light[1]};
                background-color: ${ts.Neutral[8]};
            `:void 0}}

    ${e=>{const{$interactive:t,$disabledDisplay:n}=e;return t?i.css`
                cursor: pointer;
                :hover {
                    box-shadow: 0px 0px 4px 1px ${ts.Shadow.Accent};
                    border: 1px solid ${ts.Accent.Light[1]};
                    background-color: ${ts.Neutral[8]};
                }
            `:n?i.css`
                cursor: not-allowed;
            `:void 0}}

    ${e=>{const{$disabledDisplay:t,$overlap:n,$variant:r}=e;return n?i.css`
                border: 1px solid ${ts.Accent.Light[1]};
                background: ${ts.Accent.Light[4]};

                :hover {
                    background: ${ts.Accent.Light[4]};
                }
            `:t?i.css`
                color: ${ts.Neutral[4]};
            `:"today"===r?i.css`
                    background: ${ts.Accent.Light[5]};
                `:void 0}}
`,sd=e=>{let t=ts.Neutral[8],n="1px solid transparent";switch(e.$type){case"current":t=ts.Accent.Light[5];break;case"hover-dash":t=ts.Accent.Light[6],n=`1px dashed ${ts.Accent.Light[4](e)}`;break;case"hover-current":t=ts.Neutral[8],n=`1px solid ${ts.Primary(e)}`;break;case"selected":t=ts.Accent.Light[5],n=`1px solid ${ts.Accent.Light[4](e)}`;break;case"selected-outline":t=ts.Accent.Light[5],n=`1px solid ${ts.Primary(e)}`;break;case"overlap":t=ts.Accent.Light[4],n=`1px solid ${ts.Accent.Light[4](e)}`;break;case"overlap-outline":t=ts.Accent.Light[4],n=`1px solid ${ts.Primary(e)}`}return{color:t,border:n}},ld=K.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 2.5rem;
`,cd=K.default.div`
    position: absolute;
    height: 2.5rem;
    width: 50%;

    ${e=>{if(!e.$type)return;const{color:t,border:n}=sd(e);return i.css`
            background-color: ${t};
            background-clip: content-box;
            border-top: ${n};
            border-bottom: ${n};
        `}}
`,dd=K.default(cd)`
    left: 0;
`,ud=K.default(cd)`
    right: 0;
`,fd=K.default.div`
    z-index: -1;
    box-shadow: 0 0 4px 1px ${ts.Shadow.Accent};
    position: absolute;
    height: 100%;
    width: 50%;
    display: none;

    ${e=>e.$shadow&&"display: block;"}
`,hd=K.default(fd)`
    left: 0;
`,pd=K.default(fd)`
    right: 0;
`,gd=K.default.div`
    position: absolute;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    width: 2.5rem;

    border: 1px solid transparent;
    border-radius: 50%;

    ${e=>{if(e.$type){const{color:t,border:n}=sd(e);return i.css`
                background-color: ${t};
                background-clip: content-box;
                border: ${n};
            `}}}

    ${e=>e.$shadow&&i.css`
            &:before {
                content: "";
                border-radius: 50%;
                position: absolute;
                height: 100%;
                width: 100%;
            }
        `}
`,md=K.default(gd)`
    right: calc(50% - 1.25rem);
    clip-path: inset(-3px 1.25rem -3px -3px);
    &:before {
        box-shadow: -1px 0 4px 1px ${ts.Shadow.Accent};
    }
`,bd=K.default(gd)`
    left: calc(50% - 1.25rem);
    clip-path: inset(-3px -3px -3px 1.25rem);
    &:before {
        box-shadow: 1px 0 4px 1px ${ts.Shadow.Accent};
    }
`,vd=K.default(exports.Text.H5)`
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

    ${e=>{const{$disabled:t,$type:n}=e;if(t)return"selected"===n?i.css`
                    ${ys.getTextStyle("H5","semibold")};
                    color: ${ts.Accent.Light[2]};
                `:"hidden"===n?i.css`
                    visibility: hidden;
                `:i.css`
                color: ${ts.Neutral[4]};
            `;switch(n){case"selected":return i.css`
                    ${ys.getTextStyle("H5","semibold")};
                    color: ${ts.Primary};
                `;case"current":return i.css`
                    color: ${ts.Neutral[3]};
                `;case"unavailable":return i.css`
                    color: ${ts.Neutral[4]};
                `;case"hidden":return i.css`
                    visibility: hidden;
                `;default:return i.css`
                    color: ${ts.Neutral[1]};
                `}}}
`,yd=({bgLeft:t,bgRight:n,circleLeft:r,circleRight:i,shadow:o,circleShadow:a,labelType:s,disabled:l,interactive:c,date:d,onSelect:u,onHover:f,onHoverEnd:h})=>e.jsxs(ld,{children:[e.jsx(hd,{$shadow:t&&o}),e.jsx(dd,{$type:t,$shadow:t&&o}),e.jsx(md,{$type:r,$shadow:r&&a}),e.jsx(pd,{$shadow:n&&o}),e.jsx(ud,{$type:n,$shadow:n&&o}),e.jsx(bd,{$type:i,$shadow:i&&a}),e.jsx(vd,Object.assign({weight:"regular",$type:s,$disabled:l,$interactive:c,onClick:()=>{u(d)},onMouseEnter:()=>{f(d)},onMouseLeave:()=>{h&&h(d)}},{children:d.date()}))]}),xd=({date:t,calendarDate:n,startDate:r,endDate:i,currentFocus:o,hoverDate:a,minDate:s,maxDate:l,disabledDates:c,allowDisabledSelection:d,isNewSelection:u,showActiveMonthDaysOnly:f,onSelect:h,onHover:p})=>{const g=tc.isDisabledDay(t,c,s,l),m=!g||d,b=()=>{const e=Wl(a),t=e.isBefore(i,"day"),n=e.isAfter(r,"day");let s,l,c,d;return"start"===o&&i&&t&&(r&&n?(c=a,d=i):(s=a,l=r||i)),"end"===o&&r&&n&&(i&&t?(c=r,d=a):(s=i||r,l=a)),{hoverStart:s,hoverEnd:l,overlapStart:c,overlapEnd:d}},v={date:t,calendarDate:n,disabled:g,interactive:m,onSelect:()=>{h(t,!m)},onHover:()=>{p(t.format("YYYY-MM-DD"),!m)}};return e.jsx(yd,Object.assign({},v,(()=>{const e={};if(n.month()!==t.month())e.labelType=f?"hidden":"unavailable";else if(Wl().isSame(t,"day")&&!g)e.labelType="current",e.circleLeft="current",e.circleRight="current";else if(u){const n="end"===o&&r&&t.isBefore(r),a="start"===o&&i&&t.isAfter(i);(n||a)&&(e.labelType="unavailable")}return e})(),(()=>{const e={},o=t.isSame(r,"day"),a=t.isSame(i,"day");return f&&n.month()!==t.month()?(e.labelType="hidden",e):((r&&o||i&&a)&&(e.labelType="selected",e.circleLeft="selected-outline",e.circleRight="selected-outline"),r&&i&&t.isBetween(r,i,"day","[]")&&(e.labelType="selected",o||(e.bgLeft="selected"),a||(e.bgRight="selected")),e)})(),(()=>{if(!a)return;const e={};t.isSame(a,"day")&&(e.circleShadow=!0,e.circleLeft="hover-current",e.circleRight="hover-current");const{hoverStart:n,hoverEnd:r,overlapStart:i,overlapEnd:o}=b();if(n&&r){if(t.isBetween(n,r,"day","[]")){const i=t.isSame(n,"day"),o=t.isSame(r,"day");e.labelType="selected",i||(e.bgLeft="hover-dash"),o||(e.bgRight="hover-dash")}return e}if(i&&o){if(t.isBetween(i,o,"day","[]")){const n=t.isSame(i,"day"),r=t.isSame(o,"day");e.labelType="selected",(n||r)&&(e.circleShadow=!0,e.circleLeft="overlap-outline",e.circleRight="overlap-outline"),n||(e.bgLeft="overlap"),r||(e.bgRight="overlap")}return e}return e})()))};Wl.extend(Kl);const wd=({calendarDate:n,currentFocus:r,disabledDates:i,selectedStartDate:o,selectedEndDate:a,onSelect:s,onHover:l,isNewSelection:c,minDate:d,maxDate:u,allowDisabledSelection:f,showActiveMonthDaysOnly:h})=>{const p=t.useMemo((()=>tc.generateDays(n)),[n]),[g,m]=t.useState(""),b=(e,t)=>{t&&!f||s(e)},v=(e,t)=>{t&&!f||(m(e),l(e))},y=()=>{m(""),l("")};return e.jsxs(Jc,Object.assign({"data-testid":"calendar-content"},{children:[p[0].map(((t,n)=>e.jsx(ed,{children:e.jsx(exports.Text.H6,Object.assign({weight:"semibold"},{children:Wl(t).format("ddd")}))},`week-day-${n}`))),p.map(((t,s)=>e.jsx(td,Object.assign({onMouseLeave:y},{children:t.map(((t,s)=>e.jsx(xd,{date:t,calendarDate:n,startDate:o,endDate:a,hoverDate:g,currentFocus:r,minDate:d,maxDate:u,disabledDates:i,allowDisabledSelection:f,isNewSelection:c,showActiveMonthDaysOnly:h,onSelect:b,onHover:v},`day-${s}`)))}),s)))]}))},$d=({date:t,calendarDate:n,selectedDate:r,hoverDate:i,minDate:o,maxDate:a,disabledDates:s,allowDisabledSelection:l,numberOfDays:c,onSelect:d,onHover:u})=>{const f=tc.isDisabledDay(t,s,o,a),h=!f||l,{start:p,end:g}=r?tc.getFixedRangeStartEnd(sc.toDayjs(r),c):{start:void 0,end:void 0},{start:m,end:b}=i?tc.getFixedRangeStartEnd(sc.toDayjs(i),c):{start:void 0,end:void 0},v=r&&t.isBetween(p,g,"day","[]"),y=i&&t.isBetween(m,b,"day","[]"),x=v&&t.isSame(p,"day")||y&&t.isSame(m,"day"),w=v&&t.isSame(g,"day")||y&&t.isSame(b,"day"),$=(e,t,n,r)=>{n?e.circleLeft=t:e.bgLeft=t,r?e.circleRight=t:e.bgRight=t},j={date:t,calendarDate:n,disabled:f,interactive:h,onSelect:()=>{d(t,!h)},onHover:()=>{u(t.format("YYYY-MM-DD"),!h)}};return e.jsx(yd,Object.assign({},j,(()=>{const e={};return v||y?e.labelType="selected":n.month()!==t.month()?e.labelType="unavailable":Wl().isSame(t,"day")&&!f&&(e.labelType="current",e.circleLeft="current",e.circleRight="current"),e})(),(()=>{const e={},n=t.format("YYYY-MM-DD");return y&&$(e,"hover-dash",n===m,n===b),v&&$(e,"selected",n===p,n===g),v&&y&&$(e,"overlap",x,w),n===p&&(y?(e.circleLeft="overlap-outline",e.circleRight="overlap-outline"):(e.circleRight="selected-outline",e.circleLeft="selected-outline")),n===m&&(e.circleLeft="hover-current",e.circleRight="hover-current",e.circleShadow=!0,m>=p&&m<g&&(e.circleLeft="overlap-outline",e.circleRight="overlap-outline")),e})()))},jd=({calendarDate:n,disabledDates:r,selectedStartDate:i,onSelect:o,onHover:a,minDate:s,maxDate:l,allowDisabledSelection:c,numberOfDays:d})=>{const u=t.useMemo((()=>tc.generateDays(n)),[n]),[f,h]=t.useState(""),p=(e,t)=>{t&&!c||(o(e),e&&!Wl(e).isSame(e,"month")&&h(""))},g=(e,t)=>{t&&!c||(h(e),a(e))},m=()=>{h(""),a("")};return e.jsxs(Jc,Object.assign({"data-testid":"calendar-content"},{children:[u[0].map(((t,n)=>e.jsx(ed,{children:e.jsx(exports.Text.H6,Object.assign({weight:"semibold"},{children:Wl(t).format("ddd")}))},`week-day-${n}`))),u.map(((t,o)=>e.jsx(td,Object.assign({onMouseLeave:m},{children:t.map(((t,o)=>e.jsx($d,{date:t,calendarDate:n,selectedDate:i,hoverDate:f,minDate:s,maxDate:l,disabledDates:r,allowDisabledSelection:c,onSelect:p,onHover:g,numberOfDays:d},`day-${o}`)))}),o)))]}))},Sd=K.default.div`
    width: 100%;
    padding: 1.5rem 2rem;
    background: ${ts.Neutral[8]};

    ${e=>{if("input"===e.$type)return i.css`
                border: 1px solid ${ts.Neutral[5]};
                border-radius: 8px;
                overflow: hidden;
                padding: 1.5rem 1.25rem;

                [data-id="header"] {
                    margin: 0 0 0.25rem 0;
                }
            `}}
`,kd=({date:t,calendarDate:n,selectedDate:r,hoverDate:i,minDate:o,maxDate:a,disabledDates:s,allowDisabledSelection:l,onSelect:c,onHover:d})=>{const u=tc.isDisabledDay(t,s,o,a),f=!u||l,{start:h,end:p}=tc.getWeekStartEnd(sc.toDayjs(r)),{start:g,end:m}=tc.getWeekStartEnd(sc.toDayjs(i)),b=r&&t.isBetween(h,p,"day","[]"),v=i&&t.isBetween(g,m,"day","[]"),y=b&&t.isSame(h)||v&&t.isSame(g),x=b&&t.isSame(p)||v&&t.isSame(m),w={date:t,calendarDate:n,disabled:u,interactive:f,onSelect:()=>{c(t,!f)},onHover:()=>{d(t.format("YYYY-MM-DD"),!f)}};return e.jsx(yd,Object.assign({},w,(()=>{const e={};return b||v?e.labelType="selected":n.month()!==t.month()?e.labelType="unavailable":Wl().isSame(t,"day")&&!u&&(e.labelType="current",e.circleLeft="current",e.circleRight="current"),e})(),(()=>{const e={};let t;return b&&v?(t="hover-current",e.shadow=!0,e.circleShadow=y||x):b?t="selected-outline":v&&(t="hover-dash"),t&&(y?e.circleLeft=t:e.bgLeft=t,x?e.circleRight=t:e.bgRight=t),e})()))},Cd=({calendarDate:n,disabledDates:r,selectedStartDate:i,onSelect:o,onHover:a,minDate:s,maxDate:l,allowDisabledSelection:c})=>{const d=t.useMemo((()=>tc.generateDays(n)),[n]),[u,f]=t.useState(""),h=(e,t)=>{if(t&&!c)return;const n=e.startOf("week");o(n),e&&!Wl(e).isSame(n,"month")&&f("")},p=(e,t)=>{t&&!c||(f(e),a(e))},g=()=>{f(""),a("")};return e.jsxs(Jc,Object.assign({"data-testid":"calendar-content"},{children:[d[0].map(((t,n)=>e.jsx(ed,{children:e.jsx(exports.Text.H6,Object.assign({weight:"semibold"},{children:Wl(t).format("ddd")}))},`week-day-${n}`))),d.map(((t,o)=>e.jsx(td,Object.assign({onMouseLeave:g},{children:t.map(((t,o)=>e.jsx(kd,{date:t,calendarDate:n,selectedDate:i,hoverDate:u,minDate:s,maxDate:l,disabledDates:r,allowDisabledSelection:c,onSelect:h,onHover:p},`day-${o}`)))}),o)))]}))},Od=Y.default.forwardRef((({disabledDates:n,onYearMonthDisplayChange:r,onSelect:i,onHover:o,onDismiss:a,value:s,endValue:l,currentFocus:c,withButton:d,variant:u,minDate:f,maxDate:h,allowDisabledSelection:p,type:g="standalone",selectWithinRange:m=!0,initialCalendarDate:b,numberOfDays:v,showActiveMonthDaysOnly:y=!1},x)=>{const w=t.useRef(),$=t.useRef(void 0);t.useImperativeHandle(x,(()=>({reset(){w.current.resetView()},setCalendarDate(e){w.current.setCalendarDate(e)}})));const j=e=>{const t=e.format("YYYY-MM-DD");w.current.setCalendarDate(t),k(t)},S=e=>{C(e)},k=e=>{i&&i(e)},C=e=>{o&&o(e)},O=e=>{if(r){const t={month:e.month()+1,year:e.year()};r(t)}};return e.jsx(Sd,Object.assign({$type:g},{children:e.jsx(Qc,Object.assign({type:g,ref:w,withButton:d,doneButtonDisabled:(()=>{if(!d)return;let e=!0;switch(u){case"single":e=!1;break;case"range":case"fixed-range":e=!!s!=!!l;break;case"week":e=!s&&!l}return e})(),onDismiss:a,minDate:f,maxDate:h,selectWithinRange:m,currentFocus:c,selectedStartDate:s,selectedEndDate:l,allowDisabledSelection:p,onCalendarDateChange:e=>{$.current&&$.current.isSame(e,"month")||O(e),$.current=e},initialCalendarDate:b},{children:({calendarDate:t})=>(t=>{switch(u){case"week":return e.jsx(Cd,{calendarDate:t,disabledDates:n,selectedStartDate:s,minDate:f,maxDate:h,allowDisabledSelection:p,onSelect:j,onHover:S});case"fixed-range":return e.jsx(jd,{calendarDate:t,disabledDates:n,selectedStartDate:s,minDate:f,maxDate:h,allowDisabledSelection:p,onSelect:j,onHover:S,numberOfDays:v});default:return e.jsx(wd,{calendarDate:t,currentFocus:c,disabledDates:n,selectedStartDate:s,selectedEndDate:l,minDate:f,maxDate:h,isNewSelection:m,allowDisabledSelection:p,showActiveMonthDaysOnly:y,onSelect:j,onHover:S})}})(t)}))}))})),Td=Y.default.forwardRef(((t,n)=>{var{width:r}=t,i=X(t,["width"]);return e.jsx(Oc,Object.assign({$width:r,"data-testid":"calendar-dropdown"},{children:e.jsx(Od,Object.assign({ref:n},i))}))})),Dd=K.default.div`
    width: 41rem;

    ${e=>{if(e.$hasBorder)return i.css`
                border: 1px solid ${ts.Neutral[5](e)};
                border-radius: 12px;
                overflow: hidden;
            `}}
`,Id=K.default.div`
    border-radius: 0.5rem;
    background: ${ts.Neutral[8]};
    padding: 1rem 2rem;
    box-shadow: 0 0.125rem 0.5rem rgba(104, 104, 104, 0.25);
`,Ed=t=>{var{children:n}=t,r=X(t,["children"]);const i=r["data-testid"]||"card";return e.jsx(Id,Object.assign({},r,{"data-testid":i},{children:"string"==typeof n?e.jsx(exports.Text.Body,{children:n}):n}))},_d=i.keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,Md=K.default.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    ${e=>{let t,n;if("small"===e.$displaySize)t="1.5rem",n="1.5rem";else t="2rem",n="2rem";return i.css`
            height: ${t};
            width: ${n};
        `}}

    svg {
        animation: 200ms ease-in-out ${_d};
        width: 100%;
        height: 100%;
        color: ${e=>e.$disabled?ts.Neutral[4](e):e.$unchecked?ts.Accent.Light[2](e):ts.Primary(e)};
    }
`,Rd=K.default.input`
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
`,Ad=n=>{var{className:r,checked:i,disabled:o,indeterminate:a,onChange:s,onKeyPress:l,displaySize:c="default"}=n,d=X(n,["className","checked","disabled","indeterminate","onChange","onKeyPress","displaySize"]);const f=t.useRef();t.useEffect((()=>{f.current.indeterminate=a}),[a]);const h=e=>{if(!o){const t=e;if(!(" "===t.key||"change"===e.type))return;s&&s(e),l&&l(t)}};return e.jsxs(Md,Object.assign({className:r,"data-testid":"checkbox",role:"checkbox","aria-checked":a?"mixed":i,"aria-labelledby":"checkbox-input",tabIndex:o?-1:0,onKeyDown:h,$displaySize:c,$disabled:o,$unchecked:!(a||i||o)},{children:[e.jsx(Rd,Object.assign({id:"checkbox-input","data-testid":"checkbox-input","aria-hidden":"true",type:"checkbox",checked:i,ref:f,tabIndex:-1,onChange:h,disabled:o},d)),a?e.jsx(u.MinusSquareFillIcon,{"data-testid":"indeterminate"}):i?e.jsx(u.SquareTickFillIcon,{"data-testid":"checkmark"}):o?e.jsx(u.SquareFillIcon,{"data-testid":"disabled-empty-checkbox"}):e.jsx(u.SquareIcon,{"data-testid":"empty-checkbox"})]}))};var Nd=Ai,Bd=/\s/;var Fd=function(e){for(var t=e.length;t--&&Bd.test(e.charAt(t)););return t},Ld=/^\s+/;var Pd=function(e){return e?e.slice(0,Fd(e)+1).replace(Ld,""):e},zd=ro,Hd=Zi,Wd=/^[-+]0x[0-9a-f]+$/i,Vd=/^0b[01]+$/i,Yd=/^0o[0-7]+$/i,Ud=parseInt;var Kd=function(e){if("number"==typeof e)return e;if(Hd(e))return NaN;if(zd(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=zd(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Pd(e);var n=Vd.test(e);return n||Yd.test(e)?Ud(e.slice(2),n?2:8):Wd.test(e)?NaN:+e},qd=ro,Xd=function(){return Nd.Date.now()},Gd=Kd,Zd=Math.max,Qd=Math.min;var Jd=function(e,t,n){var r,i,o,a,s,l,c=0,d=!1,u=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var n=r,o=i;return r=i=void 0,c=t,a=e.apply(o,n)}function p(e){var n=e-l;return void 0===l||n>=t||n<0||u&&e-c>=o}function g(){var e=Xd();if(p(e))return m(e);s=setTimeout(g,function(e){var n=t-(e-l);return u?Qd(n,o-(e-c)):n}(e))}function m(e){return s=void 0,f&&r?h(e):(r=i=void 0,a)}function b(){var e=Xd(),n=p(e);if(r=arguments,i=this,l=e,n){if(void 0===s)return function(e){return c=e,s=setTimeout(g,t),d?h(e):a}(l);if(u)return clearTimeout(s),s=setTimeout(g,t),h(l)}return void 0===s&&(s=setTimeout(g,t)),a}return t=Gd(t)||0,qd(n)&&(d=!!n.leading,o=(u="maxWait"in n)?Zd(Gd(n.maxWait)||0,t):o,f="trailing"in n?!!n.trailing:f),b.cancel=function(){void 0!==s&&clearTimeout(s),c=0,r=l=i=s=void 0},b.flush=function(){return void 0===s?a:m(Xd())},b},eu=Ii(Jd),tu=Jd,nu=ro;var ru=Ii((function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return nu(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),tu(e,t,{leading:r,maxWait:t,trailing:i})})),iu=new Map,ou=new WeakMap,au=0,su=void 0;function lu(e){return Object.keys(e).sort().filter((t=>void 0!==e[t])).map((t=>`${t}_${"root"===t?function(e){return e?(ou.has(e)||(au+=1,ou.set(e,au.toString())),ou.get(e)):"0"}(e.root):e[t]}`)).toString()}function cu(e,t,n={},r=su){if(void 0===window.IntersectionObserver&&void 0!==r){const i=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:"number"==typeof n.threshold?n.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),()=>{}}const{id:i,observer:o,elements:a}=function(e){const t=lu(e);let n=iu.get(t);if(!n){const r=new Map;let i;const o=new IntersectionObserver((t=>{t.forEach((t=>{var n;const o=t.isIntersecting&&i.some((e=>t.intersectionRatio>=e));e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=o),null==(n=r.get(t.target))||n.forEach((e=>{e(o,t)}))}))}),e);i=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:o,elements:r},iu.set(t,n)}return n}(n),s=a.get(e)||[];return a.has(e)||a.set(e,s),s.push(t),o.observe(e),function(){s.splice(s.indexOf(t),1),0===s.length&&(a.delete(e),o.unobserve(e)),0===a.size&&(o.disconnect(),iu.delete(i))}}function du({threshold:e,delay:t,trackVisibility:n,rootMargin:r,root:i,triggerOnce:o,skip:a,initialInView:s,fallbackInView:l,onChange:c}={}){var d;const[u,f]=Y.useState(null),h=Y.useRef(),[p,g]=Y.useState({inView:!!s,entry:void 0});h.current=c,Y.useEffect((()=>{if(a||!u)return;let s;return s=cu(u,((e,t)=>{g({inView:e,entry:t}),h.current&&h.current(e,t),t.isIntersecting&&o&&s&&(s(),s=void 0)}),{root:i,rootMargin:r,threshold:e,trackVisibility:n,delay:t},l),()=>{s&&s()}}),[Array.isArray(e)?e.toString():e,u,i,r,o,a,n,l,t]);const m=null==(d=p.entry)?void 0:d.target,b=Y.useRef();u||!m||o||a||b.current===m||(b.current=m,g({inView:!!s,entry:void 0}));const v=[f,p.inView,p.entry];return v.ref=v[0],v.inView=v[1],v.entry=v[2],v}const uu=K.default.div`
    width: 100%;
`,fu=K.default.div`
    ${ys.getTextStyle("H4","semibold")}
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    color: ${ts.Primary};
    border: 1px solid ${ts.Primary};
    background-color: ${ts.Neutral[8]};

    ${is.MaxWidth.mobileL} {
        padding: 1rem;
    }

    ${e=>{if(e.$warn)return i.css`
                color: ${ts.Validation.Red.Text};
                border: 1px solid ${ts.Validation.Red.Border};
            `}}
`,hu=K.default(fu)`
    position: relative;
    opacity: ${e=>e.$visible?1:0};
`,pu=K.default(fu)`
    position: fixed;
    z-index: 10;

    ${e=>{const{$top:t,$left:n,$right:r,$warn:o}=e;return i.css`
            /* style object will be converted to px */
            ${{top:t,left:n,right:r}}
            box-shadow: 0px 0px 4px 1px
                ${o?ts.Validation.Red.Border:ts.Accent.Light[2]};

            ${is.MaxWidth.mobileL} {
                left: 0;
                right: 0;
                border-radius: 0;
                border-left: none;
                border-right: none;
            }
        `}}
`,gu=K.default.div`
    ${ys.getTextStyle("H4","bold")}
    margin-left: 0.5rem;
    margin-right: 1.5rem;

    ${is.MaxWidth.mobileL} {
        margin-right: 3rem;
    }
`,mu=K.default.div`
    margin-left: auto;
`;var bu,vu;!function(e){e.AM="AM",e.PM="PM"}(bu||(bu={})),function(e){e.roundToNearestHour=(e,t)=>{const n=Wl(e,"HH:mm");return(0===n.minute()?n:t?n.minute(0).add(1,"hour"):n.minute(0)).format("HH:mm")},e.generateHourlyIntervals=(e,t,n="ha")=>{const r="HH:mm";let i=Wl(e,r),o=Wl(t,r);i.isSame(o)&&(o=o.add(1,"day"));const a=[];for(;i.isBefore(o);)a.push(i.format(n)),i=i.add(1,"hour");return a},e.getTimeValues=(e,t)=>{const n={hour:"",minute:"",period:bu.AM};if(!t)return n;try{if("24hr"===e){const r=wu(t,e);n.minute=dc.padValue(r.minute);const i=parseInt(r.hour);0===Math.floor(i/12)?(n.period=bu.AM,n.hour=0===i?"12":dc.padValue(i.toString())):(n.period=bu.PM,n.hour=12===i?i.toString():dc.padValue((i-12).toString()))}else{const r=wu(t,e);n.hour=dc.padValue(r.hour),n.minute=dc.padValue(r.minute),n.period="am"===r.period.toLowerCase()?bu.AM:bu.PM}return n}catch(e){return n}},e.updateMinutes=(e,t)=>{const n=parseInt(e);if(isNaN(n))return"add"===t?dc.padValue("0"):"55";const r=Math.floor(n/5),i=(("add"===t?r+1:n%5==0?r-1:r)%12+12)%12;return dc.padValue((5*i).toString())},e.updateHours=(e,t)=>{const n=parseInt(e);if(isNaN(n))return"add"===t?dc.padValue("1"):"12";const r="add"===t?n+1:n-1;return r<=12&&r>0?dc.padValue(r.toString()):13===r?dc.padValue("1"):"12"},e.convertTo24HourFormat=e=>{const t=parseInt(e.hour);let n;return n=e.period===bu.PM?12===t?t.toString():(t+12).toString():12===t?"00":e.hour,`${n}:${e.minute}`},e.convertHourTo12HourFormat=e=>{const t=parseInt(e),n=t%12==0?12..toString():(t%12).toString();return dc.padValue(n)},e.formatDisplayValue=(e,t)=>{try{const n=wu(e,t),r=dc.padValue(n.hour);let i=`${r}:${dc.padValue(n.minute)}`;return"12hr"===t?(i+=n.period.toLowerCase(),i):i}catch(e){return""}},e.toMinutesSeconds=e=>({minutes:Math.floor(e/60),seconds:e%60}),e.to24Hour=e=>{if((null==e?void 0:e.includes("am"))||(null==e?void 0:e.includes("pm"))){const[t,n]=e.split(/(am|pm)/i),[r,i]=t.split(":").map(Number);let o=r;return"pm"===n&&o<12&&(o+=12),"am"===n&&12===o&&(o=0),$u(o,i)}return e},e.generateTimings=(t,n="12hr",r,i)=>{const o=[];let a=0,s=1440-t;for(r&&(a=e.timeToMinutes(r)),i&&(s=e.timeToMinutes(i));a<=s;){let e=Math.floor(a/60);const r=a%60;if("12hr"===n){const t=e>=12?"pm":"am";e%=12,e=e||12;const n=$u(e,r,t);o.push(n)}else{const t=$u(e,r);o.push(t)}a+=t}return o},e.parseInput=(e,t="12hr")=>{if(""===e||void 0===e)return e;const n=e.trim().toLowerCase(),r=/^(?:(\d{1,2})([:.])?(\d{2})?)?(a|p|am|pm)?$/.exec(n);if(!r)return;let i=parseInt(r[1]||"0",10);const o=parseInt(r[3]||"0",10);let a=r[4];if(void 0===r[1]||i>24||o>59)return;if("a"===a?a="am":"p"===a&&(a="pm"),"24hr"===t)return"pm"===a&&i<12?i+=12:("am"===a&&12===i||24===i)&&(i=0),$u(i,o);a?0===i||24===i?(a="am",i=12):i>12&&(a="pm",i-=12):(a=0===i||24===i||i>6&&i<12?"am":"pm",i=i%12||12);return $u(i,o,a)},e.findClosestFlooredTime=(t,n)=>{if(!t)return t;const r=e.timeToMinutes(t);let i="",o=1/0;for(const t of n){const n=e.timeToMinutes(t)-r;if(n<=0&&Math.abs(n)<o)o=Math.abs(n),i=t;else if(n>0)break}return i},e.timeToMinutes=e=>{const[t,n]=e.toLowerCase().split(/(am|pm)/),[r,i]=t.split(":").map(Number);let o=r;return"pm"===n&&12!==o&&(o+=12),"am"===n&&12===o&&(o=0),60*o+i}}(vu||(vu={}));const yu=(e,t)=>{const n=parseInt(e);return"24hr"===t?n>=0&&n<=23:n>=1&&n<=12},xu=e=>{const t=parseInt(e);return t>=0&&t<=59},wu=(e,t)=>{const n=e.split(":"),r=new Error("Invalid format");if("12hr"===t){if(2!==n.length||4!==n[1].length)throw r;const e=n[1].substring(0,2),o=n[1].substring(2);if(!yu(n[0],t)||!xu(e)||"am"!==(i=o).toLowerCase()&&"pm"!==i.toLowerCase())throw r;return{hour:n[0],minute:e,period:n[1].substring(2)}}if(2!==n.length)throw r;if(!yu(n[0],t)||!xu(n[1]))throw r;return{hour:n[0],minute:n[1]};var i},$u=(e,t,n)=>n?`${e}:${t.toString().padStart(2,"0")}${n}`:`${e.toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}`,ju=t=>n=>{switch(t){case"maintenance":{const t=n;return e.jsxs(e.Fragment,{children:["This service is currently unavailable. Please try again after ",e.jsx("strong",{children:t.dateString}),"."]})}case"inactivity":{const t=n,r=Math.floor(t.secondsLeft/60),i=t.secondsLeft%60;return e.jsxs(e.Fragment,{children:["You’ve been inactive for a while. To protect your privacy, you’ll be logged out in ",r," minutes"," ",i," seconds.",e.jsx("br",{}),e.jsx("br",{}),"If you wish to stay on this page, let us know now."]})}}};exports.ErrorDisplayHelper=void 0,(exports.ErrorDisplayHelper||(exports.ErrorDisplayHelper={})).imgAttributeHelper=e=>{const{base:t,md:n,lg:r,width:i,height:o}=e;return{srcSet:`${t} 400w, ${n} 800w, ${r} 1200w`,src:r,sizes:`(max-width: ${ns.mobileL}px) 400px, (max-width: ${ns.tablet}px) 800px, 1200px`,width:i,height:o}};const{imgAttributeHelper:Su}=exports.ErrorDisplayHelper,ku={400:{base:"https://assets.life.gov.sg/react-design-system/img/error/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/400@3x.png",width:400,height:280},403:{base:"https://assets.life.gov.sg/react-design-system/img/error/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/403@3x.png",width:400,height:280},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/404@3x.png",width:400,height:280},408:{base:"https://assets.life.gov.sg/react-design-system/img/error/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/408@3x.png",width:400,height:280},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@3x.png",width:400,height:280},502:{base:"https://assets.life.gov.sg/react-design-system/img/error/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/502@3x.png",width:400,height:280},503:{base:"https://assets.life.gov.sg/react-design-system/img/error/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/503@3x.png",width:400,height:280},504:{base:"https://assets.life.gov.sg/react-design-system/img/error/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/504@3x.png",width:400,height:280},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/confirmation@3x.png",width:400,height:280},"insufficient-credits":{base:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit.png",md:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit@3x.png",width:400,height:280},inactivity:{base:"https://assets.life.gov.sg/react-design-system/img/error/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/inactivity@3x.png",width:400,height:280},"link-error":{base:"https://assets.life.gov.sg/react-design-system/img/error/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/link-error@3x.png",width:400,height:280},logout:{base:"https://assets.life.gov.sg/react-design-system/img/error/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/logout@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found@3x.png",width:400,height:280},"payment-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful@3x.png",width:400,height:281},"transfer-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful@3x.png",width:400,height:280},"unsupported-browser":{base:"https://assets.life.gov.sg/react-design-system/img/error/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@3x.png",width:400,height:280},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/warning@3x.png",width:400,height:280}},Cu={400:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400@3x.png",width:400,height:215},403:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403@3x.png",width:400,height:254},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404@3x.png",width:400,height:319},408:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408@3x.png",width:400,height:330},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@3x.png",width:400,height:232},502:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502@3x.png",width:400,height:215},503:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503@3x.png",width:400,height:191},504:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504@3x.png",width:400,height:261},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation@3x.png",width:400,height:280},"insufficient-credits":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit@3x.png",width:400,height:280},inactivity:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity@3x.png",width:400,height:276},"link-error":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error@3x.png",width:400,height:280},logout:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found@3x.png",width:400,height:290},"payment-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful@3x.png",width:400,height:280},"transfer-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful@3x.png",width:400,height:280},"unsupported-browser":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@3x.png",width:400,height:232},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning@3x.png",width:400,height:280}},Ou=Object.assign(Object.assign({},ku),{400:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/400@3x.png",width:400,height:280},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@3x.png",width:400,height:280},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@3x.png",width:400,height:280},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/confirmation@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@3x.png",width:400,height:280},"unsupported-browser":{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@3x.png",width:400,height:280},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/warning@3x.png",width:400,height:280}}),Tu=Object.assign(Object.assign({},ku),{400:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/400@3x.png",width:400,height:280},403:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/403@3x.png",width:400,height:280},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/404@3x.png",width:400,height:280},408:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/408@3x.png",width:400,height:280},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/generic-error@3x.png",width:400,height:280},502:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/502@3x.png",width:400,height:280},503:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/503@3x.png",width:400,height:280},504:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/504@3x.png",width:400,height:280},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/confirmation@3x.png",width:400,height:280},inactivity:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/inactivity@3x.png",width:400,height:280},"link-error":{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/link-error@3x.png",width:400,height:280},logout:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/logout@3x.png",width:400,height:280},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/warning@3x.png",width:400,height:280},"payment-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/payment-unsuccessful@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/no-item-found@3x.png",width:400,height:280}}),Du=e=>new Map([["400",{img:Su(e[400]),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["403",{img:Su(e[403]),title:"Error loading page",description:"You may not have permission to view this page. If someone gave you this link, let them know about this error."}],["404",{img:Su(e[404]),title:"Page not found",description:"If you entered or pasted the URL, check that it’s correct. If someone gave you this link, let them know about this error."}],["408",{img:Su(e[408]),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["500",{img:Su(e[500]),title:"Something went wrong",description:"We're working on a fix for the problem. Please try again later."}],["502",{img:Su(e[502]),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["503",{img:Su(e[503]),title:"Service under maintenance",description:"This service is currently unavailable. Please try again later."}],["504",{img:Su(e[504]),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["confirmation",{img:Su(e.confirmation),title:"Leave and lose changes?",description:"You have unsaved changes. If you leave this page, you will lose the changes you’ve made."}],["link-error",{img:Su(e["link-error"]),title:"Link has expired",description:"If you entered or pasted the URL, check that it’s correct. If someone gave you this link, let them know it has expired."}],["logout",{img:Su(e.logout),title:"You’ve been logged out",description:"It looks like you’ve left, so we logged you out to protect your privacy."}],["insufficient-credits",{img:Su(e["insufficient-credits"]),title:"Insufficient credits",description:"You do not have enough credits to make this transaction."}],["inactivity",{img:Su(e.inactivity),title:"Are you still there?",description:"You’ve been inactive for a while. To protect your privacy, you’ll be logged out soon.\n\nIf you wish to stay on this page, let us know now.",renderDescription:ju("inactivity")}],["maintenance",{img:Su(e[503]),title:"Service under maintenance",description:"This service is currently unavailable. Please try again later.",renderDescription:ju("maintenance")}],["no-item-found",{img:Su(e["no-item-found"]),title:"No results found",description:"Try adjusting your search or filters to find what you’re looking for."}],["payment-unsuccessful",{img:Su(e["payment-unsuccessful"]),title:"Unsuccessful payment",description:"Your payment was unsuccessful. Please try again."}],["transfer-unsuccessful",{img:Su(e["transfer-unsuccessful"]),title:"Unsuccessful transfer",description:"Your transfer was unsuccessful. Please try again."}],["unsupported-browser",{img:Su(e["unsupported-browser"]),title:"Browser not supported",description:"Download the latest version of Chrome, Edge, Firefox or Safari."}],["partially-supported-browser",{img:Su(e["unsupported-browser"]),title:"Browser version not supported",description:"Update to the latest version of Chrome, Edge, Firefox or Safari."}],["warning",{img:Su(e.warning),title:"Are you sure?",description:"You will lose your progress."}]]),Iu=K.default.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`,Eu=K.default.img`
    position: relative;
    width: 25rem;
    height: auto;

    ${is.MaxWidth.mobileL} {
        width: 20rem;
    }

    ${is.MaxWidth.mobileM} {
        width: 18rem;
    }

    ${is.MaxWidth.mobileS} {
        width: 15rem;
    }
`,_u=K.default.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 41rem;
    white-space: pre-wrap;
`,Mu=K.default(exports.Text.H2)`
    margin: 2rem 0 1rem;
    text-align: center;
`,Ru=K.default.div`
    ${ys.getTextStyle("Body","regular")} // Follow styling of Text.Body
    color: ${ts.Neutral[1]}; // Follow styling of Text.Body
    text-align: center;

    strong {
        ${ys.getFontFamily("Body","semibold")}
    }

    a {
        ${ys.getTextStyle("Body","semibold")}
        color: ${ts.Primary};

        :hover,
        :active,
        :focus {
            color: ${ts.Secondary};
        }
    }
`,Au=K.default(qs.Default)`
    margin: 2rem auto 0;
    width: 21rem;

    ${is.MaxWidth.mobileL} {
        width: 100%;
        margin: 2rem auto 0;
    }
`,Nu=t=>{var{type:n,img:r,title:o,description:a,actionButton:s,additionalProps:l,imageOnly:c,illustrationScheme:d}=t,u=X(t,["type","img","title","description","actionButton","additionalProps","imageOnly","illustrationScheme"]);const f=i.useTheme(),h=((e,t)=>{switch(t){case"bookingsg":return Du(Cu).get(e);case"ccube":return Du(Ou).get(e);case"mylegacy":return Du(Tu).get(e);default:return Du(ku).get(e)}})(n,d||(f||ml).resourceScheme),p=u["data-testid"]||"error-display",g=()=>{switch(n){case"maintenance":{const e=l;return l&&e.dateString?h.renderDescription(e):a||void 0}case"inactivity":{const e=l;return l&&e.secondsLeft?h.renderDescription(e):a||void 0}default:return a||void 0}};if(!h)return null;const m=Object.assign(Object.assign(Object.assign(Object.assign({},h),r&&{img:r}),o&&{title:o}),g()&&{description:g()});return e.jsxs(Iu,Object.assign({},u,{"data-testid":p},{children:[e.jsx(Eu,Object.assign({},m.img,{alt:"","data-id":"error-display-image"})),!c&&(m.title||m.description?e.jsxs(_u,{children:[m.title&&("string"==typeof m.title?e.jsx(Mu,Object.assign({"data-testid":`${p}--title`,"data-id":"error-display-title",weight:"semibold"},{children:m.title})):m.title),m.description&&e.jsx(Ru,Object.assign({"data-testid":`${p}--description`,"data-id":"error-display-description"},{children:"string"==typeof m.description?e.jsx("p",{children:m.description}):m.description}))]}):null),s&&(()=>{const t=Object.assign({children:"Proceed"},s);return e.jsx(Au,Object.assign({},t))})()]}))},Bu=ts.Neutral[5],Fu=ts.Neutral[1],Lu=K.default.div`
    overflow: auto;
    display: flex;
    flex-direction: column;
    border: 1px solid ${Bu};
    border-radius: 0.5rem;

    // Hide scrollbar
    ::-webkit-scrollbar {
        display: none;
    }
    * {
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }
`,Pu=K.default.div`
    flex: 1;
`,zu=K.default.table`
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
`,Hu=K.default.tbody`
    tr:last-child {
        td {
            border-bottom: ${e=>e.$showLastRowBottomBorder?`1px solid ${Bu}`:"none"};
        }
    }
`,Wu=K.default.div`
    bottom: 0;
    ${e=>{if(e.$fixed){const t=e.$left?`${e.$left}px`:"0",n=e.$width?`${e.$width}px`:"100%";return i.css`
                position: fixed;
                left: ${t};
                width: ${n};
            `}return i.css`
                position: sticky;
                left: 0;
            `}};
`,Vu=K.default.div`
    overflow: hidden;
    display: flex;
    ${e=>e.$float&&`\n            transform: translateX(-0.5%) translateY(-2rem);\n            border-radius: 4px;\n            box-shadow: 0 0 4px 0 rgba(40, 40, 40, 0.25);\n            width: 101%;\n            border: 1px solid ${Bu};\n        `}
    align-items: center;
    height: 3.5rem;
    padding: 1rem;
    border-top: 1px solid ${Bu};
    border-radius: 0 0 4px 4px;
    background-color: ${Bs.Table.Cell.Selected};
    transition: all 300ms ease;
`,Yu=K.default.tr`
    background-color: ${Bs.Table.Header};
    height: 6rem;
    border-bottom: 1px solid ${Bu};
`,Uu=K.default.th`
    padding: ${e=>e.$isCheckbox?"1.25rem 0.5rem 1.25rem 1.5rem":"1.25rem 1rem"};
    text-align: left;
    cursor: ${e=>e.$clickable?"pointer":"default"};
    vertical-align: middle;
    color: ${Fu};
    border-bottom: 1px solid ${Bu};
    ${e=>{if(e.$isCheckbox)return i.css`
                width: 4rem;
            `}};
`,Ku=K.default.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
        color: ${ts.Neutral[1]};
        margin-left: 0.5rem;
    }
`,qu=K.default.tr`
    background-color: ${e=>e.$isSelected?i.css`
                ${Bs.Table.Cell.Selected};
            `:e.$alternating?i.css`
                ${Bs.Table.Cell.Primary};
            `:i.css`
                ${Bs.Table.Cell.Secondary};
            `};
    border-top: 1px solid ${Bu};
    &:hover {
        ${e=>{if(!e.$isSelected&&e.$isSelectable)return i.css`
                    background-color: ${Bs.Table.Cell.Hover};
                `}};
    }
`,Xu=K.default.td`
    padding: ${e=>e.$isCheckbox?"1.25rem 0.5rem 1.25rem 1.5rem":"1.25rem 1rem"};
    vertical-align: middle;
    color: ${Fu};
    border-bottom: 1px solid ${Bu};
`,Gu=K.default(exports.Text.Body)`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
`,Zu=K.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,Qu=K.default.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 0;
`,Ju=K.default(Nu)`
    h3,
    button {
        margin-top: 2rem;
    }

    p {
        margin-top: 1rem;
    }
`,ef=K.default.td`
    padding: 4rem 0;
`,tf=e=>"small"===e?2.5:3,nf=K.default.div`
    position: relative;
    width: 100%;
    ${e=>{const t=tf(e.$variant);return i.css`
            min-height: ${t}rem;
            height: ${t}rem; // Need this to persist the height when expanding or collapsing list
        `}}
`,rf=i.css`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    // exclude top and bottom borders
    height: calc(${e=>tf(e.$variant)}rem - 2px);
    width: 100%;
    border-radius: ${"4px"};
    border: none;
    background: transparent;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px solid ${ts.Accent.Light[3]};
    }
`,of=K.default.button`
    ${rf}
    cursor: pointer;
`,af=K.default.div`
    ${rf}
`,sf=i.keyframes`
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
`,lf=K.default.div`
    position: relative;
    border: 1px solid ${ts.Neutral[5]};
    border-radius: ${"4px"};
    background: ${ts.Neutral[8]};

    :focus-within {
        border: 1px solid ${ts.Accent.Light[1]};
        box-shadow: ${Bs.InputBoxShadow};
    }

    ${e=>e.expanded?i.css`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 2;
            `:i.css`
                animation: ${sf} 0.5s ease-in-out;
            `}

    ${e=>e.disabled?i.css`
                background: ${ts.Neutral[6](e)};

                ${of} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${ts.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$readOnly?i.css`
                border: none;
                background: transparent !important;

                ${of} {
                    padding: 0;
                }

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.error?i.css`
                border: 1px solid ${ts.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${ts.Validation.Red.Border(e)};
                    box-shadow: ${Bs.InputErrorBoxShadow};
                }
            `:void 0}
`;K.default.div`
    transform: rotate(${e=>e.expanded?180:0}deg);
    transition: ${Ss.Base};
    margin-left: 1rem;
`,K.default(f.ChevronDownIcon)`
    color: ${ts.Neutral[3]};
    ${e=>{let t=hs.Body.fontSize;return"small"===e.$variant&&(t=hs.BodySmall.fontSize),i.css`
            height: ${t}rem;
            width: ${t}rem;
        `}}
`;const cf=K.default.div`
    height: 1px;
    background: ${ts.Neutral[5]};
    margin: 0 0.5rem;
`,df=K.default.div`
    display: flex;
    flex: 1;
    word-break: break-all;
    ${e=>{if(e.$disabled)return i.css`
                color: ${ts.Neutral[3]};
            `}}
`,uf=K.default.div`
    ${e=>ys.getTextStyle("small"===e.$variant?"BodySmall":"Body","regular")}
    text-align: left;
    line-height: 1.375rem;
    ${e=>{if("middle"!==e.truncateType)return i.css`
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                `}}
    overflow: hidden;
`,ff=K.default(uf)`
    color: ${ts.Neutral[3]};
`,hf=({children:n,show:r,error:i,disabled:o,testId:a,onBlur:s,readOnly:l,className:c,variant:d})=>{const u=t.useRef();return fc("mousedown",(function(e){if(!o){if(u&&u.current.contains(e.target))return;r&&s()}}),"document"),e.jsx(nf,Object.assign({className:c,$variant:d},{children:e.jsx(lf,Object.assign({ref:u,error:i&&!r,disabled:o,$readOnly:l,expanded:r,"data-testid":a},{children:n}))}))};var pf;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(pf||(pf={}));const gf=()=>{const[e,n]=t.useState(void 0),r=g.useFloatingTree();return t.useEffect((()=>{if(!r)return void n(void 0);const e=e=>{n(e.zIndex)};return r.events.on(pf.Change,e),r.events.emit(pf.Ready),()=>r.events.off(pf.Change,e)}),[r]),e},mf=K.default.div`
    display: flex;
    flex-direction: column;
`,bf=e=>"right"===e?"bottom-end":"bottom-start",vf=({enabled:n,isOpen:r,onOpen:i,onClose:o,onDismiss:a,renderElement:s,renderDropdown:l,customZIndex:c,clickToToggle:d=!1,offset:u=0,alignment:f="left",fitAvailableHeight:h})=>{var p;const m=t.useRef(null),b=t.useRef(null),{width:v}=qe({targetRef:m,handleHeight:!1}),y={name:"center",fn:({x:e,rects:t})=>{const n=0===e||e+t.floating.width===window.innerWidth,r=window.innerWidth<os.mobileL;return{x:n&&r?(window.innerWidth-t.floating.width)/2:e}}},{refs:x,floatingStyles:w,context:$}=g.useFloating({open:r,onOpenChange:(e,t,n)=>{"escape-key"===n?null==a||a():e&&!r?null==i||i():!e&&r&&(null==o||o(n))},whileElementsMounted:g.autoUpdate,placement:bf(f),middleware:[g.offset(u),g.flip(),g.shift({limiter:g.limitShift()}),g.size({apply({availableHeight:e}){b.current&&Object.assign(b.current.style,{maxHeight:h?`${e}px`:void 0,overflowY:h?"hidden":void 0})}}),y]}),j=gf(),{isMounted:S,styles:k}=g.useTransitionStyles($,{initial:{opacity:0},open:{opacity:1},duration:300}),C=g.useClick($,{enabled:n,toggle:d}),O=g.useDismiss($,{enabled:n}),{getReferenceProps:T,getFloatingProps:D}=g.useInteractions([C,O]);return e.jsxs(e.Fragment,{children:[e.jsx("div",Object.assign({ref:e=>{m.current=e,x.setReference(e)}},T(),{children:s()})),S&&e.jsx(g.FloatingPortal,{children:e.jsx(g.FloatingFocusManager,Object.assign({context:$,modal:!1,initialFocus:b,returnFocus:!1},{children:e.jsx("div",Object.assign({ref:x.setFloating,style:Object.assign(Object.assign({},w),{zIndex:null!==(p=null!=c?c:j)&&void 0!==p?p:50})},D(),{children:e.jsx(mf,Object.assign({ref:b,style:Object.assign({},k),inert:k.opacity<1?"":void 0},{children:l({elementWidth:v})}))}))}))})]})},yf=i.css`
    border: 1px solid ${ts.Accent.Light[1]};
    box-shadow: ${Bs.InputBoxShadow};
`,xf=i.css`
    border: 1px solid ${ts.Accent.Light[1]};
    box-shadow: none;
`,wf=i.css`
    border: 1px solid ${ts.Neutral[5]};
    box-shadow: none;
`,$f=i.css`
    border: 1px solid ${ts.Validation.Red.Border};
    box-shadow: ${Bs.InputErrorBoxShadow};
`,jf=K.default.div`
    border: 1px solid ${ts.Neutral[5]};
    border-radius: 4px;
    background: ${ts.Neutral[8]};

    :focus-within {
        ${yf}
    }
    ${e=>e.$focused&&yf}

    ${e=>e.$readOnly?i.css`
                border: 1px solid transparent;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    ${xf}
                }
                ${e.$focused&&xf}
            `:e.$disabled?i.css`
                background: ${ts.Neutral[6]};
                cursor: not-allowed;

                :focus-within {
                    ${wf}
                }
                ${e.$focused&&wf}
            `:e.$error?i.css`
                border: 1px solid ${ts.Validation.Red.Border};

                :focus-within {
                    ${$f}
                }
                ${e.$focused&&$f}
            `:void 0}
`,Sf=K.default(jf)`
    display: flex;
    align-items: center;
    position: relative;
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};
`,kf=K.default.input`
    ${e=>ys.getTextStyle("small"===e.$variant?"BodySmall":"Body","regular")}
    color: ${ts.Neutral[1]};
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
        color: ${ts.Neutral[3]};
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
`,Cf=K.default.button`
    background: transparent;
    border: none;
    outline: none;

    :focus,
    :active {
        outline: none;
    }

    :focus-visible {
        outline: 2px auto ${ts.Primary};
    }
`,Of=K.default.div`
    display: flex;
    align-items: center;
    position: relative;

    flex: 1;
`,Tf=K.default.div`
    display: flex;
    align-items: center;

    ${e=>{if(e.$hover)return i.css`
                ${Df}, ${Mf} {
                    color: ${ts.Neutral[4]};
                }
            `}}
`,Df=K.default(kf)`
    background: transparent;
    text-align: center;
`,If=K.default(Df)`
    width: 2rem;
    margin-right: 0.25rem;
`,Ef=K.default(Df)`
    width: 2.5rem;
`,_f=K.default(Df)`
    width: 3rem;
    margin-left: 0.25rem;
`,Mf=K.default(exports.Text.Body)`
    ${e=>{if(e.$inactive)return i.css`
                color: ${ts.Neutral[3](e)};
            `}}
`,Rf=K.default.div`
    ${ys.getTextStyle("Body","regular")}
    background-color: ${ts.Neutral[8]};
    color: ${ts.Neutral[3]};
    position: absolute;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    ${e=>e.$disabled?i.css`
                background-color: ${ts.Neutral[6](e)};
                cursor: not-allowed;
            `:e.$hide?i.css`
                display: none;
            `:void 0}
`;Wl.extend(Yl);const Af=Y.default.forwardRef((({disabled:n,readOnly:r,names:i,value:o,focused:a,hoverValue:s,placeholder:l,label:c,onChange:d,onFocus:u,onBlur:f,hideInputKeyboard:h},p)=>{const g=h?"none":"numeric",[m,b,v]=bc(""),[y,x,w]=bc(""),[$,j,S]=bc(""),[k,C]=t.useState("none"),[O,T]=t.useState(!1),D=t.useRef(null),I=t.useRef(null),E=t.useRef(null),_=t.useRef(null),[M,R,A]=z(s);t.useEffect((()=>{const[e="",t="",n=""]=z(o);b(e),x(t),j(n),e||t||n||!D.current.contains(document.activeElement)||I.current.focus()}),[o]),t.useEffect((()=>{a||C("none"),a&&(T(!0),D.current.contains(document.activeElement)||I.current.focus())}),[a]),t.useImperativeHandle(p,(()=>({ref:D,resetPlaceholder(){T(!1)},resetInput(){const[e="",t="",n=""]=z(o);b(e),x(t),j(n)}})),[o]);const N=e=>{var t;e.preventDefault(),null===(t=I.current)||void 0===t||t.focus()},B=e=>{e.target.select();const t=e.target.name;C(t)},F=e=>{const[t,n,r]=i,o={[t]:v.current,[n]:w.current,[r]:S.current},a=e.target.name,s=o[a],l=a!==r?dc.padValue(s,!0):s;switch(a){case t:o[t]=l,b(l);break;case n:o[n]=l,x(l)}const c=`${o[r]}-${o[n]}-${o[t]}`,u=Wl(c,"YYYY-MM-DD",!0).isValid(),h=!o[t]&&!o[n]&&!o[r];u&&s!==l&&d(c),D.current.contains(e.relatedTarget)||(C("none"),null==f||f(h||u))},L=e=>{if(s)return;const t=e.target.name,n=e.target.value.replace(/[^0-9]/g,""),r={day:m,month:y,year:$};switch(t){case i[0]:r.day=n,b(n),2===n.length&&E.current.focus();break;case i[1]:r.month=n,x(n),2===n.length&&_.current.focus();break;case i[2]:r.year=n,j(n)}if(!r.day&&!r.month&&!r.year)return void d("");const o=`${r.year}-${r.month}-${r.day}`;Wl(o,"YYYY-MM-DD",!0).isValid()&&d(o)},P=e=>{"Backspace"!==e.code&&"Backspace"!==e.key||(k===i[1]&&0===y.length&&I.current.focus(),k===i[2]&&0===$.length&&E.current.focus())};function z(e){if(e){const t=Wl(new Date(e));return t.isValid()?[dc.padValue(t.date().toString()),dc.padValue((t.month()+1).toString()),t.year().toString()]:[void 0,void 0,void 0]}return[void 0,void 0,void 0]}return e.jsxs(Of,Object.assign({role:"group","aria-label":c,onClick:()=>{n||r||(T(!0),D.current.contains(document.activeElement)||I.current.focus())},onFocus:e=>{n||(T(!0),a||null==u||u(e))}},{children:[e.jsxs(Tf,Object.assign({ref:D,$hover:!!s},{children:[e.jsx(If,{ref:I,name:i[0],maxLength:2,value:null!=M?M:m,onFocus:B,onBlur:F,onChange:L,type:"text",inputMode:g,pattern:"[0-9]{2}","data-testid":`${i[0]}-input`,"aria-label":"day",disabled:n,readOnly:r,tabIndex:r?-1:0,autoComplete:"off",placeholder:k!==i[0]||r?"DD":""}),e.jsx(Mf,Object.assign({$inactive:0===m.length},{children:"/"})),e.jsx(Ef,{ref:E,name:i[1],maxLength:2,value:null!=R?R:y,onFocus:B,onBlur:F,onChange:L,onKeyDown:P,type:"text",inputMode:g,pattern:"[0-9]{2}","data-testid":`${i[1]}-input`,"aria-label":"month",disabled:n,readOnly:r,tabIndex:r?-1:0,autoComplete:"off",placeholder:k!==i[1]||r?"MM":""}),e.jsx(Mf,Object.assign({$inactive:0===y.length},{children:"/"})),e.jsx(_f,{ref:_,name:i[2],maxLength:4,value:null!=A?A:$,onFocus:B,onBlur:F,onChange:L,onKeyDown:P,type:"text",inputMode:g,pattern:"[0-9]{4}","data-testid":`${i[2]}-input`,"aria-label":"year",disabled:n,readOnly:r,tabIndex:r?-1:0,autoComplete:"off",placeholder:k!==i[2]||r?"YYYY":""})]})),(()=>{if(!o&&!r&&l)return e.jsx(Rf,Object.assign({$hide:O,$disabled:n,onMouseDown:N},{children:l}))})()]}))})),Nf=K.default(Sf)`
    height: 3rem;
`,Bf=n=>{var{minDate:r,maxDate:i,disabled:o,disabledDates:a,error:s,hideInputKeyboard:l,value:c,onChange:d,onFocus:u,onBlur:f,onYearMonthDisplayChange:h,withButton:p=!0,readOnly:g,id:m,allowDisabledSelection:b,zIndex:v}=n,y=X(n,["minDate","maxDate","disabled","disabledDates","error","hideInputKeyboard","value","onChange","onFocus","onBlur","onYearMonthDisplayChange","withButton","readOnly","id","allowDisabledSelection","zIndex"]);const[x,w]=t.useState(lc.sanitizeInput(c)),[$,j]=t.useState(lc.sanitizeInput(c)),[S,k]=t.useState(void 0),[C,O]=t.useState(!1),[T,D]=t.useState(!1),I=t.useRef(null),E=t.useRef();t.useEffect((()=>{const e=lc.sanitizeInput(c);w(e),j(e)}),[c]);const _=e=>{!b&&lc.isDateDisabled(e,{disabledDates:a,minDate:r,maxDate:i})||(j(e),p||(F(e),w(e),e&&O(!1)))},M=e=>{j(e),p||(F(e),w(e),e&&(I.current.focus(),O(!1)),S&&k(void 0))},R=()=>{g||o||(O(!0),T||(D(!0),u&&u()))},A=e=>{!T||C||I.current.contains(e.relatedTarget)||(E.current.resetInput(),j(x),D(!1),L())},N=e=>{k(e)},B=e=>{switch(e){case"reset":j(x);break;case"confirmed":w($),F($)}I.current.focus(),O(!1)},F=e=>{d&&d(e)},L=()=>{f&&f()};return e.jsx(vf,{enabled:!g&&!o,isOpen:C,renderElement:()=>e.jsx(Nf,Object.assign({tabIndex:-1,ref:I,onBlur:A,onFocus:R,$disabled:o,$readOnly:g,$focused:T,$error:s,id:m,"data-testid":y["data-testid"]},y,{children:e.jsx(Af,{ref:E,disabled:o,onChange:_,readOnly:g,focused:C,names:["start-day","start-month","start-year"],value:$,hoverValue:S,hideInputKeyboard:l})})),renderDropdown:({elementWidth:t})=>e.jsx(Td,{type:"input",variant:"single",initialCalendarDate:$,withButton:p,value:$,disabledDates:a,minDate:r,maxDate:i,allowDisabledSelection:b,onHover:N,onSelect:M,onDismiss:B,onYearMonthDisplayChange:h,width:t}),onClose:()=>{E.current.resetInput(),j(x),O(!1),D(!1),L()},onDismiss:()=>{E.current.resetInput(),I.current.focus(),j(x),O(!1)},customZIndex:v,offset:16})},Ff=K.default(ss)`
    height: 2.5rem;
    width: 2.5rem;
    padding: 0;
    margin: 0.5rem 0.5rem;
    border-radius: 0.25rem;
    border: 1px solid ${ts.Neutral[5]};
    background-color: ${ts.Neutral[8]};
    :hover {
        background-color: ${ts.Neutral[7]};
    }
    :disabled {
        cursor: not-allowed;
        background-color: ${ts.Neutral[6]};
    }
`,Lf=K.default.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    background-color: ${ts.Neutral[7]};
    border-radius: 0.25rem;
`,Pf=K.default(qs.Default)`
    color: ${e=>e.$enableDateClick?ts.Primary:ts.Neutral[1]};
    white-space: nowrap;
    display: inline-block;
    text-wrap: auto;
    text-align: center;
    margin: 0.5rem 0;
    padding: 0;
    ${e=>e.$enableDateClick?i.css`
                :hover {
                    cursor: pointer;
                    text-decoration: underline;
                    text-underline-position: under;
                }
            `:i.css`
            background-color: ${ts.Neutral[7]};
            :hover {
                cursor: default;
            }
        `}
`,zf=n=>{var{selectedDate:r,minDate:i,maxDate:o,loading:a,showDateAsShortForm:s,showCurrentDateAsToday:l,onLeftArrowClick:c,onRightArrowClick:d,onCalendarDateSelect:u}=n,f=X(n,["selectedDate","minDate","maxDate","loading","showDateAsShortForm","showCurrentDateAsToday","onLeftArrowClick","onRightArrowClick","onCalendarDateSelect"]);const h=sc.toDayjs(r),p=sc.toDayjs(r).format(s?"D MMM YYYY":"D MMMM YYYY").toString(),g=sc.isSame(r,Wl())&&l?"Today":h.format(s?"ddd":"dddd"),[m,b]=t.useState(!1),v=e=>{u&&u(e),b(!m)},y=()=>{b(!1),c(r)},x=()=>{b(!1),d(r)};return e.jsx(vf,{enabled:!a,isOpen:m,renderElement:()=>e.jsxs(Lf,Object.assign({},f,{children:[e.jsx(Ff,Object.assign({"data-testid":"date-navigator-left-arrow-btn",disabled:a||!!i&&(tc.isDisabledDay(h,void 0,i)||sc.isSame(h,i)),focusHighlight:!1,focusOutline:"browser","aria-label":"Previous day",onClick:y},{children:e.jsx(Dc,{})})),e.jsx(Pf,Object.assign({onClick:()=>!!u&&!a&&b(!m),$enableDateClick:!!u&&!a,"data-testid":"date-navigator-date-text",styleType:"link",disabled:!u||a},{children:`${p}, ${g}`})),e.jsx(Ff,Object.assign({"data-testid":"date-navigator-right-arrow-btn",disabled:a||!!o&&(tc.isDisabledDay(h,void 0,void 0,o)||sc.isSame(h,o)),focusHighlight:!1,focusOutline:"browser","aria-label":"Next day",onClick:x},{children:e.jsx(Ic,{})}))]})),renderDropdown:({elementWidth:t})=>e.jsx(Td,{type:"input",variant:"single",initialCalendarDate:r,value:r,minDate:i,maxDate:o,onSelect:v,width:t}),onDismiss:()=>b(!1),onClose:()=>b(!1),offset:8})},Hf=K.default.div`
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
                    max-width: calc(100% - 1.125rem - 1rem);
                    flex: unset;
                }

                [data-id="range-container-elem2-container"] {
                    margin-top: 0.5rem;
                }
            `}}
`,Wf=K.default.div`
    width: 100%; // Force next flex item to break to next line
`,Vf=K.default.div`
    display: flex;
    flex: 1;
    align-items: center;
`,Yf=K.default(u.ArrowRightIcon)`
    color: ${ts.Neutral[3]};
    width: 1.125rem;
    height: 1.125rem;
    flex-shrink: 0;
    margin: 0 0.5rem;
    align-self: center;
`,Uf=K.default.div`
    position: absolute;
    background: ${e=>e.$error?ts.Validation.Red.Border(e):ts.Primary(e)};
    height: 0.125rem;
    // half - half padding - half icon width
    width: calc(50% - 0.5rem - (1.125rem / 2));
    transition: left 350ms ease-in-out, opacity 350ms ease-in-out;
    left: 0;
    bottom: 0;

    ${e=>{switch(e.$position){case"start":return i.css`
                    opacity: 1;
                `;case"end":return i.css`
                    left: calc(50% + 1rem);
                    opacity: 1;
                `;case"none":return i.css`
                    opacity: 0;
                `}}}

    ${e=>{if(e.$wrap)return i.css`
                display: none;
            `}}
`,Kf=({children:t,currentActive:n,error:r,className:i,wrap:o})=>{const[a,s]=t;return e.jsxs(Hf,Object.assign({className:i,$wrap:o},{children:[e.jsx(Vf,Object.assign({"data-id":"range-container-elem1-container"},{children:a})),e.jsx(Yf,{}),o&&e.jsx(Wf,{}),e.jsx(Vf,Object.assign({"data-id":"range-container-elem2-container"},{children:s})),e.jsx(Uf,{"data-id":"range-container-indicator",$position:n,$error:r,$wrap:o})]}))},qf=(e,t,n)=>{const r=[];e&&r.push(`[${e}]`),r.push(t,n),console.log(...r)},Xf=K.default(Sf)`
    ${e=>e.$wrap&&i.css`
            padding: 0.75rem 1rem;
        `}
`,Gf=K.default.div`
    display: flex;
    align-items: center;
    height: calc(3rem - 2px); // exclude top and bottom borders
    width: 100%;

    ${e=>e.$wrap&&i.css`
            height: fit-content;
        `}
`,Zf={initialStart:"",initialEnd:"",selectedStart:"",selectedEnd:"",currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1,focused:!1},Qf=n=>{var{minDate:r,maxDate:i,disabled:o,disabledDates:a,error:s,hideInputKeyboard:l,value:c,valueEnd:d,onChange:u,onFocus:f,onBlur:h,onYearMonthDisplayChange:p,withButton:g=!0,variant:m="range",numberOfDays:b=7,readOnly:v,id:y,allowDisabledSelection:x,zIndex:w}=n,$=X(n,["minDate","maxDate","disabled","disabledDates","error","hideInputKeyboard","value","valueEnd","onChange","onFocus","onBlur","onYearMonthDisplayChange","withButton","variant","numberOfDays","readOnly","id","allowDisabledSelection","zIndex"]);const[j,S]=t.useState(),[k,C]=t.useState(void 0),[O,T]=t.useState(!1),[D,I]=t.useState(!1),E="week"===m,_="fixed-range"===m,[{selectedStart:M,selectedEnd:R,currentFocus:A,calendarOpen:N,isStartDirty:B,isEndDirty:F,focused:L},P]=(({initialState:e,reducers:n,name:r,debug:i})=>{const[o,a]=t.useReducer(((e,t)=>n[t.type]?n[t.type](e,t.payload):e),e);return[o,Object.fromEntries(Object.keys(n).map((e=>[e,t=>{i&&qf(r,e,t),a({type:e,payload:t})}])))]})({name:"date-range-input",initialState:Zf,reducers:{blur:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1,focused:!1}),dismiss:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),changeStart:(e,t)=>Object.assign(Object.assign({},e),{selectedStart:t,isStartDirty:!0}),changeEnd:(e,t)=>Object.assign(Object.assign({},e),{selectedEnd:t,isEndDirty:!0}),reselectStart:e=>Object.assign(Object.assign({},e),{selectedStart:"",currentFocus:"start"}),reselectEnd:e=>Object.assign(Object.assign({},e),{selectedEnd:"",currentFocus:"end"}),focus:(e,t)=>Object.assign(Object.assign({},e),{currentFocus:E?"none":_?"start":t,calendarOpen:!v,focused:!0}),cancel:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1}),done:(e,t)=>Object.assign(Object.assign({},e),{selectedStart:t.start,selectedEnd:t.end,initialStart:t.start,initialEnd:t.end,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),resetStart:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart}),resetEnd:e=>Object.assign(Object.assign({},e),{selectedEnd:e.initialEnd}),resetRange:(e,t)=>Object.assign(Object.assign({},e),{initialStart:t.start,selectedStart:t.start,initialEnd:t.end,selectedEnd:t.end})}}),z=t.useRef(!1),H=t.useRef(),W=t.useRef(),V=t.useRef(),Y=t.useRef(),U=(({maxWidth:e,targetRef:n})=>{const[r,i]=t.useState(!1);return qe({targetRef:n,refreshMode:"throttle",refreshRate:300,handleHeight:!1,onResize:t.useCallback((t=>{i(t<=e)}),[e])}),r})({maxWidth:320,targetRef:H});t.useEffect((()=>{P.resetRange({start:lc.sanitizeInput(c),end:lc.sanitizeInput(d)})}),[c,d]),t.useEffect((()=>{"start"===A?S(M):"end"===A&&S(R)}),[A]);const K=e=>{"Enter"!==e.code||g||(M&&R?(P.done({start:M,end:R}),null==u||u(M,R)):(P.dismiss(),H.current.focus(),V.current.resetPlaceholder(),Y.current.resetPlaceholder()))},q=e=>{if(le(e))return void(z.current=!0);if(P.changeStart(e),W.current.setCalendarDate(e),z.current=!1,!e)return void(g||R||!F||(P.resetRange({start:"",end:""}),null==u||u("","")));if(!R)return void P.focus("end");if(Wl(e).isAfter(R,"day"))P.reselectEnd();else{if(F)return g?void 0:(P.done({start:e,end:R}),void(null==u||u(e,R)));P.focus("end")}},G=e=>{if(le(e))return void(z.current=!0);if(Wl(e).isBefore(M,"day"))return P.changeStart(e),W.current.setCalendarDate(e),void P.reselectEnd();if(P.changeEnd(e),W.current.setCalendarDate(e),e){if(M)return g?void 0:(P.done({start:M,end:e}),void(null==u||u(M,e)));P.focus("start")}else g||M||!B||(P.resetRange({start:"",end:""}),null==u||u("",""))},Z=e=>{if(le(e))return void(z.current=!0);if(P.changeStart(e),W.current.setCalendarDate(e),z.current=!1,!e)return void(g?P.changeEnd(""):(P.resetRange({start:"",end:""}),null==u||u("","")));const t=Wl(e).format("YYYY-MM-DD"),n=Wl(t).add(b-1,"day").format("YYYY-MM-DD");return P.changeStart(t),P.changeEnd(n),z.current=!1,g?void 0:(P.done({start:t,end:n}),void(null==u||u(t,n)))},Q=()=>{v||o||L||(P.focus("start"),null==f||f())},J=e=>{!L||N||H.current.contains(e.relatedTarget)||(P.blur(),T(!1),I(!1),V.current.resetPlaceholder(),Y.current.resetPlaceholder(),null==h||h())},ee=e=>t=>{t.stopPropagation(),v||(P.focus(e),te(),ne(),L||null==f||f())},te=()=>{if(E){const e=sc.toDayjs(M).startOf("week").format("YYYY-MM-DD");T(!0),I(!0),S(e)}},ne=()=>{_&&(I(!0),S(M))},re=e=>{e&&!z.current||(P.resetStart(),V.current.resetInput())},ie=e=>{e&&!z.current||(P.resetEnd(),Y.current.resetInput())},oe=e=>{switch(m){case"week":(e=>{const t=Wl(e).startOf("week").format("YYYY-MM-DD"),n=Wl(e).endOf("week").format("YYYY-MM-DD");if(P.changeStart(t),P.changeEnd(n),z.current=!1,!g)P.done({start:t,end:n}),null==u||u(t,n)})(e);break;case"fixed-range":Z(e);break;default:"start"===A?q(e):"end"===A&&G(e)}},ae=e=>{switch(H.current.focus(),e){case"reset":P.cancel();break;case"confirmed":P.done({start:M,end:R}),null==u||u(M,R)}},se=e=>{C(e)},le=e=>!x&&e&&lc.isDateDisabled(e,{disabledDates:a,minDate:r,maxDate:i}),ce=e=>{let t={start:void 0,end:void 0};switch(m){case"range":t={start:"start"===A?k:void 0,end:"end"===A?k:void 0};break;case"week":if(!k)return;t={start:Wl(k).startOf("week").format("YYYY-MM-DD"),end:Wl(k).endOf("week").format("YYYY-MM-DD")};break;case"fixed-range":if(!k)return;t={start:Wl(k).format("YYYY-MM-DD"),end:Wl(k).add(b-1,"day").format("YYYY-MM-DD")}}return t[e]};return e.jsx(vf,{enabled:!v&&!o,isOpen:N,onClose:()=>{P.blur(),T(!1),I(!1),V.current.resetPlaceholder(),Y.current.resetPlaceholder(),null==h||h()},onDismiss:()=>{P.dismiss(),H.current.focus(),V.current.resetPlaceholder(),Y.current.resetPlaceholder()},renderElement:()=>e.jsx(Xf,Object.assign({ref:H,tabIndex:-1,onFocus:Q,onBlur:J,$focused:L,$disabled:o,$readOnly:v,$error:s,$wrap:U,id:y,"data-testid":$["data-testid"],onKeyDown:K},$,{children:e.jsxs(Kf,Object.assign({currentActive:A,wrap:U,error:s},{children:[e.jsx(Gf,Object.assign({$wrap:U},{children:e.jsx(Af,{ref:V,placeholder:"From",names:["start-day","start-month","start-year"],value:M,disabled:o,readOnly:O||v,focused:"start"===A,hoverValue:ce("start"),onChange:_?Z:q,onFocus:ee("start"),onBlur:re,hideInputKeyboard:l})})),e.jsx(Gf,Object.assign({$wrap:U},{children:e.jsx(Af,{ref:Y,placeholder:"To",names:["end-day","end-month","end-year"],value:R,disabled:o,readOnly:D||v,focused:"end"===A,hoverValue:ce("end"),onChange:G,onFocus:ee("end"),onBlur:ie,hideInputKeyboard:l})}))]}))})),renderDropdown:({elementWidth:t})=>e.jsx(Td,{ref:W,type:"input",variant:m,initialCalendarDate:j,withButton:g,value:M,endValue:R,selectWithinRange:B||F,currentFocus:A,disabledDates:a,minDate:r,maxDate:i,allowDisabledSelection:x,onSelect:oe,onDismiss:ae,onHover:se,onYearMonthDisplayChange:p,numberOfDays:b,width:t}),customZIndex:w,offset:16})},Jf=K.default.div`
    position: relative;
    ${e=>{const{$desktopStart:t,$desktopSpan:n,$tabletStart:r,$tabletSpan:o,$mobileStart:a,$mobileSpan:s}=e;return i.css`
            grid-column: ${t||"auto"} / span ${n||1};

            ${is.MaxWidth.tablet} {
                grid-column: ${r||"auto"} / span
                    ${o||1};
            }

            ${is.MaxWidth.mobileL} {
                grid-column: ${a||"auto"} / span
                    ${s||1};
            }
        `}}
`,eh=Y.default.forwardRef(((t,n)=>{const{mobileCols:r,tabletCols:i,desktopCols:o}=t,a=X(t,["mobileCols","tabletCols","desktopCols"]);return e.jsx(Jf,Object.assign({ref:n},(()=>{const e=i||r,t=r,n=th(o||i||r),a=th(e),s=th(t);return{$desktopSpan:n.span,$desktopStart:n.start,$mobileSpan:s.span,$mobileStart:s.start,$tabletSpan:a.span,$tabletStart:a.start}})(),a))})),th=e=>{if(Array.isArray(e)&&e.length>1){const[t,n]=e,r=t<=n?t:n,i=t<=n?n:t;let o;return o=i===r?1:i-r,{start:r,span:o}}return"number"==typeof e?{start:void 0,span:e}:{start:void 0,span:void 0}},nh=()=>e=>{let t;t=e.$color&&"function"==typeof e.$color?e.$color(e):e.$color||ts.Neutral[5](e);const n=encodeURIComponent(t),r=e.$thickness||1,o=r+1;return i.css`
        background-color: transparent;
        height: ${r}px;
        background-repeat: repeat-x;
        background-image: url('data:image/svg+xml,<svg width="8" height="${r}" viewBox="0 0 8 1" xmlns="http://www.w3.org/2000/svg"><line x1="2" y1="1" x2="6" y2="1" stroke="${n}" stroke-width="${o}" stroke-dasharray="4 4" /></svg>');
    `},rh=K.default.hr`
    width: 100%;
    margin: 0;
    border: none;
    ${e=>{switch(e.$lineStyle){case"dashed":return i.css`
                    ${nh}
                `;case"solid":return i.css`
                    height: ${e.$thickness}px;
                    background-color: ${e.$color||ts.Neutral[5]};
                `}}}
`,ih=K.default.div`
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
`,oh=K.default.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(5, 1, 1, ${e=>e.$backgroundOpacity});
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
`,ah=({show:n=!1,rootId:r,onOverlayClick:i,children:o,backgroundOpacity:a,backgroundBlur:s=!0,disableTransition:l=!1,enableOverlayClick:c=!1,zIndex:d,id:u})=>{const[f,h]=t.useState(null),[p,m]=t.useState(),[b]=t.useState((()=>cc.generate())),v=g.useFloatingNodeId(),y=t.useRef(),x=t.useRef(null),w=o&&Y.default.cloneElement(o,{ref:x}),$=u?`lifesg-ds-overlay-root-${u}`:"lifesg-ds-overlay-root",j=null!=d?d:p?99999:99998;(e=>{const n=g.useFloatingTree();t.useEffect((()=>{if(!n)return;const t={zIndex:e};n.events.emit(pf.Change,t)}),[n,e]),t.useEffect((()=>{if(!n)return;const t=()=>{const t={zIndex:e};n.events.emit(pf.Change,t)};return null==n||n.events.on(pf.Ready,t),()=>null==n?void 0:n.events.off(pf.Ready,t)}),[n,e])})(j),t.useEffect((()=>(O(),h(k()),()=>{E(),D().length<1&&T("remove")})),[]),t.useEffect((()=>{if(n){const e=C();S(e),I();const t=setTimeout((()=>{T("add")}),200);return()=>clearTimeout(t)}{E();const e=setTimeout((()=>{D().length<1&&T("remove")}),200);return()=>clearTimeout(e)}}),[n]);const S=e=>{y.current=e,m(e)},k=()=>document&&r?document.getElementById(r):document?document.body:null,C=()=>D().length>0,O=()=>{if(!document.getElementById(lh)){const e=document.createElement("style");e.id=lh;const t=document.documentElement.clientWidth,n=window.innerWidth-t;e.innerHTML=`\n\t\t\t\t.${ch} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${n}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${ch}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},T=e=>{const t=document.body.classList.contains(ch);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove(ch):document.body.classList.add(ch)},D=()=>{const e=document.body.dataset.lifesgDsOverlayOrder;return e?e.split(","):[]},I=()=>{const e=D();document.body.dataset.lifesgDsOverlayOrder=[...e,b].join(",")},E=()=>{const e=D();document.body.dataset.lifesgDsOverlayOrder=e.filter((e=>e!==b)).join(",")},_=e=>{var t;const n=null===(t=x.current)||void 0===t?void 0:t.firstChild;n&&n.contains(e.target)||i&&c&&(e.preventDefault(),i())};return f?U.default.createPortal(e.jsx(ih,Object.assign({id:$,"data-testid":$,$show:n,$zIndex:j},{children:o&&e.jsx(g.FloatingNode,Object.assign({id:v},{children:e.jsx(oh,Object.assign({"data-testid":"overlay-wrapper",$show:n,$backgroundOpacity:a||(p?.5:.8),$backgroundBlur:s,$disableTransition:l,onClick:_},{children:w}))}))})),f):null},sh=t=>e.jsx(g.FloatingTree,{children:e.jsx(ah,Object.assign({},t))}),lh="lifesg-ds-overlay-stylesheet",ch="lifesg-ds-overlay-open",dh=K.default.div`
    position: fixed;
    top: 0;

    display: flex;
    flex-direction: column;
    height: 100%;

    background-color: ${ts.Neutral[8]};
    box-shadow: 0px 2px 12px rgba(104, 104, 104, 0.25);

    visibility: ${e=>e.$show?"visible":"hidden"};
    ${e=>e.$show?i.css`
            right: 0;
            transition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);
            transition-delay: 200ms;
        `:i.css`
        right: -100%;
        transition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);
    `}

    width: 40%;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    overflow: hidden;

    ${is.MaxWidth.desktopL} {
        width: 50%;
        min-width: 700px;
    }

    ${is.MaxWidth.tablet} {
        width: 100%;
        min-width: unset;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
`,uh=K.default.div`
    top: 0;

    display: flex;
    align-items: center;
    gap: 1rem;
    height: 5rem;
    padding: 2rem 1rem 1rem;
    background-color: ${ts.Neutral[8]};
    border-bottom: 1px solid ${ts.Neutral[5]};

    ${is.MaxWidth.tablet} {
        gap: 0.5rem;
        padding: 2rem 1.25rem 1rem;
    }
`,fh=K.default(ss)`
    color: ${ts.Neutral[3]};
    padding: 0;
    order: -1; // show button on the left of the header

    :active,
    :focus {
        color: ${ts.Primary};
    }

    svg {
        height: 2rem;
        width: 2rem;
    }
`,hh=K.default(exports.Text.H2)`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`,ph=K.default.div`
    flex: 1;
    overflow-y: auto;
`,gh=({className:t,progress:n,color:r,"data-testid":i})=>e.jsx(mh,Object.assign({className:t,$innerWidth:n,$color:r,"data-testid":i},{children:e.jsx("progress",{value:100*n,max:100})})),mh=K.default.div`
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

    ${e=>{const{$color:t}=e;let n;return n=t&&"string"==typeof t?t:t?t(e):ts.Accent.Light[1](e),i.css`
            border: 1px solid ${n};
            border-radius: 4px;

            :after {
                content: "";
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                border-radius: inherit;
                background: ${n};
                width: ${100*e.$innerWidth}%;
            }
        `}}
`,bh=K.default.button`
    align-items: center;
    background-color: ${ts.Primary};
    border-radius: 0.25rem;
    color: ${ts.Neutral[8]};
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
                    background-color: ${ts.Neutral[8]};
                    border: 1px solid ${ts.Primary};
                    color: ${ts.Primary};
                `;case"light":return i.css`
                    background-color: ${ts.Neutral[8]};
                    border: 1px solid ${ts.Neutral[5]};
                    color: ${ts.Primary};
                `;default:return i.css`
                    background-color: ${ts.Primary};
                    border: none;
                    color: ${ts.Neutral[8]};
                `}}}
    &:hover {
        box-shadow: 1px 1px 4px 2px rgba(0, 0, 0, 0.2);
    }
    &:disabled {
        background-color: ${ts.Neutral[6]};
        border: 1px solid ${ts.Neutral[6]};
        color: ${ts.Neutral[3]};
        cursor: not-allowed;

        &:hover {
            box-shadow: none;
        }
    }
`,vh=Y.default.forwardRef(((t,n)=>{var{"data-testid":r,styleType:i="primary",children:o,sizeType:a="default",type:s="button"}=t,l=X(t,["data-testid","styleType","children","sizeType","type"]);return e.jsx(bh,Object.assign({"data-testid":r||"iconButton",ref:n,type:s,$sizeType:a,$styleType:i},l,{children:o}))})),yh=K.default.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    ${e=>{return t=e.show,n=e.animationFrom||"bottom",t?`\n\t\t\t${n}: 0;\n\t\t\topacity: 1;\n\t\t\ttransition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);\n\t\t\ttransition-delay: 200ms;\n\t\t`:`\n\t\t${n}: -3%;\n\t\topacity: 0;\n\t\ttransition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);\n\t`;var t,n}}

    ${is.MaxWidth.mobileL} {
        height: calc(
            ${e=>e.verticalHeight?`${e.verticalHeight}px`:"1vh"} * 100
        );

        top: ${e=>e.offsetTop||0}px;
    }
`,xh=n=>{var{id:r="modal",show:i,animationFrom:o="bottom",children:a,enableOverlayClick:s=!0,rootComponentId:l,zIndex:c,onOverlayClick:d,dismissKeyboardOnShow:u=!0}=n,f=X(n,["id","show","animationFrom","children","enableOverlayClick","rootComponentId","zIndex","onOverlayClick","dismissKeyboardOnShow"]);const[h,p]=t.useState(),[g,m]=t.useState();t.useEffect((()=>window.visualViewport?(v(),window.visualViewport.addEventListener("resize",v),()=>{window.visualViewport.removeEventListener("resize",v)}):(b(),window.addEventListener("resize",b),()=>{window.removeEventListener("resize",b)})),[]),t.useEffect((()=>{var e,t;i&&u&&(null===(t=null===(e=document.activeElement)||void 0===e?void 0:e.blur)||void 0===t||t.call(e))}),[i]);const b=()=>{const e=.01*window.innerHeight;p(e)},v=()=>{const e=.01*window.visualViewport.height;p(e),m(window.visualViewport.offsetTop)};return e.jsx(sh,Object.assign({"data-testid":`${r}-overlay`,show:i,enableOverlayClick:s,onOverlayClick:d,id:r,rootId:l,zIndex:c},{children:e.jsx(yh,Object.assign({show:i,animationFrom:o,"data-testid":r,verticalHeight:h,offsetTop:g},f,{children:a}))}))},wh=K.default.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 40rem;
    max-height: 70%;
    background: ${ts.Neutral[8]};
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.45);
    border-radius: 0.75rem;
    overflow: hidden;

    ${is.MaxWidth.mobileL} {
        width: 90%;
        max-height: 70%;
    }
`,$h=K.default(ss)`
    position: absolute;
    top: 1rem;
    right: 1rem;
    padding: 0;
    color: ${ts.Neutral[3]};

    :focus-visible {
        outline: 4px solid ${ts.Accent.Light[1]};
    }

    svg {
        height: 2rem;
        width: 2rem;
    }

    ${is.MaxWidth.mobileL} {
        right: 1.25rem;
    }
`,jh=t=>{var{id:n="modal-box",children:r,onClose:i,showCloseButton:o=!0}=t,a=X(t,["id","children","onClose","showCloseButton"]);return e.jsxs(wh,Object.assign({"data-testid":n},a,{onClick:e=>{e.stopPropagation()}},{children:[o&&e.jsx($h,Object.assign({onClick:i,"data-testid":"close-button",focusHighlight:!1},{children:e.jsx(m.CrossIcon,{})})),r]}))},Sh=Object.assign(xh,{Box:jh}),kh=` ${is.MaxWidth.mobileL}, (orientation: landscape) and (max-height: ${os.mobileL}px)`,Ch=`@media(orientation: landscape) and (max-height: ${os.mobileL}px)`,Oh=K.default.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: ${e=>`url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='4' ry='4' stroke='${encodeURIComponent(ts.Neutral[5](e))}' stroke-width='4' stroke-dasharray='8%2c 8' stroke-dashoffset='8' stroke-linecap='round'/%3e%3c/svg%3e");`};
    background-color: ${ts.Neutral[8]};
    border-radius: 4px;
    height: 14.125rem;
`,Th=K.default(qs.Default)`
    width: fit-content;
    padding: 0 2rem;
    margin: 0 2rem;
`,Dh=K.default(vh)`
    position: absolute;
    top: 1rem;
    right: 1rem;
`,Ih=K.default.img`
    display: block;
    object-fit: contain;
    object-position: center;
    width: calc(100% - 8rem);
    height: 100%;
`,Eh=K.default.div`
    background: ${ts.Accent.Light[6]};
    border: 1px solid ${ts.Neutral[5]};
    border-radius: 4px;
    margin: 0 2rem;
    padding: 1rem;
    display: flex;
    gap: 1rem;
    flex: 1;
    flex-direction: column;
    align-items: center;
`,_h=K.default(exports.Text.H6)`
    margin-top: 1rem;
`,Mh=K.default(Sh)`
    /* increase specificity as the styles are overwritten */
    && {
        height: 100%;
        overflow-y: auto;
    }
`,Rh=K.default.div`
    width: 100%;
    margin: auto;
    padding: 5rem 1.25rem;

    ${kh} {
        padding: 0;
        width: 100%;
        height: 100%;
    }
`,Ah=K.default(Sh.Box)`
    width: 100%;
    height: 29rem;
    max-width: 42rem;
    max-height: none;
    margin: 0 auto;
    padding: 1rem;

    ${kh} {
        display: flex;
        flex-direction: column;
        max-width: none;
        height: 100%;
        border-radius: 0;
        padding: 0;
    }
`,Nh=K.default.h4`
    ${ys.getTextStyle("H4","semibold")}
    margin-bottom: 1rem;
    color: ${ts.Neutral[1]};
    text-align: center;

    ${kh} {
        ${ys.getTextStyle("H5","semibold")}
        margin: 0.75rem 0;
    }
`,Bh=K.default.div`
    width: 100%;
    height: 20rem;
    border-radius: 12px;
    overflow: hidden;

    ${kh} {
        border-radius: 0;
        flex: 1;
    }

    ${Ch} {
        background: ${ts.Neutral[7]};
    }
`,Fh=K.default.div`
    position: relative;
    width: 100%;
    height: 100%;
    background: ${ts.Neutral[6]};
    margin: auto;

    ${kh} {
        aspect-ratio: 4/3;
    }
    ${is.MaxWidth.mobileL} {
        width: 100%;
        height: auto;
    }
    ${Ch} {
        width: auto;
        height: 100%;
    }
`,Lh=K.default.div`
    position: absolute;
    left: 50%;
    top: calc(75% - 1px);
    width: 18.75rem;
    height: 2px;
    transform: translateX(-50%);
    background-color: ${ts.Neutral[4]};
    pointer-events: none;

    ${kh} {
        width: calc(100% - 4rem);
        max-width: 18.75rem;
        left: 50%;
    }
`,Ph=K.default.div`
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;

    ${is.MaxWidth.mobileL} {
        flex-direction: column-reverse;
        margin: 1rem 1.25rem 3rem;
        gap: 1rem;
    }

    ${Ch} {
        flex-direction: row;
        margin: 1rem 1.25rem 1rem;
    }
`,zh=K.default(qs.Default)`
    width: 8.5rem;
    ${is.MaxWidth.mobileL} {
        width: 100%;
    }
    ${Ch} {
        height: 2.5rem;
    }
`,Hh=K.default.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`,Wh=K.default.canvas`
    cursor: crosshair;
`,Vh=t.lazy((()=>G(void 0,void 0,void 0,(function*(){return{default:(yield Promise.resolve().then((function(){return require("./e-signature-canvas.596b55f9.js")}))).ESignatureCanvas}})))),Yh=n=>{const{description:r,id:i,loadingProgress:o,loadingLabel:a="Uploading...",onChange:s,value:l}=n,c=X(n,["description","id","loadingProgress","loadingLabel","onChange","value"]),[d,f]=t.useState(!1),h=t.useRef(null),[p,g]=t.useState(l),m=Tl.useMediaQuery({maxWidth:os.mobileL}),b=()=>{h.current.clear()},v=()=>{const e=h.current.export();g(e),f(!1),null==s||s(e)};t.useEffect((()=>{g(l)}),[l]);return e.jsxs("div",Object.assign({},c,{children:[e.jsx(Oh,{children:isNaN(o)?p?e.jsxs(e.Fragment,{children:[e.jsx(Ih,{src:p,alt:"Signature preview"}),e.jsx(Dh,Object.assign({styleType:"light",onClick:()=>f(!0),id:i,"aria-label":"Edit signature"},{children:e.jsx(u.PencilIcon,{})}))]}):e.jsx(Th,Object.assign({type:"button",styleType:"secondary","aria-label":"Add signature",id:i,onClick:()=>f(!0)},{children:"Add signature"})):e.jsxs(Eh,{children:[a&&e.jsx(exports.Text.BodySmall,{children:a}),e.jsx(gh,{progress:o,"data-testid":`${i||"e-signature"}-progress-bar`})]})}),e.jsx(Mh,Object.assign({"data-testid":"signature-modal",show:d},{children:e.jsx(Rh,{children:e.jsxs(Ah,Object.assign({onClose:()=>f(!1)},{children:[e.jsx(Nh,{children:"Signature"}),e.jsx(Bh,{children:e.jsxs(Fh,{children:[e.jsx(Lh,{}),e.jsx(t.Suspense,Object.assign({fallback:null},{children:d&&e.jsx(Vh,{ref:h,baseImageDataURL:p})}))]})}),e.jsxs(Ph,{children:[e.jsx(zh,Object.assign({as:Cc.Default,type:"button",styleType:m?"light":"link",icon:e.jsx(u.EraserIcon,{}),onClick:b},{children:"Clear"})),e.jsx(zh,Object.assign({type:"button",onClick:v},{children:"Save"}))]})]}))})})),r?e.jsx(_h,Object.assign({weight:"regular",as:"p"},{children:r})):null]}))},Uh="https://assets.life.gov.sg/react-design-system/img/feedback-rating/feedback-rating-banner.png",Kh="Submit",qh="Rate your experience",Xh=5,Gh=K.default.input`
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
`,Zh=i.css`
    width: 2.75rem;
    height: 2.75rem;
    color: ${ts.Primary};
    ${Gh}:focus-visible + & {
        outline: 0.125rem solid ${ts.Primary};
        outline-offset: -0.0625rem;
        border-radius: 0.25rem;
    }
`,Qh=K.default(b.StarIcon)`
    ${Zh}
`,Jh=K.default(v.StarFillIcon)`
    ${Zh}
`,ep=K.default.label`
    margin: 0 0.5rem;
    line-height: 0;
    @media screen and (max-width: 38rem) {
        margin: 0 0.5rem;
    }
`,tp=K.default.div`
    display: flex;
    justify-content: center;
    margin: 0.5rem 1rem;
`,np=t=>{const{description:n,rating:r,onRatingChange:i}=t,o=t=>{const n=`${t} star${1===t?"":"s"}`;return t<=r?e.jsx(Jh,{"aria-label":n}):e.jsx(Qh,{"aria-label":n})};return e.jsx(tp,Object.assign({role:"radiogroup","aria-label":n},{children:[...Array(Xh)].map(((t,n)=>{const a=n+1;return e.jsxs(ep,{children:[e.jsx(Gh,{type:"radio",name:"star",checked:a===r,onChange:()=>(e=>{i(e)})(a)}),o(a)]},a)}))}))},rp=K.default.img`
    width: 9.5rem;
    height: 9.5rem;
    margin: 0 1rem;
    @media screen and (max-width: 38rem) {
        width: 5.5rem;
        height: 5.5rem;
        margin: 0;
    }
`,ip=K.default.div`
    border-top: 1px solid ${ts.Neutral[5]};
    border-bottom: 1px solid ${ts.Neutral[5]};
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
`,op=K.default.div`
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
`,ap=K.default(qs.Default)`
    margin-top: 1rem;
    width: 100%;
`,sp=K.default.div`
    position: relative;
    display: flex;
    flex-direction: column;

    ${e=>{if(e.$border){const t=encodeURIComponent(ts.Neutral[5](e));return i.css`
                background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='4' ry='4' stroke='${t}' stroke-width='4' stroke-dasharray='8%2c 8' stroke-dashoffset='8' stroke-linecap='round'/%3e%3c/svg%3e");
                border-radius: 4px;
                padding: 2rem;

                ${is.MaxWidth.mobileL} {
                    padding: 2rem 1.25rem;
                }
            `}}}
`,lp=K.default.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
`,cp=K.default(exports.Text.H4)`
    margin-bottom: 0.5rem;
`,dp=K.default.div`
    color: ${ts.Neutral[1]};
    ${el({textSize:"Body"})}
`,up=K.default(exports.Text.BodySmall)`
    margin-bottom: 0;
    color: ${ts.Neutral[3]};
`,fp=K.default.div`
    color: ${ts.Neutral[3]};
    ${el({textSize:"BodySmall"})}
`,hp=K.default.ul`
    list-style-type: none;
`;var pp;!function(e){e.formatFileSizeDisplay=e=>{if(!e||0===e)return"0 KB";const t=Math.floor(Math.log(e)/Math.log(1024));return`${Number(e/Math.pow(1024,t)).toFixed(0)} ${["B","KB","MB","GB","TB","PB","EB","ZB","YB"][t]}`},e.isSupportedImageType=e=>["image/avif","image/gif","image/jpeg","image/png","image/svg+xml","image/webp"].includes(e)}(pp||(pp={}));const gp=({src:t,alt:n,className:r,"data-testid":i})=>e.jsx("img",{src:t,alt:n||"",className:r,"data-testid":i,onError:e=>{e.target.onerror=null,e.target.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAABQCAYAAACeXX40AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARTSURBVHgB7Z1tUuJAEIY7qMRYWnIE9wR6BD2Be5S9weoN1pusJ1iPwJ5guYH4GeNH2HkppgojYAIhbXrepwoJEMofPHZP9zQxkgJpmh5HUfTdHZ6624EQsiLOp7676+d5fp4kyeDda/5gNBr1siz76Q5/CCHr41ccx+dOyiEejAWcyHflDg+FkDWDiNjtdk8gYQdPTCIf5SON4ALe0cQ5idya78CZ+E8IaRgn4gki4JkQogCK3Y77wdRLtDiNnp6eRkKIEh0hRBEKSFShgEQVCkhUoYBEFQpIVKGARBUKSFShgEQVCkhUoYBEFQpIVNkUokqWZfLy8iJvb2/jx1tbWxLHsWxsbEgIcBpGCQh3e3srr6+vH16Lokh2dnbGN+swAioA+a6vrzERPPN1PP/w8CB5nsvu7q5YhmvAhoFciHzz5JsmTVNxGUosQwEbBmu+WWl3Ho+Pj6VkbSsUsGGqRjSka6Riq1DAhllGJkZAUhuocKtCAUltLNPfs9wTpIAL8M3hOtne3q50PhrTnY7dj4kCzgFrteFwKM/Pz1In3W53vNNRFvYBA+Xm5mYs4bzdilWAVJubn+8B7O3tlTqvzVDAGaAB7KVDAXB/f19rIYCU2uv1JEmSmUUJpMPrVdN1G+FecAGs+5B6i+0SpM79/X2pG/weyI57yIiCw3rUm4Z7wVMgyt3d3c3s1WEtiMiIqFUniIaQO1SYgqfALgVGo+aBVFx3URI6FHACoh4mUD4DRYnlrbGmoYATUPWWKTRwDtaIlncnmoQCyvuqtwwoVJCOyeoELyBkKpN6i2C9iFEpshrBC1h2OHQWEHeZogTvwVwgCVxARLBVdzmqFiUQD+/BbR17zW0jWAHx4deRQhE9yxYwfu3oz10l+lohWAHLSlMGRFE0sBfhhxumoyXeF3oxE6SAiHx1pz+k1nnj9pDODzcUwXusf/FoEcEJiKizruoVUbC4k+LlW7TW9F/BDJHgBFz3uqu4l4zHnxU6fuwrxPVgUAKi4bzuytNf8cAPNpRt0yByhthXDGYcC1EIVyNoCoxUVW3xYBwLQ6hVJqbbThAR0EejJlmmv+iHX0NaDwYhYB0N56bw68FQMC8gxMPar02EtB40LyBSbxurS7RmFg3HWsG0gG1KvbNo6x9PFcwKiOixzJjVV2K6pWMVkwL6atIC1ke3TArY9tRbpMxuSlsxJ2Abq94yWE3F5gS0+kFZ/R6KKQFRdFieMsbYlrXobkbAUJq31ka3zFyaAwKGsomPqrjuS4RowYsTEVX4xXSiCgUkqlBAogoFJKpQQKIKBSSqUECiCgUkqlBAogoFJKpAwIEQokO/k+f5pRCiQBRF/ShN02N38EcIaZjRaPStkyTJlYuCF0JIs1w49wbj/5TnTOxlWYYoeCSErJ+/cRwj8w7HVTAO3BMnjISkAS68fHjw4X+FujXhgbs7cyccCiMiqYeBu126TPsbS77pF/4DuxeyMpdnp3gAAAAASUVORK5CYII="}}),mp=K.default.li`
    display: flex;
    align-items: center;
    width: 100%;
    border: none;

    :not(:last-child) {
        margin-bottom: 1rem;
    }
`,bp=K.default.div`
    background: ${ts.Accent.Light[6]};
    border: 1px solid ${ts.Neutral[5]};
    border-radius: 4px;
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    width: 100%;
    cursor: pointer;
    ${is.MaxWidth.mobileL} {
        padding: 1rem;
    }
    :hover {
        background: ${ts.Accent.Light[5]};
    }
`,vp=K.default.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${is.MaxWidth.mobileL} {
        flex-direction: column;
        width: 100%;
        align-items: flex-start;
    }

    ${e=>{if(e.$hasThumbnail)return i.css`
                ${is.MaxWidth.mobileL} {
                    flex-direction: row;
                    align-items: center;
                }
            `}}
`,yp=K.default.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 100%;
    overflow-wrap: break-word;
    word-break: break-all;
    white-space: normal;
`,xp=K.default.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${is.MaxWidth.mobileL} {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }
`,wp=K.default.div`
    display: flex;
    width: 5rem;
    margin-left: 0.5rem;
    justify-content: flex-end;
    ${is.MaxWidth.mobileL} {
        width: 100%;
        margin-left: 0;
        margin-top: 0.5rem;
        justify-content: flex-start;
    }
`,$p=K.default(exports.Text.BodySmall)`
    ${is.MaxWidth.mobileL} {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        white-space: normal;
    }
`;K.default($p)`
    margin-top: 0.25rem;
`;const jp=K.default(exports.Text.XSmall)`
    font-size: 0.875rem !important;
    color: ${ts.Validation.Red.Text};
`,Sp=K.default(jp)`
    margin-top: 0.25rem;
    ${is.MaxWidth.mobileL} {
        display: none;
        visibility: hidden;
    }
`,kp=K.default(jp)`
    display: none;
    visibility: hidden;
    ${is.MaxWidth.mobileL} {
        display: block;
        visibility: visible;
        margin-top: 0.5rem;
    }
`,Cp=K.default(Vs)`
    ${e=>{let t=ts.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=ts.Neutral[3](e);break;default:t=ts.Neutral[8](e)}return i.css`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,Op=K.default.div`
    width: 6rem;
    margin-left: 2rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    ${is.MaxWidth.mobileL} {
        width: fit-content;
        margin-left: 1rem;
    }
`,Tp=K.default(vh)`
    min-width: unset;

    :not(:last-child) {
        margin-right: 1rem;
    }
`,Dp=K.default.div`
    width: auto;
    margin-right: 2rem;
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: center;
    ${is.MaxWidth.mobileL} {
        margin-right: 1rem;
    }
`,Ip=K.default(gp)`
    width: 6rem;
    height: 6rem;
    aspect-ratio: 1;
    border-radius: 4px;
    border: 1px solid ${ts.Neutral[5]};
    object-fit: cover;

    ${is.MaxWidth.mobileL} {
        width: 4rem;
        height: 4rem;
    }
`,Ep=t.memo((({fileItem:n,onDownload:r})=>{const{id:i,name:o,size:a,errorMessage:s,thumbnailImageDataUrl:l,truncateText:c=!0,ready:d=!0}=n,[f,h]=t.useState(!1),[p,g]=t.useState(!1),m=pp.formatFileSizeDisplay(a),b=Tl.useMediaQuery({maxWidth:os.mobileL}),[v,y]=t.useState(),x=t.useRef();t.useEffect((()=>{x.current&&y(b?w(o):o)}),[o,b]);const w=e=>{if(!c)return e;const t=x&&x.current?x.current.getBoundingClientRect().width:0;return dc.truncateTwoLines(e,t,16,1.5)},$=()=>e.jsxs(e.Fragment,{children:[e.jsx($p,Object.assign({weight:"regular",ref:x},{children:v})),p&&e.jsx(Sp,Object.assign({weight:"semibold"},{children:s||"Something went wrong"}))]});return e.jsx(mp,Object.assign({"data-testid":i},{children:e.jsxs(bp,Object.assign({onClick:()=>G(void 0,void 0,void 0,(function*(){if(d&&!f){h(!0);try{g(!1),yield r(n)}catch(e){g(!0)}finally{h(!1)}}}))},{children:[(()=>{let t;return t=l?e.jsxs(e.Fragment,{children:[e.jsx(Dp,Object.assign({"data-testid":`${i}-thumbnail`},{children:e.jsx(Ip,{"data-testid":`${i}-thumbnail-image`,src:l})})),e.jsxs(xp,{children:[e.jsx(yp,{children:$()}),e.jsx(wp,{children:e.jsx($p,{children:m||"-"})}),p&&e.jsx(kp,Object.assign({weight:"semibold"},{children:s||"Something went wrong"}))]})]}):e.jsxs(e.Fragment,{children:[e.jsx(yp,{children:$()}),e.jsx(wp,{children:e.jsx($p,{children:m||"-"})}),p&&e.jsx(kp,Object.assign({weight:"semibold"},{children:s||"Something went wrong"}))]}),e.jsx(vp,Object.assign({$hasThumbnail:!!l},{children:t}))})(),e.jsx(Op,{children:e.jsx(Tp,Object.assign({"data-testid":`${i}-download-button`,type:"button",styleType:"light",sizeType:"small","aria-label":`download ${o}`},{children:f||!d?e.jsx(Cp,{$buttonStyle:"light",$buttonSizeStyle:"small",size:16,"aria-hidden":!0}):e.jsx(u.DownloadIcon,{"aria-hidden":!0})}))})]}))}))})),_p={activeId:void 0,setActiveId:void 0},Mp=t.createContext(_p);var Rp,Ap={exports:{}},Np={exports:{}},Bp={};var Fp,Lp,Pp,zp,Hp,Wp,Vp,Yp,Up,Kp,qp,Xp,Gp,Zp,Qp={};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Jp(){return Lp||(Lp=1,"production"===process.env.NODE_ENV?Np.exports=function(){if(Rp)return Bp;Rp=1;var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,r=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,o=e?Symbol.for("react.profiler"):60114,a=e?Symbol.for("react.provider"):60109,s=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,u=e?Symbol.for("react.suspense"):60113,f=e?Symbol.for("react.suspense_list"):60120,h=e?Symbol.for("react.memo"):60115,p=e?Symbol.for("react.lazy"):60116,g=e?Symbol.for("react.block"):60121,m=e?Symbol.for("react.fundamental"):60117,b=e?Symbol.for("react.responder"):60118,v=e?Symbol.for("react.scope"):60119;function y(e){if("object"==typeof e&&null!==e){var f=e.$$typeof;switch(f){case t:switch(e=e.type){case l:case c:case r:case o:case i:case u:return e;default:switch(e=e&&e.$$typeof){case s:case d:case p:case h:case a:return e;default:return f}}case n:return f}}}function x(e){return y(e)===c}return Bp.AsyncMode=l,Bp.ConcurrentMode=c,Bp.ContextConsumer=s,Bp.ContextProvider=a,Bp.Element=t,Bp.ForwardRef=d,Bp.Fragment=r,Bp.Lazy=p,Bp.Memo=h,Bp.Portal=n,Bp.Profiler=o,Bp.StrictMode=i,Bp.Suspense=u,Bp.isAsyncMode=function(e){return x(e)||y(e)===l},Bp.isConcurrentMode=x,Bp.isContextConsumer=function(e){return y(e)===s},Bp.isContextProvider=function(e){return y(e)===a},Bp.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},Bp.isForwardRef=function(e){return y(e)===d},Bp.isFragment=function(e){return y(e)===r},Bp.isLazy=function(e){return y(e)===p},Bp.isMemo=function(e){return y(e)===h},Bp.isPortal=function(e){return y(e)===n},Bp.isProfiler=function(e){return y(e)===o},Bp.isStrictMode=function(e){return y(e)===i},Bp.isSuspense=function(e){return y(e)===u},Bp.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===r||e===c||e===o||e===i||e===u||e===f||"object"==typeof e&&null!==e&&(e.$$typeof===p||e.$$typeof===h||e.$$typeof===a||e.$$typeof===s||e.$$typeof===d||e.$$typeof===m||e.$$typeof===b||e.$$typeof===v||e.$$typeof===g)},Bp.typeOf=y,Bp}():Np.exports=(Fp||(Fp=1,"production"!==process.env.NODE_ENV&&function(){var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,r=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,o=e?Symbol.for("react.profiler"):60114,a=e?Symbol.for("react.provider"):60109,s=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,u=e?Symbol.for("react.suspense"):60113,f=e?Symbol.for("react.suspense_list"):60120,h=e?Symbol.for("react.memo"):60115,p=e?Symbol.for("react.lazy"):60116,g=e?Symbol.for("react.block"):60121,m=e?Symbol.for("react.fundamental"):60117,b=e?Symbol.for("react.responder"):60118,v=e?Symbol.for("react.scope"):60119;function y(e){if("object"==typeof e&&null!==e){var f=e.$$typeof;switch(f){case t:var g=e.type;switch(g){case l:case c:case r:case o:case i:case u:return g;default:var m=g&&g.$$typeof;switch(m){case s:case d:case p:case h:case a:return m;default:return f}}case n:return f}}}var x=l,w=c,$=s,j=a,S=t,k=d,C=r,O=p,T=h,D=n,I=o,E=i,_=u,M=!1;function R(e){return y(e)===c}Qp.AsyncMode=x,Qp.ConcurrentMode=w,Qp.ContextConsumer=$,Qp.ContextProvider=j,Qp.Element=S,Qp.ForwardRef=k,Qp.Fragment=C,Qp.Lazy=O,Qp.Memo=T,Qp.Portal=D,Qp.Profiler=I,Qp.StrictMode=E,Qp.Suspense=_,Qp.isAsyncMode=function(e){return M||(M=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),R(e)||y(e)===l},Qp.isConcurrentMode=R,Qp.isContextConsumer=function(e){return y(e)===s},Qp.isContextProvider=function(e){return y(e)===a},Qp.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},Qp.isForwardRef=function(e){return y(e)===d},Qp.isFragment=function(e){return y(e)===r},Qp.isLazy=function(e){return y(e)===p},Qp.isMemo=function(e){return y(e)===h},Qp.isPortal=function(e){return y(e)===n},Qp.isProfiler=function(e){return y(e)===o},Qp.isStrictMode=function(e){return y(e)===i},Qp.isSuspense=function(e){return y(e)===u},Qp.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===r||e===c||e===o||e===i||e===u||e===f||"object"==typeof e&&null!==e&&(e.$$typeof===p||e.$$typeof===h||e.$$typeof===a||e.$$typeof===s||e.$$typeof===d||e.$$typeof===m||e.$$typeof===b||e.$$typeof===v||e.$$typeof===g)},Qp.typeOf=y}()),Qp)),Np.exports}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/function eg(){if(zp)return Pp;zp=1;var e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;return Pp=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map((function(e){return t[e]}));if("0123456789"!==r.join(""))return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach((function(e){i[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},i)).join("")}catch(e){return!1}}()?Object.assign:function(r,i){for(var o,a,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(r),l=1;l<arguments.length;l++){for(var c in o=Object(arguments[l]))t.call(o,c)&&(s[c]=o[c]);if(e){a=e(o);for(var d=0;d<a.length;d++)n.call(o,a[d])&&(s[a[d]]=o[a[d]])}}return s},Pp}function tg(){if(Wp)return Hp;Wp=1;return Hp="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}function ng(){return Yp?Vp:(Yp=1,Vp=Function.call.bind(Object.prototype.hasOwnProperty))}if("production"!==process.env.NODE_ENV){var rg=Jp();Ap.exports=function(){if(Xp)return qp;Xp=1;var e=Jp(),t=eg(),n=tg(),r=ng(),i=function(){if(Kp)return Up;Kp=1;var e=function(){};if("production"!==process.env.NODE_ENV){var t=tg(),n={},r=ng();e=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}}function i(i,o,a,s,l){if("production"!==process.env.NODE_ENV)for(var c in i)if(r(i,c)){var d;try{if("function"!=typeof i[c]){var u=Error((s||"React class")+": "+a+" type `"+c+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof i[c]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw u.name="Invariant Violation",u}d=i[c](o,c,s,a,null,t)}catch(e){d=e}if(!d||d instanceof Error||e((s||"React class")+": type specification of "+a+" `"+c+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof d+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),d instanceof Error&&!(d.message in n)){n[d.message]=!0;var f=l?l():"";e("Failed "+a+" type: "+d.message+(null!=f?f:""))}}}return i.resetWarningCache=function(){"production"!==process.env.NODE_ENV&&(n={})},Up=i}(),o=function(){};function a(){return null}return"production"!==process.env.NODE_ENV&&(o=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}),qp=function(s,l){var c="function"==typeof Symbol&&Symbol.iterator,d="@@iterator",u="<<anonymous>>",f={array:m("array"),bigint:m("bigint"),bool:m("boolean"),func:m("function"),number:m("number"),object:m("object"),string:m("string"),symbol:m("symbol"),any:g(a),arrayOf:function(e){return g((function(t,r,i,o,a){if("function"!=typeof e)return new p("Property `"+a+"` of component `"+i+"` has invalid PropType notation inside arrayOf.");var s=t[r];if(!Array.isArray(s))return new p("Invalid "+o+" `"+a+"` of type `"+y(s)+"` supplied to `"+i+"`, expected an array.");for(var l=0;l<s.length;l++){var c=e(s,l,i,o,a+"["+l+"]",n);if(c instanceof Error)return c}return null}))},element:g((function(e,t,n,r,i){var o=e[t];return s(o)?null:new p("Invalid "+r+" `"+i+"` of type `"+y(o)+"` supplied to `"+n+"`, expected a single ReactElement.")})),elementType:g((function(t,n,r,i,o){var a=t[n];return e.isValidElementType(a)?null:new p("Invalid "+i+" `"+o+"` of type `"+y(a)+"` supplied to `"+r+"`, expected a single ReactElement type.")})),instanceOf:function(e){return g((function(t,n,r,i,o){if(!(t[n]instanceof e)){var a=e.name||u;return new p("Invalid "+i+" `"+o+"` of type `"+((s=t[n]).constructor&&s.constructor.name?s.constructor.name:u)+"` supplied to `"+r+"`, expected instance of `"+a+"`.")}var s;return null}))},node:g((function(e,t,n,r,i){return v(e[t])?null:new p("Invalid "+r+" `"+i+"` supplied to `"+n+"`, expected a ReactNode.")})),objectOf:function(e){return g((function(t,i,o,a,s){if("function"!=typeof e)return new p("Property `"+s+"` of component `"+o+"` has invalid PropType notation inside objectOf.");var l=t[i],c=y(l);if("object"!==c)return new p("Invalid "+a+" `"+s+"` of type `"+c+"` supplied to `"+o+"`, expected an object.");for(var d in l)if(r(l,d)){var u=e(l,d,o,a,s+"."+d,n);if(u instanceof Error)return u}return null}))},oneOf:function(e){return Array.isArray(e)?g((function(t,n,r,i,o){for(var a=t[n],s=0;s<e.length;s++)if(h(a,e[s]))return null;var l=JSON.stringify(e,(function(e,t){return"symbol"===x(t)?String(t):t}));return new p("Invalid "+i+" `"+o+"` of value `"+String(a)+"` supplied to `"+r+"`, expected one of "+l+".")})):("production"!==process.env.NODE_ENV&&o(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),a)},oneOfType:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&o("Invalid argument supplied to oneOfType, expected an instance of array."),a;for(var t=0;t<e.length;t++){var i=e[t];if("function"!=typeof i)return o("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+w(i)+" at index "+t+"."),a}return g((function(t,i,o,a,s){for(var l=[],c=0;c<e.length;c++){var d=(0,e[c])(t,i,o,a,s,n);if(null==d)return null;d.data&&r(d.data,"expectedType")&&l.push(d.data.expectedType)}return new p("Invalid "+a+" `"+s+"` supplied to `"+o+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return g((function(t,r,i,o,a){var s=t[r],l=y(s);if("object"!==l)return new p("Invalid "+o+" `"+a+"` of type `"+l+"` supplied to `"+i+"`, expected `object`.");for(var c in e){var d=e[c];if("function"!=typeof d)return b(i,o,a,c,x(d));var u=d(s,c,i,o,a+"."+c,n);if(u)return u}return null}))},exact:function(e){return g((function(i,o,a,s,l){var c=i[o],d=y(c);if("object"!==d)return new p("Invalid "+s+" `"+l+"` of type `"+d+"` supplied to `"+a+"`, expected `object`.");var u=t({},i[o],e);for(var f in u){var h=e[f];if(r(e,f)&&"function"!=typeof h)return b(a,s,l,f,x(h));if(!h)return new p("Invalid "+s+" `"+l+"` key `"+f+"` supplied to `"+a+"`.\nBad object: "+JSON.stringify(i[o],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var g=h(c,f,a,s,l+"."+f,n);if(g)return g}return null}))}};function h(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function p(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function g(e){if("production"!==process.env.NODE_ENV)var t={},r=0;function i(i,a,s,c,d,f,h){if(c=c||u,f=f||s,h!==n){if(l){var g=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw g.name="Invariant Violation",g}if("production"!==process.env.NODE_ENV&&"undefined"!=typeof console){var m=c+":"+s;!t[m]&&r<3&&(o("You are manually calling a React.PropTypes validation function for the `"+f+"` prop on `"+c+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),t[m]=!0,r++)}}return null==a[s]?i?null===a[s]?new p("The "+d+" `"+f+"` is marked as required in `"+c+"`, but its value is `null`."):new p("The "+d+" `"+f+"` is marked as required in `"+c+"`, but its value is `undefined`."):null:e(a,s,c,d,f)}var a=i.bind(null,!1);return a.isRequired=i.bind(null,!0),a}function m(e){return g((function(t,n,r,i,o,a){var s=t[n];return y(s)!==e?new p("Invalid "+i+" `"+o+"` of type `"+x(s)+"` supplied to `"+r+"`, expected `"+e+"`.",{expectedType:e}):null}))}function b(e,t,n,r,i){return new p((e||"React class")+": "+t+" type `"+n+"."+r+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+i+"`.")}function v(e){switch(typeof e){case"number":case"string":case"undefined":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(v);if(null===e||s(e))return!0;var t=function(e){var t=e&&(c&&e[c]||e[d]);if("function"==typeof t)return t}(e);if(!t)return!1;var n,r=t.call(e);if(t!==e.entries){for(;!(n=r.next()).done;)if(!v(n.value))return!1}else for(;!(n=r.next()).done;){var i=n.value;if(i&&!v(i[1]))return!1}return!0;default:return!1}}function y(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function x(e){if(null==e)return""+e;var t=y(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function w(e){var t=x(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return p.prototype=Error.prototype,f.checkPropTypes=i,f.resetWarningCache=i.resetWarningCache,f.PropTypes=f,f},qp}()(rg.isElement,!0)}else Ap.exports=function(){if(Zp)return Gp;Zp=1;var e=tg();function t(){}function n(){}return n.resetWarningCache=t,Gp=function(){function r(t,n,r,i,o,a){if(a!==e){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function i(){return r}r.isRequired=r;var o={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:i,element:r,elementType:r,instanceOf:i,node:r,objectOf:i,oneOf:i,oneOfType:i,shape:i,exact:i,checkPropTypes:n,resetWarningCache:t};return o.PropTypes=o,o}}()();var ig=Ii(Ap.exports),og=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function ag(e,t){var n=function(e){var t=e.name;if(t&&-1!==t.lastIndexOf(".")&&!e.type){var n=t.split(".").pop().toLowerCase(),r=og.get(n);r&&Object.defineProperty(e,"type",{value:r,writable:!1,configurable:!1,enumerable:!0})}return e}(e);if("string"!=typeof n.path){var r=e.webkitRelativePath;Object.defineProperty(n,"path",{value:"string"==typeof t?t:"string"==typeof r&&r.length>0?r:e.name,writable:!1,configurable:!1,enumerable:!0})}return n}var sg=[".DS_Store","Thumbs.db"];function lg(e){return"object"==typeof e&&null!==e}function cg(e){return hg(e.target.files).map((function(e){return ag(e)}))}function dg(e){return G(this,void 0,void 0,(function(){return Z(this,(function(t){switch(t.label){case 0:return[4,Promise.all(e.map((function(e){return e.getFile()})))];case 1:return[2,t.sent().map((function(e){return ag(e)}))]}}))}))}function ug(e,t){return G(this,void 0,void 0,(function(){var n;return Z(this,(function(r){switch(r.label){case 0:return e.items?(n=hg(e.items).filter((function(e){return"file"===e.kind})),"drop"!==t?[2,n]:[4,Promise.all(n.map(pg))]):[3,2];case 1:return[2,fg(gg(r.sent()))];case 2:return[2,fg(hg(e.files).map((function(e){return ag(e)})))]}}))}))}function fg(e){return e.filter((function(e){return-1===sg.indexOf(e.name)}))}function hg(e){if(null===e)return[];for(var t=[],n=0;n<e.length;n++){var r=e[n];t.push(r)}return t}function pg(e){if("function"!=typeof e.webkitGetAsEntry)return mg(e);var t=e.webkitGetAsEntry();return t&&t.isDirectory?vg(t):mg(e)}function gg(e){return e.reduce((function(e,t){return J(J([],Q(e),!1),Q(Array.isArray(t)?gg(t):[t]),!1)}),[])}function mg(e){var t=e.getAsFile();if(!t)return Promise.reject("".concat(e," is not a File"));var n=ag(t);return Promise.resolve(n)}function bg(e){return G(this,void 0,void 0,(function(){return Z(this,(function(t){return[2,e.isDirectory?vg(e):yg(e)]}))}))}function vg(e){var t=e.createReader();return new Promise((function(e,n){var r=[];!function i(){var o=this;t.readEntries((function(t){return G(o,void 0,void 0,(function(){var o,a,s;return Z(this,(function(l){switch(l.label){case 0:if(t.length)return[3,5];l.label=1;case 1:return l.trys.push([1,3,,4]),[4,Promise.all(r)];case 2:return o=l.sent(),e(o),[3,4];case 3:return a=l.sent(),n(a),[3,4];case 4:return[3,6];case 5:s=Promise.all(t.map(bg)),r.push(s),i(),l.label=6;case 6:return[2]}}))}))}),(function(e){n(e)}))}()}))}function yg(e){return G(this,void 0,void 0,(function(){return Z(this,(function(t){return[2,new Promise((function(t,n){e.file((function(n){var r=ag(n,e.fullPath);t(r)}),(function(e){n(e)}))}))]}))}))}var xg=function(e,t){if(e&&t){var n=Array.isArray(t)?t:t.split(","),r=e.name||"",i=(e.type||"").toLowerCase(),o=i.replace(/\/.*$/,"");return n.some((function(e){var t=e.trim().toLowerCase();return"."===t.charAt(0)?r.toLowerCase().endsWith(t):t.endsWith("/*")?o===t.replace(/\/.*$/,""):i===t}))}return!0};function wg(e){return function(e){if(Array.isArray(e))return Og(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Cg(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function $g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function jg(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?$g(Object(n),!0).forEach((function(t){Sg(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Sg(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function kg(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,i,o=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(e){s=!0,i=e}finally{try{a||null==n.return||n.return()}finally{if(s)throw i}}return o}(e,t)||Cg(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Cg(e,t){if(e){if("string"==typeof e)return Og(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Og(e,t):void 0}}function Og(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Tg=function(e){e=Array.isArray(e)&&1===e.length?e[0]:e;var t=Array.isArray(e)?"one of ".concat(e.join(", ")):e;return{code:"file-invalid-type",message:"File type must be ".concat(t)}},Dg=function(e){return{code:"file-too-large",message:"File is larger than ".concat(e," ").concat(1===e?"byte":"bytes")}},Ig=function(e){return{code:"file-too-small",message:"File is smaller than ".concat(e," ").concat(1===e?"byte":"bytes")}},Eg={code:"too-many-files",message:"Too many files"};function _g(e,t){var n="application/x-moz-file"===e.type||xg(e,t);return[n,n?null:Tg(t)]}function Mg(e,t,n){if(Rg(e.size))if(Rg(t)&&Rg(n)){if(e.size>n)return[!1,Dg(n)];if(e.size<t)return[!1,Ig(t)]}else{if(Rg(t)&&e.size<t)return[!1,Ig(t)];if(Rg(n)&&e.size>n)return[!1,Dg(n)]}return[!0,null]}function Rg(e){return null!=e}function Ag(e){return"function"==typeof e.isPropagationStopped?e.isPropagationStopped():void 0!==e.cancelBubble&&e.cancelBubble}function Ng(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,(function(e){return"Files"===e||"application/x-moz-file"===e})):!!e.target&&!!e.target.files}function Bg(e){e.preventDefault()}function Fg(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return t.some((function(t){return!Ag(e)&&t&&t.apply(void 0,[e].concat(r)),Ag(e)}))}}function Lg(e){return"audio/*"===e||"video/*"===e||"image/*"===e||"text/*"===e||/\w+\/[-+.\w]+/g.test(e)}function Pg(e){return/^.*\.[\w]+$/.test(e)}var zg=["children"],Hg=["open"],Wg=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],Vg=["refKey","onChange","onClick"];function Yg(e){return function(e){if(Array.isArray(e))return qg(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Kg(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Ug(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,i,o=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(e){s=!0,i=e}finally{try{a||null==n.return||n.return()}finally{if(s)throw i}}return o}(e,t)||Kg(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Kg(e,t){if(e){if("string"==typeof e)return qg(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?qg(e,t):void 0}}function qg(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Xg(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Gg(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Xg(Object(n),!0).forEach((function(t){Zg(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Xg(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Zg(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Qg(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var Jg=t.forwardRef((function(e,n){var r=e.children,i=nm(Qg(e,zg)),o=i.open,a=Qg(i,Hg);return t.useImperativeHandle(n,(function(){return{open:o}}),[o]),Y.default.createElement(t.Fragment,null,r(Gg(Gg({},a),{},{open:o})))}));Jg.displayName="Dropzone";var em={disabled:!1,getFilesFromEvent:function(e){return G(this,void 0,void 0,(function(){return Z(this,(function(t){return lg(e)&&lg(e.dataTransfer)?[2,ug(e.dataTransfer,e.type)]:function(e){return lg(e)&&lg(e.target)}(e)?[2,cg(e)]:Array.isArray(e)&&e.every((function(e){return"getFile"in e&&"function"==typeof e.getFile}))?[2,dg(e)]:[2,[]]}))}))},maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};Jg.defaultProps=em,Jg.propTypes={children:ig.func,accept:ig.objectOf(ig.arrayOf(ig.string)),multiple:ig.bool,preventDropOnDocument:ig.bool,noClick:ig.bool,noKeyboard:ig.bool,noDrag:ig.bool,noDragEventsBubbling:ig.bool,minSize:ig.number,maxSize:ig.number,maxFiles:ig.number,disabled:ig.bool,getFilesFromEvent:ig.func,onFileDialogCancel:ig.func,onFileDialogOpen:ig.func,useFsAccessApi:ig.bool,autoFocus:ig.bool,onDragEnter:ig.func,onDragLeave:ig.func,onDragOver:ig.func,onDrop:ig.func,onDropAccepted:ig.func,onDropRejected:ig.func,onError:ig.func,validator:ig.func};var tm={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function nm(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Gg(Gg({},em),e),r=n.accept,i=n.disabled,o=n.getFilesFromEvent,a=n.maxSize,s=n.minSize,l=n.multiple,c=n.maxFiles,d=n.onDragEnter,u=n.onDragLeave,f=n.onDragOver,h=n.onDrop,p=n.onDropAccepted,g=n.onDropRejected,m=n.onFileDialogCancel,b=n.onFileDialogOpen,v=n.useFsAccessApi,y=n.autoFocus,x=n.preventDropOnDocument,w=n.noClick,$=n.noKeyboard,j=n.noDrag,S=n.noDragEventsBubbling,k=n.onError,C=n.validator,O=t.useMemo((function(){return function(e){if(Rg(e))return Object.entries(e).reduce((function(e,t){var n=kg(t,2),r=n[0],i=n[1];return[].concat(wg(e),[r],wg(i))}),[]).filter((function(e){return Lg(e)||Pg(e)})).join(",")}(r)}),[r]),T=t.useMemo((function(){return function(e){return Rg(e)?[{description:"Files",accept:Object.entries(e).filter((function(e){var t=kg(e,2),n=t[0],r=t[1],i=!0;return Lg(n)||(console.warn('Skipped "'.concat(n,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),i=!1),Array.isArray(r)&&r.every(Pg)||(console.warn('Skipped "'.concat(n,'" because an invalid file extension was provided.')),i=!1),i})).reduce((function(e,t){var n=kg(t,2),r=n[0],i=n[1];return jg(jg({},e),{},Sg({},r,i))}),{})}]:e}(r)}),[r]),D=t.useMemo((function(){return"function"==typeof b?b:im}),[b]),I=t.useMemo((function(){return"function"==typeof m?m:im}),[m]),E=t.useRef(null),_=t.useRef(null),M=Ug(t.useReducer(rm,tm),2),R=M[0],A=M[1],N=R.isFocused,B=R.isFileDialogActive,F=t.useRef("undefined"!=typeof window&&window.isSecureContext&&v&&"showOpenFilePicker"in window),L=function(){!F.current&&B&&setTimeout((function(){_.current&&(_.current.files.length||(A({type:"closeDialog"}),I()))}),300)};t.useEffect((function(){return window.addEventListener("focus",L,!1),function(){window.removeEventListener("focus",L,!1)}}),[_,B,I,F]);var P=t.useRef([]),z=function(e){E.current&&E.current.contains(e.target)||(e.preventDefault(),P.current=[])};t.useEffect((function(){return x&&(document.addEventListener("dragover",Bg,!1),document.addEventListener("drop",z,!1)),function(){x&&(document.removeEventListener("dragover",Bg),document.removeEventListener("drop",z))}}),[E,x]),t.useEffect((function(){return!i&&y&&E.current&&E.current.focus(),function(){}}),[E,y,i]);var H=t.useCallback((function(e){k?k(e):console.error(e)}),[k]),W=t.useCallback((function(e){e.preventDefault(),e.persist(),ne(e),P.current=[].concat(Yg(P.current),[e.target]),Ng(e)&&Promise.resolve(o(e)).then((function(t){if(!Ag(e)||S){var n=t.length,r=n>0&&function(e){var t=e.files,n=e.accept,r=e.minSize,i=e.maxSize,o=e.multiple,a=e.maxFiles,s=e.validator;return!(!o&&t.length>1||o&&a>=1&&t.length>a)&&t.every((function(e){var t=kg(_g(e,n),1)[0],o=kg(Mg(e,r,i),1)[0],a=s?s(e):null;return t&&o&&!a}))}({files:t,accept:O,minSize:s,maxSize:a,multiple:l,maxFiles:c,validator:C});A({isDragAccept:r,isDragReject:n>0&&!r,isDragActive:!0,type:"setDraggedFiles"}),d&&d(e)}})).catch((function(e){return H(e)}))}),[o,d,H,S,O,s,a,l,c,C]),V=t.useCallback((function(e){e.preventDefault(),e.persist(),ne(e);var t=Ng(e);if(t&&e.dataTransfer)try{e.dataTransfer.dropEffect="copy"}catch(e){}return t&&f&&f(e),!1}),[f,S]),Y=t.useCallback((function(e){e.preventDefault(),e.persist(),ne(e);var t=P.current.filter((function(e){return E.current&&E.current.contains(e)})),n=t.indexOf(e.target);-1!==n&&t.splice(n,1),P.current=t,t.length>0||(A({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),Ng(e)&&u&&u(e))}),[E,u,S]),U=t.useCallback((function(e,t){var n=[],r=[];e.forEach((function(e){var t=Ug(_g(e,O),2),i=t[0],o=t[1],l=Ug(Mg(e,s,a),2),c=l[0],d=l[1],u=C?C(e):null;if(i&&c&&!u)n.push(e);else{var f=[o,d];u&&(f=f.concat(u)),r.push({file:e,errors:f.filter((function(e){return e}))})}})),(!l&&n.length>1||l&&c>=1&&n.length>c)&&(n.forEach((function(e){r.push({file:e,errors:[Eg]})})),n.splice(0)),A({acceptedFiles:n,fileRejections:r,type:"setFiles"}),h&&h(n,r,t),r.length>0&&g&&g(r,t),n.length>0&&p&&p(n,t)}),[A,l,O,s,a,c,h,p,g,C]),K=t.useCallback((function(e){e.preventDefault(),e.persist(),ne(e),P.current=[],Ng(e)&&Promise.resolve(o(e)).then((function(t){Ag(e)&&!S||U(t,e)})).catch((function(e){return H(e)})),A({type:"reset"})}),[o,U,H,S]),q=t.useCallback((function(){if(F.current){A({type:"openDialog"}),D();var e={multiple:l,types:T};window.showOpenFilePicker(e).then((function(e){return o(e)})).then((function(e){U(e,null),A({type:"closeDialog"})})).catch((function(e){var t;(t=e)instanceof DOMException&&("AbortError"===t.name||t.code===t.ABORT_ERR)?(I(e),A({type:"closeDialog"})):!function(e){return e instanceof DOMException&&("SecurityError"===e.name||e.code===e.SECURITY_ERR)}(e)?H(e):(F.current=!1,_.current?(_.current.value=null,_.current.click()):H(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided.")))}))}else _.current&&(A({type:"openDialog"}),D(),_.current.value=null,_.current.click())}),[A,D,I,v,U,H,T,l]),X=t.useCallback((function(e){E.current&&E.current.isEqualNode(e.target)&&(" "!==e.key&&"Enter"!==e.key&&32!==e.keyCode&&13!==e.keyCode||(e.preventDefault(),q()))}),[E,q]),G=t.useCallback((function(){A({type:"focus"})}),[]),Z=t.useCallback((function(){A({type:"blur"})}),[]),Q=t.useCallback((function(){w||(!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.navigator.userAgent;return function(e){return-1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident/")}(e)||function(e){return-1!==e.indexOf("Edge/")}(e)}()?q():setTimeout(q,0))}),[w,q]),J=function(e){return i?null:e},ee=function(e){return $?null:J(e)},te=function(e){return j?null:J(e)},ne=function(e){S&&e.stopPropagation()},re=t.useMemo((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,n=void 0===t?"ref":t,r=e.role,o=e.onKeyDown,a=e.onFocus,s=e.onBlur,l=e.onClick,c=e.onDragEnter,d=e.onDragOver,u=e.onDragLeave,f=e.onDrop,h=Qg(e,Wg);return Gg(Gg(Zg({onKeyDown:ee(Fg(o,X)),onFocus:ee(Fg(a,G)),onBlur:ee(Fg(s,Z)),onClick:J(Fg(l,Q)),onDragEnter:te(Fg(c,W)),onDragOver:te(Fg(d,V)),onDragLeave:te(Fg(u,Y)),onDrop:te(Fg(f,K)),role:"string"==typeof r&&""!==r?r:"presentation"},n,E),i||$?{}:{tabIndex:0}),h)}}),[E,X,G,Z,Q,W,V,Y,K,$,j,i]),ie=t.useCallback((function(e){e.stopPropagation()}),[]),oe=t.useMemo((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,n=void 0===t?"ref":t,r=e.onChange,i=e.onClick,o=Qg(e,Vg);return Gg(Gg({},Zg({accept:O,multiple:l,type:"file",style:{display:"none"},onChange:J(Fg(r,K)),onClick:J(Fg(i,ie)),tabIndex:-1},n,_)),o)}}),[_,r,l,K,i]);return Gg(Gg({},R),{},{isFocused:N&&!i,getRootProps:re,getInputProps:oe,rootRef:E,inputRef:_,open:J(q)})}function rm(e,t){switch(t.type){case"focus":return Gg(Gg({},e),{},{isFocused:!0});case"blur":return Gg(Gg({},e),{},{isFocused:!1});case"openDialog":return Gg(Gg({},tm),{},{isFileDialogActive:!0});case"closeDialog":return Gg(Gg({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return Gg(Gg({},e),{},{isDragActive:t.isDragActive,isDragAccept:t.isDragAccept,isDragReject:t.isDragReject});case"setFiles":return Gg(Gg({},e),{},{acceptedFiles:t.acceptedFiles,fileRejections:t.fileRejections});case"reset":return Gg({},tm);default:return e}}function im(){}const om=K.default.div`
    position: relative;
    display: flex;
    flex-direction: column;

    ${e=>{if(e.$border){const t=encodeURIComponent(ts.Neutral[5](e));return i.css`
                background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='4' ry='4' stroke='${t}' stroke-width='4' stroke-dasharray='8%2c 8' stroke-dashoffset='8' stroke-linecap='round'/%3e%3c/svg%3e");
                border-radius: 4px;
                padding: 2rem;

                ${is.MaxWidth.mobileL} {
                    padding: 2rem 1.25rem;
                }
            `}}}
`,am=K.default.input`
    display: none;
`,sm=K.default.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${ts.Accent.Light[5]};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${e=>{const t=encodeURIComponent(ts.Primary(e));return i.css`
            background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='4' ry='4' stroke='${t}' stroke-width='4' stroke-dasharray='8%2c 8' stroke-dashoffset='8' stroke-linecap='square'/%3e%3c/svg%3e");
            border-radius: 4px;
        `}}
`,lm=K.default(exports.Text.BodySmall)`
    color: ${ts.Primary};
    text-align: center;
`,cm=K.default(y.CloudArrowUpFillIcon)`
    color: ${ts.Primary};
    height: 4rem;
    width: 4rem;
`,dm=t.forwardRef((({children:n,accept:r,capture:i,multiple:o,id:a,className:s,name:l,border:c,disabled:d,onChange:u,"data-testid":f},h)=>{const p=t.useRef(),{getRootProps:g,isDragActive:m}=nm({onDrop:u,noClick:!0,disabled:d});t.useImperativeHandle(h,(()=>Object.assign(Object.assign({},p.current),{openFileDialog:()=>{var e;p.current.value=null,null===(e=p.current)||void 0===e||e.click()}})));return e.jsxs(om,Object.assign({id:a,"data-testid":f||"dropzone",$border:c,className:s},g(),{children:[e.jsx(am,{type:"file",name:l,ref:p,tabIndex:-1,"aria-hidden":!0,accept:r,capture:i,multiple:o,"data-testid":f?`${f}-input`:"dropzone-input",onChange:e=>{e.target.files&&u(Array.from(e.target.files))}}),n,m&&e.jsxs(sm,{children:[e.jsx(cm,{}),e.jsx(lm,Object.assign({weight:"semibold"},{children:"Drop files here"}))]})]}))}));const um="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement;function fm(e){const t=Object.prototype.toString.call(e);return"[object Window]"===t||"[object global]"===t}function hm(e){return"nodeType"in e}function pm(e){var t,n;return e?fm(e)?e:hm(e)&&null!=(t=null==(n=e.ownerDocument)?void 0:n.defaultView)?t:window:window}function gm(e){const{Document:t}=pm(e);return e instanceof t}function mm(e){return!fm(e)&&e instanceof pm(e).HTMLElement}function bm(e){return e instanceof pm(e).SVGElement}function vm(e){return e?fm(e)?e.document:hm(e)?gm(e)?e:mm(e)||bm(e)?e.ownerDocument:document:document:document}const ym=um?t.useLayoutEffect:t.useEffect;function xm(e){const n=t.useRef(e);return ym((()=>{n.current=e})),t.useCallback((function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return null==n.current?void 0:n.current(...t)}),[])}function wm(e,n){void 0===n&&(n=[e]);const r=t.useRef(e);return ym((()=>{r.current!==e&&(r.current=e)}),n),r}function $m(e,n){const r=t.useRef();return t.useMemo((()=>{const t=e(r.current);return r.current=t,t}),[...n])}function jm(e){const n=xm(e),r=t.useRef(null),i=t.useCallback((e=>{e!==r.current&&(null==n||n(e,r.current)),r.current=e}),[]);return[r,i]}function Sm(e){const n=t.useRef();return t.useEffect((()=>{n.current=e}),[e]),n.current}let km={};function Cm(e,n){return t.useMemo((()=>{if(n)return n;const t=null==km[e]?0:km[e]+1;return km[e]=t,e+"-"+t}),[e,n])}function Om(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return r.reduce(((t,n)=>{const r=Object.entries(n);for(const[n,i]of r){const r=t[n];null!=r&&(t[n]=r+e*i)}return t}),{...t})}}const Tm=Om(1),Dm=Om(-1);function Im(e){if(!e)return!1;const{KeyboardEvent:t}=pm(e.target);return t&&e instanceof t}function Em(e){if(function(e){if(!e)return!1;const{TouchEvent:t}=pm(e.target);return t&&e instanceof t}(e)){if(e.touches&&e.touches.length){const{clientX:t,clientY:n}=e.touches[0];return{x:t,y:n}}if(e.changedTouches&&e.changedTouches.length){const{clientX:t,clientY:n}=e.changedTouches[0];return{x:t,y:n}}}return function(e){return"clientX"in e&&"clientY"in e}(e)?{x:e.clientX,y:e.clientY}:null}const _m=Object.freeze({Translate:{toString(e){if(!e)return;const{x:t,y:n}=e;return"translate3d("+(t?Math.round(t):0)+"px, "+(n?Math.round(n):0)+"px, 0)"}},Scale:{toString(e){if(!e)return;const{scaleX:t,scaleY:n}=e;return"scaleX("+t+") scaleY("+n+")"}},Transform:{toString(e){if(e)return[_m.Translate.toString(e),_m.Scale.toString(e)].join(" ")}},Transition:{toString(e){let{property:t,duration:n,easing:r}=e;return t+" "+n+"ms "+r}}}),Mm="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function Rm(e){return e.matches(Mm)?e:e.querySelector(Mm)}const Am={display:"none"};function Nm(e){let{id:t,value:n}=e;return Y.default.createElement("div",{id:t,style:Am},n)}function Bm(e){let{id:t,announcement:n,ariaLiveType:r="assertive"}=e;return Y.default.createElement("div",{id:t,style:{position:"fixed",width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"},role:"status","aria-live":r,"aria-atomic":!0},n)}const Fm=t.createContext(null);const Lm={draggable:"\n    To pick up a draggable item, press the space bar.\n    While dragging, use the arrow keys to move the item.\n    Press space again to drop the item in its new position, or press escape to cancel.\n  "},Pm={onDragStart(e){let{active:t}=e;return"Picked up draggable item "+t.id+"."},onDragOver(e){let{active:t,over:n}=e;return n?"Draggable item "+t.id+" was moved over droppable area "+n.id+".":"Draggable item "+t.id+" is no longer over a droppable area."},onDragEnd(e){let{active:t,over:n}=e;return n?"Draggable item "+t.id+" was dropped over droppable area "+n.id:"Draggable item "+t.id+" was dropped."},onDragCancel(e){let{active:t}=e;return"Dragging was cancelled. Draggable item "+t.id+" was dropped."}};function zm(e){let{announcements:r=Pm,container:i,hiddenTextDescribedById:o,screenReaderInstructions:a=Lm}=e;const{announce:s,announcement:l}=function(){const[e,n]=t.useState("");return{announce:t.useCallback((e=>{null!=e&&n(e)}),[]),announcement:e}}(),c=Cm("DndLiveRegion"),[d,u]=t.useState(!1);if(t.useEffect((()=>{u(!0)}),[]),function(e){const n=t.useContext(Fm);t.useEffect((()=>{if(!n)throw new Error("useDndMonitor must be used within a children of <DndContext>");return n(e)}),[e,n])}(t.useMemo((()=>({onDragStart(e){let{active:t}=e;s(r.onDragStart({active:t}))},onDragMove(e){let{active:t,over:n}=e;r.onDragMove&&s(r.onDragMove({active:t,over:n}))},onDragOver(e){let{active:t,over:n}=e;s(r.onDragOver({active:t,over:n}))},onDragEnd(e){let{active:t,over:n}=e;s(r.onDragEnd({active:t,over:n}))},onDragCancel(e){let{active:t,over:n}=e;s(r.onDragCancel({active:t,over:n}))}})),[s,r])),!d)return null;const f=Y.default.createElement(Y.default.Fragment,null,Y.default.createElement(Nm,{id:o,value:a.draggable}),Y.default.createElement(Bm,{id:c,announcement:l}));return i?n.createPortal(f,i):f}var Hm;function Wm(){}function Vm(e,n){return t.useMemo((()=>({sensor:e,options:null!=n?n:{}})),[e,n])}!function(e){e.DragStart="dragStart",e.DragMove="dragMove",e.DragEnd="dragEnd",e.DragCancel="dragCancel",e.DragOver="dragOver",e.RegisterDroppable="registerDroppable",e.SetDroppableDisabled="setDroppableDisabled",e.UnregisterDroppable="unregisterDroppable"}(Hm||(Hm={}));const Ym=Object.freeze({x:0,y:0});function Um(e,t){let{data:{value:n}}=e,{data:{value:r}}=t;return n-r}function Km(e,t){let{data:{value:n}}=e,{data:{value:r}}=t;return r-n}function qm(e){let{left:t,top:n,height:r,width:i}=e;return[{x:t,y:n},{x:t+i,y:n},{x:t,y:n+r},{x:t+i,y:n+r}]}function Xm(e,t){if(!e||0===e.length)return null;const[n]=e;return t?n[t]:n}function Gm(e,t){const n=Math.max(t.top,e.top),r=Math.max(t.left,e.left),i=Math.min(t.left+t.width,e.left+e.width),o=Math.min(t.top+t.height,e.top+e.height),a=i-r,s=o-n;if(r<i&&n<o){const n=t.width*t.height,r=e.width*e.height,i=a*s;return Number((i/(n+r-i)).toFixed(4))}return 0}const Zm=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:r}=e;const i=[];for(const e of r){const{id:r}=e,o=n.get(r);if(o){const n=Gm(o,t);n>0&&i.push({id:r,data:{droppableContainer:e,value:n}})}}return i.sort(Km)};function Qm(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:Ym}function Jm(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return r.reduce(((t,n)=>({...t,top:t.top+e*n.y,bottom:t.bottom+e*n.y,left:t.left+e*n.x,right:t.right+e*n.x})),{...t})}}const eb=Jm(1);const tb={ignoreTransform:!1};function nb(e,t){void 0===t&&(t=tb);let n=e.getBoundingClientRect();if(t.ignoreTransform){const{transform:t,transformOrigin:r}=pm(e).getComputedStyle(e);t&&(n=function(e,t,n){const r=function(e){if(e.startsWith("matrix3d(")){const t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}if(e.startsWith("matrix(")){const t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}(t);if(!r)return e;const{scaleX:i,scaleY:o,x:a,y:s}=r,l=e.left-a-(1-i)*parseFloat(n),c=e.top-s-(1-o)*parseFloat(n.slice(n.indexOf(" ")+1)),d=i?e.width/i:e.width,u=o?e.height/o:e.height;return{width:d,height:u,top:c,right:l+d,bottom:c+u,left:l}}(n,t,r))}const{top:r,left:i,width:o,height:a,bottom:s,right:l}=n;return{top:r,left:i,width:o,height:a,bottom:s,right:l}}function rb(e){return nb(e,{ignoreTransform:!0})}function ib(e,t){const n=[];return e?function r(i){if(null!=t&&n.length>=t)return n;if(!i)return n;if(gm(i)&&null!=i.scrollingElement&&!n.includes(i.scrollingElement))return n.push(i.scrollingElement),n;if(!mm(i)||bm(i))return n;if(n.includes(i))return n;const o=pm(e).getComputedStyle(i);return i!==e&&function(e,t){void 0===t&&(t=pm(e).getComputedStyle(e));const n=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some((e=>{const r=t[e];return"string"==typeof r&&n.test(r)}))}(i,o)&&n.push(i),function(e,t){return void 0===t&&(t=pm(e).getComputedStyle(e)),"fixed"===t.position}(i,o)?n:r(i.parentNode)}(e):n}function ob(e){const[t]=ib(e,1);return null!=t?t:null}function ab(e){return um&&e?fm(e)?e:hm(e)?gm(e)||e===vm(e).scrollingElement?window:mm(e)?e:null:null:null}function sb(e){return fm(e)?e.scrollX:e.scrollLeft}function lb(e){return fm(e)?e.scrollY:e.scrollTop}function cb(e){return{x:sb(e),y:lb(e)}}var db;function ub(e){return!(!um||!e)&&e===document.scrollingElement}function fb(e){const t={x:0,y:0},n=ub(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},r={x:e.scrollWidth-n.width,y:e.scrollHeight-n.height};return{isTop:e.scrollTop<=t.y,isLeft:e.scrollLeft<=t.x,isBottom:e.scrollTop>=r.y,isRight:e.scrollLeft>=r.x,maxScroll:r,minScroll:t}}!function(e){e[e.Forward=1]="Forward",e[e.Backward=-1]="Backward"}(db||(db={}));const hb={x:.2,y:.2};function pb(e,t,n,r,i){let{top:o,left:a,right:s,bottom:l}=n;void 0===r&&(r=10),void 0===i&&(i=hb);const{isTop:c,isBottom:d,isLeft:u,isRight:f}=fb(e),h={x:0,y:0},p={x:0,y:0},g=t.height*i.y,m=t.width*i.x;return!c&&o<=t.top+g?(h.y=db.Backward,p.y=r*Math.abs((t.top+g-o)/g)):!d&&l>=t.bottom-g&&(h.y=db.Forward,p.y=r*Math.abs((t.bottom-g-l)/g)),!f&&s>=t.right-m?(h.x=db.Forward,p.x=r*Math.abs((t.right-m-s)/m)):!u&&a<=t.left+m&&(h.x=db.Backward,p.x=r*Math.abs((t.left+m-a)/m)),{direction:h,speed:p}}function gb(e){if(e===document.scrollingElement){const{innerWidth:e,innerHeight:t}=window;return{top:0,left:0,right:e,bottom:t,width:e,height:t}}const{top:t,left:n,right:r,bottom:i}=e.getBoundingClientRect();return{top:t,left:n,right:r,bottom:i,width:e.clientWidth,height:e.clientHeight}}function mb(e){return e.reduce(((e,t)=>Tm(e,cb(t))),Ym)}const bb=[["x",["left","right"],function(e){return e.reduce(((e,t)=>e+sb(t)),0)}],["y",["top","bottom"],function(e){return e.reduce(((e,t)=>e+lb(t)),0)}]];class vb{constructor(e,t){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;const n=ib(t),r=mb(n);this.rect={...e},this.width=e.width,this.height=e.height;for(const[e,t,i]of bb)for(const o of t)Object.defineProperty(this,o,{get:()=>{const t=i(n),a=r[e]-t;return this.rect[o]+a},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}}class yb{constructor(e){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach((e=>{var t;return null==(t=this.target)?void 0:t.removeEventListener(...e)}))},this.target=e}add(e,t,n){var r;null==(r=this.target)||r.addEventListener(e,t,n),this.listeners.push([e,t,n])}}function xb(e,t){const n=Math.abs(e.x),r=Math.abs(e.y);return"number"==typeof t?Math.sqrt(n**2+r**2)>t:"x"in t&&"y"in t?n>t.x&&r>t.y:"x"in t?n>t.x:"y"in t&&r>t.y}var wb,$b;function jb(e){e.preventDefault()}function Sb(e){e.stopPropagation()}!function(e){e.Click="click",e.DragStart="dragstart",e.Keydown="keydown",e.ContextMenu="contextmenu",e.Resize="resize",e.SelectionChange="selectionchange",e.VisibilityChange="visibilitychange"}(wb||(wb={})),function(e){e.Space="Space",e.Down="ArrowDown",e.Right="ArrowRight",e.Left="ArrowLeft",e.Up="ArrowUp",e.Esc="Escape",e.Enter="Enter"}($b||($b={}));const kb={start:[$b.Space,$b.Enter],cancel:[$b.Esc],end:[$b.Space,$b.Enter]},Cb=(e,t)=>{let{currentCoordinates:n}=t;switch(e.code){case $b.Right:return{...n,x:n.x+25};case $b.Left:return{...n,x:n.x-25};case $b.Down:return{...n,y:n.y+25};case $b.Up:return{...n,y:n.y-25}}};let Ob=class{constructor(e){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=e;const{event:{target:t}}=e;this.props=e,this.listeners=new yb(vm(t)),this.windowListeners=new yb(pm(t)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(wb.Resize,this.handleCancel),this.windowListeners.add(wb.VisibilityChange,this.handleCancel),setTimeout((()=>this.listeners.add(wb.Keydown,this.handleKeyDown)))}handleStart(){const{activeNode:e,onStart:t}=this.props,n=e.node.current;n&&function(e,t){if(void 0===t&&(t=nb),!e)return;const{top:n,left:r,bottom:i,right:o}=t(e);ob(e)&&(i<=0||o<=0||n>=window.innerHeight||r>=window.innerWidth)&&e.scrollIntoView({block:"center",inline:"center"})}(n),t(Ym)}handleKeyDown(e){if(Im(e)){const{active:t,context:n,options:r}=this.props,{keyboardCodes:i=kb,coordinateGetter:o=Cb,scrollBehavior:a="smooth"}=r,{code:s}=e;if(i.end.includes(s))return void this.handleEnd(e);if(i.cancel.includes(s))return void this.handleCancel(e);const{collisionRect:l}=n.current,c=l?{x:l.left,y:l.top}:Ym;this.referenceCoordinates||(this.referenceCoordinates=c);const d=o(e,{active:t,context:n.current,currentCoordinates:c});if(d){const t=Dm(d,c),r={x:0,y:0},{scrollableAncestors:i}=n.current;for(const n of i){const i=e.code,{isTop:o,isRight:s,isLeft:l,isBottom:c,maxScroll:u,minScroll:f}=fb(n),h=gb(n),p={x:Math.min(i===$b.Right?h.right-h.width/2:h.right,Math.max(i===$b.Right?h.left:h.left+h.width/2,d.x)),y:Math.min(i===$b.Down?h.bottom-h.height/2:h.bottom,Math.max(i===$b.Down?h.top:h.top+h.height/2,d.y))},g=i===$b.Right&&!s||i===$b.Left&&!l,m=i===$b.Down&&!c||i===$b.Up&&!o;if(g&&p.x!==d.x){const e=n.scrollLeft+t.x,o=i===$b.Right&&e<=u.x||i===$b.Left&&e>=f.x;if(o&&!t.y)return void n.scrollTo({left:e,behavior:a});r.x=o?n.scrollLeft-e:i===$b.Right?n.scrollLeft-u.x:n.scrollLeft-f.x,r.x&&n.scrollBy({left:-r.x,behavior:a});break}if(m&&p.y!==d.y){const e=n.scrollTop+t.y,o=i===$b.Down&&e<=u.y||i===$b.Up&&e>=f.y;if(o&&!t.x)return void n.scrollTo({top:e,behavior:a});r.y=o?n.scrollTop-e:i===$b.Down?n.scrollTop-u.y:n.scrollTop-f.y,r.y&&n.scrollBy({top:-r.y,behavior:a});break}}this.handleMove(e,Tm(Dm(d,this.referenceCoordinates),r))}}}handleMove(e,t){const{onMove:n}=this.props;e.preventDefault(),n(t)}handleEnd(e){const{onEnd:t}=this.props;e.preventDefault(),this.detach(),t()}handleCancel(e){const{onCancel:t}=this.props;e.preventDefault(),this.detach(),t()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}};function Tb(e){return Boolean(e&&"distance"in e)}function Db(e){return Boolean(e&&"delay"in e)}Ob.activators=[{eventName:"onKeyDown",handler:(e,t,n)=>{let{keyboardCodes:r=kb,onActivation:i}=t,{active:o}=n;const{code:a}=e.nativeEvent;if(r.start.includes(a)){const t=o.activatorNode.current;return(!t||e.target===t)&&(e.preventDefault(),null==i||i({event:e.nativeEvent}),!0)}return!1}}];class Ib{constructor(e,t,n){var r;void 0===n&&(n=function(e){const{EventTarget:t}=pm(e);return e instanceof t?e:vm(e)}(e.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=e,this.events=t;const{event:i}=e,{target:o}=i;this.props=e,this.events=t,this.document=vm(o),this.documentListeners=new yb(this.document),this.listeners=new yb(n),this.windowListeners=new yb(pm(o)),this.initialCoordinates=null!=(r=Em(i))?r:Ym,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){const{events:e,props:{options:{activationConstraint:t,bypassActivationConstraint:n}}}=this;if(this.listeners.add(e.move.name,this.handleMove,{passive:!1}),this.listeners.add(e.end.name,this.handleEnd),this.windowListeners.add(wb.Resize,this.handleCancel),this.windowListeners.add(wb.DragStart,jb),this.windowListeners.add(wb.VisibilityChange,this.handleCancel),this.windowListeners.add(wb.ContextMenu,jb),this.documentListeners.add(wb.Keydown,this.handleKeydown),t){if(null!=n&&n({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(Db(t))return void(this.timeoutId=setTimeout(this.handleStart,t.delay));if(Tb(t))return}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),null!==this.timeoutId&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handleStart(){const{initialCoordinates:e}=this,{onStart:t}=this.props;e&&(this.activated=!0,this.documentListeners.add(wb.Click,Sb,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(wb.SelectionChange,this.removeTextSelection),t(e))}handleMove(e){var t;const{activated:n,initialCoordinates:r,props:i}=this,{onMove:o,options:{activationConstraint:a}}=i;if(!r)return;const s=null!=(t=Em(e))?t:Ym,l=Dm(r,s);if(!n&&a){if(Tb(a)){if(null!=a.tolerance&&xb(l,a.tolerance))return this.handleCancel();if(xb(l,a.distance))return this.handleStart()}return Db(a)&&xb(l,a.tolerance)?this.handleCancel():void 0}e.cancelable&&e.preventDefault(),o(s)}handleEnd(){const{onEnd:e}=this.props;this.detach(),e()}handleCancel(){const{onCancel:e}=this.props;this.detach(),e()}handleKeydown(e){e.code===$b.Esc&&this.handleCancel()}removeTextSelection(){var e;null==(e=this.document.getSelection())||e.removeAllRanges()}}const Eb={move:{name:"pointermove"},end:{name:"pointerup"}};class _b extends Ib{constructor(e){const{event:t}=e,n=vm(t.target);super(e,Eb,n)}}_b.activators=[{eventName:"onPointerDown",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;return!(!n.isPrimary||0!==n.button)&&(null==r||r({event:n}),!0)}}];const Mb={move:{name:"mousemove"},end:{name:"mouseup"}};var Rb;!function(e){e[e.RightClick=2]="RightClick"}(Rb||(Rb={}));let Ab=class extends Ib{constructor(e){super(e,Mb,vm(e.event.target))}};Ab.activators=[{eventName:"onMouseDown",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;return n.button!==Rb.RightClick&&(null==r||r({event:n}),!0)}}];const Nb={move:{name:"touchmove"},end:{name:"touchend"}};class Bb extends Ib{constructor(e){super(e,Nb)}static setup(){return window.addEventListener(Nb.move.name,e,{capture:!1,passive:!1}),function(){window.removeEventListener(Nb.move.name,e)};function e(){}}}var Fb,Lb;function Pb(e){let{acceleration:n,activator:r=Fb.Pointer,canScroll:i,draggingRect:o,enabled:a,interval:s=5,order:l=Lb.TreeOrder,pointerCoordinates:c,scrollableAncestors:d,scrollableAncestorRects:u,delta:f,threshold:h}=e;const p=function(e){let{delta:t,disabled:n}=e;const r=Sm(t);return $m((e=>{if(n||!r||!e)return zb;const i={x:Math.sign(t.x-r.x),y:Math.sign(t.y-r.y)};return{x:{[db.Backward]:e.x[db.Backward]||-1===i.x,[db.Forward]:e.x[db.Forward]||1===i.x},y:{[db.Backward]:e.y[db.Backward]||-1===i.y,[db.Forward]:e.y[db.Forward]||1===i.y}}}),[n,t,r])}({delta:f,disabled:!a}),[g,m]=function(){const e=t.useRef(null);return[t.useCallback(((t,n)=>{e.current=setInterval(t,n)}),[]),t.useCallback((()=>{null!==e.current&&(clearInterval(e.current),e.current=null)}),[])]}(),b=t.useRef({x:0,y:0}),v=t.useRef({x:0,y:0}),y=t.useMemo((()=>{switch(r){case Fb.Pointer:return c?{top:c.y,bottom:c.y,left:c.x,right:c.x}:null;case Fb.DraggableRect:return o}}),[r,o,c]),x=t.useRef(null),w=t.useCallback((()=>{const e=x.current;if(!e)return;const t=b.current.x*v.current.x,n=b.current.y*v.current.y;e.scrollBy(t,n)}),[]),$=t.useMemo((()=>l===Lb.TreeOrder?[...d].reverse():d),[l,d]);t.useEffect((()=>{if(a&&d.length&&y){for(const e of $){if(!1===(null==i?void 0:i(e)))continue;const t=d.indexOf(e),r=u[t];if(!r)continue;const{direction:o,speed:a}=pb(e,r,y,n,h);for(const e of["x","y"])p[e][o[e]]||(a[e]=0,o[e]=0);if(a.x>0||a.y>0)return m(),x.current=e,g(w,s),b.current=a,void(v.current=o)}b.current={x:0,y:0},v.current={x:0,y:0},m()}else m()}),[n,w,i,m,a,s,JSON.stringify(y),JSON.stringify(p),g,d,$,u,JSON.stringify(h)])}Bb.activators=[{eventName:"onTouchStart",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;const{touches:i}=n;return!(i.length>1)&&(null==r||r({event:n}),!0)}}],function(e){e[e.Pointer=0]="Pointer",e[e.DraggableRect=1]="DraggableRect"}(Fb||(Fb={})),function(e){e[e.TreeOrder=0]="TreeOrder",e[e.ReversedTreeOrder=1]="ReversedTreeOrder"}(Lb||(Lb={}));const zb={x:{[db.Backward]:!1,[db.Forward]:!1},y:{[db.Backward]:!1,[db.Forward]:!1}};var Hb,Wb;!function(e){e[e.Always=0]="Always",e[e.BeforeDragging=1]="BeforeDragging",e[e.WhileDragging=2]="WhileDragging"}(Hb||(Hb={})),function(e){e.Optimized="optimized"}(Wb||(Wb={}));const Vb=new Map;function Yb(e,t){return $m((n=>e?n||("function"==typeof t?t(e):e):null),[t,e])}function Ub(e){let{callback:n,disabled:r}=e;const i=xm(n),o=t.useMemo((()=>{if(r||"undefined"==typeof window||void 0===window.ResizeObserver)return;const{ResizeObserver:e}=window;return new e(i)}),[r]);return t.useEffect((()=>()=>null==o?void 0:o.disconnect()),[o]),o}function Kb(e){return new vb(nb(e),e)}function qb(e,n,r){void 0===n&&(n=Kb);const[i,o]=t.useReducer((function(t){if(!e)return null;var i;if(!1===e.isConnected)return null!=(i=null!=t?t:r)?i:null;const o=n(e);if(JSON.stringify(t)===JSON.stringify(o))return t;return o}),null),a=function(e){let{callback:n,disabled:r}=e;const i=xm(n),o=t.useMemo((()=>{if(r||"undefined"==typeof window||void 0===window.MutationObserver)return;const{MutationObserver:e}=window;return new e(i)}),[i,r]);return t.useEffect((()=>()=>null==o?void 0:o.disconnect()),[o]),o}({callback(t){if(e)for(const n of t){const{type:t,target:r}=n;if("childList"===t&&r instanceof HTMLElement&&r.contains(e)){o();break}}}}),s=Ub({callback:o});return ym((()=>{o(),e?(null==s||s.observe(e),null==a||a.observe(document.body,{childList:!0,subtree:!0})):(null==s||s.disconnect(),null==a||a.disconnect())}),[e]),i}const Xb=[];function Gb(e,n){void 0===n&&(n=[]);const r=t.useRef(null);return t.useEffect((()=>{r.current=null}),n),t.useEffect((()=>{const t=e!==Ym;t&&!r.current&&(r.current=e),!t&&r.current&&(r.current=null)}),[e]),r.current?Dm(e,r.current):Ym}function Zb(e){return t.useMemo((()=>e?function(e){const t=e.innerWidth,n=e.innerHeight;return{top:0,left:0,right:t,bottom:n,width:t,height:n}}(e):null),[e])}const Qb=[];function Jb(e){let{measure:n}=e;const[r,i]=t.useState(null),o=t.useCallback((e=>{for(const{target:t}of e)if(mm(t)){i((e=>{const r=n(t);return e?{...e,width:r.width,height:r.height}:r}));break}}),[n]),a=Ub({callback:o}),s=t.useCallback((e=>{const t=function(e){if(!e)return null;if(e.children.length>1)return e;const t=e.children[0];return mm(t)?t:e}(e);null==a||a.disconnect(),t&&(null==a||a.observe(t)),i(t?n(t):null)}),[n,a]),[l,c]=jm(s);return t.useMemo((()=>({nodeRef:l,rect:r,setRef:c})),[r,l,c])}const ev=[{sensor:_b,options:{}},{sensor:Ob,options:{}}],tv={current:{}},nv={draggable:{measure:rb},droppable:{measure:rb,strategy:Hb.WhileDragging,frequency:Wb.Optimized},dragOverlay:{measure:nb}};class rv extends Map{get(e){var t;return null!=e&&null!=(t=super.get(e))?t:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter((e=>{let{disabled:t}=e;return!t}))}getNodeFor(e){var t,n;return null!=(t=null==(n=this.get(e))?void 0:n.node.current)?t:void 0}}const iv={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new rv,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:Wm},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:nv,measureDroppableContainers:Wm,windowRect:null,measuringScheduled:!1},ov={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:Wm,draggableNodes:new Map,over:null,measureDroppableContainers:Wm},av=t.createContext(ov),sv=t.createContext(iv);function lv(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new rv}}}function cv(e,t){switch(t.type){case Hm.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case Hm.DragMove:return e.draggable.active?{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}}:e;case Hm.DragEnd:case Hm.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case Hm.RegisterDroppable:{const{element:n}=t,{id:r}=n,i=new rv(e.droppable.containers);return i.set(r,n),{...e,droppable:{...e.droppable,containers:i}}}case Hm.SetDroppableDisabled:{const{id:n,key:r,disabled:i}=t,o=e.droppable.containers.get(n);if(!o||r!==o.key)return e;const a=new rv(e.droppable.containers);return a.set(n,{...o,disabled:i}),{...e,droppable:{...e.droppable,containers:a}}}case Hm.UnregisterDroppable:{const{id:n,key:r}=t,i=e.droppable.containers.get(n);if(!i||r!==i.key)return e;const o=new rv(e.droppable.containers);return o.delete(n),{...e,droppable:{...e.droppable,containers:o}}}default:return e}}function dv(e){let{disabled:n}=e;const{active:r,activatorEvent:i,draggableNodes:o}=t.useContext(av),a=Sm(i),s=Sm(null==r?void 0:r.id);return t.useEffect((()=>{if(!n&&!i&&a&&null!=s){if(!Im(a))return;if(document.activeElement===a.target)return;const e=o.get(s);if(!e)return;const{activatorNode:t,node:n}=e;if(!t.current&&!n.current)return;requestAnimationFrame((()=>{for(const e of[t.current,n.current]){if(!e)continue;const t=Rm(e);if(t){t.focus();break}}}))}}),[i,n,o,s,a]),null}const uv=t.createContext({...Ym,scaleX:1,scaleY:1});var fv;!function(e){e[e.Uninitialized=0]="Uninitialized",e[e.Initializing=1]="Initializing",e[e.Initialized=2]="Initialized"}(fv||(fv={}));const hv=t.memo((function(e){var r,i,o,a;let{id:s,accessibility:l,autoScroll:c=!0,children:d,sensors:u=ev,collisionDetection:f=Zm,measuring:h,modifiers:p,...g}=e;const m=t.useReducer(cv,void 0,lv),[b,v]=m,[y,x]=function(){const[e]=t.useState((()=>new Set)),n=t.useCallback((t=>(e.add(t),()=>e.delete(t))),[e]);return[t.useCallback((t=>{let{type:n,event:r}=t;e.forEach((e=>{var t;return null==(t=e[n])?void 0:t.call(e,r)}))}),[e]),n]}(),[w,$]=t.useState(fv.Uninitialized),j=w===fv.Initialized,{draggable:{active:S,nodes:k,translate:C},droppable:{containers:O}}=b,T=S?k.get(S):null,D=t.useRef({initial:null,translated:null}),I=t.useMemo((()=>{var e;return null!=S?{id:S,data:null!=(e=null==T?void 0:T.data)?e:tv,rect:D}:null}),[S,T]),E=t.useRef(null),[_,M]=t.useState(null),[R,A]=t.useState(null),N=wm(g,Object.values(g)),B=Cm("DndDescribedBy",s),F=t.useMemo((()=>O.getEnabled()),[O]),L=function(e){return t.useMemo((()=>({draggable:{...nv.draggable,...null==e?void 0:e.draggable},droppable:{...nv.droppable,...null==e?void 0:e.droppable},dragOverlay:{...nv.dragOverlay,...null==e?void 0:e.dragOverlay}})),[null==e?void 0:e.draggable,null==e?void 0:e.droppable,null==e?void 0:e.dragOverlay])}(h),{droppableRects:P,measureDroppableContainers:z,measuringScheduled:H}=function(e,n){let{dragging:r,dependencies:i,config:o}=n;const[a,s]=t.useState(null),{frequency:l,measure:c,strategy:d}=o,u=t.useRef(e),f=function(){switch(d){case Hb.Always:return!1;case Hb.BeforeDragging:return r;default:return!r}}(),h=wm(f),p=t.useCallback((function(e){void 0===e&&(e=[]),h.current||s((t=>null===t?e:t.concat(e.filter((e=>!t.includes(e))))))}),[h]),g=t.useRef(null),m=$m((t=>{if(f&&!r)return Vb;if(!t||t===Vb||u.current!==e||null!=a){const t=new Map;for(let n of e){if(!n)continue;if(a&&a.length>0&&!a.includes(n.id)&&n.rect.current){t.set(n.id,n.rect.current);continue}const e=n.node.current,r=e?new vb(c(e),e):null;n.rect.current=r,r&&t.set(n.id,r)}return t}return t}),[e,a,r,f,c]);return t.useEffect((()=>{u.current=e}),[e]),t.useEffect((()=>{f||p()}),[r,f]),t.useEffect((()=>{a&&a.length>0&&s(null)}),[JSON.stringify(a)]),t.useEffect((()=>{f||"number"!=typeof l||null!==g.current||(g.current=setTimeout((()=>{p(),g.current=null}),l))}),[l,f,p,...i]),{droppableRects:m,measureDroppableContainers:p,measuringScheduled:null!=a}}(F,{dragging:j,dependencies:[C.x,C.y],config:L.droppable}),W=function(e,t){const n=null!==t?e.get(t):void 0,r=n?n.node.current:null;return $m((e=>{var n;return null===t?null:null!=(n=null!=r?r:e)?n:null}),[r,t])}(k,S),V=t.useMemo((()=>R?Em(R):null),[R]),U=function(){const e=!1===(null==_?void 0:_.autoScrollEnabled),t="object"==typeof c?!1===c.enabled:!1===c,n=j&&!e&&!t;if("object"==typeof c)return{...c,enabled:n};return{enabled:n}}(),K=function(e,t){return Yb(e,t)}(W,L.draggable.measure);!function(e){let{activeNode:n,measure:r,initialRect:i,config:o=!0}=e;const a=t.useRef(!1),{x:s,y:l}="boolean"==typeof o?{x:o,y:o}:o;ym((()=>{if(!s&&!l||!n)return void(a.current=!1);if(a.current||!i)return;const e=null==n?void 0:n.node.current;if(!e||!1===e.isConnected)return;const t=Qm(r(e),i);if(s||(t.x=0),l||(t.y=0),a.current=!0,Math.abs(t.x)>0||Math.abs(t.y)>0){const n=ob(e);n&&n.scrollBy({top:t.y,left:t.x})}}),[n,s,l,i,r])}({activeNode:S?k.get(S):null,config:U.layoutShiftCompensation,initialRect:K,measure:L.draggable.measure});const q=qb(W,L.draggable.measure,K),X=qb(W?W.parentElement:null),G=t.useRef({activatorEvent:null,active:null,activeNode:W,collisionRect:null,collisions:null,droppableRects:P,draggableNodes:k,draggingNode:null,draggingNodeRect:null,droppableContainers:O,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),Z=O.getNodeFor(null==(r=G.current.over)?void 0:r.id),Q=Jb({measure:L.dragOverlay.measure}),J=null!=(i=Q.nodeRef.current)?i:W,ee=j?null!=(o=Q.rect)?o:q:null,te=Boolean(Q.nodeRef.current&&Q.rect),ne=Qm(re=te?null:q,Yb(re));var re;const ie=Zb(J?pm(J):null),oe=function(e){const n=t.useRef(e),r=$m((t=>e?t&&t!==Xb&&e&&n.current&&e.parentNode===n.current.parentNode?t:ib(e):Xb),[e]);return t.useEffect((()=>{n.current=e}),[e]),r}(j?null!=Z?Z:W:null),ae=function(e,n){void 0===n&&(n=nb);const[r]=e,i=Zb(r?pm(r):null),[o,a]=t.useReducer((function(){return e.length?e.map((e=>ub(e)?i:new vb(n(e),e))):Qb}),Qb),s=Ub({callback:a});return e.length>0&&o===Qb&&a(),ym((()=>{e.length?e.forEach((e=>null==s?void 0:s.observe(e))):(null==s||s.disconnect(),a())}),[e]),o}(oe),se=function(e,t){let{transform:n,...r}=t;return null!=e&&e.length?e.reduce(((e,t)=>t({transform:e,...r})),n):n}(p,{transform:{x:C.x-ne.x,y:C.y-ne.y,scaleX:1,scaleY:1},activatorEvent:R,active:I,activeNodeRect:q,containerNodeRect:X,draggingNodeRect:ee,over:G.current.over,overlayNodeRect:Q.rect,scrollableAncestors:oe,scrollableAncestorRects:ae,windowRect:ie}),le=V?Tm(V,C):null,ce=function(e){const[n,r]=t.useState(null),i=t.useRef(e),o=t.useCallback((e=>{const t=ab(e.target);t&&r((e=>e?(e.set(t,cb(t)),new Map(e)):null))}),[]);return t.useEffect((()=>{const t=i.current;if(e!==t){n(t);const a=e.map((e=>{const t=ab(e);return t?(t.addEventListener("scroll",o,{passive:!0}),[t,cb(t)]):null})).filter((e=>null!=e));r(a.length?new Map(a):null),i.current=e}return()=>{n(e),n(t)};function n(e){e.forEach((e=>{const t=ab(e);null==t||t.removeEventListener("scroll",o)}))}}),[o,e]),t.useMemo((()=>e.length?n?Array.from(n.values()).reduce(((e,t)=>Tm(e,t)),Ym):mb(e):Ym),[e,n])}(oe),de=Gb(ce),ue=Gb(ce,[q]),fe=Tm(se,de),he=ee?eb(ee,se):null,pe=I&&he?f({active:I,collisionRect:he,droppableRects:P,droppableContainers:F,pointerCoordinates:le}):null,ge=Xm(pe,"id"),[me,be]=t.useState(null),ve=function(e,t,n){return{...e,scaleX:t&&n?t.width/n.width:1,scaleY:t&&n?t.height/n.height:1}}(te?se:Tm(se,ue),null!=(a=null==me?void 0:me.rect)?a:null,q),ye=t.useCallback(((e,t)=>{let{sensor:r,options:i}=t;if(null==E.current)return;const o=k.get(E.current);if(!o)return;const a=e.nativeEvent,s=new r({active:E.current,activeNode:o,event:a,options:i,context:G,onStart(e){const t=E.current;if(null==t)return;const r=k.get(t);if(!r)return;const{onDragStart:i}=N.current,o={active:{id:t,data:r.data,rect:D}};n.unstable_batchedUpdates((()=>{null==i||i(o),$(fv.Initializing),v({type:Hm.DragStart,initialCoordinates:e,active:t}),y({type:"onDragStart",event:o})}))},onMove(e){v({type:Hm.DragMove,coordinates:e})},onEnd:l(Hm.DragEnd),onCancel:l(Hm.DragCancel)});function l(e){return async function(){const{active:t,collisions:r,over:i,scrollAdjustedTranslate:o}=G.current;let s=null;if(t&&o){const{cancelDrop:n}=N.current;if(s={activatorEvent:a,active:t,collisions:r,delta:o,over:i},e===Hm.DragEnd&&"function"==typeof n){await Promise.resolve(n(s))&&(e=Hm.DragCancel)}}E.current=null,n.unstable_batchedUpdates((()=>{v({type:e}),$(fv.Uninitialized),be(null),M(null),A(null);const t=e===Hm.DragEnd?"onDragEnd":"onDragCancel";if(s){const e=N.current[t];null==e||e(s),y({type:t,event:s})}}))}}n.unstable_batchedUpdates((()=>{M(s),A(e.nativeEvent)}))}),[k]),xe=t.useCallback(((e,t)=>(n,r)=>{const i=n.nativeEvent,o=k.get(r);if(null!==E.current||!o||i.dndKit||i.defaultPrevented)return;const a={active:o};!0===e(n,t.options,a)&&(i.dndKit={capturedBy:t.sensor},E.current=r,ye(n,t))}),[k,ye]),we=function(e,n){return t.useMemo((()=>e.reduce(((e,t)=>{const{sensor:r}=t;return[...e,...r.activators.map((e=>({eventName:e.eventName,handler:n(e.handler,t)})))]}),[])),[e,n])}(u,xe);!function(e){t.useEffect((()=>{if(!um)return;const t=e.map((e=>{let{sensor:t}=e;return null==t.setup?void 0:t.setup()}));return()=>{for(const e of t)null==e||e()}}),e.map((e=>{let{sensor:t}=e;return t})))}(u),ym((()=>{q&&w===fv.Initializing&&$(fv.Initialized)}),[q,w]),t.useEffect((()=>{const{onDragMove:e}=N.current,{active:t,activatorEvent:r,collisions:i,over:o}=G.current;if(!t||!r)return;const a={active:t,activatorEvent:r,collisions:i,delta:{x:fe.x,y:fe.y},over:o};n.unstable_batchedUpdates((()=>{null==e||e(a),y({type:"onDragMove",event:a})}))}),[fe.x,fe.y]),t.useEffect((()=>{const{active:e,activatorEvent:t,collisions:r,droppableContainers:i,scrollAdjustedTranslate:o}=G.current;if(!e||null==E.current||!t||!o)return;const{onDragOver:a}=N.current,s=i.get(ge),l=s&&s.rect.current?{id:s.id,rect:s.rect.current,data:s.data,disabled:s.disabled}:null,c={active:e,activatorEvent:t,collisions:r,delta:{x:o.x,y:o.y},over:l};n.unstable_batchedUpdates((()=>{be(l),null==a||a(c),y({type:"onDragOver",event:c})}))}),[ge]),ym((()=>{G.current={activatorEvent:R,active:I,activeNode:W,collisionRect:he,collisions:pe,droppableRects:P,draggableNodes:k,draggingNode:J,draggingNodeRect:ee,droppableContainers:O,over:me,scrollableAncestors:oe,scrollAdjustedTranslate:fe},D.current={initial:ee,translated:he}}),[I,W,pe,he,k,J,ee,P,O,me,oe,fe]),Pb({...U,delta:C,draggingRect:he,pointerCoordinates:le,scrollableAncestors:oe,scrollableAncestorRects:ae});const $e=t.useMemo((()=>({active:I,activeNode:W,activeNodeRect:q,activatorEvent:R,collisions:pe,containerNodeRect:X,dragOverlay:Q,draggableNodes:k,droppableContainers:O,droppableRects:P,over:me,measureDroppableContainers:z,scrollableAncestors:oe,scrollableAncestorRects:ae,measuringConfiguration:L,measuringScheduled:H,windowRect:ie})),[I,W,q,R,pe,X,Q,k,O,P,me,z,oe,ae,L,H,ie]),je=t.useMemo((()=>({activatorEvent:R,activators:we,active:I,activeNodeRect:q,ariaDescribedById:{draggable:B},dispatch:v,draggableNodes:k,over:me,measureDroppableContainers:z})),[R,we,I,q,v,B,k,me,z]);return Y.default.createElement(Fm.Provider,{value:x},Y.default.createElement(av.Provider,{value:je},Y.default.createElement(sv.Provider,{value:$e},Y.default.createElement(uv.Provider,{value:ve},d)),Y.default.createElement(dv,{disabled:!1===(null==l?void 0:l.restoreFocus)})),Y.default.createElement(zm,{...l,hiddenTextDescribedById:B}))})),pv=t.createContext(null),gv="button",mv="Droppable";function bv(e){let{id:n,data:r,disabled:i=!1,attributes:o}=e;const a=Cm(mv),{activators:s,activatorEvent:l,active:c,activeNodeRect:d,ariaDescribedById:u,draggableNodes:f,over:h}=t.useContext(av),{role:p=gv,roleDescription:g="draggable",tabIndex:m=0}=null!=o?o:{},b=(null==c?void 0:c.id)===n,v=t.useContext(b?uv:pv),[y,x]=jm(),[w,$]=jm(),j=function(e,n){return t.useMemo((()=>e.reduce(((e,t)=>{let{eventName:r,handler:i}=t;return e[r]=e=>{i(e,n)},e}),{})),[e,n])}(s,n),S=wm(r);ym((()=>(f.set(n,{id:n,key:a,node:y,activatorNode:w,data:S}),()=>{const e=f.get(n);e&&e.key===a&&f.delete(n)})),[f,n]);return{active:c,activatorEvent:l,activeNodeRect:d,attributes:t.useMemo((()=>({role:p,tabIndex:m,"aria-disabled":i,"aria-pressed":!(!b||p!==gv)||void 0,"aria-roledescription":g,"aria-describedby":u.draggable})),[i,p,m,b,g,u.draggable]),isDragging:b,listeners:i?void 0:j,node:y,over:h,setNodeRef:x,setActivatorNodeRef:$,transform:v}}const vv="Droppable",yv={timeout:25};function xv(e,t,n){const r=e.slice();return r.splice(n<0?r.length+n:n,0,r.splice(t,1)[0]),r}function wv(e,t){return e.reduce(((e,n,r)=>{const i=t.get(n);return i&&(e[r]=i),e}),Array(e.length))}function $v(e){return null!==e&&e>=0}const jv=e=>{let{rects:t,activeIndex:n,overIndex:r,index:i}=e;const o=xv(t,r,n),a=t[i],s=o[i];return s&&a?{x:s.left-a.left,y:s.top-a.top,scaleX:s.width/a.width,scaleY:s.height/a.height}:null},Sv={scaleX:1,scaleY:1},kv=e=>{var t;let{activeIndex:n,activeNodeRect:r,index:i,rects:o,overIndex:a}=e;const s=null!=(t=o[n])?t:r;if(!s)return null;if(i===n){const e=o[a];return e?{x:0,y:n<a?e.top+e.height-(s.top+s.height):e.top-s.top,...Sv}:null}const l=function(e,t,n){const r=e[t],i=e[t-1],o=e[t+1];if(!r)return 0;if(n<t)return i?r.top-(i.top+i.height):o?o.top-(r.top+r.height):0;return o?o.top-(r.top+r.height):i?r.top-(i.top+i.height):0}(o,i,n);return i>n&&i<=a?{x:0,y:-s.height-l,...Sv}:i<n&&i>=a?{x:0,y:s.height+l,...Sv}:{x:0,y:0,...Sv}};const Cv="Sortable",Ov=Y.default.createContext({activeIndex:-1,containerId:Cv,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:jv,disabled:{draggable:!1,droppable:!1}});function Tv(e){let{children:n,id:r,items:i,strategy:o=jv,disabled:a=!1}=e;const{active:s,dragOverlay:l,droppableRects:c,over:d,measureDroppableContainers:u}=t.useContext(sv),f=Cm(Cv,r),h=Boolean(null!==l.rect),p=t.useMemo((()=>i.map((e=>"object"==typeof e&&"id"in e?e.id:e))),[i]),g=null!=s,m=s?p.indexOf(s.id):-1,b=d?p.indexOf(d.id):-1,v=t.useRef(p),y=!function(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}(p,v.current),x=-1!==b&&-1===m||y,w=function(e){return"boolean"==typeof e?{draggable:e,droppable:e}:e}(a);ym((()=>{y&&g&&u(p)}),[y,p,g,u]),t.useEffect((()=>{v.current=p}),[p]);const $=t.useMemo((()=>({activeIndex:m,containerId:f,disabled:w,disableTransforms:x,items:p,overIndex:b,useDragOverlay:h,sortedRects:wv(p,c),strategy:o})),[m,f,w.draggable,w.droppable,x,p,b,c,h,o]);return Y.default.createElement(Ov.Provider,{value:$},n)}const Dv=e=>{let{id:t,items:n,activeIndex:r,overIndex:i}=e;return xv(n,r,i).indexOf(t)},Iv=e=>{let{containerId:t,isSorting:n,wasDragging:r,index:i,items:o,newIndex:a,previousItems:s,previousContainerId:l,transition:c}=e;return!(!c||!r)&&((s===o||i!==a)&&(!!n||a!==i&&t===l))},Ev={duration:200,easing:"ease"},_v="transform",Mv=_m.Transition.toString({property:_v,duration:0,easing:"linear"}),Rv={roleDescription:"sortable"};function Av(e){let{animateLayoutChanges:n=Iv,attributes:r,disabled:i,data:o,getNewIndex:a=Dv,id:s,strategy:l,resizeObserverConfig:c,transition:d=Ev}=e;const{items:u,containerId:f,activeIndex:h,disabled:p,disableTransforms:g,sortedRects:m,overIndex:b,useDragOverlay:v,strategy:y}=t.useContext(Ov),x=function(e,t){var n,r;if("boolean"==typeof e)return{draggable:e,droppable:!1};return{draggable:null!=(n=null==e?void 0:e.draggable)?n:t.draggable,droppable:null!=(r=null==e?void 0:e.droppable)?r:t.droppable}}(i,p),w=u.indexOf(s),$=t.useMemo((()=>({sortable:{containerId:f,index:w,items:u},...o})),[f,o,w,u]),j=t.useMemo((()=>u.slice(u.indexOf(s))),[u,s]),{rect:S,node:k,isOver:C,setNodeRef:O}=function(e){let{data:n,disabled:r=!1,id:i,resizeObserverConfig:o}=e;const a=Cm(vv),{active:s,dispatch:l,over:c,measureDroppableContainers:d}=t.useContext(av),u=t.useRef({disabled:r}),f=t.useRef(!1),h=t.useRef(null),p=t.useRef(null),{disabled:g,updateMeasurementsFor:m,timeout:b}={...yv,...o},v=wm(null!=m?m:i),y=Ub({callback:t.useCallback((()=>{f.current?(null!=p.current&&clearTimeout(p.current),p.current=setTimeout((()=>{d(Array.isArray(v.current)?v.current:[v.current]),p.current=null}),b)):f.current=!0}),[b]),disabled:g||!s}),x=t.useCallback(((e,t)=>{y&&(t&&(y.unobserve(t),f.current=!1),e&&y.observe(e))}),[y]),[w,$]=jm(x),j=wm(n);return t.useEffect((()=>{y&&w.current&&(y.disconnect(),f.current=!1,y.observe(w.current))}),[w,y]),ym((()=>(l({type:Hm.RegisterDroppable,element:{id:i,key:a,disabled:r,node:w,rect:h,data:j}}),()=>l({type:Hm.UnregisterDroppable,key:a,id:i}))),[i]),t.useEffect((()=>{r!==u.current.disabled&&(l({type:Hm.SetDroppableDisabled,id:i,key:a,disabled:r}),u.current.disabled=r)}),[i,a,r,l]),{active:s,rect:h,isOver:(null==c?void 0:c.id)===i,node:w,over:c,setNodeRef:$}}({id:s,data:$,disabled:x.droppable,resizeObserverConfig:{updateMeasurementsFor:j,...c}}),{active:T,activatorEvent:D,activeNodeRect:I,attributes:E,setNodeRef:_,listeners:M,isDragging:R,over:A,setActivatorNodeRef:N,transform:B}=bv({id:s,data:$,attributes:{...Rv,...r},disabled:x.draggable}),F=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.useMemo((()=>e=>{n.forEach((t=>t(e)))}),n)}(O,_),L=Boolean(T),P=L&&!g&&$v(h)&&$v(b),z=!v&&R,H=z&&P?B:null,W=P?null!=H?H:(null!=l?l:y)({rects:m,activeNodeRect:I,activeIndex:h,overIndex:b,index:w}):null,V=$v(h)&&$v(b)?a({id:s,items:u,activeIndex:h,overIndex:b}):w,Y=null==T?void 0:T.id,U=t.useRef({activeId:Y,items:u,newIndex:V,containerId:f}),K=u!==U.current.items,q=n({active:T,containerId:f,isDragging:R,isSorting:L,id:s,index:w,items:u,newIndex:U.current.newIndex,previousItems:U.current.items,previousContainerId:U.current.containerId,transition:d,wasDragging:null!=U.current.activeId}),X=function(e){let{disabled:n,index:r,node:i,rect:o}=e;const[a,s]=t.useState(null),l=t.useRef(r);return ym((()=>{if(!n&&r!==l.current&&i.current){const e=o.current;if(e){const t=nb(i.current,{ignoreTransform:!0}),n={x:e.left-t.left,y:e.top-t.top,scaleX:e.width/t.width,scaleY:e.height/t.height};(n.x||n.y)&&s(n)}}r!==l.current&&(l.current=r)}),[n,r,i,o]),t.useEffect((()=>{a&&s(null)}),[a]),a}({disabled:!q,index:w,node:k,rect:S});return t.useEffect((()=>{L&&U.current.newIndex!==V&&(U.current.newIndex=V),f!==U.current.containerId&&(U.current.containerId=f),u!==U.current.items&&(U.current.items=u)}),[L,V,f,u]),t.useEffect((()=>{if(Y===U.current.activeId)return;if(Y&&!U.current.activeId)return void(U.current.activeId=Y);const e=setTimeout((()=>{U.current.activeId=Y}),50);return()=>clearTimeout(e)}),[Y]),{active:T,activeIndex:h,attributes:E,data:$,rect:S,index:w,newIndex:V,items:u,isOver:C,isSorting:L,isDragging:R,listeners:M,node:k,overIndex:b,over:A,setNodeRef:F,setActivatorNodeRef:N,setDroppableNodeRef:O,setDraggableNodeRef:_,transform:null!=X?X:W,transition:function(){if(X||K&&U.current.newIndex===w)return Mv;if(z&&!Im(D)||!d)return;if(L||q)return _m.Transition.toString({...d,property:_v});return}()}}function Nv(e){if(!e)return!1;const t=e.data.current;return!!(t&&"sortable"in t&&"object"==typeof t.sortable&&"containerId"in t.sortable&&"items"in t.sortable&&"index"in t.sortable)}const Bv=[$b.Down,$b.Right,$b.Up,$b.Left],Fv=(e,t)=>{let{context:{active:n,collisionRect:r,droppableRects:i,droppableContainers:o,over:a,scrollableAncestors:s}}=t;if(Bv.includes(e.code)){if(e.preventDefault(),!n||!r)return;const t=[];o.getEnabled().forEach((n=>{if(!n||null!=n&&n.disabled)return;const o=i.get(n.id);if(o)switch(e.code){case $b.Down:r.top<o.top&&t.push(n);break;case $b.Up:r.top>o.top&&t.push(n);break;case $b.Left:r.left>o.left&&t.push(n);break;case $b.Right:r.left<o.left&&t.push(n)}}));const l=(e=>{let{collisionRect:t,droppableRects:n,droppableContainers:r}=e;const i=qm(t),o=[];for(const e of r){const{id:t}=e,r=n.get(t);if(r){const n=qm(r),a=i.reduce(((e,t,r)=>{return e+(i=n[r],o=t,Math.sqrt(Math.pow(i.x-o.x,2)+Math.pow(i.y-o.y,2)));var i,o}),0),s=Number((a/4).toFixed(4));o.push({id:t,data:{droppableContainer:e,value:s}})}}return o.sort(Um)})({active:n,collisionRect:r,droppableRects:i,droppableContainers:t,pointerCoordinates:null});let c=Xm(l,"id");if(c===(null==a?void 0:a.id)&&l.length>1&&(c=l[1].id),null!=c){const e=o.get(n.id),t=o.get(c),a=t?i.get(t.id):null,l=null==t?void 0:t.node.current;if(l&&a&&e&&t){const n=ib(l).some(((e,t)=>s[t]!==e)),i=Lv(e,t),o=function(e,t){if(!Nv(e)||!Nv(t))return!1;if(!Lv(e,t))return!1;return e.data.current.sortable.index<t.data.current.sortable.index}(e,t),c=n||!i?{x:0,y:0}:{x:o?r.width-a.width:0,y:o?r.height-a.height:0},d={x:a.left,y:a.top};return c.x&&c.y?d:Dm(d,c)}}}};function Lv(e,t){return!(!Nv(e)||!Nv(t))&&e.data.current.sortable.containerId===t.data.current.sortable.containerId}class Pv extends Ab{}Pv.activators=[{eventName:"onMouseDown",handler:({nativeEvent:e})=>zv(e.target)}];function zv(e){let t=e;for(;t;){if(t.dataset&&t.dataset.noDnd)return!1;t=t.parentElement}return!0}(class extends Ob{}).activators=[{eventName:"onKeyDown",handler:({nativeEvent:e})=>zv(e.target)}];const Hv=K.default.div`
    max-width: 30rem;
    padding: 0 1rem;
    pointer-events: auto;
`,Wv=K.default(Ed)`
    color: ${ts.Neutral[1]};
    ${el({textSize:"BodySmall"})}

    ${is.MaxWidth.mobileL} {
        display: none;
    }
`,Vv=K.default(jh)`
    padding: 3.5rem 1.25rem 2.5rem;
`,Yv=K.default.div`
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }

    color: ${ts.Neutral[1]};
    ${el({textSize:"BodySmall"})}
`,Uv=t=>{var{children:n,visible:r,onMobileClose:i}=t,o=X(t,["children","visible","onMobileClose"]);const a=o["data-testid"]||"popover",s=Tl.useMediaQuery({maxWidth:ns.mobileL}),l=()=>{i&&i()},c=()=>"string"==typeof n?e.jsx(exports.Text.BodySmall,{children:n}):n;return e.jsxs(e.Fragment,{children:[r&&e.jsx(Hv,Object.assign({"data-testid":a},o,{children:e.jsx(Wv,{children:c()})})),s&&e.jsx(xh,Object.assign({show:r,onOverlayClick:l},{children:e.jsx(Vv,Object.assign({onClose:l},{children:e.jsx(Yv,{children:c()})}))}))]})},Kv=K.default.div`
    display: inline;
    width: fit-content;
    cursor: pointer;
    position: relative;
`,qv=n=>{var r,i,{children:o,popoverContent:a,trigger:s="click",position:l="top",zIndex:c,rootNode:d,customOffset:u,delay:f,onPopoverAppear:h,onPopoverDismiss:p}=n,m=X(n,["children","popoverContent","trigger","position","zIndex","rootNode","customOffset","delay","onPopoverAppear","onPopoverDismiss"]);const[b,v]=t.useState(!1),y=t.useRef(),x=t.useRef(),w=Tl.useMediaQuery({maxWidth:os.mobileL}),{refs:$,floatingStyles:j,context:S}=g.useFloating({open:b,placement:l,whileElementsMounted:g.autoUpdate,middleware:[g.offset(null!=u?u:16),g.flip(),g.shift({limiter:g.limitShift()})],onOpenChange:e=>{v(e),b!==e&&M(e)}}),k=gf(),C=w?"click":s,O=g.useClick(S,{ignoreMouse:"hover"===C}),T=g.useDismiss(S),D=g.useHover(S,{enabled:"hover"===C,delay:{open:null!==(r=null==f?void 0:f.open)&&void 0!==r?r:0,close:null!==(i=null==f?void 0:f.close)&&void 0!==i?i:500}}),{getReferenceProps:I,getFloatingProps:E}=g.useInteractions([O,T,D]),_=()=>{v(!1),M(!1)},M=e=>{e&&h&&h(),!e&&p&&p()};return e.jsxs(e.Fragment,{children:[e.jsx(Kv,Object.assign({ref:e=>{y.current=e,$.setReference(e)}},I({onClick:e=>{e.stopPropagation(),e.preventDefault()}}),m,{children:o})),b&&e.jsx(g.FloatingPortal,Object.assign({root:d},{children:e.jsx(g.FloatingFocusManager,Object.assign({context:S},{children:e.jsx("div",Object.assign({ref:e=>{x.current=e,$.setFloating(e)},style:Object.assign(Object.assign({},j),{outline:"none",zIndex:null!=c?c:k})},E(),{children:"function"==typeof a?a():e.jsx(Uv,Object.assign({visible:!0,onMobileClose:_},{children:a}))}))}))}))]})},Xv=e=>{switch(e){case"underline":return"text-decoration: underline 1px;";case"underline-dashed":return"text-decoration: underline dashed 1px;"}},Gv=K.default.span`
    color: ${ts.Primary};
    font-weight: 600;
    text-underline-position: under;

    ${({$defaultStyle:e})=>Xv(e)}

    &:hover,
    &:focus-visible {
        color: ${ts.Secondary};
        ${({$hoverStyle:e})=>Xv(e)}
    }

    svg {
        height: 1lh; // align vertically
        width: 1em; // scale icon with font size
        vertical-align: top;
    }
`,Zv=K.default.span`
    ${e=>!e.$standalone&&"margin-left: 0.25rem;"}
`,Qv=t=>{var{ariaLabel:n,content:r,icon:i,underlineStyle:o="default",underlineHoverStyle:a="default"}=t,s=X(t,["ariaLabel","content","icon","underlineStyle","underlineHoverStyle"]);const l=!!r;return e.jsx(qv,Object.assign({},s,{children:e.jsxs(Gv,Object.assign({role:"button","aria-haspopup":"dialog",tabIndex:0,$defaultStyle:o,$hoverStyle:a,"aria-label":null!=n?n:l?void 0:"More info"},{children:[r,i&&e.jsx(Zv,Object.assign({$standalone:!l},{children:i}))]}))}))};K.default.button`
    padding: 0.25rem 0.5rem 0.25rem 0.25rem;
    border: none;
    background: none;
    cursor: pointer;

    & > svg {
        vertical-align: text-bottom;
        height: 1rem;
        width: 1rem;
        color: ${ts.Primary};
    }
`;const Jv=K.default.div`
    padding-left: 0.25rem;
    display: inline;
`,ey=({addon:t,rootNode:n})=>{const{content:r,type:i,icon:o,id:a,zIndex:s,"data-testid":l}=t;return e.jsx(Jv,{children:e.jsx(Qv,{trigger:"click",id:a,"data-testid":l,popoverContent:r,rootNode:n,zIndex:s,icon:null!=o?o:e.jsx(c.ICircleFillIcon,{"data-testid":`${i}-icon`}),ariaLabel:"More info"})})},ty=K.default.label`
    ${ys.getTextStyle("H5","semibold")}
    color: ${ts.Neutral[2]};
    margin-bottom: 0.5rem;
    display: inline-block;

    a,
    span,
    p {
        ${ys.getTextStyle("H5","semibold")}
    }

    a {
        color: ${ts.Primary};
        text-decoration: none;

        :hover,
        :active,
        :focus {
            color: ${ts.Secondary};

            svg {
                color: ${ts.Secondary};
            }
        }
    }
`,ny=K.default(exports.Text.H6)`
    color: ${ts.Validation.Red.Text};
    margin-top: 0.5rem;
    margin-bottom: 0;
    outline: none;
`,ry=K.default(exports.Text.BodySmall)`
    && {
        color: ${ts.Neutral[3]};
        ${ys.getFontFamily("BodySmall","regular")}
    }
`,iy=t=>{var{children:n,addon:r,subtitle:i,"data-testid":o}=t,a=X(t,["children","addon","subtitle","data-testid"]);return e.jsxs(ty,Object.assign({},a,{children:[n,r&&r.type&&("popover"===r.type?e.jsx(ey,{addon:r}):null),"string"==typeof i?e.jsx(ry,Object.assign({as:"span","data-testid":o?`${o}-subtitle`:"subtitle"},a,{children:i})):i]}))},oy=t=>e.jsx(ny,Object.assign({weight:"semibold"},t)),ay=Y.default.forwardRef(((t,n)=>{const{children:r,"data-testid":i="container",type:o="flex",stretch:a=!1}=t,s=X(t,["children","data-testid","type","stretch"]);return e.jsx(sy,Object.assign({ref:n,"data-testid":i,$type:o,$stretch:a},s,{children:r}))})),sy=K.default.div`
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

                ${is.MaxWidth.desktopM} {
                    max-width: 1140px;
                }
            `}
    ${is.MaxWidth.tablet} {
        max-width: 720px;
    }
    ${is.MaxWidth.mobileL} {
        width: 100%;
        padding: 0;
        max-width: unset;
    }

    ${e=>{switch(e.$type){case"grid":return i.css`
                    column-gap: 2rem;
                    display: grid;
                    grid-template-columns: repeat(12, minmax(0, 1fr));

                    ${is.MaxWidth.tablet} {
                        column-gap: 1.5rem;
                        grid-template-columns: repeat(8, minmax(0, 1fr));
                    }

                    ${is.MaxWidth.mobileL} {
                        column-gap: 1rem;
                        grid-template-columns: repeat(4, minmax(0, 1fr));
                    }
                `;case"flex-column":return i.css`
                    display: flex;
                    flex-direction: column;
                `;default:return i.css`
                    display: flex;
                `}}}
`,ly=Y.default.forwardRef(((t,n)=>{const{children:r,"data-testid":i="section",stretch:o=!1}=t,a=X(t,["children","data-testid","stretch"]);return e.jsx(cy,Object.assign({ref:n,"data-testid":i,$stretch:o},a,{children:r}))})),cy=K.default.section`
    display: block;
    position: relative;
    ${e=>e.$stretch?i.css`
                ${is.MaxWidth.tablet} {
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
`,dy=Y.default.forwardRef(((t,n)=>{const{children:r,"data-testid":i="content",className:o,type:a="flex",stretch:s=!1}=t,l=X(t,["children","data-testid","className","type","stretch"]);return e.jsx(ly,Object.assign({ref:n,"data-testid":i,className:o,stretch:s},l,{children:e.jsx(ay,Object.assign({"data-testid":`${i}-container`,type:a,"data-id":"container",stretch:s},{children:r}))}))})),uy={Section:ly,Container:ay,Content:dy,ColDiv:eh},fy=i.css`
    display: flex;
    flex-direction: column;

    &:not(:last-child) {
        margin-bottom: 2rem;
    }
`,hy=K.default.div`
    ${fy}
`,py=K.default(uy.ColDiv)`
    ${fy}
`,gy=({label:n,errorMessage:r,id:i,disabled:o,children:a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,"data-error-testid":u})=>{const f=!s&&(l||c||d)?"grid":s||"flex",h=()=>u||(i?`${i}-error-message`:"error-message"),p=()=>!!r;const g="grid"===f?py:hy;return e.jsxs(g,Object.assign({},(e=>{switch(e){case"grid":return{mobileCols:l,tabletCols:c,desktopCols:d};case"flex":return}})(f),{children:[n&&("string"==typeof n?e.jsx(iy,Object.assign({htmlFor:`${i}-base`,"data-testid":i?`${i}-label`:"form-label",disabled:o},{children:n})):e.jsx(iy,Object.assign({htmlFor:`${i}-base`,"data-testid":i?`${i}-label`:"form-label",disabled:o},n))),(()=>{const e={"aria-invalid":p(),"aria-describedby":p()&&h()};return t.Children.map(a,(n=>t.cloneElement(n,e)))})(),r&&e.jsx(ny,Object.assign({id:h(),weight:"semibold",tabIndex:0,"data-testid":h()},{children:r}))]}))};function my(e,t){return my=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},my(e,t)}function by(e){return e&&e.stopPropagation&&e.stopPropagation(),e&&e.preventDefault&&e.preventDefault(),!1}function vy(e){return null==e?[]:Array.isArray(e)?e.slice():[e]}function yy(e){return null!==e&&1===e.length?e[0]:e.slice()}function xy(e){Object.keys(e).forEach((t=>{"undefined"!=typeof document&&document.addEventListener(t,e[t],!1)}))}function wy(e,t){return $y(function(e,t){let n=e;return n<=t.min&&(n=t.min),n>=t.max&&(n=t.max),n}(e,t),t)}function $y(e,t){const n=(e-t.min)%t.step;let r=e-n;return 2*Math.abs(n)>=t.step&&(r+=n>0?t.step:-t.step),parseFloat(r.toFixed(5))}let jy=function(e){function t(t){var n;(n=e.call(this,t)||this).onKeyUp=()=>{n.onEnd()},n.onMouseUp=()=>{n.onEnd(n.getMouseEventMap())},n.onTouchEnd=e=>{e.preventDefault(),n.onEnd(n.getTouchEventMap())},n.onBlur=()=>{n.setState({index:-1},n.onEnd(n.getKeyDownEventMap()))},n.onMouseMove=e=>{n.setState({pending:!0});const t=n.getMousePosition(e),r=n.getDiffPosition(t[0]),i=n.getValueFromPosition(r);n.move(i)},n.onTouchMove=e=>{if(e.touches.length>1)return;n.setState({pending:!0});const t=n.getTouchPosition(e);if(void 0===n.isScrolling){const e=t[0]-n.startPosition[0],r=t[1]-n.startPosition[1];n.isScrolling=Math.abs(r)>Math.abs(e)}if(n.isScrolling)return void n.setState({index:-1});const r=n.getDiffPosition(t[0]),i=n.getValueFromPosition(r);n.move(i)},n.onKeyDown=e=>{if(!(e.ctrlKey||e.shiftKey||e.altKey||e.metaKey))switch(n.setState({pending:!0}),e.key){case"ArrowLeft":case"ArrowDown":case"Left":case"Down":e.preventDefault(),n.moveDownByStep();break;case"ArrowRight":case"ArrowUp":case"Right":case"Up":e.preventDefault(),n.moveUpByStep();break;case"Home":e.preventDefault(),n.move(n.props.min);break;case"End":e.preventDefault(),n.move(n.props.max);break;case"PageDown":e.preventDefault(),n.moveDownByStep(n.props.pageFn(n.props.step));break;case"PageUp":e.preventDefault(),n.moveUpByStep(n.props.pageFn(n.props.step))}},n.onSliderMouseDown=e=>{if(!n.props.disabled&&2!==e.button){if(n.setState({pending:!0}),!n.props.snapDragDisabled){const t=n.getMousePosition(e);n.forceValueFromPosition(t[0],(e=>{n.start(e,t[0]),xy(n.getMouseEventMap())}))}by(e)}},n.onSliderClick=e=>{if(!n.props.disabled&&n.props.onSliderClick&&!n.hasMoved){const t=n.getMousePosition(e),r=wy(n.calcValue(n.calcOffsetFromPosition(t[0])),n.props);n.props.onSliderClick(r)}},n.createOnKeyDown=e=>t=>{n.props.disabled||(n.start(e),xy(n.getKeyDownEventMap()),by(t))},n.createOnMouseDown=e=>t=>{if(n.props.disabled||2===t.button)return;n.setState({pending:!0});const r=n.getMousePosition(t);n.start(e,r[0]),xy(n.getMouseEventMap()),by(t)},n.createOnTouchStart=e=>t=>{if(n.props.disabled||t.touches.length>1)return;n.setState({pending:!0});const r=n.getTouchPosition(t);n.startPosition=r,n.isScrolling=void 0,n.start(e,r[0]),xy(n.getTouchEventMap()),function(e){e.stopPropagation&&e.stopPropagation()}(t)},n.handleResize=()=>{const e=window.setTimeout((()=>{n.pendingResizeTimeouts.shift(),n.resize()}),0);n.pendingResizeTimeouts.push(e)},n.renderThumb=(e,t)=>{const r=n.props.thumbClassName+" "+n.props.thumbClassName+"-"+t+" "+(n.state.index===t?n.props.thumbActiveClassName:""),i={ref:e=>{n["thumb"+t]=e},key:n.props.thumbClassName+"-"+t,className:r,style:e,onMouseDown:n.createOnMouseDown(t),onTouchStart:n.createOnTouchStart(t),onFocus:n.createOnKeyDown(t),tabIndex:0,role:"slider","aria-orientation":n.props.orientation,"aria-valuenow":n.state.value[t],"aria-valuemin":n.props.min,"aria-valuemax":n.props.max,"aria-label":Array.isArray(n.props.ariaLabel)?n.props.ariaLabel[t]:n.props.ariaLabel,"aria-labelledby":Array.isArray(n.props.ariaLabelledby)?n.props.ariaLabelledby[t]:n.props.ariaLabelledby,"aria-disabled":n.props.disabled},o={index:t,value:yy(n.state.value),valueNow:n.state.value[t]};return n.props.ariaValuetext&&(i["aria-valuetext"]="string"==typeof n.props.ariaValuetext?n.props.ariaValuetext:n.props.ariaValuetext(o)),n.props.renderThumb(i,o)},n.renderTrack=(e,t,r)=>{const i={key:n.props.trackClassName+"-"+e,className:n.props.trackClassName+" "+n.props.trackClassName+"-"+e,style:n.buildTrackStyle(t,n.state.upperBound-r)},o={index:e,value:yy(n.state.value)};return n.props.renderTrack(i,o)};let r=vy(t.value);r.length||(r=vy(t.defaultValue)),n.pendingResizeTimeouts=[];const i=[];for(let e=0;e<r.length;e+=1)r[e]=wy(r[e],t),i.push(e);return n.resizeObserver=null,n.resizeElementRef=Y.default.createRef(),n.state={index:-1,upperBound:0,sliderLength:0,value:r,zIndices:i},n}!function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,my(e,t)}(t,e);var n=t.prototype;return n.componentDidMount=function(){"undefined"!=typeof window&&(this.resizeObserver=new ResizeObserver(this.handleResize),this.resizeObserver.observe(this.resizeElementRef.current),this.resize())},t.getDerivedStateFromProps=function(e,t){const n=vy(e.value);return n.length?t.pending?null:{value:n.map((t=>wy(t,e)))}:null},n.componentDidUpdate=function(){0===this.state.upperBound&&this.resize()},n.componentWillUnmount=function(){this.clearPendingResizeTimeouts(),this.resizeObserver&&this.resizeObserver.disconnect()},n.onEnd=function(e){e&&function(e){Object.keys(e).forEach((t=>{"undefined"!=typeof document&&document.removeEventListener(t,e[t],!1)}))}(e),this.hasMoved&&this.fireChangeEvent("onAfterChange"),this.setState({pending:!1}),this.hasMoved=!1},n.getValue=function(){return yy(this.state.value)},n.getClosestIndex=function(e){let t=Number.MAX_VALUE,n=-1;const{value:r}=this.state,i=r.length;for(let o=0;o<i;o+=1){const i=this.calcOffset(r[o]),a=Math.abs(e-i);a<t&&(t=a,n=o)}return n},n.getMousePosition=function(e){return[e["page"+this.axisKey()],e["page"+this.orthogonalAxisKey()]]},n.getTouchPosition=function(e){const t=e.touches[0];return[t["page"+this.axisKey()],t["page"+this.orthogonalAxisKey()]]},n.getKeyDownEventMap=function(){return{keydown:this.onKeyDown,keyup:this.onKeyUp,focusout:this.onBlur}},n.getMouseEventMap=function(){return{mousemove:this.onMouseMove,mouseup:this.onMouseUp}},n.getTouchEventMap=function(){return{touchmove:this.onTouchMove,touchend:this.onTouchEnd}},n.getValueFromPosition=function(e){const t=e/(this.state.sliderLength-this.state.thumbSize)*(this.props.max-this.props.min);return wy(this.state.startValue+t,this.props)},n.getDiffPosition=function(e){let t=e-this.state.startPosition;return this.props.invert&&(t*=-1),t},n.resize=function(){const{slider:e,thumb0:t}=this;if(!e||!t)return;const n=this.sizeKey(),r=e.getBoundingClientRect(),i=e[n],o=r[this.posMaxKey()],a=r[this.posMinKey()],s=t.getBoundingClientRect()[n.replace("client","").toLowerCase()],l=i-s,c=Math.abs(o-a);this.state.upperBound===l&&this.state.sliderLength===c&&this.state.thumbSize===s||this.setState({upperBound:l,sliderLength:c,thumbSize:s})},n.calcOffset=function(e){const t=this.props.max-this.props.min;return 0===t?0:(e-this.props.min)/t*this.state.upperBound},n.calcValue=function(e){return e/this.state.upperBound*(this.props.max-this.props.min)+this.props.min},n.calcOffsetFromPosition=function(e){const{slider:t}=this,n=t.getBoundingClientRect(),r=n[this.posMaxKey()],i=n[this.posMinKey()];let o=e-(window["page"+this.axisKey()+"Offset"]+(this.props.invert?r:i));return this.props.invert&&(o=this.state.sliderLength-o),o-=this.state.thumbSize/2,o},n.forceValueFromPosition=function(e,t){const n=this.calcOffsetFromPosition(e),r=this.getClosestIndex(n),i=wy(this.calcValue(n),this.props),o=this.state.value.slice();o[r]=i;for(let e=0;e<o.length-1;e+=1)if(o[e+1]-o[e]<this.props.minDistance)return;this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0,this.setState({value:o},(()=>{t(r),this.fireChangeEvent("onChange")}))},n.clearPendingResizeTimeouts=function(){do{const e=this.pendingResizeTimeouts.shift();clearTimeout(e)}while(this.pendingResizeTimeouts.length)},n.start=function(e,t){const n=this["thumb"+e];n&&n.focus();const{zIndices:r}=this.state;r.splice(r.indexOf(e),1),r.push(e),this.setState((n=>({startValue:n.value[e],startPosition:void 0!==t?t:n.startPosition,index:e,zIndices:r})))},n.moveUpByStep=function(e){void 0===e&&(e=this.props.step);const t=this.state.value[this.state.index],n=wy(this.props.invert&&"horizontal"===this.props.orientation?t-e:t+e,this.props);this.move(Math.min(n,this.props.max))},n.moveDownByStep=function(e){void 0===e&&(e=this.props.step);const t=this.state.value[this.state.index],n=wy(this.props.invert&&"horizontal"===this.props.orientation?t+e:t-e,this.props);this.move(Math.max(n,this.props.min))},n.move=function(e){const t=this.state.value.slice(),{index:n}=this.state,{length:r}=t,i=t[n];if(e===i)return;this.hasMoved||this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0;const{pearling:o,max:a,min:s,minDistance:l}=this.props;if(!o){if(n>0){const r=t[n-1];e<r+l&&(e=r+l)}if(n<r-1){const r=t[n+1];e>r-l&&(e=r-l)}}t[n]=e,o&&r>1&&(e>i?(this.pushSucceeding(t,l,n),function(e,t,n,r){for(let i=0;i<e;i+=1){const o=r-i*n;t[e-1-i]>o&&(t[e-1-i]=o)}}(r,t,l,a)):e<i&&(this.pushPreceding(t,l,n),function(e,t,n,r){for(let i=0;i<e;i+=1){const e=r+i*n;t[i]<e&&(t[i]=e)}}(r,t,l,s))),this.setState({value:t},this.fireChangeEvent.bind(this,"onChange"))},n.pushSucceeding=function(e,t,n){let r,i;for(r=n,i=e[r]+t;null!==e[r+1]&&i>e[r+1];r+=1,i=e[r]+t)e[r+1]=$y(i,this.props)},n.pushPreceding=function(e,t,n){for(let r=n,i=e[r]-t;null!==e[r-1]&&i<e[r-1];r-=1,i=e[r]-t)e[r-1]=$y(i,this.props)},n.axisKey=function(){return"vertical"===this.props.orientation?"Y":"X"},n.orthogonalAxisKey=function(){return"vertical"===this.props.orientation?"X":"Y"},n.posMinKey=function(){return"vertical"===this.props.orientation?this.props.invert?"bottom":"top":this.props.invert?"right":"left"},n.posMaxKey=function(){return"vertical"===this.props.orientation?this.props.invert?"top":"bottom":this.props.invert?"left":"right"},n.sizeKey=function(){return"vertical"===this.props.orientation?"clientHeight":"clientWidth"},n.fireChangeEvent=function(e){this.props[e]&&this.props[e](yy(this.state.value),this.state.index)},n.buildThumbStyle=function(e,t){const n={position:"absolute",touchAction:"none",willChange:this.state.index>=0?this.posMinKey():void 0,zIndex:this.state.zIndices.indexOf(t)+1};return n[this.posMinKey()]=e+"px",n},n.buildTrackStyle=function(e,t){const n={position:"absolute",willChange:this.state.index>=0?this.posMinKey()+","+this.posMaxKey():void 0};return n[this.posMinKey()]=e,n[this.posMaxKey()]=t,n},n.buildMarkStyle=function(e){var t;return(t={position:"absolute"})[this.posMinKey()]=e,t},n.renderThumbs=function(e){const{length:t}=e,n=[];for(let r=0;r<t;r+=1)n[r]=this.buildThumbStyle(e[r],r);const r=[];for(let e=0;e<t;e+=1)r[e]=this.renderThumb(n[e],e);return r},n.renderTracks=function(e){const t=[],n=e.length-1;t.push(this.renderTrack(0,0,e[0]));for(let r=0;r<n;r+=1)t.push(this.renderTrack(r+1,e[r],e[r+1]));return t.push(this.renderTrack(n+1,e[n],this.state.upperBound)),t},n.renderMarks=function(){let{marks:e}=this.props;const t=this.props.max-this.props.min+1;return"boolean"==typeof e?e=Array.from({length:t}).map(((e,t)=>t)):"number"==typeof e&&(e=Array.from({length:t}).map(((e,t)=>t)).filter((t=>t%e==0))),e.map(parseFloat).sort(((e,t)=>e-t)).map((e=>{const t=this.calcOffset(e),n={key:e,className:this.props.markClassName,style:this.buildMarkStyle(t)};return this.props.renderMark(n)}))},n.render=function(){const e=[],{value:t}=this.state,n=t.length;for(let r=0;r<n;r+=1)e[r]=this.calcOffset(t[r],r);const r=this.props.withTracks?this.renderTracks(e):null,i=this.renderThumbs(e),o=this.props.marks?this.renderMarks():null;return Y.default.createElement("div",{ref:e=>{this.slider=e,this.resizeElementRef.current=e},style:{position:"relative"},className:this.props.className+(this.props.disabled?" disabled":""),onMouseDown:this.onSliderMouseDown,onClick:this.onSliderClick},r,i,o)},t}(Y.default.Component);jy.displayName="ReactSlider",jy.defaultProps={min:0,max:100,step:1,pageFn:e=>10*e,minDistance:0,defaultValue:0,orientation:"horizontal",className:"slider",thumbClassName:"thumb",thumbActiveClassName:"active",trackClassName:"track",markClassName:"mark",withTracks:!0,pearling:!1,disabled:!1,snapDragDisabled:!1,invert:!1,marks:[],renderThumb:e=>Y.default.createElement("div",e),renderTrack:e=>Y.default.createElement("div",e),renderMark:e=>Y.default.createElement("span",e)};var Sy=jy;const ky=K.default.div`
    isolation: isolate;
`,Cy=K.default.div`
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
`,Oy=K.default.div`
    margin-bottom: 1rem;
`,Ty=K.default(exports.Text.Body)`
    overflow-wrap: anywhere;
`,Dy=K.default(Sy)`
    height: 0.875rem;
`,Iy=K.default.div`
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

        background-color: ${ts.Neutral[8]};
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);
        border: 1px solid ${ts.Neutral[4]};
        border-radius: 50%;
    }
`,Ey=K.default.div`
    height: 0.875rem;
    width: 0.875rem;
    position: relative;
    outline: none;

    :focus-visible ${Iy}:after {
        border: 1px solid ${ts.Primary};
    }
`,_y=K.default.div`
    height: 0.25rem;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 1rem;

    background: ${e=>e.$color&&"function"==typeof e.$color?e.$color(e):e.$color||ts.Neutral[4](e)};
`,My=n=>{var{value:r,min:i=0,max:o=100,step:a=1,minRange:s,numOfThumbs:l=2,colors:c,disabled:d,readOnly:u,ariaLabels:f,showSliderLabels:h,sliderLabelPrefix:p,sliderLabelSuffix:g,showIndicatorLabel:m,indicatorLabelPrefix:b,indicatorLabelSuffix:v,renderSliderLabel:y,onChange:x,onChangeEnd:w}=n,$=X(n,["value","min","max","step","minRange","numOfThumbs","colors","disabled","readOnly","ariaLabels","showSliderLabels","sliderLabelPrefix","sliderLabelSuffix","showIndicatorLabel","indicatorLabelPrefix","indicatorLabelSuffix","renderSliderLabel","onChange","onChangeEnd"]);const[j,S]=t.useState(C()),k=function(){const e=function(){const e=d||u?ts.Neutral[5]:ts.Neutral[4],t=d||u?ts.Neutral[4]:ts.Primary;if(1===l)return[t,e];const n=[];n.push(e);for(let e=0;e<l-1;e++)n.push(t);return n.push(e),n}();return new Array(l+1).fill(0).map(((t,n)=>(null==c?void 0:c[n])||e[n]))}();t.useEffect((()=>{r!==j&&S(C())}),[r]);function C(){if(r&&r.length===l)return r;const e=[];for(let t=0;t<l;t++)e.push(i+a*t);return e}const O=t=>y?y(t):e.jsxs(Ty,{children:[p,t,g]});return e.jsxs(ky,Object.assign({},$,{children:[m&&e.jsx(Oy,{children:(()=>{let t="";if(1===j.length)t=`${j[0]}`;else if(2===j.length)t=`${j[0]} - ${j[1]}`;else if(j.length>2){t=`${Math.min(...j)} - ${Math.max(...j)}`}return e.jsxs(Ty,{children:[b,t,v]})})()}),e.jsx(Dy,{step:a,min:i,max:o,value:j,disabled:d||u,onChange:(e,t)=>{if("number"==typeof e){const t=[e];S(t),null==x||x(t)}else{if(t>-1&&j[t]===e[t])return;S(e),null==x||x(e)}},onAfterChange:e=>{if("number"==typeof e){const t=[e];S(t),null==w||w(t)}else S(e),null==w||w(e)},minDistance:s,ariaLabel:f,renderThumb:(t,n)=>e.jsx(Ey,Object.assign({"data-testid":`slider-thumb-${n.index}`},t,{tabIndex:d?void 0:t.tabIndex},{children:e.jsx(Iy,{$disabled:d,$readOnly:u})})),renderTrack:(t,n)=>e.jsx(_y,Object.assign({"data-testid":`slider-track-${n.index}`},t,{$color:k[n.index]}))}),h&&e.jsxs(Cy,{children:[e.jsx("div",{children:O(i)}),e.jsx("div",{children:O(o)})]})]}))},Ry=K.default.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: baseline;
`,Ay=K.default.div`
    margin: 0 0.5rem;
`,Ny=K.default.div`
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: flex-end;
    padding: 0 0.4375rem;
`,By=K.default.div`
    flex: 1;
    border-radius: 4px 4px 0px 0px;
    border: 0.5px solid ${ts.Neutral[8]};

    ${e=>{let t=ts.Neutral[6];return e.$disabled&&e.$selected?t=ts.Neutral[4]:e.$disabled?t=ts.Neutral[5]:e.$selected&&(t=ts.Accent.Light[1]),i.css`
            background-color: ${t};
        `}}
`,Fy=K.default(My)`
    margin-top: -0.3125rem;
`,Ly=n=>{var{bins:r=[],interval:i,disabled:o,readOnly:a,value:s,showRangeLabels:l,rangeLabelPrefix:c,rangeLabelSuffix:d,ariaLabels:u,onChange:f,onChangeEnd:h,renderEmptyView:p,renderRangeLabel:g}=n,m=X(n,["bins","interval","disabled","readOnly","value","showRangeLabels","rangeLabelPrefix","rangeLabelSuffix","ariaLabels","onChange","onChangeEnd","renderEmptyView","renderRangeLabel"]);const b=r.map((e=>e.count)),v=Math.max(...b),y=r.map((e=>e.minValue)),x=Math.max(...y),w=Math.min(...y),[$,j]=t.useState(O()),S=t.useMemo((()=>{const e=[...r].sort(((e,t)=>e.minValue-t.minValue)),t=(x-w)/i+1,n=[];for(let r=0;r<t;r++){const t=e.find((e=>e.minValue===w+i*r));t?n.push(t):n.push({count:0,minValue:w+i*r})}return n}),[r,i]);t.useEffect((()=>{s!==$&&j(O())}),[s]);const k=e=>{j(e),null==f||f(e)},C=e=>{j(e),null==h||h(e)};function O(){return null!=s?s:[w,w+i]}const T=t=>g?g(t):e.jsxs(exports.Text.Body,{children:[c,t,d]});return e.jsxs("div",Object.assign({},m,{children:[l&&e.jsxs(Ry,{children:[T($[0]),e.jsx(Ay,{children:"-"}),T($[1])]}),S.every((e=>0===e.count))&&p?p():e.jsxs(e.Fragment,{children:[e.jsx(Ny,{children:S.map(((t,n)=>{const r=t.count/v;return e.jsx(By,{style:{height:r?`calc(calc(100% - 0.25rem) * ${r} + 0.25rem)`:0},$selected:t.minValue>=$[0]&&t.minValue<$[1],$disabled:o||a},n)}))}),e.jsx(Fy,{min:w,max:x+i,step:i,minRange:i,numOfThumbs:2,value:$,disabled:o,readOnly:a,ariaLabels:u,onChange:k,onChangeEnd:C})]})]}))},Py=K.default.input`
    ${ys.getTextStyle("Body","regular")}
    color: ${ts.Neutral[1]};

    // overwrite default styles
    background: transparent;
    border: none;
    height: calc(3rem - 2px); // exclude top and bottom borders
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
        color: ${ts.Neutral[3]};
    }

    ${e=>"number"===e.type?i.css`
                // Chrome, Safari, Edge, Opera
                ::-webkit-outer-spin-button,
                ::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }

                // Firefox
                -moz-appearance: textfield;
            `:e.disabled?i.css`
                cursor: not-allowed;
            `:void 0}
`,zy=K.default.button`
    position: relative;
    height: auto;
    padding: 0.75rem 1rem;

    margin-right: -1rem; // offset the padding
    cursor: pointer;

    color: ${ts.Neutral[3]};
    background-color: transparent;
    border: none;
`,Hy=K.default(m.CrossIcon)`
    height: 1.25rem;
    width: 1.25rem;
    vertical-align: middle;
`,Wy=K.default.div`
    display: flex;
    width: 100%;
`,Vy=Y.default.forwardRef(((n,r)=>{var{value:i,spacing:o,type:a,error:s,disabled:l,readOnly:c,onChange:d,onClear:u,allowClear:f=!1,className:h,styleType:p="bordered"}=n,g=X(n,["value","spacing","type","error","disabled","readOnly","onChange","onClear","allowClear","className","styleType"]);const m=t.useRef();t.useImperativeHandle(r,(()=>m.current),[]);const b=gc({ref:m,formatter:e=>dc.transformWithSpaces(e,o)}),v=e=>{d&&(x()?w(e):d(e))},y=()=>{u&&u(),m&&m.current&&m.current.focus()},x=()=>"tel"===a&&o,w=e=>{const{nextValue:t,updateCaretPosition:n}=b(),r=t.replace(/\s/g,"");e.target.value=r,d(e),n()},$=i?(e=>e?x()?dc.transformWithSpaces(e,o):e:"")(i):i,j=()=>e.jsxs(e.Fragment,{children:[e.jsx(Py,Object.assign({"data-testid":"input",ref:m,disabled:l,value:$,onChange:v,type:a,readOnly:c},g)),f&&!l&&!c&&!!i&&e.jsx(zy,Object.assign({onClick:y,type:"button"},{children:e.jsx(Hy,{"aria-hidden":!0})}))]});return e.jsx(e.Fragment,{children:"no-border"===p?e.jsx(Wy,Object.assign({className:h},{children:j()})):e.jsx(Sf,Object.assign({$disabled:l,$error:s,$readOnly:c,className:h},{children:j()}))})})),Yy=Y.default.forwardRef(((t,n)=>{const{label:r,errorMessage:i,id:o="form-field","data-error-testid":a,"data-testid":s,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u}=t,f=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e.jsx(gy,Object.assign({id:o,label:r,errorMessage:i,disabled:f.disabled,"data-error-testid":a,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u},{children:e.jsx(Vy,Object.assign({id:`${o}-base`,"data-testid":s||o,ref:n,error:!!i},f))}))})),Uy=K.default.div`
    display: flex;
    position: relative;
    border: 1px solid ${ts.Neutral[5]};
    border-radius: 4px;
    background: ${ts.Neutral[8]};
    height: max-content;
    width: 100%;
    padding: 0 1rem;
    flex-direction: ${e=>"right"===e.$position?"row-reverse":"row"};

    :focus-within {
        border: 1px solid ${ts.Accent.Light[1]};
        box-shadow: ${Bs.InputBoxShadow};
    }

    ${e=>e.$readOnly?i.css`
                border: none;
                padding: 0;
                background: transparent !important;

                :focus-within {
                    border: none;
                    box-shadow: none;
                }
            `:e.disabled?i.css`
                background: ${ts.Neutral[6](e)};
                :hover {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${ts.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$error?i.css`
                border: 1px solid ${ts.Validation.Red.Border(e)};

                :focus-within {
                    border: 1px solid ${ts.Validation.Red.Border(e)};
                    box-shadow: ${Bs.InputErrorBoxShadow};
                }
            `:void 0}
`,Ky=K.default(Vy)`
    // overwrite default styles
    &&& {
        background: transparent;
        border: none;
        padding: 0;

        :focus-within {
            outline: none;
            border: none;
            box-shadow: none;
        }
    }
`,qy=K.default.div`
    position: relative;
    display: flex;
    align-items: center;

    ${ys.getTextStyle("Body","regular")}
    color: ${ts.Neutral[1]};

    /* SVG Icon */
    svg {
        height: 1.5rem;
        width: 1.5rem;
        #path {
            fill: ${ts.Neutral[1]};
        }
    }

    ${e=>{if(e.disabled)return i.css`
                color: ${ts.Neutral[4](e)};
                svg {
                    #path {
                        fill: ${ts.Neutral[4](e)};
                    }
                }
            `}}

    ${e=>"right"===e.$position?i.css`
                    margin-left: ${e.$readOnly?"0.25rem":"0.75rem"};
                `:i.css`
                    margin-right: ${e.$readOnly?"0.25rem":"0.75rem"};
                `};
`;var Xy=oa;var Gy=oa,Zy=aa,Qy=$a;var Jy=oa,ex=function(){this.__data__=new Xy,this.size=0},tx=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n},nx=function(e){return this.__data__.get(e)},rx=function(e){return this.__data__.has(e)},ix=function(e,t){var n=this.__data__;if(n instanceof Gy){var r=n.__data__;if(!Zy||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new Qy(r)}return n.set(e,t),this.size=n.size,this};function ox(e){var t=this.__data__=new Jy(e);this.size=t.size}ox.prototype.clear=ex,ox.prototype.delete=tx,ox.prototype.get=nx,ox.prototype.has=rx,ox.prototype.set=ix;var ax=ox;var sx=$a,lx=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},cx=function(e){return this.__data__.has(e)};function dx(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new sx;++t<n;)this.add(e[t])}dx.prototype.add=dx.prototype.push=lx,dx.prototype.has=cx;var ux=dx,fx=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1},hx=function(e,t){return e.has(t)};var px=function(e,t,n,r,i,o){var a=1&n,s=e.length,l=t.length;if(s!=l&&!(a&&l>s))return!1;var c=o.get(e),d=o.get(t);if(c&&d)return c==t&&d==e;var u=-1,f=!0,h=2&n?new ux:void 0;for(o.set(e,t),o.set(t,e);++u<s;){var p=e[u],g=t[u];if(r)var m=a?r(g,p,u,t,e,o):r(p,g,u,e,t,o);if(void 0!==m){if(m)continue;f=!1;break}if(h){if(!fx(t,(function(e,t){if(!hx(h,t)&&(p===e||i(p,e,n,r,o)))return h.push(t)}))){f=!1;break}}else if(p!==g&&!i(p,g,n,r,o)){f=!1;break}}return o.delete(e),o.delete(t),f};var gx=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n},mx=Ai.Uint8Array,bx=Yo,vx=px,yx=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r){n[++t]=[r,e]})),n},xx=gx,wx=Ni?Ni.prototype:void 0,$x=wx?wx.valueOf:void 0;var jx=function(e,t,n,r,i,o,a){switch(n){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!o(new mx(e),new mx(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return bx(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var s=yx;case"[object Set]":var l=1&r;if(s||(s=xx),e.size!=t.size&&!l)return!1;var c=a.get(e);if(c)return c==t;r|=2,a.set(e,t);var d=vx(s(e),s(t),r,i,o,a);return a.delete(e),d;case"[object Symbol]":if($x)return $x.call(e)==$x.call(t)}return!1};var Sx=function(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e},kx=Ei;var Cx=function(e,t,n){var r=t(e);return kx(e)?r:Sx(r,n(e))};var Ox=function(e,t){for(var n=-1,r=null==e?0:e.length,i=0,o=[];++n<r;){var a=e[n];t(a,n,e)&&(o[i++]=a)}return o},Tx=function(){return[]},Dx=Object.prototype.propertyIsEnumerable,Ix=Object.getOwnPropertySymbols,Ex=Ix?function(e){return null==e?[]:(e=Object(e),Ox(Ix(e),(function(t){return Dx.call(e,t)})))}:Tx;var _x=function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r},Mx=Ki,Rx=qi;var Ax=function(e){return Rx(e)&&"[object Arguments]"==Mx(e)},Nx=qi,Bx=Object.prototype,Fx=Bx.hasOwnProperty,Lx=Bx.propertyIsEnumerable,Px=Ax(function(){return arguments}())?Ax:function(e){return Nx(e)&&Fx.call(e,"callee")&&!Lx.call(e,"callee")},zx={exports:{}};var Hx=function(){return!1};!function(e,t){var n=Ai,r=Hx,i=t&&!t.nodeType&&t,o=i&&e&&!e.nodeType&&e,a=o&&o.exports===i?n.Buffer:void 0,s=(a?a.isBuffer:void 0)||r;e.exports=s}(zx,zx.exports);var Wx=zx.exports,Vx=/^(?:0|[1-9]\d*)$/;var Yx=function(e,t){var n=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==n||"symbol"!=n&&Vx.test(e))&&e>-1&&e%1==0&&e<t};var Ux=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},Kx=Ki,qx=Ux,Xx=qi,Gx={};Gx["[object Float32Array]"]=Gx["[object Float64Array]"]=Gx["[object Int8Array]"]=Gx["[object Int16Array]"]=Gx["[object Int32Array]"]=Gx["[object Uint8Array]"]=Gx["[object Uint8ClampedArray]"]=Gx["[object Uint16Array]"]=Gx["[object Uint32Array]"]=!0,Gx["[object Arguments]"]=Gx["[object Array]"]=Gx["[object ArrayBuffer]"]=Gx["[object Boolean]"]=Gx["[object DataView]"]=Gx["[object Date]"]=Gx["[object Error]"]=Gx["[object Function]"]=Gx["[object Map]"]=Gx["[object Number]"]=Gx["[object Object]"]=Gx["[object RegExp]"]=Gx["[object Set]"]=Gx["[object String]"]=Gx["[object WeakMap]"]=!1;var Zx=function(e){return Xx(e)&&qx(e.length)&&!!Gx[Kx(e)]};var Qx=function(e){return function(t){return e(t)}},Jx={exports:{}};!function(e,t){var n=_i,r=t&&!t.nodeType&&t,i=r&&e&&!e.nodeType&&e,o=i&&i.exports===r&&n.process,a=function(){try{var e=i&&i.require&&i.require("util").types;return e||o&&o.binding&&o.binding("util")}catch(e){}}();e.exports=a}(Jx,Jx.exports);var ew=Jx.exports,tw=Zx,nw=Qx,rw=ew&&ew.isTypedArray,iw=rw?nw(rw):tw,ow=_x,aw=Px,sw=Ei,lw=Wx,cw=Yx,dw=iw,uw=Object.prototype.hasOwnProperty;var fw=function(e,t){var n=sw(e),r=!n&&aw(e),i=!n&&!r&&lw(e),o=!n&&!r&&!i&&dw(e),a=n||r||i||o,s=a?ow(e.length,String):[],l=s.length;for(var c in e)!t&&!uw.call(e,c)||a&&("length"==c||i&&("offset"==c||"parent"==c)||o&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||cw(c,l))||s.push(c);return s},hw=Object.prototype;var pw=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||hw)};var gw=function(e,t){return function(n){return e(t(n))}}(Object.keys,Object),mw=pw,bw=gw,vw=Object.prototype.hasOwnProperty;var yw=function(e){if(!mw(e))return bw(e);var t=[];for(var n in Object(e))vw.call(e,n)&&"constructor"!=n&&t.push(n);return t},xw=so,ww=Ux;var $w=function(e){return null!=e&&ww(e.length)&&!xw(e)},jw=fw,Sw=yw,kw=$w;var Cw=function(e){return kw(e)?jw(e):Sw(e)},Ow=Cx,Tw=Ex,Dw=Cw;var Iw=function(e){return Ow(e,Dw,Tw)},Ew=Object.prototype.hasOwnProperty;var _w=function(e,t,n,r,i,o){var a=1&n,s=Iw(e),l=s.length;if(l!=Iw(t).length&&!a)return!1;for(var c=l;c--;){var d=s[c];if(!(a?d in t:Ew.call(t,d)))return!1}var u=o.get(e),f=o.get(t);if(u&&f)return u==t&&f==e;var h=!0;o.set(e,t),o.set(t,e);for(var p=a;++c<l;){var g=e[d=s[c]],m=t[d];if(r)var b=a?r(m,g,d,t,e,o):r(g,m,d,e,t,o);if(!(void 0===b?g===m||i(g,m,n,r,o):b)){h=!1;break}p||(p="constructor"==d)}if(h&&!p){var v=e.constructor,y=t.constructor;v==y||!("constructor"in e)||!("constructor"in t)||"function"==typeof v&&v instanceof v&&"function"==typeof y&&y instanceof y||(h=!1)}return o.delete(e),o.delete(t),h},Mw=Co(Ai,"DataView"),Rw=aa,Aw=Co(Ai,"Promise"),Nw=Co(Ai,"Set"),Bw=Co(Ai,"WeakMap"),Fw=Ki,Lw=ho,Pw="[object Map]",zw="[object Promise]",Hw="[object Set]",Ww="[object WeakMap]",Vw="[object DataView]",Yw=Lw(Mw),Uw=Lw(Rw),Kw=Lw(Aw),qw=Lw(Nw),Xw=Lw(Bw),Gw=Fw;(Mw&&Gw(new Mw(new ArrayBuffer(1)))!=Vw||Rw&&Gw(new Rw)!=Pw||Aw&&Gw(Aw.resolve())!=zw||Nw&&Gw(new Nw)!=Hw||Bw&&Gw(new Bw)!=Ww)&&(Gw=function(e){var t=Fw(e),n="[object Object]"==t?e.constructor:void 0,r=n?Lw(n):"";if(r)switch(r){case Yw:return Vw;case Uw:return Pw;case Kw:return zw;case qw:return Hw;case Xw:return Ww}return t});var Zw=Gw,Qw=ax,Jw=px,e$=jx,t$=_w,n$=Zw,r$=Ei,i$=Wx,o$=iw,a$="[object Arguments]",s$="[object Array]",l$="[object Object]",c$=Object.prototype.hasOwnProperty;var d$=function(e,t,n,r,i,o){var a=r$(e),s=r$(t),l=a?s$:n$(e),c=s?s$:n$(t),d=(l=l==a$?l$:l)==l$,u=(c=c==a$?l$:c)==l$,f=l==c;if(f&&i$(e)){if(!i$(t))return!1;a=!0,d=!1}if(f&&!d)return o||(o=new Qw),a||o$(e)?Jw(e,t,n,r,i,o):e$(e,t,l,n,r,i,o);if(!(1&n)){var h=d&&c$.call(e,"__wrapped__"),p=u&&c$.call(t,"__wrapped__");if(h||p){var g=h?e.value():e,m=p?t.value():t;return o||(o=new Qw),i(g,m,n,r,o)}}return!!f&&(o||(o=new Qw),t$(e,t,n,r,i,o))},u$=qi;var f$=function e(t,n,r,i,o){return t===n||(null==t||null==n||!u$(t)&&!u$(n)?t!=t&&n!=n:d$(t,n,r,i,e,o))},h$=ax,p$=f$;var g$=ro;var m$=function(e){return e==e&&!g$(e)},b$=m$,v$=Cw;var y$=function(e,t){return function(n){return null!=n&&(n[e]===t&&(void 0!==t||e in Object(n)))}},x$=function(e,t,n,r){var i=n.length,o=i,a=!r;if(null==e)return!o;for(e=Object(e);i--;){var s=n[i];if(a&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++i<o;){var l=(s=n[i])[0],c=e[l],d=s[1];if(a&&s[2]){if(void 0===c&&!(l in e))return!1}else{var u=new h$;if(r)var f=r(c,d,l,e,t,u);if(!(void 0===f?p$(d,c,3,r,u):f))return!1}}return!0},w$=function(e){for(var t=v$(e),n=t.length;n--;){var r=t[n],i=e[r];t[n]=[r,i,b$(i)]}return t},$$=y$;var j$=za,S$=Px,k$=Ei,C$=Yx,O$=Ux,T$=Wa;var D$=function(e,t){return null!=e&&t in Object(e)},I$=function(e,t,n){for(var r=-1,i=(t=j$(t,e)).length,o=!1;++r<i;){var a=T$(t[r]);if(!(o=null!=e&&n(e,a)))break;e=e[a]}return o||++r!=i?o:!!(i=null==e?0:e.length)&&O$(i)&&C$(a,i)&&(k$(e)||S$(e))};var E$=f$,_$=qa,M$=function(e,t){return null!=e&&I$(e,t,D$)},R$=no,A$=m$,N$=y$,B$=Wa;var F$=Ua;var L$=function(e){return function(t){return null==t?void 0:t[e]}},P$=function(e){return function(t){return F$(t,e)}},z$=no,H$=Wa;var W$=function(e){var t=w$(e);return 1==t.length&&t[0][2]?$$(t[0][0],t[0][1]):function(n){return n===e||x$(n,e,t)}},V$=function(e,t){return R$(e)&&A$(t)?N$(B$(e),t):function(n){var r=_$(n,e);return void 0===r&&r===t?M$(n,e):E$(t,r,3)}},Y$=function(e){return e},U$=Ei,K$=function(e){return z$(e)?L$(H$(e)):P$(e)};var q$=function(e){return"function"==typeof e?e:null==e?Y$:"object"==typeof e?U$(e)?V$(e[0],e[1]):W$(e):K$(e)},X$=q$,G$=$w,Z$=Cw;var Q$=function(e){return function(t,n,r){var i=Object(t);if(!G$(t)){var o=X$(n);t=Z$(t),n=function(e){return o(i[e],e,i)}}var a=e(t,n,r);return a>-1?i[o?t[a]:a]:void 0}};var J$=Kd,ej=1/0;var tj=function(e){return e?(e=J$(e))===ej||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var nj=function(e,t,n,r){for(var i=e.length,o=n+(r?1:-1);r?o--:++o<i;)if(t(e[o],o,e))return o;return-1},rj=q$,ij=function(e){var t=tj(e),n=t%1;return t==t?n?t-n:t:0},oj=Math.max;var aj=function(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var i=null==n?0:ij(n);return i<0&&(i=oj(r+i,0)),nj(e,rj(t),i)},sj=Ii(aj),lj=Ii(Q$(aj)),cj=f$;var dj=Ii((function(e,t){return cj(e,t)}));const uj=K.default(Ti.div)`
    overflow: hidden;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);
`,fj=K.default.ul`
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    background: transparent;
    max-height: 20rem;
    width: ${e=>e.width||"100%"};
    overflow-y: auto;
    padding: 0.5rem;
    list-style-type: none;

    ::-webkit-scrollbar {
        width: 9px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${ts.Neutral[4]};
        border-right: 5px solid ${ts.Neutral[8]};
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
    }

    ${is.MaxWidth.mobileL} {
        max-height: 15rem;
    }
`,hj=K.default.li`
    :hover,
    :focus,
    :active {
        background: ${ts.Accent.Light[5]};
    }
    ${e=>{if(e.$checked)return i.css`
                background: ${ts.Accent.Light[5]};
            `}}
`,pj=K.default.button`
    display: flex;
    ${e=>e.$multiSelect?i.css`
                padding: 0.5rem 1rem;
            `:i.css`
                padding: 0 1rem;
                min-height: ${(e=>{let t=3.5;return"small"===e.$variant&&(t=3.25),e.$hasNextLineLabel&&(t=4.255),t})(e)}rem;
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
        outline-color: ${ts.Accent.Light[3]};
    }

    span {
        margin-bottom: 0;
    }
`,gj=i.css`
    overflow: hidden;
    display: -webkit-inline-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${e=>e.$maxLines||2};
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
`,mj=K.default.div`
    ${e=>ys.getTextStyle("small"===e.$variant?"BodySmall":"Body","regular")}
    color: ${ts.Neutral[1]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&gj}
`,bj=K.default.div`
    color: ${ts.Neutral[4]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&gj}

    ${e=>"next-line"===e.$labelDisplayType?i.css`
                    ${ys.getTextStyle("BodySmall","semibold")}
                `:i.css`
                    ${ys.getTextStyle("Body","regular")}
                `}
`,vj=K.default.div`
    text-align: left;
    width: 100%;

    ${e=>{switch(e.$labelDisplayType){case"next-line":return i.css`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return i.css`
                    ${mj} {
                        display: inline;
                    }

                    ${bj} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,yj=K.default.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    word-break: break-all;
    overflow: hidden;
`,xj=K.default.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,wj=K.default(Ad)`
    flex: 0 0 1.5rem;
    margin-right: 1rem;
`,$j=K.default.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 1rem 0 0.5rem 0;
`,jj=K.default.button`
    ${e=>ys.getTextStyle("small"===e.$variant?"BodySmall":"Body","semibold")}
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    ${e=>`\n\t\t\tcolor: ${ts.Primary(e)};\n\t\t`}
`,Sj=K.default.div`
    width: 100%;
    display: flex;
    padding: 1rem 0.5rem;
    align-items: center;
`,kj=K.default.div`
    ${e=>ys.getTextStyle("small"===e.$variant?"BodySmall":"Body","regular")}
`,Cj=K.default(s.ExclamationCircleFillIcon)`
    ${e=>{const t="small"===e.$variant?1:1.5;return i.css`
            height: ${t}rem;
            width: ${t}rem;
        `}}
    margin-right: 0.625rem;
    color: ${ts.Validation.Red.Icon};
`,Oj=e=>"small"===e?1:1.375,Tj=e=>i.css`
        height: ${Oj(e)}rem;
        width: ${Oj(e)}rem;
    `,Dj=K.default.li`
    background: ${ts.Neutral[7]};
    display: flex;
    border-radius: 4px;
    align-items: center;
`,Ij=K.default(kf)`
    height: ${e=>"small"===e.$variant?2.5:3}rem;
    flex: 1;
    padding: 0 0.5rem 0 0;
    width: 100%;
`,Ej=K.default(x.MagnifierIcon)`
    ${e=>Tj(e.$variant)}
    margin: 0 0.5rem;
    color: ${ts.Neutral[3]};
`,_j=K.default(ss)`
    ${e=>Tj(e.$variant)}
    padding: 0;
    margin: 0 0.5rem;
    color: ${ts.Neutral[3]};
    cursor: pointer;
    ${e=>{if("small"===e.$variant)return i.css`
                svg {
                    ${Tj(e.$variant)}
                }
            `}}
`,Mj=t.forwardRef(((t,n)=>{const{onClear:r}=t,i=X(t,["onClear"]);return e.jsxs(Dj,{children:[e.jsx(Ej,{$variant:t.variant}),e.jsx(Ij,Object.assign({ref:n,$variant:t.variant},i)),i.value&&e.jsx(_j,Object.assign({"aria-label":"Clear search",focusOutline:"browser",onClick:r,$variant:t.variant},{children:e.jsx(u.CrossIcon,{})}))]},"search")})),Rj=n=>{var{listItems:r,listExtractor:i,valueExtractor:o,onSelectItem:a,listStyleWidth:s,visible:l,enableSearch:c,searchPlaceholder:d="Search",onSearch:u,searchFunction:f,onDismiss:h,disableItemFocus:p,multiSelect:g,selectedItems:m,onSelectAll:b,onRetry:v,itemsLoadState:y="success",itemTruncationType:x="end",itemMaxLines:w=2,labelDisplayType:$="inline",renderListItem:j,onBlur:S,hideNoResultsDisplay:k,renderCustomCallToAction:C,variant:O="default"}=n,T=X(n,["listItems","listExtractor","valueExtractor","onSelectItem","listStyleWidth","visible","enableSearch","searchPlaceholder","onSearch","searchFunction","onDismiss","disableItemFocus","multiSelect","selectedItems","onSelectAll","onRetry","itemsLoadState","itemTruncationType","itemMaxLines","labelDisplayType","renderListItem","onBlur","hideNoResultsDisplay","renderCustomCallToAction","variant"]);const[D,I]=t.useState(0),[E,_]=t.useState(""),[M,R]=t.useState(r),[A,N]=t.useState(0),B=di({height:A}),F=t.useRef(),L=t.useRef(),P=t.useRef([]),z=t.useRef(),H=t.useRef(),W=t.useRef(D),V=t.useRef(M),Y=e=>{W.current=e,I(e)},U=e=>{V.current=e,R(e)};t.useEffect((()=>(document.addEventListener("keydown",J),()=>{document.removeEventListener("keydown",J)})),[]),t.useEffect((()=>{Z(E)}),[E]),t.useEffect((()=>{if(_(""),l){if(setTimeout((()=>{N(Q())})),p)return;z&&z.current?(z.current.focus(),Y(-1)):P.current[D]&&P.current[D].focus()}else N(0)}),[l]),t.useEffect((()=>{if(l){const e=Q();N(e)}}),[M,y]),t.useEffect((()=>{U(r),_(""),Y(0)}),[r]);const K=e=>i?i(e):e.toString(),q=e=>{if("inline"!==$)return!1;let t=0;L&&L.current&&(t=L.current.getBoundingClientRect().width-60);return dc.getTextWidth(e,"1.125rem 'Open Sans'")>t*w},G=e=>!!lj(m,(t=>dj(t,e))),Z=e=>{if(""===e)U(r);else if(f){const t=f(e);U(t)}else{const t=r.filter((t=>{var n;const r=K(t),i="object"==typeof r?r.title.toLowerCase():r.toLowerCase(),o="string"==typeof r||null===(n=r.secondaryLabel)||void 0===n?void 0:n.toLowerCase(),a=e.trim().toLowerCase();return i.includes(a)||o&&o.includes(a)}));U(t)}},Q=()=>(L&&L.current?L.current.getBoundingClientRect().height:0)+(H.current?H.current.getBoundingClientRect().height:0),J=e=>{if(F&&F.current.contains(e.target))switch(e.code){case"ArrowDown":if(W.current<V.current.length-1){const e=W.current+1;P.current[e].focus(),Y(e)}break;case"ArrowUp":if(W.current>0){const e=W.current-1;P.current[e].focus(),Y(W.current-1)}break;case"Escape":h&&h(!0)}},ee=(e,t)=>{e.preventDefault(),a&&a(t,(e=>o?o(e):e)(t))},te=e=>{const t=e.target.value;_(t),u&&u()},ne=()=>{_(""),z.current.focus(),u&&u()},re=()=>{v&&v()},ie=()=>{S&&S()},oe=t=>e.jsxs(e.Fragment,{children:[e.jsx(yj,Object.assign({$maxLines:w,"aria-hidden":!0},{children:t})),e.jsx(xj,Object.assign({$maxLines:w,"aria-hidden":!0},{children:t}))]}),ae=t=>{const n=K(t),r="string"==typeof n?n:n.title,i="string"==typeof n?void 0:n.secondaryLabel,o=q(r),a=i&&q(i),s=o||a?"next-line":$;return e.jsxs(vj,Object.assign({$labelDisplayType:s},{children:[e.jsx(mj,Object.assign({$truncateType:x,$maxLines:w,$variant:O,"aria-label":r},{children:"middle"===x&&o?oe(r):r})),i&&e.jsx(bj,Object.assign({$truncateType:x,$maxLines:w,$labelDisplayType:$,"aria-label":i},{children:"middle"===x&&a?oe(i):i}))]}))},se=()=>{if(!v||v&&"success"===y)return M.map(((t,n)=>e.jsx(hj,Object.assign({$checked:G(t)&&!g},{children:e.jsxs(pj,Object.assign({$hasNextLineLabel:"next-line"===$&&M.length>0&&i&&"string"!=typeof i(M[0]),onClick:e=>{ee(e,t)},ref:e=>P.current[n]=e,"data-testid":"list-item",type:"button",tabIndex:l?0:-1,$multiSelect:g,onBlur:ie,$variant:O},{children:[g&&e.jsx(wj,{checked:G(t),displaySize:"small"}),j?j(t,{selected:G(t)}):ae(t)]}))}),((e,t)=>`item_${t}__${o?o(e):e}`)(t,n))))},le=()=>{if(g&&M.length>0&&!E&&"success"===y)return e.jsx($j,{children:e.jsx(jj,Object.assign({onClick:b,type:"button",$variant:O},{children:0===m.length?"Select all":"Clear all"}))},"selectAll")},ce=()=>{if(!k&&(E||!c)&&0===M.length&&"success"===y)return e.jsxs(Sj,Object.assign({"data-testid":"list-no-results"},{children:[e.jsx(Cj,{"data-testid":"no-result-icon",$variant:O}),e.jsx(kj,Object.assign({$variant:O},{children:"No results found."}))]}),"noResults")},de=()=>{if(v&&"loading"===y){const t="small"===O?16:24;return e.jsxs(Sj,Object.assign({"data-testid":"list-loading"},{children:[e.jsx(Ks,{$buttonStyle:"secondary",size:t}),e.jsx(kj,Object.assign({$variant:O},{children:"Loading..."}))]}),"loading")}},ue=()=>{if(v&&"fail"===y)return e.jsxs(Sj,Object.assign({"data-testid":"list-fail"},{children:[e.jsx(Cj,{"data-testid":"load-error-icon",$variant:O}),e.jsx(kj,Object.assign({$variant:O},{children:"Failed to load."}))," ",e.jsx(jj,Object.assign({onClick:re,type:"button",$variant:O},{children:"Try again."}))]}),"noResults")};return e.jsx(e.Fragment,{children:e.jsxs(uj,Object.assign({style:B,"data-testid":l?"dropdown-container":"dropdown-container-hidden",ref:F},{children:[(()=>{if(l)return e.jsxs(fj,Object.assign({ref:L,"data-testid":"dropdown-list",width:s,role:"list"},T,{children:[(c||f)&&"success"===y?e.jsx(Mj,{ref:z,onChange:te,value:E,placeholder:d,"data-testid":"search-input","aria-label":"search-input",tabIndex:l?0:-1,onClear:ne,variant:O}):null,le(),ce(),de(),ue(),se()]}))})(),(()=>{if(l&&C)return e.jsx("div",Object.assign({ref:H,"data-testid":"custom-cta"},{children:C(h,M)}))})()]}))})},Aj=K.default.div`
    position: relative;
    display: flex;
    align-items: center;
    margin: 0 1rem;
    ${e=>{if(e.$expanded)return i.css`
                border-bottom: 1px solid ${ts.Neutral[5](e)};
            `}}

    ${e=>e.$readOnly?i.css`
                border: 0;
                margin: 0;
            `:"right"===e.$position?i.css`
                        flex-direction: row-reverse;
                        margin: 0 0 0 1rem;
                    `:i.css`
                        flex-direction: row;
                    `}
`,Nj=K.default(of)`
    padding: 0;
    width: auto;
`,Bj=K.default.div`
    height: calc(3rem - 2px); // exclude top and bottom borders
    display: flex;
    align-items: center;
    padding: 0;
    background: transparent;
    margin-right: 0.75rem;
`,Fj=K.default.div`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: ${Ss.Base};
    margin: 0 0.75rem;
`,Lj=K.default(f.ChevronDownIcon)`
    color: ${ts.Neutral[3]};
    height: ${hs.Body.fontSize}rem;
    width: ${hs.Body.fontSize}rem;
    vertical-align: bottom;
`,Pj=K.default.div`
    display: flex;
    flex: 1 1 auto;
`,zj=K.default(exports.Text.Body)`
    text-align: left;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`,Hj=K.default(zj)`
    color: ${ts.Neutral[3]};
`,Wj=K.default.div`
    width: 1px;
    background: ${ts.Neutral[5]};
    flex-shrink: 0;
    height: 1.25rem;

    ${e=>{if(e.$readOnly)return i.css`
                display: none;
            `}}

    ${e=>"right"===e.$position?i.css`
                    margin: 0 0.75rem;
                `:i.css`
                    margin: 0 0.75rem 0 0;
                `}
`,Vj=Y.default.forwardRef(((n,r)=>{var{addon:i,error:o,onChange:a,readOnly:s,className:l,onBlur:c}=n,d=X(n,["addon","error","onChange","readOnly","className","onBlur"]);const{placeholder:u,options:f,enableSearch:h,searchFunction:p,searchPlaceholder:g,valueExtractor:m,listExtractor:b,displayValueExtractor:v,selectedOption:y,onSelectOption:x,onHideOptions:w,onShowOptions:$,"data-selector-testid":j}=i.attributes,{position:S}=i,[k,C]=t.useState(y),[O,T]=t.useState(!1),D=t.useRef();t.useEffect((()=>{C(y)}),[y]);const I=()=>v?v(k):m?m(k):k.toString(),E=e=>{!e&&w&&w(),e&&$&&$()},_=e=>{e.preventDefault(),d.disabled||(T(!O),E(!O))},M=(e,t)=>{C(e),T(!1),E(!1),D&&D.current.focus(),x&&x(e,t)},R=e=>{a&&a(e)},A=()=>{c&&c()},N=()=>{T(!1),E(!1),D&&D.current.focus()};return e.jsxs(hf,Object.assign({className:l,show:O,error:o&&!O,disabled:d.disabled,readOnly:s,onBlur:()=>{T(!1),E(!1),A()}},{children:[e.jsxs(Aj,Object.assign({$expanded:O,$readOnly:s,$position:S},{children:[s?k?e.jsx(Bj,{children:e.jsx(zj,Object.assign({"data-testid":"selector-label"},{children:I()}))}):null:e.jsx(Nj,Object.assign({ref:D,type:"button",disabled:d.disabled,"data-testid":j||"addon-selector",onClick:_},{children:e.jsxs(e.Fragment,{children:[e.jsxs(Pj,{children:[u&&!k&&e.jsx(Hj,{children:u}),k&&e.jsx(zj,Object.assign({"data-testid":"selector-label"},{children:I()}))]}),e.jsx(Fj,Object.assign({$expanded:O},{children:e.jsx(Lj,{})}))]})})),e.jsx(Wj,{$readOnly:s,$position:S}),e.jsx(Ky,Object.assign({ref:r},d,{readOnly:s,error:o,onChange:R,"data-testid":d["data-testid"]||"input",onBlur:A}))]})),f&&f.length>0?e.jsx(Rj,{listItems:f,selectedItems:y?[y]:[],onSelectItem:M,valueExtractor:m,listExtractor:b,visible:O,enableSearch:h,searchFunction:p,searchPlaceholder:g,"data-testid":"dropdown-list",onBlur:A,onDismiss:N}):null]}))})),Yj=Y.default.forwardRef(((t,n)=>{var{addon:r,error:i,className:o}=t,a=X(t,["addon","error","className"]);const s=()=>e.jsx(Uy,Object.assign({disabled:a.disabled,$error:i,$readOnly:a.readOnly,"data-testid":a["data-testid"],className:o},{children:e.jsx(Ky,Object.assign({ref:n},a,{"data-testid":"input"}))}));if(!r)return s();{const{type:t="label",position:l="left"}=r,{allowClear:c}=a;switch(t){case"list":{const t=r.attributes;return t.options&&t.options.length>0?e.jsx(Vj,Object.assign({ref:n,addon:r,error:i,className:o},a)):s()}case"custom":{const t=r.attributes;return t.children?e.jsxs(Sf,Object.assign({$error:i,$disabled:a.disabled,$readOnly:a.readOnly,"data-testid":a["data-testid"],$position:l,className:o},{children:[e.jsx(qy,Object.assign({"data-testid":"addon",disabled:a.disabled,$readOnly:a.readOnly,$position:l},{children:t.children})),e.jsx(Ky,Object.assign({ref:n},a,{allowClear:c&&"right"!==l,error:i,"data-testid":"input"}))]})):s()}default:{const t=r.attributes;return t.value?e.jsxs(Sf,Object.assign({$disabled:a.disabled,$error:i,$readOnly:a.readOnly,"data-testid":a["data-testid"],$position:l,className:o},{children:[e.jsx(qy,Object.assign({"data-testid":"addon",disabled:a.disabled,$readOnly:a.readOnly,$position:l},{children:t.value})),e.jsx(Ky,Object.assign({ref:n},a,{allowClear:c&&"right"!==l,error:i,"data-testid":"input"}))]})):s()}}}})),Uj=Y.default.forwardRef(((t,n)=>{const{label:r,errorMessage:i,id:o="form-field-group","data-error-testid":a,"data-testid":s,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u}=t,f=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e.jsx(gy,Object.assign({id:o,label:r,errorMessage:i,disabled:f.disabled,"data-error-testid":a,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u},{children:e.jsx(Yj,Object.assign({ref:n,id:`${o}-base`,"data-testid":s||o,error:!!i},f))}))})),Kj=K.default(Yj)`
    padding: 0 0 0 ${({readOnly:e})=>e?"0":"1rem"};
    input {
        cursor: ${({readOnly:e,$isDisabled:t})=>e&&!t?"pointer":"initial"};
    }
`,qj=K.default.div`
    display: flex;
    height: calc(3rem - 2px);
    width: 3.25rem;
    align-items: center;
    justify-content: center;
    cursor: ${({$isDisabled:e})=>e?"initial":"pointer"};
    color: ${({$isDisabled:e,$inactiveColor:t=ts.Neutral[3],$activeColor:n=ts.Primary})=>e?t:n};

    svg {
        width: 1.125rem;
        height: 1.125rem;
    }
`,Xj=K.default.div`
    display: flex;
    align-items: center;
    height: 3rem;
`,Gj=K.default(exports.Text.Body)`
    color: ${ts.Neutral[3]};
`,Zj=K.default(Vs)`
    margin-right: 0.5rem;
    #inner1,
    #inner2,
    #inner3,
    #inner4 {
        border-color: ${ts.Neutral[3]} transparent transparent transparent;
    }
`,Qj=K.default(exports.Text.Body)`
    color: ${ts.Primary};
    text-decoration: underline;
`,Jj=K.default.div`
    display: flex;
    align-items: center;
    margin-right: 0.5rem;
`,eS=K.default(j.ExclamationTriangleIcon)`
    color: ${ts.Validation.Orange.Icon};
    margin-right: 0.5rem;
    height: 1.125rem;
    width: 1.125rem;
`,tS=K.default(exports.Text.Body)`
    color: ${ts.Validation.Orange.Text};
`,nS=K.default.button`
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: none;
    background: transparent;
    cursor: pointer;

    :hover,
    :active,
    :focus {
        ${Qj} {
            color: ${ts.Secondary};
        }
    }
`;var rS={exports:{}};
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */!function(e,t){(function(){var n,r="Expected a function",i="__lodash_hash_undefined__",o="__lodash_placeholder__",a=16,s=32,l=64,c=128,d=256,u=1/0,f=9007199254740991,h=NaN,p=4294967295,g=[["ary",c],["bind",1],["bindKey",2],["curry",8],["curryRight",a],["flip",512],["partial",s],["partialRight",l],["rearg",d]],m="[object Arguments]",b="[object Array]",v="[object Boolean]",y="[object Date]",x="[object Error]",w="[object Function]",$="[object GeneratorFunction]",j="[object Map]",S="[object Number]",k="[object Object]",C="[object Promise]",O="[object RegExp]",T="[object Set]",D="[object String]",I="[object Symbol]",E="[object WeakMap]",_="[object ArrayBuffer]",M="[object DataView]",R="[object Float32Array]",A="[object Float64Array]",N="[object Int8Array]",B="[object Int16Array]",F="[object Int32Array]",L="[object Uint8Array]",P="[object Uint8ClampedArray]",z="[object Uint16Array]",H="[object Uint32Array]",W=/\b__p \+= '';/g,V=/\b(__p \+=) '' \+/g,Y=/(__e\(.*?\)|\b__t\)) \+\n'';/g,U=/&(?:amp|lt|gt|quot|#39);/g,K=/[&<>"']/g,q=RegExp(U.source),X=RegExp(K.source),G=/<%-([\s\S]+?)%>/g,Z=/<%([\s\S]+?)%>/g,Q=/<%=([\s\S]+?)%>/g,J=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ee=/^\w*$/,te=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ne=/[\\^$.*+?()[\]{}|]/g,re=RegExp(ne.source),ie=/^\s+/,oe=/\s/,ae=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,se=/\{\n\/\* \[wrapped with (.+)\] \*/,le=/,? & /,ce=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,de=/[()=,{}\[\]\/\s]/,ue=/\\(\\)?/g,fe=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,he=/\w*$/,pe=/^[-+]0x[0-9a-f]+$/i,ge=/^0b[01]+$/i,me=/^\[object .+?Constructor\]$/,be=/^0o[0-7]+$/i,ve=/^(?:0|[1-9]\d*)$/,ye=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,xe=/($^)/,we=/['\n\r\u2028\u2029\\]/g,$e="\\ud800-\\udfff",je="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",Se="\\u2700-\\u27bf",ke="a-z\\xdf-\\xf6\\xf8-\\xff",Ce="A-Z\\xc0-\\xd6\\xd8-\\xde",Oe="\\ufe0e\\ufe0f",Te="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",De="['’]",Ie="["+$e+"]",Ee="["+Te+"]",_e="["+je+"]",Me="\\d+",Re="["+Se+"]",Ae="["+ke+"]",Ne="[^"+$e+Te+Me+Se+ke+Ce+"]",Be="\\ud83c[\\udffb-\\udfff]",Fe="[^"+$e+"]",Le="(?:\\ud83c[\\udde6-\\uddff]){2}",Pe="[\\ud800-\\udbff][\\udc00-\\udfff]",ze="["+Ce+"]",He="\\u200d",We="(?:"+Ae+"|"+Ne+")",Ve="(?:"+ze+"|"+Ne+")",Ye="(?:['’](?:d|ll|m|re|s|t|ve))?",Ue="(?:['’](?:D|LL|M|RE|S|T|VE))?",Ke="(?:"+_e+"|"+Be+")"+"?",qe="["+Oe+"]?",Xe=qe+Ke+("(?:"+He+"(?:"+[Fe,Le,Pe].join("|")+")"+qe+Ke+")*"),Ge="(?:"+[Re,Le,Pe].join("|")+")"+Xe,Ze="(?:"+[Fe+_e+"?",_e,Le,Pe,Ie].join("|")+")",Qe=RegExp(De,"g"),Je=RegExp(_e,"g"),et=RegExp(Be+"(?="+Be+")|"+Ze+Xe,"g"),tt=RegExp([ze+"?"+Ae+"+"+Ye+"(?="+[Ee,ze,"$"].join("|")+")",Ve+"+"+Ue+"(?="+[Ee,ze+We,"$"].join("|")+")",ze+"?"+We+"+"+Ye,ze+"+"+Ue,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Me,Ge].join("|"),"g"),nt=RegExp("["+He+$e+je+Oe+"]"),rt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,it=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],ot=-1,at={};at[R]=at[A]=at[N]=at[B]=at[F]=at[L]=at[P]=at[z]=at[H]=!0,at[m]=at[b]=at[_]=at[v]=at[M]=at[y]=at[x]=at[w]=at[j]=at[S]=at[k]=at[O]=at[T]=at[D]=at[E]=!1;var st={};st[m]=st[b]=st[_]=st[M]=st[v]=st[y]=st[R]=st[A]=st[N]=st[B]=st[F]=st[j]=st[S]=st[k]=st[O]=st[T]=st[D]=st[I]=st[L]=st[P]=st[z]=st[H]=!0,st[x]=st[w]=st[E]=!1;var lt={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},ct=parseFloat,dt=parseInt,ut="object"==typeof Di&&Di&&Di.Object===Object&&Di,ft="object"==typeof self&&self&&self.Object===Object&&self,ht=ut||ft||Function("return this")(),pt=t&&!t.nodeType&&t,gt=pt&&e&&!e.nodeType&&e,mt=gt&&gt.exports===pt,bt=mt&&ut.process,vt=function(){try{var e=gt&&gt.require&&gt.require("util").types;return e||bt&&bt.binding&&bt.binding("util")}catch(e){}}(),yt=vt&&vt.isArrayBuffer,xt=vt&&vt.isDate,wt=vt&&vt.isMap,$t=vt&&vt.isRegExp,jt=vt&&vt.isSet,St=vt&&vt.isTypedArray;function kt(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}function Ct(e,t,n,r){for(var i=-1,o=null==e?0:e.length;++i<o;){var a=e[i];t(r,a,n(a),e)}return r}function Ot(e,t){for(var n=-1,r=null==e?0:e.length;++n<r&&!1!==t(e[n],n,e););return e}function Tt(e,t){for(var n=null==e?0:e.length;n--&&!1!==t(e[n],n,e););return e}function Dt(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(!t(e[n],n,e))return!1;return!0}function It(e,t){for(var n=-1,r=null==e?0:e.length,i=0,o=[];++n<r;){var a=e[n];t(a,n,e)&&(o[i++]=a)}return o}function Et(e,t){return!!(null==e?0:e.length)&&zt(e,t,0)>-1}function _t(e,t,n){for(var r=-1,i=null==e?0:e.length;++r<i;)if(n(t,e[r]))return!0;return!1}function Mt(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i}function Rt(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e}function At(e,t,n,r){var i=-1,o=null==e?0:e.length;for(r&&o&&(n=e[++i]);++i<o;)n=t(n,e[i],i,e);return n}function Nt(e,t,n,r){var i=null==e?0:e.length;for(r&&i&&(n=e[--i]);i--;)n=t(n,e[i],i,e);return n}function Bt(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1}var Ft=Yt("length");function Lt(e,t,n){var r;return n(e,(function(e,n,i){if(t(e,n,i))return r=n,!1})),r}function Pt(e,t,n,r){for(var i=e.length,o=n+(r?1:-1);r?o--:++o<i;)if(t(e[o],o,e))return o;return-1}function zt(e,t,n){return t==t?function(e,t,n){var r=n-1,i=e.length;for(;++r<i;)if(e[r]===t)return r;return-1}(e,t,n):Pt(e,Wt,n)}function Ht(e,t,n,r){for(var i=n-1,o=e.length;++i<o;)if(r(e[i],t))return i;return-1}function Wt(e){return e!=e}function Vt(e,t){var n=null==e?0:e.length;return n?qt(e,t)/n:h}function Yt(e){return function(t){return null==t?n:t[e]}}function Ut(e){return function(t){return null==e?n:e[t]}}function Kt(e,t,n,r,i){return i(e,(function(e,i,o){n=r?(r=!1,e):t(n,e,i,o)})),n}function qt(e,t){for(var r,i=-1,o=e.length;++i<o;){var a=t(e[i]);a!==n&&(r=r===n?a:r+a)}return r}function Xt(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}function Gt(e){return e?e.slice(0,pn(e)+1).replace(ie,""):e}function Zt(e){return function(t){return e(t)}}function Qt(e,t){return Mt(t,(function(t){return e[t]}))}function Jt(e,t){return e.has(t)}function en(e,t){for(var n=-1,r=e.length;++n<r&&zt(t,e[n],0)>-1;);return n}function tn(e,t){for(var n=e.length;n--&&zt(t,e[n],0)>-1;);return n}var nn=Ut({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),rn=Ut({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});function on(e){return"\\"+lt[e]}function an(e){return nt.test(e)}function sn(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r){n[++t]=[r,e]})),n}function ln(e,t){return function(n){return e(t(n))}}function cn(e,t){for(var n=-1,r=e.length,i=0,a=[];++n<r;){var s=e[n];s!==t&&s!==o||(e[n]=o,a[i++]=n)}return a}function dn(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n}function un(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=[e,e]})),n}function fn(e){return an(e)?function(e){var t=et.lastIndex=0;for(;et.test(e);)++t;return t}(e):Ft(e)}function hn(e){return an(e)?function(e){return e.match(et)||[]}(e):function(e){return e.split("")}(e)}function pn(e){for(var t=e.length;t--&&oe.test(e.charAt(t)););return t}var gn=Ut({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"});var mn=function e(t){var oe=(t=null==t?ht:mn.defaults(ht.Object(),t,mn.pick(ht,it))).Array,$e=t.Date,je=t.Error,Se=t.Function,ke=t.Math,Ce=t.Object,Oe=t.RegExp,Te=t.String,De=t.TypeError,Ie=oe.prototype,Ee=Se.prototype,_e=Ce.prototype,Me=t["__core-js_shared__"],Re=Ee.toString,Ae=_e.hasOwnProperty,Ne=0,Be=function(){var e=/[^.]+$/.exec(Me&&Me.keys&&Me.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),Fe=_e.toString,Le=Re.call(Ce),Pe=ht._,ze=Oe("^"+Re.call(Ae).replace(ne,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),He=mt?t.Buffer:n,We=t.Symbol,Ve=t.Uint8Array,Ye=He?He.allocUnsafe:n,Ue=ln(Ce.getPrototypeOf,Ce),Ke=Ce.create,qe=_e.propertyIsEnumerable,Xe=Ie.splice,Ge=We?We.isConcatSpreadable:n,Ze=We?We.iterator:n,et=We?We.toStringTag:n,nt=function(){try{var e=fo(Ce,"defineProperty");return e({},"",{}),e}catch(e){}}(),lt=t.clearTimeout!==ht.clearTimeout&&t.clearTimeout,ut=$e&&$e.now!==ht.Date.now&&$e.now,ft=t.setTimeout!==ht.setTimeout&&t.setTimeout,pt=ke.ceil,gt=ke.floor,bt=Ce.getOwnPropertySymbols,vt=He?He.isBuffer:n,Ft=t.isFinite,Ut=Ie.join,bn=ln(Ce.keys,Ce),vn=ke.max,yn=ke.min,xn=$e.now,wn=t.parseInt,$n=ke.random,jn=Ie.reverse,Sn=fo(t,"DataView"),kn=fo(t,"Map"),Cn=fo(t,"Promise"),On=fo(t,"Set"),Tn=fo(t,"WeakMap"),Dn=fo(Ce,"create"),In=Tn&&new Tn,En={},_n=Fo(Sn),Mn=Fo(kn),Rn=Fo(Cn),An=Fo(On),Nn=Fo(Tn),Bn=We?We.prototype:n,Fn=Bn?Bn.valueOf:n,Ln=Bn?Bn.toString:n;function Pn(e){if(ts(e)&&!Va(e)&&!(e instanceof Vn)){if(e instanceof Wn)return e;if(Ae.call(e,"__wrapped__"))return Lo(e)}return new Wn(e)}var zn=function(){function e(){}return function(t){if(!es(t))return{};if(Ke)return Ke(t);e.prototype=t;var r=new e;return e.prototype=n,r}}();function Hn(){}function Wn(e,t){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=n}function Vn(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=p,this.__views__=[]}function Yn(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Un(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Kn(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function qn(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new Kn;++t<n;)this.add(e[t])}function Xn(e){var t=this.__data__=new Un(e);this.size=t.size}function Gn(e,t){var n=Va(e),r=!n&&Wa(e),i=!n&&!r&&qa(e),o=!n&&!r&&!i&&cs(e),a=n||r||i||o,s=a?Xt(e.length,Te):[],l=s.length;for(var c in e)!t&&!Ae.call(e,c)||a&&("length"==c||i&&("offset"==c||"parent"==c)||o&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||yo(c,l))||s.push(c);return s}function Zn(e){var t=e.length;return t?e[qr(0,t-1)]:n}function Qn(e,t){return Ao(Di(e),sr(t,0,e.length))}function Jn(e){return Ao(Di(e))}function er(e,t,r){(r!==n&&!Pa(e[t],r)||r===n&&!(t in e))&&or(e,t,r)}function tr(e,t,r){var i=e[t];Ae.call(e,t)&&Pa(i,r)&&(r!==n||t in e)||or(e,t,r)}function nr(e,t){for(var n=e.length;n--;)if(Pa(e[n][0],t))return n;return-1}function rr(e,t,n,r){return fr(e,(function(e,i,o){t(r,e,n(e),o)})),r}function ir(e,t){return e&&Ii(t,Es(t),e)}function or(e,t,n){"__proto__"==t&&nt?nt(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}function ar(e,t){for(var r=-1,i=t.length,o=oe(i),a=null==e;++r<i;)o[r]=a?n:Cs(e,t[r]);return o}function sr(e,t,r){return e==e&&(r!==n&&(e=e<=r?e:r),t!==n&&(e=e>=t?e:t)),e}function lr(e,t,r,i,o,a){var s,l=1&t,c=2&t,d=4&t;if(r&&(s=o?r(e,i,o,a):r(e)),s!==n)return s;if(!es(e))return e;var u=Va(e);if(u){if(s=function(e){var t=e.length,n=new e.constructor(t);t&&"string"==typeof e[0]&&Ae.call(e,"index")&&(n.index=e.index,n.input=e.input);return n}(e),!l)return Di(e,s)}else{var f=go(e),h=f==w||f==$;if(qa(e))return ji(e,l);if(f==k||f==m||h&&!o){if(s=c||h?{}:bo(e),!l)return c?function(e,t){return Ii(e,po(e),t)}(e,function(e,t){return e&&Ii(t,_s(t),e)}(s,e)):function(e,t){return Ii(e,ho(e),t)}(e,ir(s,e))}else{if(!st[f])return o?e:{};s=function(e,t,n){var r=e.constructor;switch(t){case _:return Si(e);case v:case y:return new r(+e);case M:return function(e,t){var n=t?Si(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}(e,n);case R:case A:case N:case B:case F:case L:case P:case z:case H:return ki(e,n);case j:return new r;case S:case D:return new r(e);case O:return function(e){var t=new e.constructor(e.source,he.exec(e));return t.lastIndex=e.lastIndex,t}(e);case T:return new r;case I:return i=e,Fn?Ce(Fn.call(i)):{}}var i}(e,f,l)}}a||(a=new Xn);var p=a.get(e);if(p)return p;a.set(e,s),as(e)?e.forEach((function(n){s.add(lr(n,t,r,n,e,a))})):ns(e)&&e.forEach((function(n,i){s.set(i,lr(n,t,r,i,e,a))}));var g=u?n:(d?c?io:ro:c?_s:Es)(e);return Ot(g||e,(function(n,i){g&&(n=e[i=n]),tr(s,i,lr(n,t,r,i,e,a))})),s}function cr(e,t,r){var i=r.length;if(null==e)return!i;for(e=Ce(e);i--;){var o=r[i],a=t[o],s=e[o];if(s===n&&!(o in e)||!a(s))return!1}return!0}function dr(e,t,i){if("function"!=typeof e)throw new De(r);return Eo((function(){e.apply(n,i)}),t)}function ur(e,t,n,r){var i=-1,o=Et,a=!0,s=e.length,l=[],c=t.length;if(!s)return l;n&&(t=Mt(t,Zt(n))),r?(o=_t,a=!1):t.length>=200&&(o=Jt,a=!1,t=new qn(t));e:for(;++i<s;){var d=e[i],u=null==n?d:n(d);if(d=r||0!==d?d:0,a&&u==u){for(var f=c;f--;)if(t[f]===u)continue e;l.push(d)}else o(t,u,r)||l.push(d)}return l}Pn.templateSettings={escape:G,evaluate:Z,interpolate:Q,variable:"",imports:{_:Pn}},Pn.prototype=Hn.prototype,Pn.prototype.constructor=Pn,Wn.prototype=zn(Hn.prototype),Wn.prototype.constructor=Wn,Vn.prototype=zn(Hn.prototype),Vn.prototype.constructor=Vn,Yn.prototype.clear=function(){this.__data__=Dn?Dn(null):{},this.size=0},Yn.prototype.delete=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Yn.prototype.get=function(e){var t=this.__data__;if(Dn){var r=t[e];return r===i?n:r}return Ae.call(t,e)?t[e]:n},Yn.prototype.has=function(e){var t=this.__data__;return Dn?t[e]!==n:Ae.call(t,e)},Yn.prototype.set=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=Dn&&t===n?i:t,this},Un.prototype.clear=function(){this.__data__=[],this.size=0},Un.prototype.delete=function(e){var t=this.__data__,n=nr(t,e);return!(n<0)&&(n==t.length-1?t.pop():Xe.call(t,n,1),--this.size,!0)},Un.prototype.get=function(e){var t=this.__data__,r=nr(t,e);return r<0?n:t[r][1]},Un.prototype.has=function(e){return nr(this.__data__,e)>-1},Un.prototype.set=function(e,t){var n=this.__data__,r=nr(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this},Kn.prototype.clear=function(){this.size=0,this.__data__={hash:new Yn,map:new(kn||Un),string:new Yn}},Kn.prototype.delete=function(e){var t=co(this,e).delete(e);return this.size-=t?1:0,t},Kn.prototype.get=function(e){return co(this,e).get(e)},Kn.prototype.has=function(e){return co(this,e).has(e)},Kn.prototype.set=function(e,t){var n=co(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this},qn.prototype.add=qn.prototype.push=function(e){return this.__data__.set(e,i),this},qn.prototype.has=function(e){return this.__data__.has(e)},Xn.prototype.clear=function(){this.__data__=new Un,this.size=0},Xn.prototype.delete=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n},Xn.prototype.get=function(e){return this.__data__.get(e)},Xn.prototype.has=function(e){return this.__data__.has(e)},Xn.prototype.set=function(e,t){var n=this.__data__;if(n instanceof Un){var r=n.__data__;if(!kn||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new Kn(r)}return n.set(e,t),this.size=n.size,this};var fr=Mi(xr),hr=Mi(wr,!0);function pr(e,t){var n=!0;return fr(e,(function(e,r,i){return n=!!t(e,r,i)})),n}function gr(e,t,r){for(var i=-1,o=e.length;++i<o;){var a=e[i],s=t(a);if(null!=s&&(l===n?s==s&&!ls(s):r(s,l)))var l=s,c=a}return c}function mr(e,t){var n=[];return fr(e,(function(e,r,i){t(e,r,i)&&n.push(e)})),n}function br(e,t,n,r,i){var o=-1,a=e.length;for(n||(n=vo),i||(i=[]);++o<a;){var s=e[o];t>0&&n(s)?t>1?br(s,t-1,n,r,i):Rt(i,s):r||(i[i.length]=s)}return i}var vr=Ri(),yr=Ri(!0);function xr(e,t){return e&&vr(e,t,Es)}function wr(e,t){return e&&yr(e,t,Es)}function $r(e,t){return It(t,(function(t){return Za(e[t])}))}function jr(e,t){for(var r=0,i=(t=yi(t,e)).length;null!=e&&r<i;)e=e[Bo(t[r++])];return r&&r==i?e:n}function Sr(e,t,n){var r=t(e);return Va(e)?r:Rt(r,n(e))}function kr(e){return null==e?e===n?"[object Undefined]":"[object Null]":et&&et in Ce(e)?function(e){var t=Ae.call(e,et),r=e[et];try{e[et]=n;var i=!0}catch(e){}var o=Fe.call(e);i&&(t?e[et]=r:delete e[et]);return o}(e):function(e){return Fe.call(e)}(e)}function Cr(e,t){return e>t}function Or(e,t){return null!=e&&Ae.call(e,t)}function Tr(e,t){return null!=e&&t in Ce(e)}function Dr(e,t,r){for(var i=r?_t:Et,o=e[0].length,a=e.length,s=a,l=oe(a),c=1/0,d=[];s--;){var u=e[s];s&&t&&(u=Mt(u,Zt(t))),c=yn(u.length,c),l[s]=!r&&(t||o>=120&&u.length>=120)?new qn(s&&u):n}u=e[0];var f=-1,h=l[0];e:for(;++f<o&&d.length<c;){var p=u[f],g=t?t(p):p;if(p=r||0!==p?p:0,!(h?Jt(h,g):i(d,g,r))){for(s=a;--s;){var m=l[s];if(!(m?Jt(m,g):i(e[s],g,r)))continue e}h&&h.push(g),d.push(p)}}return d}function Ir(e,t,r){var i=null==(e=To(e,t=yi(t,e)))?e:e[Bo(Go(t))];return null==i?n:kt(i,e,r)}function Er(e){return ts(e)&&kr(e)==m}function _r(e,t,r,i,o){return e===t||(null==e||null==t||!ts(e)&&!ts(t)?e!=e&&t!=t:function(e,t,r,i,o,a){var s=Va(e),l=Va(t),c=s?b:go(e),d=l?b:go(t),u=(c=c==m?k:c)==k,f=(d=d==m?k:d)==k,h=c==d;if(h&&qa(e)){if(!qa(t))return!1;s=!0,u=!1}if(h&&!u)return a||(a=new Xn),s||cs(e)?to(e,t,r,i,o,a):function(e,t,n,r,i,o,a){switch(n){case M:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case _:return!(e.byteLength!=t.byteLength||!o(new Ve(e),new Ve(t)));case v:case y:case S:return Pa(+e,+t);case x:return e.name==t.name&&e.message==t.message;case O:case D:return e==t+"";case j:var s=sn;case T:var l=1&r;if(s||(s=dn),e.size!=t.size&&!l)return!1;var c=a.get(e);if(c)return c==t;r|=2,a.set(e,t);var d=to(s(e),s(t),r,i,o,a);return a.delete(e),d;case I:if(Fn)return Fn.call(e)==Fn.call(t)}return!1}(e,t,c,r,i,o,a);if(!(1&r)){var p=u&&Ae.call(e,"__wrapped__"),g=f&&Ae.call(t,"__wrapped__");if(p||g){var w=p?e.value():e,$=g?t.value():t;return a||(a=new Xn),o(w,$,r,i,a)}}if(!h)return!1;return a||(a=new Xn),function(e,t,r,i,o,a){var s=1&r,l=ro(e),c=l.length,d=ro(t),u=d.length;if(c!=u&&!s)return!1;var f=c;for(;f--;){var h=l[f];if(!(s?h in t:Ae.call(t,h)))return!1}var p=a.get(e),g=a.get(t);if(p&&g)return p==t&&g==e;var m=!0;a.set(e,t),a.set(t,e);var b=s;for(;++f<c;){var v=e[h=l[f]],y=t[h];if(i)var x=s?i(y,v,h,t,e,a):i(v,y,h,e,t,a);if(!(x===n?v===y||o(v,y,r,i,a):x)){m=!1;break}b||(b="constructor"==h)}if(m&&!b){var w=e.constructor,$=t.constructor;w==$||!("constructor"in e)||!("constructor"in t)||"function"==typeof w&&w instanceof w&&"function"==typeof $&&$ instanceof $||(m=!1)}return a.delete(e),a.delete(t),m}(e,t,r,i,o,a)}(e,t,r,i,_r,o))}function Mr(e,t,r,i){var o=r.length,a=o,s=!i;if(null==e)return!a;for(e=Ce(e);o--;){var l=r[o];if(s&&l[2]?l[1]!==e[l[0]]:!(l[0]in e))return!1}for(;++o<a;){var c=(l=r[o])[0],d=e[c],u=l[1];if(s&&l[2]){if(d===n&&!(c in e))return!1}else{var f=new Xn;if(i)var h=i(d,u,c,e,t,f);if(!(h===n?_r(u,d,3,i,f):h))return!1}}return!0}function Rr(e){return!(!es(e)||(t=e,Be&&Be in t))&&(Za(e)?ze:me).test(Fo(e));var t}function Ar(e){return"function"==typeof e?e:null==e?rl:"object"==typeof e?Va(e)?zr(e[0],e[1]):Pr(e):fl(e)}function Nr(e){if(!So(e))return bn(e);var t=[];for(var n in Ce(e))Ae.call(e,n)&&"constructor"!=n&&t.push(n);return t}function Br(e){if(!es(e))return function(e){var t=[];if(null!=e)for(var n in Ce(e))t.push(n);return t}(e);var t=So(e),n=[];for(var r in e)("constructor"!=r||!t&&Ae.call(e,r))&&n.push(r);return n}function Fr(e,t){return e<t}function Lr(e,t){var n=-1,r=Ua(e)?oe(e.length):[];return fr(e,(function(e,i,o){r[++n]=t(e,i,o)})),r}function Pr(e){var t=uo(e);return 1==t.length&&t[0][2]?Co(t[0][0],t[0][1]):function(n){return n===e||Mr(n,e,t)}}function zr(e,t){return wo(e)&&ko(t)?Co(Bo(e),t):function(r){var i=Cs(r,e);return i===n&&i===t?Os(r,e):_r(t,i,3)}}function Hr(e,t,r,i,o){e!==t&&vr(t,(function(a,s){if(o||(o=new Xn),es(a))!function(e,t,r,i,o,a,s){var l=Do(e,r),c=Do(t,r),d=s.get(c);if(d)return void er(e,r,d);var u=a?a(l,c,r+"",e,t,s):n,f=u===n;if(f){var h=Va(c),p=!h&&qa(c),g=!h&&!p&&cs(c);u=c,h||p||g?Va(l)?u=l:Ka(l)?u=Di(l):p?(f=!1,u=ji(c,!0)):g?(f=!1,u=ki(c,!0)):u=[]:is(c)||Wa(c)?(u=l,Wa(l)?u=bs(l):es(l)&&!Za(l)||(u=bo(c))):f=!1}f&&(s.set(c,u),o(u,c,i,a,s),s.delete(c));er(e,r,u)}(e,t,s,r,Hr,i,o);else{var l=i?i(Do(e,s),a,s+"",e,t,o):n;l===n&&(l=a),er(e,s,l)}}),_s)}function Wr(e,t){var r=e.length;if(r)return yo(t+=t<0?r:0,r)?e[t]:n}function Vr(e,t,n){t=t.length?Mt(t,(function(e){return Va(e)?function(t){return jr(t,1===e.length?e[0]:e)}:e})):[rl];var r=-1;t=Mt(t,Zt(lo()));var i=Lr(e,(function(e,n,i){var o=Mt(t,(function(t){return t(e)}));return{criteria:o,index:++r,value:e}}));return function(e,t){var n=e.length;for(e.sort(t);n--;)e[n]=e[n].value;return e}(i,(function(e,t){return function(e,t,n){var r=-1,i=e.criteria,o=t.criteria,a=i.length,s=n.length;for(;++r<a;){var l=Ci(i[r],o[r]);if(l)return r>=s?l:l*("desc"==n[r]?-1:1)}return e.index-t.index}(e,t,n)}))}function Yr(e,t,n){for(var r=-1,i=t.length,o={};++r<i;){var a=t[r],s=jr(e,a);n(s,a)&&Jr(o,yi(a,e),s)}return o}function Ur(e,t,n,r){var i=r?Ht:zt,o=-1,a=t.length,s=e;for(e===t&&(t=Di(t)),n&&(s=Mt(e,Zt(n)));++o<a;)for(var l=0,c=t[o],d=n?n(c):c;(l=i(s,d,l,r))>-1;)s!==e&&Xe.call(s,l,1),Xe.call(e,l,1);return e}function Kr(e,t){for(var n=e?t.length:0,r=n-1;n--;){var i=t[n];if(n==r||i!==o){var o=i;yo(i)?Xe.call(e,i,1):ui(e,i)}}return e}function qr(e,t){return e+gt($n()*(t-e+1))}function Xr(e,t){var n="";if(!e||t<1||t>f)return n;do{t%2&&(n+=e),(t=gt(t/2))&&(e+=e)}while(t);return n}function Gr(e,t){return _o(Oo(e,t,rl),e+"")}function Zr(e){return Zn(Ps(e))}function Qr(e,t){var n=Ps(e);return Ao(n,sr(t,0,n.length))}function Jr(e,t,r,i){if(!es(e))return e;for(var o=-1,a=(t=yi(t,e)).length,s=a-1,l=e;null!=l&&++o<a;){var c=Bo(t[o]),d=r;if("__proto__"===c||"constructor"===c||"prototype"===c)return e;if(o!=s){var u=l[c];(d=i?i(u,c,l):n)===n&&(d=es(u)?u:yo(t[o+1])?[]:{})}tr(l,c,d),l=l[c]}return e}var ei=In?function(e,t){return In.set(e,t),e}:rl,ti=nt?function(e,t){return nt(e,"toString",{configurable:!0,enumerable:!1,value:el(t),writable:!0})}:rl;function ni(e){return Ao(Ps(e))}function ri(e,t,n){var r=-1,i=e.length;t<0&&(t=-t>i?0:i+t),(n=n>i?i:n)<0&&(n+=i),i=t>n?0:n-t>>>0,t>>>=0;for(var o=oe(i);++r<i;)o[r]=e[r+t];return o}function ii(e,t){var n;return fr(e,(function(e,r,i){return!(n=t(e,r,i))})),!!n}function oi(e,t,n){var r=0,i=null==e?r:e.length;if("number"==typeof t&&t==t&&i<=2147483647){for(;r<i;){var o=r+i>>>1,a=e[o];null!==a&&!ls(a)&&(n?a<=t:a<t)?r=o+1:i=o}return i}return ai(e,t,rl,n)}function ai(e,t,r,i){var o=0,a=null==e?0:e.length;if(0===a)return 0;for(var s=(t=r(t))!=t,l=null===t,c=ls(t),d=t===n;o<a;){var u=gt((o+a)/2),f=r(e[u]),h=f!==n,p=null===f,g=f==f,m=ls(f);if(s)var b=i||g;else b=d?g&&(i||h):l?g&&h&&(i||!p):c?g&&h&&!p&&(i||!m):!p&&!m&&(i?f<=t:f<t);b?o=u+1:a=u}return yn(a,4294967294)}function si(e,t){for(var n=-1,r=e.length,i=0,o=[];++n<r;){var a=e[n],s=t?t(a):a;if(!n||!Pa(s,l)){var l=s;o[i++]=0===a?0:a}}return o}function li(e){return"number"==typeof e?e:ls(e)?h:+e}function ci(e){if("string"==typeof e)return e;if(Va(e))return Mt(e,ci)+"";if(ls(e))return Ln?Ln.call(e):"";var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function di(e,t,n){var r=-1,i=Et,o=e.length,a=!0,s=[],l=s;if(n)a=!1,i=_t;else if(o>=200){var c=t?null:Xi(e);if(c)return dn(c);a=!1,i=Jt,l=new qn}else l=t?[]:s;e:for(;++r<o;){var d=e[r],u=t?t(d):d;if(d=n||0!==d?d:0,a&&u==u){for(var f=l.length;f--;)if(l[f]===u)continue e;t&&l.push(u),s.push(d)}else i(l,u,n)||(l!==s&&l.push(u),s.push(d))}return s}function ui(e,t){return null==(e=To(e,t=yi(t,e)))||delete e[Bo(Go(t))]}function fi(e,t,n,r){return Jr(e,t,n(jr(e,t)),r)}function hi(e,t,n,r){for(var i=e.length,o=r?i:-1;(r?o--:++o<i)&&t(e[o],o,e););return n?ri(e,r?0:o,r?o+1:i):ri(e,r?o+1:0,r?i:o)}function pi(e,t){var n=e;return n instanceof Vn&&(n=n.value()),At(t,(function(e,t){return t.func.apply(t.thisArg,Rt([e],t.args))}),n)}function gi(e,t,n){var r=e.length;if(r<2)return r?di(e[0]):[];for(var i=-1,o=oe(r);++i<r;)for(var a=e[i],s=-1;++s<r;)s!=i&&(o[i]=ur(o[i]||a,e[s],t,n));return di(br(o,1),t,n)}function mi(e,t,r){for(var i=-1,o=e.length,a=t.length,s={};++i<o;){var l=i<a?t[i]:n;r(s,e[i],l)}return s}function bi(e){return Ka(e)?e:[]}function vi(e){return"function"==typeof e?e:rl}function yi(e,t){return Va(e)?e:wo(e,t)?[e]:No(vs(e))}var xi=Gr;function wi(e,t,r){var i=e.length;return r=r===n?i:r,!t&&r>=i?e:ri(e,t,r)}var $i=lt||function(e){return ht.clearTimeout(e)};function ji(e,t){if(t)return e.slice();var n=e.length,r=Ye?Ye(n):new e.constructor(n);return e.copy(r),r}function Si(e){var t=new e.constructor(e.byteLength);return new Ve(t).set(new Ve(e)),t}function ki(e,t){var n=t?Si(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}function Ci(e,t){if(e!==t){var r=e!==n,i=null===e,o=e==e,a=ls(e),s=t!==n,l=null===t,c=t==t,d=ls(t);if(!l&&!d&&!a&&e>t||a&&s&&c&&!l&&!d||i&&s&&c||!r&&c||!o)return 1;if(!i&&!a&&!d&&e<t||d&&r&&o&&!i&&!a||l&&r&&o||!s&&o||!c)return-1}return 0}function Oi(e,t,n,r){for(var i=-1,o=e.length,a=n.length,s=-1,l=t.length,c=vn(o-a,0),d=oe(l+c),u=!r;++s<l;)d[s]=t[s];for(;++i<a;)(u||i<o)&&(d[n[i]]=e[i]);for(;c--;)d[s++]=e[i++];return d}function Ti(e,t,n,r){for(var i=-1,o=e.length,a=-1,s=n.length,l=-1,c=t.length,d=vn(o-s,0),u=oe(d+c),f=!r;++i<d;)u[i]=e[i];for(var h=i;++l<c;)u[h+l]=t[l];for(;++a<s;)(f||i<o)&&(u[h+n[a]]=e[i++]);return u}function Di(e,t){var n=-1,r=e.length;for(t||(t=oe(r));++n<r;)t[n]=e[n];return t}function Ii(e,t,r,i){var o=!r;r||(r={});for(var a=-1,s=t.length;++a<s;){var l=t[a],c=i?i(r[l],e[l],l,r,e):n;c===n&&(c=e[l]),o?or(r,l,c):tr(r,l,c)}return r}function Ei(e,t){return function(n,r){var i=Va(n)?Ct:rr,o=t?t():{};return i(n,e,lo(r,2),o)}}function _i(e){return Gr((function(t,r){var i=-1,o=r.length,a=o>1?r[o-1]:n,s=o>2?r[2]:n;for(a=e.length>3&&"function"==typeof a?(o--,a):n,s&&xo(r[0],r[1],s)&&(a=o<3?n:a,o=1),t=Ce(t);++i<o;){var l=r[i];l&&e(t,l,i,a)}return t}))}function Mi(e,t){return function(n,r){if(null==n)return n;if(!Ua(n))return e(n,r);for(var i=n.length,o=t?i:-1,a=Ce(n);(t?o--:++o<i)&&!1!==r(a[o],o,a););return n}}function Ri(e){return function(t,n,r){for(var i=-1,o=Ce(t),a=r(t),s=a.length;s--;){var l=a[e?s:++i];if(!1===n(o[l],l,o))break}return t}}function Ai(e){return function(t){var r=an(t=vs(t))?hn(t):n,i=r?r[0]:t.charAt(0),o=r?wi(r,1).join(""):t.slice(1);return i[e]()+o}}function Ni(e){return function(t){return At(Zs(Ws(t).replace(Qe,"")),e,"")}}function Bi(e){return function(){var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var n=zn(e.prototype),r=e.apply(n,t);return es(r)?r:n}}function Fi(e){return function(t,r,i){var o=Ce(t);if(!Ua(t)){var a=lo(r,3);t=Es(t),r=function(e){return a(o[e],e,o)}}var s=e(t,r,i);return s>-1?o[a?t[s]:s]:n}}function Li(e){return no((function(t){var i=t.length,o=i,a=Wn.prototype.thru;for(e&&t.reverse();o--;){var s=t[o];if("function"!=typeof s)throw new De(r);if(a&&!l&&"wrapper"==ao(s))var l=new Wn([],!0)}for(o=l?o:i;++o<i;){var c=ao(s=t[o]),d="wrapper"==c?oo(s):n;l=d&&$o(d[0])&&424==d[1]&&!d[4].length&&1==d[9]?l[ao(d[0])].apply(l,d[3]):1==s.length&&$o(s)?l[c]():l.thru(s)}return function(){var e=arguments,n=e[0];if(l&&1==e.length&&Va(n))return l.plant(n).value();for(var r=0,o=i?t[r].apply(this,e):n;++r<i;)o=t[r].call(this,o);return o}}))}function Pi(e,t,r,i,o,a,s,l,d,u){var f=t&c,h=1&t,p=2&t,g=24&t,m=512&t,b=p?n:Bi(e);return function c(){for(var v=arguments.length,y=oe(v),x=v;x--;)y[x]=arguments[x];if(g)var w=so(c),$=function(e,t){for(var n=e.length,r=0;n--;)e[n]===t&&++r;return r}(y,w);if(i&&(y=Oi(y,i,o,g)),a&&(y=Ti(y,a,s,g)),v-=$,g&&v<u){var j=cn(y,w);return Ki(e,t,Pi,c.placeholder,r,y,j,l,d,u-v)}var S=h?r:this,k=p?S[e]:e;return v=y.length,l?y=function(e,t){var r=e.length,i=yn(t.length,r),o=Di(e);for(;i--;){var a=t[i];e[i]=yo(a,r)?o[a]:n}return e}(y,l):m&&v>1&&y.reverse(),f&&d<v&&(y.length=d),this&&this!==ht&&this instanceof c&&(k=b||Bi(k)),k.apply(S,y)}}function zi(e,t){return function(n,r){return function(e,t,n,r){return xr(e,(function(e,i,o){t(r,n(e),i,o)})),r}(n,e,t(r),{})}}function Hi(e,t){return function(r,i){var o;if(r===n&&i===n)return t;if(r!==n&&(o=r),i!==n){if(o===n)return i;"string"==typeof r||"string"==typeof i?(r=ci(r),i=ci(i)):(r=li(r),i=li(i)),o=e(r,i)}return o}}function Wi(e){return no((function(t){return t=Mt(t,Zt(lo())),Gr((function(n){var r=this;return e(t,(function(e){return kt(e,r,n)}))}))}))}function Vi(e,t){var r=(t=t===n?" ":ci(t)).length;if(r<2)return r?Xr(t,e):t;var i=Xr(t,pt(e/fn(t)));return an(t)?wi(hn(i),0,e).join(""):i.slice(0,e)}function Yi(e){return function(t,r,i){return i&&"number"!=typeof i&&xo(t,r,i)&&(r=i=n),t=hs(t),r===n?(r=t,t=0):r=hs(r),function(e,t,n,r){for(var i=-1,o=vn(pt((t-e)/(n||1)),0),a=oe(o);o--;)a[r?o:++i]=e,e+=n;return a}(t,r,i=i===n?t<r?1:-1:hs(i),e)}}function Ui(e){return function(t,n){return"string"==typeof t&&"string"==typeof n||(t=ms(t),n=ms(n)),e(t,n)}}function Ki(e,t,r,i,o,a,c,d,u,f){var h=8&t;t|=h?s:l,4&(t&=~(h?l:s))||(t&=-4);var p=[e,t,o,h?a:n,h?c:n,h?n:a,h?n:c,d,u,f],g=r.apply(n,p);return $o(e)&&Io(g,p),g.placeholder=i,Mo(g,e,t)}function qi(e){var t=ke[e];return function(e,n){if(e=ms(e),(n=null==n?0:yn(ps(n),292))&&Ft(e)){var r=(vs(e)+"e").split("e");return+((r=(vs(t(r[0]+"e"+(+r[1]+n)))+"e").split("e"))[0]+"e"+(+r[1]-n))}return t(e)}}var Xi=On&&1/dn(new On([,-0]))[1]==u?function(e){return new On(e)}:ll;function Gi(e){return function(t){var n=go(t);return n==j?sn(t):n==T?un(t):function(e,t){return Mt(t,(function(t){return[t,e[t]]}))}(t,e(t))}}function Zi(e,t,i,u,f,h,p,g){var m=2&t;if(!m&&"function"!=typeof e)throw new De(r);var b=u?u.length:0;if(b||(t&=-97,u=f=n),p=p===n?p:vn(ps(p),0),g=g===n?g:ps(g),b-=f?f.length:0,t&l){var v=u,y=f;u=f=n}var x=m?n:oo(e),w=[e,t,i,u,f,v,y,h,p,g];if(x&&function(e,t){var n=e[1],r=t[1],i=n|r,a=i<131,s=r==c&&8==n||r==c&&n==d&&e[7].length<=t[8]||384==r&&t[7].length<=t[8]&&8==n;if(!a&&!s)return e;1&r&&(e[2]=t[2],i|=1&n?0:4);var l=t[3];if(l){var u=e[3];e[3]=u?Oi(u,l,t[4]):l,e[4]=u?cn(e[3],o):t[4]}(l=t[5])&&(u=e[5],e[5]=u?Ti(u,l,t[6]):l,e[6]=u?cn(e[5],o):t[6]);(l=t[7])&&(e[7]=l);r&c&&(e[8]=null==e[8]?t[8]:yn(e[8],t[8]));null==e[9]&&(e[9]=t[9]);e[0]=t[0],e[1]=i}(w,x),e=w[0],t=w[1],i=w[2],u=w[3],f=w[4],!(g=w[9]=w[9]===n?m?0:e.length:vn(w[9]-b,0))&&24&t&&(t&=-25),t&&1!=t)$=8==t||t==a?function(e,t,r){var i=Bi(e);return function o(){for(var a=arguments.length,s=oe(a),l=a,c=so(o);l--;)s[l]=arguments[l];var d=a<3&&s[0]!==c&&s[a-1]!==c?[]:cn(s,c);return(a-=d.length)<r?Ki(e,t,Pi,o.placeholder,n,s,d,n,n,r-a):kt(this&&this!==ht&&this instanceof o?i:e,this,s)}}(e,t,g):t!=s&&33!=t||f.length?Pi.apply(n,w):function(e,t,n,r){var i=1&t,o=Bi(e);return function t(){for(var a=-1,s=arguments.length,l=-1,c=r.length,d=oe(c+s),u=this&&this!==ht&&this instanceof t?o:e;++l<c;)d[l]=r[l];for(;s--;)d[l++]=arguments[++a];return kt(u,i?n:this,d)}}(e,t,i,u);else var $=function(e,t,n){var r=1&t,i=Bi(e);return function t(){return(this&&this!==ht&&this instanceof t?i:e).apply(r?n:this,arguments)}}(e,t,i);return Mo((x?ei:Io)($,w),e,t)}function Qi(e,t,r,i){return e===n||Pa(e,_e[r])&&!Ae.call(i,r)?t:e}function Ji(e,t,r,i,o,a){return es(e)&&es(t)&&(a.set(t,e),Hr(e,t,n,Ji,a),a.delete(t)),e}function eo(e){return is(e)?n:e}function to(e,t,r,i,o,a){var s=1&r,l=e.length,c=t.length;if(l!=c&&!(s&&c>l))return!1;var d=a.get(e),u=a.get(t);if(d&&u)return d==t&&u==e;var f=-1,h=!0,p=2&r?new qn:n;for(a.set(e,t),a.set(t,e);++f<l;){var g=e[f],m=t[f];if(i)var b=s?i(m,g,f,t,e,a):i(g,m,f,e,t,a);if(b!==n){if(b)continue;h=!1;break}if(p){if(!Bt(t,(function(e,t){if(!Jt(p,t)&&(g===e||o(g,e,r,i,a)))return p.push(t)}))){h=!1;break}}else if(g!==m&&!o(g,m,r,i,a)){h=!1;break}}return a.delete(e),a.delete(t),h}function no(e){return _o(Oo(e,n,Yo),e+"")}function ro(e){return Sr(e,Es,ho)}function io(e){return Sr(e,_s,po)}var oo=In?function(e){return In.get(e)}:ll;function ao(e){for(var t=e.name+"",n=En[t],r=Ae.call(En,t)?n.length:0;r--;){var i=n[r],o=i.func;if(null==o||o==e)return i.name}return t}function so(e){return(Ae.call(Pn,"placeholder")?Pn:e).placeholder}function lo(){var e=Pn.iteratee||il;return e=e===il?Ar:e,arguments.length?e(arguments[0],arguments[1]):e}function co(e,t){var n,r,i=e.__data__;return("string"==(r=typeof(n=t))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?i["string"==typeof t?"string":"hash"]:i.map}function uo(e){for(var t=Es(e),n=t.length;n--;){var r=t[n],i=e[r];t[n]=[r,i,ko(i)]}return t}function fo(e,t){var r=function(e,t){return null==e?n:e[t]}(e,t);return Rr(r)?r:n}var ho=bt?function(e){return null==e?[]:(e=Ce(e),It(bt(e),(function(t){return qe.call(e,t)})))}:gl,po=bt?function(e){for(var t=[];e;)Rt(t,ho(e)),e=Ue(e);return t}:gl,go=kr;function mo(e,t,n){for(var r=-1,i=(t=yi(t,e)).length,o=!1;++r<i;){var a=Bo(t[r]);if(!(o=null!=e&&n(e,a)))break;e=e[a]}return o||++r!=i?o:!!(i=null==e?0:e.length)&&Ja(i)&&yo(a,i)&&(Va(e)||Wa(e))}function bo(e){return"function"!=typeof e.constructor||So(e)?{}:zn(Ue(e))}function vo(e){return Va(e)||Wa(e)||!!(Ge&&e&&e[Ge])}function yo(e,t){var n=typeof e;return!!(t=null==t?f:t)&&("number"==n||"symbol"!=n&&ve.test(e))&&e>-1&&e%1==0&&e<t}function xo(e,t,n){if(!es(n))return!1;var r=typeof t;return!!("number"==r?Ua(n)&&yo(t,n.length):"string"==r&&t in n)&&Pa(n[t],e)}function wo(e,t){if(Va(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!ls(e))||(ee.test(e)||!J.test(e)||null!=t&&e in Ce(t))}function $o(e){var t=ao(e),n=Pn[t];if("function"!=typeof n||!(t in Vn.prototype))return!1;if(e===n)return!0;var r=oo(n);return!!r&&e===r[0]}(Sn&&go(new Sn(new ArrayBuffer(1)))!=M||kn&&go(new kn)!=j||Cn&&go(Cn.resolve())!=C||On&&go(new On)!=T||Tn&&go(new Tn)!=E)&&(go=function(e){var t=kr(e),r=t==k?e.constructor:n,i=r?Fo(r):"";if(i)switch(i){case _n:return M;case Mn:return j;case Rn:return C;case An:return T;case Nn:return E}return t});var jo=Me?Za:ml;function So(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||_e)}function ko(e){return e==e&&!es(e)}function Co(e,t){return function(r){return null!=r&&(r[e]===t&&(t!==n||e in Ce(r)))}}function Oo(e,t,r){return t=vn(t===n?e.length-1:t,0),function(){for(var n=arguments,i=-1,o=vn(n.length-t,0),a=oe(o);++i<o;)a[i]=n[t+i];i=-1;for(var s=oe(t+1);++i<t;)s[i]=n[i];return s[t]=r(a),kt(e,this,s)}}function To(e,t){return t.length<2?e:jr(e,ri(t,0,-1))}function Do(e,t){if(("constructor"!==t||"function"!=typeof e[t])&&"__proto__"!=t)return e[t]}var Io=Ro(ei),Eo=ft||function(e,t){return ht.setTimeout(e,t)},_o=Ro(ti);function Mo(e,t,n){var r=t+"";return _o(e,function(e,t){var n=t.length;if(!n)return e;var r=n-1;return t[r]=(n>1?"& ":"")+t[r],t=t.join(n>2?", ":" "),e.replace(ae,"{\n/* [wrapped with "+t+"] */\n")}(r,function(e,t){return Ot(g,(function(n){var r="_."+n[0];t&n[1]&&!Et(e,r)&&e.push(r)})),e.sort()}(function(e){var t=e.match(se);return t?t[1].split(le):[]}(r),n)))}function Ro(e){var t=0,r=0;return function(){var i=xn(),o=16-(i-r);if(r=i,o>0){if(++t>=800)return arguments[0]}else t=0;return e.apply(n,arguments)}}function Ao(e,t){var r=-1,i=e.length,o=i-1;for(t=t===n?i:t;++r<t;){var a=qr(r,o),s=e[a];e[a]=e[r],e[r]=s}return e.length=t,e}var No=function(e){var t=Ra(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(te,(function(e,n,r,i){t.push(r?i.replace(ue,"$1"):n||e)})),t}));function Bo(e){if("string"==typeof e||ls(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function Fo(e){if(null!=e){try{return Re.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function Lo(e){if(e instanceof Vn)return e.clone();var t=new Wn(e.__wrapped__,e.__chain__);return t.__actions__=Di(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}var Po=Gr((function(e,t){return Ka(e)?ur(e,br(t,1,Ka,!0)):[]})),zo=Gr((function(e,t){var r=Go(t);return Ka(r)&&(r=n),Ka(e)?ur(e,br(t,1,Ka,!0),lo(r,2)):[]})),Ho=Gr((function(e,t){var r=Go(t);return Ka(r)&&(r=n),Ka(e)?ur(e,br(t,1,Ka,!0),n,r):[]}));function Wo(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var i=null==n?0:ps(n);return i<0&&(i=vn(r+i,0)),Pt(e,lo(t,3),i)}function Vo(e,t,r){var i=null==e?0:e.length;if(!i)return-1;var o=i-1;return r!==n&&(o=ps(r),o=r<0?vn(i+o,0):yn(o,i-1)),Pt(e,lo(t,3),o,!0)}function Yo(e){return(null==e?0:e.length)?br(e,1):[]}function Uo(e){return e&&e.length?e[0]:n}var Ko=Gr((function(e){var t=Mt(e,bi);return t.length&&t[0]===e[0]?Dr(t):[]})),qo=Gr((function(e){var t=Go(e),r=Mt(e,bi);return t===Go(r)?t=n:r.pop(),r.length&&r[0]===e[0]?Dr(r,lo(t,2)):[]})),Xo=Gr((function(e){var t=Go(e),r=Mt(e,bi);return(t="function"==typeof t?t:n)&&r.pop(),r.length&&r[0]===e[0]?Dr(r,n,t):[]}));function Go(e){var t=null==e?0:e.length;return t?e[t-1]:n}var Zo=Gr(Qo);function Qo(e,t){return e&&e.length&&t&&t.length?Ur(e,t):e}var Jo=no((function(e,t){var n=null==e?0:e.length,r=ar(e,t);return Kr(e,Mt(t,(function(e){return yo(e,n)?+e:e})).sort(Ci)),r}));function ea(e){return null==e?e:jn.call(e)}var ta=Gr((function(e){return di(br(e,1,Ka,!0))})),na=Gr((function(e){var t=Go(e);return Ka(t)&&(t=n),di(br(e,1,Ka,!0),lo(t,2))})),ra=Gr((function(e){var t=Go(e);return t="function"==typeof t?t:n,di(br(e,1,Ka,!0),n,t)}));function ia(e){if(!e||!e.length)return[];var t=0;return e=It(e,(function(e){if(Ka(e))return t=vn(e.length,t),!0})),Xt(t,(function(t){return Mt(e,Yt(t))}))}function oa(e,t){if(!e||!e.length)return[];var r=ia(e);return null==t?r:Mt(r,(function(e){return kt(t,n,e)}))}var aa=Gr((function(e,t){return Ka(e)?ur(e,t):[]})),sa=Gr((function(e){return gi(It(e,Ka))})),la=Gr((function(e){var t=Go(e);return Ka(t)&&(t=n),gi(It(e,Ka),lo(t,2))})),ca=Gr((function(e){var t=Go(e);return t="function"==typeof t?t:n,gi(It(e,Ka),n,t)})),da=Gr(ia);var ua=Gr((function(e){var t=e.length,r=t>1?e[t-1]:n;return r="function"==typeof r?(e.pop(),r):n,oa(e,r)}));function fa(e){var t=Pn(e);return t.__chain__=!0,t}function ha(e,t){return t(e)}var pa=no((function(e){var t=e.length,r=t?e[0]:0,i=this.__wrapped__,o=function(t){return ar(t,e)};return!(t>1||this.__actions__.length)&&i instanceof Vn&&yo(r)?((i=i.slice(r,+r+(t?1:0))).__actions__.push({func:ha,args:[o],thisArg:n}),new Wn(i,this.__chain__).thru((function(e){return t&&!e.length&&e.push(n),e}))):this.thru(o)}));var ga=Ei((function(e,t,n){Ae.call(e,n)?++e[n]:or(e,n,1)}));var ma=Fi(Wo),ba=Fi(Vo);function va(e,t){return(Va(e)?Ot:fr)(e,lo(t,3))}function ya(e,t){return(Va(e)?Tt:hr)(e,lo(t,3))}var xa=Ei((function(e,t,n){Ae.call(e,n)?e[n].push(t):or(e,n,[t])}));var wa=Gr((function(e,t,n){var r=-1,i="function"==typeof t,o=Ua(e)?oe(e.length):[];return fr(e,(function(e){o[++r]=i?kt(t,e,n):Ir(e,t,n)})),o})),$a=Ei((function(e,t,n){or(e,n,t)}));function ja(e,t){return(Va(e)?Mt:Lr)(e,lo(t,3))}var Sa=Ei((function(e,t,n){e[n?0:1].push(t)}),(function(){return[[],[]]}));var ka=Gr((function(e,t){if(null==e)return[];var n=t.length;return n>1&&xo(e,t[0],t[1])?t=[]:n>2&&xo(t[0],t[1],t[2])&&(t=[t[0]]),Vr(e,br(t,1),[])})),Ca=ut||function(){return ht.Date.now()};function Oa(e,t,r){return t=r?n:t,t=e&&null==t?e.length:t,Zi(e,c,n,n,n,n,t)}function Ta(e,t){var i;if("function"!=typeof t)throw new De(r);return e=ps(e),function(){return--e>0&&(i=t.apply(this,arguments)),e<=1&&(t=n),i}}var Da=Gr((function(e,t,n){var r=1;if(n.length){var i=cn(n,so(Da));r|=s}return Zi(e,r,t,n,i)})),Ia=Gr((function(e,t,n){var r=3;if(n.length){var i=cn(n,so(Ia));r|=s}return Zi(t,r,e,n,i)}));function Ea(e,t,i){var o,a,s,l,c,d,u=0,f=!1,h=!1,p=!0;if("function"!=typeof e)throw new De(r);function g(t){var r=o,i=a;return o=a=n,u=t,l=e.apply(i,r)}function m(e){var r=e-d;return d===n||r>=t||r<0||h&&e-u>=s}function b(){var e=Ca();if(m(e))return v(e);c=Eo(b,function(e){var n=t-(e-d);return h?yn(n,s-(e-u)):n}(e))}function v(e){return c=n,p&&o?g(e):(o=a=n,l)}function y(){var e=Ca(),r=m(e);if(o=arguments,a=this,d=e,r){if(c===n)return function(e){return u=e,c=Eo(b,t),f?g(e):l}(d);if(h)return $i(c),c=Eo(b,t),g(d)}return c===n&&(c=Eo(b,t)),l}return t=ms(t)||0,es(i)&&(f=!!i.leading,s=(h="maxWait"in i)?vn(ms(i.maxWait)||0,t):s,p="trailing"in i?!!i.trailing:p),y.cancel=function(){c!==n&&$i(c),u=0,o=d=a=c=n},y.flush=function(){return c===n?l:v(Ca())},y}var _a=Gr((function(e,t){return dr(e,1,t)})),Ma=Gr((function(e,t,n){return dr(e,ms(t)||0,n)}));function Ra(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new De(r);var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(Ra.Cache||Kn),n}function Aa(e){if("function"!=typeof e)throw new De(r);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}Ra.Cache=Kn;var Na=xi((function(e,t){var n=(t=1==t.length&&Va(t[0])?Mt(t[0],Zt(lo())):Mt(br(t,1),Zt(lo()))).length;return Gr((function(r){for(var i=-1,o=yn(r.length,n);++i<o;)r[i]=t[i].call(this,r[i]);return kt(e,this,r)}))})),Ba=Gr((function(e,t){var r=cn(t,so(Ba));return Zi(e,s,n,t,r)})),Fa=Gr((function(e,t){var r=cn(t,so(Fa));return Zi(e,l,n,t,r)})),La=no((function(e,t){return Zi(e,d,n,n,n,t)}));function Pa(e,t){return e===t||e!=e&&t!=t}var za=Ui(Cr),Ha=Ui((function(e,t){return e>=t})),Wa=Er(function(){return arguments}())?Er:function(e){return ts(e)&&Ae.call(e,"callee")&&!qe.call(e,"callee")},Va=oe.isArray,Ya=yt?Zt(yt):function(e){return ts(e)&&kr(e)==_};function Ua(e){return null!=e&&Ja(e.length)&&!Za(e)}function Ka(e){return ts(e)&&Ua(e)}var qa=vt||ml,Xa=xt?Zt(xt):function(e){return ts(e)&&kr(e)==y};function Ga(e){if(!ts(e))return!1;var t=kr(e);return t==x||"[object DOMException]"==t||"string"==typeof e.message&&"string"==typeof e.name&&!is(e)}function Za(e){if(!es(e))return!1;var t=kr(e);return t==w||t==$||"[object AsyncFunction]"==t||"[object Proxy]"==t}function Qa(e){return"number"==typeof e&&e==ps(e)}function Ja(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=f}function es(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}function ts(e){return null!=e&&"object"==typeof e}var ns=wt?Zt(wt):function(e){return ts(e)&&go(e)==j};function rs(e){return"number"==typeof e||ts(e)&&kr(e)==S}function is(e){if(!ts(e)||kr(e)!=k)return!1;var t=Ue(e);if(null===t)return!0;var n=Ae.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&Re.call(n)==Le}var os=$t?Zt($t):function(e){return ts(e)&&kr(e)==O};var as=jt?Zt(jt):function(e){return ts(e)&&go(e)==T};function ss(e){return"string"==typeof e||!Va(e)&&ts(e)&&kr(e)==D}function ls(e){return"symbol"==typeof e||ts(e)&&kr(e)==I}var cs=St?Zt(St):function(e){return ts(e)&&Ja(e.length)&&!!at[kr(e)]};var ds=Ui(Fr),us=Ui((function(e,t){return e<=t}));function fs(e){if(!e)return[];if(Ua(e))return ss(e)?hn(e):Di(e);if(Ze&&e[Ze])return function(e){for(var t,n=[];!(t=e.next()).done;)n.push(t.value);return n}(e[Ze]());var t=go(e);return(t==j?sn:t==T?dn:Ps)(e)}function hs(e){return e?(e=ms(e))===u||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}function ps(e){var t=hs(e),n=t%1;return t==t?n?t-n:t:0}function gs(e){return e?sr(ps(e),0,p):0}function ms(e){if("number"==typeof e)return e;if(ls(e))return h;if(es(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=es(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Gt(e);var n=ge.test(e);return n||be.test(e)?dt(e.slice(2),n?2:8):pe.test(e)?h:+e}function bs(e){return Ii(e,_s(e))}function vs(e){return null==e?"":ci(e)}var ys=_i((function(e,t){if(So(t)||Ua(t))Ii(t,Es(t),e);else for(var n in t)Ae.call(t,n)&&tr(e,n,t[n])})),xs=_i((function(e,t){Ii(t,_s(t),e)})),ws=_i((function(e,t,n,r){Ii(t,_s(t),e,r)})),$s=_i((function(e,t,n,r){Ii(t,Es(t),e,r)})),js=no(ar);var Ss=Gr((function(e,t){e=Ce(e);var r=-1,i=t.length,o=i>2?t[2]:n;for(o&&xo(t[0],t[1],o)&&(i=1);++r<i;)for(var a=t[r],s=_s(a),l=-1,c=s.length;++l<c;){var d=s[l],u=e[d];(u===n||Pa(u,_e[d])&&!Ae.call(e,d))&&(e[d]=a[d])}return e})),ks=Gr((function(e){return e.push(n,Ji),kt(Rs,n,e)}));function Cs(e,t,r){var i=null==e?n:jr(e,t);return i===n?r:i}function Os(e,t){return null!=e&&mo(e,t,Tr)}var Ts=zi((function(e,t,n){null!=t&&"function"!=typeof t.toString&&(t=Fe.call(t)),e[t]=n}),el(rl)),Ds=zi((function(e,t,n){null!=t&&"function"!=typeof t.toString&&(t=Fe.call(t)),Ae.call(e,t)?e[t].push(n):e[t]=[n]}),lo),Is=Gr(Ir);function Es(e){return Ua(e)?Gn(e):Nr(e)}function _s(e){return Ua(e)?Gn(e,!0):Br(e)}var Ms=_i((function(e,t,n){Hr(e,t,n)})),Rs=_i((function(e,t,n,r){Hr(e,t,n,r)})),As=no((function(e,t){var n={};if(null==e)return n;var r=!1;t=Mt(t,(function(t){return t=yi(t,e),r||(r=t.length>1),t})),Ii(e,io(e),n),r&&(n=lr(n,7,eo));for(var i=t.length;i--;)ui(n,t[i]);return n}));var Ns=no((function(e,t){return null==e?{}:function(e,t){return Yr(e,t,(function(t,n){return Os(e,n)}))}(e,t)}));function Bs(e,t){if(null==e)return{};var n=Mt(io(e),(function(e){return[e]}));return t=lo(t),Yr(e,n,(function(e,n){return t(e,n[0])}))}var Fs=Gi(Es),Ls=Gi(_s);function Ps(e){return null==e?[]:Qt(e,Es(e))}var zs=Ni((function(e,t,n){return t=t.toLowerCase(),e+(n?Hs(t):t)}));function Hs(e){return Gs(vs(e).toLowerCase())}function Ws(e){return(e=vs(e))&&e.replace(ye,nn).replace(Je,"")}var Vs=Ni((function(e,t,n){return e+(n?"-":"")+t.toLowerCase()})),Ys=Ni((function(e,t,n){return e+(n?" ":"")+t.toLowerCase()})),Us=Ai("toLowerCase");var Ks=Ni((function(e,t,n){return e+(n?"_":"")+t.toLowerCase()}));var qs=Ni((function(e,t,n){return e+(n?" ":"")+Gs(t)}));var Xs=Ni((function(e,t,n){return e+(n?" ":"")+t.toUpperCase()})),Gs=Ai("toUpperCase");function Zs(e,t,r){return e=vs(e),(t=r?n:t)===n?function(e){return rt.test(e)}(e)?function(e){return e.match(tt)||[]}(e):function(e){return e.match(ce)||[]}(e):e.match(t)||[]}var Qs=Gr((function(e,t){try{return kt(e,n,t)}catch(e){return Ga(e)?e:new je(e)}})),Js=no((function(e,t){return Ot(t,(function(t){t=Bo(t),or(e,t,Da(e[t],e))})),e}));function el(e){return function(){return e}}var tl=Li(),nl=Li(!0);function rl(e){return e}function il(e){return Ar("function"==typeof e?e:lr(e,1))}var ol=Gr((function(e,t){return function(n){return Ir(n,e,t)}})),al=Gr((function(e,t){return function(n){return Ir(e,n,t)}}));function sl(e,t,n){var r=Es(t),i=$r(t,r);null!=n||es(t)&&(i.length||!r.length)||(n=t,t=e,e=this,i=$r(t,Es(t)));var o=!(es(n)&&"chain"in n&&!n.chain),a=Za(e);return Ot(i,(function(n){var r=t[n];e[n]=r,a&&(e.prototype[n]=function(){var t=this.__chain__;if(o||t){var n=e(this.__wrapped__);return(n.__actions__=Di(this.__actions__)).push({func:r,args:arguments,thisArg:e}),n.__chain__=t,n}return r.apply(e,Rt([this.value()],arguments))})})),e}function ll(){}var cl=Wi(Mt),dl=Wi(Dt),ul=Wi(Bt);function fl(e){return wo(e)?Yt(Bo(e)):function(e){return function(t){return jr(t,e)}}(e)}var hl=Yi(),pl=Yi(!0);function gl(){return[]}function ml(){return!1}var bl=Hi((function(e,t){return e+t}),0),vl=qi("ceil"),yl=Hi((function(e,t){return e/t}),1),xl=qi("floor");var wl,$l=Hi((function(e,t){return e*t}),1),jl=qi("round"),Sl=Hi((function(e,t){return e-t}),0);return Pn.after=function(e,t){if("function"!=typeof t)throw new De(r);return e=ps(e),function(){if(--e<1)return t.apply(this,arguments)}},Pn.ary=Oa,Pn.assign=ys,Pn.assignIn=xs,Pn.assignInWith=ws,Pn.assignWith=$s,Pn.at=js,Pn.before=Ta,Pn.bind=Da,Pn.bindAll=Js,Pn.bindKey=Ia,Pn.castArray=function(){if(!arguments.length)return[];var e=arguments[0];return Va(e)?e:[e]},Pn.chain=fa,Pn.chunk=function(e,t,r){t=(r?xo(e,t,r):t===n)?1:vn(ps(t),0);var i=null==e?0:e.length;if(!i||t<1)return[];for(var o=0,a=0,s=oe(pt(i/t));o<i;)s[a++]=ri(e,o,o+=t);return s},Pn.compact=function(e){for(var t=-1,n=null==e?0:e.length,r=0,i=[];++t<n;){var o=e[t];o&&(i[r++]=o)}return i},Pn.concat=function(){var e=arguments.length;if(!e)return[];for(var t=oe(e-1),n=arguments[0],r=e;r--;)t[r-1]=arguments[r];return Rt(Va(n)?Di(n):[n],br(t,1))},Pn.cond=function(e){var t=null==e?0:e.length,n=lo();return e=t?Mt(e,(function(e){if("function"!=typeof e[1])throw new De(r);return[n(e[0]),e[1]]})):[],Gr((function(n){for(var r=-1;++r<t;){var i=e[r];if(kt(i[0],this,n))return kt(i[1],this,n)}}))},Pn.conforms=function(e){return function(e){var t=Es(e);return function(n){return cr(n,e,t)}}(lr(e,1))},Pn.constant=el,Pn.countBy=ga,Pn.create=function(e,t){var n=zn(e);return null==t?n:ir(n,t)},Pn.curry=function e(t,r,i){var o=Zi(t,8,n,n,n,n,n,r=i?n:r);return o.placeholder=e.placeholder,o},Pn.curryRight=function e(t,r,i){var o=Zi(t,a,n,n,n,n,n,r=i?n:r);return o.placeholder=e.placeholder,o},Pn.debounce=Ea,Pn.defaults=Ss,Pn.defaultsDeep=ks,Pn.defer=_a,Pn.delay=Ma,Pn.difference=Po,Pn.differenceBy=zo,Pn.differenceWith=Ho,Pn.drop=function(e,t,r){var i=null==e?0:e.length;return i?ri(e,(t=r||t===n?1:ps(t))<0?0:t,i):[]},Pn.dropRight=function(e,t,r){var i=null==e?0:e.length;return i?ri(e,0,(t=i-(t=r||t===n?1:ps(t)))<0?0:t):[]},Pn.dropRightWhile=function(e,t){return e&&e.length?hi(e,lo(t,3),!0,!0):[]},Pn.dropWhile=function(e,t){return e&&e.length?hi(e,lo(t,3),!0):[]},Pn.fill=function(e,t,r,i){var o=null==e?0:e.length;return o?(r&&"number"!=typeof r&&xo(e,t,r)&&(r=0,i=o),function(e,t,r,i){var o=e.length;for((r=ps(r))<0&&(r=-r>o?0:o+r),(i=i===n||i>o?o:ps(i))<0&&(i+=o),i=r>i?0:gs(i);r<i;)e[r++]=t;return e}(e,t,r,i)):[]},Pn.filter=function(e,t){return(Va(e)?It:mr)(e,lo(t,3))},Pn.flatMap=function(e,t){return br(ja(e,t),1)},Pn.flatMapDeep=function(e,t){return br(ja(e,t),u)},Pn.flatMapDepth=function(e,t,r){return r=r===n?1:ps(r),br(ja(e,t),r)},Pn.flatten=Yo,Pn.flattenDeep=function(e){return(null==e?0:e.length)?br(e,u):[]},Pn.flattenDepth=function(e,t){return(null==e?0:e.length)?br(e,t=t===n?1:ps(t)):[]},Pn.flip=function(e){return Zi(e,512)},Pn.flow=tl,Pn.flowRight=nl,Pn.fromPairs=function(e){for(var t=-1,n=null==e?0:e.length,r={};++t<n;){var i=e[t];r[i[0]]=i[1]}return r},Pn.functions=function(e){return null==e?[]:$r(e,Es(e))},Pn.functionsIn=function(e){return null==e?[]:$r(e,_s(e))},Pn.groupBy=xa,Pn.initial=function(e){return(null==e?0:e.length)?ri(e,0,-1):[]},Pn.intersection=Ko,Pn.intersectionBy=qo,Pn.intersectionWith=Xo,Pn.invert=Ts,Pn.invertBy=Ds,Pn.invokeMap=wa,Pn.iteratee=il,Pn.keyBy=$a,Pn.keys=Es,Pn.keysIn=_s,Pn.map=ja,Pn.mapKeys=function(e,t){var n={};return t=lo(t,3),xr(e,(function(e,r,i){or(n,t(e,r,i),e)})),n},Pn.mapValues=function(e,t){var n={};return t=lo(t,3),xr(e,(function(e,r,i){or(n,r,t(e,r,i))})),n},Pn.matches=function(e){return Pr(lr(e,1))},Pn.matchesProperty=function(e,t){return zr(e,lr(t,1))},Pn.memoize=Ra,Pn.merge=Ms,Pn.mergeWith=Rs,Pn.method=ol,Pn.methodOf=al,Pn.mixin=sl,Pn.negate=Aa,Pn.nthArg=function(e){return e=ps(e),Gr((function(t){return Wr(t,e)}))},Pn.omit=As,Pn.omitBy=function(e,t){return Bs(e,Aa(lo(t)))},Pn.once=function(e){return Ta(2,e)},Pn.orderBy=function(e,t,r,i){return null==e?[]:(Va(t)||(t=null==t?[]:[t]),Va(r=i?n:r)||(r=null==r?[]:[r]),Vr(e,t,r))},Pn.over=cl,Pn.overArgs=Na,Pn.overEvery=dl,Pn.overSome=ul,Pn.partial=Ba,Pn.partialRight=Fa,Pn.partition=Sa,Pn.pick=Ns,Pn.pickBy=Bs,Pn.property=fl,Pn.propertyOf=function(e){return function(t){return null==e?n:jr(e,t)}},Pn.pull=Zo,Pn.pullAll=Qo,Pn.pullAllBy=function(e,t,n){return e&&e.length&&t&&t.length?Ur(e,t,lo(n,2)):e},Pn.pullAllWith=function(e,t,r){return e&&e.length&&t&&t.length?Ur(e,t,n,r):e},Pn.pullAt=Jo,Pn.range=hl,Pn.rangeRight=pl,Pn.rearg=La,Pn.reject=function(e,t){return(Va(e)?It:mr)(e,Aa(lo(t,3)))},Pn.remove=function(e,t){var n=[];if(!e||!e.length)return n;var r=-1,i=[],o=e.length;for(t=lo(t,3);++r<o;){var a=e[r];t(a,r,e)&&(n.push(a),i.push(r))}return Kr(e,i),n},Pn.rest=function(e,t){if("function"!=typeof e)throw new De(r);return Gr(e,t=t===n?t:ps(t))},Pn.reverse=ea,Pn.sampleSize=function(e,t,r){return t=(r?xo(e,t,r):t===n)?1:ps(t),(Va(e)?Qn:Qr)(e,t)},Pn.set=function(e,t,n){return null==e?e:Jr(e,t,n)},Pn.setWith=function(e,t,r,i){return i="function"==typeof i?i:n,null==e?e:Jr(e,t,r,i)},Pn.shuffle=function(e){return(Va(e)?Jn:ni)(e)},Pn.slice=function(e,t,r){var i=null==e?0:e.length;return i?(r&&"number"!=typeof r&&xo(e,t,r)?(t=0,r=i):(t=null==t?0:ps(t),r=r===n?i:ps(r)),ri(e,t,r)):[]},Pn.sortBy=ka,Pn.sortedUniq=function(e){return e&&e.length?si(e):[]},Pn.sortedUniqBy=function(e,t){return e&&e.length?si(e,lo(t,2)):[]},Pn.split=function(e,t,r){return r&&"number"!=typeof r&&xo(e,t,r)&&(t=r=n),(r=r===n?p:r>>>0)?(e=vs(e))&&("string"==typeof t||null!=t&&!os(t))&&!(t=ci(t))&&an(e)?wi(hn(e),0,r):e.split(t,r):[]},Pn.spread=function(e,t){if("function"!=typeof e)throw new De(r);return t=null==t?0:vn(ps(t),0),Gr((function(n){var r=n[t],i=wi(n,0,t);return r&&Rt(i,r),kt(e,this,i)}))},Pn.tail=function(e){var t=null==e?0:e.length;return t?ri(e,1,t):[]},Pn.take=function(e,t,r){return e&&e.length?ri(e,0,(t=r||t===n?1:ps(t))<0?0:t):[]},Pn.takeRight=function(e,t,r){var i=null==e?0:e.length;return i?ri(e,(t=i-(t=r||t===n?1:ps(t)))<0?0:t,i):[]},Pn.takeRightWhile=function(e,t){return e&&e.length?hi(e,lo(t,3),!1,!0):[]},Pn.takeWhile=function(e,t){return e&&e.length?hi(e,lo(t,3)):[]},Pn.tap=function(e,t){return t(e),e},Pn.throttle=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new De(r);return es(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),Ea(e,t,{leading:i,maxWait:t,trailing:o})},Pn.thru=ha,Pn.toArray=fs,Pn.toPairs=Fs,Pn.toPairsIn=Ls,Pn.toPath=function(e){return Va(e)?Mt(e,Bo):ls(e)?[e]:Di(No(vs(e)))},Pn.toPlainObject=bs,Pn.transform=function(e,t,n){var r=Va(e),i=r||qa(e)||cs(e);if(t=lo(t,4),null==n){var o=e&&e.constructor;n=i?r?new o:[]:es(e)&&Za(o)?zn(Ue(e)):{}}return(i?Ot:xr)(e,(function(e,r,i){return t(n,e,r,i)})),n},Pn.unary=function(e){return Oa(e,1)},Pn.union=ta,Pn.unionBy=na,Pn.unionWith=ra,Pn.uniq=function(e){return e&&e.length?di(e):[]},Pn.uniqBy=function(e,t){return e&&e.length?di(e,lo(t,2)):[]},Pn.uniqWith=function(e,t){return t="function"==typeof t?t:n,e&&e.length?di(e,n,t):[]},Pn.unset=function(e,t){return null==e||ui(e,t)},Pn.unzip=ia,Pn.unzipWith=oa,Pn.update=function(e,t,n){return null==e?e:fi(e,t,vi(n))},Pn.updateWith=function(e,t,r,i){return i="function"==typeof i?i:n,null==e?e:fi(e,t,vi(r),i)},Pn.values=Ps,Pn.valuesIn=function(e){return null==e?[]:Qt(e,_s(e))},Pn.without=aa,Pn.words=Zs,Pn.wrap=function(e,t){return Ba(vi(t),e)},Pn.xor=sa,Pn.xorBy=la,Pn.xorWith=ca,Pn.zip=da,Pn.zipObject=function(e,t){return mi(e||[],t||[],tr)},Pn.zipObjectDeep=function(e,t){return mi(e||[],t||[],Jr)},Pn.zipWith=ua,Pn.entries=Fs,Pn.entriesIn=Ls,Pn.extend=xs,Pn.extendWith=ws,sl(Pn,Pn),Pn.add=bl,Pn.attempt=Qs,Pn.camelCase=zs,Pn.capitalize=Hs,Pn.ceil=vl,Pn.clamp=function(e,t,r){return r===n&&(r=t,t=n),r!==n&&(r=(r=ms(r))==r?r:0),t!==n&&(t=(t=ms(t))==t?t:0),sr(ms(e),t,r)},Pn.clone=function(e){return lr(e,4)},Pn.cloneDeep=function(e){return lr(e,5)},Pn.cloneDeepWith=function(e,t){return lr(e,5,t="function"==typeof t?t:n)},Pn.cloneWith=function(e,t){return lr(e,4,t="function"==typeof t?t:n)},Pn.conformsTo=function(e,t){return null==t||cr(e,t,Es(t))},Pn.deburr=Ws,Pn.defaultTo=function(e,t){return null==e||e!=e?t:e},Pn.divide=yl,Pn.endsWith=function(e,t,r){e=vs(e),t=ci(t);var i=e.length,o=r=r===n?i:sr(ps(r),0,i);return(r-=t.length)>=0&&e.slice(r,o)==t},Pn.eq=Pa,Pn.escape=function(e){return(e=vs(e))&&X.test(e)?e.replace(K,rn):e},Pn.escapeRegExp=function(e){return(e=vs(e))&&re.test(e)?e.replace(ne,"\\$&"):e},Pn.every=function(e,t,r){var i=Va(e)?Dt:pr;return r&&xo(e,t,r)&&(t=n),i(e,lo(t,3))},Pn.find=ma,Pn.findIndex=Wo,Pn.findKey=function(e,t){return Lt(e,lo(t,3),xr)},Pn.findLast=ba,Pn.findLastIndex=Vo,Pn.findLastKey=function(e,t){return Lt(e,lo(t,3),wr)},Pn.floor=xl,Pn.forEach=va,Pn.forEachRight=ya,Pn.forIn=function(e,t){return null==e?e:vr(e,lo(t,3),_s)},Pn.forInRight=function(e,t){return null==e?e:yr(e,lo(t,3),_s)},Pn.forOwn=function(e,t){return e&&xr(e,lo(t,3))},Pn.forOwnRight=function(e,t){return e&&wr(e,lo(t,3))},Pn.get=Cs,Pn.gt=za,Pn.gte=Ha,Pn.has=function(e,t){return null!=e&&mo(e,t,Or)},Pn.hasIn=Os,Pn.head=Uo,Pn.identity=rl,Pn.includes=function(e,t,n,r){e=Ua(e)?e:Ps(e),n=n&&!r?ps(n):0;var i=e.length;return n<0&&(n=vn(i+n,0)),ss(e)?n<=i&&e.indexOf(t,n)>-1:!!i&&zt(e,t,n)>-1},Pn.indexOf=function(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var i=null==n?0:ps(n);return i<0&&(i=vn(r+i,0)),zt(e,t,i)},Pn.inRange=function(e,t,r){return t=hs(t),r===n?(r=t,t=0):r=hs(r),function(e,t,n){return e>=yn(t,n)&&e<vn(t,n)}(e=ms(e),t,r)},Pn.invoke=Is,Pn.isArguments=Wa,Pn.isArray=Va,Pn.isArrayBuffer=Ya,Pn.isArrayLike=Ua,Pn.isArrayLikeObject=Ka,Pn.isBoolean=function(e){return!0===e||!1===e||ts(e)&&kr(e)==v},Pn.isBuffer=qa,Pn.isDate=Xa,Pn.isElement=function(e){return ts(e)&&1===e.nodeType&&!is(e)},Pn.isEmpty=function(e){if(null==e)return!0;if(Ua(e)&&(Va(e)||"string"==typeof e||"function"==typeof e.splice||qa(e)||cs(e)||Wa(e)))return!e.length;var t=go(e);if(t==j||t==T)return!e.size;if(So(e))return!Nr(e).length;for(var n in e)if(Ae.call(e,n))return!1;return!0},Pn.isEqual=function(e,t){return _r(e,t)},Pn.isEqualWith=function(e,t,r){var i=(r="function"==typeof r?r:n)?r(e,t):n;return i===n?_r(e,t,n,r):!!i},Pn.isError=Ga,Pn.isFinite=function(e){return"number"==typeof e&&Ft(e)},Pn.isFunction=Za,Pn.isInteger=Qa,Pn.isLength=Ja,Pn.isMap=ns,Pn.isMatch=function(e,t){return e===t||Mr(e,t,uo(t))},Pn.isMatchWith=function(e,t,r){return r="function"==typeof r?r:n,Mr(e,t,uo(t),r)},Pn.isNaN=function(e){return rs(e)&&e!=+e},Pn.isNative=function(e){if(jo(e))throw new je("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");return Rr(e)},Pn.isNil=function(e){return null==e},Pn.isNull=function(e){return null===e},Pn.isNumber=rs,Pn.isObject=es,Pn.isObjectLike=ts,Pn.isPlainObject=is,Pn.isRegExp=os,Pn.isSafeInteger=function(e){return Qa(e)&&e>=-9007199254740991&&e<=f},Pn.isSet=as,Pn.isString=ss,Pn.isSymbol=ls,Pn.isTypedArray=cs,Pn.isUndefined=function(e){return e===n},Pn.isWeakMap=function(e){return ts(e)&&go(e)==E},Pn.isWeakSet=function(e){return ts(e)&&"[object WeakSet]"==kr(e)},Pn.join=function(e,t){return null==e?"":Ut.call(e,t)},Pn.kebabCase=Vs,Pn.last=Go,Pn.lastIndexOf=function(e,t,r){var i=null==e?0:e.length;if(!i)return-1;var o=i;return r!==n&&(o=(o=ps(r))<0?vn(i+o,0):yn(o,i-1)),t==t?function(e,t,n){for(var r=n+1;r--;)if(e[r]===t)return r;return r}(e,t,o):Pt(e,Wt,o,!0)},Pn.lowerCase=Ys,Pn.lowerFirst=Us,Pn.lt=ds,Pn.lte=us,Pn.max=function(e){return e&&e.length?gr(e,rl,Cr):n},Pn.maxBy=function(e,t){return e&&e.length?gr(e,lo(t,2),Cr):n},Pn.mean=function(e){return Vt(e,rl)},Pn.meanBy=function(e,t){return Vt(e,lo(t,2))},Pn.min=function(e){return e&&e.length?gr(e,rl,Fr):n},Pn.minBy=function(e,t){return e&&e.length?gr(e,lo(t,2),Fr):n},Pn.stubArray=gl,Pn.stubFalse=ml,Pn.stubObject=function(){return{}},Pn.stubString=function(){return""},Pn.stubTrue=function(){return!0},Pn.multiply=$l,Pn.nth=function(e,t){return e&&e.length?Wr(e,ps(t)):n},Pn.noConflict=function(){return ht._===this&&(ht._=Pe),this},Pn.noop=ll,Pn.now=Ca,Pn.pad=function(e,t,n){e=vs(e);var r=(t=ps(t))?fn(e):0;if(!t||r>=t)return e;var i=(t-r)/2;return Vi(gt(i),n)+e+Vi(pt(i),n)},Pn.padEnd=function(e,t,n){e=vs(e);var r=(t=ps(t))?fn(e):0;return t&&r<t?e+Vi(t-r,n):e},Pn.padStart=function(e,t,n){e=vs(e);var r=(t=ps(t))?fn(e):0;return t&&r<t?Vi(t-r,n)+e:e},Pn.parseInt=function(e,t,n){return n||null==t?t=0:t&&(t=+t),wn(vs(e).replace(ie,""),t||0)},Pn.random=function(e,t,r){if(r&&"boolean"!=typeof r&&xo(e,t,r)&&(t=r=n),r===n&&("boolean"==typeof t?(r=t,t=n):"boolean"==typeof e&&(r=e,e=n)),e===n&&t===n?(e=0,t=1):(e=hs(e),t===n?(t=e,e=0):t=hs(t)),e>t){var i=e;e=t,t=i}if(r||e%1||t%1){var o=$n();return yn(e+o*(t-e+ct("1e-"+((o+"").length-1))),t)}return qr(e,t)},Pn.reduce=function(e,t,n){var r=Va(e)?At:Kt,i=arguments.length<3;return r(e,lo(t,4),n,i,fr)},Pn.reduceRight=function(e,t,n){var r=Va(e)?Nt:Kt,i=arguments.length<3;return r(e,lo(t,4),n,i,hr)},Pn.repeat=function(e,t,r){return t=(r?xo(e,t,r):t===n)?1:ps(t),Xr(vs(e),t)},Pn.replace=function(){var e=arguments,t=vs(e[0]);return e.length<3?t:t.replace(e[1],e[2])},Pn.result=function(e,t,r){var i=-1,o=(t=yi(t,e)).length;for(o||(o=1,e=n);++i<o;){var a=null==e?n:e[Bo(t[i])];a===n&&(i=o,a=r),e=Za(a)?a.call(e):a}return e},Pn.round=jl,Pn.runInContext=e,Pn.sample=function(e){return(Va(e)?Zn:Zr)(e)},Pn.size=function(e){if(null==e)return 0;if(Ua(e))return ss(e)?fn(e):e.length;var t=go(e);return t==j||t==T?e.size:Nr(e).length},Pn.snakeCase=Ks,Pn.some=function(e,t,r){var i=Va(e)?Bt:ii;return r&&xo(e,t,r)&&(t=n),i(e,lo(t,3))},Pn.sortedIndex=function(e,t){return oi(e,t)},Pn.sortedIndexBy=function(e,t,n){return ai(e,t,lo(n,2))},Pn.sortedIndexOf=function(e,t){var n=null==e?0:e.length;if(n){var r=oi(e,t);if(r<n&&Pa(e[r],t))return r}return-1},Pn.sortedLastIndex=function(e,t){return oi(e,t,!0)},Pn.sortedLastIndexBy=function(e,t,n){return ai(e,t,lo(n,2),!0)},Pn.sortedLastIndexOf=function(e,t){if(null==e?0:e.length){var n=oi(e,t,!0)-1;if(Pa(e[n],t))return n}return-1},Pn.startCase=qs,Pn.startsWith=function(e,t,n){return e=vs(e),n=null==n?0:sr(ps(n),0,e.length),t=ci(t),e.slice(n,n+t.length)==t},Pn.subtract=Sl,Pn.sum=function(e){return e&&e.length?qt(e,rl):0},Pn.sumBy=function(e,t){return e&&e.length?qt(e,lo(t,2)):0},Pn.template=function(e,t,r){var i=Pn.templateSettings;r&&xo(e,t,r)&&(t=n),e=vs(e),t=ws({},t,i,Qi);var o,a,s=ws({},t.imports,i.imports,Qi),l=Es(s),c=Qt(s,l),d=0,u=t.interpolate||xe,f="__p += '",h=Oe((t.escape||xe).source+"|"+u.source+"|"+(u===Q?fe:xe).source+"|"+(t.evaluate||xe).source+"|$","g"),p="//# sourceURL="+(Ae.call(t,"sourceURL")?(t.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++ot+"]")+"\n";e.replace(h,(function(t,n,r,i,s,l){return r||(r=i),f+=e.slice(d,l).replace(we,on),n&&(o=!0,f+="' +\n__e("+n+") +\n'"),s&&(a=!0,f+="';\n"+s+";\n__p += '"),r&&(f+="' +\n((__t = ("+r+")) == null ? '' : __t) +\n'"),d=l+t.length,t})),f+="';\n";var g=Ae.call(t,"variable")&&t.variable;if(g){if(de.test(g))throw new je("Invalid `variable` option passed into `_.template`")}else f="with (obj) {\n"+f+"\n}\n";f=(a?f.replace(W,""):f).replace(V,"$1").replace(Y,"$1;"),f="function("+(g||"obj")+") {\n"+(g?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(o?", __e = _.escape":"")+(a?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+f+"return __p\n}";var m=Qs((function(){return Se(l,p+"return "+f).apply(n,c)}));if(m.source=f,Ga(m))throw m;return m},Pn.times=function(e,t){if((e=ps(e))<1||e>f)return[];var n=p,r=yn(e,p);t=lo(t),e-=p;for(var i=Xt(r,t);++n<e;)t(n);return i},Pn.toFinite=hs,Pn.toInteger=ps,Pn.toLength=gs,Pn.toLower=function(e){return vs(e).toLowerCase()},Pn.toNumber=ms,Pn.toSafeInteger=function(e){return e?sr(ps(e),-9007199254740991,f):0===e?e:0},Pn.toString=vs,Pn.toUpper=function(e){return vs(e).toUpperCase()},Pn.trim=function(e,t,r){if((e=vs(e))&&(r||t===n))return Gt(e);if(!e||!(t=ci(t)))return e;var i=hn(e),o=hn(t);return wi(i,en(i,o),tn(i,o)+1).join("")},Pn.trimEnd=function(e,t,r){if((e=vs(e))&&(r||t===n))return e.slice(0,pn(e)+1);if(!e||!(t=ci(t)))return e;var i=hn(e);return wi(i,0,tn(i,hn(t))+1).join("")},Pn.trimStart=function(e,t,r){if((e=vs(e))&&(r||t===n))return e.replace(ie,"");if(!e||!(t=ci(t)))return e;var i=hn(e);return wi(i,en(i,hn(t))).join("")},Pn.truncate=function(e,t){var r=30,i="...";if(es(t)){var o="separator"in t?t.separator:o;r="length"in t?ps(t.length):r,i="omission"in t?ci(t.omission):i}var a=(e=vs(e)).length;if(an(e)){var s=hn(e);a=s.length}if(r>=a)return e;var l=r-fn(i);if(l<1)return i;var c=s?wi(s,0,l).join(""):e.slice(0,l);if(o===n)return c+i;if(s&&(l+=c.length-l),os(o)){if(e.slice(l).search(o)){var d,u=c;for(o.global||(o=Oe(o.source,vs(he.exec(o))+"g")),o.lastIndex=0;d=o.exec(u);)var f=d.index;c=c.slice(0,f===n?l:f)}}else if(e.indexOf(ci(o),l)!=l){var h=c.lastIndexOf(o);h>-1&&(c=c.slice(0,h))}return c+i},Pn.unescape=function(e){return(e=vs(e))&&q.test(e)?e.replace(U,gn):e},Pn.uniqueId=function(e){var t=++Ne;return vs(e)+t},Pn.upperCase=Xs,Pn.upperFirst=Gs,Pn.each=va,Pn.eachRight=ya,Pn.first=Uo,sl(Pn,(wl={},xr(Pn,(function(e,t){Ae.call(Pn.prototype,t)||(wl[t]=e)})),wl),{chain:!1}),Pn.VERSION="4.17.21",Ot(["bind","bindKey","curry","curryRight","partial","partialRight"],(function(e){Pn[e].placeholder=Pn})),Ot(["drop","take"],(function(e,t){Vn.prototype[e]=function(r){r=r===n?1:vn(ps(r),0);var i=this.__filtered__&&!t?new Vn(this):this.clone();return i.__filtered__?i.__takeCount__=yn(r,i.__takeCount__):i.__views__.push({size:yn(r,p),type:e+(i.__dir__<0?"Right":"")}),i},Vn.prototype[e+"Right"]=function(t){return this.reverse()[e](t).reverse()}})),Ot(["filter","map","takeWhile"],(function(e,t){var n=t+1,r=1==n||3==n;Vn.prototype[e]=function(e){var t=this.clone();return t.__iteratees__.push({iteratee:lo(e,3),type:n}),t.__filtered__=t.__filtered__||r,t}})),Ot(["head","last"],(function(e,t){var n="take"+(t?"Right":"");Vn.prototype[e]=function(){return this[n](1).value()[0]}})),Ot(["initial","tail"],(function(e,t){var n="drop"+(t?"":"Right");Vn.prototype[e]=function(){return this.__filtered__?new Vn(this):this[n](1)}})),Vn.prototype.compact=function(){return this.filter(rl)},Vn.prototype.find=function(e){return this.filter(e).head()},Vn.prototype.findLast=function(e){return this.reverse().find(e)},Vn.prototype.invokeMap=Gr((function(e,t){return"function"==typeof e?new Vn(this):this.map((function(n){return Ir(n,e,t)}))})),Vn.prototype.reject=function(e){return this.filter(Aa(lo(e)))},Vn.prototype.slice=function(e,t){e=ps(e);var r=this;return r.__filtered__&&(e>0||t<0)?new Vn(r):(e<0?r=r.takeRight(-e):e&&(r=r.drop(e)),t!==n&&(r=(t=ps(t))<0?r.dropRight(-t):r.take(t-e)),r)},Vn.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},Vn.prototype.toArray=function(){return this.take(p)},xr(Vn.prototype,(function(e,t){var r=/^(?:filter|find|map|reject)|While$/.test(t),i=/^(?:head|last)$/.test(t),o=Pn[i?"take"+("last"==t?"Right":""):t],a=i||/^find/.test(t);o&&(Pn.prototype[t]=function(){var t=this.__wrapped__,s=i?[1]:arguments,l=t instanceof Vn,c=s[0],d=l||Va(t),u=function(e){var t=o.apply(Pn,Rt([e],s));return i&&f?t[0]:t};d&&r&&"function"==typeof c&&1!=c.length&&(l=d=!1);var f=this.__chain__,h=!!this.__actions__.length,p=a&&!f,g=l&&!h;if(!a&&d){t=g?t:new Vn(this);var m=e.apply(t,s);return m.__actions__.push({func:ha,args:[u],thisArg:n}),new Wn(m,f)}return p&&g?e.apply(this,s):(m=this.thru(u),p?i?m.value()[0]:m.value():m)})})),Ot(["pop","push","shift","sort","splice","unshift"],(function(e){var t=Ie[e],n=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",r=/^(?:pop|shift)$/.test(e);Pn.prototype[e]=function(){var e=arguments;if(r&&!this.__chain__){var i=this.value();return t.apply(Va(i)?i:[],e)}return this[n]((function(n){return t.apply(Va(n)?n:[],e)}))}})),xr(Vn.prototype,(function(e,t){var n=Pn[t];if(n){var r=n.name+"";Ae.call(En,r)||(En[r]=[]),En[r].push({name:t,func:n})}})),En[Pi(n,2).name]=[{name:"wrapper",func:n}],Vn.prototype.clone=function(){var e=new Vn(this.__wrapped__);return e.__actions__=Di(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=Di(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=Di(this.__views__),e},Vn.prototype.reverse=function(){if(this.__filtered__){var e=new Vn(this);e.__dir__=-1,e.__filtered__=!0}else(e=this.clone()).__dir__*=-1;return e},Vn.prototype.value=function(){var e=this.__wrapped__.value(),t=this.__dir__,n=Va(e),r=t<0,i=n?e.length:0,o=function(e,t,n){var r=-1,i=n.length;for(;++r<i;){var o=n[r],a=o.size;switch(o.type){case"drop":e+=a;break;case"dropRight":t-=a;break;case"take":t=yn(t,e+a);break;case"takeRight":e=vn(e,t-a)}}return{start:e,end:t}}(0,i,this.__views__),a=o.start,s=o.end,l=s-a,c=r?s:a-1,d=this.__iteratees__,u=d.length,f=0,h=yn(l,this.__takeCount__);if(!n||!r&&i==l&&h==l)return pi(e,this.__actions__);var p=[];e:for(;l--&&f<h;){for(var g=-1,m=e[c+=t];++g<u;){var b=d[g],v=b.iteratee,y=b.type,x=v(m);if(2==y)m=x;else if(!x){if(1==y)continue e;break e}}p[f++]=m}return p},Pn.prototype.at=pa,Pn.prototype.chain=function(){return fa(this)},Pn.prototype.commit=function(){return new Wn(this.value(),this.__chain__)},Pn.prototype.next=function(){this.__values__===n&&(this.__values__=fs(this.value()));var e=this.__index__>=this.__values__.length;return{done:e,value:e?n:this.__values__[this.__index__++]}},Pn.prototype.plant=function(e){for(var t,r=this;r instanceof Hn;){var i=Lo(r);i.__index__=0,i.__values__=n,t?o.__wrapped__=i:t=i;var o=i;r=r.__wrapped__}return o.__wrapped__=e,t},Pn.prototype.reverse=function(){var e=this.__wrapped__;if(e instanceof Vn){var t=e;return this.__actions__.length&&(t=new Vn(this)),(t=t.reverse()).__actions__.push({func:ha,args:[ea],thisArg:n}),new Wn(t,this.__chain__)}return this.thru(ea)},Pn.prototype.toJSON=Pn.prototype.valueOf=Pn.prototype.value=function(){return pi(this.__wrapped__,this.__actions__)},Pn.prototype.first=Pn.prototype.head,Ze&&(Pn.prototype[Ze]=function(){return this}),Pn}();gt?((gt.exports=mn)._=mn,pt._=mn):ht._=mn}).call(Di)}(rS,rS.exports);var iS=rS.exports;const oS=Y.default.forwardRef(((n,r)=>{var{value:i,readOnly:o,"data-testid":a,maskRange:s,unmaskRange:l,maskRegex:c,maskTransformer:d,iconMask:u=e.jsx($.EyeSlashIcon,{}),iconUnmask:f=e.jsx(w.EyeIcon,{}),iconActiveColor:h,iconInactiveColor:p,maskChar:g="•",error:m,disableMask:b,transformInput:v,loadState:y,onMask:x,onUnmask:j,onChange:S,onFocus:k,onBlur:C,onTryAgain:O}=n,T=X(n,["value","readOnly","data-testid","maskRange","unmaskRange","maskRegex","maskTransformer","iconMask","iconUnmask","iconActiveColor","iconInactiveColor","maskChar","error","disableMask","transformInput","loadState","onMask","onUnmask","onChange","onFocus","onBlur","onTryAgain"]);const D=o&&iS.isEmpty(i),[I,E]=t.useState(!b),[_,M]=t.useState(i||"");t.useEffect((()=>{M(i)}),[i]);const R=e=>{L(!1),k&&k(e)},A=e=>{L(!0),C&&C(e)},N=e=>{let t=e.target.value;switch(v){case"uppercase":t=t.toUpperCase();break;case"lowercase":t=t.toLowerCase()}M(t),e.target.value=t,S&&S(e)},B=()=>{o&&O&&O()},F=()=>{L(!I)},L=e=>{E(e),e?x&&x():j&&j()},P=()=>!(null==_?void 0:_.toString().length)||b,z=()=>{const t=P();return!D&&e.jsx(qj,Object.assign({"data-testid":"icon-"+(I?"masked":"unmasked"),onClick:t?void 0:F,$isDisabled:t,$inactiveColor:p,$activeColor:h},{children:I?f:u}))};return e.jsx("div",Object.assign({"aria-busy":"loading"===y,"aria-live":"polite"},{children:(()=>{if(o)switch(y){case"fail":return e.jsxs(nS,Object.assign({onClick:B,"data-testid":"try-again-button"},{children:[e.jsxs(Jj,{children:[e.jsx(eS,{}),e.jsx(tS,{children:"Error"})]}),e.jsx(Qj,Object.assign({weight:"semibold"},{children:"Try again?"}))]}));case"loading":return e.jsxs(Xj,{children:[e.jsx(Zj,{}),e.jsx(Gj,{children:"Retrieving..."})]})}return e.jsx(Kj,Object.assign({ref:r,"data-testid":`${a||"masked-input"}${I?"-masked":"-unmasked"}`,addon:{type:"custom",attributes:{children:z()},position:"right"},onFocus:o?void 0:R,onBlur:o?void 0:A,onClick:o?F:void 0,onChange:N,value:D?"-":I&&!b?dc.maskValue(null==_?void 0:_.toString(),{maskChar:g,maskRange:s,unmaskRange:l,maskRegex:c,maskTransformer:d}):_,readOnly:o,error:m,$isDisabled:P()},T))})()}))})),aS=Y.default.forwardRef(((t,n)=>{const{label:r,errorMessage:i,id:o="form-field-masked-input","data-error-testid":a,"data-testid":s,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u}=t,f=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e.jsx(gy,Object.assign({id:o,label:r,errorMessage:i,disabled:f.disabled,"data-error-testid":a,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u},{children:e.jsx(oS,Object.assign({ref:n,id:`${o}-base`,"data-testid":s||o,error:!!i},f))}))})),sS=i.css`
    overflow: hidden;
    display: -webkit-inline-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${e=>e.$maxLines||2};
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
`,lS=K.default.div`
    ${e=>ys.getTextStyle("small"===e.$variant?"BodySmall":"Body",e.$bold?"semibold":"regular")}
    color: ${e=>e.$selected?ts.Primary:ts.Neutral[1]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&sS}
`,cS=K.default.div`
    color: ${ts.Neutral[4]};
    width: 100%;

    ${e=>"end"===e.$truncateType&&sS}

    ${e=>"next-line"===e.$labelDisplayType?i.css`
                    ${ys.getTextStyle("BodySmall","semibold")}
                `:i.css`
                    ${ys.getTextStyle("Body","regular")}
                `}
`,dS=K.default.span`
    ${e=>ys.getTextStyle("small"===e.$variant?"BodySmall":"Body","semibold")}
`,uS=K.default.div`
    text-align: left;
    width: 100%;
    overflow: hidden;
    overflow-wrap: break-word;

    ${e=>{switch(e.$labelDisplayType){case"next-line":return i.css`
                    display: flex;
                    flex-direction: column;
                `;case"inline":return i.css`
                    ${lS} {
                        display: inline;
                    }

                    ${cS} {
                        display: inline;
                        margin-left: 0.5rem;
                    }
                `}}}
`,fS=K.default.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    word-break: break-all;
    overflow: hidden;
`,hS=K.default.div`
    display: inline-block;
    width: ${e=>1===e.$maxLines?50:100}%;
    height: 1.5rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    direction: rtl;
    text-align: right;
`,pS=({bold:n,displayType:r="inline",label:o,searchTerm:a,maxLines:s=2,selected:l,sublabel:c,truncationType:d="middle",variant:u})=>{const f=i.useTheme()||ml,h=hs.Body.fontSize({theme:f}),p=hs.Body.fontFamily({theme:f}),{ref:g,width:m}=qe(),b=t.useCallback((e=>{if("inline"!==r)return!1;return dc.getTextWidth(e,`${h}rem '${p}'`)>m*s-50}),[m,r,h,p,s]),v=t.useMemo((()=>b(o)),[b,o]),y=t.useMemo((()=>c&&b(c)),[b,c]),x=v||y?"next-line":r,w=t=>{if(!a)return t;const n=a.toLowerCase().trim(),r=t.toLowerCase().indexOf(n),i=r+a.length;return-1===r?t:e.jsxs(e.Fragment,{children:[o.slice(0,r),e.jsx(dS,Object.assign({$variant:u},{children:o.slice(r,i)})),o.slice(i)]})},$=t=>e.jsxs(e.Fragment,{children:[e.jsx(fS,Object.assign({$maxLines:s,"aria-hidden":!0},{children:w(t)})),e.jsx(hS,Object.assign({$maxLines:s,"aria-hidden":!0},{children:w(t)}))]});return e.jsxs(uS,Object.assign({ref:g,$labelDisplayType:x},{children:[e.jsx(lS,Object.assign({"aria-label":o,$bold:n,$maxLines:s,$selected:l,$truncateType:d,$variant:u},{children:"middle"===d&&v?$(o):w(o)})),c&&e.jsx(cS,Object.assign({"aria-label":c,$maxLines:s,$truncateType:d,$labelDisplayType:r},{children:"middle"===d&&y?$(c):c}))]}))},gS=0,mS=1,bS=2,vS=4;function yS(e){return()=>e}function xS(e){e()}function wS(e,t){return n=>e(t(n))}function $S(e,t){return()=>e(t)}function jS(e,t){return n=>e(t,n)}function SS(e){return void 0!==e}function kS(){}function CS(e,t){return t(e),e}function OS(e,t){return t(e)}function TS(...e){return e}function DS(e,t){return e(mS,t)}function IS(e,t){e(gS,t)}function ES(e){e(bS)}function _S(e){return e(vS)}function MS(e,t){return DS(e,jS(t,gS))}function RS(e,t){const n=e(mS,(e=>{n(),t(e)}));return n}function AS(e){let t,n;return r=>i=>{t=i,n&&clearTimeout(n),n=setTimeout((()=>{r(t)}),e)}}function NS(e,t){return e===t}function BS(e=NS){let t;return n=>r=>{e(t,r)||(t=r,n(r))}}function FS(e){return t=>n=>{e(n)&&t(n)}}function LS(e){return t=>wS(t,e)}function PS(e){return t=>()=>{t(e)}}function zS(e,...t){const n=function(...e){return t=>e.reduceRight(OS,t)}(...t);return(t,r)=>{switch(t){case bS:return void ES(e);case mS:return DS(e,n(r))}}}function HS(e,t){return n=>r=>{n(t=e(t,r))}}function WS(e){return t=>n=>{e>0?e--:t(n)}}function VS(e){let t,n=null;return r=>i=>{n=i,!t&&(t=setTimeout((()=>{t=void 0,r(n)}),e))}}function YS(...e){const t=new Array(e.length);let n=0,r=null;const i=Math.pow(2,e.length)-1;return e.forEach(((e,o)=>{const a=Math.pow(2,o);DS(e,(e=>{const s=n;n|=a,t[o]=e,s!==i&&n===i&&r&&(r(),r=null)}))})),e=>o=>{const a=()=>{e([o].concat(t))};n===i?a():r=a}}function US(e){let t=e;const n=qS();return(e,r)=>{switch(e){case gS:t=r;break;case mS:r(t);break;case vS:return t}return n(e,r)}}function KS(e,t){return CS(US(t),(t=>MS(e,t)))}function qS(){const e=[];return(t,n)=>{switch(t){case gS:return void e.slice().forEach((e=>{e(n)}));case bS:return void e.splice(0,e.length);case mS:return e.push(n),()=>{const t=e.indexOf(n);t>-1&&e.splice(t,1)}}}}function XS(e){return CS(qS(),(t=>MS(e,t)))}function GS(e,t=[],{singleton:n}={singleton:!0}){return{constructor:e,dependencies:t,id:ZS(),singleton:n}}const ZS=()=>Symbol();function QS(...e){const t=qS(),n=new Array(e.length);let r=0;const i=Math.pow(2,e.length)-1;return e.forEach(((e,o)=>{const a=Math.pow(2,o);DS(e,(e=>{n[o]=e,r|=a,r===i&&IS(t,n)}))})),function(e,o){switch(e){case bS:return void ES(t);case mS:return r===i&&o(n),DS(t,o)}}}function JS(e,t=NS){return zS(e,BS(t))}function ek(...e){return function(t,n){switch(t){case bS:return;case mS:return function(...e){return()=>{e.map(xS)}}(...e.map((e=>DS(e,n))))}}}var tk=(e=>(e[e.DEBUG=0]="DEBUG",e[e.INFO=1]="INFO",e[e.WARN=2]="WARN",e[e.ERROR=3]="ERROR",e))(tk||{});const nk={0:"debug",3:"error",1:"log",2:"warn"},rk=GS((()=>{const e=US(3);return{log:US(((t,n,r=1)=>{var i;r>=(null!=(i=(typeof globalThis>"u"?window:globalThis).VIRTUOSO_LOG_LEVEL)?i:_S(e))&&console[nk[r]]("%creact-virtuoso: %c%s %o","color: #0253b3; font-weight: bold","color: initial",t,n)})),logLevel:e}}),[],{singleton:!0});function ik(e,t,n){return ok(e,t,n).callbackRef}function ok(e,t,n){const r=Y.default.useRef(null);let i=e=>{};if(typeof ResizeObserver<"u"){const o=Y.default.useMemo((()=>new ResizeObserver((t=>{const r=()=>{const n=t[0].target;null!==n.offsetParent&&e(n)};n?r():requestAnimationFrame(r)}))),[e]);i=e=>{e&&t?(o.observe(e),r.current=e):(r.current&&o.unobserve(r.current),r.current=null)}}return{callbackRef:i,ref:r}}function ak(e,t,n,r,i,o,a,s,l){const c=Y.default.useCallback((n=>{const l=function(e,t,n,r){const i=e.length;if(0===i)return null;const o=[];for(let a=0;a<i;a++){const i=e.item(a);if(void 0===i.dataset.index)continue;const s=parseInt(i.dataset.index),l=parseFloat(i.dataset.knownSize),c=t(i,n);if(0===c&&r("Zero-sized element, this should not happen",{child:i},tk.ERROR),c===l)continue;const d=o[o.length-1];0===o.length||d.size!==c||d.endIndex!==s-1?o.push({endIndex:s,size:c,startIndex:s}):o[o.length-1].endIndex++}return o}(n.children,t,s?"offsetWidth":"offsetHeight",i);let c=n.parentElement;for(;!c.dataset.virtuosoScroller;)c=c.parentElement;const d="window"===c.lastElementChild.dataset.viewportType,u=a?s?a.scrollLeft:a.scrollTop:d?s?window.pageXOffset||document.documentElement.scrollLeft:window.pageYOffset||document.documentElement.scrollTop:s?c.scrollLeft:c.scrollTop,f=a?s?a.scrollWidth:a.scrollHeight:d?s?document.documentElement.scrollWidth:document.documentElement.scrollHeight:s?c.scrollWidth:c.scrollHeight,h=a?s?a.offsetWidth:a.offsetHeight:d?s?window.innerWidth:window.innerHeight:s?c.offsetWidth:c.offsetHeight;r({scrollHeight:f,scrollTop:Math.max(u,0),viewportHeight:h}),null==o||o(s?sk("column-gap",getComputedStyle(n).columnGap,i):sk("row-gap",getComputedStyle(n).rowGap,i)),null!==l&&e(l)}),[e,t,i,o,a,r]);return ok(c,n,l)}function sk(e,t,n){return"normal"!==t&&!(null!=t&&t.endsWith("px"))&&n(`${e} was not resolved to pixel value correctly`,t,tk.WARN),"normal"===t?0:parseInt(null!=t?t:"0",10)}function lk(e,t,n){const r=Y.default.useRef(null),i=Y.default.useCallback((n=>{if(null==n||!n.offsetParent)return;const i=n.getBoundingClientRect(),o=i.width;let a,s;if(t){const e=t.getBoundingClientRect(),n=i.top-e.top;s=e.height-Math.max(0,n),a=n+t.scrollTop}else s=window.innerHeight-Math.max(0,i.top),a=i.top+window.pageYOffset;r.current={offsetTop:a,visibleHeight:s,visibleWidth:o},e(r.current)}),[e,t]),{callbackRef:o,ref:a}=ok(i,!0,n),s=Y.default.useCallback((()=>{i(a.current)}),[i,a]);return Y.default.useEffect((()=>{if(t){t.addEventListener("scroll",s);const e=new ResizeObserver((()=>{requestAnimationFrame(s)}));return e.observe(t),()=>{t.removeEventListener("scroll",s),e.unobserve(t)}}return window.addEventListener("scroll",s),window.addEventListener("resize",s),()=>{window.removeEventListener("scroll",s),window.removeEventListener("resize",s)}}),[s,t]),o}const ck=GS((()=>{const e=qS(),t=qS(),n=US(0),r=qS(),i=US(0),o=qS(),a=qS(),s=US(0),l=US(0),c=US(0),d=US(0),u=qS(),f=qS(),h=US(!1),p=US(!1),g=US(!1);return MS(zS(e,LS((({scrollTop:e})=>e))),t),MS(zS(e,LS((({scrollHeight:e})=>e))),a),MS(t,i),{deviation:n,fixedFooterHeight:c,fixedHeaderHeight:l,footerHeight:d,headerHeight:s,horizontalDirection:p,scrollBy:f,scrollContainerState:e,scrollHeight:a,scrollingInProgress:h,scrollTo:u,scrollTop:t,skipAnimationFrameInResizeObserver:g,smoothScrollTargetReached:r,statefulScrollTop:i,viewportHeight:o}}),[],{singleton:!0}),dk={lvl:0};function uk(e,t){const n=e.length;if(0===n)return[];let{index:r,value:i}=t(e[0]);const o=[];for(let a=1;a<n;a++){const{index:n,value:s}=t(e[a]);o.push({end:n-1,start:r,value:i}),r=n,i=s}return o.push({end:1/0,start:r,value:i}),o}function fk(e){return e===dk}function hk(e,t){if(!fk(e))return t===e.k?e.v:t<e.k?hk(e.l,t):hk(e.r,t)}function pk(e,t,n="k"){if(fk(e))return[-1/0,void 0];if(Number(e[n])===t)return[e.k,e.v];if(Number(e[n])<t){const r=pk(e.r,t,n);return r[0]===-1/0?[e.k,e.v]:r}return pk(e.l,t,n)}function gk(e,t,n){return fk(e)?Ck(t,n,1):t===e.k?$k(e,{k:t,v:n}):t<e.k?Ok($k(e,{l:gk(e.l,t,n)})):Ok($k(e,{r:gk(e.r,t,n)}))}function mk(){return dk}function bk(e,t,n){if(fk(e))return[];return function(e){return uk(e,(({k:e,v:t})=>({index:e,value:t})))}(xk(e,pk(e,t)[0],n))}function vk(e,t){if(fk(e))return dk;const{k:n,l:r,r:i}=e;if(t===n){if(fk(r))return i;if(fk(i))return r;{const[t,n]=kk(r);return wk($k(e,{k:t,l:jk(r),v:n}))}}return wk($k(e,t<n?{l:vk(r,t)}:{r:vk(i,t)}))}function yk(e){return fk(e)?[]:[...yk(e.l),{k:e.k,v:e.v},...yk(e.r)]}function xk(e,t,n){if(fk(e))return[];const{k:r,l:i,r:o,v:a}=e;let s=[];return r>t&&(s=s.concat(xk(i,t,n))),r>=t&&r<=n&&s.push({k:r,v:a}),r<=n&&(s=s.concat(xk(o,t,n))),s}function wk(e){const{l:t,lvl:n,r:r}=e;if(r.lvl>=n-1&&t.lvl>=n-1)return e;if(n>r.lvl+1){if(Sk(t))return Tk($k(e,{lvl:n-1}));if(!fk(t)&&!fk(t.r))return $k(t.r,{l:$k(t,{r:t.r.l}),lvl:n,r:$k(e,{l:t.r.r,lvl:n-1})});throw new Error("Unexpected empty nodes")}if(Sk(e))return Dk($k(e,{lvl:n-1}));if(fk(r)||fk(r.l))throw new Error("Unexpected empty nodes");{const t=r.l,i=Sk(t)?r.lvl-1:r.lvl;return $k(t,{l:$k(e,{lvl:n-1,r:t.l}),lvl:t.lvl+1,r:Dk($k(r,{l:t.r,lvl:i}))})}}function $k(e,t){return Ck(void 0!==t.k?t.k:e.k,void 0!==t.v?t.v:e.v,void 0!==t.lvl?t.lvl:e.lvl,void 0!==t.l?t.l:e.l,void 0!==t.r?t.r:e.r)}function jk(e){return fk(e.r)?e.l:wk($k(e,{r:jk(e.r)}))}function Sk(e){return fk(e)||e.lvl>e.r.lvl}function kk(e){return fk(e.r)?[e.k,e.v]:kk(e.r)}function Ck(e,t,n,r=dk,i=dk){return{k:e,l:r,lvl:n,r:i,v:t}}function Ok(e){return Dk(Tk(e))}function Tk(e){const{l:t}=e;return fk(t)||t.lvl!==e.lvl?e:$k(t,{r:$k(e,{l:t.r})})}function Dk(e){const{lvl:t,r:n}=e;return fk(n)||fk(n.r)||n.lvl!==t||n.r.lvl!==t?e:$k(n,{l:$k(e,{r:n.l}),lvl:t+1})}function Ik(e,t){return!(!e||e.startIndex!==t.startIndex||e.endIndex!==t.endIndex)}function Ek(e,t){return!(!e||e[0]!==t[0]||e[1]!==t[1])}const _k=GS((()=>({recalcInProgress:US(!1)})),[],{singleton:!0});function Mk(e,t,n){return e[Rk(e,t,n)]}function Rk(e,t,n,r=0){let i=e.length-1;for(;r<=i;){const o=Math.floor((r+i)/2),a=n(e[o],t);if(0===a)return o;if(-1===a){if(i-r<2)return o-1;i=o-1}else{if(i===r)return o;r=o+1}}throw new Error(`Failed binary finding record in array - ${e.join(",")}, searched for ${t}`)}function Ak(e,t){return Math.round(e.getBoundingClientRect()[t])}function Nk(e){return!fk(e.groupOffsetTree)}function Bk({index:e},t){return t===e?0:t<e?-1:1}function Fk({offset:e},t){return t===e?0:t<e?-1:1}function Lk(e,t,n){if(0===t.length)return 0;const{index:r,offset:i,size:o}=Mk(t,e,Bk),a=e-r,s=o*a+(a-1)*n+i;return s>0?s+n:s}function Pk(e,t){if(!Nk(t))return e;let n=0;for(;t.groupIndices[n]<=e+n;)n++;return e+n}function zk(e,t,n){if(function(e){return typeof e.groupIndex<"u"}(e))return t.groupIndices[e.groupIndex]+1;{let r=Pk("LAST"===e.index?n:e.index,t);return r=Math.max(0,r,Math.min(n,r)),r}}function Hk(e,t,n,r=0){return r>0&&(t=Math.max(t,Mk(e,r,Bk).offset)),uk(function(e,t,n,r){const i=Rk(e,t,r),o=Rk(e,n,r,i);return e.slice(i,o+1)}(e,t,n,Fk),Uk)}function Wk(e,[t,n,r,i]){t.length>0&&r("received item sizes",t,tk.DEBUG);const o=e.sizeTree;let a=o,s=0;if(n.length>0&&fk(o)&&2===t.length){const e=t[0].size,r=t[1].size;a=n.reduce(((t,n)=>gk(gk(t,n,e),n+1,r)),a)}else[a,s]=function(e,t){let n=fk(e)?0:1/0;for(const r of t){const{endIndex:t,size:i,startIndex:o}=r;if(n=Math.min(n,o),fk(e)){e=gk(e,0,i);continue}const a=bk(e,o-1,t+1);if(a.some(Kk(r)))continue;let s=!1,l=!1;for(const{end:n,start:r,value:o}of a)s?(t>=r||i===o)&&(e=vk(e,r)):(l=o!==i,s=!0),n>t&&t>=r&&o!==i&&(e=gk(e,t+1,o));l&&(e=gk(e,o,i))}return[e,n]}(a,t);if(a===o)return e;const{lastIndex:l,lastOffset:c,lastSize:d,offsetTree:u}=Yk(e.offsetTree,s,a,i);return{groupIndices:n,groupOffsetTree:n.reduce(((e,t)=>gk(e,t,Lk(t,u,i))),mk()),lastIndex:l,lastOffset:c,lastSize:d,offsetTree:u,sizeTree:a}}function Vk(e,t){let n=0,r=0;for(;n<e;)n+=t[r+1]-t[r]-1,r++;return r-(n===e?0:1)}function Yk(e,t,n,r){let i=e,o=0,a=0,s=0,l=0;if(0!==t){l=Rk(i,t-1,Bk),s=i[l].offset;const e=pk(n,t-1);o=e[0],a=e[1],i.length&&i[l].size===pk(n,t)[1]&&(l-=1),i=i.slice(0,l+1)}else i=[];for(const{start:e,value:l}of bk(n,t,1/0)){const t=e-o,n=t*a+s+t*r;i.push({index:e,offset:n,size:l}),o=e,s=n,a=l}return{lastIndex:o,lastOffset:s,lastSize:a,offsetTree:i}}function Uk(e){return{index:e.index,value:e}}function Kk(e){const{endIndex:t,size:n,startIndex:r}=e;return e=>e.start===r&&(e.end===t||e.end===1/0)&&e.value===n}const qk={offsetHeight:"height",offsetWidth:"width"},Xk=GS((([{log:e},{recalcInProgress:t}])=>{const n=qS(),r=qS(),i=KS(r,0),o=qS(),a=qS(),s=US(0),l=US([]),c=US(void 0),d=US(void 0),u=US(((e,t)=>Ak(e,qk[t]))),f=US(void 0),h=US(0),p={groupIndices:[],groupOffsetTree:mk(),lastIndex:0,lastOffset:0,lastSize:0,offsetTree:[],sizeTree:mk()},g=KS(zS(n,YS(l,e,h),HS(Wk,p),BS()),p),m=KS(zS(l,BS(),HS(((e,t)=>({current:t,prev:e.current})),{current:[],prev:[]}),LS((({prev:e})=>e))),[]);MS(zS(l,FS((e=>e.length>0)),YS(g,h),LS((([e,t,n])=>{const r=e.reduce(((e,r,i)=>gk(e,r,Lk(r,t.offsetTree,n)||i)),mk());return{...t,groupIndices:e,groupOffsetTree:r}}))),g),MS(zS(r,YS(g),FS((([e,{lastIndex:t}])=>e<t)),LS((([e,{lastIndex:t,lastSize:n}])=>[{endIndex:t,size:n,startIndex:e}]))),n),MS(c,d);const b=KS(zS(c,LS((e=>void 0===e))),!0);MS(zS(d,FS((e=>void 0!==e&&fk(_S(g).sizeTree))),LS((e=>[{endIndex:0,size:e,startIndex:0}]))),n);const v=XS(zS(n,YS(g),HS((({sizes:e},[t,n])=>({changed:n!==e,sizes:n})),{changed:!1,sizes:p}),LS((e=>e.changed))));DS(zS(s,HS(((e,t)=>({diff:e.prev-t,prev:t})),{diff:0,prev:0}),LS((e=>e.diff))),(e=>{const{groupIndices:n}=_S(g);if(e>0)IS(t,!0),IS(o,e+Vk(e,n));else if(e<0){const t=_S(m);t.length>0&&(e-=Vk(-e,t)),IS(a,e)}})),DS(zS(s,YS(e)),(([e,t])=>{e<0&&t("`firstItemIndex` prop should not be set to less than zero. If you don't know the total count, just use a very high value",{firstItemIndex:s},tk.ERROR)}));const y=XS(o);MS(zS(o,YS(g),LS((([e,t])=>{const n=t.groupIndices.length>0,r=[],i=t.lastSize;if(n){const n=hk(t.sizeTree,0);let o=0,a=0;for(;o<e;){const e=t.groupIndices[a],s=t.groupIndices.length===a+1?1/0:t.groupIndices[a+1]-e-1;r.push({endIndex:e,size:n,startIndex:e}),r.push({endIndex:e+1+s-1,size:i,startIndex:e+1}),a++,o+=s+1}const s=yk(t.sizeTree);return o!==e&&s.shift(),s.reduce(((t,{k:n,v:r})=>{let i=t.ranges;return 0!==t.prevSize&&(i=[...t.ranges,{endIndex:n+e-1,size:t.prevSize,startIndex:t.prevIndex}]),{prevIndex:n+e,prevSize:r,ranges:i}}),{prevIndex:e,prevSize:0,ranges:r}).ranges}return yk(t.sizeTree).reduce(((t,{k:n,v:r})=>({prevIndex:n+e,prevSize:r,ranges:[...t.ranges,{endIndex:n+e-1,size:t.prevSize,startIndex:t.prevIndex}]})),{prevIndex:0,prevSize:i,ranges:[]}).ranges}))),n);const x=XS(zS(a,YS(g,h),LS((([e,{offsetTree:t},n])=>Lk(-e,t,n)))));return MS(zS(a,YS(g,h),LS((([e,t,n])=>{if(t.groupIndices.length>0){if(fk(t.sizeTree))return t;let r=mk();const i=_S(m);let o=0,a=0,s=0;for(;o<-e;){s=i[a];const e=i[a+1]-s-1;a++,o+=e+1}if(r=yk(t.sizeTree).reduce(((t,{k:n,v:r})=>gk(t,Math.max(0,n+e),r)),r),o!==-e){r=gk(r,0,hk(t.sizeTree,s));r=gk(r,1,pk(t.sizeTree,1-e)[1])}return{...t,sizeTree:r,...Yk(t.offsetTree,0,r,n)}}{const r=yk(t.sizeTree).reduce(((t,{k:n,v:r})=>gk(t,Math.max(0,n+e),r)),mk());return{...t,sizeTree:r,...Yk(t.offsetTree,0,r,n)}}}))),g),{beforeUnshiftWith:y,data:f,defaultItemSize:d,firstItemIndex:s,fixedItemSize:c,gap:h,groupIndices:l,itemSize:u,listRefresh:v,shiftWith:a,shiftWithOffset:x,sizeRanges:n,sizes:g,statefulTotalCount:i,totalCount:r,trackItemSizes:b,unshiftWith:o}}),TS(rk,_k),{singleton:!0});function Gk(e){return e.reduce(((e,t)=>(e.groupIndices.push(e.totalCount),e.totalCount+=t+1,e)),{groupIndices:[],totalCount:0})}const Zk=GS((([{groupIndices:e,sizes:t,totalCount:n},{headerHeight:r,scrollTop:i}])=>{const o=qS(),a=qS(),s=XS(zS(o,LS(Gk)));return MS(zS(s,LS((e=>e.totalCount))),n),MS(zS(s,LS((e=>e.groupIndices))),e),MS(zS(QS(i,t,r),FS((([e,t])=>Nk(t))),LS((([e,t,n])=>pk(t.groupOffsetTree,Math.max(e-n,0),"v")[0])),BS(),LS((e=>[e]))),a),{groupCounts:o,topItemsIndexes:a}}),TS(Xk,ck)),Qk=GS((([{log:e}])=>{const t=US(!1),n=XS(zS(t,FS((e=>e)),BS()));return DS(t,(t=>{t&&_S(e)("props updated",{},tk.DEBUG)})),{didMount:n,propsReady:t}}),TS(rk),{singleton:!0}),Jk=typeof document<"u"&&"scrollBehavior"in document.documentElement.style;function eC(e){const t="number"==typeof e?{index:e}:e;return t.align||(t.align="start"),(!t.behavior||!Jk)&&(t.behavior="auto"),t.offset||(t.offset=0),t}const tC=GS((([{gap:e,listRefresh:t,sizes:n,totalCount:r},{fixedFooterHeight:i,fixedHeaderHeight:o,footerHeight:a,headerHeight:s,scrollingInProgress:l,scrollTo:c,smoothScrollTargetReached:d,viewportHeight:u},{log:f}])=>{const h=qS(),p=qS(),g=US(0);let m=null,b=null,v=null;function y(){m&&(m(),m=null),v&&(v(),v=null),b&&(clearTimeout(b),b=null),IS(l,!1)}return MS(zS(h,YS(n,u,r,g,s,a,f),YS(e,o,i),LS((([[e,n,r,i,o,a,s,c],u,f,g])=>{const x=eC(e),{align:w,behavior:$,offset:j}=x,S=i-1,k=zk(x,n,S);let C=Lk(k,n.offsetTree,u)+a;"end"===w?(C+=f+pk(n.sizeTree,k)[1]-r+g,k===S&&(C+=s)):"center"===w?C+=(f+pk(n.sizeTree,k)[1]-r+g)/2:C-=o,j&&(C+=j);const O=t=>{y(),t?(c("retrying to scroll to",{location:e},tk.DEBUG),IS(h,e)):(IS(p,!0),c("list did not change, scroll successful",{},tk.DEBUG))};if(y(),"smooth"===$){let e=!1;v=DS(t,(t=>{e=e||t})),m=RS(d,(()=>{O(e)}))}else m=RS(zS(t,function(e){return t=>{const n=setTimeout((()=>{t(!1)}),e);return e=>{e&&(t(!0),clearTimeout(n))}}}(150)),O);return b=setTimeout((()=>{y()}),1200),IS(l,!0),c("scrolling from index to",{behavior:$,index:k,top:C},tk.DEBUG),{behavior:$,top:C}}))),c),{scrollTargetReached:p,scrollToIndex:h,topListHeight:g}}),TS(Xk,ck,rk),{singleton:!0});function nC(e,t){0==e?t():requestAnimationFrame((()=>{nC(e-1,t)}))}function rC(e,t){const n=t-1;return"number"==typeof e?e:"LAST"===e.index?n:e.index}const iC=GS((([{defaultItemSize:e,listRefresh:t,sizes:n},{scrollTop:r},{scrollTargetReached:i,scrollToIndex:o},{didMount:a}])=>{const s=US(!0),l=US(0),c=US(!0);return MS(zS(a,YS(l),FS((([e,t])=>!!t)),PS(!1)),s),MS(zS(a,YS(l),FS((([e,t])=>!!t)),PS(!1)),c),DS(zS(QS(t,a),YS(s,n,e,c),FS((([[,e],t,{sizeTree:n},r,i])=>e&&(!fk(n)||SS(r))&&!t&&!i)),YS(l)),(([,e])=>{RS(i,(()=>{IS(c,!0)})),nC(4,(()=>{RS(r,(()=>{IS(s,!0)})),IS(o,e)}))})),{initialItemFinalLocationReached:c,initialTopMostItemIndex:l,scrolledToInitialItem:s}}),TS(Xk,ck,tC,Qk),{singleton:!0});function oC(e,t){return Math.abs(e-t)<1.01}const aC="up",sC="down",lC={atBottom:!1,notAtBottomBecause:"NOT_SHOWING_LAST_ITEM",state:{offsetBottom:0,scrollHeight:0,scrollTop:0,viewportHeight:0}},cC=GS((([{footerHeight:e,headerHeight:t,scrollBy:n,scrollContainerState:r,scrollTop:i,viewportHeight:o}])=>{const a=US(!1),s=US(!0),l=qS(),c=qS(),d=US(4),u=US(0),f=KS(zS(ek(zS(JS(i),WS(1),PS(!0)),zS(JS(i),WS(1),PS(!1),AS(100))),BS()),!1),h=KS(zS(ek(zS(n,PS(!0)),zS(n,PS(!1),AS(200))),BS()),!1);MS(zS(QS(JS(i),JS(u)),LS((([e,t])=>e<=t)),BS()),s),MS(zS(s,VS(50)),c);const p=XS(zS(QS(r,JS(o),JS(t),JS(e),JS(d)),HS(((e,[{scrollHeight:t,scrollTop:n},r,i,o,a])=>{const s={scrollHeight:t,scrollTop:n,viewportHeight:r};if(n+r-t>-a){let t,r;return n>e.state.scrollTop?(t="SCROLLED_DOWN",r=e.state.scrollTop-n):(t="SIZE_DECREASED",r=e.state.scrollTop-n||e.scrollTopDelta),{atBottom:!0,atBottomBecause:t,scrollTopDelta:r,state:s}}let l;return l=s.scrollHeight>e.state.scrollHeight?"SIZE_INCREASED":r<e.state.viewportHeight?"VIEWPORT_HEIGHT_DECREASING":n<e.state.scrollTop?"SCROLLING_UPWARDS":"NOT_FULLY_SCROLLED_TO_LAST_ITEM_BOTTOM",{atBottom:!1,notAtBottomBecause:l,state:s}}),lC),BS(((e,t)=>e&&e.atBottom===t.atBottom)))),g=KS(zS(r,HS(((e,{scrollHeight:t,scrollTop:n,viewportHeight:r})=>{if(oC(e.scrollHeight,t))return{changed:!1,jump:0,scrollHeight:t,scrollTop:n};{const i=t-(n+r)<1;return e.scrollTop!==n&&i?{changed:!0,jump:e.scrollTop-n,scrollHeight:t,scrollTop:n}:{changed:!0,jump:0,scrollHeight:t,scrollTop:n}}}),{changed:!1,jump:0,scrollHeight:0,scrollTop:0}),FS((e=>e.changed)),LS((e=>e.jump))),0);MS(zS(p,LS((e=>e.atBottom))),a),MS(zS(a,VS(50)),l);const m=US(sC);MS(zS(r,LS((({scrollTop:e})=>e)),BS(),HS(((e,t)=>_S(h)?{direction:e.direction,prevScrollTop:t}:{direction:t<e.prevScrollTop?aC:sC,prevScrollTop:t}),{direction:sC,prevScrollTop:0}),LS((e=>e.direction))),m),MS(zS(r,VS(50),PS("none")),m);const b=US(0);return MS(zS(f,FS((e=>!e)),PS(0)),b),MS(zS(i,VS(100),YS(f),FS((([e,t])=>!!t)),HS((([e,t],[n])=>[t,n]),[0,0]),LS((([e,t])=>t-e))),b),{atBottomState:p,atBottomStateChange:l,atBottomThreshold:d,atTopStateChange:c,atTopThreshold:u,isAtBottom:a,isAtTop:s,isScrolling:f,lastJumpDueToItemResize:g,scrollDirection:m,scrollVelocity:b}}),TS(ck)),dC="top",uC="bottom",fC="none";function hC(e,t,n){return"number"==typeof e?n===aC&&t===dC||n===sC&&t===uC?e:0:n===aC?t===dC?e.main:e.reverse:t===uC?e.main:e.reverse}function pC(e,t){var n;return"number"==typeof e?e:null!=(n=e[t])?n:0}const gC=GS((([{deviation:e,fixedHeaderHeight:t,headerHeight:n,scrollTop:r,viewportHeight:i}])=>{const o=qS(),a=US(0),s=US(0),l=US(0),c=KS(zS(QS(JS(r),JS(i),JS(n),JS(o,Ek),JS(l),JS(a),JS(t),JS(e),JS(s)),LS((([e,t,n,[r,i],o,a,s,l,c])=>{const d=e-l,u=a+s,f=Math.max(n-d,0);let h=fC;const p=pC(c,dC),g=pC(c,uC);return r-=l,i+=n+s,(r+=n+s)>e+u-p&&(h=aC),(i-=l)<e-f+t+g&&(h=sC),h!==fC?[Math.max(d-n-hC(o,dC,h)-p,0),d-f-s+t+hC(o,uC,h)+g]:null})),FS((e=>null!=e)),BS(Ek)),[0,0]);return{increaseViewportBy:s,listBoundary:o,overscan:l,topListHeight:a,visibleRange:c}}),TS(ck),{singleton:!0});const mC={bottom:0,firstItemIndex:0,items:[],offsetBottom:0,offsetTop:0,top:0,topItems:[],topListHeight:0,totalCount:0};function bC(e,t,n,r,i,o){const{lastIndex:a,lastOffset:s,lastSize:l}=i;let c=0,d=0;if(e.length>0){c=e[0].offset;const t=e[e.length-1];d=t.offset+t.size}const u=n-a,f=c,h=s+u*l+(u-1)*r-d;return{bottom:d,firstItemIndex:o,items:yC(e,i,o),offsetBottom:h,offsetTop:c,top:f,topItems:yC(t,i,o),topListHeight:t.reduce(((e,t)=>t.size+e),0),totalCount:n}}function vC(e,t,n,r,i,o){let a=0;if(n.groupIndices.length>0)for(const t of n.groupIndices){if(t-a>=e)break;a++}const s=e+a,l=rC(t,s);return bC(Array.from({length:s}).map(((e,t)=>({data:o[t+l],index:t+l,offset:0,size:0}))),[],s,i,n,r)}function yC(e,t,n){if(0===e.length)return[];if(!Nk(t))return e.map((e=>({...e,index:e.index+n,originalIndex:e.index})));const r=e[0].index,i=e[e.length-1].index,o=[],a=bk(t.groupOffsetTree,r,i);let s,l=0;for(const r of e){let e;(!s||s.end<r.index)&&(s=a.shift(),l=t.groupIndices.indexOf(s.start)),e=r.index===s.start?{index:l,type:"group"}:{groupIndex:l,index:r.index-(l+1)+n},o.push({...e,data:r.data,offset:r.offset,originalIndex:r.index,size:r.size})}return o}const xC=GS((([{data:e,firstItemIndex:t,gap:n,sizes:r,totalCount:i},o,{listBoundary:a,topListHeight:s,visibleRange:l},{initialTopMostItemIndex:c,scrolledToInitialItem:d},{topListHeight:u},f,{didMount:h},{recalcInProgress:p}])=>{const g=US([]),m=US(0),b=qS();MS(o.topItemsIndexes,g);const v=KS(zS(QS(h,p,JS(l,Ek),JS(i),JS(r),JS(c),d,JS(g),JS(t),JS(n),e),FS((([e,t,,n,,,,,,,r])=>{const i=r&&r.length!==n;return e&&!t&&!i})),LS((([,,[e,t],n,r,i,o,a,s,l,c])=>{const d=r,{offsetTree:u,sizeTree:f}=d,h=_S(m);if(0===n)return{...mC,totalCount:n};if(0===e&&0===t)return 0===h?{...mC,totalCount:n}:vC(h,i,r,s,l,c||[]);if(fk(f))return h>0?null:bC(function(e,t,n){if(Nk(t)){const r=Pk(e,t);return[{index:pk(t.groupOffsetTree,r)[0],offset:0,size:0},{data:null==n?void 0:n[0],index:r,offset:0,size:0}]}return[{data:null==n?void 0:n[0],index:e,offset:0,size:0}]}(rC(i,n),d,c),[],n,l,d,s);const p=[];if(a.length>0){const e=a[0],t=a[a.length-1];let n=0;for(const r of bk(f,e,t)){const i=r.value,o=Math.max(r.start,e),a=Math.min(r.end,t);for(let e=o;e<=a;e++)p.push({data:null==c?void 0:c[e],index:e,offset:n,size:i}),n+=i}}if(!o)return bC([],p,n,l,d,s);const g=a.length>0?a[a.length-1]+1:0,b=Hk(u,e,t,g);if(0===b.length)return null;const v=n-1;return bC(CS([],(n=>{for(const r of b){const i=r.value;let o=i.offset,a=r.start;const s=i.size;if(i.offset<e){a+=Math.floor((e-i.offset+l)/(s+l));const t=a-r.start;o+=t*s+t*l}a<g&&(o+=(g-a)*s,a=g);const d=Math.min(r.end,v);for(let e=a;e<=d&&!(o>=t);e++)n.push({data:null==c?void 0:c[e],index:e,offset:o,size:s}),o+=s+l}})),p,n,l,d,s)})),FS((e=>null!==e)),BS()),mC);MS(zS(e,FS(SS),LS((e=>null==e?void 0:e.length))),i),MS(zS(v,LS((e=>e.topListHeight))),u),MS(u,s),MS(zS(v,LS((e=>[e.top,e.bottom]))),a),MS(zS(v,LS((e=>e.items))),b);const y=XS(zS(v,FS((({items:e})=>e.length>0)),YS(i,e),FS((([{items:e},t])=>e[e.length-1].originalIndex===t-1)),LS((([,e,t])=>[e-1,t])),BS(Ek),LS((([e])=>e)))),x=XS(zS(v,VS(200),FS((({items:e,topItems:t})=>e.length>0&&e[0].originalIndex===t.length)),LS((({items:e})=>e[0].index)),BS())),w=XS(zS(v,FS((({items:e})=>e.length>0)),LS((({items:e})=>{let t=0,n=e.length-1;for(;"group"===e[t].type&&t<n;)t++;for(;"group"===e[n].type&&n>t;)n--;return{endIndex:e[n].index,startIndex:e[t].index}})),BS(Ik)));return{endReached:y,initialItemCount:m,itemsRendered:b,listState:v,rangeChanged:w,startReached:x,topItemsIndexes:g,...f}}),TS(Xk,Zk,gC,iC,tC,cC,Qk,_k),{singleton:!0}),wC=GS((([{fixedFooterHeight:e,fixedHeaderHeight:t,footerHeight:n,headerHeight:r},{listState:i}])=>{const o=qS(),a=KS(zS(QS(n,e,r,t,i),LS((([e,t,n,r,i])=>e+t+n+r+i.offsetBottom+i.bottom))),0);return MS(JS(a),o),{totalListHeight:a,totalListHeightChanged:o}}),TS(ck,xC),{singleton:!0}),$C=GS((([{viewportHeight:e},{totalListHeight:t}])=>{const n=US(!1),r=KS(zS(QS(n,e,t),FS((([e])=>e)),LS((([,e,t])=>Math.max(0,e-t))),VS(0),BS()),0);return{alignToBottom:n,paddingTopAddition:r}}),TS(ck,wC),{singleton:!0});function jC(e){return!!e&&("smooth"===e?"smooth":"auto")}const SC=GS((([{listRefresh:e,totalCount:t},{atBottomState:n,isAtBottom:r},{scrollToIndex:i},{scrolledToInitialItem:o},{didMount:a,propsReady:s},{log:l},{scrollingInProgress:c}])=>{const d=US(!1),u=qS();let f=null;function h(e){IS(i,{align:"end",behavior:e,index:"LAST"})}function p(e){const t=RS(n,(t=>{e&&!t.atBottom&&"SIZE_INCREASED"===t.notAtBottomBecause&&!f&&(_S(l)("scrolling to bottom due to increased size",{},tk.DEBUG),h("auto"))}));setTimeout(t,100)}return DS(zS(QS(zS(JS(t),WS(1)),a),YS(JS(d),r,o,c),LS((([[e,t],n,r,i,o])=>{let a=t&&i,s="auto";return a&&(s=((e,t)=>"function"==typeof e?jC(e(t)):t&&jC(e))(n,r||o),a=a&&!!s),{followOutputBehavior:s,shouldFollow:a,totalCount:e}})),FS((({shouldFollow:e})=>e))),(({followOutputBehavior:t,totalCount:n})=>{f&&(f(),f=null),f=RS(e,(()=>{_S(l)("following output to ",{totalCount:n},tk.DEBUG),h(t),f=null}))})),DS(zS(QS(JS(d),t,s),FS((([e,,t])=>e&&t)),HS((({value:e},[,t])=>({refreshed:e===t,value:t})),{refreshed:!1,value:0}),FS((({refreshed:e})=>e)),YS(d,t)),(([,e])=>{_S(o)&&p(!1!==e)})),DS(u,(()=>{p(!1!==_S(d))})),DS(QS(JS(d),n),(([e,t])=>{e&&!t.atBottom&&"VIEWPORT_HEIGHT_DECREASING"===t.notAtBottomBecause&&h("auto")})),{autoscrollToBottom:u,followOutput:d}}),TS(Xk,cC,tC,iC,Qk,rk,ck)),kC=GS((([{data:e,firstItemIndex:t,gap:n,sizes:r},{initialTopMostItemIndex:i},{initialItemCount:o,listState:a},{didMount:s}])=>(MS(zS(s,YS(o),FS((([,e])=>0!==e)),YS(i,r,t,n,e),LS((([[,e],t,n,r,i,o=[]])=>vC(e,t,n,r,i,o)))),a),{})),TS(Xk,iC,xC,Qk),{singleton:!0}),CC=GS((([{didMount:e},{scrollTo:t},{listState:n}])=>{const r=US(0);return DS(zS(e,YS(r),FS((([,e])=>0!==e)),LS((([,e])=>({top:e})))),(e=>{RS(zS(n,WS(1),FS((e=>e.items.length>1))),(()=>{requestAnimationFrame((()=>{IS(t,e)}))}))})),{initialScrollTop:r}}),TS(Qk,ck,xC),{singleton:!0}),OC=({itemBottom:e,itemTop:t,locationParams:{align:n,behavior:r,...i},viewportBottom:o,viewportTop:a})=>t<a?{...i,align:null!=n?n:"start",behavior:r}:e>o?{...i,align:null!=n?n:"end",behavior:r}:null,TC=GS((([{gap:e,sizes:t,totalCount:n},{fixedFooterHeight:r,fixedHeaderHeight:i,headerHeight:o,scrollingInProgress:a,scrollTop:s,viewportHeight:l},{scrollToIndex:c}])=>{const d=qS();return MS(zS(d,YS(t,l,n,o,i,r,s),YS(e),LS((([[e,t,n,r,i,o,s,l],c])=>{const{align:d,behavior:u,calculateViewLocation:f=OC,done:h,...p}=e,g=zk(e,t,r-1),m=Lk(g,t.offsetTree,c)+i+o,b=f({itemBottom:m+pk(t.sizeTree,g)[1],itemTop:m,locationParams:{align:d,behavior:u,...p},viewportBottom:l+n-s,viewportTop:l+o});return b?h&&RS(zS(a,FS((e=>!e)),WS(_S(a)?1:2)),h):h&&h(),b})),FS((e=>null!==e))),c),{scrollIntoView:d}}),TS(Xk,ck,tC,xC,rk),{singleton:!0}),DC=GS((([{scrollVelocity:e}])=>{const t=US(!1),n=qS(),r=US(!1);return MS(zS(e,YS(r,t,n),FS((([e,t])=>!!t)),LS((([e,t,n,r])=>{const{enter:i,exit:o}=t;if(n){if(o(e,r))return!1}else if(i(e,r))return!0;return n})),BS()),t),DS(zS(QS(t,e,n),YS(r)),(([[e,t,n],r])=>{e&&r&&r.change&&r.change(t,n)})),{isSeeking:t,scrollSeekConfiguration:r,scrollSeekRangeChanged:n,scrollVelocity:e}}),TS(cC),{singleton:!0}),IC=GS((([{scrollContainerState:e,scrollTo:t}])=>{const n=qS(),r=qS(),i=qS(),o=US(!1),a=US(void 0);return MS(zS(QS(n,r),LS((([{scrollHeight:e,scrollTop:t,viewportHeight:n},{offsetTop:r}])=>({scrollHeight:e,scrollTop:Math.max(0,t-r),viewportHeight:n})))),e),MS(zS(t,YS(r),LS((([e,{offsetTop:t}])=>({...e,top:e.top+t})))),i),{customScrollParent:a,useWindowScroll:o,windowScrollContainerState:n,windowScrollTo:i,windowViewportRect:r}}),TS(ck)),EC=GS((([{sizeRanges:e,sizes:t},{headerHeight:n,scrollTop:r},{initialTopMostItemIndex:i},{didMount:o},{useWindowScroll:a,windowScrollContainerState:s,windowViewportRect:l}])=>{const c=qS(),d=US(void 0),u=US(null),f=US(null);return MS(s,u),MS(l,f),DS(zS(c,YS(t,r,a,u,f,n)),(([e,t,n,r,i,o,a])=>{const s=function(e){return yk(e).map((({k:e,v:t},n,r)=>{const i=r[n+1];return{endIndex:i?i.k-1:1/0,size:t,startIndex:e}}))}(t.sizeTree);r&&null!==i&&null!==o&&(n=i.scrollTop-o.offsetTop),e({ranges:s,scrollTop:n-=a})})),MS(zS(d,FS(SS),LS(_C)),i),MS(zS(o,YS(d),FS((([,e])=>void 0!==e)),BS(),LS((([,e])=>e.ranges))),e),{getState:c,restoreStateFrom:d}}),TS(Xk,ck,iC,Qk,IC));function _C(e){return{align:"start",index:0,offset:e.scrollTop}}const MC=GS((([{topItemsIndexes:e}])=>{const t=US(0);return MS(zS(t,FS((e=>e>=0)),LS((e=>Array.from({length:e}).map(((e,t)=>t))))),e),{topItemCount:t}}),TS(xC));function RC(e){let t,n=!1;return()=>(n||(n=!0,t=e()),t)}const AC=RC((()=>/iP(ad|od|hone)/i.test(navigator.userAgent)&&/WebKit/i.test(navigator.userAgent))),NC=GS((([{deviation:e,scrollBy:t,scrollingInProgress:n,scrollTop:r},{isAtBottom:i,isScrolling:o,lastJumpDueToItemResize:a,scrollDirection:s},{listState:l},{beforeUnshiftWith:c,gap:d,shiftWithOffset:u,sizes:f},{log:h},{recalcInProgress:p}])=>{const g=XS(zS(l,YS(a),HS((([,e,t,n],[{bottom:r,items:i,offsetBottom:o,totalCount:a},s])=>{const l=r+o;let c=0;return t===a&&e.length>0&&i.length>0&&(0===i[0].originalIndex&&0===e[0].originalIndex||(c=l-n,0!==c&&(c+=s))),[c,i,a,l]}),[0,[],0,0]),FS((([e])=>0!==e)),YS(r,s,n,i,h,p),FS((([,e,t,n,,,r])=>!r&&!n&&0!==e&&t===aC)),LS((([[e],,,,,t])=>(t("Upward scrolling compensation",{amount:e},tk.DEBUG),e)))));function m(n){n>0?(IS(t,{behavior:"auto",top:-n}),IS(e,0)):(IS(e,0),IS(t,{behavior:"auto",top:-n}))}return DS(zS(g,YS(e,o)),(([t,n,r])=>{r&&AC()?IS(e,n-t):m(-t)})),DS(zS(QS(KS(o,!1),e,p),FS((([e,t,n])=>!e&&!n&&0!==t)),LS((([e,t])=>t)),VS(1)),m),MS(zS(u,LS((e=>({top:-e})))),t),DS(zS(c,YS(f,d),LS((([e,{groupIndices:t,lastSize:n,sizeTree:r},i])=>{function o(e){return e*(n+i)}if(0===t.length)return o(e);{let n=0;const i=hk(r,0);let a=0,s=0;for(;a<e;){a++,n+=i;let r=t.length===s+1?1/0:t[s+1]-t[s]-1;a+r>e&&(n-=i,r=e-a+1),a+=r,n+=o(r),s++}return n}}))),(n=>{IS(e,n),requestAnimationFrame((()=>{IS(t,{top:n}),requestAnimationFrame((()=>{IS(e,0),IS(p,!1)}))}))})),{deviation:e}}),TS(ck,cC,xC,Xk,rk,_k)),BC=GS((([e,t,n,r,i,o,a,s,l,c])=>({...e,...t,...n,...r,...i,...o,...a,...s,...l,...c})),TS(gC,kC,Qk,DC,wC,CC,$C,IC,TC,rk)),FC=GS((([{data:e,defaultItemSize:t,firstItemIndex:n,fixedItemSize:r,gap:i,groupIndices:o,itemSize:a,sizeRanges:s,sizes:l,statefulTotalCount:c,totalCount:d,trackItemSizes:u},{initialItemFinalLocationReached:f,initialTopMostItemIndex:h,scrolledToInitialItem:p},g,m,b,{listState:v,topItemsIndexes:y,...x},{scrollToIndex:w},$,{topItemCount:j},{groupCounts:S},k])=>(MS(x.rangeChanged,k.scrollSeekRangeChanged),MS(zS(k.windowViewportRect,LS((e=>e.visibleHeight))),g.viewportHeight),{data:e,defaultItemHeight:t,firstItemIndex:n,fixedItemHeight:r,gap:i,groupCounts:S,initialItemFinalLocationReached:f,initialTopMostItemIndex:h,scrolledToInitialItem:p,sizeRanges:s,topItemCount:j,topItemsIndexes:y,totalCount:d,...b,groupIndices:o,itemSize:a,listState:v,scrollToIndex:w,statefulTotalCount:c,trackItemSizes:u,...x,...k,...g,sizes:l,...m})),TS(Xk,iC,ck,EC,SC,xC,tC,NC,MC,Zk,BC));function LC(e,t){const n={},r={};let i=0;const o=e.length;for(;i<o;)r[e[i]]=1,i+=1;for(const e in t)Object.hasOwn(r,e)||(n[e]=t[e]);return n}const PC=typeof document<"u"?Y.default.useLayoutEffect:Y.default.useEffect;function zC(t,n,r){const i=Object.keys(n.required||{}),o=Object.keys(n.optional||{}),a=Object.keys(n.methods||{}),s=Object.keys(n.events||{}),l=Y.default.createContext({});function c(e,t){e.propsReady&&IS(e.propsReady,!1);for(const r of i){IS(e[n.required[r]],t[r])}for(const r of o)if(r in t){IS(e[n.optional[r]],t[r])}e.propsReady&&IS(e.propsReady,!0)}function d(e){return s.reduce(((t,r)=>(t[r]=function(e){let t,n;const r=()=>null==t?void 0:t();return function(i,o){switch(i){case mS:return o?n===o?void 0:(r(),n=o,t=DS(e,o),t):(r(),kS);case bS:return r(),void(n=null)}}}(e[n.events[r]]),t)),{})}const u=Y.default.forwardRef(((u,f)=>{const{children:h,...p}=u,[g]=Y.default.useState((()=>CS(function(e){const t=new Map,n=({constructor:e,dependencies:r,id:i,singleton:o})=>{if(o&&t.has(i))return t.get(i);const a=e(r.map((e=>n(e))));return o&&t.set(i,a),a};return n(e)}(t),(e=>{c(e,p)})))),[m]=Y.default.useState($S(d,g));PC((()=>{for(const e of s)e in p&&DS(m[e],p[e]);return()=>{Object.values(m).map(ES)}}),[p,m,g]),PC((()=>{c(g,p)})),Y.default.useImperativeHandle(f,yS(function(e){return a.reduce(((t,r)=>(t[r]=t=>{IS(e[n.methods[r]],t)},t)),{})}(g)));const b=r;return e.jsx(l.Provider,{value:g,children:r?e.jsx(b,{...LC([...i,...o,...s],p),children:h}):h})})),f=Y.default.version.startsWith("18")?e=>{const t=Y.default.useContext(l)[e],n=Y.default.useCallback((e=>DS(t,e)),[t]);return Y.default.useSyncExternalStore(n,(()=>_S(t)),(()=>_S(t)))}:e=>{const t=Y.default.useContext(l)[e],[n,r]=Y.default.useState($S(_S,t));return PC((()=>DS(t,(e=>{e!==n&&r(yS(e))}))),[t,n]),n};return{Component:u,useEmitter:(e,t)=>{const n=Y.default.useContext(l)[e];PC((()=>DS(n,t)),[t,n])},useEmitterValue:f,usePublisher:e=>Y.default.useCallback(jS(IS,Y.default.useContext(l)[e]),[e])}}const HC=Y.default.createContext(void 0),WC=Y.default.createContext(void 0),VC=typeof document<"u"?Y.default.useLayoutEffect:Y.default.useEffect;function YC(e,t,n,r=kS,i,o){const a=Y.default.useRef(null),s=Y.default.useRef(null),l=Y.default.useRef(null),c=Y.default.useCallback((n=>{const r=n.target,i=r===window||r===document,a=o?i?window.pageXOffset||document.documentElement.scrollLeft:r.scrollLeft:i?window.pageYOffset||document.documentElement.scrollTop:r.scrollTop,c=o?i?document.documentElement.scrollWidth:r.scrollWidth:i?document.documentElement.scrollHeight:r.scrollHeight,d=o?i?window.innerWidth:r.offsetWidth:i?window.innerHeight:r.offsetHeight,u=()=>{e({scrollHeight:c,scrollTop:Math.max(a,0),viewportHeight:d})};n.suppressFlushSync?u():U.default.flushSync(u),null!==s.current&&(a===s.current||a<=0||a===c-d)&&(s.current=null,t(!0),l.current&&(clearTimeout(l.current),l.current=null))}),[e,t]);return Y.default.useEffect((()=>{const e=i||a.current;return r(i||a.current),c({suppressFlushSync:!0,target:e}),e.addEventListener("scroll",c,{passive:!0}),()=>{r(null),e.removeEventListener("scroll",c)}}),[a,c,n,r,i]),{scrollByCallback:function(e){o&&(e={behavior:e.behavior,left:e.top}),a.current.scrollBy(e)},scrollerRef:a,scrollToCallback:function(n){const r=a.current;if(!r||(o?"offsetWidth"in r&&0===r.offsetWidth:"offsetHeight"in r&&0===r.offsetHeight))return;const i="smooth"===n.behavior;let c,d,u;r===window?(d=Math.max(Ak(document.documentElement,o?"width":"height"),o?document.documentElement.scrollWidth:document.documentElement.scrollHeight),c=o?window.innerWidth:window.innerHeight,u=o?document.documentElement.scrollLeft:document.documentElement.scrollTop):(d=r[o?"scrollWidth":"scrollHeight"],c=Ak(r,o?"width":"height"),u=r[o?"scrollLeft":"scrollTop"]);const f=d-c;if(n.top=Math.ceil(Math.max(Math.min(f,n.top),0)),oC(c,d)||n.top===u)return e({scrollHeight:d,scrollTop:u,viewportHeight:c}),void(i&&t(!0));i?(s.current=n.top,l.current&&clearTimeout(l.current),l.current=setTimeout((()=>{l.current=null,s.current=null,t(!0)}),1e3)):s.current=null,o&&(n={behavior:n.behavior,left:n.top}),r.scrollTo(n)}}}const UC="-webkit-sticky",KC="sticky",qC=RC((()=>{if(typeof document>"u")return KC;const e=document.createElement("div");return e.style.position=UC,e.style.position===UC?UC:KC}));function XC(e){return e}const GC=GS((()=>{const e=US((e=>`Item ${e}`)),t=US(null),n=US((e=>`Group ${e}`)),r=US({}),i=US(XC),o=US("div"),a=US(kS),s=(e,t=null)=>KS(zS(r,LS((t=>t[e])),BS()),t);return{components:r,computeItemKey:i,context:t,EmptyPlaceholder:s("EmptyPlaceholder"),FooterComponent:s("Footer"),GroupComponent:s("Group","div"),groupContent:n,HeaderComponent:s("Header"),HeaderFooterTag:o,ItemComponent:s("Item","div"),itemContent:e,ListComponent:s("List","div"),ScrollerComponent:s("Scroller","div"),scrollerRef:a,ScrollSeekPlaceholder:s("ScrollSeekPlaceholder"),TopItemListComponent:s("TopItemList")}})),ZC=GS((([e,t])=>({...e,...t})),TS(FC,GC)),QC=({height:t})=>e.jsx("div",{style:{height:t}}),JC={overflowAnchor:"none",position:qC(),zIndex:1},eO={overflowAnchor:"none"},tO={...eO,display:"inline-block",height:"100%"},nO=Y.default.memo((function({showTopList:n=!1}){const r=yO("listState"),i=xO("sizeRanges"),o=yO("useWindowScroll"),a=yO("customScrollParent"),s=xO("windowScrollContainerState"),l=xO("scrollContainerState"),c=a||o?s:l,d=yO("itemContent"),u=yO("context"),f=yO("groupContent"),h=yO("trackItemSizes"),p=yO("itemSize"),g=yO("log"),m=xO("gap"),b=yO("horizontalDirection"),{callbackRef:v}=ak(i,p,h,n?kS:c,g,m,a,b,yO("skipAnimationFrameInResizeObserver")),[y,x]=Y.default.useState(0);vO("deviation",(e=>{y!==e&&x(e)}));const w=yO("EmptyPlaceholder"),$=yO("ScrollSeekPlaceholder")||QC,j=yO("ListComponent"),S=yO("ItemComponent"),k=yO("GroupComponent"),C=yO("computeItemKey"),O=yO("isSeeking"),T=yO("groupIndices").length>0,D=yO("alignToBottom"),I=yO("initialItemFinalLocationReached"),E=n?{}:{boxSizing:"border-box",...b?{display:"inline-block",height:"100%",marginLeft:0!==y?y:D?"auto":0,paddingLeft:r.offsetTop,paddingRight:r.offsetBottom,whiteSpace:"nowrap"}:{marginTop:0!==y?y:D?"auto":0,paddingBottom:r.offsetBottom,paddingTop:r.offsetTop},...I?{}:{visibility:"hidden"}};return!n&&0===r.totalCount&&w?e.jsx(w,{...sO(w,u)}):e.jsx(j,{...sO(j,u),"data-testid":n?"virtuoso-top-item-list":"virtuoso-item-list",ref:v,style:E,children:(n?r.topItems:r.items).map((e=>{const n=e.originalIndex,i=C(n+r.firstItemIndex,e.data,u);return O?t.createElement($,{...sO($,u),height:e.size,index:e.index,key:i,type:e.type||"item",..."group"===e.type?{}:{groupIndex:e.groupIndex}}):"group"===e.type?t.createElement(k,{...sO(k,u),"data-index":n,"data-item-index":e.index,"data-known-size":e.size,key:i,style:JC},f(e.index,u)):t.createElement(S,{...sO(S,u),...lO(S,e.data),"data-index":n,"data-item-group-index":e.groupIndex,"data-item-index":e.index,"data-known-size":e.size,key:i,style:b?tO:eO},T?d(e.index,e.groupIndex,e.data,u):d(e.index,e.data,u))}))})})),rO={height:"100%",outline:"none",overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},iO={outline:"none",overflowX:"auto",position:"relative"},oO=e=>({height:"100%",position:"absolute",top:0,width:"100%",...e?{display:"flex",flexDirection:"column"}:{}}),aO={position:qC(),top:0,width:"100%",zIndex:1};function sO(e,t){if("string"!=typeof e)return{context:t}}function lO(e,t){return{item:"string"==typeof e?void 0:t}}const cO=Y.default.memo((function(){const t=yO("HeaderComponent"),n=xO("headerHeight"),r=yO("HeaderFooterTag"),i=ik(Y.default.useMemo((()=>e=>{n(Ak(e,"height"))}),[n]),!0,yO("skipAnimationFrameInResizeObserver")),o=yO("context");return t?e.jsx(r,{ref:i,children:e.jsx(t,{...sO(t,o)})}):null})),dO=Y.default.memo((function(){const t=yO("FooterComponent"),n=xO("footerHeight"),r=yO("HeaderFooterTag"),i=ik(Y.default.useMemo((()=>e=>{n(Ak(e,"height"))}),[n]),!0,yO("skipAnimationFrameInResizeObserver")),o=yO("context");return t?e.jsx(r,{ref:i,children:e.jsx(t,{...sO(t,o)})}):null}));function uO({useEmitter:t,useEmitterValue:n,usePublisher:r}){return Y.default.memo((function({children:i,style:o,...a}){const s=r("scrollContainerState"),l=n("ScrollerComponent"),c=r("smoothScrollTargetReached"),d=n("scrollerRef"),u=n("context"),f=n("horizontalDirection")||!1,{scrollByCallback:h,scrollerRef:p,scrollToCallback:g}=YC(s,c,l,d,void 0,f);return t("scrollTo",g),t("scrollBy",h),e.jsx(l,{"data-testid":"virtuoso-scroller","data-virtuoso-scroller":!0,ref:p,style:{...f?iO:rO,...o},tabIndex:0,...a,...sO(l,u),children:i})}))}function fO({useEmitter:t,useEmitterValue:n,usePublisher:r}){return Y.default.memo((function({children:i,style:o,...a}){const s=r("windowScrollContainerState"),l=n("ScrollerComponent"),c=r("smoothScrollTargetReached"),d=n("totalListHeight"),u=n("deviation"),f=n("customScrollParent"),h=n("context"),{scrollByCallback:p,scrollerRef:g,scrollToCallback:m}=YC(s,c,l,kS,f);return VC((()=>(g.current=f||window,()=>{g.current=null})),[g,f]),t("windowScrollTo",m),t("scrollBy",p),e.jsx(l,{"data-virtuoso-scroller":!0,style:{position:"relative",...o,...0!==d?{height:d+u}:{}},...a,...sO(l,h),children:i})}))}const hO=({children:t})=>{const n=Y.default.useContext(HC),r=xO("viewportHeight"),i=xO("fixedItemHeight"),o=yO("alignToBottom"),a=yO("horizontalDirection"),s=ik(Y.default.useMemo((()=>wS(r,(e=>Ak(e,a?"width":"height")))),[r,a]),!0,yO("skipAnimationFrameInResizeObserver"));return Y.default.useEffect((()=>{n&&(r(n.viewportHeight),i(n.itemHeight))}),[n,r,i]),e.jsx("div",{"data-viewport-type":"element",ref:s,style:oO(o),children:t})},pO=({children:t})=>{const n=Y.default.useContext(HC),r=xO("windowViewportRect"),i=xO("fixedItemHeight"),o=yO("customScrollParent"),a=lk(r,o,yO("skipAnimationFrameInResizeObserver")),s=yO("alignToBottom");return Y.default.useEffect((()=>{n&&(i(n.itemHeight),r({offsetTop:0,visibleHeight:n.viewportHeight,visibleWidth:100}))}),[n,r,i]),e.jsx("div",{"data-viewport-type":"window",ref:a,style:oO(s),children:t})},gO=({children:t})=>{const n=yO("TopItemListComponent")||"div",r=yO("headerHeight"),i={...aO,marginTop:`${r}px`},o=yO("context");return e.jsx(n,{style:i,...sO(n,o),children:t})},mO=Y.default.memo((function(t){const n=yO("useWindowScroll"),r=yO("topItemsIndexes").length>0,i=yO("customScrollParent"),o=yO("context"),a=i||n?$O:wO,s=i||n?pO:hO;return e.jsxs(a,{...t,...sO(a,o),children:[r&&e.jsx(gO,{children:e.jsx(nO,{showTopList:!0})}),e.jsxs(s,{children:[e.jsx(cO,{}),e.jsx(nO,{}),e.jsx(dO,{})]})]})})),{Component:bO,useEmitter:vO,useEmitterValue:yO,usePublisher:xO}=zC(ZC,{events:{atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",endReached:"endReached",groupIndices:"groupIndices",isScrolling:"isScrolling",itemsRendered:"itemsRendered",rangeChanged:"rangeChanged",startReached:"startReached",totalListHeightChanged:"totalListHeightChanged"},methods:{autoscrollToBottom:"autoscrollToBottom",getState:"getState",scrollBy:"scrollBy",scrollIntoView:"scrollIntoView",scrollTo:"scrollTo",scrollToIndex:"scrollToIndex"},optional:{alignToBottom:"alignToBottom",atBottomThreshold:"atBottomThreshold",atTopThreshold:"atTopThreshold",components:"components",computeItemKey:"computeItemKey",context:"context",customScrollParent:"customScrollParent",data:"data",defaultItemHeight:"defaultItemHeight",firstItemIndex:"firstItemIndex",fixedItemHeight:"fixedItemHeight",followOutput:"followOutput",groupContent:"groupContent",groupCounts:"groupCounts",headerFooterTag:"HeaderFooterTag",horizontalDirection:"horizontalDirection",increaseViewportBy:"increaseViewportBy",initialItemCount:"initialItemCount",initialScrollTop:"initialScrollTop",initialTopMostItemIndex:"initialTopMostItemIndex",itemContent:"itemContent",itemSize:"itemSize",logLevel:"logLevel",overscan:"overscan",restoreStateFrom:"restoreStateFrom",scrollerRef:"scrollerRef",scrollSeekConfiguration:"scrollSeekConfiguration",skipAnimationFrameInResizeObserver:"skipAnimationFrameInResizeObserver",topItemCount:"topItemCount",totalCount:"totalCount",useWindowScroll:"useWindowScroll"},required:{}},mO),wO=uO({useEmitter:vO,useEmitterValue:yO,usePublisher:xO}),$O=fO({useEmitter:vO,useEmitterValue:yO,usePublisher:xO}),jO=bO,SO={bottom:0,itemHeight:0,items:[],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},kO={bottom:0,itemHeight:0,items:[{index:0}],itemWidth:0,offsetBottom:0,offsetTop:0,top:0},{ceil:CO,floor:OO,max:TO,min:DO,round:IO}=Math;function EO(e,t,n){return Array.from({length:t-e+1}).map(((t,r)=>({data:null===n?null:n[r+e],index:r+e})))}function _O(e,t){return e&&e.width===t.width&&e.height===t.height}function MO(e,t){return e&&e.column===t.column&&e.row===t.row}const RO=GS((([{increaseViewportBy:e,listBoundary:t,overscan:n,visibleRange:r},{footerHeight:i,headerHeight:o,scrollBy:a,scrollContainerState:s,scrollTo:l,scrollTop:c,smoothScrollTargetReached:d,viewportHeight:u},f,h,{didMount:p,propsReady:g},{customScrollParent:m,useWindowScroll:b,windowScrollContainerState:v,windowScrollTo:y,windowViewportRect:x},w])=>{const $=US(0),j=US(0),S=US(SO),k=US({height:0,width:0}),C=US({height:0,width:0}),O=qS(),T=qS(),D=US(0),I=US(null),E=US({column:0,row:0}),_=qS(),M=qS(),R=US(!1),A=US(0),N=US(!0),B=US(!1),F=US(!1);DS(zS(p,YS(A),FS((([e,t])=>!!t))),(()=>{IS(N,!1)})),DS(zS(QS(p,N,C,k,A,B),FS((([e,t,n,r,,i])=>e&&!t&&0!==n.height&&0!==r.height&&!i))),(([,,,,e])=>{IS(B,!0),nC(1,(()=>{IS(O,e)})),RS(zS(c),(()=>{IS(t,[0,0]),IS(N,!0)}))})),MS(zS(M,FS((e=>null!=e&&e.scrollTop>0)),PS(0)),j),DS(zS(p,YS(M),FS((([,e])=>null!=e))),(([,e])=>{e&&(IS(k,e.viewport),IS(C,e.item),IS(E,e.gap),e.scrollTop>0&&(IS(R,!0),RS(zS(c,WS(1)),(e=>{IS(R,!1)})),IS(l,{top:e.scrollTop})))})),MS(zS(k,LS((({height:e})=>e))),u),MS(zS(QS(JS(k,_O),JS(C,_O),JS(E,((e,t)=>e&&e.column===t.column&&e.row===t.row)),JS(c)),LS((([e,t,n,r])=>({gap:n,item:t,scrollTop:r,viewport:e})))),_),MS(zS(QS(JS($),r,JS(E,MO),JS(C,_O),JS(k,_O),JS(I),JS(j),JS(R),JS(N),JS(A)),FS((([,,,,,,,e])=>!e)),LS((([e,[t,n],r,i,o,a,s,,l,c])=>{const{column:d,row:u}=r,{height:f,width:h}=i,{width:p}=o;if(0===s&&(0===e||0===p))return SO;if(0===h){const t=rC(c,e);return function(e){return{...kO,items:e}}(EO(t,t+Math.max(s-1,0),a))}const g=AO(p,h,d);let m,b;l?0===t&&0===n&&s>0?(m=0,b=s-1):(m=g*OO((t+u)/(f+u)),b=g*CO((n+u)/(f+u))-1,b=DO(e-1,TO(b,g-1)),m=DO(b,TO(0,m))):(m=0,b=-1);const v=EO(m,b,a),{bottom:y,top:x}=NO(o,r,i,v),w=CO(e/g);return{bottom:y,itemHeight:f,items:v,itemWidth:h,offsetBottom:w*f+(w-1)*u-y,offsetTop:x,top:x}}))),S),MS(zS(I,FS((e=>null!==e)),LS((e=>e.length))),$),MS(zS(QS(k,C,S,E),FS((([e,t,{items:n}])=>n.length>0&&0!==t.height&&0!==e.height)),LS((([e,t,{items:n},r])=>{const{bottom:i,top:o}=NO(e,r,t,n);return[o,i]})),BS(Ek)),t);const L=US(!1);MS(zS(c,YS(L),LS((([e,t])=>t||0!==e))),L);const P=XS(zS(QS(S,$),FS((([{items:e}])=>e.length>0)),YS(L),FS((([[e,t],n])=>{const r=e.items[e.items.length-1].index===t-1;return(n||e.bottom>0&&e.itemHeight>0&&0===e.offsetBottom&&e.items.length===t)&&r})),LS((([[,e]])=>e-1)),BS())),z=XS(zS(JS(S),FS((({items:e})=>e.length>0&&0===e[0].index)),PS(0),BS())),H=XS(zS(JS(S),YS(R),FS((([{items:e},t])=>e.length>0&&!t)),LS((([{items:e}])=>({endIndex:e[e.length-1].index,startIndex:e[0].index}))),BS(Ik),VS(0)));MS(H,h.scrollSeekRangeChanged),MS(zS(O,YS(k,C,$,E),LS((([e,t,n,r,i])=>{const o=eC(e),{align:a,behavior:s,offset:l}=o;let c=o.index;"LAST"===c&&(c=r-1),c=TO(0,c,DO(r-1,c));let d=BO(t,i,n,c);return"end"===a?d=IO(d-t.height+n.height):"center"===a&&(d=IO(d-t.height/2+n.height/2)),l&&(d+=l),{behavior:s,top:d}}))),l);const W=KS(zS(S,LS((e=>e.offsetBottom+e.bottom))),0);return MS(zS(x,LS((e=>({height:e.visibleHeight,width:e.visibleWidth})))),k),{customScrollParent:m,data:I,deviation:D,footerHeight:i,gap:E,headerHeight:o,increaseViewportBy:e,initialItemCount:j,itemDimensions:C,overscan:n,restoreStateFrom:M,scrollBy:a,scrollContainerState:s,scrollHeight:T,scrollTo:l,scrollToIndex:O,scrollTop:c,smoothScrollTargetReached:d,totalCount:$,useWindowScroll:b,viewportDimensions:k,windowScrollContainerState:v,windowScrollTo:y,windowViewportRect:x,...h,gridState:S,horizontalDirection:F,initialTopMostItemIndex:A,totalListHeight:W,...f,endReached:P,propsReady:g,rangeChanged:H,startReached:z,stateChanged:_,stateRestoreInProgress:R,...w}}),TS(gC,ck,cC,DC,Qk,IC,rk));function AO(e,t,n){return TO(1,OO((e+n)/(OO(t)+n)))}function NO(e,t,n,r){const{height:i}=n;if(void 0===i||0===r.length)return{bottom:0,top:0};const o=BO(e,t,n,r[0].index);return{bottom:BO(e,t,n,r[r.length-1].index)+i,top:o}}function BO(e,t,n,r){const i=AO(e.width,n.width,t.column),o=OO(r/i),a=o*n.height+TO(0,o-1)*t.row;return a>0?a+t.row:a}const FO=GS((()=>{const e=US((e=>`Item ${e}`)),t=US({}),n=US(null),r=US("virtuoso-grid-item"),i=US("virtuoso-grid-list"),o=US(XC),a=US("div"),s=US(kS),l=(e,n=null)=>KS(zS(t,LS((t=>t[e])),BS()),n),c=US(!1),d=US(!1);return MS(JS(d),c),{components:t,computeItemKey:o,context:n,FooterComponent:l("Footer"),HeaderComponent:l("Header"),headerFooterTag:a,itemClassName:r,ItemComponent:l("Item","div"),itemContent:e,listClassName:i,ListComponent:l("List","div"),readyStateChanged:c,reportReadyState:d,ScrollerComponent:l("Scroller","div"),scrollerRef:s,ScrollSeekPlaceholder:l("ScrollSeekPlaceholder","div")}})),LO=GS((([e,t])=>({...e,...t})),TS(RO,FO)),PO=Y.default.memo((function(){const n=qO("gridState"),r=qO("listClassName"),i=qO("itemClassName"),o=qO("itemContent"),a=qO("computeItemKey"),s=qO("isSeeking"),l=XO("scrollHeight"),c=qO("ItemComponent"),d=qO("ListComponent"),u=qO("ScrollSeekPlaceholder"),f=qO("context"),h=XO("itemDimensions"),p=XO("gap"),g=qO("log"),m=qO("stateRestoreInProgress"),b=XO("reportReadyState"),v=ik(Y.default.useMemo((()=>e=>{const t=e.parentElement.parentElement.scrollHeight;l(t);const n=e.firstChild;if(n){const{height:e,width:t}=n.getBoundingClientRect();h({height:e,width:t})}p({column:QO("column-gap",getComputedStyle(e).columnGap,g),row:QO("row-gap",getComputedStyle(e).rowGap,g)})}),[l,h,p,g]),!0,!1);return VC((()=>{n.itemHeight>0&&n.itemWidth>0&&b(!0)}),[n]),m?null:e.jsx(d,{className:r,ref:v,...sO(d,f),"data-testid":"virtuoso-item-list",style:{paddingBottom:n.offsetBottom,paddingTop:n.offsetTop},children:n.items.map((r=>{const l=a(r.index,r.data,f);return s?e.jsx(u,{...sO(u,f),height:n.itemHeight,index:r.index,width:n.itemWidth},l):t.createElement(c,{...sO(c,f),className:i,"data-index":r.index,key:l},o(r.index,r.data,f))}))})})),zO=Y.default.memo((function(){const t=qO("HeaderComponent"),n=XO("headerHeight"),r=qO("headerFooterTag"),i=ik(Y.default.useMemo((()=>e=>{n(Ak(e,"height"))}),[n]),!0,!1),o=qO("context");return t?e.jsx(r,{ref:i,children:e.jsx(t,{...sO(t,o)})}):null})),HO=Y.default.memo((function(){const t=qO("FooterComponent"),n=XO("footerHeight"),r=qO("headerFooterTag"),i=ik(Y.default.useMemo((()=>e=>{n(Ak(e,"height"))}),[n]),!0,!1),o=qO("context");return t?e.jsx(r,{ref:i,children:e.jsx(t,{...sO(t,o)})}):null})),WO=({children:t})=>{const n=Y.default.useContext(WC),r=XO("itemDimensions"),i=XO("viewportDimensions"),o=ik(Y.default.useMemo((()=>e=>{i(e.getBoundingClientRect())}),[i]),!0,!1);return Y.default.useEffect((()=>{n&&(i({height:n.viewportHeight,width:n.viewportWidth}),r({height:n.itemHeight,width:n.itemWidth}))}),[n,i,r]),e.jsx("div",{ref:o,style:oO(!1),children:t})},VO=({children:t})=>{const n=Y.default.useContext(WC),r=XO("windowViewportRect"),i=XO("itemDimensions"),o=qO("customScrollParent"),a=lk(r,o,!1);return Y.default.useEffect((()=>{n&&(i({height:n.itemHeight,width:n.itemWidth}),r({offsetTop:0,visibleHeight:n.viewportHeight,visibleWidth:n.viewportWidth}))}),[n,r,i]),e.jsx("div",{ref:a,style:oO(!1),children:t})},YO=Y.default.memo((function({...t}){const n=qO("useWindowScroll"),r=qO("customScrollParent"),i=r||n?ZO:GO,o=r||n?VO:WO,a=qO("context");return e.jsx(i,{...t,...sO(i,a),children:e.jsxs(o,{children:[e.jsx(zO,{}),e.jsx(PO,{}),e.jsx(HO,{})]})})})),{Component:UO,useEmitter:KO,useEmitterValue:qO,usePublisher:XO}=zC(LO,{events:{atBottomStateChange:"atBottomStateChange",atTopStateChange:"atTopStateChange",endReached:"endReached",isScrolling:"isScrolling",rangeChanged:"rangeChanged",readyStateChanged:"readyStateChanged",startReached:"startReached",stateChanged:"stateChanged"},methods:{scrollBy:"scrollBy",scrollTo:"scrollTo",scrollToIndex:"scrollToIndex"},optional:{components:"components",computeItemKey:"computeItemKey",context:"context",customScrollParent:"customScrollParent",data:"data",headerFooterTag:"headerFooterTag",increaseViewportBy:"increaseViewportBy",initialItemCount:"initialItemCount",initialTopMostItemIndex:"initialTopMostItemIndex",itemClassName:"itemClassName",itemContent:"itemContent",listClassName:"listClassName",logLevel:"logLevel",overscan:"overscan",restoreStateFrom:"restoreStateFrom",scrollerRef:"scrollerRef",scrollSeekConfiguration:"scrollSeekConfiguration",totalCount:"totalCount",useWindowScroll:"useWindowScroll"}},YO),GO=uO({useEmitter:KO,useEmitterValue:qO,usePublisher:XO}),ZO=fO({useEmitter:KO,useEmitterValue:qO,usePublisher:XO});function QO(e,t,n){return"normal"!==t&&!(null!=t&&t.endsWith("px"))&&n(`${e} was not resolved to pixel value correctly`,t,tk.WARN),"normal"===t?0:parseInt(null!=t?t:"0",10)}const JO=Y.default.createContext({focusedIndex:-1,setFocusedIndex:()=>{}}),eT=({children:n})=>{const[r,i]=t.useState(-1);return e.jsx(JO.Provider,Object.assign({value:{focusedIndex:r,setFocusedIndex:i}},{children:n}))},tT=K.default.div`
    overflow: hidden;
    border: 1px solid ${ts.Neutral[5]};
    border-radius: 4px;
    background: ${ts.Neutral[8]};

    min-width: 23rem;
    ${e=>e.$width&&`width: ${e.$width}px;`}
    max-height: 27rem;
    overflow-y: auto;

    ${is.MaxWidth.mobileL} {
        min-width: unset;
        width: calc(100vw - 2.5rem);
        max-height: 15rem;
    }

    ::-webkit-scrollbar {
        width: 14px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${ts.Neutral[4]};
        border: 5px solid transparent;
        border-radius: 9999px;
        background-clip: padding-box;
    }
`,nT=K.default.div`
    background: transparent;
    padding: 0.5rem;
`,rT=K.default.ul`
    list-style-type: none;
`,iT=K.default.li`
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    padding: 0.75rem 0.5rem;
    cursor: pointer;

    outline-color: ${ts.Accent.Light[3]};

    ${e=>e.$active&&i.css`
            background: ${ts.Accent.Light[5]};
        `}
`,oT=K.default(C.TickIcon)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1rem;
    color: ${ts.Primary};
`,aT=K.default.div`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1rem;
`,sT=K.default(k.SquareTickFillIcon)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1.625rem;
    color: ${ts.Primary};
`,lT=K.default(S.SquareIcon)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1.625rem;
    color: ${ts.Accent.Light[2]};
`,cT=K.default.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`,dT=K.default(Cf)`
    ${e=>ys.getTextStyle("small"===e.$variant?"BodySmall":"Body","semibold")}
    cursor: pointer;
    overflow: hidden;
    color: ${ts.Primary};
`,uT=K.default(dT)`
    outline-offset: 0.25rem;
`,fT=K.default(dT)`
    padding: 0.5rem 1rem;
`,hT=K.default.div`
    width: 100%;
    display: flex;
    padding: 1rem 0.5rem;
    align-items: center;
`,pT=K.default.div`
    ${e=>ys.getTextStyle("small"===e.$variant?"BodySmall":"Body","regular")}
`,gT=K.default(s.ExclamationCircleFillIcon)`
    ${e=>{const t="small"===e.$variant?1:1.125;return i.css`
            height: ${t}rem;
            width: ${t}rem;
        `}}
    margin-right: 0.625rem;
    color: ${ts.Validation.Red.Icon};
`,mT=e=>"small"===e?1:1.125,bT=e=>i.css`
        height: ${mT(e)}rem;
        width: ${mT(e)}rem;
    `,vT=K.default.div`
    background: ${ts.Neutral[7]};
    border-radius: 4px;
    display: flex;
    align-items: center;
`,yT=K.default.label`
    flex: 1;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: ${e=>"small"===e.$variant?"0.4375rem 0.5rem":"0.6875rem 0.5rem"};
`,xT=K.default(kf)`
    height: ${e=>"small"===e.$variant?2.5:3}rem;
    flex: 1;
    padding: 0;
    height: auto;
`,wT=K.default(x.MagnifierIcon)`
    color: ${ts.Neutral[3]};
    flex-shrink: 0;
    ${e=>bT(e.$variant)}
`,$T=K.default(ss)`
    align-self: stretch;
    box-sizing: content-box;
    padding: 0 0.5rem;
    margin-left: -0.5rem;
    color: ${ts.Neutral[3]};
    cursor: pointer;

    ${e=>i.css`
            svg {
                ${bT(e.$variant)}
            }
        `}
`,jT=t.forwardRef(((t,n)=>{var{value:r,variant:i,onClear:o}=t,a=X(t,["value","variant","onClear"]);return e.jsxs(vT,{children:[e.jsxs(yT,{children:[e.jsx(wT,{$variant:i,"aria-hidden":!0}),e.jsx(xT,Object.assign({ref:n,value:r,$variant:i},a))]}),r&&e.jsx($T,Object.assign({"aria-label":"Clear search",focusOutline:"browser",onClick:o,$variant:i},{children:e.jsx(m.CrossIcon,{"aria-hidden":!0})}))]})})),ST=({listItems:n,multiSelect:r,selectedItems:i,disableItemFocus:o,itemsLoadState:a="success",itemTruncationType:s="end",itemMaxLines:l=2,labelDisplayType:c="inline",variant:d="default",listboxId:u,width:f,topScrollItem:h,onSelectItem:p,onSelectAll:g,onDismiss:m,onRetry:b,valueExtractor:v,listExtractor:y,renderListItem:x,renderCustomCallToAction:w,enableSearch:$,hideNoResultsDisplay:j,searchPlaceholder:S="Search",searchFunction:k,onSearch:C})=>{const{focusedIndex:O,setFocusedIndex:T}=t.useContext(JO),[D,I]=t.useState(""),[E,_]=t.useState(n),M=mc(a),R=pc(),A=t.useRef(),N=t.useRef(),B=t.useRef([]),F=t.useRef(),L=t.useRef(null),P=e=>y?y(e):e.toString(),z=t.useCallback((e=>!!lj(i,(t=>dj(t,e)))),[i]),H=uc((()=>k(D))),W=uc((()=>n.filter((e=>{var t;const n=P(e),r="object"==typeof n?n.title.toLowerCase():n.toLowerCase(),i="string"==typeof n||null===(t=n.secondaryLabel)||void 0===t?void 0:t.toLowerCase(),o=D.trim().toLowerCase();return r.includes(o)||i&&i.includes(o)})))),V=(e,t)=>{T(t),null==p||p(e,(e=>v?v(e):e)(e))},Y=e=>{const t=e.target.value;I(t),null==C||C()},U=()=>{var e;I(""),null===(e=F.current)||void 0===e||e.focus(),null==C||C()},K=()=>{null==b||b()};fc("keydown",(e=>{var t,n;switch(e.code){case"ArrowDown":if(e.preventDefault(),O<E.length-1){const e=O+1;null===(t=B.current[e])||void 0===t||t.focus(),T(e)}break;case"ArrowUp":if(e.preventDefault(),O>0){const e=O-1;null===(n=B.current[e])||void 0===n||n.focus(),T(e)}else 0===O&&F.current&&(F.current.focus(),T(-1));break;case"Space":case"Enter":document.activeElement===B.current[O]&&(e.preventDefault(),E[O]&&V(E[O],O))}})),t.useEffect((()=>{if(!h&&L.current)return void L.current.scrollTo({top:0});const e=setTimeout((()=>{const e=n.indexOf(h);L.current&&-1!==e&&(L.current.scrollToIndex({index:e}),T(e))}),0);return()=>clearTimeout(e)}),[B,n,T,h]),t.useEffect((()=>{if(R)return;if(o)return;const e=n.findIndex((e=>z(e)));F.current?(T(-1),setTimeout((()=>{var e;return null===(e=F.current)||void 0===e?void 0:e.focus()}),200)):O>0?(L.current.scrollToIndex({index:O,align:"center"}),setTimeout((()=>{var e;return null===(e=B.current[O])||void 0===e?void 0:e.focus()}),200)):-1!==e?(L.current.scrollToIndex({index:e,align:"center"}),T(e),setTimeout((()=>{var t;return null===(t=B.current[e])||void 0===t?void 0:t.focus()}),200)):(L.current.scrollToIndex({index:0}),T(0),setTimeout((()=>{var e;return null===(e=B.current[0])||void 0===e?void 0:e.focus()}),200))}),[z,o,O,n,R,T]),t.useEffect((()=>{R&&M&&(o||"success"===a&&F.current&&(T(-1),F.current.focus()))}),[R,M,a,T,o]),t.useEffect((()=>{_(""===D?n:k?H():W())}),[H,W,n,k,D]);const q=t=>r?t?e.jsx(sT,{"aria-hidden":!0}):e.jsx(lT,{"aria-hidden":!0}):t?e.jsx(oT,{"aria-hidden":!0}):e.jsx(aT,{}),X=(t,n)=>{const r=P(t),i="string"==typeof r?r:r.title,o="string"==typeof r?void 0:r.secondaryLabel;return e.jsx(pS,{displayType:c,label:i,maxLines:l,selected:n,sublabel:o,truncationType:s,variant:d})},G=(t,n)=>{if(!b||b&&"success"===a){const i=z(t),o=n===O;return e.jsx(iT,Object.assign({"aria-selected":i,"aria-multiselectable":r,"data-testid":"list-item",onClick:()=>V(t,n),onMouseEnter:()=>(e=>{T(e)})(n),ref:e=>{B.current[n]=e},role:"option",tabIndex:o?0:-1,$active:o},{children:x?x(t,{selected:i}):e.jsxs(e.Fragment,{children:[q(i),X(t,i)]})}),((e,t)=>`item_${t}__${v?v(e):e}`)(t,n))}},Z=()=>{if(($||k)&&"success"===a)return e.jsx(jT,{ref:F,onChange:Y,value:D,placeholder:S,"data-testid":"search-input","aria-label":"Enter text to search",onClear:U,variant:d})},Q=()=>{if(r&&E.length>0&&!D&&"success"===a)return e.jsx(cT,{children:e.jsx(fT,Object.assign({onClick:g,type:"button",$variant:d},{children:0===i.length?"Select all":"Clear all"}))})},J=()=>{if(!j&&(D||!$)&&0===E.length&&"success"===a)return e.jsxs(hT,Object.assign({"data-testid":"list-no-results"},{children:[e.jsx(gT,{"data-testid":"no-result-icon",$variant:d}),e.jsx(pT,Object.assign({$variant:d},{children:"No results found."}))]}))},ee=()=>{if(b&&"loading"===a){const t="small"===d?16:18;return e.jsxs(hT,Object.assign({"data-testid":"list-loading"},{children:[e.jsx(Ks,{$buttonStyle:"secondary",size:t}),e.jsx(pT,Object.assign({$variant:d},{children:"Loading..."}))]}))}},te=()=>{if(b&&"fail"===a)return e.jsxs(hT,Object.assign({"data-testid":"list-fail"},{children:[e.jsx(gT,{"data-testid":"load-error-icon",$variant:d}),e.jsx(pT,Object.assign({$variant:d},{children:"Failed to load."}))," ",e.jsx(uT,Object.assign({onClick:K,type:"button",$variant:d},{children:"Try again."}))]}))};return e.jsxs(tT,Object.assign({"data-testid":"dropdown-container",ref:A,$width:f},{children:[e.jsxs(nT,Object.assign({ref:N,"data-testid":"dropdown-list"},{children:[Z(),Q(),J(),ee(),te(),e.jsx(rT,Object.assign({role:"listbox",id:u},{children:e.jsx(jO,Object.assign({ref:L,style:{height:"100%"},data:E,customScrollParent:A.current,itemContent:(e,t)=>G(t,e)},"test"===process.env.NODE_ENV?{initialItemCount:E.length,key:E.length}:{}))}))]})),(()=>{if(w)return e.jsx("div",Object.assign({"data-testid":"custom-cta"},{children:w(m,E)}))})()]}))},kT=K.default(Cf)`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    padding: ${e=>"small"===e.$variant?"0.4375rem 1rem":"0.6875rem 1rem"};

    ${e=>ys.getTextStyle("small"===e.$variant?"BodySmall":"Body","regular")}

    :disabled {
        cursor: not-allowed;
    }
`,CT=K.default.div`
    display: flex;
    align-items: center;
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: ${Ss.Base};

    svg {
        color: ${ts.Neutral[3]};
        ${e=>{const t="small"===e.$variant?hs.BodySmall.fontSize:hs.Body.fontSize;return i.css`
                height: ${t}rem;
                width: ${t}rem;
            `}}
    }
`,OT=t.forwardRef((({children:t,disabled:n,expanded:r,listboxId:i,popupRole:o,readOnly:a,variant:s},l)=>e.jsxs(kT,Object.assign({ref:l,type:"button","aria-expanded":r,"aria-haspopup":o,"data-testid":"selector",disabled:n,"aria-controls":i,$variant:s},{children:[t,!a&&e.jsx(CT,Object.assign({$expanded:r,$variant:s},{children:e.jsx(f.ChevronDownIcon,{"aria-hidden":!0})}))]}))));var TT=Symbol.for("immer-nothing"),DT=Symbol.for("immer-draftable"),IT=Symbol.for("immer-state"),ET="production"!==process.env.NODE_ENV?[function(e){return`The plugin for '${e}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e}()\` when initializing your application.`},function(e){return`produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e}'`},"This object has been frozen and should not be mutated",function(e){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+e},"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.","Immer forbids circular references","The first or second argument to `produce` must be a function","The third argument to `produce` must be a function or undefined","First argument to `createDraft` must be a plain object, an array, or an immerable object","First argument to `finishDraft` must be a draft returned by `createDraft`",function(e){return`'current' expects a draft, got: ${e}`},"Object.defineProperty() cannot be used on an Immer draft","Object.setPrototypeOf() cannot be used on an Immer draft","Immer only supports deleting array indices","Immer only supports setting array indices and the 'length' property",function(e){return`'original' expects a draft, got: ${e}`}]:[];function _T(e,...t){if("production"!==process.env.NODE_ENV){const n=ET[e],r="function"==typeof n?n.apply(null,t):n;throw new Error(`[Immer] ${r}`)}throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var MT=Object.getPrototypeOf;function RT(e){return!!e&&!!e[IT]}function AT(e){return!!e&&(BT(e)||Array.isArray(e)||!!e[DT]||!!e.constructor?.[DT]||HT(e)||WT(e))}var NT=Object.prototype.constructor.toString();function BT(e){if(!e||"object"!=typeof e)return!1;const t=MT(e);if(null===t)return!0;const n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return n===Object||"function"==typeof n&&Function.toString.call(n)===NT}function FT(e,t){0===LT(e)?Reflect.ownKeys(e).forEach((n=>{t(n,e[n],e)})):e.forEach(((n,r)=>t(r,n,e)))}function LT(e){const t=e[IT];return t?t.type_:Array.isArray(e)?1:HT(e)?2:WT(e)?3:0}function PT(e,t){return 2===LT(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function zT(e,t,n){const r=LT(e);2===r?e.set(t,n):3===r?e.add(n):e[t]=n}function HT(e){return e instanceof Map}function WT(e){return e instanceof Set}function VT(e){return e.copy_||e.base_}function YT(e,t){if(HT(e))return new Map(e);if(WT(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const n=BT(e);if(!0===t||"class_only"===t&&!n){const t=Object.getOwnPropertyDescriptors(e);delete t[IT];let n=Reflect.ownKeys(t);for(let r=0;r<n.length;r++){const i=n[r],o=t[i];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(t[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:e[i]})}return Object.create(MT(e),t)}{const t=MT(e);if(null!==t&&n)return{...e};const r=Object.create(t);return Object.assign(r,e)}}function UT(e,t=!1){return qT(e)||RT(e)||!AT(e)||(LT(e)>1&&(e.set=e.add=e.clear=e.delete=KT),Object.freeze(e),t&&Object.entries(e).forEach((([e,t])=>UT(t,!0)))),e}function KT(){_T(2)}function qT(e){return Object.isFrozen(e)}var XT,GT={};function ZT(e){const t=GT[e];return t||_T(0,e),t}function QT(){return XT}function JT(e,t){t&&(ZT("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function eD(e){tD(e),e.drafts_.forEach(rD),e.drafts_=null}function tD(e){e===XT&&(XT=e.parent_)}function nD(e){return XT={drafts_:[],parent_:XT,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function rD(e){const t=e[IT];0===t.type_||1===t.type_?t.revoke_():t.revoked_=!0}function iD(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];return void 0!==e&&e!==n?(n[IT].modified_&&(eD(t),_T(4)),AT(e)&&(e=oD(t,e),t.parent_||sD(t,e)),t.patches_&&ZT("Patches").generateReplacementPatches_(n[IT].base_,e,t.patches_,t.inversePatches_)):e=oD(t,n,[]),eD(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==TT?e:void 0}function oD(e,t,n){if(qT(t))return t;const r=t[IT];if(!r)return FT(t,((i,o)=>aD(e,r,t,i,o,n))),t;if(r.scope_!==e)return t;if(!r.modified_)return sD(e,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const t=r.copy_;let i=t,o=!1;3===r.type_&&(i=new Set(t),t.clear(),o=!0),FT(i,((i,a)=>aD(e,r,t,i,a,n,o))),sD(e,t,!1),n&&e.patches_&&ZT("Patches").generatePatches_(r,n,e.patches_,e.inversePatches_)}return r.copy_}function aD(e,t,n,r,i,o,a){if("production"!==process.env.NODE_ENV&&i===n&&_T(5),RT(i)){const a=oD(e,i,o&&t&&3!==t.type_&&!PT(t.assigned_,r)?o.concat(r):void 0);if(zT(n,r,a),!RT(a))return;e.canAutoFreeze_=!1}else a&&n.add(i);if(AT(i)&&!qT(i)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;oD(e,i),t&&t.scope_.parent_||"symbol"==typeof r||!Object.prototype.propertyIsEnumerable.call(n,r)||sD(e,i)}}function sD(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&UT(t,n)}var lD={get(e,t){if(t===IT)return e;const n=VT(e);if(!PT(n,t))return function(e,t,n){const r=uD(t,n);return r?"value"in r?r.value:r.get?.call(e.draft_):void 0}(e,n,t);const r=n[t];return e.finalized_||!AT(r)?r:r===dD(e.base_,t)?(hD(e),e.copy_[t]=pD(r,e)):r},has:(e,t)=>t in VT(e),ownKeys:e=>Reflect.ownKeys(VT(e)),set(e,t,n){const r=uD(VT(e),t);if(r?.set)return r.set.call(e.draft_,n),!0;if(!e.modified_){const r=dD(VT(e),t),i=r?.[IT];if(i&&i.base_===n)return e.copy_[t]=n,e.assigned_[t]=!1,!0;if(function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}(n,r)&&(void 0!==n||PT(e.base_,t)))return!0;hD(e),fD(e)}return e.copy_[t]===n&&(void 0!==n||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_[t]=!0),!0},deleteProperty:(e,t)=>(void 0!==dD(e.base_,t)||t in e.base_?(e.assigned_[t]=!1,hD(e),fD(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0),getOwnPropertyDescriptor(e,t){const n=VT(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r?{writable:!0,configurable:1!==e.type_||"length"!==t,enumerable:r.enumerable,value:n[t]}:r},defineProperty(){_T(11)},getPrototypeOf:e=>MT(e.base_),setPrototypeOf(){_T(12)}},cD={};function dD(e,t){const n=e[IT];return(n?VT(n):e)[t]}function uD(e,t){if(!(t in e))return;let n=MT(e);for(;n;){const e=Object.getOwnPropertyDescriptor(n,t);if(e)return e;n=MT(n)}}function fD(e){e.modified_||(e.modified_=!0,e.parent_&&fD(e.parent_))}function hD(e){e.copy_||(e.copy_=YT(e.base_,e.scope_.immer_.useStrictShallowCopy_))}FT(lD,((e,t)=>{cD[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),cD.deleteProperty=function(e,t){return"production"!==process.env.NODE_ENV&&isNaN(parseInt(t))&&_T(13),cD.set.call(this,e,t,void 0)},cD.set=function(e,t,n){return"production"!==process.env.NODE_ENV&&"length"!==t&&isNaN(parseInt(t))&&_T(14),lD.set.call(this,e[0],t,n,e[0])};function pD(e,t){const n=HT(e)?ZT("MapSet").proxyMap_(e,t):WT(e)?ZT("MapSet").proxySet_(e,t):function(e,t){const n=Array.isArray(e),r={type_:n?1:0,scope_:t?t.scope_:QT(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=r,o=lD;n&&(i=[r],o=cD);const{revoke:a,proxy:s}=Proxy.revocable(i,o);return r.draft_=s,r.revoke_=a,s}(e,t);return(t?t.scope_:QT()).drafts_.push(n),n}function gD(e){if(!AT(e)||qT(e))return e;const t=e[IT];let n;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=YT(e,t.scope_.immer_.useStrictShallowCopy_)}else n=YT(e,!0);return FT(n,((e,t)=>{zT(n,e,gD(t))})),t&&(t.finalized_=!1),n}var mD=new class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,t,n)=>{if("function"==typeof e&&"function"!=typeof t){const n=t;t=e;const r=this;return function(e=n,...i){return r.produce(e,(e=>t.call(this,e,...i)))}}let r;if("function"!=typeof t&&_T(6),void 0!==n&&"function"!=typeof n&&_T(7),AT(e)){const i=nD(this),o=pD(e,void 0);let a=!0;try{r=t(o),a=!1}finally{a?eD(i):tD(i)}return JT(i,n),iD(r,i)}if(!e||"object"!=typeof e){if(r=t(e),void 0===r&&(r=e),r===TT&&(r=void 0),this.autoFreeze_&&UT(r,!0),n){const t=[],i=[];ZT("Patches").generateReplacementPatches_(e,r,t,i),n(t,i)}return r}_T(1,e)},this.produceWithPatches=(e,t)=>{if("function"==typeof e)return(t,...n)=>this.produceWithPatches(t,(t=>e(t,...n)));let n,r;const i=this.produce(e,t,((e,t)=>{n=e,r=t}));return[i,n,r]},"boolean"==typeof e?.autoFreeze&&this.setAutoFreeze(e.autoFreeze),"boolean"==typeof e?.useStrictShallowCopy&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){AT(e)||_T(8),RT(e)&&(e=function(e){RT(e)||_T(10,e);return gD(e)}(e));const t=nD(this),n=pD(e,void 0);return n[IT].isManual_=!0,tD(t),n}finishDraft(e,t){const n=e&&e[IT];n&&n.isManual_||_T(9);const{scope_:r}=n;return JT(r,t),iD(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){const r=t[n];if(0===r.path.length&&"replace"===r.op){e=r.value;break}}n>-1&&(t=t.slice(n+1));const r=ZT("Patches").applyPatches_;return RT(e)?r(e,t):this.produce(e,(e=>r(e,t)))}},bD=mD.produce;mD.produceWithPatches.bind(mD),mD.setAutoFreeze.bind(mD),mD.setUseStrictShallowCopy.bind(mD),mD.applyPatches.bind(mD),mD.createDraft.bind(mD),mD.finishDraft.bind(mD);var vD=yw,yD=Zw,xD=Px,wD=Ei,$D=$w,jD=Wx,SD=pw,kD=iw,CD=Object.prototype.hasOwnProperty;var OD=Ii((function(e){if(null==e)return!0;if($D(e)&&(wD(e)||"string"==typeof e||"function"==typeof e.splice||jD(e)||kD(e)||xD(e)))return!e.length;var t=yD(e);if("[object Map]"==t||"[object Set]"==t)return!e.size;if(SD(e))return!vD(e).length;for(var n in e)if(CD.call(e,n))return!1;return!0}));const TD=(e,t,n)=>{const r=bD(e,(e=>{for(let r=e.length-1;r>=0;r--){const i=e[r],o=ID(i.keyPath);if(i.checked=t.has(o),i.hasSubItems&&n&&!0!==i.checked){const t=i.subItemIndexes.map((t=>e[t])),n=t.every((e=>!0===e.checked)),r=t.some((e=>!1!==e.checked));n?i.checked=!0:r&&(i.checked="mixed")}}}));return r},DD=(e,t)=>{const[n,...r]=t;if(OD(e)||OD(n))return;const i=e.find((e=>e.key===n));return i&&r.length?DD(i.subItems,r):i},ID=e=>e.join(","),ED=e=>new Set(e.map((e=>e.join(",")))),_D=K.default.li`
    display: ${e=>e.$visible?"flex":"none"};
`,MD=K.default.div`
    flex: 1;
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    padding: 0.75rem 0.5rem;
    cursor: ${e=>e.$toggleable?"default":"pointer"};
    overflow: hidden; // required for label to truncate properly

    outline-color: ${ts.Accent.Light[3]};

    ${e=>e.$active&&i.css`
            background: ${ts.Accent.Light[5]};
        `}
`,RD=K.default.div`
    height: 1px;
    width: ${e=>2.125*e.$level}rem;
`,AD=K.default.div`
    width: 1.625rem;
    height: 1.625rem;
    color: ${ts.Primary};
    cursor: pointer;

    svg {
        width: 1.625rem;
        height: 1.625rem;
        transition: transform 250ms ease-in-out;

        ${e=>{if(e.$expanded)return i.css`
                    transform: rotate(90deg);
                `}}
    }
`,ND=K.default.div`
    width: 1.625rem;
    height: 1.625rem;
    margin-right: 0.5rem;
`,BD=K.default.div`
    flex-shrink: 0;
    height: 1.625rem;
    width: ${e=>e.$hasNestedSiblings?"1.625rem":"1rem"};

    display: flex;
    justify-content: center;
`,FD=K.default(C.TickIcon)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1rem;
    color: ${ts.Primary};
`,LD=K.default(T.MinusSquareFillIcon)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1.625rem;
    color: ${ts.Primary};
`,PD=({listItems:n,multiSelect:r,selectedKeyPaths:i,itemsLoadState:o="success",itemTruncationType:a="end",itemMaxLines:s=2,variant:l="default",listboxId:c,width:d,mode:u="default",selectableCategory:f,onSelectItem:h,onSelectAll:p,onRetry:g,enableSearch:m,hideNoResultsDisplay:b,searchPlaceholder:v="Search",onSearch:y})=>{const x=r||f,[w,$]=t.useState(""),j=w.toLowerCase().trim(),[S,k]=t.useState(!1),C=t.useRef(),T=t.useRef(),D=t.useRef([]),I=t.useRef(),E=pc(),[_,M]=t.useState([]),[R,A]=t.useState([]),N=S?R:_,B=t.useMemo((()=>{let e=0;for(const t of _)t.level>e&&(e=t.level);return e}),[_]),[F,L]=t.useState(0),[P,z]=t.useState([]),[H,W]=t.useState(0),V=e=>{const t=e.target.value;$(t),""===t?k(!1):t.trim().length>=3&&k(!0),null==y||y()},Y=()=>{$(""),k(!1),I.current.focus(),null==y||y()},U=()=>{null==g||g()},K=()=>{if(0===i.size){const e=[],t=[];_.forEach((n=>{n.hasSubItems||(e.push(n.keyPath),t.push(n))})),null==p||p(e,t)}else null==p||p([],[])},q=uc(((e,t)=>((e,t,n,r,i)=>{const o=[],a=(e,s)=>{const l=[],c=e.some((e=>{var t;return null===(t=e.subItems)||void 0===t?void 0:t.length}));return e.forEach(((d,u)=>{var f,h;const p=s?s.level+1:0,g=s?[...s.keyPath,d.key]:[d.key],m=ID(g),b={item:d,index:o.length,indexInParent:u,parentSetSize:e.length,keyPath:g,parentIndex:s?s.index:-1,parentKeyPath:s?s.keyPath:[],level:p,visible:0===p||i||(null==s?void 0:s.expanded),expanded:i,checked:t.has(m),hasSubItems:!!(null===(f=d.subItems)||void 0===f?void 0:f.length),subItemIndexes:[],hasNestedSiblings:c,matched:!!r&&-1!==d.label.toLowerCase().indexOf(r),hasMatchedSubItems:!1};if(l.push(b),o.push(b),null===(h=d.subItems)||void 0===h?void 0:h.length){const e=a(d.subItems,b);if(n&&!0!==b.checked){const t=e.every((e=>!0===e.checked)),n=e.some((e=>!1!==e.checked));t?b.checked=!0:n&&(b.checked="mixed")}b.hasMatchedSubItems=e.some((e=>e.matched||e.hasMatchedSubItems)),b.subItemIndexes=e.map((e=>e.index))}})),l};return a(e,void 0),o})(e,i,r,j,t))),X=uc((e=>{return i.size?(t=q(e,!1),bD(t,(e=>{const t=e.filter((e=>!0===e.checked));for(const n of t){let t=n.parentIndex;for(;t>=0;){const n=e[t];n.visible=!0,n.expanded=!0;for(const t of n.subItemIndexes)e[t].visible=!0;t=n.parentIndex}}}))):(e=>bD(e,(e=>{const t=e.findIndex((e=>e.hasSubItems));if(t<0)return;let n=t,r=0;for(let t=n;t<e.length;t++){const i=e[t].keyPath.length;if(i>r)r=i;else if(i<r)break;n=t,e[t].visible=!0,e[t].expanded=!0}for(let t=0;t<e.length;t++){const r=e[t],i=r.keyPath.slice(0,-1),o=e[n].keyPath.slice(0,i.length);dj(i,o)&&(r.visible=!0)}return e})))(q(e,!1));var t})),G=uc((e=>{const t=e=>{const n=[];for(const r of e){if(-1!==r.label.toLowerCase().indexOf(j))n.push(r);else if(r.subItems){const e=t(r.subItems);if(e.length>0){n.push(Object.assign(Object.assign({},r),{subItems:e}));continue}}}return n};return t(e)})),Z=uc((()=>{M((e=>TD(e,i,r))),S&&A((e=>TD(e,i,r)))})),Q=(e,t,n)=>{const r=((e,t,n)=>bD(e,(e=>{e[t].expanded=n;const r=e[t].keyPath;for(let i=t+1;i<e.length;i++){const t=e[i],o=e[t.parentIndex],a=t.keyPath.slice(0,r.length);if(!dj(r,a))break;t.visible=n&&o.expanded&&o.visible}})))(N,e,t);L(e),W(n),S?A(r):M(r)};fc("keydown",(e=>{switch(e.code){case"ArrowDown":{e.preventDefault();const t=((e,t,n)=>{for(let r=n;r<e.length;r++)if(t(e[r]))return e[r]})(N,(e=>e.visible),F+1);t&&(W((e=>e+1)),L(t.index),D.current[t.index].focus());break}case"ArrowUp":{e.preventDefault();const t=((e,t,n)=>{for(let r=n;r>=0;r--)if(t(e[r]))return e[r]})(N,(e=>e.visible),F-1);t?(W((e=>e-1)),L(t.index),D.current[t.index].focus()):0===H&&I.current&&(I.current.focus(),W(-1),L(-1));break}case"ArrowRight":e.preventDefault(),Q(F,!0,H);break;case"ArrowLeft":e.preventDefault(),Q(F,!1,H);break;case"Space":if(document.activeElement===D.current[F]){e.preventDefault();const t=N[F];if(t.hasSubItems&&!x)return;null==h||h(t)}}})),t.useEffect((()=>{let e;"default"===u?e=X(n):"expand"===u?e=q(n,!0):"collapse"===u&&(e=q(n,!1)),M(e)}),[q,X,n,u]),t.useEffect((()=>{z(N.filter((e=>e.visible)))}),[S,N]),t.useEffect((()=>{Z()}),[r,i,Z]),t.useEffect((()=>{if(S&&w.trim().length>=3){const e=G(n),t=(e=>bD(e,(e=>{for(const t of e)if(t.matched&&(t.visible=!0),t.hasMatchedSubItems){t.visible=!0,t.expanded=!0;for(const n of t.subItemIndexes)e[n].visible=!0}})))(q(e,!1));A(t)}}),[G,q,n,S,w]),t.useEffect((()=>{E||(I.current?(L(-1),W(-1),setTimeout((()=>{var e;return null===(e=I.current)||void 0===e?void 0:e.focus()}),200)):D.current[F]?setTimeout((()=>{var e;return null===(e=D.current[F])||void 0===e?void 0:e.focus()}),200):(L(0),W(0),setTimeout((()=>{var e;return null===(e=D.current[0])||void 0===e?void 0:e.focus()}),200)))}),[F,H,E]);const J=()=>{if(m&&"success"===o)return e.jsx(jT,{ref:I,onChange:V,value:w,placeholder:v,"data-testid":"search-input","aria-label":"Enter text to search",onClear:Y,variant:l})},ee=()=>{if(r&&!S&&_.length>0&&"success"===o)return e.jsx(cT,{children:e.jsx(fT,Object.assign({onClick:K,type:"button",$variant:l},{children:0===i.size?"Select all":"Clear all"}))})},te=()=>{if(!b&&S&&0===R.length&&"success"===o)return e.jsxs(hT,Object.assign({"data-testid":"list-no-results"},{children:[e.jsx(gT,{$variant:l}),e.jsx(pT,Object.assign({$variant:l},{children:"No results found."}))]}))},ne=()=>{if(g&&"loading"===o){const t="small"===l?16:18;return e.jsxs(hT,Object.assign({"data-testid":"list-loading"},{children:[e.jsx(Ks,{$buttonStyle:"secondary",size:t}),e.jsx(pT,Object.assign({$variant:l},{children:"Loading..."}))]}))}},re=()=>{if(g&&"fail"===o)return e.jsxs(hT,Object.assign({"data-testid":"list-fail"},{children:[e.jsx(gT,{"data-testid":"load-error-icon",$variant:l}),e.jsx(pT,Object.assign({$variant:l},{children:"Failed to load."}))," ",e.jsx(uT,Object.assign({onClick:U,type:"button",$variant:l},{children:"Try again."}))]}))},ie=t=>{if(r)switch(t.checked){case"mixed":return e.jsx(LD,{"aria-hidden":!0});case!0:return e.jsx(sT,{"aria-hidden":!0});default:return e.jsx(lT,{"aria-hidden":!0})}if(!t.hasSubItems)return e.jsx(BD,Object.assign({$hasNestedSiblings:t.hasNestedSiblings||0===t.level},{children:t.checked&&e.jsx(FD,{"aria-hidden":!0})}))},oe=(t,n)=>{const{level:i,visible:o,expanded:l,keyPath:c,checked:d,hasSubItems:u,indexInParent:f,parentSetSize:p}=t,g=t.index,m=H===n,b=u&&!x;return e.jsxs(_D,Object.assign({$visible:o},{children:[B>0&&e.jsx(RD,{$level:i}),B>0&&!u&&r&&e.jsx(ND,{}),e.jsxs(MD,Object.assign({"aria-checked":d,"aria-selected":!!d,"aria-expanded":u?l:void 0,"aria-level":i+1,"aria-posinset":f+1,"aria-setsize":p,"data-testid":"list-item",onClick:e=>{e.stopPropagation(),b?Q(g,!l,n):((e,t)=>{W(t),L(e),null==h||h(N[e])})(g,n)},onMouseEnter:()=>((e,t)=>{L(t.index),W(e)})(n,t),ref:e=>D.current[t.index]=e,role:"treeitem",tabIndex:m?0:-1,$active:m,$toggleable:b},{children:[u&&e.jsx(AD,Object.assign({"data-testid":"toggle-category-button",onClick:e=>{e.stopPropagation(),Q(g,!l,n)},$expanded:l},{children:e.jsx(O.CaretRightIcon,{})})),ie(t),e.jsx(pS,{bold:u,searchTerm:S?j:void 0,label:t.item.label,selected:!!d,truncationType:a,maxLines:s})]}))]}),`[${c.join("---")}]`)};return e.jsx(tT,Object.assign({"data-testid":"dropdown-container",ref:C,$width:d},{children:e.jsxs(nT,Object.assign({"data-testid":"nested-dropdown-list"},{children:[J(),ee(),te(),ne(),re(),e.jsx("div",Object.assign({"aria-multiselectable":r,id:c,ref:T,role:"tree"},{children:e.jsx(jO,Object.assign({style:{height:"100%"},customScrollParent:C.current,data:P,itemContent:(e,t)=>oe(t,e)},"test"===process.env.NODE_ENV?{initialItemCount:P.length,key:P.length}:{}))}))]}))}))},zD=({selectedOptions:n,placeholder:r="Select",options:i,disabled:o,error:a,className:s,"data-testid":l,id:c,enableSearch:d=!1,searchFunction:u,searchPlaceholder:f,valueExtractor:h,listExtractor:p,onSelectOptions:g,onShowOptions:m,onHideOptions:b,onRetry:v,optionsLoadState:y="success",optionTruncationType:x="end",renderListItem:w,hideNoResultsDisplay:$,renderCustomCallToAction:j,onBlur:S,variant:k="default",readOnly:C,alignment:O,dropdownZIndex:T})=>{const[D,I]=t.useState(n||[]),[E,_]=t.useState(!1),[M,R]=t.useState(!1),[A]=t.useState((()=>cc.generate())),N=t.useRef(),B=t.useRef();t.useEffect((()=>{I(n||[])}),[n]);const F=()=>{D&&D.length>0?(I([]),V([])):(I(i),V(i))},L=(e,t)=>{const n=[...D],r=sj(D,(e=>(h?h(e):e)===t));r>-1?n.splice(r,1):n.push(e),I(n),V(n)},P=()=>{E&&(_(!1),W(!1))},z=()=>{M||E||R(!0)},H=e=>{!M||E||N.current.contains(e.relatedTarget)||(R(!1),null==S||S())},W=e=>{!e&&b&&b(),e&&m&&m()},V=e=>{g&&g(e)};return e.jsx(eT,{children:e.jsx(vf,{enabled:!C&&!o,isOpen:E,renderElement:()=>e.jsx(jf,Object.assign({className:s,"data-testid":l,id:c,ref:N,tabIndex:-1,onFocus:z,onBlur:H,$focused:M,$disabled:o,$readOnly:C,$error:a},{children:e.jsx(OT,Object.assign({ref:B,disabled:o,expanded:E,listboxId:A,popupRole:"listbox",readOnly:C,variant:k},{children:e.jsx(df,Object.assign({$disabled:o},{children:D&&0!==D.length?e.jsx(uf,Object.assign({$variant:k},{children:i&&D.length===i.length?"All selected":`${D.length} selected`})):e.jsx(ff,Object.assign({truncateType:x,$variant:k},{children:r}))}))}))})),renderDropdown:({elementWidth:t})=>e.jsx(ST,{listboxId:A,listItems:i,onSelectItem:L,onDismiss:P,valueExtractor:h,listExtractor:p,enableSearch:d,searchFunction:u,searchPlaceholder:f,multiSelect:!0,selectedItems:D,onSelectAll:F,onRetry:v,itemsLoadState:y,itemTruncationType:x,renderListItem:w,hideNoResultsDisplay:$,renderCustomCallToAction:j,variant:k,width:t}),onOpen:()=>{_(!0),W(!0),R(!0)},onClose:e=>{_(!1),W(!1),"click"!==e&&(R(!1),null==S||S())},onDismiss:()=>{B.current.focus(),_(!1),W(!1)},clickToToggle:!0,offset:8,alignment:O,fitAvailableHeight:!0,customZIndex:T})})},HD=(e,t)=>{const[n,...r]=t;if(OD(e)||!n)return;const i=e.find((e=>e.key===n));return i?r.length?HD(i.subItems,r):i:void 0},WD=(e,t)=>{const n=[];for(const r of e)r.subItems?n.push(...WD(r.subItems,[...t,r.key])):n.push({value:r.value,label:r.label,keyPath:[...t,r.key]});return n},VD=({placeholder:n="Select",options:r,disabled:i,error:o,className:a,"data-testid":s,id:l,selectedKeyPaths:c,mode:d,valueToStringFunction:u,enableSearch:f,searchPlaceholder:h,hideNoResultsDisplay:p,readOnly:g,onSearch:m,onSelectOptions:b,onShowOptions:v,onHideOptions:y,onRetry:x,onBlur:w,optionsLoadState:$="success",optionTruncationType:j="end",variant:S,alignment:k,dropdownZIndex:C})=>{const O=r,[T,D]=t.useState(c?ED(c):new Set),[I,E]=t.useState([]),[_,M]=t.useState(!1),[R,A]=t.useState(!1),[N]=t.useState((()=>cc.generate())),B=t.useRef(),F=t.useRef(),L=t.useRef();t.useEffect((()=>{const e=c||[],t=((e,t)=>{const n=[];for(let r=0;r<t.length;r++){const i=t[r],o=HD(e,i);o&&n.push({value:o.value,label:o.label,keyPath:i})}return n})(O,e);D(ED(e)),E(t)}),[c,O]);const P=(e,t)=>{const n=t.map((e=>({keyPath:e.keyPath,label:e.item.label,value:e.item.value})));D(ED(e)),E(n),K(e,n)},z=e=>{const t=q(e),n=t.map((e=>e.keyPath));E(t),D(ED(n)),K(n,t)},H=()=>{R||_||A(!0)},W=e=>{!R||_||B.current.contains(e.relatedTarget)||(A(!1),null==w||w())},V=()=>{const{label:e,value:t}=I[0];return I.length>1?`${I.length} selected`:u?u(t)||t.toString():e},Y=e=>{if("middle"===j){let t=0;return L&&L.current&&(t=L.current.getBoundingClientRect().width),dc.truncateOneLine(e,t,120,6)}return e},U=e=>{!e&&y&&y(),e&&v&&v()},K=(e,t)=>{if(b){const n=t.map((e=>e.value));b(e,n)}},q=e=>{if(!0===e.checked)return I.filter((t=>{const n=t.keyPath.slice(0,e.keyPath.length);return!dj(e.keyPath,n)}));{const t=[...I],n=e.hasSubItems?((e,t)=>{const n=HD(e,t);return n&&n.subItems?WD(n.subItems,t):[]})(O,e.keyPath):[{value:e.item.value,label:e.item.label,keyPath:e.keyPath}];return n.forEach((e=>{I.find((t=>dj(t.keyPath,e.keyPath)))||t.push(e)})),t}};return e.jsx(vf,{enabled:!g&&!i,isOpen:_,renderElement:()=>e.jsx(jf,Object.assign({className:a,"data-testid":s,id:l,ref:B,tabIndex:-1,onFocus:H,onBlur:W,$focused:R,$disabled:i,$readOnly:g,$error:o},{children:e.jsx(OT,Object.assign({ref:F,disabled:i,expanded:_,listboxId:N,popupRole:"tree",readOnly:g,variant:S},{children:e.jsx(df,Object.assign({ref:L,$disabled:i},{children:OD(I)?e.jsx(ff,Object.assign({truncateType:j},{children:n})):e.jsx(uf,Object.assign({truncateType:j},{children:Y(V())}))}))}))})),renderDropdown:({elementWidth:t})=>e.jsx(PD,{listboxId:N,listItems:O,multiSelect:!0,selectedKeyPaths:T,itemsLoadState:$,itemTruncationType:j,enableSearch:f,searchPlaceholder:h,hideNoResultsDisplay:p,onSelectItem:z,onSelectAll:P,onRetry:x,onSearch:m,variant:S,mode:d,width:t}),onOpen:()=>{M(!0),U(!0),A(!0)},onClose:e=>{M(!1),U(!1),"click"!==e&&(A(!1),null==w||w())},onDismiss:()=>{F.current.focus(),M(!1),U(!1)},clickToToggle:!0,offset:8,alignment:k,fitAvailableHeight:!0,customZIndex:C})},YD=({placeholder:n="Select",options:r,disabled:i,error:o,className:a,"data-testid":s,id:l,selectedKeyPath:c,mode:d,valueToStringFunction:u,enableSearch:f,searchPlaceholder:h,selectableCategory:p,hideNoResultsDisplay:g,readOnly:m,onBlur:b,onSearch:v,onSelectOption:y,onShowOptions:x,onHideOptions:w,onRetry:$,optionsLoadState:j="success",optionTruncationType:S="end",variant:k,alignment:C,dropdownZIndex:O})=>{const T=r,[D,I]=t.useState(c?ED([c]):new Set),[E,_]=t.useState(),[M,R]=t.useState(!1),[A,N]=t.useState(!1),[B]=t.useState((()=>cc.generate())),F=t.useRef(),L=t.useRef(),P=t.useRef();t.useEffect((()=>{I(c?ED([c]):new Set);const e=DD(T,c||[]);_(null!=e?e:void 0)}),[c,T]);const z=e=>{var t;const{keyPath:n,item:{label:r,value:i}}=e;I(ED([n])),_({label:r,value:i}),R(!1),U(!1),null===(t=L.current)||void 0===t||t.focus(),null==y||y(n,i)},H=()=>{A||M||N(!0)},W=e=>{!A||M||F.current.contains(e.relatedTarget)||(N(!1),null==b||b())},V=()=>{const{label:e,value:t}=E;return u?u(t)||t.toString():e},Y=e=>{if("middle"===S){let t=0;return P&&P.current&&(t=P.current.getBoundingClientRect().width),dc.truncateOneLine(e,t,120,6)}return e},U=e=>{!e&&w&&w(),e&&x&&x()};return e.jsx(vf,{enabled:!m&&!i,isOpen:M,renderElement:()=>e.jsx(jf,Object.assign({className:a,"data-testid":s,id:l,ref:F,tabIndex:-1,onFocus:H,onBlur:W,$focused:A,$disabled:i,$readOnly:m,$error:o},{children:e.jsx(OT,Object.assign({ref:L,disabled:i,expanded:M,listboxId:B,popupRole:"tree",readOnly:m,variant:k},{children:e.jsx(df,Object.assign({ref:P,$disabled:i},{children:OD(E)?e.jsx(ff,Object.assign({truncateType:S},{children:n})):e.jsx(uf,Object.assign({truncateType:S},{children:Y(V())}))}))}))})),renderDropdown:({elementWidth:t})=>e.jsx(PD,{listboxId:B,listItems:T,selectedKeyPaths:D,selectableCategory:p,itemsLoadState:j,itemTruncationType:S,enableSearch:f,searchPlaceholder:h,hideNoResultsDisplay:g,onSelectItem:z,onRetry:$,onSearch:v,variant:k,mode:d,width:t}),onOpen:()=>{R(!0),U(!0),N(!0)},onClose:e=>{R(!1),U(!1),"click"!==e&&(N(!1),null==b||b())},onDismiss:()=>{L.current.focus(),R(!1),U(!1)},clickToToggle:!0,offset:8,alignment:C,fitAvailableHeight:!0,customZIndex:O})};var UD=function(e,t,n,r){var i=-1,o=null==e?0:e.length;for(r&&o&&(n=e[++i]);++i<o;)n=t(n,e[i],i,e);return n};var KD=function(e){return function(t,n,r){for(var i=-1,o=Object(t),a=r(t),s=a.length;s--;){var l=a[e?s:++i];if(!1===n(o[l],l,o))break}return t}}(),qD=Cw;var XD=$w;var GD=function(e,t){return function(n,r){if(null==n)return n;if(!XD(n))return e(n,r);for(var i=n.length,o=t?i:-1,a=Object(n);(t?o--:++o<i)&&!1!==r(a[o],o,a););return n}}((function(e,t){return e&&KD(e,t,qD)}));var ZD=UD,QD=GD,JD=q$,eI=function(e,t,n,r,i){return i(e,(function(e,i,o){n=r?(r=!1,e):t(n,e,i,o)})),n},tI=Ei;var nI=Ii((function(e,t,n){var r=tI(e)?ZD:eI,i=arguments.length<3;return r(e,JD(t),n,i,QD)}));const rI=[["Afghanistan",["asia"],"af","93"],["Albania",["europe"],"al","355"],["Algeria",["africa","north-africa"],"dz","213"],["Andorra",["europe"],"ad","376"],["Angola",["africa"],"ao","244"],["Antigua and Barbuda",["america","carribean"],"ag","1268"],["Argentina",["america","south-america"],"ar","54","(..) ........"],["Armenia",["asia","ex-ussr"],"am","374",".. ......"],["Aruba",["america","carribean"],"aw","297"],["Australia",["oceania"],"au","61","(..) .... ...."],["Austria",["europe","eu-union"],"at","43"],["Azerbaijan",["asia","ex-ussr"],"az","994","(..) ... .. .."],["Bahamas",["america","carribean"],"bs","1242"],["Bahrain",["middle-east"],"bh","973"],["Bangladesh",["asia"],"bd","880"],["Barbados",["america","carribean"],"bb","1246"],["Belarus",["europe","ex-ussr"],"by","375","(..) ... .. .."],["Belgium",["europe","eu-union"],"be","32","... .. .. .."],["Belize",["america","central-america"],"bz","501"],["Benin",["africa"],"bj","229"],["Bhutan",["asia"],"bt","975"],["Bolivia",["america","south-america"],"bo","591"],["Bosnia and Herzegovina",["europe","ex-yugos"],"ba","387"],["Botswana",["africa"],"bw","267"],["Brazil",["america","south-america"],"br","55","(..) ........."],["British Indian Ocean Territory",["asia"],"io","246"],["Brunei",["asia"],"bn","673"],["Bulgaria",["europe","eu-union"],"bg","359"],["Burkina Faso",["africa"],"bf","226"],["Burundi",["africa"],"bi","257"],["Cambodia",["asia"],"kh","855"],["Cameroon",["africa"],"cm","237"],["Canada",["america","north-america"],"ca","1","(...) ... ...."],["Cape Verde",["africa"],"cv","238"],["Caribbean Netherlands",["america","carribean"],"bq","599",""],["Central African Republic",["africa"],"cf","236"],["Chad",["africa"],"td","235"],["Chile",["america","south-america"],"cl","56"],["China",["asia"],"cn","86",".. ........."],["Colombia",["america","south-america"],"co","57","... ... ...."],["Comoros",["africa"],"km","269"],["Congo",["africa"],"cd","243"],["Congo",["africa"],"cg","242"],["Costa Rica",["america","central-america"],"cr","506",".... ...."],["Côte d’Ivoire",["africa"],"ci","225",".. .. .. .."],["Croatia",["europe","eu-union","ex-yugos"],"hr","385"],["Cuba",["america","carribean"],"cu","53"],["Curaçao",["america","carribean"],"cw","599",""],["Cyprus",["europe","eu-union"],"cy","357",".. ......"],["Czech Republic",["europe","eu-union"],"cz","420","... ... ..."],["Denmark",["europe","eu-union","baltic"],"dk","45",".. .. .. .."],["Djibouti",["africa"],"dj","253"],["Dominica",["america","carribean"],"dm","1767"],["Dominican Republic",["america","carribean"],"do","1",""],["Ecuador",["america","south-america"],"ec","593"],["Egypt",["africa","north-africa"],"eg","20"],["El Salvador",["america","central-america"],"sv","503",".... ...."],["Equatorial Guinea",["africa"],"gq","240"],["Eritrea",["africa"],"er","291"],["Estonia",["europe","eu-union","ex-ussr","baltic"],"ee","372",".... ......"],["Ethiopia",["africa"],"et","251"],["Fiji",["oceania"],"fj","679"],["Finland",["europe","eu-union","baltic"],"fi","358",".. ... .. .."],["France",["europe","eu-union"],"fr","33",". .. .. .. .."],["French Guiana",["america","south-america"],"gf","594"],["French Polynesia",["oceania"],"pf","689"],["Gabon",["africa"],"ga","241"],["Gambia",["africa"],"gm","220"],["Georgia",["asia","ex-ussr"],"ge","995"],["Germany",["europe","eu-union","baltic"],"de","49",".... ........"],["Ghana",["africa"],"gh","233"],["Greece",["europe","eu-union"],"gr","30"],["Grenada",["america","carribean"],"gd","1473"],["Guadeloupe",["america","carribean"],"gp","590","",0],["Guam",["oceania"],"gu","1671"],["Guatemala",["america","central-america"],"gt","502",".... ...."],["Guinea",["africa"],"gn","224"],["Guinea-Bissau",["africa"],"gw","245"],["Guyana",["america","south-america"],"gy","592"],["Haiti",["america","carribean"],"ht","509",".... ...."],["Honduras",["america","central-america"],"hn","504"],["Hong Kong",["asia"],"hk","852",".... ...."],["Hungary",["europe","eu-union"],"hu","36"],["Iceland",["europe"],"is","354","... ...."],["India",["asia"],"in","91","..... ....."],["Indonesia",["asia"],"id","62"],["Iran",["middle-east"],"ir","98","... ... ...."],["Iraq",["middle-east"],"iq","964"],["Ireland",["europe","eu-union"],"ie","353",".. ......."],["Israel",["middle-east"],"il","972","... ... ...."],["Italy",["europe","eu-union"],"it","39","... ......."],["Jamaica",["america","carribean"],"jm","1876"],["Japan",["asia"],"jp","81",".. .... ...."],["Jordan",["middle-east"],"jo","962"],["Kazakhstan",["asia","ex-ussr"],"kz","7","... ... .. .."],["Kenya",["africa"],"ke","254"],["Kiribati",["oceania"],"ki","686"],["Kosovo",["europe","ex-yugos"],"xk","383"],["Kuwait",["middle-east"],"kw","965"],["Kyrgyzstan",["asia","ex-ussr"],"kg","996","... ... ..."],["Laos",["asia"],"la","856"],["Latvia",["europe","eu-union","ex-ussr","baltic"],"lv","371",".. ... ..."],["Lebanon",["middle-east"],"lb","961"],["Lesotho",["africa"],"ls","266"],["Liberia",["africa"],"lr","231"],["Libya",["africa","north-africa"],"ly","218"],["Liechtenstein",["europe"],"li","423"],["Lithuania",["europe","eu-union","ex-ussr","baltic"],"lt","370"],["Luxembourg",["europe","eu-union"],"lu","352"],["Macau",["asia"],"mo","853"],["Macedonia",["europe","ex-yugos"],"mk","389"],["Madagascar",["africa"],"mg","261"],["Malawi",["africa"],"mw","265"],["Malaysia",["asia"],"my","60",".. .... ...."],["Maldives",["asia"],"mv","960"],["Mali",["africa"],"ml","223"],["Malta",["europe","eu-union"],"mt","356"],["Marshall Islands",["oceania"],"mh","692"],["Martinique",["america","carribean"],"mq","596"],["Mauritania",["africa"],"mr","222"],["Mauritius",["africa"],"mu","230"],["Mexico",["america","central-america"],"mx","52","... ... ...."],["Micronesia",["oceania"],"fm","691"],["Moldova",["europe"],"md","373","(..) .. .. .."],["Monaco",["europe"],"mc","377"],["Mongolia",["asia"],"mn","976"],["Montenegro",["europe","ex-yugos"],"me","382"],["Morocco",["africa","north-africa"],"ma","212"],["Mozambique",["africa"],"mz","258"],["Myanmar",["asia"],"mm","95"],["Namibia",["africa"],"na","264"],["Nauru",["africa"],"nr","674"],["Nepal",["asia"],"np","977"],["Netherlands",["europe","eu-union"],"nl","31",".. ........"],["New Caledonia",["oceania"],"nc","687"],["New Zealand",["oceania"],"nz","64","... ... ...."],["Nicaragua",["america","central-america"],"ni","505"],["Niger",["africa"],"ne","227"],["Nigeria",["africa"],"ng","234"],["North Korea",["asia"],"kp","850"],["Norway",["europe","baltic"],"no","47","... .. ..."],["Oman",["middle-east"],"om","968"],["Pakistan",["asia"],"pk","92","... ......."],["Palau",["oceania"],"pw","680"],["Palestine",["middle-east"],"ps","970"],["Panama",["america","central-america"],"pa","507"],["Papua New Guinea",["oceania"],"pg","675"],["Paraguay",["america","south-america"],"py","595"],["Peru",["america","south-america"],"pe","51"],["Philippines",["asia"],"ph","63",".... ......."],["Poland",["europe","eu-union","baltic"],"pl","48","... ... ..."],["Portugal",["europe","eu-union"],"pt","351"],["Puerto Rico",["america","carribean"],"pr","1",""],["Qatar",["middle-east"],"qa","974"],["Réunion",["africa"],"re","262"],["Romania",["europe","eu-union"],"ro","40"],["Russia",["europe","asia","ex-ussr","baltic"],"ru","7","(...) ... .. .."],["Rwanda",["africa"],"rw","250"],["Saint Kitts and Nevis",["america","carribean"],"kn","1869"],["Saint Lucia",["america","carribean"],"lc","1758"],["Saint Vincent and the Grenadines",["america","carribean"],"vc","1784"],["Samoa",["oceania"],"ws","685"],["San Marino",["europe"],"sm","378"],["São Tomé and Príncipe",["africa"],"st","239"],["Saudi Arabia",["middle-east"],"sa","966"],["Senegal",["africa"],"sn","221"],["Serbia",["europe","ex-yugos"],"rs","381"],["Seychelles",["africa"],"sc","248"],["Sierra Leone",["africa"],"sl","232"],["Singapore",["asia"],"sg","65",".... ...."],["Slovakia",["europe","eu-union"],"sk","421"],["Slovenia",["europe","eu-union","ex-yugos"],"si","386"],["Solomon Islands",["oceania"],"sb","677"],["Somalia",["africa"],"so","252"],["South Africa",["africa"],"za","27"],["South Korea",["asia"],"kr","82","... .... ...."],["South Sudan",["africa","north-africa"],"ss","211"],["Spain",["europe","eu-union"],"es","34","... ... ..."],["Sri Lanka",["asia"],"lk","94"],["Sudan",["africa"],"sd","249"],["Suriname",["america","south-america"],"sr","597"],["Swaziland",["africa"],"sz","268"],["Sweden",["europe","eu-union","baltic"],"se","46","(...) ... ..."],["Switzerland",["europe"],"ch","41",".. ... .. .."],["Syria",["middle-east"],"sy","963"],["Taiwan",["asia"],"tw","886"],["Tajikistan",["asia","ex-ussr"],"tj","992"],["Tanzania",["africa"],"tz","255"],["Thailand",["asia"],"th","66"],["Timor-Leste",["asia"],"tl","670"],["Togo",["africa"],"tg","228"],["Tonga",["oceania"],"to","676"],["Trinidad and Tobago",["america","carribean"],"tt","1868"],["Tunisia",["africa","north-africa"],"tn","216"],["Turkey",["europe"],"tr","90","... ... .. .."],["Turkmenistan",["asia","ex-ussr"],"tm","993"],["Tuvalu",["asia"],"tv","688"],["Uganda",["africa"],"ug","256"],["Ukraine",["europe","ex-ussr"],"ua","380","(..) ... .. .."],["United Arab Emirates",["middle-east"],"ae","971"],["United Kingdom",["europe","eu-union"],"gb","44",".... ......"],["United States",["america","north-america"],"us","1","(...) ... ...."],["Uruguay",["america","south-america"],"uy","598"],["Uzbekistan",["asia","ex-ussr"],"uz","998",".. ... .. .."],["Vanuatu",["oceania"],"vu","678"],["Vatican City",["europe"],"va","39",".. .... ...."],["Venezuela",["america","south-america"],"ve","58"],["Vietnam",["asia"],"vn","84"],["Yemen",["middle-east"],"ye","967"],["Zambia",["africa"],"zm","260"],["Zimbabwe",["africa"],"zw","263"]],iI=(e,t,n,r)=>n?e+"".padEnd(t.length,".")+" "+n:e+"".padEnd(t.length,".")+" "+r;var oI;!function(e){e.getCountries=()=>[].concat(...rI.map((e=>({name:e[0],regions:e[1],iso2:e[2],countryCode:e[3],format:iI("+",e[3],e[4],"... ... ... ... ..")})))),e.formatNumber=(e="",t)=>{if(!t)return e;const n=e.replace(/[\s()]+/g,""),{format:r}=t,i=r.split(" ");i.shift();const o=i.join(" ");return nI(o,((e,t)=>{if(0===e.remainingText.length)return e;if("."!==t)return{formattedText:e.formattedText+t,remainingText:e.remainingText};const[n,...r]=e.remainingText;return{formattedText:e.formattedText+n,remainingText:r}}),{formattedText:"",remainingText:n}).formattedText}}(oI||(oI={}));const aI=n=>{var{onChange:r,value:i,allowClear:o,onClear:a,onBlur:s,error:l,fixedCountry:c=!1,optionPlaceholder:d="Select",optionSearchPlaceholder:u,enableSearch:f,onHideOptions:h,onShowOptions:p,placeholder:g,autoComplete:m}=n,b=X(n,["onChange","value","allowClear","onClear","onBlur","error","fixedCountry","optionPlaceholder","optionSearchPlaceholder","enableSearch","onHideOptions","onShowOptions","placeholder","autoComplete"]);const[v]=t.useState(oI.getCountries()),[y,x]=t.useState(void 0),[w,$]=t.useState(""),j=t.useRef(),S=gc({ref:j,formatter:e=>oI.formatNumber(e.replace(/[^0-9]/g,""),y)});t.useEffect((()=>{const e=v.filter((e=>e.countryCode===sI(null==i?void 0:i.countryCode)))[0];x(e),$(oI.formatNumber(null==i?void 0:i.number,e))}),[i]);const k=e=>{O(w,e),r&&C(w,e)},C=(e,t)=>{const n=oI.formatNumber(e,t);r({number:n.replace(/[\s()]+/g,""),countryCode:t&&lI(t.countryCode)})},O=(e,t)=>{$(oI.formatNumber(e,t)),x(t)};return e.jsx(Yj,Object.assign({ref:j,value:w,onChange:()=>{const{nextValue:e,updateCaretPosition:t}=S();t(),O(e,y),r&&C(e,y)},allowClear:o&&!!w,onClear:()=>{a?a():$("")},onBlur:s,error:l,placeholder:g,addon:c?{type:"label",attributes:{value:lI(null==y?void 0:y.countryCode)}}:{type:"list",attributes:{placeholder:d,options:v,selectedOption:y,enableSearch:f,searchPlaceholder:u,valueExtractor:e=>`+${e.countryCode}`,listExtractor:e=>({title:e.name,secondaryLabel:lI(e.countryCode)}),onSelectOption:k,onHideOptions:h,onShowOptions:p}},inputMode:"numeric",autoComplete:m},b))},sI=e=>e?e.replace("+",""):"",lI=e=>e?e.includes("+")?e:`+${e}`:"",cI=({className:n,"data-testid":r,selectedOption:i,minimumCharacters:o=3,fetchOptions:a,placeholder:s="Enter here...",readOnly:l=!1,disabled:c=!1,error:d,valueExtractor:u,listExtractor:f,displayValueExtractor:h=(e=>e.toString()),onSelectOption:p})=>{const g=i&&h(i),[m,b]=t.useState(g||""),[v,y]=t.useState(g||""),[x,w]=t.useState([]),[$,j]=t.useState(!0),[S,k]=t.useState(!1),[C,O]=t.useState(!!i),[T,D]=t.useState(i),I=t.useRef(a),E=e=>G(void 0,void 0,void 0,(function*(){k(!1),j(!0);try{const t=yield I.current(e);y(e),w(t),j(!1)}catch(e){k(!0)}})),_=t.useCallback(eu((e=>E(e)),500,{leading:!1,trailing:!0}),[]);t.useEffect((()=>{I.current=a}),[a]),t.useEffect((()=>{m&&m.length>=o&&m!==v?_(m):_.cancel(),""===m&&T&&(p&&p(void 0,void 0),A(),D(void 0)),i&&m!==h(i)&&O(!1)}),[m,i]),t.useEffect((()=>{b(i?h(i):""),A(i),D(i)}),[i]);const M=e=>{b(e.target.value)},R=(e,t)=>{p&&p(e,t)},A=e=>{y(e?h(e):""),O(!!e),w([]),j(!0)},N=()=>{b(""),p&&p(void 0,void 0),A()},B=()=>{C||T?(A(T),b(h(T)),p&&p(T,L(T)),D(T)):N()},F=()=>m&&m.length>=o&&!C,L=e=>u?u(e):e,P=()=>e.jsx(Vy,{type:"text",value:m,onChange:M,placeholder:s,readOnly:l,disabled:c,allowClear:!0,onClear:N,styleType:"no-border",onBlur:m.length<o?B:void 0});return e.jsxs(hf,Object.assign({className:n,show:F(),error:d&&!F(),disabled:c,readOnly:l,testId:r,onBlur:B},{children:[l?e.jsx(e.Fragment,{children:P()}):e.jsx(af,{children:P()}),!l&&F()&&e.jsx(cf,{}),e.jsx(Rj,{listItems:x,onSelectItem:R,valueExtractor:u,listExtractor:f,itemsLoadState:S?"fail":$?"loading":"success",visible:F(),disableItemFocus:!0,onRetry:()=>E(m),itemTruncationType:"end",itemMaxLines:1,labelDisplayType:"next-line"})]}))},dI=K.default.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
`,uI=K.default(zy)`
    position: absolute;
    right: 0;
    padding-left: 0.5rem;
    margin-right: 0;
`,fI=K.default(of)`
    padding-right: 2.75rem;
`,hI=n=>{var{selectedOptions:r,placeholders:i={from:"Select",to:"Select"},options:o,disabled:a,className:s,readOnly:l,error:c,"data-testid":d,id:u,enableSearch:f=!1,searchFunction:h,searchPlaceholder:p,valueExtractor:g,valueToStringFunction:m,listExtractor:b,displayValueExtractor:v,onSelectOption:y,listStyleWidth:x,onShowOptions:w,onHideOptions:$,onRetry:j,optionsLoadState:S={from:"success",to:"success"},optionTruncationType:k="middle",renderCustomSelectedOption:C,renderListItem:O,renderCustomCallToAction:T}=n,D=X(n,["selectedOptions","placeholders","options","disabled","className","readOnly","error","data-testid","id","enableSearch","searchFunction","searchPlaceholder","valueExtractor","valueToStringFunction","listExtractor","displayValueExtractor","onSelectOption","listStyleWidth","onShowOptions","onHideOptions","onRetry","optionsLoadState","optionTruncationType","renderCustomSelectedOption","renderListItem","renderCustomCallToAction"]);const[I,E]=t.useState(),[_,M]=t.useState(),R=t.useRef(),A={from:t.useRef(),to:t.useRef()},[N,B]=t.useState("none");t.useEffect((()=>{E(null==r?void 0:r.from),M(null==r?void 0:r.to)}),[r]);const F=e=>t=>{t.stopPropagation(),t.preventDefault(),a||l||B("from"===e?"from":"to"===e&&I?"to":"from")},L=e=>{const t="from"===e?I:_;return v?v(t):g?g(t):null==t?void 0:t.toString()},P=(e,t)=>{if("middle"===k){let n=0;return A[e]&&A[e].current&&(n=A[e].current.getBoundingClientRect().width),dc.truncateOneLine((e=>"string"==typeof e?e:m(e)||e.toString())(t),n,120,8)}return t},z=e=>{!e&&$&&$(),e&&w&&w()},H=t=>{const n="from"===t?I:_;return n?C?C(n):e.jsx(uf,Object.assign({truncateType:k},{children:P(t,L(t))})):e.jsx(ff,Object.assign({truncateType:k},{children:P(t,i[t])}))},W=t=>e.jsx(df,Object.assign({onClick:F(t),ref:A[t],$disabled:a},{children:H(t)}));return e.jsxs(hf,Object.assign({show:"none"!==N,"data-testid":D["data-testid"],error:c&&!("none"!==N),disabled:a,readOnly:l,testId:d,onBlur:()=>{z(!1),B("none"),I&&_||(M(void 0),E(void 0))},className:s},{children:[e.jsxs(dI,{children:[e.jsx(fI,Object.assign({type:"button","data-testid":u||"selector",disabled:a,ref:R,onClick:F()},D,{children:e.jsxs(Kf,Object.assign({currentActive:(()=>{switch(N){case"from":return"start";case"to":return"end";case"none":return N}})()},{children:[W("from"),W("to")]}))})),"none"===N&&I&&_&&!l&&!a&&e.jsx(uI,Object.assign({onClick:e=>{e.stopPropagation(),E(void 0),M(void 0),y&&y({from:void 0,to:void 0},void 0)},type:"button","aria-label":"Clear"},{children:e.jsx(Hy,{"aria-hidden":!0})}))]}),"none"!==N&&e.jsx(cf,{}),(()=>{if("none"===N)return null;const t=o[N];if(t&&t.length>0){const n="from"===N?I:_;return e.jsx(Rj,{listItems:t,onSelectItem:(e,t)=>{return n=e,r=t,"from"===(i=N)?E(n):M(n),z(!1),R&&R.current.focus(),y&&y({[i]:n},r),void("from"===i?(M(void 0),B("to"),z(!0)):B("none"));var n,r,i},onDismiss:()=>(B("none"),z(!1),R&&R.current.focus(),void(I&&_||(M(void 0),E(void 0)))),valueExtractor:g,listExtractor:b,listStyleWidth:x,visible:!0,enableSearch:f,searchPlaceholder:p,searchFunction:h,"data-testid":`${N}-dropdown-list`,selectedItems:n?[n]:[],onRetry:j,itemsLoadState:S[N],itemTruncationType:k,renderListItem:O,renderCustomCallToAction:T})}return null})()]}))},pI=({selectedOption:n,placeholder:r="Select",options:i,disabled:o,error:a,className:s,"data-testid":l,id:c,enableSearch:d=!1,searchFunction:u,searchPlaceholder:f,valueExtractor:h,valueToStringFunction:p,listExtractor:g,displayValueExtractor:m,onSelectOption:b,onShowOptions:v,onHideOptions:y,onRetry:x,optionsLoadState:w="success",optionTruncationType:$="end",renderCustomSelectedOption:j,renderListItem:S,hideNoResultsDisplay:k,renderCustomCallToAction:C,onBlur:O,variant:T="default",readOnly:D,alignment:I,dropdownZIndex:E})=>{const[_,M]=t.useState(n),[R,A]=t.useState(!1),[N,B]=t.useState(!1),[F]=t.useState((()=>cc.generate())),L=t.useRef(),P=t.useRef(),z=t.useRef();t.useEffect((()=>{M(n)}),[n]);const H=(e,t)=>{P.current.focus(),M(e),A(!1),K(!1),null==b||b(e,t)},W=()=>{R&&(A(!1),K(!1))},V=()=>{N||R||B(!0)},Y=e=>{!N||R||L.current.contains(e.relatedTarget)||(B(!1),null==O||O())},U=e=>{if("middle"===$){let t=0;return z&&z.current&&(t=z.current.getBoundingClientRect().width),dc.truncateOneLine((e=>"string"==typeof e?e:p(e)||e.toString())(e),t,120,8)}return e},K=e=>{e?null==v||v():null==y||y()};return e.jsx(eT,{children:e.jsx(vf,{enabled:!D&&!o,isOpen:R,renderElement:()=>e.jsx(jf,Object.assign({className:s,"data-testid":l,id:c,ref:L,tabIndex:-1,onFocus:V,onBlur:Y,$focused:N,$disabled:o,$readOnly:D,$error:a},{children:e.jsx(OT,Object.assign({ref:P,disabled:o,expanded:R,listboxId:F,popupRole:"listbox",readOnly:D,variant:T},{children:e.jsx(df,Object.assign({ref:z,$disabled:o},{children:_?j?j(_):e.jsx(uf,Object.assign({truncateType:$,$variant:T},{children:U(m?m(_):h?h(_):_.toString())})):e.jsx(ff,Object.assign({truncateType:$,$variant:T},{children:r}))}))}))})),renderDropdown:({elementWidth:t})=>e.jsx(ST,{listboxId:F,listItems:i,onSelectItem:H,onDismiss:W,valueExtractor:h,listExtractor:g,enableSearch:d,searchPlaceholder:f,searchFunction:u,selectedItems:_?[_]:[],onRetry:x,itemsLoadState:w,itemTruncationType:$,renderListItem:S,hideNoResultsDisplay:k,renderCustomCallToAction:C,variant:T,width:t}),onOpen:()=>{A(!0),K(!0),B(!0)},onClose:e=>{A(!1),K(!1),"click"!==e&&(B(!1),null==O||O())},onDismiss:()=>{P.current.focus(),A(!1),K(!1)},clickToToggle:!0,offset:8,alignment:I,fitAvailableHeight:!0,customZIndex:E})})},gI=K.default.div`
    overflow: hidden;
    border: 1px solid ${ts.Neutral[5]};
    border-radius: 4px;
    background: ${ts.Neutral[8]};
    padding: 1rem;
    min-width: 23rem;

    ${is.MaxWidth.mobileL} {
        min-width: unset;
        width: calc(100vw - 2.5rem);
        max-height: 15rem;
    }
`,mI=K.default.div`
    display: flex;
    align-items: baseline;
`,bI=K.default.div`
    margin: 0 0.5rem;
`,vI=K.default.div`
    ${e=>ys.getTextStyle("small"===e.$variant?"BodySmall":"Body","regular")}
    text-align: left;
    line-height: 1.375rem;
    ${e=>{if("middle"!==e.truncateType)return i.css`
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                `}}
    overflow: hidden;
`,yI=K.default(vI)`
    color: ${ts.Neutral[3]};
`,xI=n=>{var{alignment:r="left",className:i,disabled:o,dropdownZIndex:a,error:s,histogramSlider:l,id:c,onBlur:d,onChange:u,onChangeEnd:f,optionTruncationType:h="end",placeholder:p="Select",rangeLabelPrefix:g,rangeLabelSuffix:m,readOnly:b,renderRangeLabel:v,value:y}=n,x=X(n,["alignment","className","disabled","dropdownZIndex","error","histogramSlider","id","onBlur","onChange","onChangeEnd","optionTruncationType","placeholder","rangeLabelPrefix","rangeLabelSuffix","readOnly","renderRangeLabel","value"]);const{interval:w,bins:$=[],renderEmptyView:j,ariaLabels:S}=l,[k,C]=t.useState(H()),[O,T]=t.useState(!1),[D,I]=t.useState(!1),[E]=t.useState((()=>cc.generate())),_=$.map((e=>e.minValue)),M=Math.min(..._),R=t.useRef(),A=t.useRef(),N=t.useRef(),B=x["data-testid"]||"select-histogram";t.useEffect((()=>{y!==k&&C(H())}),[y]);const F=e=>{C(e),null==u||u(e)},L=e=>{C(e),null==f||f(e)},P=()=>{D||O||I(!0)},z=e=>{!D||O||R.current.contains(e.relatedTarget)||(I(!1),null==d||d())};function H(){return null!=y?y:[M,M+w]}const W=t=>v?v(t):e.jsxs(exports.Text.Body,{children:[g,t,m]});return e.jsx(eT,{children:e.jsx(vf,{enabled:!b&&!o,isOpen:O,renderElement:()=>e.jsx(jf,Object.assign({className:i,"data-testid":B,id:c,ref:R,tabIndex:-1,onFocus:P,onBlur:z,$focused:D,$disabled:o,$readOnly:b,$error:s},{children:e.jsx(OT,Object.assign({ref:A,disabled:o,expanded:O,listboxId:E,popupRole:"dialog",readOnly:b,variant:"default"},{children:e.jsx(df,Object.assign({ref:N,$disabled:o},{children:_&&0!==_.length?e.jsxs(mI,{children:[W(k[0]),e.jsx(bI,{children:"-"}),W(k[1])]}):e.jsx(yI,Object.assign({truncateType:h,$variant:"default"},{children:p}))}))}))})),renderDropdown:({elementWidth:t})=>e.jsx(gI,Object.assign({style:{width:t}},{children:e.jsx(Ly,{interval:w,value:k,bins:$,onChange:F,onChangeEnd:L,showRangeLabels:!1,renderEmptyView:j,ariaLabels:S})})),onOpen:()=>{T(!0)},onClose:()=>{T(!1)},onDismiss:()=>{A.current.focus(),T(!1)},clickToToggle:!0,offset:8,alignment:r,fitAvailableHeight:!0,customZIndex:a})})},wI=n=>{var{value:r,ariaLabel:i,onChange:o,onChangeEnd:a}=n,s=X(n,["value","ariaLabel","onChange","onChangeEnd"]);const[l,c]=t.useState(d());t.useEffect((()=>{r!==l[0]&&c(d())}),[r]);function d(){return null!=r?[r]:[0]}return e.jsx(My,Object.assign({},s,{value:l,numOfThumbs:1,onChange:e=>{const[t]=e;c([t]),null==o||o(t)},onChangeEnd:e=>{const[t]=e;c([t]),null==a||a(t)},ariaLabels:i?[i]:void 0}))},$I=K.default(exports.Text.H6)`
    text-align: right;
    color: ${ts.Neutral[3]};

    ${e=>{if(e.disabled)return i.css`
                color: ${ts.Neutral[4](e)};
            `}}
`,jI=({value:n,maxLength:r,disabled:i,renderCustomCounter:o})=>{const[a,s]=t.useState("");t.useEffect((()=>{s(l(`${n||""}`))}),[n,r]);const l=e=>{if(o)return o(r,e.toString().length);{const t=r-e.toString().length;return 1===t?`${t} character left`:`${t.toLocaleString()} characters left`}};return e.jsx(e.Fragment,{children:Y.default.isValidElement(a)?a:e.jsx($I,Object.assign({"data-testid":"counter-label",weight:"semibold",disabled:i},{children:a}))})},SI=K.default.div`
    display: flex;
    flex-direction: column;
`,kI=K.default.textarea`
    border: 1px solid ${ts.Neutral[5]};
    border-radius: 4px;
    display: block;
    padding: 0.75rem 1rem;
    width: 100%;
    transition: ${Ss.Base};

    ${ys.getTextStyle("Body","regular")}
    color: ${ts.Neutral[1]};
    background: ${ts.Neutral[8]};

    :focus,
    :active {
        outline: none;
        border: 1px solid ${ts.Accent.Light[1]};
        box-shadow: ${Bs.InputBoxShadow};
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${ts.Neutral[3]};
    }

    ${e=>e.readOnly?i.css`
                border: none;
                padding: 0.75rem 0;
                background: transparent !important;

                :focus,
                :active {
                    border: none;
                    box-shadow: none;
                }
            `:e.disabled?i.css`
                background: ${ts.Neutral[6](e)};
                cursor: not-allowed;

                :focus,
                :active {
                    outline: none;
                    border: 1px solid ${ts.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.error?i.css`
                border: 1px solid ${ts.Validation.Red.Border(e)};

                :focus,
                :active {
                    border: 1px solid ${ts.Validation.Red.Border(e)};
                    box-shadow: ${Bs.InputErrorBoxShadow};
                }
            `:void 0}
`,CI=Y.default.forwardRef(((n,r)=>{var{value:i,disabled:o,error:a,rows:s=5,prefix:l,transformValue:c,onChange:d,maxLength:u}=n,f=X(n,["value","disabled","error","rows","prefix","transformValue","onChange","maxLength"]);const[h,p]=t.useState(i);t.useEffect((()=>{p(i)}),[i]);return e.jsx(kI,Object.assign({ref:r,disabled:o,value:l?l+(null!=h?h:""):h,onChange:e=>{let t=e.target.value;if(l){t.startsWith(l)||(t=l+t.trimStart()),t.length<l.length&&(t=l);if((e.target.selectionStart||0)<l.length)return void e.preventDefault();const n=t.slice(l.length),r=c?c(n):n;if(p(r),e.target.value=l+r,d){const t=Object.assign(Object.assign({},e),{target:Object.assign(Object.assign({},e.target),{value:r})});d(t)}}else{const n=c?c(null!=t?t:""):t;p(n),e.target.value=n,d&&d(e)}},onKeyDown:e=>{if(!l)return;const{selectionStart:t}=e.currentTarget;"Backspace"===e.key&&t<=l.length&&e.preventDefault(),"ArrowLeft"===e.key&&t<=l.length&&e.preventDefault(),"Home"===e.key&&(e.preventDefault(),requestAnimationFrame((()=>{e.currentTarget.setSelectionRange(l.length,l.length)})))},error:a,rows:s,maxLength:l?l.length+u:u},f))})),OI=Y.default.forwardRef(((n,r)=>{var{value:i,disabled:o,rows:a=5,onChange:s,transformValue:l,prefix:c,maxLength:d,renderCustomCounter:u}=n,f=X(n,["value","disabled","rows","onChange","transformValue","prefix","maxLength","renderCustomCounter"]);const[h,p]=t.useState(i);t.useEffect((()=>{p(i)}),[i]);return e.jsxs(SI,{children:[e.jsx(CI,Object.assign({ref:r,disabled:o,value:h,rows:a||5,onChange:e=>{const t=e.target.value;p(t),s&&s(e)},prefix:c,transformValue:l,maxLength:d},f)),d&&e.jsx(jI,{disabled:o,value:h,maxLength:d,renderCustomCounter:u})]})})),TI=K.default.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 0.25rem;
`,DI=K.default.div`
    display: flex;
    flex: 1;
    margin-right: 0.75rem;
`,II=K.default(ny)`
    margin-top: 0;
`,EI=Y.default.forwardRef(((n,r)=>{const{label:i,value:o,errorMessage:a,id:s="form-textarea","data-error-testid":l,"data-testid":c,onChange:d,layoutType:u,mobileCols:f,tabletCols:h,desktopCols:p,transformValue:g,prefix:m=""}=n,b=X(n,["label","value","errorMessage","id","data-error-testid","data-testid","onChange","layoutType","mobileCols","tabletCols","desktopCols","transformValue","prefix"]),[v,y]=t.useState(o);t.useEffect((()=>{y(o)}),[o]);return e.jsxs(gy,Object.assign({id:s,label:i,disabled:b.disabled,layoutType:u,mobileCols:f,tabletCols:h,desktopCols:p},{children:[e.jsx(CI,Object.assign({id:`${s}-base`,"data-testid":c||s,value:v,error:!!a,onChange:e=>{const t=e.target.value;y(t),d&&d(e)},ref:r,prefix:m,transformValue:g},b)),a||b.maxLength?e.jsxs(TI,{children:[a&&e.jsx(DI,{children:e.jsx(II,Object.assign({weight:"semibold","data-testid":l||(s?`${s}-error-message`:"error-message")},{children:a}))}),b.maxLength&&e.jsx(jI,{disabled:b.disabled,value:v,maxLength:b.maxLength,renderCustomCounter:b.renderCustomCounter})]}):e.jsx(e.Fragment,{})]}))})),_I=K.default.div`
    position: relative;
`,MI=K.default(Sf)`
    height: 3rem;
    gap: 0.5rem;
`,RI=K.default(kf)`
    display: block;
    width: 100%;
    flex: 1;
`,AI=K.default.div`
    height: 1.625rem;
    width: 1.625rem;
    margin-right: 0.5rem;
    flex-shrink: 0;

    svg {
        height: 100%;
        width: 100%;

        ${e=>e.$active&&!e.disabled?i.css`
                    color: ${ts.Primary};
                `:i.css`
                    color: ${ts.Neutral[4]};
                `};
    }
`,NI=({type:t,active:n=!1,disabled:r,className:i})=>{let o;switch(t){case"checkbox":o=n?e.jsx(k.SquareTickFillIcon,{}):e.jsx(S.SquareIcon,{});break;case"radio":o=n?e.jsx(I.CircleDotIcon,{}):e.jsx(D.CircleIcon,{});break;case"tick":o=e.jsx(C.TickIcon,{});break;case"cross":o=e.jsx(m.CrossIcon,{});break;default:o=null}return e.jsx(AI,Object.assign({className:i,$active:n,disabled:r},{children:o}))},BI=e=>`\n\tmargin-bottom: ${e||0}rem;\n`,FI=K.default.ol`
    ${e=>BI(e.bottomMargin)}
    margin-left: ${3}rem;

    ${is.MaxWidth.tablet} {
        margin-left: 2.5rem;
    }

    // Counter matters
    counter-reset: list;

    li {
        ${e=>ys.getTextStyle(e.size,"regular")}
        position: relative;
        color: ${ts.Neutral[1]};
    }

    ${e=>{const{reversed:t}=e,n=e.counterType||"decimal",r=e.counterSeparator||")";return i.css`
            li:before {
                content: counter(list, ${n}) "${r}";
                counter-increment: ${t?"list -1":"list"};
                position: absolute;
                left: -2rem;
            }
        `}}

    ${e=>{const{reversed:t,start:n}=e;if(n){const e=t?n+1:n-1;return i.css`
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
`,LI=K.default.ul`
    ${e=>BI(e.bottomMargin)}
    margin-left: 2.5rem;
    list-style-type: ${e=>e.bulletType||"disc"};

    li {
        ${e=>ys.getTextStyle(e.size,"regular")}
        color: ${ts.Neutral[1]};
    }

    counter-reset: list;

    ol,
    ul {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`,PI={Ul:t=>{var{size:n="Body",children:r}=t,i=X(t,["size","children"]);return e.jsx(LI,Object.assign({size:n},i,{children:r}))},Ol:t=>{var{size:n="Body",children:r}=t,i=X(t,["size","children"]);return e.jsx(FI,Object.assign({size:n},i,{children:r}))}},zI=K.default.div`
    position: relative;
    display: inline-flex;
    min-width: 10.375rem;
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    overflow: hidden;
    flex-direction: column;
    height: fit-content;

    // Content positioning style
    ${e=>{if(!e.$indicator)return i.css`
                justify-content: center;
            `}}

    // Container min width to fit content
    ${e=>{if(e.$useContentWidth)return i.css`
                min-width: unset;
            `}}

    // Background, Hover and Border style
    ${e=>"no-border"===e.$styleType?e.$error?i.css`
                        border-color: ${ts.Validation.Red.Icon};

                        :hover {
                            box-shadow: 0 0 4px 1px ${ts.Shadow.Red};
                        }
                    `:e.$disabled?i.css`
                        border-color: transparent;
                    `:i.css`
                        border-color: transparent;

                        :hover {
                            background: ${ts.Accent.Light[6]};
                        }
                    `:e.$disabled&&!e.$selected?i.css`
                        border-color: ${ts.Neutral[5]};
                    `:e.$disabled&&e.$selected?i.css`
                        border-color: ${ts.Neutral[4]};
                    `:e.$error?i.css`
                        border-color: ${ts.Validation.Red.Border};

                        :hover {
                            box-shadow: 0 0 4px 1px ${ts.Shadow.Red};
                        }
                    `:e.$selected?i.css`
                        border-color: ${ts.Primary};

                        :hover {
                            box-shadow: 0 0 4px 1px ${ts.Shadow.Accent};
                        }
                    `:i.css`
                        background: ${ts.Neutral[8]};
                        border-color: ${ts.Neutral[5]};

                        :hover {
                            box-shadow: 0 0 4px 1px ${ts.Shadow.Accent};
                            border-color: ${ts.Accent.Light[1]};
                        }
                    `}
`,HI=K.default.input`
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
`,WI=K.default.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
    width: 100%;
    overflow: hidden;
`,VI=K.default.label`
    ${e=>e.$selected&&!e.$indicator?i.css`
                ${ys.getTextStyle("H4","semibold")}
            `:i.css`
                ${ys.getTextStyle("H4","regular")}
            `}
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    overflow-wrap: break-word;
    -webkit-line-clamp: ${e=>{var t,n;return null!==(n=null===(t=e.$maxLines)||void 0===t?void 0:t.desktop)&&void 0!==n?n:"none"}};
    ${is.MaxWidth.tablet} {
        -webkit-line-clamp: ${e=>{var t,n;return null!==(n=null===(t=e.$maxLines)||void 0===t?void 0:t.tablet)&&void 0!==n?n:"none"}};
    }
    ${is.MaxWidth.mobileL} {
        -webkit-line-clamp: ${e=>{var t,n;return null!==(n=null===(t=e.$maxLines)||void 0===t?void 0:t.mobile)&&void 0!==n?n:"none"}};
    }
    color: ${ts.Neutral[1]};

    ${e=>e.$disabled?i.css`
                color: ${ts.Neutral[3]};
            `:e.$selected?i.css`
                color: ${ts.Primary};
            `:void 0}
`,YI=K.default.div`
    ${ys.getTextStyle("BodySmall","regular")}
    margin-top: 0.5rem;

    z-index: 1; // forces sublabel to render above the input
    pointer-events: none; // to allow click events to be passed to the input

    strong,
    b {
        ${ys.getFontFamily("BodySmall","semibold")}
        color: inherit;
    }

    ${e=>e.$disabled?i.css`
                color: ${ts.Neutral[3]};
            `:e.$selected?i.css`
                color: ${ts.Primary};
            `:i.css`
                color: ${ts.Neutral[1]};
            `}
`,UI=K.default.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    // Background, Hover and Border style
    ${e=>"no-border"===e.$styleType?e.$error?i.css`
                        background: ${ts.Neutral[8]};
                    `:e.$disabled?i.css``:i.css`
                        :hover {
                            background: ${ts.Accent.Light[6]};
                        }
                    `:e.$disabled&&!e.$selected||e.$disabled&&e.$selected?i.css`
                        background: ${ts.Neutral[6]};
                    `:e.$error?i.css`
                        background: ${ts.Neutral[8]};
                    `:e.$selected?i.css`
                        background: ${ts.Accent.Light[5]};
                    `:i.css`
                        background: ${ts.Neutral[8]};
                    `}
`,KI=K.default.div`
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
    padding: ${e=>e.$addPadding?"0.6875rem 0rem 0.6875rem 1rem":"0.6875rem 1rem"};
`,qI=K.default.button`
    color: ${e=>e.$disabled?ts.Neutral[3]:ts.Validation.Red.Icon};
    white-space: nowrap;
    ${ys.getTextStyle("H4","semibold")}
    height: fit-content;
    padding: 0.6875rem 1rem 0.6875rem 0.5rem;
    border: none;
    background: none;

    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
`,XI=K.default.button`
    color: ${e=>e.disabled?ts.Neutral[3]:ts.Primary};
    ${ys.getTextStyle("H4","semibold")}
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border: none;
    background: none;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    padding: 0 1rem 0.6875rem 1rem;
    padding-top: ${e=>e.$paddingTopRequired?"0.6875rem":"0rem"};
    width: 100%;

    svg {
        width: 1.125rem;
        height: 1.125rem;
        margin-left: 0.5rem;
    }
`,GI=K.default.div`
    width: 100%;
    color: ${e=>e.$disabled?ts.Neutral[3]:ts.Primary};
    border: none;
    background: none;
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem 0.5rem 1rem;
`,ZI=K.default(ll)`
    width: 100%;
    user-select: none;
`,QI=K.default.div`
    padding: 0 1rem;
    padding-top: 0.6875rem;
    padding-bottom: ${e=>e.$isFinalItem?"0.6875rem":"0.5rem"};
    ${el({textSize:"BodySmall"})}

    ${e=>e.$disabled?i.css`
                color: ${ts.Neutral[3]};
            `:e.$selected?i.css`
                color: ${ts.Primary};
            `:i.css`
                color: ${ts.Neutral[1]};
            `}
`,JI=K.default(exports.Text.BodySmall)`
    color: ${e=>e.$disabled?ts.Neutral[3]:ts.Validation.Red.Text};
`,eE=K.default(PI.Ul)`
    li {
        color: ${e=>e.$disabled?ts.Neutral[3]:ts.Validation.Red.Text};
    }
`,tE=({type:n="checkbox",indicator:i,checked:o,styleType:a="default",children:s,childrenMaxLines:l,subLabel:c,disabled:d,error:u,name:h,id:p,className:g,compositeSection:m,removable:b,onRemove:v,"data-testid":y,onChange:x,useContentWidth:w})=>{const{collapsible:$=!0,errors:j,children:S,initialExpanded:k}=m||{},[C,O]=t.useState(o),[T,D]=t.useState(k),I=t.useMemo((()=>{const e=Array.isArray(j)&&(null==j?void 0:j.length)>0,t=!Array.isArray(j)&&!!j;return e||t}),[j]),[E]=t.useState(cc.generate()),_=p?`${p}`:`tg-${E}`,M=t.useRef();t.useEffect((()=>{O(o)}),[o]),t.useEffect((()=>{C&&D(null==k||k)}),[C]);const R=e=>{if(!d){if(x)return void x(e);switch(n){case"checkbox":O((e=>!e));break;case"radio":case"yes":case"no":C||O(!0)}}},A=()=>{d||D(!T)},N=()=>{d||!v||v()},B=()=>{let t;switch(n){case"yes":t="tick";break;case"no":t="cross";break;case"checkbox":case"radio":t=n}return e.jsx(NI,{type:t,active:C,disabled:d})},F=()=>{if(!c)return null;let t;return t="function"==typeof c?c():c,e.jsx(YI,Object.assign({"data-id":"toggle-sublabel",$disabled:d,$selected:C},{children:t}))},L=()=>{const t=!T&&!I;return $&&e.jsxs(XI,Object.assign({$paddingTopRequired:t,disabled:d,onClick:A,"data-testid":T?"collapse-button":"expand-button"},{children:[T?"Show less":"Show more",T?e.jsx(r.ChevronUpIcon,{"aria-hidden":!0}):e.jsx(f.ChevronDownIcon,{"aria-hidden":!0})]}))},P=t=>e.jsxs(e.Fragment,{children:[e.jsx(JI,Object.assign({weight:"semibold",$disabled:d},{children:"Error"})),e.jsx(eE,Object.assign({$disabled:d},{children:null==t?void 0:t.map(((t,n)=>e.jsx("li",Object.assign({id:`${_}-error-list-item-${n}`},{children:e.jsx(JI,Object.assign({weight:"semibold",$disabled:d},{children:t}))}),n)))}))]});return e.jsxs(zI,Object.assign({$selected:C,$disabled:d,className:g,$styleType:a,$error:u,$indicator:i,$useContentWidth:w,id:p,"data-testid":y},{children:[e.jsxs(UI,Object.assign({id:`${_}-header-container`,$disabled:d,$error:u,$selected:C,$indicator:i,$styleType:a},{children:[e.jsxs(KI,Object.assign({$addPadding:b},{children:[e.jsx(HI,{ref:M,name:h,id:`${_}-input`,type:"checkbox"===n?"checkbox":"radio","data-testid":"toggle-input",disabled:d,onChange:R,checked:C}),i&&B(),e.jsxs(WI,{children:[e.jsx(VI,Object.assign({htmlFor:`${_}-input`,$selected:C,$indicator:i,$disabled:d,"data-testid":`${_}-toggle-label`,$maxLines:l},{children:s})),c&&F()]})]})),b&&e.jsx(qI,Object.assign({type:"button",$disabled:d,onClick:N,id:`${_}-remove-button`},{children:"Remove"}))]})),S&&e.jsxs("div",{children:[(!$||T)&&e.jsx(QI,Object.assign({"data-id":"toggle-composite-children",$isFinalItem:!$,$disabled:d},{children:S})),$&&!T&&I&&e.jsx(GI,Object.assign({$disabled:d,onClick:A,id:`${_}-error-alert`},{children:e.jsx(ZI,Object.assign({type:d?"description":"error",className:g,showIcon:!0},{children:Array.isArray(j)?P(j):j}))})),L()]})]}))},nE=K.default(Ti.div)`
    position: absolute;
    top: 3.5rem;
    left: 0;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
    background: ${ts.Neutral[8]};
    border-radius: ${"4px"};
    overflow: hidden;
    z-index: 1;

    ${is.MaxWidth.mobileS} {
        max-width: 100%;
    }
`,rE=K.default.div`
    position: relative;
    width: 100%;
    padding: 0.5rem 1.25rem 1.5rem 1.25rem;
    display: flex;
    flex-direction: column;
`,iE=K.default.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${is.MaxWidth.mobileS} {
        flex-direction: column;
        width: 100%;
    }
`,oE=K.default.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;
    gap: 0.5rem 1rem;

    ${is.MaxWidth.mobileS} {
        flex-direction: column-reverse; // FIXME: this breaks tab focus
        margin-top: 2rem;
    }
`,aE=K.default.div`
    display: flex;
    align-items: center;
    margin-right: 2rem;

    ${is.MaxWidth.mobileS} {
        margin-right: 0;
        width: 100%;
    }
`,sE=K.default.div`
    display: flex;
    gap: 0.5rem;

    ${is.MaxWidth.tablet} {
        flex-direction: column;
    }

    ${is.MaxWidth.mobileS} {
        flex-direction: row;
        width: 100%;
    }
`,lE=K.default.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${is.MaxWidth.mobileS} {
        width: 6rem;
    }
`,cE=K.default(ss)`
    width: 5rem;
    padding: 1rem 0;
    color: ${ts.Neutral[3]};

    svg {
        height: 1rem;
        width: 1rem;
    }

    &:hover {
        color: ${ts.Primary};
    }
`,dE=K.default(exports.Text.Body)`
    width: 1.5rem;
    margin: 0 0.25rem;
    text-align: center;

    ${is.MaxWidth.tablet} {
        margin: 0;
    }

    ${is.MaxWidth.mobileS} {
        margin: 0 0.25rem;
    }
`,uE=K.default(kf)`
    border-radius: ${"4px"};
    height: 3rem;
    width: 5rem;
    text-align: center;
    border: 1px solid ${ts.Neutral[5]};
    background: ${ts.Neutral[8]};

    :focus,
    :active {
        border: 1px solid ${ts.Accent.Light[1]};
        box-shadow: inset 0 0 5px 1px ${ts.Shadow.Accent};
    }

    :focus::placeholder {
        color: transparent;
    }

    ${is.MaxWidth.mobileS} {
        width: 100%;
    }
`,fE=K.default(tE)`
    min-width: 5rem;
    flex: 1;
`,hE=K.default(qs.Small)`
    width: 7rem;

    ${is.MaxWidth.mobileL} {
        flex: 1;
    }

    ${is.MaxWidth.mobileS} {
        width: 100%;
    }
`;var pE,gE,mE;!function(e){e.HOUR_UP="hour-up",e.HOUR_DOWN="hour-down",e.MINUTE_UP="minute-up",e.MINUTE_DOWN="minute-down"}(pE||(pE={})),function(e){e.HOUR="hour",e.MINUTE="minute"}(gE||(gE={})),function(e){e.AM="am",e.PM="pm"}(mE||(mE={}));const bE=({id:n,value:i,show:o,format:a,onChange:s,onCancel:l})=>{const c=vu.getTimeValues(a,i),[d,u]=t.useState(c.hour),[h,p]=t.useState(c.minute),[g,m]=t.useState(c.period),b=t.useRef(),v=t.useRef(),y=qe();t.useEffect((()=>{if(o&&b.current&&b.current.focus(),o){const{hour:e,minute:t,period:n}=vu.getTimeValues(a,i);u(e),p(t),m(n)}}),[o,i,a]),t.useEffect((()=>{const e=b.current,t=v.current;return e&&e.addEventListener("keydown",x),t&&t.addEventListener("keydown",x),()=>{e&&e.removeEventListener("keydown",x),t&&t.removeEventListener("keydown",x)}}),[]);const x=e=>{["Digit0","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Tab","Backspace","Delete","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)||["Backspace","0","1","2","3","4","5","6","7","8","9"].includes(e.key)||e.preventDefault()},w=t.useCallback((e=>{switch(e.currentTarget.name){case pE.MINUTE_UP:p(vu.updateMinutes(h,"add"));break;case pE.MINUTE_DOWN:p(vu.updateMinutes(h,"minus"));break;case pE.HOUR_UP:u(vu.updateHours(d,"add"));break;case pE.HOUR_DOWN:u(vu.updateHours(d,"minus"))}}),[d,h]),$=e=>{e.target.select()},j=e=>{const t=e.target.value;switch(e.target.name){case gE.HOUR:t.length<=2&&u(t);break;case gE.MINUTE:t.length<=2&&p(t)}},S=e=>{const t=parseInt(e.target.value);if(!isNaN(t))switch(e.target.name){case gE.HOUR:{const n=t>23||t<0?c.hour:vu.convertHourTo12HourFormat(e.target.value);u(n);break}case gE.MINUTE:{const n=t>59||t<0?c.minute:e.target.value;p(dc.padValue(n));break}}},k=e=>{switch(e.target.name){case mE.AM:m(bu.AM);break;case mE.PM:m(bu.PM)}},C=e=>n?`${n}-${e}`:e,O=di({height:o?y.height+32:0});return e.jsx(nE,Object.assign({"data-testid":"animated-dropdown-wrapper",style:O},{children:e.jsxs(rE,Object.assign({ref:y.ref,"data-testid":C("timepicker-dropdown"),inert:o?void 0:""},{children:[e.jsxs(iE,{children:[e.jsxs(aE,{children:[e.jsxs(lE,{children:[e.jsx(cE,Object.assign({"aria-label":"increase hour",name:pE.HOUR_UP,tabIndex:-1,onClick:w,"data-testid":C("hour-increment-button")},{children:e.jsx(r.ChevronUpIcon,{})})),e.jsx(uE,{"aria-label":"hour",type:"number",name:gE.HOUR,id:"hour",maxLength:2,pattern:"[0-9]{2}",ref:b,value:d,onFocus:$,onChange:j,onBlur:S,min:1,max:12,placeholder:"HH","data-testid":C("hour-input")}),e.jsx(cE,Object.assign({"aria-label":"decrease hour",name:pE.HOUR_DOWN,tabIndex:-1,onClick:w,"data-testid":C("hour-decrement-button")},{children:e.jsx(f.ChevronDownIcon,{})}))]}),e.jsx(dE,{children:":"}),e.jsxs(lE,{children:[e.jsx(cE,Object.assign({"aria-label":"increase minute",name:pE.MINUTE_UP,tabIndex:-1,onClick:w,"data-testid":C("minute-increment-button")},{children:e.jsx(r.ChevronUpIcon,{})})),e.jsx(uE,{"aria-label":"minute",type:"number",name:gE.MINUTE,id:"minute",maxLength:2,pattern:"[0-9]{2}",ref:v,value:h,onChange:j,onBlur:S,onFocus:$,min:0,max:59,placeholder:"MM","data-testid":C("minute-input")}),e.jsx(cE,Object.assign({"aria-label":"decrease minute",name:pE.MINUTE_DOWN,tabIndex:-1,onClick:w,"data-testid":C("minute-decrement-button")},{children:e.jsx(f.ChevronDownIcon,{})}))]})]}),e.jsxs(sE,{children:[e.jsx(fE,Object.assign({checked:g===bu.AM,name:mE.AM,type:"radio",onChange:k,"data-testid":C("am-toggle"),"aria-label":"AM"},{children:"AM"})),e.jsx(fE,Object.assign({checked:g===bu.PM,name:mE.PM,type:"radio",onChange:k,"data-testid":C("pm-toggle"),"aria-label":"PM"},{children:"PM"}))]})]}),e.jsxs(oE,{children:[e.jsx(hE,Object.assign({"aria-label":"close selector",type:"button",styleType:"secondary",onClick:l,"data-testid":C("cancel-button")},{children:"Cancel"})),e.jsx(hE,Object.assign({"aria-label":"confirm selection",type:"button",onClick:()=>{let e;e="24hr"===a?vu.convertTo24HourFormat({hour:d,minute:h,period:g}):`${d}:${h}${g}`,s(e)},disabled:""===d||""===h,"data-testid":C("confirm-button")},{children:"Done"}))]})]}))}))},vE=n=>{var{id:r,disabled:i=!1,error:o,value:a,format:s="24hr",readOnly:l,onChange:c,onFocus:d,onBlur:u}=n,f=X(n,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur"]);const[h,p]=t.useState(!1),[g,m]=t.useState(!1),[b,v]=t.useState(""),[y,x]=t.useState(""),w=t.useRef();t.useEffect((()=>{a&&(v(a.start),x(a.end))}),[a]),fc("mousedown",(function(e){i||k(e)}),"document"),fc("keyup",(function(e){if("Tab"===e.code)k(e)}),"document");const $=()=>{S()},j=()=>{h||g||d&&d()},S=()=>{p(!1),m(!1),u&&u()},k=e=>{w&&!w.current.contains(e.target)&&(g||h)&&S()};return e.jsx(_I,Object.assign({ref:w,id:r},f,{children:e.jsxs(MI,Object.assign({$disabled:i,$error:o,$readOnly:l},{children:[e.jsxs(Kf,Object.assign({error:o,currentActive:h?"start":g?"end":"none"},{children:[e.jsx(RI,{onFocus:()=>{i||l||h||(m(!1),p(!0),j())},readOnly:!0,placeholder:"From",value:vu.formatDisplayValue(b,s),disabled:i,"data-testid":f["data-testid"]?`${f["data-testid"]}-timepicker-selector`:"timepicker-selector"}),e.jsx(RI,{onFocus:()=>{i||l||g||(p(!1),m(!0),j())},readOnly:!0,placeholder:"To",value:vu.formatDisplayValue(y,s),disabled:i,"data-testid":f["data-testid"]?`${f["data-testid"]}-timepicker-selector`:"timepicker-selector"})]})),e.jsx(bE,{id:r,show:h,value:b,format:s,onCancel:$,onChange:e=>{p(!1),m(!0),v(e);c&&c({start:e,end:y})}}),e.jsx(bE,{id:r,show:g,value:y,format:s,onCancel:$,onChange:e=>{m(!1),x(e);c&&c({start:b,end:e}),""==b?p(!0):u&&u()}})]}))}))},yE=K.default(Sf)`
    height: 3rem;
    gap: 0.5rem;
    padding-right: 2.75rem;
`,xE=n=>{var{id:r,disabled:i=!1,error:o,value:a,format:s="12hr",readOnly:l,onChange:c,onFocus:d,onBlur:u,alignment:f="left",dropdownZIndex:h,startLimit:p,endLimit:g,interval:m=15}=n,b=X(n,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur","alignment","dropdownZIndex","startLimit","endLimit","interval"]);const[v]=t.useState((()=>cc.generate())),[y,x]=t.useState(null),[w,$]=t.useState(!1),[j,S]=t.useState(""),[k,C]=t.useState(""),[O,T]=t.useState(""),[D,I]=t.useState(""),[E,_]=t.useState(""),M=t.useRef(),R=t.useRef(),A=t.useRef(),N=t.useMemo((()=>vu.generateTimings(m,s,p,g)),[m,s,p,g]),B=t.useMemo((()=>{if(""===D)return N;const e=vu.findClosestFlooredTime(D,N);return N.slice(N.indexOf(e))}),[N,D]),F=t.useCallback((e=>vu.parseInput(e,s)),[s]);t.useEffect((()=>{var e,t;if(a){const n=null!==(e=F(a.start))&&void 0!==e?e:"",r=null!==(t=F(a.end))&&void 0!==t?t:"";C(n),T(r),I(n),_(r)}}),[a,F]),t.useEffect((()=>{if(o)return void $(!1);const e=F(k),t=F(O);if(void 0===e)S("Invalid start time");else if(void 0===t)S("Invalid end time");else{if(!(""!==e&&""!==t&&vu.to24Hour(t)<vu.to24Hour(e)))return S(""),void(document.activeElement!==R.current&&document.activeElement!==A.current||$(!0));S("End time must be after start time")}$(!1)}),[k,O,F,o]);const L=e=>{i||l||(y||w||null==d||d(),x(e),$(!0))},P=e=>{i||l||(x(e),$(!0),("start"===e?R:A).current.select())};function z(e){switch(e.code){case"Enter":"start"===y?H(k):"end"===y&&(w&&W(O),A.current.blur());break;case"Tab":V(k,O,{})}}const H=e=>{V(e,O,{goToNextInput:!0})},W=e=>{V(k,e,{triggerOnBlur:!0})},V=(e,t,{goToNextInput:n,triggerOnBlur:r})=>{var i,o;const a=null!==(i=F(e))&&void 0!==i?i:D,s=null!==(o=F(t))&&void 0!==o?o:E;C(a),T(s);a===D&&s===E||null==c||c({start:a,end:s}),n&&void 0!==F(e)&&(x("end"),A.current.select()),r&&(x(null),$(!1),null==u||u()),I(a),_(s)},Y=e=>{e.stopPropagation(),C(""),T(""),I(""),_("");null==c||c({start:"",end:""}),x(null),$(!1)},U=e=>{M.current&&!M.current.contains(e.relatedTarget)&&y&&!w&&V(k,O,{triggerOnBlur:!0})},K=()=>{if(!l&&!i&&((null==k?void 0:k.length)>0||(null==O?void 0:O.length)>0))return e.jsx(uI,Object.assign({onClick:Y,type:"button","aria-label":"Clear"},{children:e.jsx(Hy,{"aria-hidden":!0})}))};return e.jsxs(_I,Object.assign({id:r},b,{children:[e.jsx(eT,{children:e.jsx(vf,{enabled:!l&&!i,isOpen:w,renderElement:()=>e.jsxs(yE,Object.assign({ref:M,$disabled:i,$error:o||!!j,$readOnly:l,onBlur:U},{children:[e.jsxs(Kf,Object.assign({error:o||!!j,currentActive:null===y?"none":y},{children:[e.jsx(RI,{ref:R,onFocus:()=>L("start"),placeholder:"start"===y?"hh:mm":"From",onChange:e=>C(e.target.value),value:k,disabled:i,readOnly:l,"data-testid":b["data-testid"]?`${b["data-testid"]}-timepicker-selector`:"timepicker-selector",onClick:()=>P("start"),onKeyDown:z,autoComplete:"off","aria-label":"Start time input",type:"text",role:"combobox","aria-expanded":w,"aria-controls":v,"aria-autocomplete":"list"}),e.jsx(RI,{ref:A,onFocus:()=>L("end"),placeholder:"end"===y?"hh:mm":"To",onChange:e=>T(e.target.value),value:O,disabled:i,readOnly:l,"data-testid":b["data-testid"]?`${b["data-testid"]}-timepicker-selector`:"timepicker-selector",onClick:()=>P("end"),onKeyDown:z,autoComplete:"off","aria-label":"End time input",type:"text",role:"combobox","aria-expanded":w,"aria-controls":v,"aria-autocomplete":"list"})]})),K()]})),renderDropdown:()=>{if(w)return"start"===y?e.jsx(ST,{listItems:N,onSelectItem:H,selectedItems:[k],disableItemFocus:!0,topScrollItem:vu.findClosestFlooredTime(F(k),N),listboxId:v}):e.jsx(ST,{listItems:B,onSelectItem:W,selectedItems:[O],disableItemFocus:!0,topScrollItem:vu.findClosestFlooredTime(F(O),B),listboxId:v})},onClose:e=>{"outside-press"===e?(x(null),$(!1),null==u||u()):V(k,O,{triggerOnBlur:!0})},onDismiss:()=>{("start"===y?R:A).current.focus(),$(!1)},offset:8,alignment:f,fitAvailableHeight:!0,customZIndex:h})}),!o&&j&&e.jsx(ny,Object.assign({id:r?`${r}-error-message`:"error-message",weight:"semibold",tabIndex:0,"data-testid":r?`${r}-error-message`:"error-message"},{children:j}))]}))},wE=t=>{var{variant:n="dial"}=t,r=X(t,["variant"]);return"dial"===n?e.jsx(vE,Object.assign({},r)):"combobox"===n?e.jsx(xE,Object.assign({},r)):void 0};K.default.div`
    position: relative;
`;const $E=K.default(kf)`
    height: calc(3rem - 2px); // exclude top and bottom borders
`,jE=n=>{var{id:r,disabled:i=!1,readOnly:o=!1,error:a,value:s,placeholder:l,format:c="24hr",onChange:d,onFocus:u,onBlur:f}=n,h=X(n,["id","disabled","readOnly","error","value","placeholder","format","onChange","onFocus","onBlur"]);const[p,g]=t.useState(!1),m=t.useRef();fc("mousedown",(function(e){i||o||y(e)}),"document"),fc("keyup",(function(e){if("Tab"===e.code)y(e)}),"document");const b=()=>{i||o||p||(g(!0),u&&u())};const v=()=>{g(!1),f&&f()},y=e=>{m&&!m.current.contains(e.target)&&p&&v()},x=t.useCallback((()=>"12hr"===c?"HH:MMam":"HH:MM"),[c,l]);return e.jsxs(Sf,Object.assign({ref:m,id:r,$readOnly:o,$disabled:i,$error:a},h,{children:[e.jsx($E,{onFocus:b,focused:p,readOnly:!0,placeholder:l||x(),value:vu.formatDisplayValue(s,c),disabled:i,"data-testid":r?`${r}-timepicker-selector`:"timepicker-selector"}),e.jsx(bE,{id:r,show:p,value:s,format:c,onCancel:()=>{v()},onChange:e=>{d&&d(e),v()}})]}))},SE=K.default(qy)`
    margin-right: 0.25rem;
`,kE=K.default(Vy)`
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
`,CE=K.default(kE)`
    // Cheat to balance the placeholder look while ensuring enough width
    margin-left: 0.5rem;
    width: 6rem;

    input {
        text-align: left;
    }
`,OE=K.default(exports.Text.Body)`
    margin: 0 0.25rem;
    ${e=>{if(e.$inactive)return i.css`
                color: ${ts.Neutral[3]};
            `}}
`,TE=K.default.div`
    display: flex;
`,DE=K.default(exports.Text.Body)`
    ${e=>{if(e.$inactive)return i.css`
                color: ${ts.Neutral[3]};
            `}}
`,IE=n=>{var{disabled:r,error:i,value:o,onChange:a,onBlur:s,onChangeRaw:l,onBlurRaw:c,readOnly:d,placeholder:u="00-8888",autoComplete:f}=n,h=X(n,["disabled","error","value","onChange","onBlur","onChangeRaw","onBlurRaw","readOnly","placeholder","autoComplete"]);const[p,g]=t.useState(""),[m,b]=t.useState(""),[v,y]=t.useState("none"),x=t.useRef(null),w=t.useRef(null),$=t.useRef(null),j=t.useRef(p),S=t.useRef(m),k=t.useRef(v),C=e=>e.toLocaleUpperCase().replace(/[^0-9A-Za-z]/g,""),O=gc({ref:w,formatter:C}),T=gc({ref:$,formatter:C}),D=e=>{j.current=e,g(e)},I=e=>{S.current=e,b(e)},E=e=>{k.current=e,y(e)};t.useEffect((()=>{"floor"===v&&3===p.length&&$.current&&$.current.focus()}),[p]),t.useEffect((()=>{B(o)}),[o]);const _=e=>{E(e.target.name),e.target.select()},M=e=>{const t=e.target.name,n=e.target.value,r=N(n);"floor"===t?(D(r),r!==p&&F(r,t)):(I(r),r!==m&&F(r,t))},R=e=>{const t=e.target.name;if("floor"===t){const{nextValue:e,updateCaretPosition:n}=O();n(),D(e),F(e,t)}else{const{nextValue:e,updateCaretPosition:n}=T();n(),I(e),F(e,t)}},A=e=>{"Backspace"!==e.code&&"Backspace"!==e.key||"unit"===v&&0===m.length&&w.current.focus()},N=e=>/^[0-9]$/.test(e)?dc.padValue(e,!0):e.toLocaleUpperCase(),B=e=>{if(e!==EE)if(void 0===e||0===e.length)D(""),I("");else{const t=e.split("-");if(2===t.length){const e=t[0],n=t[1];D("floor"===v?e:N(e)),I("unit"===v?n:N(n))}}},F=(e,t)=>{if(!a&&!l)return;const n={floor:j.current,unit:S.current};if(n[t]=e,a){const e=P(n);a(e)}l&&l([n.floor,n.unit])},L=()=>{if(!s&&!c)return;const e={floor:N(j.current),unit:N(S.current)};if(s){const t=P(e);s(t)}c&&c([e.floor,e.unit])},P=e=>{const t=[e.floor,e.unit];return e.floor.length>0&&e.unit.length>0?t.join("-"):t.every((e=>""===e))?"":EE},z=e=>e.split("-");return e.jsxs(Sf,Object.assign({},h,{ref:x,onClick:()=>{"none"===v&&w.current&&w.current.focus()},$disabled:r,$error:i,$readOnly:d,tabIndex:-1,onBlur:e=>{x.current&&x.current.contains(e.relatedTarget)||"none"!==k.current&&(E("none"),L())}},{children:[e.jsx(SE,Object.assign({"data-testid":"addon",disabled:r,$readOnly:d},{children:"#"})),d&&o?(()=>{const t=o.split("-");return e.jsxs(TE,{children:[e.jsx(DE,{children:t[0]}),e.jsx(OE,{children:"-"}),e.jsx(DE,{children:t[1]})]})})():e.jsxs(e.Fragment,{children:[e.jsx(kE,{name:"floor",maxLength:3,value:p,ref:w,onFocus:_,onBlur:M,onChange:R,disabled:r,readOnly:d,type:"text",pattern:"[0-9A-Z]{2,3}","data-testid":"floor-input","aria-label":"floor-input",placeholder:"floor"!==v||d?z(u)[0]:"",autoComplete:f}),e.jsx(OE,Object.assign({$inactive:0===p.length},{children:"-"})),e.jsx(CE,{name:"unit",maxLength:5,value:m,ref:$,onFocus:_,onBlur:M,onChange:R,onKeyDown:A,disabled:r,readOnly:d,type:"text",pattern:"[0-9A-Z]{2,5}","data-testid":"unit-input","aria-label":"unit-input",placeholder:"unit"!==v||d?z(u)[1]:"",autoComplete:f})]})]}))},EE="Invalid unit number",_E={DateInput:t=>{var{label:n,errorMessage:r,id:i="form-date-input","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e.jsx(gy,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":o,disabled:u.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e.jsx(Bf,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!r},u))}))},DateRangeInput:t=>{var{label:n,errorMessage:r,id:i="form-date-range-input","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e.jsx(gy,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":o,disabled:u.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e.jsx(Qf,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!r},u))}))},ESignature:t=>{const{label:n,errorMessage:r,id:i="form-field","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e.jsx(gy,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e.jsx(Yh,Object.assign({id:`${i}-base`,"data-testid":a||i},u))}))},HistogramSlider:t=>{var{label:n,errorMessage:r,id:i="form-histogram-slider","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e.jsx(gy,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":o,disabled:u.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e.jsx(Ly,Object.assign({id:`${i}-base`,"data-testid":a||i},u))}))},Input:Yy,InputGroup:Uj,MaskedInput:aS,Label:iy,MultiSelect:t=>{var{label:n,errorMessage:r,id:i="form-multi-select","data-error-testid":o,"data-testid":a,enableSearch:s=!1,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,variant:f}=t,h=X(t,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols","variant"]);return e.jsx(gy,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":o,disabled:h.disabled,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u},{children:e.jsx(zD,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!r,enableSearch:s,variant:f},h))}))},NestedSelect:t=>{var{label:n,errorMessage:r,id:i="form-nested-select","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e.jsx(gy,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":o,disabled:u.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e.jsx(YD,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!r},u))}))},NestedMultiSelect:t=>{var{label:n,errorMessage:r,id:i="form-nested-multi-select","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e.jsx(gy,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":o,disabled:u.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e.jsx(VD,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!r},u))}))},Select:t=>{var{label:n,errorMessage:r,id:i="form-select","data-error-testid":o,"data-testid":a,enableSearch:s=!1,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,variant:f}=t,h=X(t,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols","variant"]);return e.jsx(gy,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":o,disabled:h.disabled,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u},{children:e.jsx(pI,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!r,enableSearch:s,variant:f},h))}))},SelectHistogram:t=>{var{label:n,errorMessage:r,id:i="form-select-histogram","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,histogramSlider:u}=t,f=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","histogramSlider"]);return e.jsx(gy,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":o,disabled:f.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e.jsx(xI,Object.assign({histogramSlider:u,error:!!r,"data-testid":a||i,id:`${i}-base`},f))}))},Slider:t=>{var{label:n,errorMessage:r,id:i="form-slider","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e.jsx(gy,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":o,disabled:u.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e.jsx(wI,Object.assign({id:`${i}-base`,"data-testid":a||i},u))}))},RangeSlider:t=>{var{label:n,errorMessage:r,id:i="form-range-slider","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e.jsx(gy,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":o,disabled:u.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e.jsx(My,Object.assign({id:`${i}-base`,"data-testid":a||i},u))}))},RangeSelect:t=>{var{label:n,errorMessage:r,id:i="form-select","data-error-testid":o,"data-testid":a,enableSearch:s=!1,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u}=t,f=X(t,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols"]);return e.jsx(gy,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":o,disabled:f.disabled,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u},{children:e.jsx(hI,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!r,enableSearch:s},f))}))},Textarea:EI,Timepicker:t=>{var{label:n,errorMessage:r,id:i="form-timepicker","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e.jsx(gy,Object.assign({id:i,label:n,errorMessage:r,disabled:u.disabled,"data-error-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e.jsx(jE,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!r},u))}))},TimeRangePicker:t=>{var{label:n,errorMessage:r,id:i="form-timepicker","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e.jsx(gy,Object.assign({id:i,label:n,errorMessage:r,disabled:u.disabled,"data-error-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e.jsx(wE,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!r},u))}))},CustomField:t=>{var{id:n="form-custom-field","data-error-testid":r,children:i}=t,o=X(t,["id","data-error-testid","children"]);return e.jsx(gy,Object.assign({id:n,"data-error-testid":r},o,{children:i}))},UnitNumberInput:t=>{var{label:n,errorMessage:r,id:i="form-unit-number-input","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e.jsx(gy,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":o,disabled:u.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e.jsx(IE,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!r},u))}))},PhoneNumberInput:t=>{var{label:n,errorMessage:r,id:i="form-phone-number-input","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e.jsx(gy,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":o,disabled:u.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e.jsx(aI,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!r},u))}))},PredictiveTextInput:t=>{var{label:n,errorMessage:r,id:i="form-predictive-text","data-error-testid":o,"data-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e.jsx(gy,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":o,disabled:u.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e.jsx(cI,Object.assign({id:`${i}-base`,"data-testid":a||i,error:!!r},u))}))}},ME=K.default.li`
    display: flex;
    flex-direction: column;
    padding: 2rem 0;
    background: transparent;

    :not(:last-child) {
        border-bottom: 1px solid ${ts.Neutral[5]};
    }
`,RE=K.default.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: 1rem;
    width: 100%;
`,AE=K.default.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`,NE=K.default.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;

    ${is.MaxWidth.mobileL} {
        flex-direction: column;
        justify-content: flex-start;
    }
`,BE=K.default(exports.Text.BodySmall)`
    display: flex;
    flex: 1;
    margin-right: 1rem;

    ${is.MaxWidth.mobileL} {
        margin-right: 0;
        margin-bottom: 0.5rem;
    }
`,FE=K.default(exports.Text.BodySmall)``,LE=K.default.div`
    display: flex;
    ${is.MaxWidth.mobileL} {
        flex-direction: column;
    }

    ${e=>{if(e.$thumbnail)return i.css`
                margin-left: 8rem; // 6rem width + 2rem gap

                ${is.MaxWidth.mobileL} {
                    margin-left: 0;
                }
            `}}
`,PE=K.default(qs.Small)`
    width: 7.5rem;
    :not(:last-of-type) {
        margin-right: 1rem;
    }

    ${is.MaxWidth.mobileL} {
        width: 100%;
        :not(:last-of-type) {
            margin-bottom: 1rem;
        }
    }
`,zE=({thumbnailImageDataUrl:t,"data-testid":n,renderReplaceButton:r,onReplaceClick:i})=>e.jsxs(HE,Object.assign({"data-testid":n},{children:[e.jsx(WE,{"data-testid":n?`${n}-image`:void 0,src:t}),r&&e.jsx(VE,Object.assign({type:"button",onClick:e=>{i&&i()}},{children:"Replace"}))]})),HE=K.default.div`
    width: auto;
    margin-right: 2rem;
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: center;
`,WE=K.default(gp)`
    width: 6rem;
    height: 6rem;
    aspect-ratio: 1;
    border-radius: 4px;
    border: 1px solid ${ts.Neutral[5]};
    object-fit: cover;

    ${is.MaxWidth.mobileL} {
        width: 4rem;
        height: 4rem;
    }
`,VE=K.default.button`
    width: 100%;
    height: 1.625rem;
    margin-top: 0.5rem;
    border: none;
    background: transparent;
    cursor: pointer;
    ${ys.getTextStyle("BodySmall","semibold")};
    color: ${ts.Primary};
    :hover {
        color: ${ts.PrimaryDark};
    }
`,YE=({fileItem:n,fileDescriptionMaxLength:r,wrapperWidth:i,onSave:o,onCancel:a,onBlur:s})=>{const{id:l,name:c,size:d,truncateText:u=!0,thumbnailImageDataUrl:f}=n,[h,p]=t.useState(),[g,m]=t.useState(""),b=t.useRef(),v=t.useRef();t.useEffect((()=>{p(y(c))}),[i]),t.useEffect((()=>{m(n.description||"")}),[n]);const y=e=>{if(!u)return e;const t=v&&v.current?v.current.getBoundingClientRect().width:0;return dc.truncateOneLine(e,t,t/2,t/2/8,16)};return e.jsxs(ME,Object.assign({"data-testid":`${l}-edit-display`},{children:[e.jsxs(RE,{children:[f&&e.jsx(zE,{thumbnailImageDataUrl:f}),e.jsxs(AE,{children:[e.jsxs(NE,Object.assign({ref:v},{children:[e.jsx(BE,Object.assign({weight:"semibold"},{children:h})),e.jsx(FE,{children:pp.formatFileSizeDisplay(d)})]})),e.jsx(_E.Textarea,{ref:b,id:`${l}-description-textarea`,"data-testid":`${l}-textarea`,value:g,maxLength:r,onChange:e=>{m(e.target.value)},onBlur:e=>{s(e.target.value)},rows:3,label:{children:"Photo description",subtitle:"Describe this photo to users who may not be able to see the image."}})]})]}),e.jsxs(LE,Object.assign({$thumbnail:!!f},{children:[e.jsx(PE,Object.assign({"data-testid":`${l}-save-button`,type:"button",disabled:0===g.trim().length,onClick:()=>{o(b.current.value.trim())}},{children:"Save"})),e.jsx(PE,Object.assign({type:"button",styleType:"secondary","data-testid":`${l}-cancel-button`,onClick:a},{children:"Cancel"}))]}))]}))},UE=K.default.li`
    display: flex;
    align-items: center;
    width: 100%;
    border: none;

    :not(:last-child) {
        margin-bottom: 1rem;
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
`,KE=K.default(M.DragHandleIcon)`
    // Temp icon
    margin-right: 1rem;
    height: 1.5rem;
    width: 1.5rem;

    ${e=>{if(e.$disabled)return i.css`
                color: ${ts.Neutral[4]};
            `}}
`,qE=K.default.div`
    background: ${ts.Accent.Light[6]};
    border: 1px solid ${ts.Neutral[5]};
    border-radius: 4px;
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    width: 100%;

    ${is.MaxWidth.mobileL} {
        padding: 1rem;
    }

    ${e=>e.$focused?i.css`
                border-color: ${ts.Accent.Light[1]};
                box-shadow: 0 0 4px 1px ${ts.Shadow.Accent};
            `:e.$disabled?i.css`
                background: ${ts.Neutral[7]};
            `:e.$error?i.css`
                background: ${ts.Validation.Red.Background};
                border-color: ${ts.Validation.Red.Border};
            `:void 0}

    ${e=>{if(!e.$error&&(e.$loading||e.$editable))return i.css`
                ${is.MaxWidth.mobileL} {
                    flex-direction: column;
                    align-items: flex-start;
                }
            `}}
`,XE=K.default.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${is.MaxWidth.mobileL} {
        flex-direction: column;
        width: 100%;
        align-items: flex-start;
    }

    ${e=>{if(e.$hasThumbnail)return i.css`
                ${is.MaxWidth.mobileL} {
                    flex-direction: row;
                    align-items: center;
                }
            `}}
`,GE=K.default.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 100%;
`,ZE=K.default.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${is.MaxWidth.mobileL} {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }
`,QE=K.default.div`
    display: flex;
    width: 5rem;
    margin-left: 0.5rem;
    justify-content: flex-end;

    ${is.MaxWidth.mobileL} {
        ${e=>e.$hideInMobile?i.css`
                    display: none;
                    visibility: hidden;
                `:i.css`
                    width: 100%;
                    margin-left: 0;
                    margin-top: 0.5rem;
                    justify-content: flex-start;
                `}
    }
`,JE=K.default(exports.Text.BodySmall)``,e_=K.default(JE)`
    margin-top: 0.25rem;
`,t_=K.default(exports.Text.XSmall)`
    font-size: 0.875rem !important;
    color: ${ts.Validation.Red.Text};
`,n_=K.default(t_)`
    margin-top: 0.25rem;
    ${is.MaxWidth.mobileL} {
        display: none;
        visibility: hidden;
    }
`,r_=K.default(t_)`
    display: none;
    visibility: hidden;
    ${is.MaxWidth.mobileL} {
        display: block;
        visibility: visible;
        margin-top: 0.5rem;
    }
`,i_=K.default.div`
    width: 6rem;
    margin-left: 2rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    ${is.MaxWidth.mobileL} {
        width: fit-content;

        ${e=>e.$loading&&!e.$error?i.css`
                    margin-left: 0;
                    margin-top: 1rem;
                    width: 100%;
                `:e.$editable&&!e.$error?i.css`
                    margin-left: 0;
                    margin-top: 1rem;
                    align-self: flex-end;
                `:void 0}
    }
`,o_=K.default(vh)`
    min-width: unset;

    :not(:last-child) {
        margin-right: 1rem;
    }
`,a_=K.default(ss)`
    height: 2.5rem;
    width: 2.5rem;
    padding: unset;
    svg {
        height: 1.5rem;
        width: 1.5rem;
        color: ${ts.Neutral[3]};
    }
`,s_=t.memo((({fileItem:n,editable:r,sortable:i,wrapperWidth:o,disabled:a,readOnly:s,onDelete:l,onEditClick:c})=>{const{id:d,name:u,size:f,description:h,progress:p=1,errorMessage:g,thumbnailImageDataUrl:b,truncateText:v=!0}=n,[y,x]=t.useState(),{activeId:w}=t.useContext(Mp),{attributes:$,listeners:j,setNodeRef:S,transform:k,transition:C}=Av({id:d}),O=t.useRef(),T={transform:_m.Translate.toString(k),transition:C},D=Object.assign(Object.assign({style:T},$),j),I=p<1,M=pp.formatFileSizeDisplay(f),R=w?w===d?"self":"others":"none";t.useEffect((()=>{x(F(u))}),[o]);const A=()=>{l()},N=()=>{c&&c()},B=e=>{i&&e.stopPropagation()},F=e=>{if(!v)return e;const t=O&&O.current?O.current.getBoundingClientRect().width:0;return dc.truncateOneLine(e,t,t/2,t/2/8,16)},L=()=>a||!!w,P=()=>i&&!s,z=()=>e.jsxs(e.Fragment,{children:[e.jsx(JE,Object.assign({weight:h?"semibold":"regular"},{children:y})),h&&e.jsx(e_,{children:h})]});return e.jsxs(UE,Object.assign({id:d,ref:S,$sortable:P(),$disabled:L(),$focusType:R},P()?D:{},{children:[P()&&e.jsx(KE,{"data-testid":`${d}-drag-handle`,$disabled:L()}),e.jsxs(qE,Object.assign({$focused:"self"===R,$error:!!g,$loading:I,$disabled:L(),$editable:r},{children:[(()=>{let t;return t=g?e.jsxs(e.Fragment,{children:[e.jsxs(GE,Object.assign({ref:O},{children:[z(),g&&e.jsx(n_,Object.assign({weight:"semibold"},{children:g}))]})),e.jsx(QE,{children:e.jsx(JE,{children:M})}),g&&e.jsx(r_,Object.assign({weight:"semibold"},{children:g}))]}):b?e.jsxs(e.Fragment,{children:[e.jsx(zE,{thumbnailImageDataUrl:b,"data-testid":`${d}-thumbnail`}),e.jsxs(ZE,{children:[e.jsx(GE,Object.assign({ref:O},{children:z()})),e.jsx(QE,{children:e.jsx(JE,{children:M})})]})]}):e.jsxs(e.Fragment,{children:[e.jsx(GE,Object.assign({ref:O},{children:z()})),e.jsx(QE,Object.assign({$hideInMobile:I},{children:e.jsx(JE,{children:M})}))]}),e.jsx(XE,Object.assign({$hasThumbnail:!!b},{children:t}))})(),!s&&(()=>{let t;return t=g?e.jsx(a_,Object.assign({onClick:A,"data-testid":`${d}-error-delete-button`,"aria-label":`delete-${u}`},{children:e.jsx(m.CrossIcon,{"aria-hidden":!0})})):I?e.jsx(gh,{progress:p,"data-testid":`${d}-progress-bar`}):e.jsxs(e.Fragment,{children:[r&&e.jsx(o_,Object.assign({"data-testid":`${d}-edit-button`,"data-no-dnd":"true",type:"button",styleType:"light",sizeType:"small","aria-label":`edit ${u}`,disabled:L(),onClick:N,onKeyDown:B},{children:e.jsx(_.PencilIcon,{"aria-hidden":!0})}),"edit"),e.jsx(o_,Object.assign({"data-testid":`${d}-delete-button`,"data-no-dnd":"true",type:"button",styleType:"light",sizeType:"small","aria-label":`delete ${u}`,disabled:L(),onClick:A,onKeyDown:B},{children:e.jsx(E.BinIcon,{"aria-hidden":!0})}),"delete")]}),e.jsx(i_,Object.assign({$editable:r,$error:!!g,$loading:I},{children:t}))})()]}))]}))})),l_=K.default.ul`
    list-style-type: none;
    margin-bottom: ${e=>e.$readOnly?"0":"2rem"};
`,c_=K.default.li`
    border-top: 1px solid ${ts.Neutral[5]};
    border-bottom: 1px solid ${ts.Neutral[5]};

    :not(:last-child) {
        margin-bottom: 2rem;
    }

    :not(:first-child) {
        margin-top: 2rem;
    }

    ul {
        list-style-type: none;
    }
`,d_=({fileItems:n,editableFileItems:r,fileDescriptionMaxLength:i,sortable:o,disabled:a,readOnly:s,onItemUpdate:l,onItemDelete:c,onSort:d})=>{const[u,f]=t.useState({}),{setActiveId:h}=t.useContext(Mp),{width:p,ref:g}=qe(),m=t.useRef({}),b=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.useMemo((()=>[...n].filter((e=>null!=e))),[...n])}(Vm(Pv,{activationConstraint:{distance:8}}),Vm(Bb,{activationConstraint:{delay:150,tolerance:5}}),Vm(Ob,{coordinateGetter:Fv})),v=e=>{delete m.current[e]};t.useEffect((()=>{f(T(n))}),[n]);const y=e=>t=>{D(e.id,"display"),v(e.id);const n=Object.assign(Object.assign({},e),{description:t});l(n)},x=e=>t=>{m.current[e.id]=t},w=e=>()=>{e.description&&0!==e.description.length?D(e.id,"display"):c(e),v(e.id)},$=e=>()=>{D(e.id,"edit")},j=e=>()=>{c(e)},S=e=>{if(d){const{active:t,over:r}=e;if(r&&t.id!==r.id){const e=n.findIndex((e=>e.id===t.id)),i=n.findIndex((e=>e.id===r.id)),o=xv(n,e,i);d(o)}}h(void 0)},k=e=>{const{active:t}=e;h(t.id)},C=e=>r&&pp.isSupportedImageType(e.type),O=e=>!e.errorMessage&&!s&&!("number"==typeof e.progress&&e.progress<1)&&C(e)&&!e.description,T=e=>{if(!e||0===e.length)return{};const t={};for(const n of e)n.errorMessage?t[n.id]="error":u[n.id]?t[n.id]=u[n.id]:t[n.id]=O(n)?"edit":"display";return t},D=(e,t)=>{f((n=>Object.assign(Object.assign({},n),{[e]:t})))},I=()=>n&&n.length>1&&o&&Object.values(u).every((e=>"display"===e)),E=()=>{const t=((e,t)=>{if(!e||0===e.length)return[];const n=[];for(const r of e)if("edit"===t[r.id]){const e=n[n.length-1];Array.isArray(e)?e.push(r):n.push([r])}else n.push(r);return n})(n,u);return 0===t.length?null:t.map(((t,n)=>Array.isArray(t)?((t,n)=>{const r=t.map((t=>{const n=Object.assign({},t);return void 0!==m.current[t.id]&&(n.description=m.current[t.id]),e.jsx(YE,{fileItem:n,wrapperWidth:p,fileDescriptionMaxLength:i,onSave:y(t),onCancel:w(t),onBlur:x(t)},t.id)}));return e.jsx(c_,{children:e.jsx("ul",{children:r})},`editable-${n}`)})(t,n):e.jsx(s_,{fileItem:t,editable:C(t),wrapperWidth:p,sortable:I(),disabled:a,readOnly:s,onDelete:j(t),onEditClick:$(t)},t.id)))};return n&&0!==n.length?a||s||!I()?e.jsx(l_,Object.assign({$readOnly:s,ref:g},{children:E()})):e.jsx(hv,Object.assign({sensors:b,onDragEnd:S,onDragStart:k},{children:e.jsx(Tv,Object.assign({items:n,strategy:kv},{children:e.jsx(l_,Object.assign({$readOnly:s,ref:g},{children:E()}))}))})):null},u_=K.default.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
`,f_=K.default(exports.Text.H4)`
    margin-bottom: 0.5rem;
`,h_=K.default.div`
    color: ${ts.Neutral[1]};
    ${el({textSize:"Body"})}
`,p_=K.default(exports.Text.BodySmall)`
    margin-bottom: 0;
    color: ${ts.Neutral[3]};
`,g_=K.default.div`
    color: ${ts.Neutral[3]};
    ${el({textSize:"BodySmall"})}
`,m_=K.default(ll)`
    margin-bottom: 2rem;
`,b_=K.default.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    ${is.MaxWidth.mobileL} {
        align-items: flex-start;
    }
`,v_=K.default(qs.Small)`
    width: 10rem;

    ${is.MaxWidth.mobileL} {
        width: 100%;
    }
`,y_=K.default.label`
    ${ys.getTextStyle("BodySmall","semibold")}
    color: ${ts.Neutral[3]};
    margin-top: 0.5rem;
    width: 10rem;
    text-align: center;
    ${is.MaxWidth.mobileL} {
        display: none;
        visibility: hidden;
    }
`,x_=K.default(ll)`
    margin-bottom: 2rem;
`,w_=K.default.div`
    background-color: ${ts.Neutral[8]};
    border: 1px solid ${ts.Neutral[5]};
    border-radius: 0.5rem;
    overflow: hidden;
    width: 100%;
`,$_=K.default.div`
    background-color: ${ts.Neutral[7]};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`,j_=K.default.div`
    background-color: ${ts.Neutral[8]};
    height: 100%;
    width: 100%;
`,S_=K.default.div`
    flex: 1;
    width: 100%;
    overflow-y: auto;
`,k_=K.default.div`
    display: flex;
    align-items: center;

    background-color: ${ts.Neutral[8]};

    ${is.MaxWidth.tablet} {
        border-bottom: 1px solid ${ts.Neutral[5]};
    }
`,C_=K.default(exports.Text.H4)`
    flex: 1;
    margin: 1.5rem 0 1rem 1.25rem;

    ${is.MaxWidth.tablet} {
        text-align: center;
        margin: 1.5rem 0;
    }
`,O_=K.default(ss)`
    padding: 1.5rem 1.25rem;
    margin-right: auto;
    color: ${ts.Neutral[3]};

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }

    &:hover {
        color: ${ts.Neutral[2]};
    }
`,T_=K.default(qs.Small)`
    background-color: transparent;
    padding: 1.5rem 1.25rem 1rem 1.25rem;
    height: auto;

    ${is.MaxWidth.tablet} {
        padding: 1.5rem 1.25rem;
    }
`,D_=K.default(Cc.Default)`
    width: 100%;
`,I_=K.default.div`
    padding: 1.5rem 1.25rem;
    background-color: ${ts.Neutral[8]};
    border-top: 1px solid ${ts.Neutral[5]};
`,E_=K.default(qs.Default)`
    width: 100%;
`,__=Y.default.createContext({mode:"default",rootNode:null});var M_=Ii((function(e){return null==e}));const R_=K.default.div`
    background-color: ${e=>e.$collapsible?ts.Neutral[7](e):ts.Neutral[8](e)};

    ${is.MaxWidth.tablet} {
        background-color: ${ts.Neutral[7]};
    }
`,A_=K.default.div`
    display: ${e=>e.$showDivider?"block":"none"};
    height: 1px;
    background-color: ${ts.Neutral[5]};

    ${is.MaxWidth.tablet} {
        display: ${e=>e.$showMobileDivider?"block":"none"};
        margin: 0 1rem;
    }
`,N_=K.default.div`
    display: flex;
    align-items: center;

    background-color: ${ts.Neutral[8]};

    ${is.MaxWidth.tablet} {
        background-color: transparent;
    }
`,B_=K.default(ss)`
    margin: 0 0 0 auto;
`,F_=K.default(f.ChevronDownIcon)`
    height: 1.125rem;
    width: 1.125rem;
    color: ${ts.Neutral[3]};

    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform 300ms ease-in-out;

    &:hover {
        color: ${ts.Neutral[2]};
    }
`,L_=K.default(exports.Text.H4)`
    margin: 1.5rem 0 1.5rem 1.25rem;

    ${is.MaxWidth.tablet} {
        ${ys.getTextStyle("H5","semibold")}
        margin: 1.5rem 1.25rem 0 1.25rem;
    }
`,P_=K.default(Ti.div)`
    overflow: hidden;
`,z_=K.default.div`
    padding: 1rem 1.25rem;
`,H_=K.default(Ti.div)`
    ${e=>e.$minimisable&&"overflow: hidden;"}
    ${e=>e.$height&&`height: ${e.$height}px;`}
`,W_=K.default(qs.Small)`
    height: fit-content;
    padding: 0;
    margin: 1rem 0 0 0;
`,V_=n=>{var{collapsible:r=!0,initialExpanded:i=!1,expanded:o,onExpandChange:a,minimisable:s=!1,minimisedHeight:l,showDivider:c=!0,showMobileDivider:d=!0,title:u,addon:f,children:h}=n,p=X(n,["collapsible","initialExpanded","expanded","onExpandChange","minimisable","minimisedHeight","showDivider","showMobileDivider","title","addon","children"]);const{mode:g,rootNode:m}=t.useContext(__),b="mobile"===g,[v,y]=t.useState(O()),[x,w]=t.useState(s),$=!b&&r,j=qe(),S=qe(),k=di({height:v?j.height:0}),C=x?null!=l?l:Math.min(.5*S.height,216):S.height;t.useEffect((()=>{y(O())}),[r,o]);function O(){return!!b||(M_(o)?!r||i:o)}return e.jsxs(R_,Object.assign({$collapsible:$},{children:[e.jsx(A_,{$showDivider:c,$showMobileDivider:d}),(u||$)&&e.jsxs(N_,{children:[u&&e.jsxs(L_,Object.assign({weight:"semibold"},{children:[u," ",f&&("popover"===f.type?e.jsx(ey,{addon:f,rootNode:b?m:void 0}):null)]})),$&&e.jsx(B_,Object.assign({focusHighlight:!1,focusOutline:"browser",onClick:()=>{const e=!v;M_(o)&&y(e),a&&a(e)},"aria-label":v?"Collapse":"Expand"},{children:e.jsx(F_,{$expanded:v})}))]}),e.jsx(P_,Object.assign({"data-testid":"expandable-container","data-expanded":v,style:k},{children:e.jsx("div",Object.assign({ref:j.ref},{children:e.jsxs(z_,Object.assign({},p,{children:[e.jsx(H_,Object.assign({"data-testid":"minimisable-container",$height:C,$minimisable:s},{children:e.jsx("div",Object.assign({ref:S.ref},{children:e.jsx("div",Object.assign({"data-id":"content-container"},{children:"function"==typeof h?h(g,{minimised:x}):h}))}))})),s&&e.jsxs(W_,Object.assign({"data-id":"minimise-button",styleType:"link",type:"button",onClick:()=>{w(!x)}},{children:["View ",x?"more":"less"]}))]}))}))}))]}))},Y_=K.default(V_)`
    padding: 0 0 1rem;

    [data-id="content-container"] {
        position: relative; // to get the item position relative to this parent
        padding: 0.5rem 0.5rem 0;

        ${is.MaxWidth.tablet} {
            padding: 1rem 1.25rem 0.5rem;
        }
    }

    [data-id="minimise-button"] {
        margin: 0.5rem 1.25rem 0;

        ${is.MaxWidth.tablet} {
            margin: 0.5rem 1.25rem 0;
        }
    }
`,U_=K.default.div`
    display: flex;
    flex-direction: column;

    ${is.MaxWidth.tablet} {
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1rem;
    }
`,K_=K.default.label`
    display: flex;
    align-items: flex-start;
    ${e=>!e.$visible&&"display: none;"}

    position: relative;
    width: 100%;
    min-height: 1.5rem;
    padding: 0.5rem;

    cursor: pointer;
    ${ys.getTextStyle("BodySmall","regular")}
    ${e=>e.$selected&&i.css`
            color: ${ts.Primary};
        `}
`,q_=K.default.input`
    appearance: none;
`,X_=K.default(NI)`
    height: 1.5rem;
    width: 1.5rem;
    flex-shrink: 0;

    ${q_}:focus-visible + & {
        outline: 2px solid ${ts.Primary};
        outline-offset: -2px;
        border-radius: 4px;
    }
`,G_=K.default(tE)`
    ${e=>!e.$visible&&"visibility: hidden;"}
`,Z_=K.default(qs.Small)`
    height: fit-content;
    padding: 0;
    margin: 1rem 0 0.5rem 0.75rem;

    ${is.MaxWidth.tablet} {
        margin: 0 0 1rem 0;
    }
`,Q_=K.default.div`
    background-color: ${ts.Neutral[8]};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`,J_=Object.assign((n=>{var{toggleFilterButtonLabel:r="Filters",toggleFilterButtonStyle:i="light",headerTitle:o="Filters",clearButtonDisabled:a=!1,onClear:s,onDismiss:l,onDone:c,children:d}=n,f=X(n,["toggleFilterButtonLabel","toggleFilterButtonStyle","headerTitle","clearButtonDisabled","onClear","onDismiss","onDone","children"]);const[h,p]=t.useState(!1),g=t.useRef(null),m=t.useRef(null),b=Tl.useMediaQuery({maxWidth:ns.tablet});t.useEffect((()=>{b||y()}),[b]);const v=()=>{p(!0)},y=()=>{p(!1),l&&l()},x=()=>{p(!1),c&&c()},w=()=>{s&&s()},$=e=>"function"==typeof d?d(e):d,j=t=>e.jsxs(k_,{children:["mobile"===t&&e.jsx(O_,Object.assign({onClick:y,focusOutline:"browser",focusHighlight:!1,"aria-label":"Dismiss"},{children:e.jsx(u.CrossIcon,{})})),e.jsx(C_,Object.assign({weight:"semibold"},{children:o})),e.jsx(T_,Object.assign({styleType:"link",type:"button",onClick:w,disabled:a},{children:"Clear"}))]});return e.jsx("div",Object.assign({},f,{children:b?e.jsx(__.Provider,Object.assign({value:{mode:"mobile",rootNode:g}},{children:e.jsxs(e.Fragment,{children:[e.jsx(D_,Object.assign({"data-testid":"filter-show-button",styleType:i,onClick:v,type:"button",icon:e.jsx(u.FilterIcon,{})},{children:r})),e.jsx(sh,Object.assign({show:h,disableTransition:!0},{children:e.jsx(j_,Object.assign({"data-id":"filter-mobile","data-testid":"filter-mobile"},{children:e.jsxs($_,Object.assign({ref:g},{children:[j("mobile"),e.jsx(S_,{children:$("mobile")}),e.jsx(I_,{children:e.jsx(E_,Object.assign({onClick:x,type:"button"},{children:"Done"}))})]}))}))}))]})})):e.jsx(__.Provider,Object.assign({value:{mode:"default",rootNode:m}},{children:e.jsxs(w_,Object.assign({"data-id":"filter-desktop","data-testid":"filter-desktop",ref:m},{children:[j("default"),$("default")]}))}))}))}),{Item:V_,Page:({onDismiss:t,onDone:n,children:r})=>e.jsxs(Q_,{children:[e.jsx(O_,Object.assign({onClick:t,focusOutline:"browser",focusHighlight:!1,"aria-label":"Dismiss"},{children:e.jsx(p.ChevronLeftIcon,{})})),e.jsx(S_,{children:r}),e.jsx(I_,{children:e.jsx(E_,Object.assign({onClick:n,type:"button"},{children:"Done"}))})]}),Checkbox:n=>{var{selectedOptions:r,options:i,onSelect:o,labelExtractor:a,valueExtractor:s,useToggleContentWidth:l}=n,c=X(n,["selectedOptions","options","onSelect","labelExtractor","valueExtractor","useToggleContentWidth"]);const{mode:d}=t.useContext(__),[u,f]=t.useState(r||[]),[h,p]=t.useState(),[g,m]=t.useState(i.length),b=t.useRef(),v=t.useRef(),y=e=>()=>{const t=[...u],n=u.findIndex((t=>$(t)===$(e)));n>=0?t.splice(n,1):t.push(e),f(t),null==o||o(t)},x=()=>{const e=u.length?[]:i;f(e),null==o||o(e)},w=e=>{var t;return a?a(e):null!==(t=e.label)&&void 0!==t?t:e.toString()},$=e=>{var t;return s?s(e):null!==(t=e.value)&&void 0!==t?t:e.toString()},j=t.useCallback((()=>{if(!b.current)return void p(void 0);const e=Array.from(b.current.children);let t=0,n=0,r=-1;for(let i=0;i<e.length;i++){const o=e[i].offsetTop;if(o>r&&(n++,r=o,n>2))break;t=i}m(t),p(n>2?r-8:void 0)}),[]);t.useEffect((()=>{r!==u&&f(r||[])}),[r]),t.useEffect((()=>{"default"===d?(()=>{const e=v.current?v.current.offsetTop+v.current.clientHeight:void 0;p(e)})():j()}),[i]),qe({handleWidth:"mobile"===d,handleHeight:!1,skipOnMount:!0,refreshMode:"throttle",targetRef:b,onResize:j});return e.jsx(Y_,Object.assign({minimisable:i.length>5,minimisedHeight:h},c,{children:(t,{minimised:n})=>e.jsxs(e.Fragment,{children:[i.length<3?null:e.jsx(Z_,Object.assign({styleType:"link",type:"button",onClick:x},{children:u.length?"Clear all":"Select all"})),e.jsx(U_,Object.assign({role:"group","aria-label":c.title,ref:b},{children:i.map(((r,i)=>"default"===t?((t,n,r)=>{const i=w(t),o=$(t),a=!!u.find((e=>$(e)===o));return e.jsxs(K_,Object.assign({$visible:!r||n<5,$selected:a,ref:4===n?v:void 0},{children:[e.jsx(q_,{type:"checkbox",checked:a,onChange:y(t)}),e.jsx(X_,{type:"checkbox",active:a}),i]}),o)})(r,i,n):((t,n,r)=>{const i=w(t),o=$(t),a=!!u.find((e=>$(e)===o));return e.jsx(G_,Object.assign({type:"checkbox",checked:a,$visible:!r||h&&n<=g,onChange:y(t),useContentWidth:l},{children:i}),o)})(r,i,n)))}))]})}))}}),eM=K.default.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    ${is.MaxWidth.tablet} {
        justify-content: flex-start;
        padding: 0;
    }
`,tM=K.default(exports.Text.H5).attrs({as:"p"})`
    margin-bottom: 1rem;
`,nM=K.default.div`
    display: flex;
    align-items: flex-start;
`,rM=K.default.a`
    &:not(:last-child) {
        margin-right: 2rem;
    }

    img {
        width: auto;
        height: 3rem;
        object-fit: contain;
    }

    ${is.MaxWidth.mobileL} {
        &:not(:last-child) {
            margin-right: 1rem;
        }

        img {
            width: auto;
            height: auto;
            object-fit: contain;
        }
    }
`,iM=()=>e.jsxs(eM,Object.assign({"data-testid":"download-app-section"},{children:[e.jsx(tM,Object.assign({weight:"semibold"},{children:"Download the app"})),e.jsxs(nM,{children:[e.jsx(rM,Object.assign({href:"https://apps.apple.com/sg/app/moments-of-life/id1383218758",target:"_blank",rel:"noopener noreferrer",id:"footer-download-app-apple"},{children:e.jsx("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/apple-app-store.png",alt:"apple-app-store"})})),e.jsx(rM,Object.assign({href:"https://play.google.com/store/apps/details?id=sg.gov.app.mol&hl=en_SG",target:"_blank",rel:"noopener noreferrer",id:"footer-download-app-android"},{children:e.jsx("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/google-play-store.png",alt:"google-play-store"})}))]})]})),oM={privacy:{href:"https://www.life.gov.sg/privacy-statement",target:"_blank",rel:"noopener"},termsOfUse:{href:"https://www.life.gov.sg/terms-of-use",target:"_blank",rel:"noopener"},reportVulnerability:{href:"https://tech.gov.sg/report_vulnerability",target:"_blank",rel:"noopener",external:!0}},aM={privacy:{href:"https://assets.life.gov.sg/bookingsg/BSG_Privacy_Policy.pdf",target:"_blank",rel:"noopener"},termsOfUse:{href:"https://assets.life.gov.sg/bookingsg/BSG_Terms_of_Use.pdf",target:"_blank",rel:"noopener"},reportVulnerability:{href:"https://tech.gov.sg/report_vulnerability",target:"_blank",rel:"noopener",external:!0}},sM={privacy:{href:"https://mylegacy.life.gov.sg/privacy-statement",target:"_blank",rel:"noopener"},termsOfUse:{href:"https://mylegacy.life.gov.sg/terms-of-use",target:"_blank",rel:"noopener"},reportVulnerability:{href:"https://tech.gov.sg/report_vulnerability",target:"_blank",rel:"noopener",external:!0}};var lM;!function(e){e.getCopyrightInfo=(e=new Date,n)=>{const r=t(n);return`${`${(new Date).getFullYear()} ${r}`} Last Updated ${Wl(e).format("D MMMM YYYY")}`};const t=e=>{switch(e){case"bookingsg":return"BookingSG, Government of Singapore.";case"mylegacy":return"MyLegacy@LifeSG, Government of Singapore.";case"ccube":return"Citizen Collective Common, Government of Singapore.";default:return"LifeSG, Government of Singapore."}};e.getFooterLogo=e=>{switch(e){case"bookingsg":return"https://home.booking.gov.sg/images/bookingsg/footer.svg";case"mylegacy":return"https://mylegacy.life.gov.sg/images/site-logo.png";case"ccube":return"https://assets.life.gov.sg/ccube/logo-ccube.svg";default:return"https://assets.life.gov.sg/react-design-system/img/logo/lifesg-primary-logo.svg"}},e.getDisclaimerLinks=(e,t)=>{const n=(e=>{switch(e){case"bookingsg":return aM;case"mylegacy":return sM;default:return oM}})(e);return{privacy:Object.assign(Object.assign(Object.assign({},n.privacy),t&&t.privacy?t.privacy:{}),{children:"Privacy Statement"}),termsOfUse:Object.assign(Object.assign(Object.assign({},n.termsOfUse),t&&t.termsOfUse?t.termsOfUse:{}),{children:"Terms of Use"}),reportVulnerability:Object.assign(Object.assign(Object.assign({},n.reportVulnerability),t&&t.reportVulnerability?t.reportVulnerability:{}),{children:"Report Vulnerability"})}}}(lM||(lM={}));const cM=K.default.footer`
    background: ${ts.Neutral[7]};
`,dM=K.default(exports.Text.Hyperlink.Small)`
    color: ${ts.Neutral[1]};
`,uM=K.default(uy.Content)`
    padding: 4rem 0;
    border-bottom: 1px solid ${ts.Neutral[5]};

    ${is.MaxWidth.tablet} {
        padding: 2rem 0;
    }
`,fM=K.default.div`
    grid-column: 1 / span 2;

    img {
        max-height: 4rem;
        max-width: 100%;
        object-fit: contain;
    }

    ${is.MaxWidth.tablet} {
        grid-column: 1 / span 8;
        margin-bottom: 2rem;
    }

    ${is.MaxWidth.mobileL} {
        grid-column: 1 / span 4;
        margin-bottom: 2rem;
    }
`,hM=K.default.ul`
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

    ${is.MaxWidth.tablet} {
        // first col
        grid-column: 1 / span 4;

        :nth-of-type(2) {
            // 2nd col
            grid-column: 5 / span 4;
        }
    }

    ${is.MaxWidth.mobileL} {
        // first col
        grid-column: 1 / span 2;

        :nth-of-type(2) {
            // 2nd col
            grid-column: 3 / span 2;
        }
    }
`,pM=K.default.div`
    grid-column: 9 / span 4;

    ${is.MaxWidth.tablet} {
        grid-column: 1 / span 8;
        margin-top: 2rem;
    }

    ${is.MaxWidth.mobileL} {
        grid-column: 1 / span 4;
    }
`,gM=K.default.div`
    display: none;

    ${is.MaxWidth.tablet} {
        display: block;
        height: 1px;
        background: ${ts.Neutral[6]};
    }
`,mM=K.default(uy.Content)`
    padding: 1.375rem 0;

    ${is.MaxWidth.tablet} {
        border-top: none;
        flex-direction: column;
        padding: 1rem 0;
    }
`,bM=K.default.div`
    grid-column: 1 / span 6;
    display: flex;

    &:not(:last-child) {
        margin-right: 1rem;
    }

    ${is.MaxWidth.tablet} {
        grid-column: 1 / span 8;
        flex-direction: column;
        &:not(:last-child) {
            margin-right: 0;
        }
    }

    ${is.MaxWidth.mobileL} {
        grid-column: 1 / span 4;
    }
`,vM=K.default(bM)`
    grid-column: 7 / span 6;
    justify-content: flex-end;

    ${is.MaxWidth.tablet} {
        margin-top: 1rem;
        justify-content: flex-start;
        grid-column: 1 / span 8;
    }

    ${is.MaxWidth.mobileL} {
        grid-column: 1 / span 4;
    }
`,yM=K.default(exports.Text.Hyperlink.Small)`
    ${ys.getTextStyle("XSmall","regular")}
    color: ${ts.Neutral[1]};
    &:not(:last-child) {
        margin-right: 1.5rem;
    }

    svg {
        color: ${ts.Neutral[1]};
        vertical-align: sub;
    }

    &:hover {
        color: ${ts.Neutral[3]};
        svg {
            color: ${ts.Neutral[3]};
        }
    }

    ${is.MaxWidth.tablet} {
        margin-bottom: 1rem;
        &:not(:last-child) {
            margin-right: 0;
        }
    }

    ${is.MaxWidth.tablet} {
        margin-bottom: 0.625rem;
    }
`;var xM=function(e,t){return Number(e.toFixed(t))},wM=function(e,t,n){n&&"function"==typeof n&&n(e,t)},$M={easeOut:function(e){return-Math.cos(e*Math.PI)/2+.5},linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:(4-2*e)*e-1},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}},jM=function(e){"number"==typeof e&&cancelAnimationFrame(e)},SM=function(e){e.mounted&&(jM(e.animation),e.animate=!1,e.animation=null,e.velocity=null)};function kM(e,t,n,r){if(e.mounted){var i=(new Date).getTime();SM(e),e.animation=function(){if(!e.mounted)return jM(e.animation);var o=(new Date).getTime()-i,a=o/n,s=(0,$M[t])(a);o>=n?(r(1),e.animation=null):e.animation&&(r(s),requestAnimationFrame(e.animation))},requestAnimationFrame(e.animation)}}function CM(e,t,n,r){var i=function(e){var t=e.scale,n=e.positionX,r=e.positionY;return!(Number.isNaN(t)||Number.isNaN(n)||Number.isNaN(r))}(t);if(e.mounted&&i){var o=e.setTransformState,a=e.transformState,s=a.scale,l=a.positionX,c=a.positionY,d=t.scale-s,u=t.positionX-l,f=t.positionY-c;0===n?o(t.scale,t.positionX,t.positionY):kM(e,r,n,(function(e){o(s+d*e,l+u*e,c+f*e)}))}}var OM=function(e,t){var n=e.wrapperComponent,r=e.contentComponent,i=e.setup.centerZoomedOut;if(!n||!r)throw new Error("Components are not mounted");var o=function(e,t,n){var r=e.offsetWidth,i=e.offsetHeight,o=t.offsetWidth*n,a=t.offsetHeight*n;return{wrapperWidth:r,wrapperHeight:i,newContentWidth:o,newDiffWidth:r-o,newContentHeight:a,newDiffHeight:i-a}}(n,r,t),a=o.wrapperWidth,s=o.wrapperHeight,l=function(e,t,n,r,i,o,a){var s=e>t?n*(a?1:.5):0,l=r>i?o*(a?1:.5):0;return{minPositionX:e-t-s,maxPositionX:s,minPositionY:r-i-l,maxPositionY:l}}(a,o.newContentWidth,o.newDiffWidth,s,o.newContentHeight,o.newDiffHeight,Boolean(i));return l},TM=function(e,t,n,r){return xM(r?e<t?t:e>n?n:e:e,2)},DM=function(e,t){var n=OM(e,t);return e.bounds=n,n};function IM(e,t,n,r,i,o,a){var s=n.minPositionX,l=n.minPositionY,c=n.maxPositionX,d=n.maxPositionY,u=0,f=0;return a&&(u=i,f=o),{x:TM(e,s-u,c+u,r),y:TM(t,l-f,d+f,r)}}function EM(e,t,n,r,i,o){var a=e.transformState,s=a.scale,l=a.positionX,c=a.positionY,d=r-s;return"number"!=typeof t||"number"!=typeof n?(console.error("Mouse X and Y position were not provided!"),{x:l,y:c}):IM(l-t*d,c-n*d,i,o,0,0,null)}function _M(e,t,n,r,i){var o=t-(i?r:0);return!Number.isNaN(n)&&e>=n?n:!Number.isNaN(t)&&e<=o?o:e}var MM=function(e,t){var n=e.setup.panning.excluded,r=e.isInitialized,i=e.wrapperComponent,o=t.target,a="shadowRoot"in o&&"composedPath"in t?t.composedPath().some((function(e){return e instanceof Element&&(null==i?void 0:i.contains(e))})):null==i?void 0:i.contains(o);return!!(r&&o&&a)&&!hR(o,n)},RM=function(e){var t=e.isInitialized,n=e.isPanning,r=e.setup.panning.disabled;return!(!t||!n||r)};function AM(e,t,n,r,i){var o=e.setup.limitToBounds,a=e.wrapperComponent,s=e.bounds,l=e.transformState,c=l.scale,d=l.positionX,u=l.positionY;if(null!==a&&null!==s&&(t!==d||n!==u)){var f=IM(t,n,s,o,r,i,a),h=f.x,p=f.y;e.setTransformState(c,h,p)}}var NM=function(e,t){var n=e.setup,r=e.transformState.scale,i=n.minScale,o=n.disablePadding;return t>0&&r>=i&&!o?t:0},BM=function(e){var t=e.mounted,n=e.setup,r=n.disabled,i=n.velocityAnimation,o=e.transformState.scale;return!(i.disabled&&!(o>1)&&r&&!t)},FM=function(e){var t=e.mounted,n=e.velocity,r=e.bounds,i=e.setup,o=i.disabled,a=i.velocityAnimation,s=e.transformState.scale;return!(a.disabled&&!(s>1)&&o&&!t)&&!(!n||!r)};function LM(e,t,n,r,i,o,a,s,l,c){if(i){var d;if(t>a&&n>a)return(d=a+(e-a)*c)>l?l:d<a?a:d;if(t<o&&n<o)return(d=o+(e-o)*c)<s?s:d>o?o:d}return r?t:TM(e,o,a,i)}function PM(e,t){if(BM(e)){var n=e.lastMousePosition,r=e.velocityTime,i=e.setup,o=e.wrapperComponent,a=i.velocityAnimation.equalToMove,s=Date.now();if(n&&r&&o){var l=function(e,t){return t?Math.min(1,e.offsetWidth/window.innerWidth):1}(o,a),c=t.x-n.x,d=t.y-n.y,u=c/l,f=d/l,h=s-r,p=c*c+d*d,g=Math.sqrt(p)/h;e.velocity={velocityX:u,velocityY:f,total:g}}e.lastMousePosition=t,e.velocityTime=s}}function zM(e,t){var n=e.transformState.scale;SM(e),DM(e,n),void 0!==window.TouchEvent&&t instanceof TouchEvent?function(e,t){var n=t.touches,r=e.transformState,i=r.positionX,o=r.positionY;if(e.isPanning=!0,1===n.length){var a=n[0].clientX,s=n[0].clientY;e.startCoords={x:a-i,y:s-o}}}(e,t):function(e,t){var n=e.transformState,r=n.positionX,i=n.positionY;e.isPanning=!0;var o=t.clientX,a=t.clientY;e.startCoords={x:o-r,y:a-i}}(e,t)}function HM(e){var t=e.transformState.scale,n=e.setup,r=n.minScale,i=n.alignmentAnimation,o=i.disabled,a=i.sizeX,s=i.sizeY,l=i.animationTime,c=i.animationType;if(!(o||t<r||!a&&!s)){var d=function(e){var t=e.transformState,n=t.positionX,r=t.positionY,i=t.scale,o=e.setup,a=o.disabled,s=o.limitToBounds,l=o.centerZoomedOut,c=e.wrapperComponent;if(!a&&c&&e.bounds){var d=e.bounds,u=d.maxPositionX,f=d.minPositionX,h=d.maxPositionY,p=d.minPositionY,g=n>u||n<f,m=r>h||r<p,b=EM(e,n>u?c.offsetWidth:e.setup.minPositionX||0,r>h?c.offsetHeight:e.setup.minPositionY||0,i,e.bounds,s||l),v=b.x,y=b.y;return{scale:i,positionX:g?v:n,positionY:m?y:r}}}(e);d&&CM(e,d,l,c)}}function WM(e,t,n){var r=e.startCoords,i=e.setup.alignmentAnimation,o=i.sizeX,a=i.sizeY;if(r){var s=function(e,t,n){var r=e.startCoords,i=e.transformState,o=e.setup.panning,a=o.lockAxisX,s=o.lockAxisY,l=i.positionX,c=i.positionY;if(!r)return{x:l,y:c};var d=t-r.x,u=n-r.y;return{x:a?l:d,y:s?c:u}}(e,t,n),l=s.x,c=s.y,d=NM(e,o),u=NM(e,a);PM(e,{x:l,y:c}),AM(e,l,c,d,u)}}function VM(e){if(e.isPanning){var t=e.setup.panning.velocityDisabled,n=e.velocity,r=e.wrapperComponent,i=e.contentComponent;e.isPanning=!1,e.animate=!1,e.animation=null;var o=null==r?void 0:r.getBoundingClientRect(),a=null==i?void 0:i.getBoundingClientRect(),s=(null==o?void 0:o.width)||0,l=(null==o?void 0:o.height)||0,c=(null==a?void 0:a.width)||0,d=(null==a?void 0:a.height)||0,u=s<c||l<d;!t&&n&&(null==n?void 0:n.total)>.1&&u?function(e){var t=e.velocity,n=e.bounds,r=e.setup,i=e.wrapperComponent;if(FM(e)&&t&&n&&i){var o=t.velocityX,a=t.velocityY,s=t.total,l=n.maxPositionX,c=n.minPositionX,d=n.maxPositionY,u=n.minPositionY,f=r.limitToBounds,h=r.alignmentAnimation,p=r.zoomAnimation,g=r.panning,m=g.lockAxisY,b=g.lockAxisX,v=p.animationType,y=h.sizeX,x=h.sizeY,w=h.velocityAlignmentTime,$=function(e,t){var n=e.setup.velocityAnimation,r=n.equalToMove,i=n.animationTime,o=n.sensitivity;return r?i*t*o:i}(e,s),j=Math.max($,w),S=NM(e,y),k=NM(e,x),C=S*i.offsetWidth/100,O=k*i.offsetHeight/100,T=l+C,D=c-C,I=d+O,E=u-O,_=e.transformState,M=(new Date).getTime();kM(e,v,j,(function(t){var n=e.transformState,r=n.scale,i=n.positionX,s=n.positionY,p=((new Date).getTime()-M)/w,g=1-(0,$M[h.animationType])(Math.min(1,p)),v=1-t,y=i+o*v,x=s+a*v,$=LM(y,_.positionX,i,b,f,c,l,D,T,g),j=LM(x,_.positionY,s,m,f,u,d,E,I,g);i===y&&s===x||e.setTransformState(r,$,j)}))}}(e):HM(e)}}function YM(e,t,n,r){var i=e.setup,o=i.minScale,a=i.maxScale,s=i.limitToBounds,l=_M(xM(t,2),o,a,0,!1),c=EM(e,n,r,l,DM(e,l),s);return{scale:l,positionX:c.x,positionY:c.y}}function UM(e,t,n){var r=e.transformState.scale,i=e.wrapperComponent,o=e.setup,a=o.minScale,s=o.limitToBounds,l=o.zoomAnimation,c=l.disabled,d=l.animationTime,u=l.animationType,f=c||r>=a;if((r>=1||s)&&HM(e),!f&&i&&e.mounted){var h=YM(e,a,t||i.offsetWidth/2,n||i.offsetHeight/2);h&&CM(e,h,d,u)}}var KM=function(){return KM=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},KM.apply(this,arguments)};function qM(e,t,n){if(n||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}var XM=1,GM=0,ZM=0,QM={disabled:!1,minPositionX:null,maxPositionX:null,minPositionY:null,maxPositionY:null,minScale:1,maxScale:8,limitToBounds:!0,centerZoomedOut:!1,centerOnInit:!1,disablePadding:!1,smooth:!0,wheel:{step:.2,disabled:!1,smoothStep:.001,wheelDisabled:!1,touchPadDisabled:!1,activationKeys:[],excluded:[]},panning:{disabled:!1,velocityDisabled:!1,lockAxisX:!1,lockAxisY:!1,allowLeftClickPan:!0,allowMiddleClickPan:!0,allowRightClickPan:!0,wheelPanning:!1,activationKeys:[],excluded:[]},pinch:{step:5,disabled:!1,excluded:[]},doubleClick:{disabled:!1,step:.7,mode:"zoomIn",animationType:"easeOut",animationTime:200,excluded:[]},zoomAnimation:{disabled:!1,size:.4,animationTime:200,animationType:"easeOut"},alignmentAnimation:{disabled:!1,sizeX:100,sizeY:100,animationTime:200,velocityAlignmentTime:400,animationType:"easeOut"},velocityAnimation:{disabled:!1,sensitivity:1,animationTime:400,animationType:"easeOut",equalToMove:!0}},JM=function(e){var t,n,r,i;return{previousScale:null!==(t=e.initialScale)&&void 0!==t?t:XM,scale:null!==(n=e.initialScale)&&void 0!==n?n:XM,positionX:null!==(r=e.initialPositionX)&&void 0!==r?r:GM,positionY:null!==(i=e.initialPositionY)&&void 0!==i?i:ZM}},eR=function(e){var t=KM({},QM);return Object.keys(e).forEach((function(n){var r=void 0!==e[n];if(void 0!==QM[n]&&r){var i=Object.prototype.toString.call(QM[n]),o="[object Object]"===i,a="[object Array]"===i;t[n]=o?KM(KM({},QM[n]),e[n]):a?qM(qM([],QM[n],!0),e[n],!0):e[n]}})),t},tR=function(e,t,n){var r=e.transformState.scale,i=e.wrapperComponent,o=e.setup,a=o.maxScale,s=o.minScale,l=o.zoomAnimation,c=o.smooth,d=l.size;if(!i)throw new Error("Wrapper is not mounted");var u=c?r*Math.exp(t*n):r+t*n;return _M(xM(u,3),s,a,d,!1)};function nR(e,t,n,r,i){var o=e.wrapperComponent,a=e.transformState,s=a.scale,l=a.positionX,c=a.positionY;if(!o)return console.error("No WrapperComponent found");var d=(o.offsetWidth/2-l)/s,u=(o.offsetHeight/2-c)/s,f=YM(e,tR(e,t,n),d,u);if(!f)return console.error("Error during zoom event. New transformation state was not calculated.");CM(e,f,r,i)}function rR(e,t,n,r){var i=e.setup,o=e.wrapperComponent,a=i.limitToBounds,s=JM(e.props),l=e.transformState,c=l.scale,d=l.positionX,u=l.positionY;if(o){var f=OM(e,s.scale),h=IM(s.positionX,s.positionY,f,a,0,0,o),p={scale:s.scale,positionX:h.x,positionY:h.y};c===s.scale&&d===s.positionX&&u===s.positionY||(null==r||r(),CM(e,p,t,n))}}var iR=function(e){return function(t,n,r){void 0===t&&(t=.5),void 0===n&&(n=300),void 0===r&&(r="easeOut"),nR(e,1,t,n,r)}},oR=function(e){return function(t,n,r){void 0===t&&(t=.5),void 0===n&&(n=300),void 0===r&&(r="easeOut"),nR(e,-1,t,n,r)}},aR=function(e){return function(t,n,r,i,o){void 0===i&&(i=300),void 0===o&&(o="easeOut");var a=e.transformState,s=a.positionX,l=a.positionY,c=a.scale,d=e.wrapperComponent,u=e.contentComponent;if(!e.setup.disabled&&d&&u){var f={positionX:Number.isNaN(t)?s:t,positionY:Number.isNaN(n)?l:n,scale:Number.isNaN(r)?c:r};CM(e,f,i,o)}}},sR=function(e){return function(t,n){void 0===t&&(t=200),void 0===n&&(n="easeOut"),rR(e,t,n)}},lR=function(e){return function(t,n,r){void 0===n&&(n=200),void 0===r&&(r="easeOut");var i=e.transformState,o=e.wrapperComponent,a=e.contentComponent;if(o&&a){var s=gR(t||i.scale,o,a);CM(e,s,n,r)}}},cR=function(e){return function(t,n,r,i){void 0===r&&(r=600),void 0===i&&(i="easeOut"),SM(e);var o=e.wrapperComponent,a="string"==typeof t?document.getElementById(t):t;if(o&&a&&o.contains(a)){var s=function(e,t,n){var r=e.wrapperComponent,i=e.contentComponent,o=e.transformState,a=e.setup,s=a.limitToBounds,l=a.minScale,c=a.maxScale;if(!r||!i)return o;var d,u,f,h,p,g,m,b,v=r.getBoundingClientRect(),y=t.getBoundingClientRect(),x=(d=r,u=i,f=o,h=t.getBoundingClientRect(),p=d.getBoundingClientRect(),g=u.getBoundingClientRect(),m=p.x*f.scale,b=p.y*f.scale,{x:(h.x-g.x+m)/f.scale,y:(h.y-g.y+b)/f.scale}),w=x.x,$=x.y,j=y.width/o.scale,S=y.height/o.scale,k=r.offsetWidth/j,C=r.offsetHeight/S,O=_M(n||Math.min(k,C),l,c,0,!1),T=(v.width-j*O)/2,D=(v.height-S*O)/2,I=IM((v.left-w)*O+T,(v.top-$)*O+D,OM(e,O),s,0,0,r);return{positionX:I.x,positionY:I.y,scale:O}}(e,a,n);CM(e,s,r,i)}}},dR=function(e){return{instance:e,zoomIn:iR(e),zoomOut:oR(e),setTransform:aR(e),resetTransform:sR(e),centerView:lR(e),zoomToElement:cR(e)}},uR=function(e){var t={};return Object.assign(t,function(e){return{instance:e,state:e.transformState}}(e)),Object.assign(t,dR(e)),t};function fR(){try{return{get passive(){return!0,!1}}}catch(e){return!1}}var hR=function(e,t){return t.some((function(t){return e.matches("".concat(t,", .").concat(t,", ").concat(t," *, .").concat(t," *"))}))},pR=function(e){e&&clearTimeout(e)},gR=function(e,t,n){var r=n.offsetWidth*e,i=n.offsetHeight*e;return{scale:e,positionX:(t.offsetWidth-r)/2,positionY:(t.offsetHeight-i)/2}};function mR(e,t,n){var r=t.getBoundingClientRect(),i=0,o=0;if("clientX"in e)i=(e.clientX-r.left)/n,o=(e.clientY-r.top)/n;else{var a=e.touches[0];i=(a.clientX-r.left)/n,o=(a.clientY-r.top)/n}return(Number.isNaN(i)||Number.isNaN(o))&&console.error("No mouse or touch offset found"),{x:i,y:o}}var bR=function(e){return Math.sqrt(Math.pow(e.touches[0].pageX-e.touches[1].pageX,2)+Math.pow(e.touches[0].pageY-e.touches[1].pageY,2))},vR=function(e,t){var n=e.props,r=n.onWheel,i=n.onZoom,o=e.contentComponent,a=e.setup,s=e.transformState.scale,l=a.limitToBounds,c=a.centerZoomedOut,d=a.zoomAnimation,u=a.wheel,f=a.disablePadding,h=a.smooth,p=d.size,g=d.disabled,m=u.step,b=u.smoothStep;if(!o)throw new Error("Component not mounted");t.preventDefault(),t.stopPropagation();var v=function(e,t){var n=function(e){return e?e.deltaY<0?1:-1:0}(e),r=function(e,t){return"number"==typeof e?e:t}(t,n);return r}(t,null),y=function(e,t,n,r,i){var o=e.transformState.scale,a=e.wrapperComponent,s=e.setup,l=s.maxScale,c=s.minScale,d=s.zoomAnimation,u=s.disablePadding,f=d.size,h=d.disabled;if(!a)throw new Error("Wrapper is not mounted");var p=o+t*n;if(i)return p;var g=!r&&!h;return _M(xM(p,3),c,l,f,g&&!u)}(e,v,h?b*Math.abs(t.deltaY):m,!t.ctrlKey);if(s!==y){var x=DM(e,y),w=mR(t,o,s),$=l&&(g||0===p||c||f),j=EM(e,w.x,w.y,y,x,$),S=j.x,k=j.y;e.previousWheelEvent=t,e.setTransformState(y,S,k),wM(uR(e),t,r),wM(uR(e),t,i)}},yR=function(e,t){var n=e.props,r=n.onWheelStop,i=n.onZoomStop;pR(e.wheelAnimationTimer),e.wheelAnimationTimer=setTimeout((function(){e.mounted&&(UM(e,t.x,t.y),e.wheelAnimationTimer=null)}),100);var o=function(e,t){var n=e.previousWheelEvent,r=e.transformState.scale,i=e.setup,o=i.maxScale,a=i.minScale;return!!n&&(r<o||r>a||Math.sign(n.deltaY)!==Math.sign(t.deltaY)||n.deltaY>0&&n.deltaY<t.deltaY||n.deltaY<0&&n.deltaY>t.deltaY||Math.sign(n.deltaY)!==Math.sign(t.deltaY))}(e,t);o&&(pR(e.wheelStopEventTimer),e.wheelStopEventTimer=setTimeout((function(){e.mounted&&(e.wheelStopEventTimer=null,wM(uR(e),t,r),wM(uR(e),t,i))}),160))},xR=function(e,t){var n=e.contentComponent,r=e.pinchStartDistance,i=e.transformState.scale,o=e.setup,a=o.limitToBounds,s=o.centerZoomedOut,l=o.zoomAnimation,c=l.disabled,d=l.size;if(null!==r&&n){var u=function(e,t,n){var r=n.getBoundingClientRect(),i=e.touches,o=xM(i[0].clientX-r.left,5),a=xM(i[0].clientY-r.top,5);return{x:(o+xM(i[1].clientX-r.left,5))/2/t,y:(a+xM(i[1].clientY-r.top,5))/2/t}}(t,i,n);if(Number.isFinite(u.x)&&Number.isFinite(u.y)){var f=bR(t),h=function(e,t){var n=e.pinchStartScale,r=e.pinchStartDistance,i=e.setup,o=i.maxScale,a=i.minScale,s=i.zoomAnimation,l=i.disablePadding,c=s.size,d=s.disabled;if(!n||null===r||!t)throw new Error("Pinch touches distance was not provided");return t<0?e.transformState.scale:_M(xM(t/r*n,2),a,o,c,!d&&!l)}(e,f);if(h!==i){var p=DM(e,h),g=a&&(c||0===d||s),m=EM(e,u.x,u.y,h,p,g),b=m.x,v=m.y;e.pinchMidpoint=u,e.lastDistance=f,e.setTransformState(h,b,v)}}}},wR=function(e,t){var n=e.props.onZoomStop,r=e.setup.doubleClick.animationTime;pR(e.doubleClickStopEventTimer),e.doubleClickStopEventTimer=setTimeout((function(){e.doubleClickStopEventTimer=null,wM(uR(e),t,n)}),r)};function $R(e,t){var n=e.setup,r=e.doubleClickStopEventTimer,i=e.transformState,o=e.contentComponent,a=i.scale,s=e.props,l=s.onZoomStart,c=s.onZoom,d=n.doubleClick,u=d.disabled,f=d.mode,h=d.step,p=d.animationTime,g=d.animationType;if(!u&&!r){if("reset"===f)return function(e,t){var n=e.props,r=n.onZoomStart,i=n.onZoom,o=e.setup.doubleClick,a=o.animationTime,s=o.animationType;wM(uR(e),t,r),rR(e,a,s,(function(){return wM(uR(e),t,i)})),wR(e,t)}(e,t);if(!o)return console.error("No ContentComponent found");var m=function(e,t){return"toggle"===e?1===t?1:-1:"zoomOut"===e?-1:1}(f,e.transformState.scale),b=tR(e,m,h);if(a!==b){wM(uR(e),t,l);var v=mR(t,o,a),y=YM(e,b,v.x,v.y);if(!y)return console.error("Error during zoom event. New transformation state was not calculated.");wM(uR(e),t,c),CM(e,y,p,g),wR(e,t)}}}var jR=function(e){var t=this;this.mounted=!0,this.onChangeCallbacks=new Set,this.onInitCallbacks=new Set,this.wrapperComponent=null,this.contentComponent=null,this.isInitialized=!1,this.bounds=null,this.previousWheelEvent=null,this.wheelStopEventTimer=null,this.wheelAnimationTimer=null,this.isPanning=!1,this.isWheelPanning=!1,this.startCoords=null,this.lastTouch=null,this.distance=null,this.lastDistance=null,this.pinchStartDistance=null,this.pinchStartScale=null,this.pinchMidpoint=null,this.doubleClickStopEventTimer=null,this.velocity=null,this.velocityTime=null,this.lastMousePosition=null,this.animate=!1,this.animation=null,this.maxBounds=null,this.pressedKeys={},this.mount=function(){t.initializeWindowEvents()},this.unmount=function(){t.cleanupWindowEvents()},this.update=function(e){t.props=e,DM(t,t.transformState.scale),t.setup=eR(e)},this.initializeWindowEvents=function(){var e,n,r=fR(),i=null===(e=t.wrapperComponent)||void 0===e?void 0:e.ownerDocument,o=null==i?void 0:i.defaultView;null===(n=t.wrapperComponent)||void 0===n||n.addEventListener("wheel",t.onWheelPanning,r),null==o||o.addEventListener("mousedown",t.onPanningStart,r),null==o||o.addEventListener("mousemove",t.onPanning,r),null==o||o.addEventListener("mouseup",t.onPanningStop,r),null==i||i.addEventListener("mouseleave",t.clearPanning,r),null==o||o.addEventListener("keyup",t.setKeyUnPressed,r),null==o||o.addEventListener("keydown",t.setKeyPressed,r)},this.cleanupWindowEvents=function(){var e,n,r=fR(),i=null===(e=t.wrapperComponent)||void 0===e?void 0:e.ownerDocument,o=null==i?void 0:i.defaultView;null==o||o.removeEventListener("mousedown",t.onPanningStart,r),null==o||o.removeEventListener("mousemove",t.onPanning,r),null==o||o.removeEventListener("mouseup",t.onPanningStop,r),null==i||i.removeEventListener("mouseleave",t.clearPanning,r),null==o||o.removeEventListener("keyup",t.setKeyUnPressed,r),null==o||o.removeEventListener("keydown",t.setKeyPressed,r),document.removeEventListener("mouseleave",t.clearPanning,r),SM(t),null===(n=t.observer)||void 0===n||n.disconnect()},this.handleInitializeWrapperEvents=function(e){var n=fR();e.addEventListener("wheel",t.onWheelZoom,n),e.addEventListener("dblclick",t.onDoubleClick,n),e.addEventListener("touchstart",t.onTouchPanningStart,n),e.addEventListener("touchmove",t.onTouchPanning,n),e.addEventListener("touchend",t.onTouchPanningStop,n)},this.handleInitialize=function(e){var n=t.setup.centerOnInit;t.applyTransformation(),t.onInitCallbacks.forEach((function(e){return e(uR(t))})),n&&(t.setCenter(),t.observer=new ResizeObserver((function(){var n,r=e.offsetWidth,i=e.offsetHeight;(r>0||i>0)&&(t.onInitCallbacks.forEach((function(e){return e(uR(t))})),t.setCenter(),null===(n=t.observer)||void 0===n||n.disconnect())})),setTimeout((function(){var e;null===(e=t.observer)||void 0===e||e.disconnect()}),5e3),t.observer.observe(e))},this.onWheelZoom=function(e){if(!t.setup.disabled){var n=function(e,t){var n=e.setup.wheel,r=n.disabled,i=n.wheelDisabled,o=n.touchPadDisabled,a=n.excluded,s=e.isInitialized,l=e.isPanning,c=t.target;return!(!s||l||r||!c||i&&!t.ctrlKey||o&&t.ctrlKey||hR(c,a))}(t,e);n&&t.isPressingKeys(t.setup.wheel.activationKeys)&&(function(e,t){var n=e.props,r=n.onWheelStart,i=n.onZoomStart;e.wheelStopEventTimer||(SM(e),wM(uR(e),t,r),wM(uR(e),t,i))}(t,e),vR(t,e),yR(t,e))}},this.onWheelPanning=function(e){var n=t.setup,r=n.disabled,i=n.wheel,o=n.panning;if(t.wrapperComponent&&t.contentComponent&&!r&&i.wheelDisabled&&!o.disabled&&o.wheelPanning&&!e.ctrlKey){e.preventDefault(),e.stopPropagation();var a=t.transformState,s=a.positionX,l=a.positionY,c=s-e.deltaX,d=l-e.deltaY,u=o.lockAxisX?s:c,f=o.lockAxisY?l:d,h=t.setup.alignmentAnimation,p=h.sizeX,g=h.sizeY,m=NM(t,p),b=NM(t,g);u===s&&f===l||AM(t,u,f,m,b)}},this.onPanningStart=function(e){var n=t.setup.disabled,r=t.props.onPanningStart;n||MM(t,e)&&t.isPressingKeys(t.setup.panning.activationKeys)&&(0!==e.button||t.setup.panning.allowLeftClickPan)&&(1!==e.button||t.setup.panning.allowMiddleClickPan)&&(2!==e.button||t.setup.panning.allowRightClickPan)&&(e.preventDefault(),e.stopPropagation(),SM(t),zM(t,e),wM(uR(t),e,r))},this.onPanning=function(e){var n=t.setup.disabled,r=t.props.onPanning;n||RM(t)&&t.isPressingKeys(t.setup.panning.activationKeys)&&(e.preventDefault(),e.stopPropagation(),WM(t,e.clientX,e.clientY),wM(uR(t),e,r))},this.onPanningStop=function(e){var n=t.props.onPanningStop;t.isPanning&&(VM(t),wM(uR(t),e,n))},this.onPinchStart=function(e){var n=t.setup.disabled,r=t.props,i=r.onPinchingStart,o=r.onZoomStart;if(!n){var a=function(e,t){var n=e.setup.pinch,r=n.disabled,i=n.excluded,o=e.isInitialized,a=t.target;return!(!o||r||!a||hR(a,i))}(t,e);a&&(function(e,t){var n=bR(t);e.pinchStartDistance=n,e.lastDistance=n,e.pinchStartScale=e.transformState.scale,e.isPanning=!1,SM(e)}(t,e),SM(t),wM(uR(t),e,i),wM(uR(t),e,o))}},this.onPinch=function(e){var n=t.setup.disabled,r=t.props,i=r.onPinching,o=r.onZoom;if(!n){var a=function(e){var t=e.setup.pinch.disabled,n=e.isInitialized,r=e.pinchStartDistance;return!(!n||t||!r)}(t);a&&(e.preventDefault(),e.stopPropagation(),xR(t,e),wM(uR(t),e,i),wM(uR(t),e,o))}},this.onPinchStop=function(e){var n,r,i=t.props,o=i.onPinchingStop,a=i.onZoomStop;t.pinchStartScale&&(r=(n=t).pinchMidpoint,n.velocity=null,n.lastDistance=null,n.pinchMidpoint=null,n.pinchStartScale=null,n.pinchStartDistance=null,UM(n,null==r?void 0:r.x,null==r?void 0:r.y),wM(uR(t),e,o),wM(uR(t),e,a))},this.onTouchPanningStart=function(e){var n=t.setup.disabled,r=t.props.onPanningStart;if(!n&&MM(t,e))if(t.lastTouch&&+new Date-t.lastTouch<200&&1===e.touches.length)t.onDoubleClick(e);else{t.lastTouch=+new Date,SM(t);var i=e.touches,o=1===i.length,a=2===i.length;o&&(SM(t),zM(t,e),wM(uR(t),e,r)),a&&t.onPinchStart(e)}},this.onTouchPanning=function(e){var n=t.setup.disabled,r=t.props.onPanning;if(t.isPanning&&1===e.touches.length){if(n)return;if(!RM(t))return;e.preventDefault(),e.stopPropagation();var i=e.touches[0];WM(t,i.clientX,i.clientY),wM(uR(t),e,r)}else e.touches.length>1&&t.onPinch(e)},this.onTouchPanningStop=function(e){t.onPanningStop(e),t.onPinchStop(e)},this.onDoubleClick=function(e){if(!t.setup.disabled){var n=function(e,t){var n=e.isInitialized,r=e.setup,i=e.wrapperComponent,o=r.doubleClick,a=o.disabled,s=o.excluded,l=t.target,c=null==i?void 0:i.contains(l);return!(!(n&&l&&c)||a||hR(l,s))}(t,e);n&&$R(t,e)}},this.clearPanning=function(e){t.isPanning&&t.onPanningStop(e)},this.setKeyPressed=function(e){t.pressedKeys[e.key]=!0},this.setKeyUnPressed=function(e){t.pressedKeys[e.key]=!1},this.isPressingKeys=function(e){return!e.length||Boolean(e.find((function(e){return t.pressedKeys[e]})))},this.setTransformState=function(e,n,r){var i=t.props.onTransformed;if(Number.isNaN(e)||Number.isNaN(n)||Number.isNaN(r))console.error("Detected NaN set state values");else{e!==t.transformState.scale&&(t.transformState.previousScale=t.transformState.scale,t.transformState.scale=e),t.transformState.positionX=n,t.transformState.positionY=r,t.applyTransformation();var o=uR(t);t.onChangeCallbacks.forEach((function(e){return e(o)})),wM(o,{scale:e,positionX:n,positionY:r},i)}},this.setCenter=function(){if(t.wrapperComponent&&t.contentComponent){var e=gR(t.transformState.scale,t.wrapperComponent,t.contentComponent);t.setTransformState(e.scale,e.positionX,e.positionY)}},this.handleTransformStyles=function(e,n,r){return t.props.customTransform?t.props.customTransform(e,n,r):function(e,t,n){return"translate(".concat(e,"px, ").concat(t,"px) scale(").concat(n,")")}(e,n,r)},this.applyTransformation=function(){if(t.mounted&&t.contentComponent){var e=t.transformState,n=e.scale,r=e.positionX,i=e.positionY,o=t.handleTransformStyles(r,i,n);t.contentComponent.style.transform=o}},this.getContext=function(){return uR(t)},this.onChange=function(e){return t.onChangeCallbacks.has(e)||t.onChangeCallbacks.add(e),function(){t.onChangeCallbacks.delete(e)}},this.onInit=function(e){return t.onInitCallbacks.has(e)||t.onInitCallbacks.add(e),function(){t.onInitCallbacks.delete(e)}},this.init=function(e,n){t.cleanupWindowEvents(),t.wrapperComponent=e,t.contentComponent=n,DM(t,t.transformState.scale),t.handleInitializeWrapperEvents(e),t.handleInitialize(n),t.initializeWindowEvents(),t.isInitialized=!0;var r=uR(t);wM(r,void 0,t.props.onInit)},this.props=e,this.setup=eR(this.props),this.transformState=JM(this.props)},SR=Y.default.createContext(null),kR=Y.default.forwardRef((function(e,n){var r=t.useRef(new jR(e)).current,i=function(e,t){return"function"==typeof e?e(t):e}(e.children,dR(r));return t.useImperativeHandle(n,(function(){return dR(r)}),[r]),t.useEffect((function(){r.update(e)}),[r,e]),Y.default.createElement(SR.Provider,{value:r},i)}));Y.default.forwardRef((function(e,n){var r,i=t.useRef(null),o=t.useContext(SR);return t.useEffect((function(){return o.onChange((function(e){if(i.current){i.current.style.transform=o.handleTransformStyles(0,0,1/e.instance.transformState.scale)}}))}),[o]),Y.default.createElement("div",KM({},e,{ref:(r=[i,n],function(e){r.forEach((function(t){"function"==typeof t?t(e):null!=t&&(t.current=e)}))})}))}));var CR="transform-component-module_wrapper__SPB86",OR="transform-component-module_content__FBWxo";!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===n&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}(".transform-component-module_wrapper__SPB86 {\n  position: relative;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  overflow: hidden;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Safari */\n  -khtml-user-select: none; /* Konqueror HTML */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none;\n  margin: 0;\n  padding: 0;\n}\n.transform-component-module_content__FBWxo {\n  display: flex;\n  flex-wrap: wrap;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin: 0;\n  padding: 0;\n  transform-origin: 0% 0%;\n}\n.transform-component-module_content__FBWxo img {\n  pointer-events: none;\n}\n");var TR=function(e){var n=e.children,r=e.wrapperClass,i=void 0===r?"":r,o=e.contentClass,a=void 0===o?"":o,s=e.wrapperStyle,l=e.contentStyle,c=e.wrapperProps,d=void 0===c?{}:c,u=e.contentProps,f=void 0===u?{}:u,h=t.useContext(SR),p=h.init,g=h.cleanupWindowEvents,m=t.useRef(null),b=t.useRef(null);return t.useEffect((function(){var e=m.current,t=b.current;return null!==e&&null!==t&&p&&(null==p||p(e,t)),function(){null==g||g()}}),[]),Y.default.createElement("div",KM({},d,{ref:m,className:"react-transform-wrapper ".concat(CR," ").concat(i),style:s}),Y.default.createElement("div",KM({},f,{ref:b,className:"react-transform-component ".concat(OR," ").concat(a),style:l}),n))};const DR=K.default.div`
    background-color: ${ts.Neutral[6]};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;

    svg {
        min-width: 3rem;
        width: 18%;
        height: auto;
    }
`,IR=t=>e.jsx(DR,Object.assign({},t,{children:e.jsx(u.PlaceholderImageIcon,{})})),ER=K.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,_R=K.default.img`
    height: 100%;
    width: 100%;
    object-fit: ${e=>e.$fit||"contain"};
`,MR=K.default(IR)`
    width: 100%;
    height: 100%;
`,RR=({src:n,className:r,alt:i,fit:o,placeholder:a,retrieveImageDimension:s,setDimension:l})=>{const[c,d]=t.useState(!0),[u,f]=t.useState();t.useEffect((()=>{d(!0),f(void 0);const e=new Image;e.src=n,e.onload=()=>{s&&l({src:n,width:e.width,height:e.height}),d(!1)},e.onerror=e=>{d(!1),f(e)}}),[n]);return e.jsx(ER,Object.assign({className:r},{children:u?null!=a?a:e.jsx(MR,{}):c?e.jsx(hl,{}):e.jsx(_R,{src:n,alt:i,$fit:o})}))},AR=K.default(ss)`
    padding: 0;
    border-radius: 100%;
    background: ${ts.Neutral[8]};
    color: ${ts.Primary};
    height: 2.5rem;
    width: 2.5rem;
`,NR=K.default(AR)`
    position: absolute;
    top: 3rem;
    right: 3rem;
    z-index: 5;

    ${is.MaxWidth.mobileL} {
        top: 1.25rem;
        right: 1.25rem;
    }

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }
`,BR=K.default(AR)`
    position: absolute;
    top: 3rem;
    right: 6.5rem;
    z-index: 5;

    ${is.MaxWidth.mobileL} {
        top: 1.25rem;
        right: 4.75rem;
    }

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }
`,FR=K.default(AR)`
    z-index: 4;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    ${e=>"left"===e.$position&&i.css`
            left: 3rem;
            ${is.MaxWidth.mobileL} {
                left: 1.25rem;
            }
        `}

    ${e=>"right"===e.$position&&i.css`
            right: 3rem;
            ${is.MaxWidth.mobileL} {
                right: 1.25rem;
            }
        `}

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }
`,LR=K.default.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`,PR=K.default.div`
    user-select: none;
    position: relative;
    display: block;
    overflow: hidden;
    width: 100%;
    height: 100%;
`,zR=K.default.div`
    display: block;
    user-select: none;
    height: 100%;
    overflow: hidden;
    touch-action: pan-y;
`,HR=K.default.div`
    display: flex;
    transition: all 450ms ease-out 0s;
    position: relative;
    text-align: center;
    user-select: none;
    width: 100%;
    height: 100%;
`,WR=K.default.div`
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
`,VR=K.default(RR)`
    height: 100%;
    width: 100%;
`,YR=K.default(IR)`
    width: 60vw;
    height: auto;
    max-height: 100%;
    aspect-ratio: 4 / 3;
`,UR=K.default.div`
    display: flex;
    justify-content: center;
    padding: 1rem;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    z-index: 3;
`,KR=K.default(exports.Text.XSmall)`
    display: inline-flex;
    padding: 0.25rem 1rem;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    background-color: ${ts.Neutral[8]};
    text-align: center;
`,qR=K.default.div`
    flex-shrink: 0;
    display: flex;
    overflow: auto;
    background-color: ${ts.Neutral[1]};
    padding: 1.5rem 1rem;

    ${is.MaxWidth.mobileL} {
        padding: 1rem 1.25rem;
    }
`,XR=K.default.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
`,GR=K.default.div`
    cursor: pointer;
    background-color: ${ts.Neutral[1]};
    border-radius: 10px;

    flex-shrink: 0;
    overflow: hidden;
    border: 1px solid transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 6.25rem;
    width: 6.25rem;

    ${is.MaxWidth.mobileL} {
        height: 4rem;
        width: 4rem;
    }

    ${e=>e.$active?i.css`
                  border: 4px solid ${ts.Primary};

                  ${is.MaxWidth.mobileL} {
                      border: 2px solid ${ts.Primary};
                  }
              `:i.css`
                  :hover {
                      border: 1px solid ${ts.Neutral[5]};
                  }
              `};
`,ZR=K.default(RR)`
    height: 100%;
    width: 100%;
`,QR=(n,r)=>{var{items:i,initialActiveItemIndex:o,hideThumbnail:a=!1,hideNavigation:s=!1,hideCounter:l=!1,hideMagnifier:c=!1,onClose:d}=n,f=X(n,["items","initialActiveItemIndex","hideThumbnail","hideNavigation","hideCounter","hideMagnifier","onClose"]);const[h,p]=t.useState(null!=o?o:0),[g,m]=t.useState({}),[b,v]=t.useState(1),[y,x]=t.useState(null),[w,$]=t.useState(null),j=t.useRef(null),S=t.useRef([]),k=t.useRef([]),C=y&&w?y-w:0;t.useImperativeHandle(r,(()=>({currentItemIndex:h,setCurrentItem:_,goToPrevItem:I,goToNextItem:E}))),fc("keydown",(function(e){"ArrowRight"===e.key?E():"ArrowLeft"===e.key?I():"Escape"===e.key&&d&&d()}),"document"),t.useEffect((()=>{var e,t;null===(t=null===(e=S.current)||void 0===e?void 0:e[h])||void 0===t||t.scrollIntoView({behavior:"smooth",inline:"center"}),v(1)}),[h]);const O=e=>{v(e.state.scale)};const T=({src:e,height:t,width:n})=>{m((r=>Object.assign(Object.assign({},r),{[e]:{height:t,width:n}})))},D=()=>{const e=g[i[h].src];if((null==j?void 0:j.current)&&e){const{clientHeight:t,clientWidth:n}=j.current,{width:r,height:i}=e,o=i/r<t/n;return r<n&&i<t?o?n/r:t/i:o?t/(i/(r/n)):n/(r/(i/t))}},I=()=>{var e,t;null===(t=null===(e=k.current)||void 0===e?void 0:e[h])||void 0===t||t.resetTransform(),p((e=>0===e?i.length-1:e-1))},E=()=>{var e,t;null===(t=null===(e=k.current)||void 0===e?void 0:e[h])||void 0===t||t.resetTransform(),p((e=>e===i.length-1?0:e+1))},_=e=>{var t,n;null===(n=null===(t=k.current)||void 0===t?void 0:t[h])||void 0===n||n.resetTransform(),p(e)};return e.jsxs(Sh,Object.assign({},f,{"data-testid":"image-carousel-modal"},{children:[e.jsx(NR,Object.assign({"aria-label":"Close image carousel",onClick:d,focusHighlight:!1},{children:e.jsx(u.CrossIcon,{"aria-hidden":!0})})),!c&&e.jsx(BR,Object.assign({"aria-label":1===b?"Zoom in":"Zoom out",onClick:()=>{var e,t,n,r;if(1===b){const n=D();null===(t=null===(e=k.current)||void 0===e?void 0:e[h])||void 0===t||t.centerView(n),v(n)}else v(1),null===(r=null===(n=k.current)||void 0===n?void 0:n[h])||void 0===r||r.resetTransform()},focusHighlight:!1},{children:1===b?e.jsx(u.MagnifierPlusIcon,{"aria-hidden":!0}):e.jsx(u.MagnifierMinusIcon,{"aria-hidden":!0})})),e.jsxs(LR,{children:[e.jsxs(PR,{children:[!s&&e.jsxs(e.Fragment,{children:[e.jsx(FR,Object.assign({"aria-label":"View previous image","data-testid":"prev-btn",$position:"left",onClick:I},{children:e.jsx(u.ChevronLeftIcon,{"aria-hidden":!0})})),e.jsx(FR,Object.assign({"aria-label":"View next image","data-testid":"forward-btn",$position:"right",onClick:E},{children:e.jsx(u.ChevronRightIcon,{"aria-hidden":!0})}))]}),e.jsx(zR,Object.assign({ref:j,onTouchStart:e=>{b<=1&&x(e.touches[0].clientX)},onTouchMove:e=>{!y||b>1||$(e.touches[0].clientX)},onTouchEnd:()=>{Math.abs(C)>j.current.offsetWidth/3&&(C>0?E():I()),x(null),$(null)}},{children:e.jsx(HR,Object.assign({style:{transform:`translateX(calc(${100*-h}% - ${C}px))`}},{children:i.map(((t,n)=>{var r;return e.jsx(WR,Object.assign({"data-testid":"slide-item"},{children:e.jsx(kR,Object.assign({ref:e=>k.current[n]=e,panning:{disabled:b<=1},initialScale:1,onZoom:O,onZoomStop:O,onWheel:O},{children:e.jsx(TR,{children:e.jsx(VR,{src:t.src,alt:null!==(r=t.alt)&&void 0!==r?r:`Image ${n+1}`,placeholder:e.jsx(YR,{}),fit:"scale-down",retrieveImageDimension:!0,setDimension:T})})}))}),n)}))}))})),!l&&e.jsx(UR,{children:e.jsx(KR,Object.assign({weight:"semibold"},{children:`${h+1}/${i.length}`}))})]}),!a&&e.jsx(qR,{children:e.jsx(XR,{children:i.map(((t,n)=>{var r;const i=null!==(r=t.thumbnailSrc)&&void 0!==r?r:t.src;return e.jsx(GR,Object.assign({"data-testid":"thumbnail-item",$active:n===h,onClick:()=>_(n),ref:e=>S.current[n]=e},{children:e.jsx(ZR,{src:i,alt:`Thumbnail ${n+1}`,fit:"cover"})}),n)}))})})]})]}))},JR=t.forwardRef(QR),eA=K.default.button`
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
    padding: 1.5rem 1rem;
    background-color: ${ts.Neutral[8]};
    border: 1px solid transparent;
    border-radius: 0.5rem;
    cursor: pointer;
    max-width: 13rem;
    transition: all 200ms ease;
    ${ys.getTextStyle("Body","semibold")}
    color: ${({$selected:e})=>e&&ts.Primary};
    overflow-wrap: anywhere;

    img {
        min-width: 3.5rem;
        width: 3.5rem;
        height: 3.5rem;
        object-fit: contain;
    }

    ${is.MaxWidth.mobileL} {
        padding: 0.5rem 0.25rem;
        gap: 0.25rem;
        ${ys.getTextStyle("BodySmall","semibold")}
    }

    ${e=>e.$error?i.css`
                background: ${ts.Neutral[8]};
                border: 1px solid ${ts.Validation.Red.Border};

                :hover {
                    box-shadow: 0 0 4px 1px ${ts.Shadow.Red};
                }
            `:e.$selected?i.css`
                background: ${ts.Accent.Light[5]};
                border: 1px solid ${ts.Primary};

                :hover {
                    box-shadow: 0 0 4px 1px ${ts.Shadow.Accent};
                }
            `:i.css`
                &:hover {
                    border: 1px solid ${ts.Accent.Light[1]};
                    box-shadow: 0 0 4px 1px ${ts.Shadow.Accent};
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
        color: ${ts.Neutral[3]};

        outline: none;
        cursor: not-allowed;
    }
`,tA=Y.default.forwardRef(((t,n)=>{var{children:r,imgSrc:i,selected:o,error:a,type:s="button"}=t,l=X(t,["children","imgSrc","selected","error","type"]);return e.jsxs(eA,Object.assign({ref:n,$selected:o,$error:a,type:s},l,{children:[e.jsx(gp,{src:i}),r]}))})),nA=i.css`
    height: 1.125rem;
    width: 1.125rem;
    color: ${ts.Primary};
`,rA=K.default.div`
    border-top: 1px solid ${ts.Neutral[5]};
    border-bottom: 1px solid ${ts.Neutral[5]};
`,iA=K.default(exports.Text.H3)`
    color: ${ts.Primary};
    margin-bottom: 0.5rem;
`,oA=K.default(exports.Text.Body)`
    color: ${ts.Primary};
`,aA=K.default(h.ChevronRightIcon)`
    ${nA}
`,sA=K.default.a`
    padding: 1rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 4rem;

    :not(:last-of-type) {
        border-bottom: 1px solid ${ts.Neutral[5]};
    }

    :hover {
        ${iA},
        ${oA},
        ${aA} {
            color: ${ts.PrimaryDark};
        }
    }
`,lA=K.default.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-right: 1rem;
`,cA=K.default(exports.Text.BodySmall)`
    margin-top: 0.25rem;
`,dA=K.default(Ti.div)`
    overflow: hidden;
`,uA=K.default.div`
    border-top: 1px solid ${ts.Neutral[5]};
`,fA=K.default(exports.Text.H5)`
    color: ${ts.Primary};
    margin-right: 0.5rem;
`,hA=K.default(A.PlusIcon)`
    ${nA}
`,pA=K.default(R.MinusIcon)`
    ${nA}
`,gA=K.default.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1rem 0;
    border: none;
    background: none;
    cursor: pointer;
    transition: border-width 300ms linear;
    border-top: 1px solid ${ts.Neutral[5]};

    :hover {
        ${fA},
        ${hA},
        ${pA} {
            color: ${ts.PrimaryDark};
        }
    }
`,mA=K.default.div`
    ${e=>el({textSize:e.$textSize})}
    ${e=>e.color&&i.css`
            color: ${e.color};
        `}
`,bA=t.forwardRef(((t,n)=>{const{baseTextColor:r,baseTextSize:i,inline:o}=t,a=X(t,["baseTextColor","baseTextSize","inline"]);return e.jsx(mA,Object.assign({ref:n,as:o?"span":"div",$textSize:i,$textColor:r},a))})),vA=K.default.div`
    margin-top: 2.5rem;
    display: grid;
    align-items: center;
    width: 100%;

    ${e=>{const{numOfCols:t}=e,n=t.lg||t.md,r=t.sm?t.sm<=2?t.sm:2:void 0,o=t.md||t.sm||2;return i.css`
            grid-template-columns: repeat(${n||"auto-fill"}, 1fr);
            gap: 2rem 2rem;
            justify-items: stretch;

            ${is.MaxWidth.tablet} {
                grid-template-columns: repeat(
                    ${t.md||t.sm||"auto-fill"},
                    minmax(calc(${100/o}% - 2rem), 1fr)
                );
            }

            ${is.MaxWidth.mobileL} {
                grid-template-columns: repeat(
                    ${r||"auto-fill"},
                    minmax(calc(${100/(r||1)}% - 2rem), 1fr)
                );
            }
        `}}
`,yA=K.default.div`
    position: relative;
    ${e=>{const{startLg:t,colsLg:n,startMd:r,colsMd:o,startSm:a,colsSm:s}=e;return i.css`
            grid-column: ${t||r||"auto"} / span
                ${n||o||1};

            ${is.MaxWidth.tablet} {
                grid-column: ${r||a||"auto"} / span
                    ${o||s||1};
            }

            ${is.MaxWidth.mobileL} {
                grid-column: ${a||"auto"} / span ${s||1};
            }
        `}}
`,xA={Grid:Y.default.forwardRef(((t,n)=>{const{children:r}=t,i=X(t,["children"]);return e.jsx(vA,Object.assign({ref:n},i,{children:r}))})),Tile:Y.default.forwardRef(((t,n)=>{const{children:r}=t,i=X(t,["children"]);return e.jsx(yA,Object.assign({ref:n},i,{children:r}))}))},wA=K.default.div`
    background: hsl(0, 0%, 94%);
    padding: 0 0.5rem;

    ${is.MaxWidth.mobileL} {
        padding: 0;
    }
`,$A=()=>{t.useEffect((()=>{n()||r()}),[]);const n=()=>document.getElementById(jA),r=()=>{if(!document.getElementById(jA)){const e=document.createElement("script");e.id=jA,e.type="module",e.src=SA,document.head.appendChild(e)}};return e.jsx(wA,{dangerouslySetInnerHTML:{__html:"<sgds-masthead></sgds-masthead>"}})},jA="lifesg-ds-masthead-script",SA="https://cdn.jsdelivr.net/npm/@govtechsg/sgds-web-component/Masthead/index.js",kA={notCompress:6,compress:4},CA=K.default.div`
    position: ${e=>e.$fixed?"sticky":"relative"};
    background-color: white;
    z-index: 30;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`,OA=K.default.nav`
    height: ${e=>e.$compress?kA.compress:kA.notCompress}rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    transition: ${Ss.Base};

    ${is.MaxWidth.tablet} {
        height: ${3.5}rem;
    }
`,TA=K.default.div`
    display: flex;
    height: 100%;
    margin-left: ${e=>e.$hideNavBranding?"0":"5rem"};
    flex: 1;
    justify-content: flex-end;

    ${is.MaxWidth.tablet} {
        margin-left: 0rem;
    }
`,DA=K.default(ss)`
    display: none;

    ${is.MaxWidth.tablet} {
        display: flex;
        padding: 0 1.5rem;
        margin-right: -1.5rem;
    }
`,IA=K.default(N.MenuIcon)`
    height: 1.5rem;
    width: 1.5rem;
    color: ${ts.Neutral[1]};
`,EA=K.default.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-shrink: 0;

    height: ${e=>e.$compress?1.5:2}rem;

    ${is.MaxWidth.tablet} {
        height: 1.5rem;
    }

    ${is.MaxWidth.mobileS} {
        height: 1.25rem;
    }
`,_A=K.default.div`
    display: flex;
    background-color: ${ts.Neutral[5]};
    height: 100%;
    width: 1px;
    margin: 0 ${e=>e.$compress?1:1.5}rem;

    ${is.MaxWidth.tablet} {
        margin: 0 1rem;
    }

    ${is.MaxWidth.mobileS} {
        width: 2px;
        margin: 0 0.75rem;
    }
`,MA=K.default.a`
    display: flex;
    justify-content: center;
    height: 100%;

    img {
        width: auto;
        height: 100%;
        transition: ${Ss.Base};
        object-fit: contain;
    }
`,RA=({resources:t,onClick:n,"data-id":r,"data-testid":i="navbar-brand",type:o})=>e.jsx(MA,Object.assign({role:"link",onClick:e=>{n&&n(e,o)},tabIndex:0,"data-id":r,"data-testid":i,$type:o},{children:e.jsx(gp,{src:t.logoSrc,alt:t.brandName})})),AA=K.default.div`
    display: none;

    ${is.MaxWidth.tablet} {
        display: flex;
    }
`,NA=K.default.div`
    position: absolute;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100vh;
    display: block;
    padding: 0 0 1rem;
    background-color: white;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    visibility: ${e=>e.$show?"visible":"hidden"};

    ${e=>e.$show?i.css`
            right: 0;
            transition: all 300ms cubic-bezier(0.21, 0.79, 0.53, 1);
            transition-delay: 200ms;
        `:i.css`
        right: -100%;
        transition: all 300ms cubic-bezier(0.4, 0.34, 0.38, 1);
    `}
    ${e=>{const t=`${e.$viewHeight}px`||"1vh";return i.css`
            height: calc(${t} * 100);
        `}}

	${is.MaxWidth.tablet} {
        width: 75%;
    }

    ${is.MaxWidth.mobileL} {
        width: 100%;
    }
`,BA=K.default.div`
    display: flex;
    flex-direction: column;
`,FA=K.default.div`
    display: flex;
    justify-content: space-between;
    position: relative;
    padding: 2.5rem 1.25rem 2rem;
`,LA=K.default(m.CrossIcon)`
    height: 1.5rem;
    width: 1.5rem;
    margin-right: -0.25rem;
`,PA=K.default(ss)`
    position: absolute;
    right: -0.25rem;
    bottom: 0.65rem;
    color: ${ts.Neutral[1]};

    :active,
    :focus {
        color: ${ts.Primary};
    }
`,zA=Y.default.forwardRef(((n,r)=>{const{show:i,resources:o,children:a,hideNavBranding:s,onClose:l,onBrandClick:c}=n,[d,u]=t.useState(0),{primary:f,secondary:h}=o;t.useEffect((()=>(p(),window.addEventListener("resize",p),()=>{window.removeEventListener("resize",p)})),[]);const p=()=>{if(window){const e=.01*window.innerHeight;u(e)}};return e.jsx(AA,Object.assign({ref:r,"data-testid":"drawer"},{children:e.jsx(NA,Object.assign({$show:i,$viewHeight:d},{children:e.jsxs(BA,{children:[e.jsxs(FA,{children:[e.jsx(EA,Object.assign({"data-id":"drawer-brand-container"},{children:!s&&e.jsxs(e.Fragment,{children:[e.jsx(RA,{resources:f,compress:!0,onClick:c,"data-id":"drawer-brand-primary","data-testid":"drawer__brand",type:"primary"}),h&&e.jsxs(e.Fragment,{children:[e.jsx(_A,{}),e.jsx(RA,{resources:h,compress:!0,onClick:c,"data-id":"drawer-brand-secondary","data-testid":"drawer__brand-secondary",type:"secondary"})]})]})})),e.jsx(PA,Object.assign({onClick:l,focusHighlight:!1,"aria-label":"Close nav menu"},{children:e.jsx(LA,{})}))]}),a]})}))}))})),HA={primary:{brandName:"LifeSG",logoSrc:"https://assets.life.gov.sg/lifesg/logo-lifesg.svg"}},WA={primary:{brandName:"BookingSG",logoSrc:"https://www.booking.gov.sg/logo.svg"}},VA={primary:{brandName:"MyLegacy",logoSrc:"https://assets.life.gov.sg/ccube/logo-ccube.svg"}},YA={primary:{brandName:"CCube",logoSrc:"https://mylegacy.life.gov.sg/images/site-logo.png"}},UA=K.default.ul`
    display: flex;
    list-style: none;
    margin-left: 4rem;
    flex-shrink: 0;

    ${is.MaxWidth.tablet} {
        display: none;
    }
`,KA=K.default.ul`
    display: none;

    ${is.MaxWidth.tablet} {
        display: flex;
        list-style: none;
        margin-left: 4rem;
        flex-shrink: 0;
    }
`,qA=K.default.ul`
    display: none;
    list-style: none;

    ${is.MaxWidth.tablet} {
        display: flex;
        flex-direction: column;
        margin-top: 2.5rem;
        width: max-content;
        min-width: 22rem;
        max-width: 24rem;
    }

    ${is.MaxWidth.mobileL} {
        width: 100%;
        max-width: unset;
        min-width: unset;
    }
`,XA=K.default.li`
    position: relative;
    display: flex;
    align-items: center;

    :not(:last-of-type) {
        margin-right: 1rem;
    }

    ${is.MaxWidth.tablet} {
        width: 100%;
        padding: 0 0 0 1rem;
        justify-content: center;

        :not(:last-of-type) {
            margin-right: 0;
            margin-bottom: ${e=>e.$mobile?"1rem":"0"};
        }
    }

    ${is.MaxWidth.mobileL} {
        ${e=>{if(e.$mobile)return i.css`
                    padding: 0 1rem;
                `}}
    }
`,GA=K.default(qs.Small)`
    ${is.MaxWidth.tablet} {
        width: 100%;
        padding: 0.685rem 1rem;
    }
`,ZA=K.default.div`
    display: none;

    ${is.MaxWidth.tablet} {
        display: flex;
        flex-direction: column;
        margin-top: 2.5rem;
    }
`,QA=K.default(exports.Text.BodySmall)`
    margin-bottom: 0.5rem;
`,JA=K.default.div`
    display: flex;
`,eN=K.default.a`
    :not(:last-child) {
        margin-right: 1rem;
    }

    img {
        width: auto;
        height: auto;
        object-fit: contain;
    }

    ${is.MaxWidth.tablet} {
        img {
            max-width: 11rem;
        }
    }

    ${is.MaxWidth.mobileL} {
        img {
            max-width: 100%;
        }
    }
`,tN=({actionButtons:t,mobile:n=!1,onActionButtonClick:r})=>{const i=e=>{e.stopPropagation()},o=e=>t=>{t.stopPropagation(),"download"===e.type&&window.scrollTo({left:0,top:document.body.scrollHeight,behavior:"smooth"}),r(t,e)},a=(t,n)=>{const r=t?(e=>{const t=sj(e,(e=>"download"===e.type));if(t>-1){const n=[...e],r=n.splice(t,1);return[...n,r[0]]}return e})(n):n;return r.map(((n,r)=>{let a;switch(n.type){case"download":a=t?(s=n.args,e.jsxs(ZA,{children:[e.jsx(QA,Object.assign({weight:"semibold"},{children:s&&s.children||"Download the app"})),e.jsxs(JA,{children:[e.jsx(eN,Object.assign({href:"https://apps.apple.com/sg/app/moments-of-life/id1383218758",target:"_blank",rel:"noopener noreferrer","data-testid":"button__app-store",onClick:i},{children:e.jsx("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/apple-app-store.png",alt:"apple-app-store"})})),e.jsx(eN,Object.assign({href:"https://play.google.com/store/apps/details?id=sg.gov.app.mol&hl=en_SG",target:"_blank",rel:"noopener noreferrer","data-testid":"button__play-store",onClick:i},{children:e.jsx("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/google-play-store.png",alt:"google-play-store"})}))]})]})):e.jsx(GA,Object.assign({},n.args,{type:"button",onClick:o(n),"data-testid":"action-button__download"},{children:"Download the app"}));break;case"button":{const i=n.args["data-testid"]?`action-button__${n.args["data-testid"]}`:`action-button__button-${t?"mobile-":""}${r+1}`;a=e.jsx(GA,Object.assign({},n.args,{type:"button",onClick:o(n),"data-testid":i}));break}case"component":{const e=n.args;a=e&&e.render||null;break}default:a=null}var s;if(a)return e.jsx(XA,Object.assign({$mobile:t},{children:a}),`action-button-${r+1}`)}))};if(t){const r=(null==t?void 0:t.mobile)||t.desktop,i=r.filter((e=>!!e.uncollapsible)),o=r.filter((e=>!e.uncollapsible));return n?e.jsx(e.Fragment,{children:o.length>0&&e.jsx(qA,{children:a(n,o)})}):e.jsxs(e.Fragment,{children:[i.length>0&&e.jsx(KA,{children:a(!1,i)}),t.desktop.length>0&&e.jsx(UA,{children:a(n,t.desktop)})]})}return e.jsx(e.Fragment,{})},nN=K.default.ul`
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

    background: ${ts.Neutral[8]};
    border-radius: 0 0 0.5rem 0.5rem;
    box-shadow: ${Bs.ElevationBoxShadow};
`,rN=K.default.ul`
    display: none;
    list-style: none;

    ${is.MaxWidth.tablet} {
        border-left: 0.25rem solid ${ts.Primary};
        display: flex;
        flex-direction: column;
    }
`,iN=K.default(exports.Text.Hyperlink.Small)`
    ${ys.getTextStyle("H6","regular")};
    width: 100%;
    display: flex;
    position: relative;
    align-items: flex-start;
    text-align: left;
    color: ${ts.Neutral[1]};

    padding: 1px 1rem;

    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    white-space: pre-wrap;

    :active,
    :focus {
        color: ${ts.Primary};
    }
    :hover {
        color: ${ts.Accent.Light[1]};
    }

    ${is.MaxWidth.tablet} {
        ${ys.getTextStyle("H5","bold")}
        width: 100%;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        line-height: 1.125rem;
    }
`,oN=K.default.li`
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

    ${is.MaxWidth.tablet} {
        padding: 0.625rem 0;

        :first-child {
            padding-top: 0.25rem;
        }

        :last-child {
            padding-bottom: 0.625rem;
        }
    }
`,aN=({items:t,mobile:n=!1,onItemClick:r})=>{const i=e=>t=>{t.stopPropagation(),r(t,e)},o=(n=!1)=>t.map(((t,r)=>{const{children:o,options:a}=t,s=X(t,["children","options"]),l=n?`link__mobile-${r+1}`:`link__${r+1}`;return e.jsx(oN,{children:e.jsx(iN,Object.assign({"data-testid":l,weight:"bold"},s,{onClick:i(t)},a,{children:o}))},r)}));if(t&&t.length>0){const t=n?rN:nN;return e.jsx(t,{children:o(n)})}return e.jsx(e.Fragment,{})},sN=K.default.ul`
    display: flex;
    list-style: none;
    position: relative;

    ${e=>e.$alignLeft&&"margin-right: auto;"}

    ${is.MaxWidth.tablet} {
        display: none;
    }
`,lN=K.default.ul`
    display: none;
    list-style: none;

    ${is.MaxWidth.tablet} {
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
`,cN=K.default.li`
    display: flex;
    margin-left: 1rem;

    :first-child {
        // negative margin to preserve touch target size for link
        margin-left: ${e=>e.$hiddenBranding?"-0.5rem":"0"};
    }

    ${is.MaxWidth.tablet} {
        flex-direction: column;
        padding: 0.125rem 0;
        width: 100%;
        margin-left: 0rem;
    }
`,dN=K.default(exports.Text.Hyperlink.Small)`
    display: flex;
    position: relative;
    align-items: center;
    text-align: center;
    color: ${ts.Neutral[1]};
    height: 100%;
    padding: 0 0.5rem;

    :active,
    :focus {
        color: ${ts.Neutral[1]};
    }

    ${is.MaxWidth.tablet} {
        color: ${ts.Neutral[1]};
        width: 100%;
        padding: 0.5rem 1rem;
        text-align: left;
        align-items: flex-start;
        :hover {
            color: ${ts.Neutral[1]};
        }
    }
`,uN=K.default.div`
    flex: 1;
    margin-top: 0.25rem;

    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    white-space: pre-wrap;
`,fN=K.default.div`
    position: absolute;
    bottom: 0;
    height: 0.25rem;
    left: 0.5rem;
    right: 0.5rem;
    background-color: ${ts.Primary};

    ${is.MaxWidth.tablet} {
        left: 0;
        right: unset;
        top: 0;
        bottom: 0;
        height: 100%;
        width: 0.25rem;
        background-color: ${ts.Primary};
    }
`,hN=K.default.div`
    padding-left: 0.5rem;
    margin-right: -0.5rem;
`,pN=K.default(ss)`
    padding: 0.5rem;
    transform: rotate(${e=>e.$selected?0:180}deg);
    transition: transform 300ms ease-in-out;
    margin: auto 0.25rem auto 0;
`,gN=K.default(r.ChevronUpIcon)`
    height: 1.25rem;
    width: 1.25rem;
    color: ${ts.Neutral[3]};
    :hover {
        color: ${ts.Neutral[1]};
    }
`,mN=({items:n,selectedId:r,mobile:i=!1,hideNavBranding:o,onItemClick:a})=>{const[s,l]=t.useState(-1),[c,d]=t.useState(!1),u=t.useRef(null);t.useEffect((()=>{const e=e=>{u.current&&!u.current.contains(e.target)&&f()};return document.addEventListener("click",e,!0),()=>{document.removeEventListener("click",e,!0)}}),[]);const f=()=>{d(!1)},h=(e,t)=>n=>{n.stopPropagation(),l(t),d(!0),a(n,e)},p=(e,t)=>{e.stopPropagation(),a(e,t),d(!1)},g=()=>n.map(((t,n)=>{if("component"===t.itemType){const r=t&&t.children||null;return e.jsx("li",{children:r},n)}{const a=(e=>{if(e.id===r)return!0;if((null==e?void 0:e.subMenu)&&e.subMenu.length>=1)return!!e.subMenu.find((e=>e.id===r));return!1})(t),{children:l,options:d}=t,u=X(t,["children","options"]),f=a?i?"bold":"semibold":"regular",g=i?`link__mobile-${n+1}`:`link__${n+1}`,m=s>=0&&s===n&&c;return e.jsxs(cN,Object.assign({$hiddenBranding:o},{children:[e.jsxs(dN,Object.assign({"data-testid":g,weight:f,$selected:a},u,{onClick:h(t,n)},d,{children:[e.jsx(uN,{children:l}),a&&e.jsx(fN,{"data-testid":`${g}-indicator`}),i&&t.subMenu&&e.jsx(hN,{children:e.jsx(pN,Object.assign({"data-testid":`${g}-expand-collapse-button`,$selected:m,focusHighlight:!1,focusOutline:"browser","aria-label":m?"Collapse":"Expand"},{children:e.jsx(gN,{})}))})]})),m&&e.jsx(aN,{items:t.subMenu,mobile:i,onItemClick:p})]}),n)}}));return n&&n.length>0?i?e.jsx(lN,Object.assign({ref:u},{children:g()})):e.jsx(sN,Object.assign({ref:u,$alignLeft:o},{children:g()})):e.jsx(e.Fragment,{})},bN=t.forwardRef(((n,r)=>{var{items:o,className:a,id:s,selectedId:l,compress:c=!1,fixed:d=!0,resources:u,hideNavElements:f=!1,hideNavBranding:h=!1,drawerDismissalExclusions:p=[],actionButtons:g,onItemClick:m,onActionButtonClick:b,onBrandClick:v,masthead:y=!0,layout:x="default"}=n,w=X(n,["items","className","id","selectedId","compress","fixed","resources","hideNavElements","hideNavBranding","drawerDismissalExclusions","actionButtons","onItemClick","onActionButtonClick","onBrandClick","masthead","layout"]);const[$,j]=t.useState(!1),[S,k]=t.useState(!1),C="stretch"===x,O=t.useRef(),T=i.useTheme(),D=(e=>{switch(e){case"bookingsg":return WA;case"mylegacy":return YA;case"ccube":return VA;default:return HA}})(null==T?void 0:T.resourceScheme),I=(null==u?void 0:u.primary)||D.primary,E=null==u?void 0:u.secondary;t.useImperativeHandle(r,(()=>Object.assign(O.current,{dismissDrawer:()=>{_()}})),[$]),t.useEffect((()=>(R(),window.addEventListener("resize",R),()=>{window.removeEventListener("resize",R)})),[]);const _=()=>{j(!1),setTimeout((()=>{k(!1)}),550)},M=e=>$&&-1===p.indexOf(e),R=()=>{window.innerWidth<=ns.tablet&&$&&_()},A=(e,t)=>{v&&(e.preventDefault(),v(t)),M("brand-click")&&_()},N=(e,t)=>{t.onClick?t.onClick(e):m&&(e.preventDefault(),m(t)),!(null==t?void 0:t.subMenu)&&M("item-click")&&_()},B=(e,t)=>{t.args&&t.args.onClick?t.args.onClick(e):b&&(e.preventDefault(),b(t)),M("item-click")&&_()},F=()=>{j(!0),k(!0)},L=()=>{M("close-button-click")&&_()},P=()=>{const t=o.mobile||o.desktop;return t&&t.length>0||g&&(()=>{const e=g.mobile||g.desktop;return!!e&&e.length&&e.some((e=>!e.uncollapsible))})()?e.jsx(DA,Object.assign({"aria-label":"Open nav menu","data-testid":"button__mobile-menu",onClick:F,focusHighlight:!1},{children:e.jsx(IA,{})})):null};return e.jsxs(CA,Object.assign({ref:O,$fixed:d,className:a,id:s||"navbar-wrapper","data-testid":w["data-testid"]||"navbar-wrapper"},{children:[y&&e.jsx($A,{}),e.jsxs(uy.Content,Object.assign({stretch:C},{children:[e.jsxs(OA,Object.assign({$compress:c},{children:[!h&&e.jsxs(EA,Object.assign({$compress:c,"data-id":"brand-container"},{children:[e.jsx(RA,{resources:I,onClick:A,"data-id":"brand-primary","data-testid":"main__brand",type:"primary"}),E&&e.jsxs(e.Fragment,{children:[e.jsx(_A,{$compress:c}),e.jsx(RA,{resources:E,onClick:A,"data-id":"brand-secondary","data-testid":"main__brand-secondary",type:"secondary"})]})]})),!f&&e.jsxs(TA,Object.assign({$hideNavBranding:h},{children:[e.jsx(mN,{items:o.desktop,onItemClick:N,selectedId:l,hideNavBranding:h}),e.jsx(tN,{actionButtons:g,onActionButtonClick:B}),P()]}))]})),!f&&e.jsx(sh,Object.assign({show:S,enableOverlayClick:!0,onOverlayClick:L},{children:e.jsxs(zA,Object.assign({show:$,resources:{primary:I,secondary:E},onClose:L,onBrandClick:A,actionButtons:g,hideNavBranding:h},{children:[e.jsx(mN,{items:o.mobile||o.desktop,onItemClick:N,selectedId:l,mobile:!0}),e.jsx(tN,{actionButtons:g,onActionButtonClick:B,mobile:!0})]}))}))]}))]}))})),vN=kA,yN=i.css`
    color: ${ts.Validation.Orange.Icon};

    svg {
        color: ${ts.Validation.Orange.Icon};
    }

    :hover,
    :active,
    :visited,
    :focus {
        color: ${ts.Validation.Orange.Icon};
        svg {
            color: ${ts.Validation.Orange.Icon};
        }
    }
`,xN=K.default.div`
    position: ${e=>e.$sticky?"sticky":"relative"};
    left: 0;
    top: 0;
    width: 100%;
    transition: ${Ss.Base};
    background: ${ts.Neutral[2]};
    z-index: 25;
    cursor: ${e=>e.$clickable?"pointer":"default"};
`,wN=K.default(uy.Content)`
    display: flex;
`,$N=K.default.div`
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1.5rem 0;
`,jN=K.default.div`
    display: inline-block;
    width: 100%;

    ${ys.getTextStyle("Body","regular")}
    color: ${ts.Neutral[8]};

    p {
        display: inline-block;
    }

    strong {
        ${ys.getFontFamily("Body","semibold")}
        color: ${ts.Neutral[8]};
    }

    a {
        ${ys.getTextStyle("Body","regular")}
        ${yN}
    }

    ${e=>{const t="linear-gradient(to bottom, black 50%, transparent 100%)";if(e.$maxCollapsedHeight)return i.css`
                max-height: ${e.$maxCollapsedHeight}px;
                overflow: hidden;
                -webkit-mask-image: ${t};
                mask-image: ${t};
            `}}
`,SN=K.default(exports.Text.Hyperlink.Default)`
    position: relative;

    ${yN}
`,kN=K.default(ss)`
    margin-right: -1.5rem;
    padding-left: 1rem;
    height: max-content;
`,CN=K.default(m.CrossIcon)`
    height: 1.875rem;
    width: 1.875rem;
    color: ${ts.Neutral[8]};
`,ON=K.default.button`
    display: flex;
    align-items: center;
    gap: 0.25rem;

    margin-top: 0.5rem;

    border: none;
    background: transparent;
    color: ${ts.Validation.Orange.Icon};
    ${ys.getTextStyle("BodySmall","semibold")};

    cursor: pointer;
`,TN=K.default.button`
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`,DN=n=>{var{children:r,visible:i=!0,dismissible:o=!0,sticky:a=!0,onDismiss:s,id:l,forwardedRef:c,maxCollapsedHeight:d,onClick:u,actionButton:f}=n,h=X(n,["children","visible","dismissible","sticky","onDismiss","id","forwardedRef","maxCollapsedHeight","onClick","actionButton"]);const p=h["data-testid"],[g,m]=t.useState(i),{height:b,ref:v}=qe();t.useEffect((()=>{m(i)}),[i]);const y=e=>{e.stopPropagation(),m(!1),o&&s&&s()},x=e=>{f.onClick&&(e.stopPropagation(),f.onClick(e))};if(!g)return null;return e.jsxs(xN,Object.assign({ref:c,$sticky:a,$clickable:!!u,onClick:u},h,{children:[e.jsxs(wN,Object.assign({id:IN("container",l)},{children:[e.jsxs($N,{children:[e.jsx(jN,Object.assign({"data-testid":IN("text-content",p),$maxCollapsedHeight:d&&b>d?d:void 0},{children:e.jsx("div",Object.assign({ref:v},{children:r}))})),f&&e.jsx(ON,Object.assign({id:IN("action-button",l),"data-testid":IN("action-button",p),type:"button"},f,{onClick:x},{children:f.children}))]}),o&&e.jsx(kN,Object.assign({onClick:y,id:IN("dismiss-button",l),"data-testid":IN("dismiss-button",p),focusHighlight:!1,type:"button","aria-label":"Dismiss notification"},{children:e.jsx(CN,{"aria-hidden":!0})}))]})),u&&e.jsx(TN,{"aria-label":"Clickable banner",type:"button"})]}))},IN=(e,t="wrapper")=>`${t}-${e}`,EN=Y.default.forwardRef(((t,n)=>e.jsx(DN,Object.assign({},t,{forwardedRef:n})))),_N=Object.assign(EN,{Link:SN});var MN={exports:{}};
/*! @license DOMPurify 2.5.5 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.5.5/LICENSE */MN.exports=function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,n){return t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},t(e,n)}function n(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function r(e,i,o){return r=n()?Reflect.construct:function(e,n,r){var i=[null];i.push.apply(i,n);var o=new(Function.bind.apply(e,i));return r&&t(o,r.prototype),o},r.apply(null,arguments)}function i(e){return o(e)||a(e)||s(e)||c()}function o(e){if(Array.isArray(e))return l(e)}function a(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function s(e,t){if(e){if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var d=Object.hasOwnProperty,u=Object.setPrototypeOf,f=Object.isFrozen,h=Object.getPrototypeOf,p=Object.getOwnPropertyDescriptor,g=Object.freeze,m=Object.seal,b=Object.create,v="undefined"!=typeof Reflect&&Reflect,y=v.apply,x=v.construct;y||(y=function(e,t,n){return e.apply(t,n)}),g||(g=function(e){return e}),m||(m=function(e){return e}),x||(x=function(e,t){return r(e,i(t))});var w=_(Array.prototype.forEach),$=_(Array.prototype.pop),j=_(Array.prototype.push),S=_(String.prototype.toLowerCase),k=_(String.prototype.toString),C=_(String.prototype.match),O=_(String.prototype.replace),T=_(String.prototype.indexOf),D=_(String.prototype.trim),I=_(RegExp.prototype.test),E=M(TypeError);function _(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return y(e,t,r)}}function M(e){return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return x(e,n)}}function R(e,t,n){var r;n=null!==(r=n)&&void 0!==r?r:S,u&&u(e,null);for(var i=t.length;i--;){var o=t[i];if("string"==typeof o){var a=n(o);a!==o&&(f(t)||(t[i]=a),o=a)}e[o]=!0}return e}function A(e){var t,n=b(null);for(t in e)!0===y(d,e,[t])&&(n[t]=e[t]);return n}function N(e,t){for(;null!==e;){var n=p(e,t);if(n){if(n.get)return _(n.get);if("function"==typeof n.value)return _(n.value)}e=h(e)}function r(e){return console.warn("fallback value for",e),null}return r}var B=g(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),F=g(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),L=g(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),P=g(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),z=g(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),H=g(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),W=g(["#text"]),V=g(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),Y=g(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),U=g(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),K=g(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),q=m(/\{\{[\w\W]*|[\w\W]*\}\}/gm),X=m(/<%[\w\W]*|[\w\W]*%>/gm),G=m(/\${[\w\W]*}/gm),Z=m(/^data-[\-\w.\u00B7-\uFFFF]/),Q=m(/^aria-[\-\w]+$/),J=m(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),ee=m(/^(?:\w+script|data):/i),te=m(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),ne=m(/^html$/i),re=m(/^[a-z][.\w]*(-[.\w]+)+$/i),ie=function(){return"undefined"==typeof window?null:window},oe=function(t,n){if("object"!==e(t)||"function"!=typeof t.createPolicy)return null;var r=null,i="data-tt-policy-suffix";n.currentScript&&n.currentScript.hasAttribute(i)&&(r=n.currentScript.getAttribute(i));var o="dompurify"+(r?"#"+r:"");try{return t.createPolicy(o,{createHTML:function(e){return e},createScriptURL:function(e){return e}})}catch(e){return console.warn("TrustedTypes policy "+o+" could not be created."),null}};function ae(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie(),n=function(e){return ae(e)};if(n.version="2.5.5",n.removed=[],!t||!t.document||9!==t.document.nodeType)return n.isSupported=!1,n;var r=t.document,o=t.document,a=t.DocumentFragment,s=t.HTMLTemplateElement,l=t.Node,c=t.Element,d=t.NodeFilter,u=t.NamedNodeMap,f=void 0===u?t.NamedNodeMap||t.MozNamedAttrMap:u,h=t.HTMLFormElement,p=t.DOMParser,m=t.trustedTypes,b=c.prototype,v=N(b,"cloneNode"),y=N(b,"nextSibling"),x=N(b,"childNodes"),_=N(b,"parentNode");if("function"==typeof s){var M=o.createElement("template");M.content&&M.content.ownerDocument&&(o=M.content.ownerDocument)}var se=oe(m,r),le=se?se.createHTML(""):"",ce=o,de=ce.implementation,ue=ce.createNodeIterator,fe=ce.createDocumentFragment,he=ce.getElementsByTagName,pe=r.importNode,ge={};try{ge=A(o).documentMode?o.documentMode:{}}catch(e){}var me={};n.isSupported="function"==typeof _&&de&&void 0!==de.createHTMLDocument&&9!==ge;var be,ve,ye=q,xe=X,we=G,$e=Z,je=Q,Se=ee,ke=te,Ce=re,Oe=J,Te=null,De=R({},[].concat(i(B),i(F),i(L),i(z),i(W))),Ie=null,Ee=R({},[].concat(i(V),i(Y),i(U),i(K))),_e=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Me=null,Re=null,Ae=!0,Ne=!0,Be=!1,Fe=!0,Le=!1,Pe=!0,ze=!1,He=!1,We=!1,Ve=!1,Ye=!1,Ue=!1,Ke=!0,qe=!1,Xe="user-content-",Ge=!0,Ze=!1,Qe={},Je=null,et=R({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),tt=null,nt=R({},["audio","video","img","source","image","track"]),rt=null,it=R({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),ot="http://www.w3.org/1998/Math/MathML",at="http://www.w3.org/2000/svg",st="http://www.w3.org/1999/xhtml",lt=st,ct=!1,dt=null,ut=R({},[ot,at,st],k),ft=["application/xhtml+xml","text/html"],ht="text/html",pt=null,gt=o.createElement("form"),mt=function(e){return e instanceof RegExp||e instanceof Function},bt=function(t){pt&&pt===t||(t&&"object"===e(t)||(t={}),t=A(t),be=be=-1===ft.indexOf(t.PARSER_MEDIA_TYPE)?ht:t.PARSER_MEDIA_TYPE,ve="application/xhtml+xml"===be?k:S,Te="ALLOWED_TAGS"in t?R({},t.ALLOWED_TAGS,ve):De,Ie="ALLOWED_ATTR"in t?R({},t.ALLOWED_ATTR,ve):Ee,dt="ALLOWED_NAMESPACES"in t?R({},t.ALLOWED_NAMESPACES,k):ut,rt="ADD_URI_SAFE_ATTR"in t?R(A(it),t.ADD_URI_SAFE_ATTR,ve):it,tt="ADD_DATA_URI_TAGS"in t?R(A(nt),t.ADD_DATA_URI_TAGS,ve):nt,Je="FORBID_CONTENTS"in t?R({},t.FORBID_CONTENTS,ve):et,Me="FORBID_TAGS"in t?R({},t.FORBID_TAGS,ve):{},Re="FORBID_ATTR"in t?R({},t.FORBID_ATTR,ve):{},Qe="USE_PROFILES"in t&&t.USE_PROFILES,Ae=!1!==t.ALLOW_ARIA_ATTR,Ne=!1!==t.ALLOW_DATA_ATTR,Be=t.ALLOW_UNKNOWN_PROTOCOLS||!1,Fe=!1!==t.ALLOW_SELF_CLOSE_IN_ATTR,Le=t.SAFE_FOR_TEMPLATES||!1,Pe=!1!==t.SAFE_FOR_XML,ze=t.WHOLE_DOCUMENT||!1,Ve=t.RETURN_DOM||!1,Ye=t.RETURN_DOM_FRAGMENT||!1,Ue=t.RETURN_TRUSTED_TYPE||!1,We=t.FORCE_BODY||!1,Ke=!1!==t.SANITIZE_DOM,qe=t.SANITIZE_NAMED_PROPS||!1,Ge=!1!==t.KEEP_CONTENT,Ze=t.IN_PLACE||!1,Oe=t.ALLOWED_URI_REGEXP||Oe,lt=t.NAMESPACE||st,_e=t.CUSTOM_ELEMENT_HANDLING||{},t.CUSTOM_ELEMENT_HANDLING&&mt(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(_e.tagNameCheck=t.CUSTOM_ELEMENT_HANDLING.tagNameCheck),t.CUSTOM_ELEMENT_HANDLING&&mt(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(_e.attributeNameCheck=t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),t.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(_e.allowCustomizedBuiltInElements=t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Le&&(Ne=!1),Ye&&(Ve=!0),Qe&&(Te=R({},i(W)),Ie=[],!0===Qe.html&&(R(Te,B),R(Ie,V)),!0===Qe.svg&&(R(Te,F),R(Ie,Y),R(Ie,K)),!0===Qe.svgFilters&&(R(Te,L),R(Ie,Y),R(Ie,K)),!0===Qe.mathMl&&(R(Te,z),R(Ie,U),R(Ie,K))),t.ADD_TAGS&&(Te===De&&(Te=A(Te)),R(Te,t.ADD_TAGS,ve)),t.ADD_ATTR&&(Ie===Ee&&(Ie=A(Ie)),R(Ie,t.ADD_ATTR,ve)),t.ADD_URI_SAFE_ATTR&&R(rt,t.ADD_URI_SAFE_ATTR,ve),t.FORBID_CONTENTS&&(Je===et&&(Je=A(Je)),R(Je,t.FORBID_CONTENTS,ve)),Ge&&(Te["#text"]=!0),ze&&R(Te,["html","head","body"]),Te.table&&(R(Te,["tbody"]),delete Me.tbody),g&&g(t),pt=t)},vt=R({},["mi","mo","mn","ms","mtext"]),yt=R({},["foreignobject","annotation-xml"]),xt=R({},["title","style","font","a","script"]),wt=R({},F);R(wt,L),R(wt,P);var $t=R({},z);R($t,H);var jt=function(e){var t=_(e);t&&t.tagName||(t={namespaceURI:lt,tagName:"template"});var n=S(e.tagName),r=S(t.tagName);return!!dt[e.namespaceURI]&&(e.namespaceURI===at?t.namespaceURI===st?"svg"===n:t.namespaceURI===ot?"svg"===n&&("annotation-xml"===r||vt[r]):Boolean(wt[n]):e.namespaceURI===ot?t.namespaceURI===st?"math"===n:t.namespaceURI===at?"math"===n&&yt[r]:Boolean($t[n]):e.namespaceURI===st?!(t.namespaceURI===at&&!yt[r])&&!(t.namespaceURI===ot&&!vt[r])&&!$t[n]&&(xt[n]||!wt[n]):!("application/xhtml+xml"!==be||!dt[e.namespaceURI]))},St=function(e){j(n.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){try{e.outerHTML=le}catch(t){e.remove()}}},kt=function(e,t){try{j(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){j(n.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!Ie[e])if(Ve||Ye)try{St(t)}catch(e){}else try{t.setAttribute(e,"")}catch(e){}},Ct=function(e){var t,n;if(We)e="<remove></remove>"+e;else{var r=C(e,/^[\r\n\t ]+/);n=r&&r[0]}"application/xhtml+xml"===be&&lt===st&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");var i=se?se.createHTML(e):e;if(lt===st)try{t=(new p).parseFromString(i,be)}catch(e){}if(!t||!t.documentElement){t=de.createDocument(lt,"template",null);try{t.documentElement.innerHTML=ct?le:i}catch(e){}}var a=t.body||t.documentElement;return e&&n&&a.insertBefore(o.createTextNode(n),a.childNodes[0]||null),lt===st?he.call(t,ze?"html":"body")[0]:ze?t.documentElement:a},Ot=function(e){return ue.call(e.ownerDocument||e,e,d.SHOW_ELEMENT|d.SHOW_COMMENT|d.SHOW_TEXT|d.SHOW_PROCESSING_INSTRUCTION|d.SHOW_CDATA_SECTION,null,!1)},Tt=function(e){return e instanceof h&&("string"!=typeof e.nodeName||"string"!=typeof e.textContent||"function"!=typeof e.removeChild||!(e.attributes instanceof f)||"function"!=typeof e.removeAttribute||"function"!=typeof e.setAttribute||"string"!=typeof e.namespaceURI||"function"!=typeof e.insertBefore||"function"!=typeof e.hasChildNodes)},Dt=function(t){return"object"===e(l)?t instanceof l:t&&"object"===e(t)&&"number"==typeof t.nodeType&&"string"==typeof t.nodeName},It=function(e,t,r){me[e]&&w(me[e],(function(e){e.call(n,t,r,pt)}))},Et=function(e){var t;if(It("beforeSanitizeElements",e,null),Tt(e))return St(e),!0;if(I(/[\u0080-\uFFFF]/,e.nodeName))return St(e),!0;var r=ve(e.nodeName);if(It("uponSanitizeElement",e,{tagName:r,allowedTags:Te}),e.hasChildNodes()&&!Dt(e.firstElementChild)&&(!Dt(e.content)||!Dt(e.content.firstElementChild))&&I(/<[/\w]/g,e.innerHTML)&&I(/<[/\w]/g,e.textContent))return St(e),!0;if("select"===r&&I(/<template/i,e.innerHTML))return St(e),!0;if(7===e.nodeType)return St(e),!0;if(Pe&&8===e.nodeType&&I(/<[/\w]/g,e.data))return St(e),!0;if(!Te[r]||Me[r]){if(!Me[r]&&Mt(r)){if(_e.tagNameCheck instanceof RegExp&&I(_e.tagNameCheck,r))return!1;if(_e.tagNameCheck instanceof Function&&_e.tagNameCheck(r))return!1}if(Ge&&!Je[r]){var i=_(e)||e.parentNode,o=x(e)||e.childNodes;if(o&&i)for(var a=o.length-1;a>=0;--a){var s=v(o[a],!0);s.__removalCount=(e.__removalCount||0)+1,i.insertBefore(s,y(e))}}return St(e),!0}return e instanceof c&&!jt(e)?(St(e),!0):"noscript"!==r&&"noembed"!==r&&"noframes"!==r||!I(/<\/no(script|embed|frames)/i,e.innerHTML)?(Le&&3===e.nodeType&&(t=e.textContent,t=O(t,ye," "),t=O(t,xe," "),t=O(t,we," "),e.textContent!==t&&(j(n.removed,{element:e.cloneNode()}),e.textContent=t)),It("afterSanitizeElements",e,null),!1):(St(e),!0)},_t=function(e,t,n){if(Ke&&("id"===t||"name"===t)&&(n in o||n in gt))return!1;if(Ne&&!Re[t]&&I($e,t));else if(Ae&&I(je,t));else if(!Ie[t]||Re[t]){if(!(Mt(e)&&(_e.tagNameCheck instanceof RegExp&&I(_e.tagNameCheck,e)||_e.tagNameCheck instanceof Function&&_e.tagNameCheck(e))&&(_e.attributeNameCheck instanceof RegExp&&I(_e.attributeNameCheck,t)||_e.attributeNameCheck instanceof Function&&_e.attributeNameCheck(t))||"is"===t&&_e.allowCustomizedBuiltInElements&&(_e.tagNameCheck instanceof RegExp&&I(_e.tagNameCheck,n)||_e.tagNameCheck instanceof Function&&_e.tagNameCheck(n))))return!1}else if(rt[t]);else if(I(Oe,O(n,ke,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==T(n,"data:")||!tt[e])if(Be&&!I(Se,O(n,ke,"")));else if(n)return!1;return!0},Mt=function(e){return"annotation-xml"!==e&&C(e,Ce)},Rt=function(t){var r,i,o,a;It("beforeSanitizeAttributes",t,null);var s=t.attributes;if(s){var l={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:Ie};for(a=s.length;a--;){var c=r=s[a],d=c.name,u=c.namespaceURI;if(i="value"===d?r.value:D(r.value),o=ve(d),l.attrName=o,l.attrValue=i,l.keepAttr=!0,l.forceKeepAttr=void 0,It("uponSanitizeAttribute",t,l),i=l.attrValue,!l.forceKeepAttr&&(kt(d,t),l.keepAttr))if(Fe||!I(/\/>/i,i))if(Pe&&I(/((--!?|])>)|<\/(style|title)/i,i))kt(d,t);else{Le&&(i=O(i,ye," "),i=O(i,xe," "),i=O(i,we," "));var f=ve(t.nodeName);if(_t(f,o,i)){if(!qe||"id"!==o&&"name"!==o||(kt(d,t),i=Xe+i),se&&"object"===e(m)&&"function"==typeof m.getAttributeType)if(u);else switch(m.getAttributeType(f,o)){case"TrustedHTML":i=se.createHTML(i);break;case"TrustedScriptURL":i=se.createScriptURL(i)}try{u?t.setAttributeNS(u,d,i):t.setAttribute(d,i),Tt(t)?St(t):$(n.removed)}catch(e){}}}else kt(d,t)}It("afterSanitizeAttributes",t,null)}},At=function e(t){var n,r=Ot(t);for(It("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)It("uponSanitizeShadowNode",n,null),Et(n)||(n.content instanceof a&&e(n.content),Rt(n));It("afterSanitizeShadowDOM",t,null)};return n.sanitize=function(i){var o,s,c,d,u,f=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if((ct=!i)&&(i="\x3c!--\x3e"),"string"!=typeof i&&!Dt(i)){if("function"!=typeof i.toString)throw E("toString is not a function");if("string"!=typeof(i=i.toString()))throw E("dirty is not a string, aborting")}if(!n.isSupported){if("object"===e(t.toStaticHTML)||"function"==typeof t.toStaticHTML){if("string"==typeof i)return t.toStaticHTML(i);if(Dt(i))return t.toStaticHTML(i.outerHTML)}return i}if(He||bt(f),n.removed=[],"string"==typeof i&&(Ze=!1),Ze){if(i.nodeName){var h=ve(i.nodeName);if(!Te[h]||Me[h])throw E("root node is forbidden and cannot be sanitized in-place")}}else if(i instanceof l)1===(s=(o=Ct("\x3c!----\x3e")).ownerDocument.importNode(i,!0)).nodeType&&"BODY"===s.nodeName||"HTML"===s.nodeName?o=s:o.appendChild(s);else{if(!Ve&&!Le&&!ze&&-1===i.indexOf("<"))return se&&Ue?se.createHTML(i):i;if(!(o=Ct(i)))return Ve?null:Ue?le:""}o&&We&&St(o.firstChild);for(var p=Ot(Ze?i:o);c=p.nextNode();)3===c.nodeType&&c===d||Et(c)||(c.content instanceof a&&At(c.content),Rt(c),d=c);if(d=null,Ze)return i;if(Ve){if(Ye)for(u=fe.call(o.ownerDocument);o.firstChild;)u.appendChild(o.firstChild);else u=o;return(Ie.shadowroot||Ie.shadowrootmod)&&(u=pe.call(r,u,!0)),u}var g=ze?o.outerHTML:o.innerHTML;return ze&&Te["!doctype"]&&o.ownerDocument&&o.ownerDocument.doctype&&o.ownerDocument.doctype.name&&I(ne,o.ownerDocument.doctype.name)&&(g="<!DOCTYPE "+o.ownerDocument.doctype.name+">\n"+g),Le&&(g=O(g,ye," "),g=O(g,xe," "),g=O(g,we," ")),se&&Ue?se.createHTML(g):g},n.setConfig=function(e){bt(e),He=!0},n.clearConfig=function(){pt=null,He=!1},n.isValidAttribute=function(e,t,n){pt||bt({});var r=ve(e),i=ve(t);return _t(r,i,n)},n.addHook=function(e,t){"function"==typeof t&&(me[e]=me[e]||[],j(me[e],t))},n.removeHook=function(e){if(me[e])return $(me[e])},n.removeHooks=function(e){me[e]&&(me[e]=[])},n.removeAllHooks=function(){me={}},n}var se=ae();return se}();var RN=Ii(MN.exports);const AN=K.default.div`
    display: flex;
    flex-direction: column;
`,NN=K.default.div`
    display: flex;
    flex-direction: row;
    align-self: center;
    gap: 0.5rem;
`,BN=K.default(Vy)`
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

    ${is.MaxWidth.mobileM} {
        padding: 0 0.5rem;
    }
`,FN=K.default(qs.Small)`
    margin: 2rem 0rem;
`,LN=K.default.nav`
    display: flex;
`,PN=K.default.div`
    display: flex;
    align-items: center;
    align-self: flex-start;
    overflow: auto;

    ${is.MaxWidth.tablet} {
        align-self: center;
    }
`,zN=K.default.div`
    display: inline-flex;
    padding: 0.125rem;
    align-items: center;
`,HN=K.default(ss)`
    display: flex;
    padding: 0.625rem;
    justify-content: center;
    align-items: center;
    border-radius: 0.25rem;
    color: ${ts.Primary};

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    &:disabled {
        color: ${ts.Neutral[4]};
        cursor: not-allowed;
    }
    :active,
    :focus {
        outline: none;
        box-shadow: inset 0px 0px 4px 1px ${ts.Accent.Light[1]};
    }
`,WN=K.default(ss)`
    display: flex;
    padding: 0.625rem;
    justify-content: center;
    align-items: center;
    border-radius: 0.25rem;
    color: ${ts.Primary};

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    &:disabled {
        color: ${ts.Neutral[4]};
        cursor: not-allowed;
    }
    :active,
    :focus {
        outline: none;
        box-shadow: inset 0px 0px 4px 1px ${ts.Accent.Light[1]};
    }
    ${e=>"left"===e.$position?i.css`
                margin-right: 0.625rem;
                margin-left: 0rem;
            `:i.css`
                margin-right: 0rem;
                margin-left: 0.625rem;
            `}

    ${is.MaxWidth.mobileS} {
        margin-right: 0rem;
        margin-left: 0rem;
    }
`,VN=K.default(qs.Default)`
    background: ${e=>e.$selected?ts.Primary:ts.Neutral[8]};
    border: 1px solid
        ${e=>e.$selected?ts.Primary:ts.Neutral[5]};
    color: ${e=>e.$selected?ts.Neutral[8]:ts.Neutral[1]};

    min-width: 2.5rem;
    height: 2.5rem;
    text-align: center;
    padding: 0.4rem 0.5rem;
    border-radius: 0.25rem;
    margin: 0.25rem;
    cursor: pointer;

    span {
        color: ${e=>e.$selected?ts.Neutral[8]:ts.Neutral[1]};
        ${e=>e.$selected?i.css`
                    ${ys.getTextStyle("Body",700)};
                `:i.css`
                    ${ys.getTextStyle("Body",400)};
                `}
    }
    :hover {
        box-shadow: none;

        background: ${e=>e.$selected?ts.Primary:ts.Accent.Light[5]};
        border: 1px solid
            ${e=>e.$selected?ts.Primary:ts.Accent.Light[5]};
        span {
            color: ${e=>e.$selected?ts.Neutral[8]:ts.Primary};
            ${e=>e.$selected?i.css`
                        ${ys.getTextStyle("Body",700)};
                    `:i.css`
                        ${ys.getTextStyle("Body",600)};
                    `}
        }
    }

    :active,
    :focus {
        background: ${e=>e.$selected?ts.Primary:ts.Neutral[8]};
        outline: none;
        box-shadow: inset 0px 0px 4px 1px ${ts.Accent.Light[1]};
        span {
            color: ${e=>e.$selected?ts.Neutral[8]:ts.Primary};

            ${e=>e.$selected?i.css`
                        ${ys.getTextStyle("Body",700)};
                    `:i.css`
                        ${ys.getTextStyle("Body",400)};
                    `}
        }
    }
`;K.default(ss)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${ts.Neutral[3]};
    padding: 0.4rem 0.5rem;
    border-radius: 0.25rem;
    white-space: nowrap;

    svg {
        height: 1.25rem;
        width: 1.25rem;
    }

    :hover {
        svg {
            color: ${ts.Neutral[3]};
        }
    }

    :active,
    :focus {
        outline: none;
        box-shadow: inset 0px 0px 4px 1px ${ts.Accent.Light[1]};
    }
`;const YN=K.default.div`
    display: flex;
    cursor: pointer;
    min-width: 2.5rem;
    height: 2.5rem;
    border-radius: 0.25rem;
    justify-content: center;
    align-items: center;
    position: relative;
`,UN=K.default.div`
    display: flex;
    justify-content: center;
    margin: 0.625rem;
    align-items: center;
    color: ${ts.Neutral[1]};

    display: flex;
    justify-content: center;
`,KN=K.default(exports.Text.Body)`
    white-space: nowrap;
`,qN=K.default(exports.Text.Body)`
    white-space: nowrap;
    margin: 0 1rem;
`,XN=K.default(Vy)`
    ${ys.getTextStyle("Body",400)};
    justify-content: center;
    width: 3.5rem;
    height: 2.5rem;
    border-radius: 0.25rem;
    border: 1px solid ${ts.Neutral[5]};
    padding: 0.5rem 0.5rem;

    input {
        text-align: center;

        ::placeholder {
            ${ys.getTextStyle("XSmall",400)};
        }
    }
`,GN=K.default.div`
    ${ys.getTextStyle("XSmall",400)};

    background-color: ${ts.Primary};
    border: none;
    border-radius: 0.25rem;
    color: ${ts.Neutral[8]};
    align-items: center;
    position: fixed;
    display: flex;
    justify-content: center;
    margin-top: 6rem;
    padding: 0.25rem 0.75rem;
`,ZN=K.default.div`
    width: 9.2rem;
    margin-left: 0.5rem;
`,QN=Y.default.forwardRef((({id:n,"data-testid":r,className:i,pageSize:o=10,totalItems:a,activePage:s,pageSizeOptions:l=JN,showFirstAndLastNav:c,showPageSizeChanger:d=!1,onPageChange:u,onPageSizeChange:f},g)=>{const m=Tl.useMediaQuery({maxWidth:ns.mobileL}),b=l,[v,y]=t.useState(!1),[x,w]=t.useState(!1),[$,j]=t.useState(""),[S,k]=t.useState(b&&b.length>=1?b[0]:null),[C,O]=t.useState(!m&&d&&S?S.value:o),T=Math.ceil(a/C),D=1===s,I=s===T,E=s>1?()=>V(1):void 0,_=s<T?()=>V(T):void 0,M=s>1?()=>V(s-1):void 0,R=s<T?()=>V(parseInt(s.toString())+1):void 0,A=e=>e?()=>Z():()=>X(),N=e=>e?()=>Q():()=>G();t.useEffect((()=>{s&&H(s)}),[s]),t.useEffect((()=>{var e;O(o),k(null!==(e=b.find((e=>e.value===o)))&&void 0!==e?e:null)}),[o]);const H=e=>{j(e.toString())},W=()=>{y(!1),w(!1)},V=e=>{u&&(u(e),H(e))},Y=()=>{const e=Math.min(T,s+5);V(e),H(e),y(!0),w(!1)},U=()=>{const e=Math.max(1,s-5);V(e),H(e),y(!1),w(!0)},K=e=>{const t=e.target.value;if(void 0===t||0===t.length)j("");else if(/^[0-9]+$/.test(t)){const e=parseInt(t.replace(/[^0-9]/g,""));H(Math.max(1,Math.min(T,e)))}else j(t.replace(/[^0-9]/g,""))},q=e=>{e.preventDefault(),$&&u(parseInt($))},X=()=>{y(!0)},G=()=>{y(!1)},Z=()=>{w(!0)},Q=()=>{w(!1)},J=(t,n,r)=>e.jsxs(YN,{children:[e.jsx(HN,Object.assign({focusHighlight:!1,focusOutline:"browser","aria-label":t?"Previous 5 pages":"Next 5 pages",onMouseOver:A(t),onMouseOut:N(t),onFocus:A(t),onBlur:N(t),onClick:t?U:Y},{children:t&&x?e.jsx(B.Chevron2LeftIcon,{"aria-hidden":!0}):n&&v?e.jsx(F.Chevron2RightIcon,{"aria-hidden":!0}):e.jsx(z.EllipsisHorizontalIcon,{"aria-hidden":!0})})),t&&x&&e.jsx(GN,{children:"Previous 5 pages"}),n&&v&&e.jsx(GN,{children:"Next 5 pages"})]},r);return e.jsxs(LN,Object.assign({className:i,ref:g,id:n||"pagination-wrapper","data-testid":r||"pagination","aria-label":"Pagination"},{children:[e.jsx(PN,{children:e.jsxs(zN,{children:[c&&e.jsx(WN,Object.assign({onClick:E,disabled:D,focusHighlight:!1,$position:"left","aria-label":"First page",focusOutline:"browser"},{children:e.jsx(L.ChevronLineLeftIcon,{"aria-hidden":!0})})),e.jsx(WN,Object.assign({onClick:M,disabled:D,focusHighlight:!1,$position:"left","aria-label":"Previous page",focusOutline:"browser"},{children:e.jsx(p.ChevronLeftIcon,{"aria-hidden":!0})})),m?e.jsxs(UN,{children:[e.jsx("form",Object.assign({onSubmit:q},{children:e.jsx(XN,{value:$,onChange:K,autoComplete:"off",type:"numeric",id:(n||"pagination")+"-input","data-testid":(r||"pagination")+"-input"})})),e.jsx(qN,{children:"/"}),e.jsx(KN,{children:T})]}):[...Array(T)].map(((t,n)=>{const r=n+1,i=T-5,o=s===r;if(T<=7)return e.jsx(VN,Object.assign({onClick:()=>V(r),$selected:o,"aria-label":"Page "+r,"aria-current":!!o&&"page",onMouseOver:W,onFocus:W},{children:r}),r);const a=s+1>5&&2===r,l=s-1<=i&&r===T-1-1;return a||l?J(a,l,r):r<=5&&s+1<=5||r<=1||r===s||r<=s+1&&r>=s-1-1||r>i&&s-1>i||r>T-1?e.jsx(VN,Object.assign({onClick:()=>V(r),$selected:o,"aria-label":"Page "+r,"aria-current":!!o&&"page",onMouseOver:W,onFocus:W},{children:r}),r):null})),e.jsx(WN,Object.assign({onClick:R,disabled:I,focusHighlight:!1,$position:"right","aria-label":"Next page",focusOutline:"browser"},{children:e.jsx(h.ChevronRightIcon,{"aria-hidden":!0})})),c&&e.jsx(WN,Object.assign({onClick:_,disabled:I,focusHighlight:!1,$position:"right","aria-label":"Last page",focusOutline:"browser"},{children:e.jsx(P.ChevronLineRightIcon,{"aria-hidden":!0})}))]})}),d&&!m&&e.jsx(ZN,{children:e.jsx(pI,{options:b,valueExtractor:e=>e.value,listExtractor:e=>e.label,displayValueExtractor:e=>e.label,selectedOption:S,onSelectOption:e=>{k(e);const t=e.value,n=Math.ceil(a/t);O(t);f&&f(s>=n?n:s,t)}})})]}))})),JN=[{value:10,label:"10 / page"},{value:20,label:"20 / page"},{value:30,label:"30 / page"}],eB=K.default.div`
    border-radius: 1rem;
    padding: 0.125rem 0.5rem;
    width: fit-content;
    max-width: 100%;
    ${ys.getTextStyle("XSmall","semibold")}
    display: flex;
    align-items: center;
    gap: 0.25rem;

    svg {
        flex-shrink: 0;
    }

    ${e=>{let t,n,r;if("solid"===e.$type)switch(r=ts.Neutral[8],e.$color){case"grey":t=ts.Neutral[3],n=ts.Neutral[3];break;case"green":t=ts.Validation.Green.Text,n=ts.Validation.Green.Text;break;case"yellow":t=ts.Validation.Orange.Text,n=ts.Validation.Orange.Text;break;case"red":t=ts.Validation.Red.Text,n=ts.Validation.Red.Text;break;case"blue":t=ts.Validation.Blue.Text,n=ts.Validation.Blue.Text;break;default:t=ts.Neutral[1],n=ts.Neutral[1]}else switch(e.$color){case"grey":t=ts.Neutral[6],n=ts.Neutral[4],r=ts.Neutral[3];break;case"green":t=ts.Validation.Green.Background,n=ts.Validation.Green.Border,r=ts.Validation.Green.Text;break;case"yellow":t=ts.Validation.Orange.Background,n=ts.Validation.Orange.Border,r=ts.Validation.Orange.Text;break;case"red":t=ts.Validation.Red.Background,n=ts.Validation.Red.Border,r=ts.Validation.Red.Text;break;case"blue":t=ts.Validation.Blue.Background,n=ts.Validation.Blue.Border,r=ts.Validation.Blue.Text;break;default:t=ts.Neutral[8],n=ts.Neutral[5],r=ts.Neutral[1]}return i.css`
            background: ${t};
            border: 1px solid ${n};
            color: ${r};
        `}}
`,tB=K.default.div`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-align: left;
`,nB=t=>{var{type:n,colorType:r="black",children:i,icon:o}=t,a=X(t,["type","colorType","children","icon"]);return e.jsxs(eB,Object.assign({$type:n,$color:r},a,{children:[o,e.jsx(tB,{children:i})]}))},rB=K.default.div`
    max-width: 30rem;
    pointer-events: auto;
    position: absolute;

    ${e=>e.$visible?i.css`
            visibility: visible;
            opacity: 1;
            transition: ${Ss.Base};
            z-index: 50;
        `:i.css`
            visibility: hidden;
            opacity: 0;
            transition: ${Ss.Base};
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

	${is.MaxWidth.mobileL} {
        display: none;
    }
`,iB=K.default(jh)`
    padding: 3.5rem 1.25rem 2.5rem;
`,oB=K.default.div`
    position: relative;
    width: fit-content;
`,aB=K.default.button`
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
`,sB=K.default.div`
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }
`,lB=n=>{var{children:r,visible:i,onMobileClose:o}=n,a=X(n,["children","visible","onMobileClose"]);const s=a["data-testid"]||"popover",[l,c]=t.useState("none"),d=t.useRef(null),u=Tl.useMediaQuery({maxWidth:ns.mobileL}),f=t.useRef(l);t.useEffect((()=>(g(),window.addEventListener("resize",eu(h,300)),()=>{window.removeEventListener("resize",eu(h,300))})),[]);const h=()=>{g()},p=()=>{o&&o()},g=()=>{const e=m();var t;e&&(t=e,f.current=t,c(t))},m=()=>{if(d.current){const e=d.current.getBoundingClientRect(),t=24,n=e.y<t,r=window.innerWidth-t;return e.x<t?n?"top-left":"left":e.x+e.width>r?n?"top-right":"right":("top-left"===f.current||"left"===f.current)&&e.x-e.width/2>t||("top-right"===f.current||"right"===f.current)&&e.x+2*e.width<r?n?"top-center":"none":n?"top-center":void 0}},b=()=>"string"==typeof r?e.jsx(exports.Text.BodySmall,{children:r}):r;return e.jsxs(e.Fragment,{children:[e.jsx(rB,Object.assign({ref:d,"data-testid":s,$visible:i,$offset:l},a,{children:e.jsx(Ed,{children:b()})})),u&&e.jsx(xh,Object.assign({show:i,onOverlayClick:p},{children:e.jsx(iB,Object.assign({onClose:p},{children:e.jsx(sB,{children:b()})}))}))]})},cB=K.default.div`
    position: relative;
    width: 100%;

    margin: 2rem 0;

    ${is.MaxWidth.desktopM} {
        margin: 1.5rem 0;
    }

    ${is.MaxWidth.tablet} {
        margin: 1rem 0;
    }
`,dB=K.default.div`
    display: flex;
    flex-basis: 0;
    justify-content: space-between;
    width: 100%;
`,uB=K.default.div`
    height: 0.25rem;
    margin-bottom: 0.5rem;
    border-radius: 0.25rem;
    ${e=>{const{highlighted:t}=e;return`\n            background-color: ${(t?ts.Accent.Light[1]:ts.Neutral[6])(e)};\n        `}};
`,fB=K.default(exports.Text.BodySmall)`
    overflow-wrap: anywhere;
    ${e=>{const{highlighted:t}=e;return`color: ${(t?ts.Primary:ts.Neutral[3])(e)};`}};
`,hB=K.default(exports.Text.BodySmall)`
    overflow-wrap: anywhere;
    color: ${ts.Neutral[1]};
`,pB=K.default.div`
    display: flex;
    flex-direction: column;
    flex: 1;

    &:not(:last-child) {
        margin-right: ${"0.5rem"};
    }
`;var gB=function(e){return function(t){return null==e?void 0:e[t]}}({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),mB=Na,bB=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,vB=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");var yB=function(e){return(e=mB(e))&&e.replace(bB,gB).replace(vB,"")},xB=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;var wB=function(e){return e.match(xB)||[]},$B=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;var jB=function(e){return $B.test(e)},SB="\\ud800-\\udfff",kB="\\u2700-\\u27bf",CB="a-z\\xdf-\\xf6\\xf8-\\xff",OB="A-Z\\xc0-\\xd6\\xd8-\\xde",TB="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",DB="["+TB+"]",IB="\\d+",EB="["+kB+"]",_B="["+CB+"]",MB="[^"+SB+TB+IB+kB+CB+OB+"]",RB="(?:\\ud83c[\\udde6-\\uddff]){2}",AB="[\\ud800-\\udbff][\\udc00-\\udfff]",NB="["+OB+"]",BB="(?:"+_B+"|"+MB+")",FB="(?:"+NB+"|"+MB+")",LB="(?:['’](?:d|ll|m|re|s|t|ve))?",PB="(?:['’](?:D|LL|M|RE|S|T|VE))?",zB="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",HB="[\\ufe0e\\ufe0f]?",WB=HB+zB+("(?:\\u200d(?:"+["[^"+SB+"]",RB,AB].join("|")+")"+HB+zB+")*"),VB="(?:"+[EB,RB,AB].join("|")+")"+WB,YB=RegExp([NB+"?"+_B+"+"+LB+"(?="+[DB,NB,"$"].join("|")+")",FB+"+"+PB+"(?="+[DB,NB+BB,"$"].join("|")+")",NB+"?"+BB+"+"+LB,NB+"+"+PB,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",IB,VB].join("|"),"g");var UB=wB,KB=jB,qB=Na,XB=function(e){return e.match(YB)||[]};var GB=UD,ZB=yB,QB=function(e,t,n){return e=qB(e),void 0===(t=n?void 0:t)?KB(e)?XB(e):UB(e):e.match(t)||[]},JB=RegExp("['’]","g");var eF=Ii(function(e){return function(t){return GB(QB(ZB(t).replace(JB,"")),e,"")}}((function(e,t,n){return e+(n?"-":"")+t.toLowerCase()})));const tF=K.default.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 1.5rem;
    width: 1.5rem;
    position: relative;
    border-radius: 50%;
    border: 2px solid ${ts.Accent.Light[2]};

    ${e=>{if(e.$disabled)return`\n\t\t\t\tborder: 2px solid ${ts.Neutral[4](e)};\n\t\t\t`}}
`,nF=K.default.input`
    position: absolute;
    height: 100%;
    width: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    z-index: 1;

    /* Hide appearance but keep it focusable using keyboard interactions */
    appearance: none;
    background: transparent;
    border: none;
`,rF=K.default.div`
    height: 0.75rem;
    width: 0.75rem;
    opacity: ${e=>e.$selected?1:0};
    transition: all 200ms ease-in-out;
    background: ${e=>e.$disabled?ts.Neutral[4](e):ts.Primary(e)};
    border-radius: 50%;
    border: 1px solid transparent;
`,iF=K.default.div`
    display: flex;
    position: ${e=>e.$fixed?"fixed":"relative"};
    width: fit-content;
`,oF=K.default.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    width: 8.5rem;
    border: 1px solid ${ts.Neutral[5]};
    background-color: ${ts.Accent.Light[6]};
    padding: 0.5rem 0 1.5rem 0;
`,aF=K.default(oF)`
    height: 100vh;
    left: 0;
    top: 0;
    ${is.MaxWidth.mobileL} {
        display: none;
        visibility: hidden;
    }
`,sF=K.default(oF)`
    display: none;
    visibility: hidden;
    ${is.MaxWidth.mobileL} {
        display: none; // NOTE: Since mobile view not supported yet
    }
`,lF=K.default(Ti.ul)`
    display: flex;
    flex-direction: column;
    overflow: auto;
    left: 8.5rem;
    top: 0;
    width: 15rem;
    z-index: 10;
    padding: 1rem 0.5rem;
    background-color: ${ts.Accent.Light[6]};
    border-radius: 0 8px 8px 0;
    border: 1px solid ${ts.Neutral[5]};

    ${e=>e.$showDrawer?i.css`
                  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
              `:i.css`
                  border: 0;
                  padding: 0;
              `};
`,cF=K.default.li`
    width: 100%;
`,dF=K.default(qs.Default)`
    width: 100%;
    height: unset;

    span {
        display: flex;
        flex-direction: column;
        align-items: center;

        svg {
            height: 1.25rem;
            width: 1.25rem;
            margin-top: 0.25rem;
        }

        span {
            ${ys.getFontFamily("XSmall","regular")}
            font-size: 0.75rem !important;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }
    }

    :hover,
    :focus {
        span {
            div {
                background-color: ${ts.Accent.Light[5]};
                color: ${ts.Primary} !important;
            }

            span {
                ${ys.getFontFamily("XSmall","semibold")}
                color: ${ts.Primary} !important;
            }
        }
    }

    ${e=>e.$highlight&&i.css`
            span {
                div {
                    background-color: ${ts.Accent.Light[5]};
                }

                span {
                    ${ys.getFontFamily("XSmall","semibold")}
                    color: ${ts.Primary};
                }
            }
        `}
`,uF=K.default.div`
    height: 1.75rem;
    width: 3.25rem;
    border-radius: 0.5rem;
    margin-bottom: 0.25rem;
`,fF=K.default(exports.Text.XSmall)``,hF=t.createContext({selectedItem:void 0,currentItem:void 0,previouslySelectedItemId:void 0,setCurrentItem:()=>{},setPreviouslySelectedItemId:()=>{},setSelectedItem:()=>{}}),pF=K.default.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    list-style: none;
`,gF=K.default.li`
    margin: 0.5rem 0;
    width: 6.5rem;
    height: 1px;
    background-color: ${ts.Neutral[5]};
`,mF=K.default(Ti.li)``,bF=K.default(qs.Default)`
    justify-content: flex-start;
    width: 100%;
    height: unset;
    padding: 0.75rem 1rem;
    border-radius: 8px;

    span {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        ${ys.getFontFamily("H5","semibold")}
        font-size: 1rem !important;
        color: ${ts.Neutral[1]} !important;
    }

    :hover,
    :focus {
        background-color: ${ts.Accent.Light[4]};

        span {
            ${e=>e.$noChildren&&i.css`
                    color: ${ts.Primary} !important;
                `}
        }
    }

    ${e=>e.$highlight&&i.css`
            background-color: ${ts.Accent.Light[4]};
        `}
`,vF=K.default(Ti.div)`
    margin: 0.125rem 0 0.125rem 0.5rem;
    overflow: hidden;
`,yF=K.default.div`
    align-self: center;
    padding-left: 0.5rem;
`,xF=K.default(r.ChevronUpIcon)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: ${ts.Neutral[3]};
    transform: rotate(${e=>e.$expanded?0:180}deg);
    transition: transform 300ms ease-in-out;
`,wF=K.default.div`
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-align: initial;
`,$F=K.default(Ti.ul)``,jF=K.default.li``,SF=K.default(qs.Default)`
    width: 100%;
    height: unset;
    justify-content: flex-start;
    border-radius: 0.5rem;
    outline-offset: -0.125rem;

    span {
        ${ys.getFontFamily("H5","regular")}
        font-size: 1rem !important;
        color: ${ts.Neutral[1]} !important;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        text-align: initial;
    }

    :hover,
    :focus {
        background-color: ${ts.Accent.Light[5]};
        span {
            ${ys.getFontFamily("H5","semibold")}
            color: ${ts.Primary} !important;
        }
    }
`,kF=Object.assign((n=>{var{fixed:r=!0,children:i}=n,o=X(n,["fixed","children"]);const a=t.useRef(null),[s,l]=t.useState(void 0),[c,d]=t.useState(void 0),[u,f]=t.useState(void 0),[h,p]=t.useState(!1),g=t.useMemo((()=>({currentItem:s,selectedItem:c,previouslySelectedItemId:u,setCurrentItem:l,setSelectedItem:d,setPreviouslySelectedItemId:f})),[s,c,u,l,d,f]),m=di({width:h?240:0,borderRightWidth:h?1:0,borderTopWidth:h?1:0,borderBottomWidth:h?1:0,borderLeftWidth:0});return fc("click",(e=>{a.current&&!a.current.contains(e.target)&&(d({itemId:u||(c?c.itemId:void 0),content:void 0}),f(void 0),l(void 0))}),"window",!0),t.useEffect((()=>{p(c&&!!c.content||s&&!!s.content)}),[s,c]),e.jsx(hF.Provider,Object.assign({value:g},{children:e.jsxs(iF,Object.assign({$fixed:r},o,{ref:a,onMouseLeave:()=>{l(void 0)}},{children:[e.jsx(aF,{children:i}),e.jsx(lF,Object.assign({style:m,$showDrawer:h,"data-testid":"sidenav-drawer"},{children:s&&s.content||c&&c.content})),e.jsx(sF,{})]}))}))}),{Group:t=>{var{separator:n,children:r}=t,i=X(t,["separator","children"]);return e.jsxs(pF,Object.assign({},i,{children:[r,n&&e.jsx(gF,{"data-testid":"divider"})]}))},Item:n=>{var{children:r,icon:i,title:o,onClick:a}=n,s=X(n,["children","icon","title","onClick"]);const l=s.id||o.toLowerCase().replaceAll(" ","-"),{currentItem:c,previouslySelectedItemId:d,selectedItem:u,setCurrentItem:f,setPreviouslySelectedItemId:h,setSelectedItem:p}=t.useContext(hF);t.useEffect((()=>{s.selected&&p({itemId:l,content:void 0})}),[s.selected]);return e.jsx(cF,{children:e.jsxs(dF,Object.assign({styleType:"link",type:"button",onClick:()=>{h((()=>{if(r&&u)return d||u.itemId})()),f({itemId:l,content:r}),p({itemId:l,content:r}),a&&!r&&a(l)},onMouseEnter:()=>{f({itemId:l,content:r})}},s,{$highlight:u&&u.itemId===l||c&&c.itemId===l},{children:[e.jsx(uF,{children:i}),e.jsx(fF,{children:o})]}))})},DrawerItem:n=>{var{id:r,title:i,onClick:o,children:a}=n,s=X(n,["id","title","onClick","children"]);const[l,c]=t.useState(!0),[d,u]=t.useState(!1),{currentItem:f,setSelectedItem:h,setPreviouslySelectedItemId:p,setCurrentItem:g}=t.useContext(hF),m=di({from:{opacity:0},to:{opacity:1}}),b=qe(),v=b.ref,y=di({height:a&&l?b.height:0});return e.jsxs(mF,Object.assign({onMouseEnter:()=>{u(!0)},onMouseLeave:()=>{u(!1)}},s,{style:m},{children:[e.jsxs(bF,Object.assign({styleType:"link",type:"button",onClick:()=>{a?c(!l):(h({itemId:f.itemId,content:void 0}),g(void 0),p(void 0),o&&o(r))},$highlight:d&&l,$noChildren:!a},{children:[e.jsx(wF,{children:i}),a&&e.jsx(yF,{children:e.jsx(xF,{"aria-hidden":!0,$expanded:l})})]})),e.jsx(vF,Object.assign({style:y},{children:e.jsx($F,Object.assign({ref:v},{children:a}))}))]}))},DrawerSubitem:n=>{var{id:r,title:i,onClick:o}=n,a=X(n,["id","title","onClick"]);const{currentItem:s,setSelectedItem:l,setCurrentItem:c,setPreviouslySelectedItemId:d}=t.useContext(hF);return e.jsx(jF,Object.assign({},a,{children:e.jsx(SF,Object.assign({styleType:"link",type:"button",onClick:()=>{o&&o(r),l({itemId:s.itemId,content:void 0}),c(void 0),d(void 0)}},{children:i}))}))}}),CF=i.keyframes`
	from {
		opacity: 0;
		transform: translateY(-20%);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
`,OF=K.default.div`
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
    background: ${ts.Neutral[8]};
    box-shadow: 0 0.125rem 0.5rem rgba(104, 104, 104, 0.25);
    border-radius: 0.5rem;
    ${e=>{if(e.$isAnimated)return i.css`
                animation: ${CF} 0.3s;
            `}}
`,TF=K.default.div`
    display: flex;
    align-items: center;
    padding: 0.5rem 0.25rem 0.5rem 1rem;
`,DF=K.default(ss)`
    padding: 0;
`,IF=K.default(m.CrossIcon)`
    color: ${ts.Neutral[1]};
    height: 1.25rem;
    width: 1.25rem;
`,EF=K.default.div`
    flex: 1;
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem 0.5rem 0.25rem;
    cursor: pointer;
`,_F=K.default.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: left;
    margin: 0.5rem;
    ${is.MaxWidth.mobileM} {
        margin: 0 0.5rem;
    }
`,MF=K.default.img`
    width: 2.65rem;
    height: auto;
    align-self: center;
`,RF=K.default.div`
    max-width: 30%;
`,AF=K.default(qs.Small)`
    padding: 0.5rem;
    height: auto;
    & > span {
        overflow-wrap: anywhere;
        ${ys.getTextStyle("XSmall","semibold")};
    }
`,NF=K.default(exports.Text.H6)`
    overflow-wrap: anywhere;
    ${is.MaxWidth.mobileM} {
        ${ys.getTextStyle("XSmall","semibold")}
    }
`,BF=K.default(exports.Text.XSmall)`
    overflow-wrap: anywhere;
`,FF=K.default.div`
    margin-top: 0.25rem;
    display: flex;
    align-items: center;
`,LF=i.css`
    height: 2rem;
    width: 2rem;
    padding-right: 0.25rem;
    color: #ffc107;
`,PF=K.default(v.StarFillIcon)`
    ${LF}
`,zF=K.default(H.StarHalfIcon)`
    ${LF}
`,HF=K.default(b.StarIcon)`
    ${LF}
`,WF="https://assets.life.gov.sg/react-design-system/img/app-icon/app-icon.png",VF="smart-app-banner";const YF=Y.default.forwardRef((function(t,n){const{className:r,show:i,href:o,content:a,offset:s=0,icon:l=WF,animated:c=!1,onDismiss:d,onClick:u}=t,{title:f,message:h,buttonLabel:p,buttonAriaLabel:g,numberOfStars:m}=a,b=e=>{e.stopPropagation(),window.open(o,"_blank","noreferrer"),null==u||u()};return e.jsx(e.Fragment,{children:i&&e.jsxs(OF,Object.assign({ref:n,$isAnimated:c,$offset:s,className:r},{children:[e.jsx(TF,Object.assign({onClick:d,id:`${VF}-dismiss`,"data-testid":`${VF}-dismiss-container`},{children:e.jsx(DF,Object.assign({"aria-label":"Dismiss"},{children:e.jsx(IF,{})}))})),e.jsxs(EF,Object.assign({onClick:b,id:`${VF}-proceed`,"data-testid":`${VF}-proceed-container`},{children:[e.jsx(MF,{src:l,alt:"lifesg-app-icon"}),e.jsxs(_F,{children:[e.jsx(NF,{children:f}),e.jsx(BF,{children:h}),(()=>{if(isNaN(m)||m<0)return;const t=[],n=m-Math.floor(m)>=.4;for(let n=0;n<Math.floor(m);n++)t.push(e.jsx(PF,{},`star${n}`));if(n&&t.push(e.jsx(zF,{},"halfstar")),t.length<5){const n=5-t.length;for(let r=0;r<n;r++)t.push(e.jsx(HF,{},`emptystar${r}`))}return e.jsx(FF,{children:t.slice(0,5)})})()]}),e.jsx(RF,{children:e.jsx(AF,Object.assign({type:"button",onClick:b,"aria-label":g},{children:p}))})]}))]}))})})),UF=Y.default.createContext({currentActiveIndex:0,tabLinks:[],setCurrentActiveIndex:()=>{}}),KF=K.default.div`
    position: relative;
    width: 100%;
`,qF=K.default.div`
    width: 4rem;
    height: 100%;
    top: 0;
    position: absolute;
    pointer-events: none;
    display: flex;
    align-items: center;

    ${e=>{let t;const n="rgba(255,255,255,0.001)";return t="left"===e.$position?`\n                left: 0;\n                background-image: linear-gradient(\n                    to right,\n                    ${e.$backgroundColor||(e.$showIndicator?"white, white":"white")},\n                    ${n}\n                );\n            `:`\n                right: 0;\n                background-image: linear-gradient(\n                    to left,\n                    ${e.$backgroundColor||(e.$showIndicator?"white, white":"white")},\n                    ${n}\n                );\n            `,`\n\t\t\t${is.MaxWidth.tablet} {\n\t\t\t\t${t}\n\t\t\t}\n\t\t`}};
`,XF=K.default.div`
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
`,GF=K.default(ss)`
    display: none;

    ${is.MaxWidth.tablet} {
        display: flex;
        height: 100%;
        width: 100%;
        padding: unset;
        align-items: center;

        ${e=>"left"===e.$position?i.css`
                    justify-content: left;
                    padding-left: 0.5rem;
                `:i.css`
                    justify-content: right;
                    padding-right: 0.5rem;
                `}

        svg {
            color: ${ts.Neutral[3]};
        }
    }
`,ZF=t.forwardRef(((n,r)=>{var{children:i,fadeColor:o,fadePosition:a="both",showIndicator:s=!1,onResize:l}=n,c=X(n,["children","fadeColor","fadePosition","showIndicator","onResize"]);const[d,u]=t.useState("left"===a||"both"===a),[f,g]=t.useState("right"===a||"both"===a),m=t.useRef(null),b=t.useRef(null),v=ru(y,50);function y(){const e=m.current,t=b.current;e&&t&&t.scrollWidth>e.offsetWidth?(g(Math.round(t.scrollLeft)<t.scrollWidth-t.offsetWidth),u(t.scrollLeft>=1)):(g(!1),u(!1))}function x(){y(),l&&l({content:b.current,wrapper:m.current})}qe({onResize:x,targetRef:m,refreshMode:"debounce",refreshRate:50}),t.useImperativeHandle(r,(()=>({resize(){x()}}))),t.useEffect((()=>{const e=b.current;return y(),e&&e.addEventListener("scroll",v),()=>{e&&e.removeEventListener("scroll",v)}}),[]);return e.jsxs(KF,Object.assign({ref:m},c,{children:[e.jsx(XF,Object.assign({ref:b},{children:i})),(()=>{let t;return t=Array.isArray(o)&&o.length>0?{left:o,right:o}:o||{left:void 0,right:void 0},e.jsxs(e.Fragment,{children:[d&&e.jsx(qF,Object.assign({$backgroundColor:t.left,$position:"left",$showIndicator:s,"data-id":"left-fade"},{children:s&&e.jsx(GF,Object.assign({$position:"left","data-id":"left-fade-indicator-button"},{children:e.jsx(p.ChevronLeftIcon,{})}))})),f&&e.jsx(qF,Object.assign({$backgroundColor:t.right,$position:"right",$showIndicator:s,"data-id":"right-fade"},{children:s&&e.jsx(GF,Object.assign({$position:"right","data-id":"right-fade-indicator-button"},{children:e.jsx(h.ChevronRightIcon,{})}))}))]})})()]}))})),QF=K.default.ul`
    display: inline-flex;
    width: 100%;
    list-style-type: none;

    ${e=>{if(e.$fullWidthIndicatorLine)return i.css`
                ::after {
                    content: "";
                    height: inherit;
                    flex-grow: 1;
                    /* follows the border in ChainItem */
                    border-bottom: 4px solid ${ts.Neutral[5]};
                }
            `}}
`,JF=K.default.li`
    display: flex;
    flex-shrink: 0;
    border-bottom: 4px solid ${ts.Neutral[5]};

    ${e=>{if(e.$active)return i.css`
                border-bottom: 4px solid ${ts.Primary};
            `}}

    ${is.MaxWidth.mobileL} {
        flex: 1;
        justify-content: center;
    }
`,eL=K.default.button`
    position: relative;
    padding: 1rem 1rem 1.25rem;
    border: none;
    background: none;
    cursor: pointer;
`,tL=K.default(exports.Text.Body)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, calc(-50% - 0.125rem)); // Based on testing
    color: ${ts.Neutral[3]};
    opacity: 1;

    ${e=>{if(e.$active)return i.css`
                opacity: 0;
            `}}
`,nL=K.default(exports.Text.Body)`
    color: ${ts.Primary};
    opacity: 0;
    ${e=>{if(e.$active)return i.css`
                opacity: 1;
            `}}
`,rL=K.default(ZF)`
    [data-id="left-fade-indicator-button"],
    [data-id="right-fade-indicator-button"] {
        margin-bottom: 4px;
    }
`,iL=({controlledMode:n,"data-testid":r,onTabClick:i,fullWidthIndicatorLine:o})=>{const{setCurrentActiveIndex:a,currentActiveIndex:s,tabLinks:l}=t.useContext(UF),c=Tl.useMediaQuery({maxWidth:os.mobileL}),d=t.useRef(null),u=e=>t=>{t.preventDefault(),n||a(e),i&&i(l[e].title,e)},f=e=>c&&e.length>20?`${e.substring(0,20)}...`:e;return e.jsx(rL,Object.assign({onResize:({content:e,wrapper:t})=>{e&&t&&window.innerWidth<=os.tablet&&d&&(e.scrollLeft=d.current.getBoundingClientRect().left)},"data-testid":r},{children:e.jsx(QF,Object.assign({role:"tablist",$fullWidthIndicatorLine:o},{children:l.map(((t,n)=>{const i=s===n;return e.jsx(JF,Object.assign({role:"none",$active:i,ref:i?d:null},{children:e.jsxs(eL,Object.assign({role:"tab",type:"button","aria-selected":i,onClick:u(n),"data-testid":`${r}-link-${n}`},{children:[e.jsx(tL,Object.assign({$active:i,weight:"regular"},{children:f(t.title)})),e.jsx(nL,Object.assign({$active:i,weight:"semibold","aria-hidden":"true"},{children:f(t.title)}))]}))}),n)}))}))}))},oL=K.default.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`,aL=Object.assign((n=>{var{children:r,currentActive:i,initialActive:o=0,onTabClick:a,"data-testid":s,fullWidthIndicatorLine:l}=n,c=X(n,["children","currentActive","initialActive","onTabClick","data-testid","fullWidthIndicatorLine"]);const[d,u]=t.useState(i||o),[f,h]=t.useState([]);t.useEffect((()=>{const e=t.Children.toArray(r).filter(Boolean);p(e)}),[r]),t.useEffect((()=>{"number"==typeof i&&u(i)}),[i]);const p=e=>{const t=e.map((e=>({title:e.props.title})));h(t)};return e.jsx(oL,Object.assign({"data-testid":s},c,{children:e.jsxs(UF.Provider,Object.assign({value:{tabLinks:f,currentActiveIndex:d,setCurrentActiveIndex:u}},{children:[e.jsx(iL,{controlledMode:"number"==typeof i,onTabClick:a,"data-testid":`${s}-tabs`,fullWidthIndicatorLine:l}),t.Children.toArray(r).filter(Boolean).map(((e,n)=>t.cloneElement(e,{key:n,index:n})))]}))}))}),{Item:n=>{var{index:r,children:i}=n,o=X(n,["index","children"]);const{currentActiveIndex:a}=t.useContext(UF);return a===r?e.jsx("div",Object.assign({role:"tabpanel"},o,{children:i})):null}}),sL=K.default.div`
    border-radius: 4px;
    padding: 0.125rem 0.5rem;
    width: fit-content;
    max-width: 100%;
    ${ys.getTextStyle("XSmall","semibold")}
    transition: all 200ms ease;
    cursor: ${({$interactive:e})=>e?"pointer":"default"};
    display: flex;
    align-items: center;
    gap: 0.25rem;

    svg {
        flex-shrink: 0;
    }

    ${e=>{let t,n,r,o;if("solid"===e.$type)switch(r=ts.Neutral[8],o=`0px 0px 4px 1px ${ts.Neutral[4](e)}`,e.$color){case"grey":t=ts.Neutral[3],n=ts.Neutral[3];break;case"green":t=ts.Validation.Green.Text,n=ts.Validation.Green.Text;break;case"yellow":t=ts.Validation.Orange.Text,n=ts.Validation.Orange.Text;break;case"red":t=ts.Validation.Red.Text,n=ts.Validation.Red.Text;break;case"blue":t=ts.Validation.Blue.Text,n=ts.Validation.Blue.Text;break;default:t=ts.Neutral[1],n=ts.Neutral[1]}else switch(o="0px 0px 4px 1px rgba(164, 164, 164, 0.70)",e.$color){case"grey":t=ts.Neutral[6],n=ts.Neutral[4],r=ts.Neutral[3];break;case"green":t=ts.Validation.Green.Background,n=ts.Validation.Green.Border,r=ts.Validation.Green.Text;break;case"yellow":t=ts.Validation.Orange.Background,n=ts.Validation.Orange.Border,r=ts.Validation.Orange.Text;break;case"red":t=ts.Validation.Red.Background,n=ts.Validation.Red.Border,r=ts.Validation.Red.Text;break;case"blue":t=ts.Validation.Blue.Background,n=ts.Validation.Blue.Border,r=ts.Validation.Blue.Text;break;default:t=ts.Neutral[8],n=ts.Neutral[5],r=ts.Neutral[1],o="0px 0px 4px 1px rgba(164, 164, 164, 0.50)"}return i.css`
            background: ${t};
            border: 1px solid ${n};
            color: ${r};

            @media (hover: hover) {
                &:hover {
                    box-shadow: ${e.$interactive?o:"none"};
                }
            }
        `}}

    ${is.MaxWidth.tablet} {
        ${({$interactive:e})=>{if(e)return i.css`
                    ${ys.getTextStyle("H5","semibold")};
                    padding: calc(0.5rem - 1px) 1rem;
                `}}
    }
`,lL=K.default.div`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-align: left;
`;var cL;Wl.extend(Yl),function(e){e.formatHourlyDisplay=e=>Wl(e,"HH:mm").format("ha"),e.calculateWidth=(e,t,n)=>sc.getTimeDiffInMinutes(e,t)/15*(n/2)}(cL||(cL={}));const dL=1.25,uL=e=>"minified"===e?12:40,fL=e=>"minified"===e?12:40,hL=K.default.div`
    position: relative;
    display: flex;
    align-items: center;
`,pL=K.default(ss)`
    z-index: 2;
    position: absolute;
    bottom: ${({$variant:e})=>"default"===e?"0.25rem":"0rem"};
    background-color: ${ts.Neutral[8]};
    box-shadow: 0px 2px 8px rgba(104, 104, 104, 0.5);
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
`,gL=K.default(h.ChevronRightIcon)`
    width: 1rem;
    height: 1rem;
    color: ${ts.Primary};
`,mL=K.default(p.ChevronLeftIcon)`
    font-size: 1rem;
    color: ${ts.Primary};
`,bL=K.default.div`
    overflow: hidden;
    flex-grow: 1;
    position: relative;
    height: ${({$variant:e})=>`${20+fL(e)}px`};
`,vL=K.default.div`
    position: relative;
    white-space: nowrap;
    height: ${dL}rem;
`,yL=K.default.div`
    display: flex;
    white-space: nowrap;
`,xL=K.default.div`
    display: inline-block;
    width: ${({$variant:e})=>`${uL(e)}px`};
    position: relative;
    border-left: 1px solid ${ts.Neutral[2]};
    ${e=>{let t=0;switch(e.$variant){case"default":t=e.$isLongMarker?dL:.625;break;case"minified":t=e.$isLongMarker?dL:0;break;default:t=0}return i.css`
            height: ${t}rem;
        `}}
`,wL=K.default(exports.Text.XSmall)`
    color: ${ts.Neutral[2]};
    position: absolute;
    bottom: 10%;
    left: 10%;
`,$L=K.default.div`
    ${e=>"vertical"===e.$type?i.css`
                display: flex;
                flex-grow: 1;
                align-items: center;
                justify-content: center;
                width: 100%;
                margin: 1px 0px;
            `:i.css`
                position: absolute;
                height: ${fL(e.$variant)}px;
                width: ${e.$width}px;
                left: ${e.$left}px;
            `}
    background-color: ${({$bgColor:e})=>e};
    cursor: ${({$clickable:e})=>e?"pointer":"default"};

    ${e=>"stripes"===e.$styleType&&i.css`
            background: repeating-linear-gradient(
                135deg,
                ${e.$bgColor2||ts.Neutral[5]} 0px,
                ${e.$bgColor2||ts.Neutral[5]} 10px,
                ${e.$bgColor} 10px,
                ${e.$bgColor} 20px
            );
        `}
`,jL=K.default.div`
    position: absolute;
    top: ${dL}rem;
    height: ${({$variant:e})=>`${fL(e)}px`};
    z-index: 1;
    border-right: 1px solid ${ts.Neutral[2]};
`,SL=K.default(exports.Text.XSmall)`
    color: ${e=>e.$color||ts.Neutral[2](e)};
    position: absolute;
    bottom: 0;
    padding-left: 4px;
    padding-bottom: 4px;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`,kL=K.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    user-select: none;
    margin-bottom: 0.5rem;
    flex: 1;
`,CL=K.default(exports.Text.XSmall)`
    ${e=>e.$disabled&&i.css`
            color: ${ts.Neutral[4]};
        `}
`,OL=K.default.div`
    grid-column: 2 / -1;
    display: flex;
`,TL=K.default.div`
    width: 100%;
    display: grid;
    grid-template-columns: auto repeat(7, 1fr);
    column-gap: 0.25rem;
`,DL=K.default(Ti.div)`
    grid-column: 2 / -1;
    overflow: hidden;
`,IL=K.default.div`
    display: flex;
    gap: 0.25rem;
    transition: ${Ss.Base};
    overflow: hidden;
`,EL=K.default.div`
    display: flex;
    flex-direction: column;
    grid-row: 3 / auto;
    gap: 0.25rem;
    width: 1.375rem;
    transition: ${Ss.Base};
    overflow: hidden;

    ${e=>e.$height&&`height: ${e.$height}px;`}
`,_L=K.default.div`
    min-height: 3.75rem;
    :last-child {
        min-height: 0;
    }
`,ML=K.default.div`
    ${ys.getFontFamily("Body",700)}
    color: ${ts.Neutral[3]};
    font-size: 0.625rem !important;
    line-height: 0.75rem !important;
    text-align: center;
    :first-line {
        font-size: 0.875rem !important;
    }
`,RL=K.default.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 0.25rem;
`,AL=K.default.div`
    grid-row: 4;
    grid-column: 1 / -1;
    display: flex;
    margin-top: 0.5rem;
`,NL=K.default(qs.Small)`
    width: 100%;
    height: 2.5rem;
    span {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
`,BL=K.default(u.ChevronUpIcon)`
    transform: rotate(${e=>e.$isExpanded?0:180}deg);
    transition: transform 300ms ease-in-out;
`,FL=K.default($L)`
    ${e=>{if("vertical"===e.$type)return i.css`
                max-width: 200px;
                height: ${e.$height}px;
                min-height: ${e.$height}px;
                margin: 0;
                border-radius: 0.125rem;
            `}}

    ${e=>e.$halfFill?i.css`
                background: linear-gradient(
                        to ${e.$halfFill},
                        ${"stripes"===e.$styleType?"transparent":e.$bgColor}
                            50%,
                        ${ts.Neutral[5]} 0%
                    )
                    ${"stripes"===e.$styleType&&`, repeating-linear-gradient(\n                            135deg,\n                            ${e.$bgColor2||ts.Neutral[5]} 0px,\n                            ${e.$bgColor2||ts.Neutral[5]} 10px,\n                            ${e.$bgColor} 10px,\n                            ${e.$bgColor} 20px\n                        )`};
            `:i.css`
                background-color: ${e.$bgColor};
            `}
`;var LL=Zi;var PL=function(e,t,n){for(var r=-1,i=e.length;++r<i;){var o=e[r],a=t(o);if(null!=a&&(void 0===s?a==a&&!LL(a):n(a,s)))var s=a,l=o}return l};var zL=PL,HL=q$,WL=function(e,t){return e<t};var VL=Ii((function(e,t){return e&&e.length?zL(e,HL(t),WL):void 0}));var YL=PL,UL=function(e,t){return e>t},KL=q$;var qL=Ii((function(e,t){return e&&e.length?YL(e,KL(t),UL):void 0}));const XL=({calendarDate:n,disabledDates:r,selectedDate:i,onSelect:o,minDate:a,maxDate:s,startTime:l,endTime:c,maxVisibleCellHeight:d,slots:u,interval:f=30,variant:h="flexible",enableSelection:p=!0,onSlotClick:g})=>{var m,b,v,y;const x="YYYY-MM-DD",[w,$]=t.useState(!1),[j,S]=t.useState(),k=t.useMemo((()=>tc.generateDaysForCurrentWeek(n)),[n]),C=Object.values(null!=u?u:{}).flat(),O=null!==(b=null!=l?l:null===(m=VL(C,"startTime"))||void 0===m?void 0:m.startTime)&&void 0!==b?b:"00:00",T=null!==(y=null!=c?c:null===(v=qL(C,"endTime"))||void 0===v?void 0:v.endTime)&&void 0!==y?y:"24:00",D=Math.ceil(sc.getTimeDiffInMinutes(O,T)/f),{height:I,ref:E}=qe(),_=d?I<d||w?I:d:I,M=di({height:_}),R=t.useMemo((()=>{if(u){const e={};return Object.entries(u).forEach((([t,n])=>{const r=function(e){const t=Array(D).fill({});return e.forEach((e=>{const n=Math.max(0,sc.getTimeDiffInMinutes(O,e.startTime)/f),r=Math.min(D,sc.getTimeDiffInMinutes(O,e.endTime)/f),i=Math.ceil(r)-Math.floor(n);switch(h){case"fixed":t[Math.floor(n)]=Object.assign(Object.assign({},e),{cellLength:r-n});break;case"flexible":for(let o=0;o<i;o++){const a=sc.addMinutesToTime(O,Math.floor(n+o)*f),s=sc.addMinutesToTime(a,f);let l;OD(t[Math.floor(n+o)])?0===o&&n%1!=0?l="top":o===i-1&&r%1!=0&&(l="bottom"):l=void 0,t[Math.floor(n+o)]=Object.assign(Object.assign({},e),{id:`${e.id}-${o}`,startTime:a,endTime:s,cellLength:1,halfFill:l})}}})),t}(n);e[t]=function(e){var t,n,r,i;let o=0;switch(h){case"fixed":for(e=e.reduce(((e,t)=>{const n=e.length>0?e[e.length-1]:e[0];return OD(t)&&OD(n)?e:[...e,t]}),[{}]);o<e.length;){if(OD(e[o])){const a=null!==(n=null===(t=e[o-1])||void 0===t?void 0:t.endTime)&&void 0!==n?n:O,s=null!==(i=null===(r=e[o+1])||void 0===r?void 0:r.startTime)&&void 0!==i?i:T;if(a!==s){const t=sc.getTimeDiffInMinutes(a,s)/f;e[o]=Object.assign(Object.assign({},L(o)),{startTime:a,endTime:s,cellLength:t})}}o++}break;case"flexible":for(;o<e.length;)OD(e[o])?(e[o]=L(o),o++):o+=e[o].cellLength}return e.filter((e=>!OD(e)&&e.cellLength>0))}(r)})),e}return{}}),[u]),A=e=>{S(e)},N=()=>{S(void 0)},B=e=>{e.preventDefault(),$((e=>!e))},F=e=>{var t;const n=tc.isWithinRange(e,a?Wl(a):void 0,s?Wl(s):void 0),i=null!==(t=r&&r.includes(e.format(x)))&&void 0!==t&&t;return!n||i};function L(e,t=1){return{id:`${e.toString()}-${(new Date).getTime()}`,startTime:"",endTime:"",clickable:!1,styleAttributes:{backgroundColor:"#E0E4E5"},cellLength:t}}return e.jsxs(TL,{children:[e.jsx(OL,{children:k.map(((t,n)=>{const r=(e=>{const t=e.format(x),n=F(e),r={},o=p&&!n;return n&&(r.disabled=!0),r.interactive=p?o:null,o&&j&&e.isSame(j,"day")&&(r.circleLeft="hover-current",r.circleRight="hover-current",r.circleShadow=!0),[i].includes(t)&&(r.labelType="selected",r.circleLeft="selected-outline",r.circleRight="selected-outline"),r})(t);return e.jsx(yd,Object.assign({date:t,calendarDate:Wl(i),onSelect:()=>{((e,t)=>{!t&&p&&o(e)})(t,!r.interactive)},onHover:A,onHoverEnd:N},r),`day-${n}`)}))}),e.jsx(OL,{children:k.map(((t,n)=>e.jsx(kL,{children:e.jsx(CL,Object.assign({weight:"semibold",$disabled:F(t)},{children:Wl(t).format("ddd")}))},`week-day-${n}`)))}),(()=>{let t=!1;const n=e=>{const n=Wl(O,"HH:mm").add(4*e*f,"minutes"),r=n.format("h"),i=n.format("mm"),o=n.format("a");let a=`${r}${"00"!==i?` ${i}`:""}`;return t||"pm"!==o||"00"!==i||(a+=` ${o}`,t=!0),a};return e.jsx(EL,Object.assign({$height:_},{children:Array(Math.ceil(D/4)).fill(void 0).map(((t,r)=>e.jsx(_L,{children:e.jsx(ML,{children:n(r)})},`time-${r}`)))}))})(),e.jsx(DL,Object.assign({style:M},{children:e.jsx(IL,Object.assign({ref:E},{children:k.map(((t,n)=>{var r;const i=t.format(x),o=null!==(r=R[i])&&void 0!==r?r:Array("flexible"===h?D:1).fill(void 0).map(((e,t)=>L(t,"fixed"===h?D:void 0)));return e.jsx(RL,{children:o.map((t=>{const{id:n,clickable:r=!0,styleAttributes:o,cellLength:a,halfFill:s}=t,{styleType:l="default",backgroundColor:c,backgroundColor2:d}=o;return e.jsx(FL,{$type:"vertical",$variant:"default",$styleType:l,$bgColor:c,$bgColor2:d,$halfFill:s,$clickable:r,$height:"fixed"===h?12*a+4*(a-1):12,onClick:()=>r&&((e,t)=>{g&&g(e,t)})(i,t)},n)}))},`wrapper-${n}`)}))}),`week-cell-${n.format(x)}`)})),(()=>{if(d&&E.current&&!(I&&I<d))return e.jsx(AL,{children:e.jsxs(NL,Object.assign({"data-testid":"time-bar-expand-collapse-button",styleType:"light",onClick:B},{children:[e.jsx(BL,{$isExpanded:w}),(w?"Hide":"Show")+" later times"]}))})})()]})},GL=K.default.div`
    min-width: 18.5rem;

    [data-id="calendar-header"] {
        ${is.MaxWidth.mobileL} {
            padding: 0 1.25rem;
        }
    }
`,ZL="YYYY-MM-DD",QL=K.default(od)`
    ${e=>{const{$variant:t}=e;if("default"===t)return i.css`
                    ${ys.getFontFamily("H5","semibold")}
                    color: ${ts.Neutral[3]};
                `}}
`,JL=K.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    user-select: none;
    margin-bottom: 0.188rem;
`,eP=K.default.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
`,tP=K.default.div`
    grid-column: 1 / -1;
    display: flex;
    min-height: 7.625rem;
`,nP=K.default.div`
    ${ys.getTextStyle("XSmall","semibold")}
    margin: 1rem 0rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 2.5rem;
    color: ${ts.Neutral[1]};
    span {
        display: block;
    }
`,rP=K.default.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 1px;
`;Wl.extend(Kl);const iP={id:"1",startTime:"",endTime:"",clickable:!1,styleAttributes:{styleType:"stripes",backgroundColor:"#ECEFEF",backgroundColor2:"#E0E4E5"}},oP=({calendarDate:n,disabledDates:r,selectedDate:i,onSelect:o,minDate:a,maxDate:s,slots:l,enableSelection:c=!0,onSlotClick:d})=>{const u=t.useMemo((()=>tc.generateDaysForCurrentWeek(n)),[n]),f="YYYY-MM-DD",h=e=>{const t=e.format(f),n=(e=>{const t=tc.isWithinRange(e,a?Wl(a):void 0,s?Wl(s):void 0),n=r&&r.includes(e.format(f));return!t||n})(e),o={},l={};return n&&(o.$disabledDisplay=!0,l.$disabledDisplay=!0),o.$interactive=c&&!n,[i].includes(t)&&(o.$selected=!0,l.$selected=!0),{styleCircleProps:o,styleLabelProps:l}};return e.jsxs(eP,{children:[e.jsx(td,{children:u.map(((t,n)=>{const r="default",{styleCircleProps:i,styleLabelProps:a}=h(t);return e.jsx(nd,{children:e.jsx(ad,Object.assign({$variant:r,onClick:()=>((e,t)=>{!t&&c&&o(e)})(t,!i.$interactive)},i,{children:e.jsx(QL,Object.assign({weight:a.$selected?"semibold":"regular",$variant:r},a,{children:t.format("D")}))}))},`day-${n}`)}))}),u.map(((t,n)=>e.jsx(JL,{children:e.jsx(exports.Text.XSmall,Object.assign({weight:"semibold"},{children:Wl(t).format("ddd")}))},`week-day-${n}`))),e.jsx(tP,{children:u.map(((t,n)=>{const r=t.format(f),i=l&&(l[r]?l[r]:[iP]);return e.jsx(rP,{children:i&&i.map((t=>{const{id:n,startTime:i,endTime:o,clickable:a=!0,styleAttributes:s}=t,{color:l,styleType:c="default",backgroundColor:u,backgroundColor2:f}=s;return e.jsx($L,Object.assign({$type:"vertical",$variant:"default",$styleType:c,$bgColor:u,$bgColor2:f,$clickable:a,onClick:()=>a&&((e,t)=>{d(e,t)})(r,t)},{children:e.jsxs(nP,Object.assign({style:{color:l}},{children:[e.jsx("span",{children:tc.convertTo12HourFormat(i)}),o&&i&&e.jsx("span",{children:"-"}),e.jsx("span",{children:tc.convertTo12HourFormat(o)})]}))}),n)}))},`wrapper-${n}`)}))},`week-cell-${n.format(f)}`)]})},aP=K.default.div`
    min-width: 18.5rem;

    [data-id="calendar-header"] {
        ${is.MaxWidth.mobileL} {
            padding: 0 1.25rem;
        }
    }
`,sP="YYYY-MM-DD",lP=K.default.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;

    ${e=>{switch(e.$variant){case"current":return i.css`
                    background-color: ${ts.Accent.Light[1]};
                `;case"upcoming-active":return i.css`
                    border: 4px solid ${ts.Accent.Light[1]};
                `;case"upcoming-inactive":return i.css`
                    border: 4px solid ${ts.Neutral[4]};
                `;case"completed":return i.css`
                    background-color: ${ts.Validation.Green.Icon};
                    svg {
                        color: ${ts.Neutral[8]};
                    }
                `;case"error":return i.css`
                    width: 1.8rem;
                    height: 1.8rem;
                    margin: -0.15rem 0 -0.15rem -0.15rem;

                    svg {
                        color: ${ts.Validation.Red.Icon};
                        height: 100%;
                        width: 100%;
                    }
                `;case"disabled":return i.css`
                    background-color: ${ts.Neutral[4]};
                `}}}
`,cP=K.default.div`
    width: 4px;
    flex-grow: 1;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    border-radius: 2px;

    ${e=>{switch(e.$variant){case"current":case"upcoming-active":return i.css`
                    background-color: ${ts.Accent.Light[1]};
                `;case"upcoming-inactive":case"disabled":return i.css`
                    background-color: ${ts.Neutral[4]};
                `;case"completed":return i.css`
                    background-color: ${ts.Validation.Green.Icon};
                `;case"error":return i.css`
                    margin-left: -0.15rem;
                    background-color: ${ts.Validation.Red.Icon};
                `}}}
`,dP=K.default.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 1rem;
`,uP=K.default.div`
    grid-column: ${e=>e.$startCol?e.$startCol:3} / span
        ${e=>e.$colSpan?e.$colSpan:8};

    ${is.MaxWidth.tablet} {
        grid-column: span 8;
    }

    ${is.MaxWidth.mobileL} {
        grid-column: span 4;
    }
`,fP=K.default(exports.Text.H3)`
    margin-bottom: 1rem;

    ${is.MaxWidth.tablet} {
        margin-bottom: 1.5rem;
    }
`,hP=K.default(exports.Text.H4)`
    margin-top: -0.125rem;
    margin-bottom: 0.5rem;
`,pP=K.default.div`
    display: flex;

    :last-of-type ${cP} {
        margin-bottom: 0;
    }
`,gP=K.default.div`
    margin-bottom: 2rem;
    width: 100%;
`,mP=K.default(exports.Text.H3)`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 0.5rem;
    gap: 0.5rem;
`,bP=K.default(nB)`
    padding: 0.125rem 0.5rem;
`,vP=["#FFE6BB","#D8EFEB","#E6EAFE","#FAE4E5","#D3EEFC"],yP=252,xP=i.keyframes`
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
`,wP=K.default(vh)`
    color: ${ts.Neutral[3]};
    svg {
        ${e=>{if(e.$loading)return i.css`
                    animation: ${xP} 4s linear infinite;
                `}}
    }
`,$P=K.default.div`
    display: flex;
    padding-bottom: 1rem;
    justify-content: space-between;
`,jP=K.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.625rem;
`,SP=K.default(exports.Text.H6)`
    color: ${ts.Neutral[3]};
`,kP=K.default(zf)`
    width: 400px;
`,CP=t=>{var{selectedDate:n,loading:r,tableContainerRef:i,totalRecords:o,onPreviousDayClick:a,onNextDayClick:s,onRefresh:l,onCalendarDateSelect:c}=t,d=X(t,["selectedDate","loading","tableContainerRef","totalRecords","onPreviousDayClick","onNextDayClick","onRefresh","onCalendarDateSelect"]);const f=()=>{i.current&&(i.current.scrollTop=0)},h=()=>{l&&(f(),l())};return e.jsxs($P,{children:[e.jsx(kP,Object.assign({selectedDate:n,loading:r},d,{onRightArrowClick:e=>{f(),s(e)},onLeftArrowClick:e=>{f(),a(e)},onCalendarDateSelect:c})),void 0===o?e.jsx(e.Fragment,{}):e.jsxs(jP,{children:[e.jsxs(SP,Object.assign({"data-testid":"timetable-records-results",weight:"semibold"},{children:[o," results found"]})),l&&e.jsx(wP,Object.assign({"data-testid":"timetable-records-refresh-btn",styleType:"light",sizeType:"small",disabled:r,onClick:h,$loading:r},{children:e.jsx(u.RefreshIcon,{})}))]})]})},OP=K.default.div`
    display: flex;
    width: 100%;
`,TP=K.default.div`
    border-bottom: 1px solid ${ts.Neutral[5]};
    ${e=>{if(e.$isOnTheHour)return i.css`
                box-shadow: inset -0.5px 0px ${ts.Accent.Light[1]};
            `}}
`,DP=K.default.div`
    display: flex;
    margin-bottom: 2px;
    height: 65px;
`,IP=K.default.div`
    width: 2px;
    height: 100%;
`,EP=K.default.div`
    height: 100%;
    width: ${({$width:e})=>`${e}px`};
    border-radius: 4px;
    box-sizing: border-box;
    padding: 4px;
    ${({$status:e,$bgColour:t,$isClickable:n})=>{switch(e){case"blocked":return i.css`
                    background: repeating-linear-gradient(
                        135deg,
                        #e0e4e5 0px 6px,
                        #ecefef 6px 12px
                    );
                    &:hover {
                        cursor: ${n?"pointer":"not-allowed"};
                    }
                `;case"filled":return i.css`
                    background: ${t};
                    &:hover {
                        cursor: ${n?"pointer":"default"};
                    }
                `;case"disabled":return i.css`
                    background: ${ts.Neutral[6]};
                    &:hover {
                        cursor: ${n?"pointer":"not-allowed"};
                    }
                `;default:return i.css`
                    &:hover {
                        background-color: ${n?ts.Accent.Light[5]:""};
                        cursor: ${n?"pointer":"default"};
                    }
                `}}}
`,_P=K.default(exports.Text.H6)`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`,MP=K.default(exports.Text.XSmall)`
    color: ${ts.Neutral[3]};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`,RP=Y.default.memo((({id:t,startTime:n,endTime:r,title:i,subtitle:o,status:a,intervalWidth:s,rowBarColor:l,containerRef:c,customPopover:d,onClick:u})=>{const f=0===Wl(r,"HH:mm").get("minutes"),h=sc.getTimeDiffInMinutes(n,r)/15*s-2,p=!!u||d&&"click"===d.trigger;return e.jsx((({wrapper:e,children:t})=>d?e(t):t),Object.assign({wrapper:t=>(t=>{const n={position:"bottom-start",rootNode:c,customOffset:d.offset,children:t,trigger:d.trigger,delay:d.delay,popoverContent:d.content};return e.jsx(qv,Object.assign({},n,{children:t}))})(t)},{children:e.jsx(TP,Object.assign({"data-testid":"block-container",$isOnTheHour:f},{children:e.jsxs(DP,{children:[e.jsxs(EP,Object.assign({$width:h,$status:a,$bgColour:l,$isClickable:p,onClick:e=>{u&&u({id:t,startTime:n,endTime:r,status:a,title:i,subtitle:o,customPopover:d},e)}},{children:[i&&e.jsx(_P,Object.assign({weight:"semibold"},{children:i})),o&&e.jsx(MP,Object.assign({weight:"bold"},{children:o}))]})),e.jsx(IP,{})]})}),"block-container-key")}))})),AP=n=>{var{id:r,timetableMinTime:i,timetableMaxTime:o,rowMinTime:a=i,rowMaxTime:s=o,rowCells:l,rowBarColor:c,intervalWidth:d,containerRef:u,outOfRangeCellPopover:f}=n,h=X(n,["id","timetableMinTime","timetableMaxTime","rowMinTime","rowMaxTime","rowCells","rowBarColor","intervalWidth","containerRef","outOfRangeCellPopover"]);const p=h["data-testid"]||"timetable-row",g=t.useMemo((()=>{const e=[];Wl(i,"HH:mm").isBefore(Wl(a,"HH:mm"))&&e.push({id:r,startTime:i,endTime:a,status:"blocked",customPopover:f});const t=[...l].sort(((e,t)=>{const n=Wl(e.startTime,"HH:mm"),r=Wl(t.startTime,"HH:mm");return n.isBefore(r)?-1:n.isAfter(r)?1:0}));return t.forEach(((t,n)=>{var i;const{endTime:o}=t;e.push(t);const a=Wl((null===(i=l[n+1])||void 0===i?void 0:i.startTime)||s,"HH:mm");let c=Wl(o,"HH:mm");for(;c.isBefore(a);)if(d=a,c.get("hour")!=d.get("hour")){const t=c.add(1,"hour").startOf("hour");e.push({id:r,startTime:c.format("HH:mm").toString(),endTime:t.format("HH:mm").toString(),status:"disabled"}),c=t}else e.push({id:r,startTime:c.format("HH:mm").toString(),endTime:a.format("HH:mm").toString(),status:"disabled"}),c=a;var d})),Wl(o,"HH:mm").isAfter(Wl(s,"HH:mm"))&&e.push({id:r,startTime:s,endTime:o,status:"blocked",customPopover:f}),e}),[r,i,o,a,s,l,f]);return e.jsx(OP,Object.assign({"data-testid":p},h,{children:g.map(((t,n)=>e.jsx(RP,Object.assign({},t,{intervalWidth:d,rowBarColor:c,containerRef:u}),`${n}-row-cell-key`)))}))},NP=K.default.div``,BP=K.default.div`
    display: grid;
    overflow: scroll;
    position: relative;
    grid-template-columns: ${yP}px auto;
`,FP=K.default.div`
    display: grid;
    overflow: scroll;
    position: relative;
    grid-template-columns: ${yP}px fit-content(100%);
    padding-bottom: ${e=>e.$allRecordsLoaded?"0":"128px"};
    ${e=>{if(e.$loading)return i.css`
                :hover {
                    cursor: not-allowed;
                    padding-bottom: 0;
                }
            `}}
`,LP=K.default.div`
    position: sticky;
    top: 0;
    left: 0;
    background-color: white;
    width: ${yP}px;
    z-index: 2;
    border-bottom: 1px solid ${ts.Neutral[5]};
    ${e=>e.$isScrolledX||e.$isScrolledY?i.css`
                box-shadow: 0.125rem 0.125rem 0.5rem ${ts.Neutral[5]};
                clip-path: inset(
                    0 ${e.$isScrolledX?"-0.75rem":"0"}
                        ${e.$isScrolledY?"-0.75rem":"0"} 0
                );
                transition: box-shadow 0.5s ease-in-out,
                    clip-path 0.5s ease-in-out;
            `:i.css`
                box-shadow: none;
                clip-path: inset(0);
                transition: box-shadow 0.5s ease-in-out,
                    clip-path 0.5s ease-in-out;
            `};
`,PP=K.default.div`
    display: grid;
    position: sticky;
    grid-column: 1 / 2;
    left: 0;
    z-index: 1;
    background-color: white;
    grid-template-rows: repeat(${e=>e.$numOfRows}, ${68}px);
`,zP=K.default.div`
    display: grid;
    position: sticky;
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    top: 0;
    z-index: 1;
    background-color: white;
    grid-template-columns: repeat(${e=>e.$numOfColumns}, 1fr);
    width: 100%;
    border-bottom: 1px solid ${ts.Neutral[5]};
    transition: all 0.5s ease-in-out;
    ${e=>{if(e.$isScrolled)return i.css`
                box-shadow: 0rem 0.125rem 0.5rem ${ts.Neutral[5]};
            `}};
`,HP=K.default.div`
    min-width: ${84}px;
    align-content: end;
    margin-bottom: 0.25rem;
`,WP=K.default(exports.Text.H6)`
    color: ${ts.Neutral[3]};
`,VP=K.default.div`
    display: grid;
    grid-template-rows: repeat(${e=>e.$numOfRows}, ${68}px);
`,YP=K.default.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    position: sticky;
    left: 0;
    background-color: white;
    width: ${yP}px;
    height: ${68}px;
    text-align: right;
    padding: 0 1rem 0 2rem;
    border-bottom: 1px solid ${ts.Neutral[5]};
    border-left: 1px solid ${ts.Accent.Light[1]};
    transition: all 0.5s ease-in-out;
    ${e=>e.$isScrolled?i.css`
                box-shadow: 0.125rem 0.125rem 0.5rem ${ts.Neutral[5]};
            `:i.css`
                box-shadow: inset -0.5px 0px ${ts.Accent.Light[1]};
            `};
`,UP=K.default(exports.Text.H5)`
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
    white-space: nowrap;
    color: ${ts.Primary};
    :hover {
        cursor: ${e=>e.$isClickable?"pointer":"default"};
    }
`,KP=K.default(exports.Text.XSmall)`
    display: inline-flex;
    gap: 6px;
    align-items: center;
    color: ${ts.Neutral[3]};
    ${e=>{if(!e.$show)return i.css`
                display: none;
            `}}
`,qP=K.default(jl)`
    display: flex;
    align-items: center;
    justify-content: center;
    grid-column: ${e=>e.$isEmptyContent?"1 / -1":"2 / -1"};
    grid-row: 2;
    width: 100%;
    height: 100%;
`,XP=K.default(Nu)`
    grid-column: 1 / -1;
    grid-row: 2;
    padding: 5rem 0 5rem 0;
`,GP=K.default.div`
    display: flex;
    border-bottom: 1px solid ${ts.Neutral[5]};
`,ZP=K.default.div`
    border-right: 0.5px solid ${ts.Accent.Light[1]};
    width: ${e=>`${e.$width}px`};
    height: 100%;
    padding: 20px 12px 20px 12px;
`,QP=i.keyframes`
  0% {
        background-position: -468px 0;
    }
    100% {
        background-position: 468px 0;
    }
`,JP=K.default.div`
    height: 28px;
    width: 100%;
    background: linear-gradient(
        to right,
        ${ts.Neutral[6]} 8%,
        ${ts.Neutral[7]} 18%,
        ${ts.Neutral[6]} 33%
    );
    background-size: 800px 104px;
    animation: ${QP} 1.5s forwards infinite;
`,ez=K.default(qv)`
    max-width: 24rem !important;
    :hover {
        cursor: default;
    }
`,tz=e=>{switch(e.$type){case"success":return ts.Validation.Green;case"warning":return ts.Validation.Orange;case"error":return ts.Validation.Red;case"info":return ts.Validation.Blue;default:return}},nz=K.default(Ti.div)`
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

    ${is.MaxWidth.tablet} {
        left: 0;
    }

    ${e=>i.css`
            background: ${tz(e).Background};
            border: 1px solid ${tz(e).Border};
            color: ${tz(e).Text};
        `};
`,rz=K.default.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    flex: 1;
    justify-content: space-between;

    ${is.MaxWidth.mobileL} {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        gap: 0.75rem;
    }
`,iz=K.default.div`
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
                color: ${tz(e).Icon};
            }
        `};
`,oz=K.default.div`
    display: flex;
    flex-direction: column;
`,az=K.default(exports.Text.H4)`
    display: flex;

    ${e=>i.css`
            color: ${tz(e).Text};
        `}
`,sz=K.default.div`
    ${e=>i.css`
            p {
                color: ${tz(e).Text};
            }
        `}
`,lz=K.default(qs.Small)`
    align-self: center;
    margin-left: auto;
    height: auto;
    width: fit-content;
    flex-shrink: 0;

    ${is.MaxWidth.mobileL} {
        align-self: flex-start;
        margin-left: 2rem;
    }
`,cz=K.default(ss)`
    padding: 0.75rem;
    margin: -0.75rem;
    align-self: stretch;

    ${e=>i.css`
            svg {
                width: 1.5rem;
                height: 1.5rem;
                color: ${tz(e).Text};
            }
            :hover {
                background: transparent;
            }
            ${is.MaxWidth.mobileL} {
                align-self: center;
            }
        `};
`,dz=4e3,uz=K.default.div`
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

                ${is.MaxWidth.mobileL} {
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

                ${is.MaxWidth.mobileL} {
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

                ${is.MaxWidth.mobileL} {
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

                ${is.MaxWidth.mobileL} {
                    max-width: 80vw;
                }
            `}})(e.position)}
    ${e=>e.visible?i.css`
            visibility: "visible";
            opacity: 1;
            transition: ${Ss.Base};
            z-index: 2;
        `:i.css`
            visibility: "hidden";
            opacity: 0;
            transition: ${Ss.Base};
            z-index: -1;
        `}
`,fz=K.default(Ed)`
    border-radius: 4px;
    box-shadow: 3px 2px 10px 1px rgba(91, 91, 91, 0.2);
`,hz=K.default.div`
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
                        border-color: ${ts.Neutral[8]} transparent
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
                        border-color: transparent ${ts.Neutral[8]}
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
                            ${ts.Neutral[8]};
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
                            ${ts.Neutral[8]} transparent;
                    }
                `}}}
`,pz=K.default.div`
    position: relative;
`,gz=n=>{var{visible:r,position:i="top",children:o}=n,a=X(n,["visible","position","children"]);const s=a["data-testid"]||"tooltip",[l,c]=t.useState(i),d=t.useRef(null);t.useEffect((()=>(f(),window.addEventListener("resize",eu(u,300)),()=>{window.removeEventListener("resize",eu(u,300))})),[]);const u=()=>{f()},f=()=>{if(d.current){const e=d.current.getBoundingClientRect();if(e.x<0)switch(i){case"left":case"top":case"bottom":c("right");break;case"right":c("top")}else if(e.x+e.width>window.outerWidth)switch(i){case"right":case"top":case"bottom":c("left");break;case"left":c("top")}else c(i)}};return e.jsxs(uz,Object.assign({position:l,"data-testid":s,visible:r,ref:d},a,{children:[e.jsx(fz,{children:"string"==typeof o?e.jsx(exports.Text.BodySmall,{children:o}):o}),e.jsx(hz,{position:l})]}))},mz=i.css`
    grid-column: ${e=>e.$stretch?"1 / -1":"span 8"};

    ${is.MaxWidth.mobileL} {
        grid-column: 1 / -1;
    }
`,bz=K.default(uy.Content)`
    background: ${({$background:e})=>e?ts.Neutral[7]:"transparent"};
    padding-top: 2rem;
    padding-bottom: 2rem;
`,vz=K.default(exports.Text.H3)`
    margin-bottom: 1rem;
    ${mz}
`,yz=K.default(exports.Text.Body)`
    margin-bottom: 2rem;
    ${mz}
`,xz=K.default.div`
    ${mz}
`,wz=K.default.ul`
    ${mz}
    column-gap: 2rem;
    row-gap: 2rem;
    display: grid;
    grid-template-columns: repeat(8, minmax(0, 1fr));

    ${is.MaxWidth.tablet} {
        column-gap: 1.5rem;
    }

    ${is.MaxWidth.mobileL} {
        column-gap: 1rem;
        grid-template-columns: repeat(4, minmax(0, 1fr));
    }

    :not(:last-child) {
        margin-bottom: 2rem;
    }
`,$z=Y.default.forwardRef(((t,n)=>{var{stretch:r}=t,i=X(t,["stretch"]);return e.jsx(wz,Object.assign({ref:n,$stretch:r},i))})),jz=K.default.li`
    display: flex;
    flex-direction: column;

    ${e=>{switch(e.$widthStyle){case"half":return i.css`
                    grid-column: auto / span 4;
                `;case"full":return i.css`
                    grid-column: auto / span 8;
                `}}}

    ${is.MaxWidth.tablet} {
        grid-column: auto / span 8;
    }

    ${is.MaxWidth.mobileL} {
        grid-column: auto / span 4;
    }

    overflow-wrap: break-word;
`,Sz=K.default.div`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    color: ${ts.Primary};
    margin-left: 0.5rem;

    svg {
        width: 1.125rem;
        height: 1.125rem;
    }
`,kz=K.default.button`
    ${ys.getTextStyle("Body","regular")}
    color: ${ts.Neutral[1]};
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
`,Cz=K.default.span`
    color: ${ts.Neutral[3]};
`,Oz=K.default(Vs)`
    margin-right: 0.5rem;
    #inner1,
    #inner2,
    #inner3,
    #inner4 {
        border-color: ${ts.Neutral[3]} transparent transparent transparent;
    }
`,Tz=K.default(j.ExclamationTriangleIcon)`
    color: ${ts.Validation.Orange.Icon};
    margin-right: 0.5rem;
    height: 1.125rem;
    width: 1.125rem;
`,Dz=K.default.span`
    color: ${ts.Validation.Orange.Text};
`,Iz=K.default.span`
    ${ys.getTextStyle("Body","semibold")}
    color: ${ts.Primary};
    text-decoration: underline;
    margin-left: 0.5rem;
`,Ez=K.default(ll)`
    margin-top: 0.5rem;
`,_z=({label:n,value:r,displayWidth:i="full",maskState:o,maskLoadingState:a,maskChar:s="•",maskRange:l,unmaskRange:c,maskRegex:d,disableMaskUnmask:u,alert:f,maskTransformer:h,onMask:p,onUnmask:g,onTryAgain:m})=>{const[b,v]=t.useState(o);t.useEffect((()=>{v(o)}),[o]);const y=()=>{switch("fail"===a&&m&&m(),b){case"masked":g&&g(),v("unmasked");break;case"unmasked":p&&p(),v("masked")}},x=()=>"string"!=typeof r?r:"masked"===b?dc.maskValue(r,{maskChar:s,maskRange:l,unmaskRange:c,maskRegex:d,maskTransformer:h}):r,j=()=>{switch(a){case"fail":return e.jsxs(e.Fragment,{children:[e.jsx(Tz,{}),e.jsx(Dz,{children:"Error"}),e.jsx(Iz,{children:"Try again?"})]});case"loading":return e.jsxs(e.Fragment,{children:[e.jsx(Oz,{}),e.jsx(Cz,{children:"Retrieving..."})]});default:return e.jsxs(e.Fragment,{children:[x(),e.jsx(Sz,{children:"masked"===b?e.jsx(w.EyeIcon,{"data-testid":"masked-icon"}):e.jsx($.EyeSlashIcon,{"data-testid":"unmasked-icon"})})]})}};return e.jsxs(jz,Object.assign({$widthStyle:i},{children:[e.jsx(iy,{children:n}),"string"!=typeof r?r:b?u?e.jsx(exports.Text.Body,{children:x()}):e.jsx(kz,Object.assign({"data-testid":"clickable-label",onClick:y,"aria-busy":"loading"===a,"aria-live":"polite",type:"button"},{children:j()})):e.jsx(exports.Text.Body,{children:r}),f&&e.jsx(Ez,Object.assign({sizeType:"small"},f))]}))},Mz=Object.assign((t=>{var{items:n,title:r,description:i,topSection:o,bottomSection:a,children:s,background:l=!0,stretch:c,onMask:d,onUnmask:u,onTryAgain:f}=t,h=X(t,["items","title","description","topSection","bottomSection","children","background","stretch","onMask","onUnmask","onTryAgain"]);const p=e=>()=>{d&&d(e)},g=e=>()=>{u&&u(e)},m=e=>()=>{f&&f(e)},b=()=>{if(n&&n.length>0){const t=n.map(((t,n)=>e.jsx(_z,Object.assign({},t,{onMask:p(t),onUnmask:g(t),onTryAgain:m(t)}),n)));return e.jsx(wz,Object.assign({$stretch:c},{children:t}))}return null};return e.jsx(bz,Object.assign({$background:l},h,{type:"grid"},{children:s||e.jsxs(e.Fragment,{children:[r&&e.jsx(vz,Object.assign({weight:"semibold",$stretch:c},{children:r})),i&&e.jsx(yz,Object.assign({$stretch:c},{children:i})),o&&e.jsx(xz,Object.assign({"data-id":"top-section",$stretch:c},{children:o})),b(),a&&e.jsx(xz,Object.assign({"data-id":"bottom-section",$stretch:c},{children:a}))]})}))}),{ItemSection:$z,Item:_z});exports.Accordion=Js,exports.Alert=ll,exports.BaseTheme=ml,exports.BookingSGTheme=bl,exports.BoxContainer=n=>{var{children:r,title:i,collapsible:o=!0,expanded:a=!1,callToActionComponent:s,displayState:l="default",subComponentTestIds:c,clickableHeader:d}=n,u=X(n,["children","title","collapsible","expanded","callToActionComponent","displayState","subComponentTestIds","clickableHeader"]);const[f,h]=t.useState(!o||a),p=qe(),g=p.ref,m=Tl.useMediaQuery({maxWidth:os.mobileL}),b=e=>{e.stopPropagation(),h(!f)},v=di({height:f?p.height:0}),y=()=>o&&e.jsx(Ll,Object.assign({onClick:b,type:"button","aria-label":f?"Collapse":"Expand","data-testid":(null==c?void 0:c.handle)||"handle"},{children:e.jsx(Pl,Object.assign({$expanded:f},{children:e.jsx(zl,{"aria-hidden":!0})}))}));return e.jsxs(Dl,Object.assign({},u,{children:[e.jsxs(Ml,Object.assign({"data-testid":"header",onClick:d&&o&&b,$interactive:d&&o},{children:[e.jsxs(Al,{children:[e.jsx(Rl,Object.assign({id:"title","data-testid":(null==c?void 0:c.title)||"title",weight:"semibold"},{children:i})),(()=>{switch(l){case"error":case"warning":return e.jsx(Nl,Object.assign({$displayState:l,"data-testid":(null==c?void 0:c.displayStateIcon)||`${l}-icon`},{children:e.jsx(Bl,{})}));default:return null}})(),m&&y()]}),s&&e.jsx(Fl,Object.assign({$collapsible:o,"data-testid":"call-to-action-container"},{children:s})),!m&&y()]})),o?e.jsx(Il,Object.assign({style:v,"data-testid":"expandable-container"},{children:e.jsx(_l,Object.assign({ref:g},{children:r}))})):e.jsx(El,Object.assign({"data-testid":"non-expandable-container"},{children:e.jsx(_l,{children:r})}))]}))},exports.Breadcrumb=n=>{var{links:r,fadeColor:i,fadePosition:o="both",itemStyle:a,id:s}=n,l=X(n,["links","fadeColor","fadePosition","itemStyle","id"]);const[c,d]=t.useState(!1),[u,f]=t.useState(!1),[h,p]=t.useState(!1),g="left"===o||"both"===o,m="right"===o||"both"===o,b=t.useRef(null),v=t.useRef(null),y=uc((()=>{const e=v.current,t=b.current;e&&t&&r&&r.length>1&&window.innerWidth<=ns.tablet&&(e.scrollLeft=e.scrollWidth-t.offsetWidth)})),x=uc((()=>{const e=window.innerWidth<=ns.tablet;d(e);const t=v.current,n=b.current;if(t&&n&&e&&t.scrollWidth>n.offsetWidth)return f(t.scrollLeft>=1),void p(t.scrollWidth-t.scrollLeft-1>n.offsetWidth);f(!1),p(!1)}));if(fc("resize",x),fc("scroll",x,v.current),hc((()=>{y(),x()}),[y,x]),qe({onResize:y,targetRef:b,refreshMode:"debounce",refreshRate:50,skipOnMount:!0}),!r)return null;return e.jsxs(vc,Object.assign({ref:b,id:s||"breadcrumb"},l,{children:[e.jsx("nav",{children:e.jsx(yc,Object.assign({ref:v},{children:r.map(((t,n)=>{let i;return t.children?(i=n!==r.length-1&&t.href?e.jsx(Sc,Object.assign({},t,{weight:"semibold"})):e.jsx(jc,Object.assign({weight:"semibold"},{children:t.children})),e.jsxs(wc,Object.assign({$styleProps:a},{children:[i,n<r.length-1&&e.jsx($c,{})]}),n)):null}))}))}),c&&(()=>{let t;return t=Array.isArray(i)&&i.length>0?{left:i,right:i}:i||{left:void 0,right:void 0},e.jsxs(e.Fragment,{children:[u&&g&&e.jsx(xc,{$backgroundColor:t.left,$position:"left"}),h&&m&&e.jsx(xc,{$backgroundColor:t.right,$position:"right"})]})})()]}))},exports.Button=qs,exports.ButtonWithIcon=Cc,exports.CCubeTheme=xl,exports.Calendar=n=>{var{className:r,styleType:i="bordered",value:o,onSelect:a}=n,s=X(n,["className","styleType","value","onSelect"]);const[l,c]=t.useState(o);return t.useEffect((()=>{c(o)}),[o]),e.jsx(Dd,Object.assign({className:r,$hasBorder:"bordered"===i},{children:e.jsx(Od,Object.assign({type:"standalone",value:l,initialCalendarDate:l,onSelect:e=>{c(e),null==a||a(e)}},s))}))},exports.Card=Ed,exports.Checkbox=Ad,exports.Color=ts,exports.Component=QR,exports.CountdownTimer=n=>{var{className:r,align:i="right",timer:o,timestamp:a,notifyTimer:s,offset:l,mobileOffset:c,show:d,fixed:f=!0,"data-testid":h,onFinish:p,onNotify:g,onTick:m}=n,b=X(n,["className","align","timer","timestamp","notifyTimer","offset","mobileOffset","show","fixed","data-testid","onFinish","onNotify","onTick"]);const v=t.useRef(),y=t.useRef(!1),[x,w]=t.useState(0),[$,j]=t.useState(0),[S,k]=t.useState(0),[C,O]=t.useState(!1),[T]=((e,n,r)=>{const[i,o]=t.useState(e);t.useEffect((()=>{if(!n)return;const t=null!=r?r:Date.now()+1e3*e,i=a(t);return()=>clearTimeout(i)}),[r,n,e]);const a=e=>{const t=()=>{const n=e-Date.now(),r=n%1e3,i=Math.max(Math.round(n/1e3),0);if(o(i),0!==i)return setTimeout(t,r>500?r:r+1e3)};return t()};return[i]})(o,C,a),{ref:D,inView:I}=du({threshold:1,rootMargin:-1*x+"px 0px 0px 0px",initialInView:!0}),E=!f||I,_=Tl.useMediaQuery({maxWidth:ns.mobileL});t.useEffect((()=>{O(d)}),[d]),t.useEffect((()=>{0===T?N():T<=s&&(R(),A())}),[T]),t.useEffect((()=>{const e=function(){var e,t;const n=null!==(e=null==l?void 0:l.top)&&void 0!==e?e:168,r=null!==(t=null==c?void 0:c.top)&&void 0!==t?t:80,i=_?r:n;return i}();w(e)}),[_,null==l?void 0:l.top,null==c?void 0:c.top]),t.useEffect((()=>{if(v.current){const e=ru(M,300);return M(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}}),[v.current]),t.useEffect((()=>{y.current=!1}),[o,d]);const M=()=>{var e;const t=null===(e=v.current)||void 0===e?void 0:e.getBoundingClientRect();k(t.x),j(t.right)},R=()=>{m&&m(T)},A=()=>{g&&!y.current&&(y.current=!0,g())},N=()=>{O(!1),p&&p()};const B=()=>{const{minutes:t,seconds:n}=vu.toMinutesSeconds(T),r=1!==t?"mins":"min",i=1!==n?"secs":"sec";return e.jsxs(e.Fragment,{children:[e.jsx(u.ClockIcon,{}),e.jsx(gu,{children:"Time left:"}),e.jsxs(mu,{children:[t," ",r," ",String(n).padStart(2,"0")," ",i]})]})};if(void 0!==typeof window)return C||0===T?e.jsxs(uu,Object.assign({className:r},b,{children:[e.jsx("div",{ref:D}),e.jsx(hu,Object.assign({"data-testid":h,"data-id":"countdown-wrapper",ref:v,inert:E?void 0:"",$visible:E,$warn:T<=s},{children:B()})),v.current&&!E&&(()=>{var t,n;const r=null!==(t=null==l?void 0:l.left)&&void 0!==t?t:"left"===i?S:void 0,o=null!==(n=null==l?void 0:l.right)&&void 0!==n?n:"right"===i?Math.floor(document.body.clientWidth-$):void 0;return e.jsx(pu,Object.assign({"data-testid":h,"data-id":"fixed-countdown-wrapper",$warn:T<=s,$top:x,$left:r,$right:o},{children:B()}))})()]})):e.jsx(e.Fragment,{})},exports.DataTable=n=>{var{id:r,headers:i,rows:o,className:a,sortIndicators:s,alternatingRows:l,loadState:c="success",enableMultiSelect:d,selectedIds:f,disabledIds:h,enableActionBar:p,enableSelectAll:g,enableStickyHeader:m,emptyView:b,actionBarContent:v,renderCustomEmptyView:y,onHeaderClick:x,onSelect:w,onSelectAll:$,onClearSelectionClick:j}=n,S=X(n,["id","headers","rows","className","sortIndicators","alternatingRows","loadState","enableMultiSelect","selectedIds","disabledIds","enableActionBar","enableSelectAll","enableStickyHeader","emptyView","actionBarContent","renderCustomEmptyView","onHeaderClick","onSelect","onSelectAll","onClearSelectionClick"]);const k=t.useRef(null),C=t.useRef(null),O=t.useRef(null),T=t.useRef(null),D=t.useRef(null),[I,E]=t.useState(!1),[_,M]=t.useState(!1),[R,A]=t.useState(!1),[N,B]=t.useState(!1),[F,L]=t.useState(!1),{ref:P,inView:z}=du(),H=t.useCallback((()=>{if(!D.current||!T.current)return;const e=D.current.scrollHeight>D.current.clientHeight;E(e),e?T.current.style.transform="translateY(0)":Z()}),[]);t.useEffect((()=>{H()}),[]),qe({onResize:H});fc("scroll",(()=>{requestAnimationFrame((()=>{I?G():Z()})),D.current&&A(D.current.getBoundingClientRect().bottom<=window.innerHeight)}),"window"),t.useEffect((()=>{Q()}),[o]);const W=()=>(null==f?void 0:f.length)===o.length,V=e=>!!(null==f?void 0:f.includes(e)),Y=e=>!!l&&e%2==1,U=e=>!!(null==h?void 0:h.includes(e)),K=e=>{if(S["data-testid"])return`${S["data-testid"]}-${e}`},q=()=>i.length+(d?1:0),G=()=>{if(!D.current)return;const e=D.current.getBoundingClientRect();B(e.bottom>window.innerHeight+30&&e.top<window.innerHeight-200)},Z=()=>{if(!(k.current&&C.current&&D.current&&T.current&&O.current))return;const e=C.current.getBoundingClientRect();if(e.top>window.innerHeight){const t=e.bottom-window.innerHeight,n=k.current.getBoundingClientRect().height-O.current.clientHeight-32,r=Math.min(t,n);T.current.style.transform=`translateY(-${r}px)`}else T.current.style.transform="translateY(0)"},Q=()=>{k.current&&D.current&&L(k.current.clientHeight+(p?56:0)<D.current.clientHeight)},J=t=>{const{fieldKey:n,label:r,clickable:i=!1,style:o}="string"==typeof t?{fieldKey:t,label:t,style:void 0}:t;return e.jsx(Uu,Object.assign({"data-testid":K(`header-${n}`),$clickable:i,onClick:()=>i&&(null==x?void 0:x(n)),style:o,$isCheckbox:!1},{children:e.jsxs(Ku,{children:["string"==typeof r?e.jsx(exports.Text.H4,Object.assign({weight:"bold"},{children:r})):r,ee(n)]})}),n)},ee=t=>{const n=null==s?void 0:s[t];return n?"asc"===n?e.jsx(u.ArrowUpIcon,{"data-testid":K(`header-${t}-arrowup`)}):e.jsx(u.ArrowDownIcon,{"data-testid":K(`header-${t}-arrowdown`)}):e.jsx(e.Fragment,{})},te=()=>e.jsx(Uu,Object.assign({"data-testid":K("header-selection"),$clickable:!1,$isCheckbox:!0},{children:e.jsx(Zu,{children:g&&e.jsx(Ad,{displaySize:"small",checked:W(),indeterminate:f&&0!==f.length&&!W(),onClick:()=>{$&&$(W())}})})})),ne=(t,n)=>{const r="string"!=typeof t?t.style:void 0,i="string"==typeof t?t:t.fieldKey,o=n.id.toString(),a=n[i],s=`${o}-${i}`;return e.jsx(Xu,Object.assign({"data-testid":K(`row-${s}`),style:r,$isCheckbox:!1},{children:"string"==typeof a||"number"==typeof a?e.jsx(Gu,{children:a}):"function"==typeof a?a(n,{isSelected:V(o)}):a}),s)},re=t=>e.jsx(Xu,Object.assign({"data-testid":K(`row-${t}-selection`),$isCheckbox:!0},{children:e.jsx(Zu,{children:e.jsx(Ad,{displaySize:"small",checked:V(t),onClick:()=>{w&&w(t,!V(t))},disabled:U(t)})})})),ie=()=>e.jsx(Ju,Object.assign({type:"no-item-found"},b,{title:(null==b?void 0:b.title)?"string"==typeof b.title?e.jsx(exports.Text.H3,{children:b.title}):b.title:e.jsx(exports.Text.H3,{children:"No <items> found"}),description:(null==b?void 0:b.description)?b.description:"No matching rows"}));return e.jsxs(Lu,Object.assign({id:r||"table-wrapper","data-testid":S["data-testid"]||"table",className:a,ref:D,onScroll:()=>{I&&D.current&&M(D.current.scrollTop+D.current.clientHeight>=D.current.scrollHeight)}},{children:[e.jsx(Pu,{children:e.jsxs(zu,Object.assign({$end:R,$scrollable:I,ref:k,$stickyHeader:m},{children:[e.jsx("thead",Object.assign({ref:O},{children:e.jsxs(Yu,{children:[d&&te(),i.map(J)]})})),e.jsx(Hu,Object.assign({$showLastRowBottomBorder:F},{children:"success"===c?!o||o.length<1?e.jsx("tr",{children:e.jsx(ef,Object.assign({colSpan:q()},{children:y?y():ie()}))}):e.jsx(e.Fragment,{children:null==o?void 0:o.map(((t,n)=>e.jsxs(qu,Object.assign({"data-testid":K(`row-${t.id.toString()}`),$alternating:Y(n),$isSelectable:d,$isSelected:V(t.id.toString())},{children:[d&&re(t.id.toString()),i.map((e=>ne(e,t)))]}),t.id.toString())))}):e.jsx("tr",{children:e.jsx("td",Object.assign({colSpan:q()},{children:e.jsx(Qu,{children:"loading"===c&&e.jsx(jl,{})})}))})}))]}))}),p&&f&&f.length>0&&(()=>{var t,n,r;return e.jsx(Wu,Object.assign({ref:T,$fixed:N,$left:null===(n=null===(t=null==k?void 0:k.current)||void 0===t?void 0:t.getBoundingClientRect())||void 0===n?void 0:n.left,$width:null===(r=null==k?void 0:k.current)||void 0===r?void 0:r.clientWidth},{children:e.jsxs(Vu,Object.assign({$float:(I?!_:!z)||N,$scrollable:I},{children:[e.jsx(exports.Text.H5,Object.assign({weight:"semibold"},{children:`${f.length} item${f.length>1?"s":""} selected`})),e.jsx(qs.Small,Object.assign({styleType:"link",onClick:j},{children:"Clear selection"})),v]}))}))})(),e.jsx("div",{ref:e=>{C.current=e,P(e)}})]}))},exports.DateInput=Bf,exports.DateNavigator=zf,exports.DateRangeInput=Qf,exports.DesignToken=Bs,exports.Divider=t=>{var{thickness:n=1,lineStyle:r="solid",layoutType:i="flex",color:o,className:a,mobileCols:s=4,tabletCols:l=8,desktopCols:c=12}=t,d=X(t,["thickness","lineStyle","layoutType","color","className","mobileCols","tabletCols","desktopCols"]);switch(i){case"flex":return e.jsx(rh,Object.assign({className:a,$thickness:n,$lineStyle:r,$color:o},d));case"grid":return e.jsx(eh,Object.assign({className:a,mobileCols:s,tabletCols:l,desktopCols:c},d,{children:e.jsx(rh,{$thickness:n,$lineStyle:r,$color:o})}))}},exports.Drawer=n=>{var{children:r,heading:i,show:o,onClose:a,onOverlayClick:s}=n,l=X(n,["children","heading","show","onClose","onOverlayClick"]);const[c,d]=t.useState(o),[u]=t.useState((()=>cc.generate())),f=t.useRef();t.useEffect((()=>{if(!o){const e=setTimeout((()=>d(!1)),500);return()=>clearTimeout(e)}d(!0)}),[o]);return e.jsx(sh,Object.assign({show:c,enableOverlayClick:!0,onOverlayClick:s},{children:e.jsxs(dh,Object.assign({$show:o,"data-testid":"drawer",onClick:e=>{e.stopPropagation()},role:"dialog","aria-labelledby":u,onTransitionEnd:e=>{"visibility"===e.propertyName&&o&&f.current.focus()}},l,{children:[e.jsxs(uh,{children:[e.jsx(hh,Object.assign({id:u,ref:f,tabIndex:-1},{children:i})),e.jsx(fh,Object.assign({"aria-label":"Close drawer",onClick:a,focusHighlight:!1},{children:e.jsx(m.CrossIcon,{"aria-hidden":!0})}))]}),e.jsx(ph,{children:r})]}))}))},exports.ESignature=Yh,exports.ErrorDisplay=Nu,exports.FeedbackRating=t=>{const{imgSrc:n,buttonLabel:r,description:i,rating:o,onRatingChange:a,onSubmit:s}=t,l=X(t,["imgSrc","buttonLabel","description","rating","onRatingChange","onSubmit"]),c=null!=n?n:Uh,d=null!=i?i:qh;return e.jsxs(ip,Object.assign({},l,{children:[c&&e.jsx(rp,{"data-testid":"feedback-banner-image",src:c,alt:"",onError:e=>e.currentTarget.style.display="none"}),e.jsxs(op,{children:[e.jsx(exports.Text.H3,Object.assign({weight:"semibold"},{children:d})),e.jsx(np,{description:d,rating:o,onRatingChange:a}),e.jsx(ap,Object.assign({disabled:!o,onClick:s,type:"button"},{children:null!=r?r:Kh}))]})]}))},exports.FileDownload=({id:t,fileItems:n,title:r,description:i,onDownload:o,"data-testid":a,className:s,styleType:l="bordered"})=>{const c=e=>G(void 0,void 0,void 0,(function*(){o&&(yield o(e))}));return e.jsxs(sp,Object.assign({id:t?`${t}-file-download`:"file-download",className:s,"data-testid":a,$border:"bordered"===l},{children:[(r||i)&&e.jsxs(lp,{children:[r?"string"==typeof r?e.jsx(cp,Object.assign({weight:"regular"},{children:r})):e.jsx(dp,{children:r}):null,i?"string"==typeof i?e.jsx(up,Object.assign({weight:"regular"},{children:i})):e.jsx(fp,{children:i}):null]}),e.jsx(hp,{children:n&&n.length>0&&n.map((t=>e.jsx(Ep,{fileItem:t,onDownload:c},t.id)))})]}))},exports.FileUpload=({styleType:n="bordered",fileItems:r,title:i,description:o,maxFiles:a,warning:s,className:l,name:c,id:d,"data-testid":u,accept:f,capture:h,multiple:p,disabled:g,sortable:m=!1,fileDescriptionMaxLength:b,editableFileItems:v=!1,errorMessage:y,readOnly:x,onChange:w,onDelete:$,onEdit:j,onSort:S})=>{const k=t.useRef(),[C,O]=t.useState(),T=()=>!!a&&r.length>=a;return e.jsx(Mp.Provider,Object.assign({value:{activeId:C,setActiveId:O}},{children:e.jsxs(dm,Object.assign({ref:k,onChange:e=>{!g&&w&&w(e)},id:d?`${d}-dropzone`:"dropzone",accept:f,capture:h,border:"bordered"===n,className:l,"data-testid":u,name:c,multiple:p,disabled:g||T()||x},{children:[(i||o)&&e.jsxs(u_,{children:[i?"string"==typeof i?e.jsx(f_,Object.assign({weight:"regular"},{children:i})):e.jsx(h_,{children:i}):null,o?"string"==typeof o?e.jsx(p_,Object.assign({weight:"regular"},{children:o})):e.jsx(g_,{children:o}):null]}),s&&e.jsx(m_,Object.assign({type:"warning"},{children:s})),e.jsx(d_,{fileItems:r,editableFileItems:v,fileDescriptionMaxLength:b,sortable:m,disabled:g,readOnly:x,onItemDelete:e=>{$&&$(e)},onItemUpdate:e=>{j&&j(e)},onSort:e=>{S&&S(e)}}),y&&e.jsx(x_,Object.assign({type:"error"},{children:y})),!x&&e.jsxs(b_,{children:[e.jsx(v_,Object.assign({type:"button",styleType:"secondary",disabled:!!C||g||T(),onClick:e=>{g||(e.preventDefault(),k.current&&k.current.openFileDialog())}},{children:"Upload files"})),e.jsx(y_,{children:"or drop them here"})]})]}))}))},exports.Filter=J_,exports.Footer=t=>{var{children:n,links:r,lastUpdated:o,disclaimerLinks:a,showDownloadAddon:s,logoSrc:l,copyrightInfo:c,onFooterLinkClick:d,layout:u="default"}=t,f=X(t,["children","links","lastUpdated","disclaimerLinks","showDownloadAddon","logoSrc","copyrightInfo","onFooterLinkClick","layout"]);const h="stretch"===u,p=i.useTheme(),g=t=>t.map(((t,n)=>{const r=X(t,["data-options"]);return e.jsx("li",{children:e.jsx(dM,Object.assign({},r,{onClick:e=>((e,t)=>{t.onClick?(e.preventDefault(),t.onClick(e)):d&&(e.preventDefault(),d(t))})(e,t)}))},n)}));return e.jsxs(cM,Object.assign({},f,{children:[(()=>{let t=null;return n||((r||s)&&(t=e.jsxs(e.Fragment,{children:[e.jsx(fM,Object.assign({"data-testid":"logo-section"},{children:e.jsx("img",{src:l||lM.getFooterLogo(null==p?void 0:p.resourceScheme),alt:"LifeSG","data-testid":"logo"})})),(null==r?void 0:r[0])&&e.jsx(hM,Object.assign({"data-testid":"link-col-1"},{children:g(r[0])}),"link-col-1"),(null==r?void 0:r[1])&&e.jsx(hM,Object.assign({"data-testid":"link-col-2"},{children:g(r[1])}),"link-col-2"),s&&e.jsx(pM,{children:e.jsx(iM,{})})]})),t?e.jsx(uM,Object.assign({type:"grid",stretch:h},{children:t})):null)})(),e.jsx(gM,{}),e.jsxs(mM,Object.assign({type:"grid",stretch:h},{children:[e.jsx(bM,{children:(()=>{const t=lM.getDisclaimerLinks(null==p?void 0:p.resourceScheme,a);return Object.keys(t).map((n=>e.jsx(yM,Object.assign({},t[n]),n)))})()},"disclaimer"),e.jsx(vM,{children:e.jsx(exports.Text.XSmall,Object.assign({"data-testid":"copyright-text"},{children:c||e.jsxs(e.Fragment,{children:["©"," ",lM.getCopyrightInfo(o,null==p?void 0:p.resourceScheme)]})}))},"copyright")]}))]}))},exports.Form=_E,exports.FullscreenImageCarousel=JR,exports.HistogramSlider=Ly,exports.IconButton=vh,exports.ImageButton=tA,exports.Input=Vy,exports.InputGroup=Yj,exports.InputMultiSelect=zD,exports.InputNestedMultiSelect=VD,exports.InputNestedSelect=YD,exports.InputRangeSelect=hI,exports.InputRangeSlider=My,exports.InputSelect=pI,exports.InputSlider=wI,exports.Layout=uy,exports.LinkList=n=>{var{items:r,maxShown:i,style:o="default",onItemClick:a}=n,s=X(n,["items","maxShown","style","onItemClick"]);const[l,c]=t.useState(!i||i>=r.length),d=i?r.slice(0,i):r,u=i?r.slice(i):[],f=qe(),h=f.ref,p=(e,t)=>{t.onClick?(e.preventDefault(),t.onClick(e)):a&&(e.preventDefault(),a(t,e))},g=()=>{c(!l)},m=(t,n,r,i)=>{const a="small"===o?oA:iA;return e.jsxs(e.Fragment,{children:[e.jsxs(lA,{children:[e.jsx(a,Object.assign({"data-testid":`link-title-${t}`,weight:"semibold"},{children:n})),r&&e.jsx(cA,Object.assign({"data-testid":`link-description-${t}`},{children:r})),i]}),e.jsx(aA,{})]})},b=di({height:l?f.height:0});return e.jsxs(rA,Object.assign({},s,{children:[d.map(((t,n)=>{const{title:r,description:i,secondaryDescription:o,onClick:a}=t,s=X(t,["title","description","secondaryDescription","onClick"]);return e.jsx(sA,Object.assign({"data-testid":`list-item-shown-${n}`,onClick:e=>p(e,t)},s,{children:m(n,r,i,o)}),`list-item-shown-${n}`)})),u.length>0&&e.jsx(dA,Object.assign({style:b,"data-testid":"minimised-content"},{children:e.jsx(uA,Object.assign({ref:h},{children:u.map(((t,n)=>{const{title:r,description:i,onClick:o,secondaryDescription:a}=t,s=X(t,["title","description","onClick","secondaryDescription"]);return e.jsx(sA,Object.assign({"data-testid":`list-item-minimised-${n}`,onClick:e=>p(e,t)},s,{children:m(n,r,i,a)}),`list-item-minimised-${n}`)}))}))})),u.length>0&&e.jsxs(gA,Object.assign({type:"button",onClick:g,"data-testid":"toggle-button",$showMinimised:l},{children:[e.jsx(fA,Object.assign({weight:"semibold","data-testid":"toggle-button-label"},{children:l?"View less":"View more"})),l?e.jsx(pA,{}):e.jsx(hA,{})]}))]}))},exports.LoadingDots=hl,exports.LoadingDotsSpinner=jl,exports.LoadingSpinner=n=>e.jsx(ul,Object.assign({},n,{children:e.jsx(t.Suspense,Object.assign({fallback:e.jsx(dl,{})},{children:e.jsx(cl,{})}))})),exports.Markup=bA,exports.MaskedInput=oS,exports.Masonry=xA,exports.Masthead=$A,exports.MediaQuery=is,exports.MediaWidths=os,exports.Modal=Sh,exports.MyLegacyTheme=yl,exports.NBComponent=DN,exports.Navbar=bN,exports.NavbarHeight=vN,exports.NavbarMobileHeight=3.5,exports.NotificationBanner=_N,exports.OneServiceTheme=wl,exports.OtpInput=n=>{var{id:r,value:i=[],"data-testid":o,className:a,cooldownDuration:s,actionButtonProps:l,errorMessage:c,numOfInput:d,onChange:u,onCooldownStart:f,onCooldownEnd:h}=n,p=X(n,["id","value","data-testid","className","cooldownDuration","actionButtonProps","errorMessage","numOfInput","onChange","onCooldownStart","onCooldownEnd"]);const g=null!=l?l:{},{disabled:m,onClick:b,styleType:v="secondary"}=g,y=X(g,["disabled","onClick","styleType"]),x=t.useRef([]),w=t.useRef(u),[$,j]=t.useState(new Array(d).fill("")),[S,k]=t.useState(s),[C,O]=t.useState(new Date);t.useEffect((()=>{var e;return null===(e=null==x?void 0:x.current[0])||void 0===e||e.focus(),document.addEventListener("paste",I),()=>document.removeEventListener("paste",I)}),[]),t.useEffect((()=>{if(0!==s){f&&f();const e=M();return()=>e()}}),[C]),t.useEffect((()=>{w.current=u}),[u]),t.useEffect((()=>{i.length===d&&j(i)}),[i]);const T=e=>t=>{var n;const r=t.target.value.replace(/[^0-9]/g,"");if(E(r)){const t=[...$];t[e]=r.substring(r.length-1),null===(n=x.current[e+1])||void 0===n||n.focus(),j(t),u&&u(t)}},D=e=>t=>{var n;const{key:r,code:i}=t;if("Backspace"===r||"Backspace"===i){const t=[...$];""!==t[e]?t[e]="":0!==e&&(t[e-1]="",null===(n=x.current[e-1])||void 0===n||n.focus()),j(t),u&&u(t)}},I=e=>{const t=e.clipboardData.getData("text"),n=t.split("");t&&E(t,d)?(j(n),w.current&&w.current(n)):e.preventDefault()},E=(e,t=1)=>!!e&&RegExp(`^[0-9]{${t}}$`).test(e),_=()=>{const e=Date.now(),t=1e3*s;return e<C.valueOf()+t},M=()=>{const e=setInterval((()=>{const t=Date.now(),n=1e3*s,r=Math.ceil((C.valueOf()+n-t)/1e3);k(r),r<=0&&(h&&h(),clearInterval(e))}),1e3);return()=>{clearInterval(e)}},R=(e,t,n)=>n?`${n}-${t}-${e+1}`:`${t}-${e+1}`;return e.jsxs(AN,Object.assign({id:r,"data-testid":o,className:a},{children:[e.jsx(NN,{children:$.map(((t,n)=>e.jsx(BN,Object.assign({id:R(n,"otp-input",r),"data-testid":R(n,"otp-input",o),"aria-label":`Enter OTP character ${n+1}`,ref:e=>x.current[n]=e,type:"text",inputMode:"numeric",value:t,error:!!c,onChange:T(n),onKeyDown:D(n),autoComplete:"off"},p),n)))}),c&&e.jsx(oy,{children:c}),e.jsx(FN,Object.assign({styleType:v,type:"button"},y,{onClick:e=>{j(new Array(d).fill("")),_()||(O(new Date),k(s)),b&&b(e)},disabled:m||_()},{children:y.children?y.children:"Resend OTP"+(S?` in ${S} second${S>1?"s":""}`:"")}))]}))},exports.Overlay=sh,exports.Pagination=QN,exports.PhoneNumberInput=aI,exports.Pill=nB,exports.Popover=lB,exports.PopoverInline=Qv,exports.PopoverTrigger=qv,exports.PopoverV2=Uv,exports.PredictiveTextInput=cI,exports.ProgressIndicator=t=>{var{steps:n,currentIndex:r,displayExtractor:i,fadeColor:o,fadePosition:a="both"}=t,s=X(t,["steps","currentIndex","displayExtractor","fadeColor","fadePosition"]);const l=Tl.useMediaQuery({maxWidth:os.tablet}),c=e=>i?i(e):e.toString(),d=(e,t)=>eF(`${((e,t)=>e<t?"Completed step":e===t?"Current step":"Uncompleted step")(e,t)} ${e}`);if(!n.length)return null;return e.jsxs(cB,Object.assign({},s,{children:[e.jsx(dB,{children:n.map(((t,n)=>{const i=n<=r;return e.jsx(pB,Object.assign({id:d(n,r)},{children:e.jsx(uB,{highlighted:i})}),n)}))}),e.jsx(dB,{children:l?e.jsxs(pB,Object.assign({id:d(r,r)},{children:[e.jsxs(hB,Object.assign({weight:"semibold",id:`${d(r,r)}-counter`},{children:["Step ",r+1," of ",n.length]})),e.jsx(hB,Object.assign({weight:"regular",id:`${d(r,r)}-title`},{children:c(n[r])}))]}),r):n.map(((t,n)=>{const i=n<=r,o=n===r,a=o?"bold":"regular";return e.jsx(pB,Object.assign({id:`${d(n,r)}-title`},{children:e.jsx(fB,Object.assign({highlighted:i,weight:a,"aria-current":o},{children:c(t)}))}),n)}))})]}))},exports.RBSTheme=vl,exports.RadioButton=t=>{var{className:n,checked:r,disabled:i,onChange:o}=t,a=X(t,["className","checked","disabled","onChange"]);return e.jsxs(tF,Object.assign({$selected:r,$disabled:i,className:n,"data-testid":"radio-button"},{children:[e.jsx(nF,Object.assign({type:"radio","data-testid":"radio-input",onChange:e=>{i||null==o||o(e)},checked:r,disabled:i},a)),e.jsx(rF,{id:"checkmark","data-testid":"checkmark",$disabled:i,$selected:r})]}))},exports.SelectHistogram=xI,exports.Sidenav=kF,exports.SignatureCanvas=Wh,exports.SignatureCanvasContainer=Hh,exports.SmartAppBanner=YF,exports.Tab=aL,exports.Tag=t=>{var{type:n,colorType:r="black",children:i,interactive:o=!1,icon:a,iconPosition:s="left"}=t,l=X(t,["type","colorType","children","interactive","icon","iconPosition"]);return e.jsxs(sL,Object.assign({as:o?"button":"div",$type:n,$color:r,$interactive:o},l,{children:["left"===s&&a,e.jsx(lL,{children:i}),"right"===s&&a]}))},exports.TextList=PI,exports.TextStyle=hs,exports.TextStyleHelper=ys,exports.Textarea=OI,exports.TimeRangePicker=wE,exports.TimeSlotBar=({"data-testid":n,className:r,variant:i="default",startTime:o,endTime:a,slots:s,onSlotClick:l,onClick:c,styleAttributes:d})=>{const u=t.useRef(null),[f,h]=t.useState(0),[p,g]=t.useState(0),m=uL(i),b=2.5*m;t.useEffect((()=>{const e=u.current;return e&&e.addEventListener("scroll",v),()=>{e&&e.removeEventListener("scroll",v)}}),[]);const v=()=>{u.current&&h(u.current.scrollLeft)},y=e=>{u.current&&u.current.scrollBy({left:"left"===e?-b:b,behavior:"smooth"})};qe({onResize:()=>{u.current&&g(u.current.clientWidth)},targetRef:u,refreshMode:"debounce",refreshRate:50});const x=e=>e<=m/2,w=e=>{if(n)return`${n}-${e}`},$=(e,t,n)=>{const r=0===e.minute();if("default"===n)return r;return r&&(t?e.hour()%2==0:e.hour()%2==1)};return e.jsxs(hL,Object.assign({className:r},{children:[e.jsxs(bL,Object.assign({"data-testid":n,ref:u,$variant:i},{children:[e.jsx(vL,Object.assign({"data-testid":w("time-marker-wrapper"),"data-id":"marker-wrapper"},{children:(()=>{const t=[],n=Wl(o,"HH:mm"),r=Wl(a,"HH:mm"),s=n.hour()%2==0;for(let o=n;o.isBefore(r);o=o.add(30,"minute")){const n=$(o,s,i);t.push(e.jsx(xL,Object.assign({$isLongMarker:n,$variant:i},{children:n&&e.jsx(wL,Object.assign({weight:"semibold"},{children:cL.formatHourlyDisplay(o.format("HH:mm"))}))}),o.format("HH:mm")))}return t})()})),e.jsxs(yL,Object.assign({"data-testid":w("time-slot-wrapper"),"data-id":"slot-wrapper"},{children:[d&&(()=>{const{backgroundColor:t,backgroundColor2:n,styleType:r="default"}=d,s=cL.calculateWidth(o,a,m),l=!!c&&"default"===i;return e.jsxs(e.Fragment,{children:[e.jsx(jL,{$variant:i}),e.jsx($L,{"data-testid":w("default-timeslot"),$width:s,$variant:i,$left:0,$styleType:r,$bgColor:t,$bgColor2:n,$clickable:l,onClick:l?c:void 0},"default-timeslot")]})})(),s.map((t=>{const{id:n,startTime:r,endTime:s,label:c,clickable:d=!0,styleAttributes:u}=t,{color:f,styleType:h="default",backgroundColor:p,backgroundColor2:g}=u,b=cL.calculateWidth(r,s,m),v=cL.calculateWidth(o,r,m),y=d&&"default"===i;return e.jsxs("div",{children:[e.jsx(jL,{$variant:i,style:{left:`${v}px`}}),e.jsx($L,Object.assign({"data-testid":w(`${n}-timeslot`),$width:b,$left:v,$styleType:h,$variant:i,$bgColor:p,$bgColor2:g,$clickable:y,onClick:()=>y&&l(t)},{children:c&&"default"===i&&e.jsx(SL,Object.assign({$slotWidth:b,$color:f,weight:"semibold"},{children:x(b)?"...":c}))})),a!==s&&e.jsx(jL,{$variant:i,style:{left:`${v+b}px`}})]},n)}))]}))]})),e.jsx(e.Fragment,{children:f>0&&e.jsx(pL,Object.assign({"data-testid":w("arrow-left"),$direction:"left",$variant:i,focusHighlight:!1,focusOutline:"none",onClick:()=>{y("left")}},{children:e.jsx(mL,{})}))}),f+p<cL.calculateWidth(o,a,m)?e.jsx(pL,Object.assign({"data-testid":w("arrow-right"),$direction:"right",$variant:i,focusHighlight:!1,focusOutline:"none",onClick:()=>{y("right")}},{children:e.jsx(gL,{})})):e.jsx(e.Fragment,{})]}))},exports.TimeSlotBarWeek=n=>{var{disabledDates:r,onWeekDisplayChange:i,onChange:o,value:a,minDate:s,maxDate:l,startTime:c,endTime:d,slots:u,interval:f,variant:h,maxVisibleCellHeight:p,showNavigationHeader:g=!0,enableSelection:m,onSlotClick:b,currentCalendarDate:v}=n,y=X(n,["disabledDates","onWeekDisplayChange","onChange","value","minDate","maxDate","startTime","endTime","slots","interval","variant","maxVisibleCellHeight","showNavigationHeader","enableSelection","onSlotClick","currentCalendarDate"]);const[x,w]=t.useState(a),$=t.useRef(),j=t.useRef(void 0);t.useEffect((()=>{w(a)}),[a]);const S=e=>{const t=e.format(ZL);w(t),o&&o(t)},k=(e,t)=>{b&&b(e,t)},C=e=>{if(i){const t={week:{firstDayOfWeek:e.startOf("week").format(ZL),lastDayOfWeek:e.endOf("week").format(ZL)},month:e.month()+1,year:e.year()};i(t)}};return e.jsx(GL,Object.assign({},y,{children:e.jsx(Qc,Object.assign({ref:$,type:"standalone",dynamicHeight:!0,initialCalendarDate:sc.toDayjs(x||v).endOf("week").format(ZL),selectedStartDate:x,getLeftArrowDate:e=>e.subtract(1,"week"),getRightArrowDate:e=>e.add(1,"week"),isLeftArrowDisabled:e=>s&&Wl(e).subtract(1,"week").isBefore(s,"week"),isRightArrowDisabled:e=>l&&Wl(e).add(1,"week").isAfter(l,"week"),onCalendarDateChange:e=>{j.current&&j.current.isSame(e,"week")||C(e),j.current=e},showNavigationHeader:g,minDate:s,maxDate:l,getMonthHeaderLabel:e=>Wl(e).endOf("week").format("MMM"),getYearHeaderLabel:e=>Wl(e).endOf("week").format("YYYY")},{children:({calendarDate:t})=>(t=>e.jsx(XL,{calendarDate:t,disabledDates:r,selectedDate:x,minDate:s,maxDate:l,startTime:c,endTime:d,onSelect:S,slots:u,interval:f,variant:h,maxVisibleCellHeight:p,enableSelection:m,onSlotClick:k}))(t)}))}))},exports.TimeSlotWeekView=n=>{var{disabledDates:r,onWeekDisplayChange:i,onChange:o,value:a,minDate:s,maxDate:l,slots:c,showNavigationHeader:d=!0,enableSelection:u,onSlotClick:f,currentCalendarDate:h}=n,p=X(n,["disabledDates","onWeekDisplayChange","onChange","value","minDate","maxDate","slots","showNavigationHeader","enableSelection","onSlotClick","currentCalendarDate"]);const[g,m]=t.useState(a),b=t.useRef(),v=t.useRef(void 0);t.useEffect((()=>{m(a)}),[a]);const y=e=>{const t=e.format(sP);m(t),o&&o(t)},x=(e,t)=>{f&&f(e,t)},w=e=>{if(i){const t={week:{firstDayOfWeek:e.startOf("week").format(sP),lastDayOfWeek:e.endOf("week").format(sP)},month:e.month()+1,year:e.year()};i(t)}};return e.jsx(aP,Object.assign({},p,{children:e.jsx(Qc,Object.assign({ref:b,type:"standalone",dynamicHeight:!0,initialCalendarDate:sc.toDayjs(g||h).endOf("week").format(sP),selectedStartDate:g,getLeftArrowDate:e=>e.subtract(1,"week"),getRightArrowDate:e=>e.add(1,"week"),isLeftArrowDisabled:e=>s&&Wl(e).subtract(1,"week").isBefore(s,"week"),isRightArrowDisabled:e=>l&&Wl(e).add(1,"week").isAfter(l,"week"),onCalendarDateChange:e=>{v.current&&v.current.isSame(e,"week")||w(e),v.current=e},showNavigationHeader:d,minDate:s,maxDate:l,getMonthHeaderLabel:e=>Wl(e).endOf("week").format("MMM"),getYearHeaderLabel:e=>Wl(e).endOf("week").format("YYYY")},{children:({calendarDate:t})=>e.jsx(oP,{calendarDate:t,disabledDates:r,selectedDate:g,minDate:s,maxDate:l,onSelect:y,slots:c,enableSelection:u,onSlotClick:x})}))}))},exports.TimeTable=n=>{var{date:r,emptyContentMessage:i,rowData:o,loading:a,minTime:s="00:00",maxTime:l="23:00",minDate:c,maxDate:d,totalRecords:u,showCurrentDateAsToday:f,showDateAsShortForm:h,onPage:p,onRefresh:g,onNextDayClick:m,onPreviousDayClick:b,onCalendarDateSelect:v}=n,y=X(n,["date","emptyContentMessage","rowData","loading","minTime","maxTime","minDate","maxDate","totalRecords","showCurrentDateAsToday","showDateAsShortForm","onPage","onRefresh","onNextDayClick","onPreviousDayClick","onCalendarDateSelect"]);const x=y["data-testid"]||"timetable",w=vu.roundToNearestHour(s),$=vu.roundToNearestHour(l,!0),j=vu.generateHourlyIntervals(w,$),S=0===u||iS.isEmpty(o),k=S||o.length===u,C=t.useRef(null),O=t.useRef(null),[T,D]=t.useState(!1),[I,E]=t.useState(!1),[_,M]=t.useState(0),[R,A]=t.useState(!1);t.useEffect((()=>{const e=iS.throttle((()=>{if(C.current&&(D(C.current.scrollLeft>0),E(C.current.scrollTop>0)),R)return;const{scrollTop:e,clientHeight:t,scrollHeight:n}=C.current;Math.ceil(e+t)>=n-1&&!k&&p&&!a&&(A(!0),p())}),100),t=C.current;return t&&t.addEventListener("scroll",e),()=>{t&&t.removeEventListener("scroll",e)}}),[k,R,a,p]),t.useEffect((()=>{A(!1)}),[o]);qe({onResize:()=>{if(C.current){const e=Math.ceil(60*j.length/15),t=(C.current.clientWidth-yP)/e;M(t>21?t:21)}},targetRef:C,refreshMode:"debounce",refreshRate:50});const N=(()=>{let e=0;const t=vP.length;return()=>{const n=vP[e];return e=(e+1)%t,n}})(),B=({wrapper:e,children:t})=>e(t),F=()=>{if(!a&&R)return e.jsx(YP,Object.assign({$isScrolled:T},{children:e.jsx(JP,{})}))},L=()=>{if(!a&&R)return e.jsx(GP,Object.assign({"data-testid":"lazy-loader"},{children:j.map(((t,n)=>e.jsx(ZP,Object.assign({$width:4*_},{children:e.jsx(JP,{})}),`lazy-load-cell-${n}`)))}))};return S?e.jsxs(NP,Object.assign({},y,{"data-testid":x},{children:[e.jsx(CP,{selectedDate:r,loading:a||R,tableContainerRef:C,minDate:c,maxDate:d,totalRecords:u,showCurrentDateAsToday:f,showDateAsShortForm:h,onPreviousDayClick:b,onNextDayClick:m,onRefresh:g,onCalendarDateSelect:v}),e.jsx(BP,Object.assign({className:"empty-container"},{children:a?e.jsx(qP,{$isEmptyContent:S}):e.jsx(XP,{type:"no-item-found",description:i})}))]})):e.jsxs(NP,Object.assign({},y,{"data-testid":x},{children:[e.jsx(CP,{"data-id":"timetable-date-navigator",selectedDate:r,loading:a||R,tableContainerRef:C,minDate:c,maxDate:d,totalRecords:u,showCurrentDateAsToday:f,showDateAsShortForm:h,onPreviousDayClick:b,onNextDayClick:m,onRefresh:g,onCalendarDateSelect:v}),e.jsxs(FP,Object.assign({"data-id":"timetable-container","data-testid":"timetable-container",ref:C,$loading:a,$allRecordsLoaded:k||!p},{children:[e.jsx(LP,{$isScrolledY:I,$isScrolledX:T}),e.jsx(PP,Object.assign({$numOfRows:o.length,$isScrolled:T,"data-testid":"row-header-column-id"},{children:e.jsxs(e.Fragment,{children:[o.map(((n,r)=>e.jsx(B,Object.assign({wrapper:e=>((e,n)=>{if(!e.rowHeaderPopover)return n;const r={position:"bottom-start",rootNode:C,customOffset:e.rowHeaderPopover.offset,children:n,trigger:e.rowHeaderPopover.trigger,delay:e.rowHeaderPopover.delay,popoverContent:e.rowHeaderPopover.content};return t.createElement(ez,Object.assign({},r,{key:`${e.id}-popover-trigger`,zIndex:2}),n)})(n,e)},{children:e.jsxs(YP,Object.assign({$isScrolled:T},{children:[e.jsx(UP,Object.assign({$isClickable:!!n.onRowNameClick,onClick:e=>((e,t)=>{e.onRowNameClick&&e.onRowNameClick(e,t)})(n,e),weight:"semibold","data-testid":`${n.id}-row-header-title`},{children:n.name})),e.jsx(KP,Object.assign({weight:"bold",$show:!!n.subtitle,"data-testid":`${n.id}-row-header-subtitle`},{children:n.subtitle}))]}),`${n.id}-row-header`)}),r))),F()]})})),e.jsx(zP,Object.assign({$numOfColumns:j.length,$isScrolled:I},{children:j.map((t=>e.jsx(HP,Object.assign({"data-testid":`${t}-column`},{children:e.jsx(WP,Object.assign({weight:"semibold"},{children:t}))}),`${t}-column-key`)))})),a?e.jsx(qP,{$isEmptyContent:S}):e.jsxs(VP,Object.assign({"data-testid":"content-container-id",ref:O,$numOfRows:o.length},{children:[o.map(((t,n)=>e.jsx(AP,Object.assign({timetableMinTime:w,timetableMaxTime:$,rowBarColor:N(),intervalWidth:_,containerRef:O},t),`${n}-row-bar`))),L()]}))]}))]}))},exports.Timeline=({items:n,className:r,title:i,startCol:o,colSpan:a,"data-base-indicator-testid":s,"data-testid":l="timeline"})=>{const c=t=>"string"==typeof t?e.jsx(exports.Text.Body,Object.assign({className:"timeline-item-content-text"},{children:t})):e.jsx(e.Fragment,{children:t}),d=t=>"string"==typeof t?e.jsx(hP,Object.assign({weight:"semibold",className:"timeline-item-title"},{children:t})):e.jsx(e.Fragment,{children:t}),f=e=>e.slice(0,2).map(((e,n)=>t.createElement(bP,Object.assign({},e,{type:e.type,key:`status-pill-${n}`,"data-testid":"status-pill",className:"timeline-status-pill"}),e.children))),h=t=>{switch(t){case"completed":return e.jsx(u.TickIcon,{});case"error":return e.jsx(u.ExclamationCircleFillIcon,{});default:return null}};return e.jsxs(uP,Object.assign({className:r,"data-testid":l,$startCol:o,$colSpan:a},{children:[e.jsx(fP,Object.assign({id:"timeline-title"},{children:i})),n.map(((t,n)=>{const{title:r,content:i,statuses:o,variant:a}=t,l=s?`circleindicator${n+1}_div_${s}`:"circleindicator",u=a||(0===n?"current":"upcoming-active");return e.jsxs(pP,{children:[e.jsxs(dP,{children:[e.jsx(lP,Object.assign({"data-testid":l,$variant:u},{children:h(u)})),e.jsx(cP,{$variant:u})]}),e.jsxs(gP,Object.assign({className:"timeline-item-content"},{children:[d(r),o&&e.jsx(mP,{children:f(o)}),c(i)]}))]},`timeline-item-${n}`)}))]}))},exports.Timepicker=jE,exports.Toast=n=>{var{type:r="success",title:i,label:o,autoDismiss:a,autoDismissTime:s=dz,onDismiss:l,fixed:c=!0,actionButton:d}=n,f=X(n,["type","title","label","autoDismiss","autoDismissTime","onDismiss","fixed","actionButton"]);const[h,p]=t.useState(!1),g=Tl.useMediaQuery({maxWidth:ns.tablet});t.useEffect((()=>{p(!0)}),[]),t.useEffect((()=>{if(!a)return;const e=setTimeout((()=>{p(!1)}),s);return()=>clearTimeout(e)}),[a]);const m=di({opacity:h?1:0,transform:h?g?"translateY(0%)":"translateX(0%)":g?"translateY(-1500%)":"translateX(150%)",config:{easing:un.easeInOutQuart,duration:1e3},onRest:()=>{h||null==l||l()}});return e.jsxs(nz,Object.assign({style:m,$type:r,$fixed:c},f,{children:[e.jsxs(rz,{children:[e.jsxs(iz,Object.assign({$type:r},{children:[(()=>{switch(r){case"success":return e.jsx(u.TickCircleFillIcon,{});case"warning":return e.jsx(u.ExclamationTriangleFillIcon,{});case"error":return e.jsx(u.ExclamationCircleFillIcon,{});case"info":return e.jsx(u.ICircleFillIcon,{});default:return null}})(),e.jsxs(oz,{children:[i&&(Y.default.isValidElement(i)?i:e.jsx(az,Object.assign({$type:r,weight:"semibold"},{children:i}))),o&&e.jsx(sz,Object.assign({$type:r},{children:Y.default.isValidElement(o)?o:i?e.jsx(exports.Text.BodySmall,{children:o}):e.jsx(exports.Text.Body,{children:o})}))]})]})),d&&e.jsx(lz,Object.assign({styleType:"light",onClick:d.onClick},{children:d.label}))]}),e.jsx(cz,Object.assign({$type:r,onClick:()=>{p(!1)}},{children:e.jsx(u.CrossIcon,{})}))]}))},exports.Toggle=tE,exports.Tooltip=gz,exports.Transition=Ss,exports.UneditableSection=Mz,exports.UnitNumberInput=IE,exports.__awaiter=G,exports.commonjsGlobal=Di,exports.getAugmentedNamespace=function(e){if(e.__esModule)return e;var t=e.default;if("function"==typeof t){var n=function e(){return this instanceof e?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var r=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(n,t,r.get?r:{enumerable:!0,get:function(){return e[t]}})})),n},exports.withNotificationBanner=t=>Y.default.forwardRef(((n,r)=>e.jsx(DN,Object.assign({forwardedRef:r},n,{children:t.length>0?t.map(((t,n)=>{if("text"===t.type){const r=t.otherAttributes,i=RN.sanitize(t.content);return e.jsx("p",Object.assign({},r,{dangerouslySetInnerHTML:{__html:i}}),n)}{const r=t.otherAttributes;return e.jsx(_N.Link,Object.assign({},r,{children:t.content}),n)}})):(console.error("[NotificationBannerHOC] Empty data passed"),null)})))),exports.withPopover=(n,r)=>i=>{const{onPopoverAppear:o,onPopoverDismiss:a}=i,s=X(i,["onPopoverAppear","onPopoverDismiss"]),l=r.trigger||"click",c=s,[d,u]=t.useState(!1),f=t.useRef(),h=Tl.useMediaQuery({maxWidth:ns.mobileL});t.useEffect((()=>{if(!h)return document.addEventListener("mousedown",p),()=>{document.removeEventListener("mousedown",p)}}),[d]);const p=e=>{f&&!f.current.contains(e.target)&&(d&&u(!1),a&&a())};return e.jsxs(oB,Object.assign({id:"popover-hoc-wrapper",ref:f},{children:[e.jsx(aB,Object.assign({id:`popover-hoc-trigger${r["data-testid"]&&`-${r["data-testid"]}`}`,type:"button",onClick:e=>{e.preventDefault(),("click"===l||h)&&(u(!d),!d&&o&&o(),d&&a&&a())},onMouseEnter:()=>{"hover"!==l||h||u(!0)},onMouseLeave:()=>{"hover"===l&&d&&!h&&u(!1)},"aria-label":"popover-button"},{children:e.jsx(n,Object.assign({},c))})),e.jsx(lB,Object.assign({visible:d,id:r.id,"data-testid":r["data-testid"],onMobileClose:()=>{u(!1)}},{children:r.content}))]}))},exports.withTooltip=(t,n)=>r=>{const{tooltipVisible:i,position:o}=r,a=X(r,["tooltipVisible","position"]);return e.jsxs(pz,{children:[e.jsx(t,Object.assign({},a)),e.jsx(gz,Object.assign({visible:i,position:o},{children:n.content}))]})};
//# sourceMappingURL=index.d88792cc.js.map
