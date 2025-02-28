"use strict";var e=require("react/jsx-runtime"),t=require("react"),n=require("react-dom"),r=require("@lifesg/react-icons/chevron-up"),i=require("styled-components"),a=require("@lifesg/react-icons/external"),o=require("@lifesg/react-icons/arrow-right"),s=require("@lifesg/react-icons/exclamation-circle-fill"),l=require("@lifesg/react-icons/exclamation-triangle-fill"),c=require("@lifesg/react-icons/i-circle-fill"),d=require("@lifesg/react-icons/tick-circle-fill"),u=require("@lifesg/react-icons"),f=require("@lifesg/react-icons/chevron-down"),h=require("@lifesg/react-icons/chevron-right"),p=require("@lifesg/react-icons/chevron-left"),g=require("@floating-ui/react"),m=require("@lifesg/react-icons/cross"),b=require("@lifesg/react-icons/star"),v=require("@lifesg/react-icons/star-fill"),y=require("@lifesg/react-icons/cloud-arrow-up-fill"),x=require("@lifesg/react-icons/magnifier"),w=require("@lifesg/react-icons/eye"),$=require("@lifesg/react-icons/eye-slash"),j=require("@lifesg/react-icons/exclamation-triangle"),S=require("@lifesg/react-icons/square"),k=require("@lifesg/react-icons/square-tick-fill"),O=require("@lifesg/react-icons/tick"),C=require("@lifesg/react-icons/caret-right"),D=require("@lifesg/react-icons/minus-square-fill"),T=require("@lifesg/react-icons/circle"),_=require("@lifesg/react-icons/circle-dot"),E=require("@lifesg/react-icons/bin"),M=require("@lifesg/react-icons/pencil"),I=require("@lifesg/react-icons/drag-handle"),N=require("@lifesg/react-icons/minus"),A=require("@lifesg/react-icons/plus"),R=require("@lifesg/react-icons/menu"),F=require("@lifesg/react-icons/chevron-2-left"),B=require("@lifesg/react-icons/chevron-2-right"),P=require("@lifesg/react-icons/chevron-line-left"),L=require("@lifesg/react-icons/chevron-line-right"),z=require("@lifesg/react-icons/ellipsis-horizontal"),H=require("@lifesg/react-icons/star-half");function W(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function V(e){if(e&&"object"==typeof e&&"default"in e)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(n){if("default"!==n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}})),t.default=e,Object.freeze(t)}var Y=V(t),U=W(n),K=W(i);const q=Y.default.createContext(!1);function X(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function G(e,t,n,r){return new(n||(n=Promise))((function(i,a){function o(e){try{l(r.next(e))}catch(e){a(e)}}function s(e){try{l(r.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,s)}l((r=r.apply(e,t||[])).next())}))}function Z(e,t){var n,r,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(s){return function(l){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;a&&(a=0,s[0]&&(o=0)),o;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,r=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(e){s=[6,e],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,l])}}}function Q(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,a=n.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)o.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(i)throw i.error}}return o}function J(e,t,n){if(n||2===arguments.length)for(var r,i=0,a=t.length;i<a;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}"function"==typeof SuppressedError&&SuppressedError;var ee=function(e,t){return ee=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},ee(e,t)};var te=function(){return te=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},te.apply(this,arguments)};var ne="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var re=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},ie="object"==typeof ne&&ne&&ne.Object===Object&&ne,ae="object"==typeof self&&self&&self.Object===Object&&self,oe=ie||ae||Function("return this")(),se=oe,le=function(){return se.Date.now()},ce=/\s/;var de=function(e){for(var t=e.length;t--&&ce.test(e.charAt(t)););return t},ue=/^\s+/;var fe=function(e){return e?e.slice(0,de(e)+1).replace(ue,""):e},he=oe.Symbol,pe=he,ge=Object.prototype,me=ge.hasOwnProperty,be=ge.toString,ve=pe?pe.toStringTag:void 0;var ye=function(e){var t=me.call(e,ve),n=e[ve];try{e[ve]=void 0;var r=!0}catch(e){}var i=be.call(e);return r&&(t?e[ve]=n:delete e[ve]),i},xe=Object.prototype.toString;var we=ye,$e=function(e){return xe.call(e)},je=he?he.toStringTag:void 0;var Se=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":je&&je in Object(e)?we(e):$e(e)},ke=function(e){return null!=e&&"object"==typeof e};var Oe=fe,Ce=re,De=function(e){return"symbol"==typeof e||ke(e)&&"[object Symbol]"==Se(e)},Te=/^[-+]0x[0-9a-f]+$/i,_e=/^0b[01]+$/i,Ee=/^0o[0-7]+$/i,Me=parseInt;var Ie=re,Ne=le,Ae=function(e){if("number"==typeof e)return e;if(De(e))return NaN;if(Ce(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Ce(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Oe(e);var n=_e.test(e);return n||Ee.test(e)?Me(e.slice(2),n?2:8):Te.test(e)?NaN:+e},Re=Math.max,Fe=Math.min;var Be=function(e,t,n){var r,i,a,o,s,l,c=0,d=!1,u=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var n=r,a=i;return r=i=void 0,c=t,o=e.apply(a,n)}function p(e){var n=e-l;return void 0===l||n>=t||n<0||u&&e-c>=a}function g(){var e=Ne();if(p(e))return m(e);s=setTimeout(g,function(e){var n=t-(e-l);return u?Fe(n,a-(e-c)):n}(e))}function m(e){return s=void 0,f&&r?h(e):(r=i=void 0,o)}function b(){var e=Ne(),n=p(e);if(r=arguments,i=this,l=e,n){if(void 0===s)return function(e){return c=e,s=setTimeout(g,t),d?h(e):o}(l);if(u)return clearTimeout(s),s=setTimeout(g,t),h(l)}return void 0===s&&(s=setTimeout(g,t)),o}return t=Ae(t)||0,Ie(n)&&(d=!!n.leading,a=(u="maxWait"in n)?Re(Ae(n.maxWait)||0,t):a,f="trailing"in n?!!n.trailing:f),b.cancel=function(){void 0!==s&&clearTimeout(s),c=0,r=l=i=s=void 0},b.flush=function(){return void 0===s?o:m(Ne())},b},Pe=Be,Le=re;var ze=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Le(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),Pe(e,t,{leading:r,maxWait:t,trailing:i})},He=function(e,t,n,r){switch(t){case"debounce":return Be(e,n,r);case"throttle":return ze(e,n,r);default:return e}},We=function(e){return"function"==typeof e},Ve=function(){return"undefined"==typeof window},Ye=function(e){return e instanceof Element||e instanceof HTMLDocument},Ue=function(e,t,n,r){return function(i){var a=i.width,o=i.height;t((function(t){return t.width===a&&t.height===o||t.width===a&&!r||t.height===o&&!n?t:(e&&We(e)&&e(a,o),{width:a,height:o})}))}};!function(e){function r(r){var i=e.call(this,r)||this;i.cancelHandler=function(){i.resizeHandler&&i.resizeHandler.cancel&&(i.resizeHandler.cancel(),i.resizeHandler=null)},i.attachObserver=function(){var e=i.props,t=e.targetRef,n=e.observerOptions;if(!Ve()){t&&t.current&&(i.targetRef.current=t.current);var r=i.getElement();r&&(i.observableElement&&i.observableElement===r||(i.observableElement=r,i.resizeObserver.observe(r,n)))}},i.getElement=function(){var e=i.props,t=e.querySelector,r=e.targetDomEl;if(Ve())return null;if(t)return document.querySelector(t);if(r&&Ye(r))return r;if(i.targetRef&&Ye(i.targetRef.current))return i.targetRef.current;var a=n.findDOMNode(i);if(!a)return null;switch(i.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return a;default:return a.parentElement}},i.createResizeHandler=function(e){var t=i.props,n=t.handleWidth,r=void 0===n||n,a=t.handleHeight,o=void 0===a||a,s=t.onResize;if(r||o){var l=Ue(s,i.setState.bind(i),r,o);e.forEach((function(e){var t=e&&e.contentRect||{},n=t.width,r=t.height;!i.skipOnMount&&!Ve()&&l({width:n,height:r}),i.skipOnMount=!1}))}},i.getRenderType=function(){var e=i.props,n=e.render,r=e.children;return We(n)?"renderProp":We(r)?"childFunction":t.isValidElement(r)?"child":Array.isArray(r)?"childArray":"parent"};var a=r.skipOnMount,o=r.refreshMode,s=r.refreshRate,l=void 0===s?1e3:s,c=r.refreshOptions;return i.state={width:void 0,height:void 0},i.skipOnMount=a,i.targetRef=t.createRef(),i.observableElement=null,Ve()||(i.resizeHandler=He(i.createResizeHandler,o,l,c),i.resizeObserver=new window.ResizeObserver(i.resizeHandler)),i}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}ee(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)})(r,e),r.prototype.componentDidMount=function(){this.attachObserver()},r.prototype.componentDidUpdate=function(){this.attachObserver()},r.prototype.componentWillUnmount=function(){Ve()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},r.prototype.render=function(){var e,n=this.props,r=n.render,i=n.children,a=n.nodeType,o=void 0===a?"div":a,s=this.state,l={width:s.width,height:s.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return r&&r(l);case"childFunction":return(e=i)(l);case"child":if((e=i).type&&"string"==typeof e.type){var c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(l,["targetRef"]);return t.cloneElement(e,c)}return t.cloneElement(e,l);case"childArray":return(e=i).map((function(e){return!!e&&t.cloneElement(e,l)}));default:return Y.createElement(o,null)}}}(t.PureComponent);var Ke=Ve()?t.useEffect:t.useLayoutEffect;function qe(e){void 0===e&&(e={});var n=e.skipOnMount,r=void 0!==n&&n,i=e.refreshMode,a=e.refreshRate,o=void 0===a?1e3:a,s=e.refreshOptions,l=e.handleWidth,c=void 0===l||l,d=e.handleHeight,u=void 0===d||d,f=e.targetRef,h=e.observerOptions,p=e.onResize,g=t.useRef(r),m=t.useRef(null),b=null!=f?f:m,v=t.useRef(),y=t.useState({width:void 0,height:void 0}),x=y[0],w=y[1];return Ke((function(){if(!Ve()){var e=Ue(p,w,c,u);v.current=He((function(t){(c||u)&&t.forEach((function(t){var n=t&&t.contentRect||{},r=n.width,i=n.height;!g.current&&!Ve()&&e({width:r,height:i}),g.current=!1}))}),i,o,s);var t=new window.ResizeObserver(v.current);return b.current&&t.observe(b.current,h),function(){t.disconnect();var e=v.current;e&&e.cancel&&e.cancel()}}}),[i,o,s,c,u,p,h,b.current]),te({ref:b},x)}var Xe=Object.defineProperty,Ge={};((e,t)=>{for(var n in t)Xe(e,n,{get:t[n],enumerable:!0})})(Ge,{assign:()=>Tt,colors:()=>Ot,createStringInterpolator:()=>$t,skipAnimation:()=>Ct,to:()=>jt,willAdvance:()=>Dt});var Ze=ht(),Qe=e=>ct(e,Ze),Je=ht();Qe.write=e=>ct(e,Je);var et=ht();Qe.onStart=e=>ct(e,et);var tt=ht();Qe.onFrame=e=>ct(e,tt);var nt=ht();Qe.onFinish=e=>ct(e,nt);var rt=[];Qe.setTimeout=(e,t)=>{const n=Qe.now()+t,r=()=>{const e=rt.findIndex((e=>e.cancel==r));~e&&rt.splice(e,1),st-=~e?1:0},i={time:n,handler:e,cancel:r};return rt.splice(it(n),0,i),st+=1,dt(),i};var it=e=>~(~rt.findIndex((t=>t.time>e))||~rt.length);Qe.cancel=e=>{et.delete(e),tt.delete(e),nt.delete(e),Ze.delete(e),Je.delete(e)},Qe.sync=e=>{lt=!0,Qe.batchedUpdates(e),lt=!1},Qe.throttle=e=>{let t;function n(){try{e(...t)}finally{t=null}}function r(...e){t=e,Qe.onStart(n)}return r.handler=e,r.cancel=()=>{et.delete(n),t=null},r};var at="undefined"!=typeof window?window.requestAnimationFrame:()=>{};Qe.use=e=>at=e,Qe.now="undefined"!=typeof performance?()=>performance.now():Date.now,Qe.batchedUpdates=e=>e(),Qe.catch=console.error,Qe.frameLoop="always",Qe.advance=()=>{"demand"!==Qe.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):ft()};var ot=-1,st=0,lt=!1;function ct(e,t){lt?(t.delete(e),e(0)):(t.add(e),dt())}function dt(){ot<0&&(ot=0,"demand"!==Qe.frameLoop&&at(ut))}function ut(){~ot&&(at(ut),Qe.batchedUpdates(ft))}function ft(){const e=ot;ot=Qe.now();const t=it(ot);t&&(pt(rt.splice(0,t),(e=>e.handler())),st-=t),st?(et.flush(),Ze.flush(e?Math.min(64,ot-e):16.667),tt.flush(),Je.flush(),nt.flush()):ot=-1}function ht(){let e=new Set,t=e;return{add(n){st+=t!=e||e.has(n)?0:1,e.add(n)},delete:n=>(st-=t==e&&e.has(n)?1:0,e.delete(n)),flush(n){t.size&&(e=new Set,st-=t.size,pt(t,(t=>t(n)&&e.add(t))),st+=e.size,t=e)}}}function pt(e,t){e.forEach((e=>{try{t(e)}catch(e){Qe.catch(e)}}))}function gt(){}var mt={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function bt(e,t){if(mt.arr(e)){if(!mt.arr(t)||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}return e===t}var vt=(e,t)=>e.forEach(t);function yt(e,t,n){if(mt.arr(e))for(let r=0;r<e.length;r++)t.call(n,e[r],`${r}`);else for(const r in e)e.hasOwnProperty(r)&&t.call(n,e[r],r)}var xt=e=>mt.und(e)?[]:mt.arr(e)?e:[e];function wt(e,t){if(e.size){const n=Array.from(e);e.clear(),vt(n,t)}}var $t,jt,St=(e,...t)=>wt(e,(e=>e(...t))),kt=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),Ot=null,Ct=!1,Dt=gt,Tt=e=>{e.to&&(jt=e.to),e.now&&(Qe.now=e.now),void 0!==e.colors&&(Ot=e.colors),null!=e.skipAnimation&&(Ct=e.skipAnimation),e.createStringInterpolator&&($t=e.createStringInterpolator),e.requestAnimationFrame&&Qe.use(e.requestAnimationFrame),e.batchedUpdates&&(Qe.batchedUpdates=e.batchedUpdates),e.willAdvance&&(Dt=e.willAdvance),e.frameLoop&&(Qe.frameLoop=e.frameLoop)},_t=new Set,Et=[],Mt=[],It=0,Nt={get idle(){return!_t.size&&!Et.length},start(e){It>e.priority?(_t.add(e),Qe.onStart(At)):(Rt(e),Qe(Bt))},advance:Bt,sort(e){if(It)Qe.onFrame((()=>Nt.sort(e)));else{const t=Et.indexOf(e);~t&&(Et.splice(t,1),Ft(e))}},clear(){Et=[],_t.clear()}};function At(){_t.forEach(Rt),_t.clear(),Qe(Bt)}function Rt(e){Et.includes(e)||Ft(e)}function Ft(e){Et.splice(function(e,t){const n=e.findIndex(t);return n<0?e.length:n}(Et,(t=>t.priority>e.priority)),0,e)}function Bt(e){const t=Mt;for(let n=0;n<Et.length;n++){const r=Et[n];It=r.priority,r.idle||(Dt(r),r.advance(e),r.idle||t.push(r))}return It=0,(Mt=Et).length=0,(Et=t).length>0}var Pt="[-+]?\\d*\\.?\\d+",Lt=Pt+"%";function zt(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var Ht=new RegExp("rgb"+zt(Pt,Pt,Pt)),Wt=new RegExp("rgba"+zt(Pt,Pt,Pt,Pt)),Vt=new RegExp("hsl"+zt(Pt,Lt,Lt)),Yt=new RegExp("hsla"+zt(Pt,Lt,Lt,Pt)),Ut=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Kt=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,qt=/^#([0-9a-fA-F]{6})$/,Xt=/^#([0-9a-fA-F]{8})$/;function Gt(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Zt(e,t,n){const r=n<.5?n*(1+t):n+t-n*t,i=2*n-r,a=Gt(i,r,e+1/3),o=Gt(i,r,e),s=Gt(i,r,e-1/3);return Math.round(255*a)<<24|Math.round(255*o)<<16|Math.round(255*s)<<8}function Qt(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function Jt(e){return(parseFloat(e)%360+360)%360/360}function en(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function tn(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function nn(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=qt.exec(e))?parseInt(t[1]+"ff",16)>>>0:Ot&&void 0!==Ot[e]?Ot[e]:(t=Ht.exec(e))?(Qt(t[1])<<24|Qt(t[2])<<16|Qt(t[3])<<8|255)>>>0:(t=Wt.exec(e))?(Qt(t[1])<<24|Qt(t[2])<<16|Qt(t[3])<<8|en(t[4]))>>>0:(t=Ut.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=Xt.exec(e))?parseInt(t[1],16)>>>0:(t=Kt.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=Vt.exec(e))?(255|Zt(Jt(t[1]),tn(t[2]),tn(t[3])))>>>0:(t=Yt.exec(e))?(Zt(Jt(t[1]),tn(t[2]),tn(t[3]))|en(t[4]))>>>0:null}(e);if(null===t)return e;t=t||0;return`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`}var rn=(e,t,n)=>{if(mt.fun(e))return e;if(mt.arr(e))return rn({range:e,output:t,extrapolate:n});if(mt.str(e.output[0]))return $t(e);const r=e,i=r.output,a=r.range||[0,1],o=r.extrapolateLeft||r.extrapolate||"extend",s=r.extrapolateRight||r.extrapolate||"extend",l=r.easing||(e=>e);return e=>{const t=function(e,t){for(var n=1;n<t.length-1&&!(t[n]>=e);++n);return n-1}(e,a);return function(e,t,n,r,i,a,o,s,l){let c=l?l(e):e;if(c<t){if("identity"===o)return c;"clamp"===o&&(c=t)}if(c>n){if("identity"===s)return c;"clamp"===s&&(c=n)}if(r===i)return r;if(t===n)return e<=t?r:i;t===-1/0?c=-c:n===1/0?c-=t:c=(c-t)/(n-t);c=a(c),r===-1/0?c=-c:i===1/0?c+=r:c=c*(i-r)+r;return c}(e,a[t],a[t+1],i[t],i[t+1],l,o,s,r.map)}};var an=1.70158,on=1.525*an,sn=an+1,ln=2*Math.PI/3,cn=2*Math.PI/4.5,dn=e=>{const t=7.5625,n=2.75;return e<1/n?t*e*e:e<2/n?t*(e-=1.5/n)*e+.75:e<2.5/n?t*(e-=2.25/n)*e+.9375:t*(e-=2.625/n)*e+.984375},un={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>1-(1-e)*(1-e),easeInOutQuad:e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2,easeInCubic:e=>e*e*e,easeOutCubic:e=>1-Math.pow(1-e,3),easeInOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1-Math.pow(1-e,4),easeInOutQuart:e=>e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1-Math.pow(1-e,5),easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>0===e?0:Math.pow(2,10*e-10),easeOutExpo:e=>1===e?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2,easeInCirc:e=>1-Math.sqrt(1-Math.pow(e,2)),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2,easeInBack:e=>sn*e*e*e-an*e*e,easeOutBack:e=>1+sn*Math.pow(e-1,3)+an*Math.pow(e-1,2),easeInOutBack:e=>e<.5?Math.pow(2*e,2)*(7.189819*e-on)/2:(Math.pow(2*e-2,2)*((on+1)*(2*e-2)+on)+2)/2,easeInElastic:e=>0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*ln),easeOutElastic:e=>0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*ln)+1,easeInOutElastic:e=>0===e?0:1===e?1:e<.5?-Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*cn)/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*cn)/2+1,easeInBounce:e=>1-dn(1-e),easeOutBounce:dn,easeInOutBounce:e=>e<.5?(1-dn(1-2*e))/2:(1+dn(2*e-1))/2,steps:(e,t="end")=>n=>{const r=(n="end"===t?Math.min(n,.999):Math.max(n,.001))*e,i="end"===t?Math.floor(r):Math.ceil(r);return a=0,o=1,s=i/e,Math.min(Math.max(s,a),o);var a,o,s}},fn=Symbol.for("FluidValue.get"),hn=Symbol.for("FluidValue.observers"),pn=e=>Boolean(e&&e[fn]),gn=e=>e&&e[fn]?e[fn]():e,mn=e=>e[hn]||null;function bn(e,t){const n=e[hn];n&&n.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}var vn=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");yn(this,e)}},yn=(e,t)=>jn(e,fn,t);function xn(e,t){if(e[fn]){let n=e[hn];n||jn(e,hn,n=new Set),n.has(t)||(n.add(t),e.observerAdded&&e.observerAdded(n.size,t))}return t}function wn(e,t){const n=e[hn];if(n&&n.has(t)){const r=n.size-1;r?n.delete(t):e[hn]=null,e.observerRemoved&&e.observerRemoved(r,t)}}var $n,jn=(e,t,n)=>Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0}),Sn=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,kn=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,On=new RegExp(`(${Sn.source})(%|[a-z]+)`,"i"),Cn=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,Dn=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,Tn=e=>{const[t,n]=_n(e);if(!t||kt())return e;const r=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(r)return r.trim();if(n&&n.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(n);return t||e}return n&&Dn.test(n)?Tn(n):n||e},_n=e=>{const t=Dn.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]},En=(e,t,n,r,i)=>`rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,Mn=e=>{$n||($n=Ot?new RegExp(`(${Object.keys(Ot).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>gn(e).replace(Dn,Tn).replace(kn,nn).replace($n,nn))),n=t.map((e=>e.match(Sn).map(Number))),r=n[0].map(((e,t)=>n.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))),i=r.map((t=>rn({...e,output:t})));return e=>{const n=!On.test(t[0])&&t.find((e=>On.test(e)))?.replace(Sn,"");let r=0;return t[0].replace(Sn,(()=>`${i[r++](e)}${n||""}`)).replace(Cn,En)}},In="react-spring: ",Nn=e=>{const t=e;let n=!1;if("function"!=typeof t)throw new TypeError(`${In}once requires a function parameter`);return(...e)=>{n||(t(...e),n=!0)}},An=Nn(console.warn);var Rn=Nn(console.warn);function Fn(e){return mt.str(e)&&("#"==e[0]||/\d/.test(e)||!kt()&&Dn.test(e)||e in(Ot||{}))}var Bn=kt()?t.useEffect:t.useLayoutEffect,Pn=()=>{const e=t.useRef(!1);return Bn((()=>(e.current=!0,()=>{e.current=!1})),[]),e};function Ln(){const e=t.useState()[1],n=Pn();return()=>{n.current&&e(Math.random())}}var zn=e=>t.useEffect(e,Hn),Hn=[];function Wn(e){const n=t.useRef();return t.useEffect((()=>{n.current=e})),n.current}var Vn=Symbol.for("Animated:node"),Yn=e=>e&&e[Vn],Un=(e,t)=>{return n=e,r=Vn,i=t,Object.defineProperty(n,r,{value:i,writable:!0,configurable:!0});var n,r,i},Kn=e=>e&&e[Vn]&&e[Vn].getPayload(),qn=class{constructor(){Un(this,this)}getPayload(){return this.payload||[]}},Xn=class extends qn{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,mt.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new Xn(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return mt.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,mt.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},Gn=class extends Xn{constructor(e){super(0),this._string=null,this._toString=rn({output:[e,e]})}static create(e){return new Gn(e)}getValue(){const e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(mt.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=rn({output:[this.getValue(),e]})),this._value=0,super.reset()}},Zn={dependencies:null},Qn=class extends qn{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return yt(this.source,((n,r)=>{var i;(i=n)&&i[Vn]===i?t[r]=n.getValue(e):pn(n)?t[r]=gn(n):e||(t[r]=n)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&vt(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return yt(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){Zn.dependencies&&pn(e)&&Zn.dependencies.add(e);const t=Kn(e);t&&vt(t,(e=>this.add(e)))}},Jn=class extends Qn{constructor(e){super(e)}static create(e){return new Jn(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,n)=>t.setValue(e[n]))).some(Boolean):(super.setValue(e.map(er)),!0)}};function er(e){return(Fn(e)?Gn:Xn).create(e)}function tr(e){const t=Yn(e);return t?t.constructor:mt.arr(e)?Jn:Fn(e)?Gn:Xn}var nr=(e,n)=>{const r=!mt.fun(e)||e.prototype&&e.prototype.isReactComponent;return t.forwardRef(((i,a)=>{const o=t.useRef(null),s=r&&t.useCallback((e=>{o.current=function(e,t){e&&(mt.fun(e)?e(t):e.current=t);return t}(a,e)}),[a]),[l,c]=function(e,t){const n=new Set;Zn.dependencies=n,e.style&&(e={...e,style:t.createAnimatedStyle(e.style)});return e=new Qn(e),Zn.dependencies=null,[e,n]}(i,n),d=Ln(),u=()=>{const e=o.current;if(r&&!e)return;!1===(!!e&&n.applyAnimatedValues(e,l.getValue(!0)))&&d()},f=new rr(u,c),h=t.useRef();Bn((()=>(h.current=f,vt(c,(e=>xn(e,f))),()=>{h.current&&(vt(h.current.deps,(e=>wn(e,h.current))),Qe.cancel(h.current.update))}))),t.useEffect(u,[]),zn((()=>()=>{const e=h.current;vt(e.deps,(t=>wn(t,e)))}));const p=n.getComponentProps(l.getValue());return Y.createElement(e,{...p,ref:s})}))},rr=class{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&Qe.write(this.update)}};var ir=Symbol.for("AnimatedComponent"),ar=e=>mt.str(e)?e:e&&mt.str(e.displayName)?e.displayName:mt.fun(e)&&e.name||null;function or(e,...t){return mt.fun(e)?e(...t):e}var sr=(e,t)=>!0===e||!!(t&&e&&(mt.fun(e)?e(t):xt(e).includes(t))),lr=(e,t)=>mt.obj(e)?t&&e[t]:e,cr=(e,t)=>!0===e.default?e[t]:e.default?e.default[t]:void 0,dr=e=>e,ur=(e,t=dr)=>{let n=fr;e.default&&!0!==e.default&&(e=e.default,n=Object.keys(e));const r={};for(const i of n){const n=t(e[i],i);mt.und(n)||(r[i]=n)}return r},fr=["config","onProps","onStart","onChange","onPause","onResume","onRest"],hr={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function pr(e){const t=function(e){const t={};let n=0;if(yt(e,((e,r)=>{hr[r]||(t[r]=e,n++)})),n)return t}(e);if(t){const n={to:t};return yt(e,((e,r)=>r in t||(n[r]=e))),n}return{...e}}function gr(e){return e=gn(e),mt.arr(e)?e.map(gr):Fn(e)?Ge.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function mr(e){return mt.fun(e)||mt.arr(e)&&mt.obj(e[0])}var br={tension:170,friction:26,mass:1,damping:1,easing:un.linear,clamp:!1},vr=class{constructor(){this.velocity=0,Object.assign(this,br)}};function yr(e,t){if(mt.und(t.decay)){const n=!mt.und(t.tension)||!mt.und(t.friction);!n&&mt.und(t.frequency)&&mt.und(t.damping)&&mt.und(t.mass)||(e.duration=void 0,e.decay=void 0),n&&(e.frequency=void 0)}else e.duration=void 0}var xr=[],wr=class{constructor(){this.changed=!1,this.values=xr,this.toValues=null,this.fromValues=xr,this.config=new vr,this.immediate=!1}};function $r(e,{key:t,props:n,defaultProps:r,state:i,actions:a}){return new Promise(((o,s)=>{let l,c,d=sr(n.cancel??r?.cancel,t);if(d)h();else{mt.und(n.pause)||(i.paused=sr(n.pause,t));let e=r?.pause;!0!==e&&(e=i.paused||sr(e,t)),l=or(n.delay||0,t),e?(i.resumeQueue.add(f),a.pause()):(a.resume(),f())}function u(){i.resumeQueue.add(f),i.timeouts.delete(c),c.cancel(),l=c.time-Qe.now()}function f(){l>0&&!Ge.skipAnimation?(i.delayed=!0,c=Qe.setTimeout(h,l),i.pauseQueue.add(u),i.timeouts.add(c)):h()}function h(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(u),i.timeouts.delete(c),e<=(i.cancelId||0)&&(d=!0);try{a.start({...n,callId:e,cancel:d},o)}catch(e){s(e)}}}))}var jr=(e,t)=>1==t.length?t[0]:t.some((e=>e.cancelled))?Or(e.get()):t.every((e=>e.noop))?Sr(e.get()):kr(e.get(),t.every((e=>e.finished))),Sr=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),kr=(e,t,n=!1)=>({value:e,finished:t,cancelled:n}),Or=e=>({value:e,cancelled:!0,finished:!1});function Cr(e,t,n,r){const{callId:i,parentId:a,onRest:o}=t,{asyncTo:s,promise:l}=n;return a||e!==s||t.reset?n.promise=(async()=>{n.asyncId=i,n.asyncTo=e;const c=ur(t,((e,t)=>"onRest"===t?void 0:e));let d,u;const f=new Promise(((e,t)=>(d=e,u=t))),h=e=>{const t=i<=(n.cancelId||0)&&Or(r)||i!==n.asyncId&&kr(r,!1);if(t)throw e.result=t,u(e),e},p=(e,t)=>{const a=new Tr,o=new _r;return(async()=>{if(Ge.skipAnimation)throw Dr(n),o.result=kr(r,!1),u(o),o;h(a);const s=mt.obj(e)?{...e}:{...t,to:e};s.parentId=i,yt(c,((e,t)=>{mt.und(s[t])&&(s[t]=e)}));const l=await r.start(s);return h(a),n.paused&&await new Promise((e=>{n.resumeQueue.add(e)})),l})()};let g;if(Ge.skipAnimation)return Dr(n),kr(r,!1);try{let t;t=mt.arr(e)?(async e=>{for(const t of e)await p(t)})(e):Promise.resolve(e(p,r.stop.bind(r))),await Promise.all([t.then(d),f]),g=kr(r.get(),!0,!1)}catch(e){if(e instanceof Tr)g=e.result;else{if(!(e instanceof _r))throw e;g=e.result}}finally{i==n.asyncId&&(n.asyncId=a,n.asyncTo=a?s:void 0,n.promise=a?l:void 0)}return mt.fun(o)&&Qe.batchedUpdates((()=>{o(g,r,r.item)})),g})():l}function Dr(e,t){wt(e.timeouts,(e=>e.cancel())),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}var Tr=class extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")}},_r=class extends Error{constructor(){super("SkipAnimationSignal")}},Er=e=>e instanceof Ir,Mr=1,Ir=class extends vn{constructor(){super(...arguments),this.id=Mr++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=Yn(this);return e&&e.getValue()}to(...e){return Ge.to(this,e)}interpolate(...e){return An(`${In}The "interpolate" function is deprecated in v9 (use "to" instead)`),Ge.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){bn(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||Nt.sort(this),bn(this,{type:"priority",parent:this,priority:e})}},Nr=Symbol.for("SpringPhase"),Ar=e=>(1&e[Nr])>0,Rr=e=>(2&e[Nr])>0,Fr=e=>(4&e[Nr])>0,Br=(e,t)=>t?e[Nr]|=3:e[Nr]&=-3,Pr=(e,t)=>t?e[Nr]|=4:e[Nr]&=-5,Lr=class extends Ir{constructor(e,t){if(super(),this.animation=new wr,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!mt.und(e)||!mt.und(t)){const n=mt.obj(e)?{...e}:{...t,from:e};mt.und(n.default)&&(n.default=!0),this.start(n)}}get idle(){return!(Rr(this)||this._state.asyncTo)||Fr(this)}get goal(){return gn(this.animation.to)}get velocity(){const e=Yn(this);return e instanceof Xn?e.lastVelocity||0:e.getPayload().map((e=>e.lastVelocity||0))}get hasAnimated(){return Ar(this)}get isAnimating(){return Rr(this)}get isPaused(){return Fr(this)}get isDelayed(){return this._state.delayed}advance(e){let t=!0,n=!1;const r=this.animation;let{toValues:i}=r;const{config:a}=r,o=Kn(r.to);!o&&pn(r.to)&&(i=xt(gn(r.to))),r.values.forEach(((s,l)=>{if(s.done)return;const c=s.constructor==Gn?1:o?o[l].lastPosition:i[l];let d=r.immediate,u=c;if(!d){if(u=s.lastPosition,a.tension<=0)return void(s.done=!0);let t=s.elapsedTime+=e;const n=r.fromValues[l],i=null!=s.v0?s.v0:s.v0=mt.arr(a.velocity)?a.velocity[l]:a.velocity;let o;const f=a.precision||(n==c?.005:Math.min(1,.001*Math.abs(c-n)));if(mt.und(a.duration))if(a.decay){const e=!0===a.decay?.998:a.decay,r=Math.exp(-(1-e)*t);u=n+i/(1-e)*(1-r),d=Math.abs(s.lastPosition-u)<=f,o=i*r}else{o=null==s.lastVelocity?i:s.lastVelocity;const t=a.restVelocity||f/10,r=a.clamp?0:a.bounce,l=!mt.und(r),h=n==c?s.v0>0:n<c;let p,g=!1;const m=1,b=Math.ceil(e/m);for(let e=0;e<b&&(p=Math.abs(o)>t,p||(d=Math.abs(c-u)<=f,!d));++e){l&&(g=u==c||u>c==h,g&&(o=-o*r,u=c));o+=(1e-6*-a.tension*(u-c)+.001*-a.friction*o)/a.mass*m,u+=o*m}}else{let r=1;a.duration>0&&(this._memoizedDuration!==a.duration&&(this._memoizedDuration=a.duration,s.durationProgress>0&&(s.elapsedTime=a.duration*s.durationProgress,t=s.elapsedTime+=e)),r=(a.progress||0)+t/this._memoizedDuration,r=r>1?1:r<0?0:r,s.durationProgress=r),u=n+a.easing(r)*(c-n),o=(u-s.lastPosition)/e,d=1==r}s.lastVelocity=o,Number.isNaN(u)&&(console.warn("Got NaN while animating:",this),d=!0)}o&&!o[l].done&&(d=!1),d?s.done=!0:t=!1,s.setValue(u,a.round)&&(n=!0)}));const s=Yn(this),l=s.getValue();if(t){const e=gn(r.to);l===e&&!n||a.decay?n&&a.decay&&this._onChange(l):(s.setValue(e),this._onChange(e)),this._stop()}else n&&this._onChange(l)}set(e){return Qe.batchedUpdates((()=>{this._stop(),this._focus(e),this._set(e)})),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(Rr(this)){const{to:e,config:t}=this.animation;Qe.batchedUpdates((()=>{this._onStart(),t.decay||this._set(e,!1),this._stop()}))}return this}update(e){return(this.queue||(this.queue=[])).push(e),this}start(e,t){let n;return mt.und(e)?(n=this.queue||[],this.queue=[]):n=[mt.obj(e)?e:{...t,to:e}],Promise.all(n.map((e=>this._update(e)))).then((e=>jr(this,e)))}stop(e){const{to:t}=this.animation;return this._focus(this.get()),Dr(this._state,e&&this._lastCallId),Qe.batchedUpdates((()=>this._stop(t,e))),this}reset(){this._update({reset:!0})}eventObserved(e){"change"==e.type?this._start():"priority"==e.type&&(this.priority=e.priority+1)}_prepareNode(e){const t=this.key||"";let{to:n,from:r}=e;n=mt.obj(n)?n[t]:n,(null==n||mr(n))&&(n=void 0),r=mt.obj(r)?r[t]:r,null==r&&(r=void 0);const i={to:n,from:r};return Ar(this)||(e.reverse&&([n,r]=[r,n]),r=gn(r),mt.und(r)?Yn(this)||this._set(n):this._set(r)),i}_update({...e},t){const{key:n,defaultProps:r}=this;e.default&&Object.assign(r,ur(e,((e,t)=>/^on/.test(t)?lr(e,n):e))),Kr(this,e,"onProps"),qr(this,"onProps",e,this);const i=this._prepareNode(e);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const a=this._state;return $r(++this._lastCallId,{key:n,props:e,defaultProps:r,state:a,actions:{pause:()=>{Fr(this)||(Pr(this,!0),St(a.pauseQueue),qr(this,"onPause",kr(this,zr(this,this.animation.to)),this))},resume:()=>{Fr(this)&&(Pr(this,!1),Rr(this)&&this._resume(),St(a.resumeQueue),qr(this,"onResume",kr(this,zr(this,this.animation.to)),this))},start:this._merge.bind(this,i)}}).then((n=>{if(e.loop&&n.finished&&(!t||!n.noop)){const t=Hr(e);if(t)return this._update(t,!0)}return n}))}_merge(e,t,n){if(t.cancel)return this.stop(!0),n(Or(this));const r=!mt.und(e.to),i=!mt.und(e.from);if(r||i){if(!(t.callId>this._lastToId))return n(Or(this));this._lastToId=t.callId}const{key:a,defaultProps:o,animation:s}=this,{to:l,from:c}=s;let{to:d=l,from:u=c}=e;!i||r||t.default&&!mt.und(d)||(d=u),t.reverse&&([d,u]=[u,d]);const f=!bt(u,c);f&&(s.from=u),u=gn(u);const h=!bt(d,l);h&&this._focus(d);const p=mr(t.to),{config:g}=s,{decay:m,velocity:b}=g;(r||i)&&(g.velocity=0),t.config&&!p&&function(e,t,n){n&&(yr(n={...n},t),t={...n,...t}),yr(e,t),Object.assign(e,t);for(const t in br)null==e[t]&&(e[t]=br[t]);let{frequency:r,damping:i}=e;const{mass:a}=e;mt.und(r)||(r<.01&&(r=.01),i<0&&(i=0),e.tension=Math.pow(2*Math.PI/r,2)*a,e.friction=4*Math.PI*i*a/r)}(g,or(t.config,a),t.config!==o.config?or(o.config,a):void 0);let v=Yn(this);if(!v||mt.und(d))return n(kr(this,!0));const y=mt.und(t.reset)?i&&!t.default:!mt.und(u)&&sr(t.reset,a),x=y?u:this.get(),w=gr(d),$=mt.num(w)||mt.arr(w)||Fn(w),j=!p&&(!$||sr(o.immediate||t.immediate,a));if(h){const e=tr(d);if(e!==v.constructor){if(!j)throw Error(`Cannot animate between ${v.constructor.name} and ${e.name}, as the "to" prop suggests`);v=this._set(w)}}const S=v.constructor;let k=pn(d),O=!1;if(!k){const e=y||!Ar(this)&&f;(h||e)&&(O=bt(gr(x),w),k=!O),(bt(s.immediate,j)||j)&&bt(g.decay,m)&&bt(g.velocity,b)||(k=!0)}if(O&&Rr(this)&&(s.changed&&!y?k=!0:k||this._stop(l)),!p&&((k||pn(l))&&(s.values=v.getPayload(),s.toValues=pn(d)?null:S==Gn?[1]:xt(w)),s.immediate!=j&&(s.immediate=j,j||y||this._set(l)),k)){const{onRest:e}=s;vt(Ur,(e=>Kr(this,t,e)));const r=kr(this,zr(this,l));St(this._pendingCalls,r),this._pendingCalls.add(n),s.changed&&Qe.batchedUpdates((()=>{s.changed=!y,e?.(r,this),y?or(o.onRest,r):s.onStart?.(r,this)}))}y&&this._set(x),p?n(Cr(t.to,t,this._state,this)):k?this._start():Rr(this)&&!h?this._pendingCalls.add(n):n(Sr(x))}_focus(e){const t=this.animation;e!==t.to&&(mn(this)&&this._detach(),t.to=e,mn(this)&&this._attach())}_attach(){let e=0;const{to:t}=this.animation;pn(t)&&(xn(t,this),Er(t)&&(e=t.priority+1)),this.priority=e}_detach(){const{to:e}=this.animation;pn(e)&&wn(e,this)}_set(e,t=!0){const n=gn(e);if(!mt.und(n)){const e=Yn(this);if(!e||!bt(n,e.getValue())){const r=tr(n);e&&e.constructor==r?e.setValue(n):Un(this,r.create(n)),e&&Qe.batchedUpdates((()=>{this._onChange(n,t)}))}}return Yn(this)}_onStart(){const e=this.animation;e.changed||(e.changed=!0,qr(this,"onStart",kr(this,zr(this,e.to)),this))}_onChange(e,t){t||(this._onStart(),or(this.animation.onChange,e,this)),or(this.defaultProps.onChange,e,this),super._onChange(e,t)}_start(){const e=this.animation;Yn(this).reset(gn(e.to)),e.immediate||(e.fromValues=e.values.map((e=>e.lastPosition))),Rr(this)||(Br(this,!0),Fr(this)||this._resume())}_resume(){Ge.skipAnimation?this.finish():Nt.start(this)}_stop(e,t){if(Rr(this)){Br(this,!1);const n=this.animation;vt(n.values,(e=>{e.done=!0})),n.toValues&&(n.onChange=n.onPause=n.onResume=void 0),bn(this,{type:"idle",parent:this});const r=t?Or(this.get()):kr(this.get(),zr(this,e??n.to));St(this._pendingCalls,r),n.changed&&(n.changed=!1,qr(this,"onRest",r,this))}}};function zr(e,t){const n=gr(t);return bt(gr(e.get()),n)}function Hr(e,t=e.loop,n=e.to){const r=or(t);if(r){const i=!0!==r&&pr(r),a=(i||e).reverse,o=!i||i.reset;return Wr({...e,loop:t,default:!1,pause:void 0,to:!a||mr(n)?n:void 0,from:o?e.from:void 0,reset:o,...i})}}function Wr(e){const{to:t,from:n}=e=pr(e),r=new Set;return mt.obj(t)&&Yr(t,r),mt.obj(n)&&Yr(n,r),e.keys=r.size?Array.from(r):null,e}function Vr(e){const t=Wr(e);return mt.und(t.default)&&(t.default=ur(t)),t}function Yr(e,t){yt(e,((e,n)=>null!=e&&t.add(n)))}var Ur=["onStart","onRest","onChange","onPause","onResume"];function Kr(e,t,n){e.animation[n]=t[n]!==cr(t,n)?lr(t[n],e.key):void 0}function qr(e,t,...n){e.animation[t]?.(...n),e.defaultProps[t]?.(...n)}var Xr=["onStart","onChange","onRest"],Gr=1,Zr=class{constructor(e,t){this.id=Gr++,this.springs={},this.queue=[],this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),t&&(this._flush=t),e&&this.start({default:!0,...e})}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every((e=>e.idle&&!e.isDelayed&&!e.isPaused))}get item(){return this._item}set item(e){this._item=e}get(){const e={};return this.each(((t,n)=>e[n]=t.get())),e}set(e){for(const t in e){const n=e[t];mt.und(n)||this.springs[t].set(n)}}update(e){return e&&this.queue.push(Wr(e)),this}start(e){let{queue:t}=this;return e?t=xt(e).map(Wr):this.queue=[],this._flush?this._flush(this,t):(ii(this,t),Qr(this,t))}stop(e,t){if(e!==!!e&&(t=e),t){const n=this.springs;vt(xt(t),(t=>n[t].stop(!!e)))}else Dr(this._state,this._lastAsyncId),this.each((t=>t.stop(!!e)));return this}pause(e){if(mt.und(e))this.start({pause:!0});else{const t=this.springs;vt(xt(e),(e=>t[e].pause()))}return this}resume(e){if(mt.und(e))this.start({pause:!1});else{const t=this.springs;vt(xt(e),(e=>t[e].resume()))}return this}each(e){yt(this.springs,e)}_onFrame(){const{onStart:e,onChange:t,onRest:n}=this._events,r=this._active.size>0,i=this._changed.size>0;(r&&!this._started||i&&!this._started)&&(this._started=!0,wt(e,(([e,t])=>{t.value=this.get(),e(t,this,this._item)})));const a=!r&&this._started,o=i||a&&n.size?this.get():null;i&&t.size&&wt(t,(([e,t])=>{t.value=o,e(t,this,this._item)})),a&&(this._started=!1,wt(n,(([e,t])=>{t.value=o,e(t,this,this._item)})))}eventObserved(e){if("change"==e.type)this._changed.add(e.parent),e.idle||this._active.add(e.parent);else{if("idle"!=e.type)return;this._active.delete(e.parent)}Qe.onFrame(this._onFrame)}};function Qr(e,t){return Promise.all(t.map((t=>Jr(e,t)))).then((t=>jr(e,t)))}async function Jr(e,t,n){const{keys:r,to:i,from:a,loop:o,onRest:s,onResolve:l}=t,c=mt.obj(t.default)&&t.default;o&&(t.loop=!1),!1===i&&(t.to=null),!1===a&&(t.from=null);const d=mt.arr(i)||mt.fun(i)?i:void 0;d?(t.to=void 0,t.onRest=void 0,c&&(c.onRest=void 0)):vt(Xr,(n=>{const r=t[n];if(mt.fun(r)){const i=e._events[n];t[n]=({finished:e,cancelled:t})=>{const n=i.get(r);n?(e||(n.finished=!1),t&&(n.cancelled=!0)):i.set(r,{value:null,finished:e||!1,cancelled:t||!1})},c&&(c[n]=t[n])}}));const u=e._state;t.pause===!u.paused?(u.paused=t.pause,St(t.pause?u.pauseQueue:u.resumeQueue)):u.paused&&(t.pause=!0);const f=(r||Object.keys(e.springs)).map((n=>e.springs[n].start(t))),h=!0===t.cancel||!0===cr(t,"cancel");(d||h&&u.asyncId)&&f.push($r(++e._lastAsyncId,{props:t,state:u,actions:{pause:gt,resume:gt,start(t,n){h?(Dr(u,e._lastAsyncId),n(Or(e))):(t.onRest=s,n(Cr(d,t,u,e)))}}})),u.paused&&await new Promise((e=>{u.resumeQueue.add(e)}));const p=jr(e,await Promise.all(f));if(o&&p.finished&&(!n||!p.noop)){const n=Hr(t,o,i);if(n)return ii(e,[n]),Jr(e,n,!0)}return l&&Qe.batchedUpdates((()=>l(p,e,e.item))),p}function ei(e,t){const n={...e.springs};return t&&vt(xt(t),(e=>{mt.und(e.keys)&&(e=Wr(e)),mt.obj(e.to)||(e={...e,to:void 0}),ri(n,e,(e=>ni(e)))})),ti(e,n),n}function ti(e,t){yt(t,((t,n)=>{e.springs[n]||(e.springs[n]=t,xn(t,e))}))}function ni(e,t){const n=new Lr;return n.key=e,t&&xn(n,t),n}function ri(e,t,n){t.keys&&vt(t.keys,(r=>{(e[r]||(e[r]=n(r)))._prepareNode(t)}))}function ii(e,t){vt(t,(t=>{ri(e.springs,t,(t=>ni(t,e)))}))}var ai,oi,si=({children:e,...n})=>{const r=t.useContext(li),i=n.pause||!!r.pause,a=n.immediate||!!r.immediate;n=function(e,n){const[r]=t.useState((()=>({inputs:n,result:e()}))),i=t.useRef(),a=i.current;let o=a;if(o){const t=Boolean(n&&o.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}(n,o.inputs));t||(o={inputs:n,result:e()})}else o=r;return t.useEffect((()=>{i.current=o,a==r&&(r.inputs=r.result=void 0)}),[o]),o.result}((()=>({pause:i,immediate:a})),[i,a]);const{Provider:o}=li;return Y.createElement(o,{value:n},e)},li=(ai=si,oi={},Object.assign(ai,Y.createContext(oi)),ai.Provider._context=ai,ai.Consumer._context=ai,ai);si.Provider=li.Provider,si.Consumer=li.Consumer;var ci=()=>{const e=[],t=function(t){Rn(`${In}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);const r=[];return vt(e,((e,i)=>{if(mt.und(t))r.push(e.start());else{const a=n(t,e,i);a&&r.push(e.start(a))}})),r};t.current=e,t.add=function(t){e.includes(t)||e.push(t)},t.delete=function(t){const n=e.indexOf(t);~n&&e.splice(n,1)},t.pause=function(){return vt(e,(e=>e.pause(...arguments))),this},t.resume=function(){return vt(e,(e=>e.resume(...arguments))),this},t.set=function(t){vt(e,((e,n)=>{const r=mt.fun(t)?t(n,e):t;r&&e.set(r)}))},t.start=function(t){const n=[];return vt(e,((e,r)=>{if(mt.und(t))n.push(e.start());else{const i=this._getProps(t,e,r);i&&n.push(e.start(i))}})),n},t.stop=function(){return vt(e,(e=>e.stop(...arguments))),this},t.update=function(t){return vt(e,((e,n)=>e.update(this._getProps(t,e,n)))),this};const n=function(e,t,n){return mt.fun(e)?e(n,t):e};return t._getProps=n,t};function di(e,n){const r=mt.fun(e),[[i],a]=function(e,n,r){const i=mt.fun(n)&&n;i&&!r&&(r=[]);const a=t.useMemo((()=>i||3==arguments.length?ci():void 0),[]),o=t.useRef(0),s=Ln(),l=t.useMemo((()=>({ctrls:[],queue:[],flush(e,t){const n=ei(e,t);return o.current>0&&!l.queue.length&&!Object.keys(n).some((t=>!e.springs[t]))?Qr(e,t):new Promise((r=>{ti(e,n),l.queue.push((()=>{r(Qr(e,t))})),s()}))}})),[]),c=t.useRef([...l.ctrls]),d=[],u=Wn(e)||0;function f(e,t){for(let r=e;r<t;r++){const e=c.current[r]||(c.current[r]=new Zr(null,l.flush)),t=i?i(r,e):n[r];t&&(d[r]=Vr(t))}}t.useMemo((()=>{vt(c.current.slice(e,u),(e=>{!function(e,t){e.ref?.delete(e),t?.delete(e)}(e,a),e.stop(!0)})),c.current.length=e,f(u,e)}),[e]),t.useMemo((()=>{f(0,Math.min(u,e))}),r);const h=c.current.map(((e,t)=>ei(e,d[t]))),p=t.useContext(si),g=Wn(p),m=p!==g&&function(e){for(const t in e)return!0;return!1}(p);Bn((()=>{o.current++,l.ctrls=c.current;const{queue:e}=l;e.length&&(l.queue=[],vt(e,(e=>e()))),vt(c.current,((e,t)=>{a?.add(e),m&&e.start({default:p});const n=d[t];n&&(function(e,t){t&&e.ref!==t&&(e.ref?.delete(e),t.add(e),e.ref=t)}(e,n.ref),e.ref?e.queue.push(n):e.start(n))}))})),zn((()=>()=>{vt(l.ctrls,(e=>e.stop(!0)))}));const b=h.map((e=>({...e})));return a?[b,a]:b}(1,r?e:[e],r?n||[]:n);return r||2==arguments.length?[i,a]:i}var ui=class extends Ir{constructor(e,t){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=rn(...t);const n=this._get(),r=tr(n);Un(this,r.create(n))}advance(e){const t=this._get();bt(t,this.get())||(Yn(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&hi(this._active)&&pi(this)}_get(){const e=mt.arr(this.source)?this.source.map(gn):xt(gn(this.source));return this.calc(...e)}_start(){this.idle&&!hi(this._active)&&(this.idle=!1,vt(Kn(this),(e=>{e.done=!1})),Ge.skipAnimation?(Qe.batchedUpdates((()=>this.advance())),pi(this)):Nt.start(this))}_attach(){let e=1;vt(xt(this.source),(t=>{pn(t)&&xn(t,this),Er(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){vt(xt(this.source),(e=>{pn(e)&&wn(e,this)})),this._active.clear(),pi(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=xt(this.source).reduce(((e,t)=>Math.max(e,(Er(t)?t.priority:0)+1)),0))}};function fi(e){return!1!==e.idle}function hi(e){return!e.size||Array.from(e).every(fi)}function pi(e){e.idle||(e.idle=!0,vt(Kn(e),(e=>{e.done=!0})),bn(e,{type:"idle",parent:e}))}Ge.assign({createStringInterpolator:Mn,to:(e,t)=>new ui(e,t)});var gi=/^--/;function mi(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||gi.test(e)||vi.hasOwnProperty(e)&&vi[e]?(""+t).trim():t+"px"}var bi={};var vi={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},yi=["Webkit","Ms","Moz","O"];vi=Object.keys(vi).reduce(((e,t)=>(yi.forEach((n=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(n,t)]=e[t])),e)),vi);var xi=/^(matrix|translate|scale|rotate|skew)/,wi=/^(translate)/,$i=/^(rotate|skew)/,ji=(e,t)=>mt.num(e)&&0!==e?e+t:e,Si=(e,t)=>mt.arr(e)?e.every((e=>Si(e,t))):mt.num(e)?e===t:parseFloat(e)===t,ki=class extends Qn{constructor({x:e,y:t,z:n,...r}){const i=[],a=[];(e||t||n)&&(i.push([e||0,t||0,n||0]),a.push((e=>[`translate3d(${e.map((e=>ji(e,"px"))).join(",")})`,Si(e,0)]))),yt(r,((e,t)=>{if("transform"===t)i.push([e||""]),a.push((e=>[e,""===e]));else if(xi.test(t)){if(delete r[t],mt.und(e))return;const n=wi.test(t)?"px":$i.test(t)?"deg":"";i.push(xt(e)),a.push("rotate3d"===t?([e,t,r,i])=>[`rotate3d(${e},${t},${r},${ji(i,n)})`,Si(i,0)]:e=>[`${t}(${e.map((e=>ji(e,n))).join(",")})`,Si(e,t.startsWith("scale")?1:0)])}})),i.length&&(r.transform=new Oi(i,a)),super(r)}},Oi=class extends vn{constructor(e,t){super(),this.inputs=e,this.transforms=t,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return vt(this.inputs,((n,r)=>{const i=gn(n[0]),[a,o]=this.transforms[r](mt.arr(i)?i:n.map(gn));e+=" "+a,t=t&&o})),t?"none":e}observerAdded(e){1==e&&vt(this.inputs,(e=>vt(e,(e=>pn(e)&&xn(e,this)))))}observerRemoved(e){0==e&&vt(this.inputs,(e=>vt(e,(e=>pn(e)&&wn(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),bn(this,e)}};Ge.assign({batchedUpdates:n.unstable_batchedUpdates,createStringInterpolator:Mn,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});var Ci=((e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:n=(e=>new Qn(e)),getComponentProps:r=(e=>e)}={})=>{const i={applyAnimatedValues:t,createAnimatedStyle:n,getComponentProps:r},a=e=>{const t=ar(e)||"Anonymous";return(e=mt.str(e)?a[e]||(a[e]=nr(e,i)):e[ir]||(e[ir]=nr(e,i))).displayName=`Animated(${t})`,e};return yt(e,((t,n)=>{mt.arr(e)&&(n=ar(t)),a[n]=a(t)})),{animated:a}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const n="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,{style:r,children:i,scrollTop:a,scrollLeft:o,viewBox:s,...l}=t,c=Object.values(l),d=Object.keys(l).map((t=>n||e.hasAttribute(t)?t:bi[t]||(bi[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==i&&(e.textContent=i);for(const t in r)if(r.hasOwnProperty(t)){const n=mi(t,r[t]);gi.test(t)?e.style.setProperty(t,n):e.style[t]=n}d.forEach(((t,n)=>{e.setAttribute(t,c[n])})),void 0!==a&&(e.scrollTop=a),void 0!==o&&(e.scrollLeft=o),void 0!==s&&e.setAttribute("viewBox",s)},createAnimatedStyle:e=>new ki(e),getComponentProps:({scrollTop:e,scrollLeft:t,...n})=>n}),Di=Ci.animated;var Ti="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function _i(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ei=Array.isArray,Mi="object"==typeof Ti&&Ti&&Ti.Object===Object&&Ti,Ii=Mi,Ni="object"==typeof self&&self&&self.Object===Object&&self,Ai=Ii||Ni||Function("return this")(),Ri=Ai.Symbol,Fi=Ri,Bi=Object.prototype,Pi=Bi.hasOwnProperty,Li=Bi.toString,zi=Fi?Fi.toStringTag:void 0;var Hi=function(e){var t=Pi.call(e,zi),n=e[zi];try{e[zi]=void 0;var r=!0}catch(e){}var i=Li.call(e);return r&&(t?e[zi]=n:delete e[zi]),i},Wi=Object.prototype.toString;var Vi=Hi,Yi=function(e){return Wi.call(e)},Ui=Ri?Ri.toStringTag:void 0;var Ki=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Ui&&Ui in Object(e)?Vi(e):Yi(e)};var qi=function(e){return null!=e&&"object"==typeof e},Xi=Ki,Gi=qi;var Zi=function(e){return"symbol"==typeof e||Gi(e)&&"[object Symbol]"==Xi(e)},Qi=Ei,Ji=Zi,ea=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ta=/^\w*$/;var na=function(e,t){if(Qi(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!Ji(e))||(ta.test(e)||!ea.test(e)||null!=t&&e in Object(t))};var ra=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},ia=Ki,aa=ra;var oa,sa=function(e){if(!aa(e))return!1;var t=ia(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},la=Ai["__core-js_shared__"],ca=(oa=/[^.]+$/.exec(la&&la.keys&&la.keys.IE_PROTO||""))?"Symbol(src)_1."+oa:"";var da=function(e){return!!ca&&ca in e},ua=Function.prototype.toString;var fa=function(e){if(null!=e){try{return ua.call(e)}catch(e){}try{return e+""}catch(e){}}return""},ha=sa,pa=da,ga=ra,ma=fa,ba=/^\[object .+?Constructor\]$/,va=Function.prototype,ya=Object.prototype,xa=va.toString,wa=ya.hasOwnProperty,$a=RegExp("^"+xa.call(wa).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ja=function(e){return!(!ga(e)||pa(e))&&(ha(e)?$a:ba).test(ma(e))},Sa=function(e,t){return null==e?void 0:e[t]};var ka=function(e,t){var n=Sa(e,t);return ja(n)?n:void 0},Oa=ka(Object,"create"),Ca=Oa;var Da=function(){this.__data__=Ca?Ca(null):{},this.size=0};var Ta=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},_a=Oa,Ea=Object.prototype.hasOwnProperty;var Ma=function(e){var t=this.__data__;if(_a){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return Ea.call(t,e)?t[e]:void 0},Ia=Oa,Na=Object.prototype.hasOwnProperty;var Aa=Oa;var Ra=Da,Fa=Ta,Ba=Ma,Pa=function(e){var t=this.__data__;return Ia?void 0!==t[e]:Na.call(t,e)},La=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Aa&&void 0===t?"__lodash_hash_undefined__":t,this};function za(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}za.prototype.clear=Ra,za.prototype.delete=Fa,za.prototype.get=Ba,za.prototype.has=Pa,za.prototype.set=La;var Ha=za;var Wa=function(){this.__data__=[],this.size=0};var Va=function(e,t){return e===t||e!=e&&t!=t},Ya=Va;var Ua=function(e,t){for(var n=e.length;n--;)if(Ya(e[n][0],t))return n;return-1},Ka=Ua,qa=Array.prototype.splice;var Xa=Ua;var Ga=Ua;var Za=Ua;var Qa=Wa,Ja=function(e){var t=this.__data__,n=Ka(t,e);return!(n<0)&&(n==t.length-1?t.pop():qa.call(t,n,1),--this.size,!0)},eo=function(e){var t=this.__data__,n=Xa(t,e);return n<0?void 0:t[n][1]},to=function(e){return Ga(this.__data__,e)>-1},no=function(e,t){var n=this.__data__,r=Za(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function ro(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ro.prototype.clear=Qa,ro.prototype.delete=Ja,ro.prototype.get=eo,ro.prototype.has=to,ro.prototype.set=no;var io=ro,ao=ka(Ai,"Map"),oo=Ha,so=io,lo=ao;var co=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var uo=function(e,t){var n=e.__data__;return co(t)?n["string"==typeof t?"string":"hash"]:n.map},fo=uo;var ho=uo;var po=uo;var go=uo;var mo=function(){this.size=0,this.__data__={hash:new oo,map:new(lo||so),string:new oo}},bo=function(e){var t=fo(this,e).delete(e);return this.size-=t?1:0,t},vo=function(e){return ho(this,e).get(e)},yo=function(e){return po(this,e).has(e)},xo=function(e,t){var n=go(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function wo(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}wo.prototype.clear=mo,wo.prototype.delete=bo,wo.prototype.get=vo,wo.prototype.has=yo,wo.prototype.set=xo;var $o=wo,jo=$o;function So(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],a=n.cache;if(a.has(i))return a.get(i);var o=e.apply(this,r);return n.cache=a.set(i,o)||a,o};return n.cache=new(So.Cache||jo),n}So.Cache=jo;var ko=So;var Oo=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Co=/\\(\\)?/g,Do=function(e){var t=ko(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Oo,(function(e,n,r,i){t.push(r?i.replace(Co,"$1"):n||e)})),t}));var To=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},_o=Ei,Eo=Zi,Mo=Ri?Ri.prototype:void 0,Io=Mo?Mo.toString:void 0;var No=function e(t){if("string"==typeof t)return t;if(_o(t))return To(t,e)+"";if(Eo(t))return Io?Io.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},Ao=No;var Ro=function(e){return null==e?"":Ao(e)},Fo=Ei,Bo=na,Po=Do,Lo=Ro;var zo=function(e,t){return Fo(e)?e:Bo(e,t)?[e]:Po(Lo(e))},Ho=Zi;var Wo=function(e){if("string"==typeof e||Ho(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},Vo=zo,Yo=Wo;var Uo=function(e,t){for(var n=0,r=(t=Vo(t,e)).length;null!=e&&n<r;)e=e[Yo(t[n++])];return n&&n==r?e:void 0},Ko=Uo;var qo=function(e,t,n){var r=null==e?void 0:Ko(e,t);return void 0===r?n:r},Xo=_i(qo);const Go=(e,t,n)=>t?Xo(n,t)||Xo(e,t):n||e,Zo=(e,t)=>{const n=t||e.defaultValue;return Xo(e.collections,n)};var Qo;exports.ThemeContextKeys=void 0,(Qo=exports.ThemeContextKeys||(exports.ThemeContextKeys={})).colorScheme="colorScheme",Qo.layout="layout",Qo.textStyleScheme="textStyleScheme",Qo.designTokenScheme="designTokenScheme",Qo.resourceScheme="resourceScheme";const Jo={collections:{base:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#1C76D5",PrimaryDark:"#1869BF",Secondary:"#0056b3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#57A9FF",2:"#81BFFF",3:"#BED7FF",4:"#E2ECFD",5:"#F6F8FF",6:"#FBFCFE"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(87, 169, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},bookingsg:{Brand:{1:"#EF413D",2:"#F26664",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#6F4AB8",PrimaryDark:"#6443A6",Secondary:"#6443A6",Accent:{Dark:{1:"#355985",2:"#68819D",3:"#9AABBE"},Light:{1:"#977ECC",2:"#B5A5D7",3:"#CEC3E4 ",4:"#E2DBEF",5:"#F2EFF8",6:"#F7F6FB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(161, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},rbs:{Brand:{1:"#3E4DFF",2:"#AEACFF",3:"#AD44FF",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#4855D4",PrimaryDark:"#3E49B2",Secondary:"#364891",Accent:{Dark:{1:"#5E516E",2:"#7A6F87",3:"#C5C0CC"},Light:{1:"#8397FC",2:"#ABB8FC",3:"#CED6FD ",4:"#E1E4FA",5:"#F0F2FF",6:"#FAFBFF"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(90, 87, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},mylegacy:{Brand:{1:"#24588D",2:"#FFC166",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#0C7BB3",PrimaryDark:"#066391",Secondary:"#066391",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#229AD6",2:"#8DD4F7",3:"#A4DDF9",4:"#BBE5FA",5:"#E8F4FA",6:"#F7FBFC"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#1A5230",Icon:"#2A854E",Border:"#7DDBA3",Background:"#E1FAEB"},Orange:{Text:"#693D07",Icon:"#CF7911",Border:"#F9CB77",Background:"#FCF2E6",Badge:"#F57F17"},Red:{Text:"#CB2213",Icon:"#CB2213",Border:"#DC6363",Background:"#FAF0F0"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(34, 154, 214, 0.6)",Red:"rgba(203, 34, 19, 0.5)",Elevation:"rgba(75, 83, 159, 0.24)"}},ccube:{Brand:{1:"#8D5197",2:"#FE3399",3:"#F58E8B",4:"#F9B5B2",5:"#FDDDD7",6:"#FFEEEA"},Primary:"#8D5197",PrimaryDark:"#6B3E73",Secondary:"#C02673",Accent:{Dark:{1:"#921D58",2:"#FF409F",3:"#FF88C4"},Light:{1:"#B07DB7",2:"#C7A2CC",3:"#D9C2DD",4:"#E9DBEB",5:"#F3ECF4",6:"#FAF7FA"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(210, 77, 255, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}},oneservice:{Brand:{1:"#009F97",2:"#49C3CA",3:"#A81E5E",4:"#ED1386",5:"#F7D414",6:"#000000"},Primary:"#2D7990",PrimaryDark:"#205666",Secondary:"#0056B3",Accent:{Dark:{1:"#4B539F",2:"#6D74B1",3:"#959BC5"},Light:{1:"#5D97A9",2:"#8CB6C2",3:"#B2CED6",4:"#D1E2E7",5:"#E8F0F3",6:"#F7FAFB"}},Neutral:{1:"#282828",2:"#424242",3:"#686868",4:"#A4A4A4",5:"#E0E4E5",6:"#ECEFEF",7:"#F8F8F8",8:"#FFFFFF"},Validation:{Green:{Text:"#097123",Icon:"#4FC029",Border:"#95D97F",Background:"#F9FDF8"},Orange:{Text:"#B34E00",Icon:"#FEAB10",Border:"#F9CB77",Background:"#FFFCF7",Badge:"#F57F17"},Red:{Text:"#C60000",Icon:"#C60000",Border:"#DD6666",Background:"#FDF7F7"},Blue:{Text:"#064D70",Icon:" #066391",Border:"#84B7DB",Background:"#E8F4FA"}},Shadow:{Accent:"rgba(45, 121, 144, 0.5)",Red:"rgba(221, 102, 102, 0.8)",Elevation:"rgba(75, 83, 159, 0.24)"}}},defaultValue:"base"},es=e=>t=>{const n=t.theme,r=Zo(Jo,n[exports.ThemeContextKeys.colorScheme]);return n.options&&n.options.color?Go(r,e,n.options.color):Go(r,e)},ts={Brand:{1:es("Brand.1"),2:es("Brand.2"),3:es("Brand.3"),4:es("Brand.4"),5:es("Brand.5"),6:es("Brand.6")},Primary:es("Primary"),PrimaryDark:es("PrimaryDark"),Secondary:es("Secondary"),Accent:{Light:{1:es("Accent.Light.1"),2:es("Accent.Light.2"),3:es("Accent.Light.3"),4:es("Accent.Light.4"),5:es("Accent.Light.5"),6:es("Accent.Light.6")},Dark:{1:es("Accent.Dark.1"),2:es("Accent.Dark.2"),3:es("Accent.Dark.3")}},Neutral:{1:es("Neutral.1"),2:es("Neutral.2"),3:es("Neutral.3"),4:es("Neutral.4"),5:es("Neutral.5"),6:es("Neutral.6"),7:es("Neutral.7"),8:es("Neutral.8")},Validation:{Green:{Text:es("Validation.Green.Text"),Icon:es("Validation.Green.Icon"),Border:es("Validation.Green.Border"),Background:es("Validation.Green.Background")},Orange:{Text:es("Validation.Orange.Text"),Icon:es("Validation.Orange.Icon"),Border:es("Validation.Orange.Border"),Background:es("Validation.Orange.Background"),Badge:es("Validation.Orange.Badge")},Red:{Text:es("Validation.Red.Text"),Icon:es("Validation.Red.Icon"),Border:es("Validation.Red.Border"),Background:es("Validation.Red.Background")},Blue:{Text:es("Validation.Blue.Text"),Icon:es("Validation.Blue.Icon"),Border:es("Validation.Blue.Border"),Background:es("Validation.Blue.Background")}},Shadow:{Accent:es("Shadow.Accent"),Red:es("Shadow.Red"),Elevation:es("Shadow.Elevation")}},ns={mobileS:320,mobileM:375,mobileL:480,tablet:1199,desktopM:1399,desktopL:1999,desktop4k:3840},rs=e=>Object.keys(ns).reduce(((t,n)=>{const r=ns[n];return t[n]=`@media screen and (${e}: ${r}px)`,t}),{}),is={MaxWidth:rs("max-width"),MinWidth:rs("min-width")},as=ns,os=K.default.button`
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
`,ss=Y.default.forwardRef(((t,n)=>{var{children:r,focusHighlight:i=!0,focusOutline:a="none",type:o="button"}=t,s=X(t,["children","focusHighlight","focusOutline","type"]);return e.jsx(os,Object.assign({ref:n,$outline:a,$highlight:i,type:o},s,{children:r}))})),ls={OpenSans:{Regular:"Open Sans",Semibold:"Open Sans Semibold",Bold:"Open Sans Bold",Light:"Open Sans Light"},PlusJakartaSans:{Regular:"Plus Jakarta Sans",Semibold:"Plus Jakarta Sans Semibold",Bold:"Plus Jakarta Sans Bold",Light:"Plus Jakarta Sans Light"},MerriWeather:"Merriweather"},cs={D1:{fontFamily:ls.OpenSans.Bold,fontSize:3,fontWeight:700,lineHeight:4,letterSpacing:-.056},D2:{fontFamily:ls.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5,letterSpacing:-.032},D3:{fontFamily:ls.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:ls.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:ls.OpenSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:ls.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5},H2:{fontFamily:ls.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:ls.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:ls.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H5:{fontFamily:ls.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5,letterSpacing:.014},H6:{fontFamily:ls.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.6,letterSpacing:.012},Body:{fontFamily:ls.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},BodySmall:{fontFamily:ls.OpenSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:ls.OpenSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},ds={D1:{fontFamily:ls.PlusJakartaSans.Bold,fontSize:3,fontWeight:700,lineHeight:3.5,letterSpacing:-.056},D2:{fontFamily:ls.PlusJakartaSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3,letterSpacing:-.032},D3:{fontFamily:ls.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:ls.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:ls.PlusJakartaSans.Regular,fontSize:1.375,lineHeight:1.75},H1:{fontFamily:ls.PlusJakartaSans.Bold,fontSize:2,fontWeight:700,lineHeight:2.5,letterSpacing:-.032},H2:{fontFamily:ls.PlusJakartaSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},H3:{fontFamily:ls.PlusJakartaSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},H4:{fontFamily:ls.PlusJakartaSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.75},H5:{fontFamily:ls.PlusJakartaSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H6:{fontFamily:ls.PlusJakartaSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.625,letterSpacing:.012},Body:{fontFamily:ls.PlusJakartaSans.Regular,fontSize:1.125,lineHeight:1.75},BodySmall:{fontFamily:ls.PlusJakartaSans.Regular,fontSize:1,lineHeight:1.5,letterSpacing:.014},XSmall:{fontFamily:ls.PlusJakartaSans.Regular,fontSize:.75,lineHeight:1.2,letterSpacing:.012}},us={collections:{base:cs,oneservice:{D1:{fontFamily:ls.OpenSans.Bold,fontSize:2.5,fontWeight:700,lineHeight:3.5},D2:{fontFamily:ls.OpenSans.Bold,fontSize:2,fontWeight:700,lineHeight:3},D3:{fontFamily:ls.OpenSans.Bold,fontSize:1.625,fontWeight:700,lineHeight:2.25},D4:{fontFamily:ls.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:1.75},DBody:{fontFamily:ls.OpenSans.Regular,fontSize:1.125,lineHeight:1.625},H1:{fontFamily:ls.OpenSans.Bold,fontSize:1.75,fontWeight:700,lineHeight:2.625},H2:{fontFamily:ls.OpenSans.Bold,fontSize:1.375,fontWeight:700,lineHeight:2},H3:{fontFamily:ls.OpenSans.Bold,fontSize:1.125,fontWeight:700,lineHeight:1.625},H4:{fontFamily:ls.OpenSans.Bold,fontSize:1,fontWeight:700,lineHeight:1.5},H5:{fontFamily:ls.OpenSans.Bold,fontSize:.875,fontWeight:700,lineHeight:1.313},H6:{fontFamily:ls.OpenSans.Bold,fontSize:.75,fontWeight:700,lineHeight:1.125},Body:{fontFamily:ls.OpenSans.Regular,fontSize:1,lineHeight:1.5},BodySmall:{fontFamily:ls.OpenSans.Regular,fontSize:.875,lineHeight:1.313},XSmall:{fontFamily:ls.OpenSans.Regular,fontSize:.75,lineHeight:1.125}},plusJakartaSans:ds},defaultValue:"base"},fs=e=>t=>{const n=t.theme,r=Zo(us,n[exports.ThemeContextKeys.textStyleScheme]);return n.options&&n.options.textStyle?Go(r,e,n.options.textStyle):Go(r,e)},hs={D1:{fontFamily:fs("D1.fontFamily"),fontSize:fs("D1.fontSize"),fontWeight:fs("D1.fontWeight"),lineHeight:fs("D1.lineHeight"),letterSpacing:fs("D1.letterSpacing")},D2:{fontFamily:fs("D2.fontFamily"),fontSize:fs("D2.fontSize"),fontWeight:fs("D2.fontWeight"),lineHeight:fs("D2.lineHeight"),letterSpacing:fs("D2.letterSpacing")},D3:{fontFamily:fs("D3.fontFamily"),fontSize:fs("D3.fontSize"),fontWeight:fs("D3.fontWeight"),lineHeight:fs("D3.lineHeight"),letterSpacing:fs("D3.letterSpacing")},D4:{fontFamily:fs("D4.fontFamily"),fontSize:fs("D4.fontSize"),fontWeight:fs("D4.fontWeight"),lineHeight:fs("D4.lineHeight"),letterSpacing:fs("D4.letterSpacing")},DBody:{fontFamily:fs("DBody.fontFamily"),fontSize:fs("DBody.fontSize"),fontWeight:fs("DBody.fontWeight"),lineHeight:fs("DBody.lineHeight"),letterSpacing:fs("DBody.letterSpacing")},H1:{fontFamily:fs("H1.fontFamily"),fontSize:fs("H1.fontSize"),fontWeight:fs("H1.fontWeight"),lineHeight:fs("H1.lineHeight"),letterSpacing:fs("H1.letterSpacing")},H2:{fontFamily:fs("H2.fontFamily"),fontSize:fs("H2.fontSize"),fontWeight:fs("H2.fontWeight"),lineHeight:fs("H2.lineHeight"),letterSpacing:fs("H2.letterSpacing")},H3:{fontFamily:fs("H3.fontFamily"),fontSize:fs("H3.fontSize"),fontWeight:fs("H3.fontWeight"),lineHeight:fs("H3.lineHeight"),letterSpacing:fs("H3.letterSpacing")},H4:{fontFamily:fs("H4.fontFamily"),fontSize:fs("H4.fontSize"),fontWeight:fs("H4.fontWeight"),lineHeight:fs("H4.lineHeight"),letterSpacing:fs("H4.letterSpacing")},H5:{fontFamily:fs("H5.fontFamily"),fontSize:fs("H5.fontSize"),fontWeight:fs("H5.fontWeight"),lineHeight:fs("H5.lineHeight"),letterSpacing:fs("H5.letterSpacing")},H6:{fontFamily:fs("H6.fontFamily"),fontSize:fs("H6.fontSize"),fontWeight:fs("H6.fontWeight"),lineHeight:fs("H6.lineHeight"),letterSpacing:fs("H6.letterSpacing")},Body:{fontFamily:fs("Body.fontFamily"),fontSize:fs("Body.fontSize"),fontWeight:fs("Body.fontWeight"),lineHeight:fs("Body.lineHeight"),letterSpacing:fs("Body.letterSpacing")},BodySmall:{fontFamily:fs("BodySmall.fontFamily"),fontSize:fs("BodySmall.fontSize"),fontWeight:fs("BodySmall.fontWeight"),lineHeight:fs("BodySmall.lineHeight"),letterSpacing:fs("BodySmall.letterSpacing")},XSmall:{fontFamily:fs("XSmall.fontFamily"),fontSize:fs("XSmall.fontSize"),fontWeight:fs("XSmall.fontWeight"),lineHeight:fs("XSmall.lineHeight"),letterSpacing:fs("XSmall.letterSpacing")}},ps=[ls.OpenSans,ls.PlusJakartaSans],gs=(e,t)=>{switch(t){case 700:case"bold":return e.Bold;case 600:case"semibold":return e.Semibold;case 300:case"light":return e.Light;case 400:case"regular":return e.Regular;default:return""}},ms=(e,t)=>n=>{var r;const a=hs[e].fontFamily(n),o=hs[e].fontWeight(n),s=ps.find((e=>Object.values(e).includes(a)));return s?i.css`
                font-family: ${gs(s,t)||gs(s,o)||a};
                font-weight: normal !important;
            `:i.css`
            font-family: ${a};
            font-weight: ${null!==(r=bs(t)||o)&&void 0!==r?r:"normal"};
        `},bs=e=>{switch(e){case 300:case"light":return 300;case 400:case"regular":return 400;case 600:case"semibold":return 600;case 700:case"bold":return 700;case 900:case"black":return 900;default:return""}},vs=e=>{if(e>0)return i.css`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${e};
            line-clamp: ${e};
            overflow: hidden;
        `},ys={getFontFamily:ms,getTextStyle:(e,t,n=!1)=>r=>{const a=hs[e],o=a.fontSize(r);return i.css`
            ${ms(e,t)}
            font-size: ${o}rem !important;
            line-height: ${a.lineHeight}rem !important;
            letter-spacing: ${a.letterSpacing(r)||0}rem !important;
            ${(()=>{const e=n?1.05:0;return i.css`
                margin-bottom: ${o*e}rem;
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
`,$s=K.default(a.ExternalIcon)`
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
`,Os=K.default.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    cursor: ${e=>e.$isCollapsed?"pointer":"unset"};
`,Cs=e=>i.css`
    flex: 1;
    margin: 1rem 2rem ${e?.5:1}rem 0;
    transition: ${Ss.Base};
`,Ds=K.default(exports.Text.H3)`
    ${e=>Cs(e.$isCollapsed)}
`,Ts=K.default(exports.Text.H4)`
    ${e=>Cs(e.$isCollapsed)}
`,_s=K.default(ss)`
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
`,Ms=K.default(Di.div)`
    overflow: hidden;
`,Is=K.default.div`
    display: inline-block;
    padding-right: 4rem;

    ${is.MaxWidth.tablet} {
        padding-right: 0;
    }
`;const Ns=t.forwardRef((function(n,r){var{title:i,children:a,expanded:o,type:s="default",collapsible:l=!0}=n,c=X(n,["title","children","expanded","type","collapsible"]);const d=t.useRef(),u=t.useContext(q),[f,h]=t.useState(!l||(null!=o?o:u)),[p,g]=t.useState(!1),m=c["data-testid"]||"accordion-item",b=qe(),v=b.ref;t.useImperativeHandle(r,(()=>Object.assign(d.current,{expand(){h(!0)},collapse(){h(!1)},isExpanded:()=>f})),[f]),t.useEffect((()=>{p&&h(!l||u)}),[u]),t.useEffect((()=>{p&&h(o)}),[o]),t.useEffect((()=>{g(!0)}),[]);const y={height:f?b.height:0},x=di(y);return e.jsxs(ks,Object.assign({"data-testid":m,className:c.className,$isCollapsed:f,ref:d},{children:[e.jsxs(Os,Object.assign({$isCollapsed:l,onClick:l?e=>{e.preventDefault(),h((e=>!e))}:void 0},{children:["string"!=typeof i?i:"small"===s?e.jsx(Ts,Object.assign({"data-testid":`${m}-title`,$isCollapsed:f},{children:i})):e.jsx(Ds,Object.assign({"data-testid":`${m}-title`,$isCollapsed:f},{children:i})),l&&e.jsx(_s,Object.assign({"data-testid":`${m}-expand-collapse-button`,$isCollapsed:f,focusHighlight:!1,focusOutline:"browser","aria-label":f?"Collapse":"Expand"},{children:e.jsx(Es,{})}))]})),e.jsx(Ms,Object.assign({style:p?x:y,$isCollapsed:f,"data-testid":`${m}-expandable-container`},{children:e.jsx(Is,Object.assign({ref:v,id:"content-container"},{children:a}))}))]}))})),As=K.default.div`
    display: inline-block;
    position: relative;
    width: ${e=>e.$size}px;
    height: ${e=>e.$size}px;
`,Rs=i.keyframes`
	0% {
	  transform: rotate(0deg);
	}
	100% {
	  transform: rotate(360deg);
	}
`,Fs=K.default.div`
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
    animation: ${Rs} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
`,Bs=K.default(Fs)`
    animation-delay: -0.45s;
`,Ps=K.default(Fs)`
    animation-delay: -0.3s;
`,Ls=K.default(Fs)`
    animation-delay: -0.15s;
`,zs=({color:t,className:n,size:r=18})=>e.jsxs(As,Object.assign({className:n,$size:r,$color:t},{children:[e.jsx(Fs,{id:"inner1",$size:r-2,$borderWidth:2,$color:t}),e.jsx(Bs,{id:"inner2",$size:r-2,$borderWidth:2,$color:t}),e.jsx(Ps,{id:"inner3",$size:r-2,$borderWidth:2,$color:t}),e.jsx(Ls,{id:"inner4",$size:r-2,$borderWidth:2,$color:t})]}));var Hs;exports.RedirectScope=void 0,(Hs=exports.RedirectScope||(exports.RedirectScope={}))[Hs.Subpage=0]="Subpage",Hs[Hs.Domain=1]="Domain";const Ws={collections:{base:{InputBoxShadow:i.css`
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
    `,Table:{Header:"#F5F5F5",Cell:{Primary:"#FBFBFB",Secondary:"#FFFFFF",Selected:"#F0F6FF",Hover:"#DDE6FD"}},Button:{Danger:{BackgroundColor:"#CB2213",Border:"#CB2213",Hover:"#8F0E0E",Primary:"#CB2213"}}}},defaultValue:"base"},Vs=e=>t=>{var n;const r=t.theme,i=Zo(Ws,r[exports.ThemeContextKeys.designTokenScheme]);return(null===(n=r.options)||void 0===n?void 0:n.designToken)?Go(i,e,r.options.designToken):Go(i,e)},Ys={InputBoxShadow:Vs("InputBoxShadow"),InputErrorBoxShadow:Vs("InputErrorBoxShadow"),ElevationBoxShadow:Vs("ElevationBoxShadow"),Table:{Header:Vs("Table.Header"),Cell:{Primary:Vs("Table.Cell.Primary"),Secondary:Vs("Table.Cell.Secondary"),Selected:Vs("Table.Cell.Selected"),Hover:Vs("Table.Cell.Hover")}},Button:{Danger:{BackgroundColor:Vs("Button.Danger.BackgroundColor"),Hover:Vs("Button.Danger.Hover"),Primary:Vs("Button.Danger.Primary"),Border:Vs("Button.Danger.Border")}}},Us=K.default.button`
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
                        ${e.$buttonIsDanger?Ys.Button.Danger.Border:ts.Primary};

                    color: ${e.$buttonIsDanger?Ys.Button.Danger.Primary:ts.Primary};
                `;case"light":return i.css`
                    background-color: ${ts.Neutral[8]};
                    border: 1px solid ${ts.Neutral[5]};

                    color: ${e.$buttonIsDanger?Ys.Button.Danger.Primary:ts.Primary};
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

                    color: ${e.$buttonIsDanger?Ys.Button.Danger.Primary:ts.Primary};
                    :hover,
                    :active,
                    :focus {
                        color: ${e.$buttonIsDanger?Ys.Button.Danger.Hover:ts.Secondary};
                    }
                `;default:return i.css`
                    background-color: ${e.$buttonIsDanger?Ys.Button.Danger.BackgroundColor:ts.Primary};
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
`,Ks=K.default(zs)`
    margin-right: 0.5rem;
    ${e=>{let t=e.$buttonIsDanger?Ys.Button.Danger.Primary:ts.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=ts.Neutral[3](e);break;default:t=ts.Neutral[8](e)}return i.css`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,qs={Default:Y.default.forwardRef(((t,n)=>{const{children:r,disabled:i=!1,loading:a=!1,styleType:o="default",danger:s=!1}=t,l=X(t,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":o,$buttonSizeStyle:"default",$buttonIsDanger:s};return e.jsxs(Us,Object.assign({ref:n,"data-testid":l["data-testid"]||"button",disabled:i},c,l,{children:[a&&e.jsx(Ks,Object.assign({},c)),e.jsx("span",{children:r})]}))})),Small:Y.default.forwardRef(((t,n)=>{const{children:r,disabled:i=!1,loading:a=!1,styleType:o="default",danger:s=!1}=t,l=X(t,["children","disabled","loading","styleType","danger"]),c={$buttonStyle:i?"disabled":o,$buttonSizeStyle:"small",$buttonIsDanger:s};return e.jsxs(Us,Object.assign({ref:n,"data-testid":l["data-testid"]||"button",disabled:i},c,l,{children:[a&&e.jsx(Ks,Object.assign({},c,{size:16})),e.jsx("span",{children:r})]}))}))},Xs=K.default.div`
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
`,Js=Object.assign((({children:n,title:r,enableExpandAll:i=!0,initialDisplay:a="expand-all",showTitleInMobile:o=!1,className:s})=>{const[l,c]=t.useState("expand-all"===a),d=e=>{e.preventDefault(),c((e=>!e))};return e.jsx(q.Provider,Object.assign({value:l},{children:e.jsxs(Xs,Object.assign({className:s},{children:[r||i?e.jsxs(Gs,Object.assign({$showTitleInMobile:o,$hasExpandAll:i},{children:[r&&e.jsx(Zs,Object.assign({$showInMobile:o,"data-testid":"accordion-title"},{children:r})),i&&e.jsx(Qs,Object.assign({"data-testid":"accordion-expand-collapse-button",onClick:d,styleType:"link",type:"button"},{children:l?"Hide all":"Show all"}))]})):null,n]}))}))}),{Item:Ns}),el=e=>{const{textSize:t}=e||{};return i.css`
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
`,al=K.default.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    ${e=>{if(e.$showMore&&e.$hasActionLink)return"\n            margin-bottom: 0.5rem;\n        "}}
    ${e=>{const t="linear-gradient(to bottom, black 50%, transparent 100%)";if(!e.$showMore&&e.$maxCollapsedHeight)return`\n                max-height: ${e.$maxCollapsedHeight}px;\n\t\t\t\toverflow: hidden;\n                -webkit-mask-image: ${t};\n                mask-image: ${t};\n\t\t\t`}}
`,ol=K.default.button`
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
`,ll=n=>{var{type:r,className:i,children:a,actionLink:u,actionLinkIcon:f,sizeType:h="default",showIcon:p=!1,customIcon:g,maxCollapsedHeight:m}=n,b=X(n,["type","className","children","actionLink","actionLinkIcon","sizeType","showIcon","customIcon","maxCollapsedHeight"]);const[v,y]=t.useState(!1),[x,w]=t.useState(!1),{height:$,ref:j}=qe();t.useEffect((()=>{S()}),[m,$]);const S=()=>{y(!m),w(k())},k=()=>!!m&&$>m;return e.jsxs(tl,Object.assign({className:i,$type:r,$sizeType:h,"data-testid":b["data-testid"]},{children:[p&&e.jsx(nl,Object.assign({$sizeType:h,$type:r},{children:(()=>{if(r&&g)return g;switch(r){case"success":return e.jsx(d.TickCircleFillIcon,{});case"warning":return e.jsx(l.ExclamationTriangleFillIcon,{});case"error":return e.jsx(s.ExclamationCircleFillIcon,{});case"info":case"description":return e.jsx(c.ICircleFillIcon,{});default:return null}})()})),e.jsxs(il,{children:[e.jsxs(al,Object.assign({$maxCollapsedHeight:k()?m:void 0,$showMore:v,$hasActionLink:!!u},{children:[e.jsx("div",Object.assign({ref:j},{children:a})),u&&e.jsxs(rl,Object.assign({"data-testid":"action-link",$type:r,$sizeType:h},u,{children:[u.children,f||e.jsx(o.ArrowRightIcon,{})]}))]})),x&&e.jsxs(ol,Object.assign({$sizeType:h,$type:r,type:"button",onClick:()=>y(!v)},{children:["Show ",v?"less":"more",e.jsx(sl,{$expanded:v})]}))]})]}))},cl=t.lazy((()=>G(void 0,void 0,void 0,(function*(){return{default:(yield Promise.resolve().then((function(){return require("./lottie-animation.4b60e0f5.js")}))).LottieSpinner}})))),dl=()=>e.jsx("div",{style:{height:"200px",width:"200px"}}),ul=K.default.div`
    margin: 0 auto;
    padding: 2rem 1rem;
`,fl=t.lazy((()=>G(void 0,void 0,void 0,(function*(){return{default:(yield Promise.resolve().then((function(){return require("./lottie-animation.60517a7c.js")}))).LottieLoadingDots}})))),hl=n=>e.jsx(gl,Object.assign({},n,{children:e.jsx(t.Suspense,Object.assign({fallback:e.jsx(pl,{})},{children:e.jsx(fl,{})}))})),pl=()=>e.jsx("div",{style:{height:"16px",width:"64px"}}),gl=K.default.div`
    margin: 0 auto;
`,ml={[exports.ThemeContextKeys.colorScheme]:"base",[exports.ThemeContextKeys.textStyleScheme]:"base",[exports.ThemeContextKeys.designTokenScheme]:"base",[exports.ThemeContextKeys.resourceScheme]:"base"},bl={[exports.ThemeContextKeys.colorScheme]:"bookingsg",[exports.ThemeContextKeys.textStyleScheme]:"base",[exports.ThemeContextKeys.designTokenScheme]:"base",[exports.ThemeContextKeys.resourceScheme]:"bookingsg"},vl={[exports.ThemeContextKeys.colorScheme]:"rbs",[exports.ThemeContextKeys.textStyleScheme]:"base",[exports.ThemeContextKeys.designTokenScheme]:"rbs",[exports.ThemeContextKeys.resourceScheme]:"rbs"},yl={[exports.ThemeContextKeys.colorScheme]:"mylegacy",[exports.ThemeContextKeys.textStyleScheme]:"base",[exports.ThemeContextKeys.designTokenScheme]:"base",[exports.ThemeContextKeys.resourceScheme]:"mylegacy"},xl={[exports.ThemeContextKeys.colorScheme]:"ccube",[exports.ThemeContextKeys.textStyleScheme]:"base",[exports.ThemeContextKeys.designTokenScheme]:"base",[exports.ThemeContextKeys.resourceScheme]:"ccube"},wl={[exports.ThemeContextKeys.colorScheme]:"oneservice",[exports.ThemeContextKeys.textStyleScheme]:"oneservice",[exports.ThemeContextKeys.designTokenScheme]:"base",[exports.ThemeContextKeys.resourceScheme]:"base"},$l=t.lazy((()=>G(void 0,void 0,void 0,(function*(){return{default:(yield Promise.resolve().then((function(){return require("./lottie-animation.ef91dc6f.js")}))).LottieLoadingDotsSpinner}})))),jl=n=>{var{color:r}=n,a=X(n,["color"]);const o=i.useTheme(),s=r||ts.Primary({theme:o||ml});return e.jsx(kl,Object.assign({},a,{children:e.jsx(t.Suspense,Object.assign({fallback:e.jsx(Sl,{})},{children:e.jsx($l,{color:s})}))}))},Sl=()=>e.jsx("div",{style:{height:"200px",width:"200px"}}),kl=K.default.div`
    margin: 0 auto;
`;var Ol,Cl={exports:{}};Ol=e=>(()=>{var t={"./node_modules/css-mediaquery/index.js":
/*!**********************************************!*\
	  !*** ./node_modules/css-mediaquery/index.js ***!
	  \**********************************************/(e,t)=>{t.match=function(e,t){return s(e).some((function(e){var n=e.inverse,r="all"===e.type||t.type===e.type;if(r&&n||!r&&!n)return!1;var i=e.expressions.every((function(e){var n=e.feature,r=e.modifier,i=e.value,a=t[n];if(!a)return!1;switch(n){case"orientation":case"scan":return a.toLowerCase()===i.toLowerCase();case"width":case"height":case"device-width":case"device-height":i=d(i),a=d(a);break;case"resolution":i=c(i),a=c(a);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":i=l(i),a=l(a);break;case"grid":case"color":case"color-index":case"monochrome":i=parseInt(i,10)||1,a=parseInt(a,10)||0}switch(r){case"min":return a>=i;case"max":return a<=i;default:return a===i}}));return i&&!n||!i&&n}))},t.parse=s;var n=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,r=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,i=/^(?:(min|max)-)?(.+)/,a=/(em|rem|px|cm|mm|in|pt|pc)?$/,o=/(dpi|dpcm|dppx)?$/;function s(e){return e.split(",").map((function(e){var t=(e=e.trim()).match(n),a=t[1],o=t[2],s=t[3]||"",l={};return l.inverse=!!a&&"not"===a.toLowerCase(),l.type=o?o.toLowerCase():"all",s=s.match(/\([^\)]+\)/g)||[],l.expressions=s.map((function(e){var t=e.match(r),n=t[1].toLowerCase().match(i);return{modifier:n[1],feature:n[2],value:t[2]}})),l}))}function l(e){var t,n=Number(e);return n||(n=(t=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/t[2]),n}function c(e){var t=parseFloat(e);switch(String(e).match(o)[1]){case"dpcm":return t/2.54;case"dppx":return 96*t;default:return t}}function d(e){var t=parseFloat(e);switch(String(e).match(a)[1]){case"em":case"rem":return 16*t;case"cm":return 96*t/2.54;case"mm":return 96*t/2.54/10;case"in":return 96*t;case"pt":return 72*t;case"pc":return 72*t/12;default:return t}}},"./node_modules/hyphenate-style-name/index.js":
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
var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map((function(e){return t[e]}));if("0123456789"!==r.join(""))return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach((function(e){i[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},i)).join("")}catch(e){return!1}}()?Object.assign:function(e,i){for(var a,o,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var c in a=Object(arguments[l]))n.call(a,c)&&(s[c]=a[c]);if(t){o=t(a);for(var d=0;d<o.length;d++)r.call(a,o[d])&&(s[o[d]]=a[o[d]])}}return s}},"./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
	  !*** ./node_modules/prop-types/checkPropTypes.js ***!
	  \***************************************************/(e,t,n)=>{var r,i=n(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),a={},o=n(/*! ./lib/has */"./node_modules/prop-types/lib/has.js");function s(e,t,n,s,l){for(var c in e)if(o(e,c)){var d;try{if("function"!=typeof e[c]){var u=Error((s||"React class")+": "+n+" type `"+c+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[c]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw u.name="Invariant Violation",u}d=e[c](t,c,s,n,null,i)}catch(e){d=e}if(!d||d instanceof Error||r((s||"React class")+": type specification of "+n+" `"+c+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof d+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),d instanceof Error&&!(d.message in a)){a[d.message]=!0;var f=l?l():"";r("Failed "+n+" type: "+d.message+(null!=f?f:""))}}}r=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},s.resetWarningCache=function(){a={}},e.exports=s},"./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
	  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
	  \************************************************************/(e,t,n)=>{var r,i=n(/*! react-is */"./node_modules/react-is/index.js"),a=n(/*! object-assign */"./node_modules/object-assign/index.js"),o=n(/*! ./lib/ReactPropTypesSecret */"./node_modules/prop-types/lib/ReactPropTypesSecret.js"),s=n(/*! ./lib/has */"./node_modules/prop-types/lib/has.js"),l=n(/*! ./checkPropTypes */"./node_modules/prop-types/checkPropTypes.js");function c(){return null}r=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},e.exports=function(e,t){var n="function"==typeof Symbol&&Symbol.iterator,d="@@iterator",u="<<anonymous>>",f={array:m("array"),bigint:m("bigint"),bool:m("boolean"),func:m("function"),number:m("number"),object:m("object"),string:m("string"),symbol:m("symbol"),any:g(c),arrayOf:function(e){return g((function(t,n,r,i,a){if("function"!=typeof e)return new p("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var s=t[n];if(!Array.isArray(s))return new p("Invalid "+i+" `"+a+"` of type `"+y(s)+"` supplied to `"+r+"`, expected an array.");for(var l=0;l<s.length;l++){var c=e(s,l,r,i,a+"["+l+"]",o);if(c instanceof Error)return c}return null}))},element:g((function(t,n,r,i,a){var o=t[n];return e(o)?null:new p("Invalid "+i+" `"+a+"` of type `"+y(o)+"` supplied to `"+r+"`, expected a single ReactElement.")})),elementType:g((function(e,t,n,r,a){var o=e[t];return i.isValidElementType(o)?null:new p("Invalid "+r+" `"+a+"` of type `"+y(o)+"` supplied to `"+n+"`, expected a single ReactElement type.")})),instanceOf:function(e){return g((function(t,n,r,i,a){if(!(t[n]instanceof e)){var o=e.name||u;return new p("Invalid "+i+" `"+a+"` of type `"+((s=t[n]).constructor&&s.constructor.name?s.constructor.name:u)+"` supplied to `"+r+"`, expected instance of `"+o+"`.")}var s;return null}))},node:g((function(e,t,n,r,i){return v(e[t])?null:new p("Invalid "+r+" `"+i+"` supplied to `"+n+"`, expected a ReactNode.")})),objectOf:function(e){return g((function(t,n,r,i,a){if("function"!=typeof e)return new p("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var l=t[n],c=y(l);if("object"!==c)return new p("Invalid "+i+" `"+a+"` of type `"+c+"` supplied to `"+r+"`, expected an object.");for(var d in l)if(s(l,d)){var u=e(l,d,r,i,a+"."+d,o);if(u instanceof Error)return u}return null}))},oneOf:function(e){return Array.isArray(e)?g((function(t,n,r,i,a){for(var o=t[n],s=0;s<e.length;s++)if(h(o,e[s]))return null;var l=JSON.stringify(e,(function(e,t){return"symbol"===x(t)?String(t):t}));return new p("Invalid "+i+" `"+a+"` of value `"+String(o)+"` supplied to `"+r+"`, expected one of "+l+".")})):(r(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),c)},oneOfType:function(e){if(!Array.isArray(e))return r("Invalid argument supplied to oneOfType, expected an instance of array."),c;for(var t=0;t<e.length;t++){var n=e[t];if("function"!=typeof n)return r("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+w(n)+" at index "+t+"."),c}return g((function(t,n,r,i,a){for(var l=[],c=0;c<e.length;c++){var d=(0,e[c])(t,n,r,i,a,o);if(null==d)return null;d.data&&s(d.data,"expectedType")&&l.push(d.data.expectedType)}return new p("Invalid "+i+" `"+a+"` supplied to `"+r+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return g((function(t,n,r,i,a){var s=t[n],l=y(s);if("object"!==l)return new p("Invalid "+i+" `"+a+"` of type `"+l+"` supplied to `"+r+"`, expected `object`.");for(var c in e){var d=e[c];if("function"!=typeof d)return b(r,i,a,c,x(d));var u=d(s,c,r,i,a+"."+c,o);if(u)return u}return null}))},exact:function(e){return g((function(t,n,r,i,l){var c=t[n],d=y(c);if("object"!==d)return new p("Invalid "+i+" `"+l+"` of type `"+d+"` supplied to `"+r+"`, expected `object`.");var u=a({},t[n],e);for(var f in u){var h=e[f];if(s(e,f)&&"function"!=typeof h)return b(r,i,l,f,x(h));if(!h)return new p("Invalid "+i+" `"+l+"` key `"+f+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var g=h(c,f,r,i,l+"."+f,o);if(g)return g}return null}))}};function h(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function p(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function g(e){var n={},i=0;function a(a,s,l,c,d,f,h){if(c=c||u,f=f||l,h!==o){if(t){var g=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw g.name="Invariant Violation",g}if("undefined"!=typeof console){var m=c+":"+l;!n[m]&&i<3&&(r("You are manually calling a React.PropTypes validation function for the `"+f+"` prop on `"+c+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),n[m]=!0,i++)}}return null==s[l]?a?null===s[l]?new p("The "+d+" `"+f+"` is marked as required in `"+c+"`, but its value is `null`."):new p("The "+d+" `"+f+"` is marked as required in `"+c+"`, but its value is `undefined`."):null:e(s,l,c,d,f)}var s=a.bind(null,!1);return s.isRequired=a.bind(null,!0),s}function m(e){return g((function(t,n,r,i,a,o){var s=t[n];return y(s)!==e?new p("Invalid "+i+" `"+a+"` of type `"+x(s)+"` supplied to `"+r+"`, expected `"+e+"`.",{expectedType:e}):null}))}function b(e,t,n,r,i){return new p((e||"React class")+": "+t+" type `"+n+"."+r+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+i+"`.")}function v(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(v);if(null===t||e(t))return!0;var r=function(e){var t=e&&(n&&e[n]||e[d]);if("function"==typeof t)return t}(t);if(!r)return!1;var i,a=r.call(t);if(r!==t.entries){for(;!(i=a.next()).done;)if(!v(i.value))return!1}else for(;!(i=a.next()).done;){var o=i.value;if(o&&!v(o[1]))return!1}return!0;default:return!1}}function y(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function x(e){if(null==e)return""+e;var t=y(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function w(e){var t=x(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return p.prototype=Error.prototype,f.checkPropTypes=l,f.resetWarningCache=l.resetWarningCache,f.PropTypes=f,f}},"./node_modules/prop-types/index.js":
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
	  \***********************************************************/(e,t)=>{!function(){var e="function"==typeof Symbol&&Symbol.for,n=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,i=e?Symbol.for("react.fragment"):60107,a=e?Symbol.for("react.strict_mode"):60108,o=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,d=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,f=e?Symbol.for("react.suspense"):60113,h=e?Symbol.for("react.suspense_list"):60120,p=e?Symbol.for("react.memo"):60115,g=e?Symbol.for("react.lazy"):60116,m=e?Symbol.for("react.block"):60121,b=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,y=e?Symbol.for("react.scope"):60119;function x(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:var h=e.type;switch(h){case c:case d:case i:case o:case a:case f:return h;default:var m=h&&h.$$typeof;switch(m){case l:case u:case g:case p:case s:return m;default:return t}}case r:return t}}}var w=c,$=d,j=l,S=s,k=n,O=u,C=i,D=g,T=p,_=r,E=o,M=a,I=f,N=!1;function A(e){return x(e)===d}t.AsyncMode=w,t.ConcurrentMode=$,t.ContextConsumer=j,t.ContextProvider=S,t.Element=k,t.ForwardRef=O,t.Fragment=C,t.Lazy=D,t.Memo=T,t.Portal=_,t.Profiler=E,t.StrictMode=M,t.Suspense=I,t.isAsyncMode=function(e){return N||(N=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),A(e)||x(e)===c},t.isConcurrentMode=A,t.isContextConsumer=function(e){return x(e)===l},t.isContextProvider=function(e){return x(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return x(e)===u},t.isFragment=function(e){return x(e)===i},t.isLazy=function(e){return x(e)===g},t.isMemo=function(e){return x(e)===p},t.isPortal=function(e){return x(e)===r},t.isProfiler=function(e){return x(e)===o},t.isStrictMode=function(e){return x(e)===a},t.isSuspense=function(e){return x(e)===f},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===d||e===o||e===a||e===f||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===p||e.$$typeof===s||e.$$typeof===l||e.$$typeof===u||e.$$typeof===b||e.$$typeof===v||e.$$typeof===y||e.$$typeof===m)},t.typeOf=x}()},"./node_modules/react-is/index.js":
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
	  \***************************/function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},r.apply(this,arguments)},i=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=a(n(/*! prop-types */"./node_modules/prop-types/index.js")),s=o.default.oneOfType([o.default.string,o.default.number]),l={all:o.default.bool,grid:o.default.bool,aural:o.default.bool,braille:o.default.bool,handheld:o.default.bool,print:o.default.bool,projection:o.default.bool,screen:o.default.bool,tty:o.default.bool,tv:o.default.bool,embossed:o.default.bool},c={orientation:o.default.oneOf(["portrait","landscape"]),scan:o.default.oneOf(["progressive","interlace"]),aspectRatio:o.default.string,deviceAspectRatio:o.default.string,height:s,deviceHeight:s,width:s,deviceWidth:s,color:o.default.bool,colorIndex:o.default.bool,monochrome:o.default.bool,resolution:s,type:Object.keys(l)},d=i(c,["type"]),u=r({minAspectRatio:o.default.string,maxAspectRatio:o.default.string,minDeviceAspectRatio:o.default.string,maxDeviceAspectRatio:o.default.string,minHeight:s,maxHeight:s,minDeviceHeight:s,maxDeviceHeight:s,minWidth:s,maxWidth:s,minDeviceWidth:s,maxDeviceWidth:s,minColor:o.default.number,maxColor:o.default.number,minColorIndex:o.default.number,maxColorIndex:o.default.number,minMonochrome:o.default.number,maxMonochrome:o.default.number,minResolution:s,maxResolution:s},d),f=r(r({},l),u);t.default={all:f,types:l,matchers:c,features:u}},"./src/toQuery.ts":
/*!************************!*\
	  !*** ./src/toQuery.ts ***!
	  \************************/function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(n(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),a=r(n(/*! ./mediaQuery */"./src/mediaQuery.ts"));t.default=function(e){var t=[];return Object.keys(a.default.all).forEach((function(n){var r=e[n];null!=r&&t.push(function(e,t){var n=(0,i.default)(e);return"number"==typeof t&&(t="".concat(t,"px")),!0===t?n:!1===t?"not ".concat(n):"(".concat(n,": ").concat(t,")")}(n,r))})),t.join(" and ")}},"./src/useMediaQuery.ts":
/*!******************************!*\
	  !*** ./src/useMediaQuery.ts ***!
	  \******************************/function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=n(/*! react */"react"),a=r(n(/*! matchmediaquery */"./node_modules/matchmediaquery/index.js")),o=r(n(/*! hyphenate-style-name */"./node_modules/hyphenate-style-name/index.js")),s=n(/*! shallow-equal */"./node_modules/shallow-equal/dist/index.esm.js"),l=r(n(/*! ./toQuery */"./src/toQuery.ts")),c=r(n(/*! ./Context */"./src/Context.ts")),d=function(e){if(e)return Object.keys(e).reduce((function(t,n){return t[(0,o.default)(n)]=e[n],t}),{})},u=function(){var e=(0,i.useRef)(!1);return(0,i.useEffect)((function(){e.current=!0}),[]),e.current},f=function(e){var t=function(){return function(e){return e.query||(0,l.default)(e)}(e)},n=(0,i.useState)(t),r=n[0],a=n[1];return(0,i.useEffect)((function(){var e=t();r!==e&&a(e)}),[e]),r};t.default=function(e,t,n){var r=function(e){var t=(0,i.useContext)(c.default),n=function(){return d(e)||d(t)},r=(0,i.useState)(n),a=r[0],o=r[1];return(0,i.useEffect)((function(){var e=n();(0,s.shallowEqualObjects)(a,e)||o(e)}),[e,t]),a}(t),o=f(e);if(!o)throw new Error("Invalid or missing MediaQuery!");var l=function(e,t){var n=function(){return(0,a.default)(e,t||{},!!t)},r=(0,i.useState)(n),o=r[0],s=r[1],l=u();return(0,i.useEffect)((function(){if(l){var e=n();return s(e),function(){e&&e.dispose()}}}),[e,t]),o}(o,r),h=function(e){var t=(0,i.useState)(e.matches),n=t[0],r=t[1];return(0,i.useEffect)((function(){var t=function(e){r(e.matches)};return e.addListener(t),r(e.matches),function(){e.removeListener(t)}}),[e]),n}(l),p=u();return(0,i.useEffect)((function(){p&&n&&n(h)}),[h]),(0,i.useEffect)((function(){return function(){l&&l.dispose()}}),[]),h}},react:
/*!**************************************************************************************!*\
	  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
	  \**************************************************************************************/t=>{t.exports=e}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var a=n[e]={exports:{}};return t[e].call(a.exports,a,a.exports,r),a.exports}return r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r("./src/index.ts")})();var Dl=Cl.exports=Ol(Y.default);const Tl=K.default.div`
    border: 1px solid ${ts.Neutral[5]};
    border-radius: 4px;
    margin-bottom: 2rem;
`,_l=K.default(Di.div)`
    overflow: hidden;
`,El=K.default.div`
    height: max-content;
`,Ml=K.default.div`
    border-top: 1px solid ${ts.Neutral[5]};
`,Il=K.default.div`
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
`,Nl=K.default(exports.Text.H3)`
    word-wrap: break-word;
    overflow-wrap: anywhere;
    display: flex;
    align-items: center;
    margin-right: 1rem;
`,Al=K.default.div`
    display: flex;
`,Rl=K.default.span`
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
`,Fl=K.default(s.ExclamationCircleFillIcon)`
    height: 1.375rem;
    width: 1.375rem;
`,Bl=K.default.div`
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
`,Pl=K.default.button`
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
`;const Ll=K.default.div`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: ${Ss.Base};
`,zl=K.default(f.ChevronDownIcon)`
    color: ${ts.Neutral[3]};
    height: 1.375rem;
    width: 1.375rem;
`;var Hl={exports:{}};Hl.exports=function(){var e=1e3,t=6e4,n=36e5,r="millisecond",i="second",a="minute",o="hour",s="day",l="week",c="month",d="quarter",u="year",f="date",h="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},b=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},v={s:b,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+b(r,2,"0")+":"+b(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,c),a=n-i<0,o=t.clone().add(r+(a?-1:1),c);return+(-(r+(n-i)/(a?i-o:o-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:u,w:l,d:s,D:f,h:o,m:a,s:i,ms:r,Q:d}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},y="en",x={};x[y]=m;var w="$isDayjsObject",$=function(e){return e instanceof O||!(!e||!e[w])},j=function e(t,n,r){var i;if(!t)return y;if("string"==typeof t){var a=t.toLowerCase();x[a]&&(i=a),n&&(x[a]=n,i=a);var o=t.split("-");if(!i&&o.length>1)return e(o[0])}else{var s=t.name;x[s]=t,i=s}return!r&&i&&(y=i),i||!r&&y},S=function(e,t){if($(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new O(n)},k=v;k.l=j,k.i=$,k.w=function(e,t){return S(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var O=function(){function m(e){this.$L=j(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var b=m.prototype;return b.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(k.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(p);if(r){var i=r[2]-1||0,a=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)}}return new Date(t)}(e),this.init()},b.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},b.$utils=function(){return k},b.isValid=function(){return!(this.$d.toString()===h)},b.isSame=function(e,t){var n=S(e);return this.startOf(t)<=n&&n<=this.endOf(t)},b.isAfter=function(e,t){return S(e)<this.startOf(t)},b.isBefore=function(e,t){return this.endOf(t)<S(e)},b.$g=function(e,t,n){return k.u(e)?this[t]:this.set(n,e)},b.unix=function(){return Math.floor(this.valueOf()/1e3)},b.valueOf=function(){return this.$d.getTime()},b.startOf=function(e,t){var n=this,r=!!k.u(t)||t,d=k.p(e),h=function(e,t){var i=k.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?i:i.endOf(s)},p=function(e,t){return k.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},g=this.$W,m=this.$M,b=this.$D,v="set"+(this.$u?"UTC":"");switch(d){case u:return r?h(1,0):h(31,11);case c:return r?h(1,m):h(0,m+1);case l:var y=this.$locale().weekStart||0,x=(g<y?g+7:g)-y;return h(r?b-x:b+(6-x),m);case s:case f:return p(v+"Hours",0);case o:return p(v+"Minutes",1);case a:return p(v+"Seconds",2);case i:return p(v+"Milliseconds",3);default:return this.clone()}},b.endOf=function(e){return this.startOf(e,!1)},b.$set=function(e,t){var n,l=k.p(e),d="set"+(this.$u?"UTC":""),h=(n={},n[s]=d+"Date",n[f]=d+"Date",n[c]=d+"Month",n[u]=d+"FullYear",n[o]=d+"Hours",n[a]=d+"Minutes",n[i]=d+"Seconds",n[r]=d+"Milliseconds",n)[l],p=l===s?this.$D+(t-this.$W):t;if(l===c||l===u){var g=this.clone().set(f,1);g.$d[h](p),g.init(),this.$d=g.set(f,Math.min(this.$D,g.daysInMonth())).$d}else h&&this.$d[h](p);return this.init(),this},b.set=function(e,t){return this.clone().$set(e,t)},b.get=function(e){return this[k.p(e)]()},b.add=function(r,d){var f,h=this;r=Number(r);var p=k.p(d),g=function(e){var t=S(h);return k.w(t.date(t.date()+Math.round(e*r)),h)};if(p===c)return this.set(c,this.$M+r);if(p===u)return this.set(u,this.$y+r);if(p===s)return g(1);if(p===l)return g(7);var m=(f={},f[a]=t,f[o]=n,f[i]=e,f)[p]||1,b=this.$d.getTime()+r*m;return k.w(b,this)},b.subtract=function(e,t){return this.add(-1*e,t)},b.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var r=e||"YYYY-MM-DDTHH:mm:ssZ",i=k.z(this),a=this.$H,o=this.$m,s=this.$M,l=n.weekdays,c=n.months,d=n.meridiem,u=function(e,n,i,a){return e&&(e[n]||e(t,r))||i[n].slice(0,a)},f=function(e){return k.s(a%12||12,e,"0")},p=d||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(g,(function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return k.s(t.$y,4,"0");case"M":return s+1;case"MM":return k.s(s+1,2,"0");case"MMM":return u(n.monthsShort,s,c,3);case"MMMM":return u(c,s);case"D":return t.$D;case"DD":return k.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return u(n.weekdaysMin,t.$W,l,2);case"ddd":return u(n.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(a);case"HH":return k.s(a,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return p(a,o,!0);case"A":return p(a,o,!1);case"m":return String(o);case"mm":return k.s(o,2,"0");case"s":return String(t.$s);case"ss":return k.s(t.$s,2,"0");case"SSS":return k.s(t.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},b.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},b.diff=function(r,f,h){var p,g=this,m=k.p(f),b=S(r),v=(b.utcOffset()-this.utcOffset())*t,y=this-b,x=function(){return k.m(g,b)};switch(m){case u:p=x()/12;break;case c:p=x();break;case d:p=x()/3;break;case l:p=(y-v)/6048e5;break;case s:p=(y-v)/864e5;break;case o:p=y/n;break;case a:p=y/t;break;case i:p=y/e;break;default:p=y}return h?p:k.a(p)},b.daysInMonth=function(){return this.endOf(c).$D},b.$locale=function(){return x[this.$L]},b.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=j(e,t,!0);return r&&(n.$L=r),n},b.clone=function(){return k.w(this.$d,this)},b.toDate=function(){return new Date(this.valueOf())},b.toJSON=function(){return this.isValid()?this.toISOString():null},b.toISOString=function(){return this.$d.toISOString()},b.toString=function(){return this.$d.toUTCString()},m}(),C=O.prototype;return S.prototype=C,[["$ms",r],["$s",i],["$m",a],["$H",o],["$W",s],["$M",c],["$y",u],["$D",f]].forEach((function(e){C[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),S.extend=function(e,t){return e.$i||(e(t,O,S),e.$i=!0),S},S.locale=j,S.isDayjs=$,S.unix=function(e){return S(1e3*e)},S.en=x[y],S.Ls=x,S.p={},S}();var Wl=_i(Hl.exports),Vl={exports:{}};Vl.exports=function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,a={},o=function(e){return(e=+e)+(e>68?1900:2e3)},s=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],c=function(e){var t=a[e];return t&&(t.indexOf?t:t.s.concat(t.f))},d=function(e,t){var n,r=a.meridiem;if(r){for(var i=1;i<=24;i+=1)if(e.indexOf(r(i,0,t))>-1){n=i>12;break}}else n=e===(t?"pm":"PM");return n},u={A:[i,function(e){this.afternoon=d(e,!1)}],a:[i,function(e){this.afternoon=d(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[r,s("seconds")],ss:[r,s("seconds")],m:[r,s("minutes")],mm:[r,s("minutes")],H:[r,s("hours")],h:[r,s("hours")],HH:[r,s("hours")],hh:[r,s("hours")],D:[r,s("day")],DD:[n,s("day")],Do:[i,function(e){var t=a.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],M:[r,s("month")],MM:[n,s("month")],MMM:[i,function(e){var t=c("months"),n=(c("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(e){var t=c("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,s("year")],YY:[n,function(e){this.year=o(e)}],YYYY:[/\d{4}/,s("year")],Z:l,ZZ:l};function f(n){var r,i;r=n,i=a&&a.formats;for(var o=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var a=r&&r.toUpperCase();return n||i[r]||e[r]||i[a].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),s=o.length,l=0;l<s;l+=1){var c=o[l],d=u[c],f=d&&d[0],h=d&&d[1];o[l]=h?{regex:f,parser:h}:c.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<s;n+=1){var i=o[n];if("string"==typeof i)r+=i.length;else{var a=i.regex,l=i.parser,c=e.slice(r),d=a.exec(c)[0];l.call(t,d),e=e.replace(d,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(o=e.parseTwoDigitYear);var r=t.prototype,i=r.parse;r.parse=function(e){var t=e.date,r=e.utc,o=e.args;this.$u=r;var s=o[1];if("string"==typeof s){var l=!0===o[2],c=!0===o[3],d=l||c,u=o[2];c&&(u=o[2]),a=this.$locale(),!l&&u&&(a=n.Ls[u]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=f(t)(e),i=r.year,a=r.month,o=r.day,s=r.hours,l=r.minutes,c=r.seconds,d=r.milliseconds,u=r.zone,h=new Date,p=o||(i||a?1:h.getDate()),g=i||h.getFullYear(),m=0;i&&!a||(m=a>0?a-1:h.getMonth());var b=s||0,v=l||0,y=c||0,x=d||0;return u?new Date(Date.UTC(g,m,p,b,v,y,x+60*u.offset*1e3)):n?new Date(Date.UTC(g,m,p,b,v,y,x)):new Date(g,m,p,b,v,y,x)}catch(e){return new Date("")}}(t,s,r),this.init(),u&&!0!==u&&(this.$L=this.locale(u).$L),d&&t!=this.format(s)&&(this.$d=new Date("")),a={}}else if(s instanceof Array)for(var h=s.length,p=1;p<=h;p+=1){o[1]=s[p-1];var g=n.apply(this,o);if(g.isValid()){this.$d=g.$d,this.$L=g.$L,this.init();break}p===h&&(this.$d=new Date(""))}else i.call(this,e)}}}();var Yl=_i(Vl.exports),Ul={exports:{}};Ul.exports=function(e,t,n){t.prototype.isBetween=function(e,t,r,i){var a=n(e),o=n(t),s="("===(i=i||"()")[0],l=")"===i[1];return(s?this.isAfter(a,r):!this.isBefore(a,r))&&(l?this.isBefore(o,r):!this.isAfter(o,r))||(s?this.isBefore(a,r):!this.isAfter(a,r))&&(l?this.isAfter(o,r):!this.isBefore(o,r))}};var Kl=_i(Ul.exports),ql={exports:{}};ql.exports=function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}};var Xl=_i(ql.exports),Gl={exports:{}};Gl.exports=function(e,t){t.prototype.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)}};var Zl,Ql,Jl=_i(Gl.exports),ec={exports:{}};ec.exports=(Zl={year:0,month:1,day:2,hour:3,minute:4,second:5},Ql={},function(e,t,n){var r,i=function(e,t,n){void 0===n&&(n={});var r=new Date(e),i=function(e,t){void 0===t&&(t={});var n=t.timeZoneName||"short",r=e+"|"+n,i=Ql[r];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:n}),Ql[r]=i),i}(t,n);return i.formatToParts(r)},a=function(e,t){for(var r=i(e,t),a=[],o=0;o<r.length;o+=1){var s=r[o],l=s.type,c=s.value,d=Zl[l];d>=0&&(a[d]=parseInt(c,10))}var u=a[3],f=24===u?0:u,h=a[0]+"-"+a[1]+"-"+a[2]+" "+f+":"+a[4]+":"+a[5]+":000",p=+e;return(n.utc(h).valueOf()-(p-=p%1e3))/6e4},o=t.prototype;o.tz=function(e,t){void 0===e&&(e=r);var i=this.utcOffset(),a=this.toDate(),o=a.toLocaleString("en-US",{timeZone:e}),s=Math.round((a-new Date(o))/1e3/60),l=n(o,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(15*-Math.round(a.getTimezoneOffset()/15)-s,!0);if(t){var c=l.utcOffset();l=l.add(i-c,"minute")}return l.$x.$timezone=e,l},o.offsetName=function(e){var t=this.$x.$timezone||n.tz.guess(),r=i(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return r&&r.value};var s=o.startOf;o.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return s.call(this,e,t);var r=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(r,e,t).tz(this.$x.$timezone,!0)},n.tz=function(e,t,i){var o=i&&t,s=i||t||r,l=a(+n(),s);if("string"!=typeof e)return n(e).tz(s);var c=function(e,t,n){var r=e-60*t*1e3,i=a(r,n);if(t===i)return[r,t];var o=a(r-=60*(i-t)*1e3,n);return i===o?[r,i]:[e-60*Math.min(i,o)*1e3,Math.max(i,o)]}(n.utc(e,o).valueOf(),l,s),d=c[0],u=c[1],f=n(d).utcOffset(u);return f.$x.$timezone=s,f},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(e){r=e}});var tc,nc=_i(ec.exports);Wl.extend(Kl),Wl.extend(Jl),Wl.extend(Xl),Wl.extend(Yl),Wl.extend(nc),function(e){e.generateDays=e=>{const t=e.startOf("month"),n=Wl(t).startOf("week");return rc(n).map((e=>ic(e)))},e.generateDaysForCurrentWeek=e=>{const t=e.startOf("week");return ic(t)},e.generateMonths=e=>{const t=[];for(let n=0;n<12;n++){const r=e.month(n);t.push(Wl(r))}return t},e.generateDecadeOfYears=e=>{const t=e.year(),n=10*Math.floor(t/10),r=e.year(n),i=[r.subtract(1,"year"),r];for(let e=1;e<11;e++)i.push(r.add(e,"year"));return i},e.getStartEndDecade=e=>{const t=10*Math.floor(+e.format("YYYY")/10);return{beginDecade:t,endDecade:+Wl(`${t+9}-01-01`).format("YYYY")}},e.convertTo12HourFormat=e=>{const t=Wl(e,"HH:mm");return t.isValid()?t.format("h:mm a"):""},e.isWithinRange=(e,t,n,r="day")=>!t&&!n||(t&&n?e.isBetween(t,n,r,"[]"):t?e.isSameOrAfter(t,r):e.isSameOrBefore(n,r)),e.isPreviousMonthWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"month"),n,void 0,"month"),e.isPreviousYearWithinRange=(t,n)=>e.isWithinRange(t.subtract(1,"year"),n,void 0,"year"),e.isPreviousDecadeWithinRange=(t,n)=>{const{beginDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).subtract(1,"year"),n,void 0,"year")},e.isNextMonthWithinRange=(t,n)=>e.isWithinRange(t.add(1,"month"),void 0,n,"month"),e.isNextYearWithinRange=(t,n)=>e.isWithinRange(t.add(1,"year"),void 0,n,"year"),e.isNextDecadeWithinRange=(t,n)=>{const{endDecade:r}=e.getStartEndDecade(t);return e.isWithinRange(t.year(r).add(1,"year"),void 0,n,"year")},e.getWeekStartEnd=e=>({start:e.startOf("week").format("YYYY-MM-DD"),end:e.endOf("week").format("YYYY-MM-DD")}),e.getFixedRangeStartEnd=(e,t)=>({start:e.format("YYYY-MM-DD"),end:e.add(t-1,"day").format("YYYY-MM-DD")}),e.isDisabledDay=(t,n,r,i)=>{const a=e.isWithinRange(t,r?Wl(r):void 0,i?Wl(i):void 0),o=n&&n.includes(t.format("YYYY-MM-DD"));return!a||!!o}}(tc||(tc={}));const rc=e=>{const t=[e];for(let n=1;n<6;n++){const r=e.add(n,"week");t.push(r)}return t},ic=e=>{const t=[];for(let n=0;n<7;n++){const r=e.add(n,"day");t.push(r)}return t},ac=[1,3,5,7,8,10,12],oc=[4,6,9,11];var sc,lc,cc,dc;!function(e){e.clampDay=(t,n,r)=>{const i=parseInt(t),a=parseInt(n),o=parseInt(r);return 0==i?"1":ac.includes(a)?Math.min(i,31).toString():oc.includes(a)?Math.min(i,30).toString():2===a?e.isLeapYear(o)?Math.min(i,29).toString():Math.min(i,28).toString():t},e.clampMonth=e=>{const t=parseInt(e);return 0==t?"1":t>12?"12":e},e.isLeapYear=e=>e%4==0&&e%100!=0||e%400==0,e.getTimeDiffInMinutes=(e,t,n="HH:mm")=>{const r=Wl(e,n);return Wl(t,n).diff(r,"minute")},e.toDayjs=e=>e?Wl(e):Wl(),e.addMinutesToTime=(e,t,n="HH:mm")=>Wl(e,n).add(t,"minutes").format(n),e.isSame=(e,t,n="day")=>Wl(e).isSame(Wl(t),n)}(sc||(sc={})),function(e){e.isDateDisabled=(e,t)=>{const{disabledDates:n,minDate:r,maxDate:i}=t;return!!(n&&n.length&&n.includes(e))||(!(!r||!Wl(e).isBefore(r,"day"))||!(!i||!Wl(e).isAfter(i,"day")))},e.sanitizeInput=e=>{if(e){if(Wl(e).isValid())return e}return""}}(lc||(lc={})),function(e){e.generate=()=>Math.random().toString(36).substring(2,9)}(cc||(cc={})),function(e){e.transformWithSpaces=(e,t)=>{const n="(.{"+t+"})";return e.replace(/[^\dA-Z]/gi,"").replace(new RegExp(n,"g"),"$1 ").trim()},e.padValue=(e,t)=>{if("0"===e)return t?e:e.padStart(2,"0");if(""===e)return e;return parseInt(e).toString().padStart(2,"0")},e.shouldTruncateToTwoLines=(e,t)=>{const n=Math.floor(t/9);return e.length>=2*n||1===e.split(" ").length&&e.length>n},e.truncateOneLine=(e,t,n,r,i=8)=>{let a=0;t>n&&(a=Math.floor((t-n)/i));const o=r+a;if(o<e.length){const t=Math.floor(o/2);return e.substring(0,t)+" ... "+e.substring(e.length-t,e.length)}return e},e.truncateTwoLines=(e,t,n,r=1.2)=>{const i=Math.floor(2*t/(.6*n))*(2/r);if(e.length<=i)return e;const a=Math.floor(.6*i),o=Math.floor(.2*i);return`${e.substring(0,a)}...${e.substring(e.length-o)}`},e.getTextWidth=(t,n)=>{if("undefined"==typeof document)return 0;const r=(e.getTextWidth.canvas||(e.getTextWidth.canvas=document.createElement("canvas"))).getContext("2d");r.font=n;return r.measureText(t).width},e.maskValue=(e,n)=>{if(!e)return e;const{maskRange:r,unmaskRange:i,maskChar:a="•",maskRegex:o,maskTransformer:s}=n;if(s)return s(e);if(o)return e.replace(o,a);if(r){const{startIndex:n,endIndex:i}=t(r[0],r[1]);return e.substring(0,n)+a.repeat(e.substring(n,i+1).length)+e.substring(i+1)}if(i){const{startIndex:n,endIndex:r}=t(i[0],i[1]);return a.repeat(e.substring(0,n).length)+e.substring(n,r+1)+a.repeat(e.substring(r+1).length)}return e};const t=(e,t)=>e<t?{startIndex:e,endIndex:t}:{startIndex:t,endIndex:e}}(dc||(dc={}));function uc(e){const n=t.useRef(null);return t.useLayoutEffect((()=>{n.current=e}),[e]),t.useCallback(((...e)=>n.current(...e)),[])}const fc=(e,n,r="window",i)=>{const a=t.useRef();t.useEffect((()=>{a.current=n}),[n]),t.useEffect((()=>{let t;switch(r){case"window":t=window;break;case"document":t=document;break;default:t=r}if(!(t&&t.addEventListener))return;const n=e=>a.current(e);return t.addEventListener(e,n,i),()=>{t.removeEventListener(e,n,i)}}),[e,r])},hc="undefined"!=typeof window?t.useLayoutEffect:t.useEffect,pc=()=>{const[e,n]=t.useState(!1);return t.useEffect((()=>{n(!0)}),[]),e};function gc({ref:e,formatter:t}){return()=>{const n=e.current,r=n.value,i=t(r),a=r.substring(0,n.selectionEnd),o=t(a),s=a.length-o.length,l=Math.max(0,n.selectionEnd-s);return{nextValue:i,updateCaretPosition:()=>{n.value=i,n.setSelectionRange(l,l)}}}}const mc=e=>{const n=(e=>{const n=t.useRef(e),r=t.useRef();return t.useEffect((()=>{r.current=n.current,n.current=e}),[e]),r.current})(e);return n!==e},bc=e=>{const[n,r]=t.useState(e),i=t.useRef(e);return[n,t.useCallback((e=>{i.current=e,r(e)}),[]),i]},vc=K.default.div`
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
`,Oc={Default:Y.default.forwardRef(((t,n)=>{const{children:r,disabled:i=!1,styleType:a="default",danger:o=!1,icon:s,iconPosition:l="left"}=t,c=X(t,["children","disabled","styleType","danger","icon","iconPosition"]),d={$buttonIconPosition:l,$buttonStyle:i?"disabled":a,$buttonSizeStyle:"default",$buttonIsDanger:o};return e.jsxs(kc,Object.assign({ref:n,"data-testid":c["data-testid"]||"button-with-icon",disabled:i},d,c,{children:[s,e.jsx("span",{children:r})]}))})),Small:Y.default.forwardRef(((t,n)=>{const{children:r,disabled:i=!1,styleType:a="default",danger:o=!1,icon:s,iconPosition:l="left"}=t,c=X(t,["children","disabled","styleType","danger","icon","iconPosition"]),d={$buttonIconPosition:l,$buttonStyle:i?"disabled":a,$buttonSizeStyle:"small",$buttonIsDanger:o};return e.jsxs(kc,Object.assign({ref:n,"data-testid":c["data-testid"]||"button-with-icon",disabled:i},d,c,{children:[s,e.jsx("span",{children:r})]}))}))},Cc=K.default.div`
    width: ${e=>e.$width}px;
    max-width: 41rem;
    min-width: 21rem;

    ${is.MaxWidth.mobileL} {
        min-width: 17.5rem;
    }
`,Dc=i.css`
    color: ${ts.Neutral[3]};
    height: 1rem;
    width: 1rem;
`,Tc=K.default(p.ChevronLeftIcon)`
    ${Dc}
`,_c=K.default(h.ChevronRightIcon)`
    ${Dc}
`,Ec=K.default(f.ChevronDownIcon)`
    ${Dc}
    transition: transform 250ms ease-in-out;
    margin-left: 0.5rem;
`,Mc=K.default.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
`,Ic=K.default.div`
    display: flex;
    flex: 1;
    position: relative;
`,Nc=K.default.div`
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
`,Rc=K.default.div`
    display: flex;
    justify-content: space-between;
    margin: 0 0 0.5rem 0;
`,Fc=K.default.div`
    display: flex;
`,Bc=K.default.button`
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
`,Pc=K.default.p`
    ${ys.getTextStyle("H5","regular")}
`,Lc=K.default.div`
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
`,Kc=({calendarDate:n,currentFocus:r,selectedStartDate:i,selectedEndDate:a,viewCalendarDate:o,type:s,isNewSelection:l,minDate:c,maxDate:d,allowDisabledSelection:u,onMonthSelect:f})=>{const h=t.useMemo((()=>tc.generateMonths(Wl(n))),[n]),p=e=>{const t="start"===r&&a&&e.isAfter(a,"month")&&l,n="end"===r&&i&&e.isBefore(i,"month")&&l;return t||n},g=e=>{const t=e.format("MMMM"),n=(r=e,!tc.isWithinRange(r,c?Wl(c):void 0,d?Wl(d):void 0,"month"));var r;const i=o.isSame(e,"month")?"selected-month":Wl().isSame(e,"month")?"current-month":"default";return{disabledDisplay:n||p(e),interactive:!n||u,month:t,variant:i}};return h.length?e.jsx(Vc,Object.assign({$type:s},{children:h.map((t=>{const{disabledDisplay:n,interactive:r,variant:i,month:a}=g(t);return e.jsx(Yc,Object.assign({$variant:i,$disabledDisplay:n,$interactive:r,onClick:()=>((e,t)=>{t||f(e)})(t,!r)},{children:e.jsx(Uc,Object.assign({weight:"regular",$variant:i,$disabledDisplay:n},{children:a}))}),a)}))})):null},qc=K.default.div`
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
`,Zc=({calendarDate:n,currentFocus:r,selectedStartDate:i,selectedEndDate:a,viewCalendarDate:o,type:s,isNewSelection:l,minDate:c,maxDate:d,allowDisabledSelection:u,onYearSelect:f})=>{const h=t.useMemo((()=>tc.generateDecadeOfYears(Wl(n))),[n]),p=e=>{const t="start"===r&&a&&e.isAfter(a,"year")&&l,n="end"===r&&i&&e.isBefore(i,"year")&&l;return t||n},g=e=>{const t=[0,11].includes(h.indexOf(e)),n=e.year(),r=(i=e,!tc.isWithinRange(i,c?Wl(c):void 0,d?Wl(d):void 0,"year"));var i;const a=t?"other-decade":o.isSame(e,"year")?"selected-year":Wl().isSame(e,"year")?"current-year":"default";return{disabledDisplay:r||p(e),interactive:!r||u,year:n,variant:a}};return h.length?e.jsx(qc,Object.assign({$type:s},{children:h.map((t=>{const{disabledDisplay:n,interactive:r,variant:i,year:a}=g(t);return e.jsx(Xc,Object.assign({$variant:i,$disabledDisplay:n,$interactive:r,onClick:()=>((e,t)=>{t||f(e)})(t,!r)},{children:e.jsx(Gc,Object.assign({weight:"regular",$variant:i,$disabledDisplay:n,$interactive:r},{children:a}))}),a)}))})):null},Qc=Y.default.forwardRef(((n,r)=>{var{children:i,initialCalendarDate:a,type:o,minDate:s,maxDate:l,currentFocus:c,selectedStartDate:d,selectedEndDate:u,selectWithinRange:f,dynamicHeight:h=!1,allowDisabledSelection:p,onCalendarDateChange:g,withButton:m,doneButtonDisabled:b,onDismiss:v,showNavigationHeader:y=!0,getLeftArrowDate:x,getRightArrowDate:w,isLeftArrowDisabled:$,isRightArrowDisabled:j,getMonthHeaderLabel:S,getYearHeaderLabel:k}=n,O=X(n,["children","initialCalendarDate","type","minDate","maxDate","currentFocus","selectedStartDate","selectedEndDate","selectWithinRange","dynamicHeight","allowDisabledSelection","onCalendarDateChange","withButton","doneButtonDisabled","onDismiss","showNavigationHeader","getLeftArrowDate","getRightArrowDate","isLeftArrowDisabled","isRightArrowDisabled","getMonthHeaderLabel","getYearHeaderLabel"]);const[C,D]=t.useState(sc.toDayjs(a)),[T,_]=t.useState(sc.toDayjs(a)),[E,M]=t.useState("default"),I=t.useRef(null),N=t.useRef(null),A=t.useRef();t.useImperativeHandle(r,(()=>({defaultView(){M("default")},resetView(){const e=sc.toDayjs(a);D(e),_(e),M("default")},setCalendarDate(e){const t=sc.toDayjs(e);D(t),_(t)}}))),t.useEffect((()=>{const e=sc.toDayjs(a);D(e),_(e)}),[a]),t.useEffect((()=>{H(T)}),[T]);const R=()=>{"month-options"!==E?(M("month-options"),A.current.focus()):(M("default"),D(T))},F=()=>{"default"!==E?(M("default"),D(T)):M("year-options")},B=()=>{A.current.focus();const e=x?x(C):C.subtract(1,"month");switch(E){case"default":_(e),D(e);break;case"month-options":D((e=>e.subtract(1,"year")));break;case"year-options":D((e=>e.subtract(10,"year")))}},P=()=>{A.current.focus();const e=w?w(C):C.add(1,"month");switch(E){case"default":_(e),D(e);break;case"month-options":D((e=>e.add(1,"year")));break;case"year-options":D((e=>e.add(10,"year")))}},L=e=>{D(e),_(e),m||M("default")},z=()=>{const e=sc.toDayjs(a);D(e),_(e),"default"===E?W("reset"):M("default")},H=e=>{g&&g(e)},W=e=>{v&&v(e)},V=()=>{if(!s||p)return!1;const e=Wl(s);return"month-options"===E?!tc.isPreviousYearWithinRange(C,e):"year-options"===E?!tc.isPreviousDecadeWithinRange(C,e):$?$(C):!tc.isPreviousMonthWithinRange(C,e)},Y=()=>{if(!l||p)return!1;const e=Wl(l);return"month-options"===E?!tc.isNextYearWithinRange(C,e):"year-options"===E?!tc.isNextDecadeWithinRange(C,e):j?j(C):!tc.isNextMonthWithinRange(C,e)},U=()=>{if("year-options"===E){const{beginDecade:e,endDecade:t}=tc.getStartEndDecade(C);return`${e} to ${t}`}return k?k(C):C.format("YYYY")},K=()=>{const t=S?S(C):C.format("MMM");return e.jsxs(e.Fragment,{children:[e.jsxs(Bc,Object.assign({type:"button",tabIndex:-1,$expanded:"month-options"===E,$visible:"default"===E,id:"month-dropdown",onClick:R},{children:[e.jsx(Pc,{children:t}),e.jsx(Ec,{})]})),e.jsxs(Bc,Object.assign({type:"button",tabIndex:-1,$expanded:"default"!==E,id:"year-dropdown",onClick:F},{children:[e.jsx(Pc,{children:U()}),e.jsx(Ec,{})]}))]})},q=()=>{switch(E){case"month-options":return e.jsx(Kc,{type:o,calendarDate:C,currentFocus:c,minDate:s,maxDate:l,selectedStartDate:d,selectedEndDate:u,viewCalendarDate:T,isNewSelection:f,onMonthSelect:L,allowDisabledSelection:p});case"year-options":return e.jsx(Zc,{type:o,calendarDate:C,currentFocus:c,minDate:s,maxDate:l,selectedStartDate:d,selectedEndDate:u,viewCalendarDate:T,isNewSelection:f,onYearSelect:L,allowDisabledSelection:p});default:return null}};return e.jsxs(Mc,Object.assign({ref:A,"data-id":"calendar-container","data-testid":"calendar-container"},O,{children:[y&&e.jsxs(Rc,Object.assign({"data-id":"calendar-header","data-testid":"calendar-header"},{children:[e.jsx(Fc,{children:K()}),e.jsxs(Lc,{children:[e.jsx(zc,Object.assign({"aria-label":"Previous month","data-testid":"left-arrow-btn",disabled:V(),focusHighlight:!1,tabIndex:-1,onClick:B},{children:e.jsx(Tc,{})})),e.jsx(zc,Object.assign({"aria-label":"Next month","data-testid":"right-arrow-btn",disabled:Y(),focusHighlight:!1,tabIndex:-1,onClick:P},{children:e.jsx(_c,{})}))]})]})),e.jsx(Ic,{children:(()=>{const t="function"==typeof i?i({calendarDate:T,currentView:E}):i;return h?e.jsxs(e.Fragment,{children:["default"===E&&t,q()]}):e.jsxs(e.Fragment,{children:[e.jsx(Nc,{children:t}),e.jsx(Ac,Object.assign({$visible:"default"!==E},{children:q()}))]})})()}),(()=>{if(!m)return;const t=!!("default"===E)&&b;return e.jsxs(Hc,{children:[e.jsx(Wc,Object.assign({ref:N,"data-testid":"cancel-button",styleType:"light",type:"button",onClick:z},{children:"Cancel"})),e.jsx(Wc,Object.assign({"data-testid":"done-button",ref:I,type:"button",onClick:()=>{t||(D(T),"default"===E?W("confirmed"):M("default"))},disabled:t},{children:"Done"}))]})})()]}))})),Jc=K.default.div`
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
`,ad=K.default(exports.Text.H5)`
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
`;const od=K.default(id)`
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
`,yd=({bgLeft:t,bgRight:n,circleLeft:r,circleRight:i,shadow:a,circleShadow:o,labelType:s,disabled:l,interactive:c,date:d,onSelect:u,onHover:f,onHoverEnd:h})=>e.jsxs(ld,{children:[e.jsx(hd,{$shadow:t&&a}),e.jsx(dd,{$type:t,$shadow:t&&a}),e.jsx(md,{$type:r,$shadow:r&&o}),e.jsx(pd,{$shadow:n&&a}),e.jsx(ud,{$type:n,$shadow:n&&a}),e.jsx(bd,{$type:i,$shadow:i&&o}),e.jsx(vd,Object.assign({weight:"regular",$type:s,$disabled:l,$interactive:c,onClick:()=>{u(d)},onMouseEnter:()=>{f(d)},onMouseLeave:()=>{h&&h(d)}},{children:d.date()}))]}),xd=({date:t,calendarDate:n,startDate:r,endDate:i,currentFocus:a,hoverDate:o,minDate:s,maxDate:l,disabledDates:c,allowDisabledSelection:d,isNewSelection:u,showActiveMonthDaysOnly:f,onSelect:h,onHover:p})=>{const g=tc.isDisabledDay(t,c,s,l),m=!g||d,b=()=>{const e=Wl(o),t=e.isBefore(i,"day"),n=e.isAfter(r,"day");let s,l,c,d;return"start"===a&&i&&t&&(r&&n?(c=o,d=i):(s=o,l=r||i)),"end"===a&&r&&n&&(i&&t?(c=r,d=o):(s=i||r,l=o)),{hoverStart:s,hoverEnd:l,overlapStart:c,overlapEnd:d}},v={date:t,calendarDate:n,disabled:g,interactive:m,onSelect:()=>{h(t,!m)},onHover:()=>{p(t.format("YYYY-MM-DD"),!m)}};return e.jsx(yd,Object.assign({},v,(()=>{const e={};if(n.month()!==t.month())e.labelType=f?"hidden":"unavailable";else if(Wl().isSame(t,"day")&&!g)e.labelType="current",e.circleLeft="current",e.circleRight="current";else if(u){const n="end"===a&&r&&t.isBefore(r),o="start"===a&&i&&t.isAfter(i);(n||o)&&(e.labelType="unavailable")}return e})(),(()=>{const e={},a=t.isSame(r,"day"),o=t.isSame(i,"day");return f&&n.month()!==t.month()?(e.labelType="hidden",e):((r&&a||i&&o)&&(e.labelType="selected",e.circleLeft="selected-outline",e.circleRight="selected-outline"),r&&i&&t.isBetween(r,i,"day","[]")&&(e.labelType="selected",a||(e.bgLeft="selected"),o||(e.bgRight="selected")),e)})(),(()=>{if(!o)return;const e={};t.isSame(o,"day")&&(e.circleShadow=!0,e.circleLeft="hover-current",e.circleRight="hover-current");const{hoverStart:n,hoverEnd:r,overlapStart:i,overlapEnd:a}=b();if(n&&r){if(t.isBetween(n,r,"day","[]")){const i=t.isSame(n,"day"),a=t.isSame(r,"day");e.labelType="selected",i||(e.bgLeft="hover-dash"),a||(e.bgRight="hover-dash")}return e}if(i&&a){if(t.isBetween(i,a,"day","[]")){const n=t.isSame(i,"day"),r=t.isSame(a,"day");e.labelType="selected",(n||r)&&(e.circleShadow=!0,e.circleLeft="overlap-outline",e.circleRight="overlap-outline"),n||(e.bgLeft="overlap"),r||(e.bgRight="overlap")}return e}return e})()))};Wl.extend(Kl);const wd=({calendarDate:n,currentFocus:r,disabledDates:i,selectedStartDate:a,selectedEndDate:o,onSelect:s,onHover:l,isNewSelection:c,minDate:d,maxDate:u,allowDisabledSelection:f,showActiveMonthDaysOnly:h})=>{const p=t.useMemo((()=>tc.generateDays(n)),[n]),[g,m]=t.useState(""),b=(e,t)=>{t&&!f||s(e)},v=(e,t)=>{t&&!f||(m(e),l(e))},y=()=>{m(""),l("")};return e.jsxs(Jc,Object.assign({"data-testid":"calendar-content"},{children:[p[0].map(((t,n)=>e.jsx(ed,{children:e.jsx(exports.Text.H6,Object.assign({weight:"semibold"},{children:Wl(t).format("ddd")}))},`week-day-${n}`))),p.map(((t,s)=>e.jsx(td,Object.assign({onMouseLeave:y},{children:t.map(((t,s)=>e.jsx(xd,{date:t,calendarDate:n,startDate:a,endDate:o,hoverDate:g,currentFocus:r,minDate:d,maxDate:u,disabledDates:i,allowDisabledSelection:f,isNewSelection:c,showActiveMonthDaysOnly:h,onSelect:b,onHover:v},`day-${s}`)))}),s)))]}))},$d=({date:t,calendarDate:n,selectedDate:r,hoverDate:i,minDate:a,maxDate:o,disabledDates:s,allowDisabledSelection:l,numberOfDays:c,onSelect:d,onHover:u})=>{const f=tc.isDisabledDay(t,s,a,o),h=!f||l,{start:p,end:g}=r?tc.getFixedRangeStartEnd(sc.toDayjs(r),c):{start:void 0,end:void 0},{start:m,end:b}=i?tc.getFixedRangeStartEnd(sc.toDayjs(i),c):{start:void 0,end:void 0},v=r&&t.isBetween(p,g,"day","[]"),y=i&&t.isBetween(m,b,"day","[]"),x=v&&t.isSame(p,"day")||y&&t.isSame(m,"day"),w=v&&t.isSame(g,"day")||y&&t.isSame(b,"day"),$=(e,t,n,r)=>{n?e.circleLeft=t:e.bgLeft=t,r?e.circleRight=t:e.bgRight=t},j={date:t,calendarDate:n,disabled:f,interactive:h,onSelect:()=>{d(t,!h)},onHover:()=>{u(t.format("YYYY-MM-DD"),!h)}};return e.jsx(yd,Object.assign({},j,(()=>{const e={};return v||y?e.labelType="selected":n.month()!==t.month()?e.labelType="unavailable":Wl().isSame(t,"day")&&!f&&(e.labelType="current",e.circleLeft="current",e.circleRight="current"),e})(),(()=>{const e={},n=t.format("YYYY-MM-DD");return y&&$(e,"hover-dash",n===m,n===b),v&&$(e,"selected",n===p,n===g),v&&y&&$(e,"overlap",x,w),n===p&&(y?(e.circleLeft="overlap-outline",e.circleRight="overlap-outline"):(e.circleRight="selected-outline",e.circleLeft="selected-outline")),n===m&&(e.circleLeft="hover-current",e.circleRight="hover-current",e.circleShadow=!0,m>=p&&m<g&&(e.circleLeft="overlap-outline",e.circleRight="overlap-outline")),e})()))},jd=({calendarDate:n,disabledDates:r,selectedStartDate:i,onSelect:a,onHover:o,minDate:s,maxDate:l,allowDisabledSelection:c,numberOfDays:d})=>{const u=t.useMemo((()=>tc.generateDays(n)),[n]),[f,h]=t.useState(""),p=(e,t)=>{t&&!c||(a(e),e&&!Wl(e).isSame(e,"month")&&h(""))},g=(e,t)=>{t&&!c||(h(e),o(e))},m=()=>{h(""),o("")};return e.jsxs(Jc,Object.assign({"data-testid":"calendar-content"},{children:[u[0].map(((t,n)=>e.jsx(ed,{children:e.jsx(exports.Text.H6,Object.assign({weight:"semibold"},{children:Wl(t).format("ddd")}))},`week-day-${n}`))),u.map(((t,a)=>e.jsx(td,Object.assign({onMouseLeave:m},{children:t.map(((t,a)=>e.jsx($d,{date:t,calendarDate:n,selectedDate:i,hoverDate:f,minDate:s,maxDate:l,disabledDates:r,allowDisabledSelection:c,onSelect:p,onHover:g,numberOfDays:d},`day-${a}`)))}),a)))]}))},Sd=K.default.div`
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
`,kd=({date:t,calendarDate:n,selectedDate:r,hoverDate:i,minDate:a,maxDate:o,disabledDates:s,allowDisabledSelection:l,onSelect:c,onHover:d})=>{const u=tc.isDisabledDay(t,s,a,o),f=!u||l,{start:h,end:p}=tc.getWeekStartEnd(sc.toDayjs(r)),{start:g,end:m}=tc.getWeekStartEnd(sc.toDayjs(i)),b=r&&t.isBetween(h,p,"day","[]"),v=i&&t.isBetween(g,m,"day","[]"),y=b&&t.isSame(h)||v&&t.isSame(g),x=b&&t.isSame(p)||v&&t.isSame(m),w={date:t,calendarDate:n,disabled:u,interactive:f,onSelect:()=>{c(t,!f)},onHover:()=>{d(t.format("YYYY-MM-DD"),!f)}};return e.jsx(yd,Object.assign({},w,(()=>{const e={};return b||v?e.labelType="selected":n.month()!==t.month()?e.labelType="unavailable":Wl().isSame(t,"day")&&!u&&(e.labelType="current",e.circleLeft="current",e.circleRight="current"),e})(),(()=>{const e={};let t;return b&&v?(t="hover-current",e.shadow=!0,e.circleShadow=y||x):b?t="selected-outline":v&&(t="hover-dash"),t&&(y?e.circleLeft=t:e.bgLeft=t,x?e.circleRight=t:e.bgRight=t),e})()))},Od=({calendarDate:n,disabledDates:r,selectedStartDate:i,onSelect:a,onHover:o,minDate:s,maxDate:l,allowDisabledSelection:c})=>{const d=t.useMemo((()=>tc.generateDays(n)),[n]),[u,f]=t.useState(""),h=(e,t)=>{if(t&&!c)return;const n=e.startOf("week");a(n),e&&!Wl(e).isSame(n,"month")&&f("")},p=(e,t)=>{t&&!c||(f(e),o(e))},g=()=>{f(""),o("")};return e.jsxs(Jc,Object.assign({"data-testid":"calendar-content"},{children:[d[0].map(((t,n)=>e.jsx(ed,{children:e.jsx(exports.Text.H6,Object.assign({weight:"semibold"},{children:Wl(t).format("ddd")}))},`week-day-${n}`))),d.map(((t,a)=>e.jsx(td,Object.assign({onMouseLeave:g},{children:t.map(((t,a)=>e.jsx(kd,{date:t,calendarDate:n,selectedDate:i,hoverDate:u,minDate:s,maxDate:l,disabledDates:r,allowDisabledSelection:c,onSelect:h,onHover:p},`day-${a}`)))}),a)))]}))},Cd=Y.default.forwardRef((({disabledDates:n,onYearMonthDisplayChange:r,onSelect:i,onHover:a,onDismiss:o,value:s,endValue:l,currentFocus:c,withButton:d,variant:u,minDate:f,maxDate:h,allowDisabledSelection:p,type:g="standalone",selectWithinRange:m=!0,initialCalendarDate:b,numberOfDays:v,showActiveMonthDaysOnly:y=!1},x)=>{const w=t.useRef(),$=t.useRef(void 0);t.useImperativeHandle(x,(()=>({reset(){w.current.resetView()},setCalendarDate(e){w.current.setCalendarDate(e)}})));const j=e=>{const t=e.format("YYYY-MM-DD");w.current.setCalendarDate(t),k(t)},S=e=>{O(e)},k=e=>{i&&i(e)},O=e=>{a&&a(e)},C=e=>{if(r){const t={month:e.month()+1,year:e.year()};r(t)}};return e.jsx(Sd,Object.assign({$type:g},{children:e.jsx(Qc,Object.assign({type:g,ref:w,withButton:d,doneButtonDisabled:(()=>{if(!d)return;let e=!0;switch(u){case"single":e=!1;break;case"range":case"fixed-range":e=!!s!=!!l;break;case"week":e=!s&&!l}return e})(),onDismiss:o,minDate:f,maxDate:h,selectWithinRange:m,currentFocus:c,selectedStartDate:s,selectedEndDate:l,allowDisabledSelection:p,onCalendarDateChange:e=>{$.current&&$.current.isSame(e,"month")||C(e),$.current=e},initialCalendarDate:b},{children:({calendarDate:t})=>(t=>{switch(u){case"week":return e.jsx(Od,{calendarDate:t,disabledDates:n,selectedStartDate:s,minDate:f,maxDate:h,allowDisabledSelection:p,onSelect:j,onHover:S});case"fixed-range":return e.jsx(jd,{calendarDate:t,disabledDates:n,selectedStartDate:s,minDate:f,maxDate:h,allowDisabledSelection:p,onSelect:j,onHover:S,numberOfDays:v});default:return e.jsx(wd,{calendarDate:t,currentFocus:c,disabledDates:n,selectedStartDate:s,selectedEndDate:l,minDate:f,maxDate:h,isNewSelection:m,allowDisabledSelection:p,showActiveMonthDaysOnly:y,onSelect:j,onHover:S})}})(t)}))}))})),Dd=Y.default.forwardRef(((t,n)=>{var{width:r}=t,i=X(t,["width"]);return e.jsx(Cc,Object.assign({$width:r,"data-testid":"calendar-dropdown"},{children:e.jsx(Cd,Object.assign({ref:n},i))}))})),Td=K.default.div`
    width: 41rem;

    ${e=>{if(e.$hasBorder)return i.css`
                border: 1px solid ${ts.Neutral[5](e)};
                border-radius: 12px;
                overflow: hidden;
            `}}
`,_d=K.default.div`
    border-radius: 0.5rem;
    background: ${ts.Neutral[8]};
    padding: 1rem 2rem;
    box-shadow: 0 0.125rem 0.5rem rgba(104, 104, 104, 0.25);
`,Ed=t=>{var{children:n}=t,r=X(t,["children"]);const i=r["data-testid"]||"card";return e.jsx(_d,Object.assign({},r,{"data-testid":i},{children:"string"==typeof n?e.jsx(exports.Text.Body,{children:n}):n}))},Md=i.keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,Id=K.default.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    ${e=>{let t,n;if("small"===e.$displaySize)t="1.5rem",n="1.5rem";else t="2rem",n="2rem";return i.css`
            height: ${t};
            width: ${n};
        `}}

    svg {
        animation: 200ms ease-in-out ${Md};
        width: 100%;
        height: 100%;
        color: ${e=>e.$disabled?ts.Neutral[4](e):e.$unchecked?ts.Accent.Light[2](e):ts.Primary(e)};
    }
`,Nd=K.default.input`
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
`,Ad=n=>{var{className:r,checked:i,disabled:a,indeterminate:o,onChange:s,onKeyPress:l,displaySize:c="default"}=n,d=X(n,["className","checked","disabled","indeterminate","onChange","onKeyPress","displaySize"]);const f=t.useRef();t.useEffect((()=>{f.current.indeterminate=o}),[o]);const h=e=>{if(!a){const t=e;if(!(" "===t.key||"change"===e.type))return;s&&s(e),l&&l(t)}};return e.jsxs(Id,Object.assign({className:r,"data-testid":"checkbox",role:"checkbox","aria-checked":o?"mixed":i,"aria-labelledby":"checkbox-input",tabIndex:a?-1:0,onKeyDown:h,$displaySize:c,$disabled:a,$unchecked:!(o||i||a)},{children:[e.jsx(Nd,Object.assign({id:"checkbox-input","data-testid":"checkbox-input","aria-hidden":"true",type:"checkbox",checked:i,ref:f,tabIndex:-1,onChange:h,disabled:a},d)),o?e.jsx(u.MinusSquareFillIcon,{"data-testid":"indeterminate"}):i?e.jsx(u.SquareTickFillIcon,{"data-testid":"checkmark"}):a?e.jsx(u.SquareFillIcon,{"data-testid":"disabled-empty-checkbox"}):e.jsx(u.SquareIcon,{"data-testid":"empty-checkbox"})]}))};var Rd=Ai,Fd=/\s/;var Bd=function(e){for(var t=e.length;t--&&Fd.test(e.charAt(t)););return t},Pd=/^\s+/;var Ld=function(e){return e?e.slice(0,Bd(e)+1).replace(Pd,""):e},zd=ra,Hd=Zi,Wd=/^[-+]0x[0-9a-f]+$/i,Vd=/^0b[01]+$/i,Yd=/^0o[0-7]+$/i,Ud=parseInt;var Kd=function(e){if("number"==typeof e)return e;if(Hd(e))return NaN;if(zd(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=zd(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Ld(e);var n=Vd.test(e);return n||Yd.test(e)?Ud(e.slice(2),n?2:8):Wd.test(e)?NaN:+e},qd=ra,Xd=function(){return Rd.Date.now()},Gd=Kd,Zd=Math.max,Qd=Math.min;var Jd=function(e,t,n){var r,i,a,o,s,l,c=0,d=!1,u=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var n=r,a=i;return r=i=void 0,c=t,o=e.apply(a,n)}function p(e){var n=e-l;return void 0===l||n>=t||n<0||u&&e-c>=a}function g(){var e=Xd();if(p(e))return m(e);s=setTimeout(g,function(e){var n=t-(e-l);return u?Qd(n,a-(e-c)):n}(e))}function m(e){return s=void 0,f&&r?h(e):(r=i=void 0,o)}function b(){var e=Xd(),n=p(e);if(r=arguments,i=this,l=e,n){if(void 0===s)return function(e){return c=e,s=setTimeout(g,t),d?h(e):o}(l);if(u)return clearTimeout(s),s=setTimeout(g,t),h(l)}return void 0===s&&(s=setTimeout(g,t)),o}return t=Gd(t)||0,qd(n)&&(d=!!n.leading,a=(u="maxWait"in n)?Zd(Gd(n.maxWait)||0,t):a,f="trailing"in n?!!n.trailing:f),b.cancel=function(){void 0!==s&&clearTimeout(s),c=0,r=l=i=s=void 0},b.flush=function(){return void 0===s?o:m(Xd())},b},eu=_i(Jd),tu=Jd,nu=ra;var ru=_i((function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return nu(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),tu(e,t,{leading:r,maxWait:t,trailing:i})})),iu=new Map,au=new WeakMap,ou=0,su=void 0;function lu(e){return Object.keys(e).sort().filter((t=>void 0!==e[t])).map((t=>`${t}_${"root"===t?function(e){return e?(au.has(e)||(ou+=1,au.set(e,ou.toString())),au.get(e)):"0"}(e.root):e[t]}`)).toString()}function cu(e,t,n={},r=su){if(void 0===window.IntersectionObserver&&void 0!==r){const i=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:"number"==typeof n.threshold?n.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),()=>{}}const{id:i,observer:a,elements:o}=function(e){const t=lu(e);let n=iu.get(t);if(!n){const r=new Map;let i;const a=new IntersectionObserver((t=>{t.forEach((t=>{var n;const a=t.isIntersecting&&i.some((e=>t.intersectionRatio>=e));e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=a),null==(n=r.get(t.target))||n.forEach((e=>{e(a,t)}))}))}),e);i=a.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:a,elements:r},iu.set(t,n)}return n}(n),s=o.get(e)||[];return o.has(e)||o.set(e,s),s.push(t),a.observe(e),function(){s.splice(s.indexOf(t),1),0===s.length&&(o.delete(e),a.unobserve(e)),0===o.size&&(a.disconnect(),iu.delete(i))}}function du({threshold:e,delay:t,trackVisibility:n,rootMargin:r,root:i,triggerOnce:a,skip:o,initialInView:s,fallbackInView:l,onChange:c}={}){var d;const[u,f]=Y.useState(null),h=Y.useRef(),[p,g]=Y.useState({inView:!!s,entry:void 0});h.current=c,Y.useEffect((()=>{if(o||!u)return;let s;return s=cu(u,((e,t)=>{g({inView:e,entry:t}),h.current&&h.current(e,t),t.isIntersecting&&a&&s&&(s(),s=void 0)}),{root:i,rootMargin:r,threshold:e,trackVisibility:n,delay:t},l),()=>{s&&s()}}),[Array.isArray(e)?e.toString():e,u,i,r,a,o,n,l,t]);const m=null==(d=p.entry)?void 0:d.target,b=Y.useRef();u||!m||a||o||b.current===m||(b.current=m,g({inView:!!s,entry:void 0}));const v=[f,p.inView,p.entry];return v.ref=v[0],v.inView=v[1],v.entry=v[2],v}const uu=K.default.div`
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

    ${e=>{const{$top:t,$left:n,$right:r,$warn:a}=e;return i.css`
            /* style object will be converted to px */
            ${{top:t,left:n,right:r}}
            box-shadow: 0px 0px 4px 1px
                ${a?ts.Validation.Red.Border:ts.Accent.Light[2]};

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
`;var bu,vu;!function(e){e.AM="AM",e.PM="PM"}(bu||(bu={})),function(e){e.roundToNearestHour=(e,t)=>{const n=Wl(e,"HH:mm");return(0===n.minute()?n:t?n.minute(0).add(1,"hour"):n.minute(0)).format("HH:mm")},e.generateHourlyIntervals=(e,t,n="ha")=>{const r="HH:mm";let i=Wl(e,r),a=Wl(t,r);i.isSame(a)&&(a=a.add(1,"day"));const o=[];for(;i.isBefore(a);)o.push(i.format(n)),i=i.add(1,"hour");return o},e.getTimeValues=(e,t)=>{const n={hour:"",minute:"",period:bu.AM};if(!t)return n;try{if("24hr"===e){const r=wu(t,e);n.minute=dc.padValue(r.minute);const i=parseInt(r.hour);0===Math.floor(i/12)?(n.period=bu.AM,n.hour=0===i?"12":dc.padValue(i.toString())):(n.period=bu.PM,n.hour=12===i?i.toString():dc.padValue((i-12).toString()))}else{const r=wu(t,e);n.hour=dc.padValue(r.hour),n.minute=dc.padValue(r.minute),n.period="am"===r.period.toLowerCase()?bu.AM:bu.PM}return n}catch(e){return n}},e.updateMinutes=(e,t)=>{const n=parseInt(e);if(isNaN(n))return"add"===t?dc.padValue("0"):"55";const r=Math.floor(n/5),i=(("add"===t?r+1:n%5==0?r-1:r)%12+12)%12;return dc.padValue((5*i).toString())},e.updateHours=(e,t)=>{const n=parseInt(e);if(isNaN(n))return"add"===t?dc.padValue("1"):"12";const r="add"===t?n+1:n-1;return r<=12&&r>0?dc.padValue(r.toString()):13===r?dc.padValue("1"):"12"},e.convertTo24HourFormat=e=>{const t=parseInt(e.hour);let n;return n=e.period===bu.PM?12===t?t.toString():(t+12).toString():12===t?"00":e.hour,`${n}:${e.minute}`},e.convertHourTo12HourFormat=e=>{const t=parseInt(e),n=t%12==0?12..toString():(t%12).toString();return dc.padValue(n)},e.formatDisplayValue=(e,t)=>{try{const n=wu(e,t),r=dc.padValue(n.hour);let i=`${r}:${dc.padValue(n.minute)}`;return"12hr"===t?(i+=n.period.toLowerCase(),i):i}catch(e){return""}},e.toMinutesSeconds=e=>({minutes:Math.floor(e/60),seconds:e%60}),e.to24Hour=e=>{if((null==e?void 0:e.includes("am"))||(null==e?void 0:e.includes("pm"))){const[t,n]=e.split(/(am|pm)/i),[r,i]=t.split(":").map(Number);let a=r;return"pm"===n&&a<12&&(a+=12),"am"===n&&12===a&&(a=0),$u(a,i)}return e},e.generateTimings=(t,n="12hr",r,i)=>{const a=[];let o=0,s=1440-t;for(r&&(o=e.timeToMinutes(r)),i&&(s=e.timeToMinutes(i));o<=s;){let e=Math.floor(o/60);const r=o%60;if("12hr"===n){const t=e>=12?"pm":"am";e%=12,e=e||12;const n=$u(e,r,t);a.push(n)}else{const t=$u(e,r);a.push(t)}o+=t}return a},e.parseInput=(e,t="12hr")=>{if(""===e||void 0===e)return e;const n=e.trim().toLowerCase(),r=/^(?:(\d{1,2})([:.])?(\d{2})?)?(a|p|am|pm)?$/.exec(n);if(!r)return;let i=parseInt(r[1]||"0",10);const a=parseInt(r[3]||"0",10);let o=r[4];if(void 0===r[1]||i>24||a>59)return;if("a"===o?o="am":"p"===o&&(o="pm"),"24hr"===t)return"pm"===o&&i<12?i+=12:("am"===o&&12===i||24===i)&&(i=0),$u(i,a);o?0===i||24===i?(o="am",i=12):i>12&&(o="pm",i-=12):(o=0===i||24===i||i>6&&i<12?"am":"pm",i=i%12||12);return $u(i,a,o)},e.findClosestFlooredTime=(t,n)=>{if(!t)return t;const r=e.timeToMinutes(t);let i="",a=1/0;for(const t of n){const n=e.timeToMinutes(t)-r;if(n<=0&&Math.abs(n)<a)a=Math.abs(n),i=t;else if(n>0)break}return i},e.timeToMinutes=e=>{const[t,n]=e.toLowerCase().split(/(am|pm)/),[r,i]=t.split(":").map(Number);let a=r;return"pm"===n&&12!==a&&(a+=12),"am"===n&&12===a&&(a=0),60*a+i}}(vu||(vu={}));const yu=(e,t)=>{const n=parseInt(e);return"24hr"===t?n>=0&&n<=23:n>=1&&n<=12},xu=e=>{const t=parseInt(e);return t>=0&&t<=59},wu=(e,t)=>{const n=e.split(":"),r=new Error("Invalid format");if("12hr"===t){if(2!==n.length||4!==n[1].length)throw r;const e=n[1].substring(0,2),a=n[1].substring(2);if(!yu(n[0],t)||!xu(e)||"am"!==(i=a).toLowerCase()&&"pm"!==i.toLowerCase())throw r;return{hour:n[0],minute:e,period:n[1].substring(2)}}if(2!==n.length)throw r;if(!yu(n[0],t)||!xu(n[1]))throw r;return{hour:n[0],minute:n[1]};var i},$u=(e,t,n)=>n?`${e}:${t.toString().padStart(2,"0")}${n}`:`${e.toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}`,ju=t=>n=>{switch(t){case"maintenance":{const t=n;return e.jsxs(e.Fragment,{children:["This service is currently unavailable. Please try again after ",e.jsx("strong",{children:t.dateString}),"."]})}case"inactivity":{const t=n,r=Math.floor(t.secondsLeft/60),i=t.secondsLeft%60;return e.jsxs(e.Fragment,{children:["You’ve been inactive for a while. To protect your privacy, you’ll be logged out in ",r," minutes"," ",i," seconds.",e.jsx("br",{}),e.jsx("br",{}),"If you wish to stay on this page, let us know now."]})}}};exports.ErrorDisplayHelper=void 0,(exports.ErrorDisplayHelper||(exports.ErrorDisplayHelper={})).imgAttributeHelper=e=>{const{base:t,md:n,lg:r,width:i,height:a}=e;return{srcSet:`${t} 400w, ${n} 800w, ${r} 1200w`,src:r,sizes:`(max-width: ${ns.mobileL}px) 400px, (max-width: ${ns.tablet}px) 800px, 1200px`,width:i,height:a}};const{imgAttributeHelper:Su}=exports.ErrorDisplayHelper,ku={400:{base:"https://assets.life.gov.sg/react-design-system/img/error/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/400@3x.png",width:400,height:280},403:{base:"https://assets.life.gov.sg/react-design-system/img/error/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/403@3x.png",width:400,height:280},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/404@3x.png",width:400,height:280},408:{base:"https://assets.life.gov.sg/react-design-system/img/error/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/408@3x.png",width:400,height:280},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@3x.png",width:400,height:280},502:{base:"https://assets.life.gov.sg/react-design-system/img/error/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/502@3x.png",width:400,height:280},503:{base:"https://assets.life.gov.sg/react-design-system/img/error/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/503@3x.png",width:400,height:280},504:{base:"https://assets.life.gov.sg/react-design-system/img/error/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/504@3x.png",width:400,height:280},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/confirmation@3x.png",width:400,height:280},"insufficient-credits":{base:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit.png",md:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/insuffcient-credit@3x.png",width:400,height:280},inactivity:{base:"https://assets.life.gov.sg/react-design-system/img/error/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/inactivity@3x.png",width:400,height:280},"link-error":{base:"https://assets.life.gov.sg/react-design-system/img/error/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/link-error@3x.png",width:400,height:280},logout:{base:"https://assets.life.gov.sg/react-design-system/img/error/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/logout@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/no-item-found@3x.png",width:400,height:280},"payment-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/payment-unsuccessful@3x.png",width:400,height:281},"transfer-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/transfer-unsuccessful@3x.png",width:400,height:280},"unsupported-browser":{base:"https://assets.life.gov.sg/react-design-system/img/error/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/generic-error@3x.png",width:400,height:280},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/warning@3x.png",width:400,height:280}},Ou={400:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/400@3x.png",width:400,height:215},403:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/403@3x.png",width:400,height:254},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/404@3x.png",width:400,height:319},408:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/408@3x.png",width:400,height:330},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@3x.png",width:400,height:232},502:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/502@3x.png",width:400,height:215},503:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/503@3x.png",width:400,height:191},504:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/504@3x.png",width:400,height:261},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/confirmation@3x.png",width:400,height:280},"insufficient-credits":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/insuffcient-credit@3x.png",width:400,height:280},inactivity:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/inactivity@3x.png",width:400,height:276},"link-error":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/link-error@3x.png",width:400,height:280},logout:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/logout@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/no-item-found@3x.png",width:400,height:290},"payment-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/payment-unsuccessful@3x.png",width:400,height:280},"transfer-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/transfer-unsuccessful@3x.png",width:400,height:280},"unsupported-browser":{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/generic-error@3x.png",width:400,height:232},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/bsg/warning@3x.png",width:400,height:280}},Cu=Object.assign(Object.assign({},ku),{400:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/400@3x.png",width:400,height:280},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@3x.png",width:400,height:280},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@3x.png",width:400,height:280},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/confirmation@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/no-item-found@3x.png",width:400,height:280},"unsupported-browser":{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/generic-error@3x.png",width:400,height:280},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/ccube/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/ccube/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/ccube/warning@3x.png",width:400,height:280}}),Du=Object.assign(Object.assign({},ku),{400:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/400.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/400@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/400@3x.png",width:400,height:280},403:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/403.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/403@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/403@3x.png",width:400,height:280},404:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/404.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/404@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/404@3x.png",width:400,height:280},408:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/408.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/408@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/408@3x.png",width:400,height:280},500:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/generic-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/generic-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/generic-error@3x.png",width:400,height:280},502:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/502.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/502@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/502@3x.png",width:400,height:280},503:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/503.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/503@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/503@3x.png",width:400,height:280},504:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/504.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/504@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/504@3x.png",width:400,height:280},confirmation:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/confirmation.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/confirmation@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/confirmation@3x.png",width:400,height:280},inactivity:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/inactivity.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/inactivity@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/inactivity@3x.png",width:400,height:280},"link-error":{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/link-error.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/link-error@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/link-error@3x.png",width:400,height:280},logout:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/logout.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/logout@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/logout@3x.png",width:400,height:280},warning:{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/warning.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/warning@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/warning@3x.png",width:400,height:280},"payment-unsuccessful":{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/payment-unsuccessful.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/payment-unsuccessful@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/payment-unsuccessful@3x.png",width:400,height:280},"no-item-found":{base:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/no-item-found.png",md:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/no-item-found@2x.png",lg:"https://assets.life.gov.sg/react-design-system/img/error/mylegacy/no-item-found@3x.png",width:400,height:280}}),Tu=e=>new Map([["400",{img:Su(e[400]),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["403",{img:Su(e[403]),title:"Error loading page",description:"You may not have permission to view this page. If someone gave you this link, let them know about this error."}],["404",{img:Su(e[404]),title:"Page not found",description:"If you entered or pasted the URL, check that it’s correct. If someone gave you this link, let them know about this error."}],["408",{img:Su(e[408]),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["500",{img:Su(e[500]),title:"Something went wrong",description:"We're working on a fix for the problem. Please try again later."}],["502",{img:Su(e[502]),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["503",{img:Su(e[503]),title:"Service under maintenance",description:"This service is currently unavailable. Please try again later."}],["504",{img:Su(e[504]),title:"Something went wrong",description:"This could be a temporary problem, so please refresh the page or try again later."}],["confirmation",{img:Su(e.confirmation),title:"Leave and lose changes?",description:"You have unsaved changes. If you leave this page, you will lose the changes you’ve made."}],["link-error",{img:Su(e["link-error"]),title:"Link has expired",description:"If you entered or pasted the URL, check that it’s correct. If someone gave you this link, let them know it has expired."}],["logout",{img:Su(e.logout),title:"You’ve been logged out",description:"It looks like you’ve left, so we logged you out to protect your privacy."}],["insufficient-credits",{img:Su(e["insufficient-credits"]),title:"Insufficient credits",description:"You do not have enough credits to make this transaction."}],["inactivity",{img:Su(e.inactivity),title:"Are you still there?",description:"You’ve been inactive for a while. To protect your privacy, you’ll be logged out soon.\n\nIf you wish to stay on this page, let us know now.",renderDescription:ju("inactivity")}],["maintenance",{img:Su(e[503]),title:"Service under maintenance",description:"This service is currently unavailable. Please try again later.",renderDescription:ju("maintenance")}],["no-item-found",{img:Su(e["no-item-found"]),title:"No results found",description:"Try adjusting your search or filters to find what you’re looking for."}],["payment-unsuccessful",{img:Su(e["payment-unsuccessful"]),title:"Unsuccessful payment",description:"Your payment was unsuccessful. Please try again."}],["transfer-unsuccessful",{img:Su(e["transfer-unsuccessful"]),title:"Unsuccessful transfer",description:"Your transfer was unsuccessful. Please try again."}],["unsupported-browser",{img:Su(e["unsupported-browser"]),title:"Browser not supported",description:"Download the latest version of Chrome, Edge, Firefox or Safari."}],["partially-supported-browser",{img:Su(e["unsupported-browser"]),title:"Browser version not supported",description:"Update to the latest version of Chrome, Edge, Firefox or Safari."}],["warning",{img:Su(e.warning),title:"Are you sure?",description:"You will lose your progress."}]]),_u=K.default.div`
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
`,Mu=K.default.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 41rem;
    white-space: pre-wrap;
`,Iu=K.default(exports.Text.H2)`
    margin: 2rem 0 1rem;
    text-align: center;
`,Nu=K.default.div`
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
`,Ru=t=>{var{type:n,img:r,title:a,description:o,actionButton:s,additionalProps:l,imageOnly:c,illustrationScheme:d}=t,u=X(t,["type","img","title","description","actionButton","additionalProps","imageOnly","illustrationScheme"]);const f=i.useTheme(),h=((e,t)=>{switch(t){case"bookingsg":return Tu(Ou).get(e);case"ccube":return Tu(Cu).get(e);case"mylegacy":return Tu(Du).get(e);default:return Tu(ku).get(e)}})(n,d||(f||ml).resourceScheme),p=u["data-testid"]||"error-display",g=()=>{switch(n){case"maintenance":{const e=l;return l&&e.dateString?h.renderDescription(e):o||void 0}case"inactivity":{const e=l;return l&&e.secondsLeft?h.renderDescription(e):o||void 0}default:return o||void 0}};if(!h)return null;const m=Object.assign(Object.assign(Object.assign(Object.assign({},h),r&&{img:r}),a&&{title:a}),g()&&{description:g()});return e.jsxs(_u,Object.assign({},u,{"data-testid":p},{children:[e.jsx(Eu,Object.assign({},m.img,{alt:"","data-id":"error-display-image"})),!c&&(m.title||m.description?e.jsxs(Mu,{children:[m.title&&("string"==typeof m.title?e.jsx(Iu,Object.assign({"data-testid":`${p}--title`,"data-id":"error-display-title",weight:"semibold"},{children:m.title})):m.title),m.description&&e.jsx(Nu,Object.assign({"data-testid":`${p}--description`,"data-id":"error-display-description"},{children:"string"==typeof m.description?e.jsx("p",{children:m.description}):m.description}))]}):null),s&&(()=>{const t=Object.assign({children:"Proceed"},s);return e.jsx(Au,Object.assign({},t))})()]}))},Fu=ts.Neutral[5],Bu=ts.Neutral[1],Pu=K.default.div`
    overflow: auto;
    display: flex;
    flex-direction: column;
    border: 1px solid ${Fu};
    border-radius: 0.5rem;

    // Hide scrollbar
    ::-webkit-scrollbar {
        display: none;
    }
    * {
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }
`,Lu=K.default.div`
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
            border-bottom: ${e=>e.$showLastRowBottomBorder?`1px solid ${Fu}`:"none"};
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
    ${e=>e.$float&&`\n            transform: translateX(-0.5%) translateY(-2rem);\n            border-radius: 4px;\n            box-shadow: 0 0 4px 0 rgba(40, 40, 40, 0.25);\n            width: 101%;\n            border: 1px solid ${Fu};\n        `}
    align-items: center;
    height: 3.5rem;
    padding: 1rem;
    border-top: 1px solid ${Fu};
    border-radius: 0 0 4px 4px;
    background-color: ${Ys.Table.Cell.Selected};
    transition: all 300ms ease;
`,Yu=K.default.tr`
    background-color: ${Ys.Table.Header};
    height: 6rem;
    border-bottom: 1px solid ${Fu};
`,Uu=K.default.th`
    padding: ${e=>e.$isCheckbox?"1.25rem 0.5rem 1.25rem 1.5rem":"1.25rem 1rem"};
    text-align: left;
    cursor: ${e=>e.$clickable?"pointer":"default"};
    vertical-align: middle;
    color: ${Bu};
    border-bottom: 1px solid ${Fu};
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
                ${Ys.Table.Cell.Selected};
            `:e.$alternating?i.css`
                ${Ys.Table.Cell.Primary};
            `:i.css`
                ${Ys.Table.Cell.Secondary};
            `};
    border-top: 1px solid ${Fu};
    &:hover {
        ${e=>{if(!e.$isSelected&&e.$isSelectable)return i.css`
                    background-color: ${Ys.Table.Cell.Hover};
                `}};
    }
`,Xu=K.default.td`
    padding: ${e=>e.$isCheckbox?"1.25rem 0.5rem 1.25rem 1.5rem":"1.25rem 1rem"};
    vertical-align: middle;
    color: ${Bu};
    border-bottom: 1px solid ${Fu};
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
`,Ju=K.default(Ru)`
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
`,af=K.default.button`
    ${rf}
    cursor: pointer;
`,of=K.default.div`
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
        box-shadow: ${Ys.InputBoxShadow};
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

                ${af} {
                    cursor: not-allowed;
                }

                :focus-within {
                    border: 1px solid ${ts.Neutral[5](e)};
                    box-shadow: none;
                }
            `:e.$readOnly?i.css`
                border: none;
                background: transparent !important;

                ${af} {
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
                    box-shadow: ${Ys.InputErrorBoxShadow};
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
`,hf=({children:n,show:r,error:i,disabled:a,testId:o,onBlur:s,readOnly:l,className:c,variant:d})=>{const u=t.useRef();return fc("mousedown",(function(e){if(!a){if(u&&u.current.contains(e.target))return;r&&s()}}),"document"),e.jsx(nf,Object.assign({className:c,$variant:d},{children:e.jsx(lf,Object.assign({ref:u,error:i&&!r,disabled:a,$readOnly:l,expanded:r,"data-testid":o},{children:n}))}))};var pf;!function(e){e.Ready="overlay-context-ready",e.Change="overlay-context-change"}(pf||(pf={}));const gf=()=>{const[e,n]=t.useState(void 0),r=g.useFloatingTree();return t.useEffect((()=>{if(!r)return void n(void 0);const e=e=>{n(e.zIndex)};return r.events.on(pf.Change,e),r.events.emit(pf.Ready),()=>r.events.off(pf.Change,e)}),[r]),e},mf=K.default.div`
    display: flex;
    flex-direction: column;
`,bf=e=>"right"===e?"bottom-end":"bottom-start",vf=({enabled:n,isOpen:r,onOpen:i,onClose:a,onDismiss:o,renderElement:s,renderDropdown:l,customZIndex:c,clickToToggle:d=!1,offset:u=0,alignment:f="left",fitAvailableHeight:h})=>{var p;const m=t.useRef(null),b=t.useRef(null),{width:v}=qe({targetRef:m,handleHeight:!1}),y={name:"center",fn:({x:e,rects:t})=>{const n=0===e||e+t.floating.width===window.innerWidth,r=window.innerWidth<as.mobileL;return{x:n&&r?(window.innerWidth-t.floating.width)/2:e}}},{refs:x,floatingStyles:w,context:$}=g.useFloating({open:r,onOpenChange:(e,t,n)=>{"escape-key"===n?null==o||o():e&&!r?null==i||i():!e&&r&&(null==a||a(n))},whileElementsMounted:g.autoUpdate,placement:bf(f),middleware:[g.offset(u),g.flip(),g.shift({limiter:g.limitShift()}),g.size({apply({availableHeight:e}){b.current&&Object.assign(b.current.style,{maxHeight:h?`${e}px`:void 0,overflowY:h?"hidden":void 0})}}),y]}),j=gf(),{isMounted:S,styles:k}=g.useTransitionStyles($,{initial:{opacity:0},open:{opacity:1},duration:300}),O=g.useClick($,{enabled:n,toggle:d}),C=g.useDismiss($,{enabled:n}),{getReferenceProps:D,getFloatingProps:T}=g.useInteractions([O,C]);return e.jsxs(e.Fragment,{children:[e.jsx("div",Object.assign({ref:e=>{m.current=e,x.setReference(e)}},D(),{children:s()})),S&&e.jsx(g.FloatingPortal,{children:e.jsx(g.FloatingFocusManager,Object.assign({context:$,modal:!1,initialFocus:b,returnFocus:!1},{children:e.jsx("div",Object.assign({ref:x.setFloating,style:Object.assign(Object.assign({},w),{zIndex:null!==(p=null!=c?c:j)&&void 0!==p?p:50})},T(),{children:e.jsx(mf,Object.assign({ref:b,style:Object.assign({},k),inert:k.opacity<1?"":void 0},{children:l({elementWidth:v})}))}))}))})]})},yf=i.css`
    border: 1px solid ${ts.Accent.Light[1]};
    box-shadow: ${Ys.InputBoxShadow};
`,xf=i.css`
    border: 1px solid ${ts.Accent.Light[1]};
    box-shadow: none;
`,wf=i.css`
    border: 1px solid ${ts.Neutral[5]};
    box-shadow: none;
`,$f=i.css`
    border: 1px solid ${ts.Validation.Red.Border};
    box-shadow: ${Ys.InputErrorBoxShadow};
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
`,Of=K.default.button`
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
`,Cf=K.default.div`
    display: flex;
    align-items: center;
    position: relative;

    flex: 1;
`,Df=K.default.div`
    display: flex;
    align-items: center;

    ${e=>{if(e.$hover)return i.css`
                ${Tf}, ${If} {
                    color: ${ts.Neutral[4]};
                }
            `}}
`,Tf=K.default(kf)`
    background: transparent;
    text-align: center;
`,_f=K.default(Tf)`
    width: 2rem;
    margin-right: 0.25rem;
`,Ef=K.default(Tf)`
    width: 2.5rem;
`,Mf=K.default(Tf)`
    width: 3rem;
    margin-left: 0.25rem;
`,If=K.default(exports.Text.Body)`
    ${e=>{if(e.$inactive)return i.css`
                color: ${ts.Neutral[3](e)};
            `}}
`,Nf=K.default.div`
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
`;Wl.extend(Yl);const Af=Y.default.forwardRef((({disabled:n,readOnly:r,names:i,value:a,focused:o,hoverValue:s,placeholder:l,label:c,onChange:d,onFocus:u,onBlur:f,hideInputKeyboard:h},p)=>{const g=h?"none":"numeric",[m,b,v]=bc(""),[y,x,w]=bc(""),[$,j,S]=bc(""),[k,O]=t.useState("none"),[C,D]=t.useState(!1),T=t.useRef(null),_=t.useRef(null),E=t.useRef(null),M=t.useRef(null),[I,N,A]=z(s);t.useEffect((()=>{const[e="",t="",n=""]=z(a);b(e),x(t),j(n),e||t||n||!T.current.contains(document.activeElement)||_.current.focus()}),[a]),t.useEffect((()=>{o||O("none"),o&&(D(!0),T.current.contains(document.activeElement)||_.current.focus())}),[o]),t.useImperativeHandle(p,(()=>({ref:T,resetPlaceholder(){D(!1)},resetInput(){const[e="",t="",n=""]=z(a);b(e),x(t),j(n)}})),[a]);const R=e=>{var t;e.preventDefault(),null===(t=_.current)||void 0===t||t.focus()},F=e=>{e.target.select();const t=e.target.name;O(t)},B=e=>{const[t,n,r]=i,a={[t]:v.current,[n]:w.current,[r]:S.current},o=e.target.name,s=a[o],l=o!==r?dc.padValue(s,!0):s;switch(o){case t:a[t]=l,b(l);break;case n:a[n]=l,x(l)}const c=`${a[r]}-${a[n]}-${a[t]}`,u=Wl(c,"YYYY-MM-DD",!0).isValid(),h=!a[t]&&!a[n]&&!a[r];u&&s!==l&&d(c),T.current.contains(e.relatedTarget)||(O("none"),null==f||f(h||u))},P=e=>{if(s)return;const t=e.target.name,n=e.target.value.replace(/[^0-9]/g,""),r={day:m,month:y,year:$};switch(t){case i[0]:r.day=n,b(n),2===n.length&&E.current.focus();break;case i[1]:r.month=n,x(n),2===n.length&&M.current.focus();break;case i[2]:r.year=n,j(n)}if(!r.day&&!r.month&&!r.year)return void d("");const a=`${r.year}-${r.month}-${r.day}`;Wl(a,"YYYY-MM-DD",!0).isValid()&&d(a)},L=e=>{"Backspace"!==e.code&&"Backspace"!==e.key||(k===i[1]&&0===y.length&&_.current.focus(),k===i[2]&&0===$.length&&E.current.focus())};function z(e){if(e){const t=Wl(new Date(e));return t.isValid()?[dc.padValue(t.date().toString()),dc.padValue((t.month()+1).toString()),t.year().toString()]:[void 0,void 0,void 0]}return[void 0,void 0,void 0]}return e.jsxs(Cf,Object.assign({role:"group","aria-label":c,onClick:()=>{n||r||(D(!0),T.current.contains(document.activeElement)||_.current.focus())},onFocus:e=>{n||(D(!0),o||null==u||u(e))}},{children:[e.jsxs(Df,Object.assign({ref:T,$hover:!!s},{children:[e.jsx(_f,{ref:_,name:i[0],maxLength:2,value:null!=I?I:m,onFocus:F,onBlur:B,onChange:P,type:"text",inputMode:g,pattern:"[0-9]{2}","data-testid":`${i[0]}-input`,"aria-label":"day",disabled:n,readOnly:r,tabIndex:r?-1:0,autoComplete:"off",placeholder:k!==i[0]||r?"DD":""}),e.jsx(If,Object.assign({$inactive:0===m.length},{children:"/"})),e.jsx(Ef,{ref:E,name:i[1],maxLength:2,value:null!=N?N:y,onFocus:F,onBlur:B,onChange:P,onKeyDown:L,type:"text",inputMode:g,pattern:"[0-9]{2}","data-testid":`${i[1]}-input`,"aria-label":"month",disabled:n,readOnly:r,tabIndex:r?-1:0,autoComplete:"off",placeholder:k!==i[1]||r?"MM":""}),e.jsx(If,Object.assign({$inactive:0===y.length},{children:"/"})),e.jsx(Mf,{ref:M,name:i[2],maxLength:4,value:null!=A?A:$,onFocus:F,onBlur:B,onChange:P,onKeyDown:L,type:"text",inputMode:g,pattern:"[0-9]{4}","data-testid":`${i[2]}-input`,"aria-label":"year",disabled:n,readOnly:r,tabIndex:r?-1:0,autoComplete:"off",placeholder:k!==i[2]||r?"YYYY":""})]})),(()=>{if(!a&&!r&&l)return e.jsx(Nf,Object.assign({$hide:C,$disabled:n,onMouseDown:R},{children:l}))})()]}))})),Rf=K.default(Sf)`
    height: 3rem;
`,Ff=n=>{var{minDate:r,maxDate:i,disabled:a,disabledDates:o,error:s,hideInputKeyboard:l,value:c,onChange:d,onFocus:u,onBlur:f,onYearMonthDisplayChange:h,withButton:p=!0,readOnly:g,id:m,allowDisabledSelection:b,zIndex:v}=n,y=X(n,["minDate","maxDate","disabled","disabledDates","error","hideInputKeyboard","value","onChange","onFocus","onBlur","onYearMonthDisplayChange","withButton","readOnly","id","allowDisabledSelection","zIndex"]);const[x,w]=t.useState(lc.sanitizeInput(c)),[$,j]=t.useState(lc.sanitizeInput(c)),[S,k]=t.useState(void 0),[O,C]=t.useState(!1),[D,T]=t.useState(!1),_=t.useRef(null),E=t.useRef();t.useEffect((()=>{const e=lc.sanitizeInput(c);w(e),j(e)}),[c]);const M=e=>{!b&&lc.isDateDisabled(e,{disabledDates:o,minDate:r,maxDate:i})||(j(e),p||(B(e),w(e),e&&C(!1)))},I=e=>{j(e),p||(B(e),w(e),e&&(_.current.focus(),C(!1)),S&&k(void 0))},N=()=>{g||a||(C(!0),D||(T(!0),u&&u()))},A=e=>{!D||O||_.current.contains(e.relatedTarget)||(E.current.resetInput(),j(x),T(!1),P())},R=e=>{k(e)},F=e=>{switch(e){case"reset":j(x);break;case"confirmed":w($),B($)}_.current.focus(),C(!1)},B=e=>{d&&d(e)},P=()=>{f&&f()};return e.jsx(vf,{enabled:!g&&!a,isOpen:O,renderElement:()=>e.jsx(Rf,Object.assign({tabIndex:-1,ref:_,onBlur:A,onFocus:N,$disabled:a,$readOnly:g,$focused:D,$error:s,id:m,"data-testid":y["data-testid"]},y,{children:e.jsx(Af,{ref:E,disabled:a,onChange:M,readOnly:g,focused:O,names:["start-day","start-month","start-year"],value:$,hoverValue:S,hideInputKeyboard:l})})),renderDropdown:({elementWidth:t})=>e.jsx(Dd,{type:"input",variant:"single",initialCalendarDate:$,withButton:p,value:$,disabledDates:o,minDate:r,maxDate:i,allowDisabledSelection:b,onHover:R,onSelect:I,onDismiss:F,onYearMonthDisplayChange:h,width:t}),onClose:()=>{E.current.resetInput(),j(x),C(!1),T(!1),P()},onDismiss:()=>{E.current.resetInput(),_.current.focus(),j(x),C(!1)},customZIndex:v,offset:16})},Bf=K.default(ss)`
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
`,Pf=K.default.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    background-color: ${ts.Neutral[7]};
    border-radius: 0.25rem;
`,Lf=K.default(qs.Default)`
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
`,zf=n=>{var{selectedDate:r,minDate:i,maxDate:a,loading:o,showDateAsShortForm:s,showCurrentDateAsToday:l,onLeftArrowClick:c,onRightArrowClick:d,onCalendarDateSelect:u}=n,f=X(n,["selectedDate","minDate","maxDate","loading","showDateAsShortForm","showCurrentDateAsToday","onLeftArrowClick","onRightArrowClick","onCalendarDateSelect"]);const h=sc.toDayjs(r),p=sc.toDayjs(r).format(s?"D MMM YYYY":"D MMMM YYYY").toString(),g=sc.isSame(r,Wl())&&l?"Today":h.format(s?"ddd":"dddd"),[m,b]=t.useState(!1),v=e=>{u&&u(e),b(!m)},y=()=>{b(!1),c(r)},x=()=>{b(!1),d(r)};return e.jsx(vf,{enabled:!o,isOpen:m,renderElement:()=>e.jsxs(Pf,Object.assign({},f,{children:[e.jsx(Bf,Object.assign({"data-testid":"date-navigator-left-arrow-btn",disabled:o||!!i&&(tc.isDisabledDay(h,void 0,i)||sc.isSame(h,i)),focusHighlight:!1,focusOutline:"browser","aria-label":"Previous day",onClick:y},{children:e.jsx(Tc,{})})),e.jsx(Lf,Object.assign({onClick:()=>!!u&&!o&&b(!m),$enableDateClick:!!u&&!o,"data-testid":"date-navigator-date-text",styleType:"link",disabled:!u||o},{children:`${p}, ${g}`})),e.jsx(Bf,Object.assign({"data-testid":"date-navigator-right-arrow-btn",disabled:o||!!a&&(tc.isDisabledDay(h,void 0,void 0,a)||sc.isSame(h,a)),focusHighlight:!1,focusOutline:"browser","aria-label":"Next day",onClick:x},{children:e.jsx(_c,{})}))]})),renderDropdown:({elementWidth:t})=>e.jsx(Dd,{type:"input",variant:"single",initialCalendarDate:r,value:r,minDate:i,maxDate:a,onSelect:v,width:t}),onDismiss:()=>b(!1),onClose:()=>b(!1),offset:8})},Hf=K.default.div`
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
`,Kf=({children:t,currentActive:n,error:r,className:i,wrap:a})=>{const[o,s]=t;return e.jsxs(Hf,Object.assign({className:i,$wrap:a},{children:[e.jsx(Vf,Object.assign({"data-id":"range-container-elem1-container"},{children:o})),e.jsx(Yf,{}),a&&e.jsx(Wf,{}),e.jsx(Vf,Object.assign({"data-id":"range-container-elem2-container"},{children:s})),e.jsx(Uf,{"data-id":"range-container-indicator",$position:n,$error:r,$wrap:a})]}))},qf=(e,t,n)=>{const r=[];e&&r.push(`[${e}]`),r.push(t,n),console.log(...r)},Xf=K.default(Sf)`
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
`,Zf={initialStart:"",initialEnd:"",selectedStart:"",selectedEnd:"",currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1,focused:!1},Qf=n=>{var{minDate:r,maxDate:i,disabled:a,disabledDates:o,error:s,hideInputKeyboard:l,value:c,valueEnd:d,onChange:u,onFocus:f,onBlur:h,onYearMonthDisplayChange:p,withButton:g=!0,variant:m="range",numberOfDays:b=7,readOnly:v,id:y,allowDisabledSelection:x,zIndex:w}=n,$=X(n,["minDate","maxDate","disabled","disabledDates","error","hideInputKeyboard","value","valueEnd","onChange","onFocus","onBlur","onYearMonthDisplayChange","withButton","variant","numberOfDays","readOnly","id","allowDisabledSelection","zIndex"]);const[j,S]=t.useState(),[k,O]=t.useState(void 0),[C,D]=t.useState(!1),[T,_]=t.useState(!1),E="week"===m,M="fixed-range"===m,[{selectedStart:I,selectedEnd:N,currentFocus:A,calendarOpen:R,isStartDirty:F,isEndDirty:B,focused:P},L]=(({initialState:e,reducers:n,name:r,debug:i})=>{const[a,o]=t.useReducer(((e,t)=>n[t.type]?n[t.type](e,t.payload):e),e);return[a,Object.fromEntries(Object.keys(n).map((e=>[e,t=>{i&&qf(r,e,t),o({type:e,payload:t})}])))]})({name:"date-range-input",initialState:Zf,reducers:{blur:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1,focused:!1}),dismiss:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),changeStart:(e,t)=>Object.assign(Object.assign({},e),{selectedStart:t,isStartDirty:!0}),changeEnd:(e,t)=>Object.assign(Object.assign({},e),{selectedEnd:t,isEndDirty:!0}),reselectStart:e=>Object.assign(Object.assign({},e),{selectedStart:"",currentFocus:"start"}),reselectEnd:e=>Object.assign(Object.assign({},e),{selectedEnd:"",currentFocus:"end"}),focus:(e,t)=>Object.assign(Object.assign({},e),{currentFocus:E?"none":M?"start":t,calendarOpen:!v,focused:!0}),cancel:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart,selectedEnd:e.initialEnd,currentFocus:"none",calendarOpen:!1}),done:(e,t)=>Object.assign(Object.assign({},e),{selectedStart:t.start,selectedEnd:t.end,initialStart:t.start,initialEnd:t.end,currentFocus:"none",calendarOpen:!1,isStartDirty:!1,isEndDirty:!1}),resetStart:e=>Object.assign(Object.assign({},e),{selectedStart:e.initialStart}),resetEnd:e=>Object.assign(Object.assign({},e),{selectedEnd:e.initialEnd}),resetRange:(e,t)=>Object.assign(Object.assign({},e),{initialStart:t.start,selectedStart:t.start,initialEnd:t.end,selectedEnd:t.end})}}),z=t.useRef(!1),H=t.useRef(),W=t.useRef(),V=t.useRef(),Y=t.useRef(),U=(({maxWidth:e,targetRef:n})=>{const[r,i]=t.useState(!1);return qe({targetRef:n,refreshMode:"throttle",refreshRate:300,handleHeight:!1,onResize:t.useCallback((t=>{i(t<=e)}),[e])}),r})({maxWidth:320,targetRef:H});t.useEffect((()=>{L.resetRange({start:lc.sanitizeInput(c),end:lc.sanitizeInput(d)})}),[c,d]),t.useEffect((()=>{"start"===A?S(I):"end"===A&&S(N)}),[A]);const K=e=>{"Enter"!==e.code||g||(I&&N?(L.done({start:I,end:N}),null==u||u(I,N)):(L.dismiss(),H.current.focus(),V.current.resetPlaceholder(),Y.current.resetPlaceholder()))},q=e=>{if(le(e))return void(z.current=!0);if(L.changeStart(e),W.current.setCalendarDate(e),z.current=!1,!e)return void(g||N||!B||(L.resetRange({start:"",end:""}),null==u||u("","")));if(!N)return void L.focus("end");if(Wl(e).isAfter(N,"day"))L.reselectEnd();else{if(B)return g?void 0:(L.done({start:e,end:N}),void(null==u||u(e,N)));L.focus("end")}},G=e=>{if(le(e))return void(z.current=!0);if(Wl(e).isBefore(I,"day"))return L.changeStart(e),W.current.setCalendarDate(e),void L.reselectEnd();if(L.changeEnd(e),W.current.setCalendarDate(e),e){if(I)return g?void 0:(L.done({start:I,end:e}),void(null==u||u(I,e)));L.focus("start")}else g||I||!F||(L.resetRange({start:"",end:""}),null==u||u("",""))},Z=e=>{if(le(e))return void(z.current=!0);if(L.changeStart(e),W.current.setCalendarDate(e),z.current=!1,!e)return void(g?L.changeEnd(""):(L.resetRange({start:"",end:""}),null==u||u("","")));const t=Wl(e).format("YYYY-MM-DD"),n=Wl(t).add(b-1,"day").format("YYYY-MM-DD");return L.changeStart(t),L.changeEnd(n),z.current=!1,g?void 0:(L.done({start:t,end:n}),void(null==u||u(t,n)))},Q=()=>{v||a||P||(L.focus("start"),null==f||f())},J=e=>{!P||R||H.current.contains(e.relatedTarget)||(L.blur(),D(!1),_(!1),V.current.resetPlaceholder(),Y.current.resetPlaceholder(),null==h||h())},ee=e=>t=>{t.stopPropagation(),v||(L.focus(e),te(),ne(),P||null==f||f())},te=()=>{if(E){const e=sc.toDayjs(I).startOf("week").format("YYYY-MM-DD");D(!0),_(!0),S(e)}},ne=()=>{M&&(_(!0),S(I))},re=e=>{e&&!z.current||(L.resetStart(),V.current.resetInput())},ie=e=>{e&&!z.current||(L.resetEnd(),Y.current.resetInput())},ae=e=>{switch(m){case"week":(e=>{const t=Wl(e).startOf("week").format("YYYY-MM-DD"),n=Wl(e).endOf("week").format("YYYY-MM-DD");if(L.changeStart(t),L.changeEnd(n),z.current=!1,!g)L.done({start:t,end:n}),null==u||u(t,n)})(e);break;case"fixed-range":Z(e);break;default:"start"===A?q(e):"end"===A&&G(e)}},oe=e=>{switch(H.current.focus(),e){case"reset":L.cancel();break;case"confirmed":L.done({start:I,end:N}),null==u||u(I,N)}},se=e=>{O(e)},le=e=>!x&&e&&lc.isDateDisabled(e,{disabledDates:o,minDate:r,maxDate:i}),ce=e=>{let t={start:void 0,end:void 0};switch(m){case"range":t={start:"start"===A?k:void 0,end:"end"===A?k:void 0};break;case"week":if(!k)return;t={start:Wl(k).startOf("week").format("YYYY-MM-DD"),end:Wl(k).endOf("week").format("YYYY-MM-DD")};break;case"fixed-range":if(!k)return;t={start:Wl(k).format("YYYY-MM-DD"),end:Wl(k).add(b-1,"day").format("YYYY-MM-DD")}}return t[e]};return e.jsx(vf,{enabled:!v&&!a,isOpen:R,onClose:()=>{L.blur(),D(!1),_(!1),V.current.resetPlaceholder(),Y.current.resetPlaceholder(),null==h||h()},onDismiss:()=>{L.dismiss(),H.current.focus(),V.current.resetPlaceholder(),Y.current.resetPlaceholder()},renderElement:()=>e.jsx(Xf,Object.assign({ref:H,tabIndex:-1,onFocus:Q,onBlur:J,$focused:P,$disabled:a,$readOnly:v,$error:s,$wrap:U,id:y,"data-testid":$["data-testid"],onKeyDown:K},$,{children:e.jsxs(Kf,Object.assign({currentActive:A,wrap:U,error:s},{children:[e.jsx(Gf,Object.assign({$wrap:U},{children:e.jsx(Af,{ref:V,placeholder:"From",names:["start-day","start-month","start-year"],value:I,disabled:a,readOnly:C||v,focused:"start"===A,hoverValue:ce("start"),onChange:M?Z:q,onFocus:ee("start"),onBlur:re,hideInputKeyboard:l})})),e.jsx(Gf,Object.assign({$wrap:U},{children:e.jsx(Af,{ref:Y,placeholder:"To",names:["end-day","end-month","end-year"],value:N,disabled:a,readOnly:T||v,focused:"end"===A,hoverValue:ce("end"),onChange:G,onFocus:ee("end"),onBlur:ie,hideInputKeyboard:l})}))]}))})),renderDropdown:({elementWidth:t})=>e.jsx(Dd,{ref:W,type:"input",variant:m,initialCalendarDate:j,withButton:g,value:I,endValue:N,selectWithinRange:F||B,currentFocus:A,disabledDates:o,minDate:r,maxDate:i,allowDisabledSelection:x,onSelect:ae,onDismiss:oe,onHover:se,onYearMonthDisplayChange:p,numberOfDays:b,width:t}),customZIndex:w,offset:16})},Jf=K.default.div`
    position: relative;
    ${e=>{const{$desktopStart:t,$desktopSpan:n,$tabletStart:r,$tabletSpan:a,$mobileStart:o,$mobileSpan:s}=e;return i.css`
            grid-column: ${t||"auto"} / span ${n||1};

            ${is.MaxWidth.tablet} {
                grid-column: ${r||"auto"} / span
                    ${a||1};
            }

            ${is.MaxWidth.mobileL} {
                grid-column: ${o||"auto"} / span
                    ${s||1};
            }
        `}}
`,eh=Y.default.forwardRef(((t,n)=>{const{mobileCols:r,tabletCols:i,desktopCols:a}=t,o=X(t,["mobileCols","tabletCols","desktopCols"]);return e.jsx(Jf,Object.assign({ref:n},(()=>{const e=i||r,t=r,n=th(a||i||r),o=th(e),s=th(t);return{$desktopSpan:n.span,$desktopStart:n.start,$mobileSpan:s.span,$mobileStart:s.start,$tabletSpan:o.span,$tabletStart:o.start}})(),o))})),th=e=>{if(Array.isArray(e)&&e.length>1){const[t,n]=e,r=t<=n?t:n,i=t<=n?n:t;let a;return a=i===r?1:i-r,{start:r,span:a}}return"number"==typeof e?{start:void 0,span:e}:{start:void 0,span:void 0}},nh=()=>e=>{let t;t=e.$color&&"function"==typeof e.$color?e.$color(e):e.$color||ts.Neutral[5](e);const n=encodeURIComponent(t),r=e.$thickness||1,a=r+1;return i.css`
        background-color: transparent;
        height: ${r}px;
        background-repeat: repeat-x;
        background-image: url('data:image/svg+xml,<svg width="8" height="${r}" viewBox="0 0 8 1" xmlns="http://www.w3.org/2000/svg"><line x1="2" y1="1" x2="6" y2="1" stroke="${n}" stroke-width="${a}" stroke-dasharray="4 4" /></svg>');
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
`,ah=K.default.div`
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
`,oh=({show:n=!1,rootId:r,onOverlayClick:i,children:a,backgroundOpacity:o,backgroundBlur:s=!0,disableTransition:l=!1,enableOverlayClick:c=!1,zIndex:d,id:u})=>{const[f,h]=t.useState(null),[p,m]=t.useState(),[b]=t.useState((()=>cc.generate())),v=g.useFloatingNodeId(),y=t.useRef(),x=t.useRef(null),w=a&&Y.default.cloneElement(a,{ref:x}),$=u?`lifesg-ds-overlay-root-${u}`:"lifesg-ds-overlay-root",j=null!=d?d:p?99999:99998;(e=>{const n=g.useFloatingTree();t.useEffect((()=>{if(!n)return;const t={zIndex:e};n.events.emit(pf.Change,t)}),[n,e]),t.useEffect((()=>{if(!n)return;const t=()=>{const t={zIndex:e};n.events.emit(pf.Change,t)};return null==n||n.events.on(pf.Ready,t),()=>null==n?void 0:n.events.off(pf.Ready,t)}),[n,e])})(j),t.useEffect((()=>(C(),h(k()),()=>{E(),T().length<1&&D("remove")})),[]),t.useEffect((()=>{if(n){const e=O();S(e),_();const t=setTimeout((()=>{D("add")}),200);return()=>clearTimeout(t)}{E();const e=setTimeout((()=>{T().length<1&&D("remove")}),200);return()=>clearTimeout(e)}}),[n]);const S=e=>{y.current=e,m(e)},k=()=>document&&r?document.getElementById(r):document?document.body:null,O=()=>T().length>0,C=()=>{if(!document.getElementById(lh)){const e=document.createElement("style");e.id=lh;const t=document.documentElement.clientWidth,n=window.innerWidth-t;e.innerHTML=`\n\t\t\t\t.${ch} {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tpadding-right: ${n}px !important;\n\t\t\t\t\t-ms-overflow-style: none;\n\t\t\t\t\tscrollbar-width: none;\n\t\t\t\t}\n\n\t\t\t\t.${ch}::-webkit-scrollbar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t`,document.body.appendChild(e)}},D=e=>{const t=document.body.classList.contains(ch);"add"!==e||t?"remove"===e&&t&&document.body.classList.remove(ch):document.body.classList.add(ch)},T=()=>{const e=document.body.dataset.lifesgDsOverlayOrder;return e?e.split(","):[]},_=()=>{const e=T();document.body.dataset.lifesgDsOverlayOrder=[...e,b].join(",")},E=()=>{const e=T();document.body.dataset.lifesgDsOverlayOrder=e.filter((e=>e!==b)).join(",")},M=e=>{var t;const n=null===(t=x.current)||void 0===t?void 0:t.firstChild;n&&n.contains(e.target)||i&&c&&(e.preventDefault(),i())};return f?U.default.createPortal(e.jsx(ih,Object.assign({id:$,"data-testid":$,$show:n,$zIndex:j},{children:a&&e.jsx(g.FloatingNode,Object.assign({id:v},{children:e.jsx(ah,Object.assign({"data-testid":"overlay-wrapper",$show:n,$backgroundOpacity:o||(p?.5:.8),$backgroundBlur:s,$disableTransition:l,onClick:M},{children:w}))}))})),f):null},sh=t=>e.jsx(g.FloatingTree,{children:e.jsx(oh,Object.assign({},t))}),lh="lifesg-ds-overlay-stylesheet",ch="lifesg-ds-overlay-open",dh=K.default.div`
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
`,vh=Y.default.forwardRef(((t,n)=>{var{"data-testid":r,styleType:i="primary",children:a,sizeType:o="default",type:s="button"}=t,l=X(t,["data-testid","styleType","children","sizeType","type"]);return e.jsx(bh,Object.assign({"data-testid":r||"iconButton",ref:n,type:s,$sizeType:o,$styleType:i},l,{children:a}))})),yh=K.default.div`
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
`,xh=n=>{var{id:r="modal",show:i,animationFrom:a="bottom",children:o,enableOverlayClick:s=!0,rootComponentId:l,zIndex:c,onOverlayClick:d,dismissKeyboardOnShow:u=!0}=n,f=X(n,["id","show","animationFrom","children","enableOverlayClick","rootComponentId","zIndex","onOverlayClick","dismissKeyboardOnShow"]);const[h,p]=t.useState(),[g,m]=t.useState();t.useEffect((()=>window.visualViewport?(v(),window.visualViewport.addEventListener("resize",v),()=>{window.visualViewport.removeEventListener("resize",v)}):(b(),window.addEventListener("resize",b),()=>{window.removeEventListener("resize",b)})),[]),t.useEffect((()=>{var e,t;i&&u&&(null===(t=null===(e=document.activeElement)||void 0===e?void 0:e.blur)||void 0===t||t.call(e))}),[i]);const b=()=>{const e=.01*window.innerHeight;p(e)},v=()=>{const e=.01*window.visualViewport.height;p(e),m(window.visualViewport.offsetTop)};return e.jsx(sh,Object.assign({"data-testid":`${r}-overlay`,show:i,enableOverlayClick:s,onOverlayClick:d,id:r,rootId:l,zIndex:c},{children:e.jsx(yh,Object.assign({show:i,animationFrom:a,"data-testid":r,verticalHeight:h,offsetTop:g},f,{children:o}))}))},wh=K.default.div`
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
`,jh=t=>{var{id:n="modal-box",children:r,onClose:i,showCloseButton:a=!0}=t,o=X(t,["id","children","onClose","showCloseButton"]);return e.jsxs(wh,Object.assign({"data-testid":n},o,{onClick:e=>{e.stopPropagation()}},{children:[a&&e.jsx($h,Object.assign({onClick:i,"data-testid":"close-button",focusHighlight:!1},{children:e.jsx(m.CrossIcon,{})})),r]}))},Sh=Object.assign(xh,{Box:jh}),kh=` ${is.MaxWidth.mobileL}, (orientation: landscape) and (max-height: ${as.mobileL}px)`,Oh=`@media(orientation: landscape) and (max-height: ${as.mobileL}px)`,Ch=K.default.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: ${e=>`url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='4' ry='4' stroke='${encodeURIComponent(ts.Neutral[5](e))}' stroke-width='4' stroke-dasharray='8%2c 8' stroke-dashoffset='8' stroke-linecap='round'/%3e%3c/svg%3e");`};
    background-color: ${ts.Neutral[8]};
    border-radius: 4px;
    height: 14.125rem;
`,Dh=K.default(qs.Default)`
    width: fit-content;
    padding: 0 2rem;
    margin: 0 2rem;
`,Th=K.default(vh)`
    position: absolute;
    top: 1rem;
    right: 1rem;
`,_h=K.default.img`
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
`,Mh=K.default(exports.Text.H6)`
    margin-top: 1rem;
`,Ih=K.default(Sh)`
    /* increase specificity as the styles are overwritten */
    && {
        height: 100%;
        overflow-y: auto;
    }
`,Nh=K.default.div`
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
`,Rh=K.default.h4`
    ${ys.getTextStyle("H4","semibold")}
    margin-bottom: 1rem;
    color: ${ts.Neutral[1]};
    text-align: center;

    ${kh} {
        ${ys.getTextStyle("H5","semibold")}
        margin: 0.75rem 0;
    }
`,Fh=K.default.div`
    width: 100%;
    height: 20rem;
    border-radius: 12px;
    overflow: hidden;

    ${kh} {
        border-radius: 0;
        flex: 1;
    }

    ${Oh} {
        background: ${ts.Neutral[7]};
    }
`,Bh=K.default.div`
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
    ${Oh} {
        width: auto;
        height: 100%;
    }
`,Ph=K.default.div`
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
`,Lh=K.default.div`
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;

    ${is.MaxWidth.mobileL} {
        flex-direction: column-reverse;
        margin: 1rem 1.25rem 3rem;
        gap: 1rem;
    }

    ${Oh} {
        flex-direction: row;
        margin: 1rem 1.25rem 1rem;
    }
`,zh=K.default(qs.Default)`
    width: 8.5rem;
    ${is.MaxWidth.mobileL} {
        width: 100%;
    }
    ${Oh} {
        height: 2.5rem;
    }
`,Hh=K.default.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`,Wh=K.default.canvas`
    cursor: crosshair;
`,Vh=t.lazy((()=>G(void 0,void 0,void 0,(function*(){return{default:(yield Promise.resolve().then((function(){return require("./e-signature-canvas.7fe8b2a6.js")}))).ESignatureCanvas}})))),Yh=n=>{const{description:r,id:i,loadingProgress:a,loadingLabel:o="Uploading...",onChange:s,value:l}=n,c=X(n,["description","id","loadingProgress","loadingLabel","onChange","value"]),[d,f]=t.useState(!1),h=t.useRef(null),[p,g]=t.useState(l),m=Dl.useMediaQuery({maxWidth:as.mobileL}),b=()=>{h.current.clear()},v=()=>{const e=h.current.export();g(e),f(!1),null==s||s(e)};t.useEffect((()=>{g(l)}),[l]);return e.jsxs("div",Object.assign({},c,{children:[e.jsx(Ch,{children:isNaN(a)?p?e.jsxs(e.Fragment,{children:[e.jsx(_h,{src:p,alt:"Signature preview"}),e.jsx(Th,Object.assign({styleType:"light",onClick:()=>f(!0),id:i,"aria-label":"Edit signature"},{children:e.jsx(u.PencilIcon,{})}))]}):e.jsx(Dh,Object.assign({type:"button",styleType:"secondary","aria-label":"Add signature",id:i,onClick:()=>f(!0)},{children:"Add signature"})):e.jsxs(Eh,{children:[o&&e.jsx(exports.Text.BodySmall,{children:o}),e.jsx(gh,{progress:a,"data-testid":`${i||"e-signature"}-progress-bar`})]})}),e.jsx(Ih,Object.assign({"data-testid":"signature-modal",show:d},{children:e.jsx(Nh,{children:e.jsxs(Ah,Object.assign({onClose:()=>f(!1)},{children:[e.jsx(Rh,{children:"Signature"}),e.jsx(Fh,{children:e.jsxs(Bh,{children:[e.jsx(Ph,{}),e.jsx(t.Suspense,Object.assign({fallback:null},{children:d&&e.jsx(Vh,{ref:h,baseImageDataURL:p})}))]})}),e.jsxs(Lh,{children:[e.jsx(zh,Object.assign({as:Oc.Default,type:"button",styleType:m?"light":"link",icon:e.jsx(u.EraserIcon,{}),onClick:b},{children:"Clear"})),e.jsx(zh,Object.assign({type:"button",onClick:v},{children:"Save"}))]})]}))})})),r?e.jsx(Mh,Object.assign({weight:"regular",as:"p"},{children:r})):null]}))},Uh="https://assets.life.gov.sg/react-design-system/img/feedback-rating/feedback-rating-banner.png",Kh="Submit",qh="Rate your experience",Xh=5,Gh=K.default.input`
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
`,np=t=>{const{description:n,rating:r,onRatingChange:i}=t,a=t=>{const n=`${t} star${1===t?"":"s"}`;return t<=r?e.jsx(Jh,{"aria-label":n}):e.jsx(Qh,{"aria-label":n})};return e.jsx(tp,Object.assign({role:"radiogroup","aria-label":n},{children:[...Array(Xh)].map(((t,n)=>{const o=n+1;return e.jsxs(ep,{children:[e.jsx(Gh,{type:"radio",name:"star",checked:o===r,onChange:()=>(e=>{i(e)})(o)}),a(o)]},o)}))}))},rp=K.default.img`
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
`,ap=K.default.div`
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
`,op=K.default(qs.Default)`
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
`,Op=K.default(zs)`
    ${e=>{let t=ts.Primary(e);switch(e.$buttonStyle){case"secondary":case"light":case"link":break;case"disabled":t=ts.Neutral[3](e);break;default:t=ts.Neutral[8](e)}return i.css`
            #inner1,
            #inner2,
            #inner3,
            #inner4 {
                border-color: ${t} transparent transparent transparent;
            }
        `}}
`,Cp=K.default.div`
    width: 6rem;
    margin-left: 2rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    ${is.MaxWidth.mobileL} {
        width: fit-content;
        margin-left: 1rem;
    }
`,Dp=K.default(vh)`
    min-width: unset;

    :not(:last-child) {
        margin-right: 1rem;
    }
`,Tp=K.default.div`
    width: auto;
    margin-right: 2rem;
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: center;
    ${is.MaxWidth.mobileL} {
        margin-right: 1rem;
    }
`,_p=K.default(gp)`
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
`,Ep=t.memo((({fileItem:n,onDownload:r})=>{const{id:i,name:a,size:o,errorMessage:s,thumbnailImageDataUrl:l,truncateText:c=!0,ready:d=!0}=n,[f,h]=t.useState(!1),[p,g]=t.useState(!1),m=pp.formatFileSizeDisplay(o),b=Dl.useMediaQuery({maxWidth:as.mobileL}),[v,y]=t.useState(),x=t.useRef();t.useEffect((()=>{x.current&&y(b?w(a):a)}),[a,b]);const w=e=>{if(!c)return e;const t=x&&x.current?x.current.getBoundingClientRect().width:0;return dc.truncateTwoLines(e,t,16,1.5)},$=()=>e.jsxs(e.Fragment,{children:[e.jsx($p,Object.assign({weight:"regular",ref:x},{children:v})),p&&e.jsx(Sp,Object.assign({weight:"semibold"},{children:s||"Something went wrong"}))]});return e.jsx(mp,Object.assign({"data-testid":i},{children:e.jsxs(bp,Object.assign({onClick:()=>G(void 0,void 0,void 0,(function*(){if(d&&!f){h(!0);try{g(!1),yield r(n)}catch(e){g(!0)}finally{h(!1)}}}))},{children:[(()=>{let t;return t=l?e.jsxs(e.Fragment,{children:[e.jsx(Tp,Object.assign({"data-testid":`${i}-thumbnail`},{children:e.jsx(_p,{"data-testid":`${i}-thumbnail-image`,src:l})})),e.jsxs(xp,{children:[e.jsx(yp,{children:$()}),e.jsx(wp,{children:e.jsx($p,{children:m||"-"})}),p&&e.jsx(kp,Object.assign({weight:"semibold"},{children:s||"Something went wrong"}))]})]}):e.jsxs(e.Fragment,{children:[e.jsx(yp,{children:$()}),e.jsx(wp,{children:e.jsx($p,{children:m||"-"})}),p&&e.jsx(kp,Object.assign({weight:"semibold"},{children:s||"Something went wrong"}))]}),e.jsx(vp,Object.assign({$hasThumbnail:!!l},{children:t}))})(),e.jsx(Cp,{children:e.jsx(Dp,Object.assign({"data-testid":`${i}-download-button`,type:"button",styleType:"light",sizeType:"small","aria-label":`download ${a}`},{children:f||!d?e.jsx(Op,{$buttonStyle:"light",$buttonSizeStyle:"small",size:16,"aria-hidden":!0}):e.jsx(u.DownloadIcon,{"aria-hidden":!0})}))})]}))}))})),Mp={activeId:void 0,setActiveId:void 0},Ip=t.createContext(Mp);var Np,Ap={exports:{}},Rp={exports:{}},Fp={};var Bp,Pp,Lp,zp,Hp,Wp,Vp,Yp,Up,Kp,qp,Xp,Gp,Zp,Qp={};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Jp(){return Pp||(Pp=1,"production"===process.env.NODE_ENV?Rp.exports=function(){if(Np)return Fp;Np=1;var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,r=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,o=e?Symbol.for("react.provider"):60109,s=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,u=e?Symbol.for("react.suspense"):60113,f=e?Symbol.for("react.suspense_list"):60120,h=e?Symbol.for("react.memo"):60115,p=e?Symbol.for("react.lazy"):60116,g=e?Symbol.for("react.block"):60121,m=e?Symbol.for("react.fundamental"):60117,b=e?Symbol.for("react.responder"):60118,v=e?Symbol.for("react.scope"):60119;function y(e){if("object"==typeof e&&null!==e){var f=e.$$typeof;switch(f){case t:switch(e=e.type){case l:case c:case r:case a:case i:case u:return e;default:switch(e=e&&e.$$typeof){case s:case d:case p:case h:case o:return e;default:return f}}case n:return f}}}function x(e){return y(e)===c}return Fp.AsyncMode=l,Fp.ConcurrentMode=c,Fp.ContextConsumer=s,Fp.ContextProvider=o,Fp.Element=t,Fp.ForwardRef=d,Fp.Fragment=r,Fp.Lazy=p,Fp.Memo=h,Fp.Portal=n,Fp.Profiler=a,Fp.StrictMode=i,Fp.Suspense=u,Fp.isAsyncMode=function(e){return x(e)||y(e)===l},Fp.isConcurrentMode=x,Fp.isContextConsumer=function(e){return y(e)===s},Fp.isContextProvider=function(e){return y(e)===o},Fp.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},Fp.isForwardRef=function(e){return y(e)===d},Fp.isFragment=function(e){return y(e)===r},Fp.isLazy=function(e){return y(e)===p},Fp.isMemo=function(e){return y(e)===h},Fp.isPortal=function(e){return y(e)===n},Fp.isProfiler=function(e){return y(e)===a},Fp.isStrictMode=function(e){return y(e)===i},Fp.isSuspense=function(e){return y(e)===u},Fp.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===r||e===c||e===a||e===i||e===u||e===f||"object"==typeof e&&null!==e&&(e.$$typeof===p||e.$$typeof===h||e.$$typeof===o||e.$$typeof===s||e.$$typeof===d||e.$$typeof===m||e.$$typeof===b||e.$$typeof===v||e.$$typeof===g)},Fp.typeOf=y,Fp}():Rp.exports=(Bp||(Bp=1,"production"!==process.env.NODE_ENV&&function(){var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,r=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,o=e?Symbol.for("react.provider"):60109,s=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,u=e?Symbol.for("react.suspense"):60113,f=e?Symbol.for("react.suspense_list"):60120,h=e?Symbol.for("react.memo"):60115,p=e?Symbol.for("react.lazy"):60116,g=e?Symbol.for("react.block"):60121,m=e?Symbol.for("react.fundamental"):60117,b=e?Symbol.for("react.responder"):60118,v=e?Symbol.for("react.scope"):60119;function y(e){if("object"==typeof e&&null!==e){var f=e.$$typeof;switch(f){case t:var g=e.type;switch(g){case l:case c:case r:case a:case i:case u:return g;default:var m=g&&g.$$typeof;switch(m){case s:case d:case p:case h:case o:return m;default:return f}}case n:return f}}}var x=l,w=c,$=s,j=o,S=t,k=d,O=r,C=p,D=h,T=n,_=a,E=i,M=u,I=!1;function N(e){return y(e)===c}Qp.AsyncMode=x,Qp.ConcurrentMode=w,Qp.ContextConsumer=$,Qp.ContextProvider=j,Qp.Element=S,Qp.ForwardRef=k,Qp.Fragment=O,Qp.Lazy=C,Qp.Memo=D,Qp.Portal=T,Qp.Profiler=_,Qp.StrictMode=E,Qp.Suspense=M,Qp.isAsyncMode=function(e){return I||(I=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),N(e)||y(e)===l},Qp.isConcurrentMode=N,Qp.isContextConsumer=function(e){return y(e)===s},Qp.isContextProvider=function(e){return y(e)===o},Qp.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},Qp.isForwardRef=function(e){return y(e)===d},Qp.isFragment=function(e){return y(e)===r},Qp.isLazy=function(e){return y(e)===p},Qp.isMemo=function(e){return y(e)===h},Qp.isPortal=function(e){return y(e)===n},Qp.isProfiler=function(e){return y(e)===a},Qp.isStrictMode=function(e){return y(e)===i},Qp.isSuspense=function(e){return y(e)===u},Qp.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===r||e===c||e===a||e===i||e===u||e===f||"object"==typeof e&&null!==e&&(e.$$typeof===p||e.$$typeof===h||e.$$typeof===o||e.$$typeof===s||e.$$typeof===d||e.$$typeof===m||e.$$typeof===b||e.$$typeof===v||e.$$typeof===g)},Qp.typeOf=y}()),Qp)),Rp.exports}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/function eg(){if(zp)return Lp;zp=1;var e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;return Lp=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map((function(e){return t[e]}));if("0123456789"!==r.join(""))return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach((function(e){i[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},i)).join("")}catch(e){return!1}}()?Object.assign:function(r,i){for(var a,o,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(r),l=1;l<arguments.length;l++){for(var c in a=Object(arguments[l]))t.call(a,c)&&(s[c]=a[c]);if(e){o=e(a);for(var d=0;d<o.length;d++)n.call(a,o[d])&&(s[o[d]]=a[o[d]])}}return s},Lp}function tg(){if(Wp)return Hp;Wp=1;return Hp="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}function ng(){return Yp?Vp:(Yp=1,Vp=Function.call.bind(Object.prototype.hasOwnProperty))}if("production"!==process.env.NODE_ENV){var rg=Jp();Ap.exports=function(){if(Xp)return qp;Xp=1;var e=Jp(),t=eg(),n=tg(),r=ng(),i=function(){if(Kp)return Up;Kp=1;var e=function(){};if("production"!==process.env.NODE_ENV){var t=tg(),n={},r=ng();e=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}}function i(i,a,o,s,l){if("production"!==process.env.NODE_ENV)for(var c in i)if(r(i,c)){var d;try{if("function"!=typeof i[c]){var u=Error((s||"React class")+": "+o+" type `"+c+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof i[c]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw u.name="Invariant Violation",u}d=i[c](a,c,s,o,null,t)}catch(e){d=e}if(!d||d instanceof Error||e((s||"React class")+": type specification of "+o+" `"+c+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof d+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),d instanceof Error&&!(d.message in n)){n[d.message]=!0;var f=l?l():"";e("Failed "+o+" type: "+d.message+(null!=f?f:""))}}}return i.resetWarningCache=function(){"production"!==process.env.NODE_ENV&&(n={})},Up=i}(),a=function(){};function o(){return null}return"production"!==process.env.NODE_ENV&&(a=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}}),qp=function(s,l){var c="function"==typeof Symbol&&Symbol.iterator,d="@@iterator",u="<<anonymous>>",f={array:m("array"),bigint:m("bigint"),bool:m("boolean"),func:m("function"),number:m("number"),object:m("object"),string:m("string"),symbol:m("symbol"),any:g(o),arrayOf:function(e){return g((function(t,r,i,a,o){if("function"!=typeof e)return new p("Property `"+o+"` of component `"+i+"` has invalid PropType notation inside arrayOf.");var s=t[r];if(!Array.isArray(s))return new p("Invalid "+a+" `"+o+"` of type `"+y(s)+"` supplied to `"+i+"`, expected an array.");for(var l=0;l<s.length;l++){var c=e(s,l,i,a,o+"["+l+"]",n);if(c instanceof Error)return c}return null}))},element:g((function(e,t,n,r,i){var a=e[t];return s(a)?null:new p("Invalid "+r+" `"+i+"` of type `"+y(a)+"` supplied to `"+n+"`, expected a single ReactElement.")})),elementType:g((function(t,n,r,i,a){var o=t[n];return e.isValidElementType(o)?null:new p("Invalid "+i+" `"+a+"` of type `"+y(o)+"` supplied to `"+r+"`, expected a single ReactElement type.")})),instanceOf:function(e){return g((function(t,n,r,i,a){if(!(t[n]instanceof e)){var o=e.name||u;return new p("Invalid "+i+" `"+a+"` of type `"+((s=t[n]).constructor&&s.constructor.name?s.constructor.name:u)+"` supplied to `"+r+"`, expected instance of `"+o+"`.")}var s;return null}))},node:g((function(e,t,n,r,i){return v(e[t])?null:new p("Invalid "+r+" `"+i+"` supplied to `"+n+"`, expected a ReactNode.")})),objectOf:function(e){return g((function(t,i,a,o,s){if("function"!=typeof e)return new p("Property `"+s+"` of component `"+a+"` has invalid PropType notation inside objectOf.");var l=t[i],c=y(l);if("object"!==c)return new p("Invalid "+o+" `"+s+"` of type `"+c+"` supplied to `"+a+"`, expected an object.");for(var d in l)if(r(l,d)){var u=e(l,d,a,o,s+"."+d,n);if(u instanceof Error)return u}return null}))},oneOf:function(e){return Array.isArray(e)?g((function(t,n,r,i,a){for(var o=t[n],s=0;s<e.length;s++)if(h(o,e[s]))return null;var l=JSON.stringify(e,(function(e,t){return"symbol"===x(t)?String(t):t}));return new p("Invalid "+i+" `"+a+"` of value `"+String(o)+"` supplied to `"+r+"`, expected one of "+l+".")})):("production"!==process.env.NODE_ENV&&a(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),o)},oneOfType:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&a("Invalid argument supplied to oneOfType, expected an instance of array."),o;for(var t=0;t<e.length;t++){var i=e[t];if("function"!=typeof i)return a("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+w(i)+" at index "+t+"."),o}return g((function(t,i,a,o,s){for(var l=[],c=0;c<e.length;c++){var d=(0,e[c])(t,i,a,o,s,n);if(null==d)return null;d.data&&r(d.data,"expectedType")&&l.push(d.data.expectedType)}return new p("Invalid "+o+" `"+s+"` supplied to `"+a+"`"+(l.length>0?", expected one of type ["+l.join(", ")+"]":"")+".")}))},shape:function(e){return g((function(t,r,i,a,o){var s=t[r],l=y(s);if("object"!==l)return new p("Invalid "+a+" `"+o+"` of type `"+l+"` supplied to `"+i+"`, expected `object`.");for(var c in e){var d=e[c];if("function"!=typeof d)return b(i,a,o,c,x(d));var u=d(s,c,i,a,o+"."+c,n);if(u)return u}return null}))},exact:function(e){return g((function(i,a,o,s,l){var c=i[a],d=y(c);if("object"!==d)return new p("Invalid "+s+" `"+l+"` of type `"+d+"` supplied to `"+o+"`, expected `object`.");var u=t({},i[a],e);for(var f in u){var h=e[f];if(r(e,f)&&"function"!=typeof h)return b(o,s,l,f,x(h));if(!h)return new p("Invalid "+s+" `"+l+"` key `"+f+"` supplied to `"+o+"`.\nBad object: "+JSON.stringify(i[a],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var g=h(c,f,o,s,l+"."+f,n);if(g)return g}return null}))}};function h(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function p(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function g(e){if("production"!==process.env.NODE_ENV)var t={},r=0;function i(i,o,s,c,d,f,h){if(c=c||u,f=f||s,h!==n){if(l){var g=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw g.name="Invariant Violation",g}if("production"!==process.env.NODE_ENV&&"undefined"!=typeof console){var m=c+":"+s;!t[m]&&r<3&&(a("You are manually calling a React.PropTypes validation function for the `"+f+"` prop on `"+c+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),t[m]=!0,r++)}}return null==o[s]?i?null===o[s]?new p("The "+d+" `"+f+"` is marked as required in `"+c+"`, but its value is `null`."):new p("The "+d+" `"+f+"` is marked as required in `"+c+"`, but its value is `undefined`."):null:e(o,s,c,d,f)}var o=i.bind(null,!1);return o.isRequired=i.bind(null,!0),o}function m(e){return g((function(t,n,r,i,a,o){var s=t[n];return y(s)!==e?new p("Invalid "+i+" `"+a+"` of type `"+x(s)+"` supplied to `"+r+"`, expected `"+e+"`.",{expectedType:e}):null}))}function b(e,t,n,r,i){return new p((e||"React class")+": "+t+" type `"+n+"."+r+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+i+"`.")}function v(e){switch(typeof e){case"number":case"string":case"undefined":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(v);if(null===e||s(e))return!0;var t=function(e){var t=e&&(c&&e[c]||e[d]);if("function"==typeof t)return t}(e);if(!t)return!1;var n,r=t.call(e);if(t!==e.entries){for(;!(n=r.next()).done;)if(!v(n.value))return!1}else for(;!(n=r.next()).done;){var i=n.value;if(i&&!v(i[1]))return!1}return!0;default:return!1}}function y(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function x(e){if(null==e)return""+e;var t=y(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function w(e){var t=x(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return p.prototype=Error.prototype,f.checkPropTypes=i,f.resetWarningCache=i.resetWarningCache,f.PropTypes=f,f},qp}()(rg.isElement,!0)}else Ap.exports=function(){if(Zp)return Gp;Zp=1;var e=tg();function t(){}function n(){}return n.resetWarningCache=t,Gp=function(){function r(t,n,r,i,a,o){if(o!==e){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function i(){return r}r.isRequired=r;var a={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:i,element:r,elementType:r,instanceOf:i,node:r,objectOf:i,oneOf:i,oneOfType:i,shape:i,exact:i,checkPropTypes:n,resetWarningCache:t};return a.PropTypes=a,a}}()();var ig=_i(Ap.exports),ag=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function og(e,t){var n=function(e){var t=e.name;if(t&&-1!==t.lastIndexOf(".")&&!e.type){var n=t.split(".").pop().toLowerCase(),r=ag.get(n);r&&Object.defineProperty(e,"type",{value:r,writable:!1,configurable:!1,enumerable:!0})}return e}(e);if("string"!=typeof n.path){var r=e.webkitRelativePath;Object.defineProperty(n,"path",{value:"string"==typeof t?t:"string"==typeof r&&r.length>0?r:e.name,writable:!1,configurable:!1,enumerable:!0})}return n}var sg=[".DS_Store","Thumbs.db"];function lg(e){return"object"==typeof e&&null!==e}function cg(e){return hg(e.target.files).map((function(e){return og(e)}))}function dg(e){return G(this,void 0,void 0,(function(){return Z(this,(function(t){switch(t.label){case 0:return[4,Promise.all(e.map((function(e){return e.getFile()})))];case 1:return[2,t.sent().map((function(e){return og(e)}))]}}))}))}function ug(e,t){return G(this,void 0,void 0,(function(){var n;return Z(this,(function(r){switch(r.label){case 0:return e.items?(n=hg(e.items).filter((function(e){return"file"===e.kind})),"drop"!==t?[2,n]:[4,Promise.all(n.map(pg))]):[3,2];case 1:return[2,fg(gg(r.sent()))];case 2:return[2,fg(hg(e.files).map((function(e){return og(e)})))]}}))}))}function fg(e){return e.filter((function(e){return-1===sg.indexOf(e.name)}))}function hg(e){if(null===e)return[];for(var t=[],n=0;n<e.length;n++){var r=e[n];t.push(r)}return t}function pg(e){if("function"!=typeof e.webkitGetAsEntry)return mg(e);var t=e.webkitGetAsEntry();return t&&t.isDirectory?vg(t):mg(e)}function gg(e){return e.reduce((function(e,t){return J(J([],Q(e),!1),Q(Array.isArray(t)?gg(t):[t]),!1)}),[])}function mg(e){var t=e.getAsFile();if(!t)return Promise.reject("".concat(e," is not a File"));var n=og(t);return Promise.resolve(n)}function bg(e){return G(this,void 0,void 0,(function(){return Z(this,(function(t){return[2,e.isDirectory?vg(e):yg(e)]}))}))}function vg(e){var t=e.createReader();return new Promise((function(e,n){var r=[];!function i(){var a=this;t.readEntries((function(t){return G(a,void 0,void 0,(function(){var a,o,s;return Z(this,(function(l){switch(l.label){case 0:if(t.length)return[3,5];l.label=1;case 1:return l.trys.push([1,3,,4]),[4,Promise.all(r)];case 2:return a=l.sent(),e(a),[3,4];case 3:return o=l.sent(),n(o),[3,4];case 4:return[3,6];case 5:s=Promise.all(t.map(bg)),r.push(s),i(),l.label=6;case 6:return[2]}}))}))}),(function(e){n(e)}))}()}))}function yg(e){return G(this,void 0,void 0,(function(){return Z(this,(function(t){return[2,new Promise((function(t,n){e.file((function(n){var r=og(n,e.fullPath);t(r)}),(function(e){n(e)}))}))]}))}))}var xg=function(e,t){if(e&&t){var n=Array.isArray(t)?t:t.split(","),r=e.name||"",i=(e.type||"").toLowerCase(),a=i.replace(/\/.*$/,"");return n.some((function(e){var t=e.trim().toLowerCase();return"."===t.charAt(0)?r.toLowerCase().endsWith(t):t.endsWith("/*")?a===t.replace(/\/.*$/,""):i===t}))}return!0};function wg(e){return function(e){if(Array.isArray(e))return Cg(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Og(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function $g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function jg(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?$g(Object(n),!0).forEach((function(t){Sg(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Sg(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function kg(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,i,a=[],o=!0,s=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);o=!0);}catch(e){s=!0,i=e}finally{try{o||null==n.return||n.return()}finally{if(s)throw i}}return a}(e,t)||Og(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Og(e,t){if(e){if("string"==typeof e)return Cg(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Cg(e,t):void 0}}function Cg(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Dg=function(e){e=Array.isArray(e)&&1===e.length?e[0]:e;var t=Array.isArray(e)?"one of ".concat(e.join(", ")):e;return{code:"file-invalid-type",message:"File type must be ".concat(t)}},Tg=function(e){return{code:"file-too-large",message:"File is larger than ".concat(e," ").concat(1===e?"byte":"bytes")}},_g=function(e){return{code:"file-too-small",message:"File is smaller than ".concat(e," ").concat(1===e?"byte":"bytes")}},Eg={code:"too-many-files",message:"Too many files"};function Mg(e,t){var n="application/x-moz-file"===e.type||xg(e,t);return[n,n?null:Dg(t)]}function Ig(e,t,n){if(Ng(e.size))if(Ng(t)&&Ng(n)){if(e.size>n)return[!1,Tg(n)];if(e.size<t)return[!1,_g(t)]}else{if(Ng(t)&&e.size<t)return[!1,_g(t)];if(Ng(n)&&e.size>n)return[!1,Tg(n)]}return[!0,null]}function Ng(e){return null!=e}function Ag(e){return"function"==typeof e.isPropagationStopped?e.isPropagationStopped():void 0!==e.cancelBubble&&e.cancelBubble}function Rg(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,(function(e){return"Files"===e||"application/x-moz-file"===e})):!!e.target&&!!e.target.files}function Fg(e){e.preventDefault()}function Bg(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return t.some((function(t){return!Ag(e)&&t&&t.apply(void 0,[e].concat(r)),Ag(e)}))}}function Pg(e){return"audio/*"===e||"video/*"===e||"image/*"===e||"text/*"===e||/\w+\/[-+.\w]+/g.test(e)}function Lg(e){return/^.*\.[\w]+$/.test(e)}var zg=["children"],Hg=["open"],Wg=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],Vg=["refKey","onChange","onClick"];function Yg(e){return function(e){if(Array.isArray(e))return qg(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Kg(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Ug(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,i,a=[],o=!0,s=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);o=!0);}catch(e){s=!0,i=e}finally{try{o||null==n.return||n.return()}finally{if(s)throw i}}return a}(e,t)||Kg(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Kg(e,t){if(e){if("string"==typeof e)return qg(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?qg(e,t):void 0}}function qg(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Xg(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Gg(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Xg(Object(n),!0).forEach((function(t){Zg(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Xg(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Zg(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Qg(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var Jg=t.forwardRef((function(e,n){var r=e.children,i=nm(Qg(e,zg)),a=i.open,o=Qg(i,Hg);return t.useImperativeHandle(n,(function(){return{open:a}}),[a]),Y.default.createElement(t.Fragment,null,r(Gg(Gg({},o),{},{open:a})))}));Jg.displayName="Dropzone";var em={disabled:!1,getFilesFromEvent:function(e){return G(this,void 0,void 0,(function(){return Z(this,(function(t){return lg(e)&&lg(e.dataTransfer)?[2,ug(e.dataTransfer,e.type)]:function(e){return lg(e)&&lg(e.target)}(e)?[2,cg(e)]:Array.isArray(e)&&e.every((function(e){return"getFile"in e&&"function"==typeof e.getFile}))?[2,dg(e)]:[2,[]]}))}))},maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};Jg.defaultProps=em,Jg.propTypes={children:ig.func,accept:ig.objectOf(ig.arrayOf(ig.string)),multiple:ig.bool,preventDropOnDocument:ig.bool,noClick:ig.bool,noKeyboard:ig.bool,noDrag:ig.bool,noDragEventsBubbling:ig.bool,minSize:ig.number,maxSize:ig.number,maxFiles:ig.number,disabled:ig.bool,getFilesFromEvent:ig.func,onFileDialogCancel:ig.func,onFileDialogOpen:ig.func,useFsAccessApi:ig.bool,autoFocus:ig.bool,onDragEnter:ig.func,onDragLeave:ig.func,onDragOver:ig.func,onDrop:ig.func,onDropAccepted:ig.func,onDropRejected:ig.func,onError:ig.func,validator:ig.func};var tm={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function nm(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Gg(Gg({},em),e),r=n.accept,i=n.disabled,a=n.getFilesFromEvent,o=n.maxSize,s=n.minSize,l=n.multiple,c=n.maxFiles,d=n.onDragEnter,u=n.onDragLeave,f=n.onDragOver,h=n.onDrop,p=n.onDropAccepted,g=n.onDropRejected,m=n.onFileDialogCancel,b=n.onFileDialogOpen,v=n.useFsAccessApi,y=n.autoFocus,x=n.preventDropOnDocument,w=n.noClick,$=n.noKeyboard,j=n.noDrag,S=n.noDragEventsBubbling,k=n.onError,O=n.validator,C=t.useMemo((function(){return function(e){if(Ng(e))return Object.entries(e).reduce((function(e,t){var n=kg(t,2),r=n[0],i=n[1];return[].concat(wg(e),[r],wg(i))}),[]).filter((function(e){return Pg(e)||Lg(e)})).join(",")}(r)}),[r]),D=t.useMemo((function(){return function(e){return Ng(e)?[{description:"Files",accept:Object.entries(e).filter((function(e){var t=kg(e,2),n=t[0],r=t[1],i=!0;return Pg(n)||(console.warn('Skipped "'.concat(n,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),i=!1),Array.isArray(r)&&r.every(Lg)||(console.warn('Skipped "'.concat(n,'" because an invalid file extension was provided.')),i=!1),i})).reduce((function(e,t){var n=kg(t,2),r=n[0],i=n[1];return jg(jg({},e),{},Sg({},r,i))}),{})}]:e}(r)}),[r]),T=t.useMemo((function(){return"function"==typeof b?b:im}),[b]),_=t.useMemo((function(){return"function"==typeof m?m:im}),[m]),E=t.useRef(null),M=t.useRef(null),I=Ug(t.useReducer(rm,tm),2),N=I[0],A=I[1],R=N.isFocused,F=N.isFileDialogActive,B=t.useRef("undefined"!=typeof window&&window.isSecureContext&&v&&"showOpenFilePicker"in window),P=function(){!B.current&&F&&setTimeout((function(){M.current&&(M.current.files.length||(A({type:"closeDialog"}),_()))}),300)};t.useEffect((function(){return window.addEventListener("focus",P,!1),function(){window.removeEventListener("focus",P,!1)}}),[M,F,_,B]);var L=t.useRef([]),z=function(e){E.current&&E.current.contains(e.target)||(e.preventDefault(),L.current=[])};t.useEffect((function(){return x&&(document.addEventListener("dragover",Fg,!1),document.addEventListener("drop",z,!1)),function(){x&&(document.removeEventListener("dragover",Fg),document.removeEventListener("drop",z))}}),[E,x]),t.useEffect((function(){return!i&&y&&E.current&&E.current.focus(),function(){}}),[E,y,i]);var H=t.useCallback((function(e){k?k(e):console.error(e)}),[k]),W=t.useCallback((function(e){e.preventDefault(),e.persist(),ne(e),L.current=[].concat(Yg(L.current),[e.target]),Rg(e)&&Promise.resolve(a(e)).then((function(t){if(!Ag(e)||S){var n=t.length,r=n>0&&function(e){var t=e.files,n=e.accept,r=e.minSize,i=e.maxSize,a=e.multiple,o=e.maxFiles,s=e.validator;return!(!a&&t.length>1||a&&o>=1&&t.length>o)&&t.every((function(e){var t=kg(Mg(e,n),1)[0],a=kg(Ig(e,r,i),1)[0],o=s?s(e):null;return t&&a&&!o}))}({files:t,accept:C,minSize:s,maxSize:o,multiple:l,maxFiles:c,validator:O});A({isDragAccept:r,isDragReject:n>0&&!r,isDragActive:!0,type:"setDraggedFiles"}),d&&d(e)}})).catch((function(e){return H(e)}))}),[a,d,H,S,C,s,o,l,c,O]),V=t.useCallback((function(e){e.preventDefault(),e.persist(),ne(e);var t=Rg(e);if(t&&e.dataTransfer)try{e.dataTransfer.dropEffect="copy"}catch(e){}return t&&f&&f(e),!1}),[f,S]),Y=t.useCallback((function(e){e.preventDefault(),e.persist(),ne(e);var t=L.current.filter((function(e){return E.current&&E.current.contains(e)})),n=t.indexOf(e.target);-1!==n&&t.splice(n,1),L.current=t,t.length>0||(A({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),Rg(e)&&u&&u(e))}),[E,u,S]),U=t.useCallback((function(e,t){var n=[],r=[];e.forEach((function(e){var t=Ug(Mg(e,C),2),i=t[0],a=t[1],l=Ug(Ig(e,s,o),2),c=l[0],d=l[1],u=O?O(e):null;if(i&&c&&!u)n.push(e);else{var f=[a,d];u&&(f=f.concat(u)),r.push({file:e,errors:f.filter((function(e){return e}))})}})),(!l&&n.length>1||l&&c>=1&&n.length>c)&&(n.forEach((function(e){r.push({file:e,errors:[Eg]})})),n.splice(0)),A({acceptedFiles:n,fileRejections:r,type:"setFiles"}),h&&h(n,r,t),r.length>0&&g&&g(r,t),n.length>0&&p&&p(n,t)}),[A,l,C,s,o,c,h,p,g,O]),K=t.useCallback((function(e){e.preventDefault(),e.persist(),ne(e),L.current=[],Rg(e)&&Promise.resolve(a(e)).then((function(t){Ag(e)&&!S||U(t,e)})).catch((function(e){return H(e)})),A({type:"reset"})}),[a,U,H,S]),q=t.useCallback((function(){if(B.current){A({type:"openDialog"}),T();var e={multiple:l,types:D};window.showOpenFilePicker(e).then((function(e){return a(e)})).then((function(e){U(e,null),A({type:"closeDialog"})})).catch((function(e){var t;(t=e)instanceof DOMException&&("AbortError"===t.name||t.code===t.ABORT_ERR)?(_(e),A({type:"closeDialog"})):!function(e){return e instanceof DOMException&&("SecurityError"===e.name||e.code===e.SECURITY_ERR)}(e)?H(e):(B.current=!1,M.current?(M.current.value=null,M.current.click()):H(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided.")))}))}else M.current&&(A({type:"openDialog"}),T(),M.current.value=null,M.current.click())}),[A,T,_,v,U,H,D,l]),X=t.useCallback((function(e){E.current&&E.current.isEqualNode(e.target)&&(" "!==e.key&&"Enter"!==e.key&&32!==e.keyCode&&13!==e.keyCode||(e.preventDefault(),q()))}),[E,q]),G=t.useCallback((function(){A({type:"focus"})}),[]),Z=t.useCallback((function(){A({type:"blur"})}),[]),Q=t.useCallback((function(){w||(!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.navigator.userAgent;return function(e){return-1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident/")}(e)||function(e){return-1!==e.indexOf("Edge/")}(e)}()?q():setTimeout(q,0))}),[w,q]),J=function(e){return i?null:e},ee=function(e){return $?null:J(e)},te=function(e){return j?null:J(e)},ne=function(e){S&&e.stopPropagation()},re=t.useMemo((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,n=void 0===t?"ref":t,r=e.role,a=e.onKeyDown,o=e.onFocus,s=e.onBlur,l=e.onClick,c=e.onDragEnter,d=e.onDragOver,u=e.onDragLeave,f=e.onDrop,h=Qg(e,Wg);return Gg(Gg(Zg({onKeyDown:ee(Bg(a,X)),onFocus:ee(Bg(o,G)),onBlur:ee(Bg(s,Z)),onClick:J(Bg(l,Q)),onDragEnter:te(Bg(c,W)),onDragOver:te(Bg(d,V)),onDragLeave:te(Bg(u,Y)),onDrop:te(Bg(f,K)),role:"string"==typeof r&&""!==r?r:"presentation"},n,E),i||$?{}:{tabIndex:0}),h)}}),[E,X,G,Z,Q,W,V,Y,K,$,j,i]),ie=t.useCallback((function(e){e.stopPropagation()}),[]),ae=t.useMemo((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,n=void 0===t?"ref":t,r=e.onChange,i=e.onClick,a=Qg(e,Vg);return Gg(Gg({},Zg({accept:C,multiple:l,type:"file",style:{display:"none"},onChange:J(Bg(r,K)),onClick:J(Bg(i,ie)),tabIndex:-1},n,M)),a)}}),[M,r,l,K,i]);return Gg(Gg({},N),{},{isFocused:R&&!i,getRootProps:re,getInputProps:ae,rootRef:E,inputRef:M,open:J(q)})}function rm(e,t){switch(t.type){case"focus":return Gg(Gg({},e),{},{isFocused:!0});case"blur":return Gg(Gg({},e),{},{isFocused:!1});case"openDialog":return Gg(Gg({},tm),{},{isFileDialogActive:!0});case"closeDialog":return Gg(Gg({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return Gg(Gg({},e),{},{isDragActive:t.isDragActive,isDragAccept:t.isDragAccept,isDragReject:t.isDragReject});case"setFiles":return Gg(Gg({},e),{},{acceptedFiles:t.acceptedFiles,fileRejections:t.fileRejections});case"reset":return Gg({},tm);default:return e}}function im(){}const am=K.default.div`
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
`,om=K.default.input`
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
`,dm=t.forwardRef((({children:n,accept:r,capture:i,multiple:a,id:o,className:s,name:l,border:c,disabled:d,onChange:u,"data-testid":f},h)=>{const p=t.useRef(),{getRootProps:g,isDragActive:m}=nm({onDrop:u,noClick:!0,disabled:d});t.useImperativeHandle(h,(()=>Object.assign(Object.assign({},p.current),{openFileDialog:()=>{var e;p.current.value=null,null===(e=p.current)||void 0===e||e.click()}})));return e.jsxs(am,Object.assign({id:o,"data-testid":f||"dropzone",$border:c,className:s},g(),{children:[e.jsx(om,{type:"file",name:l,ref:p,tabIndex:-1,"aria-hidden":!0,accept:r,capture:i,multiple:a,"data-testid":f?`${f}-input`:"dropzone-input",onChange:e=>{e.target.files&&u(Array.from(e.target.files))}}),n,m&&e.jsxs(sm,{children:[e.jsx(cm,{}),e.jsx(lm,Object.assign({weight:"semibold"},{children:"Drop files here"}))]})]}))}));const um="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement;function fm(e){const t=Object.prototype.toString.call(e);return"[object Window]"===t||"[object global]"===t}function hm(e){return"nodeType"in e}function pm(e){var t,n;return e?fm(e)?e:hm(e)&&null!=(t=null==(n=e.ownerDocument)?void 0:n.defaultView)?t:window:window}function gm(e){const{Document:t}=pm(e);return e instanceof t}function mm(e){return!fm(e)&&e instanceof pm(e).HTMLElement}function bm(e){return e instanceof pm(e).SVGElement}function vm(e){return e?fm(e)?e.document:hm(e)?gm(e)?e:mm(e)||bm(e)?e.ownerDocument:document:document:document}const ym=um?t.useLayoutEffect:t.useEffect;function xm(e){const n=t.useRef(e);return ym((()=>{n.current=e})),t.useCallback((function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return null==n.current?void 0:n.current(...t)}),[])}function wm(e,n){void 0===n&&(n=[e]);const r=t.useRef(e);return ym((()=>{r.current!==e&&(r.current=e)}),n),r}function $m(e,n){const r=t.useRef();return t.useMemo((()=>{const t=e(r.current);return r.current=t,t}),[...n])}function jm(e){const n=xm(e),r=t.useRef(null),i=t.useCallback((e=>{e!==r.current&&(null==n||n(e,r.current)),r.current=e}),[]);return[r,i]}function Sm(e){const n=t.useRef();return t.useEffect((()=>{n.current=e}),[e]),n.current}let km={};function Om(e,n){return t.useMemo((()=>{if(n)return n;const t=null==km[e]?0:km[e]+1;return km[e]=t,e+"-"+t}),[e,n])}function Cm(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return r.reduce(((t,n)=>{const r=Object.entries(n);for(const[n,i]of r){const r=t[n];null!=r&&(t[n]=r+e*i)}return t}),{...t})}}const Dm=Cm(1),Tm=Cm(-1);function _m(e){if(!e)return!1;const{KeyboardEvent:t}=pm(e.target);return t&&e instanceof t}function Em(e){if(function(e){if(!e)return!1;const{TouchEvent:t}=pm(e.target);return t&&e instanceof t}(e)){if(e.touches&&e.touches.length){const{clientX:t,clientY:n}=e.touches[0];return{x:t,y:n}}if(e.changedTouches&&e.changedTouches.length){const{clientX:t,clientY:n}=e.changedTouches[0];return{x:t,y:n}}}return function(e){return"clientX"in e&&"clientY"in e}(e)?{x:e.clientX,y:e.clientY}:null}const Mm=Object.freeze({Translate:{toString(e){if(!e)return;const{x:t,y:n}=e;return"translate3d("+(t?Math.round(t):0)+"px, "+(n?Math.round(n):0)+"px, 0)"}},Scale:{toString(e){if(!e)return;const{scaleX:t,scaleY:n}=e;return"scaleX("+t+") scaleY("+n+")"}},Transform:{toString(e){if(e)return[Mm.Translate.toString(e),Mm.Scale.toString(e)].join(" ")}},Transition:{toString(e){let{property:t,duration:n,easing:r}=e;return t+" "+n+"ms "+r}}}),Im="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function Nm(e){return e.matches(Im)?e:e.querySelector(Im)}const Am={display:"none"};function Rm(e){let{id:t,value:n}=e;return Y.default.createElement("div",{id:t,style:Am},n)}function Fm(e){let{id:t,announcement:n,ariaLiveType:r="assertive"}=e;return Y.default.createElement("div",{id:t,style:{position:"fixed",width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"},role:"status","aria-live":r,"aria-atomic":!0},n)}const Bm=t.createContext(null);const Pm={draggable:"\n    To pick up a draggable item, press the space bar.\n    While dragging, use the arrow keys to move the item.\n    Press space again to drop the item in its new position, or press escape to cancel.\n  "},Lm={onDragStart(e){let{active:t}=e;return"Picked up draggable item "+t.id+"."},onDragOver(e){let{active:t,over:n}=e;return n?"Draggable item "+t.id+" was moved over droppable area "+n.id+".":"Draggable item "+t.id+" is no longer over a droppable area."},onDragEnd(e){let{active:t,over:n}=e;return n?"Draggable item "+t.id+" was dropped over droppable area "+n.id:"Draggable item "+t.id+" was dropped."},onDragCancel(e){let{active:t}=e;return"Dragging was cancelled. Draggable item "+t.id+" was dropped."}};function zm(e){let{announcements:r=Lm,container:i,hiddenTextDescribedById:a,screenReaderInstructions:o=Pm}=e;const{announce:s,announcement:l}=function(){const[e,n]=t.useState("");return{announce:t.useCallback((e=>{null!=e&&n(e)}),[]),announcement:e}}(),c=Om("DndLiveRegion"),[d,u]=t.useState(!1);if(t.useEffect((()=>{u(!0)}),[]),function(e){const n=t.useContext(Bm);t.useEffect((()=>{if(!n)throw new Error("useDndMonitor must be used within a children of <DndContext>");return n(e)}),[e,n])}(t.useMemo((()=>({onDragStart(e){let{active:t}=e;s(r.onDragStart({active:t}))},onDragMove(e){let{active:t,over:n}=e;r.onDragMove&&s(r.onDragMove({active:t,over:n}))},onDragOver(e){let{active:t,over:n}=e;s(r.onDragOver({active:t,over:n}))},onDragEnd(e){let{active:t,over:n}=e;s(r.onDragEnd({active:t,over:n}))},onDragCancel(e){let{active:t,over:n}=e;s(r.onDragCancel({active:t,over:n}))}})),[s,r])),!d)return null;const f=Y.default.createElement(Y.default.Fragment,null,Y.default.createElement(Rm,{id:a,value:o.draggable}),Y.default.createElement(Fm,{id:c,announcement:l}));return i?n.createPortal(f,i):f}var Hm;function Wm(){}function Vm(e,n){return t.useMemo((()=>({sensor:e,options:null!=n?n:{}})),[e,n])}!function(e){e.DragStart="dragStart",e.DragMove="dragMove",e.DragEnd="dragEnd",e.DragCancel="dragCancel",e.DragOver="dragOver",e.RegisterDroppable="registerDroppable",e.SetDroppableDisabled="setDroppableDisabled",e.UnregisterDroppable="unregisterDroppable"}(Hm||(Hm={}));const Ym=Object.freeze({x:0,y:0});function Um(e,t){let{data:{value:n}}=e,{data:{value:r}}=t;return n-r}function Km(e,t){let{data:{value:n}}=e,{data:{value:r}}=t;return r-n}function qm(e){let{left:t,top:n,height:r,width:i}=e;return[{x:t,y:n},{x:t+i,y:n},{x:t,y:n+r},{x:t+i,y:n+r}]}function Xm(e,t){if(!e||0===e.length)return null;const[n]=e;return t?n[t]:n}function Gm(e,t){const n=Math.max(t.top,e.top),r=Math.max(t.left,e.left),i=Math.min(t.left+t.width,e.left+e.width),a=Math.min(t.top+t.height,e.top+e.height),o=i-r,s=a-n;if(r<i&&n<a){const n=t.width*t.height,r=e.width*e.height,i=o*s;return Number((i/(n+r-i)).toFixed(4))}return 0}const Zm=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:r}=e;const i=[];for(const e of r){const{id:r}=e,a=n.get(r);if(a){const n=Gm(a,t);n>0&&i.push({id:r,data:{droppableContainer:e,value:n}})}}return i.sort(Km)};function Qm(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:Ym}function Jm(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return r.reduce(((t,n)=>({...t,top:t.top+e*n.y,bottom:t.bottom+e*n.y,left:t.left+e*n.x,right:t.right+e*n.x})),{...t})}}const eb=Jm(1);const tb={ignoreTransform:!1};function nb(e,t){void 0===t&&(t=tb);let n=e.getBoundingClientRect();if(t.ignoreTransform){const{transform:t,transformOrigin:r}=pm(e).getComputedStyle(e);t&&(n=function(e,t,n){const r=function(e){if(e.startsWith("matrix3d(")){const t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}if(e.startsWith("matrix(")){const t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}(t);if(!r)return e;const{scaleX:i,scaleY:a,x:o,y:s}=r,l=e.left-o-(1-i)*parseFloat(n),c=e.top-s-(1-a)*parseFloat(n.slice(n.indexOf(" ")+1)),d=i?e.width/i:e.width,u=a?e.height/a:e.height;return{width:d,height:u,top:c,right:l+d,bottom:c+u,left:l}}(n,t,r))}const{top:r,left:i,width:a,height:o,bottom:s,right:l}=n;return{top:r,left:i,width:a,height:o,bottom:s,right:l}}function rb(e){return nb(e,{ignoreTransform:!0})}function ib(e,t){const n=[];return e?function r(i){if(null!=t&&n.length>=t)return n;if(!i)return n;if(gm(i)&&null!=i.scrollingElement&&!n.includes(i.scrollingElement))return n.push(i.scrollingElement),n;if(!mm(i)||bm(i))return n;if(n.includes(i))return n;const a=pm(e).getComputedStyle(i);return i!==e&&function(e,t){void 0===t&&(t=pm(e).getComputedStyle(e));const n=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some((e=>{const r=t[e];return"string"==typeof r&&n.test(r)}))}(i,a)&&n.push(i),function(e,t){return void 0===t&&(t=pm(e).getComputedStyle(e)),"fixed"===t.position}(i,a)?n:r(i.parentNode)}(e):n}function ab(e){const[t]=ib(e,1);return null!=t?t:null}function ob(e){return um&&e?fm(e)?e:hm(e)?gm(e)||e===vm(e).scrollingElement?window:mm(e)?e:null:null:null}function sb(e){return fm(e)?e.scrollX:e.scrollLeft}function lb(e){return fm(e)?e.scrollY:e.scrollTop}function cb(e){return{x:sb(e),y:lb(e)}}var db;function ub(e){return!(!um||!e)&&e===document.scrollingElement}function fb(e){const t={x:0,y:0},n=ub(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},r={x:e.scrollWidth-n.width,y:e.scrollHeight-n.height};return{isTop:e.scrollTop<=t.y,isLeft:e.scrollLeft<=t.x,isBottom:e.scrollTop>=r.y,isRight:e.scrollLeft>=r.x,maxScroll:r,minScroll:t}}!function(e){e[e.Forward=1]="Forward",e[e.Backward=-1]="Backward"}(db||(db={}));const hb={x:.2,y:.2};function pb(e,t,n,r,i){let{top:a,left:o,right:s,bottom:l}=n;void 0===r&&(r=10),void 0===i&&(i=hb);const{isTop:c,isBottom:d,isLeft:u,isRight:f}=fb(e),h={x:0,y:0},p={x:0,y:0},g=t.height*i.y,m=t.width*i.x;return!c&&a<=t.top+g?(h.y=db.Backward,p.y=r*Math.abs((t.top+g-a)/g)):!d&&l>=t.bottom-g&&(h.y=db.Forward,p.y=r*Math.abs((t.bottom-g-l)/g)),!f&&s>=t.right-m?(h.x=db.Forward,p.x=r*Math.abs((t.right-m-s)/m)):!u&&o<=t.left+m&&(h.x=db.Backward,p.x=r*Math.abs((t.left+m-o)/m)),{direction:h,speed:p}}function gb(e){if(e===document.scrollingElement){const{innerWidth:e,innerHeight:t}=window;return{top:0,left:0,right:e,bottom:t,width:e,height:t}}const{top:t,left:n,right:r,bottom:i}=e.getBoundingClientRect();return{top:t,left:n,right:r,bottom:i,width:e.clientWidth,height:e.clientHeight}}function mb(e){return e.reduce(((e,t)=>Dm(e,cb(t))),Ym)}const bb=[["x",["left","right"],function(e){return e.reduce(((e,t)=>e+sb(t)),0)}],["y",["top","bottom"],function(e){return e.reduce(((e,t)=>e+lb(t)),0)}]];class vb{constructor(e,t){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;const n=ib(t),r=mb(n);this.rect={...e},this.width=e.width,this.height=e.height;for(const[e,t,i]of bb)for(const a of t)Object.defineProperty(this,a,{get:()=>{const t=i(n),o=r[e]-t;return this.rect[a]+o},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}}class yb{constructor(e){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach((e=>{var t;return null==(t=this.target)?void 0:t.removeEventListener(...e)}))},this.target=e}add(e,t,n){var r;null==(r=this.target)||r.addEventListener(e,t,n),this.listeners.push([e,t,n])}}function xb(e,t){const n=Math.abs(e.x),r=Math.abs(e.y);return"number"==typeof t?Math.sqrt(n**2+r**2)>t:"x"in t&&"y"in t?n>t.x&&r>t.y:"x"in t?n>t.x:"y"in t&&r>t.y}var wb,$b;function jb(e){e.preventDefault()}function Sb(e){e.stopPropagation()}!function(e){e.Click="click",e.DragStart="dragstart",e.Keydown="keydown",e.ContextMenu="contextmenu",e.Resize="resize",e.SelectionChange="selectionchange",e.VisibilityChange="visibilitychange"}(wb||(wb={})),function(e){e.Space="Space",e.Down="ArrowDown",e.Right="ArrowRight",e.Left="ArrowLeft",e.Up="ArrowUp",e.Esc="Escape",e.Enter="Enter"}($b||($b={}));const kb={start:[$b.Space,$b.Enter],cancel:[$b.Esc],end:[$b.Space,$b.Enter]},Ob=(e,t)=>{let{currentCoordinates:n}=t;switch(e.code){case $b.Right:return{...n,x:n.x+25};case $b.Left:return{...n,x:n.x-25};case $b.Down:return{...n,y:n.y+25};case $b.Up:return{...n,y:n.y-25}}};let Cb=class{constructor(e){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=e;const{event:{target:t}}=e;this.props=e,this.listeners=new yb(vm(t)),this.windowListeners=new yb(pm(t)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(wb.Resize,this.handleCancel),this.windowListeners.add(wb.VisibilityChange,this.handleCancel),setTimeout((()=>this.listeners.add(wb.Keydown,this.handleKeyDown)))}handleStart(){const{activeNode:e,onStart:t}=this.props,n=e.node.current;n&&function(e,t){if(void 0===t&&(t=nb),!e)return;const{top:n,left:r,bottom:i,right:a}=t(e);ab(e)&&(i<=0||a<=0||n>=window.innerHeight||r>=window.innerWidth)&&e.scrollIntoView({block:"center",inline:"center"})}(n),t(Ym)}handleKeyDown(e){if(_m(e)){const{active:t,context:n,options:r}=this.props,{keyboardCodes:i=kb,coordinateGetter:a=Ob,scrollBehavior:o="smooth"}=r,{code:s}=e;if(i.end.includes(s))return void this.handleEnd(e);if(i.cancel.includes(s))return void this.handleCancel(e);const{collisionRect:l}=n.current,c=l?{x:l.left,y:l.top}:Ym;this.referenceCoordinates||(this.referenceCoordinates=c);const d=a(e,{active:t,context:n.current,currentCoordinates:c});if(d){const t=Tm(d,c),r={x:0,y:0},{scrollableAncestors:i}=n.current;for(const n of i){const i=e.code,{isTop:a,isRight:s,isLeft:l,isBottom:c,maxScroll:u,minScroll:f}=fb(n),h=gb(n),p={x:Math.min(i===$b.Right?h.right-h.width/2:h.right,Math.max(i===$b.Right?h.left:h.left+h.width/2,d.x)),y:Math.min(i===$b.Down?h.bottom-h.height/2:h.bottom,Math.max(i===$b.Down?h.top:h.top+h.height/2,d.y))},g=i===$b.Right&&!s||i===$b.Left&&!l,m=i===$b.Down&&!c||i===$b.Up&&!a;if(g&&p.x!==d.x){const e=n.scrollLeft+t.x,a=i===$b.Right&&e<=u.x||i===$b.Left&&e>=f.x;if(a&&!t.y)return void n.scrollTo({left:e,behavior:o});r.x=a?n.scrollLeft-e:i===$b.Right?n.scrollLeft-u.x:n.scrollLeft-f.x,r.x&&n.scrollBy({left:-r.x,behavior:o});break}if(m&&p.y!==d.y){const e=n.scrollTop+t.y,a=i===$b.Down&&e<=u.y||i===$b.Up&&e>=f.y;if(a&&!t.x)return void n.scrollTo({top:e,behavior:o});r.y=a?n.scrollTop-e:i===$b.Down?n.scrollTop-u.y:n.scrollTop-f.y,r.y&&n.scrollBy({top:-r.y,behavior:o});break}}this.handleMove(e,Dm(Tm(d,this.referenceCoordinates),r))}}}handleMove(e,t){const{onMove:n}=this.props;e.preventDefault(),n(t)}handleEnd(e){const{onEnd:t}=this.props;e.preventDefault(),this.detach(),t()}handleCancel(e){const{onCancel:t}=this.props;e.preventDefault(),this.detach(),t()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}};function Db(e){return Boolean(e&&"distance"in e)}function Tb(e){return Boolean(e&&"delay"in e)}Cb.activators=[{eventName:"onKeyDown",handler:(e,t,n)=>{let{keyboardCodes:r=kb,onActivation:i}=t,{active:a}=n;const{code:o}=e.nativeEvent;if(r.start.includes(o)){const t=a.activatorNode.current;return(!t||e.target===t)&&(e.preventDefault(),null==i||i({event:e.nativeEvent}),!0)}return!1}}];class _b{constructor(e,t,n){var r;void 0===n&&(n=function(e){const{EventTarget:t}=pm(e);return e instanceof t?e:vm(e)}(e.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=e,this.events=t;const{event:i}=e,{target:a}=i;this.props=e,this.events=t,this.document=vm(a),this.documentListeners=new yb(this.document),this.listeners=new yb(n),this.windowListeners=new yb(pm(a)),this.initialCoordinates=null!=(r=Em(i))?r:Ym,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){const{events:e,props:{options:{activationConstraint:t,bypassActivationConstraint:n}}}=this;if(this.listeners.add(e.move.name,this.handleMove,{passive:!1}),this.listeners.add(e.end.name,this.handleEnd),this.windowListeners.add(wb.Resize,this.handleCancel),this.windowListeners.add(wb.DragStart,jb),this.windowListeners.add(wb.VisibilityChange,this.handleCancel),this.windowListeners.add(wb.ContextMenu,jb),this.documentListeners.add(wb.Keydown,this.handleKeydown),t){if(null!=n&&n({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(Tb(t))return void(this.timeoutId=setTimeout(this.handleStart,t.delay));if(Db(t))return}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),null!==this.timeoutId&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handleStart(){const{initialCoordinates:e}=this,{onStart:t}=this.props;e&&(this.activated=!0,this.documentListeners.add(wb.Click,Sb,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(wb.SelectionChange,this.removeTextSelection),t(e))}handleMove(e){var t;const{activated:n,initialCoordinates:r,props:i}=this,{onMove:a,options:{activationConstraint:o}}=i;if(!r)return;const s=null!=(t=Em(e))?t:Ym,l=Tm(r,s);if(!n&&o){if(Db(o)){if(null!=o.tolerance&&xb(l,o.tolerance))return this.handleCancel();if(xb(l,o.distance))return this.handleStart()}return Tb(o)&&xb(l,o.tolerance)?this.handleCancel():void 0}e.cancelable&&e.preventDefault(),a(s)}handleEnd(){const{onEnd:e}=this.props;this.detach(),e()}handleCancel(){const{onCancel:e}=this.props;this.detach(),e()}handleKeydown(e){e.code===$b.Esc&&this.handleCancel()}removeTextSelection(){var e;null==(e=this.document.getSelection())||e.removeAllRanges()}}const Eb={move:{name:"pointermove"},end:{name:"pointerup"}};class Mb extends _b{constructor(e){const{event:t}=e,n=vm(t.target);super(e,Eb,n)}}Mb.activators=[{eventName:"onPointerDown",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;return!(!n.isPrimary||0!==n.button)&&(null==r||r({event:n}),!0)}}];const Ib={move:{name:"mousemove"},end:{name:"mouseup"}};var Nb;!function(e){e[e.RightClick=2]="RightClick"}(Nb||(Nb={}));let Ab=class extends _b{constructor(e){super(e,Ib,vm(e.event.target))}};Ab.activators=[{eventName:"onMouseDown",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;return n.button!==Nb.RightClick&&(null==r||r({event:n}),!0)}}];const Rb={move:{name:"touchmove"},end:{name:"touchend"}};class Fb extends _b{constructor(e){super(e,Rb)}static setup(){return window.addEventListener(Rb.move.name,e,{capture:!1,passive:!1}),function(){window.removeEventListener(Rb.move.name,e)};function e(){}}}var Bb,Pb;function Lb(e){let{acceleration:n,activator:r=Bb.Pointer,canScroll:i,draggingRect:a,enabled:o,interval:s=5,order:l=Pb.TreeOrder,pointerCoordinates:c,scrollableAncestors:d,scrollableAncestorRects:u,delta:f,threshold:h}=e;const p=function(e){let{delta:t,disabled:n}=e;const r=Sm(t);return $m((e=>{if(n||!r||!e)return zb;const i={x:Math.sign(t.x-r.x),y:Math.sign(t.y-r.y)};return{x:{[db.Backward]:e.x[db.Backward]||-1===i.x,[db.Forward]:e.x[db.Forward]||1===i.x},y:{[db.Backward]:e.y[db.Backward]||-1===i.y,[db.Forward]:e.y[db.Forward]||1===i.y}}}),[n,t,r])}({delta:f,disabled:!o}),[g,m]=function(){const e=t.useRef(null);return[t.useCallback(((t,n)=>{e.current=setInterval(t,n)}),[]),t.useCallback((()=>{null!==e.current&&(clearInterval(e.current),e.current=null)}),[])]}(),b=t.useRef({x:0,y:0}),v=t.useRef({x:0,y:0}),y=t.useMemo((()=>{switch(r){case Bb.Pointer:return c?{top:c.y,bottom:c.y,left:c.x,right:c.x}:null;case Bb.DraggableRect:return a}}),[r,a,c]),x=t.useRef(null),w=t.useCallback((()=>{const e=x.current;if(!e)return;const t=b.current.x*v.current.x,n=b.current.y*v.current.y;e.scrollBy(t,n)}),[]),$=t.useMemo((()=>l===Pb.TreeOrder?[...d].reverse():d),[l,d]);t.useEffect((()=>{if(o&&d.length&&y){for(const e of $){if(!1===(null==i?void 0:i(e)))continue;const t=d.indexOf(e),r=u[t];if(!r)continue;const{direction:a,speed:o}=pb(e,r,y,n,h);for(const e of["x","y"])p[e][a[e]]||(o[e]=0,a[e]=0);if(o.x>0||o.y>0)return m(),x.current=e,g(w,s),b.current=o,void(v.current=a)}b.current={x:0,y:0},v.current={x:0,y:0},m()}else m()}),[n,w,i,m,o,s,JSON.stringify(y),JSON.stringify(p),g,d,$,u,JSON.stringify(h)])}Fb.activators=[{eventName:"onTouchStart",handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;const{touches:i}=n;return!(i.length>1)&&(null==r||r({event:n}),!0)}}],function(e){e[e.Pointer=0]="Pointer",e[e.DraggableRect=1]="DraggableRect"}(Bb||(Bb={})),function(e){e[e.TreeOrder=0]="TreeOrder",e[e.ReversedTreeOrder=1]="ReversedTreeOrder"}(Pb||(Pb={}));const zb={x:{[db.Backward]:!1,[db.Forward]:!1},y:{[db.Backward]:!1,[db.Forward]:!1}};var Hb,Wb;!function(e){e[e.Always=0]="Always",e[e.BeforeDragging=1]="BeforeDragging",e[e.WhileDragging=2]="WhileDragging"}(Hb||(Hb={})),function(e){e.Optimized="optimized"}(Wb||(Wb={}));const Vb=new Map;function Yb(e,t){return $m((n=>e?n||("function"==typeof t?t(e):e):null),[t,e])}function Ub(e){let{callback:n,disabled:r}=e;const i=xm(n),a=t.useMemo((()=>{if(r||"undefined"==typeof window||void 0===window.ResizeObserver)return;const{ResizeObserver:e}=window;return new e(i)}),[r]);return t.useEffect((()=>()=>null==a?void 0:a.disconnect()),[a]),a}function Kb(e){return new vb(nb(e),e)}function qb(e,n,r){void 0===n&&(n=Kb);const[i,a]=t.useReducer((function(t){if(!e)return null;var i;if(!1===e.isConnected)return null!=(i=null!=t?t:r)?i:null;const a=n(e);if(JSON.stringify(t)===JSON.stringify(a))return t;return a}),null),o=function(e){let{callback:n,disabled:r}=e;const i=xm(n),a=t.useMemo((()=>{if(r||"undefined"==typeof window||void 0===window.MutationObserver)return;const{MutationObserver:e}=window;return new e(i)}),[i,r]);return t.useEffect((()=>()=>null==a?void 0:a.disconnect()),[a]),a}({callback(t){if(e)for(const n of t){const{type:t,target:r}=n;if("childList"===t&&r instanceof HTMLElement&&r.contains(e)){a();break}}}}),s=Ub({callback:a});return ym((()=>{a(),e?(null==s||s.observe(e),null==o||o.observe(document.body,{childList:!0,subtree:!0})):(null==s||s.disconnect(),null==o||o.disconnect())}),[e]),i}const Xb=[];function Gb(e,n){void 0===n&&(n=[]);const r=t.useRef(null);return t.useEffect((()=>{r.current=null}),n),t.useEffect((()=>{const t=e!==Ym;t&&!r.current&&(r.current=e),!t&&r.current&&(r.current=null)}),[e]),r.current?Tm(e,r.current):Ym}function Zb(e){return t.useMemo((()=>e?function(e){const t=e.innerWidth,n=e.innerHeight;return{top:0,left:0,right:t,bottom:n,width:t,height:n}}(e):null),[e])}const Qb=[];function Jb(e){let{measure:n}=e;const[r,i]=t.useState(null),a=t.useCallback((e=>{for(const{target:t}of e)if(mm(t)){i((e=>{const r=n(t);return e?{...e,width:r.width,height:r.height}:r}));break}}),[n]),o=Ub({callback:a}),s=t.useCallback((e=>{const t=function(e){if(!e)return null;if(e.children.length>1)return e;const t=e.children[0];return mm(t)?t:e}(e);null==o||o.disconnect(),t&&(null==o||o.observe(t)),i(t?n(t):null)}),[n,o]),[l,c]=jm(s);return t.useMemo((()=>({nodeRef:l,rect:r,setRef:c})),[r,l,c])}const ev=[{sensor:Mb,options:{}},{sensor:Cb,options:{}}],tv={current:{}},nv={draggable:{measure:rb},droppable:{measure:rb,strategy:Hb.WhileDragging,frequency:Wb.Optimized},dragOverlay:{measure:nb}};class rv extends Map{get(e){var t;return null!=e&&null!=(t=super.get(e))?t:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter((e=>{let{disabled:t}=e;return!t}))}getNodeFor(e){var t,n;return null!=(t=null==(n=this.get(e))?void 0:n.node.current)?t:void 0}}const iv={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new rv,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:Wm},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:nv,measureDroppableContainers:Wm,windowRect:null,measuringScheduled:!1},av={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:Wm,draggableNodes:new Map,over:null,measureDroppableContainers:Wm},ov=t.createContext(av),sv=t.createContext(iv);function lv(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new rv}}}function cv(e,t){switch(t.type){case Hm.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case Hm.DragMove:return e.draggable.active?{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}}:e;case Hm.DragEnd:case Hm.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case Hm.RegisterDroppable:{const{element:n}=t,{id:r}=n,i=new rv(e.droppable.containers);return i.set(r,n),{...e,droppable:{...e.droppable,containers:i}}}case Hm.SetDroppableDisabled:{const{id:n,key:r,disabled:i}=t,a=e.droppable.containers.get(n);if(!a||r!==a.key)return e;const o=new rv(e.droppable.containers);return o.set(n,{...a,disabled:i}),{...e,droppable:{...e.droppable,containers:o}}}case Hm.UnregisterDroppable:{const{id:n,key:r}=t,i=e.droppable.containers.get(n);if(!i||r!==i.key)return e;const a=new rv(e.droppable.containers);return a.delete(n),{...e,droppable:{...e.droppable,containers:a}}}default:return e}}function dv(e){let{disabled:n}=e;const{active:r,activatorEvent:i,draggableNodes:a}=t.useContext(ov),o=Sm(i),s=Sm(null==r?void 0:r.id);return t.useEffect((()=>{if(!n&&!i&&o&&null!=s){if(!_m(o))return;if(document.activeElement===o.target)return;const e=a.get(s);if(!e)return;const{activatorNode:t,node:n}=e;if(!t.current&&!n.current)return;requestAnimationFrame((()=>{for(const e of[t.current,n.current]){if(!e)continue;const t=Nm(e);if(t){t.focus();break}}}))}}),[i,n,a,s,o]),null}const uv=t.createContext({...Ym,scaleX:1,scaleY:1});var fv;!function(e){e[e.Uninitialized=0]="Uninitialized",e[e.Initializing=1]="Initializing",e[e.Initialized=2]="Initialized"}(fv||(fv={}));const hv=t.memo((function(e){var r,i,a,o;let{id:s,accessibility:l,autoScroll:c=!0,children:d,sensors:u=ev,collisionDetection:f=Zm,measuring:h,modifiers:p,...g}=e;const m=t.useReducer(cv,void 0,lv),[b,v]=m,[y,x]=function(){const[e]=t.useState((()=>new Set)),n=t.useCallback((t=>(e.add(t),()=>e.delete(t))),[e]);return[t.useCallback((t=>{let{type:n,event:r}=t;e.forEach((e=>{var t;return null==(t=e[n])?void 0:t.call(e,r)}))}),[e]),n]}(),[w,$]=t.useState(fv.Uninitialized),j=w===fv.Initialized,{draggable:{active:S,nodes:k,translate:O},droppable:{containers:C}}=b,D=S?k.get(S):null,T=t.useRef({initial:null,translated:null}),_=t.useMemo((()=>{var e;return null!=S?{id:S,data:null!=(e=null==D?void 0:D.data)?e:tv,rect:T}:null}),[S,D]),E=t.useRef(null),[M,I]=t.useState(null),[N,A]=t.useState(null),R=wm(g,Object.values(g)),F=Om("DndDescribedBy",s),B=t.useMemo((()=>C.getEnabled()),[C]),P=function(e){return t.useMemo((()=>({draggable:{...nv.draggable,...null==e?void 0:e.draggable},droppable:{...nv.droppable,...null==e?void 0:e.droppable},dragOverlay:{...nv.dragOverlay,...null==e?void 0:e.dragOverlay}})),[null==e?void 0:e.draggable,null==e?void 0:e.droppable,null==e?void 0:e.dragOverlay])}(h),{droppableRects:L,measureDroppableContainers:z,measuringScheduled:H}=function(e,n){let{dragging:r,dependencies:i,config:a}=n;const[o,s]=t.useState(null),{frequency:l,measure:c,strategy:d}=a,u=t.useRef(e),f=function(){switch(d){case Hb.Always:return!1;case Hb.BeforeDragging:return r;default:return!r}}(),h=wm(f),p=t.useCallback((function(e){void 0===e&&(e=[]),h.current||s((t=>null===t?e:t.concat(e.filter((e=>!t.includes(e))))))}),[h]),g=t.useRef(null),m=$m((t=>{if(f&&!r)return Vb;if(!t||t===Vb||u.current!==e||null!=o){const t=new Map;for(let n of e){if(!n)continue;if(o&&o.length>0&&!o.includes(n.id)&&n.rect.current){t.set(n.id,n.rect.current);continue}const e=n.node.current,r=e?new vb(c(e),e):null;n.rect.current=r,r&&t.set(n.id,r)}return t}return t}),[e,o,r,f,c]);return t.useEffect((()=>{u.current=e}),[e]),t.useEffect((()=>{f||p()}),[r,f]),t.useEffect((()=>{o&&o.length>0&&s(null)}),[JSON.stringify(o)]),t.useEffect((()=>{f||"number"!=typeof l||null!==g.current||(g.current=setTimeout((()=>{p(),g.current=null}),l))}),[l,f,p,...i]),{droppableRects:m,measureDroppableContainers:p,measuringScheduled:null!=o}}(B,{dragging:j,dependencies:[O.x,O.y],config:P.droppable}),W=function(e,t){const n=null!==t?e.get(t):void 0,r=n?n.node.current:null;return $m((e=>{var n;return null===t?null:null!=(n=null!=r?r:e)?n:null}),[r,t])}(k,S),V=t.useMemo((()=>N?Em(N):null),[N]),U=function(){const e=!1===(null==M?void 0:M.autoScrollEnabled),t="object"==typeof c?!1===c.enabled:!1===c,n=j&&!e&&!t;if("object"==typeof c)return{...c,enabled:n};return{enabled:n}}(),K=function(e,t){return Yb(e,t)}(W,P.draggable.measure);!function(e){let{activeNode:n,measure:r,initialRect:i,config:a=!0}=e;const o=t.useRef(!1),{x:s,y:l}="boolean"==typeof a?{x:a,y:a}:a;ym((()=>{if(!s&&!l||!n)return void(o.current=!1);if(o.current||!i)return;const e=null==n?void 0:n.node.current;if(!e||!1===e.isConnected)return;const t=Qm(r(e),i);if(s||(t.x=0),l||(t.y=0),o.current=!0,Math.abs(t.x)>0||Math.abs(t.y)>0){const n=ab(e);n&&n.scrollBy({top:t.y,left:t.x})}}),[n,s,l,i,r])}({activeNode:S?k.get(S):null,config:U.layoutShiftCompensation,initialRect:K,measure:P.draggable.measure});const q=qb(W,P.draggable.measure,K),X=qb(W?W.parentElement:null),G=t.useRef({activatorEvent:null,active:null,activeNode:W,collisionRect:null,collisions:null,droppableRects:L,draggableNodes:k,draggingNode:null,draggingNodeRect:null,droppableContainers:C,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),Z=C.getNodeFor(null==(r=G.current.over)?void 0:r.id),Q=Jb({measure:P.dragOverlay.measure}),J=null!=(i=Q.nodeRef.current)?i:W,ee=j?null!=(a=Q.rect)?a:q:null,te=Boolean(Q.nodeRef.current&&Q.rect),ne=Qm(re=te?null:q,Yb(re));var re;const ie=Zb(J?pm(J):null),ae=function(e){const n=t.useRef(e),r=$m((t=>e?t&&t!==Xb&&e&&n.current&&e.parentNode===n.current.parentNode?t:ib(e):Xb),[e]);return t.useEffect((()=>{n.current=e}),[e]),r}(j?null!=Z?Z:W:null),oe=function(e,n){void 0===n&&(n=nb);const[r]=e,i=Zb(r?pm(r):null),[a,o]=t.useReducer((function(){return e.length?e.map((e=>ub(e)?i:new vb(n(e),e))):Qb}),Qb),s=Ub({callback:o});return e.length>0&&a===Qb&&o(),ym((()=>{e.length?e.forEach((e=>null==s?void 0:s.observe(e))):(null==s||s.disconnect(),o())}),[e]),a}(ae),se=function(e,t){let{transform:n,...r}=t;return null!=e&&e.length?e.reduce(((e,t)=>t({transform:e,...r})),n):n}(p,{transform:{x:O.x-ne.x,y:O.y-ne.y,scaleX:1,scaleY:1},activatorEvent:N,active:_,activeNodeRect:q,containerNodeRect:X,draggingNodeRect:ee,over:G.current.over,overlayNodeRect:Q.rect,scrollableAncestors:ae,scrollableAncestorRects:oe,windowRect:ie}),le=V?Dm(V,O):null,ce=function(e){const[n,r]=t.useState(null),i=t.useRef(e),a=t.useCallback((e=>{const t=ob(e.target);t&&r((e=>e?(e.set(t,cb(t)),new Map(e)):null))}),[]);return t.useEffect((()=>{const t=i.current;if(e!==t){n(t);const o=e.map((e=>{const t=ob(e);return t?(t.addEventListener("scroll",a,{passive:!0}),[t,cb(t)]):null})).filter((e=>null!=e));r(o.length?new Map(o):null),i.current=e}return()=>{n(e),n(t)};function n(e){e.forEach((e=>{const t=ob(e);null==t||t.removeEventListener("scroll",a)}))}}),[a,e]),t.useMemo((()=>e.length?n?Array.from(n.values()).reduce(((e,t)=>Dm(e,t)),Ym):mb(e):Ym),[e,n])}(ae),de=Gb(ce),ue=Gb(ce,[q]),fe=Dm(se,de),he=ee?eb(ee,se):null,pe=_&&he?f({active:_,collisionRect:he,droppableRects:L,droppableContainers:B,pointerCoordinates:le}):null,ge=Xm(pe,"id"),[me,be]=t.useState(null),ve=function(e,t,n){return{...e,scaleX:t&&n?t.width/n.width:1,scaleY:t&&n?t.height/n.height:1}}(te?se:Dm(se,ue),null!=(o=null==me?void 0:me.rect)?o:null,q),ye=t.useCallback(((e,t)=>{let{sensor:r,options:i}=t;if(null==E.current)return;const a=k.get(E.current);if(!a)return;const o=e.nativeEvent,s=new r({active:E.current,activeNode:a,event:o,options:i,context:G,onStart(e){const t=E.current;if(null==t)return;const r=k.get(t);if(!r)return;const{onDragStart:i}=R.current,a={active:{id:t,data:r.data,rect:T}};n.unstable_batchedUpdates((()=>{null==i||i(a),$(fv.Initializing),v({type:Hm.DragStart,initialCoordinates:e,active:t}),y({type:"onDragStart",event:a})}))},onMove(e){v({type:Hm.DragMove,coordinates:e})},onEnd:l(Hm.DragEnd),onCancel:l(Hm.DragCancel)});function l(e){return async function(){const{active:t,collisions:r,over:i,scrollAdjustedTranslate:a}=G.current;let s=null;if(t&&a){const{cancelDrop:n}=R.current;if(s={activatorEvent:o,active:t,collisions:r,delta:a,over:i},e===Hm.DragEnd&&"function"==typeof n){await Promise.resolve(n(s))&&(e=Hm.DragCancel)}}E.current=null,n.unstable_batchedUpdates((()=>{v({type:e}),$(fv.Uninitialized),be(null),I(null),A(null);const t=e===Hm.DragEnd?"onDragEnd":"onDragCancel";if(s){const e=R.current[t];null==e||e(s),y({type:t,event:s})}}))}}n.unstable_batchedUpdates((()=>{I(s),A(e.nativeEvent)}))}),[k]),xe=t.useCallback(((e,t)=>(n,r)=>{const i=n.nativeEvent,a=k.get(r);if(null!==E.current||!a||i.dndKit||i.defaultPrevented)return;const o={active:a};!0===e(n,t.options,o)&&(i.dndKit={capturedBy:t.sensor},E.current=r,ye(n,t))}),[k,ye]),we=function(e,n){return t.useMemo((()=>e.reduce(((e,t)=>{const{sensor:r}=t;return[...e,...r.activators.map((e=>({eventName:e.eventName,handler:n(e.handler,t)})))]}),[])),[e,n])}(u,xe);!function(e){t.useEffect((()=>{if(!um)return;const t=e.map((e=>{let{sensor:t}=e;return null==t.setup?void 0:t.setup()}));return()=>{for(const e of t)null==e||e()}}),e.map((e=>{let{sensor:t}=e;return t})))}(u),ym((()=>{q&&w===fv.Initializing&&$(fv.Initialized)}),[q,w]),t.useEffect((()=>{const{onDragMove:e}=R.current,{active:t,activatorEvent:r,collisions:i,over:a}=G.current;if(!t||!r)return;const o={active:t,activatorEvent:r,collisions:i,delta:{x:fe.x,y:fe.y},over:a};n.unstable_batchedUpdates((()=>{null==e||e(o),y({type:"onDragMove",event:o})}))}),[fe.x,fe.y]),t.useEffect((()=>{const{active:e,activatorEvent:t,collisions:r,droppableContainers:i,scrollAdjustedTranslate:a}=G.current;if(!e||null==E.current||!t||!a)return;const{onDragOver:o}=R.current,s=i.get(ge),l=s&&s.rect.current?{id:s.id,rect:s.rect.current,data:s.data,disabled:s.disabled}:null,c={active:e,activatorEvent:t,collisions:r,delta:{x:a.x,y:a.y},over:l};n.unstable_batchedUpdates((()=>{be(l),null==o||o(c),y({type:"onDragOver",event:c})}))}),[ge]),ym((()=>{G.current={activatorEvent:N,active:_,activeNode:W,collisionRect:he,collisions:pe,droppableRects:L,draggableNodes:k,draggingNode:J,draggingNodeRect:ee,droppableContainers:C,over:me,scrollableAncestors:ae,scrollAdjustedTranslate:fe},T.current={initial:ee,translated:he}}),[_,W,pe,he,k,J,ee,L,C,me,ae,fe]),Lb({...U,delta:O,draggingRect:he,pointerCoordinates:le,scrollableAncestors:ae,scrollableAncestorRects:oe});const $e=t.useMemo((()=>({active:_,activeNode:W,activeNodeRect:q,activatorEvent:N,collisions:pe,containerNodeRect:X,dragOverlay:Q,draggableNodes:k,droppableContainers:C,droppableRects:L,over:me,measureDroppableContainers:z,scrollableAncestors:ae,scrollableAncestorRects:oe,measuringConfiguration:P,measuringScheduled:H,windowRect:ie})),[_,W,q,N,pe,X,Q,k,C,L,me,z,ae,oe,P,H,ie]),je=t.useMemo((()=>({activatorEvent:N,activators:we,active:_,activeNodeRect:q,ariaDescribedById:{draggable:F},dispatch:v,draggableNodes:k,over:me,measureDroppableContainers:z})),[N,we,_,q,v,F,k,me,z]);return Y.default.createElement(Bm.Provider,{value:x},Y.default.createElement(ov.Provider,{value:je},Y.default.createElement(sv.Provider,{value:$e},Y.default.createElement(uv.Provider,{value:ve},d)),Y.default.createElement(dv,{disabled:!1===(null==l?void 0:l.restoreFocus)})),Y.default.createElement(zm,{...l,hiddenTextDescribedById:F}))})),pv=t.createContext(null),gv="button",mv="Droppable";function bv(e){let{id:n,data:r,disabled:i=!1,attributes:a}=e;const o=Om(mv),{activators:s,activatorEvent:l,active:c,activeNodeRect:d,ariaDescribedById:u,draggableNodes:f,over:h}=t.useContext(ov),{role:p=gv,roleDescription:g="draggable",tabIndex:m=0}=null!=a?a:{},b=(null==c?void 0:c.id)===n,v=t.useContext(b?uv:pv),[y,x]=jm(),[w,$]=jm(),j=function(e,n){return t.useMemo((()=>e.reduce(((e,t)=>{let{eventName:r,handler:i}=t;return e[r]=e=>{i(e,n)},e}),{})),[e,n])}(s,n),S=wm(r);ym((()=>(f.set(n,{id:n,key:o,node:y,activatorNode:w,data:S}),()=>{const e=f.get(n);e&&e.key===o&&f.delete(n)})),[f,n]);return{active:c,activatorEvent:l,activeNodeRect:d,attributes:t.useMemo((()=>({role:p,tabIndex:m,"aria-disabled":i,"aria-pressed":!(!b||p!==gv)||void 0,"aria-roledescription":g,"aria-describedby":u.draggable})),[i,p,m,b,g,u.draggable]),isDragging:b,listeners:i?void 0:j,node:y,over:h,setNodeRef:x,setActivatorNodeRef:$,transform:v}}const vv="Droppable",yv={timeout:25};function xv(e,t,n){const r=e.slice();return r.splice(n<0?r.length+n:n,0,r.splice(t,1)[0]),r}function wv(e,t){return e.reduce(((e,n,r)=>{const i=t.get(n);return i&&(e[r]=i),e}),Array(e.length))}function $v(e){return null!==e&&e>=0}const jv=e=>{let{rects:t,activeIndex:n,overIndex:r,index:i}=e;const a=xv(t,r,n),o=t[i],s=a[i];return s&&o?{x:s.left-o.left,y:s.top-o.top,scaleX:s.width/o.width,scaleY:s.height/o.height}:null},Sv={scaleX:1,scaleY:1},kv=e=>{var t;let{activeIndex:n,activeNodeRect:r,index:i,rects:a,overIndex:o}=e;const s=null!=(t=a[n])?t:r;if(!s)return null;if(i===n){const e=a[o];return e?{x:0,y:n<o?e.top+e.height-(s.top+s.height):e.top-s.top,...Sv}:null}const l=function(e,t,n){const r=e[t],i=e[t-1],a=e[t+1];if(!r)return 0;if(n<t)return i?r.top-(i.top+i.height):a?a.top-(r.top+r.height):0;return a?a.top-(r.top+r.height):i?r.top-(i.top+i.height):0}(a,i,n);return i>n&&i<=o?{x:0,y:-s.height-l,...Sv}:i<n&&i>=o?{x:0,y:s.height+l,...Sv}:{x:0,y:0,...Sv}};const Ov="Sortable",Cv=Y.default.createContext({activeIndex:-1,containerId:Ov,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:jv,disabled:{draggable:!1,droppable:!1}});function Dv(e){let{children:n,id:r,items:i,strategy:a=jv,disabled:o=!1}=e;const{active:s,dragOverlay:l,droppableRects:c,over:d,measureDroppableContainers:u}=t.useContext(sv),f=Om(Ov,r),h=Boolean(null!==l.rect),p=t.useMemo((()=>i.map((e=>"object"==typeof e&&"id"in e?e.id:e))),[i]),g=null!=s,m=s?p.indexOf(s.id):-1,b=d?p.indexOf(d.id):-1,v=t.useRef(p),y=!function(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}(p,v.current),x=-1!==b&&-1===m||y,w=function(e){return"boolean"==typeof e?{draggable:e,droppable:e}:e}(o);ym((()=>{y&&g&&u(p)}),[y,p,g,u]),t.useEffect((()=>{v.current=p}),[p]);const $=t.useMemo((()=>({activeIndex:m,containerId:f,disabled:w,disableTransforms:x,items:p,overIndex:b,useDragOverlay:h,sortedRects:wv(p,c),strategy:a})),[m,f,w.draggable,w.droppable,x,p,b,c,h,a]);return Y.default.createElement(Cv.Provider,{value:$},n)}const Tv=e=>{let{id:t,items:n,activeIndex:r,overIndex:i}=e;return xv(n,r,i).indexOf(t)},_v=e=>{let{containerId:t,isSorting:n,wasDragging:r,index:i,items:a,newIndex:o,previousItems:s,previousContainerId:l,transition:c}=e;return!(!c||!r)&&((s===a||i!==o)&&(!!n||o!==i&&t===l))},Ev={duration:200,easing:"ease"},Mv="transform",Iv=Mm.Transition.toString({property:Mv,duration:0,easing:"linear"}),Nv={roleDescription:"sortable"};function Av(e){let{animateLayoutChanges:n=_v,attributes:r,disabled:i,data:a,getNewIndex:o=Tv,id:s,strategy:l,resizeObserverConfig:c,transition:d=Ev}=e;const{items:u,containerId:f,activeIndex:h,disabled:p,disableTransforms:g,sortedRects:m,overIndex:b,useDragOverlay:v,strategy:y}=t.useContext(Cv),x=function(e,t){var n,r;if("boolean"==typeof e)return{draggable:e,droppable:!1};return{draggable:null!=(n=null==e?void 0:e.draggable)?n:t.draggable,droppable:null!=(r=null==e?void 0:e.droppable)?r:t.droppable}}(i,p),w=u.indexOf(s),$=t.useMemo((()=>({sortable:{containerId:f,index:w,items:u},...a})),[f,a,w,u]),j=t.useMemo((()=>u.slice(u.indexOf(s))),[u,s]),{rect:S,node:k,isOver:O,setNodeRef:C}=function(e){let{data:n,disabled:r=!1,id:i,resizeObserverConfig:a}=e;const o=Om(vv),{active:s,dispatch:l,over:c,measureDroppableContainers:d}=t.useContext(ov),u=t.useRef({disabled:r}),f=t.useRef(!1),h=t.useRef(null),p=t.useRef(null),{disabled:g,updateMeasurementsFor:m,timeout:b}={...yv,...a},v=wm(null!=m?m:i),y=Ub({callback:t.useCallback((()=>{f.current?(null!=p.current&&clearTimeout(p.current),p.current=setTimeout((()=>{d(Array.isArray(v.current)?v.current:[v.current]),p.current=null}),b)):f.current=!0}),[b]),disabled:g||!s}),x=t.useCallback(((e,t)=>{y&&(t&&(y.unobserve(t),f.current=!1),e&&y.observe(e))}),[y]),[w,$]=jm(x),j=wm(n);return t.useEffect((()=>{y&&w.current&&(y.disconnect(),f.current=!1,y.observe(w.current))}),[w,y]),ym((()=>(l({type:Hm.RegisterDroppable,element:{id:i,key:o,disabled:r,node:w,rect:h,data:j}}),()=>l({type:Hm.UnregisterDroppable,key:o,id:i}))),[i]),t.useEffect((()=>{r!==u.current.disabled&&(l({type:Hm.SetDroppableDisabled,id:i,key:o,disabled:r}),u.current.disabled=r)}),[i,o,r,l]),{active:s,rect:h,isOver:(null==c?void 0:c.id)===i,node:w,over:c,setNodeRef:$}}({id:s,data:$,disabled:x.droppable,resizeObserverConfig:{updateMeasurementsFor:j,...c}}),{active:D,activatorEvent:T,activeNodeRect:_,attributes:E,setNodeRef:M,listeners:I,isDragging:N,over:A,setActivatorNodeRef:R,transform:F}=bv({id:s,data:$,attributes:{...Nv,...r},disabled:x.draggable}),B=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.useMemo((()=>e=>{n.forEach((t=>t(e)))}),n)}(C,M),P=Boolean(D),L=P&&!g&&$v(h)&&$v(b),z=!v&&N,H=z&&L?F:null,W=L?null!=H?H:(null!=l?l:y)({rects:m,activeNodeRect:_,activeIndex:h,overIndex:b,index:w}):null,V=$v(h)&&$v(b)?o({id:s,items:u,activeIndex:h,overIndex:b}):w,Y=null==D?void 0:D.id,U=t.useRef({activeId:Y,items:u,newIndex:V,containerId:f}),K=u!==U.current.items,q=n({active:D,containerId:f,isDragging:N,isSorting:P,id:s,index:w,items:u,newIndex:U.current.newIndex,previousItems:U.current.items,previousContainerId:U.current.containerId,transition:d,wasDragging:null!=U.current.activeId}),X=function(e){let{disabled:n,index:r,node:i,rect:a}=e;const[o,s]=t.useState(null),l=t.useRef(r);return ym((()=>{if(!n&&r!==l.current&&i.current){const e=a.current;if(e){const t=nb(i.current,{ignoreTransform:!0}),n={x:e.left-t.left,y:e.top-t.top,scaleX:e.width/t.width,scaleY:e.height/t.height};(n.x||n.y)&&s(n)}}r!==l.current&&(l.current=r)}),[n,r,i,a]),t.useEffect((()=>{o&&s(null)}),[o]),o}({disabled:!q,index:w,node:k,rect:S});return t.useEffect((()=>{P&&U.current.newIndex!==V&&(U.current.newIndex=V),f!==U.current.containerId&&(U.current.containerId=f),u!==U.current.items&&(U.current.items=u)}),[P,V,f,u]),t.useEffect((()=>{if(Y===U.current.activeId)return;if(Y&&!U.current.activeId)return void(U.current.activeId=Y);const e=setTimeout((()=>{U.current.activeId=Y}),50);return()=>clearTimeout(e)}),[Y]),{active:D,activeIndex:h,attributes:E,data:$,rect:S,index:w,newIndex:V,items:u,isOver:O,isSorting:P,isDragging:N,listeners:I,node:k,overIndex:b,over:A,setNodeRef:B,setActivatorNodeRef:R,setDroppableNodeRef:C,setDraggableNodeRef:M,transform:null!=X?X:W,transition:function(){if(X||K&&U.current.newIndex===w)return Iv;if(z&&!_m(T)||!d)return;if(P||q)return Mm.Transition.toString({...d,property:Mv});return}()}}function Rv(e){if(!e)return!1;const t=e.data.current;return!!(t&&"sortable"in t&&"object"==typeof t.sortable&&"containerId"in t.sortable&&"items"in t.sortable&&"index"in t.sortable)}const Fv=[$b.Down,$b.Right,$b.Up,$b.Left],Bv=(e,t)=>{let{context:{active:n,collisionRect:r,droppableRects:i,droppableContainers:a,over:o,scrollableAncestors:s}}=t;if(Fv.includes(e.code)){if(e.preventDefault(),!n||!r)return;const t=[];a.getEnabled().forEach((n=>{if(!n||null!=n&&n.disabled)return;const a=i.get(n.id);if(a)switch(e.code){case $b.Down:r.top<a.top&&t.push(n);break;case $b.Up:r.top>a.top&&t.push(n);break;case $b.Left:r.left>a.left&&t.push(n);break;case $b.Right:r.left<a.left&&t.push(n)}}));const l=(e=>{let{collisionRect:t,droppableRects:n,droppableContainers:r}=e;const i=qm(t),a=[];for(const e of r){const{id:t}=e,r=n.get(t);if(r){const n=qm(r),o=i.reduce(((e,t,r)=>{return e+(i=n[r],a=t,Math.sqrt(Math.pow(i.x-a.x,2)+Math.pow(i.y-a.y,2)));var i,a}),0),s=Number((o/4).toFixed(4));a.push({id:t,data:{droppableContainer:e,value:s}})}}return a.sort(Um)})({active:n,collisionRect:r,droppableRects:i,droppableContainers:t,pointerCoordinates:null});let c=Xm(l,"id");if(c===(null==o?void 0:o.id)&&l.length>1&&(c=l[1].id),null!=c){const e=a.get(n.id),t=a.get(c),o=t?i.get(t.id):null,l=null==t?void 0:t.node.current;if(l&&o&&e&&t){const n=ib(l).some(((e,t)=>s[t]!==e)),i=Pv(e,t),a=function(e,t){if(!Rv(e)||!Rv(t))return!1;if(!Pv(e,t))return!1;return e.data.current.sortable.index<t.data.current.sortable.index}(e,t),c=n||!i?{x:0,y:0}:{x:a?r.width-o.width:0,y:a?r.height-o.height:0},d={x:o.left,y:o.top};return c.x&&c.y?d:Tm(d,c)}}}};function Pv(e,t){return!(!Rv(e)||!Rv(t))&&e.data.current.sortable.containerId===t.data.current.sortable.containerId}class Lv extends Ab{}Lv.activators=[{eventName:"onMouseDown",handler:({nativeEvent:e})=>zv(e.target)}];function zv(e){let t=e;for(;t;){if(t.dataset&&t.dataset.noDnd)return!1;t=t.parentElement}return!0}(class extends Cb{}).activators=[{eventName:"onKeyDown",handler:({nativeEvent:e})=>zv(e.target)}];const Hv=K.default.div`
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
`,Uv=t=>{var{children:n,visible:r,onMobileClose:i}=t,a=X(t,["children","visible","onMobileClose"]);const o=a["data-testid"]||"popover",s=Dl.useMediaQuery({maxWidth:ns.mobileL}),l=()=>{i&&i()},c=()=>"string"==typeof n?e.jsx(exports.Text.BodySmall,{children:n}):n;return e.jsxs(e.Fragment,{children:[r&&e.jsx(Hv,Object.assign({"data-testid":o},a,{children:e.jsx(Wv,{children:c()})})),s&&e.jsx(xh,Object.assign({show:r,onOverlayClick:l},{children:e.jsx(Vv,Object.assign({onClose:l},{children:e.jsx(Yv,{children:c()})}))}))]})},Kv=K.default.div`
    display: inline;
    width: fit-content;
    cursor: pointer;
    position: relative;
`,qv=n=>{var r,i,{children:a,popoverContent:o,trigger:s="click",position:l="top",zIndex:c,rootNode:d,customOffset:u,delay:f,onPopoverAppear:h,onPopoverDismiss:p}=n,m=X(n,["children","popoverContent","trigger","position","zIndex","rootNode","customOffset","delay","onPopoverAppear","onPopoverDismiss"]);const[b,v]=t.useState(!1),y=t.useRef(),x=t.useRef(),w=Dl.useMediaQuery({maxWidth:as.mobileL}),{refs:$,floatingStyles:j,context:S}=g.useFloating({open:b,placement:l,whileElementsMounted:g.autoUpdate,middleware:[g.offset(null!=u?u:16),g.flip(),g.shift({limiter:g.limitShift()})],onOpenChange:e=>{v(e),b!==e&&I(e)}}),k=gf(),O=w?"click":s,C=g.useClick(S,{ignoreMouse:"hover"===O}),D=g.useDismiss(S),T=g.useHover(S,{enabled:"hover"===O,delay:{open:null!==(r=null==f?void 0:f.open)&&void 0!==r?r:0,close:null!==(i=null==f?void 0:f.close)&&void 0!==i?i:500}}),{getReferenceProps:_,getFloatingProps:E}=g.useInteractions([C,D,T]),M=()=>{v(!1),I(!1)},I=e=>{e&&h&&h(),!e&&p&&p()};return e.jsxs(e.Fragment,{children:[e.jsx(Kv,Object.assign({ref:e=>{y.current=e,$.setReference(e)}},_({onClick:e=>{e.stopPropagation(),e.preventDefault()}}),m,{children:a})),b&&e.jsx(g.FloatingPortal,Object.assign({root:d},{children:e.jsx(g.FloatingFocusManager,Object.assign({context:S},{children:e.jsx("div",Object.assign({ref:e=>{x.current=e,$.setFloating(e)},style:Object.assign(Object.assign({},j),{outline:"none",zIndex:null!=c?c:k})},E(),{children:"function"==typeof o?o():e.jsx(Uv,Object.assign({visible:!0,onMobileClose:M},{children:o}))}))}))}))]})},Xv=e=>{switch(e){case"underline":return"text-decoration: underline 1px;";case"underline-dashed":return"text-decoration: underline dashed 1px;"}},Gv=K.default.span`
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
`,Qv=t=>{var{ariaLabel:n,content:r,icon:i,underlineStyle:a="default",underlineHoverStyle:o="default"}=t,s=X(t,["ariaLabel","content","icon","underlineStyle","underlineHoverStyle"]);const l=!!r;return e.jsx(qv,Object.assign({},s,{children:e.jsxs(Gv,Object.assign({role:"button","aria-haspopup":"dialog",tabIndex:0,$defaultStyle:a,$hoverStyle:o,"aria-label":null!=n?n:l?void 0:"More info"},{children:[r,i&&e.jsx(Zv,Object.assign({$standalone:!l},{children:i}))]}))}))};K.default.button`
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
`,ey=({addon:t,rootNode:n})=>{const{content:r,type:i,icon:a,id:o,zIndex:s,"data-testid":l}=t;return e.jsx(Jv,{children:e.jsx(Qv,{trigger:"click",id:o,"data-testid":l,popoverContent:r,rootNode:n,zIndex:s,icon:null!=a?a:e.jsx(c.ICircleFillIcon,{"data-testid":`${i}-icon`}),ariaLabel:"More info"})})},ty=K.default.label`
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
`,iy=t=>{var{children:n,addon:r,subtitle:i,"data-testid":a}=t,o=X(t,["children","addon","subtitle","data-testid"]);return e.jsxs(ty,Object.assign({},o,{children:[n,r&&r.type&&("popover"===r.type?e.jsx(ey,{addon:r}):null),"string"==typeof i?e.jsx(ry,Object.assign({as:"span","data-testid":a?`${a}-subtitle`:"subtitle"},o,{children:i})):i]}))},ay=t=>e.jsx(ny,Object.assign({weight:"semibold"},t)),oy=Y.default.forwardRef(((t,n)=>{const{children:r,"data-testid":i="container",type:a="flex",stretch:o=!1}=t,s=X(t,["children","data-testid","type","stretch"]);return e.jsx(sy,Object.assign({ref:n,"data-testid":i,$type:a,$stretch:o},s,{children:r}))})),sy=K.default.div`
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
`,ly=Y.default.forwardRef(((t,n)=>{const{children:r,"data-testid":i="section",stretch:a=!1}=t,o=X(t,["children","data-testid","stretch"]);return e.jsx(cy,Object.assign({ref:n,"data-testid":i,$stretch:a},o,{children:r}))})),cy=K.default.section`
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
`,dy=Y.default.forwardRef(((t,n)=>{const{children:r,"data-testid":i="content",className:a,type:o="flex",stretch:s=!1}=t,l=X(t,["children","data-testid","className","type","stretch"]);return e.jsx(ly,Object.assign({ref:n,"data-testid":i,className:a,stretch:s},l,{children:e.jsx(oy,Object.assign({"data-testid":`${i}-container`,type:o,"data-id":"container",stretch:s},{children:r}))}))})),uy={Section:ly,Container:oy,Content:dy,ColDiv:eh},fy=i.css`
    display: flex;
    flex-direction: column;

    &:not(:last-child) {
        margin-bottom: 2rem;
    }
`,hy=K.default.div`
    ${fy}
`,py=K.default(uy.ColDiv)`
    ${fy}
`,gy=({label:n,errorMessage:r,id:i,disabled:a,children:o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,"data-error-testid":u})=>{const f=!s&&(l||c||d)?"grid":s||"flex",h=()=>u||(i?`${i}-error-message`:"error-message"),p=()=>!!r;const g="grid"===f?py:hy;return e.jsxs(g,Object.assign({},(e=>{switch(e){case"grid":return{mobileCols:l,tabletCols:c,desktopCols:d};case"flex":return}})(f),{children:[n&&("string"==typeof n?e.jsx(iy,Object.assign({htmlFor:`${i}-base`,"data-testid":i?`${i}-label`:"form-label",disabled:a},{children:n})):e.jsx(iy,Object.assign({htmlFor:`${i}-base`,"data-testid":i?`${i}-label`:"form-label",disabled:a},n))),(()=>{const e={"aria-invalid":p(),"aria-describedby":p()&&h()};return t.Children.map(o,(n=>t.cloneElement(n,e)))})(),r&&e.jsx(ny,Object.assign({id:h(),weight:"semibold",tabIndex:0,"data-testid":h()},{children:r}))]}))};function my(e,t){return my=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},my(e,t)}function by(e){return e&&e.stopPropagation&&e.stopPropagation(),e&&e.preventDefault&&e.preventDefault(),!1}function vy(e){return null==e?[]:Array.isArray(e)?e.slice():[e]}function yy(e){return null!==e&&1===e.length?e[0]:e.slice()}function xy(e){Object.keys(e).forEach((t=>{"undefined"!=typeof document&&document.addEventListener(t,e[t],!1)}))}function wy(e,t){return $y(function(e,t){let n=e;return n<=t.min&&(n=t.min),n>=t.max&&(n=t.max),n}(e,t),t)}function $y(e,t){const n=(e-t.min)%t.step;let r=e-n;return 2*Math.abs(n)>=t.step&&(r+=n>0?t.step:-t.step),parseFloat(r.toFixed(5))}let jy=function(e){function t(t){var n;(n=e.call(this,t)||this).onKeyUp=()=>{n.onEnd()},n.onMouseUp=()=>{n.onEnd(n.getMouseEventMap())},n.onTouchEnd=e=>{e.preventDefault(),n.onEnd(n.getTouchEventMap())},n.onBlur=()=>{n.setState({index:-1},n.onEnd(n.getKeyDownEventMap()))},n.onMouseMove=e=>{n.setState({pending:!0});const t=n.getMousePosition(e),r=n.getDiffPosition(t[0]),i=n.getValueFromPosition(r);n.move(i)},n.onTouchMove=e=>{if(e.touches.length>1)return;n.setState({pending:!0});const t=n.getTouchPosition(e);if(void 0===n.isScrolling){const e=t[0]-n.startPosition[0],r=t[1]-n.startPosition[1];n.isScrolling=Math.abs(r)>Math.abs(e)}if(n.isScrolling)return void n.setState({index:-1});const r=n.getDiffPosition(t[0]),i=n.getValueFromPosition(r);n.move(i)},n.onKeyDown=e=>{if(!(e.ctrlKey||e.shiftKey||e.altKey||e.metaKey))switch(n.setState({pending:!0}),e.key){case"ArrowLeft":case"ArrowDown":case"Left":case"Down":e.preventDefault(),n.moveDownByStep();break;case"ArrowRight":case"ArrowUp":case"Right":case"Up":e.preventDefault(),n.moveUpByStep();break;case"Home":e.preventDefault(),n.move(n.props.min);break;case"End":e.preventDefault(),n.move(n.props.max);break;case"PageDown":e.preventDefault(),n.moveDownByStep(n.props.pageFn(n.props.step));break;case"PageUp":e.preventDefault(),n.moveUpByStep(n.props.pageFn(n.props.step))}},n.onSliderMouseDown=e=>{if(!n.props.disabled&&2!==e.button){if(n.setState({pending:!0}),!n.props.snapDragDisabled){const t=n.getMousePosition(e);n.forceValueFromPosition(t[0],(e=>{n.start(e,t[0]),xy(n.getMouseEventMap())}))}by(e)}},n.onSliderClick=e=>{if(!n.props.disabled&&n.props.onSliderClick&&!n.hasMoved){const t=n.getMousePosition(e),r=wy(n.calcValue(n.calcOffsetFromPosition(t[0])),n.props);n.props.onSliderClick(r)}},n.createOnKeyDown=e=>t=>{n.props.disabled||(n.start(e),xy(n.getKeyDownEventMap()),by(t))},n.createOnMouseDown=e=>t=>{if(n.props.disabled||2===t.button)return;n.setState({pending:!0});const r=n.getMousePosition(t);n.start(e,r[0]),xy(n.getMouseEventMap()),by(t)},n.createOnTouchStart=e=>t=>{if(n.props.disabled||t.touches.length>1)return;n.setState({pending:!0});const r=n.getTouchPosition(t);n.startPosition=r,n.isScrolling=void 0,n.start(e,r[0]),xy(n.getTouchEventMap()),function(e){e.stopPropagation&&e.stopPropagation()}(t)},n.handleResize=()=>{const e=window.setTimeout((()=>{n.pendingResizeTimeouts.shift(),n.resize()}),0);n.pendingResizeTimeouts.push(e)},n.renderThumb=(e,t)=>{const r=n.props.thumbClassName+" "+n.props.thumbClassName+"-"+t+" "+(n.state.index===t?n.props.thumbActiveClassName:""),i={ref:e=>{n["thumb"+t]=e},key:n.props.thumbClassName+"-"+t,className:r,style:e,onMouseDown:n.createOnMouseDown(t),onTouchStart:n.createOnTouchStart(t),onFocus:n.createOnKeyDown(t),tabIndex:0,role:"slider","aria-orientation":n.props.orientation,"aria-valuenow":n.state.value[t],"aria-valuemin":n.props.min,"aria-valuemax":n.props.max,"aria-label":Array.isArray(n.props.ariaLabel)?n.props.ariaLabel[t]:n.props.ariaLabel,"aria-labelledby":Array.isArray(n.props.ariaLabelledby)?n.props.ariaLabelledby[t]:n.props.ariaLabelledby,"aria-disabled":n.props.disabled},a={index:t,value:yy(n.state.value),valueNow:n.state.value[t]};return n.props.ariaValuetext&&(i["aria-valuetext"]="string"==typeof n.props.ariaValuetext?n.props.ariaValuetext:n.props.ariaValuetext(a)),n.props.renderThumb(i,a)},n.renderTrack=(e,t,r)=>{const i={key:n.props.trackClassName+"-"+e,className:n.props.trackClassName+" "+n.props.trackClassName+"-"+e,style:n.buildTrackStyle(t,n.state.upperBound-r)},a={index:e,value:yy(n.state.value)};return n.props.renderTrack(i,a)};let r=vy(t.value);r.length||(r=vy(t.defaultValue)),n.pendingResizeTimeouts=[];const i=[];for(let e=0;e<r.length;e+=1)r[e]=wy(r[e],t),i.push(e);return n.resizeObserver=null,n.resizeElementRef=Y.default.createRef(),n.state={index:-1,upperBound:0,sliderLength:0,value:r,zIndices:i},n}!function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,my(e,t)}(t,e);var n=t.prototype;return n.componentDidMount=function(){"undefined"!=typeof window&&(this.resizeObserver=new ResizeObserver(this.handleResize),this.resizeObserver.observe(this.resizeElementRef.current),this.resize())},t.getDerivedStateFromProps=function(e,t){const n=vy(e.value);return n.length?t.pending?null:{value:n.map((t=>wy(t,e)))}:null},n.componentDidUpdate=function(){0===this.state.upperBound&&this.resize()},n.componentWillUnmount=function(){this.clearPendingResizeTimeouts(),this.resizeObserver&&this.resizeObserver.disconnect()},n.onEnd=function(e){e&&function(e){Object.keys(e).forEach((t=>{"undefined"!=typeof document&&document.removeEventListener(t,e[t],!1)}))}(e),this.hasMoved&&this.fireChangeEvent("onAfterChange"),this.setState({pending:!1}),this.hasMoved=!1},n.getValue=function(){return yy(this.state.value)},n.getClosestIndex=function(e){let t=Number.MAX_VALUE,n=-1;const{value:r}=this.state,i=r.length;for(let a=0;a<i;a+=1){const i=this.calcOffset(r[a]),o=Math.abs(e-i);o<t&&(t=o,n=a)}return n},n.getMousePosition=function(e){return[e["page"+this.axisKey()],e["page"+this.orthogonalAxisKey()]]},n.getTouchPosition=function(e){const t=e.touches[0];return[t["page"+this.axisKey()],t["page"+this.orthogonalAxisKey()]]},n.getKeyDownEventMap=function(){return{keydown:this.onKeyDown,keyup:this.onKeyUp,focusout:this.onBlur}},n.getMouseEventMap=function(){return{mousemove:this.onMouseMove,mouseup:this.onMouseUp}},n.getTouchEventMap=function(){return{touchmove:this.onTouchMove,touchend:this.onTouchEnd}},n.getValueFromPosition=function(e){const t=e/(this.state.sliderLength-this.state.thumbSize)*(this.props.max-this.props.min);return wy(this.state.startValue+t,this.props)},n.getDiffPosition=function(e){let t=e-this.state.startPosition;return this.props.invert&&(t*=-1),t},n.resize=function(){const{slider:e,thumb0:t}=this;if(!e||!t)return;const n=this.sizeKey(),r=e.getBoundingClientRect(),i=e[n],a=r[this.posMaxKey()],o=r[this.posMinKey()],s=t.getBoundingClientRect()[n.replace("client","").toLowerCase()],l=i-s,c=Math.abs(a-o);this.state.upperBound===l&&this.state.sliderLength===c&&this.state.thumbSize===s||this.setState({upperBound:l,sliderLength:c,thumbSize:s})},n.calcOffset=function(e){const t=this.props.max-this.props.min;return 0===t?0:(e-this.props.min)/t*this.state.upperBound},n.calcValue=function(e){return e/this.state.upperBound*(this.props.max-this.props.min)+this.props.min},n.calcOffsetFromPosition=function(e){const{slider:t}=this,n=t.getBoundingClientRect(),r=n[this.posMaxKey()],i=n[this.posMinKey()];let a=e-(window["page"+this.axisKey()+"Offset"]+(this.props.invert?r:i));return this.props.invert&&(a=this.state.sliderLength-a),a-=this.state.thumbSize/2,a},n.forceValueFromPosition=function(e,t){const n=this.calcOffsetFromPosition(e),r=this.getClosestIndex(n),i=wy(this.calcValue(n),this.props),a=this.state.value.slice();a[r]=i;for(let e=0;e<a.length-1;e+=1)if(a[e+1]-a[e]<this.props.minDistance)return;this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0,this.setState({value:a},(()=>{t(r),this.fireChangeEvent("onChange")}))},n.clearPendingResizeTimeouts=function(){do{const e=this.pendingResizeTimeouts.shift();clearTimeout(e)}while(this.pendingResizeTimeouts.length)},n.start=function(e,t){const n=this["thumb"+e];n&&n.focus();const{zIndices:r}=this.state;r.splice(r.indexOf(e),1),r.push(e),this.setState((n=>({startValue:n.value[e],startPosition:void 0!==t?t:n.startPosition,index:e,zIndices:r})))},n.moveUpByStep=function(e){void 0===e&&(e=this.props.step);const t=this.state.value[this.state.index],n=wy(this.props.invert&&"horizontal"===this.props.orientation?t-e:t+e,this.props);this.move(Math.min(n,this.props.max))},n.moveDownByStep=function(e){void 0===e&&(e=this.props.step);const t=this.state.value[this.state.index],n=wy(this.props.invert&&"horizontal"===this.props.orientation?t+e:t-e,this.props);this.move(Math.max(n,this.props.min))},n.move=function(e){const t=this.state.value.slice(),{index:n}=this.state,{length:r}=t,i=t[n];if(e===i)return;this.hasMoved||this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0;const{pearling:a,max:o,min:s,minDistance:l}=this.props;if(!a){if(n>0){const r=t[n-1];e<r+l&&(e=r+l)}if(n<r-1){const r=t[n+1];e>r-l&&(e=r-l)}}t[n]=e,a&&r>1&&(e>i?(this.pushSucceeding(t,l,n),function(e,t,n,r){for(let i=0;i<e;i+=1){const a=r-i*n;t[e-1-i]>a&&(t[e-1-i]=a)}}(r,t,l,o)):e<i&&(this.pushPreceding(t,l,n),function(e,t,n,r){for(let i=0;i<e;i+=1){const e=r+i*n;t[i]<e&&(t[i]=e)}}(r,t,l,s))),this.setState({value:t},this.fireChangeEvent.bind(this,"onChange"))},n.pushSucceeding=function(e,t,n){let r,i;for(r=n,i=e[r]+t;null!==e[r+1]&&i>e[r+1];r+=1,i=e[r]+t)e[r+1]=$y(i,this.props)},n.pushPreceding=function(e,t,n){for(let r=n,i=e[r]-t;null!==e[r-1]&&i<e[r-1];r-=1,i=e[r]-t)e[r-1]=$y(i,this.props)},n.axisKey=function(){return"vertical"===this.props.orientation?"Y":"X"},n.orthogonalAxisKey=function(){return"vertical"===this.props.orientation?"X":"Y"},n.posMinKey=function(){return"vertical"===this.props.orientation?this.props.invert?"bottom":"top":this.props.invert?"right":"left"},n.posMaxKey=function(){return"vertical"===this.props.orientation?this.props.invert?"top":"bottom":this.props.invert?"left":"right"},n.sizeKey=function(){return"vertical"===this.props.orientation?"clientHeight":"clientWidth"},n.fireChangeEvent=function(e){this.props[e]&&this.props[e](yy(this.state.value),this.state.index)},n.buildThumbStyle=function(e,t){const n={position:"absolute",touchAction:"none",willChange:this.state.index>=0?this.posMinKey():void 0,zIndex:this.state.zIndices.indexOf(t)+1};return n[this.posMinKey()]=e+"px",n},n.buildTrackStyle=function(e,t){const n={position:"absolute",willChange:this.state.index>=0?this.posMinKey()+","+this.posMaxKey():void 0};return n[this.posMinKey()]=e,n[this.posMaxKey()]=t,n},n.buildMarkStyle=function(e){var t;return(t={position:"absolute"})[this.posMinKey()]=e,t},n.renderThumbs=function(e){const{length:t}=e,n=[];for(let r=0;r<t;r+=1)n[r]=this.buildThumbStyle(e[r],r);const r=[];for(let e=0;e<t;e+=1)r[e]=this.renderThumb(n[e],e);return r},n.renderTracks=function(e){const t=[],n=e.length-1;t.push(this.renderTrack(0,0,e[0]));for(let r=0;r<n;r+=1)t.push(this.renderTrack(r+1,e[r],e[r+1]));return t.push(this.renderTrack(n+1,e[n],this.state.upperBound)),t},n.renderMarks=function(){let{marks:e}=this.props;const t=this.props.max-this.props.min+1;return"boolean"==typeof e?e=Array.from({length:t}).map(((e,t)=>t)):"number"==typeof e&&(e=Array.from({length:t}).map(((e,t)=>t)).filter((t=>t%e==0))),e.map(parseFloat).sort(((e,t)=>e-t)).map((e=>{const t=this.calcOffset(e),n={key:e,className:this.props.markClassName,style:this.buildMarkStyle(t)};return this.props.renderMark(n)}))},n.render=function(){const e=[],{value:t}=this.state,n=t.length;for(let r=0;r<n;r+=1)e[r]=this.calcOffset(t[r],r);const r=this.props.withTracks?this.renderTracks(e):null,i=this.renderThumbs(e),a=this.props.marks?this.renderMarks():null;return Y.default.createElement("div",{ref:e=>{this.slider=e,this.resizeElementRef.current=e},style:{position:"relative"},className:this.props.className+(this.props.disabled?" disabled":""),onMouseDown:this.onSliderMouseDown,onClick:this.onSliderClick},r,i,a)},t}(Y.default.Component);jy.displayName="ReactSlider",jy.defaultProps={min:0,max:100,step:1,pageFn:e=>10*e,minDistance:0,defaultValue:0,orientation:"horizontal",className:"slider",thumbClassName:"thumb",thumbActiveClassName:"active",trackClassName:"track",markClassName:"mark",withTracks:!0,pearling:!1,disabled:!1,snapDragDisabled:!1,invert:!1,marks:[],renderThumb:e=>Y.default.createElement("div",e),renderTrack:e=>Y.default.createElement("div",e),renderMark:e=>Y.default.createElement("span",e)};var Sy=jy;const ky=K.default.div`
    isolation: isolate;
`,Oy=K.default.div`
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
`,Cy=K.default.div`
    margin-bottom: 1rem;
`,Dy=K.default(exports.Text.Body)`
    overflow-wrap: anywhere;
`,Ty=K.default(Sy)`
    height: 0.875rem;
`,_y=K.default.div`
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

    :focus-visible ${_y}:after {
        border: 1px solid ${ts.Primary};
    }
`,My=K.default.div`
    height: 0.25rem;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 1rem;

    background: ${e=>e.$color&&"function"==typeof e.$color?e.$color(e):e.$color||ts.Neutral[4](e)};
`,Iy=n=>{var{value:r,min:i=0,max:a=100,step:o=1,minRange:s,numOfThumbs:l=2,colors:c,disabled:d,readOnly:u,ariaLabels:f,showSliderLabels:h,sliderLabelPrefix:p,sliderLabelSuffix:g,showIndicatorLabel:m,indicatorLabelPrefix:b,indicatorLabelSuffix:v,renderSliderLabel:y,onChange:x,onChangeEnd:w}=n,$=X(n,["value","min","max","step","minRange","numOfThumbs","colors","disabled","readOnly","ariaLabels","showSliderLabels","sliderLabelPrefix","sliderLabelSuffix","showIndicatorLabel","indicatorLabelPrefix","indicatorLabelSuffix","renderSliderLabel","onChange","onChangeEnd"]);const[j,S]=t.useState(O()),k=function(){const e=function(){const e=d||u?ts.Neutral[5]:ts.Neutral[4],t=d||u?ts.Neutral[4]:ts.Primary;if(1===l)return[t,e];const n=[];n.push(e);for(let e=0;e<l-1;e++)n.push(t);return n.push(e),n}();return new Array(l+1).fill(0).map(((t,n)=>(null==c?void 0:c[n])||e[n]))}();t.useEffect((()=>{r!==j&&S(O())}),[r]);function O(){if(r&&r.length===l)return r;const e=[];for(let t=0;t<l;t++)e.push(i+o*t);return e}const C=t=>y?y(t):e.jsxs(Dy,{children:[p,t,g]});return e.jsxs(ky,Object.assign({},$,{children:[m&&e.jsx(Cy,{children:(()=>{let t="";if(1===j.length)t=`${j[0]}`;else if(2===j.length)t=`${j[0]} - ${j[1]}`;else if(j.length>2){t=`${Math.min(...j)} - ${Math.max(...j)}`}return e.jsxs(Dy,{children:[b,t,v]})})()}),e.jsx(Ty,{step:o,min:i,max:a,value:j,disabled:d||u,onChange:(e,t)=>{if("number"==typeof e){const t=[e];S(t),null==x||x(t)}else{if(t>-1&&j[t]===e[t])return;S(e),null==x||x(e)}},onAfterChange:e=>{if("number"==typeof e){const t=[e];S(t),null==w||w(t)}else S(e),null==w||w(e)},minDistance:s,ariaLabel:f,renderThumb:(t,n)=>e.jsx(Ey,Object.assign({"data-testid":`slider-thumb-${n.index}`},t,{tabIndex:d?void 0:t.tabIndex},{children:e.jsx(_y,{$disabled:d,$readOnly:u})})),renderTrack:(t,n)=>e.jsx(My,Object.assign({"data-testid":`slider-track-${n.index}`},t,{$color:k[n.index]}))}),h&&e.jsxs(Oy,{children:[e.jsx("div",{children:C(i)}),e.jsx("div",{children:C(a)})]})]}))},Ny=K.default.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: baseline;
`,Ay=K.default.div`
    margin: 0 0.5rem;
`,Ry=K.default.div`
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: flex-end;
    padding: 0 0.4375rem;
`,Fy=K.default.div`
    flex: 1;
    border-radius: 4px 4px 0px 0px;
    border: 0.5px solid ${ts.Neutral[8]};

    ${e=>{let t=ts.Neutral[6];return e.$disabled&&e.$selected?t=ts.Neutral[4]:e.$disabled?t=ts.Neutral[5]:e.$selected&&(t=ts.Accent.Light[1]),i.css`
            background-color: ${t};
        `}}
`,By=K.default(Iy)`
    margin-top: -0.3125rem;
`,Py=n=>{var{bins:r=[],interval:i,disabled:a,readOnly:o,value:s,showRangeLabels:l,rangeLabelPrefix:c,rangeLabelSuffix:d,ariaLabels:u,onChange:f,onChangeEnd:h,renderEmptyView:p,renderRangeLabel:g}=n,m=X(n,["bins","interval","disabled","readOnly","value","showRangeLabels","rangeLabelPrefix","rangeLabelSuffix","ariaLabels","onChange","onChangeEnd","renderEmptyView","renderRangeLabel"]);const b=r.map((e=>e.count)),v=Math.max(...b),y=r.map((e=>e.minValue)),x=Math.max(...y),w=Math.min(...y),[$,j]=t.useState(C()),S=t.useMemo((()=>{const e=[...r].sort(((e,t)=>e.minValue-t.minValue)),t=(x-w)/i+1,n=[];for(let r=0;r<t;r++){const t=e.find((e=>e.minValue===w+i*r));t?n.push(t):n.push({count:0,minValue:w+i*r})}return n}),[r,i]);t.useEffect((()=>{s!==$&&j(C())}),[s]);const k=e=>{j(e),null==f||f(e)},O=e=>{j(e),null==h||h(e)};function C(){return null!=s?s:[w,w+i]}const D=t=>g?g(t):e.jsxs(exports.Text.Body,{children:[c,t,d]});return e.jsxs("div",Object.assign({},m,{children:[l&&e.jsxs(Ny,{children:[D($[0]),e.jsx(Ay,{children:"-"}),D($[1])]}),S.every((e=>0===e.count))&&p?p():e.jsxs(e.Fragment,{children:[e.jsx(Ry,{children:S.map(((t,n)=>{const r=t.count/v;return e.jsx(Fy,{style:{height:r?`calc(calc(100% - 0.25rem) * ${r} + 0.25rem)`:0},$selected:t.minValue>=$[0]&&t.minValue<$[1],$disabled:a||o},n)}))}),e.jsx(By,{min:w,max:x+i,step:i,minRange:i,numOfThumbs:2,value:$,disabled:a,readOnly:o,ariaLabels:u,onChange:k,onChangeEnd:O})]})]}))},Ly=K.default.input`
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
`,Vy=Y.default.forwardRef(((n,r)=>{var{value:i,spacing:a,type:o,error:s,disabled:l,readOnly:c,onChange:d,onClear:u,allowClear:f=!1,className:h,styleType:p="bordered"}=n,g=X(n,["value","spacing","type","error","disabled","readOnly","onChange","onClear","allowClear","className","styleType"]);const m=t.useRef();t.useImperativeHandle(r,(()=>m.current),[]);const b=gc({ref:m,formatter:e=>dc.transformWithSpaces(e,a)}),v=e=>{d&&(x()?w(e):d(e))},y=()=>{u&&u(),m&&m.current&&m.current.focus()},x=()=>"tel"===o&&a,w=e=>{const{nextValue:t,updateCaretPosition:n}=b(),r=t.replace(/\s/g,"");e.target.value=r,d(e),n()},$=i?(e=>e?x()?dc.transformWithSpaces(e,a):e:"")(i):i,j=()=>e.jsxs(e.Fragment,{children:[e.jsx(Ly,Object.assign({"data-testid":"input",ref:m,disabled:l,value:$,onChange:v,type:o,readOnly:c},g)),f&&!l&&!c&&!!i&&e.jsx(zy,Object.assign({onClick:y,type:"button"},{children:e.jsx(Hy,{"aria-hidden":!0})}))]});return e.jsx(e.Fragment,{children:"no-border"===p?e.jsx(Wy,Object.assign({className:h},{children:j()})):e.jsx(Sf,Object.assign({$disabled:l,$error:s,$readOnly:c,className:h},{children:j()}))})})),Yy=Y.default.forwardRef(((t,n)=>{const{label:r,errorMessage:i,id:a="form-field","data-error-testid":o,"data-testid":s,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u}=t,f=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e.jsx(gy,Object.assign({id:a,label:r,errorMessage:i,disabled:f.disabled,"data-error-testid":o,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u},{children:e.jsx(Vy,Object.assign({id:`${a}-base`,"data-testid":s||a,ref:n,error:!!i},f))}))})),Uy=K.default.div`
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
        box-shadow: ${Ys.InputBoxShadow};
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
                    box-shadow: ${Ys.InputErrorBoxShadow};
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
`;var Xy=io;var Gy=io,Zy=ao,Qy=$o;var Jy=io,ex=function(){this.__data__=new Xy,this.size=0},tx=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n},nx=function(e){return this.__data__.get(e)},rx=function(e){return this.__data__.has(e)},ix=function(e,t){var n=this.__data__;if(n instanceof Gy){var r=n.__data__;if(!Zy||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new Qy(r)}return n.set(e,t),this.size=n.size,this};function ax(e){var t=this.__data__=new Jy(e);this.size=t.size}ax.prototype.clear=ex,ax.prototype.delete=tx,ax.prototype.get=nx,ax.prototype.has=rx,ax.prototype.set=ix;var ox=ax;var sx=$o,lx=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},cx=function(e){return this.__data__.has(e)};function dx(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new sx;++t<n;)this.add(e[t])}dx.prototype.add=dx.prototype.push=lx,dx.prototype.has=cx;var ux=dx,fx=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1},hx=function(e,t){return e.has(t)};var px=function(e,t,n,r,i,a){var o=1&n,s=e.length,l=t.length;if(s!=l&&!(o&&l>s))return!1;var c=a.get(e),d=a.get(t);if(c&&d)return c==t&&d==e;var u=-1,f=!0,h=2&n?new ux:void 0;for(a.set(e,t),a.set(t,e);++u<s;){var p=e[u],g=t[u];if(r)var m=o?r(g,p,u,t,e,a):r(p,g,u,e,t,a);if(void 0!==m){if(m)continue;f=!1;break}if(h){if(!fx(t,(function(e,t){if(!hx(h,t)&&(p===e||i(p,e,n,r,a)))return h.push(t)}))){f=!1;break}}else if(p!==g&&!i(p,g,n,r,a)){f=!1;break}}return a.delete(e),a.delete(t),f};var gx=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n},mx=Ai.Uint8Array,bx=Va,vx=px,yx=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r){n[++t]=[r,e]})),n},xx=gx,wx=Ri?Ri.prototype:void 0,$x=wx?wx.valueOf:void 0;var jx=function(e,t,n,r,i,a,o){switch(n){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!a(new mx(e),new mx(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return bx(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var s=yx;case"[object Set]":var l=1&r;if(s||(s=xx),e.size!=t.size&&!l)return!1;var c=o.get(e);if(c)return c==t;r|=2,o.set(e,t);var d=vx(s(e),s(t),r,i,a,o);return o.delete(e),d;case"[object Symbol]":if($x)return $x.call(e)==$x.call(t)}return!1};var Sx=function(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e},kx=Ei;var Ox=function(e,t,n){var r=t(e);return kx(e)?r:Sx(r,n(e))};var Cx=function(e,t){for(var n=-1,r=null==e?0:e.length,i=0,a=[];++n<r;){var o=e[n];t(o,n,e)&&(a[i++]=o)}return a},Dx=function(){return[]},Tx=Object.prototype.propertyIsEnumerable,_x=Object.getOwnPropertySymbols,Ex=_x?function(e){return null==e?[]:(e=Object(e),Cx(_x(e),(function(t){return Tx.call(e,t)})))}:Dx;var Mx=function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r},Ix=Ki,Nx=qi;var Ax=function(e){return Nx(e)&&"[object Arguments]"==Ix(e)},Rx=qi,Fx=Object.prototype,Bx=Fx.hasOwnProperty,Px=Fx.propertyIsEnumerable,Lx=Ax(function(){return arguments}())?Ax:function(e){return Rx(e)&&Bx.call(e,"callee")&&!Px.call(e,"callee")},zx={exports:{}};var Hx=function(){return!1};!function(e,t){var n=Ai,r=Hx,i=t&&!t.nodeType&&t,a=i&&e&&!e.nodeType&&e,o=a&&a.exports===i?n.Buffer:void 0,s=(o?o.isBuffer:void 0)||r;e.exports=s}(zx,zx.exports);var Wx=zx.exports,Vx=/^(?:0|[1-9]\d*)$/;var Yx=function(e,t){var n=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==n||"symbol"!=n&&Vx.test(e))&&e>-1&&e%1==0&&e<t};var Ux=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},Kx=Ki,qx=Ux,Xx=qi,Gx={};Gx["[object Float32Array]"]=Gx["[object Float64Array]"]=Gx["[object Int8Array]"]=Gx["[object Int16Array]"]=Gx["[object Int32Array]"]=Gx["[object Uint8Array]"]=Gx["[object Uint8ClampedArray]"]=Gx["[object Uint16Array]"]=Gx["[object Uint32Array]"]=!0,Gx["[object Arguments]"]=Gx["[object Array]"]=Gx["[object ArrayBuffer]"]=Gx["[object Boolean]"]=Gx["[object DataView]"]=Gx["[object Date]"]=Gx["[object Error]"]=Gx["[object Function]"]=Gx["[object Map]"]=Gx["[object Number]"]=Gx["[object Object]"]=Gx["[object RegExp]"]=Gx["[object Set]"]=Gx["[object String]"]=Gx["[object WeakMap]"]=!1;var Zx=function(e){return Xx(e)&&qx(e.length)&&!!Gx[Kx(e)]};var Qx=function(e){return function(t){return e(t)}},Jx={exports:{}};!function(e,t){var n=Mi,r=t&&!t.nodeType&&t,i=r&&e&&!e.nodeType&&e,a=i&&i.exports===r&&n.process,o=function(){try{var e=i&&i.require&&i.require("util").types;return e||a&&a.binding&&a.binding("util")}catch(e){}}();e.exports=o}(Jx,Jx.exports);var ew=Jx.exports,tw=Zx,nw=Qx,rw=ew&&ew.isTypedArray,iw=rw?nw(rw):tw,aw=Mx,ow=Lx,sw=Ei,lw=Wx,cw=Yx,dw=iw,uw=Object.prototype.hasOwnProperty;var fw=function(e,t){var n=sw(e),r=!n&&ow(e),i=!n&&!r&&lw(e),a=!n&&!r&&!i&&dw(e),o=n||r||i||a,s=o?aw(e.length,String):[],l=s.length;for(var c in e)!t&&!uw.call(e,c)||o&&("length"==c||i&&("offset"==c||"parent"==c)||a&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||cw(c,l))||s.push(c);return s},hw=Object.prototype;var pw=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||hw)};var gw=function(e,t){return function(n){return e(t(n))}}(Object.keys,Object),mw=pw,bw=gw,vw=Object.prototype.hasOwnProperty;var yw=function(e){if(!mw(e))return bw(e);var t=[];for(var n in Object(e))vw.call(e,n)&&"constructor"!=n&&t.push(n);return t},xw=sa,ww=Ux;var $w=function(e){return null!=e&&ww(e.length)&&!xw(e)},jw=fw,Sw=yw,kw=$w;var Ow=function(e){return kw(e)?jw(e):Sw(e)},Cw=Ox,Dw=Ex,Tw=Ow;var _w=function(e){return Cw(e,Tw,Dw)},Ew=Object.prototype.hasOwnProperty;var Mw=function(e,t,n,r,i,a){var o=1&n,s=_w(e),l=s.length;if(l!=_w(t).length&&!o)return!1;for(var c=l;c--;){var d=s[c];if(!(o?d in t:Ew.call(t,d)))return!1}var u=a.get(e),f=a.get(t);if(u&&f)return u==t&&f==e;var h=!0;a.set(e,t),a.set(t,e);for(var p=o;++c<l;){var g=e[d=s[c]],m=t[d];if(r)var b=o?r(m,g,d,t,e,a):r(g,m,d,e,t,a);if(!(void 0===b?g===m||i(g,m,n,r,a):b)){h=!1;break}p||(p="constructor"==d)}if(h&&!p){var v=e.constructor,y=t.constructor;v==y||!("constructor"in e)||!("constructor"in t)||"function"==typeof v&&v instanceof v&&"function"==typeof y&&y instanceof y||(h=!1)}return a.delete(e),a.delete(t),h},Iw=ka(Ai,"DataView"),Nw=ao,Aw=ka(Ai,"Promise"),Rw=ka(Ai,"Set"),Fw=ka(Ai,"WeakMap"),Bw=Ki,Pw=fa,Lw="[object Map]",zw="[object Promise]",Hw="[object Set]",Ww="[object WeakMap]",Vw="[object DataView]",Yw=Pw(Iw),Uw=Pw(Nw),Kw=Pw(Aw),qw=Pw(Rw),Xw=Pw(Fw),Gw=Bw;(Iw&&Gw(new Iw(new ArrayBuffer(1)))!=Vw||Nw&&Gw(new Nw)!=Lw||Aw&&Gw(Aw.resolve())!=zw||Rw&&Gw(new Rw)!=Hw||Fw&&Gw(new Fw)!=Ww)&&(Gw=function(e){var t=Bw(e),n="[object Object]"==t?e.constructor:void 0,r=n?Pw(n):"";if(r)switch(r){case Yw:return Vw;case Uw:return Lw;case Kw:return zw;case qw:return Hw;case Xw:return Ww}return t});var Zw=Gw,Qw=ox,Jw=px,e$=jx,t$=Mw,n$=Zw,r$=Ei,i$=Wx,a$=iw,o$="[object Arguments]",s$="[object Array]",l$="[object Object]",c$=Object.prototype.hasOwnProperty;var d$=function(e,t,n,r,i,a){var o=r$(e),s=r$(t),l=o?s$:n$(e),c=s?s$:n$(t),d=(l=l==o$?l$:l)==l$,u=(c=c==o$?l$:c)==l$,f=l==c;if(f&&i$(e)){if(!i$(t))return!1;o=!0,d=!1}if(f&&!d)return a||(a=new Qw),o||a$(e)?Jw(e,t,n,r,i,a):e$(e,t,l,n,r,i,a);if(!(1&n)){var h=d&&c$.call(e,"__wrapped__"),p=u&&c$.call(t,"__wrapped__");if(h||p){var g=h?e.value():e,m=p?t.value():t;return a||(a=new Qw),i(g,m,n,r,a)}}return!!f&&(a||(a=new Qw),t$(e,t,n,r,i,a))},u$=qi;var f$=function e(t,n,r,i,a){return t===n||(null==t||null==n||!u$(t)&&!u$(n)?t!=t&&n!=n:d$(t,n,r,i,e,a))},h$=ox,p$=f$;var g$=ra;var m$=function(e){return e==e&&!g$(e)},b$=m$,v$=Ow;var y$=function(e,t){return function(n){return null!=n&&(n[e]===t&&(void 0!==t||e in Object(n)))}},x$=function(e,t,n,r){var i=n.length,a=i,o=!r;if(null==e)return!a;for(e=Object(e);i--;){var s=n[i];if(o&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++i<a;){var l=(s=n[i])[0],c=e[l],d=s[1];if(o&&s[2]){if(void 0===c&&!(l in e))return!1}else{var u=new h$;if(r)var f=r(c,d,l,e,t,u);if(!(void 0===f?p$(d,c,3,r,u):f))return!1}}return!0},w$=function(e){for(var t=v$(e),n=t.length;n--;){var r=t[n],i=e[r];t[n]=[r,i,b$(i)]}return t},$$=y$;var j$=zo,S$=Lx,k$=Ei,O$=Yx,C$=Ux,D$=Wo;var T$=function(e,t){return null!=e&&t in Object(e)},_$=function(e,t,n){for(var r=-1,i=(t=j$(t,e)).length,a=!1;++r<i;){var o=D$(t[r]);if(!(a=null!=e&&n(e,o)))break;e=e[o]}return a||++r!=i?a:!!(i=null==e?0:e.length)&&C$(i)&&O$(o,i)&&(k$(e)||S$(e))};var E$=f$,M$=qo,I$=function(e,t){return null!=e&&_$(e,t,T$)},N$=na,A$=m$,R$=y$,F$=Wo;var B$=Uo;var P$=function(e){return function(t){return null==t?void 0:t[e]}},L$=function(e){return function(t){return B$(t,e)}},z$=na,H$=Wo;var W$=function(e){var t=w$(e);return 1==t.length&&t[0][2]?$$(t[0][0],t[0][1]):function(n){return n===e||x$(n,e,t)}},V$=function(e,t){return N$(e)&&A$(t)?R$(F$(e),t):function(n){var r=M$(n,e);return void 0===r&&r===t?I$(n,e):E$(t,r,3)}},Y$=function(e){return e},U$=Ei,K$=function(e){return z$(e)?P$(H$(e)):L$(e)};var q$=function(e){return"function"==typeof e?e:null==e?Y$:"object"==typeof e?U$(e)?V$(e[0],e[1]):W$(e):K$(e)},X$=q$,G$=$w,Z$=Ow;var Q$=function(e){return function(t,n,r){var i=Object(t);if(!G$(t)){var a=X$(n);t=Z$(t),n=function(e){return a(i[e],e,i)}}var o=e(t,n,r);return o>-1?i[a?t[o]:o]:void 0}};var J$=Kd,ej=1/0;var tj=function(e){return e?(e=J$(e))===ej||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var nj=function(e,t,n,r){for(var i=e.length,a=n+(r?1:-1);r?a--:++a<i;)if(t(e[a],a,e))return a;return-1},rj=q$,ij=function(e){var t=tj(e),n=t%1;return t==t?n?t-n:t:0},aj=Math.max;var oj=function(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var i=null==n?0:ij(n);return i<0&&(i=aj(r+i,0)),nj(e,rj(t),i)},sj=_i(oj),lj=_i(Q$(oj)),cj=f$;var dj=_i((function(e,t){return cj(e,t)}));const uj=K.default(Di.div)`
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
`,Oj=K.default(s.ExclamationCircleFillIcon)`
    ${e=>{const t="small"===e.$variant?1:1.5;return i.css`
            height: ${t}rem;
            width: ${t}rem;
        `}}
    margin-right: 0.625rem;
    color: ${ts.Validation.Red.Icon};
`,Cj=e=>"small"===e?1:1.375,Dj=e=>i.css`
        height: ${Cj(e)}rem;
        width: ${Cj(e)}rem;
    `,Tj=K.default.li`
    background: ${ts.Neutral[7]};
    display: flex;
    border-radius: 4px;
    align-items: center;
`,_j=K.default(kf)`
    height: ${e=>"small"===e.$variant?2.5:3}rem;
    flex: 1;
    padding: 0 0.5rem 0 0;
    width: 100%;
`,Ej=K.default(x.MagnifierIcon)`
    ${e=>Dj(e.$variant)}
    margin: 0 0.5rem;
    color: ${ts.Neutral[3]};
`,Mj=K.default(ss)`
    ${e=>Dj(e.$variant)}
    padding: 0;
    margin: 0 0.5rem;
    color: ${ts.Neutral[3]};
    cursor: pointer;
    ${e=>{if("small"===e.$variant)return i.css`
                svg {
                    ${Dj(e.$variant)}
                }
            `}}
`,Ij=t.forwardRef(((t,n)=>{const{onClear:r}=t,i=X(t,["onClear"]);return e.jsxs(Tj,{children:[e.jsx(Ej,{$variant:t.variant}),e.jsx(_j,Object.assign({ref:n,$variant:t.variant},i)),i.value&&e.jsx(Mj,Object.assign({"aria-label":"Clear search",focusOutline:"browser",onClick:r,$variant:t.variant},{children:e.jsx(u.CrossIcon,{})}))]},"search")})),Nj=n=>{var{listItems:r,listExtractor:i,valueExtractor:a,onSelectItem:o,listStyleWidth:s,visible:l,enableSearch:c,searchPlaceholder:d="Search",onSearch:u,searchFunction:f,onDismiss:h,disableItemFocus:p,multiSelect:g,selectedItems:m,onSelectAll:b,onRetry:v,itemsLoadState:y="success",itemTruncationType:x="end",itemMaxLines:w=2,labelDisplayType:$="inline",renderListItem:j,onBlur:S,hideNoResultsDisplay:k,renderCustomCallToAction:O,variant:C="default"}=n,D=X(n,["listItems","listExtractor","valueExtractor","onSelectItem","listStyleWidth","visible","enableSearch","searchPlaceholder","onSearch","searchFunction","onDismiss","disableItemFocus","multiSelect","selectedItems","onSelectAll","onRetry","itemsLoadState","itemTruncationType","itemMaxLines","labelDisplayType","renderListItem","onBlur","hideNoResultsDisplay","renderCustomCallToAction","variant"]);const[T,_]=t.useState(0),[E,M]=t.useState(""),[I,N]=t.useState(r),[A,R]=t.useState(0),F=di({height:A}),B=t.useRef(),P=t.useRef(),L=t.useRef([]),z=t.useRef(),H=t.useRef(),W=t.useRef(T),V=t.useRef(I),Y=e=>{W.current=e,_(e)},U=e=>{V.current=e,N(e)};t.useEffect((()=>(document.addEventListener("keydown",J),()=>{document.removeEventListener("keydown",J)})),[]),t.useEffect((()=>{Z(E)}),[E]),t.useEffect((()=>{if(M(""),l){if(setTimeout((()=>{R(Q())})),p)return;z&&z.current?(z.current.focus(),Y(-1)):L.current[T]&&L.current[T].focus()}else R(0)}),[l]),t.useEffect((()=>{if(l){const e=Q();R(e)}}),[I,y]),t.useEffect((()=>{U(r),M(""),Y(0)}),[r]);const K=e=>i?i(e):e.toString(),q=e=>{if("inline"!==$)return!1;let t=0;P&&P.current&&(t=P.current.getBoundingClientRect().width-60);return dc.getTextWidth(e,"1.125rem 'Open Sans'")>t*w},G=e=>!!lj(m,(t=>dj(t,e))),Z=e=>{if(""===e)U(r);else if(f){const t=f(e);U(t)}else{const t=r.filter((t=>{var n;const r=K(t),i="object"==typeof r?r.title.toLowerCase():r.toLowerCase(),a="string"==typeof r||null===(n=r.secondaryLabel)||void 0===n?void 0:n.toLowerCase(),o=e.trim().toLowerCase();return i.includes(o)||a&&a.includes(o)}));U(t)}},Q=()=>(P&&P.current?P.current.getBoundingClientRect().height:0)+(H.current?H.current.getBoundingClientRect().height:0),J=e=>{if(B&&B.current.contains(e.target))switch(e.code){case"ArrowDown":if(W.current<V.current.length-1){const e=W.current+1;L.current[e].focus(),Y(e)}break;case"ArrowUp":if(W.current>0){const e=W.current-1;L.current[e].focus(),Y(W.current-1)}break;case"Escape":h&&h(!0)}},ee=(e,t)=>{e.preventDefault(),o&&o(t,(e=>a?a(e):e)(t))},te=e=>{const t=e.target.value;M(t),u&&u()},ne=()=>{M(""),z.current.focus(),u&&u()},re=()=>{v&&v()},ie=()=>{S&&S()},ae=t=>e.jsxs(e.Fragment,{children:[e.jsx(yj,Object.assign({$maxLines:w,"aria-hidden":!0},{children:t})),e.jsx(xj,Object.assign({$maxLines:w,"aria-hidden":!0},{children:t}))]}),oe=t=>{const n=K(t),r="string"==typeof n?n:n.title,i="string"==typeof n?void 0:n.secondaryLabel,a=q(r),o=i&&q(i),s=a||o?"next-line":$;return e.jsxs(vj,Object.assign({$labelDisplayType:s},{children:[e.jsx(mj,Object.assign({$truncateType:x,$maxLines:w,$variant:C,"aria-label":r},{children:"middle"===x&&a?ae(r):r})),i&&e.jsx(bj,Object.assign({$truncateType:x,$maxLines:w,$labelDisplayType:$,"aria-label":i},{children:"middle"===x&&o?ae(i):i}))]}))},se=()=>{if(!v||v&&"success"===y)return I.map(((t,n)=>e.jsx(hj,Object.assign({$checked:G(t)&&!g},{children:e.jsxs(pj,Object.assign({$hasNextLineLabel:"next-line"===$&&I.length>0&&i&&"string"!=typeof i(I[0]),onClick:e=>{ee(e,t)},ref:e=>L.current[n]=e,"data-testid":"list-item",type:"button",tabIndex:l?0:-1,$multiSelect:g,onBlur:ie,$variant:C},{children:[g&&e.jsx(wj,{checked:G(t),displaySize:"small"}),j?j(t,{selected:G(t)}):oe(t)]}))}),((e,t)=>`item_${t}__${a?a(e):e}`)(t,n))))},le=()=>{if(g&&I.length>0&&!E&&"success"===y)return e.jsx($j,{children:e.jsx(jj,Object.assign({onClick:b,type:"button",$variant:C},{children:0===m.length?"Select all":"Clear all"}))},"selectAll")},ce=()=>{if(!k&&(E||!c)&&0===I.length&&"success"===y)return e.jsxs(Sj,Object.assign({"data-testid":"list-no-results"},{children:[e.jsx(Oj,{"data-testid":"no-result-icon",$variant:C}),e.jsx(kj,Object.assign({$variant:C},{children:"No results found."}))]}),"noResults")},de=()=>{if(v&&"loading"===y){const t="small"===C?16:24;return e.jsxs(Sj,Object.assign({"data-testid":"list-loading"},{children:[e.jsx(Ks,{$buttonStyle:"secondary",size:t}),e.jsx(kj,Object.assign({$variant:C},{children:"Loading..."}))]}),"loading")}},ue=()=>{if(v&&"fail"===y)return e.jsxs(Sj,Object.assign({"data-testid":"list-fail"},{children:[e.jsx(Oj,{"data-testid":"load-error-icon",$variant:C}),e.jsx(kj,Object.assign({$variant:C},{children:"Failed to load."}))," ",e.jsx(jj,Object.assign({onClick:re,type:"button",$variant:C},{children:"Try again."}))]}),"noResults")};return e.jsx(e.Fragment,{children:e.jsxs(uj,Object.assign({style:F,"data-testid":l?"dropdown-container":"dropdown-container-hidden",ref:B},{children:[(()=>{if(l)return e.jsxs(fj,Object.assign({ref:P,"data-testid":"dropdown-list",width:s,role:"list"},D,{children:[(c||f)&&"success"===y?e.jsx(Ij,{ref:z,onChange:te,value:E,placeholder:d,"data-testid":"search-input","aria-label":"search-input",tabIndex:l?0:-1,onClear:ne,variant:C}):null,le(),ce(),de(),ue(),se()]}))})(),(()=>{if(l&&O)return e.jsx("div",Object.assign({ref:H,"data-testid":"custom-cta"},{children:O(h,I)}))})()]}))})},Aj=K.default.div`
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
`,Rj=K.default(af)`
    padding: 0;
    width: auto;
`,Fj=K.default.div`
    height: calc(3rem - 2px); // exclude top and bottom borders
    display: flex;
    align-items: center;
    padding: 0;
    background: transparent;
    margin-right: 0.75rem;
`,Bj=K.default.div`
    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: ${Ss.Base};
    margin: 0 0.75rem;
`,Pj=K.default(f.ChevronDownIcon)`
    color: ${ts.Neutral[3]};
    height: ${hs.Body.fontSize}rem;
    width: ${hs.Body.fontSize}rem;
    vertical-align: bottom;
`,Lj=K.default.div`
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
`,Vj=Y.default.forwardRef(((n,r)=>{var{addon:i,error:a,onChange:o,readOnly:s,className:l,onBlur:c}=n,d=X(n,["addon","error","onChange","readOnly","className","onBlur"]);const{placeholder:u,options:f,enableSearch:h,searchFunction:p,searchPlaceholder:g,valueExtractor:m,listExtractor:b,displayValueExtractor:v,selectedOption:y,onSelectOption:x,onHideOptions:w,onShowOptions:$,"data-selector-testid":j}=i.attributes,{position:S}=i,[k,O]=t.useState(y),[C,D]=t.useState(!1),T=t.useRef();t.useEffect((()=>{O(y)}),[y]);const _=()=>v?v(k):m?m(k):k.toString(),E=e=>{!e&&w&&w(),e&&$&&$()},M=e=>{e.preventDefault(),d.disabled||(D(!C),E(!C))},I=(e,t)=>{O(e),D(!1),E(!1),T&&T.current.focus(),x&&x(e,t)},N=e=>{o&&o(e)},A=()=>{c&&c()},R=()=>{D(!1),E(!1),T&&T.current.focus()};return e.jsxs(hf,Object.assign({className:l,show:C,error:a&&!C,disabled:d.disabled,readOnly:s,onBlur:()=>{D(!1),E(!1),A()}},{children:[e.jsxs(Aj,Object.assign({$expanded:C,$readOnly:s,$position:S},{children:[s?k?e.jsx(Fj,{children:e.jsx(zj,Object.assign({"data-testid":"selector-label"},{children:_()}))}):null:e.jsx(Rj,Object.assign({ref:T,type:"button",disabled:d.disabled,"data-testid":j||"addon-selector",onClick:M},{children:e.jsxs(e.Fragment,{children:[e.jsxs(Lj,{children:[u&&!k&&e.jsx(Hj,{children:u}),k&&e.jsx(zj,Object.assign({"data-testid":"selector-label"},{children:_()}))]}),e.jsx(Bj,Object.assign({$expanded:C},{children:e.jsx(Pj,{})}))]})})),e.jsx(Wj,{$readOnly:s,$position:S}),e.jsx(Ky,Object.assign({ref:r},d,{readOnly:s,error:a,onChange:N,"data-testid":d["data-testid"]||"input",onBlur:A}))]})),f&&f.length>0?e.jsx(Nj,{listItems:f,selectedItems:y?[y]:[],onSelectItem:I,valueExtractor:m,listExtractor:b,visible:C,enableSearch:h,searchFunction:p,searchPlaceholder:g,"data-testid":"dropdown-list",onBlur:A,onDismiss:R}):null]}))})),Yj=Y.default.forwardRef(((t,n)=>{var{addon:r,error:i,className:a}=t,o=X(t,["addon","error","className"]);const s=()=>e.jsx(Uy,Object.assign({disabled:o.disabled,$error:i,$readOnly:o.readOnly,"data-testid":o["data-testid"],className:a},{children:e.jsx(Ky,Object.assign({ref:n},o,{"data-testid":"input"}))}));if(!r)return s();{const{type:t="label",position:l="left"}=r,{allowClear:c}=o;switch(t){case"list":{const t=r.attributes;return t.options&&t.options.length>0?e.jsx(Vj,Object.assign({ref:n,addon:r,error:i,className:a},o)):s()}case"custom":{const t=r.attributes;return t.children?e.jsxs(Sf,Object.assign({$error:i,$disabled:o.disabled,$readOnly:o.readOnly,"data-testid":o["data-testid"],$position:l,className:a},{children:[e.jsx(qy,Object.assign({"data-testid":"addon",disabled:o.disabled,$readOnly:o.readOnly,$position:l},{children:t.children})),e.jsx(Ky,Object.assign({ref:n},o,{allowClear:c&&"right"!==l,error:i,"data-testid":"input"}))]})):s()}default:{const t=r.attributes;return t.value?e.jsxs(Sf,Object.assign({$disabled:o.disabled,$error:i,$readOnly:o.readOnly,"data-testid":o["data-testid"],$position:l,className:a},{children:[e.jsx(qy,Object.assign({"data-testid":"addon",disabled:o.disabled,$readOnly:o.readOnly,$position:l},{children:t.value})),e.jsx(Ky,Object.assign({ref:n},o,{allowClear:c&&"right"!==l,error:i,"data-testid":"input"}))]})):s()}}}})),Uj=Y.default.forwardRef(((t,n)=>{const{label:r,errorMessage:i,id:a="form-field-group","data-error-testid":o,"data-testid":s,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u}=t,f=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e.jsx(gy,Object.assign({id:a,label:r,errorMessage:i,disabled:f.disabled,"data-error-testid":o,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u},{children:e.jsx(Yj,Object.assign({ref:n,id:`${a}-base`,"data-testid":s||a,error:!!i},f))}))})),Kj=K.default(Yj)`
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
`,Zj=K.default(zs)`
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
 */!function(e,t){(function(){var n,r="Expected a function",i="__lodash_hash_undefined__",a="__lodash_placeholder__",o=16,s=32,l=64,c=128,d=256,u=1/0,f=9007199254740991,h=NaN,p=4294967295,g=[["ary",c],["bind",1],["bindKey",2],["curry",8],["curryRight",o],["flip",512],["partial",s],["partialRight",l],["rearg",d]],m="[object Arguments]",b="[object Array]",v="[object Boolean]",y="[object Date]",x="[object Error]",w="[object Function]",$="[object GeneratorFunction]",j="[object Map]",S="[object Number]",k="[object Object]",O="[object Promise]",C="[object RegExp]",D="[object Set]",T="[object String]",_="[object Symbol]",E="[object WeakMap]",M="[object ArrayBuffer]",I="[object DataView]",N="[object Float32Array]",A="[object Float64Array]",R="[object Int8Array]",F="[object Int16Array]",B="[object Int32Array]",P="[object Uint8Array]",L="[object Uint8ClampedArray]",z="[object Uint16Array]",H="[object Uint32Array]",W=/\b__p \+= '';/g,V=/\b(__p \+=) '' \+/g,Y=/(__e\(.*?\)|\b__t\)) \+\n'';/g,U=/&(?:amp|lt|gt|quot|#39);/g,K=/[&<>"']/g,q=RegExp(U.source),X=RegExp(K.source),G=/<%-([\s\S]+?)%>/g,Z=/<%([\s\S]+?)%>/g,Q=/<%=([\s\S]+?)%>/g,J=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ee=/^\w*$/,te=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ne=/[\\^$.*+?()[\]{}|]/g,re=RegExp(ne.source),ie=/^\s+/,ae=/\s/,oe=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,se=/\{\n\/\* \[wrapped with (.+)\] \*/,le=/,? & /,ce=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,de=/[()=,{}\[\]\/\s]/,ue=/\\(\\)?/g,fe=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,he=/\w*$/,pe=/^[-+]0x[0-9a-f]+$/i,ge=/^0b[01]+$/i,me=/^\[object .+?Constructor\]$/,be=/^0o[0-7]+$/i,ve=/^(?:0|[1-9]\d*)$/,ye=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,xe=/($^)/,we=/['\n\r\u2028\u2029\\]/g,$e="\\ud800-\\udfff",je="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",Se="\\u2700-\\u27bf",ke="a-z\\xdf-\\xf6\\xf8-\\xff",Oe="A-Z\\xc0-\\xd6\\xd8-\\xde",Ce="\\ufe0e\\ufe0f",De="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Te="['’]",_e="["+$e+"]",Ee="["+De+"]",Me="["+je+"]",Ie="\\d+",Ne="["+Se+"]",Ae="["+ke+"]",Re="[^"+$e+De+Ie+Se+ke+Oe+"]",Fe="\\ud83c[\\udffb-\\udfff]",Be="[^"+$e+"]",Pe="(?:\\ud83c[\\udde6-\\uddff]){2}",Le="[\\ud800-\\udbff][\\udc00-\\udfff]",ze="["+Oe+"]",He="\\u200d",We="(?:"+Ae+"|"+Re+")",Ve="(?:"+ze+"|"+Re+")",Ye="(?:['’](?:d|ll|m|re|s|t|ve))?",Ue="(?:['’](?:D|LL|M|RE|S|T|VE))?",Ke="(?:"+Me+"|"+Fe+")"+"?",qe="["+Ce+"]?",Xe=qe+Ke+("(?:"+He+"(?:"+[Be,Pe,Le].join("|")+")"+qe+Ke+")*"),Ge="(?:"+[Ne,Pe,Le].join("|")+")"+Xe,Ze="(?:"+[Be+Me+"?",Me,Pe,Le,_e].join("|")+")",Qe=RegExp(Te,"g"),Je=RegExp(Me,"g"),et=RegExp(Fe+"(?="+Fe+")|"+Ze+Xe,"g"),tt=RegExp([ze+"?"+Ae+"+"+Ye+"(?="+[Ee,ze,"$"].join("|")+")",Ve+"+"+Ue+"(?="+[Ee,ze+We,"$"].join("|")+")",ze+"?"+We+"+"+Ye,ze+"+"+Ue,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Ie,Ge].join("|"),"g"),nt=RegExp("["+He+$e+je+Ce+"]"),rt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,it=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],at=-1,ot={};ot[N]=ot[A]=ot[R]=ot[F]=ot[B]=ot[P]=ot[L]=ot[z]=ot[H]=!0,ot[m]=ot[b]=ot[M]=ot[v]=ot[I]=ot[y]=ot[x]=ot[w]=ot[j]=ot[S]=ot[k]=ot[C]=ot[D]=ot[T]=ot[E]=!1;var st={};st[m]=st[b]=st[M]=st[I]=st[v]=st[y]=st[N]=st[A]=st[R]=st[F]=st[B]=st[j]=st[S]=st[k]=st[C]=st[D]=st[T]=st[_]=st[P]=st[L]=st[z]=st[H]=!0,st[x]=st[w]=st[E]=!1;var lt={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},ct=parseFloat,dt=parseInt,ut="object"==typeof Ti&&Ti&&Ti.Object===Object&&Ti,ft="object"==typeof self&&self&&self.Object===Object&&self,ht=ut||ft||Function("return this")(),pt=t&&!t.nodeType&&t,gt=pt&&e&&!e.nodeType&&e,mt=gt&&gt.exports===pt,bt=mt&&ut.process,vt=function(){try{var e=gt&&gt.require&&gt.require("util").types;return e||bt&&bt.binding&&bt.binding("util")}catch(e){}}(),yt=vt&&vt.isArrayBuffer,xt=vt&&vt.isDate,wt=vt&&vt.isMap,$t=vt&&vt.isRegExp,jt=vt&&vt.isSet,St=vt&&vt.isTypedArray;function kt(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}function Ot(e,t,n,r){for(var i=-1,a=null==e?0:e.length;++i<a;){var o=e[i];t(r,o,n(o),e)}return r}function Ct(e,t){for(var n=-1,r=null==e?0:e.length;++n<r&&!1!==t(e[n],n,e););return e}function Dt(e,t){for(var n=null==e?0:e.length;n--&&!1!==t(e[n],n,e););return e}function Tt(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(!t(e[n],n,e))return!1;return!0}function _t(e,t){for(var n=-1,r=null==e?0:e.length,i=0,a=[];++n<r;){var o=e[n];t(o,n,e)&&(a[i++]=o)}return a}function Et(e,t){return!!(null==e?0:e.length)&&zt(e,t,0)>-1}function Mt(e,t,n){for(var r=-1,i=null==e?0:e.length;++r<i;)if(n(t,e[r]))return!0;return!1}function It(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i}function Nt(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e}function At(e,t,n,r){var i=-1,a=null==e?0:e.length;for(r&&a&&(n=e[++i]);++i<a;)n=t(n,e[i],i,e);return n}function Rt(e,t,n,r){var i=null==e?0:e.length;for(r&&i&&(n=e[--i]);i--;)n=t(n,e[i],i,e);return n}function Ft(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1}var Bt=Yt("length");function Pt(e,t,n){var r;return n(e,(function(e,n,i){if(t(e,n,i))return r=n,!1})),r}function Lt(e,t,n,r){for(var i=e.length,a=n+(r?1:-1);r?a--:++a<i;)if(t(e[a],a,e))return a;return-1}function zt(e,t,n){return t==t?function(e,t,n){var r=n-1,i=e.length;for(;++r<i;)if(e[r]===t)return r;return-1}(e,t,n):Lt(e,Wt,n)}function Ht(e,t,n,r){for(var i=n-1,a=e.length;++i<a;)if(r(e[i],t))return i;return-1}function Wt(e){return e!=e}function Vt(e,t){var n=null==e?0:e.length;return n?qt(e,t)/n:h}function Yt(e){return function(t){return null==t?n:t[e]}}function Ut(e){return function(t){return null==e?n:e[t]}}function Kt(e,t,n,r,i){return i(e,(function(e,i,a){n=r?(r=!1,e):t(n,e,i,a)})),n}function qt(e,t){for(var r,i=-1,a=e.length;++i<a;){var o=t(e[i]);o!==n&&(r=r===n?o:r+o)}return r}function Xt(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}function Gt(e){return e?e.slice(0,pn(e)+1).replace(ie,""):e}function Zt(e){return function(t){return e(t)}}function Qt(e,t){return It(t,(function(t){return e[t]}))}function Jt(e,t){return e.has(t)}function en(e,t){for(var n=-1,r=e.length;++n<r&&zt(t,e[n],0)>-1;);return n}function tn(e,t){for(var n=e.length;n--&&zt(t,e[n],0)>-1;);return n}var nn=Ut({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),rn=Ut({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});function an(e){return"\\"+lt[e]}function on(e){return nt.test(e)}function sn(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r){n[++t]=[r,e]})),n}function ln(e,t){return function(n){return e(t(n))}}function cn(e,t){for(var n=-1,r=e.length,i=0,o=[];++n<r;){var s=e[n];s!==t&&s!==a||(e[n]=a,o[i++]=n)}return o}function dn(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n}function un(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=[e,e]})),n}function fn(e){return on(e)?function(e){var t=et.lastIndex=0;for(;et.test(e);)++t;return t}(e):Bt(e)}function hn(e){return on(e)?function(e){return e.match(et)||[]}(e):function(e){return e.split("")}(e)}function pn(e){for(var t=e.length;t--&&ae.test(e.charAt(t)););return t}var gn=Ut({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"});var mn=function e(t){var ae=(t=null==t?ht:mn.defaults(ht.Object(),t,mn.pick(ht,it))).Array,$e=t.Date,je=t.Error,Se=t.Function,ke=t.Math,Oe=t.Object,Ce=t.RegExp,De=t.String,Te=t.TypeError,_e=ae.prototype,Ee=Se.prototype,Me=Oe.prototype,Ie=t["__core-js_shared__"],Ne=Ee.toString,Ae=Me.hasOwnProperty,Re=0,Fe=function(){var e=/[^.]+$/.exec(Ie&&Ie.keys&&Ie.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),Be=Me.toString,Pe=Ne.call(Oe),Le=ht._,ze=Ce("^"+Ne.call(Ae).replace(ne,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),He=mt?t.Buffer:n,We=t.Symbol,Ve=t.Uint8Array,Ye=He?He.allocUnsafe:n,Ue=ln(Oe.getPrototypeOf,Oe),Ke=Oe.create,qe=Me.propertyIsEnumerable,Xe=_e.splice,Ge=We?We.isConcatSpreadable:n,Ze=We?We.iterator:n,et=We?We.toStringTag:n,nt=function(){try{var e=ua(Oe,"defineProperty");return e({},"",{}),e}catch(e){}}(),lt=t.clearTimeout!==ht.clearTimeout&&t.clearTimeout,ut=$e&&$e.now!==ht.Date.now&&$e.now,ft=t.setTimeout!==ht.setTimeout&&t.setTimeout,pt=ke.ceil,gt=ke.floor,bt=Oe.getOwnPropertySymbols,vt=He?He.isBuffer:n,Bt=t.isFinite,Ut=_e.join,bn=ln(Oe.keys,Oe),vn=ke.max,yn=ke.min,xn=$e.now,wn=t.parseInt,$n=ke.random,jn=_e.reverse,Sn=ua(t,"DataView"),kn=ua(t,"Map"),On=ua(t,"Promise"),Cn=ua(t,"Set"),Dn=ua(t,"WeakMap"),Tn=ua(Oe,"create"),_n=Dn&&new Dn,En={},Mn=Fa(Sn),In=Fa(kn),Nn=Fa(On),An=Fa(Cn),Rn=Fa(Dn),Fn=We?We.prototype:n,Bn=Fn?Fn.valueOf:n,Pn=Fn?Fn.toString:n;function Ln(e){if(ts(e)&&!Vo(e)&&!(e instanceof Vn)){if(e instanceof Wn)return e;if(Ae.call(e,"__wrapped__"))return Ba(e)}return new Wn(e)}var zn=function(){function e(){}return function(t){if(!es(t))return{};if(Ke)return Ke(t);e.prototype=t;var r=new e;return e.prototype=n,r}}();function Hn(){}function Wn(e,t){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=n}function Vn(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=p,this.__views__=[]}function Yn(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Un(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Kn(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function qn(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new Kn;++t<n;)this.add(e[t])}function Xn(e){var t=this.__data__=new Un(e);this.size=t.size}function Gn(e,t){var n=Vo(e),r=!n&&Wo(e),i=!n&&!r&&qo(e),a=!n&&!r&&!i&&cs(e),o=n||r||i||a,s=o?Xt(e.length,De):[],l=s.length;for(var c in e)!t&&!Ae.call(e,c)||o&&("length"==c||i&&("offset"==c||"parent"==c)||a&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||va(c,l))||s.push(c);return s}function Zn(e){var t=e.length;return t?e[qr(0,t-1)]:n}function Qn(e,t){return Na(Ti(e),sr(t,0,e.length))}function Jn(e){return Na(Ti(e))}function er(e,t,r){(r!==n&&!Lo(e[t],r)||r===n&&!(t in e))&&ar(e,t,r)}function tr(e,t,r){var i=e[t];Ae.call(e,t)&&Lo(i,r)&&(r!==n||t in e)||ar(e,t,r)}function nr(e,t){for(var n=e.length;n--;)if(Lo(e[n][0],t))return n;return-1}function rr(e,t,n,r){return fr(e,(function(e,i,a){t(r,e,n(e),a)})),r}function ir(e,t){return e&&_i(t,Es(t),e)}function ar(e,t,n){"__proto__"==t&&nt?nt(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}function or(e,t){for(var r=-1,i=t.length,a=ae(i),o=null==e;++r<i;)a[r]=o?n:Os(e,t[r]);return a}function sr(e,t,r){return e==e&&(r!==n&&(e=e<=r?e:r),t!==n&&(e=e>=t?e:t)),e}function lr(e,t,r,i,a,o){var s,l=1&t,c=2&t,d=4&t;if(r&&(s=a?r(e,i,a,o):r(e)),s!==n)return s;if(!es(e))return e;var u=Vo(e);if(u){if(s=function(e){var t=e.length,n=new e.constructor(t);t&&"string"==typeof e[0]&&Ae.call(e,"index")&&(n.index=e.index,n.input=e.input);return n}(e),!l)return Ti(e,s)}else{var f=pa(e),h=f==w||f==$;if(qo(e))return ji(e,l);if(f==k||f==m||h&&!a){if(s=c||h?{}:ma(e),!l)return c?function(e,t){return _i(e,ha(e),t)}(e,function(e,t){return e&&_i(t,Ms(t),e)}(s,e)):function(e,t){return _i(e,fa(e),t)}(e,ir(s,e))}else{if(!st[f])return a?e:{};s=function(e,t,n){var r=e.constructor;switch(t){case M:return Si(e);case v:case y:return new r(+e);case I:return function(e,t){var n=t?Si(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}(e,n);case N:case A:case R:case F:case B:case P:case L:case z:case H:return ki(e,n);case j:return new r;case S:case T:return new r(e);case C:return function(e){var t=new e.constructor(e.source,he.exec(e));return t.lastIndex=e.lastIndex,t}(e);case D:return new r;case _:return i=e,Bn?Oe(Bn.call(i)):{}}var i}(e,f,l)}}o||(o=new Xn);var p=o.get(e);if(p)return p;o.set(e,s),os(e)?e.forEach((function(n){s.add(lr(n,t,r,n,e,o))})):ns(e)&&e.forEach((function(n,i){s.set(i,lr(n,t,r,i,e,o))}));var g=u?n:(d?c?ia:ra:c?Ms:Es)(e);return Ct(g||e,(function(n,i){g&&(n=e[i=n]),tr(s,i,lr(n,t,r,i,e,o))})),s}function cr(e,t,r){var i=r.length;if(null==e)return!i;for(e=Oe(e);i--;){var a=r[i],o=t[a],s=e[a];if(s===n&&!(a in e)||!o(s))return!1}return!0}function dr(e,t,i){if("function"!=typeof e)throw new Te(r);return _a((function(){e.apply(n,i)}),t)}function ur(e,t,n,r){var i=-1,a=Et,o=!0,s=e.length,l=[],c=t.length;if(!s)return l;n&&(t=It(t,Zt(n))),r?(a=Mt,o=!1):t.length>=200&&(a=Jt,o=!1,t=new qn(t));e:for(;++i<s;){var d=e[i],u=null==n?d:n(d);if(d=r||0!==d?d:0,o&&u==u){for(var f=c;f--;)if(t[f]===u)continue e;l.push(d)}else a(t,u,r)||l.push(d)}return l}Ln.templateSettings={escape:G,evaluate:Z,interpolate:Q,variable:"",imports:{_:Ln}},Ln.prototype=Hn.prototype,Ln.prototype.constructor=Ln,Wn.prototype=zn(Hn.prototype),Wn.prototype.constructor=Wn,Vn.prototype=zn(Hn.prototype),Vn.prototype.constructor=Vn,Yn.prototype.clear=function(){this.__data__=Tn?Tn(null):{},this.size=0},Yn.prototype.delete=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Yn.prototype.get=function(e){var t=this.__data__;if(Tn){var r=t[e];return r===i?n:r}return Ae.call(t,e)?t[e]:n},Yn.prototype.has=function(e){var t=this.__data__;return Tn?t[e]!==n:Ae.call(t,e)},Yn.prototype.set=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=Tn&&t===n?i:t,this},Un.prototype.clear=function(){this.__data__=[],this.size=0},Un.prototype.delete=function(e){var t=this.__data__,n=nr(t,e);return!(n<0)&&(n==t.length-1?t.pop():Xe.call(t,n,1),--this.size,!0)},Un.prototype.get=function(e){var t=this.__data__,r=nr(t,e);return r<0?n:t[r][1]},Un.prototype.has=function(e){return nr(this.__data__,e)>-1},Un.prototype.set=function(e,t){var n=this.__data__,r=nr(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this},Kn.prototype.clear=function(){this.size=0,this.__data__={hash:new Yn,map:new(kn||Un),string:new Yn}},Kn.prototype.delete=function(e){var t=ca(this,e).delete(e);return this.size-=t?1:0,t},Kn.prototype.get=function(e){return ca(this,e).get(e)},Kn.prototype.has=function(e){return ca(this,e).has(e)},Kn.prototype.set=function(e,t){var n=ca(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this},qn.prototype.add=qn.prototype.push=function(e){return this.__data__.set(e,i),this},qn.prototype.has=function(e){return this.__data__.has(e)},Xn.prototype.clear=function(){this.__data__=new Un,this.size=0},Xn.prototype.delete=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n},Xn.prototype.get=function(e){return this.__data__.get(e)},Xn.prototype.has=function(e){return this.__data__.has(e)},Xn.prototype.set=function(e,t){var n=this.__data__;if(n instanceof Un){var r=n.__data__;if(!kn||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new Kn(r)}return n.set(e,t),this.size=n.size,this};var fr=Ii(xr),hr=Ii(wr,!0);function pr(e,t){var n=!0;return fr(e,(function(e,r,i){return n=!!t(e,r,i)})),n}function gr(e,t,r){for(var i=-1,a=e.length;++i<a;){var o=e[i],s=t(o);if(null!=s&&(l===n?s==s&&!ls(s):r(s,l)))var l=s,c=o}return c}function mr(e,t){var n=[];return fr(e,(function(e,r,i){t(e,r,i)&&n.push(e)})),n}function br(e,t,n,r,i){var a=-1,o=e.length;for(n||(n=ba),i||(i=[]);++a<o;){var s=e[a];t>0&&n(s)?t>1?br(s,t-1,n,r,i):Nt(i,s):r||(i[i.length]=s)}return i}var vr=Ni(),yr=Ni(!0);function xr(e,t){return e&&vr(e,t,Es)}function wr(e,t){return e&&yr(e,t,Es)}function $r(e,t){return _t(t,(function(t){return Zo(e[t])}))}function jr(e,t){for(var r=0,i=(t=yi(t,e)).length;null!=e&&r<i;)e=e[Ra(t[r++])];return r&&r==i?e:n}function Sr(e,t,n){var r=t(e);return Vo(e)?r:Nt(r,n(e))}function kr(e){return null==e?e===n?"[object Undefined]":"[object Null]":et&&et in Oe(e)?function(e){var t=Ae.call(e,et),r=e[et];try{e[et]=n;var i=!0}catch(e){}var a=Be.call(e);i&&(t?e[et]=r:delete e[et]);return a}(e):function(e){return Be.call(e)}(e)}function Or(e,t){return e>t}function Cr(e,t){return null!=e&&Ae.call(e,t)}function Dr(e,t){return null!=e&&t in Oe(e)}function Tr(e,t,r){for(var i=r?Mt:Et,a=e[0].length,o=e.length,s=o,l=ae(o),c=1/0,d=[];s--;){var u=e[s];s&&t&&(u=It(u,Zt(t))),c=yn(u.length,c),l[s]=!r&&(t||a>=120&&u.length>=120)?new qn(s&&u):n}u=e[0];var f=-1,h=l[0];e:for(;++f<a&&d.length<c;){var p=u[f],g=t?t(p):p;if(p=r||0!==p?p:0,!(h?Jt(h,g):i(d,g,r))){for(s=o;--s;){var m=l[s];if(!(m?Jt(m,g):i(e[s],g,r)))continue e}h&&h.push(g),d.push(p)}}return d}function _r(e,t,r){var i=null==(e=Ca(e,t=yi(t,e)))?e:e[Ra(Xa(t))];return null==i?n:kt(i,e,r)}function Er(e){return ts(e)&&kr(e)==m}function Mr(e,t,r,i,a){return e===t||(null==e||null==t||!ts(e)&&!ts(t)?e!=e&&t!=t:function(e,t,r,i,a,o){var s=Vo(e),l=Vo(t),c=s?b:pa(e),d=l?b:pa(t),u=(c=c==m?k:c)==k,f=(d=d==m?k:d)==k,h=c==d;if(h&&qo(e)){if(!qo(t))return!1;s=!0,u=!1}if(h&&!u)return o||(o=new Xn),s||cs(e)?ta(e,t,r,i,a,o):function(e,t,n,r,i,a,o){switch(n){case I:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case M:return!(e.byteLength!=t.byteLength||!a(new Ve(e),new Ve(t)));case v:case y:case S:return Lo(+e,+t);case x:return e.name==t.name&&e.message==t.message;case C:case T:return e==t+"";case j:var s=sn;case D:var l=1&r;if(s||(s=dn),e.size!=t.size&&!l)return!1;var c=o.get(e);if(c)return c==t;r|=2,o.set(e,t);var d=ta(s(e),s(t),r,i,a,o);return o.delete(e),d;case _:if(Bn)return Bn.call(e)==Bn.call(t)}return!1}(e,t,c,r,i,a,o);if(!(1&r)){var p=u&&Ae.call(e,"__wrapped__"),g=f&&Ae.call(t,"__wrapped__");if(p||g){var w=p?e.value():e,$=g?t.value():t;return o||(o=new Xn),a(w,$,r,i,o)}}if(!h)return!1;return o||(o=new Xn),function(e,t,r,i,a,o){var s=1&r,l=ra(e),c=l.length,d=ra(t),u=d.length;if(c!=u&&!s)return!1;var f=c;for(;f--;){var h=l[f];if(!(s?h in t:Ae.call(t,h)))return!1}var p=o.get(e),g=o.get(t);if(p&&g)return p==t&&g==e;var m=!0;o.set(e,t),o.set(t,e);var b=s;for(;++f<c;){var v=e[h=l[f]],y=t[h];if(i)var x=s?i(y,v,h,t,e,o):i(v,y,h,e,t,o);if(!(x===n?v===y||a(v,y,r,i,o):x)){m=!1;break}b||(b="constructor"==h)}if(m&&!b){var w=e.constructor,$=t.constructor;w==$||!("constructor"in e)||!("constructor"in t)||"function"==typeof w&&w instanceof w&&"function"==typeof $&&$ instanceof $||(m=!1)}return o.delete(e),o.delete(t),m}(e,t,r,i,a,o)}(e,t,r,i,Mr,a))}function Ir(e,t,r,i){var a=r.length,o=a,s=!i;if(null==e)return!o;for(e=Oe(e);a--;){var l=r[a];if(s&&l[2]?l[1]!==e[l[0]]:!(l[0]in e))return!1}for(;++a<o;){var c=(l=r[a])[0],d=e[c],u=l[1];if(s&&l[2]){if(d===n&&!(c in e))return!1}else{var f=new Xn;if(i)var h=i(d,u,c,e,t,f);if(!(h===n?Mr(u,d,3,i,f):h))return!1}}return!0}function Nr(e){return!(!es(e)||(t=e,Fe&&Fe in t))&&(Zo(e)?ze:me).test(Fa(e));var t}function Ar(e){return"function"==typeof e?e:null==e?rl:"object"==typeof e?Vo(e)?zr(e[0],e[1]):Lr(e):fl(e)}function Rr(e){if(!ja(e))return bn(e);var t=[];for(var n in Oe(e))Ae.call(e,n)&&"constructor"!=n&&t.push(n);return t}function Fr(e){if(!es(e))return function(e){var t=[];if(null!=e)for(var n in Oe(e))t.push(n);return t}(e);var t=ja(e),n=[];for(var r in e)("constructor"!=r||!t&&Ae.call(e,r))&&n.push(r);return n}function Br(e,t){return e<t}function Pr(e,t){var n=-1,r=Uo(e)?ae(e.length):[];return fr(e,(function(e,i,a){r[++n]=t(e,i,a)})),r}function Lr(e){var t=da(e);return 1==t.length&&t[0][2]?ka(t[0][0],t[0][1]):function(n){return n===e||Ir(n,e,t)}}function zr(e,t){return xa(e)&&Sa(t)?ka(Ra(e),t):function(r){var i=Os(r,e);return i===n&&i===t?Cs(r,e):Mr(t,i,3)}}function Hr(e,t,r,i,a){e!==t&&vr(t,(function(o,s){if(a||(a=new Xn),es(o))!function(e,t,r,i,a,o,s){var l=Da(e,r),c=Da(t,r),d=s.get(c);if(d)return void er(e,r,d);var u=o?o(l,c,r+"",e,t,s):n,f=u===n;if(f){var h=Vo(c),p=!h&&qo(c),g=!h&&!p&&cs(c);u=c,h||p||g?Vo(l)?u=l:Ko(l)?u=Ti(l):p?(f=!1,u=ji(c,!0)):g?(f=!1,u=ki(c,!0)):u=[]:is(c)||Wo(c)?(u=l,Wo(l)?u=bs(l):es(l)&&!Zo(l)||(u=ma(c))):f=!1}f&&(s.set(c,u),a(u,c,i,o,s),s.delete(c));er(e,r,u)}(e,t,s,r,Hr,i,a);else{var l=i?i(Da(e,s),o,s+"",e,t,a):n;l===n&&(l=o),er(e,s,l)}}),Ms)}function Wr(e,t){var r=e.length;if(r)return va(t+=t<0?r:0,r)?e[t]:n}function Vr(e,t,n){t=t.length?It(t,(function(e){return Vo(e)?function(t){return jr(t,1===e.length?e[0]:e)}:e})):[rl];var r=-1;t=It(t,Zt(la()));var i=Pr(e,(function(e,n,i){var a=It(t,(function(t){return t(e)}));return{criteria:a,index:++r,value:e}}));return function(e,t){var n=e.length;for(e.sort(t);n--;)e[n]=e[n].value;return e}(i,(function(e,t){return function(e,t,n){var r=-1,i=e.criteria,a=t.criteria,o=i.length,s=n.length;for(;++r<o;){var l=Oi(i[r],a[r]);if(l)return r>=s?l:l*("desc"==n[r]?-1:1)}return e.index-t.index}(e,t,n)}))}function Yr(e,t,n){for(var r=-1,i=t.length,a={};++r<i;){var o=t[r],s=jr(e,o);n(s,o)&&Jr(a,yi(o,e),s)}return a}function Ur(e,t,n,r){var i=r?Ht:zt,a=-1,o=t.length,s=e;for(e===t&&(t=Ti(t)),n&&(s=It(e,Zt(n)));++a<o;)for(var l=0,c=t[a],d=n?n(c):c;(l=i(s,d,l,r))>-1;)s!==e&&Xe.call(s,l,1),Xe.call(e,l,1);return e}function Kr(e,t){for(var n=e?t.length:0,r=n-1;n--;){var i=t[n];if(n==r||i!==a){var a=i;va(i)?Xe.call(e,i,1):ui(e,i)}}return e}function qr(e,t){return e+gt($n()*(t-e+1))}function Xr(e,t){var n="";if(!e||t<1||t>f)return n;do{t%2&&(n+=e),(t=gt(t/2))&&(e+=e)}while(t);return n}function Gr(e,t){return Ea(Oa(e,t,rl),e+"")}function Zr(e){return Zn(Ls(e))}function Qr(e,t){var n=Ls(e);return Na(n,sr(t,0,n.length))}function Jr(e,t,r,i){if(!es(e))return e;for(var a=-1,o=(t=yi(t,e)).length,s=o-1,l=e;null!=l&&++a<o;){var c=Ra(t[a]),d=r;if("__proto__"===c||"constructor"===c||"prototype"===c)return e;if(a!=s){var u=l[c];(d=i?i(u,c,l):n)===n&&(d=es(u)?u:va(t[a+1])?[]:{})}tr(l,c,d),l=l[c]}return e}var ei=_n?function(e,t){return _n.set(e,t),e}:rl,ti=nt?function(e,t){return nt(e,"toString",{configurable:!0,enumerable:!1,value:el(t),writable:!0})}:rl;function ni(e){return Na(Ls(e))}function ri(e,t,n){var r=-1,i=e.length;t<0&&(t=-t>i?0:i+t),(n=n>i?i:n)<0&&(n+=i),i=t>n?0:n-t>>>0,t>>>=0;for(var a=ae(i);++r<i;)a[r]=e[r+t];return a}function ii(e,t){var n;return fr(e,(function(e,r,i){return!(n=t(e,r,i))})),!!n}function ai(e,t,n){var r=0,i=null==e?r:e.length;if("number"==typeof t&&t==t&&i<=2147483647){for(;r<i;){var a=r+i>>>1,o=e[a];null!==o&&!ls(o)&&(n?o<=t:o<t)?r=a+1:i=a}return i}return oi(e,t,rl,n)}function oi(e,t,r,i){var a=0,o=null==e?0:e.length;if(0===o)return 0;for(var s=(t=r(t))!=t,l=null===t,c=ls(t),d=t===n;a<o;){var u=gt((a+o)/2),f=r(e[u]),h=f!==n,p=null===f,g=f==f,m=ls(f);if(s)var b=i||g;else b=d?g&&(i||h):l?g&&h&&(i||!p):c?g&&h&&!p&&(i||!m):!p&&!m&&(i?f<=t:f<t);b?a=u+1:o=u}return yn(o,4294967294)}function si(e,t){for(var n=-1,r=e.length,i=0,a=[];++n<r;){var o=e[n],s=t?t(o):o;if(!n||!Lo(s,l)){var l=s;a[i++]=0===o?0:o}}return a}function li(e){return"number"==typeof e?e:ls(e)?h:+e}function ci(e){if("string"==typeof e)return e;if(Vo(e))return It(e,ci)+"";if(ls(e))return Pn?Pn.call(e):"";var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function di(e,t,n){var r=-1,i=Et,a=e.length,o=!0,s=[],l=s;if(n)o=!1,i=Mt;else if(a>=200){var c=t?null:Xi(e);if(c)return dn(c);o=!1,i=Jt,l=new qn}else l=t?[]:s;e:for(;++r<a;){var d=e[r],u=t?t(d):d;if(d=n||0!==d?d:0,o&&u==u){for(var f=l.length;f--;)if(l[f]===u)continue e;t&&l.push(u),s.push(d)}else i(l,u,n)||(l!==s&&l.push(u),s.push(d))}return s}function ui(e,t){return null==(e=Ca(e,t=yi(t,e)))||delete e[Ra(Xa(t))]}function fi(e,t,n,r){return Jr(e,t,n(jr(e,t)),r)}function hi(e,t,n,r){for(var i=e.length,a=r?i:-1;(r?a--:++a<i)&&t(e[a],a,e););return n?ri(e,r?0:a,r?a+1:i):ri(e,r?a+1:0,r?i:a)}function pi(e,t){var n=e;return n instanceof Vn&&(n=n.value()),At(t,(function(e,t){return t.func.apply(t.thisArg,Nt([e],t.args))}),n)}function gi(e,t,n){var r=e.length;if(r<2)return r?di(e[0]):[];for(var i=-1,a=ae(r);++i<r;)for(var o=e[i],s=-1;++s<r;)s!=i&&(a[i]=ur(a[i]||o,e[s],t,n));return di(br(a,1),t,n)}function mi(e,t,r){for(var i=-1,a=e.length,o=t.length,s={};++i<a;){var l=i<o?t[i]:n;r(s,e[i],l)}return s}function bi(e){return Ko(e)?e:[]}function vi(e){return"function"==typeof e?e:rl}function yi(e,t){return Vo(e)?e:xa(e,t)?[e]:Aa(vs(e))}var xi=Gr;function wi(e,t,r){var i=e.length;return r=r===n?i:r,!t&&r>=i?e:ri(e,t,r)}var $i=lt||function(e){return ht.clearTimeout(e)};function ji(e,t){if(t)return e.slice();var n=e.length,r=Ye?Ye(n):new e.constructor(n);return e.copy(r),r}function Si(e){var t=new e.constructor(e.byteLength);return new Ve(t).set(new Ve(e)),t}function ki(e,t){var n=t?Si(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}function Oi(e,t){if(e!==t){var r=e!==n,i=null===e,a=e==e,o=ls(e),s=t!==n,l=null===t,c=t==t,d=ls(t);if(!l&&!d&&!o&&e>t||o&&s&&c&&!l&&!d||i&&s&&c||!r&&c||!a)return 1;if(!i&&!o&&!d&&e<t||d&&r&&a&&!i&&!o||l&&r&&a||!s&&a||!c)return-1}return 0}function Ci(e,t,n,r){for(var i=-1,a=e.length,o=n.length,s=-1,l=t.length,c=vn(a-o,0),d=ae(l+c),u=!r;++s<l;)d[s]=t[s];for(;++i<o;)(u||i<a)&&(d[n[i]]=e[i]);for(;c--;)d[s++]=e[i++];return d}function Di(e,t,n,r){for(var i=-1,a=e.length,o=-1,s=n.length,l=-1,c=t.length,d=vn(a-s,0),u=ae(d+c),f=!r;++i<d;)u[i]=e[i];for(var h=i;++l<c;)u[h+l]=t[l];for(;++o<s;)(f||i<a)&&(u[h+n[o]]=e[i++]);return u}function Ti(e,t){var n=-1,r=e.length;for(t||(t=ae(r));++n<r;)t[n]=e[n];return t}function _i(e,t,r,i){var a=!r;r||(r={});for(var o=-1,s=t.length;++o<s;){var l=t[o],c=i?i(r[l],e[l],l,r,e):n;c===n&&(c=e[l]),a?ar(r,l,c):tr(r,l,c)}return r}function Ei(e,t){return function(n,r){var i=Vo(n)?Ot:rr,a=t?t():{};return i(n,e,la(r,2),a)}}function Mi(e){return Gr((function(t,r){var i=-1,a=r.length,o=a>1?r[a-1]:n,s=a>2?r[2]:n;for(o=e.length>3&&"function"==typeof o?(a--,o):n,s&&ya(r[0],r[1],s)&&(o=a<3?n:o,a=1),t=Oe(t);++i<a;){var l=r[i];l&&e(t,l,i,o)}return t}))}function Ii(e,t){return function(n,r){if(null==n)return n;if(!Uo(n))return e(n,r);for(var i=n.length,a=t?i:-1,o=Oe(n);(t?a--:++a<i)&&!1!==r(o[a],a,o););return n}}function Ni(e){return function(t,n,r){for(var i=-1,a=Oe(t),o=r(t),s=o.length;s--;){var l=o[e?s:++i];if(!1===n(a[l],l,a))break}return t}}function Ai(e){return function(t){var r=on(t=vs(t))?hn(t):n,i=r?r[0]:t.charAt(0),a=r?wi(r,1).join(""):t.slice(1);return i[e]()+a}}function Ri(e){return function(t){return At(Zs(Ws(t).replace(Qe,"")),e,"")}}function Fi(e){return function(){var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var n=zn(e.prototype),r=e.apply(n,t);return es(r)?r:n}}function Bi(e){return function(t,r,i){var a=Oe(t);if(!Uo(t)){var o=la(r,3);t=Es(t),r=function(e){return o(a[e],e,a)}}var s=e(t,r,i);return s>-1?a[o?t[s]:s]:n}}function Pi(e){return na((function(t){var i=t.length,a=i,o=Wn.prototype.thru;for(e&&t.reverse();a--;){var s=t[a];if("function"!=typeof s)throw new Te(r);if(o&&!l&&"wrapper"==oa(s))var l=new Wn([],!0)}for(a=l?a:i;++a<i;){var c=oa(s=t[a]),d="wrapper"==c?aa(s):n;l=d&&wa(d[0])&&424==d[1]&&!d[4].length&&1==d[9]?l[oa(d[0])].apply(l,d[3]):1==s.length&&wa(s)?l[c]():l.thru(s)}return function(){var e=arguments,n=e[0];if(l&&1==e.length&&Vo(n))return l.plant(n).value();for(var r=0,a=i?t[r].apply(this,e):n;++r<i;)a=t[r].call(this,a);return a}}))}function Li(e,t,r,i,a,o,s,l,d,u){var f=t&c,h=1&t,p=2&t,g=24&t,m=512&t,b=p?n:Fi(e);return function c(){for(var v=arguments.length,y=ae(v),x=v;x--;)y[x]=arguments[x];if(g)var w=sa(c),$=function(e,t){for(var n=e.length,r=0;n--;)e[n]===t&&++r;return r}(y,w);if(i&&(y=Ci(y,i,a,g)),o&&(y=Di(y,o,s,g)),v-=$,g&&v<u){var j=cn(y,w);return Ki(e,t,Li,c.placeholder,r,y,j,l,d,u-v)}var S=h?r:this,k=p?S[e]:e;return v=y.length,l?y=function(e,t){var r=e.length,i=yn(t.length,r),a=Ti(e);for(;i--;){var o=t[i];e[i]=va(o,r)?a[o]:n}return e}(y,l):m&&v>1&&y.reverse(),f&&d<v&&(y.length=d),this&&this!==ht&&this instanceof c&&(k=b||Fi(k)),k.apply(S,y)}}function zi(e,t){return function(n,r){return function(e,t,n,r){return xr(e,(function(e,i,a){t(r,n(e),i,a)})),r}(n,e,t(r),{})}}function Hi(e,t){return function(r,i){var a;if(r===n&&i===n)return t;if(r!==n&&(a=r),i!==n){if(a===n)return i;"string"==typeof r||"string"==typeof i?(r=ci(r),i=ci(i)):(r=li(r),i=li(i)),a=e(r,i)}return a}}function Wi(e){return na((function(t){return t=It(t,Zt(la())),Gr((function(n){var r=this;return e(t,(function(e){return kt(e,r,n)}))}))}))}function Vi(e,t){var r=(t=t===n?" ":ci(t)).length;if(r<2)return r?Xr(t,e):t;var i=Xr(t,pt(e/fn(t)));return on(t)?wi(hn(i),0,e).join(""):i.slice(0,e)}function Yi(e){return function(t,r,i){return i&&"number"!=typeof i&&ya(t,r,i)&&(r=i=n),t=hs(t),r===n?(r=t,t=0):r=hs(r),function(e,t,n,r){for(var i=-1,a=vn(pt((t-e)/(n||1)),0),o=ae(a);a--;)o[r?a:++i]=e,e+=n;return o}(t,r,i=i===n?t<r?1:-1:hs(i),e)}}function Ui(e){return function(t,n){return"string"==typeof t&&"string"==typeof n||(t=ms(t),n=ms(n)),e(t,n)}}function Ki(e,t,r,i,a,o,c,d,u,f){var h=8&t;t|=h?s:l,4&(t&=~(h?l:s))||(t&=-4);var p=[e,t,a,h?o:n,h?c:n,h?n:o,h?n:c,d,u,f],g=r.apply(n,p);return wa(e)&&Ta(g,p),g.placeholder=i,Ma(g,e,t)}function qi(e){var t=ke[e];return function(e,n){if(e=ms(e),(n=null==n?0:yn(ps(n),292))&&Bt(e)){var r=(vs(e)+"e").split("e");return+((r=(vs(t(r[0]+"e"+(+r[1]+n)))+"e").split("e"))[0]+"e"+(+r[1]-n))}return t(e)}}var Xi=Cn&&1/dn(new Cn([,-0]))[1]==u?function(e){return new Cn(e)}:ll;function Gi(e){return function(t){var n=pa(t);return n==j?sn(t):n==D?un(t):function(e,t){return It(t,(function(t){return[t,e[t]]}))}(t,e(t))}}function Zi(e,t,i,u,f,h,p,g){var m=2&t;if(!m&&"function"!=typeof e)throw new Te(r);var b=u?u.length:0;if(b||(t&=-97,u=f=n),p=p===n?p:vn(ps(p),0),g=g===n?g:ps(g),b-=f?f.length:0,t&l){var v=u,y=f;u=f=n}var x=m?n:aa(e),w=[e,t,i,u,f,v,y,h,p,g];if(x&&function(e,t){var n=e[1],r=t[1],i=n|r,o=i<131,s=r==c&&8==n||r==c&&n==d&&e[7].length<=t[8]||384==r&&t[7].length<=t[8]&&8==n;if(!o&&!s)return e;1&r&&(e[2]=t[2],i|=1&n?0:4);var l=t[3];if(l){var u=e[3];e[3]=u?Ci(u,l,t[4]):l,e[4]=u?cn(e[3],a):t[4]}(l=t[5])&&(u=e[5],e[5]=u?Di(u,l,t[6]):l,e[6]=u?cn(e[5],a):t[6]);(l=t[7])&&(e[7]=l);r&c&&(e[8]=null==e[8]?t[8]:yn(e[8],t[8]));null==e[9]&&(e[9]=t[9]);e[0]=t[0],e[1]=i}(w,x),e=w[0],t=w[1],i=w[2],u=w[3],f=w[4],!(g=w[9]=w[9]===n?m?0:e.length:vn(w[9]-b,0))&&24&t&&(t&=-25),t&&1!=t)$=8==t||t==o?function(e,t,r){var i=Fi(e);return function a(){for(var o=arguments.length,s=ae(o),l=o,c=sa(a);l--;)s[l]=arguments[l];var d=o<3&&s[0]!==c&&s[o-1]!==c?[]:cn(s,c);return(o-=d.length)<r?Ki(e,t,Li,a.placeholder,n,s,d,n,n,r-o):kt(this&&this!==ht&&this instanceof a?i:e,this,s)}}(e,t,g):t!=s&&33!=t||f.length?Li.apply(n,w):function(e,t,n,r){var i=1&t,a=Fi(e);return function t(){for(var o=-1,s=arguments.length,l=-1,c=r.length,d=ae(c+s),u=this&&this!==ht&&this instanceof t?a:e;++l<c;)d[l]=r[l];for(;s--;)d[l++]=arguments[++o];return kt(u,i?n:this,d)}}(e,t,i,u);else var $=function(e,t,n){var r=1&t,i=Fi(e);return function t(){return(this&&this!==ht&&this instanceof t?i:e).apply(r?n:this,arguments)}}(e,t,i);return Ma((x?ei:Ta)($,w),e,t)}function Qi(e,t,r,i){return e===n||Lo(e,Me[r])&&!Ae.call(i,r)?t:e}function Ji(e,t,r,i,a,o){return es(e)&&es(t)&&(o.set(t,e),Hr(e,t,n,Ji,o),o.delete(t)),e}function ea(e){return is(e)?n:e}function ta(e,t,r,i,a,o){var s=1&r,l=e.length,c=t.length;if(l!=c&&!(s&&c>l))return!1;var d=o.get(e),u=o.get(t);if(d&&u)return d==t&&u==e;var f=-1,h=!0,p=2&r?new qn:n;for(o.set(e,t),o.set(t,e);++f<l;){var g=e[f],m=t[f];if(i)var b=s?i(m,g,f,t,e,o):i(g,m,f,e,t,o);if(b!==n){if(b)continue;h=!1;break}if(p){if(!Ft(t,(function(e,t){if(!Jt(p,t)&&(g===e||a(g,e,r,i,o)))return p.push(t)}))){h=!1;break}}else if(g!==m&&!a(g,m,r,i,o)){h=!1;break}}return o.delete(e),o.delete(t),h}function na(e){return Ea(Oa(e,n,Va),e+"")}function ra(e){return Sr(e,Es,fa)}function ia(e){return Sr(e,Ms,ha)}var aa=_n?function(e){return _n.get(e)}:ll;function oa(e){for(var t=e.name+"",n=En[t],r=Ae.call(En,t)?n.length:0;r--;){var i=n[r],a=i.func;if(null==a||a==e)return i.name}return t}function sa(e){return(Ae.call(Ln,"placeholder")?Ln:e).placeholder}function la(){var e=Ln.iteratee||il;return e=e===il?Ar:e,arguments.length?e(arguments[0],arguments[1]):e}function ca(e,t){var n,r,i=e.__data__;return("string"==(r=typeof(n=t))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?i["string"==typeof t?"string":"hash"]:i.map}function da(e){for(var t=Es(e),n=t.length;n--;){var r=t[n],i=e[r];t[n]=[r,i,Sa(i)]}return t}function ua(e,t){var r=function(e,t){return null==e?n:e[t]}(e,t);return Nr(r)?r:n}var fa=bt?function(e){return null==e?[]:(e=Oe(e),_t(bt(e),(function(t){return qe.call(e,t)})))}:gl,ha=bt?function(e){for(var t=[];e;)Nt(t,fa(e)),e=Ue(e);return t}:gl,pa=kr;function ga(e,t,n){for(var r=-1,i=(t=yi(t,e)).length,a=!1;++r<i;){var o=Ra(t[r]);if(!(a=null!=e&&n(e,o)))break;e=e[o]}return a||++r!=i?a:!!(i=null==e?0:e.length)&&Jo(i)&&va(o,i)&&(Vo(e)||Wo(e))}function ma(e){return"function"!=typeof e.constructor||ja(e)?{}:zn(Ue(e))}function ba(e){return Vo(e)||Wo(e)||!!(Ge&&e&&e[Ge])}function va(e,t){var n=typeof e;return!!(t=null==t?f:t)&&("number"==n||"symbol"!=n&&ve.test(e))&&e>-1&&e%1==0&&e<t}function ya(e,t,n){if(!es(n))return!1;var r=typeof t;return!!("number"==r?Uo(n)&&va(t,n.length):"string"==r&&t in n)&&Lo(n[t],e)}function xa(e,t){if(Vo(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!ls(e))||(ee.test(e)||!J.test(e)||null!=t&&e in Oe(t))}function wa(e){var t=oa(e),n=Ln[t];if("function"!=typeof n||!(t in Vn.prototype))return!1;if(e===n)return!0;var r=aa(n);return!!r&&e===r[0]}(Sn&&pa(new Sn(new ArrayBuffer(1)))!=I||kn&&pa(new kn)!=j||On&&pa(On.resolve())!=O||Cn&&pa(new Cn)!=D||Dn&&pa(new Dn)!=E)&&(pa=function(e){var t=kr(e),r=t==k?e.constructor:n,i=r?Fa(r):"";if(i)switch(i){case Mn:return I;case In:return j;case Nn:return O;case An:return D;case Rn:return E}return t});var $a=Ie?Zo:ml;function ja(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Me)}function Sa(e){return e==e&&!es(e)}function ka(e,t){return function(r){return null!=r&&(r[e]===t&&(t!==n||e in Oe(r)))}}function Oa(e,t,r){return t=vn(t===n?e.length-1:t,0),function(){for(var n=arguments,i=-1,a=vn(n.length-t,0),o=ae(a);++i<a;)o[i]=n[t+i];i=-1;for(var s=ae(t+1);++i<t;)s[i]=n[i];return s[t]=r(o),kt(e,this,s)}}function Ca(e,t){return t.length<2?e:jr(e,ri(t,0,-1))}function Da(e,t){if(("constructor"!==t||"function"!=typeof e[t])&&"__proto__"!=t)return e[t]}var Ta=Ia(ei),_a=ft||function(e,t){return ht.setTimeout(e,t)},Ea=Ia(ti);function Ma(e,t,n){var r=t+"";return Ea(e,function(e,t){var n=t.length;if(!n)return e;var r=n-1;return t[r]=(n>1?"& ":"")+t[r],t=t.join(n>2?", ":" "),e.replace(oe,"{\n/* [wrapped with "+t+"] */\n")}(r,function(e,t){return Ct(g,(function(n){var r="_."+n[0];t&n[1]&&!Et(e,r)&&e.push(r)})),e.sort()}(function(e){var t=e.match(se);return t?t[1].split(le):[]}(r),n)))}function Ia(e){var t=0,r=0;return function(){var i=xn(),a=16-(i-r);if(r=i,a>0){if(++t>=800)return arguments[0]}else t=0;return e.apply(n,arguments)}}function Na(e,t){var r=-1,i=e.length,a=i-1;for(t=t===n?i:t;++r<t;){var o=qr(r,a),s=e[o];e[o]=e[r],e[r]=s}return e.length=t,e}var Aa=function(e){var t=No(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(te,(function(e,n,r,i){t.push(r?i.replace(ue,"$1"):n||e)})),t}));function Ra(e){if("string"==typeof e||ls(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function Fa(e){if(null!=e){try{return Ne.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function Ba(e){if(e instanceof Vn)return e.clone();var t=new Wn(e.__wrapped__,e.__chain__);return t.__actions__=Ti(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}var Pa=Gr((function(e,t){return Ko(e)?ur(e,br(t,1,Ko,!0)):[]})),La=Gr((function(e,t){var r=Xa(t);return Ko(r)&&(r=n),Ko(e)?ur(e,br(t,1,Ko,!0),la(r,2)):[]})),za=Gr((function(e,t){var r=Xa(t);return Ko(r)&&(r=n),Ko(e)?ur(e,br(t,1,Ko,!0),n,r):[]}));function Ha(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var i=null==n?0:ps(n);return i<0&&(i=vn(r+i,0)),Lt(e,la(t,3),i)}function Wa(e,t,r){var i=null==e?0:e.length;if(!i)return-1;var a=i-1;return r!==n&&(a=ps(r),a=r<0?vn(i+a,0):yn(a,i-1)),Lt(e,la(t,3),a,!0)}function Va(e){return(null==e?0:e.length)?br(e,1):[]}function Ya(e){return e&&e.length?e[0]:n}var Ua=Gr((function(e){var t=It(e,bi);return t.length&&t[0]===e[0]?Tr(t):[]})),Ka=Gr((function(e){var t=Xa(e),r=It(e,bi);return t===Xa(r)?t=n:r.pop(),r.length&&r[0]===e[0]?Tr(r,la(t,2)):[]})),qa=Gr((function(e){var t=Xa(e),r=It(e,bi);return(t="function"==typeof t?t:n)&&r.pop(),r.length&&r[0]===e[0]?Tr(r,n,t):[]}));function Xa(e){var t=null==e?0:e.length;return t?e[t-1]:n}var Ga=Gr(Za);function Za(e,t){return e&&e.length&&t&&t.length?Ur(e,t):e}var Qa=na((function(e,t){var n=null==e?0:e.length,r=or(e,t);return Kr(e,It(t,(function(e){return va(e,n)?+e:e})).sort(Oi)),r}));function Ja(e){return null==e?e:jn.call(e)}var eo=Gr((function(e){return di(br(e,1,Ko,!0))})),to=Gr((function(e){var t=Xa(e);return Ko(t)&&(t=n),di(br(e,1,Ko,!0),la(t,2))})),no=Gr((function(e){var t=Xa(e);return t="function"==typeof t?t:n,di(br(e,1,Ko,!0),n,t)}));function ro(e){if(!e||!e.length)return[];var t=0;return e=_t(e,(function(e){if(Ko(e))return t=vn(e.length,t),!0})),Xt(t,(function(t){return It(e,Yt(t))}))}function io(e,t){if(!e||!e.length)return[];var r=ro(e);return null==t?r:It(r,(function(e){return kt(t,n,e)}))}var ao=Gr((function(e,t){return Ko(e)?ur(e,t):[]})),oo=Gr((function(e){return gi(_t(e,Ko))})),so=Gr((function(e){var t=Xa(e);return Ko(t)&&(t=n),gi(_t(e,Ko),la(t,2))})),lo=Gr((function(e){var t=Xa(e);return t="function"==typeof t?t:n,gi(_t(e,Ko),n,t)})),co=Gr(ro);var uo=Gr((function(e){var t=e.length,r=t>1?e[t-1]:n;return r="function"==typeof r?(e.pop(),r):n,io(e,r)}));function fo(e){var t=Ln(e);return t.__chain__=!0,t}function ho(e,t){return t(e)}var po=na((function(e){var t=e.length,r=t?e[0]:0,i=this.__wrapped__,a=function(t){return or(t,e)};return!(t>1||this.__actions__.length)&&i instanceof Vn&&va(r)?((i=i.slice(r,+r+(t?1:0))).__actions__.push({func:ho,args:[a],thisArg:n}),new Wn(i,this.__chain__).thru((function(e){return t&&!e.length&&e.push(n),e}))):this.thru(a)}));var go=Ei((function(e,t,n){Ae.call(e,n)?++e[n]:ar(e,n,1)}));var mo=Bi(Ha),bo=Bi(Wa);function vo(e,t){return(Vo(e)?Ct:fr)(e,la(t,3))}function yo(e,t){return(Vo(e)?Dt:hr)(e,la(t,3))}var xo=Ei((function(e,t,n){Ae.call(e,n)?e[n].push(t):ar(e,n,[t])}));var wo=Gr((function(e,t,n){var r=-1,i="function"==typeof t,a=Uo(e)?ae(e.length):[];return fr(e,(function(e){a[++r]=i?kt(t,e,n):_r(e,t,n)})),a})),$o=Ei((function(e,t,n){ar(e,n,t)}));function jo(e,t){return(Vo(e)?It:Pr)(e,la(t,3))}var So=Ei((function(e,t,n){e[n?0:1].push(t)}),(function(){return[[],[]]}));var ko=Gr((function(e,t){if(null==e)return[];var n=t.length;return n>1&&ya(e,t[0],t[1])?t=[]:n>2&&ya(t[0],t[1],t[2])&&(t=[t[0]]),Vr(e,br(t,1),[])})),Oo=ut||function(){return ht.Date.now()};function Co(e,t,r){return t=r?n:t,t=e&&null==t?e.length:t,Zi(e,c,n,n,n,n,t)}function Do(e,t){var i;if("function"!=typeof t)throw new Te(r);return e=ps(e),function(){return--e>0&&(i=t.apply(this,arguments)),e<=1&&(t=n),i}}var To=Gr((function(e,t,n){var r=1;if(n.length){var i=cn(n,sa(To));r|=s}return Zi(e,r,t,n,i)})),_o=Gr((function(e,t,n){var r=3;if(n.length){var i=cn(n,sa(_o));r|=s}return Zi(t,r,e,n,i)}));function Eo(e,t,i){var a,o,s,l,c,d,u=0,f=!1,h=!1,p=!0;if("function"!=typeof e)throw new Te(r);function g(t){var r=a,i=o;return a=o=n,u=t,l=e.apply(i,r)}function m(e){var r=e-d;return d===n||r>=t||r<0||h&&e-u>=s}function b(){var e=Oo();if(m(e))return v(e);c=_a(b,function(e){var n=t-(e-d);return h?yn(n,s-(e-u)):n}(e))}function v(e){return c=n,p&&a?g(e):(a=o=n,l)}function y(){var e=Oo(),r=m(e);if(a=arguments,o=this,d=e,r){if(c===n)return function(e){return u=e,c=_a(b,t),f?g(e):l}(d);if(h)return $i(c),c=_a(b,t),g(d)}return c===n&&(c=_a(b,t)),l}return t=ms(t)||0,es(i)&&(f=!!i.leading,s=(h="maxWait"in i)?vn(ms(i.maxWait)||0,t):s,p="trailing"in i?!!i.trailing:p),y.cancel=function(){c!==n&&$i(c),u=0,a=d=o=c=n},y.flush=function(){return c===n?l:v(Oo())},y}var Mo=Gr((function(e,t){return dr(e,1,t)})),Io=Gr((function(e,t,n){return dr(e,ms(t)||0,n)}));function No(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new Te(r);var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],a=n.cache;if(a.has(i))return a.get(i);var o=e.apply(this,r);return n.cache=a.set(i,o)||a,o};return n.cache=new(No.Cache||Kn),n}function Ao(e){if("function"!=typeof e)throw new Te(r);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}No.Cache=Kn;var Ro=xi((function(e,t){var n=(t=1==t.length&&Vo(t[0])?It(t[0],Zt(la())):It(br(t,1),Zt(la()))).length;return Gr((function(r){for(var i=-1,a=yn(r.length,n);++i<a;)r[i]=t[i].call(this,r[i]);return kt(e,this,r)}))})),Fo=Gr((function(e,t){var r=cn(t,sa(Fo));return Zi(e,s,n,t,r)})),Bo=Gr((function(e,t){var r=cn(t,sa(Bo));return Zi(e,l,n,t,r)})),Po=na((function(e,t){return Zi(e,d,n,n,n,t)}));function Lo(e,t){return e===t||e!=e&&t!=t}var zo=Ui(Or),Ho=Ui((function(e,t){return e>=t})),Wo=Er(function(){return arguments}())?Er:function(e){return ts(e)&&Ae.call(e,"callee")&&!qe.call(e,"callee")},Vo=ae.isArray,Yo=yt?Zt(yt):function(e){return ts(e)&&kr(e)==M};function Uo(e){return null!=e&&Jo(e.length)&&!Zo(e)}function Ko(e){return ts(e)&&Uo(e)}var qo=vt||ml,Xo=xt?Zt(xt):function(e){return ts(e)&&kr(e)==y};function Go(e){if(!ts(e))return!1;var t=kr(e);return t==x||"[object DOMException]"==t||"string"==typeof e.message&&"string"==typeof e.name&&!is(e)}function Zo(e){if(!es(e))return!1;var t=kr(e);return t==w||t==$||"[object AsyncFunction]"==t||"[object Proxy]"==t}function Qo(e){return"number"==typeof e&&e==ps(e)}function Jo(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=f}function es(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}function ts(e){return null!=e&&"object"==typeof e}var ns=wt?Zt(wt):function(e){return ts(e)&&pa(e)==j};function rs(e){return"number"==typeof e||ts(e)&&kr(e)==S}function is(e){if(!ts(e)||kr(e)!=k)return!1;var t=Ue(e);if(null===t)return!0;var n=Ae.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&Ne.call(n)==Pe}var as=$t?Zt($t):function(e){return ts(e)&&kr(e)==C};var os=jt?Zt(jt):function(e){return ts(e)&&pa(e)==D};function ss(e){return"string"==typeof e||!Vo(e)&&ts(e)&&kr(e)==T}function ls(e){return"symbol"==typeof e||ts(e)&&kr(e)==_}var cs=St?Zt(St):function(e){return ts(e)&&Jo(e.length)&&!!ot[kr(e)]};var ds=Ui(Br),us=Ui((function(e,t){return e<=t}));function fs(e){if(!e)return[];if(Uo(e))return ss(e)?hn(e):Ti(e);if(Ze&&e[Ze])return function(e){for(var t,n=[];!(t=e.next()).done;)n.push(t.value);return n}(e[Ze]());var t=pa(e);return(t==j?sn:t==D?dn:Ls)(e)}function hs(e){return e?(e=ms(e))===u||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}function ps(e){var t=hs(e),n=t%1;return t==t?n?t-n:t:0}function gs(e){return e?sr(ps(e),0,p):0}function ms(e){if("number"==typeof e)return e;if(ls(e))return h;if(es(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=es(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Gt(e);var n=ge.test(e);return n||be.test(e)?dt(e.slice(2),n?2:8):pe.test(e)?h:+e}function bs(e){return _i(e,Ms(e))}function vs(e){return null==e?"":ci(e)}var ys=Mi((function(e,t){if(ja(t)||Uo(t))_i(t,Es(t),e);else for(var n in t)Ae.call(t,n)&&tr(e,n,t[n])})),xs=Mi((function(e,t){_i(t,Ms(t),e)})),ws=Mi((function(e,t,n,r){_i(t,Ms(t),e,r)})),$s=Mi((function(e,t,n,r){_i(t,Es(t),e,r)})),js=na(or);var Ss=Gr((function(e,t){e=Oe(e);var r=-1,i=t.length,a=i>2?t[2]:n;for(a&&ya(t[0],t[1],a)&&(i=1);++r<i;)for(var o=t[r],s=Ms(o),l=-1,c=s.length;++l<c;){var d=s[l],u=e[d];(u===n||Lo(u,Me[d])&&!Ae.call(e,d))&&(e[d]=o[d])}return e})),ks=Gr((function(e){return e.push(n,Ji),kt(Ns,n,e)}));function Os(e,t,r){var i=null==e?n:jr(e,t);return i===n?r:i}function Cs(e,t){return null!=e&&ga(e,t,Dr)}var Ds=zi((function(e,t,n){null!=t&&"function"!=typeof t.toString&&(t=Be.call(t)),e[t]=n}),el(rl)),Ts=zi((function(e,t,n){null!=t&&"function"!=typeof t.toString&&(t=Be.call(t)),Ae.call(e,t)?e[t].push(n):e[t]=[n]}),la),_s=Gr(_r);function Es(e){return Uo(e)?Gn(e):Rr(e)}function Ms(e){return Uo(e)?Gn(e,!0):Fr(e)}var Is=Mi((function(e,t,n){Hr(e,t,n)})),Ns=Mi((function(e,t,n,r){Hr(e,t,n,r)})),As=na((function(e,t){var n={};if(null==e)return n;var r=!1;t=It(t,(function(t){return t=yi(t,e),r||(r=t.length>1),t})),_i(e,ia(e),n),r&&(n=lr(n,7,ea));for(var i=t.length;i--;)ui(n,t[i]);return n}));var Rs=na((function(e,t){return null==e?{}:function(e,t){return Yr(e,t,(function(t,n){return Cs(e,n)}))}(e,t)}));function Fs(e,t){if(null==e)return{};var n=It(ia(e),(function(e){return[e]}));return t=la(t),Yr(e,n,(function(e,n){return t(e,n[0])}))}var Bs=Gi(Es),Ps=Gi(Ms);function Ls(e){return null==e?[]:Qt(e,Es(e))}var zs=Ri((function(e,t,n){return t=t.toLowerCase(),e+(n?Hs(t):t)}));function Hs(e){return Gs(vs(e).toLowerCase())}function Ws(e){return(e=vs(e))&&e.replace(ye,nn).replace(Je,"")}var Vs=Ri((function(e,t,n){return e+(n?"-":"")+t.toLowerCase()})),Ys=Ri((function(e,t,n){return e+(n?" ":"")+t.toLowerCase()})),Us=Ai("toLowerCase");var Ks=Ri((function(e,t,n){return e+(n?"_":"")+t.toLowerCase()}));var qs=Ri((function(e,t,n){return e+(n?" ":"")+Gs(t)}));var Xs=Ri((function(e,t,n){return e+(n?" ":"")+t.toUpperCase()})),Gs=Ai("toUpperCase");function Zs(e,t,r){return e=vs(e),(t=r?n:t)===n?function(e){return rt.test(e)}(e)?function(e){return e.match(tt)||[]}(e):function(e){return e.match(ce)||[]}(e):e.match(t)||[]}var Qs=Gr((function(e,t){try{return kt(e,n,t)}catch(e){return Go(e)?e:new je(e)}})),Js=na((function(e,t){return Ct(t,(function(t){t=Ra(t),ar(e,t,To(e[t],e))})),e}));function el(e){return function(){return e}}var tl=Pi(),nl=Pi(!0);function rl(e){return e}function il(e){return Ar("function"==typeof e?e:lr(e,1))}var al=Gr((function(e,t){return function(n){return _r(n,e,t)}})),ol=Gr((function(e,t){return function(n){return _r(e,n,t)}}));function sl(e,t,n){var r=Es(t),i=$r(t,r);null!=n||es(t)&&(i.length||!r.length)||(n=t,t=e,e=this,i=$r(t,Es(t)));var a=!(es(n)&&"chain"in n&&!n.chain),o=Zo(e);return Ct(i,(function(n){var r=t[n];e[n]=r,o&&(e.prototype[n]=function(){var t=this.__chain__;if(a||t){var n=e(this.__wrapped__);return(n.__actions__=Ti(this.__actions__)).push({func:r,args:arguments,thisArg:e}),n.__chain__=t,n}return r.apply(e,Nt([this.value()],arguments))})})),e}function ll(){}var cl=Wi(It),dl=Wi(Tt),ul=Wi(Ft);function fl(e){return xa(e)?Yt(Ra(e)):function(e){return function(t){return jr(t,e)}}(e)}var hl=Yi(),pl=Yi(!0);function gl(){return[]}function ml(){return!1}var bl=Hi((function(e,t){return e+t}),0),vl=qi("ceil"),yl=Hi((function(e,t){return e/t}),1),xl=qi("floor");var wl,$l=Hi((function(e,t){return e*t}),1),jl=qi("round"),Sl=Hi((function(e,t){return e-t}),0);return Ln.after=function(e,t){if("function"!=typeof t)throw new Te(r);return e=ps(e),function(){if(--e<1)return t.apply(this,arguments)}},Ln.ary=Co,Ln.assign=ys,Ln.assignIn=xs,Ln.assignInWith=ws,Ln.assignWith=$s,Ln.at=js,Ln.before=Do,Ln.bind=To,Ln.bindAll=Js,Ln.bindKey=_o,Ln.castArray=function(){if(!arguments.length)return[];var e=arguments[0];return Vo(e)?e:[e]},Ln.chain=fo,Ln.chunk=function(e,t,r){t=(r?ya(e,t,r):t===n)?1:vn(ps(t),0);var i=null==e?0:e.length;if(!i||t<1)return[];for(var a=0,o=0,s=ae(pt(i/t));a<i;)s[o++]=ri(e,a,a+=t);return s},Ln.compact=function(e){for(var t=-1,n=null==e?0:e.length,r=0,i=[];++t<n;){var a=e[t];a&&(i[r++]=a)}return i},Ln.concat=function(){var e=arguments.length;if(!e)return[];for(var t=ae(e-1),n=arguments[0],r=e;r--;)t[r-1]=arguments[r];return Nt(Vo(n)?Ti(n):[n],br(t,1))},Ln.cond=function(e){var t=null==e?0:e.length,n=la();return e=t?It(e,(function(e){if("function"!=typeof e[1])throw new Te(r);return[n(e[0]),e[1]]})):[],Gr((function(n){for(var r=-1;++r<t;){var i=e[r];if(kt(i[0],this,n))return kt(i[1],this,n)}}))},Ln.conforms=function(e){return function(e){var t=Es(e);return function(n){return cr(n,e,t)}}(lr(e,1))},Ln.constant=el,Ln.countBy=go,Ln.create=function(e,t){var n=zn(e);return null==t?n:ir(n,t)},Ln.curry=function e(t,r,i){var a=Zi(t,8,n,n,n,n,n,r=i?n:r);return a.placeholder=e.placeholder,a},Ln.curryRight=function e(t,r,i){var a=Zi(t,o,n,n,n,n,n,r=i?n:r);return a.placeholder=e.placeholder,a},Ln.debounce=Eo,Ln.defaults=Ss,Ln.defaultsDeep=ks,Ln.defer=Mo,Ln.delay=Io,Ln.difference=Pa,Ln.differenceBy=La,Ln.differenceWith=za,Ln.drop=function(e,t,r){var i=null==e?0:e.length;return i?ri(e,(t=r||t===n?1:ps(t))<0?0:t,i):[]},Ln.dropRight=function(e,t,r){var i=null==e?0:e.length;return i?ri(e,0,(t=i-(t=r||t===n?1:ps(t)))<0?0:t):[]},Ln.dropRightWhile=function(e,t){return e&&e.length?hi(e,la(t,3),!0,!0):[]},Ln.dropWhile=function(e,t){return e&&e.length?hi(e,la(t,3),!0):[]},Ln.fill=function(e,t,r,i){var a=null==e?0:e.length;return a?(r&&"number"!=typeof r&&ya(e,t,r)&&(r=0,i=a),function(e,t,r,i){var a=e.length;for((r=ps(r))<0&&(r=-r>a?0:a+r),(i=i===n||i>a?a:ps(i))<0&&(i+=a),i=r>i?0:gs(i);r<i;)e[r++]=t;return e}(e,t,r,i)):[]},Ln.filter=function(e,t){return(Vo(e)?_t:mr)(e,la(t,3))},Ln.flatMap=function(e,t){return br(jo(e,t),1)},Ln.flatMapDeep=function(e,t){return br(jo(e,t),u)},Ln.flatMapDepth=function(e,t,r){return r=r===n?1:ps(r),br(jo(e,t),r)},Ln.flatten=Va,Ln.flattenDeep=function(e){return(null==e?0:e.length)?br(e,u):[]},Ln.flattenDepth=function(e,t){return(null==e?0:e.length)?br(e,t=t===n?1:ps(t)):[]},Ln.flip=function(e){return Zi(e,512)},Ln.flow=tl,Ln.flowRight=nl,Ln.fromPairs=function(e){for(var t=-1,n=null==e?0:e.length,r={};++t<n;){var i=e[t];r[i[0]]=i[1]}return r},Ln.functions=function(e){return null==e?[]:$r(e,Es(e))},Ln.functionsIn=function(e){return null==e?[]:$r(e,Ms(e))},Ln.groupBy=xo,Ln.initial=function(e){return(null==e?0:e.length)?ri(e,0,-1):[]},Ln.intersection=Ua,Ln.intersectionBy=Ka,Ln.intersectionWith=qa,Ln.invert=Ds,Ln.invertBy=Ts,Ln.invokeMap=wo,Ln.iteratee=il,Ln.keyBy=$o,Ln.keys=Es,Ln.keysIn=Ms,Ln.map=jo,Ln.mapKeys=function(e,t){var n={};return t=la(t,3),xr(e,(function(e,r,i){ar(n,t(e,r,i),e)})),n},Ln.mapValues=function(e,t){var n={};return t=la(t,3),xr(e,(function(e,r,i){ar(n,r,t(e,r,i))})),n},Ln.matches=function(e){return Lr(lr(e,1))},Ln.matchesProperty=function(e,t){return zr(e,lr(t,1))},Ln.memoize=No,Ln.merge=Is,Ln.mergeWith=Ns,Ln.method=al,Ln.methodOf=ol,Ln.mixin=sl,Ln.negate=Ao,Ln.nthArg=function(e){return e=ps(e),Gr((function(t){return Wr(t,e)}))},Ln.omit=As,Ln.omitBy=function(e,t){return Fs(e,Ao(la(t)))},Ln.once=function(e){return Do(2,e)},Ln.orderBy=function(e,t,r,i){return null==e?[]:(Vo(t)||(t=null==t?[]:[t]),Vo(r=i?n:r)||(r=null==r?[]:[r]),Vr(e,t,r))},Ln.over=cl,Ln.overArgs=Ro,Ln.overEvery=dl,Ln.overSome=ul,Ln.partial=Fo,Ln.partialRight=Bo,Ln.partition=So,Ln.pick=Rs,Ln.pickBy=Fs,Ln.property=fl,Ln.propertyOf=function(e){return function(t){return null==e?n:jr(e,t)}},Ln.pull=Ga,Ln.pullAll=Za,Ln.pullAllBy=function(e,t,n){return e&&e.length&&t&&t.length?Ur(e,t,la(n,2)):e},Ln.pullAllWith=function(e,t,r){return e&&e.length&&t&&t.length?Ur(e,t,n,r):e},Ln.pullAt=Qa,Ln.range=hl,Ln.rangeRight=pl,Ln.rearg=Po,Ln.reject=function(e,t){return(Vo(e)?_t:mr)(e,Ao(la(t,3)))},Ln.remove=function(e,t){var n=[];if(!e||!e.length)return n;var r=-1,i=[],a=e.length;for(t=la(t,3);++r<a;){var o=e[r];t(o,r,e)&&(n.push(o),i.push(r))}return Kr(e,i),n},Ln.rest=function(e,t){if("function"!=typeof e)throw new Te(r);return Gr(e,t=t===n?t:ps(t))},Ln.reverse=Ja,Ln.sampleSize=function(e,t,r){return t=(r?ya(e,t,r):t===n)?1:ps(t),(Vo(e)?Qn:Qr)(e,t)},Ln.set=function(e,t,n){return null==e?e:Jr(e,t,n)},Ln.setWith=function(e,t,r,i){return i="function"==typeof i?i:n,null==e?e:Jr(e,t,r,i)},Ln.shuffle=function(e){return(Vo(e)?Jn:ni)(e)},Ln.slice=function(e,t,r){var i=null==e?0:e.length;return i?(r&&"number"!=typeof r&&ya(e,t,r)?(t=0,r=i):(t=null==t?0:ps(t),r=r===n?i:ps(r)),ri(e,t,r)):[]},Ln.sortBy=ko,Ln.sortedUniq=function(e){return e&&e.length?si(e):[]},Ln.sortedUniqBy=function(e,t){return e&&e.length?si(e,la(t,2)):[]},Ln.split=function(e,t,r){return r&&"number"!=typeof r&&ya(e,t,r)&&(t=r=n),(r=r===n?p:r>>>0)?(e=vs(e))&&("string"==typeof t||null!=t&&!as(t))&&!(t=ci(t))&&on(e)?wi(hn(e),0,r):e.split(t,r):[]},Ln.spread=function(e,t){if("function"!=typeof e)throw new Te(r);return t=null==t?0:vn(ps(t),0),Gr((function(n){var r=n[t],i=wi(n,0,t);return r&&Nt(i,r),kt(e,this,i)}))},Ln.tail=function(e){var t=null==e?0:e.length;return t?ri(e,1,t):[]},Ln.take=function(e,t,r){return e&&e.length?ri(e,0,(t=r||t===n?1:ps(t))<0?0:t):[]},Ln.takeRight=function(e,t,r){var i=null==e?0:e.length;return i?ri(e,(t=i-(t=r||t===n?1:ps(t)))<0?0:t,i):[]},Ln.takeRightWhile=function(e,t){return e&&e.length?hi(e,la(t,3),!1,!0):[]},Ln.takeWhile=function(e,t){return e&&e.length?hi(e,la(t,3)):[]},Ln.tap=function(e,t){return t(e),e},Ln.throttle=function(e,t,n){var i=!0,a=!0;if("function"!=typeof e)throw new Te(r);return es(n)&&(i="leading"in n?!!n.leading:i,a="trailing"in n?!!n.trailing:a),Eo(e,t,{leading:i,maxWait:t,trailing:a})},Ln.thru=ho,Ln.toArray=fs,Ln.toPairs=Bs,Ln.toPairsIn=Ps,Ln.toPath=function(e){return Vo(e)?It(e,Ra):ls(e)?[e]:Ti(Aa(vs(e)))},Ln.toPlainObject=bs,Ln.transform=function(e,t,n){var r=Vo(e),i=r||qo(e)||cs(e);if(t=la(t,4),null==n){var a=e&&e.constructor;n=i?r?new a:[]:es(e)&&Zo(a)?zn(Ue(e)):{}}return(i?Ct:xr)(e,(function(e,r,i){return t(n,e,r,i)})),n},Ln.unary=function(e){return Co(e,1)},Ln.union=eo,Ln.unionBy=to,Ln.unionWith=no,Ln.uniq=function(e){return e&&e.length?di(e):[]},Ln.uniqBy=function(e,t){return e&&e.length?di(e,la(t,2)):[]},Ln.uniqWith=function(e,t){return t="function"==typeof t?t:n,e&&e.length?di(e,n,t):[]},Ln.unset=function(e,t){return null==e||ui(e,t)},Ln.unzip=ro,Ln.unzipWith=io,Ln.update=function(e,t,n){return null==e?e:fi(e,t,vi(n))},Ln.updateWith=function(e,t,r,i){return i="function"==typeof i?i:n,null==e?e:fi(e,t,vi(r),i)},Ln.values=Ls,Ln.valuesIn=function(e){return null==e?[]:Qt(e,Ms(e))},Ln.without=ao,Ln.words=Zs,Ln.wrap=function(e,t){return Fo(vi(t),e)},Ln.xor=oo,Ln.xorBy=so,Ln.xorWith=lo,Ln.zip=co,Ln.zipObject=function(e,t){return mi(e||[],t||[],tr)},Ln.zipObjectDeep=function(e,t){return mi(e||[],t||[],Jr)},Ln.zipWith=uo,Ln.entries=Bs,Ln.entriesIn=Ps,Ln.extend=xs,Ln.extendWith=ws,sl(Ln,Ln),Ln.add=bl,Ln.attempt=Qs,Ln.camelCase=zs,Ln.capitalize=Hs,Ln.ceil=vl,Ln.clamp=function(e,t,r){return r===n&&(r=t,t=n),r!==n&&(r=(r=ms(r))==r?r:0),t!==n&&(t=(t=ms(t))==t?t:0),sr(ms(e),t,r)},Ln.clone=function(e){return lr(e,4)},Ln.cloneDeep=function(e){return lr(e,5)},Ln.cloneDeepWith=function(e,t){return lr(e,5,t="function"==typeof t?t:n)},Ln.cloneWith=function(e,t){return lr(e,4,t="function"==typeof t?t:n)},Ln.conformsTo=function(e,t){return null==t||cr(e,t,Es(t))},Ln.deburr=Ws,Ln.defaultTo=function(e,t){return null==e||e!=e?t:e},Ln.divide=yl,Ln.endsWith=function(e,t,r){e=vs(e),t=ci(t);var i=e.length,a=r=r===n?i:sr(ps(r),0,i);return(r-=t.length)>=0&&e.slice(r,a)==t},Ln.eq=Lo,Ln.escape=function(e){return(e=vs(e))&&X.test(e)?e.replace(K,rn):e},Ln.escapeRegExp=function(e){return(e=vs(e))&&re.test(e)?e.replace(ne,"\\$&"):e},Ln.every=function(e,t,r){var i=Vo(e)?Tt:pr;return r&&ya(e,t,r)&&(t=n),i(e,la(t,3))},Ln.find=mo,Ln.findIndex=Ha,Ln.findKey=function(e,t){return Pt(e,la(t,3),xr)},Ln.findLast=bo,Ln.findLastIndex=Wa,Ln.findLastKey=function(e,t){return Pt(e,la(t,3),wr)},Ln.floor=xl,Ln.forEach=vo,Ln.forEachRight=yo,Ln.forIn=function(e,t){return null==e?e:vr(e,la(t,3),Ms)},Ln.forInRight=function(e,t){return null==e?e:yr(e,la(t,3),Ms)},Ln.forOwn=function(e,t){return e&&xr(e,la(t,3))},Ln.forOwnRight=function(e,t){return e&&wr(e,la(t,3))},Ln.get=Os,Ln.gt=zo,Ln.gte=Ho,Ln.has=function(e,t){return null!=e&&ga(e,t,Cr)},Ln.hasIn=Cs,Ln.head=Ya,Ln.identity=rl,Ln.includes=function(e,t,n,r){e=Uo(e)?e:Ls(e),n=n&&!r?ps(n):0;var i=e.length;return n<0&&(n=vn(i+n,0)),ss(e)?n<=i&&e.indexOf(t,n)>-1:!!i&&zt(e,t,n)>-1},Ln.indexOf=function(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var i=null==n?0:ps(n);return i<0&&(i=vn(r+i,0)),zt(e,t,i)},Ln.inRange=function(e,t,r){return t=hs(t),r===n?(r=t,t=0):r=hs(r),function(e,t,n){return e>=yn(t,n)&&e<vn(t,n)}(e=ms(e),t,r)},Ln.invoke=_s,Ln.isArguments=Wo,Ln.isArray=Vo,Ln.isArrayBuffer=Yo,Ln.isArrayLike=Uo,Ln.isArrayLikeObject=Ko,Ln.isBoolean=function(e){return!0===e||!1===e||ts(e)&&kr(e)==v},Ln.isBuffer=qo,Ln.isDate=Xo,Ln.isElement=function(e){return ts(e)&&1===e.nodeType&&!is(e)},Ln.isEmpty=function(e){if(null==e)return!0;if(Uo(e)&&(Vo(e)||"string"==typeof e||"function"==typeof e.splice||qo(e)||cs(e)||Wo(e)))return!e.length;var t=pa(e);if(t==j||t==D)return!e.size;if(ja(e))return!Rr(e).length;for(var n in e)if(Ae.call(e,n))return!1;return!0},Ln.isEqual=function(e,t){return Mr(e,t)},Ln.isEqualWith=function(e,t,r){var i=(r="function"==typeof r?r:n)?r(e,t):n;return i===n?Mr(e,t,n,r):!!i},Ln.isError=Go,Ln.isFinite=function(e){return"number"==typeof e&&Bt(e)},Ln.isFunction=Zo,Ln.isInteger=Qo,Ln.isLength=Jo,Ln.isMap=ns,Ln.isMatch=function(e,t){return e===t||Ir(e,t,da(t))},Ln.isMatchWith=function(e,t,r){return r="function"==typeof r?r:n,Ir(e,t,da(t),r)},Ln.isNaN=function(e){return rs(e)&&e!=+e},Ln.isNative=function(e){if($a(e))throw new je("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");return Nr(e)},Ln.isNil=function(e){return null==e},Ln.isNull=function(e){return null===e},Ln.isNumber=rs,Ln.isObject=es,Ln.isObjectLike=ts,Ln.isPlainObject=is,Ln.isRegExp=as,Ln.isSafeInteger=function(e){return Qo(e)&&e>=-9007199254740991&&e<=f},Ln.isSet=os,Ln.isString=ss,Ln.isSymbol=ls,Ln.isTypedArray=cs,Ln.isUndefined=function(e){return e===n},Ln.isWeakMap=function(e){return ts(e)&&pa(e)==E},Ln.isWeakSet=function(e){return ts(e)&&"[object WeakSet]"==kr(e)},Ln.join=function(e,t){return null==e?"":Ut.call(e,t)},Ln.kebabCase=Vs,Ln.last=Xa,Ln.lastIndexOf=function(e,t,r){var i=null==e?0:e.length;if(!i)return-1;var a=i;return r!==n&&(a=(a=ps(r))<0?vn(i+a,0):yn(a,i-1)),t==t?function(e,t,n){for(var r=n+1;r--;)if(e[r]===t)return r;return r}(e,t,a):Lt(e,Wt,a,!0)},Ln.lowerCase=Ys,Ln.lowerFirst=Us,Ln.lt=ds,Ln.lte=us,Ln.max=function(e){return e&&e.length?gr(e,rl,Or):n},Ln.maxBy=function(e,t){return e&&e.length?gr(e,la(t,2),Or):n},Ln.mean=function(e){return Vt(e,rl)},Ln.meanBy=function(e,t){return Vt(e,la(t,2))},Ln.min=function(e){return e&&e.length?gr(e,rl,Br):n},Ln.minBy=function(e,t){return e&&e.length?gr(e,la(t,2),Br):n},Ln.stubArray=gl,Ln.stubFalse=ml,Ln.stubObject=function(){return{}},Ln.stubString=function(){return""},Ln.stubTrue=function(){return!0},Ln.multiply=$l,Ln.nth=function(e,t){return e&&e.length?Wr(e,ps(t)):n},Ln.noConflict=function(){return ht._===this&&(ht._=Le),this},Ln.noop=ll,Ln.now=Oo,Ln.pad=function(e,t,n){e=vs(e);var r=(t=ps(t))?fn(e):0;if(!t||r>=t)return e;var i=(t-r)/2;return Vi(gt(i),n)+e+Vi(pt(i),n)},Ln.padEnd=function(e,t,n){e=vs(e);var r=(t=ps(t))?fn(e):0;return t&&r<t?e+Vi(t-r,n):e},Ln.padStart=function(e,t,n){e=vs(e);var r=(t=ps(t))?fn(e):0;return t&&r<t?Vi(t-r,n)+e:e},Ln.parseInt=function(e,t,n){return n||null==t?t=0:t&&(t=+t),wn(vs(e).replace(ie,""),t||0)},Ln.random=function(e,t,r){if(r&&"boolean"!=typeof r&&ya(e,t,r)&&(t=r=n),r===n&&("boolean"==typeof t?(r=t,t=n):"boolean"==typeof e&&(r=e,e=n)),e===n&&t===n?(e=0,t=1):(e=hs(e),t===n?(t=e,e=0):t=hs(t)),e>t){var i=e;e=t,t=i}if(r||e%1||t%1){var a=$n();return yn(e+a*(t-e+ct("1e-"+((a+"").length-1))),t)}return qr(e,t)},Ln.reduce=function(e,t,n){var r=Vo(e)?At:Kt,i=arguments.length<3;return r(e,la(t,4),n,i,fr)},Ln.reduceRight=function(e,t,n){var r=Vo(e)?Rt:Kt,i=arguments.length<3;return r(e,la(t,4),n,i,hr)},Ln.repeat=function(e,t,r){return t=(r?ya(e,t,r):t===n)?1:ps(t),Xr(vs(e),t)},Ln.replace=function(){var e=arguments,t=vs(e[0]);return e.length<3?t:t.replace(e[1],e[2])},Ln.result=function(e,t,r){var i=-1,a=(t=yi(t,e)).length;for(a||(a=1,e=n);++i<a;){var o=null==e?n:e[Ra(t[i])];o===n&&(i=a,o=r),e=Zo(o)?o.call(e):o}return e},Ln.round=jl,Ln.runInContext=e,Ln.sample=function(e){return(Vo(e)?Zn:Zr)(e)},Ln.size=function(e){if(null==e)return 0;if(Uo(e))return ss(e)?fn(e):e.length;var t=pa(e);return t==j||t==D?e.size:Rr(e).length},Ln.snakeCase=Ks,Ln.some=function(e,t,r){var i=Vo(e)?Ft:ii;return r&&ya(e,t,r)&&(t=n),i(e,la(t,3))},Ln.sortedIndex=function(e,t){return ai(e,t)},Ln.sortedIndexBy=function(e,t,n){return oi(e,t,la(n,2))},Ln.sortedIndexOf=function(e,t){var n=null==e?0:e.length;if(n){var r=ai(e,t);if(r<n&&Lo(e[r],t))return r}return-1},Ln.sortedLastIndex=function(e,t){return ai(e,t,!0)},Ln.sortedLastIndexBy=function(e,t,n){return oi(e,t,la(n,2),!0)},Ln.sortedLastIndexOf=function(e,t){if(null==e?0:e.length){var n=ai(e,t,!0)-1;if(Lo(e[n],t))return n}return-1},Ln.startCase=qs,Ln.startsWith=function(e,t,n){return e=vs(e),n=null==n?0:sr(ps(n),0,e.length),t=ci(t),e.slice(n,n+t.length)==t},Ln.subtract=Sl,Ln.sum=function(e){return e&&e.length?qt(e,rl):0},Ln.sumBy=function(e,t){return e&&e.length?qt(e,la(t,2)):0},Ln.template=function(e,t,r){var i=Ln.templateSettings;r&&ya(e,t,r)&&(t=n),e=vs(e),t=ws({},t,i,Qi);var a,o,s=ws({},t.imports,i.imports,Qi),l=Es(s),c=Qt(s,l),d=0,u=t.interpolate||xe,f="__p += '",h=Ce((t.escape||xe).source+"|"+u.source+"|"+(u===Q?fe:xe).source+"|"+(t.evaluate||xe).source+"|$","g"),p="//# sourceURL="+(Ae.call(t,"sourceURL")?(t.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++at+"]")+"\n";e.replace(h,(function(t,n,r,i,s,l){return r||(r=i),f+=e.slice(d,l).replace(we,an),n&&(a=!0,f+="' +\n__e("+n+") +\n'"),s&&(o=!0,f+="';\n"+s+";\n__p += '"),r&&(f+="' +\n((__t = ("+r+")) == null ? '' : __t) +\n'"),d=l+t.length,t})),f+="';\n";var g=Ae.call(t,"variable")&&t.variable;if(g){if(de.test(g))throw new je("Invalid `variable` option passed into `_.template`")}else f="with (obj) {\n"+f+"\n}\n";f=(o?f.replace(W,""):f).replace(V,"$1").replace(Y,"$1;"),f="function("+(g||"obj")+") {\n"+(g?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(a?", __e = _.escape":"")+(o?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+f+"return __p\n}";var m=Qs((function(){return Se(l,p+"return "+f).apply(n,c)}));if(m.source=f,Go(m))throw m;return m},Ln.times=function(e,t){if((e=ps(e))<1||e>f)return[];var n=p,r=yn(e,p);t=la(t),e-=p;for(var i=Xt(r,t);++n<e;)t(n);return i},Ln.toFinite=hs,Ln.toInteger=ps,Ln.toLength=gs,Ln.toLower=function(e){return vs(e).toLowerCase()},Ln.toNumber=ms,Ln.toSafeInteger=function(e){return e?sr(ps(e),-9007199254740991,f):0===e?e:0},Ln.toString=vs,Ln.toUpper=function(e){return vs(e).toUpperCase()},Ln.trim=function(e,t,r){if((e=vs(e))&&(r||t===n))return Gt(e);if(!e||!(t=ci(t)))return e;var i=hn(e),a=hn(t);return wi(i,en(i,a),tn(i,a)+1).join("")},Ln.trimEnd=function(e,t,r){if((e=vs(e))&&(r||t===n))return e.slice(0,pn(e)+1);if(!e||!(t=ci(t)))return e;var i=hn(e);return wi(i,0,tn(i,hn(t))+1).join("")},Ln.trimStart=function(e,t,r){if((e=vs(e))&&(r||t===n))return e.replace(ie,"");if(!e||!(t=ci(t)))return e;var i=hn(e);return wi(i,en(i,hn(t))).join("")},Ln.truncate=function(e,t){var r=30,i="...";if(es(t)){var a="separator"in t?t.separator:a;r="length"in t?ps(t.length):r,i="omission"in t?ci(t.omission):i}var o=(e=vs(e)).length;if(on(e)){var s=hn(e);o=s.length}if(r>=o)return e;var l=r-fn(i);if(l<1)return i;var c=s?wi(s,0,l).join(""):e.slice(0,l);if(a===n)return c+i;if(s&&(l+=c.length-l),as(a)){if(e.slice(l).search(a)){var d,u=c;for(a.global||(a=Ce(a.source,vs(he.exec(a))+"g")),a.lastIndex=0;d=a.exec(u);)var f=d.index;c=c.slice(0,f===n?l:f)}}else if(e.indexOf(ci(a),l)!=l){var h=c.lastIndexOf(a);h>-1&&(c=c.slice(0,h))}return c+i},Ln.unescape=function(e){return(e=vs(e))&&q.test(e)?e.replace(U,gn):e},Ln.uniqueId=function(e){var t=++Re;return vs(e)+t},Ln.upperCase=Xs,Ln.upperFirst=Gs,Ln.each=vo,Ln.eachRight=yo,Ln.first=Ya,sl(Ln,(wl={},xr(Ln,(function(e,t){Ae.call(Ln.prototype,t)||(wl[t]=e)})),wl),{chain:!1}),Ln.VERSION="4.17.21",Ct(["bind","bindKey","curry","curryRight","partial","partialRight"],(function(e){Ln[e].placeholder=Ln})),Ct(["drop","take"],(function(e,t){Vn.prototype[e]=function(r){r=r===n?1:vn(ps(r),0);var i=this.__filtered__&&!t?new Vn(this):this.clone();return i.__filtered__?i.__takeCount__=yn(r,i.__takeCount__):i.__views__.push({size:yn(r,p),type:e+(i.__dir__<0?"Right":"")}),i},Vn.prototype[e+"Right"]=function(t){return this.reverse()[e](t).reverse()}})),Ct(["filter","map","takeWhile"],(function(e,t){var n=t+1,r=1==n||3==n;Vn.prototype[e]=function(e){var t=this.clone();return t.__iteratees__.push({iteratee:la(e,3),type:n}),t.__filtered__=t.__filtered__||r,t}})),Ct(["head","last"],(function(e,t){var n="take"+(t?"Right":"");Vn.prototype[e]=function(){return this[n](1).value()[0]}})),Ct(["initial","tail"],(function(e,t){var n="drop"+(t?"":"Right");Vn.prototype[e]=function(){return this.__filtered__?new Vn(this):this[n](1)}})),Vn.prototype.compact=function(){return this.filter(rl)},Vn.prototype.find=function(e){return this.filter(e).head()},Vn.prototype.findLast=function(e){return this.reverse().find(e)},Vn.prototype.invokeMap=Gr((function(e,t){return"function"==typeof e?new Vn(this):this.map((function(n){return _r(n,e,t)}))})),Vn.prototype.reject=function(e){return this.filter(Ao(la(e)))},Vn.prototype.slice=function(e,t){e=ps(e);var r=this;return r.__filtered__&&(e>0||t<0)?new Vn(r):(e<0?r=r.takeRight(-e):e&&(r=r.drop(e)),t!==n&&(r=(t=ps(t))<0?r.dropRight(-t):r.take(t-e)),r)},Vn.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},Vn.prototype.toArray=function(){return this.take(p)},xr(Vn.prototype,(function(e,t){var r=/^(?:filter|find|map|reject)|While$/.test(t),i=/^(?:head|last)$/.test(t),a=Ln[i?"take"+("last"==t?"Right":""):t],o=i||/^find/.test(t);a&&(Ln.prototype[t]=function(){var t=this.__wrapped__,s=i?[1]:arguments,l=t instanceof Vn,c=s[0],d=l||Vo(t),u=function(e){var t=a.apply(Ln,Nt([e],s));return i&&f?t[0]:t};d&&r&&"function"==typeof c&&1!=c.length&&(l=d=!1);var f=this.__chain__,h=!!this.__actions__.length,p=o&&!f,g=l&&!h;if(!o&&d){t=g?t:new Vn(this);var m=e.apply(t,s);return m.__actions__.push({func:ho,args:[u],thisArg:n}),new Wn(m,f)}return p&&g?e.apply(this,s):(m=this.thru(u),p?i?m.value()[0]:m.value():m)})})),Ct(["pop","push","shift","sort","splice","unshift"],(function(e){var t=_e[e],n=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",r=/^(?:pop|shift)$/.test(e);Ln.prototype[e]=function(){var e=arguments;if(r&&!this.__chain__){var i=this.value();return t.apply(Vo(i)?i:[],e)}return this[n]((function(n){return t.apply(Vo(n)?n:[],e)}))}})),xr(Vn.prototype,(function(e,t){var n=Ln[t];if(n){var r=n.name+"";Ae.call(En,r)||(En[r]=[]),En[r].push({name:t,func:n})}})),En[Li(n,2).name]=[{name:"wrapper",func:n}],Vn.prototype.clone=function(){var e=new Vn(this.__wrapped__);return e.__actions__=Ti(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=Ti(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=Ti(this.__views__),e},Vn.prototype.reverse=function(){if(this.__filtered__){var e=new Vn(this);e.__dir__=-1,e.__filtered__=!0}else(e=this.clone()).__dir__*=-1;return e},Vn.prototype.value=function(){var e=this.__wrapped__.value(),t=this.__dir__,n=Vo(e),r=t<0,i=n?e.length:0,a=function(e,t,n){var r=-1,i=n.length;for(;++r<i;){var a=n[r],o=a.size;switch(a.type){case"drop":e+=o;break;case"dropRight":t-=o;break;case"take":t=yn(t,e+o);break;case"takeRight":e=vn(e,t-o)}}return{start:e,end:t}}(0,i,this.__views__),o=a.start,s=a.end,l=s-o,c=r?s:o-1,d=this.__iteratees__,u=d.length,f=0,h=yn(l,this.__takeCount__);if(!n||!r&&i==l&&h==l)return pi(e,this.__actions__);var p=[];e:for(;l--&&f<h;){for(var g=-1,m=e[c+=t];++g<u;){var b=d[g],v=b.iteratee,y=b.type,x=v(m);if(2==y)m=x;else if(!x){if(1==y)continue e;break e}}p[f++]=m}return p},Ln.prototype.at=po,Ln.prototype.chain=function(){return fo(this)},Ln.prototype.commit=function(){return new Wn(this.value(),this.__chain__)},Ln.prototype.next=function(){this.__values__===n&&(this.__values__=fs(this.value()));var e=this.__index__>=this.__values__.length;return{done:e,value:e?n:this.__values__[this.__index__++]}},Ln.prototype.plant=function(e){for(var t,r=this;r instanceof Hn;){var i=Ba(r);i.__index__=0,i.__values__=n,t?a.__wrapped__=i:t=i;var a=i;r=r.__wrapped__}return a.__wrapped__=e,t},Ln.prototype.reverse=function(){var e=this.__wrapped__;if(e instanceof Vn){var t=e;return this.__actions__.length&&(t=new Vn(this)),(t=t.reverse()).__actions__.push({func:ho,args:[Ja],thisArg:n}),new Wn(t,this.__chain__)}return this.thru(Ja)},Ln.prototype.toJSON=Ln.prototype.valueOf=Ln.prototype.value=function(){return pi(this.__wrapped__,this.__actions__)},Ln.prototype.first=Ln.prototype.head,Ze&&(Ln.prototype[Ze]=function(){return this}),Ln}();gt?((gt.exports=mn)._=mn,pt._=mn):ht._=mn}).call(Ti)}(rS,rS.exports);var iS=rS.exports;const aS=Y.default.forwardRef(((n,r)=>{var{value:i,readOnly:a,"data-testid":o,maskRange:s,unmaskRange:l,maskRegex:c,maskTransformer:d,iconMask:u=e.jsx($.EyeSlashIcon,{}),iconUnmask:f=e.jsx(w.EyeIcon,{}),iconActiveColor:h,iconInactiveColor:p,maskChar:g="•",error:m,disableMask:b,transformInput:v,loadState:y,onMask:x,onUnmask:j,onChange:S,onFocus:k,onBlur:O,onTryAgain:C}=n,D=X(n,["value","readOnly","data-testid","maskRange","unmaskRange","maskRegex","maskTransformer","iconMask","iconUnmask","iconActiveColor","iconInactiveColor","maskChar","error","disableMask","transformInput","loadState","onMask","onUnmask","onChange","onFocus","onBlur","onTryAgain"]);const T=a&&iS.isEmpty(i),[_,E]=t.useState(!b),[M,I]=t.useState(i||"");t.useEffect((()=>{I(i)}),[i]);const N=e=>{P(!1),k&&k(e)},A=e=>{P(!0),O&&O(e)},R=e=>{let t=e.target.value;switch(v){case"uppercase":t=t.toUpperCase();break;case"lowercase":t=t.toLowerCase()}I(t),e.target.value=t,S&&S(e)},F=()=>{a&&C&&C()},B=()=>{P(!_)},P=e=>{E(e),e?x&&x():j&&j()},L=()=>!(null==M?void 0:M.toString().length)||b,z=()=>{const t=L();return!T&&e.jsx(qj,Object.assign({"data-testid":"icon-"+(_?"masked":"unmasked"),onClick:t?void 0:B,$isDisabled:t,$inactiveColor:p,$activeColor:h},{children:_?f:u}))};return e.jsx("div",Object.assign({"aria-busy":"loading"===y,"aria-live":"polite"},{children:(()=>{if(a)switch(y){case"fail":return e.jsxs(nS,Object.assign({onClick:F,"data-testid":"try-again-button"},{children:[e.jsxs(Jj,{children:[e.jsx(eS,{}),e.jsx(tS,{children:"Error"})]}),e.jsx(Qj,Object.assign({weight:"semibold"},{children:"Try again?"}))]}));case"loading":return e.jsxs(Xj,{children:[e.jsx(Zj,{}),e.jsx(Gj,{children:"Retrieving..."})]})}return e.jsx(Kj,Object.assign({ref:r,"data-testid":`${o||"masked-input"}${_?"-masked":"-unmasked"}`,addon:{type:"custom",attributes:{children:z()},position:"right"},onFocus:a?void 0:N,onBlur:a?void 0:A,onClick:a?B:void 0,onChange:R,value:T?"-":_&&!b?dc.maskValue(null==M?void 0:M.toString(),{maskChar:g,maskRange:s,unmaskRange:l,maskRegex:c,maskTransformer:d}):M,readOnly:a,error:m,$isDisabled:L()},D))})()}))})),oS=Y.default.forwardRef(((t,n)=>{const{label:r,errorMessage:i,id:a="form-field-masked-input","data-error-testid":o,"data-testid":s,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u}=t,f=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e.jsx(gy,Object.assign({id:a,label:r,errorMessage:i,disabled:f.disabled,"data-error-testid":o,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u},{children:e.jsx(aS,Object.assign({ref:n,id:`${a}-base`,"data-testid":s||a,error:!!i},f))}))})),sS=i.css`
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
`,pS=({bold:n,displayType:r="inline",label:a,searchTerm:o,maxLines:s=2,selected:l,sublabel:c,truncationType:d="middle",variant:u})=>{const f=i.useTheme()||ml,h=hs.Body.fontSize({theme:f}),p=hs.Body.fontFamily({theme:f}),{ref:g,width:m}=qe(),b=t.useCallback((e=>{if("inline"!==r)return!1;return dc.getTextWidth(e,`${h}rem '${p}'`)>m*s-50}),[m,r,h,p,s]),v=t.useMemo((()=>b(a)),[b,a]),y=t.useMemo((()=>c&&b(c)),[b,c]),x=v||y?"next-line":r,w=t=>{if(!o)return t;const n=o.toLowerCase().trim(),r=t.toLowerCase().indexOf(n),i=r+o.length;return-1===r?t:e.jsxs(e.Fragment,{children:[a.slice(0,r),e.jsx(dS,Object.assign({$variant:u},{children:a.slice(r,i)})),a.slice(i)]})},$=t=>e.jsxs(e.Fragment,{children:[e.jsx(fS,Object.assign({$maxLines:s,"aria-hidden":!0},{children:w(t)})),e.jsx(hS,Object.assign({$maxLines:s,"aria-hidden":!0},{children:w(t)}))]});return e.jsxs(uS,Object.assign({ref:g,$labelDisplayType:x},{children:[e.jsx(lS,Object.assign({"aria-label":a,$bold:n,$maxLines:s,$selected:l,$truncateType:d,$variant:u},{children:"middle"===d&&v?$(a):w(a)})),c&&e.jsx(cS,Object.assign({"aria-label":c,$maxLines:s,$truncateType:d,$labelDisplayType:r},{children:"middle"===d&&y?$(c):c}))]}))},gS=Y.default.createContext({focusedIndex:-1,setFocusedIndex:()=>{}}),mS=({children:n})=>{const[r,i]=t.useState(-1);return e.jsx(gS.Provider,Object.assign({value:{focusedIndex:r,setFocusedIndex:i}},{children:n}))},bS=K.default.div`
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
`,vS=K.default.div`
    background: transparent;
    padding: 0.5rem;
`,yS=K.default.ul`
    list-style-type: none;
`,xS=K.default.li`
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    padding: 0.75rem 0.5rem;
    cursor: pointer;

    outline-color: ${ts.Accent.Light[3]};

    ${e=>e.$active&&i.css`
            background: ${ts.Accent.Light[5]};
        `}
`,wS=K.default(O.TickIcon)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1rem;
    color: ${ts.Primary};
`,$S=K.default.div`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1rem;
`,jS=K.default(k.SquareTickFillIcon)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1.625rem;
    color: ${ts.Primary};
`,SS=K.default(S.SquareIcon)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1.625rem;
    color: ${ts.Accent.Light[2]};
`,kS=K.default.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`,OS=K.default(Of)`
    ${e=>ys.getTextStyle("small"===e.$variant?"BodySmall":"Body","semibold")}
    cursor: pointer;
    overflow: hidden;
    color: ${ts.Primary};
`,CS=K.default(OS)`
    outline-offset: 0.25rem;
`,DS=K.default(OS)`
    padding: 0.5rem 1rem;
`,TS=K.default.div`
    width: 100%;
    display: flex;
    padding: 1rem 0.5rem;
    align-items: center;
`,_S=K.default.div`
    ${e=>ys.getTextStyle("small"===e.$variant?"BodySmall":"Body","regular")}
`,ES=K.default(s.ExclamationCircleFillIcon)`
    ${e=>{const t="small"===e.$variant?1:1.125;return i.css`
            height: ${t}rem;
            width: ${t}rem;
        `}}
    margin-right: 0.625rem;
    color: ${ts.Validation.Red.Icon};
`,MS=e=>"small"===e?1:1.125,IS=e=>i.css`
        height: ${MS(e)}rem;
        width: ${MS(e)}rem;
    `,NS=K.default.div`
    background: ${ts.Neutral[7]};
    border-radius: 4px;
    display: flex;
    align-items: center;
`,AS=K.default.label`
    flex: 1;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: ${e=>"small"===e.$variant?"0.4375rem 0.5rem":"0.6875rem 0.5rem"};
`,RS=K.default(kf)`
    height: ${e=>"small"===e.$variant?2.5:3}rem;
    flex: 1;
    padding: 0;
    height: auto;
`,FS=K.default(x.MagnifierIcon)`
    color: ${ts.Neutral[3]};
    flex-shrink: 0;
    ${e=>IS(e.$variant)}
`,BS=K.default(ss)`
    align-self: stretch;
    box-sizing: content-box;
    padding: 0 0.5rem;
    margin-left: -0.5rem;
    color: ${ts.Neutral[3]};
    cursor: pointer;

    ${e=>i.css`
            svg {
                ${IS(e.$variant)}
            }
        `}
`,PS=t.forwardRef(((t,n)=>{var{value:r,variant:i,onClear:a}=t,o=X(t,["value","variant","onClear"]);return e.jsxs(NS,{children:[e.jsxs(AS,{children:[e.jsx(FS,{$variant:i,"aria-hidden":!0}),e.jsx(RS,Object.assign({ref:n,value:r,$variant:i},o))]}),r&&e.jsx(BS,Object.assign({"aria-label":"Clear search",focusOutline:"browser",onClick:a,$variant:i},{children:e.jsx(m.CrossIcon,{"aria-hidden":!0})}))]})})),LS=({listItems:n,multiSelect:r,selectedItems:i,disableItemFocus:a,itemsLoadState:o="success",itemTruncationType:s="end",itemMaxLines:l=2,labelDisplayType:c="inline",variant:d="default",listboxId:u,width:f,topScrollItem:h,onSelectItem:p,onSelectAll:g,onDismiss:m,onRetry:b,valueExtractor:v,listExtractor:y,renderListItem:x,renderCustomCallToAction:w,enableSearch:$,hideNoResultsDisplay:j,searchPlaceholder:S="Search",searchFunction:k,onSearch:O})=>{const{focusedIndex:C,setFocusedIndex:D}=t.useContext(gS),[T,_]=t.useState(""),[E,M]=t.useState(n),I=mc(o),N=pc(),A=t.useRef(),R=t.useRef(),F=t.useRef([]),B=t.useRef(),P=e=>y?y(e):e.toString(),L=t.useCallback((e=>!!lj(i,(t=>dj(t,e)))),[i]),z=uc((()=>k(T))),H=uc((()=>n.filter((e=>{var t;const n=P(e),r="object"==typeof n?n.title.toLowerCase():n.toLowerCase(),i="string"==typeof n||null===(t=n.secondaryLabel)||void 0===t?void 0:t.toLowerCase(),a=T.trim().toLowerCase();return r.includes(a)||i&&i.includes(a)})))),W=(e,t)=>{D(t),null==p||p(e,(e=>v?v(e):e)(e))},V=e=>{const t=e.target.value;_(t),null==O||O()},Y=()=>{var e;_(""),null===(e=B.current)||void 0===e||e.focus(),null==O||O()},U=()=>{null==b||b()};fc("keydown",(e=>{var t,n;switch(e.code){case"ArrowDown":if(e.preventDefault(),C<E.length-1){const e=C+1;null===(t=F.current[e])||void 0===t||t.focus(),D(e)}break;case"ArrowUp":if(e.preventDefault(),C>0){const e=C-1;null===(n=F.current[e])||void 0===n||n.focus(),D(e)}else 0===C&&B.current&&(B.current.focus(),D(-1));break;case"Space":case"Enter":document.activeElement===F.current[C]&&(e.preventDefault(),E[C]&&W(E[C],C))}})),t.useEffect((()=>{if(void 0===h)return;const e=setTimeout((()=>{var e;const t=n.indexOf(h),r=F.current[t];if(A.current){const t=null!==(e=null==r?void 0:r.offsetTop)&&void 0!==e?e:0;A.current.scrollTop=t-8}D(t)}),0);return()=>clearTimeout(e)}),[F,n,D,h]),t.useEffect((()=>{if(N)return;if(a)return;const e=n.findIndex((e=>L(e)));B.current?(D(-1),setTimeout((()=>{var e;return null===(e=B.current)||void 0===e?void 0:e.focus()}),200)):F.current[C]?setTimeout((()=>{var e;return null===(e=F.current[C])||void 0===e?void 0:e.focus()}),200):F.current[e]?(D(e),setTimeout((()=>{var t;return null===(t=F.current[e])||void 0===t?void 0:t.focus()}),200)):(D(0),setTimeout((()=>{var e;return null===(e=F.current[0])||void 0===e?void 0:e.focus()}),200))}),[L,a,C,n,N,D]),t.useEffect((()=>{N&&I&&(a||"success"===o&&B.current&&(D(-1),B.current.focus()))}),[N,I,o,D,a]),t.useEffect((()=>{M(""===T?n:k?z():H())}),[z,H,n,k,T]);const K=t=>r?t?e.jsx(jS,{"aria-hidden":!0}):e.jsx(SS,{"aria-hidden":!0}):t?e.jsx(wS,{"aria-hidden":!0}):e.jsx($S,{}),q=(t,n)=>{const r=P(t),i="string"==typeof r?r:r.title,a="string"==typeof r?void 0:r.secondaryLabel;return e.jsx(pS,{displayType:c,label:i,maxLines:l,selected:n,sublabel:a,truncationType:s,variant:d})},X=()=>{if(!b||b&&"success"===o)return E.map(((t,n)=>{const i=L(t),a=n===C;return e.jsx(xS,Object.assign({"aria-selected":i,"aria-multiselectable":r,"data-testid":"list-item",onClick:()=>W(t,n),onMouseEnter:()=>(e=>{D(e)})(n),ref:e=>F.current[n]=e,role:"option",tabIndex:a?0:-1,$active:a},{children:x?x(t,{selected:i}):e.jsxs(e.Fragment,{children:[K(i),q(t,i)]})}),((e,t)=>`item_${t}__${v?v(e):e}`)(t,n))}))},G=()=>{if(($||k)&&"success"===o)return e.jsx(PS,{ref:B,onChange:V,value:T,placeholder:S,"data-testid":"search-input","aria-label":"Enter text to search",onClear:Y,variant:d})},Z=()=>{if(r&&E.length>0&&!T&&"success"===o)return e.jsx(kS,{children:e.jsx(DS,Object.assign({onClick:g,type:"button",$variant:d},{children:0===i.length?"Select all":"Clear all"}))})},Q=()=>{if(!j&&(T||!$)&&0===E.length&&"success"===o)return e.jsxs(TS,Object.assign({"data-testid":"list-no-results"},{children:[e.jsx(ES,{"data-testid":"no-result-icon",$variant:d}),e.jsx(_S,Object.assign({$variant:d},{children:"No results found."}))]}))},J=()=>{if(b&&"loading"===o){const t="small"===d?16:18;return e.jsxs(TS,Object.assign({"data-testid":"list-loading"},{children:[e.jsx(Ks,{$buttonStyle:"secondary",size:t}),e.jsx(_S,Object.assign({$variant:d},{children:"Loading..."}))]}))}},ee=()=>{if(b&&"fail"===o)return e.jsxs(TS,Object.assign({"data-testid":"list-fail"},{children:[e.jsx(ES,{"data-testid":"load-error-icon",$variant:d}),e.jsx(_S,Object.assign({$variant:d},{children:"Failed to load."}))," ",e.jsx(CS,Object.assign({onClick:U,type:"button",$variant:d},{children:"Try again."}))]}))};return e.jsxs(bS,Object.assign({"data-testid":"dropdown-container",ref:A,$width:f},{children:[e.jsxs(vS,Object.assign({ref:R,"data-testid":"dropdown-list"},{children:[G(),Z(),Q(),J(),ee(),e.jsx(yS,Object.assign({role:"listbox",id:u},{children:X()}))]})),(()=>{if(w)return e.jsx("div",Object.assign({"data-testid":"custom-cta"},{children:w(m,E)}))})()]}))},zS=K.default(Of)`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    padding: ${e=>"small"===e.$variant?"0.4375rem 1rem":"0.6875rem 1rem"};

    ${e=>ys.getTextStyle("small"===e.$variant?"BodySmall":"Body","regular")}

    :disabled {
        cursor: not-allowed;
    }
`,HS=K.default.div`
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
`,WS=t.forwardRef((({children:t,disabled:n,expanded:r,listboxId:i,popupRole:a,readOnly:o,variant:s},l)=>e.jsxs(zS,Object.assign({ref:l,type:"button","aria-expanded":r,"aria-haspopup":a,"data-testid":"selector",disabled:n,"aria-controls":i,$variant:s},{children:[t,!o&&e.jsx(HS,Object.assign({$expanded:r,$variant:s},{children:e.jsx(f.ChevronDownIcon,{"aria-hidden":!0})}))]}))));var VS=Symbol.for("immer-nothing"),YS=Symbol.for("immer-draftable"),US=Symbol.for("immer-state"),KS="production"!==process.env.NODE_ENV?[function(e){return`The plugin for '${e}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e}()\` when initializing your application.`},function(e){return`produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e}'`},"This object has been frozen and should not be mutated",function(e){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+e},"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.","Immer forbids circular references","The first or second argument to `produce` must be a function","The third argument to `produce` must be a function or undefined","First argument to `createDraft` must be a plain object, an array, or an immerable object","First argument to `finishDraft` must be a draft returned by `createDraft`",function(e){return`'current' expects a draft, got: ${e}`},"Object.defineProperty() cannot be used on an Immer draft","Object.setPrototypeOf() cannot be used on an Immer draft","Immer only supports deleting array indices","Immer only supports setting array indices and the 'length' property",function(e){return`'original' expects a draft, got: ${e}`}]:[];function qS(e,...t){if("production"!==process.env.NODE_ENV){const n=KS[e],r="function"==typeof n?n.apply(null,t):n;throw new Error(`[Immer] ${r}`)}throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var XS=Object.getPrototypeOf;function GS(e){return!!e&&!!e[US]}function ZS(e){return!!e&&(JS(e)||Array.isArray(e)||!!e[YS]||!!e.constructor?.[YS]||ik(e)||ak(e))}var QS=Object.prototype.constructor.toString();function JS(e){if(!e||"object"!=typeof e)return!1;const t=XS(e);if(null===t)return!0;const n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return n===Object||"function"==typeof n&&Function.toString.call(n)===QS}function ek(e,t){0===tk(e)?Reflect.ownKeys(e).forEach((n=>{t(n,e[n],e)})):e.forEach(((n,r)=>t(r,n,e)))}function tk(e){const t=e[US];return t?t.type_:Array.isArray(e)?1:ik(e)?2:ak(e)?3:0}function nk(e,t){return 2===tk(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function rk(e,t,n){const r=tk(e);2===r?e.set(t,n):3===r?e.add(n):e[t]=n}function ik(e){return e instanceof Map}function ak(e){return e instanceof Set}function ok(e){return e.copy_||e.base_}function sk(e,t){if(ik(e))return new Map(e);if(ak(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const n=JS(e);if(!0===t||"class_only"===t&&!n){const t=Object.getOwnPropertyDescriptors(e);delete t[US];let n=Reflect.ownKeys(t);for(let r=0;r<n.length;r++){const i=n[r],a=t[i];!1===a.writable&&(a.writable=!0,a.configurable=!0),(a.get||a.set)&&(t[i]={configurable:!0,writable:!0,enumerable:a.enumerable,value:e[i]})}return Object.create(XS(e),t)}{const t=XS(e);if(null!==t&&n)return{...e};const r=Object.create(t);return Object.assign(r,e)}}function lk(e,t=!1){return dk(e)||GS(e)||!ZS(e)||(tk(e)>1&&(e.set=e.add=e.clear=e.delete=ck),Object.freeze(e),t&&Object.entries(e).forEach((([e,t])=>lk(t,!0)))),e}function ck(){qS(2)}function dk(e){return Object.isFrozen(e)}var uk,fk={};function hk(e){const t=fk[e];return t||qS(0,e),t}function pk(){return uk}function gk(e,t){t&&(hk("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function mk(e){bk(e),e.drafts_.forEach(yk),e.drafts_=null}function bk(e){e===uk&&(uk=e.parent_)}function vk(e){return uk={drafts_:[],parent_:uk,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function yk(e){const t=e[US];0===t.type_||1===t.type_?t.revoke_():t.revoked_=!0}function xk(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];return void 0!==e&&e!==n?(n[US].modified_&&(mk(t),qS(4)),ZS(e)&&(e=wk(t,e),t.parent_||jk(t,e)),t.patches_&&hk("Patches").generateReplacementPatches_(n[US].base_,e,t.patches_,t.inversePatches_)):e=wk(t,n,[]),mk(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==VS?e:void 0}function wk(e,t,n){if(dk(t))return t;const r=t[US];if(!r)return ek(t,((i,a)=>$k(e,r,t,i,a,n))),t;if(r.scope_!==e)return t;if(!r.modified_)return jk(e,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const t=r.copy_;let i=t,a=!1;3===r.type_&&(i=new Set(t),t.clear(),a=!0),ek(i,((i,o)=>$k(e,r,t,i,o,n,a))),jk(e,t,!1),n&&e.patches_&&hk("Patches").generatePatches_(r,n,e.patches_,e.inversePatches_)}return r.copy_}function $k(e,t,n,r,i,a,o){if("production"!==process.env.NODE_ENV&&i===n&&qS(5),GS(i)){const o=wk(e,i,a&&t&&3!==t.type_&&!nk(t.assigned_,r)?a.concat(r):void 0);if(rk(n,r,o),!GS(o))return;e.canAutoFreeze_=!1}else o&&n.add(i);if(ZS(i)&&!dk(i)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;wk(e,i),t&&t.scope_.parent_||"symbol"==typeof r||!Object.prototype.propertyIsEnumerable.call(n,r)||jk(e,i)}}function jk(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&lk(t,n)}var Sk={get(e,t){if(t===US)return e;const n=ok(e);if(!nk(n,t))return function(e,t,n){const r=Ck(t,n);return r?"value"in r?r.value:r.get?.call(e.draft_):void 0}(e,n,t);const r=n[t];return e.finalized_||!ZS(r)?r:r===Ok(e.base_,t)?(Tk(e),e.copy_[t]=_k(r,e)):r},has:(e,t)=>t in ok(e),ownKeys:e=>Reflect.ownKeys(ok(e)),set(e,t,n){const r=Ck(ok(e),t);if(r?.set)return r.set.call(e.draft_,n),!0;if(!e.modified_){const r=Ok(ok(e),t),o=r?.[US];if(o&&o.base_===n)return e.copy_[t]=n,e.assigned_[t]=!1,!0;if(((i=n)===(a=r)?0!==i||1/i==1/a:i!=i&&a!=a)&&(void 0!==n||nk(e.base_,t)))return!0;Tk(e),Dk(e)}var i,a;return e.copy_[t]===n&&(void 0!==n||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_[t]=!0),!0},deleteProperty:(e,t)=>(void 0!==Ok(e.base_,t)||t in e.base_?(e.assigned_[t]=!1,Tk(e),Dk(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0),getOwnPropertyDescriptor(e,t){const n=ok(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r?{writable:!0,configurable:1!==e.type_||"length"!==t,enumerable:r.enumerable,value:n[t]}:r},defineProperty(){qS(11)},getPrototypeOf:e=>XS(e.base_),setPrototypeOf(){qS(12)}},kk={};function Ok(e,t){const n=e[US];return(n?ok(n):e)[t]}function Ck(e,t){if(!(t in e))return;let n=XS(e);for(;n;){const e=Object.getOwnPropertyDescriptor(n,t);if(e)return e;n=XS(n)}}function Dk(e){e.modified_||(e.modified_=!0,e.parent_&&Dk(e.parent_))}function Tk(e){e.copy_||(e.copy_=sk(e.base_,e.scope_.immer_.useStrictShallowCopy_))}ek(Sk,((e,t)=>{kk[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),kk.deleteProperty=function(e,t){return"production"!==process.env.NODE_ENV&&isNaN(parseInt(t))&&qS(13),kk.set.call(this,e,t,void 0)},kk.set=function(e,t,n){return"production"!==process.env.NODE_ENV&&"length"!==t&&isNaN(parseInt(t))&&qS(14),Sk.set.call(this,e[0],t,n,e[0])};function _k(e,t){const n=ik(e)?hk("MapSet").proxyMap_(e,t):ak(e)?hk("MapSet").proxySet_(e,t):function(e,t){const n=Array.isArray(e),r={type_:n?1:0,scope_:t?t.scope_:pk(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=r,a=Sk;n&&(i=[r],a=kk);const{revoke:o,proxy:s}=Proxy.revocable(i,a);return r.draft_=s,r.revoke_=o,s}(e,t);return(t?t.scope_:pk()).drafts_.push(n),n}function Ek(e){if(!ZS(e)||dk(e))return e;const t=e[US];let n;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=sk(e,t.scope_.immer_.useStrictShallowCopy_)}else n=sk(e,!0);return ek(n,((e,t)=>{rk(n,e,Ek(t))})),t&&(t.finalized_=!1),n}var Mk=new class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,t,n)=>{if("function"==typeof e&&"function"!=typeof t){const n=t;t=e;const r=this;return function(e=n,...i){return r.produce(e,(e=>t.call(this,e,...i)))}}let r;if("function"!=typeof t&&qS(6),void 0!==n&&"function"!=typeof n&&qS(7),ZS(e)){const i=vk(this),a=_k(e,void 0);let o=!0;try{r=t(a),o=!1}finally{o?mk(i):bk(i)}return gk(i,n),xk(r,i)}if(!e||"object"!=typeof e){if(r=t(e),void 0===r&&(r=e),r===VS&&(r=void 0),this.autoFreeze_&&lk(r,!0),n){const t=[],i=[];hk("Patches").generateReplacementPatches_(e,r,t,i),n(t,i)}return r}qS(1,e)},this.produceWithPatches=(e,t)=>{if("function"==typeof e)return(t,...n)=>this.produceWithPatches(t,(t=>e(t,...n)));let n,r;const i=this.produce(e,t,((e,t)=>{n=e,r=t}));return[i,n,r]},"boolean"==typeof e?.autoFreeze&&this.setAutoFreeze(e.autoFreeze),"boolean"==typeof e?.useStrictShallowCopy&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){ZS(e)||qS(8),GS(e)&&(e=function(e){GS(e)||qS(10,e);return Ek(e)}(e));const t=vk(this),n=_k(e,void 0);return n[US].isManual_=!0,bk(t),n}finishDraft(e,t){const n=e&&e[US];n&&n.isManual_||qS(9);const{scope_:r}=n;return gk(r,t),xk(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){const r=t[n];if(0===r.path.length&&"replace"===r.op){e=r.value;break}}n>-1&&(t=t.slice(n+1));const r=hk("Patches").applyPatches_;return GS(e)?r(e,t):this.produce(e,(e=>r(e,t)))}},Ik=Mk.produce;Mk.produceWithPatches.bind(Mk),Mk.setAutoFreeze.bind(Mk),Mk.setUseStrictShallowCopy.bind(Mk),Mk.applyPatches.bind(Mk),Mk.createDraft.bind(Mk),Mk.finishDraft.bind(Mk);var Nk=yw,Ak=Zw,Rk=Lx,Fk=Ei,Bk=$w,Pk=Wx,Lk=pw,zk=iw,Hk=Object.prototype.hasOwnProperty;var Wk=_i((function(e){if(null==e)return!0;if(Bk(e)&&(Fk(e)||"string"==typeof e||"function"==typeof e.splice||Pk(e)||zk(e)||Rk(e)))return!e.length;var t=Ak(e);if("[object Map]"==t||"[object Set]"==t)return!e.size;if(Lk(e))return!Nk(e).length;for(var n in e)if(Hk.call(e,n))return!1;return!0}));const Vk=(e,t,n)=>Ik(e,(e=>{for(let r=e.length-1;r>=0;r--){const i=e[r];if(i.checked=!!t.find((e=>dj(e,i.keyPath))),i.hasSubItems&&n&&!0!==i.checked){const t=i.subItemIndexes.map((t=>e[t])),n=t.every((e=>!0===e.checked)),r=t.some((e=>!1!==e.checked));n?i.checked=!0:r&&(i.checked="mixed")}}})),Yk=(e,t)=>{const[n,...r]=t;if(Wk(e)||Wk(n))return;const i=e.find((e=>e.key===n));return i&&r.length?Yk(i.subItems,r):i},Uk=K.default.li`
    display: ${e=>e.$visible?"flex":"none"};
`,Kk=K.default.div`
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
`,qk=K.default.div`
    height: 1px;
    width: ${e=>2.125*e.$level}rem;
`,Xk=K.default.div`
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
`,Gk=K.default.div`
    width: 1.625rem;
    height: 1.625rem;
    margin-right: 0.5rem;
`,Zk=K.default.div`
    flex-shrink: 0;
    height: 1.625rem;
    width: ${e=>e.$hasNestedSiblings?"1.625rem":"1rem"};

    display: flex;
    justify-content: center;
`,Qk=K.default(O.TickIcon)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1rem;
    color: ${ts.Primary};
`,Jk=K.default(D.MinusSquareFillIcon)`
    flex-shrink: 0;
    height: 1.625rem;
    width: 1.625rem;
    color: ${ts.Primary};
`,eO=({listItems:n,multiSelect:r,selectedKeyPaths:i,itemsLoadState:a="success",itemTruncationType:o="end",itemMaxLines:s=2,variant:l="default",listboxId:c,width:d,mode:u="default",selectableCategory:f,onSelectItem:h,onSelectAll:p,onRetry:g,enableSearch:m,hideNoResultsDisplay:b,searchPlaceholder:v="Search",onSearch:y})=>{const x=r||f,[w,$]=t.useState(""),j=w.toLowerCase().trim(),[S,k]=t.useState(!1),O=t.useRef(),D=t.useRef(),T=t.useRef([]),_=t.useRef(),E=pc(),[M,I]=t.useState([]),[N,A]=t.useState([]),R=t.useMemo((()=>{let e=0;for(const t of M)t.level>e&&(e=t.level);return e}),[M]),[F,B]=t.useState(0),P=e=>{const t=e.target.value;$(t),""===t?k(!1):t.trim().length>=3&&k(!0),null==y||y()},L=()=>{$(""),k(!1),_.current.focus(),null==y||y()},z=()=>{null==g||g()},H=()=>{if(0===i.length){const e=[],t=[];M.forEach((n=>{n.hasSubItems||(e.push(n.keyPath),t.push(n))})),null==p||p(e,t)}else null==p||p([],[])},W=uc(((e,t)=>((e,t,n,r,i)=>{const a=[],o=(e,s)=>{var l,c;const d=[],u=!!e.find((e=>{var t;return null===(t=e.subItems)||void 0===t?void 0:t.length}));for(let f=0;f<e.length;f++){const h=e[f],p=s?s.level+1:0,g={item:h,index:a.length,indexInParent:f,parentSetSize:e.length,keyPath:s?[...s.keyPath,h.key]:[h.key],parentIndex:s?s.index:-1,parentKeyPath:s?s.keyPath:[],level:p,visible:0===p||i||s.expanded,expanded:i,checked:!1,hasSubItems:!!(null===(l=h.subItems)||void 0===l?void 0:l.length),subItemIndexes:[],hasNestedSiblings:u,matched:!!r&&-1!==h.label.toLowerCase().indexOf(r),hasMatchedSubItems:!1};if(g.checked=!!t.find((e=>dj(e,g.keyPath))),d.push(g),a.push(g),null===(c=h.subItems)||void 0===c?void 0:c.length){const e=o(h.subItems,g);if(n&&!0!==g.checked){const t=e.every((e=>!0===e.checked)),n=e.some((e=>!1!==e.checked));t?g.checked=!0:n&&(g.checked="mixed")}g.hasMatchedSubItems=e.some((e=>e.matched||e.hasMatchedSubItems)),g.subItemIndexes=e.map((e=>e.index))}}return d};return o(e,void 0),a})(e,i,r,j,t))),V=uc((e=>{return i.length?(t=W(e,!1),Ik(t,(e=>{const t=e.filter((e=>!0===e.checked));for(const n of t){let t=n.parentIndex;for(;t>=0;){const n=e[t];n.visible=!0,n.expanded=!0;for(const t of n.subItemIndexes)e[t].visible=!0;t=n.parentIndex}}}))):(e=>Ik(e,(e=>{const t=e.findIndex((e=>e.hasSubItems));if(t<0)return;let n=t,r=0;for(let t=n;t<e.length;t++){const i=e[t].keyPath.length;if(i>r)r=i;else if(i<r)break;n=t,e[t].visible=!0,e[t].expanded=!0}for(let t=0;t<e.length;t++){const r=e[t],i=r.keyPath.slice(0,-1),a=e[n].keyPath.slice(0,i.length);dj(i,a)&&(r.visible=!0)}return e})))(W(e,!1));var t})),Y=uc((e=>{const t=e=>{const n=[];for(const r of e){if(-1!==r.label.toLowerCase().indexOf(j))n.push(r);else if(r.subItems){const e=t(r.subItems);if(e.length>0){n.push(Object.assign(Object.assign({},r),{subItems:e}));continue}}}return n};return t(e)})),U=uc((()=>{I((e=>Vk(e,i,r))),S&&A((e=>Vk(e,i,r)))})),K=(e,t)=>{const n=((e,t,n)=>Ik(e,(e=>{e[t].expanded=n;const r=e[t].keyPath;for(let i=t+1;i<e.length;i++){const t=e[i],a=e[t.parentIndex],o=t.keyPath.slice(0,r.length);if(!dj(r,o))break;t.visible=n&&a.expanded&&a.visible}})))(S?N:M,e,t);B(e),S?A(n):I(n)};fc("keydown",(e=>{const t=S?N:M;switch(e.code){case"ArrowDown":{e.preventDefault();const n=((e,t,n)=>{for(let r=n;r<e.length;r++)if(t(e[r]))return r;return-1})(t,(e=>e.visible),F+1);n>=0&&(B(n),T.current[n].focus());break}case"ArrowUp":{e.preventDefault();const n=((e,t,n)=>{for(let r=n;r>=0;r--)if(t(e[r]))return r;return-1})(t,(e=>e.visible),F-1);n>=0?(B(n),T.current[n].focus()):0===F&&_.current&&(_.current.focus(),B(-1));break}case"ArrowRight":e.preventDefault(),K(F,!0);break;case"ArrowLeft":e.preventDefault(),K(F,!1);break;case"Space":if(document.activeElement===T.current[F]){e.preventDefault();const n=t[F];if(n.hasSubItems&&!x)return;null==h||h(n)}}})),t.useEffect((()=>{let e;"default"===u?e=V(n):"expand"===u?e=W(n,!0):"collapse"===u&&(e=W(n,!1)),I(e)}),[W,V,n,u]),t.useEffect((()=>{U()}),[r,i,U]),t.useEffect((()=>{if(S&&w.trim().length>=3){const e=Y(n),t=(e=>Ik(e,(e=>{for(const t of e)if(t.matched&&(t.visible=!0),t.hasMatchedSubItems){t.visible=!0,t.expanded=!0;for(const n of t.subItemIndexes)e[n].visible=!0}})))(W(e,!1));A(t)}}),[Y,W,n,S,w]),t.useEffect((()=>{E||(_.current?(B(-1),setTimeout((()=>{var e;return null===(e=_.current)||void 0===e?void 0:e.focus()}),200)):T.current[F]?setTimeout((()=>{var e;return null===(e=T.current[F])||void 0===e?void 0:e.focus()}),200):(B(0),setTimeout((()=>{var e;return null===(e=T.current[0])||void 0===e?void 0:e.focus()}),200)))}),[F,E,B]);const q=()=>{if(m&&"success"===a)return e.jsx(PS,{ref:_,onChange:P,value:w,placeholder:v,"data-testid":"search-input","aria-label":"Enter text to search",onClear:L,variant:l})},X=()=>{if(r&&!S&&M.length>0&&"success"===a)return e.jsx(kS,{children:e.jsx(DS,Object.assign({onClick:H,type:"button",$variant:l},{children:0===i.length?"Select all":"Clear all"}))})},G=()=>{if(!b&&S&&0===N.length&&"success"===a)return e.jsxs(TS,Object.assign({"data-testid":"list-no-results"},{children:[e.jsx(ES,{$variant:l}),e.jsx(_S,Object.assign({$variant:l},{children:"No results found."}))]}))},Z=()=>{if(g&&"loading"===a){const t="small"===l?16:18;return e.jsxs(TS,Object.assign({"data-testid":"list-loading"},{children:[e.jsx(Ks,{$buttonStyle:"secondary",size:t}),e.jsx(_S,Object.assign({$variant:l},{children:"Loading..."}))]}))}},Q=()=>{if(g&&"fail"===a)return e.jsxs(TS,Object.assign({"data-testid":"list-fail"},{children:[e.jsx(ES,{"data-testid":"load-error-icon",$variant:l}),e.jsx(_S,Object.assign({$variant:l},{children:"Failed to load."}))," ",e.jsx(CS,Object.assign({onClick:z,type:"button",$variant:l},{children:"Try again."}))]}))},J=t=>{if(r)switch(t.checked){case"mixed":return e.jsx(Jk,{"aria-hidden":!0});case!0:return e.jsx(jS,{"aria-hidden":!0});default:return e.jsx(SS,{"aria-hidden":!0})}if(!t.hasSubItems)return e.jsx(Zk,Object.assign({$hasNestedSiblings:t.hasNestedSiblings||0===t.level},{children:t.checked&&e.jsx(Qk,{"aria-hidden":!0})}))},ee=()=>(S?N:M).map(((t,n)=>{const{item:i,level:a,visible:l,expanded:c,keyPath:d,checked:u,hasSubItems:f,indexInParent:p,parentSetSize:g}=t,m=F===n,b=f&&!x;return e.jsxs(Uk,Object.assign({$visible:l},{children:[R>0&&e.jsx(qk,{$level:a}),R>0&&!f&&r&&e.jsx(Gk,{}),e.jsxs(Kk,Object.assign({"aria-checked":u,"aria-selected":!!u,"aria-expanded":f?c:void 0,"aria-level":a+1,"aria-posinset":p+1,"aria-setsize":g,"data-testid":"list-item",onClick:e=>{var t;e.stopPropagation(),b?K(n,!c):(B(t=n),null==h||h((S?N:M)[t]))},onMouseEnter:()=>{B(n)},ref:e=>T.current[n]=e,role:"treeitem",tabIndex:m?0:-1,$active:m,$toggleable:b},{children:[f&&e.jsx(Xk,Object.assign({"data-testid":"toggle-category-button",onClick:e=>{e.stopPropagation(),K(n,!c)},$expanded:c},{children:e.jsx(C.CaretRightIcon,{})})),J(t),e.jsx(pS,{bold:f,searchTerm:S?j:void 0,label:i.label,selected:!!u,truncationType:o,maxLines:s})]}))]}),`[${d.join("---")}]`)}));return e.jsx(bS,Object.assign({"data-testid":"dropdown-container",ref:O,$width:d},{children:e.jsxs(vS,Object.assign({"data-testid":"nested-dropdown-list"},{children:[q(),X(),G(),Z(),Q(),e.jsx("div",Object.assign({"aria-multiselectable":r,id:c,ref:D,role:"tree"},{children:ee()}))]}))}))},tO=({selectedOptions:n,placeholder:r="Select",options:i,disabled:a,error:o,className:s,"data-testid":l,id:c,enableSearch:d=!1,searchFunction:u,searchPlaceholder:f,valueExtractor:h,listExtractor:p,onSelectOptions:g,onShowOptions:m,onHideOptions:b,onRetry:v,optionsLoadState:y="success",optionTruncationType:x="end",renderListItem:w,hideNoResultsDisplay:$,renderCustomCallToAction:j,onBlur:S,variant:k="default",readOnly:O,alignment:C,dropdownZIndex:D})=>{const[T,_]=t.useState(n||[]),[E,M]=t.useState(!1),[I,N]=t.useState(!1),[A]=t.useState((()=>cc.generate())),R=t.useRef(),F=t.useRef();t.useEffect((()=>{_(n||[])}),[n]);const B=()=>{T&&T.length>0?(_([]),V([])):(_(i),V(i))},P=(e,t)=>{const n=[...T],r=sj(T,(e=>(h?h(e):e)===t));r>-1?n.splice(r,1):n.push(e),_(n),V(n)},L=()=>{E&&(M(!1),W(!1))},z=()=>{I||E||N(!0)},H=e=>{!I||E||R.current.contains(e.relatedTarget)||(N(!1),null==S||S())},W=e=>{!e&&b&&b(),e&&m&&m()},V=e=>{g&&g(e)};return e.jsx(mS,{children:e.jsx(vf,{enabled:!O&&!a,isOpen:E,renderElement:()=>e.jsx(jf,Object.assign({className:s,"data-testid":l,id:c,ref:R,tabIndex:-1,onFocus:z,onBlur:H,$focused:I,$disabled:a,$readOnly:O,$error:o},{children:e.jsx(WS,Object.assign({ref:F,disabled:a,expanded:E,listboxId:A,popupRole:"listbox",readOnly:O,variant:k},{children:e.jsx(df,Object.assign({$disabled:a},{children:T&&0!==T.length?e.jsx(uf,Object.assign({$variant:k},{children:i&&T.length===i.length?"All selected":`${T.length} selected`})):e.jsx(ff,Object.assign({truncateType:x,$variant:k},{children:r}))}))}))})),renderDropdown:({elementWidth:t})=>e.jsx(LS,{listboxId:A,listItems:i,onSelectItem:P,onDismiss:L,valueExtractor:h,listExtractor:p,enableSearch:d,searchFunction:u,searchPlaceholder:f,multiSelect:!0,selectedItems:T,onSelectAll:B,onRetry:v,itemsLoadState:y,itemTruncationType:x,renderListItem:w,hideNoResultsDisplay:$,renderCustomCallToAction:j,variant:k,width:t}),onOpen:()=>{M(!0),W(!0),N(!0)},onClose:e=>{M(!1),W(!1),"click"!==e&&(N(!1),null==S||S())},onDismiss:()=>{F.current.focus(),M(!1),W(!1)},clickToToggle:!0,offset:8,alignment:C,fitAvailableHeight:!0,customZIndex:D})})},nO=(e,t)=>{const[n,...r]=t;if(Wk(e)||!n)return;const i=e.find((e=>e.key===n));return i?r.length?nO(i.subItems,r):i:void 0},rO=(e,t)=>{const n=[];for(const r of e)r.subItems?n.push(...rO(r.subItems,[...t,r.key])):n.push({value:r.value,label:r.label,keyPath:[...t,r.key]});return n},iO=({placeholder:n="Select",options:r,disabled:i,error:a,className:o,"data-testid":s,id:l,selectedKeyPaths:c,mode:d,valueToStringFunction:u,enableSearch:f,searchPlaceholder:h,hideNoResultsDisplay:p,readOnly:g,onSearch:m,onSelectOptions:b,onShowOptions:v,onHideOptions:y,onRetry:x,onBlur:w,optionsLoadState:$="success",optionTruncationType:j="end",variant:S,alignment:k,dropdownZIndex:O})=>{const C=r,[D,T]=t.useState(c||[]),[_,E]=t.useState([]),[M,I]=t.useState(!1),[N,A]=t.useState(!1),[R]=t.useState((()=>cc.generate())),F=t.useRef(),B=t.useRef(),P=t.useRef();t.useEffect((()=>{const e=c||[],t=((e,t)=>{const n=[];for(let r=0;r<t.length;r++){const i=t[r],a=nO(e,i);a&&n.push({value:a.value,label:a.label,keyPath:i})}return n})(C,e);T(e),E(t)}),[c,C]);const L=(e,t)=>{const n=t.map((e=>({keyPath:e.keyPath,label:e.item.label,value:e.item.value})));T(e),E(n),K(e,n)},z=e=>{const t=q(e),n=t.map((e=>e.keyPath));E(t),T(n),K(n,t)},H=()=>{N||M||A(!0)},W=e=>{!N||M||F.current.contains(e.relatedTarget)||(A(!1),null==w||w())},V=()=>{const{label:e,value:t}=_[0];return _.length>1?`${_.length} selected`:u?u(t)||t.toString():e},Y=e=>{if("middle"===j){let t=0;return P&&P.current&&(t=P.current.getBoundingClientRect().width),dc.truncateOneLine(e,t,120,6)}return e},U=e=>{!e&&y&&y(),e&&v&&v()},K=(e,t)=>{if(b){const n=t.map((e=>e.value));b(e,n)}},q=e=>{if(!0===e.checked)return _.filter((t=>{const n=t.keyPath.slice(0,e.keyPath.length);return!dj(e.keyPath,n)}));{const t=[..._],n=e.hasSubItems?((e,t)=>{const n=nO(e,t);return n&&n.subItems?rO(n.subItems,t):[]})(C,e.keyPath):[{value:e.item.value,label:e.item.label,keyPath:e.keyPath}];return n.forEach((e=>{_.find((t=>dj(t.keyPath,e.keyPath)))||t.push(e)})),t}};return e.jsx(vf,{enabled:!g&&!i,isOpen:M,renderElement:()=>e.jsx(jf,Object.assign({className:o,"data-testid":s,id:l,ref:F,tabIndex:-1,onFocus:H,onBlur:W,$focused:N,$disabled:i,$readOnly:g,$error:a},{children:e.jsx(WS,Object.assign({ref:B,disabled:i,expanded:M,listboxId:R,popupRole:"tree",readOnly:g,variant:S},{children:e.jsx(df,Object.assign({ref:P,$disabled:i},{children:Wk(_)?e.jsx(ff,Object.assign({truncateType:j},{children:n})):e.jsx(uf,Object.assign({truncateType:j},{children:Y(V())}))}))}))})),renderDropdown:({elementWidth:t})=>e.jsx(eO,{listboxId:R,listItems:C,multiSelect:!0,selectedKeyPaths:D,itemsLoadState:$,itemTruncationType:j,enableSearch:f,searchPlaceholder:h,hideNoResultsDisplay:p,onSelectItem:z,onSelectAll:L,onRetry:x,onSearch:m,variant:S,mode:d,width:t}),onOpen:()=>{I(!0),U(!0),A(!0)},onClose:e=>{I(!1),U(!1),"click"!==e&&(A(!1),null==w||w())},onDismiss:()=>{B.current.focus(),I(!1),U(!1)},clickToToggle:!0,offset:8,alignment:k,fitAvailableHeight:!0,customZIndex:O})},aO=({placeholder:n="Select",options:r,disabled:i,error:a,className:o,"data-testid":s,id:l,selectedKeyPath:c,mode:d,valueToStringFunction:u,enableSearch:f,searchPlaceholder:h,selectableCategory:p,hideNoResultsDisplay:g,readOnly:m,onBlur:b,onSearch:v,onSelectOption:y,onShowOptions:x,onHideOptions:w,onRetry:$,optionsLoadState:j="success",optionTruncationType:S="end",variant:k,alignment:O,dropdownZIndex:C})=>{const D=r,[T,_]=t.useState(c?[c]:[]),[E,M]=t.useState(),[I,N]=t.useState(!1),[A,R]=t.useState(!1),[F]=t.useState((()=>cc.generate())),B=t.useRef(),P=t.useRef(),L=t.useRef();t.useEffect((()=>{_(c?[c]:[]);const e=Yk(D,c||[]);M(null!=e?e:void 0)}),[c,D]);const z=e=>{var t;const{keyPath:n,item:{label:r,value:i}}=e;_([n]),M({label:r,value:i}),N(!1),U(!1),null===(t=P.current)||void 0===t||t.focus(),null==y||y(n,i)},H=()=>{A||I||R(!0)},W=e=>{!A||I||B.current.contains(e.relatedTarget)||(R(!1),null==b||b())},V=()=>{const{label:e,value:t}=E;return u?u(t)||t.toString():e},Y=e=>{if("middle"===S){let t=0;return L&&L.current&&(t=L.current.getBoundingClientRect().width),dc.truncateOneLine(e,t,120,6)}return e},U=e=>{!e&&w&&w(),e&&x&&x()};return e.jsx(vf,{enabled:!m&&!i,isOpen:I,renderElement:()=>e.jsx(jf,Object.assign({className:o,"data-testid":s,id:l,ref:B,tabIndex:-1,onFocus:H,onBlur:W,$focused:A,$disabled:i,$readOnly:m,$error:a},{children:e.jsx(WS,Object.assign({ref:P,disabled:i,expanded:I,listboxId:F,popupRole:"tree",readOnly:m,variant:k},{children:e.jsx(df,Object.assign({ref:L,$disabled:i},{children:Wk(E)?e.jsx(ff,Object.assign({truncateType:S},{children:n})):e.jsx(uf,Object.assign({truncateType:S},{children:Y(V())}))}))}))})),renderDropdown:({elementWidth:t})=>e.jsx(eO,{listboxId:F,listItems:D,selectedKeyPaths:T,selectableCategory:p,itemsLoadState:j,itemTruncationType:S,enableSearch:f,searchPlaceholder:h,hideNoResultsDisplay:g,onSelectItem:z,onRetry:$,onSearch:v,variant:k,mode:d,width:t}),onOpen:()=>{N(!0),U(!0),R(!0)},onClose:e=>{N(!1),U(!1),"click"!==e&&(R(!1),null==b||b())},onDismiss:()=>{P.current.focus(),N(!1),U(!1)},clickToToggle:!0,offset:8,alignment:O,fitAvailableHeight:!0,customZIndex:C})};var oO=function(e,t,n,r){var i=-1,a=null==e?0:e.length;for(r&&a&&(n=e[++i]);++i<a;)n=t(n,e[i],i,e);return n};var sO=function(e){return function(t,n,r){for(var i=-1,a=Object(t),o=r(t),s=o.length;s--;){var l=o[e?s:++i];if(!1===n(a[l],l,a))break}return t}}(),lO=Ow;var cO=$w;var dO=function(e,t){return function(n,r){if(null==n)return n;if(!cO(n))return e(n,r);for(var i=n.length,a=t?i:-1,o=Object(n);(t?a--:++a<i)&&!1!==r(o[a],a,o););return n}}((function(e,t){return e&&sO(e,t,lO)}));var uO=oO,fO=dO,hO=q$,pO=function(e,t,n,r,i){return i(e,(function(e,i,a){n=r?(r=!1,e):t(n,e,i,a)})),n},gO=Ei;var mO=_i((function(e,t,n){var r=gO(e)?uO:pO,i=arguments.length<3;return r(e,hO(t),n,i,fO)}));const bO=[["Afghanistan",["asia"],"af","93"],["Albania",["europe"],"al","355"],["Algeria",["africa","north-africa"],"dz","213"],["Andorra",["europe"],"ad","376"],["Angola",["africa"],"ao","244"],["Antigua and Barbuda",["america","carribean"],"ag","1268"],["Argentina",["america","south-america"],"ar","54","(..) ........"],["Armenia",["asia","ex-ussr"],"am","374",".. ......"],["Aruba",["america","carribean"],"aw","297"],["Australia",["oceania"],"au","61","(..) .... ...."],["Austria",["europe","eu-union"],"at","43"],["Azerbaijan",["asia","ex-ussr"],"az","994","(..) ... .. .."],["Bahamas",["america","carribean"],"bs","1242"],["Bahrain",["middle-east"],"bh","973"],["Bangladesh",["asia"],"bd","880"],["Barbados",["america","carribean"],"bb","1246"],["Belarus",["europe","ex-ussr"],"by","375","(..) ... .. .."],["Belgium",["europe","eu-union"],"be","32","... .. .. .."],["Belize",["america","central-america"],"bz","501"],["Benin",["africa"],"bj","229"],["Bhutan",["asia"],"bt","975"],["Bolivia",["america","south-america"],"bo","591"],["Bosnia and Herzegovina",["europe","ex-yugos"],"ba","387"],["Botswana",["africa"],"bw","267"],["Brazil",["america","south-america"],"br","55","(..) ........."],["British Indian Ocean Territory",["asia"],"io","246"],["Brunei",["asia"],"bn","673"],["Bulgaria",["europe","eu-union"],"bg","359"],["Burkina Faso",["africa"],"bf","226"],["Burundi",["africa"],"bi","257"],["Cambodia",["asia"],"kh","855"],["Cameroon",["africa"],"cm","237"],["Canada",["america","north-america"],"ca","1","(...) ... ...."],["Cape Verde",["africa"],"cv","238"],["Caribbean Netherlands",["america","carribean"],"bq","599",""],["Central African Republic",["africa"],"cf","236"],["Chad",["africa"],"td","235"],["Chile",["america","south-america"],"cl","56"],["China",["asia"],"cn","86",".. ........."],["Colombia",["america","south-america"],"co","57","... ... ...."],["Comoros",["africa"],"km","269"],["Congo",["africa"],"cd","243"],["Congo",["africa"],"cg","242"],["Costa Rica",["america","central-america"],"cr","506",".... ...."],["Côte d’Ivoire",["africa"],"ci","225",".. .. .. .."],["Croatia",["europe","eu-union","ex-yugos"],"hr","385"],["Cuba",["america","carribean"],"cu","53"],["Curaçao",["america","carribean"],"cw","599",""],["Cyprus",["europe","eu-union"],"cy","357",".. ......"],["Czech Republic",["europe","eu-union"],"cz","420","... ... ..."],["Denmark",["europe","eu-union","baltic"],"dk","45",".. .. .. .."],["Djibouti",["africa"],"dj","253"],["Dominica",["america","carribean"],"dm","1767"],["Dominican Republic",["america","carribean"],"do","1",""],["Ecuador",["america","south-america"],"ec","593"],["Egypt",["africa","north-africa"],"eg","20"],["El Salvador",["america","central-america"],"sv","503",".... ...."],["Equatorial Guinea",["africa"],"gq","240"],["Eritrea",["africa"],"er","291"],["Estonia",["europe","eu-union","ex-ussr","baltic"],"ee","372",".... ......"],["Ethiopia",["africa"],"et","251"],["Fiji",["oceania"],"fj","679"],["Finland",["europe","eu-union","baltic"],"fi","358",".. ... .. .."],["France",["europe","eu-union"],"fr","33",". .. .. .. .."],["French Guiana",["america","south-america"],"gf","594"],["French Polynesia",["oceania"],"pf","689"],["Gabon",["africa"],"ga","241"],["Gambia",["africa"],"gm","220"],["Georgia",["asia","ex-ussr"],"ge","995"],["Germany",["europe","eu-union","baltic"],"de","49",".... ........"],["Ghana",["africa"],"gh","233"],["Greece",["europe","eu-union"],"gr","30"],["Grenada",["america","carribean"],"gd","1473"],["Guadeloupe",["america","carribean"],"gp","590","",0],["Guam",["oceania"],"gu","1671"],["Guatemala",["america","central-america"],"gt","502",".... ...."],["Guinea",["africa"],"gn","224"],["Guinea-Bissau",["africa"],"gw","245"],["Guyana",["america","south-america"],"gy","592"],["Haiti",["america","carribean"],"ht","509",".... ...."],["Honduras",["america","central-america"],"hn","504"],["Hong Kong",["asia"],"hk","852",".... ...."],["Hungary",["europe","eu-union"],"hu","36"],["Iceland",["europe"],"is","354","... ...."],["India",["asia"],"in","91","..... ....."],["Indonesia",["asia"],"id","62"],["Iran",["middle-east"],"ir","98","... ... ...."],["Iraq",["middle-east"],"iq","964"],["Ireland",["europe","eu-union"],"ie","353",".. ......."],["Israel",["middle-east"],"il","972","... ... ...."],["Italy",["europe","eu-union"],"it","39","... ......."],["Jamaica",["america","carribean"],"jm","1876"],["Japan",["asia"],"jp","81",".. .... ...."],["Jordan",["middle-east"],"jo","962"],["Kazakhstan",["asia","ex-ussr"],"kz","7","... ... .. .."],["Kenya",["africa"],"ke","254"],["Kiribati",["oceania"],"ki","686"],["Kosovo",["europe","ex-yugos"],"xk","383"],["Kuwait",["middle-east"],"kw","965"],["Kyrgyzstan",["asia","ex-ussr"],"kg","996","... ... ..."],["Laos",["asia"],"la","856"],["Latvia",["europe","eu-union","ex-ussr","baltic"],"lv","371",".. ... ..."],["Lebanon",["middle-east"],"lb","961"],["Lesotho",["africa"],"ls","266"],["Liberia",["africa"],"lr","231"],["Libya",["africa","north-africa"],"ly","218"],["Liechtenstein",["europe"],"li","423"],["Lithuania",["europe","eu-union","ex-ussr","baltic"],"lt","370"],["Luxembourg",["europe","eu-union"],"lu","352"],["Macau",["asia"],"mo","853"],["Macedonia",["europe","ex-yugos"],"mk","389"],["Madagascar",["africa"],"mg","261"],["Malawi",["africa"],"mw","265"],["Malaysia",["asia"],"my","60",".. .... ...."],["Maldives",["asia"],"mv","960"],["Mali",["africa"],"ml","223"],["Malta",["europe","eu-union"],"mt","356"],["Marshall Islands",["oceania"],"mh","692"],["Martinique",["america","carribean"],"mq","596"],["Mauritania",["africa"],"mr","222"],["Mauritius",["africa"],"mu","230"],["Mexico",["america","central-america"],"mx","52","... ... ...."],["Micronesia",["oceania"],"fm","691"],["Moldova",["europe"],"md","373","(..) .. .. .."],["Monaco",["europe"],"mc","377"],["Mongolia",["asia"],"mn","976"],["Montenegro",["europe","ex-yugos"],"me","382"],["Morocco",["africa","north-africa"],"ma","212"],["Mozambique",["africa"],"mz","258"],["Myanmar",["asia"],"mm","95"],["Namibia",["africa"],"na","264"],["Nauru",["africa"],"nr","674"],["Nepal",["asia"],"np","977"],["Netherlands",["europe","eu-union"],"nl","31",".. ........"],["New Caledonia",["oceania"],"nc","687"],["New Zealand",["oceania"],"nz","64","... ... ...."],["Nicaragua",["america","central-america"],"ni","505"],["Niger",["africa"],"ne","227"],["Nigeria",["africa"],"ng","234"],["North Korea",["asia"],"kp","850"],["Norway",["europe","baltic"],"no","47","... .. ..."],["Oman",["middle-east"],"om","968"],["Pakistan",["asia"],"pk","92","... ......."],["Palau",["oceania"],"pw","680"],["Palestine",["middle-east"],"ps","970"],["Panama",["america","central-america"],"pa","507"],["Papua New Guinea",["oceania"],"pg","675"],["Paraguay",["america","south-america"],"py","595"],["Peru",["america","south-america"],"pe","51"],["Philippines",["asia"],"ph","63",".... ......."],["Poland",["europe","eu-union","baltic"],"pl","48","... ... ..."],["Portugal",["europe","eu-union"],"pt","351"],["Puerto Rico",["america","carribean"],"pr","1",""],["Qatar",["middle-east"],"qa","974"],["Réunion",["africa"],"re","262"],["Romania",["europe","eu-union"],"ro","40"],["Russia",["europe","asia","ex-ussr","baltic"],"ru","7","(...) ... .. .."],["Rwanda",["africa"],"rw","250"],["Saint Kitts and Nevis",["america","carribean"],"kn","1869"],["Saint Lucia",["america","carribean"],"lc","1758"],["Saint Vincent and the Grenadines",["america","carribean"],"vc","1784"],["Samoa",["oceania"],"ws","685"],["San Marino",["europe"],"sm","378"],["São Tomé and Príncipe",["africa"],"st","239"],["Saudi Arabia",["middle-east"],"sa","966"],["Senegal",["africa"],"sn","221"],["Serbia",["europe","ex-yugos"],"rs","381"],["Seychelles",["africa"],"sc","248"],["Sierra Leone",["africa"],"sl","232"],["Singapore",["asia"],"sg","65",".... ...."],["Slovakia",["europe","eu-union"],"sk","421"],["Slovenia",["europe","eu-union","ex-yugos"],"si","386"],["Solomon Islands",["oceania"],"sb","677"],["Somalia",["africa"],"so","252"],["South Africa",["africa"],"za","27"],["South Korea",["asia"],"kr","82","... .... ...."],["South Sudan",["africa","north-africa"],"ss","211"],["Spain",["europe","eu-union"],"es","34","... ... ..."],["Sri Lanka",["asia"],"lk","94"],["Sudan",["africa"],"sd","249"],["Suriname",["america","south-america"],"sr","597"],["Swaziland",["africa"],"sz","268"],["Sweden",["europe","eu-union","baltic"],"se","46","(...) ... ..."],["Switzerland",["europe"],"ch","41",".. ... .. .."],["Syria",["middle-east"],"sy","963"],["Taiwan",["asia"],"tw","886"],["Tajikistan",["asia","ex-ussr"],"tj","992"],["Tanzania",["africa"],"tz","255"],["Thailand",["asia"],"th","66"],["Timor-Leste",["asia"],"tl","670"],["Togo",["africa"],"tg","228"],["Tonga",["oceania"],"to","676"],["Trinidad and Tobago",["america","carribean"],"tt","1868"],["Tunisia",["africa","north-africa"],"tn","216"],["Turkey",["europe"],"tr","90","... ... .. .."],["Turkmenistan",["asia","ex-ussr"],"tm","993"],["Tuvalu",["asia"],"tv","688"],["Uganda",["africa"],"ug","256"],["Ukraine",["europe","ex-ussr"],"ua","380","(..) ... .. .."],["United Arab Emirates",["middle-east"],"ae","971"],["United Kingdom",["europe","eu-union"],"gb","44",".... ......"],["United States",["america","north-america"],"us","1","(...) ... ...."],["Uruguay",["america","south-america"],"uy","598"],["Uzbekistan",["asia","ex-ussr"],"uz","998",".. ... .. .."],["Vanuatu",["oceania"],"vu","678"],["Vatican City",["europe"],"va","39",".. .... ...."],["Venezuela",["america","south-america"],"ve","58"],["Vietnam",["asia"],"vn","84"],["Yemen",["middle-east"],"ye","967"],["Zambia",["africa"],"zm","260"],["Zimbabwe",["africa"],"zw","263"]],vO=(e,t,n,r)=>n?e+"".padEnd(t.length,".")+" "+n:e+"".padEnd(t.length,".")+" "+r;var yO;!function(e){e.getCountries=()=>[].concat(...bO.map((e=>({name:e[0],regions:e[1],iso2:e[2],countryCode:e[3],format:vO("+",e[3],e[4],"... ... ... ... ..")})))),e.formatNumber=(e="",t)=>{if(!t)return e;const n=e.replace(/[\s()]+/g,""),{format:r}=t,i=r.split(" ");i.shift();const a=i.join(" ");return mO(a,((e,t)=>{if(0===e.remainingText.length)return e;if("."!==t)return{formattedText:e.formattedText+t,remainingText:e.remainingText};const[n,...r]=e.remainingText;return{formattedText:e.formattedText+n,remainingText:r}}),{formattedText:"",remainingText:n}).formattedText}}(yO||(yO={}));const xO=n=>{var{onChange:r,value:i,allowClear:a,onClear:o,onBlur:s,error:l,fixedCountry:c=!1,optionPlaceholder:d="Select",optionSearchPlaceholder:u,enableSearch:f,onHideOptions:h,onShowOptions:p,placeholder:g,autoComplete:m}=n,b=X(n,["onChange","value","allowClear","onClear","onBlur","error","fixedCountry","optionPlaceholder","optionSearchPlaceholder","enableSearch","onHideOptions","onShowOptions","placeholder","autoComplete"]);const[v]=t.useState(yO.getCountries()),[y,x]=t.useState(void 0),[w,$]=t.useState(""),j=t.useRef(),S=gc({ref:j,formatter:e=>yO.formatNumber(e.replace(/[^0-9]/g,""),y)});t.useEffect((()=>{const e=v.filter((e=>e.countryCode===wO(null==i?void 0:i.countryCode)))[0];x(e),$(yO.formatNumber(null==i?void 0:i.number,e))}),[i]);const k=e=>{C(w,e),r&&O(w,e)},O=(e,t)=>{const n=yO.formatNumber(e,t);r({number:n.replace(/[\s()]+/g,""),countryCode:t&&$O(t.countryCode)})},C=(e,t)=>{$(yO.formatNumber(e,t)),x(t)};return e.jsx(Yj,Object.assign({ref:j,value:w,onChange:()=>{const{nextValue:e,updateCaretPosition:t}=S();t(),C(e,y),r&&O(e,y)},allowClear:a&&!!w,onClear:()=>{o?o():$("")},onBlur:s,error:l,placeholder:g,addon:c?{type:"label",attributes:{value:$O(null==y?void 0:y.countryCode)}}:{type:"list",attributes:{placeholder:d,options:v,selectedOption:y,enableSearch:f,searchPlaceholder:u,valueExtractor:e=>`+${e.countryCode}`,listExtractor:e=>({title:e.name,secondaryLabel:$O(e.countryCode)}),onSelectOption:k,onHideOptions:h,onShowOptions:p}},inputMode:"numeric",autoComplete:m},b))},wO=e=>e?e.replace("+",""):"",$O=e=>e?e.includes("+")?e:`+${e}`:"",jO=({className:n,"data-testid":r,selectedOption:i,minimumCharacters:a=3,fetchOptions:o,placeholder:s="Enter here...",readOnly:l=!1,disabled:c=!1,error:d,valueExtractor:u,listExtractor:f,displayValueExtractor:h=(e=>e.toString()),onSelectOption:p})=>{const g=i&&h(i),[m,b]=t.useState(g||""),[v,y]=t.useState(g||""),[x,w]=t.useState([]),[$,j]=t.useState(!0),[S,k]=t.useState(!1),[O,C]=t.useState(!!i),[D,T]=t.useState(i),_=t.useRef(o),E=e=>G(void 0,void 0,void 0,(function*(){k(!1),j(!0);try{const t=yield _.current(e);y(e),w(t),j(!1)}catch(e){k(!0)}})),M=t.useCallback(eu((e=>E(e)),500,{leading:!1,trailing:!0}),[]);t.useEffect((()=>{_.current=o}),[o]),t.useEffect((()=>{m&&m.length>=a&&m!==v?M(m):M.cancel(),""===m&&D&&(p&&p(void 0,void 0),A(),T(void 0)),i&&m!==h(i)&&C(!1)}),[m,i]),t.useEffect((()=>{b(i?h(i):""),A(i),T(i)}),[i]);const I=e=>{b(e.target.value)},N=(e,t)=>{p&&p(e,t)},A=e=>{y(e?h(e):""),C(!!e),w([]),j(!0)},R=()=>{b(""),p&&p(void 0,void 0),A()},F=()=>{O||D?(A(D),b(h(D)),p&&p(D,P(D)),T(D)):R()},B=()=>m&&m.length>=a&&!O,P=e=>u?u(e):e,L=()=>e.jsx(Vy,{type:"text",value:m,onChange:I,placeholder:s,readOnly:l,disabled:c,allowClear:!0,onClear:R,styleType:"no-border",onBlur:m.length<a?F:void 0});return e.jsxs(hf,Object.assign({className:n,show:B(),error:d&&!B(),disabled:c,readOnly:l,testId:r,onBlur:F},{children:[l?e.jsx(e.Fragment,{children:L()}):e.jsx(of,{children:L()}),!l&&B()&&e.jsx(cf,{}),e.jsx(Nj,{listItems:x,onSelectItem:N,valueExtractor:u,listExtractor:f,itemsLoadState:S?"fail":$?"loading":"success",visible:B(),disableItemFocus:!0,onRetry:()=>E(m),itemTruncationType:"end",itemMaxLines:1,labelDisplayType:"next-line"})]}))},SO=K.default.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
`,kO=K.default(zy)`
    position: absolute;
    right: 0;
    padding-left: 0.5rem;
    margin-right: 0;
`,OO=K.default(af)`
    padding-right: 2.75rem;
`,CO=n=>{var{selectedOptions:r,placeholders:i={from:"Select",to:"Select"},options:a,disabled:o,className:s,readOnly:l,error:c,"data-testid":d,id:u,enableSearch:f=!1,searchFunction:h,searchPlaceholder:p,valueExtractor:g,valueToStringFunction:m,listExtractor:b,displayValueExtractor:v,onSelectOption:y,listStyleWidth:x,onShowOptions:w,onHideOptions:$,onRetry:j,optionsLoadState:S={from:"success",to:"success"},optionTruncationType:k="middle",renderCustomSelectedOption:O,renderListItem:C,renderCustomCallToAction:D}=n,T=X(n,["selectedOptions","placeholders","options","disabled","className","readOnly","error","data-testid","id","enableSearch","searchFunction","searchPlaceholder","valueExtractor","valueToStringFunction","listExtractor","displayValueExtractor","onSelectOption","listStyleWidth","onShowOptions","onHideOptions","onRetry","optionsLoadState","optionTruncationType","renderCustomSelectedOption","renderListItem","renderCustomCallToAction"]);const[_,E]=t.useState(),[M,I]=t.useState(),N=t.useRef(),A={from:t.useRef(),to:t.useRef()},[R,F]=t.useState("none");t.useEffect((()=>{E(null==r?void 0:r.from),I(null==r?void 0:r.to)}),[r]);const B=e=>t=>{t.stopPropagation(),t.preventDefault(),o||l||F("from"===e?"from":"to"===e&&_?"to":"from")},P=e=>{const t="from"===e?_:M;return v?v(t):g?g(t):null==t?void 0:t.toString()},L=(e,t)=>{if("middle"===k){let n=0;return A[e]&&A[e].current&&(n=A[e].current.getBoundingClientRect().width),dc.truncateOneLine((e=>"string"==typeof e?e:m(e)||e.toString())(t),n,120,8)}return t},z=e=>{!e&&$&&$(),e&&w&&w()},H=t=>{const n="from"===t?_:M;return n?O?O(n):e.jsx(uf,Object.assign({truncateType:k},{children:L(t,P(t))})):e.jsx(ff,Object.assign({truncateType:k},{children:L(t,i[t])}))},W=t=>e.jsx(df,Object.assign({onClick:B(t),ref:A[t],$disabled:o},{children:H(t)}));return e.jsxs(hf,Object.assign({show:"none"!==R,"data-testid":T["data-testid"],error:c&&!("none"!==R),disabled:o,readOnly:l,testId:d,onBlur:()=>{z(!1),F("none"),_&&M||(I(void 0),E(void 0))},className:s},{children:[e.jsxs(SO,{children:[e.jsx(OO,Object.assign({type:"button","data-testid":u||"selector",disabled:o,ref:N,onClick:B()},T,{children:e.jsxs(Kf,Object.assign({currentActive:(()=>{switch(R){case"from":return"start";case"to":return"end";case"none":return R}})()},{children:[W("from"),W("to")]}))})),"none"===R&&_&&M&&!l&&!o&&e.jsx(kO,Object.assign({onClick:e=>{e.stopPropagation(),E(void 0),I(void 0),y&&y({from:void 0,to:void 0},void 0)},type:"button","aria-label":"Clear"},{children:e.jsx(Hy,{"aria-hidden":!0})}))]}),"none"!==R&&e.jsx(cf,{}),(()=>{if("none"===R)return null;const t=a[R];if(t&&t.length>0){const n="from"===R?_:M;return e.jsx(Nj,{listItems:t,onSelectItem:(e,t)=>{return n=e,r=t,"from"===(i=R)?E(n):I(n),z(!1),N&&N.current.focus(),y&&y({[i]:n},r),void("from"===i?(I(void 0),F("to"),z(!0)):F("none"));var n,r,i},onDismiss:()=>(F("none"),z(!1),N&&N.current.focus(),void(_&&M||(I(void 0),E(void 0)))),valueExtractor:g,listExtractor:b,listStyleWidth:x,visible:!0,enableSearch:f,searchPlaceholder:p,searchFunction:h,"data-testid":`${R}-dropdown-list`,selectedItems:n?[n]:[],onRetry:j,itemsLoadState:S[R],itemTruncationType:k,renderListItem:C,renderCustomCallToAction:D})}return null})()]}))},DO=({selectedOption:n,placeholder:r="Select",options:i,disabled:a,error:o,className:s,"data-testid":l,id:c,enableSearch:d=!1,searchFunction:u,searchPlaceholder:f,valueExtractor:h,valueToStringFunction:p,listExtractor:g,displayValueExtractor:m,onSelectOption:b,onShowOptions:v,onHideOptions:y,onRetry:x,optionsLoadState:w="success",optionTruncationType:$="end",renderCustomSelectedOption:j,renderListItem:S,hideNoResultsDisplay:k,renderCustomCallToAction:O,onBlur:C,variant:D="default",readOnly:T,alignment:_,dropdownZIndex:E})=>{const[M,I]=t.useState(n),[N,A]=t.useState(!1),[R,F]=t.useState(!1),[B]=t.useState((()=>cc.generate())),P=t.useRef(),L=t.useRef(),z=t.useRef();t.useEffect((()=>{I(n)}),[n]);const H=(e,t)=>{L.current.focus(),I(e),A(!1),K(!1),null==b||b(e,t)},W=()=>{N&&(A(!1),K(!1))},V=()=>{R||N||F(!0)},Y=e=>{!R||N||P.current.contains(e.relatedTarget)||(F(!1),null==C||C())},U=e=>{if("middle"===$){let t=0;return z&&z.current&&(t=z.current.getBoundingClientRect().width),dc.truncateOneLine((e=>"string"==typeof e?e:p(e)||e.toString())(e),t,120,8)}return e},K=e=>{e?null==v||v():null==y||y()};return e.jsx(mS,{children:e.jsx(vf,{enabled:!T&&!a,isOpen:N,renderElement:()=>e.jsx(jf,Object.assign({className:s,"data-testid":l,id:c,ref:P,tabIndex:-1,onFocus:V,onBlur:Y,$focused:R,$disabled:a,$readOnly:T,$error:o},{children:e.jsx(WS,Object.assign({ref:L,disabled:a,expanded:N,listboxId:B,popupRole:"listbox",readOnly:T,variant:D},{children:e.jsx(df,Object.assign({ref:z,$disabled:a},{children:M?j?j(M):e.jsx(uf,Object.assign({truncateType:$,$variant:D},{children:U(m?m(M):h?h(M):M.toString())})):e.jsx(ff,Object.assign({truncateType:$,$variant:D},{children:r}))}))}))})),renderDropdown:({elementWidth:t})=>e.jsx(LS,{listboxId:B,listItems:i,onSelectItem:H,onDismiss:W,valueExtractor:h,listExtractor:g,enableSearch:d,searchPlaceholder:f,searchFunction:u,selectedItems:M?[M]:[],onRetry:x,itemsLoadState:w,itemTruncationType:$,renderListItem:S,hideNoResultsDisplay:k,renderCustomCallToAction:O,variant:D,width:t}),onOpen:()=>{A(!0),K(!0),F(!0)},onClose:e=>{A(!1),K(!1),"click"!==e&&(F(!1),null==C||C())},onDismiss:()=>{L.current.focus(),A(!1),K(!1)},clickToToggle:!0,offset:8,alignment:_,fitAvailableHeight:!0,customZIndex:E})})},TO=K.default.div`
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
`,_O=K.default.div`
    display: flex;
    align-items: baseline;
`,EO=K.default.div`
    margin: 0 0.5rem;
`,MO=K.default.div`
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
`,IO=K.default(MO)`
    color: ${ts.Neutral[3]};
`,NO=n=>{var{alignment:r="left",className:i,disabled:a,dropdownZIndex:o,error:s,histogramSlider:l,id:c,onBlur:d,onChange:u,onChangeEnd:f,optionTruncationType:h="end",placeholder:p="Select",rangeLabelPrefix:g,rangeLabelSuffix:m,readOnly:b,renderRangeLabel:v,value:y}=n,x=X(n,["alignment","className","disabled","dropdownZIndex","error","histogramSlider","id","onBlur","onChange","onChangeEnd","optionTruncationType","placeholder","rangeLabelPrefix","rangeLabelSuffix","readOnly","renderRangeLabel","value"]);const{interval:w,bins:$=[],renderEmptyView:j,ariaLabels:S}=l,[k,O]=t.useState(H()),[C,D]=t.useState(!1),[T,_]=t.useState(!1),[E]=t.useState((()=>cc.generate())),M=$.map((e=>e.minValue)),I=Math.min(...M),N=t.useRef(),A=t.useRef(),R=t.useRef(),F=x["data-testid"]||"select-histogram";t.useEffect((()=>{y!==k&&O(H())}),[y]);const B=e=>{O(e),null==u||u(e)},P=e=>{O(e),null==f||f(e)},L=()=>{T||C||_(!0)},z=e=>{!T||C||N.current.contains(e.relatedTarget)||(_(!1),null==d||d())};function H(){return null!=y?y:[I,I+w]}const W=t=>v?v(t):e.jsxs(exports.Text.Body,{children:[g,t,m]});return e.jsx(mS,{children:e.jsx(vf,{enabled:!b&&!a,isOpen:C,renderElement:()=>e.jsx(jf,Object.assign({className:i,"data-testid":F,id:c,ref:N,tabIndex:-1,onFocus:L,onBlur:z,$focused:T,$disabled:a,$readOnly:b,$error:s},{children:e.jsx(WS,Object.assign({ref:A,disabled:a,expanded:C,listboxId:E,popupRole:"dialog",readOnly:b,variant:"default"},{children:e.jsx(df,Object.assign({ref:R,$disabled:a},{children:M&&0!==M.length?e.jsxs(_O,{children:[W(k[0]),e.jsx(EO,{children:"-"}),W(k[1])]}):e.jsx(IO,Object.assign({truncateType:h,$variant:"default"},{children:p}))}))}))})),renderDropdown:({elementWidth:t})=>e.jsx(TO,Object.assign({style:{width:t}},{children:e.jsx(Py,{interval:w,value:k,bins:$,onChange:B,onChangeEnd:P,showRangeLabels:!1,renderEmptyView:j,ariaLabels:S})})),onOpen:()=>{D(!0)},onClose:()=>{D(!1)},onDismiss:()=>{A.current.focus(),D(!1)},clickToToggle:!0,offset:8,alignment:r,fitAvailableHeight:!0,customZIndex:o})})},AO=n=>{var{value:r,ariaLabel:i,onChange:a,onChangeEnd:o}=n,s=X(n,["value","ariaLabel","onChange","onChangeEnd"]);const[l,c]=t.useState(d());t.useEffect((()=>{r!==l[0]&&c(d())}),[r]);function d(){return null!=r?[r]:[0]}return e.jsx(Iy,Object.assign({},s,{value:l,numOfThumbs:1,onChange:e=>{const[t]=e;c([t]),null==a||a(t)},onChangeEnd:e=>{const[t]=e;c([t]),null==o||o(t)},ariaLabels:i?[i]:void 0}))},RO=K.default(exports.Text.H6)`
    text-align: right;
    color: ${ts.Neutral[3]};

    ${e=>{if(e.disabled)return i.css`
                color: ${ts.Neutral[4](e)};
            `}}
`,FO=({value:n,maxLength:r,disabled:i,renderCustomCounter:a})=>{const[o,s]=t.useState("");t.useEffect((()=>{s(l(`${n||""}`))}),[n,r]);const l=e=>{if(a)return a(r,e.toString().length);{const t=r-e.toString().length;return 1===t?`${t} character left`:`${t.toLocaleString()} characters left`}};return e.jsx(e.Fragment,{children:Y.default.isValidElement(o)?o:e.jsx(RO,Object.assign({"data-testid":"counter-label",weight:"semibold",disabled:i},{children:o}))})},BO=K.default.div`
    display: flex;
    flex-direction: column;
`,PO=K.default.textarea`
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
        box-shadow: ${Ys.InputBoxShadow};
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
                    box-shadow: ${Ys.InputErrorBoxShadow};
                }
            `:void 0}
`,LO=Y.default.forwardRef(((n,r)=>{var{value:i,disabled:a,error:o,rows:s=5,prefix:l,transformValue:c,onChange:d,maxLength:u}=n,f=X(n,["value","disabled","error","rows","prefix","transformValue","onChange","maxLength"]);const[h,p]=t.useState(i);t.useEffect((()=>{p(i)}),[i]);return e.jsx(PO,Object.assign({ref:r,disabled:a,value:l?l+(null!=h?h:""):h,onChange:e=>{let t=e.target.value;if(l){t.startsWith(l)||(t=l+t.trimStart()),t.length<l.length&&(t=l);if((e.target.selectionStart||0)<l.length)return void e.preventDefault();const n=t.slice(l.length),r=c?c(n):n;if(p(r),e.target.value=l+r,d){const t=Object.assign(Object.assign({},e),{target:Object.assign(Object.assign({},e.target),{value:r})});d(t)}}else{const n=c?c(null!=t?t:""):t;p(n),e.target.value=n,d&&d(e)}},onKeyDown:e=>{if(!l)return;const{selectionStart:t}=e.currentTarget;"Backspace"===e.key&&t<=l.length&&e.preventDefault(),"ArrowLeft"===e.key&&t<=l.length&&e.preventDefault(),"Home"===e.key&&(e.preventDefault(),requestAnimationFrame((()=>{e.currentTarget.setSelectionRange(l.length,l.length)})))},error:o,rows:s,maxLength:l?l.length+u:u},f))})),zO=Y.default.forwardRef(((n,r)=>{var{value:i,disabled:a,rows:o=5,onChange:s,transformValue:l,prefix:c,maxLength:d,renderCustomCounter:u}=n,f=X(n,["value","disabled","rows","onChange","transformValue","prefix","maxLength","renderCustomCounter"]);const[h,p]=t.useState(i);t.useEffect((()=>{p(i)}),[i]);return e.jsxs(BO,{children:[e.jsx(LO,Object.assign({ref:r,disabled:a,value:h,rows:o||5,onChange:e=>{const t=e.target.value;p(t),s&&s(e)},prefix:c,transformValue:l,maxLength:d},f)),d&&e.jsx(FO,{disabled:a,value:h,maxLength:d,renderCustomCounter:u})]})})),HO=K.default.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 0.25rem;
`,WO=K.default.div`
    display: flex;
    flex: 1;
    margin-right: 0.75rem;
`,VO=K.default(ny)`
    margin-top: 0;
`,YO=Y.default.forwardRef(((n,r)=>{const{label:i,value:a,errorMessage:o,id:s="form-textarea","data-error-testid":l,"data-testid":c,onChange:d,layoutType:u,mobileCols:f,tabletCols:h,desktopCols:p,transformValue:g,prefix:m=""}=n,b=X(n,["label","value","errorMessage","id","data-error-testid","data-testid","onChange","layoutType","mobileCols","tabletCols","desktopCols","transformValue","prefix"]),[v,y]=t.useState(a);t.useEffect((()=>{y(a)}),[a]);return e.jsxs(gy,Object.assign({id:s,label:i,disabled:b.disabled,layoutType:u,mobileCols:f,tabletCols:h,desktopCols:p},{children:[e.jsx(LO,Object.assign({id:`${s}-base`,"data-testid":c||s,value:v,error:!!o,onChange:e=>{const t=e.target.value;y(t),d&&d(e)},ref:r,prefix:m,transformValue:g},b)),o||b.maxLength?e.jsxs(HO,{children:[o&&e.jsx(WO,{children:e.jsx(VO,Object.assign({weight:"semibold","data-testid":l||(s?`${s}-error-message`:"error-message")},{children:o}))}),b.maxLength&&e.jsx(FO,{disabled:b.disabled,value:v,maxLength:b.maxLength,renderCustomCounter:b.renderCustomCounter})]}):e.jsx(e.Fragment,{})]}))})),UO=K.default.div`
    position: relative;
`,KO=K.default(Sf)`
    height: 3rem;
    gap: 0.5rem;
`,qO=K.default(kf)`
    display: block;
    width: 100%;
    flex: 1;
`,XO=K.default.div`
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
`,GO=({type:t,active:n=!1,disabled:r,className:i})=>{let a;switch(t){case"checkbox":a=n?e.jsx(k.SquareTickFillIcon,{}):e.jsx(S.SquareIcon,{});break;case"radio":a=n?e.jsx(_.CircleDotIcon,{}):e.jsx(T.CircleIcon,{});break;case"tick":a=e.jsx(O.TickIcon,{});break;case"cross":a=e.jsx(m.CrossIcon,{});break;default:a=null}return e.jsx(XO,Object.assign({className:i,$active:n,disabled:r},{children:a}))},ZO=e=>`\n\tmargin-bottom: ${e||0}rem;\n`,QO=K.default.ol`
    ${e=>ZO(e.bottomMargin)}
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
`,JO=K.default.ul`
    ${e=>ZO(e.bottomMargin)}
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
`,eC={Ul:t=>{var{size:n="Body",children:r}=t,i=X(t,["size","children"]);return e.jsx(JO,Object.assign({size:n},i,{children:r}))},Ol:t=>{var{size:n="Body",children:r}=t,i=X(t,["size","children"]);return e.jsx(QO,Object.assign({size:n},i,{children:r}))}},tC=K.default.div`
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
`,nC=K.default.input`
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
`,rC=K.default.div`
    display: flex;
    flex-direction: column;
    overflow-wrap: anywhere;
    width: 100%;
    overflow: hidden;
`,iC=K.default.label`
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
`,aC=K.default.div`
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
`,oC=K.default.div`
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
`,sC=K.default.div`
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
    padding: ${e=>e.$addPadding?"0.6875rem 0rem 0.6875rem 1rem":"0.6875rem 1rem"};
`,lC=K.default.button`
    color: ${e=>e.$disabled?ts.Neutral[3]:ts.Validation.Red.Icon};
    white-space: nowrap;
    ${ys.getTextStyle("H4","semibold")}
    height: fit-content;
    padding: 0.6875rem 1rem 0.6875rem 0.5rem;
    border: none;
    background: none;

    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
`,cC=K.default.button`
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
`,dC=K.default.div`
    width: 100%;
    color: ${e=>e.$disabled?ts.Neutral[3]:ts.Primary};
    border: none;
    background: none;
    cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
    padding: 0.6875rem 1rem 0.5rem 1rem;
`,uC=K.default(ll)`
    width: 100%;
    user-select: none;
`,fC=K.default.div`
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
`,hC=K.default(exports.Text.BodySmall)`
    color: ${e=>e.$disabled?ts.Neutral[3]:ts.Validation.Red.Text};
`,pC=K.default(eC.Ul)`
    li {
        color: ${e=>e.$disabled?ts.Neutral[3]:ts.Validation.Red.Text};
    }
`,gC=({type:n="checkbox",indicator:i,checked:a,styleType:o="default",children:s,childrenMaxLines:l,subLabel:c,disabled:d,error:u,name:h,id:p,className:g,compositeSection:m,removable:b,onRemove:v,"data-testid":y,onChange:x,useContentWidth:w})=>{const{collapsible:$=!0,errors:j,children:S,initialExpanded:k}=m||{},[O,C]=t.useState(a),[D,T]=t.useState(k),_=t.useMemo((()=>{const e=Array.isArray(j)&&(null==j?void 0:j.length)>0,t=!Array.isArray(j)&&!!j;return e||t}),[j]),[E]=t.useState(cc.generate()),M=p?`${p}`:`tg-${E}`,I=t.useRef();t.useEffect((()=>{C(a)}),[a]),t.useEffect((()=>{O&&T(null==k||k)}),[O]);const N=e=>{if(!d){if(x)return void x(e);switch(n){case"checkbox":C((e=>!e));break;case"radio":case"yes":case"no":O||C(!0)}}},A=()=>{d||T(!D)},R=()=>{d||!v||v()},F=()=>{let t;switch(n){case"yes":t="tick";break;case"no":t="cross";break;case"checkbox":case"radio":t=n}return e.jsx(GO,{type:t,active:O,disabled:d})},B=()=>{if(!c)return null;let t;return t="function"==typeof c?c():c,e.jsx(aC,Object.assign({"data-id":"toggle-sublabel",$disabled:d,$selected:O},{children:t}))},P=()=>{const t=!D&&!_;return $&&e.jsxs(cC,Object.assign({$paddingTopRequired:t,disabled:d,onClick:A,"data-testid":D?"collapse-button":"expand-button"},{children:[D?"Show less":"Show more",D?e.jsx(r.ChevronUpIcon,{"aria-hidden":!0}):e.jsx(f.ChevronDownIcon,{"aria-hidden":!0})]}))},L=t=>e.jsxs(e.Fragment,{children:[e.jsx(hC,Object.assign({weight:"semibold",$disabled:d},{children:"Error"})),e.jsx(pC,Object.assign({$disabled:d},{children:null==t?void 0:t.map(((t,n)=>e.jsx("li",Object.assign({id:`${M}-error-list-item-${n}`},{children:e.jsx(hC,Object.assign({weight:"semibold",$disabled:d},{children:t}))}),n)))}))]});return e.jsxs(tC,Object.assign({$selected:O,$disabled:d,className:g,$styleType:o,$error:u,$indicator:i,$useContentWidth:w,id:p,"data-testid":y},{children:[e.jsxs(oC,Object.assign({id:`${M}-header-container`,$disabled:d,$error:u,$selected:O,$indicator:i,$styleType:o},{children:[e.jsxs(sC,Object.assign({$addPadding:b},{children:[e.jsx(nC,{ref:I,name:h,id:`${M}-input`,type:"checkbox"===n?"checkbox":"radio","data-testid":"toggle-input",disabled:d,onChange:N,checked:O}),i&&F(),e.jsxs(rC,{children:[e.jsx(iC,Object.assign({htmlFor:`${M}-input`,$selected:O,$indicator:i,$disabled:d,"data-testid":`${M}-toggle-label`,$maxLines:l},{children:s})),c&&B()]})]})),b&&e.jsx(lC,Object.assign({type:"button",$disabled:d,onClick:R,id:`${M}-remove-button`},{children:"Remove"}))]})),S&&e.jsxs("div",{children:[(!$||D)&&e.jsx(fC,Object.assign({"data-id":"toggle-composite-children",$isFinalItem:!$,$disabled:d},{children:S})),$&&!D&&_&&e.jsx(dC,Object.assign({$disabled:d,onClick:A,id:`${M}-error-alert`},{children:e.jsx(uC,Object.assign({type:d?"description":"error",className:g,showIcon:!0},{children:Array.isArray(j)?L(j):j}))})),P()]})]}))},mC=K.default(Di.div)`
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
`,bC=K.default.div`
    position: relative;
    width: 100%;
    padding: 0.5rem 1.25rem 1.5rem 1.25rem;
    display: flex;
    flex-direction: column;
`,vC=K.default.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${is.MaxWidth.mobileS} {
        flex-direction: column;
        width: 100%;
    }
`,yC=K.default.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;
    gap: 0.5rem 1rem;

    ${is.MaxWidth.mobileS} {
        flex-direction: column-reverse; // FIXME: this breaks tab focus
        margin-top: 2rem;
    }
`,xC=K.default.div`
    display: flex;
    align-items: center;
    margin-right: 2rem;

    ${is.MaxWidth.mobileS} {
        margin-right: 0;
        width: 100%;
    }
`,wC=K.default.div`
    display: flex;
    gap: 0.5rem;

    ${is.MaxWidth.tablet} {
        flex-direction: column;
    }

    ${is.MaxWidth.mobileS} {
        flex-direction: row;
        width: 100%;
    }
`,$C=K.default.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${is.MaxWidth.mobileS} {
        width: 6rem;
    }
`,jC=K.default(ss)`
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
`,SC=K.default(exports.Text.Body)`
    width: 1.5rem;
    margin: 0 0.25rem;
    text-align: center;

    ${is.MaxWidth.tablet} {
        margin: 0;
    }

    ${is.MaxWidth.mobileS} {
        margin: 0 0.25rem;
    }
`,kC=K.default(kf)`
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
`,OC=K.default(gC)`
    min-width: 5rem;
    flex: 1;
`,CC=K.default(qs.Small)`
    width: 7rem;

    ${is.MaxWidth.mobileL} {
        flex: 1;
    }

    ${is.MaxWidth.mobileS} {
        width: 100%;
    }
`;var DC,TC,_C;!function(e){e.HOUR_UP="hour-up",e.HOUR_DOWN="hour-down",e.MINUTE_UP="minute-up",e.MINUTE_DOWN="minute-down"}(DC||(DC={})),function(e){e.HOUR="hour",e.MINUTE="minute"}(TC||(TC={})),function(e){e.AM="am",e.PM="pm"}(_C||(_C={}));const EC=({id:n,value:i,show:a,format:o,onChange:s,onCancel:l})=>{const c=vu.getTimeValues(o,i),[d,u]=t.useState(c.hour),[h,p]=t.useState(c.minute),[g,m]=t.useState(c.period),b=t.useRef(),v=t.useRef(),y=qe();t.useEffect((()=>{if(a&&b.current&&b.current.focus(),a){const{hour:e,minute:t,period:n}=vu.getTimeValues(o,i);u(e),p(t),m(n)}}),[a,i,o]),t.useEffect((()=>{const e=b.current,t=v.current;return e&&e.addEventListener("keydown",x),t&&t.addEventListener("keydown",x),()=>{e&&e.removeEventListener("keydown",x),t&&t.removeEventListener("keydown",x)}}),[]);const x=e=>{["Digit0","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Tab","Backspace","Delete","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)||["Backspace","0","1","2","3","4","5","6","7","8","9"].includes(e.key)||e.preventDefault()},w=t.useCallback((e=>{switch(e.currentTarget.name){case DC.MINUTE_UP:p(vu.updateMinutes(h,"add"));break;case DC.MINUTE_DOWN:p(vu.updateMinutes(h,"minus"));break;case DC.HOUR_UP:u(vu.updateHours(d,"add"));break;case DC.HOUR_DOWN:u(vu.updateHours(d,"minus"))}}),[d,h]),$=e=>{e.target.select()},j=e=>{const t=e.target.value;switch(e.target.name){case TC.HOUR:t.length<=2&&u(t);break;case TC.MINUTE:t.length<=2&&p(t)}},S=e=>{const t=parseInt(e.target.value);if(!isNaN(t))switch(e.target.name){case TC.HOUR:{const n=t>23||t<0?c.hour:vu.convertHourTo12HourFormat(e.target.value);u(n);break}case TC.MINUTE:{const n=t>59||t<0?c.minute:e.target.value;p(dc.padValue(n));break}}},k=e=>{switch(e.target.name){case _C.AM:m(bu.AM);break;case _C.PM:m(bu.PM)}},O=e=>n?`${n}-${e}`:e,C=di({height:a?y.height+32:0});return e.jsx(mC,Object.assign({"data-testid":"animated-dropdown-wrapper",style:C},{children:e.jsxs(bC,Object.assign({ref:y.ref,"data-testid":O("timepicker-dropdown"),inert:a?void 0:""},{children:[e.jsxs(vC,{children:[e.jsxs(xC,{children:[e.jsxs($C,{children:[e.jsx(jC,Object.assign({"aria-label":"increase hour",name:DC.HOUR_UP,tabIndex:-1,onClick:w,"data-testid":O("hour-increment-button")},{children:e.jsx(r.ChevronUpIcon,{})})),e.jsx(kC,{"aria-label":"hour",type:"number",name:TC.HOUR,id:"hour",maxLength:2,pattern:"[0-9]{2}",ref:b,value:d,onFocus:$,onChange:j,onBlur:S,min:1,max:12,placeholder:"HH","data-testid":O("hour-input")}),e.jsx(jC,Object.assign({"aria-label":"decrease hour",name:DC.HOUR_DOWN,tabIndex:-1,onClick:w,"data-testid":O("hour-decrement-button")},{children:e.jsx(f.ChevronDownIcon,{})}))]}),e.jsx(SC,{children:":"}),e.jsxs($C,{children:[e.jsx(jC,Object.assign({"aria-label":"increase minute",name:DC.MINUTE_UP,tabIndex:-1,onClick:w,"data-testid":O("minute-increment-button")},{children:e.jsx(r.ChevronUpIcon,{})})),e.jsx(kC,{"aria-label":"minute",type:"number",name:TC.MINUTE,id:"minute",maxLength:2,pattern:"[0-9]{2}",ref:v,value:h,onChange:j,onBlur:S,onFocus:$,min:0,max:59,placeholder:"MM","data-testid":O("minute-input")}),e.jsx(jC,Object.assign({"aria-label":"decrease minute",name:DC.MINUTE_DOWN,tabIndex:-1,onClick:w,"data-testid":O("minute-decrement-button")},{children:e.jsx(f.ChevronDownIcon,{})}))]})]}),e.jsxs(wC,{children:[e.jsx(OC,Object.assign({checked:g===bu.AM,name:_C.AM,type:"radio",onChange:k,"data-testid":O("am-toggle"),"aria-label":"AM"},{children:"AM"})),e.jsx(OC,Object.assign({checked:g===bu.PM,name:_C.PM,type:"radio",onChange:k,"data-testid":O("pm-toggle"),"aria-label":"PM"},{children:"PM"}))]})]}),e.jsxs(yC,{children:[e.jsx(CC,Object.assign({"aria-label":"close selector",type:"button",styleType:"secondary",onClick:l,"data-testid":O("cancel-button")},{children:"Cancel"})),e.jsx(CC,Object.assign({"aria-label":"confirm selection",type:"button",onClick:()=>{let e;e="24hr"===o?vu.convertTo24HourFormat({hour:d,minute:h,period:g}):`${d}:${h}${g}`,s(e)},disabled:""===d||""===h,"data-testid":O("confirm-button")},{children:"Done"}))]})]}))}))},MC=n=>{var{id:r,disabled:i=!1,error:a,value:o,format:s="24hr",readOnly:l,onChange:c,onFocus:d,onBlur:u}=n,f=X(n,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur"]);const[h,p]=t.useState(!1),[g,m]=t.useState(!1),[b,v]=t.useState(""),[y,x]=t.useState(""),w=t.useRef();t.useEffect((()=>{o&&(v(o.start),x(o.end))}),[]),fc("mousedown",(function(e){i||k(e)}),"document"),fc("keyup",(function(e){if("Tab"===e.code)k(e)}),"document");const $=()=>{S()},j=()=>{h||g||d&&d()},S=()=>{p(!1),m(!1),u&&u()},k=e=>{w&&!w.current.contains(e.target)&&(g||h)&&S()};return e.jsx(UO,Object.assign({ref:w,id:r},f,{children:e.jsxs(KO,Object.assign({$disabled:i,$error:a,$readOnly:l},{children:[e.jsxs(Kf,Object.assign({error:a,currentActive:h?"start":g?"end":"none"},{children:[e.jsx(qO,{onFocus:()=>{i||l||h||(m(!1),p(!0),j())},readOnly:!0,placeholder:"From",value:vu.formatDisplayValue(b,s),disabled:i,"data-testid":f["data-testid"]?`${f["data-testid"]}-timepicker-selector`:"timepicker-selector"}),e.jsx(qO,{onFocus:()=>{i||l||g||(p(!1),m(!0),j())},readOnly:!0,placeholder:"To",value:vu.formatDisplayValue(y,s),disabled:i,"data-testid":f["data-testid"]?`${f["data-testid"]}-timepicker-selector`:"timepicker-selector"})]})),e.jsx(EC,{id:r,show:h,value:b,format:s,onCancel:$,onChange:e=>{p(!1),m(!0),v(e);c&&c({start:e,end:y})}}),e.jsx(EC,{id:r,show:g,value:y,format:s,onCancel:$,onChange:e=>{m(!1),x(e);c&&c({start:b,end:e}),""==b?p(!0):u&&u()}})]}))}))},IC=K.default(Sf)`
    height: 3rem;
    gap: 0.5rem;
    padding-right: 2.75rem;
`,NC=n=>{var{id:r,disabled:i=!1,error:a,value:o,format:s="12hr",readOnly:l,onChange:c,onFocus:d,onBlur:u,alignment:f="left",dropdownZIndex:h,startLimit:p,endLimit:g,interval:m=15}=n,b=X(n,["id","disabled","error","value","format","readOnly","onChange","onFocus","onBlur","alignment","dropdownZIndex","startLimit","endLimit","interval"]);const[v]=t.useState((()=>cc.generate())),[y,x]=t.useState(null),[w,$]=t.useState(!1),[j,S]=t.useState(""),[k,O]=t.useState(""),[C,D]=t.useState(""),[T,_]=t.useState(""),[E,M]=t.useState(""),I=t.useRef(),N=t.useRef(),A=t.useRef(),R=t.useMemo((()=>vu.generateTimings(m,s,p,g)),[m,s,p,g]),F=t.useMemo((()=>{if(""===T)return R;const e=vu.findClosestFlooredTime(T,R);return R.slice(R.indexOf(e))}),[R,T]),B=t.useCallback((e=>vu.parseInput(e,s)),[s]);t.useEffect((()=>{var e,t;if(o){const n=null!==(e=B(o.start))&&void 0!==e?e:"",r=null!==(t=B(o.end))&&void 0!==t?t:"";O(n),D(r),_(n),M(r)}}),[o,B]),t.useEffect((()=>{if(a)return void $(!1);const e=B(k),t=B(C);if(void 0===e)S("Invalid start time");else if(void 0===t)S("Invalid end time");else{if(!(""!==e&&""!==t&&vu.to24Hour(t)<vu.to24Hour(e)))return S(""),void(document.activeElement!==N.current&&document.activeElement!==A.current||$(!0));S("End time must be after start time")}$(!1)}),[k,C,B,a]);const P=e=>{i||l||(y||w||null==d||d(),x(e),$(!0))},L=e=>{i||l||(x(e),$(!0),("start"===e?N:A).current.select())};function z(e){switch(e.code){case"Enter":"start"===y?H(k):"end"===y&&(w&&W(C),A.current.blur());break;case"Tab":V(k,C,{})}}const H=e=>{V(e,C,{goToNextInput:!0})},W=e=>{V(k,e,{triggerOnBlur:!0})},V=(e,t,{goToNextInput:n,triggerOnBlur:r})=>{var i,a;const o=null!==(i=B(e))&&void 0!==i?i:T,s=null!==(a=B(t))&&void 0!==a?a:E;O(o),D(s);o===T&&s===E||null==c||c({start:o,end:s}),n&&void 0!==B(e)&&(x("end"),A.current.select()),r&&(x(null),$(!1),null==u||u()),_(o),M(s)},Y=e=>{e.stopPropagation(),O(""),D(""),_(""),M("");null==c||c({start:"",end:""}),x(null),$(!1)},U=e=>{I.current&&!I.current.contains(e.relatedTarget)&&y&&!w&&V(k,C,{triggerOnBlur:!0})},K=()=>{if(!l&&!i&&((null==k?void 0:k.length)>0||(null==C?void 0:C.length)>0))return e.jsx(kO,Object.assign({onClick:Y,type:"button","aria-label":"Clear"},{children:e.jsx(Hy,{"aria-hidden":!0})}))};return e.jsxs(UO,Object.assign({id:r},b,{children:[e.jsx(mS,{children:e.jsx(vf,{enabled:!l&&!i,isOpen:w,renderElement:()=>e.jsxs(IC,Object.assign({ref:I,$disabled:i,$error:a||!!j,$readOnly:l,onBlur:U},{children:[e.jsxs(Kf,Object.assign({error:a||!!j,currentActive:null===y?"none":y},{children:[e.jsx(qO,{ref:N,onFocus:()=>P("start"),placeholder:"start"===y?"hh:mm":"From",onChange:e=>O(e.target.value),value:k,disabled:i,readOnly:l,"data-testid":b["data-testid"]?`${b["data-testid"]}-timepicker-selector`:"timepicker-selector",onClick:()=>L("start"),onKeyDown:z,autoComplete:"off","aria-label":"Start time input",type:"text",role:"combobox","aria-expanded":w,"aria-controls":v,"aria-autocomplete":"list"}),e.jsx(qO,{ref:A,onFocus:()=>P("end"),placeholder:"end"===y?"hh:mm":"To",onChange:e=>D(e.target.value),value:C,disabled:i,readOnly:l,"data-testid":b["data-testid"]?`${b["data-testid"]}-timepicker-selector`:"timepicker-selector",onClick:()=>L("end"),onKeyDown:z,autoComplete:"off","aria-label":"End time input",type:"text",role:"combobox","aria-expanded":w,"aria-controls":v,"aria-autocomplete":"list"})]})),K()]})),renderDropdown:()=>{if(w)return"start"===y?e.jsx(LS,{listItems:R,onSelectItem:H,selectedItems:[k],disableItemFocus:!0,topScrollItem:vu.findClosestFlooredTime(B(k),R),listboxId:v}):e.jsx(LS,{listItems:F,onSelectItem:W,selectedItems:[C],disableItemFocus:!0,topScrollItem:vu.findClosestFlooredTime(B(C),F),listboxId:v})},onClose:e=>{"outside-press"===e?(x(null),$(!1),null==u||u()):V(k,C,{triggerOnBlur:!0})},onDismiss:()=>{("start"===y?N:A).current.focus(),$(!1)},offset:8,alignment:f,fitAvailableHeight:!0,customZIndex:h})}),!a&&j&&e.jsx(ny,Object.assign({id:r?`${r}-error-message`:"error-message",weight:"semibold",tabIndex:0,"data-testid":r?`${r}-error-message`:"error-message"},{children:j}))]}))},AC=t=>{var{variant:n="dial"}=t,r=X(t,["variant"]);return"dial"===n?e.jsx(MC,Object.assign({},r)):"combobox"===n?e.jsx(NC,Object.assign({},r)):void 0};K.default.div`
    position: relative;
`;const RC=K.default(kf)`
    height: calc(3rem - 2px); // exclude top and bottom borders
`,FC=n=>{var{id:r,disabled:i=!1,readOnly:a=!1,error:o,value:s,placeholder:l,format:c="24hr",onChange:d,onFocus:u,onBlur:f}=n,h=X(n,["id","disabled","readOnly","error","value","placeholder","format","onChange","onFocus","onBlur"]);const[p,g]=t.useState(!1),m=t.useRef();fc("mousedown",(function(e){i||a||y(e)}),"document"),fc("keyup",(function(e){if("Tab"===e.code)y(e)}),"document");const b=()=>{i||a||p||(g(!0),u&&u())};const v=()=>{g(!1),f&&f()},y=e=>{m&&!m.current.contains(e.target)&&p&&v()},x=t.useCallback((()=>"12hr"===c?"HH:MMam":"HH:MM"),[c,l]);return e.jsxs(Sf,Object.assign({ref:m,id:r,$readOnly:a,$disabled:i,$error:o},h,{children:[e.jsx(RC,{onFocus:b,focused:p,readOnly:!0,placeholder:l||x(),value:vu.formatDisplayValue(s,c),disabled:i,"data-testid":r?`${r}-timepicker-selector`:"timepicker-selector"}),e.jsx(EC,{id:r,show:p,value:s,format:c,onCancel:()=>{v()},onChange:e=>{d&&d(e),v()}})]}))},BC=K.default(qy)`
    margin-right: 0.25rem;
`,PC=K.default(Vy)`
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
`,LC=K.default(PC)`
    // Cheat to balance the placeholder look while ensuring enough width
    margin-left: 0.5rem;
    width: 6rem;

    input {
        text-align: left;
    }
`,zC=K.default(exports.Text.Body)`
    margin: 0 0.25rem;
    ${e=>{if(e.$inactive)return i.css`
                color: ${ts.Neutral[3]};
            `}}
`,HC=K.default.div`
    display: flex;
`,WC=K.default(exports.Text.Body)`
    ${e=>{if(e.$inactive)return i.css`
                color: ${ts.Neutral[3]};
            `}}
`,VC=n=>{var{disabled:r,error:i,value:a,onChange:o,onBlur:s,onChangeRaw:l,onBlurRaw:c,readOnly:d,placeholder:u="00-8888",autoComplete:f}=n,h=X(n,["disabled","error","value","onChange","onBlur","onChangeRaw","onBlurRaw","readOnly","placeholder","autoComplete"]);const[p,g]=t.useState(""),[m,b]=t.useState(""),[v,y]=t.useState("none"),x=t.useRef(null),w=t.useRef(null),$=t.useRef(null),j=t.useRef(p),S=t.useRef(m),k=t.useRef(v),O=e=>e.toLocaleUpperCase().replace(/[^0-9A-Za-z]/g,""),C=gc({ref:w,formatter:O}),D=gc({ref:$,formatter:O}),T=e=>{j.current=e,g(e)},_=e=>{S.current=e,b(e)},E=e=>{k.current=e,y(e)};t.useEffect((()=>{"floor"===v&&3===p.length&&$.current&&$.current.focus()}),[p]),t.useEffect((()=>{F(a)}),[a]);const M=e=>{E(e.target.name),e.target.select()},I=e=>{const t=e.target.name,n=e.target.value,r=R(n);"floor"===t?(T(r),r!==p&&B(r,t)):(_(r),r!==m&&B(r,t))},N=e=>{const t=e.target.name;if("floor"===t){const{nextValue:e,updateCaretPosition:n}=C();n(),T(e),B(e,t)}else{const{nextValue:e,updateCaretPosition:n}=D();n(),_(e),B(e,t)}},A=e=>{"Backspace"!==e.code&&"Backspace"!==e.key||"unit"===v&&0===m.length&&w.current.focus()},R=e=>/^[0-9]$/.test(e)?dc.padValue(e,!0):e.toLocaleUpperCase(),F=e=>{if(e!==YC)if(void 0===e||0===e.length)T(""),_("");else{const t=e.split("-");if(2===t.length){const e=t[0],n=t[1];T("floor"===v?e:R(e)),_("unit"===v?n:R(n))}}},B=(e,t)=>{if(!o&&!l)return;const n={floor:j.current,unit:S.current};if(n[t]=e,o){const e=L(n);o(e)}l&&l([n.floor,n.unit])},P=()=>{if(!s&&!c)return;const e={floor:R(j.current),unit:R(S.current)};if(s){const t=L(e);s(t)}c&&c([e.floor,e.unit])},L=e=>{const t=[e.floor,e.unit];return e.floor.length>0&&e.unit.length>0?t.join("-"):t.every((e=>""===e))?"":YC},z=e=>e.split("-");return e.jsxs(Sf,Object.assign({},h,{ref:x,onClick:()=>{"none"===v&&w.current&&w.current.focus()},$disabled:r,$error:i,$readOnly:d,tabIndex:-1,onBlur:e=>{x.current&&x.current.contains(e.relatedTarget)||"none"!==k.current&&(E("none"),P())}},{children:[e.jsx(BC,Object.assign({"data-testid":"addon",disabled:r,$readOnly:d},{children:"#"})),d&&a?(()=>{const t=a.split("-");return e.jsxs(HC,{children:[e.jsx(WC,{children:t[0]}),e.jsx(zC,{children:"-"}),e.jsx(WC,{children:t[1]})]})})():e.jsxs(e.Fragment,{children:[e.jsx(PC,{name:"floor",maxLength:3,value:p,ref:w,onFocus:M,onBlur:I,onChange:N,disabled:r,readOnly:d,type:"text",pattern:"[0-9A-Z]{2,3}","data-testid":"floor-input","aria-label":"floor-input",placeholder:"floor"!==v||d?z(u)[0]:"",autoComplete:f}),e.jsx(zC,Object.assign({$inactive:0===p.length},{children:"-"})),e.jsx(LC,{name:"unit",maxLength:5,value:m,ref:$,onFocus:M,onBlur:I,onChange:N,onKeyDown:A,disabled:r,readOnly:d,type:"text",pattern:"[0-9A-Z]{2,5}","data-testid":"unit-input","aria-label":"unit-input",placeholder:"unit"!==v||d?z(u)[1]:"",autoComplete:f})]})]}))},YC="Invalid unit number",UC={DateInput:t=>{var{label:n,errorMessage:r,id:i="form-date-input","data-error-testid":a,"data-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e.jsx(gy,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":a,disabled:u.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e.jsx(Ff,Object.assign({id:`${i}-base`,"data-testid":o||i,error:!!r},u))}))},DateRangeInput:t=>{var{label:n,errorMessage:r,id:i="form-date-range-input","data-error-testid":a,"data-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e.jsx(gy,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":a,disabled:u.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e.jsx(Qf,Object.assign({id:`${i}-base`,"data-testid":o||i,error:!!r},u))}))},ESignature:t=>{const{label:n,errorMessage:r,id:i="form-field","data-error-testid":a,"data-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e.jsx(gy,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e.jsx(Yh,Object.assign({id:`${i}-base`,"data-testid":o||i},u))}))},HistogramSlider:t=>{var{label:n,errorMessage:r,id:i="form-histogram-slider","data-error-testid":a,"data-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e.jsx(gy,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":a,disabled:u.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e.jsx(Py,Object.assign({id:`${i}-base`,"data-testid":o||i},u))}))},Input:Yy,InputGroup:Uj,MaskedInput:oS,Label:iy,MultiSelect:t=>{var{label:n,errorMessage:r,id:i="form-multi-select","data-error-testid":a,"data-testid":o,enableSearch:s=!1,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,variant:f}=t,h=X(t,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols","variant"]);return e.jsx(gy,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":a,disabled:h.disabled,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u},{children:e.jsx(tO,Object.assign({id:`${i}-base`,"data-testid":o||i,error:!!r,enableSearch:s,variant:f},h))}))},NestedSelect:t=>{var{label:n,errorMessage:r,id:i="form-nested-select","data-error-testid":a,"data-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e.jsx(gy,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":a,disabled:u.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e.jsx(aO,Object.assign({id:`${i}-base`,"data-testid":o||i,error:!!r},u))}))},NestedMultiSelect:t=>{var{label:n,errorMessage:r,id:i="form-nested-multi-select","data-error-testid":a,"data-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e.jsx(gy,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":a,disabled:u.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e.jsx(iO,Object.assign({id:`${i}-base`,"data-testid":o||i,error:!!r},u))}))},Select:t=>{var{label:n,errorMessage:r,id:i="form-select","data-error-testid":a,"data-testid":o,enableSearch:s=!1,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u,variant:f}=t,h=X(t,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols","variant"]);return e.jsx(gy,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":a,disabled:h.disabled,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u},{children:e.jsx(DO,Object.assign({id:`${i}-base`,"data-testid":o||i,error:!!r,enableSearch:s,variant:f},h))}))},SelectHistogram:t=>{var{label:n,errorMessage:r,id:i="form-select-histogram","data-error-testid":a,"data-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d,histogramSlider:u}=t,f=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols","histogramSlider"]);return e.jsx(gy,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":a,disabled:f.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e.jsx(NO,Object.assign({histogramSlider:u,error:!!r,"data-testid":o||i,id:`${i}-base`},f))}))},Slider:t=>{var{label:n,errorMessage:r,id:i="form-slider","data-error-testid":a,"data-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e.jsx(gy,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":a,disabled:u.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e.jsx(AO,Object.assign({id:`${i}-base`,"data-testid":o||i},u))}))},RangeSlider:t=>{var{label:n,errorMessage:r,id:i="form-range-slider","data-error-testid":a,"data-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e.jsx(gy,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":a,disabled:u.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e.jsx(Iy,Object.assign({id:`${i}-base`,"data-testid":o||i},u))}))},RangeSelect:t=>{var{label:n,errorMessage:r,id:i="form-select","data-error-testid":a,"data-testid":o,enableSearch:s=!1,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u}=t,f=X(t,["label","errorMessage","id","data-error-testid","data-testid","enableSearch","layoutType","mobileCols","tabletCols","desktopCols"]);return e.jsx(gy,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":a,disabled:f.disabled,layoutType:l,mobileCols:c,tabletCols:d,desktopCols:u},{children:e.jsx(CO,Object.assign({id:`${i}-base`,"data-testid":o||i,error:!!r,enableSearch:s},f))}))},Textarea:YO,Timepicker:t=>{var{label:n,errorMessage:r,id:i="form-timepicker","data-error-testid":a,"data-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e.jsx(gy,Object.assign({id:i,label:n,errorMessage:r,disabled:u.disabled,"data-error-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e.jsx(FC,Object.assign({id:`${i}-base`,"data-testid":o||i,error:!!r},u))}))},TimeRangePicker:t=>{var{label:n,errorMessage:r,id:i="form-timepicker","data-error-testid":a,"data-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e.jsx(gy,Object.assign({id:i,label:n,errorMessage:r,disabled:u.disabled,"data-error-testid":a,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e.jsx(AC,Object.assign({id:`${i}-base`,"data-testid":o||i,error:!!r},u))}))},CustomField:t=>{var{id:n="form-custom-field","data-error-testid":r,children:i}=t,a=X(t,["id","data-error-testid","children"]);return e.jsx(gy,Object.assign({id:n,"data-error-testid":r},a,{children:i}))},UnitNumberInput:t=>{var{label:n,errorMessage:r,id:i="form-unit-number-input","data-error-testid":a,"data-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e.jsx(gy,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":a,disabled:u.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e.jsx(VC,Object.assign({id:`${i}-base`,"data-testid":o||i,error:!!r},u))}))},PhoneNumberInput:t=>{var{label:n,errorMessage:r,id:i="form-phone-number-input","data-error-testid":a,"data-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e.jsx(gy,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":a,disabled:u.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e.jsx(xO,Object.assign({id:`${i}-base`,"data-testid":o||i,error:!!r},u))}))},PredictiveTextInput:t=>{var{label:n,errorMessage:r,id:i="form-predictive-text","data-error-testid":a,"data-testid":o,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d}=t,u=X(t,["label","errorMessage","id","data-error-testid","data-testid","layoutType","mobileCols","tabletCols","desktopCols"]);return e.jsx(gy,Object.assign({id:i,label:n,errorMessage:r,"data-error-testid":a,disabled:u.disabled,layoutType:s,mobileCols:l,tabletCols:c,desktopCols:d},{children:e.jsx(jO,Object.assign({id:`${i}-base`,"data-testid":o||i,error:!!r},u))}))}},KC=K.default.li`
    display: flex;
    flex-direction: column;
    padding: 2rem 0;
    background: transparent;

    :not(:last-child) {
        border-bottom: 1px solid ${ts.Neutral[5]};
    }
`,qC=K.default.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: 1rem;
    width: 100%;
`,XC=K.default.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`,GC=K.default.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;

    ${is.MaxWidth.mobileL} {
        flex-direction: column;
        justify-content: flex-start;
    }
`,ZC=K.default(exports.Text.BodySmall)`
    display: flex;
    flex: 1;
    margin-right: 1rem;

    ${is.MaxWidth.mobileL} {
        margin-right: 0;
        margin-bottom: 0.5rem;
    }
`,QC=K.default(exports.Text.BodySmall)``,JC=K.default.div`
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
`,eD=K.default(qs.Small)`
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
`,tD=({thumbnailImageDataUrl:t,"data-testid":n,renderReplaceButton:r,onReplaceClick:i})=>e.jsxs(nD,Object.assign({"data-testid":n},{children:[e.jsx(rD,{"data-testid":n?`${n}-image`:void 0,src:t}),r&&e.jsx(iD,Object.assign({type:"button",onClick:e=>{i&&i()}},{children:"Replace"}))]})),nD=K.default.div`
    width: auto;
    margin-right: 2rem;
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: center;
`,rD=K.default(gp)`
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
`,iD=K.default.button`
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
`,aD=({fileItem:n,fileDescriptionMaxLength:r,wrapperWidth:i,onSave:a,onCancel:o,onBlur:s})=>{const{id:l,name:c,size:d,truncateText:u=!0,thumbnailImageDataUrl:f}=n,[h,p]=t.useState(),[g,m]=t.useState(""),b=t.useRef(),v=t.useRef();t.useEffect((()=>{p(y(c))}),[i]),t.useEffect((()=>{m(n.description||"")}),[n]);const y=e=>{if(!u)return e;const t=v&&v.current?v.current.getBoundingClientRect().width:0;return dc.truncateOneLine(e,t,t/2,t/2/8,16)};return e.jsxs(KC,Object.assign({"data-testid":`${l}-edit-display`},{children:[e.jsxs(qC,{children:[f&&e.jsx(tD,{thumbnailImageDataUrl:f}),e.jsxs(XC,{children:[e.jsxs(GC,Object.assign({ref:v},{children:[e.jsx(ZC,Object.assign({weight:"semibold"},{children:h})),e.jsx(QC,{children:pp.formatFileSizeDisplay(d)})]})),e.jsx(UC.Textarea,{ref:b,id:`${l}-description-textarea`,"data-testid":`${l}-textarea`,value:g,maxLength:r,onChange:e=>{m(e.target.value)},onBlur:e=>{s(e.target.value)},rows:3,label:{children:"Photo description",subtitle:"Describe this photo to users who may not be able to see the image."}})]})]}),e.jsxs(JC,Object.assign({$thumbnail:!!f},{children:[e.jsx(eD,Object.assign({"data-testid":`${l}-save-button`,type:"button",disabled:0===g.trim().length,onClick:()=>{a(b.current.value.trim())}},{children:"Save"})),e.jsx(eD,Object.assign({type:"button",styleType:"secondary","data-testid":`${l}-cancel-button`,onClick:o},{children:"Cancel"}))]}))]}))},oD=K.default.li`
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
`,sD=K.default(I.DragHandleIcon)`
    // Temp icon
    margin-right: 1rem;
    height: 1.5rem;
    width: 1.5rem;

    ${e=>{if(e.$disabled)return i.css`
                color: ${ts.Neutral[4]};
            `}}
`,lD=K.default.div`
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
`,cD=K.default.div`
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
`,dD=K.default.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 100%;
`,uD=K.default.div`
    display: flex;
    flex: 1;
    align-items: center;

    ${is.MaxWidth.mobileL} {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }
`,fD=K.default.div`
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
`,hD=K.default(exports.Text.BodySmall)``,pD=K.default(hD)`
    margin-top: 0.25rem;
`,gD=K.default(exports.Text.XSmall)`
    font-size: 0.875rem !important;
    color: ${ts.Validation.Red.Text};
`,mD=K.default(gD)`
    margin-top: 0.25rem;
    ${is.MaxWidth.mobileL} {
        display: none;
        visibility: hidden;
    }
`,bD=K.default(gD)`
    display: none;
    visibility: hidden;
    ${is.MaxWidth.mobileL} {
        display: block;
        visibility: visible;
        margin-top: 0.5rem;
    }
`,vD=K.default.div`
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
`,yD=K.default(vh)`
    min-width: unset;

    :not(:last-child) {
        margin-right: 1rem;
    }
`,xD=K.default(ss)`
    height: 2.5rem;
    width: 2.5rem;
    padding: unset;
    svg {
        height: 1.5rem;
        width: 1.5rem;
        color: ${ts.Neutral[3]};
    }
`,wD=t.memo((({fileItem:n,editable:r,sortable:i,wrapperWidth:a,disabled:o,readOnly:s,onDelete:l,onEditClick:c})=>{const{id:d,name:u,size:f,description:h,progress:p=1,errorMessage:g,thumbnailImageDataUrl:b,truncateText:v=!0}=n,[y,x]=t.useState(),{activeId:w}=t.useContext(Ip),{attributes:$,listeners:j,setNodeRef:S,transform:k,transition:O}=Av({id:d}),C=t.useRef(),D={transform:Mm.Translate.toString(k),transition:O},T=Object.assign(Object.assign({style:D},$),j),_=p<1,I=pp.formatFileSizeDisplay(f),N=w?w===d?"self":"others":"none";t.useEffect((()=>{x(B(u))}),[a]);const A=()=>{l()},R=()=>{c&&c()},F=e=>{i&&e.stopPropagation()},B=e=>{if(!v)return e;const t=C&&C.current?C.current.getBoundingClientRect().width:0;return dc.truncateOneLine(e,t,t/2,t/2/8,16)},P=()=>o||!!w,L=()=>i&&!s,z=()=>e.jsxs(e.Fragment,{children:[e.jsx(hD,Object.assign({weight:h?"semibold":"regular"},{children:y})),h&&e.jsx(pD,{children:h})]});return e.jsxs(oD,Object.assign({id:d,ref:S,$sortable:L(),$disabled:P(),$focusType:N},L()?T:{},{children:[L()&&e.jsx(sD,{"data-testid":`${d}-drag-handle`,$disabled:P()}),e.jsxs(lD,Object.assign({$focused:"self"===N,$error:!!g,$loading:_,$disabled:P(),$editable:r},{children:[(()=>{let t;return t=g?e.jsxs(e.Fragment,{children:[e.jsxs(dD,Object.assign({ref:C},{children:[z(),g&&e.jsx(mD,Object.assign({weight:"semibold"},{children:g}))]})),e.jsx(fD,{children:e.jsx(hD,{children:I})}),g&&e.jsx(bD,Object.assign({weight:"semibold"},{children:g}))]}):b?e.jsxs(e.Fragment,{children:[e.jsx(tD,{thumbnailImageDataUrl:b,"data-testid":`${d}-thumbnail`}),e.jsxs(uD,{children:[e.jsx(dD,Object.assign({ref:C},{children:z()})),e.jsx(fD,{children:e.jsx(hD,{children:I})})]})]}):e.jsxs(e.Fragment,{children:[e.jsx(dD,Object.assign({ref:C},{children:z()})),e.jsx(fD,Object.assign({$hideInMobile:_},{children:e.jsx(hD,{children:I})}))]}),e.jsx(cD,Object.assign({$hasThumbnail:!!b},{children:t}))})(),!s&&(()=>{let t;return t=g?e.jsx(xD,Object.assign({onClick:A,"data-testid":`${d}-error-delete-button`,"aria-label":`delete-${u}`},{children:e.jsx(m.CrossIcon,{"aria-hidden":!0})})):_?e.jsx(gh,{progress:p,"data-testid":`${d}-progress-bar`}):e.jsxs(e.Fragment,{children:[r&&e.jsx(yD,Object.assign({"data-testid":`${d}-edit-button`,"data-no-dnd":"true",type:"button",styleType:"light",sizeType:"small","aria-label":`edit ${u}`,disabled:P(),onClick:R,onKeyDown:F},{children:e.jsx(M.PencilIcon,{"aria-hidden":!0})}),"edit"),e.jsx(yD,Object.assign({"data-testid":`${d}-delete-button`,"data-no-dnd":"true",type:"button",styleType:"light",sizeType:"small","aria-label":`delete ${u}`,disabled:P(),onClick:A,onKeyDown:F},{children:e.jsx(E.BinIcon,{"aria-hidden":!0})}),"delete")]}),e.jsx(vD,Object.assign({$editable:r,$error:!!g,$loading:_},{children:t}))})()]}))]}))})),$D=K.default.ul`
    list-style-type: none;
    margin-bottom: ${e=>e.$readOnly?"0":"2rem"};
`,jD=K.default.li`
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
`,SD=({fileItems:n,editableFileItems:r,fileDescriptionMaxLength:i,sortable:a,disabled:o,readOnly:s,onItemUpdate:l,onItemDelete:c,onSort:d})=>{const[u,f]=t.useState({}),{setActiveId:h}=t.useContext(Ip),{width:p,ref:g}=qe(),m=t.useRef({}),b=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.useMemo((()=>[...n].filter((e=>null!=e))),[...n])}(Vm(Lv,{activationConstraint:{distance:8}}),Vm(Fb,{activationConstraint:{delay:150,tolerance:5}}),Vm(Cb,{coordinateGetter:Bv})),v=e=>{delete m.current[e]};t.useEffect((()=>{f(D(n))}),[n]);const y=e=>t=>{T(e.id,"display"),v(e.id);const n=Object.assign(Object.assign({},e),{description:t});l(n)},x=e=>t=>{m.current[e.id]=t},w=e=>()=>{e.description&&0!==e.description.length?T(e.id,"display"):c(e),v(e.id)},$=e=>()=>{T(e.id,"edit")},j=e=>()=>{c(e)},S=e=>{if(d){const{active:t,over:r}=e;if(r&&t.id!==r.id){const e=n.findIndex((e=>e.id===t.id)),i=n.findIndex((e=>e.id===r.id)),a=xv(n,e,i);d(a)}}h(void 0)},k=e=>{const{active:t}=e;h(t.id)},O=e=>r&&pp.isSupportedImageType(e.type),C=e=>!e.errorMessage&&!s&&!("number"==typeof e.progress&&e.progress<1)&&O(e)&&!e.description,D=e=>{if(!e||0===e.length)return{};const t={};for(const n of e)n.errorMessage?t[n.id]="error":u[n.id]?t[n.id]=u[n.id]:t[n.id]=C(n)?"edit":"display";return t},T=(e,t)=>{f((n=>Object.assign(Object.assign({},n),{[e]:t})))},_=()=>n&&n.length>1&&a&&Object.values(u).every((e=>"display"===e)),E=()=>{const t=((e,t)=>{if(!e||0===e.length)return[];const n=[];for(const r of e)if("edit"===t[r.id]){const e=n[n.length-1];Array.isArray(e)?e.push(r):n.push([r])}else n.push(r);return n})(n,u);return 0===t.length?null:t.map(((t,n)=>Array.isArray(t)?((t,n)=>{const r=t.map((t=>{const n=Object.assign({},t);return void 0!==m.current[t.id]&&(n.description=m.current[t.id]),e.jsx(aD,{fileItem:n,wrapperWidth:p,fileDescriptionMaxLength:i,onSave:y(t),onCancel:w(t),onBlur:x(t)},t.id)}));return e.jsx(jD,{children:e.jsx("ul",{children:r})},`editable-${n}`)})(t,n):e.jsx(wD,{fileItem:t,editable:O(t),wrapperWidth:p,sortable:_(),disabled:o,readOnly:s,onDelete:j(t),onEditClick:$(t)},t.id)))};return n&&0!==n.length?o||s||!_()?e.jsx($D,Object.assign({$readOnly:s,ref:g},{children:E()})):e.jsx(hv,Object.assign({sensors:b,onDragEnd:S,onDragStart:k},{children:e.jsx(Dv,Object.assign({items:n,strategy:kv},{children:e.jsx($D,Object.assign({$readOnly:s,ref:g},{children:E()}))}))})):null},kD=K.default.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
`,OD=K.default(exports.Text.H4)`
    margin-bottom: 0.5rem;
`,CD=K.default.div`
    color: ${ts.Neutral[1]};
    ${el({textSize:"Body"})}
`,DD=K.default(exports.Text.BodySmall)`
    margin-bottom: 0;
    color: ${ts.Neutral[3]};
`,TD=K.default.div`
    color: ${ts.Neutral[3]};
    ${el({textSize:"BodySmall"})}
`,_D=K.default(ll)`
    margin-bottom: 2rem;
`,ED=K.default.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    ${is.MaxWidth.mobileL} {
        align-items: flex-start;
    }
`,MD=K.default(qs.Small)`
    width: 10rem;

    ${is.MaxWidth.mobileL} {
        width: 100%;
    }
`,ID=K.default.label`
    ${ys.getTextStyle("BodySmall","semibold")}
    color: ${ts.Neutral[3]};
    margin-top: 0.5rem;
    width: 10rem;
    text-align: center;
    ${is.MaxWidth.mobileL} {
        display: none;
        visibility: hidden;
    }
`,ND=K.default(ll)`
    margin-bottom: 2rem;
`,AD=K.default.div`
    background-color: ${ts.Neutral[8]};
    border: 1px solid ${ts.Neutral[5]};
    border-radius: 0.5rem;
    overflow: hidden;
    width: 100%;
`,RD=K.default.div`
    background-color: ${ts.Neutral[7]};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`,FD=K.default.div`
    background-color: ${ts.Neutral[8]};
    height: 100%;
    width: 100%;
`,BD=K.default.div`
    flex: 1;
    width: 100%;
    overflow-y: auto;
`,PD=K.default.div`
    display: flex;
    align-items: center;

    background-color: ${ts.Neutral[8]};

    ${is.MaxWidth.tablet} {
        border-bottom: 1px solid ${ts.Neutral[5]};
    }
`,LD=K.default(exports.Text.H4)`
    flex: 1;
    margin: 1.5rem 0 1rem 1.25rem;

    ${is.MaxWidth.tablet} {
        text-align: center;
        margin: 1.5rem 0;
    }
`,zD=K.default(ss)`
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
`,HD=K.default(qs.Small)`
    background-color: transparent;
    padding: 1.5rem 1.25rem 1rem 1.25rem;
    height: auto;

    ${is.MaxWidth.tablet} {
        padding: 1.5rem 1.25rem;
    }
`,WD=K.default(Oc.Default)`
    width: 100%;
`,VD=K.default.div`
    padding: 1.5rem 1.25rem;
    background-color: ${ts.Neutral[8]};
    border-top: 1px solid ${ts.Neutral[5]};
`,YD=K.default(qs.Default)`
    width: 100%;
`,UD=Y.default.createContext({mode:"default",rootNode:null});var KD=_i((function(e){return null==e}));const qD=K.default.div`
    background-color: ${e=>e.$collapsible?ts.Neutral[7](e):ts.Neutral[8](e)};

    ${is.MaxWidth.tablet} {
        background-color: ${ts.Neutral[7]};
    }
`,XD=K.default.div`
    display: ${e=>e.$showDivider?"block":"none"};
    height: 1px;
    background-color: ${ts.Neutral[5]};

    ${is.MaxWidth.tablet} {
        display: ${e=>e.$showMobileDivider?"block":"none"};
        margin: 0 1rem;
    }
`,GD=K.default.div`
    display: flex;
    align-items: center;

    background-color: ${ts.Neutral[8]};

    ${is.MaxWidth.tablet} {
        background-color: transparent;
    }
`,ZD=K.default(ss)`
    margin: 0 0 0 auto;
`,QD=K.default(f.ChevronDownIcon)`
    height: 1.125rem;
    width: 1.125rem;
    color: ${ts.Neutral[3]};

    transform: rotate(${e=>e.$expanded?180:0}deg);
    transition: transform 300ms ease-in-out;

    &:hover {
        color: ${ts.Neutral[2]};
    }
`,JD=K.default(exports.Text.H4)`
    margin: 1.5rem 0 1.5rem 1.25rem;

    ${is.MaxWidth.tablet} {
        ${ys.getTextStyle("H5","semibold")}
        margin: 1.5rem 1.25rem 0 1.25rem;
    }
`,eT=K.default(Di.div)`
    overflow: hidden;
`,tT=K.default.div`
    padding: 1rem 1.25rem;
`,nT=K.default(Di.div)`
    ${e=>e.$minimisable&&"overflow: hidden;"}
    ${e=>e.$height&&`height: ${e.$height}px;`}
`,rT=K.default(qs.Small)`
    height: fit-content;
    padding: 0;
    margin: 1rem 0 0 0;
`,iT=n=>{var{collapsible:r=!0,initialExpanded:i=!1,expanded:a,onExpandChange:o,minimisable:s=!1,minimisedHeight:l,showDivider:c=!0,showMobileDivider:d=!0,title:u,addon:f,children:h}=n,p=X(n,["collapsible","initialExpanded","expanded","onExpandChange","minimisable","minimisedHeight","showDivider","showMobileDivider","title","addon","children"]);const{mode:g,rootNode:m}=t.useContext(UD),b="mobile"===g,[v,y]=t.useState(C()),[x,w]=t.useState(s),$=!b&&r,j=qe(),S=qe(),k=di({height:v?j.height:0}),O=x?null!=l?l:Math.min(.5*S.height,216):S.height;t.useEffect((()=>{y(C())}),[r,a]);function C(){return!!b||(KD(a)?!r||i:a)}return e.jsxs(qD,Object.assign({$collapsible:$},{children:[e.jsx(XD,{$showDivider:c,$showMobileDivider:d}),(u||$)&&e.jsxs(GD,{children:[u&&e.jsxs(JD,Object.assign({weight:"semibold"},{children:[u," ",f&&("popover"===f.type?e.jsx(ey,{addon:f,rootNode:b?m:void 0}):null)]})),$&&e.jsx(ZD,Object.assign({focusHighlight:!1,focusOutline:"browser",onClick:()=>{const e=!v;KD(a)&&y(e),o&&o(e)},"aria-label":v?"Collapse":"Expand"},{children:e.jsx(QD,{$expanded:v})}))]}),e.jsx(eT,Object.assign({"data-testid":"expandable-container","data-expanded":v,style:k},{children:e.jsx("div",Object.assign({ref:j.ref},{children:e.jsxs(tT,Object.assign({},p,{children:[e.jsx(nT,Object.assign({"data-testid":"minimisable-container",$height:O,$minimisable:s},{children:e.jsx("div",Object.assign({ref:S.ref},{children:e.jsx("div",Object.assign({"data-id":"content-container"},{children:"function"==typeof h?h(g,{minimised:x}):h}))}))})),s&&e.jsxs(rT,Object.assign({"data-id":"minimise-button",styleType:"link",type:"button",onClick:()=>{w(!x)}},{children:["View ",x?"more":"less"]}))]}))}))}))]}))},aT=K.default(iT)`
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
`,oT=K.default.div`
    display: flex;
    flex-direction: column;

    ${is.MaxWidth.tablet} {
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1rem;
    }
`,sT=K.default.label`
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
`,lT=K.default.input`
    appearance: none;
`,cT=K.default(GO)`
    height: 1.5rem;
    width: 1.5rem;
    flex-shrink: 0;

    ${lT}:focus-visible + & {
        outline: 2px solid ${ts.Primary};
        outline-offset: -2px;
        border-radius: 4px;
    }
`,dT=K.default(gC)`
    ${e=>!e.$visible&&"visibility: hidden;"}
`,uT=K.default(qs.Small)`
    height: fit-content;
    padding: 0;
    margin: 1rem 0 0.5rem 0.75rem;

    ${is.MaxWidth.tablet} {
        margin: 0 0 1rem 0;
    }
`,fT=K.default.div`
    background-color: ${ts.Neutral[8]};
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`,hT=Object.assign((n=>{var{toggleFilterButtonLabel:r="Filters",toggleFilterButtonStyle:i="light",headerTitle:a="Filters",clearButtonDisabled:o=!1,onClear:s,onDismiss:l,onDone:c,children:d}=n,f=X(n,["toggleFilterButtonLabel","toggleFilterButtonStyle","headerTitle","clearButtonDisabled","onClear","onDismiss","onDone","children"]);const[h,p]=t.useState(!1),g=t.useRef(null),m=t.useRef(null),b=Dl.useMediaQuery({maxWidth:ns.tablet});t.useEffect((()=>{b||y()}),[b]);const v=()=>{p(!0)},y=()=>{p(!1),l&&l()},x=()=>{p(!1),c&&c()},w=()=>{s&&s()},$=e=>"function"==typeof d?d(e):d,j=t=>e.jsxs(PD,{children:["mobile"===t&&e.jsx(zD,Object.assign({onClick:y,focusOutline:"browser",focusHighlight:!1,"aria-label":"Dismiss"},{children:e.jsx(u.CrossIcon,{})})),e.jsx(LD,Object.assign({weight:"semibold"},{children:a})),e.jsx(HD,Object.assign({styleType:"link",type:"button",onClick:w,disabled:o},{children:"Clear"}))]});return e.jsx("div",Object.assign({},f,{children:b?e.jsx(UD.Provider,Object.assign({value:{mode:"mobile",rootNode:g}},{children:e.jsxs(e.Fragment,{children:[e.jsx(WD,Object.assign({"data-testid":"filter-show-button",styleType:i,onClick:v,type:"button",icon:e.jsx(u.FilterIcon,{})},{children:r})),e.jsx(sh,Object.assign({show:h,disableTransition:!0},{children:e.jsx(FD,Object.assign({"data-id":"filter-mobile","data-testid":"filter-mobile"},{children:e.jsxs(RD,Object.assign({ref:g},{children:[j("mobile"),e.jsx(BD,{children:$("mobile")}),e.jsx(VD,{children:e.jsx(YD,Object.assign({onClick:x,type:"button"},{children:"Done"}))})]}))}))}))]})})):e.jsx(UD.Provider,Object.assign({value:{mode:"default",rootNode:m}},{children:e.jsxs(AD,Object.assign({"data-id":"filter-desktop","data-testid":"filter-desktop",ref:m},{children:[j("default"),$("default")]}))}))}))}),{Item:iT,Page:({onDismiss:t,onDone:n,children:r})=>e.jsxs(fT,{children:[e.jsx(zD,Object.assign({onClick:t,focusOutline:"browser",focusHighlight:!1,"aria-label":"Dismiss"},{children:e.jsx(p.ChevronLeftIcon,{})})),e.jsx(BD,{children:r}),e.jsx(VD,{children:e.jsx(YD,Object.assign({onClick:n,type:"button"},{children:"Done"}))})]}),Checkbox:n=>{var{selectedOptions:r,options:i,onSelect:a,labelExtractor:o,valueExtractor:s,useToggleContentWidth:l}=n,c=X(n,["selectedOptions","options","onSelect","labelExtractor","valueExtractor","useToggleContentWidth"]);const{mode:d}=t.useContext(UD),[u,f]=t.useState(r||[]),[h,p]=t.useState(),[g,m]=t.useState(i.length),b=t.useRef(),v=t.useRef(),y=e=>()=>{const t=[...u],n=u.findIndex((t=>$(t)===$(e)));n>=0?t.splice(n,1):t.push(e),f(t),null==a||a(t)},x=()=>{const e=u.length?[]:i;f(e),null==a||a(e)},w=e=>{var t;return o?o(e):null!==(t=e.label)&&void 0!==t?t:e.toString()},$=e=>{var t;return s?s(e):null!==(t=e.value)&&void 0!==t?t:e.toString()},j=t.useCallback((()=>{if(!b.current)return void p(void 0);const e=Array.from(b.current.children);let t=0,n=0,r=-1;for(let i=0;i<e.length;i++){const a=e[i].offsetTop;if(a>r&&(n++,r=a,n>2))break;t=i}m(t),p(n>2?r-8:void 0)}),[]);t.useEffect((()=>{r!==u&&f(r||[])}),[r]),t.useEffect((()=>{"default"===d?(()=>{const e=v.current?v.current.offsetTop+v.current.clientHeight:void 0;p(e)})():j()}),[i]),qe({handleWidth:"mobile"===d,handleHeight:!1,skipOnMount:!0,refreshMode:"throttle",targetRef:b,onResize:j});return e.jsx(aT,Object.assign({minimisable:i.length>5,minimisedHeight:h},c,{children:(t,{minimised:n})=>e.jsxs(e.Fragment,{children:[i.length<3?null:e.jsx(uT,Object.assign({styleType:"link",type:"button",onClick:x},{children:u.length?"Clear all":"Select all"})),e.jsx(oT,Object.assign({role:"group","aria-label":c.title,ref:b},{children:i.map(((r,i)=>"default"===t?((t,n,r)=>{const i=w(t),a=$(t),o=!!u.find((e=>$(e)===a));return e.jsxs(sT,Object.assign({$visible:!r||n<5,$selected:o,ref:4===n?v:void 0},{children:[e.jsx(lT,{type:"checkbox",checked:o,onChange:y(t)}),e.jsx(cT,{type:"checkbox",active:o}),i]}),a)})(r,i,n):((t,n,r)=>{const i=w(t),a=$(t),o=!!u.find((e=>$(e)===a));return e.jsx(dT,Object.assign({type:"checkbox",checked:o,$visible:!r||h&&n<=g,onChange:y(t),useContentWidth:l},{children:i}),a)})(r,i,n)))}))]})}))}}),pT=K.default.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    ${is.MaxWidth.tablet} {
        justify-content: flex-start;
        padding: 0;
    }
`,gT=K.default(exports.Text.H5).attrs({as:"p"})`
    margin-bottom: 1rem;
`,mT=K.default.div`
    display: flex;
    align-items: flex-start;
`,bT=K.default.a`
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
`,vT=()=>e.jsxs(pT,Object.assign({"data-testid":"download-app-section"},{children:[e.jsx(gT,Object.assign({weight:"semibold"},{children:"Download the app"})),e.jsxs(mT,{children:[e.jsx(bT,Object.assign({href:"https://apps.apple.com/sg/app/moments-of-life/id1383218758",target:"_blank",rel:"noopener noreferrer",id:"footer-download-app-apple"},{children:e.jsx("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/apple-app-store.png",alt:"apple-app-store"})})),e.jsx(bT,Object.assign({href:"https://play.google.com/store/apps/details?id=sg.gov.app.mol&hl=en_SG",target:"_blank",rel:"noopener noreferrer",id:"footer-download-app-android"},{children:e.jsx("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/google-play-store.png",alt:"google-play-store"})}))]})]})),yT={privacy:{href:"https://www.life.gov.sg/privacy-statement",target:"_blank",rel:"noopener"},termsOfUse:{href:"https://www.life.gov.sg/terms-of-use",target:"_blank",rel:"noopener"},reportVulnerability:{href:"https://tech.gov.sg/report_vulnerability",target:"_blank",rel:"noopener",external:!0}},xT={privacy:{href:"https://assets.life.gov.sg/bookingsg/BSG_Privacy_Policy.pdf",target:"_blank",rel:"noopener"},termsOfUse:{href:"https://assets.life.gov.sg/bookingsg/BSG_Terms_of_Use.pdf",target:"_blank",rel:"noopener"},reportVulnerability:{href:"https://tech.gov.sg/report_vulnerability",target:"_blank",rel:"noopener",external:!0}},wT={privacy:{href:"https://mylegacy.life.gov.sg/privacy-statement",target:"_blank",rel:"noopener"},termsOfUse:{href:"https://mylegacy.life.gov.sg/terms-of-use",target:"_blank",rel:"noopener"},reportVulnerability:{href:"https://tech.gov.sg/report_vulnerability",target:"_blank",rel:"noopener",external:!0}};var $T;!function(e){e.getCopyrightInfo=(e=new Date,n)=>{const r=t(n);return`${`${(new Date).getFullYear()} ${r}`} Last Updated ${Wl(e).format("D MMMM YYYY")}`};const t=e=>{switch(e){case"bookingsg":return"BookingSG, Government of Singapore.";case"mylegacy":return"MyLegacy@LifeSG, Government of Singapore.";case"ccube":return"Citizen Collective Common, Government of Singapore.";default:return"LifeSG, Government of Singapore."}};e.getFooterLogo=e=>{switch(e){case"bookingsg":return"https://home.booking.gov.sg/images/bookingsg/footer.svg";case"mylegacy":return"https://mylegacy.life.gov.sg/images/site-logo.png";case"ccube":return"https://assets.life.gov.sg/ccube/logo-ccube.svg";default:return"https://assets.life.gov.sg/react-design-system/img/logo/lifesg-primary-logo.svg"}},e.getDisclaimerLinks=(e,t)=>{const n=(e=>{switch(e){case"bookingsg":return xT;case"mylegacy":return wT;default:return yT}})(e);return{privacy:Object.assign(Object.assign(Object.assign({},n.privacy),t&&t.privacy?t.privacy:{}),{children:"Privacy Statement"}),termsOfUse:Object.assign(Object.assign(Object.assign({},n.termsOfUse),t&&t.termsOfUse?t.termsOfUse:{}),{children:"Terms of Use"}),reportVulnerability:Object.assign(Object.assign(Object.assign({},n.reportVulnerability),t&&t.reportVulnerability?t.reportVulnerability:{}),{children:"Report Vulnerability"})}}}($T||($T={}));const jT=K.default.footer`
    background: ${ts.Neutral[7]};
`,ST=K.default(exports.Text.Hyperlink.Small)`
    color: ${ts.Neutral[1]};
`,kT=K.default(uy.Content)`
    padding: 4rem 0;
    border-bottom: 1px solid ${ts.Neutral[5]};

    ${is.MaxWidth.tablet} {
        padding: 2rem 0;
    }
`,OT=K.default.div`
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
`,CT=K.default.ul`
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
`,DT=K.default.div`
    grid-column: 9 / span 4;

    ${is.MaxWidth.tablet} {
        grid-column: 1 / span 8;
        margin-top: 2rem;
    }

    ${is.MaxWidth.mobileL} {
        grid-column: 1 / span 4;
    }
`,TT=K.default.div`
    display: none;

    ${is.MaxWidth.tablet} {
        display: block;
        height: 1px;
        background: ${ts.Neutral[6]};
    }
`,_T=K.default(uy.Content)`
    padding: 1.375rem 0;

    ${is.MaxWidth.tablet} {
        border-top: none;
        flex-direction: column;
        padding: 1rem 0;
    }
`,ET=K.default.div`
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
`,MT=K.default(ET)`
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
`,IT=K.default(exports.Text.Hyperlink.Small)`
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
`;var NT=function(e,t){return Number(e.toFixed(t))},AT=function(e,t,n){n&&"function"==typeof n&&n(e,t)},RT={easeOut:function(e){return-Math.cos(e*Math.PI)/2+.5},linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:(4-2*e)*e-1},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}},FT=function(e){"number"==typeof e&&cancelAnimationFrame(e)},BT=function(e){e.mounted&&(FT(e.animation),e.animate=!1,e.animation=null,e.velocity=null)};function PT(e,t,n,r){if(e.mounted){var i=(new Date).getTime();BT(e),e.animation=function(){if(!e.mounted)return FT(e.animation);var a=(new Date).getTime()-i,o=a/n,s=(0,RT[t])(o);a>=n?(r(1),e.animation=null):e.animation&&(r(s),requestAnimationFrame(e.animation))},requestAnimationFrame(e.animation)}}function LT(e,t,n,r){var i=function(e){var t=e.scale,n=e.positionX,r=e.positionY;return!(Number.isNaN(t)||Number.isNaN(n)||Number.isNaN(r))}(t);if(e.mounted&&i){var a=e.setTransformState,o=e.transformState,s=o.scale,l=o.positionX,c=o.positionY,d=t.scale-s,u=t.positionX-l,f=t.positionY-c;0===n?a(t.scale,t.positionX,t.positionY):PT(e,r,n,(function(e){a(s+d*e,l+u*e,c+f*e)}))}}var zT=function(e,t){var n=e.wrapperComponent,r=e.contentComponent,i=e.setup.centerZoomedOut;if(!n||!r)throw new Error("Components are not mounted");var a=function(e,t,n){var r=e.offsetWidth,i=e.offsetHeight,a=t.offsetWidth*n,o=t.offsetHeight*n;return{wrapperWidth:r,wrapperHeight:i,newContentWidth:a,newDiffWidth:r-a,newContentHeight:o,newDiffHeight:i-o}}(n,r,t),o=a.wrapperWidth,s=a.wrapperHeight,l=function(e,t,n,r,i,a,o){var s=e>t?n*(o?1:.5):0,l=r>i?a*(o?1:.5):0;return{minPositionX:e-t-s,maxPositionX:s,minPositionY:r-i-l,maxPositionY:l}}(o,a.newContentWidth,a.newDiffWidth,s,a.newContentHeight,a.newDiffHeight,Boolean(i));return l},HT=function(e,t,n,r){return NT(r?e<t?t:e>n?n:e:e,2)},WT=function(e,t){var n=zT(e,t);return e.bounds=n,n};function VT(e,t,n,r,i,a,o){var s=n.minPositionX,l=n.minPositionY,c=n.maxPositionX,d=n.maxPositionY,u=0,f=0;return o&&(u=i,f=a),{x:HT(e,s-u,c+u,r),y:HT(t,l-f,d+f,r)}}function YT(e,t,n,r,i,a){var o=e.transformState,s=o.scale,l=o.positionX,c=o.positionY,d=r-s;return"number"!=typeof t||"number"!=typeof n?(console.error("Mouse X and Y position were not provided!"),{x:l,y:c}):VT(l-t*d,c-n*d,i,a,0,0,null)}function UT(e,t,n,r,i){var a=t-(i?r:0);return!Number.isNaN(n)&&e>=n?n:!Number.isNaN(t)&&e<=a?a:e}var KT=function(e,t){var n=e.setup.panning.excluded,r=e.isInitialized,i=e.wrapperComponent,a=t.target,o="shadowRoot"in a&&"composedPath"in t?t.composedPath().some((function(e){return e instanceof Element&&(null==i?void 0:i.contains(e))})):null==i?void 0:i.contains(a);return!!(r&&a&&o)&&!C_(a,n)},qT=function(e){var t=e.isInitialized,n=e.isPanning,r=e.setup.panning.disabled;return!(!t||!n||r)};function XT(e,t,n,r,i){var a=e.setup.limitToBounds,o=e.wrapperComponent,s=e.bounds,l=e.transformState,c=l.scale,d=l.positionX,u=l.positionY;if(null!==o&&null!==s&&(t!==d||n!==u)){var f=VT(t,n,s,a,r,i,o),h=f.x,p=f.y;e.setTransformState(c,h,p)}}var GT=function(e,t){var n=e.setup,r=e.transformState.scale,i=n.minScale,a=n.disablePadding;return t>0&&r>=i&&!a?t:0},ZT=function(e){var t=e.mounted,n=e.setup,r=n.disabled,i=n.velocityAnimation,a=e.transformState.scale;return!(i.disabled&&!(a>1)&&r&&!t)},QT=function(e){var t=e.mounted,n=e.velocity,r=e.bounds,i=e.setup,a=i.disabled,o=i.velocityAnimation,s=e.transformState.scale;return!(o.disabled&&!(s>1)&&a&&!t)&&!(!n||!r)};function JT(e,t,n,r,i,a,o,s,l,c){if(i){var d;if(t>o&&n>o)return(d=o+(e-o)*c)>l?l:d<o?o:d;if(t<a&&n<a)return(d=a+(e-a)*c)<s?s:d>a?a:d}return r?t:HT(e,a,o,i)}function e_(e,t){if(ZT(e)){var n=e.lastMousePosition,r=e.velocityTime,i=e.setup,a=e.wrapperComponent,o=i.velocityAnimation.equalToMove,s=Date.now();if(n&&r&&a){var l=function(e,t){return t?Math.min(1,e.offsetWidth/window.innerWidth):1}(a,o),c=t.x-n.x,d=t.y-n.y,u=c/l,f=d/l,h=s-r,p=c*c+d*d,g=Math.sqrt(p)/h;e.velocity={velocityX:u,velocityY:f,total:g}}e.lastMousePosition=t,e.velocityTime=s}}function t_(e,t){var n=e.transformState.scale;BT(e),WT(e,n),void 0!==window.TouchEvent&&t instanceof TouchEvent?function(e,t){var n=t.touches,r=e.transformState,i=r.positionX,a=r.positionY;if(e.isPanning=!0,1===n.length){var o=n[0].clientX,s=n[0].clientY;e.startCoords={x:o-i,y:s-a}}}(e,t):function(e,t){var n=e.transformState,r=n.positionX,i=n.positionY;e.isPanning=!0;var a=t.clientX,o=t.clientY;e.startCoords={x:a-r,y:o-i}}(e,t)}function n_(e){var t=e.transformState.scale,n=e.setup,r=n.minScale,i=n.alignmentAnimation,a=i.disabled,o=i.sizeX,s=i.sizeY,l=i.animationTime,c=i.animationType;if(!(a||t<r||!o&&!s)){var d=function(e){var t=e.transformState,n=t.positionX,r=t.positionY,i=t.scale,a=e.setup,o=a.disabled,s=a.limitToBounds,l=a.centerZoomedOut,c=e.wrapperComponent;if(!o&&c&&e.bounds){var d=e.bounds,u=d.maxPositionX,f=d.minPositionX,h=d.maxPositionY,p=d.minPositionY,g=n>u||n<f,m=r>h||r<p,b=YT(e,n>u?c.offsetWidth:e.setup.minPositionX||0,r>h?c.offsetHeight:e.setup.minPositionY||0,i,e.bounds,s||l),v=b.x,y=b.y;return{scale:i,positionX:g?v:n,positionY:m?y:r}}}(e);d&&LT(e,d,l,c)}}function r_(e,t,n){var r=e.startCoords,i=e.setup.alignmentAnimation,a=i.sizeX,o=i.sizeY;if(r){var s=function(e,t,n){var r=e.startCoords,i=e.transformState,a=e.setup.panning,o=a.lockAxisX,s=a.lockAxisY,l=i.positionX,c=i.positionY;if(!r)return{x:l,y:c};var d=t-r.x,u=n-r.y;return{x:o?l:d,y:s?c:u}}(e,t,n),l=s.x,c=s.y,d=GT(e,a),u=GT(e,o);e_(e,{x:l,y:c}),XT(e,l,c,d,u)}}function i_(e){if(e.isPanning){var t=e.setup.panning.velocityDisabled,n=e.velocity,r=e.wrapperComponent,i=e.contentComponent;e.isPanning=!1,e.animate=!1,e.animation=null;var a=null==r?void 0:r.getBoundingClientRect(),o=null==i?void 0:i.getBoundingClientRect(),s=(null==a?void 0:a.width)||0,l=(null==a?void 0:a.height)||0,c=(null==o?void 0:o.width)||0,d=(null==o?void 0:o.height)||0,u=s<c||l<d;!t&&n&&(null==n?void 0:n.total)>.1&&u?function(e){var t=e.velocity,n=e.bounds,r=e.setup,i=e.wrapperComponent;if(QT(e)&&t&&n&&i){var a=t.velocityX,o=t.velocityY,s=t.total,l=n.maxPositionX,c=n.minPositionX,d=n.maxPositionY,u=n.minPositionY,f=r.limitToBounds,h=r.alignmentAnimation,p=r.zoomAnimation,g=r.panning,m=g.lockAxisY,b=g.lockAxisX,v=p.animationType,y=h.sizeX,x=h.sizeY,w=h.velocityAlignmentTime,$=function(e,t){var n=e.setup.velocityAnimation,r=n.equalToMove,i=n.animationTime,a=n.sensitivity;return r?i*t*a:i}(e,s),j=Math.max($,w),S=GT(e,y),k=GT(e,x),O=S*i.offsetWidth/100,C=k*i.offsetHeight/100,D=l+O,T=c-O,_=d+C,E=u-C,M=e.transformState,I=(new Date).getTime();PT(e,v,j,(function(t){var n=e.transformState,r=n.scale,i=n.positionX,s=n.positionY,p=((new Date).getTime()-I)/w,g=1-(0,RT[h.animationType])(Math.min(1,p)),v=1-t,y=i+a*v,x=s+o*v,$=JT(y,M.positionX,i,b,f,c,l,T,D,g),j=JT(x,M.positionY,s,m,f,u,d,E,_,g);i===y&&s===x||e.setTransformState(r,$,j)}))}}(e):n_(e)}}function a_(e,t,n,r){var i=e.setup,a=i.minScale,o=i.maxScale,s=i.limitToBounds,l=UT(NT(t,2),a,o,0,!1),c=YT(e,n,r,l,WT(e,l),s);return{scale:l,positionX:c.x,positionY:c.y}}function o_(e,t,n){var r=e.transformState.scale,i=e.wrapperComponent,a=e.setup,o=a.minScale,s=a.limitToBounds,l=a.zoomAnimation,c=l.disabled,d=l.animationTime,u=l.animationType,f=c||r>=o;if((r>=1||s)&&n_(e),!f&&i&&e.mounted){var h=a_(e,o,t||i.offsetWidth/2,n||i.offsetHeight/2);h&&LT(e,h,d,u)}}var s_=function(){return s_=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},s_.apply(this,arguments)};function l_(e,t,n){if(n||2===arguments.length)for(var r,i=0,a=t.length;i<a;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}var c_=1,d_=0,u_=0,f_={disabled:!1,minPositionX:null,maxPositionX:null,minPositionY:null,maxPositionY:null,minScale:1,maxScale:8,limitToBounds:!0,centerZoomedOut:!1,centerOnInit:!1,disablePadding:!1,smooth:!0,wheel:{step:.2,disabled:!1,smoothStep:.001,wheelDisabled:!1,touchPadDisabled:!1,activationKeys:[],excluded:[]},panning:{disabled:!1,velocityDisabled:!1,lockAxisX:!1,lockAxisY:!1,allowLeftClickPan:!0,allowMiddleClickPan:!0,allowRightClickPan:!0,wheelPanning:!1,activationKeys:[],excluded:[]},pinch:{step:5,disabled:!1,excluded:[]},doubleClick:{disabled:!1,step:.7,mode:"zoomIn",animationType:"easeOut",animationTime:200,excluded:[]},zoomAnimation:{disabled:!1,size:.4,animationTime:200,animationType:"easeOut"},alignmentAnimation:{disabled:!1,sizeX:100,sizeY:100,animationTime:200,velocityAlignmentTime:400,animationType:"easeOut"},velocityAnimation:{disabled:!1,sensitivity:1,animationTime:400,animationType:"easeOut",equalToMove:!0}},h_=function(e){var t,n,r,i;return{previousScale:null!==(t=e.initialScale)&&void 0!==t?t:c_,scale:null!==(n=e.initialScale)&&void 0!==n?n:c_,positionX:null!==(r=e.initialPositionX)&&void 0!==r?r:d_,positionY:null!==(i=e.initialPositionY)&&void 0!==i?i:u_}},p_=function(e){var t=s_({},f_);return Object.keys(e).forEach((function(n){var r=void 0!==e[n];if(void 0!==f_[n]&&r){var i=Object.prototype.toString.call(f_[n]),a="[object Object]"===i,o="[object Array]"===i;t[n]=a?s_(s_({},f_[n]),e[n]):o?l_(l_([],f_[n],!0),e[n],!0):e[n]}})),t},g_=function(e,t,n){var r=e.transformState.scale,i=e.wrapperComponent,a=e.setup,o=a.maxScale,s=a.minScale,l=a.zoomAnimation,c=a.smooth,d=l.size;if(!i)throw new Error("Wrapper is not mounted");var u=c?r*Math.exp(t*n):r+t*n;return UT(NT(u,3),s,o,d,!1)};function m_(e,t,n,r,i){var a=e.wrapperComponent,o=e.transformState,s=o.scale,l=o.positionX,c=o.positionY;if(!a)return console.error("No WrapperComponent found");var d=(a.offsetWidth/2-l)/s,u=(a.offsetHeight/2-c)/s,f=a_(e,g_(e,t,n),d,u);if(!f)return console.error("Error during zoom event. New transformation state was not calculated.");LT(e,f,r,i)}function b_(e,t,n,r){var i=e.setup,a=e.wrapperComponent,o=i.limitToBounds,s=h_(e.props),l=e.transformState,c=l.scale,d=l.positionX,u=l.positionY;if(a){var f=zT(e,s.scale),h=VT(s.positionX,s.positionY,f,o,0,0,a),p={scale:s.scale,positionX:h.x,positionY:h.y};c===s.scale&&d===s.positionX&&u===s.positionY||(null==r||r(),LT(e,p,t,n))}}var v_=function(e){return function(t,n,r){void 0===t&&(t=.5),void 0===n&&(n=300),void 0===r&&(r="easeOut"),m_(e,1,t,n,r)}},y_=function(e){return function(t,n,r){void 0===t&&(t=.5),void 0===n&&(n=300),void 0===r&&(r="easeOut"),m_(e,-1,t,n,r)}},x_=function(e){return function(t,n,r,i,a){void 0===i&&(i=300),void 0===a&&(a="easeOut");var o=e.transformState,s=o.positionX,l=o.positionY,c=o.scale,d=e.wrapperComponent,u=e.contentComponent;if(!e.setup.disabled&&d&&u){var f={positionX:Number.isNaN(t)?s:t,positionY:Number.isNaN(n)?l:n,scale:Number.isNaN(r)?c:r};LT(e,f,i,a)}}},w_=function(e){return function(t,n){void 0===t&&(t=200),void 0===n&&(n="easeOut"),b_(e,t,n)}},$_=function(e){return function(t,n,r){void 0===n&&(n=200),void 0===r&&(r="easeOut");var i=e.transformState,a=e.wrapperComponent,o=e.contentComponent;if(a&&o){var s=T_(t||i.scale,a,o);LT(e,s,n,r)}}},j_=function(e){return function(t,n,r,i){void 0===r&&(r=600),void 0===i&&(i="easeOut"),BT(e);var a=e.wrapperComponent,o="string"==typeof t?document.getElementById(t):t;if(a&&o&&a.contains(o)){var s=function(e,t,n){var r=e.wrapperComponent,i=e.contentComponent,a=e.transformState,o=e.setup,s=o.limitToBounds,l=o.minScale,c=o.maxScale;if(!r||!i)return a;var d,u,f,h,p,g,m,b,v=r.getBoundingClientRect(),y=t.getBoundingClientRect(),x=(d=r,u=i,f=a,h=t.getBoundingClientRect(),p=d.getBoundingClientRect(),g=u.getBoundingClientRect(),m=p.x*f.scale,b=p.y*f.scale,{x:(h.x-g.x+m)/f.scale,y:(h.y-g.y+b)/f.scale}),w=x.x,$=x.y,j=y.width/a.scale,S=y.height/a.scale,k=r.offsetWidth/j,O=r.offsetHeight/S,C=UT(n||Math.min(k,O),l,c,0,!1),D=(v.width-j*C)/2,T=(v.height-S*C)/2,_=VT((v.left-w)*C+D,(v.top-$)*C+T,zT(e,C),s,0,0,r);return{positionX:_.x,positionY:_.y,scale:C}}(e,o,n);LT(e,s,r,i)}}},S_=function(e){return{instance:e,zoomIn:v_(e),zoomOut:y_(e),setTransform:x_(e),resetTransform:w_(e),centerView:$_(e),zoomToElement:j_(e)}},k_=function(e){var t={};return Object.assign(t,function(e){return{instance:e,state:e.transformState}}(e)),Object.assign(t,S_(e)),t};function O_(){try{return{get passive(){return!0,!1}}}catch(e){return!1}}var C_=function(e,t){return t.some((function(t){return e.matches("".concat(t,", .").concat(t,", ").concat(t," *, .").concat(t," *"))}))},D_=function(e){e&&clearTimeout(e)},T_=function(e,t,n){var r=n.offsetWidth*e,i=n.offsetHeight*e;return{scale:e,positionX:(t.offsetWidth-r)/2,positionY:(t.offsetHeight-i)/2}};function __(e,t,n){var r=t.getBoundingClientRect(),i=0,a=0;if("clientX"in e)i=(e.clientX-r.left)/n,a=(e.clientY-r.top)/n;else{var o=e.touches[0];i=(o.clientX-r.left)/n,a=(o.clientY-r.top)/n}return(Number.isNaN(i)||Number.isNaN(a))&&console.error("No mouse or touch offset found"),{x:i,y:a}}var E_=function(e){return Math.sqrt(Math.pow(e.touches[0].pageX-e.touches[1].pageX,2)+Math.pow(e.touches[0].pageY-e.touches[1].pageY,2))},M_=function(e,t){var n=e.props,r=n.onWheel,i=n.onZoom,a=e.contentComponent,o=e.setup,s=e.transformState.scale,l=o.limitToBounds,c=o.centerZoomedOut,d=o.zoomAnimation,u=o.wheel,f=o.disablePadding,h=o.smooth,p=d.size,g=d.disabled,m=u.step,b=u.smoothStep;if(!a)throw new Error("Component not mounted");t.preventDefault(),t.stopPropagation();var v=function(e,t){var n=function(e){return e?e.deltaY<0?1:-1:0}(e),r=function(e,t){return"number"==typeof e?e:t}(t,n);return r}(t,null),y=function(e,t,n,r,i){var a=e.transformState.scale,o=e.wrapperComponent,s=e.setup,l=s.maxScale,c=s.minScale,d=s.zoomAnimation,u=s.disablePadding,f=d.size,h=d.disabled;if(!o)throw new Error("Wrapper is not mounted");var p=a+t*n;if(i)return p;var g=!r&&!h;return UT(NT(p,3),c,l,f,g&&!u)}(e,v,h?b*Math.abs(t.deltaY):m,!t.ctrlKey);if(s!==y){var x=WT(e,y),w=__(t,a,s),$=l&&(g||0===p||c||f),j=YT(e,w.x,w.y,y,x,$),S=j.x,k=j.y;e.previousWheelEvent=t,e.setTransformState(y,S,k),AT(k_(e),t,r),AT(k_(e),t,i)}},I_=function(e,t){var n=e.props,r=n.onWheelStop,i=n.onZoomStop;D_(e.wheelAnimationTimer),e.wheelAnimationTimer=setTimeout((function(){e.mounted&&(o_(e,t.x,t.y),e.wheelAnimationTimer=null)}),100);var a=function(e,t){var n=e.previousWheelEvent,r=e.transformState.scale,i=e.setup,a=i.maxScale,o=i.minScale;return!!n&&(r<a||r>o||Math.sign(n.deltaY)!==Math.sign(t.deltaY)||n.deltaY>0&&n.deltaY<t.deltaY||n.deltaY<0&&n.deltaY>t.deltaY||Math.sign(n.deltaY)!==Math.sign(t.deltaY))}(e,t);a&&(D_(e.wheelStopEventTimer),e.wheelStopEventTimer=setTimeout((function(){e.mounted&&(e.wheelStopEventTimer=null,AT(k_(e),t,r),AT(k_(e),t,i))}),160))},N_=function(e,t){var n=e.contentComponent,r=e.pinchStartDistance,i=e.transformState.scale,a=e.setup,o=a.limitToBounds,s=a.centerZoomedOut,l=a.zoomAnimation,c=l.disabled,d=l.size;if(null!==r&&n){var u=function(e,t,n){var r=n.getBoundingClientRect(),i=e.touches,a=NT(i[0].clientX-r.left,5),o=NT(i[0].clientY-r.top,5);return{x:(a+NT(i[1].clientX-r.left,5))/2/t,y:(o+NT(i[1].clientY-r.top,5))/2/t}}(t,i,n);if(Number.isFinite(u.x)&&Number.isFinite(u.y)){var f=E_(t),h=function(e,t){var n=e.pinchStartScale,r=e.pinchStartDistance,i=e.setup,a=i.maxScale,o=i.minScale,s=i.zoomAnimation,l=i.disablePadding,c=s.size,d=s.disabled;if(!n||null===r||!t)throw new Error("Pinch touches distance was not provided");return t<0?e.transformState.scale:UT(NT(t/r*n,2),o,a,c,!d&&!l)}(e,f);if(h!==i){var p=WT(e,h),g=o&&(c||0===d||s),m=YT(e,u.x,u.y,h,p,g),b=m.x,v=m.y;e.pinchMidpoint=u,e.lastDistance=f,e.setTransformState(h,b,v)}}}},A_=function(e,t){var n=e.props.onZoomStop,r=e.setup.doubleClick.animationTime;D_(e.doubleClickStopEventTimer),e.doubleClickStopEventTimer=setTimeout((function(){e.doubleClickStopEventTimer=null,AT(k_(e),t,n)}),r)};function R_(e,t){var n=e.setup,r=e.doubleClickStopEventTimer,i=e.transformState,a=e.contentComponent,o=i.scale,s=e.props,l=s.onZoomStart,c=s.onZoom,d=n.doubleClick,u=d.disabled,f=d.mode,h=d.step,p=d.animationTime,g=d.animationType;if(!u&&!r){if("reset"===f)return function(e,t){var n=e.props,r=n.onZoomStart,i=n.onZoom,a=e.setup.doubleClick,o=a.animationTime,s=a.animationType;AT(k_(e),t,r),b_(e,o,s,(function(){return AT(k_(e),t,i)})),A_(e,t)}(e,t);if(!a)return console.error("No ContentComponent found");var m=function(e,t){return"toggle"===e?1===t?1:-1:"zoomOut"===e?-1:1}(f,e.transformState.scale),b=g_(e,m,h);if(o!==b){AT(k_(e),t,l);var v=__(t,a,o),y=a_(e,b,v.x,v.y);if(!y)return console.error("Error during zoom event. New transformation state was not calculated.");AT(k_(e),t,c),LT(e,y,p,g),A_(e,t)}}}var F_=function(e){var t=this;this.mounted=!0,this.onChangeCallbacks=new Set,this.onInitCallbacks=new Set,this.wrapperComponent=null,this.contentComponent=null,this.isInitialized=!1,this.bounds=null,this.previousWheelEvent=null,this.wheelStopEventTimer=null,this.wheelAnimationTimer=null,this.isPanning=!1,this.isWheelPanning=!1,this.startCoords=null,this.lastTouch=null,this.distance=null,this.lastDistance=null,this.pinchStartDistance=null,this.pinchStartScale=null,this.pinchMidpoint=null,this.doubleClickStopEventTimer=null,this.velocity=null,this.velocityTime=null,this.lastMousePosition=null,this.animate=!1,this.animation=null,this.maxBounds=null,this.pressedKeys={},this.mount=function(){t.initializeWindowEvents()},this.unmount=function(){t.cleanupWindowEvents()},this.update=function(e){t.props=e,WT(t,t.transformState.scale),t.setup=p_(e)},this.initializeWindowEvents=function(){var e,n,r=O_(),i=null===(e=t.wrapperComponent)||void 0===e?void 0:e.ownerDocument,a=null==i?void 0:i.defaultView;null===(n=t.wrapperComponent)||void 0===n||n.addEventListener("wheel",t.onWheelPanning,r),null==a||a.addEventListener("mousedown",t.onPanningStart,r),null==a||a.addEventListener("mousemove",t.onPanning,r),null==a||a.addEventListener("mouseup",t.onPanningStop,r),null==i||i.addEventListener("mouseleave",t.clearPanning,r),null==a||a.addEventListener("keyup",t.setKeyUnPressed,r),null==a||a.addEventListener("keydown",t.setKeyPressed,r)},this.cleanupWindowEvents=function(){var e,n,r=O_(),i=null===(e=t.wrapperComponent)||void 0===e?void 0:e.ownerDocument,a=null==i?void 0:i.defaultView;null==a||a.removeEventListener("mousedown",t.onPanningStart,r),null==a||a.removeEventListener("mousemove",t.onPanning,r),null==a||a.removeEventListener("mouseup",t.onPanningStop,r),null==i||i.removeEventListener("mouseleave",t.clearPanning,r),null==a||a.removeEventListener("keyup",t.setKeyUnPressed,r),null==a||a.removeEventListener("keydown",t.setKeyPressed,r),document.removeEventListener("mouseleave",t.clearPanning,r),BT(t),null===(n=t.observer)||void 0===n||n.disconnect()},this.handleInitializeWrapperEvents=function(e){var n=O_();e.addEventListener("wheel",t.onWheelZoom,n),e.addEventListener("dblclick",t.onDoubleClick,n),e.addEventListener("touchstart",t.onTouchPanningStart,n),e.addEventListener("touchmove",t.onTouchPanning,n),e.addEventListener("touchend",t.onTouchPanningStop,n)},this.handleInitialize=function(e){var n=t.setup.centerOnInit;t.applyTransformation(),t.onInitCallbacks.forEach((function(e){return e(k_(t))})),n&&(t.setCenter(),t.observer=new ResizeObserver((function(){var n,r=e.offsetWidth,i=e.offsetHeight;(r>0||i>0)&&(t.onInitCallbacks.forEach((function(e){return e(k_(t))})),t.setCenter(),null===(n=t.observer)||void 0===n||n.disconnect())})),setTimeout((function(){var e;null===(e=t.observer)||void 0===e||e.disconnect()}),5e3),t.observer.observe(e))},this.onWheelZoom=function(e){if(!t.setup.disabled){var n=function(e,t){var n=e.setup.wheel,r=n.disabled,i=n.wheelDisabled,a=n.touchPadDisabled,o=n.excluded,s=e.isInitialized,l=e.isPanning,c=t.target;return!(!s||l||r||!c||i&&!t.ctrlKey||a&&t.ctrlKey||C_(c,o))}(t,e);n&&t.isPressingKeys(t.setup.wheel.activationKeys)&&(function(e,t){var n=e.props,r=n.onWheelStart,i=n.onZoomStart;e.wheelStopEventTimer||(BT(e),AT(k_(e),t,r),AT(k_(e),t,i))}(t,e),M_(t,e),I_(t,e))}},this.onWheelPanning=function(e){var n=t.setup,r=n.disabled,i=n.wheel,a=n.panning;if(t.wrapperComponent&&t.contentComponent&&!r&&i.wheelDisabled&&!a.disabled&&a.wheelPanning&&!e.ctrlKey){e.preventDefault(),e.stopPropagation();var o=t.transformState,s=o.positionX,l=o.positionY,c=s-e.deltaX,d=l-e.deltaY,u=a.lockAxisX?s:c,f=a.lockAxisY?l:d,h=t.setup.alignmentAnimation,p=h.sizeX,g=h.sizeY,m=GT(t,p),b=GT(t,g);u===s&&f===l||XT(t,u,f,m,b)}},this.onPanningStart=function(e){var n=t.setup.disabled,r=t.props.onPanningStart;n||KT(t,e)&&t.isPressingKeys(t.setup.panning.activationKeys)&&(0!==e.button||t.setup.panning.allowLeftClickPan)&&(1!==e.button||t.setup.panning.allowMiddleClickPan)&&(2!==e.button||t.setup.panning.allowRightClickPan)&&(e.preventDefault(),e.stopPropagation(),BT(t),t_(t,e),AT(k_(t),e,r))},this.onPanning=function(e){var n=t.setup.disabled,r=t.props.onPanning;n||qT(t)&&t.isPressingKeys(t.setup.panning.activationKeys)&&(e.preventDefault(),e.stopPropagation(),r_(t,e.clientX,e.clientY),AT(k_(t),e,r))},this.onPanningStop=function(e){var n=t.props.onPanningStop;t.isPanning&&(i_(t),AT(k_(t),e,n))},this.onPinchStart=function(e){var n=t.setup.disabled,r=t.props,i=r.onPinchingStart,a=r.onZoomStart;if(!n){var o=function(e,t){var n=e.setup.pinch,r=n.disabled,i=n.excluded,a=e.isInitialized,o=t.target;return!(!a||r||!o||C_(o,i))}(t,e);o&&(function(e,t){var n=E_(t);e.pinchStartDistance=n,e.lastDistance=n,e.pinchStartScale=e.transformState.scale,e.isPanning=!1,BT(e)}(t,e),BT(t),AT(k_(t),e,i),AT(k_(t),e,a))}},this.onPinch=function(e){var n=t.setup.disabled,r=t.props,i=r.onPinching,a=r.onZoom;if(!n){var o=function(e){var t=e.setup.pinch.disabled,n=e.isInitialized,r=e.pinchStartDistance;return!(!n||t||!r)}(t);o&&(e.preventDefault(),e.stopPropagation(),N_(t,e),AT(k_(t),e,i),AT(k_(t),e,a))}},this.onPinchStop=function(e){var n,r,i=t.props,a=i.onPinchingStop,o=i.onZoomStop;t.pinchStartScale&&(r=(n=t).pinchMidpoint,n.velocity=null,n.lastDistance=null,n.pinchMidpoint=null,n.pinchStartScale=null,n.pinchStartDistance=null,o_(n,null==r?void 0:r.x,null==r?void 0:r.y),AT(k_(t),e,a),AT(k_(t),e,o))},this.onTouchPanningStart=function(e){var n=t.setup.disabled,r=t.props.onPanningStart;if(!n&&KT(t,e))if(t.lastTouch&&+new Date-t.lastTouch<200&&1===e.touches.length)t.onDoubleClick(e);else{t.lastTouch=+new Date,BT(t);var i=e.touches,a=1===i.length,o=2===i.length;a&&(BT(t),t_(t,e),AT(k_(t),e,r)),o&&t.onPinchStart(e)}},this.onTouchPanning=function(e){var n=t.setup.disabled,r=t.props.onPanning;if(t.isPanning&&1===e.touches.length){if(n)return;if(!qT(t))return;e.preventDefault(),e.stopPropagation();var i=e.touches[0];r_(t,i.clientX,i.clientY),AT(k_(t),e,r)}else e.touches.length>1&&t.onPinch(e)},this.onTouchPanningStop=function(e){t.onPanningStop(e),t.onPinchStop(e)},this.onDoubleClick=function(e){if(!t.setup.disabled){var n=function(e,t){var n=e.isInitialized,r=e.setup,i=e.wrapperComponent,a=r.doubleClick,o=a.disabled,s=a.excluded,l=t.target,c=null==i?void 0:i.contains(l);return!(!(n&&l&&c)||o||C_(l,s))}(t,e);n&&R_(t,e)}},this.clearPanning=function(e){t.isPanning&&t.onPanningStop(e)},this.setKeyPressed=function(e){t.pressedKeys[e.key]=!0},this.setKeyUnPressed=function(e){t.pressedKeys[e.key]=!1},this.isPressingKeys=function(e){return!e.length||Boolean(e.find((function(e){return t.pressedKeys[e]})))},this.setTransformState=function(e,n,r){var i=t.props.onTransformed;if(Number.isNaN(e)||Number.isNaN(n)||Number.isNaN(r))console.error("Detected NaN set state values");else{e!==t.transformState.scale&&(t.transformState.previousScale=t.transformState.scale,t.transformState.scale=e),t.transformState.positionX=n,t.transformState.positionY=r,t.applyTransformation();var a=k_(t);t.onChangeCallbacks.forEach((function(e){return e(a)})),AT(a,{scale:e,positionX:n,positionY:r},i)}},this.setCenter=function(){if(t.wrapperComponent&&t.contentComponent){var e=T_(t.transformState.scale,t.wrapperComponent,t.contentComponent);t.setTransformState(e.scale,e.positionX,e.positionY)}},this.handleTransformStyles=function(e,n,r){return t.props.customTransform?t.props.customTransform(e,n,r):function(e,t,n){return"translate(".concat(e,"px, ").concat(t,"px) scale(").concat(n,")")}(e,n,r)},this.applyTransformation=function(){if(t.mounted&&t.contentComponent){var e=t.transformState,n=e.scale,r=e.positionX,i=e.positionY,a=t.handleTransformStyles(r,i,n);t.contentComponent.style.transform=a}},this.getContext=function(){return k_(t)},this.onChange=function(e){return t.onChangeCallbacks.has(e)||t.onChangeCallbacks.add(e),function(){t.onChangeCallbacks.delete(e)}},this.onInit=function(e){return t.onInitCallbacks.has(e)||t.onInitCallbacks.add(e),function(){t.onInitCallbacks.delete(e)}},this.init=function(e,n){t.cleanupWindowEvents(),t.wrapperComponent=e,t.contentComponent=n,WT(t,t.transformState.scale),t.handleInitializeWrapperEvents(e),t.handleInitialize(n),t.initializeWindowEvents(),t.isInitialized=!0;var r=k_(t);AT(r,void 0,t.props.onInit)},this.props=e,this.setup=p_(this.props),this.transformState=h_(this.props)},B_=Y.default.createContext(null),P_=Y.default.forwardRef((function(e,n){var r=t.useRef(new F_(e)).current,i=function(e,t){return"function"==typeof e?e(t):e}(e.children,S_(r));return t.useImperativeHandle(n,(function(){return S_(r)}),[r]),t.useEffect((function(){r.update(e)}),[r,e]),Y.default.createElement(B_.Provider,{value:r},i)}));Y.default.forwardRef((function(e,n){var r,i=t.useRef(null),a=t.useContext(B_);return t.useEffect((function(){return a.onChange((function(e){if(i.current){i.current.style.transform=a.handleTransformStyles(0,0,1/e.instance.transformState.scale)}}))}),[a]),Y.default.createElement("div",s_({},e,{ref:(r=[i,n],function(e){r.forEach((function(t){"function"==typeof t?t(e):null!=t&&(t.current=e)}))})}))}));var L_="transform-component-module_wrapper__SPB86",z_="transform-component-module_content__FBWxo";!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===n&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}(".transform-component-module_wrapper__SPB86 {\n  position: relative;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  overflow: hidden;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Safari */\n  -khtml-user-select: none; /* Konqueror HTML */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none;\n  margin: 0;\n  padding: 0;\n}\n.transform-component-module_content__FBWxo {\n  display: flex;\n  flex-wrap: wrap;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin: 0;\n  padding: 0;\n  transform-origin: 0% 0%;\n}\n.transform-component-module_content__FBWxo img {\n  pointer-events: none;\n}\n");var H_=function(e){var n=e.children,r=e.wrapperClass,i=void 0===r?"":r,a=e.contentClass,o=void 0===a?"":a,s=e.wrapperStyle,l=e.contentStyle,c=e.wrapperProps,d=void 0===c?{}:c,u=e.contentProps,f=void 0===u?{}:u,h=t.useContext(B_),p=h.init,g=h.cleanupWindowEvents,m=t.useRef(null),b=t.useRef(null);return t.useEffect((function(){var e=m.current,t=b.current;return null!==e&&null!==t&&p&&(null==p||p(e,t)),function(){null==g||g()}}),[]),Y.default.createElement("div",s_({},d,{ref:m,className:"react-transform-wrapper ".concat(L_," ").concat(i),style:s}),Y.default.createElement("div",s_({},f,{ref:b,className:"react-transform-component ".concat(z_," ").concat(o),style:l}),n))};const W_=K.default.div`
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
`,V_=t=>e.jsx(W_,Object.assign({},t,{children:e.jsx(u.PlaceholderImageIcon,{})})),Y_=K.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
`,U_=K.default.img`
    height: 100%;
    width: 100%;
    object-fit: ${e=>e.$fit||"contain"};
`,K_=K.default(V_)`
    width: 100%;
    height: 100%;
`,q_=({src:n,className:r,alt:i,fit:a,placeholder:o,retrieveImageDimension:s,setDimension:l})=>{const[c,d]=t.useState(!0),[u,f]=t.useState();t.useEffect((()=>{d(!0),f(void 0);const e=new Image;e.src=n,e.onload=()=>{s&&l({src:n,width:e.width,height:e.height}),d(!1)},e.onerror=e=>{d(!1),f(e)}}),[n]);return e.jsx(Y_,Object.assign({className:r},{children:u?null!=o?o:e.jsx(K_,{}):c?e.jsx(hl,{}):e.jsx(U_,{src:n,alt:i,$fit:a})}))},X_=K.default(ss)`
    padding: 0;
    border-radius: 100%;
    background: ${ts.Neutral[8]};
    color: ${ts.Primary};
    height: 2.5rem;
    width: 2.5rem;
`,G_=K.default(X_)`
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
`,Z_=K.default(X_)`
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
`,Q_=K.default(X_)`
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
`,J_=K.default.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`,eE=K.default.div`
    user-select: none;
    position: relative;
    display: block;
    overflow: hidden;
    width: 100%;
    height: 100%;
`,tE=K.default.div`
    display: block;
    user-select: none;
    height: 100%;
    overflow: hidden;
    touch-action: pan-y;
`,nE=K.default.div`
    display: flex;
    transition: all 450ms ease-out 0s;
    position: relative;
    text-align: center;
    user-select: none;
    width: 100%;
    height: 100%;
`,rE=K.default.div`
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
`,iE=K.default(q_)`
    height: 100%;
    width: 100%;
`,aE=K.default(V_)`
    width: 60vw;
    height: auto;
    max-height: 100%;
    aspect-ratio: 4 / 3;
`,oE=K.default.div`
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
`,sE=K.default(exports.Text.XSmall)`
    display: inline-flex;
    padding: 0.25rem 1rem;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    background-color: ${ts.Neutral[8]};
    text-align: center;
`,lE=K.default.div`
    flex-shrink: 0;
    display: flex;
    overflow: auto;
    background-color: ${ts.Neutral[1]};
    padding: 1.5rem 1rem;

    ${is.MaxWidth.mobileL} {
        padding: 1rem 1.25rem;
    }
`,cE=K.default.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
`,dE=K.default.div`
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
`,uE=K.default(q_)`
    height: 100%;
    width: 100%;
`,fE=(n,r)=>{var{items:i,initialActiveItemIndex:a,hideThumbnail:o=!1,hideNavigation:s=!1,hideCounter:l=!1,hideMagnifier:c=!1,onClose:d}=n,f=X(n,["items","initialActiveItemIndex","hideThumbnail","hideNavigation","hideCounter","hideMagnifier","onClose"]);const[h,p]=t.useState(null!=a?a:0),[g,m]=t.useState({}),[b,v]=t.useState(1),[y,x]=t.useState(null),[w,$]=t.useState(null),j=t.useRef(null),S=t.useRef([]),k=t.useRef([]),O=y&&w?y-w:0;t.useImperativeHandle(r,(()=>({currentItemIndex:h,setCurrentItem:M,goToPrevItem:_,goToNextItem:E}))),fc("keydown",(function(e){"ArrowRight"===e.key?E():"ArrowLeft"===e.key?_():"Escape"===e.key&&d&&d()}),"document"),t.useEffect((()=>{var e,t;null===(t=null===(e=S.current)||void 0===e?void 0:e[h])||void 0===t||t.scrollIntoView({behavior:"smooth",inline:"center"}),v(1)}),[h]);const C=e=>{v(e.state.scale)};const D=({src:e,height:t,width:n})=>{m((r=>Object.assign(Object.assign({},r),{[e]:{height:t,width:n}})))},T=()=>{const e=g[i[h].src];if((null==j?void 0:j.current)&&e){const{clientHeight:t,clientWidth:n}=j.current,{width:r,height:i}=e,a=i/r<t/n;return r<n&&i<t?a?n/r:t/i:a?t/(i/(r/n)):n/(r/(i/t))}},_=()=>{var e,t;null===(t=null===(e=k.current)||void 0===e?void 0:e[h])||void 0===t||t.resetTransform(),p((e=>0===e?i.length-1:e-1))},E=()=>{var e,t;null===(t=null===(e=k.current)||void 0===e?void 0:e[h])||void 0===t||t.resetTransform(),p((e=>e===i.length-1?0:e+1))},M=e=>{var t,n;null===(n=null===(t=k.current)||void 0===t?void 0:t[h])||void 0===n||n.resetTransform(),p(e)};return e.jsxs(Sh,Object.assign({},f,{"data-testid":"image-carousel-modal"},{children:[e.jsx(G_,Object.assign({"aria-label":"Close image carousel",onClick:d,focusHighlight:!1},{children:e.jsx(u.CrossIcon,{"aria-hidden":!0})})),!c&&e.jsx(Z_,Object.assign({"aria-label":1===b?"Zoom in":"Zoom out",onClick:()=>{var e,t,n,r;if(1===b){const n=T();null===(t=null===(e=k.current)||void 0===e?void 0:e[h])||void 0===t||t.centerView(n),v(n)}else v(1),null===(r=null===(n=k.current)||void 0===n?void 0:n[h])||void 0===r||r.resetTransform()},focusHighlight:!1},{children:1===b?e.jsx(u.MagnifierPlusIcon,{"aria-hidden":!0}):e.jsx(u.MagnifierMinusIcon,{"aria-hidden":!0})})),e.jsxs(J_,{children:[e.jsxs(eE,{children:[!s&&e.jsxs(e.Fragment,{children:[e.jsx(Q_,Object.assign({"aria-label":"View previous image","data-testid":"prev-btn",$position:"left",onClick:_},{children:e.jsx(u.ChevronLeftIcon,{"aria-hidden":!0})})),e.jsx(Q_,Object.assign({"aria-label":"View next image","data-testid":"forward-btn",$position:"right",onClick:E},{children:e.jsx(u.ChevronRightIcon,{"aria-hidden":!0})}))]}),e.jsx(tE,Object.assign({ref:j,onTouchStart:e=>{b<=1&&x(e.touches[0].clientX)},onTouchMove:e=>{!y||b>1||$(e.touches[0].clientX)},onTouchEnd:()=>{Math.abs(O)>j.current.offsetWidth/3&&(O>0?E():_()),x(null),$(null)}},{children:e.jsx(nE,Object.assign({style:{transform:`translateX(calc(${100*-h}% - ${O}px))`}},{children:i.map(((t,n)=>{var r;return e.jsx(rE,Object.assign({"data-testid":"slide-item"},{children:e.jsx(P_,Object.assign({ref:e=>k.current[n]=e,panning:{disabled:b<=1},initialScale:1,onZoom:C,onZoomStop:C,onWheel:C},{children:e.jsx(H_,{children:e.jsx(iE,{src:t.src,alt:null!==(r=t.alt)&&void 0!==r?r:`Image ${n+1}`,placeholder:e.jsx(aE,{}),fit:"scale-down",retrieveImageDimension:!0,setDimension:D})})}))}),n)}))}))})),!l&&e.jsx(oE,{children:e.jsx(sE,Object.assign({weight:"semibold"},{children:`${h+1}/${i.length}`}))})]}),!o&&e.jsx(lE,{children:e.jsx(cE,{children:i.map(((t,n)=>{var r;const i=null!==(r=t.thumbnailSrc)&&void 0!==r?r:t.src;return e.jsx(dE,Object.assign({"data-testid":"thumbnail-item",$active:n===h,onClick:()=>M(n),ref:e=>S.current[n]=e},{children:e.jsx(uE,{src:i,alt:`Thumbnail ${n+1}`,fit:"cover"})}),n)}))})})]})]}))},hE=t.forwardRef(fE),pE=K.default.button`
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
`,gE=Y.default.forwardRef(((t,n)=>{var{children:r,imgSrc:i,selected:a,error:o,type:s="button"}=t,l=X(t,["children","imgSrc","selected","error","type"]);return e.jsxs(pE,Object.assign({ref:n,$selected:a,$error:o,type:s},l,{children:[e.jsx(gp,{src:i}),r]}))})),mE=i.css`
    height: 1.125rem;
    width: 1.125rem;
    color: ${ts.Primary};
`,bE=K.default.div`
    border-top: 1px solid ${ts.Neutral[5]};
    border-bottom: 1px solid ${ts.Neutral[5]};
`,vE=K.default(exports.Text.H3)`
    color: ${ts.Primary};
    margin-bottom: 0.5rem;
`,yE=K.default(exports.Text.Body)`
    color: ${ts.Primary};
`,xE=K.default(h.ChevronRightIcon)`
    ${mE}
`,wE=K.default.a`
    padding: 1rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 4rem;

    :not(:last-of-type) {
        border-bottom: 1px solid ${ts.Neutral[5]};
    }

    :hover {
        ${vE},
        ${yE},
        ${xE} {
            color: ${ts.PrimaryDark};
        }
    }
`,$E=K.default.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-right: 1rem;
`,jE=K.default(exports.Text.BodySmall)`
    margin-top: 0.25rem;
`,SE=K.default(Di.div)`
    overflow: hidden;
`,kE=K.default.div`
    border-top: 1px solid ${ts.Neutral[5]};
`,OE=K.default(exports.Text.H5)`
    color: ${ts.Primary};
    margin-right: 0.5rem;
`,CE=K.default(A.PlusIcon)`
    ${mE}
`,DE=K.default(N.MinusIcon)`
    ${mE}
`,TE=K.default.button`
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
        ${OE},
        ${CE},
        ${DE} {
            color: ${ts.PrimaryDark};
        }
    }
`,_E=K.default.div`
    ${e=>el({textSize:e.$textSize})}
    ${e=>e.color&&i.css`
            color: ${e.color};
        `}
`,EE=t.forwardRef(((t,n)=>{const{baseTextColor:r,baseTextSize:i,inline:a}=t,o=X(t,["baseTextColor","baseTextSize","inline"]);return e.jsx(_E,Object.assign({ref:n,as:a?"span":"div",$textSize:i,$textColor:r},o))})),ME=K.default.div`
    margin-top: 2.5rem;
    display: grid;
    align-items: center;
    width: 100%;

    ${e=>{const{numOfCols:t}=e,n=t.lg||t.md,r=t.sm?t.sm<=2?t.sm:2:void 0,a=t.md||t.sm||2;return i.css`
            grid-template-columns: repeat(${n||"auto-fill"}, 1fr);
            gap: 2rem 2rem;
            justify-items: stretch;

            ${is.MaxWidth.tablet} {
                grid-template-columns: repeat(
                    ${t.md||t.sm||"auto-fill"},
                    minmax(calc(${100/a}% - 2rem), 1fr)
                );
            }

            ${is.MaxWidth.mobileL} {
                grid-template-columns: repeat(
                    ${r||"auto-fill"},
                    minmax(calc(${100/(r||1)}% - 2rem), 1fr)
                );
            }
        `}}
`,IE=K.default.div`
    position: relative;
    ${e=>{const{startLg:t,colsLg:n,startMd:r,colsMd:a,startSm:o,colsSm:s}=e;return i.css`
            grid-column: ${t||r||"auto"} / span
                ${n||a||1};

            ${is.MaxWidth.tablet} {
                grid-column: ${r||o||"auto"} / span
                    ${a||s||1};
            }

            ${is.MaxWidth.mobileL} {
                grid-column: ${o||"auto"} / span ${s||1};
            }
        `}}
`,NE={Grid:Y.default.forwardRef(((t,n)=>{const{children:r}=t,i=X(t,["children"]);return e.jsx(ME,Object.assign({ref:n},i,{children:r}))})),Tile:Y.default.forwardRef(((t,n)=>{const{children:r}=t,i=X(t,["children"]);return e.jsx(IE,Object.assign({ref:n},i,{children:r}))}))},AE=K.default.div`
    background: hsl(0, 0%, 94%);
    padding: 0 0.5rem;

    ${is.MaxWidth.mobileL} {
        padding: 0;
    }
`,RE=()=>{t.useEffect((()=>{n()||r()}),[]);const n=()=>document.getElementById(FE),r=()=>{if(!document.getElementById(FE)){const e=document.createElement("script");e.id=FE,e.type="module",e.src=BE,document.head.appendChild(e)}};return e.jsx(AE,{dangerouslySetInnerHTML:{__html:"<sgds-masthead></sgds-masthead>"}})},FE="lifesg-ds-masthead-script",BE="https://cdn.jsdelivr.net/npm/@govtechsg/sgds-web-component/Masthead/index.js",PE={notCompress:6,compress:4},LE=K.default.div`
    position: ${e=>e.$fixed?"sticky":"relative"};
    background-color: white;
    z-index: 30;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`,zE=K.default.nav`
    height: ${e=>e.$compress?PE.compress:PE.notCompress}rem;
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
`,HE=K.default.div`
    display: flex;
    height: 100%;
    margin-left: ${e=>e.$hideNavBranding?"0":"5rem"};
    flex: 1;
    justify-content: flex-end;

    ${is.MaxWidth.tablet} {
        margin-left: 0rem;
    }
`,WE=K.default(ss)`
    display: none;

    ${is.MaxWidth.tablet} {
        display: flex;
        padding: 0 1.5rem;
        margin-right: -1.5rem;
    }
`,VE=K.default(R.MenuIcon)`
    height: 1.5rem;
    width: 1.5rem;
    color: ${ts.Neutral[1]};
`,YE=K.default.div`
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
`,UE=K.default.div`
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
`,KE=K.default.a`
    display: flex;
    justify-content: center;
    height: 100%;

    img {
        width: auto;
        height: 100%;
        transition: ${Ss.Base};
        object-fit: contain;
    }
`,qE=({resources:t,onClick:n,"data-id":r,"data-testid":i="navbar-brand",type:a})=>e.jsx(KE,Object.assign({role:"link",onClick:e=>{n&&n(e,a)},tabIndex:0,"data-id":r,"data-testid":i,$type:a},{children:e.jsx(gp,{src:t.logoSrc,alt:t.brandName})})),XE=K.default.div`
    display: none;

    ${is.MaxWidth.tablet} {
        display: flex;
    }
`,GE=K.default.div`
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
`,ZE=K.default.div`
    display: flex;
    flex-direction: column;
`,QE=K.default.div`
    display: flex;
    justify-content: space-between;
    position: relative;
    padding: 2.5rem 1.25rem 2rem;
`,JE=K.default(m.CrossIcon)`
    height: 1.5rem;
    width: 1.5rem;
    margin-right: -0.25rem;
`,eM=K.default(ss)`
    position: absolute;
    right: -0.25rem;
    bottom: 0.65rem;
    color: ${ts.Neutral[1]};

    :active,
    :focus {
        color: ${ts.Primary};
    }
`,tM=Y.default.forwardRef(((n,r)=>{const{show:i,resources:a,children:o,hideNavBranding:s,onClose:l,onBrandClick:c}=n,[d,u]=t.useState(0),{primary:f,secondary:h}=a;t.useEffect((()=>(p(),window.addEventListener("resize",p),()=>{window.removeEventListener("resize",p)})),[]);const p=()=>{if(window){const e=.01*window.innerHeight;u(e)}};return e.jsx(XE,Object.assign({ref:r,"data-testid":"drawer"},{children:e.jsx(GE,Object.assign({$show:i,$viewHeight:d},{children:e.jsxs(ZE,{children:[e.jsxs(QE,{children:[e.jsx(YE,Object.assign({"data-id":"drawer-brand-container"},{children:!s&&e.jsxs(e.Fragment,{children:[e.jsx(qE,{resources:f,compress:!0,onClick:c,"data-id":"drawer-brand-primary","data-testid":"drawer__brand",type:"primary"}),h&&e.jsxs(e.Fragment,{children:[e.jsx(UE,{}),e.jsx(qE,{resources:h,compress:!0,onClick:c,"data-id":"drawer-brand-secondary","data-testid":"drawer__brand-secondary",type:"secondary"})]})]})})),e.jsx(eM,Object.assign({onClick:l,focusHighlight:!1,"aria-label":"Close nav menu"},{children:e.jsx(JE,{})}))]}),o]})}))}))})),nM={primary:{brandName:"LifeSG",logoSrc:"https://assets.life.gov.sg/lifesg/logo-lifesg.svg"}},rM={primary:{brandName:"BookingSG",logoSrc:"https://www.booking.gov.sg/logo.svg"}},iM={primary:{brandName:"MyLegacy",logoSrc:"https://assets.life.gov.sg/ccube/logo-ccube.svg"}},aM={primary:{brandName:"CCube",logoSrc:"https://mylegacy.life.gov.sg/images/site-logo.png"}},oM=K.default.ul`
    display: flex;
    list-style: none;
    margin-left: 4rem;
    flex-shrink: 0;

    ${is.MaxWidth.tablet} {
        display: none;
    }
`,sM=K.default.ul`
    display: none;

    ${is.MaxWidth.tablet} {
        display: flex;
        list-style: none;
        margin-left: 4rem;
        flex-shrink: 0;
    }
`,lM=K.default.ul`
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
`,cM=K.default.li`
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
`,dM=K.default(qs.Small)`
    ${is.MaxWidth.tablet} {
        width: 100%;
        padding: 0.685rem 1rem;
    }
`,uM=K.default.div`
    display: none;

    ${is.MaxWidth.tablet} {
        display: flex;
        flex-direction: column;
        margin-top: 2.5rem;
    }
`,fM=K.default(exports.Text.BodySmall)`
    margin-bottom: 0.5rem;
`,hM=K.default.div`
    display: flex;
`,pM=K.default.a`
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
`,gM=({actionButtons:t,mobile:n=!1,onActionButtonClick:r})=>{const i=e=>{e.stopPropagation()},a=e=>t=>{t.stopPropagation(),"download"===e.type&&window.scrollTo({left:0,top:document.body.scrollHeight,behavior:"smooth"}),r(t,e)},o=(t,n)=>{const r=t?(e=>{const t=sj(e,(e=>"download"===e.type));if(t>-1){const n=[...e],r=n.splice(t,1);return[...n,r[0]]}return e})(n):n;return r.map(((n,r)=>{let o;switch(n.type){case"download":o=t?(s=n.args,e.jsxs(uM,{children:[e.jsx(fM,Object.assign({weight:"semibold"},{children:s&&s.children||"Download the app"})),e.jsxs(hM,{children:[e.jsx(pM,Object.assign({href:"https://apps.apple.com/sg/app/moments-of-life/id1383218758",target:"_blank",rel:"noopener noreferrer","data-testid":"button__app-store",onClick:i},{children:e.jsx("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/apple-app-store.png",alt:"apple-app-store"})})),e.jsx(pM,Object.assign({href:"https://play.google.com/store/apps/details?id=sg.gov.app.mol&hl=en_SG",target:"_blank",rel:"noopener noreferrer","data-testid":"button__play-store",onClick:i},{children:e.jsx("img",{src:"https://assets.life.gov.sg/react-design-system/img/download/google-play-store.png",alt:"google-play-store"})}))]})]})):e.jsx(dM,Object.assign({},n.args,{type:"button",onClick:a(n),"data-testid":"action-button__download"},{children:"Download the app"}));break;case"button":{const i=n.args["data-testid"]?`action-button__${n.args["data-testid"]}`:`action-button__button-${t?"mobile-":""}${r+1}`;o=e.jsx(dM,Object.assign({},n.args,{type:"button",onClick:a(n),"data-testid":i}));break}case"component":{const e=n.args;o=e&&e.render||null;break}default:o=null}var s;if(o)return e.jsx(cM,Object.assign({$mobile:t},{children:o}),`action-button-${r+1}`)}))};if(t){const r=(null==t?void 0:t.mobile)||t.desktop,i=r.filter((e=>!!e.uncollapsible)),a=r.filter((e=>!e.uncollapsible));return n?e.jsx(e.Fragment,{children:a.length>0&&e.jsx(lM,{children:o(n,a)})}):e.jsxs(e.Fragment,{children:[i.length>0&&e.jsx(sM,{children:o(!1,i)}),t.desktop.length>0&&e.jsx(oM,{children:o(n,t.desktop)})]})}return e.jsx(e.Fragment,{})},mM=K.default.ul`
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
    box-shadow: ${Ys.ElevationBoxShadow};
`,bM=K.default.ul`
    display: none;
    list-style: none;

    ${is.MaxWidth.tablet} {
        border-left: 0.25rem solid ${ts.Primary};
        display: flex;
        flex-direction: column;
    }
`,vM=K.default(exports.Text.Hyperlink.Small)`
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
`,yM=K.default.li`
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
`,xM=({items:t,mobile:n=!1,onItemClick:r})=>{const i=e=>t=>{t.stopPropagation(),r(t,e)},a=(n=!1)=>t.map(((t,r)=>{const{children:a,options:o}=t,s=X(t,["children","options"]),l=n?`link__mobile-${r+1}`:`link__${r+1}`;return e.jsx(yM,{children:e.jsx(vM,Object.assign({"data-testid":l,weight:"bold"},s,{onClick:i(t)},o,{children:a}))},r)}));if(t&&t.length>0){const t=n?bM:mM;return e.jsx(t,{children:a(n)})}return e.jsx(e.Fragment,{})},wM=K.default.ul`
    display: flex;
    list-style: none;
    position: relative;

    ${e=>e.$alignLeft&&"margin-right: auto;"}

    ${is.MaxWidth.tablet} {
        display: none;
    }
`,$M=K.default.ul`
    display: none;
    list-style: none;

    ${is.MaxWidth.tablet} {
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
`,jM=K.default.li`
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
`,SM=K.default(exports.Text.Hyperlink.Small)`
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
`,kM=K.default.div`
    flex: 1;
    margin-top: 0.25rem;

    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    white-space: pre-wrap;
`,OM=K.default.div`
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
`,CM=K.default.div`
    padding-left: 0.5rem;
    margin-right: -0.5rem;
`,DM=K.default(ss)`
    padding: 0.5rem;
    transform: rotate(${e=>e.$selected?0:180}deg);
    transition: transform 300ms ease-in-out;
    margin: auto 0.25rem auto 0;
`,TM=K.default(r.ChevronUpIcon)`
    height: 1.25rem;
    width: 1.25rem;
    color: ${ts.Neutral[3]};
    :hover {
        color: ${ts.Neutral[1]};
    }
`,_M=({items:n,selectedId:r,mobile:i=!1,hideNavBranding:a,onItemClick:o})=>{const[s,l]=t.useState(-1),[c,d]=t.useState(!1),u=t.useRef(null);t.useEffect((()=>{const e=e=>{u.current&&!u.current.contains(e.target)&&f()};return document.addEventListener("click",e,!0),()=>{document.removeEventListener("click",e,!0)}}),[]);const f=()=>{d(!1)},h=(e,t)=>n=>{n.stopPropagation(),l(t),d(!0),o(n,e)},p=(e,t)=>{e.stopPropagation(),o(e,t),d(!1)},g=()=>n.map(((t,n)=>{if("component"===t.itemType){const r=t&&t.children||null;return e.jsx("li",{children:r},n)}{const o=(e=>{if(e.id===r)return!0;if((null==e?void 0:e.subMenu)&&e.subMenu.length>=1)return!!e.subMenu.find((e=>e.id===r));return!1})(t),{children:l,options:d}=t,u=X(t,["children","options"]),f=o?i?"bold":"semibold":"regular",g=i?`link__mobile-${n+1}`:`link__${n+1}`,m=s>=0&&s===n&&c;return e.jsxs(jM,Object.assign({$hiddenBranding:a},{children:[e.jsxs(SM,Object.assign({"data-testid":g,weight:f,$selected:o},u,{onClick:h(t,n)},d,{children:[e.jsx(kM,{children:l}),o&&e.jsx(OM,{"data-testid":`${g}-indicator`}),i&&t.subMenu&&e.jsx(CM,{children:e.jsx(DM,Object.assign({"data-testid":`${g}-expand-collapse-button`,$selected:m,focusHighlight:!1,focusOutline:"browser","aria-label":m?"Collapse":"Expand"},{children:e.jsx(TM,{})}))})]})),m&&e.jsx(xM,{items:t.subMenu,mobile:i,onItemClick:p})]}),n)}}));return n&&n.length>0?i?e.jsx($M,Object.assign({ref:u},{children:g()})):e.jsx(wM,Object.assign({ref:u,$alignLeft:a},{children:g()})):e.jsx(e.Fragment,{})},EM=t.forwardRef(((n,r)=>{var{items:a,className:o,id:s,selectedId:l,compress:c=!1,fixed:d=!0,resources:u,hideNavElements:f=!1,hideNavBranding:h=!1,drawerDismissalExclusions:p=[],actionButtons:g,onItemClick:m,onActionButtonClick:b,onBrandClick:v,masthead:y=!0,layout:x="default"}=n,w=X(n,["items","className","id","selectedId","compress","fixed","resources","hideNavElements","hideNavBranding","drawerDismissalExclusions","actionButtons","onItemClick","onActionButtonClick","onBrandClick","masthead","layout"]);const[$,j]=t.useState(!1),[S,k]=t.useState(!1),O="stretch"===x,C=t.useRef(),D=i.useTheme(),T=(e=>{switch(e){case"bookingsg":return rM;case"mylegacy":return aM;case"ccube":return iM;default:return nM}})(null==D?void 0:D.resourceScheme),_=(null==u?void 0:u.primary)||T.primary,E=null==u?void 0:u.secondary;t.useImperativeHandle(r,(()=>Object.assign(C.current,{dismissDrawer:()=>{M()}})),[$]),t.useEffect((()=>(N(),window.addEventListener("resize",N),()=>{window.removeEventListener("resize",N)})),[]);const M=()=>{j(!1),setTimeout((()=>{k(!1)}),550)},I=e=>$&&-1===p.indexOf(e),N=()=>{window.innerWidth<=ns.tablet&&$&&M()},A=(e,t)=>{v&&(e.preventDefault(),v(t)),I("brand-click")&&M()},R=(e,t)=>{t.onClick?t.onClick(e):m&&(e.preventDefault(),m(t)),!(null==t?void 0:t.subMenu)&&I("item-click")&&M()},F=(e,t)=>{t.args&&t.args.onClick?t.args.onClick(e):b&&(e.preventDefault(),b(t)),I("item-click")&&M()},B=()=>{j(!0),k(!0)},P=()=>{I("close-button-click")&&M()},L=()=>{const t=a.mobile||a.desktop;return t&&t.length>0||g&&(()=>{const e=g.mobile||g.desktop;return!!e&&e.length&&e.some((e=>!e.uncollapsible))})()?e.jsx(WE,Object.assign({"aria-label":"Open nav menu","data-testid":"button__mobile-menu",onClick:B,focusHighlight:!1},{children:e.jsx(VE,{})})):null};return e.jsxs(LE,Object.assign({ref:C,$fixed:d,className:o,id:s||"navbar-wrapper","data-testid":w["data-testid"]||"navbar-wrapper"},{children:[y&&e.jsx(RE,{}),e.jsxs(uy.Content,Object.assign({stretch:O},{children:[e.jsxs(zE,Object.assign({$compress:c},{children:[!h&&e.jsxs(YE,Object.assign({$compress:c,"data-id":"brand-container"},{children:[e.jsx(qE,{resources:_,onClick:A,"data-id":"brand-primary","data-testid":"main__brand",type:"primary"}),E&&e.jsxs(e.Fragment,{children:[e.jsx(UE,{$compress:c}),e.jsx(qE,{resources:E,onClick:A,"data-id":"brand-secondary","data-testid":"main__brand-secondary",type:"secondary"})]})]})),!f&&e.jsxs(HE,Object.assign({$hideNavBranding:h},{children:[e.jsx(_M,{items:a.desktop,onItemClick:R,selectedId:l,hideNavBranding:h}),e.jsx(gM,{actionButtons:g,onActionButtonClick:F}),L()]}))]})),!f&&e.jsx(sh,Object.assign({show:S,enableOverlayClick:!0,onOverlayClick:P},{children:e.jsxs(tM,Object.assign({show:$,resources:{primary:_,secondary:E},onClose:P,onBrandClick:A,actionButtons:g,hideNavBranding:h},{children:[e.jsx(_M,{items:a.mobile||a.desktop,onItemClick:R,selectedId:l,mobile:!0}),e.jsx(gM,{actionButtons:g,onActionButtonClick:F,mobile:!0})]}))}))]}))]}))})),MM=PE,IM=i.css`
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
`,NM=K.default.div`
    position: ${e=>e.$sticky?"sticky":"relative"};
    left: 0;
    top: 0;
    width: 100%;
    transition: ${Ss.Base};
    background: ${ts.Neutral[2]};
    z-index: 25;
    cursor: ${e=>e.$clickable?"pointer":"default"};
`,AM=K.default(uy.Content)`
    display: flex;
`,RM=K.default.div`
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1.5rem 0;
`,FM=K.default.div`
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
        ${IM}
    }

    ${e=>{const t="linear-gradient(to bottom, black 50%, transparent 100%)";if(e.$maxCollapsedHeight)return i.css`
                max-height: ${e.$maxCollapsedHeight}px;
                overflow: hidden;
                -webkit-mask-image: ${t};
                mask-image: ${t};
            `}}
`,BM=K.default(exports.Text.Hyperlink.Default)`
    position: relative;

    ${IM}
`,PM=K.default(ss)`
    margin-right: -1.5rem;
    padding-left: 1rem;
    height: max-content;
`,LM=K.default(m.CrossIcon)`
    height: 1.875rem;
    width: 1.875rem;
    color: ${ts.Neutral[8]};
`,zM=K.default.button`
    display: flex;
    align-items: center;
    gap: 0.25rem;

    margin-top: 0.5rem;

    border: none;
    background: transparent;
    color: ${ts.Validation.Orange.Icon};
    ${ys.getTextStyle("BodySmall","semibold")};

    cursor: pointer;
`,HM=K.default.button`
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`,WM=n=>{var{children:r,visible:i=!0,dismissible:a=!0,sticky:o=!0,onDismiss:s,id:l,forwardedRef:c,maxCollapsedHeight:d,onClick:u,actionButton:f}=n,h=X(n,["children","visible","dismissible","sticky","onDismiss","id","forwardedRef","maxCollapsedHeight","onClick","actionButton"]);const p=h["data-testid"],[g,m]=t.useState(i),{height:b,ref:v}=qe();t.useEffect((()=>{m(i)}),[i]);const y=e=>{e.stopPropagation(),m(!1),a&&s&&s()},x=e=>{f.onClick&&(e.stopPropagation(),f.onClick(e))};if(!g)return null;return e.jsxs(NM,Object.assign({ref:c,$sticky:o,$clickable:!!u,onClick:u},h,{children:[e.jsxs(AM,Object.assign({id:VM("container",l)},{children:[e.jsxs(RM,{children:[e.jsx(FM,Object.assign({"data-testid":VM("text-content",p),$maxCollapsedHeight:d&&b>d?d:void 0},{children:e.jsx("div",Object.assign({ref:v},{children:r}))})),f&&e.jsx(zM,Object.assign({id:VM("action-button",l),"data-testid":VM("action-button",p),type:"button"},f,{onClick:x},{children:f.children}))]}),a&&e.jsx(PM,Object.assign({onClick:y,id:VM("dismiss-button",l),"data-testid":VM("dismiss-button",p),focusHighlight:!1,type:"button","aria-label":"Dismiss notification"},{children:e.jsx(LM,{"aria-hidden":!0})}))]})),u&&e.jsx(HM,{"aria-label":"Clickable banner",type:"button"})]}))},VM=(e,t="wrapper")=>`${t}-${e}`,YM=Y.default.forwardRef(((t,n)=>e.jsx(WM,Object.assign({},t,{forwardedRef:n})))),UM=Object.assign(YM,{Link:BM});var KM={exports:{}};
/*! @license DOMPurify 2.5.5 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.5.5/LICENSE */KM.exports=function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,n){return t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},t(e,n)}function n(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function r(e,i,a){return r=n()?Reflect.construct:function(e,n,r){var i=[null];i.push.apply(i,n);var a=new(Function.bind.apply(e,i));return r&&t(a,r.prototype),a},r.apply(null,arguments)}function i(e){return a(e)||o(e)||s(e)||c()}function a(e){if(Array.isArray(e))return l(e)}function o(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function s(e,t){if(e){if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var d=Object.hasOwnProperty,u=Object.setPrototypeOf,f=Object.isFrozen,h=Object.getPrototypeOf,p=Object.getOwnPropertyDescriptor,g=Object.freeze,m=Object.seal,b=Object.create,v="undefined"!=typeof Reflect&&Reflect,y=v.apply,x=v.construct;y||(y=function(e,t,n){return e.apply(t,n)}),g||(g=function(e){return e}),m||(m=function(e){return e}),x||(x=function(e,t){return r(e,i(t))});var w=M(Array.prototype.forEach),$=M(Array.prototype.pop),j=M(Array.prototype.push),S=M(String.prototype.toLowerCase),k=M(String.prototype.toString),O=M(String.prototype.match),C=M(String.prototype.replace),D=M(String.prototype.indexOf),T=M(String.prototype.trim),_=M(RegExp.prototype.test),E=I(TypeError);function M(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return y(e,t,r)}}function I(e){return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return x(e,n)}}function N(e,t,n){var r;n=null!==(r=n)&&void 0!==r?r:S,u&&u(e,null);for(var i=t.length;i--;){var a=t[i];if("string"==typeof a){var o=n(a);o!==a&&(f(t)||(t[i]=o),a=o)}e[a]=!0}return e}function A(e){var t,n=b(null);for(t in e)!0===y(d,e,[t])&&(n[t]=e[t]);return n}function R(e,t){for(;null!==e;){var n=p(e,t);if(n){if(n.get)return M(n.get);if("function"==typeof n.value)return M(n.value)}e=h(e)}function r(e){return console.warn("fallback value for",e),null}return r}var F=g(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),B=g(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),P=g(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),L=g(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),z=g(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),H=g(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),W=g(["#text"]),V=g(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),Y=g(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),U=g(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),K=g(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),q=m(/\{\{[\w\W]*|[\w\W]*\}\}/gm),X=m(/<%[\w\W]*|[\w\W]*%>/gm),G=m(/\${[\w\W]*}/gm),Z=m(/^data-[\-\w.\u00B7-\uFFFF]/),Q=m(/^aria-[\-\w]+$/),J=m(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),ee=m(/^(?:\w+script|data):/i),te=m(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),ne=m(/^html$/i),re=m(/^[a-z][.\w]*(-[.\w]+)+$/i),ie=function(){return"undefined"==typeof window?null:window},ae=function(t,n){if("object"!==e(t)||"function"!=typeof t.createPolicy)return null;var r=null,i="data-tt-policy-suffix";n.currentScript&&n.currentScript.hasAttribute(i)&&(r=n.currentScript.getAttribute(i));var a="dompurify"+(r?"#"+r:"");try{return t.createPolicy(a,{createHTML:function(e){return e},createScriptURL:function(e){return e}})}catch(e){return console.warn("TrustedTypes policy "+a+" could not be created."),null}};function oe(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie(),n=function(e){return oe(e)};if(n.version="2.5.5",n.removed=[],!t||!t.document||9!==t.document.nodeType)return n.isSupported=!1,n;var r=t.document,a=t.document,o=t.DocumentFragment,s=t.HTMLTemplateElement,l=t.Node,c=t.Element,d=t.NodeFilter,u=t.NamedNodeMap,f=void 0===u?t.NamedNodeMap||t.MozNamedAttrMap:u,h=t.HTMLFormElement,p=t.DOMParser,m=t.trustedTypes,b=c.prototype,v=R(b,"cloneNode"),y=R(b,"nextSibling"),x=R(b,"childNodes"),M=R(b,"parentNode");if("function"==typeof s){var I=a.createElement("template");I.content&&I.content.ownerDocument&&(a=I.content.ownerDocument)}var se=ae(m,r),le=se?se.createHTML(""):"",ce=a,de=ce.implementation,ue=ce.createNodeIterator,fe=ce.createDocumentFragment,he=ce.getElementsByTagName,pe=r.importNode,ge={};try{ge=A(a).documentMode?a.documentMode:{}}catch(e){}var me={};n.isSupported="function"==typeof M&&de&&void 0!==de.createHTMLDocument&&9!==ge;var be,ve,ye=q,xe=X,we=G,$e=Z,je=Q,Se=ee,ke=te,Oe=re,Ce=J,De=null,Te=N({},[].concat(i(F),i(B),i(P),i(z),i(W))),_e=null,Ee=N({},[].concat(i(V),i(Y),i(U),i(K))),Me=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Ie=null,Ne=null,Ae=!0,Re=!0,Fe=!1,Be=!0,Pe=!1,Le=!0,ze=!1,He=!1,We=!1,Ve=!1,Ye=!1,Ue=!1,Ke=!0,qe=!1,Xe="user-content-",Ge=!0,Ze=!1,Qe={},Je=null,et=N({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),tt=null,nt=N({},["audio","video","img","source","image","track"]),rt=null,it=N({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),at="http://www.w3.org/1998/Math/MathML",ot="http://www.w3.org/2000/svg",st="http://www.w3.org/1999/xhtml",lt=st,ct=!1,dt=null,ut=N({},[at,ot,st],k),ft=["application/xhtml+xml","text/html"],ht="text/html",pt=null,gt=a.createElement("form"),mt=function(e){return e instanceof RegExp||e instanceof Function},bt=function(t){pt&&pt===t||(t&&"object"===e(t)||(t={}),t=A(t),be=be=-1===ft.indexOf(t.PARSER_MEDIA_TYPE)?ht:t.PARSER_MEDIA_TYPE,ve="application/xhtml+xml"===be?k:S,De="ALLOWED_TAGS"in t?N({},t.ALLOWED_TAGS,ve):Te,_e="ALLOWED_ATTR"in t?N({},t.ALLOWED_ATTR,ve):Ee,dt="ALLOWED_NAMESPACES"in t?N({},t.ALLOWED_NAMESPACES,k):ut,rt="ADD_URI_SAFE_ATTR"in t?N(A(it),t.ADD_URI_SAFE_ATTR,ve):it,tt="ADD_DATA_URI_TAGS"in t?N(A(nt),t.ADD_DATA_URI_TAGS,ve):nt,Je="FORBID_CONTENTS"in t?N({},t.FORBID_CONTENTS,ve):et,Ie="FORBID_TAGS"in t?N({},t.FORBID_TAGS,ve):{},Ne="FORBID_ATTR"in t?N({},t.FORBID_ATTR,ve):{},Qe="USE_PROFILES"in t&&t.USE_PROFILES,Ae=!1!==t.ALLOW_ARIA_ATTR,Re=!1!==t.ALLOW_DATA_ATTR,Fe=t.ALLOW_UNKNOWN_PROTOCOLS||!1,Be=!1!==t.ALLOW_SELF_CLOSE_IN_ATTR,Pe=t.SAFE_FOR_TEMPLATES||!1,Le=!1!==t.SAFE_FOR_XML,ze=t.WHOLE_DOCUMENT||!1,Ve=t.RETURN_DOM||!1,Ye=t.RETURN_DOM_FRAGMENT||!1,Ue=t.RETURN_TRUSTED_TYPE||!1,We=t.FORCE_BODY||!1,Ke=!1!==t.SANITIZE_DOM,qe=t.SANITIZE_NAMED_PROPS||!1,Ge=!1!==t.KEEP_CONTENT,Ze=t.IN_PLACE||!1,Ce=t.ALLOWED_URI_REGEXP||Ce,lt=t.NAMESPACE||st,Me=t.CUSTOM_ELEMENT_HANDLING||{},t.CUSTOM_ELEMENT_HANDLING&&mt(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(Me.tagNameCheck=t.CUSTOM_ELEMENT_HANDLING.tagNameCheck),t.CUSTOM_ELEMENT_HANDLING&&mt(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(Me.attributeNameCheck=t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),t.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(Me.allowCustomizedBuiltInElements=t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Pe&&(Re=!1),Ye&&(Ve=!0),Qe&&(De=N({},i(W)),_e=[],!0===Qe.html&&(N(De,F),N(_e,V)),!0===Qe.svg&&(N(De,B),N(_e,Y),N(_e,K)),!0===Qe.svgFilters&&(N(De,P),N(_e,Y),N(_e,K)),!0===Qe.mathMl&&(N(De,z),N(_e,U),N(_e,K))),t.ADD_TAGS&&(De===Te&&(De=A(De)),N(De,t.ADD_TAGS,ve)),t.ADD_ATTR&&(_e===Ee&&(_e=A(_e)),N(_e,t.ADD_ATTR,ve)),t.ADD_URI_SAFE_ATTR&&N(rt,t.ADD_URI_SAFE_ATTR,ve),t.FORBID_CONTENTS&&(Je===et&&(Je=A(Je)),N(Je,t.FORBID_CONTENTS,ve)),Ge&&(De["#text"]=!0),ze&&N(De,["html","head","body"]),De.table&&(N(De,["tbody"]),delete Ie.tbody),g&&g(t),pt=t)},vt=N({},["mi","mo","mn","ms","mtext"]),yt=N({},["foreignobject","annotation-xml"]),xt=N({},["title","style","font","a","script"]),wt=N({},B);N(wt,P),N(wt,L);var $t=N({},z);N($t,H);var jt=function(e){var t=M(e);t&&t.tagName||(t={namespaceURI:lt,tagName:"template"});var n=S(e.tagName),r=S(t.tagName);return!!dt[e.namespaceURI]&&(e.namespaceURI===ot?t.namespaceURI===st?"svg"===n:t.namespaceURI===at?"svg"===n&&("annotation-xml"===r||vt[r]):Boolean(wt[n]):e.namespaceURI===at?t.namespaceURI===st?"math"===n:t.namespaceURI===ot?"math"===n&&yt[r]:Boolean($t[n]):e.namespaceURI===st?!(t.namespaceURI===ot&&!yt[r])&&!(t.namespaceURI===at&&!vt[r])&&!$t[n]&&(xt[n]||!wt[n]):!("application/xhtml+xml"!==be||!dt[e.namespaceURI]))},St=function(e){j(n.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){try{e.outerHTML=le}catch(t){e.remove()}}},kt=function(e,t){try{j(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){j(n.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!_e[e])if(Ve||Ye)try{St(t)}catch(e){}else try{t.setAttribute(e,"")}catch(e){}},Ot=function(e){var t,n;if(We)e="<remove></remove>"+e;else{var r=O(e,/^[\r\n\t ]+/);n=r&&r[0]}"application/xhtml+xml"===be&&lt===st&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");var i=se?se.createHTML(e):e;if(lt===st)try{t=(new p).parseFromString(i,be)}catch(e){}if(!t||!t.documentElement){t=de.createDocument(lt,"template",null);try{t.documentElement.innerHTML=ct?le:i}catch(e){}}var o=t.body||t.documentElement;return e&&n&&o.insertBefore(a.createTextNode(n),o.childNodes[0]||null),lt===st?he.call(t,ze?"html":"body")[0]:ze?t.documentElement:o},Ct=function(e){return ue.call(e.ownerDocument||e,e,d.SHOW_ELEMENT|d.SHOW_COMMENT|d.SHOW_TEXT|d.SHOW_PROCESSING_INSTRUCTION|d.SHOW_CDATA_SECTION,null,!1)},Dt=function(e){return e instanceof h&&("string"!=typeof e.nodeName||"string"!=typeof e.textContent||"function"!=typeof e.removeChild||!(e.attributes instanceof f)||"function"!=typeof e.removeAttribute||"function"!=typeof e.setAttribute||"string"!=typeof e.namespaceURI||"function"!=typeof e.insertBefore||"function"!=typeof e.hasChildNodes)},Tt=function(t){return"object"===e(l)?t instanceof l:t&&"object"===e(t)&&"number"==typeof t.nodeType&&"string"==typeof t.nodeName},_t=function(e,t,r){me[e]&&w(me[e],(function(e){e.call(n,t,r,pt)}))},Et=function(e){var t;if(_t("beforeSanitizeElements",e,null),Dt(e))return St(e),!0;if(_(/[\u0080-\uFFFF]/,e.nodeName))return St(e),!0;var r=ve(e.nodeName);if(_t("uponSanitizeElement",e,{tagName:r,allowedTags:De}),e.hasChildNodes()&&!Tt(e.firstElementChild)&&(!Tt(e.content)||!Tt(e.content.firstElementChild))&&_(/<[/\w]/g,e.innerHTML)&&_(/<[/\w]/g,e.textContent))return St(e),!0;if("select"===r&&_(/<template/i,e.innerHTML))return St(e),!0;if(7===e.nodeType)return St(e),!0;if(Le&&8===e.nodeType&&_(/<[/\w]/g,e.data))return St(e),!0;if(!De[r]||Ie[r]){if(!Ie[r]&&It(r)){if(Me.tagNameCheck instanceof RegExp&&_(Me.tagNameCheck,r))return!1;if(Me.tagNameCheck instanceof Function&&Me.tagNameCheck(r))return!1}if(Ge&&!Je[r]){var i=M(e)||e.parentNode,a=x(e)||e.childNodes;if(a&&i)for(var o=a.length-1;o>=0;--o){var s=v(a[o],!0);s.__removalCount=(e.__removalCount||0)+1,i.insertBefore(s,y(e))}}return St(e),!0}return e instanceof c&&!jt(e)?(St(e),!0):"noscript"!==r&&"noembed"!==r&&"noframes"!==r||!_(/<\/no(script|embed|frames)/i,e.innerHTML)?(Pe&&3===e.nodeType&&(t=e.textContent,t=C(t,ye," "),t=C(t,xe," "),t=C(t,we," "),e.textContent!==t&&(j(n.removed,{element:e.cloneNode()}),e.textContent=t)),_t("afterSanitizeElements",e,null),!1):(St(e),!0)},Mt=function(e,t,n){if(Ke&&("id"===t||"name"===t)&&(n in a||n in gt))return!1;if(Re&&!Ne[t]&&_($e,t));else if(Ae&&_(je,t));else if(!_e[t]||Ne[t]){if(!(It(e)&&(Me.tagNameCheck instanceof RegExp&&_(Me.tagNameCheck,e)||Me.tagNameCheck instanceof Function&&Me.tagNameCheck(e))&&(Me.attributeNameCheck instanceof RegExp&&_(Me.attributeNameCheck,t)||Me.attributeNameCheck instanceof Function&&Me.attributeNameCheck(t))||"is"===t&&Me.allowCustomizedBuiltInElements&&(Me.tagNameCheck instanceof RegExp&&_(Me.tagNameCheck,n)||Me.tagNameCheck instanceof Function&&Me.tagNameCheck(n))))return!1}else if(rt[t]);else if(_(Ce,C(n,ke,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==D(n,"data:")||!tt[e])if(Fe&&!_(Se,C(n,ke,"")));else if(n)return!1;return!0},It=function(e){return"annotation-xml"!==e&&O(e,Oe)},Nt=function(t){var r,i,a,o;_t("beforeSanitizeAttributes",t,null);var s=t.attributes;if(s){var l={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:_e};for(o=s.length;o--;){var c=r=s[o],d=c.name,u=c.namespaceURI;if(i="value"===d?r.value:T(r.value),a=ve(d),l.attrName=a,l.attrValue=i,l.keepAttr=!0,l.forceKeepAttr=void 0,_t("uponSanitizeAttribute",t,l),i=l.attrValue,!l.forceKeepAttr&&(kt(d,t),l.keepAttr))if(Be||!_(/\/>/i,i))if(Le&&_(/((--!?|])>)|<\/(style|title)/i,i))kt(d,t);else{Pe&&(i=C(i,ye," "),i=C(i,xe," "),i=C(i,we," "));var f=ve(t.nodeName);if(Mt(f,a,i)){if(!qe||"id"!==a&&"name"!==a||(kt(d,t),i=Xe+i),se&&"object"===e(m)&&"function"==typeof m.getAttributeType)if(u);else switch(m.getAttributeType(f,a)){case"TrustedHTML":i=se.createHTML(i);break;case"TrustedScriptURL":i=se.createScriptURL(i)}try{u?t.setAttributeNS(u,d,i):t.setAttribute(d,i),Dt(t)?St(t):$(n.removed)}catch(e){}}}else kt(d,t)}_t("afterSanitizeAttributes",t,null)}},At=function e(t){var n,r=Ct(t);for(_t("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)_t("uponSanitizeShadowNode",n,null),Et(n)||(n.content instanceof o&&e(n.content),Nt(n));_t("afterSanitizeShadowDOM",t,null)};return n.sanitize=function(i){var a,s,c,d,u,f=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if((ct=!i)&&(i="\x3c!--\x3e"),"string"!=typeof i&&!Tt(i)){if("function"!=typeof i.toString)throw E("toString is not a function");if("string"!=typeof(i=i.toString()))throw E("dirty is not a string, aborting")}if(!n.isSupported){if("object"===e(t.toStaticHTML)||"function"==typeof t.toStaticHTML){if("string"==typeof i)return t.toStaticHTML(i);if(Tt(i))return t.toStaticHTML(i.outerHTML)}return i}if(He||bt(f),n.removed=[],"string"==typeof i&&(Ze=!1),Ze){if(i.nodeName){var h=ve(i.nodeName);if(!De[h]||Ie[h])throw E("root node is forbidden and cannot be sanitized in-place")}}else if(i instanceof l)1===(s=(a=Ot("\x3c!----\x3e")).ownerDocument.importNode(i,!0)).nodeType&&"BODY"===s.nodeName||"HTML"===s.nodeName?a=s:a.appendChild(s);else{if(!Ve&&!Pe&&!ze&&-1===i.indexOf("<"))return se&&Ue?se.createHTML(i):i;if(!(a=Ot(i)))return Ve?null:Ue?le:""}a&&We&&St(a.firstChild);for(var p=Ct(Ze?i:a);c=p.nextNode();)3===c.nodeType&&c===d||Et(c)||(c.content instanceof o&&At(c.content),Nt(c),d=c);if(d=null,Ze)return i;if(Ve){if(Ye)for(u=fe.call(a.ownerDocument);a.firstChild;)u.appendChild(a.firstChild);else u=a;return(_e.shadowroot||_e.shadowrootmod)&&(u=pe.call(r,u,!0)),u}var g=ze?a.outerHTML:a.innerHTML;return ze&&De["!doctype"]&&a.ownerDocument&&a.ownerDocument.doctype&&a.ownerDocument.doctype.name&&_(ne,a.ownerDocument.doctype.name)&&(g="<!DOCTYPE "+a.ownerDocument.doctype.name+">\n"+g),Pe&&(g=C(g,ye," "),g=C(g,xe," "),g=C(g,we," ")),se&&Ue?se.createHTML(g):g},n.setConfig=function(e){bt(e),He=!0},n.clearConfig=function(){pt=null,He=!1},n.isValidAttribute=function(e,t,n){pt||bt({});var r=ve(e),i=ve(t);return Mt(r,i,n)},n.addHook=function(e,t){"function"==typeof t&&(me[e]=me[e]||[],j(me[e],t))},n.removeHook=function(e){if(me[e])return $(me[e])},n.removeHooks=function(e){me[e]&&(me[e]=[])},n.removeAllHooks=function(){me={}},n}var se=oe();return se}();var qM=_i(KM.exports);const XM=K.default.div`
    display: flex;
    flex-direction: column;
`,GM=K.default.div`
    display: flex;
    flex-direction: row;
    align-self: center;
    gap: 0.5rem;
`,ZM=K.default(Vy)`
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
`,QM=K.default(qs.Small)`
    margin: 2rem 0rem;
`,JM=K.default.nav`
    display: flex;
`,eI=K.default.div`
    display: flex;
    align-items: center;
    align-self: flex-start;
    overflow: auto;

    ${is.MaxWidth.tablet} {
        align-self: center;
    }
`,tI=K.default.div`
    display: inline-flex;
    padding: 0.125rem;
    align-items: center;
`,nI=K.default(ss)`
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
`,rI=K.default(ss)`
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
`,iI=K.default(qs.Default)`
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
`;const aI=K.default.div`
    display: flex;
    cursor: pointer;
    min-width: 2.5rem;
    height: 2.5rem;
    border-radius: 0.25rem;
    justify-content: center;
    align-items: center;
    position: relative;
`,oI=K.default.div`
    display: flex;
    justify-content: center;
    margin: 0.625rem;
    align-items: center;
    color: ${ts.Neutral[1]};

    display: flex;
    justify-content: center;
`,sI=K.default(exports.Text.Body)`
    white-space: nowrap;
`,lI=K.default(exports.Text.Body)`
    white-space: nowrap;
    margin: 0 1rem;
`,cI=K.default(Vy)`
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
`,dI=K.default.div`
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
`,uI=K.default.div`
    width: 9.2rem;
    margin-left: 0.5rem;
`,fI=Y.default.forwardRef((({id:n,"data-testid":r,className:i,pageSize:a=10,totalItems:o,activePage:s,pageSizeOptions:l=hI,showFirstAndLastNav:c,showPageSizeChanger:d=!1,onPageChange:u,onPageSizeChange:f},g)=>{const m=Dl.useMediaQuery({maxWidth:ns.mobileL}),b=l,[v,y]=t.useState(!1),[x,w]=t.useState(!1),[$,j]=t.useState(""),[S,k]=t.useState(b&&b.length>=1?b[0]:null),[O,C]=t.useState(!m&&d&&S?S.value:a),D=Math.ceil(o/O),T=1===s,_=s===D,E=s>1?()=>V(1):void 0,M=s<D?()=>V(D):void 0,I=s>1?()=>V(s-1):void 0,N=s<D?()=>V(parseInt(s.toString())+1):void 0,A=e=>e?()=>Z():()=>X(),R=e=>e?()=>Q():()=>G();t.useEffect((()=>{s&&H(s)}),[s]),t.useEffect((()=>{var e;C(a),k(null!==(e=b.find((e=>e.value===a)))&&void 0!==e?e:null)}),[a]);const H=e=>{j(e.toString())},W=()=>{y(!1),w(!1)},V=e=>{u&&(u(e),H(e))},Y=()=>{const e=Math.min(D,s+5);V(e),H(e),y(!0),w(!1)},U=()=>{const e=Math.max(1,s-5);V(e),H(e),y(!1),w(!0)},K=e=>{const t=e.target.value;if(void 0===t||0===t.length)j("");else if(/^[0-9]+$/.test(t)){const e=parseInt(t.replace(/[^0-9]/g,""));H(Math.max(1,Math.min(D,e)))}else j(t.replace(/[^0-9]/g,""))},q=e=>{e.preventDefault(),$&&u(parseInt($))},X=()=>{y(!0)},G=()=>{y(!1)},Z=()=>{w(!0)},Q=()=>{w(!1)},J=(t,n,r)=>e.jsxs(aI,{children:[e.jsx(nI,Object.assign({focusHighlight:!1,focusOutline:"browser","aria-label":t?"Previous 5 pages":"Next 5 pages",onMouseOver:A(t),onMouseOut:R(t),onFocus:A(t),onBlur:R(t),onClick:t?U:Y},{children:t&&x?e.jsx(F.Chevron2LeftIcon,{"aria-hidden":!0}):n&&v?e.jsx(B.Chevron2RightIcon,{"aria-hidden":!0}):e.jsx(z.EllipsisHorizontalIcon,{"aria-hidden":!0})})),t&&x&&e.jsx(dI,{children:"Previous 5 pages"}),n&&v&&e.jsx(dI,{children:"Next 5 pages"})]},r);return e.jsxs(JM,Object.assign({className:i,ref:g,id:n||"pagination-wrapper","data-testid":r||"pagination","aria-label":"Pagination"},{children:[e.jsx(eI,{children:e.jsxs(tI,{children:[c&&e.jsx(rI,Object.assign({onClick:E,disabled:T,focusHighlight:!1,$position:"left","aria-label":"First page",focusOutline:"browser"},{children:e.jsx(P.ChevronLineLeftIcon,{"aria-hidden":!0})})),e.jsx(rI,Object.assign({onClick:I,disabled:T,focusHighlight:!1,$position:"left","aria-label":"Previous page",focusOutline:"browser"},{children:e.jsx(p.ChevronLeftIcon,{"aria-hidden":!0})})),m?e.jsxs(oI,{children:[e.jsx("form",Object.assign({onSubmit:q},{children:e.jsx(cI,{value:$,onChange:K,autoComplete:"off",type:"numeric",id:(n||"pagination")+"-input","data-testid":(r||"pagination")+"-input"})})),e.jsx(lI,{children:"/"}),e.jsx(sI,{children:D})]}):[...Array(D)].map(((t,n)=>{const r=n+1,i=D-5,a=s===r;if(D<=7)return e.jsx(iI,Object.assign({onClick:()=>V(r),$selected:a,"aria-label":"Page "+r,"aria-current":!!a&&"page",onMouseOver:W,onFocus:W},{children:r}),r);const o=s+1>5&&2===r,l=s-1<=i&&r===D-1-1;return o||l?J(o,l,r):r<=5&&s+1<=5||r<=1||r===s||r<=s+1&&r>=s-1-1||r>i&&s-1>i||r>D-1?e.jsx(iI,Object.assign({onClick:()=>V(r),$selected:a,"aria-label":"Page "+r,"aria-current":!!a&&"page",onMouseOver:W,onFocus:W},{children:r}),r):null})),e.jsx(rI,Object.assign({onClick:N,disabled:_,focusHighlight:!1,$position:"right","aria-label":"Next page",focusOutline:"browser"},{children:e.jsx(h.ChevronRightIcon,{"aria-hidden":!0})})),c&&e.jsx(rI,Object.assign({onClick:M,disabled:_,focusHighlight:!1,$position:"right","aria-label":"Last page",focusOutline:"browser"},{children:e.jsx(L.ChevronLineRightIcon,{"aria-hidden":!0})}))]})}),d&&!m&&e.jsx(uI,{children:e.jsx(DO,{options:b,valueExtractor:e=>e.value,listExtractor:e=>e.label,displayValueExtractor:e=>e.label,selectedOption:S,onSelectOption:e=>{k(e);const t=e.value,n=Math.ceil(o/t);C(t);f&&f(s>=n?n:s,t)}})})]}))})),hI=[{value:10,label:"10 / page"},{value:20,label:"20 / page"},{value:30,label:"30 / page"}],pI=K.default.div`
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
`,gI=K.default.div`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-align: left;
`,mI=t=>{var{type:n,colorType:r="black",children:i,icon:a}=t,o=X(t,["type","colorType","children","icon"]);return e.jsxs(pI,Object.assign({$type:n,$color:r},o,{children:[a,e.jsx(gI,{children:i})]}))},bI=K.default.div`
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
`,vI=K.default(jh)`
    padding: 3.5rem 1.25rem 2.5rem;
`,yI=K.default.div`
    position: relative;
    width: fit-content;
`,xI=K.default.button`
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
`,wI=K.default.div`
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none; /* Chrome/Safari/Webkit */
    }
`,$I=n=>{var{children:r,visible:i,onMobileClose:a}=n,o=X(n,["children","visible","onMobileClose"]);const s=o["data-testid"]||"popover",[l,c]=t.useState("none"),d=t.useRef(null),u=Dl.useMediaQuery({maxWidth:ns.mobileL}),f=t.useRef(l);t.useEffect((()=>(g(),window.addEventListener("resize",eu(h,300)),()=>{window.removeEventListener("resize",eu(h,300))})),[]);const h=()=>{g()},p=()=>{a&&a()},g=()=>{const e=m();var t;e&&(t=e,f.current=t,c(t))},m=()=>{if(d.current){const e=d.current.getBoundingClientRect(),t=24,n=e.y<t,r=window.innerWidth-t;return e.x<t?n?"top-left":"left":e.x+e.width>r?n?"top-right":"right":("top-left"===f.current||"left"===f.current)&&e.x-e.width/2>t||("top-right"===f.current||"right"===f.current)&&e.x+2*e.width<r?n?"top-center":"none":n?"top-center":void 0}},b=()=>"string"==typeof r?e.jsx(exports.Text.BodySmall,{children:r}):r;return e.jsxs(e.Fragment,{children:[e.jsx(bI,Object.assign({ref:d,"data-testid":s,$visible:i,$offset:l},o,{children:e.jsx(Ed,{children:b()})})),u&&e.jsx(xh,Object.assign({show:i,onOverlayClick:p},{children:e.jsx(vI,Object.assign({onClose:p},{children:e.jsx(wI,{children:b()})}))}))]})},jI=K.default.div`
    position: relative;
    width: 100%;

    margin: 2rem 0;

    ${is.MaxWidth.desktopM} {
        margin: 1.5rem 0;
    }

    ${is.MaxWidth.tablet} {
        margin: 1rem 0;
    }
`,SI=K.default.div`
    display: flex;
    flex-basis: 0;
    justify-content: space-between;
    width: 100%;
`,kI=K.default.div`
    height: 0.25rem;
    margin-bottom: 0.5rem;
    border-radius: 0.25rem;
    ${e=>{const{highlighted:t}=e;return`\n            background-color: ${(t?ts.Accent.Light[1]:ts.Neutral[6])(e)};\n        `}};
`,OI=K.default(exports.Text.BodySmall)`
    overflow-wrap: anywhere;
    ${e=>{const{highlighted:t}=e;return`color: ${(t?ts.Primary:ts.Neutral[3])(e)};`}};
`,CI=K.default(exports.Text.BodySmall)`
    overflow-wrap: anywhere;
    color: ${ts.Neutral[1]};
`,DI=K.default.div`
    display: flex;
    flex-direction: column;
    flex: 1;

    &:not(:last-child) {
        margin-right: ${"0.5rem"};
    }
`;var TI=function(e){return function(t){return null==e?void 0:e[t]}}({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),_I=Ro,EI=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,MI=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");var II=function(e){return(e=_I(e))&&e.replace(EI,TI).replace(MI,"")},NI=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;var AI=function(e){return e.match(NI)||[]},RI=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;var FI=function(e){return RI.test(e)},BI="\\ud800-\\udfff",PI="\\u2700-\\u27bf",LI="a-z\\xdf-\\xf6\\xf8-\\xff",zI="A-Z\\xc0-\\xd6\\xd8-\\xde",HI="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",WI="["+HI+"]",VI="\\d+",YI="["+PI+"]",UI="["+LI+"]",KI="[^"+BI+HI+VI+PI+LI+zI+"]",qI="(?:\\ud83c[\\udde6-\\uddff]){2}",XI="[\\ud800-\\udbff][\\udc00-\\udfff]",GI="["+zI+"]",ZI="(?:"+UI+"|"+KI+")",QI="(?:"+GI+"|"+KI+")",JI="(?:['’](?:d|ll|m|re|s|t|ve))?",eN="(?:['’](?:D|LL|M|RE|S|T|VE))?",tN="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",nN="[\\ufe0e\\ufe0f]?",rN=nN+tN+("(?:\\u200d(?:"+["[^"+BI+"]",qI,XI].join("|")+")"+nN+tN+")*"),iN="(?:"+[YI,qI,XI].join("|")+")"+rN,aN=RegExp([GI+"?"+UI+"+"+JI+"(?="+[WI,GI,"$"].join("|")+")",QI+"+"+eN+"(?="+[WI,GI+ZI,"$"].join("|")+")",GI+"?"+ZI+"+"+JI,GI+"+"+eN,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",VI,iN].join("|"),"g");var oN=AI,sN=FI,lN=Ro,cN=function(e){return e.match(aN)||[]};var dN=oO,uN=II,fN=function(e,t,n){return e=lN(e),void 0===(t=n?void 0:t)?sN(e)?cN(e):oN(e):e.match(t)||[]},hN=RegExp("['’]","g");var pN=_i(function(e){return function(t){return dN(fN(uN(t).replace(hN,"")),e,"")}}((function(e,t,n){return e+(n?"-":"")+t.toLowerCase()})));const gN=K.default.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 1.5rem;
    width: 1.5rem;
    position: relative;
    border-radius: 50%;
    border: 2px solid ${ts.Accent.Light[2]};

    ${e=>{if(e.$disabled)return`\n\t\t\t\tborder: 2px solid ${ts.Neutral[4](e)};\n\t\t\t`}}
`,mN=K.default.input`
    position: absolute;
    height: 100%;
    width: 100%;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    z-index: 1;

    /* Hide appearance but keep it focusable using keyboard interactions */
    appearance: none;
    background: transparent;
    border: none;
`,bN=K.default.div`
    height: 0.75rem;
    width: 0.75rem;
    opacity: ${e=>e.$selected?1:0};
    transition: all 200ms ease-in-out;
    background: ${e=>e.$disabled?ts.Neutral[4](e):ts.Primary(e)};
    border-radius: 50%;
    border: 1px solid transparent;
`,vN=K.default.div`
    display: flex;
    position: ${e=>e.$fixed?"fixed":"relative"};
    width: fit-content;
`,yN=K.default.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    width: 8.5rem;
    border: 1px solid ${ts.Neutral[5]};
    background-color: ${ts.Accent.Light[6]};
    padding: 0.5rem 0 1.5rem 0;
`,xN=K.default(yN)`
    height: 100vh;
    left: 0;
    top: 0;
    ${is.MaxWidth.mobileL} {
        display: none;
        visibility: hidden;
    }
`,wN=K.default(yN)`
    display: none;
    visibility: hidden;
    ${is.MaxWidth.mobileL} {
        display: none; // NOTE: Since mobile view not supported yet
    }
`,$N=K.default(Di.ul)`
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
`,jN=K.default.li`
    width: 100%;
`,SN=K.default(qs.Default)`
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
`,kN=K.default.div`
    height: 1.75rem;
    width: 3.25rem;
    border-radius: 0.5rem;
    margin-bottom: 0.25rem;
`,ON=K.default(exports.Text.XSmall)``,CN=t.createContext({selectedItem:void 0,currentItem:void 0,previouslySelectedItemId:void 0,setCurrentItem:()=>{},setPreviouslySelectedItemId:()=>{},setSelectedItem:()=>{}}),DN=K.default.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    list-style: none;
`,TN=K.default.li`
    margin: 0.5rem 0;
    width: 6.5rem;
    height: 1px;
    background-color: ${ts.Neutral[5]};
`,_N=K.default(Di.li)``,EN=K.default(qs.Default)`
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
`,MN=K.default(Di.div)`
    margin: 0.125rem 0 0.125rem 0.5rem;
    overflow: hidden;
`,IN=K.default.div`
    align-self: center;
    padding-left: 0.5rem;
`,NN=K.default(r.ChevronUpIcon)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: ${ts.Neutral[3]};
    transform: rotate(${e=>e.$expanded?0:180}deg);
    transition: transform 300ms ease-in-out;
`,AN=K.default.div`
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-align: initial;
`,RN=K.default(Di.ul)``,FN=K.default.li``,BN=K.default(qs.Default)`
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
`,PN=Object.assign((n=>{var{fixed:r=!0,children:i}=n,a=X(n,["fixed","children"]);const o=t.useRef(null),[s,l]=t.useState(void 0),[c,d]=t.useState(void 0),[u,f]=t.useState(void 0),[h,p]=t.useState(!1),g=t.useMemo((()=>({currentItem:s,selectedItem:c,previouslySelectedItemId:u,setCurrentItem:l,setSelectedItem:d,setPreviouslySelectedItemId:f})),[s,c,u,l,d,f]),m=di({width:h?240:0,borderRightWidth:h?1:0,borderTopWidth:h?1:0,borderBottomWidth:h?1:0,borderLeftWidth:0});return fc("click",(e=>{o.current&&!o.current.contains(e.target)&&(d({itemId:u||(c?c.itemId:void 0),content:void 0}),f(void 0),l(void 0))}),"window",!0),t.useEffect((()=>{p(c&&!!c.content||s&&!!s.content)}),[s,c]),e.jsx(CN.Provider,Object.assign({value:g},{children:e.jsxs(vN,Object.assign({$fixed:r},a,{ref:o,onMouseLeave:()=>{l(void 0)}},{children:[e.jsx(xN,{children:i}),e.jsx($N,Object.assign({style:m,$showDrawer:h,"data-testid":"sidenav-drawer"},{children:s&&s.content||c&&c.content})),e.jsx(wN,{})]}))}))}),{Group:t=>{var{separator:n,children:r}=t,i=X(t,["separator","children"]);return e.jsxs(DN,Object.assign({},i,{children:[r,n&&e.jsx(TN,{"data-testid":"divider"})]}))},Item:n=>{var{children:r,icon:i,title:a,onClick:o}=n,s=X(n,["children","icon","title","onClick"]);const l=s.id||a.toLowerCase().replaceAll(" ","-"),{currentItem:c,previouslySelectedItemId:d,selectedItem:u,setCurrentItem:f,setPreviouslySelectedItemId:h,setSelectedItem:p}=t.useContext(CN);t.useEffect((()=>{s.selected&&p({itemId:l,content:void 0})}),[s.selected]);return e.jsx(jN,{children:e.jsxs(SN,Object.assign({styleType:"link",type:"button",onClick:()=>{h((()=>{if(r&&u)return d||u.itemId})()),f({itemId:l,content:r}),p({itemId:l,content:r}),o&&!r&&o(l)},onMouseEnter:()=>{f({itemId:l,content:r})}},s,{$highlight:u&&u.itemId===l||c&&c.itemId===l},{children:[e.jsx(kN,{children:i}),e.jsx(ON,{children:a})]}))})},DrawerItem:n=>{var{id:r,title:i,onClick:a,children:o}=n,s=X(n,["id","title","onClick","children"]);const[l,c]=t.useState(!0),[d,u]=t.useState(!1),{currentItem:f,setSelectedItem:h,setPreviouslySelectedItemId:p,setCurrentItem:g}=t.useContext(CN),m=di({from:{opacity:0},to:{opacity:1}}),b=qe(),v=b.ref,y=di({height:o&&l?b.height:0});return e.jsxs(_N,Object.assign({onMouseEnter:()=>{u(!0)},onMouseLeave:()=>{u(!1)}},s,{style:m},{children:[e.jsxs(EN,Object.assign({styleType:"link",type:"button",onClick:()=>{o?c(!l):(h({itemId:f.itemId,content:void 0}),g(void 0),p(void 0),a&&a(r))},$highlight:d&&l,$noChildren:!o},{children:[e.jsx(AN,{children:i}),o&&e.jsx(IN,{children:e.jsx(NN,{"aria-hidden":!0,$expanded:l})})]})),e.jsx(MN,Object.assign({style:y},{children:e.jsx(RN,Object.assign({ref:v},{children:o}))}))]}))},DrawerSubitem:n=>{var{id:r,title:i,onClick:a}=n,o=X(n,["id","title","onClick"]);const{currentItem:s,setSelectedItem:l,setCurrentItem:c,setPreviouslySelectedItemId:d}=t.useContext(CN);return e.jsx(FN,Object.assign({},o,{children:e.jsx(BN,Object.assign({styleType:"link",type:"button",onClick:()=>{a&&a(r),l({itemId:s.itemId,content:void 0}),c(void 0),d(void 0)}},{children:i}))}))}}),LN=i.keyframes`
	from {
		opacity: 0;
		transform: translateY(-20%);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
`,zN=K.default.div`
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
                animation: ${LN} 0.3s;
            `}}
`,HN=K.default.div`
    display: flex;
    align-items: center;
    padding: 0.5rem 0.25rem 0.5rem 1rem;
`,WN=K.default(ss)`
    padding: 0;
`,VN=K.default(m.CrossIcon)`
    color: ${ts.Neutral[1]};
    height: 1.25rem;
    width: 1.25rem;
`,YN=K.default.div`
    flex: 1;
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem 0.5rem 0.25rem;
    cursor: pointer;
`,UN=K.default.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: left;
    margin: 0.5rem;
    ${is.MaxWidth.mobileM} {
        margin: 0 0.5rem;
    }
`,KN=K.default.img`
    width: 2.65rem;
    height: auto;
    align-self: center;
`,qN=K.default.div`
    max-width: 30%;
`,XN=K.default(qs.Small)`
    padding: 0.5rem;
    height: auto;
    & > span {
        overflow-wrap: anywhere;
        ${ys.getTextStyle("XSmall","semibold")};
    }
`,GN=K.default(exports.Text.H6)`
    overflow-wrap: anywhere;
    ${is.MaxWidth.mobileM} {
        ${ys.getTextStyle("XSmall","semibold")}
    }
`,ZN=K.default(exports.Text.XSmall)`
    overflow-wrap: anywhere;
`,QN=K.default.div`
    margin-top: 0.25rem;
    display: flex;
    align-items: center;
`,JN=i.css`
    height: 2rem;
    width: 2rem;
    padding-right: 0.25rem;
    color: #ffc107;
`,eA=K.default(v.StarFillIcon)`
    ${JN}
`,tA=K.default(H.StarHalfIcon)`
    ${JN}
`,nA=K.default(b.StarIcon)`
    ${JN}
`,rA="https://assets.life.gov.sg/react-design-system/img/app-icon/app-icon.png",iA="smart-app-banner";const aA=Y.default.forwardRef((function(t,n){const{className:r,show:i,href:a,content:o,offset:s=0,icon:l=rA,animated:c=!1,onDismiss:d,onClick:u}=t,{title:f,message:h,buttonLabel:p,buttonAriaLabel:g,numberOfStars:m}=o,b=e=>{e.stopPropagation(),window.open(a,"_blank","noreferrer"),null==u||u()};return e.jsx(e.Fragment,{children:i&&e.jsxs(zN,Object.assign({ref:n,$isAnimated:c,$offset:s,className:r},{children:[e.jsx(HN,Object.assign({onClick:d,id:`${iA}-dismiss`,"data-testid":`${iA}-dismiss-container`},{children:e.jsx(WN,Object.assign({"aria-label":"Dismiss"},{children:e.jsx(VN,{})}))})),e.jsxs(YN,Object.assign({onClick:b,id:`${iA}-proceed`,"data-testid":`${iA}-proceed-container`},{children:[e.jsx(KN,{src:l,alt:"lifesg-app-icon"}),e.jsxs(UN,{children:[e.jsx(GN,{children:f}),e.jsx(ZN,{children:h}),(()=>{if(isNaN(m)||m<0)return;const t=[],n=m-Math.floor(m)>=.4;for(let n=0;n<Math.floor(m);n++)t.push(e.jsx(eA,{},`star${n}`));if(n&&t.push(e.jsx(tA,{},"halfstar")),t.length<5){const n=5-t.length;for(let r=0;r<n;r++)t.push(e.jsx(nA,{},`emptystar${r}`))}return e.jsx(QN,{children:t.slice(0,5)})})()]}),e.jsx(qN,{children:e.jsx(XN,Object.assign({type:"button",onClick:b,"aria-label":g},{children:p}))})]}))]}))})})),oA=Y.default.createContext({currentActiveIndex:0,tabLinks:[],setCurrentActiveIndex:()=>{}}),sA=K.default.div`
    position: relative;
    width: 100%;
`,lA=K.default.div`
    width: 4rem;
    height: 100%;
    top: 0;
    position: absolute;
    pointer-events: none;
    display: flex;
    align-items: center;

    ${e=>{let t;const n="rgba(255,255,255,0.001)";return t="left"===e.$position?`\n                left: 0;\n                background-image: linear-gradient(\n                    to right,\n                    ${e.$backgroundColor||(e.$showIndicator?"white, white":"white")},\n                    ${n}\n                );\n            `:`\n                right: 0;\n                background-image: linear-gradient(\n                    to left,\n                    ${e.$backgroundColor||(e.$showIndicator?"white, white":"white")},\n                    ${n}\n                );\n            `,`\n\t\t\t${is.MaxWidth.tablet} {\n\t\t\t\t${t}\n\t\t\t}\n\t\t`}};
`,cA=K.default.div`
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
`,dA=K.default(ss)`
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
`,uA=t.forwardRef(((n,r)=>{var{children:i,fadeColor:a,fadePosition:o="both",showIndicator:s=!1,onResize:l}=n,c=X(n,["children","fadeColor","fadePosition","showIndicator","onResize"]);const[d,u]=t.useState("left"===o||"both"===o),[f,g]=t.useState("right"===o||"both"===o),m=t.useRef(null),b=t.useRef(null),v=ru(y,50);function y(){const e=m.current,t=b.current;e&&t&&t.scrollWidth>e.offsetWidth?(g(Math.round(t.scrollLeft)<t.scrollWidth-t.offsetWidth),u(t.scrollLeft>=1)):(g(!1),u(!1))}function x(){y(),l&&l({content:b.current,wrapper:m.current})}qe({onResize:x,targetRef:m,refreshMode:"debounce",refreshRate:50}),t.useImperativeHandle(r,(()=>({resize(){x()}}))),t.useEffect((()=>{const e=b.current;return y(),e&&e.addEventListener("scroll",v),()=>{e&&e.removeEventListener("scroll",v)}}),[]);return e.jsxs(sA,Object.assign({ref:m},c,{children:[e.jsx(cA,Object.assign({ref:b},{children:i})),(()=>{let t;return t=Array.isArray(a)&&a.length>0?{left:a,right:a}:a||{left:void 0,right:void 0},e.jsxs(e.Fragment,{children:[d&&e.jsx(lA,Object.assign({$backgroundColor:t.left,$position:"left",$showIndicator:s,"data-id":"left-fade"},{children:s&&e.jsx(dA,Object.assign({$position:"left","data-id":"left-fade-indicator-button"},{children:e.jsx(p.ChevronLeftIcon,{})}))})),f&&e.jsx(lA,Object.assign({$backgroundColor:t.right,$position:"right",$showIndicator:s,"data-id":"right-fade"},{children:s&&e.jsx(dA,Object.assign({$position:"right","data-id":"right-fade-indicator-button"},{children:e.jsx(h.ChevronRightIcon,{})}))}))]})})()]}))})),fA=K.default.ul`
    display: inline-flex;
    width: 100%;
    list-style-type: none;
`,hA=K.default.li`
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
`,pA=K.default.button`
    position: relative;
    padding: 1rem 1rem 1.25rem;
    border: none;
    background: none;
    cursor: pointer;
`,gA=K.default(exports.Text.Body)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, calc(-50% - 0.125rem)); // Based on testing
    color: ${ts.Neutral[3]};
    opacity: 1;

    ${e=>{if(e.$active)return i.css`
                opacity: 0;
            `}}
`,mA=K.default(exports.Text.Body)`
    color: ${ts.Primary};
    opacity: 0;
    ${e=>{if(e.$active)return i.css`
                opacity: 1;
            `}}
`,bA=K.default(uA)`
    [data-id="left-fade-indicator-button"],
    [data-id="right-fade-indicator-button"] {
        margin-bottom: 4px;
    }
`,vA=({controlledMode:n,"data-testid":r,onTabClick:i})=>{const{setCurrentActiveIndex:a,currentActiveIndex:o,tabLinks:s}=t.useContext(oA),l=Dl.useMediaQuery({maxWidth:as.mobileL}),c=t.useRef(null),d=e=>t=>{t.preventDefault(),n||a(e),i&&i(s[e].title,e)},u=e=>l&&e.length>20?`${e.substring(0,20)}...`:e;return e.jsx(bA,Object.assign({onResize:({content:e,wrapper:t})=>{e&&t&&window.innerWidth<=as.tablet&&c&&(e.scrollLeft=c.current.getBoundingClientRect().left)},"data-testid":r},{children:e.jsx(fA,Object.assign({role:"tablist"},{children:s.map(((t,n)=>{const i=o===n;return e.jsx(hA,Object.assign({role:"none",$active:i,ref:i?c:null},{children:e.jsxs(pA,Object.assign({role:"tab",type:"button","aria-selected":i,onClick:d(n),"data-testid":`${r}-link-${n}`},{children:[e.jsx(gA,Object.assign({$active:i,weight:"regular"},{children:u(t.title)})),e.jsx(mA,Object.assign({$active:i,weight:"semibold","aria-hidden":"true"},{children:u(t.title)}))]}))}),n)}))}))}))},yA=K.default.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`,xA=Object.assign((n=>{var{children:r,currentActive:i,initialActive:a=0,onTabClick:o,"data-testid":s}=n,l=X(n,["children","currentActive","initialActive","onTabClick","data-testid"]);const[c,d]=t.useState(i||a),[u,f]=t.useState([]);t.useEffect((()=>{const e=t.Children.toArray(r).filter(Boolean);h(e)}),[r]),t.useEffect((()=>{"number"==typeof i&&d(i)}),[i]);const h=e=>{const t=e.map((e=>({title:e.props.title})));f(t)};return e.jsx(yA,Object.assign({"data-testid":s},l,{children:e.jsxs(oA.Provider,Object.assign({value:{tabLinks:u,currentActiveIndex:c,setCurrentActiveIndex:d}},{children:[e.jsx(vA,{controlledMode:"number"==typeof i,onTabClick:o,"data-testid":`${s}-tabs`}),t.Children.toArray(r).filter(Boolean).map(((e,n)=>t.cloneElement(e,{key:n,index:n})))]}))}))}),{Item:n=>{var{index:r,children:i}=n,a=X(n,["index","children"]);const{currentActiveIndex:o}=t.useContext(oA);return o===r?e.jsx("div",Object.assign({role:"tabpanel"},a,{children:i})):null}}),wA=K.default.div`
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

    ${e=>{let t,n,r,a;if("solid"===e.$type)switch(r=ts.Neutral[8],a=`0px 0px 4px 1px ${ts.Neutral[4](e)}`,e.$color){case"grey":t=ts.Neutral[3],n=ts.Neutral[3];break;case"green":t=ts.Validation.Green.Text,n=ts.Validation.Green.Text;break;case"yellow":t=ts.Validation.Orange.Text,n=ts.Validation.Orange.Text;break;case"red":t=ts.Validation.Red.Text,n=ts.Validation.Red.Text;break;case"blue":t=ts.Validation.Blue.Text,n=ts.Validation.Blue.Text;break;default:t=ts.Neutral[1],n=ts.Neutral[1]}else switch(a="0px 0px 4px 1px rgba(164, 164, 164, 0.70)",e.$color){case"grey":t=ts.Neutral[6],n=ts.Neutral[4],r=ts.Neutral[3];break;case"green":t=ts.Validation.Green.Background,n=ts.Validation.Green.Border,r=ts.Validation.Green.Text;break;case"yellow":t=ts.Validation.Orange.Background,n=ts.Validation.Orange.Border,r=ts.Validation.Orange.Text;break;case"red":t=ts.Validation.Red.Background,n=ts.Validation.Red.Border,r=ts.Validation.Red.Text;break;case"blue":t=ts.Validation.Blue.Background,n=ts.Validation.Blue.Border,r=ts.Validation.Blue.Text;break;default:t=ts.Neutral[8],n=ts.Neutral[5],r=ts.Neutral[1],a="0px 0px 4px 1px rgba(164, 164, 164, 0.50)"}return i.css`
            background: ${t};
            border: 1px solid ${n};
            color: ${r};

            @media (hover: hover) {
                &:hover {
                    box-shadow: ${e.$interactive?a:"none"};
                }
            }
        `}}

    ${is.MaxWidth.tablet} {
        ${({$interactive:e})=>{if(e)return i.css`
                    ${ys.getTextStyle("H5","semibold")};
                    padding: calc(0.5rem - 1px) 1rem;
                `}}
    }
`,$A=K.default.div`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-align: left;
`;var jA;Wl.extend(Yl),function(e){e.formatHourlyDisplay=e=>Wl(e,"HH:mm").format("ha"),e.calculateWidth=(e,t,n)=>sc.getTimeDiffInMinutes(e,t)/15*(n/2)}(jA||(jA={}));const SA=1.25,kA=e=>"minified"===e?12:40,OA=e=>"minified"===e?12:40,CA=K.default.div`
    position: relative;
    display: flex;
    align-items: center;
`,DA=K.default(ss)`
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
`,TA=K.default(h.ChevronRightIcon)`
    width: 1rem;
    height: 1rem;
    color: ${ts.Primary};
`,_A=K.default(p.ChevronLeftIcon)`
    font-size: 1rem;
    color: ${ts.Primary};
`,EA=K.default.div`
    overflow: hidden;
    flex-grow: 1;
    position: relative;
    height: ${({$variant:e})=>`${20+OA(e)}px`};
`,MA=K.default.div`
    position: relative;
    white-space: nowrap;
    height: ${SA}rem;
`,IA=K.default.div`
    display: flex;
    white-space: nowrap;
`,NA=K.default.div`
    display: inline-block;
    width: ${({$variant:e})=>`${kA(e)}px`};
    position: relative;
    border-left: 1px solid ${ts.Neutral[2]};
    ${e=>{let t=0;switch(e.$variant){case"default":t=e.$isLongMarker?SA:.625;break;case"minified":t=e.$isLongMarker?SA:0;break;default:t=0}return i.css`
            height: ${t}rem;
        `}}
`,AA=K.default(exports.Text.XSmall)`
    color: ${ts.Neutral[2]};
    position: absolute;
    bottom: 10%;
    left: 10%;
`,RA=K.default.div`
    ${e=>"vertical"===e.$type?i.css`
                display: flex;
                flex-grow: 1;
                align-items: center;
                justify-content: center;
                width: 100%;
                margin: 1px 0px;
            `:i.css`
                position: absolute;
                height: ${OA(e.$variant)}px;
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
`,FA=K.default.div`
    position: absolute;
    top: ${SA}rem;
    height: ${({$variant:e})=>`${OA(e)}px`};
    z-index: 1;
    border-right: 1px solid ${ts.Neutral[2]};
`,BA=K.default(exports.Text.XSmall)`
    color: ${e=>e.$color||ts.Neutral[2](e)};
    position: absolute;
    bottom: 0;
    padding-left: 4px;
    padding-bottom: 4px;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`,PA=K.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    user-select: none;
    margin-bottom: 0.5rem;
    flex: 1;
`,LA=K.default(exports.Text.XSmall)`
    ${e=>e.$disabled&&i.css`
            color: ${ts.Neutral[4]};
        `}
`,zA=K.default.div`
    grid-column: 2 / -1;
    display: flex;
`,HA=K.default.div`
    width: 100%;
    display: grid;
    grid-template-columns: auto repeat(7, 1fr);
    column-gap: 0.25rem;
`,WA=K.default(Di.div)`
    grid-column: 2 / -1;
    overflow: hidden;
`,VA=K.default.div`
    display: flex;
    gap: 0.25rem;
    transition: ${Ss.Base};
    overflow: hidden;
`,YA=K.default.div`
    display: flex;
    flex-direction: column;
    grid-row: 3 / auto;
    gap: 0.25rem;
    width: 1.375rem;
    transition: ${Ss.Base};
    overflow: hidden;

    ${e=>e.$height&&`height: ${e.$height}px;`}
`,UA=K.default.div`
    min-height: 3.75rem;
    :last-child {
        min-height: 0;
    }
`,KA=K.default.div`
    ${ys.getFontFamily("Body",700)}
    color: ${ts.Neutral[3]};
    font-size: 0.625rem !important;
    line-height: 0.75rem !important;
    text-align: center;
    :first-line {
        font-size: 0.875rem !important;
    }
`,qA=K.default.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 0.25rem;
`,XA=K.default.div`
    grid-row: 4;
    grid-column: 1 / -1;
    display: flex;
    margin-top: 0.5rem;
`,GA=K.default(qs.Small)`
    width: 100%;
    height: 2.5rem;
    span {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
`,ZA=K.default(u.ChevronUpIcon)`
    transform: rotate(${e=>e.$isExpanded?0:180}deg);
    transition: transform 300ms ease-in-out;
`,QA=K.default(RA)`
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
`;var JA=Zi;var eR=function(e,t,n){for(var r=-1,i=e.length;++r<i;){var a=e[r],o=t(a);if(null!=o&&(void 0===s?o==o&&!JA(o):n(o,s)))var s=o,l=a}return l};var tR=eR,nR=q$,rR=function(e,t){return e<t};var iR=_i((function(e,t){return e&&e.length?tR(e,nR(t),rR):void 0}));var aR=eR,oR=function(e,t){return e>t},sR=q$;var lR=_i((function(e,t){return e&&e.length?aR(e,sR(t),oR):void 0}));const cR=({calendarDate:n,disabledDates:r,selectedDate:i,onSelect:a,minDate:o,maxDate:s,startTime:l,endTime:c,maxVisibleCellHeight:d,slots:u,interval:f=30,variant:h="flexible",enableSelection:p=!0,onSlotClick:g})=>{var m,b,v,y;const x="YYYY-MM-DD",[w,$]=t.useState(!1),[j,S]=t.useState(),k=t.useMemo((()=>tc.generateDaysForCurrentWeek(n)),[n]),O=Object.values(null!=u?u:{}).flat(),C=null!==(b=null!=l?l:null===(m=iR(O,"startTime"))||void 0===m?void 0:m.startTime)&&void 0!==b?b:"00:00",D=null!==(y=null!=c?c:null===(v=lR(O,"endTime"))||void 0===v?void 0:v.endTime)&&void 0!==y?y:"24:00",T=Math.ceil(sc.getTimeDiffInMinutes(C,D)/f),{height:_,ref:E}=qe(),M=d?_<d||w?_:d:_,I=di({height:M}),N=t.useMemo((()=>{if(u){const e={};return Object.entries(u).forEach((([t,n])=>{const r=function(e){const t=Array(T).fill({});return e.forEach((e=>{const n=Math.max(0,sc.getTimeDiffInMinutes(C,e.startTime)/f),r=Math.min(T,sc.getTimeDiffInMinutes(C,e.endTime)/f),i=Math.ceil(r)-Math.floor(n);switch(h){case"fixed":t[Math.floor(n)]=Object.assign(Object.assign({},e),{cellLength:r-n});break;case"flexible":for(let a=0;a<i;a++){const o=sc.addMinutesToTime(C,Math.floor(n+a)*f),s=sc.addMinutesToTime(o,f);let l;Wk(t[Math.floor(n+a)])?0===a&&n%1!=0?l="top":a===i-1&&r%1!=0&&(l="bottom"):l=void 0,t[Math.floor(n+a)]=Object.assign(Object.assign({},e),{id:`${e.id}-${a}`,startTime:o,endTime:s,cellLength:1,halfFill:l})}}})),t}(n);e[t]=function(e){var t,n,r,i;let a=0;switch(h){case"fixed":for(e=e.reduce(((e,t)=>{const n=e.length>0?e[e.length-1]:e[0];return Wk(t)&&Wk(n)?e:[...e,t]}),[{}]);a<e.length;){if(Wk(e[a])){const o=null!==(n=null===(t=e[a-1])||void 0===t?void 0:t.endTime)&&void 0!==n?n:C,s=null!==(i=null===(r=e[a+1])||void 0===r?void 0:r.startTime)&&void 0!==i?i:D;if(o!==s){const t=sc.getTimeDiffInMinutes(o,s)/f;e[a]=Object.assign(Object.assign({},P(a)),{startTime:o,endTime:s,cellLength:t})}}a++}break;case"flexible":for(;a<e.length;)Wk(e[a])?(e[a]=P(a),a++):a+=e[a].cellLength}return e.filter((e=>!Wk(e)&&e.cellLength>0))}(r)})),e}return{}}),[u]),A=e=>{S(e)},R=()=>{S(void 0)},F=e=>{e.preventDefault(),$((e=>!e))},B=e=>{var t;const n=tc.isWithinRange(e,o?Wl(o):void 0,s?Wl(s):void 0),i=null!==(t=r&&r.includes(e.format(x)))&&void 0!==t&&t;return!n||i};function P(e,t=1){return{id:`${e.toString()}-${(new Date).getTime()}`,startTime:"",endTime:"",clickable:!1,styleAttributes:{backgroundColor:"#E0E4E5"},cellLength:t}}return e.jsxs(HA,{children:[e.jsx(zA,{children:k.map(((t,n)=>{const r=(e=>{const t=e.format(x),n=B(e),r={},a=p&&!n;return n&&(r.disabled=!0),r.interactive=p?a:null,a&&j&&e.isSame(j,"day")&&(r.circleLeft="hover-current",r.circleRight="hover-current",r.circleShadow=!0),[i].includes(t)&&(r.labelType="selected",r.circleLeft="selected-outline",r.circleRight="selected-outline"),r})(t);return e.jsx(yd,Object.assign({date:t,calendarDate:Wl(i),onSelect:()=>{((e,t)=>{!t&&p&&a(e)})(t,!r.interactive)},onHover:A,onHoverEnd:R},r),`day-${n}`)}))}),e.jsx(zA,{children:k.map(((t,n)=>e.jsx(PA,{children:e.jsx(LA,Object.assign({weight:"semibold",$disabled:B(t)},{children:Wl(t).format("ddd")}))},`week-day-${n}`)))}),(()=>{let t=!1;const n=e=>{const n=Wl(C,"HH:mm").add(4*e*f,"minutes"),r=n.format("h"),i=n.format("mm"),a=n.format("a");let o=`${r}${"00"!==i?` ${i}`:""}`;return t||"pm"!==a||"00"!==i||(o+=` ${a}`,t=!0),o};return e.jsx(YA,Object.assign({$height:M},{children:Array(Math.ceil(T/4)).fill(void 0).map(((t,r)=>e.jsx(UA,{children:e.jsx(KA,{children:n(r)})},`time-${r}`)))}))})(),e.jsx(WA,Object.assign({style:I},{children:e.jsx(VA,Object.assign({ref:E},{children:k.map(((t,n)=>{var r;const i=t.format(x),a=null!==(r=N[i])&&void 0!==r?r:Array("flexible"===h?T:1).fill(void 0).map(((e,t)=>P(t,"fixed"===h?T:void 0)));return e.jsx(qA,{children:a.map((t=>{const{id:n,clickable:r=!0,styleAttributes:a,cellLength:o,halfFill:s}=t,{styleType:l="default",backgroundColor:c,backgroundColor2:d}=a;return e.jsx(QA,{$type:"vertical",$variant:"default",$styleType:l,$bgColor:c,$bgColor2:d,$halfFill:s,$clickable:r,$height:"fixed"===h?12*o+4*(o-1):12,onClick:()=>r&&((e,t)=>{g&&g(e,t)})(i,t)},n)}))},`wrapper-${n}`)}))}),`week-cell-${n.format(x)}`)})),(()=>{if(d&&E.current&&!(_&&_<d))return e.jsx(XA,{children:e.jsxs(GA,Object.assign({"data-testid":"time-bar-expand-collapse-button",styleType:"light",onClick:F},{children:[e.jsx(ZA,{$isExpanded:w}),(w?"Hide":"Show")+" later times"]}))})})()]})},dR=K.default.div`
    min-width: 18.5rem;

    [data-id="calendar-header"] {
        ${is.MaxWidth.mobileL} {
            padding: 0 1.25rem;
        }
    }
`,uR="YYYY-MM-DD",fR=K.default(ad)`
    ${e=>{const{$variant:t}=e;if("default"===t)return i.css`
                    ${ys.getFontFamily("H5","semibold")}
                    color: ${ts.Neutral[3]};
                `}}
`,hR=K.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    user-select: none;
    margin-bottom: 0.188rem;
`,pR=K.default.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
`,gR=K.default.div`
    grid-column: 1 / -1;
    display: flex;
    min-height: 7.625rem;
`,mR=K.default.div`
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
`,bR=K.default.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 1px;
`;Wl.extend(Kl);const vR={id:"1",startTime:"",endTime:"",clickable:!1,styleAttributes:{styleType:"stripes",backgroundColor:"#ECEFEF",backgroundColor2:"#E0E4E5"}},yR=({calendarDate:n,disabledDates:r,selectedDate:i,onSelect:a,minDate:o,maxDate:s,slots:l,enableSelection:c=!0,onSlotClick:d})=>{const u=t.useMemo((()=>tc.generateDaysForCurrentWeek(n)),[n]),f="YYYY-MM-DD",h=e=>{const t=e.format(f),n=(e=>{const t=tc.isWithinRange(e,o?Wl(o):void 0,s?Wl(s):void 0),n=r&&r.includes(e.format(f));return!t||n})(e),a={},l={};return n&&(a.$disabledDisplay=!0,l.$disabledDisplay=!0),a.$interactive=c&&!n,[i].includes(t)&&(a.$selected=!0,l.$selected=!0),{styleCircleProps:a,styleLabelProps:l}};return e.jsxs(pR,{children:[e.jsx(td,{children:u.map(((t,n)=>{const r="default",{styleCircleProps:i,styleLabelProps:o}=h(t);return e.jsx(nd,{children:e.jsx(od,Object.assign({$variant:r,onClick:()=>((e,t)=>{!t&&c&&a(e)})(t,!i.$interactive)},i,{children:e.jsx(fR,Object.assign({weight:o.$selected?"semibold":"regular",$variant:r},o,{children:t.format("D")}))}))},`day-${n}`)}))}),u.map(((t,n)=>e.jsx(hR,{children:e.jsx(exports.Text.XSmall,Object.assign({weight:"semibold"},{children:Wl(t).format("ddd")}))},`week-day-${n}`))),e.jsx(gR,{children:u.map(((t,n)=>{const r=t.format(f),i=l&&(l[r]?l[r]:[vR]);return e.jsx(bR,{children:i&&i.map((t=>{const{id:n,startTime:i,endTime:a,clickable:o=!0,styleAttributes:s}=t,{color:l,styleType:c="default",backgroundColor:u,backgroundColor2:f}=s;return e.jsx(RA,Object.assign({$type:"vertical",$variant:"default",$styleType:c,$bgColor:u,$bgColor2:f,$clickable:o,onClick:()=>o&&((e,t)=>{d(e,t)})(r,t)},{children:e.jsxs(mR,Object.assign({style:{color:l}},{children:[e.jsx("span",{children:tc.convertTo12HourFormat(i)}),a&&i&&e.jsx("span",{children:"-"}),e.jsx("span",{children:tc.convertTo12HourFormat(a)})]}))}),n)}))},`wrapper-${n}`)}))},`week-cell-${n.format(f)}`)]})},xR=K.default.div`
    min-width: 18.5rem;

    [data-id="calendar-header"] {
        ${is.MaxWidth.mobileL} {
            padding: 0 1.25rem;
        }
    }
`,wR="YYYY-MM-DD",$R=K.default.div`
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
`,jR=K.default.div`
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
`,SR=K.default.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 1rem;
`,kR=K.default.div`
    grid-column: ${e=>e.$startCol?e.$startCol:3} / span
        ${e=>e.$colSpan?e.$colSpan:8};

    ${is.MaxWidth.tablet} {
        grid-column: span 8;
    }

    ${is.MaxWidth.mobileL} {
        grid-column: span 4;
    }
`,OR=K.default(exports.Text.H3)`
    margin-bottom: 1rem;

    ${is.MaxWidth.tablet} {
        margin-bottom: 1.5rem;
    }
`,CR=K.default(exports.Text.H4)`
    margin-top: -0.125rem;
    margin-bottom: 0.5rem;
`,DR=K.default.div`
    display: flex;

    :last-of-type ${jR} {
        margin-bottom: 0;
    }
`,TR=K.default.div`
    margin-bottom: 2rem;
    width: 100%;
`,_R=K.default(exports.Text.H3)`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 0.5rem;
    gap: 0.5rem;
`,ER=K.default(mI)`
    padding: 0.125rem 0.5rem;
`,MR=["#FFE6BB","#D8EFEB","#E6EAFE","#FAE4E5","#D3EEFC"],IR=252,NR=i.keyframes`
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
`,AR=K.default(vh)`
    color: ${ts.Neutral[3]};
    svg {
        ${e=>{if(e.$loading)return i.css`
                    animation: ${NR} 4s linear infinite;
                `}}
    }
`,RR=K.default.div`
    display: flex;
    padding-bottom: 1rem;
    justify-content: space-between;
`,FR=K.default.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.625rem;
`,BR=K.default(exports.Text.H6)`
    color: ${ts.Neutral[3]};
`,PR=K.default(zf)`
    width: 400px;
`,LR=t=>{var{selectedDate:n,loading:r,tableContainerRef:i,totalRecords:a,onPreviousDayClick:o,onNextDayClick:s,onRefresh:l,onCalendarDateSelect:c}=t,d=X(t,["selectedDate","loading","tableContainerRef","totalRecords","onPreviousDayClick","onNextDayClick","onRefresh","onCalendarDateSelect"]);const f=()=>{i.current&&(i.current.scrollTop=0)},h=()=>{l&&(f(),l())};return e.jsxs(RR,{children:[e.jsx(PR,Object.assign({selectedDate:n,loading:r},d,{onRightArrowClick:e=>{f(),s(e)},onLeftArrowClick:e=>{f(),o(e)},onCalendarDateSelect:c})),void 0===a?e.jsx(e.Fragment,{}):e.jsxs(FR,{children:[e.jsxs(BR,Object.assign({"data-testid":"timetable-records-results",weight:"semibold"},{children:[a," results found"]})),l&&e.jsx(AR,Object.assign({"data-testid":"timetable-records-refresh-btn",styleType:"light",sizeType:"small",disabled:r,onClick:h,$loading:r},{children:e.jsx(u.RefreshIcon,{})}))]})]})},zR=K.default.div`
    display: flex;
    width: 100%;
`,HR=K.default.div`
    border-bottom: 1px solid ${ts.Neutral[5]};
    ${e=>{if(e.$isOnTheHour)return i.css`
                box-shadow: inset -0.5px 0px ${ts.Accent.Light[1]};
            `}}
`,WR=K.default.div`
    display: flex;
    margin-bottom: 2px;
    height: 65px;
`,VR=K.default.div`
    width: 2px;
    height: 100%;
`,YR=K.default.div`
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
`,UR=K.default(exports.Text.H6)`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`,KR=K.default(exports.Text.XSmall)`
    color: ${ts.Neutral[3]};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`,qR=Y.default.memo((({id:t,startTime:n,endTime:r,title:i,subtitle:a,status:o,intervalWidth:s,rowBarColor:l,containerRef:c,customPopover:d,onClick:u})=>{const f=0===Wl(r,"HH:mm").get("minutes"),h=sc.getTimeDiffInMinutes(n,r)/15*s-2,p=!!u||d&&"click"===d.trigger;return e.jsx((({wrapper:e,children:t})=>d?e(t):t),Object.assign({wrapper:t=>(t=>{const n={position:"bottom-start",rootNode:c,customOffset:d.offset,children:t,trigger:d.trigger,delay:d.delay,popoverContent:d.content};return e.jsx(qv,Object.assign({},n,{children:t}))})(t)},{children:e.jsx(HR,Object.assign({"data-testid":"block-container",$isOnTheHour:f},{children:e.jsxs(WR,{children:[e.jsxs(YR,Object.assign({$width:h,$status:o,$bgColour:l,$isClickable:p,onClick:e=>{u&&u({id:t,startTime:n,endTime:r,status:o,title:i,subtitle:a,customPopover:d},e)}},{children:[i&&e.jsx(UR,Object.assign({weight:"semibold"},{children:i})),a&&e.jsx(KR,Object.assign({weight:"bold"},{children:a}))]})),e.jsx(VR,{})]})}),"block-container-key")}))})),XR=n=>{var{id:r,timetableMinTime:i,timetableMaxTime:a,rowMinTime:o=i,rowMaxTime:s=a,rowCells:l,rowBarColor:c,intervalWidth:d,containerRef:u,outOfRangeCellPopover:f}=n,h=X(n,["id","timetableMinTime","timetableMaxTime","rowMinTime","rowMaxTime","rowCells","rowBarColor","intervalWidth","containerRef","outOfRangeCellPopover"]);const p=h["data-testid"]||"timetable-row",g=t.useMemo((()=>{const e=[];Wl(i,"HH:mm").isBefore(Wl(o,"HH:mm"))&&e.push({id:r,startTime:i,endTime:o,status:"blocked",customPopover:f});const t=[...l].sort(((e,t)=>{const n=Wl(e.startTime,"HH:mm"),r=Wl(t.startTime,"HH:mm");return n.isBefore(r)?-1:n.isAfter(r)?1:0}));return t.forEach(((t,n)=>{var i;const{endTime:a}=t;e.push(t);const o=Wl((null===(i=l[n+1])||void 0===i?void 0:i.startTime)||s,"HH:mm");let c=Wl(a,"HH:mm");for(;c.isBefore(o);)if(d=o,c.get("hour")!=d.get("hour")){const t=c.add(1,"hour").startOf("hour");e.push({id:r,startTime:c.format("HH:mm").toString(),endTime:t.format("HH:mm").toString(),status:"disabled"}),c=t}else e.push({id:r,startTime:c.format("HH:mm").toString(),endTime:o.format("HH:mm").toString(),status:"disabled"}),c=o;var d})),Wl(a,"HH:mm").isAfter(Wl(s,"HH:mm"))&&e.push({id:r,startTime:s,endTime:a,status:"blocked",customPopover:f}),e}),[r,i,a,o,s,l,f]);return e.jsx(zR,Object.assign({"data-testid":p},h,{children:g.map(((t,n)=>e.jsx(qR,Object.assign({},t,{intervalWidth:d,rowBarColor:c,containerRef:u}),`${n}-row-cell-key`)))}))},GR=K.default.div``,ZR=K.default.div`
    display: grid;
    overflow: scroll;
    position: relative;
    grid-template-columns: ${IR}px auto;
`,QR=K.default.div`
    display: grid;
    overflow: scroll;
    position: relative;
    grid-template-columns: ${IR}px fit-content(100%);
    padding-bottom: ${e=>e.$allRecordsLoaded?"0":"128px"};
    ${e=>{if(e.$loading)return i.css`
                :hover {
                    cursor: not-allowed;
                    padding-bottom: 0;
                }
            `}}
`,JR=K.default.div`
    position: sticky;
    top: 0;
    left: 0;
    background-color: white;
    width: ${IR}px;
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
`,eF=K.default.div`
    display: grid;
    position: sticky;
    grid-column: 1 / 2;
    left: 0;
    z-index: 1;
    background-color: white;
    grid-template-rows: repeat(${e=>e.$numOfRows}, ${68}px);
`,tF=K.default.div`
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
`,nF=K.default.div`
    min-width: ${84}px;
    align-content: end;
    margin-bottom: 0.25rem;
`,rF=K.default(exports.Text.H6)`
    color: ${ts.Neutral[3]};
`,iF=K.default.div`
    display: grid;
    grid-template-rows: repeat(${e=>e.$numOfRows}, ${68}px);
`,aF=K.default.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    position: sticky;
    left: 0;
    background-color: white;
    width: ${IR}px;
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
`,oF=K.default(exports.Text.H5)`
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
    white-space: nowrap;
    color: ${ts.Primary};
    :hover {
        cursor: ${e=>e.$isClickable?"pointer":"default"};
    }
`,sF=K.default(exports.Text.XSmall)`
    display: inline-flex;
    gap: 6px;
    align-items: center;
    color: ${ts.Neutral[3]};
    ${e=>{if(!e.$show)return i.css`
                display: none;
            `}}
`,lF=K.default(jl)`
    display: flex;
    align-items: center;
    justify-content: center;
    grid-column: ${e=>e.$isEmptyContent?"1 / -1":"2 / -1"};
    grid-row: 2;
    width: 100%;
    height: 100%;
`,cF=K.default(Ru)`
    grid-column: 1 / -1;
    grid-row: 2;
    padding: 5rem 0 5rem 0;
`,dF=K.default.div`
    display: flex;
    border-bottom: 1px solid ${ts.Neutral[5]};
`,uF=K.default.div`
    border-right: 0.5px solid ${ts.Accent.Light[1]};
    width: ${e=>`${e.$width}px`};
    height: 100%;
    padding: 20px 12px 20px 12px;
`,fF=i.keyframes`
  0% {
        background-position: -468px 0;
    }
    100% {
        background-position: 468px 0;
    }
`,hF=K.default.div`
    height: 28px;
    width: 100%;
    background: linear-gradient(
        to right,
        ${ts.Neutral[6]} 8%,
        ${ts.Neutral[7]} 18%,
        ${ts.Neutral[6]} 33%
    );
    background-size: 800px 104px;
    animation: ${fF} 1.5s forwards infinite;
`,pF=K.default(qv)`
    max-width: 24rem !important;
    :hover {
        cursor: default;
    }
`,gF=e=>{switch(e.$type){case"success":return ts.Validation.Green;case"warning":return ts.Validation.Orange;case"error":return ts.Validation.Red;case"info":return ts.Validation.Blue;default:return}},mF=K.default(Di.div)`
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
            background: ${gF(e).Background};
            border: 1px solid ${gF(e).Border};
            color: ${gF(e).Text};
        `};
`,bF=K.default.div`
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
`,vF=K.default.div`
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
                color: ${gF(e).Icon};
            }
        `};
`,yF=K.default.div`
    display: flex;
    flex-direction: column;
`,xF=K.default(exports.Text.H4)`
    display: flex;

    ${e=>i.css`
            color: ${gF(e).Text};
        `}
`,wF=K.default.div`
    ${e=>i.css`
            p {
                color: ${gF(e).Text};
            }
        `}
`,$F=K.default(qs.Small)`
    align-self: center;
    margin-left: auto;
    height: auto;
    width: fit-content;
    flex-shrink: 0;

    ${is.MaxWidth.mobileL} {
        align-self: flex-start;
        margin-left: 2rem;
    }
`,jF=K.default(ss)`
    padding: 0.75rem;
    margin: -0.75rem;
    align-self: stretch;

    ${e=>i.css`
            svg {
                width: 1.5rem;
                height: 1.5rem;
                color: ${gF(e).Text};
            }
            :hover {
                background: transparent;
            }
            ${is.MaxWidth.mobileL} {
                align-self: center;
            }
        `};
`,SF=4e3,kF=K.default.div`
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
`,OF=K.default(Ed)`
    border-radius: 4px;
    box-shadow: 3px 2px 10px 1px rgba(91, 91, 91, 0.2);
`,CF=K.default.div`
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
`,DF=K.default.div`
    position: relative;
`,TF=n=>{var{visible:r,position:i="top",children:a}=n,o=X(n,["visible","position","children"]);const s=o["data-testid"]||"tooltip",[l,c]=t.useState(i),d=t.useRef(null);t.useEffect((()=>(f(),window.addEventListener("resize",eu(u,300)),()=>{window.removeEventListener("resize",eu(u,300))})),[]);const u=()=>{f()},f=()=>{if(d.current){const e=d.current.getBoundingClientRect();if(e.x<0)switch(i){case"left":case"top":case"bottom":c("right");break;case"right":c("top")}else if(e.x+e.width>window.outerWidth)switch(i){case"right":case"top":case"bottom":c("left");break;case"left":c("top")}else c(i)}};return e.jsxs(kF,Object.assign({position:l,"data-testid":s,visible:r,ref:d},o,{children:[e.jsx(OF,{children:"string"==typeof a?e.jsx(exports.Text.BodySmall,{children:a}):a}),e.jsx(CF,{position:l})]}))},_F=i.css`
    grid-column: ${e=>e.$stretch?"1 / -1":"span 8"};

    ${is.MaxWidth.mobileL} {
        grid-column: 1 / -1;
    }
`,EF=K.default(uy.Content)`
    background: ${({$background:e})=>e?ts.Neutral[7]:"transparent"};
    padding-top: 2rem;
    padding-bottom: 2rem;
`,MF=K.default(exports.Text.H3)`
    margin-bottom: 1rem;
    ${_F}
`,IF=K.default(exports.Text.Body)`
    margin-bottom: 2rem;
    ${_F}
`,NF=K.default.div`
    ${_F}
`,AF=K.default.ul`
    ${_F}
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
`,RF=Y.default.forwardRef(((t,n)=>{var{stretch:r}=t,i=X(t,["stretch"]);return e.jsx(AF,Object.assign({ref:n,$stretch:r},i))})),FF=K.default.li`
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
`,BF=K.default.div`
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
`,PF=K.default.button`
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
`,LF=K.default.span`
    color: ${ts.Neutral[3]};
`,zF=K.default(zs)`
    margin-right: 0.5rem;
    #inner1,
    #inner2,
    #inner3,
    #inner4 {
        border-color: ${ts.Neutral[3]} transparent transparent transparent;
    }
`,HF=K.default(j.ExclamationTriangleIcon)`
    color: ${ts.Validation.Orange.Icon};
    margin-right: 0.5rem;
    height: 1.125rem;
    width: 1.125rem;
`,WF=K.default.span`
    color: ${ts.Validation.Orange.Text};
`,VF=K.default.span`
    ${ys.getTextStyle("Body","semibold")}
    color: ${ts.Primary};
    text-decoration: underline;
    margin-left: 0.5rem;
`,YF=K.default(ll)`
    margin-top: 0.5rem;
`,UF=({label:n,value:r,displayWidth:i="full",maskState:a,maskLoadingState:o,maskChar:s="•",maskRange:l,unmaskRange:c,maskRegex:d,disableMaskUnmask:u,alert:f,maskTransformer:h,onMask:p,onUnmask:g,onTryAgain:m})=>{const[b,v]=t.useState(a);t.useEffect((()=>{v(a)}),[a]);const y=()=>{switch("fail"===o&&m&&m(),b){case"masked":g&&g(),v("unmasked");break;case"unmasked":p&&p(),v("masked")}},x=()=>"string"!=typeof r?r:"masked"===b?dc.maskValue(r,{maskChar:s,maskRange:l,unmaskRange:c,maskRegex:d,maskTransformer:h}):r,j=()=>{switch(o){case"fail":return e.jsxs(e.Fragment,{children:[e.jsx(HF,{}),e.jsx(WF,{children:"Error"}),e.jsx(VF,{children:"Try again?"})]});case"loading":return e.jsxs(e.Fragment,{children:[e.jsx(zF,{}),e.jsx(LF,{children:"Retrieving..."})]});default:return e.jsxs(e.Fragment,{children:[x(),e.jsx(BF,{children:"masked"===b?e.jsx(w.EyeIcon,{"data-testid":"masked-icon"}):e.jsx($.EyeSlashIcon,{"data-testid":"unmasked-icon"})})]})}};return e.jsxs(FF,Object.assign({$widthStyle:i},{children:[e.jsx(iy,{children:n}),"string"!=typeof r?r:b?u?e.jsx(exports.Text.Body,{children:x()}):e.jsx(PF,Object.assign({"data-testid":"clickable-label",onClick:y,"aria-busy":"loading"===o,"aria-live":"polite",type:"button"},{children:j()})):e.jsx(exports.Text.Body,{children:r}),f&&e.jsx(YF,Object.assign({sizeType:"small"},f))]}))},KF=Object.assign((t=>{var{items:n,title:r,description:i,topSection:a,bottomSection:o,children:s,background:l=!0,stretch:c,onMask:d,onUnmask:u,onTryAgain:f}=t,h=X(t,["items","title","description","topSection","bottomSection","children","background","stretch","onMask","onUnmask","onTryAgain"]);const p=e=>()=>{d&&d(e)},g=e=>()=>{u&&u(e)},m=e=>()=>{f&&f(e)},b=()=>{if(n&&n.length>0){const t=n.map(((t,n)=>e.jsx(UF,Object.assign({},t,{onMask:p(t),onUnmask:g(t),onTryAgain:m(t)}),n)));return e.jsx(AF,Object.assign({$stretch:c},{children:t}))}return null};return e.jsx(EF,Object.assign({$background:l},h,{type:"grid"},{children:s||e.jsxs(e.Fragment,{children:[r&&e.jsx(MF,Object.assign({weight:"semibold",$stretch:c},{children:r})),i&&e.jsx(IF,Object.assign({$stretch:c},{children:i})),a&&e.jsx(NF,Object.assign({"data-id":"top-section",$stretch:c},{children:a})),b(),o&&e.jsx(NF,Object.assign({"data-id":"bottom-section",$stretch:c},{children:o}))]})}))}),{ItemSection:RF,Item:UF});exports.Accordion=Js,exports.Alert=ll,exports.BaseTheme=ml,exports.BookingSGTheme=bl,exports.BoxContainer=n=>{var{children:r,title:i,collapsible:a=!0,expanded:o=!1,callToActionComponent:s,displayState:l="default",subComponentTestIds:c,clickableHeader:d}=n,u=X(n,["children","title","collapsible","expanded","callToActionComponent","displayState","subComponentTestIds","clickableHeader"]);const[f,h]=t.useState(!a||o),p=qe(),g=p.ref,m=Dl.useMediaQuery({maxWidth:as.mobileL}),b=e=>{e.stopPropagation(),h(!f)},v=di({height:f?p.height:0}),y=()=>a&&e.jsx(Pl,Object.assign({onClick:b,type:"button","aria-label":f?"Collapse":"Expand","data-testid":(null==c?void 0:c.handle)||"handle"},{children:e.jsx(Ll,Object.assign({$expanded:f},{children:e.jsx(zl,{"aria-hidden":!0})}))}));return e.jsxs(Tl,Object.assign({},u,{children:[e.jsxs(Il,Object.assign({"data-testid":"header",onClick:d&&a&&b,$interactive:d&&a},{children:[e.jsxs(Al,{children:[e.jsx(Nl,Object.assign({id:"title","data-testid":(null==c?void 0:c.title)||"title",weight:"semibold"},{children:i})),(()=>{switch(l){case"error":case"warning":return e.jsx(Rl,Object.assign({$displayState:l,"data-testid":(null==c?void 0:c.displayStateIcon)||`${l}-icon`},{children:e.jsx(Fl,{})}));default:return null}})(),m&&y()]}),s&&e.jsx(Bl,Object.assign({$collapsible:a,"data-testid":"call-to-action-container"},{children:s})),!m&&y()]})),a?e.jsx(_l,Object.assign({style:v,"data-testid":"expandable-container"},{children:e.jsx(Ml,Object.assign({ref:g},{children:r}))})):e.jsx(El,Object.assign({"data-testid":"non-expandable-container"},{children:e.jsx(Ml,{children:r})}))]}))},exports.Breadcrumb=n=>{var{links:r,fadeColor:i,fadePosition:a="both",itemStyle:o,id:s}=n,l=X(n,["links","fadeColor","fadePosition","itemStyle","id"]);const[c,d]=t.useState(!1),[u,f]=t.useState(!1),[h,p]=t.useState(!1),g="left"===a||"both"===a,m="right"===a||"both"===a,b=t.useRef(null),v=t.useRef(null),y=uc((()=>{const e=v.current,t=b.current;e&&t&&r&&r.length>1&&window.innerWidth<=ns.tablet&&(e.scrollLeft=e.scrollWidth-t.offsetWidth)})),x=uc((()=>{const e=window.innerWidth<=ns.tablet;d(e);const t=v.current,n=b.current;if(t&&n&&e&&t.scrollWidth>n.offsetWidth)return f(t.scrollLeft>=1),void p(t.scrollWidth-t.scrollLeft-1>n.offsetWidth);f(!1),p(!1)}));if(fc("resize",x),fc("scroll",x,v.current),hc((()=>{y(),x()}),[y,x]),qe({onResize:y,targetRef:b,refreshMode:"debounce",refreshRate:50,skipOnMount:!0}),!r)return null;return e.jsxs(vc,Object.assign({ref:b,id:s||"breadcrumb"},l,{children:[e.jsx("nav",{children:e.jsx(yc,Object.assign({ref:v},{children:r.map(((t,n)=>{let i;return t.children?(i=n!==r.length-1&&t.href?e.jsx(Sc,Object.assign({},t,{weight:"semibold"})):e.jsx(jc,Object.assign({weight:"semibold"},{children:t.children})),e.jsxs(wc,Object.assign({$styleProps:o},{children:[i,n<r.length-1&&e.jsx($c,{})]}),n)):null}))}))}),c&&(()=>{let t;return t=Array.isArray(i)&&i.length>0?{left:i,right:i}:i||{left:void 0,right:void 0},e.jsxs(e.Fragment,{children:[u&&g&&e.jsx(xc,{$backgroundColor:t.left,$position:"left"}),h&&m&&e.jsx(xc,{$backgroundColor:t.right,$position:"right"})]})})()]}))},exports.Button=qs,exports.ButtonWithIcon=Oc,exports.CCubeTheme=xl,exports.Calendar=n=>{var{className:r,styleType:i="bordered",value:a,onSelect:o}=n,s=X(n,["className","styleType","value","onSelect"]);const[l,c]=t.useState(a);return t.useEffect((()=>{c(a)}),[a]),e.jsx(Td,Object.assign({className:r,$hasBorder:"bordered"===i},{children:e.jsx(Cd,Object.assign({type:"standalone",value:l,initialCalendarDate:l,onSelect:e=>{c(e),null==o||o(e)}},s))}))},exports.Card=Ed,exports.Checkbox=Ad,exports.Color=ts,exports.Component=fE,exports.CountdownTimer=n=>{var{className:r,align:i="right",timer:a,timestamp:o,notifyTimer:s,offset:l,mobileOffset:c,show:d,fixed:f=!0,"data-testid":h,onFinish:p,onNotify:g,onTick:m}=n,b=X(n,["className","align","timer","timestamp","notifyTimer","offset","mobileOffset","show","fixed","data-testid","onFinish","onNotify","onTick"]);const v=t.useRef(),y=t.useRef(!1),[x,w]=t.useState(0),[$,j]=t.useState(0),[S,k]=t.useState(0),[O,C]=t.useState(!1),[D]=((e,n,r)=>{const[i,a]=t.useState(e);t.useEffect((()=>{if(!n)return;const t=null!=r?r:Date.now()+1e3*e,i=o(t);return()=>clearTimeout(i)}),[r,n,e]);const o=e=>{const t=()=>{const n=e-Date.now(),r=n%1e3,i=Math.max(Math.round(n/1e3),0);if(a(i),0!==i)return setTimeout(t,r>500?r:r+1e3)};return t()};return[i]})(a,O,o),{ref:T,inView:_}=du({threshold:1,rootMargin:-1*x+"px 0px 0px 0px",initialInView:!0}),E=!f||_,M=Dl.useMediaQuery({maxWidth:ns.mobileL});t.useEffect((()=>{C(d)}),[d]),t.useEffect((()=>{0===D?R():D<=s&&(N(),A())}),[D]),t.useEffect((()=>{const e=function(){var e,t;const n=null!==(e=null==l?void 0:l.top)&&void 0!==e?e:168,r=null!==(t=null==c?void 0:c.top)&&void 0!==t?t:80,i=M?r:n;return i}();w(e)}),[M,null==l?void 0:l.top,null==c?void 0:c.top]),t.useEffect((()=>{if(v.current){const e=ru(I,300);return I(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}}),[v.current]),t.useEffect((()=>{y.current=!1}),[a,d]);const I=()=>{var e;const t=null===(e=v.current)||void 0===e?void 0:e.getBoundingClientRect();k(t.x),j(t.right)},N=()=>{m&&m(D)},A=()=>{g&&!y.current&&(y.current=!0,g())},R=()=>{C(!1),p&&p()};const F=()=>{const{minutes:t,seconds:n}=vu.toMinutesSeconds(D),r=1!==t?"mins":"min",i=1!==n?"secs":"sec";return e.jsxs(e.Fragment,{children:[e.jsx(u.ClockIcon,{}),e.jsx(gu,{children:"Time left:"}),e.jsxs(mu,{children:[t," ",r," ",String(n).padStart(2,"0")," ",i]})]})};if(void 0!==typeof window)return O||0===D?e.jsxs(uu,Object.assign({className:r},b,{children:[e.jsx("div",{ref:T}),e.jsx(hu,Object.assign({"data-testid":h,"data-id":"countdown-wrapper",ref:v,inert:E?void 0:"",$visible:E,$warn:D<=s},{children:F()})),v.current&&!E&&(()=>{var t,n;const r=null!==(t=null==l?void 0:l.left)&&void 0!==t?t:"left"===i?S:void 0,a=null!==(n=null==l?void 0:l.right)&&void 0!==n?n:"right"===i?Math.floor(document.body.clientWidth-$):void 0;return e.jsx(pu,Object.assign({"data-testid":h,"data-id":"fixed-countdown-wrapper",$warn:D<=s,$top:x,$left:r,$right:a},{children:F()}))})()]})):e.jsx(e.Fragment,{})},exports.DataTable=n=>{var{id:r,headers:i,rows:a,className:o,sortIndicators:s,alternatingRows:l,loadState:c="success",enableMultiSelect:d,selectedIds:f,disabledIds:h,enableActionBar:p,enableSelectAll:g,enableStickyHeader:m,emptyView:b,actionBarContent:v,renderCustomEmptyView:y,onHeaderClick:x,onSelect:w,onSelectAll:$,onClearSelectionClick:j}=n,S=X(n,["id","headers","rows","className","sortIndicators","alternatingRows","loadState","enableMultiSelect","selectedIds","disabledIds","enableActionBar","enableSelectAll","enableStickyHeader","emptyView","actionBarContent","renderCustomEmptyView","onHeaderClick","onSelect","onSelectAll","onClearSelectionClick"]);const k=t.useRef(null),O=t.useRef(null),C=t.useRef(null),D=t.useRef(null),T=t.useRef(null),[_,E]=t.useState(!1),[M,I]=t.useState(!1),[N,A]=t.useState(!1),[R,F]=t.useState(!1),[B,P]=t.useState(!1),{ref:L,inView:z}=du(),H=t.useCallback((()=>{if(!T.current||!D.current)return;const e=T.current.scrollHeight>T.current.clientHeight;E(e),e?D.current.style.transform="translateY(0)":Z()}),[]);t.useEffect((()=>{H()}),[]),qe({onResize:H});fc("scroll",(()=>{requestAnimationFrame((()=>{_?G():Z()})),T.current&&A(T.current.getBoundingClientRect().bottom<=window.innerHeight)}),"window"),t.useEffect((()=>{Q()}),[a]);const W=()=>(null==f?void 0:f.length)===a.length,V=e=>!!(null==f?void 0:f.includes(e)),Y=e=>!!l&&e%2==1,U=e=>!!(null==h?void 0:h.includes(e)),K=e=>{if(S["data-testid"])return`${S["data-testid"]}-${e}`},q=()=>i.length+(d?1:0),G=()=>{if(!T.current)return;const e=T.current.getBoundingClientRect();F(e.bottom>window.innerHeight+30&&e.top<window.innerHeight-200)},Z=()=>{if(!(k.current&&O.current&&T.current&&D.current&&C.current))return;const e=O.current.getBoundingClientRect();if(e.top>window.innerHeight){const t=e.bottom-window.innerHeight,n=k.current.getBoundingClientRect().height-C.current.clientHeight-32,r=Math.min(t,n);D.current.style.transform=`translateY(-${r}px)`}else D.current.style.transform="translateY(0)"},Q=()=>{k.current&&T.current&&P(k.current.clientHeight+(p?56:0)<T.current.clientHeight)},J=t=>{const{fieldKey:n,label:r,clickable:i=!1,style:a}="string"==typeof t?{fieldKey:t,label:t,style:void 0}:t;return e.jsx(Uu,Object.assign({"data-testid":K(`header-${n}`),$clickable:i,onClick:()=>i&&(null==x?void 0:x(n)),style:a,$isCheckbox:!1},{children:e.jsxs(Ku,{children:["string"==typeof r?e.jsx(exports.Text.H4,Object.assign({weight:"bold"},{children:r})):r,ee(n)]})}),n)},ee=t=>{const n=null==s?void 0:s[t];return n?"asc"===n?e.jsx(u.ArrowUpIcon,{"data-testid":K(`header-${t}-arrowup`)}):e.jsx(u.ArrowDownIcon,{"data-testid":K(`header-${t}-arrowdown`)}):e.jsx(e.Fragment,{})},te=()=>e.jsx(Uu,Object.assign({"data-testid":K("header-selection"),$clickable:!1,$isCheckbox:!0},{children:e.jsx(Zu,{children:g&&e.jsx(Ad,{displaySize:"small",checked:W(),indeterminate:f&&0!==f.length&&!W(),onClick:()=>{$&&$(W())}})})})),ne=(t,n)=>{const r="string"!=typeof t?t.style:void 0,i="string"==typeof t?t:t.fieldKey,a=n.id.toString(),o=n[i],s=`${a}-${i}`;return e.jsx(Xu,Object.assign({"data-testid":K(`row-${s}`),style:r,$isCheckbox:!1},{children:"string"==typeof o||"number"==typeof o?e.jsx(Gu,{children:o}):"function"==typeof o?o(n,{isSelected:V(a)}):o}),s)},re=t=>e.jsx(Xu,Object.assign({"data-testid":K(`row-${t}-selection`),$isCheckbox:!0},{children:e.jsx(Zu,{children:e.jsx(Ad,{displaySize:"small",checked:V(t),onClick:()=>{w&&w(t,!V(t))},disabled:U(t)})})})),ie=()=>e.jsx(Ju,Object.assign({type:"no-item-found"},b,{title:(null==b?void 0:b.title)?"string"==typeof b.title?e.jsx(exports.Text.H3,{children:b.title}):b.title:e.jsx(exports.Text.H3,{children:"No <items> found"}),description:(null==b?void 0:b.description)?b.description:"No matching rows"}));return e.jsxs(Pu,Object.assign({id:r||"table-wrapper","data-testid":S["data-testid"]||"table",className:o,ref:T,onScroll:()=>{_&&T.current&&I(T.current.scrollTop+T.current.clientHeight>=T.current.scrollHeight)}},{children:[e.jsx(Lu,{children:e.jsxs(zu,Object.assign({$end:N,$scrollable:_,ref:k,$stickyHeader:m},{children:[e.jsx("thead",Object.assign({ref:C},{children:e.jsxs(Yu,{children:[d&&te(),i.map(J)]})})),e.jsx(Hu,Object.assign({$showLastRowBottomBorder:B},{children:"success"===c?!a||a.length<1?e.jsx("tr",{children:e.jsx(ef,Object.assign({colSpan:q()},{children:y?y():ie()}))}):e.jsx(e.Fragment,{children:null==a?void 0:a.map(((t,n)=>e.jsxs(qu,Object.assign({"data-testid":K(`row-${t.id.toString()}`),$alternating:Y(n),$isSelectable:d,$isSelected:V(t.id.toString())},{children:[d&&re(t.id.toString()),i.map((e=>ne(e,t)))]}),t.id.toString())))}):e.jsx("tr",{children:e.jsx("td",Object.assign({colSpan:q()},{children:e.jsx(Qu,{children:"loading"===c&&e.jsx(jl,{})})}))})}))]}))}),p&&f&&f.length>0&&(()=>{var t,n,r;return e.jsx(Wu,Object.assign({ref:D,$fixed:R,$left:null===(n=null===(t=null==k?void 0:k.current)||void 0===t?void 0:t.getBoundingClientRect())||void 0===n?void 0:n.left,$width:null===(r=null==k?void 0:k.current)||void 0===r?void 0:r.clientWidth},{children:e.jsxs(Vu,Object.assign({$float:(_?!M:!z)||R,$scrollable:_},{children:[e.jsx(exports.Text.H5,Object.assign({weight:"semibold"},{children:`${f.length} item${f.length>1?"s":""} selected`})),e.jsx(qs.Small,Object.assign({styleType:"link",onClick:j},{children:"Clear selection"})),v]}))}))})(),e.jsx("div",{ref:e=>{O.current=e,L(e)}})]}))},exports.DateInput=Ff,exports.DateNavigator=zf,exports.DateRangeInput=Qf,exports.DesignToken=Ys,exports.Divider=t=>{var{thickness:n=1,lineStyle:r="solid",layoutType:i="flex",color:a,className:o,mobileCols:s=4,tabletCols:l=8,desktopCols:c=12}=t,d=X(t,["thickness","lineStyle","layoutType","color","className","mobileCols","tabletCols","desktopCols"]);switch(i){case"flex":return e.jsx(rh,Object.assign({className:o,$thickness:n,$lineStyle:r,$color:a},d));case"grid":return e.jsx(eh,Object.assign({className:o,mobileCols:s,tabletCols:l,desktopCols:c},d,{children:e.jsx(rh,{$thickness:n,$lineStyle:r,$color:a})}))}},exports.Drawer=n=>{var{children:r,heading:i,show:a,onClose:o,onOverlayClick:s}=n,l=X(n,["children","heading","show","onClose","onOverlayClick"]);const[c,d]=t.useState(a),[u]=t.useState((()=>cc.generate())),f=t.useRef();t.useEffect((()=>{if(!a){const e=setTimeout((()=>d(!1)),500);return()=>clearTimeout(e)}d(!0)}),[a]);return e.jsx(sh,Object.assign({show:c,enableOverlayClick:!0,onOverlayClick:s},{children:e.jsxs(dh,Object.assign({$show:a,"data-testid":"drawer",onClick:e=>{e.stopPropagation()},role:"dialog","aria-labelledby":u,onTransitionEnd:e=>{"visibility"===e.propertyName&&a&&f.current.focus()}},l,{children:[e.jsxs(uh,{children:[e.jsx(hh,Object.assign({id:u,ref:f,tabIndex:-1},{children:i})),e.jsx(fh,Object.assign({"aria-label":"Close drawer",onClick:o,focusHighlight:!1},{children:e.jsx(m.CrossIcon,{"aria-hidden":!0})}))]}),e.jsx(ph,{children:r})]}))}))},exports.ESignature=Yh,exports.ErrorDisplay=Ru,exports.FeedbackRating=t=>{const{imgSrc:n,buttonLabel:r,description:i,rating:a,onRatingChange:o,onSubmit:s}=t,l=X(t,["imgSrc","buttonLabel","description","rating","onRatingChange","onSubmit"]),c=null!=n?n:Uh,d=null!=i?i:qh;return e.jsxs(ip,Object.assign({},l,{children:[c&&e.jsx(rp,{"data-testid":"feedback-banner-image",src:c,alt:"",onError:e=>e.currentTarget.style.display="none"}),e.jsxs(ap,{children:[e.jsx(exports.Text.H3,Object.assign({weight:"semibold"},{children:d})),e.jsx(np,{description:d,rating:a,onRatingChange:o}),e.jsx(op,Object.assign({disabled:!a,onClick:s,type:"button"},{children:null!=r?r:Kh}))]})]}))},exports.FileDownload=({id:t,fileItems:n,title:r,description:i,onDownload:a,"data-testid":o,className:s,styleType:l="bordered"})=>{const c=e=>G(void 0,void 0,void 0,(function*(){a&&(yield a(e))}));return e.jsxs(sp,Object.assign({id:t?`${t}-file-download`:"file-download",className:s,"data-testid":o,$border:"bordered"===l},{children:[(r||i)&&e.jsxs(lp,{children:[r?"string"==typeof r?e.jsx(cp,Object.assign({weight:"regular"},{children:r})):e.jsx(dp,{children:r}):null,i?"string"==typeof i?e.jsx(up,Object.assign({weight:"regular"},{children:i})):e.jsx(fp,{children:i}):null]}),e.jsx(hp,{children:n&&n.length>0&&n.map((t=>e.jsx(Ep,{fileItem:t,onDownload:c},t.id)))})]}))},exports.FileUpload=({styleType:n="bordered",fileItems:r,title:i,description:a,maxFiles:o,warning:s,className:l,name:c,id:d,"data-testid":u,accept:f,capture:h,multiple:p,disabled:g,sortable:m=!1,fileDescriptionMaxLength:b,editableFileItems:v=!1,errorMessage:y,readOnly:x,onChange:w,onDelete:$,onEdit:j,onSort:S})=>{const k=t.useRef(),[O,C]=t.useState(),D=()=>!!o&&r.length>=o;return e.jsx(Ip.Provider,Object.assign({value:{activeId:O,setActiveId:C}},{children:e.jsxs(dm,Object.assign({ref:k,onChange:e=>{!g&&w&&w(e)},id:d?`${d}-dropzone`:"dropzone",accept:f,capture:h,border:"bordered"===n,className:l,"data-testid":u,name:c,multiple:p,disabled:g||D()||x},{children:[(i||a)&&e.jsxs(kD,{children:[i?"string"==typeof i?e.jsx(OD,Object.assign({weight:"regular"},{children:i})):e.jsx(CD,{children:i}):null,a?"string"==typeof a?e.jsx(DD,Object.assign({weight:"regular"},{children:a})):e.jsx(TD,{children:a}):null]}),s&&e.jsx(_D,Object.assign({type:"warning"},{children:s})),e.jsx(SD,{fileItems:r,editableFileItems:v,fileDescriptionMaxLength:b,sortable:m,disabled:g,readOnly:x,onItemDelete:e=>{$&&$(e)},onItemUpdate:e=>{j&&j(e)},onSort:e=>{S&&S(e)}}),y&&e.jsx(ND,Object.assign({type:"error"},{children:y})),!x&&e.jsxs(ED,{children:[e.jsx(MD,Object.assign({type:"button",styleType:"secondary",disabled:!!O||g||D(),onClick:e=>{g||(e.preventDefault(),k.current&&k.current.openFileDialog())}},{children:"Upload files"})),e.jsx(ID,{children:"or drop them here"})]})]}))}))},exports.Filter=hT,exports.Footer=t=>{var{children:n,links:r,lastUpdated:a,disclaimerLinks:o,showDownloadAddon:s,logoSrc:l,copyrightInfo:c,onFooterLinkClick:d,layout:u="default"}=t,f=X(t,["children","links","lastUpdated","disclaimerLinks","showDownloadAddon","logoSrc","copyrightInfo","onFooterLinkClick","layout"]);const h="stretch"===u,p=i.useTheme(),g=t=>t.map(((t,n)=>{const r=X(t,["data-options"]);return e.jsx("li",{children:e.jsx(ST,Object.assign({},r,{onClick:e=>((e,t)=>{t.onClick?(e.preventDefault(),t.onClick(e)):d&&(e.preventDefault(),d(t))})(e,t)}))},n)}));return e.jsxs(jT,Object.assign({},f,{children:[(()=>{let t=null;return n||((r||s)&&(t=e.jsxs(e.Fragment,{children:[e.jsx(OT,Object.assign({"data-testid":"logo-section"},{children:e.jsx("img",{src:l||$T.getFooterLogo(null==p?void 0:p.resourceScheme),alt:"LifeSG","data-testid":"logo"})})),(null==r?void 0:r[0])&&e.jsx(CT,Object.assign({"data-testid":"link-col-1"},{children:g(r[0])}),"link-col-1"),(null==r?void 0:r[1])&&e.jsx(CT,Object.assign({"data-testid":"link-col-2"},{children:g(r[1])}),"link-col-2"),s&&e.jsx(DT,{children:e.jsx(vT,{})})]})),t?e.jsx(kT,Object.assign({type:"grid",stretch:h},{children:t})):null)})(),e.jsx(TT,{}),e.jsxs(_T,Object.assign({type:"grid",stretch:h},{children:[e.jsx(ET,{children:(()=>{const t=$T.getDisclaimerLinks(null==p?void 0:p.resourceScheme,o);return Object.keys(t).map((n=>e.jsx(IT,Object.assign({},t[n]),n)))})()},"disclaimer"),e.jsx(MT,{children:e.jsx(exports.Text.XSmall,Object.assign({"data-testid":"copyright-text"},{children:c||e.jsxs(e.Fragment,{children:["©"," ",$T.getCopyrightInfo(a,null==p?void 0:p.resourceScheme)]})}))},"copyright")]}))]}))},exports.Form=UC,exports.FullscreenImageCarousel=hE,exports.HistogramSlider=Py,exports.IconButton=vh,exports.ImageButton=gE,exports.Input=Vy,exports.InputGroup=Yj,exports.InputMultiSelect=tO,exports.InputNestedMultiSelect=iO,exports.InputNestedSelect=aO,exports.InputRangeSelect=CO,exports.InputRangeSlider=Iy,exports.InputSelect=DO,exports.InputSlider=AO,exports.Layout=uy,exports.LinkList=n=>{var{items:r,maxShown:i,style:a="default",onItemClick:o}=n,s=X(n,["items","maxShown","style","onItemClick"]);const[l,c]=t.useState(!i||i>=r.length),d=i?r.slice(0,i):r,u=i?r.slice(i):[],f=qe(),h=f.ref,p=(e,t)=>{t.onClick?(e.preventDefault(),t.onClick(e)):o&&(e.preventDefault(),o(t,e))},g=()=>{c(!l)},m=(t,n,r,i)=>{const o="small"===a?yE:vE;return e.jsxs(e.Fragment,{children:[e.jsxs($E,{children:[e.jsx(o,Object.assign({"data-testid":`link-title-${t}`,weight:"semibold"},{children:n})),r&&e.jsx(jE,Object.assign({"data-testid":`link-description-${t}`},{children:r})),i]}),e.jsx(xE,{})]})},b=di({height:l?f.height:0});return e.jsxs(bE,Object.assign({},s,{children:[d.map(((t,n)=>{const{title:r,description:i,secondaryDescription:a,onClick:o}=t,s=X(t,["title","description","secondaryDescription","onClick"]);return e.jsx(wE,Object.assign({"data-testid":`list-item-shown-${n}`,onClick:e=>p(e,t)},s,{children:m(n,r,i,a)}),`list-item-shown-${n}`)})),u.length>0&&e.jsx(SE,Object.assign({style:b,"data-testid":"minimised-content"},{children:e.jsx(kE,Object.assign({ref:h},{children:u.map(((t,n)=>{const{title:r,description:i,onClick:a,secondaryDescription:o}=t,s=X(t,["title","description","onClick","secondaryDescription"]);return e.jsx(wE,Object.assign({"data-testid":`list-item-minimised-${n}`,onClick:e=>p(e,t)},s,{children:m(n,r,i,o)}),`list-item-minimised-${n}`)}))}))})),u.length>0&&e.jsxs(TE,Object.assign({type:"button",onClick:g,"data-testid":"toggle-button",$showMinimised:l},{children:[e.jsx(OE,Object.assign({weight:"semibold","data-testid":"toggle-button-label"},{children:l?"View less":"View more"})),l?e.jsx(DE,{}):e.jsx(CE,{})]}))]}))},exports.LoadingDots=hl,exports.LoadingDotsSpinner=jl,exports.LoadingSpinner=n=>e.jsx(ul,Object.assign({},n,{children:e.jsx(t.Suspense,Object.assign({fallback:e.jsx(dl,{})},{children:e.jsx(cl,{})}))})),exports.Markup=EE,exports.MaskedInput=aS,exports.Masonry=NE,exports.Masthead=RE,exports.MediaQuery=is,exports.MediaWidths=as,exports.Modal=Sh,exports.MyLegacyTheme=yl,exports.NBComponent=WM,exports.Navbar=EM,exports.NavbarHeight=MM,exports.NavbarMobileHeight=3.5,exports.NotificationBanner=UM,exports.OneServiceTheme=wl,exports.OtpInput=n=>{var{id:r,value:i=[],"data-testid":a,className:o,cooldownDuration:s,actionButtonProps:l,errorMessage:c,numOfInput:d,onChange:u,onCooldownStart:f,onCooldownEnd:h}=n,p=X(n,["id","value","data-testid","className","cooldownDuration","actionButtonProps","errorMessage","numOfInput","onChange","onCooldownStart","onCooldownEnd"]);const g=null!=l?l:{},{disabled:m,onClick:b,styleType:v="secondary"}=g,y=X(g,["disabled","onClick","styleType"]),x=t.useRef([]),w=t.useRef(u),[$,j]=t.useState(new Array(d).fill("")),[S,k]=t.useState(s),[O,C]=t.useState(new Date);t.useEffect((()=>{var e;return null===(e=null==x?void 0:x.current[0])||void 0===e||e.focus(),document.addEventListener("paste",_),()=>document.removeEventListener("paste",_)}),[]),t.useEffect((()=>{if(0!==s){f&&f();const e=I();return()=>e()}}),[O]),t.useEffect((()=>{w.current=u}),[u]),t.useEffect((()=>{i.length===d&&j(i)}),[i]);const D=e=>t=>{var n;const r=t.target.value.replace(/[^0-9]/g,"");if(E(r)){const t=[...$];t[e]=r.substring(r.length-1),null===(n=x.current[e+1])||void 0===n||n.focus(),j(t),u&&u(t)}},T=e=>t=>{var n;const{key:r,code:i}=t;if("Backspace"===r||"Backspace"===i){const t=[...$];""!==t[e]?t[e]="":0!==e&&(t[e-1]="",null===(n=x.current[e-1])||void 0===n||n.focus()),j(t),u&&u(t)}},_=e=>{const t=e.clipboardData.getData("text"),n=t.split("");t&&E(t,d)?(j(n),w.current&&w.current(n)):e.preventDefault()},E=(e,t=1)=>!!e&&RegExp(`^[0-9]{${t}}$`).test(e),M=()=>{const e=Date.now(),t=1e3*s;return e<O.valueOf()+t},I=()=>{const e=setInterval((()=>{const t=Date.now(),n=1e3*s,r=Math.ceil((O.valueOf()+n-t)/1e3);k(r),r<=0&&(h&&h(),clearInterval(e))}),1e3);return()=>{clearInterval(e)}},N=(e,t,n)=>n?`${n}-${t}-${e+1}`:`${t}-${e+1}`;return e.jsxs(XM,Object.assign({id:r,"data-testid":a,className:o},{children:[e.jsx(GM,{children:$.map(((t,n)=>e.jsx(ZM,Object.assign({id:N(n,"otp-input",r),"data-testid":N(n,"otp-input",a),"aria-label":`Enter OTP character ${n+1}`,ref:e=>x.current[n]=e,type:"text",inputMode:"numeric",value:t,error:!!c,onChange:D(n),onKeyDown:T(n),autoComplete:"off"},p),n)))}),c&&e.jsx(ay,{children:c}),e.jsx(QM,Object.assign({styleType:v,type:"button"},y,{onClick:e=>{j(new Array(d).fill("")),M()||(C(new Date),k(s)),b&&b(e)},disabled:m||M()},{children:y.children?y.children:"Resend OTP"+(S?` in ${S} second${S>1?"s":""}`:"")}))]}))},exports.Overlay=sh,exports.Pagination=fI,exports.PhoneNumberInput=xO,exports.Pill=mI,exports.Popover=$I,exports.PopoverInline=Qv,exports.PopoverTrigger=qv,exports.PopoverV2=Uv,exports.PredictiveTextInput=jO,exports.ProgressIndicator=t=>{var{steps:n,currentIndex:r,displayExtractor:i,fadeColor:a,fadePosition:o="both"}=t,s=X(t,["steps","currentIndex","displayExtractor","fadeColor","fadePosition"]);const l=Dl.useMediaQuery({maxWidth:as.tablet}),c=e=>i?i(e):e.toString(),d=(e,t)=>pN(`${((e,t)=>e<t?"Completed step":e===t?"Current step":"Uncompleted step")(e,t)} ${e}`);if(!n.length)return null;return e.jsxs(jI,Object.assign({},s,{children:[e.jsx(SI,{children:n.map(((t,n)=>{const i=n<=r;return e.jsx(DI,Object.assign({id:d(n,r)},{children:e.jsx(kI,{highlighted:i})}),n)}))}),e.jsx(SI,{children:l?e.jsxs(DI,Object.assign({id:d(r,r)},{children:[e.jsxs(CI,Object.assign({weight:"semibold",id:`${d(r,r)}-counter`},{children:["Step ",r+1," of ",n.length]})),e.jsx(CI,Object.assign({weight:"regular",id:`${d(r,r)}-title`},{children:c(n[r])}))]}),r):n.map(((t,n)=>{const i=n<=r,a=n===r,o=a?"bold":"regular";return e.jsx(DI,Object.assign({id:`${d(n,r)}-title`},{children:e.jsx(OI,Object.assign({highlighted:i,weight:o,"aria-current":a},{children:c(t)}))}),n)}))})]}))},exports.RBSTheme=vl,exports.RadioButton=t=>{var{className:n,checked:r,disabled:i,onChange:a}=t,o=X(t,["className","checked","disabled","onChange"]);return e.jsxs(gN,Object.assign({$selected:r,$disabled:i,className:n,"data-testid":"radio-button"},{children:[e.jsx(mN,Object.assign({type:"radio","data-testid":"radio-input",onChange:e=>{i||null==a||a(e)},checked:r,disabled:i},o)),e.jsx(bN,{id:"checkmark","data-testid":"checkmark",$disabled:i,$selected:r})]}))},exports.SelectHistogram=NO,exports.Sidenav=PN,exports.SignatureCanvas=Wh,exports.SignatureCanvasContainer=Hh,exports.SmartAppBanner=aA,exports.Tab=xA,exports.Tag=t=>{var{type:n,colorType:r="black",children:i,interactive:a=!1,icon:o,iconPosition:s="left"}=t,l=X(t,["type","colorType","children","interactive","icon","iconPosition"]);return e.jsxs(wA,Object.assign({as:a?"button":"div",$type:n,$color:r,$interactive:a},l,{children:["left"===s&&o,e.jsx($A,{children:i}),"right"===s&&o]}))},exports.TextList=eC,exports.TextStyle=hs,exports.TextStyleHelper=ys,exports.Textarea=zO,exports.TimeRangePicker=AC,exports.TimeSlotBar=({"data-testid":n,className:r,variant:i="default",startTime:a,endTime:o,slots:s,onSlotClick:l,onClick:c,styleAttributes:d})=>{const u=t.useRef(null),[f,h]=t.useState(0),[p,g]=t.useState(0),m=kA(i),b=2.5*m;t.useEffect((()=>{const e=u.current;return e&&e.addEventListener("scroll",v),()=>{e&&e.removeEventListener("scroll",v)}}),[]);const v=()=>{u.current&&h(u.current.scrollLeft)},y=e=>{u.current&&u.current.scrollBy({left:"left"===e?-b:b,behavior:"smooth"})};qe({onResize:()=>{u.current&&g(u.current.clientWidth)},targetRef:u,refreshMode:"debounce",refreshRate:50});const x=e=>e<=m/2,w=e=>{if(n)return`${n}-${e}`},$=(e,t,n)=>{const r=0===e.minute();if("default"===n)return r;return r&&(t?e.hour()%2==0:e.hour()%2==1)};return e.jsxs(CA,Object.assign({className:r},{children:[e.jsxs(EA,Object.assign({"data-testid":n,ref:u,$variant:i},{children:[e.jsx(MA,Object.assign({"data-testid":w("time-marker-wrapper"),"data-id":"marker-wrapper"},{children:(()=>{const t=[],n=Wl(a,"HH:mm"),r=Wl(o,"HH:mm"),s=n.hour()%2==0;for(let a=n;a.isBefore(r);a=a.add(30,"minute")){const n=$(a,s,i);t.push(e.jsx(NA,Object.assign({$isLongMarker:n,$variant:i},{children:n&&e.jsx(AA,Object.assign({weight:"semibold"},{children:jA.formatHourlyDisplay(a.format("HH:mm"))}))}),a.format("HH:mm")))}return t})()})),e.jsxs(IA,Object.assign({"data-testid":w("time-slot-wrapper"),"data-id":"slot-wrapper"},{children:[d&&(()=>{const{backgroundColor:t,backgroundColor2:n,styleType:r="default"}=d,s=jA.calculateWidth(a,o,m),l=!!c&&"default"===i;return e.jsxs(e.Fragment,{children:[e.jsx(FA,{$variant:i}),e.jsx(RA,{"data-testid":w("default-timeslot"),$width:s,$variant:i,$left:0,$styleType:r,$bgColor:t,$bgColor2:n,$clickable:l,onClick:l?c:void 0},"default-timeslot")]})})(),s.map((t=>{const{id:n,startTime:r,endTime:s,label:c,clickable:d=!0,styleAttributes:u}=t,{color:f,styleType:h="default",backgroundColor:p,backgroundColor2:g}=u,b=jA.calculateWidth(r,s,m),v=jA.calculateWidth(a,r,m),y=d&&"default"===i;return e.jsxs("div",{children:[e.jsx(FA,{$variant:i,style:{left:`${v}px`}}),e.jsx(RA,Object.assign({"data-testid":w(`${n}-timeslot`),$width:b,$left:v,$styleType:h,$variant:i,$bgColor:p,$bgColor2:g,$clickable:y,onClick:()=>y&&l(t)},{children:c&&"default"===i&&e.jsx(BA,Object.assign({$slotWidth:b,$color:f,weight:"semibold"},{children:x(b)?"...":c}))})),o!==s&&e.jsx(FA,{$variant:i,style:{left:`${v+b}px`}})]},n)}))]}))]})),e.jsx(e.Fragment,{children:f>0&&e.jsx(DA,Object.assign({"data-testid":w("arrow-left"),$direction:"left",$variant:i,focusHighlight:!1,focusOutline:"none",onClick:()=>{y("left")}},{children:e.jsx(_A,{})}))}),f+p<jA.calculateWidth(a,o,m)?e.jsx(DA,Object.assign({"data-testid":w("arrow-right"),$direction:"right",$variant:i,focusHighlight:!1,focusOutline:"none",onClick:()=>{y("right")}},{children:e.jsx(TA,{})})):e.jsx(e.Fragment,{})]}))},exports.TimeSlotBarWeek=n=>{var{disabledDates:r,onWeekDisplayChange:i,onChange:a,value:o,minDate:s,maxDate:l,startTime:c,endTime:d,slots:u,interval:f,variant:h,maxVisibleCellHeight:p,showNavigationHeader:g=!0,enableSelection:m,onSlotClick:b,currentCalendarDate:v}=n,y=X(n,["disabledDates","onWeekDisplayChange","onChange","value","minDate","maxDate","startTime","endTime","slots","interval","variant","maxVisibleCellHeight","showNavigationHeader","enableSelection","onSlotClick","currentCalendarDate"]);const[x,w]=t.useState(o),$=t.useRef(),j=t.useRef(void 0);t.useEffect((()=>{w(o)}),[o]);const S=e=>{const t=e.format(uR);w(t),a&&a(t)},k=(e,t)=>{b&&b(e,t)},O=e=>{if(i){const t={week:{firstDayOfWeek:e.startOf("week").format(uR),lastDayOfWeek:e.endOf("week").format(uR)},month:e.month()+1,year:e.year()};i(t)}};return e.jsx(dR,Object.assign({},y,{children:e.jsx(Qc,Object.assign({ref:$,type:"standalone",dynamicHeight:!0,initialCalendarDate:sc.toDayjs(x||v).endOf("week").format(uR),selectedStartDate:x,getLeftArrowDate:e=>e.subtract(1,"week"),getRightArrowDate:e=>e.add(1,"week"),isLeftArrowDisabled:e=>s&&Wl(e).subtract(1,"week").isBefore(s,"week"),isRightArrowDisabled:e=>l&&Wl(e).add(1,"week").isAfter(l,"week"),onCalendarDateChange:e=>{j.current&&j.current.isSame(e,"week")||O(e),j.current=e},showNavigationHeader:g,minDate:s,maxDate:l,getMonthHeaderLabel:e=>Wl(e).endOf("week").format("MMM"),getYearHeaderLabel:e=>Wl(e).endOf("week").format("YYYY")},{children:({calendarDate:t})=>(t=>e.jsx(cR,{calendarDate:t,disabledDates:r,selectedDate:x,minDate:s,maxDate:l,startTime:c,endTime:d,onSelect:S,slots:u,interval:f,variant:h,maxVisibleCellHeight:p,enableSelection:m,onSlotClick:k}))(t)}))}))},exports.TimeSlotWeekView=n=>{var{disabledDates:r,onWeekDisplayChange:i,onChange:a,value:o,minDate:s,maxDate:l,slots:c,showNavigationHeader:d=!0,enableSelection:u,onSlotClick:f,currentCalendarDate:h}=n,p=X(n,["disabledDates","onWeekDisplayChange","onChange","value","minDate","maxDate","slots","showNavigationHeader","enableSelection","onSlotClick","currentCalendarDate"]);const[g,m]=t.useState(o),b=t.useRef(),v=t.useRef(void 0);t.useEffect((()=>{m(o)}),[o]);const y=e=>{const t=e.format(wR);m(t),a&&a(t)},x=(e,t)=>{f&&f(e,t)},w=e=>{if(i){const t={week:{firstDayOfWeek:e.startOf("week").format(wR),lastDayOfWeek:e.endOf("week").format(wR)},month:e.month()+1,year:e.year()};i(t)}};return e.jsx(xR,Object.assign({},p,{children:e.jsx(Qc,Object.assign({ref:b,type:"standalone",dynamicHeight:!0,initialCalendarDate:sc.toDayjs(g||h).endOf("week").format(wR),selectedStartDate:g,getLeftArrowDate:e=>e.subtract(1,"week"),getRightArrowDate:e=>e.add(1,"week"),isLeftArrowDisabled:e=>s&&Wl(e).subtract(1,"week").isBefore(s,"week"),isRightArrowDisabled:e=>l&&Wl(e).add(1,"week").isAfter(l,"week"),onCalendarDateChange:e=>{v.current&&v.current.isSame(e,"week")||w(e),v.current=e},showNavigationHeader:d,minDate:s,maxDate:l,getMonthHeaderLabel:e=>Wl(e).endOf("week").format("MMM"),getYearHeaderLabel:e=>Wl(e).endOf("week").format("YYYY")},{children:({calendarDate:t})=>e.jsx(yR,{calendarDate:t,disabledDates:r,selectedDate:g,minDate:s,maxDate:l,onSelect:y,slots:c,enableSelection:u,onSlotClick:x})}))}))},exports.TimeTable=n=>{var{date:r,emptyContentMessage:i,rowData:a,loading:o,minTime:s="00:00",maxTime:l="23:00",minDate:c,maxDate:d,totalRecords:u,showCurrentDateAsToday:f,showDateAsShortForm:h,onPage:p,onRefresh:g,onNextDayClick:m,onPreviousDayClick:b,onCalendarDateSelect:v}=n,y=X(n,["date","emptyContentMessage","rowData","loading","minTime","maxTime","minDate","maxDate","totalRecords","showCurrentDateAsToday","showDateAsShortForm","onPage","onRefresh","onNextDayClick","onPreviousDayClick","onCalendarDateSelect"]);const x=y["data-testid"]||"timetable",w=vu.roundToNearestHour(s),$=vu.roundToNearestHour(l,!0),j=vu.generateHourlyIntervals(w,$),S=0===u||iS.isEmpty(a),k=S||a.length===u,O=t.useRef(null),C=t.useRef(null),[D,T]=t.useState(!1),[_,E]=t.useState(!1),[M,I]=t.useState(0),[N,A]=t.useState(!1);t.useEffect((()=>{const e=iS.throttle((()=>{if(O.current&&(T(O.current.scrollLeft>0),E(O.current.scrollTop>0)),N)return;const{scrollTop:e,clientHeight:t,scrollHeight:n}=O.current;Math.ceil(e+t)>=n-1&&!k&&p&&!o&&(A(!0),p())}),100),t=O.current;return t&&t.addEventListener("scroll",e),()=>{t&&t.removeEventListener("scroll",e)}}),[k,N,o,p]),t.useEffect((()=>{A(!1)}),[a]);qe({onResize:()=>{if(O.current){const e=Math.ceil(60*j.length/15),t=(O.current.clientWidth-IR)/e;I(t>21?t:21)}},targetRef:O,refreshMode:"debounce",refreshRate:50});const R=(()=>{let e=0;const t=MR.length;return()=>{const n=MR[e];return e=(e+1)%t,n}})(),F=({wrapper:e,children:t})=>e(t),B=()=>{if(!o&&N)return e.jsx(aF,Object.assign({$isScrolled:D},{children:e.jsx(hF,{})}))},P=()=>{if(!o&&N)return e.jsx(dF,Object.assign({"data-testid":"lazy-loader"},{children:j.map(((t,n)=>e.jsx(uF,Object.assign({$width:4*M},{children:e.jsx(hF,{})}),`lazy-load-cell-${n}`)))}))};return S?e.jsxs(GR,Object.assign({},y,{"data-testid":x},{children:[e.jsx(LR,{selectedDate:r,loading:o||N,tableContainerRef:O,minDate:c,maxDate:d,totalRecords:u,showCurrentDateAsToday:f,showDateAsShortForm:h,onPreviousDayClick:b,onNextDayClick:m,onRefresh:g,onCalendarDateSelect:v}),e.jsx(ZR,Object.assign({className:"empty-container"},{children:o?e.jsx(lF,{$isEmptyContent:S}):e.jsx(cF,{type:"no-item-found",description:i})}))]})):e.jsxs(GR,Object.assign({},y,{"data-testid":x},{children:[e.jsx(LR,{"data-id":"timetable-date-navigator",selectedDate:r,loading:o||N,tableContainerRef:O,minDate:c,maxDate:d,totalRecords:u,showCurrentDateAsToday:f,showDateAsShortForm:h,onPreviousDayClick:b,onNextDayClick:m,onRefresh:g,onCalendarDateSelect:v}),e.jsxs(QR,Object.assign({"data-id":"timetable-container","data-testid":"timetable-container",ref:O,$loading:o,$allRecordsLoaded:k||!p},{children:[e.jsx(JR,{$isScrolledY:_,$isScrolledX:D}),e.jsx(eF,Object.assign({$numOfRows:a.length,$isScrolled:D,"data-testid":"row-header-column-id"},{children:e.jsxs(e.Fragment,{children:[a.map(((n,r)=>e.jsx(F,Object.assign({wrapper:e=>((e,n)=>{if(!e.rowHeaderPopover)return n;const r={position:"bottom-start",rootNode:O,customOffset:e.rowHeaderPopover.offset,children:n,trigger:e.rowHeaderPopover.trigger,delay:e.rowHeaderPopover.delay,popoverContent:e.rowHeaderPopover.content};return t.createElement(pF,Object.assign({},r,{key:`${e.id}-popover-trigger`,zIndex:2}),n)})(n,e)},{children:e.jsxs(aF,Object.assign({$isScrolled:D},{children:[e.jsx(oF,Object.assign({$isClickable:!!n.onRowNameClick,onClick:e=>((e,t)=>{e.onRowNameClick&&e.onRowNameClick(e,t)})(n,e),weight:"semibold","data-testid":`${n.id}-row-header-title`},{children:n.name})),e.jsx(sF,Object.assign({weight:"bold",$show:!!n.subtitle,"data-testid":`${n.id}-row-header-subtitle`},{children:n.subtitle}))]}),`${n.id}-row-header`)}),r))),B()]})})),e.jsx(tF,Object.assign({$numOfColumns:j.length,$isScrolled:_},{children:j.map((t=>e.jsx(nF,Object.assign({"data-testid":`${t}-column`},{children:e.jsx(rF,Object.assign({weight:"semibold"},{children:t}))}),`${t}-column-key`)))})),o?e.jsx(lF,{$isEmptyContent:S}):e.jsxs(iF,Object.assign({"data-testid":"content-container-id",ref:C,$numOfRows:a.length},{children:[a.map(((t,n)=>e.jsx(XR,Object.assign({timetableMinTime:w,timetableMaxTime:$,rowBarColor:R(),intervalWidth:M,containerRef:C},t),`${n}-row-bar`))),P()]}))]}))]}))},exports.Timeline=({items:n,className:r,title:i,startCol:a,colSpan:o,"data-base-indicator-testid":s,"data-testid":l="timeline"})=>{const c=t=>"string"==typeof t?e.jsx(exports.Text.Body,Object.assign({className:"timeline-item-content-text"},{children:t})):e.jsx(e.Fragment,{children:t}),d=t=>"string"==typeof t?e.jsx(CR,Object.assign({weight:"semibold",className:"timeline-item-title"},{children:t})):e.jsx(e.Fragment,{children:t}),f=e=>e.slice(0,2).map(((e,n)=>t.createElement(ER,Object.assign({},e,{type:e.type,key:`status-pill-${n}`,"data-testid":"status-pill",className:"timeline-status-pill"}),e.children))),h=t=>{switch(t){case"completed":return e.jsx(u.TickIcon,{});case"error":return e.jsx(u.ExclamationCircleFillIcon,{});default:return null}};return e.jsxs(kR,Object.assign({className:r,"data-testid":l,$startCol:a,$colSpan:o},{children:[e.jsx(OR,Object.assign({id:"timeline-title"},{children:i})),n.map(((t,n)=>{const{title:r,content:i,statuses:a,variant:o}=t,l=s?`circleindicator${n+1}_div_${s}`:"circleindicator",u=o||(0===n?"current":"upcoming-active");return e.jsxs(DR,{children:[e.jsxs(SR,{children:[e.jsx($R,Object.assign({"data-testid":l,$variant:u},{children:h(u)})),e.jsx(jR,{$variant:u})]}),e.jsxs(TR,Object.assign({className:"timeline-item-content"},{children:[d(r),a&&e.jsx(_R,{children:f(a)}),c(i)]}))]},`timeline-item-${n}`)}))]}))},exports.Timepicker=FC,exports.Toast=n=>{var{type:r="success",title:i,label:a,autoDismiss:o,autoDismissTime:s=SF,onDismiss:l,fixed:c=!0,actionButton:d}=n,f=X(n,["type","title","label","autoDismiss","autoDismissTime","onDismiss","fixed","actionButton"]);const[h,p]=t.useState(!1),g=Dl.useMediaQuery({maxWidth:ns.tablet});t.useEffect((()=>{p(!0)}),[]),t.useEffect((()=>{if(!o)return;const e=setTimeout((()=>{p(!1)}),s);return()=>clearTimeout(e)}),[o]);const m=di({opacity:h?1:0,transform:h?g?"translateY(0%)":"translateX(0%)":g?"translateY(-1500%)":"translateX(150%)",config:{easing:un.easeInOutQuart,duration:1e3},onRest:()=>{h||null==l||l()}});return e.jsxs(mF,Object.assign({style:m,$type:r,$fixed:c},f,{children:[e.jsxs(bF,{children:[e.jsxs(vF,Object.assign({$type:r},{children:[(()=>{switch(r){case"success":return e.jsx(u.TickCircleFillIcon,{});case"warning":return e.jsx(u.ExclamationTriangleFillIcon,{});case"error":return e.jsx(u.ExclamationCircleFillIcon,{});case"info":return e.jsx(u.ICircleFillIcon,{});default:return null}})(),e.jsxs(yF,{children:[i&&(Y.default.isValidElement(i)?i:e.jsx(xF,Object.assign({$type:r,weight:"semibold"},{children:i}))),a&&e.jsx(wF,Object.assign({$type:r},{children:Y.default.isValidElement(a)?a:i?e.jsx(exports.Text.BodySmall,{children:a}):e.jsx(exports.Text.Body,{children:a})}))]})]})),d&&e.jsx($F,Object.assign({styleType:"light",onClick:d.onClick},{children:d.label}))]}),e.jsx(jF,Object.assign({$type:r,onClick:()=>{p(!1)}},{children:e.jsx(u.CrossIcon,{})}))]}))},exports.Toggle=gC,exports.Tooltip=TF,exports.Transition=Ss,exports.UneditableSection=KF,exports.UnitNumberInput=VC,exports.__awaiter=G,exports.commonjsGlobal=Ti,exports.getAugmentedNamespace=function(e){if(e.__esModule)return e;var t=e.default;if("function"==typeof t){var n=function e(){return this instanceof e?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var r=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(n,t,r.get?r:{enumerable:!0,get:function(){return e[t]}})})),n},exports.withNotificationBanner=t=>Y.default.forwardRef(((n,r)=>e.jsx(WM,Object.assign({forwardedRef:r},n,{children:t.length>0?t.map(((t,n)=>{if("text"===t.type){const r=t.otherAttributes,i=qM.sanitize(t.content);return e.jsx("p",Object.assign({},r,{dangerouslySetInnerHTML:{__html:i}}),n)}{const r=t.otherAttributes;return e.jsx(UM.Link,Object.assign({},r,{children:t.content}),n)}})):(console.error("[NotificationBannerHOC] Empty data passed"),null)})))),exports.withPopover=(n,r)=>i=>{const{onPopoverAppear:a,onPopoverDismiss:o}=i,s=X(i,["onPopoverAppear","onPopoverDismiss"]),l=r.trigger||"click",c=s,[d,u]=t.useState(!1),f=t.useRef(),h=Dl.useMediaQuery({maxWidth:ns.mobileL});t.useEffect((()=>{if(!h)return document.addEventListener("mousedown",p),()=>{document.removeEventListener("mousedown",p)}}),[d]);const p=e=>{f&&!f.current.contains(e.target)&&(d&&u(!1),o&&o())};return e.jsxs(yI,Object.assign({id:"popover-hoc-wrapper",ref:f},{children:[e.jsx(xI,Object.assign({id:`popover-hoc-trigger${r["data-testid"]&&`-${r["data-testid"]}`}`,type:"button",onClick:e=>{e.preventDefault(),("click"===l||h)&&(u(!d),!d&&a&&a(),d&&o&&o())},onMouseEnter:()=>{"hover"!==l||h||u(!0)},onMouseLeave:()=>{"hover"===l&&d&&!h&&u(!1)},"aria-label":"popover-button"},{children:e.jsx(n,Object.assign({},c))})),e.jsx($I,Object.assign({visible:d,id:r.id,"data-testid":r["data-testid"],onMobileClose:()=>{u(!1)}},{children:r.content}))]}))},exports.withTooltip=(t,n)=>r=>{const{tooltipVisible:i,position:a}=r,o=X(r,["tooltipVisible","position"]);return e.jsxs(DF,{children:[e.jsx(t,Object.assign({},o)),e.jsx(TF,Object.assign({visible:i,position:a},{children:n.content}))]})};
//# sourceMappingURL=index.832cd9af.js.map
